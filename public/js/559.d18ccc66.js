"use strict";(self["webpackChunktg_bot_client_app"]=self["webpackChunktg_bot_client_app"]||[]).push([[559,163],{4163:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(6252),s=t(3577),i=(0,n.Uk)("На главную");function o(e,r,t,o,a,u){var c=(0,n.up)("v-button");return(0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)(e.$style.error)},[(0,n._)("div",{class:(0,s.C_)(e.$style.error_info)},[(0,n._)("div",{class:(0,s.C_)(e.$style.error_code)},(0,s.zw)(t.code),3),(0,n._)("div",{class:(0,s.C_)(e.$style.error_text)},(0,s.zw)(t.message),3),(0,n.Wm)(c,{class:(0,s.C_)(e.$style.error_button),onClick:r[0]||(r[0]=function(r){return e.$router.push("/")})},{default:(0,n.w5)((function(){return[i]})),_:1},8,["class"])],2)],2)}var a=(0,n.aZ)({__name:"TheError",props:{code:{type:[String,Number],required:!0},message:{type:String,required:!0}},setup:function(e,r){var t=r.expose;t();var n={};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),u={error:"TheError_error_zWRpU",error_info:"TheError_error_info_bRaoI",error_code:"TheError_error_code_p9lzC",error_text:"TheError_error_text_fLubd",error_button:"TheError_error_button_wjtdJ"},c=t(3744);const l={};l["$style"]=u;const d=(0,c.Z)(a,[["render",o],["__cssModules",l]]);var f=d},9559:function(e,r,t){t.r(r),t.d(r,{default:function(){return A}});var n=t(6252),s={key:1},i={class:"content"};function o(e,r,t,o,a,u){return o.store.isAdmin?((0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(o["TheHeader"]),(0,n._)("div",i,[(0,n.Wm)(o["HumanInfo"])])])):((0,n.wg)(),(0,n.j4)(o["TheError"],{key:0,code:403,message:"Forbidden"}))}var a=t(5838),u=t(3577),c=t(9963),l=(0,n.Uk)("Найти"),d=(0,n.Uk)("Редактировать"),f=["data-id"];function _(e,r,t,s,i,o){var a=(0,n.up)("v-input-find"),_=(0,n.up)("v-button"),m=(0,n.up)("v-loading-wheel"),v=(0,n.up)("v-button-edit"),h=(0,n.up)("v-button-confirm"),p=(0,n.up)("v-button-cancel");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{class:(0,u.C_)(e.$style.container)},[(0,n._)("div",{class:(0,u.C_)(e.$style.search)},[(0,n._)("div",{class:(0,u.C_)(e.$style.search_title)},"Введите ФИО для поиска",2),(0,n.Wm)(a,{class:(0,u.C_)(e.$style.search_input),type:"text",placeholder:"ФИО",modelValue:s.infoStore.fio,"onUpdate:modelValue":r[0]||(r[0]=function(e){return s.infoStore.fio=e}),onKeyup:(0,c.D2)(s.infoStore.findHuman,["enter"])},null,8,["class","modelValue","onKeyup"]),(0,n.Wm)(_,{onClick:s.infoStore.findHuman},{default:(0,n.w5)((function(){return[l]})),_:1},8,["onClick"]),s.infoStore.isListLoading?((0,n.wg)(),(0,n.j4)(m,{key:0})):(0,n.kq)("",!0),(0,n._)("div",{class:(0,u.C_)(e.$style.search_error)},(0,u.zw)(s.infoStore.error),3)],2),s.infoStore.isEditable?(0,n.kq)("",!0):(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,u.C_)(e.$style.info)},[(0,n._)("div",{class:(0,u.C_)(e.$style.info_finded)},"Всего найдено: "+(0,u.zw)(s.infoStore.finded.length),3),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.infoStore.finded,(function(r,t){return(0,n.wg)(),(0,n.iD)("div",{class:(0,u.C_)(e.$style.info_item),key:r._id},[(0,n._)("div",{class:(0,u.C_)(e.$style.item_about)},[(0,n._)("div",{class:(0,u.C_)(e.$style.item_title)},"Найдено: "+(0,u.zw)(s.infoStore.currentQuery),3),(0,n.Wm)(v,{onClick:function(e){return s.setEditable(e,t,r._id)}},{default:(0,n.w5)((function(){return[d]})),_:2},1032,["onClick"])],2),(0,n._)("table",{class:(0,u.C_)(e.$style.info_table),"data-id":r._id},[(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.form,(function(e,r){return(0,n.wg)(),(0,n.iD)("tr",null,[(0,n._)("td",null,(0,u.zw)(s.Constants.assistance[r].display),1),(0,n._)("td",null,(0,u.zw)(s.useBeautifyValue(e)),1)])})),256))])],10,f)],2)})),128))],2)),[[c.F8,s.infoStore.finded.length]])],2),(0,n.wy)((0,n._)("div",{class:(0,u.C_)(e.$style.form)},[(0,n.Wm)(s["FormAssistance"],{form:s.assistance.form,"is-loading":s.assistance.isLoading,"success-message":s.assistance.successMessage,"error-message":s.assistance.errorMessage,submit:s.submit,title:"Редактировать"},{submit:(0,n.w5)((function(e){return[(0,n.Wm)(h,{type:"submit",disabled:!e.form.valid},null,8,["disabled"])]})),cancel:(0,n.w5)((function(){return[(0,n.Wm)(p,{onClick:s.setEditable})]})),_:1},8,["form","is-loading","success-message","error-message"])],2),[[c.F8,s.infoStore.isEditable]])],64)}var m=t(655),v=t(2262),h=t(6091),p=t(3497),b=t(8262),g=t(6442),y=(0,b.Q_)("info",{state:function(){return{fio:"",error:"",isListLoading:!1,isEditable:!1,finded:[],currentQuery:"",currentScrollY:0}},actions:{findHuman:function(){return(0,m.mG)(this,void 0,Promise,(function(){var e,r,t;return(0,m.Jh)(this,(function(n){switch(n.label){case 0:if(n.trys.push([0,2,3,4]),!this.fio)return[2];if(e=this.fio.trim().split(" "),3!==e.length)throw new Error("Введите ФИО через пробел!");return this.currentQuery=this.fio,this.isListLoading=!0,this.isEditable=!1,this.error="",[4,g.Z.findHuman(e[0],e[1],e[2])];case 1:return r=n.sent(),this.finded=r.data.humansFormList,this.finded.length||(this.error="Ничего не найдено по запросу ".concat(this.fio)),[3,4];case 2:return t=n.sent(),this.error=t.message,[3,4];case 3:return this.isListLoading=!1,[7];case 4:return[2]}}))}))}}});function w(e){return Array.isArray(e)?e.join(","):!0===e?"Да":!1===e?"Нет":e}var C=t(2416),S=t(370),H=t(2201),E=t(5707),I=(0,n.aZ)({__name:"HumanInfo",setup:function(e,r){var t=this,n=r.expose;n();var s=y(),i=(0,v.iH)(""),o=(0,v.qj)({form:(0,p.c)(h.Z.assistance),errorMessage:"",successMessage:"",isLoading:!1}),a=function(e,r,t){void 0!==r&&t?(s.currentScrollY=window.pageYOffset,s.isEditable=!s.isEditable,window.scrollTo(0,0),i.value=t,Object.keys(h.Z.assistance).forEach((function(e){o.form[e].value="phone"===e?s.finded[r].form[e].slice(4):s.finded[r].form[e]}))):(s.isEditable=!s.isEditable,window.scrollTo(0,s.currentScrollY))},u=function(){return(0,m.mG)(t,void 0,Promise,(function(){var e,r,t,n;return(0,m.Jh)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,3,4]),o.isLoading=!0,e=new E.Z(o.form),[4,g.Z.modifyAssistanceForm(e,i.value)];case 1:return s.sent(),o.successMessage="Сохранено!",setTimeout((function(){return o.successMessage=""}),3e3),[3,4];case 2:return r=s.sent(),console.log(r),o.errorMessage=null===(n=null===(t=null===r||void 0===r?void 0:r.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.message,setTimeout((function(){return o.errorMessage=""}),3e3),[3,4];case 3:return o.isLoading=!1,[7];case 4:return[2]}}))}))};(0,H.iS)((function(e,r,t){s.isEditable=!1,t()}));var c={infoStore:s,currentId:i,assistance:o,setEditable:a,submit:u,ref:v.iH,reactive:v.qj,Constants:h.Z,useForm:p.c,useInfoStore:y,useBeautifyValue:w,AssistanceFormValidators:C.R$,FormAssistance:S.Z,onBeforeRouteLeave:H.iS,AssistanseFormDto:E.Z,AssistanceService:g.Z};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),k={container:"HumanInfo_container_IO18v",search:"HumanInfo_search_gdZA2",search_title:"HumanInfo_search_title_YgvH0",search_input:"HumanInfo_search_input_ItC42",search_error:"HumanInfo_search_error_QnF_X",info:"HumanInfo_info__GZr1",info_finded:"HumanInfo_info_finded_Qwgux",info_item:"HumanInfo_info_item_wzl2I",item_about:"HumanInfo_item_about_sCFRM",info_table:"HumanInfo_info_table_wJUHz",form:"HumanInfo_form_Fqv2f"},$=t(3744);const Z={};Z["$style"]=k;const L=(0,$.Z)(I,[["render",_],["__cssModules",Z]]);var T=L,F=t(4163),z=t(2625),M=(0,n.aZ)({__name:"InfoView",setup:function(e,r){var t=r.expose;t();var n=(0,z.o)(),s={store:n,TheHeader:a.Z,HumanInfo:T,TheError:F["default"],useStore:z.o};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});const j=(0,$.Z)(M,[["render",o],["__scopeId","data-v-363d7e83"]]);var A=j}}]);
//# sourceMappingURL=559.d18ccc66.js.map