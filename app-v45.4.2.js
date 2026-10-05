
(function injectResumeV15Styles(){
  if(document.getElementById("remsResumeV15Styles")) return;
  const st=document.createElement("style"); st.id="remsResumeV15Styles";
  st.textContent=`
  .resume-profile-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.resume-box{border:1px solid #e5e7eb;border-radius:14px;padding:13px;background:#fff}.resume-box.full{grid-column:1/-1}.resume-box h4{margin:0 0 8px}.resume-tags{display:flex;flex-wrap:wrap;gap:6px}.resume-tag{display:inline-flex;padding:6px 9px;border-radius:999px;background:#eef2ff;color:#283050;font-size:11px;font-weight:700}.resume-import-note{padding:10px 12px;border-radius:12px;background:#ecfdf5;color:#166534;font-size:11px;margin-bottom:10px}.resume-text{white-space:pre-wrap;max-height:300px;overflow:auto;font-size:12px;line-height:1.5;background:#f8fafc;border-radius:10px;padding:10px}.casting-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.casting-item{background:#f8fafc;border-radius:10px;padding:9px}.casting-item b{display:block;font-size:10px;color:#6b7280;text-transform:uppercase}.casting-item span{font-size:12px}.resume-edit-section{grid-column:1/-1;border-top:1px solid #e5e7eb;padding-top:12px;margin-top:4px}.resume-edit-tags{min-height:76px}.resume-source-list{font-size:10px;color:#6b7280;line-height:1.45}@media(max-width:700px){.resume-profile-grid{grid-template-columns:1fr}.resume-box.full{grid-column:auto}.casting-grid{grid-template-columns:1fr 1fr}}
  `; document.head.appendChild(st);
})();

(function(){const s=document.createElement("style");s.textContent=`
.industry-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}.industry-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:12px;display:grid;gap:9px}.industry-card img,.industry-card-empty{width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:11px;background:#111318;color:#fff;display:grid;place-items:center;font-size:32px}.industry-card-meta{font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em}.industry-card h3,.industry-card p{margin:0}.industry-card p{color:#6b7280;font-size:12px}.industry-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:16px;margin-top:16px}.industry-form-grid label,.industry-block label{display:grid;gap:6px;font-size:12px;color:#374151}.industry-form-grid input,.industry-form-grid textarea,.industry-block input,.industry-block textarea{width:100%;border:1px solid #dfe3e8;border-radius:10px;padding:10px;font:inherit}.industry-form-grid textarea,.industry-block textarea{min-height:110px;resize:vertical}.industry-form-grid .full{grid-column:1/-1}.industry-publish{display:flex!important;grid-template-columns:auto 1fr!important;align-items:center;gap:10px;padding:12px;background:#f8fafc;border-radius:12px}.industry-publish input{width:20px!important;height:20px}.industry-publish span{display:grid}.industry-publish small{color:#6b7280}.industry-builder{margin-top:18px}.industry-addbar{display:flex;flex-wrap:wrap;gap:7px;margin:10px 0 14px}.industry-block{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:13px;margin-bottom:10px;display:grid;gap:9px}.industry-block-head{display:flex;justify-content:space-between;align-items:center}.industry-block-head>div{display:flex;gap:5px}.industry-file{background:#f8fafc;padding:9px;border-radius:9px}.ib-progress{font-size:11px;color:#4b5563}.industry-media-preview{margin-top:7px;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#eef1f4;display:none}.industry-media-preview.has-image{display:block}.industry-media-preview img{width:100%;height:100%;object-fit:cover;display:block}.industry-file input[type=file]{margin-top:4px}.industry-savebar{position:sticky;bottom:12px;background:#fffffff2;border:1px solid #e5e7eb;border-radius:14px;padding:10px;margin-top:16px;display:flex;justify-content:space-between;z-index:5}.danger{border:0;background:#fee2e2;color:#991b1b;border-radius:10px;padding:9px 12px;font-weight:700}.loading{padding:30px;color:#6b7280}@media(max-width:700px){.industry-form-grid{grid-template-columns:1fr}.industry-form-grid .full{grid-column:auto}}
`;document.head.appendChild(s)})();

(function injectPublicPublishToggleV37(){
  if(document.getElementById("remsPublicPublishToggleV37")) return;
  const st=document.createElement("style");
  st.id="remsPublicPublishToggleV37";
  st.textContent=`
    .public-publish-toggle{display:flex!important;flex-direction:row!important;align-items:center;gap:12px;padding:14px 16px;border:1px solid #dbe3ef;border-radius:14px;background:#f8fafc;cursor:pointer}
    .public-publish-toggle input{width:20px!important;height:20px!important;flex:0 0 auto}
    .public-publish-toggle span{display:grid;gap:3px}
    .public-publish-toggle small{color:#6b7280;font-size:11px}
  `;
  document.head.appendChild(st);
})();


(function injectStudentListAvatarV36(){
  if(document.getElementById("remsStudentListAvatarV36")) return;
  const st=document.createElement("style");
  st.id="remsStudentListAvatarV36";
  st.textContent=`
    .student-card-main{
      display:grid;
      grid-template-columns:56px minmax(0,1fr);
      gap:12px;
      align-items:center;
      width:100%;
      min-width:0;
    }
    .student-list-avatar{
      width:56px;
      height:56px;
      border-radius:12px;
      overflow:hidden;
      display:grid;
      place-items:center;
      background:#111827;
      color:#fff;
      font-weight:800;
      font-size:18px;
      box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);
    }
    .student-list-avatar img{
      width:100%;
      height:100%;
      display:block;
      object-fit:cover;
      object-position:center 20%;
    }
    .student-card-copy{
      min-width:0;
      text-align:left;
    }
    .student-card-copy h3{
      margin:0 0 3px;
      line-height:1.15;
    }
    .student-card-copy .chips{
      margin-top:8px;
    }
    @media(max-width:620px){
      .student-card-main{
        grid-template-columns:48px minmax(0,1fr);
        gap:10px;
      }
      .student-list-avatar{
        width:48px;
        height:48px;
        border-radius:10px;
        font-size:16px;
      }
    }
  `;
  document.head.appendChild(st);
})();


(function injectScheduleMonthTabsV34(){
  if(document.getElementById("remsScheduleMonthTabsV34")) return;
  const st=document.createElement("style");
  st.id="remsScheduleMonthTabsV34";
  st.textContent=`
    .schedule-month-tabs{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin:18px 0 12px;
      padding:10px;
      border:1px solid #e5e7eb;
      border-radius:14px;
      background:#fff;
      position:sticky;
      top:0;
      z-index:5;
    }
    .schedule-month-tab{
      border:1px solid #dfe3e8;
      background:#fff;
      color:#374151;
      padding:9px 12px;
      border-radius:10px;
      font:inherit;
      font-size:12px;
      cursor:pointer;
    }
    .schedule-month-tab.active{
      background:#111827;
      color:#fff;
      border-color:#111827;
      font-weight:700;
    }
    .schedule-month-single{margin-top:0!important}
    .schedule-month-nav{
      display:flex;
      align-items:center;
      justify-content:flex-end;
      flex-wrap:wrap;
      gap:10px;
    }
    .schedule-month-nav span{
      color:#6b7280;
      font-size:11px;
    }
    .schedule-month-nav button:disabled{
      opacity:.35;
      cursor:not-allowed;
    }
    @media(max-width:700px){
      .schedule-month-tabs{
        flex-wrap:nowrap;
        overflow-x:auto;
        scrollbar-width:thin;
      }
      .schedule-month-tab{white-space:nowrap}
      .schedule-month-head{
        align-items:flex-start!important;
        gap:10px;
      }
      .schedule-month-nav{
        justify-content:flex-start;
      }
      .schedule-month-nav span{
        width:100%;
      }
    }
  `;
  document.head.appendChild(st);
})();


(function injectSharedStudentPhotoStyles(){
  if(document.getElementById("remsSharedStudentPhotoStyles")) return;
  const st=document.createElement("style");
  st.id="remsSharedStudentPhotoStyles";
  st.textContent=`
    .shared-photo-editor{display:grid;grid-template-columns:150px minmax(0,1fr);gap:14px;align-items:center;padding:12px;border:1px solid #e5e7eb;border-radius:14px;background:#f8fafc}
    .shared-photo-preview{width:150px;aspect-ratio:4/5;display:grid;place-items:center;overflow:hidden;border-radius:12px;background:#111318;color:#9ca3af;font-size:11px}
    .shared-photo-preview img{width:100%;height:100%;object-fit:cover}
    .shared-photo-controls{display:grid;gap:8px;min-width:0}
    @media(max-width:620px){.shared-photo-editor{grid-template-columns:1fr}.shared-photo-preview{width:120px}}
  `;
  document.head.appendChild(st);
})();


(function injectStudentCardV31Styles(){
  if(document.getElementById("remsStudentCardV31Styles")) return;
  const st=document.createElement("style");
  st.id="remsStudentCardV31Styles";
  st.textContent=`
    .student-dialog{
      width:min(980px,96vw)!important;
      max-height:92vh!important;
    }

    .profile-hero{
      padding:22px 24px 26px!important;
      background:
        radial-gradient(circle at 82% 0%,rgba(92,70,255,.18),transparent 35%),
        linear-gradient(135deg,#10131b,#1d2230)!important;
    }

    .profile-hero-actions-row{
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:18px;
      margin-bottom:22px;
      padding-bottom:16px;
      border-bottom:1px solid rgba(255,255,255,.10);
    }

    .profile-hero-context{
      color:#98a2b3;
      font-size:10px;
      line-height:1.2;
      text-transform:uppercase;
      letter-spacing:.12em;
      font-weight:800;
      padding-top:9px;
      white-space:nowrap;
    }

    .profile-hero .hero-actions{
      display:flex!important;
      flex-wrap:wrap!important;
      justify-content:flex-end!important;
      gap:8px!important;
      min-width:0!important;
      flex:1 1 auto!important;
    }

    .profile-hero .hero-actions .ghost,
    .profile-hero .hero-actions a.ghost{
      min-height:38px;
      padding:9px 12px!important;
      border-radius:10px!important;
      white-space:nowrap;
      font-size:11px!important;
      line-height:1.1;
      text-decoration:none;
    }

    .profile-identity{
      display:grid;
      grid-template-columns:124px minmax(0,1fr);
      gap:22px;
      align-items:center;
      min-width:0;
    }

    .profile-identity .profile-photo{
      width:124px!important;
      height:150px!important;
      border-radius:16px!important;
      box-shadow:0 14px 36px rgba(0,0,0,.26)!important;
    }

    .profile-head-copy{
      min-width:0!important;
      padding:0!important;
    }

    .profile-hero h2{
      max-width:none!important;
      margin:0!important;
      font-size:clamp(28px,4vw,42px)!important;
      line-height:1.02!important;
      letter-spacing:-.035em;
      overflow-wrap:anywhere;
    }

    .profile-meta{
      margin-top:10px!important;
      font-size:12px!important;
    }

    .profile-project-pills{
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin-top:16px;
    }

    .profile-project-pill{
      display:inline-flex;
      align-items:center;
      max-width:100%;
      padding:7px 10px;
      border-radius:999px;
      background:color-mix(in srgb,var(--pill-color) 84%,#111 16%);
      color:#fff;
      font-size:11px;
      line-height:1;
      font-weight:700;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);
    }

    .profile-no-projects{
      color:#aab2c0;
      font-size:11px;
    }

    @media(max-width:720px){
      .profile-hero-actions-row{
        display:grid;
        grid-template-columns:1fr;
        gap:10px;
      }
      .profile-hero-context{display:none}
      .profile-hero .hero-actions{
        justify-content:flex-start!important;
      }
      .profile-identity{
        grid-template-columns:92px minmax(0,1fr);
        gap:15px;
      }
      .profile-identity .profile-photo{
        width:92px!important;
        height:116px!important;
      }
      .profile-hero h2{
        font-size:clamp(25px,7vw,34px)!important;
      }
    }

    @media(max-width:480px){
      .student-dialog{width:98vw!important}
      .profile-hero{padding:16px!important}
      .profile-hero .hero-actions .ghost,
      .profile-hero .hero-actions a.ghost{
        flex:1 1 auto;
        text-align:center;
      }
      .profile-identity{
        grid-template-columns:1fr;
        align-items:start;
      }
      .profile-identity .profile-photo{
        width:88px!important;
        height:108px!important;
      }
    }
  `;
  document.head.appendChild(st);
})();


(function injectPublicIntegrationStyles(){
  if(document.getElementById("remsPublicIntegrationStyles")) return;
  const st=document.createElement("style");
  st.id="remsPublicIntegrationStyles";
  st.textContent=`
    a.ghost.public-profile-btn,a.ghost.control-public-site-link{
      display:inline-flex;align-items:center;justify-content:center;
      text-decoration:none;box-sizing:border-box;
    }
    .public-profile-btn{font-weight:700}
  `;
  document.head.appendChild(st);
})();


(function injectProjectWatermarkStyles(){
  if(document.getElementById("remsProjectWatermarkStyles")) return;
  const st=document.createElement("style");
  st.id="remsProjectWatermarkStyles";
  st.textContent=`
    .project-watermark{
      position:relative!important;
      overflow:hidden!important;
      isolation:isolate;
      color:#fff!important;
      background:var(--project-color,#4b5563)!important;
      text-shadow:0 1px 2px rgba(0,0,0,.65);
    }
    .project-watermark .project-watermark-logo{
      position:absolute;
      z-index:-2;
      left:50%;
      top:50%;
      width:92%;
      height:92%;
      transform:translate(-50%,-50%);
      object-fit:contain;
      opacity:.52;
      filter:none;
      pointer-events:none;
    }
    .project-watermark .project-watermark-shade{
      position:absolute;
      inset:0;
      z-index:-1;
      background:rgba(0,0,0,.24);
      pointer-events:none;
    }
    .project-watermark .project-watermark-text{
      position:relative;
      z-index:1;
    }

    /* v2.8: календарна подія = кольорова плашка + ОКРЕМИЙ реальний логотип */
    .calendar-project-card{
      display:flex;
      flex-direction:column;
      gap:3px;
      width:100%;
      min-width:0;
    }
    .calendar-event-label{
      display:block;
      width:100%;
      box-sizing:border-box;
      padding:4px 5px;
      border-radius:5px;
      background:var(--project-color,#4b5563);
      color:#fff;
      font-size:9px;
      line-height:1.15;
      font-weight:700;
      text-align:center;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .calendar-project-logo{
      display:flex;
      align-items:center;
      justify-content:center;
      width:100%;
      height:42px;
      box-sizing:border-box;
      border-radius:6px;
      overflow:hidden;
      background:#111;
    }
    .calendar-project-logo img{
      display:block;
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center;
    }
    .calendar-project-logo.no-logo{
      background:var(--project-color,#4b5563);
      color:#fff;
      font-size:9px;
      font-weight:700;
      padding:4px;
      text-align:center;
    }
    .student-day-event.calendar-project-event{
      display:block;
      padding:0!important;
      border:0;
      background:transparent!important;
      color:inherit!important;
      text-shadow:none!important;
      overflow:visible!important;
      min-height:0;
    }
    .project-cal-event.calendar-project-event{
      display:block;
      padding:0!important;
      border:0!important;
      background:transparent!important;
      overflow:visible!important;
      white-space:normal!important;
    }

    /* У календарях робимо плашки трохи вищими, щоб реальний логотип читався */
    .student-day-event.project-watermark{
      min-height:25px;
      padding:5px 5px!important;
    }
    .project-cal-event.project-watermark{
      min-height:24px;
      padding:5px 5px!important;
    }
    .busy.project-watermark,
    .week-event-pill.project-watermark,
    .schedule-mini-project.project-watermark{
      min-height:24px;
      padding-top:5px!important;
      padding-bottom:5px!important;
    }

    /* У великих бейджах логотип можна бачити ще чіткіше */
    .chip.project-watermark .project-watermark-logo,
    .project-pill.project-watermark .project-watermark-logo{
      width:82%;
      height:82%;
      opacity:.42;
    }
  `;
  document.head.appendChild(st);
})();

(function injectV21Styles(){
  if(document.getElementById("remsV21Styles")) return;
  const st=document.createElement("style");
  st.id="remsV21Styles";
  st.textContent=`
    button.student-card{font:inherit;color:inherit;text-align:left;width:100%;border:1px solid #e5e7eb;background:#fff;padding:14px;appearance:none}
    button.student-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px #11182712}
    .projects-grid-main{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    button.project-card{font:inherit;color:inherit;text-align:left;width:100%;appearance:none;border:1px solid #e5e7eb;background:#fff}
    .project-open-arrow{font-size:22px;color:#6b7280}
    .dashboard-projects-head{display:flex;align-items:end;justify-content:space-between;gap:12px;margin:22px 0 10px}
    .dashboard-projects-head h2{margin:0}
    .dashboard-project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    .dashboard-project-card{position:relative;overflow:hidden;text-align:left;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:16px;cursor:pointer;font:inherit;color:inherit;box-shadow:inset 5px 0 0 var(--project-color)}
    .dashboard-project-card:hover{transform:translateY(-2px);box-shadow:inset 5px 0 0 var(--project-color),0 12px 30px #11182712}
    .dashboard-project-top{display:grid;grid-template-columns:78px 1fr auto;gap:12px;align-items:center}
    .dashboard-project-logo{width:78px;height:52px;object-fit:contain;border-radius:9px;background:#f7f7f8}
    .dashboard-project-copy h3{margin:0 0 4px;font-size:17px}
    .dashboard-project-arrow{font-size:24px;color:#6b7280}
    .dashboard-project-period{margin-top:14px;padding-top:12px;border-top:1px solid #eef0f3;font-size:12px;color:#6b7280}
    .dashboard-project-next{margin-top:10px;background:#f7f7f8;border-radius:11px;padding:10px 11px;display:grid;gap:2px}
    .dashboard-project-next span{font-size:10px;color:#6b7280}
    .dashboard-project-next b{font-size:12px}
    .dashboard-project-next small{font-size:10px;color:#6b7280}
    @media(max-width:800px){.projects-grid-main,.dashboard-project-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(st);
})();


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



(function injectAcknowledgementStylesV54(){
  if(document.getElementById("remsAcknowledgementStylesV54")) return;
  const st=document.createElement("style");
  st.id="remsAcknowledgementStylesV54";
  st.textContent=`
    .project-ack-line{margin-top:6px;font-size:11px;color:#4b5563;cursor:pointer;display:inline-flex;align-items:center;gap:5px;padding:4px 7px;border-radius:8px;background:#f3f4f6}
    .project-ack-line:hover{background:#e5e7eb}
    [data-project-ack-count].complete{color:#15803d}
    .ack-dashboard{margin-top:18px;padding:16px}
    #ackDashboardList{display:grid;gap:8px}
    .ack-dashboard-item{width:100%;border:1px solid #e5e7eb;background:#fff;border-radius:12px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center;gap:12px;text-align:left;font:inherit;cursor:pointer}
    .ack-dashboard-item:hover{background:#f8fafc}
    .ack-dashboard-item span{display:grid;gap:3px}.ack-dashboard-item small{color:#6b7280}
    .ack-dashboard-item strong{flex:0 0 auto;font-size:15px;padding:5px 8px;border-radius:999px;background:#f3f4f6}
    .ack-summary-list{display:grid;gap:10px;margin-top:16px}
    .ack-summary-row{border:1px solid #e5e7eb;border-radius:13px;overflow:hidden;background:#fff}
    .ack-summary-main{width:100%;border:0;background:#fff;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;gap:12px;text-align:left;font:inherit;cursor:pointer}
    .ack-summary-main:hover{background:#f8fafc}.ack-summary-main span{display:grid;gap:3px}.ack-summary-main small{color:#6b7280}
    .ack-summary-main strong{font-size:16px;padding:5px 9px;border-radius:999px;background:#f3f4f6}
    .ack-summary-main strong.complete{background:#dcfce7;color:#166534}
    .ack-summary-detail{border-top:1px solid #e5e7eb;padding:12px 14px;display:grid;grid-template-columns:1fr 1fr;gap:14px;background:#f8fafc}
    .ack-summary-detail[hidden]{display:none}.ack-summary-detail p{margin:6px 0 0;line-height:1.65;color:#4b5563}
    @media(max-width:650px){.ack-summary-detail{grid-template-columns:1fr}}
  `;
  document.head.appendChild(st);
})();

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-functions.js";
import { getFirestore, doc, getDoc, setDoc, onSnapshot, collection, getDocs, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const KEY="rems-control-v031-cache";
const OLDKEY="rems-control-v02";
const OLDERKEY="rems-control-v01";
const CLOUD_DOC="main";
const clone=x=>JSON.parse(JSON.stringify(x));
const studentMediaCache=new Map();
let db=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(OLDKEY)||localStorage.getItem(OLDERKEY)||"null")||clone(window.REMS_SEED);
db.lessons=Array.isArray(db.lessons)?db.lessons:[];
let cloudDb=null, cloudReady=false, applyingRemote=false, cloudInitializing=false, cloudWriting=false;
let firebaseApp=null, auth=null, currentUser=null, mediaStorage=null, functions=null;
const projectUiState={};
const REMS_VIEW_KEY="rems_control_current_view_v407";
const REMS_VALID_VIEWS=new Set(["dashboard","students","projects","largeforms","academic","calendar","schedule","industry"]);
let currentView=(()=>{
  try{
    const saved=sessionStorage.getItem(REMS_VIEW_KEY);
    return REMS_VALID_VIEWS.has(saved)?saved:"dashboard";
  }catch{ return "dashboard"; }
})();
let currentProjectDetailId=null;
const rememberCurrentView=v=>{
  if(!REMS_VALID_VIEWS.has(v)) return;
  currentView=v;
  try{ sessionStorage.setItem(REMS_VIEW_KEY,v); }catch{}
};

const ACK_COLLECTION="rems_student_acknowledgements";
const ackNameNorm=v=>String(v||"").toLowerCase().replace(/[’'`]/g,"").replace(/\s+/g," ").trim();\nconst acknowledgementMatchesEvent=(ack,e)=>\n  String(ack?.projectId||"")===String(e?.projectId||"") &&\n  String(ack?.date||"")===String(e?.date||"") &&\n  String(ack?.type||"")===String(e?.type||"");\n\nconst loadAllAcknowledgements=async()=>{\n  if(!cloudDb) return [];\n  try{\n    const snap=await getDocs(collection(cloudDb,ACK_COLLECTION));\n    return snap.docs.map(d=>({id:d.id,...(d.data()||{})}));\n  }catch(err){console.error("Acknowledgements:",err);return [];}\n};\n\n// v5.9 - one-time reset requested on 2026-08-25.\n// The cloud marker prevents later acknowledgements from being deleted again.\nconst ACK_RESET_MARKER="2026-08-25-v9";\nconst resetAllAcknowledgementsOnce=async mainRef=>{\n  if(!cloudDb||!mainRef) return 0;\n  const settings=db.settings||{};\n  if(String(settings.ackResetVersion||"")===ACK_RESET_MARKER) return 0;\n\n  const snap=await getDocs(collection(cloudDb,ACK_COLLECTION));\n  const docs=snap.docs||[];\n  let deleted=0;\n  for(let i=0;i<docs.length;i+=50){\n    const chunk=docs.slice(i,i+50);\n    await Promise.all(chunk.map(d=>deleteDoc(doc(cloudDb,ACK_COLLECTION,d.id))));\n    deleted+=chunk.length;\n  }\n\n  db.settings={\n    ...(db.settings||{}),\n    ackResetVersion:ACK_RESET_MARKER,\n    ackResetAt:new Date().toISOString()\n  };\n  cache();\n  await setDoc(mainRef,{...coreDbSnapshot(),updatedAt:new Date().toISOString()},{merge:false});\n  console.info(`Acknowledgements reset: ${deleted}`);\n  return deleted;\n};\n\nconst acknowledgementStats=(e,all)=>{\n  const assigned=studentsForEvent(e);\n  const ackNames=new Set((all||[]).filter(x=>acknowledgementMatchesEvent(x,e)).map(x=>ackNameNorm(x.studentName)).filter(Boolean));\n  const yes=assigned.filter(s=>ackNames.has(ackNameNorm(s.name)));\n  const no=assigned.filter(s=>!ackNames.has(ackNameNorm(s.name)));\n  return {assigned,yes,no};\n};\n\nasync function openProjectAcknowledgements(projectId){\n  const p=pBy(projectId); if(!p) return;\n  const dialog=ensureProjectCardDialog();\n  const holder=dialog.querySelector("#projectCardBody");\n  holder.innerHTML=`<div class="project-body"><h2>${esc(p.name)}</h2><div class="profile-empty">Завантаження ознайомлень…</div></div>`;\n  if(!dialog.open) dialog.showModal();\n  const all=await loadAllAcknowledgements();\n  const rows=eventsFor(projectId).map(e=>({e,...acknowledgementStats(e,all)}));\n  holder.innerHTML=`<div class="project-body">\n    <div class="project-section-head"><div><span class="eyebrow">Ознайомлення</span><h2 style="margin:3px 0 0">${esc(p.name)}</h2></div><button class="ghost" id="ackBackToProject">Назад до проєкту</button></div>\n    <div class="ack-summary-list">${rows.map((r,i)=>`<div class="ack-summary-row">\n      <button type="button" class="ack-summary-main" data-ack-detail="${i}"><span><b>${fmt(r.e.date)} · ${esc(r.e.type||"Подія")}</b><small>${eventMetaText(r.e)?esc(eventMetaText(r.e)):""}</small></span><strong class="${r.yes.length===r.assigned.length&&r.assigned.length?"complete":""}">${r.yes.length}/${r.assigned.length}</strong></button>\n      <div class="ack-summary-detail" data-ack-panel="${i}" hidden><div><b>✓ Ознайомилися (${r.yes.length})</b><p>${r.yes.map(s=>`${esc(s.name)} <small>· ${esc(studentGroupLabel(s))}</small>`).join("<br>")||"-"}</p></div><div><b>Не ознайомилися (${r.no.length})</b><p>${r.no.map(s=>`${esc(s.name)} <small>· ${esc(studentGroupLabel(s))}</small>`).join("<br>")||"-"}</p></div></div>\n    </div>`).join("")||'<div class="empty">У проєкті ще немає подій.</div>'}</div>\n  </div>`;\n  holder.querySelector("#ackBackToProject").onclick=()=>openProjectCard(projectId);\n  holder.querySelectorAll("[data-ack-detail]").forEach(b=>b.onclick=()=>{const panel=holder.querySelector(`[data-ack-panel="${b.dataset.ackDetail}"]`);if(panel) panel.hidden=!panel.hidden;});\n}\n\nasync function showEventAcknowledgements(ev){\n  const all=await loadAllAcknowledgements();\n  const s=acknowledgementStats(ev,all);\n  alert(`Ознайомилися: ${s.yes.length}/${s.assigned.length}\n\n✓ ${s.yes.map(x=>x.name).join("\n✓ ")||"-"}\n\nНе ознайомилися (${s.no.length}):\n${s.no.map(x=>x.name).join("\n")||"-"}`);\n}\n\nasync function updateAckIndicators(){\n  if(!cloudDb) return;\n  const all=await loadAllAcknowledgements();\n  document.querySelectorAll("[data-project-ack-count]").forEach(el=>{\n    const pid=el.dataset.projectAckCount; let yes=0,total=0;\n    eventsFor(pid).forEach(e=>{const s=acknowledgementStats(e,all);yes+=s.yes.length;total+=s.assigned.length;});\n    el.textContent=`${yes}/${total}`; el.classList.toggle("complete",total>0&&yes===total);\n  });\n  const dash=document.querySelector("#ackDashboardList");\n  if(dash){\n    const today=localIsoDate(new Date());\n    const rows=(db.events||[]).filter(e=>String(e.date||"")>=today).map(e=>{const s=acknowledgementStats(e,all);return {e,p:pBy(e.projectId),...s};}).filter(x=>x.p&&x.assigned.length&&x.no.length).sort((x,y)=>String(x.e.date).localeCompare(String(y.e.date))).slice(0,8);\n    dash.innerHTML=rows.map(x=>`<button type="button" class="ack-dashboard-item" data-ack-project="${esc(String(x.e.projectId))}"><span><b>${esc(x.p.name)}</b><small>${fmt(x.e.date)} · ${esc(x.e.type||"Подія")}</small></span><strong>${x.yes.length}/${x.assigned.length}</strong></button>`).join("")||'<div class="muted">Усі найближчі події ознайомлені ✓</div>';\n    dash.querySelectorAll("[data-ack-project]").forEach(b=>b.onclick=()=>openProjectAcknowledgements(b.dataset.ackProject));\n  }\n}\n\nconst statusEl=()=>document.querySelector("#cloudStatus");\nconst setStatus=(text)=>{ if(statusEl()) statusEl().textContent=text; };\nconst coreDbSnapshot=()=>{\n  const clean=clone(db);\n  // Індивідуальні заняття Фішера зберігаються в окремому Firestore-документі,\n  // щоб не роздувати головний документ REMS Control і не впиратися в ліміт 1 MiB.\n  clean.lessons=(clean.lessons||[]).filter(l=>String(l?.source||"")!=="fisher-individual-dramaturgy-2026");\n  clean.students=(clean.students||[]).map(s=>{\n    const out={...s};\n    delete out.photoData;\n    if(out.publicProfile){\n      out.publicProfile={...out.publicProfile};\n      delete out.publicProfile.photoData;\n    }\n    return out;\n  });\n  return clean;\n};\nconst cache=()=>localStorage.setItem(KEY,JSON.stringify(coreDbSnapshot()));\n\nconst setWriteUiReady=(ready)=>{\n  const btn=document.querySelector("#quickAdd");\n  if(btn){\n    btn.disabled=!ready;\n    btn.title=ready ? "" : "Зачекайте, поки завантажиться хмарна база";\n    btn.style.opacity=ready ? "1" : ".55";\n  }\n};\n\n\n// v4.2 personal schedule sync: keeps existing private links and refreshes calendar data.\nasync function syncExistingPersonalSchedules(){\n  if(!cloudReady || !cloudDb || !currentUser) return;\n  try{\n    const snap=await getDocs(collection(cloudDb,"rems_student_schedules"));\n    if(snap.empty) return;\n\n    const docs=snap.docs.map(d=>({id:d.id,data:d.data()||{}}));\n    const norm=v=>String(v||"").toLowerCase().replace(/[’'`]/g,"").replace(/\s+/g," ").trim();

    for(const s of (db.students||[])){
      const target=docs.find(d=>
        (d.data.studentId && String(d.data.studentId)===String(s.id)) ||
        (d.data.name && norm(d.data.name)===norm(s.name))
      );
      if(!target) continue; // Never change/create a student's private link here.

      const studentEvents=(db.events||[])
        .filter(e=>e?.date && studentsForEvent(e).some(st=>String(st.id)===String(s.id)))
        .sort((a,b)=>`${a.date} ${a.startTime||""}`.localeCompare(`${b.date} ${b.startTime||""}`));

      const projectIds=[...new Set(studentEvents.map(e=>String(e.projectId)))];
      const projects={};
      let embeddedLogoBytes=0;

      for(const pid of projectIds){
        const p=pBy(pid);
        if(!p) continue;
        let logo=projectLogoFile(p)||"";
        // Avoid approaching Firestore's 1 MiB document limit when many custom data-URI logos exist.
        if(logo.startsWith("data:")){
          if(embeddedLogoBytes + logo.length > 650000) logo="";
          else embeddedLogoBytes += logo.length;
        }
        projects[pid]={
          name:String(p.name||""),
          color:String(p.color||"#4b5563"),
          logo:String(logo||"")
        };
      }

      const items=studentEvents.map(e=>{
        const p=pBy(e.projectId);
        const role=studentRoleForEvent(e,s.id);
        return {
          projectId:String(e.projectId||""),
          projectName:String(p?.name||"Активність"),
          projectColor:String(p?.color||"#d9ff38"),
          date:String(e.date||""),
          type:String(e.type||"Подія"),
          startTime:String(e.startTime||""),
          endTime:String(e.endTime||""),
          timeUndetermined:isTimeUndetermined(e),
          location:String(e.location||""),
          role:String(role||""),
          note:[role?`Обов'язки: ${role}`:"",String(e.note||"")].filter(Boolean).join(" · ")\n        };\n      });\n\n      await setDoc(doc(cloudDb,"rems_student_schedules",target.id),{\n        ...target.data,\n        studentId:String(s.id),\n        name:String(s.name||target.data.name||""),\n        group:String(s.group||target.data.group||"РЕМС-44"),\n        items,\n        projects,\n        updatedAt:new Date().toISOString()\n      },{merge:false});\n    }\n  }catch(err){\n    console.error("Personal schedule sync failed:",err);\n  }\n}\n\nconst scheduleKeysForStudentIds=async(studentIds=[])=>{\n  if(!cloudDb) return [];\n\n  const ids=new Set(\n    (studentIds||[])\n      .map(id=>String(id))\n      .filter(Boolean)\n  );\n\n  if(!ids.size) return [];\n\n  const snap=await getDocs(\n    collection(cloudDb,"rems_student_schedules")\n  );\n\n  return snap.docs\n    .filter(docSnap=>{\n      const data=docSnap.data()||{};\n      return ids.has(String(data.studentId||""));\n    })\n    .map(docSnap=>docSnap.id);\n};\n\nconst personalScheduleUrlForStudent=async(studentId)=>{\n  if(!cloudDb) return "";\n  const keys=await scheduleKeysForStudentIds([studentId]);\n  const key=String(keys[0]||"").trim();\n  return key\n    ? `https://rems-44.github.io/REMS-44/my.html?key=${encodeURIComponent(key)}`\n    : "";\n};\nconst sendSchedulePush=async({scheduleKeys,title,body,url})=>{\n  if(!functions) throw new Error("Cloud Functions ще не ініціалізовано");\n  if(!currentUser) throw new Error("Потрібна авторизація");\n\n  const sendNotification=httpsCallable(\n    functions,\n    "sendScheduleNotification"\n  );\n\n  const result=await sendNotification({\n    scheduleKeys,\n    title,\n    body,\n    url\n  });\n\n  return result.data;\n};\n\nconst notifyStudentsForEvent=async(ev,actionLabel="Розклад оновлено")=>{\n  if(!ev) return {ok:true,sent:0,failed:0,recipients:0};\n\n  const studentIds=studentsForEvent(ev)\n    .map(s=>String(s.id))\n    .filter(Boolean);\n\n  const scheduleKeys=await scheduleKeysForStudentIds(studentIds);\n  if(!scheduleKeys.length){\n    return {ok:true,sent:0,failed:0,recipients:0};\n  }\n\n  const p=pBy(ev.projectId);\n  const details=[\n    String(ev.date||""),\n    eventTimeText(ev),\n    String(ev.location||"").trim()\n  ].filter(Boolean).join(" · ");\n\n  return sendSchedulePush({\n    scheduleKeys,\n    title:`REMS-44 · ${p?.name||"Розклад"}`,\n    body:`${actionLabel}: ${ev.type||"Подія"}${details?` · ${details}`:""}`,\n    url:"https://rems-44.github.io/REMS-44/"\n  });\n};\n\nconst notifyStudentsForProject=async projectId=>{\n  const p=pBy(projectId);\n  if(!p) return {ok:false,sent:0,failed:0,recipients:0};\n\n  const studentIds=projectStudents(projectId)\n    .map(s=>String(s.id))\n    .filter(Boolean);\n\n  const scheduleKeys=await scheduleKeysForStudentIds(studentIds);\n  if(!scheduleKeys.length){\n    return {ok:true,sent:0,failed:0,recipients:0};\n  }\n\n  const result=await sendSchedulePush({\n    scheduleKeys,\n    title:`REMS-44 · ${p.name||"Проєкт"}`,\n    body:"Ознайомтеся з проєктом та актуальним розкладом. Після перегляду підтвердьте ознайомлення у своєму особистому розкладі.",\n    url:"https://rems-44.github.io/REMS-44/my.html"\n  });\n\n  return {...(result||{}),recipients:scheduleKeys.length};\n};\nconst save=async()=>{\n  normalizeUndeterminedTimes(db);\n  cache();\n  if(applyingRemote) return true;\n  if(!cloudReady||!cloudDb){\n    setStatus("v39.3 · немає з’єднання");\n    return false;\n  }\n  try{\n    cloudWriting=true;\n    setStatus("v39.3 · збереження…");\n    const payload={...coreDbSnapshot(),updatedAt:new Date().toISOString()};\n    await setDoc(\n      doc(cloudDb,"rems_control",CLOUD_DOC),\n      payload,\n      {merge:true}\n    );\n    cache();\n    // Main REMS Control save must finish immediately. Personal pages refresh in the background.\n    syncExistingPersonalSchedules().catch(err=>console.error("Background personal schedule sync failed:",err));\n    setStatus("v44.9 · хмара ✓");\n    // Every derived screen should reflect the edited cloud data.\n    // A rendering error must not turn a successful Firestore write into a failed save.\n    try{\n      refreshCurrentView();\n    }catch(renderErr){\n      console.error("View refresh after save failed:",renderErr);\n    }\n    return true;\n  }catch(err){\n    console.error(err);\n    setStatus("v39.3 · помилка хмари");\n    return false;\n  }finally{\n    setTimeout(()=>{ cloudWriting=false; },250);\n  }\n};\nconst $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];\nconst app=$("#app");\nconst localIsoDate=(value=new Date())=>{\n  const d=value instanceof Date?value:new Date(value);\n  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");\n  return `${y}-${m}-${day}`;\n};\nconst fmt=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit"});\nconst fullfmt=d=>new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"});\nconst availableGroups=()=>[...new Set((db.students||[]).map(st=>String(st.group||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"uk"));\nconst groupOptionsHtml=(selected="",allLabel="Усі групи")=>`<option value="">${esc(allLabel)}</option>`+availableGroups().map(g=>`<option value="${esc(g)}" ${String(selected)===g?"selected":""}>${esc(g)}</option>`).join("");\nconst studentGroupLabel=st=>String(st?.group||"Без групи").trim()||"Без групи";\nconst studentIdentityHtml=(st,extra="")=>{\n  const meta=[studentGroupLabel(st),String(extra||"").trim()].filter(Boolean).join(" · ");\n  return `<span class="student-identity-name">${esc(st?.name||"")}</span><small class="student-identity-meta">${esc(meta)}</small>`;\n};\nconst studentGroupSummary=students=>{\n  const counts=new Map();\n  (students||[]).forEach(st=>{\n    const g=studentGroupLabel(st);\n    counts.set(g,(counts.get(g)||0)+1);\n  });\n  return [...counts.entries()].sort((a,b)=>a[0].localeCompare(b[0],"uk")).map(([g,n])=>`${g} - ${n}`).join(" · ");\n};\nconst studentBusyLabelsOnDate=(studentId,date)=>{\n  const sid=String(studentId);\n  const labels=[];\n  (db.events||[]).filter(e=>String(e.date||"")===String(date)).forEach(e=>{\n    if(studentsForEvent(e).some(st=>String(st.id)===sid)){\n      const p=pBy(e.projectId);\n      labels.push(p?.name||"Проєкт");\n    }\n  });\n  academicLessons().filter(l=>academicLessonOccursOnDate(l,date)).forEach(l=>{\n    if(lessonStudents(l).some(st=>String(st.id)===sid)) labels.push(`🎓 ${l.subject||l.title||"Заняття"}`);\n  });\n  return [...new Set(labels.filter(Boolean))];\n};\n// v9.0 - availability-first project creation and staffing for project dates.\nconst studentExternalBusyLabelsOnDate=(studentId,date,currentProjectId)=>{\n  const sid=String(studentId), pid=String(currentProjectId||"");\n  const labels=[];\n  (db.events||[]).filter(e=>String(e.date||"")===String(date)&&String(e.projectId)!==pid).forEach(e=>{\n    if(studentsForEvent(e).some(st=>String(st.id)===sid)){\n      const pr=pBy(e.projectId);\n      labels.push(`${pr?.name||"Проєкт"}${eventTimeText(e)?` · ${eventTimeText(e)}`:""}`);\n    }\n  });\n  academicLessons().filter(l=>academicLessonOccursOnDate(l,date)).forEach(l=>{\n    if(lessonStudents(l).some(st=>String(st.id)===sid)) labels.push(`🎓 ${l.subject||l.title||"Заняття"}${eventTimeText(l)?` · ${eventTimeText(l)}`:""}`);\n  });\n  return [...new Set(labels.filter(Boolean))];\n};\nconst studentBusyLabelsForSlot=(studentId,date,startTime="",endTime="",timeUndetermined=true,currentProjectId="")=>{\n  const sid=String(studentId),pid=String(currentProjectId||"");\n  const unknown=timeUndetermined!==false || (!startTime&&!endTime);\n  const overlaps=item=>{\n    if(unknown || isTimeUndetermined(item)) return true;\n    const a1=timeMinutes(startTime||"00:00"), a2=timeMinutes(endTime||"23:59");\n    const b1=timeMinutes(item?.startTime||"00:00"), b2=timeMinutes(item?.endTime||"23:59");\n    return a1 < b2 && b1 < a2;\n  };\n  const labels=[];\n  (db.events||[]).filter(e=>String(e.date||"")===String(date)&&String(e.projectId)!==pid&&overlaps(e)).forEach(e=>{\n    if(studentsForEvent(e).some(st=>String(st.id)===sid)){\n      const pr=pBy(e.projectId); labels.push(`${pr?.name||"Проєкт"} · ${e.type||"Робота"}${eventTimeText(e)?` · ${eventTimeText(e)}`:""}`);\n    }\n  });\n  academicLessons().filter(l=>academicLessonOccursOnDate(l,date)&&overlaps(l)).forEach(l=>{\n    if(lessonStudents(l).some(st=>String(st.id)===sid)) labels.push(`🎓 ${l.subject||l.title||"Заняття"}${eventTimeText(l)?` · ${eventTimeText(l)}`:""}`);\n  });\n  return [...new Set(labels.filter(Boolean))];\n};\n\nconst projectDateRosterIds=(project,date)=>{\n  const raw=project?.dateRosters?.[String(date)];\n  return Array.isArray(raw)?[...new Set(raw.map(x=>String(x)))]:[];\n};\nconst setProjectDateRosterIds=(project,date,ids)=>{\n  project.dateRosters=(project.dateRosters&&typeof project.dateRosters==="object")?project.dateRosters:{};\n  project.dateRosters[String(date)]=[...new Set((ids||[]).map(x=>resolveStudentId(x)??x))];\n};\nconst ensureStudentInProjectTeam=(projectId,studentId)=>{\n  const sid=resolveStudentId(studentId)??studentId;\n  if(!db.assignments.some(a=>String(a.projectId)===String(projectId)&&String(a.studentId)===String(sid))){\n    db.assignments.push({projectId,studentId:sid});\n  }\n  return sid;\n};\nasync function addStudentToProjectDate(projectId,date,studentId){\n  const project=pBy(projectId); if(!project) return false;\n  // v31: date roster + event rosters + master project team are one atomic edit.\n  // If Firestore rejects the write, restore the exact previous local state.\n  const beforeAssignments=clone(db.assignments||[]);\n  const beforeEvents=clone(db.events||[]);\n  const beforeDateRosters=clone(project.dateRosters||{});\n  try{\n    const sid=ensureStudentInProjectTeam(projectId,studentId);\n    const roster=new Set(projectDateRosterIds(project,date));\n    roster.add(String(sid));\n    setProjectDateRosterIds(project,date,[...roster]);\n    (db.events||[]).forEach(e=>{\n      if(String(e.projectId)!==String(projectId)||String(e.date)!==String(date)) return;\n      const ids=new Set((Array.isArray(e.studentIds)?e.studentIds:[]).map(String));\n      ids.add(String(sid));\n      e.studentIds=[...ids].map(x=>resolveStudentId(x)??x);\n    });\n    const ok=await save();\n    if(!ok) throw new Error("cloud-save-failed");\n    return true;\n  }catch(err){\n    db.assignments=beforeAssignments;\n    db.events=beforeEvents;\n    project.dateRosters=beforeDateRosters;\n    cache();\n    console.error("addStudentToProjectDate rollback",err);\n    return false;\n  }\n}\nasync function removeStudentFromProjectDate(projectId,date,studentId){\n  const project=pBy(projectId); if(!project) return false;\n  const beforeEvents=clone(db.events||[]);\n  const beforeDateRosters=clone(project.dateRosters||{});\n  const sid=String(studentId);\n  try{\n    setProjectDateRosterIds(project,date,projectDateRosterIds(project,date).filter(x=>String(x)!==sid));\n    (db.events||[]).forEach(e=>{\n      if(String(e.projectId)!==String(projectId)||String(e.date)!==String(date)) return;\n      e.studentIds=(Array.isArray(e.studentIds)?e.studentIds:[]).filter(x=>String(x)!==sid);\n      if(e.studentRoles&&typeof e.studentRoles==="object") delete e.studentRoles[sid];\n    });\n    const ok=await save();\n    if(!ok) throw new Error("cloud-save-failed");\n    return true;\n  }catch(err){\n    db.events=beforeEvents;\n    project.dateRosters=beforeDateRosters;\n    cache();\n    console.error("removeStudentFromProjectDate rollback",err);\n    return false;\n  }\n}\n\n// v39.0 - stable project participation model.\n// There are only two meaningful rosters:\n// 1) project team (db.assignments); 2) optional roster override for a concrete date (project.dateRosters[date]).\n// Work blocks no longer own a competing copy of the roster. They inherit the date roster, or the project team when no date override exists.\nconst projectAllDates=(projectId)=>{\n  const p=pBy(projectId);\n  return [...new Set([...(p?.plannedDates||[]).map(String),...eventsFor(projectId).map(e=>String(e.date||""))])].filter(Boolean).sort();\n};\nconst normalizeRosterIds=(ids=[])=>[...new Set((ids||[]).map(x=>String(resolveStudentId(x)??x)).filter(Boolean))];\nconst hasProjectDateRoster=(project,date)=>!!(project?.dateRosters && Object.prototype.hasOwnProperty.call(project.dateRosters,String(date)));\nconst effectiveProjectDateRosterIds=(projectId,date)=>{\n  const p=pBy(projectId); if(!p) return [];\n  if(hasProjectDateRoster(p,date)) return normalizeRosterIds(projectDateRosterIds(p,date));\n  return normalizeRosterIds(projectStudents(projectId).map(st=>st.id));\n};\nconst applyProjectTeamEverywhere=(projectId,ids=[])=>{\n  const p=pBy(projectId); if(!p) return [];\n  const oldTeam=new Set(projectStudents(projectId).map(st=>String(st.id)));\n  const wanted=normalizeRosterIds(ids), wantedSet=new Set(wanted);\n  db.assignments=(db.assignments||[]).filter(a=>String(a.projectId)!==String(projectId));\n  wanted.forEach(sid=>db.assignments.push({projectId,studentId:resolveStudentId(sid)??sid,role:""}));\n  // Removing a person from the whole project also removes them from date overrides and obsolete block-level copies.\n  const removed=[...oldTeam].filter(sid=>!wantedSet.has(sid));\n  if(removed.length){\n    const removedSet=new Set(removed);\n    Object.keys(p.dateRosters||{}).forEach(date=>{\n      setProjectDateRosterIds(p,date,projectDateRosterIds(p,date).filter(id=>!removedSet.has(String(id))));\n    });\n    (db.events||[]).forEach(e=>{\n      if(String(e.projectId)!==String(projectId)) return;\n      if(Array.isArray(e.studentIds)) e.studentIds=e.studentIds.filter(id=>!removedSet.has(String(id)));\n      if(e.studentRoles&&typeof e.studentRoles==="object") removed.forEach(sid=>delete e.studentRoles[sid]);\n    });\n  }\n  // Adding somebody changes only the project team. Existing custom dates stay custom; inherited dates pick the new team automatically.\n  return wanted;\n};\nconst applyProjectDateRosterEverywhere=(projectId,date,ids=[])=>{\n  const p=pBy(projectId); if(!p) return [];\n  const wanted=normalizeRosterIds(ids);\n  wanted.forEach(sid=>ensureStudentInProjectTeam(projectId,sid));\n  setProjectDateRosterIds(p,date,wanted);\n  // Block-level studentIds are legacy data. Keep roles clean, but the active roster is the date roster.\n  const wantedSet=new Set(wanted);\n  (db.events||[]).forEach(e=>{\n    if(String(e.projectId)!==String(projectId)||String(e.date)!==String(date)) return;\n    if(e.studentRoles&&typeof e.studentRoles==="object"){\n      Object.keys(e.studentRoles).forEach(k=>{if(!wantedSet.has(String(k))) delete e.studentRoles[k];});\n    }\n  });\n  return wanted;\n};\nasync function setProjectPersonEverywhere(projectId,studentId,present){\n  const current=new Set(projectStudents(projectId).map(st=>String(st.id)));\n  const sid=String(resolveStudentId(studentId)??studentId);\n  if(present) current.add(sid); else current.delete(sid);\n  const before={assignments:clone(db.assignments||[]),events:clone(db.events||[]),dateRosters:clone(pBy(projectId)?.dateRosters||{})};\n  try{\n    applyProjectTeamEverywhere(projectId,[...current]);\n    const ok=await save(); if(!ok) throw new Error("cloud-save-failed");\n    return true;\n  }catch(err){\n    db.assignments=before.assignments; db.events=before.events; const p=pBy(projectId); if(p)p.dateRosters=before.dateRosters; cache();\n    console.error("setProjectPersonEverywhere rollback",err); return false;\n  }\n}\nasync function setProjectDatePeopleEverywhere(projectId,date,ids=[]){\n  const p=pBy(projectId); if(!p) return false;\n  const before={assignments:clone(db.assignments||[]),events:clone(db.events||[]),dateRosters:clone(p.dateRosters||{})};\n  try{\n    applyProjectDateRosterEverywhere(projectId,date,ids);\n    const ok=await save(); if(!ok) throw new Error("cloud-save-failed");\n    return true;\n  }catch(err){\n    db.assignments=before.assignments; db.events=before.events; p.dateRosters=before.dateRosters; cache();\n    console.error("setProjectDatePeopleEverywhere rollback",err); return false;\n  }\n}\n\nconst isTimeUndetermined=e=>{\n  const start=String(e?.startTime||"").trim();\n  const end=String(e?.endTime||"").trim();\n  return e?.timeUndetermined===true || (!start&&!end);\n};\nconst eventTimeText=e=>{\n  const start=String(e?.startTime||"").trim();\n  const end=String(e?.endTime||"").trim();\n  if(isTimeUndetermined(e)) return "Час не визначено";\n  if(start&&end) return `${start}–${end}`;\n  return start||end||"Час не визначено";\n};\nconst normalizeUndeterminedTimes=(target=db)=>{\n  let changed=false;\n  [target?.events,target?.lessons].forEach(rows=>{\n    (Array.isArray(rows)?rows:[]).forEach(item=>{\n      const start=String(item?.startTime||"").trim();\n      const end=String(item?.endTime||"").trim();\n      if(!start&&!end&&item.timeUndetermined!==true){item.timeUndetermined=true;changed=true;}\n    });\n  });\n  return changed;\n};\nconst bindTimeUndeterminedControls=(root,checkboxSelector,startSelector,endSelector)=>{\n  const checkbox=root?.querySelector?.(checkboxSelector);\n  const start=root?.querySelector?.(startSelector);\n  const end=root?.querySelector?.(endSelector);\n  if(!checkbox||!start||!end) return ()=>{};\n  const sync=()=>{\n    const unknown=!!checkbox.checked;\n    if(unknown){start.value="";end.value="";}\n    start.disabled=unknown;\n    end.disabled=unknown;\n  };\n  checkbox.addEventListener("change",sync);\n  sync();\n  return sync;\n};\nnormalizeUndeterminedTimes(db);\nconst eventMetaText=e=>{\n  const parts=[];\n  const time=eventTimeText(e);\n  if(time) parts.push(time);\n  const location=String(e?.location||"").trim();\n  if(location) parts.push(location);\n  return parts.join(" · ");\n};\nconst pBy=id=>db.projects.find(p=>String(p.id)===String(id));\n\nconst projectLogoFile=p=>{\n  if(p?.logoData) return p.logoData;\n  const n=String(p?.name||"").toLowerCase();\n  if(n.includes("дитяче євробачення")) return "logos/junior-eurovision.png";\n  if(n.includes("голос країни")||n.includes("голос 14")) return "logos/holos-krainy.png";\n  if(n.includes("танцюють всі")) return "logos/tantsiuiut-vsi.png";\n  if(n.includes("фабрика зірок")) return "logos/fabryka-zirok.png";\n  return "";\n};\nconst projectLogoHtml=(p,cls="project-logo-img")=>{\n  const src=projectLogoFile(p);\n  return src?`<img class="${cls}" src="${src}" alt="${esc(p.name)}">`:`<span>${p.emoji||"◆"}</span>`;\n};\n\nasync function compressStudentPhoto(file){\n  if(!file) return "";\n  if(!file.type.startsWith("image/")) throw new Error("Оберіть файл зображення.");\n  if(file.size>12*1024*1024) throw new Error("Фото завелике. Максимум 12 МБ.");\n  const bitmap=await createImageBitmap(file);\n  const maxW=900,maxH=1200;\n  const scale=Math.min(1,maxW/bitmap.width,maxH/bitmap.height);\n  const w=Math.max(1,Math.round(bitmap.width*scale));\n  const h=Math.max(1,Math.round(bitmap.height*scale));\n  const canvas=document.createElement("canvas");\n  canvas.width=w; canvas.height=h;\n  canvas.getContext("2d").drawImage(bitmap,0,0,w,h);\n  let q=.82, data=canvas.toDataURL("image/webp",q);\n  while(data.length>420000 && q>.50){q-=.08;data=canvas.toDataURL("image/webp",q);}\n  if(data.length>500000) throw new Error("Фото не вдалося достатньо стиснути. Спробуйте менший файл.");\n  return data;\n}\nconst studentMediaId=s=>publicProfileIdFor(s);\nconst studentMediaFor=s=>studentMediaCache.get(studentMediaId(s))||null;\n\nconst loadStudentMedia=async s=>{\n  if(!cloudDb||!s) return null;\n  const id=studentMediaId(s);\n  if(!id) return null;\n  try{\n    const snap=await getDoc(doc(cloudDb,"rems_student_media",id));\n    if(!snap.exists()){\n      studentMediaCache.delete(id);\n      return null;\n    }\n    const data=snap.data()||{};\n    studentMediaCache.set(id,data);\n    return data;\n  }catch(err){\n    console.error("Student media load failed:",id,err);\n    return null;\n  }\n};\n\nconst loadAllStudentMedia=async()=>{\n  if(!cloudDb) return;\n  await Promise.all((db.students||[]).map(s=>loadStudentMedia(s)));\n};\n\nconst saveStudentMedia=async(s,photoData)=>{\n  if(!cloudReady||!cloudDb||!currentUser) throw new Error("Хмара не готова");\n  const id=studentMediaId(s);\n  if(!id) throw new Error("Немає ID студента для фото");\n  const payload={\n    id,\n    studentId:String(s.id),\n    name:String(s.name||""),\n    photoData:String(photoData||""),\n    updatedAt:new Date().toISOString()\n  };\n  await setDoc(doc(cloudDb,"rems_student_media",id),payload,{merge:false});\n  studentMediaCache.set(id,payload);\n  return payload;\n};\n\nconst sharedStudentPhoto=s=>{\n  const media=studentMediaFor(s);\n  const pub=publicProfileFor?.(s);\n  return String(media?.photoData||s?.photoUrl||pub?.photo||"").trim();\n};\n\nconst projectWatermarkStyle=p=>`--project-color:${p?.color||"#4b5563"};`;\nconst projectWatermarkInner=(p,text)=>{\n  const src=projectLogoFile(p);\n  return `${src?`<img class="project-watermark-logo" src="${esc(src)}" alt="">`:""}<span class="project-watermark-shade"></span><span class="project-watermark-text">${text}</span>`;\n};\nconst calendarProjectCard=(p,label)=>{\n  const src=projectLogoFile(p);\n  return `<span class="calendar-project-card" style="--project-color:${p?.color||"#4b5563"}">\n    <span class="calendar-event-label">${label}</span>\n    ${src\n      ? `<span class="calendar-project-logo"><img src="${esc(src)}" alt="${esc(p?.name||"Проєкт")}"></span>`\n      : `<span class="calendar-project-logo no-logo">${esc(p?.name||"Проєкт")}</span>`}\n  </span>`;\n};\n\n\nasync function compressProjectLogo(file){\n  if(!file) return "";\n  if(!file.type.startsWith("image/")) throw new Error("Оберіть файл зображення.");\n  // Приймаємо великі оригінали, а до безпечного розміру стискаємо вже в браузері.\n  if(file.size>100*1024*1024) throw new Error("Файл завеликий. Максимум 100 МБ.");\n\n  const readAsDataURL=f=>new Promise((resolve,reject)=>{\n    const r=new FileReader(); r.onload=()=>resolve(String(r.result||"")); r.onerror=reject; r.readAsDataURL(f);\n  });\n\n  // Невеликі JPEG/WEBP уже оптимальні. Не перекодовуємо їх повторно -\n  // саме повторне WEBP-кодування в окремих браузерах і давало помилку навіть для файлів ~40 КБ.\n  if(file.size<=220*1024 && /image\/(jpeg|jpg|webp)/i.test(file.type)) return await readAsDataURL(file);\n\n  let bitmap;\n  try{ bitmap=await createImageBitmap(file); }\n  catch(_){ throw new Error("Не вдалося прочитати це зображення. Збережіть його як JPG або PNG і спробуйте ще раз."); }\n\n  let maxW=1200,maxH=800;\n  let scale=Math.min(1,maxW/bitmap.width,maxH/bitmap.height);\n  let w=Math.max(1,Math.round(bitmap.width*scale));\n  let h=Math.max(1,Math.round(bitmap.height*scale));\n  const canvas=document.createElement("canvas");\n  const render=()=>{\n    canvas.width=w; canvas.height=h;\n    const ctx=canvas.getContext("2d");\n    ctx.fillStyle="#fff"; ctx.fillRect(0,0,w,h); // JPEG не підтримує прозорість\n    ctx.drawImage(bitmap,0,0,w,h);\n  };\n  render();\n\n  // JPEG підтримується всіма потрібними браузерами. Ціль ~300 КБ у вигляді data URL,\n  // щоб фото безпечно зберігалося разом із даними проєкту.\n  let quality=.86;\n  let data=canvas.toDataURL("image/jpeg",quality);\n  while(data.length>300000 && quality>.46){\n    quality-=.08;\n    data=canvas.toDataURL("image/jpeg",quality);\n  }\n  while(data.length>300000 && w>480 && h>300){\n    w=Math.max(1,Math.round(w*.82)); h=Math.max(1,Math.round(h*.82));\n    render(); quality=.76;\n    data=canvas.toDataURL("image/jpeg",quality);\n  }\n  bitmap.close?.();\n  if(data.length>380000) throw new Error("Не вдалося підготувати зображення. Спробуйте JPG або PNG до 100 МБ.");\n  return data;\n}\n\nfunction ensureEventTimeLocationFields(){\n  const form=document.querySelector("#eventForm");\n  if(!form) return;\n\n  const save=document.querySelector("#saveEvent");\n\n  if(!form.querySelector("#eventStartTime")){\n    const wrap=document.createElement("div");\n    wrap.className="full";\n    wrap.style.cssText="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px";\n    wrap.innerHTML=`<label>Початок<input id="eventStartTime" type="time"></label>\n      <label>Завершення<input id="eventEndTime" type="time"></label>\n      <label style="grid-column:1/-1;display:flex;align-items:center;gap:8px"><input id="eventTimeUndetermined" type="checkbox" checked style="width:auto"> <b>Час не визначено</b></label>\n      <label style="grid-column:1/-1">Локація<input id="eventLocation" placeholder="Напр. ВДНГ · павільйон 3 / ауд. 230 / студія"></label>`;\n    if(save?.parentElement) save.parentElement.before(wrap); else form.appendChild(wrap);\n  }\n  bindTimeUndeterminedControls(form,"#eventTimeUndetermined","#eventStartTime","#eventEndTime");\n\n  if(save && !document.querySelector("#saveEventNotify")){\n    const notifyBtn=document.createElement("button");\n    notifyBtn.type="button";\n    notifyBtn.id="saveEventNotify";\n    notifyBtn.className="ghost";\n    notifyBtn.textContent="Зберегти та повідомити";\n    save.insertAdjacentElement("afterend",notifyBtn);\n    notifyBtn.onclick=async e=>{\n      e.preventDefault();\n      await createEventFromForm(true,notifyBtn);\n    };\n  }\n}\n\nfunction ensureNewProjectLogoField(){\n  const form=document.querySelector("#projectForm");\n  if(!form || form.querySelector("#projectLogoFile")) return;\n  const saveBtn=form.querySelector("#saveProject");\n  const wrap=document.createElement("label");\n  wrap.className="full";\n  wrap.style.display="grid";\n  wrap.style.gap="6px";\n  wrap.innerHTML=`<span>Логотип проєкту</span>\n    <input id="projectLogoFile" type="file" accept="image/*">\n    <small class="muted">PNG, JPG або WEBP. Зображення автоматично стискається.</small>`;\n  if(saveBtn?.parentElement) saveBtn.parentElement.before(wrap);\n  else form.appendChild(wrap);\n}\n\n// v5.0: bulk project dates and work-block planning.\nconst newProjectPlannedDates=new Set();\nconst newProjectWorkBlocks=new Map(); // date -> {type,startTime,endTime,timeUndetermined}\nconst newProjectDateRosters=new Map(); // date -> Set(studentId) for draft project staffing\nconst newProjectBaseTeam=new Set(); // reusable base team while creating a project\nconst ensureNewProjectRoster=date=>{ const d=String(date||""); if(!newProjectDateRosters.has(d)) newProjectDateRosters.set(d,new Set()); return newProjectDateRosters.get(d); };\nconst defaultNewProjectBlock=()=>({type:"",startTime:"",endTime:"",timeUndetermined:true});\nconst ensureNewProjectBlock=date=>{\n  const d=String(date||"");\n  if(!newProjectWorkBlocks.has(d)) newProjectWorkBlocks.set(d,defaultNewProjectBlock());\n  return newProjectWorkBlocks.get(d);\n};\n\n(function injectProjectPlannerStyles(){\n  if(document.getElementById("remsProjectPlannerStyles")) return;\n  const st=document.createElement("style");\n  st.id="remsProjectPlannerStyles";\n  st.textContent=`\n    .project-planned-date-wrap{display:grid;gap:10px;padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa}\n    .project-planned-date-row{display:grid;grid-template-columns:minmax(150px,1fr) auto;gap:8px;align-items:end}\n    .project-planned-range{display:grid;grid-template-columns:1fr 1fr auto;gap:8px;align-items:end}\n    .project-date-pills,.planner-date-grid{display:flex;flex-wrap:wrap;gap:7px}\n    .project-date-pill,.planner-date{border:1px solid #d1d5db;background:#fff;border-radius:999px;padding:7px 10px;cursor:pointer;font:inherit}\n    .project-date-pill{display:inline-flex;gap:7px;align-items:center}\n    .project-date-pill .x{font-weight:800;opacity:.55}\n    .new-project-work-toolbar{display:grid;grid-template-columns:auto minmax(180px,1fr) auto auto auto;gap:8px;align-items:end;padding:10px;border:1px solid #dbe3ee;border-radius:12px;background:#fff}\n    .new-project-work-list{display:grid;gap:8px}\n    .new-project-work-row{display:grid;grid-template-columns:auto 108px minmax(160px,1fr) 120px 120px auto;gap:8px;align-items:center;padding:9px;border:1px solid #e5e7eb;border-radius:11px;background:#fff}\n    .new-project-work-row .date-label{font-weight:800;white-space:nowrap}\n    .new-project-work-row input[type="text"],.new-project-work-row input[type="time"]{width:100%;box-sizing:border-box}\n    .new-project-availability{margin-top:8px;border:1px solid #e5e7eb;border-radius:12px;padding:10px;background:#f8fafc}\n    .new-project-availability-summary{display:flex;gap:8px;flex-wrap:wrap;align-items:center}\n    .availability-person-mini{display:inline-flex;gap:5px;align-items:center;padding:5px 8px;border:1px solid #e5e7eb;background:#fff;border-radius:999px;font-size:11px}\n    .planner-date.active{background:#111827;color:#fff;border-color:#111827}\n    .project-cal-day.planned:not(.has-event){outline:1px dashed #9ca3af;outline-offset:-3px}\n    .project-cal-planned{font-size:9px;line-height:1.1;color:#6b7280}\n    .planner-shell{display:grid;gap:18px}\n    .planner-card{border:1px solid #e5e7eb;border-radius:14px;padding:14px;background:#fff;display:grid;gap:12px}\n    .planner-card h3{margin:0}\n    .planner-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n    .planner-form-grid .full{grid-column:1/-1}\n    .planner-person-list{display:grid;gap:7px;max-height:360px;overflow:auto;padding-right:4px}\n    .planner-person-row{display:grid;grid-template-columns:minmax(160px,1fr) minmax(180px,1.35fr);gap:8px;align-items:center}\n    .planner-person-toggle{border:1px solid #d1d5db;background:#fff;border-radius:10px;padding:9px 10px;text-align:left;cursor:pointer;font:inherit;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap}\n    .planner-person-toggle.active{background:#111827;color:#fff;border-color:#111827}\n    .planner-role-input{width:100%;box-sizing:border-box}\n    .planner-role-input:disabled{opacity:.45}\n    .planner-toolbar{display:flex;gap:8px;flex-wrap:wrap;align-items:center}\n    .planner-block-list{display:grid;gap:8px}\n    .planner-block-row{display:grid;grid-template-columns:92px minmax(0,1fr) auto;gap:10px;align-items:center;border:1px solid #e5e7eb;border-radius:11px;padding:10px}\n    .planner-block-actions{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}\n    .event-person-role-list{display:grid;gap:8px;margin-top:10px}\n    .event-person-role-row{display:grid;grid-template-columns:minmax(180px,1fr) minmax(180px,1.2fr);gap:8px;align-items:center}\n    #projectDialog{width:min(1120px,96vw);max-height:92vh}#projectDialog form{padding:24px;max-height:88vh;overflow:auto}\n    .new-project-bulkbar{display:grid;grid-template-columns:auto minmax(170px,1.4fr) 115px 115px auto auto;gap:10px;align-items:end;padding:12px;border:1px solid #dbe3ee;border-radius:12px;background:#f8fafc;position:sticky;top:-24px;z-index:3}\n    .new-project-bulkbar label{margin:0!important}.new-project-bulkbar .bulk-check{display:flex!important;align-items:center;gap:6px;white-space:nowrap;padding-bottom:9px}.new-project-bulkbar .bulk-check input{width:auto}\n    .new-project-work-table{display:grid;gap:6px;min-width:760px}.new-project-work-head,.new-project-work-row-v10{display:grid;grid-template-columns:28px 90px minmax(180px,1.35fr) minmax(230px,1fr) 180px;gap:10px;align-items:center}.new-project-work-head{padding:4px 10px;color:#64748b;font-size:11px}.new-project-work-row-v10{padding:9px 10px;border:1px solid #e5e7eb;border-radius:11px;background:#fff}.new-project-work-row-v10>input[type=checkbox]{width:auto}.new-project-time-cell{display:grid;gap:5px}.row-unknown{display:flex!important;align-items:center;gap:5px;margin:0!important;font-size:10px!important}.row-unknown input{width:auto}.row-times{display:grid;grid-template-columns:1fr auto 1fr;gap:5px;align-items:center}.availability-count{border:1px solid #bbf7d0;background:#f0fdf4;border-radius:10px;padding:8px 10px;display:flex;justify-content:center;gap:8px;cursor:pointer;font:inherit;font-size:11px;font-weight:800}.availability-count.has-busy{border-color:#fed7aa;background:#fff7ed}.free-count{color:#166534}.busy-count{color:#b91c1c}.new-project-availability-dialog{width:min(900px,94vw)!important}.new-project-av-modal{padding:22px}.new-project-av-stats{display:flex;gap:10px;margin-top:14px;flex-wrap:wrap}.new-project-av-stats b{padding:8px 11px;border-radius:10px;background:#f8fafc;border:1px solid #e5e7eb}.new-project-table-help{margin:2px 0 8px}.new-project-roster-tools{display:flex;gap:8px;flex-wrap:wrap;align-items:end;margin:12px 0}.new-project-roster-tools label{margin:0;min-width:220px}.new-project-roster-tools select{width:100%}.new-project-roster-selected{display:flex;flex-wrap:wrap;gap:6px}.new-project-person-select{border:1px solid #d1d5db;background:#fff;border-radius:999px;padding:6px 9px;cursor:pointer;font:inherit;font-size:11px}.new-project-person-select.selected{background:#111827;color:#fff;border-color:#111827}.new-project-busy-select{border-color:#fecaca;background:#fff7f7}.new-project-roster-summary{border:1px solid #dbe3ee;border-radius:12px;background:#fff;padding:10px 12px;margin-top:12px}.new-project-roster-summary b{display:block;margin-bottom:6px}.new-project-copy-conflicts{font-size:10px;color:#b91c1c;margin-top:6px}\n\n    @media(max-width:760px){\n      .project-planned-range,.planner-form-grid,.planner-person-row,.event-person-role-row,.planner-block-row,.new-project-work-toolbar,.new-project-work-row{grid-template-columns:1fr}\n      .planner-block-actions{justify-content:flex-start}\n    }\n  `;\n  document.head.appendChild(st);\n})();\n\nfunction renderNewProjectDates(){\n  const box=document.querySelector("#newProjectDatesList");\n  if(!box) return;\n  const dates=[...newProjectPlannedDates].sort();\n  dates.forEach(d=>ensureNewProjectBlock(d));\n  box.innerHTML=dates.length?dates.map(d=>`<button type="button" class="project-date-pill" data-new-project-date="${d}"><span>${fmt(d)}</span><span class="x">×</span></button>`).join(""):'<span class="muted">Дати ще не вибрані.</span>';\n  box.querySelectorAll("[data-new-project-date]").forEach(b=>b.onclick=()=>{\n    const d=b.dataset.newProjectDate;\n    newProjectPlannedDates.delete(d);\n    newProjectWorkBlocks.delete(d);\n    newProjectDateRosters.delete(d);\n    renderNewProjectDates();\n  });\n  renderNewProjectWorkBlocks();\n}\n\nfunction newProjectBlockAvailability(date,block){\n  const rows=(db.students||[]).map(st=>({st,busy:studentBusyLabelsForSlot(st.id,date,block?.startTime||"",block?.endTime||"",block?.timeUndetermined!==false,"")}));\n  return {free:rows.filter(x=>!x.busy.length),busy:rows.filter(x=>x.busy.length)};\n}\n\nfunction openNewProjectAvailability(date){\n  const b=ensureNewProjectBlock(date), av=newProjectBlockAvailability(date,b);\n  const roster=ensureNewProjectRoster(date);\n  const dates=[...newProjectPlannedDates].sort();\n  const studentById=id=>(db.students||[]).find(st=>String(st.id)===String(id));\n  const currentSelected=()=>[...roster].map(studentById).filter(Boolean);\n  let dlg=document.querySelector('#newProjectAvailabilityDialog');\n  if(!dlg){\n    dlg=document.createElement('dialog'); dlg.id='newProjectAvailabilityDialog'; dlg.className='new-project-availability-dialog';\n    document.body.appendChild(dlg);\n  }\n  const render=()=>{\n    const selected=currentSelected();\n    const otherDates=dates.filter(d=>d!==date && ensureNewProjectRoster(d).size);\n    dlg.innerHTML=`<div class="new-project-av-modal">\n      <div class="project-section-head"><div><h2 style="margin:0">Доступність студентів</h2><div class="muted">${fmt(date)} · ${esc(b.type||'вид роботи ще не задано')} · ${esc(eventTimeText(b))}</div></div><button type="button" class="ghost" id="closeNewProjectAvailability">Закрити</button></div>\n      <div class="new-project-av-stats"><b>🟢 ${av.free.length} вільні</b><b>🔴 ${av.busy.length} зайняті</b><b>👥 ${selected.length} вибрано</b></div>\n      <div class="new-project-roster-tools">\n        <button type="button" class="ghost" id="useBaseTeam" ${newProjectBaseTeam.size?'':'disabled'}>Взяти постійну команду · ${newProjectBaseTeam.size}</button>\n        <button type="button" class="ghost" id="saveAsBaseTeam" ${selected.length?'':'disabled'}>Зробити цей склад постійною командою</button>\n        <label>Скопіювати склад з іншої дати<select id="copyRosterDate"><option value="">Оберіть дату…</option>${otherDates.map(d=>`<option value="${d}">${fmt(d)} · ${ensureNewProjectRoster(d).size} ос.</option>`).join('')}</select></label>\n        <button type="button" class="ghost" id="copyRosterAll" disabled>Додати всіх</button>\n        <button type="button" class="ghost" id="copyRosterFree" disabled>Додати тільки вільних</button>\n      </div>\n      <div class="new-project-roster-summary"><b>СКЛАД ЦІЄЇ ДАТИ · ${selected.length}</b><div class="new-project-roster-selected">${selected.map(st=>`<button type="button" class="new-project-person-select selected" data-selected-id="${esc(String(st.id))}" title="Натисніть, щоб прибрати">✓ ${esc(st.name)} · ${esc(studentGroupLabel(st)||'')}</button>`).join('')||'<span class="muted">Ще нікого не вибрано.</span>'}</div></div>\n      <div class="availability-grid-two">\n        <div class="availability-card"><div class="availability-title"><b>ВІЛЬНІ · ${av.free.length}</b><small>Натискайте на людей, яких треба залучити на цю дату</small></div><div class="availability-list">${av.free.map(x=>`<button type="button" class="new-project-person-select ${roster.has(String(x.st.id))||roster.has(x.st.id)?'selected':''}" data-free-id="${esc(String(x.st.id))}">${roster.has(String(x.st.id))||roster.has(x.st.id)?'✓ ':'+ '}${esc(x.st.name)} · ${esc(studentGroupLabel(x.st)||'')}</button>`).join('')||'<span class="muted">Немає</span>'}</div></div>\n        <div class="availability-card"><div class="availability-title"><b>ЗАЙНЯТІ · ${av.busy.length}</b><small>Можна додати попри конфлікт - система покаже, де людина зайнята</small></div><div class="availability-list">${av.busy.map(x=>`<button type="button" class="new-project-person-select new-project-busy-select ${roster.has(String(x.st.id))||roster.has(x.st.id)?'selected':''}" data-busy-id="${esc(String(x.st.id))}" title="${esc(x.busy.join(' · '))}">${roster.has(String(x.st.id))||roster.has(x.st.id)?'✓ ':'+ '}${esc(x.st.name)} · ${esc(x.busy.join(' · '))}</button>`).join('')||'<span class="muted">Немає</span>'}</div></div>\n      </div>\n      <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px"><button type="button" class="primary" id="doneNewProjectRoster">Готово · ${selected.length}</button></div>\n    </div>`;\n    const close=()=>dlg.close();\n    dlg.querySelector('#closeNewProjectAvailability').onclick=close;\n    dlg.querySelector('#doneNewProjectRoster').onclick=close;\n    const toggle=id=>{ const key=String(id); if(roster.has(key)) roster.delete(key); else roster.add(key); render(); renderNewProjectWorkBlocks(); };\n    dlg.querySelectorAll('[data-free-id]').forEach(el=>el.onclick=()=>toggle(el.dataset.freeId));\n    dlg.querySelectorAll('[data-busy-id]').forEach(el=>el.onclick=()=>toggle(el.dataset.busyId));\n    dlg.querySelectorAll('[data-selected-id]').forEach(el=>el.onclick=()=>toggle(el.dataset.selectedId));\n    dlg.querySelector('#saveAsBaseTeam').onclick=()=>{newProjectBaseTeam.clear(); [...roster].forEach(id=>newProjectBaseTeam.add(String(id))); render();};\n    dlg.querySelector('#useBaseTeam').onclick=()=>{[...newProjectBaseTeam].forEach(id=>roster.add(String(id))); render(); renderNewProjectWorkBlocks();};\n    const sel=dlg.querySelector('#copyRosterDate'), allBtn=dlg.querySelector('#copyRosterAll'), freeBtn=dlg.querySelector('#copyRosterFree');\n    sel.onchange=()=>{allBtn.disabled=!sel.value;freeBtn.disabled=!sel.value;};\n    allBtn.onclick=()=>{ const source=ensureNewProjectRoster(sel.value); [...source].forEach(id=>roster.add(String(id))); render(); renderNewProjectWorkBlocks(); };\n    freeBtn.onclick=()=>{\n      const source=ensureNewProjectRoster(sel.value);\n      [...source].forEach(id=>{ const st=studentById(id); if(st && !studentBusyLabelsForSlot(st.id,date,b?.startTime||'',b?.endTime||'',b?.timeUndetermined!==false,'').length) roster.add(String(id)); });\n      render(); renderNewProjectWorkBlocks();\n    };\n  };\n  render();\n  if(!dlg.open) dlg.showModal();\n}\n\nfunction renderNewProjectWorkBlocks(){\n  const holder=document.querySelector('#newProjectWorkBlocks');\n  if(!holder) return;\n  const dates=[...newProjectPlannedDates].sort();\n  if(!dates.length){holder.innerHTML='<div class="muted">Спочатку додайте хоча б одну дату.</div>';return;}\n  holder.innerHTML=`\n    <div class="new-project-bulkbar">\n      <label class="bulk-check"><input id="newProjectSelectAllDates" type="checkbox" checked> <span>Вибрати всі</span></label>\n      <label>Вид роботи<input id="newProjectBulkType" list="newProjectWorkKinds" placeholder="Наприклад: Репетиція"></label>\n      <label>Початок<input id="newProjectBulkStart" type="time" disabled></label>\n      <label>Завершення<input id="newProjectBulkEnd" type="time" disabled></label>\n      <label class="bulk-check"><input id="newProjectBulkUnknown" type="checkbox" checked> <span>Час не визначено</span></label>\n      <button type="button" class="primary" id="newProjectApplyBulkWork">Застосувати до вибраних</button>\n    </div>\n    <datalist id="newProjectWorkKinds"><option value="Репетиція"><option value="Монтаж"><option value="Зйомка"><option value="Концерт"><option value="Демонтаж"></datalist>\n    <div class="muted new-project-table-help">Відмітьте потрібні дати. Поля зверху змінять одразу всі вибрані рядки.</div>\n    <div class="new-project-work-table">\n      <div class="new-project-work-head"><span></span><b>Дата</b><b>Вид роботи</b><b>Час</b><b>Доступність</b></div>\n      ${dates.map(d=>{const b=ensureNewProjectBlock(d),av=newProjectBlockAvailability(d,b);return `<div class="new-project-work-row-v10" data-work-date="${d}">\n        <input type="checkbox" class="new-project-work-pick" data-date="${d}" checked>\n        <b class="date-label">${fmt(d)}</b>\n        <input type="text" class="new-project-work-type" data-date="${d}" list="newProjectWorkKinds" value="${esc(b.type||'')}" placeholder="Вид роботи">\n        <div class="new-project-time-cell"><label class="row-unknown"><input type="checkbox" class="new-project-work-unknown" data-date="${d}" ${b.timeUndetermined!==false?'checked':''}> не визначено</label><div class="row-times" ${b.timeUndetermined!==false?'hidden':''}><input type="time" class="new-project-work-start" data-date="${d}" value="${esc(b.startTime||'')}"><span>-</span><input type="time" class="new-project-work-end" data-date="${d}" value="${esc(b.endTime||'')}"></div></div>\n        <button type="button" class="new-project-show-availability availability-count ${av.busy.length?'has-busy':''}" data-date="${d}"><span class="free-count">${av.free.length} вільні</span><span class="busy-count">${av.busy.length} зайняті</span><span>👥 ${ensureNewProjectRoster(d).size}</span></button>\n      </div>`}).join('')}\n    </div>`;\n  const all=holder.querySelector('#newProjectSelectAllDates');\n  all.onchange=()=>holder.querySelectorAll('.new-project-work-pick').forEach(x=>x.checked=all.checked);\n  holder.querySelectorAll('.new-project-work-pick').forEach(x=>x.onchange=()=>{const picks=[...holder.querySelectorAll('.new-project-work-pick')];all.checked=picks.every(y=>y.checked);all.indeterminate=!all.checked&&picks.some(y=>y.checked)});\n  const bulkUnknown=holder.querySelector('#newProjectBulkUnknown');\n  bulkUnknown.onchange=()=>{const u=bulkUnknown.checked;holder.querySelector('#newProjectBulkStart').disabled=u;holder.querySelector('#newProjectBulkEnd').disabled=u;if(u){holder.querySelector('#newProjectBulkStart').value='';holder.querySelector('#newProjectBulkEnd').value='';}};\n  holder.querySelector('#newProjectApplyBulkWork').onclick=()=>{\n    const type=holder.querySelector('#newProjectBulkType').value.trim(),unknown=bulkUnknown.checked,start=unknown?'':holder.querySelector('#newProjectBulkStart').value,end=unknown?'':holder.querySelector('#newProjectBulkEnd').value;\n    if(!unknown&&start&&end&&timeMinutes(start)>=timeMinutes(end)){alert('Час завершення має бути пізніше за час початку.');return;}\n    const chosen=[...holder.querySelectorAll('.new-project-work-pick:checked')]; if(!chosen.length){alert('Виберіть хоча б одну дату.');return;}\n    chosen.forEach(ch=>{const b=ensureNewProjectBlock(ch.dataset.date);if(type)b.type=type;b.timeUndetermined=unknown;b.startTime=start;b.endTime=end;}); renderNewProjectWorkBlocks();\n  };\n  holder.querySelectorAll('.new-project-work-type').forEach(inp=>inp.oninput=()=>ensureNewProjectBlock(inp.dataset.date).type=inp.value);\n  holder.querySelectorAll('.new-project-work-start').forEach(inp=>inp.onchange=()=>ensureNewProjectBlock(inp.dataset.date).startTime=inp.value);\n  holder.querySelectorAll('.new-project-work-end').forEach(inp=>inp.onchange=()=>ensureNewProjectBlock(inp.dataset.date).endTime=inp.value);\n  holder.querySelectorAll('.new-project-work-unknown').forEach(ch=>ch.onchange=()=>{const b=ensureNewProjectBlock(ch.dataset.date);b.timeUndetermined=ch.checked;if(ch.checked){b.startTime='';b.endTime='';}renderNewProjectWorkBlocks();});\n  holder.querySelectorAll('.new-project-show-availability').forEach(btn=>btn.onclick=()=>openNewProjectAvailability(btn.dataset.date));\n}\n\nfunction ensureNewProjectPlanningFields(){\n  const form=document.querySelector("#projectForm");\n  if(!form || form.querySelector("#newProjectDatesPlanner")) return;\n  const saveBtn=form.querySelector("#saveProject");\n  const wrap=document.createElement("div");\n  wrap.id="newProjectDatesPlanner";\n  wrap.className="full project-planned-date-wrap";\n  wrap.innerHTML=`\n    <div><b>Дати проєкту</b><div class="muted">Можна одразу додати кілька окремих дат або цілий діапазон. Робочі блоки й людей розподілимо вже всередині проєкту.</div></div>\n    <div class="project-planned-date-row">\n      <label>Окрема дата<input id="newProjectSingleDate" type="date"></label>\n      <button type="button" class="ghost" id="addNewProjectSingleDate">+ Додати</button>\n    </div>\n    <div class="project-planned-range">\n      <label>Від<input id="newProjectRangeStart" type="date"></label>\n      <label>До<input id="newProjectRangeEnd" type="date"></label>\n      <button type="button" class="ghost" id="addNewProjectRange">+ Діапазон</button>\n    </div>\n    <div id="newProjectDatesList" class="project-date-pills"></div>\n    <div style="margin-top:4px"><b>Вид роботи та зайнятість студентів</b><div class="muted">Задайте роботу біля конкретної дати або виберіть кілька дат і застосуйте її одночасно. Тут же можна перевірити, хто вільний саме в цей час.</div></div>\n    <div id="newProjectWorkBlocks"></div>`;\n  if(saveBtn?.parentElement) saveBtn.parentElement.before(wrap); else form.appendChild(wrap);\n  wrap.querySelector("#addNewProjectSingleDate").onclick=()=>{\n    const v=wrap.querySelector("#newProjectSingleDate").value;\n    if(v){newProjectPlannedDates.add(v);ensureNewProjectBlock(v);wrap.querySelector("#newProjectSingleDate").value="";renderNewProjectDates();}\n  };\n  wrap.querySelector("#addNewProjectRange").onclick=()=>{\n    const a=wrap.querySelector("#newProjectRangeStart").value;\n    const b=wrap.querySelector("#newProjectRangeEnd").value;\n    if(!a||!b){alert("Вкажіть початок і кінець діапазону.");return;}\n    const [start,end]=a<=b?[a,b]:[b,a];\n    datesBetween(start,end).forEach(d=>{newProjectPlannedDates.add(d);ensureNewProjectBlock(d);});\n    renderNewProjectDates();\n  };\n  renderNewProjectDates();\n}\n\nconst sBy=id=>db.students.find(s=>String(s.id)===String(id));\nconst resolveStudentId=raw=>db.students.find(s=>String(s.id)===String(raw))?.id;\n\nconst REMS44_PUBLIC_BASE="https://rems-44.github.io/REMS-44/";\nconst REMS44_PUBLIC_PROFILES={"Вінцюк Андрій": "vintsiuk-andrii", "Власенко Даша": "vlasenko-dasha", "Гострик Катя": "hostryk-katya", "Давидова Світлана": "davydova-svitlana", "Жолуденко Поліна": "zholudenko-polina", "Касєєв Данило": "kasieiev-danylo", "Колишкін Андрій": "kolyshkin-andrii", "Кошелєва Мирослава": "koshelieva-myroslava", "Максімова Саміра": "maksimova-samira", "Міленіна Марія": "milenina-mariia", "Олейников Даніїл": "oleinykov-daniil", "Позняк Артур": "pozniak-artur", "Ташута Артем": "tashuta-artem", "Чиньонова Даша": "chynionova-dasha"};\nconst normalizePersonName=name=>String(name||"").toLowerCase().replace(/[’'`]/g,"").replace(/[^a-zа-яіїєґ0-9 ]/gi," ").replace(/\s+/g," ").trim();
const publicProfileIdFor=s=>{
  if(!s) return "";
  if(REMS44_PUBLIC_PROFILES[s?.name]) return REMS44_PUBLIC_PROFILES[s.name];
  const target=normalizePersonName(s?.name).split(" ").filter(Boolean);
  const surname=target[0]||"", first=target[1]||"";
  const entry=Object.entries(REMS44_PUBLIC_PROFILES).find(([name])=>{
    const n=normalizePersonName(name).split(" ").filter(Boolean);
    return n[0]===surname && (!first||!n[1]||n[1]===first);
  });
  if(entry?.[1]) return entry[1];
  return `control-${String(s.id).replace(/[^a-zA-Z0-9_-]/g,"-")}`;
};
const publicProfileUrlFor=s=>{
  const pid=publicProfileIdFor(s);
  return pid?`${REMS44_PUBLIC_BASE}student.html?id=${encodeURIComponent(pid)}`:"";
};

const REMS44_PUBLIC_SEED={"vintsiuk-andrii":{"id":"vintsiuk-andrii","name":"Вінцюк Андрій","role":"Режисер естради і шоу","photo":"images/Вінцюк Андрій.jpeg","bio":["Андрій Вінцюк - студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться режисурою концертів, музичних шоу, сценічних номерів і сучасних перформативних форматів."],"skills":["Режисура","Сценарна робота","Робота з виконавцями","Концертні програми"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[{"title":"Відеоробота","youtube":"https://www.youtube.com/watch?v=58ZgRSbX6tU"}],"gallery":[]},"vlasenko-dasha":{"id":"vlasenko-dasha","name":"Власенко Даша","role":"Режисерка естради і шоу","photo":"images/Власенко Даша.jpeg","bio":["Даша Власенко - студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Працює зі сценічними образами, музикою, пластикою, світлом і візуальним оформленням творчих проєктів."],"skills":["Режисура","Сценічний образ","Музична драматургія","Візуальна концепція"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"hostryk-katya":{"id":"hostryk-katya","name":"Гострик Катя","role":"Режисерка естради і шоу","photo":"images/Гострик Катя.jpeg","bio":["Катя Гострик - студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться створенням сценічних номерів, перформансів, концертних програм і культурно-мистецьких подій."],"skills":["Режисура","Перформанс","Сценаристика","Організація подій"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"davydova-svitlana":{"id":"davydova-svitlana","name":"Давидова Світлана","role":"Режисерка естради і шоу","photo":"images/Давидова Світлана.jpeg","bio":["Світлана Давидова - студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","У своїх роботах досліджує взаємодію виконавця, музики, сценічного простору та емоційного контакту з глядачем."],"skills":["Робота з виконавцями","Режисура номера","Сценічна композиція","Музичне шоу"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"zholudenko-polina":{"id":"zholudenko-polina","name":"Жолуденко Поліна","role":"Режисерка естради і шоу","photo":"images/Жолуденко Поліна.jpeg","bio":["Поліна Жолуденко - студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться образною режисурою, сучасними музичними форматами, сценічною пластикою та візуальною драматургією."],"skills":["Образна режисура","Сценічна пластика","Музичні формати","Візуальна драматургія"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"kasieiev-danylo":{"id":"kasieiev-danylo","name":"Касєєв Данило","role":"Режисер естради і шоу","photo":"images/Касєєв Данило.jpeg","bio":["Данило Касєєв - студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Працює з концертними постановками, сценічною дією, музичним матеріалом і сучасними видовищними форматами."],"skills":["Концертна режисура","Сценаристика","Робота з музичним матеріалом","Постановка номерів"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"kolyshkin-andrii":{"id":"kolyshkin-andrii","name":"Колишкін Андрій","role":"Режисер естради і шоу","photo":"images/Колишкін Андрій.jpeg","bio":["Андрій Колишкін - студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться режисурою концертів, сценічних номерів, телевізійних форматів і великих культурно-мистецьких подій."],"skills":["Концертна режисура","Телеверсія шоу","Сценічна композиція","Організація подій"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"koshelieva-myroslava":{"id":"koshelieva-myroslava","name":"Кошелєва Мирослава","role":"Режисерка естради і шоу","photo":"images/Кошелєва Мирослава.jpeg","bio":["Мирослава Кошелєва - студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","У центрі її творчих інтересів - атмосфера події, робота з виконавцем, музикою, світлом і сценічним простором."],"skills":["Робота з виконавцями","Сценічна атмосфера","Світлове рішення","Режисура подій"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"maksimova-samira":{"id":"maksimova-samira","name":"Максімова Саміра","role":"Режисерка естради і шоу","photo":"images/Максімова Саміра.jpeg","bio":["Саміра Максімова - студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться сценічною драматургією, сучасним перформансом, роботою з музикою та візуальними технологіями."],"skills":["Сценічна драматургія","Перформанс","Музичні проєкти","Візуальна концепція"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"milenina-mariia":{"id":"milenina-mariia","name":"Міленіна Марія","role":"Режисерка естради і шоу","photo":"images/Міленіна Марія.jpeg","bio":["Марія Міленіна - студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Працює з музичними номерами, сценічною композицією, образністю та емоційною побудовою видовища."],"skills":["Музичний номер","Композиція","Образне рішення","Робота з артистами"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"oleinykov-daniil":{"id":"oleinykov-daniil","name":"Олейников Даніїл","role":"Режисер естради і шоу","photo":"images/Олейников Даніїл.jpeg","bio":["Даніїл Олейников - студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться концертними постановками, сучасними шоу, сценічними технологіями та роботою з виконавцями."],"skills":["Режисура шоу","Сценічні технології","Концертна постановка","Робота з артистами"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"pozniak-artur":{"id":"pozniak-artur","name":"Позняк Артур","role":"Режисер естради і шоу","photo":"images/Позняк Артур.jpeg","bio":["Артур Позняк - студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Працює з музичними шоу, сценічними номерами, сценарною структурою та сучасними форматами видовищ."],"skills":["Музичне шоу","Сценарна структура","Постановка номерів","Режисура подій"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"tashuta-artem":{"id":"tashuta-artem","name":"Ташута Артем","role":"Режисер естради і шоу","photo":"images/Ташута Артем.jpeg","bio":["Артем Ташута - студент спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","Цікавиться постановкою концертних програм, роботою з музикою, світлом, відео та сценічним простором."],"skills":["Концертна програма","Світло","Відеоконтент","Сценічний простір"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]},"chynionova-dasha":{"id":"chynionova-dasha","name":"Чиньонова Даша","role":"Режисерка естради і шоу","photo":"images/Чиньонова Даша.jpeg","bio":["Даша Чиньонова - студентка спеціальності «Режисура естради і шоу» Київського національного університету культури і мистецтв.","У своїх роботах досліджує сценічний образ, музичну драматургію, атмосферу та сучасні візуальні рішення."],"skills":["Сценічний образ","Музична драматургія","Атмосфера події","Візуальні рішення"],"achievements":[],"socials":{"instagram":"","tiktok":"","youtube":"","telegram":"","facebook":"","email":""},"videos":[],"gallery":[]}};
const uniquePublicList=items=>[...new Set((Array.isArray(items)?items:[]).map(x=>String(x||"").trim()).filter(Boolean))];
const socialUrl=(kind,value)=>{
  const v=String(value||"").trim(); if(!v) return "";
  if(/^https?:\/\//i.test(v)||/^mailto:/i.test(v)) return v;
  const h=v.replace(/^@/,"");
  if(kind==="instagram") return `https://instagram.com/${h}`;
  if(kind==="telegram") return `https://t.me/${h}`;
  if(kind==="tiktok") return `https://tiktok.com/@${h}`;
  if(kind==="email") return v.replace(/^mailto:/i,"");
  return v;
};
const autoPublicProfessionalData=s=>{
  const rp=studentProfessionalProfile(s);
  const q=rp.questionnaire||{};
  return {
    bio:String(rp.summary||"").trim()?[String(rp.summary||"").trim()]:[],
    roles:uniquePublicList(rp.roles),
    skills:uniquePublicList(rp.skills),
    programs:uniquePublicList(rp.programs),
    structuredExperience:(rp.structuredExperience||[]).filter(x=>x?.public!==false).map(x=>({
      project:String(x?.project||"").trim(), role:String(x?.role||"").trim(), period:String(x?.period||"").trim(),
      category:String(x?.category||"").trim()
    })).filter(x=>x.project),
    links:[
      ...(rp.links||[]).filter(x=>x?.public!==false&&String(x?.url||"").trim()).map(x=>({label:String(x.label||"").trim(),url:String(x.url||"").trim()})),
      ...[["Резюме",s?.resumeUrl],["Портфоліо",s?.portfolioUrl],["Відео / роботи",s?.worksUrl]]
        .filter(([,url])=>String(url||"").trim()).map(([label,url])=>({label,url:String(url).trim()}))
    ].filter((x,i,a)=>a.findIndex(y=>String(y.url)===String(x.url))===i),
    projects:studentProjects(s?.id).map(p=>({
      id:String(p?.id||""),name:String(p?.name||"Проєкт").trim(),
      role:String((db.assignments||[]).find(a=>String(a.studentId)===String(s?.id)&&String(a.projectId)===String(p?.id))?.role||"").trim()
    })).filter(x=>x.name),
    customSections:(rp.customSections||[]).filter(x=>x?.public!==false&&String(x?.title||"").trim()).map(x=>({
      title:String(x.title||"").trim(),
      items:(Array.isArray(x.items)?x.items:[]).map(v=>String(v||"").trim()).filter(Boolean),
      text:String(x.text||"").trim()
    })),
    contacts:{
      instagram:String(s?.instagram||q.instagram||"").trim(), telegram:String(s?.telegram||q.telegram||"").trim(),
      email:String(s?.email||q.email||"").trim()
    },
    facts:{
      birthDate:String(s?.birthDate||q.birthDate||"").trim(), height:String(rp.casting?.height||"").trim(),
      clothingSize:String(rp.casting?.clothingSize||"").trim(), shoeSize:String(rp.casting?.shoeSize||"").trim(),
      playingAge:String(rp.casting?.playingAge||"").trim(), type:String(rp.casting?.type||"").trim(),
      hair:String(rp.casting?.hair||"").trim(), eyes:String(rp.casting?.eyes||"").trim(), special:String(rp.casting?.special||"").trim()
    }
  };
};
const publicProfileFor=s=>{
  const pid=publicProfileIdFor(s);
  if(!pid) return null;
  const existing=clone(s?.publicProfile||REMS44_PUBLIC_SEED[pid]||{
    id:pid,name:s?.name||"",role:"Режисер/ка естради і шоу",photo:"",bio:[],skills:[],achievements:[],
    socials:{instagram:"",tiktok:"",youtube:"",telegram:"",facebook:"",email:""},videos:[],gallery:[],published:false
  });
  const auto=autoPublicProfessionalData(s);
  const visibility={
    experience:existing?.visibility?.experience!==false,
    programs:existing?.visibility?.programs!==false,
    age:existing?.visibility?.age!==false,
    height:existing?.visibility?.height!==false,
    clothing:existing?.visibility?.clothing===true,
    shoe:existing?.visibility?.shoe===true,
    instagram:existing?.visibility?.instagram!==false,
    telegram:existing?.visibility?.telegram===true,
    email:existing?.visibility?.email===true
  };
  const autoProfessional=existing?.autoProfessional!==false;
  if(autoProfessional){
    if(auto.bio.length) existing.bio=auto.bio;
    existing.roles=auto.roles;
    existing.skills=uniquePublicList([...(auto.roles||[]),...(auto.skills||[])]);
    existing.programs=auto.programs;
    existing.structuredExperience=auto.structuredExperience;
    existing.customSections=auto.customSections;
    existing.links=auto.links;
    existing.publicFacts=auto.facts;
    existing.socials={...(existing.socials||{})};
    if(auto.contacts.instagram) existing.socials.instagram=socialUrl("instagram",auto.contacts.instagram);
    if(auto.contacts.telegram) existing.socials.telegram=socialUrl("telegram",auto.contacts.telegram);
    if(auto.contacts.email) existing.socials.email=auto.contacts.email;
  }
  return {...existing,id:pid,studentId:String(s?.id||""),group:String(s?.group||""),autoProfessional,visibility};
};
const sanitizePublicProfile=(s,profile)=>{
  const pid=publicProfileIdFor(s)||profile?.id;
  if(!pid) return null;
  const visibility={
    experience:profile?.visibility?.experience!==false, programs:profile?.visibility?.programs!==false,
    age:profile?.visibility?.age!==false, height:profile?.visibility?.height!==false,
    clothing:profile?.visibility?.clothing===true, shoe:profile?.visibility?.shoe===true,
    instagram:profile?.visibility?.instagram!==false, telegram:profile?.visibility?.telegram===true,
    email:profile?.visibility?.email===true
  };
  const facts=profile?.publicFacts||{};
  return {
    id:pid,studentId:String(s?.id||profile?.studentId||""),group:String(s?.group||profile?.group||"").trim(),
    name:String(profile?.name||s?.name||"").trim(),role:String(profile?.role||"").trim(),photo:String(profile?.photo||"").trim(),published:profile?.published===true,
    autoProfessional:profile?.autoProfessional!==false,visibility,
    bio:Array.isArray(profile?.bio)?profile.bio.map(x=>String(x).trim()).filter(Boolean):[],
    roles:uniquePublicList(profile?.roles),skills:uniquePublicList(profile?.skills),programs:visibility.programs?uniquePublicList(profile?.programs):[],
    structuredExperience:visibility.experience?(Array.isArray(profile?.structuredExperience)?profile.structuredExperience.map(x=>({project:String(x?.project||"").trim(),role:String(x?.role||"").trim(),period:String(x?.period||"").trim(),category:String(x?.category||"").trim()})).filter(x=>x.project):[]):[],
    links:Array.isArray(profile?.links)?profile.links.map(x=>({label:String(x?.label||"").trim(),url:String(x?.url||"").trim()})).filter(x=>x.url):[],
    projects:Array.isArray(profile?.projects)?profile.projects.map(x=>({id:String(x?.id||"").trim(),name:String(x?.name||"").trim(),role:String(x?.role||"").trim()})).filter(x=>x.name):[],
    customSections:Array.isArray(profile?.customSections)?profile.customSections.map(x=>({title:String(x?.title||"").trim(),items:(Array.isArray(x?.items)?x.items:[]).map(v=>String(v||"").trim()).filter(Boolean),text:String(x?.text||"").trim()})).filter(x=>x.title):[],
    achievements:Array.isArray(profile?.achievements)?profile.achievements.map(x=>String(x).trim()).filter(Boolean):[],
    publicFacts:{
      birthDate:visibility.age?String(facts.birthDate||"").trim():"",height:visibility.height?String(facts.height||"").trim():"",
      clothingSize:visibility.clothing?String(facts.clothingSize||"").trim():"",shoeSize:visibility.shoe?String(facts.shoeSize||"").trim():"",
      playingAge:String(facts.playingAge||"").trim(),type:String(facts.type||"").trim(),hair:String(facts.hair||"").trim(),eyes:String(facts.eyes||"").trim(),special:String(facts.special||"").trim()
    },
    socials:{
      instagram:visibility.instagram?socialUrl("instagram",profile?.socials?.instagram):"",tiktok:String(profile?.socials?.tiktok||"").trim(),
      youtube:String(profile?.socials?.youtube||"").trim(),telegram:visibility.telegram?socialUrl("telegram",profile?.socials?.telegram):"",
      facebook:String(profile?.socials?.facebook||"").trim(),email:visibility.email?String(profile?.socials?.email||"").trim():""
    },
    videos:Array.isArray(profile?.videos)?profile.videos.map(v=>({title:String(v?.title||"Відеоробота").trim(),youtube:String(v?.youtube||"").trim()})).filter(v=>v.youtube):[],
    gallery:Array.isArray(profile?.gallery)?profile.gallery.map(x=>String(x).trim()).filter(Boolean):[]
  };
};
const publishOnePublicProfile=async s=>{
  if(!cloudReady||!cloudDb||!currentUser) throw new Error("Хмара не готова");
  const profile=publicProfileFor(s);
  const clean=profile&&sanitizePublicProfile(s,profile);
  if(!clean) return null;
  await setDoc(doc(cloudDb,"rems_public_profiles",clean.id),{
    ...clean,
    updatedAt:new Date().toISOString()
  },{merge:false});
  return clean;
};

const publishPublicProfiles=async()=>{
  if(!cloudReady||!cloudDb||!currentUser) throw new Error("Хмара не готова");
  const published={};
  for(const s of db.students){
    const clean=await publishOnePublicProfile(s);
    if(clean) published[clean.id]=clean;
  }
  return published;
};

const eventsFor=id=>db.events.filter(e=>String(e.projectId)===String(id)).sort((a,b)=>a.date.localeCompare(b.date)||(a.startTime||"").localeCompare(b.startTime||""));

// Проєкти: актуальні зверху, потім найближчі майбутні, без дат і завершені.
const projectCreatedAtValue=p=>{
  const direct=Date.parse(String(p?.createdAt||""));
  if(Number.isFinite(direct)) return direct;
  const m=String(p?.id||"").match(/^p_(\d{10,})$/);
  return m?Number(m[1]):0;
};
const projectTimelineMeta=(p,today=localIsoDate())=>{
  const dates=[...new Set([
    ...((Array.isArray(p?.plannedDates)?p.plannedDates:[]).map(String)),
    ...eventsFor(p?.id).map(e=>String(e.date||""))
  ].filter(d=>/^\d{4}-\d{2}-\d{2}$/.test(d)))].sort();
  const first=dates[0]||"";
  const last=dates[dates.length-1]||"";
  const next=dates.find(d=>d>=today)||"";
  let rank=2; // без дат
  if(dates.length){
    if(first<=today && last>=today) rank=0; // триває зараз
    else if(first>today) rank=1;            // майбутній
    else rank=3;                            // завершений
  }
  return {rank,first,last,next,createdAt:projectCreatedAtValue(p)};
};
const sortedProjectsByRelevance=(today=localIsoDate())=>[...db.projects].sort((a,b)=>{
  const A=projectTimelineMeta(a,today), B=projectTimelineMeta(b,today);
  if(A.rank!==B.rank) return A.rank-B.rank;

  // Актуальні: спершу той, у кого найближча наступна робоча дата.
  if(A.rank===0){
    const byNext=String(A.next||"9999-12-31").localeCompare(String(B.next||"9999-12-31"));
    if(byNext) return byNext;
    if(A.createdAt!==B.createdAt) return B.createdAt-A.createdAt;
  }

  // Майбутні: найближчий старт зверху.
  if(A.rank===1){
    const byStart=A.first.localeCompare(B.first);
    if(byStart) return byStart;
    if(A.createdAt!==B.createdAt) return B.createdAt-A.createdAt;
  }

  // Без дат: щойно створені зверху.
  if(A.rank===2 && A.createdAt!==B.createdAt) return B.createdAt-A.createdAt;

  // Завершені: найсвіжіше завершені зверху, давніші нижче.
  if(A.rank===3){
    const byEnd=B.last.localeCompare(A.last);
    if(byEnd) return byEnd;
  }

  if(A.createdAt!==B.createdAt) return B.createdAt-A.createdAt;
  return String(a?.name||"").localeCompare(String(b?.name||""),"uk");
});
const assForStudent=id=>db.assignments.filter(a=>String(a.studentId)===String(id));
const studentProjects=id=>{
  const ids=new Set(assForStudent(id).map(a=>a.projectId));
  db.events.forEach(e=>{
    if(studentsForEvent(e).some(s=>String(s.id)===String(id))) ids.add(e.projectId);
  });
  return [...ids].map(pBy).filter(Boolean);
};
const projectStudents=id=>db.assignments.filter(a=>String(a.projectId)===String(id)).map(a=>sBy(a.studentId)).filter(Boolean);

// v7.0 - у проєкту є загальна команда, але кожна дата / робочий блок
// має власний підсклад. Видалення людини з проєкту прибирає її з усіх дат,
// а додавання до проєкту НЕ додає її автоматично в уже створені дати.
function normalizeProjectEventRosters(projectId){
  // v39 migration: if an old project has block-level rosters but no date roster,
  // convert the union for that date once into project.dateRosters. Afterwards dateRosters are canonical.
  const pid=String(projectId), p=pBy(pid);
  if(!p) return false;
  let changed=false;
  const byDate=new Map();
  (db.events||[]).forEach(e=>{
    if(String(e.projectId)!==pid || !e.date || !Array.isArray(e.studentIds)) return;
    const set=byDate.get(String(e.date))||new Set();
    e.studentIds.forEach(id=>set.add(String(resolveStudentId(id)??id)));
    byDate.set(String(e.date),set);
  });
  byDate.forEach((ids,date)=>{
    if(!hasProjectDateRoster(p,date)){
      ids.forEach(sid=>ensureStudentInProjectTeam(projectId,sid));
      setProjectDateRosterIds(p,date,[...ids]);
      changed=true;
    }
  });
  return changed;
}

function normalizeAllProjectEventRosters(){
  let changed=false;
  (db.projects||[]).forEach(p=>{ if(normalizeProjectEventRosters(p.id)) changed=true; });
  return changed;
}

const defaultRosterTemplateNames=()=>["Монтаж","Репетиція","Концерт","Демонтаж"];
function projectRosterTemplates(projectOrId){
  const p=typeof projectOrId==='object'?projectOrId:pBy(projectOrId);
  if(!p) return [];
  if(!Array.isArray(p.rosterTemplates)) p.rosterTemplates=[];
  return p.rosterTemplates;
}
function rosterTemplateById(projectId,templateId){
  return projectRosterTemplates(projectId).find(t=>String(t.id)===String(templateId));
}
function rosterTemplatePayload(projectId,template){
  const allowed=new Set(projectStudents(projectId).map(s=>String(s.id)));
  const ids=(template?.studentIds||[]).filter(id=>allowed.has(String(id)));
  const active=new Set(ids.map(String));
  const roles={};
  Object.entries(template?.studentRoles||{}).forEach(([sid,role])=>{
    if(active.has(String(sid))&&String(role||'').trim()) roles[String(sid)]=String(role).trim();
  });
  return {studentIds:ids,studentRoles:roles};
}
async function applyRosterTemplateToDate(projectId,date,templateId){
  const template=rosterTemplateById(projectId,templateId);
  if(!template) return false;
  const targets=(db.events||[]).filter(e=>String(e.projectId)===String(projectId)&&String(e.date)===String(date));
  if(!targets.length) return false;
  const payload=rosterTemplatePayload(projectId,template);
  targets.forEach(e=>{e.studentIds=[...payload.studentIds];e.studentRoles={...payload.studentRoles};});
  return await save();
}
const countDays=id=>new Set(
  db.events.filter(e=>studentsForEvent(e).some(s=>String(s.id)===String(id))).map(e=>e.date)
).size;
const eventAssignments=()=>{
  const map={};
  db.events.forEach(e=>{
    const p=pBy(e.projectId);
    if(!p) return;
    studentsForEvent(e).forEach(st=>{
      const k=`${st.id}|${e.date}`;
      (map[k] ||= []).push(p);
    });
  });
  return map;
};


// ===== Розклад занять · REMS Control v5.8 =====
const ACADEMIC_COLOR="#2563EB";
// v40.8: індивідуальні Фішера є віртуальним вбудованим шаром розкладу.
// Вони не залежать від порядку завантаження Firebase і не можуть зникнути після refresh.
const fisherIndividualHiddenIds=()=>new Set((db.settings?.fisherIndividualHiddenIds||[]).map(String));
const fisherRememberHiddenIds=ids=>{
  db.settings=db.settings||{};
  const set=fisherIndividualHiddenIds();
  (ids||[]).map(String).filter(Boolean).forEach(id=>set.add(id));
  db.settings.fisherIndividualHiddenIds=[...set];
};
const fisherForgetHiddenIds=ids=>{
  db.settings=db.settings||{};
  const remove=new Set((ids||[]).map(String));
  db.settings.fisherIndividualHiddenIds=[...fisherIndividualHiddenIds()].filter(id=>!remove.has(id));
};
const academicLessons=()=>{
  const base=Array.isArray(db.lessons)?db.lessons:[];
  const bundled=Array.isArray(window.__REMS_FISHER_INDIVIDUAL_LESSONS)?window.__REMS_FISHER_INDIVIDUAL_LESSONS:[];
  // Старі фізичні копії вбудованого розкладу не читаємо. Ручні правки з тим самим id
  // мають source=manual і перекривають відповідний вбудований запис.
  const cleanBase=base.filter(l=>String(l?.source||"")!=="fisher-individual-dramaturgy-2026");
  const overridden=new Set(cleanBase.map(l=>String(l?.id||"")).filter(Boolean));
  const hidden=fisherIndividualHiddenIds();
  const visibleBundled=bundled.filter(l=>!hidden.has(String(l.id))&&!overridden.has(String(l.id)));
  return [...cleanBase,...visibleBundled];
};
const academicLessonId=()=>`lesson-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;
const academicWeekdays=[
  {value:"1",label:"Понеділок",short:"Пн"},
  {value:"2",label:"Вівторок",short:"Вт"},
  {value:"3",label:"Середа",short:"Ср"},
  {value:"4",label:"Четвер",short:"Чт"},
  {value:"5",label:"П’ятниця",short:"Пт"},
  {value:"6",label:"Субота",short:"Сб"}
];
const academicLessonTypes=[
  "Лекція",
  "Практичне заняття",
  "Семінар",
  "Лабораторне заняття",
  "Індивідуальне заняття",
  "Консультація",
  "Контрольна робота",
  "Залік",
  "Іспит",
  "Інше"
];
const academicDefaultRooms=["230","324","324а"];
const academicRoomValues=()=>[...new Set([
  ...academicDefaultRooms,
  ...academicLessons().map(l=>String(l.room||"").trim()).filter(Boolean)
])].sort((a,b)=>a.localeCompare(b,"uk",{numeric:true,sensitivity:"base"}));
const academicRoomOptionsHtml=current=>{
  const cur=String(current||"").trim();
  const rooms=academicRoomValues();
  const has=rooms.includes(cur);
  return [`<option value="">Оберіть аудиторію</option>`,
    ...rooms.map(r=>`<option value="${esc(r)}" ${r===cur?"selected":""}>${esc(r)}</option>`),
    `<option value="__other__" ${cur&&!has?"selected":""}>Інша аудиторія…</option>`
  ].join("");
};
const mondayIso=date=>{
  const d=new Date(String(date)+"T12:00:00");
  const day=(d.getDay()+6)%7;
  d.setDate(d.getDate()-day);
  return localIsoDate(d);
};
const academicLessonOccursOnDate=(lesson,date)=>{
  if(!lesson||!date) return false;
  const excluded=new Set((Array.isArray(lesson.excludedDates)?lesson.excludedDates:[]).map(String));
  if(excluded.has(String(date))) return false;
  if(lesson.mode==="once") return String(lesson.date||"")===String(date);
  const start=String(lesson.startDate||"2026-09-01");
  const end=String(lesson.endDate||"2027-05-31");
  if(date<start||date>end) return false;
  const weekday=String(new Date(date+"T12:00:00").getDay());
  if(weekday!==String(lesson.weekday||"")) return false;
  const pattern=String(lesson.weekPattern||"all");
  if(pattern==="all") return true;
  const base=new Date(mondayIso(start)+"T12:00:00");
  const cur=new Date(mondayIso(date)+"T12:00:00");
  const weekIndex=Math.floor((cur-base)/(7*86400000))+1;
  return pattern==="odd" ? weekIndex%2===1 : weekIndex%2===0;
};
const academicLessonDates=lesson=>{
  if(!lesson) return [];
  if(lesson.mode==="once") return lesson.date?[String(lesson.date)]:[];
  const start=String(lesson.startDate||"2026-09-01");
  const end=String(lesson.endDate||"2027-05-31");
  return datesBetween(start,end).filter(d=>academicLessonOccursOnDate(lesson,d));
};
const lessonStudents=lesson=>{
  const ids=Array.isArray(lesson?.studentIds)?lesson.studentIds.map(String).filter(Boolean):[];
  const scope=String(lesson?.scope||"").trim();
  if(scope==="selected" || ids.length){
    const set=new Set(ids);
    return (db.students||[]).filter(st=>set.has(String(st.id)));
  }
  const group=String(lesson?.group||"").trim();
  return (db.students||[]).filter(st=>!group||String(st.group||"")===group);
};
const lessonAppliesToStudent=(lesson,studentId)=>lessonStudents(lesson).some(st=>String(st.id)===String(studentId));
const lessonActivity=(lesson,date)=>({
  source:"lesson",
  lessonId:String(lesson.id||""),
  date:String(date||""),
  startTime:String(lesson.startTime||""),
  endTime:String(lesson.endTime||""),
  title:String(lesson.subject||"Заняття"),
  type:"Заняття",
  lessonType:String(lesson.lessonType||"Заняття"),
  location:String(lesson.room||""),
  teacher:String(lesson.teacher||""),
  group:String(lesson.group||""),
  color:ACADEMIC_COLOR,
  raw:lesson
});
const projectActivity=e=>{
  const p=pBy(e?.projectId);
  return {
    ...e,
    source:"project",
    title:String(p?.name||"Проєкт"),
    color:String(p?.color||"#6b7280"),
    raw:e
  };
};
const lessonActivitiesOnDate=date=>academicLessons()
  .filter(l=>academicLessonOccursOnDate(l,date))
  .map(l=>lessonActivity(l,date));
const studentLessonActivitiesOnDate=(studentId,date)=>academicLessons()
  .filter(l=>academicLessonOccursOnDate(l,date)&&lessonAppliesToStudent(l,studentId))
  .map(l=>lessonActivity(l,date));
const studentProjectActivitiesOnDate=(studentId,date)=>(db.events||[])
  .filter(e=>e.date===date&&studentsForEvent(e).some(st=>String(st.id)===String(studentId)))
  .map(projectActivity);
const studentActivitiesOnDate=(studentId,date)=>[
  ...studentProjectActivitiesOnDate(studentId,date),
  ...studentLessonActivitiesOnDate(studentId,date)
].sort((a,b)=>String(a.startTime||"").localeCompare(String(b.startTime||"")));
const activityTitle=a=>String(a?.source==="lesson"?a.title:(pBy(a?.projectId)?.name||a?.title||"Проєкт"));
const activityColor=a=>String(a?.source==="lesson"?ACADEMIC_COLOR:(pBy(a?.projectId)?.color||a?.color||"#6b7280"));
const activityMeta=a=>{
  if(a?.source==="lesson"){
    return [a.lessonType||"Заняття",eventTimeText(a),a.location?`ауд. ${a.location}`:"",a.teacher].filter(Boolean).join(" · ");
  }
  return [a?.type||"Подія",eventTimeText(a),a?.location].filter(Boolean).join(" · ");
};
const combinedAssignments=()=>{
  const map={};
  (db.events||[]).forEach(e=>{
    const act=projectActivity(e);
    studentsForEvent(e).forEach(st=>{
      const k=`${st.id}|${e.date}`;
      (map[k] ||= []).push(act);
    });
  });
  academicLessons().forEach(l=>{
    const students=lessonStudents(l);
    academicLessonDates(l).forEach(date=>{
      const act=lessonActivity(l,date);
      students.forEach(st=>{
        const k=`${st.id}|${date}`;
        (map[k] ||= []).push(act);
      });
    });
  });
  return map;
};

const timeMinutes=value=>{
  const m=String(value||"").match(/^(\d{1,2}):(\d{2})$/);
  if(!m) return null;
  const h=+m[1],min=+m[2];
  if(h<0||h>23||min<0||min>59) return null;
  return h*60+min;
};
const eventsOverlap=(a,b)=>{
  if(!a||!b||String(a.date)!==String(b.date)) return false;
  const as=timeMinutes(a.startTime),ae=timeMinutes(a.endTime),bs=timeMinutes(b.startTime),be=timeMinutes(b.endTime);
  // If exact time is missing, keep the old safe rule: same day = potential conflict.
  if(as===null||ae===null||bs===null||be===null) return true;
  return Math.max(as,bs)<Math.min(ae,be);
};
const studentEventsOnDate=(studentId,date)=>db.events.filter(e=>
  e.date===date && studentsForEvent(e).some(st=>String(st.id)===String(studentId))
);
const conflictGroupsForStudent=studentId=>{
  const byDate={};
  (db.events||[]).forEach(e=>{
    if(!e?.date || !studentsForEvent(e).some(st=>String(st.id)===String(studentId))) return;
    (byDate[e.date] ||= []).push(projectActivity(e));
  });
  academicLessons().filter(l=>lessonAppliesToStudent(l,studentId)).forEach(l=>{
    academicLessonDates(l).forEach(date=>(byDate[date] ||= []).push(lessonActivity(l,date)));
  });
  return Object.entries(byDate).sort(([a],[b])=>a.localeCompare(b)).flatMap(([date,events])=>{
    const pairs=[];
    for(let i=0;i<events.length;i++) for(let j=i+1;j<events.length;j++){
      if(eventsOverlap(events[i],events[j])) pairs.push([events[i],events[j]]);
    }
    return pairs.length?[{studentId,date,events,pairs}]:[];
  });
};
const studentDateHasConflict=(studentId,date)=>conflictGroupsForStudent(studentId).some(g=>g.date===date);
const allConflictGroups=()=>db.students.flatMap(st=>conflictGroupsForStudent(st.id).map(g=>({...g,student:st})));
const countConflicts=()=>allConflictGroups().length;
const exactOverlapText=(a,b)=>{
  const as=timeMinutes(a.startTime),ae=timeMinutes(a.endTime),bs=timeMinutes(b.startTime),be=timeMinutes(b.endTime);
  if(as===null||ae===null||bs===null||be===null) return "Потенційний конфлікт · час указаний не для всіх подій";
  const start=Math.max(as,bs),end=Math.min(ae,be);
  const f=n=>`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`;
  return start<end?`Перетин ${f(start)}–${f(end)}`:"";
};
let conflictCalendarFocus=null;
function ensureConflictDialog(){
  let d=document.querySelector("#conflictDialog");
  if(d) return d;
  d=document.createElement("dialog");
  d.id="conflictDialog";
  d.className="student-dialog conflict-dialog";
  d.innerHTML='<div id="conflictDialogBody"></div>';
  document.body.appendChild(d);
  return d;
}
function openConflictInCalendar(studentId,date){
  conflictCalendarFocus={studentId:String(studentId),date:String(date)};
  document.querySelector("#studentDialog")?.close();
  document.querySelector("#conflictDialog")?.close();
  switchView("schedule","Участь у проєктах");
  setTimeout(()=>openScheduleMatrix(),0);
}
function showStudentConflicts(studentId){
  const st=sBy(studentId); if(!st) return;
  const groups=conflictGroupsForStudent(studentId);
  document.querySelector("#studentDialog")?.close();
  const d=ensureConflictDialog();
  d.querySelector("#conflictDialogBody").innerHTML=`<div class="conflict-panel">
    <div class="project-section-head"><div><h2 style="margin:0">Конфлікти · ${esc(st.name)}</h2><div class="muted">${esc(studentGroupLabel(st))} · ${groups.length?`${groups.length} конфліктних дат`:"Конфліктів немає"}</div></div><button class="ghost" id="closeConflictDialog">Закрити</button></div>
    <div class="conflict-list">${groups.map(g=>`<article class="conflict-card">
      <div class="conflict-card-head"><div><b>${fullfmt(g.date)}</b><div class="muted">${g.events.length} подій цього дня</div></div><button class="ghost conflict-open-calendar" data-date="${g.date}">Показати в календарі</button></div>
      <div class="conflict-events">${g.events.map(e=>`<div class="conflict-event"><span class="dot" style="background:${activityColor(e)}"></span><div><b>${e.source==="lesson"?"🎓 ":""}${esc(activityTitle(e))}</b><div class="muted">${esc(activityMeta(e)||"Час не визначено")}</div></div></div>`).join("")}</div>
      <div class="conflict-overlaps">${g.pairs.map(([a,b])=>`<div>⚠ ${esc(activityTitle(a))} ↔ ${esc(activityTitle(b))} · <b>${esc(exactOverlapText(a,b))}</b></div>`).join("")}</div>
    </article>`).join("")||'<div class="notice ok">✓ У цього студента конфліктів немає.</div>'}</div>
  </div>`;
  d.querySelector("#closeConflictDialog").onclick=()=>d.close();
  d.querySelectorAll(".conflict-open-calendar").forEach(b=>b.onclick=()=>openConflictInCalendar(studentId,b.dataset.date));
  if(!d.open) d.showModal();
}
function showAllConflicts(){
  const groups=allConflictGroups();
  const byStudent=new Map();
  groups.forEach(g=>{const key=String(g.student.id);if(!byStudent.has(key))byStudent.set(key,{student:g.student,groups:[]});byStudent.get(key).groups.push(g);});
  const d=ensureConflictDialog();
  d.querySelector("#conflictDialogBody").innerHTML=`<div class="conflict-panel">
    <div class="project-section-head"><div><h2 style="margin:0">Усі конфлікти</h2><div class="muted">${groups.length} конфліктних дат · ${byStudent.size} студентів</div></div><button class="ghost" id="closeConflictDialog">Закрити</button></div>
    <div class="conflict-list">${[...byStudent.values()].map(row=>`<button type="button" class="conflict-student-row" data-id="${esc(String(row.student.id))}"><span><b>${esc(row.student.name)}</b><small>${esc(row.student.group||"")}</small></span><strong>${row.groups.length}</strong><em>Відкрити →</em></button>`).join("")||'<div class="notice ok">✓ Конфліктів у поточних призначеннях не знайдено.</div>'}</div>
  </div>`;
  d.querySelector("#closeConflictDialog").onclick=()=>d.close();
  d.querySelectorAll(".conflict-student-row").forEach(b=>b.onclick=()=>showStudentConflicts(b.dataset.id));
  if(!d.open) d.showModal();
}
function updateQuickAddForView(v){
  const btn=$("#quickAdd");
  if(!btn) return;
  btn.hidden=false;
  if(v==="students"){
    btn.textContent="+ Новий студент";
    btn.title="Додати студента";
  }else if(v==="projects"){
    btn.textContent="+ Новий проєкт";
    btn.title="Створити новий проєкт";
  }else if(v==="largeforms"){
    btn.hidden=true;
    btn.textContent="";
    btn.title="";
  }else if(v==="academic"){
    btn.textContent="+ Додати заняття";
    btn.title="Додати заняття до студентського розкладу";
  }else if(v==="industry"){
    btn.textContent="+ Нова зустріч";
    btn.title="Створити новий матеріал «Зустріч із індустрією»";
  }else{
    btn.hidden=true;
    btn.textContent="";
    btn.title="";
  }
}
function switchView(v,label){
  if(v==="calendar"){
    rememberCurrentView("schedule");
    currentProjectDetailId=null;
    $$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view==="schedule"));
    $("#pageTitle").textContent="Участь у проєктах";
    updateQuickAddForView("schedule");
    openScheduleMatrix();
    return;
  }
  rememberCurrentView(v);
  currentProjectDetailId=null;
  $$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));
  $("#pageTitle").textContent=label||({dashboard:"Головна",students:"Студенти",projects:"Проєкти",academic:"Розклад занять",calendar:"Зведений календар",schedule:"Участь у проєктах",industry:"Зустріч із індустрією",largeforms:"Режисерська лабораторія"}[v]);
  updateQuickAddForView(v);
  try{
    if(typeof views?.[v]!=="function") throw new Error(`Немає представлення ${v}`);
    views[v]();
  }catch(err){
    console.error("View render failed:",v,err);
    // Не залишаємо на екрані попередній розділ. Це особливо важливо для «Студенти»:
    // навіть якщо один профіль має некоректні імпортовані дані, сам розділ має відкритися.
    if(v==="students" && typeof renderStudentsSafeV27==="function") renderStudentsSafeV27(err);
    else app.innerHTML=`<div class="card"><h2>Не вдалося відкрити розділ</h2><div class="muted">Оновіть сторінку. Помилка записана в консолі браузера.</div></div>`;
  }
}
function refreshCurrentView(){
  const v=REMS_VALID_VIEWS.has(currentView) && typeof views?.[currentView]==="function" ? currentView : "dashboard";
  rememberCurrentView(v);
  $$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));
  const labels={dashboard:"Головна",students:"Студенти",projects:"Проєкти",largeforms:"Режисерська лабораторія",academic:"Розклад занять",calendar:"Зведений календар",schedule:"Участь у проєктах",industry:"Зустріч із індустрією"};
  const title=$("#pageTitle"); if(title) title.textContent=labels[v]||"REMS Control";
  updateQuickAddForView(v);
  if(v==="projects" && currentProjectDetailId && pBy(currentProjectDetailId)) v40OpenProject(currentProjectDetailId);
  else views[v]();
}
function dashboard(){
  const assigned=new Set(db.assignments.map(a=>String(a.studentId))).size;
  const conflicts=countConflicts();
  const todayDate=new Date(); todayDate.setHours(12,0,0,0);
  const today=localIsoDate(todayDate);
  const weekDates=Array.from({length:7},(_,i)=>{const d=new Date(todayDate);d.setDate(d.getDate()+i);return localIsoDate(d);});
  const eventsOn=date=>db.events.filter(e=>e.date===date).map(e=>({event:e,project:pBy(e.projectId),students:studentsForEvent(e)})).filter(x=>x.project);
  const todayEvents=eventsOn(today);
  const todayBusyIds=new Set(todayEvents.flatMap(x=>x.students.map(s=>String(s.id))));
  const ukFull=new Intl.DateTimeFormat("uk-UA",{weekday:"long",day:"numeric",month:"long"});
  const ukShort=new Intl.DateTimeFormat("uk-UA",{weekday:"short"});

  app.innerHTML=`
    <div class="today-panel">
      <div class="today-hero">
        <div class="today-hero-top">
          <div><h2>Сьогодні · ${ukFull.format(todayDate)}</h2><div class="muted">${todayEvents.length?`${todayEvents.length} подій`:"Подій немає"}</div></div>
          <div class="today-stats">
            <span class="today-stat">Зайнято: <b>${todayBusyIds.size}</b></span>
            <span class="today-stat">Вільно: <b>${Math.max(0,db.students.length-todayBusyIds.size)}</b></span>
          </div>
        </div>
        <div class="today-events">
          ${todayEvents.map(x=>`<div class="today-event"><span class="dot" style="background:${x.project.color}"></span><div><b>${esc(x.project.name)}</b><small>${esc(x.event.type)}${eventMetaText(x.event)?` · ${esc(eventMetaText(x.event))}`:""} · ${x.students.length} студентів</small></div><span class="chip project-watermark" style="${projectWatermarkStyle(x.project)}">${projectWatermarkInner(x.project,esc(shortType(x.event.type)))}</span></div>`).join("")||'<div class="muted" style="margin-top:8px">Сьогодні у базі немає подій.</div>'}
        </div>
      </div>

      <div class="card">
        <h2 style="margin-top:0">Найближчі 7 днів</h2>
        <div class="week-strip">
          ${weekDates.map(date=>{
            const dt=new Date(date+"T12:00:00"),evs=eventsOn(date);
            const busyIds=new Set(evs.flatMap(x=>x.students.map(s=>String(s.id))));
            return `<button type="button" class="week-day-card ${date===today?"today":""}" data-date="${date}">
              <div class="week-day-head"><div><div class="week-day-name">${ukShort.format(dt)}</div><div class="week-day-num">${dt.getDate()}</div></div><div class="week-day-count">${evs.length} подій</div></div>
              <div class="week-event-list">${evs.slice(0,3).map(x=>`<div class="week-event-pill project-watermark" style="${projectWatermarkStyle(x.project)}">${projectWatermarkInner(x.project,`${eventTimeText(x.event)?`${esc(eventTimeText(x.event))} · `:""}${esc(x.project.name)} · ${esc(shortType(x.event.type))}`)}</div>`).join("")}${evs.length>3?`<div class="week-day-count">+ ще ${evs.length-3}</div>`:""}</div>
              <div class="week-free">${Math.max(0,db.students.length-busyIds.size)} вільних</div>
            </button>`;
          }).join("")}
        </div>
      </div>
    </div>

    ${conflicts?`<button type="button" class="notice warn conflict-notice-button" id="dashboardConflictBtn">⚠️ Знайдено конфліктів: <b>${conflicts}</b>. <span>Відкрити →</span></button>`:`<div class="notice ok">✓ Конфліктів у поточних призначеннях не знайдено.</div>`}

    <div class="grid kpis">
      <div class="card kpi"><span>Студентів</span><strong>${db.students.length}</strong></div>
      <div class="card kpi"><span>Проєктів</span><strong>${db.projects.length}</strong></div>
      <div class="card kpi"><span>Задіяно студентів</span><strong>${assigned}</strong></div>
      <div class="card kpi"><span>Подій у базі</span><strong>${db.events.length}</strong></div>
    </div>

    <div class="ack-dashboard card">
      <div class="dashboard-projects-head"><h2>Потребують ознайомлення</h2><span class="muted">Найближчі події, які ще підтвердили не всі</span></div>
      <div id="ackDashboardList"><div class="muted">Завантаження…</div></div>
    </div>

    <div class="dashboard-projects-head"><h2>Проєкти</h2><span class="muted">Натисни на картку, щоб відкрити проєкт</span></div>
    <div class="dashboard-project-grid">
      ${db.projects.map(p=>{
        const evs=eventsFor(p.id), people=projectStudents(p.id);
        const future=evs.filter(e=>e.date>=today);
        const next=future[0]||null;
        const period=evs.length?`${fmt(evs[0].date)} - ${fmt(evs[evs.length-1].date)}`:"Дат ще немає";
        return `<button type="button" class="dashboard-project-card" data-project-id="${esc(String(p.id))}" style="--project-color:${p.color}">
          <div class="dashboard-project-top">
            ${projectLogoHtml(p,"dashboard-project-logo")}
            <div class="dashboard-project-copy">
              <h3>${esc(p.name)}</h3>
              <div class="muted">${evs.length} подій · ${people.length} студентів · Ознайомлення <b data-project-ack-count="${esc(String(p.id))}">…</b></div>
            </div>
            <span class="dashboard-project-arrow">→</span>
          </div>
          <div class="dashboard-project-period">${period}</div>
          <div class="dashboard-project-next">${next?`<span>Наступна</span><b>${fmt(next.date)} · ${esc(next.type)}</b>${eventMetaText(next)?`<small>${esc(eventMetaText(next))}</small>`:""}`:'<span>Майбутніх подій немає</span>'}</div>
        </button>`;
      }).join("")}
    </div>`;

  $$(".week-day-card").forEach(x=>x.onclick=()=>showDay(x.dataset.date));
  $$(".dashboard-project-card").forEach(btn=>btn.onclick=()=>openProjectCard(btn.dataset.projectId));
  if($("#dashboardConflictBtn")) $("#dashboardConflictBtn").onclick=showAllConflicts;
  updateAckIndicators().catch(console.error);
}


const recoveryNormalizeName=v=>String(v||"")
  .trim()
  .toLowerCase()
  .replace(/[’'`]/g,"")\n  .replace(/[-_]+/g," ")\n  .replace(/\s+/g," ");\n\nconst recoveryDownloadBackup=()=>{\n  const payload={\n    exportedAt:new Date().toISOString(),\n    source:"REMS Control before student recovery",\n    rems_control:coreDbSnapshot()\n  };\n  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json;charset=utf-8"});\n  const a=document.createElement("a");\n  a.href=URL.createObjectURL(blob);\n  a.download=`REMS-Control-backup-before-recovery-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.json`;\n  document.body.appendChild(a);\n  a.click();\n  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);\n};\n\n\nconst shortStudentName=name=>{\n  const parts=String(name||"").trim().split(/\s+/).filter(Boolean);\n  return parts.length>=2 ? `${parts[0]} ${parts[1]}` : parts.join(" ");\n};\nconst studentPairKey=name=>recoveryNormalizeName(shortStudentName(name));\n\nconst downloadDedupeBackup=()=>{\n  const payload={\n    exportedAt:new Date().toISOString(),\n    source:"REMS Control before duplicate cleanup",\n    rems_control:coreDbSnapshot()\n  };\n  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json;charset=utf-8"});\n  const a=document.createElement("a");\n  a.href=URL.createObjectURL(blob);\n  a.download=`REMS-Control-backup-before-dedupe-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.json`;\n  document.body.appendChild(a);\n  a.click();\n  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);\n};\n\nconst studentRichnessScore=s=>{\n  const sid=String(s?.id||"");\n  const assignments=(db.assignments||[]).filter(a=>String(a.studentId)===sid).length;\n  const events=(db.events||[]).filter(e=>Array.isArray(e.studentIds)&&e.studentIds.map(String).includes(sid)).length;\n  const profile=s?.publicProfile||{};\n  const profileFields=[\n    profile.bio,profile.skills,profile.achievements,profile.videos,profile.gallery\n  ].reduce((n,v)=>n+(Array.isArray(v)?v.length:0),0);\n  const socials=profile.socials&&typeof profile.socials==="object"\n    ? Object.values(profile.socials).filter(Boolean).length : 0;\n  return assignments*1000 + events*1000 + profileFields*20 + socials*10\n    + (profile.published?30:0) + (String(s?.name||"").split(/\s+/).length>=3?5:0);\n};\n\nasync function cleanupStudentDuplicates(){\n  const groups=new Map();\n  for(const s of db.students||[]){\n    const key=studentPairKey(s.name);\n    if(!key) continue;\n    if(!groups.has(key)) groups.set(key,[]);\n    groups.get(key).push(s);\n  }\n\n  const duplicateGroups=[...groups.values()].filter(g=>g.length>1);\n  const allNeedShortening=(db.students||[]).filter(s=>shortStudentName(s.name)!==String(s.name||"").trim()).length;\n\n  if(!duplicateGroups.length && !allNeedShortening){\n    alert("Дублікатів немає, а імена вже записані без по батькові.");\n    return;\n  }\n\n  const preview=duplicateGroups.slice(0,12).map(g=>\n    `• ${g.map(s=>s.name).join("  ↔  ")}`\n  ).join("\n");\n\n  const ok=confirm(\n    "Очистити дублікати та залишити імена без по батькові?\n\n"+\n    `Знайдено груп дублікатів: ${duplicateGroups.length}\n`+\n    `Імен із по батькові для скорочення: ${allNeedShortening}\n\n`+\n    (preview?`${preview}${duplicateGroups.length>12?"\n…":""}\n\n`:"")+\n    "Що буде зроблено:\n"+\n    "• для кожної людини залишиться ОДНА картка;\n"+\n    "• ім’я буде у форматі «Прізвище Ім’я»;\n"+\n    "• збережеться запис, у якого більше проєктів/подій/профільних даних;\n"+\n    "• участь у проєктах і подіях із дубліката буде перенесена;\n"+\n    "• фото не видаляються;\n"+\n    "• перед змінами автоматично завантажиться резервна JSON-копія.\n\n"+\n    "Продовжити?"\n  );\n  if(!ok) return;\n\n  downloadDedupeBackup();\n\n  let removed=0;\n  const idMap=new Map();\n  const keepers=[];\n\n  for(const group of groups.values()){\n    const ranked=[...group].sort((a,b)=>studentRichnessScore(b)-studentRichnessScore(a));\n    const keeper=ranked[0];\n\n    // Prefer richer profile data from any duplicate if keeper lacks it.\n    for(const other of ranked.slice(1)){\n      if(!keeper.publicProfile && other.publicProfile) keeper.publicProfile=clone(other.publicProfile);\n      idMap.set(String(other.id),String(keeper.id));\n      removed++;\n    }\n\n    keeper.name=shortStudentName(keeper.name);\n    if(keeper.publicProfile){\n      keeper.publicProfile={...keeper.publicProfile,name:keeper.name};\n    }\n    keepers.push(keeper);\n  }\n\n  // Remap assignments to the kept student id.\n  db.assignments=(db.assignments||[]).map(a=>{\n    const mapped=idMap.get(String(a.studentId));\n    return mapped ? {...a,studentId:mapped} : a;\n  });\n\n  // Deduplicate identical assignments after remap.\n  const seenAssignments=new Set();\n  db.assignments=db.assignments.filter(a=>{\n    const k=`${a.studentId}|${a.projectId}`;\n    if(seenAssignments.has(k)) return false;\n    seenAssignments.add(k);\n    return true;\n  });\n\n  // Remap event-level student ids and deduplicate them.\n  db.events=(db.events||[]).map(e=>{\n    if(!Array.isArray(e.studentIds)) return e;\n    const ids=e.studentIds.map(x=>idMap.get(String(x))||String(x));\n    return {...e,studentIds:[...new Set(ids)]};\n  });\n\n  // Shorten every remaining display name, even when there was no duplicate.\n  db.students=keepers.map(s=>{\n    const out={...s,name:shortStudentName(s.name)};\n    if(out.publicProfile) out.publicProfile={...out.publicProfile,name:out.name};\n    return out;\n  });\n\n  db.students.sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),"uk"));\n  cache();\n\n  const saved=await save();\n  if(!saved){\n    alert(\n      "Дублікати прибрані локально, але Firebase не підтвердив запис.\n"+\n      "Резервна копія вже завантажена. Нічого більше не редагуй і повідом мені."\n    );\n    return;\n  }\n\n  await loadAllStudentMedia();\n  students();\n  alert(\n    `Готово.\n\n`+\n    `Прибрано дублікатів: ${removed}\n`+\n    `Студентів тепер: ${db.students.length}\n`+\n    `Імена відображаються без по батькові.\n\n`+\n    `Проєкти, події та розклад збережені.`\n  );\n}\n\n\nasync function recoverStudentsFromFirebase(){\n  if(!cloudReady||!cloudDb||!currentUser){\n    alert("Хмара ще не готова. Зачекай кілька секунд і спробуй ще раз.");\n    return;\n  }\n\n  const ok=confirm(\n    "Безпечне відновлення студентів\n\n"+\n    "REMS Control зараз:\n"+\n    "• збере студентів із rems_student_media та rems_public_profiles;\n"+\n    "• НЕ видалятиме наявних студентів;\n"+\n    "• НЕ чіпатиме проєкти, події, розклад і зустрічі з індустрією;\n"+\n    "• перед змінами автоматично завантажить резервну JSON-копію поточного rems_control.\n\n"+\n    "Продовжити?"\n  );\n  if(!ok) return;\n\n  setStatus("v5.9 · аналіз відновлення…");\n\n  try{\n    const [mediaSnap,profilesSnap]=await Promise.all([\n      getDocs(collection(cloudDb,"rems_student_media")),\n      getDocs(collection(cloudDb,"rems_public_profiles"))\n    ]);\n\n    const mediaDocs=mediaSnap.docs.map(d=>({docId:d.id,...(d.data()||{})}));\n    const profileDocs=profilesSnap.docs.map(d=>({docId:d.id,...(d.data()||{})}));\n\n    // Save a local backup BEFORE touching db.\n    recoveryDownloadBackup();\n\n    const existingById=new Map((db.students||[]).map(s=>[String(s.id),s]));\n    const existingByName=new Map((db.students||[]).map(s=>[recoveryNormalizeName(s.name),s]));\n\n    // Profiles by normalized name. They are useful for profile content, but media\n    // is the authoritative source for the original REMS Control student id.\n    const profilesByName=new Map();\n    profileDocs.forEach(p=>{\n      const key=recoveryNormalizeName(p.name);\n      if(key) profilesByName.set(key,p);\n    });\n\n    let added=0, enriched=0;\n    const addedNames=[];\n\n    // First recover from student media because it stores studentId + name + photoData.\n    for(const m of mediaDocs){\n      const name=String(m.name||"").trim();\n      if(!name) continue;\n      const nameKey=recoveryNormalizeName(name);\n      const sid=String(m.studentId||"").trim();\n\n      let s=(sid&&existingById.get(sid))||existingByName.get(nameKey);\n\n      if(!s){\n        // Preserve original student id whenever rems_student_media has it.\n        let newId=sid;\n        if(!newId || existingById.has(newId)){\n          let n=1;\n          do{ newId=`recovered-${Date.now()}-${n++}`; }while(existingById.has(newId));\n        }\n\n        const pp=profilesByName.get(nameKey);\n        s={\n          id:newId,\n          name,\n          group:"РЕМС-44"\n        };\n        if(pp){\n          const clean=sanitizePublicProfile(s,pp);\n          if(clean) s.publicProfile=clean;\n        }\n\n        db.students.push(s);\n        existingById.set(String(s.id),s);\n        existingByName.set(nameKey,s);\n        added++;\n        addedNames.push(name);\n      }else{\n        const pp=profilesByName.get(nameKey);\n        if(pp && !s.publicProfile){\n          const clean=sanitizePublicProfile(s,pp);\n          if(clean){\n            s.publicProfile=clean;\n            enriched++;\n          }\n        }\n      }\n\n      // Keep media in the in-memory cache so the recovered photo appears immediately.\n      studentMediaCache.set(studentMediaId(s)||m.docId,m);\n    }\n\n    // Then recover profile-only students that have no media document.\n    for(const p of profileDocs){\n      const name=String(p.name||"").trim();\n      if(!name) continue;\n      const key=recoveryNormalizeName(name);\n      if(existingByName.has(key)) continue;\n\n      // For profile-only records use a stable recovered id; never overwrite another id.\n      let base=String(p.id||p.docId||"profile").trim();\n      let newId=`recovered-${base}`;\n      let i=2;\n      while(existingById.has(newId)) newId=`recovered-${base}-${i++}`;\n\n      const s={id:newId,name,group:"РЕМС-44"};\n      const clean=sanitizePublicProfile(s,p);\n      if(clean) s.publicProfile=clean;\n      db.students.push(s);\n      existingById.set(String(s.id),s);\n      existingByName.set(key,s);\n      added++;\n      addedNames.push(name);\n    }\n\n    // Stable Ukrainian alphabetical order makes the recovered list easier to inspect.\n    db.students.sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),"uk"));\n\n    cache();\n\n    // One deliberate cloud write, after the merge is complete.\n    const payload={...coreDbSnapshot(),updatedAt:new Date().toISOString()};\n    await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),payload,{merge:false});\n\n    await loadAllStudentMedia();\n    setStatus("v5.9 · відновлено ✓");\n    students();\n\n    alert(\n      `Відновлення завершено.\n\n`+\n      `Було студентів перед відновленням: ${existingById.size-added}\n`+\n      `Додано відсутніх: ${added}\n`+\n      `Усього тепер: ${db.students.length}\n`+\n      `Профілі доповнено: ${enriched}\n\n`+\n      (addedNames.length?`Додані:\n${addedNames.join("\n")}`:"Нових студентів для додавання не знайдено.")+\n      `\n\nРезервна копія стану ДО відновлення вже завантажена на комп’ютер.`\n    );\n  }catch(err){\n    console.error("Student recovery failed:",err);\n    setStatus("v5.9 · помилка відновлення");\n    alert(`Не вдалося виконати відновлення.\n${err?.code||err?.message||err}`);\n  }\n}\n\n\n// v15 - imported professional resumes and casting-ready profile fields.\nconst resumeNorm=v=>String(v||"").toLowerCase().replace(/[’ʼ'`]/g,"").replace(/[^a-zа-яіїєґ0-9]+/gi," ").replace(/\s+/g," ").trim();
const importedResumeProfiles=Array.isArray(window.REMS_RESUME_STRUCTURED_V20)?window.REMS_RESUME_STRUCTURED_V20:(Array.isArray(window.REMS_RESUME_STRUCTURED_V17)?window.REMS_RESUME_STRUCTURED_V17:(Array.isArray(window.REMS_RESUME_IMPORT_V15)?window.REMS_RESUME_IMPORT_V15:[]));
const importedQuestionnaireProfiles=Array.isArray(window.REMS_QUESTIONNAIRE_IMPORT_V16)?window.REMS_QUESTIONNAIRE_IMPORT_V16:[];
const importedQuestionnaireForStudent=s=>{
  if(!s) return null;
  const n=resumeNorm(s.name); const toks=new Set(n.split(" ").filter(x=>x.length>2));
  let best=null,bestScore=0;
  for(const p of importedQuestionnaireProfiles){
    const v=resumeNorm(p.name); let score=0;
    if(v===n) score=100;
    else {const vt=v.split(" ").filter(x=>x.length>2); const common=vt.filter(x=>toks.has(x)).length; if(common>=2) score=70+common;}
    if(score>bestScore){best=p;bestScore=score;}
  }
  return bestScore>=70?best:null;
};
const importedResumeForStudent=s=>{
  if(!s) return null;
  const n=resumeNorm(s.name);
  const toks=new Set(n.split(" ").filter(x=>x.length>2));
  let best=null,bestScore=0;
  for(const p of importedResumeProfiles){
    const variants=[p.name,...(p.aliases||[])].map(resumeNorm);
    let score=0;
    for(const v of variants){
      if(!v) continue;
      if(v===n) score=Math.max(score,100);
      const vt=v.split(" ").filter(x=>x.length>2);
      const common=vt.filter(x=>toks.has(x)).length;
      if(common>=2) score=Math.max(score,70+common);
      else if(common===1 && vt.length===1) score=Math.max(score,45);
    }
    if(score>bestScore){best=p;bestScore=score;}
  }
  return bestScore>=70?best:null;
};
const importedLinksForStudent=s=>{
  const bank=window.REMS_RESUME_LINKS_V25||{};
  // v33: use the app's real person-name normalizer. `normName` never existed and
  // caused the complete Students view to throw, activating the v27 emergency renderer.
  const n=normalizePersonName(s?.name||"");
  for(const [name,rows] of Object.entries(bank)){
    const nn=normalizePersonName(name);
    if(nn===n||nn.split(" ").filter(Boolean).every(t=>n.includes(t))||n.split(" ").filter(Boolean).every(t=>nn.includes(t))) return clone(rows||[]);
  }
  return [];
};
const studentProfessionalProfile=s=>{
  const imp=importedResumeForStudent(s)||{};
  const q=importedQuestionnaireForStudent(s)||{};
  const own=s?.professionalProfile||{};
  return {
    summary:own.summary??imp.summary??"",
    roles:Array.isArray(own.roles)?own.roles:(imp.roles||[]),
    programs:Array.isArray(own.programs)?own.programs:(imp.programs||[]),
    skills:Array.isArray(own.skills)?own.skills:[],
    experience:own.experience??imp.resumeText??"",
    structuredExperience:Array.isArray(own.structuredExperience)?own.structuredExperience:(imp.structuredExperience||[]),
    customSections:Array.isArray(own.customSections)?own.customSections:[],
    links:Array.isArray(own.links)?own.links:importedLinksForStudent(s),
    sourceText:imp.resumeText||"",
    sources:imp.sources||[],
    imported:!!imp.name,
    casting:{
      playingAge:own.casting?.playingAge||"",
      height:own.casting?.height||q.height||"",
      weight:own.casting?.weight||q.weight||"",
      clothingSize:own.casting?.clothingSize||q.clothingSize||"",
      shoeSize:own.casting?.shoeSize||q.shoeSize||"",
      type:own.casting?.type||"",
      hair:own.casting?.hair||"",
      eyes:own.casting?.eyes||"",
      special:own.casting?.special||""
    },
    questionnaire:q,
    importedContacts:{emails:[...(imp.emails||[]),...(q.email?[q.email]:[])],phones:[...(imp.phones||[]),...(q.phone?[q.phone]:[])],handles:[...(imp.handles||[]),...(q.instagram?[q.instagram]:[]),...(q.telegram?[q.telegram]:[])]}
  };
};
const profileTagHtml=(items=[])=>items.filter(Boolean).slice(0,18).map(x=>`<span class="resume-tag">${esc(x)}</span>`).join("");
const structuredExperienceHtml=(items=[])=>{
  if(!items.length) return '<div class="profile-empty">Структурованих записів поки немає</div>';
  return `<div class="pro-exp-list">${items.map((x,i)=>`<div class="pro-exp-row"><div class="pro-exp-main"><b>${esc(x.project||"Проєкт")}</b><span>${esc(x.role||"Роль не визначена")}</span></div><div class="pro-exp-meta">${x.period?`<span>${esc(x.period)}</span>`:""}${x.category?`<span>${esc(x.category)}</span>`:""}</div></div>`).join("")}</div>`;
};

// v19 - контроль повноти професійних профілів.
const professionalProfileAudit=s=>{
  const imp=importedResumeForStudent(s);
  const q=importedQuestionnaireForStudent(s);
  const rp=studentProfessionalProfile(s);
  const textParsed=!!(imp&&imp.textParsed);
  const structuredCount=Array.isArray(rp.structuredExperience)?rp.structuredExperience.length:0;
  const hasResume=!!imp;
  const hasQuestionnaire=!!q;
  const missing=[];
  if(!hasQuestionnaire) missing.push("немає анкети");
  if(!hasResume) missing.push("немає резюме");
  else if(!textParsed) missing.push("резюме треба розібрати вручну");
  if(hasResume&&textParsed&&!structuredCount) missing.push("досвід ще не структуровано");
  if(hasResume&&textParsed&&!String(rp.summary||"").trim()) missing.push("немає професійного опису");
  if(hasResume&&textParsed&&!(rp.roles||[]).length) missing.push("не визначені професійні напрями");
  let status="ready",label="Готовий",tone="ready";
  if(!hasResume){status="no-resume";label="Немає резюме";tone="missing";}
  else if(!textParsed||!structuredCount){status="needs-review";label="Треба дорозібрати";tone="review";}
  else if(!hasQuestionnaire){status="partial";label="Неповний";tone="partial";}
  return {status,label,tone,hasResume,hasQuestionnaire,textParsed,structuredCount,manualReviewed:!!(imp&&imp.manualReviewed),reviewNote:imp?.reviewNote||"",missing,rp};
};
const professionalAuditBadge=a=>`<span class="profile-audit-badge ${a.tone}">${esc(a.label)}</span>`;

async function importQuestionnaireDataV16(){
  const candidates=(db.students||[]).map(st=>({st,q:importedQuestionnaireForStudent(st)})).filter(x=>x.q);
  if(!candidates.length){alert("Не знайдено студентів, яких можна зіставити з анкетою.");return;}
  const ok=confirm(`Знайдено ${candidates.length} студентів із анкети.\n\nБуде заповнено лише порожні поля: дата народження, телефон, email, Instagram, Telegram, зріст, вага, розмір одягу і взуття, форма фінансування. Існуючі значення не перезаписуються.\n\nПродовжити?`);
  if(!ok) return;
  let changed=0;
  db.students=db.students.map(st=>{
    const q=importedQuestionnaireForStudent(st); if(!q) return st;
    const pp=st.professionalProfile||{}; const cast=pp.casting||{}; const acad=st.academicProfile||{};
    const patch={...st}; let any=false;
    const setBlank=(key,val)=>{if(val&&!String(patch[key]||"").trim()){patch[key]=val;any=true;}};
    setBlank("birthDate",q.birthDate); setBlank("phone",q.phone); setBlank("email",q.email); setBlank("instagram",q.instagram); setBlank("telegram",q.telegram);
    const newCast={...cast};
    for(const [k,v] of [["height",q.height],["weight",q.weight],["clothingSize",q.clothingSize],["shoeSize",q.shoeSize]]) if(v&&!String(newCast[k]||"").trim()){newCast[k]=v;any=true;}
    patch.professionalProfile={...pp,casting:newCast};
    if(q.funding&&!String(acad.funding||"").trim()){patch.academicProfile={...acad,funding:q.funding};any=true;}
    if(any) changed++;
    return patch;
  });
  cache(); const saved=await save();
  if(saved){alert(`Готово. Дані анкети зіставлено для ${candidates.length} студентів; доповнено ${changed} карток.`);students();}
  else alert("Дані підготовлено локально, але не вдалося зберегти їх у хмарну базу.");
}

function students(){
  const allAudits=(db.students||[]).map(s=>({s,a:professionalProfileAudit(s)}));
  const totals={
    all:allAudits.length,
    ready:allAudits.filter(x=>x.a.status==="ready").length,
    review:allAudits.filter(x=>x.a.status==="needs-review").length,
    noResume:allAudits.filter(x=>x.a.status==="no-resume").length,
    partial:allAudits.filter(x=>x.a.status==="partial").length
  };
  app.innerHTML=`
    <div class="profile-audit-summary">
      <button type="button" class="audit-summary-card active" data-audit-status=""><b>${totals.all}</b><span>Усі студенти</span></button>
      <button type="button" class="audit-summary-card ready" data-audit-status="ready"><b>${totals.ready}</b><span>Готові профілі</span></button>
      <button type="button" class="audit-summary-card review" data-audit-status="needs-review"><b>${totals.review}</b><span>Треба дорозібрати</span></button>
      <button type="button" class="audit-summary-card missing" data-audit-status="no-resume"><b>${totals.noResume}</b><span>Немає резюме</span></button>
      ${totals.partial?`<button type="button" class="audit-summary-card partial" data-audit-status="partial"><b>${totals.partial}</b><span>Неповні</span></button>`:""}
    </div>
    <div class="toolbar">
      <input id="studentSearch" placeholder="Пошук студента...">
      <select id="studentProjectFilter">
        <option value="">Усі проєкти</option>
        ${db.projects.map(p=>`<option value="${esc(String(p.id))}">${esc(p.name)}</option>`).join("")}
      </select>
      <select id="studentGroupFilter">${groupOptionsHtml()}</select>
      <select id="profileStatusFilter">
        <option value="">Усі стани профілю</option>
        <option value="ready">Готовий</option>
        <option value="needs-review">Треба дорозібрати</option>
        <option value="no-resume">Немає резюме</option>
        <option value="partial">Неповний</option>
      </select>
      <button type="button" class="ghost" id="profileAuditModeBtn">Контроль профілів</button>
      <button type="button" class="ghost" id="importQuestionnaireBtn">Імпортувати анкетні дані (32)</button>
      <button type="button" class="ghost" id="recoverStudentsBtn">Відновити студентів із Firebase</button>
      <button type="button" class="ghost" id="cleanupStudentsBtn">Прибрати дублікати</button>
    </div>
    <div id="profileAuditInfo" class="profile-audit-info" hidden></div>
    <div class="students-grid" id="studentsGrid"></div>`;

  let auditMode=false;
  const render=()=>{
    const q=($("#studentSearch").value||"").toLowerCase().trim();
    const pf=$("#studentProjectFilter").value;
    const gf=$("#studentGroupFilter").value;
    const sf=$("#profileStatusFilter").value;

    const rows=db.students.filter(s=>{
      if(!String(s.name||"").toLowerCase().includes(q)) return false;
      if(gf && String(s.group||"")!==gf) return false;
      if(sf && professionalProfileAudit(s).status!==sf) return false;
      if(!pf) return true;
      return studentProjects(s.id).some(p=>String(p.id)===String(pf));
    });

    const info=$("#profileAuditInfo");
    if(auditMode){
      info.hidden=false;
      info.innerHTML=`<b>Контроль повноти профілів</b><span>Зелений - резюме прочитано і досвід структуровано. Жовтий - резюме є, але його ще треба дорозібрати. Червоний - резюме для студента не знайдено.</span>`;
      $("#studentsGrid").classList.add("audit-grid-mode");
    }else{
      info.hidden=true;
      $("#studentsGrid").classList.remove("audit-grid-mode");
    }

    $("#studentsGrid").innerHTML=rows.map(s=>{
      const ps=studentProjects(s.id);
      const a=professionalProfileAudit(s);
      const missing=a.missing.length?a.missing.join(" · "):"основні дані зібрані";
      return `<button type="button" class="student-card student-open-card ${auditMode?"audit-card":""}" data-student-id="${esc(String(s.id))}">
        <div class="student-card-main">
          <div class="student-list-avatar">
            ${sharedStudentPhoto(s)
              ? `<img src="${esc(sharedStudentPhoto(s))}" alt="${esc(s.name)}">`
              : `<span>${esc((s.name||"?").trim().charAt(0).toUpperCase())}</span>`}
          </div>
          <div class="student-card-copy">
            <div class="student-card-title-row"><h3>${esc(s.name)}</h3>${professionalAuditBadge(a)}</div>
            <div class="muted">${esc(s.group||"")} · ${countDays(s.id)} зайнятих днів</div>
            ${auditMode?`<div class="audit-card-details">
              <span class="audit-mini ${a.hasQuestionnaire?"ok":"no"}">${a.hasQuestionnaire?"✓":"×"} анкета</span>
              <span class="audit-mini ${a.hasResume?"ok":"no"}">${a.hasResume?"✓":"×"} резюме</span>
              <span class="audit-mini ${a.textParsed?"ok":"warn"}">${a.textParsed?"✓":"!"} текст</span>
              <span class="audit-mini ${a.structuredCount?"ok":"warn"}">${a.structuredCount?"✓":"!"} досвід ${a.structuredCount||0}</span>
            </div><div class="audit-missing"><b>Потрібно:</b> ${esc(missing)}</div>`:`<div class="chips">${ps.map(p=>`<span class="chip project-watermark" style="${projectWatermarkStyle(p)}">${projectWatermarkInner(p,esc(p.name))}</span>`).join("")||'<span class="muted">Проєктів ще немає</span>'}</div>`}
          </div>
        </div>
      </button>`;
    }).join("")||'<div class="empty">Нічого не знайдено.</div>';

    $$(".student-open-card").forEach(btn=>{
      btn.onclick=()=>{
        const sid=resolveStudentId(btn.dataset.studentId);
        if(sid===undefined){console.error("Student not found:",btn.dataset.studentId);return;}
        openStudent(sid);
      };
    });
  };

  $("#studentSearch").oninput=render;
  $("#studentProjectFilter").onchange=render;
  $("#studentGroupFilter").onchange=render;
  $("#profileStatusFilter").onchange=()=>{
    const val=$("#profileStatusFilter").value;
    $$(".audit-summary-card").forEach(b=>b.classList.toggle("active",b.dataset.auditStatus===val));
    render();
  };
  $$(".audit-summary-card").forEach(btn=>btn.onclick=()=>{
    $("#profileStatusFilter").value=btn.dataset.auditStatus||"";
    $$(".audit-summary-card").forEach(b=>b.classList.toggle("active",b===btn));
    render();
  });
  $("#profileAuditModeBtn").onclick=()=>{auditMode=!auditMode;$("#profileAuditModeBtn").classList.toggle("active",auditMode);render();};
  $("#importQuestionnaireBtn").onclick=importQuestionnaireDataV16;
  $("#recoverStudentsBtn").onclick=recoverStudentsFromFirebase;
  $("#cleanupStudentsBtn").onclick=cleanupStudentDuplicates;
  render();
}


// v27 - аварійно стійкий розділ «Студенти».
// Якщо один імпортований профіль/посилання містить неочікувані дані,
// це більше не може «з'їсти» весь розділ і залишити на екрані попередню вкладку.
function renderStudentsSafeV27(sourceError){
  console.warn("Students safe renderer activated",sourceError||"");
  app.innerHTML=`
    <div class="toolbar">
      <input id="studentSearchV27" placeholder="Пошук студента...">
      <select id="studentGroupV27">${groupOptionsHtml()}</select>
    </div>
    <div class="students-grid" id="studentsGridV27"></div>`;
  const safeProjects=st=>{
    try{return studentProjects(st.id)||[];}catch(err){console.error("studentProjects failed",st?.id,err);return [];}
  };
  const safePhoto=st=>{
    try{return sharedStudentPhoto(st)||"";}catch(err){console.error("student photo failed",st?.id,err);return "";}
  };
  const render=()=>{
    const q=String($("#studentSearchV27")?.value||"").toLowerCase().trim();
    const group=String($("#studentGroupV27")?.value||"");
    const rows=(db.students||[]).filter(st=>(!q||String(st.name||"").toLowerCase().includes(q))&&(!group||String(st.group||"")===group));
    $("#studentsGridV27").innerHTML=rows.map(st=>{
      const photo=safePhoto(st), ps=safeProjects(st);
      return `<button type="button" class="student-card student-open-card-v27" data-student-id="${esc(String(st.id))}">
        <div class="student-card-main">
          <div class="student-list-avatar">${photo?`<img src="${esc(photo)}" alt="${esc(st.name||"")}">`:`<span>${esc((st.name||"?").trim().charAt(0).toUpperCase())}</span>`}</div>
          <div class="student-card-copy">
            <div class="student-card-title-row"><h3>${esc(st.name||"Без імені")}</h3></div>
            <div class="muted">${esc(st.group||"")}</div>
            <div class="chips">${ps.map(p=>`<span class="chip">${esc(p.name||"Проєкт")}</span>`).join("")||'<span class="muted">Проєктів ще немає</span>'}</div>
          </div>
        </div>
      </button>`;
    }).join("")||'<div class="empty">Нічого не знайдено.</div>';
    $$(".student-open-card-v27").forEach(btn=>btn.onclick=()=>{
      const sid=resolveStudentId(btn.dataset.studentId);
      if(sid!==undefined) openStudent(sid);
    });
  };
  $("#studentSearchV27").oninput=render;
  $("#studentGroupV27").onchange=render;
  render();
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
  const s=sBy(id);
  if(!s){
    console.error("Student not found",id);
    return;
  }

  const dialog=document.querySelector("#studentDialog");
  const body=document.querySelector("#studentDialogBody");
  if(!dialog||!body){
    console.error("Student dialog missing");
    return;
  }

  // Open immediately, before any derived data is calculated.
  body.innerHTML=`<div class="student-profile"><div class="profile-body"><div class="profile-empty">Завантаження картки…</div></div></div>`;
  if(!dialog.open) dialog.showModal();

  try{
    const ps=studentProjects(id);
    const items=[];
    db.events.forEach(e=>{
      if(!studentsForEvent(e).some(x=>String(x.id)===String(id))) return;
      const p=pBy(e.projectId);
      if(p) items.push({...e,p});
    });
    items.sort((a,b)=>a.date.localeCompare(b.date)||(a.startTime||"").localeCompare(b.startTime||""));

    const photo=sharedStudentPhoto(s);
    const photoBlock=photo
      ? `<div class="profile-photo"><img src="${photo}" alt="${esc(s.name)}"></div>`
      : `<div class="profile-photo">👤</div>`;

    const rp=studentProfessionalProfile(s);
    const birthValue=s.birthDate||rp.questionnaire?.birthDate||"";
    const birthday=birthValue
      ? new Date(birthValue+"T12:00:00").toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit",year:"numeric"})
      : "";
    const ageParts=(()=>{
      if(!birthValue) return null;
      const parts=String(birthValue).split("-").map(Number);
      if(parts.length!==3||parts.some(Number.isNaN)) return null;
      const [by,bm,bd]=parts;
      const now=new Date();
      let years=now.getFullYear()-by;
      let months=now.getMonth()+1-bm;
      if(now.getDate()<bd) months--;
      if(months<0){ years--; months+=12; }
      if(years<0) return null;
      return {years,months};
    })();
    const ageBadge=ageParts ? `<span class="student-age" title="${ageParts.years} повних років, ${ageParts.months} повних місяців">${ageParts.years}<small>(${ageParts.months})</small></span>` : "";

    const fallbackPhone=!s.phone?(rp.importedContacts.phones?.[0]||""):"";
    const fallbackEmail=!s.email?(rp.importedContacts.emails?.[0]||""):"";
    const contacts=[
      (s.phone||fallbackPhone) ? `<div class="contact-item"><b>Телефон</b><a href="tel:${esc(s.phone||fallbackPhone)}">${esc(s.phone||fallbackPhone)}</a></div>` : "",
      (s.email||fallbackEmail) ? `<div class="contact-item"><b>Email</b><a href="mailto:${esc(s.email||fallbackEmail)}">${esc(s.email||fallbackEmail)}</a></div>` : "",
      (s.instagram||rp.questionnaire?.instagram) ? `<div class="contact-item"><b>Instagram</b><span>${esc(s.instagram||rp.questionnaire?.instagram)}</span></div>` : "",
      (s.telegram||rp.questionnaire?.telegram) ? `<div class="contact-item"><b>Telegram</b><span>${esc(s.telegram||rp.questionnaire?.telegram)}</span></div>` : ""
    ].filter(Boolean).join("");

    const portfolioItems=[
      ["Резюме",s.resumeUrl,"📄"],["Портфоліо",s.portfolioUrl,"🗂️"],["Відео / роботи",s.worksUrl,"🎬"]
    ].map(([label,url,icon])=>{
      const safe=safeUrl(url);
      return safe?`<a class="portfolio-card" href="${safe}" target="_blank" rel="noopener"><b>${icon} ${label}</b><span>Відкрити</span></a>`:"";
    }).filter(Boolean).join("");

    body.innerHTML=`<div class="student-profile">
      <div class="profile-hero">
        <div class="profile-hero-actions-row">
          <div class="profile-hero-context">Картка студента</div>
          <div class="hero-actions">
            ${publicProfileFor(s)?.published===true?`<a class="ghost public-profile-btn" href="${publicProfileUrlFor(s)}" target="_blank" rel="noopener">Публічна сторінка ↗</a>`:""}<button class="ghost" id="editPublicProfileBtn">${publicProfileFor(s)?.published===true?"Публічний профіль":"Створити публічний профіль"}</button>
            <button class="ghost" id="personalScheduleBtn">Особистий розклад</button>
            <button class="ghost" id="editStudentBtn">Редагувати</button>
            <button class="ghost" id="closeStudentBtn">Закрити</button>
          </div>
        </div>

        <div class="profile-identity">
          ${photoBlock}
          <div class="profile-head-copy">
            <h2>${esc(s.name)}</h2>
            <div class="profile-meta">
              <span>${esc(s.group||"")}</span>
              ${birthday?`<span>🎂 ${birthday}${ageBadge?` · ${ageBadge}`:""}</span>`:""}
              ${(s.academicProfile?.funding||rp.questionnaire?.funding)?`<span>${esc(s.academicProfile?.funding||rp.questionnaire?.funding)}</span>`:""}
            </div>
            <div class="profile-project-pills">
              ${ps.map(p=>`<span class="profile-project-pill" style="--pill-color:${p.color||"#4f46e5"}">${esc(p.name||"Проєкт")}</span>`).join("")||'<span class="profile-no-projects">Проєктів поки немає</span>'}
            </div>
          </div>
        </div>
      </div>

      <div class="profile-body">
        <div class="contact-grid">${contacts||'<div class="profile-empty">Контакти ще не додані</div>'}</div>

        <div class="profile-stats">
          <div class="profile-stat"><span class="muted">Проєктів</span><strong>${ps.length}</strong></div>
          <div class="profile-stat"><span class="muted">Зайнятих днів</span><strong>${countDays(id)}</strong></div>
          <button type="button" class="profile-stat conflict-stat-button" id="studentConflictStat"><span class="muted">Конфліктів</span><strong>${studentConflicts(id)}</strong><small>Відкрити →</small></button>
        </div>

        <div class="profile-section">
          <div class="profile-section-title"><b>Професійний профіль</b><span class="muted">дані для добірок і портфоліо</span></div>
          ${(()=>{const a=professionalProfileAudit(s);return `<div class="profile-audit-inline ${a.tone}">${professionalAuditBadge(a)}<div><b>${a.structuredCount?`${a.structuredCount} структурованих записів досвіду`:"Структурований досвід ще не готовий"}</b><span>${esc(a.missing.length?a.missing.join(" · "):"Основні дані профілю зібрані")}</span></div></div>`;})()}
          ${rp.imported?`<div class="resume-import-note">✓ Знайдено та підключено резюме студента з архіву.</div>`:""}
          ${rp.questionnaire?.name?`<div class="resume-import-note">✓ Підключено анкетні дані студента: контакти та параметри для підбору.</div>`:""}
          <div class="resume-profile-grid">
            <div class="resume-box full"><h4>Про себе / професійний опис</h4><div>${rp.summary?esc(rp.summary):'<span class="muted">Ще не заповнено</span>'}</div></div>
            <div class="resume-box"><h4>Ролі та напрями</h4><div class="resume-tags">${profileTagHtml(rp.roles)||'<span class="muted">-</span>'}</div></div>
            <div class="resume-box"><h4>Програми / інструменти</h4><div class="resume-tags">${profileTagHtml(rp.programs)||'<span class="muted">-</span>'}</div></div>
            <div class="resume-box full"><h4>Кастингові / зовнішні дані</h4><div class="casting-grid">
              <div class="casting-item"><b>Ігровий вік</b><span>${esc(rp.casting.playingAge||"-")}</span></div>
              <div class="casting-item"><b>Зріст</b><span>${esc(rp.casting.height||"-")}</span></div>
              <div class="casting-item"><b>Вага</b><span>${esc(rp.casting.weight||"-")}</span></div>
              <div class="casting-item"><b>Одяг</b><span>${esc(rp.casting.clothingSize||"-")}</span></div>
              <div class="casting-item"><b>Взуття</b><span>${esc(rp.casting.shoeSize||"-")}</span></div>
              <div class="casting-item"><b>Типаж</b><span>${esc(rp.casting.type||"-")}</span></div>
              <div class="casting-item"><b>Волосся</b><span>${esc(rp.casting.hair||"-")}</span></div>
              <div class="casting-item"><b>Очі</b><span>${esc(rp.casting.eyes||"-")}</span></div>
              <div class="casting-item"><b>Спецнавички</b><span>${esc(rp.casting.special||"-")}</span></div>
            </div>
            ${rp.structuredExperience?.length?`<div class="resume-box full"><h4>Професійний досвід · ${rp.structuredExperience.length} структурованих записів</h4>${structuredExperienceHtml(rp.structuredExperience)}</div>`:""}
            ${rp.experience?`<details class="resume-box full"><summary><b>Оригінальний текст резюме</b></summary><div class="resume-text">${esc(rp.experience)}</div></details>`:""}
            ${rp.sources?.length?`<div class="resume-box full"><h4>Джерело</h4><div class="resume-source-list">${rp.sources.map(esc).join("<br>")}</div></div>`:""}
          </div>
        </div>

        <div class="profile-section">
          <div class="profile-section-title"><b>Резюме та портфоліо</b></div>
          <div class="portfolio-grid">${portfolioItems||'<div class="profile-empty">Посилань ще немає</div>'}</div>
        </div>

        ${s.notes?`<div class="profile-section"><div class="profile-section-title"><b>Нотатки</b></div><div class="notes-card">${esc(s.notes)}</div></div>`:""}

        <div class="profile-section">
          <div class="profile-section-title"><b>Календар зайнятості</b><span class="muted">${items.length} подій</span></div>
          <div class="student-cal-toolbar">
            <div class="student-cal-toggle">
              <button class="active" id="studentCalendarMode">Календар</button>
              <button id="studentListMode">Список</button>
            </div>
          </div>
          <div id="studentMonthTabs" class="student-month-tabs"></div>
          <div id="studentCalendarView" class="student-calendar-view"></div>
          <div id="studentListView" class="student-list-view">
            <div class="timeline-scroll"><div class="timeline">
              ${items.map(x=>`<div class="timeline-row">
                <div class="timeline-date">${fullfmt(x.date)}</div>
                <div class="timeline-type">${esc(x.type)}${eventMetaText(x)?`<div class="muted">${esc(eventMetaText(x))}</div>`:""}</div>
                <span class="chip project-watermark" style="${projectWatermarkStyle(x.p)}">${projectWatermarkInner(x.p,esc(x.p.name))}</span>
              </div>`).join("")||'<div class="profile-empty">Подій немає</div>'}
            </div></div>
          </div>
        </div>
      </div>
    </div>`;

    $("#closeStudentBtn").onclick=()=>dialog.close();
    $("#editStudentBtn").onclick=()=>editStudent(id);
    if($("#studentConflictStat")) $("#studentConflictStat").onclick=()=>showStudentConflicts(id);
    $("#editPublicProfileBtn").onclick=()=>editPublicProfile(id);
    $("#personalScheduleBtn").onclick=async()=>{
      const btn=$("#personalScheduleBtn");
      const oldText=btn.textContent;

      // Mobile Safari can block window.open() if it happens after an await.
      // Open the tab immediately while the click is still a direct user gesture.
      const pendingTab=window.open("about:blank","_blank");

      btn.disabled=true;
      btn.textContent="Відкриваю…";

      try{
        const url=await personalScheduleUrlForStudent(id);

        if(!url){
          if(pendingTab) pendingTab.close();
          alert("Для цього студента ще немає особистого розкладу.");
          return;
        }

        if(pendingTab){
          pendingTab.location.href=url;
        }else{
          // Fallback for strict popup blocking: open in the current tab.
          window.location.href=url;
        }
      }catch(err){
        if(pendingTab) pendingTab.close();
        console.error("Personal schedule open failed:",err);
        alert("Не вдалося відкрити особистий розклад.");
      }finally{
        btn.disabled=false;
        btn.textContent=oldText;
      }
    };

    const monthNames={"01":"Січень","02":"Лютий","03":"Березень","04":"Квітень","05":"Травень","06":"Червень","07":"Липень","08":"Серпень","09":"Вересень","10":"Жовтень","11":"Листопад","12":"Грудень"};
    const months=["2026-08","2026-09","2026-10","2026-11","2026-12","2027-01","2027-02","2027-03","2027-04","2027-05"];

    const renderMonth=month=>{
      $$(".student-month-tab").forEach(b=>b.classList.toggle("active",b.dataset.month===month));
      const [yy,mm]=month.split("-").map(Number);
      const first=new Date(yy,mm-1,1);
      const last=new Date(yy,mm,0);
      const mondayIndex=(first.getDay()+6)%7;
      const heads=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"].map(w=>`<div class="student-month-head">${w}</div>`).join("");
      const blanks=Array.from({length:mondayIndex},()=>`<div class="student-month-day empty"></div>`).join("");
      const cells=Array.from({length:last.getDate()},(_,i)=>{
        const day=i+1;
        const date=`${yy}-${String(mm).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
        const dayItems=items.filter(x=>x.date===date);
        const dow=new Date(date+"T12:00:00").getDay();
        const isToday=localIsoDate()===date;
        return `<div class="student-month-day ${dow===0||dow===6?"weekend":""} ${isToday?"today-date":""}" data-date="${date}">
          <div class="student-month-number">${day}${isToday?'<span class="today-mini">СЬОГОДНІ</span>':""}</div>
          <div class="student-day-events">
            ${dayItems.map((x,idx)=>`<button type="button" class="student-day-event calendar-project-event" data-date="${date}" data-index="${idx}" title="${esc(x.p.name)} · ${esc(x.type)}">${calendarProjectCard(x.p,`${eventTimeText(x)?`${esc(eventTimeText(x))} · `:""}${esc(shortType(x.type))}`)}</button>`).join("")}
          </div>
        </div>`;
      }).join("");
      const monthHasEvents=items.some(x=>x.date.startsWith(month));
      $("#studentCalendarView").innerHTML=`<div class="student-month-grid">${heads}${blanks}${cells}</div>${monthHasEvents?"":'<div class="profile-empty" style="margin-top:8px">У цьому місяці подій немає.</div>'}`;

      $("#studentCalendarView").querySelectorAll(".student-day-event").forEach(el=>el.onclick=()=>{
        const dayItems=items.filter(x=>x.date===el.dataset.date);
        const item=dayItems[Number(el.dataset.index||0)]||dayItems[0];
        if(item) showStudentEventInfo(id,item);
      });
    };

    $("#studentMonthTabs").innerHTML=months.map(m=>{
      const [y,mo]=m.split("-");
      return `<button type="button" class="student-month-tab" data-month="${m}">${monthNames[mo]} ${y}</button>`;
    }).join("");
    $("#studentMonthTabs").querySelectorAll(".student-month-tab").forEach(b=>b.onclick=()=>renderMonth(b.dataset.month));
    renderMonth(months[0]);

    $("#studentCalendarMode").onclick=()=>{
      $("#studentCalendarMode").classList.add("active");
      $("#studentListMode").classList.remove("active");
      $("#studentCalendarView").classList.remove("hidden");
      $("#studentMonthTabs").style.display="";
      $("#studentListView").classList.remove("active");
    };
    $("#studentListMode").onclick=()=>{
      $("#studentListMode").classList.add("active");
      $("#studentCalendarMode").classList.remove("active");
      $("#studentCalendarView").classList.add("hidden");
      $("#studentMonthTabs").style.display="none";
      $("#studentListView").classList.add("active");
    };
  }catch(err){
    console.error("Student profile error:",err);
    body.innerHTML=`<div class="student-profile"><div class="profile-body">
      <h2>${esc(s.name)}</h2>
      <div class="muted">${esc(s.group||"")}</div>
      <div class="notice warn" style="margin-top:16px">Не вдалося завантажити календар. Основна картка студента доступна.</div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="ghost" id="fallbackEditStudent">Редагувати</button>
        <button class="ghost" id="fallbackCloseStudent">Закрити</button>
      </div>
    </div></div>`;
    body.querySelector("#fallbackEditStudent").onclick=()=>editStudent(id);
    body.querySelector("#fallbackCloseStudent").onclick=()=>dialog.close();
  }
}


function editPublicProfile(id){
  const s=sBy(id); if(!s) return;
  const profile=publicProfileFor(s);
  if(!profile){ alert("Для цього студента ще немає публічного профілю REMS-44."); return; }
  const lines=a=>(Array.isArray(a)?a:[]).join("\n");
  const videos=(profile.videos||[]).map(v=>`${v.title||"Відеоробота"} | ${v.youtube||""}`).join("\n");
  $("#studentDialogBody").innerHTML=`<div class="student-profile">
    <div class="profile-head">
      <div><h2>Публічний профіль</h2><div class="muted">${esc(s.name)} · ${esc(studentGroupLabel(s))}</div></div>
      <a class="ghost public-profile-btn" href="${publicProfileUrlFor(s)}" target="_blank" rel="noopener">Переглянути ↗</a>
    </div>
    <form id="publicProfileForm" class="profile-edit-form" style="margin-top:18px">
      <label class="full public-publish-toggle">
        <input id="pubPublished" type="checkbox" ${profile.published===true?"checked":""}>
        <span><b>Показувати цього студента на REMS-44</b><small>${profile.published===true?"Зараз профіль опублікований":"Зараз профіль прихований"}</small></span>
      </label>
      <label class="full">Ім’я на сайті<input id="pubName" value="${esc(profile.name||s.name)}"></label>
      <label class="full">Спеціальність / роль<input id="pubRole" value="${esc(profile.role||"")}"></label>
      <div class="full shared-photo-editor">
        <div class="shared-photo-preview" id="pubPhotoPreview">${sharedStudentPhoto(s)?`<img src="${sharedStudentPhoto(s)}" alt="${esc(s.name)}">`:'<span>Фото ще немає</span>'}</div>
        <div class="shared-photo-controls">
          <b>Спільне фото</b>
          <input id="pubPhotoFile" type="file" accept="image/*">
          <span class="muted">Це фото буде одночасно в Control і на REMS-44.</span>
          <input id="pubPhoto" value="${esc(profile.photo||"")}" placeholder="Або старий шлях images/...">
        </div>
      </div>
      <label class="full public-publish-toggle"><input id="pubAutoProfessional" type="checkbox" ${profile.autoProfessional!==false?"checked":""}><span><b>Автоматично брати професійні дані з REMS Control</b><small>Опис, напрями, програми та структурований досвід оновлюватимуться на сайті після збереження картки студента.</small></span></label>
      <div class="full resume-box"><h4>Що показувати на сайті</h4><div class="resume-tags" style="gap:12px">
        <label><input id="pubShowExperience" type="checkbox" ${profile.visibility?.experience!==false?"checked":""}> досвід</label>
        <label><input id="pubShowPrograms" type="checkbox" ${profile.visibility?.programs!==false?"checked":""}> програми</label>
        <label><input id="pubShowAge" type="checkbox" ${profile.visibility?.age!==false?"checked":""}> вік</label>
        <label><input id="pubShowHeight" type="checkbox" ${profile.visibility?.height!==false?"checked":""}> зріст</label>
        <label><input id="pubShowClothing" type="checkbox" ${profile.visibility?.clothing===true?"checked":""}> одяг</label>
        <label><input id="pubShowShoe" type="checkbox" ${profile.visibility?.shoe===true?"checked":""}> взуття</label>
        <label><input id="pubShowInstagram" type="checkbox" ${profile.visibility?.instagram!==false?"checked":""}> Instagram</label>
        <label><input id="pubShowTelegram" type="checkbox" ${profile.visibility?.telegram===true?"checked":""}> Telegram</label>
        <label><input id="pubShowEmail" type="checkbox" ${profile.visibility?.email===true?"checked":""}> email</label>
      </div></div>
      <label class="full">Про себе - один абзац на рядок<textarea id="pubBio" rows="6">${esc(lines(profile.bio))}</textarea></label>
      <label class="full">Навички / напрями - одна на рядок<textarea id="pubSkills" rows="5">${esc(lines(profile.skills))}</textarea></label>
      <label class="full">Досягнення - одне на рядок<textarea id="pubAchievements" rows="5">${esc(lines(profile.achievements))}</textarea></label>
      <label>Instagram<input id="pubInstagram" value="${esc(profile.socials?.instagram||"")}"></label>
      <label>TikTok<input id="pubTiktok" value="${esc(profile.socials?.tiktok||"")}"></label>
      <label>YouTube<input id="pubYoutube" value="${esc(profile.socials?.youtube||"")}"></label>
      <label>Telegram<input id="pubTelegram" value="${esc(profile.socials?.telegram||"")}"></label>
      <label>Facebook<input id="pubFacebook" value="${esc(profile.socials?.facebook||"")}"></label>
      <label>Email<input id="pubEmail" value="${esc(profile.socials?.email||"")}"></label>
      <label class="full">Відеороботи - Назва | YouTube-посилання<textarea id="pubVideos" rows="6">${esc(videos)}</textarea></label>
      <label class="full">Галерея - одне посилання/шлях на рядок<textarea id="pubGallery" rows="5">${esc(lines(profile.gallery))}</textarea></label>
      <div class="full notice ok">На сайт передаються тільки дозволені публічні поля. Телефон, вага, адреса, дані батьків, форма фінансування, календар, нотатки та зайнятість не публікуються.</div>
      <div class="full profile-actions">
        <button type="button" class="ghost" id="cancelPublicEdit">Скасувати</button>
        <button type="submit" class="primary">Зберегти й опублікувати</button>
      </div>
    </form>
  </div>`;
  $("#cancelPublicEdit").onclick=()=>openStudent(id);
  if($("#pubPhotoFile")) $("#pubPhotoFile").onchange=async e=>{
    const f=e.target.files?.[0]; if(!f) return;
    try{
      const data=await compressStudentPhoto(f);
      $("#pubPhotoPreview").innerHTML=`<img src="${data}" alt="Попередній перегляд">`;
    }catch(err){alert(err.message||"Не вдалося обробити фото.");e.target.value="";}
  };

  $("#publicProfileForm").onsubmit=async e=>{
    e.preventDefault();
    const submit=e.submitter||$("#publicProfileForm button[type='submit']");
    if(submit){submit.disabled=true;submit.textContent="Публікація…";}
    const splitLines=v=>String(v||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
    const parsedVideos=splitLines($("#pubVideos").value).map(line=>{
      const parts=line.split("|");
      return {title:(parts.shift()||"Відеоробота").trim(),youtube:parts.join("|").trim()};
    }).filter(v=>v.youtube);
    const pubPhotoFile=$("#pubPhotoFile")?.files?.[0];
    const sharedPhotoData=pubPhotoFile?await compressStudentPhoto(pubPhotoFile):null;
    const autoNow=autoPublicProfessionalData(s);
    const next={...profile,published:$("#pubPublished").checked,autoProfessional:$("#pubAutoProfessional").checked,name:$("#pubName").value.trim(),role:$("#pubRole").value.trim(),photo:$("#pubPhoto").value.trim(),
      visibility:{experience:$("#pubShowExperience").checked,programs:$("#pubShowPrograms").checked,age:$("#pubShowAge").checked,height:$("#pubShowHeight").checked,clothing:$("#pubShowClothing").checked,shoe:$("#pubShowShoe").checked,instagram:$("#pubShowInstagram").checked,telegram:$("#pubShowTelegram").checked,email:$("#pubShowEmail").checked},
      bio:$("#pubAutoProfessional").checked&&autoNow.bio.length?autoNow.bio:splitLines($("#pubBio").value),
      roles:$("#pubAutoProfessional").checked?autoNow.roles:(profile.roles||[]),
      skills:$("#pubAutoProfessional").checked?uniquePublicList([...(autoNow.roles||[]),...(autoNow.skills||[])]):splitLines($("#pubSkills").value),
      programs:$("#pubAutoProfessional").checked?autoNow.programs:(profile.programs||[]),
      structuredExperience:$("#pubAutoProfessional").checked?autoNow.structuredExperience:(profile.structuredExperience||[]),
      publicFacts:$("#pubAutoProfessional").checked?autoNow.facts:(profile.publicFacts||{}),
      achievements:splitLines($("#pubAchievements").value),
      socials:{instagram:$("#pubInstagram").value.trim(),tiktok:$("#pubTiktok").value.trim(),youtube:$("#pubYoutube").value.trim(),
        telegram:$("#pubTelegram").value.trim(),facebook:$("#pubFacebook").value.trim(),email:$("#pubEmail").value.trim()},
      videos:parsedVideos,gallery:splitLines($("#pubGallery").value)};
    db.students=db.students.map(st=>String(st.id)===String(id)?{...st,publicProfile:next}:st);
    const ok=await save();
    if(!ok){
      if(submit){submit.disabled=false;submit.textContent="Зберегти й опублікувати";}
      alert("Не вдалося зберегти зміни в REMS Control."); return;
    }
    try{
      const updated=sBy(id);
      if(updated && sharedPhotoData!==null) await saveStudentMedia(updated,sharedPhotoData);
      if(updated) await publishOnePublicProfile(updated);
      alert(next.published?"Профіль опубліковано на REMS-44.":"Профіль збережено, але він прихований з REMS-44.");
      openStudent(id);
    }catch(err){
      console.error(err);
      if(submit){submit.disabled=false;submit.textContent="Зберегти й опублікувати";}
      alert("У Control зміни збережені, але публікація на REMS-44 заблокована правилами Firestore. Встанови правила з пакета v3.0.");
    }
  };
}


const downloadStudentDeleteBackup=s=>{
  const payload={
    exportedAt:new Date().toISOString(),
    source:"REMS Control before student deletion",
    student:{id:s?.id,name:s?.name,group:s?.group},
    rems_control:coreDbSnapshot()
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json;charset=utf-8"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  const safe=String(s?.name||"student").replace(/[^a-zа-яіїєґ0-9_-]+/gi,"-").replace(/^-+|-+$/g,"");
  a.download=`REMS-Control-before-delete-${safe||"student"}-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.json`;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
};

const removeStudentFromCoreDb=studentId=>{
  const sid=String(studentId);
  db.students=(db.students||[]).filter(st=>String(st.id)!==sid);
  db.assignments=(db.assignments||[]).filter(a=>String(a.studentId)!==sid);
  db.events=(db.events||[]).map(e=>{
    const out={...e};
    if(Array.isArray(out.studentIds)) out.studentIds=out.studentIds.filter(x=>String(x)!==sid);
    if(out.studentRoles&&typeof out.studentRoles==="object"){
      const roles={...out.studentRoles};
      Object.keys(roles).forEach(k=>{ if(String(k)===sid) delete roles[k]; });
      out.studentRoles=roles;
    }
    return out;
  });
  db.lessons=(db.lessons||[]).map(l=>{
    if(!Array.isArray(l.studentIds)) return l;
    return {...l,studentIds:l.studentIds.filter(x=>String(x)!==sid)};
  });
};

const deleteStudentCloudArtifacts=async s=>{
  if(!cloudDb||!s) return [];
  const failures=[];
  const attempt=async(label,fn)=>{try{await fn();}catch(err){console.error(`Delete ${label}:`,err);failures.push(label);}};
  const pid=publicProfileIdFor(s);
  if(pid){
    await attempt("фото",()=>deleteDoc(doc(cloudDb,"rems_student_media",pid)));
    studentMediaCache.delete(pid);
    await attempt("публічний профіль",()=>deleteDoc(doc(cloudDb,"rems_public_profiles",pid)));
  }

  await attempt("особистий розклад",async()=>{
    const snap=await getDocs(collection(cloudDb,"rems_student_schedules"));
    const norm=ackNameNorm(s.name);
    const docs=snap.docs.filter(d=>{
      const data=d.data()||{};
      return String(data.studentId||"")===String(s.id) || (data.name&&ackNameNorm(data.name)===norm);
    });
    await Promise.all(docs.map(d=>deleteDoc(d.ref)));
  });

  await attempt("підтвердження ознайомлення",async()=>{
    const snap=await getDocs(collection(cloudDb,ACK_COLLECTION));
    const norm=ackNameNorm(s.name);
    const docs=snap.docs.filter(d=>ackNameNorm((d.data()||{}).studentName)===norm);
    await Promise.all(docs.map(d=>deleteDoc(d.ref)));
  });

  return failures;
};

async function deleteStudentCompletely(id){
  const s=sBy(id); if(!s) return;
  const sid=String(id);
  const projectLinks=(db.assignments||[]).filter(a=>String(a.studentId)===sid).length;
  const eventLinks=(db.events||[]).filter(e=>Array.isArray(e.studentIds)&&e.studentIds.some(x=>String(x)===sid)).length;
  const lessonLinks=(db.lessons||[]).filter(l=>Array.isArray(l.studentIds)&&l.studentIds.some(x=>String(x)===sid)).length;
  const ok=confirm(
    `Видалити студента «${s.name}»?\n\n`+
    `Група: ${studentGroupLabel(s)}\n`+
    `Проєкти: ${projectLinks}\nПодії: ${eventLinks}\nВибіркові заняття: ${lessonLinks}\n\n`+
    "Студента буде прибрано з бази, усіх проєктів, конкретних дат, ролей та вибіркових занять. Також буде видалено його особистий розклад, фото, публічний профіль і підтвердження ознайомлення.\n\nПеред видаленням автоматично завантажиться резервна JSON-копія.\n\nПродовжити?"
  );
  if(!ok) return;

  const finalOk=confirm(`Підтверди ще раз: безповоротно видалити «${s.name}» з REMS Control?`);
  if(!finalOk) return;

  downloadStudentDeleteBackup(s);
  const before=clone(db);
  removeStudentFromCoreDb(id);
  cache();

  const saved=await save();
  if(!saved){
    db=before;
    cache();
    alert("Не вдалося видалити студента з хмарної бази. Дані відновлено локально; резервна копія вже завантажена.");
    openStudent(id);
    return;
  }

  const cloudFailures=await deleteStudentCloudArtifacts(s);
  document.querySelector("#studentDialog")?.close();
  students();
  if(cloudFailures.length){
    alert(`Студента видалено з REMS Control, але не вдалося очистити: ${cloudFailures.join(", ")}. Основна база вже очищена.`);
  }else{
    alert(`Студента «${s.name}» повністю видалено.`);
  }
}


function proEditableListHtml(id,items=[],placeholder="Новий пункт"){
  const rows=(Array.isArray(items)?items:[]);
  return `<div class="pro-edit-list" id="${id}">${rows.map(v=>`<div class="pro-edit-item"><input value="${esc(v||"")}" placeholder="${esc(placeholder)}"><button type="button" class="ghost pro-remove-item" title="Видалити">×</button></div>`).join("")}</div><button type="button" class="ghost pro-add-item" data-target="${id}" data-placeholder="${esc(placeholder)}">+ Додати</button>`;
}
function proExperienceEditorHtml(items=[]){
  const rows=Array.isArray(items)?items:[];
  return `<div id="stProExperienceRows" class="pro-exp-editor">${rows.map((x,i)=>proExperienceRowHtml(x,i)).join("")}</div><button type="button" class="ghost" id="addProExperience">+ Додати проєкт / досвід</button>`;
}
function proExperienceRowHtml(x={},i=0){
  return `<div class="pro-exp-edit-row" data-index="${i}">
    <div class="pro-exp-edit-grid">
      <label>Проєкт<input class="pro-project" value="${esc(x.project||"")}" placeholder="Назва проєкту"></label>
      <label>Роль / функція<input class="pro-role" value="${esc(x.role||"")}" placeholder="Напр. асистент режисера"></label>
      <label>Період / рік<input class="pro-period" value="${esc(x.period||"")}" placeholder="2025 або 2024–2025"></label>
      <label>Категорія<input class="pro-category" value="${esc(x.category||"")}" placeholder="Концерти / TV / Кліпи..."></label>
    </div>
    <div class="pro-exp-edit-actions"><label class="mini-check"><input class="pro-public" type="checkbox" ${x.public===false?"":"checked"}> показувати на сайті</label><button type="button" class="danger pro-remove-exp">Видалити цей запис</button></div>
  </div>`;
}
function proLinksEditorHtml(items=[]){
  const rows=Array.isArray(items)?items:[];
  return `<div id="stProLinksRows" class="pro-links-editor">${rows.map((x,i)=>proLinkRowHtml(x,i)).join("")}</div><button type="button" class="ghost" id="addProLink">+ Додати посилання</button>`;
}
function proLinkRowHtml(x={},i=0){return `<div class="pro-link-row" data-index="${i}"><input class="pro-link-label" value="${esc(x.label||"")}" placeholder="Назва / що це за робота"><input class="pro-link-url" value="${esc(x.url||"")}" placeholder="https://..."><label class="mini-check"><input class="pro-link-public" type="checkbox" ${x.public===false?"":"checked"}> на сайт</label><button type="button" class="danger pro-remove-link">Видалити</button></div>`;}
function proCustomSectionsHtml(items=[]){
  const rows=Array.isArray(items)?items:[];
  return `<div id="stProCustomSections" class="pro-custom-sections">${rows.map((x,i)=>proCustomSectionHtml(x,i)).join("")}</div><button type="button" class="ghost" id="addProCustomSection">+ Додати власний блок</button>`;
}
function proCustomSectionHtml(x={},i=0){
  const lines=Array.isArray(x.items)?x.items.join("\n"):(x.text||"");
  return `<div class="pro-custom-block" data-index="${i}"><div class="pro-custom-head"><input class="pro-custom-title" value="${esc(x.title||"")}" placeholder="Назва блоку, напр. Мови"><label class="mini-check"><input class="pro-custom-public" type="checkbox" ${x.public===false?"":"checked"}> показувати на сайті</label><button type="button" class="danger pro-remove-custom">Видалити блок</button></div><textarea class="pro-custom-items" rows="4" placeholder="Кожен пункт з нового рядка">${esc(lines)}</textarea></div>`;
}
function bindProfessionalEditorControls(){
  document.querySelectorAll('.pro-add-item').forEach(btn=>btn.onclick=()=>{
    const box=document.getElementById(btn.dataset.target); if(!box) return;
    box.insertAdjacentHTML('beforeend',`<div class="pro-edit-item"><input value="" placeholder="${esc(btn.dataset.placeholder||'Новий пункт')}"><button type="button" class="ghost pro-remove-item" title="Видалити">×</button></div>`);
    bindProfessionalEditorControls();
    box.lastElementChild?.querySelector('input')?.focus();
  });
  document.querySelectorAll('.pro-remove-item').forEach(btn=>btn.onclick=()=>btn.closest('.pro-edit-item')?.remove());
  document.querySelectorAll('.pro-remove-exp').forEach(btn=>btn.onclick=()=>btn.closest('.pro-exp-edit-row')?.remove());
  document.querySelectorAll('.pro-remove-custom').forEach(btn=>btn.onclick=()=>btn.closest('.pro-custom-block')?.remove());
  document.querySelectorAll('.pro-remove-link').forEach(btn=>btn.onclick=()=>btn.closest('.pro-link-row')?.remove());
  const ae=document.getElementById('addProExperience'); if(ae) ae.onclick=()=>{const box=document.getElementById('stProExperienceRows');box.insertAdjacentHTML('beforeend',proExperienceRowHtml({},box.children.length));bindProfessionalEditorControls();box.lastElementChild?.querySelector('.pro-project')?.focus();};
  const al=document.getElementById('addProLink'); if(al) al.onclick=()=>{const box=document.getElementById('stProLinksRows');box.insertAdjacentHTML('beforeend',proLinkRowHtml({},box.children.length));bindProfessionalEditorControls();box.lastElementChild?.querySelector('.pro-link-label')?.focus();};
  const ac=document.getElementById('addProCustomSection'); if(ac) ac.onclick=()=>{const box=document.getElementById('stProCustomSections');box.insertAdjacentHTML('beforeend',proCustomSectionHtml({},box.children.length));bindProfessionalEditorControls();box.lastElementChild?.querySelector('.pro-custom-title')?.focus();};
}
function readProList(id){return [...document.querySelectorAll(`#${id} .pro-edit-item input`)].map(x=>x.value.trim()).filter(Boolean);}
function readProExperience(){return [...document.querySelectorAll('#stProExperienceRows .pro-exp-edit-row')].map(row=>({project:row.querySelector('.pro-project')?.value.trim()||'',role:row.querySelector('.pro-role')?.value.trim()||'',period:row.querySelector('.pro-period')?.value.trim()||'',category:row.querySelector('.pro-category')?.value.trim()||'',public:row.querySelector('.pro-public')?.checked!==false})).filter(x=>x.project||x.role||x.period||x.category);}
function readProLinks(){return [...document.querySelectorAll('#stProLinksRows .pro-link-row')].map(row=>({label:row.querySelector('.pro-link-label')?.value.trim()||'',url:row.querySelector('.pro-link-url')?.value.trim()||'',public:row.querySelector('.pro-link-public')?.checked!==false})).filter(x=>x.url);}
function readProCustomSections(){return [...document.querySelectorAll('#stProCustomSections .pro-custom-block')].map(row=>({title:row.querySelector('.pro-custom-title')?.value.trim()||'',items:String(row.querySelector('.pro-custom-items')?.value||'').split(/\n+/).map(x=>x.trim()).filter(Boolean),public:row.querySelector('.pro-custom-public')?.checked!==false})).filter(x=>x.title);}
(function injectProEditorStyles(){if(document.getElementById('remsProEditorV24'))return;const st=document.createElement('style');st.id='remsProEditorV24';st.textContent=`
.pro-builder{grid-column:1/-1;border:1px solid #dbe4f0;border-radius:16px;padding:16px;background:#f8fafc;display:grid;gap:14px}.pro-builder h4{margin:0}.pro-builder-note{font-size:13px;color:#64748b}.pro-edit-list{display:grid;gap:8px}.pro-edit-item{display:flex;gap:8px}.pro-edit-item input{flex:1}.pro-edit-item .pro-remove-item{width:42px;font-size:22px;padding:4px}.pro-exp-editor,.pro-custom-sections,.pro-links-editor{display:grid;gap:12px}.pro-link-row{display:grid;grid-template-columns:1.2fr 2fr auto auto;gap:8px;align-items:center;border:1px solid #dbe4f0;border-radius:12px;padding:10px;background:#fff}.pro-exp-edit-row,.pro-custom-block{border:1px solid #dbe4f0;border-radius:14px;padding:12px;background:#fff}.pro-exp-edit-grid{display:grid;grid-template-columns:2fr 1.5fr 1fr 1.2fr;gap:10px}.pro-exp-edit-actions,.pro-custom-head{display:flex;align-items:center;gap:10px;margin-top:10px;flex-wrap:wrap}.pro-exp-edit-actions .danger,.pro-custom-head .danger{margin-left:auto}.pro-custom-head .pro-custom-title{flex:1;min-width:240px}.pro-custom-block textarea{width:100%;margin-top:10px}.mini-check{display:flex!important;align-items:center;gap:6px!important;font-size:13px}.mini-check input{width:auto!important}.pro-section-title{display:flex;justify-content:space-between;align-items:end;gap:10px}.pro-section-title small{color:#64748b;font-weight:400}@media(max-width:800px){.pro-link-row{grid-template-columns:1fr}.pro-exp-edit-grid{grid-template-columns:1fr}.pro-exp-edit-actions .danger,.pro-custom-head .danger{margin-left:0}.pro-custom-head{align-items:stretch;flex-direction:column}.pro-custom-head .pro-custom-title{min-width:0}}
`;document.head.appendChild(st);})();

function editStudent(id){
  const s=sBy(id); if(!s) return;
  const q=importedQuestionnaireForStudent(s)||{};
  $("#studentDialogBody").innerHTML=`<div class="student-profile">
    <div class="profile-head"><div><h2>Редагувати картку</h2><div class="muted">${esc(s.name)}</div></div></div>
    <form id="studentEditForm" class="profile-edit-form" style="margin-top:18px">
      <label class="full">Група<input id="stGroup" value="${esc(s.group||"")}" list="studentGroupsList" placeholder="Наприклад: РЕМС-44"><datalist id="studentGroupsList">${availableGroups().map(g=>`<option value="${esc(g)}"></option>`).join("")}</datalist></label>
      <label>Телефон<input id="stPhone" value="${esc(s.phone||q.phone||"")}" placeholder="+380..."></label>
      <label>Email<input id="stEmail" type="email" value="${esc(s.email||q.email||"")}"></label>
      <label>Дата народження<input id="stBirthDate" type="date" value="${esc(s.birthDate||q.birthDate||"")}"></label>
      <label>Instagram<input id="stInstagram" value="${esc(s.instagram||q.instagram||"")}" placeholder="@username або посилання"></label>
      <label>Telegram<input id="stTelegram" value="${esc(s.telegram||q.telegram||"")}" placeholder="@username"></label>
      <div class="full shared-photo-editor">
        <div class="shared-photo-preview" id="studentPhotoPreview">${sharedStudentPhoto(s)?`<img src="${sharedStudentPhoto(s)}" alt="${esc(s.name)}">`:'<span>Фото ще немає</span>'}</div>
        <div class="shared-photo-controls">
          <b>Спільне фото студента</b>
          <input id="studentPhotoFile" type="file" accept="image/*">
          <span class="muted">Одне фото для REMS Control і REMS-44.</span>
          <input id="stPhoto" value="${esc(s.photoUrl||"")}" placeholder="Або старе посилання https://...">
          <button type="button" class="ghost" id="removeStudentPhoto">Прибрати фото</button>
        </div>
      </div>
      <label class="full">Резюме - посилання<input id="stResume" value="${esc(s.resumeUrl||"")}" placeholder="https://..."></label>
      <label class="full">Портфоліо - посилання<input id="stPortfolio" value="${esc(s.portfolioUrl||"")}" placeholder="https://..."></label>
      <label class="full">Відео / роботи - посилання<input id="stWorks" value="${esc(s.worksUrl||"")}" placeholder="https://..."></label>
      ${(()=>{const rp=studentProfessionalProfile(s);return `
      <div class="resume-edit-section"><b>Професійний профіль - повний конструктор</b><div class="muted">Тут можна додавати, змінювати і видаляти окремі пункти, записи досвіду та цілі власні блоки.</div></div>
      <label class="full">Професійний опис<textarea id="stProfSummary">${esc(rp.summary||"")}</textarea></label>
      <div class="pro-builder"><div class="pro-section-title"><h4>Ролі / професійні напрями</h4><small>Кожен пункт окремо</small></div>${proEditableListHtml("stProfRolesList",rp.roles||[],"Напр. режисер-постановник")}</div>
      <div class="pro-builder"><div class="pro-section-title"><h4>Навички</h4><small>Можна додати або видалити будь-яку</small></div>${proEditableListHtml("stProfSkillsList",rp.skills||[],"Напр. робота з артистами")}</div>
      <div class="pro-builder"><div class="pro-section-title"><h4>Програми / інструменти</h4><small>Кожна програма окремо</small></div>${proEditableListHtml("stProfProgramsList",rp.programs||[],"Напр. DaVinci Resolve")}</div>
      <div class="pro-builder"><div class="pro-section-title"><h4>Професійний досвід</h4><small>Кожен проєкт можна редагувати, видалити або приховати із сайту</small></div>${proExperienceEditorHtml(rp.structuredExperience||[])}</div>
      <div class="pro-builder"><div class="pro-section-title"><h4>Посилання / роботи / портфоліо</h4><small>Посилання з резюме вже перенесені; кожне можна змінити, видалити або приховати із сайту</small></div>${proLinksEditorHtml(rp.links||[])}</div>
      <div class="pro-builder"><div class="pro-section-title"><h4>Власні блоки</h4><small>Напр. «Мови», «Освіта», «Нагороди», «Додаткові компетенції»</small></div>${proCustomSectionsHtml(rp.customSections||[])}</div>
      <details class="full"><summary>Оригінальний текст резюме / чернетка</summary><label class="full" style="margin-top:10px">Текст<textarea id="stProfExperience" style="min-height:180px">${esc(rp.experience||"")}</textarea></label></details>
      <div class="resume-edit-section"><b>Кастингові / зовнішні дані</b><div class="muted">Не визначаються автоматично за фото - заповнюються лише фактичні дані.</div></div>
      <label>Ігровий вік<input id="stCastAge" value="${esc(rp.casting.playingAge||"")}" placeholder="Напр. 18–24"></label>
      <label>Зріст<input id="stCastHeight" value="${esc(rp.casting.height||"")}" placeholder="Напр. 178 см"></label>
      <label>Вага<input id="stCastWeight" value="${esc(rp.casting.weight||"")}" placeholder="Напр. 60 кг"></label>
      <label>Розмір одягу<input id="stCastClothing" value="${esc(rp.casting.clothingSize||"")}"></label>
      <label>Розмір взуття<input id="stCastShoe" value="${esc(rp.casting.shoeSize||"")}"></label>
      <label>Форма фінансування<input id="stFunding" value="${esc(s.academicProfile?.funding||rp.questionnaire?.funding||"")}" placeholder="Бюджет / Контракт"></label>
      <label>Типаж<input id="stCastType" value="${esc(rp.casting.type||"")}"></label>
      <label>Волосся<input id="stCastHair" value="${esc(rp.casting.hair||"")}"></label>
      <label>Очі<input id="stCastEyes" value="${esc(rp.casting.eyes||"")}"></label>
      <label>Спеціальні навички<input id="stCastSpecial" value="${esc(rp.casting.special||"")}" placeholder="танець, вокал, спорт..."></label>
      `})()}
      <label class="full">Нотатки<textarea id="stNotes" placeholder="Внутрішні нотатки">${esc(s.notes||"")}</textarea></label>
      <div class="full profile-actions">
        <button type="button" class="danger" id="deleteStudentBtn" style="margin-right:auto">Видалити студента</button>
        <button type="button" class="ghost" id="cancelStudentEdit">Скасувати</button>
        <button type="submit" class="primary">Зберегти</button>
      </div>
    </form>
  </div>`;

  $("#cancelStudentEdit").onclick=()=>openStudent(id);
  bindProfessionalEditorControls();
  if($("#deleteStudentBtn")) $("#deleteStudentBtn").onclick=()=>deleteStudentCompletely(id);

  let removeStudentPhotoRequested=false;
  if($("#removeStudentPhoto")) $("#removeStudentPhoto").onclick=()=>{
    removeStudentPhotoRequested=true;
    if($("#studentPhotoFile")) $("#studentPhotoFile").value="";
    $("#stPhoto").value="";
    $("#studentPhotoPreview").innerHTML="<span>Фото буде прибрано</span>";
  };
  if($("#studentPhotoFile")) $("#studentPhotoFile").onchange=async e=>{
    const f=e.target.files?.[0]; if(!f) return;
    try{
      const data=await compressStudentPhoto(f);
      removeStudentPhotoRequested=false;
      $("#studentPhotoPreview").innerHTML=`<img src="${data}" alt="Попередній перегляд">`;
    }catch(err){alert(err.message||"Не вдалося обробити фото.");e.target.value="";}
  };

  $("#studentEditForm").onsubmit=async e=>{
    e.preventDefault();

    const submit=e.submitter || $("#studentEditForm button[type='submit']");
    if(submit){
      submit.disabled=true;
      submit.textContent="Збереження…";
    }

    const patch={
      group:$("#stGroup").value.trim()||s.group||"",
      phone:$("#stPhone").value.trim(),
      email:$("#stEmail").value.trim(),
      birthDate:$("#stBirthDate").value,
      instagram:$("#stInstagram").value.trim(),
      telegram:$("#stTelegram").value.trim(),
      photoUrl:$("#stPhoto").value.trim(),
      resumeUrl:$("#stResume").value.trim(),
      portfolioUrl:$("#stPortfolio").value.trim(),
      worksUrl:$("#stWorks").value.trim(),
      notes:$("#stNotes").value.trim(),
      professionalProfile:{
        summary:$("#stProfSummary")?.value.trim()||"",
        roles:readProList("stProfRolesList"),
        skills:readProList("stProfSkillsList"),
        programs:readProList("stProfProgramsList"),
        experience:$("#stProfExperience")?.value.trim()||"",
        structuredExperience:readProExperience(),
        links:readProLinks(),
        customSections:readProCustomSections(),
        casting:{
          playingAge:$("#stCastAge")?.value.trim()||"",
          height:$("#stCastHeight")?.value.trim()||"",
          weight:$("#stCastWeight")?.value.trim()||"",
          clothingSize:$("#stCastClothing")?.value.trim()||"",
          shoeSize:$("#stCastShoe")?.value.trim()||"",
          type:$("#stCastType")?.value.trim()||"",
          hair:$("#stCastHair")?.value.trim()||"",
          eyes:$("#stCastEyes")?.value.trim()||"",
          special:$("#stCastSpecial")?.value.trim()||""
        }
      },
      academicProfile:{...(s.academicProfile||{}),funding:$("#stFunding")?.value.trim()||""}
    };

    const photoFile=$("#studentPhotoFile")?.files?.[0];
    let pendingPhotoData=null;
    if(photoFile){
      pendingPhotoData=await compressStudentPhoto(photoFile);
      patch.photoUrl="";
    }else if(removeStudentPhotoRequested){
      pendingPhotoData="";
      patch.photoUrl="";
      const pub=publicProfileFor(s);
      if(pub) patch.publicProfile={...pub,photo:""};
    }

    db.students=db.students.map(student =>
      String(student.id)===String(id) ? {...student,...patch} : student
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

    if(pendingPhotoData!==null){
      try{
        await saveStudentMedia(updated,pendingPhotoData);
      }catch(err){
        console.error("Student photo save failed:",err);
        alert("Картку збережено, але фото не вдалося записати окремо.");
      }
    }

    if(publicProfileIdFor(updated)){
      try{
        await publishOnePublicProfile(updated);
      }catch(err){
        console.error("Public sync failed:",err);
        alert("Фото збережено в REMS Control, але публічний сайт ще не оновився. Після оновлення Firestore Rules повтори збереження.");
      }
    }

    openStudent(id);
  };
}
function studentConflicts(id){
  return conflictGroupsForStudent(id).length;
}


(function injectWordExportStylesV70(){
  if(document.getElementById("remsWordExportStylesV70")) return;
  const st=document.createElement("style");
  st.id="remsWordExportStylesV70";
  st.textContent=`
    .projects-export-toolbar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;padding:12px 14px;border:1px solid #e5e7eb;border-radius:14px;background:#fff}
    .projects-export-toolbar>div{display:grid;gap:2px}.projects-export-toolbar small{color:#6b7280}
    .word-export-dialog{width:min(980px,96vw);max-height:92vh;border:0;border-radius:18px;padding:0;box-shadow:0 24px 70px rgba(0,0,0,.28)}
    .word-export-dialog::backdrop{background:rgba(17,24,39,.55)}
    .word-export-body{padding:20px;display:grid;gap:16px}
    .word-export-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding-bottom:14px;border-bottom:1px solid #e5e7eb}
    .word-export-head h2{margin:0}.word-export-head p{margin:4px 0 0;color:#6b7280;font-size:12px}
    .word-export-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:14px}
    .word-export-card{border:1px solid #e5e7eb;border-radius:14px;background:#fff;padding:14px;display:grid;gap:10px;min-width:0}
    .word-export-card h3{margin:0;font-size:14px}.word-export-card label{font-size:12px;color:#374151}
    .word-export-card input[type=text],.word-export-card input[type=date],.word-export-card select{width:100%;border:1px solid #dfe3e8;border-radius:10px;padding:9px 10px;font:inherit;background:#fff}
    .word-export-project-actions{display:flex;gap:7px;flex-wrap:wrap}
    .word-export-projects{max-height:300px;overflow:auto;display:grid;gap:7px;padding-right:4px}
    .word-export-project{display:flex;gap:9px;align-items:center;padding:8px 9px;border:1px solid #edf0f3;border-radius:10px;background:#fafafa;cursor:pointer}
    .word-export-project input{width:18px;height:18px}.word-export-project span{display:grid;gap:2px}.word-export-project small{color:#6b7280}
    .word-export-options{display:grid;gap:7px}.word-export-option{display:flex;gap:9px;align-items:flex-start;padding:7px 8px;border-radius:9px;background:#f8fafc}
    .word-export-option input{width:18px;height:18px;margin-top:1px}.word-export-option span{display:grid;gap:2px}.word-export-option small{color:#6b7280}
    .word-export-dates{display:grid;grid-template-columns:1fr 1fr;gap:9px}
    .word-export-actions{display:flex;justify-content:flex-end;align-items:center;gap:8px;padding-top:4px}.word-export-status{margin-right:auto;color:#6b7280;font-size:12px}
    @media(max-width:760px){.word-export-grid{grid-template-columns:1fr}.word-export-dates{grid-template-columns:1fr}.projects-export-toolbar{align-items:flex-start;flex-direction:column}}
  `;
  document.head.appendChild(st);
})();

const wordXmlEsc=value=>String(value??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;");
const wordFilenamePart=value=>String(value||"звіт").trim().replace(/[\\/:*?\"<>|]+/g,"-").replace(/\s+/g," ").slice(0,90)||"звіт";
const wordTextLines=value=>String(value??"").split(/\r?\n/);
const wordRun=(text,{bold=false,italic=false,size=20,color="",breakBefore=false}={})=>`<w:r>${breakBefore?'<w:br/>':''}<w:rPr>${bold?'<w:b/>':''}${italic?'<w:i/>':''}${size?`<w:sz w:val="${size}"/><w:szCs w:val="${size}"/>`:''}${color?`<w:color w:val="${color}"/>`:''}<w:lang w:val="uk-UA"/></w:rPr>${wordTextLines(text).map((line,i)=>`${i?'<w:br/>':''}<w:t xml:space="preserve">${wordXmlEsc(line)}</w:t>`).join("")}</w:r>`;
const wordParagraph=(text,{style="",bold=false,italic=false,size=20,color="",align="",spaceAfter=100,pageBreakBefore=false}={})=>`<w:p><w:pPr>${style?`<w:pStyle w:val="${style}"/>`:''}${align?`<w:jc w:val="${align}"/>`:''}<w:spacing w:after="${spaceAfter}"/>${pageBreakBefore?'<w:pageBreakBefore/>':''}</w:pPr>${wordRun(text,{bold,italic,size,color})}</w:p>`;
const wordCell=(text,{bold=false,fill="",width=0}={})=>`<w:tc><w:tcPr>${width?`<w:tcW w:w="${width}" w:type="dxa"/>`:''}${fill?`<w:shd w:fill="${fill}"/>`:''}<w:vAlign w:val="top"/></w:tcPr>${wordParagraph(text,{bold,size:18,spaceAfter:40})}</w:tc>`;
const wordTable=(headers,rows,widths=[])=>`<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="0" w:type="auto"/><w:tblLayout w:type="autofit"/><w:tblLook w:val="04A0" w:firstRow="1" w:lastRow="0" w:firstColumn="1" w:lastColumn="0" w:noHBand="0" w:noVBand="1"/></w:tblPr><w:tblGrid>${headers.map((_,i)=>`<w:gridCol w:w="${widths[i]||1800}"/>`).join("")}</w:tblGrid><w:tr><w:trPr><w:tblHeader/></w:trPr>${headers.map((h,i)=>wordCell(h,{bold:true,fill:"E9EDF3",width:widths[i]||0})).join("")}</w:tr>${rows.map(row=>`<w:tr><w:trPr><w:cantSplit/></w:trPr>${headers.map((_,i)=>wordCell(row[i]??"",{width:widths[i]||0})).join("")}</w:tr>`).join("")}</w:tbl>`;
const wordPageBreak=()=>'<w:p><w:r><w:br w:type="page"/></w:r></w:p>';

const wordProjectStatus=p=>{
  const meta=projectTimelineMeta(p);
  return ["Актуальний","Майбутній","Без дат","Завершений"][meta.rank]||"-";
};
const wordReportEvents=(projectId,options={})=>eventsFor(projectId).filter(e=>(!options.from||String(e.date)>=options.from)&&(!options.to||String(e.date)<=options.to));
const wordReportStudentAllowed=(st,options={})=>!options.group||studentGroupLabel(st)===options.group;
const wordReportPeopleForEvent=(e,options={})=>studentsForEvent(e).filter(st=>wordReportStudentAllowed(st,options));
const wordReportProjectTeam=(projectId,options={})=>projectStudents(projectId).filter(st=>wordReportStudentAllowed(st,options));
const wordReportGroups=(options={})=>options.group?[options.group]:[...new Set((db.students||[]).map(studentGroupLabel))].sort((a,b)=>a.localeCompare(b,"uk"));
const wordProjectDatesInRange=(projectId,options={})=>[...new Set([
  ...(pBy(projectId)?.plannedDates||[]).map(String),
  ...wordReportEvents(projectId,options).map(e=>String(e.date||""))
].filter(d=>(!options.from||d>=options.from)&&(!options.to||d<=options.to)))].sort();

const wordProjectSummaryRow=(p,options,allAcks=[])=>{
  const evs=wordReportEvents(p.id,options);
  const team=wordReportProjectTeam(p.id,options);
  const dates=wordProjectDatesInRange(p.id,options);
  const slots=evs.reduce((sum,e)=>sum+wordReportPeopleForEvent(e,options).length,0);
  let ack="-";
  if(options.acknowledgements){
    let yes=0,total=0;
    evs.forEach(e=>{const s=acknowledgementStats(e,allAcks);const assigned=s.assigned.filter(st=>wordReportStudentAllowed(st,options));const yesNames=new Set(s.yes.map(x=>String(x.id)));yes+=assigned.filter(x=>yesNames.has(String(x.id))).length;total+=assigned.length;});
    ack=total?`${yes}/${total}`:"-";
  }
  return [projectReportingTitle(p),wordProjectStatus(p),dates.length?`${fullfmt(dates[0])} - ${fullfmt(dates[dates.length-1])}`:"-",String(evs.length),String(team.length),String(slots),ack];
};

const wordProjectSections=(p,options,allAcks=[])=>{
  const out=[];
  const evs=wordReportEvents(p.id,options);
  const team=wordReportProjectTeam(p.id,options);
  const dates=wordProjectDatesInRange(p.id,options);
  const groupLabel=options.group||"Усі групи";

  out.push(wordParagraph(projectReportingTitle(p),{style:"Heading1",size:30,bold:true,spaceAfter:120}));
  if(options.summary){
    out.push(wordParagraph("Загальна інформація",{style:"Heading2",size:24,bold:true}));
    const period=dates.length?`${fullfmt(dates[0])} - ${fullfmt(dates[dates.length-1])}`:"Дати не вказані";
    const summaryRows=[
      ["Статус",wordProjectStatus(p)],
      ["Період",period],
      ["Фільтр за групою",groupLabel],
      ["Подій у вибраному періоді",String(evs.length)],
      ["Студентів у команді",String(team.length)],
      ["Задіяностей у робочих блоках",String(evs.reduce((n,e)=>n+wordReportPeopleForEvent(e,options).length,0))],
      ["Розподіл команди по групах",studentGroupSummary(team)||"-"]
    ];
    const reporting=projectReportingData(p);
    if(String(reporting.type||"").trim()) summaryRows.push(["Тип проєкту",String(reporting.type).trim()]);
    if(String(reporting.venue||"").trim()||String(reporting.city||"").trim()) summaryRows.push(["Місце проведення",[reporting.venue,reporting.city].filter(Boolean).join(", ")]);
    if(String(reporting.organizer||"").trim()) summaryRows.push(["Організатор / компанія",String(reporting.organizer).trim()]);
    if(String(reporting.participation||"").trim()) summaryRows.push(["Характер участі студентів",String(reporting.participation).trim()]);
    if(String(reporting.description||"").trim()) summaryRows.push(["Опис для звітності",String(reporting.description).trim()]);
    else if(String(p.description||"").trim()) summaryRows.push(["Опис",String(p.description).trim()]);
    if(String(reporting.readyText||"").trim()) summaryRows.push(["Готове формулювання для звіту",String(reporting.readyText).trim()]);
    out.push(wordTable(["Показник","Значення"],summaryRows,[3100,10300]));
  }

  if(options.events){
    out.push(wordParagraph("Календар і події",{style:"Heading2",size:24,bold:true,spaceAfter:80}));
    const rows=evs.map(e=>[
      fullfmt(e.date),
      eventTimeText(e)||"-",
      String(e.type||"Подія"),
      String(e.location||"-"),
      String(wordReportPeopleForEvent(e,options).length),
      String(e.note||"")
    ]);
    out.push(rows.length?wordTable(["Дата","Час","Подія","Локація","Учасники","Примітка"],rows,[1850,1250,2500,2300,1200,4200]):wordParagraph("Подій у вибраному періоді немає.",{italic:true,color:"666666"}));
  }

  if(options.team){
    out.push(wordParagraph("Команда проєкту",{style:"Heading2",size:24,bold:true,spaceAfter:80}));
    const rows=team.map((st,i)=>{
      const studentEvents=evs.filter(e=>wordReportPeopleForEvent(e,options).some(x=>String(x.id)===String(st.id)));
      const roles=[...new Set(studentEvents.map(e=>studentRoleForEvent(e,st.id)).filter(Boolean))];
      return [String(i+1),st.name,studentGroupLabel(st),String(studentEvents.length),[...new Set(studentEvents.map(e=>fmt(e.date)))].join(", ")||"-",roles.join("; ")||"-"];
    });
    out.push(rows.length?wordTable(["№","Студент","Група","Блоків","Дати","Функції / ролі"],rows,[600,3000,1500,1000,3300,4200]):wordParagraph("У вибраному фільтрі студентів немає.",{italic:true,color:"666666"}));
  }

  if(options.engagement){
    out.push(wordParagraph("Задіяність у робочих блоках",{style:"Heading2",size:24,bold:true,spaceAfter:80}));
    const rows=[];
    evs.forEach(e=>wordReportPeopleForEvent(e,options).forEach(st=>rows.push([
      fullfmt(e.date),
      eventTimeText(e)||"-",
      String(e.type||"Подія"),
      st.name,
      studentGroupLabel(st),
      studentRoleForEvent(e,st.id)||"-"
    ])));
    out.push(rows.length?wordTable(["Дата","Час","Робочий блок","Студент","Група","Функція"],rows,[1700,1100,2400,3000,1500,3600]):wordParagraph("Задіяностей у вибраному періоді немає.",{italic:true,color:"666666"}));
  }

  if(options.occupancy){
    out.push(wordParagraph("Зайнятість і вільні студенти за датами",{style:"Heading2",size:24,bold:true,spaceAfter:80}));
    const rows=[];
    const groups=wordReportGroups(options);
    dates.forEach(date=>groups.forEach(group=>{
      const cohort=(db.students||[]).filter(st=>studentGroupLabel(st)===group);
      const inProject=cohort.filter(st=>evs.some(e=>String(e.date)===date&&studentsForEvent(e).some(x=>String(x.id)===String(st.id))));
      const inProjectIds=new Set(inProject.map(st=>String(st.id)));
      const busyElsewhere=cohort.filter(st=>!inProjectIds.has(String(st.id))&&studentActivitiesOnDate(st.id,date).length);
      const free=cohort.filter(st=>!studentActivitiesOnDate(st.id,date).length);
      const conflicts=inProject.filter(st=>studentActivitiesOnDate(st.id,date).some(a=>a.source==="lesson"||String(a.projectId)!==String(p.id)));
      const busyText=busyElsewhere.map(st=>`${st.name}: ${studentBusyLabelsOnDate(st.id,date).join("; ")}`).join("\n")||"-";
      rows.push([
        fullfmt(date),group,
        `${inProject.length}\n${inProject.map(st=>st.name).join("\n")||"-"}`,
        `${busyElsewhere.length}\n${busyText}`,
        `${free.length}\n${free.map(st=>st.name).join("\n")||"-"}`,
        conflicts.length?`${conflicts.length}\n${conflicts.map(st=>st.name).join("\n")}`:"0"
      ]);
    }));
    out.push(rows.length?wordTable(["Дата","Група","У проєкті","Зайняті іншим","Вільні","Перетини"],rows,[1800,1300,3000,3900,3000,1800]):wordParagraph("Для проєкту немає дат у вибраному періоді.",{italic:true,color:"666666"}));
  }

  if(options.conflicts){
    out.push(wordParagraph("Конфлікти зайнятості",{style:"Heading2",size:24,bold:true,spaceAfter:80}));
    const dateSet=new Set(dates);
    const rows=[];
    team.forEach(st=>conflictGroupsForStudent(st.id).filter(g=>dateSet.has(g.date)).forEach(g=>{
      const acts=g.events.map(a=>`${activityTitle(a)} (${activityMeta(a)||"час не визначено"})`).join("; ");
      rows.push([st.name,studentGroupLabel(st),fullfmt(g.date),acts]);
    }));
    out.push(rows.length?wordTable(["Студент","Група","Дата","Що перетинається"],rows,[3000,1600,2100,7300]):wordParagraph("Конфліктів у команді на датах проєкту не знайдено.",{italic:true,color:"247A37"}));
  }

  if(options.acknowledgements){
    out.push(wordParagraph("Ознайомлення студентів",{style:"Heading2",size:24,bold:true,spaceAfter:80}));
    const rows=evs.map(e=>{
      const s=acknowledgementStats(e,allAcks);
      const assigned=s.assigned.filter(st=>wordReportStudentAllowed(st,options));
      const yesSet=new Set(s.yes.map(st=>String(st.id)));
      const yes=assigned.filter(st=>yesSet.has(String(st.id)));
      const no=assigned.filter(st=>!yesSet.has(String(st.id)));
      return [fullfmt(e.date),String(e.type||"Подія"),`${yes.length}/${assigned.length}`,no.map(st=>`${st.name} · ${studentGroupLabel(st)}`).join("\n")||"-"];
    });
    out.push(rows.length?wordTable(["Дата","Подія","Ознайомились","Ще не ознайомились"],rows,[1900,3200,1700,7200]):wordParagraph("У проєкті немає подій для перевірки ознайомлення.",{italic:true,color:"666666"}));
  }
  return out.join("");
};

const ensureJsZipForWord=async()=>{
  if(window.JSZip) return window.JSZip;
  const urls=[
    "./jszip.min.js",
    "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"
  ];
  let lastErr=null;
  for(const url of urls){
    try{
      await new Promise((resolve,reject)=>{
        const script=document.createElement("script");
        script.src=url; script.async=true;
        script.onload=resolve; script.onerror=()=>reject(new Error(`Не вдалося завантажити ${url}`));
        document.head.appendChild(script);
      });
      if(window.JSZip) return window.JSZip;
    }catch(err){lastErr=err;}
  }
  throw lastErr||new Error("Не вдалося підготувати модуль створення Word-файлу.");
};

const buildWordDocxBlob=async(title,bodyXml)=>{
  const JSZip=await ensureJsZipForWord();
  const zip=new JSZip();
  const now=new Date().toISOString();
  zip.file("[Content_Types].xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`);
  zip.folder("_rels").file(".rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`);
  zip.folder("docProps").file("core.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${wordXmlEsc(title)}</dc:title><dc:creator>REMS Control</dc:creator><cp:lastModifiedBy>REMS Control</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${now}</dcterms:modified></cp:coreProperties>`);
  zip.folder("docProps").file("app.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>REMS Control</Application><Company>КНУКіМ</Company><AppVersion>1.0</AppVersion></Properties>`);
  const word=zip.folder("word");
  word.folder("_rels").file("document.xml.rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`);
  word.file("styles.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Aptos" w:hAnsi="Aptos" w:eastAsia="Aptos" w:cs="Aptos"/><w:sz w:val="20"/><w:szCs w:val="20"/><w:lang w:val="uk-UA"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="100" w:line="240" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style><w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:rPr><w:b/><w:sz w:val="38"/><w:szCs w:val="38"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:uiPriority w:val="9"/><w:qFormat/><w:pPr><w:keepNext/><w:keepLines/><w:spacing w:before="180" w:after="100"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="30"/><w:szCs w:val="30"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:uiPriority w:val="9"/><w:qFormat/><w:pPr><w:keepNext/><w:keepLines/><w:spacing w:before="160" w:after="80"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr></w:style><w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/><w:tblPr><w:tblBorders><w:top w:val="single" w:sz="4" w:color="C9CED6"/><w:left w:val="single" w:sz="4" w:color="C9CED6"/><w:bottom w:val="single" w:sz="4" w:color="C9CED6"/><w:right w:val="single" w:sz="4" w:color="C9CED6"/><w:insideH w:val="single" w:sz="4" w:color="D9DDE3"/><w:insideV w:val="single" w:sz="4" w:color="D9DDE3"/></w:tblBorders><w:tblCellMar><w:top w:w="80" w:type="dxa"/><w:left w:w="90" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/><w:right w:w="90" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style></w:styles>`);
  word.file("document.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${bodyXml}<w:sectPr><w:pgSz w:w="16838" w:h="11906" w:orient="landscape"/><w:pgMar w:top="720" w:right="720" w:bottom="720" w:left="720" w:header="360" w:footer="360" w:gutter="0"/><w:cols w:space="708"/><w:docGrid w:linePitch="360"/></w:sectPr></w:body></w:document>`);
  return zip.generateAsync({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",compression:"DEFLATE",compressionOptions:{level:6}});
};

async function downloadProjectsWordReport(projectIds,options={}){
  const ids=[...new Set((projectIds||[]).map(String))].filter(id=>pBy(id));
  if(!ids.length) throw new Error("Оберіть хоча б один проєкт.");
  const projects=ids.map(pBy).filter(Boolean);
  const title=String(options.title||"").trim()||(projects.length===1?`Звіт по проєкту «${projects[0].name}»`:"Зведений звіт по проєктах");
  const allAcks=options.acknowledgements?await loadAllAcknowledgements():[];
  const generated=new Date().toLocaleString("uk-UA",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});
  let body=wordParagraph(title,{style:"Title",size:38,bold:true,spaceAfter:80})+
    wordParagraph(`Сформовано REMS Control · ${generated}${options.group?` · Група: ${options.group}`:" · Усі групи"}${options.from||options.to?` · Період: ${options.from?fullfmt(options.from):"початок"} - ${options.to?fullfmt(options.to):"дотепер"}`:""}`,{italic:true,size:18,color:"666666",spaceAfter:160});

  if(projects.length>1&&options.summary){
    body+=wordParagraph("Зведення по вибраних проєктах",{style:"Heading1",size:30,bold:true});
    body+=wordTable(["Проєкт","Статус","Період","Подій","Команда","Задіяностей","Ознайомлення"],projects.map(p=>wordProjectSummaryRow(p,options,allAcks)),[2700,1400,3000,900,1000,1200,1600]);
  }
  projects.forEach((p,i)=>{
    if(i||projects.length>1) body+=wordPageBreak();
    body+=wordProjectSections(p,options,allAcks);
  });
  const blob=await buildWordDocxBlob(title,body);
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  const date=localIsoDate().replace(/-/g,".");
  a.download=`${wordFilenamePart(title)} ${date}.docx`;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1500);
}

function ensureWordExportDialog(){
  let d=document.querySelector("#wordExportDialog");
  if(d) return d;
  d=document.createElement("dialog");
  d.id="wordExportDialog";d.className="word-export-dialog";
  d.innerHTML='<div id="wordExportBody"></div>';
  document.body.appendChild(d);
  return d;
}

function openProjectsWordExport(prefillProjectIds=[]){
  const d=ensureWordExportDialog();
  const holder=d.querySelector("#wordExportBody");
  const ordered=sortedProjectsByRelevance();
  const today=localIsoDate();
  const defaultIds=prefillProjectIds.length?new Set(prefillProjectIds.map(String)):new Set(ordered.filter(p=>projectTimelineMeta(p,today).rank<=1).map(p=>String(p.id)));
  if(!defaultIds.size) ordered.forEach(p=>defaultIds.add(String(p.id)));
  const semesterStart="";
  const semesterEnd="";
  holder.innerHTML=`<div class="word-export-body">
    <div class="word-export-head"><div><h2>Експорт у Word</h2><p>Сформуйте звіт по одному або кількох проєктах із потрібними розділами.</p></div><button type="button" class="ghost" id="wordExportClose">Закрити</button></div>
    <div class="word-export-grid">
      <div class="word-export-card">
        <h3>1. Проєкти</h3>
        <div class="word-export-project-actions"><button type="button" class="ghost" id="wordPickActive">Актуальні й майбутні</button><button type="button" class="ghost" id="wordPickAll">Усі</button><button type="button" class="ghost" id="wordPickNone">Зняти вибір</button></div>
        <div class="word-export-projects">${ordered.map(p=>{
          const meta=projectTimelineMeta(p,today);const evs=eventsFor(p.id);const team=projectStudents(p.id);
          return `<label class="word-export-project"><input type="checkbox" data-word-project="${esc(String(p.id))}" ${defaultIds.has(String(p.id))?"checked":""}><span><b>${esc(p.name)}</b><small>${esc(wordProjectStatus(p))} · ${evs.length} подій · ${team.length} студентів</small></span></label>`;
        }).join("")||'<span class="muted">Проєктів немає.</span>'}</div>
      </div>
      <div class="word-export-card">
        <h3>2. Параметри</h3>
        <label>Назва документа<input type="text" id="wordExportTitle" value="${esc(prefillProjectIds.length===1&&pBy(prefillProjectIds[0])?`Звіт по проєкту «${pBy(prefillProjectIds[0]).name}»`:"Зведений звіт по проєктах")}"></label>
        <label>Група<select id="wordExportGroup">${groupOptionsHtml("","Усі групи")}</select></label>
        <div class="word-export-dates"><label>Від<input type="date" id="wordExportFrom" value="${esc(semesterStart)}"></label><label>До<input type="date" id="wordExportTo" value="${esc(semesterEnd)}"></label></div>
        <div class="word-export-options">
          <label class="word-export-option"><input type="checkbox" data-word-option="summary" checked><span><b>Загальна інформація</b><small>Статус, період, кількість подій, команда, групи.</small></span></label>
          <label class="word-export-option"><input type="checkbox" data-word-option="events" checked><span><b>Календар і події</b><small>Дати, час, локації, кількість учасників, примітки.</small></span></label>
          <label class="word-export-option"><input type="checkbox" data-word-option="team" checked><span><b>Команда</b><small>Студенти, групи, кількість задіяностей, дати й функції.</small></span></label>
          <label class="word-export-option"><input type="checkbox" data-word-option="engagement" checked><span><b>Задіяність</b><small>Хто працює в кожному робочому блоці та в якій функції.</small></span></label>
          <label class="word-export-option"><input type="checkbox" data-word-option="occupancy" checked><span><b>Зайнятість / вільні</b><small>По датах і групах: у проєкті, зайняті іншим, вільні та перетини.</small></span></label>
          <label class="word-export-option"><input type="checkbox" data-word-option="conflicts" checked><span><b>Конфлікти</b><small>Перетини проєктів і навчальних занять у студентів команди.</small></span></label>
          <label class="word-export-option"><input type="checkbox" data-word-option="acknowledgements" checked><span><b>Ознайомлення</b><small>Хто підтвердив ознайомлення і хто ще ні.</small></span></label>
        </div>
      </div>
    </div>
    <div class="word-export-actions"><span class="word-export-status" id="wordExportStatus"></span><button type="button" class="ghost" id="wordExportCancel">Скасувати</button><button type="button" class="primary" id="wordExportDownload">Сформувати Word</button></div>
  </div>`;
  if(!d.open) d.showModal();
  const close=()=>d.close();
  holder.querySelector("#wordExportClose").onclick=close;holder.querySelector("#wordExportCancel").onclick=close;
  const projectBoxes=()=>[...holder.querySelectorAll("[data-word-project]")];
  holder.querySelector("#wordPickAll").onclick=()=>projectBoxes().forEach(x=>x.checked=true);
  holder.querySelector("#wordPickNone").onclick=()=>projectBoxes().forEach(x=>x.checked=false);
  holder.querySelector("#wordPickActive").onclick=()=>projectBoxes().forEach(x=>{const p=pBy(x.dataset.wordProject);x.checked=!!p&&projectTimelineMeta(p,today).rank<=1;});
  holder.querySelector("#wordExportDownload").onclick=async()=>{
    const btn=holder.querySelector("#wordExportDownload");const status=holder.querySelector("#wordExportStatus");
    const ids=projectBoxes().filter(x=>x.checked).map(x=>String(x.dataset.wordProject));
    if(!ids.length){alert("Оберіть хоча б один проєкт.");return;}
    const options={title:holder.querySelector("#wordExportTitle").value.trim(),group:holder.querySelector("#wordExportGroup").value,from:holder.querySelector("#wordExportFrom").value,to:holder.querySelector("#wordExportTo").value};
    holder.querySelectorAll("[data-word-option]").forEach(x=>options[x.dataset.wordOption]=x.checked);
    if(options.from&&options.to&&options.from>options.to){alert("Дата «Від» не може бути пізнішою за дату «До».");return;}
    btn.disabled=true;btn.textContent="Формування…";status.textContent="Готую дані та Word-файл…";
    try{await downloadProjectsWordReport(ids,options);status.textContent="Word-файл сформовано.";}
    catch(err){console.error("Word export failed:",err);alert(err.message||"Не вдалося сформувати Word-файл.");status.textContent="Помилка формування.";}
    finally{btn.disabled=false;btn.textContent="Сформувати Word";}
  };
}

function projects(){
  const orderedProjects=sortedProjectsByRelevance();
  app.innerHTML=`<div class="projects-export-toolbar"><div><b>Проєкти</b><small>Звіт по одному, кількох або всіх проєктах із задіяністю, зайнятістю, групами та ознайомленням.</small></div><button type="button" class="primary" id="projectsWordExportBtn">Експорт у Word</button></div><div class="projects-grid-main">${orderedProjects.map(p=>{
    const assigned=projectStudents(p.id);
    const evs=eventsFor(p.id);
    const next=evs.find(e=>e.date>=localIsoDate())||evs[0];
    return `<button type="button" class="project-card project-open-card" data-project-id="${esc(String(p.id))}">
      <div class="project-card-header">
        <div style="display:flex;gap:12px;align-items:center;min-width:0">
          ${projectLogoHtml(p,"project-card-logo")}
          <div style="text-align:left;min-width:0">
            <h3 style="margin:0">${esc(p.name)}</h3>
            <div class="muted">${evs.length} подій · ${assigned.length} студентів</div>
            <div class="project-ack-line">Ознайомлення <b data-project-ack-count="${esc(String(p.id))}">…</b></div>
          </div>
        </div>
        <span class="project-open-arrow">→</span>
      </div>
      <div class="events">${evs.slice(0,4).map(e=>`<span class="event">${fmt(e.date)} · ${esc(e.type)}</span>`).join("")}${evs.length>4?`<span class="event">+${evs.length-4}</span>`:""}</div>
    </button>`;
  }).join("")||'<div class="empty">Проєктів ще немає.</div>'}</div>`;

  $$(".project-open-card").forEach(btn=>{
    btn.onclick=e=>{
      if(e.target.closest(".project-ack-line")) return openProjectAcknowledgements(btn.dataset.projectId);
      openProjectCard(btn.dataset.projectId);
    };
  });
  const projectsWordExportBtn=document.querySelector("#projectsWordExportBtn");
  if(projectsWordExportBtn) projectsWordExportBtn.onclick=()=>openProjectsWordExport();
  updateAckIndicators().catch(console.error);
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
  const planned=new Set((p.plannedDates||[]).filter(d=>String(d).startsWith(month)));
  const byDate={};
  evs.forEach(e=>(byDate[e.date] ||= []).push(e));
  const blanks=Array.from({length:firstDay},()=>'<div class="project-cal-day empty"></div>').join("");
  const cells=Array.from({length:daysInMonth},(_,i)=>{
    const day=i+1;
    const date=`${year}-${String(mon).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    const items=byDate[date]||[];
    const isPlanned=planned.has(date);
    const dow=new Date(date+"T12:00:00").getDay();
    const canOpen=items.length||isPlanned;
    return `<button class="project-cal-day ${dow===0||dow===6?"weekend":""} ${items.length?"has-event":""} ${isPlanned?"planned":""}" ${canOpen?`data-project-day="${date}"`:""} type="button">
      <span class="project-cal-number">${day}</span>
      <span class="project-cal-events">${items.map(e=>`<span class="project-cal-event calendar-project-event">${calendarProjectCard(p,esc(shortType(e.type)))}</span>`).join("")}${!items.length&&isPlanned?'<span class="project-cal-planned">заплановано</span>':""}</span>
    </button>`;
  }).join("");
  return `<div class="project-cal-panel" data-project-month="${month}">
    <div class="project-cal-grid">
      ${["ПН","ВТ","СР","ЧТ","ПТ","СБ","НД"].map(x=>`<div class="project-cal-weekday">${x}</div>`).join("")}
      ${blanks}${cells}
    </div>
  </div>`;
}


function openProjectTeamManager(projectId){
  const p=pBy(projectId); if(!p) return;
  const dialog=ensureProjectCardDialog();
  const people=[...(db.students||[])].sort((a,b)=>String(a.group||"").localeCompare(String(b.group||""),"uk")||String(a.name||"").localeCompare(String(b.name||""),"uk"));
  const groupValues=[...new Set(people.map(studentGroupLabel).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"uk"));
  const render=()=>{
    const current=new Set(projectStudents(projectId).map(st=>String(st.id)));
    dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body project-team-manager-v38">
      <div class="project-section-head project-team-manager-head">
        <div><h2 style="margin:0">Склад проєкту</h2><div class="muted">${esc(p.name)} · постав галочку - людина є в команді проєкту. Дати за замовчуванням успадковують цю команду; окрему дату можна змінити незалежно.</div></div>
        <button class="ghost" id="teamManagerBack">← До проєкту</button>
      </div>
      <div class="project-team-manager-toolbar-v38">
        <input id="teamManagerSearch" placeholder="Пошук студента">
        <select id="teamManagerGroup"><option value="">Усі групи</option>${groupValues.map(g=>`<option value="${esc(g)}">${esc(g)}</option>`).join("")}</select>
        <div class="project-team-count"><strong id="teamManagerCount">${current.size}</strong><span>у проєкті</span></div>
        <button type="button" class="ghost" id="teamManagerTemplates">Шаблони складу</button>
      </div>
      <div class="project-team-one-list" id="teamManagerList">
        ${people.map(st=>{
          const sid=String(st.id),checked=current.has(sid), group=studentGroupLabel(st);
          return `<label class="project-team-check-row ${checked?"is-selected":""}" data-search="${esc((st.name+' '+group).toLowerCase())}" data-group="${esc(group)}">
            <input type="checkbox" class="project-team-check" data-id="${esc(sid)}" ${checked?"checked":""}>
            <span class="project-team-check-main"><b>${esc(st.name||"Студент")}</b><small>${esc(group||"Без групи")}</small></span>
            <span class="project-team-state">${checked?"У проєкті":"Не в проєкті"}</span>
          </label>`;
        }).join("")||'<div class="empty">Студентів немає.</div>'}
      </div>
      <div class="notice project-team-manager-note">Для окремої дати відкрий потрібний день у календарі проєкту. Там можна змінити склад тільки на цю дату, не зачіпаючи інші.</div>
    </div>`;
    dialog.querySelector("#teamManagerBack").onclick=()=>openProjectCard(projectId);
    const templates=dialog.querySelector("#teamManagerTemplates"); if(templates)templates.onclick=()=>openProjectRosterTemplates(projectId);
    const search=dialog.querySelector("#teamManagerSearch"), group=dialog.querySelector("#teamManagerGroup");
    const applyFilter=()=>{const q=(search?.value||"").trim().toLowerCase(),g=group?.value||"";dialog.querySelectorAll(".project-team-check-row").forEach(r=>r.style.display=(!q||String(r.dataset.search||"").includes(q))&&(!g||r.dataset.group===g)?"":"none");};
    if(search)search.oninput=applyFilter; if(group)group.onchange=applyFilter;
    dialog.querySelectorAll(".project-team-check").forEach(ch=>ch.onchange=async()=>{
      const desired=ch.checked; const row=ch.closest(".project-team-check-row"); ch.disabled=true; row?.classList.add("is-saving");
      const ok=await setProjectPersonEverywhere(projectId,ch.dataset.id,desired);
      if(!ok){ch.checked=!desired;alert("Не вдалося зберегти зміну.");}
      row?.classList.remove("is-saving"); ch.disabled=false;
      const now=new Set(projectStudents(projectId).map(st=>String(st.id))); const selected=now.has(String(ch.dataset.id));
      row?.classList.toggle("is-selected",selected); const state=row?.querySelector(".project-team-state"); if(state)state.textContent=selected?"У проєкті":"Не в проєкті";
      const count=dialog.querySelector("#teamManagerCount"); if(count)count.textContent=String(now.size);
    });
  };
  render();
}

function showProjectDay(projectId,date,availabilityEventIndex=0){
  const p=pBy(projectId); if(!p) return;
  projectUiState[projectId]={...(projectUiState[projectId]||{}),month:date.slice(0,7),mode:"calendar"};
  const dialog=ensureProjectCardDialog();
  const evs=eventsFor(projectId).filter(e=>e.date===date);
  const pretty=new Date(date+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  const storedRoster=new Set(effectiveProjectDateRosterIds(projectId,date).map(String));
  const people=db.students.filter(s=>storedRoster.has(String(s.id)));
  const slot=evs[Math.max(0,Math.min(Number(availabilityEventIndex)||0,evs.length-1))]||{startTime:"",endTime:"",timeUndetermined:true,type:"Весь день"};
  const busyFor=s=>studentBusyLabelsForSlot(s.id,date,slot.startTime||"",slot.endTime||"",slot.timeUndetermined!==false,projectId);
  const freeCandidates=(db.students||[]).filter(s=>!storedRoster.has(String(s.id))&&!busyFor(s).length);
  const busyCandidates=(db.students||[]).filter(s=>!storedRoster.has(String(s.id))&&busyFor(s).length);
  const rosterTemplates=projectRosterTemplates(p);
  const noBlocksNote=!evs.length?'<div class="notice" style="margin:10px 0">Це запланована дата без робочого блоку. Людей уже можна додавати: вони збережуться у складі дати й автоматично підставляться в новий блок, який ти створиш на цю дату.</div>':'';
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head">
      <div><h2 style="margin:0">${pretty}</h2><div class="muted">${esc(p.name)} · ${evs.length} робочих блоків · ${people.length} у складі дати</div></div>
      <div class="planner-toolbar"><button class="ghost" id="addBlockThisDay">+ Блок на цей день</button><button class="ghost" id="openPlannerThisDay">Планування</button><button class="ghost" id="backToProjectCalendar">Назад</button></div>
    </div>
    ${noBlocksNote}
    <div class="planner-toolbar" style="margin:10px 0 14px;align-items:center">
      <b style="font-size:12px">Швидкий склад на цю дату:</b>
      ${rosterTemplates.map(t=>`<button type="button" class="ghost project-day-template" data-template-id="${esc(String(t.id))}">${esc(t.name||"Шаблон")}</button>`).join("")||'<span class="muted">Шаблонів ще немає.</span>'}
      <button type="button" class="ghost" id="editDayRosterTemplates">Редагувати шаблони</button>
    </div>
    <div class="day-event-list">
      ${evs.map((e,i)=>`<div class="day-event-row">
        <span class="dot" style="background:${p.color}"></span>
        <div><b>${esc(e.type)}</b>${eventMetaText(e)?`<div class="day-event-meta">${esc(eventMetaText(e))}</div>`:""}${e.note?`<div class="day-event-meta">${esc(e.note)}</div>`:""}<div class="day-event-meta">${studentsForEvent(e).length} учасників${Object.keys(e.studentRoles||{}).length?` · функції розподілено: ${Object.keys(e.studentRoles||{}).length}`:""}</div></div>
        <div style="display:flex;gap:6px;align-items:center">
          <button class="ghost project-day-edit-event" data-index="${i}">Редагувати</button>
          <button class="ghost danger-inline project-day-delete-event" data-index="${i}">Видалити</button>
          <span class="chip project-watermark" style="${projectWatermarkStyle(p)}">${projectWatermarkInner(p,esc(shortType(e.type)))}</span>
        </div>
      </div>`).join("")||'<div class="empty">На цю дату робочих блоків ще немає.</div>'}
    </div>

    <div class="availability-picker-head">
      <div><b>Люди на цю дату</b><div class="muted">Це єдиний склад цієї дати. Усі робочі блоки цього дня використовують його; інші дати не змінюються.</div>${evs.length?`<label style="margin-top:7px;display:block">Перевіряти для<select id="projectDayAvailabilitySlot">${evs.map((e,i)=>`<option value="${i}" ${i===Math.max(0,Math.min(Number(availabilityEventIndex)||0,evs.length-1))?'selected':''}>${esc(e.type)} · ${esc(eventTimeText(e))}</option>`).join("")}</select></label>`:''}</div>
      <div class="planner-toolbar"><button type="button" class="ghost availability-filter active" data-filter="all">Усі</button><button type="button" class="ghost availability-filter" data-filter="free">Вільні · ${freeCandidates.length}</button><button type="button" class="ghost availability-filter" data-filter="busy">Зайняті · ${busyCandidates.length}</button><input id="projectDayAvailabilitySearch" placeholder="Пошук студента" style="min-width:180px"></div>
    </div>

    <div class="availability-grid-two project-day-availability-grid">
      <div class="availability-card" data-availability-kind="selected"><div class="availability-title"><b>СКЛАД ЦІЄЇ ДАТИ · ${people.length}</b><small>${esc(studentGroupSummary(people)||"-")}</small></div><div class="availability-list">
        ${people.map(s=>`<div class="availability-person-row" data-search="${esc((s.name+' '+studentGroupLabel(s)).toLowerCase())}"><button class="availability-chip project-day-student" data-id="${s.id}">${studentIdentityHtml(s,busyFor(s).join(" · "))}</button><button type="button" class="ghost danger-inline remove-date-person" data-id="${s.id}">Прибрати з цієї дати</button></div>`).join("")||'<span class="muted">Ще нікого не додано.</span>'}
      </div></div>
      <div class="availability-card" data-availability-kind="free"><div class="availability-title"><b>ВІЛЬНІ · ${freeCandidates.length}</b><small>${esc(studentGroupSummary(freeCandidates)||"-")}</small></div><div class="availability-list">
        ${freeCandidates.map(s=>`<div class="availability-person-row" data-search="${esc((s.name+' '+studentGroupLabel(s)).toLowerCase())}"><button class="availability-chip project-day-student" data-id="${s.id}">${studentIdentityHtml(s,`Вільний · ${eventTimeText(slot)}`)}</button><button type="button" class="primary add-date-person" data-id="${s.id}">+ Додати</button></div>`).join("")||'<span class="muted">Вільних студентів немає.</span>'}
      </div></div>
      <div class="availability-card day-busy-elsewhere" data-availability-kind="busy"><div class="availability-title"><b>ЗАЙНЯТІ · ${busyCandidates.length}</b><small>Показано, де саме людина вже працює або навчається</small></div><div class="availability-list">
        ${busyCandidates.map(s=>`<div class="availability-person-row" data-search="${esc((s.name+' '+studentGroupLabel(s)).toLowerCase())}"><button class="availability-chip project-day-student" data-id="${s.id}">${studentIdentityHtml(s,busyFor(s).join(" · "))}</button><button type="button" class="ghost add-date-person" data-id="${s.id}">Додати попри зайнятість</button></div>`).join("")||'<span class="muted">Зайнятих немає.</span>'}
      </div></div>
    </div>
  </div>`;

  dialog.querySelector("#backToProjectCalendar").onclick=()=>openProjectCard(projectId);
  const slotSelect=dialog.querySelector("#projectDayAvailabilitySlot");
  if(slotSelect) slotSelect.onchange=()=>showProjectDay(projectId,date,Number(slotSelect.value)||0);
  dialog.querySelector("#openPlannerThisDay").onclick=()=>openProjectPlanner(projectId,[date]);
  const editDayTemplates=dialog.querySelector("#editDayRosterTemplates");
  if(editDayTemplates) editDayTemplates.onclick=()=>openProjectRosterTemplates(projectId);
  dialog.querySelectorAll(".project-day-template").forEach(btn=>btn.onclick=async()=>{
    const t=rosterTemplateById(projectId,btn.dataset.templateId); if(!t) return;
    const payload=rosterTemplatePayload(projectId,t);
    setProjectDateRosterIds(p,date,payload.studentIds);
    if(evs.length){
      if(!confirm(`Застосувати шаблон «${t.name||"Шаблон"}» до всіх ${evs.length} блоків на ${fmt(date)}? Поточний склад і функції цих блоків буде замінено.`)) return;
      btn.disabled=true;
      const ok=await applyRosterTemplateToDate(projectId,date,t.id);
      if(!ok){btn.disabled=false;alert("Не вдалося зберегти шаблон на цю дату.");return;}
    }else{
      payload.studentIds.forEach(sid=>ensureStudentInProjectTeam(projectId,sid));
      const ok=await save(); if(!ok){alert("Не вдалося зберегти склад дати.");return;}
    }
    showProjectDay(projectId,date);
  });
  dialog.querySelector("#addBlockThisDay").onclick=()=>{
    $("#eventProjectId").value=projectId; $("#eventDate").value=date; $("#eventDialog").showModal();
  };
  dialog.querySelectorAll(".project-day-edit-event").forEach(b=>b.onclick=()=>editProjectEvent(projectId,evs[+b.dataset.index]));
  dialog.querySelectorAll(".project-day-delete-event").forEach(b=>{
    b.onclick=async()=>{
      const ev=evs[+b.dataset.index];
      if(!b.classList.contains("armed")){
        b.classList.add("armed"); b.textContent="Точно видалити?";
        setTimeout(()=>{if(document.body.contains(b)){b.classList.remove("armed");b.textContent="Видалити";}},3500); return;
      }
      const i=db.events.findIndex(x=>x===ev); if(i>=0) db.events.splice(i,1);
      const ok=await save(); if(!ok) return; showProjectDay(projectId,date);
    };
  });
  dialog.querySelectorAll(".project-day-student").forEach(b=>b.onclick=()=>{
    const sid=resolveStudentId(b.dataset.id); if(sid!==undefined) openStudent(sid);
  });
  dialog.querySelectorAll(".add-date-person").forEach(b=>b.onclick=async()=>{
    b.disabled=true; b.textContent="Додаю…";
    const ok=await addStudentToProjectDate(projectId,date,b.dataset.id);
    if(!ok){b.disabled=false;b.textContent="Спробувати ще";alert("Не вдалося зберегти склад дати.");return;}
    showProjectDay(projectId,date);
  });
  dialog.querySelectorAll(".remove-date-person").forEach(b=>b.onclick=async()=>{
    b.disabled=true;
    const ok=await removeStudentFromProjectDate(projectId,date,b.dataset.id);
    if(!ok){b.disabled=false;alert("Не вдалося змінити склад дати.");return;}
    showProjectDay(projectId,date);
  });
  const filterAvailability=()=>{
    const active=dialog.querySelector(".availability-filter.active")?.dataset.filter||"all";
    const q=(dialog.querySelector("#projectDayAvailabilitySearch")?.value||"").trim().toLowerCase();
    dialog.querySelectorAll("[data-availability-kind]").forEach(card=>{
      const kind=card.dataset.availabilityKind;
      card.style.display=(active==="all"||kind===active||kind==="selected")?"":"none";
    });
    dialog.querySelectorAll(".availability-person-row").forEach(row=>{row.style.display=(!q||String(row.dataset.search||"").includes(q))?"":"none";});
  };
  dialog.querySelectorAll(".availability-filter").forEach(btn=>btn.onclick=()=>{
    dialog.querySelectorAll(".availability-filter").forEach(x=>x.classList.remove("active")); btn.classList.add("active"); filterAvailability();
  });
  const search=dialog.querySelector("#projectDayAvailabilitySearch"); if(search) search.oninput=filterAvailability;
}


function projectReportingData(projectOrId){
  const p=typeof projectOrId==="object"?projectOrId:pBy(projectOrId);
  return p?.reporting&&typeof p.reporting==="object"?p.reporting:{};
}
function projectReportingPeriod(p){
  const dates=[...new Set([...(p?.plannedDates||[]).map(String),...eventsFor(p?.id).map(e=>String(e.date||""))].filter(Boolean))].sort();
  return dates.length?`${fullfmt(dates[0])} - ${fullfmt(dates[dates.length-1])}`:"Дати ще не вказані";
}
function projectReportingFilledCount(p){
  const r=projectReportingData(p);
  return [r.officialName,r.type,r.venue,r.city,r.organizer,r.participation,r.description,r.readyText].filter(v=>String(v||"").trim()).length;
}
function projectReportingTitle(p){
  const r=projectReportingData(p);
  return String(r.officialName||p?.name||"Проєкт").trim();
}
function openProjectReporting(id){
  const p=pBy(id); if(!p) return;
  const dialog=ensureProjectCardDialog();
  const r=projectReportingData(p);
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body reporting-editor-page">
    <div class="project-section-head"><div><h2 style="margin:0">Дані для звітності</h2><div class="muted">${esc(p.name)} · ці поля необов’язкові й можуть бути заповнені пізніше</div></div><button class="ghost" id="backFromReporting">Назад</button></div>
    <div class="reporting-note"><b>Робоча назва проєкту лишається короткою.</b><span>Тут зберігається офіційне формулювання для кафедральних, факультетських та інших звітів. Воно не захаращує календар.</span></div>
    <form id="projectReportingForm" class="project-edit-form reporting-form">
      <label class="full">Повна офіційна назва проєкту
        <textarea id="reportOfficialName" rows="2" placeholder="Наприклад: Концертне шоу Тіни Кароль «…»">${esc(r.officialName||"")}</textarea>
      </label>
      <label>Тип проєкту<input id="reportType" value="${esc(r.type||"")}" list="reportTypeOptions" placeholder="Концерт / телепроєкт / фестиваль / …"><datalist id="reportTypeOptions"><option value="Концерт"><option value="Телевізійний проєкт"><option value="Фестиваль"><option value="Церемонія"><option value="Зйомка"><option value="Вистава"><option value="Шоу"><option value="Культурно-мистецький захід"></datalist></label>
      <label>Організатор / компанія / замовник<input id="reportOrganizer" value="${esc(r.organizer||"")}" placeholder="За потреби"></label>
      <label>Місце проведення<input id="reportVenue" value="${esc(r.venue||"")}" placeholder="Наприклад: Палац спорту"></label>
      <label>Місто<input id="reportCity" value="${esc(r.city||"")}" placeholder="Наприклад: Київ"></label>
      <div class="full reporting-auto-period"><span>Період за графіком проєкту</span><b>${esc(projectReportingPeriod(p))}</b><small>Підтягується автоматично з дат проєкту.</small></div>
      <label class="full">Характер участі студентів<textarea id="reportParticipation" rows="3" placeholder="Наприклад: асистенти режисера, постановочна група, сценічний менеджмент…">${esc(r.participation||"")}</textarea></label>
      <label class="full">Опис проєкту для звітності<textarea id="reportDescription" rows="5" placeholder="Повний красивий опис: що це за проєкт, де відбувався, у чому полягала участь студентів…">${esc(r.description||"")}</textarea></label>
      <label class="full">Готове формулювання для звіту<textarea id="reportReadyText" rows="5" placeholder="Готовий абзац, який можна буде без змін підставити у звіт">${esc(r.readyText||"")}</textarea></label>
      <div class="full profile-actions"><button type="button" class="ghost" id="cancelReporting">Скасувати</button><button type="submit" class="primary">Зберегти дані</button></div>
    </form>
  </div>`;
  dialog.querySelector("#backFromReporting").onclick=()=>openProjectCard(id);
  dialog.querySelector("#cancelReporting").onclick=()=>openProjectCard(id);
  dialog.querySelector("#projectReportingForm").onsubmit=async e=>{
    e.preventDefault();
    const submit=e.submitter; if(submit){submit.disabled=true;submit.textContent="Збереження…";}
    p.reporting={
      officialName:dialog.querySelector("#reportOfficialName").value.trim(),
      type:dialog.querySelector("#reportType").value.trim(),
      organizer:dialog.querySelector("#reportOrganizer").value.trim(),
      venue:dialog.querySelector("#reportVenue").value.trim(),
      city:dialog.querySelector("#reportCity").value.trim(),
      participation:dialog.querySelector("#reportParticipation").value.trim(),
      description:dialog.querySelector("#reportDescription").value.trim(),
      readyText:dialog.querySelector("#reportReadyText").value.trim(),
      updatedAt:new Date().toISOString()
    };
    const ok=await save();
    if(!ok){alert("Не вдалося зберегти дані для звітності.");if(submit){submit.disabled=false;submit.textContent="Зберегти дані";}return;}
    openProjectCard(id);
  };
}

function openProjectCard(id){
  const p=pBy(id); if(!p) return;
  const dialog=ensureProjectCardDialog();
  const holder=dialog.querySelector("#projectCardBody");
  holder.innerHTML=`<div class="project-detail"><div class="project-body"><h2>${esc(p.name||"Проєкт")}</h2><div class="profile-empty">Завантаження проєкту…</div></div></div>`;
  if(!dialog.open) dialog.showModal();
  try{
  const evs=eventsFor(id);
  const assigned=projectStudents(id);
  const projectDates=[...new Set([...(p.plannedDates||[]).map(String),...evs.map(e=>e.date)])].filter(Boolean).sort();
  const ui=projectUiState[id]||{mode:"calendar",month:""};
  const availableMonths=[...new Set(projectDates.map(d=>d.slice(0,7)))];
  if(!availableMonths.includes(ui.month)) ui.month=availableMonths[0]||"";
  projectUiState[id]=ui;
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-detail">
    <div class="project-hero" style="box-shadow:inset 6px 0 0 ${p.color}">
      <div class="project-hero-top">
        <div class="project-title-wrap">
          <div class="project-logo">${projectLogoHtml(p,"project-hero-logo")}</div>
          <div><h2>${esc(p.name)}</h2><div class="muted">${esc(p.description||"")}</div></div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="primary" id="introduceProjectBtn">Ознайомити з проєктом</button>
          <button class="ghost" id="projectAcknowledgementsBtn">Ознайомлення <b data-project-ack-count="${esc(String(p.id))}">…</b></button>
          <button class="ghost" id="projectWordReportBtn">Звіт Word</button>
          <button class="ghost" id="projectReportingBtn">Дані для звітності${projectReportingFilledCount(p)?` · ${projectReportingFilledCount(p)}/8`:""}</button>
          <button class="ghost" id="editProjectBtn">Редагувати</button>
          <button class="ghost" onclick="document.querySelector('#projectCardDialog').close()">Закрити</button>
        </div>
      </div>
    </div>
    <div class="project-body">
      <div class="project-meta-grid">
        <div class="project-meta"><span>Подій</span><strong>${evs.length}</strong></div>
        <div class="project-meta"><span>Студентів</span><strong>${assigned.length}</strong></div>
        <div class="project-meta"><span>Період</span><strong style="font-size:14px">${projectDates.length?`${fmt(projectDates[0])} - ${fmt(projectDates[projectDates.length-1])}`:"-"}</strong></div>
      </div>
      <button type="button" class="project-reporting-card ${projectReportingFilledCount(p)?"filled":"empty"}" id="projectReportingCard">
        <span><small>ДАНІ ДЛЯ ЗВІТНОСТІ</small><b>${projectReportingFilledCount(p)?esc(projectReportingTitle(p)):"Ще не заповнені"}</b><em>${projectReportingFilledCount(p)?`${projectReportingFilledCount(p)} із 8 полів · можна доповнити будь-коли`:"Проєкт уже можна використовувати. Офіційні дані допишете пізніше."}</em></span><strong>→</strong>
      </button>

      <div class="project-section project-team-compact-v38">
        <div class="project-team-compact-main">
          <div><b>Склад проєкту · ${assigned.length}</b><div class="muted">${esc(studentGroupSummary(assigned)||"У проєкті ще немає людей")}</div></div>
          <button type="button" class="primary" id="projectManageTeamBtn">Змінити склад</button>
        </div>
        ${assigned.length?`<div class="project-team-preview">${assigned.slice(0,8).map(s=>`<span>${esc(s.name||"Студент")}</span>`).join("")}${assigned.length>8?`<span class="more">+ ще ${assigned.length-8}</span>`:""}</div>`:""}
      </div>

      <div class="project-section">
        <div class="project-section-head">
          <b>Календар проєкту</b>
          <div class="project-calendar-actions"><div class="project-view-switch"><button class="${ui.mode==="list"?"":"active"}" id="projectCalendarMode" type="button">Календар</button><button class="${ui.mode==="list"?"active":""}" id="projectListMode" type="button">Список</button></div><button class="ghost" id="projectPlannerBtn">Планування дат і команди</button><button class="ghost" id="addProjectEventBtn">+ Один блок</button></div>
        </div>
        ${(()=>{
          const months=[...new Set(projectDates.map(d=>d.slice(0,7)))];
          if(!months.length) return '<div class="empty">Дат ще немає.</div>';
          const activeMonth=months.includes(ui.month)?ui.month:months[0];
          return `<div id="projectCalendarView" style="${ui.mode==="list"?"display:none":""}">
            <div class="project-month-tabs">${months.map(m=>`<button type="button" class="project-month-tab ${m===activeMonth?"active":""}" data-month="${m}">${projectMonthLabel(m)}</button>`).join("")}</div>
            <div class="project-calendar-panels">${months.map(m=>`<div style="${m===activeMonth?"":"display:none"}" data-month-panel="${m}">${projectCalendarMonthHtml(id,m)}</div>`).join("")}</div>
          </div>`;
        })()}
        <div id="projectListView" style="${ui.mode==="list"?"":"display:none"}">
          <div class="project-event-list">
            ${evs.map((e,i)=>{
              const people=studentsForEvent(e);
              return `<div class="project-event-row" style="grid-template-columns:90px 1fr auto auto auto">
                <b>${fmt(e.date)}</b>
                <span>${esc(e.type)}${eventMetaText(e)?`<div class="muted">${esc(eventMetaText(e))}</div>`:""}<div class="muted">${people.length} учасників</div></span>
                <button class="ghost edit-event-btn" data-index="${i}">Редагувати</button>
                <button class="ghost event-people-btn" data-index="${i}">Склад дати</button>
                <button class="ghost delete-event" data-index="${i}">Видалити</button>
              </div>`;
            }).join("")||'<div class="empty">Дат ще немає.</div>'}
          </div>
        </div>
      </div>
    </div>
  </div>`;

  const manageTeamBtn=dialog.querySelector("#projectManageTeamBtn");
  if(manageTeamBtn) manageTeamBtn.onclick=()=>openProjectTeamManager(id);
  dialog.querySelectorAll(".project-team-remove").forEach(b=>b.onclick=async()=>{
    const sid=resolveStudentId(b.dataset.student); if(sid===undefined)return;
    if(!confirm("Прибрати цю людину з усього проєкту? Вона також буде прибрана з усіх окремих складів дат.")) return;
    b.disabled=true;
    const ok=await setProjectPersonEverywhere(id,sid,false);
    if(!ok){b.disabled=false;alert("Не вдалося зберегти зміну.");return;}
    openProjectCard(id);
  });

  dialog.querySelector("#projectPlannerBtn").onclick=()=>openProjectPlanner(id);
  const rosterTemplatesBtn=dialog.querySelector("#projectRosterTemplatesBtn");
  if(rosterTemplatesBtn) rosterTemplatesBtn.onclick=()=>openProjectRosterTemplates(id);

  dialog.querySelector("#addProjectEventBtn").onclick=()=>{
    $("#eventProjectId").value=id;
    $("#eventDialog").showModal();
  };

  dialog.querySelectorAll(".edit-event-btn").forEach(b=>b.onclick=()=>{
    const ev=eventsFor(id)[+b.dataset.index];
    editProjectEvent(id,ev);
  });

  dialog.querySelectorAll(".event-people-btn").forEach(b=>b.onclick=()=>{
    const ev=eventsFor(id)[+b.dataset.index];
    showProjectDay(id,ev.date);
  });

  dialog.querySelectorAll(".delete-event").forEach(b=>b.onclick=async()=>{
    const ev=eventsFor(id)[+b.dataset.index];
    const i=db.events.findIndex(x=>x===ev);
    if(i>=0) db.events.splice(i,1);
    await save(); openProjectCard(id);
  });

  const calMode=dialog.querySelector("#projectCalendarMode");
  const listMode=dialog.querySelector("#projectListMode");
  const calView=dialog.querySelector("#projectCalendarView");
  const listView=dialog.querySelector("#projectListView");
  if(calMode&&listMode){
    calMode.onclick=()=>{projectUiState[id]={...(projectUiState[id]||{}),mode:"calendar"};calMode.classList.add("active");listMode.classList.remove("active");if(calView)calView.style.display="";if(listView)listView.style.display="none";};
    listMode.onclick=()=>{projectUiState[id]={...(projectUiState[id]||{}),mode:"list"};listMode.classList.add("active");calMode.classList.remove("active");if(calView)calView.style.display="none";if(listView)listView.style.display="";};
  }
  dialog.querySelectorAll(".project-month-tab").forEach(tab=>tab.onclick=()=>{
    projectUiState[id]={...(projectUiState[id]||{}),month:tab.dataset.month,mode:"calendar"};
    dialog.querySelectorAll(".project-month-tab").forEach(x=>x.classList.toggle("active",x===tab));
    dialog.querySelectorAll("[data-month-panel]").forEach(panel=>panel.style.display=panel.dataset.monthPanel===tab.dataset.month?"":"none");
  });
  dialog.querySelectorAll(".project-cal-day.has-event,.project-cal-day.planned").forEach(day=>day.onclick=()=>{if(day.dataset.projectDay) showProjectDay(id,day.dataset.projectDay);});

  const introduceBtn=dialog.querySelector("#introduceProjectBtn");
  if(introduceBtn) introduceBtn.onclick=async()=>{
    const oldText=introduceBtn.textContent;
    introduceBtn.disabled=true;
    introduceBtn.textContent="Надсилаю…";
    try{
      await syncExistingPersonalSchedules();
      const result=await notifyStudentsForProject(id);
      if(!result?.recipients){
        alert("Для призначених студентів ще немає особистих розкладів. Проєкт збережено, але повідомлення не надіслано.");
      }else{
        const sent=Number(result?.sent||0);
        const failed=Number(result?.failed||0);
        alert(sent||failed
          ? `Ознайомлення надіслано. Успішно: ${sent}. Не доставлено: ${failed}.`
          : `Проєкт надіслано для ознайомлення ${result.recipients} студентам.`);
      }
    }catch(err){
      console.error("Project introduction notification failed:",err);
      alert("Не вдалося надіслати проєкт для ознайомлення. Перевірте підключення та спробуйте ще раз.");
    }finally{
      introduceBtn.disabled=false;
      introduceBtn.textContent=oldText;
    }
  };
  dialog.querySelector("#projectAcknowledgementsBtn").onclick=()=>openProjectAcknowledgements(id);
  const projectWordReportBtn=dialog.querySelector("#projectWordReportBtn");
  if(projectWordReportBtn) projectWordReportBtn.onclick=()=>openProjectsWordExport([id]);
  const projectReportingBtn=dialog.querySelector("#projectReportingBtn");
  if(projectReportingBtn) projectReportingBtn.onclick=()=>openProjectReporting(id);
  const projectReportingCard=dialog.querySelector("#projectReportingCard");
  if(projectReportingCard) projectReportingCard.onclick=()=>openProjectReporting(id);
  updateAckIndicators().catch(console.error);
  dialog.querySelector("#editProjectBtn").onclick=()=>editProjectCard(id);
  }catch(err){
    console.error("Project card error:",err);
    holder.innerHTML=`<div class="project-detail"><div class="project-body">
      <h2>${esc(p.name||"Проєкт")}</h2>
      <div class="notice warn">Проєкт відкрився, але частина додаткових даних не завантажилась.</div>
      <div style="display:flex;gap:8px;margin-top:14px">
        <button class="ghost" id="fallbackEditProject">Редагувати</button>
        <button class="ghost" id="fallbackCloseProject">Закрити</button>
      </div>
    </div></div>`;
    holder.querySelector("#fallbackEditProject").onclick=()=>editProjectCard(id);
    holder.querySelector("#fallbackCloseProject").onclick=()=>dialog.close();
  }
}



function editProjectEvent(projectId,ev){
  const p=pBy(projectId); if(!p||!ev) return;
  projectUiState[projectId]={...(projectUiState[projectId]||{}),month:ev.date.slice(0,7)};
  const dialog=ensureProjectCardDialog();

  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head">
      <div>
        <h2 style="margin:0">Редагувати подію</h2>
        <div class="muted">${esc(p.name)}</div>
      </div>
      <button class="ghost" id="cancelProjectEventEdit">Назад</button>
    </div>

    <form id="projectEventEditForm" class="project-edit-form event-edit-form" style="margin-top:16px">
      <label class="full">Дата
        <input id="editEventDate" type="date" value="${esc(ev.date||"")}">
      </label>

      <label class="full">Що відбувається
        <input id="editEventType" value="${esc(ev.type||"")}" placeholder="Наприклад: Репетиція, Зйомка, Генеральний прогін">
      </label>

      <div class="event-time-grid full">
        <label>Початок
          <input id="editEventStartTime" type="time" value="${esc(ev.startTime||"")}">
        </label>
        <label>Завершення
          <input id="editEventEndTime" type="time" value="${esc(ev.endTime||"")}">
        </label>
      </div>
      <label class="full" style="display:flex;align-items:center;gap:8px"><input id="editEventTimeUndetermined" type="checkbox" ${isTimeUndetermined(ev)?"checked":""} style="width:auto"> <b>Час не визначено</b></label>

      <label class="full">Локація
        <input id="editEventLocation" value="${esc(ev.location||"")}" placeholder="Наприклад: ВДНГ · павільйон 3 / ауд. 230 / студія">
      </label>

      <label class="full">Примітка
        <textarea id="editEventNote" placeholder="Наприклад: збір о 09:30, форма чорна, мати паспорт">${esc(ev.note||"")}</textarea>
      </label>

      <div class="full profile-actions">
        <button type="button" class="ghost" id="viewEventAcknowledgements">Ознайомлення</button>
        <button type="button" class="ghost" id="cancelProjectEventEditBottom">Скасувати</button>
        <button type="submit" class="ghost" data-notify="0">Зберегти</button>
        <button type="submit" class="primary" data-notify="1">Зберегти та повідомити</button>
      </div>
    </form>
  </div>`;

  const back=()=>openProjectCard(projectId);
  dialog.querySelector("#cancelProjectEventEdit").onclick=back;
  dialog.querySelector("#cancelProjectEventEditBottom").onclick=back;
  dialog.querySelector("#viewEventAcknowledgements").onclick=()=>showEventAcknowledgements(ev);
  bindTimeUndeterminedControls(dialog,"#editEventTimeUndetermined","#editEventStartTime","#editEventEndTime");

  dialog.querySelector("#projectEventEditForm").onsubmit=async e=>{
    e.preventDefault();
    const shouldNotify=e.submitter?.dataset?.notify==="1";
    const newDate=dialog.querySelector("#editEventDate").value;
    const newType=dialog.querySelector("#editEventType").value.trim();

    if(!newDate||!newType){
      alert("Вкажіть дату і назву події.");
      return;
    }

    // Find the exact original event object in the database and update only date/type.
    // Existing event-specific student assignments are preserved.
    const target=db.events.find(x=>x===ev)
      || db.events.find(x=>x.projectId===projectId&&x.date===ev.date&&x.type===ev.type);

    if(!target){
      alert("Не вдалося знайти подію в базі.");
      return;
    }

    const editTimeUndetermined=!!dialog.querySelector("#editEventTimeUndetermined")?.checked;
    const editStart=editTimeUndetermined?"":(dialog.querySelector("#editEventStartTime")?.value||"");
    const editEnd=editTimeUndetermined?"":(dialog.querySelector("#editEventEndTime")?.value||"");
    if(!editTimeUndetermined&&editStart&&editEnd&&timeMinutes(editStart)>=timeMinutes(editEnd)){alert("Час завершення має бути пізніше за час початку.");return;}
    target.date=newDate;
    target.type=newType;
    target.timeUndetermined=editTimeUndetermined;
    target.startTime=editStart;
    target.endTime=editEnd;
    target.location=dialog.querySelector("#editEventLocation")?.value.trim()||"";
    target.note=dialog.querySelector("#editEventNote")?.value.trim()||"";
    db.events.sort((a,b)=>a.date.localeCompare(b.date)||(a.startTime||"").localeCompare(b.startTime||""));

    const ok=await save();
    if(!ok){
      alert("Не вдалося зберегти зміну в хмарі.");
      return;
    }

    if(shouldNotify){
      try{
        const pushResult=await notifyStudentsForEvent(target,"Розклад оновлено");
        if(pushResult?.sent===0){
          alert("Зміни збережено. У призначених студентів поки немає активних push-сповіщень.");
        }else{
          const failed=Number(pushResult?.failed||0);
          alert(
            `Зміни збережено. Сповіщення надіслано: ${pushResult.sent}.` +
            (failed ? ` Не вдалося доставити: ${failed}.` : "")
          );
        }
      }catch(pushErr){
        console.error("Schedule push failed:",pushErr);
        alert("Зміни збережено, але сповіщення не вдалося надіслати.");
      }
    }

    openProjectCard(projectId);
  };
}

function editEventPeople(projectId,ev){
  const p=pBy(projectId); if(!p) return;
  projectUiState[projectId]={...(projectUiState[projectId]||{}),month:ev.date.slice(0,7)};
  const dialog=ensureProjectCardDialog();
  const projectPeople=projectStudents(projectId);
  const currentIds=new Set(studentsForEvent(ev).map(s=>String(s.id)));
  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">
    <div class="project-section-head">
      <div><h2 style="margin:0">Учасники й обов'язки</h2><div class="muted">${esc(p.name)} · ${fmt(ev.date)} · ${esc(ev.type)}</div></div>\n      <button class="ghost" id="backToProject">Назад</button>\n    </div>\n    <div class="planner-toolbar" style="margin:10px 0 14px;align-items:center">\n      <b style="font-size:12px">Шаблон:</b>\n      ${projectRosterTemplates(p).map(t=>`<button type="button" class="ghost event-roster-template" data-template-id="${esc(String(t.id))}">${esc(t.name||"Шаблон")}</button>`).join("")||'<span class="muted">Шаблонів ще немає.</span>'}\n      <button type="button" class="ghost" id="editEventRosterTemplates">Редагувати шаблони</button>\n    </div>\n    <div class="event-assignment-box">\n      <b>Хто працює саме в цьому блоці</b>\n      <div class="event-person-role-list">\n        ${projectPeople.map(s=>`<div class="event-person-role-row">\n          <button class="event-person ${currentIds.has(String(s.id))?"active":""}" data-id="${s.id}">${studentIdentityHtml(s)}</button>\n          <input class="event-person-role" data-id="${s.id}" value="${esc(studentRoleForEvent(ev,s.id))}" placeholder="Обов'язки / функція" ${currentIds.has(String(s.id))?"":"disabled"}>\n        </div>`).join("")||'<span class="muted">Спочатку додайте студентів до проєкту.</span>'}\n      </div>\n      <div class="event-assignment-note">Можна призначити не лише людей, а й окремі функції кожному.</div>\n    </div>\n    <div class="profile-actions">\n      <button class="ghost" id="allEventPeople">Всі</button>\n      <button class="ghost" id="clearEventPeople">Ніхто</button>\n      <button class="primary" id="saveEventPeople">Зберегти</button>\n    </div>\n  </div>`;\n\n  let selected=new Set(currentIds);\n  const editEventTemplates=dialog.querySelector("#editEventRosterTemplates");\n  if(editEventTemplates) editEventTemplates.onclick=()=>openProjectRosterTemplates(projectId);\n  dialog.querySelectorAll(".event-roster-template").forEach(btn=>btn.onclick=()=>{\n    const t=rosterTemplateById(projectId,btn.dataset.templateId);\n    if(!t) return;\n    const payload=rosterTemplatePayload(projectId,t);\n    selected=new Set(payload.studentIds.map(String));\n    dialog.querySelectorAll(".event-person").forEach(x=>x.classList.toggle("active",selected.has(String(x.dataset.id))));\n    dialog.querySelectorAll(".event-person-role").forEach(input=>{\n      const sid=String(input.dataset.id);\n      input.disabled=!selected.has(sid);\n      input.value=selected.has(sid)?String(payload.studentRoles[sid]||""):"";\n    });\n  });\n  dialog.querySelectorAll(".event-person").forEach(btn=>btn.onclick=()=>{\n    const sid=String(btn.dataset.id);\n    if(selected.has(sid)) selected.delete(sid); else selected.add(sid);\n    btn.classList.toggle("active",selected.has(sid));\n    const input=dialog.querySelector(`.event-person-role[data-id="${CSS.escape(sid)}"]`);\n    if(input) input.disabled=!selected.has(sid);\n  });\n  dialog.querySelector("#allEventPeople").onclick=()=>{\n    selected=new Set(projectPeople.map(s=>String(s.id)));\n    dialog.querySelectorAll(".event-person").forEach(x=>x.classList.add("active"));\n    dialog.querySelectorAll(".event-person-role").forEach(x=>x.disabled=false);\n  };\n  dialog.querySelector("#clearEventPeople").onclick=()=>{\n    selected.clear();\n    dialog.querySelectorAll(".event-person").forEach(x=>x.classList.remove("active"));\n    dialog.querySelectorAll(".event-person-role").forEach(x=>x.disabled=true);\n  };\n  dialog.querySelector("#backToProject").onclick=()=>openProjectCard(projectId);\n  dialog.querySelector("#saveEventPeople").onclick=async()=>{\n    const target=db.events.find(x=>x===ev)\n      || db.events.find(x=>x.projectId===ev.projectId&&x.date===ev.date&&x.type===ev.type&&String(x.startTime||"")===String(ev.startTime||""));\n    if(target){\n      const ids=projectPeople.filter(s=>selected.has(String(s.id))).map(s=>s.id);\n      applyProjectDateRosterEverywhere(projectId,target.date,ids);\n      const roles={};\n      dialog.querySelectorAll(".event-person-role").forEach(input=>{\n        const sid=String(input.dataset.id);\n        const role=input.value.trim();\n        if(selected.has(sid)&&role) roles[sid]=role;\n      });\n      target.studentRoles=roles;\n    }\n    const ok=await save();\n    if(!ok){alert("Не вдалося зберегти склад дати.");return;}\n    showProjectDay(projectId,ev.date);\n  };\n}\n\nfunction projectPlanningDates(p){\n  return [...new Set([...(p?.plannedDates||[]).map(String),...eventsFor(p?.id).map(e=>String(e.date||""))])].filter(Boolean).sort();\n}\n\nfunction openProjectPlanner(projectId,preselectedDates=[]){\n  const p=pBy(projectId); if(!p) return;\n  const dialog=ensureProjectCardDialog();\n  p.plannedDates=[...new Set((p.plannedDates||[]).map(String))].filter(Boolean).sort();\n  const projectPeople=projectStudents(projectId);\n  let selectedDates=new Set((preselectedDates||[]).map(String));\n  let selectedPeople=new Set();\n\n  const render=()=>{\n    const dates=projectPlanningDates(p);\n    const evs=eventsFor(projectId);\n    dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body planner-shell">\n      <div class="project-section-head">\n        <div><h2 style="margin:0">Планування дат і команди</h2><div class="muted">${esc(p.name)} · один робочий блок можна одразу поставити на кілька дат</div></div>\n        <div class="planner-toolbar"><button class="ghost" id="plannerBack">Назад до проєкту</button><button class="ghost" id="plannerClose">Закрити</button></div>\n      </div>\n\n      <section class="planner-card">\n        <h3>1. Дати проєкту</h3>\n        <div class="muted">Клацніть дати, на які треба поставити однаковий робочий блок. Можна вибрати кілька дат одразу.</div>\n        <div class="planner-toolbar">\n          <input id="plannerSingleDate" type="date">\n          <button type="button" class="ghost" id="plannerAddSingleDate">+ Додати дату</button>\n          <button type="button" class="ghost" id="plannerSelectAllDates">Вибрати всі</button>\n          <button type="button" class="ghost" id="plannerClearDates">Очистити вибір</button>\n        </div>\n        <div class="project-planned-range">\n          <label>Діапазон від<input id="plannerRangeStart" type="date"></label>\n          <label>до<input id="plannerRangeEnd" type="date"></label>\n          <button type="button" class="ghost" id="plannerAddRange">+ Додати діапазон</button>\n        </div>\n        <div class="planner-date-grid">\n          ${dates.map(d=>`<button type="button" class="planner-date ${selectedDates.has(d)?"active":""}" data-date="${d}">${fmt(d)}</button>`).join("")||'<span class="muted">Дат ще немає - додайте одну або діапазон.</span>'}\n        </div>\n        <div class="muted">Вибрано дат: <b id="plannerSelectedDatesCount">${selectedDates.size}</b></div>\n      </section>\n\n      <section class="planner-card">\n        <h3>2. Робочий блок</h3>\n        <div class="planner-form-grid">\n          <label class="full">Що відбувається<input id="plannerType" placeholder="Наприклад: Репетиція / Зйомка / Реєстрація / Монтаж"></label>\n          <label>Початок<input id="plannerStart" type="time"></label>\n          <label>Завершення<input id="plannerEnd" type="time"></label>\n          <label class="full" style="display:flex;align-items:center;gap:8px"><input id="plannerTimeUndetermined" type="checkbox" checked style="width:auto"> <b>Час не визначено</b></label>\n          <label class="full">Локація<input id="plannerLocation" placeholder="Локація / павільйон / аудиторія"></label>\n          <label class="full">Примітка<textarea id="plannerNote" placeholder="Збір, форма, документи, додаткова інформація"></textarea></label>\n        </div>\n      </section>\n\n      <section class="planner-card">\n        <div class="project-section-head"><h3>3. Люди й обов'язки</h3><span class="muted">Команда проєкту: ${projectPeople.length}</span></div>\n        <div class="planner-toolbar" style="margin-bottom:8px">\n          <b style="font-size:12px">Шаблон:</b>\n          ${projectRosterTemplates(p).map(t=>`<button type="button" class="ghost planner-roster-template" data-template-id="${esc(String(t.id))}">${esc(t.name||"Шаблон")}</button>`).join("")||'<span class="muted">Шаблонів ще немає.</span>'}\n          <button type="button" class="ghost" id="plannerEditRosterTemplates">Редагувати шаблони</button>\n        </div>\n        <div class="planner-toolbar">\n          <button type="button" class="ghost" id="plannerAllPeople">Всі</button>\n          <button type="button" class="ghost" id="plannerClearPeople">Ніхто</button>\n          <input id="plannerCommonRole" placeholder="Спільна функція для вибраних, напр. хостес">\n          <button type="button" class="ghost" id="plannerApplyRole">Застосувати</button>\n        </div>\n        <div class="planner-person-list">\n          ${projectPeople.map(s=>`<div class="planner-person-row">\n            <button type="button" class="planner-person-toggle ${selectedPeople.has(String(s.id))?"active":""}" data-id="${s.id}">${studentIdentityHtml(s)}</button>\n            <input class="planner-role-input" data-id="${s.id}" placeholder="Його/її обов'язки в цьому блоці" ${selectedPeople.has(String(s.id))?"":"disabled"}>\n          </div>`).join("")||'<div class="notice warn">У проєкті ще немає студентів. Поверніться до картки проєкту й додайте команду.</div>'}\n        </div>\n        <div class="profile-actions">\n          <button type="button" class="primary" id="plannerCreateBlocks">Створити блок на вибрані дати</button>\n        </div>\n        <div class="muted">Масове створення не надсилає push автоматично - спочатку можна спокійно скласти графік.</div>\n      </section>\n\n      <section class="planner-card">\n        <div class="project-section-head"><h3>Поточні робочі блоки</h3><span class="muted">${evs.length}</span></div>\n        <div class="planner-block-list">\n          ${evs.map((e,i)=>{\n            const people=studentsForEvent(e);\n            return `<div class="planner-block-row">\n              <b>${fmt(e.date)}</b>\n              <div><b>${esc(e.type)}</b><div class="muted">${esc(eventMetaText(e)||"Час не визначено")} · ${people.length} ос.</div></div>\n              <div class="planner-block-actions"><button class="ghost planner-edit-block" data-index="${i}">Редагувати</button><button class="ghost planner-people-block" data-index="${i}">Люди / функції</button></div>\n            </div>`;\n          }).join("")||'<div class="empty">Робочих блоків ще немає.</div>'}\n        </div>\n      </section>\n    </div>`;\n\n    const root=dialog.querySelector("#projectCardBody");\n    root.querySelector("#plannerBack").onclick=()=>openProjectCard(projectId);\n    root.querySelector("#plannerClose").onclick=()=>dialog.close();\n    root.querySelectorAll(".planner-date").forEach(btn=>btn.onclick=()=>{\n      const d=btn.dataset.date;\n      if(selectedDates.has(d)) selectedDates.delete(d); else selectedDates.add(d);\n      btn.classList.toggle("active",selectedDates.has(d));\n      root.querySelector("#plannerSelectedDatesCount").textContent=selectedDates.size;\n    });\n    root.querySelector("#plannerSelectAllDates").onclick=()=>{projectPlanningDates(p).forEach(d=>selectedDates.add(d));render();};\n    root.querySelector("#plannerClearDates").onclick=()=>{selectedDates.clear();render();};\n    root.querySelector("#plannerAddSingleDate").onclick=async()=>{\n      const d=root.querySelector("#plannerSingleDate").value;\n      if(!d) return;\n      p.plannedDates=[...new Set([...(p.plannedDates||[]),d])].sort();\n      selectedDates.add(d);\n      await save();\n      render();\n    };\n    bindTimeUndeterminedControls(root,"#plannerTimeUndetermined","#plannerStart","#plannerEnd");\n\n    root.querySelector("#plannerAddRange").onclick=async()=>{\n      const a=root.querySelector("#plannerRangeStart").value;\n      const b=root.querySelector("#plannerRangeEnd").value;\n      if(!a||!b){alert("Вкажіть початок і кінець діапазону.");return;}\n      const [start,end]=a<=b?[a,b]:[b,a];\n      const list=datesBetween(start,end);\n      p.plannedDates=[...new Set([...(p.plannedDates||[]),...list])].sort();\n      list.forEach(d=>selectedDates.add(d));\n      await save();\n      render();\n    };\n\n    const plannerEditTemplates=root.querySelector("#plannerEditRosterTemplates");\n    if(plannerEditTemplates) plannerEditTemplates.onclick=()=>openProjectRosterTemplates(projectId);\n    root.querySelectorAll(".planner-roster-template").forEach(btn=>btn.onclick=()=>{\n      const t=rosterTemplateById(projectId,btn.dataset.templateId);\n      if(!t) return;\n      const payload=rosterTemplatePayload(projectId,t);\n      selectedPeople=new Set(payload.studentIds.map(String));\n      root.querySelectorAll(".planner-person-toggle").forEach(x=>x.classList.toggle("active",selectedPeople.has(String(x.dataset.id))));\n      root.querySelectorAll(".planner-role-input").forEach(input=>{\n        const sid=String(input.dataset.id);\n        input.disabled=!selectedPeople.has(sid);\n        input.value=selectedPeople.has(sid)?String(payload.studentRoles[sid]||""):"";\n      });\n    });\n    root.querySelectorAll(".planner-person-toggle").forEach(btn=>btn.onclick=()=>{\n      const sid=String(btn.dataset.id);\n      if(selectedPeople.has(sid)) selectedPeople.delete(sid); else selectedPeople.add(sid);\n      btn.classList.toggle("active",selectedPeople.has(sid));\n      const input=root.querySelector(`.planner-role-input[data-id="${CSS.escape(sid)}"]`);\n      if(input) input.disabled=!selectedPeople.has(sid);\n    });\n    root.querySelector("#plannerAllPeople").onclick=()=>{selectedPeople=new Set(projectPeople.map(s=>String(s.id)));render();};\n    root.querySelector("#plannerClearPeople").onclick=()=>{selectedPeople.clear();render();};\n    root.querySelector("#plannerApplyRole").onclick=()=>{\n      const role=root.querySelector("#plannerCommonRole").value.trim();\n      root.querySelectorAll(".planner-role-input").forEach(input=>{if(selectedPeople.has(String(input.dataset.id))) input.value=role;});\n    };\n    root.querySelector("#plannerCreateBlocks").onclick=async()=>{\n      const type=root.querySelector("#plannerType").value.trim();\n      if(!selectedDates.size){alert("Виберіть хоча б одну дату.");return;}\n      if(!type){alert("Вкажіть, що відбувається в цьому робочому блоці.");return;}\n      if(!selectedPeople.size){alert("Виберіть хоча б одного студента.");return;}\n      const timeUndetermined=!!root.querySelector("#plannerTimeUndetermined")?.checked;\n      const startTime=timeUndetermined?"":(root.querySelector("#plannerStart").value||"");\n      const endTime=timeUndetermined?"":(root.querySelector("#plannerEnd").value||"");\n      if(!timeUndetermined&&startTime&&endTime&&timeMinutes(startTime)>=timeMinutes(endTime)){alert("Час завершення має бути пізніше за час початку.");return;}\n      const location=root.querySelector("#plannerLocation").value.trim();\n      const note=root.querySelector("#plannerNote").value.trim();\n      const studentIds=projectPeople.filter(s=>selectedPeople.has(String(s.id))).map(s=>s.id);\n      const roles={};\n      root.querySelectorAll(".planner-role-input").forEach(input=>{\n        const sid=String(input.dataset.id), role=input.value.trim();\n        if(selectedPeople.has(sid)&&role) roles[sid]=role;\n      });\n      let created=0, skipped=0;\n      for(const date of [...selectedDates].sort()){\n        const duplicate=db.events.some(e=>String(e.projectId)===String(projectId)&&e.date===date&&String(e.type||"")===type&&String(e.startTime||"")===startTime&&String(e.endTime||"")===endTime);\n        if(duplicate){skipped++;continue;}\n        db.events.push({projectId,date,type,startTime,endTime,timeUndetermined,location,note,studentIds:[...studentIds],studentRoles:{...roles}});\n        studentIds.forEach(sid=>ensureStudentInProjectTeam(projectId,sid));\n        applyProjectDateRosterEverywhere(projectId,date,studentIds);\n        created++;\n      }\n      p.plannedDates=[...new Set([...(p.plannedDates||[]),...[...selectedDates]])].sort();\n      db.events.sort((a,b)=>a.date.localeCompare(b.date)||(a.startTime||"").localeCompare(b.startTime||""));\n      const ok=await save();\n      if(!ok){alert("Не вдалося зберегти зміни в хмарі.");return;}\n      alert(`Створено робочих блоків: ${created}.${skipped?` Пропущено дублікатів: ${skipped}.`:""}`);\n      openProjectPlanner(projectId,[...selectedDates]);\n    };\n\n    root.querySelectorAll(".planner-edit-block").forEach(b=>b.onclick=()=>editProjectEvent(projectId,eventsFor(projectId)[+b.dataset.index]));\n    root.querySelectorAll(".planner-people-block").forEach(b=>b.onclick=()=>editEventPeople(projectId,eventsFor(projectId)[+b.dataset.index]));\n  };\n  render();\n}\n\nfunction openProjectRosterTemplates(projectId,editTemplateId=""){\n  const p=pBy(projectId); if(!p) return;\n  const dialog=ensureProjectCardDialog();\n  const templates=projectRosterTemplates(p);\n  const team=projectStudents(projectId);\n  const editing=editTemplateId?templates.find(t=>String(t.id)===String(editTemplateId)):null;\n\n  if(editing){\n    const selected=new Set((editing.studentIds||[]).map(String));\n    dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">\n      <div class="project-section-head"><div><h2 style="margin:0">Редагувати шаблон складу</h2><div class="muted">${esc(p.name)}</div></div><button class="ghost" id="backRosterTemplates">Назад</button></div>\n      <form id="rosterTemplateForm" class="project-edit-form" style="margin-top:14px">\n        <label class="full">Назва кнопки<input id="rosterTemplateName" value="${esc(editing.name||"")}" placeholder="Наприклад: Монтаж / Репетиція / Зйомка"></label>\n        <div class="full event-assignment-box">\n          <div class="project-section-head"><b>Люди й функції в цьому шаблоні</b><span class="muted">${team.length} у команді проєкту</span></div>\n          <div class="event-person-role-list">\n            ${team.map(st=>`<div class="event-person-role-row">\n              <button type="button" class="event-person roster-template-person ${selected.has(String(st.id))?"active":""}" data-id="${esc(String(st.id))}">${studentIdentityHtml(st)}</button>\n              <input class="event-person-role roster-template-role" data-id="${esc(String(st.id))}" value="${esc(String((editing.studentRoles||{})[String(st.id)]||""))}" placeholder="Функція / позиція" ${selected.has(String(st.id))?"":"disabled"}>\n            </div>`).join("")||'<span class="muted">У проєкті ще немає людей.</span>'}\n          </div>\n        </div>\n        <div class="full profile-actions"><button type="button" class="ghost" id="rosterTemplateAll">Всі</button><button type="button" class="ghost" id="rosterTemplateNone">Ніхто</button><button type="submit" class="primary">Зберегти шаблон</button></div>\n      </form>\n    </div>`;\n    let chosen=new Set(selected);\n    const updatePerson=(sid,on)=>{\n      const btn=dialog.querySelector(`.roster-template-person[data-id="${CSS.escape(String(sid))}"]`);\n      const input=dialog.querySelector(`.roster-template-role[data-id="${CSS.escape(String(sid))}"]`);\n      if(btn) btn.classList.toggle("active",on);\n      if(input) input.disabled=!on;\n    };\n    dialog.querySelector("#backRosterTemplates").onclick=()=>openProjectRosterTemplates(projectId);\n    dialog.querySelectorAll(".roster-template-person").forEach(btn=>btn.onclick=()=>{\n      const sid=String(btn.dataset.id); if(chosen.has(sid)) chosen.delete(sid); else chosen.add(sid); updatePerson(sid,chosen.has(sid));\n    });\n    dialog.querySelector("#rosterTemplateAll").onclick=()=>{chosen=new Set(team.map(st=>String(st.id)));team.forEach(st=>updatePerson(st.id,true));};\n    dialog.querySelector("#rosterTemplateNone").onclick=()=>{chosen.clear();team.forEach(st=>updatePerson(st.id,false));};\n    dialog.querySelector("#rosterTemplateForm").onsubmit=async e=>{\n      e.preventDefault();\n      const name=dialog.querySelector("#rosterTemplateName").value.trim();\n      if(!name){alert("Вкажіть назву кнопки шаблону.");return;}\n      editing.name=name;\n      editing.studentIds=team.filter(st=>chosen.has(String(st.id))).map(st=>st.id);\n      const roles={};\n      dialog.querySelectorAll(".roster-template-role").forEach(input=>{\n        const sid=String(input.dataset.id), role=input.value.trim();\n        if(chosen.has(sid)&&role) roles[sid]=role;\n      });\n      editing.studentRoles=roles;\n      const ok=await save();\n      if(!ok){alert("Не вдалося зберегти шаблон.");return;}\n      openProjectRosterTemplates(projectId);\n    };\n    return;\n  }\n\n  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">\n    <div class="project-section-head"><div><h2 style="margin:0">Шаблони складу</h2><div class="muted">${esc(p.name)} · назви кнопок, людей і функції можна змінювати в кожному проєкті</div></div><button class="ghost" id="rosterTemplatesBackProject">Назад до проєкту</button></div>\n    <div class="profile-actions" style="margin:14px 0"><button type="button" class="primary" id="addRosterTemplate">+ Новий шаблон</button>${templates.length?"":`<button type="button" class="ghost" id="addDefaultRosterTemplates">Додати 4 базові кнопки</button>`}</div>\n    <div class="planner-block-list">\n      ${templates.map(t=>{\n        const payload=rosterTemplatePayload(projectId,t);\n        return `<div class="planner-block-row"><b>${esc(t.name||"Без назви")}</b><div><div class="muted">${payload.studentIds.length} ос.${Object.keys(payload.studentRoles).length?` · функцій: ${Object.keys(payload.studentRoles).length}`:""}</div></div><div class="planner-block-actions"><button type="button" class="ghost edit-roster-template" data-id="${esc(String(t.id))}">Редагувати</button><button type="button" class="ghost danger-inline delete-roster-template" data-id="${esc(String(t.id))}">Видалити</button></div></div>`;\n      }).join("")||'<div class="empty">Шаблонів ще немає. Створіть свої кнопки для типових складів команди.</div>'}\n    </div>\n    <div class="notice" style="margin-top:14px">Шаблон не змінює загальну команду проєкту. Він лише швидко підставляє потрібних людей і їхні функції в конкретну дату або робочий блок.</div>\n  </div>`;\n  dialog.querySelector("#rosterTemplatesBackProject").onclick=()=>openProjectCard(projectId);\n  dialog.querySelector("#addRosterTemplate").onclick=async()=>{\n    const t={id:`rt_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name:"Новий шаблон",studentIds:[],studentRoles:{}};\n    templates.push(t);\n    const ok=await save();\n    if(!ok){templates.splice(templates.indexOf(t),1);alert("Не вдалося створити шаблон.");return;}\n    openProjectRosterTemplates(projectId,t.id);\n  };\n  const defaultsBtn=dialog.querySelector("#addDefaultRosterTemplates");\n  if(defaultsBtn) defaultsBtn.onclick=async()=>{\n    defaultRosterTemplateNames().forEach(name=>templates.push({id:`rt_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,name,studentIds:[],studentRoles:{}}));\n    const ok=await save(); if(!ok){alert("Не вдалося створити базові шаблони.");return;} openProjectRosterTemplates(projectId);\n  };\n  dialog.querySelectorAll(".edit-roster-template").forEach(btn=>btn.onclick=()=>openProjectRosterTemplates(projectId,btn.dataset.id));\n  dialog.querySelectorAll(".delete-roster-template").forEach(btn=>btn.onclick=async()=>{\n    const t=rosterTemplateById(projectId,btn.dataset.id); if(!t) return;\n    if(!confirm(`Видалити шаблон «${t.name||"Без назви"}»?`)) return;\n    p.rosterTemplates=projectRosterTemplates(p).filter(x=>String(x.id)!==String(t.id));\n    const ok=await save(); if(!ok){alert("Не вдалося видалити шаблон.");return;} openProjectRosterTemplates(projectId);\n  });\n}\n\nfunction editProjectCard(id){\n  const p=pBy(id); if(!p) return;\n  const dialog=ensureProjectCardDialog();\n  dialog.querySelector("#projectCardBody").innerHTML=`<div class="project-body">\n    <div class="project-section-head"><div><h2 style="margin:0">Редагувати проєкт</h2><div class="muted">${esc(p.name)}</div></div><button class="ghost" onclick="openProjectCard('${id}')">Назад</button></div>\n    <form id="projectEditForm" class="project-edit-form">\n      <label>Назва<input id="prName" value="${esc(p.name||"")}"></label>\n      <label>Позначка<input id="prEmoji" value="${esc(p.emoji||"◆")}"></label>\n      <label>Колір<input id="prColor" type="color" value="${esc(p.color||"#2563EB")}"></label>\n      <label class="full">Опис<textarea id="prDescription">${esc(p.description||"")}</textarea></label>\n      <div class="full project-logo-editor">\n        <div class="project-logo-preview" id="prLogoPreview">${projectLogoHtml(p,"project-hero-logo")}</div>\n        <div class="project-logo-controls">\n          <b>Логотип проєкту</b>\n          <input id="prLogoFile" type="file" accept="image/*">\n          <button type="button" class="ghost" id="removeProjectLogo">Прибрати власне лого</button>\n          <span class="muted">Можна вибрати PNG, JPG або WEBP прямо з комп’ютера.</span>\n        </div>\n      </div>\n      <div class="full profile-actions">\n        <button type="button" class="ghost" onclick="openProjectCard('${id}')">Скасувати</button>\n        <button type="submit" class="primary">Зберегти</button>\n      </div>\n    </form>\n    <div class="project-danger">\n      <button class="danger" id="deleteProjectBtn">Видалити проєкт</button>\n    </div>\n  </div>`;\n\n  let removeLogoRequested=false;\n  dialog.querySelector("#removeProjectLogo").onclick=()=>{\n    removeLogoRequested=true;\n    dialog.querySelector("#prLogoFile").value="";\n    dialog.querySelector("#prLogoPreview").innerHTML=`<span>${p.emoji||"◆"}</span>`;\n  };\n  dialog.querySelector("#prLogoFile").onchange=async e=>{\n    const f=e.target.files?.[0];\n    if(!f) return;\n    try{\n      const data=await compressProjectLogo(f);\n      removeLogoRequested=false;\n      dialog.querySelector("#prLogoPreview").innerHTML=`<img src="${data}" alt="Попередній перегляд">`;\n    }catch(err){\n      alert(err.message||"Не вдалося прочитати логотип.");\n      e.target.value="";\n    }\n  };\n\n  dialog.querySelector("#projectEditForm").onsubmit=async e=>{\n    e.preventDefault();\n    const submit=e.submitter;\n    if(submit){submit.disabled=true;submit.textContent="Збереження…";}\n    try{\n      p.name=$("#prName").value.trim()||p.name;\n      p.emoji=$("#prEmoji").value.trim()||"◆";\n      p.color=$("#prColor").value;\n      p.description=$("#prDescription").value.trim();\n\n      const logoFile=dialog.querySelector("#prLogoFile").files?.[0];\n      if(logoFile) p.logoData=await compressProjectLogo(logoFile);\n      else if(removeLogoRequested) delete p.logoData;\n\n      const ok=await save();\n      if(!ok) throw new Error("Не вдалося зберегти зміни в хмарі.");\n      openProjectCard(id);\n    }catch(err){\n      alert(err.message||"Не вдалося зберегти проєкт.");\n      if(submit){submit.disabled=false;submit.textContent="Зберегти";}\n    }\n  };\n\n  dialog.querySelector("#deleteProjectBtn").onclick=async()=>{\n    if(!confirm(`Видалити проєкт «${p.name}» разом з його датами та призначеннями?`)) return;\n    db.projects=db.projects.filter(x=>x.id!==id);\n    db.events=db.events.filter(x=>x.projectId!==id);\n    db.assignments=db.assignments.filter(x=>x.projectId!==id);\n    await save();\n    dialog.close();\n    projects();\n  };\n}\n\nfunction datesBetween(start,end){\n  const a=[], d=new Date(start+"T12:00:00"), e=new Date(end+"T12:00:00");\n  for(;d<=e;d.setDate(d.getDate()+1)) a.push(d.toISOString().slice(0,10));\n  return a;\n}\n\nfunction ensureDayDialog(){\n  let d=document.querySelector("#dayDialog");\n  if(d) return d;\n  d=document.createElement("dialog");\n  d.id="dayDialog";\n  d.className="student-dialog";\n  d.innerHTML=`<div id="dayDialogBody"></div>`;\n  document.body.appendChild(d);\n  return d;\n}\n\n\n\nfunction eventKey(e){\n  return `${e.projectId}|${e.date}|${e.startTime||""}|${e.endTime||""}|${e.type}`;\n}\nfunction studentsForEvent(e){\n  // v39: every work block inherits one roster for its date. This keeps desktop, iPad and phone in sync.\n  const ids=new Set(effectiveProjectDateRosterIds(e.projectId,e.date).map(String));\n  return db.students.filter(s=>ids.has(String(s.id)));\n}\nfunction studentRoleForEvent(e,studentId){\n  const roles=e?.studentRoles;\n  if(!roles || typeof roles!=="object") return "";\n  return String(roles[String(studentId)] ?? roles[studentId] ?? "").trim();\n}\n\n\nfunction ensureEventInfoDialog(){\n  let d=document.querySelector("#eventInfoDialog");\n  if(d) return d;\n  d=document.createElement("dialog");\n  d.id="eventInfoDialog";\n  d.className="student-dialog";\n  d.innerHTML=`<div id="eventInfoBody"></div>`;\n  document.body.appendChild(d);\n  return d;\n}\n\nfunction showStudentEventInfo(studentId,item){\n  const d=ensureEventInfoDialog();\n  const s=sBy(studentId);\n  const meta=eventMetaText(item);\n  d.querySelector("#eventInfoBody").innerHTML=`<div class="event-info-card">\n    <div class="event-info-head" style="box-shadow:inset 6px 0 0 ${item.p.color}">\n      <h2>${esc(item.type)}</h2>\n      <div class="muted">${fullfmt(item.date)} · ${esc(item.p.name)}</div>\n    </div>\n    <div class="event-info-body">\n      ${eventTimeText(item)?`<div class="event-info-row"><span>Час</span><b>${esc(eventTimeText(item))}</b></div>`:""}\n      ${item.location?`<div class="event-info-row"><span>Локація</span><b>${esc(item.location)}</b></div>`:""}\n      ${studentRoleForEvent(item,studentId)?`<div class="event-info-row"><span>Обов'язки</span><b>${esc(studentRoleForEvent(item,studentId))}</b></div>`:""}
      ${item.note?`<div class="event-info-row"><span>Примітка</span><b>${esc(item.note)}</b></div>`:""}
      <div class="event-info-row"><span>Студент</span><b>${esc(s?.name||"")}</b></div>
    </div>
    <div class="event-info-actions">
      <button class="ghost" id="eventInfoOpenProject">Відкрити проєкт</button>
      <button class="primary" id="eventInfoClose">Закрити</button>
    </div>
  </div>`;
  d.querySelector("#eventInfoClose").onclick=()=>d.close();
  d.querySelector("#eventInfoOpenProject").onclick=()=>{
    d.close();
    document.querySelector("#studentDialog")?.close();
    openProjectCard(item.p.id);
  };
  d.showModal();
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
  let activeProjectId="__all__";
  let activeStudentGroup="__all__";
  let pendingAddIds=new Set();

  const dayProjectEvents=()=> (db.events||[]).filter(e=>String(e.date||"")===String(date)&&pBy(e.projectId));
  const dayLessons=()=> academicLessons().filter(l=>academicLessonOccursOnDate(l,date));

  const projectGroups=()=>{
    const map=new Map();
    dayProjectEvents().forEach(e=>{
      const pid=String(e.projectId);
      if(!map.has(pid)) map.set(pid,{project:pBy(pid),events:[],studentIds:new Set()});
      const group=map.get(pid);
      group.events.push(e);
      studentsForEvent(e).forEach(st=>group.studentIds.add(String(st.id)));
    });
    return [...map.values()].sort((a,b)=>{
      const at=String(a.events[0]?.startTime||"");
      const bt=String(b.events[0]?.startTime||"");
      return at.localeCompare(bt)||String(a.project?.name||"").localeCompare(String(b.project?.name||""),"uk");
    });
  };

  const render=()=>{
    const projectEvents=dayProjectEvents();
    const lessons=dayLessons();
    const dayItems=[];

    projectEvents.forEach(e=>dayItems.push({activity:projectActivity(e),students:studentsForEvent(e)}));
    lessons.forEach(l=>dayItems.push({activity:lessonActivity(l,date),students:lessonStudents(l)}));
    dayItems.sort((a,b)=>String(a.activity.startTime||"").localeCompare(String(b.activity.startTime||"")));

    const occupiedIds=new Set();
    dayItems.forEach(x=>x.students.forEach(st=>occupiedIds.add(String(st.id))));

    const allStudents=(db.students||[]);
    const cohortStudents=activeStudentGroup==="__all__"
      ? allStudents
      : allStudents.filter(st=>studentGroupLabel(st)===activeStudentGroup);
    const cohortIds=new Set(cohortStudents.map(st=>String(st.id)));
    const visibleOccupiedIds=new Set([...occupiedIds].filter(id=>cohortIds.has(String(id))));
    const freeStudents=cohortStudents.filter(st=>!occupiedIds.has(String(st.id)));

    const pretty=new Date(date+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
    const projectCount=projectEvents.length;
    const lessonCount=lessons.length;
    const groups=projectGroups();
    const studentGroups=[...new Set(allStudents.map(studentGroupLabel))].sort((a,b)=>a.localeCompare(b,"uk"));

    if(activeStudentGroup!=="__all__"&&!studentGroups.includes(activeStudentGroup)){
      activeStudentGroup="__all__";
      pendingAddIds.clear();
    }
    if(activeProjectId!=="__all__"&&!groups.some(g=>String(g.project?.id)===String(activeProjectId))){
      activeProjectId="__all__";
      pendingAddIds.clear();
    }

    const activeGroup=activeProjectId==="__all__"?null:groups.find(g=>String(g.project?.id)===String(activeProjectId));
    const activeStudents=activeGroup
      ? cohortStudents.filter(st=>activeGroup.studentIds.has(String(st.id)))
      : cohortStudents.filter(st=>visibleOccupiedIds.has(String(st.id)));
    const busyElsewhere=activeGroup
      ? cohortStudents.filter(st=>occupiedIds.has(String(st.id))&&!activeGroup.studentIds.has(String(st.id)))
      : [];

    const groupProjectCount=g=>cohortStudents.filter(st=>g.studentIds.has(String(st.id))).length;
    const eventVisibleCount=x=>x.students.filter(st=>cohortIds.has(String(st.id))).length;
    const filterLabel=activeStudentGroup==="__all__"?"Усі групи":activeStudentGroup;

    dialog.querySelector("#dayDialogBody").innerHTML=`<div class="day-panel">
      <div class="day-panel-head">
        <div>
          <h2>${pretty}</h2>
          <div class="muted">${projectCount} проєктних подій · ${lessonCount} занять · ${visibleOccupiedIds.size} зайнятих · ${freeStudents.length} вільних${activeStudentGroup!=="__all__"?` · ${esc(filterLabel)}`:""}</div>
        </div>
        <button class="ghost" id="closeDayDialog">Закрити</button>
      </div>

      <div class="day-group-filter" aria-label="Фільтр за групою">
        <span class="day-filter-label">Група</span>
        <button type="button" class="day-group-tab ${activeStudentGroup==="__all__"?"active":""}" data-day-group="__all__">Усі · ${allStudents.length}</button>
        ${studentGroups.map(g=>{
          const n=allStudents.filter(st=>studentGroupLabel(st)===g).length;
          return `<button type="button" class="day-group-tab ${activeStudentGroup===g?"active":""}" data-day-group="${esc(g)}">${esc(g)} · ${n}</button>`;
        }).join("")}
      </div>

      ${groups.length?`<div class="day-project-switcher" aria-label="Перемикання між проєктами">
        <button type="button" class="day-project-tab ${activeProjectId==="__all__"?"active":""}" data-day-project="__all__">Усі · ${visibleOccupiedIds.size}</button>
        ${groups.map(g=>`<button type="button" class="day-project-tab ${String(activeProjectId)===String(g.project?.id)?"active":""}" data-day-project="${esc(String(g.project?.id||""))}" style="--day-project-color:${g.project?.color||"#6b7280"}">${projectLogoHtml(g.project,"day-project-tab-logo")}<span>${esc(g.project?.name||"Проєкт")}</span><b>${groupProjectCount(g)}</b></button>`).join("")}
      </div>`:""}

      <div class="day-event-list">
        ${dayItems.map(x=>{
          const a=x.activity;
          const visibleCount=eventVisibleCount(x);
          if(a.source==="lesson"){
            return `<div class="day-event-row ${activeProjectId!=="__all__"?"day-event-dimmed":""}">
              <span class="dot" style="background:${ACADEMIC_COLOR}"></span>
              <div><b>🎓 ${esc(a.title)}</b><div class="day-event-meta">${esc(a.lessonType||"Заняття")} · ${esc(eventTimeText(a)||"Час не визначено")}${a.location?` · ауд. ${esc(a.location)}`:""} · ${visibleCount} студентів${activeStudentGroup!=="__all__"?` (${esc(activeStudentGroup)})`:""}</div></div>
              <span class="chip" style="background:#eff6ff;color:#1d4ed8">${esc(a.lessonType||"Заняття")}</span>
            </div>`;
          }
          const pr=pBy(a.projectId);
          const isActive=activeProjectId==="__all__"||String(activeProjectId)===String(a.projectId);
          return `<button type="button" class="day-event-row day-project-event-button ${isActive?"active":"day-event-dimmed"}" data-select-project="${esc(String(a.projectId||""))}">
            <span class="dot" style="background:${pr?.color||"#6b7280"}"></span>
            <div><b>${esc(pr?.name||"Проєкт")}</b><div class="day-event-meta">${esc(a.type||"Подія")}${eventTimeText(a)?` · ${esc(eventTimeText(a))}`:""} · ${visibleCount} студентів${activeStudentGroup!=="__all__"?` (${esc(activeStudentGroup)})`:""}</div></div>
            <span class="chip project-watermark" style="${pr?projectWatermarkStyle(pr):""}">${pr?projectWatermarkInner(pr,esc(shortType(a.type))):esc(shortType(a.type))}</span>
          </button>`;
        }).join("")||'<div class="empty">На цю дату немає занять або проєктних подій.</div>'}
      </div>

      ${activeGroup?`<div class="day-project-focus-head" style="--day-project-color:${activeGroup.project?.color||"#6b7280"}">
        <div>${projectLogoHtml(activeGroup.project,"day-project-focus-logo")}<span><small>ВИБРАНИЙ ПРОЄКТ · ${esc(filterLabel)}</small><b>${esc(activeGroup.project?.name||"Проєкт")}</b><em>${activeGroup.events.map(e=>esc(e.type||"Подія")).join(" · ")}</em></span></div>
        <div class="muted">${busyElsewhere.length} зайняті в інших проєктах або на заняттях</div>
      </div>`:""}

      <div class="availability-grid-two">
        <div class="availability-card">
          <div class="availability-title"><b>${activeGroup?`У ПРОЄКТІ · ${activeStudents.length}`:`ЗАЙНЯТІ · ${visibleOccupiedIds.size}`}</b><small>${esc(studentGroupSummary(activeStudents)||filterLabel)}</small></div>
          <div class="availability-list">
            ${activeStudents.map(st=>`<button class="availability-chip day-student" data-id="${esc(String(st.id))}">${studentIdentityHtml(st,studentBusyLabelsOnDate(st.id,date).join(" · "))}</button>`).join("")||`<span class="muted">${activeGroup?"У цьому проєкті для вибраної групи цього дня ще нікого немає.":"Зайнятих студентів у вибраній групі немає."}</span>`}
          </div>
        </div>
        <div class="availability-card">
          <div class="availability-card-head">
            <div class="availability-title"><b>${activeGroup?`ВІЛЬНІ ЦЬОГО ДНЯ · ${freeStudents.length}`:`ВІЛЬНІ · ${freeStudents.length}`}</b><small>${esc(studentGroupSummary(freeStudents)||filterLabel)}</small></div>
            ${activeGroup?`<button type="button" class="day-add-selected primary" id="dayAddSelected" ${pendingAddIds.size?"":"disabled"}>+ Додати вибраних · ${pendingAddIds.size}</button>`:""}
          </div>
          <div class="availability-list ${activeGroup?"day-free-list":""}">
            ${freeStudents.map(st=> activeGroup
              ? `<span class="day-free-person ${pendingAddIds.has(String(st.id))?"selected":""}"><button class="availability-chip day-student" data-id="${esc(String(st.id))}">${studentIdentityHtml(st)}</button><button type="button" class="day-add-person ${pendingAddIds.has(String(st.id))?"selected":""}" data-add-id="${esc(String(st.id))}" title="${pendingAddIds.has(String(st.id))?"Прибрати з вибраних":"Додати до вибраних"}">${pendingAddIds.has(String(st.id))?"✓":"+"}</button></span>`
              : `<button class="availability-chip day-student" data-id="${esc(String(st.id))}">${studentIdentityHtml(st)}</button>`
            ).join("")||'<span class="muted">Вільних студентів у вибраній групі немає.</span>'}
          </div>
          ${activeGroup?'<div class="day-add-hint">Можна позначити кількох. Додаються тільки ті, хто справді вільний цього дня.</div>':""}
        </div>
      </div>
      ${activeGroup&&busyElsewhere.length?`<div class="availability-card day-busy-elsewhere"><div class="availability-title"><b>ЗАЙНЯТІ В ІНШОМУ · ${busyElsewhere.length}</b><small>${esc(studentGroupSummary(busyElsewhere)||filterLabel)}</small></div><div class="availability-list">${busyElsewhere.map(st=>`<button class="availability-chip day-student" data-id="${esc(String(st.id))}">${studentIdentityHtml(st,studentBusyLabelsOnDate(st.id,date).join(" · "))}</button>`).join("")}</div></div>`:""}
    </div>`;

    dialog.querySelector("#closeDayDialog").onclick=()=>dialog.close();

    dialog.querySelectorAll("[data-day-group]").forEach(btn=>btn.onclick=()=>{
      activeStudentGroup=String(btn.dataset.dayGroup||"__all__");
      pendingAddIds.clear();
      render();
    });
    dialog.querySelectorAll("[data-day-project]").forEach(btn=>btn.onclick=()=>{
      activeProjectId=String(btn.dataset.dayProject||"__all__");
      pendingAddIds.clear();
      render();
    });
    dialog.querySelectorAll("[data-select-project]").forEach(btn=>btn.onclick=()=>{
      activeProjectId=String(btn.dataset.selectProject||"__all__");
      pendingAddIds.clear();
      render();
    });

    dialog.querySelectorAll(".day-student").forEach(b=>b.onclick=e=>{
      e.stopPropagation();
      const sid=resolveStudentId(b.dataset.id);
      dialog.close();
      if(sid!==undefined) openStudent(sid);
    });

    dialog.querySelectorAll("[data-add-id]").forEach(btn=>btn.onclick=e=>{
      e.stopPropagation();
      const sid=String(btn.dataset.addId||"");
      if(!sid) return;
      if(pendingAddIds.has(sid)) pendingAddIds.delete(sid); else pendingAddIds.add(sid);
      render();
    });

    const addSelected=dialog.querySelector("#dayAddSelected");
    if(addSelected) addSelected.onclick=async()=>{
      if(!activeGroup||!pendingAddIds.size) return;
      const freeNow=new Set((db.students||[]).filter(st=>{
        if(activeStudentGroup!=="__all__"&&studentGroupLabel(st)!==activeStudentGroup) return false;
        return !studentActivitiesOnDate(st.id,date).length;
      }).map(st=>String(st.id)));
      const ids=[...pendingAddIds].filter(id=>freeNow.has(String(id)));
      if(!ids.length){
        alert("Вибрані студенти вже не вільні на цю дату. Оновлюю список.");
        pendingAddIds.clear();
        render();
        return;
      }

      const projectId=String(activeGroup.project?.id||"");
      const targetEvents=(db.events||[]).filter(e=>String(e.projectId)===projectId&&String(e.date)===String(date));
      if(!targetEvents.length) return;

      const beforeAssignments=clone(db.assignments||[]);
      const beforeEvents=clone(db.events||[]);
      const projectRef=pBy(projectId);
      const beforeDateRosters=clone(projectRef?.dateRosters||{});
      const teamBefore=projectStudents(projectId).map(st=>st.id);

      // Preserve the old inherited event rosters before extending the project team,
      // so adding somebody today does not silently add them to every other date.
      (db.events||[]).filter(e=>String(e.projectId)===projectId).forEach(e=>{
        if(!Array.isArray(e.studentIds)) e.studentIds=[...teamBefore];
      });

      ids.forEach(sid=>{
        if(!(db.assignments||[]).some(a=>String(a.projectId)===projectId&&String(a.studentId)===String(sid))){
          db.assignments.push({projectId,studentId:resolveStudentId(sid)??sid});
        }
      });

      targetEvents.forEach(e=>{
        const set=new Set((Array.isArray(e.studentIds)?e.studentIds:[]).map(String));
        ids.forEach(id=>set.add(String(id)));
        e.studentIds=(db.students||[]).filter(st=>set.has(String(st.id))).map(st=>st.id);
      });
      // v31: the date-level roster is authoritative too; keep it identical to what was added.
      if(projectRef){
        const dateSet=new Set(projectDateRosterIds(projectRef,date));
        ids.forEach(id=>dateSet.add(String(id)));
        setProjectDateRosterIds(projectRef,date,[...dateSet]);
      }

      addSelected.disabled=true;
      addSelected.textContent="Збереження…";
      const ok=await save();
      if(!ok){
        db.assignments=beforeAssignments;
        db.events=beforeEvents;
        if(projectRef) projectRef.dateRosters=beforeDateRosters;
        cache();
        alert("Не вдалося зберегти зміни в хмарі.");
        render();
        return;
      }

      pendingAddIds.clear();
      render();
    };
  };

  render();
  if(!dialog.open) dialog.showModal();
}

function ensureAcademicDialog(){
  let d=document.querySelector("#academicDialog");
  if(d) return d;
  d=document.createElement("dialog");
  d.id="academicDialog";
  d.className="student-dialog academic-dialog";
  d.innerHTML='<div id="academicDialogBody"></div>';
  document.body.appendChild(d);
  return d;
}
const academicPatternLabel=l=>{
  if(l.mode==="once") return l.date?fullfmt(l.date):"Разове заняття";
  const w=academicWeekdays.find(x=>x.value===String(l.weekday))?.label||"День";
  const pattern={all:"щотижня",odd:"непарні тижні",even:"парні тижні"}[l.weekPattern||"all"]||"щотижня";
  return `${w} · ${pattern}`;
};
const academicAudienceLabel=l=>{
  const ids=Array.isArray(l.studentIds)?l.studentIds.filter(Boolean):[];
  if(String(l?.scope||"")==="selected") return ids.length?`${ids.length} окремих студентів`:"Окремі студенти · не зіставлено";
  return ids.length?`${ids.length} окремих студентів`:(l.group||"Уся група");
};
function openAcademicEditor(lessonId=null){
  const d=ensureAcademicDialog();
  const lesson=lessonId?academicLessons().find(x=>String(x.id)===String(lessonId)):null;
  const base=lesson?clone(lesson):{
    id:academicLessonId(),
    subject:"",
    lessonType:"Практичне заняття",
    group:availableGroups()[0]||"",
    mode:"weekly",
    weekday:"1",
    startTime:"09:00",
    endTime:"10:20",
    startDate:"2026-09-01",
    endDate:"2026-12-31",
    weekPattern:"all",
    date:localIsoDate(),
    room:"",
    teacher:"",
    note:"",
    scope:"group",
    studentIds:[]
  };
  const body=d.querySelector("#academicDialogBody");
  body.innerHTML=`<div class="academic-editor">
    <div class="project-section-head">
      <div><h2 style="margin:0">${lesson?"Редагувати заняття":"Нове заняття"}</h2><div class="muted">Розклад занять студентів</div></div>
      <button type="button" class="ghost" id="academicClose">Закрити</button>
    </div>
    ${lesson?.source==="rems-rozklad"?'<div class="academic-import-warning"><b>Імпортовано з REMS-РОЗКЛАД</b><span>Цей запис можна переглянути або виправити, але під час наступного імпорту для цієї групи він буде замінений актуальними даними з REMS-РОЗКЛАД.</span></div>':""}
    <form id="academicForm" class="academic-form">
      <label class="full">Дисципліна<input id="academicSubject" required value="${esc(base.subject||"")}" placeholder="Наприклад: Режисура естради і шоу"></label>
      <label>Вид заняття<select id="academicLessonType">${academicLessonTypes.map(t=>`<option value="${esc(t)}" ${String(base.lessonType||"Практичне заняття")===t?"selected":""}>${esc(t)}</option>`).join("")}</select></label>
      <label>Група<select id="academicGroup" required>${groupOptionsHtml(base.group,"Оберіть групу")}</select></label>
      <label>Формат<select id="academicMode">
        <option value="weekly" ${base.mode!=="once"?"selected":""}>Регулярне заняття</option>
        <option value="once" ${base.mode==="once"?"selected":""}>Разове заняття</option>
      </select></label>
      <label>Початок<input id="academicStartTime" type="time" value="${esc(base.startTime||"")}"></label>
      <label>Кінець<input id="academicEndTime" type="time" value="${esc(base.endTime||"")}"></label>
      <label class="full" style="display:flex;align-items:center;gap:8px"><input id="academicTimeUndetermined" type="checkbox" ${isTimeUndetermined(base)?"checked":""} style="width:auto"> <b>Час не визначено</b></label>

      <div class="academic-weekly-fields full">
        <div class="academic-form-grid">
          <label>День тижня<select id="academicWeekday">${academicWeekdays.map(w=>`<option value="${w.value}" ${String(base.weekday)===w.value?"selected":""}>${w.label}</option>`).join("")}</select></label>
          <label>Тижні<select id="academicWeekPattern">
            <option value="all" ${base.weekPattern==="all"?"selected":""}>Кожного тижня</option>
            <option value="odd" ${base.weekPattern==="odd"?"selected":""}>Непарні навчальні тижні</option>
            <option value="even" ${base.weekPattern==="even"?"selected":""}>Парні навчальні тижні</option>
          </select></label>
          <label>Від<input id="academicStartDate" type="date" value="${esc(base.startDate||"2026-09-01")}"></label>
          <label>До<input id="academicEndDate" type="date" value="${esc(base.endDate||"2026-12-31")}"></label>
        </div>
      </div>

      <div class="academic-once-fields full">
        <label>Дата<input id="academicDate" type="date" value="${esc(base.date||localIsoDate())}"></label>
      </div>

      <label>Аудиторія<select id="academicRoom">${academicRoomOptionsHtml(base.room)}</select></label>
      <label id="academicRoomOtherWrap" style="display:none">Інша аудиторія<input id="academicRoomOther" value="${esc(academicRoomValues().includes(String(base.room||"").trim())?"":String(base.room||""))}" placeholder="Введіть номер / назву"></label>
      <label>Викладач<input id="academicTeacher" value="${esc(base.teacher||"")}" placeholder="Необов’язково"></label>

      <label class="full">Для кого<select id="academicScope">
        <option value="group" ${String(base.scope||"")!=="selected"&&(!Array.isArray(base.studentIds)||!base.studentIds.length)?"selected":""}>Уся група</option>
        <option value="selected" ${String(base.scope||"")==="selected"||(Array.isArray(base.studentIds)&&base.studentIds.length)?"selected":""}>Окремі студенти</option>
      </select></label>
      <div class="academic-student-pick full" id="academicStudentPick"></div>
      <label class="full">Примітка<textarea id="academicNote" rows="3" placeholder="Необов’язково">${esc(base.note||"")}</textarea></label>

      <div class="dialog-actions academic-actions">
        ${lesson?'<button type="button" class="danger ghost" id="academicDelete">Видалити</button>':""}
        <button type="button" class="ghost" id="academicCancel">Скасувати</button>
        <button type="submit" class="primary">${lesson?"Зберегти":"Додати заняття"}</button>
      </div>
    </form>
  </div>`;

  const form=body.querySelector("#academicForm");
  const mode=body.querySelector("#academicMode");
  const group=body.querySelector("#academicGroup");
  const scope=body.querySelector("#academicScope");
  const studentPick=body.querySelector("#academicStudentPick");
  const roomSelect=body.querySelector("#academicRoom");
  const roomOtherWrap=body.querySelector("#academicRoomOtherWrap");
  const roomOther=body.querySelector("#academicRoomOther");

  const updateRoom=()=>{
    const other=roomSelect.value==="__other__";
    roomOtherWrap.style.display=other?"":"none";
    if(other) setTimeout(()=>roomOther?.focus(),0);
  };
  const updateMode=()=>{
    const once=mode.value==="once";
    body.querySelector(".academic-weekly-fields").style.display=once?"none":"";
    body.querySelector(".academic-once-fields").style.display=once?"":"none";
  };
  const updateStudents=()=>{
    if(scope.value!=="selected"){
      studentPick.style.display="none";
      studentPick.innerHTML="";
      return;
    }
    studentPick.style.display="";
    const selected=new Set((base.studentIds||[]).map(String));
    const rows=(db.students||[]).filter(st=>!group.value||String(st.group||"")===group.value);
    studentPick.innerHTML=`<div class="academic-student-pick-head"><b>Оберіть студентів</b><span>${rows.length} у групі</span></div>
      <div class="academic-student-grid">${rows.map(st=>`<label class="academic-student-check"><input type="checkbox" value="${esc(String(st.id))}" ${selected.has(String(st.id))?"checked":""}><span>${studentIdentityHtml(st)}</span></label>`).join("")||'<span class="muted">У цій групі студентів немає.</span>'}</div>`;
  };
  mode.onchange=updateMode;
  roomSelect.onchange=updateRoom;
  group.onchange=updateStudents;
  scope.onchange=updateStudents;
  updateRoom();
  updateMode();
  updateStudents();
  bindTimeUndeterminedControls(body,"#academicTimeUndetermined","#academicStartTime","#academicEndTime");

  body.querySelector("#academicClose").onclick=()=>d.close();
  body.querySelector("#academicCancel").onclick=()=>d.close();
  if(body.querySelector("#academicDelete")) body.querySelector("#academicDelete").onclick=async()=>{
    if(!confirm(`Видалити заняття «${base.subject||"Без назви"}»?`)) return;
    db.lessons=academicLessons().filter(x=>String(x.id)!==String(base.id));
    const ok=await save();
    if(!ok){alert("Не вдалося зберегти зміни в хмару.");return;}
    d.close();
    if(currentView==="academic") academic();
  };

  form.onsubmit=async e=>{
    e.preventDefault();
    const subject=body.querySelector("#academicSubject").value.trim();
    const groupValue=group.value;
    if(!subject||!groupValue){alert("Вкажіть дисципліну та групу.");return;}
    const timeUndetermined=!!body.querySelector("#academicTimeUndetermined")?.checked;
    const startTime=timeUndetermined?"":body.querySelector("#academicStartTime").value;
    const endTime=timeUndetermined?"":body.querySelector("#academicEndTime").value;
    if(!timeUndetermined&&startTime&&endTime&&timeMinutes(startTime)>=timeMinutes(endTime)){alert("Час завершення має бути пізніше за час початку.");return;}
    const studentIds=scope.value==="selected"
      ? [...studentPick.querySelectorAll('input[type="checkbox"]:checked')].map(x=>String(x.value))
      : [];
    if(scope.value==="selected"&&!studentIds.length){alert("Оберіть хоча б одного студента.");return;}
    const record={
      ...base,
      id:String(base.id||academicLessonId()),
      subject,
      lessonType:body.querySelector("#academicLessonType").value,
      group:groupValue,
      mode:mode.value,
      startTime,
      endTime,
      timeUndetermined,
      weekday:body.querySelector("#academicWeekday").value,
      weekPattern:body.querySelector("#academicWeekPattern").value,
      startDate:body.querySelector("#academicStartDate").value,
      endDate:body.querySelector("#academicEndDate").value,
      date:body.querySelector("#academicDate").value,
      room:(roomSelect.value==="__other__"?roomOther.value.trim():roomSelect.value.trim()),
      teacher:body.querySelector("#academicTeacher").value.trim(),
      note:body.querySelector("#academicNote").value.trim(),
      scope:scope.value,
      studentIds
    };
    if(record.mode!=="once"&&(!record.startDate||!record.endDate||record.startDate>record.endDate)){
      alert("Перевірте період регулярного заняття."); return;
    }
    if(record.mode==="once"&&!record.date){alert("Оберіть дату.");return;}
    const idx=academicLessons().findIndex(x=>String(x.id)===String(record.id));
    if(idx>=0) db.lessons[idx]=record; else db.lessons.push(record);
    const submit=e.submitter; if(submit){submit.disabled=true;submit.textContent="Збереження…";}
    const ok=await save();
    if(!ok){if(submit){submit.disabled=false;submit.textContent=lesson?"Зберегти":"Додати заняття";}alert("Не вдалося зберегти заняття в хмару.");return;}
    d.close();
    if(currentView==="academic") academic();
  };
  if(!d.open) d.showModal();
}


const academicOccurrenceKey=(lessonId,date)=>`${String(lessonId||"")}@@${String(date||"")}`;
const academicParseOccurrenceKey=key=>{
  const i=String(key||"").lastIndexOf("@@");
  return i<0?{lessonId:String(key||""),date:""}:{lessonId:String(key||"").slice(0,i),date:String(key||"").slice(i+2)};
};
const academicExcludeOccurrence=(lesson,date)=>{
  if(!lesson||lesson.mode==="once") return;
  const set=new Set((Array.isArray(lesson.excludedDates)?lesson.excludedDates:[]).map(String));
  set.add(String(date));
  lesson.excludedDates=[...set].sort();
};
const academicDetachOccurrence=(lesson,date)=>{
  if(!lesson) return null;
  if(lesson.mode==="once") return lesson;
  academicExcludeOccurrence(lesson,date);
  const copy={
    ...clone(lesson),
    id:academicLessonId(),
    mode:"once",
    date:String(date),
    parentLessonId:String(lesson.id||""),
    source:lesson.source===ACADEMIC_IMPORT_SOURCE?"local-override":lesson.source,
    bulkOverride:true,
    bulkOverrideAt:new Date().toISOString()
  };
  delete copy.excludedDates;
  db.lessons.push(copy);
  return copy;
};
function openAcademicBulkEditor(keys=[]){
  const selected=[...new Set((keys||[]).map(String).filter(Boolean))];
  const occurrences=selected.map(academicParseOccurrenceKey).map(x=>({
    ...x,
    lesson:academicLessons().find(l=>String(l.id)===String(x.lessonId))
  })).filter(x=>x.lesson&&x.date&&academicLessonOccursOnDate(x.lesson,x.date));
  if(!occurrences.length){alert("Немає вибраних занять для редагування.");return;}
  const d=ensureAcademicDialog();
  const body=d.querySelector("#academicDialogBody");
  const groups=[...new Set(occurrences.map(x=>String(x.lesson.group||"")).filter(Boolean))];
  const oneGroup=groups.length===1?groups[0]:"";
  const students=oneGroup?(db.students||[]).filter(st=>String(st.group||"")===oneGroup):[];
  const common=(field,def="")=>{
    const vals=[...new Set(occurrences.map(x=>String(x.lesson?.[field]??def)))];
    return vals.length===1?vals[0]:def;
  };
  const commonSubject=common("subject","");
  const commonType=common("lessonType","Практичне заняття");
  const commonStart=common("startTime","");
  const commonEnd=common("endTime","");
  const commonTimeUndetermined=occurrences.every(x=>isTimeUndetermined(x.lesson));
  const commonRoom=common("room","");
  const commonTeacher=common("teacher","");
  const commonNote=common("note","");
  body.innerHTML=`<div class="academic-editor academic-bulk-editor">
    <div class="project-section-head">
      <div><h2 style="margin:0">Масове редагування</h2><div class="muted">Вибрано ${occurrences.length} ${occurrences.length===1?"заняття":"занять"} на конкретних датах</div></div>
      <button type="button" class="ghost" id="academicBulkClose">Закрити</button>
    </div>
    <div class="academic-bulk-tip"><b>Зміняться тільки позначені поля.</b><span>Непозначені дані кожного заняття залишаться без змін.</span></div>
    <form id="academicBulkForm" class="academic-bulk-form">
      <div class="academic-bulk-field full">
        <label class="academic-bulk-toggle"><input type="checkbox" data-enable="subject"> Змінити дисципліну</label>
        <input id="bulkSubject" disabled value="${esc(commonSubject)}" placeholder="Назва дисципліни">
      </div>
      <div class="academic-bulk-field">
        <label class="academic-bulk-toggle"><input type="checkbox" data-enable="lessonType"> Змінити вид заняття</label>
        <select id="bulkLessonType" disabled>${academicLessonTypes.map(t=>`<option value="${esc(t)}" ${commonType===t?"selected":""}>${esc(t)}</option>`).join("")}</select>
      </div>
      <div class="academic-bulk-field">
        <label class="academic-bulk-toggle"><input type="checkbox" data-enable="time"> Змінити час</label>
        <div class="academic-bulk-time"><input id="bulkStartTime" type="time" disabled value="${esc(commonStart)}"><span>-</span><input id="bulkEndTime" type="time" disabled value="${esc(commonEnd)}"></div>
        <label style="display:flex;align-items:center;gap:7px;margin-top:7px"><input id="bulkTimeUndetermined" type="checkbox" disabled ${commonTimeUndetermined?"checked":""} style="width:auto"> <b>Час не визначено</b></label>
      </div>
      <div class="academic-bulk-field">
        <label class="academic-bulk-toggle"><input type="checkbox" data-enable="room"> Змінити аудиторію</label>
        <select id="bulkRoom" disabled>${academicRoomOptionsHtml(commonRoom)}</select>
        <input id="bulkRoomOther" disabled style="display:none;margin-top:7px" value="${esc(academicRoomValues().includes(String(commonRoom||"").trim())?"":String(commonRoom||""))}" placeholder="Номер / назва аудиторії">
      </div>
      <div class="academic-bulk-field">
        <label class="academic-bulk-toggle"><input type="checkbox" data-enable="teacher"> Змінити викладача</label>
        <input id="bulkTeacher" disabled value="${esc(commonTeacher)}" placeholder="Викладач">
      </div>
      <div class="academic-bulk-field full ${oneGroup?"":"is-disabled"}">
        <label class="academic-bulk-toggle"><input type="checkbox" data-enable="audience" ${oneGroup?"":"disabled"}> Змінити студентів</label>
        ${oneGroup?`<div class="academic-bulk-audience" data-controls="audience">
          <select id="bulkScope" disabled><option value="group">Уся група ${esc(oneGroup)}</option><option value="selected">Окремі студенти</option></select>
          <div id="bulkStudentPick" class="academic-student-pick" style="display:none"></div>
        </div>`:`<div class="muted">Щоб одночасно змінити студентів, вибрані заняття мають належати одній групі.</div>`}
      </div>
      <div class="academic-bulk-field full">
        <label class="academic-bulk-toggle"><input type="checkbox" data-enable="note"> Змінити примітку</label>
        <textarea id="bulkNote" rows="3" disabled placeholder="Примітка">${esc(commonNote)}</textarea>
      </div>
      <div class="academic-bulk-dates full"><b>Вибрані дати:</b><span>${[...new Set(occurrences.map(x=>x.date))].sort().map(fullfmt).join(" · ")}</span></div>
      <div class="dialog-actions academic-actions full">
        <button type="button" class="ghost" id="academicBulkCancel">Скасувати</button>
        <button type="submit" class="primary">Застосувати до ${occurrences.length}</button>
      </div>
    </form>
  </div>`;
  const form=body.querySelector("#academicBulkForm");
  const toggles=[...body.querySelectorAll('[data-enable]')];
  const byKey={
    subject:["#bulkSubject"],lessonType:["#bulkLessonType"],time:["#bulkStartTime","#bulkEndTime","#bulkTimeUndetermined"],
    room:["#bulkRoom","#bulkRoomOther"],teacher:["#bulkTeacher"],audience:["#bulkScope"],note:["#bulkNote"]
  };
  const roomSelect=body.querySelector("#bulkRoom");
  const roomOther=body.querySelector("#bulkRoomOther");
  const bulkTimeUndetermined=body.querySelector("#bulkTimeUndetermined");
  const bulkStart=body.querySelector("#bulkStartTime");
  const bulkEnd=body.querySelector("#bulkEndTime");
  const audienceToggle=body.querySelector('[data-enable="audience"]');
  const scope=body.querySelector("#bulkScope");
  const studentPick=body.querySelector("#bulkStudentPick");
  const syncEnabled=()=>{
    toggles.forEach(t=>{
      const key=t.dataset.enable;
      (byKey[key]||[]).forEach(sel=>{const el=body.querySelector(sel);if(el)el.disabled=!t.checked;});
    });
    const timeEnabled=!!body.querySelector('[data-enable="time"]')?.checked;
    if(bulkTimeUndetermined){
      bulkTimeUndetermined.disabled=!timeEnabled;
      if(timeEnabled&&bulkTimeUndetermined.checked){if(bulkStart)bulkStart.value="";if(bulkEnd)bulkEnd.value="";}
      if(bulkStart) bulkStart.disabled=!timeEnabled||bulkTimeUndetermined.checked;
      if(bulkEnd) bulkEnd.disabled=!timeEnabled||bulkTimeUndetermined.checked;
    }
    if(roomSelect&&roomOther){
      roomOther.style.display=(body.querySelector('[data-enable="room"]')?.checked&&roomSelect.value==="__other__")?"":"none";
      roomOther.disabled=!(body.querySelector('[data-enable="room"]')?.checked&&roomSelect.value==="__other__");
    }
    if(scope&&studentPick){
      const enabled=!!audienceToggle?.checked;
      studentPick.style.display=(enabled&&scope.value==="selected")?"":"none";
      studentPick.querySelectorAll("input").forEach(x=>x.disabled=!(enabled&&scope.value==="selected"));
    }
  };
  if(studentPick){
    studentPick.innerHTML=`<div class="academic-student-pick-head"><b>Оберіть студентів</b><span>${students.length} у групі</span></div>
      <div class="academic-student-grid">${students.map(st=>`<label class="academic-student-check"><input type="checkbox" value="${esc(String(st.id))}" disabled><span>${studentIdentityHtml(st)}</span></label>`).join("")||'<span class="muted">У цій групі студентів немає.</span>'}</div>`;
  }
  toggles.forEach(t=>t.onchange=syncEnabled);
  if(bulkTimeUndetermined) bulkTimeUndetermined.onchange=syncEnabled;
  if(roomSelect) roomSelect.onchange=syncEnabled;
  if(scope) scope.onchange=syncEnabled;
  syncEnabled();
  body.querySelector("#academicBulkClose").onclick=()=>d.close();
  body.querySelector("#academicBulkCancel").onclick=()=>d.close();
  form.onsubmit=async e=>{
    e.preventDefault();
    const enabled=new Set(toggles.filter(t=>t.checked).map(t=>t.dataset.enable));
    if(!enabled.size){alert("Позначте хоча б одне поле, яке потрібно змінити.");return;}
    const timeUndetermined=!!body.querySelector("#bulkTimeUndetermined")?.checked;
    const start=timeUndetermined?"":(body.querySelector("#bulkStartTime")?.value||"");
    const end=timeUndetermined?"":(body.querySelector("#bulkEndTime")?.value||"");
    if(enabled.has("time")&&!timeUndetermined&&start&&end&&timeMinutes(start)>=timeMinutes(end)){alert("Час завершення має бути пізніше за час початку.");return;}
    let studentIds=[];
    if(enabled.has("audience")&&scope?.value==="selected"){
      studentIds=[...studentPick.querySelectorAll('input[type="checkbox"]:checked')].map(x=>String(x.value));
      if(!studentIds.length){alert("Оберіть хоча б одного студента.");return;}
    }
    const before=clone(academicLessons());
    for(const item of occurrences){
      const current=academicLessons().find(l=>String(l.id)===String(item.lessonId));
      if(!current) continue;
      const target=academicDetachOccurrence(current,item.date);
      if(!target) continue;
      if(enabled.has("subject")) target.subject=body.querySelector("#bulkSubject").value.trim();
      if(enabled.has("lessonType")) target.lessonType=body.querySelector("#bulkLessonType").value;
      if(enabled.has("time")){target.startTime=start;target.endTime=end;target.timeUndetermined=timeUndetermined;}
      if(enabled.has("room")) target.room=roomSelect.value==="__other__"?roomOther.value.trim():roomSelect.value.trim();
      if(enabled.has("teacher")) target.teacher=body.querySelector("#bulkTeacher").value.trim();
      if(enabled.has("audience")){target.scope=scope.value;target.studentIds=scope.value==="selected"?studentIds:[];}
      if(enabled.has("note")) target.note=body.querySelector("#bulkNote").value.trim();
      target.bulkEditedAt=new Date().toISOString();
    }
    const submit=e.submitter;if(submit){submit.disabled=true;submit.textContent="Збереження…";}
    const ok=await save();
    if(!ok){db.lessons=before;if(submit){submit.disabled=false;submit.textContent=`Застосувати до ${occurrences.length}`;}alert("Не вдалося зберегти масові зміни в хмару.");return;}
    d.close();
    if(currentView==="academic") academic();
  };
  if(!d.open)d.showModal();
}
async function academicBulkDelete(keys=[]){
  const selected=[...new Set((keys||[]).map(String).filter(Boolean))];
  const occurrences=selected.map(academicParseOccurrenceKey).map(x=>({...x,lesson:academicLessons().find(l=>String(l.id)===String(x.lessonId))})).filter(x=>x.lesson&&x.date&&academicLessonOccursOnDate(x.lesson,x.date));
  if(!occurrences.length)return false;
  if(!confirm(`Видалити вибрані заняття (${occurrences.length})?`))return false;
  const before=clone(academicLessons());
  for(const item of occurrences){
    const lesson=academicLessons().find(l=>String(l.id)===String(item.lessonId));
    if(!lesson)continue;
    if(lesson.mode==="once") db.lessons=academicLessons().filter(l=>String(l.id)!==String(lesson.id));
    else academicExcludeOccurrence(lesson,item.date);
  }
  const ok=await save();
  if(!ok){db.lessons=before;alert("Не вдалося зберегти зміни в хмару.");return false;}
  return true;
}


const ACADEMIC_IMPORT_SOURCE="rems-rozklad";
const ACADEMIC_LIVE_CONFIG={
  apiKey:"AIzaSyAV1kYVYTO6BuG0itRdxQAz09fNYx4ru8g",
  authDomain:"rems-rozklad-2026-2027.firebaseapp.com",
  projectId:"rems-rozklad-2026-2027",
  storageBucket:"rems-rozklad-2026-2027.firebasestorage.app",
  messagingSenderId:"521554904109",
  appId:"1:521554904109:web:dabd5d93d79635dcd7e4a4"
};
const ACADEMIC_LIVE_WORKSPACE="main";
const ACADEMIC_LIVE_APP_NAME="rems-rozklad-source";
let academicLiveApp=null,academicLiveAuth=null,academicLiveDb=null;

async function academicEnsureLiveClient(){
  if(academicLiveApp&&academicLiveAuth&&academicLiveDb) return {app:academicLiveApp,auth:academicLiveAuth,db:academicLiveDb};
  academicLiveApp=initializeApp(ACADEMIC_LIVE_CONFIG,ACADEMIC_LIVE_APP_NAME);
  academicLiveAuth=getAuth(academicLiveApp);
  await setPersistence(academicLiveAuth,browserLocalPersistence);
  academicLiveDb=getFirestore(academicLiveApp);
  return {app:academicLiveApp,auth:academicLiveAuth,db:academicLiveDb};
}

async function academicLiveProfile(){
  await academicEnsureLiveClient();
  const u=academicLiveAuth.currentUser;
  if(!u){const e=new Error("Потрібне підключення до REMS-РОЗКЛАД");e.code="academic/auth-required";throw e;}
  const snap=await getDoc(doc(academicLiveDb,"users",u.uid));
  if(!snap.exists()){const e=new Error("Для цього облікового запису немає профілю в REMS-РОЗКЛАД.");e.code="academic/profile-missing";throw e;}
  const profile=snap.data()||{};
  if(profile.enabled===false){const e=new Error("Доступ до REMS-РОЗКЛАД заблоковано.");e.code="academic/access-disabled";throw e;}
  if(!["admin","dispatcher","viewer"].includes(String(profile.role||""))){
    const e=new Error("Цей обліковий запис не має доступу до повного факультетського розкладу.");e.code="academic/access-limited";throw e;
  }
  return {user:u,profile};
}

async function academicFetchLivePayload(){
  const access=await academicLiveProfile();
  const scheduleRef=collection(academicLiveDb,"workspaces",ACADEMIC_LIVE_WORKSPACE,"schedule");
  const studentsRef=collection(academicLiveDb,"workspaces",ACADEMIC_LIVE_WORKSPACE,"students");
  const [scheduleSnap,studentsSnap]=await Promise.all([getDocs(scheduleRef),getDocs(studentsRef)]);
  return {
    schedule:scheduleSnap.docs.map(d=>({id:d.id,...(d.data()||{})})),
    students:studentsSnap.docs.map(d=>({id:d.id,...(d.data()||{})})),
    sourceProject:ACADEMIC_LIVE_CONFIG.projectId,
    sourceWorkspace:ACADEMIC_LIVE_WORKSPACE,
    sourceUser:String(access.user.email||""),
    sourceRole:String(access.profile.role||"")
  };
}
const ACADEMIC_PAIR_TIMES={
  "1":["09:00","10:20"],"2":["10:40","12:00"],"3":["12:30","13:50"],
  "4":["14:10","15:30"],"5":["15:40","17:00"],"6":["17:10","18:30"],"7":["18:40","20:00"]
};
const academicImportNameNorm=v=>String(v||"").toLowerCase().replace(/[’'`]/g,"").replace(/[-_]+/g," ").replace(/\s+/g," ").trim();\nconst academicImportShortNameNorm=v=>academicImportNameNorm(String(v||"").trim().split(/\s+/).slice(0,2).join(" "));\nconst academicImportLessonType=value=>{\n  const raw=String(value||"").trim();\n  const t=raw.toLowerCase();\n  if(t.includes("лекц")) return "Лекція";\n  if(t.includes("практ")) return "Практичне заняття";\n  if(t.includes("семін")) return "Семінар";\n  if(t.includes("лаборат")) return "Лабораторне заняття";\n  if(t.includes("індив")) return "Індивідуальне заняття";\n  if(t.includes("консульт")) return "Консультація";\n  if(t.includes("контроль")) return "Контрольна робота";\n  if(t.includes("залік")) return "Залік";\n  if(t.includes("іспит")||t.includes("екзам")) return "Іспит";\n  return raw||"Інше";\n};\nconst academicExtractRozkladSchedule=payload=>{\n  if(Array.isArray(payload)) return payload;\n  if(!payload||typeof payload!=="object") return [];\n  const candidates=[\n    payload.schedule,\n    payload.data?.schedule,\n    payload.db?.schedule,\n    payload.workspace?.schedule,\n    payload.backup?.schedule,\n    payload.remsRozklad?.schedule,\n    payload.rems_rozklad?.schedule,\n    payload.REMS_ROZKLAD?.schedule\n  ];\n  return candidates.find(Array.isArray)||[];\n};\nconst academicExtractRozkladStudents=payload=>{\n  if(!payload||typeof payload!=="object") return [];\n  const candidates=[payload.students,payload.data?.students,payload.db?.students,payload.workspace?.students,payload.backup?.students,payload.remsRozklad?.students,payload.rems_rozklad?.students,payload.REMS_ROZKLAD?.students];\n  return candidates.find(Array.isArray)||[];\n};\nconst academicSourceStudentMap=payload=>new Map(\n  academicExtractRozkladStudents(payload).map(st=>[\n    String(st?.id??st?.studentId??""),\n    {name:String(st?.name??st?.fullName??st?.studentName??"").trim(),group:String(st?.group??st?.groupCode??"").trim()}\n  ]).filter(([id])=>id)\n);\nconst academicExpandRozkladRows=payload=>{\n  const schedule=academicExtractRozkladSchedule(payload);\n  const studentMap=academicSourceStudentMap(payload);\n  const out=[];\n  const studentNames=ids=>(ids||[]).map(id=>studentMap.get(String(id))?.name||"").filter(Boolean);\n  for(const row0 of schedule){\n    const row=row0||{};\n    const specialId=row.studentId??null;\n    if(row.specialSchedule===true&&specialId!==null&&specialId!==undefined){\n      const sourceStudent=studentMap.get(String(specialId));\n      const group=String(row.group||sourceStudent?.group||"").trim();\n      out.push({...row,group,coverage:"Вибрані студенти",students:sourceStudent?.name||row.students||"",__expandedGroup:group});\n      continue;\n    }\n    const partitions=Array.isArray(row.audiencePartitions)?row.audiencePartitions.filter(p=>String(p?.group||"").trim()):[];\n    if(partitions.length){\n      partitions.forEach(part=>{\n        const group=String(part.group||"").trim();\n        const selected=String(part.mode||"")==="selected";\n        const names=selected?studentNames(part.studentIds||[]):[];\n        out.push({...row,group,audienceGroups:[group],coverage:selected?"Вибрані студенти":"Вся група",students:selected?names.join(", "):"",__expandedGroup:group});\n      });\n      continue;\n    }\n    const groups=[...new Set((Array.isArray(row.audienceGroups)?row.audienceGroups:[row.group]).map(x=>String(x||"").trim()).filter(Boolean))];\n    if(groups.length>1){\n      groups.forEach(group=>out.push({...row,group,audienceGroups:[group],coverage:row.coverage||"Вся група",__expandedGroup:group}));\n    }else out.push({...row,group:groups[0]||String(row.group||"").trim(),__expandedGroup:groups[0]||String(row.group||"").trim()});\n  }\n  return out;\n};\nconst academicPrepareRozkladRows=payload=>academicExpandRozkladRows(payload);\nconst academicImportGroupValue=row=>String(row?.group??row?.groupCode??row?.groupId??"").trim();\nconst academicImportPairTimes=row=>{\n  const start=String(row?.startTime??row?.start??row?.timeStart??"").trim();\n  const end=String(row?.endTime??row?.end??row?.timeEnd??"").trim();\n  if(start||end) return [start,end];\n  const pair=String(row?.pairNumber??row?.pair??row?.lessonNumber??"").replace(/\D+/g,"");\n  return ACADEMIC_PAIR_TIMES[pair]||["",""];\n};\nconst academicImportRawStudents=row=>{\n  const raw=row?.studentNames??row?.students??row?.studentIds??row?.student??"";\n  if(Array.isArray(raw)) return raw.map(x=>typeof x==="object"?(x.name??x.fullName??x.studentName??x.id??""):x).map(String).filter(Boolean);\n  return String(raw||"").split(/[;,\n]+/).map(x=>x.trim()).filter(Boolean);\n};\nconst academicResolveImportedStudentIds=(row,group)=>{\n  const names=academicImportRawStudents(row);\n  const coverage=String(row?.coverage??row?.scope??"").trim();\n  const isWholeGroup=!names.length && (/^(вся|уся)\s+група$/i.test(coverage)||/^(whole|all)\s*group$/i.test(coverage)||!coverage);\n  if(isWholeGroup) return {scope:"group",studentIds:[],unmatched:[]};\n  const groupStudents=(db.students||[]).filter(st=>String(st.group||"")===String(group||""));\n  const studentIds=[],unmatched=[];\n  for(const name of names){\n    const n=academicImportNameNorm(name),sn=academicImportShortNameNorm(name);\n    const hit=groupStudents.find(st=>academicImportNameNorm(st.name)===n)\n      || groupStudents.find(st=>academicImportShortNameNorm(st.name)===sn);\n    if(hit) studentIds.push(String(hit.id)); else unmatched.push(String(name));\n  }\n  return {scope:"selected",studentIds:[...new Set(studentIds)],unmatched};\n};\nconst academicMapRozkladRow=(row,index)=>{\n  const group=academicImportGroupValue(row);\n  const date=String(row?.date??row?.lessonDate??"").slice(0,10);\n  const [startTime,endTime]=academicImportPairTimes(row);\n  const subject=String(row?.discipline??row?.subject??row?.disciplineName??row?.courseName??"").trim()||"Заняття";\n  const lessonType=academicImportLessonType(row?.type??row?.lessonType??row?.activityType??"");\n  const room=String(row?.room??row?.classroom??row?.auditorium??"").trim();\n  const teacher=String(row?.teacher??row?.teacherName??row?.lecturer??"").trim();\n  const note=String(row?.note??row?.notes??"").trim();\n  const audience=academicResolveImportedStudentIds(row,group);\n  const rawSourceId=String(row?.id??row?.scheduleId??`${date}|${startTime}|${subject}|${index}`);\n  const sourceId=`${rawSourceId}|${group||"nogroup"}`;\n  return {\n    id:`rr-${sourceId}`,\n    source:ACADEMIC_IMPORT_SOURCE,\n    sourceId,\n    sourceCoverage:String(row?.coverage??row?.scope??""),\n    sourceStudents:String(Array.isArray(row?.students)?row.students.join(", "):(row?.students??row?.studentNames??"")),\n    importedAt:new Date().toISOString(),\n    mode:"once",\n    date,\n    subject,\n    lessonType,\n    group,\n    startTime,\n    endTime,\n    timeUndetermined:!startTime&&!endTime,\n    room,\n    teacher,\n    note:[note,audience.unmatched.length?`Не зіставлено студентів: ${audience.unmatched.join(", ")}`:""].filter(Boolean).join(" · "),\n    scope:audience.scope,\n    studentIds:audience.studentIds,\n    importUnmatchedStudents:audience.unmatched\n  };\n};\nasync function academicReplaceImportedRows(preparedRows,chosen,meta={}){\n  const groups=[...new Set((chosen||[]).map(String).filter(Boolean))];\n  if(!groups.length) return {ok:false,error:"Оберіть хоча б одну групу."};\n  const sourceRows=(preparedRows||[]).filter(row=>groups.includes(academicImportGroupValue(row)));\n  const mapped=sourceRows.map(academicMapRozkladRow).filter(l=>l.date&&l.group);\n  if(!mapped.length) return {ok:false,error:"Для вибраних груп у REMS-РОЗКЛАД немає занять."};\n  const importedIds=new Set();\n  mapped.forEach((l,i)=>{\n    let id=String(l.id||academicLessonId());\n    while(importedIds.has(id)||academicLessons().some(x=>String(x.id)===id&&x.source!==ACADEMIC_IMPORT_SOURCE)) id=`${id}-${i+1}`;\n    l.id=id; importedIds.add(id);\n  });\n  const beforeLessons=clone(academicLessons());\n  const beforeImport=db.academicImport?clone(db.academicImport):null;\n  const previous=academicLessons().filter(l=>l.source===ACADEMIC_IMPORT_SOURCE&&groups.includes(String(l.group||""))).length;\n  db.lessons=academicLessons().filter(l=>!(l.source===ACADEMIC_IMPORT_SOURCE&&groups.includes(String(l.group||""))));\n  db.lessons.push(...mapped);\n  const unmatched=mapped.reduce((n,l)=>n+(l.importUnmatchedStudents?.length||0),0);\n  db.academicImport={\n    source:"REMS-РОЗКЛАД",\n    syncMode:meta.syncMode||"json",\n    sourceFile:meta.sourceFile||"",\n    sourceProject:meta.sourceProject||"",\n    sourceWorkspace:meta.sourceWorkspace||"",\n    sourceUser:meta.sourceUser||"",\n    importedAt:new Date().toISOString(),\n    groups,\n    count:mapped.length,\n    replaced:previous,\n    unmatchedStudents:unmatched\n  };\n  const ok=await save();\n  if(!ok){\n    db.lessons=beforeLessons;\n    if(beforeImport)db.academicImport=beforeImport;else delete db.academicImport;\n    cache();\n    return {ok:false,error:"Не вдалося зберегти синхронізацію в хмару."};\n  }\n  return {ok:true,count:mapped.length,replaced:previous,unmatched};\n}\n\nfunction ensureAcademicSyncDialog(){\n  let d=document.querySelector("#academicSyncDialog");\n  if(d) return d;\n  d=document.createElement("dialog");\n  d.id="academicSyncDialog";\n  d.className="student-dialog academic-dialog";\n  d.innerHTML='<div id="academicSyncDialogBody"></div>';\n  document.body.appendChild(d);\n  return d;\n}\n\nfunction openAcademicSyncDialog(){\n  const d=ensureAcademicSyncDialog();\n  const body=d.querySelector("#academicSyncDialogBody");\n  const groups=availableGroups();\n  const defaults=new Set((db.academicImport?.groups?.length?db.academicImport.groups:["РЕМС-34","РЕМС-44"]).map(String));\n  let livePayload=null,prepared=[];\n  body.innerHTML=`<div class="academic-editor academic-import-editor academic-sync-editor">\n    <div class="project-section-head">\n      <div><h2 style="margin:0">Синхронізація з REMS-РОЗКЛАД</h2><div class="muted">Забираємо актуальні пари прямо з факультетської онлайн-бази.</div></div>\n      <button type="button" class="ghost" id="academicSyncClose">Закрити</button>\n    </div>\n    <div class="academic-import-info"><b>Без JSON-файлу</b><span>Ручні заняття в REMS Control не стираються. Для вибраних груп замінюються лише попередні записи з REMS-РОЗКЛАД.</span></div>\n    <div id="academicLiveConnection" class="academic-live-connection"><span>Перевіряю підключення…</span></div>\n    <div id="academicLiveLogin" class="academic-live-login" hidden>\n      <label>Email REMS-РОЗКЛАД<input id="academicLiveEmail" type="email" value="${esc(currentUser?.email||"")}" autocomplete="username"></label>\n      <label>Пароль<input id="academicLivePassword" type="password" autocomplete="current-password" placeholder="Введіть один раз на цьому браузері"></label>\n      <button type="button" class="primary" id="academicLiveConnect">Підключити REMS-РОЗКЛАД</button>\n      <small>Пароль не записується в REMS Control. Firebase зберігає лише авторизовану сесію цього браузера.</small>\n    </div>\n    <div class="academic-import-groups">\n      <b>Які групи синхронізувати</b>\n      <div class="academic-import-group-grid">${groups.map(g=>`<label><input type="checkbox" value="${esc(g)}" ${defaults.has(g)?"checked":""}><span>${esc(g)}</span><em data-live-group-count="${esc(g)}">-</em></label>`).join("")}</div>\n    </div>\n    <div class="academic-sync-actions-inline"><button type="button" class="ghost" id="academicLiveRefresh" disabled>↻ Оновити дані</button><button type="button" class="ghost" id="academicLiveDisconnect" hidden>Відключити</button></div>\n    <div id="academicLivePreview" class="academic-import-preview"><span>Після підключення тут з’явиться актуальний розклад.</span></div>\n    <div class="dialog-actions academic-actions"><button type="button" class="ghost" id="academicSyncCancel">Скасувати</button><button type="button" class="primary" id="academicLiveApply" disabled>Синхронізувати</button></div>\n  </div>`;\n  const connection=body.querySelector("#academicLiveConnection"),login=body.querySelector("#academicLiveLogin"),preview=body.querySelector("#academicLivePreview"),apply=body.querySelector("#academicLiveApply"),refresh=body.querySelector("#academicLiveRefresh"),disconnect=body.querySelector("#academicLiveDisconnect");\n  const selectedGroups=()=>[...body.querySelectorAll('.academic-import-group-grid input[type="checkbox"]:checked')].map(x=>x.value);\n  const renderPreview=()=>{\n    const counts={};prepared.forEach(row=>{const g=academicImportGroupValue(row);counts[g]=(counts[g]||0)+1;});\n    body.querySelectorAll("[data-live-group-count]").forEach(el=>el.textContent=`${counts[el.dataset.liveGroupCount]||0} пар`);\n    const chosen=selectedGroups();\n    const rows=prepared.filter(row=>chosen.includes(academicImportGroupValue(row)));\n    const disciplines=new Set(rows.map(r=>String(r?.discipline??r?.subject??r?.disciplineName??"").trim()).filter(Boolean));\n    const rooms=new Set(rows.map(r=>String(r?.room??r?.classroom??r?.auditorium??"").trim()).filter(Boolean));\n    preview.innerHTML=livePayload?`<div><b>Онлайн-база готова</b><span>${rows.length} занять для вибраних груп</span></div><div class="academic-import-preview-kpis"><span>${disciplines.size} дисциплін</span><span>${rooms.size} аудиторій</span><span>${esc(livePayload.sourceUser||"")}</span></div>`:'<span>Немає завантажених даних.</span>';\n    apply.disabled=!livePayload||!rows.length||!chosen.length;\n  };\n  const showSignedOut=()=>{\n    connection.innerHTML='<b>Потрібне підключення</b><span>Перший раз авторизуй REMS Control у базі REMS-РОЗКЛАД.</span>';\n    login.hidden=false;refresh.disabled=true;disconnect.hidden=true;apply.disabled=true;\n  };\n  const loadLive=async()=>{\n    connection.innerHTML='<b>Завантаження…</b><span>Читаю актуальний факультетський розклад.</span>';\n    refresh.disabled=true;apply.disabled=true;\n    try{\n      livePayload=await academicFetchLivePayload();\n      prepared=academicPrepareRozkladRows(livePayload);\n      login.hidden=true;disconnect.hidden=false;refresh.disabled=false;\n      connection.innerHTML=`<b>Підключено ✓</b><span>${esc(livePayload.sourceUser||"")} · ${prepared.length} записів · робочий простір ${esc(livePayload.sourceWorkspace||ACADEMIC_LIVE_WORKSPACE)}</span>`;\n      renderPreview();\n    }catch(err){\n      console.error("REMS-РОЗКЛАД live sync:",err);\n      if(err?.code==="academic/auth-required")showSignedOut();\n      else{connection.innerHTML=`<b>Не вдалося підключитися</b><span>${esc(err?.message||String(err))}</span>`;login.hidden=!!academicLiveAuth?.currentUser;refresh.disabled=false;disconnect.hidden=!academicLiveAuth?.currentUser;}\n    }\n  };\n  body.querySelectorAll('.academic-import-group-grid input[type="checkbox"]').forEach(x=>x.onchange=renderPreview);\n  body.querySelector("#academicSyncClose").onclick=()=>d.close();body.querySelector("#academicSyncCancel").onclick=()=>d.close();\n  body.querySelector("#academicLiveConnect").onclick=async()=>{\n    const email=body.querySelector("#academicLiveEmail").value.trim(),password=body.querySelector("#academicLivePassword").value;\n    if(!email||!password){alert("Введіть email і пароль від REMS-РОЗКЛАД.");return;}\n    const btn=body.querySelector("#academicLiveConnect");btn.disabled=true;btn.textContent="Підключення…";\n    try{await academicEnsureLiveClient();await signInWithEmailAndPassword(academicLiveAuth,email,password);body.querySelector("#academicLivePassword").value="";await loadLive();}\n    catch(err){console.error(err);const code=String(err?.code||"");const msg=code==="auth/invalid-credential"?"Не вдалося увійти. Перевірте email і пароль REMS-РОЗКЛАД.":code==="auth/too-many-requests"?"Забагато спроб входу. Зачекайте трохи і спробуйте ще раз.":`Не вдалося підключитися до REMS-РОЗКЛАД${code?` (${code})`:""}.`;alert(msg);}\n    finally{btn.disabled=false;btn.textContent="Підключити REMS-РОЗКЛАД";}\n  };\n  refresh.onclick=loadLive;\n  disconnect.onclick=async()=>{if(academicLiveAuth)await signOut(academicLiveAuth);livePayload=null;prepared=[];showSignedOut();renderPreview();};\n  apply.onclick=async()=>{\n    const chosen=selectedGroups();if(!chosen.length){alert("Оберіть хоча б одну групу.");return;}if(!livePayload){alert("Спочатку завантажте дані з REMS-РОЗКЛАД.");return;}\n    apply.disabled=true;apply.textContent="Синхронізація…";\n    const result=await academicReplaceImportedRows(prepared,chosen,{syncMode:"live",sourceFile:"Онлайн-база",sourceProject:livePayload.sourceProject,sourceWorkspace:livePayload.sourceWorkspace,sourceUser:livePayload.sourceUser});\n    if(!result.ok){apply.disabled=false;apply.textContent="Синхронізувати";alert(result.error||"Не вдалося синхронізувати.");return;}\n    d.close();if(currentView==="academic")academic();\n    alert(`Готово.\n\nСинхронізовано занять: ${result.count}\nЗамінено попередніх записів REMS-РОЗКЛАД: ${result.replaced}${result.unmatched?`\nНе зіставлено студентів у вибіркових заняттях: ${result.unmatched}`:""}`);\n  };\n  (async()=>{try{await academicEnsureLiveClient();if(academicLiveAuth.currentUser)await loadLive();else showSignedOut();}catch(err){connection.innerHTML=`<b>Помилка ініціалізації</b><span>${esc(err?.message||String(err))}</span>`;}})();\n  if(!d.open)d.showModal();\n}\n\nfunction ensureAcademicImportDialog(){\n  let d=document.querySelector("#academicImportDialog");\n  if(d) return d;\n  d=document.createElement("dialog");\n  d.id="academicImportDialog";\n  d.className="student-dialog academic-dialog";\n  d.innerHTML='<div id="academicImportDialogBody"></div>';\n  document.body.appendChild(d);\n  return d;\n}\nfunction openAcademicImportDialog(){\n  const d=ensureAcademicImportDialog();\n  const body=d.querySelector("#academicImportDialogBody");\n  const groups=availableGroups();\n  const defaults=new Set(["РЕМС-34","РЕМС-44"]);\n  let parsed=null,fileName="";\n  body.innerHTML=`<div class="academic-editor academic-import-editor">\n    <div class="project-section-head">\n      <div><h2 style="margin:0">Імпорт із REMS-РОЗКЛАД</h2><div class="muted">Підтягуємо офіційний розклад занять, не чіпаючи проєкти й ручні записи.</div></div>\n      <button type="button" class="ghost" id="academicImportClose">Закрити</button>\n    </div>\n    <div class="academic-import-info">\n      <b>Що станеться</b>\n      <span>Для вибраних груп попередні записи, імпортовані з REMS-РОЗКЛАД, будуть замінені новими. Заняття, які ви додали вручну в REMS Control, залишаться.</span>\n    </div>\n    <div class="academic-import-groups">\n      <b>Групи</b>\n      <div class="academic-import-group-grid">${groups.map(g=>`<label><input type="checkbox" value="${esc(g)}" ${defaults.has(g)?"checked":""}><span>${esc(g)}</span><em data-import-group-count="${esc(g)}">-</em></label>`).join("")}</div>\n    </div>\n    <label class="academic-import-file">Файл із REMS-РОЗКЛАД\n      <input id="academicRozkladFile" type="file" accept=".json,application/json">\n      <small>У REMS-РОЗКЛАД: Налаштування → Експорт даних.</small>\n    </label>\n    <div id="academicImportPreview" class="academic-import-preview"><span>Оберіть JSON-файл - тут з’явиться попередній перегляд.</span></div>\n    <div class="dialog-actions academic-actions">\n      <button type="button" class="ghost" id="academicImportCancel">Скасувати</button>\n      <button type="button" class="primary" id="academicImportApply" disabled>Імпортувати розклад</button>\n    </div>\n  </div>`;\n  const file=body.querySelector("#academicRozkladFile");\n  const preview=body.querySelector("#academicImportPreview");\n  const apply=body.querySelector("#academicImportApply");\n  const selectedGroups=()=>[...body.querySelectorAll('.academic-import-group-grid input[type="checkbox"]:checked')].map(x=>x.value);\n  const renderPreview=()=>{\n    if(!parsed){apply.disabled=true;return;}\n    const schedule=academicPrepareRozkladRows(parsed);\n    const counts={}; schedule.forEach(row=>{const g=academicImportGroupValue(row);counts[g]=(counts[g]||0)+1;});\n    body.querySelectorAll("[data-import-group-count]").forEach(el=>el.textContent=`${counts[el.dataset.importGroupCount]||0} пар`);\n    const chosen=selectedGroups();\n    const rows=schedule.filter(row=>chosen.includes(academicImportGroupValue(row)));\n    const valid=rows.filter(row=>String(row?.date??row?.lessonDate??"").slice(0,10));\n    const rooms=new Set(valid.map(row=>String(row?.room??row?.classroom??row?.auditorium??"").trim()).filter(Boolean));\n    const subjects=new Set(valid.map(row=>String(row?.discipline??row?.subject??row?.disciplineName??"").trim()).filter(Boolean));\n    preview.innerHTML=`<div><b>${esc(fileName||"Файл")}</b><span>${schedule.length} записів у файлі</span></div>\n      <div class="academic-import-preview-kpis"><span><b>${valid.length}</b> буде імпортовано</span><span><b>${subjects.size}</b> дисциплін</span><span><b>${rooms.size}</b> аудиторій</span></div>\n      ${valid.length?"":'<div class="notice warn">Для вибраних груп у файлі немає занять із датами.</div>'}`;\n    apply.disabled=!valid.length;\n  };\n  body.querySelectorAll('.academic-import-group-grid input[type="checkbox"]').forEach(ch=>ch.onchange=renderPreview);\n  file.onchange=()=>{\n    const f=file.files?.[0]; if(!f){parsed=null;renderPreview();return;}\n    fileName=f.name;\n    const reader=new FileReader();\n    reader.onload=()=>{\n      try{\n        parsed=JSON.parse(reader.result);\n        const schedule=academicPrepareRozkladRows(parsed);\n        if(!schedule.length) throw new Error("У файлі не знайдено масив schedule");\n        renderPreview();\n      }catch(err){\n        console.error("REMS-РОЗКЛАД import:",err);\n        parsed=null;apply.disabled=true;\n        preview.innerHTML='<div class="notice warn">Не вдалося знайти розклад у цьому JSON-файлі. Оберіть файл, експортований із REMS-РОЗКЛАД.</div>';\n      }\n    };\n    reader.readAsText(f);\n  };\n  body.querySelector("#academicImportClose").onclick=()=>d.close();\n  body.querySelector("#academicImportCancel").onclick=()=>d.close();\n  apply.onclick=async()=>{\n    if(!parsed) return;\n    const chosen=selectedGroups();\n    if(!chosen.length){alert("Оберіть хоча б одну групу.");return;}\n    const sourceRows=academicPrepareRozkladRows(parsed).filter(row=>chosen.includes(academicImportGroupValue(row)));\n    apply.disabled=true;apply.textContent="Збереження…";\n    const result=await academicReplaceImportedRows(sourceRows,chosen,{syncMode:"json",sourceFile:fileName});\n    if(!result.ok){apply.disabled=false;apply.textContent="Імпортувати розклад";alert(result.error||"Не вдалося зберегти імпорт у хмару.");return;}\n    d.close();\n    if(currentView==="academic") academic();\n    alert(`Готово.\n\nІмпортовано занять: ${result.count}\nЗамінено попередніх імпортованих записів: ${result.replaced}${result.unmatched?`\nНе зіставлено студентів у вибіркових заняттях: ${result.unmatched}`:""}`);\n  };\n  if(!d.open) d.showModal();\n}\n\n\n\nconst FISHER_INDIVIDUAL_SCHEDULE_VERSION="2026-09-09-v1";\nconst FISHER_INDIVIDUAL_SCHEDULE_SOURCE="fisher-individual-dramaturgy-2026";\nconst FISHER_INDIVIDUAL_SCHEDULE=[{"date":"28.09.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Жолуденко   Поліна Ігорівна","studentId":10},{"date":"28.09.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Рожанківська   Іванна Орестівна","studentId":32},{"date":"28.09.2026","pairNumber":"VI","startTime":"17:10","endTime":"17:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Кошелєва   Мирослава Сергіївна","studentId":18},{"date":"28.09.2026","pairNumber":"VI","startTime":"17:50","endTime":"18:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Максімова   Саміра Вадимівна","studentId":22},{"date":"29.09.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Краснянський   Ростислав Віталійович","studentId":19},{"date":"29.09.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Міленіна   Марія Олегівна","studentId":23},{"date":"29.09.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Мойсієнко   Віталіна Денисівна","studentId":24},{"date":"29.09.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Мостова   Яна Олегівна","studentId":26},{"date":"01.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Кропивка   Маргаріта Анатоліївна","studentId":20},{"date":"01.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Лещинський   Денис Віталійович","studentId":21},{"date":"01.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Мороз   Марія Геннадіївна","studentId":25},{"date":"01.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Павлова   Катерина Володимирівна","studentId":29},{"date":"05.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Неня   Анастасія Миколаївна","studentId":27},{"date":"05.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Олейников   Данііл Денисович","studentId":28},{"date":"05.10.2026","pairNumber":"VI","startTime":"17:10","endTime":"17:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Позняк   Артур Русланович","studentId":31},{"date":"05.10.2026","pairNumber":"VI","startTime":"17:50","endTime":"18:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Чиньонова   Дар`я Олексіївна","studentId":34},{"date":"06.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Вінцюк   Андрій Олександрович","studentId":2},{"date":"06.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Власенко   Дар`я Андріївна","studentId":3},{"date":"06.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Баленко   Ілля Вікторович","studentId":1},{"date":"06.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Вознюк   Олександра Миколаївна","studentId":4},{"date":"08.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Дубина   Віолетта Володимирівна","studentId":9},{"date":"08.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Карпенко   Рімма Романівна","studentId":12},{"date":"08.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Кириленко   Михайло Володимирович","studentId":14},{"date":"08.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Коткова   Анастасія Андріївна","studentId":16},{"date":"12.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Гострик   Катерина Юріївна","studentId":6},{"date":"12.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Заярна   Валерія Сергіївна","studentId":11},{"date":"12.10.2026","pairNumber":"VI","startTime":"17:10","endTime":"17:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Колишкін   Андрій Юрійович","studentId":15},{"date":"12.10.2026","pairNumber":"VI","startTime":"17:50","endTime":"18:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Кохан   Ольга Сергіївна","studentId":17},{"date":"13.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Касєєв   Данило Павлович","studentId":13},{"date":"13.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Кошелєва   Мирослава Сергіївна","studentId":18},{"date":"13.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Волошина   Дар'я Олександрівна","studentId":5},{"date":"13.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Данільчук   Катерина Павлівна","studentId":8},{"date":"15.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Піддубна   Марія Анатоліївна","studentId":30},{"date":"15.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Ташута   Артем Анатолійович","studentId":33},{"date":"15.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Мороз   Марія Геннадіївна","studentId":25},{"date":"15.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Павлова   Катерина Володимирівна","studentId":29},{"date":"19.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Жолуденко   Поліна Ігорівна","studentId":10},{"date":"19.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Краснянський   Ростислав Віталійович","studentId":19},{"date":"19.10.2026","pairNumber":"VI","startTime":"17:10","endTime":"17:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Максімова   Саміра Вадимівна","studentId":22},{"date":"19.10.2026","pairNumber":"VI","startTime":"17:50","endTime":"18:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Міленіна   Марія Олегівна","studentId":23},{"date":"20.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Мойсієнко   Віталіна Денисівна","studentId":24},{"date":"20.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Неня   Анастасія Миколаївна","studentId":27},{"date":"20.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Кропивка   Маргаріта Анатоліївна","studentId":20},{"date":"20.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Лещинський   Денис Віталійович","studentId":21},{"date":"21.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Мостова   Яна Олегівна","studentId":26},{"date":"21.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Олейников   Данііл Денисович","studentId":28},{"date":"21.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Позняк   Артур Русланович","studentId":31},{"date":"21.10.2026","pairNumber":"","startTime":"","endTime":"","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Чиньонова   Дар`я Олексіївна","studentId":34},{"date":"22.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Дубина   Віолетта Володимирівна","studentId":9},{"date":"22.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Карпенко   Рімма Романівна","studentId":12},{"date":"22.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Кириленко   Михайло Володимирович","studentId":14},{"date":"22.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Коткова   Анастасія Андріївна","studentId":16},{"date":"26.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Рожанківська   Іванна Орестівна","studentId":32},{"date":"26.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Вінцюк   Андрій Олександрович","studentId":2},{"date":"26.10.2026","pairNumber":"VI","startTime":"17:10","endTime":"17:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Власенко   Дар`я Андріївна","studentId":3},{"date":"26.10.2026","pairNumber":"VI","startTime":"17:50","endTime":"18:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Гострик   Катерина Юріївна","studentId":6},{"date":"27.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Заярна   Валерія Сергіївна","studentId":11},{"date":"27.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Кохан   Ольга Сергіївна","studentId":17},{"date":"27.10.2026","pairNumber":"V","startTime":"15:40","endTime":"16:20","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Баленко   Ілля Вікторович","studentId":1},{"date":"27.10.2026","pairNumber":"V","startTime":"16:20","endTime":"17:00","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Вознюк   Олександра Миколаївна","studentId":4},{"date":"28.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Колишкін   Андрій Юрійович","studentId":15},{"date":"28.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"323","name":"Касєєв   Данило Павлович","studentId":13},{"date":"29.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Волошина   Дар'я Олександрівна","studentId":5},{"date":"29.10.2026","pairNumber":"IV","startTime":"14:10","endTime":"14:50","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Піддубна   Марія Анатоліївна","studentId":30},{"date":"29.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Данільчук   Катерина Павлівна","studentId":8},{"date":"29.10.2026","pairNumber":"IV","startTime":"14:50","endTime":"15:30","subject":"Драматургія   шоу","lessonType":"Індивідуальне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"323","name":"Ташута   Артем Анатолійович","studentId":33}];\nconst fisherIndividualIsoDate=value=>{\n  const v=String(value||"").trim();\n  if(/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;\n  const m=v.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);\n  return m?`${m[3]}-${m[2]}-${m[1]}`:v;\n};\nconst fisherIndividualLesson=(row,index)=>{\n  const isoDate=fisherIndividualIsoDate(row.date);\n  return {\n    id:`fisher-individual-${isoDate}-${index}`,\n    source:FISHER_INDIVIDUAL_SCHEDULE_SOURCE,\n    sourceId:`${FISHER_INDIVIDUAL_SCHEDULE_VERSION}|${index}`,\n    importedAt:new Date().toISOString(),\n    mode:"once",date:isoDate,pairNumber:String(row.pairNumber||""),subject:String(row.subject||"").replace(/\s+/g," ").trim(),lessonType:row.lessonType,group:row.group,\n    startTime:row.startTime,endTime:row.endTime,timeUndetermined:!row.startTime,room:String(row.room||""),teacher:String(row.teacher||""),\n    note:"Індивідуальне заняття · "+String(row.name||"").replace(/\s+/g," ").trim(),scope:"selected",studentIds:row.studentId?[String(row.studentId)]:[]\n  };\n};\nconst fisherBundledLessons=()=>FISHER_INDIVIDUAL_SCHEDULE.map(fisherIndividualLesson);\n// v40.8: зберігаємо вбудовані індивідуальні окремо від db.lessons.\n// academicLessons() завжди домішує їх під час читання, тому Firestore snapshot не може їх стерти.\nwindow.__REMS_FISHER_INDIVIDUAL_LESSONS=fisherBundledLessons();\nconst mergeFisherIndividualLessons=lessons=>{\n  window.__REMS_FISHER_INDIVIDUAL_LESSONS=Array.isArray(lessons)?lessons:fisherBundledLessons();\n  // Прибираємо старі фізичні копії, якщо вони лишилися з v40.4–v40.8.\n  db.lessons=(Array.isArray(db.lessons)?db.lessons:[]).filter(l=>String(l?.source||"")!==FISHER_INDIVIDUAL_SCHEDULE_SOURCE);\n};\nasync function loadFisherIndividualScheduleCloud(){\n  // v40.4: цей розклад уже вбудований у сам застосунок. Ніякого окремого\n  // Firestore-документа не потрібно, тому Firebase Rules більше не можуть\n  // блокувати його завантаження.\n  mergeFisherIndividualLessons(fisherBundledLessons());\n  cache();\n  return {ok:true,source:"bundled",count:FISHER_INDIVIDUAL_SCHEDULE.length};\n}\nasync function installFisherIndividualSchedule(force=false){\n  const added=fisherBundledLessons();\n  mergeFisherIndividualLessons(added);\n  db.settings=db.settings||{};\n  if(force){\n    // «Оновити індивідуальні» = повернути початковий вбудований набір.\n    db.settings.fisherIndividualHiddenIds=[];\n    db.lessons=(db.lessons||[]).filter(l=>!String(l?.id||"").startsWith("fisher-individual-"));\n  }\n  db.settings={...db.settings,fisherIndividualScheduleVersion:FISHER_INDIVIDUAL_SCHEDULE_VERSION,fisherIndividualScheduleUpdatedAt:new Date().toISOString()};\n  cache();\n  if(force){\n    const ok=await saveAcademicV39();\n    if(!ok)return {ok:false,error:"Не вдалося зберегти відновлений індивідуальний розклад у хмару."};\n  }\n  setStatus(cloudReady?"v40.9 · хмара ✓":"v40.9 · локально");\n  return {ok:true,changed:true,count:added.length,bundled:true};\n}\n\n\nconst OFFICIAL_REMS_SCHEDULE_VERSION="2026-09-01-docx-v2";\nconst OFFICIAL_REMS_SCHEDULE_SOURCE="official-docx-rems34-44";\nconst OFFICIAL_REMS_GROUPS=["РЕМС-34","РЕМС-44"];\nconst OFFICIAL_REMS_SCHEDULE=[{"date":"2026-09-01","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-01","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-01","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"324"},{"date":"2026-09-01","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"325"},{"date":"2026-09-01","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-02","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-02","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-02","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-02","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-09-03","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Візуалізація у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-03","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Візуалізація у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-03","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-03","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-09-03","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-03","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-04","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-04","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-04","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-04","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-04","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-04","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-04","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-04","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-07","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-07","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-07","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-07","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-07","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-08","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-08","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-08","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-08","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-08","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-08","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-09","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-09","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-09","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-09","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-09","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-09","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-09","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-09","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-10","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Візуалізація у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-10","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Візуалізація у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-10","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-10","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-09-10","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-10","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-10","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-11","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-11","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-11","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-11","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-11","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-11","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-11","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-11","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-14","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-14","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-14","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"проектор"},{"date":"2026-09-14","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-14","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-15","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-15","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-15","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-15","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-15","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-15","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-16","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-16","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-16","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-16","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лекція","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-16","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-16","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-16","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-16","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-17","pairNumber":"1","startTime":"09:00","endTime":"10:20","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Семінар","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":""},{"date":"2026-09-17","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Візуалізація у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-17","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Візуалізація у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-17","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-17","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-09-17","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-18","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-18","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-18","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-18","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-09-18","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-18","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-18","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-18","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-21","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-21","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-21","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"проектор"},{"date":"2026-09-21","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-21","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-21","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-22","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-22","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-22","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-22","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-22","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-22","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-23","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-23","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-23","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-23","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-23","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-23","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-23","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-23","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-24","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-24","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":""},{"date":"2026-09-24","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-24","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":""},{"date":"2026-09-24","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-09-24","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-25","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-25","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-25","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-25","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-25","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-25","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-09-28","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-28","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-28","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"проектор"},{"date":"2026-09-28","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-09-28","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-09-29","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-29","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-29","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-29","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-09-29","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-09-29","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-09-30","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-30","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-30","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-30","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-09-30","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-30","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-30","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-09-30","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-01","pairNumber":"1","startTime":"09:00","endTime":"10:20","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Семінар","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":""},{"date":"2026-10-01","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-01","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Семінар","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":""},{"date":"2026-10-01","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-01","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":""},{"date":"2026-10-01","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-10-01","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-02","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-02","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-02","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-02","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-02","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-02","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-02","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-02","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-05","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-05","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-05","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"проектор"},{"date":"2026-10-05","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-05","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-06","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-06","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-06","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-06","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-06","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-10-06","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-07","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-07","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-07","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-07","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-07","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-07","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-07","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-07","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-08","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-08","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-08","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":""},{"date":"2026-10-08","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-10-08","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-09","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-09","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-09","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-09","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-09","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-09","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-09","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-09","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-12","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":"325"},{"date":"2026-10-12","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":"325"},{"date":"2026-10-12","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"проектор"},{"date":"2026-10-12","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-12","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-13","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-13","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-13","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-13","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-13","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-10-13","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-14","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-14","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-14","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-14","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-14","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-14","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-14","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-14","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-15","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-15","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-15","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":""},{"date":"2026-10-15","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-10-15","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-16","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-16","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-16","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-16","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-16","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-16","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-16","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-16","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-19","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":"325"},{"date":"2026-10-19","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":"325"},{"date":"2026-10-19","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"проектор"},{"date":"2026-10-19","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-19","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-20","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-20","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-20","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-20","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-20","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-10-20","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-21","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-21","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-21","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Семінар","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-21","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Семінар","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-21","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-21","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-21","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-21","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-22","pairNumber":"1","startTime":"09:00","endTime":"10:20","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Семінар","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":""},{"date":"2026-10-22","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-22","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Семінар","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":""},{"date":"2026-10-22","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-22","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":""},{"date":"2026-10-22","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-10-22","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-23","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-23","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-23","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-23","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-23","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-23","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-23","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-23","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-26","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":"325"},{"date":"2026-10-26","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":"325"},{"date":"2026-10-26","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"проектор"},{"date":"2026-10-26","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-26","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-27","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-27","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-27","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-27","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-10-27","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Крикуненко С.В.","room":"325"},{"date":"2026-10-27","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-28","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-28","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Сценографія","lessonType":"Лекція","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-28","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-28","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-10-28","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-28","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-28","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-28","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Імпровізація та інтерактив у розважальних програмах (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-10-29","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-10-29","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-10-29","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Візуалізація у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Крикуненко С.В.","room":""},{"date":"2026-10-29","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кучер Д.Ю.","room":"324"},{"date":"2026-10-29","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-10-30","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-30","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Лекція","group":"РЕМС-44","teacher":"Міщенко А.Б.","room":"227"},{"date":"2026-10-30","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-30","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-30","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-10-30","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-11-02","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":"325"},{"date":"2026-11-02","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":"325"},{"date":"2026-11-02","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"325"},{"date":"2026-11-02","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Фішер В.М.","room":"230"},{"date":"2026-11-03","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-11-03","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-11-03","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-11-03","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Технічний продакшн шоу (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Мясоєдов Н.С.","room":"325"},{"date":"2026-11-03","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Моделювання стилю (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Кузнецова В.О.","room":"604"},{"date":"2026-11-04","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Семінар","group":"РЕМС-34","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-11-04","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Сценографія","lessonType":"Семінар","group":"РЕМС-44","teacher":"Клісенко Н.О.","room":"325"},{"date":"2026-11-04","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Бзенко В.А.","room":""},{"date":"2026-11-04","pairNumber":"4","startTime":"14:10","endTime":"15:30","subject":"Аудіовізуальні технології у сценічному мистецтві","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Бзенко В.А.","room":""},{"date":"2026-11-05","pairNumber":"1","startTime":"09:00","endTime":"10:20","subject":"Політологія (в т.ч. Геополітика і глобалізація)","lessonType":"Семінар","group":"РЕМС-34","teacher":"Міщенко А.Б.","room":""},{"date":"2026-11-05","pairNumber":"2","startTime":"10:40","endTime":"12:00","subject":"Драматургія шоу (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"325"},{"date":"2026-11-05","pairNumber":"3","startTime":"12:30","endTime":"13:50","subject":"Режисура естради і шоу","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Фішер В.М.","room":"230"},{"date":"2026-11-06","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-11-06","pairNumber":"5","startTime":"15:40","endTime":"17:00","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Лабораторне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-11-06","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-34","teacher":"Трапезон К.О.","room":"412"},{"date":"2026-11-06","pairNumber":"6","startTime":"17:10","endTime":"18:30","subject":"Візуальні ефекти і комп’ютерна графіка (вибіркова ОК)","lessonType":"Практичне заняття","group":"РЕМС-44","teacher":"Трапезон К.О.","room":"412"}];\n\nconst academicDisplayLessonType=value=>{\n  const v=String(value||"").trim();\n  if(v==="Практичне заняття") return "Практичні";\n  if(v==="Лабораторне заняття") return "Лабораторні";\n  if(v==="Семінар") return "Семінарські";\n  if(v==="Лекція") return "Лекція";\n  return v||"Заняття";\n};\nconst academicTeacherClass=(teacher,subject="")=>{\n  const n=academicImportNameNorm(teacher);\n  const subj=academicImportNameNorm(subject);\n  const accentSubject=subj.includes("режисур")||subj.includes("драматург");\n  if(!accentSubject) return "teacher-other";\n  if(n.includes("фішер")) return "teacher-fisher";\n  if(n.includes("крикуненко")) return "teacher-krykunenko";\n  if(n.includes("кучер")) return "teacher-kucher";\n  return "teacher-other";\n};\nconst academicPairNumberForLesson=l=>{\n  const start=String(l?.startTime||"");\n  const found=Object.entries(ACADEMIC_PAIR_TIMES).find(([,times])=>times[0]===start);\n  if(found) return found[0];\n  const raw=String(l?.pairNumber||"").trim().toUpperCase();\n  const roman={I:"1",II:"2",III:"3",IV:"4",V:"5",VI:"6",VII:"7"};\n  return roman[raw]||raw;\n};\nconst officialScheduleLesson=(row,index)=>({\n  id:`official-${row.date}-${row.pairNumber}-${row.group==="РЕМС-34"?"34":"44"}-${index}`,\n  source:OFFICIAL_REMS_SCHEDULE_SOURCE,\n  sourceId:`${OFFICIAL_REMS_SCHEDULE_VERSION}|${index}`,\n  importedAt:new Date().toISOString(),\n  mode:"once",\n  date:row.date,\n  pairNumber:row.pairNumber,\n  subject:row.subject,\n  lessonType:row.lessonType,\n  group:row.group,\n  startTime:row.startTime,\n  endTime:row.endTime,\n  timeUndetermined:false,\n  room:String(row.room||""),\n  teacher:String(row.teacher||""),\n  note:"Офіційний розклад · 3 курс ФТКЕ",\n  scope:"group",\n  studentIds:[]\n});\n\nasync function installOfficialRemsSchedule(force=false){\n  db.settings=db.settings||{};\n  if(!force && db.settings.officialRemsScheduleVersion===OFFICIAL_REMS_SCHEDULE_VERSION) return {ok:true,changed:false,count:0};\n  const before=clone(academicLessons());\n  try{\n    // Browser-local emergency copy before replacing ONLY official/imported lessons.\n    localStorage.setItem("rems_official_schedule_backup_v36",JSON.stringify({at:new Date().toISOString(),lessons:before,academicImport:db.academicImport||null}));\n  }catch(_err){}\n  const replaceableSource=l=>OFFICIAL_REMS_GROUPS.includes(String(l?.group||"")) &&\n    (l?.source===OFFICIAL_REMS_SCHEDULE_SOURCE || l?.source===ACADEMIC_IMPORT_SOURCE || String(l?.source||"").startsWith("official-docx-rems34-44"));\n  const keep=before.filter(l=>!replaceableSource(l));\n  const protectedIds=new Set(keep.map(l=>String(l?.id||"")).filter(Boolean));\n  const official=OFFICIAL_REMS_SCHEDULE.map(officialScheduleLesson).filter(l=>!protectedIds.has(String(l.id)));\n  db.lessons=[...keep,...official];\n  db.settings={...db.settings,officialRemsScheduleVersion:OFFICIAL_REMS_SCHEDULE_VERSION,officialRemsScheduleUpdatedAt:new Date().toISOString()};\n  db.academicImport={\n    source:"Офіційний Word-розклад",\n    syncMode:"bundled-docx",\n    sourceFile:"3 курс ФТКЕ (1).docx",\n    importedAt:new Date().toISOString(),\n    groups:[...OFFICIAL_REMS_GROUPS],\n    count:official.length,\n    replaced:before.length-keep.length,\n    version:OFFICIAL_REMS_SCHEDULE_VERSION\n  };\n  cache();\n  if(cloudReady&&cloudDb){\n    try{\n      // Critical safety rule: update schedule-related root fields only. Projects, events,\n      // assignments, students and every manual project edit are untouched.\n      await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{\n        lessons:db.lessons,\n        settings:db.settings,\n        academicImport:db.academicImport,\n        updatedAt:new Date().toISOString()\n      },{merge:true});\n      cache();\n      return {ok:true,changed:true,count:official.length,replaced:before.length-keep.length};\n    }catch(err){\n      console.error("Official schedule install failed:",err);\n      db.lessons=before;\n      cache();\n      return {ok:false,error:err?.message||String(err)};\n    }\n  }\n  return {ok:true,changed:true,count:official.length,replaced:before.length-keep.length};\n}\n\nlet academicMainMode="dual";\nfunction academic(){\n  if(academicMainMode==="calendar"){\n    academicLegacyCalendar();\n    const top=document.querySelector(".academic-topbar");\n    if(top){\n      const switcher=document.createElement("div");\n      switcher.className="academic-view-switcher academic-view-switcher-inline";\n      switcher.innerHTML='<button type="button" class="primary" id="academicBackDual">▦ РЕМС-34 + РЕМС-44</button><span>Зараз: календар</span>';\n      top.prepend(switcher);\n      const b=document.querySelector("#academicBackDual");\n      if(b)b.onclick=()=>{academicMainMode="dual";academic();};\n    }\n    return;\n  }\n\n  const monthNames={"2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026","2026-12":"Грудень 2026"};\n  const monthKeys=Object.keys(monthNames);\n  let activeMonth=(()=>{const cur=localIsoDate().slice(0,7);return monthKeys.includes(cur)?cur:"2026-09";})();\n  app.innerHTML=`<div class="academic-page academic-dual-page">\n    <div class="academic-topbar academic-dual-topbar">\n      <div><h2>Розклад РЕМС-34 + РЕМС-44</h2><p>Дві групи одночасно. Спільні заняття об’єднані; окремі стоять у своїх колонках.</p></div>\n      <div class="academic-filter-actions">\n        <button type="button" class="ghost" id="academicRefreshOfficial">↻ Оновити офіційний розклад</button>\n        <button type="button" class="ghost" id="academicOpenCalendar">Календар</button>\n      </div>\n    </div>\n    <div class="academic-import-status"><span><b>Офіційний розклад</b> · РЕМС-34 + РЕМС-44 · ${OFFICIAL_REMS_SCHEDULE.length} занять</span><small>Версія: 01.09.2026 · проєкти та ручні дані не перезаписуються</small></div>\n    <div id="academicDualMonthTabs" class="schedule-month-tabs academic-month-tabs"></div>\n    <div class="academic-dual-legend"><span class="teacher-fisher">Фішер В.М.</span><span class="teacher-krykunenko">Крикуненко С.В.</span><span class="teacher-kucher">Кучер Д.Ю.</span><span class="teacher-other">Інші викладачі</span></div>\n    <div id="academicDualMount"></div>\n  </div>`;\n\n  const signature=l=>[l.subject,l.lessonType,l.teacher,l.room,l.startTime,l.endTime].map(x=>String(x||"").trim()).join("||");\n  const card=(l,shared=false)=>`<button type="button" class="academic-dual-card ${academicTeacherClass(l.teacher,l.subject)} ${shared?"shared":""}" data-id="${esc(String(l.id))}">\n    ${shared?'<em class="academic-together">РАЗОМ · РЕМС-34 + РЕМС-44</em>':""}\n    <strong>${esc(l.subject||"Заняття")}</strong>\n    <span class="academic-kind">${esc(academicDisplayLessonType(l.lessonType))}</span>\n    <span class="academic-teacher">${esc(l.teacher||"Викладача не вказано")}</span>\n    <b class="academic-room">ауд. ${esc(String(l.room||"").trim()||"не вказана")}</b>\n  </button>`;\n\n  const render=()=>{\n    document.querySelector("#academicDualMonthTabs").innerHTML=monthKeys.map(m=>`<button type="button" class="schedule-month-tab ${m===activeMonth?"active":""}" data-month="${m}">${monthNames[m]}</button>`).join("");\n    document.querySelectorAll("#academicDualMonthTabs [data-month]").forEach(b=>b.onclick=()=>{activeMonth=b.dataset.month;render();});\n    const rows=academicLessons().filter(l=>OFFICIAL_REMS_GROUPS.includes(String(l.group||""))&&academicLessonDates(l).some(d=>d.startsWith(activeMonth)));\n    const dates=[...new Set(rows.flatMap(l=>academicLessonDates(l).filter(d=>d.startsWith(activeMonth))))].sort();\n    const mount=document.querySelector("#academicDualMount");\n    if(!dates.length){mount.innerHTML='<div class="empty">У цьому місяці занять для РЕМС-34/44 немає.</div>';return;}\n    const [yy,mm]=activeMonth.split("-").map(Number);\n    const lastDay=new Date(yy,mm,0).getDate();\n    const allMonthDates=Array.from({length:lastDay},(_,i)=>`${activeMonth}-${String(i+1).padStart(2,"0")}`);\n    const workDates=allMonthDates.filter(d=>{const day=new Date(d+"T12:00:00").getDay();return day>=1&&day<=5;});\n    const firstWork=workDates[0];\n    const firstIndex=firstWork?new Date(firstWork+"T12:00:00").getDay()-1:0;\n    const blanks=Array.from({length:firstIndex},()=>'<div class="academic-dual-cal-day empty"></div>').join("");\n    const cellForDate=date=>{\n      const dayRows=rows.filter(l=>academicLessonOccursOnDate(l,date));\n      const dt=new Date(date+"T12:00:00");\n      const pairs=[...new Set(dayRows.map(academicPairNumberForLesson).filter(Boolean))].sort((a,b)=>Number(a)-Number(b));\n      const pairHtml=pairs.map(pair=>{\n        const all=dayRows.filter(l=>academicPairNumberForLesson(l)===pair);\n        const a=all.filter(l=>String(l.group)==="РЕМС-34"), b=all.filter(l=>String(l.group)==="РЕМС-44");\n        const usedB=new Set(),shared=[];\n        a.forEach(x=>{const j=b.findIndex((y,i)=>!usedB.has(i)&&signature(y)===signature(x));if(j>=0){usedB.add(j);shared.push(x);}});\n        const sharedSigs=new Set(shared.map(signature));\n        const onlyA=a.filter(x=>!sharedSigs.has(signature(x))), onlyB=b.filter((x,i)=>!usedB.has(i));\n        const times=ACADEMIC_PAIR_TIMES[String(pair)]||[all[0]?.startTime||"",all[0]?.endTime||""];\n        return `<div class="academic-dual-cal-pair"><div class="academic-dual-cal-pair-head"><b>${esc(pair)} пара</b><span>${esc(times[0]||"")}–${esc(times[1]||"")}</span></div>${shared.map(x=>`<div class="academic-dual-cal-shared">${card(x,true)}</div>`).join("")}${(onlyA.length||onlyB.length)?`<div class="academic-dual-cal-two"><div><small>РЕМС-34</small>${onlyA.map(x=>card(x,false)).join("")||'<i>-</i>'}</div><div><small>РЕМС-44</small>${onlyB.map(x=>card(x,false)).join("")||'<i>-</i>'}</div></div>`:""}</div>`;\n      }).join("");\n      return `<div class="academic-dual-cal-day ${localIsoDate()===date?"today-date":""}"><div class="academic-dual-cal-date"><b>${dt.getDate()}</b><span>${dt.toLocaleDateString("uk-UA",{weekday:"short"})}</span></div>${pairHtml||'<div class="academic-dual-cal-none">-</div>'}</div>`;\n    };\n    mount.innerHTML=`<div class="academic-dual-calendar"><div class="academic-dual-cal-weekdays">${["Понеділок","Вівторок","Середа","Четвер","П’ятниця"].map(x=>`<b>${x}</b>`).join("")}</div><div class="academic-dual-cal-grid">${blanks}${workDates.map(cellForDate).join("")}</div></div>`;\n    document.querySelectorAll(".academic-dual-card[data-id]").forEach(b=>b.onclick=()=>openAcademicEditor(b.dataset.id));\n  };\n  document.querySelector("#academicOpenCalendar").onclick=()=>{academicMainMode="calendar";academic();};\n  document.querySelector("#academicRefreshOfficial").onclick=async()=>{\n    const btn=document.querySelector("#academicRefreshOfficial");btn.disabled=true;btn.textContent="Оновлення…";\n    const result=await installOfficialRemsSchedule(true);\n    btn.disabled=false;btn.textContent="↻ Оновити офіційний розклад";\n    if(!result.ok) alert("Не вдалося оновити розклад: "+(result.error||"помилка"));\n    else {alert(`Готово. Офіційний розклад оновлено: ${result.count} занять. Проєкти та ручні дані не змінювалися.`);render();}\n  };\n  render();\n}\n\nfunction academicLegacyCalendar(){\n  const monthNames={\n    "2026-08":"Серпень 2026","2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026",\n    "2026-12":"Грудень 2026","2027-01":"Січень 2027","2027-02":"Лютий 2027",\n    "2027-03":"Березень 2027","2027-04":"Квітень 2027","2027-05":"Травень 2027"\n  };\n  const monthKeys=Object.keys(monthNames);\n  const weekdays=["Пн","Вт","Ср","Чт","Пт"];\n  app.innerHTML=`<div class="academic-page">\n    <div class="academic-topbar">\n      <div>\n        <h2>Розклад занять</h2>\n        <p>Окремий календар навчальних пар. Оберіть групу й місяць - усі заняття видно одразу на календарі.</p>\n      </div>\n      <div class="academic-filter academic-filter-actions">\n        <select id="academicGroupFilter">${groupOptionsHtml("","Усі групи")}</select>\n        <button type="button" class="ghost" id="academicBulkModeBtn">☑ Масове редагування</button>\n        <button type="button" class="primary" id="academicSyncRozklad">↻ Синхронізувати з REMS-РОЗКЛАД</button>\n        <button type="button" class="ghost" id="academicImportRozklad">JSON-файл</button>\n      </div>\n    </div>\n    ${db.academicImport?.importedAt?`<div class="academic-import-status"><span><b>REMS-РОЗКЛАД</b> · ${esc((db.academicImport.groups||[]).join(", "))} · ${Number(db.academicImport.count||0)} занять${db.academicImport.syncMode==="live"?` · <b>ОНЛАЙН</b>`:""}</span><small>${db.academicImport.syncMode==="live"?"Остання синхронізація":"Останній імпорт"}: ${esc(new Date(db.academicImport.importedAt).toLocaleString("uk-UA"))}${db.academicImport.sourceFile?` · ${esc(db.academicImport.sourceFile)}`:""}</small></div>`:""}\n    <div id="academicBulkBar" class="academic-bulk-bar" hidden></div>\n    <div id="academicSummary" class="academic-summary"></div>\n    <div id="academicMonthTabs" class="schedule-month-tabs academic-month-tabs"></div>\n    <div id="academicCalendarMount"></div>\n  </div>`;\n\n  let activeMonth=(()=>{\n    const cur=localIsoDate().slice(0,7);\n    return monthKeys.includes(cur)?cur:"2026-09";\n  })();\n  let bulkMode=false;\n  const selected=new Set();\n  const syncBulkBar=()=>{\n    const bar=$("#academicBulkBar");\n    const btn=$("#academicBulkModeBtn");\n    if(!bar||!btn)return;\n    btn.classList.toggle("active",bulkMode);\n    btn.textContent=bulkMode?"✓ Завершити вибір":"☑ Масове редагування";\n    bar.hidden=!bulkMode;\n    if(!bulkMode)return;\n    bar.innerHTML=`<div><b>Вибрано: ${selected.size}</b><span>Натискайте на заняття або вибирайте цілий день.</span></div>\n      <div class="academic-bulk-bar-actions">\n        <button type="button" class="ghost" id="academicBulkAllVisible">Вибрати всі видимі</button>\n        <button type="button" class="ghost" id="academicBulkClear" ${selected.size?"":"disabled"}>Очистити</button>\n        <button type="button" class="danger ghost" id="academicBulkDelete" ${selected.size?"":"disabled"}>Видалити</button>\n        <button type="button" class="primary" id="academicBulkEdit" ${selected.size?"":"disabled"}>Редагувати вибране</button>\n      </div>`;\n    $("#academicBulkClear").onclick=()=>{selected.clear();render();};\n    $("#academicBulkEdit").onclick=()=>openAcademicBulkEditor([...selected]);\n    $("#academicBulkDelete").onclick=async()=>{if(await academicBulkDelete([...selected])){selected.clear();render();}};\n    $("#academicBulkAllVisible").onclick=()=>{\n      $$(".academic-month-lesson[data-occurrence]").forEach(el=>selected.add(el.dataset.occurrence));\n      render();\n    };\n  };\n\n  const render=()=>{\n    const gf=$("#academicGroupFilter").value;\n    const rows=academicLessons().filter(l=>!gf||String(l.group||"")===gf);\n    const subjects=new Set(rows.map(l=>l.subject).filter(Boolean)).size;\n    const monthLessons=rows.filter(l=>academicLessonDates(l).some(d=>d.startsWith(activeMonth)));\n    const monthOccurrences=monthLessons.reduce((n,l)=>n+academicLessonDates(l).filter(d=>d.startsWith(activeMonth)).length,0);\n    $("#academicSummary").innerHTML=`\n      <div class="schedule-kpi"><span>Дисциплін</span><strong>${subjects}</strong></div>\n      <div class="schedule-kpi"><span>Записів розкладу</span><strong>${rows.length}</strong></div>\n      <div class="schedule-kpi"><span>Пар у місяці</span><strong>${monthOccurrences}</strong></div>\n      <div class="schedule-kpi"><span>Група</span><strong class="academic-kpi-group">${esc(gf||"Усі")}</strong></div>`;\n\n    $("#academicMonthTabs").innerHTML=monthKeys.map(m=>`<button type="button" class="schedule-month-tab ${m===activeMonth?"active":""}" data-month="${m}">${monthNames[m]}</button>`).join("");\n    $$("#academicMonthTabs .schedule-month-tab").forEach(b=>b.onclick=()=>{activeMonth=b.dataset.month;selected.clear();render();});\n\n    const [year,mon]=activeMonth.split("-").map(Number);\n    const start=`${activeMonth}-01`;\n    const lastDay=new Date(year,mon,0).getDate();\n    const dates=Array.from({length:lastDay},(_,i)=>`${activeMonth}-${String(i+1).padStart(2,"0")}`).filter(d=>{const day=new Date(d+"T12:00:00").getDay();return day>=1&&day<=5;});\n    const first=dates[0]?new Date(dates[0]+"T12:00:00"):new Date(start+"T12:00:00");\n    const blanks=Array.from({length:Math.max(0,first.getDay()-1)},()=>'<div class="academic-month-day empty"></div>').join("");\n\n    const cells=dates.map(date=>{\n      const dt=new Date(date+"T12:00:00");\n      const day=dt.getDay();\n      const lessons=rows.filter(l=>academicLessonOccursOnDate(l,date)).sort((a,b)=>String(a.startTime||"").localeCompare(String(b.startTime||""))||String(a.subject||"").localeCompare(String(b.subject||""),"uk"));\n      const isToday=localIsoDate()===date;\n      const dateKeys=lessons.map(l=>academicOccurrenceKey(l.id,date));\n      const allDateSelected=!!dateKeys.length&&dateKeys.every(k=>selected.has(k));\n      return `<div class="academic-month-day ${day===0||day===6?"weekend":""} ${isToday?"today-date":""} ${bulkMode?"bulk-mode":""}" data-date="${date}">\n        <div class="academic-month-day-head"><b>${dt.getDate()}</b>${isToday?'<span class="today-mini">СЬОГОДНІ</span>':""}${bulkMode&&lessons.length?`<button type="button" class="academic-date-select ${allDateSelected?"selected":""}" data-bulk-date="${date}" title="${allDateSelected?"Зняти вибір з дня":"Вибрати всі заняття цього дня"}">${allDateSelected?"✓":"+"}</button>`:""}</div>\n        <div class="academic-month-lessons">\n          ${lessons.map(l=>{const key=academicOccurrenceKey(l.id,date),isSelected=selected.has(key);return `<button type="button" class="academic-month-lesson ${academicTeacherClass(l.teacher,l.subject)} ${bulkMode?"bulk-selectable":""} ${isSelected?"bulk-selected":""}" data-id="${esc(String(l.id))}" data-date="${date}" data-occurrence="${esc(key)}">\n            ${bulkMode?`<span class="academic-bulk-check">${isSelected?"✓":""}</span>`:""}\n            <div class="academic-month-lesson-time">${esc(eventTimeText(l)||"час?")}</div>\n            <strong>${esc(l.subject||"Заняття")}</strong>\n            <span>${esc(academicDisplayLessonType(l.lessonType))}${l.source===ACADEMIC_IMPORT_SOURCE?' · ↻ REMS-РОЗКЛАД':""}</span>\n            <small>${esc(l.teacher||"Викладача не вказано")}</small>\n            <small>${esc(l.group||"")} · <b>ауд. ${esc(String(l.room||"").trim()||"не вказана")}</b>${String(l.scope||"")==="selected"?` · ${lessonStudents(l).length} студ.`:""}</small>\n          </button>`}).join("")||'<div class="academic-month-empty">-</div>'}\n        </div>\n      </div>`;\n    }).join("");\n\n    $("#academicCalendarMount").innerHTML=`<section class="academic-month-section">\n      <div class="academic-month-title"><h2>${monthNames[activeMonth]}</h2><span>${monthOccurrences} пар</span></div>\n      <div class="academic-month-grid">\n        ${weekdays.map(w=>`<div class="academic-month-weekday">${w}</div>`).join("")}\n        ${blanks}${cells}\n      </div>\n    </section>`;\n    $$(".academic-month-lesson").forEach(b=>b.onclick=e=>{\n      e.stopPropagation();\n      if(bulkMode){const key=b.dataset.occurrence;selected.has(key)?selected.delete(key):selected.add(key);render();}\n      else openAcademicEditor(b.dataset.id);\n    });\n    $$("[data-bulk-date]").forEach(btn=>btn.onclick=e=>{\n      e.stopPropagation();\n      const date=btn.dataset.bulkDate;\n      const keys=$$( `.academic-month-lesson[data-date="${date}"]` ).map(el=>el.dataset.occurrence);\n      const all=keys.length&&keys.every(k=>selected.has(k));\n      keys.forEach(k=>all?selected.delete(k):selected.add(k));\n      render();\n    });\n    syncBulkBar();\n  };\n  $("#academicGroupFilter").onchange=()=>{selected.clear();render();};\n  $("#academicBulkModeBtn").onclick=()=>{bulkMode=!bulkMode;if(!bulkMode)selected.clear();render();};\n  $("#academicSyncRozklad").onclick=openAcademicSyncDialog;\n  $("#academicImportRozklad").onclick=openAcademicImportDialog;\n  render();\n}\n\n(function injectAcademicStyles(){\n  if(document.getElementById("remsAcademicStyles")) return;\n  const st=document.createElement("style");\n  st.id="remsAcademicStyles";\n  st.textContent=`\n    .academic-page{display:grid;gap:18px}\n    .academic-topbar{display:flex;justify-content:space-between;gap:18px;align-items:flex-start;background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:18px}\n    .academic-topbar h2{margin:0 0 5px}.academic-topbar p{margin:0;color:#6b7280;font-size:12px;max-width:760px;line-height:1.5}\n    .academic-filter select{min-width:180px}\n    .academic-filter-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;justify-content:flex-end}\n    .academic-import-status{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:10px 14px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:12px;color:#1e3a8a;font-size:11px}\n    .academic-import-status small{color:#475569}\n    .academic-import-warning,.academic-import-info{margin-top:14px;padding:12px 14px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:12px;display:grid;gap:4px;font-size:11px;color:#1e3a8a}\n    .academic-import-warning span,.academic-import-info span{color:#475569;line-height:1.5}\n    .academic-import-groups{margin-top:16px;display:grid;gap:8px}.academic-import-group-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}\n    .academic-import-group-grid label{display:grid!important;grid-template-columns:auto 1fr auto!important;align-items:center;gap:8px!important;border:1px solid #e5e7eb;background:#fff;border-radius:9px;padding:9px 10px!important}\n    .academic-import-group-grid input{width:auto!important;margin:0!important}.academic-import-group-grid em{font-size:9px;font-style:normal;color:#64748b}\n    .academic-import-file{display:grid!important;gap:7px!important;margin-top:16px}.academic-import-file small{font-size:10px;color:#64748b}.academic-import-file input{background:#fff}\n    .academic-import-preview{margin-top:14px;border:1px dashed #cbd5e1;border-radius:12px;padding:12px;background:#f8fafc;display:grid;gap:9px;font-size:11px}.academic-import-preview>div:first-child{display:flex;justify-content:space-between;gap:12px}.academic-import-preview span{color:#64748b}\n    .academic-import-preview-kpis{display:flex!important;gap:8px!important;flex-wrap:wrap!important;justify-content:flex-start!important}.academic-import-preview-kpis span{background:#fff;border:1px solid #e5e7eb;border-radius:999px;padding:5px 8px;color:#475569}\n    .academic-live-connection{margin-top:14px;padding:12px 14px;border:1px solid #dbeafe;background:#f8fbff;border-radius:12px;display:grid;gap:4px;font-size:11px}.academic-live-connection b{color:#1d4ed8}.academic-live-connection span{color:#64748b;line-height:1.45}\n    .academic-live-login{margin-top:10px;border:1px solid #e5e7eb;background:#fff;border-radius:12px;padding:12px;display:grid;grid-template-columns:1fr 1fr auto;gap:9px;align-items:end}.academic-live-login[hidden]{display:none}.academic-live-login label{display:grid;gap:5px;font-size:11px}.academic-live-login small{grid-column:1/-1;color:#64748b}.academic-sync-actions-inline{display:flex;gap:8px;margin-top:10px;justify-content:flex-end}\n    @media(max-width:760px){.academic-live-login{grid-template-columns:1fr}.academic-live-login small{grid-column:auto}}\n    .academic-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}\n    .academic-section{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:16px;overflow:hidden}\n    .academic-week-grid{display:grid;grid-template-columns:repeat(6,minmax(150px,1fr));gap:10px;overflow-x:auto;padding-bottom:4px}\n    .academic-day-column{min-width:150px;background:#f8fafc;border-radius:13px;padding:9px}\n    .academic-day-head{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:#475569;margin-bottom:8px}\n    .academic-day-list{display:grid;gap:7px}\n    .academic-lesson-card{width:100%;text-align:left;border:1px solid #dbeafe;background:#fff;border-radius:11px;padding:10px;display:grid;gap:4px;cursor:pointer;box-shadow:none}\n    .academic-lesson-card:hover{border-color:#93c5fd;background:#eff6ff}\n    .academic-lesson-card b{font-size:12px;color:#111827}.academic-lesson-card span{font-size:10px;color:#475569}.academic-lesson-card small{font-size:9px;color:#64748b}\n    .academic-time{font-size:10px;font-weight:800;color:#1d4ed8}\n    .academic-empty{color:#cbd5e1;text-align:center;padding:20px 0}\n    .academic-once-list{display:grid;gap:8px}\n    .academic-once-card{display:grid;grid-template-columns:1fr auto auto;gap:16px;align-items:center;width:100%;text-align:left;border:1px solid #e5e7eb;border-radius:11px;background:#fff;padding:11px 13px;cursor:pointer}\n    .academic-once-card:hover{background:#f8fafc}.academic-once-card div{display:grid;gap:3px}.academic-once-card span,.academic-once-card small{font-size:10px;color:#64748b}.academic-once-card em{font-size:10px;font-style:normal;color:#2563eb}\n    .academic-editor{padding:22px;min-width:min(760px,92vw)}\n    .academic-form{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px}.academic-form .full{grid-column:1/-1}\n    .academic-form-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}\n    .academic-student-pick{border:1px solid #e5e7eb;border-radius:12px;padding:12px;background:#f8fafc}\n    .academic-student-pick-head{display:flex;justify-content:space-between;margin-bottom:8px;font-size:11px}.academic-student-pick-head span{color:#64748b}\n    .academic-student-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;max-height:240px;overflow:auto}\n    .academic-student-check{display:flex!important;flex-direction:row!important;gap:7px!important;align-items:center!important;background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:7px!important;font-size:10px!important}\n    .academic-student-check input{width:auto!important;margin:0!important}.academic-student-check span{font-size:10px}\n    .academic-actions{grid-column:1/-1}\n    .academic-calendar-card{border-left:3px solid ${ACADEMIC_COLOR};background:#eff6ff;border-radius:6px;padding:4px 5px;font-size:10px;color:#1e3a8a;margin:1px auto;max-width:104px;overflow:hidden}\n    .academic-calendar-card b{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.academic-calendar-card small{font-size:8px;color:#475569}\n    .academic-month-tabs{margin-top:0}\n    .academic-month-section{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:16px;overflow:auto}\n    .academic-month-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.academic-month-title h2{margin:0}.academic-month-title span{font-size:11px;color:#64748b}\n    .academic-month-grid{display:grid;grid-template-columns:repeat(5,minmax(150px,1fr));gap:7px;min-width:920px}\n    .academic-month-weekday{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#64748b;padding:5px 7px;text-align:center}\n    .academic-month-day{min-height:142px;border:1px solid #e5e7eb;border-radius:12px;background:#fff;padding:7px;display:flex;flex-direction:column;gap:6px}\n    .academic-month-day.weekend{background:#fafafa}.academic-month-day.today-date{box-shadow:inset 0 0 0 2px #2563eb}\n    .academic-month-day.empty{min-height:0;border-style:dashed;background:#fafafa}\n    .academic-month-day-head{display:flex;align-items:center;justify-content:space-between;min-height:22px}.academic-month-day-head>b{font-size:13px;color:#111827}\n    .academic-month-lessons{display:grid;gap:5px}\n    .academic-month-lesson{width:100%;border:1px solid #bfdbfe;background:#eff6ff;border-radius:9px;padding:6px;text-align:left;display:grid;gap:2px;cursor:pointer}\n    .academic-month-lesson:hover{background:#dbeafe;border-color:#60a5fa}.academic-month-lesson-time{font-size:9px;font-weight:800;color:#1d4ed8}.academic-month-lesson strong{font-size:10px;line-height:1.2;color:#111827}.academic-month-lesson span{font-size:8px;color:#1e40af}.academic-month-lesson small{font-size:8px;color:#64748b}\n    .academic-month-empty{font-size:10px;color:#cbd5e1;padding:12px 2px;text-align:center}\n    .academic-kpi-group{font-size:16px!important;line-height:1.2;overflow-wrap:anywhere}\n    .academic-bulk-bar{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:12px 14px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:14px;position:sticky;top:8px;z-index:20;box-shadow:0 8px 24px rgba(15,23,42,.08)}\n    .academic-bulk-bar[hidden]{display:none}.academic-bulk-bar>div:first-child{display:grid;gap:2px}.academic-bulk-bar span{font-size:10px;color:#64748b}.academic-bulk-bar-actions{display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end}\n    #academicBulkModeBtn.active{border-color:#2563eb;background:#eff6ff;color:#1d4ed8;font-weight:800}\n    .academic-month-day.bulk-mode{border-style:dashed}.academic-date-select{margin-left:auto;width:22px;height:22px;padding:0;border-radius:999px;border:1px solid #cbd5e1;background:#fff;color:#475569;font-weight:900;cursor:pointer}.academic-date-select.selected{background:#2563eb;border-color:#2563eb;color:#fff}\n    .academic-month-lesson.bulk-selectable{position:relative;padding-left:29px}.academic-month-lesson.bulk-selected{border-color:#2563eb;background:#dbeafe;box-shadow:inset 0 0 0 1px #2563eb}.academic-bulk-check{position:absolute;left:7px;top:7px;width:15px;height:15px;border:1px solid #93c5fd;border-radius:4px;background:#fff;display:flex!important;align-items:center;justify-content:center;font-size:10px!important;font-weight:900;color:#1d4ed8!important}\n    .academic-bulk-tip{margin-top:14px;padding:11px 13px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:11px;display:grid;gap:3px;font-size:11px}.academic-bulk-tip span{color:#64748b}\n    .academic-bulk-form{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px}.academic-bulk-form .full{grid-column:1/-1}.academic-bulk-field{border:1px solid #e5e7eb;border-radius:12px;background:#f8fafc;padding:11px;display:grid;gap:8px}.academic-bulk-field.is-disabled{opacity:.65}.academic-bulk-toggle{display:flex!important;flex-direction:row!important;align-items:center!important;gap:7px!important;font-size:11px!important;font-weight:800!important}.academic-bulk-toggle input{width:auto!important;margin:0!important}.academic-bulk-field>input,.academic-bulk-field>select,.academic-bulk-field>textarea,.academic-bulk-audience>select{background:#fff}.academic-bulk-field :disabled{opacity:.55;cursor:not-allowed}.academic-bulk-time{display:grid;grid-template-columns:1fr auto 1fr;gap:7px;align-items:center}.academic-bulk-dates{padding:9px 11px;border-radius:10px;background:#f8fafc;color:#475569;font-size:10px;display:flex;gap:7px;align-items:flex-start;flex-wrap:wrap}.academic-bulk-dates b{color:#111827}.academic-bulk-audience{display:grid;gap:8px}\n    .combined-lesson-card{max-width:132px!important;padding:5px 6px!important}.combined-lesson-card b{font-size:9px}.combined-lesson-card small{display:block;white-space:normal;line-height:1.25;margin-top:2px}\n    .calendar-month-tabs{margin-top:10px}\n\n    /* v37 - simplified project people management */\n    .project-team-simple{border:1px solid #dbeafe;background:#f8fbff}.project-team-selected{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}.project-team-person{display:inline-flex;align-items:center;gap:5px;border:1px solid #bfdbfe;background:#fff;border-radius:999px;padding:5px 7px 5px 10px}.project-team-remove{width:22px;height:22px;border-radius:999px;border:0;background:#fee2e2;color:#b91c1c;font-weight:900;cursor:pointer}.project-team-manager-toolbar{display:flex;gap:10px;align-items:center;margin:14px 0}.project-team-manager-toolbar input{flex:1}.project-team-manager-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.project-team-manager-grid>section{border:1px solid #e5e7eb;border-radius:14px;padding:12px;background:#fff}.project-team-manager-grid h3{margin:0 0 10px}.project-team-manager-list{display:grid;gap:7px;max-height:55vh;overflow:auto}.team-manager-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;border-bottom:1px solid #f1f5f9;padding:6px 0}.team-person-open{border:0;background:transparent;text-align:left;padding:0;cursor:pointer}\n    /* v37 - academic timetable is a real Mon–Fri calendar table */\n    .academic-dual-calendar{overflow:auto}.academic-dual-cal-weekdays,.academic-dual-cal-grid{display:grid;grid-template-columns:repeat(5,minmax(230px,1fr));gap:7px;min-width:1180px}.academic-dual-cal-weekdays{margin-bottom:7px}.academic-dual-cal-weekdays b{text-align:center;padding:8px;border-radius:9px;background:#0f172a;color:#fff;font-size:11px}.academic-dual-cal-day{min-height:190px;border:1px solid #e5e7eb;border-radius:12px;background:#fff;padding:8px;display:grid;align-content:start;gap:7px}.academic-dual-cal-day.empty{background:#f8fafc;border-style:dashed;min-height:80px}.academic-dual-cal-date{display:flex;justify-content:space-between;align-items:center;padding-bottom:5px;border-bottom:1px solid #f1f5f9}.academic-dual-cal-date b{font-size:16px}.academic-dual-cal-date span{font-size:9px;color:#64748b;text-transform:uppercase}.academic-dual-cal-pair{display:grid;gap:5px;border-top:1px solid #e5e7eb;padding-top:6px}.academic-dual-cal-pair:first-of-type{border-top:0}.academic-dual-cal-pair-head{display:flex;justify-content:space-between;gap:5px;font-size:9px;color:#475569}.academic-dual-cal-pair-head b{color:#111827}.academic-dual-cal-two{display:grid;grid-template-columns:1fr 1fr;gap:5px}.academic-dual-cal-two>div{min-width:0}.academic-dual-cal-two small{display:block;font-size:8px;font-weight:800;color:#64748b;margin-bottom:3px}.academic-dual-cal-two i{display:block;text-align:center;color:#cbd5e1;font-style:normal;padding:8px}.academic-dual-cal-day .academic-dual-card{padding:6px!important;border-radius:8px!important;gap:2px!important}.academic-dual-cal-day .academic-dual-card strong{font-size:9px!important}.academic-dual-cal-day .academic-dual-card span,.academic-dual-cal-day .academic-dual-card b{font-size:8px!important}.academic-dual-cal-day .academic-together{font-size:7px!important}.academic-dual-cal-none{color:#cbd5e1;text-align:center;padding:18px 0}\n    /* v38 - clearer timetable cards + one simple project-team list */\n    .academic-dual-cal-day .academic-dual-card{padding:9px 10px!important;gap:4px!important}.academic-dual-cal-day .academic-dual-card strong{font-size:12px!important;line-height:1.28!important}.academic-dual-cal-day .academic-dual-card .academic-kind{font-size:10px!important}.academic-dual-cal-day .academic-dual-card .academic-teacher{font-size:11px!important;font-weight:800!important;line-height:1.25!important}.academic-dual-cal-day .academic-dual-card .academic-room{font-size:11px!important;font-weight:900!important;line-height:1.25!important}.academic-dual-cal-day .academic-together{font-size:8px!important}\n    .project-team-compact-v38{padding:14px 16px!important;background:#f8fbff;border-color:#dbeafe!important}.project-team-compact-main{display:flex;justify-content:space-between;gap:16px;align-items:center}.project-team-preview{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}.project-team-preview span{padding:5px 8px;border-radius:999px;background:#fff;border:1px solid #dbeafe;font-size:11px}.project-team-preview .more{font-weight:800;background:#eff6ff}.project-team-manager-v38{max-width:920px;margin:auto}.project-team-manager-toolbar-v38{display:grid;grid-template-columns:minmax(260px,1fr) 180px auto auto;gap:10px;align-items:center;margin:16px 0}.project-team-manager-toolbar-v38 input,.project-team-manager-toolbar-v38 select{min-height:42px}.project-team-count{display:flex;align-items:baseline;gap:5px;white-space:nowrap}.project-team-count strong{font-size:22px}.project-team-count span{font-size:11px;color:#64748b}.project-team-one-list{display:grid;grid-template-columns:1fr 1fr;gap:8px}.project-team-check-row{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:10px;align-items:center;border:1px solid #e5e7eb;border-radius:12px;padding:10px 12px;background:#fff;cursor:pointer;transition:.15s}.project-team-check-row:hover{border-color:#93c5fd}.project-team-check-row.is-selected{background:#eff6ff;border-color:#93c5fd}.project-team-check-row.is-saving{opacity:.55}.project-team-check{width:18px!important;height:18px!important;margin:0!important}.project-team-check-main{display:grid;gap:2px}.project-team-check-main b{font-size:12px}.project-team-check-main small{font-size:10px;color:#64748b}.project-team-state{font-size:10px;font-weight:800;color:#64748b}.project-team-check-row.is-selected .project-team-state{color:#1d4ed8}.project-team-manager-note{margin-top:14px}.projects-participation-head{margin-bottom:12px}.projects-participation-head h2{margin:0 0 4px}.projects-participation-head p{margin:0;color:#64748b;font-size:12px}\n    @media(max-width:900px){.project-team-manager-toolbar-v38{grid-template-columns:1fr 1fr}.project-team-one-list{grid-template-columns:1fr}.academic-dual-cal-day .academic-dual-card strong{font-size:13px!important}.academic-dual-cal-day .academic-dual-card .academic-teacher,.academic-dual-cal-day .academic-dual-card .academic-room{font-size:12px!important}}\n    @media(max-width:650px){.project-team-manager-toolbar-v38{grid-template-columns:1fr}.project-team-compact-main{align-items:stretch;flex-direction:column}.project-team-compact-main button{width:100%}.academic-dual-cal-day .academic-dual-card{padding:11px!important}.academic-dual-cal-day .academic-dual-card strong{font-size:14px!important}.academic-dual-cal-day .academic-dual-card .academic-kind{font-size:11px!important}.academic-dual-cal-day .academic-dual-card .academic-teacher,.academic-dual-cal-day .academic-dual-card .academic-room{font-size:13px!important}}\n    @media(max-width:760px){.project-team-manager-grid{grid-template-columns:1fr}.project-team-manager-toolbar{align-items:stretch;flex-direction:column}}\n    @media(max-width:900px){.academic-summary{grid-template-columns:repeat(2,1fr)}.academic-form-grid{grid-template-columns:1fr 1fr}}\n    @media(max-width:650px){.academic-topbar{flex-direction:column}.academic-filter-actions{width:100%;justify-content:stretch}.academic-filter-actions select,.academic-filter-actions button{width:100%}.academic-import-status{align-items:flex-start;flex-direction:column}.academic-import-group-grid{grid-template-columns:1fr}.academic-summary{grid-template-columns:1fr 1fr}.academic-form{grid-template-columns:1fr}.academic-form .full{grid-column:1}.academic-form-grid{grid-template-columns:1fr}.academic-student-grid{grid-template-columns:1fr}.academic-once-card{grid-template-columns:1fr}.academic-editor{padding:14px;min-width:0}.academic-bulk-bar{position:static;align-items:stretch;flex-direction:column}.academic-bulk-bar-actions{display:grid;grid-template-columns:1fr 1fr}.academic-bulk-form{grid-template-columns:1fr}.academic-bulk-form .full{grid-column:1}}\n  `;\n  document.head.appendChild(st);\n})();\n\n\nfunction openScheduleMatrix(){\n  rememberCurrentView("schedule");\n  currentProjectDetailId=null;\n  $$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view==="schedule"));\n  $("#pageTitle").textContent="Участь у проєктах";\n  calendar();\n  const toolbar=document.querySelector(".calendar-toolbar");\n  if(toolbar&&!document.querySelector("#backToScheduleFromMatrix")){\n    const back=document.createElement("button");\n    back.type="button";back.className="ghost";back.id="backToScheduleFromMatrix";back.textContent="← Календар зайнятості";\n    back.onclick=()=>schedule();\n    toolbar.prepend(back);\n    const hint=document.createElement("div");\n    hint.className="schedule-matrix-hint";\n    hint.innerHTML='<b>Детальна таблиця по студентах</b><span>Детальна участь студентів у проєктах. Навчальні заняття тут не відображаються.</span>';\n    toolbar.parentNode.insertBefore(hint,toolbar.nextSibling);\n  }\n}\n\nfunction calendar(){\n  const monthNames={\n    "2026-08":"Серпень 2026","2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026",\n    "2026-12":"Грудень 2026","2027-01":"Січень 2027","2027-02":"Лютий 2027",\n    "2027-03":"Березень 2027","2027-04":"Квітень 2027","2027-05":"Травень 2027"\n  };\n  const monthKeys=Object.keys(monthNames);\n  app.innerHTML=`\n    <div class="calendar-toolbar">\n      <select id="calSource">\n        <option value="">Заняття + проєкти</option>\n        <option value="lesson">Тільки заняття</option>\n        <option value="project">Тільки проєкти</option>\n      </select>\n      <select id="calProject"><option value="">Усі проєкти</option>${db.projects.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join("")}</select>\n      <select id="calGroup">${groupOptionsHtml()}</select>\n      <input id="calStudent" placeholder="Пошук студента...">\n      <select id="calType">\n        <option value="">Усі типи проєктних подій</option>\n        <option value="Репетиція">Репетиція</option>\n        <option value="Зйомка">Зйомка</option>\n        <option value="Кастинг">Кастинг</option>\n        <option value="Прогін">Прогін</option>\n        <option value="Гала">Гала-концерт</option>\n      </select>\n    </div>\n    <div class="calendar-legend">\n      <span class="legend-item"><span class="dot" style="background:${ACADEMIC_COLOR}"></span>Заняття</span>\n      ${db.projects.map(p=>`<span class="legend-item"><span class="dot" style="background:${p.color}"></span>${esc(p.name)}</span>`).join("")}\n    </div>\n    <div id="calendarSummary" class="calendar-summary"></div>\n    <div id="calendarMonthTabs" class="schedule-month-tabs calendar-month-tabs"></div>\n    <div id="calendarMount"></div>`;\n\n  let activeMonth=(()=>{\n    const focus=conflictCalendarFocus?.date?.slice(0,7);\n    if(focus&&monthKeys.includes(focus)) return focus;\n    const cur=localIsoDate().slice(0,7);\n    return monthKeys.includes(cur)?cur:"2026-09";\n  })();\n\n  const render=()=>{\n    const source=$("#calSource").value;\n    const pf=$("#calProject").value;\n    const gf=$("#calGroup").value;\n    const q=$("#calStudent").value.toLowerCase().trim();\n    const tf=$("#calType").value.toLowerCase();\n    const [year,mon]=activeMonth.split("-").map(Number);\n    const start=`${activeMonth}-01`;\n    const end=`${activeMonth}-${String(new Date(year,mon,0).getDate()).padStart(2,"0")}`;\n    const dates=datesBetween(start,end);\n\n    const students=(db.students||[]).filter(st=>{\n      if(gf && String(st.group||"")!==gf) return false;\n      if(!String(st.name||"").toLowerCase().includes(q)) return false;\n      if(pf){\n        return (db.events||[]).some(e=>String(e.projectId)===String(pf) && studentsForEvent(e).some(x=>String(x.id)===String(st.id)));\n      }\n      return true;\n    });\n\n    const rawMap=combinedAssignments();\n    const map={};\n    Object.entries(rawMap).forEach(([key,activities])=>{\n      const filtered=activities.filter(a=>{\n        if(source && a.source!==source) return false;\n        if(pf && (a.source!=="project"||String(a.projectId)!==String(pf))) return false;\n        if(tf && (a.source!=="project"||!String(a.type||"").toLowerCase().includes(tf))) return false;\n        const date=key.split("|")[1];\n        return date>=start&&date<=end;\n      });\n      if(filtered.length) map[key]=filtered;\n    });\n\n    const visibleStudentIds=new Set(students.map(st=>String(st.id)));\n    const visibleKeys=Object.keys(map).filter(k=>visibleStudentIds.has(k.split("|")[0]));\n    const busyCells=visibleKeys.length;\n    const conflicts=students.reduce((n,st)=>n+conflictGroupsForStudent(st.id).filter(g=>g.date>=start&&g.date<=end).length,0);\n    const uniqueBusyStudents=new Set(visibleKeys.map(k=>k.split("|")[0])).size;\n    $("#calendarSummary").innerHTML=`\n      <span class="summary-pill">Місяць: <b>${monthNames[activeMonth]}</b></span>\n      <span class="summary-pill">Студентів: <b>${students.length}</b></span>\n      <span class="summary-pill">Зайнятих студентів: <b>${uniqueBusyStudents}</b></span>\n      <span class="summary-pill">Заповнених клітинок: <b>${busyCells}</b></span>\n      ${conflicts?`<button type="button" class="summary-pill conflict-summary-button" id="calendarConflictBtn">Конфліктів: <b>${conflicts}</b> · Відкрити →</button>`:`<span class="summary-pill">Конфліктів: <b>0</b></span>`}`;\n\n    $("#calendarMonthTabs").innerHTML=monthKeys.map(m=>`<button type="button" class="schedule-month-tab ${m===activeMonth?"active":""}" data-month="${m}">${monthNames[m]}</button>`).join("");\n    $$("#calendarMonthTabs .schedule-month-tab").forEach(b=>b.onclick=()=>{activeMonth=b.dataset.month;render();});\n\n    $("#calendarMount").innerHTML=`<section class="calendar-month calendar-month-single">\n      <div class="calendar-month-title"><h2>${monthNames[activeMonth]}</h2><span>Заняття + проєкти по кожному студенту</span></div>\n      <div class="calendar-wrap"><table class="calendar"><thead><tr>\n        <th class="name">Студент</th>\n        ${dates.map(d=>{\n          const dt=new Date(d+"T12:00:00");\n          const dow=dt.toLocaleDateString("uk-UA",{weekday:"short"});\n          const day=dt.getDate();\n          const today=localIsoDate()===d?" today-head":"";\n          return `<th class="${today}">${dow}<br>${day}${today?'<span class="today-mini">СЬОГОДНІ</span>':""}</th>`;\n        }).join("")}\n      </tr></thead><tbody>\n      ${students.map(st=>`<tr><td class="name"><b>${esc(st.name)}</b><div class="muted">${esc(st.group||"")}</div></td>\n        ${dates.map(d=>{\n          const day=new Date(d+"T12:00:00").getDay();\n          const arr=map[`${st.id}|${d}`]||[];\n          const hasConflict=studentDateHasConflict(st.id,d);\n          const focused=conflictCalendarFocus && String(conflictCalendarFocus.studentId)===String(st.id) && conflictCalendarFocus.date===d;\n          const cls=(day===0||day===6?" weekend":"")+(hasConflict?" conflict":"")+(focused?" conflict-focus":"")+(localIsoDate()===d?" today-date":"");\n          if(!arr.length) return `<td class="day-cell${cls}" data-date="${d}" data-student-id="${esc(String(st.id))}"></td>`;\n          return `<td class="day-cell${cls}" data-date="${d}" data-student-id="${esc(String(st.id))}" title="${esc(arr.map(activityTitle).join(" + "))}">\n            ${arr.map(a=>{\n              if(a.source==="lesson"){\n                const meta=[a.lessonType||"Заняття",eventTimeText(a),a.location?`ауд. ${a.location}`:""].filter(Boolean).join(" · ");\n                return `<div class="academic-calendar-card combined-lesson-card"><b>🎓 ${esc(a.title)}</b><small>${esc(meta)}</small></div>`;\n              }\n              const pr=pBy(a.projectId);\n              if(!pr) return "";\n              const label=`${shortType(a.type)}${eventTimeText(a)?` · ${eventTimeText(a)}`:""}`;\n              return `<div class="busy calendar-project-event" style="background:transparent">${calendarProjectCard(pr,esc(label))}</div>`;\n            }).join("")}\n          </td>`;\n        }).join("")}\n      </tr>`).join("")}\n      </tbody></table></div>\n    </section>`;\n\n    $$(".day-cell").forEach(td=>td.onclick=()=>showDay(td.dataset.date));\n    if($("#calendarConflictBtn")) $("#calendarConflictBtn").onclick=showAllConflicts;\n    if(conflictCalendarFocus){\n      const focus=conflictCalendarFocus;\n      setTimeout(()=>{\n        const cell=[...document.querySelectorAll(".day-cell")].find(el=>el.dataset.date===focus.date&&String(el.dataset.studentId)===String(focus.studentId));\n        cell?.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});\n      },80);\n    }\n  };\n\n  if(conflictCalendarFocus){\n    const focusStudent=sBy(conflictCalendarFocus.studentId);\n    if(focusStudent){\n      $("#calStudent").value=focusStudent.name;\n      $("#calGroup").value=focusStudent.group||"";\n    }\n  }\n  $("#calSource").onchange=render;\n  $("#calProject").onchange=render;\n  $("#calGroup").onchange=render;\n  $("#calStudent").oninput=render;\n  $("#calType").onchange=render;\n  render();\n  conflictCalendarFocus=null;\n}\n\n(function injectAcademicDualV36Styles(){\n  if(document.getElementById("remsAcademicDualV36Styles"))return;\n  const st=document.createElement("style");st.id="remsAcademicDualV36Styles";st.textContent=`\n    .academic-dual-page{max-width:1500px;margin:0 auto}.academic-dual-topbar{align-items:center}\n    .academic-view-switcher-inline{display:flex;align-items:center;gap:8px;margin-right:10px}.academic-view-switcher-inline span{font-size:10px;color:#64748b}\n    .academic-dual-legend{display:flex;gap:8px;flex-wrap:wrap}.academic-dual-legend span{padding:7px 11px;border-radius:999px;border:1px solid rgba(0,0,0,.08);font-size:10px;font-weight:800}\n    .academic-dual-date{background:#fff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;margin-bottom:14px}.academic-dual-date-head{display:flex;justify-content:space-between;align-items:center;padding:13px 16px;background:#111827;color:#fff}.academic-dual-date-head h3{margin:0;font-size:15px}.academic-dual-date-head span{font-size:11px;color:#cbd5e1}\n    .academic-dual-columns-head{display:grid;grid-template-columns:95px 1fr 1fr;background:#f8fafc;border-bottom:1px solid #e5e7eb}.academic-dual-columns-head>div{padding:9px 12px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.05em;color:#64748b}.academic-dual-columns-head>div:nth-child(2),.academic-dual-columns-head>div:nth-child(3){text-align:center;border-left:1px solid #e5e7eb}\n    .academic-dual-pair{display:grid;grid-template-columns:95px 1fr;border-bottom:1px solid #e5e7eb}.academic-dual-pair:last-child{border-bottom:0}.academic-dual-pair-label{padding:14px 10px;background:#fafafa;display:grid;align-content:start;justify-items:center;gap:3px;border-right:1px solid #e5e7eb}.academic-dual-pair-label b{font-size:20px}.academic-dual-pair-label span{font-size:9px;color:#64748b}\n    .academic-dual-pair-content{padding:8px;display:grid;gap:8px;min-width:0}.academic-dual-shared{display:grid}.academic-dual-separate{display:grid;grid-template-columns:1fr 1fr;gap:8px}.academic-dual-separate>div{display:grid;gap:7px;align-content:start;min-width:0}.academic-dual-separate>div+div{border-left:1px dashed #d1d5db;padding-left:8px}\n    .academic-dual-card{width:100%;border:1px solid transparent;border-radius:12px;padding:10px 12px;text-align:left;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:3px 10px;cursor:pointer;box-shadow:none}.academic-dual-card strong{font-size:12px;line-height:1.25;grid-column:1/-1}.academic-dual-card .academic-kind{font-size:10px;font-weight:800}.academic-dual-card .academic-teacher{font-size:10px}.academic-dual-card .academic-room{font-size:10px;text-align:right}.academic-dual-card .academic-together{grid-column:1/-1;font-style:normal;font-size:9px;font-weight:900;letter-spacing:.04em;opacity:.82}\n    .teacher-fisher{background:#dbeafe!important;border-color:#60a5fa!important;color:#1e3a8a!important}.teacher-krykunenko{background:#f3e8ff!important;border-color:#c084fc!important;color:#6b21a8!important}.teacher-kucher{background:#ffedd5!important;border-color:#fb923c!important;color:#9a3412!important}.teacher-other{background:#f8fafc!important;border-color:#d1d5db!important;color:#334155!important}\n    .academic-dual-empty{min-height:42px;display:grid;place-items:center;color:#cbd5e1;border:1px dashed #e5e7eb;border-radius:10px}.academic-month-lesson.teacher-fisher,.academic-month-lesson.teacher-krykunenko,.academic-month-lesson.teacher-kucher,.academic-month-lesson.teacher-other{border-width:1px}\n    @media(max-width:780px){.academic-dual-columns-head{grid-template-columns:70px 1fr 1fr}.academic-dual-pair{grid-template-columns:70px 1fr}.academic-dual-pair-label{padding:10px 5px}.academic-dual-separate{gap:5px}.academic-dual-pair-content{padding:5px}.academic-dual-card{padding:8px;grid-template-columns:1fr}.academic-dual-card .academic-room{text-align:left}.academic-dual-topbar{align-items:flex-start}.academic-dual-date{overflow-x:auto}.academic-dual-columns-head,.academic-dual-pair{min-width:680px}}\n  `;document.head.appendChild(st);\n})();\n\nfunction schedule(){\n  app.innerHTML=`\n    <div class="projects-participation-head"><div><h2>Участь у проєктах</h2><p>Тут показані тільки проєкти та участь студентів у них. Навчальні заняття сюди не підмішуються.</p></div></div>\n    <div class="schedule-controls">\n      <select id="schPeriod">\n        <option value="august">Серпень 2026</option>\n        <option value="autumn" selected>Вересень–листопад</option>\n        <option value="winter">Грудень–лютий</option>\n        <option value="spring">Березень–травень</option>\n        <option value="year">Серпень–травень</option>\n      </select>\n      <select id="schGroup">${groupOptionsHtml()}</select>\n      <select id="schWeekday">\n        <option value="">Усі дні тижня</option>\n        <option value="1">Понеділок</option>\n        <option value="2">Вівторок</option>\n        <option value="3">Середа</option>\n        <option value="4">Четвер</option>\n        <option value="5">П’ятниця</option>\n      </select>\n      <select id="schMinFree">\n        <option value="0">Будь-яка кількість вільних</option>\n        <option value="30">30+ вільних</option>\n        <option value="25">25+ вільних</option>\n        <option value="20">20+ вільних</option>\n      </select>\n      <button type="button" class="ghost" id="schMatrixBtn">Таблиця по студентах</button>\n    </div>\n    <div id="scheduleKpis" class="schedule-kpis"></div>\n    <div id="scheduleRecommended"></div>\n    <div id="scheduleMonthTabs" class="schedule-month-tabs"></div>\n    <div id="scheduleCalendar"></div>`;\n\n  const matrixBtn=document.querySelector("#schMatrixBtn");\n  if(matrixBtn) matrixBtn.onclick=()=>openScheduleMatrix();\n\n  const render=()=>{\n    const ranges={\n      august:["2026-08-01","2026-08-31"],\n      autumn:["2026-09-01","2026-11-30"],\n      winter:["2026-12-01","2027-02-28"],\n      spring:["2027-03-01","2027-05-31"],\n      year:["2026-08-01","2027-05-31"]\n    };\n    const [start,end]=ranges[$("#schPeriod").value];\n    const weekday=$("#schWeekday").value;\n    const minFree=+$("#schMinFree").value;\n    const group=$("#schGroup").value;\n    const poolStudents=db.students.filter(st=>!group||String(st.group||"")===group);\n    const poolIds=new Set(poolStudents.map(st=>String(st.id)));\n\n    const allDates=datesBetween(start,end);\n    const stats={};\n\n    allDates.forEach(date=>{\n      const busyIds=new Set();\n      const reasons={};\n\n      db.events.filter(e=>e.date===date).forEach(e=>{\n        const p=pBy(e.projectId);\n        if(!p) return;\n        const assigned=studentsForEvent(e).filter(st=>poolIds.has(String(st.id)));\n        assigned.forEach(st=>busyIds.add(String(st.id)));\n        if(assigned.length) reasons[p.name]=(reasons[p.name]||0)+assigned.length;\n      });\n\n\n      const busy=busyIds.size;\n      const free=Math.max(0,poolStudents.length-busy);\n      let cls="schedule-score-best",label="ІДЕАЛЬНО",dayClass="best";\n      if(busy>=15){cls="schedule-score-critical";label="КРИТИЧНО";dayClass="critical";}\n      else if(busy>=10){cls="schedule-score-hard";label="СКЛАДНО";dayClass="hard";}\n      else if(busy>=5){cls="schedule-score-good";label="МОЖНА";dayClass="";}\n\n      stats[date]={busy,free,reasons,cls,label,dayClass};\n    });\n\n    const filtered=allDates.filter(date=>{\n      const day=new Date(date+"T12:00:00").getDay();\n      if(day===0||day===6) return false;\n      if(weekday && String(day)!==weekday) return false;\n      return stats[date].free>=minFree;\n    });\n\n    const avgFree=filtered.length ? Math.round(filtered.reduce((s,d)=>s+stats[d].free,0)/filtered.length) : 0;\n    const perfect=filtered.filter(d=>stats[d].busy<=4).length;\n    const hard=filtered.filter(d=>stats[d].busy>=10&&stats[d].busy<15).length;\n    const critical=filtered.filter(d=>stats[d].busy>=15).length;\n\n    $("#scheduleKpis").innerHTML=`\n      <div class="schedule-kpi"><span>Студентів у вибірці</span><strong>${poolStudents.length}</strong></div>\n      <div class="schedule-kpi"><span>Середньо вільних від проєктів</span><strong>${avgFree}</strong></div>\n      <div class="schedule-kpi"><span>Ідеальних днів</span><strong>${perfect}</strong></div>\n      <div class="schedule-kpi"><span>Складних днів</span><strong>${hard}</strong></div>\n      <div class="schedule-kpi"><span>Критичних днів</span><strong>${critical}</strong></div>`;\n\n    const best=[...filtered].sort((a,b)=>stats[b].free-stats[a].free||a.localeCompare(b)).slice(0,5);\n    $("#scheduleRecommended").innerHTML=best.length?`\n      <div class="recommended-card">\n        <h2>Найвільніші від проєктів дні</h2>\n        <div class="recommended-list">\n          ${best.map(d=>{\n            const wd=new Date(d+"T12:00:00").toLocaleDateString("uk-UA",{weekday:"long"});\n            return `<button class="recommended-item schedule-open-day" data-date="${d}">\n              <b>${fullfmt(d)}</b><br>\n              <span class="schedule-note">${wd} · ${stats[d].free} вільних із ${poolStudents.length}</span>\n            </button>`;\n          }).join("")}\n        </div>\n      </div>`:"";\n\n    const monthGroups={};\n    allDates.forEach(d=>{\n      const key=d.slice(0,7);\n      (monthGroups[key] ||= []).push(d);\n    });\n\n    const monthNames={\n      "2026-08":"Серпень 2026","2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026",\n      "2026-12":"Грудень 2026","2027-01":"Січень 2027","2027-02":"Лютий 2027",\n      "2027-03":"Березень 2027","2027-04":"Квітень 2027","2027-05":"Травень 2027"\n    };\n    const weekdays=["Пн","Вт","Ср","Чт","Пт","Сб","Нд"];\n\n    const availableMonths=Object.keys(monthGroups);\n    const activePeriod=$("#schPeriod").value;\n    const rememberedMonth=$("#scheduleMonthTabs").dataset.activeMonth;\n    const currentMonth=localIsoDate().slice(0,7);\n    let activeMonth=rememberedMonth && availableMonths.includes(rememberedMonth)\n      ? rememberedMonth\n      : (availableMonths.includes(currentMonth)?currentMonth:availableMonths[0]);\n\n    $("#scheduleMonthTabs").innerHTML=availableMonths.map(month=>`\n      <button type="button" class="schedule-month-tab ${month===activeMonth?"active":""}" data-month="${month}">\n        ${monthNames[month]||month}\n      </button>`).join("");\n\n    const renderScheduleMonth=month=>{\n      activeMonth=month;\n      $("#scheduleMonthTabs").dataset.activeMonth=month;\n      $$(".schedule-month-tab").forEach(b=>b.classList.toggle("active",b.dataset.month===month));\n\n      const dates=monthGroups[month]||[];\n      if(!dates.length){\n        $("#scheduleCalendar").innerHTML='<div class="empty">У цьому місяці немає дат.</div>';\n        return;\n      }\n\n      const first=new Date(dates[0]+"T12:00:00");\n      const jsDay=first.getDay();\n      const mondayIndex=(jsDay+6)%7;\n      const blanks=Array.from({length:mondayIndex},()=>`<div class="schedule-day empty"></div>`).join("");\n\n      const cells=dates.map(date=>{\n        const dt=new Date(date+"T12:00:00");\n        const day=dt.getDay();\n        const st=stats[date];\n        const hiddenByFilter=(weekday && String(day)!==weekday) || st.free<minFree;\n        const projectEntries=Object.entries(st.reasons).sort((a,b)=>b[1]-a[1]).slice(0,3);\n\n        const isToday=localIsoDate()===date;\n        return `<div class="schedule-day ${day===0||day===6?"weekend":""} ${st.dayClass} ${isToday?"today-date":""}" data-date="${date}" style="${hiddenByFilter?"opacity:.28":""}">\n          <div class="schedule-day-number">${dt.getDate()}${isToday?'<span class="today-mini">СЬОГОДНІ</span>':""}</div>\n          <span class="schedule-score-badge ${st.cls}">${st.label}</span>\n          <div class="schedule-day-meta">\n            <div class="schedule-day-free">${st.free} вільні</div>\n            <div class="schedule-day-busy">${st.busy} зайняті</div>\n          </div>\n          <div class="schedule-day-projects">\n            ${projectEntries.map(([name,count])=>{\n              if(name==="🎓 Заняття"){\n                return `<span class="schedule-mini-project project-watermark" style="--project-color:${ACADEMIC_COLOR};"><span class="project-watermark-text">${esc(name)} ${count}</span></span>`;\n              }\n              const p=db.projects.find(x=>x.name===name);\n              return `<span class="schedule-mini-project project-watermark" style="${p?projectWatermarkStyle(p):"--project-color:#6b7280;"}">${p?projectWatermarkInner(p,`${esc(name)} ${count}`):`<span class="project-watermark-text">${esc(name)} ${count}</span>`}</span>`;\n            }).join("")}\n          </div>\n        </div>`;\n      }).join("");\n\n      $("#scheduleCalendar").innerHTML=`<section class="schedule-month schedule-month-single">\n        <div class="schedule-month-head">\n          <h2>${monthNames[month]||month}</h2>\n          <div class="schedule-month-nav">\n            <button type="button" class="ghost schedule-prev-month" ${availableMonths.indexOf(month)===0?"disabled":""}>← Попередній</button>\n            <span>Натисни на день, щоб побачити деталі</span>\n            <button type="button" class="ghost schedule-next-month" ${availableMonths.indexOf(month)===availableMonths.length-1?"disabled":""}>Наступний →</button>\n          </div>\n        </div>\n        <div class="schedule-cal">\n          ${weekdays.map(w=>`<div class="schedule-cal-head">${w}</div>`).join("")}\n          ${blanks}${cells}\n        </div>\n      </section>`;\n\n      $$(".schedule-day[data-date]").forEach(el=>el.onclick=()=>showDay(el.dataset.date));\n\n      const idx=availableMonths.indexOf(month);\n      const prev=$(".schedule-prev-month");\n      const next=$(".schedule-next-month");\n      if(prev) prev.onclick=()=>idx>0&&renderScheduleMonth(availableMonths[idx-1]);\n      if(next) next.onclick=()=>idx<availableMonths.length-1&&renderScheduleMonth(availableMonths[idx+1]);\n    };\n\n    $$(".schedule-month-tab").forEach(btn=>btn.onclick=()=>renderScheduleMonth(btn.dataset.month));\n    renderScheduleMonth(activeMonth);\n\n    $$(".schedule-open-day").forEach(el=>el.onclick=()=>{\n      if(el.dataset.date) showDay(el.dataset.date);\n    });\n  };\n\n  $("#schPeriod").onchange=()=>{\n    const tabs=$("#scheduleMonthTabs");\n    if(tabs) delete tabs.dataset.activeMonth;\n    render();\n  };\n  $("#schWeekday").onchange=render;\n  $("#schMinFree").onchange=render;\n  $("#schGroup").onchange=render;\n  render();\n}\n\n\n// ===== «Зустріч із індустрією» · REMS Control v4.0 =====\nconst INDUSTRY_COLLECTION="rems_industry_meetings";\nconst INDUSTRY_MEDIA_COLLECTION="rems_industry_media";\nconst industryBlockNames={\n  text:"Текст",\n  heading:"Підзаголовок",\n  quote:"Цитата",\n  gallery:"Фото",\n  story:"Відео",\n  youtube:"YouTube",\n  social:"Instagram / TikTok",\n  audio:"Аудіо",\n  file:"Файл / PDF",\n  link:"Посилання",\n  guest:"Про гостя",\n  divider:"Розділювач"\n};\nlet industryCache=[];\nconst industryId=()=>`meeting-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;\nconst industryBlockId=()=>`b-${Date.now()}-${Math.random().toString(36).slice(2,7)}`;\n\nfunction normalizeIndustryBlock(raw={}){\n  const b={...raw};\n  b.id=b.id||industryBlockId();\n\n  // Old editor types are converted instead of disappearing when the material\n  // is opened in the new constructor.\n  if(b.type==="image"){\n    return {\n      id:b.id,\n      type:"gallery",\n      items:[b.url].filter(Boolean),\n      caption:b.caption||""\n    };\n  }\n  if(b.type==="twoImages"){\n    return {\n      id:b.id,\n      type:"gallery",\n      items:[b.url,b.url2].filter(Boolean),\n      caption:b.caption||""\n    };\n  }\n\n  // Keep all current fields explicitly so reopening the editor is lossless.\n  b.type=b.type||"text";\n  b.content=String(b.content||"");\n  b.url=String(b.url||"");\n  b.url2=String(b.url2||"");\n  b.caption=String(b.caption||"");\n  b.items=Array.isArray(b.items)?b.items.filter(Boolean):[];\n  return b;\n}\nfunction normalizeIndustryMeeting(raw={}){\n  return {\n    ...raw,\n    blocks:Array.isArray(raw.blocks)?raw.blocks.map(normalizeIndustryBlock):[]\n  };\n}\n\nasync function industryLoad(){\n  if(!cloudDb) return [];\n  const snap=await getDocs(collection(cloudDb,INDUSTRY_COLLECTION));\n  industryCache=[]; snap.forEach(d=>industryCache.push(normalizeIndustryMeeting({...d.data(),id:d.id})));\n  industryCache.sort((a,b)=>String(b.date||"").localeCompare(String(a.date||"")));\n  return industryCache;\n}\nasync function compressIndustryImage(file){\n  const bitmap=await createImageBitmap(file);\n  const maxSide=1600;\n  let w=bitmap.width, h=bitmap.height;\n  const scale=Math.min(1,maxSide/Math.max(w,h));\n  w=Math.max(1,Math.round(w*scale));\n  h=Math.max(1,Math.round(h*scale));\n  const canvas=document.createElement("canvas");\n  canvas.width=w; canvas.height=h;\n  const ctx=canvas.getContext("2d",{alpha:false});\n  ctx.fillStyle="#111";\n  ctx.fillRect(0,0,w,h);\n  ctx.drawImage(bitmap,0,0,w,h);\n  try{bitmap.close?.();}catch{}\n  let q=.82;\n  let data=canvas.toDataURL("image/webp",q);\n  // Keep safely below Firestore's 1 MiB document limit.
  while(data.length>650000 && q>.42){
    q-=.07;
    data=canvas.toDataURL("image/webp",q);
  }
  if(data.length>850000){
    throw new Error("Фото завелике навіть після стискання. Спробуй інше фото.");
  }
  return data;
}
async function industryResolveMedia(value){
  const s=String(value||"").trim();
  const prefix="firestore-media://";
  if(!s.startsWith(prefix)) return s;
  const id=s.slice(prefix.length);
  if(!id||!cloudDb) return "";
  try{
    const snap=await getDoc(doc(cloudDb,INDUSTRY_MEDIA_COLLECTION,id));
    return snap.exists()?String(snap.data()?.data||""):"";
  }catch(e){ console.error("Industry media preview failed",e); return ""; }
}

function industryStoredValueHtml(value,label="Збережено"){
  const v=String(value||"").trim();
  if(!v)return "";
  const short=v.startsWith("firestore-media://")
    ? "Фото збережене у Firebase"
    : (v.length>72?v.slice(0,69)+"…":v);
  return `<div class="industry-stored-value">
    <span class="industry-stored-dot">✓</span>
    <span><b>${label}</b><small>${esc(short)}</small></span>
  </div>`;
}

async function industrySetPreview(box,value){
  if(!box)return;
  const src=await industryResolveMedia(value);
  box.innerHTML=src?`<img src="${src}" alt="">`:"";
  box.classList.toggle("has-image",!!src);
}
let industryUploadJobs=new Set();
function industryTrackUpload(promise){
  const job=Promise.resolve(promise);
  industryUploadJobs.add(job);
  job.finally(()=>industryUploadJobs.delete(job));
  return job;
}
async function industryWaitForUploads(){
  const jobs=[...industryUploadJobs];
  if(!jobs.length) return;
  const timeout=new Promise((_,reject)=>
    setTimeout(()=>reject(new Error("Завантаження медіа триває надто довго. Перевір файл або встав посилання.")),45000)
  );
  const results=await Promise.race([
    Promise.allSettled(jobs),
    timeout
  ]);
  const failed=Array.isArray(results)?results.find(r=>r.status==="rejected"):null;
  if(failed) throw failed.reason;
}
async function industryUpload(file,meetingId,kind="media"){
  if(!file) return "";
  // Images are stored in Firestore, just like student photos.
  // This avoids dependence on Firebase Storage for article photos.
  if(String(file.type||"").startsWith("image/")){
    if(!cloudDb||!currentUser) throw new Error("Firebase ще не готовий");
    const id=`media-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    const data=await compressIndustryImage(file);
    await setDoc(doc(cloudDb,INDUSTRY_MEDIA_COLLECTION,id),{
      id,
      meetingId:String(meetingId||""),
      kind:String(kind||"image"),
      name:String(file.name||"photo"),
      mime:"image/webp",
      data,
      createdAt:new Date().toISOString()
    },{merge:false});
    return `firestore-media://${id}`;
  }

  // Video/audio/PDF files are not stored in Firestore: they are too large.
  // Direct Storage uploads previously caused the editor to wait indefinitely.
  // Use a URL block / YouTube / Instagram-TikTok for these media types.
  if(String(file.type||"").startsWith("video/")){
    throw new Error("Відеофайл напряму не завантажується. Встав посилання на відео або використай блок YouTube / Instagram / TikTok.");
  }
  if(String(file.type||"").startsWith("audio/")){
    throw new Error("Аудіофайл напряму не завантажується. Встав пряме посилання на аудіо.");
  }
  throw new Error("Цей тип файла напряму не завантажується. Використай посилання на файл.");
}
function industryBlockPickerHtml(){
  return `<div class="industry-picker">
    ${Object.entries(industryBlockNames).map(([k,v])=>`<button type="button" class="industry-pick" data-type="${k}">${v}</button>`).join("")}
  </div>`;
}
function industryBlockHtml(b={id:industryBlockId(),type:"text"}){
  const name=industryBlockNames[b.type]||b.type;
  const head=`<div class="industry-block-head">
    <div><span class="industry-block-kind">Блок</span><b>${name}</b></div>
    <div class="industry-block-actions">
      <button type="button" class="mini ib-up" title="Вище">↑</button>
      <button type="button" class="mini ib-down" title="Нижче">↓</button>
      <button type="button" class="mini ib-remove" title="Видалити">×</button>
    </div>
  </div>`;
  const media=(label,key="url",accept="image/*")=>`<label>${label}<input class="ib-${key}" value="${esc(b[key]||"")}" placeholder="URL або завантаж файл нижче"></label>${industryStoredValueHtml(b[key],b[key]?"Файл уже збережений":"")}<label class="industry-file">Замінити / завантажити файл<input class="ib-file" data-key="${key}" type="file" accept="${accept}"><span class="industry-media-preview" data-preview="${key}"></span></label>`;
  let body="";
  if(b.type==="text") body=`<label>Текст<textarea class="ib-content ib-richtext" placeholder="Пиши наступну частину статті…">${esc(b.content||"")}</textarea></label>`;
  if(b.type==="heading") body=`<label>Підзаголовок<input class="ib-content" value="${esc(b.content||"")}" placeholder="Назва розділу"></label>`;
  if(b.type==="quote") body=`<label>Цитата<textarea class="ib-content" placeholder="Важлива репліка гостя…">${esc(b.content||"")}</textarea></label><label>Автор / контекст<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="gallery") body=`<div class="industry-photo-block">
      <label>Фото · можна додавати скільки завгодно
        <textarea class="ib-content industry-photo-urls" placeholder="Фото з’являтимуться тут автоматично">${esc((b.items||[]).join("\n"))}</textarea>
      </label>
      <label class="industry-file industry-photo-upload">+ Додати фото
        <input class="ib-gallery-files" type="file" accept="image/*" multiple>
      </label>
      <div class="industry-gallery-preview"></div>
      <label>Підпис до фото / групи фото<input class="ib-caption" value="${esc(b.caption||"")}"></label>
    </div>`;
  if(b.type==="story") body=`<label>Посилання на відео<input class="ib-url" value="${esc(b.url||"")}" placeholder="Пряме посилання на .mp4/.webm"></label>${industryStoredValueHtml(b.url,"Відео збережено")}<div class="ib-progress">Для відео з YouTube, Instagram або TikTok краще використовуй відповідний окремий блок.</div><label>Підпис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="youtube") body=`<label>Посилання YouTube<input class="ib-url" value="${esc(b.url||"")}" placeholder="https://youtube.com/..."></label>${industryStoredValueHtml(b.url,"YouTube збережено")}<label>Підпис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="social") body=`<label>Instagram / TikTok<input class="ib-url" value="${esc(b.url||"")}" placeholder="Встав посилання на Reel, пост або TikTok"></label>${industryStoredValueHtml(b.url,"Посилання збережено")}<label>Підпис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="audio") body=`<label>Посилання на аудіо<input class="ib-url" value="${esc(b.url||"")}" placeholder="URL аудіофайлу"></label>${industryStoredValueHtml(b.url,"Аудіо збережено")}<label>Назва / підпис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="file") body=`<label>Посилання на файл / PDF<input class="ib-url" value="${esc(b.url||"")}" placeholder="URL документа"></label>${industryStoredValueHtml(b.url,"Файл збережено")}<label>Назва файла<input class="ib-content" value="${esc(b.content||"")}" placeholder="Наприклад: Презентація майстер-класу"></label><label>Короткий опис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="link") body=`<label>Посилання<input class="ib-url" value="${esc(b.url||"")}" placeholder="https://..."></label>${industryStoredValueHtml(b.url,"Посилання збережено")}<label>Заголовок картки<input class="ib-content" value="${esc(b.content||"")}"></label><label>Опис<input class="ib-caption" value="${esc(b.caption||"")}"></label>`;
  if(b.type==="guest") body=`<div class="industry-guest-fields">${media("Фото гостя","url")}<label>Ім’я гостя<input class="ib-content" value="${esc(b.content||"")}"></label><label>Професія / коротка довідка<textarea class="ib-caption">${esc(b.caption||"")}</textarea></label><label>Instagram / сайт<input class="ib-url2" value="${esc(b.url2||"")}"></label></div>`;
  if(b.type==="divider") body=`<div class="industry-divider-preview"><span></span></div>`;
  return `<div class="industry-block" data-id="${b.id}" data-type="${b.type}">
    ${head}
    <div class="industry-block-body">${body}<div class="ib-progress"></div></div>
    <button type="button" class="industry-insert-toggle">+ Додати блок після цього</button>
    <div class="industry-inline-picker" hidden>${industryBlockPickerHtml()}</div>
  </div>`;
}
async function industryGalleryPreview(el){
  const wrap=el.querySelector(".industry-gallery-preview");
  if(!wrap)return;
  const area=el.querySelector(".ib-content");
  const vals=(area?.value||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
  wrap.innerHTML="";
  for(const v of vals){
    const box=document.createElement("div");
    box.className="industry-gallery-thumb";
    const img=document.createElement("img");
    const src=await industryResolveMedia(v);
    if(src) img.src=src;
    const del=document.createElement("button");
    del.type="button"; del.textContent="×"; del.title="Прибрати фото";
    del.onclick=()=>{
      const next=(area.value||"").split(/\n+/).map(x=>x.trim()).filter(Boolean).filter(x=>x!==v);
      area.value=next.join("\n");
      industryGalleryPreview(el);
    };
    box.append(img,del); wrap.append(box);
  }
}
function industryWireBlocks(meetingId){
  $$(".industry-block").forEach(el=>{
    el.querySelector(".ib-remove").onclick=()=>el.remove();
    el.querySelector(".ib-up").onclick=()=>el.previousElementSibling&&el.parentNode.insertBefore(el,el.previousElementSibling);
    el.querySelector(".ib-down").onclick=()=>el.nextElementSibling&&el.parentNode.insertBefore(el.nextElementSibling,el);
    const toggle=el.querySelector(".industry-insert-toggle");
    const inline=el.querySelector(".industry-inline-picker");
    toggle.onclick=()=>{inline.hidden=!inline.hidden;};
    inline.querySelectorAll(".industry-pick").forEach(btn=>btn.onclick=()=>{
      el.insertAdjacentHTML("afterend",industryBlockHtml({id:industryBlockId(),type:btn.dataset.type}));
      industryWireBlocks(meetingId);
    });
    el.querySelectorAll(".ib-file").forEach(inp=>inp.onchange=async()=>{
      const file=inp.files?.[0]; if(!file)return;
      const out=el.querySelector(`.ib-${inp.dataset.key}`);
      const prog=el.querySelector(".ib-progress");

      if(String(file.type||"").startsWith("video/")){
        inp.value="";
        prog.textContent="Відео: встав URL у поле вище або використай блок YouTube / Instagram / TikTok.";
        out.focus();
        return;
      }
      if(String(file.type||"").startsWith("audio/")){
        inp.value="";
        prog.textContent="Аудіо: встав пряме посилання у поле вище.";
        out.focus();
        return;
      }

      const task=(async()=>{
        prog.textContent="Завантаження…";
        out.value=await industryUpload(file,meetingId,el.dataset.type);
        await industrySetPreview(el.querySelector(`[data-preview="${inp.dataset.key}"]`),out.value);
        prog.textContent="Файл збережено ✓";
      })();
      try{await industryTrackUpload(task);}catch(e){console.error(e);prog.textContent=`Помилка: ${e?.message||e}`;}
    });
    const gf=el.querySelector(".ib-gallery-files");
    if(gf) gf.onchange=async()=>{
      const area=el.querySelector(".ib-content"),prog=el.querySelector(".ib-progress");
      const files=[...gf.files];
      if(!files.length)return;
      const task=(async()=>{
        prog.textContent=`Завантаження фото: 0/${files.length}`;
        const urls=[];
        for(let i=0;i<files.length;i++){
          urls.push(await industryUpload(files[i],meetingId,"gallery"));
          prog.textContent=`Завантаження фото: ${i+1}/${files.length}`;
        }
        area.value=[area.value.trim(),...urls].filter(Boolean).join("\n");
        await industryGalleryPreview(el);
        prog.textContent=`Додано фото: ${urls.length} ✓`;
        gf.value="";
      })();
      try{await industryTrackUpload(task);}catch(e){console.error(e);prog.textContent=`Помилка: ${e?.message||e}`;}
    };
    el.querySelectorAll("[data-preview]").forEach(box=>{
      const input=el.querySelector(`.ib-${box.dataset.preview}`);
      if(input?.value)industrySetPreview(box,input.value);
    });
    if(el.dataset.type==="gallery")industryGalleryPreview(el);
  });
}
function industryReadBlocks(){
  return $$(".industry-block").map(el=>({
    id:el.dataset.id,
    type:el.dataset.type,
    content:el.querySelector(".ib-content")?.value.trim()||"",
    url:el.querySelector(".ib-url")?.value.trim()||"",
    url2:el.querySelector(".ib-url2")?.value.trim()||"",
    caption:el.querySelector(".ib-caption")?.value.trim()||"",
    items:el.dataset.type==="gallery"?(el.querySelector(".ib-content")?.value||"").split(/\n+/).map(x=>x.trim()).filter(Boolean):[]
  }));
}
async function industryEditor(m=null){
  // New editor session: never inherit unfinished upload state from a previous article.
  industryUploadJobs=new Set();
  const item=m?clone(m):{id:industryId(),published:false,blocks:[]};
  $("#pageTitle").textContent=m?"Редагування зустрічі":"Нова зустріч";
  $("#app").innerHTML=`<div class="industry-editor"><button class="ghost" id="industryBack">← До всіх зустрічей</button><div class="section-head"><div><h2>${m?"Редагувати":"Створити"} матеріал</h2><p>Серія майстер-класів «Зустріч із індустрією»</p></div></div><div class="industry-form-grid"><label>Гість<input id="imGuest" value="${esc(item.guest||"")}"></label><label>Професія / посада<input id="imRole" value="${esc(item.guestRole||"")}"></label><label>Тема зустрічі<input id="imTitle" value="${esc(item.title||"")}"></label><label>Дата<input id="imDate" type="date" value="${esc(item.date||"")}"></label><label class="full">Короткий анонс<textarea id="imExcerpt">${esc(item.excerpt||"")}</textarea></label><label class="full">Обкладинка<input id="imCover" value="${esc(item.cover||"")}" placeholder="Завантаж фото нижче або встав URL"></label>${item.cover?`<div class="full">${industryStoredValueHtml(item.cover,"Обкладинка вже збережена")}</div>`:""}<label class="industry-file full">Замінити / завантажити обкладинку<input id="imCoverFile" type="file" accept="image/*"><span class="ib-progress" id="imCoverProgress"></span><span class="industry-media-preview" id="imCoverPreview"></span></label><label class="industry-publish full"><input id="imPublished" type="checkbox" ${item.published?"checked":""}><span><b>Опублікувати на сайті</b><small>Вимкнено - матеріал залишається чернеткою</small></span></label></div><div class="industry-builder"><div class="industry-builder-title"><div><h3>Стаття</h3><p class="muted">Будуй матеріал у потрібному порядку: текст → фото → текст → відео → цитата…</p></div></div><div class="industry-first-add"><b>Додати перший / наступний блок</b>${industryBlockPickerHtml()}</div><div id="industryBlocks">${(item.blocks||[]).map(industryBlockHtml).join("")}</div></div><div class="industry-savebar"><button class="danger" id="industryDelete" ${m?"":"style=display:none"}>Видалити</button><button class="primary" id="industrySave">Зберегти</button></div></div>`;
  industryWireBlocks(item.id);
  if(item.cover) industrySetPreview($("#imCoverPreview"),item.cover);
  $("#industryBack").onclick=industry;
  $("#imCoverFile").onchange=async()=>{
    const f=$("#imCoverFile").files?.[0]; if(!f)return;
    const prog=$("#imCoverProgress");
    $("#imCoverFile").disabled=true;
    const task=(async()=>{
      prog.textContent="Стискаємо й зберігаємо фото…";
      $("#imCover").value=await industryUpload(f,item.id,"cover");
      await industrySetPreview($("#imCoverPreview"),$("#imCover").value);
      prog.textContent="Фото збережено ✓";
    })();
    try{await industryTrackUpload(task);}
    catch(e){console.error(e);prog.textContent=`Помилка: ${e?.message||e}`;}
    finally{$("#imCoverFile").disabled=false;}
  };
  $$(".industry-first-add .industry-pick").forEach(b=>b.onclick=()=>{$("#industryBlocks").insertAdjacentHTML("beforeend",industryBlockHtml({id:industryBlockId(),type:b.dataset.type}));industryWireBlocks(item.id);});
  $("#industrySave").onclick=async()=>{
    const btn=$("#industrySave");
    if(industryUploadJobs.size){
      btn.disabled=true;
      btn.textContent="Завершуємо медіа…";
      try{await industryWaitForUploads();}
      catch(e){btn.disabled=false;btn.textContent="Зберегти";alert(`Не вдалося завершити завантаження медіа. ${e?.message||e}`);return;}
    }
    const guest=$("#imGuest").value.trim();
    const title=$("#imTitle").value.trim();
    if(!guest && !title){
      alert("Вкажи хоча б ім’я гостя або тему зустрічі.");
      return;
    }
    btn.disabled=true;
    btn.textContent="Збереження…";
    const data={
      id:item.id,
      guest,
      guestRole:$("#imRole").value.trim(),
      title,
      date:$("#imDate").value,
      excerpt:$("#imExcerpt").value.trim(),
      cover:$("#imCover").value.trim(),
      published:$("#imPublished").checked,
      blocks:industryReadBlocks().map(normalizeIndustryBlock),
      updatedAt:new Date().toISOString()
    };
    try{
      await setDoc(doc(cloudDb,INDUSTRY_COLLECTION,data.id),data,{merge:false});
      alert(data.published?"Матеріал опубліковано.":"Чернетку збережено.");
      industry();
    }catch(e){
      console.error(e);
      alert(`Не вдалося зберегти зустріч у Firebase. ${e?.code||e?.message||""}`);
    }finally{
      btn.disabled=false;
      btn.textContent="Зберегти";
    }
  };
  if(m) $("#industryDelete").onclick=async()=>{if(!confirm("Видалити цю зустріч?"))return;await deleteDoc(doc(cloudDb,INDUSTRY_COLLECTION,item.id));industry();};
}
async function industry(){
  $("#pageTitle").textContent="Зустріч із індустрією"; $("#pageSubtitle").textContent="Серія майстер-класів РЕМС-44";
  $("#app").innerHTML=`<div class="loading">Завантаження…</div>`;
  try{await industryLoad();}catch(e){console.error(e);$("#app").innerHTML=`<div class="empty">Не вдалося завантажити матеріали. Перевір Firebase Rules.</div>`;return;}
  $("#app").innerHTML=`<div class="section-head"><div><h2>Матеріали зустрічей</h2><p>Створюй і редагуй статті серії майстер-класів та гостьових лекцій.</p></div></div><div class="industry-grid">${industryCache.length?industryCache.map(m=>`<article class="industry-card">${m.cover?`<div class="industry-card-cover" data-cover="${esc(m.cover)}"><span>Завантаження…</span></div>`:`<div class="industry-card-empty">Без обкладинки</div>`}<div class="industry-card-meta">${esc(m.date||"Без дати")} · ${m.published?"Опубліковано":"Чернетка"}</div><h3>${esc(m.guest||m.title||"Без назви")}</h3><p>${esc(m.guestRole||m.title||"")}</p><button class="ghost industry-edit" data-id="${m.id}">Редагувати матеріал</button></article>`).join(""):`<div class="empty">Ще немає жодної зустрічі. Натисни «+ Нова зустріч» угорі праворуч.</div>`}</div>`;
  $$(".industry-card-cover").forEach(async box=>{
    const src=await industryResolveMedia(box.dataset.cover||"");
    box.innerHTML=src?`<img src="${src}" alt="">`:`<span>Фото збережене</span>`;
  });
  $$(".industry-edit").forEach(b=>b.onclick=()=>industryEditor(industryCache.find(x=>x.id===b.dataset.id)));
}


(function installV51UiStyles(){
  if(document.querySelector("#v51UiStyles")) return;
  const style=document.createElement("style");
  style.id="v51UiStyles";
  style.textContent=`
    .conflict-notice-button{width:100%;text-align:left;border:0;cursor:pointer;font:inherit;display:flex;justify-content:space-between;align-items:center;gap:12px}
    .conflict-notice-button span{font-weight:800}
    .conflict-stat-button{border:1px solid #fecaca;background:#fff7f7;cursor:pointer;font:inherit;text-align:left;position:relative}
    .conflict-stat-button small{display:block;margin-top:5px;color:#b91c1c;font-size:10px;font-weight:800}
    .conflict-summary-button{border:1px solid #fecaca!important;color:#991b1b;cursor:pointer;font:inherit}
    .conflict-panel{padding:20px;min-width:min(900px,90vw)}
    .conflict-list{display:grid;gap:12px;margin-top:16px}
    .conflict-card{border:1px solid #fecaca;background:#fff;border-radius:16px;padding:14px;display:grid;gap:12px}
    .conflict-card-head{display:flex;justify-content:space-between;gap:12px;align-items:center}
    .conflict-events{display:grid;gap:8px}.conflict-event{display:flex;gap:9px;align-items:flex-start;padding:9px;background:#f8fafc;border-radius:10px}
    .conflict-overlaps{display:grid;gap:6px;color:#991b1b;font-size:12px}
    .conflict-student-row{width:100%;display:grid;grid-template-columns:1fr auto auto;gap:12px;align-items:center;text-align:left;border:1px solid #e5e7eb;background:#fff;border-radius:14px;padding:13px;cursor:pointer;font:inherit}
    .conflict-student-row span{display:grid}.conflict-student-row small{color:#6b7280}.conflict-student-row strong{font-size:20px;color:#b91c1c}.conflict-student-row em{font-style:normal;font-weight:800;color:#6d28d9}
    .calendar .conflict-focus{outline:4px solid #7c3aed!important;outline-offset:-4px;box-shadow:inset 0 0 0 2px #fff}
    .availability-grid-two{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}
    .schedule-score-critical{background:#7f1d1d;color:#fff}.schedule-day.critical{box-shadow:inset 0 0 0 3px #b91c1c;background:#fff1f2}
    .today-date{box-shadow:inset 0 0 0 3px #111827!important;background:#fffbea!important}.today-mini{display:block;font-size:7px;line-height:1;margin-top:3px;font-weight:900;letter-spacing:.05em;color:#111827}
    .calendar th .today-mini{color:#fff}.student-month-day.today-date{position:relative}
    @media(max-width:760px){.availability-grid-two{grid-template-columns:1fr}.conflict-card-head{align-items:flex-start;flex-direction:column}.conflict-panel{padding:12px;min-width:0}.conflict-student-row{grid-template-columns:1fr auto}.conflict-student-row em{grid-column:1/-1}}
  `;
  document.head.appendChild(style);
})();

function openNewStudentDialog(){
  const dialog=document.querySelector("#studentDialog");
  const body=document.querySelector("#studentDialogBody");
  if(!dialog||!body) return;
  body.innerHTML=`<div class="student-profile"><div class="profile-body">
    <div class="project-section-head"><div><h2 style="margin:0">Новий студент</h2><div class="muted">Додайте ім’я та групу. Нову назву групи можна просто вписати.</div></div><button type="button" class="ghost" id="closeNewStudent">Закрити</button></div>
    <form id="newStudentForm" class="profile-edit-form" style="margin-top:18px">
      <label class="full">Прізвище та ім’я<input id="newStudentName" required placeholder="Наприклад: Петренко Марія"></label>
      <label class="full">Група<input id="newStudentGroup" required list="newStudentGroups" placeholder="Наприклад: РЕМС-54"><datalist id="newStudentGroups">${availableGroups().map(g=>`<option value="${esc(g)}"></option>`).join("")}</datalist></label>
      <label>Телефон<input id="newStudentPhone" placeholder="+380..."></label>
      <label>Email<input id="newStudentEmail" type="email"></label>
      <div class="full profile-actions"><button type="button" class="ghost" id="cancelNewStudent">Скасувати</button><button type="submit" class="primary">Додати студента</button></div>
    </form>
  </div></div>`;
  const close=()=>dialog.close();
  body.querySelector("#closeNewStudent").onclick=close;
  body.querySelector("#cancelNewStudent").onclick=close;
  body.querySelector("#newStudentForm").onsubmit=async e=>{
    e.preventDefault();
    const name=body.querySelector("#newStudentName").value.trim();
    const group=body.querySelector("#newStudentGroup").value.trim();
    if(!name||!group) return;
    if(db.students.some(st=>normalizePersonName(st.name)===normalizePersonName(name))){alert("Студент із таким ім’ям уже є.");return;}
    const numeric=(db.students||[]).map(st=>Number(st.id)).filter(Number.isFinite);
    const id=(numeric.length?Math.max(...numeric):0)+1;
    const student={id,name,group,phone:body.querySelector("#newStudentPhone").value.trim(),email:body.querySelector("#newStudentEmail").value.trim()};
    db.students.push(student);
    const pp=publicProfileFor(student);
    student.publicProfile={...pp,name,published:true};
    const submit=e.submitter; if(submit){submit.disabled=true;submit.textContent="Збереження…";}
    const ok=await save();
    if(!ok){db.students=db.students.filter(st=>String(st.id)!==String(id));alert("Не вдалося зберегти студента в хмару.");if(submit){submit.disabled=false;submit.textContent="Додати студента";}return;}
    try{await publishOnePublicProfile(student);}catch(err){console.error("New student public profile publish failed:",err);}
    openStudent(id);
  };
  if(!dialog.open) dialog.showModal();
}


(function injectV11UnifiedStyles(){
  if(document.getElementById("remsV11UnifiedStyles")) return;
  const st=document.createElement("style");st.id="remsV11UnifiedStyles";
  st.textContent=`
    .project-reporting-card{width:100%;margin:14px 0 4px;border:1px solid #e5e7eb;border-radius:14px;padding:13px 15px;background:#fff;display:flex;justify-content:space-between;align-items:center;gap:16px;text-align:left;cursor:pointer;font:inherit}.project-reporting-card:hover{border-color:#cbd5e1;background:#f8fafc}.project-reporting-card>span{display:grid;gap:3px}.project-reporting-card small{font-size:9px;letter-spacing:.08em;color:#64748b;font-weight:900}.project-reporting-card b{font-size:13px;color:#111827}.project-reporting-card em{font-style:normal;font-size:10px;color:#64748b}.project-reporting-card>strong{font-size:20px;color:#94a3b8}.project-reporting-card.filled{border-color:#bfdbfe;background:#f8fbff}.project-reporting-card.empty{border-style:dashed}
    .reporting-editor-page{max-width:1050px;margin:0 auto}.reporting-note{margin:14px 0;border:1px solid #bfdbfe;background:#eff6ff;border-radius:13px;padding:12px 14px;display:grid;gap:4px}.reporting-note span{font-size:11px;color:#475569;line-height:1.5}.reporting-form{margin-top:14px}.reporting-auto-period{border:1px solid #e5e7eb;background:#f8fafc;border-radius:12px;padding:11px 12px;display:grid;gap:3px}.reporting-auto-period span{font-size:10px;color:#64748b;font-weight:800}.reporting-auto-period b{font-size:13px}.reporting-auto-period small{font-size:10px;color:#94a3b8}
    .schedule-matrix-hint{margin:10px 0 12px;padding:10px 12px;border:1px solid #e5e7eb;border-radius:12px;background:#f8fafc;display:flex;justify-content:space-between;gap:16px;align-items:center}.schedule-matrix-hint span{font-size:10px;color:#64748b;max-width:760px}.calendar-toolbar #backToScheduleFromMatrix{white-space:nowrap}
    @media(max-width:760px){.schedule-matrix-hint{align-items:flex-start;flex-direction:column}.project-reporting-card{align-items:flex-start}.reporting-form{grid-template-columns:1fr}.reporting-form .full{grid-column:1}}
  `;document.head.appendChild(st);
})();


// v42 - окремий навчальний модуль «Великі форми».
// Дані зберігаються окремими документами Firestore і НЕ змішуються з індустрійними проєктами REMS Control.
const LARGE_FORMS_COLLECTION="rems_large_forms";
let largeFormsCache=[];

(function injectLargeFormsStyles(){
  if(document.getElementById("remsLargeFormsStyles")) return;
  const st=document.createElement("style"); st.id="remsLargeFormsStyles";
  st.textContent=`
    .lf-toolbar{display:flex;justify-content:space-between;gap:12px;align-items:flex-end;margin-bottom:16px;flex-wrap:wrap}
    .lf-tabs{display:flex;gap:7px;flex-wrap:wrap}.lf-tab{border:1px solid #dfe3e8;background:#fff;border-radius:999px;padding:8px 12px;font:inherit;font-size:11px;cursor:pointer}.lf-tab.active{background:#111827;color:#fff;border-color:#111827}
    .lf-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.lf-card{border:1px solid #e5e7eb;background:#fff;border-radius:18px;padding:16px;display:grid;gap:12px;cursor:pointer;text-align:left;font:inherit;color:inherit;box-shadow:inset 5px 0 0 var(--lf-color,#64748b)}.lf-card:hover{transform:translateY(-1px);box-shadow:inset 5px 0 0 var(--lf-color,#64748b),0 10px 24px #11182710}.lf-card-head{display:flex;justify-content:space-between;gap:12px}.lf-card h3{margin:0}.lf-meta{display:flex;gap:6px;flex-wrap:wrap}.lf-chip{font-size:10px;padding:5px 8px;background:#f3f4f6;border-radius:999px}.lf-team{font-size:11px;color:#4b5563}.lf-progress{height:7px;background:#eef1f4;border-radius:999px;overflow:hidden}.lf-progress>i{display:block;height:100%;background:#111827;border-radius:inherit}.lf-detail{max-width:1100px;margin:0 auto}.lf-detail-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;flex-wrap:wrap}.lf-actions{display:flex;gap:7px;flex-wrap:wrap}.lf-section{margin-top:14px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;padding:15px}.lf-section h3{margin:0 0 10px}.lf-form{display:grid;grid-template-columns:1fr 1fr;gap:12px}.lf-form .full{grid-column:1/-1}.lf-form label{display:grid;gap:6px;font-size:11px;color:#4b5563}.lf-form input,.lf-form select,.lf-form textarea{width:100%;box-sizing:border-box;border:1px solid #dfe3e8;border-radius:10px;padding:10px;font:inherit}.lf-form textarea{min-height:100px;resize:vertical}.lf-member-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;max-height:320px;overflow:auto;border:1px solid #e5e7eb;border-radius:12px;padding:10px}.lf-member{display:flex;gap:8px;align-items:center;padding:7px 8px;border-radius:9px;background:#f8fafc;font-size:11px}.lf-member input{width:auto}.lf-drive{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:12px;background:#f8fafc;border-radius:12px}.lf-empty{padding:34px;text-align:center;border:1px dashed #cbd5e1;border-radius:16px;background:#fff;color:#64748b}
    @media(max-width:800px){.lf-grid,.lf-form,.lf-member-grid{grid-template-columns:1fr}.lf-form .full{grid-column:auto}}
  `; document.head.appendChild(st);
})();

const lfEsc=v=>esc(String(v??""));
const lfGroupLabel=v=>v==="43"?"РЕМС-43":v==="44"?"РЕМС-44":v==="mixed"?"РЕМС-43 + РЕМС-44":"Не визначено";
const lfNorm=v=>String(v||"").toLowerCase().replace(/[’'`ʼ]/g,"").replace(/ґ/g,"г").replace(/\s+/g," ").trim();\nfunction lfFindStudentBySurname(surname){\n  const needle=lfNorm(surname);\n  return (db.students||[]).find(st=>lfNorm(String(st.name||"").split(/\s+/)[0])===needle)\n    ||(db.students||[]).find(st=>lfNorm(st.name||"").includes(needle));\n}\nfunction lfSeedMemberIds(surnames=[]){\n  return [...new Set(surnames.map(x=>lfFindStudentBySurname(x)?.id).filter(v=>v!==undefined&&v!==null).map(String))];\n}\nconst LARGE_FORMS_STARTER_SEED=[\n  {id:"lf-zori",title:"Перформативна вистава «Зорі»",authorSurnames:["Баленко"],authorLabels:["Ілля Баленко"],driveUrl:"https://drive.google.com/drive/folders/1bYyOtB_gc85Ez9i50yP6Li5VYXZ-kHMK",members:["Баленко","Волошина","Давидова","Павлова","Мороз"]},\n  {id:"lf-mify",title:"Вистава «Слов’янська міфологія»",authorSurnames:["Кропивка"],authorLabels:["Маргаріта Кропивка"],driveUrl:"https://drive.google.com/drive/folders/1if11uoH2xK669KE-7hJxTLqr80_l-7on",members:["Кропивка","Павлова","Карпенко","Данільчук","Кириленко","Піддубна","Давидова"]},\n  {id:"lf-khto-ya",title:"Перформативна вистава «Хто я»",authorSurnames:["Волошина"],authorLabels:["Дарʼя Волошина"],driveUrl:"https://drive.google.com/drive/folders/1DJFIZdsMzVRNBR3qGwbO0kMTmIHHyzb5",members:["Волошина","Данільчук","Давидова","Баленко","Лещинський","Вознюк","Дубина","Кириленко"]},\n  {id:"lf-literaturnyk",title:"Літературник",authorSurnames:["Давидова"],authorLabels:["Світлана Давидова"],driveUrl:"https://drive.google.com/drive/folders/1M8NXhAhDTwc5pf3avzRRj9lNRpelxUpX",members:["Давидова","Мороз","Ташута","Коткова","Карпенко","Кропивка","Піддубна"]},\n  {id:"lf-sixtiers",title:"Шістдесятники",originGroup:"44",authorSurnames:["Колишкін"],authorLabels:["Андрій Колишкін"],driveUrl:"https://drive.google.com/drive/folders/1MQ56Mg6ez08B_qCNkLnz5IfRDgYSJiPR",members:["Жолуденко","Вінцюк","Колишкін","Касєєв","Міленіна","Олейников","Чиньонова","Позняк","Власенко","Мостова","Мойсієнко","Гострик","Кошелєва"]},\n  {id:"lf-rosalia",title:"Хореографічна вистава на пісні Rosalía",originGroup:"44",authorSurnames:["Власенко"],authorLabels:["Дарʼя Власенко"],driveUrl:"https://drive.google.com/drive/folders/1e6DrAm8BpgzbaclGd8ljFw3i2dLDxLxN",members:["Жолуденко","Касєєв","Колишкін","Заярна","Міленіна","Позняк","Власенко","Кохан","Гострик","Краснянський"]},\n  {id:"lf-live-again",title:"Інтерактивна вистава «Прожити ще раз»",originGroup:"44",authorSurnames:["Неня","Мойсієнко","Кохан"],authorLabels:["Анастасія Неня","Віталіна Мойсієнко","Ольга Кохан"],driveUrl:"https://drive.google.com/drive/folders/1w8CbtwCWflpQpHPVqhwB77VLdjkegZUh",members:["Заярна","Позняк","Максімова","Кохан","Мойсієнко","Неня"]},\n  {id:"lf-golden-chair",title:"Церемонія нагородження «Золотий стілець»",originGroup:"44",authorSurnames:["Позняк","Заярна","Рожанківська"],authorLabels:["Артур Позняк","Валерія Заярна","Іванна Рожанківська"],driveUrl:"https://drive.google.com/drive/folders/1ghNZkTAdwjhc50bz0_tbw76CXmdhdy0R",members:["Міленіна","Власенко","Колишкін","Рожанківська","Жолуденко","Вінцюк","Мостова","Кошелєва","Позняк","Заярна"]}\n];\nasync function persistLargeForms(){\n  db.largeForms=Array.isArray(db.largeForms)?db.largeForms:[];\n  db.settings=db.settings||{};\n  largeFormsCache=clone(db.largeForms);\n  cache();\n  if(!cloudDb||!cloudReady||!currentUser) return false;\n  try{\n    await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{\n      largeForms:clone(db.largeForms),\n      settings:clone(db.settings),\n      updatedAt:new Date().toISOString()\n    },{merge:true});\n    return true;\n  }catch(err){\n    console.error("Large forms persist failed",err);\n    return false;\n  }\n}\nasync function ensureLargeFormsStarterSeed(){\n  db.largeForms=Array.isArray(db.largeForms)?db.largeForms:[];\n  db.settings=db.settings||{};\n  if(db.settings.largeFormsStarterSeedV3===true){\n    largeFormsCache=clone(db.largeForms);\n    return;\n  }\n  const now=new Date().toISOString();\n  const existing=new Map(db.largeForms.map(x=>[String(x.id),x]));\n  for(const seed of LARGE_FORMS_STARTER_SEED){\n    const authorIds=lfSeedMemberIds(seed.authorSurnames||[]);\n    const memberIds=lfSeedMemberIds(seed.members);\n    if(existing.has(seed.id)){\n      const item=existing.get(seed.id);\n      item.memberIds=[...new Set([...(Array.isArray(item.memberIds)?item.memberIds.map(String):[]),...memberIds.map(String),...authorIds.map(String)])];\n      item.authorIds=[...new Set([...(Array.isArray(item.authorIds)?item.authorIds.map(String):[]),...authorIds.map(String)])];\n      if(!item.authorId&&item.authorIds.length) item.authorId=item.authorIds[0];\n      item.authorLabel=(seed.authorLabels||[]).join(", ")||item.authorLabel||"";\n      if(seed.originGroup) item.originGroup=seed.originGroup;\n      if(seed.driveUrl) item.driveUrl=seed.driveUrl;\n      item.updatedAt=now;\n      continue;\n    }\n    db.largeForms.push({\n      id:seed.id,title:seed.title,originGroup:seed.originGroup||"unknown",status:"active",driveUrl:seed.driveUrl||"",\n      memberIds:[...new Set([...memberIds.map(String),...authorIds.map(String)])],authorIds,authorId:authorIds[0]||"",authorLabel:(seed.authorLabels||[]).join(", "),\n      createdAt:now,updatedAt:now,updatedBy:currentUser?.email||currentUser?.uid||""\n    });\n  }\n  db.settings.largeFormsStarterSeedV3=true;\n  largeFormsCache=clone(db.largeForms);\n  await persistLargeForms();\n}\nconst lfStatusLabels={active:"Активний",completed:"Завершений",archive:"Архів"};\nfunction lfNormalizeStatus(v){ return v==="completed"||v==="archive"?v:"active"; }\nfunction lfAuthorIds(x){\n  const ids=Array.isArray(x?.authorIds)?x.authorIds.map(String).filter(Boolean):[];\n  if(!ids.length&&x?.authorId) ids.push(String(x.authorId));\n  return [...new Set(ids)];\n}\nfunction lfAuthorNames(x){\n  const names=lfAuthorIds(x).map(id=>(db.students||[]).find(s=>String(s.id)===String(id))?.name).filter(Boolean);\n  if(names.length) return names;\n  return String(x?.authorLabel||"").split(",").map(v=>v.trim()).filter(Boolean);\n}\n\nasync function loadLargeForms(){\n  db.largeForms=Array.isArray(db.largeForms)?db.largeForms:[];\n  // v42.4: спрощуємо картку великої форми. Старі службові поля більше не використовуються.\n  let changed=false;\n  const starterById=new Map(LARGE_FORMS_STARTER_SEED.map(seed=>[String(seed.id),seed]));\n  db.largeForms=db.largeForms.map(item=>{\n    const x={...item};\n    const normalized=lfNormalizeStatus(x.status);\n    if(x.status!==normalized){ x.status=normalized; changed=true; }\n    if(!Array.isArray(x.authorIds)){\n      x.authorIds=x.authorId?[String(x.authorId)]:[];\n      changed=true;\n    }\n    for(const k of ["idea","concept","notes"]){ if(k in x){ delete x[k]; changed=true; } }\n    // v42.5: підключаємо створені Google Drive папки до 4 стартових великих форм.\n    const starter=starterById.get(String(x.id));\n    if(starter?.driveUrl && !String(x.driveUrl||"").trim()){ x.driveUrl=starter.driveUrl; changed=true; }\n    return x;\n  });\n  largeFormsCache=clone(db.largeForms).sort((a,b)=>String(b.updatedAt||"").localeCompare(String(a.updatedAt||"")));\n  if(changed && cloudReady&&cloudDb&&currentUser) await persistLargeForms();\n  return largeFormsCache;\n}\n\nasync function saveLargeForm(data){\n  if(!cloudReady||!cloudDb||!currentUser) throw new Error("Хмара ще не готова");\n  db.largeForms=Array.isArray(db.largeForms)?db.largeForms:[];\n  const id=String(data.id||(`lf-${Date.now()}-${Math.random().toString(36).slice(2,7)}`));\n  const clean={...data,id,updatedAt:new Date().toISOString(),updatedBy:currentUser.email||currentUser.uid||""};\n  if(!clean.createdAt) clean.createdAt=clean.updatedAt;\n  const i=db.largeForms.findIndex(x=>String(x.id)===id);\n  if(i>=0) db.largeForms[i]=clean; else db.largeForms.push(clean);\n  await persistLargeForms();\n  await loadLargeForms();\n  return clean;\n}\nasync function deleteLargeForm(id){\n  if(!cloudReady||!cloudDb||!currentUser) return false;\n  db.largeForms=Array.isArray(db.largeForms)?db.largeForms:[];\n  db.largeForms=db.largeForms.filter(x=>String(x.id)!==String(id));\n  await persistLargeForms();\n  await loadLargeForms();\n  return true;\n}\n\n// v44.0 - «Режисерська лабораторія»: живий конструктор навчальної траєкторії.\n// Структура лабораторії зберігається окремо від відповідей студентів, тому її можна\n// розширювати впродовж семестру без втрати вже заповнених матеріалів.\nconst DIRECTING_LABS_KEY="directingLabs";\nconst DIRECTING_LAB_WORK_COLLECTION="rems_directing_lab_work";\nconst DIRECTING_LAB_FEEDBACK_COLLECTION="rems_directing_lab_feedback";\nconst DIRECTING_LAB_SCHEMA_COLLECTION="rems_directing_lab_schema";\nconst DIRECTING_LAB_SCHEMA_DOC="current";\nlet directingLabFilter="44";\nlet directingLabSchemaCache=null;\n\nconst DIRECTING_LAB_JUSTIFICATION_SECTION={"id":"choice-justification","title":"1.1. Обґрунтування вибору","intro":"**Обґрунтування вибору** допомагає режисерові зрозуміти, чому саме цей проєкт має бути створений, чому він важливий зараз і чи реально втілити його у конкретних умовах. Це не формальна відповідь на питання «чому мені цікава тема», а послідовне осмислення історичного, соціального, мистецького, авторського та практичного контексту майбутньої постановки.","published":true,"blocks":[{"id":"choiceHistorical","type":"textarea","title":"1.1.1. Історичний аспект","help":"Визначте історичний, культурний або біографічний контекст теми. Відбирайте лише те, що реально допомагає майбутній постановці.","placeholder":"Коротко опишіть історичний контекст і те, що з нього важливо для проєкту...","theory":"**Історичний аспект** допомагає зрозуміти, звідки походить тема або явище, як воно формувалося і який контекст важливо врахувати режисерові. Це може бути історія події, традиції, культурного явища, біографія конкретної постаті, особливості епохи або зміна суспільного ставлення до теми з часом.\n\n**Не перетворюйте цей пункт на великий історичний реферат.** Ваше завдання - відібрати тільки той фактаж, який допомагає осмислити майбутній проєкт і може стати матеріалом для режисерського рішення.\n\n**Головне питання:** що з історичного контексту допомагає мені точніше зрозуміти цю тему сьогодні?"},{"id":"choiceSocial","type":"textarea","title":"1.1.2. Соціальний аспект","help":"Поясніть, чому ця тема важлива сучасній людині та для кого вона є актуальною.","placeholder":"У чому сучасна актуальність теми, кого вона стосується, які питання порушує...","theory":"**Соціальний аспект** показує, як тема пов'язана із сучасною людиною, суспільством, культурою та конкретною аудиторією. Навіть розважальний концерт, шоу чи церемонія існують у певному соціальному середовищі й відображають його цінності, настрої, суперечності та очікування.

Визначте, яка сучасна проблема, потреба або явище стоїть за вашою темою, кого це стосується, чому про це варто говорити саме зараз, які думки або почуття тема може викликати в глядача.

**Недостатньо написати «тема актуальна».** Поясніть, у чому саме полягає її актуальність і для кого вона є актуальною."},{"id":"choiceArtistic","type":"textarea","title":"1.1.3. Мистецький аспект","help":"Поясніть, чому цю тему варто втілювати саме як сценічний мистецько-видовищний проєкт.","placeholder":"Що саме сценічна форма дає цій темі: музика, простір, світло, пластика, відео, жива присутність...","theory":"**Мистецький аспект** відповідає на питання, чому тема потребує саме сценічного втілення. Подумайте, що вона набуває завдяки живій присутності виконавця, музиці, світлу, простору, пластичному рішенню, сценографії, відео, монтажу та взаємодії з аудиторією.

Важливо також усвідомити, чому для задуму доречна саме обрана велика форма: концерт, шоу, вистава, вечір, церемонія, конкурс, фестиваль, свято або презентація.

**Тема повинна мати не лише змістове значення, а й потенціал для образного та сценічного розвитку.**"},{"id":"choiceAuthor","type":"textarea","title":"1.1.4. Авторський аспект","help":"Сформулюйте, чому саме ви як режисер хочете говорити про цю тему.","placeholder":"Що вас особисто зачепило, хвилює, надихає або змушує поставити це питання...","theory":"**Авторський аспект** виявляє вашу особисту режисерську мотивацію. Чому саме ви хочете говорити про цю тему? Що в ній вас зачепило, здивувало, обурило, надихнуло або змусило замислитися?

Джерелом може бути особистий досвід, життєве спостереження, професійний інтерес, певна подія, емоційний зв'язок із темою, бажання висловити позицію або спробувати нову сценічну форму.\n\n**Авторський аспект не зобов'язує до надмірної особистої відвертості.** Йдеться насамперед про власну художню позицію та місце цієї теми у вашому режисерському мисленні."},{"id":"choiceFactorsReality","type":"textarea","title":"1.1.5. Чинники вибору та реальності проєкту","help":"Поєднайте об'єктивні та суб'єктивні чинники з реальною можливістю здійснити проєкт у ваших умовах.","placeholder":"Що об'єктивно і суб'єктивно впливає на вибір проєкту? Які ресурси є? Чого бракує? Що потрібно адаптувати або переосмислити?","wide":true,"theory":"На вибір і можливість реалізації проєкту одночасно впливають **об'єктивні, суб'єктивні та практичні чинники**. Їх доцільно розглядати разом, оскільки режисер працює не в абстрактних умовах, а співвідносить власний задум із конкретною реальністю.

**Об'єктивні чинники** - це обставини, що існують незалежно від ваших особистих симпатій: сучасність і актуальність проблеми, конкретна подія або замовлення, аудиторія, майданчик, бюджет, склад команди, технічна база, терміни, логістика та безпекові умови.\n\n**Суб'єктивні чинники** пов'язані з вами як режисером: світогляд, особиста мотивація, професійний досвід, творчі здібності, образне мислення, естетичні впливи та попередній мистецький досвід.\n\nДалі потрібно провести **перевірку задуму на реальність**. Оцініть, що у вашому розпорядженні вже є, що реально можна отримати, а що поки існує лише у бажаній моделі проєкту. Якщо задум вимагає ресурсів, яких немає, визначте, що можна змінити, скоротити, замінити або переосмислити без втрати головного сенсу.\n\n**Розрізняйте художньо бажане і реально можливе.** Обмеження не завжди послаблюють проєкт. Часто вони змушують знайти точніше, образніше й винахідливіше рішення.\n\n**Головне питання:** чи можу я реально поставити цей проєкт у тих умовах, у яких працюю?"},{"id":"choiceSummary","type":"textarea","title":"1.1.6. Підсумкове обґрунтування вибору проєкту","help":"На основі попередніх відповідей сформулюйте один цілісний авторський текст. Це підсумок усього підрозділу 1.1.","placeholder":"Сформулюйте повне обґрунтування вибору проєкту одним зв'язним текстом...","wide":true,"summary":true,"theory":"**Підсумкове обґрунтування** - це не ще одна коротка відповідь, а завершений зв'язний текст, який об'єднує всі попередні аспекти в цілісну картину.

У тексті мають природно поєднатися історичний і соціальний контекст, мистецький потенціал теми, ваша авторська мотивація, чинники вибору та реальна можливість здійснення проєкту.

**Не копіюйте механічно попередні відповіді.** Перебудуйте їх у логічний авторський текст, у якому одна думка переходить в іншу.

Після завершення цього пункту читач повинен зрозуміти: **чому саме цей проєкт, чому саме зараз, чому він важливий для глядача, чому саме ви хочете його створити і чи реально його втілити.**"}]};\nconst DIRECTING_LAB_PROJECT_PARAMETERS_SECTION={"id":"project-parameters","title":"1.2. Вихідні параметри проєкту","intro":"Цей розділ фіксує вихідні характеристики майбутнього проєкту. Тут важливо коротко і точно визначити, що саме ви створюєте, для кого, де, коли, у якому масштабі та форматі. Теоретичне пояснення до кожного пункту відкривається окремо.","published":true,"blocks":[{"id":"projectTitle","type":"text","title":"1.2.1. Назва проєкту","help":"Назва може бути робочою. Вона має відображати ідею, смисловий напрям або центральний образ проєкту.","placeholder":"Введіть назву проєкту","required":true,"theory":"Назва проєкту - це концентроване словесне вираження його ідеї та змісту. Вона не просто позначає подію, а має спрямовувати сприйняття глядача до головного смислу, авторського задуму або центрального образу.\n\nНа початковому етапі назва може бути робочою. У процесі роботи над проблемою, темою, ідеєю, художнім образом і режисерським задумом вона може уточнюватися або повністю змінюватися.\n\nНазва може бути прямою, образною, метафоричною, символічною або асоціативною. Головне, щоб вона відповідала ідеї проєкту, не була випадковою і могла органічно існувати в афіші, програмі та комунікації з глядачем.\n\nПеревірте себе питанням: чи передає ця назва головний смисловий напрям мого проєкту?"},{"id":"projectForm","type":"text","title":"1.2.2. Форма проєкту","help":"Вкажіть форму без прикметників: концерт, шоу, вистава, вечір, церемонія, конкурс, фестиваль, свято або презентація.","placeholder":"Наприклад: концерт","theory":"Форма проєкту - це тип сценічної або мистецько-видовищної організації майбутньої події. Вона відповідає на базове питання: що саме я створюю?\n\nУ назві форми не використовуйте прикметники, які характеризують художню природу проєкту. Такі уточнення з’являться у жанрі. Наприклад, форма: концерт. Жанрове уточнення: тематичний, ювілейний, гумористичний тощо.\n\nКОНЦЕРТ\nПублічний виступ артистів за визначеною, заздалегідь складеною програмою. Основна особливість концерту - побудова з окремих номерів, кожен із яких має відносну самостійність. Номери поєднуються режисером у цілісну програму.\n\nШОУ\nВидовищна сценічна форма, в основі якої лежать яскраві номери, атракціони та виразне використання технічних можливостей. Для шоу характерні видовищність, динаміка, візуальна виразність і сильний емоційний вплив. Чіткий сюжетний хід не є обов’язковим.\n\nШОУ-ВИСТАВА / ВИСТАВА\nСценічна форма, побудована за законами єдиної дії, історії або сюжету. У шоу-виставі поєднуються принципи театральної вистави та видовищного шоу. Номери, технічні компоненти, сценографія та інші засоби підпорядковуються єдиній дії. Основна відмінність від концерту - обов’язкова сюжетна або чітко розгорнута драматургічна побудова.\n\nВЕЧІР\nОсоблива сценічна форма, у якій поєднуються художні та документальні матеріали. Для вечора характерні реальні герої, документи, спогади, архівні матеріали та жива комунікація з аудиторією. Зазвичай вечір має конкретну присвяту людині, події, даті або мистецькому явищу.\n\nЦЕРЕМОНІЯ\nУрочисте видовищне дійство з ритуально-обрядовою природою. Воно створюється з особливої нагоди: відкриття, закриття, нагородження, вшанування, посвяти тощо. Основна особливість - чіткий порядок символічних і ритуальних дій, які режисер перетворює на художньо осмислену сценічну подію.\n\nКОНКУРС\nПублічне змагання, у якому через виступи, демонстрацію майстерності або творчих досягнень визначають найкращих серед учасників. Обов’язковими є змагальність, правила, критерії оцінювання та результат. Саме невідомість результату створює природну драматургію напруження.\n\nФЕСТИВАЛЬ\nМасове мистецьке або культурне дійство, що об’єднує численних учасників, жанри, події, сцени та аудиторії. Основні риси фестивалю - масштабність і поліжанровість. Окремі події поєднуються спільною темою, ідеєю, образом і загальною режисерською логікою.\n\nСВЯТО\nМасове культурне дійство, приурочене до певної події, дати або теми, яке об’єднує людей спільним переживанням. У межах свята можуть поєднуватися концерти, сценічні виступи, ігрові зони, виставкові та інтерактивні складові. Режисер має об’єднати різні компоненти в одну масштабну подію.\n\nПРЕЗЕНТАЦІЯ\nТеатралізоване публічне дійство, спрямоване на представлення нового продукту, ідеї, твору або проєкту. Основна особливість - наявність конкретного об’єкта презентації, навколо якого будується вся драматургія. Режисер організовує не лише показ, а й момент відкриття, інтригу, емоційне сприйняття та запам’ятовування представленого об’єкта.\n\nПід час вибору форми не намагайтеся зробити назву складнішою. Спочатку точно визначте, до якого типу великої сценічної події належить ваш задум. Художні уточнення ви сформулюєте в пункті «Жанр»."},{"id":"projectGenre","type":"text","title":"1.2.3. Жанр","help":"Уточніть художню природу обраної форми. Саме тут з’являються характеристики, які не слід додавати до назви форми.","placeholder":"Вкажіть жанрову характеристику","theory":"Жанр - це авторське бачення та мистецька конкретизація форми проєкту. Якщо форма відповідає на питання «що саме я створюю?», то жанр уточнює, яким є цей проєкт художньо, в якому емоційному, стильовому та образному ключі він існує.\n\nСаме в жанрі з’являються прикметникові характеристики. Наприклад, форма може бути «концерт», а жанрове визначення уточнює його художню природу: тематичний, ювілейний, гумористичний та інший відповідно до конкретного задуму.\n\nЖанр впливає на характер сценічної дії, спосіб існування виконавців, режисерські прийоми, музику, світло, сценографію, пластичне рішення, монтаж і темпоритм. Усі складові постановки мають існувати в єдиному жанровому ключі.\n\nНе обирайте жанр тільки як красиве слово. Він повинен реально проявлятися у способі, яким ви будете будувати проєкт."},{"id":"projectScale","type":"text","title":"1.2.4. Масштаб проєкту","help":"Визначте масштаб події та рівень її охоплення. За потреби вкажіть орієнтовну кількість учасників і глядачів.","placeholder":"Наприклад: великий, міський","theory":"Масштаб визначає розмір, складність і рівень охоплення майбутнього проєкту. Його доцільно розглядати у двох площинах.\n\nЗа масштабом самої події: камерний, середній, великий, масовий.\n\nЗа рівнем охоплення: локальний, міський, регіональний, національний, міжнародний.\n\nМасштаб залежить не лише від кількості глядачів. На нього впливають кількість виконавців, склад творчо-постановочної групи, кількість майданчиків, технічна складність, тривалість і загальний обсяг постановочного процесу.\n\nЗа потреби зазначте орієнтовну кількість виконавців, інших учасників і глядачів. Коротко поясніть, чому саме так визначаєте масштаб проєкту."},{"id":"projectVenue","type":"text","title":"1.2.5. Простір / майданчик проведення","help":"Вкажіть реальний або передбачуваний майданчик, у якому має відбуватися проєкт.","placeholder":"Назва або тип майданчика, місто, локація","theory":"Простір / майданчик проведення - це конкретне фізичне середовище, у якому має відбуватися проєкт. Це може бути театральна сцена, концертний зал, клубний простір, площа, вулиця, стадіон, парк, музей, павільйон, виробничий або інший нетрадиційний простір.\n\nНа цьому етапі потрібно визначити саме реальний або передбачуваний майданчик. Художнє осмислення простору буде розглядатися пізніше в режисерському задумі.\n\nМайданчик впливає на розміри сценічної дії, розташування глядача, рух виконавців, можливості світла, звуку, відео, декорацій, монтажу, логістики та безпеки. Тому простір потрібно обирати не тільки за зовнішньою привабливістю, а й з огляду на те, чи дозволяє він реально втілити задум.\n\nЯкщо задум створюється спеціально для конкретної локації і суттєво залежить від її архітектури, історії або функції, обов’язково зазначте це."},{"id":"projectFormat","type":"text","title":"1.2.6. Формат проєкту","help":"Вкажіть спосіб існування сценічного проєкту: офлайн, онлайн або гібридний; стаціонарний або мобільний; одномайданчиковий або багатомайданчиковий.","placeholder":"Наприклад: офлайн, стаціонарний, одномайданчиковий","theory":"Формат визначає спосіб існування сценічного проєкту та організації взаємодії з аудиторією. Проєкт може бути офлайн, онлайн або гібридним; стаціонарним або мобільним; одномайданчиковим або багатомайданчиковим.\n\nМи працюємо зі сценічним мистецько-видовищним проєктом. Він не обов’язково відбувається на традиційній сцені, але передбачає організовану подію, дію, виконавців і аудиторію. Суто телевізійний або відеопроєкт у цьому пункті не розглядається.\n\nУ багатомайданчиковому форматі окремі частини можуть відбуватися в різних просторах. У гібридному частина аудиторії може бути фізично присутньою, а частина долучатися дистанційно.\n\nГоловне питання: яким способом глядач буде присутній у події і як буде організоване саме існування проєкту?"},{"id":"projectAudience","type":"textarea","title":"1.2.7. Цільова аудиторія","help":"Коротко визначте, для кого створюється проєкт. Врахуйте не тільки вік, а й інтереси, культурний досвід та мотивацію присутності.","placeholder":"Хто ваш глядач і чому цей проєкт адресований саме йому?","theory":"Цільова аудиторія - це конкретна група людей, для яких створюється проєкт. Визначення аудиторії не повинно обмежуватися лише віком.\n\nПодумайте про соціально-демографічні характеристики, культурний і глядацький досвід, інтереси, мотивацію присутності, очікування від події та можливий спосіб участі. Для одного проєкту глядач залишається спостерігачем, для іншого може активно взаємодіяти з виконавцями або простором.\n\nРежисеру важливо розуміти, хто ці люди, чому вони прийдуть, що вони вже знають про тему, які асоціації та очікування можуть мати і якою може бути їхня емоційна реакція.\n\nЗнання аудиторії надалі впливатиме на мову проєкту, тривалість, темп, способи комунікації, режисерські прийоми і характер взаємодії з глядачем."},{"id":"projectDateTime","type":"text","title":"1.2.8. Дата і час проведення","help":"Якщо точні дата і час ще не визначені, вкажіть орієнтовний період проведення.","placeholder":"Наприклад: 07.11.2026, 19:00 або орієнтовно грудень 2026","theory":"Дата і час проведення - це не лише організаційні дані. Для багатьох великих форм вони впливають і на режисерське рішення.\n\nДата може бути пов’язана зі святом, історичною подією, ювілеєм, фестивальним календарем, сезоном або іншим контекстом. Час проведення впливає на використання природного і сценічного світла, відео, атмосферу, погодні умови, транспортну доступність та тривалість перебування глядача.\n\nОсобливо важливими дата і час є для подій у відкритому просторі. Денне і вечірнє дійство на одному майданчику можуть потребувати принципово різних режисерських і технічних рішень.\n\nЯкщо точні дата та час ще не визначені, зазначте орієнтовний період. Його можна буде уточнити пізніше."},{"id":"projectDuration","type":"text","title":"1.2.9. Орієнтовна тривалість / хронометраж","help":"Вкажіть передбачувану тривалість усього проєкту. Для складних подій можна додати орієнтовну тривалість основних блоків.","placeholder":"Наприклад: 90 хвилин","theory":"Хронометраж - це передбачувана тривалість усього проєкту. Його варто визначити вже на початку, навіть якщо надалі він буде уточнюватися.\n\nТривалість безпосередньо впливає на композицію, архітектоніку, кількість епізодів і номерів, темпоритм, розподіл кульмінацій, переходи між частинами та здатність аудиторії утримувати увагу.\n\nПроєкт тривалістю 45 хвилин і проєкт тривалістю три години не можуть мати однакову драматургічну організацію. Для фестивалю, свята або багатомайданчикового проєкту важливо визначити не лише загальну тривалість, а й приблизний хронометраж окремих блоків або програм.\n\nНа цьому етапі достатньо реалістичної орієнтовної цифри. Пізніше вона буде уточнюватися разом зі сценарієм і постановочним планом."}]};\nconst DIRECTING_LAB_RESEARCH_SECTION={"id":"research-materials","title":"1.3. Пошук, дослідження та збір матеріалу","intro":"Після визначення вихідних параметрів проєкту починається дослідницький етап. Ваше завдання не просто накопичити посилання і файли, а зібрати матеріал, який допоможе глибше зрозуміти тему і поступово сформувати режисерський задум. Знайдені факти, документи, тексти, музика, зображення, відео, сценічні приклади та асоціації можуть згодом перетворитися на драматургію, образи, сценарний хід, монтажні зв’язки та інші засоби сценічного вираження. Матеріал доцільно збирати у двох напрямах: документальному та художньому. Паралельно ведіть режисерський блокнот, де фіксуйте власні ідеї, асоціації та можливі способи поєднання знайденого матеріалу. Це робочий накопичувальний етап: він не подається на перевірку. Коли первинна база сформована, студент лише фіксує результат етапу і продовжує поповнювати матеріали надалі.","published":true,"blocks":[{"id":"documentaryMaterials","type":"material_collection","collectionKind":"documentary","title":"1.3.1. Документальний матеріал","help":"Додавайте факти, документи, архівні матеріали, фото, відео, інтерв’ю, спогади, публікації та інші джерела, пов’язані з реальною дійсністю.","theory":"Документальний матеріал пов’язаний із реальною дійсністю і дає режисерові фактичну основу для осмислення теми. Це можуть бути історичні та сучасні факти, архівні документи, листи, щоденники, спогади, інтерв’ю, фотографії, відеозаписи, аудіозаписи, газетні та журнальні публікації, статистика, біографічні відомості, офіційні документи, музейні предмети, артефакти, іконографічні матеріали, матеріали з конкретного місця або середовища.\n\nДокументальний матеріал не слід просто накопичувати. Кожен знайдений факт або документ потрібно осмислювати з позиції майбутньої постановки: що він відкриває в темі, яку суперечність виявляє, який образ або епізод може народити, чи може стати основою тексту, відеофрагмента, сценічної дії або монтажного зіставлення.\n\nРежисер може проводити і власне дослідження: записувати інтерв’ю, фотографувати місце, працювати з архівами, музеями, приватними колекціями, збирати усні історії та свідчення. Відібрані факти і документи надалі можуть бути образно переосмислені і перетворені на факти мистецтва: драматургію, сценарний хід, сценічний образ, персонажа, звук, відео або інший художній засіб.\n\nДо кожного матеріалу обов’язково залишайте режисерську нотатку: як саме його можна використати або з чим його можна поєднати."},{"id":"artisticMaterials","type":"material_collection","collectionKind":"artistic","title":"1.3.2. Художній матеріал","help":"Збирайте твори та фрагменти мистецтва, які можуть стати змістовим, образним, музичним, пластичним або візуальним матеріалом майбутнього проєкту.","theory":"Художній матеріал уже є результатом мистецького осмислення дійсності. До нього належать літературні твори, поезія, драматургія, музика, пісні, кінематограф, фотографія, живопис, хореографія, сценічні номери, вистави, сценографія, костюм, звукові та відеоматеріали, а також інші твори різних видів мистецтва.\n\nСценарний матеріал великого видовищного проєкту може бути художнім, літературним, образотворчим, звуковим і музичним. Джерелом можуть стати як цілі твори, так і окремі фрагменти, образи, мотиви, фактури, ритми, інтонації, принципи побудови або режисерські прийоми.\n\nВажливо не копіювати знайдене рішення, а зрозуміти, що саме в ньому вас цікавить. Це може бути музична тема, спосіб появи виконавця, пластичний принцип, колір, композиція кадру, характер монтажу, сценографічний образ, контраст, ритм або спосіб взаємодії з глядачем.\n\nДо кожного художнього матеріалу фіксуйте, що саме вас зацікавило і як цей матеріал може працювати у вашому проєкті: стати основою епізоду, створити атмосферу, вступити в контраст із документом, підказати образ, просторове рішення або принцип монтажу."},{"id":"directorNotebook","type":"material_collection","collectionKind":"notes","title":"1.3.3. Режисерський блокнот","help":"Фіксуйте ідеї одразу, коли вони виникають. Тут можуть з’являтися образи, монтажні зв’язки, просторові рішення, питання, музичні та візуальні задуми.","theory":"Режисерський блокнот потрібен для того, щоб не втрачати думки, які виникають під час дослідження. Не кожна ідея одразу належить до конкретного документа чи твору. Іноді спочатку з’являється образ, фраза, ритм, спосіб переходу між епізодами, поєднання двох матеріалів або питання, на яке ще немає відповіді.\n\nФіксуйте такі думки одразу. Вони не зобов’язані бути остаточними або правильними. Це робочий простір режисера. Тут можна записати, як поєднати архівний документ із музикою, яким може бути пролог, який предмет може стати образом, де використати тишу, як змінити простір, як підвести глядача до певного переживання.\n\nОсобливо важливо фіксувати зв’язки між матеріалами. Саме в таких зв’язках часто починає народжуватися монтаж, епізод, сценарно-режисерський хід або майбутній художній образ."}]};\nfunction dlUpgradeSchema(raw){const x=JSON.parse(JSON.stringify(raw||{}));x.sections=Array.isArray(x.sections)?x.sections:[];x.sections=x.sections.filter(s=>s.id!=="passport"&&s.id!==DIRECTING_LAB_JUSTIFICATION_SECTION.id&&s.id!==DIRECTING_LAB_PROJECT_PARAMETERS_SECTION.id&&s.id!==DIRECTING_LAB_RESEARCH_SECTION.id);x.sections.unshift(JSON.parse(JSON.stringify(DIRECTING_LAB_RESEARCH_SECTION)));x.sections.unshift(JSON.parse(JSON.stringify(DIRECTING_LAB_PROJECT_PARAMETERS_SECTION)));x.sections.unshift(JSON.parse(JSON.stringify(DIRECTING_LAB_JUSTIFICATION_SECTION)));x.contentVersion=Math.max(5,Number(x.contentVersion||0));return x}\n\nconst DIRECTING_LAB_DEFAULT_SCHEMA={\n  version:1,\n  contentVersion:3,\n  title:"Режисерська лабораторія",\n  subtitle:"Індивідуальна траєкторія розробки режисерського проєкту",\n  sections:[\n    {id:"passport",title:"1. Паспорт проєкту",intro:"Це стартова картка майбутнього проєкту. Визнач робочу назву, форму та коротко сформулюй задум. Теоретичний матеріал і приклади до цього розділу викладач поступово доповнюватиме.",published:true,blocks:[\n      {id:"projectTitle",type:"text",title:"Робоча назва проєкту",help:"Назва може бути робочою і змінюватися в процесі.",placeholder:"Введи робочу назву",required:true},\n      {id:"format",type:"text",title:"Форма / жанр",help:"Визнач сценічну форму або жанрову природу задуму.",placeholder:"Наприклад: музично-сценічний перформанс",required:false},\n      {id:"concept",type:"textarea",title:"Коротка концепція",help:"Стисло опиши, що саме ти хочеш створити і чому цей задум важливий.",placeholder:"2–5 абзаців",required:false}\n    ]},\n    DIRECTING_LAB_JUSTIFICATION_SECTION,\n    {id:"dramaturgy",title:"2. Драматургічна основа",intro:"У цьому розділі формується смислова й драматургічна основа майбутнього проєкту. Перед заповненням окремих пунктів ознайомся з теоретичним матеріалом до розділу.",published:true,blocks:[\n      {id:"theme",type:"textarea",title:"Тема",help:"Сформулюй предмет художнього осмислення.",placeholder:"Тема проєкту",required:false},\n      {id:"idea",type:"textarea",title:"Ідея",help:"Сформулюй основну авторську думку, до якої має привести проєкт.",placeholder:"Ідея проєкту",required:false},\n      {id:"problem",type:"textarea",title:"Проблематика",help:"Які питання та суперечності досліджує проєкт?",placeholder:"Проблематика",required:false},\n      {id:"conflict",type:"textarea",title:"Конфлікт",help:"Опиши головне зіткнення сил, позицій або цінностей.",placeholder:"Конфлікт",required:false},\n      {id:"structure",type:"textarea",title:"Архітектоніка / структура",help:"Опиши великі частини, епізоди або логіку розвитку дії.",placeholder:"Структура проєкту",required:false}\n    ]},\n    {id:"director",title:"3. Режисерський задум",intro:"Розділ переводить драматургічну основу у мову режисури: образ, спосіб сценічного існування, прийоми та систему виразних засобів.",published:true,blocks:[\n      {id:"directorConcept",type:"textarea",title:"Режисерський задум",help:"Опиши, яким способом задум буде втілено на сцені.",placeholder:"Режисерський задум",required:false},\n      {id:"image",type:"textarea",title:"Образ проєкту",help:"Сформулюй центральний образ або образну систему.",placeholder:"Образне рішення",required:false},\n      {id:"techniques",type:"textarea",title:"Режисерські прийоми та засоби виразності",help:"Переліч і поясни прийоми, які працюватимуть на задум.",placeholder:"Прийоми, монтаж, пластика, взаємодія з глядачем…",required:false}\n    ]},\n    {id:"staging",title:"4. Постановочне рішення",intro:"Тут задум конкретизується через простір, мізансцену, сценографію, світло, звук, відео та темпоритм.",published:true,blocks:[\n      {id:"space",type:"textarea",title:"Простір і мізансценування",help:"Опиши принцип організації сценічного простору та руху.",placeholder:"Просторове рішення",required:false},\n      {id:"visual",type:"textarea",title:"Сценографія / візуальне рішення",help:"Опиши візуальну систему проєкту.",placeholder:"Сценографія, костюм, графіка…",required:false},\n      {id:"tech",type:"textarea",title:"Світло, звук, відео",help:"Які технічні засоби є частиною режисерського рішення?",placeholder:"Технічне рішення",required:false},\n      {id:"rhythm",type:"textarea",title:"Темпоритм",help:"Опиши принцип темпоритмічної побудови.",placeholder:"Темпоритм",required:false}\n    ]},\n    {id:"plan",title:"5. Режисерсько-постановочний план",intro:"Фінальний робочий розділ збирає матеріал у постановочну документацію. Тут можуть з’являтися таблиці, шаблони й файли, які викладач додаватиме поступово.",published:true,blocks:[\n      {id:"plan",type:"textarea",title:"Постановочний план / послідовність епізодів",help:"Опиши або встав структуру постановочного плану.",placeholder:"План",required:false},\n      {id:"links",type:"link",title:"Робочі посилання",help:"Додай посилання на сценарій, Canva, відео, референси або інші матеріали.",placeholder:"https://…",required:false}
    ]}
  ]
};
const dlFeedbackStatusLabels={draft:"Чернетка",submitted:"Подано",revision:"Доопрацювати",approved:"Погоджено"};
const dlStatusLabel={not_started:"Не розпочато",in_progress:"У роботі",review:"На перевірці",revision:"Доопрацювання",approved:"Погоджено"};
const dlBlockTypeLabels={text:"Коротка відповідь",textarea:"Велике текстове поле",table:"Таблиця",file:"Файл / документ",link:"Посилання",checklist:"Чекліст",theory:"Матеріал / приклад",material_collection:"Колекція матеріалів"};

const DIRECTING_LAB_REMS34_NAMES=[
  "Баленко Ілля","Вознюк Олександра","Волошина Дар’я","Давидова Світлана","Данільчук Катерина",
  "Дубина Віолетта","Карпенко Рімма","Кириленко Михайло","Коткова Анастасія","Кропивка Маргарита",
  "Лещинський Денис","Мороз Марія","Павлова Катерина","Піддубна Марія","Ташута Артем"
];
const dlNormPerson=v=>String(v||"").toLowerCase().replace(/[’'`ʼ]/g,"").replace(/ґ/g,"г").replace(/\s+/g," ").trim();\nconst DIRECTING_LAB_REMS34_KEYS=new Set(DIRECTING_LAB_REMS34_NAMES.map(dlNormPerson));\n\n// v44.9: персональні папки Google Drive для індивідуальних лабораторій, включно з Максімовою та Мостовою.\n// Ключі дублюються у повній та короткій формі, щоб зіставлення не залежало від по батькові / апострофів.\nconst DIRECTING_LAB_PERSONAL_DRIVE_ENTRIES=[\n  ["Баленко Ілля","https://drive.google.com/drive/folders/1k4qJ0kU1tkhRW4C66HV7oPT3iE3MXLwM"],\n  ["Вознюк Олександра","https://drive.google.com/drive/folders/18PTitSgloN_PgQ12EZkrA5_CTe2SvMtE"],\n  ["Волошина Дар’я","https://drive.google.com/drive/folders/1W0TIbui4mP8p2t0Zoo0yRDnkl0AZPU6p"],\n  ["Давидова Світлана","https://drive.google.com/drive/folders/1QLiJuXQD-DdykFxkHMQR5KxZKpdU3Qd3"],\n  ["Данільчук Катерина","https://drive.google.com/drive/folders/1Q-4BsG67rdyBtz8xrRmeJyPcrfhqHB2W"],\n  ["Дубина Віолетта","https://drive.google.com/drive/folders/1S2kanJP53Sk50po1mFy9yikZbOSQ95mv"],\n  ["Карпенко Рімма","https://drive.google.com/drive/folders/1oCoCpxOtFzRwRQM9dL14l2C7qdkNo6Ru"],\n  ["Кириленко Михайло","https://drive.google.com/drive/folders/1VlD2rzr2Gf0E2n8A054qooWkOLr3jg_P"],\n  ["Коткова Анастасія","https://drive.google.com/drive/folders/1H9qiz6ySQ5XpXs-rhs_opMnw05-YLWjJ"],\n  ["Кропивка Маргарита","https://drive.google.com/drive/folders/1d3HzS7ffIAYU8LY9pMbggXvSfm2rdvuN"],\n  ["Лещинський Денис","https://drive.google.com/drive/folders/19JMX6sIJSK3nkU6LQq46nqhwccLms5d8"],\n  ["Мороз Марія","https://drive.google.com/drive/folders/1qNOFpOElj5YePW1rQyt5tPtSecnqzykI"],\n  ["Павлова Катерина","https://drive.google.com/drive/folders/1LqLCmLMesOiqEofb2J17gWRm6JgEWRY9"],\n  ["Піддубна Марія","https://drive.google.com/drive/folders/1cy3fi0iri0fZOXBap0ZSpQSir664bZK0"],\n  ["Ташута Артем","https://drive.google.com/drive/folders/17dR9qkcESksSu7c5-s-TquGuLRESwLXQ"],\n  ["Вінцюк Андрій Олександрович","https://drive.google.com/drive/folders/14lS1-EnkxZOm-oTaVojaSErlfeC61a1X"],\n  ["Власенко Дар`я Андріївна","https://drive.google.com/drive/folders/1XwXD7tcO3PEI9DWjuhYLg5QASuATdfnY"],\n  ["Гострик Катерина Юріївна","https://drive.google.com/drive/folders/1JIURnH1K2uarPkrRIruyGI_rJuy8yt5-"],\n  ["Жолуденко Поліна Ігорівна","https://drive.google.com/drive/folders/1B-cEkOTwwW0DjnHO1qdxm-k4FLpkc4Xc"],\n  ["Заярна Валерія Сергіївна","https://drive.google.com/drive/folders/1bBkTgq_p-LW4Av98F4QWtk7XtkjyjYyq"],\n  ["Касєєв Данило Павлович","https://drive.google.com/drive/folders/19zr4W8qe8xRwHVIbZFiajncF64NrTY9A"],\n  ["Колишкін Андрій Юрійович","https://drive.google.com/drive/folders/1Zt3BO4OMFICBcPWeEWF0UAS0ltKC4xX4"],\n  ["Кохан Ольга Сергіївна","https://drive.google.com/drive/folders/1Z4FjOQqbky9aXkn8aeydw6umzajSNPIK"],\n  ["Кошелєва Мирослава Сергіївна","https://drive.google.com/drive/folders/1Y8QzRBHFQyJgejrQ8ZNh3zqtTWBRx1vD"],\n  ["Краснянський Ростислав Віталійович","https://drive.google.com/drive/folders/1adw5tsSapXZN0VZL_cjtxcU1nC962XB5"],\n  ["Міленіна Марія Олегівна","https://drive.google.com/drive/folders/1efvRRI6-oaJIGN8YyNXjBqlxQUL6qDUH"],\n  ["Мойсієнко Віталіна Денисівна","https://drive.google.com/drive/folders/1a-Z70zOPLoCuIwJQyxcnJqgHmhM9kNRD"],\n  ["Неня Анастасія Миколаївна","https://drive.google.com/drive/folders/1PIjKTUeoOlUF8RzGqfQfgO1SXVgTbwjj"],\n  ["Олейников Данііл Денисович","https://drive.google.com/drive/folders/1AibjkdVGhuprtdy8O4lJWeIzYrflmg1_"],\n  ["Позняк Артур Русланович","https://drive.google.com/drive/folders/1nmwVxRvAo4efozetcx2Hin8JbOCVr184"],\n  ["Рожанківська Іванна Орестівна","https://drive.google.com/drive/folders/1GYPdAVJ57UoXa7Xe341SXemE_v-Z5hz6"],\n  ["Чиньонова Дар`я Олексіївна","https://drive.google.com/drive/folders/13eC4Ci8ueoYgeJX7iJ8wc59otcvW9GzP"],\n  ["Максімова Саміра Вадимівна","https://drive.google.com/drive/folders/18zQmUe5IwwLEYQLsUxEFopbUeWD18o5k"],\n  ["Мостова Яна Олегівна","https://drive.google.com/drive/folders/1IZbDTZIOkimGe44w-50XfY50RWUa9Ch4"]\n];\nconst DIRECTING_LAB_PERSONAL_DRIVE_MAP=(()=>{const m=new Map();for(const[name,url]of DIRECTING_LAB_PERSONAL_DRIVE_ENTRIES){const full=dlNormPerson(name),p=full.split(" ").filter(Boolean);m.set(full,url);if(p.length>=2)m.set(`${p[0]} ${p[1]}`,url)}return m})();\nfunction dlPersonalDriveForStudent(st){const full=dlNormPerson(st?.name||"");const p=full.split(" ").filter(Boolean);return DIRECTING_LAB_PERSONAL_DRIVE_MAP.get(full)||DIRECTING_LAB_PERSONAL_DRIVE_MAP.get(p.slice(0,2).join(" "))||""}\nfunction dlLegacyProjectDriveForStudent(st,url){const u=String(url||"").trim();if(!u)return false;return dlProjectsForStudent(st).some(p=>String(p?.driveUrl||"").trim()===u)}\nfunction dlIsNamedRems34(st){const full=dlNormPerson(st?.name||"");if(DIRECTING_LAB_REMS34_KEYS.has(full))return true;const parts=full.split(" ").filter(Boolean);return parts.length>=2&&DIRECTING_LAB_REMS34_KEYS.has(`${parts[0]} ${parts[1]}`)}\nfunction dlStudentGroup(st){const raw=String(studentGroupLabel(st)||st?.group||"").toUpperCase().replace(/\s+/g,"");if(raw.includes("РЕМС-44")||raw.includes("REMS-44"))return"44";if(dlIsNamedRems34(st))return"34";return""}\nfunction dlEligibleStudents(){return(db.students||[]).filter(st=>["34","44"].includes(dlStudentGroup(st))).slice().sort((a,b)=>dlStudentGroup(b).localeCompare(dlStudentGroup(a))||String(a.name||"").localeCompare(String(b.name||""),"uk"))}\nfunction dlLabId(studentId){return`dl-${String(studentId)}`}\nfunction dlLabForStudent(studentId){db[DIRECTING_LABS_KEY]=Array.isArray(db[DIRECTING_LABS_KEY])?db[DIRECTING_LABS_KEY]:[];return db[DIRECTING_LABS_KEY].find(x=>String(x.studentId)===String(studentId))||null}\nfunction dlProjectsForStudent(studentOrId){\n  const st=(studentOrId&&typeof studentOrId==="object")?studentOrId:(db.students||[]).find(s=>String(s.id)===String(studentOrId));\n  const sid=String(st?.id??studentOrId??"");\n  const studentName=dlNormPerson(st?.name||"");\n  const compactName=v=>{const parts=dlNormPerson(v).split(" ").filter(Boolean);return parts.slice(0,2).join(" ")};\n  const studentShort=compactName(st?.name||"");\n  return(largeFormsCache||[]).filter(x=>{\n    if(sid&&lfAuthorIds(x).includes(sid))return true;\n    if(!studentName)return false;\n    const authorNames=lfAuthorNames(x);\n    return authorNames.some(name=>{\n      const full=dlNormPerson(name),short=compactName(name);\n      return full===studentName||(studentShort&&short===studentShort);\n    });\n  });\n}\nasync function ensureDirectingLabs(){db[DIRECTING_LABS_KEY]=Array.isArray(db[DIRECTING_LABS_KEY])?db[DIRECTING_LABS_KEY]:[];const byStudent=new Map(db[DIRECTING_LABS_KEY].map(x=>[String(x.studentId),x]));const now=new Date().toISOString();let changed=false;for(const st of dlEligibleStudents()){const sid=String(st.id),personalDrive=dlPersonalDriveForStudent(st);let lab=byStudent.get(sid);if(!lab){lab={id:dlLabId(sid),studentId:sid,status:"not_started",createdAt:now,updatedAt:now,driveUrl:personalDrive||""};db[DIRECTING_LABS_KEY].push(lab);byStudent.set(sid,lab);changed=true}else if(personalDrive&&(!String(lab.driveUrl||"").trim()||dlLegacyProjectDriveForStudent(st,lab.driveUrl))){lab.driveUrl=personalDrive;lab.updatedAt=now;changed=true}}if(changed){cache();if(cloudDb&&cloudReady&&currentUser){try{await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{[DIRECTING_LABS_KEY]:clone(db[DIRECTING_LABS_KEY]),updatedAt:now},{merge:true})}catch(err){console.error("Directing labs persist failed",err)}}}}\nfunction dlProjectOwnershipText(project){const names=lfAuthorNames(project);return names.length<=1?"Індивідуальний проєкт":`Спільний проєкт · ${names.length} автори`}\nfunction dlPhotoOrInitial(st,detail=false){const photo=sharedStudentPhoto(st);const cls=detail?"dl-detail-photo":"dl-student-photo";if(photo)return`<img class="${cls}" src="${lfEsc(photo)}" alt="${lfEsc(st.name||'Студент')}">`;return`<span class="${cls} dl-student-photo-empty">${lfEsc(String(st.name||'?').trim().charAt(0)||'?')}</span>`}\nconst dlNewId=(prefix="x")=>`${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`;\nfunction dlSchemaClone(x){return dlUpgradeSchema(JSON.parse(JSON.stringify(x||DIRECTING_LAB_DEFAULT_SCHEMA)))}\nasync function dlLoadSchema(force=false){if(directingLabSchemaCache&&!force)return directingLabSchemaCache;if(!cloudDb){directingLabSchemaCache=dlSchemaClone(DIRECTING_LAB_DEFAULT_SCHEMA);return directingLabSchemaCache}try{const snap=await getDoc(doc(cloudDb,DIRECTING_LAB_SCHEMA_COLLECTION,DIRECTING_LAB_SCHEMA_DOC));directingLabSchemaCache=dlSchemaClone(snap.exists()?snap.data():DIRECTING_LAB_DEFAULT_SCHEMA)}catch(e){console.error("Lab schema load",e);directingLabSchemaCache=dlSchemaClone(DIRECTING_LAB_DEFAULT_SCHEMA)}return directingLabSchemaCache}\nasync function dlSaveSchema(schema){if(!cloudDb||!currentUser)throw new Error("Потрібен вхід викладача");const clean=dlSchemaClone(schema);clean.updatedAt=new Date().toISOString();clean.updatedBy=currentUser.email||currentUser.uid||"";clean.version=Number(clean.version||0)+1;await setDoc(doc(cloudDb,DIRECTING_LAB_SCHEMA_COLLECTION,DIRECTING_LAB_SCHEMA_DOC),clean,{merge:false});directingLabSchemaCache=clean;return clean}\nfunction dlSchemaStats(schema){const sections=(schema?.sections||[]).filter(s=>s.published!==false),blocks=sections.flatMap(s=>s.blocks||[]).filter(b=>b.type!=="theory");return{sections:sections.length,blocks:blocks.length}}\n\nfunction renderDirectingLaboratory(){\n  const all=dlEligibleStudents();const rows=all.filter(st=>directingLabFilter==="all"||dlStudentGroup(st)===directingLabFilter);const counts={"34":all.filter(st=>dlStudentGroup(st)==="34").length,"44":all.filter(st=>dlStudentGroup(st)==="44").length};\n  app.innerHTML=`<div class="lf-toolbar"><div><span class="eyebrow">Індивідуальна робота</span><h2 style="margin:4px 0 3px">Режисерська лабораторія</h2><div class="muted">Живе навчальне середовище: теорія, завдання, таблиці, файли, відгук викладача та персональний Google Drive. Структуру можна доповнювати впродовж семестру без втрати студентських відповідей.</div></div><div class="dl-toolbar-actions"><div class="dl-top-actions"><button class="ghost" id="dlOpenBuilder" type="button">⚙ Конструктор лабораторії</button><button class="primary" id="dlActivateAll" type="button">Активувати лабораторії всім</button></div><div class="lf-tabs"><button class="lf-tab ${directingLabFilter==='44'?'active':''}" data-dl-filter="44">РЕМС-44 · ${counts['44']}</button><button class="lf-tab ${directingLabFilter==='34'?'active':''}" data-dl-filter="34">РЕМС-34 · ${counts['34']}</button><button class="lf-tab ${directingLabFilter==='all'?'active':''}" data-dl-filter="all">Усі · ${all.length}</button></div></div></div>\n  <div class="lf-grid">${rows.map(st=>{const lab=dlLabForStudent(st.id)||{};const projects=dlProjectsForStudent(st.id);const single=projects.filter(p=>lfAuthorIds(p).length===1);const shared=projects.filter(p=>lfAuthorIds(p).length>1);return`<button class="lf-card dl-student-card" data-dl-open="${lfEsc(st.id)}" style="--lf-color:${dlStudentGroup(st)==='44'?'#7c3aed':'#2563eb'}"><div class="dl-card-row">${dlPhotoOrInitial(st)}<div class="dl-card-main"><div class="lf-card-head"><div><div class="lf-meta"><span class="lf-chip">РЕМС-${dlStudentGroup(st)}</span><span class="lf-chip">${lfEsc(dlStatusLabel[lab.status]||dlStatusLabel.not_started)}</span>${lab.driveUrl?'<span class="lf-chip">☁ Drive</span>':''}</div><h3>${lfEsc(st.name||'Студент')}</h3></div><span>→</span></div><div class="lf-team">${single.length?`Закріплено: <b>${lfEsc(single.map(p=>p.title||'Без назви').join(', '))}</b>`:shared.length?`Поки спільний проєкт: <b>${lfEsc(shared.map(p=>p.title||'Без назви').join(', '))}</b>`:'Індивідуальний проєкт ще не визначено'}</div></div></div></button>`}).join('')||'<div class="lf-empty">У контингенті не знайдено студентів РЕМС-34 / РЕМС-44.</div>'}</div>`;\n  app.querySelectorAll('[data-dl-filter]').forEach(b=>b.onclick=()=>{directingLabFilter=b.dataset.dlFilter;renderDirectingLaboratory()});app.querySelectorAll('[data-dl-open]').forEach(b=>b.onclick=()=>openDirectingLab(b.dataset.dlOpen));const a=app.querySelector('#dlActivateAll');if(a)a.onclick=()=>dlActivateAllStudents(a);app.querySelector('#dlOpenBuilder').onclick=()=>openDirectingLabConstructor();\n}\n\nfunction dlBuilderBlockHtml(block,si,bi){const type=block.type||"textarea";return`<div class="dl-builder-block" data-builder-block data-si="${si}" data-bi="${bi}"><div class="dl-builder-block-head"><b>${bi+1}. ${lfEsc(block.title||'Новий пункт')}</b><div><button type="button" class="ghost mini" data-block-up>↑</button><button type="button" class="ghost mini" data-block-down>↓</button><button type="button" class="danger mini" data-block-delete>Видалити</button></div></div><div class="dl-builder-grid"><label>Тип<select data-b="type">${Object.entries(dlBlockTypeLabels).map(([k,v])=>`<option value="${k}" ${type===k?'selected':''}>${lfEsc(v)}</option>`).join('')}</select></label><label class="wide">Назва пункту<input data-b="title" value="${lfEsc(block.title||'')}"></label><label class="wide">Коротка інструкція біля поля<textarea data-b="help" rows="3">${lfEsc(block.help||'')}</textarea></label><label class="wide">Теоретичний матеріал у спливаючому вікні<textarea data-b="theory" rows="8" placeholder="Цей текст студент відкриє кнопкою «Теорія до пункту»">${lfEsc(block.theory||'')}</textarea></label><label class="wide">Підказка у полі<input data-b="placeholder" value="${lfEsc(block.placeholder||'')}"></label><label class="wide">Посилання на зразок / шаблон<input data-b="templateUrl" value="${lfEsc(block.templateUrl||'')}" placeholder="https://…"></label><label class="wide">Колонки таблиці / варіанти чекліста <small>(через |)</small><input data-b="options" value="${lfEsc((block.columns||block.options||[]).join(' | '))}" placeholder="Епізод | Зміст | Світло | Звук"></label><label class="dl-check"><input type="checkbox" data-b="required" ${block.required?'checked':''}> Обов’язковий пункт</label><label class="dl-check"><input type="checkbox" data-b="wide" ${block.wide?'checked':''}> На всю ширину</label></div></div>`}\nfunction dlBuilderSectionHtml(section,si){return`<section class="dl-builder-section" data-builder-section data-si="${si}"><div class="dl-builder-section-head"><div><span class="eyebrow">Розділ ${si+1}</span><h3>${lfEsc(section.title||'Новий розділ')}</h3></div><div><button type="button" class="ghost mini" data-section-up>↑</button><button type="button" class="ghost mini" data-section-down>↓</button><button type="button" class="danger mini" data-section-delete>Видалити</button></div></div><div class="dl-builder-grid"><label class="wide">Назва розділу<input data-s="title" value="${lfEsc(section.title||'')}"></label><label class="wide">Вступний теоретичний матеріал<textarea data-s="intro" rows="6" placeholder="Вступ до всього розділу, який студент спочатку читає…">${lfEsc(section.intro||'')}</textarea></label><label class="dl-check"><input type="checkbox" data-s="published" ${section.published!==false?'checked':''}> Опублікований для студентів</label></div><div class="dl-builder-blocks">${(section.blocks||[]).map((b,bi)=>dlBuilderBlockHtml(b,si,bi)).join('')}</div><button type="button" class="ghost" data-add-block>＋ Додати пункт</button></section>`}\nasync function openDirectingLabConstructor(){\n  const schema=dlSchemaClone(await dlLoadSchema(true));\n  const render=()=>{const stats=dlSchemaStats(schema);app.innerHTML=`<div class="dl-builder-page"><div class="lf-detail-head"><div><button class="ghost" id="dlBuilderBack">← До лабораторії</button><span class="eyebrow" style="display:block;margin-top:14px">Конструктор</span><h2 style="margin:4px 0">Структура режисерської лабораторії</h2><p class="muted">Додавай розділи поступово. Опублікований новий розділ з’явиться у всіх студентів за тим самим персональним посиланням; старі відповіді не зникнуть.</p></div><div class="dl-builder-summary"><b>${stats.sections}</b><small>опублікованих розділів</small><b>${stats.blocks}</b><small>робочих пунктів</small></div></div><div id="dlBuilderSections">${(schema.sections||[]).map(dlBuilderSectionHtml).join('')}</div><button class="ghost dl-add-section" id="dlAddSection">＋ Додати розділ</button><div class="dl-builder-savebar"><div><b>Зміни конструктора не впливають на вже збережені відповіді.</b><small>Видалений пункт перестає показуватися, але його старі дані залишаються у робочому документі студента.</small></div><button class="primary" id="dlSaveSchema">Опублікувати структуру</button></div></div>`;bind()};\n  const sync=()=>{app.querySelectorAll('[data-builder-section]').forEach(sec=>{const si=+sec.dataset.si,schemaSec=schema.sections[si];sec.querySelectorAll('[data-s]').forEach(el=>{const k=el.dataset.s;schemaSec[k]=el.type==='checkbox'?el.checked:el.value});sec.querySelectorAll('[data-builder-block]').forEach(bl=>{const bi=+bl.dataset.bi,b=schemaSec.blocks[bi];bl.querySelectorAll('[data-b]').forEach(el=>{const k=el.dataset.b;if(k==='required'||k==='wide')b[k]=el.checked;else if(k==='options'){const arr=el.value.split('|').map(x=>x.trim()).filter(Boolean);if(b.type==='table'){b.columns=arr;b.options=[]}else if(b.type==='checklist'){b.options=arr;b.columns=[]}else{b.options=arr}}else b[k]=el.value})})})};\n  const bind=()=>{app.querySelector('#dlBuilderBack').onclick=renderDirectingLaboratory;app.querySelector('#dlAddSection').onclick=()=>{sync();schema.sections.push({id:dlNewId('section'),title:`Новий розділ`,intro:'',published:false,blocks:[]});render()};app.querySelectorAll('[data-builder-section]').forEach(sec=>{const si=+sec.dataset.si;sec.querySelector('[data-add-block]').onclick=()=>{sync();schema.sections[si].blocks.push({id:dlNewId('block'),type:'textarea',title:'Новий пункт',help:'',placeholder:'',required:false});render()};sec.querySelector('[data-section-up]').onclick=()=>{sync();if(si>0){[schema.sections[si-1],schema.sections[si]]=[schema.sections[si],schema.sections[si-1]];render()}};sec.querySelector('[data-section-down]').onclick=()=>{sync();if(si<schema.sections.length-1){[schema.sections[si+1],schema.sections[si]]=[schema.sections[si],schema.sections[si+1]];render()}};sec.querySelector('[data-section-delete]').onclick=()=>{if(confirm('Приховати цей розділ зі структури? Старі відповіді студентів у базі не видаляються.')){sync();schema.sections.splice(si,1);render()}};sec.querySelectorAll('[data-builder-block]').forEach(bl=>{const bi=+bl.dataset.bi;bl.querySelector('[data-block-up]').onclick=()=>{sync();if(bi>0){const a=schema.sections[si].blocks;[a[bi-1],a[bi]]=[a[bi],a[bi-1]];render()}};bl.querySelector('[data-block-down]').onclick=()=>{sync();const a=schema.sections[si].blocks;if(bi<a.length-1){[a[bi+1],a[bi]]=[a[bi],a[bi+1]];render()}};bl.querySelector('[data-block-delete]').onclick=()=>{if(confirm('Прибрати цей пункт зі структури?')){sync();schema.sections[si].blocks.splice(bi,1);render()}}})});app.querySelector('#dlSaveSchema').onclick=async()=>{sync();const btn=app.querySelector('#dlSaveSchema');btn.disabled=true;btn.textContent='Збереження…';try{await dlSaveSchema(schema);btn.textContent='Опубліковано ✓';setTimeout(()=>{btn.disabled=false;btn.textContent='Опублікувати структуру'},1200)}catch(e){console.error(e);alert('Не вдалося зберегти структуру. Перевір Firestore Rules.');btn.disabled=false;btn.textContent='Опублікувати структуру'}}};\n  render();\n}\n\nfunction dlRandomAccessKey(){const bytes=new Uint8Array(24);crypto.getRandomValues(bytes);return Array.from(bytes,b=>b.toString(16).padStart(2,"0")).join("")}\nasync function dlPersistLabAccessKey(studentId,key){const lab=dlLabForStudent(studentId);if(!lab)throw new Error("Лабораторію студента не знайдено");if(lab.accessKey===key)return;lab.accessKey=key;lab.updatedAt=new Date().toISOString();cache();if(cloudDb&&cloudReady&&currentUser)await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{[DIRECTING_LABS_KEY]:clone(db[DIRECTING_LABS_KEY]),updatedAt:new Date().toISOString()},{merge:true})}\nasync function dlEnsureStudentAccess(st){\n  if(!cloudDb||!currentUser)throw new Error("Потрібен вхід викладача");\n  const lab=dlLabForStudent(st.id);if(!lab)throw new Error("Лабораторію студента не знайдено");\n  const key=String(lab.accessKey||"").trim()||dlRandomAccessKey();\n  const now=new Date().toISOString();\n\n  // IMPORTANT: activation must never wipe an already existing personal schedule.\n  const scheduleRef=doc(cloudDb,"rems_student_schedules",key);\n  const scheduleSnap=await getDoc(scheduleRef);\n  if(!scheduleSnap.exists()){\n    await setDoc(scheduleRef,{studentId:String(st.id),name:String(st.name||""),group:String(st.group||`РЕМС-${dlStudentGroup(st)}`),items:[],projects:{},updatedAt:now,createdAt:now},{merge:false});\n  }else{\n    await setDoc(scheduleRef,{studentId:String(st.id),name:String(st.name||""),group:String(st.group||`РЕМС-${dlStudentGroup(st)}`),updatedAt:now},{merge:true});\n  }\n  if(!lab.accessKey)await dlPersistLabAccessKey(st.id,key);\n\n  // Project recovery works by current student ID and, as a fallback, by author name.\n  const projects=dlProjectsForStudent(st);\n  const owned=projects.filter(p=>lfAuthorIds(p).length===1||lfAuthorNames(p).length===1);\n  const shared=projects.filter(p=>!owned.includes(p));\n  const currentProject=owned[0]||shared[0]||null;\n  const workRef=doc(cloudDb,DIRECTING_LAB_WORK_COLLECTION,key);\n  const snap=await getDoc(workRef);\n\n  if(!snap.exists()){\n    const base={\n      studentId:String(st.id),name:String(st.name||""),group:String(st.group||`РЕМС-${dlStudentGroup(st)}`),mediaId:studentMediaId(st),\n      projectId:String(currentProject?.id||""),projectTitle:String(currentProject?.title||""),\n      sharedProject:!!(currentProject&&!(lfAuthorIds(currentProject).length===1||lfAuthorNames(currentProject).length===1)),\n      driveUrl:String(dlPersonalDriveForStudent(st)||lab.driveUrl||currentProject?.driveUrl||""),updatedAt:now\n    };\n    await setDoc(workRef,{...base,answers:{},sectionStates:{},stages:{},createdAt:now},{merge:false});\n  }else{\n    const old=snap.data()||{};\n    // Existing work is sacred: never replace a non-empty project, Drive URL, answers or stages with blanks.\n    const patch={studentId:String(st.id),name:String(st.name||""),group:String(st.group||`РЕМС-${dlStudentGroup(st)}`),mediaId:studentMediaId(st),updatedAt:now};\n    const oldProjectId=String(old.projectId||"").trim(),oldProjectTitle=String(old.projectTitle||"").trim();\n    if(!oldProjectId&&!oldProjectTitle&&currentProject){\n      patch.projectId=String(currentProject.id||"");\n      patch.projectTitle=String(currentProject.title||"");\n      patch.sharedProject=!(lfAuthorIds(currentProject).length===1||lfAuthorNames(currentProject).length===1);\n    }\n    const personalDrive=String(dlPersonalDriveForStudent(st)||lab.driveUrl||"").trim();\n    const oldDrive=String(old.driveUrl||"").trim();\n    if(personalDrive&&(!oldDrive||dlLegacyProjectDriveForStudent(st,oldDrive)))patch.driveUrl=personalDrive;\n    else if(!oldDrive){const recoveredDrive=String(currentProject?.driveUrl||"").trim();if(recoveredDrive)patch.driveUrl=recoveredDrive}\n    await setDoc(workRef,patch,{merge:true});\n  }\n  return key;\n}\nasync function dlActivateAllStudents(button){if(!cloudDb||!currentUser){alert("Потрібен вхід викладача.");return}const students=dlEligibleStudents();if(!students.length){alert("Не знайдено студентів РЕМС-34 / РЕМС-44.");return}const already=students.filter(st=>String((dlLabForStudent(st.id)||{}).accessKey||"").trim()).length;if(!confirm(`Активувати персональні лабораторії для всіх ${students.length} студентів?\n\nНових доступів: ${students.length-already}. Уже активовані: ${already}.`))return;const original=button?.textContent||"Активувати лабораторії всім";if(button)button.disabled=true;let created=0,repaired=0,failed=[];for(let i=0;i<students.length;i++){const st=students[i],hadKey=!!String((dlLabForStudent(st.id)||{}).accessKey||"").trim();if(button)button.textContent=`Активація ${i+1}/${students.length}…`;try{await dlEnsureStudentAccess(st);hadKey?repaired++:created++}catch(e){console.error(e);failed.push(st.name)}}if(button){button.disabled=false;button.textContent=original}renderDirectingLaboratory();alert(`Готово. Нових: ${created}. Перевірено: ${repaired}.${failed.length?`\nПомилки: ${failed.join(', ')}`:''}`)}\nfunction dlStudentLabUrl(key){const u=new URL("lab.html",location.href);u.searchParams.set("key",key);return u.href}\nasync function dlLoadStudentWork(key){if(!cloudDb||!key)return{work:null,feedback:null};const[w,f]=await Promise.all([getDoc(doc(cloudDb,DIRECTING_LAB_WORK_COLLECTION,key)),getDoc(doc(cloudDb,DIRECTING_LAB_FEEDBACK_COLLECTION,key))]);return{work:w.exists()?w.data():null,feedback:f.exists()?f.data():null}}\nfunction dlAnswerFor(work,section,block){const a=work?.answers?.[block.id];if(a!==undefined)return a;const old=work?.stages?.[section.id]?.[block.id];return old!==undefined?{value:old}:{}}\nfunction dlAdminBlockHtml(work,section,block){const a=dlAnswerFor(work,section,block)||{};if(block.type==='theory')return`<div class="dl-answer dl-readonly"><small>${lfEsc(block.title||'Матеріал')}</small><div>${lfEsc(block.help||'').replace(/\n/g,'<br>')}</div></div>`;if(block.type==='table'){const rows=Array.isArray(a.rows)?a.rows:[];return`<div class="dl-answer"><small>${lfEsc(block.title)}</small>${rows.length?`<div class="dl-admin-table-wrap"><table><thead><tr>${(block.columns||[]).map(c=>`<th>${lfEsc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${(block.columns||[]).map((c,i)=>`<td>${lfEsc(r[i]||'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'<em>Не заповнено</em>'}</div>`}if(block.type==='material_collection'){const items=Array.isArray(a.items)?a.items:[];return`<div class="dl-answer wide"><small>${lfEsc(block.title)}</small>${items.length?items.map(x=>{const urls=[...(x.links||[]),x.link].filter(Boolean).filter((v,i,arr)=>arr.indexOf(v)===i);return`<div style="padding:12px 0;border-bottom:1px solid #e5e7eb"><b>${lfEsc(x.title||'Матеріал')}</b>${x.description?`<div style="margin-top:6px"><b>Що важливого:</b> ${lfEsc(x.description).replace(/\n/g,'<br>')}</div>`:''}${x.directorNote?`<div style="margin-top:6px;color:#4b5563"><b>${block.collectionKind==='notes'?'Нотатка':'Як використати'}:</b> ${lfEsc(x.directorNote).replace(/\n/g,'<br>')}</div>`:''}${urls.map((u,i)=>`<div style="margin-top:5px"><a href="${lfEsc(u)}" target="_blank" rel="noopener">🔗 ${i===0?'Відкрити матеріал':'Додаткове посилання '+(i+1)} ↗</a></div>`).join('')}${(x.files||[]).map(f=>`<div style="margin-top:5px"><a href="${lfEsc(f.url||'#')}" target="_blank" rel="noopener">📎 ${lfEsc(f.name||'Файл')} ↗</a></div>`).join('')}</div>`}).join(''):'<em>Матеріалів ще немає</em>'}</div>`}if(block.type==='file'){const files=Array.isArray(a.files)?a.files:[];return`<div class="dl-answer"><small>${lfEsc(block.title)}</small>${files.length?files.map(f=>`<div><a href="${lfEsc(f.url||'#')}" target="_blank" rel="noopener">${lfEsc(f.name||'Файл')} ↗</a></div>`).join(''):'<em>Файл не додано</em>'}</div>`}if(block.type==='checklist'){const vals=Array.isArray(a.values)?a.values:[];return`<div class="dl-answer"><small>${lfEsc(block.title)}</small>${vals.length?vals.map(v=>`<span class="lf-chip">✓ ${lfEsc(v)}</span>`).join(' '):'<em>Не заповнено</em>'}</div>`}const value=String(a.value??oldValue(work,section,block)??'').trim();return`<div class="dl-answer"><small>${lfEsc(block.title)}</small><div>${value?lfEsc(value).replace(/\n/g,'<br>'):'<em>Не заповнено</em>'}</div></div>`}\nfunction oldValue(work,section,block){return work?.stages?.[section.id]?.[block.id]}\nfunction dlRenderAdminWork(work,feedback,schema){if(!work)return`<div class="lf-empty">Робочий документ ще не створено.</div>`;return(schema?.sections||[]).map(section=>{const f=feedback?.sections?.[section.id]||feedback?.stages?.[section.id]||{},state=work?.sectionStates?.[section.id]||work?.stages?.[section.id]||{},blocks=section.blocks||[],isResearch=section.id==='research-materials';let researchMeta='';if(isResearch){const counts={documentary:0,artistic:0,notes:0,total:0};for(const b of blocks){const a=dlAnswerFor(work,section,b)||{},items=Array.isArray(a.items)?a.items:[];counts[b.collectionKind]=items.length;counts.total+=items.length}researchMeta=`<div class="dl-research-summary"><span><b>${counts.documentary}</b> документальних</span><span><b>${counts.artistic}</b> художніх</span><span><b>${counts.notes}</b> нотаток</span></div>`}return`<article class="dl-admin-stage ${section.published===false?'unpublished':''}" data-admin-section="${lfEsc(section.id)}"><div class="dl-stage-head"><div><b>${lfEsc(section.title)}</b><small>${section.published===false?'Ще не опубліковано студентам':isResearch?(state.status==='collected'?'Первинну базу матеріалів сформовано':'Робочий накопичувальний етап'):state.submittedAt?`Подано ${lfEsc(new Date(state.submittedAt).toLocaleString('uk-UA'))}`:'У роботі'}</small></div><span class="lf-chip">${isResearch?(state.status==='collected'?'Первинний збір сформовано':'Робочий етап'):lfEsc(dlFeedbackStatusLabels[f.status||state.status||'draft']||'Чернетка')}</span></div>${researchMeta}<div class="dl-answer-grid">${blocks.map(b=>dlAdminBlockHtml(work,section,b)).join('')}</div>${isResearch?'':`<div class="dl-feedback-box"><label>Коментар викладача<textarea data-feedback-comment="${lfEsc(section.id)}" rows="3" placeholder="Коментар до цього розділу…">${lfEsc(f.comment||'')}</textarea></label><label>Статус<select data-feedback-status="${lfEsc(section.id)}">${Object.entries(dlFeedbackStatusLabels).map(([k,v])=>`<option value="${k}" ${String(f.status||state.status||'draft')===k?'selected':''}>${lfEsc(v)}</option>`).join('')}</select></label><button class="primary" type="button" data-save-feedback="${lfEsc(section.id)}">Зберегти відгук</button></div>`}</article>`}).join('')}\nasync function dlSaveDriveForStudent(st,url,key){const lab=dlLabForStudent(st.id);if(lab){lab.driveUrl=url;lab.updatedAt=new Date().toISOString();cache();await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{[DIRECTING_LABS_KEY]:clone(db[DIRECTING_LABS_KEY]),updatedAt:new Date().toISOString()},{merge:true})}if(key)await setDoc(doc(cloudDb,DIRECTING_LAB_WORK_COLLECTION,key),{driveUrl:url,updatedAt:new Date().toISOString()},{merge:true})}\n\nasync function openDirectingLab(studentId){\n  const st=(db.students||[]).find(s=>String(s.id)===String(studentId));if(!st)return;const lab=dlLabForStudent(st.id)||{},personalDrive=dlPersonalDriveForStudent(st),projects=dlProjectsForStudent(st.id),owned=projects.filter(p=>lfAuthorIds(p).length===1),shared=projects.filter(p=>lfAuthorIds(p).length>1),schema=await dlLoadSchema();const projectCard=p=>`<article class="lf-section" style="margin-top:10px"><div class="lf-detail-head"><div><div class="lf-meta"><span class="lf-chip">${lfEsc(dlProjectOwnershipText(p))}</span></div><h3 style="margin:8px 0 4px">${lfEsc(p.title||'Без назви')}</h3></div>${p.driveUrl?`<a class="ghost" href="${lfEsc(p.driveUrl)}" target="_blank" rel="noopener">Google Drive ↗</a>`:''}</div></article>`;\n  app.innerHTML=`<div class="lf-detail"><div class="lf-detail-head"><div><button class="ghost" id="dlBack">← Усі студенти</button><div class="dl-detail-person" style="margin-top:12px">${dlPhotoOrInitial(st,true)}<div><span class="eyebrow">РЕМС-${dlStudentGroup(st)} · персональна лабораторія</span><h2 style="margin:4px 0">${lfEsc(st.name||'Студент')}</h2><div class="lf-meta"><span class="lf-chip">${lfEsc(dlStatusLabel[lab.status]||dlStatusLabel.not_started)}</span><span class="lf-chip">${projects.length?`${projects.length} пов’язаних проєктів`:'Проєкт ще не визначено'}</span></div></div></div></div><button class="ghost" id="dlGoBuilder">⚙ Конструктор</button></div>\n  ${owned.length?`<section class="lf-section"><h3>Індивідуальний проєкт</h3>${owned.map(projectCard).join('')}</section>`:''}${shared.length?`<section class="lf-section"><h3>Спільний проєкт - тимчасово</h3>${shared.map(projectCard).join('')}</section>`:''}${!projects.length?`<section class="lf-section"><h3>Індивідуальний режисерський проєкт</h3><div class="lf-empty">Проєкт ще не визначено. Студент може почати з паспорта й сформулювати робочу назву.</div></section>`:''}\n  <section class="lf-section"><div class="dl-stage-head"><div><h3 style="margin:0">Персональна папка Google Drive</h3><div class="muted">Посилання бачить студент у своїй лабораторії. Туди можна складати сценарії, таблиці, референси й фінальні матеріали.</div></div></div><div class="dl-access-row"><input id="dlDriveUrl" type="url" value="${lfEsc(personalDrive||lab.driveUrl||owned[0]?.driveUrl||shared[0]?.driveUrl||'')}" placeholder="https://drive.google.com/drive/folders/…"><button class="ghost" id="dlSaveDrive">Зберегти</button><a class="ghost" id="dlOpenDrive" href="${lfEsc(personalDrive||lab.driveUrl||owned[0]?.driveUrl||shared[0]?.driveUrl||'#')}" target="_blank" rel="noopener">Відкрити ↗</a></div></section>\n  <section class="lf-section" id="dlAccessSection"></section><section class="lf-section"><h3>Робота студента</h3><div id="dlAdminWork"><div class="lf-empty">Активуй студентський доступ, щоб почати роботу.</div></div></section></div>`;\n  app.querySelector('#dlBack').onclick=renderDirectingLaboratory;app.querySelector('#dlGoBuilder').onclick=openDirectingLabConstructor;const access=app.querySelector('#dlAccessSection'),holder=app.querySelector('#dlAdminWork');let key=String((dlLabForStudent(st.id)||{}).accessKey||'').trim();\n  const showAccessLink=k=>{const url=dlStudentLabUrl(k);access.innerHTML=`<div class="dl-stage-head"><div><h3 style="margin:0">Студентський доступ</h3><div class="muted">Приватне персональне посилання. Студент бачить тільки власну лабораторію.</div></div><span class="lf-chip">Активовано</span></div><div class="dl-access-row"><input id="dlAccessUrl" readonly value="${lfEsc(url)}"><button class="ghost" id="dlCopyAccess">Копіювати</button><a class="ghost" href="${lfEsc(url)}" target="_blank" rel="noopener">Відкрити ↗</a></div>`;app.querySelector('#dlCopyAccess').onclick=async()=>{try{await navigator.clipboard.writeText(url);app.querySelector('#dlCopyAccess').textContent='Скопійовано ✓'}catch{app.querySelector('#dlAccessUrl').select();document.execCommand('copy')}}};\n  const loadAdminWork=async k=>{holder.innerHTML='<div class="lf-empty">Завантаження роботи…</div>';try{const{work,feedback}=await dlLoadStudentWork(k);holder.innerHTML=dlRenderAdminWork(work,feedback,schema);holder.querySelectorAll('[data-save-feedback]').forEach(btn=>btn.onclick=async()=>{const sid=btn.dataset.saveFeedback,comment=holder.querySelector(`[data-feedback-comment="${sid}"]`)?.value||'',status=holder.querySelector(`[data-feedback-status="${sid}"]`)?.value||'draft';btn.disabled=true;btn.textContent='Збереження…';try{const ref=doc(cloudDb,DIRECTING_LAB_FEEDBACK_COLLECTION,k),snap=await getDoc(ref),data=snap.exists()?snap.data():{},sections={...(data.sections||{}),[sid]:{comment,status,updatedAt:new Date().toISOString(),updatedBy:currentUser?.email||currentUser?.uid||''}};await setDoc(ref,{studentId:String(st.id),name:String(st.name||''),sections,updatedAt:new Date().toISOString()},{merge:true});btn.textContent='Збережено ✓';setTimeout(()=>{btn.textContent='Зберегти відгук';btn.disabled=false},1000)}catch(e){console.error(e);alert('Не вдалося зберегти відгук.');btn.disabled=false;btn.textContent='Зберегти відгук'}})}catch(e){console.error(e);holder.innerHTML='<div class="lf-empty">Не вдалося завантажити роботу студента.</div>'}};\n  app.querySelector('#dlSaveDrive').onclick=async()=>{const b=app.querySelector('#dlSaveDrive'),url=app.querySelector('#dlDriveUrl').value.trim();b.disabled=true;b.textContent='Збереження…';try{await dlSaveDriveForStudent(st,url,key);b.textContent='Збережено ✓';app.querySelector('#dlOpenDrive').href=url||'#';setTimeout(()=>{b.disabled=false;b.textContent='Зберегти'},900)}catch(e){console.error(e);alert('Не вдалося зберегти посилання.');b.disabled=false;b.textContent='Зберегти'}};\n  if(key){try{await dlEnsureStudentAccess(st)}catch(e){console.error(e)}showAccessLink(key);await loadAdminWork(key)}else{access.innerHTML=`<div class="dl-stage-head"><div><h3 style="margin:0">Студентський доступ</h3><div class="muted">Створи приватне посилання і надішли його студенту.</div></div><button class="primary" id="dlActivateAccess">Створити студентське посилання</button></div>`;app.querySelector('#dlActivateAccess').onclick=async()=>{const b=app.querySelector('#dlActivateAccess');b.disabled=true;b.textContent='Створення…';try{key=await dlEnsureStudentAccess(st);showAccessLink(key);await loadAdminWork(key)}catch(e){console.error(e);alert('Не вдалося створити посилання. '+(e?.message||''));b.disabled=false;b.textContent='Створити студентське посилання'}}}\n}\n\n(function injectDirectingLabV44Styles(){if(document.getElementById("remsDirectingLabV44Styles"))return;const st=document.createElement("style");st.id="remsDirectingLabV44Styles";st.textContent=`\n.dl-toolbar-actions{display:flex;flex-direction:column;align-items:flex-end;gap:10px}.dl-top-actions{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.dl-card-row{display:flex;gap:14px;align-items:flex-start}.dl-card-main{min-width:0;flex:1}.dl-student-photo,.dl-detail-photo{width:72px;height:88px;object-fit:cover;border-radius:14px;background:#eef2f7;border:1px solid #e5e7eb;flex:0 0 auto}.dl-student-photo-empty{display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;color:#64748b}.dl-detail-person{display:flex;gap:16px;align-items:center}.dl-detail-photo{width:86px;height:106px}.dl-access-row{display:grid;grid-template-columns:1fr auto auto;gap:8px;margin-top:12px}.dl-access-row input{min-width:0;border:1px solid #dbe1e8;border-radius:10px;padding:10px 12px;background:#f8fafc}.dl-admin-stage{border:1px solid #e4e8ee;border-radius:16px;padding:16px;margin:12px 0;background:#fff}.dl-admin-stage.unpublished{opacity:.72;border-style:dashed}.dl-stage-head{display:flex;justify-content:space-between;gap:14px;align-items:flex-start}.dl-stage-head small{display:block;color:#7a8492;margin-top:4px}.dl-answer-grid{display:grid;gap:9px;margin-top:13px}.dl-answer{padding:11px 12px;border-radius:12px;background:#f8fafc;border:1px solid #eef1f5}.dl-answer small{display:block;color:#718096;margin-bottom:5px}.dl-answer em{color:#9aa3af}.dl-readonly{background:#f5f3ff}.dl-feedback-box{display:grid;grid-template-columns:1fr 180px auto;gap:10px;align-items:end;margin-top:13px;padding-top:13px;border-top:1px solid #edf0f3}.dl-feedback-box label{display:grid;gap:5px;font-size:11px;color:#667085}.dl-feedback-box textarea,.dl-feedback-box select{border:1px solid #dbe1e8;border-radius:10px;padding:9px 10px;font:inherit;background:#fff}.dl-admin-table-wrap{overflow:auto}.dl-admin-table-wrap table{border-collapse:collapse;width:100%;min-width:520px}.dl-admin-table-wrap th,.dl-admin-table-wrap td{border:1px solid #e5e7eb;padding:7px;text-align:left;font-size:11px}.dl-builder-page{display:grid;gap:14px}.dl-builder-summary{display:grid;grid-template-columns:auto auto;gap:2px 8px;align-items:center;background:#111827;color:#fff;padding:14px 16px;border-radius:14px}.dl-builder-summary b{font-size:22px}.dl-builder-summary small{color:#cbd5e1}.dl-builder-section{border:1px solid #dfe4ea;border-radius:18px;background:#fff;padding:16px}.dl-builder-section-head,.dl-builder-block-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}.dl-builder-section-head h3{margin:3px 0 12px}.dl-builder-section-head>div:last-child,.dl-builder-block-head>div{display:flex;gap:5px}.dl-builder-grid{display:grid;grid-template-columns:220px 1fr;gap:10px}.dl-builder-grid label{display:grid;gap:5px;font-size:11px;font-weight:700;color:#4b5563}.dl-builder-grid .wide{grid-column:1/-1}.dl-builder-grid input,.dl-builder-grid textarea,.dl-builder-grid select{width:100%;border:1px solid #dbe1e8;border-radius:10px;padding:9px 10px;font:inherit;background:#fff}.dl-builder-grid .dl-check{display:flex;flex-direction:row;align-items:center;gap:8px;grid-column:1/-1}.dl-builder-grid .dl-check input{width:auto}.dl-builder-blocks{display:grid;gap:9px;margin:14px 0}.dl-builder-block{border:1px solid #edf0f3;background:#f8fafc;border-radius:14px;padding:12px}.dl-builder-block-head{margin-bottom:9px}.dl-builder-savebar{position:sticky;bottom:12px;z-index:10;display:flex;justify-content:space-between;gap:16px;align-items:center;padding:12px 14px;background:#fffffff2;backdrop-filter:blur(10px);border:1px solid #dfe4ea;border-radius:14px;box-shadow:0 12px 40px #11182718}.dl-builder-savebar small{display:block;color:#6b7280;margin-top:3px}.dl-add-section{justify-self:start}.mini{padding:6px 8px!important;font-size:10px!important}.dl-research-summary{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.dl-research-summary span{background:#eef2ff;border:1px solid #c7d2fe;border-radius:10px;padding:8px 10px;font-size:11px;color:#3949ab}.dl-research-summary b{font-size:16px;margin-right:4px}\n@media(max-width:800px){.dl-toolbar-actions{align-items:stretch;width:100%}.dl-top-actions{justify-content:stretch}.dl-top-actions>*{flex:1}.dl-access-row,.dl-feedback-box,.dl-builder-grid{grid-template-columns:1fr}.dl-student-photo{width:62px;height:76px}.dl-detail-photo{width:72px;height:88px}.dl-builder-grid .wide{grid-column:auto}.dl-builder-savebar{align-items:stretch;flex-direction:column}.dl-builder-savebar .primary{width:100%}}\n`;document.head.appendChild(st)})();\n\nlet lfFilter="all";\nasync function largeforms(){\n  app.innerHTML='<div class="loading">Завантаження режисерської лабораторії…</div>';\n  await loadLargeForms();\n  await ensureLargeFormsStarterSeed();\n  await loadAllStudentMedia();\n  await ensureDirectingLabs();\n  renderDirectingLaboratory();\n}\nfunction renderLargeFormsList(){\n  const rows=largeFormsCache.filter(x=>lfFilter==="all"||(lfFilter==="mixed"?x.originGroup==="mixed":x.originGroup===lfFilter));\n  app.innerHTML=`<div class="lf-toolbar"><div><span class="eyebrow">Навчальні постановочні проєкти</span><h2 style="margin:4px 0 3px">Великі форми</h2><div class="muted">Окремий робочий простір для проєктів РЕМС-43 і РЕМС-44. Індустрійні «Проєкти» тут не використовуються.</div></div><div class="lf-tabs"><button class="lf-tab ${lfFilter==='all'?'active':''}" data-lf-filter="all">Усі</button><button class="lf-tab ${lfFilter==='43'?'active':''}" data-lf-filter="43">РЕМС-43</button><button class="lf-tab ${lfFilter==='44'?'active':''}" data-lf-filter="44">РЕМС-44</button><button class="lf-tab ${lfFilter==='mixed'?'active':''}" data-lf-filter="mixed">Спільні</button></div></div>\n  <div class="lf-grid">${rows.map(x=>{const members=(x.memberIds||[]).map(id=>db.students.find(s=>String(s.id)===String(id))).filter(Boolean);const status=lfNormalizeStatus(x.status);return `<button class="lf-card" data-lf-open="${lfEsc(x.id)}" style="--lf-color:${x.originGroup==='43'?'#2563eb':x.originGroup==='44'?'#7c3aed':x.originGroup==='mixed'?'#0f766e':'#64748b'}"><div class="lf-card-head"><div><div class="lf-meta"><span class="lf-chip">${lfGroupLabel(x.originGroup)}</span><span class="lf-chip">${lfStatusLabels[status]}</span></div><h3>${lfEsc(x.title||'Без назви')}</h3></div><span>→</span></div>${lfAuthorNames(x).length?`<div class="lf-team"><b>${lfAuthorNames(x).length>1?'Автори ідеї':'Автор ідеї'}:</b> ${lfEsc(lfAuthorNames(x).join(', '))}</div>`:''}<div class="lf-team">${members.length?`Команда: ${members.slice(0,4).map(s=>lfEsc(s.name)).join(', ')}${members.length>4?` +${members.length-4}`:''}`:'Команда ще не сформована'}</div>${x.driveUrl?'<div class="muted">☁ Папка Google Drive підключена</div>':'<div class="muted">Папка Google Drive ще не додана</div>'}</button>`}).join('')||'<div class="lf-empty">Поки немає жодної великої форми. Натисніть «+ Нова велика форма».</div>'}</div>`;\n  app.querySelectorAll('[data-lf-filter]').forEach(b=>b.onclick=()=>{lfFilter=b.dataset.lfFilter;renderLargeFormsList();});\n  app.querySelectorAll('[data-lf-open]').forEach(b=>b.onclick=()=>openLargeForm(b.dataset.lfOpen));\n}\n\nfunction lfMembersHtml(selected=[]){\n  const set=new Set((selected||[]).map(String));\n  return (db.students||[]).slice().sort((a,b)=>String(a.group||'').localeCompare(String(b.group||''),'uk')||String(a.name||'').localeCompare(String(b.name||''),'uk')).map(s=>`<label class="lf-member"><input type="checkbox" data-lf-member value="${lfEsc(s.id)}" ${set.has(String(s.id))?'checked':''}><span><b>${lfEsc(s.name)}</b><br><small>${lfEsc(studentGroupLabel(s)||s.group||'')}</small></span></label>`).join('');\n}\nfunction openLargeForm(id){\n  const x=largeFormsCache.find(v=>String(v.id)===String(id)); if(!x) return;\n  const members=(x.memberIds||[]).map(mid=>db.students.find(s=>String(s.id)===String(mid))).filter(Boolean);\n  app.innerHTML=`<div class="lf-detail"><div class="lf-detail-head"><div><button class="ghost" id="lfBack">← Усі великі форми</button><div style="margin-top:12px"><span class="eyebrow">${lfGroupLabel(x.originGroup)}</span><h2 style="margin:4px 0">${lfEsc(x.title||'Без назви')}</h2><div class="lf-meta"><span class="lf-chip">${lfStatusLabels[lfNormalizeStatus(x.status)]}</span><span class="lf-chip">${members.length} учасників</span>${lfAuthorNames(x).length?`<span class="lf-chip">${lfAuthorNames(x).length>1?'Автори ідеї':'Автор ідеї'}: ${lfEsc(lfAuthorNames(x).join(', '))}</span>`:''}</div></div></div><div class="lf-actions">${x.driveUrl?`<a class="primary" href="${lfEsc(x.driveUrl)}" target="_blank" rel="noopener">Відкрити Google Drive ↗</a>`:''}<button class="ghost" id="lfEdit">Редагувати</button><button class="danger" id="lfDelete">Видалити</button></div></div>\n  <section class="lf-section"><h3>Команда</h3><div class="lf-meta">${members.map(s=>`<span class="lf-chip">${lfEsc(s.name)} · ${lfEsc(studentGroupLabel(s)||s.group||'')}</span>`).join('')||'<span class="muted">Команда ще не сформована.</span>'}</div></section>\n  <section class="lf-section"><h3>Google Drive</h3>${x.driveUrl?`<div class="lf-drive"><span>☁ Уся робоча документація та матеріали проєкту зберігаються в окремій папці.</span><a href="${lfEsc(x.driveUrl)}" target="_blank" rel="noopener">Перейти до папки ↗</a></div>`:'<div class="lf-drive">Папку ще не підключено. У режимі редагування вставте посилання на окрему папку Google Drive цього проєкту.</div>'}</section>\n  </div>`;\n  app.querySelector('#lfBack').onclick=renderLargeFormsList;\n  app.querySelector('#lfEdit').onclick=()=>largeFormEditor(x);\n  app.querySelector('#lfDelete').onclick=async()=>{if(!confirm(`Видалити велику форму «${x.title||'Без назви'}»? Папка Google Drive не видаляється.`))return;await deleteLargeForm(x.id);renderLargeFormsList();};\n}\nfunction largeFormEditor(existing=null){\n  const x=existing||{originGroup:'unknown',status:'active',memberIds:[]};\n  app.innerHTML=`<div class="lf-detail"><div class="lf-detail-head"><div><button class="ghost" id="lfCancel">← Назад</button><h2>${existing?'Редагування великої форми':'Нова велика форма'}</h2></div></div><form id="lfForm">\n    <section class="lf-section"><div class="lf-form"><label class="full">Назва / робоча назва<input id="lfTitle" required value="${lfEsc(x.title||'')}" placeholder="Назва проєкту"></label><label>Група походження<select id="lfOrigin"><option value="unknown" ${!x.originGroup||x.originGroup==='unknown'?'selected':''}>Не визначено</option><option value="43" ${x.originGroup==='43'?'selected':''}>РЕМС-43</option><option value="44" ${x.originGroup==='44'?'selected':''}>РЕМС-44</option><option value="mixed" ${x.originGroup==='mixed'?'selected':''}>Спільний РЕМС-43 + РЕМС-44</option></select></label><label>Статус<select id="lfStatus">${Object.entries(lfStatusLabels).map(([k,v])=>`<option value="${k}" ${lfNormalizeStatus(x.status)===k?'selected':''}>${v}</option>`).join('')}</select></label><div class="full"><div style="font-size:11px;color:#4b5563;margin-bottom:6px">Автор / автори ідеї</div><div class="lf-member-grid">${(()=>{const aset=new Set(lfAuthorIds(x));return (db.students||[]).slice().sort((a,b)=>String(a.name||'').localeCompare(String(b.name||''),'uk')).map(s=>`<label class="lf-member"><input type="checkbox" data-lf-author value="${lfEsc(s.id)}" ${aset.has(String(s.id))?'checked':''}><span><b>${lfEsc(s.name)}</b><br><small>${lfEsc(studentGroupLabel(s)||s.group||'')}</small></span></label>`).join('')})()}</div></div></div></section>\n    <section class="lf-section"><h3>Команда</h3><div class="muted" style="margin-bottom:8px">Студент може бути одночасно учасником кількох великих форм.</div><div class="lf-member-grid">${lfMembersHtml(x.memberIds)}</div></section>\n    <section class="lf-section"><h3>Папка проєкту в Google Drive</h3><div class="lf-form"><label class="full">Посилання на папку<input id="lfDrive" type="url" value="${lfEsc(x.driveUrl||'')}" placeholder="https://drive.google.com/drive/folders/..."></label><div class="full muted">Тут зберігатимуться сценарії, режисерські документи, фото, відео, референси та інші матеріали. REMS Control зберігає посилання і структуру проєкту, а файли залишаються в Google Drive.</div></div></section>\n    <div class="profile-actions" style="margin-top:14px"><button type="button" class="ghost" id="lfCancel2">Скасувати</button><button type="submit" class="primary">Зберегти</button></div></form></div>`;\n  const cancel=()=>existing?openLargeForm(existing.id):renderLargeFormsList(); app.querySelector('#lfCancel').onclick=cancel;app.querySelector('#lfCancel2').onclick=cancel;\n  app.querySelector('#lfForm').onsubmit=async e=>{e.preventDefault();const btn=e.submitter; if(btn){btn.disabled=true;btn.textContent='Збереження…';}try{const memberIds=[...app.querySelectorAll('[data-lf-member]:checked')].map(el=>el.value);const authorIds=[...app.querySelectorAll('[data-lf-author]:checked')].map(el=>el.value);const authorNames=authorIds.map(id=>(db.students||[]).find(s=>String(s.id)===String(id))?.name).filter(Boolean);const cleanBase={...x};delete cleanBase.idea;delete cleanBase.concept;delete cleanBase.notes;const saved=await saveLargeForm({...cleanBase,title:app.querySelector('#lfTitle').value.trim(),authorIds,authorId:authorIds[0]||'',authorLabel:authorNames.join(', '),originGroup:app.querySelector('#lfOrigin').value,status:app.querySelector('#lfStatus').value,driveUrl:app.querySelector('#lfDrive').value.trim(),memberIds});openLargeForm(saved.id);}catch(err){console.error(err);alert('Не вдалося зберегти велику форму в хмару.');if(btn){btn.disabled=false;btn.textContent='Зберегти';}}};\n}\n\nconst views={dashboard,students,projects,largeforms,academic,calendar,schedule,industry};\n\n$$(".nav").forEach(b=>b.onclick=()=>switchView(b.dataset.view,b.querySelector("span")?.textContent||b.textContent.trim()));\n$("#quickAdd").onclick=()=>{\n  if(!cloudReady){\n    alert("Зачекайте кілька секунд: REMS Control ще завантажує хмарну базу.");\n    return;\n  }\n  if(currentView==="students"){\n    openNewStudentDialog();\n    return;\n  }\n  if(currentView==="largeforms"){\n    return;\n  }\n  if(currentView==="academic"){\n    openAcademicEditor();\n    return;\n  }\n  if(currentView==="industry"){\n    industryEditor();\n    return;\n  }\n  if(currentView==="projects"){\n    $("#projectDialog").showModal();\n  }\n};\nensureNewProjectLogoField();\nensureNewProjectPlanningFields();\nif($("#cancelEventCreate")) $("#cancelEventCreate").onclick=()=>{\n  $("#eventDialog").close();\n  $("#eventForm").reset();\n};\nif($("#cancelProjectCreate")) $("#cancelProjectCreate").onclick=()=>{\n  $("#projectDialog").close();\n  $("#projectForm").reset();\n  newProjectPlannedDates.clear();\n  newProjectWorkBlocks.clear();\n  newProjectDateRosters.clear();\n  newProjectBaseTeam.clear();\n  renderNewProjectDates();\n};\n\n$("#saveProject").onclick=async e=>{\n  e.preventDefault();\n  const name=$("#projectName").value.trim(); if(!name)return;\n  const btn=e.currentTarget;\n  btn.disabled=true; btn.textContent="Збереження…";\n  try{\n    const dates=[...newProjectPlannedDates].sort();\n    if(!dates.length) throw new Error("Додайте хоча б одну дату проєкту.");\n    for(const d of dates){\n      const b=ensureNewProjectBlock(d);\n      if(!String(b.type||"").trim()) throw new Error(`Вкажіть вид роботи для ${fmt(d)}.`);\n      if(b.timeUndetermined===false&&b.startTime&&b.endTime&&timeMinutes(b.startTime)>=timeMinutes(b.endTime)) throw new Error(`Некоректний час для ${fmt(d)}.`);\n    }\n    const project={id:"p_"+Date.now(),name,color:$("#projectColor").value,emoji:$("#projectEmoji").value||"◆",plannedDates:dates,createdAt:new Date().toISOString(),dateRosters:Object.fromEntries(dates.map(d=>[d,[...ensureNewProjectRoster(d)].map(String)]))};\n    const logoFile=$("#projectLogoFile")?.files?.[0];\n    if(logoFile) project.logoData=await compressProjectLogo(logoFile);\n    db.projects.push(project);\n    const createdEvents=dates.map(date=>{\n      const b=ensureNewProjectBlock(date);\n      return {projectId:project.id,date,type:String(b.type||"").trim(),startTime:b.timeUndetermined===false?(b.startTime||""):"",endTime:b.timeUndetermined===false?(b.endTime||""):"",timeUndetermined:b.timeUndetermined!==false,location:"",note:"",studentIds:[...ensureNewProjectRoster(date)].map(String),studentRoles:{}};\n    });\n    db.events.push(...createdEvents);\n    const allDraftIds=[...new Set(dates.flatMap(d=>[...ensureNewProjectRoster(d)].map(String)))];\n    allDraftIds.forEach(studentId=>{ if(!(db.assignments||[]).some(a=>String(a.projectId)===String(project.id)&&String(a.studentId)===String(studentId))) db.assignments.push({projectId:project.id,studentId,role:""}); });\n\n    const ok=await save();\n    if(!ok){\n      db.projects=db.projects.filter(x=>x.id!==project.id);\n      db.events=db.events.filter(x=>String(x.projectId)!==String(project.id));\n      db.assignments=(db.assignments||[]).filter(x=>String(x.projectId)!==String(project.id));\n      throw new Error("Не вдалося зберегти проєкт у хмарі.");\n    }\n    $("#projectDialog").close();\n    $("#projectForm").reset();\n    newProjectPlannedDates.clear();\n    newProjectWorkBlocks.clear();\n    newProjectDateRosters.clear();\n    newProjectBaseTeam.clear();\n    renderNewProjectDates();\n    switchView("projects","Проєкти");\n  }catch(err){\n    alert(err.message||"Не вдалося створити проєкт.");\n  }finally{\n    btn.disabled=false; btn.textContent="Зберегти";\n  }\n};\nconst createEventFromForm=async(notify=false,sourceBtn=null)=>{\n  const projectId=$("#eventProjectId").value,date=$("#eventDate").value,type=$("#eventType").value.trim();\n  if(!date||!type) return;\n\n  const timeUndetermined=!!$("#eventTimeUndetermined")?.checked;\n  const startTime=timeUndetermined?"":($("#eventStartTime")?.value||"");\n  const endTime=timeUndetermined?"":($("#eventEndTime")?.value||"");\n  if(!timeUndetermined&&startTime&&endTime&&timeMinutes(startTime)>=timeMinutes(endTime)){alert("Час завершення має бути пізніше за час початку.");return;}\n  const location=$("#eventLocation")?.value.trim()||"";\n  const presetDateRoster=projectDateRosterIds(pBy(projectId),date).map(id=>resolveStudentId(id)??id);\n  const event={projectId,date,type,startTime,endTime,timeUndetermined,location,studentIds:[...presetDateRoster],studentRoles:{}};\n\n  if(sourceBtn){\n    sourceBtn.disabled=true;\n    sourceBtn.dataset.originalText=sourceBtn.textContent;\n    sourceBtn.textContent=notify?"Збереження та надсилання…":"Збереження…";\n  }\n\n  try{\n    db.events.push(event);\n    const ok=await save();\n\n    if(!ok){\n      alert("Дата залишилась тільки на цьому пристрої. Перевірте з’єднання з Firebase.");\n      return;\n    }\n\n    if(notify){\n      try{\n        const pushResult=await notifyStudentsForEvent(event,"Нова подія");\n        if(pushResult?.sent===0){\n          alert("Подію збережено. У призначених студентів поки немає активних push-сповіщень.");\n        }else{\n          const failed=Number(pushResult?.failed||0);\n          alert(\n            `Подію збережено. Сповіщення надіслано: ${pushResult.sent}.` +\n            (failed ? ` Не вдалося доставити: ${failed}.` : "")\n          );\n        }\n      }catch(pushErr){\n        console.error("Schedule push failed:",pushErr);\n        alert("Подію збережено, але сповіщення не вдалося надіслати.");\n      }\n    }\n\n    $("#eventDialog").close();\n    $("#eventForm").reset();\n\n    if(document.querySelector("#projectCardDialog")?.open) openProjectCard(projectId);\n    else projects();\n  }finally{\n    if(sourceBtn){\n      sourceBtn.disabled=false;\n      sourceBtn.textContent=sourceBtn.dataset.originalText||"Зберегти";\n      delete sourceBtn.dataset.originalText;\n    }\n  }\n};\n\n$("#saveEvent").onclick=async e=>{\n  e.preventDefault();\n  await createEventFromForm(false,e.currentTarget);\n};\n$("#backupBtn").onclick=()=>{\n  const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});\n  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="REMS_Control_backup.json";a.click();URL.revokeObjectURL(a.href);\n};\n$("#restoreInput").onchange=async e=>{\n  const file=e.target.files[0]; if(!file)return;\n  try{const obj=JSON.parse(await file.text()); if(!obj.students||!obj.projects)throw 0; db=obj;await save();refreshCurrentView();alert("Резервну копію імпортовано.");}\n  catch{alert("Не вдалося прочитати файл резервної копії.");}\n  e.target.value="";\n};\n\nfunction ensureAuthStyles(){\n  if(document.querySelector("#remsAuthStyles")) return;\n  const style=document.createElement("style");\n  style.id="remsAuthStyles";\n  style.textContent=`\n    #authGate{position:fixed;inset:0;z-index:9999;background:#111318;display:grid;place-items:center;padding:24px}\n    #authGate .auth-card{width:min(420px,94vw);background:#fff;border-radius:22px;padding:26px;box-shadow:0 30px 90px #0007}\n    #authGate .auth-brand{display:flex;align-items:center;gap:12px;margin-bottom:22px}\n    #authGate .auth-logo{width:44px;height:44px;border-radius:13px;background:#111318;color:#fff;display:grid;place-items:center;font-weight:900}\n    #authGate h2{margin:0;font-size:23px}\n    #authGate p{margin:5px 0 0;color:#6b7280;font-size:13px}\n    #authGate label{display:grid;gap:6px;margin:13px 0;color:#374151;font-size:13px}\n    #authGate input{width:100%;border:1px solid #e5e7eb;border-radius:11px;padding:12px 13px;font-size:16px}\n    #authGate button{width:100%;border:0;border-radius:11px;padding:12px 14px;background:#111827;color:#fff;font-weight:700;cursor:pointer;margin-top:8px}\n    #authGate button:disabled{opacity:.55;cursor:not-allowed}\n    #authGate .auth-error{min-height:20px;margin-top:10px;color:#b91c1c;font-size:12px}\n    #logoutBtn{border:1px solid #343944;color:#c8ccd4;background:#1a1d23;border-radius:9px;padding:8px 10px;font-size:12px;text-align:center;cursor:pointer}\n    #authUser{color:#6f7683;font-size:10px;line-height:1.3;padding:4px 8px;overflow-wrap:anywhere}\n    .profile-main{display:grid;grid-template-columns:110px 1fr;gap:16px;align-items:start;margin-top:18px}\n    .profile-photo{width:110px;height:138px;border-radius:14px;background:#eef0f3;object-fit:cover;display:grid;place-items:center;color:#9ca3af;font-size:28px;overflow:hidden}\n    .profile-photo img{width:100%;height:100%;object-fit:cover}\n    .profile-contact{display:grid;gap:7px;font-size:13px}\n    .profile-contact a{color:#111827;text-decoration:none}\n    .profile-edit-form{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n    .profile-edit-form label{display:grid;gap:5px;font-size:12px;color:#4b5563}\n    .profile-edit-form input,.profile-edit-form textarea{border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font:inherit;width:100%}\n    .profile-edit-form textarea{min-height:86px;resize:vertical}\n    .profile-edit-form .full{grid-column:1/-1}\n    .profile-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:14px}\n    .link-list{display:grid;gap:7px;margin-top:8px}\n    .link-list a{display:inline-block;color:#111827;text-decoration:underline;text-underline-offset:2px}\n    .student-dialog{width:min(820px,96vw)!important;max-height:90vh}\n    .student-profile{padding:0!important}\n    .profile-hero{padding:26px;background:linear-gradient(135deg,#111827,#232936);color:#fff;border-radius:16px 16px 0 0}\n    .profile-hero-top{display:flex;justify-content:space-between;gap:18px;align-items:flex-start}\n    .profile-hero-title{display:flex;gap:20px;align-items:flex-start;min-width:0}\n    .profile-photo{width:124px;height:156px;border-radius:18px;background:#2f3542;object-fit:cover;display:grid;place-items:center;color:#cbd5e1;font-size:34px;overflow:hidden;box-shadow:0 10px 25px #0003;flex:0 0 auto}\n    .profile-photo img{width:100%;height:100%;object-fit:cover}\n    .profile-head-copy{min-width:0;padding-top:4px}\n    .profile-hero h2{margin:0;font-size:28px;line-height:1.08;color:#fff;max-width:430px}\n    .profile-hero .muted{color:#b9c0cc}\n    .profile-meta{display:flex;flex-wrap:wrap;gap:8px 12px;margin-top:8px;color:#d1d5db;font-size:12px}\n    .profile-hero .hero-actions{display:flex;gap:8px;flex:0 0 auto}\n    .profile-hero .hero-actions .ghost{background:#ffffff14;color:#fff;border:1px solid #ffffff26}\n    .profile-body{padding:22px}\n    .contact-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:2px}\n    .contact-item{background:#f6f7f9;border-radius:12px;padding:11px 12px;font-size:13px}\n    .contact-item b{display:block;font-size:11px;color:#6b7280;margin-bottom:3px}\n    .contact-item a{color:#111827;text-decoration:none}\n    .profile-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}\n    .profile-stat{background:#f6f7f9;border-radius:14px;padding:14px}\n    .profile-stat strong{font-size:24px}\n    .profile-section{border-top:1px solid #e5e7eb;padding-top:16px;margin-top:16px}\n    .profile-section-title{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}\n    .profile-section-title b{font-size:14px}\n    .project-pill{display:inline-flex;align-items:center;gap:6px;color:#fff;padding:6px 9px;border-radius:999px;font-size:12px}\n    .portfolio-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n    .portfolio-card{border:1px solid #e5e7eb;border-radius:12px;padding:11px 12px;background:#fff;text-decoration:none;color:#111827;font-size:12px}\n    .portfolio-card b{display:block;margin-bottom:3px}\n    .student-cal-toolbar{display:flex;gap:8px;align-items:center;justify-content:space-between;flex-wrap:wrap;margin-bottom:10px}\n    .student-cal-toggle{display:flex;gap:6px}\n    .student-cal-toggle button,.student-month-tab{border:1px solid #e5e7eb;background:#fff;border-radius:9px;padding:7px 9px;font-size:11px;cursor:pointer}\n    .student-cal-toggle button.active,.student-month-tab.active{background:#111827;color:#fff;border-color:#111827}\n    .student-month-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px}\n    .student-month-grid{display:grid;grid-template-columns:repeat(7,minmax(64px,1fr));gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden}\n    .student-month-head{background:#171a20;color:#fff;text-align:center;padding:7px 4px;font-size:10px;font-weight:700}\n    .student-month-day{background:#fff;min-height:78px;padding:6px;position:relative}\n    .student-month-day.empty{background:#f5f6f8}\n    .student-month-day.weekend{background:#fafafa}\n    .student-month-number{font-size:11px;font-weight:800;margin-bottom:5px}\n    .student-day-events{display:grid;gap:3px}\n    .student-day-event{font-size:9px;color:#fff;border-radius:5px;padding:3px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}\n    .student-day-count{position:absolute;top:5px;right:5px;font-size:9px;color:#6b7280}\n    .event-info-card{padding:0;overflow:hidden;border-radius:18px}\n    .event-info-head{padding:20px 22px;background:linear-gradient(135deg,#111827,#232936);color:#fff}\n    .event-info-head h2{margin:0;font-size:22px}\n    .event-info-head .muted{color:#cbd5e1;margin-top:5px}\n    .event-info-body{padding:20px 22px;display:grid;gap:12px}\n    .event-info-row{background:#f7f7f8;border-radius:12px;padding:12px 14px}\n    .event-info-row span{display:block;font-size:10px;color:#6b7280;margin-bottom:3px}\n    .event-info-row b{font-size:14px}\n    .event-info-actions{display:flex;justify-content:flex-end;gap:8px;padding:0 22px 20px}\n    .danger-inline{border:1px solid #fecaca!important;color:#b91c1c!important;background:#fff!important}\n    .danger-inline.armed{background:#b91c1c!important;color:#fff!important;border-color:#b91c1c!important}\n\n    .student-list-view{display:none}\n    .student-list-view.active{display:block}\n    .student-calendar-view{display:block}\n    .student-calendar-view.hidden{display:none}\n    @media(max-width:700px){\n      .student-month-grid{grid-template-columns:repeat(7,minmax(54px,1fr))}\n      .student-month-day{min-height:68px;padding:4px}\n      .student-day-event{font-size:8px}\n    }\n    .timeline-scroll{max-height:300px;overflow:auto;padding-right:4px}\n    .timeline{display:grid;gap:8px}\n    .timeline-row{display:grid;grid-template-columns:150px 1fr auto;gap:10px;align-items:center;background:#f7f7f8;border-radius:11px;padding:10px 11px;font-size:12px}\n    .timeline-date{font-weight:700}\n    .timeline-type{color:#4b5563}\n    .notes-card{background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:12px;white-space:pre-wrap}\n    .profile-empty{color:#9ca3af;font-size:12px}\n    @media(max-width:700px){\n      .profile-hero-top{display:block}\n      .profile-hero-title{align-items:flex-start}\n      .profile-hero .hero-actions{margin-top:14px}\n      .contact-grid,.portfolio-grid{grid-template-columns:1fr}\n      .timeline-row{grid-template-columns:1fr}\n      .profile-stats{grid-template-columns:repeat(3,1fr)}\n    }\n\n    .students-toolbar{display:grid;grid-template-columns:minmax(220px,1.3fr) repeat(3,minmax(150px,.7fr));gap:10px;margin-bottom:16px}\n    .students-toolbar input,.students-toolbar select{border:1px solid #e5e7eb;background:#fff;border-radius:11px;padding:11px 12px;width:100%}\n    .students-summary{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}\n    .summary-pill{background:#fff;border:1px solid #e5e7eb;border-radius:999px;padding:7px 10px;font-size:12px;color:#4b5563}\n    .students-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}\n    .student-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;cursor:pointer;transition:.16s transform,.16s box-shadow}\n    .student-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px #11182712}\n    .student-card:focus{outline:2px solid #111827;outline-offset:2px}.student-card:active{transform:translateY(0);box-shadow:inset 0 0 0 1px #11182722}\n    .project-card:focus{outline:2px solid #111827;outline-offset:2px}.project-card:hover{box-shadow:0 10px 28px #11182712}\n    .student-card-top{display:grid;grid-template-columns:72px 1fr;gap:12px;align-items:center;padding:14px}\n    .student-avatar{width:72px;height:90px;border-radius:12px;background:#eef0f3;display:grid;place-items:center;overflow:hidden;color:#9ca3af;font-size:24px}\n    .student-avatar img{width:100%;height:100%;object-fit:cover}\n    .student-card h3{margin:0 0 4px;font-size:15px;line-height:1.2}\n    .student-card-meta{color:#6b7280;font-size:11px}\n    .student-card-stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #eef0f3}\n    .student-card-stat{padding:10px 8px;text-align:center}\n    .student-card-stat strong{display:block;font-size:16px}\n    .student-card-stat span{font-size:10px;color:#6b7280}\n    .student-card-projects{padding:0 14px 14px}\n    .student-card-projects .chips{margin-top:0}\n    .status-free{color:#047857}\n    .status-busy{color:#92400e}\n    .status-conflict{color:#b91c1c}\n    @media(max-width:1100px){.students-grid{grid-template-columns:repeat(3,1fr)}.students-toolbar{grid-template-columns:1fr 1fr}}\n    @media(max-width:760px){.students-grid{grid-template-columns:repeat(2,1fr)}.students-toolbar{grid-template-columns:1fr}}\n    @media(max-width:520px){.students-grid{grid-template-columns:1fr}}\n\n    .calendar-toolbar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:14px}\n    .calendar-toolbar select,.calendar-toolbar input{border:1px solid #e5e7eb;background:#fff;border-radius:10px;padding:10px 11px}\n    .calendar-legend{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}\n    .legend-item{display:inline-flex;align-items:center;gap:6px;background:#fff;border:1px solid #e5e7eb;border-radius:999px;padding:6px 9px;font-size:11px}\n    .calendar-month{margin-bottom:18px}\n    .calendar-month-title{display:flex;justify-content:space-between;align-items:end;margin:0 0 8px}\n    .calendar-month-title h2{margin:0;font-size:18px}\n    .calendar-month-title span{font-size:11px;color:#6b7280}\n    .calendar-wrap{overflow:auto;background:#fff;border:1px solid #e5e7eb;border-radius:14px;max-height:72vh}\n    .calendar{border-collapse:separate;border-spacing:0;font-size:11px;min-width:max-content}\n    .calendar th,.calendar td{border-right:1px solid #eee;border-bottom:1px solid #eee;padding:5px;text-align:center;min-width:44px;height:36px}\n    .calendar th{position:sticky;top:0;background:#171a20;color:#fff;z-index:2}\n    .calendar th.name,.calendar td.name{position:sticky;left:0;min-width:230px;text-align:left;z-index:3}\n    .calendar td.name{background:#fff}\n    .calendar th.name{z-index:4}\n    .calendar .today-head{background:#374151}\n    .calendar td.day-cell{cursor:pointer;vertical-align:top}\n    .calendar td.day-cell:hover{background:#f8fafc}\n    .calendar .weekend{background:#fafafa}\n    .calendar .conflict{outline:3px solid #ef4444;outline-offset:-3px}\n    .busy{color:#fff;font-weight:700;border-radius:5px;padding:4px 5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:96px;margin:1px auto;font-size:10px}\n    .event-type-dot{font-size:9px;opacity:.9}\n    .calendar-summary{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 14px}\n    .calendar-summary .summary-pill{background:#fff}\n    .day-panel{padding:20px}\n    .day-panel-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:14px}\n    .day-panel h2{margin:0}\n    .day-event-list{display:grid;gap:9px}\n    .day-event-row{display:grid;grid-template-columns:18px 1fr auto;gap:10px;align-items:center;border:1px solid #e5e7eb;border-radius:12px;padding:10px 11px}\n    .day-event-row .dot{width:10px;height:10px}\n    .day-event-meta{font-size:12px;color:#6b7280;margin-top:2px}\n    .availability-card{margin-top:14px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:12px}\n    .availability-card b{display:block;margin-bottom:6px}\n    .availability-list{display:flex;flex-wrap:wrap;gap:6px}\n    .availability-chip{font-size:11px;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:5px 8px;display:inline-flex;align-items:baseline;gap:5px;max-width:100%}\n    .student-identity-name{font-weight:700;white-space:nowrap}.student-identity-meta{font-size:9px;color:#64748b;font-weight:600;white-space:nowrap}.active .student-identity-meta,.event-person.active .student-identity-meta,.planner-person-toggle.active .student-identity-meta,.project-student-chip.active .student-identity-meta{color:inherit;opacity:.8}\n    .availability-title{display:grid;gap:2px;margin-bottom:7px}.availability-title b{margin:0}.availability-title small{font-size:9px;color:#64748b;font-weight:600}\n    .day-busy-elsewhere{grid-column:1/-1;background:#fff7ed;border-color:#fed7aa}\n    .day-group-filter{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin:0 0 9px;padding:9px 10px;background:#fff;border:1px solid #e5e7eb;border-radius:14px}\n    .day-filter-label{font-size:10px;font-weight:800;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-right:2px}\n    .day-group-tab{border:1px solid #dfe3e8;background:#fff;border-radius:999px;padding:7px 10px;cursor:pointer;font:inherit;font-size:11px;color:#374151}\n    .day-group-tab.active{background:#111827;color:#fff;border-color:#111827;font-weight:800}\n    .day-project-switcher{display:flex;gap:7px;flex-wrap:wrap;margin:0 0 14px;padding:10px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px}\n    .day-project-tab{display:inline-flex;align-items:center;gap:7px;border:1px solid #dfe3e8;background:#fff;border-radius:999px;padding:7px 10px;cursor:pointer;font:inherit;font-size:11px;color:#374151}\n    .day-project-tab b{margin:0;background:#f3f4f6;border-radius:999px;padding:2px 6px;font-size:10px}\n    .day-project-tab.active{border-color:var(--day-project-color,#111827);box-shadow:inset 0 0 0 1px var(--day-project-color,#111827);font-weight:800}\n    .day-project-tab-logo{width:24px;height:17px;object-fit:contain;border-radius:4px;background:#fff}\n    .day-project-event-button{width:100%;text-align:left;background:#fff;cursor:pointer;font:inherit;color:inherit}\n    .day-project-event-button.active{box-shadow:inset 4px 0 0 currentColor}\n    .day-event-dimmed{opacity:.45}\n    .day-project-focus-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:14px;padding:11px 12px;border:1px solid #e5e7eb;border-left:5px solid var(--day-project-color,#6b7280);border-radius:12px;background:#fff}\n    .day-project-focus-head>div:first-child{display:flex;align-items:center;gap:10px}\n    .day-project-focus-head span{display:grid;gap:1px}.day-project-focus-head small{font-size:9px;color:#6b7280;font-weight:800}.day-project-focus-head b{font-size:13px}.day-project-focus-head em{font-size:10px;color:#6b7280;font-style:normal}\n    .day-project-focus-logo{width:42px;height:28px;object-fit:contain;border-radius:6px;background:#fff}\n    .availability-card-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:6px}.availability-card-head b{margin:0}\n    .day-add-selected{font-size:10px;padding:6px 9px;white-space:nowrap}.day-add-selected:disabled{opacity:.45;cursor:not-allowed}\n    .day-free-person{display:inline-flex;align-items:center;border:1px solid #e5e7eb;background:#fff;border-radius:999px;overflow:hidden}.day-free-person.selected{border-color:#111827;box-shadow:inset 0 0 0 1px #111827}.day-free-person .availability-chip{border:0;border-radius:0}.day-add-person{border:0;border-left:1px solid #e5e7eb;background:#f9fafb;min-width:28px;height:28px;cursor:pointer;font-weight:900}.day-add-person.selected{background:#111827;color:#fff}\n    .day-add-hint{font-size:10px;color:#6b7280;margin-top:9px}\n    @media(max-width:760px){.day-project-focus-head,.availability-card-head{align-items:flex-start;flex-direction:column}.day-add-selected{width:100%}}\n\n    .schedule-controls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}\n    .schedule-controls select,.schedule-controls input{border:1px solid #e5e7eb;background:#fff;border-radius:10px;padding:10px 11px}\n    .schedule-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:16px}\n    .schedule-kpi{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:14px}\n    .schedule-kpi span{display:block;color:#6b7280;font-size:11px}\n    .schedule-kpi strong{display:block;font-size:24px;margin-top:5px}\n    .schedule-table-wrap{overflow:auto;background:#fff;border:1px solid #e5e7eb;border-radius:14px}\n    .schedule-table{width:100%;border-collapse:collapse;min-width:720px}\n    .schedule-table th,.schedule-table td{padding:11px 12px;border-bottom:1px solid #eef0f3;text-align:left;font-size:12px}\n    .schedule-table th{background:#171a20;color:#fff;position:sticky;top:0}\n    .schedule-table tr:hover td{background:#fafafa}\n    .score{display:inline-flex;align-items:center;justify-content:center;min-width:88px;border-radius:999px;padding:5px 9px;font-size:11px;font-weight:700}\n    .score-best{background:#dcfce7;color:#166534}\n    .score-good{background:#fef3c7;color:#92400e}\n    .score-hard{background:#fee2e2;color:#991b1b}\n    .busy-count{font-weight:700}\n    .schedule-note{font-size:11px;color:#6b7280}\n    .weekday-pill{display:inline-block;background:#f3f4f6;border-radius:999px;padding:4px 7px;font-size:10px}\n    .recommended-card{background:linear-gradient(135deg,#ecfdf5,#f0fdf4);border:1px solid #bbf7d0;border-radius:16px;padding:16px;margin-bottom:16px}\n    .recommended-card h2{margin:0 0 10px;font-size:16px}\n    .recommended-list{display:flex;gap:8px;flex-wrap:wrap}\n    .recommended-item{background:#fff;border:1px solid #d1fae5;border-radius:12px;padding:10px 12px;font-size:12px}\n    @media(max-width:760px){.schedule-kpis{grid-template-columns:repeat(2,1fr)}}\n\n    .project-detail{padding:0}\n    .project-hero{padding:24px;background:linear-gradient(135deg,#111827,#222936);color:#fff;border-radius:16px 16px 0 0}\n    .project-hero-top{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}\n    .project-title-wrap{display:flex;gap:14px;align-items:center}\n    .project-logo{width:64px;height:64px;border-radius:16px;display:grid;place-items:center;font-size:30px;background:#ffffff16;border:1px solid #ffffff20}\n    .project-hero h2{margin:0;font-size:26px}\n    .project-body{padding:22px}\n    .project-meta-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px}\n    .project-meta{background:#f6f7f9;border-radius:12px;padding:12px}\n    .project-meta span{display:block;font-size:11px;color:#6b7280}\n    .project-meta strong{display:block;font-size:22px;margin-top:4px}\n    .project-section{border-top:1px solid #e5e7eb;padding-top:16px;margin-top:16px}\n    .project-section-head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:10px}\n    .project-event-list{display:grid;gap:8px}\n    .project-event-row{display:grid;grid-template-columns:90px 1fr auto;gap:10px;align-items:center;background:#f7f7f8;border-radius:11px;padding:10px 11px}\n    @media(max-width:760px){.project-event-row{grid-template-columns:72px 1fr!important}.project-event-row>button{font-size:10px;padding:6px 7px}}\n    .project-students{display:flex;flex-wrap:wrap;gap:7px}\n    .project-student-chip{border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:6px 9px;font-size:12px;cursor:pointer;display:inline-flex;align-items:baseline;gap:5px}\n    .project-student-chip.active{background:#111827;color:#fff;border-color:#111827}\n    .project-edit-form{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n    .project-edit-form label{display:grid;gap:5px;font-size:12px;color:#4b5563}\n    .project-edit-form input,.project-edit-form textarea{border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font:inherit;width:100%}\n    .project-edit-form textarea{min-height:80px;resize:vertical}\n    .project-edit-form .full{grid-column:1/-1}\n    .event-edit-form{grid-template-columns:1fr!important;gap:14px!important}\n    .event-edit-form label{display:grid;gap:7px;font-size:12px;color:#4b5563}\n    .event-edit-form input,.event-edit-form textarea{width:100%;border:1px solid #dfe3e8;border-radius:11px;padding:11px 12px;font:inherit;background:#fff}\n    .event-edit-form textarea{min-height:90px;resize:vertical}\n    .event-time-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n    @media(max-width:620px){.event-time-grid{grid-template-columns:1fr}}\n\n    .project-logo-editor{display:flex;gap:14px;align-items:center;padding:12px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px}\n    .project-logo-preview{width:150px;height:90px;display:grid;place-items:center;background:#fff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden}\n    .project-logo-preview img{width:100%;height:100%;object-fit:contain}\n    .project-logo-controls{display:grid;gap:7px;flex:1}\n    .project-logo-controls input[type=file]{font-size:12px}\n\n    .project-danger{margin-top:18px;padding-top:14px;border-top:1px solid #fee2e2}\n    .project-calendar-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}\n    .project-view-switch{display:inline-flex;background:#f3f4f6;border-radius:10px;padding:3px}\n    .project-view-switch button{border:0;background:transparent;border-radius:8px;padding:7px 10px;font-size:11px;font-weight:700;cursor:pointer;color:#6b7280}\n    .project-view-switch button.active{background:#111827;color:#fff;box-shadow:0 1px 3px #0002}\n    .project-month-tabs{display:flex;gap:6px;overflow:auto;padding:2px 0 10px;scrollbar-width:thin}\n    .project-month-tab{white-space:nowrap;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:7px 10px;font-size:11px;cursor:pointer;text-transform:capitalize}\n    .project-month-tab.active{background:#111827;color:#fff;border-color:#111827}\n    .project-cal-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}\n    .project-cal-weekday{background:#171a20;color:#fff;text-align:center;padding:8px 4px;font-size:10px;font-weight:800}\n    .project-cal-day{border:0;background:#fff;min-height:88px;padding:7px;text-align:left;display:flex;flex-direction:column;gap:5px;cursor:default;font:inherit}\n    .project-cal-day.weekend{background:#fafafa}\n    .project-cal-day.empty{background:#f5f6f8}\n    .project-cal-day.has-event{cursor:pointer}\n    .project-cal-day.has-event:hover{background:#f8fafc;box-shadow:inset 0 0 0 2px #d1d5db}\n    .project-cal-number{font-size:11px;font-weight:800}\n    .project-cal-events{display:grid;gap:3px;min-width:0}\n    .project-cal-event{display:block;background:#f3f4f6;border-left:3px solid #6b7280;border-radius:5px;padding:4px 5px;font-size:9px;line-height:1.15;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n    @media(max-width:700px){.project-cal-day{min-height:68px;padding:5px}.project-cal-event{font-size:8px;padding:3px}.project-section-head{align-items:flex-start}.project-calendar-actions{justify-content:flex-end}}\n\n    .schedule-month{margin-bottom:18px}\n    .schedule-month-head{display:flex;justify-content:space-between;align-items:end;margin-bottom:8px}\n    .schedule-month-head h2{margin:0;font-size:18px}\n    .schedule-month-head span{font-size:11px;color:#6b7280}\n    .schedule-cal{display:grid;grid-template-columns:repeat(7,minmax(120px,1fr));gap:1px;background:#e5e7eb;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden}\n    .schedule-cal-head{background:#171a20;color:#fff;padding:9px 8px;text-align:center;font-size:11px;font-weight:700}\n    .schedule-day{background:#fff;min-height:118px;padding:8px;cursor:pointer;position:relative}\n    .schedule-day:hover{background:#f9fafb}\n    .schedule-day.empty{background:#f5f6f8;cursor:default}\n    .schedule-day.weekend{background:#fafafa}\n    .schedule-day-number{font-weight:800;font-size:12px;margin-bottom:7px}\n    .schedule-day-meta{display:grid;gap:5px}\n    .schedule-day-free{font-size:11px;color:#047857;font-weight:700}\n    .schedule-day-busy{font-size:10px;color:#6b7280}\n    .schedule-day-projects{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}\n    .schedule-mini-project{font-size:9px;color:#fff;border-radius:999px;padding:3px 5px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n    .schedule-score-badge{position:absolute;top:7px;right:7px;font-size:9px;font-weight:800;border-radius:999px;padding:3px 6px}\n    .schedule-score-best{background:#dcfce7;color:#166534}\n    .schedule-score-good{background:#fef3c7;color:#92400e}\n    .schedule-score-hard{background:#fee2e2;color:#991b1b}\n    .schedule-day.best{box-shadow:inset 0 0 0 2px #86efac}\n    .schedule-day.hard{box-shadow:inset 0 0 0 2px #fecaca}\n    @media(max-width:1100px){.schedule-cal{grid-template-columns:repeat(7,minmax(105px,1fr))}}\n    @media(max-width:760px){.schedule-cal{grid-template-columns:repeat(7,minmax(88px,1fr))}.schedule-day{min-height:102px;padding:6px}.schedule-day-busy{display:none}}\n\n    .event-people{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}\n    .event-person{font-size:10px;border:1px solid #e5e7eb;background:#fff;border-radius:999px;padding:4px 7px;display:inline-flex;align-items:baseline;gap:5px}\n    .event-person.active{background:#111827;color:#fff;border-color:#111827}\n    .event-assignment-box{margin-top:12px;padding:12px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px}\n    .event-assignment-box b{display:block;margin-bottom:8px}\n    .event-assignment-grid{display:flex;flex-wrap:wrap;gap:6px}\n    .event-assignment-note{font-size:11px;color:#6b7280;margin-top:7px}\n\n    .today-panel{display:grid;gap:14px;margin-bottom:18px}\n    .today-hero{background:linear-gradient(135deg,#111827,#232936);color:#fff;border-radius:18px;padding:18px}\n    .today-hero-top{display:flex;justify-content:space-between;gap:14px;align-items:flex-start}\n    .today-hero h2{margin:0;font-size:20px}\n    .today-hero .muted{color:#c7cbd3}\n    .today-stats{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}\n    .today-stat{background:#ffffff14;border:1px solid #ffffff1f;border-radius:999px;padding:6px 9px;font-size:11px}\n    .today-events{display:grid;gap:8px;margin-top:14px}\n    .today-event{display:grid;grid-template-columns:10px 1fr auto;gap:10px;align-items:center;background:#ffffff0d;border:1px solid #ffffff12;border-radius:12px;padding:10px}\n    .today-event .dot{width:10px;height:10px}\n    .today-event b{font-size:13px}\n    .today-event small{display:block;color:#c7cbd3;margin-top:2px}\n    .week-strip{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}\n    .week-day-card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:10px;min-height:130px;cursor:pointer}\n    .week-day-card:hover{box-shadow:0 8px 22px #11182710}\n    .week-day-card.today{box-shadow:inset 0 0 0 2px #111827}\n    .week-day-head{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px}\n    .week-day-name{font-size:11px;color:#6b7280;text-transform:capitalize}\n    .week-day-num{font-size:18px;font-weight:800}\n    .week-day-count{font-size:10px;color:#6b7280}\n    .week-event-list{display:grid;gap:4px}\n    .week-event-pill{font-size:9px;color:#fff;border-radius:6px;padding:4px 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n    .week-free{font-size:10px;color:#047857;margin-top:6px;font-weight:700}\n    @media(max-width:1000px){.week-strip{grid-template-columns:repeat(4,1fr)}}\n    @media(max-width:650px){.week-strip{grid-template-columns:repeat(2,1fr)}}\n    @media(max-width:520px){\n      .profile-hero-title{display:block}\n      .profile-photo{width:96px;height:120px;margin-bottom:12px}\n      .profile-stats{grid-template-columns:1fr}\n      .profile-edit-form{grid-template-columns:1fr}\n      .profile-edit-form .full{grid-column:auto}\n    }\n  `;\n  document.head.appendChild(style);\n}\n\nfunction showLogin(){\n  ensureAuthStyles();\n  let gate=document.querySelector("#authGate");\n  if(!gate){\n    gate=document.createElement("div");\n    gate.id="authGate";\n    gate.innerHTML=`\n      <form class="auth-card" id="authForm">\n        <div class="auth-brand">\n          <div class="auth-logo">R</div>\n          <div><h2>REMS Control</h2><p>Увійдіть, щоб відкрити систему</p></div>\n        </div>\n        <label>Email<input id="authEmail" type="email" autocomplete="username" required></label>\n        <label>Пароль<input id="authPassword" type="password" autocomplete="current-password" required></label>\n        <button id="authSubmit" type="submit">Увійти</button>\n        <div class="auth-error" id="authError"></div>\n      </form>`;\n    document.body.appendChild(gate);\n\n    gate.querySelector("#authForm").onsubmit=async e=>{\n      e.preventDefault();\n      const email=gate.querySelector("#authEmail").value.trim();\n      const password=gate.querySelector("#authPassword").value;\n      const btn=gate.querySelector("#authSubmit");\n      const err=gate.querySelector("#authError");\n      err.textContent="";\n      btn.disabled=true;\n      btn.textContent="Вхід…";\n      try{\n        await signInWithEmailAndPassword(auth,email,password);\n      }catch(ex){\n        console.error(ex);\n        err.textContent="Не вдалося увійти. Перевірте email і пароль.";\n        btn.disabled=false;\n        btn.textContent="Увійти";\n      }\n    };\n  }\n  gate.style.display="grid";\n}\n\nfunction hideLogin(){\n  const gate=document.querySelector("#authGate");\n  if(gate) gate.style.display="none";\n}\n\nfunction ensureLogout(){\n  ensureAuthStyles();\n  const box=document.querySelector(".sidebar-bottom");\n  if(!box) return;\n  let userEl=document.querySelector("#authUser");\n  if(!userEl){\n    userEl=document.createElement("div");\n    userEl.id="authUser";\n    box.prepend(userEl);\n  }\n  userEl.textContent=currentUser?.email||"";\n\n  let btn=document.querySelector("#logoutBtn");\n  if(!btn){\n    btn=document.createElement("button");\n    btn.id="logoutBtn";\n    btn.textContent="Вийти";\n    btn.onclick=async()=>{ await signOut(auth); };\n    box.prepend(btn);\n  }\n}\n\nfunction clearLogout(){\n  document.querySelector("#logoutBtn")?.remove();\n  document.querySelector("#authUser")?.remove();\n}\n\n\nasync function ensureVoice14(){\n  if(!cloudDb || !cloudReady) return false;\n\n  // If Voice 14 already exists, do not duplicate it.\n  let p=db.projects.find(x=>String(x.name||"").toLowerCase().includes("голос країни"))\n       || db.projects.find(x=>String(x.name||"").toLowerCase().includes("голос 14"));\n  if(!p){\n    p={id:"voice14",name:"ГОЛОС 14",color:"#6D28D9",emoji:"🎤",description:"Вибір наосліп · Бої · Нокаути · Фінал"};\n    db.projects.push(p);\n  }\n\n  const norm=s=>String(s||"").toLowerCase().replace(/[’'`]/g,"").trim();
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
    setStatus("v44.9 · Firebase не налаштовано");
    dashboard();
    cloudInitializing=false;
    return;
  }

  try{
    setStatus("v44.9 · завантаження хмари…");
    if(!firebaseApp) firebaseApp=initializeApp(cfg);
functions=getFunctions(firebaseApp,"europe-west1");
    cloudDb=getFirestore(firebaseApp);
    mediaStorage=getStorage(firebaseApp);
    const ref=doc(cloudDb,"rems_control",CLOUD_DOC);
    const snap=await getDoc(ref);

    if(snap.exists()){
      const remote=snap.data();
      db={
        ...clone(remote),
        students:remote.students||[],
        projects:remote.projects||[],
        events:remote.events||[],
        assignments:remote.assignments||[],
        lessons:remote.lessons||[],
        settings:remote.settings||{},
        academicImport:remote.academicImport||null
      };
      const timeMigrationChanged=normalizeUndeterminedTimes(db);
      // Матеріалізуємо старі успадковані склади й чистимо лише тих, кого вже немає в команді.
      const rosterMigrationChanged=normalizeAllProjectEventRosters();
      // v40.4: вбудовані індивідуальні завжди додаються ПІСЛЯ читання хмари.
      mergeFisherIndividualLessons(fisherBundledLessons());
      cache();
      if(timeMigrationChanged || rosterMigrationChanged){
        // v39 SAFE BOOT: normalize only in memory. Persist only after an explicit user edit.
        console.info("Safe boot: in-memory normalization applied; cloud data was not rewritten.");
      }
    }else{
      await setDoc(ref,{...coreDbSnapshot(),updatedAt:new Date().toISOString()},{merge:false});
    }

    cloudReady=true;
    setWriteUiReady(true);

    // v40.3: індивідуальні заняття зберігаються окремо від головного документа.
    // Вони підтягуються автоматично, тож після перезавантаження кнопка не потрібна.
    await loadFisherIndividualScheduleCloud();

    // v39 SAFE BOOT: do not auto-install/replace any schedule data on application update.
    // The official schedule is refreshed only by an explicit user action in “Розклад занять”.

    // One-time acknowledgement reset. Only old confirmations are removed;
    // projects, events, assignments and students remain untouched.
    try{
      setStatus("v44.9 · обнулення ознайомлень…");
      const resetCount=await resetAllAcknowledgementsOnce(ref);
      if(resetCount>0) console.info(`Обнулено ознайомлень: ${resetCount}`);
    }catch(err){
      console.error("Acknowledgement reset failed:",err);
      setStatus("v44.9 · помилка обнулення ознайомлень");
      throw err;
    }

    setStatus("v44.9 · хмара ✓");

    if(!localStorage.getItem("rems_public_existing_profiles_v37")){
      let changed=false;
      db.students=db.students.map(s=>{
        const pid=publicProfileIdFor(s);
        if(!REMS44_PUBLIC_SEED[pid]) return s;
        const pp=publicProfileFor(s);
        if(pp?.published===true) return s;
        changed=true;
        return {...s,publicProfile:{...pp,published:true}};
      });
      if(changed){
        cache();
        try{
          await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{...coreDbSnapshot(),updatedAt:new Date().toISOString()},{merge:false});
        }catch(err){console.error("Public migration save failed:",err);}
      }
      localStorage.setItem("rems_public_existing_profiles_v37","1");
    }

    if(!localStorage.getItem("rems_public_docs_seed_v37")){
      try{
        for(const s of db.students){
          if(publicProfileFor(s)?.published===true) await publishOnePublicProfile(s);
        }
        localStorage.setItem("rems_public_docs_seed_v37","1");
      }catch(err){console.error("Public profile seeding failed:",err);}
    }

    // v22 - one-time refresh of every already published profile so the public site
    // immediately receives the structured professional data without opening students one by one.
    if(!localStorage.getItem("rems_public_professional_sync_v22")){
      try{
        for(const s of db.students){
          if(publicProfileFor(s)?.published===true) await publishOnePublicProfile(s);
        }
        localStorage.setItem("rems_public_professional_sync_v22","1");
      }catch(err){ console.error("v22 public professional sync failed:",err); }
    }

    if(!localStorage.getItem("rems_student_media_migrated_v38")){
      let hadEmbedded=false;
      for(const s of db.students){
        const legacy=String(s?.photoData||s?.publicProfile?.photoData||"").trim();
        if(legacy){
          hadEmbedded=true;
          try{ await saveStudentMedia(s,legacy); }catch(err){ console.error("Legacy photo migration failed:",s.id,err); }
        }
      }
      if(hadEmbedded){
        db.students=db.students.map(s=>{
          const out={...s};
          delete out.photoData;
          if(out.publicProfile){
            out.publicProfile={...out.publicProfile};
            delete out.publicProfile.photoData;
          }
          return out;
        });
        cache();
        try{
          await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{...coreDbSnapshot(),updatedAt:new Date().toISOString()},{merge:false});
        }catch(err){ console.error("Core media cleanup failed:",err); }
      }
      localStorage.setItem("rems_student_media_migrated_v38","1");
    }

    await loadAllStudentMedia();

    // v39 SAFE BOOT: never seed or repair project calendars automatically.
    // Existing project data in Firebase is authoritative and is not changed by code updates.

    // v40.8: never force the user back to Home when cloud loading finishes.
    // Keep whichever section the user is currently viewing (or the last section in this tab).
    try{
      refreshCurrentView();
    }catch(renderErr){
      console.error("Current view render error:",renderErr);
      // UI rendering errors must not disable a healthy Firebase connection.
    }

    onSnapshot(ref,s=>{
      if(!s.exists()) return;
      if(cloudWriting) return;
      const remote=s.data();
      applyingRemote=true;
      db={
        ...clone(remote),
        students:remote.students||[],
        projects:remote.projects||[],
        events:remote.events||[],
        assignments:remote.assignments||[],
        lessons:remote.lessons||[],
        settings:remote.settings||{},
        academicImport:remote.academicImport||null
      };
      normalizeUndeterminedTimes(db);
      syncAllProjectRostersToEvents();
      // v40.4: onSnapshot не має стирати вбудовані індивідуальні.
      mergeFisherIndividualLessons(fisherBundledLessons());
      cache();
      applyingRemote=false;

      // v40.8: a Firestore snapshot updates data only. It must never change navigation.
      loadAllStudentMedia().finally(()=>{
        try{
          refreshCurrentView();
        }catch(renderErr){
          console.error("View refresh error:",renderErr);
        }
      });
      setStatus("v44.9 · хмара ✓");
    },err=>{
      console.error(err);
      cloudReady=false;
      setWriteUiReady(false);
      setStatus("v44.9 · хмара недоступна");
    });

  }catch(err){
    console.error(err);
    cloudReady=false;
    setWriteUiReady(false);
    setStatus("v44.9 · хмара недоступна");
    try{ dashboard(); }catch(renderErr){ console.error("Offline dashboard render error:",renderErr); }
  }finally{
    cloudInitializing=false;
  }
}


async function bootstrapAuth(){
  const cfg=window.REMS_FIREBASE_CONFIG;
  if(!cfg){
    setStatus("v44.9 · Firebase не налаштовано");
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
        setStatus("v44.9 · вхід ✓");
        if(!cloudReady) await initCloud();
      }else{
        cloudReady=false;
        setWriteUiReady(false);
        clearLogout();
        showLogin();
        setStatus("v44.9 · потрібен вхід");
      }
    });
  }catch(err){
    console.error(err);
    setStatus("v44.9 · помилка авторизації");
    showLogin();
  }
}

window.addEventListener("online",()=>{
  if(currentUser && !cloudReady) initCloud();
});

setWriteUiReady(false);
ensureNewProjectLogoField();
ensureEventTimeLocationFields();


// ===== REMS Control v13: unified occupancy (lessons + projects), built on stable v11 =====
const OCC_V13_PAIR_SLOTS=[
  {n:"1",label:"1 пара",start:"09:00",end:"10:20"},
  {n:"2",label:"2 пара",start:"10:40",end:"12:00"},
  {n:"3",label:"3 пара",start:"12:30",end:"13:50"},
  {n:"4",label:"4 пара",start:"14:10",end:"15:30"},
  {n:"5",label:"5 пара",start:"15:40",end:"17:00"},
  {n:"6",label:"6 пара",start:"17:10",end:"18:30"},
  {n:"7",label:"7 пара",start:"18:40",end:"20:00"},
  {n:"other",label:"Без часу / інший час",start:"",end:""}
];
function occV13ActivityInSlot(a,slot){
  if(slot.n==="other"){
    if(!a?.startTime||!a?.endTime) return true;
    return !OCC_V13_PAIR_SLOTS.slice(0,7).some(x=>eventsOverlap({...a,date:"2000-01-01"},{date:"2000-01-01",startTime:x.start,endTime:x.end}));
  }
  if(!a?.startTime||!a?.endTime) return false;
  return eventsOverlap({...a,date:"2000-01-01"},{date:"2000-01-01",startTime:slot.start,endTime:slot.end});
}
function occV13Card(a){
  if(a.source==="lesson"){
    const meta=[a.lessonType||"Заняття",eventTimeText(a),a.location?`ауд. ${a.location}`:""].filter(Boolean).join(" · ");
    return `<div class="occ13-card occ13-lesson"><b>🎓 ${esc(a.title||"Заняття")}</b><small>${esc(meta)}</small></div>`;
  }
  const p=pBy(a.projectId);
  if(!p) return "";
  const meta=[a.type||"Проєкт",eventTimeText(a),a.location||""].filter(Boolean).join(" · ");
  return `<div class="occ13-card occ13-project" style="border-left-color:${esc(p.color||'#6b7280')}"><b>🎬 ${esc(p.name)}</b><small>${esc(meta)}</small></div>`;
}
function occV13Controls(mode,date,group1,group2){
  const groups=[...new Set((db.students||[]).map(st=>String(st.group||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"uk",{numeric:true}));
  const opts=(selected,second=false)=>`<option value="">${second?"Друга група - не вибрано":"Усі групи"}</option>`+groups.map(g=>`<option value="${esc(g)}" ${g===selected?"selected":""}>${esc(g)}</option>`).join("");
  return `<div class="schedule-controls occ13-controls">
    <div class="occ13-modes"><button type="button" class="ghost ${mode==='day'?'active':''}" data-occ13-mode="day">День</button><button type="button" class="ghost ${mode==='week'?'active':''}" data-occ13-mode="week">Тиждень</button><button type="button" class="ghost" data-occ13-mode="month">Місяць</button></div>
    <input type="date" id="occ13Date" value="${esc(date)}">
    <select id="occ13Group1">${opts(group1,false)}</select>
    <select id="occ13Group2">${opts(group2,true)}</select>
    <label class="occ13-check"><input type="checkbox" id="occ13Lessons" checked> 🎓 Заняття</label>
    <label class="occ13-check"><input type="checkbox" id="occ13Projects" checked> 🎬 Проєкти</label>
    <input id="occ13Search" placeholder="Пошук студента…">
  </div>`;
}
function openUnifiedOccupancyV13(mode="day",seed={}){
  const date=String(seed.date||localIsoDate());
  const group1=String(seed.group1||"");
  const group2=String(seed.group2||"");
  app.innerHTML=`${occV13Controls(mode,date,group1,group2)}<div id="occ13Kpis" class="schedule-kpis"></div><div id="occ13Mount"></div>`;
  const render=()=>{
    const chosenDate=$("#occ13Date").value||localIsoDate();
    const g1=$("#occ13Group1").value, g2=$("#occ13Group2").value;
    const selectedGroups=new Set([g1,g2].filter(Boolean));
    const q=$("#occ13Search").value.toLowerCase().trim();
    const showLessons=$("#occ13Lessons").checked, showProjects=$("#occ13Projects").checked;
    const students=(db.students||[]).filter(st=>(!selectedGroups.size||selectedGroups.has(String(st.group||"")))&&String(st.name||"").toLowerCase().includes(q));
    const activities=(st,d)=>studentActivitiesOnDate(st.id,d).filter(a=>(a.source!=="lesson"||showLessons)&&(a.source!=="project"||showProjects));
    if(mode==="day"){
      const busy=students.filter(st=>activities(st,chosenDate).length).length;
      const conflicts=students.filter(st=>studentDateHasConflict(st.id,chosenDate)).length;
      $("#occ13Kpis").innerHTML=`<span class="summary-pill">${new Date(chosenDate+'T12:00:00').toLocaleDateString('uk-UA',{weekday:'long',day:'numeric',month:'long'})}</span><span class="summary-pill">Студентів: <b>${students.length}</b></span><span class="summary-pill">Зайняті: <b>${busy}</b></span><span class="summary-pill">Вільні: <b>${Math.max(0,students.length-busy)}</b></span>${conflicts?`<span class="summary-pill occ13-danger">Конфлікти: <b>${conflicts}</b></span>`:""}`;
      $("#occ13Mount").innerHTML=`<div class="occ13-wrap"><table class="occ13-table"><thead><tr><th class="occ13-name">Студент</th>${OCC_V13_PAIR_SLOTS.map(sl=>`<th>${sl.label}${sl.start?`<small>${sl.start}–${sl.end}</small>`:""}</th>`).join("")}</tr></thead><tbody>${students.map(st=>{
        const all=activities(st,chosenDate);
        return `<tr><td class="occ13-name"><b>${esc(st.name)}</b><small>${esc(st.group||"")}</small></td>${OCC_V13_PAIR_SLOTS.map(sl=>{
          const arr=all.filter(a=>occV13ActivityInSlot(a,sl));
          if(!arr.length) return `<td class="occ13-free" data-date="${chosenDate}">🟢 <span>Вільний</span></td>`;
          const conflict=arr.length>1&&arr.some((a,i)=>arr.some((b,j)=>i!==j&&eventsOverlap(a,b)));
          return `<td class="${conflict?'occ13-conflict':''}" data-date="${chosenDate}">${conflict?'<div class="occ13-conflict-label">⚠️ КОНФЛІКТ</div>':''}${arr.map(occV13Card).join("")}</td>`;
        }).join("")}</tr>`;
      }).join("")}</tbody></table></div>`;
    } else {
      const anchor=new Date(chosenDate+"T12:00:00"), shift=(anchor.getDay()+6)%7; anchor.setDate(anchor.getDate()-shift);
      const dates=Array.from({length:7},(_,i)=>{const x=new Date(anchor);x.setDate(anchor.getDate()+i);return localIsoDate(x)});
      const busy=students.filter(st=>dates.some(d=>activities(st,d).length)).length;
      $("#occ13Kpis").innerHTML=`<span class="summary-pill">Тиждень: <b>${dates[0]} - ${dates[6]}</b></span><span class="summary-pill">Студентів: <b>${students.length}</b></span><span class="summary-pill">Мають зайнятість: <b>${busy}</b></span><span class="summary-pill">Повністю вільні: <b>${Math.max(0,students.length-busy)}</b></span>`;
      $("#occ13Mount").innerHTML=`<div class="occ13-wrap"><table class="occ13-table"><thead><tr><th class="occ13-name">Студент</th>${dates.map(d=>`<th>${new Date(d+'T12:00:00').toLocaleDateString('uk-UA',{weekday:'short',day:'numeric',month:'short'})}</th>`).join("")}</tr></thead><tbody>${students.map(st=>`<tr><td class="occ13-name"><b>${esc(st.name)}</b><small>${esc(st.group||"")}</small></td>${dates.map(d=>{const arr=activities(st,d);if(!arr.length)return `<td class="occ13-free" data-date="${d}">🟢 <span>Вільний</span></td>`;const conflict=studentDateHasConflict(st.id,d);return `<td class="${conflict?'occ13-conflict':''}" data-date="${d}">${conflict?'<div class="occ13-conflict-label">⚠️ КОНФЛІКТ</div>':''}${arr.map(occV13Card).join("")}</td>`}).join("")}</tr>`).join("")}</tbody></table></div>`;
    }
    $$("#occ13Mount td[data-date]").forEach(td=>td.onclick=()=>showDay(td.dataset.date));
  };
  $$("[data-occ13-mode]").forEach(btn=>btn.onclick=()=>{
    const m=btn.dataset.occ13Mode;
    if(m==="month") return schedule();
    openUnifiedOccupancyV13(m,{date:$("#occ13Date").value,group1:$("#occ13Group1").value,group2:$("#occ13Group2").value});
  });
  ["#occ13Date","#occ13Group1","#occ13Group2","#occ13Lessons","#occ13Projects"].forEach(sel=>$(sel).onchange=render);
  $("#occ13Search").oninput=render;
  render();
}
(function installOccupancyV13(){
  const st=document.createElement("style"); st.textContent=`
    .occ13-controls{align-items:center}.occ13-modes{display:flex;gap:6px}.occ13-controls .active{background:#111827;color:#fff;border-color:#111827}.occ13-check{display:flex!important;align-items:center!important;gap:6px!important;white-space:nowrap;font-size:12px!important}.occ13-check input{width:auto!important;margin:0!important}
    .occ13-wrap{overflow:auto;background:#fff;border:1px solid #e5e7eb;border-radius:14px}.occ13-table{border-collapse:separate;border-spacing:0;min-width:1100px;width:100%;font-size:11px}.occ13-table th,.occ13-table td{border-right:1px solid #eef0f4;border-bottom:1px solid #eef0f4;padding:6px;vertical-align:top;min-width:128px}.occ13-table th{position:sticky;top:0;background:#f8fafc;z-index:2;text-align:center}.occ13-table th small{display:block;color:#6b7280;font-weight:500;margin-top:2px}.occ13-table .occ13-name{position:sticky;left:0;z-index:3;background:#fff;min-width:190px;max-width:230px}.occ13-table th.occ13-name{background:#f8fafc;z-index:4}.occ13-name small{display:block;color:#6b7280;margin-top:2px}.occ13-free{background:#f0fdf4;color:#166534;text-align:center;vertical-align:middle!important}.occ13-free span{font-weight:700}.occ13-card{padding:5px 6px;border-radius:7px;margin:0 0 4px;display:grid;gap:2px;line-height:1.2}.occ13-card b{font-size:10px}.occ13-card small{font-size:9px;color:#64748b}.occ13-lesson{background:#eff6ff;border-left:3px solid #2563eb}.occ13-project{background:#f8fafc;border-left:3px solid #6b7280}.occ13-conflict{background:#fff1f2}.occ13-conflict-label{font-size:9px;font-weight:900;color:#b91c1c;margin-bottom:4px}.occ13-danger{color:#b91c1c;border-color:#fecaca!important}
    @media(max-width:900px){.occ13-controls{display:grid!important;grid-template-columns:1fr 1fr}.occ13-modes{grid-column:1/-1}.occ13-table{min-width:1000px}}
  `; document.head.appendChild(st);
  const stableMonthSchedule=schedule;
  const enhancedScheduleV14=function(){
    stableMonthSchedule();
    const controls=document.querySelector(".schedule-controls");
    if(!controls||document.querySelector("#occ13DayBtn")) return;
    const modes=document.createElement("div");
    modes.className="occ13-modes";
    modes.innerHTML=`<button type="button" class="ghost" id="occ13DayBtn">День</button><button type="button" class="ghost" id="occ13WeekBtn">Тиждень</button><button type="button" class="ghost active">Місяць</button>`;
    controls.prepend(modes);
    $("#occ13DayBtn").onclick=()=>openUnifiedOccupancyV13("day",{group1:$("#schGroup")?.value||""});
    $("#occ13WeekBtn").onclick=()=>openUnifiedOccupancyV13("week",{group1:$("#schGroup")?.value||""});
  };
  // ВАЖЛИВО: views було створено раніше і зберегло посилання на стару schedule().
  // Оновлюємо і саму функцію, і роутер, щоб кнопки День / Тиждень / Місяць
  // реально з'являлися при переході у вкладку «Зайнятість».
  schedule=enhancedScheduleV14;
  if(typeof views!=="undefined") views.schedule=enhancedScheduleV14;
})();
// ===== /REMS Control v14 =====


// ===== REMS Control v39.3: safe schedule editor + filters =====
const academicV39State={month:null,group:"both",teacher:""};
const academicV39TeacherNorm=v=>academicImportNameNorm(v);
const academicV39AllTeachers=()=>[...new Set(academicLessons().map(l=>String(l.teacher||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"uk"));
const academicV39Pair=(l)=>String(academicPairNumberForLesson(l)||l?.pairNumber||"");
const academicV39TimeForPair=p=>ACADEMIC_PAIR_TIMES[String(p)]||["",""];
const academicV39Same=(a,b)=>["subject","lessonType","teacher","room","startTime","endTime"].every(k=>String(a?.[k]||"").trim()===String(b?.[k]||"").trim());
const academicV39IsBothGroups=ids=>{
  const rows=(ids||[]).map(id=>academicLessons().find(l=>String(l.id)===String(id))).filter(Boolean);
  return new Set(rows.map(l=>String(l.group||""))).size>1;
};
async function saveAcademicV39(){
  normalizeUndeterminedTimes(db);cache();
  if(!cloudReady||!cloudDb||!currentUser){setStatus("v39.3 · немає з’єднання");return false;}
  try{
    cloudWriting=true;setStatus("v40.9 · збереження розкладу…");
    // Вбудовані індивідуальні не пишемо в окрему колекцію і не залежимо від
    // Firestore Rules. Звичайні/офіційні/ручні заняття зберігаються як раніше.
    const coreLessons=(db.lessons||[]).filter(l=>l?.source!==FISHER_INDIVIDUAL_SCHEDULE_SOURCE);
    await setDoc(doc(cloudDb,"rems_control",CLOUD_DOC),{
      lessons:coreLessons,settings:db.settings||{},academicImport:db.academicImport||null,updatedAt:new Date().toISOString()
    },{merge:true});
    mergeFisherIndividualLessons(fisherBundledLessons());
    cache();setStatus("v40.9 · хмара ✓");return true;
  }catch(err){console.error(err);setStatus("v40.9 · помилка хмари");return false;}
  finally{setTimeout(()=>{cloudWriting=false;},250);}
}

function ensureAcademicV39Dialog(){
  let d=document.querySelector("#academicV39Dialog");
  if(d)return d;
  d=document.createElement("dialog");d.id="academicV39Dialog";d.className="student-dialog academic-dialog academic-v39-dialog";
  d.innerHTML='<div id="academicV39DialogBody"></div>';document.body.appendChild(d);return d;
}
function openAcademicV39Editor({ids=[],date="",pair=""}={}){
  ids=[...new Set((ids||[]).map(String).filter(Boolean))];
  const rows=ids.map(id=>academicLessons().find(l=>String(l.id)===id)).filter(Boolean);
  const first=rows[0]||null;
  const initialDate=date||first?.date||localIsoDate();
  const initialPair=String(pair||academicV39Pair(first)||"1");
  const initialGroups=rows.length?new Set(rows.map(r=>String(r.group||""))):new Set();
  const initialGroup=initialGroups.has("РЕМС-34")&&initialGroups.has("РЕМС-44")?"both":(first?.group?String(first.group):(academicV39State.group==="РЕМС-44"?"РЕМС-44":"РЕМС-34"));
  const d=ensureAcademicV39Dialog(),body=d.querySelector("#academicV39DialogBody");
  const base={subject:first?.subject||"",lessonType:first?.lessonType||"Практичне заняття",teacher:first?.teacher||"",room:first?.room||""};
  body.innerHTML=`<div class="academic-editor academic-v39-editor">
    <div class="project-section-head"><div><h2 style="margin:0">${first?"Редагувати заняття":"Додати заняття"}</h2><div class="muted">Зміни зберігаються тільки в розкладі. Проєкти не перезаписуються.</div></div><button type="button" class="ghost" id="academicV39Close">Закрити</button></div>
    <form id="academicV39Form" class="academic-v39-form">
      <label>Дата<input id="academicV39Date" type="date" required value="${esc(initialDate)}"></label>
      <label>Пара<select id="academicV39Pair">${Object.keys(ACADEMIC_PAIR_TIMES).map(p=>`<option value="${p}" ${p===initialPair?"selected":""}>${p} пара · ${ACADEMIC_PAIR_TIMES[p][0]}–${ACADEMIC_PAIR_TIMES[p][1]}</option>`).join("")}</select></label>
      <label>Група<select id="academicV39Group"><option value="РЕМС-34" ${initialGroup==="РЕМС-34"?"selected":""}>РЕМС-34</option><option value="РЕМС-44" ${initialGroup==="РЕМС-44"?"selected":""}>РЕМС-44</option><option value="both" ${initialGroup==="both"?"selected":""}>РЕМС-34 + РЕМС-44</option></select></label>
      <label>Вид заняття<select id="academicV39Type">${academicLessonTypes.map(t=>`<option value="${esc(t)}" ${String(base.lessonType)===t?"selected":""}>${esc(academicDisplayLessonType(t))}</option>`).join("")}</select></label>
      <label class="full">Дисципліна<input id="academicV39Subject" required value="${esc(base.subject)}"></label>
      <label>Викладач<input id="academicV39Teacher" value="${esc(base.teacher)}" list="academicV39TeacherList"><datalist id="academicV39TeacherList">${academicV39AllTeachers().map(t=>`<option value="${esc(t)}"></option>`).join("")}</datalist></label>
      <label>Аудиторія<input id="academicV39Room" value="${esc(base.room)}" placeholder="Обов’язково вкажіть або залиште порожнім"></label>
      <div class="full academic-v409-individual-picker" id="academicV409IndividualPicker" hidden></div>
      ${first?`<label class="full">Застосувати<select id="academicV39Scope"><option value="one">Тільки до цього заняття / цієї дати</option><option value="similar">До всіх таких занять цього викладача й дисципліни</option></select></label>`:""}
      <div class="dialog-actions academic-actions full">${first?'<button type="button" class="danger ghost" id="academicV39Delete">Видалити</button>':""}<button type="button" class="ghost" id="academicV39Cancel">Скасувати</button><button type="submit" class="primary">Зберегти</button></div>
    </form></div>`;
  const typeSelect=body.querySelector("#academicV39Type"),groupSelect=body.querySelector("#academicV39Group"),picker=body.querySelector("#academicV409IndividualPicker");
  const initialIndividualIds=rows.filter(r=>String(r.lessonType||"").toLowerCase().includes("індив")).flatMap(r=>(r.studentIds||[]).map(String));
  const renderIndividualPicker=()=>{
    const isIndividual=String(typeSelect.value||"").toLowerCase().includes("індив");
    picker.hidden=!isIndividual;
    if(!isIndividual){picker.innerHTML="";return;}
    const groups=groupSelect.value==="both"?["РЕМС-34","РЕМС-44"]:[groupSelect.value];
    const selected=new Set([...picker.querySelectorAll('input[type="checkbox"]:checked')].map(x=>String(x.value)));
    if(!picker.dataset.ready) initialIndividualIds.forEach(id=>selected.add(String(id)));
    const sts=(db.students||[]).filter(st=>groups.includes(String(st.group||""))).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),"uk"));
    picker.innerHTML=`<div class="academic-v409-pick-head"><div><b>Студенти індивідуального заняття</b><small>Оберіть одного або двох студентів на цю пару.</small></div><span id="academicV409PickCount">${selected.size}/2</span></div><div class="academic-v409-pick-grid">${sts.map(st=>`<label><input type="checkbox" value="${esc(String(st.id))}" ${selected.has(String(st.id))?"checked":""}><span>${esc(st.name||"Студент")}<small>${esc(st.group||"")}</small></span></label>`).join("")||'<span class="muted">Студентів немає.</span>'}</div>`;
    picker.dataset.ready="1";
    const refreshCount=()=>{const checked=[...picker.querySelectorAll('input[type="checkbox"]:checked')];const c=picker.querySelector("#academicV409PickCount");if(c)c.textContent=`${checked.length}/2`;};
    picker.querySelectorAll('input[type="checkbox"]').forEach(ch=>ch.onchange=()=>{
      const checked=[...picker.querySelectorAll('input[type="checkbox"]:checked')];
      if(checked.length>2){ch.checked=false;alert("На одну пару можна вибрати максимум двох студентів.");}
      refreshCount();
    });
    refreshCount();
  };
  typeSelect.onchange=renderIndividualPicker;
  groupSelect.onchange=()=>{picker.dataset.ready="";renderIndividualPicker();};
  renderIndividualPicker();
  body.querySelector("#academicV39Close").onclick=()=>d.close();body.querySelector("#academicV39Cancel").onclick=()=>d.close();
  if(first) body.querySelector("#academicV39Delete").onclick=async()=>{
    const scope=body.querySelector("#academicV39Scope")?.value||"one";
    if(!confirm(scope==="similar"?"Видалити всі такі заняття цього викладача й дисципліни?":"Видалити це заняття?"))return;
    const beforeLessons=clone(db.lessons||[]),beforeSettings=clone(db.settings||{});
    let removeIds=ids.slice();
    if(scope==="similar"){
      const subj=academicV39TeacherNorm(first.subject),teach=academicV39TeacherNorm(first.teacher);
      const groups=new Set(rows.map(r=>String(r.group||"")));
      removeIds=academicLessons().filter(l=>academicV39TeacherNorm(l.subject)===subj&&academicV39TeacherNorm(l.teacher)===teach&&groups.has(String(l.group||""))).map(l=>String(l.id));
    }
    const bundledIds=new Set(fisherBundledLessons().map(l=>String(l.id)));
    fisherRememberHiddenIds(removeIds.filter(id=>bundledIds.has(String(id))));
    const removeSet=new Set(removeIds.map(String));
    db.lessons=(db.lessons||[]).filter(l=>!removeSet.has(String(l.id)));
    if(!await saveAcademicV39()){db.lessons=beforeLessons;db.settings=beforeSettings;alert("Не вдалося зберегти зміни.");return;}d.close();academic();
  };
  body.querySelector("#academicV39Form").onsubmit=async e=>{
    e.preventDefault();
    const newDate=body.querySelector("#academicV39Date").value,pn=body.querySelector("#academicV39Pair").value,g=body.querySelector("#academicV39Group").value;
    const subject=body.querySelector("#academicV39Subject").value.trim(),teacher=body.querySelector("#academicV39Teacher").value.trim(),room=body.querySelector("#academicV39Room").value.trim(),type=body.querySelector("#academicV39Type").value;
    if(!newDate||!subject){alert("Вкажіть дату і дисципліну.");return;}
    const [startTime,endTime]=academicV39TimeForPair(pn);const targetGroups=g==="both"?["РЕМС-34","РЕМС-44"]:[g];
    const beforeLessons=clone(db.lessons||[]),beforeSettings=clone(db.settings||{});
    const scope=first?(body.querySelector("#academicV39Scope")?.value||"one"):"one";
    const isIndividual=String(type||"").toLowerCase().includes("індив");
    if(isIndividual){
      const studentIds=[...picker.querySelectorAll('input[type="checkbox"]:checked')].map(x=>String(x.value));
      if(!studentIds.length){alert("Оберіть хоча б одного студента для індивідуального заняття.");return;}
      if(studentIds.length>2){alert("На одну пару можна вибрати максимум двох студентів.");return;}
      const bundledIds=new Set(fisherBundledLessons().map(l=>String(l.id)));
      fisherRememberHiddenIds(ids.filter(id=>bundledIds.has(String(id))));
      const removeSet=new Set(ids.map(String));
      db.lessons=(db.lessons||[]).filter(l=>!removeSet.has(String(l.id)));
      const startM=timeMinutes(startTime),endM=timeMinutes(endTime),midM=startM+40;
      const fmtM=m=>`${String(Math.floor(m/60)).padStart(2,"0")}:${String(m%60).padStart(2,"0")}`;
      studentIds.forEach((sid,i)=>{
        const st=(db.students||[]).find(x=>String(x.id)===sid);
        const groupName=String(st?.group||targetGroups[0]||"РЕМС-34");
        const old=rows[i];
        const rid=old&&!bundledIds.has(String(old.id))?String(old.id):academicLessonId();
        db.lessons.push({id:rid,source:"manual",manualEditedAt:new Date().toISOString(),mode:"once",date:newDate,pairNumber:pn,subject,lessonType:type,group:groupName,startTime:i===0?startTime:fmtM(midM),endTime:i===0?fmtM(midM):endTime,timeUndetermined:false,room,teacher,note:`Індивідуальне заняття · ${String(st?.name||"").trim()}`,scope:"selected",studentIds:[sid]});
      });
    }else if(first&&scope==="similar"){
      const subj0=academicV39TeacherNorm(first.subject),teach0=academicV39TeacherNorm(first.teacher);const groups0=new Set(rows.map(r=>String(r.group||"")));
      const bundledIds=new Set(fisherBundledLessons().map(l=>String(l.id)));
      const matched=academicLessons().filter(l=>academicV39TeacherNorm(l.subject)===subj0&&academicV39TeacherNorm(l.teacher)===teach0&&groups0.has(String(l.group||"")));
      fisherRememberHiddenIds(matched.filter(l=>bundledIds.has(String(l.id))).map(l=>String(l.id)));
      matched.filter(l=>!bundledIds.has(String(l.id))).forEach(l=>{const real=(db.lessons||[]).find(x=>String(x.id)===String(l.id));if(real){real.subject=subject;real.lessonType=type;real.teacher=teacher;real.room=room;real.pairNumber=pn;real.startTime=startTime;real.endTime=endTime;real.source="manual";real.manualEditedAt=new Date().toISOString();}});
    }else{
      const bundledIds=new Set(fisherBundledLessons().map(l=>String(l.id)));
      fisherRememberHiddenIds(ids.filter(id=>bundledIds.has(String(id))));
      const oldByGroup=new Map(rows.map(r=>[String(r.group||""),r]));
      const removeSet=new Set(ids.map(String));
      db.lessons=(db.lessons||[]).filter(l=>!removeSet.has(String(l.id)));
      targetGroups.forEach(groupName=>{const old=oldByGroup.get(groupName);const oldId=old&&!bundledIds.has(String(old.id))?String(old.id):academicLessonId();db.lessons.push({
        id:oldId,source:"manual",manualEditedAt:new Date().toISOString(),mode:"once",date:newDate,pairNumber:pn,subject,lessonType:type,group:groupName,startTime,endTime,timeUndetermined:false,room,teacher,note:"Ручне редагування в календарі",scope:"group",studentIds:[]
      });});
    }
    const submit=e.submitter;if(submit){submit.disabled=true;submit.textContent="Збереження…";}
    if(!await saveAcademicV39()){db.lessons=beforeLessons;db.settings=beforeSettings;if(submit){submit.disabled=false;submit.textContent="Зберегти";}alert("Не вдалося зберегти зміни в хмару.");return;}d.close();academic();
  };
  if(!d.open)d.showModal();
}
function academicV39(){
  academicMainMode="dual";
  const monthNames={"2026-09":"Вересень 2026","2026-10":"Жовтень 2026","2026-11":"Листопад 2026","2026-12":"Грудень 2026"};
  const monthKeys=Object.keys(monthNames);if(!academicV39State.month){const cur=localIsoDate().slice(0,7);academicV39State.month=monthKeys.includes(cur)?cur:"2026-09";}
  const teacherOptions=academicV39AllTeachers();
  app.innerHTML=`<div class="academic-page academic-v39-page"><div class="academic-topbar academic-v39-topbar"><div><h2>Розклад занять</h2><p>Календар РЕМС-34 / РЕМС-44. Натисніть на заняття для редагування або «+» для додавання.</p></div><div class="academic-filter-actions"><button type="button" class="primary" id="academicV39Add">+ Додати заняття</button><button type="button" class="ghost" id="academicRefreshIndividuals">↻ Оновити індивідуальні</button><button type="button" class="ghost" id="academicRefreshOfficial">↻ Офіційний розклад</button><button type="button" class="ghost" id="academicExcelExport">⬇ Excel · мій розклад</button></div></div>
    <div class="academic-v39-filters"><div class="academic-v39-group-switch"><button data-g="both" class="${academicV39State.group==="both"?"active":""}">Обидві групи</button><button data-g="РЕМС-34" class="${academicV39State.group==="РЕМС-34"?"active":""}">РЕМС-34</button><button data-g="РЕМС-44" class="${academicV39State.group==="РЕМС-44"?"active":""}">РЕМС-44</button></div><select id="academicV39Teacher"><option value="">Усі викладачі</option>${teacherOptions.map(t=>`<option value="${esc(t)}" ${academicV39State.teacher===t?"selected":""}>${esc(t)}</option>`).join("")}</select><button type="button" class="ghost" id="academicV39Mine">Мій розклад · Фішер</button><button type="button" class="ghost" id="academicV39Clear">Скинути</button></div>
    <div id="academicDualMonthTabs" class="schedule-month-tabs academic-month-tabs"></div><div id="academicV39Mount"></div></div>`;
  const render=()=>{
    document.querySelector("#academicDualMonthTabs").innerHTML=monthKeys.map(m=>`<button type="button" class="schedule-month-tab ${m===academicV39State.month?"active":""}" data-month="${m}">${monthNames[m]}</button>`).join("");
    document.querySelectorAll("#academicDualMonthTabs [data-month]").forEach(b=>b.onclick=()=>{academicV39State.month=b.dataset.month;render();});
    const [yy,mm]=academicV39State.month.split("-").map(Number),lastDay=new Date(yy,mm,0).getDate();
    const allDates=Array.from({length:lastDay},(_,i)=>`${academicV39State.month}-${String(i+1).padStart(2,"0")}`),workDates=allDates.filter(d=>{const x=new Date(d+"T12:00:00").getDay();return x>=1&&x<=5;});
    let rows=academicLessons().filter(l=>academicLessonDates(l).some(d=>d.startsWith(academicV39State.month))&&OFFICIAL_REMS_GROUPS.includes(String(l.group||"")));
    if(academicV39State.group!=="both") rows=rows.filter(l=>String(l.group||"")===academicV39State.group);
    if(academicV39State.teacher){const n=academicV39TeacherNorm(academicV39State.teacher);rows=rows.filter(l=>academicV39TeacherNorm(l.teacher)===n);}
    const firstIndex=workDates.length?new Date(workDates[0]+"T12:00:00").getDay()-1:0,blanks=Array.from({length:firstIndex},()=>'<div class="academic-dual-cal-day empty"></div>').join("");
    const card=(items,shared=false)=>{const l=items[0];const isIndividual=String(l.lessonType||"").toLowerCase().includes("індив");const individualNames=isIndividual?items.flatMap(x=>{const found=lessonStudents(x).map(s=>s.name).filter(Boolean);if(found.length)return found;const n=String(x.note||"").replace(/^Індивідуальне заняття ·\s*/,"").trim();return n?[n]:[];}):[];const studentsHtml=isIndividual&&individualNames.length?`<div class="academic-v393-students academic-v406-paired-students">${individualNames.map(n=>`<span>👤 ${esc(n)}</span>`).join("")}</div>`:(String(l.scope||"")==="selected"?`<div class="academic-v393-students">👤 ${esc(lessonStudents(l).map(s=>s.name).join(", ")||String(l.note||"").replace(/^Індивідуальне заняття ·\s*/,""))}</div>`:"");return `<button type="button" class="academic-dual-card academic-v393-card ${isIndividual?"academic-v405-individual academic-v406-paired":""} ${academicTeacherClass(l.teacher,l.subject)} ${shared?"shared":""}" data-ids="${esc(items.map(x=>String(x.id)).join(","))}" data-date="${esc(l.date||"")}">${shared?'<div class="academic-v393-together">РАЗОМ · РЕМС-34 + РЕМС-44</div>':""}<div class="academic-v393-subject">${esc(l.subject||"Заняття")}</div><div class="academic-v393-kind">${esc(academicDisplayLessonType(l.lessonType))}</div><div class="academic-v393-teacher">${esc(l.teacher||"Викладача не вказано")}</div>${studentsHtml}<div class="academic-v393-room">ауд. ${esc(String(l.room||"").trim()||"не вказана")}</div></button>`;};
    const groupedCards=list=>{const out=[];for(const x of list){const indiv=String(x.lessonType||"").toLowerCase().includes("індив");if(!indiv){out.push([x]);continue;}const key=[x.group,x.subject,x.teacher,x.room,x.lessonType].map(v=>String(v||"").trim().toLowerCase()).join("|");let bucket=out.find(g=>g._individualKey===key&&g.length<2);if(!bucket){bucket=[];bucket._individualKey=key;out.push(bucket);}bucket.push(x);}return out;};
    const renderGrouped=list=>groupedCards(list).map(g=>card(g,false)).join("");
    const cell=date=>{const dt=new Date(date+"T12:00:00"),dayRows=rows.filter(l=>academicLessonOccursOnDate(l,date)),pairs=[...new Set(dayRows.map(academicV39Pair).filter(Boolean))].sort((a,b)=>Number(a)-Number(b));
      return `<div class="academic-dual-cal-day ${localIsoDate()===date?"today-date":""}"><div class="academic-dual-cal-date"><div><b>${dt.getDate()}</b><span>${dt.toLocaleDateString("uk-UA",{weekday:"short"})}</span></div><button type="button" class="academic-v39-plus" data-add-date="${date}" title="Додати заняття">+</button></div>${pairs.map(pair=>{const all=dayRows.filter(l=>academicV39Pair(l)===pair).sort((a,b)=>String(a.startTime||"").localeCompare(String(b.startTime||"")));const time=academicV39TimeForPair(pair);let body="";
        if(academicV39State.group==="both"){
          const a=all.filter(l=>l.group==="РЕМС-34"),b=all.filter(l=>l.group==="РЕМС-44"),used=new Set(),shared=[],onlyA=[];
          a.forEach(x=>{const j=b.findIndex((y,i)=>!used.has(i)&&academicV39Same(x,y));if(j>=0){used.add(j);shared.push([x,b[j]]);}else onlyA.push(x);});
          const onlyB=b.filter((x,i)=>!used.has(i));
          body=`${shared.map(x=>`<div class="academic-dual-cal-shared">${card(x,true)}</div>`).join("")}${(onlyA.length||onlyB.length)?`<div class="academic-dual-cal-two"><div><small>РЕМС-34</small>${renderGrouped(onlyA)||'<i>-</i>'}</div><div><small>РЕМС-44</small>${renderGrouped(onlyB)||'<i>-</i>'}</div></div>`:""}`;
        }else{
          body=`<div class="academic-dual-cal-single">${renderGrouped(all)||'<i>-</i>'}</div>`;
        }
        return `<div class="academic-dual-cal-pair"><div class="academic-dual-cal-pair-head"><b>${pair} пара</b><span>${time[0]}–${time[1]}</span><button type="button" class="academic-v39-pair-plus" data-add-date="${date}" data-add-pair="${pair}" title="Додати заняття на цю пару">+</button></div>${body}</div>`;}).join("")||'<div class="academic-dual-cal-none">-</div>'}</div>`;};
    document.querySelector("#academicV39Mount").innerHTML=`<div class="academic-dual-calendar"><div class="academic-dual-cal-weekdays">${["Понеділок","Вівторок","Середа","Четвер","П’ятниця"].map(x=>`<b>${x}</b>`).join("")}</div><div class="academic-dual-cal-grid">${blanks}${workDates.map(cell).join("")}</div></div>`;
    document.querySelectorAll(".academic-dual-card[data-ids]").forEach(b=>b.onclick=()=>openAcademicV39Editor({ids:b.dataset.ids.split(","),date:b.dataset.date}));
    document.querySelectorAll("[data-add-date]").forEach(b=>b.onclick=e=>{e.stopPropagation();openAcademicV39Editor({date:b.dataset.addDate,pair:b.dataset.addPair||"1"});});
  };
  document.querySelectorAll(".academic-v39-group-switch [data-g]").forEach(b=>b.onclick=()=>{academicV39State.group=b.dataset.g;academicV39();});
  document.querySelector("#academicV39Teacher").onchange=e=>{academicV39State.teacher=e.target.value;academicV39();};
  document.querySelector("#academicV39Mine").onclick=()=>{academicV39State.teacher=teacherOptions.find(t=>academicV39TeacherNorm(t).includes("фішер"))||"Фішер В.М.";academicV39();};
  document.querySelector("#academicV39Clear").onclick=()=>{academicV39State.group="both";academicV39State.teacher="";academicV39();};
  document.querySelector("#academicV39Add").onclick=()=>openAcademicV39Editor({date:localIsoDate(),pair:"1"});
  document.querySelector("#academicRefreshIndividuals").onclick=async()=>{if(!confirm("Відновити початковий набір індивідуальних занять Фішера? Ручні зміни саме в цих вбудованих заняттях буде скинуто."))return;const r=await installFisherIndividualSchedule(true);if(!r.ok)alert("Не вдалося оновити індивідуальні заняття.\n\n"+(r.error||"Невідома помилка"));else {academicV39();alert(`Готово. Додано/оновлено індивідуальних занять: ${r.count}.`);}};
  document.querySelector("#academicRefreshOfficial").onclick=async()=>{if(!confirm("Оновити офіційний розклад? Ручні записи з source=manual залишаться, але офіційні записи будуть замінені."))return;const r=await installOfficialRemsSchedule(true);if(!r.ok)alert("Не вдалося оновити: "+(r.error||"помилка"));else academicV39();};
  const excelBtn=document.querySelector("#academicExcelExport");if(excelBtn)excelBtn.onclick=async()=>{const old=excelBtn.textContent;excelBtn.disabled=true;excelBtn.textContent="Формую Excel…";try{await exportFisherScheduleXlsx();}catch(err){console.error(err);alert("Не вдалося сформувати Excel: "+(err?.message||err));}finally{excelBtn.disabled=false;excelBtn.textContent=old;}};
  render();
}
(function installAcademicV39(){
  const st=document.createElement("style");st.textContent=`
    .academic-v393-students{font-weight:900;color:#111827;font-size:11px;line-height:1.25;margin-top:2px}.academic-v406-paired-students{display:grid!important;gap:1px!important;margin:3px 0 2px!important}.academic-v406-paired-students span{display:block!important;white-space:normal!important;line-height:1.2!important}.academic-v406-paired{padding-top:6px!important;padding-bottom:6px!important}.academic-v393-exact-time{font-size:10px;font-weight:900;color:#475569;margin-bottom:1px}.academic-v405-individual{padding-top:7px!important;padding-bottom:7px!important}.academic-v405-individual+.academic-v405-individual{margin-top:3px}.academic-v39-topbar{align-items:flex-start}.academic-v39-filters{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:12px 0 14px}.academic-v39-group-switch{display:flex;border:1px solid #dbe2ea;border-radius:12px;overflow:hidden;background:#fff}.academic-v39-group-switch button{border:0;border-right:1px solid #e5e7eb;background:#fff;padding:10px 13px;font-weight:800;cursor:pointer}.academic-v39-group-switch button:last-child{border-right:0}.academic-v39-group-switch button.active{background:#111827;color:#fff}.academic-v39-filters select{min-width:220px;padding:10px 12px;border:1px solid #dbe2ea;border-radius:10px;background:#fff}
    .academic-dual-cal-date>div{display:flex;align-items:baseline;gap:6px}.academic-v39-plus,.academic-v39-pair-plus{border:1px solid #cbd5e1;background:#fff;border-radius:7px;cursor:pointer;font-weight:900;color:#334155;flex:0 0 auto}.academic-v39-plus{width:25px;height:25px}.academic-v39-pair-plus{width:20px;height:20px;padding:0;line-height:16px;margin-left:3px}.academic-dual-cal-pair-head{align-items:center}.academic-dual-cal-pair-head span{margin-left:auto}.academic-dual-cal-single{display:grid;gap:5px}.academic-dual-cal-single i{display:block;text-align:center;color:#cbd5e1;font-style:normal;padding:8px}
    /* v39.3 - keep the approved calendar grid; fix only the inside of lesson cards */
    .academic-dual-cal-day .academic-dual-card{
      display:flex!important;flex-direction:column!important;align-items:stretch!important;
      width:100%!important;height:auto!important;min-height:0!important;
      padding:9px 10px!important;gap:3px!important;overflow:visible!important;
      white-space:normal!important;text-align:left!important;box-sizing:border-box!important;
    }
    .academic-dual-cal-day .academic-dual-card strong,
    .academic-dual-cal-day .academic-dual-card .academic-kind,
    .academic-dual-cal-day .academic-dual-card .academic-teacher,
    .academic-dual-cal-day .academic-dual-card .academic-room,
    .academic-dual-cal-day .academic-dual-card .academic-together{
      display:block!important;position:static!important;float:none!important;clear:both!important;
      width:100%!important;max-width:100%!important;min-width:0!important;
      margin:0!important;padding:0!important;
      white-space:normal!important;overflow:visible!important;text-overflow:clip!important;
      overflow-wrap:anywhere!important;word-break:normal!important;line-height:1.25!important;
      text-align:left!important;grid-column:auto!important;grid-row:auto!important;
    }
    .academic-dual-cal-day .academic-dual-card strong{font-size:12px!important;font-weight:800!important;margin-bottom:2px!important}
    .academic-dual-cal-day .academic-dual-card .academic-kind{font-size:10px!important;font-weight:700!important}
    .academic-dual-cal-day .academic-dual-card .academic-teacher{font-size:11px!important;font-weight:900!important;margin-top:2px!important}
    .academic-dual-cal-day .academic-dual-card .academic-room{font-size:11px!important;font-weight:900!important;margin-top:1px!important}
    .academic-dual-cal-day .academic-dual-card .academic-together{font-size:8px!important;font-weight:900!important;margin-bottom:2px!important}
    @media(max-width:900px){
      .academic-dual-cal-day .academic-dual-card strong{font-size:13px!important}
      .academic-dual-cal-day .academic-dual-card .academic-kind{font-size:11px!important}
      .academic-dual-cal-day .academic-dual-card .academic-teacher,.academic-dual-cal-day .academic-dual-card .academic-room{font-size:12px!important}
    }
    /* v39.3 - bulletproof vertical content in narrow cards; grid geometry unchanged */
    .academic-dual-cal-day .academic-v393-card{display:block!important;height:auto!important;min-height:0!important;overflow:visible!important;padding:9px 10px!important;white-space:normal!important;text-align:left!important}
    .academic-dual-cal-day .academic-v393-card>.academic-v393-together,
    .academic-dual-cal-day .academic-v393-card>.academic-v393-subject,
    .academic-dual-cal-day .academic-v393-card>.academic-v393-kind,
    .academic-dual-cal-day .academic-v393-card>.academic-v393-teacher,
    .academic-dual-cal-day .academic-v393-card>.academic-v393-room{display:block!important;position:relative!important;inset:auto!important;float:none!important;width:auto!important;max-width:none!important;height:auto!important;min-height:0!important;margin:0!important;padding:0!important;transform:none!important;white-space:normal!important;overflow:visible!important;text-overflow:clip!important;overflow-wrap:break-word!important;word-break:normal!important;text-align:left!important;line-height:1.28!important}
    .academic-dual-cal-day .academic-v393-card>.academic-v393-together{font-size:8px!important;font-weight:900!important;letter-spacing:.03em!important;margin-bottom:4px!important}
    .academic-dual-cal-day .academic-v393-card>.academic-v393-subject{font-size:12px!important;font-weight:850!important;margin-bottom:4px!important}
    .academic-dual-cal-day .academic-v393-card>.academic-v393-kind{font-size:10px!important;font-weight:750!important;margin-bottom:4px!important}
    .academic-dual-cal-day .academic-v393-card>.academic-v393-teacher{font-size:11px!important;font-weight:900!important;margin-bottom:3px!important}
    .academic-dual-cal-day .academic-v393-card>.academic-v393-room{font-size:11px!important;font-weight:900!important}
    @media(max-width:900px){.academic-dual-cal-day .academic-v393-card>.academic-v393-subject{font-size:13px!important}.academic-dual-cal-day .academic-v393-card>.academic-v393-kind{font-size:11px!important}.academic-dual-cal-day .academic-v393-card>.academic-v393-teacher,.academic-dual-cal-day .academic-v393-card>.academic-v393-room{font-size:12px!important}}
    .academic-v409-individual-picker{border:1px solid #dbeafe;background:#f8fbff;border-radius:12px;padding:12px}.academic-v409-pick-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:10px}.academic-v409-pick-head>div{display:grid;gap:2px}.academic-v409-pick-head small{font-size:10px;color:#64748b;font-weight:500}.academic-v409-pick-head>span{font-weight:900;color:#1d4ed8}.academic-v409-pick-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;max-height:240px;overflow:auto}.academic-v409-pick-grid label{display:flex!important;grid-template-columns:none!important;align-items:center;gap:8px!important;border:1px solid #e5e7eb;border-radius:9px;padding:8px;background:#fff;cursor:pointer}.academic-v409-pick-grid input{width:auto!important;margin:0!important}.academic-v409-pick-grid label>span{display:grid;gap:1px;font-size:11px}.academic-v409-pick-grid label small{font-size:9px;color:#64748b}.academic-v39-form{display:grid;grid-template-columns:1fr 1fr;gap:12px}.academic-v39-form label{display:grid;gap:5px;font-size:12px;font-weight:700}.academic-v39-form input,.academic-v39-form select{padding:10px;border:1px solid #d9dee6;border-radius:9px;background:#fff}.academic-v39-form .full{grid-column:1/-1}.academic-v39-dialog{max-width:min(760px,96vw)}
    @media(max-width:650px){.academic-v409-pick-grid{grid-template-columns:1fr}.academic-v39-filters{align-items:stretch;display:grid;grid-template-columns:1fr}.academic-v39-group-switch{width:100%}.academic-v39-group-switch button{flex:1}.academic-v39-filters select{width:100%;min-width:0}.academic-v39-form{grid-template-columns:1fr}.academic-v39-form .full{grid-column:1}}
  `;document.head.appendChild(st);
  academic=academicV39;if(typeof views!=="undefined")views.academic=academicV39;
})();
// ===== /REMS Control v39.3 =====

// ===== v40.8 STABLE NAVIGATION =====
// Cloud/auth/media callbacks may refresh the current screen, but only an explicit user
// navigation action is allowed to change currentView. This prevents random jumps.
window.addEventListener("pageshow",()=>{
  try{
    const saved=sessionStorage.getItem(REMS_VIEW_KEY);
    if(REMS_VALID_VIEWS.has(saved)) currentView=saved;
  }catch{}
});
// ===== /v40.8 STABLE NAVIGATION =====

bootstrapAuth();
/* === V40 SIMPLE PROJECTS: project -> work -> students. One source of truth = event.studentIds === */
function v40EventStudentIds(ev){ return [...new Set((ev?.studentIds||[]).map(x=>String(resolveStudentId(x)??x)).filter(Boolean))]; }
function v40ProjectStudentIds(pid){
  const ids=new Set(); eventsFor(pid).forEach(e=>v40EventStudentIds(e).forEach(id=>ids.add(id)));
  // Legacy fallback: keeps old projects visible until their first edit in V40.
  (db.assignments||[]).filter(a=>String(a.projectId)===String(pid)).forEach(a=>ids.add(String(resolveStudentId(a.studentId)??a.studentId)));
  return [...ids];
}
function v40StudentName(id){ const s=(db.students||[]).find(x=>String(x.id)===String(id)); return s?.name||"Студент"; }
function v40Group(id){ const s=(db.students||[]).find(x=>String(x.id)===String(id)); return studentGroupLabel(s)||s?.group||""; }
function v40ProjectPeriod(p){
  const ds=eventsFor(p.id).map(e=>e.date).filter(Boolean).sort();
  return ds.length?`${fmt(ds[0])} - ${fmt(ds[ds.length-1])}`:"Ще без робіт";
}
function v40Projects(){
  currentProjectDetailId=null;
  const ordered=sortedProjectsByRelevance();
  app.innerHTML=`<div class="v40-projects-head"><div><h2>Проєкти</h2><p>Проста система: проєкт → робота → студенти.</p></div></div>
  <div class="v40-project-grid">${ordered.map(p=>{const evs=eventsFor(p.id), ids=v40ProjectStudentIds(p.id);return `<button class="v40-project-card" data-v40-project="${esc(String(p.id))}" type="button" style="--pc:${esc(p.color||'#111827')}">
    <div class="v40-project-logo">${projectLogoHtml(p,"project-card-logo")}</div><div class="v40-project-copy"><h3>${esc(p.name)}</h3><p>${evs.length} ${evs.length===1?'робота':'робіт'} · ${ids.length} студентів</p><small>${esc(v40ProjectPeriod(p))}</small></div><span>→</span>
  </button>`}).join("")||'<div class="empty">Проєктів ще немає.</div>'}</div>`;
  app.querySelectorAll("[data-v40-project]").forEach(b=>b.onclick=()=>v40OpenProject(b.dataset.v40Project));
}
function v40OpenProject(pid){
  const p=pBy(pid); if(!p){ currentProjectDetailId=null; return; }
  rememberCurrentView("projects");
  currentProjectDetailId=String(pid);
  const evs=eventsFor(pid).slice().sort((a,b)=>String(a.date).localeCompare(String(b.date))||String(a.startTime||"").localeCompare(String(b.startTime||"")));
  const ids=v40ProjectStudentIds(pid);
  app.innerHTML=`<div class="v40-detail">
    <button class="v40-back" id="v40BackProjects" type="button">← Проєкти</button>
    <div class="v40-detail-head"><div><div class="v40-title-row">${projectLogoHtml(p,"project-card-logo")}<div><h2>${esc(p.name)}</h2><p>${evs.length} робіт · ${ids.length} студентів</p></div></div></div><div class="v40-project-head-actions"><button class="ghost danger" id="v40DeleteProject" type="button">Видалити проєкт</button><button class="primary" id="v40AddWork" type="button">+ Додати роботу</button></div></div>
    <div class="v40-work-list">${evs.map((e,i)=>`<button type="button" class="v40-work" data-v40-event="${i}"><div class="v40-date"><b>${new Date(e.date+'T12:00:00').getDate()}</b><span>${new Date(e.date+'T12:00:00').toLocaleDateString('uk-UA',{month:'short'}).replace('.','')}</span></div><div class="v40-work-main"><h3>${esc(e.type||'Робота')}</h3><p>${e.timeUndetermined||(!e.startTime&&!e.endTime)?'Час не визначено':esc([e.startTime,e.endTime].filter(Boolean).join('–'))}</p><small>👥 ${v40EventStudentIds(e).length} студентів</small></div><span class="v40-arrow">→</span></button>`).join("")||'<div class="v40-empty"><b>У проєкті ще немає робіт</b><span>Додайте першу дату, назву роботи та студентів.</span></div>'}</div>
  </div>`;
  document.querySelector("#pageTitle").textContent="Проєкти";
  document.querySelector("#v40BackProjects").onclick=()=>{currentProjectDetailId=null;v40Projects();};
  document.querySelector("#v40AddWork").onclick=()=>v40WorkEditor(pid,null);
  document.querySelector("#v40DeleteProject").onclick=async()=>{
    const workCount=eventsFor(pid).length;
    const studentCount=v40ProjectStudentIds(pid).length;
    if(!confirm(`Повністю видалити проєкт «${p.name}»?\n\nБуде видалено сам проєкт, ${workCount} робіт і всі пов’язані з ним призначення студентів. Цю дію не можна скасувати.`)) return;
    const backup={projects:[...db.projects],events:[...db.events],assignments:[...(db.assignments||[])]};
    db.projects=db.projects.filter(x=>String(x.id)!==String(pid));
    db.events=(db.events||[]).filter(x=>String(x.projectId)!==String(pid));
    db.assignments=(db.assignments||[]).filter(x=>String(x.projectId)!==String(pid));
    const btn=document.querySelector("#v40DeleteProject"); if(btn){btn.disabled=true;btn.textContent="Видалення…";}
    const ok=await save();
    if(!ok){db.projects=backup.projects;db.events=backup.events;db.assignments=backup.assignments;alert("Не вдалося видалити проєкт із хмарної бази. Нічого не видалено.");if(btn){btn.disabled=false;btn.textContent="Видалити проєкт";}return;}
    v40Projects();
  };
  app.querySelectorAll("[data-v40-event]").forEach(b=>b.onclick=()=>v40WorkEditor(pid,evs[+b.dataset.v40Event]));
}
function v40ConflictText(studentId,date,start,end,editingEv){
  const sid=String(studentId); const hits=(db.events||[]).filter(e=>e!==editingEv&&String(e.date)===String(date)&&v40EventStudentIds(e).includes(sid));
  if(!hits.length)return ""; const e=hits[0],p=pBy(e.projectId); return `⚠ Уже зайнятий: ${p?.name||'Інший проєкт'} · ${e.type||'робота'}`;
}
function v40EnsureDialog(){
  let d=document.querySelector('#v40WorkDialog'); if(d)return d;
  d=document.createElement('dialog'); d.id='v40WorkDialog'; d.className='v40-dialog'; d.innerHTML='<div id="v40WorkBody"></div>'; document.body.appendChild(d); return d;
}
function v40WorkEditor(pid,ev){
  const p=pBy(pid); if(!p)return; const d=v40EnsureDialog(), body=d.querySelector('#v40WorkBody');
  const selected=new Set(ev?v40EventStudentIds(ev):[]); const groups=[...new Set((db.students||[]).map(studentGroupLabel).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'uk'));
  const renderPeople=()=>{
    const date=body.querySelector('#v40Date')?.value||ev?.date||localIsoDate(); const q=(body.querySelector('#v40Search')?.value||'').trim().toLowerCase(); const g=body.querySelector('#v40Group')?.value||'';
    const list=body.querySelector('#v40People'); if(!list)return;
    const people=(db.students||[]).filter(s=>(!g||studentGroupLabel(s)===g)&&(!q||(`${s.name} ${studentGroupLabel(s)}`).toLowerCase().includes(q))).sort((a,b)=>String(a.name).localeCompare(String(b.name),'uk'));
    list.innerHTML=people.map(s=>{const sid=String(s.id),on=selected.has(sid), conflict=v40ConflictText(sid,date,'','',ev);return `<label class="v40-person ${on?'selected':''}"><input type="checkbox" data-v40-sid="${esc(sid)}" ${on?'checked':''}><span><b>${esc(s.name)}</b><small>${esc(studentGroupLabel(s)||'')}</small>${conflict?`<em>${esc(conflict)}</em>`:''}</span></label>`}).join('')||'<div class="empty">Нікого не знайдено.</div>';
    list.querySelectorAll('[data-v40-sid]').forEach(ch=>ch.onchange=()=>{ch.checked?selected.add(String(ch.dataset.v40Sid)):selected.delete(String(ch.dataset.v40Sid));body.querySelector('#v40Count').textContent=selected.size;ch.closest('.v40-person').classList.toggle('selected',ch.checked);});
  };
  body.innerHTML=`<div class="v40-editor"><div class="v40-editor-head"><div><h2>${ev?'Редагувати роботу':'Нова робота'}</h2><p>${esc(p.name)}</p></div><button class="ghost" id="v40Close" type="button">Закрити</button></div>
    <div class="v40-fields"><label>Дата<input id="v40Date" type="date" value="${esc(ev?.date||localIsoDate())}"></label><label>Що відбувається?<input id="v40Type" value="${esc(ev?.type||'')}" placeholder="Зйомка / репетиція / кастинг"></label></div>
    <div class="v40-time"><label><input id="v40Unknown" type="checkbox" ${!ev||ev.timeUndetermined||(!ev.startTime&&!ev.endTime)?'checked':''}> Час не визначено</label><div id="v40TimeFields"><input id="v40Start" type="time" value="${esc(ev?.startTime||'')}"><span>-</span><input id="v40End" type="time" value="${esc(ev?.endTime||'')}"></div></div>
    <div class="v40-people-head"><div><h3>Студенти</h3><p><b id="v40Count">${selected.size}</b> вибрано</p></div><div class="v40-filters"><input id="v40Search" placeholder="Пошук"><select id="v40Group"><option value="">Усі групи</option>${groups.map(g=>`<option>${esc(g)}</option>`).join('')}</select></div></div>
    <div class="v40-people" id="v40People"></div>
    <div class="v40-actions">${ev?'<button class="danger ghost" id="v40Delete" type="button">Видалити роботу</button>':'<span></span>'}<div><button class="ghost" id="v40Cancel" type="button">Скасувати</button><button class="primary" id="v40Save" type="button">Зберегти</button></div></div>
  </div>`;
  const unknown=body.querySelector('#v40Unknown'), tf=body.querySelector('#v40TimeFields'); const syncTime=()=>tf.classList.toggle('disabled',unknown.checked); syncTime(); unknown.onchange=syncTime;
  body.querySelector('#v40Search').oninput=renderPeople; body.querySelector('#v40Group').onchange=renderPeople; body.querySelector('#v40Date').onchange=renderPeople; renderPeople();
  const close=()=>d.close(); body.querySelector('#v40Close').onclick=close; body.querySelector('#v40Cancel').onclick=close;
  body.querySelector('#v40Save').onclick=async()=>{const date=body.querySelector('#v40Date').value,type=body.querySelector('#v40Type').value.trim();if(!date||!type){alert('Вкажіть дату і назву роботи.');return;}const unk=unknown.checked,start=unk?'':body.querySelector('#v40Start').value,end=unk?'':body.querySelector('#v40End').value;if(!unk&&start&&end&&timeMinutes(start)>=timeMinutes(end)){alert('Час завершення має бути пізніше за початок.');return;}const btn=body.querySelector('#v40Save');btn.disabled=true;btn.textContent='Збереження…';if(ev){ev.date=date;ev.type=type;ev.startTime=start;ev.endTime=end;ev.timeUndetermined=unk;ev.studentIds=[...selected];ev.studentRoles={};}else{db.events.push({projectId:pid,date,type,startTime:start,endTime:end,timeUndetermined:unk,location:'',note:'',studentIds:[...selected],studentRoles:{}});}const ok=await save();btn.disabled=false;btn.textContent='Зберегти';if(!ok){alert('Не вдалося зберегти в хмару.');return;}d.close();v40OpenProject(pid);};
  if(ev) body.querySelector('#v40Delete').onclick=async()=>{if(!confirm(`Видалити «${ev.type||'роботу'}» ${fmt(ev.date)}?`))return;const idx=db.events.indexOf(ev);if(idx>=0)db.events.splice(idx,1);const ok=await save();if(!ok){alert('Не вдалося зберегти зміну.');return;}d.close();v40OpenProject(pid);};
  if(!d.open)d.showModal();
}
function v40NewProject(){
  const d=v40EnsureDialog(),body=d.querySelector('#v40WorkBody');
  body.innerHTML=`<div class="v40-editor v40-new-project"><div class="v40-editor-head"><div><h2>Новий проєкт</h2><p>Спочатку тільки основне. Роботи й студентів додасте після створення.</p></div><button class="ghost" id="v40Close" type="button">Закрити</button></div><div class="v40-project-fields"><label>Назва<input id="v40PName" placeholder="Наприклад: Фабрика зірок"></label><label>Колір<input id="v40PColor" type="color" value="#2563EB"></label><label>Позначка<input id="v40PEmoji" maxlength="3" value="◆"></label><label>Логотип<input id="v40PLogo" type="file" accept="image/*"></label></div><div class="v40-actions"><span></span><div><button class="ghost" id="v40Cancel" type="button">Скасувати</button><button class="primary" id="v40Create" type="button">Створити</button></div></div></div>`;
  const close=()=>d.close();body.querySelector('#v40Close').onclick=close;body.querySelector('#v40Cancel').onclick=close;body.querySelector('#v40Create').onclick=async()=>{const name=body.querySelector('#v40PName').value.trim();if(!name){alert('Вкажіть назву проєкту.');return;}const project={id:'p_'+Date.now(),name,color:body.querySelector('#v40PColor').value,emoji:body.querySelector('#v40PEmoji').value||'◆',createdAt:new Date().toISOString()};const f=body.querySelector('#v40PLogo').files?.[0];if(f)project.logoData=await compressProjectLogo(f);db.projects.push(project);const ok=await save();if(!ok){db.projects=db.projects.filter(x=>x!==project);alert('Не вдалося зберегти проєкт.');return;}d.close();v40OpenProject(project.id);};if(!d.open)d.showModal();
}
const v40DeleteStyle=document.createElement('style');v40DeleteStyle.textContent=`.v40-project-head-actions{display:flex;gap:8px;align-items:center}.v40-project-head-actions .danger{color:#b42318;border-color:#f0b4ad;background:#fff}.v40-project-head-actions .danger:hover{background:#fff5f4}@media(max-width:700px){.v40-project-head-actions{width:100%;display:grid;grid-template-columns:1fr 1fr}.v40-project-head-actions button{width:100%}}`;document.head.appendChild(v40DeleteStyle);
projects=v40Projects; views.projects=v40Projects; openProjectCard=v40OpenProject;
const v40Quick=document.querySelector('#quickAdd'); if(v40Quick){const old=v40Quick.onclick;v40Quick.onclick=()=>{if(currentView==='projects'){if(!cloudReady){alert('Зачекайте, поки завантажиться хмарна база.');return;}v40NewProject();}else old?.();};}

// ===== v41.2 · Експорт розкладу Фішера у форматі кафедральної Excel-таблиці =====
const academicXmlEsc=v=>String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const academicExcelCol=n=>{let s="";for(;n>0;n=Math.floor((n-1)/26))s=String.fromCharCode(65+(n-1)%26)+s;return s;};
const academicExcelCell=(r,c,value,style=0)=>`<c r="${academicExcelCol(c)}${r}" t="inlineStr" s="${style}"><is><t xml:space="preserve">${academicXmlEsc(value)}</t></is></c>`;
const academicTeacherIsFisher=l=>academicV39TeacherNorm(String(l?.teacher||"")).includes("фішер");
const academicExcelShortName=name=>{
  const a=String(name||"").replace(/\s+/g," ").trim().split(" ").filter(Boolean);
  if(!a.length)return "";
  return a[0]+(a[1]?` ${a[1][0]}.`:"")+(a[2]?`${a[2][0]}.`:"");
};
const academicExcelKindPrefix=kind=>{
  const n=academicV39TeacherNorm(kind||"");
  if(n.includes("індивіду"))return "Інд.";
  if(n.includes("лекц"))return "Лек.";
  if(n.includes("лаборатор"))return "Лаб.";
  if(n.includes("семінар"))return "Сем.";
  if(n.includes("консульта"))return "Конс.";
  if(n.includes("контроль"))return "Контр.";
  return "Пр.";
};
const academicExcelUkDay=date=>{
  const names=["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"];
  return names[new Date(date+"T12:00:00").getDay()]||"";
};
const academicExcelDateShort=d=>{const [y,m,dd]=String(d).split("-");return dd&&m?`${dd}.${m}`:String(d||"");};

function academicPersonalExcelRows(){
  // Беремо саме той розклад, який зараз реально бачить REMS Control:
  // звичайні, офіційні, ручні та видимі індивідуальні заняття.
  const source=academicLessons().filter(academicTeacherIsFisher);
  const groups=new Map();
  source.forEach(l=>{
    const pair=String(academicV39Pair(l)||"");
    if(!pair)return; // записи без визначеної пари не можна коректно поставити у сітку 1–7
    const kind=academicDisplayLessonType(l.lessonType||"");
    const isIndividual=academicV39TeacherNorm(kind).includes("індивіду");
    academicLessonDates(l).forEach(date=>{
      const day=academicExcelUkDay(date);
      if(!["Понеділок","Вівторок","Середа","Четвер","П'ятниця"].includes(day))return;
      const key=[day,pair,l.group,l.subject,kind,l.room,isIndividual?"individual":"regular"].map(x=>String(x||"").trim()).join("|");
      if(!groups.has(key))groups.set(key,{day,pair,group:String(l.group||""),subject:String(l.subject||"").replace(/\s+/g," ").trim(),kind,room:String(l.room||""),isIndividual,dates:new Set(),peopleByDate:new Map()});
      const g=groups.get(key);g.dates.add(date);
      if(isIndividual){
        const names=lessonStudents(l).map(s=>s.name).filter(Boolean);
        if(!names.length){const fallback=String(l.note||"").replace(/^Індивідуальне заняття\s*·\s*/i,"").trim();if(fallback)names.push(fallback);}
        const list=g.peopleByDate.get(date)||[];
        names.forEach(n=>{const short=academicExcelShortName(n);if(short&&!list.includes(short))list.push(short);});
        g.peopleByDate.set(date,list);
      }
    });
  });
  const rows=[...groups.values()].map(g=>({...g,dates:[...g.dates].sort()}));

  // v41.3: якщо одна й та сама пара проводиться СПІЛЬНО для кількох груп,
  // в Excel показуємо її одним рядком, а назви груп об’єднуємо в одній клітинці.
  // Об’єднуємо лише записи з повністю однаковими днем, парою, дисципліною,
  // видом заняття, аудиторією та набором дат - тобто справді спільне заняття.
  const combined=new Map();
  rows.forEach(g=>{
    if(g.isIndividual){
      combined.set(`individual|${Math.random()}|${g.day}|${g.pair}|${g.group}|${g.subject}`,g);
      return;
    }
    const datesKey=g.dates.join(",");
    const key=[g.day,g.pair,g.subject,g.kind,g.room,datesKey].map(x=>String(x||"").trim()).join("|");
    if(!combined.has(key))combined.set(key,{...g,groups:[]});
    const c=combined.get(key);
    const incoming=String(g.group||"").split(/\s*[+,;/]\s*/).map(x=>x.trim()).filter(Boolean);
    incoming.forEach(name=>{if(!c.groups.includes(name))c.groups.push(name);});
    c.group=c.groups.join(" + ");
  });
  return [...combined.values()];
}

async function exportFisherScheduleXlsx(){
  const JSZip=await ensureJsZipForWord();
  const lessons=academicPersonalExcelRows();
  if(!lessons.length)throw new Error("У поточному розкладі не знайдено занять Фішера В.М.");

  const dayOrder=["Понеділок","Вівторок","Середа","Четвер","П'ятниця"];
  const times={1:"9:00-10:20",2:"10:40-12:00",3:"12:30-13:50",4:"14:10-15:30",5:"15:40-17:00",6:"17:10-18:30",7:"18:40-20:00"};
  lessons.sort((a,b)=>dayOrder.indexOf(a.day)-dayOrder.indexOf(b.day)||Number(a.pair)-Number(b.pair)||a.group.localeCompare(b.group,"uk")||a.subject.localeCompare(b.subject,"uk"));

  const bySlot=new Map();
  lessons.forEach(g=>{const k=`${g.day}|${g.pair}`;if(!bySlot.has(k))bySlot.set(k,[]);bySlot.get(k).push(g);});

  // Рядки аркуша: кожен день має всі 7 пар, навіть якщо вони порожні - як у зразку.
  const body=[]; const merges=[]; let row=5;
  dayOrder.forEach(day=>{
    const dayStart=row;
    for(let pair=1;pair<=7;pair++){
      const entries=bySlot.get(`${day}|${pair}`)||[null];
      const pairStart=row;
      entries.forEach((g,idx)=>{
        let dates="",notes="";
        if(g){
          const pref=academicExcelKindPrefix(g.kind);
          dates=`${pref} ${g.dates.map(academicExcelDateShort).join("; ")}`;
          const noteParts=[];
          if(g.room)noteParts.push(`ауд. ${g.room}`);
          if(g.isIndividual){
            const people=g.dates.map(d=>{const names=g.peopleByDate.get(d)||[];return names.length?`${academicExcelDateShort(d)} - ${names.join(", ")}`:"";}).filter(Boolean);
            if(people.length)noteParts.push(people.join("\n"));
          }
          notes=noteParts.join("\n");
        }
        body.push({r:row,day:idx===0?day:"",pair:idx===0?`${pair} пара\n${times[pair]}`:"",group:g?.group||"",subject:g?.subject||"",dates,notes,isIndividual:!!g?.isIndividual});
        row++;
      });
      if(row-pairStart>1)merges.push(`B${pairStart}:B${row-1}`);
    }
    if(row-dayStart>1)merges.push(`A${dayStart}:A${row-1}`);
  });

  let sheetRows="";
  sheetRows+=`<row r="1" ht="28" customHeight="1">${academicExcelCell(1,1,"Фішер В.М.",1)}</row>`;
  sheetRows+=`<row r="2" ht="20" customHeight="1">${academicExcelCell(2,1,"Навчальний рік 2026/27 · особистий розклад",2)}</row>`;
  sheetRows+=`<row r="4" ht="30" customHeight="1">${["День тижня","Пара","Група","Назва ОК","Дати","Примітки"].map((v,j)=>academicExcelCell(4,j+1,v,3)).join("")}</row>`;
  body.forEach(x=>{
    const style=x.isIndividual?7:6;
    sheetRows+=`<row r="${x.r}" ht="42" customHeight="1">${academicExcelCell(x.r,1,x.day,4)}${academicExcelCell(x.r,2,x.pair,5)}${academicExcelCell(x.r,3,x.group,style)}${academicExcelCell(x.r,4,x.subject,style)}${academicExcelCell(x.r,5,x.dates,style)}${academicExcelCell(x.r,6,x.notes,style)}</row>`;
  });
  const last=row-1;
  const mergeRefs=["A1:F1","A2:F2",...merges];
  const mergeXml=`<mergeCells count="${mergeRefs.length}">${mergeRefs.map(ref=>`<mergeCell ref="${ref}"/>`).join("")}</mergeCells>`;
  const printArea=`<definedNames><definedName name="_xlnm.Print_Area" localSheetId="0">'Розклад Фішера'!$A$1:$F$${last}</definedName></definedNames>`;

  // Порядок XML-вузлів тут навмисно відповідає SpreadsheetML; у v41.1 sheetViews стояв
  // після sheetData, через що Excel міг "ремонтувати" файл і показувати порожній аркуш.
  const sheet=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>`+
  `<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">`+
  `<dimension ref="A1:F${last}"/>`+
  `<sheetViews><sheetView workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>`+
  `<sheetFormatPr defaultRowHeight="15"/>`+
  `<cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="16" customWidth="1"/><col min="3" max="3" width="18" customWidth="1"/><col min="4" max="4" width="34" customWidth="1"/><col min="5" max="5" width="42" customWidth="1"/><col min="6" max="6" width="42" customWidth="1"/></cols>`+
  `<sheetData>${sheetRows}</sheetData>${mergeXml}`+
  `<pageMargins left="0.25" right="0.25" top="0.45" bottom="0.45" header="0.2" footer="0.2"/>`+
  `<pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0" paperSize="9"/>`+
  `</worksheet>`;

  const styles=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">`+
  `<fonts count="4"><font><sz val="10"/><name val="Arial"/></font><font><b/><sz val="16"/><name val="Arial"/></font><font><b/><sz val="10"/><name val="Arial"/></font><font><b/><color rgb="FFC2185B"/><sz val="10"/><name val="Arial"/></font></fonts>`+
  `<fills count="5"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE7E6E6"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFF3F3F3"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFF0F6"/><bgColor indexed="64"/></patternFill></fill></fills>`+
  `<borders count="2"><border/><border><left style="thin"><color rgb="FF000000"/></left><right style="thin"><color rgb="FF000000"/></right><top style="thin"><color rgb="FF000000"/></top><bottom style="thin"><color rgb="FF000000"/></bottom></border></borders>`+
  `<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>`+
  `<cellXfs count="8">`+
  `<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>`+
  `<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>`+
  `<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>`+
  `<xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>`+
  `<xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>`+
  `<xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>`+
  `<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>`+
  `<xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>`+
  `</cellXfs></styleSheet>`;

  const zip=new JSZip();
  zip.file("[Content_Types].xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`);
  zip.folder("_rels").file(".rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`);
  zip.folder("xl").file("workbook.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Розклад Фішера" sheetId="1" r:id="rId1"/></sheets>${printArea}</workbook>`).file("styles.xml",styles).folder("worksheets").file("sheet1.xml",sheet);
  zip.folder("xl").folder("_rels").file("workbook.xml.rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`);
  const blob=await zip.generateAsync({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="Розклад_Фішер_2026-27.xlsx";document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1000);
}
// v41.2: Excel export repaired and rebuilt to match the кафедральний schedule layout.

academic=academicV39;if(typeof views!=="undefined")views.academic=academicV39;
