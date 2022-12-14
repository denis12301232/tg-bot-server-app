import{d as B,v as J,x as b,y as K,z as E,A as S,a as l,c as h,e,w as n,b as o,u as s,f as p,m as v,h as w,F,r as X,t as V,B as Y,D as Z,E as tt,G as et,i as st,j as u,H as ot,p as nt,k as it,_ as at,l as ut,T as lt,n as ct}from"./index.0dc29be9.js";import{u as dt}from"./humanStore.d3f62203.js";import _t from"./TheError.17067eea.js";const D=c=>(nt("data-v-2f91bca3"),c=c(),it(),c),rt=D(()=>o("h2",{style:{"text-align":"center"}},"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",-1)),mt={class:"buttons"},pt={class:"buttons_load"},ht={class:"buttons_load"},vt={class:"container"},ft=D(()=>o("h1",{class:"title",style:{"margin-bottom":"10px"}},"\u041F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",-1)),gt={style:{padding:"5px 0"}},bt={class:"list_number",style:{padding:"0 10px"}},wt={class:"list_buttons"},Lt={key:0,class:"loading"},kt={class:"observer"},xt=B({__name:"HumansList",setup(c){const d=st(),t=dt(),L=J(()=>t.list.page<t.list.total&&!x.value),f=b(!1),g=b(""),T=b([{value:"_id",title:"\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"},{value:"fio",title:"\u041F\u043E \u0444\u0430\u043C\u0438\u043B\u0438\u0438"}]);K(()=>{t.list.humansList.length||k()});const{fetchFunc:k,isLoading:x,error:A}=E({callback:I,alert:!1}),{fetchFunc:M,isLoading:$}=E({callback:N,successMessage:"\u0423\u0434\u0430\u043B\u0435\u043D\u043E"});async function I(){A.value="",t.list.page++;const i=await S.catchHumansList({limit:t.list.limit,page:t.list.page});if(t.list.total=Math.ceil(+i.headers["x-total-count"]/t.list.limit),t.list.humansList=[...t.list.humansList,...i.data.humansList],!t.list.humansList.length)throw new Error("\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442")}async function N(){await S.deleteHuman(g.value),_(),t.list.humansList=t.list.humansList.filter(i=>i._id!==g.value)}function _(i){f.value=!f.value,i&&(g.value=i)}async function W(i){t.info.finded=[],t.info.fio=i,await d.push("/info"),await t.findHuman(),window.scrollTo(0,0)}return(i,r)=>{const y=u("v-btn"),H=u("LoadingWheel"),z=u("ModalWindow"),G=u("v-select"),P=u("v-text-field"),C=u("v-icon"),Q=u("v-tooltip"),R=u("v-list-item-title"),U=u("v-list-item"),j=u("v-list"),O=ot("intersection");return l(),h(F,null,[e(z,{show:f.value,onHide:_},{default:n(()=>[rt,o("div",mt,[o("div",pt,[e(y,{class:"confirm",onClick:s(M)},{default:n(()=>[p("\u0414\u0430")]),_:1},8,["onClick"]),s($)?(l(),v(H,{key:0,class:"wheel"})):w("",!0)]),o("div",ht,[e(y,{class:"confirm",onClick:_},{default:n(()=>[p("\u041D\u0435\u0442")]),_:1})])])]),_:1},8,["show"]),o("div",vt,[ft,o("div",gt,[e(G,{label:"\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",items:T.value,modelValue:s(t).list.selectedSort,"onUpdate:modelValue":r[0]||(r[0]=a=>s(t).list.selectedSort=a),variant:"solo"},null,8,["items","modelValue"]),e(P,{label:"\u041F\u043E\u0438\u0441\u043A",modelValue:s(t).list.searchQuery,"onUpdate:modelValue":r[1]||(r[1]=a=>s(t).list.searchQuery=a),variant:"solo"},null,8,["modelValue"])]),s(t).sortedAndSearchedHumansList.length?(l(),v(j,{key:0,class:"list"},{default:n(()=>[e(tt,{name:"list"},{default:n(()=>[(l(!0),h(F,null,X(s(t).sortedAndSearchedHumansList,(a,q)=>(l(),v(U,{class:"list_item",key:a._id},{prepend:n(()=>[o("div",bt,V(q+1+"."),1)]),append:n(()=>[o("div",wt,[e(C,{class:"item_button",tag:"button",onClick:m=>W(a.fio),image:"images/info.png",width:"20px",height:"20px"},{default:n(()=>[p("mdi-magnify")]),_:2},1032,["onClick"]),e(C,{class:"item_button",tag:"button",onClick:m=>_(a._id),width:"20px",height:"20px"},{default:n(()=>[p("mdi-delete-forever")]),_:2},1032,["onClick"])])]),default:n(()=>[e(R,{class:"list_title",onClick:m=>i.$router.push(`/list/${a._id}`)},{default:n(()=>[e(Q,{text:a.fio,location:"bottom"},{activator:n(({props:m})=>[o("span",Y(Z(m)),V(a.fio),17)]),_:2},1032,["text"])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})):w("",!0)]),s(x)?(l(),h("div",Lt,[e(H)])):w("",!0),o("div",kt,[et(o("div",null,null,512),[[O,{f:s(k),canLoad:()=>s(L)}]])])],64)}}});const yt=at(xt,[["__scopeId","data-v-2f91bca3"]]),Ht={key:1},Ct={class:"content"},Vt=B({__name:"ListView",setup(c){const d=ut();return(t,L)=>s(d).isAdmin?(l(),h("div",Ht,[e(lt,{onShow:s(d).setMenuVisible,onTheme:s(d).setTheme},null,8,["onShow","onTheme"]),e(ct),o("div",Ct,[e(yt)])])):(l(),v(_t,{key:0,code:403,message:"Forbidden"}))}});export{Vt as default};
