System.register(["./index-legacy-aac67e4d.js","./TheError-legacy-a6247ec6.js"],(function(t,e){"use strict";var a,s,i,l,n,d,o,r,c,u,m,f,p,v,b,h,g,_,x,y,L,k,w,C,S,A,H,V,T,j,F,M,Q,E,U=document.createElement("style");return U.textContent=".container[data-v-e5ad1b8f]{padding:0 30px;width:50%;margin:0 auto}.container .title[data-v-e5ad1b8f]{padding:20px 0;text-align:center}.list_title[data-v-e5ad1b8f]{padding:10px}.list_title[data-v-e5ad1b8f]:hover{color:teal;cursor:pointer}.list[data-v-e5ad1b8f]{overflow:hidden;padding:0}.list>*[data-v-e5ad1b8f]:not(:first-child){margin-top:5px}.list .list_item[data-v-e5ad1b8f]{border:1px solid #dadce0;border-radius:5px}.list .list_number[data-v-e5ad1b8f]{border-right:1px solid #dadce0;padding:10px 10px 10px 0!important;display:flex;align-items:center}.list .list_buttons[data-v-e5ad1b8f]{border-left:1px solid #dadce0;padding:10px 0 10px 10px!important}.buttons[data-v-e5ad1b8f]{display:flex;justify-content:space-between;padding:30px 0 0}.buttons .buttons_load[data-v-e5ad1b8f]{display:flex;align-items:center;padding:5px}.buttons .buttons_load .confirm[data-v-e5ad1b8f]{width:65px}.buttons .buttons_load .wheel[data-v-e5ad1b8f]{margin-left:5px}.item_button[data-v-e5ad1b8f]:hover{transform:scale(1.1)}.observer[data-v-e5ad1b8f]{padding:1px;bottom:0px}.loading[data-v-e5ad1b8f]{display:flex;justify-content:center}.error_message[data-v-e5ad1b8f]{color:var(--error-message-color);text-align:center}@media (max-width: 768px){.container[data-v-e5ad1b8f]{width:100%}}.list-item[data-v-e5ad1b8f]{display:inline-block;margin-right:10px}.list-enter-active[data-v-e5ad1b8f],.list-leave-active[data-v-e5ad1b8f]{transition:all 1s ease}.list-enter-from[data-v-e5ad1b8f],.list-leave-to[data-v-e5ad1b8f]{opacity:0;transform:translateY(30px)}.list-move[data-v-e5ad1b8f]{transition:transform .8s ease}\n",document.head.appendChild(U),{setters:[t=>{a=t.z,s=t.d,i=t.s,l=t.c,n=t.r,d=t.o,o=t.u,r=t.A,c=t.a,u=t.b,m=t.f,f=t.h,p=t.e,v=t.g,b=t.i,h=t.v,g=t.j,_=t.F,x=t.k,y=t.t,L=t.B,k=t.D,w=t.E,C=t.G,S=t.l,A=t.U,H=t.n,V=t.H,T=t.p,j=t.q,F=t._,M=t.T,Q=t.x},t=>{E=t.default}],execute:function(){const e=a("human",{state:()=>({list:{page:0,total:0,limit:20,isLoading:!1,humansList:[],selectedSort:null,searchQuery:""}}),getters:{sortedHumansList:t=>"string"==typeof t.list.selectedSort?[...t.list.humansList].sort(((e,a)=>e[t.list.selectedSort]?.localeCompare(a[t.list.selectedSort]))):t.list.humansList,sortedAndSearchedHumansList(){return[...this.sortedHumansList].filter((t=>t.fio.includes(this.list.searchQuery)))}}}),U=t=>(T("data-v-e5ad1b8f"),t=t(),j(),t),q=U((()=>p("h2",{style:{"text-align":"center"}},"Вы уверены?",-1))),W={class:"buttons"},$={class:"buttons_load"},z={class:"buttons_load"},B={class:"container"},D=U((()=>p("h1",{class:"title",style:{"margin-bottom":"10px"}},"Полный список",-1))),G={style:{padding:"5px 0"}},I={class:"list_number",style:{padding:"0 10px"}},Y={class:"list_buttons"},J={key:0,class:"error_message"},K={key:1,class:"loading"},N={class:"observer"},O=F(s({__name:"HumansList",setup(t){const a=i(),s=S(),T=e(),j=l((()=>T.list.page<T.list.total&&!O.value)),F=l((()=>!T.list.humansList.length)),M=n(!1),Q=n(""),E=n([{value:"_id",title:"По умолчанию"},{value:"fio",title:"По фамилии"}]);d((()=>{T.list.humansList.length||U()}));const{fetchFunc:U,isLoading:O}=o({callback:async function(){T.list.page++;const t=await r.catchHumansList({limit:T.list.limit,page:T.list.page});T.list.total=Math.ceil(+t.headers["x-total-count"]/T.list.limit),T.list.humansList=[...T.list.humansList,...t.data.humansList]},alert:!1}),{fetchFunc:P,isLoading:R}=o({callback:async function(){a.alert.isVisible&&a.showAlert(!1),await r.deleteHuman(Q.value),X(),T.list.humansList=T.list.humansList.filter((t=>t._id!==Q.value))},successMessage:"Удалено"});function X(t){M.value=!M.value,t&&(Q.value=t)}return(t,e)=>{const i=H("v-btn"),l=H("LoadingWheel"),n=H("ModalWindow"),d=H("v-select"),o=H("v-text-field"),r=H("v-icon"),S=H("v-tooltip"),Q=H("v-list-item-title"),Z=H("v-list-item"),tt=H("v-list"),et=V("intersection");return c(),u(_,null,[m(n,{show:M.value,onHide:X,theme:v(a).currentTheme},{default:f((()=>[q,p("div",W,[p("div",$,[m(i,{class:"confirm",onClick:v(P)},{default:f((()=>[b("Да")])),_:1},8,["onClick"]),v(R)?(c(),h(l,{key:0,class:"wheel"})):g("",!0)]),p("div",z,[m(i,{class:"confirm",onClick:X},{default:f((()=>[b("Нет")])),_:1})])])])),_:1},8,["show","theme"]),p("div",B,[D,p("div",G,[m(d,{label:"Сортировать",items:E.value,modelValue:v(T).list.selectedSort,"onUpdate:modelValue":e[0]||(e[0]=t=>v(T).list.selectedSort=t),variant:"solo"},null,8,["items","modelValue"]),m(o,{label:"Поиск",modelValue:v(T).list.searchQuery,"onUpdate:modelValue":e[1]||(e[1]=t=>v(T).list.searchQuery=t),variant:"solo"},null,8,["modelValue"])]),v(T).sortedAndSearchedHumansList.length?(c(),h(tt,{key:0,class:"list"},{default:f((()=>[m(w,{name:"list"},{default:f((()=>[(c(!0),u(_,null,x(v(T).sortedAndSearchedHumansList,((e,i)=>(c(),h(Z,{class:"list_item",key:e._id},{prepend:f((()=>[p("div",I,y(i+1+"."),1)])),append:f((()=>[p("div",Y,[m(r,{class:"item_button",tag:"button",onClick:t=>async function(t){try{a.alert.isVisible&&a.showAlert(!1);const e=await A.copyToClipboard(t);a.setAlert("success",e)}catch(e){a.setAlert("error",e)}finally{a.showAlert(!0)}}(e.fio)},{default:f((()=>[b("mdi-content-copy")])),_:2},1032,["onClick"]),m(r,{class:"item_button",tag:"button",onClick:t=>{return a=e.fio,void s.push({path:"/info",query:{search:a}});var a}},{default:f((()=>[b("mdi-magnify")])),_:2},1032,["onClick"]),m(r,{class:"item_button",tag:"button",onClick:t=>X(e._id)},{default:f((()=>[b("mdi-delete-forever")])),_:2},1032,["onClick"])])])),default:f((()=>[m(Q,{class:"list_title",onClick:a=>t.$router.push(`/list/${e._id}`)},{default:f((()=>[m(S,{text:e.fio,location:"bottom"},{activator:f((({props:t})=>[p("span",L(k(t)),y(e.fio),17)])),_:2},1032,["text"])])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})):g("",!0)]),v(F)?(c(),u("h3",J,"Список пуст")):g("",!0),v(O)?(c(),u("div",K,[m(l)])):g("",!0),p("div",N,[C(p("div",null,null,512),[[et,{f:v(U),canLoad:()=>v(j)}]])])],64)}}}),[["__scopeId","data-v-e5ad1b8f"]]),P={class:"content"};t("default",s({__name:"ListView",setup(t){const e=i();return(t,a)=>v(e).isAdmin?(c(),u(_,{key:1},[m(M,{onShow:v(e).setMenuVisible,onTheme:v(e).setTheme},null,8,["onShow","onTheme"]),m(Q),p("div",P,[m(O)])],64)):(c(),h(E,{key:0,code:403,message:"Forbidden"}))}}))}}}));
