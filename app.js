
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const KEY="rems-control-v03-cache";
const OLDKEY="rems-control-v02";
const OLDERKEY="rems-control-v01";
const CLOUD_DOC="main";
const clone=x=>JSON.parse(JSON.stringify(x));
let db=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(OLDKEY)||localStorage.getItem(OLDERKEY)||"null")||clone(window.REMS_SEED);
let cloudDb=null, cloudReady=false, applyingRemote=false;
const statusEl=()=>document.querySelector("#cloudStatus");
const setStatus=(text)=>{ if(statusEl()) statusEl().textContent=text; };
const cache=()=>localStorage.setItem(KEY,JSON.stringify(db));
const save=async()=>{
  cache();
  if(!cloudReady||!cloudDb||applyingRemote) return;
  try{
    setStatus("v0.3 · збереження…");
    await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{...clone(db),updatedAt:new Date().toISOString()});
    setStatus("v0.3 · хмара ✓");
  }catch(err){ console.error(err); setStatus("v0.3 · помилка хмари"); }
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const app=$("#app");
const fmt=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit"});
const fullfmt=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"});
const pBy=id=>db.projects.find(p=>p.id===id);
const sBy=id=>db.students.find(s=>s.id===id);
const eventsFor=id=>db.events.filter(e=>e.projectId===id).sort((a,b)=>a.date.localeCompare(b.date));
const assForStudent=id=>db.assignments.filter(a=>a.studentId===id);
const studentProjects=id=>assForStudent(id).map(a=>pBy(a.projectId)).filter(Boolean);
const projectStudents=id=>db.assignments.filter(a=>a.projectId===id).map(a=>sBy(a.studentId)).filter(Boolean);
const countDays=id=>new Set(studentProjects(id).flatMap(p=>eventsFor(p.id).map(e=>e.date))).size;
const eventAssignments=()=>{
  const map={};
  db.assignments.forEach(a=>{
    eventsFor(a.projectId).forEach(e=>{
      const k=`${a.studentId}|${e.date}`;
      (map[k] ||= []).push(pBy(a.projectId));
    });
  });
  return map;
}
const countConflicts=()=>{
  const map=eventAssignments(); return Object.values(map).filter(v=>v.length>1).length;
}
function switchView(v,label){
  $$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));
  $("#pageTitle").textContent=label||({dashboard:"Головна",students:"Студенти",projects:"Проєкти",calendar:"Календар"}[v]);
  views[v]();
}
function dashboard(){
  const assigned=new Set(db.assignments.map(a=>a.studentId)).size;
  const conflicts=countConflicts();
  app.innerHTML=`${conflicts?`<div class="notice warn">⚠️ Знайдено конфліктів: <b>${conflicts}</b>. Відкрийте календар — вони підсвічені червоним.</div>`:`<div class="notice ok">✓ Конфліктів у поточних призначеннях не знайдено.</div>`}
  <div class="grid kpis">
    <div class="card kpi"><span>Студентів</span><strong>${db.students.length}</strong></div>
    <div class="card kpi"><span>Проєктів</span><strong>${db.projects.length}</strong></div>
    <div class="card kpi"><span>Задіяно студентів</span><strong>${assigned}</strong></div>
    <div class="card kpi"><span>Подій у базі</span><strong>${db.events.length}</strong></div>
  </div>
  <div class="grid two">
    <div class="card"><h2>Активні проєкти</h2><div class="project-list">${db.projects.map(p=>`
      <div class="project-row"><div class="project-left"><span class="dot" style="background:${p.color}"></span><div><b>${p.emoji||"◆"} ${p.name}</b><div class="muted">${eventsFor(p.id).length} дат · ${projectStudents(p.id).length} студентів</div></div></div></div>`).join("")}</div></div>
    <div class="card"><h2>Найбільш зайняті</h2><div class="student-list">${[...db.students].sort((a,b)=>countDays(b.id)-countDays(a.id)).slice(0,8).map(s=>`
      <div class="student-row clickable-student" data-id="${s.id}" style="cursor:pointer"><div><b>${s.name}</b><div class="muted">${s.group}</div></div><strong>${countDays(s.id)} дн.</strong></div>`).join("")}</div></div>
  </div>`;
  $$(".clickable-student").forEach(x=>x.onclick=()=>openStudent(+x.dataset.id));
}
function students(){
  app.innerHTML=`<div class="toolbar"><input id="studentSearch" placeholder="Пошук студента..."><select id="studentProjectFilter"><option value="">Усі проєкти</option>${db.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")}</select></div><div class="students-grid" id="studentsGrid"></div>`;
  const render=()=>{
    const q=($("#studentSearch").value||"").toLowerCase(), pf=$("#studentProjectFilter").value;
    $("#studentsGrid").innerHTML=db.students.filter(s=>s.name.toLowerCase().includes(q)&&(!pf||assForStudent(s.id).some(a=>a.projectId===pf))).map(s=>`
      <div class="student-card" data-id="${s.id}"><h3>${s.name}</h3><div class="muted">${s.group} · ${countDays(s.id)} зайнятих днів</div>
      <div class="chips">${studentProjects(s.id).map(p=>`<span class="chip" style="background:${p.color}">${p.name}</span>`).join("")||'<span class="muted">Проєктів ще немає</span>'}</div></div>`).join("")||'<div class="empty">Нічого не знайдено.</div>';
    $$(".student-card").forEach(x=>x.onclick=()=>openStudent(+x.dataset.id));
  };
  $("#studentSearch").oninput=render; $("#studentProjectFilter").onchange=render; render();
}
function openStudent(id){
  const s=sBy(id); if(!s) return;
  const ps=studentProjects(id);
  const items=[];
  ps.forEach(p=>eventsFor(p.id).forEach(e=>items.push({...e,p})));
  items.sort((a,b)=>a.date.localeCompare(b.date));
  $("#studentDialogBody").innerHTML=`<div class="student-profile">
    <div class="profile-head"><div><h2>${s.name}</h2><div class="muted">${s.group}</div></div><button class="ghost" onclick="document.querySelector('#studentDialog').close()">Закрити</button></div>
    <div class="profile-stats"><div class="profile-stat"><span class="muted">Проєктів</span><strong>${ps.length}</strong></div><div class="profile-stat"><span class="muted">Зайнятих днів</span><strong>${countDays(id)}</strong></div><div class="profile-stat"><span class="muted">Конфліктів</span><strong>${studentConflicts(id)}</strong></div></div>
    <div class="profile-section"><b>Проєкти</b><div class="chips">${ps.map(p=>`<span class="chip" style="background:${p.color}">${p.name}</span>`).join("")||'<span class="muted">Немає</span>'}</div></div>
    <div class="profile-section"><b>Календар зайнятості</b><div class="timeline">${items.map(x=>`<div class="timeline-row"><span>${fullfmt(x.date)} · ${x.type}</span><span class="chip" style="background:${x.p.color}">${x.p.name}</span></div>`).join("")||'<div class="muted">Подій немає</div>'}</div></div>
  </div>`;
  $("#studentDialog").showModal();
}
function studentConflicts(id){
  const map=eventAssignments(); return Object.entries(map).filter(([k,v])=>k.startsWith(id+"|")&&v.length>1).length;
}
function projects(){
  app.innerHTML=db.projects.map(p=>{
    const assigned=projectStudents(p.id).map(s=>s.id);
    return `<div class="project-card">
      <div class="project-card-header"><div><h3><span class="dot" style="background:${p.color}"></span> ${p.emoji||"◆"} ${p.name}</h3><div class="muted">${eventsFor(p.id).length} дат · ${assigned.length} студентів</div></div>
      <button class="ghost add-event" data-id="${p.id}">+ Дата</button></div>
      <div class="events">${eventsFor(p.id).map((e,i)=>`<span class="event">${fmt(e.date)} · ${e.type}</span>`).join("")||'<span class="muted">Дат ще немає</span>'}</div>
      <div class="assign"><b>Призначити студентів</b><div class="muted">Натискання одразу додає або знімає студента з усього проєкту.</div><div class="assign-grid">${db.students.map(s=>`<button class="person-toggle ${assigned.includes(s.id)?"on":""}" data-project="${p.id}" data-student="${s.id}" title="${s.name}">${s.name.split(" ")[0]}</button>`).join("")}</div></div>
    </div>`;
  }).join("")||'<div class="empty">Проєктів ще немає.</div>';
  $$(".person-toggle").forEach(b=>b.onclick=()=>{
    const pid=b.dataset.project, sid=+b.dataset.student;
    const i=db.assignments.findIndex(a=>a.projectId===pid&&a.studentId===sid);
    if(i>=0) db.assignments.splice(i,1); else db.assignments.push({projectId:pid,studentId:sid});
    save(); projects();
  });
  $$(".add-event").forEach(b=>b.onclick=()=>{ $("#eventProjectId").value=b.dataset.id; $("#eventDialog").showModal(); });
}
function datesBetween(start,end){
  const a=[], d=new Date(start+"T12:00:00"), e=new Date(end+"T12:00:00");
  for(;d<=e;d.setDate(d.getDate()+1)) a.push(d.toISOString().slice(0,10));
  return a;
}
function calendar(){
  app.innerHTML=`<div class="toolbar"><select id="calPeriod"><option value="autumn">Вересень–листопад</option><option value="winter">Грудень–лютий</option><option value="all">Осінь + зима</option></select><select id="calProject"><option value="">Усі проєкти</option>${db.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")}</select><input id="calStudent" placeholder="Пошук студента..."><span class="spacer"></span><span class="muted">Червона рамка = накладка</span></div><div id="calendarMount"></div>`;
  const render=()=>{
    const period=$("#calPeriod").value;
    const ranges={autumn:["2026-09-01","2026-11-30"],winter:["2026-12-01","2027-02-28"],all:["2026-09-01","2027-02-28"]};
    const [start,end]=ranges[period], dates=datesBetween(start,end), pf=$("#calProject").value, q=$("#calStudent").value.toLowerCase();
    const map=eventAssignments();
    const students=db.students.filter(s=>s.name.toLowerCase().includes(q)&&(!pf||assForStudent(s.id).some(a=>a.projectId===pf)));
    $("#calendarMount").innerHTML=`<div class="calendar-wrap"><table class="calendar"><thead><tr><th class="name">Студент</th>${dates.map(d=>`<th>${fmt(d)}</th>`).join("")}</tr></thead><tbody>
    ${students.map(s=>`<tr><td class="name"><b>${s.name}</b><div class="muted">${s.group}</div></td>${dates.map(d=>{
      const day=new Date(d+"T12:00:00").getDay(), arr=(map[`${s.id}|${d}`]||[]).filter(p=>!pf||p.id===pf);
      const cls=(day===0||day===6?" weekend":"")+(arr.length>1?" conflict":"");
      if(!arr.length)return `<td class="${cls}"></td>`;
      return `<td class="${cls}" title="${arr.map(p=>p.name).join(" + ")}">${arr.map(p=>`<div class="busy" style="background:${p.color}">${p.name}</div>`).join("")}</td>`;
    }).join("")}</tr>`).join("")}
    </tbody></table></div>`;
  };
  $("#calPeriod").onchange=render; $("#calProject").onchange=render; $("#calStudent").oninput=render; render();
}
const views={dashboard,students,projects,calendar};
$$(".nav").forEach(b=>b.onclick=()=>switchView(b.dataset.view,b.querySelector("span")?.textContent||b.textContent.trim()));
$("#quickAdd").onclick=()=>$("#projectDialog").showModal();
$("#saveProject").onclick=e=>{
  e.preventDefault();
  const name=$("#projectName").value.trim(); if(!name)return;
  db.projects.push({id:"p_"+Date.now(),name,color:$("#projectColor").value,emoji:$("#projectEmoji").value||"◆"});
  save(); $("#projectDialog").close(); $("#projectForm").reset(); switchView("projects","Проєкти");
};
$("#saveEvent").onclick=e=>{
  e.preventDefault();
  const projectId=$("#eventProjectId").value,date=$("#eventDate").value,type=$("#eventType").value.trim();
  if(!date||!type)return;
  db.events.push({projectId,date,type}); save(); $("#eventDialog").close(); $("#eventForm").reset(); projects();
};
$("#backupBtn").onclick=()=>{
  const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="REMS_Control_backup.json";a.click();URL.revokeObjectURL(a.href);
};
$("#restoreInput").onchange=async e=>{
  const file=e.target.files[0]; if(!file)return;
  try{const obj=JSON.parse(await file.text()); if(!obj.students||!obj.projects)throw 0; db=obj;save();dashboard();alert("Резервну копію імпортовано.");}
  catch{alert("Не вдалося прочитати файл резервної копії.");}
  e.target.value="";
};
async function initCloud(){
  const cfg=window.REMS_FIREBASE_CONFIG;
  if(!cfg){ setStatus("v0.3 · локально"); dashboard(); return; }
  try{
    const firebaseApp=initializeApp(cfg);
    cloudDb=getFirestore(firebaseApp);
    const ref=doc(cloudDb,"rems_control",CLOUD_DOC);
    const snap=await getDoc(ref);
    if(snap.exists()){
      const remote=snap.data();
      db={students:remote.students||[],projects:remote.projects||[],events:remote.events||[],assignments:remote.assignments||[],settings:remote.settings||{}};
      cache();
    }else{
      await setDoc(ref,{...clone(db),updatedAt:new Date().toISOString()});
    }
    cloudReady=true; setStatus("v0.3 · хмара ✓"); dashboard();
    onSnapshot(ref,s=>{
      if(!s.exists()) return;
      const remote=s.data();
      applyingRemote=true;
      db={students:remote.students||[],projects:remote.projects||[],events:remote.events||[],assignments:remote.assignments||[],settings:remote.settings||{}};
      cache(); applyingRemote=false;
      const active=document.querySelector(".nav.active")?.dataset.view||"dashboard";
      views[active]();
    },err=>{ console.error(err); setStatus("v0.3 · офлайн-кеш"); });
  }catch(err){
    console.error(err); setStatus("v0.3 · офлайн-кеш"); dashboard();
  }
}

initCloud();
