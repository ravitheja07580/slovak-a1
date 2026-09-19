/* All text playback is local bundled synthetic speech. No learner audio is uploaded. */
window.LearningAudio=(()=>{
 let active=null,queue=[],generation=0,rate=1,waiting=false;
 const status=t=>{const n=document.getElementById('audio-status');if(n)n.textContent=t};
 function stop(){generation++;queue=[];waiting=false;const b=document.getElementById('continue-audio');if(b)b.hidden=true;if(active){active.pause();active.src='';active=null}status('Playback stopped.');}
 async function next(token){
  if(token!==generation)return;
  if(!queue.length){active=null;status('Playback finished.');return}
  const item=queue.shift();
  if(item.pause){waiting=true;const b=document.getElementById('continue-audio');if(b)b.hidden=false;status('Your turn — say your line, then tap Continue.');return}
  const path=(window.STUDY_AUDIO||{})[item.text];
  if(!path){stop();status('This recording is unavailable. Please try another line.');return}
  if(!active)active=new Audio();active.src=path;active.playbackRate=rate;
  active.onended=()=>next(token);
  active.onerror=()=>{if(token===generation){stop();status('Audio could not load. Please check that the audio files are available.')}};
  status(item.label||'Playing generated Slovak audio…');
  try{await active.play()}catch{if(token===generation){stop();status('Playback was blocked. Press Play to try again.')}}
 }
 function play(items){stop();queue=items.map(x=>typeof x==='string'?{text:x}:x);next(generation)}
 function speed(n){rate=[0.7,0.85,1,1.15].includes(Number(n))?Number(n):1;if(active)active.playbackRate=rate}
 function resume(){if(!waiting)return;waiting=false;const b=document.getElementById('continue-audio');if(b)b.hidden=true;next(generation)}
 window.addEventListener('pagehide',stop);
 return {play,stop,speed,resume};
})();
