"use strict";(self["webpackChunktg_bot_client_app"]=self["webpackChunktg_bot_client_app"]||[]).push([[362,163],{9879:function(e,s,t){var o=t(655),r=t(100),l=function(){function e(){}return Object.defineProperty(e,"setNewName",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return(0,o.mG)(this,void 0,Promise,(function(){return(0,o.Jh)(this,(function(s){return[2,r.Z.patch("/tools/name",{name:e})]}))}))}}),Object.defineProperty(e,"setNewEmail",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return(0,o.mG)(this,void 0,Promise,(function(){return(0,o.Jh)(this,(function(s){return[2,r.Z.patch("/tools/email",{email:e})]}))}))}}),Object.defineProperty(e,"setNewPassword",{enumerable:!1,configurable:!0,writable:!0,value:function(e,s){return(0,o.mG)(this,void 0,Promise,(function(){return(0,o.Jh)(this,(function(t){return[2,r.Z.patch("/tools/password",{newPassword:e,oldPassword:s})]}))}))}}),Object.defineProperty(e,"setGoogleServiceAccountSettings",{enumerable:!1,configurable:!0,writable:!0,value:function(e,s,t){return(0,o.mG)(this,void 0,Promise,(function(){return(0,o.Jh)(this,(function(o){return[2,r.Z.post("/tools/google/service",{serviceUser:e,servicePrivateKey:s,sheetId:t})]}))}))}}),e}();s["Z"]=l},4163:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var o=t(6252),r=t(3577),l=(0,o.Uk)("На главную");function n(e,s,t,n,a,i){var u=(0,o.up)("v-button");return(0,o.wg)(),(0,o.iD)("div",{class:(0,r.C_)(e.$style.error)},[(0,o._)("div",{class:(0,r.C_)(e.$style.error_info)},[(0,o._)("div",{class:(0,r.C_)(e.$style.error_code)},(0,r.zw)(t.code),3),(0,o._)("div",{class:(0,r.C_)(e.$style.error_text)},(0,r.zw)(t.message),3),(0,o.Wm)(u,{class:(0,r.C_)(e.$style.error_button),onClick:s[0]||(s[0]=function(s){return e.$router.push("/")})},{default:(0,o.w5)((function(){return[l]})),_:1},8,["class"])],2)],2)}var a=(0,o.aZ)({__name:"TheError",props:{code:{type:[String,Number],required:!0},message:{type:String,required:!0}},setup:function(e,s){var t=s.expose;t();var o={};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),i={error:"TheError_error_zWRpU",error_info:"TheError_error_info_bRaoI",error_code:"TheError_error_code_p9lzC",error_text:"TheError_error_text_fLubd",error_button:"TheError_error_button_wjtdJ"},u=t(3744);const c={};c["$style"]=i;const _=(0,u.Z)(a,[["render",n],["__cssModules",c]]);var d=_},362:function(e,s,t){t.r(s),t.d(s,{default:function(){return $}});var o=t(6252);function r(e,s,t,r,l,n){return r.store.user.email?((0,o.wg)(),(0,o.j4)(r["TheAccount"],{key:1})):((0,o.wg)(),(0,o.j4)(r["TheError"],{key:0,code:403,message:"Forbidden"}))}var l=t(2625),n=t(4163),a=t(3577),i=(0,o.Uk)("На главную"),u=(0,o._)("h1",null,"Настройки аккаунта",-1),c=(0,o.Uk)("Изменить");function _(e,s,t,r,l,n){var _=(0,o.up)("v-button"),d=(0,o.up)("v-input"),m=(0,o.up)("v-button-confirm"),v=(0,o.up)("v-button-cancel"),p=(0,o.up)("v-loading-wheel");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(_,{class:(0,a.C_)(e.$style.home_button),onClick:s[0]||(s[0]=function(s){return e.$router.push("/")})},{default:(0,o.w5)((function(){return[i]})),_:1},8,["class"]),(0,o._)("div",{class:(0,a.C_)(e.$style.account)},[u,(0,o._)("ul",{class:(0,a.C_)(e.$style.tools)},[(0,o._)("li",{class:(0,a.C_)(e.$style.tools_list)},[(0,o._)("div",{class:(0,a.C_)(e.$style.list_title)},"Имя пользователя",2),(0,o._)("div",{class:(0,a.C_)(e.$style.list_block)},[(0,o.Wm)(d,{class:(0,a.C_)(e.$style.list_input),placeholder:"Имя пользователя",type:"text",value:r.tools.name.value,onInput:s[1]||(s[1]=function(e){return r.tools.name.input.call(r.tools.name,e)})},null,8,["class","value"]),(0,o._)("div",{class:(0,a.C_)(e.$style.list_buttons)},[r.tools.name.value!==r.store.user.name?((0,o.wg)(),(0,o.j4)(m,{key:0,onClick:r.setNewName})):(0,o.kq)("",!0),r.tools.name.value!==r.store.user.name?((0,o.wg)(),(0,o.j4)(v,{key:1,onClick:s[2]||(s[2]=function(e){return r.tools.name.cancel.call(r.tools.name)})})):(0,o.kq)("",!0),r.tools.name.isLoading?((0,o.wg)(),(0,o.j4)(p,{key:2})):(0,o.kq)("",!0)],2)],2),(0,o._)("div",{class:(0,a.C_)(e.$style.list_message)},[(0,o._)("small",{class:(0,a.C_)(e.$style.list_error)},(0,a.zw)(r.tools.name.errorMessage),3),(0,o._)("small",{class:(0,a.C_)(e.$style.list_ok)},(0,a.zw)(r.tools.name.okMessage),3)],2)],2),(0,o._)("li",{class:(0,a.C_)(e.$style.tools_list)},[(0,o._)("div",{class:(0,a.C_)(e.$style.list_title)},"Адрес электронной почты",2),(0,o._)("div",{class:(0,a.C_)(e.$style.list_block)},[(0,o.Wm)(d,{class:(0,a.C_)(e.$style.list_input),placeholder:"Е-мэйл",type:"email",value:r.tools.email.value,onInput:s[3]||(s[3]=function(e){return r.tools.email.input.call(r.tools.email,e)})},null,8,["class","value"]),(0,o._)("div",{class:(0,a.C_)(e.$style.list_buttons)},[r.tools.email.value!==r.store.user.email?((0,o.wg)(),(0,o.j4)(m,{key:0,onClick:r.setNewEmail})):(0,o.kq)("",!0),r.tools.email.value!==r.store.user.email?((0,o.wg)(),(0,o.j4)(v,{key:1,onClick:s[4]||(s[4]=function(e){return r.tools.email.cancel.call(r.tools.email)})})):(0,o.kq)("",!0),r.tools.email.isLoading?((0,o.wg)(),(0,o.j4)(p,{key:2})):(0,o.kq)("",!0)],2)],2),(0,o._)("div",{class:(0,a.C_)(e.$style.list_message)},[(0,o._)("small",{class:(0,a.C_)(e.$style.list_error)},(0,a.zw)(r.tools.email.errorMessage),3),(0,o._)("small",{class:(0,a.C_)(e.$style.list_ok)},(0,a.zw)(r.tools.email.okMessage),3)],2)],2),(0,o._)("li",{class:(0,a.C_)(e.$style.tools_list)},[(0,o._)("div",{class:(0,a.C_)(e.$style.list_title)},"Пароль",2),(0,o._)("div",{class:(0,a.C_)(e.$style.list_fields)},[(0,o.Wm)(d,{class:(0,a.C_)(e.$style.list_input),placeholder:"Старый пароль",type:"password",modelValue:r.tools.password.old,"onUpdate:modelValue":s[5]||(s[5]=function(e){return r.tools.password.old=e})},null,8,["class","modelValue"]),(0,o.Wm)(d,{class:(0,a.C_)(e.$style.list_input),placeholder:"Новый пароль",type:"password",modelValue:r.tools.password.new,"onUpdate:modelValue":s[6]||(s[6]=function(e){return r.tools.password.new=e})},null,8,["class","modelValue"])],2),(0,o._)("div",{class:(0,a.C_)(e.$style.list_block)},[(0,o.Wm)(_,{onClick:r.setNewPassword,disabled:!(r.tools.password.old.length>=6)||!(r.tools.password.new.length>=6)},{default:(0,o.w5)((function(){return[c]})),_:1},8,["disabled"]),r.tools.password.isLoading?((0,o.wg)(),(0,o.j4)(p,{key:0})):(0,o.kq)("",!0),(0,o._)("div",{class:(0,a.C_)(e.$style.list_message)},[(0,o._)("small",{class:(0,a.C_)(e.$style.list_error)},(0,a.zw)(r.tools.password.errorMessage),3),(0,o._)("small",{class:(0,a.C_)(e.$style.list_ok)},(0,a.zw)(r.tools.password.okMessage),3)],2)],2)],2)],2)],2)],64)}var d=t(655),m=t(2262),v=t(9879),p=t(3177),g=(0,o.aZ)({__name:"TheAccount",setup:function(e,s){var t=this,o=s.expose;o();var r=(0,l.o)(),n=(0,m.qj)({name:{value:r.user.name,hidden:!0,isLoading:!1,errorMessage:"",okMessage:"",input:function(e){var s=e.target;this.value=s.value,p.Z.required(this.value)?this.errorMessage="":this.errorMessage="! Ввведите имя"},cancel:function(){this.value=r.user.name,this.errorMessage=""}},email:{value:r.user.email,hidden:!0,isLoading:!1,errorMessage:"",okMessage:"",input:function(e){var s=e.target;this.value=s.value,p.Z.isEmail(this.value)?this.errorMessage="":this.errorMessage="! Ввведите корректный е-мэйл"},cancel:function(){this.value=r.user.email,this.errorMessage=""}},password:{old:"",new:"",hidden:!0,isLoading:!1,errorMessage:"",okMessage:""}}),a=function(){return(0,d.mG)(t,void 0,Promise,(function(){var e,s,t;return(0,d.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,3,4]),n.name.isLoading=!0,[4,v.Z.setNewName(n.name.value)];case 1:return o.sent(),r.user.name=n.name.value,n.name.okMessage="Имя изменено на ".concat(r.user.name),[3,4];case 2:return e=o.sent(),n.name.errorMessage=null===(t=null===(s=null===e||void 0===e?void 0:e.response)||void 0===s?void 0:s.data)||void 0===t?void 0:t.message,console.log(e),[3,4];case 3:return n.name.isLoading=!1,setTimeout((function(){n.name.okMessage="",n.name.errorMessage=""}),2e3),[7];case 4:return[2]}}))}))},i=function(){return(0,d.mG)(t,void 0,Promise,(function(){var e,s,t;return(0,d.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,3,4]),n.email.isLoading=!0,[4,v.Z.setNewEmail(n.email.value)];case 1:return o.sent(),r.user.email=n.email.value,n.email.okMessage="Е-мэйл изменен на ".concat(r.user.email),[3,4];case 2:return e=o.sent(),n.email.errorMessage=null===(t=null===(s=null===e||void 0===e?void 0:e.response)||void 0===s?void 0:s.data)||void 0===t?void 0:t.message,console.log(e),[3,4];case 3:return n.email.isLoading=!1,setTimeout((function(){n.email.okMessage="",n.email.errorMessage=""}),2e3),[7];case 4:return[2]}}))}))},u=function(){return(0,d.mG)(t,void 0,Promise,(function(){var e,s,t;return(0,d.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,3,4]),n.password.isLoading=!0,[4,v.Z.setNewPassword(n.password.new,n.password.old)];case 1:return o.sent(),n.password.okMessage="Пароль изменен!",n.password.old="",n.password.new="",[3,4];case 2:return e=o.sent(),n.password.errorMessage=null===(t=null===(s=null===e||void 0===e?void 0:e.response)||void 0===s?void 0:s.data)||void 0===t?void 0:t.message,console.log(e),[3,4];case 3:return n.password.isLoading=!1,setTimeout((function(){n.password.okMessage="",n.password.errorMessage=""}),2e3),[7];case 4:return[2]}}))}))},c={store:r,tools:n,setNewName:a,setNewEmail:i,setNewPassword:u,reactive:m.qj,useStore:l.o,ToolsService:v.Z,Validate:p.Z};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),h={home_button:"TheAccount_home_button_St_yT",account:"TheAccount_account_ghClr",tools:"TheAccount_tools_Zbzi8",tools_list:"TheAccount_tools_list_IHBgr",list_message:"TheAccount_list_message__IdqX",list_error:"TheAccount_list_error_oF3vf",list_ok:"TheAccount_list_ok_RakGB",list_title:"TheAccount_list_title_yasmo",list_block:"TheAccount_list_block_ihiOK",list_buttons:"TheAccount_list_buttons_R10F1",list_input:"TheAccount_list_input_tSgjs",list_fields:"TheAccount_list_fields_fMupG"},w=t(3744);const f={};f["$style"]=h;const y=(0,w.Z)(g,[["render",_],["__cssModules",f]]);var b=y,k=(0,o.aZ)({__name:"AccountView",setup:function(e,s){var t=s.expose;t();var o=(0,l.o)(),r={store:o,useStore:l.o,TheError:n["default"],TheAccount:b};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});const C=(0,w.Z)(k,[["render",r]]);var $=C}}]);
//# sourceMappingURL=362.5bb0fb9d.js.map