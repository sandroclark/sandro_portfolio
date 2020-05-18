(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var ca={l:!0},t={};try{t.__proto__=ca;q=t.l;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=p,da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var v=ea(this);function fa(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];g in c||(c[g]={});c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
fa("Promise",function(a){function b(e){this.b=0;this.g=void 0;this.a=[];var f=this.c();try{e(f.resolve,f.reject)}catch(h){f.reject(h)}}function c(){this.a=null}function d(e){return e instanceof b?e:new b(function(f){f(e)})}if(a)return a;c.prototype.b=function(e){if(null==this.a){this.a=[];var f=this;this.c(function(){f.g()})}this.a.push(e)};var g=v.setTimeout;c.prototype.c=function(e){g(e,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var e=this.a;this.a=[];for(var f=0;f<e.length;++f){var h=
e[f];e[f]=null;try{h()}catch(l){this.f(l)}}}this.a=null};c.prototype.f=function(e){this.c(function(){throw e;})};b.prototype.c=function(){function e(l){return function(n){h||(h=!0,l.call(f,n))}}var f=this,h=!1;return{resolve:e(this.s),reject:e(this.f)}};b.prototype.s=function(e){if(e===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.u(e);else{a:switch(typeof e){case "object":var f=null!=e;break a;case "function":f=!0;break a;default:f=!1}f?this.o(e):this.i(e)}};
b.prototype.o=function(e){var f=void 0;try{f=e.then}catch(h){this.f(h);return}"function"==typeof f?this.v(f,e):this.i(e)};b.prototype.f=function(e){this.j(2,e)};b.prototype.i=function(e){this.j(1,e)};b.prototype.j=function(e,f){if(0!=this.b)throw Error("Cannot settle("+e+", "+f+"): Promise already settled in state"+this.b);this.b=e;this.g=f;this.m()};b.prototype.m=function(){if(null!=this.a){for(var e=0;e<this.a.length;++e)k.b(this.a[e]);this.a=null}};var k=new c;b.prototype.u=function(e){var f=this.c();
e.h(f.resolve,f.reject)};b.prototype.v=function(e,f){var h=this.c();try{e.call(f,h.resolve,h.reject)}catch(l){h.reject(l)}};b.prototype.then=function(e,f){function h(r,x){return"function"==typeof r?function(I){try{l(r(I))}catch(J){n(J)}}:x}var l,n,K=new b(function(r,x){l=r;n=x});this.h(h(e,l),h(f,n));return K};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.h=function(e,f){function h(){switch(l.b){case 1:e(l.g);break;case 2:f(l.g);break;default:throw Error("Unexpected state: "+
l.b);}}var l=this;null==this.a?k.b(h):this.a.push(h)};b.resolve=d;b.reject=function(e){return new b(function(f,h){h(e)})};b.race=function(e){return new b(function(f,h){for(var l=m(e),n=l.next();!n.done;n=l.next())d(n.value).h(f,h)})};b.all=function(e){var f=m(e),h=f.next();return h.done?d([]):new b(function(l,n){function K(I){return function(J){r[I]=J;x--;0==x&&l(r)}}var r=[],x=0;do r.push(void 0),x++,d(h.value).h(K(r.length-1),n),h=f.next();while(!h.done)})};return b});var ha=this||self;
function w(a,b){a=a.split(".");var c=ha;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}function y(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};function z(){}var ia="function"==typeof Uint8Array;function A(a,b,c){a.c=null;b||(b=[]);a.j=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var d=a.a[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||ia&&d instanceof Uint8Array)){a.g=b-a.f;a.b=d;break a}}a.g=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.g?(d+=a.f,a.a[d]=a.a[d]||B):(C(a),a.b[d]=a.b[d]||B)}var B=[];function C(a){var b=a.g+a.f;a.a[b]||(a.b=a.a[b]={})}
function D(a,b){if(b<a.g){b+=a.f;var c=a.a[b];return c===B?a.a[b]=[]:c}if(a.b)return c=a.b[b],c===B?a.b[b]=[]:c}function E(a,b){a=D(a,b);return null==a?a:!!a}function ja(a){a=D(a,3);return null==a?0:a}function F(a,b){a=E(a,b);return null==a?!1:a}function G(a,b,c){b<a.g?a.a[b+a.f]=c:(C(a),a.b[b]=c)}function H(a,b,c,d){c!==d?G(a,b,c):b<a.g?a.a[b+a.f]=null:(C(a),delete a.b[b]);return a}function L(a,b,c){a.c||(a.c={});if(!a.c[c]){var d=D(a,c);d&&(a.c[c]=new b(d))}return a.c[c]}
function M(a,b,c){a.c||(a.c={});var d=c?c.a:c;a.c[b]=c;G(a,b,d)}function N(a,b){return new a(b?JSON.parse(b):null)}z.prototype.toString=function(){return this.a.toString()};function O(a){A(this,a,ka)}y(O,z);var ka=[17];function P(a){A(this,a,la)}y(P,z);var la=[8];function Q(a){A(this,a,ma)}y(Q,z);var ma=[27];function na(a){A(this,a,oa)}y(na,z);var oa=[1,2,3];function pa(a){A(this,a,null)}y(pa,z);function R(a){A(this,a,null)}y(R,z);function S(a){A(this,a,qa)}y(S,z);var qa=[13];function T(a){A(this,a,ra)}y(T,z);var ra=[8];function sa(a){A(this,a,null)}y(sa,z);function U(a,b){a=a.getElementsByTagName("META");for(var c=0;c<a.length;++c)if(a[c].getAttribute("name")===b)return a[c].getAttribute("content");return""};function ta(a,b){this.b=a;this.a=b;a=U(b,"namespace");if(!a){a="ns-"+Math.random().toString(36).substr(2,5);a:{for(var c=b.getElementsByTagName("META"),d=0;d<c.length;++d)if("namespace"===c[d].getAttribute("name")){c[d].setAttribute("content",a);break a}c=document.createElement("META");c.setAttribute("name","namespace");c.setAttribute("content",a);b.appendChild(c)}}}function V(a,b){b=new CustomEvent(b);a.a.dispatchEvent(b)}
function ua(a){a=m(a.a.querySelectorAll(".x-layout"));for(var b=a.next();!b.done;b=a.next())b.value.classList.add("mys-ad-shown")};function va(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function wa(a,b){this.c=a;this.f=b;this.b=va("SPAN");this.b.style.fontSize="6px";this.b.textContent="go";this.a=va("DIV");this.a.style.position="absolute";this.a.style.top="100%";this.a.style.left="100%";this.a.style.width="1px";this.a.style.height="0";this.a.style.overflow="hidden";this.a.style.visibility="hidden";this.a.appendChild(this.b)}
wa.prototype.wait=function(){var a=this;if(F(this.f,1))return null;V(this.c,"spanStart");this.c.a.appendChild(this.a);return xa(this)?null:new Promise(function(b){var c=setInterval(function(){xa(a)&&(clearInterval(c),b())},ja(a.f))})};function xa(a){if(1>=a.b.offsetWidth||1>=a.b.offsetHeight)return!1;a.a.remove();V(a.c,"spanReady");return!0};function W(a,b){this.a=a;this.c=b;new sa;this.b=0}function ya(a){a.b&=-31}function X(a,b){a.b|=b}W.prototype.f=function(){};function za(a,b,c,d){this.b=new ta(a,b);a=new T(c);this.a=d(this.b,a)}function Aa(a,b,c){if(b&&c){var d=L(a.a.c,S,6);H(d,2,b,0);H(d,3,c,0)}N(na,U(a.b.a,"engine_msg")||"[]");return a.a.f()||Promise.resolve()}
function Ba(a){ya(a.a);X(a.a,1);window.AFMA_Communicator&&window.AFMA_Communicator.addEventListener("onshow",function(){X(a.a,32);ua(a.b)});var b=0,c=a.b.a;c.addEventListener("browserRender",function(){++b;if(1==b)V(a.b,"overallStart"),Aa(a).then(function(){V(a.b,"overallQuiet")});else{var d=c.clientWidth,g=c.clientHeight;d&&g&&Aa(a,d,g)}})};function Ca(){this.b=this.a=!1;this.c=[]}function Da(a){a.c.length=0;a.b=!0}function Ea(a,b){function c(){a.b=!1;var d=a.c.shift();return void 0===d?(a.a=!1,Promise.resolve()):Ea(a,d())}b=void 0===b?null:b;a.a=!0;return b?b.then(c,function(){if(a.b)return c();a.a=!1;return Promise.reject()}):c()}function Fa(a,b){b=m(b);for(var c=b.next();!c.done;c=b.next())a.c.push(c.value);return a.a?null:Ea(a)};function Y(a,b){W.call(this,a,b);this.g=new Ca}Y.prototype=ba(W.prototype);Y.prototype.constructor=Y;if(u)u(Y,W);else for(var Z in W)if("prototype"!=Z)if(Object.defineProperties){var Ga=Object.getOwnPropertyDescriptor(W,Z);Ga&&Object.defineProperty(Y,Z,Ga)}else Y[Z]=W[Z];
Y.prototype.f=function(){var a=this;Da(this.g);return Fa(this.g,[function(){return null},function(){var b=null,c=L(L(a.c,S,6),R,1);c&&(b=(new wa(a.a,c)).wait());V(a.a,"browserStart");V(a.a,"browserStartEnd");ya(a);X(a,2);return b},function(){return Ha(a)},function(){V(a.a,"browserQuiet");V(a.a,"browserQuietEnd");X(a,8);return null}])};
function Ha(a){V(a.a,"browserReady");V(a.a,"browserReadyEnd");X(a,4);0!=(a.b&32)&&ua(a.a);"complete"===document.readyState?Ia(a):window.addEventListener("load",function(){Ia(a)});V(a.a,"overallReady");return null}
function Ia(a){a=a.a.b;for(var b=a.ownerDocument,c=m(a.querySelectorAll("meta[x-phase]")),d=c.next();!d.done;d=c.next()){d=d.value;var g=b.createElement("STYLE");g.setAttribute("x-phase",d.getAttribute("x-phase"));g.setAttribute("x-layout",d.getAttribute("x-layout"));g.appendChild(b.createTextNode(d.getAttribute("x-css")));a.appendChild(g);d.remove()}}
(function(a){var b=null;w("mys.engine.init",function(c,d){var g=N(T,U(d,"render_config")||"[]");b=new za(c,d,g.a,a);Ba(b)});w("mys.engine.stage",function(){return b?b.a.b:0})})(function(a,b){if(null!=D(b,6))var c=L(b,S,6);else{c=L(b,Q,1);var d=L(b,P,12)||new P;var g=new S;var k=E(d,6)||!1;g=H(g,10,k,!1);k=D(d,2)||0;g=H(g,7,k,0);k=E(d,16)||!1;g=H(g,19,k,!1);k=E(d,15)||!1;g=H(g,18,k,!1);k=new R;k=H(k,3,100,0);k=H(k,4,1E4,0);E(d,4)?(H(k,6,!0,!1),H(k,7,"monospace",""),H(k,8,"IMWimw0.!?@","")):(E(d,5)&&
H(k,9,!0,!1),H(k,5,!0,!1));M(g,1,k);k=new pa;L(c,O,10)&&F(L(c,O,10),6)&&H(k,1,!0,!1);F(c,16)&&!E(d,1)&&H(k,2,!0,!1);M(g,4,k);c=g}M(b,6,c);return new Y(a,b)});}).call(this);
