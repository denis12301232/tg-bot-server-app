import{d as O,s as R,c as W,Q as j,r as $,u as C,o as J,w as Q,C as w,g as s,v as _,b as f,f as o,h as a,e as n,F as B,R as z,m as G,n as p,p as H,q as K,l as P,A as S,S as U,a as u,i as d,J as X,_ as Y}from"./index.d6db5f3e.js";import A from"./TheError.fac2db53.js";import{T as Z}from"./TableAssistance.5817d9b1.js";const I=i=>(H("data-v-a79d3b66"),i=i(),K(),i),ee={key:1,class:"loader"},se={class:"container"},te=I(()=>n("h1",{class:"title"},"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0437\u0430\u044F\u0432\u043A\u0435",-1)),oe={class:"info"},ae={class:"buttons"},ue=I(()=>n("span",null,null,-1)),ne=O({__name:"ListByIdView",setup(i){const h=R(),v=P(),t=G(),b=W(()=>t.params.id),c=j(w.assistance),l=$(t.query.edit==="true"),{fetchFunc:y,isLoading:L,data:r}=C({callback:async()=>S.getFormById(b.value),alert:!1}),{fetchFunc:q,isLoading:D}=C({callback:x,successMessage:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E"}),V={};J(()=>{y().then(()=>{t.query.edit==="true"&&F()})}),Q(t,()=>{t.query.edit==="true"?l.value=!0:l.value=!1,t.query.edit==="true"&&F()},{deep:!0});function F(){Object.keys(w.assistance).forEach(e=>{e==="phone"?c[e].value=r.value[e].slice(4):c[e].value=r.value[e]})}function g(){v.push({query:{edit:"true"}})}function T(){v.push({query:{edit:"false"}})}async function x(){const e=new U(c);await S.modifyAssistanceForm(e,b.value),await y(),g()}return(e,E)=>{const N=p("LoadingWheel"),m=p("v-btn"),M=p("v-icon");return s(h).user.email?s(L)?(u(),f("div",ee,[o(N)])):Object.entries(s(r)||{}).length?(u(),f(B,{key:3},[o(m,{class:"home_button",onClick:E[0]||(E[0]=k=>e.$router.push("/"))},{default:a(()=>[d("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")]),_:1}),n("div",se,[te,n("div",oe,[l.value?(u(),_(z,{key:1,onSave:s(q),form:s(c),"is-loading":s(D),title:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",theme:s(h).currentTheme},{submit:a(k=>[o(m,{type:"submit",disabled:!k.form.valid},{default:a(()=>[d("Ok")]),_:2},1032,["disabled"])]),cancel:a(()=>[o(m,{onClick:X(T,["prevent"])},{default:a(()=>[d("\u041E\u0442\u043C\u0435\u043D\u0430")]),_:1},8,["onClick"])]),_:1},8,["onSave","form","is-loading","theme"])):(u(),f(B,{key:0},[n("div",ae,[ue,o(M,{class:"button",tag:"button",onClick:g},{default:a(()=>[d("mdi-pencil")]),_:1})]),o(Z,{form:s(r)||s(V)},null,8,["form"])],64))])])],64)):(u(),_(A,{key:2,code:404,message:"Not Found"})):(u(),_(A,{key:0,code:403,message:"Forbidden"}))}}});const de=Y(ne,[["__scopeId","data-v-a79d3b66"]]);export{de as default};
