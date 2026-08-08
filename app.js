
(function injectProjectLogoStyles(){
  if(document.getElementById("remsProjectLogoStyles")) return;
  const st=document.createElement("style");
  st.id="remsProjectLogoStyles";
  st.textContent=`
    .project-list-logo{width:54px;height:34px;object-fit:contain;border-radius:7px;background:#fff;flex:0 0 auto}
    .project-card-logo{width:72px;height:42px;object-fit:contain;border-radius:8px;background:#fff;vertical-align:middle;margin-right:8px}
    .project-hero-logo{width:100%;height:100%;object-fit:contain;border-radius:10px;background:#fff}
    .project-pill-logo{width:22px;height:16px;object-fit:contain;border-radius:4px;background:#fff;vertical-align:middle}
    .project-logo:has(.project-hero-logo){padding:5px;background:#fff;min-width:110px;width:110px;height:70px}
  `;
  document.head.appendChild(st);
})();


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
    setStatus("v1.3.4 · немає з’єднання");
    return false;
  }
  try{
    cloudWriting=true;
    setStatus("v1.3.4 · збереження…");
    const payload={...clone(db),updatedAt:new Date().toISOString()};
    await setDoc(
      doc(cloudDb,"rems_control",CLOUD_DOC),
      payload,
      {merge:false}
    );
    cache();
    setStatus("v1.3.4 · хмара ✓");
    return true;
  }catch(err){
    console.error(err);
    setStatus("v1.3.4 · помилка хмари");
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

const projectLogoFile=p=>{
  const n=String(p?.name||"").toLowerCase();
  if(n.includes("дитяче євробачення")) return "logos/junior-eurovision.png";
  if(n.includes("голос країни")||n.includes("голос 14")) return "logos/holos-krainy.png";
  if(n.includes("танцюють всі")) return "logos/tantsiuiut-vsi.png";
  if(n.includes("фабрика зірок")) return "logos/fabryka-zirok.png";
  return "";
};
const projectLogoHtml=(p,cls="project-logo-img")=>{
  const src=projectLogoFile(p);
  return src?`<img class="${cls}" src="${src}" alt="${esc(p.name)}">`:`<span>${p.emoji||"◆"}</span>`;
};

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
  $("#pageTitle").textContent=label||({dashboard:"Головна",students:"Студенти",projects:"Проєкти",calendar:"Календар",schedule:"Розклад"}[v]);
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
      <div class="project-row"><div class="project-left"><span class="dot" style="background:${p.color}"></span>${projectLogoHtml(p,"project-list-logo")}<div><b>${p.name}</b><div class="muted">${eventsFor(p.id).length} дат · ${projectStudents(p.id).length} студентів</div></div></div></div>`).join("")}</div></div>
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
              ${ps.map(p=>`<span class="project-pill" style="background:${p.color}">${projectLogoHtml(p,"project-pill-logo")} ${esc(p.name)}</span>`).join("")||'<span class="muted">Проєктів поки немає</span>'}
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
    const assigned=projectStudents(p.id);
    const evs=eventsFor(p.id);
    return `<div class="project-card" data-id="${p.id}" style="cursor:pointer">
      <div class="project-card-header">
        <div>
          <h3><span class="dot" style="background:${p.color}"></span> ${projectLogoHtml(p,"project-card-logo")} ${esc(p.name)}</h3>
          <div class="muted">${evs.length} дат · ${assigned.length} студентів</div>
        </div>
        <button class="ghost open-project" data-id="${p.id}">Відкрити</button>
      </div>
      <div class="events">${evs.slice(0,8).map(e=>`<span class="event">${fmt(e.date)} · ${esc(e.type)}</span>`).join("")}${evs.length>8?`<span class="event">+${evs.length-8}</span>`:""}</div>
    </div>`;
  }).join("")||'<div class="empty">Проєктів ще немає.</div>';

  $$(".project-card").forEach(card=>card.onclick=e=>{
    if(e.target.closest("button")) return;
    openProjectCard(card.dataset.id);
  });
  $$(".open-project").forEach(b=>b.onclick=()=>openProjectCard(b.dataset.id));
}

function projectMonthLabel(month){
  const [y,m]=month.split("-").map(Number);
  return new Date(y,m-1,1,12).toLocaleDateString("uk-UA",{month:"long",year:"numeric"});
}

function projectCalendarMonthHtml(projectId,month){
  const p=pBy(projectId); if(!p) return "";
  const [year,mon]=month.split("-").map(Number);
  const daysInMonth=new Date(year,mon,0).getDate();
  const firstDay=(new Date(year,mon-1,1,12).getDay()+6)%7;
  const evs=eventsFor(projectId).filter(e=>e.date.startsWith(month));
  const byDate={};
  evs.forEach(e=>(byDate[e.date] ||= []).push(e));
  const blanks=Array.from({length:firstDay},()=>'<div class="project-cal-day empty"></div>').join("");
  const cells=Array.from({length:daysInMonth},(_,i)=>{
    const day=i+1;
    const date=`${year}-${String(mon).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const items=byDate[date]||[];
    const dow=new Date(date+"T12:00:00").getDay();
    return `<button class="project-cal-day ${dow===0||dow===6?"weekend":""} ${items.length?"has-event":""}" data-project-day="${date}" type="button">
      <span class="project-cal-number">${day}</span>
      <span class="project-cal-events">${items.map(e=>`<span class="project-cal-event" style="border-left-color:${p.color}">${esc(shortType(e.type))}</span>`).join("")}</span>
    </button>`;
  }).join("");
  return `<div class="project-cal-panel" data-project-month="${month}">
    <div class="project-cal-grid">
      ${["ПН","ВТ","СР","ЧТ","ПТ","СБ","НД"].map(x=>`<div class="project-cal-weekday">${x}</div>`).join("")}
      ${blanks}${cells}
    </div>
  </div>`;
}

function showProjectDay(projectId,date){
  const p=pBy(projectId); if(!p) return;
  const dialog=ensureProjectCardDialog();
  const evs=eventsFor(projectId).filter(e=>e.date===date);
  const pretty=new Date(date+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  const peopleIds=new Set(evs.flatMap(e=>studentsForEvent(e).map(s=>s.id)));
  const people=db.students.filter(s=>peopleIds.has(s.id));
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head">
      <div><h2 style="margin:0">${pretty}</h2><div class="muted">${esc(p.name)} · ${evs.length} подій · ${people.length} учасників</div></div>
      <button class="ghost" id="backToProjectCalendar">Назад</button>
    </div>
    <div class="day-event-list">
      ${evs.map(e=>`<div class="day-event-row"><span class="dot" style="background:${p.color}"></span><div><b>${esc(e.type)}</b><div class="day-event-meta">${studentsForEvent(e).length} учасників</div></div><span class="chip" style="background:${p.color}">${esc(shortType(e.type))}</span></div>`).join("")||'<div class="empty">На цю дату подій немає.</div>'}
    </div>
    <div class="availability-card"><b>Студенти цього дня</b><div class="availability-list">
      ${people.map(s=>`<button class="availability-chip project-day-student" data-id="${s.id}">${esc(s.name)}</button>`).join("")||'<span class="muted">Учасників не призначено.</span>'}
    </div></div>
  </div>`;
  dialog.querySelector("#backToProjectCalendar").onclick=()=>openProjectCard(projectId);
  dialog.querySelectorAll(".project-day-student").forEach(b=>b.onclick=()=>openStudent(+b.dataset.id));
}

function openProjectCard(id){
  const p=pBy(id); if(!p) return;
  const dialog=ensureProjectCardDialog();
  const evs=eventsFor(id);
  const assigned=projectStudents(id);
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-detail">
    <div class="project-hero" style="box-shadow:inset 6px 0 0 ${p.color}">
      <div class="project-hero-top">
        <div class="project-title-wrap">
          <div class="project-logo">${projectLogoHtml(p,"project-hero-logo")}</div>
          <div><h2>${esc(p.name)}</h2><div class="muted">${esc(p.description||"")}</div></div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="ghost" id="editProjectBtn">Редагувати</button>
          <button class="ghost" onclick="document.querySelector('#projectCardDialog').close()">Закрити</button>
        </div>
      </div>
    </div>
    <div class="project-body">
      <div class="project-meta-grid">
        <div class="project-meta"><span>Подій</span><strong>${evs.length}</strong></div>
        <div class="project-meta"><span>Студентів</span><strong>${assigned.length}</strong></div>
        <div class="project-meta"><span>Період</span><strong style="font-size:14px">${evs.length?`${fmt(evs[0].date)} — ${fmt(evs[evs.length-1].date)}`:"—"}</strong></div>
      </div>

      <div class="project-section">
        <div class="project-section-head"><b>Студенти</b><span class="muted">${assigned.length}</span></div>
        <div class="project-students">
          ${db.students.map(s=>`<button class="project-student-chip ${assigned.some(x=>x.id===s.id)?"active":""}" data-student="${s.id}">${esc(s.name.split(" ")[0])}</button>`).join("")}
        </div>
      </div>

      <div class="project-section">
        <div class="project-section-head">
          <b>Календар проєкту</b>
          <div class="project-calendar-actions"><div class="project-view-switch"><button class="active" id="projectCalendarMode" type="button">Календар</button><button id="projectListMode" type="button">Список</button></div><button class="ghost" id="addProjectEventBtn">+ Дата</button></div>
        </div>
        ${(()=>{
          const months=[...new Set(evs.map(e=>e.date.slice(0,7)))];
          if(!months.length) return '<div class="empty">Дат ще немає.</div>';
          return `<div id="projectCalendarView">
            <div class="project-month-tabs">${months.map((m,i)=>`<button type="button" class="project-month-tab ${i===0?"active":""}" data-month="${m}">${projectMonthLabel(m)}</button>`).join("")}</div>
            <div class="project-calendar-panels">${months.map((m,i)=>`<div style="${i===0?"":"display:none"}" data-month-panel="${m}">${projectCalendarMonthHtml(id,m)}</div>`).join("")}</div>
          </div>`;
        })()}
        <div id="projectListView" style="display:none">
          <div class="project-event-list">
            ${evs.map((e,i)=>{
              const people=studentsForEvent(e);
              return `<div class="project-event-row" style="grid-template-columns:90px 1fr auto auto">
                <b>${fmt(e.date)}</b>
                <span>${esc(e.type)}<div class="muted">${people.length} учасників</div></span>
                <button class="ghost event-people-btn" data-index="${i}">Учасники</button>
                <button class="ghost delete-event" data-index="${i}">Видалити</button>
              </div>`;
            }).join("")||'<div class="empty">Дат ще немає.</div>'}
          </div>
        </div>
      </div>
    </div>
  </div>`;

  dialog.querySelectorAll(".project-student-chip").forEach(b=>b.onclick=async()=>{
    const sid=+b.dataset.student;
    const i=db.assignments.findIndex(a=>a.projectId===id&&a.studentId===sid);
    if(i>=0) db.assignments.splice(i,1); else db.assignments.push({projectId:id,studentId:sid});
    await save(); openProjectCard(id);
  });

  dialog.querySelector("#addProjectEventBtn").onclick=()=>{
    $("#eventProjectId").value=id;
    $("#eventDialog").showModal();
  };

  dialog.querySelectorAll(".event-people-btn").forEach(b=>b.onclick=()=>{
    const ev=eventsFor(id)[+b.dataset.index];
    editEventPeople(id,ev);
  });

  dialog.querySelectorAll(".delete-event").forEach(b=>b.onclick=async()=>{
    const ev=eventsFor(id)[+b.dataset.index];
    const i=db.events.findIndex(x=>x.projectId===id&&x.date===ev.date&&x.type===ev.type);
    if(i>=0) db.events.splice(i,1);
    await save(); openProjectCard(id);
  });

  const calMode=dialog.querySelector("#projectCalendarMode");
  const listMode=dialog.querySelector("#projectListMode");
  const calView=dialog.querySelector("#projectCalendarView");
  const listView=dialog.querySelector("#projectListView");
  if(calMode&&listMode){
    calMode.onclick=()=>{calMode.classList.add("active");listMode.classList.remove("active");if(calView)calView.style.display="";if(listView)listView.style.display="none";};
    listMode.onclick=()=>{listMode.classList.add("active");calMode.classList.remove("active");if(calView)calView.style.display="none";if(listView)listView.style.display="";};
  }
  dialog.querySelectorAll(".project-month-tab").forEach(tab=>tab.onclick=()=>{
    dialog.querySelectorAll(".project-month-tab").forEach(x=>x.classList.toggle("active",x===tab));
    dialog.querySelectorAll("[data-month-panel]").forEach(panel=>panel.style.display=panel.dataset.monthPanel===tab.dataset.month?"":"none");
  });
  dialog.querySelectorAll(".project-cal-day.has-event").forEach(day=>day.onclick=()=>showProjectDay(id,day.dataset.projectDay));

  dialog.querySelector("#editProjectBtn").onclick=()=>editProjectCard(id);
  dialog.showModal();
}


function editEventPeople(projectId,ev){
  const p=pBy(projectId); if(!p) return;
  const dialog=ensureProjectCardDialog();
  const projectPeople=projectStudents(projectId);
  const current=studentsForEvent(ev).map(s=>s.id);
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head">
      <div><h2 style="margin:0">Учасники події</h2><div class="muted">${esc(p.name)} · ${fmt(ev.date)} · ${esc(ev.type)}</div></div>
      <button class="ghost" id="backToProject">Назад</button>
    </div>
    <div class="event-assignment-box">
      <b>Хто працює саме цього дня</b>
      <div class="event-assignment-grid">
        ${projectPeople.map(s=>`<button class="event-person ${current.includes(s.id)?"active":""}" data-id="${s.id}">${esc(s.name)}</button>`).join("")||'<span class="muted">Спочатку додайте студентів до проєкту.</span>'}
      </div>
      <div class="event-assignment-note">Темна кнопка = студент призначений на цю конкретну подію.</div>
    </div>
    <div class="profile-actions">
      <button class="ghost" id="allEventPeople">Всі</button>
      <button class="ghost" id="clearEventPeople">Ніхто</button>
      <button class="primary" id="saveEventPeople">Зберегти</button>
    </div>
  </div>`;

  let selected=new Set(current);
  dialog.querySelectorAll(".event-person").forEach(btn=>btn.onclick=()=>{
    const sid=+btn.dataset.id;
    if(selected.has(sid)) selected.delete(sid); else selected.add(sid);
    btn.classList.toggle("active",selected.has(sid));
  });
  dialog.querySelector("#allEventPeople").onclick=()=>{
    selected=new Set(projectPeople.map(s=>s.id));
    dialog.querySelectorAll(".event-person").forEach(x=>x.classList.add("active"));
  };
  dialog.querySelector("#clearEventPeople").onclick=()=>{
    selected.clear();
    dialog.querySelectorAll(".event-person").forEach(x=>x.classList.remove("active"));
  };
  dialog.querySelector("#backToProject").onclick=()=>openProjectCard(projectId);
  dialog.querySelector("#saveEventPeople").onclick=async()=>{
    const target=db.events.find(x=>x.projectId===ev.projectId&&x.date===ev.date&&x.type===ev.type);
    if(target) target.studentIds=[...selected];
    await save();
    openProjectCard(projectId);
  };
}

function editProjectCard(id){
  const p=pBy(id); if(!p) return;
  const dialog=ensureProjectCardDialog();
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head"><div><h2 style="margin:0">Редагувати проєкт</h2><div class="muted">${esc(p.name)}</div></div><button class="ghost" onclick="openProjectCard('${id}')">Назад</button></div>
    <form id="projectEditForm" class="project-edit-form">
      <label>Назва<input id="prName" value="${esc(p.name||"")}"></label>
      <label>Позначка<input id="prEmoji" value="${esc(p.emoji||"◆")}"></label>
      <label>Колір<input id="prColor" type="color" value="${esc(p.color||"#2563EB")}"></label>
      <label class="full">Опис<textarea id="prDescription">${esc(p.description||"")}</textarea></label>
      <div class="full profile-actions">
        <button type="button" class="ghost" onclick="openProjectCard('${id}')">Скасувати</button>
        <button type="submit" class="primary">Зберегти</button>
      </div>
    </form>
    <div class="project-danger">
      <button class="danger" id="deleteProjectBtn">Видалити проєкт</button>
    </div>
  </div>`;

  dialog.querySelector("#projectEditForm").onsubmit=async e=>{
    e.preventDefault();
    p.name=$("#prName").value.trim()||p.name;
    p.emoji=$("#prEmoji").value.trim()||"◆";
    p.color=$("#prColor").value;
    p.description=$("#prDescription").value.trim();
    await save(); openProjectCard(id);
  };

  dialog.querySelector("#deleteProjectBtn").onclick=async()=>{
    if(!confirm(`Видалити проєкт «${p.name}» разом з його датами та призначеннями?`)) return;
    db.projects=db.projects.filter(x=>x.id!==id);
    db.events=db.events.filter(x=>x.projectId!==id);
    db.assignments=db.assignments.filter(x=>x.projectId!==id);
    await save();
    dialog.close();
    projects();
  };
}

function datesBetween(start,end){
  const a=[], d=new Date(start+"T12:00:00"), e=new Date(end+"T12:00:00");
  for(;d<=e;d.setDate(d.getDate()+1)) a.push(d.toISOString().slice(0,10));
  return a;
}

function ensureDayDialog(){
  let d=document.querySelector("#dayDialog");
  if(d) return d;
  d=document.createElement("dialog");
  d.id="dayDialog";
  d.className="student-dialog";
  d.innerHTML=`<div id="dayDialogBody"></div>`;
  document.body.appendChild(d);
  return d;
}



function eventKey(e){
  return `${e.projectId}|${e.date}|${e.type}`;
}
function studentsForEvent(e){
  if(Array.isArray(e.studentIds)) return db.students.filter(s=>e.studentIds.includes(s.id));
  return projectStudents(e.projectId);
}

function ensureProjectCardDialog(){
  let d=document.querySelector("#projectCardDialog");
  if(d) return d;
  d=document.createElement("dialog");
  d.id="projectCardDialog";
  d.className="student-dialog";
  d.innerHTML=`<div id="projectCardBody"></div>`;
  document.body.appendChild(d);
  return d;
}

function shortType(type=""){
  const t=String(type).toLowerCase();
  if(t.includes("реп")) return "Реп";
  if(t.includes("зйом")) return "Зйомка";
  if(t.includes("каст")) return "Кастинг";
  if(t.includes("прог")) return "Прогін";
  if(t.includes("гала")) return "Гала";
  if(t.includes("ефір")) return "Ефір";
  return type;
}

function showDay(date){
  const dialog=ensureDayDialog();
  const assignedMap=eventAssignments();
  const dayEvents=[];
  db.events.filter(e=>e.date===date).forEach(e=>{
    const p=pBy(e.projectId);
    if(!p) return;
    const students=studentsForEvent(e);
    dayEvents.push({event:e,project:p,students});
  });

  const occupiedIds=new Set();
  dayEvents.forEach(x=>x.students.forEach(s=>occupiedIds.add(s.id)));
  const freeStudents=db.students.filter(s=>!occupiedIds.has(s.id));
  const pretty=new Date(date+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long",year:"numeric"});

  $("#dayDialogBody",dialog);
  dialog.querySelector("#dayDialogBody").innerHTML=`<div class="day-panel">
    <div class="day-panel-head">
      <div><h2>${pretty}</h2><div class="muted">${dayEvents.length} подій · ${occupiedIds.size} зайнятих студентів · ${freeStudents.length} вільних</div></div>
      <button class="ghost" onclick="document.querySelector('#dayDialog').close()">Закрити</button>
    </div>
    <div class="day-event-list">
      ${dayEvents.map(x=>`<div class="day-event-row">
        <span class="dot" style="background:${x.project.color}"></span>
        <div><b>${esc(x.project.name)}</b><div class="day-event-meta">${esc(x.event.type)} · ${x.students.length} студентів</div></div>
        <span class="chip" style="background:${x.project.color}">${shortType(x.event.type)}</span>
      </div>`).join("")||'<div class="empty">На цю дату подій немає.</div>'}
    </div>
    <div class="availability-card">
      <b>Вільні студенти</b>
      <div class="availability-list">
        ${freeStudents.map(s=>`<button class="availability-chip day-student" data-id="${s.id}">${esc(s.name.split(" ")[0])}</button>`).join("")||'<span class="muted">Вільних студентів немає.</span>'}
      </div>
    </div>
  </div>`;

  dialog.querySelectorAll(".day-student").forEach(b=>b.onclick=()=>{
    dialog.close();
    openStudent(+b.dataset.id);
  });
  dialog.showModal();
}

function calendar(){
  app.innerHTML=`
    <div class="calendar-toolbar">
      <select id="calPeriod">
        <option value="autumn">Вересень–листопад</option>
        <option value="winter">Грудень–лютий</option>
        <option value="spring">Березень–травень</option>
        <option value="year">Вересень–травень</option>
      </select>
      <select id="calProject"><option value="">Усі проєкти</option>${db.projects.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join("")}</select>
      <input id="calStudent" placeholder="Пошук студента...">
      <select id="calType">
        <option value="">Усі типи подій</option>
        <option value="Репетиція">Репетиція</option>
        <option value="Зйомка">Зйомка</option>
        <option value="Кастинг">Кастинг</option>
        <option value="Прогін">Прогін</option>
        <option value="Гала">Гала-концерт</option>
      </select>
    </div>
    <div class="calendar-legend">${db.projects.map(p=>`<span class="legend-item"><span class="dot" style="background:${p.color}"></span>${esc(p.name)}</span>`).join("")}</div>
    <div id="calendarSummary" class="calendar-summary"></div>
    <div id="calendarMount"></div>`;

  const render=()=>{
    const period=$("#calPeriod").value;
    const ranges={autumn:["2026-09-01","2026-11-30"],winter:["2026-12-01","2027-02-28"],spring:["2027-03-01","2027-05-31"],year:["2026-09-01","2027-05-31"]};
    const [start,end]=ranges[period];
    const dates=datesBetween(start,end);
    const pf=$("#calProject").value;
    const q=$("#calStudent").value.toLowerCase().trim();
    const tf=$("#calType").value.toLowerCase();

    const students=db.students.filter(s=>s.name.toLowerCase().includes(q)&&(!pf||assForStudent(s.id).some(a=>a.projectId===pf)));
    const rawMap=eventAssignments();

    const map={};
    Object.entries(rawMap).forEach(([key,projects])=>{
      const [sid,date]=key.split("|");
      const filtered=projects.filter(p=>{
        if(pf && p.id!==pf) return false;
        if(tf){
          const matches=eventsFor(p.id).some(e=>e.date===date && e.type.toLowerCase().includes(tf));
          if(!matches) return false;
        }
        return true;
      });
      if(filtered.length) map[key]=filtered;
    });

    const busyCells=Object.keys(map).length;
    const conflicts=Object.values(map).filter(arr=>arr.length>1).length;
    const uniqueBusyStudents=new Set(Object.keys(map).map(k=>k.split("|")[0])).size;
    $("#calendarSummary").innerHTML=`
      <span class="summary-pill">Студентів у вибірці: <b>${students.length}</b></span>
      <span class="summary-pill">Зайнятих студентів: <b>${uniqueBusyStudents}</b></span>
      <span class="summary-pill">Заповнених клітинок: <b>${busyCells}</b></span>
      <span class="summary-pill">Конфліктів: <b>${conflicts}</b></span>`;

    const monthGroups={};
    dates.forEach(d=>{
      const key=d.slice(0,7);
      (monthGroups[key] ||= []).push(d);
    });

    const monthNames={
      "2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026",
      "2026-12":"Грудень 2026","2027-01":"Січень 2027","2027-02":"Лютий 2027",
      "2027-03":"Березень 2027","2027-04":"Квітень 2027","2027-05":"Травень 2027"
    };

    $("#calendarMount").innerHTML=Object.entries(monthGroups).map(([month,monthDates])=>{
      const monthEventDates=new Set(db.events.filter(e=>e.date.startsWith(month)).map(e=>e.date)).size;
      return `<section class="calendar-month">
        <div class="calendar-month-title"><h2>${monthNames[month]||month}</h2><span>${monthEventDates} дат із подіями</span></div>
        <div class="calendar-wrap"><table class="calendar"><thead><tr>
          <th class="name">Студент</th>
          ${monthDates.map(d=>{
            const dt=new Date(d+"T12:00:00");
            const dow=dt.toLocaleDateString("uk-UA",{weekday:"short"});
            const day=dt.getDate();
            const today=new Date().toISOString().slice(0,10)===d?" today-head":"";
            return `<th class="${today}">${dow}<br>${day}</th>`;
          }).join("")}
        </tr></thead><tbody>
        ${students.map(s=>`<tr><td class="name"><b>${esc(s.name)}</b><div class="muted">${esc(s.group||"")}</div></td>
          ${monthDates.map(d=>{
            const day=new Date(d+"T12:00:00").getDay();
            const arr=map[`${s.id}|${d}`]||[];
            const cls=(day===0||day===6?" weekend":"")+(arr.length>1?" conflict":"");
            if(!arr.length) return `<td class="day-cell${cls}" data-date="${d}"></td>`;

            return `<td class="day-cell${cls}" data-date="${d}" title="${arr.map(p=>p.name).join(" + ")}">
              ${arr.map(p=>{
                const ev=eventsFor(p.id).find(e=>e.date===d);
                return `<div class="busy" style="background:${p.color}">${esc(p.name)}${ev?` · ${shortType(ev.type)}`:""}</div>`;
              }).join("")}
            </td>`;
          }).join("")}
        </tr>`).join("")}
        </tbody></table></div>
      </section>`;
    }).join("");

    $$(".day-cell").forEach(td=>td.onclick=()=>showDay(td.dataset.date));
  };

  $("#calPeriod").onchange=render;
  $("#calProject").onchange=render;
  $("#calStudent").oninput=render;
  $("#calType").onchange=render;
  render();
}

function schedule(){
  app.innerHTML=`
    <div class="schedule-controls">
      <select id="schPeriod">
        <option value="autumn">Вересень–листопад</option>
        <option value="winter">Грудень–лютий</option>
        <option value="spring">Березень–травень</option>
        <option value="year">Вересень–травень</option>
      </select>
      <select id="schWeekday">
        <option value="">Усі дні тижня</option>
        <option value="1">Понеділок</option>
        <option value="2">Вівторок</option>
        <option value="3">Середа</option>
        <option value="4">Четвер</option>
        <option value="5">П’ятниця</option>
      </select>
      <select id="schMinFree">
        <option value="0">Будь-яка кількість вільних</option>
        <option value="30">30+ вільних</option>
        <option value="25">25+ вільних</option>
        <option value="20">20+ вільних</option>
      </select>
    </div>
    <div id="scheduleKpis" class="schedule-kpis"></div>
    <div id="scheduleRecommended"></div>
    <div id="scheduleCalendar"></div>`;

  const render=()=>{
    const ranges={
      autumn:["2026-09-01","2026-11-30"],
      winter:["2026-12-01","2027-02-28"],
      spring:["2027-03-01","2027-05-31"],
      year:["2026-09-01","2027-05-31"]
    };
    const [start,end]=ranges[$("#schPeriod").value];
    const weekday=$("#schWeekday").value;
    const minFree=+$("#schMinFree").value;

    const allDates=datesBetween(start,end);
    const stats={};

    allDates.forEach(date=>{
      const busyIds=new Set();
      const reasons={};

      db.events.filter(e=>e.date===date).forEach(e=>{
        const p=pBy(e.projectId);
        if(!p) return;
        const assigned=studentsForEvent(e);
        assigned.forEach(s=>busyIds.add(s.id));
        if(assigned.length) reasons[p.name]=(reasons[p.name]||0)+assigned.length;
      });

      const busy=busyIds.size;
      const free=Math.max(0,db.students.length-busy);
      let cls="schedule-score-best",label="ІДЕАЛЬНО",dayClass="best";
      if(busy>=10){cls="schedule-score-hard";label="СКЛАДНО";dayClass="hard";}
      else if(busy>=5){cls="schedule-score-good";label="МОЖНА";dayClass="";}

      stats[date]={busy,free,reasons,cls,label,dayClass};
    });

    const filtered=allDates.filter(date=>{
      const day=new Date(date+"T12:00:00").getDay();
      if(day===0||day===6) return false;
      if(weekday && String(day)!==weekday) return false;
      return stats[date].free>=minFree;
    });

    const avgFree=filtered.length ? Math.round(filtered.reduce((s,d)=>s+stats[d].free,0)/filtered.length) : 0;
    const perfect=filtered.filter(d=>stats[d].busy<=4).length;
    const hard=filtered.filter(d=>stats[d].busy>=10).length;

    $("#scheduleKpis").innerHTML=`
      <div class="schedule-kpi"><span>Днів у вибірці</span><strong>${filtered.length}</strong></div>
      <div class="schedule-kpi"><span>Середньо вільних</span><strong>${avgFree}</strong></div>
      <div class="schedule-kpi"><span>Ідеальних днів</span><strong>${perfect}</strong></div>
      <div class="schedule-kpi"><span>Складних днів</span><strong>${hard}</strong></div>`;

    const best=[...filtered].sort((a,b)=>stats[b].free-stats[a].free||a.localeCompare(b)).slice(0,5);
    $("#scheduleRecommended").innerHTML=best.length?`
      <div class="recommended-card">
        <h2>Найкращі дні для занять</h2>
        <div class="recommended-list">
          ${best.map(d=>{
            const wd=new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long"});
            return `<button class="recommended-item schedule-open-day" data-date="${d}">
              <b>${fullfmt(d)}</b><br>
              <span class="schedule-note">${wd} · ${stats[d].free} вільних із ${db.students.length}</span>
            </button>`;
          }).join("")}
        </div>
      </div>`:"";

    const monthGroups={};
    allDates.forEach(d=>{
      const key=d.slice(0,7);
      (monthGroups[key] ||= []).push(d);
    });

    const monthNames={
      "2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026",
      "2026-12":"Грудень 2026","2027-01":"Січень 2027","2027-02":"Лютий 2027",
      "2027-03":"Березень 2027","2027-04":"Квітень 2027","2027-05":"Травень 2027"
    };
    const weekdays=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];

    $("#scheduleCalendar").innerHTML=Object.entries(monthGroups).map(([month,dates])=>{
      const first=new Date(dates[0]+"T12:00:00");
      const jsDay=first.getDay();
      const mondayIndex=(jsDay+6)%7;
      const blanks=Array.from({length:mondayIndex},()=>`<div class="schedule-day empty"></div>`).join("");

      const cells=dates.map(date=>{
        const dt=new Date(date+"T12:00:00");
        const day=dt.getDay();
        const st=stats[date];
        const hiddenByFilter=(weekday && String(day)!==weekday) || st.free<minFree;
        const projectEntries=Object.entries(st.reasons).sort((a,b)=>b[1]-a[1]).slice(0,3);

        return `<div class="schedule-day ${day===0||day===6?"weekend":""} ${st.dayClass}" data-date="${date}" style="${hiddenByFilter?"opacity:.28":""}">
          <div class="schedule-day-number">${dt.getDate()}</div>
          <span class="schedule-score-badge ${st.cls}">${st.label}</span>
          <div class="schedule-day-meta">
            <div class="schedule-day-free">${st.free} вільні</div>
            <div class="schedule-day-busy">${st.busy} зайняті</div>
          </div>
          <div class="schedule-day-projects">
            ${projectEntries.map(([name,count])=>{
              const p=db.projects.find(x=>x.name===name);
              return `<span class="schedule-mini-project" style="background:${p?.color||"#6b7280"}">${esc(name)} ${count}</span>`;
            }).join("")}
          </div>
        </div>`;
      }).join("");

      return `<section class="schedule-month">
        <div class="schedule-month-head"><h2>${monthNames[month]||month}</h2><span>Натисни на день, щоб побачити деталі</span></div>
        <div class="schedule-cal">
          ${weekdays.map(w=>`<div class="schedule-cal-head">${w}</div>`).join("")}
          ${blanks}${cells}
        </div>
      </section>`;
    }).join("");

    $$(".schedule-day[data-date], .schedule-open-day").forEach(el=>el.onclick=()=>{
      if(el.dataset.date) showDay(el.dataset.date);
    });
  };

  $("#schPeriod").onchange=render;
  $("#schWeekday").onchange=render;
  $("#schMinFree").onchange=render;
  render();
}

const views={dashboard,students,projects,calendar,schedule};
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
  $("#eventDialog").close(); $("#eventForm").reset();
  const openProjectId=projectId;
  if(document.querySelector("#projectCardDialog")?.open) openProjectCard(openProjectId);
  else projects();
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

    .calendar-toolbar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:14px}
    .calendar-toolbar select,.calendar-toolbar input{border:1px solid #e5e7eb;background:#fff;border-radius:10px;padding:10px 11px}
    .calendar-legend{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
    .legend-item{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid #e5e7eb;border-radius:999px;padding:6px 9px;font-size:11px}
    .calendar-month{margin-bottom:18px}
    .calendar-month-title{display:flex;justify-content:space-between;align-items:end;margin:0 0 8px}
    .calendar-month-title h2{margin:0;font-size:18px}
    .calendar-month-title span{font-size:11px;color:#6b7280}
    .calendar-wrap{overflow:auto;background:#fff;border:1px solid #e5e7eb;border-radius:14px;max-height:72vh}
    .calendar{border-collapse:separate;border-spacing:0;font-size:11px;min-width:max-content}
    .calendar th,.calendar td{border-right:1px solid #eee;border-bottom:1px solid #eee;padding:5px;text-align:center;min-width:44px;height:36px}
    .calendar th{position:sticky;top:0;background:#171a20;color:#fff;z-index:2}
    .calendar th.name,.calendar td.name{position:sticky;left:0;min-width:230px;text-align:left;z-index:3}
    .calendar td.name{background:#fff}
    .calendar th.name{z-index:4}
    .calendar .today-head{background:#374151}
    .calendar td.day-cell{cursor:pointer;vertical-align:top}
    .calendar td.day-cell:hover{background:#f8fafc}
    .calendar .weekend{background:#fafafa}
    .calendar .conflict{outline:3px solid #ef4444;outline-offset:-3px}
    .busy{color:#fff;font-weight:700;border-radius:5px;padding:4px 5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:96px;margin:1px auto;font-size:10px}
    .event-type-dot{font-size:9px;opacity:.9}
    .calendar-summary{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 14px}
    .calendar-summary .summary-pill{background:#fff}
    .day-panel{padding:20px}
    .day-panel-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:14px}
    .day-panel h2{margin:0}
    .day-event-list{display:grid;gap:9px}
    .day-event-row{display:grid;grid-template-columns:18px 1fr auto;gap:10px;align-items:center;border:1px solid #e5e7eb;border-radius:12px;padding:10px 11px}
    .day-event-row .dot{width:10px;height:10px}
    .day-event-meta{font-size:12px;color:#6b7280;margin-top:2px}
    .availability-card{margin-top:14px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:12px}
    .availability-card b{display:block;margin-bottom:6px}
    .availability-list{display:flex;flex-wrap:wrap;gap:6px}
    .availability-chip{font-size:11px;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:5px 8px}

    .schedule-controls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
    .schedule-controls select,.schedule-controls input{border:1px solid #e5e7eb;background:#fff;border-radius:10px;padding:10px 11px}
    .schedule-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:16px}
    .schedule-kpi{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:14px}
    .schedule-kpi span{display:block;color:#6b7280;font-size:11px}
    .schedule-kpi strong{display:block;font-size:24px;margin-top:5px}
    .schedule-table-wrap{overflow:auto;background:#fff;border:1px solid #e5e7eb;border-radius:14px}
    .schedule-table{width:100%;border-collapse:collapse;min-width:720px}
    .schedule-table th,.schedule-table td{padding:11px 12px;border-bottom:1px solid #eef0f3;text-align:left;font-size:12px}
    .schedule-table th{background:#171a20;color:#fff;position:sticky;top:0}
    .schedule-table tr:hover td{background:#fafafa}
    .score{display:inline-flex;align-items:center;justify-content:center;min-width:88px;border-radius:999px;padding:5px 9px;font-size:11px;font-weight:700}
    .score-best{background:#dcfce7;color:#166534}
    .score-good{background:#fef3c7;color:#92400e}
    .score-hard{background:#fee2e2;color:#991b1b}
    .busy-count{font-weight:700}
    .schedule-note{font-size:11px;color:#6b7280}
    .weekday-pill{display:inline-block;background:#f3f4f6;border-radius:999px;padding:4px 7px;font-size:10px}
    .recommended-card{background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border:1px solid #bbf7d0;border-radius:16px;padding:16px;margin-bottom:16px}
    .recommended-card h2{margin:0 0 10px;font-size:16px}
    .recommended-list{display:flex;gap:8px;flex-wrap:wrap}
    .recommended-item{background:#fff;border:1px solid #d1fae5;border-radius:12px;padding:10px 12px;font-size:12px}
    @media(max-width:760px){.schedule-kpis{grid-template-columns:repeat(2,1fr)}}

    .project-detail{padding:0}
    .project-hero{padding:24px;background:linear-gradient(135deg,#111827,#222936);color:#fff;border-radius:16px 16px 0 0}
    .project-hero-top{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}
    .project-title-wrap{display:flex;gap:14px;align-items:center}
    .project-logo{width:64px;height:64px;border-radius:16px;display:grid;place-items:center;font-size:30px;background:#ffffff16;border:1px solid #ffffff20}
    .project-hero h2{margin:0;font-size:26px}
    .project-body{padding:22px}
    .project-meta-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px}
    .project-meta{background:#f6f7f9;border-radius:12px;padding:12px}
    .project-meta span{display:block;font-size:11px;color:#6b7280}
    .project-meta strong{display:block;font-size:22px;margin-top:4px}
    .project-section{border-top:1px solid #e5e7eb;padding-top:16px;margin-top:16px}
    .project-section-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:10px}
    .project-event-list{display:grid;gap:8px}
    .project-event-row{display:grid;grid-template-columns:90px 1fr auto;gap:10px;align-items:center;background:#f7f7f8;border-radius:11px;padding:10px 11px}
    .project-students{display:flex;flex-wrap:wrap;gap:7px}
    .project-student-chip{border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:6px 9px;font-size:12px;cursor:pointer}
    .project-student-chip.active{background:#111827;color:#fff;border-color:#111827}
    .project-edit-form{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .project-edit-form label{display:grid;gap:5px;font-size:12px;color:#4b5563}
    .project-edit-form input,.project-edit-form textarea{border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font:inherit;width:100%}
    .project-edit-form textarea{min-height:80px;resize:vertical}
    .project-edit-form .full{grid-column:1/-1}
    .project-danger{margin-top:18px;padding-top:14px;border-top:1px solid #fee2e2}
    .project-calendar-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
    .project-view-switch{display:inline-flex;background:#f3f4f6;border-radius:10px;padding:3px}
    .project-view-switch button{border:0;background:transparent;border-radius:8px;padding:7px 10px;font-size:11px;font-weight:700;cursor:pointer;color:#6b7280}
    .project-view-switch button.active{background:#111827;color:#fff;box-shadow:0 1px 3px #0002}
    .project-month-tabs{display:flex;gap:6px;overflow:auto;padding:2px 0 10px;scrollbar-width:thin}
    .project-month-tab{white-space:nowrap;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:7px 10px;font-size:11px;cursor:pointer;text-transform:capitalize}
    .project-month-tab.active{background:#111827;color:#fff;border-color:#111827}
    .project-cal-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}
    .project-cal-weekday{background:#171a20;color:#fff;text-align:center;padding:8px 4px;font-size:10px;font-weight:800}
    .project-cal-day{border:0;background:#fff;min-height:88px;padding:7px;text-align:left;display:flex;flex-direction:column;gap:5px;cursor:default;font:inherit}
    .project-cal-day.weekend{background:#fafafa}
    .project-cal-day.empty{background:#f5f6f8}
    .project-cal-day.has-event{cursor:pointer}
    .project-cal-day.has-event:hover{background:#f8fafc;box-shadow:inset 0 0 0 2px #d1d5db}
    .project-cal-number{font-size:11px;font-weight:800}
    .project-cal-events{display:grid;gap:3px;min-width:0}
    .project-cal-event{display:block;background:#f3f4f6;border-left:3px solid #6b7280;border-radius:5px;padding:4px 5px;font-size:9px;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    @media(max-width:700px){.project-cal-day{min-height:68px;padding:5px}.project-cal-event{font-size:8px;padding:3px}.project-section-head{align-items:flex-start}.project-calendar-actions{justify-content:flex-end}}

    .schedule-month{margin-bottom:18px}
    .schedule-month-head{display:flex;justify-content:space-between;align-items:end;margin-bottom:8px}
    .schedule-month-head h2{margin:0;font-size:18px}
    .schedule-month-head span{font-size:11px;color:#6b7280}
    .schedule-cal{display:grid;grid-template-columns:repeat(7,minmax(120px,1fr));gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}
    .schedule-cal-head{background:#171a20;color:#fff;padding:9px 8px;text-align:center;font-size:11px;font-weight:700}
    .schedule-day{background:#fff;min-height:118px;padding:8px;cursor:pointer;position:relative}
    .schedule-day:hover{background:#f9fafb}
    .schedule-day.empty{background:#f5f6f8;cursor:default}
    .schedule-day.weekend{background:#fafafa}
    .schedule-day-number{font-weight:800;font-size:12px;margin-bottom:7px}
    .schedule-day-meta{display:grid;gap:5px}
    .schedule-day-free{font-size:11px;color:#047857;font-weight:700}
    .schedule-day-busy{font-size:10px;color:#6b7280}
    .schedule-day-projects{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}
    .schedule-mini-project{font-size:9px;color:#fff;border-radius:999px;padding:3px 5px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .schedule-score-badge{position:absolute;top:7px;right:7px;font-size:9px;font-weight:800;border-radius:999px;padding:3px 6px}
    .schedule-score-best{background:#dcfce7;color:#166534}
    .schedule-score-good{background:#fef3c7;color:#92400e}
    .schedule-score-hard{background:#fee2e2;color:#991b1b}
    .schedule-day.best{box-shadow:inset 0 0 0 2px #86efac}
    .schedule-day.hard{box-shadow:inset 0 0 0 2px #fecaca}
    @media(max-width:1100px){.schedule-cal{grid-template-columns:repeat(7,minmax(105px,1fr))}}
    @media(max-width:760px){.schedule-cal{grid-template-columns:repeat(7,minmax(88px,1fr))}.schedule-day{min-height:102px;padding:6px}.schedule-day-busy{display:none}}

    .event-people{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
    .event-person{font-size:10px;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:4px 7px}
    .event-person.active{background:#111827;color:#fff;border-color:#111827}
    .event-assignment-box{margin-top:12px;padding:12px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px}
    .event-assignment-box b{display:block;margin-bottom:8px}
    .event-assignment-grid{display:flex;flex-wrap:wrap;gap:6px}
    .event-assignment-note{font-size:11px;color:#6b7280;margin-top:7px}
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


async function ensureVoice14(){
  if(!cloudDb || !cloudReady) return false;

  // If Voice 14 already exists, do not duplicate it.
  let p=db.projects.find(x=>String(x.name||"").toLowerCase().includes("голос країни"))
       || db.projects.find(x=>String(x.name||"").toLowerCase().includes("голос 14"));
  if(!p){
    p={id:"voice14",name:"ГОЛОС 14",color:"#6D28D9",emoji:"🎤",description:"Вибір наосліп · Бої · Нокаути · Фінал"};
    db.projects.push(p);
  }

  const norm=s=>String(s||"").toLowerCase().replace(/[’'`]/g,"").trim();
  const findStudent=(surname,first="")=>db.students.find(s=>{
    const n=norm(s.name);
    return n.includes(norm(surname)) && (!first || n.includes(norm(first)));
  });

  const maria=findStudent("Міленіна","Марія");
  const teamNames=[
    ["Кропивка","Маргарита"],
    ["Міленіна","Марія"],
    ["Баленко","Ілля"],
    ["Касєєв","Данило"],
    ["Карпенко","Римма"]
  ];
  const team=teamNames.map(([a,b])=>findStudent(a,b)).filter(Boolean);

  // Alternative seventh place: include whichever of these students exists in the database.
  // If both exist, leave both OUT until the user chooses one, to avoid false occupancy.
  const hostryk=findStudent("Гострик","Катерина");
  const davydova=findStudent("Давидова","Світлана");
  if(hostryk && !davydova) team.push(hostryk);
  if(davydova && !hostryk) team.push(davydova);

  // Анварі Осай may not yet exist in the current student list. If present, include automatically.
  const anvari=findStudent("Анварі","Осай");
  if(anvari) team.push(anvari);

  const uniq=arr=>[...new Set(arr.map(x=>x.id))];
  const allIds=uniq(team);
  const mariaIds=maria?[maria.id]:[];

  // Keep project-level assignment for everybody currently known on the Voice 14 team.
  allIds.forEach(sid=>{
    if(!db.assignments.some(a=>a.projectId===p.id&&a.studentId===sid)){
      db.assignments.push({projectId:p.id,studentId:sid});
    }
  });

  const entries=[
    ["2026-09-15","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-16","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-17","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-18","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-19","Вибір наосліп · інтерв'ю учасників",mariaIds],
    ["2026-09-20","Вибір наосліп · репетиція / саундчек",allIds],
    ["2026-09-21","Вибір наосліп · репетиція / саундчек",allIds],
    ["2026-09-22","Вибір наосліп · зйомка сліпих прослуховувань",allIds],
    ["2026-09-23","Вибір наосліп · зйомка сліпих прослуховувань",allIds],
    ["2026-09-24","Вибір наосліп · зйомка сліпих прослуховувань",allIds],

    ["2026-10-20","Бої · інтерв'ю учасників",mariaIds],
    ["2026-10-21","Бої · інтерв'ю учасників",mariaIds],
    ["2026-10-22","Бої · інтерв'ю учасників",mariaIds],
    ["2026-10-23","Бої · репетиція / саундчек",allIds],
    ["2026-10-24","Бої · репетиція / саундчек",allIds],
    ["2026-10-25","Бої · зйомка батлів",allIds],
    ["2026-10-26","Бої · зйомка батлів",allIds],

    ["2026-11-04","Нокаути · інтерв'ю учасників",mariaIds],
    ["2026-11-05","Нокаути · інтерв'ю учасників",mariaIds],
    ["2026-11-06","Нокаути · репетиція / саундчек",allIds],
    ["2026-11-07","Нокаути · зйомка нокаутів",allIds],

    ["2026-11-20","Фінал · інтерв'ю",mariaIds],
    ["2026-11-22","Фінал · репетиція / саундчек",allIds],
    ["2026-11-23","Фінал · репетиція / саундчек",allIds],
    ["2026-11-24","Фінал · зйомка",allIds]
  ];

  entries.forEach(([date,type,studentIds])=>{
    const exists=db.events.some(e=>e.projectId===p.id&&e.date===date&&e.type===type);
    if(!exists) db.events.push({projectId:p.id,date,type,studentIds:[...studentIds]});
  });

  db.events.sort((a,b)=>a.date.localeCompare(b.date));
  return await save();
}


async function ensureJescDates(){
  if(!cloudDb || !cloudReady) return false;

  let p=db.projects.find(x=>{
    const n=String(x.name||"").toLowerCase();
    return n.includes("дитяче євробачення") || x.id==="jesc";
  });

  if(!p){
    p={
      id:"jesc",
      name:"Дитяче Євробачення",
      color:"#F59E0B",
      emoji:"⭐",
      description:"Дитяче Євробачення 2026"
    };
    db.projects.push(p);
  }

  // Для цього проєкту вже є призначені студенти в базі.
  // Окремий тип події користувач не уточнював, тому не вигадуємо його.
  const studentIds=projectStudents(p.id).map(s=>s.id);

  const entries=[
    ["2026-09-12","Подія (тип уточнити)"],
    ["2026-09-13","Подія (тип уточнити)"]
  ];

  entries.forEach(([date,type])=>{
    const exists=db.events.some(e=>e.projectId===p.id && e.date===date);
    if(!exists){
      db.events.push({
        projectId:p.id,
        date,
        type,
        studentIds:[...studentIds]
      });
    }
  });

  db.events.sort((a,b)=>a.date.localeCompare(b.date));
  return await save();
}

async function initCloud(){
  if(cloudInitializing) return;
  cloudInitializing=true;
  setWriteUiReady(false);

  const cfg=window.REMS_FIREBASE_CONFIG;
  if(!cfg){
    setStatus("v1.3.4 · Firebase не налаштовано");
    dashboard();
    cloudInitializing=false;
    return;
  }

  try{
    setStatus("v1.3.4 · завантаження хмари…");
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
    setStatus("v1.3.4 · хмара ✓");

    // v1.3.4: repair/seed project calendars in the actual cloud document.
    if(!localStorage.getItem("rems_voice14_seed_v2")){
      const seededVoice=await ensureVoice14();
      if(seededVoice) localStorage.setItem("rems_voice14_seed_v2","1");
    }
    if(!localStorage.getItem("rems_jesc_seed_v2")){
      const seededJesc=await ensureJescDates();
      if(seededJesc) localStorage.setItem("rems_jesc_seed_v2","1");
    }

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
      setStatus("v1.3.4 · хмара ✓");
    },err=>{
      console.error(err);
      cloudReady=false;
      setWriteUiReady(false);
      setStatus("v1.3.4 · хмара недоступна");
    });

  }catch(err){
    console.error(err);
    cloudReady=false;
    setWriteUiReady(false);
    setStatus("v1.3.4 · хмара недоступна");
    dashboard();
  }finally{
    cloudInitializing=false;
  }
}


async function bootstrapAuth(){
  const cfg=window.REMS_FIREBASE_CONFIG;
  if(!cfg){
    setStatus("v1.3.4 · Firebase не налаштовано");
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
        setStatus("v1.3.4 · вхід ✓");
        if(!cloudReady) await initCloud();
      }else{
        cloudReady=false;
        setWriteUiReady(false);
        clearLogout();
        showLogin();
        setStatus("v1.3.4 · потрібен вхід");
      }
    });
  }catch(err){
    console.error(err);
    setStatus("v1.3.4 · помилка авторизації");
    showLogin();
  }
}

window.addEventListener("online",()=>{
  if(currentUser && !cloudReady) initCloud();
});

setWriteUiReady(false);
bootstrapAuth();
