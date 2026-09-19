(()=>{
let installEvent=null;
const bar=document.createElement('div');bar.className='phone-tools';bar.innerHTML='<a href="mobile.html">Open on your phone / install app</a><button type="button" data-install hidden>Install Slovak A1</button><span id="install-status" role="status"></span>';document.body.append(bar);
const button=bar.querySelector('[data-install]'),status=bar.querySelector('#install-status');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installEvent=event;button.hidden=false});
button.addEventListener('click',async()=>{if(!installEvent)return;button.disabled=true;try{await installEvent.prompt();const result=await installEvent.userChoice;status.textContent=result.outcome==='accepted'?'Installation requested.':'You can install later from your browser menu.'}catch{status.textContent='Use your browser menu to add this app to your home screen.'}finally{installEvent=null;button.hidden=true;button.disabled=false}});
window.addEventListener('appinstalled',()=>{button.hidden=true;installEvent=null;status.textContent='App installed.'});
const local=location.hostname==='localhost'||location.hostname==='127.0.0.1';
const link=document.getElementById('phone-link');if(link){if(local){link.textContent='This is the computer-only preview. Use the published HTTPS link supplied with the app on your phone.';link.removeAttribute('href')}else{link.href=new URL('learn.html',location.href).href;link.textContent=link.href}}
})();
