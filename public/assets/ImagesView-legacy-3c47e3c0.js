System.register(["./index-legacy-2d4a7d0c.js"],(function(e,a){"use strict";var t,i,n,o,l,r,d,s,c,u,m,g,v,p,f,b,h,k,x,w,y,L,_,C,I,z,E,j,N,q,A=document.createElement("style");return A.textContent=".image-modal[data-v-d34a81b8]{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.836);z-index:9999;display:flex}.image-modal>.modal-content[data-v-d34a81b8]{margin:auto;max-width:800px;position:relative;user-select:none}.image-modal>.modal-content>.image-description[data-v-d34a81b8]{position:absolute;bottom:0;left:50%;margin-right:-50%;transform:translate(-50%)}.image-modal>.close-window[data-v-d34a81b8]{position:absolute;right:5px;top:5px;z-index:1}.image-modal>.right-arrow[data-v-d34a81b8]{position:absolute;top:50%;transform:translateY(-50%);left:5px;z-index:1}.image-modal>.left-arrow[data-v-d34a81b8]{position:absolute;top:50%;transform:translateY(-50%);right:5px;z-index:1}.image-modal>.image-count[data-v-d34a81b8]{position:absolute;left:5px;top:5px;color:var(--water-color);font-size:1.2em;font-weight:700}.home[data-v-bdc15df9]{margin-left:10px;margin-top:10px}.observer[data-v-bdc15df9]{padding:1px;bottom:0px}.title[data-v-bdc15df9]{text-align:center;font-weight:700;font-size:3rem;text-transform:uppercase;letter-spacing:.01em;padding:20px 0;margin:0}.loading[data-v-bdc15df9]{display:flex;justify-content:center}.images[data-v-bdc15df9]{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:0 10px 20px}.images .image-block[data-v-bdc15df9]{overflow:hidden;position:relative;cursor:pointer;-webkit-tap-highlight-color:transparent}.images .image-block>.image-hover[data-v-bdc15df9]{position:absolute;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.7);opacity:0}.images .image-block>img[data-v-bdc15df9]{transform:scale(1);transition:transform 3s;object-fit:cover;height:100%;width:100%}.images .image-block:hover>img[data-v-bdc15df9]{transform:scale(1.1)}.images .image-block:hover>.image-hover[data-v-bdc15df9]{opacity:1}@media (max-width: 768px){.images[data-v-bdc15df9]{grid-template-columns:repeat(2,1fr)}}\n",document.head.appendChild(A),{setters:[e=>{t=e.M,i=e.C,n=e.d,o=e.o,l=e.N,r=e.b,d=e.e,s=e.t,c=e.f,u=e.G,m=e.K,g=e.g,v=e.n,p=e.O,f=e.a,b=e._,h=e.r,k=e.c,x=e.u,w=e.h,y=e.v,L=e.j,_=e.F,C=e.k,I=e.H,z=e.p,E=e.q,j=e.i,N=e.V,q=e.P}],execute:function(){class a{static getImages(e){return t.get(`${i.API_URL}/images/`,{params:{pageToken:e}})}}const A={class:"image-modal"},P={class:"image-count"},S={class:"modal-content"},F=["src"],M={class:"image-description"},R=b(n({__name:"ImageModal",props:{link:{type:String,required:!0},description:{type:String,default:""},current:{type:Number,default:0},total:{type:Number,default:0}},emits:["close","prev","next"],setup(e,{emit:a}){o((()=>{document.addEventListener("keyup",b),document.addEventListener("keydown",n)})),l((()=>{document.removeEventListener("keyup",b),document.removeEventListener("keydown",n)}));const t=p("isImageLoading");function i(){t.value=!1}function n(e){"ArrowLeft"===e.key?a("prev"):"ArrowRight"===e.key&&a("next")}function b(e){"Escape"===e.key&&a("close")}return(n,o)=>{const l=v("ButtonImage"),p=v("LoadingWheel");return f(),r("div",A,[d("div",P,s(e.current+1+"/"+e.total),1),c(l,{class:"close-window",image:"close.png",onClick:o[0]||(o[0]=e=>a("close")),invert:!1}),c(l,{class:"right-arrow",image:"arrow-left.png",onClick:o[1]||(o[1]=e=>a("prev")),invert:!1}),c(l,{class:"left-arrow",image:"arrow-right.png",onClick:o[2]||(o[2]=e=>a("next")),invert:!1}),d("div",S,[u(c(p,null,null,512),[[m,g(t)]]),u(d("img",{src:e.link,onLoad:i},null,40,F),[[m,!g(t)]]),d("div",M,s(e.description),1)])])}}}),[["__scopeId","data-v-d34a81b8"]]),T=e=>(z("data-v-bdc15df9"),e=e(),E(),e),V=T((()=>d("h1",{class:"title"},"Галерея",-1))),W={class:"images"},Y=["onClick"],$=["src"],B=T((()=>d("div",{class:"image-hover"},null,-1))),G={class:"loading"},H={class:"observer"};e("default",b(n({__name:"ImagesView",setup(e){const t=h([]),i=h(!1),n=h(""),l=h(!1),s=h(0),m=h(0),p=h(),b=k((()=>N.required(p.value||"")&&!E.value)),{fetchFunc:z,isLoading:E}=x({callback:async function(){const e=await a.getImages(p.value);t.value=[...t.value,...e.data.images],p.value=e.data.pageToken,s.value+=e.data.images.length},alert:!1});function A(){i.value=!1}async function P(){if(!E.value){if(m.value+1>=s.value&&p.value)await z();else if(m.value+1>=s.value)return;m.value++,l.value=!0,n.value=t.value[m.value].link}}function S(){m.value-1<0||(m.value--,l.value=!0,n.value=t.value[m.value].link)}return q("isImageLoading",l),o(z),(e,a)=>{const o=v("v-btn"),p=v("LoadingWheel"),h=I("intersection");return f(),r(_,null,[c(o,{class:"home",onClick:a[0]||(a[0]=a=>e.$router.push("/"))},{default:w((()=>[j("На главную")])),_:1}),i.value?(f(),y(R,{key:0,link:n.value,total:s.value,current:m.value,onClose:A,onNext:P,onPrev:S},null,8,["link","total","current"])):L("",!0),V,d("div",W,[(f(!0),r(_,null,C(t.value,((e,a)=>(f(),r("div",{class:"image-block",onClick:e=>function(e){l.value=!0,n.value=t.value[e].link,m.value=e,i.value=!0}(a)},[d("img",{src:e.link},null,8,$),B],8,Y)))),256))]),d("div",G,[g(E)?(f(),y(p,{key:0})):L("",!0)]),d("div",H,[u(d("div",null,null,512),[[h,{f:g(z),canLoad:()=>g(b)}]])])],64)}}}),[["__scopeId","data-v-bdc15df9"]]))}}}));
