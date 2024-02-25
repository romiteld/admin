/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.1.1
*/
var Iconify=function(t){"use strict";const e=Object.freeze({left:0,top:0,width:16,height:16}),n=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),o=Object.freeze({...e,...n}),r=Object.freeze({...o,body:"",hidden:!1});function i(t,e){const o=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const i in r)i in n?i in t&&!(i in o)&&(o[i]=n[i]):i in e?o[i]=e[i]:i in t&&(o[i]=t[i]);return o}function c(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let c={};function s(t){c=i(o[t]||r[t],c)}return s(e),n.forEach(s),i(t,c)}function s(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||Object.create(null),r=Object.create(null);return(e||Object.keys(n).concat(Object.keys(o))).forEach((function t(e){if(n[e])return r[e]=[];if(!(e in r)){r[e]=null;const n=o[e]&&o[e].parent,i=n&&t(n);i&&(r[e]=[n].concat(i))}return r[e]})),r}(t);for(const r in o){const i=o[r];i&&(e(r,c(t,r,i)),n.push(r))}return n}const a=/^[a-z0-9]+(-[a-z0-9]+)*$/,u=(t,e,n,o="")=>{const r=t.split(":");if("@"===t.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const t=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:t};return e&&!f(i)?null:i}const i=r[0],c=i.split("-");if(c.length>1){const t={provider:o,prefix:c.shift(),name:c.join("-")};return e&&!f(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:i};return e&&!f(t,n)?null:t}return null},f=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(a)||!(e&&""===t.prefix||t.prefix.match(a))||!t.name.match(a)),l={provider:"",aliases:{},not_found:{},...e};function d(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function p(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!d(t,l))return null;const n=e.icons;for(const t in n){const e=n[t];if(!t.match(a)||"string"!=typeof e.body||!d(e,r))return null}const o=e.aliases||Object.create(null);for(const t in o){const e=o[t],i=e.parent;if(!t.match(a)||"string"!=typeof i||!n[i]&&!o[i]||!d(e,r))return null}return e}const h=Object.create(null);function g(t,e){const n=h[t]||(h[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function m(t,e){return p(e)?s(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}function y(t,e){let n=[];return("string"==typeof t?[t]:Object.keys(h)).forEach((t=>{("string"==typeof t&&"string"==typeof e?[e]:Object.keys(h[t]||{})).forEach((e=>{const o=g(t,e);n=n.concat(Object.keys(o.icons).map((n=>(""!==t?"@"+t+":":"")+e+":"+n)))}))})),n}let b=!1;function v(t){const e="string"==typeof t?u(t,!0,b):t;if(e){const t=g(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function x(t,e){const n=u(t,!0,b);if(!n)return!1;return function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(t){}return!1}(g(n.provider,n.prefix),n.name,e)}function w(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),b&&!e&&!t.prefix){let e=!1;return p(t)&&(t.prefix="",s(t,((t,n)=>{n&&x(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!f({provider:e,prefix:n,name:"a"}))return!1;return!!m(g(e,n),t)}function S(t){return!!v(t)}function j(t){const e=v(t);return e?{...o,...e}:null}const E=Object.freeze({width:null,height:null}),I=Object.freeze({...E,...n}),O=/(-?[0-9.]*[0-9]+[0-9.]*)/g,k=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function C(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(O);if(null===o||!o.length)return t;const r=[];let i=o.shift(),c=k.test(i);for(;;){if(c){const t=parseFloat(i);isNaN(t)?r.push(i):r.push(Math.ceil(t*e*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");c=!c}}const M=t=>"unset"===t||"undefined"===t||"none"===t;function T(t,e){const n={...o,...t},r={...I,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let c=n.body;[n,r].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let r,s=t.rotate;switch(n?o?s+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):o&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:r=i.height/2+i.top,e.unshift("rotate(90 "+r.toString()+" "+r.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:r=i.width/2+i.left,e.unshift("rotate(-90 "+r.toString()+" "+r.toString()+")")}s%2==1&&(i.left!==i.top&&(r=i.left,i.left=i.top,i.top=r),i.width!==i.height&&(r=i.width,i.width=i.height,i.height=r)),e.length&&(c='<g transform="'+e.join(" ")+'">'+c+"</g>")}));const s=r.width,a=r.height,u=i.width,f=i.height;let l,d;null===s?(d=null===a?"1em":"auto"===a?f:a,l=C(d,u/f)):(l="auto"===s?u:s,d=null===a?C(l,f/u):"auto"===a?f:a);const p={},h=(t,e)=>{M(e)||(p[t]=e.toString())};return h("width",l),h("height",d),p.viewBox=i.left.toString()+" "+i.top.toString()+" "+u.toString()+" "+f.toString(),{attributes:p,body:c}}const L=/\sid="(\S+)"/g,A="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let F=0;function P(t,e=A){const n=[];let o;for(;o=L.exec(t);)n.push(o[1]);if(!n.length)return t;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(F++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),t=t.replace(new RegExp(r,"g"),"")}const N={local:!0,session:!0},z={local:new Set,session:new Set};let _=!1;const D="iconify2",R="iconify",$=R+"-count",q=R+"-version",H=36e5,U=168;function V(t,e){try{return t.getItem(e)}catch(t){}}function Q(t,e,n){try{return t.setItem(e,n),!0}catch(t){}}function G(t,e){try{t.removeItem(e)}catch(t){}}function J(t,e){return Q(t,$,e.toString())}function B(t){return parseInt(V(t,$))||0}let K="undefined"==typeof window?{}:window;function W(t){const e=t+"Storage";try{if(K&&K[e]&&"number"==typeof K[e].length)return K[e]}catch(t){}N[t]=!1}function X(t,e){const n=W(t);if(!n)return;const o=V(n,q);if(o!==D){if(o){const t=B(n);for(let e=0;e<t;e++)G(n,R+e.toString())}return Q(n,q,D),void J(n,0)}const r=Math.floor(Date.now()/H)-U,i=t=>{const o=R+t.toString(),i=V(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(t){}G(n,o)}};let c=B(n);for(let e=c-1;e>=0;e--)i(e)||(e===c-1?(c--,J(n,c)):z[t].add(e))}function Y(){if(!_){_=!0;for(const t in N)X(t,(t=>{const e=t.data,n=g(t.provider,e.prefix);if(!m(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function Z(t,e){switch(t){case"local":case"session":N[t]=e;break;case"all":for(const t in N)N[t]=e}}const tt=Object.create(null);function et(t,e){tt[t]=e}function nt(t){return tt[t]||tt[""]}function ot(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const rt=Object.create(null),it=["https://api.simplesvg.com","https://api.unisvg.com"],ct=[];for(;it.length>0;)1===it.length||Math.random()>.5?ct.push(it.shift()):ct.push(it.pop());function st(t,e){const n=ot(e);return null!==n&&(rt[t]=n,!0)}function at(t){return rt[t]}rt[""]=ot({resources:["https://api.iconify.design"].concat(ct)});let ut=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(t){}})();const ft={prepare:(t,e,n)=>{const o=[],r=function(t,e){const n=at(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const r=e+".json?icons=";o=n.maxURL-t-n.path.length-r.length}else o=0;return o}(t,e),i="icons";let c={type:i,provider:t,prefix:e,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=r&&a>0&&(o.push(c),c={type:i,provider:t,prefix:e,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(t,e,n)=>{if(!ut)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=at(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let r=503;ut(t+o).then((t=>{const e=t.status;if(200===e)return r=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",r)}))})).catch((()=>{n("next",r)}))}};function lt(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let dt=0;var pt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ht(t,e,n,o){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(i).concat(t.resources.slice(0,i));const s=Date.now();let a,u="pending",f=0,l=null,d=[],p=[];function h(){l&&(clearTimeout(l),l=null)}function g(){"pending"===u&&(u="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function y(){u="failed",p.forEach((t=>{t(void 0,a)}))}function b(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==u)return;h();const o=c.shift();if(void 0===o)return d.length?void(l=setTimeout((()=>{h(),"pending"===u&&(b(),y())}),t.timeout)):void y();const r={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const r="success"!==n;switch(d=d.filter((t=>t!==e)),u){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void y();if(r)return a=o,void(d.length||(c.length?v():y()));if(h(),b(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}u="completed",p.forEach((t=>{t(o)}))}(r,e,n)}};d.push(r),f++,l=setTimeout(v,t.rotate),n(o,e,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:s,payload:e,status:u,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function gt(t){const e={...pt,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}const r={query:function(t,r,i){const c=ht(e,t,r,((t,e)=>{o(),i&&i(t,e)}));return n.push(c),c},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o};return r}function mt(){}const yt=Object.create(null);function bt(t,e,n){let o,r;if("string"==typeof t){const e=nt(t);if(!e)return n(void 0,424),mt;r=e.send;const i=function(t){if(!yt[t]){const e=at(t);if(!e)return;const n={config:e,redundancy:gt(e)};yt[t]=n}return yt[t]}(t);i&&(o=i.redundancy)}else{const e=ot(t);if(e){o=gt(e);const n=nt(t.resources?t.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(e,r,n)().abort:(n(void 0,424),mt)}function vt(t,e){function n(n){let o;if(!N[n]||!(o=W(n)))return;const r=z[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=B(o),!J(o,i+1))return;const c={cached:Math.floor(Date.now()/H),provider:t.provider,data:e};return Q(o,R+i.toString(),JSON.stringify(c))}_||Y(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const n in N)X(n,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function xt(){}function wt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,r=t.prefix;e.forEach((e=>{const i=e.icons,c=i.pending.length;i.pending=i.pending.filter((e=>{if(e.prefix!==r)return!0;const c=e.name;if(t.icons[c])i.loaded.push({provider:o,prefix:r,name:c});else{if(!t.missing.has(c))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:c})}return!1})),i.pending.length!==c&&(n||lt([t],e.id),e.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),e.abort))}))})))}(t)})))}const St=t=>{const e=g(t.provider,t.prefix).pendingIcons;return!(!e||!e.has(t.name))},jt=(t,e)=>{var n;const o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const r=t.provider,i=t.prefix,c=t.name,s=n[r]||(n[r]=Object.create(null)),a=s[i]||(s[i]=g(r,i));let u;u=c in a.icons?e.loaded:""===i||a.missing.has(c)?e.missing:e.pending;const f={provider:r,prefix:i,name:c};u.push(f)})),e}(function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const r="string"==typeof t?u(t,e,n):t;r&&o.push(r)})),o}(t,!0,("boolean"==typeof n&&(b=n),b)));if(!o.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(o.loaded,o.missing,o.pending,xt)})),()=>{t=!1}}const r=Object.create(null),i=[];let c,s;return o.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===c)return;c=e,s=n,i.push(g(e,n));const o=r[e]||(r[e]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,i=g(e,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(o)||(c.add(o),r[e][n].push(o))})),i.forEach((t=>{const{provider:e,prefix:n}=t;r[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let r;delete t.iconsToLoad,o&&(r=nt(e))&&r.prepare(e,n,o).forEach((n=>{bt(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=m(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),vt(t,e)}catch(t){console.error(t)}wt(t)}))}))})))}(t,r[e][n])})),e?function(t,e,n){const o=dt++,r=lt.bind(null,n,o);if(!e.pending.length)return r;const i={id:o,icons:e,callback:t,abort:r};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(i)})),r}(e,o,i):xt},Et=t=>new Promise(((e,n)=>{const r="string"==typeof t?u(t,!0):t;r?jt([r||t],(i=>{if(i.length&&r){const t=v(r);if(t)return void e({...o,...t})}n(t)})):n(t)}));function It(t,e){const n={...t};for(const t in e){const o=e[t],r=typeof o;t in E?(null===o||o&&("string"===r||"number"===r))&&(n[t]=o):r===typeof n[t]&&(n[t]="rotate"===t?o%4:o)}return n}const Ot={...I,inline:!1},kt="iconify",Ct="iconify-inline",Mt="iconifyData"+Date.now();let Tt=[];function Lt(t){for(let e=0;e<Tt.length;e++){const n=Tt[e];if(("function"==typeof n.node?n.node():n.node)===t)return n}}function At(t,e=!1){let n=Lt(t);return n?(n.temporary&&(n.temporary=e),n):(n={node:t,temporary:e},Tt.push(n),n)}function Ft(){return Tt}let Pt=null;const Nt={childList:!0,subtree:!0,attributes:!0};function zt(t){if(!t.observer)return;const e=t.observer;e.pendingScan||(e.pendingScan=setTimeout((()=>{delete e.pendingScan,Pt&&Pt(t)})))}function _t(t,e){if(!t.observer)return;const n=t.observer;if(!n.pendingScan)for(let o=0;o<e.length;o++){const r=e[o];if(r.addedNodes&&r.addedNodes.length>0||"attributes"===r.type&&void 0!==r.target[Mt])return void(n.paused||zt(t))}}function Dt(t,e){t.observer.instance.observe(e,Nt)}function Rt(t){let e=t.observer;if(e&&e.instance)return;const n="function"==typeof t.node?t.node():t.node;n&&window&&(e||(e={paused:0},t.observer=e),e.instance=new window.MutationObserver(_t.bind(null,t)),Dt(t,n),e.paused||zt(t))}function $t(){Ft().forEach(Rt)}function qt(t){if(!t.observer)return;const e=t.observer;e.pendingScan&&(clearTimeout(e.pendingScan),delete e.pendingScan),e.instance&&(e.instance.disconnect(),delete e.instance)}function Ht(t){const e=null!==Pt;Pt!==t&&(Pt=t,e&&Ft().forEach(qt)),e?$t():function(t){const e=document;e.readyState&&"loading"!==e.readyState?t():e.addEventListener("DOMContentLoaded",t)}($t)}function Ut(t){(t?[t]:Ft()).forEach((t=>{if(!t.observer)return void(t.observer={paused:1});const e=t.observer;if(e.paused++,e.paused>1||!e.instance)return;e.instance.disconnect()}))}function Vt(t){if(t){const e=Lt(t);e&&Ut(e)}else Ut()}function Qt(t){(t?[t]:Ft()).forEach((t=>{if(!t.observer)return void Rt(t);const e=t.observer;if(e.paused&&(e.paused--,!e.paused)){const n="function"==typeof t.node?t.node():t.node;if(!n)return;e.instance?Dt(t,n):Rt(t)}}))}function Gt(t){if(t){const e=Lt(t);e&&Qt(e)}else Qt()}function Jt(t,e=!1){const n=At(t,e);return Rt(n),n}function Bt(t){const e=Lt(t);e&&(qt(e),function(t){Tt=Tt.filter((e=>t!==e&&t!==("function"==typeof e.node?e.node():e.node)))}(t))}const Kt=/[\s,]+/;const Wt=["width","height"],Xt=["inline","hFlip","vFlip"];function Yt(t){const e=t.getAttribute("data-icon"),n="string"==typeof e&&u(e,!0);if(!n)return null;const o={...Ot,inline:t.classList&&t.classList.contains(Ct)};Wt.forEach((e=>{const n=t.getAttribute("data-"+e);n&&(o[e]=n)}));const r=t.getAttribute("data-rotate");"string"==typeof r&&(o.rotate=function(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?o(r):0)}}return e}(r));const i=t.getAttribute("data-flip");"string"==typeof i&&function(t,e){e.split(Kt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}(o,i),Xt.forEach((e=>{const n="data-"+e,r=function(t,e){return t===e||"true"===t||""!==t&&"false"!==t&&null}(t.getAttribute(n),n);"boolean"==typeof r&&(o[e]=r)}));const c=t.getAttribute("data-mode");return{name:e,icon:n,customisations:o,mode:c}}const Zt="svg."+kt+", i."+kt+", span."+kt+", i."+Ct+", span."+Ct;function te(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const t in e)n+=" "+t+'="'+e[t]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}let ee;function ne(t){return void 0===ee&&function(){try{ee=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch(t){ee=null}}(),ee?ee.createHTML(t):t}function oe(t){const e=new Set(["iconify"]);return["provider","prefix"].forEach((n=>{t[n]&&e.add("iconify--"+t[n])})),e}function re(t,e,n,o){const r=t.classList;if(o){const t=o.classList;Array.from(t).forEach((t=>{r.add(t)}))}const i=[];return e.forEach((t=>{r.contains(t)?n.has(t)&&i.push(t):(r.add(t),i.push(t))})),n.forEach((t=>{e.has(t)||r.remove(t)})),i}function ie(t,e,n){const o=t.style;(n||[]).forEach((t=>{o.removeProperty(t)}));const r=[];for(const t in e)o.getPropertyValue(t)||(r.push(t),o.setProperty(t,e[t]));return r}function ce(t,e,n){let o;try{o=document.createElement("span")}catch(e){return t}const r=e.customisations,i=T(n,r),c=t[Mt],s=te(P(i.body),{"aria-hidden":"true",role:"img",...i.attributes});o.innerHTML=ne(s);const a=o.childNodes[0],u=t.attributes;for(let t=0;t<u.length;t++){const e=u.item(t),n=e.name;"class"===n||a.hasAttribute(n)||a.setAttribute(n,e.value)}const f=re(a,oe(e.icon),new Set(c&&c.addedClasses),t),l=ie(a,r.inline?{"vertical-align":"-0.125em"}:{},c&&c.addedStyles),d={...e,status:"loaded",addedClasses:f,addedStyles:l};return a[Mt]=d,t.parentNode&&t.parentNode.replaceChild(a,t),a}const se={display:"inline-block"},ae={"background-color":"currentColor"},ue={"background-color":"transparent"},fe={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},le={"-webkit-mask":ae,mask:ae,background:ue};for(const t in le){const e=le[t];for(const n in fe)e[t+"-"+n]=fe[n]}function de(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}let pe=!1;function he(){pe||(pe=!0,setTimeout((()=>{pe&&(pe=!1,ge())})))}function ge(t,e=!1){const n=Object.create(null);function r(t,e){const{provider:o,prefix:r,name:i}=t,c=g(o,r),s=c.icons[i];if(s)return{status:"loaded",icon:s};if(c.missing.has(i))return{status:"missing"};if(e&&!St(t)){const t=n[o]||(n[o]=Object.create(null));(t[r]||(t[r]=new Set)).add(i)}return{status:"loading"}}(t?[t]:Ft()).forEach((t=>{const n="function"==typeof t.node?t.node():t.node;if(!n||!n.querySelectorAll)return;let i=!1,c=!1;function s(e,n,r){if(c||(c=!0,Ut(t)),"SVG"!==e.tagName.toUpperCase()){const t=n.mode,i="mask"===t||"bg"!==t&&("style"===t?-1!==r.body.indexOf("currentColor"):null);if("boolean"==typeof i)return void function(t,e,n,o){const r=e.customisations,i=T(n,r),c=i.attributes,s=t[Mt],a=te(i.body,{...c,width:n.width+"",height:n.height+""}),u=re(t,oe(e.icon),new Set(s&&s.addedClasses)),f={"--svg":'url("'+(l=a,"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(l)+'")'),width:de(c.width),height:de(c.height),...se,...o?ae:ue};var l;r.inline&&(f["vertical-align"]="-0.125em");const d=ie(t,f,s&&s.addedStyles),p={...e,status:"loaded",addedClasses:u,addedStyles:d};t[Mt]=p}(e,n,{...o,...r},i)}ce(e,n,r)}(function(t){const e=[];return t.querySelectorAll(Zt).forEach((t=>{const n=t[Mt]||"svg"!==t.tagName.toLowerCase()?Yt(t):null;n&&e.push({node:t,props:n})})),e})(n).forEach((({node:t,props:e})=>{const n=t[Mt];if(!n){const{status:n,icon:o}=r(e.icon,!0);return o?void s(t,e,o):(i=i||"loading"===n,void(t[Mt]={...e,status:n}))}let o;if(function(t,e){if(t.name!==e.name||t.mode!==e.mode)return!0;const n=t.customisations,o=e.customisations;for(const t in Ot)if(n[t]!==o[t])return!0;return!1}(n,e)){if(o=r(e.icon,n.name!==e.name),!o.icon)return i=i||"loading"===o.status,void Object.assign(n,{...e,status:o.status})}else{if("loading"!==n.status)return;if(o=r(e.icon,!1),!o.icon)return void(n.status=o.status)}s(t,e,o.icon)})),t.temporary&&!i?Bt(n):e&&i?Jt(n,!0):c&&t.observer&&Qt(t)}));for(const t in n){const e=n[t];for(const n in e){const o=e[n];jt(Array.from(o).map((e=>({provider:t,prefix:n,name:e}))),he)}}}function me(t,e,n=!1){const o=v(t);if(!o)return null;const r=u(t),i=It(Ot,e||{}),c=ce(document.createElement("span"),{name:t,icon:r,customisations:i},o);return n?c.outerHTML:c}function ye(){return"3.1.1"}function be(t,e){return me(t,e,!1)}function ve(t,e){return me(t,e,!0)}function xe(t,e){const n=v(t);if(!n)return null;return T(n,It(Ot,e||{}))}function we(t){t?function(t){const e=Lt(t);e?ge(e):ge({node:t,temporary:!0},!0)}(t):ge()}if("undefined"!=typeof document&&"undefined"!=typeof window){!function(){if(document.documentElement)return At(document.documentElement);Tt.push({node:()=>document.documentElement})}();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!w(t))&&console.error(n)}catch(t){console.error(n)}}))}setTimeout((()=>{Ht(ge),ge()}))}function Se(t,e){Z(t,!1!==e)}function je(t){Z(t,!0)}if(et("",ft),"undefined"!=typeof document&&"undefined"!=typeof window){Y();const t=window;if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(const t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;st(t,o)||console.error(n)}catch(t){console.error(n)}}}}const Ee={getAPIConfig:at,setAPIModule:et,sendAPIQuery:bt,setFetch:function(t){ut=t},getFetch:function(){return ut},listAPIProviders:function(){return Object.keys(rt)}},Ie={_api:Ee,addAPIProvider:st,loadIcons:jt,loadIcon:Et,iconExists:S,getIcon:j,listIcons:y,addIcon:x,addCollection:w,replaceIDs:P,calculateSize:C,buildIcon:T,getVersion:ye,renderSVG:be,renderHTML:ve,renderIcon:xe,scan:we,observe:Jt,stopObserving:Bt,pauseObserver:Vt,resumeObserver:Gt,enableCache:Se,disableCache:je};return t._api=Ee,t.addAPIProvider=st,t.addCollection=w,t.addIcon=x,t.buildIcon=T,t.calculateSize=C,t.default=Ie,t.disableCache=je,t.enableCache=Se,t.getIcon=j,t.getVersion=ye,t.iconExists=S,t.listIcons=y,t.loadIcon=Et,t.loadIcons=jt,t.observe=Jt,t.pauseObserver=Vt,t.renderHTML=ve,t.renderIcon=xe,t.renderSVG=be,t.replaceIDs=P,t.resumeObserver=Gt,t.scan=we,t.stopObserving=Bt,Object.defineProperty(t,"__esModule",{value:!0}),t}({});if("object"==typeof exports)try{for(var key in exports.__esModule=!0,exports.default=Iconify,Iconify)exports[key]=Iconify[key]}catch(t){}try{void 0===self.Iconify&&(self.Iconify=Iconify)}catch(t){}