/* ===== 1. 打字機標題 ===== */
const text="Design that empowers.\nExperience that connects.",h1=document.getElementById("type"),content=h1.querySelector(".typewriter-content"),cur=h1.querySelector(".cur");
const showRest=()=>{document.getElementById("sub").classList.add("in");document.getElementById("cta").classList.add("in")};
if(matchMedia("(prefers-reduced-motion: reduce)").matches){content.textContent=text;showRest()}
else{let i=0;const node=document.createTextNode("");content.appendChild(node);(function t(){node.data=text.slice(0,++i);i<text.length?setTimeout(t,55):showRest()})()}

/* ===== 2. 證書資料（修改這裡即可更新）===== */
const certs=[["NVIDIA","使用提示工程開發大型語言模型（LLM）應用程式",1],["Google 數位人才探索計劃","數位行銷學程結業證書",1],["NVIDIA DLI","嵌入式邊緣運算 AI 實務認證"],["Anthropic","Claude Code in action 證書"],["台灣人工智慧學校","公民 AI 素養合格行動家證明"],["經濟部產業 AI 智慧加值服務","AI 人才培訓完訓證書"],["中小企業網路大學校","AI 完訓證書"],["Google Cloud 數位人才探索計劃","Google Cloud 學程結業證書"]];
document.getElementById("certList").innerHTML=certs.map(c=>`<div class="card cert rv${c[2]?" new":""}"><small>${c[0]}</small><span>${c[1]}</span></div>`).join("");

/* ===== 3. 進場動畫 + 數字計數 ===== */
const count=el=>{const to=+el.dataset.n,s=performance.now();(function f(n){const p=Math.min((n-s)/1400,1);el.textContent=Math.round(to*(1-Math.pow(2,-10*p)));if(p<1)requestAnimationFrame(f)})(s)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll(".n").forEach(count);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach((el,i)=>{el.style.transitionDelay=(i%3)*80+"ms";io.observe(el)});

/* ===== 4. 導覽列：目前區塊高亮 + 手機選單 ===== */
const links=[...document.querySelectorAll("nav a.l")];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section[id]").forEach(s=>spy.observe(s));
const menu=document.getElementById("menu"),bg=document.getElementById("burger");
const closeMenu=()=>{menu.classList.remove("open");bg.setAttribute("aria-expanded","false")};
bg.onclick=()=>{const o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
menu.addEventListener("click",e=>{if(e.target.closest("a"))closeMenu()});

/* ===== 5. 粒子連線背景（分頁不可見時暫停）===== */
(function(){
 if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
 const c=document.getElementById("fx"),x=c.getContext("2d");let W,H,P=[],run=true;
 const size=()=>{W=c.width=innerWidth;H=c.height=innerHeight;P=Array.from({length:Math.min(55,Math.floor(W/24))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))};
 size();addEventListener("resize",size);
 document.addEventListener("visibilitychange",()=>{run=!document.hidden;if(run)draw()});
 function draw(){if(!run)return;x.clearRect(0,0,W,H);
  P.forEach((p,i)=>{p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;x.fillStyle="rgba(37,99,235,.45)";x.beginPath();x.arc(p.x,p.y,1.8,0,7);x.fill();
   for(let j=i+1;j<P.length;j++){const q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){x.strokeStyle="rgba(124,58,237,"+(.16*(1-d/130))+")";x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});
  requestAnimationFrame(draw)}
 draw();
})();
