(function(){
  const fallback={
    home_eyebrow:'PGSD H 2026 • UNESA', home_title:'HERO|CLASS.', home_lead:'Satu kelas, banyak cerita. Tempat kami belajar, bertumbuh, dan menyimpan perjalanan bersama.',
    announcement_title:'PPPK Day 2', announcement_text:'19 September 2026 • 06.00 WIB • Zona Selingkup FIP UNESA & Lab Merdeka.', announcement_date:'19 SEPTEMBER 2026', announcement_time:'06.00 WIB — Zona Selingkup FIP UNESA & Lab Merdeka.'
  };
  window.heroFallback=fallback;
  window.heroDBReady=function(cb){ if(window.HERO_DB) cb(window.HERO_DB); else document.addEventListener('hero-db-ready',()=>cb(window.HERO_DB),{once:true}); };
  window.heroQuery=async function(table,opts={}){
    if(!window.HERO_DB) return {data:null,error:null};
    let q=window.HERO_DB.from(table).select(opts.select||'*');
    if(opts.order) q=q.order(opts.order,{ascending:opts.ascending!==false});
    if(opts.limit) q=q.limit(opts.limit);
    return await q;
  };
  window.heroContent=async function(){
    if(!window.HERO_DB) return fallback;
    const {data}=await window.HERO_DB.from('site_content').select('key,value');
    return Object.assign({},fallback,Object.fromEntries((data||[]).map(x=>[x.key,x.value])));
  };
})();
