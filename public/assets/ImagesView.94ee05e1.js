import{M as T,C as U,d as x,o as V,N as j,b as f,e as n,t as L,f as _,G as h,K as w,g as p,n as k,O as K,a as v,_ as B,r as u,c as R,u as G,h as H,v as b,j as C,F as $,k as O,H as z,p as J,q as Q,i as X,V as Y,P as Z}from"./index.86e8b1ba.js";class ee{static getImages(e){return T.get(`${U.API_URL}/images/`,{params:{pageToken:e}})}}const te={class:"image-modal"},ae={class:"image-count"},ne={class:"modal-content"},se=["src"],oe={class:"image-description"},le=x({__name:"ImageModal",props:{link:{type:String,required:!0},description:{type:String,default:""},current:{type:Number,default:0},total:{type:Number,default:0}},emits:["close","prev","next"],setup(s,{emit:e}){V(()=>{document.addEventListener("keyup",c),document.addEventListener("keydown",i)}),j(()=>{document.removeEventListener("keyup",c),document.removeEventListener("keydown",i)});const l=K("isImageLoading");function r(){l.value=!1}function i(t){t.key==="ArrowLeft"?e("prev"):t.key==="ArrowRight"&&e("next")}function c(t){t.key==="Escape"&&e("close")}return(t,a)=>{const g=k("ButtonImage"),m=k("LoadingWheel");return v(),f("div",te,[n("div",ae,L(s.current+1+"/"+s.total),1),_(g,{class:"close-window",image:"close.png",onClick:a[0]||(a[0]=d=>e("close")),invert:!1}),_(g,{class:"right-arrow",image:"arrow-left.png",onClick:a[1]||(a[1]=d=>e("prev")),invert:!1}),_(g,{class:"left-arrow",image:"arrow-right.png",onClick:a[2]||(a[2]=d=>e("next")),invert:!1}),n("div",ne,[h(_(m,null,null,512),[[w,p(l)]]),h(n("img",{src:s.link,onLoad:r},null,40,se),[[w,!p(l)]]),n("div",oe,L(s.description),1)])])}}});const ie=B(le,[["__scopeId","data-v-d34a81b8"]]),E=s=>(J("data-v-bdc15df9"),s=s(),Q(),s),ce=E(()=>n("h1",{class:"title"},"\u0413\u0430\u043B\u0435\u0440\u0435\u044F",-1)),ue={class:"images"},re=["onClick"],de=["src"],ve=E(()=>n("div",{class:"image-hover"},null,-1)),ge={class:"loading"},me={class:"observer"},_e=x({__name:"ImagesView",setup(s){const e=u([]),l=u(!1),r=u(""),i=u(!1),c=u(0),t=u(0),a=u(),g=R(()=>Y.required(a.value||"")&&!d.value),{fetchFunc:m,isLoading:d}=G({callback:N,alert:!1});Z("isImageLoading",i),V(m);async function N(){const o=await ee.getImages(a.value);e.value=[...e.value,...o.data.images],a.value=o.data.pageToken,c.value+=o.data.images.length}function S(){l.value=!1}function D(o){i.value=!0,r.value=e.value[o].link,t.value=o,l.value=!0}async function F(){if(!d.value){if(t.value+1>=c.value&&a.value)await m();else if(t.value+1>=c.value)return;t.value++,i.value=!0,r.value=e.value[t.value].link}}function M(){t.value-1<0||(t.value--,i.value=!0,r.value=e.value[t.value].link)}return(o,I)=>{const W=k("v-btn"),q=k("LoadingWheel"),A=z("intersection");return v(),f($,null,[_(W,{class:"home",onClick:I[0]||(I[0]=y=>o.$router.push("/"))},{default:H(()=>[X("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")]),_:1}),l.value?(v(),b(ie,{key:0,link:r.value,total:c.value,current:t.value,onClose:S,onNext:F,onPrev:M},null,8,["link","total","current"])):C("",!0),ce,n("div",ue,[(v(!0),f($,null,O(e.value,(y,P)=>(v(),f("div",{class:"image-block",onClick:pe=>D(P)},[n("img",{src:y.link},null,8,de),ve],8,re))),256))]),n("div",ge,[p(d)?(v(),b(q,{key:0})):C("",!0)]),n("div",me,[h(n("div",null,null,512),[[A,{f:p(m),canLoad:()=>p(g)}]])])],64)}}});const ke=B(_e,[["__scopeId","data-v-bdc15df9"]]);export{ke as default};
