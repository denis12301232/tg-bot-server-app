System.register(["./@vue-legacy-f472956d.js"],(function(e,t){"use strict";var n,r,o,a,c,s,l,i,u,f,p;return{setters:[e=>{n=e.s,r=e.u,o=e.h,a=e.a,c=e.c,s=e.n,l=e.j,i=e.k,u=e.p,f=e.r,p=e.w}],execute:function(){e({a:function(e){const n=function(e){const{history:t,location:n}=window,r={value:q(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:A()+e+r;try{t[c?"replaceState":"pushState"](a,"",l),o.value=a}catch(i){console.error(i),n[c?"replace":"assign"](l)}}function c(e,n){a(e,h({},t.state,L(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}function s(e,n){const c=h({},o.value,t.state,{forward:e,scroll:$()});a(c.current,c,!0),a(e,h({},L(r.value,e,null),{position:c.position+1},n),!1),r.value=e}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:s,replace:c}}(e=function(e){if(!e)if(t){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(v,"")}(e)),r=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=q(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===l)return void(c=null);u=i?a.position-i.position:0}else r(s);o.forEach((e=>{e(n.value,l,{delta:u,type:R.pop,direction:u?u>0?P.forward:P.back:P.unknown})}))};function l(){c=n.value}function i(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:$()}),"")}function f(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:i,destroy:f}}(e,n.state,n.location,n.replace),o=h({location:"",base:e,go:function(e,t=!0){t||r.pauseListeners(),history.go(e)},createHref:C.bind(null,e)},n,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o},b:function(){return c(Pe)},c:function(e){const c=function(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){const o=!r,s=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Y(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);s.aliasOf=r&&r.record;const i=J(t,e),u=[s];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(h({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=Q(t,n,i),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!N(f)&&c(e.name)),s.children){const e=s.children;for(let t=0;t<e.length;t++)a(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{c(p)}:m}function c(e){if(M(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(c),t.alias.forEach(c))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(c),e.alias.forEach(c))}}function s(){return n}function l(e){let t=0;for(;t<n.length&&V(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ee(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!N(e)&&r.set(e.record.name,e)}function i(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw I(1,{location:e});c=o.record.name,s=h(X(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&X(e.params,o.keys.map((e=>e.name)))),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw I(1,{location:e,currentLocation:t});c=o.record.name,s=h({},t.params,e.params),a=o.stringify(s)}const l=[];let i=o;for(;i;)l.unshift(i.record),i=i.parent;return{name:c,path:a,params:s,matched:l,meta:Z(l)}}return t=J({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:i,removeRoute:c,getRoutes:s,getRecordMatcher:o}}(e.routes,e),l=e.parseQuery||be,i=e.stringifyQuery||we,u=e.history,f=Ce(),p=Ce(),v=Ce(),b=n(B);let k=B;t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const O=d.bind(null,(e=>""+e)),P=d.bind(null,ve),x=d.bind(null,ye);function C(e,t){if(t=h({},t||b.value),"string"==typeof e){const n=y(l,e,t.path),r=c.resolve({path:n.path},t),o=u.createHref(n.fullPath);return h(n,r,{params:x(r.params),hash:ye(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=h({},e,{path:y(l,e.path,t.path).path});else{const r=h({},e.params);for(const e in r)null==r[e]&&delete r[e];n=h({},e,{params:P(e.params)}),t.params=P(t.params)}const r=c.resolve(n,t),o=e.hash||"";r.params=O(x(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,h({},e,{hash:(s=o,me(s).replace(fe,"{").replace(he,"}").replace(ie,"^")),path:r.path}));var s;const f=u.createHref(a);return h({fullPath:a,hash:o,query:i===we?Ee(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function A(e){return"string"==typeof e?y(l,e,b.value.path):h({},e)}function q(e,t){if(k!==e)return I(8,{from:t,to:e})}function L(e){return _(e)}function G(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=A(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function _(e,t){const n=k=C(e),r=b.value,o=e.state,a=e.force,c=!0===e.replace,s=G(n);if(s)return _(h(A(s),{state:"object"==typeof s?h({},o,s.state):o,force:a,replace:c}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&w(t.matched[r],n.matched[o])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=I(16,{to:l,from:r}),ae(r,r,!0,!1)),(u?Promise.resolve(u):F(l,r)).catch((e=>D(e)?D(e,2)?e:oe(e):re(e,l,r))).then((e=>{if(e){if(D(e,2))return _(h({replace:c},A(e.to),{state:"object"==typeof e.to?h({},o,e.to.state):o,force:a}),t||l)}else e=W(l,r,!0,c,o);return T(l,r,e),e}))}function U(e,t){const n=q(e,t);return n?Promise.reject(n):Promise.resolve()}function F(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>w(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>w(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=je(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const c=U.bind(null,e,t);return n.push(c),Ge(n).then((()=>{n=[];for(const r of f.list())n.push($e(r,e,t));return n.push(c),Ge(n)})).then((()=>{n=je(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(c),Ge(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(g(r.beforeEnter))for(const o of r.beforeEnter)n.push($e(o,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(c),Ge(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=je(a,"beforeRouteEnter",e,t),n.push(c),Ge(n)))).then((()=>{n=[];for(const r of p.list())n.push($e(r,e,t));return n.push(c),Ge(n)})).catch((e=>D(e,8)?e:Promise.reject(e)))}function T(e,t,n){for(const r of v.list())r(e,t,n)}function W(e,n,r,o,a){const c=q(e,n);if(c)return c;const s=n===B,l=t?history.state:{};r&&(o||s?u.replace(e.fullPath,h({scroll:s&&l&&l.scroll},a)):u.push(e.fullPath,a)),b.value=e,ae(e,n,r,s),oe()}let z;function K(){z||(z=u.listen(((e,n,r)=>{if(!ue.listening)return;const o=C(e),a=G(o);if(a)return void _(h(a,{replace:!0}),o).catch(m);k=o;const c=b.value;var s,l;t&&(s=j(c.fullPath,r.delta),l=$(),S.set(s,l)),F(o,c).catch((e=>D(e,12)?e:D(e,2)?(_(e.to,o).then((e=>{D(e,20)&&!r.delta&&r.type===R.pop&&u.go(-1,!1)})).catch(m),Promise.reject()):(r.delta&&u.go(-r.delta,!1),re(e,o,c)))).then((e=>{(e=e||W(o,c,!1))&&(r.delta&&!D(e,8)?u.go(-r.delta,!1):r.type===R.pop&&D(e,20)&&u.go(-1,!1)),T(o,c,e)})).catch(m)})))}let H,te=Ce(),ne=Ce();function re(e,t,n){oe(e);const r=ne.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function oe(e){return H||(H=!e,K(),te.list().forEach((([t,n])=>e?n(e):t())),te.reset()),e}function ae(n,r,o,a){const{scrollBehavior:c}=e;if(!t||!c)return Promise.resolve();const l=!o&&function(e){const t=S.get(e);return S.delete(e),t}(j(n.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return s().then((()=>c(n,r,l))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>re(e,n,r)))}const ce=e=>u.go(e);let se;const le=new Set,ue={currentRoute:b,listening:!0,addRoute:function(e,t){let n,r;return M(e)?(n=c.getRecordMatcher(e),r=t):r=e,c.addRoute(r,n)},removeRoute:function(e){const t=c.getRecordMatcher(e);t&&c.removeRoute(t)},hasRoute:function(e){return!!c.getRecordMatcher(e)},getRoutes:function(){return c.getRoutes().map((e=>e.record))},resolve:C,options:e,push:L,replace:function(e){return L(h(A(e),{replace:!0}))},go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:f.add,beforeResolve:p.add,afterEach:v.add,onError:ne.add,isReady:function(){return H&&b.value!==B?Promise.resolve():new Promise(((e,t)=>{te.add([e,t])}))},install(e){e.component("RouterLink",Ae),e.component("RouterView",Be),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>r(b)}),t&&!se&&b.value===B&&(se=!0,L(u.location).catch((e=>{})));const n={};for(const t in B)n[t]=o((()=>b.value[t]));e.provide(Re,this),e.provide(Pe,a(n)),e.provide(xe,b);const c=e.unmount;le.add(e),e.unmount=function(){le.delete(e),le.size<1&&(k=B,z&&z(),z=null,b.value=B,se=!1,H=!1),c()}}};return ue},u:function(){return c(Re)}});
/*!
        * vue-router v4.1.6
        * (c) 2022 Eduardo San Martin Morote
        * @license MIT
        */
const t="undefined"!=typeof window,h=Object.assign;function d(e,t){const n={};for(const r in t){const o=t[r];n[r]=g(o)?o.map(e):e(o)}return n}const m=()=>{},g=Array.isArray,v=/\/$/;function y(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),c=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],"."!==a){if(".."!==a)break;c>1&&c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function b(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return g(e)?O(e,t):g(t)?O(t,e):e===t}function O(e,t){return g(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var R,P;!function(e){e.pop="pop",e.push="push"}(R||(R={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(P||(P={}));const x=/^[^#]+#/;function C(e,t){return e.replace(x,"#")+t}const $=()=>({left:window.pageXOffset,top:window.pageYOffset});function j(e,t){return(history.state?history.state.position-t:-1)+e}const S=new Map;let A=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),b(n,"")}return b(n,e)+r+o}function L(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?$():null}}function M(e){return"string"==typeof e||"symbol"==typeof e}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G=Symbol("");var _;function I(e,t){return h(new Error,{type:e,[G]:!0},t)}function D(e,t){return e instanceof Error&&G in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(_||(_={}));const U="[^/]+?",F={sensitive:!1,strict:!1,start:!0,end:!0},T=/[.+*?^${}()[\]/\\]/g;function W(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function V(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=W(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(z(r))return 1;if(z(o))return-1}return o.length-r.length}function z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const K={type:0,value:""},H=/[a-zA-Z0-9_]/;function Q(e,t,n){const r=function(e,t){const n=h({},F,t),r=[];let o=n.start?"^":"";const a=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let c=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(T,"\\$&"),c+=40;else if(1===r.type){const{value:e,repeatable:n,optional:i,regexp:u}=r;a.push({name:e,repeatable:n,optional:i});const f=u||U;if(f!==U){c+=10;try{new RegExp(`(${f})`)}catch(s){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+s.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=i&&l.length<2?`(?:/${p})`:"/"+p),i&&(p+="?"),o+=p,c+=20,i&&(c+=-8),n&&(c+=-20),".*"===f&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,l=a in t?t[a]:"";if(g(l)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=g(l)?l.join("/"):l;if(!i){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[K]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),i="")}function p(){i+=s}for(;l<e.length;)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(i&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:H.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),c(),o}(e.path),n),o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function X(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Y(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function N(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Z(e){return e.reduce(((e,t)=>h(e,t.meta)),{})}function J(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ee(e,t){return t.children.some((t=>t===e||ee(e,t)))}const te=/#/g,ne=/&/g,re=/\//g,oe=/=/g,ae=/\?/g,ce=/\+/g,se=/%5B/g,le=/%5D/g,ie=/%5E/g,ue=/%60/g,fe=/%7B/g,pe=/%7C/g,he=/%7D/g,de=/%20/g;function me(e){return encodeURI(""+e).replace(pe,"|").replace(se,"[").replace(le,"]")}function ge(e){return me(e).replace(ce,"%2B").replace(de,"+").replace(te,"%23").replace(ne,"%26").replace(ue,"`").replace(fe,"{").replace(he,"}").replace(ie,"^")}function ve(e){return null==e?"":function(e){return me(e).replace(te,"%23").replace(ae,"%3F")}(e).replace(re,"%2F")}function ye(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function be(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(ce," "),o=e.indexOf("="),a=ye(o<0?e:e.slice(0,o)),c=o<0?null:ye(e.slice(o+1));if(a in t){let e=t[a];g(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function we(e){let t="";for(let n in e){const r=e[n];(n=ge(n).replace(oe,"%3D"),null!=r)?(g(r)?r.map((e=>e&&ge(e))):[r&&ge(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function Ee(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=g(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const ke=Symbol(""),Oe=Symbol(""),Re=Symbol(""),Pe=Symbol(""),xe=Symbol("");function Ce(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function $e(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,s)=>{const l=e=>{var l;!1===e?s(I(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(l=e)||l&&"object"==typeof l?s(I(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},i=e.call(r&&r.instances[o],t,n,l);let u=Promise.resolve(i);e.length<3&&(u=u.then(l)),u.catch((e=>s(e)))}))}function je(e,t,n,r){const o=[];for(const c of e)for(const e in c.components){let s=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if("object"==typeof(a=s)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(s.__vccOpts||s)[t];a&&o.push($e(a,n,r,c,e))}else{let a=s();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`));const a=(s=o).__esModule||"Module"===s[Symbol.toStringTag]?o.default:o;var s;c.components[e]=a;const l=(a.__vccOpts||a)[t];return l&&$e(l,n,r,c,e)()}))))}}var a;return o}function Se(e){const t=c(Re),n=c(Pe),a=o((()=>t.resolve(r(e.to)))),s=o((()=>{const{matched:e}=a.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const c=o.findIndex(w.bind(null,r));if(c>-1)return c;const s=qe(e[t-2]);return t>1&&qe(r)===s&&o[o.length-1].path!==s?o.findIndex(w.bind(null,e[t-2])):c})),l=o((()=>s.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!g(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,a.value.params))),i=o((()=>s.value>-1&&s.value===n.matched.length-1&&E(n.params,a.value.params)));return{route:a,href:o((()=>a.value.href)),isActive:l,isExactActive:i,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?t[r(e.replace)?"replace":"push"](r(e.to)).catch(m):Promise.resolve()}}}const Ae=l({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Se,setup(e,{slots:t}){const n=a(Se(e)),{options:r}=c(Re),s=o((()=>({[Le(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Le(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:i("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}});function qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Le=(e,t,n)=>null!=e?e:null!=t?t:n;function Me(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Be=l({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=c(xe),s=o((()=>e.route||a.value)),l=c(Oe,0),d=o((()=>{let e=r(l);const{matched:t}=s.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),m=o((()=>s.value.matched[d.value]));u(Oe,o((()=>d.value+1))),u(ke,m),u(xe,s);const g=f();return p((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&w(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,o=e.name,a=m.value,c=a&&a.components[o];if(!c)return Me(n.default,{Component:c,route:r});const l=a.props[o],u=l?!0===l?r.params:"function"==typeof l?l(r):l:null,f=i(c,h({},u,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[o]=null)},ref:g}));return Me(n.default,{Component:f,route:r})||f}}});function Ge(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}}}}));