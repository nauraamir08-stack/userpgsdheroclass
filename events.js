(function(){
 async function load(){
  const {data}=await heroQuery('events',{order:'position'}); const g=document.getElementById('eventsGrid'); if(!g||!data) return;
  g.innerHTML=data.map(x=>`<article class="card event-card">${x.image_url?`<img class="content-photo" src="${esc(x.image_url)}" alt="">`:''}<span class="date">${esc(x.event_date)}</span><h3>${esc(x.title)}</h3><p>${esc(x.time_location)}</p>${x.description?`<p>${esc(x.description)}</p>`:''}</article>`).join('');
 }
 function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));} document.addEventListener('DOMContentLoaded',load);
})();
