"use strict";
/* ============ CONFIGURATION — edit names, text, quiz & letter here ============ */
const CFG={
 me:"KM Adnan Sanim",
 boot:["Initializing BRO.exe...","Scanning birthday database...","Target identified: A H Nayem Islam.","Nickname detected: DBC.","Warning: Extreme levels of KP detected.","Happy Birthday."],
 reveal:["WAIT... TODAY IS DBC’S BIRTHDAY?! 🎂","Bro, even the system wasn’t ready for this."],
 badge:"DBC",
 profile:[["PLAYER","A H Nayem Islam"],["NICKNAME","DBC"],["CLASS","GAY"],["RARITY","BC"]],
 bars:[["Comedy Level",99,"99/100"],["GAY Level",100,"MAXIMUM"],["DBC STATUS",100,"VERIFIED"]],
 quiz:[
  {q:"Who is GAY?",a:[{t:"DBC 😎",fb:"Correct. Right He Is GAY.",pts:1},{t:"Me 🙋",fb:"Nice try. Humble lie detected.",pts:0},{t:"Both of us 🤝",fb:"Fair. Chaos loves company.",pts:0}]},
  {q:"Who starts the most nonsense?",a:[{t:"DBC 😎",fb:"Obviously. He’s the CEO of nonsense.",pts:1},{t:"Me 🙋",fb:"Rude. But the evidence is… unclear.",pts:0},{t:"Both of us 🤝",fb:"Partners in crime. Official.",pts:0}]},
  {q:"Who is more KIPTA?",a:[{t:"DBC 😎",fb:"Oscar-level performance every time.",pts:1},{t:"Me 🙋",fb:"Suspicious. Very suspicious.",pts:0},{t:"Both of us 🤝",fb:"A two-man drama series.",pts:0}]}],
 results:["Score 0: Wrong every time, yet still best friends. Bro Code allows it. 💙","Score 1: Not bad. DBC would’ve argued the other answers too. 😂","Score 2: Almost perfect. You know him too well. 😎","Score 3: PERFECT. Friendship level: UNBREAKABLE. 🏆"],
 achievements:[["🔥","PROFESSIONAL GAY","EPIC","#b36bff"],["🕶️","PARTNER IN CRIME","RARE","#35d0ff"],["😂","CERTIFIED DBC","EPIC","#ff5fa0"],["🤝","Good Friend","LEGENDARY","#ffd23f"],["👑","BIRTHDAY LEGEND","MYTHIC","#4dffb8"]],
 cake:{idle:"Light the candles, make a wish, then blow.",lit:"🔥 Candles are lit! Now make a wish.",wish:"🌠 Close your eyes and make a wish, DBC…",nolight:"Light the candles first, genius 😏",done:"Wish sent to the universe. 🎉"},
 hostel:{
  title:"যে হোস্টেল দিনগুলো আর কখনো ফিরে পাব না 🥹💙",
  lines:[
   "মনে আছে আমাদের সেই হোস্টেলের দিনগুলোর কথা? 🥹",
   "তখন প্রায় প্রতিদিন একসঙ্গে থাকা, অকারণে হাসাহাসি করা, ফালতু বিষয় নিয়ে কথা বলা আর ছোট ছোট মুহূর্তগুলোই যেন কত সুন্দর ছিল। তখন হয়তো বুঝতাম না, একদিন এই সাধারণ দিনগুলোকেই এতটা মিস করব।",
   "এখন আমরা দূরে, দুজনের জীবন দুদিকে এগিয়ে যাচ্ছে। আগের মতো চাইলেই একসঙ্গে সময় কাটানো হয় না। মাঝে মাঝে খুব ইচ্ছা করে, যদি আরেকবার সেই দিনগুলোতে ফিরে যেতে পারতাম! আবার যদি একসঙ্গে বসে হাসাহাসি করতে পারতাম, সেই পুরোনো পাগলামিগুলো করতে পারতাম, আর কোনো চিন্তা ছাড়াই সময় কাটাতে পারতাম।",
   "সত্যি বলতে, দোস্ত, সেই দিনগুলো খুব মিস করি। শুধু হোস্টেলটা না, সেই সময়টা, সেই পরিবেশটা, আর তোর সঙ্গে কাটানো মুহূর্তগুলোও মিস করি। তখন যেসব বিষয়কে খুব সাধারণ মনে হতো, আজ সেগুলোই অনেক স্পেশাল মনে হয়।",
   "জীবন হয়তো আমাদের আলাদা জায়গায় নিয়ে গেছে, কিন্তু আমাদের স্মৃতিগুলো তো আর বদলে যায়নি। দূরত্ব বেড়েছে, একসঙ্গে কাটানো সময় কমেছে, কিন্তু পুরোনো দিনগুলোর মূল্য আমার কাছে আগের চেয়ে আরও বেশি হয়ে গেছে।",
   "জানি, সময়কে পেছনে ফিরিয়ে নেওয়া সম্ভব না। কিন্তু খুব ইচ্ছা, কোনো একদিন আবার একসঙ্গে বসব, পুরোনো দিনের গল্প করব, আগের মতো হাসাহাসি করব, আর নতুন কিছু স্মৃতি তৈরি করব।",
   "হয়তো আমরা আর সেই হোস্টেলের দিনগুলোতে নেই, কিন্তু সেই দিনগুলোর স্মৃতি সবসময় আমাদের সঙ্গে থাকবে। ❤️"],
  end:"HOSTEL DAYS: FOREVER IN OUR HEARTS. 💙",
  next:"পরের লাইন ▶",
  button:"আর একটা কথা, DBC..."},
 intro:["আচ্ছা DBC...","এবার একটু ঠাট্টা বাদ।","তোকে সত্যি কিছু কথা বলি।"],
 letter:`শুভ জন্মদিন, DBC! 💙

ভাই, আমরা এত হাসিঠাট্টা, একে অপরকে রোস্ট করা আর উল্টাপাল্টা কাজ করে সময় কাটাই যে মাঝে মাঝে আসল কথাগুলো বলাই হয়ে ওঠে না।

সত্যি বলতে, তোর মতো একজন বন্ধু পেয়ে আমি খুশি।

একটা সত্যিকারের বন্ধুত্ব শুধু একসাথে হাসার নাম না। জীবন কঠিন হলে একে অপরের পাশে দাঁড়ানোও বন্ধুত্ব।

আমি চাই এই বছরটা তোর জন্য সুখ, ভালো স্বাস্থ্য, সাফল্য আর হাসার অসংখ্য কারণ নিয়ে আসুক।

এগিয়ে চল, নিজের ওপর বিশ্বাস রাখ, আর সামনে এগোতে থাক।

আর জীবন যতই ব্যস্ত হোক, আমরা যেন কখনো বোকা বোকা জোকস নিয়ে হাসা আর সাধারণ মুহূর্তগুলোকে স্মরণীয় করে তোলা বন্ধ না করি।


আমার বন্ধু হওয়ার জন্য ধন্যবাদ।

শুভ জন্মদিন, ভাই। আরও অনেক হাসি, আরও অনেক স্মৃতি, আর বন্ধুত্বের আরও অনেক বছরের জন্য শুভকামনা।

— [MY_NAME]`,
 gift:{
  title:"SOME MEMORIES NEVER FADE 🥹💙",
  tapGift:"Tap the gift 💙",
  tapText:"Tap the text to continue",
  lines:[
   "Happy Birthday, DBC. 💙",
   "Who knew those ordinary hostel days would become such special memories?",
   "Back then, we could laugh about the smallest things, spend time together without planning, and turn ordinary days into unforgettable moments.",
   "Now we’re far apart, living our own lives. Sometimes, I really wish we could go back to those days, even just for a little while.",
   "I miss those days, bro. I miss the laughter, the random nonsense, and simply having you around.",
   "We might not be together like before, but distance doesn’t erase the memories we’ve made or the friendship we share.",
   "I hope this birthday brings you happiness, success, good health, and many beautiful moments ahead.",
   "And someday, I hope we’ll sit together again, talk about old times, laugh at the same stupid jokes, and create new memories just like we used to."],
  final:"DISTANCE CHANGED OUR DAYS, NOT OUR MEMORIES. 💙",
  closing:"Happy Birthday, DBC. No matter how far apart life takes us, our hostel memories will always have a special place in my heart.",
  sign:"— [MY_NAME]",
  button:"RELIVE THE GOOD OLD DAYS"
 }
};
/* ============ ENGINE ============ */
const $=id=>document.getElementById(id),RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
let tok=0,cur=0;
const later=(f,ms)=>{const t=tok;setTimeout(()=>{if(t===tok)f()},ms)};
const mk=(tag,cls,txt,par)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;if(par)par.appendChild(e);return e};
const pop=e=>{e.classList.remove("pop");void e.offsetWidth;e.classList.add("pop")};
/* --- canvas: stars, confetti, fireworks --- */
const cv=$("fx"),cx=cv.getContext("2d");let W,H,P=[],S=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;S=Array.from({length:RM?40:90},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.3,t:Math.random()*6}))}
function confetti(n,gold){n=RM?Math.min(n,40):n;for(let i=0;i<n;i++){const L=i%2;P.push({k:"c",x:L?0:W,y:H,vx:(L?1:-1)*(Math.random()*9+3),vy:-(Math.random()*12+8),g:gold?.2:.35,c:gold?`hsl(${38+Math.random()*16},100%,${55+Math.random()*20}%)`:`hsl(${Math.random()*360},100%,60%)`,s:Math.random()*7+4,r:Math.random()*6,l:1})}}
function firework(x,y){const h=Math.random()*360;for(let i=0;i<60;i++){const a=Math.PI*2*i/60,v=Math.random()*4+1;P.push({k:"f",x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:.04,c:`hsl(${h},100%,65%)`,l:1})}}
const fireworks=n=>{for(let i=0;i<n;i++)later(()=>firework(W*(.15+Math.random()*.7),H*(.12+Math.random()*.35)),i*450)};
function loop(){cx.clearRect(0,0,W,H);const tm=RM?0:Date.now()/600;
 cx.shadowColor="#bfe9ff";cx.shadowBlur=document.body.classList.contains("hostel")?10:0;
 for(const s of S){cx.globalAlpha=.35+.65*Math.abs(Math.sin(s.t+tm));cx.fillStyle="#bfe9ff";cx.beginPath();cx.arc(s.x,s.y,s.r,0,6.3);cx.fill()}
 cx.shadowBlur=0;P=P.filter(p=>p.l>0&&p.y<H+30);
 for(const p of P){p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;cx.fillStyle=p.c;
  if(p.k==="c"){p.vx*=.99;p.l-=.004;p.r+=.2;cx.globalAlpha=Math.min(1,p.l*2);cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);cx.restore()}
  else{p.vx*=.985;p.vy*=.985;p.l-=.012;cx.globalAlpha=Math.max(0,p.l);cx.beginPath();cx.arc(p.x,p.y,2.2,0,6.3);cx.fill()}}
 cx.globalAlpha=1;requestAnimationFrame(loop)}
addEventListener("resize",rs);rs();loop();
/* --- scene 1: boot --- */
function boot(){const t=$("term"),n=CFG.boot.length;t.textContent="";$("pb").style.width="0";$("reveal").classList.add("hide");
 CFG.boot.forEach((l,i)=>later(()=>{t.textContent+="> "+l+"\n";$("pb").style.width=((i+1)/n*100)+"%"},500+i*650));
 later(()=>{$("r1").textContent=CFG.reveal[0];$("r2").textContent=CFG.reveal[1];$("reveal").classList.remove("hide");confetti(80)},900+n*650)}
/* --- scene 2: profile --- */
function buildProfile(){const c=$("card");mk("div","badge",CFG.badge,c);
 CFG.profile.forEach(([k,v])=>{const r=mk("div","kv",k,c);mk("b","",v,r)});
 CFG.bars.forEach(([k,v,l])=>{const r=mk("div","st",k,c);mk("em","",l,r);const tr=mk("div","trk","",r);tr.firstChild;const b=mk("b","","",tr);b.style.setProperty("--w",v+"%")})}
function prof(){const c=$("card");c.classList.remove("go");void c.offsetWidth;later(()=>c.classList.add("go"),150)}
/* --- scene 4: quiz --- */
let qi=0,sc=0;
function quiz(){qi=0;sc=0;ask()}
function ask(){const b=$("quiz"),Q=CFG.quiz[qi];b.textContent="";mk("div","hud",`Question ${qi+1}/${CFG.quiz.length} · Score: ${sc}`,b);mk("h3","",Q.q,b).style.marginBottom="8px";
 const fb=mk("div","fb","",b),nx=mk("button","btn alt hide",qi+1<CFG.quiz.length?"NEXT QUESTION ▶":"SEE RESULT ▶",b);const bs=[];
 Q.a.forEach(o=>{const x=mk("button","btn",o.t);b.insertBefore(x,fb);bs.push(x);x.onclick=()=>{bs.forEach(y=>y.disabled=true);sc+=o.pts;fb.textContent=o.fb;pop(fb);nx.classList.remove("hide");nx.focus();if(o.pts)confetti(30)}});
 nx.onclick=()=>{qi++;qi<CFG.quiz.length?ask():fin()}}
function fin(){const b=$("quiz");b.textContent="";mk("div","hud",`Final score: ${sc}/${CFG.quiz.length}`,b);const r=mk("p","fb",CFG.results[Math.min(sc,CFG.results.length-1)],b);pop(r);confetti(sc*50);
 const row=mk("div","row","",b),a=mk("button","btn alt","🔁 PLAY AGAIN",row),n=mk("button","btn","NEXT ▶",row);a.onclick=quiz;n.onclick=()=>go(4)}
/* --- scene 5: achievements --- */
function buildAch(){const w=$("ach");CFG.achievements.forEach(([i,n,r,c])=>{const a=mk("div","a","",w);a.style.setProperty("--rc",c);mk("span","",i,a);const d=mk("div","","",a);mk("small","",r,d);mk("b","",n,d)})}
function ach(){document.querySelectorAll(".a").forEach((a,i)=>{a.classList.remove("on");later(()=>a.classList.add("on"),300+i*700)})}
/* --- scene 6: cake --- */
const cmsg=t=>{const e=$("cmsg");e.textContent=t;pop(e)};
function cake(){$("cake").classList.remove("lit");$("cmsg").textContent=CFG.cake.idle}
$("light").onclick=()=>{$("cake").classList.add("lit");cmsg(CFG.cake.lit)};
$("wish").onclick=()=>{cmsg(CFG.cake.wish);confetti(25)};
$("blow").onclick=()=>{const c=$("cake");if(!c.classList.contains("lit"))return cmsg(CFG.cake.nolight);
 c.classList.remove("lit");document.querySelectorAll(".candle").forEach(d=>{const s=mk("span","smoke","",d);setTimeout(()=>s.remove(),2500)});cmsg(CFG.cake.done);confetti(220);fireworks(3)};
/* --- scene 7: letter --- */
function letter(){const i=$("intro"),L=$("letter"),n=CFG.intro.length;i.textContent="";L.classList.add("hide");L.textContent="";$("lnext").classList.add("hide");
 CFG.intro.forEach((t,k)=>later(()=>{i.textContent=t;pop(i)},400+k*2400));
 later(()=>{i.textContent="";L.classList.remove("hide");type(L,CFG.letter.replace("[MY_NAME]",CFG.me),()=>$("lnext").classList.remove("hide"))},400+n*2400)}
const seg=s=>window.Intl&&Intl.Segmenter?Array.from(new Intl.Segmenter(undefined,{granularity:"grapheme"}).segment(s),x=>x.segment):Array.from(s);
function type(el,txt,done){const g=seg(txt),n=g.length;let k=0;const t=tok,iv=setInterval(()=>{if(t!==tok)return clearInterval(iv);k=Math.min(n,k+2);el.textContent=g.slice(0,k).join("");if(k>=n){clearInterval(iv);done()}},32);el.onclick=()=>{k=n};return()=>{k=n}}
/* --- scene 6: hostel days (tap NEXT to move to the next line) --- */
function hostel(){const H=CFG.hostel,L=$("hLine"),E=$("hEnd"),B=$("hNextLine"),F=$("hBtn"),P=$("hProg"),n=H.lines.length;
 $("hTitle").textContent=H.title;E.textContent=H.end;F.textContent=H.button;B.textContent=H.next;
 L.textContent="";E.classList.add("hide");F.classList.add("hide");B.classList.remove("hide");P.textContent="";for(let k=0;k<n;k++)mk("i","","",P);
 let i=-1,typing=false,skip=()=>{};
 const show=()=>{i++;[...P.children].forEach((d,k)=>d.classList.toggle("on",k<=i));L.textContent="";pop(L);typing=true;skip=type(L,H.lines[i],()=>{typing=false});L.onclick=step};
 function step(){if(typing)return skip();if(i+1<n)return show();E.classList.remove("hide");pop(E);B.classList.add("hide");F.classList.remove("hide");F.focus()}
 B.onclick=step;show()}
/* --- scene 8: final gift & ending --- */
function gift(){const G=CFG.gift,T=$("gTap");$("gTitle").textContent=G.title;T.textContent=G.tapGift;T.classList.remove("hide");$("relive").textContent=G.button;
 $("gift").classList.remove("hide","open");$("gLine").classList.add("hide");$("gLine").textContent="";$("gFin").classList.add("hide")}
$("gift").onclick=()=>{const g=$("gift");if(g.classList.contains("open"))return;g.classList.add("open");document.body.classList.add("golden");later(()=>confetti(60,true),1800);later(giftLines,3400)};
function giftLines(){const G=CFG.gift,H=G.lines,L=$("gLine"),t=tok;$("gTap").textContent=G.tapText;L.classList.remove("hide");
 let i=-1,typing=false,skip=()=>{},tm;
 const next=()=>{clearTimeout(tm);if(t!==tok)return;if(++i>=H.length)return giftEnd();const s=H[i];L.textContent="";pop(L);typing=true;skip=type(L,s,()=>{typing=false;tm=setTimeout(next,1300+s.length*16)});L.onclick=tap};
 const tap=()=>typing?skip():next();next()}
function giftEnd(){const G=CFG.gift;$("gLine").classList.add("hide");$("gift").classList.add("hide");$("gTap").classList.add("hide");
 $("gF1").textContent=G.final;$("gF2").textContent=G.closing;$("gSig").textContent=G.sign.replace("[MY_NAME]",CFG.me);$("gFin").classList.remove("hide");confetti(70,true);later(()=>confetti(40,true),2600)}
$("relive").onclick=()=>go(6);
/* --- navigation --- */
const hooks={1:boot,2:prof,3:quiz,4:ach,5:cake,6:hostel,7:letter,8:gift};
function go(n){tok++;cur=n;document.querySelectorAll(".scene").forEach(s=>s.classList.toggle("active",s.id==="s"+n));
 document.body.classList.toggle("calm",n>=6);document.body.classList.toggle("hostel",n===6||n===8);document.body.classList.remove("golden");document.querySelectorAll("#dots button").forEach((b,i)=>b.toggleAttribute("aria-current",i+1===n));scrollTo(0,0);hooks[n]()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)go(+b.dataset.go)});

for(let i=1;i<=8;i++){const b=mk("button","","",$("dots"));b.setAttribute("aria-label","Go to scene "+i);b.onclick=()=>go(i)}
/* --- optional music (WebAudio; no audio files) --- */
let ac=null,mt;
const song=[[262,.75],[262,.25],[294,1],[262,1],[349,1],[330,2],[262,.75],[262,.25],[294,1],[262,1],[392,1],[349,2],[262,.75],[262,.25],[523,1],[440,1],[349,1],[330,1],[294,2],[466,.75],[466,.25],[440,1],[349,1],[392,1],[349,2]];
function play(){if(!ac)return;let t=ac.currentTime+.05;const a=ac;song.forEach(([f,b])=>{const o=a.createOscillator(),g=a.createGain(),d=b*.42;o.type="triangle";o.frequency.value=f;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.1,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+d-.02);o.start(t);o.stop(t+d);t+=d});mt=setTimeout(play,(t-a.currentTime+1.5)*1000)}
$("music").onclick=function(){
 if(ac){clearTimeout(mt);ac.close();ac=null;this.textContent="🎵 Music: off";this.setAttribute("aria-pressed","false");return}
 try{ac=new(window.AudioContext||window.webkitAudioContext)();ac.resume();play();this.textContent="🎵 Music: on";this.setAttribute("aria-pressed","true")}catch(e){ac=null;this.textContent="🎵 Unavailable";this.disabled=true}};
buildProfile();buildAch();go(1);