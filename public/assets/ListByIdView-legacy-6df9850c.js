System.register(["./index-legacy-2d4a7d0c.js","./TheError-legacy-92e08ca6.js","./TableAssistance-legacy-2cd66152.js"],(function(e,t){"use strict";var a,n,i,s,d,c,o,l,u,r,m,f,b,v,y,h,g,p,k,x,_,w,j,q,C,F,L,S,T,A,E=document.createElement("style");return E.textContent=".home_button[data-v-a79d3b66]{margin:10px 0 0 10px}.container[data-v-a79d3b66]{width:95%;margin:0 auto}.loader[data-v-a79d3b66]{display:flex;justify-content:center;align-items:center;height:100%}.title[data-v-a79d3b66]{text-align:center;padding:10px 0}.info[data-v-a79d3b66]{width:50%;margin:0 auto;padding-bottom:10px}.info .buttons[data-v-a79d3b66]{display:flex;justify-content:space-between;align-items:center}.info .buttons .button[data-v-a79d3b66]:hover{transform:scale(1.1)}@media (max-width: 768px){.info[data-v-a79d3b66]{width:100%}}\n",document.head.appendChild(E),{setters:[e=>{a=e.d,n=e.s,i=e.c,s=e.Q,d=e.r,c=e.u,o=e.o,l=e.w,u=e.C,r=e.g,m=e.v,f=e.b,b=e.f,v=e.h,y=e.e,h=e.F,g=e.R,p=e.m,k=e.n,x=e.p,_=e.q,w=e.l,j=e.A,q=e.S,C=e.a,F=e.i,L=e.J,S=e._},e=>{T=e.default},e=>{A=e.T}],execute:function(){const t=e=>(x("data-v-a79d3b66"),e=e(),_(),e),E={key:1,class:"loader"},I={class:"container"},O=t((()=>y("h1",{class:"title"},"Информация о заявке",-1))),B={class:"info"},J={class:"buttons"},M=t((()=>y("span",null,null,-1)));e("default",S(a({__name:"ListByIdView",setup(e){const t=n(),a=w(),x=p(),_=i((()=>x.params.id)),S=s(u.assistance),N=d("true"===x.query.edit),{fetchFunc:Q,isLoading:R,data:V}=c({callback:async()=>j.getFormById(_.value),alert:!1}),{fetchFunc:W,isLoading:$}=c({callback:async function(){const e=new q(S);await j.modifyAssistanceForm(e,_.value),await Q(),G()},successMessage:"Обновлено"}),z={};function D(){Object.keys(u.assistance).forEach((e=>{S[e].value="phone"===e?V.value[e].slice(4):V.value[e]}))}function G(){a.push({query:{edit:"true"}})}function H(){a.push({query:{edit:"false"}})}return o((()=>{Q().then((()=>{"true"===x.query.edit&&D()}))})),l(x,(()=>{"true"===x.query.edit?N.value=!0:N.value=!1,"true"===x.query.edit&&D()}),{deep:!0}),(e,a)=>{const n=k("LoadingWheel"),i=k("v-btn"),s=k("v-icon");return r(t).user.email?r(R)?(C(),f("div",E,[b(n)])):Object.entries(r(V)||{}).length?(C(),f(h,{key:3},[b(i,{class:"home_button",onClick:a[0]||(a[0]=t=>e.$router.push("/"))},{default:v((()=>[F("На главную")])),_:1}),y("div",I,[O,y("div",B,[N.value?(C(),m(g,{key:1,onSave:r(W),form:r(S),"is-loading":r($),title:"Редактировать",theme:r(t).currentTheme},{submit:v((e=>[b(i,{type:"submit",disabled:!e.form.valid},{default:v((()=>[F("Ok")])),_:2},1032,["disabled"])])),cancel:v((()=>[b(i,{onClick:L(H,["prevent"])},{default:v((()=>[F("Отмена")])),_:1},8,["onClick"])])),_:1},8,["onSave","form","is-loading","theme"])):(C(),f(h,{key:0},[y("div",J,[M,b(s,{class:"button",tag:"button",onClick:G},{default:v((()=>[F("mdi-pencil")])),_:1})]),b(A,{form:r(V)||r(z)},null,8,["form"])],64))])])],64)):(C(),m(T,{key:2,code:404,message:"Not Found"})):(C(),m(T,{key:0,code:403,message:"Forbidden"}))}}}),[["__scopeId","data-v-a79d3b66"]]))}}}));
