(function(){
  const overlay=document.getElementById('welcomeOverlay'); if(overlay) setTimeout(()=>overlay.classList.add('hide'),3000);
  function set(id,v){const e=document.getElementById(id);if(e)e.textContent=v||'';}
  async function load(){
    const c=await window.heroContent();
    set('homeEyebrow',c.home_eyebrow); const title=document.getElementById('homeTitle'); if(title) title.innerHTML=(c.home_title||'HERO|CLASS.').replace('|','<br><span>');
    set('homeLead',c.home_lead); set('announcementTitle',c.announcement_title); set('announcementTitle2',c.announcement_title); set('announcementText',c.announcement_text); set('announcementDate',c.announcement_date); set('announcementTime',c.announcement_time);
    if(window.HERO_DB){ const {data}=await heroQuery('events',{order:'position'}); if(data&&data[0]){set('announcementTitle',data[0].title);set('announcementTitle2',data[0].title);set('announcementText',`${data[0].event_date} • ${data[0].time_location}`);set('announcementDate',data[0].event_date);set('announcementTime',data[0].time_location);}}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',load); else load();
})();
