System.register(["./index-legacy-f206768c.js","./TheError-legacy-bb3f1142.js","./ToolsService-legacy-0c843a5f.js"],(function(e,l){"use strict";var t,a,s,o,d,i,n,r,c,u,v,m,p,h,b,_,f,g,x,w,y,V,k,U,C,I,T,S,L,F,K,P,R=document.createElement("style");return R.textContent=".google[data-v-6b80d342]{padding:10px 0}.filter_container>.filter_content[data-v-d439015b]{border:2px solid #738095;box-shadow:inset 0 0 2px rgba(207,215,230,.4);border-radius:5px;padding:5px}.filter_container>.filter_content>.filter_item[data-v-d439015b]{padding:3px 0;display:flex}.filter_container>.filter_content>.filter_item>.item_title[data-v-d439015b]{flex-basis:100px}.filter_container .filter_title[data-v-d439015b]{padding:10px 0}.buttons[data-v-d439015b]{display:flex;padding:10px 0}.sheets_link[data-v-d439015b]{display:inline-block;color:#208f47;text-decoration:none;font-weight:bolder;cursor:pointer}.sheets_link[data-v-d439015b]:visited{color:#208f47}.sheets_link[data-v-d439015b]:hover,.sheets_link[data-v-d439015b]:focus{color:#c4433a}.loader[data-v-1285b9d7]{display:flex;flex-direction:column;align-items:center;width:100%;padding-top:10px}.content[data-v-1285b9d7]{width:100%;padding-top:10px;padding-bottom:5px}.content .search[data-v-1285b9d7]{min-width:250px}.content .user_list[data-v-1285b9d7]{border-spacing:3px;margin-top:5px;background-color:inherit;border-collapse:collapse;border-radius:2px;border-style:hidden;box-shadow:0 0 0 1.5px #738095;width:100%;table-layout:fixed;min-width:250px}.content .user_list td[data-v-1285b9d7],.content .user_list th[data-v-1285b9d7]{border:solid 1px #ccc;padding:10px;border-radius:10px;overflow:auto;word-wrap:break-word}.content .user_list .list_row .row_item[data-v-1285b9d7]{vertical-align:middle;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.roles[data-v-1285b9d7]{display:flex;place-items:center}.roles>.role_name[data-v-1285b9d7]{flex-basis:90%;display:block;min-width:50px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.roles>.role_set[data-v-1285b9d7]{flex-basis:10%;min-width:30px}@media (max-width: 768px){.content[data-v-1285b9d7],.loader[data-v-1285b9d7]{width:100%;margin:0 auto}}.home_button[data-v-687c8c8e]{margin:10px 0 0 10px}.tools[data-v-687c8c8e]{margin:0 auto;width:90%}.tools .title[data-v-687c8c8e]{padding:20px 0}.tools .tools_list[data-v-687c8c8e]{padding-bottom:5px;width:50%}.tools .tools_list .list_item .item_title[data-v-687c8c8e]{user-select:none}.tools .tools_list .list_item .item_title[data-v-687c8c8e]:hover{cursor:pointer;color:teal}.selected[data-v-687c8c8e]{color:teal}@media (max-width: 768px){.tools .tools_list[data-v-687c8c8e]{width:100%}}\n",document.head.appendChild(R),{setters:[e=>{t=e.d,a=e.I,s=e.c,o=e.u,d=e.n,i=e.a,n=e.b,r=e.f,c=e.e,u=e.h,v=e.i,m=e.g,p=e.v,h=e.j,b=e.t,_=e.J,f=e._,g=e.s,x=e.r,w=e.A,y=e.w,V=e.F,k=e.k,U=e.G,C=e.K,I=e.C,T=e.p,S=e.q,L=e.o,F=e.y},e=>{K=e.default},e=>{P=e.T}],execute:function(){const l={class:"google_control"},R={class:"google_message"},j=f(t({__name:"TheToolsGoogle",setup(e){const t=a({serviceUser:"",servicePrivateKey:"",sheetId:"",folderId:"",message:""}),f=s((()=>!(t.serviceUser||t.servicePrivateKey||t.sheetId||t.folderId))),{fetchFunc:g,isLoading:x}=o({callback:async function(){await P.setGoogleServiceAccountSettings(t.serviceUser,t.servicePrivateKey,t.sheetId,t.folderId),t.serviceUser="",t.servicePrivateKey="",t.sheetId="",t.folderId=""},successMessage:"Сохранено"});return(e,a)=>{const s=d("v-text-field"),o=d("v-btn"),w=d("LoadingWheel");return i(),n("form",{class:"google",onSubmit:a[4]||(a[4]=_(((...e)=>m(g)&&m(g)(...e)),["prevent"]))},[r(s,{modelValue:t.serviceUser,"onUpdate:modelValue":a[0]||(a[0]=e=>t.serviceUser=e),variant:"outlined",label:"Service account email"},null,8,["modelValue"]),r(s,{modelValue:t.servicePrivateKey,"onUpdate:modelValue":a[1]||(a[1]=e=>t.servicePrivateKey=e),variant:"outlined",label:"Service account private key"},null,8,["modelValue"]),r(s,{modelValue:t.sheetId,"onUpdate:modelValue":a[2]||(a[2]=e=>t.sheetId=e),variant:"outlined",label:"Sheet ID"},null,8,["modelValue"]),r(s,{modelValue:t.folderId,"onUpdate:modelValue":a[3]||(a[3]=e=>t.folderId=e),variant:"outlined",label:"Folder ID"},null,8,["modelValue"]),c("div",l,[r(o,{type:"submit",disabled:m(f)},{default:u((()=>[v("Сохранить")])),_:1},8,["disabled"]),m(x)?(i(),p(w,{key:0})):h("",!0),c("div",R,b(t.message),1)])],32)}}}),[["__scopeId","data-v-6b80d342"]]),G=e=>(T("data-v-d439015b"),e=e(),S(),e),A={class:"filter_container"},E=G((()=>c("h3",{class:"filter_title"},"Критерии выгрузки",-1))),M={class:"filter_content"},W={class:"item_title"},D={class:"filter"},q=G((()=>c("h4",{class:"filter_title"},"Район",-1))),J={class:"filter"},O=G((()=>c("h4",{class:"filter_title"},"Год рождения",-1))),$={class:"buttons"},z=["href"],B=f(t({__name:"TheToolsSheets",setup(e){const l=g(),t=x([]),a=x([1920,2022]),_=x(""),f=x(null),T=s((()=>!t.value.length||(t.value.includes("district")&&t.value.includes("birth")?F.value||!f.value||!a.value[0]||!a.value[1]:F.value||!f.value&&(!a.value[0]||!a.value[1])))),S=[{name:"По району",value:"district"},{name:"По году",value:"birth"}],{fetchFunc:L,isLoading:F,data:K}=o({callback:async function(){_.value="";const e={district:f.value,birth:{from:a.value[0],to:a.value[1]||9999}};return await w.saveFormsToSheet(e)},successMessage:"Сформировано"});return y(K,(()=>{_.value=K.value?.link||""})),(e,s)=>{const o=d("CCheckbox"),g=d("v-select"),x=d("v-text-field"),w=d("v-range-slider"),y=d("v-btn"),K=d("LoadingWheel");return i(),n("div",A,[E,c("div",M,[(i(),n(V,null,k(S,(e=>c("div",{class:"filter_item",key:e.name},[c("header",W,b(e.name),1),r(o,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),value:e.value,theme:m(l).currentTheme},null,8,["modelValue","value","theme"])]))),64))]),U(c("div",D,[q,r(g,{modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=e=>f.value=e),label:"Район",items:m(I).districts},null,8,["modelValue","items"])],512),[[C,t.value.includes("district")]]),U(c("div",J,[O,r(w,{min:"1920",max:"2022",step:"1",modelValue:a.value,"onUpdate:modelValue":s[4]||(s[4]=e=>a.value=e)},{prepend:u((()=>[r(x,{modelValue:a.value[0],"onUpdate:modelValue":s[2]||(s[2]=e=>a.value[0]=e),"hide-details":"","single-line":"",type:"number",variant:"outlined",density:"compact",style:{width:"85px"}},null,8,["modelValue"])])),append:u((()=>[r(x,{modelValue:a.value[1],"onUpdate:modelValue":s[3]||(s[3]=e=>a.value[1]=e),"hide-details":"","single-line":"",type:"number",variant:"outlined",style:{width:"85px"},density:"compact"},null,8,["modelValue"])])),_:1},8,["modelValue"])],512),[[C,t.value.includes("birth")]]),c("div",$,[r(y,{onClick:m(L),disabled:m(T)},{default:u((()=>[v("Сформировать")])),_:1},8,["onClick","disabled"]),m(F)?(i(),p(K,{key:0})):h("",!0)]),_.value?(i(),n("a",{key:0,class:"sheets_link",target:"_blank",href:_.value},"Ссылка на выгруженные заявки",8,z)):h("",!0)])}}}),[["__scopeId","data-v-d439015b"]]),H=e=>(T("data-v-1285b9d7"),e=e(),S(),e),N={key:0,class:"loader"},Q=H((()=>c("span",null,null,-1))),X={key:1,class:"content"},Y={class:"user_list"},Z=H((()=>c("tr",{class:"list_header"},[c("th",null,"Имя"),c("th",null,"Е-мэйл"),c("th",null,"Роль")],-1))),ee={class:"list_row"},le={class:"row_item"},te={class:"row_item"},ae={class:"roles"},se=H((()=>c("label",{class:"role_name"},"Пользователь",-1))),oe={class:"roles"},de=H((()=>c("label",{class:"role_name"},"Админ ",-1))),ie=f(t({__name:"TheToolsRoles",setup(e){const l=g(),{fetchFunc:t,data:a,isLoading:p}=o({callback:async()=>P.getUsers(l.user._id),alert:!1}),{fetchFunc:h}=o({callback:async function(e,t){return l.alert.isVisible&&l.showAlert(!1),P.updateRoles(e,t)},successMessage:"Обновлено"}),_=x(""),f=s((()=>a.value?.filter((e=>e.email.toLowerCase().includes(_.value.toLowerCase())||e.name.toLowerCase().includes(_.value.toLowerCase())))));return L(t),(e,t)=>{const a=d("LoadingWheel"),s=d("v-text-field"),o=d("v-tooltip"),g=d("CCheckbox");return m(p)?(i(),n("div",N,[r(a),Q])):(i(),n("div",X,[r(s,{label:"Поиск",modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=e=>_.value=e),variant:"outlined"},null,8,["modelValue"]),c("table",Y,[c("tbody",null,[Z,(i(!0),n(V,null,k(m(f),(e=>(i(),n("tr",ee,[c("td",le,[c("span",null,[v(b(e.name),1),r(o,{activator:"parent",location:"bottom"},{default:u((()=>[v(b(e.name),1)])),_:2},1024)])]),c("td",te,[c("span",null,[v(b(e.email),1),r(o,{activator:"parent",location:"bottom"},{default:u((()=>[v(b(e.email),1)])),_:2},1024)])]),c("td",null,[c("div",ae,[r(g,{class:"role_set",value:"user",modelValue:e.roles,"onUpdate:modelValue":l=>e.roles=l,disabled:!0,theme:m(l).currentTheme},null,8,["modelValue","onUpdate:modelValue","theme"]),se]),c("div",oe,[r(g,{class:"role_set",value:"admin",modelValue:e.roles,"onUpdate:modelValue":l=>e.roles=l,onChange:l=>m(h)(e._id,e.roles),theme:m(l).currentTheme},null,8,["modelValue","onUpdate:modelValue","onChange","theme"]),de])])])))),256))])])]))}}}),[["__scopeId","data-v-1285b9d7"]]),ne={class:"tools"},re=(e=>(T("data-v-687c8c8e"),e=e(),S(),e))((()=>c("h1",{class:"title"},"Инструменты",-1))),ce={class:"tools_list"},ue={class:"list_item"},ve={class:"list_item"},me={class:"list_item"},pe=f(t({__name:"TheTools",setup(e){const l=a({integrate:!1,sheets:!1,adminRights:!1});function t(e){Object.keys(l).forEach((t=>{const a=t;l[a]!==l[e]&&(l[a]=!1)})),l[e]=!l[e]}return(e,a)=>{const s=d("v-btn");return i(),n(V,null,[r(s,{class:"home_button",onClick:a[0]||(a[0]=l=>e.$router.push("/"))},{default:u((()=>[v("На главную")])),_:1}),c("div",ne,[re,c("ul",ce,[c("li",ue,[c("h3",{class:F(["item_title",l.integrate?"selected":""]),onClick:a[1]||(a[1]=e=>t("integrate"))},"Настроить интеграцию с Google",2),U(r(j,null,null,512),[[C,l.integrate]])]),c("li",ve,[c("h3",{class:F(["item_title",l.sheets?"selected":""]),onClick:a[2]||(a[2]=e=>t("sheets"))},"Выгрузить заявки в Google Sheets",2),U(r(B,null,null,512),[[C,l.sheets]])]),c("li",me,[c("h3",{class:F(["item_title",l.adminRights?"selected":""]),onClick:a[3]||(a[3]=e=>t("adminRights"))},"Настроить роли пользователей",2),l.adminRights?(i(),p(ie,{key:0})):h("",!0)])])])],64)}}}),[["__scopeId","data-v-687c8c8e"]]);e("default",t({__name:"ToolsView",setup(e){const l=g();return(e,t)=>m(l).isAdmin?(i(),p(pe,{key:1})):(i(),p(K,{key:0,code:403,message:"Forbidden"}))}}))}}}));
