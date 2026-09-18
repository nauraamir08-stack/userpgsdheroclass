(function(){
  const fallback={
    home_eyebrow:'PGSD H 2026 • UNESA', home_title:'HERO|CLASS.', home_lead:'Satu kelas, banyak cerita. Tempat kami belajar, bertumbuh, dan menyimpan perjalanan bersama.',
    announcement_title:'PPPK Day 2', announcement_text:'19 September 2026 • 06.00 WIB • Zona Selingkup FIP UNESA & Lab Merdeka.', announcement_date:'19 SEPTEMBER 2026', announcement_time:'06.00 WIB — Zona Selingkup FIP UNESA & Lab Merdeka.'
  };
  window.heroFallback=fallback;
  window.heroDBReady=function(cb){ if(window.HERO_DB) cb(window.HERO_DB); else document.addEventListener('hero-db-ready',()=>cb(window.HERO_DB),{once:true}); };
  window.heroWhenReady=function(cb){
    if(window.HERO_DB) return cb(window.HERO_DB);
    const url=window.HERO_CONFIG?.SUPABASE_URL||'';
    if(url && !url.includes('YOUR-PROJECT')) return document.addEventListener('hero-db-ready',()=>cb(window.HERO_DB),{once:true});
    cb(null);
  };
  window.heroQuery=async function(table,opts={}){
    if(!window.HERO_DB) return {data:null,error:null};
    let q=window.HERO_DB.from(table).select(opts.select||'*');
    if(opts.order) q=q.order(opts.order,{ascending:opts.ascending!==false});
    if(opts.limit) q=q.limit(opts.limit);
    return await q;
  };

  window.heroStorageUrl=function(bucket,value){
    if(!value) return '';
    if(/^https?:\/\//i.test(value)) return value;
    if(!window.HERO_DB) return value;
    return window.HERO_DB.storage.from(bucket).getPublicUrl(value).data.publicUrl||'';
  };
  window.heroContent=async function(){
    if(!window.HERO_DB) return fallback;
    const {data}=await window.HERO_DB.from('site_content').select('key,value');
    return Object.assign({},fallback,Object.fromEntries((data||[]).map(x=>[x.key,x.value])));
  };
})();
