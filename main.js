(function(){
  const cfg=window.HERO_CONFIG||{};
  if(!cfg.SUPABASE_URL || cfg.SUPABASE_URL.includes('YOUR-PROJECT') || !cfg.SUPABASE_ANON_KEY || cfg.SUPABASE_ANON_KEY.includes('YOUR-SUPABASE')) return;
  const load=document.createElement('script');
  load.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  load.onload=()=>{window.HERO_DB=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY); document.dispatchEvent(new Event('hero-db-ready'));};
  document.head.appendChild(load);
})();
