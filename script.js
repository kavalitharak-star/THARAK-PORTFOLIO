/* ==========================================
   TRIM TO TREND
   PREMIUM JAVASCRIPT
   PART 1
========================================== */

// =========================
// YEAR
// =========================

const year = document.getElementById("year");

if(year){

year.textContent = new Date().getFullYear();

}

// =========================
// TYPING EFFECT
// =========================

const typing = document.getElementById("typing");

const words = [

"Professional Video Editing",

"YouTube Editing",

"Instagram Reels",

"Motion Graphics",

"Cinematic Editing",

"Thumbnail Design"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

if(!typing) return;

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex);

charIndex++;

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}

else{

typing.textContent = current.substring(0,charIndex);

charIndex--;

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 45 : 90);

}

typeEffect();

// =========================
// COUNTER
// =========================

const counters = document.querySelectorAll(".count");

const speed = 200;

counters.forEach(counter=>{

const update = ()=>{

const target = +counter.dataset.target;

const current = +counter.innerText;

const increment = target / speed;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(update,15);

}

else{

counter.innerText = target;

}

}

update();

});

// =========================
// SCROLL TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =========================
// NAVBAR SHADOW
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.75)";

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}

else{

nav.style.background="rgba(0,0,0,.45)";

nav.style.boxShadow="none";

}

});
/* ==========================================
   PREMIUM JAVASCRIPT
   PART 2
========================================== */

// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(
".about-card,.service,.portfolio-card,.team-card,.counter-box,.testimonial-card,.faq-item,.contact-card"
);

const revealOnScroll = ()=>{

const trigger = window.innerHeight * 0.85;

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.style.opacity="1";

item.style.transform="translateY(0)";

}

});

};

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(70px)";

item.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top = section.offsetTop-150;

const height = section.offsetHeight;

if(scrollY>=top){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

button.style.setProperty("--x",x+"px");
button.style.setProperty("--y",y+"px");

});

});

// =========================
// IMAGE PARALLAX
// =========================

window.addEventListener("scroll",()=>{

const logo=document.querySelector(".hero-logo img");

if(logo){

logo.style.transform=`translateY(${window.scrollY*0.08}px)`;

}

});

// =========================
// PRELOADER (OPTIONAL)
// =========================

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"%cTrim To Trend 🚀",
"color:#00c6ff;font-size:24px;font-weight:bold;"
);

console.log(
"%cWebsite Developed by Tharak & Iswanth",
"color:white;font-size:16px;"
);
/* ==========================================
   TRIM TO TREND
   PREMIUM JAVASCRIPT
   PART 3 (FINAL)
========================================== */

// =========================
// MOUSE GLOW EFFECT
// =========================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(0,198,255,.18), transparent 70%)";
glow.style.transform = "translate(-50%,-50%)";
glow.style.zIndex = "-1";
glow.style.transition = "left .08s linear, top .08s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});

// =========================
// HERO FLOAT EFFECT
// =========================

const heroLogo = document.querySelector(".hero-logo img");

if(heroLogo){

setInterval(()=>{

heroLogo.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-12px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500,

iterations:1,

easing:"ease-in-out"

});

},3500);

}

// =========================
// SMOOTH SCROLL LINKS
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =========================
// CARD HOVER SOUND (OPTIONAL)
// =========================

const cards=document.querySelectorAll(

".about-card,.service,.portfolio-card,.team-card"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

});

// =========================
// RANDOM GLOW
// =========================

setInterval(()=>{

document.body.style.filter="brightness(1.02)";

setTimeout(()=>{

document.body.style.filter="brightness(1)";

},300);

},12000);

// =========================
// PAGE LOADED
// =========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// =========================
// DISABLE RIGHT CLICK
// (REMOVE IF YOU DON'T WANT)
// =========================

// document.addEventListener("contextmenu",(e)=>{

// e.preventDefault();

// });

// =========================
// DISABLE IMAGE DRAG
// =========================

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

// =========================
// DEVELOPER CREDIT
// =========================

console.log("====================================");

console.log(" Trim To Trend ");

console.log(" Professional Website ");

console.log(" Developed by Tharak & Iswanth ");

console.log("====================================");

// =========================
// END
// =========================
/* ==========================================
   TRIM TO TREND
   PREMIUM JAVASCRIPT
   PART 4
========================================== */

// =========================
// LOADER FADE
// =========================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// =========================
// PARALLAX HERO
// =========================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=window.scrollY*0.4+"px";

}

});

// =========================
// IMAGE ZOOM
// =========================

const portfolio=document.querySelectorAll(".portfolio-card img");

portfolio.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});

// =========================
// BUTTON GLOW
// =========================

const allButtons=document.querySelectorAll(".btn,.btn2");

allButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 30px rgba(0,198,255,.6)";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="none";

});

});

// =========================
// SECTION FADE
// =========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// =========================
// SCROLL PROGRESS BAR
// =========================

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.background="#00c6ff";

progress.style.zIndex="99999";

progress.style.width="0%";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});

// =========================
// PAGE TITLE EFFECT
// =========================

let title=document.title;

window.addEventListener("blur",()=>{

document.title="👋 Come Back to Trim To Trend";

});

window.addEventListener("focus",()=>{

document.title=title;

});

// =========================
// END
// =========================

console.log("Website Loaded Successfully 🚀");
/* ==========================================
   FINAL PREMIUM POLISH
========================================== */

/* Active Navbar */

nav ul li a.active{

color:#00c6ff;

font-weight:600;

}

/* Logo */

.logo img{

transition:.4s;

}

.logo img:hover{

transform:rotate(8deg) scale(1.08);

}

/* Hero */

.hero{

position:relative;

overflow:hidden;

}

.hero::before{

content:"";

position:absolute;

width:600px;

height:600px;

background:radial-gradient(circle,rgba(0,198,255,.08),transparent);

top:-250px;

right:-150px;

border-radius:50%;

}

.hero::after{

content:"";

position:absolute;

width:500px;

height:500px;

background:radial-gradient(circle,rgba(0,114,255,.08),transparent);

bottom:-250px;

left:-150px;

border-radius:50%;

}

/* Card Animation */

.about-card,
.service,
.portfolio-card,
.team-card,
.counter-box,
.testimonial-card,
.contact-card{

animation:fadeUp .8s ease both;

}

/* Button */

.btn,
.btn2{

cursor:pointer;

}

/* Selection */

::selection{

background:#00c6ff;

color:#fff;

}

/* Focus */

input:focus,
textarea:focus{

outline:none;

border-color:#00c6ff;

}

/* Footer */

footer{

border-top:1px solid rgba(255,255,255,.08);

}

/* Smooth */

html{

scroll-behavior:smooth;

}
