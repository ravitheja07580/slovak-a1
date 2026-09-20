(()=>{
// Shared phone navigation stays outside the changing course render roots.
const page=location.pathname.split('/').pop()||'index.html';
const isBook=false,isWords=page==='vocabulary.html',isPractice=page==='learn.html';
const title=isBook?'Conversation book':isWords?'Everyday 1,000':isPractice?'A1 practice':page==='mobile.html'?'Install & help':'90-day course';
const appbar=document.createElement('div');appbar.className='mobile-appbar';
appbar.innerHTML='<a href="learn.html" class="mobile-logo" aria-label="Slovak A1 home">sk<span>/en</span></a><strong>'+title+'</strong><button type="button" class="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-sections">Sections</button>';
document.body.prepend(appbar);
const menuButton=appbar.querySelector('button');let menuOpen=false;
function sections(){return document.querySelector('.learn-side,.shell>.sidebar,.layout>.sidebar')}
function updateMenu(){const menu=sections();menuButton.hidden=!menu;if(menu){menu.id='mobile-sections';menu.classList.toggle('mobile-sections-open',menuOpen)}menuButton.setAttribute('aria-expanded',String(menuOpen));menuButton.textContent=menuOpen?'Close sections':'Sections'}
menuButton.addEventListener('click',()=>{menuOpen=!menuOpen;updateMenu();if(menuOpen)window.scrollTo({top:0,behavior:'instant'})});
document.addEventListener('click',e=>{const menu=e.target.closest('.learn-side,.sidebar');if(menu&&e.target.closest('a,[data-act="nav"],[data-act="day"],[data-act="unit"],.unit')){menuOpen=false;updateMenu();menuButton.focus({preventScroll:true})}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuOpen){menuOpen=false;updateMenu();menuButton.focus()}});
const tabs=document.createElement('nav');tabs.className='mobile-bottom-nav';tabs.setAttribute('aria-label','Learning areas');
const destinations=[['index.html','Course','90 days'],['learn.html','Practice','A1 skills'],['vocabulary.html','Words','1,000 cards']];
// Only the local companion exposes the private conversation book.

tabs.innerHTML=destinations.map(([url,label,detail])=>'<a href="'+url+'" '+(page===url?'aria-current="page"':'')+'><strong>'+label+'</strong><small>'+detail+'</small></a>').join('');document.body.append(tabs);
const renderRoot=document.querySelector('#app,#learn-app,#book-app');
if(renderRoot)new MutationObserver(updateMenu).observe(renderRoot,{childList:true,subtree:false});
updateMenu();
let installEvent=null;
const bar=document.createElement('div');bar.className='phone-tools';bar.innerHTML='<a href="mobile.html">Open on your phone / install app</a><button type="button" data-install hidden>Install Slovak A1</button><span id="install-status" role="status"></span>';document.body.append(bar);
const button=bar.querySelector('[data-install]'),status=bar.querySelector('#install-status');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installEvent=event;button.hidden=false});
button.addEventListener('click',async()=>{if(!installEvent)return;button.disabled=true;try{await installEvent.prompt();const result=await installEvent.userChoice;status.textContent=result.outcome==='accepted'?'Installation requested.':'You can install later from your browser menu.'}catch{status.textContent='Use your browser menu to add this app to your home screen.'}finally{installEvent=null;button.hidden=true;button.disabled=false}});
window.addEventListener('appinstalled',()=>{button.hidden=true;installEvent=null;status.textContent='App installed.'});
const local=location.hostname==='localhost'||location.hostname==='127.0.0.1';
const link=document.getElementById('phone-link');if(link){if(local){link.textContent='This is the computer-only preview. Use the published HTTPS link supplied with the app on your phone.';link.removeAttribute('href')}else{link.href=new URL('learn.html',location.href).href;link.textContent=link.href}}
})();
