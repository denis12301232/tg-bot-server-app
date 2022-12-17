import{z as Z,d as B,s as D,c as A,r as k,o as tt,u as E,A as V,a as r,b as h,f as s,h as a,e as l,g as e,i as m,v as g,j as v,F as H,k as et,t as F,B as st,D as ot,E as nt,G as it,l as at,U as lt,n as c,H as ut,p as ct,q as rt,_ as dt,T as _t,x as mt}from"./index.eb04ed57.js";import ht from"./TheError.e304ea9e.js";const pt=Z("human",{state:()=>({list:{page:0,total:0,limit:20,isLoading:!1,humansList:[],selectedSort:null,searchQuery:""}}),getters:{sortedHumansList(n){return typeof n.list.selectedSort=="string"?[...n.list.humansList].sort((o,p)=>{var t;return(t=o[n.list.selectedSort])==null?void 0:t.localeCompare(p[n.list.selectedSort])}):n.list.humansList},sortedAndSearchedHumansList(){return[...this.sortedHumansList].filter(n=>n.fio.includes(this.list.searchQuery))}}}),T=n=>(ct("data-v-e5ad1b8f"),n=n(),rt(),n),ft=T(()=>l("h2",{style:{"text-align":"center"}},"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",-1)),vt={class:"buttons"},gt={class:"buttons_load"},bt={class:"buttons_load"},Lt={class:"container"},yt=T(()=>l("h1",{class:"title",style:{"margin-bottom":"10px"}},"\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",-1)),kt={style:{padding:"5px 0"}},Ht={class:"list_number",style:{padding:"0 10px"}},Ct={class:"list_buttons"},St={key:0,class:"error_message"},wt={key:1,class:"loading"},xt={class:"observer"},At=B({__name:"HumansList",setup(n){const o=D(),p=at(),t=pt(),M=A(()=>t.list.page<t.list.total&&!S.value),$=A(()=>!t.list.humansList.length),b=k(!1),L=k(""),I=k([{value:"_id",title:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"},{value:"fio",title:"\u041F\u043E \u0444\u0430\u043C\u0438\u043B\u0438\u0438"}]);tt(()=>{t.list.humansList.length||C()});const{fetchFunc:C,isLoading:S}=E({callback:U,alert:!1}),{fetchFunc:N,isLoading:Q}=E({callback:W,successMessage:"\u0423\u0434\u0430\u043B\u0435\u043D\u043E"});async function U(){t.list.page++;const i=await V.catchHumansList({limit:t.list.limit,page:t.list.page});t.list.total=Math.ceil(+i.headers["x-total-count"]/t.list.limit),t.list.humansList=[...t.list.humansList,...i.data.humansList]}async function W(){o.alert.isVisible&&o.showAlert(!1),await V.deleteHuman(L.value),f(),t.list.humansList=t.list.humansList.filter(i=>i._id!==L.value)}function f(i){b.value=!b.value,i&&(L.value=i)}async function q(i){try{o.alert.isVisible&&o.showAlert(!1);const d=await lt.copyToClipboard(i);o.setAlert("success",d)}catch(d){o.setAlert("error",d)}finally{o.showAlert(!0)}}function z(i){p.push({path:"/info",query:{search:i}})}return(i,d)=>{const w=c("v-btn"),x=c("LoadingWheel"),G=c("ModalWindow"),P=c("v-select"),R=c("v-text-field"),y=c("v-icon"),j=c("v-tooltip"),O=c("v-list-item-title"),J=c("v-list-item"),K=c("v-list"),X=ut("intersection");return r(),h(H,null,[s(G,{show:b.value,onHide:f,theme:e(o).currentTheme},{default:a(()=>[ft,l("div",vt,[l("div",gt,[s(w,{class:"confirm",onClick:e(N)},{default:a(()=>[m("\u0414\u0430")]),_:1},8,["onClick"]),e(Q)?(r(),g(x,{key:0,class:"wheel"})):v("",!0)]),l("div",bt,[s(w,{class:"confirm",onClick:f},{default:a(()=>[m("\u041D\u0435\u0442")]),_:1})])])]),_:1},8,["show","theme"]),l("div",Lt,[yt,l("div",kt,[s(P,{label:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",items:I.value,modelValue:e(t).list.selectedSort,"onUpdate:modelValue":d[0]||(d[0]=u=>e(t).list.selectedSort=u),variant:"solo"},null,8,["items","modelValue"]),s(R,{label:"\u041F\u043E\u0438\u0441\u043A",modelValue:e(t).list.searchQuery,"onUpdate:modelValue":d[1]||(d[1]=u=>e(t).list.searchQuery=u),variant:"solo"},null,8,["modelValue"])]),e(t).sortedAndSearchedHumansList.length?(r(),g(K,{key:0,class:"list"},{default:a(()=>[s(nt,{name:"list"},{default:a(()=>[(r(!0),h(H,null,et(e(t).sortedAndSearchedHumansList,(u,Y)=>(r(),g(J,{class:"list_item",key:u._id},{prepend:a(()=>[l("div",Ht,F(Y+1+"."),1)]),append:a(()=>[l("div",Ct,[s(y,{class:"item_button",tag:"button",onClick:_=>q(u.fio)},{default:a(()=>[m("mdi-content-copy")]),_:2},1032,["onClick"]),s(y,{class:"item_button",tag:"button",onClick:_=>z(u.fio)},{default:a(()=>[m("mdi-magnify")]),_:2},1032,["onClick"]),s(y,{class:"item_button",tag:"button",onClick:_=>f(u._id)},{default:a(()=>[m("mdi-delete-forever")]),_:2},1032,["onClick"])])]),default:a(()=>[s(O,{class:"list_title",onClick:_=>i.$router.push(`/list/${u._id}`)},{default:a(()=>[s(j,{text:u.fio,location:"bottom"},{activator:a(({props:_})=>[l("span",st(ot(_)),F(u.fio),17)]),_:2},1032,["text"])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})):v("",!0)]),e($)?(r(),h("h3",St,"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442")):v("",!0),e(S)?(r(),h("div",wt,[s(x)])):v("",!0),l("div",xt,[it(l("div",null,null,512),[[X,{f:e(C),canLoad:()=>e(M)}]])])],64)}}});const Et=dt(At,[["__scopeId","data-v-e5ad1b8f"]]),Vt={class:"content"},Dt=B({__name:"ListView",setup(n){const o=D();return(p,t)=>e(o).isAdmin?(r(),h(H,{key:1},[s(_t,{onShow:e(o).setMenuVisible,onTheme:e(o).setTheme},null,8,["onShow","onTheme"]),s(mt),l("div",Vt,[s(Et)])],64)):(r(),g(ht,{key:0,code:403,message:"Forbidden"}))}});export{Dt as default};
