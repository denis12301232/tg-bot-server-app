var b=(n,v,a)=>new Promise((t,_)=>{var i=e=>{try{c(a.next(e))}catch(o){_(o)}},m=e=>{try{c(a.throw(e))}catch(o){_(o)}},c=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,m);c((a=a.apply(n,v)).next())});import{d as R,s as W,c as j,Q as $,r as J,u as B,o as Q,w as z,C as S,g as u,v as y,b as F,f as r,h as d,e as f,F as A,R as G,m as H,n as g,p as K,q as P,l as U,A as I,S as X,a as l,i as p,J as Y,_ as Z}from"./index.0ed9803e.js";import L from"./TheError.dbeb1742.js";import{T as ee}from"./TableAssistance.a68557cd.js";const q=n=>(K("data-v-33ebc035"),n=n(),P(),n),se={key:1,class:"loader"},te={class:"container"},oe=q(()=>f("h1",{class:"title"},"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0437\u0430\u044F\u0432\u043A\u0435",-1)),ue={class:"info"},ae={class:"buttons"},ne=q(()=>f("span",null,null,-1)),ie=R({__name:"ListByIdView",setup(n){const v=W(),a=U(),t=H(),_=j(()=>t.params.id),i=$(S.assistance),m=J(t.query.edit==="true"),{fetchFunc:c,isLoading:e,data:o}=B({callback:()=>b(this,null,function*(){return I.getFormById(_.value)}),alert:!1}),{fetchFunc:D,isLoading:V}=B({callback:N,successMessage:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E"}),x={};Q(()=>{c().then(()=>{t.query.edit==="true"&&E()})}),z(t,()=>{t.query.edit==="true"?m.value=!0:m.value=!1,t.query.edit==="true"&&E()},{deep:!0});function E(){Object.keys(S.assistance).forEach(s=>{s==="phone"?i[s].value=o.value[s].slice(4):i[s].value=o.value[s]})}function k(){a.push({query:{edit:"true"}})}function T(){a.push({query:{edit:"false"}})}function N(){return b(this,null,function*(){const s=new X(i);yield I.modifyAssistanceForm(s,_.value),yield c(),k()})}return(s,C)=>{const M=g("LoadingWheel"),h=g("v-btn"),O=g("v-icon");return u(v).user.email?u(e)?(l(),F("div",se,[r(M)])):Object.entries(u(o)||{}).length?(l(),F(A,{key:3},[r(h,{class:"home_button",onClick:C[0]||(C[0]=w=>s.$router.push("/"))},{default:d(()=>[p("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")]),_:1}),f("div",te,[oe,f("div",ue,[m.value?(l(),y(G,{key:1,onSave:u(D),form:u(i),"is-loading":u(V),title:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"},{submit:d(w=>[r(h,{type:"submit",disabled:!w.form.valid},{default:d(()=>[p("Ok")]),_:2},1032,["disabled"])]),cancel:d(()=>[r(h,{onClick:Y(T,["prevent"])},{default:d(()=>[p("\u041E\u0442\u043C\u0435\u043D\u0430")]),_:1},8,["onClick"])]),_:1},8,["onSave","form","is-loading"])):(l(),F(A,{key:0},[f("div",ae,[ne,r(O,{class:"button",tag:"button",onClick:k},{default:d(()=>[p("mdi-pencil")]),_:1})]),r(ee,{form:u(o)||u(x)},null,8,["form"])],64))])])],64)):(l(),y(L,{key:2,code:404,message:"Not Found"})):(l(),y(L,{key:0,code:403,message:"Forbidden"}))}}});const _e=Z(ie,[["__scopeId","data-v-33ebc035"]]);export{_e as default};
