import{d as T,u as A,c as B,r as k,o as $,w as N,A as M,a as o,b as a,e as r,f as s,g as n,h as x,i as E,j as F,t as w,F as j,k as Q,l as R,m as W,n as m,p as K,q as U,_ as z,s as G,v as J,T as O,x as P}from"./index.7bea6f71.js";import{T as X}from"./TableAssistance.4e753b76.js";import Y from"./TheError.297ce893.js";const Z=c=>(K("data-v-82bb5bfc"),c=c(),U(),c),ee={class:"container"},te=Z(()=>r("h1",{class:"title"},"\u041F\u043E\u0438\u0441\u043A",-1)),se={class:"search"},ne={key:0,style:{display:"flex","justify-content":"center","margin-top":"5px"}},oe={key:0,class:"info"},ue={class:"info_finded"},ae={class:"item_about"},re={class:"item_title"},ce=T({__name:"HumanInfo",setup(c){const u=R(),h=W(),{fetchFunc:f,isLoading:L,error:v,data:i}=A({callback:S,alert:!1}),l=B(()=>h.query.search),t=k(""),p=k("");$(()=>{l.value&&typeof l.value=="string"&&(t.value=h.query.search,f().then(()=>p.value=t.value))}),N(l,()=>{l.value&&typeof l.value=="string"&&f().then(()=>p.value=t.value)});async function S(){var _;if(!t.value)return;v.value="",(_=i.value)!=null&&_.humansFormList&&(i.value.humansFormList=[]);const e=t.value.trim().split(" ");if(e.length!==3)throw new Error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041E \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B!");return M.findHuman(e[0],e[1],e[2])}function y(){u.push({query:{search:t.value}})}function V(e){e.key==="Enter"&&y()}function H(e){u.push({path:`/list/${e}`,query:{edit:"true"}})}return(e,_)=>{var b,g;const I=m("v-text-field"),C=m("v-btn"),q=m("LoadingWheel"),D=m("v-icon");return o(),a("div",ee,[te,r("div",se,[s(I,{class:"search_input",label:"\u0424\u0418\u041E",modelValue:t.value,"onUpdate:modelValue":_[0]||(_[0]=d=>t.value=d),variant:"solo","error-messages":n(v)},null,8,["modelValue","error-messages"]),s(C,{class:"search_button",onClick:y,onKeydown:V},{default:x(()=>[E("\u041D\u0430\u0439\u0442\u0438")]),_:1}),n(L)?(o(),a("div",ne,[s(q)])):F("",!0)]),(b=n(i))!=null&&b.humansFormList.length?(o(),a("div",oe,[r("div",ue,"\u0412\u0441\u0435\u0433\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E: "+w((g=n(i))==null?void 0:g.humansFormList.length),1),(o(!0),a(j,null,Q(n(i).humansFormList,d=>(o(),a("div",{class:"info_item",key:d._id},[r("div",ae,[r("div",re,"\u041D\u0430\u0439\u0434\u0435\u043D\u043E: "+w(p.value),1),s(D,{class:"button",tag:"button",onClick:de=>H(d._id)},{default:x(()=>[E("mdi-pencil")]),_:2},1032,["onClick"])]),s(X,{form:d.form,style:{"margin-bottom":"5px !important"}},null,8,["form"])]))),128))])):F("",!0)])}}});const ie=z(ce,[["__scopeId","data-v-82bb5bfc"]]),le={key:1},_e={class:"content"},pe=T({__name:"InfoView",setup(c){const u=G();return(h,f)=>n(u).isAdmin?(o(),a("div",le,[s(O,{onShow:n(u).setMenuVisible,onTheme:n(u).setTheme},null,8,["onShow","onTheme"]),s(P),r("div",_e,[s(ie)])])):(o(),J(Y,{key:0,code:403,message:"Forbidden"}))}});export{pe as default};
