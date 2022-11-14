"use strict";(self["webpackChunktg_bot_client_app"]=self["webpackChunktg_bot_client_app"]||[]).push([[727,163],{9879:function(e,s,t){var r=t(100),l=function(){function e(){}return Object.defineProperty(e,"setNewName",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return r.Z.patch("/tools/name",{name:e})}}),Object.defineProperty(e,"setNewEmail",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return r.Z.patch("/tools/email",{email:e})}}),Object.defineProperty(e,"setNewPassword",{enumerable:!1,configurable:!0,writable:!0,value:function(e,s){return r.Z.patch("/tools/password",{newPassword:e,oldPassword:s})}}),Object.defineProperty(e,"setGoogleServiceAccountSettings",{enumerable:!1,configurable:!0,writable:!0,value:function(e,s,t,l){return r.Z.post("/tools/google/service",{serviceUser:e,servicePrivateKey:s,sheetId:t,folderId:l})}}),Object.defineProperty(e,"giveAdminRights",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return r.Z.post("/tools/giverights",{email:e})}}),Object.defineProperty(e,"takeAdminRights",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return r.Z.post("/tools/takerights",{email:e})}}),Object.defineProperty(e,"getUsers",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return r.Z.get("/tools/users",{params:{_id:e}})}}),Object.defineProperty(e,"updateRoles",{enumerable:!1,configurable:!0,writable:!0,value:function(e,s){return r.Z.post("/tools/setroles",{_id:e,roles:s})}}),e}();s["Z"]=l},4163:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var r=t(6252),l=t(3577),o=(0,r.Uk)("На главную");function a(e,s,t,a,n,i){var u=(0,r.up)("v-button");return(0,r.wg)(),(0,r.iD)("div",{class:(0,l.C_)(e.$style.error)},[(0,r._)("div",{class:(0,l.C_)(e.$style.error_info)},[(0,r._)("div",{class:(0,l.C_)(e.$style.error_code)},(0,l.zw)(t.code),3),(0,r._)("div",{class:(0,l.C_)(e.$style.error_text)},(0,l.zw)(t.message),3),(0,r.Wm)(u,{class:(0,l.C_)(e.$style.error_button),onClick:s[0]||(s[0]=function(s){return e.$router.push("/")})},{default:(0,r.w5)((function(){return[o]})),_:1},8,["class"])],2)],2)}var n=(0,r.aZ)({__name:"TheError",props:{code:{type:[String,Number],required:!0},message:{type:String,required:!0}},setup:function(e,s){var t=s.expose;t();var r={};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),i={error:"TheError_error_zWRpU",error_info:"TheError_error_info_bRaoI",error_code:"TheError_error_code_p9lzC",error_text:"TheError_error_text_fLubd",error_button:"TheError_error_button_wjtdJ"},u=t(3744);const c={};c["$style"]=i;const _=(0,u.Z)(n,[["render",a],["__cssModules",c]]);var d=_},8727:function(e,s,t){t.r(s),t.d(s,{default:function(){return A}});var r=t(6252);function l(e,s,t,l,o,a){return l.store.user.email?((0,r.wg)(),(0,r.j4)(l["TheAccount"],{key:1})):((0,r.wg)(),(0,r.j4)(l["TheError"],{key:0,code:403,message:"Forbidden"}))}var o=t(4402),a=t(4163),n=t(3577),i=(0,r.Uk)("На главную"),u=(0,r._)("h1",null,"Настройки аккаунта",-1),c=(0,r.Uk)("Изменить");function _(e,s,t,l,o,a){var _=(0,r.up)("v-button"),d=(0,r.up)("v-input"),m=(0,r.up)("ButtonImage"),v=(0,r.up)("LoadingWheel");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l["AlertModal"],{class:(0,n.C_)(e.$style.alert),message:l.store.alert.message,onShow:l.store.showAlert,"is-visible":l.store.alert.isVisible,type:l.store.alert.type},null,8,["class","message","onShow","is-visible","type"]),(0,r.Wm)(_,{class:(0,n.C_)(e.$style.home_button),onClick:s[0]||(s[0]=function(s){return e.$router.push("/")})},{default:(0,r.w5)((function(){return[i]})),_:1},8,["class"]),(0,r._)("div",{class:(0,n.C_)(e.$style.account)},[u,(0,r._)("ul",{class:(0,n.C_)(e.$style.tools)},[(0,r._)("li",{class:(0,n.C_)(e.$style.tools_list)},[(0,r._)("div",{class:(0,n.C_)(e.$style.list_title)},"Имя пользователя",2),(0,r._)("div",{class:(0,n.C_)(e.$style.list_block)},[(0,r.Wm)(d,{class:(0,n.C_)(e.$style.list_input),placeholder:"Имя пользователя",type:"text",value:l.tools.name.value,onInput:s[1]||(s[1]=function(e){return l.tools.name.input.call(l.tools.name,e)})},null,8,["class","value"]),(0,r._)("div",{class:(0,n.C_)(e.$style.list_buttons)},[l.tools.name.value!==l.store.user.name?((0,r.wg)(),(0,r.j4)(m,{key:0,onClick:l.setNewName,image:"images/confirm.png",invert:!1})):(0,r.kq)("",!0),l.tools.name.value!==l.store.user.name?((0,r.wg)(),(0,r.j4)(m,{key:1,onClick:s[2]||(s[2]=function(e){return l.tools.name.cancel.call(l.tools.name)}),image:"images/cancel.png",invert:!1})):(0,r.kq)("",!0),l.tools.name.isLoading?((0,r.wg)(),(0,r.j4)(v,{key:2})):(0,r.kq)("",!0)],2)],2),(0,r._)("div",{class:(0,n.C_)(e.$style.list_message)},[(0,r._)("small",{class:(0,n.C_)(e.$style.list_error)},(0,n.zw)(l.tools.name.errorMessage),3)],2)],2),(0,r._)("li",{class:(0,n.C_)(e.$style.tools_list)},[(0,r._)("div",{class:(0,n.C_)(e.$style.list_title)},"Адрес электронной почты",2),(0,r._)("div",{class:(0,n.C_)(e.$style.list_block)},[(0,r.Wm)(d,{class:(0,n.C_)(e.$style.list_input),placeholder:"Е-мэйл",type:"email",value:l.tools.email.value,onInput:s[3]||(s[3]=function(e){return l.tools.email.input.call(l.tools.email,e)})},null,8,["class","value"]),(0,r._)("div",{class:(0,n.C_)(e.$style.list_buttons)},[l.tools.email.value!==l.store.user.email?((0,r.wg)(),(0,r.j4)(m,{key:0,onClick:l.setNewEmail,image:"images/confirm.png",invert:!1})):(0,r.kq)("",!0),l.tools.email.value!==l.store.user.email?((0,r.wg)(),(0,r.j4)(m,{key:1,onClick:s[4]||(s[4]=function(e){return l.tools.email.cancel.call(l.tools.email)}),image:"images/cancel.png",invert:!1})):(0,r.kq)("",!0),l.tools.email.isLoading?((0,r.wg)(),(0,r.j4)(v,{key:2})):(0,r.kq)("",!0)],2)],2),(0,r._)("div",{class:(0,n.C_)(e.$style.list_message)},[(0,r._)("small",{class:(0,n.C_)(e.$style.list_error)},(0,n.zw)(l.tools.email.errorMessage),3)],2)],2),(0,r._)("li",{class:(0,n.C_)(e.$style.tools_list)},[(0,r._)("div",{class:(0,n.C_)(e.$style.list_title)},"Пароль",2),(0,r._)("div",{class:(0,n.C_)(e.$style.list_fields)},[(0,r.Wm)(d,{class:(0,n.C_)(e.$style.list_input),placeholder:"Старый пароль",type:"password",modelValue:l.tools.password.old,"onUpdate:modelValue":s[5]||(s[5]=function(e){return l.tools.password.old=e}),autocomplete:"new-password"},null,8,["class","modelValue"]),(0,r.Wm)(d,{class:(0,n.C_)(e.$style.list_input),placeholder:"Новый пароль",type:"password",modelValue:l.tools.password.new,"onUpdate:modelValue":s[6]||(s[6]=function(e){return l.tools.password.new=e}),autocomplete:"new-password"},null,8,["class","modelValue"])],2),(0,r._)("div",{class:(0,n.C_)(e.$style.list_block)},[(0,r.Wm)(_,{onClick:l.setNewPassword,disabled:!(l.tools.password.old.length>=6)||!(l.tools.password.new.length>=6)},{default:(0,r.w5)((function(){return[c]})),_:1},8,["disabled"]),l.tools.password.isLoading?((0,r.wg)(),(0,r.j4)(v,{key:0})):(0,r.kq)("",!0),(0,r._)("div",{class:(0,n.C_)(e.$style.list_message)},[(0,r._)("small",{class:(0,n.C_)(e.$style.list_error)},(0,n.zw)(l.tools.password.errorMessage),3)],2)],2)],2)],2)],2)],64)}var d=t(655),m=t(2262),v=t(9879),p=t(3177),g=t(7224),w=(0,r.aZ)({__name:"TheAccount",setup:function(e,s){var t=s.expose;t();var r=(0,o.o)(),l=(0,m.qj)({name:{value:r.user.name,hidden:!0,isLoading:!1,errorMessage:"",input:function(e){var s=e.target;this.value=s.value,p.Z.required(this.value)?this.errorMessage="":this.errorMessage="! Ввведите имя"},cancel:function(){this.value=r.user.name,this.errorMessage=""}},email:{value:r.user.email,hidden:!0,isLoading:!1,errorMessage:"",input:function(e){var s=e.target;this.value=s.value,p.Z.isEmail(this.value)?this.errorMessage="":this.errorMessage="! Ввведите корректный е-мэйл"},cancel:function(){this.value=r.user.email,this.errorMessage=""}},password:{old:"",new:"",hidden:!0,isLoading:!1,errorMessage:""}});function a(){var e,s;return(0,d.mG)(this,void 0,Promise,(function(){var t;return(0,d.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,3,4]),l.name.isLoading=!0,[4,v.Z.setNewName(l.name.value)];case 1:return o.sent(),r.user.name=l.name.value,r.setAlert("success","Имя изменено!"),[3,4];case 2:return t=o.sent(),r.setAlert("error",null===(s=null===(e=null===t||void 0===t?void 0:t.response)||void 0===e?void 0:e.data)||void 0===s?void 0:s.message),[3,4];case 3:return l.name.isLoading=!1,r.showAlert(),[7];case 4:return[2]}}))}))}function n(){var e,s;return(0,d.mG)(this,void 0,Promise,(function(){var t;return(0,d.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,3,4]),l.email.isLoading=!0,[4,v.Z.setNewEmail(l.email.value)];case 1:return o.sent(),r.user.email=l.email.value,r.setAlert("success","Е-мэйл изменен!"),[3,4];case 2:return t=o.sent(),r.setAlert("error",null===(s=null===(e=null===t||void 0===t?void 0:t.response)||void 0===e?void 0:e.data)||void 0===s?void 0:s.message),[3,4];case 3:return l.email.isLoading=!1,r.showAlert(),[7];case 4:return[2]}}))}))}function i(){var e,s;return(0,d.mG)(this,void 0,Promise,(function(){var t;return(0,d.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,3,4]),l.password.isLoading=!0,[4,v.Z.setNewPassword(l.password.new,l.password.old)];case 1:return o.sent(),r.setAlert("success","Пароль изменен!"),l.password.old="",l.password.new="",[3,4];case 2:return t=o.sent(),r.setAlert("error",null===(s=null===(e=null===t||void 0===t?void 0:t.response)||void 0===e?void 0:e.data)||void 0===s?void 0:s.message),[3,4];case 3:return l.password.isLoading=!1,r.showAlert(),[7];case 4:return[2]}}))}))}var u={store:r,tools:l,setNewName:a,setNewEmail:n,setNewPassword:i,reactive:m.qj,ref:m.iH,useStore:o.o,ToolsService:v.Z,Validate:p.Z,AlertModal:g.Z};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),f={alert:"TheAccount_alert_RCFbU",home_button:"TheAccount_home_button_St_yT",account:"TheAccount_account_ghClr",tools:"TheAccount_tools_Zbzi8",tools_list:"TheAccount_tools_list_IHBgr",list_message:"TheAccount_list_message__IdqX",list_error:"TheAccount_list_error_oF3vf",list_title:"TheAccount_list_title_yasmo",list_block:"TheAccount_list_block_ihiOK",list_buttons:"TheAccount_list_buttons_R10F1",list_input:"TheAccount_list_input_tSgjs",list_fields:"TheAccount_list_fields_fMupG"},h=t(3744);const b={};b["$style"]=f;const y=(0,h.Z)(w,[["render",_],["__cssModules",b]]);var C=y,k=(0,r.aZ)({__name:"AccountView",setup:function(e,s){var t=s.expose;t();var r=(0,o.o)(),l={store:r,useStore:o.o,TheError:a["default"],TheAccount:C};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}});const $=(0,h.Z)(k,[["render",l]]);var A=$}}]);
//# sourceMappingURL=727.96e8ef09.js.map