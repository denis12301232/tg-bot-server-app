"use strict";(self["webpackChunktg_bot_client_app"]=self["webpackChunktg_bot_client_app"]||[]).push([[391],{5391:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var i=n(6252);function s(e,t,n,s,r,u){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s["TheHeader"]),(0,i.Wm)(s["HumansList"])],64)}var r=n(6953),u=n(3577),a=function(e){return(0,i.dD)("data-v-556fb7c2"),e=e(),(0,i.Cn)(),e},l=a((function(){return(0,i._)("div",{class:"title"},"Вы уверены?",-1)})),o={class:"buttons"},c={class:"buttons_load"},d=(0,i.Uk)("Да"),v={class:"buttons_load"},_=(0,i.Uk)("Нет"),f={class:"container"},m=a((function(){return(0,i._)("div",{class:"title"},"Полный список",-1)})),h={key:0,class:"error"},w={class:"list_item"},p={class:"item_number"},b={class:"item_name"},H={class:"loading"},k={class:"observer"};function g(e,t,n,s,r,a){var g=(0,i.up)("v-button"),L=(0,i.up)("v-loading-wheel"),S=(0,i.up)("v-modal"),y=(0,i.up)("v-button-delete"),C=(0,i.Q2)("intersection");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(S,{show:s.isModalVisible,onHide:s.showModal},{default:(0,i.w5)((function(){return[l,(0,i._)("div",o,[(0,i._)("div",c,[(0,i.Wm)(g,{class:"confirm",onClick:s.deleteHuman},{default:(0,i.w5)((function(){return[d]})),_:1}),s.isLoading?((0,i.wg)(),(0,i.j4)(L,{key:0,class:"wheel"})):(0,i.kq)("",!0)]),(0,i._)("div",v,[(0,i.Wm)(g,{class:"confirm",onClick:s.showModal},{default:(0,i.w5)((function(){return[_]})),_:1})])])]})),_:1},8,["show"]),(0,i._)("div",f,[m,s.listStore.error?((0,i.wg)(),(0,i.iD)("div",h,(0,u.zw)(s.listStore.error),1)):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.listStore.humansList,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{class:"list",key:e._id},[(0,i._)("div",w,[(0,i._)("div",p,[(0,i._)("div",null,(0,u.zw)(t+1)+".",1)]),(0,i._)("div",b,(0,u.zw)(e.fio),1),(0,i.Wm)(y,{class:"item_button",onClick:function(t){return s.showModal(t,e._id)}},null,8,["onClick"])])])})),128))]),(0,i._)("div",H,[s.listStore.isLoading?((0,i.wg)(),(0,i.j4)(L,{key:0})):(0,i.kq)("",!0)]),(0,i._)("div",k,[(0,i.wy)((0,i._)("div",null,null,512),[[C,{f:s.listStore.catchHumansList}]])])],64)}var L=n(655),S=n(2262),y=n(3517),C=n(6442),M=(0,i.aZ)({__name:"HumansList",setup:function(e,t){var n=this,s=t.expose;s();var r=(0,y.a)(),u=(0,S.iH)(!1),a=(0,S.iH)(""),l=(0,S.iH)(!1);(0,i.bv)((function(){return(0,L.mG)(n,void 0,Promise,(function(){return(0,L.Jh)(this,(function(e){return r.humansList.length||r.catchHumansList(),[2]}))}))}));var o=function(e,t){u.value=!u.value,e&&t&&(a.value=t)},c=function(){return(0,L.mG)(n,void 0,Promise,(function(){var e,t,n;return(0,L.Jh)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,3,4]),l.value=!0,[4,C.Z.deleteHuman(a.value)];case 1:return i.sent(),r.humansList=r.humansList.filter((function(e){return e._id!==a.value})),[3,4];case 2:return e=i.sent(),r.error=null===(n=null===(t=null===e||void 0===e?void 0:e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.message,[3,4];case 3:return l.value=!1,o(),[7];case 4:return[2]}}))}))},d={listStore:r,isModalVisible:u,currentId:a,isLoading:l,showModal:o,deleteHuman:c,onMounted:i.bv,ref:S.iH,useListStore:y.a,AssistanceService:C.Z};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),Z=n(3744);const D=(0,Z.Z)(M,[["render",g],["__scopeId","data-v-556fb7c2"]]);var W=D,j=(0,i.aZ)({__name:"ListView",setup:function(e,t){var n=t.expose;n();var i={TheHeader:r.Z,HumansList:W};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});const P=(0,Z.Z)(j,[["render",s]]);var q=P}}]);
//# sourceMappingURL=391.47d34134.js.map