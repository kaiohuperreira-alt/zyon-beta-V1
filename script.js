const items=[
 {name:"Forest",type:"Wallpaper",icon:"🌲",section:"library"},
 {name:"Midnight",type:"Wallpaper",icon:"🌙",section:"library"},
 {name:"Rainfall",type:"Atmosphere",icon:"🌧️",section:"library"},
 {name:"Misty Peaks",type:"Wallpaper",icon:"⛰️",section:"library"},
 {name:"Blue Hour",type:"Atmosphere",icon:"🌌",section:"recent"},
 {name:"After Dark",type:"Wallpaper",icon:"🌃",section:"recent"},
 {name:"Deep Woods",type:"Wallpaper",icon:"🌲",section:"favorites"},
 {name:"Night Drive",type:"Atmosphere",icon:"🚘",section:"favorites"}
];
let section="library";
const cards=document.getElementById("cards"),search=document.getElementById("search"),count=document.getElementById("count"),gridTitle=document.getElementById("grid-title"),sectionTitle=document.getElementById("section-title");
function render(){
 const q=search.value.toLowerCase().trim();
 const shown=items.filter(x=>x.section===section && (!q||x.name.toLowerCase().includes(q)||x.type.toLowerCase().includes(q)));
 gridTitle.textContent=section==="library"?"Library":section==="recent"?"Recently Played":"Favorites";
 sectionTitle.innerHTML=section==="library"?"Welcome to <b>ZYON</b>":gridTitle.textContent;
 count.textContent=`${shown.length} item${shown.length===1?"":"s"}`;
 cards.innerHTML=shown.length?shown.map(x=>`<article class="card"><div class="icon">${x.icon}</div><h3>${x.name}</h3><p>${x.type}</p></article>`).join(""):`<div class="empty">Nothing found here.</div>`;
}
document.querySelectorAll(".nav-item[data-section]").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));btn.classList.add("active");section=btn.dataset.section;search.value="";render()}));
search.addEventListener("input",render);
function updateClock(){document.getElementById("clock").textContent=new Intl.DateTimeFormat([], {hour:"numeric",minute:"2-digit"}).format(new Date())}
updateClock();setInterval(updateClock,1000);render();
