"use strict";(self["webpackChunktg_bot_client_app"]=self["webpackChunktg_bot_client_app"]||[]).push([[376,163],{899:function(e,r,t){t.d(r,{V:function(){return o}});var n=t(655),s=t(8262),i=t(6442),o=(0,s.Q_)("info",{state:function(){return{fio:"",error:"",isListLoading:!1,isEditable:!1,finded:[],currentQuery:"",currentScrollY:0}},actions:{findHuman:function(){return(0,n.mG)(this,void 0,Promise,(function(){var e,r,t;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:if(n.trys.push([0,2,3,4]),!this.fio)return[2];if(e=this.fio.trim().split(" "),3!==e.length)throw new Error("Введите ФИО через пробел!");return this.currentQuery=this.fio,this.isListLoading=!0,this.isEditable=!1,this.error="",[4,i.Z.findHuman(e[0],e[1],e[2])];case 1:return r=n.sent(),this.finded=r.data.humansFormList,this.finded.length||(this.error="Ничего не найдено по запросу ".concat(this.fio)),[3,4];case 2:return t=n.sent(),this.error=t.message,[3,4];case 3:return this.isListLoading=!1,[7];case 4:return[2]}}))}))}}})},4163:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(6252),s=t(3577),i=(0,n.Uk)("На главную");function o(e,r,t,o,a,u){var c=(0,n.up)("v-button");return(0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)(e.$style.error)},[(0,n._)("div",{class:(0,s.C_)(e.$style.error_info)},[(0,n._)("div",{class:(0,s.C_)(e.$style.error_code)},(0,s.zw)(t.code),3),(0,n._)("div",{class:(0,s.C_)(e.$style.error_text)},(0,s.zw)(t.message),3),(0,n.Wm)(c,{class:(0,s.C_)(e.$style.error_button),onClick:r[0]||(r[0]=function(r){return e.$router.push("/")})},{default:(0,n.w5)((function(){return[i]})),_:1},8,["class"])],2)],2)}var a=(0,n.aZ)({__name:"TheError",props:{code:{type:[String,Number],required:!0},message:{type:String,required:!0}},setup:function(e,r){var t=r.expose;t();var n={};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),u={error:"TheError_error_zWRpU",error_info:"TheError_error_info_bRaoI",error_code:"TheError_error_code_p9lzC",error_text:"TheError_error_text_fLubd",error_button:"TheError_error_button_wjtdJ"},c=t(3744);const l={};l["$style"]=u;const d=(0,c.Z)(a,[["render",o],["__cssModules",l]]);var f=d},2376:function(e,r,t){t.r(r),t.d(r,{default:function(){return M}});var n=t(6252),s={key:1},i={class:"content"};function o(e,r,t,o,a,u){return o.store.isAdmin?((0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(o["TheHeader"]),(0,n._)("div",i,[(0,n.Wm)(o["HumanInfo"])])])):((0,n.wg)(),(0,n.j4)(o["TheError"],{key:0,code:403,message:"Forbidden"}))}var a=t(1407),u=t(3577),c=t(9963),l=(0,n.Uk)("Найти"),d=(0,n.Uk)("Редактировать"),f=["data-id"];function _(e,r,t,s,i,o){var a=(0,n.up)("v-input-find"),_=(0,n.up)("v-button"),m=(0,n.up)("v-loading-wheel"),v=(0,n.up)("ButtonImage");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{class:(0,u.C_)(e.$style.container)},[(0,n._)("div",{class:(0,u.C_)(e.$style.search)},[(0,n._)("div",{class:(0,u.C_)(e.$style.search_title)},"Введите ФИО для поиска",2),(0,n.Wm)(a,{class:(0,u.C_)(e.$style.search_input),type:"text",placeholder:"ФИО",modelValue:s.infoStore.fio,"onUpdate:modelValue":r[0]||(r[0]=function(e){return s.infoStore.fio=e}),onKeyup:(0,c.D2)(s.infoStore.findHuman,["enter"])},null,8,["class","modelValue","onKeyup"]),(0,n.Wm)(_,{onClick:s.infoStore.findHuman},{default:(0,n.w5)((function(){return[l]})),_:1},8,["onClick"]),s.infoStore.isListLoading?((0,n.wg)(),(0,n.j4)(m,{key:0})):(0,n.kq)("",!0),(0,n._)("div",{class:(0,u.C_)(e.$style.search_error)},(0,u.zw)(s.infoStore.error),3)],2),s.infoStore.isEditable?(0,n.kq)("",!0):(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,u.C_)(e.$style.info)},[(0,n._)("div",{class:(0,u.C_)(e.$style.info_finded)},"Всего найдено: "+(0,u.zw)(s.infoStore.finded.length),3),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.infoStore.finded,(function(r,t){return(0,n.wg)(),(0,n.iD)("div",{class:(0,u.C_)(e.$style.info_item),key:r._id},[(0,n._)("div",{class:(0,u.C_)(e.$style.item_about)},[(0,n._)("div",{class:(0,u.C_)(e.$style.item_title)},"Найдено: "+(0,u.zw)(s.infoStore.currentQuery),3),(0,n.Wm)(v,{onClick:function(e){return s.setEditable(e,t,r._id)},image:"images/edit.png"},{default:(0,n.w5)((function(){return[d]})),_:2},1032,["onClick"])],2),(0,n._)("table",{class:(0,u.C_)(e.$style.info_table),"data-id":r._id},[(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.form,(function(e,r){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",null,(0,u.zw)(s.Constants.assistance[r].display),1),(0,n._)("td",null,(0,u.zw)(s.useBeautifyValue(e)),1)])})),256))])],10,f)],2)})),128))],2)),[[c.F8,s.infoStore.finded.length]])],2),(0,n.wy)((0,n._)("div",{class:(0,u.C_)(e.$style.form)},[(0,n.Wm)(s["FormAssistance"],{onSave:s.submit,form:s.assistance.form,"is-loading":s.assistance.isLoading,"success-message":s.assistance.successMessage,"error-message":s.assistance.errorMessage,title:"Редактировать"},{submit:(0,n.w5)((function(e){return[(0,n.Wm)(v,{type:"submit",disabled:!e.form.valid,image:"images/confirm.png",width:"27px",height:"27px","background-color":"var(--water-color)"},null,8,["disabled"])]})),cancel:(0,n.w5)((function(){return[(0,n.Wm)(v,{onClick:s.setEditable,image:"images/cancel.png",width:"27px",height:"27px","background-color":"var(--water-color)"})]})),_:1},8,["form","is-loading","success-message","error-message"])],2),[[c.F8,s.infoStore.isEditable]])],64)}var m=t(655),v=t(2262),g=t(6091),h=t(3497),p=t(899);function b(e){return Array.isArray(e)?e.join(","):!0===e?"Да":!1===e?"Нет":e}var y=t(2416),w=t(1810),C=t(2201),S=t(5707),H=t(6442),k=(0,n.aZ)({__name:"HumanInfo",setup:function(e,r){var t=r.expose;t();var n=(0,p.V)(),s=(0,v.iH)(""),i=(0,v.qj)({form:(0,h.c)(g.Z.assistance),errorMessage:"",successMessage:"",isLoading:!1});function o(e,r,t){void 0!==r&&t?(n.currentScrollY=window.pageYOffset,n.isEditable=!n.isEditable,window.scrollTo(0,0),s.value=t,Object.keys(g.Z.assistance).forEach((function(e){i.form[e].value="phone"===e?n.finded[r].form[e].slice(4):n.finded[r].form[e]}))):(n.isEditable=!n.isEditable,window.scrollTo(0,n.currentScrollY))}function a(){var e,r;return(0,m.mG)(this,void 0,Promise,(function(){var t,n;return(0,m.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,3,4]),i.isLoading=!0,t=new S.Z(i.form),[4,H.Z.modifyAssistanceForm(t,s.value)];case 1:return o.sent(),i.successMessage="Сохранено!",setTimeout((function(){return i.successMessage=""}),3e3),[3,4];case 2:return n=o.sent(),console.log(n),i.errorMessage=null===(r=null===(e=null===n||void 0===n?void 0:n.response)||void 0===e?void 0:e.data)||void 0===r?void 0:r.message,setTimeout((function(){return i.errorMessage=""}),3e3),[3,4];case 3:return i.isLoading=!1,[7];case 4:return[2]}}))}))}(0,C.iS)((function(e,r,t){n.isEditable=!1,t()}));var u={infoStore:n,currentId:s,assistance:i,setEditable:o,submit:a,ref:v.iH,reactive:v.qj,Constants:g.Z,useForm:h.c,useInfoStore:p.V,useBeautifyValue:b,AssistanceFormValidators:y.R$,FormAssistance:w.Z,onBeforeRouteLeave:C.iS,AssistanseFormDto:S.Z,AssistanceService:H.Z};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),I={container:"HumanInfo_container_IO18v",search:"HumanInfo_search_gdZA2",search_title:"HumanInfo_search_title_YgvH0",search_input:"HumanInfo_search_input_ItC42",search_error:"HumanInfo_search_error_QnF_X",info:"HumanInfo_info__GZr1",info_finded:"HumanInfo_info_finded_Qwgux",info_item:"HumanInfo_info_item_wzl2I",item_about:"HumanInfo_item_about_sCFRM",info_table:"HumanInfo_info_table_wJUHz",form:"HumanInfo_form_Fqv2f"},E=t(3744);const $={};$["$style"]=I;const Z=(0,E.Z)(k,[["render",_],["__cssModules",$]]);var L=Z,T=t(4163),F=t(2625),x=(0,n.aZ)({__name:"InfoView",setup:function(e,r){var t=r.expose;t();var n=(0,F.o)(),s={store:n,TheHeader:a.Z,HumanInfo:L,TheError:T["default"],useStore:F.o};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});const z=(0,E.Z)(x,[["render",o],["__scopeId","data-v-f5ac0f06"]]);var M=z}}]);
//# sourceMappingURL=376.7e3ac9f3.js.map