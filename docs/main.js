(()=>{"use strict";var t,e,n,r,o,a,i,s,c,u,p,l,d,f,m={843:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(537),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"iframe{width:100%;display:block;border:0;height:100%;min-height:calc(100% + 57px);margin-top:-31px;margin-bottom:-26px}iframe.survey{min-height:calc(100% + 55px);margin-top:0;margin-bottom:-55px}.tierlist .tierlist,.changelog .changelog,.contributions .contributions,.squad-coins .squad-coins,.yonder-yacht .yonder-yacht,.training-camp .training-camp,.ascension-system .ascension-system,.troop-infos .troop-infos,.unit-effects .unit-effects,.market-history .market-history,.buildings .buildings,.community .community,.surveys .surveys{color:rgb(23 23 23/var(--tw-text-opacity));background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hidden.is-visible{display:block}","",{version:3,sources:["webpack://./scss/application.scss"],names:[],mappings:"AAAA,OAAO,UAAU,CAAC,aAAa,CAAC,QAAQ,CAAC,WAAW,CAAC,4BAA4B,CAAC,gBAAgB,CAAC,mBAAmB,CAAC,cAAc,4BAA4B,CAAC,YAAY,CAAC,mBAAmB,CAAC,oVAAoV,0CAA0C,CAAC,sDAAsD,CAAC,mBAAmB,aAAa",sourcesContent:["iframe{width:100%;display:block;border:0;height:100%;min-height:calc(100% + 57px);margin-top:-31px;margin-bottom:-26px}iframe.survey{min-height:calc(100% + 55px);margin-top:0;margin-bottom:-55px}.tierlist .tierlist,.changelog .changelog,.contributions .contributions,.squad-coins .squad-coins,.yonder-yacht .yonder-yacht,.training-camp .training-camp,.ascension-system .ascension-system,.troop-infos .troop-infos,.unit-effects .unit-effects,.market-history .market-history,.buildings .buildings,.community .community,.surveys .surveys{color:rgb(23 23 23/var(--tw-text-opacity));background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hidden.is-visible{display:block}"],sourceRoot:""}]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var p=[].concat(t[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),u=0;u<a.length;u++){var p=n(a[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},A={};function y(t){var e=A[t];if(void 0!==e)return e.exports;var n=A[t]={id:t,exports:{}};return m[t](n,n.exports,y),n.exports}y.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return y.d(e,{a:e}),e},y.d=(t,e)=>{for(var n in e)y.o(e,n)&&!y.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},y.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=y(379),e=y.n(t),n=y(795),r=y.n(n),o=y(569),a=y.n(o),i=y(565),s=y.n(i),c=y(216),u=y.n(c),p=y(589),l=y.n(p),d=y(843),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();