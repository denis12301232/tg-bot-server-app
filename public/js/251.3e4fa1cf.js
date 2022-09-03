"use strict";(self["webpackChunktg_bot_client_app"]=self["webpackChunktg_bot_client_app"]||[]).push([[251,163],{9879:function(e,t,r){var s=r(655),i=r(100),o=function(){function e(){}return Object.defineProperty(e,"setNewName",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return(0,s.mG)(this,void 0,Promise,(function(){return(0,s.Jh)(this,(function(t){return[2,i.Z.patch("/tools/name",{name:e})]}))}))}}),Object.defineProperty(e,"setNewEmail",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return(0,s.mG)(this,void 0,Promise,(function(){return(0,s.Jh)(this,(function(t){return[2,i.Z.patch("/tools/email",{email:e})]}))}))}}),Object.defineProperty(e,"setNewPassword",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){return(0,s.mG)(this,void 0,Promise,(function(){return(0,s.Jh)(this,(function(r){return[2,i.Z.patch("/tools/password",{newPassword:e,oldPassword:t})]}))}))}}),Object.defineProperty(e,"setGoogleServiceAccountSettings",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){return(0,s.mG)(this,void 0,Promise,(function(){return(0,s.Jh)(this,(function(s){return[2,i.Z.post("/tools/google/service",{serviceUser:e,servicePrivateKey:t,sheetId:r})]}))}))}}),e}();t["Z"]=o},4163:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var s=r(6252),i=r(3577),o=(0,s.Uk)("На главную");function n(e,t,r,n,l,a){var u=(0,s.up)("v-button");return(0,s.wg)(),(0,s.iD)("div",{class:(0,i.C_)(e.$style.error)},[(0,s._)("div",{class:(0,i.C_)(e.$style.error_info)},[(0,s._)("div",{class:(0,i.C_)(e.$style.error_code)},(0,i.zw)(r.code),3),(0,s._)("div",{class:(0,i.C_)(e.$style.error_text)},(0,i.zw)(r.message),3),(0,s.Wm)(u,{class:(0,i.C_)(e.$style.error_button),onClick:t[0]||(t[0]=function(t){return e.$router.push("/")})},{default:(0,s.w5)((function(){return[o]})),_:1},8,["class"])],2)],2)}var l=(0,s.aZ)({__name:"TheError",props:{code:{type:[String,Number],required:!0},message:{type:String,required:!0}},setup:function(e,t){var r=t.expose;r();var s={};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),a={error:"TheError_error_zWRpU",error_info:"TheError_error_info_bRaoI",error_code:"TheError_error_code_p9lzC",error_text:"TheError_error_text_fLubd",error_button:"TheError_error_button_wjtdJ"},u=r(3744);const c={};c["$style"]=a;const d=(0,u.Z)(l,[["render",n],["__cssModules",c]]);var m=d},5251:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var s=r(6252);function i(e,t,r,i,o,n){return i.store.user.email?((0,s.wg)(),(0,s.j4)(i["TheTools"],{key:1})):((0,s.wg)(),(0,s.j4)(i["TheError"],{key:0,code:403,message:"Forbidden"}))}var o=r(2625),n=r(4163),l=r(9963),a=r(3577),u=function(e){return(0,s.dD)("data-v-99e77cd2"),e=e(),(0,s.Cn)(),e},c=(0,s.Uk)("На главную"),d={class:"container"},m={class:"tools"},v=u((function(){return(0,s._)("h1",{class:"tools_title"},"Инструменты",-1)})),f={class:"tools_item"},g=["onSubmit"],_=u((function(){return(0,s._)("div",{class:"form_title"},"Service account email",-1)})),p=u((function(){return(0,s._)("div",{class:"form_title"},"Service account private key",-1)})),h=u((function(){return(0,s._)("div",{class:"form_title"},"Sheet ID",-1)})),b={class:"buttons"},y=(0,s.Uk)("Сохранить"),k={class:"message"},w={class:"tools_item"},S={key:0,class:"item_sheets"},T={key:0,class:"sheets_block"},q={class:"buttons"},P=(0,s.Uk)("Сформировать"),U={class:"message"},V={key:1,class:"sheets_block"},j={class:"buttons"},A=(0,s.Uk)("Сформировать"),L={class:"message"},C={key:2,class:"sheets_block"},Z={class:"block_year"},Q={class:"buttons"},F=(0,s.Uk)("Сформировать"),G={class:"message"},W={key:3,class:"sheets_block"},x=["href"];function D(e,t,r,i,o,n){var u=(0,s.up)("v-button"),D=(0,s.up)("v-input"),I=(0,s.up)("v-loading-wheel"),E=(0,s.up)("v-select"),O=(0,s.up)("v-select-district");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(u,{class:"home_button",onClick:t[0]||(t[0]=function(t){return e.$router.push("/")})},{default:(0,s.w5)((function(){return[c]})),_:1}),(0,s._)("div",d,[(0,s._)("ul",m,[v,(0,s._)("li",f,[(0,s._)("div",{class:"item_title",onClick:t[1]||(t[1]=function(e){return i.setVisible("integrate")})},"Настроить интеграцию с Google Sheets"),i.tools.integrate?((0,s.wg)(),(0,s.iD)("form",{key:0,class:"item_form",onSubmit:(0,l.iM)(i.setGoogleApi,["prevent"])},[_,(0,s.Wm)(D,{class:"form_input",modelValue:i.googleApi.serviceUser,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.googleApi.serviceUser=e}),placeholder:"email"},null,8,["modelValue"]),p,(0,s.Wm)(D,{class:"form_input",modelValue:i.googleApi.servicePrivateKey,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.googleApi.servicePrivateKey=e}),placeholder:"key"},null,8,["modelValue"]),h,(0,s.Wm)(D,{class:"form_input",modelValue:i.googleApi.sheetId,"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.googleApi.sheetId=e}),placeholder:"id"},null,8,["modelValue"]),(0,s._)("div",b,[(0,s.Wm)(u,{type:"submit",disabled:!i.googleApi.serviceUser||!i.googleApi.servicePrivateKey||!i.googleApi.sheetId},{default:(0,s.w5)((function(){return[y]})),_:1},8,["disabled"]),i.googleApi.isLoading?((0,s.wg)(),(0,s.j4)(I,{key:0})):(0,s.kq)("",!0),(0,s._)("div",k,(0,a.zw)(i.googleApi.message),1)])],40,g)):(0,s.kq)("",!0)]),(0,s._)("li",w,[(0,s._)("div",{class:"item_title",onClick:t[5]||(t[5]=function(e){return i.setVisible("sheets")})},"Выгрузить заявки в Google Sheets"),i.tools.sheets?((0,s.wg)(),(0,s.iD)("ul",S,[(0,s.Wm)(E,{class:"sheets_select",options:i.selectOptions,title:"Выберите вариант",modelValue:i.selected,"onUpdate:modelValue":t[6]||(t[6]=function(e){return i.selected=e})},null,8,["modelValue"]),"all"===i.selected?((0,s.wg)(),(0,s.iD)("li",T,[(0,s._)("div",q,[(0,s.Wm)(u,{onClick:t[7]||(t[7]=function(e){return i.saveFormsToSheet(i.formsQueries.all)}),disabled:i.isFormsLoading},{default:(0,s.w5)((function(){return[P]})),_:1},8,["disabled"]),i.formsQueries.all.isLoading?((0,s.wg)(),(0,s.j4)(I,{key:0})):(0,s.kq)("",!0),(0,s._)("div",U,(0,a.zw)(i.formsQueries.all.message),1)])])):(0,s.kq)("",!0),"district"===i.selected?((0,s.wg)(),(0,s.iD)("li",V,[(0,s.Wm)(O,{modelValue:i.formsQueries.district.query,"onUpdate:modelValue":t[8]||(t[8]=function(e){return i.formsQueries.district.query=e}),style:{width:"inherit"}},null,8,["modelValue"]),(0,s._)("div",j,[(0,s.Wm)(u,{onClick:t[9]||(t[9]=function(e){return i.saveFormsToSheet(i.formsQueries.district)}),disabled:"Район"===i.formsQueries.district.query||i.isFormsLoading},{default:(0,s.w5)((function(){return[A]})),_:1},8,["disabled"]),i.formsQueries.district.isLoading?((0,s.wg)(),(0,s.j4)(I,{key:0})):(0,s.kq)("",!0),(0,s._)("div",L,(0,a.zw)(i.formsQueries.district.message),1)])])):(0,s.kq)("",!0),"birth"===i.selected?((0,s.wg)(),(0,s.iD)("li",C,[(0,s._)("div",Z,[(0,s.wy)((0,s._)("input",{class:"year_interval","onUpdate:modelValue":t[10]||(t[10]=function(e){return i.min=e}),type:"number",placeholder:"С"},null,512),[[l.nr,i.min]]),(0,s.wy)((0,s._)("input",{class:"year_interval","onUpdate:modelValue":t[11]||(t[11]=function(e){return i.max=e}),type:"number",placeholder:"По"},null,512),[[l.nr,i.max]])]),(0,s._)("div",Q,[(0,s.Wm)(u,{onClick:t[12]||(t[12]=function(e){return i.saveFormsToSheet(i.formsQueries.birth)}),disabled:String(i.min).length<4||String(i.max).length<4||i.isFormsLoading},{default:(0,s.w5)((function(){return[F]})),_:1},8,["disabled"]),i.formsQueries.birth.isLoading?((0,s.wg)(),(0,s.j4)(I,{key:0})):(0,s.kq)("",!0),(0,s._)("div",G,(0,a.zw)(i.formsQueries.birth.message),1)])])):(0,s.kq)("",!0),i.link?((0,s.wg)(),(0,s.iD)("li",W,[(0,s._)("a",{class:"sheets_link",target:"_blank",href:i.link},"Ссылка на выгруженные заявки",8,x)])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])])])],64)}var I=r(655),E=r(2262),O=r(6442),z=r(9879),$=(0,s.aZ)({__name:"TheTools",setup:function(e,t){var r=this,i=t.expose;i();var o=(0,E.qj)({integrate:!1,sheets:!1}),n=function(e){o[e]=!o[e]},l=(0,E.qj)({serviceUser:"",servicePrivateKey:"",sheetId:"",message:"",isLoading:!1}),a=function(){return(0,I.mG)(r,void 0,void 0,(function(){var e,t,r,s;return(0,I.Jh)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,3,4]),l.isLoading=!0,[4,z.Z.setGoogleServiceAccountSettings(l.serviceUser,l.servicePrivateKey,l.sheetId)];case 1:return e=i.sent(),l.message=e.data.message,l.serviceUser="",l.servicePrivateKey="",l.sheetId="",[3,4];case 2:return t=i.sent(),l.message=null===(s=null===(r=null===t||void 0===t?void 0:t.response)||void 0===r?void 0:r.data)||void 0===s?void 0:s.message,[3,4];case 3:return l.isLoading=!1,setTimeout((function(){return l.message=""}),3e3),[7];case 4:return[2]}}))}))},u=(0,E.iH)(""),c=[{value:"all",name:"Выгрузить все"},{value:"district",name:"Выгрузить по району"},{value:"birth",name:"Выгрузить по году"}],d=(0,E.iH)(""),m=(0,E.iH)("");(0,s.YP)([d,m],(function(){String(d.value).length>4&&(d.value=String(d.value).slice(0,4)),String(m.value).length>4&&(m.value=String(m.value).slice(0,4))}));var v=(0,E.iH)(!1),f=(0,E.qj)({all:{filter:"all",query:"all",isLoading:!1,message:""},district:{filter:"district",query:"Район",isLoading:!1,message:""},birth:{filter:"birth",query:(0,s.Fl)((function(){return d.value+"-"+m.value})),isLoading:!1,message:""}}),g=(0,E.iH)(""),_=function(e){return(0,I.mG)(r,void 0,void 0,(function(){var t,r;return(0,I.Jh)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,3,4]),g.value="",e.isLoading=!0,v.value=!0,[4,O.Z.saveFormsToSheet(e.filter,e.query)];case 1:return t=s.sent(),e.message=t.data.message,g.value=t.data.link,[3,4];case 2:return r=s.sent(),console.log(r),e.message=r.response.data.message,setTimeout((function(){return e.message=""}),2e3),[3,4];case 3:return v.value=!1,e.isLoading=!1,setTimeout((function(){return e.message=""}),2e3),[7];case 4:return[2]}}))}))},p={tools:o,setVisible:n,googleApi:l,setGoogleApi:a,selected:u,selectOptions:c,min:d,max:m,isFormsLoading:v,formsQueries:f,link:g,saveFormsToSheet:_,ref:E.iH,reactive:E.qj,computed:s.Fl,watch:s.YP,AssistanceService:O.Z,ToolsService:z.Z};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}}),H=r(3744);const J=(0,H.Z)($,[["render",D],["__scopeId","data-v-99e77cd2"]]);var K=J,N=(0,s.aZ)({__name:"ToolsView",setup:function(e,t){var r=t.expose;r();var s=(0,o.o)(),i={store:s,useStore:o.o,TheError:n["default"],TheTools:K};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});const Y=(0,H.Z)(N,[["render",i]]);var M=Y}}]);
//# sourceMappingURL=251.3e4fa1cf.js.map