/* REMS Control v39 — one interface, three screen sizes.
   Responsive code now changes layout only. It does not replace calendars,
   duplicate controls, or create alternate mobile workflows. */
(()=>{
  const root=document.documentElement;
  const body=document.body;
  const nav=document.querySelector('.mobile-bottom-nav');
  let raf=0;

  const detect=()=>{
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(()=>{
      const w=Math.max(root.clientWidth||0,window.innerWidth||0);
      const mode=w<=700?'mobile':w<=1180?'tablet':'desktop';
      body.classList.remove('ui-mobile','ui-tablet','ui-desktop');
      body.classList.add('ui-'+mode);
      body.dataset.uiMode=mode;
      root.dataset.uiMode=mode;
      const h=window.visualViewport?.height||window.innerHeight||0;
      root.style.setProperty('--rems-vh',(h*.01)+'px');
      nav?.setAttribute('aria-hidden',mode==='mobile'?'false':'true');
    });
  };

  detect();
  addEventListener('resize',detect,{passive:true});
  addEventListener('orientationchange',()=>setTimeout(detect,80),{passive:true});
  window.visualViewport?.addEventListener('resize',detect,{passive:true});

  document.addEventListener('focusin',e=>{
    if(!body.classList.contains('ui-mobile')||!e.target.matches('input,select,textarea')) return;
    if(e.target.closest('dialog[open]')) setTimeout(()=>e.target.scrollIntoView({block:'center',behavior:'smooth'}),120);
  });
})();
