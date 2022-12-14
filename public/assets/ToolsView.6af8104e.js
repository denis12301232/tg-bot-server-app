import{d as D,I as N,c as G,u as U,n as c,a as r,b as V,f as l,e as t,h as y,i as C,g as v,v as $,j as w,t as k,J as Q,_ as B,r as T,A as H,w as X,F as K,k as j,G as S,K as F,C as Y,p as P,q as W,s as q,o as Z,y as A}from"./index.1ba03ace.js";import ee from"./TheError.ebf935e5.js";import{T as R}from"./ToolsService.65074a42.js";const te={class:"google_control"},se={class:"google_message"},ue=D({__name:"TheToolsGoogle",setup(a){const e=N({serviceUser:"",servicePrivateKey:"",sheetId:"",folderId:"",message:""}),s=G(()=>!e.serviceUser&&!e.servicePrivateKey&&!e.sheetId&&!e.folderId),{fetchFunc:n,isLoading:u}=U({callback:f,successMessage:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E"});async function f(){await R.setGoogleServiceAccountSettings(e.serviceUser,e.servicePrivateKey,e.sheetId,e.folderId),e.serviceUser="",e.servicePrivateKey="",e.sheetId="",e.folderId=""}return(m,d)=>{const g=c("v-text-field"),b=c("v-btn"),p=c("LoadingWheel");return r(),V("form",{class:"google",onSubmit:d[4]||(d[4]=Q((...o)=>v(n)&&v(n)(...o),["prevent"]))},[l(g,{modelValue:e.serviceUser,"onUpdate:modelValue":d[0]||(d[0]=o=>e.serviceUser=o),variant:"outlined",label:"Service account email"},null,8,["modelValue"]),l(g,{modelValue:e.servicePrivateKey,"onUpdate:modelValue":d[1]||(d[1]=o=>e.servicePrivateKey=o),variant:"outlined",label:"Service account private key"},null,8,["modelValue"]),l(g,{modelValue:e.sheetId,"onUpdate:modelValue":d[2]||(d[2]=o=>e.sheetId=o),variant:"outlined",label:"Sheet ID"},null,8,["modelValue"]),l(g,{modelValue:e.folderId,"onUpdate:modelValue":d[3]||(d[3]=o=>e.folderId=o),variant:"outlined",label:"Folder ID"},null,8,["modelValue"]),t("div",te,[l(b,{type:"submit",disabled:v(s)},{default:y(()=>[C("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")]),_:1},8,["disabled"]),v(u)?(r(),$(p,{key:0})):w("",!0),t("div",se,k(e.message),1)])],32)}}});const le=B(ue,[["__scopeId","data-v-6b80d342"]]),M=a=>(P("data-v-4678b5fe"),a=a(),W(),a),oe={class:"filter_container"},ae=M(()=>t("h3",{class:"filter_title"},"\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438",-1)),ne={class:"filter_content"},ie={class:"item_title"},de={class:"filter"},ce=M(()=>t("h4",{class:"filter_title"},"\u0420\u0430\u0439\u043E\u043D",-1)),re={class:"filter"},_e=M(()=>t("h4",{class:"filter_title"},"\u0413\u043E\u0434 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",-1)),ve={class:"buttons"},me=["href"],pe=D({__name:"TheToolsSheets",setup(a){const e=T([]),s=T([1920,2022]),n=T(""),u=T(""),f=G(()=>e.value.length?e.value.includes("district")&&e.value.includes("birth")?g.value||!u.value||!s.value[0]||!s.value[1]:g.value||!u.value&&(!s.value[0]||!s.value[1]):!0),m=[{name:"\u041F\u043E \u0440\u0430\u0439\u043E\u043D\u0443",value:"district"},{name:"\u041F\u043E \u0433\u043E\u0434\u0443",value:"birth"}],{fetchFunc:d,isLoading:g,data:b}=U({callback:p,successMessage:"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043E"});async function p(){n.value="";const o={district:u.value,birth:{from:s.value[0],to:s.value[1]||9999}};return await H.saveFormsToSheet(o)}return X(b,()=>{var o;n.value=((o=b.value)==null?void 0:o.link)||""}),(o,_)=>{const x=c("CCheckbox"),I=c("v-select"),i=c("v-text-field"),E=c("v-range-slider"),z=c("v-btn"),J=c("LoadingWheel");return r(),V("div",oe,[ae,t("div",ne,[(r(),V(K,null,j(m,h=>t("div",{class:"filter_item",key:h.name},[t("header",ie,k(h.name),1),l(x,{modelValue:e.value,"onUpdate:modelValue":_[0]||(_[0]=O=>e.value=O),value:h.value},null,8,["modelValue","value"])])),64))]),S(t("div",de,[ce,l(I,{modelValue:u.value,"onUpdate:modelValue":_[1]||(_[1]=h=>u.value=h),label:"\u0420\u0430\u0439\u043E\u043D",items:v(Y).districts},null,8,["modelValue","items"])],512),[[F,e.value.includes("district")]]),S(t("div",re,[_e,l(E,{min:"1920",max:"2022",step:"1",modelValue:s.value,"onUpdate:modelValue":_[4]||(_[4]=h=>s.value=h)},{prepend:y(()=>[l(i,{modelValue:s.value[0],"onUpdate:modelValue":_[2]||(_[2]=h=>s.value[0]=h),"hide-details":"","single-line":"",type:"number",variant:"outlined",density:"compact",style:{width:"85px"}},null,8,["modelValue"])]),append:y(()=>[l(i,{modelValue:s.value[1],"onUpdate:modelValue":_[3]||(_[3]=h=>s.value[1]=h),"hide-details":"","single-line":"",type:"number",variant:"outlined",style:{width:"85px"},density:"compact"},null,8,["modelValue"])]),_:1},8,["modelValue"])],512),[[F,e.value.includes("birth")]]),t("div",ve,[l(z,{onClick:v(d),disabled:v(f)},{default:y(()=>[C("\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C")]),_:1},8,["onClick","disabled"]),v(g)?(r(),$(J,{key:0})):w("",!0)]),n.value?(r(),V("a",{key:0,class:"sheets_link",target:"_blank",href:n.value},"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u044B\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438",8,me)):w("",!0)])}}});const he=B(pe,[["__scopeId","data-v-4678b5fe"]]),L=a=>(P("data-v-cd8c077a"),a=a(),W(),a),fe={key:0,class:"loader"},ge=L(()=>t("span",null,null,-1)),be={key:1,class:"content"},Ve={class:"user_list"},Ce=L(()=>t("tr",{class:"list_header"},[t("th",null,"\u0418\u043C\u044F"),t("th",null,"\u0415-\u043C\u044D\u0439\u043B"),t("th",null,"\u0420\u043E\u043B\u044C")],-1)),ye={class:"list_row"},Ee={class:"row_item"},ke={class:"row_item"},Te={class:"roles"},$e=L(()=>t("label",{class:"role_name"},"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",-1)),De={class:"roles"},xe=L(()=>t("label",{class:"role_name"},"\u0410\u0434\u043C\u0438\u043D ",-1)),Ie=D({__name:"TheToolsRoles",setup(a){const e=q(),{fetchFunc:s,data:n,isLoading:u}=U({callback:async()=>R.getUsers(e.user._id),alert:!1}),{fetchFunc:f}=U({callback:g,successMessage:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E"}),m=T(""),d=G(()=>{var b;return(b=n.value)==null?void 0:b.filter(p=>p.email.toLowerCase().includes(m.value.toLowerCase())||p.name.toLowerCase().includes(m.value.toLowerCase()))});Z(s);async function g(b,p){return e.alert.isVisible&&e.showAlert(!1),R.updateRoles(b,p)}return(b,p)=>{const o=c("LoadingWheel"),_=c("v-text-field"),x=c("v-tooltip"),I=c("CCheckbox");return v(u)?(r(),V("div",fe,[l(o),ge])):(r(),V("div",be,[l(_,{label:"\u041F\u043E\u0438\u0441\u043A",modelValue:m.value,"onUpdate:modelValue":p[0]||(p[0]=i=>m.value=i),variant:"outlined"},null,8,["modelValue"]),t("table",Ve,[t("tbody",null,[Ce,(r(!0),V(K,null,j(v(d),i=>(r(),V("tr",ye,[t("td",Ee,[t("span",null,[C(k(i.name),1),l(x,{activator:"parent",location:"bottom"},{default:y(()=>[C(k(i.name),1)]),_:2},1024)])]),t("td",ke,[t("span",null,[C(k(i.email),1),l(x,{activator:"parent",location:"bottom"},{default:y(()=>[C(k(i.email),1)]),_:2},1024)])]),t("td",null,[t("div",Te,[l(I,{class:"role_set",value:"user",modelValue:i.roles,"onUpdate:modelValue":E=>i.roles=E,disabled:!0},null,8,["modelValue","onUpdate:modelValue"]),$e]),t("div",De,[l(I,{class:"role_set",value:"admin",modelValue:i.roles,"onUpdate:modelValue":E=>i.roles=E,onChange:E=>v(f)(i._id,i.roles)},null,8,["modelValue","onUpdate:modelValue","onChange"]),xe])])]))),256))])])]))}}});const Ue=B(Ie,[["__scopeId","data-v-cd8c077a"]]),we=a=>(P("data-v-687c8c8e"),a=a(),W(),a),Se={class:"tools"},Fe=we(()=>t("h1",{class:"title"},"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",-1)),Be={class:"tools_list"},Le={class:"list_item"},Ae={class:"list_item"},Re={class:"list_item"},Ge=D({__name:"TheTools",setup(a){const e=N({integrate:!1,sheets:!1,adminRights:!1});function s(n){Object.keys(e).forEach(u=>{const f=u;e[f]!==e[n]&&(e[f]=!1)}),e[n]=!e[n]}return(n,u)=>{const f=c("v-btn");return r(),V(K,null,[l(f,{class:"home_button",onClick:u[0]||(u[0]=m=>n.$router.push("/"))},{default:y(()=>[C("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")]),_:1}),t("div",Se,[Fe,t("ul",Be,[t("li",Le,[t("h3",{class:A(["item_title",e.integrate?"selected":""]),onClick:u[1]||(u[1]=m=>s("integrate"))},"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 Google",2),S(l(le,null,null,512),[[F,e.integrate]])]),t("li",Ae,[t("h3",{class:A(["item_title",e.sheets?"selected":""]),onClick:u[2]||(u[2]=m=>s("sheets"))},"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 Google Sheets",2),S(l(he,null,null,512),[[F,e.sheets]])]),t("li",Re,[t("h3",{class:A(["item_title",e.adminRights?"selected":""]),onClick:u[3]||(u[3]=m=>s("adminRights"))},"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0440\u043E\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439",2),e.adminRights?(r(),$(Ue,{key:0})):w("",!0)])])])],64)}}});const Ke=B(Ge,[["__scopeId","data-v-687c8c8e"]]),Ne=D({__name:"ToolsView",setup(a){const e=q();return(s,n)=>v(e).isAdmin?(r(),$(Ke,{key:1})):(r(),$(ee,{key:0,code:403,message:"Forbidden"}))}});export{Ne as default};
