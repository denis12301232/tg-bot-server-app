import{d as x,I as j,c as G,u as U,n as r,a as _,b,f as u,e as t,h as E,i as T,g as n,v as D,j as w,t as k,J as H,_ as B,s as K,r as $,A as X,w as Y,F as P,k as q,G as S,K as F,C as Z,p as W,q as M,o as ee,y as A}from"./index.eb04ed57.js";import te from"./TheError.e304ea9e.js";import{T as R}from"./ToolsService.bfc5c525.js";const se={class:"google_control"},ue={class:"google_message"},le=x({__name:"TheToolsGoogle",setup(o){const e=j({serviceUser:"",servicePrivateKey:"",sheetId:"",folderId:"",message:""}),a=G(()=>!e.serviceUser&&!e.servicePrivateKey&&!e.sheetId&&!e.folderId),{fetchFunc:s,isLoading:l}=U({callback:i,successMessage:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E"});async function i(){await R.setGoogleServiceAccountSettings(e.serviceUser,e.servicePrivateKey,e.sheetId,e.folderId),e.serviceUser="",e.servicePrivateKey="",e.sheetId="",e.folderId=""}return(p,d)=>{const V=r("v-text-field"),f=r("v-btn"),h=r("LoadingWheel");return _(),b("form",{class:"google",onSubmit:d[4]||(d[4]=H((...v)=>n(s)&&n(s)(...v),["prevent"]))},[u(V,{modelValue:e.serviceUser,"onUpdate:modelValue":d[0]||(d[0]=v=>e.serviceUser=v),variant:"outlined",label:"Service account email"},null,8,["modelValue"]),u(V,{modelValue:e.servicePrivateKey,"onUpdate:modelValue":d[1]||(d[1]=v=>e.servicePrivateKey=v),variant:"outlined",label:"Service account private key"},null,8,["modelValue"]),u(V,{modelValue:e.sheetId,"onUpdate:modelValue":d[2]||(d[2]=v=>e.sheetId=v),variant:"outlined",label:"Sheet ID"},null,8,["modelValue"]),u(V,{modelValue:e.folderId,"onUpdate:modelValue":d[3]||(d[3]=v=>e.folderId=v),variant:"outlined",label:"Folder ID"},null,8,["modelValue"]),t("div",se,[u(f,{type:"submit",disabled:n(a)},{default:E(()=>[T("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")]),_:1},8,["disabled"]),n(l)?(_(),D(h,{key:0})):w("",!0),t("div",ue,k(e.message),1)])],32)}}});const oe=B(le,[["__scopeId","data-v-6b80d342"]]),N=o=>(W("data-v-d439015b"),o=o(),M(),o),ae={class:"filter_container"},ne=N(()=>t("h3",{class:"filter_title"},"\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438",-1)),ie={class:"filter_content"},de={class:"item_title"},ce={class:"filter"},re=N(()=>t("h4",{class:"filter_title"},"\u0420\u0430\u0439\u043E\u043D",-1)),_e={class:"filter"},ve=N(()=>t("h4",{class:"filter_title"},"\u0413\u043E\u0434 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",-1)),me={class:"buttons"},he=["href"],pe=x({__name:"TheToolsSheets",setup(o){const e=K(),a=$([]),s=$([1920,2022]),l=$(""),i=$(null),p=G(()=>a.value.length?a.value.includes("district")&&a.value.includes("birth")?f.value||!i.value||!s.value[0]||!s.value[1]:f.value||!i.value&&(!s.value[0]||!s.value[1]):!0),d=[{name:"\u041F\u043E \u0440\u0430\u0439\u043E\u043D\u0443",value:"district"},{name:"\u041F\u043E \u0433\u043E\u0434\u0443",value:"birth"}],{fetchFunc:V,isLoading:f,data:h}=U({callback:v,successMessage:"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043E"});async function v(){l.value="";const C={district:i.value,birth:{from:s.value[0],to:s.value[1]||9999}};return await X.saveFormsToSheet(C)}return Y(h,()=>{var C;l.value=((C=h.value)==null?void 0:C.link)||""}),(C,m)=>{const I=r("CCheckbox"),c=r("v-select"),y=r("v-text-field"),z=r("v-range-slider"),J=r("v-btn"),O=r("LoadingWheel");return _(),b("div",ae,[ne,t("div",ie,[(_(),b(P,null,q(d,g=>t("div",{class:"filter_item",key:g.name},[t("header",de,k(g.name),1),u(I,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=Q=>a.value=Q),value:g.value,theme:n(e).currentTheme},null,8,["modelValue","value","theme"])])),64))]),S(t("div",ce,[re,u(c,{modelValue:i.value,"onUpdate:modelValue":m[1]||(m[1]=g=>i.value=g),label:"\u0420\u0430\u0439\u043E\u043D",items:n(Z).districts},null,8,["modelValue","items"])],512),[[F,a.value.includes("district")]]),S(t("div",_e,[ve,u(z,{min:"1920",max:"2022",step:"1",modelValue:s.value,"onUpdate:modelValue":m[4]||(m[4]=g=>s.value=g)},{prepend:E(()=>[u(y,{modelValue:s.value[0],"onUpdate:modelValue":m[2]||(m[2]=g=>s.value[0]=g),"hide-details":"","single-line":"",type:"number",variant:"outlined",density:"compact",style:{width:"85px"}},null,8,["modelValue"])]),append:E(()=>[u(y,{modelValue:s.value[1],"onUpdate:modelValue":m[3]||(m[3]=g=>s.value[1]=g),"hide-details":"","single-line":"",type:"number",variant:"outlined",style:{width:"85px"},density:"compact"},null,8,["modelValue"])]),_:1},8,["modelValue"])],512),[[F,a.value.includes("birth")]]),t("div",me,[u(J,{onClick:n(V),disabled:n(p)},{default:E(()=>[T("\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C")]),_:1},8,["onClick","disabled"]),n(f)?(_(),D(O,{key:0})):w("",!0)]),l.value?(_(),b("a",{key:0,class:"sheets_link",target:"_blank",href:l.value},"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u044B\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438",8,he)):w("",!0)])}}});const fe=B(pe,[["__scopeId","data-v-d439015b"]]),L=o=>(W("data-v-1285b9d7"),o=o(),M(),o),ge={key:0,class:"loader"},be=L(()=>t("span",null,null,-1)),Ve={key:1,class:"content"},Ce={class:"user_list"},ye=L(()=>t("tr",{class:"list_header"},[t("th",null,"\u0418\u043C\u044F"),t("th",null,"\u0415-\u043C\u044D\u0439\u043B"),t("th",null,"\u0420\u043E\u043B\u044C")],-1)),Te={class:"list_row"},Ee={class:"row_item"},ke={class:"row_item"},$e={class:"roles"},De=L(()=>t("label",{class:"role_name"},"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",-1)),xe={class:"roles"},Ie=L(()=>t("label",{class:"role_name"},"\u0410\u0434\u043C\u0438\u043D ",-1)),Ue=x({__name:"TheToolsRoles",setup(o){const e=K(),{fetchFunc:a,data:s,isLoading:l}=U({callback:async()=>R.getUsers(e.user._id),alert:!1}),{fetchFunc:i}=U({callback:V,successMessage:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E"}),p=$(""),d=G(()=>{var f;return(f=s.value)==null?void 0:f.filter(h=>h.email.toLowerCase().includes(p.value.toLowerCase())||h.name.toLowerCase().includes(p.value.toLowerCase()))});ee(a);async function V(f,h){return e.alert.isVisible&&e.showAlert(!1),R.updateRoles(f,h)}return(f,h)=>{const v=r("LoadingWheel"),C=r("v-text-field"),m=r("v-tooltip"),I=r("CCheckbox");return n(l)?(_(),b("div",ge,[u(v),be])):(_(),b("div",Ve,[u(C,{label:"\u041F\u043E\u0438\u0441\u043A",modelValue:p.value,"onUpdate:modelValue":h[0]||(h[0]=c=>p.value=c),variant:"outlined"},null,8,["modelValue"]),t("table",Ce,[t("tbody",null,[ye,(_(!0),b(P,null,q(n(d),c=>(_(),b("tr",Te,[t("td",Ee,[t("span",null,[T(k(c.name),1),u(m,{activator:"parent",location:"bottom"},{default:E(()=>[T(k(c.name),1)]),_:2},1024)])]),t("td",ke,[t("span",null,[T(k(c.email),1),u(m,{activator:"parent",location:"bottom"},{default:E(()=>[T(k(c.email),1)]),_:2},1024)])]),t("td",null,[t("div",$e,[u(I,{class:"role_set",value:"user",modelValue:c.roles,"onUpdate:modelValue":y=>c.roles=y,disabled:!0,theme:n(e).currentTheme},null,8,["modelValue","onUpdate:modelValue","theme"]),De]),t("div",xe,[u(I,{class:"role_set",value:"admin",modelValue:c.roles,"onUpdate:modelValue":y=>c.roles=y,onChange:y=>n(i)(c._id,c.roles),theme:n(e).currentTheme},null,8,["modelValue","onUpdate:modelValue","onChange","theme"]),Ie])])]))),256))])])]))}}});const we=B(Ue,[["__scopeId","data-v-1285b9d7"]]),Se=o=>(W("data-v-687c8c8e"),o=o(),M(),o),Fe={class:"tools"},Be=Se(()=>t("h1",{class:"title"},"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",-1)),Le={class:"tools_list"},Ae={class:"list_item"},Re={class:"list_item"},Ge={class:"list_item"},Ke=x({__name:"TheTools",setup(o){const e=j({integrate:!1,sheets:!1,adminRights:!1});function a(s){Object.keys(e).forEach(l=>{const i=l;e[i]!==e[s]&&(e[i]=!1)}),e[s]=!e[s]}return(s,l)=>{const i=r("v-btn");return _(),b(P,null,[u(i,{class:"home_button",onClick:l[0]||(l[0]=p=>s.$router.push("/"))},{default:E(()=>[T("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")]),_:1}),t("div",Fe,[Be,t("ul",Le,[t("li",Ae,[t("h3",{class:A(["item_title",e.integrate?"selected":""]),onClick:l[1]||(l[1]=p=>a("integrate"))},"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 Google",2),S(u(oe,null,null,512),[[F,e.integrate]])]),t("li",Re,[t("h3",{class:A(["item_title",e.sheets?"selected":""]),onClick:l[2]||(l[2]=p=>a("sheets"))},"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 Google Sheets",2),S(u(fe,null,null,512),[[F,e.sheets]])]),t("li",Ge,[t("h3",{class:A(["item_title",e.adminRights?"selected":""]),onClick:l[3]||(l[3]=p=>a("adminRights"))},"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0440\u043E\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439",2),e.adminRights?(_(),D(we,{key:0})):w("",!0)])])])],64)}}});const Pe=B(Ke,[["__scopeId","data-v-687c8c8e"]]),je=x({__name:"ToolsView",setup(o){const e=K();return(a,s)=>n(e).isAdmin?(_(),D(Pe,{key:1})):(_(),D(te,{key:0,code:403,message:"Forbidden"}))}});export{je as default};
