(function(){
  const root=document.documentElement;
  const body=document.body;
  const nav=document.querySelector('.mobile-bottom-nav');
  const WEEKDAYS=['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];
  let enhanceFrame=0;

  const isMobile=()=>body.classList.contains('ui-mobile');
  const fullDate=date=>{
    try{return new Date(date+'T12:00:00').toLocaleDateString('uk-UA',{weekday:'long',day:'numeric',month:'long',year:'numeric'});}
    catch{return date;}
  };
  const monthOffset=date=>{
    const [y,m]=String(date||'').slice(0,7).split('-').map(Number);
    if(!y||!m) return 0;
    return (new Date(y,m-1,1,12).getDay()+6)%7;
  };
  const styleColor=el=>{
    if(!el) return '';
    const inline=el.style?.getPropertyValue('--project-color')||el.style?.backgroundColor||'';
    if(inline) return inline.trim();
    const nested=el.querySelector?.('[style*="--project-color"]');
    const c=nested?.style?.getPropertyValue('--project-color')||'';
    return c.trim();
  };
  const unique=arr=>[...new Set(arr.filter(Boolean))];

  const ensureDayDialog=()=>{
    let d=document.querySelector('#mobileCalendarDayDialog');
    if(d) return d;
    d=document.createElement('dialog');
    d.id='mobileCalendarDayDialog';
    d.className='mobile-calendar-day-dialog';
    d.innerHTML='<div class="mobile-calendar-sheet" id="mobileCalendarSheet"></div>';
    document.body.appendChild(d);
    return d;
  };
  const openSheet=({date,kicker='Події дня',items=[],extraAction=null})=>{
    const d=ensureDayDialog();
    const holder=d.querySelector('#mobileCalendarSheet');
    holder.innerHTML=`<div class="mobile-calendar-sheet-head"><div><small>${kicker}</small><h2>${fullDate(date)}</h2></div><button type="button" class="ghost" id="mobileCalendarSheetClose">Закрити</button></div>
      <div class="mobile-calendar-sheet-list">${items.length?items.map((item,i)=>`<button type="button" class="mobile-calendar-sheet-item ${item.selected?'selected':''}" data-mobile-sheet-item="${i}"><b>${item.title||'Подія'}</b>${item.meta?`<span>${item.meta}</span>`:''}${item.note?`<small>${item.note}</small>`:''}</button>`).join(''):'<div class="mobile-calendar-sheet-empty">На цей день записів немає.</div>'}</div>
      ${extraAction?`<div class="mobile-calendar-sheet-actions"><button type="button" class="ghost" id="mobileCalendarSheetExtra">${extraAction.label}</button><button type="button" class="primary" id="mobileCalendarSheetDone">Готово</button></div>`:''}`;
    holder.querySelector('#mobileCalendarSheetClose').onclick=()=>d.close();
    holder.querySelector('#mobileCalendarSheetDone')?.addEventListener('click',()=>d.close());
    holder.querySelector('#mobileCalendarSheetExtra')?.addEventListener('click',()=>{d.close();extraAction.run?.();});
    holder.querySelectorAll('[data-mobile-sheet-item]').forEach(btn=>btn.onclick=()=>{
      const item=items[Number(btn.dataset.mobileSheetItem||0)];
      d.close();
      requestAnimationFrame(()=>item?.run?.());
    });
    if(!d.open) d.showModal();
  };

  const compactShell=(days,{title='',subtitle='',className=''})=>{
    if(!days.length) return '';
    const firstDate=days[0].date;
    const blanks=Array.from({length:monthOffset(firstDate)},()=>'<button class="mobile-cal-day outside" disabled></button>').join('');
    const cells=days.map(day=>{
      const markers=(day.colors||[]).slice(0,4).map(c=>`<i style="background:${c}"></i>`).join('');
      const cls=['mobile-cal-day',day.weekend?'weekend':'',day.today?'today':'',day.conflict?'conflict':'',day.count?'has-items':'',day.selected?'selected':''].filter(Boolean).join(' ');
      return `<button type="button" class="${cls}" data-mobile-date="${day.date}" title="${day.title||''}"><span class="mobile-cal-number">${Number(day.date.slice(-2))}</span><span class="mobile-cal-markers">${markers}</span><span class="mobile-cal-meta">${day.meta||''}</span></button>`;
    }).join('');
    const total=monthOffset(firstDate)+days.length;
    const trailing=(7-(total%7))%7;
    const tail=Array.from({length:trailing},()=>'<button class="mobile-cal-day outside" disabled></button>').join('');
    return `<section class="mobile-compact-calendar ${className}"><div class="mobile-compact-calendar-head"><h2>${title}</h2><span>${subtitle}</span></div><div class="mobile-compact-shell"><div class="mobile-compact-weekdays">${WEEKDAYS.map(w=>`<div>${w}</div>`).join('')}</div><div class="mobile-compact-grid">${blanks}${cells}${tail}</div></div></section>`;
  };

  const buildCombinedCompactCalendar=()=>{
    const mount=document.querySelector('#calendarMount');
    if(!mount) return;
    const source=mount.querySelector('.calendar-month-single');
    if(!isMobile()){
      source?.classList.remove('mobile-calendar-source');
      mount.querySelector('.mobile-combined-compact')?.remove();
      return;
    }
    if(!source) return;
    const cells=[...source.querySelectorAll('.day-cell[data-date]')];
    const dates=unique(cells.map(td=>td.dataset.date)).sort();
    if(!dates.length) return;
    source.classList.add('mobile-calendar-source');
    const title=source.querySelector('.calendar-month-title h2')?.textContent?.trim()||'Календар';
    const stamp=[title,cells.length,cells.filter(td=>td.children.length>0).length,cells.filter(td=>td.classList.contains('conflict')).length].join('|');
    const existing=mount.querySelector('.mobile-combined-compact');
    if(existing?.dataset?.sourceStamp===stamp) return;
    existing?.remove();
    const days=dates.map(date=>{
      const ds=cells.filter(td=>td.dataset.date===date);
      const busy=ds.filter(td=>td.children.length>0).length;
      const conflicts=ds.filter(td=>td.classList.contains('conflict')).length;
      const colors=[];
      ds.forEach(td=>{
        td.querySelectorAll('.combined-lesson-card').forEach(()=>colors.push('#2563eb'));
        td.querySelectorAll('.calendar-project-card').forEach(el=>colors.push(styleColor(el)||'#64748b'));
      });
      const d=new Date(date+'T12:00:00');
      return {date,count:busy,conflict:conflicts>0,today:date===new Date().toLocaleDateString('sv-SE'),weekend:[0,6].includes(d.getDay()),colors:unique(colors),meta:busy?`${busy} зай.`:'',title:busy?`${busy} зайнятих студентів`:''};
    });
    const holder=document.createElement('div');
    holder.className='mobile-combined-compact';
    holder.dataset.sourceStamp=stamp;
    holder.innerHTML=compactShell(days,{title,subtitle:'Натисни на день — побачиш зайнятих і вільних',className:'mobile-combined-calendar'});
    source.before(holder);
    holder.querySelectorAll('[data-mobile-date]').forEach(btn=>btn.onclick=()=>{
      const td=cells.find(x=>x.dataset.date===btn.dataset.mobileDate);
      td?.click();
    });
  };

  const buildAcademicCompactCalendar=()=>{
    const section=document.querySelector('#academicCalendarMount .academic-month-section');
    if(!section) return;
    const source=section.querySelector('.academic-month-grid');
    if(!isMobile()){
      source?.classList.remove('mobile-calendar-source');
      section.querySelector('.academic-mobile-compact')?.remove();
      return;
    }
    if(!source) return;
    const sourceDays=[...source.querySelectorAll('.academic-month-day[data-date]')];
    if(!sourceDays.length) return;
    source.classList.add('mobile-calendar-source');
    const title=section.querySelector('.academic-month-title h2')?.textContent?.trim()||'Розклад занять';
    const bulk=sourceDays.some(d=>d.classList.contains('bulk-mode'));
    const stamp=[title,sourceDays.length,source.querySelectorAll('.academic-month-lesson').length,source.querySelectorAll('.bulk-selected').length,bulk?'1':'0'].join('|');
    const existing=section.querySelector('.academic-mobile-compact');
    if(existing?.dataset?.sourceStamp===stamp) return;
    existing?.remove();
    const days=sourceDays.map(day=>{
      const date=day.dataset.date;
      const lessons=[...day.querySelectorAll('.academic-month-lesson')];
      const selected=lessons.length&&lessons.every(x=>x.classList.contains('bulk-selected'));
      const dt=new Date(date+'T12:00:00');
      return {date,count:lessons.length,today:day.classList.contains('today-date'),weekend:[0,6].includes(dt.getDay()),colors:lessons.slice(0,4).map(()=>selected?'#1d4ed8':'#60a5fa'),meta:lessons.length?`${lessons.length} пар.`:'',selected};
    });
    const holder=document.createElement('div');
    holder.className='academic-mobile-compact';
    holder.dataset.sourceStamp=stamp;
    holder.innerHTML=compactShell(days,{title,subtitle:bulk?'Масовий вибір увімкнено':'Натисни на день — відкриються заняття'});
    source.before(holder);
    holder.querySelectorAll('[data-mobile-date]').forEach(btn=>btn.onclick=()=>{
      const date=btn.dataset.mobileDate;
      const day=sourceDays.find(x=>x.dataset.date===date);
      if(!day) return;
      const lessonButtons=[...day.querySelectorAll('.academic-month-lesson')];
      const items=lessonButtons.map(src=>({
        title:src.querySelector('strong')?.textContent?.trim()||'Заняття',
        meta:[src.querySelector('.academic-month-lesson-time')?.textContent?.trim(),src.querySelector('span:not(.academic-bulk-check)')?.textContent?.trim()].filter(Boolean).join(' · '),
        note:src.querySelector('small')?.textContent?.trim()||'',
        selected:src.classList.contains('bulk-selected'),
        run:()=>src.click()
      }));
      const daySelect=day.querySelector('[data-bulk-date]');
      openSheet({date,kicker:'Розклад занять',items,extraAction:daySelect?{label:daySelect.classList.contains('selected')?'Зняти вибір з дня':'Вибрати весь день',run:()=>daySelect.click()}:null});
    });
  };

  const enhanceStudentProfileCalendar=()=>{
    const grid=document.querySelector('.student-calendar-view .student-month-grid');
    if(!grid||!isMobile()) return;
    grid.querySelectorAll('.student-month-day[data-date]').forEach(day=>{
      const events=[...day.querySelectorAll('.student-day-event')];
      events.forEach(ev=>{
        const card=ev.querySelector('.calendar-project-card');
        ev.style.setProperty('--mobile-dot-color',styleColor(card)||'#64748b');
      });
      if(day.dataset.mobileDayBound==='1') return;
      day.dataset.mobileDayBound='1';
      day.addEventListener('click',()=>{
        const current=[...day.querySelectorAll('.student-day-event')];
        if(!current.length) return;
        const date=day.dataset.date;
        const items=current.map(src=>({
          title:src.getAttribute('title')||src.textContent.trim()||'Подія',
          meta:'Натисни, щоб відкрити деталі',
          run:()=>src.click()
        }));
        openSheet({date,kicker:'Зайнятість студента',items});
      });
    });
  };

  const enhance=()=>{
    enhanceFrame=0;
    buildCombinedCompactCalendar();
    buildAcademicCompactCalendar();
    enhanceStudentProfileCalendar();
  };
  const queueEnhance=()=>{
    if(enhanceFrame) return;
    enhanceFrame=requestAnimationFrame(enhance);
  };

  const detect=()=>{
    const w=Math.max(root.clientWidth||0,window.innerWidth||0);
    const touch=((navigator.maxTouchPoints||0)>0)||(window.matchMedia&&window.matchMedia('(pointer:coarse)').matches);
    const mode=w<=700?'mobile':(w<=1180||(touch&&w<=1366))?'tablet':'desktop';
    body.classList.remove('ui-mobile','ui-tablet','ui-desktop');
    body.classList.add('ui-'+mode);
    body.dataset.uiMode=mode;
    root.dataset.uiMode=mode;
    const h=window.visualViewport?.height||window.innerHeight||0;
    root.style.setProperty('--rems-vh',(h*.01)+'px');
    nav?.setAttribute('aria-hidden',mode==='mobile'?'false':'true');
    queueEnhance();
  };
  detect();
  addEventListener('resize',detect,{passive:true});
  addEventListener('orientationchange',()=>setTimeout(detect,80),{passive:true});
  window.visualViewport?.addEventListener('resize',detect,{passive:true});

  const activeObserver=new MutationObserver(ms=>{
    if(!body.classList.contains('ui-mobile')) return;
    if(!ms.some(m=>m.attributeName==='class')) return;
    document.querySelector('.mobile-bottom-nav .nav.active')?.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});
  });
  document.querySelectorAll('.mobile-bottom-nav .nav').forEach(x=>activeObserver.observe(x,{attributes:true}));

  const appRoot=document.querySelector('#app');
  if(appRoot){
    const calendarObserver=new MutationObserver(()=>queueEnhance());
    calendarObserver.observe(appRoot,{childList:true,subtree:true});
  }

  document.addEventListener('focusin',e=>{
    if(!body.classList.contains('ui-mobile')||!e.target.matches('input,select,textarea')) return;
    if(e.target.closest('dialog[open]')) setTimeout(()=>e.target.scrollIntoView({block:'center',behavior:'smooth'}),120);
  });
})();
