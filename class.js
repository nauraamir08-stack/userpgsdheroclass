(function(){
 async function load(){
  const [s,c,m]=await Promise.all([heroQuery('structure',{order:'position'}),heroQuery('courses',{order:'position'}),heroQuery('members',{order:'position'})]);
  const sg=document.getElementById('structureGrid'),pg=document.getElementById('pjGrid'),mg=document.querySelector('.members');
  const photoUrl=path=>heroStorageUrl('class-photos',path);
  if(sg&&s.data&&s.data.length) sg.innerHTML=s.data.map((x,i)=>`<article class="card role-card ${i===0?'featured':''}">${x.photo_path?`<img class="class-person-photo" src="${esc(photoUrl(x.photo_path))}" alt="">`:''}<div class="role-icon">${esc(x.icon||'✦')}</div><div><span class="role-label">${esc(x.role)}</span><h3>${esc(x.name)}</h3><p>${esc(x.nim||'')}</p></div></article>`).join('');
  if(pg&&c.data&&c.data.length) pg.innerHTML=c.data.map((x,i)=>`<article class="card pj-card">${x.photo_path?`<img class="class-person-photo" src="${esc(photoUrl(x.photo_path))}" alt="">`:''}<span class="pj-number">${String(i+1).padStart(2,'0')}</span><div><span class="role-label">MATA KULIAH</span><h3>${esc(x.name)}</h3><p>PJ: ${esc(x.pj)}</p></div></article>`).join('');
  if(mg&&m.data&&m.data.length) mg.innerHTML=m.data.map((x,i)=>`<article class="card member">${x.photo_path?`<img class="member-photo" src="${esc(photoUrl(x.photo_path))}" alt="">`:`<div class="avatar">${String(i+1).padStart(2,'0')}</div>`}<h3>${esc(x.name)}</h3><p class="nim">${esc(x.nim||'')}</p></article>`).join('');
 }
 function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
 document.addEventListener('DOMContentLoaded',()=>heroWhenReady(load));
})();