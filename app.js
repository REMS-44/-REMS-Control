
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const KEY="rems-control-v031-cache";
const OLDKEY="rems-control-v02";
const OLDERKEY="rems-control-v01";
const CLOUD_DOC="main";
const clone=x=>JSON.parse(JSON.stringify(x));
let db=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(OLDKEY)||localStorage.getItem(OLDERKEY)||"null")||clone(window.REMS_SEED);
let cloudDb=null, cloudReady=false, applyingRemote=false, cloudInitializing=false, cloudWriting=false;
let firebaseApp=null, auth=null, currentUser=null;
const statusEl=()=>document.querySelector("#cloudStatus");
const setStatus=(text)=>{ if(statusEl()) statusEl().textContent=text; };
const cache=()=>localStorage.setItem(KEY,JSON.stringify(db));

const setWriteUiReady=(ready)=>{
  const btn=document.querySelector("#quickAdd");
  if(btn){
    btn.disabled=!ready;
    btn.title=ready ? "" : "Зачекайте, поки завантажиться хмарна база";
    btn.style.opacity=ready ? "1" : ".55";
  }
};

const save=async()=>{
  cache();
  if(applyingRemote) return true;
  if(!cloudReady||!cloudDb){
    setStatus("v0.7 · немає з’єднання");
    return false;
  }
  try{
    cloudWriting=true;
    setStatus("v0.7 · збереження…");
    const payload={...clone(db),updatedAt:new Date().toISOString()};
    await setDoc(
      doc(cloudDb,"rems_control",CLOUD_DOC),
      payload,
      {merge:false}
    );
    cache();
    setStatus("v0.7 · хмара ✓");
    return true;
  }catch(err){
    console.error(err);
    setStatus("v0.7 · помилка хмари");
    return false;
  }finally{
    setTimeout(()=>{ cloudWriting=false; },250);
  }
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
function safeUrl(url){
  if(!url) return "";
  try{
    const u=new URL(url,window.location.href);
    if(!["http:","https:"].includes(u.protocol)) return "";
    return u.href;
  }catch{return "";}
}
function esc(v=""){
  return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
function profileLink(label,url){
  const safe=safeUrl(url);
  return safe ? `<div><b>${label}:</b> <a href="${safe}" target="_blank" rel="noopener">відкрити</a></div>` : "";
}

function openStudent(id){
  const s=sBy(id); if(!s) return;
  const ps=studentProjects(id);
  const items=[];
  ps.forEach(p=>eventsFor(p.id).forEach(e=>items.push({...e,p})));
  items.sort((a,b)=>a.date.localeCompare(b.date));

  const photo=safeUrl(s.photoUrl);
  const photoBlock=photo
    ? `<div class="profile-photo"><img src="${photo}" alt="${esc(s.name)}"></div>`
    : `<div class="profile-photo">👤</div>`;

  const birthday=s.birthDate
    ? new Date(s.birthDate+"T12:00:00").toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit",year:"numeric"})
    : "";

  const contacts=[
    s.phone ? `<div class="contact-item"><b>Телефон</b><a href="tel:${esc(s.phone)}">${esc(s.phone)}</a></div>` : "",
    s.email ? `<div class="contact-item"><b>Email</b><a href="mailto:${esc(s.email)}">${esc(s.email)}</a></div>` : "",
    s.instagram ? `<div class="contact-item"><b>Instagram</b><span>${esc(s.instagram)}</span></div>` : "",
    s.telegram ? `<div class="contact-item"><b>Telegram</b><span>${esc(s.telegram)}</span></div>` : ""
  ].filter(Boolean).join("");

  const portfolioItems=[
    ["Резюме",s.resumeUrl,"📄"],
    ["Портфоліо",s.portfolioUrl,"🗂️"],
    ["Відео / роботи",s.worksUrl,"🎬"]
  ].map(([label,url,icon])=>{
    const safe=safeUrl(url);
    return safe ? `<a class="portfolio-card" href="${safe}" target="_blank" rel="noopener"><b>${icon} ${label}</b><span>Відкрити</span></a>` : "";
  }).filter(Boolean).join("");

  $("#studentDialogBody").innerHTML=`<div class="student-profile">
    <div class="profile-hero">
      <div class="profile-hero-top">
        <div class="profile-hero-title">
          ${photoBlock}
          <div class="profile-head-copy">
            <h2>${esc(s.name)}</h2>
            <div class="profile-meta">
              <span>${esc(s.group||"")}</span>
              ${birthday?`<span>🎂 ${birthday}</span>`:""}
            </div>
            <div class="chips" style="margin-top:14px">
              ${ps.map(p=>`<span class="project-pill" style="background:${p.color}">${p.emoji||"◆"} ${esc(p.name)}</span>`).join("")||'<span class="muted">Проєктів поки немає</span>'}
            </div>
          </div>
        </div>
        <div class="hero-actions">
          <button class="ghost" id="editStudentBtn">Редагувати</button>
          <button class="ghost" onclick="document.querySelector('#studentDialog').close()">Закрити</button>
        </div>
      </div>
    </div>

    <div class="profile-body">
      <div class="contact-grid">${contacts||'<div class="profile-empty">Контакти ще не додані</div>'}</div>

      <div class="profile-stats">
        <div class="profile-stat"><span class="muted">Проєктів</span><strong>${ps.length}</strong></div>
        <div class="profile-stat"><span class="muted">Зайнятих днів</span><strong>${countDays(id)}</strong></div>
        <div class="profile-stat"><span class="muted">Конфліктів</span><strong>${studentConflicts(id)}</strong></div>
      </div>

      <div class="profile-section">
        <div class="profile-section-title"><b>Резюме та портфоліо</b></div>
        <div class="portfolio-grid">${portfolioItems||'<div class="profile-empty">Посилань ще немає</div>'}</div>
      </div>

      ${s.notes?`<div class="profile-section">
        <div class="profile-section-title"><b>Нотатки</b></div>
        <div class="notes-card">${esc(s.notes)}</div>
      </div>`:""}

      <div class="profile-section">
        <div class="profile-section-title"><b>Календар зайнятості</b><span class="muted">${items.length} подій</span></div>
        <div class="timeline-scroll">
          <div class="timeline">
            ${items.map(x=>`<div class="timeline-row">
              <div class="timeline-date">${fullfmt(x.date)}</div>
              <div class="timeline-type">${esc(x.type)}</div>
              <span class="chip" style="background:${x.p.color}">${esc(x.p.name)}</span>
            </div>`).join("")||'<div class="profile-empty">Подій немає</div>'}
          </div>
        </div>
      </div>
    </div>
  </div>`;

  $("#editStudentBtn").onclick=()=>editStudent(id);
  $("#studentDialog").showModal();
}

function editStudent(id){
  const s=sBy(id); if(!s) return;
  $("#studentDialogBody").innerHTML=`<div class="student-profile">
    <div class="profile-head"><div><h2>Редагувати картку</h2><div class="muted">${esc(s.name)}</div></div></div>
    <form id="studentEditForm" class="profile-edit-form" style="margin-top:18px">
      <label>Телефон<input id="stPhone" value="${esc(s.phone||"")}" placeholder="+380..."></label>
      <label>Email<input id="stEmail" type="email" value="${esc(s.email||"")}"></label>
      <label>Дата народження<input id="stBirthDate" type="date" value="${esc(s.birthDate||"")}"></label>
      <label>Instagram<input id="stInstagram" value="${esc(s.instagram||"")}" placeholder="@username або посилання"></label>
      <label>Telegram<input id="stTelegram" value="${esc(s.telegram||"")}" placeholder="@username"></label>
      <label class="full">Фото — посилання<input id="stPhoto" value="${esc(s.photoUrl||"")}" placeholder="https://..."></label>
      <label class="full">Резюме — посилання<input id="stResume" value="${esc(s.resumeUrl||"")}" placeholder="https://..."></label>
      <label class="full">Портфоліо — посилання<input id="stPortfolio" value="${esc(s.portfolioUrl||"")}" placeholder="https://..."></label>
      <label class="full">Відео / роботи — посилання<input id="stWorks" value="${esc(s.worksUrl||"")}" placeholder="https://..."></label>
      <label class="full">Нотатки<textarea id="stNotes" placeholder="Внутрішні нотатки">${esc(s.notes||"")}</textarea></label>
      <div class="full profile-actions">
        <button type="button" class="ghost" id="cancelStudentEdit">Скасувати</button>
        <button type="submit" class="primary">Зберегти</button>
      </div>
    </form>
  </div>`;

  $("#cancelStudentEdit").onclick=()=>openStudent(id);
  $("#studentEditForm").onsubmit=async e=>{
    e.preventDefault();

    const submit=e.submitter || $("#studentEditForm button[type='submit']");
    if(submit){
      submit.disabled=true;
      submit.textContent="Збереження…";
    }

    const patch={
      phone:$("#stPhone").value.trim(),
      email:$("#stEmail").value.trim(),
      birthDate:$("#stBirthDate").value,
      instagram:$("#stInstagram").value.trim(),
      telegram:$("#stTelegram").value.trim(),
      photoUrl:$("#stPhoto").value.trim(),
      resumeUrl:$("#stResume").value.trim(),
      portfolioUrl:$("#stPortfolio").value.trim(),
      worksUrl:$("#stWorks").value.trim(),
      notes:$("#stNotes").value.trim()
    };

    db.students=db.students.map(student =>
      student.id===id ? {...student,...patch} : student
    );

    const ok=await save();
    if(!ok){
      if(submit){
        submit.disabled=false;
        submit.textContent="Зберегти";
      }
      alert("Не вдалося зберегти картку в хмару.");
      return;
    }

    const updated=sBy(id);
    if(!updated){
      alert("Картку збережено, але не вдалося відкрити студента.");
      return;
    }

    openStudent(id);
  };
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
  $$(".person-toggle").forEach(b=>b.onclick=async()=>{
    const pid=b.dataset.project, sid=+b.dataset.student;
    const i=db.assignments.findIndex(a=>a.projectId===pid&&a.studentId===sid);
    if(i>=0) db.assignments.splice(i,1); else db.assignments.push({projectId:pid,studentId:sid});
    await save(); projects();
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
$("#quickAdd").onclick=()=>{
  if(!cloudReady){
    alert("Зачекайте кілька секунд: REMS Control ще завантажує хмарну базу.");
    return;
  }
  $("#projectDialog").showModal();
};
$("#saveProject").onclick=async e=>{
  e.preventDefault();
  const name=$("#projectName").value.trim(); if(!name)return;
  db.projects.push({id:"p_"+Date.now(),name,color:$("#projectColor").value,emoji:$("#projectEmoji").value||"◆"});
  const ok=await save();
  $("#projectDialog").close(); $("#projectForm").reset(); switchView("projects","Проєкти");
  if(!ok) alert("Проєкт залишився тільки на цьому пристрої. Перевірте з’єднання з Firebase.");
};
$("#saveEvent").onclick=async e=>{
  e.preventDefault();
  const projectId=$("#eventProjectId").value,date=$("#eventDate").value,type=$("#eventType").value.trim();
  if(!date||!type)return;
  db.events.push({projectId,date,type});
  const ok=await save();
  $("#eventDialog").close(); $("#eventForm").reset(); projects();
  if(!ok) alert("Дата залишилась тільки на цьому пристрої. Перевірте з’єднання з Firebase.");
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

function ensureAuthStyles(){
  if(document.querySelector("#remsAuthStyles")) return;
  const style=document.createElement("style");
  style.id="remsAuthStyles";
  style.textContent=`
    #authGate{position:fixed;inset:0;z-index:9999;background:#111318;display:grid;place-items:center;padding:24px}
    #authGate .auth-card{width:min(420px,94vw);background:#fff;border-radius:22px;padding:26px;box-shadow:0 30px 90px #0007}
    #authGate .auth-brand{display:flex;align-items:center;gap:12px;margin-bottom:22px}
    #authGate .auth-logo{width:44px;height:44px;border-radius:13px;background:#111318;color:#fff;display:grid;place-items:center;font-weight:900}
    #authGate h2{margin:0;font-size:23px}
    #authGate p{margin:5px 0 0;color:#6b7280;font-size:13px}
    #authGate label{display:grid;gap:6px;margin:13px 0;color:#374151;font-size:13px}
    #authGate input{width:100%;border:1px solid #e5e7eb;border-radius:11px;padding:12px 13px;font-size:16px}
    #authGate button{width:100%;border:0;border-radius:11px;padding:12px 14px;background:#111827;color:#fff;font-weight:700;cursor:pointer;margin-top:8px}
    #authGate button:disabled{opacity:.55;cursor:not-allowed}
    #authGate .auth-error{min-height:20px;margin-top:10px;color:#b91c1c;font-size:12px}
    #logoutBtn{border:1px solid #343944;color:#c8ccd4;background:#1a1d23;border-radius:9px;padding:8px 10px;font-size:12px;text-align:center;cursor:pointer}
    #authUser{color:#6f7683;font-size:10px;line-height:1.3;padding:4px 8px;overflow-wrap:anywhere}
    .profile-main{display:grid;grid-template-columns:110px 1fr;gap:16px;align-items:start;margin-top:18px}
    .profile-photo{width:110px;height:138px;border-radius:14px;background:#eef0f3;object-fit:cover;display:grid;place-items:center;color:#9ca3af;font-size:28px;overflow:hidden}
    .profile-photo img{width:100%;height:100%;object-fit:cover}
    .profile-contact{display:grid;gap:7px;font-size:13px}
    .profile-contact a{color:#111827;text-decoration:none}
    .profile-edit-form{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .profile-edit-form label{display:grid;gap:5px;font-size:12px;color:#4b5563}
    .profile-edit-form input,.profile-edit-form textarea{border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font:inherit;width:100%}
    .profile-edit-form textarea{min-height:86px;resize:vertical}
    .profile-edit-form .full{grid-column:1/-1}
    .profile-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:14px}
    .link-list{display:grid;gap:7px;margin-top:8px}
    .link-list a{display:inline-block;color:#111827;text-decoration:underline;text-underline-offset:2px}
    .student-dialog{width:min(820px,96vw)!important;max-height:90vh}
    .student-profile{padding:0!important}
    .profile-hero{padding:26px;background:linear-gradient(135deg,#111827,#232936);color:#fff;border-radius:16px 16px 0 0}
    .profile-hero-top{display:flex;justify-content:space-between;gap:18px;align-items:flex-start}
    .profile-hero-title{display:flex;gap:20px;align-items:flex-start;min-width:0}
    .profile-photo{width:124px;height:156px;border-radius:18px;background:#2f3542;object-fit:cover;display:grid;place-items:center;color:#cbd5e1;font-size:34px;overflow:hidden;box-shadow:0 10px 25px #0003;flex:0 0 auto}
    .profile-photo img{width:100%;height:100%;object-fit:cover}
    .profile-head-copy{min-width:0;padding-top:4px}
    .profile-hero h2{margin:0;font-size:28px;line-height:1.08;color:#fff;max-width:430px}
    .profile-hero .muted{color:#b9c0cc}
    .profile-meta{display:flex;flex-wrap:wrap;gap:8px 12px;margin-top:8px;color:#d1d5db;font-size:12px}
    .profile-hero .hero-actions{display:flex;gap:8px;flex:0 0 auto}
    .profile-hero .hero-actions .ghost{background:#ffffff14;color:#fff;border:1px solid #ffffff26}
    .profile-body{padding:22px}
    .contact-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:2px}
    .contact-item{background:#f6f7f9;border-radius:12px;padding:11px 12px;font-size:13px}
    .contact-item b{display:block;font-size:11px;color:#6b7280;margin-bottom:3px}
    .contact-item a{color:#111827;text-decoration:none}
    .profile-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}
    .profile-stat{background:#f6f7f9;border-radius:14px;padding:14px}
    .profile-stat strong{font-size:24px}
    .profile-section{border-top:1px solid #e5e7eb;padding-top:16px;margin-top:16px}
    .profile-section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
    .profile-section-title b{font-size:14px}
    .project-pill{display:inline-flex;align-items:center;gap:6px;color:#fff;padding:6px 9px;border-radius:999px;font-size:12px}
    .portfolio-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
    .portfolio-card{border:1px solid #e5e7eb;border-radius:12px;padding:11px 12px;background:#fff;text-decoration:none;color:#111827;font-size:12px}
    .portfolio-card b{display:block;margin-bottom:3px}
    .timeline-scroll{max-height:300px;overflow:auto;padding-right:4px}
    .timeline{display:grid;gap:8px}
    .timeline-row{display:grid;grid-template-columns:150px 1fr auto;gap:10px;align-items:center;background:#f7f7f8;border-radius:11px;padding:10px 11px;font-size:12px}
    .timeline-date{font-weight:700}
    .timeline-type{color:#4b5563}
    .notes-card{background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:12px;white-space:pre-wrap}
    .profile-empty{color:#9ca3af;font-size:12px}
    @media(max-width:700px){
      .profile-hero-top{display:block}
      .profile-hero-title{align-items:flex-start}
      .profile-hero .hero-actions{margin-top:14px}
      .contact-grid,.portfolio-grid{grid-template-columns:1fr}
      .timeline-row{grid-template-columns:1fr}
      .profile-stats{grid-template-columns:repeat(3,1fr)}
    }

    .students-toolbar{display:grid;grid-template-columns:minmax(220px,1.3fr) repeat(3,minmax(150px,.7fr));gap:10px;margin-bottom:16px}
    .students-toolbar input,.students-toolbar select{border:1px solid #e5e7eb;background:#fff;border-radius:11px;padding:11px 12px;width:100%}
    .students-summary{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
    .summary-pill{background:#fff;border:1px solid #e5e7eb;border-radius:999px;padding:7px 10px;font-size:12px;color:#4b5563}
    .students-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
    .student-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;cursor:pointer;transition:.16s transform,.16s box-shadow}
    .student-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px #11182712}
    .student-card-top{display:grid;grid-template-columns:72px 1fr;gap:12px;align-items:center;padding:14px}
    .student-avatar{width:72px;height:90px;border-radius:12px;background:#eef0f3;display:grid;place-items:center;overflow:hidden;color:#9ca3af;font-size:24px}
    .student-avatar img{width:100%;height:100%;object-fit:cover}
    .student-card h3{margin:0 0 4px;font-size:15px;line-height:1.2}
    .student-card-meta{color:#6b7280;font-size:11px}
    .student-card-stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #eef0f3}
    .student-card-stat{padding:10px 8px;text-align:center}
    .student-card-stat strong{display:block;font-size:16px}
    .student-card-stat span{font-size:10px;color:#6b7280}
    .student-card-projects{padding:0 14px 14px}
    .student-card-projects .chips{margin-top:0}
    .status-free{color:#047857}
    .status-busy{color:#92400e}
    .status-conflict{color:#b91c1c}
    @media(max-width:1100px){.students-grid{grid-template-columns:repeat(3,1fr)}.students-toolbar{grid-template-columns:1fr 1fr}}
    @media(max-width:760px){.students-grid{grid-template-columns:repeat(2,1fr)}.students-toolbar{grid-template-columns:1fr}}
    @media(max-width:520px){.students-grid{grid-template-columns:1fr}}
    @media(max-width:520px){
      .profile-hero-title{display:block}
      .profile-photo{width:96px;height:120px;margin-bottom:12px}
      .profile-stats{grid-template-columns:1fr}
      .profile-edit-form{grid-template-columns:1fr}
      .profile-edit-form .full{grid-column:auto}
    }
  `;
  document.head.appendChild(style);
}

function showLogin(){
  ensureAuthStyles();
  let gate=document.querySelector("#authGate");
  if(!gate){
    gate=document.createElement("div");
    gate.id="authGate";
    gate.innerHTML=`
      <form class="auth-card" id="authForm">
        <div class="auth-brand">
          <div class="auth-logo">R</div>
          <div><h2>REMS Control</h2><p>Увійдіть, щоб відкрити систему</p></div>
        </div>
        <label>Email<input id="authEmail" type="email" autocomplete="username" required></label>
        <label>Пароль<input id="authPassword" type="password" autocomplete="current-password" required></label>
        <button id="authSubmit" type="submit">Увійти</button>
        <div class="auth-error" id="authError"></div>
      </form>`;
    document.body.appendChild(gate);

    gate.querySelector("#authForm").onsubmit=async e=>{
      e.preventDefault();
      const email=gate.querySelector("#authEmail").value.trim();
      const password=gate.querySelector("#authPassword").value;
      const btn=gate.querySelector("#authSubmit");
      const err=gate.querySelector("#authError");
      err.textContent="";
      btn.disabled=true;
      btn.textContent="Вхід…";
      try{
        await signInWithEmailAndPassword(auth,email,password);
      }catch(ex){
        console.error(ex);
        err.textContent="Не вдалося увійти. Перевірте email і пароль.";
        btn.disabled=false;
        btn.textContent="Увійти";
      }
    };
  }
  gate.style.display="grid";
}

function hideLogin(){
  const gate=document.querySelector("#authGate");
  if(gate) gate.style.display="none";
}

function ensureLogout(){
  ensureAuthStyles();
  const box=document.querySelector(".sidebar-bottom");
  if(!box) return;
  let userEl=document.querySelector("#authUser");
  if(!userEl){
    userEl=document.createElement("div");
    userEl.id="authUser";
    box.prepend(userEl);
  }
  userEl.textContent=currentUser?.email||"";

  let btn=document.querySelector("#logoutBtn");
  if(!btn){
    btn=document.createElement("button");
    btn.id="logoutBtn";
    btn.textContent="Вийти";
    btn.onclick=async()=>{ await signOut(auth); };
    box.prepend(btn);
  }
}

function clearLogout(){
  document.querySelector("#logoutBtn")?.remove();
  document.querySelector("#authUser")?.remove();
}

async function initCloud(){
  if(cloudInitializing) return;
  cloudInitializing=true;
  setWriteUiReady(false);

  const cfg=window.REMS_FIREBASE_CONFIG;
  if(!cfg){
    setStatus("v0.7 · Firebase не налаштовано");
    dashboard();
    cloudInitializing=false;
    return;
  }

  try{
    setStatus("v0.7 · завантаження хмари…");
    if(!firebaseApp) firebaseApp=initializeApp(cfg);
    cloudDb=getFirestore(firebaseApp);
    const ref=doc(cloudDb,"rems_control",CLOUD_DOC);
    const snap=await getDoc(ref);

    if(snap.exists()){
      const remote=snap.data();
      db={
        students:remote.students||[],
        projects:remote.projects||[],
        events:remote.events||[],
        assignments:remote.assignments||[],
        settings:remote.settings||{}
      };
      cache();
    }else{
      await setDoc(ref,{...clone(db),updatedAt:new Date().toISOString()},{merge:false});
    }

    cloudReady=true;
    setWriteUiReady(true);
    setStatus("v0.7 · хмара ✓");
    dashboard();

    onSnapshot(ref,s=>{
      if(!s.exists()) return;
      if(cloudWriting) return;
      const remote=s.data();
      applyingRemote=true;
      db={
        students:remote.students||[],
        projects:remote.projects||[],
        events:remote.events||[],
        assignments:remote.assignments||[],
        settings:remote.settings||{}
      };
      cache();
      applyingRemote=false;

      const active=document.querySelector(".nav.active")?.dataset.view||"dashboard";
      views[active]();
      setStatus("v0.7 · хмара ✓");
    },err=>{
      console.error(err);
      cloudReady=false;
      setWriteUiReady(false);
      setStatus("v0.7 · хмара недоступна");
    });

  }catch(err){
    console.error(err);
    cloudReady=false;
    setWriteUiReady(false);
    setStatus("v0.7 · хмара недоступна");
    dashboard();
  }finally{
    cloudInitializing=false;
  }
}


async function bootstrapAuth(){
  const cfg=window.REMS_FIREBASE_CONFIG;
  if(!cfg){
    setStatus("v0.7 · Firebase не налаштовано");
    showLogin();
    return;
  }

  try{
    firebaseApp=initializeApp(cfg);
    auth=getAuth(firebaseApp);
    await setPersistence(auth,browserLocalPersistence);

    onAuthStateChanged(auth,async user=>{
      currentUser=user||null;

      if(currentUser){
        hideLogin();
        ensureLogout();
        setStatus("v0.7 · вхід ✓");
        if(!cloudReady) await initCloud();
      }else{
        cloudReady=false;
        setWriteUiReady(false);
        clearLogout();
        showLogin();
        setStatus("v0.7 · потрібен вхід");
      }
    });
  }catch(err){
    console.error(err);
    setStatus("v0.7 · помилка авторизації");
    showLogin();
  }
}

window.addEventListener("online",()=>{
  if(currentUser && !cloudReady) initCloud();
});

setWriteUiReady(false);
bootstrapAuth();
