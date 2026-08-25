(function(){
  const root=document.documentElement;
  const body=document.body;
  const nav=document.querySelector('.mobile-bottom-nav');
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

  document.addEventListener('focusin',e=>{
    if(!body.classList.contains('ui-mobile')||!e.target.matches('input,select,textarea')) return;
    if(e.target.closest('dialog[open]')) setTimeout(()=>e.target.scrollIntoView({block:'center',behavior:'smooth'}),120);
  });
})();
