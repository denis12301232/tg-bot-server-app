"use strict";(self["webpackChunktg_bot_client_app"]=self["webpackChunktg_bot_client_app"]||[]).push([[727],{9727:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var i=n(6252);function u(e,t,n,u,a,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u["TheHeader"]),(0,i.Wm)(u["HumansList"])],64)}var a=n(75),r=n(3577),s=function(e){return(0,i.dD)("data-v-0782df2a"),e=e(),(0,i.Cn)(),e},l=s((function(){return(0,i._)("div",{class:"title"},"Вы уверены?",-1)})),o={class:"buttons"},c={class:"buttons_load"},d=(0,i.Uk)("Да"),v={class:"buttons_load"},m=(0,i.Uk)("Нет"),f={class:"container"},_={class:"header"},p=s((function(){return(0,i._)("div",{class:"title"},"Список",-1)})),w={key:0,class:"error"},h={class:"list_item"},H={class:"item_number"},b={class:"item_name"},g={class:"loading"},S={class:"observer"};function L(e,t,n,u,a,s){var L=(0,i.up)("v-button"),k=(0,i.up)("v-loading-wheel"),y=(0,i.up)("v-modal"),C=(0,i.up)("v-button-delete"),D=(0,i.Q2)("intersection");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(y,{show:u.isModalVisible,onHide:u.showModal},{default:(0,i.w5)((function(){return[l,(0,i._)("div",o,[(0,i._)("div",c,[(0,i.Wm)(L,{class:"confirm",onClick:u.deleteHuman},{default:(0,i.w5)((function(){return[d]})),_:1}),u.isLoading?((0,i.wg)(),(0,i.j4)(k,{key:0,class:"wheel"})):(0,i.kq)("",!0)]),(0,i._)("div",v,[(0,i.Wm)(L,{class:"confirm",onClick:u.showModal},{default:(0,i.w5)((function(){return[m]})),_:1})])])]})),_:1},8,["show"]),(0,i._)("div",f,[(0,i._)("div",_,[p,(0,i.Wm)(u["HumansListSelect"],{modelValue:u.selectedSort,"onUpdate:modelValue":t[0]||(t[0]=function(e){return u.selectedSort=e}),options:u.sortOptions},null,8,["modelValue","options"])]),u.listStore.error?((0,i.wg)(),(0,i.iD)("div",w,(0,r.zw)(u.listStore.error),1)):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.sortedHumansList,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{class:"list",key:e._id},[(0,i._)("div",h,[(0,i._)("div",H,[(0,i._)("div",null,(0,r.zw)(t+1)+".",1)]),(0,i._)("div",b,(0,r.zw)(e.fio),1),(0,i.Wm)(C,{class:"item_button",onClick:function(t){return u.showModal(t,e._id)}},null,8,["onClick"])])])})),128))]),(0,i._)("div",g,[u.listStore.isLoading?((0,i.wg)(),(0,i.j4)(k,{key:0})):(0,i.kq)("",!0)]),(0,i._)("div",S,[(0,i.wy)((0,i._)("div",null,null,512),[[D,{f:u.listStore.catchHumansList}]])])],64)}var k=n(655),y=n(2262),C=n(3517),D=n(6442),V=["value"],Z={value:"",disabled:""},M=["value"];function W(e,t,n,u,a,s){return(0,i.wg)(),(0,i.iD)("select",{class:"select",onChange:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),value:n.modelValue},[(0,i._)("option",Z,(0,r.zw)(n.title),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.options,(function(e){return(0,i.wg)(),(0,i.iD)("option",{key:e.value,value:e.value},(0,r.zw)(e.name),9,M)})),128))],40,V)}var j=(0,i.aZ)({__name:"HumansListSelect",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}},title:{type:String,default:"Сортировать"}},setup:function(e,t){var n=t.expose;n();var i={};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),z=n(3744);const O=(0,z.Z)(j,[["render",W],["__scopeId","data-v-7a98fea7"]]);var P=O,Y=(0,i.aZ)({__name:"HumansList",setup:function(e,t){var n=this,u=t.expose;u();var a=(0,C.a)(),r=(0,y.iH)(!1),s=(0,y.iH)(""),l=(0,y.iH)(!1),o=(0,y.iH)(""),c=(0,y.iH)([{value:"_id",name:"По умолчанию"},{value:"fio",name:"По фамилии"}]);(0,i.bv)((function(){return(0,k.mG)(n,void 0,Promise,(function(){return(0,k.Jh)(this,(function(e){return a.humansList.length||a.catchHumansList(),[2]}))}))}));var d=(0,i.Fl)((function(){return(0,k.ev)([],a.humansList,!0).sort((function(e,t){var n;return null===(n=e[o.value])||void 0===n?void 0:n.localeCompare(t[o.value])}))})),v=function(e,t){r.value=!r.value,e&&t&&(s.value=t)},m=function(){return(0,k.mG)(n,void 0,Promise,(function(){var e,t,n;return(0,k.Jh)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,3,4]),l.value=!0,[4,D.Z.deleteHuman(s.value)];case 1:return i.sent(),a.humansList=a.humansList.filter((function(e){return e._id!==s.value})),[3,4];case 2:return e=i.sent(),a.error=null===(n=null===(t=null===e||void 0===e?void 0:e.response)||void 0===t?void 0:t.data)||void 0===n?void 0:n.message,[3,4];case 3:return l.value=!1,v(),[7];case 4:return[2]}}))}))},f={listStore:a,isModalVisible:r,currentId:s,isLoading:l,selectedSort:o,sortOptions:c,sortedHumansList:d,showModal:v,deleteHuman:m,onMounted:i.bv,ref:y.iH,computed:i.Fl,useListStore:C.a,AssistanceService:D.Z,HumansListSelect:P};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});const q=(0,z.Z)(Y,[["render",L],["__scopeId","data-v-0782df2a"]]);var x=q,I=(0,i.aZ)({__name:"ListView",setup:function(e,t){var n=t.expose;n();var i={TheHeader:a.Z,HumansList:x};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});const U=(0,z.Z)(I,[["render",u]]);var A=U}}]);
//# sourceMappingURL=727.49c48cfa.js.map