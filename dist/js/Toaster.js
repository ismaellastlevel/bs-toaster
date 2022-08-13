var I=Object.defineProperty;var L=(l,t,a)=>t in l?I(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;var r=(l,t,a)=>(L(l,typeof t!="symbol"?t+"":t,a),a);import{Toast as v}from"bootstrap";var m={TOP_START:"top-0 start-0",TOP_CENTER:"top-0 start-50 translate-middle-x",TOP_END:"top-0 end-0",BOTTOM_START:"bottom-0 start-0",BOTTOM_CENTER:"bottom-0 start-50 translate-middle-x",BOTTOM_END:"bottom-0 end-0",CENTER_START:"top-50 start-0 translate-middle-y",CENTER_END:"top-50 end-0 translate-middle-y",CENTER:"top-50 start-50 translate-middle"},E={DEFAULT:"bg-secondary",PRIMARY:"bg-primary",INFO:"bg-info",SUCCESS:"bg-success",WARNING:"bg-warning",DANGER:"bg-danger",DARK:"bg-dark"},d={DISABLED:0,ELAPSED:1,COUNTDOWN:2},u=5e3,b=!0,p='<i class="p-2 me-2 rounded %TYPE%"></i>',C='<div data-bs-toaster="" class="toast-container position-fixed m-3" aria-live="polite" style="z-index:999999;"></div>',_=`
<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <span class="bs-toaster-icon d-flex">%ICON%</span>
        <strong class="bs-toaster-title me-auto">%TITLE%</strong>
        <small class="bs-toaster-timer text-muted">%TIMER%</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="bs-toaster-text toast-body">
        %TEXT%
    </div>
</div>
`,h=class{constructor(t={position:m.BOTTOM_END,type:E.DEFAULT,timer:d.ELAPSED,delay:u,defaultIconMarkup:p,animation:b}){r(this,"position",m.BOTTOM_END);r(this,"type",E.DEFAULT);r(this,"timer",d.ELAPSED);r(this,"delay",u);r(this,"animation",b);r(this,"defaultIconMarkup",p);r(this,"templateNode",null);r(this,"toastContainer",null);var a,e,o,i,s,T;this.position=(a=t.position)!=null?a:m.BOTTOM_END,this.type=(e=t.type)!=null?e:E.DEFAULT,this.timer=(o=t.timer)!=null?o:d.ELAPSED,this.animation=(i=t.animation)!=null?i:b,this.delay=(s=t.delay)!=null?s:u,this.defaultIconMarkup=(T=t.defaultIconMarkup)!=null?T:p,this.toastContainer=this.createToastContainer(),this.templateNode=this.createToastNode(),document.body.appendChild(this.toastContainer)}createToastContainer(){let t=btoa(this.position),a=document.querySelector(`[data-bs-toaster="${t}"]`),e=null;return a===null||!(a instanceof HTMLDivElement)?(e=new DOMParser().parseFromString(C,"text/html").body.childNodes[0],e.classList.add(...this.position.split(" ")),e.dataset.bsToaster=t):e=a,e}createToastNode(){return new DOMParser().parseFromString(_,"text/html").body.childNodes[0]}renderTime(t,a,e,o){switch(t){case d.ELAPSED:{e.innerText="just now";let i=1,s=setInterval(()=>{e.innerText=`${i}m`,i++},60*1e3);o.addEventListener("hidden.bs.toast",()=>{clearInterval(s)});break}case d.COUNTDOWN:if(a>0){let i=a/1e3;e.innerText=`${i}s`;let s=setInterval(()=>{e.innerText=`${--i}s`},1e3);o.addEventListener("hidden.bs.toast",()=>{clearInterval(s)});break}default:{e.remove();break}}}create(t,a,e={iconMarkup:this.defaultIconMarkup,type:this.type,timer:this.timer,delay:this.delay,animation:this.animation}){var A,O,N,D,M;let o=(A=e.type)!=null?A:this.type,i=(O=e.timer)!=null?O:this.timer,s=(N=e.delay)!=null?N:this.delay,T=(D=e.animation)!=null?D:this.animation,c=(M=e.iconMarkup)!=null?M:this.defaultIconMarkup,n=this.templateNode.cloneNode(!0);n.dataset.bsAutohide=(Number.isInteger(s)&&s>0).toString(),n.dataset.bsDelay=s.toString(),n.dataset.bsAnimation=T.toString();let y=n.querySelector(".bs-toaster-icon");c?(c=c.replace("%TYPE%",o),y.innerHTML=c):y.remove(),n.querySelector(".bs-toaster-title").innerHTML=t,n.querySelector(".bs-toaster-text").innerHTML=a;let S=n.querySelector(".bs-toaster-timer");this.renderTime(i,s,S,n),this.render(n)}render(t){this.toastContainer.appendChild(t),t.addEventListener("hidden.bs.toast",()=>{t.remove()}),new v(t).show()}};var g=h;export{h as Toaster,m as ToasterPosition,d as ToasterTimer,E as ToasterType,g as default};
