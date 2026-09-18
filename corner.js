(function(){
 async function load(){const {data}=await heroQuery('corner',{order:'position'});const g=document.getElementById('cornerGrid');if(!g||!data)return;g.innerHTML=data.map(x=>`<article class="card corner-card"><div class="corner-icon">${esc(x.icon||'✨')}</div><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p></article>`).join('');}
 function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}document.addEventListener('DOMContentLoaded',load);
})();
