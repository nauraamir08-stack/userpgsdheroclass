(function(){
 async function load(){const {data}=await heroQuery('memories',{order:'position'});const g=document.getElementById('memoriesGrid');if(!g||!data)return;g.innerHTML=data.map(x=>`<article class="card album">${x.image_url?`<img class="content-photo" src="${esc(x.image_url)}" alt="${esc(x.title)}">`:''}<h3>${esc(x.title)}</h3><p>${esc(x.description)}</p></article>`).join('');}
 function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}document.addEventListener('DOMContentLoaded',load);
})();
