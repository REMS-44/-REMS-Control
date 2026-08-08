
const KEY="rems-control-v01";
const clone=x=>JSON.parse(JSON.stringify(x));
let db=JSON.parse(localStorage.getItem(KEY)||"null")||clone(window.REMS_SEED);
const save=()=>localStorage.setItem(KEY,JSON.stringify(db));
const $=s=>document.querySelector(s);
const app=$("#app");
const fmt=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit"});
const pBy=id=>db.projects.find(p=>p.id===id);
const sBy=id=>db.students.find(s=>s.id===id);
const eventsFor=id=>db.events.filter(e=>e.projectId===id).sort((a,b)=>a.date.localeCompare(b.date));
const assForStudent=id=>db.assignments.filter(a=>a.studentId===id);
const studentProjects=id=>assForStudent(id).map(a=>pBy(a.projectId)).filter(Boolean);
const countDays=id=>new Set(studentProjects(id).flatMap(p=>eventsFor(p.id).map(e=>e.date))).size;

function dashboard(){
  const active=db.projects.length, students=db.students.length;
  const assigned=new Set(db.assignments.map(a=>a.studentId)).size;
  const eventCount=db.events.length;
  app.innerHTML=`<div class="grid kpis">
    <div class="card kpi"><span>Студентів</span><strong>${students}</strong></div>
    <div class="card kpi"><span>Проєктів</span><strong>${active}</strong></div>
    <div class="card kpi"><span>Задіяно студентів</span><strong>${assigned}</strong></div>
    <div class="card kpi"><span>Подій у базі</span><strong>${eventCount}</strong></div>
  </div>
  <div class="grid two">
    <div class="card"><h2>Активні проєкти</h2><div class="project-list">${db.projects.map(p=>`
      <div class="project-row"><div class="project-left"><span class="dot" style="background:${p.color}"></span><div><b>${p.emoji} ${p.name}</b><div class="muted">${eventsFor(p.id).length} дат · ${db.assignments.filter(a=>a.projectId===p.id).length} студентів</div></div></div></div>`).join("")}</div></div>
    <div class="card"><h2>Найбільш зайняті</h2><div class="student-list">${[...db.students].sort((a,b)=>countDays(b.id)-countDays(a.id)).slice(0,8).map(s=>`
      <div class="student-row"><div><b>${s.name}</b><div class="muted">${s.group}</div></div><strong>${countDays(s.id)} дн.</strong></div>`).join("")}</div></div>
  </div>`;
}
function students(){
  app.innerHTML=`<div class="toolbar"><input id="studentSearch" placeholder="Пошук студента..."></div><div class="students-grid" id="studentsGrid"></div>`;
  const render=()=>{
    const q=($("#studentSearch").value||"").toLowerCase();
    $("#studentsGrid").innerHTML=db.students.filter(s=>s.name.toLowerCase().includes(q)).map(s=>`
      <div class="student-card"><h3>${s.name}</h3><div class="muted">${s.group} · ${countDays(s.id)} зайнятих днів</div>
      <div class="chips">${studentProjects(s.id).map(p=>`<span class="chip" style="background:${p.color}">${p.name}</span>`).join("")||'<span class="muted">Проєктів ще немає</span>'}</div></div>`).join("");
  };
  $("#studentSearch").oninput=render; render();
}
function projects(){
  app.innerHTML=db.projects.map(p=>{
    const assigned=db.assignments.filter(a=>a.projectId===p.id).map(a=>a.studentId);
    return `<div class="project-card">
      <div class="project-card-header"><div><h3><span class="dot" style="background:${p.color}"></span> ${p.emoji} ${p.name}</h3><div class="muted">${eventsFor(p.id).length} дат · ${assigned.length} студентів</div></div>
      <button class="ghost add-event" data-id="${p.id}">+ Дата</button></div>
      <div class="events">${eventsFor(p.id).map(e=>`<span class="event">${fmt(e.date)} · ${e.type}</span>`).join("")||'<span class="muted">Дат ще немає</span>'}</div>
      <div class="assign"><b>Призначити студентів</b><div class="assign-grid">${db.students.map(s=>`<button class="person-toggle ${assigned.includes(s.id)?"on":""}" data-project="${p.id}" data-student="${s.id}">${s.name.split(" ")[0]}</button>`).join("")}</div></div>
    </div>`;
  }).join("");
  document.querySelectorAll(".person-toggle").forEach(b=>b.onclick=()=>{
    const pid=b.dataset.project, sid=+b.dataset.student;
    const i=db.assignments.findIndex(a=>a.projectId===pid&&a.studentId===sid);
    if(i>=0) db.assignments.splice(i,1); else db.assignments.push({projectId:pid,studentId:sid});
    save(); projects();
  });
  document.querySelectorAll(".add-event").forEach(b=>b.onclick=()=>{ $("#eventProjectId").value=b.dataset.id; $("#eventDialog").showModal(); });
}
function datesBetween(start,end){
  const a=[], d=new Date(start+"T12:00:00"), e=new Date(end+"T12:00:00");
  for(;d<=e;d.setDate(d.getDate()+1)) a.push(d.toISOString().slice(0,10));
  return a;
}
function calendar(){
  const start="2026-09-01", end="2026-11-30"; // first working view; winter can be enabled later
  const dates=datesBetween(start,end);
  const byStudent={};
  db.students.forEach(s=>byStudent[s.id]={});
  db.assignments.forEach(a=>{
    const p=pBy(a.projectId); if(!p) return;
    eventsFor(p.id).forEach(e=>{ if(e.date>=start&&e.date<=end) byStudent[a.studentId][e.date]=p; });
  });
  app.innerHTML=`<div class="calendar-wrap"><table class="calendar"><thead><tr><th class="name">Студент</th>${dates.map(d=>`<th>${fmt(d)}</th>`).join("")}</tr></thead><tbody>
    ${db.students.map(s=>`<tr><td class="name"><b>${s.name}</b><div class="muted">${s.group}</div></td>${dates.map(d=>{
      const p=byStudent[s.id][d]; return `<td>${p?`<div class="busy" title="${p.name}" style="background:${p.color}">${p.name}</div>`:""}</td>`}).join("")}</tr>`).join("")}
  </tbody></table></div>`;
}
const views={dashboard,students,projects,calendar};
document.querySelectorAll(".nav").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active")); b.classList.add("active");
  const v=b.dataset.view; $("#pageTitle").textContent=b.textContent.trim(); views[v]();
});
$("#quickAdd").onclick=()=>$("#projectDialog").showModal();
$("#saveProject").onclick=e=>{
  e.preventDefault();
  const name=$("#projectName").value.trim(); if(!name) return;
  const id="p_"+Date.now();
  db.projects.push({id,name,color:$("#projectColor").value,emoji:$("#projectEmoji").value||"◆"});
  save(); $("#projectDialog").close(); $("#projectForm").reset(); projects();
  document.querySelectorAll(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view==="projects"));
  $("#pageTitle").textContent="Проєкти";
};
$("#saveEvent").onclick=e=>{
  e.preventDefault();
  const projectId=$("#eventProjectId").value, date=$("#eventDate").value, type=$("#eventType").value.trim();
  if(!date||!type) return;
  db.events.push({projectId,date,type}); save(); $("#eventDialog").close(); $("#eventForm").reset(); projects();
};
dashboard();
