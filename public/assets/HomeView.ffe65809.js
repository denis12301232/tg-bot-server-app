import{C as u,d as g,u as v,a as T,c as i,b as s,F as m,e as a,f as w,g as V,w as d,o as _,h as S,r as C,_ as x}from"./index.800cd8c5.js";import{u as y}from"./useFetching.eee5a6d9.js";import{u as A}from"./useForm.2e99d712.js";import{T as E,a as H}from"./TheHeaderMenu.d1773886.js";import{F as N,A as B}from"./AssistanseFormDto.bd45852a.js";import{A as D}from"./AssistanceService.c1eb7ba1.js";function k(t){Object.keys(u.assistance).forEach(e=>{t[e].value=u.assistance[e].default,t[e].touched=!1})}const M={class:"content"},O=g({__name:"HomeView",setup(t){const e=v(),l=A(u.assistance),{tg:f,isOpenedFromTg:c}=T(),{fetchFunc:p,isLoading:h}=y({callback:b,successMessage:"\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"});async function b(o){const r=new B(o),n=await D.sendForm(r);k(o),c&&f.sendData(JSON.stringify(n.data))}return(o,r)=>{const n=C("v-btn");return _(),i(m,null,[s(c)?w("",!0):(_(),i(m,{key:0},[a(E,{onShow:s(e).setMenuVisible,onTheme:s(e).setTheme},null,8,["onShow","onTheme"]),a(H)],64)),V("div",M,[a(N,{onSave:s(p),form:s(l),"is-loading":s(h),theme:s(e).currentTheme},{submit:d(F=>[a(n,{type:"submit",disabled:!F.form.valid},{default:d(()=>[S("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")]),_:2},1032,["disabled"])]),_:1},8,["onSave","form","is-loading","theme"])])],64)}}});const G=x(O,[["__scopeId","data-v-49ba6a43"]]);export{G as default};
