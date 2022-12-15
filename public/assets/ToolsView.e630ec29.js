var T=(o,e,s)=>new Promise((a,u)=>{var p=i=>{try{n(s.next(i))}catch(r){u(r)}},m=i=>{try{n(s.throw(i))}catch(r){u(r)}},n=i=>i.done?a(i.value):Promise.resolve(i.value).then(p,m);n((s=s.apply(o,e)).next())});import{d as x,I as j,c as K,u as w,n as _,a as v,b as V,f as l,e as t,h as y,i as C,g as f,v as D,j as S,t as k,J as H,_ as L,r as $,A as X,w as Y,F as P,k as q,G as F,K as B,C as Z,p as W,q as M,s as z,o as ee,y as R}from"./index.d85eaef1.js";import te from"./TheError.112fb687.js";import{T as G}from"./ToolsService.fbbc4773.js";const se={class:"google_control"},ue={class:"google_message"},le=x({__name:"TheToolsGoogle",setup(o){const e=j({serviceUser:"",servicePrivateKey:"",sheetId:"",folderId:"",message:""}),s=K(()=>!e.serviceUser&&!e.servicePrivateKey&&!e.sheetId&&!e.folderId),{fetchFunc:a,isLoading:u}=w({callback:p,successMessage:"\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E"});function p(){return T(this,null,function*(){yield G.setGoogleServiceAccountSettings(e.serviceUser,e.servicePrivateKey,e.sheetId,e.folderId),e.serviceUser="",e.servicePrivateKey="",e.sheetId="",e.folderId=""})}return(m,n)=>{const i=_("v-text-field"),r=_("v-btn"),g=_("LoadingWheel");return v(),V("form",{class:"google",onSubmit:n[4]||(n[4]=H((...d)=>f(a)&&f(a)(...d),["prevent"]))},[l(i,{modelValue:e.serviceUser,"onUpdate:modelValue":n[0]||(n[0]=d=>e.serviceUser=d),variant:"outlined",label:"Service account email"},null,8,["modelValue"]),l(i,{modelValue:e.servicePrivateKey,"onUpdate:modelValue":n[1]||(n[1]=d=>e.servicePrivateKey=d),variant:"outlined",label:"Service account private key"},null,8,["modelValue"]),l(i,{modelValue:e.sheetId,"onUpdate:modelValue":n[2]||(n[2]=d=>e.sheetId=d),variant:"outlined",label:"Sheet ID"},null,8,["modelValue"]),l(i,{modelValue:e.folderId,"onUpdate:modelValue":n[3]||(n[3]=d=>e.folderId=d),variant:"outlined",label:"Folder ID"},null,8,["modelValue"]),t("div",se,[l(r,{type:"submit",disabled:f(s)},{default:y(()=>[C("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")]),_:1},8,["disabled"]),f(u)?(v(),D(g,{key:0})):S("",!0),t("div",ue,k(e.message),1)])],32)}}});const oe=L(le,[["__scopeId","data-v-6b80d342"]]),N=o=>(W("data-v-d0da7f67"),o=o(),M(),o),ae={class:"filter_container"},ne=N(()=>t("h3",{class:"filter_title"},"\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438",-1)),ie={class:"filter_content"},de={class:"item_title"},ce={class:"filter"},re=N(()=>t("h4",{class:"filter_title"},"\u0420\u0430\u0439\u043E\u043D",-1)),_e={class:"filter"},ve=N(()=>t("h4",{class:"filter_title"},"\u0413\u043E\u0434 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",-1)),me={class:"buttons"},pe=["href"],he=x({__name:"TheToolsSheets",setup(o){const e=$([]),s=$([1920,2022]),a=$(""),u=$(null),p=K(()=>e.value.length?e.value.includes("district")&&e.value.includes("birth")?i.value||!u.value||!s.value[0]||!s.value[1]:i.value||!u.value&&(!s.value[0]||!s.value[1]):!0),m=[{name:"\u041F\u043E \u0440\u0430\u0439\u043E\u043D\u0443",value:"district"},{name:"\u041F\u043E \u0433\u043E\u0434\u0443",value:"birth"}],{fetchFunc:n,isLoading:i,data:r}=w({callback:g,successMessage:"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043E"});function g(){return T(this,null,function*(){a.value="";const d={district:u.value,birth:{from:s.value[0],to:s.value[1]||9999}};return yield X.saveFormsToSheet(d)})}return Y(r,()=>{var d;a.value=((d=r.value)==null?void 0:d.link)||""}),(d,h)=>{const I=_("CCheckbox"),U=_("v-select"),c=_("v-text-field"),E=_("v-range-slider"),J=_("v-btn"),O=_("LoadingWheel");return v(),V("div",ae,[ne,t("div",ie,[(v(),V(P,null,q(m,b=>t("div",{class:"filter_item",key:b.name},[t("header",de,k(b.name),1),l(I,{modelValue:e.value,"onUpdate:modelValue":h[0]||(h[0]=Q=>e.value=Q),value:b.value},null,8,["modelValue","value"])])),64))]),F(t("div",ce,[re,l(U,{modelValue:u.value,"onUpdate:modelValue":h[1]||(h[1]=b=>u.value=b),label:"\u0420\u0430\u0439\u043E\u043D",items:f(Z).districts},null,8,["modelValue","items"])],512),[[B,e.value.includes("district")]]),F(t("div",_e,[ve,l(E,{min:"1920",max:"2022",step:"1",modelValue:s.value,"onUpdate:modelValue":h[4]||(h[4]=b=>s.value=b)},{prepend:y(()=>[l(c,{modelValue:s.value[0],"onUpdate:modelValue":h[2]||(h[2]=b=>s.value[0]=b),"hide-details":"","single-line":"",type:"number",variant:"outlined",density:"compact",style:{width:"85px"}},null,8,["modelValue"])]),append:y(()=>[l(c,{modelValue:s.value[1],"onUpdate:modelValue":h[3]||(h[3]=b=>s.value[1]=b),"hide-details":"","single-line":"",type:"number",variant:"outlined",style:{width:"85px"},density:"compact"},null,8,["modelValue"])]),_:1},8,["modelValue"])],512),[[B,e.value.includes("birth")]]),t("div",me,[l(J,{onClick:f(n),disabled:f(p)},{default:y(()=>[C("\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C")]),_:1},8,["onClick","disabled"]),f(i)?(v(),D(O,{key:0})):S("",!0)]),a.value?(v(),V("a",{key:0,class:"sheets_link",target:"_blank",href:a.value},"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u044B\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438",8,pe)):S("",!0)])}}});const fe=L(he,[["__scopeId","data-v-d0da7f67"]]),A=o=>(W("data-v-cd8c077a"),o=o(),M(),o),ge={key:0,class:"loader"},be=A(()=>t("span",null,null,-1)),Ve={key:1,class:"content"},Ce={class:"user_list"},ye=A(()=>t("tr",{class:"list_header"},[t("th",null,"\u0418\u043C\u044F"),t("th",null,"\u0415-\u043C\u044D\u0439\u043B"),t("th",null,"\u0420\u043E\u043B\u044C")],-1)),Ee={class:"list_row"},ke={class:"row_item"},Te={class:"row_item"},$e={class:"roles"},De=A(()=>t("label",{class:"role_name"},"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",-1)),xe={class:"roles"},Ie=A(()=>t("label",{class:"role_name"},"\u0410\u0434\u043C\u0438\u043D ",-1)),Ue=x({__name:"TheToolsRoles",setup(o){const e=z(),{fetchFunc:s,data:a,isLoading:u}=w({callback:()=>T(this,null,function*(){return G.getUsers(e.user._id)}),alert:!1}),{fetchFunc:p}=w({callback:i,successMessage:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E"}),m=$(""),n=K(()=>{var r;return(r=a.value)==null?void 0:r.filter(g=>g.email.toLowerCase().includes(m.value.toLowerCase())||g.name.toLowerCase().includes(m.value.toLowerCase()))});ee(s);function i(r,g){return T(this,null,function*(){return e.alert.isVisible&&e.showAlert(!1),G.updateRoles(r,g)})}return(r,g)=>{const d=_("LoadingWheel"),h=_("v-text-field"),I=_("v-tooltip"),U=_("CCheckbox");return f(u)?(v(),V("div",ge,[l(d),be])):(v(),V("div",Ve,[l(h,{label:"\u041F\u043E\u0438\u0441\u043A",modelValue:m.value,"onUpdate:modelValue":g[0]||(g[0]=c=>m.value=c),variant:"outlined"},null,8,["modelValue"]),t("table",Ce,[t("tbody",null,[ye,(v(!0),V(P,null,q(f(n),c=>(v(),V("tr",Ee,[t("td",ke,[t("span",null,[C(k(c.name),1),l(I,{activator:"parent",location:"bottom"},{default:y(()=>[C(k(c.name),1)]),_:2},1024)])]),t("td",Te,[t("span",null,[C(k(c.email),1),l(I,{activator:"parent",location:"bottom"},{default:y(()=>[C(k(c.email),1)]),_:2},1024)])]),t("td",null,[t("div",$e,[l(U,{class:"role_set",value:"user",modelValue:c.roles,"onUpdate:modelValue":E=>c.roles=E,disabled:!0},null,8,["modelValue","onUpdate:modelValue"]),De]),t("div",xe,[l(U,{class:"role_set",value:"admin",modelValue:c.roles,"onUpdate:modelValue":E=>c.roles=E,onChange:E=>f(p)(c._id,c.roles)},null,8,["modelValue","onUpdate:modelValue","onChange"]),Ie])])]))),256))])])]))}}});const we=L(Ue,[["__scopeId","data-v-cd8c077a"]]),Se=o=>(W("data-v-687c8c8e"),o=o(),M(),o),Fe={class:"tools"},Be=Se(()=>t("h1",{class:"title"},"\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",-1)),Le={class:"tools_list"},Ae={class:"list_item"},Re={class:"list_item"},Ge={class:"list_item"},Ke=x({__name:"TheTools",setup(o){const e=j({integrate:!1,sheets:!1,adminRights:!1});function s(a){Object.keys(e).forEach(u=>{const p=u;e[p]!==e[a]&&(e[p]=!1)}),e[a]=!e[a]}return(a,u)=>{const p=_("v-btn");return v(),V(P,null,[l(p,{class:"home_button",onClick:u[0]||(u[0]=m=>a.$router.push("/"))},{default:y(()=>[C("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")]),_:1}),t("div",Fe,[Be,t("ul",Le,[t("li",Ae,[t("h3",{class:R(["item_title",e.integrate?"selected":""]),onClick:u[1]||(u[1]=m=>s("integrate"))},"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 Google",2),F(l(oe,null,null,512),[[B,e.integrate]])]),t("li",Re,[t("h3",{class:R(["item_title",e.sheets?"selected":""]),onClick:u[2]||(u[2]=m=>s("sheets"))},"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 Google Sheets",2),F(l(fe,null,null,512),[[B,e.sheets]])]),t("li",Ge,[t("h3",{class:R(["item_title",e.adminRights?"selected":""]),onClick:u[3]||(u[3]=m=>s("adminRights"))},"\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0440\u043E\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439",2),e.adminRights?(v(),D(we,{key:0})):S("",!0)])])])],64)}}});const Pe=L(Ke,[["__scopeId","data-v-687c8c8e"]]),qe=x({__name:"ToolsView",setup(o){const e=z();return(s,a)=>f(e).isAdmin?(v(),D(Pe,{key:1})):(v(),D(te,{key:0,code:403,message:"Forbidden"}))}});export{qe as default};
