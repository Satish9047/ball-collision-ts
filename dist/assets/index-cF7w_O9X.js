var x=Object.defineProperty;var w=(t,e,i)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var n=(t,e,i)=>(w(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function l(t,e){return Math.floor(Math.random()*(e-t+5)+t)}function L(){const t=["red","blue","green","cyan","white","purple","deeppink","gold","orange","yellow"];return t[Math.floor(Math.random()*t.length)]}function p(t,e,i=0){let o=l(t,e);for(;o===i;)o=l(t,e);return o}function X(t,e={}){Object.assign(t.style,e)}class Y{constructor(e,i,o,s,r){n(this,"x");n(this,"y");n(this,"radius");n(this,"diameter");n(this,"speedX");n(this,"speedY");n(this,"element");n(this,"getX",()=>this.x);n(this,"getY",()=>this.y);n(this,"getRadius",()=>this.radius);n(this,"setX",e=>this.x=e);n(this,"setY",e=>this.y=e);n(this,"setRadius",e=>this.radius=e);n(this,"move",()=>{this.x+=this.speedX,this.y+=this.speedY});n(this,"draw",()=>{this.element.style.left=`${this.x}px`,this.element.style.top=`${this.y}px`});n(this,"checkWallCollison",(e,i,o,s)=>{this.x<e&&(this.speedX=Math.abs(this.speedX)),this.x>o-this.radius&&(this.speedX=-Math.abs(this.speedX)),this.y<i&&(this.speedY=Math.abs(this.speedY)),this.y>s-this.radius&&(this.speedY=-Math.abs(this.speedY))});n(this,"checkBallCollision",e=>{const i=e.x-this.x,o=e.y-this.y,s=Math.sqrt(i*i+o*o);if(s<=this.radius+e.radius){const r=this.radius+e.radius-s,d=i/s,u=o/s;this.x-=r*d*.5,this.y-=r*u*.5,e.x+=r*d*.5,e.y+=r*u*.5,this.speedX=-this.speedX,e.speedX=-this.speedX,this.speedY=-this.speedY,e.speedY=-this.speedY}});this.x=e,this.y=i,this.radius=o,this.diameter=o*2,this.speedX=s,this.speedY=r,this.element=document.createElement("div"),this.element.classList.add("ball"),X(this.element,{width:`${this.diameter}px`,height:`${this.diameter}px`,backgroundColor:L()})}getElement(){return this.element}}const M=50,a=1,b=20,f=b/2,A=5,h=[];let c;try{if(c=document.getElementById("app"),!c)throw new Error("viewport not found")}catch(t){console.error(t),c=document.createElement("div"),c.id="app",c.classList.add("view-port"),document.body.appendChild(c)}const m=c.clientWidth,y=c.clientHeight;function E(t){return m-t}function v(t){return y-t}for(let t=0;t<M;t++){const e=l(Math.min(A,f),f),i=l(e,E(e)),o=l(e,v(e)),s=p(-a,a),r=p(-a,a),d=new Y(i,o,e,s,r);h.push(d),c.appendChild(d.getElement())}function g(){for(let t=0;t<h.length;t++){const e=h[t];e.move(),e.draw(),e.checkWallCollison(e.radius,e.radius,m,y);for(let i=t+1;i<h.length;i++){const o=h[i];e.checkBallCollision(o)}}requestAnimationFrame(g)}requestAnimationFrame(g);
