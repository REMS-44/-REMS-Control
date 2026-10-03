import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getFirestore, doc, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const cfg=window.REMS_FIREBASE_CONFIG;
const appEl=document.getElementById("labApp");
const groupEl=document.getElementById("labGroup");
const params=new URLSearchParams(location.search);
const STORAGE_KEY="rems_directing_lab_access_key";
const urlKey=String(params.get("key")||"").trim();
if(urlKey){try{localStorage.setItem(STORAGE_KEY,urlKey)}catch{}}
const key=urlKey||(()=>{try{return localStorage.getItem(STORAGE_KEY)||""}catch{return ""}})();
const STAGES=[
  {id:"passport",title:"1. Паспорт проєкту",fields:[["projectTitle","Робоча назва проєкту"],["format","Форма / жанр"],["concept","Коротка концепція"]]},
  {id:"dramaturgy",title:"2. Драматургічна основа",fields:[["theme","Тема"],["idea","Ідея"],["problem","Проблематика"],["conflict","Конфлікт"],["structure","Архітектоніка / структура"]]},
  {id:"director",title:"3. Режисерський задум",fields:[["directorConcept","Режисерський задум"],["image","Образ проєкту"],["techniques","Режисерські прийоми та засоби виразності"]]},
  {id:"staging",title:"4. Постановочне рішення",fields:[["space","Простір і мізансценування"],["visual","Сценографія / візуальне рішення"],["tech","Світло, звук, відео"],["rhythm","Темпоритм"]]},
  {id:"plan",title:"5. Режисерсько-постановочний план",fields:[["plan","Постановочний план / послідовність епізодів"],["links","Посилання на сценарій, референси, Drive / Canva / відео"]]}
];
const STATUS={draft:"Чернетка",submitted:"Подано",revision:"Доопрацювати",approved:"Погоджено"};
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let work=null,feedback=null,rendering=false;

function fail(title,text){appEl.innerHTML=`<div class="error-card"><b>${esc(title)}</b><p>${esc(text)}</p></div>`}
if(!cfg){fail("Firebase не налаштовано","Звернися до викладача.");throw new Error("No Firebase config")}
if(!key){fail("Персональне посилання відсутнє","Відкрий посилання на режисерську лабораторію, яке надіслав викладач.");throw new Error("No key")}
const fbApp=getApps().length?getApps()[0]:initializeApp(cfg);
const db=getFirestore(fbApp);
const workRef=doc(db,"rems_directing_lab_work",key);
const feedbackRef=doc(db,"rems_directing_lab_feedback",key);

function stageStatus(stageId){return String(feedback?.stages?.[stageId]?.status||work?.stages?.[stageId]?.status||"draft")}
function progress(){
  let total=0,filled=0;
  STAGES.forEach(st=>st.fields.forEach(([k])=>{total++;if(String(work?.stages?.[st.id]?.[k]||"").trim())filled++}));
  return {total,filled,pct:total?Math.round(filled/total*100):0};
}
function render(){
  if(rendering||!work)return; rendering=true;
  const p=progress();
  groupEl.textContent=work.group||"";
  document.title=`${work.name||"Студент"} — Режисерська лабораторія`;
  appEl.innerHTML=`<section class="profile"><div><div class="eyebrow">Персональна режисерська лабораторія · ${esc(work.group||"")}</div><h1>${esc(work.name||"Студент")}</h1><div class="muted">Працюй безпосередньо на цій сторінці. Зберігай чернетки, а готовий етап подавай викладачу.</div></div><div class="project-badge"><small>Поточний проєкт</small><br><b>${esc(work.projectTitle||"Назва ще не визначена")}</b>${work.sharedProject?'<br><small>Поки що спільний проєкт</small>':''}</div></section>
  <section class="progress-card"><div class="progress-head"><b>Заповнення лабораторії</b><span>${p.filled}/${p.total} · ${p.pct}%</span></div><div class="progress-track"><i style="width:${p.pct}%"></i></div></section>
  ${STAGES.map(stage=>{
    const val=work.stages?.[stage.id]||{}; const fb=feedback?.stages?.[stage.id]||{}; const st=stageStatus(stage.id);
    return `<section class="stage ${esc(st)}" data-stage="${esc(stage.id)}"><div class="stage-head"><div><h2>${esc(stage.title)}</h2><small>${st==='approved'?'Етап погоджено викладачем':st==='revision'?'Є коментар викладача — внеси зміни':st==='submitted'?'Етап подано на перевірку':'Можна редагувати та зберігати як чернетку'}</small></div><span class="status ${esc(st)}">${esc(STATUS[st]||STATUS.draft)}</span></div><div class="stage-body">
      ${stage.fields.map(([k,label])=>`<label class="field"><span>${esc(label)}</span><textarea data-field="${esc(k)}" ${st==='approved'?'readonly':''}>${esc(val[k]||"")}</textarea></label>`).join('')}
      ${fb.comment?`<div class="feedback"><b>Коментар викладача</b><p>${esc(fb.comment)}</p></div>`:''}
      <div class="stage-actions"><button class="btn secondary" data-save="${esc(stage.id)}" ${st==='approved'?'disabled':''}>Зберегти чернетку</button><button class="btn primary" data-submit="${esc(stage.id)}" ${st==='approved'?'disabled':''}>${st==='revision'?'Подати повторно':'Подати на перевірку'}</button></div><div class="save-note" data-note="${esc(stage.id)}">${val.updatedAt?`Останнє збереження: ${esc(new Date(val.updatedAt).toLocaleString('uk-UA'))}`:''}</div>
    </div></section>`}).join('')}
  <div class="footer-note">Режисерська лабораторія · REMS</div>`;
  bind(); rendering=false;
}
function collect(stageId){
  const box=appEl.querySelector(`[data-stage="${CSS.escape(stageId)}"]`); const data={...(work.stages?.[stageId]||{})};
  box?.querySelectorAll('[data-field]').forEach(el=>data[el.dataset.field]=el.value.trim());
  data.updatedAt=new Date().toISOString(); return data;
}
async function saveStage(stageId,submit=false){
  const stage=collect(stageId); stage.status=submit?"submitted":"draft"; if(submit)stage.submittedAt=new Date().toISOString();
  const note=appEl.querySelector(`[data-note="${CSS.escape(stageId)}"]`); if(note)note.textContent="Збереження…";
  const update={}; update[`stages.${stageId}`]=stage; update.updatedAt=new Date().toISOString(); update.studentUpdatedAt=new Date().toISOString();
  if(stageId==="passport"&&stage.projectTitle) update.projectTitle=stage.projectTitle;
  try{await updateDoc(workRef,update);if(note)note.textContent=submit?"Подано викладачу ✓":"Збережено ✓"}
  catch(err){console.error(err);if(note)note.textContent="Не вдалося зберегти";alert("Не вдалося зберегти роботу. Перевір інтернет або звернися до викладача.")}
}
function bind(){
  appEl.querySelectorAll('[data-save]').forEach(b=>b.onclick=async()=>{b.disabled=true;await saveStage(b.dataset.save,false);setTimeout(()=>b.disabled=false,400)});
  appEl.querySelectorAll('[data-submit]').forEach(b=>b.onclick=async()=>{if(!confirm("Подати цей етап викладачу на перевірку?"))return;b.disabled=true;await saveStage(b.dataset.submit,true);setTimeout(()=>b.disabled=false,400)});
}

onSnapshot(workRef,snap=>{if(!snap.exists()){fail("Лабораторію ще не активовано","Попроси викладача активувати персональний доступ у REMS-Control.");return}work=snap.data()||{};render()},err=>{console.error(err);fail("Не вдалося відкрити лабораторію","Перевір посилання та інтернет-з’єднання.")});
onSnapshot(feedbackRef,snap=>{feedback=snap.exists()?snap.data()||{}:{};if(work)render()},err=>{console.error("Feedback:",err);feedback={};if(work)render()});
