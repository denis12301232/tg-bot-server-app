var k=(e,s,r)=>new Promise((t,L)=>{var S=d=>{try{h(r.next(d))}catch(p){L(p)}},f=d=>{try{h(r.throw(d))}catch(p){L(p)}},h=d=>d.done?t(d.value):Promise.resolve(d.value).then(S,f);h((r=r.apply(e,s)).next())});import{z as tt,d as $,s as I,c as F,r as x,o as et,u as B,A as D,a as _,b,f as o,h as a,e as l,g as i,i as g,v as C,j as H,F as T,k as st,t as M,B as ot,D as it,E as nt,G as at,l as lt,U as ut,n as c,H as ct,p as rt,q as dt,_ as _t,T as mt,x as ht}from"./index.782a5c9b.js";import pt from"./TheError.bf77ace0.js";const ft=tt("human",{state:()=>({list:{page:0,total:0,limit:20,isLoading:!1,humansList:[],selectedSort:null,searchQuery:""}}),getters:{sortedHumansList(e){return typeof e.list.selectedSort=="string"?[...e.list.humansList].sort((s,r)=>{var t;return(t=s[e.list.selectedSort])==null?void 0:t.localeCompare(r[e.list.selectedSort])}):e.list.humansList},sortedAndSearchedHumansList(){return[...this.sortedHumansList].filter(e=>e.fio.includes(this.list.searchQuery))}}}),N=e=>(rt("data-v-4fd7cb4a"),e=e(),dt(),e),vt=N(()=>l("h2",{style:{"text-align":"center"}},"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",-1)),gt={class:"buttons"},bt={class:"buttons_load"},Lt={class:"buttons_load"},yt={class:"container"},kt=N(()=>l("h1",{class:"title",style:{"margin-bottom":"10px"}},"\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",-1)),Ht={style:{padding:"5px 0"}},Ct={class:"list_number",style:{padding:"0 10px"}},St={class:"list_buttons"},wt={key:0,class:"error_message"},xt={key:1,class:"loading"},At={class:"observer"},Et=$({__name:"HumansList",setup(e){const s=I(),r=lt(),t=ft(),L=F(()=>t.list.page<t.list.total&&!A.value),S=F(()=>!t.list.humansList.length),f=x(!1),h=x(""),d=x([{value:"_id",title:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"},{value:"fio",title:"\u041F\u043E \u0444\u0430\u043C\u0438\u043B\u0438\u0438"}]);et(()=>{t.list.humansList.length||p()});const{fetchFunc:p,isLoading:A}=B({callback:W,alert:!1}),{fetchFunc:Q,isLoading:U}=B({callback:q,successMessage:"\u0423\u0434\u0430\u043B\u0435\u043D\u043E"});function W(){return k(this,null,function*(){t.list.page++;const n=yield D.catchHumansList({limit:t.list.limit,page:t.list.page});t.list.total=Math.ceil(+n.headers["x-total-count"]/t.list.limit),t.list.humansList=[...t.list.humansList,...n.data.humansList]})}function q(){return k(this,null,function*(){s.alert.isVisible&&s.showAlert(!1),yield D.deleteHuman(h.value),y(),t.list.humansList=t.list.humansList.filter(n=>n._id!==h.value)})}function y(n){f.value=!f.value,n&&(h.value=n)}function z(n){return k(this,null,function*(){try{s.alert.isVisible&&s.showAlert(!1);const m=yield ut.copyToClipboard(n);s.setAlert("success",m)}catch(m){s.setAlert("error",m)}finally{s.showAlert(!0)}})}function G(n){r.push({path:"/info",query:{search:n}})}return(n,m)=>{const E=c("v-btn"),V=c("LoadingWheel"),P=c("ModalWindow"),R=c("v-select"),j=c("v-text-field"),w=c("v-icon"),O=c("v-tooltip"),J=c("v-list-item-title"),K=c("v-list-item"),X=c("v-list"),Y=ct("intersection");return _(),b(T,null,[o(P,{show:f.value,onHide:y},{default:a(()=>[vt,l("div",gt,[l("div",bt,[o(E,{class:"confirm",onClick:i(Q)},{default:a(()=>[g("\u0414\u0430")]),_:1},8,["onClick"]),i(U)?(_(),C(V,{key:0,class:"wheel"})):H("",!0)]),l("div",Lt,[o(E,{class:"confirm",onClick:y},{default:a(()=>[g("\u041D\u0435\u0442")]),_:1})])])]),_:1},8,["show"]),l("div",yt,[kt,l("div",Ht,[o(R,{label:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",items:d.value,modelValue:i(t).list.selectedSort,"onUpdate:modelValue":m[0]||(m[0]=u=>i(t).list.selectedSort=u),variant:"solo"},null,8,["items","modelValue"]),o(j,{label:"\u041F\u043E\u0438\u0441\u043A",modelValue:i(t).list.searchQuery,"onUpdate:modelValue":m[1]||(m[1]=u=>i(t).list.searchQuery=u),variant:"solo"},null,8,["modelValue"])]),i(t).sortedAndSearchedHumansList.length?(_(),C(X,{key:0,class:"list"},{default:a(()=>[o(nt,{name:"list"},{default:a(()=>[(_(!0),b(T,null,st(i(t).sortedAndSearchedHumansList,(u,Z)=>(_(),C(K,{class:"list_item",key:u._id},{prepend:a(()=>[l("div",Ct,M(Z+1+"."),1)]),append:a(()=>[l("div",St,[o(w,{class:"item_button",tag:"button",onClick:v=>z(u.fio)},{default:a(()=>[g("mdi-content-copy")]),_:2},1032,["onClick"]),o(w,{class:"item_button",tag:"button",onClick:v=>G(u.fio)},{default:a(()=>[g("mdi-magnify")]),_:2},1032,["onClick"]),o(w,{class:"item_button",tag:"button",onClick:v=>y(u._id)},{default:a(()=>[g("mdi-delete-forever")]),_:2},1032,["onClick"])])]),default:a(()=>[o(J,{class:"list_title",onClick:v=>n.$router.push(`/list/${u._id}`)},{default:a(()=>[o(O,{text:u.fio,location:"bottom"},{activator:a(({props:v})=>[l("span",ot(it(v)),M(u.fio),17)]),_:2},1032,["text"])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})):H("",!0)]),i(S)?(_(),b("h3",wt,"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442")):H("",!0),i(A)?(_(),b("div",xt,[o(V)])):H("",!0),l("div",At,[at(l("div",null,null,512),[[Y,{f:i(p),canLoad:()=>i(L)}]])])],64)}}});const Vt=_t(Et,[["__scopeId","data-v-4fd7cb4a"]]),Ft={key:1},Bt={class:"content"},$t=$({__name:"ListView",setup(e){const s=I();return(r,t)=>i(s).isAdmin?(_(),b("div",Ft,[o(mt,{onShow:i(s).setMenuVisible,onTheme:i(s).setTheme},null,8,["onShow","onTheme"]),o(ht),l("div",Bt,[o(Vt)])])):(_(),C(pt,{key:0,code:403,message:"Forbidden"}))}});export{$t as default};
