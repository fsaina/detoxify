(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.nlp = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
(function (global){
/* efrt trie-compression v2.0.3  github.com/nlp-compromise/efrt  - MIT */
!function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)}),function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.unpack=r()}}(function(){return function r(e,n,o){function t(u,f){if(!n[u]){if(!e[u]){var s="function"==typeof _dereq_&&_dereq_;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[u]={exports:{}};e[u][0].call(c.exports,function(r){var n=e[u][1][r];return t(n?n:r)},c,c.exports,r,e,n,o)}return n[u].exports}for(var i="function"==typeof _dereq_&&_dereq_,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(r,e,n){"use strict";var o=36,t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=t.split("").reduce(function(r,e,n){return r[e]=n,r},{}),u=function(r){if(void 0!==t[r])return t[r];for(var e=1,n=o,i="";r>=n;r-=n,e++,n*=o);for(;e--;){var u=r%o;i=String.fromCharCode((u<10?48:55)+u)+i,r=(r-u)/o}return i},f=function(r){if(void 0!==i[r])return i[r];for(var e=0,n=1,t=o,u=1;n<r.length;e+=t,n++,t*=o);for(var f=r.length-1;f>=0;f--,u*=o){var s=r.charCodeAt(f)-48;s>10&&(s-=7),e+=s*u}return e};e.exports={toAlphaCode:u,fromAlphaCode:f}},{}],2:[function(r,e,n){"use strict";var o=r("./unpack");e.exports=function(r){var e=r.split("|").reduce(function(r,e){var n=e.split("¦");return r[n[0]]=n[1],r},{}),n={};return Object.keys(e).forEach(function(r){var t=o(e[r]);"true"===r&&(r=!0);for(var i=0;i<t.length;i++){var u=t[i];n.hasOwnProperty(u)===!0?Array.isArray(n[u])===!1?n[u]=[n[u],r]:n[u].push(r):n[u]=r}}),n}},{"./unpack":4}],3:[function(r,e,n){"use strict";var o=r("../encoding");e.exports=function(r){for(var e=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<r.nodes.length;n++){var t=e.exec(r.nodes[n]);if(!t){r.symCount=n;break}r.syms[o.fromAlphaCode(t[1])]=o.fromAlphaCode(t[2])}r.nodes=r.nodes.slice(r.symCount,r.nodes.length)}},{"../encoding":1}],4:[function(r,e,n){"use strict";var o=r("./symbols"),t=r("../encoding"),i=function(r,e,n){var o=t.fromAlphaCode(e);return o<r.symCount?r.syms[o]:n+o+1-r.symCount},u=function(r){var e=[],n=function n(o,t){var u=r.nodes[o];"!"===u[0]&&(e.push(t),u=u.slice(1));for(var f=u.split(/([A-Z0-9,]+)/g),s=0;s<f.length;s+=2){var a=f[s],c=f[s+1];if(a){var d=t+a;if(","!==c&&void 0!==c){var p=i(r,c,o);n(p,d)}else e.push(d)}}};return n(0,""),e},f=function(r){var e={nodes:r.split(";"),syms:[],symCount:0};return r.match(":")&&o(e),u(e)};e.exports=f},{"../encoding":1,"./symbols":3}]},{},[2])(2)});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
module.exports={
  "author": "Spencer Kelly <spencermountain@gmail.com> (http://spencermounta.in)",
  "name": "compromise",
  "description": "natural language processing in the browser",
  "version": "11.13.2",
  "main": "./builds/compromise.js",
  "unpkg": "./builds/compromise.min.js",
  "types": "./compromise.d.ts",
  "repository": {
    "type": "git",
    "url": "git://github.com/nlp-compromise/compromise.git"
  },
  "scripts": {
    "test": "tape \"./test/unit/**/*.test.js\" | tap-dancer",
    "test:spec": "tape \"./test/unit/**/*.test.js\" | tap-spec",
    "testb": "TESTENV=prod tape \"./test/unit/**/*.test.js\" | tap-spec",
    "buildTest": "TESTENV=prod node ./scripts/test.js",
    "test:types": "tsc --project test/types",
    "browserTest": "node ./scripts/browserTest.js",
    "benchmark": "node ./scripts/benchmark.js",
    "build": "node ./scripts/build/index.js",
    "pack": "node ./scripts/pack.js",
    "prepublishOnly": "node ./scripts/prepublish",
    "postpublish": "node ./scripts/postpublish",
    "watch": "amble ./scratch.js",
    "filesize": "node ./scripts/lib/filesize.js",
    "coverage": "node ./scripts/postpublish/coverage.js",
    "lint": "node ./scripts/prepublish/linter.js"
  },
  "files": [
    "builds/",
    "docs/",
    "compromise.d.ts"
  ],
  "dependencies": {
    "efrt-unpack": "2.0.3"
  },
  "devDependencies": {
    "@babel/core": "7.3.4",
    "@babel/preset-env": "7.3.4",
    "amble": "0.0.7",
    "babelify": "10.0.0",
    "babili": "0.1.4",
    "browserify": "16.2.3",
    "chalk": "2.4.2",
    "codecov": "3.2.0",
    "compromise-plugin": "0.0.8",
    "derequire": "2.0.6",
    "nyc": "13.3.0",
    "shelljs": "0.8.3",
    "tap-dancer": "0.1.2",
    "terser": "3.17.0",
    "tape": "4.10.1"
  },
  "license": "MIT"
}

},{}],3:[function(_dereq_,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var tagset = _dereq_('./tags'); // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color


var c = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  black: '\x1b[30m'
}; //dont use colors on client-side

if (typeof module === 'undefined') {
  Object.keys(c).forEach(function (k) {
    c[k] = '';
  });
} //coerce any input into a string


exports.ensureString = function (input) {
  if (typeof input === 'string') {
    return input;
  } else if (typeof input === 'number') {
    return String(input);
  }

  return '';
}; //coerce any input into a string


exports.ensureObject = function (input) {
  if (_typeof(input) !== 'object') {
    return {};
  }

  if (input === null || input instanceof Array) {
    return {};
  }

  return input;
};

exports.titleCase = function (str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}; //shallow-clone an object


exports.copy = function (o) {
  var o2 = {};
  o = exports.ensureObject(o);
  Object.keys(o).forEach(function (k) {
    o2[k] = o[k];
  });
  return o2;
};

exports.extend = function (obj, a) {
  obj = exports.copy(obj);
  var keys = Object.keys(a);

  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = a[keys[i]];
  }

  return obj;
}; //colorization


exports.green = function (str) {
  return c.green + str + c.reset;
};

exports.red = function (str) {
  return c.red + str + c.reset;
};

exports.blue = function (str) {
  return c.blue + str + c.reset;
};

exports.magenta = function (str) {
  return c.magenta + str + c.reset;
};

exports.cyan = function (str) {
  return c.cyan + str + c.reset;
};

exports.yellow = function (str) {
  return c.yellow + str + c.reset;
};

exports.black = function (str) {
  return c.black + str + c.reset;
};

exports.printTag = function (tag) {
  if (tagset[tag]) {
    var color = tagset[tag].color || 'blue';
    return exports[color](tag);
  }

  return tag;
};

exports.printTerm = function (t) {
  var tags = Object.keys(t.tags);

  for (var i = 0; i < tags.length; i++) {
    if (tagset[tags[i]]) {
      var color = tagset[tags[i]].color || 'black';
      return exports[color](t.out('text'));
    }
  }

  return c.reset + t.plaintext + c.reset;
};

exports.leftPad = function (str, width, char) {
  char = char || ' ';
  str = str.toString();

  while (str.length < width) {
    str += char;
  }

  return str;
};

exports.isArray = function (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

exports.isObject = function (obj) {
  return obj === Object(obj);
};

},{"./tags":137}],4:[function(_dereq_,module,exports){
(function (global){
'use strict';

var buildText = _dereq_('./text/build');

var pkg = _dereq_('../package.json');

var log = _dereq_('./log');

var unpack = _dereq_('./world/unpack');

var world = _dereq_('./world');

var w = world.w; //the main function

var nlp = function nlp(str, lex) {
  if (lex) {
    w.plugin({
      words: lex
    });
  }

  var doc = buildText(str, w);
  doc.tagger();
  return doc;
}; //this is used, atleast, for testing the packing


nlp.unpack = function (plugin) {
  return unpack(plugin);
}; //this is handy


nlp.version = pkg.version; //turn-on some debugging

nlp.verbose = function (str) {
  log.enable(str);
}; //same as main method, except with no POS-tagging.


nlp.tokenize = function (str) {
  return buildText(str);
}; //uncompress user-submitted lexicon


nlp.plugin = function (plugin) {
  w.plugin(plugin);
}; //contribute words to the lexicon


nlp.addWords = function (lex) {
  w.plugin({
    words: lex
  });
};

nlp.addTags = function (tags) {
  w.plugin({
    tags: tags
  });
};

nlp.addRegex = function (regex) {
  w.plugin({
    regex: regex
  });
};

nlp.addPatterns = function (patterns) {
  w.plugin({
    patterns: patterns
  });
};

nlp.addPlurals = function (plurals) {
  w.plugin({
    plurals: plurals
  });
};

nlp.addConjugations = function (conj) {
  w.plugin({
    conjugations: conj
  });
}; //make a weird, half-copy of this method


nlp.clone = function () {
  var w2 = world.reBuild(); //this is weird, but it's okay

  var nlp2 = function nlp2(str, lex) {
    if (lex) {
      w2.plugin({
        words: lex
      });
    }

    var doc = buildText(str, w2);
    doc.tagger();
    return doc;
  };

  nlp2.tokenize = nlp.tokenize;
  nlp2.verbose = nlp.verbose;
  nlp2.version = nlp.version;
  ['Words', 'Tags', 'Regex', 'Patterns', 'Plurals', 'Conjugations'].forEach(function (fn) {
    nlp2['add' + fn] = function (obj) {
      w2['add' + fn](obj);
    };
  });
  return nlp2;
}; //and then all-the-exports...


if (typeof self !== 'undefined') {
  self.nlp = nlp; // Web Worker
} else if (typeof window !== 'undefined') {
  window.nlp = nlp; // Browser
} else if (typeof global !== 'undefined') {
  global.nlp = nlp; // NodeJS
} //don't forget amd!


if (typeof define === 'function' && define.amd) {
  define(nlp);
} //then for some reason, do this too!


if (typeof module !== 'undefined') {
  module.exports = nlp;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../package.json":2,"./log":6,"./text/build":190,"./world":215,"./world/unpack":223}],5:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('../fns'); // const colors = {
//   'Person': '#6393b9',
//   'Pronoun': '#81acce',
//   'Noun': 'steelblue',
//   'Verb': 'palevioletred',
//   'Adverb': '#f39c73',
//   'Adjective': '#b3d3c6',
//   'Determiner': '#d3c0b3',
//   'Preposition': '#9794a8',
//   'Conjunction': '#c8c9cf',
//   'Value': 'palegoldenrod',
//   'Expression': '#b3d3c6'
// };


var tag = function tag(t, pos, reason) {
  var title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ->   ' + pos;
  title += fns.leftPad(reason || '', 15);
  console.log('%c' + title, ' color: #a2c99c');
};

var untag = function untag(t, pos, reason) {
  var title = t.normal || '[' + t.silent_term + ']';
  title = fns.leftPad('\'' + title + '\'', 12);
  title += '  ~*   ' + pos;
  title += '    ' + (reason || '');
  console.log('%c' + title, ' color: #b66a6a');
};

module.exports = {
  tag: tag,
  untag: untag
};

},{"../fns":3}],6:[function(_dereq_,module,exports){
'use strict';

var client = _dereq_('./client');

var server = _dereq_('./server');

var _enable = false;
module.exports = {
  enable: function enable(str) {
    if (str === undefined) {
      str = true;
    }

    _enable = str;
  },
  tag: function tag(t, pos, reason) {
    if (_enable === true || _enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.tag(t, pos, reason);
      } else {
        server.tag(t, pos, reason);
      }
    }
  },
  unTag: function unTag(t, pos, reason) {
    if (_enable === true || _enable === 'tagger') {
      if (typeof window !== 'undefined') {
        client.untag(t, pos, reason);
      } else {
        server.untag(t, pos, reason);
      }
    }
  }
};

},{"./client":5,"./server":7}],7:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('../fns'); //use weird bash escape things for some colors


var tag = function tag(t, pos, reason) {
  var title = t.normal || '[' + t.silent_term + ']';
  title = fns.yellow(title);
  title = fns.leftPad('\'' + title + '\'', 20);
  title += '  ->   ' + fns.printTag(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.cyan(reason || '') + ')');
};

var untag = function untag(t, pos, reason) {
  var title = '-' + t.normal + '-';
  title = fns.red(title);
  title = fns.leftPad(title, 20);
  title += '  ~*   ' + fns.red(pos);
  title = fns.leftPad(title, 54);
  console.log('       ' + title + '(' + fns.red(reason || '') + ')');
};

module.exports = {
  tag: tag,
  untag: untag
};

},{"../fns":3}],8:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  fns: _dereq_('./fns'),
  Terms: _dereq_('./terms')
};

},{"./fns":3,"./terms":165}],9:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text'); //the Acronym() subset class


var methods = {
  stripPeriods: function stripPeriods() {
    this.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        var chars = t._text.split('.');

        if (chars.length > 2) {
          t.text = chars.join('');
        }
      });
    });
    return this;
  },
  addPeriods: function addPeriods() {
    this.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        var chars = t._text.split('.');

        if (chars.length > 2) {
          var str = t._text.replace(/\./g, '');

          t.text = str.split('').join('.') + '.';
        }
      });
    });
    return this;
  },
  data: function data() {
    return this.terms().list.map(function (ts) {
      var t = ts.terms[0];
      var parsed = t.text.toUpperCase().replace(/\./g, '').split('');
      return {
        periods: parsed.join('.'),
        normal: parsed.join(''),
        text: t.text
      };
    });
  }
};

var find = function find(r, n) {
  r = r.match('#Acronym');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192}],10:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var fns = _dereq_('./methods'); //the Adjectives() subset class
//is this an adjective we want to goof-around with?


var shouldConvert = function shouldConvert(str, words) {
  if (!str || str.length <= 3) {
    return false;
  }

  if (words[str] === 'Comparable') {
    return true;
  }

  if (words[str] === 'Adjective') {
    return false;
  } //has space


  if (str.indexOf(' ') !== -1) {
    return false;
  }

  return true;
};

var methods = {
  data: function data() {
    var _this = this;

    return this.list.map(function (ts) {
      var str = ts.out('normal');
      var obj = {
        normal: str,
        text: _this.out('text'),
        comparative: 'more ' + str,
        superlative: 'most ' + str,
        adverbForm: null,
        nounForm: null // verbForm: null

      };

      if (shouldConvert(str, _this.world().words) === true) {
        obj.comparative = fns.toComparative(str) || obj.comparative;
        obj.superlative = fns.toSuperlative(str) || obj.superlative;
        obj.adverbForm = fns.toAdverb(str);
        obj.nounForm = fns.toNoun(str); // obj.verbForm = fns.toVerb(str);
      }

      return obj;
    });
  }
};

var find = function find(r, n) {
  r = r.match('#Adjective');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./methods":11}],11:[function(_dereq_,module,exports){
'use strict';

module.exports = {
  toNoun: _dereq_('./toNoun'),
  toSuperlative: _dereq_('./toSuperlative'),
  toComparative: _dereq_('./toComparative'),
  toAdverb: _dereq_('./toAdverb'),
  toVerb: _dereq_('./toVerb')
};

},{"./toAdverb":12,"./toComparative":13,"./toNoun":14,"./toSuperlative":15,"./toVerb":16}],12:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';

var not_matches = [/airs$/, /ll$/, /ee.$/, /ile$/, /y$/];

var irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toAdverb;

var transforms = [{
  reg: /al$/i,
  repl: 'ally'
}, {
  reg: /ly$/i,
  repl: 'ly'
}, {
  reg: /(.{3})y$/i,
  repl: '$1ily'
}, {
  reg: /que$/i,
  repl: 'quely'
}, {
  reg: /ue$/i,
  repl: 'uly'
}, {
  reg: /ic$/i,
  repl: 'ically'
}, {
  reg: /ble$/i,
  repl: 'bly'
}, {
  reg: /l$/i,
  repl: 'ly'
}];

var adj_to_adv = function adj_to_adv(str) {
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }

  for (var i = 0; i < not_matches.length; i++) {
    if (not_matches[i].test(str) === true) {
      return null;
    }
  }

  for (var _i = 0; _i < transforms.length; _i++) {
    if (transforms[_i].reg.test(str) === true) {
      return str.replace(transforms[_i].reg, transforms[_i].repl);
    }
  }

  return str + 'ly';
}; // console.log(adj_to_adv('good'));


module.exports = adj_to_adv;

},{"../../../world/more-data/irregularAdjectives":218}],13:[function(_dereq_,module,exports){
//turn 'quick' into 'quickly'
'use strict';

var do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /old$/, /oud$/, /e[ae]p$/];
var dont_rules = [/ary$/, /ous$/];

var irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toComparative;

var transforms = [{
  reg: /y$/i,
  repl: 'ier'
}, {
  reg: /([aeiou])t$/i,
  repl: '$1tter'
}, {
  reg: /([aeou])de$/i,
  repl: '$1der'
}, {
  reg: /nge$/i,
  repl: 'nger'
}];

var to_comparative = function to_comparative(str) {
  //known-irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  } //known-transforms


  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  } //dont-patterns


  for (var _i = 0; _i < dont_rules.length; _i++) {
    if (dont_rules[_i].test(str) === true) {
      return null;
    }
  } //do-patterns


  for (var _i2 = 0; _i2 < do_rules.length; _i2++) {
    if (do_rules[_i2].test(str) === true) {
      return str + 'er';
    }
  } //easy-one


  if (/e$/.test(str) === true) {
    return str + 'r';
  }

  return str + 'er'; // return null;
}; // console.log(to_comparative('big'));


module.exports = to_comparative;

},{"../../../world/more-data/irregularAdjectives":218}],14:[function(_dereq_,module,exports){
'use strict'; //convert 'cute' to 'cuteness'

var irregulars = {
  clean: 'cleanliness',
  naivety: 'naivety',
  hurt: 'hurt'
};
var transforms = [{
  reg: /y$/,
  repl: 'iness'
}, {
  reg: /le$/,
  repl: 'ility'
}, {
  reg: /ial$/,
  repl: 'y'
}, {
  reg: /al$/,
  repl: 'ality'
}, {
  reg: /ting$/,
  repl: 'ting'
}, {
  reg: /ring$/,
  repl: 'ring'
}, {
  reg: /bing$/,
  repl: 'bingness'
}, {
  reg: /sing$/,
  repl: 'se'
}, {
  reg: /ing$/,
  repl: 'ment'
}, {
  reg: /ess$/,
  repl: 'essness'
}, {
  reg: /ous$/,
  repl: 'ousness'
}];

var to_noun = function to_noun(w) {
  if (irregulars.hasOwnProperty(w)) {
    return irregulars[w];
  }

  var lastChar = w.charAt(w.length - 1);

  if (lastChar === 'w' || lastChar === 's') {
    return null;
  }

  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(w) === true) {
      return w.replace(transforms[i].reg, transforms[i].repl);
    }
  }

  return w + 'ness';
};

module.exports = to_noun; // console.log(to_noun("great"))

},{}],15:[function(_dereq_,module,exports){
//turn 'quick' into 'quickest'
'use strict';

var do_rules = [/ght$/, /nge$/, /ough$/, /ain$/, /uel$/, /[au]ll$/, /ow$/, /oud$/, /...p$/];
var dont_rules = [/ary$/];

var irregulars = _dereq_('../../../world/more-data/irregularAdjectives').toSuperlative;

var transforms = [{
  reg: /y$/i,
  repl: 'iest'
}, {
  reg: /([aeiou])t$/i,
  repl: '$1ttest'
}, {
  reg: /([aeou])de$/i,
  repl: '$1dest'
}, {
  reg: /nge$/i,
  repl: 'ngest'
}, {
  reg: /([aeiou])te$/i,
  repl: '$1test'
}];

var to_superlative = function to_superlative(str) {
  //irregulars
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  } //known transforms


  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str)) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  } //dont-rules


  for (var _i = 0; _i < dont_rules.length; _i++) {
    if (dont_rules[_i].test(str) === true) {
      return null;
    }
  } //do-rules


  for (var _i2 = 0; _i2 < do_rules.length; _i2++) {
    if (do_rules[_i2].test(str) === true) {
      if (str.charAt(str.length - 1) === 'e') {
        return str + 'st';
      }

      return str + 'est';
    }
  }

  return str + 'est';
};

module.exports = to_superlative; // console.log(to_superlative("great"))

},{"../../../world/more-data/irregularAdjectives":218}],16:[function(_dereq_,module,exports){
'use strict'; //turn an adjective like 'soft' into a verb like 'soften'
//(don't do words like 'green' -> 'greenen')

var irregulars = {
  red: 'redden',
  sad: 'sadden',
  fat: 'fatten'
};

var toVerb = function toVerb(str) {
  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }

  if (/e$/.test(str) === true) {
    return str + 'n';
  }

  return str + 'en';
};

module.exports = toVerb;

},{}],17:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var toAdjective = _dereq_('./toAdjective'); //the () subset class


var methods = {
  data: function data() {
    return this.terms().list.map(function (ts) {
      var t = ts.terms[0];
      return {
        adjectiveForm: toAdjective(t.normal),
        normal: t.normal,
        text: t.text
      };
    });
  }
};

var find = function find(r, n) {
  r = r.splitAfter('#Comma');
  r = r.match('#Adverb+');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./toAdjective":18}],18:[function(_dereq_,module,exports){
//turns 'quickly' into 'quick'
'use strict';

var irregulars = {
  'idly': 'idle',
  'sporadically': 'sporadic',
  'basically': 'basic',
  'grammatically': 'grammatical',
  'alphabetically': 'alphabetical',
  'economically': 'economical',
  'conically': 'conical',
  'politically': 'political',
  'vertically': 'vertical',
  'practically': 'practical',
  'theoretically': 'theoretical',
  'critically': 'critical',
  'fantastically': 'fantastic',
  'mystically': 'mystical',
  'pornographically': 'pornographic',
  'fully': 'full',
  'jolly': 'jolly',
  'wholly': 'whole'
};
var transforms = [{
  'reg': /bly$/i,
  'repl': 'ble'
}, {
  'reg': /gically$/i,
  'repl': 'gical'
}, {
  'reg': /([rsdh])ically$/i,
  'repl': '$1ical'
}, {
  'reg': /ically$/i,
  'repl': 'ic'
}, {
  'reg': /uly$/i,
  'repl': 'ue'
}, {
  'reg': /ily$/i,
  'repl': 'y'
}, {
  'reg': /(.{3})ly$/i,
  'repl': '$1'
}];

var toAdjective = function toAdjective(str) {
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }

  for (var i = 0; i < transforms.length; i++) {
    if (transforms[i].reg.test(str) === true) {
      return str.replace(transforms[i].reg, transforms[i].repl);
    }
  }

  return str;
}; // console.log(toAdjective('quickly'))


module.exports = toAdjective;

},{}],19:[function(_dereq_,module,exports){
'use strict'; //the plumbing to turn two words into a contraction

var combine = function combine(a, b) {
  b.whitespace.after = a.whitespace.after;
  a.whitespace.after = '';
  b.whitespace.before = '';
  a.silent_term = a.text;
  b.silent_term = b.text;
  b.text = '';
  a.tag('Contraction', 'new-contraction');
  b.tag('Contraction', 'new-contraction');
};

var irregulars = {
  can: 'can\'t',
  will: 'won\'t'
};

var contract = function contract(ts) {
  if (ts.expanded === false || ts.match('#Contraction').found) {
    return ts;
  } //he is -> he's


  ts.match('(#Noun|#QuestionWord) is').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'s';
    ls.contracted = true;
  }); //he did -> he'd

  ts.match('#PronNoun did').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  }); //how do -> how'd

  ts.match('#QuestionWord (did|do)').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  }); //he would -> he'd

  ts.match('#Noun (could|would)').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'d';
    ls.contracted = true;
  }); //they are -> they're

  ts.match('(they|we|you) are').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'re';
    ls.contracted = true;
  }); //i am -> i'm

  ts.match('i am').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'m';
    ls.contracted = true;
  }); //they will -> they'll

  ts.match('(#Noun|#QuestionWord) will').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ll';
    ls.contracted = true;
  }); //they have -> they've

  ts.match('(they|we|you|i) have').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]);
    ls.terms[0].text += '\'ve';
    ls.contracted = true;
  }); //is not -> isn't

  ts.match('(#Copula|#Modal|do|does|have|has|can|will) not').list.forEach(function (ls) {
    combine(ls.terms[0], ls.terms[1]); //can't, won't

    if (irregulars.hasOwnProperty(ls.terms[0].text) === true) {
      ls.terms[0].text = irregulars[ls.terms[0].text];
    } else {
      ls.terms[0].text += 'n\'t';
    }

    ls.contracted = true;
  });
  return ts;
};

module.exports = contract;

},{}],20:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var contract = _dereq_('./contract');

var expand = _dereq_('./expand');

var ContractionCl = function ContractionCl(arr, world, original) {
  Terms.call(this, arr, world, original);
}; //Inherit properties


ContractionCl.prototype = Object.create(Terms.prototype);

ContractionCl.prototype.data = function () {
  var expanded = expand(this.clone());
  var contracted = contract(this.clone());
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    expanded: {
      normal: expanded.out('normal'),
      text: expanded.out('text')
    },
    contracted: {
      normal: contracted.out('normal'),
      text: contracted.out('text')
    },
    isContracted: Boolean(this.contracted)
  };
};

ContractionCl.prototype.expand = function () {
  return expand(this);
};

ContractionCl.prototype.contract = function () {
  return contract(this);
};

module.exports = ContractionCl;

},{"../../paths":8,"./contract":19,"./expand":21}],21:[function(_dereq_,module,exports){
'use strict'; //turn `i'd` into `i would`

var expand = function expand(ts) {
  if (ts.contracted === false) {
    return ts;
  }

  ts.terms.forEach(function (t) {
    if (t.silent_term) {
      //this term also needs a space now too
      if (!t.text) {
        t.whitespace.before = ' ';
      }

      t._text = t.silent_term; //handle (some) capitalization

      if (t.tags.TitleCase) {
        t.toTitleCase();
      }

      t.normalize();
      t.silent_term = null;
      t.unTag('Contraction', 'expanded');
    }
  });
  return ts;
};

module.exports = expand;

},{}],22:[function(_dereq_,module,exports){
'use strict'; //find contractable, expanded-contractions

var find = function find(r) {
  var remain = r.not('#Contraction');
  var m = remain.match('(#Noun|#QuestionWord) (#Copula|did|do|have|had|could|would|will)');
  m.concat(remain.match('(they|we|you|i) have'));
  m.concat(remain.match('i am'));
  m.concat(remain.match('(#Copula|#Modal|do|does|have|has|can|will) not'));
  m.list.forEach(function (ts) {
    ts.expanded = true;
  });
  return m;
};

module.exports = find;

},{}],23:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var ContractionCl = _dereq_('./contraction');

var findPossible = _dereq_('./findPossible'); //the Contractions() subset class


var methods = {
  contract: function contract() {
    this.list.forEach(function (ts) {
      return ts.contract();
    });
    return this;
  },
  expand: function expand() {
    this.list.forEach(function (ts) {
      return ts.expand();
    });
    return this;
  },
  contracted: function contracted() {
    this.list = this.list.filter(function (ts) {
      return ts.contracted;
    });
    return this;
  },
  expanded: function expanded() {
    this.list = this.list.filter(function (ts) {
      return !ts.contracted;
    });
    return this;
  }
};

var find = function find(r, n) {
  //find currently-contracted
  var found = r.match('#Contraction #Contraction #Contraction?');
  found.list = found.list.map(function (ts) {
    var c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = true;
    return c;
  }); //find currently-expanded

  var expanded = findPossible(r);
  expanded.list.forEach(function (ts) {
    var c = new ContractionCl(ts.terms, ts.world, ts.refText, ts.refTerms);
    c.contracted = false;
    found.list.push(c);
  });
  found.sort('chronological'); //get nth element

  if (typeof n === 'number') {
    found = found.get(n);
  }

  return found;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./contraction":20,"./findPossible":22}],24:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var parseDate = _dereq_('./parseDate');

var _Date = function _Date(arr, world, refText) {
  Terms.call(this, arr, world, refText);
  this.month = this.match('#Month');
}; //Inherit properties


_Date.prototype = Object.create(Terms.prototype);

_Date.prototype.data = function () {
  return {
    text: this.out('text'),
    normal: this.out('normal'),
    date: parseDate(this)
  };
};

module.exports = _Date;

},{"../../paths":8,"./parseDate":28}],25:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Date = _dereq_('./date');

var weekdays = _dereq_('./weekday');

var months = _dereq_('./month'); //the Dates() subset class


var methods = {
  toShortForm: function toShortForm() {
    this.match('#Month').terms().list.forEach(function (ts) {
      var t = ts.terms[0];
      months.toShortForm(t);
    });
    this.match('#WeekDay').terms().list.forEach(function (ts) {
      var t = ts.terms[0];
      weekdays.toShortForm(t);
    });
    return this;
  },
  toLongForm: function toLongForm() {
    this.match('#Month').terms().list.forEach(function (ts) {
      var t = ts.terms[0];
      months.toLongForm(t);
    });
    this.match('#WeekDay').terms().list.forEach(function (ts) {
      var t = ts.terms[0];
      weekdays.toLongForm(t);
    });
    return this;
  }
};

var find = function find(r, n) {
  var dates = r.match('#Date+');

  if (typeof n === 'number') {
    dates = dates.get(n);
  }

  dates.list = dates.list.map(function (ts) {
    return new Date(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return dates;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./date":24,"./month":27,"./weekday":31}],26:[function(_dereq_,module,exports){
"use strict";

//follow the javascript scheme
//january is 0
exports.longMonths = {
  'january': 0,
  'february': 1,
  'march': 2,
  'april': 3,
  'may': 4,
  'june': 5,
  'july': 6,
  'august': 7,
  'september': 8,
  'october': 9,
  'november': 10,
  'december': 11
};
exports.shortMonths = {
  'jan': 0,
  'feb': 1,
  'mar': 2,
  'apr': 3,
  'may': 4,
  'jun': 5,
  'jul': 6,
  'aug': 7,
  'sep': 8,
  'oct': 9,
  'nov': 10,
  'dec': 11,
  //extra ones
  'febr': 1,
  'sept': 8
};

},{}],27:[function(_dereq_,module,exports){
'use strict';

var data = _dereq_('./data');

var shortMonths = data.shortMonths;
var longMonths = data.longMonths;

var titleCase = function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

module.exports = {
  index: function index(t) {
    if (t.tags.Month) {
      if (longMonths[t.normal] !== undefined) {
        return longMonths[t.normal];
      }

      if (shortMonths[t.normal] !== undefined) {
        return shortMonths[t.normal];
      }
    }

    return null;
  },
  toShortForm: function toShortForm(t) {
    if (t.tags.Month !== undefined) {
      if (longMonths[t.normal] !== undefined) {
        var shorten = Object.keys(shortMonths);
        var punct = t.getPunctuation() || '';
        t.text = shorten[longMonths[t.normal]] + punct;

        if (t.tags.TitleCase) {
          t.text = titleCase(t.text);
        }
      }
    }

    t.dirty = true;
    return t;
  },
  toLongForm: function toLongForm(t) {
    if (t.tags.Month !== undefined) {
      if (shortMonths[t.normal] !== undefined) {
        var longer = Object.keys(longMonths);
        var punct = t.getPunctuation() || '';
        t.text = longer[shortMonths[t.normal]] + punct;

        if (t.tags.TitleCase) {
          t.text = titleCase(t.text);
        }
      }
    }

    t.dirty = true;
    return t;
  }
};

},{"./data":26}],28:[function(_dereq_,module,exports){
'use strict';

var parseTime = _dereq_('./parseTime');

var weekdays = _dereq_('./weekday');

var months = _dereq_('./month'); //a hugely-conservative and incomplete first-pass for parsing written-dates
//validate a day-of-month


var isDate = function isDate(num) {
  if (num && num < 31 && num > 0) {
    return true;
  }

  return false;
}; //please change this in one thousand years


var isYear = function isYear(num) {
  if (num && num > 1000 && num < 3000) {
    return true;
  }

  return false;
}; //


var parseDate = function parseDate(r) {
  var result = {
    month: null,
    date: null,
    weekday: null,
    year: null,
    named: null,
    time: null
  };
  var m = r.match('(#Holiday|today|tomorrow|yesterday)');

  if (m.found) {
    result.named = m.out('normal');
  }

  m = r.match('#Month');

  if (m.found) {
    result.month = months.index(m.list[0].terms[0]);
  }

  m = r.match('#WeekDay');

  if (m.found) {
    result.weekday = weekdays.index(m.list[0].terms[0]);
  }

  m = r.match('#Time');

  if (m.found) {
    result.time = parseTime(r);
    r.not('#Time'); //unsure
  } //january fifth 1992


  m = r.match('#Month #Value #Year');

  if (m.found) {
    var numbers = m.values().numbers();

    if (isDate(numbers[0])) {
      result.date = numbers[0];
    }

    var year = parseInt(r.match('#Year').out('normal'), 10);

    if (isYear(year)) {
      result.year = year;
    }
  }

  if (!m.found) {
    //january fifth,  january 1992
    m = r.match('#Month #Value');

    if (m.found) {
      var _numbers = m.values().numbers();

      var num = _numbers[0];

      if (isDate(num)) {
        result.date = num;
      }
    } //january 1992


    m = r.match('#Month #Year');

    if (m.found) {
      var _num = parseInt(r.match('#Year').out('normal'), 10);

      if (isYear(_num)) {
        result.year = _num;
      }
    }
  } //fifth of january


  m = r.match('#Value of #Month');

  if (m.found) {
    var _num2 = m.values().numbers()[0];

    if (isDate(_num2)) {
      result.date = _num2;
    }
  }

  return result;
};

module.exports = parseDate;

},{"./month":27,"./parseTime":29,"./weekday":31}],29:[function(_dereq_,module,exports){
'use strict';

var ampm = /([12]?[0-9]) ?(am|pm)/i;
var hourMin = /([12]?[0-9]):([0-9][0-9]) ?(am|pm)?/i; //

var isHour = function isHour(num) {
  if (num && num > 0 && num < 25) {
    return true;
  }

  return false;
};

var isMinute = function isMinute(num) {
  if (num && num > 0 && num < 60) {
    return true;
  }

  return false;
};

var parseTime = function parseTime(r) {
  var result = {
    logic: null,
    hour: null,
    minute: null,
    second: null,
    timezone: null
  };
  var logic = r.match('(by|before|for|during|at|until|after) #Time').firstTerm();

  if (logic.found) {
    result.logic = logic.out('normal');
  }

  var time = r.match('#Time');
  time.terms().list.forEach(function (ts) {
    var t = ts.terms[0]; //3pm

    var m = t.text.match(ampm);

    if (m !== null) {
      result.hour = parseInt(m[1], 10);

      if (m[2] === 'pm') {
        result.hour += 12;
      }

      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    } //3:15


    m = t.text.match(hourMin);

    if (m !== null) {
      result.hour = parseInt(m[1], 10);
      result.minute = parseInt(m[2], 10);

      if (!isMinute(result.minute)) {
        result.minute = null;
      }

      if (m[3] === 'pm') {
        result.hour += 12;
      }

      if (isHour(result.hour) === false) {
        result.hour = null;
      }
    }
  });
  return result;
};

module.exports = parseTime;

},{}],30:[function(_dereq_,module,exports){
"use strict";

//follow the javascript scheme
//sunday is 0
exports.longDays = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6
};
exports.shortDays = {
  'sun': 0,
  'mon': 1,
  'tues': 2,
  'wed': 3,
  'weds': 3,
  'thurs': 4,
  'fri': 5,
  'sat': 6
};

},{}],31:[function(_dereq_,module,exports){
'use strict';

var data = _dereq_('./data');

var shortDays = data.shortDays;
var longDays = data.longDays;
module.exports = {
  index: function index(t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        return longDays[t.normal];
      }

      if (shortDays[t.normal] !== undefined) {
        return shortDays[t.normal];
      }
    }

    return null;
  },
  toShortForm: function toShortForm(t) {
    if (t.tags.WeekDay) {
      if (longDays[t.normal] !== undefined) {
        var shorten = Object.keys(shortDays);
        t.text = shorten[longDays[t.normal]];
      }
    }

    return t;
  },
  toLongForm: function toLongForm(t) {
    if (t.tags.WeekDay) {
      if (shortDays[t.normal] !== undefined) {
        var longer = Object.keys(longDays);
        t.text = longer[shortDays[t.normal]];
      }
    }

    return t;
  }
};

},{"./data":30}],32:[function(_dereq_,module,exports){
'use strict';

var Ngrams = _dereq_('./index');

var getGrams = _dereq_('./getGrams'); //like an n-gram, but only the endings of matches


var EndGrams = function EndGrams(arr, world, original) {
  Ngrams.call(this, arr, world, original);
}; //Inherit properties


EndGrams.prototype = Object.create(Ngrams.prototype); //like an n-gram, but only the startings of matches

EndGrams.find = function (r, n, size) {
  var opts = {
    size: [1, 2, 3, 4],
    edge: 'end'
  }; //only look for bigrams, for example

  if (size) {
    opts.size = [size];
  } //fetch them


  var arr = getGrams(r, opts);
  r = new EndGrams(arr); //default sort

  r.sort(); //grab top one, or something

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = EndGrams;

},{"./getGrams":33,"./index":35}],33:[function(_dereq_,module,exports){
'use strict';

var Gram = _dereq_('./gram'); //strip contractions - remove '' term for "it's"


var noEmpty = function noEmpty(fts) {
  return fts = fts.terms.filter(function (t) {
    return t._text !== '';
  });
}; //do all grams of one size, on one termList


var getGrams = function getGrams(fts, n) {
  var terms = noEmpty(fts);

  if (terms.length < n) {
    return [];
  }

  var arr = [];

  for (var i = 0; i < terms.length - n + 1; i++) {
    var gram = new Gram(terms.slice(i, i + n));
    arr.push(gram);
  }

  return arr;
}; //left-sided grams


var startGram = function startGram(fts, n) {
  var terms = noEmpty(fts);

  if (terms.length < n) {
    return [];
  }

  var arr = [new Gram(terms.slice(0, n))];
  return arr;
}; //right-sided grams


var endGram = function endGram(fts, n) {
  var terms = noEmpty(fts);

  if (terms.length < n) {
    return [];
  }

  var arr = [new Gram(terms.slice(terms.length - n, terms.length))];
  return arr;
}; //ngrams are consecutive terms of a specific size


var buildGrams = function buildGrams(r, options) {
  options = options || {};
  options.size = options.size || [1, 2, 3];

  if (typeof options.size === 'number') {
    options.size = [options.size];
  }

  var obj = {}; //collect and count all grams

  options.size.forEach(function (size) {
    r.list.forEach(function (ts) {
      var newGrams = [];

      if (options.edge === 'start') {
        newGrams = startGram(ts, size);
      } else if (options.edge === 'end') {
        newGrams = endGram(ts, size);
      } else {
        newGrams = getGrams(ts, size);
      }

      newGrams.forEach(function (g) {
        if (obj.hasOwnProperty(g.key)) {
          obj[g.key].inc();
        } else {
          obj[g.key] = g;
        }
      });
    });
  }); //flatten to an array

  var arr = Object.keys(obj).map(function (k) {
    return obj[k];
  });
  return arr;
};

module.exports = buildGrams;

},{"./gram":34}],34:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms; //this is one-or-more terms together, sorted by frequency


var Gram = function Gram(arr, world, original) {
  Terms.call(this, arr, world, original); //string to sort/uniq by

  this.key = this.out('normal'); //bigram/trigram/etc

  this.size = arr.length; //number of occurances

  this.count = 1;
}; //Inherit properties


Gram.prototype = Object.create(Terms.prototype);

Gram.prototype.inc = function () {
  this.count += 1;
};

module.exports = Gram;

},{"../../paths":8}],35:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var getGrams = _dereq_('./getGrams');

var _sort = function sort(r) {
  r.list = r.list.sort(function (a, b) {
    if (a.count > b.count) {
      return -1;
    } //(tie-braker)


    if (a.count === b.count && (a.size > b.size || a.key.length > b.key.length)) {
      return -1;
    }

    return 1;
  });
  return r;
}; //the Ngrams() subset class


var methods = {
  data: function data() {
    return this.list.map(function (ts) {
      return {
        normal: ts.out('normal'),
        count: ts.count,
        size: ts.size
      };
    });
  },
  unigrams: function unigrams() {
    this.list = this.list.filter(function (g) {
      return g.size === 1;
    });
    return this;
  },
  bigrams: function bigrams() {
    this.list = this.list.filter(function (g) {
      return g.size === 2;
    });
    return this;
  },
  trigrams: function trigrams() {
    this.list = this.list.filter(function (g) {
      return g.size === 3;
    });
    return this;
  },
  //default sort the ngrams
  sort: function sort() {
    return _sort(this);
  }
};

var find = function find(r, obj) {
  var sizes = []; //support .ngrams(3), for compat

  if (typeof obj === 'number') {
    obj = {
      n: obj
    };
  }

  obj = obj || {};
  var max = obj.max || 4;

  for (var i = 1; i <= max; i++) {
    sizes.push(i);
  } //only look for bigrams, for example


  if (obj.size) {
    sizes = [obj.size];
  }

  var opts = {
    size: sizes
  }; //fetch them

  var arr = getGrams(r, opts);
  r = new Text(arr); //default sort

  r = _sort(r); //grab top one, or something

  if (obj.n !== undefined) {
    r = r.get(obj.n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./getGrams":33}],36:[function(_dereq_,module,exports){
'use strict';

var Ngrams = _dereq_('./index');

var getGrams = _dereq_('./getGrams');

var StartGrams = function StartGrams(arr, world, original) {
  Ngrams.call(this, arr, world, original);
}; //Inherit properties


StartGrams.prototype = Object.create(Ngrams.prototype); //like an n-gram, but only the startings of matches

StartGrams.find = function (r, n, size) {
  var opts = {
    size: [1, 2, 3, 4],
    edge: 'start'
  }; //only look for bigrams, for example

  if (size) {
    opts.size = [size];
  } //fetch them


  var arr = getGrams(r, opts);
  r = new StartGrams(arr); //default sort

  r.sort(); //grab top one, or something

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = StartGrams;

},{"./getGrams":33,"./index":35}],37:[function(_dereq_,module,exports){
'use strict'; //certain words can't be plural, like 'peace'

var hasPlural = function hasPlural(t) {
  //end quick
  if (!t.tags.Noun) {
    return false;
  }

  if (t.tags.Plural) {
    return true;
  } //is it potentially plural?


  var noPlural = ['Pronoun', 'Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday'];

  for (var i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  } //terms known as un-inflectable, like 'peace'


  if (t.tags.Uncountable === true) {
    return false;
  }

  return true;
};

module.exports = hasPlural;

},{}],38:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Noun = _dereq_('./noun'); //the () subset class


var methods = {
  isPlural: function isPlural() {
    this.list = this.list.filter(function (ts) {
      return ts.isPlural();
    });
    return this;
  },
  hasPlural: function hasPlural() {
    return this.list.map(function (ts) {
      return ts.hasPlural();
    });
  },
  toPlural: function toPlural() {
    this.list.forEach(function (ts) {
      return ts.toPlural();
    });
    return this;
  },
  toSingular: function toSingular(verbose) {
    this.list.forEach(function (ts) {
      return ts.toSingular(verbose);
    });
    return this;
  },
  toPossessive: function toPossessive(verbose) {
    this.list.forEach(function (ts) {
      return ts.toPossessive(verbose);
    });
    return this;
  },
  articles: function articles() {
    return this.list.map(function (ts) {
      return {
        text: ts.out('text'),
        normal: ts.out('normal'),
        article: ts.article()
      };
    });
  }
};

var find = function find(r, n) {
  r = r.clauses();
  r = r.match('#Noun+ (of|by)? the? #Noun+?'); //nouns that we don't want in these results, for weird reasons

  r = r.not('#Pronoun');
  r = r.not('(there|these)');
  r = r.not('(#Month|#WeekDay)'); //allow Durations, Holidays
  // //allow possessives like "spencer's", but not generic ones like,

  r = r.not('(my|our|your|their|her|his)');
  r = r.not('(of|for|by|the)$');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  r.list = r.list.map(function (ts) {
    return new Noun(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./noun":46}],39:[function(_dereq_,module,exports){
'use strict';

var rules = _dereq_('./methods/data/indicators');

var prep = /([a-z]*) (of|in|by|for) [a-z]/;

var hasPlural = _dereq_('./hasPlural');

var knownPlural = {
  i: false,
  he: false,
  she: false,
  we: true,
  they: true
}; //is it potentially plural?

var noPlural = ['Place', 'Value', 'Person', 'Month', 'WeekDay', 'RelativeDay', 'Holiday', 'Possessive']; //first, try to guess based on existing tags

var couldEvenBePlural = function couldEvenBePlural(t) {
  if (hasPlural(t) === false) {
    return false;
  }

  for (var i = 0; i < noPlural.length; i++) {
    if (t.tags[noPlural[i]]) {
      return false;
    }
  }

  return true;
};
/** returns true, false, or null */


var isPlural = function isPlural(t, world) {
  if (t.tags.Plural) {
    return true;
  }

  if (t.tags.Singular) {
    return false;
  }

  var str = t.normal; //whitelist a few easy ones

  if (knownPlural.hasOwnProperty(str) === true) {
    return knownPlural[str];
  } //check given irregulars


  if (world.plurals && world.plurals.hasOwnProperty(str) === true) {
    return false;
  } //check opposite-ones


  if (world.cache.toSingular && world.cache.toSingular.hasOwnProperty(str) === true) {
    return true;
  } //inspect the existing tags to see if a plural is valid


  if (couldEvenBePlural(t) === false) {
    return null;
  } //handle 'mayors of chicago'


  var preposition = str.match(prep);

  if (preposition !== null) {
    str = preposition[1];
  } //check the suffix-type rules for indications


  for (var i = 0; i < rules.plural_indicators.length; i++) {
    if (rules.plural_indicators[i].test(str) === true) {
      return true;
    }
  }

  for (var _i = 0; _i < rules.singular_indicators.length; _i++) {
    if (rules.singular_indicators[_i].test(str) === true) {
      return false;
    }
  } // a fallback 'looks check plural' rule..


  if (/s$/.test(str) === true && /ss$/.test(str) === false && str.length > 3) {
    //needs some lovin'
    return true;
  }

  return false;
};

module.exports = isPlural; // console.log(is_plural('octopus'))

},{"./hasPlural":37,"./methods/data/indicators":41}],40:[function(_dereq_,module,exports){
'use strict'; //chooses an indefinite aricle 'a/an' for a word

var irregulars = {
  'hour': 'an',
  'heir': 'an',
  'heirloom': 'an',
  'honest': 'an',
  'honour': 'an',
  'honor': 'an',
  'uber': 'an' //german u

}; //pronounced letters of acronyms that get a 'an'

var an_acronyms = {
  a: true,
  e: true,
  f: true,
  h: true,
  i: true,
  l: true,
  m: true,
  n: true,
  o: true,
  r: true,
  s: true,
  x: true
}; //'a' regexes

var a_regexs = [/^onc?e/i, //'wu' sound of 'o'
/^u[bcfhjkqrstn][aeiou]/i, // 'yu' sound for hard 'u'
/^eul/i];

var makeArticle = function makeArticle(t) {
  var str = t.normal; //no 'the john smith', but 'a london hotel'

  if (t.tags.Person) {
    return '';
  } //no a/an if it's plural


  if (t.tags.Plural) {
    return 'the';
  } //explicit irregular forms


  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  } //spelled-out acronyms


  var firstLetter = str.substr(0, 1);

  if (t.isAcronym() && an_acronyms.hasOwnProperty(firstLetter)) {
    return 'an';
  } //'a' regexes


  for (var i = 0; i < a_regexs.length; i++) {
    if (a_regexs[i].test(str)) {
      return 'a';
    }
  } //basic vowel-startings


  if (/^[aeiou]/i.test(str)) {
    return 'an';
  }

  return 'a';
};

module.exports = makeArticle;

},{}],41:[function(_dereq_,module,exports){
'use strict'; //similar to plural/singularize rules, but not the same

var plural_indicators = [/(^v)ies$/i, /ises$/i, /ives$/i, /(antenn|formul|nebul|vertebr|vit)ae$/i, /(octop|vir|radi|nucle|fung|cact|stimul)i$/i, /(buffal|tomat|tornad)oes$/i, /(analy|ba|diagno|parenthe|progno|synop|the)ses$/i, /(vert|ind|cort)ices$/i, /(matr|append)ices$/i, /(x|ch|ss|sh|s|z|o)es$/i, /men$/i, /news$/i, /.tia$/i, /(^f)ves$/i, /(lr)ves$/i, /(^aeiouy|qu)ies$/i, /(m|l)ice$/i, /(cris|ax|test)es$/i, /(alias|status)es$/i, /ics$/i]; //similar to plural/singularize rules, but not the same

var singular_indicators = [/(ax|test)is$/i, /(octop|vir|radi|nucle|fung|cact|stimul)us$/i, /(octop|vir)i$/i, /(rl)f$/i, /(alias|status)$/i, /(bu)s$/i, /(al|ad|at|er|et|ed|ad)o$/i, /(ti)um$/i, /(ti)a$/i, /sis$/i, /(?:(^f)fe|(lr)f)$/i, /hive$/i, /(^aeiouy|qu)y$/i, /(x|ch|ss|sh|z)$/i, /(matr|vert|ind|cort)(ix|ex)$/i, /(m|l)ouse$/i, /(m|l)ice$/i, /(antenn|formul|nebul|vertebr|vit)a$/i, /.sis$/i, /^(?!talis|.*hu)(.*)man$/i];
module.exports = {
  singular_indicators: singular_indicators,
  plural_indicators: plural_indicators
};

},{}],42:[function(_dereq_,module,exports){
"use strict";

//patterns for turning 'bus' to 'buses'
module.exports = [[/(ax|test)is$/i, '$1es'], [/(octop|vir|radi|nucle|fung|cact|stimul)us$/i, '$1i'], [/(octop|vir)i$/i, '$1i'], [/(kn|l|w)ife$/i, '$1ives'], [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i, '$1ves'], [/^(dwar|handkerchie|hoo|scar|whar)f$/i, '$1ves'], [/(alias|status)$/i, '$1es'], [/(bu)s$/i, '$1ses'], [/(al|ad|at|er|et|ed|ad)o$/i, '$1oes'], [/([ti])um$/i, '$1a'], [/([ti])a$/i, '$1a'], [/sis$/i, 'ses'], [/(hive)$/i, '$1s'], [/([^aeiouy]|qu)y$/i, '$1ies'], [/(x|ch|ss|sh|s|z)$/i, '$1es'], [/(matr|vert|ind|cort)(ix|ex)$/i, '$1ices'], [/([m|l])ouse$/i, '$1ice'], [/([m|l])ice$/i, '$1ice'], [/^(ox)$/i, '$1en'], [/^(oxen)$/i, '$1'], [/(quiz)$/i, '$1zes'], [/(antenn|formul|nebul|vertebr|vit)a$/i, '$1ae'], [/(sis)$/i, 'ses'], [/^(?!talis|.*hu)(.*)man$/i, '$1men'], [/(.*)/i, '$1s']].map(function (a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],43:[function(_dereq_,module,exports){
"use strict";

//patterns for turning 'dwarves' to 'dwarf'
module.exports = [[/([^v])ies$/i, '$1y'], [/ises$/i, 'isis'], [/(kn|[^o]l|w)ives$/i, '$1ife'], [/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i, '$1f'], [/^(dwar|handkerchie|hoo|scar|whar)ves$/i, '$1f'], [/(antenn|formul|nebul|vertebr|vit)ae$/i, '$1a'], [/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i, '$1us'], [/(buffal|tomat|tornad)(oes)$/i, '$1o'], // [/(analy|diagno|parenthe|progno|synop|the)ses$/i, '$1sis'],
[/(..[aeiou]s)es$/i, '$1'], [/(vert|ind|cort)(ices)$/i, '$1ex'], [/(matr|append)(ices)$/i, '$1ix'], [/(x|ch|ss|sh|z|o)es$/i, '$1'], [/men$/i, 'man'], [/(n)ews$/i, '$1ews'], [/([ti])a$/i, '$1um'], [/([^aeiouy]|qu)ies$/i, '$1y'], [/(s)eries$/i, '$1eries'], [/(m)ovies$/i, '$1ovie'], [/([m|l])ice$/i, '$1ouse'], [/(cris|ax|test)es$/i, '$1is'], [/(alias|status)es$/i, '$1'], [/(ss)$/i, '$1'], [/(ics)$/i, '$1'], [/s$/i, '']].map(function (a) {
  return {
    reg: a[0],
    repl: a[1]
  };
});

},{}],44:[function(_dereq_,module,exports){
'use strict'; // const irregulars = require('../../../lexicon/uncompressed/irregularPlurals').toPlural;

var pluralRules = _dereq_('./data/pluralRules'); //turn 'shoe' into 'shoes'


var pluralize = function pluralize(str, world) {
  var irregulars = world.plurals || {}; //irregular

  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  } //regular rule-based inflector


  for (var i = 0; i < pluralRules.length; i++) {
    if (pluralRules[i].reg.test(str) === true) {
      return str.replace(pluralRules[i].reg, pluralRules[i].repl);
    }
  }

  return null;
};

module.exports = pluralize;

},{"./data/pluralRules":42}],45:[function(_dereq_,module,exports){
'use strict';

var singleRules = _dereq_('./data/singleRules'); //turn 'shoes' into 'shoe'


var toSingle = function toSingle(str, world) {
  //reverse it //TODO: cache in world object somewhere
  var irregulars = world.cache.toSingular || {}; //check irregulars

  if (irregulars.hasOwnProperty(str) === true) {
    return irregulars[str];
  }

  if (world && world.plurals) {
    //given irregulars
    var keys = Object.keys(world.plurals);

    for (var i = 0; i < keys.length; i++) {
      if (world.plurals[keys[i]] === str) {
        return keys[i];
      }
    }
  } //inflect first word of preposition-phrase


  if (/([a-z]*) (of|in|by|for) [a-z]/.test(str) === true) {
    var first = (str.match(/^([a-z]*) (of|in|by|for) [a-z]/) || [])[1];

    if (first) {
      var better_first = toSingle(first); //recursive

      return better_first + str.replace(first, '');
    }
  } //regular rule-based inflector


  for (var _i = 0; _i < singleRules.length; _i++) {
    if (singleRules[_i].reg.test(str) === true) {
      return str.replace(singleRules[_i].reg, singleRules[_i].repl);
    }
  }

  return null;
};

module.exports = toSingle; // console.log(toSingle('days'))

},{"./data/singleRules":43}],46:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var _hasPlural = _dereq_('./hasPlural');

var _isPlural = _dereq_('./isPlural');

var _toPossessive = _dereq_('./toPossessive');

var makeArticle = _dereq_('./makeArticle');

var pluralize = _dereq_('./methods/pluralize');

var singularize = _dereq_('./methods/singularize');

var methods = {
  article: function article() {
    return makeArticle(this.main);
  },
  isPlural: function isPlural() {
    return _isPlural(this.main, this.world);
  },
  hasPlural: function hasPlural() {
    return _hasPlural(this.main);
  },
  toPlural: function toPlural(verbose) {
    var t = this.main;

    if (_hasPlural(t) && !_isPlural(t, this.world)) {
      t.text = pluralize(t.normal, this.world, verbose) || t.text;
      t.unTag('Singular', 'toPlural');
      t.tag('Plural', 'toPlural');
    }

    return this;
  },
  toSingular: function toSingular(verbose) {
    var t = this.main;

    if (_isPlural(t, this.world)) {
      t.text = singularize(t.normal, this.world, verbose) || t.text;
      t.unTag('Plural', 'toSingular');
      t.tag('Singular', 'toSingular');
    }

    return this;
  },
  toPossessive: function toPossessive() {
    var t = this.main;

    if (t.tags.Possessive) {
      return this;
    }

    t = _toPossessive(t);
    return this;
  },
  data: function data() {
    var t = this.main;
    var singular = t.text;

    if (_isPlural(t, this.world)) {
      singular = singularize(t.normal, this.world) || t.text;
    }

    var plural = t.text;

    if (_hasPlural(t) && !_isPlural(t, this.world)) {
      plural = pluralize(t.normal, this.world) || t.text;
    } //support 'mayors of chicago'


    var qualifier = '';

    if (this.qualifier) {
      qualifier = this.qualifier.out('normal');
      singular += ' ' + qualifier;
      plural += ' ' + qualifier;
    }

    return {
      text: this.out('text'),
      normal: this.out('normal'),
      article: this.article(),
      main: t.normal,
      qualifier: qualifier,
      singular: singular,
      plural: plural
    };
  }
};

var Noun = function Noun(arr, world, refText) {
  Terms.call(this, arr, world, refText); //support 'mayor of chicago' as one noun-phrase

  this.main = this.match('[#Noun+] (of|by|for)');

  if (this.main.found) {
    this.main = this.main.list[0].terms[0];
  } else {
    this.main = this.terms[this.terms.length - 1];
  } //'of chicago'


  this.qualifier = this.match(this.main.normal + ' [.+]').list[0];
};

Noun.prototype = Object.create(Terms.prototype);
Object.keys(methods).forEach(function (k) {
  Noun.prototype[k] = methods[k];
});
module.exports = Noun;

},{"../../paths":8,"./hasPlural":37,"./isPlural":39,"./makeArticle":40,"./methods/pluralize":44,"./methods/singularize":45,"./toPossessive":47}],47:[function(_dereq_,module,exports){
"use strict";

var exceptions = {
  he: 'his',
  she: 'hers',
  they: 'theirs',
  we: 'ours',
  i: 'mine',
  you: 'yours',
  her: 'hers',
  their: 'theirs',
  our: 'ours',
  my: 'mine',
  your: 'yours'
}; // turn "David" to "David's"

var toPossessive = function toPossessive(t) {
  t.tag('Possessive', 'toPossessive'); // exceptions

  if (exceptions.hasOwnProperty(t.normal)) {
    t.text = exceptions[t.normal];
    return t;
  } // flanders'


  if (/s$/.test(t.normal)) {
    t.text += '\'';
    return t;
  } //normal form:


  t.text += '\'s';
  return t;
};

module.exports = toPossessive;

},{}],48:[function(_dereq_,module,exports){
'use strict'; // make a statistical assumption about the gender of the person based on their given name
// used for pronoun resolution only.
// not intended for classification, or discrimination of people.

var gender = function gender(firstName) {
  if (!firstName) {
    return null;
  } //statistical guesses


  if (/.(i|ee|[a|e]y|a)$/.test(firstName) === true) {
    //this is almost-always true
    return 'Female';
  }

  if (/[ou]$/.test(firstName) === true) {
    //if it ends in a 'oh or uh', male
    return 'Male';
  }

  if (/(nn|ll|tt)/.test(firstName) === true) {
    //if it has double-consonants, female
    return 'Female';
  } // name not recognized, or recognized as of indeterminate gender


  return null;
};

module.exports = gender;

},{}],49:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Person = _dereq_('./person'); //this is used for pronoun and honorifics, and not intented for more-than grammatical use (see #117)
//the () subset class


var methods = {
  pronoun: function pronoun() {
    return this.list.map(function (ts) {
      return ts.pronoun();
    });
  },
  firstNames: function firstNames() {
    return this.match('#FirstName');
  },
  lastNames: function lastNames() {
    return this.match('#LastName');
  }
};

var find = function find(r, n) {
  var people = r.clauses();
  people = people.match('#Person+');

  if (typeof n === 'number') {
    people = people.get(n);
  }

  people.list = people.list.map(function (ts) {
    return new Person(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return people;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./person":50}],50:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var _guessGender = _dereq_('./guessGender');

var Person = function Person(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  this.firstName = this.match('#FirstName+');
  this.middleName = this.match('#Acronym+');
  this.nickName = this.match('#NickName+');
  this.honorifics = this.match('#Honorific');
  this.lastName = this.match('#LastName+'); //assume first-last

  if (!this.firstName.found && this.length > 1) {
    var m = this.not('(#Acronym|#Honorific)');
    this.firstName = m.first();
    this.lastName = m.last();
  }

  return this;
}; //Inherit properties


Person.prototype = Object.create(Terms.prototype);
var methods = {
  data: function data() {
    return {
      text: this.out('text'),
      normal: this.out('normal'),
      firstName: this.firstName.out('normal'),
      middleName: this.middleName.out('normal'),
      nickName: this.nickName.out('normal'),
      lastName: this.lastName.out('normal'),
      genderGuess: this.guessGender(),
      pronoun: this.pronoun(),
      honorifics: this.honorifics.out('array')
    };
  },
  guessGender: function guessGender() {
    //try known honorifics
    if (this.honorifics.match('(mr|mister|sr|sir|jr)').found) {
      return 'Male';
    }

    if (this.honorifics.match('(mrs|miss|ms|misses|mme|mlle)').found) {
      return 'Female';
    } //try known first-names


    if (this.firstName.match('#MaleName').found) {
      return 'Male';
    }

    if (this.firstName.match('#FemaleName').found) {
      return 'Female';
    } //look-for regex clues


    var str = this.firstName.out('normal');
    return _guessGender(str);
  },
  pronoun: function pronoun() {
    var str = this.firstName.out('normal');
    var g = this.guessGender(str);

    if (g === 'Male') {
      return 'he';
    }

    if (g === 'Female') {
      return 'she';
    }

    return 'they';
  },
  root: function root() {
    var first = this.firstName.out('root');
    var last = this.lastName.out('root');

    if (first && last) {
      return first + ' ' + last;
    }

    return last || first || this.out('root');
  }
};
Object.keys(methods).forEach(function (k) {
  Person.prototype[k] = methods[k];
});
module.exports = Person;

},{"../../paths":8,"./guessGender":48}],51:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text'); // const Terms = require('../../paths').Terms;


var methods = {
  //remove the 's on the end of the word
  strip: function strip() {
    this.list.forEach(function (ts) {
      var t = ts.terms[ts.terms.length - 1];
      t.text = t.text.replace(/'s$/, '');
      t.unTag('Possessive', '.strip()');
    });
    return this;
  }
};

var find = function find(r, n) {
  r = r.match('#Possessive+');
  r = r.splitAfter('#Comma');

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192}],52:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Sentence = _dereq_('./sentence'); //the Sentences() subset class


var methods = {
  /** conjugate the main/first verb*/
  toPastTense: function toPastTense() {
    this.list = this.list.map(function (ts) {
      ts = ts.toPastTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toPresentTense: function toPresentTense() {
    this.list = this.list.map(function (ts) {
      ts = ts.toPresentTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toFutureTense: function toFutureTense() {
    this.list = this.list.map(function (ts) {
      ts = ts.toFutureTense();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toContinuous: function toContinuous() {
    this.list = this.list.map(function (ts) {
      ts = ts.toContinuous();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },

  /** negative/positive */
  toNegative: function toNegative() {
    this.list = this.list.map(function (ts) {
      ts = ts.toNegative();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },
  toPositive: function toPositive() {
    this.list = this.list.map(function (ts) {
      ts = ts.toPositive();
      return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
    });
    return this;
  },

  /** look for 'was _ by' patterns */
  isPassive: function isPassive() {
    this.list = this.list.filter(function (ts) {
      return ts.isPassive();
    });
    return this;
  },
  //return only questions
  isQuestion: function isQuestion() {
    // this.list = this.list.filter(ts => {
    //   return ts.isQuestion();
    // });
    return this.questions();
  },

  /** add a word to the start */
  prepend: function prepend(str) {
    this.list = this.list.map(function (ts) {
      return ts.prepend(str);
    });
    return this;
  },

  /** add a word to the end */
  append: function append(str) {
    this.list = this.list.map(function (ts) {
      return ts.append(str);
    });
    return this;
  },

  /** convert between question/statement/exclamation*/
  toExclamation: function toExclamation() {
    this.list.forEach(function (ts) {
      ts.setPunctuation('!');
    });
    return this;
  },
  toQuestion: function toQuestion() {
    this.list.forEach(function (ts) {
      ts.setPunctuation('?');
    });
    return this;
  },
  toStatement: function toStatement() {
    this.list.forEach(function (ts) {
      ts.setPunctuation('.');
    });
    return this;
  }
};

var find = function find(r, n) {
  r = r.all();

  if (typeof n === 'number') {
    r = r.get(n);
  }

  r.list = r.list.map(function (ts) {
    return new Sentence(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./sentence":54}],53:[function(_dereq_,module,exports){
'use strict'; //is this sentence asking a question?

var isQuestion = function isQuestion(ts) {
  var endPunct = ts.getPunctuation();
  var clauses = ts.match('*').splitAfter('#Comma');

  if (/\?/.test(endPunct) === true) {
    return true;
  } // Has ellipsis at the end means it's probably not a question
  // e.g., Is this just fantasy...


  if (/\.\.$/.test(ts.out('text'))) {
    return false;
  } // Starts with question word, but has a comma, so probably not a question
  // e.g., Why are we caught in a land slide, no escape from reality


  if (ts.has('^#QuestionWord') && ts.has('#Comma')) {
    return false;
  } // Starts with a #QuestionWord
  // e.g., What open your eyes look up to the skies and see


  if (ts.has('^#QuestionWord')) {
    return true;
  } // Second word is a #QuestionWord
  // e.g., I'm what a poor boy
  // case ts.has('^\w+\s#QuestionWord'):
  // return true;
  // is it, do you - start of sentence
  // e.g., Do I need no sympathy


  if (ts.has('^(do|does|did|is|was|can|could|will|would|may) #Noun')) {
    return true;
  } // these are a little more loose..
  // e.g., Must I be come easy come easy go


  if (ts.has('^(have|must) you')) {
    return true;
  } // Clause starts with a question word
  // e.g., Anyway the wind blows, what doesn't really matter to me


  if (clauses.has('^#QuestionWord')) {
    return true;
  } //is wayne gretskzy alive


  if (clauses.has('(do|does|is|was) #Noun+ #Adverb? (#Adjective|#Infinitive)$')) {
    return true;
  } // Probably not a question


  return false;
};

module.exports = isQuestion;

},{}],54:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var _toNegative = _dereq_('./toNegative');

var _toPositive = _dereq_('./toPositive');

var Verb = _dereq_('../verbs/verb');

var insert = _dereq_('./smartInsert'); //decide on main subject-verb-object


var parse = function parse(s) {
  //strip conditions first
  var conditions = s.match('#Condition');
  var tmp = s.not('#Condition'); //choose the verb first

  var verb = tmp.match('#VerbPhrase+').first(); //this should be much smarter

  var vb = verb.out('normal'); //get subj noun left-of the verb

  var subject = tmp.match('#Determiner? #Adjective+? #Noun ' + vb).first().not('#VerbPhrase'); //get obj noun right-of the verb

  var object = tmp.match(vb + ' #Preposition? #Determiner? #Noun').first().not('#VerbPhrase');
  s.conditions = conditions;
  s.subject = subject;
  s.verb = verb;
  s.object = object;

  if (s.verb.found) {
    s.verb = new Verb(s.verb.list[0].terms, s.world, s.refText, s.refTerms);
  }

  return s;
};

var fixContraction = function fixContraction(contr) {
  if (contr.found) {
    contr.contractions().expand();
  }
};

var killContraction = function killContraction(s) {
  s.terms = s.terms.filter(function (t) {
    if (t.silent_term) {
      if (t.silent_term === 'am' || t.silent_term === 'will' || t.silent_term === 'did') {
        return false;
      }

      t.text = t.silent_term;
      t.silent_term = null;
      t.unTag('Contraction');

      if (t.tags.TitleCase === true) {
        t.toTitleCase();
      }
    }

    return true;
  });
}; //if the subject of thr sentence is plural, use infinitive form of verb
// (he goes / i go)


var useInfinitive = function useInfinitive(s) {
  if (s.subject.found && s.subject.has('(i|we)')) {
    return true;
  }

  return false;
};

var methods = {
  /** inflect the main/first noun*/
  toSingular: function toSingular() {
    var nouns = this.match('#Noun').match('!#Pronoun').firstTerm();
    nouns.things().toSingular();
    return this;
  },
  toPlural: function toPlural() {
    var nouns = this.match('#Noun').match('!#Pronoun').firstTerm();
    nouns.things().toPlural();
    return this;
  },

  /** find the first important verbPhrase. returns a Term object */
  mainVerb: function mainVerb() {
    parse(this); //re-parse

    if (this.verb.found) {
      return this.verb;
    }

    return null;
  },

  /** sentence tense conversion**/
  toPastTense: function toPastTense() {
    var verb = this.mainVerb();

    if (verb) {
      //this is really ugly..
      var start = verb.out('root');
      verb.toPastTense(); //support "i'm going"

      var contr = this.match('#Contraction ' + start);
      fixContraction(contr);
      var end = verb.out('root'); // this.replace(start, end)

      var r = this.parentTerms.replace(start, end);
      return r;
    }

    return this;
  },
  toPresentTense: function toPresentTense() {
    var verb = this.mainVerb();

    if (verb) {
      var start = verb.out('normal'); //plural/singular stuff

      if (useInfinitive(this) === true) {
        if (this.has('(am|will|did) ' + start)) {
          killContraction(this);
        }

        verb.toInfinitive(); //irregular "i am"
        // this.debug();
        // if (this.has('i #Adverb? is')) {
        //   this.replace(' #Adverb? [is]', 'am');
        // }
      } else {
        verb.toPresentTense();
        var contr = this.match('#Contraction ' + start);
        fixContraction(contr);
      } //support "i'm going"


      var end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }

    return this;
  },
  toFutureTense: function toFutureTense() {
    var verb = this.mainVerb();

    if (verb) {
      var start = verb.clone(); //.out('root');

      verb.toFutureTense(); //support "i'm going"

      var contr = this.match('#Contraction ' + start.out('normal'));
      fixContraction(contr);
      var end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }

    return this;
  },
  toContinuous: function toContinuous() {
    var verb = this.mainVerb();

    if (verb) {
      var start = verb.clone(); //.out('root');
      //'is walking' or 'are walking'?
      // let aux = 'is';
      // if (useInfinitive(this)) {
      //   aux = 'are';
      // }

      verb.toGerund(); // verb.insertBefore(aux);
      //support "i'm going"

      var contr = this.match('#Contraction ' + start.out('normal'));
      fixContraction(contr);
      var end = verb.out('normal');
      return this.parentTerms.replace(start, end);
    }

    return this;
  },

  /** negation **/
  isNegative: function isNegative() {
    return this.match('#Negative').list.length === 1;
  },
  toNegative: function toNegative() {
    if (this.isNegative()) {
      return this;
    }

    return _toNegative(this);
  },
  toPositive: function toPositive() {
    if (!this.isNegative()) {
      return this;
    }

    return _toPositive(this);
  },

  /** smarter insert methods*/
  append: function append(str) {
    return insert.append(this, str);
  },
  prepend: function prepend(str) {
    return insert.prepend(this, str);
  },

  /** look for 'was _ by' patterns */
  isPassive: function isPassive() {
    return this.match('was #Adverb? #PastTense #Adverb? by').found; //haha
  }
};

var Sentence = function Sentence(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parse(this);
}; //Terms inheritence


Sentence.prototype = Object.create(Terms.prototype); //add-in methods

Object.keys(methods).forEach(function (k) {
  Sentence.prototype[k] = methods[k];
});
module.exports = Sentence;

},{"../../paths":8,"../verbs/verb":94,"./smartInsert":55,"./toNegative":56,"./toPositive":57}],55:[function(_dereq_,module,exports){
'use strict';

var hasCapital = /^[A-Z]/; //sticking words at the start sentence-sensitive

var prepend = function prepend(ts, str) {
  var firstTerm = ts.terms[0];
  ts.insertAt(0, str); //handle titlecase of first-word

  if (hasCapital.test(firstTerm.text)) {
    //is it titlecased because it should be?
    if (firstTerm.needsTitleCase() === false) {
      firstTerm.toLowerCase();
    }

    var newTerm = ts.terms[0];
    newTerm.toTitleCase();
  }

  return ts;
}; //sticking words on end sentence-sensitive


var append = function append(ts, str) {
  var endTerm = ts.terms[ts.terms.length - 1]; //move the sentence punctuation to the end

  var punct = ts.getPunctuation();

  if (punct) {
    endTerm.killPunctuation();
  }

  ts.insertAt(ts.terms.length, str);
  var newTerm = ts.terms[ts.terms.length - 1];

  if (punct) {
    newTerm.text += punct;
  } //move over sentence-ending whitespace too


  if (endTerm.whitespace.after) {
    newTerm.whitespace.after = endTerm.whitespace.after;
    endTerm.whitespace.after = '';
  }

  return ts;
};

module.exports = {
  append: append,
  prepend: prepend
};

},{}],56:[function(_dereq_,module,exports){
'use strict'; //these terms are nicer ways to negate a sentence
//ie. john always walks -> john always doesn't walk

var logicalNegate = {
  everyone: 'no one',
  everybody: 'nobody',
  someone: 'no one',
  somebody: 'nobody',
  // everything:"nothing",
  always: 'never'
}; //different rule for i/we/they/you + infinitive
//that is, 'i walk' -> 'i don\'t walk', not 'I not walk'

var toNegative = function toNegative(ts) {
  var lg = ts.match('(everyone|everybody|someone|somebody|always)').first();

  if (lg.found && logicalNegate[lg.out('normal')]) {
    var found = lg.out('normal'); // ts = ts.replace(found, logicalNegate[found]);

    ts = ts.match(found).replaceWith(logicalNegate[found]).list[0];
    return ts.parentTerms;
  } //negate the main verb of the sentence


  var vb = ts.mainVerb();

  if (vb) {
    vb.toNegative();
  }

  return ts;
};

module.exports = toNegative;

},{}],57:[function(_dereq_,module,exports){
'use strict'; //ie. john never walks -> john always walks
//nobody/noone are ambiguous logically (somebody? / everybody?)

var logical = {
  'never': 'always',
  'nothing': 'everything'
};

var toPositive = function toPositive(ts) {
  var m = ts.match('(never|nothing)').first();

  if (m.found) {
    var str = m.out('normal');

    if (logical[str]) {
      ts = ts.match(str).replaceWith(logical[str], true).list[0];
      return ts.parentTerms;
    }
  } //otherwise just remove 'not'


  ts.delete('#Negative');
  return ts;
};

module.exports = toPositive;

},{}],58:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Terms = _dereq_('../../paths').Terms; //the Terms() subset class
//this is just a wrapper around the actual Term class,
//which is buried in `ts.terms[0]`


var methods = {
  data: function data() {
    return this.list.map(function (ts) {
      var t = ts.terms[0];
      return {
        spaceBefore: t.whitespace.before,
        text: t.text,
        spaceAfter: t.whitespace.after,
        normal: t.normal,
        implicit: t.silent_term,
        bestTag: t.bestTag(),
        tags: Object.keys(t.tags)
      };
    });
  }
};

var find = function find(r, n) {
  var list = []; //make a Terms Object for every Term

  r.list.forEach(function (ts) {
    ts.terms.forEach(function (t) {
      list.push(new Terms([t], ts.world, r));
    });
  });
  r = new Text(list, r.world, r.parent);

  if (typeof n === 'number') {
    r = r.get(n);
  }

  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../paths":8,"../../text":192}],59:[function(_dereq_,module,exports){
"use strict";

var numOrdinal = _dereq_('./numOrdinal');

var _textOrdinal = _dereq_('./textOrdinal');

var textCardinal = _dereq_('./textCardinal');

var niceNumber = _dereq_('./niceNumber'); //make all the number formats


var fmt = {
  nice: function nice(num) {
    return niceNumber(num);
  },
  ordinal: function ordinal(num) {
    return numOrdinal(num);
  },
  cardinal: function cardinal(num) {
    return String(num);
  },
  niceOrdinal: function niceOrdinal(num) {
    num = numOrdinal(num);
    num = niceNumber(num);
    return num;
  },
  text: function text(num) {
    return textCardinal(num).join(' ');
  },
  textOrdinal: function textOrdinal(num) {
    return _textOrdinal(num);
  }
};
module.exports = fmt;

},{"./niceNumber":60,"./numOrdinal":61,"./textCardinal":62,"./textOrdinal":63}],60:[function(_dereq_,module,exports){
'use strict'; //put a comma or two in

var niceNumber = function niceNumber(num) {
  if (!num && num !== 0) {
    return null;
  }

  num = String(num);
  var x = num.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
};

module.exports = niceNumber;

},{}],61:[function(_dereq_,module,exports){
'use strict';

var toString = _dereq_('./toString'); //turn a number like 5 into an ordinal like 5th


var numOrdinal = function numOrdinal(num) {
  if (!num && num !== 0) {
    return null;
  } //the teens are all 'th'


  var tens = num % 100;

  if (tens > 10 && tens < 20) {
    return String(num) + 'th';
  } //the rest of 'em


  var mapping = {
    0: 'th',
    1: 'st',
    2: 'nd',
    3: 'rd'
  };
  var str = toString(num);
  var last = str.slice(str.length - 1, str.length);

  if (mapping[last]) {
    str += mapping[last];
  } else {
    str += 'th';
  }

  return str;
};

module.exports = numOrdinal;

},{"./toString":64}],62:[function(_dereq_,module,exports){
'use strict';

var toString = _dereq_('./toString'); // turns an integer/float into a textual number, like 'fifty-five'


var tens_mapping = [['ninety', 90], ['eighty', 80], ['seventy', 70], ['sixty', 60], ['fifty', 50], ['forty', 40], ['thirty', 30], ['twenty', 20]];
var ones_mapping = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var sequence = [[1e24, 'septillion'], [1e21, 'sextillion'], [1e18, 'quintillion'], [1e15, 'quadrillion'], [1e12, 'trillion'], [1e9, 'billion'], [1e8, 'hundred million'], [1e6, 'million'], [100000, 'hundred thousand'], [1000, 'thousand'], [100, 'hundred'], [1, 'one']]; //turn number into an array of magnitudes, like [[5, million], [2, hundred]]

var breakdown_magnitudes = function breakdown_magnitudes(num) {
  var working = num;
  var have = [];
  sequence.forEach(function (a) {
    if (num >= a[0]) {
      var howmany = Math.floor(working / a[0]);
      working -= howmany * a[0];

      if (howmany) {
        have.push({
          unit: a[1],
          count: howmany
        });
      }
    }
  });
  return have;
}; //turn numbers from 100-0 into their text


var breakdown_hundred = function breakdown_hundred(num) {
  var arr = [];

  if (num > 100) {
    return arr; //something bad happened..
  }

  for (var i = 0; i < tens_mapping.length; i++) {
    if (num >= tens_mapping[i][1]) {
      num -= tens_mapping[i][1];
      arr.push(tens_mapping[i][0]);
    }
  } //(hopefully) we should only have 20-0 now


  if (ones_mapping[num]) {
    arr.push(ones_mapping[num]);
  }

  return arr;
};
/** print-out 'point eight nine'*/


var handle_decimal = function handle_decimal(num) {
  var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var arr = []; //parse it out like a string, because js math is such shit

  var str = toString(num);
  var decimal = str.match(/\.([0-9]+)/);

  if (!decimal || !decimal[0]) {
    return arr;
  }

  arr.push('point');
  var decimals = decimal[0].split('');

  for (var i = 0; i < decimals.length; i++) {
    arr.push(names[decimals[i]]);
  }

  return arr;
};
/** turns an integer into a textual number */


var to_text = function to_text(num) {
  //big numbers, north of sextillion, aren't gonna work well..
  //keep them small..
  if (num > 1e21) {
    return [String(num)];
  }

  var arr = []; //handle negative numbers

  if (num < 0) {
    arr.push('negative');
    num = Math.abs(num);
  } //break-down into units, counts


  var units = breakdown_magnitudes(num); //build-up the string from its components

  for (var i = 0; i < units.length; i++) {
    var unit_name = units[i].unit;

    if (unit_name === 'one') {
      unit_name = ''; //put an 'and' in here

      if (arr.length > 1) {
        arr.push('and');
      }
    }

    arr = arr.concat(breakdown_hundred(units[i].count));
    arr.push(unit_name);
  } //also support decimals - 'point eight'


  arr = arr.concat(handle_decimal(num)); //remove empties

  arr = arr.filter(function (s) {
    return s;
  });

  if (arr.length === 0) {
    arr[0] = '';
  }

  return arr;
};

module.exports = to_text; // console.log(to_text(-1000.8));

},{"./toString":64}],63:[function(_dereq_,module,exports){
'use strict';

var textValue = _dereq_('./textCardinal');

var ordinalWord = _dereq_('../../../world/more-data/numbers').toOrdinal; //


var textOrdinal = function textOrdinal(num) {
  var words = textValue(num); //convert the last number to an ordinal

  var last = words[words.length - 1];
  words[words.length - 1] = ordinalWord[last] || last;
  return words.join(' ');
};

module.exports = textOrdinal;

},{"../../../world/more-data/numbers":220,"./textCardinal":62}],64:[function(_dereq_,module,exports){
"use strict";

//turn big numbers, like 2.3e+22, into a tonne of 0's
var numToString = function numToString(n) {
  if (n < 1000000) {
    return String(n);
  }

  var str = n.toFixed(0);

  if (str.indexOf('e+') === -1) {
    return str;
  }

  return str.replace('.', '').split('e+').reduce(function (p, b) {
    return p + Array(b - p.length + 2).join(0);
  });
};

module.exports = numToString; // console.log(numToString(2.5e+22));

},{}],65:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Value = _dereq_('./value');

var parse = _dereq_('./parse'); //the Values() subset class


var methods = {
  noDates: function noDates() {
    return this.not('#Date');
  },
  noUnits: function noUnits() {
    return this.not('#Unit');
  },
  units: function units() {
    return this.match('#Unit+');
  },

  /** five -> 5 */
  numbers: function numbers() {
    return this.list.map(function (ts) {
      return ts.number();
    });
  },

  /** five -> '5' */
  toNumber: function toNumber() {
    this.list = this.list.map(function (ts) {
      return ts.toNumber();
    });
    return this;
  },

  /**5 -> 'five' */
  toText: function toText() {
    this.list = this.list.map(function (ts) {
      return ts.toText();
    });
    return this;
  },

  /**5th -> 5 */
  toCardinal: function toCardinal() {
    this.list = this.list.map(function (ts) {
      return ts.toCardinal();
    });
    return this;
  },

  /**5 -> 5th */
  toOrdinal: function toOrdinal() {
    this.list = this.list.map(function (ts) {
      return ts.toOrdinal();
    });
    return this;
  },

  /**5900 -> 5,900 */
  toNice: function toNice() {
    this.list = this.list.map(function (ts) {
      return ts.toNice();
    });
    return this;
  },

  /**seven === 7th */
  isEqual: function isEqual(num) {
    num = parse(num);
    this.list = this.list.filter(function (ts) {
      return num !== null && ts.number() === num;
    });
    return this;
  },

  /**eight > 7th */
  greaterThan: function greaterThan(num) {
    num = parse(num);
    this.list = this.list.filter(function (ts) {
      return num !== null && ts.number() > num;
    });
    return this;
  },

  /**five < 7th */
  lessThan: function lessThan(num) {
    num = parse(num);
    this.list = this.list.filter(function (ts) {
      return num !== null && ts.number() < num;
    });
    return this;
  },
  between: function between(min, max) {
    if (min === undefined || max === undefined) {
      return this;
    }

    min = parse(min);
    max = parse(max);
    this.list = this.list.filter(function (ts) {
      var n = ts.number();
      return n > min && n < max;
    });
    return this;
  },

  /**seven + 2 = 'nine' */
  add: function add(n) {
    this.list = this.list.map(function (ts) {
      return ts.add(n);
    });
    return this;
  },

  /**seven - 2 = 'five' */
  subtract: function subtract(n) {
    this.list = this.list.map(function (ts) {
      return ts.subtract(n);
    });
    return this;
  },

  /**seven -> 'eight' */
  increment: function increment() {
    this.list = this.list.map(function (ts) {
      return ts.add(1);
    });
    return this;
  },

  /**seven -> 'eight' */
  decrement: function decrement() {
    this.list = this.list.map(function (ts) {
      return ts.subtract(1);
    });
    return this;
  }
};

var find = function find(r, n) {
  var tens = 'twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|fourty';
  var teens = 'eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen';
  r = r.match('#Value+ #Unit?'); // r = r.match('#Value+ #Unit?');
  //"50 83"

  if (r.has('#NumericValue #NumericValue')) {
    //a comma may mean two numbers
    if (r.has('#Value #Comma #Value')) {
      r.splitAfter('#Comma');
    } else {
      r.splitAfter('#NumericValue');
    }
  } //three-length


  if (r.has('#Value #Value #Value') && !r.has('#Multiple')) {
    //twenty-five-twenty
    if (r.has('(' + tens + ') #Cardinal #Cardinal')) {
      r.splitAfter('(' + tens + ') #Cardinal');
    }
  } //two-length ones


  if (r.has('#Value #Value')) {
    //june 21st 1992 is two seperate values
    if (r.has('#NumericValue #NumericValue')) {
      r.splitOn('#Year');
    } //sixty fifteen


    if (r.has('(' + tens + ') (' + teens + ')')) {
      r.splitAfter('(' + tens + ')');
    } //"72 82"


    var double = r.match('#Cardinal #Cardinal');

    if (double.found && !r.has('(point|decimal)')) {
      //not 'two hundred'
      if (!double.has('#Cardinal (#Multiple|point|decimal)')) {
        //one proper way, 'twenty one', or 'hundred one'
        if (!double.has('(' + tens + ') #Cardinal') && !double.has('#Multiple #Value')) {
          r.splitAfter(double.terms(0).out('normal'));
        }
      }
    } //seventh fifth


    if (r.match('#Ordinal #Ordinal').match('#TextValue').found && !r.has('#Multiple')) {
      //the one proper way, 'twenty first'
      if (!r.has('(' + tens + ') #Ordinal')) {
        r.splitAfter('#Ordinal');
      }
    } //fifth five


    if (r.has('#Ordinal #Cardinal')) {
      r.splitBefore('#Cardinal+');
    } //five 2017 (support '5 hundred', and 'twenty 5'


    if (r.has('#TextValue #NumericValue') && !r.has('(' + tens + '|#Multiple)')) {
      r.splitBefore('#NumericValue+');
    }
  } //5-8


  if (r.has('#NumberRange')) {
    r.splitAfter('#NumberRange');
  }

  if (typeof n === 'number') {
    r = r.get(n);
  }

  var world = r.world();
  r.list = r.list.map(function (ts) {
    return new Value(ts.terms, world, ts.refText, ts.refTerms);
  });
  return r;
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./parse":66,"./value":74}],66:[function(_dereq_,module,exports){
'use strict';

var parseText = _dereq_('./parseText'); // 2.5, $5.50, 3,432, etc -


var numeric = /^-?(\$|€|¥|£)?\.?[0-9]+[0-9,\.]*(st|nd|rd|th|rth|%)?$/;

var parseString = function parseString(str) {
  if (numeric.test(str) === true) {
    //clean up a number, like '$4,342.00'
    str = str.replace(/,/g, '');
    str = str.replace(/^[\$|€|¥|£]/g, '');
    str = str.replace(/%$/, '');
    str = str.replace(/(st|nd|rd|th|rth)$/g, '');
    var num = parseFloat(str);

    if (num || num === 0) {
      return num;
    }
  }

  return parseText(str);
}; //turn it all into a number


var parse = function parse(val) {
  if (val === null || val === undefined || typeof val === 'number') {
    return val;
  }

  if (typeof val === 'string') {
    return parseString(val);
  } //numerical values can only be one term


  if (val.terms.length === 1 && val.terms[0].tags.TextValue !== true) {
    var str = val.terms[0].normal;
    return parseString(str);
  }

  return parseText(val.out('normal'));
};

module.exports = parse;

},{"./parseText":69}],67:[function(_dereq_,module,exports){
"use strict";

var numbers = _dereq_('../../../world/more-data/numbers');

var fns = _dereq_('../paths').fns; //setup number-word data


var ones = fns.extend(numbers.ordinal.ones, numbers.cardinal.ones);
var teens = fns.extend(numbers.ordinal.teens, numbers.cardinal.teens);
var tens = fns.extend(numbers.ordinal.tens, numbers.cardinal.tens);
var multiples = fns.extend(numbers.ordinal.multiples, numbers.cardinal.multiples); //add this one

multiples.grand = 1000;
module.exports = {
  ones: ones,
  teens: teens,
  tens: tens,
  multiples: multiples
};

},{"../../../world/more-data/numbers":220,"../paths":73}],68:[function(_dereq_,module,exports){
'use strict'; //support global multipliers, like 'half-million' by doing 'million' then multiplying by 0.5

var findModifiers = function findModifiers(str) {
  var mults = [{
    reg: /^(minus|negative)[\s\-]/i,
    mult: -1
  }, {
    reg: /^(a\s)?half[\s\-](of\s)?/i,
    mult: 0.5 //  {
    //   reg: /^(a\s)?quarter[\s\-]/i,
    //   mult: 0.25
    // }

  }];

  for (var i = 0; i < mults.length; i++) {
    if (mults[i].reg.test(str) === true) {
      return {
        amount: mults[i].mult,
        str: str.replace(mults[i].reg, '')
      };
    }
  }

  return {
    amount: 1,
    str: str
  };
};

module.exports = findModifiers;

},{}],69:[function(_dereq_,module,exports){
'use strict';

var findModifiers = _dereq_('./findModifiers');

var words = _dereq_('./data');

var isValid = _dereq_('./validate');

var parseDecimals = _dereq_('./parseDecimals');

var parseNumeric = _dereq_('./parseNumeric');

var improperFraction = /^([0-9,\. ]+)\/([0-9,\. ]+)$/; //some numbers we know

var casualForms = {
  // 'a few': 3,
  'a couple': 2,
  'a dozen': 12,
  'two dozen': 24,
  zero: 0
}; // a 'section' is something like 'fifty-nine thousand'
// turn a section into something we can add to - like 59000

var section_sum = function section_sum(obj) {
  return Object.keys(obj).reduce(function (sum, k) {
    sum += obj[k];
    return sum;
  }, 0);
}; //turn a string into a number


var parse = function parse(str) {
  //convert some known-numbers
  if (casualForms.hasOwnProperty(str) === true) {
    return casualForms[str];
  } //'a/an' is 1


  if (str === 'a' || str === 'an') {
    return 1;
  }

  var modifier = findModifiers(str);
  str = modifier.str;
  var last_mult = null;
  var has = {};
  var sum = 0;
  var isNegative = false;
  var terms = str.split(/[ -]/);

  for (var i = 0; i < terms.length; i++) {
    var w = terms[i];
    w = parseNumeric(w);

    if (!w || w === 'and') {
      continue;
    }

    if (w === '-' || w === 'negative') {
      isNegative = true;
      continue;
    }

    if (w.charAt(0) === '-') {
      isNegative = true;
      w = w.substr(1);
    } //decimal mode


    if (w === 'point') {
      sum += section_sum(has);
      sum += parseDecimals(terms.slice(i + 1, terms.length));
      sum *= modifier.amount;
      return sum;
    } //improper fraction


    var fm = w.match(improperFraction);

    if (fm) {
      var num = parseFloat(fm[1].replace(/[, ]/g, ''));
      var denom = parseFloat(fm[2].replace(/[, ]/g, ''));

      if (denom) {
        sum += num / denom || 0;
      }

      continue;
    } //prevent mismatched units, like 'seven eleven'


    if (isValid(w, has) === false) {
      return null;
    } //buildOut section, collect 'has' values


    if (/^[0-9\.]+$/.test(w)) {
      has['ones'] = parseFloat(w); //not technically right
    } else if (words.ones.hasOwnProperty(w) === true) {
      has['ones'] = words.ones[w];
    } else if (words.teens.hasOwnProperty(w) === true) {
      has['teens'] = words.teens[w];
    } else if (words.tens.hasOwnProperty(w) === true) {
      has['tens'] = words.tens[w];
    } else if (words.multiples.hasOwnProperty(w) === true) {
      var mult = words.multiples[w]; //something has gone wrong : 'two hundred five hundred'

      if (mult === last_mult) {
        return null;
      } //support 'hundred thousand'
      //this one is tricky..


      if (mult === 100 && terms[i + 1] !== undefined) {
        // has['hundreds']=
        var w2 = terms[i + 1];

        if (words.multiples[w2]) {
          mult *= words.multiples[w2]; //hundredThousand/hundredMillion

          i += 1;
        }
      } //natural order of things
      //five thousand, one hundred..


      if (last_mult === null || mult < last_mult) {
        sum += (section_sum(has) || 1) * mult;
        last_mult = mult;
        has = {};
      } else {
        //maybe hundred .. thousand
        sum += section_sum(has);
        last_mult = mult;
        sum = (sum || 1) * mult;
        has = {};
      }
    }
  } //dump the remaining has values


  sum += section_sum(has); //post-process add modifier

  sum *= modifier.amount;
  sum *= isNegative ? -1 : 1; //dont return 0, if it went straight-through

  if (sum === 0 && Object.keys(has).length === 0) {
    return null;
  }

  return sum;
};

module.exports = parse;

},{"./data":67,"./findModifiers":68,"./parseDecimals":70,"./parseNumeric":71,"./validate":72}],70:[function(_dereq_,module,exports){
'use strict';

var words = _dereq_('./data'); //concatenate into a string with leading '0.'


var parseDecimals = function parseDecimals(arr) {
  var str = '0.';

  for (var i = 0; i < arr.length; i++) {
    var w = arr[i];

    if (words.ones.hasOwnProperty(w) === true) {
      str += words.ones[w];
    } else if (words.teens.hasOwnProperty(w) === true) {
      str += words.teens[w];
    } else if (words.tens.hasOwnProperty(w) === true) {
      str += words.tens[w];
    } else if (/^[0-9]$/.test(w) === true) {
      str += w;
    } else {
      return 0;
    }
  }

  return parseFloat(str);
};

module.exports = parseDecimals;

},{"./data":67}],71:[function(_dereq_,module,exports){
'use strict'; //parse a string like "4,200.1" into Number 4200.1

var parseNumeric = function parseNumeric(str) {
  //remove ordinal - 'th/rd'
  str = str.replace(/1st$/, '1');
  str = str.replace(/2nd$/, '2');
  str = str.replace(/3rd$/, '3');
  str = str.replace(/([4567890])r?th$/, '$1'); //remove prefixes

  str = str.replace(/^[$€¥£¢]/, ''); //remove suffixes

  str = str.replace(/[%$€¥£¢]$/, ''); //remove commas

  str = str.replace(/,/g, ''); //split '5kg' from '5'

  str = str.replace(/([0-9])([a-z]{1,2})$/, '$1');
  return str;
};

module.exports = parseNumeric;

},{}],72:[function(_dereq_,module,exports){
'use strict';

var words = _dereq_('./data'); //prevent things like 'fifteen ten', and 'five sixty'


var isValid = function isValid(w, has) {
  if (words.ones.hasOwnProperty(w)) {
    if (has.ones || has.teens) {
      return false;
    }
  } else if (words.teens.hasOwnProperty(w)) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  } else if (words.tens.hasOwnProperty(w)) {
    if (has.ones || has.teens || has.tens) {
      return false;
    }
  }

  return true;
};

module.exports = isValid;

},{"./data":67}],73:[function(_dereq_,module,exports){
"use strict";

module.exports = _dereq_('../../paths');

},{"../../paths":8}],74:[function(_dereq_,module,exports){
'use strict';

var paths = _dereq_('../../paths');

var Terms = paths.Terms;

var parse = _dereq_('./parse');

var fmt = _dereq_('./format'); // const unpackRange = function(ts) {
//   if (ts.has('#NumberRange')) {
//     ts.terms.forEach(t => {
//       if (t.silent_term && !t._text) {
//         t.text = t.silent_term;
//       }
//     });
//   }
//   return ts;
// };


var parseValue = function parseValue(ts) {
  ts.val = ts.match('#Value+'); // ts.val = unpackRange(ts.val);

  ts.val = ts.val.list[0];
  ts.unit = ts.match('#Unit+');

  if (ts.unit.found) {
    ts.unit = ts.unit.list[0];
  }

  return ts;
};

var isPercent = function isPercent(val, unit) {
  //pre-tagged
  if (val.has('#Percent') || unit.has('#Percent')) {
    return true;
  } // 'five percent'


  if (unit.out('normal') === 'percent') {
    return true;
  } //'5%'


  if (val.out('normal').match(/%$/) !== null) {
    return true;
  }

  return false;
}; //set the text as the same num format


var setNumber = function setNumber(ts, num) {
  var str = ts.val.out();

  if (ts.has('#Ordinal')) {
    if (ts.has('#TextValue')) {
      str = fmt.textOrdinal(num); //ordinal text
    } else {
      str = fmt.ordinal(num); //ordinal number
    }
  } else if (ts.has('#TextValue')) {
    str = fmt.text(num); //cardinal text
  } else if (ts.has('#NiceNumber')) {
    str = fmt.nice(num); //8,929 number
  } else {
    str = fmt.cardinal(num); //cardinal number
  } //add the unit at the end


  if (ts.unit.found) {
    str += ts.unit.out('text');
  }

  ts = ts.replaceWith(str, true);
  return parseValue(ts);
};

var Value = function Value(arr, world, refText, refTerms) {
  Terms.call(this, arr, world, refText, refTerms);
  parseValue(this);
}; //Terms inheritence


Value.prototype = Object.create(Terms.prototype);
var methods = {
  data: function data() {
    var num = parse(this.val);
    return {
      number: num,
      nice: fmt.nice(num),
      ordinal: fmt.ordinal(num),
      niceOrdinal: fmt.niceOrdinal(num),
      text: fmt.text(num),
      textOrdinal: fmt.textOrdinal(num),
      unit: this.unit.out('normal')
    };
  },
  number: function number() {
    return parse(this.val);
  },
  // /** five -> '5' */
  toNumber: function toNumber() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#Ordinal')) {
        str = fmt.ordinal(num);
      } else {
        str = String(num); //convert 'five percent' -> '5%'

        if (isPercent(this.val, this.unit)) {
          str = str + '%';
          this.unit.delete();
        }
      } // let before = this.terms[0].whitespace.before;
      // let after = this.terms[this.terms.length - 1].whitespace.after;


      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('NumericValue'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      } // this.whitespace.before(before);
      // this.whitespace.after(after);

    }

    return this;
  },
  // /**5 -> 'five' */
  toText: function toText() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#Ordinal')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.text(num); //add percent

        if (isPercent(this.val, this.unit)) {
          str = str + ' percent';
        }
      }

      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('TextValue'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }

    return this;
  },
  //
  // /**5th -> 5 */
  toCardinal: function toCardinal() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#TextValue')) {
        str = fmt.text(num);
      } else {
        str = num;
      }

      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('Cardinal'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }

    return this;
  },
  //
  // /**5 -> 5th */
  toOrdinal: function toOrdinal() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#TextValue')) {
        str = fmt.textOrdinal(num);
      } else {
        str = fmt.ordinal(num);
      }

      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('Ordinal'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }

    return this;
  },
  //
  // /**5900 -> 5,900 */
  toNice: function toNice() {
    var num = parse(this.val);

    if (num || num === 0) {
      var str = '';

      if (this.val.has('#Ordinal')) {
        str = fmt.niceOrdinal(num);
      } else {
        str = fmt.nice(num);
      }

      if (this.unit.found) {
        str = str + this.unit.out('text');
      }

      this.replaceWith(str, true).tag('NumericValue'); //make sure unit gets the right tag..

      if (this.unit.found) {
        this.match(this.unit.out('normal')).tag('Unit');
      }
    }

    return this;
  },

  /** seven + 2 = nine */
  add: function add(n) {
    if (!n) {
      return this;
    }

    var num = parse(this.val) || 0;
    num += n; //add it

    return setNumber(this, num);
  },

  /** seven - 2 = five */
  subtract: function subtract(n) {
    if (!n) {
      return this;
    }

    var num = parse(this.val) || 0;
    num -= n; //subtract it

    return setNumber(this, num);
  },

  /**seven -> 'eight' */
  increment: function increment() {
    return this.add(1);
  },

  /**seven -> 'six' */
  decrement: function decrement() {
    return this.subtract(1);
  }
};
Object.keys(methods).forEach(function (k) {
  Value.prototype[k] = methods[k];
});
module.exports = Value;

},{"../../paths":8,"./format":59,"./parse":66}],75:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('../../text');

var Verb = _dereq_('./verb'); //the () subset class


var methods = {
  conjugation: function conjugation(verbose) {
    return this.list.map(function (ts) {
      return ts.conjugation(verbose);
    });
  },
  conjugate: function conjugate(num, verbose) {
    //suppport only conjugating one verb in our result..
    if (num !== null && typeof num === 'number' && this.list[num]) {
      return this.list[num].conjugate(verbose);
    } //otherwise, return an array of conjugations


    return this.list.map(function (ts) {
      return ts.conjugate(verbose);
    });
  },

  /** plural/singular **/
  isPlural: function isPlural() {
    this.list = this.list.filter(function (ts) {
      return ts.isPlural();
    });
    return this;
  },
  isSingular: function isSingular() {
    this.list = this.list.filter(function (ts) {
      return !ts.isPlural();
    });
    return this;
  },

  /** negation **/
  isNegative: function isNegative() {
    this.list = this.list.filter(function (ts) {
      return ts.isNegative();
    });
    return this;
  },
  isPositive: function isPositive() {
    this.list = this.list.filter(function (ts) {
      return !ts.isNegative();
    });
    return this;
  },
  toNegative: function toNegative() {
    this.list = this.list.map(function (ts) {
      return ts.toNegative();
    });
    return this;
  },
  toPositive: function toPositive() {
    this.list.forEach(function (ts) {
      ts.toPositive();
    });
    return this;
  },

  /** tense **/
  toPastTense: function toPastTense() {
    this.list.forEach(function (ts) {
      ts.toPastTense();
    });
    return this;
  },
  toPresentTense: function toPresentTense() {
    this.list.forEach(function (ts) {
      ts.toPresentTense();
    });
    return this;
  },
  toFutureTense: function toFutureTense() {
    this.list.forEach(function (ts) {
      ts.toFutureTense();
    });
    return this;
  },
  toInfinitive: function toInfinitive() {
    this.list.forEach(function (ts) {
      ts.toInfinitive();
    });
    return this;
  },
  toGerund: function toGerund() {
    this.list.forEach(function (ts) {
      ts.toGerund();
    });
    return this;
  },
  asAdjective: function asAdjective() {
    return this.list.map(function (ts) {
      return ts.asAdjective();
    });
  }
}; //aliases

methods.toContinuous = methods.toGerund;

var find = function find(r, n) {
  r = r.match('(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+');
  r = r.splitAfter('#Comma');
  r = r.if('#Verb'); //this should be (much) smarter

  if (typeof n === 'number') {
    r = r.get(n);
  }

  r.list = r.list.map(function (ts) {
    return new Verb(ts.terms, ts.world, ts.refText, ts.refTerms);
  });
  return new Text(r.list, this.world, this.parent);
};

module.exports = Text.makeSubset(methods, find);

},{"../../text":192,"./verb":94}],76:[function(_dereq_,module,exports){
'use strict';

var predict = _dereq_('./methods/predict');

var isPlural = _dereq_('./methods/isPlural'); //'walking' - aka progressive


var isContinuous = function isContinuous(ts) {
  return ts.match('#Gerund').found;
}; //will not walk


var isNegative = function isNegative(ts) {
  var negs = ts.match('#Negative').list;

  if (negs.length === 2) {
    return false;
  }

  if (negs.length === 1) {
    return true;
  }

  return false;
}; //been walked by..


var isPassive = function isPassive(ts) {
  if (ts.match('is being #PastTense').found) {
    return true;
  }

  if (ts.match('(had|has) been #PastTense').found) {
    return true;
  }

  if (ts.match('will have been #PastTense').found) {
    return true;
  }

  return false;
}; //had walked


var isPerfect = function isPerfect(ts) {
  if (ts.match('^(had|have) #PastTense')) {
    return true;
  }

  return false;
}; //should walk, could walk


var getModal = function getModal(ts) {
  var modal = ts.match('#Modal');

  if (!modal.found) {
    return null;
  }

  return modal.out('normal');
}; //past/present/future


var getTense = function getTense(ts) {
  //look at the preceding words
  if (ts.auxiliary.found) {
    //'will'
    if (ts.match('will have #PastTense').found) {
      return 'Past';
    }

    if (ts.auxiliary.match('will').found) {
      return 'Future';
    } //'was'


    if (ts.auxiliary.match('was').found) {
      return 'Past';
    }
  } //look at the main verb tense


  if (ts.verb) {
    var tenses = {
      PastTense: 'Past',
      FutureTense: 'Future',
      FuturePerfect: 'Future'
    };
    var tense = predict(ts.verb); //yikes

    return tenses[tense] || 'Present';
  }

  return 'Present';
}; // const isImperative = function(ts) {};
// const isConditional = function(ts) {};
// detect signals in Auxiliary verbs
// 'will' -> future, 'have'->perfect, modals, negatives, adverbs


var interpret = function interpret(ts) {
  var isNeg = isNegative(ts); // let aux = ts.Auxiliary.clone();
  // aux = aux.not('(#Negative|#Adverb)');

  var obj = {
    negative: isNeg,
    continuous: isContinuous(ts),
    passive: isPassive(ts),
    perfect: isPerfect(ts),
    plural: isPlural(ts),
    modal: getModal(ts),
    tense: getTense(ts)
  };
  return obj;
};

module.exports = interpret;

},{"./methods/isPlural":86,"./methods/predict":87}],77:[function(_dereq_,module,exports){
'use strict';

var checkIrregulars = _dereq_('./irregulars');

var suffixPass = _dereq_('./suffixes');

var toActor = _dereq_('./toActor');

var generic = _dereq_('./generic');

var predict = _dereq_('../predict');

var toInfinitive = _dereq_('../toInfinitive');

var toBe = _dereq_('./toBe'); //turn a verb into all it's forms


var conjugate = function conjugate(t, world) {
  //handle is/was/will-be specially
  if (t.normal === 'is' || t.normal === 'was' || t.normal === 'will') {
    return toBe();
  } //dont conjugate didn't


  if (t.tags.Contraction) {
    t.text = t.silent_term;
  }

  var all = {
    PastTense: null,
    PresentTense: null,
    Infinitive: null,
    Gerund: null,
    Actor: null
  }; //first, get its current form

  var form = predict(t);

  if (form) {
    all[form] = t.normal;
  }

  if (form !== 'Infinitive') {
    all['Infinitive'] = toInfinitive(t, world) || '';
  } //check irregular forms


  var irregObj = checkIrregulars(all['Infinitive'], world) || {};
  Object.keys(irregObj).forEach(function (k) {
    if (irregObj[k] && !all[k]) {
      all[k] = irregObj[k];
    }
  }); //ok, send this infinitive to all conjugators

  var inf = all['Infinitive'] || t.normal; //check suffix rules

  var suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(function (k) {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  }); //ad-hoc each missing form
  //to Actor

  if (!all.Actor) {
    all.Actor = toActor(inf);
  } //use fallback, generic transformations


  Object.keys(all).forEach(function (k) {
    if (!all[k] && generic[k]) {
      all[k] = generic[k](all);
    }
  });
  return all;
};

module.exports = conjugate;

},{"../predict":87,"../toInfinitive":90,"./generic":80,"./irregulars":82,"./suffixes":83,"./toActor":84,"./toBe":85}],78:[function(_dereq_,module,exports){
"use strict";

module.exports = [{
  reg: /(eave)$/i,
  repl: {
    pr: '$1s',
    pa: '$1d',
    gr: 'eaving',
    ar: '$1r'
  }
}, {
  reg: /(ink)$/i,
  repl: {
    pr: '$1s',
    pa: 'unk',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /([aeiou]k)in$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(end)$/i,
  repl: {
    pr: '$1s',
    pa: 'ent',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(ide)$/i,
  repl: {
    pr: '$1s',
    pa: 'ode',
    gr: 'iding',
    ar: 'ider'
  }
}, {
  reg: /(ake)$/i,
  repl: {
    pr: '$1s',
    pa: 'ook',
    gr: 'aking',
    ar: '$1r'
  }
}, {
  reg: /(eed)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing',
    ar: '$1er'
  }
}, {
  reg: /(e)(ep)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1pt',
    gr: '$1$2ing',
    ar: '$1$2er'
  }
}, {
  reg: /(a[tg]|i[zn]|ur|nc|gl|is)e$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing',
    prt: '$1en'
  }
}, {
  reg: /([i|f|rr])y$/i,
  repl: {
    pr: '$1ies',
    pa: '$1ied',
    gr: '$1ying'
  }
}, {
  reg: /([td]er)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /([bd]l)e$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(ish|tch|ess)$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(ion|end|e[nc]t)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(om)e$/i,
  repl: {
    pr: '$1es',
    pa: 'ame',
    gr: '$1ing'
  }
}, {
  reg: /(.eat)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /([aeiu])([pt])$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2',
    gr: '$1$2$2ing'
  }
}, {
  reg: /(er)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(en)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ed',
    gr: '$1ing'
  }
}, {
  reg: /(ed)$/i,
  repl: {
    pr: '$1s',
    pa: '$1ded',
    ar: '$1der',
    gr: '$1ding'
  }
}, {
  reg: /(..)(ow)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1ew',
    gr: '$1$2ing',
    prt: '$1$2n'
  }
}, {
  reg: /(..)([cs]h)$/i,
  repl: {
    pr: '$1$2es',
    pa: '$1$2ed',
    gr: '$1$2ing'
  }
}, {
  reg: /([^aeiou][ou])(g|d)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2$2ed',
    gr: '$1$2$2ing'
  }
}, {
  reg: /([^aeiou][aeiou])(b|t|p|m)$/i,
  repl: {
    pr: '$1$2s',
    pa: '$1$2$2ed',
    gr: '$1$2$2ing'
  }
}, {
  reg: /([aeiou]zz)$/i,
  repl: {
    pr: '$1es',
    pa: '$1ed',
    gr: '$1ing'
  }
}];

},{}],79:[function(_dereq_,module,exports){
'use strict';

var checkIrregulars = _dereq_('./irregulars');

var suffixPass = _dereq_('./suffixes');

var generic = _dereq_('./generic'); //this method is the same as regular conjugate, but optimised for use in the lexicon during warm-up.
//it's way faster because it knows input is already infinitive


var want = ['Gerund', 'PastTense', 'PresentTense'];

var fasterConjugate = function fasterConjugate(inf, world) {
  var all = {
    Infinitive: inf
  }; //check irregulars list

  if (world && world.conjugations) {
    var irregObj = checkIrregulars(all['Infinitive'], world);

    if (irregObj !== null) {
      Object.keys(irregObj).forEach(function (k) {
        if (irregObj[k] && !all[k]) {
          all[k] = irregObj[k];
        }
      });
    }
  } //check suffix rules


  var suffObj = suffixPass(inf);
  Object.keys(suffObj).forEach(function (k) {
    if (suffObj[k] && !all[k]) {
      all[k] = suffObj[k];
    }
  });

  for (var i = 0; i < want.length; i++) {
    if (all[want[i]] === undefined) {
      all[want[i]] = generic[want[i]](all);
    }
  }

  return all;
};

module.exports = fasterConjugate; // console.log(fasterConjugate('repeat'));

},{"./generic":80,"./irregulars":82,"./suffixes":83}],80:[function(_dereq_,module,exports){
'use strict'; //non-specifc, 'hail-mary' transforms from infinitive, into other forms

var hasY = /[bcdfghjklmnpqrstvwxz]y$/;
var generic = {
  Gerund: function Gerund(o) {
    var inf = o.Infinitive;

    if (inf.charAt(inf.length - 1) === 'e') {
      return inf.replace(/e$/, 'ing');
    }

    return inf + 'ing';
  },
  PresentTense: function PresentTense(o) {
    var inf = o.Infinitive;

    if (inf.charAt(inf.length - 1) === 's') {
      return inf + 'es';
    }

    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ies';
    }

    return inf + 's';
  },
  PastTense: function PastTense(o) {
    var inf = o.Infinitive;

    if (inf.charAt(inf.length - 1) === 'e') {
      return inf + 'd';
    }

    if (inf.substr(-2) === 'ed') {
      return inf;
    }

    if (hasY.test(inf) === true) {
      return inf.slice(0, -1) + 'ied';
    }

    return inf + 'ed';
  } // FutureTense: (o) => {
  //   return 'will ' + o.Infinitive;
  // },
  //
  // PerfectTense: (o) => {
  //   return 'have ' + (o.Participle || o.PastTense);
  // },
  //
  // Pluperfect: (o) => {
  //   if (o.PastTense) {
  //     return 'had ' + o.PastTense;
  //   }
  //   return null;
  // },
  // FuturePerfect: (o) => {
  //   if (o.PastTense) {
  //     return 'will have ' + o.PastTense;
  //   }
  //   return null;
  // }

};
module.exports = generic;

},{}],81:[function(_dereq_,module,exports){
'use strict';

var conjugate = _dereq_('./conjugate');

var toBe = _dereq_('./toBe');

var addAdverbs = function addAdverbs(obj, vb) {
  if (vb.adverbs.found) {
    //does the adverb go at the start or end?
    var isFirst = vb.first().match('#Adverb').found;
    Object.keys(obj).forEach(function (k) {
      if (isFirst) {
        obj[k] = vb.adverbs.out() + ' ' + obj[k];
      } else {
        obj[k] = obj[k] + vb.adverbs.out();
      }
    });
  }

  return obj;
}; //conjugation using auxillaries+adverbs and stuff


var multiWordConjugate = function multiWordConjugate(vb, verbose) {
  var isNegative = vb.negative.found;
  var isPlural = vb.isPlural(); //handle 'to be' verb seperately

  if (vb.verb.tags.Copula || vb.verb.normal === 'be' && vb.auxiliary.match('will').found) {
    var isI = false; //account for 'i is' -> 'i am' irregular

    if (vb.parent && vb.parent.has('i #Adverb? #Copula')) {
      isI = true;
    }

    var copulas = toBe(isPlural, isNegative, isI);
    return addAdverbs(copulas, vb);
  }

  var obj = conjugate(vb.verb, vb.world, verbose); //apply particles

  if (vb.particle.found) {
    Object.keys(obj).forEach(function (k) {
      obj[k] = obj[k] + vb.particle.out();
    });
  } //apply negative


  if (isNegative) {
    obj.PastTense = 'did not ' + obj.Infinitive;
    obj.PresentTense = 'does not ' + obj.Infinitive;
    obj.Gerund = 'not ' + obj.Gerund;
  } //future Tense is pretty straightforward


  if (!obj.FutureTense) {
    if (isNegative) {
      obj.FutureTense = 'will not ' + obj.Infinitive;
    } else {
      obj.FutureTense = 'will ' + obj.Infinitive;
    }
  } //apply adverbs


  obj = addAdverbs(obj, vb);
  return obj;
};

module.exports = multiWordConjugate;

},{"./conjugate":77,"./toBe":85}],82:[function(_dereq_,module,exports){
'use strict'; // let irregulars = require('../../../../lexicon/uncompressed/irregularVerbs').irregulars; //weeee!

var fns = _dereq_('../../../../fns'); //weeee!


var forms = ['Participle', 'Gerund', 'PastTense', 'PresentTense', 'FuturePerfect', 'PerfectTense', 'Actor'];

var checkIrregulars = function checkIrregulars(str, world) {
  var irregulars = world.conjugations;
  var infArr = Object.keys(irregulars); //check irregulars in world

  if (world && world.conjugations && world.conjugations.hasOwnProperty(str) === true) {
    return world.conjugations[str];
  } //fast infinitive lookup


  if (irregulars.hasOwnProperty(str) === true) {
    var obj = fns.copy(irregulars[str]);
    obj.Infinitive = str;
    return obj;
  } //longer check of known-verb forms


  for (var i = 0; i < infArr.length; i++) {
    for (var o = 0; o < forms.length; o++) {
      var irObj = irregulars[infArr[i]];

      if (irObj[forms[o]] === str) {
        var _obj = fns.copy(irObj);

        _obj.Infinitive = infArr[i];
        return _obj;
      }
    }
  }

  return {};
};

module.exports = checkIrregulars; // console.log(checkIrregulars('bit'));

},{"../../../../fns":3}],83:[function(_dereq_,module,exports){
'use strict';

var rules = _dereq_('./data/rules');

var mapping = {
  pr: 'PresentTense',
  pa: 'PastTense',
  gr: 'Gerund',
  prt: 'Participle',
  ar: 'Actor'
};
var keys = Object.keys(mapping); //check suffix rules

var suffixPass = function suffixPass(inf) {
  var found = {};

  for (var i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      var obj = rules[i].repl;

      for (var o = 0; o < keys.length; o++) {
        if (obj.hasOwnProperty(keys[o]) === true) {
          var key = mapping[keys[o]]; // console.log(rules[i]);

          found[key] = inf.replace(rules[i].reg, obj[keys[o]]);
        }
      }

      return found;
    }
  }

  return found;
};

module.exports = suffixPass;

},{"./data/rules":78}],84:[function(_dereq_,module,exports){
'use strict'; //turn 'walk' into 'walker'

var irregulars = {
  'tie': 'tier',
  'dream': 'dreamer',
  'sail': 'sailer',
  'run': 'runner',
  'rub': 'rubber',
  'begin': 'beginner',
  'win': 'winner',
  'claim': 'claimant',
  'deal': 'dealer',
  'spin': 'spinner'
};
var dont = {
  'aid': 1,
  'fail': 1,
  'appear': 1,
  'happen': 1,
  'seem': 1,
  'try': 1,
  'say': 1,
  'marry': 1,
  'be': 1,
  'forbid': 1,
  'understand': 1,
  'bet': 1
};
var rules = [{
  'reg': /e$/i,
  'repl': 'er'
}, {
  'reg': /([aeiou])([mlgp])$/i,
  'repl': '$1$2$2er'
}, {
  'reg': /([rlf])y$/i,
  'repl': '$1ier'
}, {
  'reg': /^(.?.[aeiou])t$/i,
  'repl': '$1tter'
}];

var toActor = function toActor(inf) {
  //check blacklist
  if (dont[inf]) {
    return null;
  } //check irregulars


  if (irregulars.hasOwnProperty(inf)) {
    return irregulars[inf];
  } //try rules


  for (var i = 0; i < rules.length; i++) {
    if (rules[i].reg.test(inf) === true) {
      return inf.replace(rules[i].reg, rules[i].repl);
    }
  } //yup,


  return inf + 'er';
};

module.exports = toActor;

},{}],85:[function(_dereq_,module,exports){
'use strict'; //too many special cases for is/was/will be

var toBe = function toBe(isPlural, isNegative, isI) {
  var obj = {
    PastTense: 'was',
    PresentTense: 'is',
    FutureTense: 'will be',
    Infinitive: 'is',
    Gerund: 'being',
    Actor: '',
    PerfectTense: 'been',
    Pluperfect: 'been'
  }; //"i is" -> "i am"

  if (isI === true) {
    obj.PresentTense = 'am';
    obj.Infinitive = 'am';
  }

  if (isPlural) {
    obj.PastTense = 'were';
    obj.PresentTense = 'are';
    obj.Infinitive = 'are';
  }

  if (isNegative) {
    obj.PastTense += ' not';
    obj.PresentTense += ' not';
    obj.FutureTense = 'will not be';
    obj.Infinitive += ' not';
    obj.PerfectTense = 'not ' + obj.PerfectTense;
    obj.Pluperfect = 'not ' + obj.Pluperfect;
    obj.Gerund = 'not ' + obj.Gerund;
  }

  return obj;
};

module.exports = toBe;

},{}],86:[function(_dereq_,module,exports){
'use strict'; //sometimes you can tell if a verb is plural/singular, just by the verb
// i am / we were
//othertimes you need its noun 'we walk' vs 'i walk'

var isPlural = function isPlural(vb) {
  if (vb.match('(are|were|does)').found) {
    return true;
  }

  if (vb.match('(is|am|do|was)').found) {
    return false;
  } //consider its prior noun


  var noun = vb.getNoun();

  if (noun && noun.found) {
    if (noun.match('#Plural').found) {
      return true;
    }

    if (noun.match('#Singular').found) {
      return false;
    }
  }

  return null;
};

module.exports = isPlural;

},{}],87:[function(_dereq_,module,exports){
'use strict';

var suffix_rules = _dereq_('./suffix_rules');

var goodTypes = {
  Infinitive: true,
  Gerund: true,
  PastTense: true,
  PresentTense: true,
  FutureTense: true,
  PerfectTense: true,
  Pluperfect: true,
  FuturePerfect: true,
  Participle: true
};

var predictForm = function predictForm(term) {
  //do we already know the form?
  var keys = Object.keys(goodTypes);

  for (var i = 0; i < keys.length; i++) {
    if (term.tags[keys[i]]) {
      return keys[i];
    }
  } //consult our handy suffix rules


  var arr = Object.keys(suffix_rules);

  for (var _i = 0; _i < arr.length; _i++) {
    var substr = term.normal.substr(-arr[_i].length);

    if (substr === arr[_i] && term.normal.length > arr[_i].length) {
      return suffix_rules[arr[_i]];
    }
  }

  return null;
};

module.exports = predictForm;

},{"./suffix_rules":88}],88:[function(_dereq_,module,exports){
'use strict'; //suffix signals for verb tense, generated from test data

var compact = {
  'Gerund': ['ing'],
  'Actor': ['erer'],
  'Infinitive': ['ate', 'ize', 'tion', 'rify', 'then', 'ress', 'ify', 'age', 'nce', 'ect', 'ise', 'ine', 'ish', 'ace', 'ash', 'ure', 'tch', 'end', 'ack', 'and', 'ute', 'ade', 'ock', 'ite', 'ase', 'ose', 'use', 'ive', 'int', 'nge', 'lay', 'est', 'ain', 'ant', 'ent', 'eed', 'er', 'le', 'own', 'unk', 'ung', 'en'],
  'PastTense': ['ed', 'lt', 'nt', 'pt', 'ew', 'ld'],
  'PresentTense': ['rks', 'cks', 'nks', 'ngs', 'mps', 'tes', 'zes', 'ers', 'les', 'acks', 'ends', 'ands', 'ocks', 'lays', 'eads', 'lls', 'els', 'ils', 'ows', 'nds', 'ays', 'ams', 'ars', 'ops', 'ffs', 'als', 'urs', 'lds', 'ews', 'ips', 'es', 'ts', 'ns', 's']
};
var suffix_rules = {};
var keys = Object.keys(compact);
var l = keys.length;

for (var i = 0; i < l; i++) {
  var l2 = compact[keys[i]].length;

  for (var o = 0; o < l2; o++) {
    suffix_rules[compact[keys[i]][o]] = keys[i];
  }
}

module.exports = suffix_rules;

},{}],89:[function(_dereq_,module,exports){
'use strict'; //turn a infinitiveVerb, like "walk" into an adjective like "walkable"

var rules = [[/y$/, 'i'], //relay - reliable
[/([aeiou][n])$/, '$1n']]; //convert - 'convertible'
//http://grammarist.com/usage/able-ible/
//http://blog.oxforddictionaries.com/2012/10/ibles-and-ables/

var ible_suffixes = {
  collect: true,
  exhaust: true,
  convert: true,
  digest: true,
  discern: true,
  dismiss: true,
  reverse: true,
  access: true,
  collapse: true,
  express: true
};
var irregulars = {
  eat: 'edible',
  hear: 'audible',
  see: 'visible',
  defend: 'defensible',
  write: 'legible',
  move: 'movable',
  divide: 'divisible',
  perceive: 'perceptible'
}; //takes an infitive verb, and returns an adjective form

var toAdjective = function toAdjective(str) {
  if (irregulars.hasOwnProperty(str)) {
    return irregulars[str];
  }

  for (var i = 0; i < rules.length; i++) {
    if (rules[i][0].test(str) === true) {
      str = str.replace(rules[i][0], rules[i][1]);
    }
  } //ible/able


  var adj = str + 'able';

  if (ible_suffixes[str]) {
    adj = str + 'ible';
  }

  return adj;
};

module.exports = toAdjective;

},{}],90:[function(_dereq_,module,exports){
'use strict'; //turn any verb into its infinitive form

var rules = _dereq_('./rules');

var predict = _dereq_('../predict');

var toInfinitive = function toInfinitive(t, world) {
  var irregulars = world.cache.toInfinitive || {}; //verb_mapping(world.conjugations); //TODO: do this at world cache

  if (t.tags.Infinitive) {
    return t.normal;
  } //check the irregular verb conjugations


  if (irregulars.hasOwnProperty(t.normal) === true) {
    return irregulars[t.normal];
  } //check the suffix rules


  var form = predict(t);

  if (rules[form]) {
    for (var i = 0; i < rules[form].length; i++) {
      var rule = rules[form][i];

      if (t.normal.match(rule.reg)) {
        return t.normal.replace(rule.reg, rule.to);
      }
    }
  }

  return t.normal;
};

module.exports = toInfinitive;

},{"../predict":87,"./rules":91}],91:[function(_dereq_,module,exports){
'use strict'; //rules for turning a verb into infinitive form

var rules = {
  Participle: [{
    reg: /own$/i,
    to: 'ow'
  }, {
    reg: /(.)un([g|k])$/i,
    to: '$1in$2'
  }],
  Actor: [{
    reg: /(er)er$/i,
    to: '$1'
  }],
  PresentTense: [{
    reg: /(..)(ies)$/i,
    to: '$1y'
  }, {
    reg: /(tch|sh)es$/i,
    to: '$1'
  }, {
    reg: /(ss|zz)es$/i,
    to: '$1'
  }, {
    reg: /([tzlshicgrvdnkmu])es$/i,
    to: '$1e'
  }, {
    reg: /(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,
    to: '$1'
  }, {
    reg: /(ow)s$/i,
    to: '$1'
  }, {
    reg: /(op)s$/i,
    to: '$1'
  }, {
    reg: /([eirs])ts$/i,
    to: '$1t'
  }, {
    reg: /(ll)s$/i,
    to: '$1'
  }, {
    reg: /(el)s$/i,
    to: '$1'
  }, {
    reg: /(ip)es$/i,
    to: '$1e'
  }, {
    reg: /ss$/i,
    to: 'ss'
  }, {
    reg: /s$/i,
    to: ''
  }],
  Gerund: [{
    reg: /pping$/i,
    to: 'p'
  }, {
    reg: /lling$/i,
    to: 'll'
  }, {
    reg: /tting$/i,
    to: 't'
  }, {
    reg: /dding$/i,
    to: 'd'
  }, {
    reg: /ssing$/i,
    to: 'ss'
  }, {
    reg: /(..)gging$/i,
    to: '$1g'
  }, {
    reg: /([^aeiou])ying$/i,
    to: '$1y'
  }, {
    reg: /([^ae]i.)ing$/i,
    to: '$1e'
  }, {
    reg: /(ea.)ing$/i,
    to: '$1'
  }, {
    reg: /(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$/i,
    to: '$1e'
  }, {
    reg: /(ch|sh)ing$/i,
    to: '$1'
  }, {
    reg: /(..)ing$/i,
    to: '$1'
  }],
  PastTense: [{
    reg: /(ued)$/i,
    to: 'ue'
  }, {
    reg: /a([^aeiouy])ed$/i,
    to: 'a$1e'
  }, {
    reg: /([aeiou]zz)ed$/i,
    to: '$1'
  }, {
    reg: /(e|i)lled$/i,
    to: '$1ll'
  }, {
    reg: /(.)(sh|ch)ed$/i,
    to: '$1$2'
  }, {
    reg: /(tl|gl)ed$/i,
    to: '$1e'
  }, {
    reg: /(um?pt?)ed$/i,
    to: '$1'
  }, {
    reg: /(ss)ed$/i,
    to: '$1'
  }, {
    reg: /pped$/i,
    to: 'p'
  }, {
    reg: /tted$/i,
    to: 't'
  }, {
    reg: /(..)gged$/i,
    to: '$1g'
  }, {
    reg: /(..)lked$/i,
    to: '$1lk'
  }, {
    reg: /([^aeiouy][aeiou])ked$/i,
    to: '$1ke'
  }, {
    reg: /(.[aeiou])led$/i,
    to: '$1l'
  }, {
    reg: /(..)(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,
    to: '$1$2'
  }, {
    reg: /(.ut)ed$/i,
    to: '$1e'
  }, {
    reg: /(.pt)ed$/i,
    to: '$1'
  }, {
    reg: /(us)ed$/i,
    to: '$1e'
  }, {
    reg: /(..[^aeiouy])ed$/i,
    to: '$1e'
  }, {
    reg: /(..)ied$/i,
    to: '$1y'
  }, {
    reg: /(.o)ed$/i,
    to: '$1o'
  }, {
    reg: /(..i)ed$/i,
    to: '$1'
  }, {
    reg: /(.a[^aeiou])ed$/i,
    to: '$1'
  }, {
    reg: /([rl])ew$/i,
    to: '$1ow'
  }, {
    reg: /([pl])t$/i,
    to: '$1t'
  }]
};
module.exports = rules;

},{}],92:[function(_dereq_,module,exports){
"use strict";

//these are contractions with a implicit verb.
var expand = function expand(vb) {
  vb.match('#Contraction+').list.forEach(function (ts) {
    if (ts.has('#Verb')) {
      ts.terms.forEach(function (t) {
        if (t.silent_term) {
          //this term also needs a space now too
          if (!t.text) {
            t.whitespace.before = ' ';
          }

          t._text = t.silent_term; //handle (some) capitalization

          if (t.tags.TitleCase) {
            t.toTitleCase();
          }

          t.normalize();
          t.silent_term = null;
          t.unTag('Contraction', 'expanded');
        }
      });
    }
  });
  return vb;
};

module.exports = expand;

},{}],93:[function(_dereq_,module,exports){
'use strict'; //turns a verb negative - may not have enough information to do it properly
// (eg 'did not eat' vs 'does not eat') - needs the noun

var toInfinitive = _dereq_('./methods/toInfinitive'); //this methods operate on parentTerms, so return subset


var getVerb = function getVerb(ts) {
  ts = ts.match('(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+');
  ts = ts.splitAfter('#Comma');
  return ts.list[0];
};

var toNegative = function toNegative(ts) {
  //would not walk
  var modal = ts.match('#Auxiliary').first(); //.notIf('(is|are|was|will|has|had)').first(); //.first();

  if (modal.found) {
    var index = modal.list[0].index();
    var vb = ts.parentTerms.insertAt(index + 1, 'not', 'Verb');
    vb.match('not').tag('Negative', 'tag-not');
    return getVerb(vb);
  } //words that pair easily with a 'not' - 'is not'


  var copula = ts.match('(#Copula|will|has|had|do)').first();

  if (copula.found) {
    var _index = copula.list[0].index();

    var _vb = ts.parentTerms.insertAt(_index + 1, 'not', 'Verb');

    _vb.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb);
  }

  var isPlural = ts.isPlural(); //walked -> did not walk

  var past = ts.match('#PastTense').last();

  if (past.found) {
    // past.debug();
    var first = past.list[0];

    var _index2 = first.index();

    first.terms[0].text = toInfinitive(first.terms[0], ts.world);

    var _vb2 = ts.parentTerms.insertAt(_index2, 'did not', 'Verb'); //add 'do not'?


    _vb2.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb2);
  } //walks -> does not walk


  var pres = ts.match('#PresentTense').first();

  if (pres.found) {
    var _first = pres.list[0];

    var _index3 = _first.index();

    _first.terms[0].text = toInfinitive(_first.terms[0], ts.world); //some things use 'do not', everything else is 'does not'

    var noun = ts.getNoun();
    var _vb3 = null;

    if (noun.match('(i|we|they|you)').found) {
      _vb3 = ts.parentTerms.insertAt(_index3, 'do not', 'Verb');
    } else {
      _vb3 = ts.parentTerms.insertAt(_index3, 'does not', 'Verb');
    }

    _vb3.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb3);
  } //not walking


  var gerund = ts.match('#Gerund').last();

  if (gerund.found) {
    var _index4 = gerund.list[0].index();

    var _vb4 = ts.parentTerms.insertAt(_index4, 'not', 'Verb');

    _vb4.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb4);
  } //walk -> do not walk


  var verb = ts.match('#Verb').last();

  if (verb.found) {
    var _first2 = verb.list[0];

    var _index5 = _first2.index();

    _first2.terms[0].text = toInfinitive(_first2.terms[0], ts.world);
    var _vb5 = ts;

    if (isPlural) {
      _vb5 = ts.parentTerms.insertAt(_index5 - 1, 'do not', 'Verb');
    } else {
      _vb5 = ts.parentTerms.insertAt(_index5 - 1, 'does not', 'Verb');
    }

    _vb5.match('not').tag('Negative', 'tag-not');

    return getVerb(_vb5);
  }

  return ts;
};

module.exports = toNegative;

},{"./methods/toInfinitive":90}],94:[function(_dereq_,module,exports){
'use strict';

var Terms = _dereq_('../../paths').Terms;

var _conjugate = _dereq_('./methods/conjugate');

var toAdjective = _dereq_('./methods/toAdjective');

var interpret = _dereq_('./interpret');

var _toNegative = _dereq_('./toNegative');

var _isPlural = _dereq_('./methods/isPlural');

var expand = _dereq_('./methods/verbContraction');

var _parse = function parse(r) {
  var original = r;
  r.negative = r.match('#Negative');
  r.adverbs = r.match('#Adverb');
  var aux = r.clone().not('(#Adverb|#Negative)');
  r.verb = aux.match('#Verb').not('#Particle').last();
  r.particle = aux.match('#Particle').last();

  if (r.verb.found) {
    var str = r.verb.out('normal');
    r.auxiliary = original.not(str).not('(#Adverb|#Negative)');
    r.verb = r.verb.list[0].terms[0]; // r.auxiliary = aux.match('#Auxiliary+');
  } else {
    r.verb = original.terms[0];
    r.auxiliary = aux.not('.');
  }

  return r;
};

var methods = {
  parse: function parse() {
    return _parse(this);
  },
  data: function data(verbose) {
    return {
      text: this.out('text'),
      normal: this.out('normal'),
      parts: {
        negative: this.negative.out('normal'),
        auxiliary: this.auxiliary.out('normal'),
        verb: this.verb.out('normal'),
        particle: this.particle.out('normal'),
        adverbs: this.adverbs.out('normal')
      },
      interpret: interpret(this, verbose),
      conjugations: this.conjugate()
    };
  },
  getNoun: function getNoun() {
    if (!this.refTerms) {
      return null;
    }

    var str = '#Adjective? #Noun+ ' + this.out('normal');
    return this.refTerms.match(str).match('#Noun+');
  },
  //which conjugation is this right now?
  conjugation: function conjugation() {
    return interpret(this, false).tense;
  },
  //blast-out all forms
  conjugate: function conjugate(verbose) {
    return _conjugate(this, verbose);
  },
  isPlural: function isPlural() {
    return _isPlural(this);
  },

  /** negation **/
  isNegative: function isNegative() {
    return this.match('#Negative').list.length === 1;
  },
  isPerfect: function isPerfect() {
    return this.auxiliary.match('(have|had)').found;
  },
  toNegative: function toNegative() {
    if (this.isNegative()) {
      return this;
    }

    return _toNegative(this);
  },
  toPositive: function toPositive() {
    return this.match('#Negative').delete();
  },

  /** conjugation **/
  toPastTense: function toPastTense() {
    if (this.has('#Contraction')) {
      this.list = expand(this.parentTerms).list;
    }

    var obj = this.conjugate();
    var end = obj.PastTense;
    var r = this.replaceWith(end, false);
    r.verb.tag('#PastTense');
    return r;
  },
  toPresentTense: function toPresentTense() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }

    var obj = this.conjugate();
    var r = this.replaceWith(obj.PresentTense, false);
    r.verb.tag('#PresentTense');
    return r;
  },
  toFutureTense: function toFutureTense() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }

    var obj = this.conjugate();
    var r = this.replaceWith(obj.FutureTense, false);
    r.verb.tag('#FutureTense');
    return r;
  },
  toInfinitive: function toInfinitive() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }

    var obj = this.conjugate();
    var r = this.replaceWith(obj.Infinitive, false);
    r.verb.tag('#Infinitive');
    return r;
  },
  toGerund: function toGerund() {
    if (this.has('#Contraction')) {
      expand(this.parentTerms);
    }

    var obj = this.conjugate();
    var aux = 'is'; //support 'i am', 'we are', 'he is'

    var noun = this.getNoun().out('normal');

    if (noun) {
      var auxList = {
        i: 'am',
        we: 'are',
        they: 'are'
      };

      if (auxList.hasOwnProperty(noun)) {
        aux = auxList[noun];
      }
    }

    var end = aux + ' ' + obj.Gerund; //i would go -> i would have be going
    // if (this.auxiliary && this.auxiliary.has('#Modal') && !this.auxiliary.has('will')) {
    //   end = this.auxiliary.match('#Modal').out() + ' have ' + end;
    // }

    var r = this.replaceWith(end, false);
    r.verb.tag('#Gerund');
    return r;
  },
  asAdjective: function asAdjective() {
    return toAdjective(this.verb.out('normal'));
  }
};

var Verb = function Verb(arr, world, refText, parentTerms) {
  Terms.call(this, arr, world, refText, parentTerms); //basic verb-phrase parsing:

  return _parse(this);
}; //Terms inheritence


Verb.prototype = Object.create(Terms.prototype); //apply methods

Object.keys(methods).forEach(function (k) {
  Verb.prototype[k] = methods[k];
});
module.exports = Verb;

},{"../../paths":8,"./interpret":76,"./methods/conjugate":81,"./methods/isPlural":86,"./methods/toAdjective":89,"./methods/verbContraction":92,"./toNegative":93}],95:[function(_dereq_,module,exports){
'use strict'; //the steps and processes of pos-tagging

var step = {
  punctuation_step: _dereq_('./steps/01-punctuation_step'),
  emoji_step: _dereq_('./steps/02-emoji_step'),
  lexicon_step: _dereq_('./steps/03-lexicon_step'),
  lexicon_multi: _dereq_('./steps/04-lexicon_multi'),
  web_step: _dereq_('./steps/05-web_step'),
  suffix_step: _dereq_('./steps/06-suffix_step'),
  neighbour_step: _dereq_('./steps/07-neighbour_step'),
  capital_step: _dereq_('./steps/08-capital_step'),
  noun_fallback: _dereq_('./steps/09-noun_fallback'),
  contraction: _dereq_('./steps/10-contraction_step'),
  date_step: _dereq_('./steps/11-date_step'),
  auxiliary_step: _dereq_('./steps/12-auxiliary_step'),
  negation_step: _dereq_('./steps/13-negation_step'),
  comma_step: _dereq_('./steps/14-comma_step'),
  quotation_step: _dereq_('./steps/15-quotation_step'),
  possessive_step: _dereq_('./steps/16-possessive_step'),
  acronym_step: _dereq_('./steps/17-acronym_step'),
  person_step: _dereq_('./steps/18-person_step'),
  organization_step: _dereq_('./steps/19-organization_step'),
  parentheses_step: _dereq_('./steps/20-parentheses_step'),
  plural_step: _dereq_('./steps/21-plural_step'),
  value_step: _dereq_('./steps/22-value_step'),
  corrections: _dereq_('./steps/23-corrections'),
  properNoun: _dereq_('./steps/24-proper_noun'),
  custom: _dereq_('./steps/25-custom')
};

var tagPhrase = _dereq_('./phrase');

var tagger = function tagger(ts) {
  ts = step.punctuation_step(ts);
  ts = step.emoji_step(ts);
  ts = step.lexicon_step(ts);
  ts = step.lexicon_multi(ts);
  ts = step.web_step(ts);
  ts = step.suffix_step(ts);
  ts = step.comma_step(ts); //formerly #14

  ts = step.neighbour_step(ts);
  ts = step.capital_step(ts);
  ts = step.noun_fallback(ts);
  ts = step.contraction(ts);
  ts = step.date_step(ts); //3ms

  ts = step.auxiliary_step(ts);
  ts = step.negation_step(ts);
  ts = step.quotation_step(ts);
  ts = step.possessive_step(ts);
  ts = step.acronym_step(ts);
  ts = step.person_step(ts); //1ms

  ts = step.organization_step(ts);
  ts = step.parentheses_step(ts);
  ts = step.plural_step(ts);
  ts = step.value_step(ts);
  ts = step.corrections(ts); //2ms

  ts = step.properNoun(ts);
  ts = tagPhrase(ts);
  ts = step.custom(ts);
  return ts;
};

module.exports = tagger;

},{"./phrase":98,"./steps/01-punctuation_step":99,"./steps/02-emoji_step":100,"./steps/03-lexicon_step":101,"./steps/04-lexicon_multi":102,"./steps/05-web_step":103,"./steps/06-suffix_step":104,"./steps/07-neighbour_step":105,"./steps/08-capital_step":106,"./steps/09-noun_fallback":107,"./steps/10-contraction_step":108,"./steps/11-date_step":109,"./steps/12-auxiliary_step":110,"./steps/13-negation_step":111,"./steps/14-comma_step":112,"./steps/15-quotation_step":113,"./steps/16-possessive_step":114,"./steps/17-acronym_step":115,"./steps/18-person_step":116,"./steps/19-organization_step":117,"./steps/20-parentheses_step":118,"./steps/21-plural_step":119,"./steps/22-value_step":120,"./steps/23-corrections":121,"./steps/24-proper_noun":122,"./steps/25-custom":123}],96:[function(_dereq_,module,exports){
'use strict'; //

var conditionPass = function conditionPass(ts) {
  //'if it really goes, I will..'
  var m = ts.match('#Condition .{1,7} #ClauseEnd'); //make sure it ends on a comma

  if (m.found && m.match('#Comma$')) {
    m.tag('Condition');
  } //'go a bit further, if it then has a pronoun


  m = ts.match('#Condition .{1,13} #ClauseEnd #Pronoun');

  if (m.found && m.match('#Comma$')) {
    m.not('#Pronoun$').tag('Condition', 'end-pronoun');
  } //if it goes then ..


  m = ts.match('#Condition .{1,7} then');

  if (m.found) {
    m.not('then$').tag('Condition', 'cond-then');
  } //as long as ..


  m = ts.match('as long as .{1,7} (then|#ClauseEnd)');

  if (m.found) {
    m.not('then$').tag('Condition', 'as-long-then');
  } //at the end of a sentence:
  //'..., if it really goes.'


  m = ts.match('#Comma #Condition .{1,7} .$');

  if (m.found) {
    m.not('^#Comma').tag('Condition', 'comma-7-end');
  } // '... if so.'


  m = ts.match('#Condition .{1,4}$');

  if (m.found) {
    m.tag('Condition', 'cond-4-end');
  }

  return ts;
};

module.exports = conditionPass;

},{}],97:[function(_dereq_,module,exports){
'use strict'; //a verbPhrase is a sequence of axiliaries, adverbs and verbs

var verbPhrase = function verbPhrase(ts) {
  if (ts.has('(#Verb|#Auxiliary)')) {
    ts.match('#Verb').tag('VerbPhrase', 'verbphrase-verb'); //quickly was

    ts.match('#Adverb #Verb').tag('VerbPhrase', 'adverb-verb'); //was quickly

    ts.match('#Verb #Adverb').tag('VerbPhrase', 'verb-adverb'); //is not

    ts.match('#Verb #Negative').tag('VerbPhrase', 'verb-not'); //never is

    ts.match('never #Verb').tag('VerbPhrase', 'not-verb'); //'will have had'..

    ts.match('#Auxiliary+').tag('VerbPhrase', '2'); // 'is'

    ts.match('#Copula').tag('VerbPhrase', '#3'); //'really will'..

    ts.match('#Adverb #Auxiliary').tag('VerbPhrase', '#4'); //to go
    // ts.match('to #Infinitive').tag('VerbPhrase', '#5');
    //work with
    // ts.match('#Verb #Preposition').tag('VerbPhrase', '#6');
  }

  return ts;
};

module.exports = verbPhrase;

},{}],98:[function(_dereq_,module,exports){
'use strict';

var conditionPass = _dereq_('./00-conditionPass');

var verbPhrase = _dereq_('./01-verbPhrase'); // const nounPhrase = require('./02-nounPhrase');
// const AdjectivePhrase = require('./03-adjectivePhrase');
//


var phraseTag = function phraseTag(ts) {
  ts = conditionPass(ts);
  ts = verbPhrase(ts); // ts = nounPhrase(ts);
  // ts = AdjectivePhrase(ts);

  return ts;
};

module.exports = phraseTag;

},{"./00-conditionPass":96,"./01-verbPhrase":97}],99:[function(_dereq_,module,exports){
'use strict'; //regs-

var titleCase = /^[A-Z][a-z']/;
var romanNum = /^[IVXCM]+$/; //not so smart (right now)

var isRomanNumeral = function isRomanNumeral(t) {
  if (t.text.length > 1 && romanNum.test(t.text) === true) {
    return t.canBe('RomanNumeral');
  }

  return false;
};

var oneLetters = {
  a: true,
  i: true,
  //internet-slang
  u: true,
  r: true,
  c: true,
  k: true
};

var punctuation_step = function punctuation_step(ts) {
  var rules = ts.world.regex || [];
  ts.terms.forEach(function (t, o) {
    var str = t.text; //anything can be titlecase

    if (titleCase.test(str) === true) {
      t.tag('TitleCase', 'punct-rule');
    } //add hyphenation


    if (t.whitespace.after === '-' && ts.terms[o + 1] && ts.terms[o + 1].whitespace.before === '') {
      t.tag('Hyphenated', 'has-hyphen');
      ts.terms[o + 1].tag('Hyphenated', 'has-hyphen');
    } //look at () parentheses


    if (t.text[0] === '(') {
      t.tag('StartBracket');
    } //look at end-brackets (allow some punctuation after)!


    if (/\)[,.?!;:]?$/.test(t.text) === true) {
      t.tag('EndBracket');
    } //ok, normalise it a little,


    str = str.replace(/[,\.\?]$/, ''); //do punctuation rules (on t.text)

    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];

      if (r.reg.test(str) === true) {
        //don't over-write any other known tags
        if (t.canBe(r.tag)) {
          t.tag(r.tag, 'punctuation-rule- "' + r.reg.toString() + '"');
        }

        return;
      }
    } //terms like 'e'


    if (str.length === 1 && ts.terms[o + 1] && /[A-Z]/.test(str) && !oneLetters[str.toLowerCase()]) {
      t.tag('Acronym', 'one-letter-acronym');
    } //roman numerals (weak rn)


    if (isRomanNumeral(t)) {
      t.tag('RomanNumeral', 'is-roman-numeral');
    } //'100+'


    if (/[0-9]\+$/.test(t.text) === true) {
      t.tag('NumericValue', 'number-plus');
    }
  });
  return ts;
};

module.exports = punctuation_step;

},{}],100:[function(_dereq_,module,exports){
'use strict';

var emojiReg = _dereq_('./rules/emoji_regex');

var emoticon = _dereq_('./rules/emoticon_list'); //for us, there's three types -
// * ;) - emoticons
// * 🌵 - unicode emoji
// * :smiling_face: - asci-represented emoji
//test for forms like ':woman_tone2:‍:ear_of_rice:'
//https://github.com/Kikobeats/emojis-keywords/blob/master/index.js


var isColonEmoji = function isColonEmoji(t) {
  if (t.text.charAt(0) === ':') {
    //end comma can be last or second-last ':haircut_tone3:‍♀️'
    if (t.text.match(/:.?$/) === null) {
      return false;
    } //ensure no spaces


    if (t.text.match(' ')) {
      return false;
    } //reasonably sized


    if (t.text.length > 35) {
      return false;
    }

    return true;
  }

  return false;
}; //check against emoticon whitelist


var isEmoticon = function isEmoticon(t) {
  //normalize the 'eyes'
  var str = t.text.replace(/^[:;]/, ':');
  return emoticon.hasOwnProperty(str) === true;
}; //


var emojiStep = function emojiStep(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //test for :keyword: emojis

    if (isColonEmoji(t)) {
      t.tag('Emoji', 'colon-emoji');
    } //test for unicode emojis


    if (t.text.match(emojiReg)) {
      t.tag('Emoji', 'unicode-emoji');
    } //test for emoticon ':)' emojis


    if (isEmoticon(t)) {
      t.tag('Emoji', 'emoticon-emoji');
    }
  }

  return ts;
};

module.exports = emojiStep;

},{"./rules/emoji_regex":130,"./rules/emoticon_list":131}],101:[function(_dereq_,module,exports){
'use strict';

var split = _dereq_('./contraction/split'); // const l = require('../../lexicon/init');
// const lexicon = l.lexicon;


var lexicon_pass = function lexicon_pass(ts) {
  var lexicon = ts.world.words || {}; //loop through each term

  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //basic term lookup

    if (lexicon.hasOwnProperty(t.normal) === true) {
      t.tag(lexicon[t.normal], 'lexicon');
      continue;
    } //support silent_term matches


    if (t.silent_term && lexicon.hasOwnProperty(t.silent_term) === true) {
      t.tag(lexicon[t.silent_term], 'silent_term-lexicon');
      continue;
    } //check root version too


    if (t.root && t.normal !== t.root) {
      if (lexicon.hasOwnProperty(t.root) === true) {
        t.tag(lexicon[t.root], 'lexicon');
        continue;
      }
    } //support contractions (manually)


    var parts = split(t);

    if (parts && parts.start) {
      var start = parts.start.toLowerCase();

      if (lexicon.hasOwnProperty(start) === true) {
        t.tag(lexicon[start], 'contraction-lexicon');
        continue;
      }
    }
  }

  return ts;
};

module.exports = lexicon_pass;

},{"./contraction/split":129}],102:[function(_dereq_,module,exports){
'use strict';

var MAX = 4; //find terms in the lexicon longer than one word (like 'hong kong')

var findMultiWords = function findMultiWords(ts, i, world) {
  var lex = world.words;
  var start = ts.terms[i].root;
  var nextTerms = ts.terms.slice(i + 1, i + MAX).map(function (t) {
    return t.root;
  }); //look for matches, try biggest first

  var max = MAX;

  if (nextTerms.length < max) {
    max = nextTerms.length;
  }

  for (var k = max; k > 0; k -= 1) {
    var howAbout = start + ' ' + nextTerms.slice(0, k).join(' ');

    if (lex.hasOwnProperty(howAbout) === true) {
      ts.slice(i, i + k + 1).tag(lex[howAbout], 'multi-lexicon-' + howAbout);
      return k;
    }
  }

  return 0;
}; //try multiple-word matches in the lexicon (users and default)


var lexiconMulti = function lexiconMulti(ts) {
  ts.world.cache = ts.world.cache || {};
  var firstWords = ts.world.cache.firstWords || {};

  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //try multi words from user-lexicon

    if (firstWords.hasOwnProperty(t.root) === true) {
      var jump = findMultiWords(ts, i, ts.world);
      i += jump;
      continue;
    }
  }

  return ts;
};

module.exports = lexiconMulti;

},{}],103:[function(_dereq_,module,exports){
'use strict'; //identify urls, hashtags, @mentions, emails
//regs

var email = /^\w+@\w+\.[a-z]{2,3}$/; //not fancy

var hashTag = /^#[a-z0-9_]{2,}$/;
var atMention = /^@\w{2,}$/;
var urlA = /^(https?:\/\/|www\.)\w+\.[a-z]{2,3}/; //with http/www

var urlB = /^[\w\.\/]+\.(com|net|gov|org|ly|edu|info|biz|ru|jp|de|in|uk|br)/; //http://mostpopularwebsites.net/top-level-domain

var web_pass = function web_pass(terms) {
  for (var i = 0; i < terms.length; i++) {
    var t = terms.get(i);
    var str = t.text.trim().toLowerCase();

    if (email.test(str) === true) {
      t.tag('Email', 'web_pass');
    }

    if (hashTag.test(str) === true) {
      t.tag('HashTag', 'web_pass');
    }

    if (atMention.test(str) === true) {
      t.tag('AtMention', 'web_pass');
    }

    if (urlA.test(str) === true || urlB.test(str) === true) {
      t.tag('Url', 'web_pass');
    }
  }

  return terms;
};

module.exports = web_pass;

},{}],104:[function(_dereq_,module,exports){
'use strict';

var regs = _dereq_('./rules/regex_list');

var suffixes = _dereq_('./rules/suffix_lookup');

var misc = [//slang things
[/^(lol)+[sz]$/, 'Expression'], //lol
[/^ma?cd[aeiou]/, 'LastName'], //macdonell - Last patterns https://en.wikipedia.org/wiki/List_of_family_name_affixes
//starting-ones
[/^[\-\+]?[0-9][0-9,]*(\.[0-9])*$/, 'Cardinal'], //like 5
[/^(un|de|re)\\-[a-z]../, 'Verb'], [/^[\-\+]?[0-9]+(\.[0-9])*$/, 'NumericValue'], [/^https?\:?\/\/[a-z0-9]/, 'Url'], //the colon is removed in normalisation
[/^www\.[a-z0-9]/, 'Url'], [/^(over|under)[a-z]{2,}/, 'Adjective'], [/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/, 'Date'], // 03-02-89
//ending-ones
[/^[0-9]+([a-z]{1,2})$/, 'Value'], //like 5kg
[/^[0-9][0-9,\.]*(st|nd|rd|r?th)$/, ['NumericValue', 'Ordinal']], //like 5th
//middle (anywhere)
[/[a-z]*\\-[a-z]*\\-/, 'Adjective']]; //straight-up lookup of known-suffixes

var lookup = function lookup(t) {
  var len = t.normal.length;
  var max = 7;

  if (len <= max) {
    max = len - 1;
  }

  for (var i = max; i > 1; i -= 1) {
    var str = t.normal.substr(len - i, len);

    if (suffixes[i][str] !== undefined) {
      // console.log('suffix-match: ' + str);
      return suffixes[i][str];
    }
  }

  return null;
}; //word-regexes indexed by last-character


var regexFn = function regexFn(t) {
  var char = t.normal.charAt(t.normal.length - 1);

  if (regs[char] === undefined) {
    return null;
  }

  var arr = regs[char];

  for (var o = 0; o < arr.length; o++) {
    if (arr[o][0].test(t.normal) === true) {
      return arr[o];
    }
  }

  return null;
};

var suffix_step = function suffix_step(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //try known suffixes

    var tag = lookup(t);

    if (tag !== null && t.canBe(tag) === true) {
      t.tag(tag, 'suffix-lookup');
      continue;
    } //apply regexes by final-char


    tag = regexFn(t);

    if (tag !== null && t.canBe(tag[1]) === true) {
      t.tag(tag[1], 'regex-list: ' + String(tag[0]));
      continue;
    } //apply misc regexes


    for (var o = 0; o < misc.length; o++) {
      if (misc[o][0].test(t.normal) === true) {
        tag = misc[o][1];

        if (t.canBe(tag) === true) {
          t.tag(tag, 'misc-regex-' + misc[o][0]);
        }
      }
    }
  }

  return ts;
};

module.exports = suffix_step;

},{"./rules/regex_list":133,"./rules/suffix_lookup":134}],105:[function(_dereq_,module,exports){
'use strict';

var markov = _dereq_('./rules/neighbours');

var afterThisWord = markov.afterThisWord;
var beforeThisWord = markov.beforeThisWord;
var beforeThisPos = markov.beforeThisPos;
var afterThisPos = markov.afterThisPos;
var nothing = {
  TitleCase: true,
  UpperCase: true,
  CamelCase: true,
  Hyphenated: true,
  StartBracket: true,
  EndBracket: true,
  Comma: true,
  ClauseEnd: true
}; //basically a last-ditch effort before everything falls back to a noun
//for unknown terms, look left + right first, and hit-up the markov-chain for clues

var neighbour_step = function neighbour_step(ts) {
  ts.terms.forEach(function (t, n) {
    //is it still unknown?
    var termTags = Object.keys(t.tags);
    termTags = termTags.filter(function (tag) {
      return nothing.hasOwnProperty(tag) === false;
    });

    if (termTags.length === 0) {
      var lastTerm = ts.terms[n - 1];
      var nextTerm = ts.terms[n + 1]; //look at previous word for clues

      if (lastTerm && afterThisWord.hasOwnProperty(lastTerm.normal) && !lastTerm.tags.ClauseEnd) {
        t.tag(afterThisWord[lastTerm.normal], 'neighbour-after-"' + lastTerm.normal + '"');
        return;
      } //look at next word for clues..
      //(not if there's a comma, though)


      if (!t.tags.ClauseEnd && nextTerm && beforeThisWord.hasOwnProperty(nextTerm.normal)) {
        t.tag(beforeThisWord[nextTerm.normal], 'neighbour-before-"' + nextTerm.normal + '"');
        return;
      } //look at the last POS for clues


      var tags = [];

      if (lastTerm) {
        tags = Object.keys(lastTerm.tags);

        for (var i = 0; i < tags.length; i++) {
          if (afterThisPos[tags[i]]) {
            t.tag(afterThisPos[tags[i]], 'neighbour-after-[' + tags[i] + ']');
            return;
          }
        }
      } //look at the next POS for clues


      if (nextTerm) {
        tags = Object.keys(nextTerm.tags);

        for (var _i = 0; _i < tags.length; _i++) {
          if (beforeThisPos[tags[_i]]) {
            t.tag(beforeThisPos[tags[_i]], 'neighbour-before-[' + tags[_i] + ']');
            return;
          }
        }
      }
    }
  });
  return ts;
};

module.exports = neighbour_step;

},{"./rules/neighbours":132}],106:[function(_dereq_,module,exports){
'use strict'; //titlecase is a signal for a noun

var capital_logic = function capital_logic(s) {
  //(ignore first word)
  for (var i = 1; i < s.terms.length; i++) {
    var _t = s.terms[i]; //has a capital, but isn't too weird.

    if (_t.tags.TitleCase && _t.isWord()) {
      _t.tag('Noun', 'capital-step');

      _t.tag('TitleCase', 'capital-step');
    }
  } //support first-word of sentence as proper titlecase


  var t = s.terms[0];

  if (t && t.tags.TitleCase) {
    if (t.tags.Person || t.tags.Organization || t.tags.Place) {
      t.tag('TitleCase', 'first-term-capital');
    }
  }

  return s;
};

module.exports = capital_logic;

},{}],107:[function(_dereq_,module,exports){
'use strict'; //tag word as noun if we know nothing about it, still.
//tags that dont really count

var nothing = {
  TitleCase: true,
  UpperCase: true,
  CamelCase: true,
  Hyphenated: true,
  StartBracket: true,
  EndBracket: true,
  Comma: true,
  ClauseEnd: true
}; //are the tags basically empty

var gotNothing = function gotNothing(t) {
  //fail-fast
  if (t.tags.Noun || t.tags.Verb || t.tags.Adjective) {
    return false;
  }

  var tags = Object.keys(t.tags);

  if (tags.length === 0) {
    return true;
  }

  if (tags.filter(function (tag) {
    return !nothing[tag];
  }).length === 0) {
    return true;
  }

  return false;
}; //in last-ditch, try to match 'rewatch' -> 'watch' in the lexicon


var tryRoot = function tryRoot(t) {
  if (/^(re|un)-?[^aeiou]./.test(t.normal) === true) {
    var str = t.normal.replace(/^(re|un)-?/, '');

    if (t.world.words.hasOwnProperty(str) === true) {
      var tag = t.world.words[str];

      if (tag === 'Infinitive' || tag === 'PresentTense' || tag === 'PastTense' || tag === 'Gerund') {
        return tag;
      }
    }
  }

  return null;
};

var noun_fallback = function noun_fallback(s) {
  for (var i = 0; i < s.terms.length; i++) {
    var t = s.terms[i]; //fail-fast

    if (t.tags.Noun || t.tags.Verb) {
      continue;
    } //ensure it only has the tag 'Term'


    if (gotNothing(t)) {
      //ensure it's atleast word-looking
      if (t.isWord() === false) {
        continue;
      }

      var rootTag = tryRoot(t);

      if (rootTag !== null) {
        t.tag(rootTag, 'root-tag-match');
        continue;
      }

      t.tag('Noun', 'noun-fallback');
    }
  }

  return s;
};

module.exports = noun_fallback;

},{}],108:[function(_dereq_,module,exports){
'use strict';

var irregulars = _dereq_('./contraction/01-irregulars');

var isWasHas = _dereq_('./contraction/02-isWasHas');

var easyOnes = _dereq_('./contraction/03-easyOnes');

var numberRange = _dereq_('./contraction/04-numberRange'); //find and pull-apart contractions


var interpret = function interpret(ts) {
  //check irregulars
  ts = irregulars(ts); //guess-at ambiguous "'s" one

  ts = isWasHas(ts); //check easy ones

  ts = easyOnes(ts); //5-7

  ts = numberRange(ts);
  return ts;
};

module.exports = interpret;

},{"./contraction/01-irregulars":124,"./contraction/02-isWasHas":125,"./contraction/03-easyOnes":126,"./contraction/04-numberRange":127}],109:[function(_dereq_,module,exports){
'use strict'; //ambiguous 'may' and 'march'

var preps = '(in|by|before|during|on|until|after|of|within|all)';
var thisNext = '(last|next|this|previous|current|upcoming|coming)';
var sections = '(start|end|middle|starting|ending|midpoint|beginning)';
var seasons = '(spring|summer|winter|fall|autumn)'; //ensure a year is approximately typical for common years
//please change in one thousand years

var tagYear = function tagYear(v, reason) {
  if (v.found !== true) {
    return;
  }

  v.list.forEach(function (ts) {
    var num = parseInt(ts.terms[0].normal, 10);

    if (num && num > 1000 && num < 3000) {
      ts.terms[0].tag('Year', reason);
    }
  });
}; //same, but for less-confident values


var tagYearSafer = function tagYearSafer(v, reason) {
  if (v.found !== true) {
    return;
  }

  v.list.forEach(function (ts) {
    var num = parseInt(ts.terms[0].normal, 10);

    if (num && num > 1900 && num < 2030) {
      ts.terms[0].tag('Year', reason);
    }
  });
}; //non-destructively tag values & prepositions as dates


var datePass = function datePass(ts) {
  //ambiguous month - person forms
  var people = '(january|april|may|june|summer|autumn|jan|sep)';

  if (ts.has(people)) {
    //give to april
    ts.match("#Infinitive #Determiner? #Adjective? #Noun? (to|for) ".concat(people)).lastTerm().tag('Person', 'ambig-person'); //remind june

    ts.match("#Infinitive ".concat(people)).lastTerm().tag('Person', 'infinitive-person'); //may waits for

    ts.match("".concat(people, " #PresentTense (to|for)")).firstTerm().tag('Person', 'ambig-active'); //april will

    ts.match("".concat(people, " #Modal")).firstTerm().tag('Person', 'ambig-modal'); //would april

    ts.match("#Modal ".concat(people)).lastTerm().tag('Person', 'modal-ambig'); //with april

    ts.match("(that|with|for) ".concat(people)).term(1).tag('Person', 'that-month'); //it is may

    ts.match("#Copula ".concat(people)).term(1).tag('Person', 'is-may'); //may is

    ts.match("".concat(people, " #Copula")).term(0).tag('Person', 'may-is'); //april the 5th

    ts.match("".concat(people, " the? #Value")).term(0).tag('Month', 'person-value'); //wednesday april

    ts.match("#Date ".concat(people)).term(1).tag('Month', 'correction-may'); //may 5th

    ts.match("".concat(people, " the? #Value")).firstTerm().tag('Month', 'may-5th'); //5th of may

    ts.match("#Value of ".concat(people)).lastTerm().tag('Month', '5th-of-may'); //by april

    ts.match("".concat(preps, " ").concat(people)).ifNo('#Holiday').term(1).tag('Month', 'preps-month'); //this april

    ts.match("(next|this|last) ".concat(people)).term(1).tag('Month', 'correction-may'); //maybe not 'this'
  } //ambiguous month - verb-forms


  var verbs = '(may|march)';

  if (ts.has(verbs)) {
    //quickly march
    ts.match("#Adverb ".concat(verbs)).lastTerm().tag('Infinitive', 'ambig-verb');
    ts.match("".concat(verbs, " #Adverb")).lastTerm().tag('Infinitive', 'ambig-verb'); //all march

    ts.match("".concat(preps, " ").concat(verbs)).lastTerm().tag('Month', 'in-month'); //this march

    ts.match("(next|this|last) ".concat(verbs)).lastTerm().tag('Month', 'this-month'); //with date

    ts.match("".concat(verbs, " the? #Value")).firstTerm().tag('Month', 'march-5th');
    ts.match("#Value of? ".concat(verbs)).lastTerm().tag('Month', '5th-of-march'); //nearby

    ts.match("[".concat(verbs, "] .? #Date")).lastTerm().tag('Month', 'march-and-feb');
    ts.match("#Date .? [".concat(verbs, "]")).lastTerm().tag('Month', 'feb-and-march');

    if (ts.has('march')) {
      //march to
      ts.match('march (up|down|back|to|toward)').term(0).tag('Infinitive', 'march-to'); //must march

      ts.match('#Modal march').term(1).tag('Infinitive', 'must-march');
    }
  } //sun 5th


  if (ts.has('sun')) {
    //sun feb 2
    ts.match('sun #Date').firstTerm().tag('WeekDay', 'sun-feb'); //sun the 5th

    ts.match('sun the #Ordinal').tag('Date').firstTerm().tag('WeekDay', 'sun-the-5th'); //the sun

    ts.match('#Determiner sun').lastTerm().tag('Singular', 'the-sun');
  } //sat, nov 5th


  if (ts.has('sat')) {
    //sat november
    ts.match('sat #Date').firstTerm().tag('WeekDay', 'sat-feb'); //this sat

    ts.match("".concat(preps, " sat")).lastTerm().tag('WeekDay', 'sat');
  } //months:


  if (ts.has('#Month')) {
    //June 5-7th
    ts.match("#Month #DateRange+").tag('Date', 'correction-numberRange'); //5th of March

    ts.match('#Value of #Month').tag('Date', 'value-of-month'); //5 March

    ts.match('#Cardinal #Month').tag('Date', 'cardinal-month'); //march 5 to 7

    ts.match('#Month #Value to #Value').tag('Date', 'value-to-value'); //march the 12th

    ts.match('#Month the #Value').tag('Date', 'month-the-value');
  }

  ts.match('in the (night|evening|morning|afternoon|day|daytime)').tag('Time', 'in-the-night');
  ts.match('(#Value|#Time) (am|pm)').tag('Time', 'value-ampm'); //months:

  if (ts.has('#Value')) {
    //for 4 months
    ts.match('for #Value #Duration').tag('Date', 'for-x-duration'); //values

    ts.match('#Value #Abbreviation').tag('Value', 'value-abbr');
    ts.match('a #Value').if('(hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)').tag('Value', 'a-value');
    ts.match('(minus|negative) #Value').tag('Value', 'minus-value');
    ts.match('#Value grand').tag('Value', 'value-grand'); // ts.match('#Ordinal (half|quarter)').tag('Value', 'ordinal-half');//not ready

    ts.match('(half|quarter) #Ordinal').tag('Value', 'half-ordinal');
    ts.match('(hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion) and #Value').tag('Value', 'magnitude-and-value');
    ts.match('#Value (point|decimal) #Value').tag('Value', 'value-point-value'); //for four days

    ts.match("".concat(preps, "? #Value #Duration")).tag('Date', 'value-duration');
    ts.match('(#WeekDay|#Month) #Value').ifNo('#Money').tag('Date', 'date-value');
    ts.match('#Value (#WeekDay|#Month)').ifNo('#Money').tag('Date', 'value-date'); //may twenty five

    var vs = ts.match('#TextValue #TextValue');

    if (vs.found && vs.has('#Date')) {
      vs.tag('#Date', 'textvalue-date');
    } //two days before


    ts.match('#Value #Duration #Conjunction').tag('Date', 'val-duration-conjunction'); //two years old

    ts.match('#Value #Duration old').unTag('Date', 'val-years-old');
  } //seasons


  if (ts.has(seasons)) {
    ts.match("".concat(preps, "? ").concat(thisNext, " ").concat(seasons)).tag('Date', 'thisNext-season');
    ts.match("the? ".concat(sections, " of ").concat(seasons)).tag('Date', 'section-season');
  } //rest-dates


  if (ts.has('#Date')) {
    //june the 5th
    ts.match('#Date the? #Ordinal').tag('Date', 'correction-date'); //last month

    ts.match("".concat(thisNext, " #Date")).tag('Date', 'thisNext-date'); //by 5 March

    ts.match('due? (by|before|after|until) #Date').tag('Date', 'by-date'); //tomorrow before 3

    ts.match('#Date (by|before|after|at|@|about) #Cardinal').not('^#Date').tag('Time', 'date-before-Cardinal'); //saturday am

    ts.match('#Date (am|pm)').term(1).unTag('Verb').unTag('Copula').tag('Time', 'date-am');
    ts.match('(last|next|this|previous|current|upcoming|coming|the) #Date').tag('Date', 'next-feb');
    ts.match('#Date (#Preposition|to) #Date').tag('Date', 'date-prep-date'); //start of june

    ts.match("the? ".concat(sections, " of #Date")).tag('Date', 'section-of-date'); //fifth week in 1998

    ts.match('#Ordinal #Duration in #Date').tag('Date', 'duration-in-date'); //early in june

    ts.match('(early|late) (at|in)? the? #Date').tag('Time', 'early-evening');
  } //year/cardinal tagging


  if (ts.has('#Cardinal')) {
    var v = ts.match("#Date #Value #Cardinal").lastTerm();
    tagYear(v, 'date-value-year'); //scoops up a bunch

    v = ts.match("#Date+ #Cardinal").lastTerm();
    tagYear(v, 'date-year'); //feb 8 2018

    v = ts.match("#Month #Value #Cardinal").lastTerm();
    tagYear(v, 'month-value-year'); //feb 8 to 10th 2018

    v = ts.match("#Month #Value to #Value #Cardinal").lastTerm();
    tagYear(v, 'month-range-year'); //in 1998

    v = ts.match("(in|of|by|during|before|starting|ending|for|year) #Cardinal").lastTerm();
    tagYear(v, 'in-year'); //q2 2009

    v = ts.match('(q1|q2|q3|q4) [#Cardinal]');
    tagYear(v, 'in-year'); //2nd quarter 2009

    v = ts.match('#Ordinal quarter [#Cardinal]');
    tagYear(v, 'in-year'); //in the year 1998

    v = ts.match('the year [#Cardinal]');
    tagYear(v, 'in-year'); //it was 1998

    v = ts.match('it (is|was) [#Cardinal]');
    tagYearSafer(v, 'in-year'); //was 1998 and...

    v = ts.match("#Cardinal !#Plural").firstTerm();
    tagYearSafer(v, 'year-unsafe');
  } //another pass at dates..


  if (ts.has('#Date')) {
    //time:
    if (ts.has('#Time')) {
      ts.match('#Cardinal #Time').not('#Year').tag('Time', 'value-time');
      ts.match('(by|before|after|at|@|about) #Time').tag('Time', 'preposition-time'); //2pm est

      ts.match('#Time (eastern|pacific|central|mountain)').term(1).tag('Time', 'timezone');
      ts.match('#Time (est|pst|gmt)').term(1).tag('Time', 'timezone abbr');
    } //fix over-greedy


    var date = ts.match('#Date+').splitOn('Clause');

    if (date.has('(#Year|#Time)') === false) {
      //12 february 12
      date.match('#Value (#Month|#Weekday) #Value').lastTerm().unTag('Date');
    }
  }

  return ts;
};

module.exports = datePass;

},{}],110:[function(_dereq_,module,exports){
'use strict'; //auxiliary verbs are extra verbs beside the main ones
// "[will be] going" - etc.

var Auxiliary = {
  'do': true,
  'don\'t': true,
  'does': true,
  'doesn\'t': true,
  'will': true,
  'wont': true,
  'won\'t': true,
  'have': true,
  'haven\'t': true,
  'had': true,
  'hadn\'t': true,
  'not': true
};

var corrections = function corrections(ts) {
  //set verbs as auxillaries
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (Auxiliary[t.normal] || Auxiliary[t.silent_term]) {
      var next = ts.terms[i + 1]; //if next word is a verb

      if (next && (next.tags.Verb || next.tags.Adverb || next.tags.Negative)) {
        t.tag('Auxiliary', 'corrections-Auxiliary');
        continue;
      }
    }
  }

  return ts;
};

module.exports = corrections;

},{}],111:[function(_dereq_,module,exports){
'use strict'; // 'not' is sometimes a verb, sometimes an adjective

var negation_step = function negation_step(ts) {
  for (var i = 0; i < ts.length; i++) {
    var t = ts.get(i);

    if (t.normal === 'not' || t.silent_term === 'not') {
      //find the next verb/adjective
      for (var o = i + 1; o < ts.length; o++) {
        if (ts.get(o).tags.Verb) {
          t.tag('VerbPhrase', 'negate-verb');
          break;
        }

        if (ts.get(o).tags.Adjective) {
          t.tag('AdjectivePhrase', 'negate-adj');
          break;
        }
      }
    }
  }

  return ts;
};

module.exports = negation_step;

},{}],112:[function(_dereq_,module,exports){
'use strict'; //-types of comma-use-
// PlaceComma - Hollywood, California
// List       - cool, fun, and great.
// ClauseEnd  - if so, we do.
//like Toronto, Canada

var isPlaceComma = function isPlaceComma(ts, i) {
  var t = ts.terms[i];
  var nextTerm = ts.terms[i + 1]; //'australia, canada' is a list

  if (nextTerm && t.tags.Place && !t.tags.Country && nextTerm.tags.Country) {
    return true;
  }

  return false;
}; //adj, noun, or verb


var mainTag = function mainTag(t) {
  if (t.tags.Adjective) {
    return 'Adjective';
  }

  if (t.tags.Noun) {
    return 'Noun';
  }

  if (t.tags.Verb) {
    return 'Verb';
  }

  if (t.tags.Value) {
    return 'Value';
  }

  return null;
}; //take the first term with a comma, and test to the right.
//the words with a comma must be the same pos.


var isList = function isList(ts, i) {
  var start = i;
  var tag = mainTag(ts.terms[i]); //ensure there's a following comma, and its the same pos
  //then a Conjunction

  var sinceComma = 0;
  var count = 0;
  var hasConjunction = false;

  for (i = i + 1; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //are we approaching the end

    if (count > 0 && t.tags.Conjunction) {
      hasConjunction = true;
      continue;
    } //found one,


    if (t.tags[tag]) {
      //looks good. keep it going
      if (t.tags.Comma) {
        count += 1;
        sinceComma = 0;
        continue;
      }

      if (count > 0 && hasConjunction) {
        //is this the end of the list?
        ts.slice(start, i).tag('List');
        return true;
      }
    }

    sinceComma += 1; //have we gone too far without a comma?

    if (sinceComma > 5) {
      return false;
    } //this one, not a clause..


    if (tag === 'Value') {
      return true;
    }
  }

  return false;
};

var commaStep = function commaStep(ts) {
  //tag the correct punctuation forms
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];
    var punct = t.getPunctuation();

    if (punct === ',') {
      t.tag('Comma', 'comma-step');
      continue;
    }

    if (punct === ';' || punct === ':') {
      t.tag('ClauseEnd', 'clause-punt');
      continue;
    } //support elipses


    if (t.whitespace.after.match(/^\.\./)) {
      t.tag('ClauseEnd', 'clause-elipses');
      continue;
    } //support ' - ' clause


    if (ts.terms[i + 1] && ts.terms[i + 1].whitespace.before.match(/ - /)) {
      t.tag('ClauseEnd', 'hypen-clause');
      continue;
    }
  } //disambiguate the commas now


  for (var _i = 0; _i < ts.terms.length; _i++) {
    var _t = ts.terms[_i];

    if (_t.tags.Comma) {
      //if we already got it
      if (_t.tags.List) {
        continue;
      } //like 'Hollywood, California'


      if (isPlaceComma(ts, _i)) {
        continue;
      } //like 'cold, wet hands'


      var found = isList(ts, _i); //otherwise, it's a phrasal comma, like 'you must, if you think so'

      if (!found) {
        _t.tag('ClauseEnd', 'phrasal-comma');
      }
    }
  }

  return ts;
};

module.exports = commaStep;

},{}],113:[function(_dereq_,module,exports){
'use strict';

var quotemarks = {
  "\"": {
    close: "\"",
    tag: 'StraightDoubleQuotes'
  },
  "\uFF02": {
    close: "\uFF02",
    tag: 'StraightDoubleQuotesWide'
  },
  "'": {
    close: "'",
    tag: 'StraightSingleQuotes'
  },
  "\u201C": {
    close: "\u201D",
    tag: 'CommaDoubleQuotes'
  },
  "\u2018": {
    close: "\u2019",
    tag: 'CommaSingleQuotes'
  },
  "\u201F": {
    close: "\u201D",
    tag: 'CurlyDoubleQuotesReversed'
  },
  "\u201B": {
    close: "\u2019",
    tag: 'CurlySingleQuotesReversed'
  },
  "\u201E": {
    close: "\u201D",
    tag: 'LowCurlyDoubleQuotes'
  },
  "\u2E42": {
    close: "\u201D",
    tag: 'LowCurlyDoubleQuotesReversed'
  },
  "\u201A": {
    close: "\u2019",
    tag: 'LowCurlySingleQuotes'
  },
  "\xAB": {
    close: "\xBB",
    tag: 'AngleDoubleQuotes'
  },
  "\u2039": {
    close: "\u203A",
    tag: 'AngleSingleQuotes'
  },
  // Prime 'non quotation'
  "\u2035": {
    close: "\u2032",
    tag: 'PrimeSingleQuotes'
  },
  "\u2036": {
    close: "\u2033",
    tag: 'PrimeDoubleQuotes'
  },
  "\u2037": {
    close: "\u2034",
    tag: 'PrimeTripleQuotes'
  },
  // Prime 'quotation' variation
  "\u301D": {
    close: "\u301E",
    tag: 'PrimeDoubleQuotes'
  },
  "`": {
    close: "\xB4",
    tag: 'PrimeSingleQuotes'
  },
  "\u301F": {
    close: "\u301E",
    tag: 'LowPrimeDoubleQuotesReversed'
  }
}; // Convert the close quote to a regex.

Object.keys(quotemarks).forEach(function (open) {
  quotemarks[open].regex = new RegExp(quotemarks[open].close + '[;:,.]*');
  quotemarks[open].open = open;
}); // Improve open match detection.

var startQuote = new RegExp('[' + Object.keys(quotemarks).join('') + ']'); //tag a inline quotation as such

var quotation_step = function quotation_step(ts) {
  // Isolate the text so it doesn't change.
  var terms = ts.terms.slice(0); //.map(e => e.text);

  for (var i = 0; i < terms.length; i++) {
    var t = ts.terms[i];

    if (startQuote.test(t.whitespace.before)) {
      // Get the match and split it into groups
      var quotes = t.whitespace.before.match(startQuote).shift().split(''); // Get close and tag info.

      quotes = quotes.map(function (mark) {
        return quotemarks[mark];
      }); // Look for the ending

      for (var o = 0; o < ts.terms.length; o++) {
        // max-length don't go-on forever
        if (!terms[i + o] || o > 28) {
          break;
        } // Find the close.


        var index = -1;

        for (var qi = 0; qi < quotes.length; qi += 1) {
          if (quotes[qi].regex.test(terms[i + o].whitespace.after) === true) {
            index = qi;
            break;
          }
        }

        if (index !== -1) {
          // Remove the found
          var quote = quotes.splice(index, 1).pop();

          if (quote.regex.test(ts.terms[i + o].normal)) {
            ts.terms[i + o].whitespace.after.replace(quote.regex, '');
          } // Tag the things.


          t.tag('StartQuotation', 'quotation_open');
          ts.terms[i + o].tag('EndQuotation', 'quotation_close');
          ts.slice(i, i + o + 1).tag('Quotation', 'quotation_step'); // Compensate for multiple close quotes ('"Really"')

          o -= 1;

          if (!quotes.length) {
            break;
          }
        }
      }
    }
  }

  return ts;
};

module.exports = quotation_step;

},{}],114:[function(_dereq_,module,exports){
'use strict'; //decide if an apostrophe s is a contraction or not
// 'spencer's nice' -> 'spencer is nice'
// 'spencer's house' -> 'spencer's house'

var singleQuotes = [["'", "'"], // Straight Single Quotes
["\u2018", "\u2019"], // Comma Single Quotes
["\u201B", "\u2019"], // Curly Single Quotes Reversed
["\u201A", "\u2019"], // Low Curly Single Quotes
["\u2035", "\u2032"], // Prime Single Quotes Alt
["`", "\xB4"] // Prime Single Quotes
]; //these are always contractions

var blacklist = ['it\'s', 'that\'s']; // Get all types of single quote.

var apostrophes = '\'‘’‛‚‵′`´';
var afterWord = new RegExp('([a-z]s[' + apostrophes + '])\\W*$'); // [^\w]* match 0 or more of any char that is NOT alphanumeric

var hasApostrophe = new RegExp('[' + apostrophes + ']');
var trailers = new RegExp('[^' + apostrophes + '\\w]+$');
var quoteRegex = {};
singleQuotes.forEach(function (quote) {
  quoteRegex[quote[0]] = new RegExp(quote[1] + '[^' + quote[1] + '\\w]*$');
}); // Compensate for different `'`s in the blacklist

blacklist.map(function (item) {
  return new RegExp(item.replace('\'', '[' + apostrophes + ']'));
}); // A possessive means `'s` describes ownership
// Not a contraction, like it's -> `it is`

var is_possessive = function is_possessive(terms, text, index) {
  var thisWord = terms.get(index);
  var nextWord = terms.get(index + 1);
  var stepWord = terms.get(index + 2); //our booleans:
  // `blacklist` are always contractions, not possessive

  var inBlacklist = blacklist.map(function (r) {
    return text.match(r);
  }).find(function (m) {
    return m;
  }); // If no apostrophe s or s apostrophe

  var endTick = hasApostrophe.test(thisWord.whitespace.after); // "spencers'" - this is always possessive - eg "flanders'"

  var hasPronoun = thisWord.tags.Pronoun;

  if (inBlacklist || hasPronoun || !endTick) {
    return false;
  }

  if (afterWord.test(text) || nextWord === undefined) {
    return true;
  } // Next word is 'house'


  if (nextWord.tags.Noun === true || thisWord.tags.ClauseEnd === true) {
    return true;
  } //rocket's red glare


  if (stepWord !== undefined && nextWord.tags.Adjective && stepWord.tags.Noun) {
    return true;
  }

  return false;
}; // Tag each term as possessive, if it should


var possessiveStep = function possessiveStep(ts) {
  var expectingClosers = [];

  for (var i = 0; i < ts.length; i++) {
    var term = ts.get(i);
    var text = term.text; // First detect open quotes before detecting apostrophes

    if (typeof quoteRegex[text[0]] !== 'undefined') {
      // Add the expected closing quotes to our inspection array.
      expectingClosers[expectingClosers.length] = quoteRegex[text[0]];
      text = text.slice(1);
    } // Pre checking for quotes. e.g: Carlos'.’. -> Carlos'.’


    text = text.replace(trailers, ''); // If the string ends with an expected closer.

    var closer = -1;

    for (var qi = 0; qi < expectingClosers.length; qi += 1) {
      if (expectingClosers[qi].test(text) === true) {
        closer = qi;
        break;
      }
    }

    if (closer !== -1) {
      text = text.replace(expectingClosers[closer], '');
      delete expectingClosers[closer];
    } // Post checking for quotes. e.g: Carlos'. -> Carlos'


    text = text.replace(trailers, '');

    if (is_possessive(ts, text, i)) {
      // If it's not already a noun, co-erce it to one
      if (!term.tags['Noun']) {
        term.tag('Noun', 'possessive_pass');
      }

      term.tag('Possessive', 'possessive_pass'); // If it's been detected as a `Contraction`

      if (term.tags.Contraction === true) {
        // Remove the `Contraction` tag and silent_terms
        term.unTag('Contraction');
        ts.terms.splice(i + 1, 1);
        term.silent_term = '';
      }
    }
  }

  return ts;
};

module.exports = possessiveStep;

},{}],115:[function(_dereq_,module,exports){
'use strict'; //tag 'FBI' as letters-representing-words.
//we guess if letters are an acronym in the Term class.

var acronym_step = function acronym_step(ts) {
  ts.terms.forEach(function (t) {
    if (t.isAcronym()) {
      t.tag('Acronym', 'acronym-step');
    }
  });
  return ts;
};

module.exports = acronym_step;

},{}],116:[function(_dereq_,module,exports){
'use strict'; //sort-out things like 'theresa may', or 'will jones'.

var person_step = function person_step(ts) {
  //mr Putin
  ts.match('(mr|mrs|ms|dr) (#TitleCase|#Possessive)+').tag('#Person', 'mr-putin'); //a bunch of ambiguous first names

  var maybeNoun = '(rose|robin|dawn|ray|holly|bill|joy|viola|penny|sky|violet|daisy|melody|kelvin|hope|mercedes|olive|jewel|faith|van|charity|miles|lily|summer|dolly|rod|dick|cliff|lane|reed|kitty|art|jean|trinity)';

  if (ts.has(maybeNoun)) {
    ts.match('(#Determiner|#Adverb|#Pronoun|#Possessive) [' + maybeNoun + ']').tag('Noun', 'the-ray');
    ts.match(maybeNoun + ' (#Person|#Acronym|#TitleCase)').canBe('#Person').tag('Person', 'ray-smith');
  } //verbs or people-names


  var maybeVerb = '(pat|wade|ollie|will|rob|buck|bob|mark|jack)';

  if (ts.has(maybeVerb)) {
    ts.match('(#Modal|#Adverb) [' + maybeVerb + ']').tag('Verb', 'would-mark');
    ts.match(maybeVerb + ' (#Person|#TitleCase)').tag('Person', 'rob-smith');
  } //adjectives or people-names


  var maybeAdj = '(misty|rusty|dusty|rich|randy)';

  if (ts.has(maybeAdj)) {
    ts.match('#Adverb [' + maybeAdj + ']').tag('Adjective', 'really-rich');
    ts.match(maybeAdj + ' (#Person|#TitleCase)').tag('Person', 'randy-smith');
  } //dates as people names


  var maybeDate = '(april|june|may|jan|august|eve)';

  if (ts.has(maybeDate)) {
    ts.match(String(maybeDate) + ' (#Person|#TitleCase)').canBe('#Person').tag('Person', 'june-smith');
    ts.match('(in|during|on|by|before|#Date) [' + maybeDate + ']').canBe('#Date').tag('Date', 'in-june');
    ts.match(maybeDate + ' (#Date|#Value)').canBe('#Date').tag('Date', 'june-5th');
  } //place-names as people-names


  var maybePlace = '(paris|alexandria|houston|kobe|salvador|sydney)';

  if (ts.has(maybePlace)) {
    ts.match('(in|near|at|from|to|#Place) [' + maybePlace + ']').canBe('#Place').tag('Place', 'in-paris');
    ts.match('[' + maybePlace + '] #Place').canBe('#Place').tag('Place', 'paris-france');
    ts.match('[' + maybePlace + '] #Person').canBe('#Person').tag('Person', 'paris-hilton');
  } //this one is tricky


  if (ts.match('al')) {
    ts.match('al (#Person|#TitleCase)').canBe('#Person').tag('#Person', 'al-borlen');
    ts.match('#TitleCase al #TitleCase').canBe('#Person').tag('#Person', 'arabic-al-arabic');
  } //ambiguous honorifics


  ts.match('(private|general|major|corporal|lord|lady|secretary|premier) #Honorific? #Person').terms(0).tag('Honorific', 'ambg-honorifics'); //first general..

  ts.match('(1st|2nd|first|second) #Honorific').terms(0).tag('Honorific', 'ordinal-honorific'); // let firstNames = '()';
  // let names = ts.match(firstNames);
  // if (names.found) {
  //   //prolly not a name:
  //   if (ts.has('(#Determiner|#Adverb|#Pronoun|#Possessive) ' + firstNames)) {
  //     names.unTag('Person', 'the-bill');
  //   } else {
  //     //probably a name here:
  //     let name = ts.match('(#Honorific|#Person) ' + firstNames);
  //     if (!name.found) {
  //       name = ts.match(firstNames + ' (#Person|#Honorific|#TitleCase)');
  //     }
  //     if (name.found && name.has('(#Place|#Date|#Organization)') === false) {
  //       name.tag('Person', 'dr-bill');
  //       names.tag('FirstName', 'ambiguous-name');
  //     }
  //   }
  // }
  //tighter-matches for other ambiguous names:
  // ts.match('(al|) #Acronym? #LastName').firstTerm().tag('#FirstName', 'ambig-lastname');
  //methods requiring a firstname match

  if (ts.has('#FirstName')) {
    // Firstname x (dangerous)
    var tmp = ts.match('#FirstName #Noun').ifNo('^#Possessive').ifNo('#ClauseEnd .');
    tmp.lastTerm().canBe('#LastName').tag('#LastName', 'firstname-noun'); //ferdinand de almar

    ts.match('#FirstName de #Noun').canBe('#Person').tag('#Person', 'firstname-de-noun'); //Osama bin Laden

    ts.match('#FirstName (bin|al) #Noun').canBe('#Person').tag('#Person', 'firstname-al-noun'); //John L. Foo

    ts.match('#FirstName #Acronym #TitleCase').tag('Person', 'firstname-acronym-titlecase'); //Andrew Lloyd Webber

    ts.match('#FirstName #FirstName #TitleCase').tag('Person', 'firstname-firstname-titlecase'); //Mr Foo

    ts.match('#Honorific #FirstName? #TitleCase').tag('Person', 'Honorific-TitleCase'); //John Foo

    ts.match('#FirstName #TitleCase #TitleCase?').match('#Noun+').tag('Person', 'firstname-titlecase'); //peter the great

    ts.match('#FirstName the #Adjective').tag('Person', 'correction-determiner5'); //very common-but-ambiguous lastnames

    ts.match('#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)').tag('#Person', 'firstname-maybe'); //Joe K. Sombrero

    ts.match('#FirstName #Acronym #Noun').ifNo('#Date').tag('#Person', 'n-acro-noun').lastTerm().tag('#LastName', 'n-acro-noun'); // Dwayne 'the rock' Johnson

    ts.match('#FirstName [#Determiner? #Noun] #LastName').tag('#NickName', 'first-noun-last').tag('#Person', 'first-noun-last'); //john bodego's

    ts.match('#FirstName (#Singular|#Possessive)').ifNo('#Date').ifNo('#NickName').tag('#Person', 'first-possessive').lastTerm().tag('#LastName', 'first-possessive');
  } //methods requiring a lastname match


  if (ts.has('#LastName')) {
    // x Lastname
    ts.match('#Noun #LastName').firstTerm().canBe('#FirstName').tag('#FirstName', 'noun-lastname'); //ambiguous-but-common firstnames

    ts.match('(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill) #LastName').firstTerm().tag('#FirstName', 'maybe-lastname'); //Jani K. Smith

    ts.match('#TitleCase #Acronym? #LastName').ifNo('#Date').tag('#Person', 'title-acro-noun').lastTerm().tag('#LastName', 'title-acro-noun'); //is foo Smith

    ts.match('#Copula (#Noun|#PresentTense) #LastName').term(1).tag('#FirstName', 'copula-noun-lastname');
  } //methods requiring a titlecase


  if (ts.has('#TitleCase')) {
    ts.match('#Acronym #TitleCase').canBe('#Person').tag('#Person', 'acronym-titlecase'); //ludwig van beethovan

    ts.match('#TitleCase (van|al|bin) #TitleCase').canBe('#Person').tag('Person', 'correction-titlecase-van-titlecase');
    ts.match('#TitleCase (de|du) la? #TitleCase').canBe('#Person').tag('Person', 'correction-titlecase-van-titlecase'); //Morgan Shlkjsfne

    ts.match('#Person #TitleCase').match('#TitleCase #Noun').canBe('#Person').tag('Person', 'correction-person-titlecase'); //pope francis

    ts.match('(lady|queen|sister) #TitleCase').ifNo('#Date').ifNo('#Honorific').tag('#FemaleName', 'lady-titlecase');
    ts.match('(king|pope|father) #TitleCase').ifNo('#Date').tag('#MaleName', 'correction-poe');
  } //j.k Rowling


  ts.match('#Noun van der? #Noun').canBe('#Person').tag('#Person', 'von der noun'); //king of spain

  ts.match('(king|queen|prince|saint|lady) of? #Noun').canBe('#Person').tag('#Person', 'king-of-noun'); //mr X

  ts.match('#Honorific #Acronym').tag('Person', 'Honorific-TitleCase'); //peter II

  ts.match('#Person #Person the? #RomanNumeral').tag('Person', 'correction-roman-numeral'); //'Professor Fink', 'General McCarthy'

  ts.match('#Honorific #Person').tag('Person', 'Honorific-Person'); //remove single 'mr'

  ts.match('^#Honorific$').unTag('Person', 'single-honorific');
  return ts;
};

module.exports = person_step;

},{}],117:[function(_dereq_,module,exports){
'use strict'; //orgwords like 'bank' in 'Foo Bank'

var orgWords = _dereq_('../../world/more-data/orgWords'); //could this word be an organization


var maybeOrg = function maybeOrg(t) {
  //must be a noun
  if (!t.tags.Noun) {
    return false;
  } //can't be these things


  if (t.tags.Pronoun || t.tags.Comma || t.tags.Possessive || t.tags.Place) {
    return false;
  } //must be one of these


  if (t.tags.TitleCase || t.tags.Organization || t.tags.Acronym) {
    return true;
  }

  return false;
};

var organization_step = function organization_step(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (orgWords.hasOwnProperty(t.root) === true) {
      //eg. Toronto University
      var lastTerm = ts.terms[i - 1];

      if (lastTerm && maybeOrg(lastTerm)) {
        lastTerm.tag('Organization', 'org-word-1');
        t.tag('Organization', 'org-word-2');
        continue;
      } //eg. University of Toronto


      var nextTerm = ts.terms[i + 1];

      if (nextTerm && nextTerm.normal === 'of') {
        if (ts.terms[i + 2] && maybeOrg(ts.terms[i + 2])) {
          t.tag('Organization', 'org-of-word-1');
          nextTerm.tag('Organization', 'org-of-word-2');
          ts.terms[i + 2].tag('Organization', 'org-of-word-3');
          continue;
        }
      }
    }
  }

  if (ts.has('#Acronym')) {
    ts.match('the #Acronym').not('(iou|fomo|yolo|diy|dui|nimby)').lastTerm().tag('Organization', 'the-acronym');
    ts.match('#Acronym').match('#Possessive').tag('Organization', 'possessive-acronym');
  }

  return ts;
};

module.exports = organization_step;

},{"../../world/more-data/orgWords":221}],118:[function(_dereq_,module,exports){
'use strict'; //tag the words between '(' and ')' as #Parentheses

var parenthesesStep = function parenthesesStep(ts) {
  ts.terms.forEach(function (t, i) {
    if (t.tags.StartBracket) {
      for (var o = i; o < ts.terms.length; o += 1) {
        if (ts.terms[o].tags.EndBracket === true) {
          ts.slice(i, o + 1).tag('Parentheses');
          break;
        }
      }
    }
  });
  return ts;
};

module.exports = parenthesesStep;

},{}],119:[function(_dereq_,module,exports){
'use strict';

var isPlural = _dereq_('../../subset/nouns/isPlural');

var pluralStep = function pluralStep(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (t.tags.Noun) {
      //skip existing fast
      if (t.tags.Singular || t.tags.Plural) {
        continue;
      } //check if it's plural


      var plural = isPlural(t, t.world); //can be null if unknown

      if (plural === true) {
        t.tag('Plural', 'pluralStep');
      } else if (plural === false) {
        t.tag('Singular', 'pluralStep');
      }
    }
  }

  return ts;
};

module.exports = pluralStep;

},{"../../subset/nouns/isPlural":39}],120:[function(_dereq_,module,exports){
'use strict'; //regs-

var numericCardinal = /^\$?[0-9,](\.[0-9])?/;
var isOrdinal = /[0-9](st|nd|rd|th)$/; // const hasText = /^[a-z]/;

var value_step = function value_step(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (t.tags.Value === true) {
      //ordinal/cardinal
      if (t.tags.Ordinal === undefined && t.tags.Cardinal === undefined) {
        if (numericCardinal.test(t.normal) === true) {
          t.tag('Cardinal', 'cardinal-val-regex');
          t.tag('NumericValue', 'NumericValue-regex');
        } else if (isOrdinal.test(t.normal) === true) {
          t.tag('Ordinal', 'ordinal-value-regex');
          t.tag('NumericValue', 'NumericValue-regex');
        }
      }
    }
  } //5 books


  ts.match('#Cardinal [#Plural]').tag('Unit', 'cardinal-plural'); //5th book

  ts.match('#Ordinal [#Singular]').tag('Unit', 'ordinal-singular'); //1 book

  ts.match('(one|first|1|1st) [#Singular]').tag('Unit', 'one-singular');
  return ts;
};

module.exports = value_step;

},{}],121:[function(_dereq_,module,exports){
'use strict'; //mostly pos-corections here

var corrections = function corrections(ts) {
  //ambig prepositions/conjunctions
  if (ts.has('so')) {
    //so funny
    ts.match('so #Adjective').match('so').tag('Adverb', 'so-adv'); //so the

    ts.match('so #Noun').match('so').tag('Conjunction', 'so-conj'); //do so

    ts.match('do so').match('so').tag('Noun', 'so-noun');
  }

  if (ts.has('all')) {
    //all students
    ts.match('[all] #Determiner? #Noun').tag('Adjective', 'all-noun'); //it all fell apart

    ts.match('[all] #Verb').tag('Adverb', 'all-verb');
  } //the ambiguous word 'that' and 'which'


  if (ts.has('(that|which)')) {
    //remind john that
    ts.match('#Verb #Adverb? #Noun (that|which)').lastTerm().tag('Preposition', 'that-prep'); //that car goes

    ts.match('that #Noun #Verb').firstTerm().tag('Determiner', 'that-determiner'); //work, which has been done.

    ts.match('#Comma [which] (#Pronoun|#Verb)').tag('Preposition', 'which-copula'); //things that provide
    // ts.match('#Plural (that|which) #Adverb? #Verb').term(1).tag('Preposition', 'noun-that');
  } //Determiner-signals


  if (ts.has('#Determiner')) {
    //the wait to vote
    ts.match('(the|this) [#Verb] #Preposition .').tag('Noun', 'correction-determiner1'); //the swim

    ts.match('(the|those|these) (#Infinitive|#PresentTense|#PastTense)').term(1).tag('Noun', 'correction-determiner2'); //a staggering cost

    ts.match('(a|an) [#Gerund]').tag('Adjective', 'correction-a|an');
    ts.match('(a|an) #Adjective (#Infinitive|#PresentTense)').term(2).tag('Noun', 'correction-a|an2'); //some pressing issues

    ts.match('some [#Verb] #Plural').tag('Noun', 'correction-determiner6'); //the test string

    ts.match('#Determiner [#Infinitive] #Noun').tag('Noun', 'correction-determiner7'); //the orange.

    ts.match('#Determiner #Adjective$').not('(#Comparative|#Superlative)').term(1).tag('Noun', 'the-adj-1'); //the orange is

    ts.match('#Determiner [#Adjective] (#Copula|#PastTense|#Auxiliary)').tag('Noun', 'the-adj-2'); //the nice swim

    ts.match('(the|this|those|these) #Adjective [#Verb]').tag('Noun', 'the-adj-verb'); //the truly nice swim

    ts.match('(the|this|those|these) #Adverb #Adjective [#Verb]').tag('Noun', 'correction-determiner4'); //a stream runs

    ts.match('(the|this|a|an) [#Infinitive] #Adverb? #Verb').tag('Noun', 'correction-determiner5'); //a sense of

    ts.match('#Determiner [#Verb] of').tag('Noun', 'the-verb-of'); //the threat of force

    ts.match('#Determiner #Noun of [#Verb]').tag('Noun', 'noun-of-noun'); //a close

    ts.match('#Determiner #Adverb? [close]').tag('Adjective', 'a-close'); //did a 900, paid a 20

    ts.match('#Verb (a|an) [#Value]').tag('Singular', 'a-value'); //a tv show

    ts.match('(a|an) #Noun [#Infinitive]').tag('Noun', 'a-noun-inf');
  } //like


  if (ts.has('like')) {
    ts.match('just [like]').tag('Preposition', 'like-preposition'); //folks like her

    ts.match('#Noun [like] #Noun').tag('Preposition', 'noun-like'); //look like

    ts.match('#Verb [like]').tag('Adverb', 'verb-like'); //exactly like

    ts.match('#Adverb like').not('(really|generally|typically|usually|sometimes|often) like').lastTerm().tag('Adverb', 'adverb-like');
  }

  if (ts.has('#Value')) {
    //half a million
    ts.match('half a? #Value').tag('Value', 'half-a-value'); //quarter not ready

    ts.match('#Value and a (half|quarter)').tag('Value', 'value-and-a-half'); //all values are either ordinal or cardinal
    // ts.match('#Value').match('!#Ordinal').tag('#Cardinal', 'not-ordinal');
    //money

    ts.match('#Value+ #Currency').tag('Money', 'value-currency').lastTerm().tag('Unit', 'money-unit');
    ts.match('#Money and #Money #Currency?').tag('Money', 'money-and-money'); //1 800 PhoneNumber

    ts.match('1 #Value #PhoneNumber').tag('PhoneNumber', '1-800-Value'); //(454) 232-9873

    ts.match('#NumericValue #PhoneNumber').tag('PhoneNumber', '(800) PhoneNumber'); //two hundredth

    ts.match('#TextValue+').match('#Cardinal+ #Ordinal').tag('Ordinal', 'two-hundredth');
  }

  if (ts.has('#Noun')) {
    //'more' is not always an adverb
    ts.match('more #Noun').tag('Noun', 'more-noun'); //the word 'second'

    ts.match('[second] #Noun').not('#Honorific').unTag('Unit').tag('Ordinal', 'second-noun'); //he quickly foo

    ts.match('#Noun #Adverb [#Noun]').tag('Verb', 'correction'); //fix for busted-up phrasalVerbs

    ts.match('#Noun [#Particle]').tag('Preposition', 'repair-noPhrasal'); //John & Joe's

    ts.match('#Noun (&|n) #Noun').tag('Organization', 'Noun-&-Noun'); //Aircraft designer

    ts.match('#Noun #Actor').tag('Actor', 'thing-doer'); //this rocks

    ts.match('(this|that) [#Plural]').tag('PresentTense', 'this-verbs'); //by a bear.

    ts.match('#Determiner #Infinitive$').lastTerm().tag('Noun', 'a-inf'); //the western line

    ts.match('#Determiner [(western|eastern|northern|southern|central)] #Noun').tag('Noun', 'western-line');
    ts.match('(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun').tag('Noun', 'technical-noun'); //organization

    if (ts.has('#Organization')) {
      ts.match('#Organization of the? #TitleCase').tag('Organization', 'org-of-place');
      ts.match('#Organization #Country').tag('Organization', 'org-country');
      ts.match('(world|global|international|national|#Demonym) #Organization').tag('Organization', 'global-org');
    }

    if (ts.has('#Possessive')) {
      //my buddy
      ts.match('#Possessive [#FirstName]').unTag('Person', 'possessive-name'); //spencer kelly's

      ts.match('#FirstName #Acronym? #Possessive').notIf('#Comma').match('#FirstName #Acronym? #LastName').tag('Possessive'); //Super Corp's fundraiser

      ts.match('#Organization+ #Possessive').notIf('#Comma').tag('Possessive'); //Los Angeles's fundraiser

      ts.match('#Place+ #Possessive').notIf('#Comma').tag('Possessive');
    }
  }

  if (ts.has('#Verb')) {
    //still make
    ts.match('[still] #Verb').tag('Adverb', 'still-verb'); //'u' as pronoun

    ts.match('[u] #Verb').tag('Pronoun', 'u-pronoun-1'); //is no walk

    ts.match('is no [#Verb]').tag('Noun', 'is-no-verb'); //different views than

    ts.match('[#Verb] than').tag('Noun', 'correction'); //her polling

    ts.match('#Possessive [#Verb]').tag('Noun', 'correction-possessive'); //there are reasons

    ts.match('there (are|were) #Adjective? [#PresentTense]').tag('Plural', 'there-are'); //jack seems guarded

    ts.match('#Singular (seems|appears) #Adverb? [#PastTense$]').tag('Adjective', 'seems-filled');

    if (ts.has('(who|what|where|why|how|when)')) {
      //the word 'how'
      ts.match('^how').tag('QuestionWord', 'how-question').tag('QuestionWord', 'how-question');
      ts.match('how (#Determiner|#Copula|#Modal|#PastTense)').term(0).tag('QuestionWord', 'how-is'); // //the word 'which'

      ts.match('^which').tag('QuestionWord', 'which-question').tag('QuestionWord', 'which-question');
      ts.match('which . (#Noun)+ #Pronoun').term(0).tag('QuestionWord', 'which-question2');
      ts.match('which').tag('QuestionWord', 'which-question3'); //where
      //how he is driving

      var word = ts.match('#QuestionWord #Noun #Copula #Adverb? (#Verb|#Adjective)').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'how-he-is-x'); //when i go fishing

      word = ts.match('#QuestionWord #Noun #Adverb? #Infinitive not? #Gerund').firstTerm();
      word.unTag('QuestionWord').tag('Conjunction', 'when i go fishing');
    }

    if (ts.has('#Copula')) {
      //is eager to go
      ts.match('#Copula #Adjective to #Verb').match('#Adjective to').tag('Verb', 'correction'); //is mark hughes

      ts.match('#Copula [#Infinitive] #Noun').tag('Noun', 'is-pres-noun');
      ts.match('[#Infinitive] #Copula').tag('Noun', 'infinitive-copula'); //sometimes adverbs - 'pretty good','well above'

      ts.match('#Copula (pretty|dead|full|well) (#Adjective|#Noun)').notIf('#Comma').tag('#Copula #Adverb #Adjective', 'sometimes-adverb'); //sometimes not-adverbs

      ts.match('#Copula [(just|alone)$]').tag('Adjective', 'not-adverb'); //jack is guarded

      ts.match('#Singular is #Adverb? [#PastTense$]').tag('Adjective', 'is-filled');
    } //went to sleep
    // ts.match('#Verb to #Verb').lastTerm().tag('Noun', 'verb-to-verb');
    //support a splattering of auxillaries before a verb


    var advb = '(#Adverb|not)+?';

    if (ts.has(advb)) {
      //had walked
      ts.match("(has|had) ".concat(advb, " #PastTense")).not('#Verb$').tag('Auxiliary', 'had-walked'); //was walking

      ts.match("#Copula ".concat(advb, " #Gerund")).not('#Verb$').tag('Auxiliary', 'copula-walking'); //been walking

      ts.match("(be|been) ".concat(advb, " #Gerund")).not('#Verb$').tag('Auxiliary', 'be-walking'); //would walk

      ts.match("(#Modal|did) ".concat(advb, " #Verb")).not('#Verb$').tag('Auxiliary', 'modal-verb'); //would have had

      ts.match("#Modal ".concat(advb, " have ").concat(advb, " had ").concat(advb, " #Verb")).not('#Verb$').tag('Auxiliary', 'would-have'); //would be walking

      ts.match("(#Modal) ".concat(advb, " be ").concat(advb, " #Verb")).not('#Verb$').tag('Auxiliary', 'would-be'); //would been walking

      ts.match("(#Modal|had|has) ".concat(advb, " been ").concat(advb, " #Verb")).not('#Verb$').tag('Auxiliary', 'would-be'); //infinitive verbs suggest plural nouns - 'XYZ walk to the store'
      // r.match(`#Singular+ #Infinitive`).match('#Singular+').tag('Plural', 'infinitive-make-plural');
    } //fall over


    ts.match('#PhrasalVerb #PhrasalVerb').lastTerm().tag('Particle', 'phrasal-particle');

    if (ts.has('#Gerund')) {
      //walking is cool
      ts.match('#Gerund #Adverb? not? #Copula').firstTerm().tag('Activity', 'gerund-copula'); //walking should be fun

      ts.match('#Gerund #Modal').firstTerm().tag('Activity', 'gerund-modal'); //running-a-show

      ts.match('#Gerund #Determiner [#Infinitive]').tag('Noun', 'running-a-show'); //setting records
      // ts.match('#Gerund [#PresentTense]').tag('Plural', 'setting-records');
    } //will be cool -> Copula


    if (ts.has('will #Adverb? not? #Adverb? be')) {
      //will be running (not copula
      if (ts.has('will #Adverb? not? #Adverb? be #Gerund') === false) {
        //tag it all
        ts.match('will not? be').tag('Copula', 'will-be-copula'); //for more complex forms, just tag 'be'

        ts.match('will #Adverb? not? #Adverb? be #Adjective').match('be').tag('Copula', 'be-copula');
      }
    }
  }

  if (ts.has('#Adjective')) {
    //still good
    ts.match('still #Adjective').match('still').tag('Adverb', 'still-advb'); //big dreams, critical thinking

    ts.match('#Adjective [#PresentTense]').tag('Noun', 'adj-presentTense'); //will secure our

    ts.match('will [#Adjective]').tag('Verb', 'will-adj'); //cheering hard - dropped -ly's

    ts.match('#PresentTense (hard|quick|long|bright|slow)').lastTerm().tag('Adverb', 'lazy-ly'); //his fine

    ts.match('(his|her|its) [#Adjective]').tag('Noun', 'his-fine'); //

    ts.match('#Noun #Adverb? [left]').tag('PastTense', 'left-verb');
  }

  if (ts.has('#TitleCase')) {
    //FitBit Inc
    ts.match('#TitleCase (ltd|co|inc|dept|assn|bros)').tag('Organization', 'org-abbrv'); //Foo District

    ts.match('#TitleCase+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)').tag('Region', 'foo-district'); //District of Foo

    ts.match('(district|region|province|municipality|territory|burough|state) of #TitleCase').tag('Region', 'district-of-Foo');
  }

  if (ts.has('#Hyphenated')) {
    //air-flow
    ts.match('#Hyphenated #Hyphenated').match('#Noun #Verb').tag('Noun', 'hyphen-verb');
    var hyphen = ts.match('#Hyphenated+');

    if (hyphen.has('#Expression')) {
      //ooh-wee
      hyphen.tag('Expression', 'ooh-wee');
    }
  }

  if (ts.has('#Place')) {
    //West Norforlk
    ts.match('(west|north|south|east|western|northern|southern|eastern)+ #Place').tag('Region', 'west-norfolk'); //some us-state acronyms (exlude: al, in, la, mo, hi, me, md, ok..)

    ts.match('#City [#Acronym]').match('(al|ak|az|ar|ca|ct|dc|fl|ga|id|il|nv|nh|nj|ny|oh|or|pa|sc|tn|tx|ut|vt|pr)').tag('Region', 'us-state');
  } //misc:
  //foot/feet


  ts.match('(foot|feet)').tag('Noun', 'foot-noun');
  ts.match('#Value (foot|feet)').term(1).tag('Unit', 'foot-unit'); //'u' as pronoun

  ts.match('#Conjunction [u]').tag('Pronoun', 'u-pronoun-2'); //'a/an' can mean 1 - "a hour"

  ts.match('(a|an) (#Duration|hundred|thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)').ifNo('#Plural').term(0).tag('Value', 'a-is-one'); //swear-words as non-expression POS
  //nsfw

  ts.match('holy (shit|fuck|hell)').tag('Expression', 'swears-expression');
  ts.match('#Determiner (shit|damn|hell)').term(1).tag('Noun', 'swears-noun');
  ts.match('(shit|damn|fuck) (#Determiner|#Possessive|them)').term(0).tag('Verb', 'swears-verb');
  ts.match('#Copula fucked up?').not('#Copula').tag('Adjective', 'swears-adjective'); //6 am

  ts.match('#Holiday (day|eve)').tag('Holiday', 'holiday-day'); //timezones

  ts.match('(standard|daylight|summer|eastern|pacific|central|mountain) standard? time').tag('Time', 'timezone'); //canadian dollar, Brazilian pesos

  ts.match('#Demonym #Currency').tag('Currency', 'demonym-currency'); //about to go

  ts.match('about to #Adverb? #Verb').match('about to').tag(['Auxiliary', 'Verb'], 'about-to'); //Doctor john smith jr

  ts.match('#Honorific #Person').tag('Person', 'honorific-person');
  ts.match('#Person (jr|sr|md)').tag('Person', 'person-honorific'); //right of way

  ts.match('(right|rights) of .').tag('Noun', 'right-of');
  return ts;
};

module.exports = corrections;

},{}],122:[function(_dereq_,module,exports){
"use strict";

//a specificly-named thing, that should be capitalized
var properNoun = function properNoun(ts) {
  if (ts.has('#Person') === true) {
    ts.match('#FirstName #Person+').tag('ProperNoun');
    ts.match('#Person+ #LastName').tag('ProperNoun');
  }

  if (ts.has('#Place') === true) {
    ts.match('(#City|#Region|#Country)').tag('ProperNoun');
  }

  ts.match('#Organization').tag('ProperNoun');
  ts.match('#Month').tag('ProperNoun');
  return ts;
};

module.exports = properNoun;

},{}],123:[function(_dereq_,module,exports){
"use strict";

//patterns are .match() statements to be run after the tagger
var posthoc = function posthoc(ts) {
  var patterns = ts.world.patterns;
  Object.keys(patterns).forEach(function (k) {
    ts.match(k).tag(patterns[k], 'post-hoc: ' + k);
  });
  return ts;
};

module.exports = posthoc;

},{}],124:[function(_dereq_,module,exports){
'use strict';

var fixContraction = _dereq_('./fix');

var irregulars = {
  wanna: ['want', 'to'],
  gonna: ['going', 'to'],
  im: ['i', 'am'],
  alot: ['a', 'lot'],
  dont: ['do', 'not'],
  dun: ['do', 'not'],
  ive: ['i', 'have'],
  "won't": ['will', 'not'],
  wont: ['will', 'not'],
  "can't": ['can', 'not'],
  cant: ['can', 'not'],
  cannot: ['can', 'not'],
  // aint: ['is', 'not'], //or 'are'
  // "ain't": ['is', 'not'],
  "shan't": ['should', 'not'],
  imma: ['I', 'will'],
  "where'd": ['where', 'did'],
  whered: ['where', 'did'],
  "when'd": ['when', 'did'],
  whend: ['when', 'did'],
  "how'd": ['how', 'did'],
  howd: ['how', 'did'],
  "what'd": ['what', 'did'],
  whatd: ['what', 'did'],
  "let's": ['let', 'us'],
  //multiple word contractions
  dunno: ['do', 'not', 'know'],
  brb: ['be', 'right', 'back'],
  gtg: ['got', 'to', 'go'],
  irl: ['in', 'real', 'life'],
  tbh: ['to', 'be', 'honest'],
  imo: ['in', 'my', 'opinion'],
  til: ['today', 'i', 'learned'],
  rn: ['right', 'now'],
  twas: ['it', 'was'],
  '@': ['at']
}; //check irregulars

var checkIrregulars = function checkIrregulars(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i];

    if (irregulars[t.normal]) {
      var fix = irregulars[t.normal];
      ts = fixContraction(ts, fix, i);
      i += fix.length - 1;
    }
  }

  return ts;
};

module.exports = checkIrregulars;

},{"./fix":128}],125:[function(_dereq_,module,exports){
'use strict';

var fixContraction = _dereq_('./fix');

var splitContraction = _dereq_('./split'); //these are always contractions


var blacklist = {
  'that\'s': true,
  'there\'s': true
};
var are = {
  we: true,
  they: true,
  you: true
}; // "'s" may be a contraction or a possessive
// 'spencer's house' vs 'spencer's good'

var isPossessive = function isPossessive(ts, i) {
  var t = ts.terms[i];
  var next_t = ts.terms[i + 1]; //a pronoun can't be possessive - "he's house"

  if (t.tags.Pronoun || t.tags.QuestionWord) {
    return false;
  }

  if (blacklist[t.normal]) {
    return false;
  } //if end of sentence, it is possessive - "was spencer's"


  if (!next_t) {
    return true;
  } //an infinitive is probably mis-tagged - 'jamie's bite'


  if (next_t.tags.Infinitive) {
    return true;
  } //a gerund suggests 'is walking'


  if (next_t.tags.VerbPhrase) {
    return false;
  } //spencer's house


  if (next_t.tags.Noun) {
    return true;
  } //rocket's red glare


  if (next_t.tags.Adjective && ts.terms[i + 2] && ts.terms[i + 2].tags.Noun) {
    return true;
  } //an adjective suggests 'is good'


  if (next_t.tags.Adjective || next_t.tags.Adverb || next_t.tags.Verb) {
    return false;
  }

  return false;
}; // you ain't / i ain't.


var isAre = function isAre(ts, i) {
  var arr = ['is', 'not']; //default
  //get what's it 'about'

  if (ts.terms[i - 1]) {
    var about = ts.terms[i - 1]; //go back one more..

    if (about.tags.Adverb && ts.terms[i - 2]) {
      about = ts.terms[i - 2];
    }

    if (about.tags.Plural || are[about.normal] === true) {
      arr[0] = 'are';
    }
  }

  return arr;
}; //handle ambigous contraction "'s"


var hardOne = function hardOne(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }

    if (ts.terms[i].normal === 'ain\'t' || ts.terms[i].normal === 'aint') {
      var arr = isAre(ts, i);
      ts = fixContraction(ts, arr, i);
      i += 1;
      continue;
    }

    var parts = splitContraction(ts.terms[i]);

    if (parts) {
      //have we found a hard one
      if (parts.end === 's') {
        //spencer's house
        if (isPossessive(ts, i)) {
          ts.terms[i].tag('#Possessive', 'hard-contraction');
          continue;
        }

        var _arr = [parts.start, 'is'];

        if (ts.terms[i + 1]) {
          var str = ts.terms[i].normal; //he's walking -> is/was

          if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Gerund').found) {
            _arr = [parts.start, 'is'];
          } else if (ts.match(str + ' (#Negative|#Adverb|#Auxiliary)+? #Verb').found) {
            //is vs has ('he's got milk')
            _arr = [parts.start, 'has'];
          }
        }

        ts = fixContraction(ts, _arr, i);
        i += 1;
      }
    }
  }

  return ts;
};

module.exports = hardOne;

},{"./fix":128,"./split":129}],126:[function(_dereq_,module,exports){
'use strict';

var fixContraction = _dereq_('./fix');

var split = _dereq_('./split'); //the formulaic contraction types:


var easy_ends = {
  ll: 'will',
  // 'd': 'would',
  ve: 'have',
  re: 'are',
  m: 'am',
  'n\'t': 'not' //these ones are a bit tricksier:
  // 't': 'not',
  // 's': 'is' //or was

}; //unambiguous contractions, like "'ll"

var easyOnes = function easyOnes(ts) {
  for (var i = 0; i < ts.terms.length; i++) {
    //skip existing
    if (ts.terms[i].silent_term) {
      continue;
    }

    var parts = split(ts.terms[i]);

    if (parts) {
      parts.start = parts.start.toLowerCase(); //make sure its an easy one

      if (easy_ends[parts.end]) {
        var arr = [parts.start, easy_ends[parts.end]];
        ts = fixContraction(ts, arr, i);
        i += 1;
      } //handle i'd -> 'i would' vs 'i had'


      if (parts.end === 'd') {
        //assume 'would'
        var _arr = [parts.start, 'would']; //if next verb is past-tense, choose 'had'

        if (ts.terms[i + 1] && ts.terms[i + 1].tags.PastTense) {
          _arr[1] = 'had';
        } //also support '#Adverb #PastTense'


        if (ts.terms[i + 2] && ts.terms[i + 2].tags.PastTense && ts.terms[i + 1].tags.Adverb) {
          _arr[1] = 'had';
        }

        ts = fixContraction(ts, _arr, i);
        i += 1;
      }
    }
  }

  return ts;
};

module.exports = easyOnes;

},{"./fix":128,"./split":129}],127:[function(_dereq_,module,exports){
'use strict';

var fixContraction = _dereq_('./fix');

var Term = _dereq_('../../../term');

var hasDash = function hasDash(t) {
  var dashes = /(-|–|—)/;
  return dashes.test(t.whitespace.before) || dashes.test(t.whitespace.after);
};

var numberRange = function numberRange(ts) {
  //try to support number range, like 5-9, this way:
  ts.match('#Hyphenated #Hyphenated').match('#NumericValue #NumericValue').tag('NumberRange'); //otherwise, loop through and find them

  for (var i = 0; i < ts.terms.length; i++) {
    var t = ts.terms[i]; //skip existing

    if (t.silent_term) {
      continue;
    }

    if (t.tags.TextValue) {
      continue;
    } //hyphens found in whitespace - '5 - 7'


    if (t.tags.Value && ts.terms[i + 1] && i > 0 && (hasDash(t) || hasDash(ts.terms[i - 1])) && ts.terms[i - 1].tags.Value) {
      var to = new Term('', ts.world);
      to.silent_term = 'to';
      ts.insertAt(i, to);
      ts.terms[i - 1].tag('NumberRange', 'number-number1');
      ts.terms[i].tag('NumberRange', 'number-number2');
      ts.terms[i].whitespace.before = '';
      ts.terms[i].whitespace.after = '';
      ts.terms[i + 1].tag('NumberRange', 'number-number3');
      return ts;
    } //add a silent term


    if (t.tags.NumberRange) {
      var arr = t.text.split(/(-|–|—)/);
      arr[1] = 'to';
      ts = fixContraction(ts, arr, i);
      ts.terms[i].tag(['NumberRange', 'NumericValue'], 'numRange-1');
      ts.terms[i + 1].tag(['NumberRange', 'Preposition'], 'numRange-silent');
      ts.terms[i + 2].tag(['NumberRange', 'NumericValue'], 'numRange-3');
      i += 2;
    }
  }

  return ts;
};

module.exports = numberRange;

},{"../../../term":143,"./fix":128}],128:[function(_dereq_,module,exports){
'use strict';

var Term = _dereq_('../../../term');

var tags = {
  not: 'Negative',
  will: 'Verb',
  would: 'Modal',
  have: 'Verb',
  are: 'Copula',
  is: 'Copula',
  am: 'Verb'
}; //make sure the newly created term gets the easy tags

var easyTag = function easyTag(t) {
  if (tags[t.silent_term]) {
    t.tag(tags[t.silent_term]);
  }
}; //add a silent term


var fixContraction = function fixContraction(ts, parts, i) {
  //add the interpretation to the contracted term
  var one = ts.terms[i];
  one.silent_term = parts[0]; //tag it as a contraction

  one.tag('Contraction', 'tagger-contraction'); //add a new empty term

  if (parts[1]) {
    var two = new Term('', ts.world);
    two.silent_term = parts[1];
    two.tag('Contraction', 'tagger-contraction');
    ts.insertAt(i + 1, two); //ensure new term has no auto-whitspace

    two.whitespace.before = '';
    two.whitespace.after = '';
    easyTag(two);
  } //potentially it's three-contracted-terms, like 'dunno'


  if (parts[2]) {
    var three = new Term('', ts.world);
    three.silent_term = parts[2]; // ts.terms.push(three);

    ts.insertAt(i + 2, three);
    three.tag('Contraction', 'tagger-contraction');
    easyTag(three);
  }

  return ts;
};

module.exports = fixContraction;

},{"../../../term":143}],129:[function(_dereq_,module,exports){
'use strict';

var contraction = /^([a-z]+)'([a-z][a-z]?)$/i;
var possessive = /[a-z]s'$/i;
var allowed = {
  re: 1,
  ve: 1,
  ll: 1,
  t: 1,
  s: 1,
  d: 1,
  m: 1
};
/** interpret a terms' contraction */

var splitContraction = function splitContraction(t) {
  //handle this irregular one (shared trailing n)
  if (t.normal === 'can\'t') {
    return {
      start: 'can',
      end: 'n\'t'
    };
  }

  var parts = t.normal.match(contraction);

  if (parts && parts[1] && allowed[parts[2]] === 1) {
    //handle n't
    if (parts[2] === 't' && parts[1].match(/[a-z]n$/)) {
      parts[1] = parts[1].replace(/n$/, '');
      parts[2] = 'n\'t'; //dunno..
    } //fix titlecase


    if (t.tags.TitleCase === true) {
      parts[1] = parts[1].replace(/^[a-z]/, function (x) {
        return x.toUpperCase();
      });
    }

    return {
      start: parts[1],
      end: parts[2]
    };
  } // "flanders' house"


  if (possessive.test(t.text) === true) {
    return {
      start: t.normal.replace(/s'?$/, ''),
      end: ''
    };
  }

  return null;
};

module.exports = splitContraction;

},{}],130:[function(_dereq_,module,exports){
"use strict";

//yep,
//https://github.com/mathiasbynens/emoji-regex/blob/master/index.js
module.exports = /(?:0\u20E3\n1\u20E3|2\u20E3|3\u20E3|4\u20E3|5\u20E3|6\u20E3|7\u20E3|8\u20E3|9\u20E3|#\u20E3|\*\u20E3|\uD83C(?:\uDDE6\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF2|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFD|\uDDFF)|\uDDE7\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFC|\uDDFE|\uDDFF)|\uDDE8\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDE9\uD83C(?:\uDDEA|\uDDEC|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDFF)|\uDDEA\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDED|\uDDF7|\uDDF8|\uDDF9|\uDDFA)|\uDDEB\uD83C(?:\uDDEE|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDF7)|\uDDEC\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF1|\uDDF2|\uDDF3|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFE)|\uDDED\uD83C(?:\uDDF0|\uDDF2|\uDDF3|\uDDF7|\uDDF9|\uDDFA)|\uDDEE\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9)|\uDDEF\uD83C(?:\uDDEA|\uDDF2|\uDDF4|\uDDF5)|\uDDF0\uD83C(?:\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDF2|\uDDF3|\uDDF5|\uDDF7|\uDDFC|\uDDFE|\uDDFF)|\uDDF1\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDEE|\uDDF0|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFE)|\uDDF2\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDF3\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFF)|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C(?:\uDDE6|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF7|\uDDF8|\uDDF9|\uDDFC|\uDDFE)|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C(?:\uDDEA|\uDDF4|\uDDF8|\uDDFA|\uDDFC)|\uDDF8\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDE9|\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFD|\uDDFE|\uDDFF)|\uDDF9\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF9|\uDDFB|\uDDFC|\uDDFF)|\uDDFA\uD83C(?:\uDDE6|\uDDEC|\uDDF2|\uDDF8|\uDDFE|\uDDFF)|\uDDFB\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDEE|\uDDF3|\uDDFA)|\uDDFC\uD83C(?:\uDDEB|\uDDF8)|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C(?:\uDDEA|\uDDF9)|\uDDFF\uD83C(?:\uDDE6|\uDDF2|\uDDFC)))|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]/g;

},{}],131:[function(_dereq_,module,exports){
"use strict";

//just some of the most common emoticons
//faster than
//http://stackoverflow.com/questions/28077049/regex-matching-emoticons
module.exports = {
  ':(': true,
  ':)': true,
  ':P': true,
  ':p': true,
  ':O': true,
  ':3': true,
  ':|': true,
  ':/': true,
  ':\\': true,
  ':$': true,
  ':*': true,
  ':@': true,
  ':-(': true,
  ':-)': true,
  ':-P': true,
  ':-p': true,
  ':-O': true,
  ':-3': true,
  ':-|': true,
  ':-/': true,
  ':-\\': true,
  ':-$': true,
  ':-*': true,
  ':-@': true,
  ':^(': true,
  ':^)': true,
  ':^P': true,
  ':^p': true,
  ':^O': true,
  ':^3': true,
  ':^|': true,
  ':^/': true,
  ':^\\': true,
  ':^$': true,
  ':^*': true,
  ':^@': true,
  '):': true,
  '(:': true,
  '$:': true,
  '*:': true,
  ')-:': true,
  '(-:': true,
  '$-:': true,
  '*-:': true,
  ')^:': true,
  '(^:': true,
  '$^:': true,
  '*^:': true,
  '<3': true,
  '</3': true,
  '<\\3': true
};

},{}],132:[function(_dereq_,module,exports){
'use strict'; //markov-like stats about co-occurance, for hints about unknown terms
//basically, a little-bit better than the noun-fallback
//just top n-grams from nlp tags, generated from nlp-corpus
//after this word, here's what happens usually

var afterThisWord = {
  i: 'Verb',
  //44% //i walk..
  first: 'Noun',
  //50% //first principles..
  it: 'Verb',
  //33%
  there: 'Verb',
  //35%
  // to: 'Verb', //32%
  not: 'Verb',
  //33%
  because: 'Noun',
  //31%
  if: 'Noun',
  //32%
  but: 'Noun',
  //26%
  who: 'Verb',
  //40%
  this: 'Noun',
  //37%
  his: 'Noun',
  //48%
  when: 'Noun',
  //33%
  you: 'Verb',
  //35%
  very: 'Adjective',
  // 39%
  old: 'Noun',
  //51%
  never: 'Verb',
  //42%
  before: 'Noun' //28%

}; //in advance of this word, this is what happens usually

var beforeThisWord = {
  there: 'Verb',
  //23% // be there
  me: 'Verb',
  //31% //see me
  man: 'Adjective',
  // 80% //quiet man
  only: 'Verb',
  //27% //sees only
  him: 'Verb',
  //32% //show him
  were: 'Noun',
  //48% //we were
  // what: 'Verb', //25% //know what
  took: 'Noun',
  //38% //he took
  himself: 'Verb',
  //31% //see himself
  went: 'Noun',
  //43% //he went
  who: 'Noun',
  //47% //person who
  jr: 'Person'
}; //following this POS, this is likely

var afterThisPos = {
  Adjective: 'Noun',
  //36% //blue dress
  Possessive: 'Noun',
  //41% //his song
  Determiner: 'Noun',
  //47%
  Adverb: 'Verb',
  //20%
  // Person: 'Verb', //40%
  Pronoun: 'Verb',
  //40%
  Value: 'Noun',
  //47%
  Ordinal: 'Noun',
  //53%
  Modal: 'Verb',
  //35%
  Superlative: 'Noun',
  //43%
  Demonym: 'Noun',
  //38%
  // Organization: 'Verb', //33%
  Honorific: 'Person' //
  // FirstName: 'Person', //

}; //in advance of this POS, this is likely

var beforeThisPos = {
  Copula: 'Noun',
  //44% //spencer is
  PastTense: 'Noun',
  //33% //spencer walked
  Conjunction: 'Noun',
  //36%
  Modal: 'Noun',
  //38%
  PluperfectTense: 'Noun',
  //40%
  PerfectTense: 'Verb' //32%
  // LastName: 'FirstName', //

};
module.exports = {
  beforeThisWord: beforeThisWord,
  afterThisWord: afterThisWord,
  beforeThisPos: beforeThisPos,
  afterThisPos: afterThisPos
};

},{}],133:[function(_dereq_,module,exports){
'use strict'; //regex suffix patterns and their most common parts of speech,
//built using wordnet, by spencer kelly.
//this mapping shrinks-down the uglified build

var Adj = 'Adjective';
var Inf = 'Infinitive';
var Pres = 'PresentTense';
var Sing = 'Singular';
var Past = 'PastTense';
var Adverb = 'Adverb';
var Exp = 'Expression';
var Actor = 'Actor';
var Verb = 'Verb';
var Noun = 'Noun';
var Last = 'LastName'; //the order here matters.
//regexes indexed by mandated last-character

module.exports = {
  a: [[/.[aeiou]na$/, Noun], [/.[oau][wvl]ska$/, Last], //polish (female)
  [/.[^aeiou]ica$/, Sing], [/^([hyj]a)+$/, Exp] //hahah
  ],
  c: [[/.[^aeiou]ic$/, Adj]],
  d: [[/.[ia]sed$/, Adj], [/.[gt]led$/, Adj], [/.[aeiou][td]ed$/, Past], [/.[^aeiou]led$/, Past], //rumbled
  [/[^aeiou]ard$/, Sing], [/[aeiou][^aeiou]id$/, Adj], [/[aeiou]c?ked$/, Past], //hooked
  [/[^aeiou][aeiou][tvx]ed$/, Past], //boxed
  [/[aeiou]red$/, Past], //cheered
  [/.[vrl]id$/, Adj]],
  e: [[/.[lnr]ize$/, Inf], [/.[^aeiou]ise$/, Inf], [/.[aeiou]te$/, Inf], [/.[^aeiou][ai]ble$/, Adj], [/.[^aeiou]eable$/, Adj], [/.[^aeiou]ive$/, Adj]],
  h: [[/.[^aeiouf]ish$/, Adj], [/.v[iy]ch$/, Last], //east-europe
  [/^ug?h+$/, Exp], //uhh
  [/^uh[ -]?oh$/, Exp] //uhoh
  ],
  i: [[/.[oau][wvl]ski$/, Last] //polish (male)
  ],
  k: [[/^(k)+$/, Exp] //kkkk
  ],
  l: [[/.[gl]ial$/, Adj], [/.[^aeiou]ful$/, Adj], [/.[nrtumcd]al$/, Adj], [/.[^aeiou][ei]al$/, Adj]],
  m: [[/.[^aeiou]ium$/, Sing], [/[^aeiou]ism$/, Sing], [/^h*u*m+$/, Exp], //mmmmmmm / ummmm / huuuuuummmmmm
  [/^\d+ ?[ap]m$/, 'Date']],
  n: [[/.[lsrnpb]ian$/, Adj], [/[^aeiou]ician$/, Actor], [/okin$/, 'Gerund']],
  o: [[/^no+$/, Exp], //noooo
  [/^(yo)+$/, Exp], //yoyo
  [/^woo+[pt]?$/, Exp] //woo
  ],
  r: [[/.[ilk]er$/, 'Comparative'], [/[aeiou][pns]er$/, Sing], [/[^i]fer$/, Inf], [/.[^aeiou][ao]pher$/, Actor]],
  t: [[/.[di]est$/, 'Superlative'], [/.[icldtgrv]ent$/, Adj], [/[aeiou].*ist$/, Adj], [/^[a-z]et$/, Verb]],
  s: [[/.[rln]ates$/, Pres], [/.[^z]ens$/, Verb], [/.[lstrn]us$/, Sing], [/[aeiou][^aeiou]is$/, Sing], [/[a-z]\'s$/, Noun], [/^yes+$/, Exp] //yessss
  ],
  v: [[/.[^aeiou][ai][kln]ov$/, Last] //east-europe
  ],
  y: [[/.[cts]hy$/, Adj], [/.[st]ty$/, Adj], [/.[gk]y$/, Adj], [/.[tnl]ary$/, Adj], [/.[oe]ry$/, Sing], [/[rdntkbhs]ly$/, Adverb], [/...lly$/, Adverb], [/[bszmp]{2}y$/, Adj], [/.(gg|bb|zz)ly$/, Adj], [/.[aeiou]my$/, Adj], [/[ea]{2}zy$/, Adj], [/.[^aeiou]ity$/, Sing]]
};

},{}],134:[function(_dereq_,module,exports){
'use strict'; //just a foolish lookup of known suffixes

var Adj = 'Adjective';
var Inf = 'Infinitive';
var Pres = 'PresentTense';
var Sing = 'Singular';
var Past = 'PastTense';
var Avb = 'Adverb';
var Plrl = 'Plural';
var Actor = 'Actor';
var Vb = 'Verb';
var Noun = 'Noun';
var Last = 'LastName';
var Modal = 'Modal';
module.exports = [null, //0
null, //1
{
  //2-letter
  ea: Sing,
  ia: Noun,
  ic: Adj,
  ly: Avb,
  '\'n': Vb,
  '\'t': Vb
}, {
  //3-letter
  que: Adj,
  lar: Adj,
  ike: Adj,
  ffy: Adj,
  nny: Adj,
  rmy: Adj,
  azy: Adj,
  oid: Adj,
  mum: Adj,
  ous: Adj,
  end: Vb,
  sis: Sing,
  rol: Sing,
  ize: Inf,
  ify: Inf,
  zes: Pres,
  nes: Pres,
  ing: 'Gerund',
  //likely to be converted to Adj after lexicon pass
  ' so': Avb,
  '\'ll': Modal,
  '\'re': 'Copula'
}, {
  //4-letter
  teen: 'Value',
  tors: Noun,
  amed: Past,
  ched: Past,
  ends: Vb,
  oses: Pres,
  fies: Pres,
  ects: Pres,
  nded: Past,
  cede: Inf,
  tage: Inf,
  gate: Inf,
  vice: Sing,
  tion: Sing,
  cted: Past,
  ette: Sing,
  some: Adj,
  llen: Adj,
  ried: Adj,
  gone: Adj,
  made: Adj,
  fore: Avb,
  less: Avb,
  ices: Plrl,
  ions: Plrl,
  ints: Plrl,
  aped: Past,
  lked: Past,
  ould: Modal,
  tive: Actor,
  sson: Last,
  //swedish male
  czyk: Last,
  //polish (male)
  chuk: Last,
  //east-europe
  enko: Last,
  //east-europe
  akis: Last,
  //greek
  nsen: Last //norway

}, {
  //5-letter
  fully: Avb,
  where: Avb,
  wards: Avb,
  urned: Past,
  tized: Past,
  eased: Past,
  ances: Plrl,
  tures: Plrl,
  ports: Plrl,
  ettes: Plrl,
  ities: Plrl,
  rough: Adj,
  bound: Adj,
  tieth: 'Ordinal',
  ishes: Pres,
  tches: Pres,
  nssen: Last,
  //norway
  marek: Last //polish (male)

}, {
  //6-letter
  keeper: Actor,
  logist: Actor,
  auskas: Last,
  //lithuania
  teenth: 'Value'
}, {
  //7-letter
  sdottir: Last,
  //swedish female
  opoulos: Last //greek

}];

},{}],135:[function(_dereq_,module,exports){
'use strict'; //add 'downward' tags (that immediately depend on this one)

var addDownword = function addDownword(tags) {
  var keys = Object.keys(tags);
  keys.forEach(function (k) {
    tags[k].downward = []; //look for tags with this as parent

    for (var i = 0; i < keys.length; i++) {
      if (tags[keys[i]].isA && tags[keys[i]].isA === k) {
        tags[k].downward.push(keys[i]);
      }
    }
  });
};

module.exports = addDownword;

},{}],136:[function(_dereq_,module,exports){
'use strict'; //list of inconsistent parts-of-speech

module.exports = [//top-level pos are all inconsistent
['Noun', 'Verb', 'Adjective', 'Adverb', 'Determiner', 'Conjunction', 'Preposition', 'QuestionWord', 'Expression', 'Url', 'PhoneNumber', 'Email', 'Emoji'], //exlusive-nouns
['Person', 'Organization', 'Value', 'Place', 'Actor', 'Demonym', 'Pronoun'], //acronyms
['Acronym', 'Pronoun', 'Actor', 'Unit', 'Address'], ['Acronym', 'Plural'], //things that can't be plural
['Plural', 'Singular'], // ['Plural', 'Pronoun'],
// ['Plural', 'Person'],
// ['Plural', 'Organization'],
// ['Plural', 'Currency'],
// ['Plural', 'Ordinal'],
//exlusive-people
['MaleName', 'FemaleName'], ['FirstName', 'LastName', 'Honorific'], //adjectives
['Comparative', 'Superlative'], //values
['Value', 'Verb', 'Adjective'], // ['Value', 'Year'],
['Ordinal', 'Cardinal'], ['TextValue', 'NumericValue'], ['NiceNumber', 'TextValue'], ['Ordinal', 'Currency'], //$5.50th
//verbs
['PastTense', 'PresentTense', 'FutureTense'], ['Pluperfect', 'Copula', 'Modal', 'Participle', 'Infinitive', 'Gerund', 'FuturePerfect', 'PerfectTense'], ['Auxiliary', 'Noun', 'Value'], //date
['Month', 'WeekDay', 'Year', 'Duration', 'Holiday'], ['Particle', 'Conjunction', 'Adverb', 'Preposition'], ['Date', 'Verb', 'Adjective', 'Person'], ['Date', 'Money', 'RomanNumeral', 'Fraction'], //a/an -> 1
['Value', 'Determiner'], ['Url', 'Value', 'HashTag', 'PhoneNumber', 'Emoji'], //roman numerals
['RomanNumeral', 'Fraction', 'NiceNumber'], ['RomanNumeral', 'Money'], //cases
['UpperCase', 'TitleCase', 'CamelCase'], //phrases
['VerbPhrase', 'Noun', 'Adjective', 'Value'], //QuestionWord
['QuestionWord', 'VerbPhrase'], //acronyms
['Acronym', 'VerbPhrase']];

},{}],137:[function(_dereq_,module,exports){
'use strict';

var conflicts = _dereq_('./conflicts');

var nouns = _dereq_('./tags/nouns');

var verbs = _dereq_('./tags/verbs');

var values = _dereq_('./tags/values');

var dates = _dereq_('./tags/dates');

var misc = _dereq_('./tags/misc');

var addDownward = _dereq_('./addDownward'); //used for pretty-printing on the server-side


var colors = {
  Noun: 'blue',
  Date: 'red',
  Value: 'red',
  Verb: 'green',
  Auxiliary: 'green',
  Negative: 'green',
  VerbPhrase: 'green',
  Preposition: 'cyan',
  Condition: 'cyan',
  Conjunction: 'cyan',
  Determiner: 'cyan',
  Adjective: 'magenta',
  Adverb: 'cyan'
}; //extend tagset with new tags

var addIn = function addIn(obj, tags) {
  Object.keys(obj).forEach(function (k) {
    tags[k] = obj[k];
  });
}; //add tags to remove when tagging this one


var addConflicts = function addConflicts(tags) {
  Object.keys(tags).forEach(function (k) {
    tags[k].notA = {};

    for (var i = 0; i < conflicts.length; i++) {
      var arr = conflicts[i];

      if (arr.indexOf(k) !== -1) {
        arr = arr.filter(function (a) {
          return a !== k;
        });
        arr.forEach(function (e) {
          tags[k].notA[e] = true;
        });
      }
    }

    tags[k].notA = Object.keys(tags[k].notA);
  });
};

var addColors = function addColors(tags) {
  Object.keys(tags).forEach(function (k) {
    if (colors[k]) {
      tags[k].color = colors[k];
      return;
    }

    if (tags[k].isA && colors[tags[k].isA]) {
      tags[k].color = colors[tags[k].isA];
      return;
    }

    if (tags[k].isA && tags[tags[k].isA].color) {
      tags[k].color = tags[tags[k].isA].color;
    }
  });
};

var build = function build() {
  var tags = {};
  addIn(nouns, tags);
  addIn(verbs, tags);
  addIn(values, tags);
  addIn(dates, tags);
  addIn(misc, tags); //downstream

  addDownward(tags); //add enemies

  addConflicts(tags); //for nice-logging

  addColors(tags);
  return tags;
};

module.exports = build();

},{"./addDownward":135,"./conflicts":136,"./tags/dates":138,"./tags/misc":139,"./tags/nouns":140,"./tags/values":141,"./tags/verbs":142}],138:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Date: {},
  //not a noun, but usually is
  Month: {
    isA: 'Date',
    also: 'Singular'
  },
  WeekDay: {
    isA: 'Date',
    also: 'Noun'
  },
  RelativeDay: {
    isA: 'Date'
  },
  Year: {
    isA: 'Date'
  },
  Duration: {
    isA: 'Date',
    also: 'Noun'
  },
  Time: {
    isA: 'Date',
    also: 'Noun'
  },
  Holiday: {
    isA: 'Date',
    also: 'Noun'
  }
};

},{}],139:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Adjective: {},
  Comparable: {
    isA: 'Adjective'
  },
  Comparative: {
    isA: 'Adjective'
  },
  Superlative: {
    isA: 'Adjective'
  },
  NumberRange: {
    isA: 'Contraction'
  },
  Adverb: {},
  Currency: {},
  //glue
  Determiner: {},
  Conjunction: {},
  Preposition: {},
  QuestionWord: {},
  RelativeProunoun: {
    isA: 'Pronoun'
  },
  Expression: {},
  Abbreviation: {},
  Url: {},
  PhoneNumber: {},
  HashTag: {},
  AtMention: {
    is: 'Noun'
  },
  Emoji: {},
  Email: {},
  //non-exclusive
  Condition: {},
  VerbPhrase: {},
  Auxiliary: {},
  Negative: {},
  Contraction: {},
  TitleCase: {},
  CamelCase: {},
  UpperCase: {},
  Hyphenated: {},
  Acronym: {},
  ClauseEnd: {},
  // Quotes
  Quotation: {},
  StartQuotation: {
    isA: 'Quotation'
  },
  EndQuotation: {
    isA: 'Quotation'
  },
  //parentheses
  Parentheses: {},
  EndBracket: {
    isA: 'Parentheses'
  },
  StartBracket: {
    isA: 'Parentheses'
  }
};

},{}],140:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Noun: {},
  // - singular
  Singular: {
    isA: 'Noun'
  },
  //a specific thing that's capitalized
  ProperNoun: {
    isA: 'Noun'
  },
  // -- people
  Person: {
    isA: 'Singular'
  },
  FirstName: {
    isA: 'Person'
  },
  MaleName: {
    isA: 'FirstName'
  },
  FemaleName: {
    isA: 'FirstName'
  },
  LastName: {
    isA: 'Person'
  },
  Honorific: {
    isA: 'Noun'
  },
  Place: {
    isA: 'Singular'
  },
  // -- places
  Country: {
    isA: 'Place'
  },
  City: {
    isA: 'Place'
  },
  Region: {
    isA: 'Place'
  },
  Address: {
    isA: 'Place'
  },
  Organization: {
    isA: 'Singular'
  },
  SportsTeam: {
    isA: 'Organization'
  },
  Company: {
    isA: 'Organization'
  },
  School: {
    isA: 'Organization'
  },
  // - plural
  Plural: {
    isA: 'Noun'
  },
  Uncountable: {
    //(not plural or singular)
    isA: 'Noun'
  },
  Pronoun: {
    isA: 'Noun'
  },
  //a word for someone doing something -'plumber'
  Actor: {
    isA: 'Noun'
  },
  //a gerund-as-noun - 'swimming'
  Activity: {
    isA: 'Noun'
  },
  //'kilograms'
  Unit: {
    isA: 'Noun'
  },
  //'Canadians'
  Demonym: {
    isA: 'Noun'
  },
  //`john's`
  Possessive: {
    isA: 'Noun'
  }
};

},{}],141:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Value: {},
  Ordinal: {
    isA: 'Value'
  },
  Cardinal: {
    isA: 'Value'
  },
  Multiple: {
    isA: 'Value'
  },
  RomanNumeral: {
    isA: 'Cardinal'
  },
  Fraction: {
    isA: 'Value'
  },
  TextValue: {
    isA: 'Value'
  },
  NumericValue: {
    isA: 'Value'
  },
  NiceNumber: {
    isA: 'Value'
  },
  Money: {//isA: 'Cardinal'
  },
  Percent: {
    isA: 'Value'
  }
};

},{}],142:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  Verb: {
    isA: 'VerbPhrase'
  },
  PresentTense: {
    isA: 'Verb'
  },
  Infinitive: {
    isA: 'PresentTense'
  },
  Gerund: {
    isA: 'PresentTense'
  },
  PastTense: {
    isA: 'Verb'
  },
  PerfectTense: {
    isA: 'Verb'
  },
  FuturePerfect: {
    isA: 'Verb'
  },
  Pluperfect: {
    isA: 'Verb'
  },
  Copula: {
    isA: 'Verb'
  },
  Modal: {
    isA: 'Verb'
  },
  Participle: {
    isA: 'Verb'
  },
  Particle: {
    isA: 'Verb'
  },
  PhrasalVerb: {
    isA: 'Verb'
  }
};

},{}],143:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('./paths').fns;

var build_whitespace = _dereq_('./whitespace');

var makeUID = _dereq_('./makeUID'); //normalization


var addNormal = _dereq_('./methods/normalize/normalize').addNormal;

var addRoot = _dereq_('./methods/normalize/root');

var Term = function Term(str, world) {
  this.tags = {};
  this._text = fns.ensureString(str); // this.world = world;

  Object.defineProperty(this, 'world', {
    enumerable: false,
    // hide it from for..in
    value: world
  }); // this.world = function() {
  //   return world;
  // };
  //seperate whitespace from the text

  var parsed = build_whitespace(this._text);
  this.whitespace = parsed.whitespace;
  this._text = parsed.text;
  this.parent = null;
  this.silent_term = '';
  this.lumped = false; //normalize the _text

  addNormal(this);
  addRoot(this); //has this term been modified

  this.dirty = false; //make a unique id for this term

  this.uid = makeUID(this.normal); //getters/setters

  Object.defineProperty(this, 'text', {
    get: function get() {
      return this._text;
    },
    set: function set(txt) {
      txt = txt || '';
      this._text = txt.trim();
      this.dirty = true; // if (this._text !== txt) {
      //   console.log('|' + txt + '|');
      // console.log(build_whitespace(txt));
      // this.whitespace = build_whitespace(txt);
      //   console.log(this.whitespace);
      // }

      this.normalize();
    }
  }); //bit faster than .constructor.name or w/e

  Object.defineProperty(this, 'isA', {
    get: function get() {
      return 'Term';
    }
  });
};
/**run each time a new text is set */


Term.prototype.normalize = function () {
  addNormal(this);
  addRoot(this);
  return this;
};
/** where in the sentence is it? zero-based. */


Term.prototype.index = function () {
  var ts = this.parentTerms;

  if (!ts) {
    return null;
  }

  return ts.terms.indexOf(this);
};
/** make a copy with no originals to the original  */


Term.prototype.clone = function () {
  var term = new Term(this._text, this.world);
  term.tags = fns.copy(this.tags);
  term.whitespace = fns.copy(this.whitespace);
  term.silent_term = this.silent_term;
  return term;
};

_dereq_('./methods/misc')(Term);

_dereq_('./methods/out')(Term);

_dereq_('./methods/tag')(Term);

_dereq_('./methods/case')(Term);

_dereq_('./methods/punctuation')(Term);

module.exports = Term;

},{"./makeUID":144,"./methods/case":146,"./methods/misc":147,"./methods/normalize/normalize":149,"./methods/normalize/root":150,"./methods/out":153,"./methods/punctuation":156,"./methods/tag":158,"./paths":161,"./whitespace":162}],144:[function(_dereq_,module,exports){
'use strict'; //this is a not-well-thought-out way to reduce our dependence on `object===object` original stuff
//generates a unique id for this term
//may need to change when the term really-transforms? not sure.

var uid = function uid(str) {
  var nums = '';

  for (var i = 0; i < 5; i++) {
    nums += parseInt(Math.random() * 9, 10);
  }

  return str + '-' + nums;
};

module.exports = uid;

},{}],145:[function(_dereq_,module,exports){
'use strict'; // const tagSet = require('../paths').tags;

var boringTags = {
  Auxiliary: 1,
  Possessive: 1,
  TitleCase: 1,
  ClauseEnd: 1,
  Comma: 1,
  CamelCase: 1,
  UpperCase: 1,
  Hyphenated: 1,
  VerbPhrase: 1,
  EndBracket: 1,
  StartBracket: 1,
  Parentheses: 1,
  Quotation: 1
};

var bestTag = function bestTag(t) {
  var tagSet = t.world.tags;
  var tags = Object.keys(t.tags);
  tags = tags.sort(); //alphabetical, first
  //then sort by #of parent tags

  tags = tags.sort(function (a, b) {
    //bury the tags we dont want
    if (!tagSet[a]) {
      return 1;
    }

    if (boringTags[b] || !tagSet[b]) {
      return -1;
    }

    if (tagSet[a].downward.length > tagSet[b].downward.length) {
      return 1;
    }

    return 1;
  });
  return tags[0];
};

module.exports = bestTag;

},{}],146:[function(_dereq_,module,exports){
'use strict';

var addMethods = function addMethods(Term) {
  var methods = {
    toUpperCase: function toUpperCase() {
      this.text = this._text.toUpperCase();
      this.tag('#UpperCase', 'toUpperCase');
      return this;
    },
    toLowerCase: function toLowerCase() {
      this.text = this._text.toLowerCase();
      this.unTag('#TitleCase');
      this.unTag('#UpperCase');
      return this;
    },
    toTitleCase: function toTitleCase() {
      this.text = this._text.replace(/^ *[a-z]/, function (x) {
        return x.toUpperCase();
      });
      this.tag('#TitleCase', 'toTitleCase');
      return this;
    },
    //(camelCase() is handled in `./terms` )

    /** is it titlecased because it deserves it? Like a person's name? */
    needsTitleCase: function needsTitleCase() {
      var titleCases = ['Person', 'Place', 'Organization', 'Acronym', 'UpperCase', 'Currency', 'RomanNumeral', 'Month', 'WeekDay', 'Holiday', 'Demonym'];

      for (var i = 0; i < titleCases.length; i++) {
        if (this.tags[titleCases[i]]) {
          return true;
        }
      } //specific words that keep their titlecase
      //https://en.wikipedia.org/wiki/Capitonym


      var irregulars = ['i', 'god', 'allah'];

      for (var _i = 0; _i < irregulars.length; _i++) {
        if (this.normal === irregulars[_i]) {
          return true;
        }
      }

      return false;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],147:[function(_dereq_,module,exports){
'use strict';

var _isAcronym = _dereq_('./normalize/isAcronym');

var _bestTag = _dereq_('./bestTag'); //regs-


var hasVowel = /[aeiouy]/i;
var hasLetter = /[a-z]/;
var hasNumber = /[0-9]/;

var addMethods = function addMethods(Term) {
  var methods = {
    /** which tag best-represents this term?*/
    bestTag: function bestTag() {
      return _bestTag(this);
    },

    /** is this term like F.B.I. or NBA */
    isAcronym: function isAcronym() {
      return _isAcronym(this._text);
    },

    /** check if it is word-like in english */
    isWord: function isWord() {
      var t = this; //assume a contraction produces a word-word

      if (t.silent_term) {
        return true;
      } //no letters or numbers


      if (/[a-z|A-Z|0-9]/.test(t.text) === false) {
        return false;
      } //has letters, but with no vowels


      if (t.normal.length > 3 && hasLetter.test(t.normal) === true && hasVowel.test(t.normal) === false && t.isAcronym() === false) {
        return false;
      } //has numbers but not a 'value'


      if (hasNumber.test(t.normal) === true && t.tags.hasOwnProperty('Value') === false) {
        //s4e
        if (/[a-z][0-9][a-z]/.test(t.normal) === true) {
          return false;
        } //ensure it looks like a 'value' eg '-$4,231.00'
        // if (/^([$-])*?([0-9,\.])*?([s\$%])*?$/.test(t.normal) === false) {
        //   return false;
        // }

      }

      return true;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./bestTag":145,"./normalize/isAcronym":148}],148:[function(_dereq_,module,exports){
'use strict'; //regs -

var periodAcronym = /([A-Z]\.)+[A-Z]?,?$/;
var oneLetterAcronym = /^[A-Z]\.,?$/;
var noPeriodAcronym = /[A-Z]{2}('s|,)?$/;
/** does it appear to be an acronym, like FBI or M.L.B. */

var isAcronym = function isAcronym(str) {
  //like N.D.A
  if (periodAcronym.test(str) === true) {
    return true;
  } //like 'F.'


  if (oneLetterAcronym.test(str) === true) {
    return true;
  } //like NDA


  if (noPeriodAcronym.test(str) === true) {
    return true;
  }

  return false;
};

module.exports = isAcronym;

},{}],149:[function(_dereq_,module,exports){
'use strict';

var killUnicode = _dereq_('./unicode');

var isAcronym = _dereq_('./isAcronym'); //some basic operations on a string to reduce noise


exports.normalize = function (str) {
  str = str || '';
  str = str.toLowerCase();
  str = str.trim();
  var original = str; //(very) rough ASCII transliteration -  bjŏrk -> bjork

  str = killUnicode(str); //#tags, @mentions

  str = str.replace(/^[#@]/, ''); //punctuation

  str = str.replace(/[,;.!?]+$/, ''); // coerce single curly quotes

  str = str.replace(/[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]+/g, '\''); // coerce double curly quotes

  str = str.replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2033\u2034\u2036\u2037\u2E42\u301D\u301E\u301F\uFF02]+/g, '"'); //coerce Unicode ellipses

  str = str.replace(/\u2026/g, '...'); //en-dash

  str = str.replace(/\u2013/g, '-'); //lookin'->looking (make it easier for conjugation)

  if (/[a-z][^aeiou]in['’]$/.test(str) === true) {
    str = str.replace(/in['’]$/, 'ing');
  } //turn re-enactment to reenactment


  if (/^(re|un)-?[^aeiou]./.test(str) === true) {
    str = str.replace('-', '');
  } //strip leading & trailing grammatical punctuation


  if (/^[:;]/.test(str) === false) {
    str = str.replace(/\.{3,}$/g, '');
    str = str.replace(/['",\.!:;\?\)]+$/g, '');
    str = str.replace(/^['"\(]+/g, '');
  } //do this again..


  str = str.trim(); //oh shucks,

  if (str === '') {
    str = original;
  }

  return str;
};

exports.addNormal = function (term) {
  var str = term._text || '';
  str = exports.normalize(str); //compact acronyms

  if (isAcronym(term._text)) {
    str = str.replace(/\./g, '');
  } //nice-numbers


  str = str.replace(/([0-9]),([0-9])/g, '$1$2');
  term.normal = str;
}; // console.log(normalize('Dr. V Cooper'));

},{"./isAcronym":148,"./unicode":151}],150:[function(_dereq_,module,exports){
'use strict'; //

var rootForm = function rootForm(term) {
  var str = term.normal || term.silent_term || ''; //handle apostrophes and stuff (go further than normalize())

  str = str.replace(/'s\b/, '');
  str = str.replace(/'$/, '');
  term.root = str;
};

module.exports = rootForm;

},{}],151:[function(_dereq_,module,exports){
'use strict'; //a hugely-ignorant, and widely subjective transliteration of latin, cryllic, greek unicode characters to english ascii.
//approximate visual (not semantic or phonetic) relationship between unicode and ascii characters
//http://en.wikipedia.org/wiki/List_of_Unicode_characters
//https://docs.google.com/spreadsheet/ccc?key=0Ah46z755j7cVdFRDM1A2YVpwa1ZYWlpJM2pQZ003M0E

var compact = {
  '!': '¡',
  '?': '¿Ɂ',
  '"': '“”"❝❞',
  '\'': '‘‛❛❜',
  '-': '—–',
  'a': 'ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАДадѦѧӐӑӒӓƛɅæ',
  'b': 'ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬбвъьѢѣҌҍҔҕƥƾ',
  'c': '¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾϿЄСсєҀҁҪҫ',
  'd': 'ÐĎďĐđƉƊȡƋƌǷ',
  'e': 'ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬӭ',
  'f': 'ƑƒϜϝӺӻҒғӶӷſ',
  'g': 'ĜĝĞğĠġĢģƓǤǥǦǧǴǵ',
  'h': 'ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ',
  'I': 'ÌÍÎÏ',
  'i': 'ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії',
  'j': 'ĴĵǰȷɈɉϳЈј',
  'k': 'ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ',
  'l': 'ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ',
  'm': 'ΜϺϻМмӍӎ',
  'n': 'ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ',
  'o': 'ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ¤ƍΏ',
  'p': 'ƤƿΡρϷϸϼРрҎҏÞ',
  'q': 'Ɋɋ',
  'r': 'ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ',
  's': 'ŚśŜŝŞşŠšƧƨȘșȿςϚϛϟϨϩЅѕ',
  't': 'ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮϯТт҂Ҭҭ',
  'u': 'µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύϑЏЦЧцџҴҵҶҷӋӌӇӈ',
  'v': 'νѴѵѶѷ',
  'w': 'ŴŵƜωώϖϢϣШЩшщѡѿ',
  'x': '×ΧχϗϰХхҲҳӼӽӾӿ',
  'y': 'ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ',
  'z': 'ŹźŻżŽžƩƵƶȤȥɀΖζ'
}; //decompress data into two hashes

var unicode = {};
Object.keys(compact).forEach(function (k) {
  compact[k].split('').forEach(function (s) {
    unicode[s] = k;
  });
});

var killUnicode = function killUnicode(str) {
  var chars = str.split('');
  chars.forEach(function (s, i) {
    if (unicode[s]) {
      chars[i] = unicode[s];
    }
  });
  return chars.join('');
};

module.exports = killUnicode; // console.log(killUnicode('bjŏȒk—Ɏó'));

},{}],152:[function(_dereq_,module,exports){
'use strict';

var paths = _dereq_('../../paths');

var fns = paths.fns;
var tagset = paths.tags; //a nicer logger for the client-side

var clientSide = function clientSide(t) {
  var color = 'silver';
  var tags = Object.keys(t.tags);

  for (var i = 0; i < tags.length; i++) {
    if (tagset[tags[i]] && tagset[tags[i]].color) {
      color = tagset[tags[i]].color;
      break;
    }
  }

  var word = fns.leftPad(t.text, 12);
  word += ' ' + tags;
  console.log('%c ' + word, 'color: ' + color);
};

module.exports = clientSide;

},{"../../paths":161}],153:[function(_dereq_,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var renderHtml = _dereq_('./renderHtml');

var clientDebug = _dereq_('./client');

var serverDebug = _dereq_('./server');

var methods = {
  /** a pixel-perfect reproduction of the input, with whitespace preserved */
  text: function text(r) {
    return (r.whitespace.before || '') + r._text + (r.whitespace.after || '');
  },

  /** a lowercased, punctuation-cleaned, whitespace-trimmed version of the word */
  normal: function normal(r) {
    return r.normal;
  },

  /** even-more normalized than normal */
  root: function root(r) {
    return r.root || r.normal;
  },

  /** the &encoded term in a span element, with POS as classNames */
  html: function html(r) {
    return renderHtml(r);
  },

  /** a simplified response for Part-of-Speech tagging*/
  tags: function tags(r) {
    return {
      text: r.text,
      normal: r.normal,
      tags: Object.keys(r.tags)
    };
  },

  /** check-print information for the console */
  debug: function debug(t) {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
      clientDebug(t);
    } else {
      serverDebug(t);
    }
  }
};

var addMethods = function addMethods(Term) {
  //hook them into result.proto
  Term.prototype.out = function (fn) {
    if (!methods[fn]) {
      fn = 'text';
    }

    return methods[fn](this);
  };

  return Term;
};

module.exports = addMethods;

},{"./client":152,"./renderHtml":154,"./server":155}],154:[function(_dereq_,module,exports){
'use strict'; //turn xml special characters into apersand-encoding.
//i'm not sure this is perfectly safe.

var escapeHtml = function escapeHtml(s) {
  var HTML_CHAR_MAP = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    ' ': '&nbsp;'
  };
  return s.replace(/[<>&"' ]/g, function (ch) {
    return HTML_CHAR_MAP[ch];
  });
}; //remove html elements already in the text
//not tested!
//http://stackoverflow.com/questions/295566/sanitize-rewrite-html-on-the-client-side


var sanitize = function sanitize(html) {
  var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
  var tagOrComment = new RegExp('<(?:' // Comment body.
  + '!--(?:(?:-*[^->])*--+|-?)' // Special "raw text" elements whose content should be elided.
  + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*' + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*' // Regular name
  + '|/?[a-z]' + tagBody + ')>', 'gi');
  var oldHtml;

  do {
    oldHtml = html;
    html = html.replace(tagOrComment, '');
  } while (html !== oldHtml);

  return html.replace(/</g, '&lt;');
}; //turn the term into ~properly~ formatted html


var renderHtml = function renderHtml(t) {
  var classes = Object.keys(t.tags).filter(function (tag) {
    return tag !== 'Term';
  });
  classes = classes.map(function (c) {
    return 'nl-' + c;
  });
  classes = classes.join(' ');
  var text = sanitize(t.text);
  text = escapeHtml(text);
  var el = '<span class="' + classes + '">' + text + '</span>';
  return escapeHtml(t.whitespace.before) + el + escapeHtml(t.whitespace.after);
};

module.exports = renderHtml;

},{}],155:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('../../paths').fns; //pretty-print a term on the nodejs console


var serverDebug = function serverDebug(t) {
  var tags = Object.keys(t.tags).map(function (tag) {
    return fns.printTag(tag);
  }).join(', ');
  var word = t.text;
  word = '\'' + fns.yellow(word || '-') + '\'';
  var silent = '';

  if (t.silent_term) {
    silent = '[' + t.silent_term + ']';
  }

  word = fns.leftPad(word, 20);
  word += fns.leftPad(silent, 8);
  console.log('   ' + word + '   ' + '     - ' + tags);
};

module.exports = serverDebug;

},{"../../paths":161}],156:[function(_dereq_,module,exports){
'use strict'; // const endPunct = /([^\/,:;.()!?]{0,1})([\/,:;.()!?]+)$/i;

var endPunct = /([a-z0-9 ])([,:;.!?]+)$/i; //old

var addMethods = function addMethods(Term) {
  var methods = {
    /** the punctuation at the end of this term*/
    getPunctuation: function getPunctuation() {
      var m = this.text.match(endPunct);

      if (m) {
        return m[2];
      }

      m = this.whitespace.after.match(endPunct);

      if (m) {
        return m[2];
      }

      return null;
    },
    setPunctuation: function setPunctuation(punct) {
      this.killPunctuation();
      this.text += punct;

      if (punct === ',') {
        this.tags.Comma = true;
      }

      return this;
    },

    /** check if the term ends with a comma */
    hasComma: function hasComma() {
      if (this.getPunctuation() === ',') {
        return true;
      }

      return false;
    },
    killPunctuation: function killPunctuation() {
      this.text = this._text.replace(endPunct, '$1');
      delete this.tags.Comma;
      delete this.tags.ClauseEnd;
      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{}],157:[function(_dereq_,module,exports){
'use strict'; //recursively-check compatibility of this tag and term

var canBe = function canBe(term, tag) {
  var tagset = term.world.tags; //fail-fast

  if (tagset[tag] === undefined) {
    return true;
  } //loop through tag's contradictory tags


  var enemies = tagset[tag].notA || [];

  for (var i = 0; i < enemies.length; i++) {
    if (term.tags[enemies[i]] === true) {
      return false;
    }
  }

  if (tagset[tag].isA !== undefined) {
    return canBe(term, tagset[tag].isA); //recursive
  }

  return true;
};

module.exports = canBe;

},{}],158:[function(_dereq_,module,exports){
'use strict';

var setTag = _dereq_('./setTag');

var _unTag = _dereq_('./unTag');

var _canBe = _dereq_('./canBe'); //symbols used in sequential taggers which mean 'do nothing'
//.tag('#Person #Place . #City')


var ignore = {
  '.': true
};

var addMethods = function addMethods(Term) {
  var methods = {
    /** set the term as this part-of-speech */
    tag: function tag(_tag, reason) {
      if (ignore[_tag] !== true) {
        setTag(this, _tag, reason);
      }
    },

    /** remove this part-of-speech from the term*/
    unTag: function unTag(tag, reason) {
      if (ignore[tag] !== true) {
        _unTag(this, tag, reason);
      }
    },

    /** is this tag compatible with this word */
    canBe: function canBe(tag) {
      tag = tag || '';

      if (typeof tag === 'string') {
        //everything can be '.'
        if (ignore[tag] === true) {
          return true;
        }

        tag = tag.replace(/^#/, '');
      }

      return _canBe(this, tag);
    }
  }; //hook them into term.prototype

  Object.keys(methods).forEach(function (k) {
    Term.prototype[k] = methods[k];
  });
  return Term;
};

module.exports = addMethods;

},{"./canBe":157,"./setTag":159,"./unTag":160}],159:[function(_dereq_,module,exports){
'use strict'; //set a term as a particular Part-of-speech

var path = _dereq_('../../paths');

var log = path.log;
var fns = path.fns;

var unTag = _dereq_('./unTag'); // const tagset = path.tags;
// const tagset = require('../../../tagset');


var putTag = function putTag(term, tag, reason) {
  var tagset = term.world.tags;
  tag = tag.replace(/^#/, ''); //already got this

  if (term.tags[tag] === true) {
    return;
  }

  term.tags[tag] = true;
  log.tag(term, tag, reason); //extra logic per-each POS

  if (tagset[tag]) {
    //drop any conflicting tags
    var enemies = tagset[tag].notA || [];

    for (var i = 0; i < enemies.length; i++) {
      if (term.tags[enemies[i]] === true) {
        unTag(term, enemies[i], reason);
      }
    } //apply implicit tags


    if (tagset[tag].isA) {
      var doAlso = tagset[tag].isA;

      if (term.tags[doAlso] !== true) {
        putTag(term, doAlso, ' --> ' + tag); //recursive
      }
    }
  }
}; //give term this tag


var wrap = function wrap(term, tag, reason) {
  if (!term || !tag) {
    return;
  }

  var tagset = term.world.tags; //handle multiple tags

  if (fns.isArray(tag)) {
    tag.forEach(function (t) {
      return putTag(term, t, reason);
    }); //recursive

    return;
  }

  putTag(term, tag, reason); //add 'extra' tag (for some special tags)

  if (tagset[tag] && tagset[tag].also !== undefined) {
    putTag(term, tagset[tag].also, reason);
  }
};

module.exports = wrap;

},{"../../paths":161,"./unTag":160}],160:[function(_dereq_,module,exports){
'use strict'; //set a term as a particular Part-of-speech

var path = _dereq_('../../paths');

var log = path.log; //remove a tag from a term

var unTag = function unTag(term, tag, reason) {
  var tagset = term.world.tags;

  if (term.tags[tag]) {
    log.unTag(term, tag, reason);
    delete term.tags[tag]; //delete downstream tags too

    if (tagset[tag]) {
      var also = tagset[tag].downward;

      for (var i = 0; i < also.length; i++) {
        unTag(term, also[i], ' - -   - ');
      }
    }
  }
};

var wrap = function wrap(term, tag, reason) {
  if (!term || !tag) {
    return;
  } //support '*' flag - remove all-tags


  if (tag === '*') {
    term.tags = {};
    return;
  } //remove this tag


  unTag(term, tag, reason);
  return;
};

module.exports = wrap;

},{"../../paths":161}],161:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  fns: _dereq_('../fns'),
  log: _dereq_('../log'),
  tags: _dereq_('../tags')
};

},{"../fns":3,"../log":6,"../tags":137}],162:[function(_dereq_,module,exports){
'use strict'; //punctuation regs-  are we having fun yet?

var before = /^([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|\x2D+|\.\.+|\/|"|"|\uFF02|'|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\xAB|\u2039|\u2035|\u2036|\u2037|\u301D|`|\u301F)+/; // const after = /(\s+|-+|\.\.+|"|\u0022|\uFF02|\u0027|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4)+$/u;

var afterSoft = /([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+|\x2D+|\.\.+|"|"|\uFF02|'|\u201D|\u2019|\xBB|\u203A|\u2032|\u2033|\u2034|\u301E|\xB4)+[ !,\.;\?]*$/;
var minusNumber = /^( *)-(\$|€|¥|£)?([0-9])/; //seperate the 'meat' from the trailing/leading whitespace.
//works in concert with ./src/text/tokenize.js

var build_whitespace = function build_whitespace(str) {
  var whitespace = {
    before: '',
    after: ''
  }; //get before punctuation/whitespace
  //mangle 'far - fetched', but don't mangle '-2'

  var m = str.match(minusNumber);

  if (m !== null) {
    whitespace.before = m[1];
    str = str.replace(/^ */, '');
  } else {
    m = str.match(before);

    if (m !== null) {
      whitespace.before = m[0];
      str = str.replace(before, '');
    }
  } //get after punctuation/whitespace


  m = str.match(afterSoft);

  if (m !== null) {
    str = str.replace(afterSoft, '');
    whitespace.after = m[0];
  }

  return {
    whitespace: whitespace,
    text: str
  };
};

module.exports = build_whitespace;

},{}],163:[function(_dereq_,module,exports){
'use strict';

var Term = _dereq_('../term');

var wordlike = /\S/;
var isBoundary = /^[!?.]+$/;
var notWord = {
  '.': true,
  '-': true,
  //dash
  '–': true,
  //en-dash
  '—': true,
  //em-dash
  '--': true,
  '...': true
};

var hasHyphen = function hasHyphen(str) {
  //dont split 're-do'
  if (/^(re|un)-?[^aeiou]./.test(str) === true) {
    return false;
  } //letter-number


  var reg = /^([a-z`"'/]+)(-|–|—)([a-z0-9].*)/i;

  if (reg.test(str) === true) {
    return true;
  } //number-letter
  // reg = /^([0-9]+)(-|–|—)([a-z].*)/i;
  // if (reg.test(str) === true) {
  //   return true;
  // }
  //support weird number-emdash combo '2010–2011'


  var reg2 = /^([0-9]+)(–|—)([0-9].*)/i;

  if (reg2.test(str)) {
    return true;
  }

  return false;
}; //support splitting terms like "open/closed"


var hasSlash = function hasSlash(word) {
  var reg = /[a-z]\/[a-z]/;

  if (reg.test(word)) {
    //only one slash though
    if (word.split(/\//g).length === 2) {
      return true;
    }
  }

  return false;
}; //turn a string into an array of terms (naiive for now, lumped later)


var fromString = function fromString(str, world) {
  var result = [];
  var arr = []; //start with a naiive split

  str = str || '';

  if (typeof str === 'number') {
    str = String(str);
  }

  var firstSplit = str.split(/(\S+)/);

  for (var i = 0; i < firstSplit.length; i++) {
    var word = firstSplit[i];

    if (hasHyphen(word) === true) {
      //support multiple-hyphenated-terms
      var hyphens = word.split(/[-–—]/);

      for (var o = 0; o < hyphens.length; o++) {
        if (o === hyphens.length - 1) {
          arr.push(hyphens[o]);
        } else {
          arr.push(hyphens[o] + '-');
        }
      }
    } else if (hasSlash(word) === true) {
      var slashes = word.split(/\//);
      arr.push(slashes[0]);
      arr.push('/' + slashes[1]);
    } else {
      arr.push(word);
    }
  } //greedy merge whitespace+arr to the right


  var carry = '';

  for (var _i = 0; _i < arr.length; _i++) {
    //if it's more than a whitespace
    if (wordlike.test(arr[_i]) === true && notWord.hasOwnProperty(arr[_i]) === false && isBoundary.test(arr[_i]) === false) {
      result.push(carry + arr[_i]);
      carry = '';
    } else {
      carry += arr[_i];
    }
  } //handle last one


  if (carry && result.length > 0) {
    result[result.length - 1] += carry; //put it on the end
  }

  return result.map(function (t) {
    return new Term(t, world);
  });
};

module.exports = fromString;

},{"../term":143}],164:[function(_dereq_,module,exports){
'use strict'; //getters/setters for the Terms class

module.exports = {
  parent: {
    get: function get() {
      return this.refText || this;
    },
    set: function set(r) {
      this.refText = r;
      return this;
    }
  },
  parentTerms: {
    get: function get() {
      return this.refTerms || this;
    },
    set: function set(r) {
      this.refTerms = r;
      return this;
    }
  },
  dirty: {
    get: function get() {
      for (var i = 0; i < this.terms.length; i++) {
        if (this.terms[i].dirty === true) {
          return true;
        }
      }

      return false;
    },
    set: function set(dirt) {
      this.terms.forEach(function (t) {
        t.dirty = dirt;
      });
    }
  },
  refTerms: {
    get: function get() {
      return this._refTerms || this;
    },
    set: function set(ts) {
      this._refTerms = ts;
      return this;
    }
  },
  found: {
    get: function get() {
      return this.terms.length > 0;
    }
  },
  length: {
    get: function get() {
      return this.terms.length;
    }
  },
  isA: {
    get: function get() {
      return 'Terms';
    }
  },
  whitespace: {
    get: function get() {
      var _this = this;

      return {
        before: function before(str) {
          _this.firstTerm().whitespace.before = str;
          return _this;
        },
        after: function after(str) {
          _this.lastTerm().whitespace.after = str;
          return _this;
        }
      };
    }
  }
};

},{}],165:[function(_dereq_,module,exports){
'use strict';

var build = _dereq_('./build');

var getters = _dereq_('./getters');

var w = _dereq_('../world'); //Terms is an array of Term objects, and methods that wrap around them


var Terms = function Terms(arr, world, refText, refTerms) {
  var _this = this;

  this.terms = arr;
  this.world = world || w;
  this.refText = refText;
  this._refTerms = refTerms;

  this.get = function (n) {
    return _this.terms[n];
  }; //apply getters


  var keys = Object.keys(getters);

  for (var i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], getters[keys[i]]);
  }
};

Terms.fromString = function (str, world) {
  var termArr = build(str, world);
  var ts = new Terms(termArr, world, null); //give each term a original to this ts

  ts.terms.forEach(function (t) {
    t.parentTerms = ts;
  });
  return ts;
}; // Terms = require('./methods/lookup')(Terms);


_dereq_('./match')(Terms);

_dereq_('./methods/tag')(Terms);

_dereq_('./methods/loops')(Terms);

_dereq_('./match/not')(Terms);

_dereq_('./methods/delete')(Terms);

_dereq_('./methods/insert')(Terms);

_dereq_('./methods/misc')(Terms);

_dereq_('./methods/out')(Terms);

_dereq_('./methods/replace')(Terms);

_dereq_('./methods/split')(Terms);

_dereq_('./methods/transform')(Terms);

_dereq_('./methods/lump')(Terms);

module.exports = Terms;

},{"../world":215,"./build":163,"./getters":164,"./match":166,"./match/not":176,"./methods/delete":177,"./methods/insert":178,"./methods/loops":179,"./methods/lump":181,"./methods/misc":182,"./methods/out":183,"./methods/replace":184,"./methods/split":185,"./methods/tag":186,"./methods/transform":187}],166:[function(_dereq_,module,exports){
'use strict';

var syntax = _dereq_('./lib/syntax');

var startHere = _dereq_('./lib/startHere');

var Text = _dereq_('../../text');

var _match = _dereq_('./lib');

var matchMethods = function matchMethods(Terms) {
  var methods = {
    //support regex-like whitelist-match
    match: function match(reg, verbose) {
      var _this = this;

      //fail-fast #1
      if (this.terms.length === 0) {
        return new Text([], this.world, this.parent);
      } //fail-fast #2


      if (!reg) {
        return new Text([], this.world, this.parent);
      }

      var matches = _match(this, reg, verbose);

      matches = matches.map(function (a) {
        return new Terms(a, _this.world, _this.refText, _this.refTerms);
      });
      return new Text(matches, this.world, this.parent);
    },

    /**return first match */
    matchOne: function matchOne(str) {
      //fail-fast
      if (this.terms.length === 0) {
        return null;
      }

      var regs = syntax(str);

      for (var t = 0; t < this.terms.length; t++) {
        //don't loop through if '^'
        if (regs[0] && regs[0].starting && t > 0) {
          break;
        }

        var m = startHere(this, t, regs);

        if (m) {
          return m;
        }
      }

      return null;
    },

    /**return first match */
    has: function has(str) {
      return this.matchOne(str) !== null;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = matchMethods;

},{"../../text":192,"./lib":170,"./lib/startHere":174,"./lib/syntax":175}],167:[function(_dereq_,module,exports){
'use strict'; //applies the reg capture group setting to the term

var applyCaptureGroup = function applyCaptureGroup(term, reg) {
  if (reg.capture) {
    term.captureGroup = true;
  } else {
    term.captureGroup = undefined;
  }
};

module.exports = applyCaptureGroup;

},{}],168:[function(_dereq_,module,exports){
'use strict'; //take all the matches, and if there is a [capture group], only return that.

var onlyCaptureGroup = function onlyCaptureGroup(matches) {
  var results = [];
  matches.forEach(function (terms) {
    //if there's no capture group, we good.
    if (terms.filter(function (t) {
      return t.captureGroup === true;
    }).length === 0) {
      results.push(terms);
      return;
    } //otherwise, just return them as seperate subsets


    var current = [];

    for (var i = 0; i < terms.length; i += 1) {
      if (terms[i].captureGroup) {
        current.push(terms[i]);
      } else if (current.length > 0) {
        results.push(current);
        current = [];
      }
    }

    if (current.length > 0) {
      results.push(current);
    }
  });
  return results;
};

module.exports = onlyCaptureGroup;

},{}],169:[function(_dereq_,module,exports){
'use strict'; //
//find easy reasons to skip running the full match on this

var fastPass = function fastPass(ts, regs) {
  for (var i = 0; i < regs.length; i++) {
    var reg = regs[i];
    var found = false; //we can't cheat on these fancy rules:

    if (reg.optional === true || reg.negative === true || reg.minMax !== undefined) {
      continue;
    } //look-for missing term-matches


    if (reg.normal !== undefined) {
      for (var o = 0; o < ts.terms.length; o++) {
        if (ts.terms[o].normal === reg.normal || ts.terms[o].silent_term === reg.normal) {
          found = true;
          break;
        } //we can't handle lumped-terms with this method


        if (ts.terms[o].lumped === true) {
          return false;
        }
      }

      if (found === false) {
        return true;
      }
    } //look for missing tags


    if (reg.tag !== undefined) {
      for (var _o = 0; _o < ts.terms.length; _o++) {
        if (ts.terms[_o].tags[reg.tag] === true) {
          found = true;
          break;
        }
      }

      if (found === false) {
        return true;
      }
    }
  }

  return false;
};

module.exports = fastPass;

},{}],170:[function(_dereq_,module,exports){
'use strict';

var syntax = _dereq_('./syntax');

var startHere = _dereq_('./startHere');

var fastPass = _dereq_('./fastPass');

var handleCaptureGroup = _dereq_('./captureGroup'); //ensure we have atleast one non-optional demand
// const isTautology = function(regs) {
//   for (let i = 0; i < regs.length; i++) {
//     if (!regs[i].optional && !regs[i].astrix && !regs[i].anyOne) {
//       return false;
//     }
//   }
//   return true;
// };
//make a reg syntax from a text object


var findFromTerms = function findFromTerms(ts) {
  if (!ts) {
    return [];
  }

  var arr = ts.terms.map(function (t) {
    return {
      id: t.uid
    };
  });
  return arr;
}; //


var match = function match(ts, reg, verbose) {
  //parse for backwards-compatibility
  if (typeof reg === 'string') {
    reg = syntax(reg);
  } else if (reg && reg.isA === 'Text') {
    reg = findFromTerms(reg.list[0]);
  } else if (reg && reg.isA === 'Terms') {
    reg = findFromTerms(reg);
  }

  if (!reg || reg.length === 0) {
    return [];
  } //do a fast-pass for easy negatives


  if (fastPass(ts, reg, verbose) === true) {
    return [];
  } //ok, start long-match


  var matches = [];

  for (var t = 0; t < ts.terms.length; t += 1) {
    //don't loop through if '^'
    if (t > 0 && reg[0] && reg[0].starting) {
      break;
    }

    var m = startHere(ts, t, reg, verbose);

    if (m && m.length > 0) {
      matches.push(m); //handle capture-groups subset
      // let hasCapture=matches
      //ok, don't try to match these again.

      var skip = m.length - 1;
      t += skip; //this could use some work
    }
  } //handle capture-group subset


  matches = handleCaptureGroup(matches);
  return matches;
};

module.exports = match;

},{"./captureGroup":168,"./fastPass":169,"./startHere":174,"./syntax":175}],171:[function(_dereq_,module,exports){
'use strict';

var applyCaptureGroup = _dereq_('./applyCaptureGroup'); //compare 1 term to one reg


var perfectMatch = function perfectMatch(term, reg) {
  if (!term || !reg) {
    return false;
  } //support '.' - any


  if (reg.anyOne === true) {
    return true;
  } //pos-match


  if (reg.tag !== undefined) {
    return term.tags[reg.tag];
  } //id-match


  if (reg.id !== undefined) {
    return reg.id === term.uid;
  } //text-match


  if (reg.normal !== undefined) {
    return reg.normal === term.normal || reg.normal === term.silent_term;
  } //suffix matches '-nny'


  if (reg.suffix === true && reg.partial !== undefined) {
    var len = term.normal.length;
    return term.normal.substr(len - reg.partial.length, len) === reg.partial;
  } //prefix matches 'fun-'


  if (reg.prefix === true && reg.partial !== undefined) {
    return term.normal.substr(0, reg.partial.length) === reg.partial;
  } //infix matches '-nn-'


  if (reg.infix === true && reg.partial) {
    return term.normal.indexOf(reg.partial) !== -1;
  } //full-on regex-match '/a*?/'


  if (reg.regex !== undefined) {
    return reg.regex.test(term.normal) || reg.regex.test(term.text);
  } //one-of term-match


  if (reg.oneOf !== undefined) {
    for (var i = 0; i < reg.oneOf.tagArr.length; i++) {
      if (term.tags.hasOwnProperty(reg.oneOf.tagArr[i]) === true) {
        return true;
      }
    }

    return reg.oneOf.terms.hasOwnProperty(term.normal) || reg.oneOf.terms.hasOwnProperty(term.silent_term);
  }

  return false;
}; //wrap above method, to support '!' negation


var isMatch = function isMatch(term, reg, verbose) {
  if (!term || !reg) {
    return false;
  }

  var found = perfectMatch(term, reg, verbose); //reverse it for .not()

  if (reg.negative) {
    found = !Boolean(found);
  }

  if (found) {
    //only apply capture group settings to matches
    applyCaptureGroup(term, reg);
  }

  return found;
};

module.exports = isMatch;

},{"./applyCaptureGroup":167}],172:[function(_dereq_,module,exports){
'use strict';

var almostMatch = function almostMatch(reg_str, term) {
  var want = term.normal.substr(0, reg_str.length);
  return want === reg_str;
}; // match ['john', 'smith'] regs, when the term is lumped


var lumpMatch = function lumpMatch(term, regs, reg_i) {
  var reg_str = regs[reg_i].normal; //is this a partial match? 'tony'& 'tony hawk'

  if (reg_str !== undefined && almostMatch(reg_str, term)) {
    //try to grow it
    reg_i = reg_i + 1;

    for (reg_i; reg_i < regs.length; reg_i++) {
      reg_str += ' ' + regs[reg_i].normal; // is it now perfect?

      if (reg_str === term.normal) {
        return reg_i;
      } // is it still almost?


      if (almostMatch(reg_str, term) === false) {
        return null;
      }
    }
  }

  return null;
};

module.exports = lumpMatch;

},{}],173:[function(_dereq_,module,exports){
arguments[4][73][0].apply(exports,arguments)
},{"../../paths":189,"dup":73}],174:[function(_dereq_,module,exports){
'use strict';

var lumpMatch = _dereq_('./lumpMatch');

var isMatch = _dereq_('./isMatch');

var applyCaptureGroup = _dereq_('./applyCaptureGroup'); // match everything until this point - '*'


var greedyUntil = function greedyUntil(ts, i, reg) {
  for (; i < ts.length; i++) {
    if (isMatch(ts.terms[i], reg)) {
      return i;
    }
  }

  return null;
}; //keep matching this reg as long as possible


var greedyOf = function greedyOf(ts, i, reg, until) {
  for (; i < ts.length; i++) {
    var t = ts.terms[i]; //found next reg ('until')

    if (until && isMatch(t, until)) {
      return i;
    } //stop here


    if (!isMatch(t, reg)) {
      return i;
    }
  }

  return i;
}; //try and match all regs, starting at this term


var startHere = function startHere(ts, startAt, regs, verbose) {
  var term_i = startAt; //check each regex-thing

  for (var reg_i = 0; reg_i < regs.length; reg_i++) {
    var term = ts.terms[term_i];
    var reg = regs[reg_i];
    var next_reg = regs[reg_i + 1];

    if (!term) {
      //we didn't need it anyways
      if (reg.optional === true) {
        continue;
      }

      return null;
    } //catch '^' errors


    if (reg.starting === true && term_i > 0) {
      return null;
    } //catch '$' errors


    if (reg.ending === true && term_i !== ts.length - 1 && !reg.minMax) {
      return null;
    } //support '*'


    if (reg.astrix === true) {
      //just grab until the end..
      if (!next_reg) {
        var terms = ts.terms.slice(startAt, ts.length); //apply capture group settings for all wildcard terms

        for (var wildcardTerm_i = term_i - startAt; wildcardTerm_i < terms.length; wildcardTerm_i++) {
          applyCaptureGroup(terms[wildcardTerm_i], reg);
        }

        return terms;
      }

      var foundAt = greedyUntil(ts, term_i, regs[reg_i + 1]);

      if (!foundAt) {
        return null;
      } //apply capture group settings for all wildcard terms


      for (var _wildcardTerm_i = term_i; _wildcardTerm_i < foundAt; _wildcardTerm_i++) {
        applyCaptureGroup(ts.terms[_wildcardTerm_i], reg);
      }

      term_i = foundAt + 1;
      reg_i += 1;
      continue;
    } //support '#Noun{x,y}'


    if (regs[reg_i].minMax !== undefined) {
      var min = regs[reg_i].minMax.min || 0;
      var max = regs[reg_i].minMax.max;
      var until = regs[reg_i + 1];

      for (var i = 0; i < max; i++) {
        //ergh, please clean this loop up..
        var t = ts.terms[term_i + i];

        if (!t) {
          return null;
        } //end here


        if (isMatch(t, reg) === false) {
          return null;
        } //should we be greedier?


        if (i < min - 1) {
          continue; //gotta keep going!
        } //we can end here, after the minimum


        if (!until) {
          term_i += 1;
          break;
        } // we're greedy-to-now


        if (i >= min && isMatch(t, until)) {
          break;
        } //end with a greedy-match for next term


        var nextT = ts.terms[term_i + i + 1];

        if (nextT && isMatch(nextT, until)) {
          term_i += i + 2;
          reg_i += 1;
          break;
        } else if (i === max - 1) {
          //we've maxed-out
          return null;
        }
      }

      continue;
    } //if optional, check next one


    if (reg.optional === true) {
      var _until = regs[reg_i + 1];
      term_i = greedyOf(ts, term_i, reg, _until);
      continue;
    } //check a perfect match


    if (isMatch(term, reg, verbose)) {
      term_i += 1; //try to greedy-match '+'

      if (reg.consecutive === true) {
        var _until2 = regs[reg_i + 1];
        term_i = greedyOf(ts, term_i, reg, _until2);
      }

      continue;
    }

    if (term.silent_term && !term.normal) {
      //skip over silent contraction terms
      //we will continue on it, but not start on it
      if (reg_i === 0) {
        return null;
      } //try the next term, but with this regex again


      term_i += 1;
      reg_i -= 1;
      continue;
    } //handle partial-matches of lumped terms


    var lumpUntil = lumpMatch(term, regs, reg_i, verbose);

    if (lumpUntil !== null) {
      reg_i = lumpUntil;
      term_i += 1;
      continue;
    } //was it optional anways?


    if (reg.optional === true) {
      continue;
    }

    return null;
  }

  return ts.terms.slice(startAt, term_i);
};

module.exports = startHere;

},{"./applyCaptureGroup":167,"./isMatch":171,"./lumpMatch":172}],175:[function(_dereq_,module,exports){
'use strict'; // parse a search lookup term find the regex-like syntax in this term

var fns = _dereq_('./paths').fns; //regs-


var range = /\{[0-9,]+\}$/; //trim char#0

var noFirst = function noFirst(str) {
  return str.substr(1, str.length);
};

var noLast = function noLast(str) {
  return str.substring(0, str.length - 1);
}; //turn 'regex-like' search string into parsed json


var parse_term = function parse_term(term) {
  term = term || '';
  term = term.trim();
  var reg = {}; //order matters here
  //1-character hasta be a text-match

  if (term.length === 1 && term !== '.' && term !== '*') {
    reg.normal = term.toLowerCase();
    return reg;
  } //negation ! flag


  if (term.charAt(0) === '!') {
    term = noFirst(term);
    reg.negative = true;
  } //leading ^ flag


  if (term.charAt(0) === '^') {
    term = noFirst(term);
    reg.starting = true;
  } //trailing $ flag means ending


  if (term.charAt(term.length - 1) === '$') {
    term = noLast(term);
    reg.ending = true;
  } //optional flag


  if (term.charAt(term.length - 1) === '?') {
    term = noLast(term);
    reg.optional = true;
  } //atleast-one-but-greedy flag


  if (term.charAt(term.length - 1) === '+') {
    term = noLast(term);
    reg.consecutive = true;
  } //prefix/suffix/infix matches


  if (term.charAt(term.length - 1) === '_') {
    term = noLast(term);
    reg.prefix = true; //try both '-match-'

    if (term.charAt(0) === '_') {
      term = noFirst(term);
      reg.prefix = undefined;
      reg.infix = true;
    }

    reg.partial = term;
    term = '';
  } else if (term.charAt(0) === '_') {
    term = noFirst(term);
    reg.suffix = true;
    reg.partial = term;
    term = '';
  } //min/max any '{1,3}'


  if (term.charAt(term.length - 1) === '}' && range.test(term) === true) {
    var m = term.match(/\{([0-9])*,? ?([0-9]+)\}/);
    reg.minMax = {
      min: parseInt(m[1], 10) || 0,
      max: parseInt(m[2], 10)
    };
    term = term.replace(range, '');
  } //pos flag


  if (term.charAt(0) === '#') {
    term = noFirst(term);
    reg.tag = fns.titleCase(term);
    term = '';
  } //support /regex/ mode


  if (term.charAt(0) === '/' && term.charAt(term.length - 1) === '/') {
    term = noLast(term);
    term = noFirst(term); //actually make the regex

    reg.regex = new RegExp(term, 'i');
    term = '';
  } //one_of options flag


  if (term.charAt(0) === '(' && term.charAt(term.length - 1) === ')') {
    term = noLast(term);
    term = noFirst(term);
    var arr = term.split(/\|/g);
    reg.oneOf = {
      terms: {},
      tagArr: []
    };
    arr.forEach(function (str) {
      //try a tag match
      if (str.charAt(0) === '#') {
        var tag = str.substr(1, str.length);
        tag = fns.titleCase(tag);
        reg.oneOf.tagArr.push(tag);
      } else {
        reg.oneOf.terms[str] = true;
      }
    });
    term = '';
  } //a period means any one term


  if (term === '.') {
    reg.anyOne = true;
    term = '';
  } //a * means anything until sentence end


  if (term === '*') {
    reg.astrix = true;
    term = '';
  }

  if (term !== '') {
    //support \ encoding of #[]()*+?^
    term = term.replace(/\\([\\#\*\.\[\]\(\)\+\?\^])/g, '');
    reg.normal = term.toLowerCase();
  }

  return reg;
}; //turn a match string into an array of objects


var parse_all = function parse_all(input) {
  input = input || '';
  var regs = input.split(/ +/); //bundle-up multiple-words inside parentheses

  for (var i = 0; i < regs.length; i += 1) {
    if (regs[i].indexOf('(') !== -1 && regs[i].indexOf(')') === -1) {
      var nextWord = regs[i + 1];

      if (nextWord && nextWord.indexOf('(') === -1 && nextWord.indexOf(')') !== -1) {
        regs[i + 1] = regs[i] + ' ' + regs[i + 1];
        regs[i] = '';
      }
    }
  }

  regs = regs.filter(function (f) {
    return f;
  });
  var captureOn = false;
  regs = regs.map(function (reg) {
    var hasEnd = false; //support [#Noun] capture-group syntax

    if (reg.charAt(0) === '[') {
      reg = noFirst(reg);
      captureOn = true;
    }

    if (reg.charAt(reg.length - 1) === ']') {
      reg = noLast(reg);
      captureOn = false;
      hasEnd = true;
    }

    reg = parse_term(reg);

    if (captureOn === true || hasEnd === true) {
      reg.capture = true;
    }

    return reg;
  });
  return regs;
};

module.exports = parse_all; // console.log(JSON.stringify(parse_all('the (canadian|united states|british) senate'), null, 2));

},{"./paths":173}],176:[function(_dereq_,module,exports){
'use strict'; //

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var syntax = _dereq_('./lib/syntax');

var startHere = _dereq_('./lib/startHere');

var Text = _dereq_('../../text');

var addfns = function addfns(Terms) {
  var fns = {
    //blacklist from a {word:true} object
    notObj: function notObj(r, obj) {
      var matches = [];
      var current = [];
      r.terms.forEach(function (t) {
        //TODO? support multi-word blacklists
        //we should blacklist this term
        if (obj.hasOwnProperty(t.normal)) {
          if (current.length) {
            matches.push(current);
          }

          current = [];
        } else {
          current.push(t);
        }
      }); //add remainder

      if (current.length) {
        matches.push(current);
      }

      matches = matches.map(function (a) {
        return new Terms(a, r.world, r.refText, r.refTerms);
      });
      return new Text(matches, r.world, r.parent);
    },
    //blacklist from a match string
    notString: function notString(r, want, verbose) {
      var matches = [];
      var regs = syntax(want);
      var terms = []; //try the match starting from each term

      for (var i = 0; i < r.terms.length; i++) {
        var bad = startHere(r, i, regs, verbose);

        if (bad && bad.length > 0) {
          //reset matches
          if (terms.length > 0) {
            matches.push(terms);
            terms = [];
          } //skip these terms now


          i += bad.length - 1;
          continue;
        }

        terms.push(r.terms[i]);
      } //remaining ones


      if (terms.length > 0) {
        matches.push(terms);
      }

      matches = matches.map(function (a) {
        return new Terms(a, r.world, r.refText, r.refTerms);
      }); // return matches

      return new Text(matches, r.world, r.parent);
    }
  }; //blacklist from a [word, word] array

  fns.notArray = function (r, arr) {
    var obj = arr.reduce(function (h, a) {
      h[a] = true;
      return h;
    }, {});
    return fns.notObj(r, obj);
  };

  fns.notText = function (r, m) {
    var arr = m.out('array'); //i guess this is fine..

    return fns.notArray(r, arr);
  };
  /**return everything but these matches*/


  Terms.prototype.not = function (want, verbose) {
    //support [word, word] blacklist
    if (_typeof(want) === 'object') {
      var type = Object.prototype.toString.call(want);

      if (type === '[object Array]') {
        return fns.notArray(this, want, verbose);
      }

      if (type === '[object Object]') {
        if (want.isA === 'Text') {
          return fns.notText(this, want, verbose);
        } else {
          return fns.notObj(this, want, verbose);
        }
      }
    }

    if (typeof want === 'string') {
      return fns.notString(this, want, verbose);
    }

    return this;
  };

  return Terms;
};

module.exports = addfns;

},{"../../text":192,"./lib/startHere":174,"./lib/syntax":175}],177:[function(_dereq_,module,exports){
'use strict';

var mutate = _dereq_('../mutate');

var addMethod = function addMethod(Terms) {
  //hook it into Terms.proto
  Terms.prototype.delete = function (reg) {
    //don't touch parent if empty
    if (!this.found) {
      return this;
    } //remove all selected


    if (!reg) {
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      return this;
    } //only remove a portion of this


    var found = this.match(reg);

    if (found.found) {
      var r = mutate.deleteThese(this, found);
      return r;
    }

    return this.parentTerms;
  };

  return Terms;
};

module.exports = addMethod;

},{"../mutate":188}],178:[function(_dereq_,module,exports){
'use strict';

var mutate = _dereq_('../mutate'); //whitespace


var addSpaceAt = function addSpaceAt(ts, i) {
  if (!ts.terms.length || !ts.terms[i]) {
    return ts;
  }

  ts.terms[i].whitespace.before = ' ';
  return ts;
};

var insertMethods = function insertMethods(Terms) {
  //accept any sorta thing
  var ensureTerms = function ensureTerms(input, world) {
    if (input.isA === 'Terms') {
      return input;
    }

    if (input.isA === 'Term') {
      return new Terms([input], world);
    } //handle a string


    var ts = Terms.fromString(input, world);
    ts.tagger();
    return ts;
  };

  var methods = {
    insertBefore: function insertBefore(input, tag) {
      var original_l = this.terms.length;
      var ts = ensureTerms(input, this.world);

      if (tag) {
        ts.tag(tag);
      }

      var index = this.index(); //pad a space on parent

      addSpaceAt(this.parentTerms, index);

      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }

      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts); //also copy them to current selection

      if (this.terms.length === original_l) {
        this.terms = ts.terms.concat(this.terms);
      }

      return this;
    },
    insertAfter: function insertAfter(input, tag) {
      var original_l = this.terms.length;
      var ts = ensureTerms(input, this.world);

      if (tag) {
        ts.tag(tag);
      }

      var index = this.terms[this.terms.length - 1].index(); //beginning whitespace to ts

      addSpaceAt(ts, 0);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index + 1, ts); //also copy them to current selection

      if (this.terms.length === original_l) {
        this.terms = this.terms.concat(ts.terms);
      }

      return this;
    },
    insertAt: function insertAt(index, input, tag) {
      if (index < 0) {
        index = 0;
      }

      var original_l = this.terms.length;
      var ts = ensureTerms(input, this.world); //tag that thing too

      if (tag) {
        ts.tag(tag);
      }

      if (index > 0) {
        addSpaceAt(ts, 0); //if in middle of sentence
      }

      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, ts); //also copy them to current selection

      if (this.terms.length === original_l) {
        //splice the new terms into this (yikes!)
        Array.prototype.splice.apply(this.terms, [index, 0].concat(ts.terms));
      } //beginning whitespace to ts


      if (index === 0) {
        this.terms[0].whitespace.before = '';
        ts.terms[ts.terms.length - 1].whitespace.after = ' ';
      }

      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = insertMethods;

},{"../mutate":188}],179:[function(_dereq_,module,exports){
'use strict'; //these methods are simply term-methods called in a loop

var addMethods = function addMethods(Terms) {
  var foreach = [// ['tag'],
  // ['unTag'],
  // ['canBe'],
  ['toUpperCase', 'UpperCase'], ['toLowerCase'], ['toTitleCase', 'TitleCase']];
  foreach.forEach(function (arr) {
    var k = arr[0];
    var tag = arr[1];

    var myFn = function myFn() {
      var args = arguments;
      this.terms.forEach(function (t) {
        t[k].apply(t, args);
      });

      if (tag) {
        this.tag(tag, k);
      }

      return this;
    };

    Terms.prototype[k] = myFn;
  });
  return Terms;
};

module.exports = addMethods;

},{}],180:[function(_dereq_,module,exports){
'use strict';

var Term = _dereq_('../../../term'); //merge two term objects.. carefully


var makeText = function makeText(a, b) {
  var text = a.whitespace.before + a.text + a.whitespace.after;
  text += b.whitespace.before + b.text + b.whitespace.after;
  return text;
};

var combine = function combine(s, i) {
  var a = s.terms[i];
  var b = s.terms[i + 1];

  if (!b) {
    return;
  }

  var text = makeText(a, b);
  s.terms[i] = new Term(text, a.context);
  s.terms[i].normal = a.normal + ' ' + b.normal;
  s.terms[i].lumped = true;
  s.terms[i].parentTerms = s.terms[i + 1].parentTerms;
  s.terms[i + 1] = null;
  s.terms = s.terms.filter(function (t) {
    return t !== null;
  });
  return;
};

module.exports = combine;

},{"../../../term":143}],181:[function(_dereq_,module,exports){
'use strict';

var combine = _dereq_('./combine');

var mutate = _dereq_('../../mutate'); //merge-together our current match into one term


var combineThem = function combineThem(ts, tags) {
  var len = ts.terms.length;

  for (var i = 0; i < len; i++) {
    combine(ts, 0);
  }

  var lumped = ts.terms[0];
  lumped.tags = tags;
  return lumped;
};

var lumpMethods = function lumpMethods(Terms) {
  Terms.prototype.lump = function () {
    //collect the tags up
    var index = this.index();
    var tags = {};
    this.terms.forEach(function (t) {
      Object.keys(t.tags).forEach(function (tag) {
        return tags[tag] = true;
      });
    }); //just lump the whole-thing together

    if (this.parentTerms === this) {
      var _lumped = combineThem(this, tags);

      this.terms = [_lumped];
      return this;
    } //otherwise lump just part of it. delete/insert.


    this.parentTerms = mutate.deleteThese(this.parentTerms, this); //merge-together our current match into one term

    var lumped = combineThem(this, tags); //put it back (in the same place)

    this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, lumped);
    return this;
  };

  return Terms;
};

module.exports = lumpMethods;

},{"../../mutate":188,"./combine":180}],182:[function(_dereq_,module,exports){
'use strict';

var _tagger = _dereq_('../../tagger');

var miscMethods = function miscMethods(Terms) {
  var methods = {
    tagger: function tagger() {
      _tagger(this);

      return this;
    },
    firstTerm: function firstTerm() {
      return this.terms[0];
    },
    lastTerm: function lastTerm() {
      return this.terms[this.terms.length - 1];
    },
    all: function all() {
      return this.parent;
    },
    data: function data() {
      return {
        text: this.out('text'),
        normal: this.out('normal')
      };
    },
    term: function term(n) {
      return this.terms[n];
    },
    first: function first() {
      var t = this.terms[0];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    last: function last() {
      var t = this.terms[this.terms.length - 1];
      return new Terms([t], this.world, this.refText, this.refTerms);
    },
    slice: function slice(start, end) {
      var terms = this.terms.slice(start, end);
      return new Terms(terms, this.world, this.refText, this.refTerms);
    },
    index: function index() {
      var parent = this.parentTerms;
      var first = this.terms[0];

      if (!parent || !first) {
        return null; //maybe..
      }

      for (var i = 0; i < parent.terms.length; i++) {
        if (first === parent.terms[i]) {
          return i;
        }
      }

      return null;
    },
    termIndex: function termIndex() {
      var first = this.terms[0];
      var ref = this.refText || this;

      if (!ref || !first) {
        return null; //maybe..
      }

      var n = 0;

      for (var i = 0; i < ref.list.length; i++) {
        var ts = ref.list[i];

        for (var o = 0; o < ts.terms.length; o++) {
          if (ts.terms[o] === first) {
            return n;
          }

          n += 1;
        }
      }

      return n;
    },
    //number of characters in this match
    chars: function chars() {
      return this.terms.reduce(function (i, t) {
        i += t.whitespace.before.length;
        i += t.text.length;
        i += t.whitespace.after.length;
        return i;
      }, 0);
    },
    //just .length
    wordCount: function wordCount() {
      return this.terms.length;
    },

    /** punctuation */
    setPunctuation: function setPunctuation(punct) {
      var last = this.terms[this.terms.length - 1];
      last.setPunctuation(punct);
    },
    getPunctuation: function getPunctuation() {
      var lastTerm = this.last().terms[0];

      if (!lastTerm) {
        return '';
      }

      return lastTerm.getPunctuation() || '';
    },
    //this has term-order logic, so has to be here
    toCamelCase: function toCamelCase() {
      this.toTitleCase();
      this.terms.forEach(function (t, i) {
        if (i !== 0) {
          t.whitespace.before = '';
        }

        t.whitespace.after = '';
      });
      this.tag('#CamelCase', 'toCamelCase');
      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = miscMethods;

},{"../../tagger":95}],183:[function(_dereq_,module,exports){
'use strict';

var fns = _dereq_('../paths').fns;

var methods = {
  text: function text(ts) {
    return ts.terms.reduce(function (str, t) {
      str += t.out('text');
      return str;
    }, '');
  },
  //like 'text', but no leading/trailing whitespace
  match: function match(ts) {
    var str = '';
    var len = ts.terms.length;

    for (var i = 0; i < len; i++) {
      if (i > 0) {
        str += ts.terms[i].whitespace.before;
      }

      str += ts.terms[i].text.replace(/[,.?!]$/, ''); //remove comma

      if (i < len - 1) {
        str += ts.terms[i].whitespace.after;
      }
    }

    return str;
  },
  normal: function normal(ts) {
    var terms = ts.terms.filter(function (t) {
      return t.text;
    });
    terms = terms.map(function (t) {
      return t.normal; //+ punct;
    });
    return terms.join(' ');
  },
  grid: function grid(ts) {
    var str = '  ';
    str += ts.terms.reduce(function (s, t) {
      s += fns.leftPad(t.text, 11);
      return s;
    }, '');
    return str + '\n\n';
  },
  color: function color(ts) {
    return ts.terms.reduce(function (s, t) {
      s += fns.printTerm(t);
      return s;
    }, '');
  },
  csv: function csv(ts) {
    return ts.terms.map(function (t) {
      return t.normal.replace(/,/g, '');
    }).join(',');
  },
  newlines: function newlines(ts) {
    return ts.terms.reduce(function (str, t) {
      str += t.out('text').replace(/\n/g, ' ');
      return str;
    }, '').replace(/^\s/, '');
  },

  /** no punctuation, fancy business **/
  root: function root(ts) {
    return ts.terms.map(function (t) {
      return t.silent_term || t.root;
    }).join(' ').toLowerCase();
  },
  html: function html(ts) {
    return ts.terms.map(function (t) {
      return t.render.html();
    }).join(' ');
  },
  debug: function debug(ts) {
    ts.terms.forEach(function (t) {
      t.out('debug');
    });
  },
  custom: function custom(ts, obj) {
    return ts.terms.map(function (t) {
      return Object.keys(obj).reduce(function (h, k) {
        if (obj[k] && t[k]) {
          if (typeof t[k] === 'function') {
            h[k] = t[k]();
          } else {
            h[k] = t[k];
          }
        }

        return h;
      }, {});
    });
  }
};
methods.plaintext = methods.text;
methods.normalize = methods.normal;
methods.normalized = methods.normal;
methods.colors = methods.color;
methods.tags = methods.terms;

var renderMethods = function renderMethods(Terms) {
  Terms.prototype.out = function (fn) {
    if (typeof fn === 'string') {
      if (methods[fn]) {
        return methods[fn](this);
      }
    } else if (fns.isObject(fn) === true) {
      //support .out({})
      return methods.custom(this, fn);
    }

    return methods.text(this);
  }; //check method


  Terms.prototype.debug = function () {
    return methods.debug(this);
  };

  return Terms;
};

module.exports = renderMethods;

},{"../paths":189}],184:[function(_dereq_,module,exports){
'use strict';

var mutate = _dereq_('../mutate');

var replaceMethods = function replaceMethods(Terms) {
  var methods = {
    /**swap this for that */
    replace: function replace(str1, str2, keepTags) {
      //in this form, we 'replaceWith'
      if (str2 === undefined) {
        return this.replaceWith(str1, keepTags);
      }

      this.match(str1).replaceWith(str2, keepTags);
      return this;
    },

    /**swap this for that */
    replaceWith: function replaceWith(str, keepTags) {
      var newTs = Terms.fromString(str, this.world);
      newTs.tagger(); //if instructed, apply old tags to new terms

      if (keepTags) {
        this.terms.forEach(function (t, i) {
          var tags = Object.keys(t.tags);

          if (newTs.terms[i] !== undefined) {
            tags.forEach(function (tg) {
              return newTs.terms[i].tag(tg, 'from-memory');
            });
          }
        });
      } //keep its ending punctation..


      var endPunct = this.getPunctuation(); //grab the insertion place..

      var index = this.index();
      this.parentTerms = mutate.deleteThese(this.parentTerms, this);
      this.parentTerms.terms = mutate.insertAt(this.parentTerms.terms, index, newTs);
      this.terms = newTs.terms; //add-in the punctuation at the end..

      if (this.terms.length > 0) {
        this.terms[this.terms.length - 1].whitespace.after += endPunct;
      }

      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = replaceMethods;

},{"../mutate":188}],185:[function(_dereq_,module,exports){
'use strict'; //break apart a termlist into (before, match after)

var breakUpHere = function breakUpHere(terms, ts) {
  var firstTerm = ts.terms[0];
  var len = ts.terms.length;

  for (var i = 0; i < terms.length; i++) {
    if (terms[i] === firstTerm) {
      return {
        before: terms.slice(0, i),
        match: terms.slice(i, i + len),
        after: terms.slice(i + len, terms.length)
      };
    }
  }

  return {
    after: terms
  };
};

var splitMethods = function splitMethods(Terms) {
  var methods = {
    /** at the end of the match, split the terms **/
    splitAfter: function splitAfter(reg, verbose) {
      var _this = this;

      var ms = this.match(reg, verbose); //Array[ts]

      var termArr = this.terms;
      var all = [];
      ms.list.forEach(function (lookFor) {
        var section = breakUpHere(termArr, lookFor);

        if (section.before && section.match) {
          all.push(section.before.concat(section.match));
        }

        termArr = section.after;
      }); //add the remaining

      if (termArr.length) {
        all.push(termArr);
      } //make them termlists


      all = all.map(function (ts) {
        var parent = _this.refText; //|| this;

        return new Terms(ts, _this.world, parent, _this.refTerms);
      });
      return all;
    },

    /** return only before & after  the match**/
    splitOn: function splitOn(reg, verbose) {
      var _this2 = this;

      var ms = this.match(reg, verbose); //Array[ts]

      var termArr = this.terms;
      var all = [];
      ms.list.forEach(function (lookFor) {
        var section = breakUpHere(termArr, lookFor);

        if (section.before) {
          all.push(section.before);
        }

        if (section.match) {
          all.push(section.match);
        }

        termArr = section.after;
      }); //add the remaining

      if (termArr.length) {
        all.push(termArr);
      } //make them termlists


      all = all.filter(function (a) {
        return a && a.length;
      });
      all = all.map(function (ts) {
        return new Terms(ts, ts.world, ts.refText, _this2.refTerms);
      });
      return all;
    },

    /** at the start of the match, split the terms**/
    splitBefore: function splitBefore(reg, verbose) {
      var _this3 = this;

      var ms = this.match(reg, verbose); //Array[ts]

      var termArr = this.terms;
      var all = [];
      ms.list.forEach(function (lookFor) {
        var section = breakUpHere(termArr, lookFor);

        if (section.before) {
          all.push(section.before);
        }

        if (section.match) {
          all.push(section.match);
        }

        termArr = section.after;
      }); //add the remaining

      if (termArr.length) {
        all.push(termArr);
      } //cleanup-step: merge all (middle) matches with the next one


      for (var i = 0; i < all.length; i++) {
        for (var o = 0; o < ms.length; o++) {
          if (ms.list[o].terms[0] === all[i][0]) {
            if (all[i + 1]) {
              all[i] = all[i].concat(all[i + 1]);
              all[i + 1] = [];
            }
          }
        }
      } //make them termlists


      all = all.filter(function (a) {
        return a && a.length;
      });
      all = all.map(function (ts) {
        return new Terms(ts, ts.world, ts.refText, _this3.refTerms);
      });
      return all;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = splitMethods;
exports = splitMethods;

},{}],186:[function(_dereq_,module,exports){
'use strict';

var addMethod = function addMethod(Terms) {
  var methods = {
    tag: function tag(_tag, reason) {
      var tags = [];

      if (typeof _tag === 'string') {
        tags = _tag.split(' ');
      } //fancy version:


      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach(function (t, i) {
          t.tag(tags[i], reason);
        });
        return this;
      } //non-fancy version:


      this.terms.forEach(function (t) {
        t.tag(_tag, reason);
      });
      return this;
    },
    unTag: function unTag(tag, reason) {
      var tags = [];

      if (typeof tag === 'string') {
        tags = tag.split(' ');
      } //fancy version:


      if (tags.length > 1) {
        //do indepenent tags for each term:
        this.terms.forEach(function (t, i) {
          t.unTag(tags[i], reason);
        });
        return this;
      } //non-fancy version:


      this.terms.forEach(function (t) {
        t.unTag(tag, reason);
      });
      return this;
    },
    //which terms are consistent with this tag
    canBe: function canBe(tag) {
      var terms = this.terms.filter(function (t) {
        return t.canBe(tag);
      });
      return new Terms(terms, this.world, this.refText, this.refTerms);
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = addMethod;

},{}],187:[function(_dereq_,module,exports){
'use strict';

var transforms = function transforms(Terms) {
  var methods = {
    clone: function clone() {
      // this.world = this.world.clone();
      var terms = this.terms.map(function (t) {
        return t.clone();
      });
      return new Terms(terms, this.world, this.refText, null); //, this.refTerms
    },
    hyphenate: function hyphenate() {
      var _this = this;

      this.terms.forEach(function (t, i) {
        if (i !== _this.terms.length - 1) {
          t.whitespace.after = '-';
        }

        if (i !== 0) {
          t.whitespace.before = '';
        }
      });
      return this;
    },
    dehyphenate: function dehyphenate() {
      this.terms.forEach(function (t) {
        if (t.whitespace.after === '-') {
          t.whitespace.after = ' ';
        }
      });
      return this;
    },
    trim: function trim() {
      if (this.length <= 0) {
        return this;
      }

      this.terms[0].whitespace.before = '';
      this.terms[this.terms.length - 1].whitespace.after = '';
      return this;
    }
  }; //hook them into result.proto

  Object.keys(methods).forEach(function (k) {
    Terms.prototype[k] = methods[k];
  });
  return Terms;
};

module.exports = transforms;

},{}],188:[function(_dereq_,module,exports){
'use strict'; //

var getTerms = function getTerms(needle) {
  var arr = [];

  if (needle.isA === 'Terms') {
    arr = needle.terms;
  } else if (needle.isA === 'Text') {
    arr = needle.flatten().list[0].terms;
  } else if (needle.isA === 'Term') {
    arr = [needle];
  }

  return arr;
}; //remove them


exports.deleteThese = function (source, needle) {
  var arr = getTerms(needle);
  source.terms = source.terms.filter(function (t) {
    for (var i = 0; i < arr.length; i++) {
      if (t === arr[i]) {
        return false;
      }
    }

    return true;
  });
  return source;
}; //add them


exports.insertAt = function (terms, i, needle) {
  needle.dirty = true;
  var arr = getTerms(needle); //handle whitespace

  if (i > 0 && arr[0] && !arr[0].whitespace.before) {
    arr[0].whitespace.before = ' ';
  } //gnarly splice
  //-( basically  - terms.splice(i+1, 0, arr) )


  Array.prototype.splice.apply(terms, [i, 0].concat(arr));
  return terms;
};

},{}],189:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  fns: _dereq_('../fns'),
  Term: _dereq_('../term')
};

},{"../fns":3,"../term":143}],190:[function(_dereq_,module,exports){
'use strict';

var Text = _dereq_('./index');

var tokenize = _dereq_('./tokenize');

var paths = _dereq_('./paths');

var Terms = paths.Terms;
var fns = paths.fns;

var fromString = function fromString(str, world) {
  var sentences = []; //allow pre-tokenized input

  if (fns.isArray(str)) {
    sentences = str;
  } else {
    str = fns.ensureString(str);
    sentences = tokenize(str);
  }

  var list = sentences.map(function (s) {
    return Terms.fromString(s, world);
  });
  var doc = new Text(list, world); //give each ts a ref to the result

  doc.list.forEach(function (ts) {
    ts.refText = doc;
  });
  return doc;
};

module.exports = fromString;

},{"./index":192,"./paths":205,"./tokenize":207}],191:[function(_dereq_,module,exports){
"use strict";

module.exports = {
  /** did it find anything? */
  found: function found() {
    return this.list.length > 0;
  },

  /** just a handy wrap*/
  parent: function parent() {
    return this.original || this;
  },

  /** how many Texts are there?*/
  length: function length() {
    return this.list.length;
  },

  /** nicer than constructor.call.name or whatever*/
  isA: function isA() {
    return 'Text';
  },

  /** the whitespace before and after this match*/
  whitespace: function whitespace() {
    var _this = this;

    return {
      before: function before(str) {
        _this.list.forEach(function (ts) {
          ts.whitespace.before(str);
        });

        return _this;
      },
      after: function after(str) {
        _this.list.forEach(function (ts) {
          ts.whitespace.after(str);
        });

        return _this;
      }
    };
  }
};

},{}],192:[function(_dereq_,module,exports){
'use strict'; //a Text is an array of termLists

var getters = _dereq_('./getters');

function Text(arr, world, original) {
  this.list = arr || [];

  if (typeof world === 'function') {
    world = world();
  }

  this.world = function () {
    return world;
  };

  this.original = original; //apply getters

  var keys = Object.keys(getters);

  for (var i = 0; i < keys.length; i++) {
    Object.defineProperty(this, keys[i], {
      get: getters[keys[i]]
    });
  }
}

module.exports = Text;

Text.addMethods = function (cl, obj) {
  var fns = Object.keys(obj);

  for (var i = 0; i < fns.length; i++) {
    cl.prototype[fns[i]] = obj[fns[i]];
  }
}; //make a sub-class of this class easily


Text.makeSubset = function (methods, find) {
  var Subset = function Subset(arr, world, original) {
    Text.call(this, arr, world, original);
  }; //inheritance


  Subset.prototype = Object.create(Text.prototype);
  Text.addMethods(Subset, methods);
  Subset.find = find;
  return Subset;
}; //apply instance methods


_dereq_('./methods/misc')(Text);

_dereq_('./methods/loops')(Text);

_dereq_('./methods/match')(Text);

_dereq_('./methods/out')(Text);

_dereq_('./methods/sort')(Text);

_dereq_('./methods/split')(Text);

_dereq_('./methods/normalize')(Text);

_dereq_('./subsets')(Text); //apply subset methods


var subset = {
  acronyms: _dereq_('../subset/acronyms'),
  adjectives: _dereq_('../subset/adjectives'),
  adverbs: _dereq_('../subset/adverbs'),
  contractions: _dereq_('../subset/contractions'),
  dates: _dereq_('../subset/dates'),
  nouns: _dereq_('../subset/nouns'),
  people: _dereq_('../subset/people'),
  sentences: _dereq_('../subset/sentences'),
  terms: _dereq_('../subset/terms'),
  possessives: _dereq_('../subset/possessives'),
  values: _dereq_('../subset/values'),
  verbs: _dereq_('../subset/verbs'),
  ngrams: _dereq_('../subset/ngrams'),
  startGrams: _dereq_('../subset/ngrams/startGrams'),
  endGrams: _dereq_('../subset/ngrams/endGrams')
};
Object.keys(subset).forEach(function (k) {
  Text.prototype[k] = function (num, arg) {
    var sub = subset[k];
    var m = sub.find(this, num, arg);
    return new subset[k](m.list, this.world, this.parent);
  };
}); //aliases

Text.prototype.words = Text.prototype.terms;

},{"../subset/acronyms":9,"../subset/adjectives":10,"../subset/adverbs":17,"../subset/contractions":23,"../subset/dates":25,"../subset/ngrams":35,"../subset/ngrams/endGrams":32,"../subset/ngrams/startGrams":36,"../subset/nouns":38,"../subset/people":49,"../subset/possessives":51,"../subset/sentences":52,"../subset/terms":58,"../subset/values":65,"../subset/verbs":75,"./getters":191,"./methods/loops":193,"./methods/match":194,"./methods/misc":195,"./methods/normalize":196,"./methods/out":197,"./methods/sort":202,"./methods/split":204,"./subsets":206}],193:[function(_dereq_,module,exports){
'use strict'; //this methods are simply loops around each termList object.

var methods = ['toTitleCase', 'toUpperCase', 'toLowerCase', 'toCamelCase', 'hyphenate', 'dehyphenate', 'trim', 'insertBefore', 'insertAfter', 'insertAt', 'replace', 'replaceWith', 'delete', 'lump', 'tagger', // 'tag',
'unTag'];

var addMethods = function addMethods(Text) {
  methods.forEach(function (k) {
    Text.prototype[k] = function () {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i][k].apply(this.list[i], arguments);
      }

      return this;
    };
  }); //add an extra optimisation for tag method

  Text.prototype.tag = function () {
    //fail-fast optimisation
    if (this.list.length === 0) {
      return this;
    }

    for (var i = 0; i < this.list.length; i++) {
      this.list[i].tag.apply(this.list[i], arguments);
    }

    return this;
  };
};

module.exports = addMethods;

},{}],194:[function(_dereq_,module,exports){
'use strict';

var syntaxParse = _dereq_('../../../terms/match/lib/syntax');

var Terms = _dereq_('../../../terms');

var splitMethods = function splitMethods(Text) {
  //support "#Noun word" regex-matches
  var matchReg = function matchReg(r, reg, verbose) {
    //parse the 'regex' into some json
    var list = [];
    reg = syntaxParse(reg);
    r.list.forEach(function (ts) {
      //an array of arrays
      var matches = ts.match(reg, verbose);
      matches.list.forEach(function (ms) {
        list.push(ms);
      });
    });
    var parent = r.parent || r;
    return new Text(list, r.world(), parent);
  }; //support {word:true} whitelist


  var matchObj = function matchObj(r, obj) {
    var matches = [];
    r.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        if (obj.hasOwnProperty(t.normal) === true) {
          matches.push(t);
        }
      });
    });
    matches = matches.map(function (t) {
      return new Terms([t], r.world(), r, t.parentTerms);
    });
    return new Text(matches, r.world(), r.parent);
  }; //support [word, word] whitelist


  var matchArr = function matchArr(r, arr) {
    //its faster this way
    var obj = arr.reduce(function (h, a) {
      h[a] = true;
      return h;
    }, {});
    return matchObj(r, obj);
  }; //take a Text object as a match


  var matchTextObj = function matchTextObj(r, m) {
    var arr = m.out('array'); //i guess this is fine..

    return matchArr(r, arr);
  };

  var methods = {
    /** do a regex-like search through terms and return a subset */
    match: function match(reg, verbose) {
      //fail-fast
      if (this.list.length === 0 || reg === undefined || reg === null) {
        var parent = this.parent || this;
        return new Text([], this.world(), parent);
      } //match "#Noun word" regex


      if (typeof reg === 'string' || typeof reg === 'number') {
        return matchReg(this, reg, verbose);
      } //match [word, word] whitelist


      var type = Object.prototype.toString.call(reg);

      if (type === '[object Array]') {
        return matchArr(this, reg);
      } //match {word:true} whitelist


      if (type === '[object Object]') {
        if (reg.isA === 'Text') {
          return matchTextObj(this, reg);
        } else {
          return matchObj(this, reg);
        }
      }

      return this;
    },
    not: function not(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        var found = ts.not(reg, verbose);
        list = list.concat(found.list);
      });
      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },
    if: function _if(reg) {
      var list = [];

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          list.push(this.list[i]);
        }
      }

      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },
    ifNo: function ifNo(reg) {
      var list = [];

      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === false) {
          list.push(this.list[i]);
        }
      }

      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },
    has: function has(reg) {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].has(reg) === true) {
          return true;
        }
      }

      return false;
    },

    /**find a match, and return everything infront of it*/
    before: function before(reg) {
      var list = [];

      for (var i = 0; i < this.list.length; i++) {
        var m = this.list[i].matchOne(reg);

        if (m) {
          var index = m[0].index();
          var found = this.list[i].slice(0, index);

          if (found.length > 0) {
            list.push(found);
          }
        }
      }

      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    },

    /**find a match, and return everything after of it*/
    after: function after(reg) {
      var list = [];

      for (var i = 0; i < this.list.length; i++) {
        var m = this.list[i].matchOne(reg);

        if (m) {
          var lastTerm = m[m.length - 1];
          var index = lastTerm.index();
          var found = this.list[i].slice(index + 1, this.list[i].length);

          if (found.length > 0) {
            list.push(found);
          }
        }
      }

      var parent = this.parent || this;
      return new Text(list, this.world(), parent);
    }
  }; //alias 'and'

  methods.and = methods.match;
  methods.notIf = methods.ifNo;
  methods.only = methods.if;
  methods.onlyIf = methods.if; //hook them into result.proto

  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{"../../../terms":165,"../../../terms/match/lib/syntax":175}],195:[function(_dereq_,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Terms = _dereq_('../../terms');

var miscMethods = function miscMethods(Text) {
  var methods = {
    all: function all() {
      return this.parent;
    },
    index: function index() {
      return this.list.map(function (ts) {
        return ts.index();
      });
    },
    wordCount: function wordCount() {
      return this.terms().length;
    },
    data: function data() {
      return this.list.map(function (ts) {
        return ts.data();
      });
    },

    /* javascript array loop-wrappers */
    map: function map(fn) {
      var _this = this;

      return this.list.map(function (ts, i) {
        var text = new Text([ts], _this.world);
        return fn(text, i);
      });
    },
    forEach: function forEach(fn) {
      var _this2 = this;

      this.list.forEach(function (ts, i) {
        var text = new Text([ts], _this2.world);
        fn(text, i);
      });
      return this;
    },
    filter: function filter(fn) {
      var _this3 = this;

      var list = this.list.filter(function (ts, i) {
        var text = new Text([ts], _this3.world);
        return fn(text, i);
      });
      return new Text(list, this.world);
    },
    reduce: function reduce(fn, h) {
      var _this4 = this;

      return this.list.reduce(function (_h, ts) {
        var text = new Text([ts], _this4.world);
        return fn(_h, text);
      }, h);
    },
    find: function find(fn) {
      for (var i = 0; i < this.list.length; i++) {
        var ts = this.list[i];
        var text = new Text([ts], this.world);

        if (fn(text)) {
          return text;
        }
      }

      return undefined;
    },

    /**copy data properly so later transformations will have no effect*/
    clone: function clone() {
      var list = this.list.map(function (ts) {
        return ts.clone();
      });
      return new Text(list, this.world); //this.lexicon, this.parent
    },

    /** get the nth term of each result*/
    term: function term(n) {
      var _this5 = this;

      var list = this.list.map(function (ts) {
        var arr = [];
        var el = ts.terms[n];

        if (el) {
          arr = [el];
        }

        return new Terms(arr, _this5.world, _this5.refText, _this5.refTerms);
      });
      return new Text(list, this.world, this.parent);
    },
    firstTerm: function firstTerm() {
      return this.match('^.');
    },
    lastTerm: function lastTerm() {
      return this.match('.$');
    },

    /** grab a subset of the results*/
    slice: function slice(start, end) {
      this.list = this.list.slice(start, end);
      return this;
    },

    /** use only the nth result*/
    get: function get(n) {
      //return an empty result
      if (!n && n !== 0 || !this.list[n]) {
        return new Text([], this.world, this.parent);
      }

      var ts = this.list[n];
      return new Text([ts], this.world, this.parent);
    },

    /**use only the first result */
    first: function first(n) {
      if (!n && n !== 0) {
        return this.get(0);
      }

      return new Text(this.list.slice(0, n), this.world, this.parent);
    },

    /**use only the last result */
    last: function last(n) {
      if (!n && n !== 0) {
        return this.get(this.list.length - 1);
      }

      var end = this.list.length;
      var start = end - n;
      return new Text(this.list.slice(start, end), this.world, this.parent);
    },
    concat: function concat() {
      //any number of params
      for (var i = 0; i < arguments.length; i++) {
        var p = arguments[i];

        if (_typeof(p) === 'object') {
          //Text()
          if (p.isA === 'Text' && p.list) {
            this.list = this.list.concat(p.list);
          } //Terms()


          if (p.isA === 'Terms') {
            this.list.push(p);
          }
        }
      }

      return this;
    },

    /** make it into one sentence/termlist */
    flatten: function flatten() {
      var terms = [];
      this.list.forEach(function (ts) {
        terms = terms.concat(ts.terms);
      }); //dont create an empty ts

      if (!terms.length) {
        return new Text(null, this.world, this.parent);
      }

      var ts = new Terms(terms, this.world, this, null);
      return new Text([ts], this.world, this.parent);
    },

    /** see if these terms can become this tag*/
    canBe: function canBe(tag) {
      this.list.forEach(function (ts) {
        ts.terms = ts.terms.filter(function (t) {
          return t.canBe(tag);
        });
      });
      return this;
    },

    /** sample part of the array */
    random: function random(n) {
      n = n || 1;
      var r = Math.floor(Math.random() * this.list.length);
      var arr = this.list.slice(r, r + n); //if we're off the end, add some from the start

      if (arr.length < n) {
        var diff = n - arr.length;

        if (diff > r) {
          diff = r; //prevent it from going full-around
        }

        arr = arr.concat(this.list.slice(0, diff));
      }

      return new Text(arr, this.world, this.parent);
    },
    setPunctuation: function setPunctuation(punct) {
      this.list.forEach(function (ts) {
        return ts.setPunctuation(punct);
      });
      return this;
    },
    getPunctuation: function getPunctuation(num) {
      //support num param
      if (num || num === 0) {
        if (!this.list[num]) {
          return '';
        }

        return this.list[num].getPunctuation();
      }

      return this.list.map(function (ts) {
        return ts.getPunctuation();
      });
    },
    //jquery-like api aliases
    offset: function offset() {
      return this.out('offset');
    },
    text: function text() {
      return this.out('text');
    }
  }; //aliases

  methods.eq = methods.get;
  methods.join = methods.flatten;
  Text.addMethods(Text, methods);
};

module.exports = miscMethods;

},{"../../terms":165}],196:[function(_dereq_,module,exports){
'use strict';

var _unicode = _dereq_('../../term/methods/normalize/unicode'); //


var defaults = {
  whitespace: true,
  case: true,
  numbers: true,
  punctuation: true,
  unicode: true,
  contractions: true,
  acronyms: true,
  parentheses: false,
  possessives: false,
  plurals: false,
  verbs: false,
  honorifics: false
};
var methods = {
  /** make only one space between each word */
  whitespace: function whitespace(r) {
    r.terms().list.forEach(function (ts, i) {
      var t = ts.terms[0];

      if (i > 0 && !t.silent_term) {
        t.whitespace.before = ' ';
      } else if (i === 0) {
        t.whitespace.before = '';
      }

      t.whitespace.after = ''; //add normalized quotation symbols

      if (t.tags.StartQuotation === true) {
        t.whitespace.before += '"';
      }

      if (t.tags.EndQuotation === true) {
        t.whitespace.after = '"' + t.whitespace.after;
      }
    });
    return r;
  },

  /** make first-word titlecase, and people, places titlecase */
  case: function _case(r) {
    r.list.forEach(function (ts) {
      ts.terms.forEach(function (t, i) {
        if (i === 0 || t.tags.Person || t.tags.Place || t.tags.Organization) {// ts.toTitleCase() //fixme: too weird here.
        } else {
          ts.toLowerCase();
        }
      });
    });
    return r;
  },

  /** turn 'five' to 5, and 'fifth' to 5th*/
  numbers: function numbers(r) {
    r.values().toNumber();
    return r;
  },

  /** remove commas, semicolons - but keep sentence-ending punctuation*/
  punctuation: function punctuation(r) {
    r.list.forEach(function (ts) {
      if (!ts.terms.length) {
        return;
      } //first-term punctuation


      ts.terms[0]._text = ts.terms[0]._text.replace(/^¿/, ''); //middle-terms

      for (var i = 0; i < ts.terms.length - 1; i++) {
        var t = ts.terms[i]; //remove non-sentence-ending stuff

        t._text = t._text.replace(/[:;,]$/, '');
      } //replace !!! with !


      var last = ts.terms[ts.terms.length - 1];
      last._text = last._text.replace(/\.+$/, '.');
      last._text = last._text.replace(/!+$/, '!');
      last._text = last._text.replace(/\?+!?$/, '?'); //support '?!'
    });
    return r;
  },
  // turn Björk into Bjork
  unicode: function unicode(r) {
    r.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        t.text = _unicode(t.text);
      });
    });
    return r;
  },
  //expand all contractions
  contractions: function contractions(r) {
    r.contractions().expand();
    return r;
  },
  //remove periods from acronyms, like F.B.I.
  acronyms: function acronyms(r) {
    r.acronyms().stripPeriods();
    return r;
  },
  //turn david's → david
  possessives: function possessives(r) {
    r.possessives().strip();
    return r;
  },
  //strip out parts in (brackets)
  parentheses: function parentheses(r) {
    r.parentheses().delete();
    return r;
  },
  //turn sandwhiches → sandwhich
  plurals: function plurals(r) {
    //todo:this has a non-cooperative bug
    r.nouns().toSingular();
    return r;
  },
  //turn ate → eat
  verbs: function verbs(r) {
    r.verbs().toInfinitive();
    return r;
  },
  //turn 'Sergeant Pepper to 'Pepper'
  honorifics: function honorifics(r) {
    r = r.delete('#Honorific');
    return r;
  }
};

var addMethods = function addMethods(Text) {
  Text.prototype.normalize = function (options) {
    var doc = this; //set defaults

    options = options || {};
    var obj = Object.assign({}, defaults);
    var keys = Object.keys(options);
    keys.forEach(function (k) {
      obj[k] = options[k];
    }); //do each type of normalization

    Object.keys(obj).forEach(function (fn) {
      if (obj[fn] && methods[fn] !== undefined) {
        doc = methods[fn](doc);
      }
    });
    return doc;
  };
};

module.exports = addMethods;

},{"../../term/methods/normalize/unicode":151}],197:[function(_dereq_,module,exports){
'use strict';

var _topk = _dereq_('./topk');

var offset = _dereq_('./offset');

var termIndex = _dereq_('./indexes');

var fns = _dereq_('../paths').fns;

var methods = {
  text: function text(r) {
    return r.list.reduce(function (str, ts) {
      str += ts.out('text');
      return str;
    }, '');
  },
  match: function match(r) {
    return r.list.reduce(function (str, ts) {
      str += ts.out('match');
      return str;
    }, '');
  },
  normal: function normal(r) {
    return r.list.map(function (ts) {
      var str = ts.out('normal');
      var last = ts.last();

      if (last) {
        var punct = ts.getPunctuation();

        if (punct === '.' || punct === '!' || punct === '?') {
          str += punct;
        }
      }

      return str;
    }).join(' ');
  },
  root: function root(r) {
    return r.list.map(function (ts) {
      return ts.out('root');
    }).join(' ');
  },

  /** output where in the original output string they are*/
  offsets: function offsets(r) {
    return offset(r);
  },

  /** output the tokenized location of this match*/
  index: function index(r) {
    return termIndex(r);
  },
  grid: function grid(r) {
    return r.list.reduce(function (str, ts) {
      str += ts.out('grid');
      return str;
    }, '');
  },
  color: function color(r) {
    return r.list.reduce(function (str, ts) {
      str += ts.out('color');
      return str;
    }, '');
  },
  array: function array(r) {
    return r.list.map(function (ts) {
      return ts.out('normal');
    });
  },
  csv: function csv(r) {
    return r.list.map(function (ts) {
      return ts.out('csv');
    }).join('\n');
  },
  newlines: function newlines(r) {
    return r.list.map(function (ts) {
      return ts.out('newlines');
    }).join('\n');
  },
  json: function json(r) {
    return r.list.reduce(function (arr, ts) {
      var terms = ts.terms.map(function (t) {
        return {
          text: t.text,
          normal: t.normal,
          tags: t.tag
        };
      });
      arr.push(terms);
      return arr;
    }, []);
  },
  html: function html(r) {
    var html = r.list.reduce(function (str, ts) {
      var sentence = ts.terms.reduce(function (sen, t) {
        sen += '\n    ' + t.out('html');
        return sen;
      }, '');
      return str += '\n  <span>' + sentence + '\n  </span>';
    }, '');
    return '<span> ' + html + '\n</span>';
  },
  terms: function terms(r) {
    var arr = [];
    r.list.forEach(function (ts) {
      ts.terms.forEach(function (t) {
        arr.push({
          text: t.text,
          normal: t.normal,
          tags: Object.keys(t.tags)
        });
      });
    });
    return arr;
  },
  debug: function debug(r) {
    console.log('====');
    r.list.forEach(function (ts) {
      console.log('   --');
      ts.debug();
    });
    return r;
  },
  topk: function topk(r) {
    return _topk(r);
  },
  custom: function custom(r, obj) {
    return r.list.map(function (ts) {
      return ts.out(obj);
    });
  }
};
methods.plaintext = methods.text;
methods.normalized = methods.normal;
methods.colors = methods.color;
methods.tags = methods.terms;
methods.offset = methods.offsets;
methods.idexes = methods.index;
methods.frequency = methods.topk;
methods.freq = methods.topk;
methods.arr = methods.array;

var addMethods = function addMethods(Text) {
  Text.prototype.out = function (fn) {
    if (typeof fn === 'string') {
      if (methods[fn]) {
        return methods[fn](this);
      }
    } else if (fns.isObject(fn) === true) {
      //support .out({})
      return methods.custom(this, fn);
    }

    return methods.text(this);
  };

  Text.prototype.debug = function () {
    return methods.debug(this);
  };

  return Text;
};

module.exports = addMethods;

},{"../paths":201,"./indexes":198,"./offset":199,"./topk":200}],198:[function(_dereq_,module,exports){
'use strict'; //find where in the original text this match is found, by term-counts

var termIndex = function termIndex(r) {
  var result = []; //find the ones we want

  var want = {};
  r.terms().list.forEach(function (ts) {
    want[ts.terms[0].uid] = true;
  }); //find their counts

  var sum = 0;
  var parent = r.all();
  parent.list.forEach(function (ts, s) {
    ts.terms.forEach(function (t, i) {
      if (want[t.uid] !== undefined) {
        result.push({
          text: t.text,
          normal: t.normal,
          term: sum,
          sentence: s,
          sentenceTerm: i
        });
      }

      sum += 1;
    });
  });
  return result;
};

module.exports = termIndex;

},{}],199:[function(_dereq_,module,exports){
'use strict';
/** say where in the original output string they are found*/

var findOffset = function findOffset(parent, term) {
  var sum = 0;

  for (var i = 0; i < parent.list.length; i++) {
    for (var o = 0; o < parent.list[i].terms.length; o++) {
      var t = parent.list[i].terms[o];

      if (t.uid === term.uid) {
        return sum;
      } else {
        sum += t.whitespace.before.length + t._text.length + t.whitespace.after.length;
      }
    }
  }

  return null;
}; //like 'text' for the middle, and 'normal' for the start+ends
//used for highlighting the actual words, without whitespace+punctuation


var trimEnds = function trimEnds(ts) {
  var terms = ts.terms;

  if (terms.length <= 2) {
    return ts.out('normal');
  } //the start


  var str = terms[0].normal; //the middle

  for (var i = 1; i < terms.length - 1; i++) {
    var t = terms[i];
    str += t.whitespace.before + t.text + t.whitespace.after;
  } //the end


  str += ' ' + terms[ts.terms.length - 1].normal;
  return str;
}; //map over all-dem-results


var allOffset = function allOffset(r) {
  var parent = r.all();
  return r.list.map(function (ts) {
    var words = [];

    for (var i = 0; i < ts.terms.length; i++) {
      words.push(ts.terms[i].normal);
    }

    var nrml = trimEnds(ts);
    var txt = ts.out('text');
    var startAt = findOffset(parent, ts.terms[0]);
    var beforeWord = ts.terms[0].whitespace.before;
    var wordStart = startAt + beforeWord.length;
    return {
      text: txt,
      normal: ts.out('normal'),
      //where we begin
      offset: startAt,
      length: txt.length,
      wordStart: wordStart,
      wordEnd: wordStart + nrml.length // wordLength: words.join(' ').length

    };
  });
};

module.exports = allOffset;

},{}],200:[function(_dereq_,module,exports){
'use strict'; //

var topk = function topk(r, n) {
  //count occurance
  var count = {};
  r.list.forEach(function (ts) {
    var str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  }); //turn into an array

  var all = [];
  Object.keys(count).forEach(function (k) {
    all.push({
      normal: k,
      count: count[k]
    });
  }); //add percentage

  all.forEach(function (o) {
    o.percent = parseFloat((o.count / r.list.length * 100).toFixed(2));
  }); //sort by freq

  all = all.sort(function (a, b) {
    if (a.count > b.count) {
      return -1;
    }

    return 1;
  });

  if (n) {
    all = all.splice(0, n);
  }

  return all;
};

module.exports = topk;

},{}],201:[function(_dereq_,module,exports){
"use strict";

module.exports = _dereq_('../paths');

},{"../paths":205}],202:[function(_dereq_,module,exports){
'use strict';

var sorter = _dereq_('./methods');

var addMethods = function addMethods(Text) {
  var fns = {
    /**reorder result.list alphabetically */
    sort: function sort(method) {
      //default sort
      method = method || 'alphabetical';
      method = method.toLowerCase();

      if (!method || method === 'alpha' || method === 'alphabetical') {
        return sorter.alpha(this, Text);
      }

      if (method === 'chron' || method === 'chronological') {
        return sorter.chron(this, Text);
      }

      if (method === 'length') {
        return sorter.lengthFn(this, Text);
      }

      if (method === 'freq' || method === 'frequency') {
        return sorter.freq(this, Text);
      }

      if (method === 'wordcount') {
        return sorter.wordCount(this, Text);
      }

      return this;
    },

    /**reverse the order of result.list */
    reverse: function reverse() {
      this.list = this.list.reverse();
      return this;
    },
    unique: function unique() {
      var obj = {};
      this.list = this.list.filter(function (ts) {
        var str = ts.out('root');

        if (obj.hasOwnProperty(str)) {
          return false;
        }

        obj[str] = true;
        return true;
      });
      return this;
    }
  }; //hook them into result.proto

  Text.addMethods(Text, fns);
  return Text;
};

module.exports = addMethods;

},{"./methods":203}],203:[function(_dereq_,module,exports){
'use strict'; //perform sort on pre-computed values

var sortEm = function sortEm(arr) {
  arr = arr.sort(function (a, b) {
    if (a.index > b.index) {
      return 1;
    }

    if (a.index === b.index) {
      return 0;
    }

    return -1;
  }); //return ts objects

  return arr.map(function (o) {
    return o.ts;
  });
}; //alphabetical sorting of a termlist array


exports.alpha = function (r) {
  r.list.sort(function (a, b) {
    //#1 performance speedup
    if (a === b) {
      return 0;
    } //#2 performance speedup


    if (a.terms[0] && b.terms[0]) {
      if (a.terms[0].root > b.terms[0].root) {
        return 1;
      }

      if (a.terms[0].root < b.terms[0].root) {
        return -1;
      }
    } //regular compare


    if (a.out('root') > b.out('root')) {
      return 1;
    }

    return -1;
  });
  return r;
}; //the order they were recieved (chronological~)


exports.chron = function (r) {
  //pre-compute indexes
  var tmp = r.list.map(function (ts) {
    return {
      ts: ts,
      index: ts.termIndex()
    };
  });
  r.list = sortEm(tmp);
  return r;
}; //shortest matches first


exports.lengthFn = function (r) {
  //pre-compute indexes
  var tmp = r.list.map(function (ts) {
    return {
      ts: ts,
      index: ts.chars()
    };
  });
  r.list = sortEm(tmp).reverse();
  return r;
}; //count the number of terms in each match


exports.wordCount = function (r) {
  //pre-compute indexes
  var tmp = r.list.map(function (ts) {
    return {
      ts: ts,
      index: ts.length
    };
  });
  r.list = sortEm(tmp);
  return r;
}; //sort by frequency (like topk)


exports.freq = function (r) {
  //get counts
  var count = {};
  r.list.forEach(function (ts) {
    var str = ts.out('root');
    count[str] = count[str] || 0;
    count[str] += 1;
  }); //pre-compute indexes

  var tmp = r.list.map(function (ts) {
    var num = count[ts.out('root')] || 0;
    return {
      ts: ts,
      index: num * -1 //quick-reverse it

    };
  });
  r.list = sortEm(tmp);
  return r;
};

},{}],204:[function(_dereq_,module,exports){
'use strict';

var splitMethods = function splitMethods(Text) {
  var methods = {
    /** turn result into two seperate results */
    splitAfter: function splitAfter(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        ts.splitAfter(reg, verbose).forEach(function (mts) {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },

    /** turn result into two seperate results */
    splitBefore: function splitBefore(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        ts.splitBefore(reg, verbose).forEach(function (mts) {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    },

    /** turn result into two seperate results */
    splitOn: function splitOn(reg, verbose) {
      var list = [];
      this.list.forEach(function (ts) {
        ts.splitOn(reg, verbose).forEach(function (mts) {
          list.push(mts);
        });
      });
      this.list = list;
      return this;
    }
  }; //hook them into result.proto

  Text.addMethods(Text, methods);
  return Text;
};

module.exports = splitMethods;

},{}],205:[function(_dereq_,module,exports){
arguments[4][201][0].apply(exports,arguments)
},{"../paths":8,"dup":201}],206:[function(_dereq_,module,exports){
'use strict';

var isQuestion = _dereq_('../subset/sentences/isQuestion');

var addSubsets = function addSubsets(Text) {
  //these subsets have no instance methods, so are simply a 'find' method.
  var subsets = {
    clauses: function clauses(n) {
      var r = this.splitAfter('#ClauseEnd');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    hashTags: function hashTags(n) {
      var r = this.match('#HashTag').terms();

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    organizations: function organizations(n) {
      var r = this.splitAfter('#Comma');
      r = r.match('#Organization+');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    phoneNumbers: function phoneNumbers(n) {
      var r = this.splitAfter('#Comma');
      r = r.match('#PhoneNumber+');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    places: function places(n) {
      var r = this.splitAfter('#Comma');
      r = r.match('#Place+');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    quotations: function quotations(n) {
      var matches = this.match('#Quotation+');
      var found = [];
      matches.list.forEach(function (ts) {
        var open = 0;
        var start = null; //handle nested quotes - 'startQuote->startQuote->endQuote->endQuote'

        ts.terms.forEach(function (t, i) {
          if (t.tags.StartQuotation === true) {
            if (open === 0) {
              start = i;
            }

            open += 1;
          }

          if (open > 0 && t.tags.EndQuotation === true) {
            open -= 1;
          }

          if (open === 0 && start !== null) {
            found.push(ts.slice(start, i + 1));
            start = null;
          }
        }); //maybe we messed something up..

        if (start !== null) {
          found.push(ts.slice(start, ts.terms.length));
        }
      });
      matches.list = found;

      if (typeof n === 'number') {
        matches = matches.get(n);
      }

      return matches;
    },
    topics: function topics(n) {
      var r = this.clauses(); // Find people, places, and organizations

      var yup = r.people();
      yup.concat(r.places());
      yup.concat(r.organizations());
      var ignore = ['someone', 'man', 'woman', 'mother', 'brother', 'sister', 'father'];
      yup = yup.not(ignore); //return them to normal ordering

      yup.sort('chronological'); // yup.unique() //? not sure

      if (typeof n === 'number') {
        yup = yup.get(n);
      }

      return yup;
    },
    urls: function urls(n) {
      var r = this.match('#Url');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    },
    questions: function questions(n) {
      var r = this.all();

      if (typeof n === 'number') {
        r = r.get(n);
      }

      var list = r.list.filter(function (ts) {
        return isQuestion(ts);
      });
      return new Text(list, this.world, this.parent);
    },
    statements: function statements(n) {
      var r = this.all();

      if (typeof n === 'number') {
        r = r.get(n);
      }

      var list = r.list.filter(function (ts) {
        return isQuestion(ts) === false;
      });
      return new Text(list, this.world, this.parent);
    },
    parentheses: function parentheses(n) {
      var r = this.match('#Parentheses+'); //split-up consecutive ones

      r = r.splitAfter('#EndBracket');

      if (typeof n === 'number') {
        r = r.get(n);
      }

      return r;
    }
  };
  Object.keys(subsets).forEach(function (k) {
    Text.prototype[k] = subsets[k];
  });
  return Text;
};

module.exports = addSubsets;

},{"../subset/sentences/isQuestion":53}],207:[function(_dereq_,module,exports){
//(Rule-based sentence boundary segmentation) - chop given text into its proper sentences.
// Ignore periods/questions/exclamations used in acronyms/abbreviations/numbers, etc.
// @spencermountain 2017 MIT
'use strict';

var abbreviations = Object.keys(_dereq_('../world/more-data/abbreviations')); // \u203D - Interrobang
// \u2E18 - Inverted Interrobang
// \u203C - Double Exclamation Mark
// \u2047 - Double Question Mark
// \u2048 - Question Exclamation Mark
// \u2049 - Exclamation Question Mark
// \u2026 - Ellipses Character
//regs-

var abbrev_reg = new RegExp('\\b(' + abbreviations.join('|') + ")[.!?\u203D\u2E18\u203C\u2047-\u2049] *$", 'i');
var acronym_reg = /[ .][A-Z]\.? *$/i;
var ellipses_reg = /(?:\u2026|\.{2,}) *$/; // Match different formats of new lines. (Mac: \r, Linux: \n, Windows: \r\n)

var new_line = /((?:\r?\n|\r)+)/;
var naiive_sentence_split = /(\S.+?[.!?\u203D\u2E18\u203C\u2047-\u2049])(?=\s+|$)/g;
var letter_regex = /[a-z0-9\u0000-\u007F]/i; //support an all-unicode sentence, i guess

var not_ws_regex = /\S/; // Start with a regex:

var naiive_split = function naiive_split(text) {
  var all = []; //first, split by newline

  var lines = text.split(new_line);

  for (var i = 0; i < lines.length; i++) {
    //split by period, question-mark, and exclamation-mark
    var arr = lines[i].split(naiive_sentence_split);

    for (var o = 0; o < arr.length; o++) {
      all.push(arr[o]);
    }
  }

  return all;
};

var sentence_parser = function sentence_parser(text) {
  text = text || '';
  text = String(text);
  var sentences = []; // First do a greedy-split..

  var chunks = []; // Ensure it 'smells like' a sentence

  if (!text || typeof text !== 'string' || not_ws_regex.test(text) === false) {
    return sentences;
  } // Start somewhere:


  var splits = naiive_split(text); // Filter-out the grap ones

  for (var i = 0; i < splits.length; i++) {
    var s = splits[i];

    if (s === undefined || s === '') {
      continue;
    } //this is meaningful whitespace


    if (not_ws_regex.test(s) === false) {
      //add it to the last one
      if (chunks[chunks.length - 1]) {
        chunks[chunks.length - 1] += s;
        continue;
      } else if (splits[i + 1]) {
        //add it to the next one
        splits[i + 1] = s + splits[i + 1];
        continue;
      }
    } //else, only whitespace, no terms, no sentence


    chunks.push(s);
  } //detection of non-sentence chunks:
  //loop through these chunks, and join the non-sentence chunks back together..


  for (var _i = 0; _i < chunks.length; _i++) {
    var c = chunks[_i]; //should this chunk be combined with the next one?

    if (chunks[_i + 1] && letter_regex.test(c) && (abbrev_reg.test(c) || acronym_reg.test(c) || ellipses_reg.test(c))) {
      chunks[_i + 1] = c + (chunks[_i + 1] || '');
    } else if (c && c.length > 0 && letter_regex.test(c)) {
      //this chunk is a proper sentence..
      sentences.push(c);
      chunks[_i] = '';
    }
  } //if we never got a sentence, return the given text


  if (sentences.length === 0) {
    return [text];
  }

  return sentences;
};

module.exports = sentence_parser; // console.log(sentence_parser('john f. kennedy'));

},{"../world/more-data/abbreviations":216}],208:[function(_dereq_,module,exports){
"use strict";

module.exports = "{\"words\":\"Comparative\xA6better|Superlative\xA6earlier|PresentTense\xA6sounds|Value\xA6a few|Noun\xA6autumn,daylight9eom,here,no doubt,one d8s5t2w0yesterd8;eek0int5;d6end;mr1o0;d4morrow;!w;ome 1tandard3umm0;er;d0point;ay; time|Copula\xA6a1is,w0;as,ere;m,re|Condition\xA6if,unless|PastTense\xA6be2came,d1had,mea0sa1taken,we0;nt;id;en,gan|Gerund\xA6accord0be0develop0go0result0stain0;ing|Negative\xA6n0;ever,o0;!n,t|QuestionWord\xA6how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s|Singular\xA6a06bZcUdQeOfLgKhGici0Ajel07kitty,lFmDnCoBp8question mark,r7s4t1us 0;dollVstW; rex,a1h0ic,ragedy,v show;ere,i07;l03x return;ky,t0uper bowl,yst06;ri04u0;dIff;alZi02oom;a1robl02u0;dCrpo8;rt,tE;cean,thers;othiXumbG;ayfTeeNo0;del,nopoS;iRunch;ead start,o0;lPme1u0;se;! run;adfMirlIlaci8od,rand slam,ulM;amiLly,olLr1un0;diN;iGosD;conomy,gg,ner3v0xampG;ent;eath,inn2o0ragonfG;cument6g0iFlFor;gy;er;an3eiliFhocol2i0ottage,redit card;ty,vil w0;ar;ate;ary;ankiAel7les9o2reakfast,u0;n0tterf6;ti8;dy,tt2y0;fri0;end;le;d1l0noma0;ly; homin2verti0;si0;ng;em|Infinitive\xA60:6Y;1:7C;2:7A;3:79;4:74;5:5F;6:6D;7:6L;8:78;9:6W;A:73;B:7D;C:76;D:6R;E:68;F:60;a6Qb69c5Bd4Je43f3Qg3Jh3Ci2Zj2Xk2Tl2Km2Bn28o24p1Pques3Rr0Xs05tWuRvOwHyG;awn,ield;aJe24hist7iIoGre6H;nd0rG;k,ry;n,pe,sh,th0;lk,nHrGsh,tDve;n,raB;d0t;aHiGo8;ew,sA;l6Rry;nHpGr3se;gra4Wli49;dGi8lo65;erGo;go,mi5H;aNeMhKie,oJrHuGwi4;ne,rn;aGe0Ui60u4y;de,in,nsf0p,v5O;r37uD;ank,rG;eat2Vi2;nd,st;ke,lk,rg5Os8;a06c03eZhWi4Jkip,lVmUneTo56pQtJuGwitD;bmAck,ff0gge4ppHrGspe6;ge,pri1rou53vi2;ly,o3D;aLeKoJrHuG;dy,mb7;aEeGi2;ngth2Lss,tD;p,re;m,p;in,ke,r0Yy;iHlaFoil,rinG;g,k7;n,t;ak,e3E;aFe22i7o5B;am,e1Qip;aHiv0oG;ck,ut;re,ve;arDeIle6nHr2tG;!t7;d,se;k,m;aHo5rG;atDew;le,re;il,ve;a05eIisk,oHuG;b,in,le,n,sh;am,ll;a01cZdu9fYgXje6lUmTnt,pQquPsKtJvGwa5V;eGiew,o4U;al,l,rG;se,t;aEi5u42;eJi4oItG;!o5rG;i6uc20;l2rt;mb7nt,r2;e4i5;air,eHlGo40reseB;a9y;at;aEemb0i3Wo2;aHeGi2y;a1nt;te,x;a5Dr4A;act1Yer,le6u1;a12ei2k5PoGyc7;gni2Cnci7rd;ch,li2Bs5N;i1nG;ge,k;aTerSiRlPoNrIuG;b21ll,mp,rGsh,t;cha1s4Q;ai1eJiBoG;cHdu9greChibAmi1te4vG;e,i2U;eClaim;di6pa5ss,veB;iBp,rtr43sGur;e,t;a3RuG;g,n3;ck,le;fo32mAsi4;ck,iBrt4Mss,u1y;bIccur,ff0pera8utweHverGwe;co47lap,ta3Qu1whelm;igh;ser2taE;eHotG;e,i9;ed,gle6;aLeKiIoHuG;ltip3Frd0;nit14ve;nGrr13;d,g7us;asu5lt,n0Qr3ssa3;intaEke d40na3rHtG;ch,t0;ch,k39ry;aMeLiIoGu1F;aGck,ok,ve;d,n;ft,ke,mAnHstGve;!en;e,k;a2Gc0Ht;b0Qck,uG;gh,nD;eIiHnoG;ck,w;ck,ll,ss;ep;am,oEuG;d3mp;gno5mQnGss3I;cOdica8flu0NhNsKtIvG;eGol2;nt,st;erGrodu9;a6fe5;i4tG;aGru6;ll;abAibA;lu1Fr1D;agi22pG;lemeBo20ro2;aKeIi5oHuG;nt,rry;ld fa4n03pe,st;aGlp;d,t;nd7ppGrm,te;en;aLet,loCoKrIuG;arGeCi14;ant39d;aGip,ow,umb7;b,sp;es,ve1I;in,th0ze;aQeaPiNlLoIracHuncG;ti3I;tu5;cus,lHrG;ce,eca4m,s30;d,l22;aFoG;at,od,w;gu5lGniFx;e,l;r,tu5;il,ll,vG;or;a13cho,dAle6mSnPstNvalua8xG;a0AcLerKi4pGte16;a15eHlaEoGreC;rt,se;ct,riG;en9;ci1t;el,han3;abGima8;liF;ab7couXdHfor9ga3han9j03riDsu5t0vG;isi2Vy;!u5;body,er3pG;hasiGow0;ze;a06eUiMoLrHuG;mp;aIeHiGop;ft;am,ss;g,in;!d3ubt;e,ff0p,re6sHvG;e,iXor9;aJcGli13miCpl18tinguiF;oGuC;uGv0;ra3;gr1YppG;ear,ro2;al,cNem,fLliv0ma0Cny,pKsHterG;mi0D;cribe,er2iHtrG;oy;gn,re;a08e07i6osA;eGi08y;at,ct;iIlHrG;ea1;a5i04;de;ma3n9re,te;a0Ae09h06i8l03oJrGut;aHeGoCuFy;a8dA;ck,ve;llYmSnHok,py,uGv0;gh,nt;cePdu6fMsKtIvG;eGin9;rt,y;aEin0XrG;a4ibu8ol;iGtitu8;d0st;iHoGroB;rm;gu5rm;rn;biKe,foJmaIpG;a5laE;re;nd;rt;ne;ap1e6;aHiGo1;ng,p;im,w;aHeG;at,ck,w;llen3n3r3se;a1nt0;ll,ncHrGt0u1;e,ry;el;aUeQloPoNrKuG;dgIlHrG;n,y;ly;et;aHuF;sh;ke;a4mb,o4rrGth0un9;ow;ck;ar,coSgElHnefAtrG;ay;ie2ong;in;nGse;!g;band0Jc0Bd06ffo05gr04id,l01mu1nYppTrQsKttGvoid,waA;acIeHra6;ct;m0Fnd;h,k;k,sG;eIiHocia8uG;me;gn,st;mb7rt;le;chHgGri2;ue;!i2;eaJlIroG;aDve;ch;aud,y;l,r;noun9sw0tG;icipa8;ce;lHt0;er;e3ow;ee;rd;aRdIju4mAoR;it;st;!reC;ss;cJhie2knowled3tiva8;te;ge;ve;eIouBu1;se;nt;pt;on|Actor\xA6aJbGcFdCengineIfAgardenIh9instructPjournalLlawyIm8nurse,opeOp5r3s1t0;echnCherapK;ailNcientJoldiGu0;pervKrgeon;e0oofE;ceptionGsearC;hotographClumbColi1r0sychologF;actitionBogrammB;cem6t5;echanic,inist9us4;airdress8ousekeep8;arm7ire0;fight6m2;eputy,iet0;ici0;an;arpent2lerk;ricklay1ut0;ch0;er;ccoun6d2ge7r0ssis6ttenda7;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt|Honorific\xA6aObrigadiNcHdGexcellency,fiBking,liDmaAofficNp6queen,r3s0taoiseach,vice5;e0ultJ;c0rgeaC;ond liAretary;abbi,e0;ar0verend; adJ;astFr0;eside6i0ofessE;me ministEnce0;!ss;gistrate,r4yB;eld mar3rst l0;ady,i0;eutena0;nt;shA;oct5utchess;aptain,hance3o0;lonel,mmand4ngress0unci2;m0wom0;an;ll0;or;er;d0yatullah;mir0;al|SportsTeam\xA60:1M;1:1T;2:1U;a1Rb1Dc0Zd0Qfc dallas,g0Nhouston 0Mindiana0Ljacksonville jagua0k0Il0Fm02newVoRpKqueens parkJrIsAt5utah jazz,vancouver whitecaps,w3yY;ashington 3est ham0Xh16;natio21redski1wizar12;ampa bay 6e5o3;ronto 3ttenham hotspur;blu1Hrapto0;nnessee tita1xasD;buccanee0ra1G;a7eattle 5heffield0Qporting kansas13t3;. louis 3oke12;c1Srams;mari02s3;eah1IounI;cramento Sn 3;antonio spu0diego 3francisco gi0Bjose earthquak2;char0EpaB;eal salt lake,o04; ran0C;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat2steele0;il3oenix su1;adelphia 3li2;eagl2philNunE;dr2;akland 4klahoma city thunder,r3;i10lando magic;athle0Trai3;de0; 3castle05;england 6orleans 5york 3;city fc,giUje0Lkn02me0Lred bul19y3;anke2;pelica1sain0J;patrio0Irevolut3;ion;aBe9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Rvi3;kings;imberwolv2wi1;re0Cuc0W;dolphi1heat,marli1;mphis grizz3ts;li2;nchester 5r3vN;i3li1;ne0;c00u0H;a4eicesterYos angeles 3;clippe0dodFlaA; galaxy,ke0;ansas city 3nH;chiefs,ro3;ya0M; pace0polis colX;astr0Edynamo,rockeWtexa1;i4olden state warrio0reen bay pac3;ke0;anT;.c.Aallas 7e3i0Cod5;nver 5troit 3;lio1pisto1ti3;ge0;bronc06nuggeO;cowboUmav3;er3;ic06; uX;arCelNh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki2;brow1cavalie0india1;benga03re3;ds;arlotte horCicago 3;b4cubs,fire,wh3;iteE;ea0ulY;di3olina panthe0;ff3naW; c3;ity;altimore ElAoston 7r3uffalo bilT;av2e5ooklyn 3;ne3;ts;we0;cel4red3; sox;tics;ackburn rove0u3;e ja3;ys;rs;ori3rave1;ol2;rizona Ast8tlanta 3;brav2falco1h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls|Uncountable\xA60:1C;a1Hb1Bc12e0Wf0Qg0Mh0Gi0Dj0Cknowled1Gl07mYnXoWpRrOsCt8vi7w1;a5ea0Ai4o1;o2rld1;! seI;d,l;ldlife,ne;rmth,t0;neg0Xol08;e3hund0ime,oothpaste,r1una;affRou1;ble,sers,t;a,nnis;aAcene07e9h8il7now,o6p3te2u1;g0Rnshi0L;am,el;ace2e1;ciOed;!c12;ap,cc0ft0B;k,v0;eep,opp0O;riJ;d07fe0Wl1nd;m0Qt;ain,e1i0W;c1laxa0Csearch;ogni0Brea0B;a4e2hys0Elast9o1ress00;rk,w0;a1pp0trol;ce,nR;p0tiK;il,xygen;ews,oi0C;a7ea5i4o3u1;mps,s1;ic;nHo08;lk,st;sl1t;es;chine1il,themat00; learn02ry;aught0e3i2u1;ck,g07;ghtnZqu0CteratI;a1isH;th0;ewel7usti08;ce,mp1nformaOtself;ati1ortan06;en05;a4isto3o1;ck1mework,n1spitali01;ey;ry;ir,lib1ppi9;ut;o2r1um,ymnastJ;a7ound;l1ssip;d,f;i5lour,o2ruit,urnit1;ure;od,rgive1wl;ne1;ss;c6sh;conom9duca5lectriciMn3quip4th9very1;body,o1thB;ne;joy1tertain1;ment;tiC;a8elcius,h4iv3loth6o1urrency;al,ffee,ld w1nfusiAttA;ar;ics;aos,e1;e2w1;ing;se;ke,sh;a3eef,is2lood,read,utt0;er;on;g1ss;ga1;ge;c4dvi3irc2mnes1rt;ty;raft;ce;id|Unit\xA60:17;a12b10c0Md0Le0Jf0Fg0Bh08in07joule0k01lZmOnNoMpIqHsqCt7volts,w6y4z3\xB02\xB51;g,s;c,f,n;b,e2;a0Lb,d0Rears old,o1;tt0F;att0b;able4b3e2on1sp;!ne0;a2r0B;!l,sp;spo03; ft,uare 1;c0Gd0Ff3i0Dkilo0Hm1ya0C;e0Kil1;e0li0F;eet0o0B;t,uart0;a3e2i1ou0Nt;c0Knt0;rcent,t00;!scals;hms,uVz;an0GewtR;/s,b,e7g,i3l,m2p1\xB2,\xB3;h,s;!\xB2;!/h,cro3l1;e1li05;! DsC\xB2;g05s0A;gPter1;! 2s1;! 1;per second;b,iZm,u1x;men0x0;b,elvin0g,ilo2m1nQ;!/h,ph,\xB2;byYgWmeter1;! 2s1;! 1;per hour;\xB2,\xB3;e1g,z;ct1rtz0;aWogP;al2b,ig9ra1;in0m0;!l1;on0;a3emtOl1tG; oz,uid ou1;nce0;hrenheit0rad0;b,x1;abyH;eciCg,l,mA;arat0eAg,l,m9oulomb0u1;bic 1p0;c5d4fo3i2meAya1;rd0;nch0;ot0;eci2;enti1;me4;!\xB2,\xB3;lsius0nti1;g2li1me1;ter0;ram0;bl,y1;te0;c4tt1;os1;eco1;nd0;re0;!s|Pronoun\xA6'em,elle,h4i3me,ourselves,she5th1us,we,you0;!rself;e0ou;m,y;!l,t;e0im;!'s|Organization\xA60:44;a39b2Qc2Ad22e1Yf1Ug1Mh1Hi1Ej1Ak18l14m0Tn0Go0Dp07qu06rZsStFuBv8w3y1;amaha,m0You1w0Y;gov,tu2R;a3e1orld trade organizati3Z;lls fargo,st1;fie23inghou17;l1rner br3B;-m12gree30l street journ25m12;an halNeriz3Uisa,o1;dafo2Gl1;kswagLvo;bs,kip,n2ps,s1;a tod2Qps;es33i1;lev2Wted natio2T; mobi2Jaco bePd bMeAgi frida9h3im horto2Smz,o1witt2V;shiba,y1;ota,s r Y;e 1in lizzy;b3carpen31daily ma2Vguess w2holli0rolling st1Ns1w2;mashing pumpki2Nuprem0;ho;ea1lack eyed pe3Dyrds;ch bo1tl0;ys;l2s1;co,la m13;efoni08us;a6e4ieme2Fnp,o2pice gir5ta1ubaru;rbucks,to2L;ny,undgard1;en;a2Px pisto1;ls;few24insbu25msu1W;.e.m.,adiohead,b6e3oyal 1yan2V;b1dutch she4;ank;/max,aders dige1Ed 1vl30;bu1c1Thot chili peppe2Ilobst27;ll;c,s;ant2Tizno2D;an5bs,e3fiz23hilip morrBi2r1;emier25octer & gamb1Qudenti14;nk floyd,zza hut;psi26tro1uge09;br2Ochina,n2O; 2ason1Wda2E;ld navy,pec,range juli2xf1;am;us;aAb9e5fl,h4i3o1sa,wa;kia,tre dame,vart1;is;ke,ntendo,ss0L;l,s;c,stl3tflix,w1; 1sweek;kids on the block,york09;e,\xE9;a,c;nd1Rs2t1;ional aca2Co,we0P;a,cYd0N;aAcdonald9e5i3lb,o1tv,yspace;b1Knsanto,ody blu0t1;ley crue,or0N;crosoft,t1;as,subisO;dica3rcedes2talli1;ca;!-benz;id,re;'s,s;c's milk,tt11z1V;'ore08a3e1g,ittle caesa1H;novo,x1;is,mark; pres5-z-boy,bour party;atv,fc,kk,m1od1H;art;iffy lu0Jo3pmorgan1sa;! cha1;se;hnson & johns1Py d1O;bm,hop,n1tv;g,te1;l,rpol; & m,asbro,ewlett-packaSi3o1sbc,yundai;me dep1n1G;ot;tac1zbollah;hi;eneral 6hq,l5mb,o2reen d0Gu1;cci,ns n ros0;ldman sachs,o1;dye1g09;ar;axo smith kliYencore;electr0Gm1;oto0S;a3bi,da,edex,i1leetwood mac,oFrito-l08;at,nancial1restoU; tim0;cebook,nnie mae;b04sa,u3xxon1; m1m1;ob0E;!rosceptics;aiml08e5isney,o3u1;nkin donuts,po0Tran dur1;an;j,w j1;on0;a,f leppa2ll,peche mode,r spiegXstiny's chi1;ld;rd;aEbc,hBi9nn,o3r1;aigsli5eedence clearwater reviv1ossra03;al;ca c5l4m1o08st03;ca2p1;aq;st;dplLgate;ola;a,sco1tigroup;! systems;ev2i1;ck fil-a,na daily;r0Fy;dbury,pital o1rl's jr;ne;aFbc,eBf9l5mw,ni,o1p,rexiteeV;ei3mbardiJston 1;glo1pizza;be;ng;ack & deckFo2ue c1;roW;ckbuster video,omingda1;le; g1g1;oodriM;cht3e ge0n & jer2rkshire hathaw1;ay;ryG;el;nana republ3s1xt5y5;f,kin robbi1;ns;ic;bWcRdidQerosmith,ig,lKmEnheuser-busDol,pple9r6s3t&t,v2y1;er;is,on;hland1sociated F; o1;il;by4g2m1;co;os; compu2bee1;'s;te1;rs;ch;c,d,erican3t1;!r1;ak; ex1;pre1;ss; 4catel2t1;air;!-luce1;nt;jazeera,qae1;da;as;/dc,a3er,t1;ivisi1;on;demy of scienc0;es;ba,c|Demonym\xA60:16;1:13;a0Wb0Nc0Cd0Ae09f07g04h02iYjVkTlPmLnIomHpDqatari,rBs7t5u4v3wel0Rz2;am0Fimbabwe0;enezuel0ietnam0H;g9krai1;aiwThai,rinida0Iu2;ni0Qrkmen;a4cot0Ke3ingapoOlovak,oma0Tpa05udRw2y0X;edi0Kiss;negal0Br08;mo0uU;o6us0Lw2;and0;a3eru0Hhilipp0Po2;li0Ertugu06;kist3lesti1na2raguay0;ma1;ani;amiZi2orweP;caragu0geri2;an,en;a3ex0Mo2;ngo0Erocc0;cedo1la2;gasy,y08;a4eb9i2;b2thua1;e0Dy0;o,t02;azakh,eny0o2uwaiti;re0;a2orda1;ma0Bp2;anN;celandic,nd4r2sraeli,ta02vo06;a2iT;ni0qi;i0oneV;aiDin2ondur0unN;di;amDe2hanai0reek,uatemal0;or2rm0;gi0;i2ren7;lipino,n4;cuadoVgyp6ngliJsto1thiopi0urope0;a2ominXut4;niH;a9h6o4roa3ub0ze2;ch;ti0;lom2ngol5;bi0;a6i2;le0n2;ese;lifor1m2na3;bo2eroo1;di0;angladeshi,el8o6r3ul2;gaG;aziBi2;ti2;sh;li2s1;vi0;aru2gi0;si0;fAl7merBngol0r5si0us2;sie,tr2;a2i0;li0;gent2me1;ine;ba1ge2;ri0;ni0;gh0r2;ic0;an|Region\xA6a20b1Sc1Id1Des1Cf19g13h10i0Xj0Vk0Tl0Qm0FnZoXpSqPrMsDtAut9v5w2y0zacatec22;o05u0;cat18kZ;a0est vir4isconsin,yomi14;rwick1Qshington0;! dc;er2i0;cto1Ir0;gin1R;acruz,mont;ah,tar pradesh;a1e0laxca1Cusca9;nnessee,x1Q;bas0Jmaulip1PsmI;a5i3o1taf0Nu0ylh12;ffUrrZs0X;me0Zno19uth 0;cRdQ;ber1Hc0naloa;hu0Rily;n1skatchew0Qxo0;ny; luis potosi,ta catari1H;a0hode6;j0ngp01;asth0Lshahi;inghai,u0;e0intana roo;bec,ensVreta0D;ara3e1rince edward0; isT;i,nnsylv0rnambu01;an13;!na;axa0Mdisha,h0klaho1Antar0reg3x03;io;ayarit,eAo2u0;evo le0nav0K;on;r0tt0Qva scot0W;f5mandy,th0; 0ampton0P;c2d1yo0;rk0N;ako0X;aroli0U;olk;bras0Wva00w0; 1foundland0;! and labrador;brunswick,hamp0Gjers0mexiIyork state;ey;a5i1o0;nta0Mrelos;ch2dlanAn1ss0;issippi,ouri;as geraFneso0L;igPoacP;dhya,harasht03ine,ni2r0ssachusetts;anhao,y0;land;p0toba;ur;anca03e0incoln03ouis7;e0iG;ds;a0entucky,hul09;ns07rnata0Cshmir;alis0iangxi;co;daho,llino1nd0owa;ia04;is;a1ert0idalDun9;fordS;mpRwaii;ansu,eorgVlou4u0;an1erre0izhou,jarat;ro;ajuato,gdo0;ng;cesterL;lori1uji0;an;da;sex;e3o1uran0;go;rs0;et;lawaDrbyC;a7ea6hi5o0umbrG;ahui3l2nnectic1rsi0ventry;ca;ut;iLorado;la;apDhuahua;ra;l7m0;bridge2peche;a4r3uck0;ingham0;shi0;re;emen,itish columb2;h1ja cal0sque,var1;iforn0;ia;guascalientes,l3r0;izo1kans0;as;na;a1ber0;ta;ba1s0;ka;ma|Possessive\xA6anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne|Currency\xA6$,aud,bRcPdKeurJfIgbp,hkd,inr,jpy,kGlEp8r7s3usd,x2y1z0\xA2,\xA3,\xA5,\u0434\u0435\u043D,\u043B\u0432,\u0440\u0443\u0431,\u0E3F,\u20A1,\u20A8,\u20AC,\u20AD,\uFDFC;lotyR\u0142;en,uanQ;af,of;h0t5;e0il5;k0q0;elL;iel,oubleKp,upeeK;e2ound st0;er0;lingH;n0soG;ceFn0;ies,y;e0i7;i,mpi6;n,r0wanzaByatB;!onaAw;ori7ranc9t;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s|Country\xA60:38;1:2L;a2Wb2Dc21d1Xe1Rf1Lg1Bh19i13j11k0Zl0Um0Gn05om3CpZqat1JrXsKtCu6v4wal3yemTz2;a24imbabwe;es,lis and futu2X;a2enezue31ietnam;nuatu,tican city;.5gTkraiZnited 3ruXs2zbeE;a,sr;arab emirat0Kkingdom,states2;! of am2X;k.,s.2; 27a.;a7haBimor-les0Bo6rinidad4u2;nis0rk2valu;ey,me2Xs and caic1T; and 2-2;toba1J;go,kel0Ynga;iw2Vji2nz2R;ki2T;aCcotl1eBi8lov7o5pa2Bri lanka,u4w2yr0;az2ed9itzerl1;il1;d2Qriname;lomon1Vmal0uth 2;afr2IkLsud2O;ak0en0;erra leoEn2;gapo1Wt maart2;en;negKrb0ychellY;int 2moa,n marino,udi arab0;hele24luc0mart1Z;epublic of ir0Com2Cuss0w2;an25;a3eHhilippinTitcairn1Ko2uerto riM;l1rtugE;ki2Bl3nama,pua new0Tra2;gu6;au,esti2;ne;aAe8i6or2;folk1Gth3w2;ay; k2ern mariana1B;or0M;caragua,ger2ue;!ia;p2ther18w zeal1;al;mib0u2;ru;a6exi5icro09o2yanm04;ldova,n2roc4zamb9;a3gol0t2;enegro,serrat;co;c9dagascZl6r4urit3yot2;te;an0i14;shall0Vtin2;ique;a3div2i,ta;es;wi,ys0;ao,ed00;a5e4i2uxembourg;b2echtenste10thu1E;er0ya;ban0Gsotho;os,tv0;azakh1De2iriba02osovo,uwait,yrgyz1D;eling0Jnya;a2erF;ma15p1B;c6nd5r3s2taly,vory coast;le of m19rael;a2el1;n,q;ia,oI;el1;aiSon2ungary;dur0Mg kong;aAermany,ha0Pibralt9re7u2;a5ern4inea2ya0O;!-biss2;au;sey;deloupe,m,tema0P;e2na0M;ce,nl1;ar;bTmb0;a6i5r2;ance,ench 2;guia0Dpoly2;nes0;ji,nl1;lklandTroeT;ast tim6cu5gypt,l salv5ngl1quatorial3ritr4st2thiop0;on0; guin2;ea;ad2;or;enmark,jibou4ominica3r con2;go;!n B;ti;aAentral african 9h7o4roat0u3yprQzech2; 8ia;ba,racao;c3lo2morPngo-brazzaville,okFsta r03te d'ivoiK;mb0;osD;i2ristmasF;le,na;republic;m2naTpe verde,yman9;bod0ero2;on;aFeChut00o8r4u2;lgar0r2;kina faso,ma,undi;azil,itish 2unei;virgin2; is2;lands;liv0nai4snia and herzegoviGtswaGuvet2; isl1;and;re;l2n7rmuF;ar2gium,ize;us;h3ngladesh,rbad2;os;am3ra2;in;as;fghaFlCmAn5r3ustr2zerbaijH;al0ia;genti2men0uba;na;dorra,g4t2;arct6igua and barbu2;da;o2uil2;la;er2;ica;b2ger0;an0;ia;ni2;st2;an|City\xA6a2Wb26c1Wd1Re1Qf1Og1Ih1Ai18jakar2Hk0Zl0Tm0Gn0Co0ApZquiYrVsLtCuBv8w3y1z0;agreb,uri1Z;ang1Te0okohama;katerin1Hrev34;ars3e2i0rocl3;ckl0Vn0;nipeg,terth0W;llingt1Oxford;aw;a1i0;en2Hlni2Z;lenc2Uncouv0Gr2G;lan bat0Dtrecht;a6bilisi,e5he4i3o2rondheim,u0;nVr0;in,ku;kyo,ronIulouC;anj23l13miso2Jra2A; haJssaloni0X;gucigalpa,hr2Ol av0L;i0llinn,mpe2Bngi07rtu;chu22n2MpT;a3e2h1kopje,t0ydney;ockholm,uttga12;angh1Fenzh1X;o0KvZ;int peters0Ul3n0ppo1F; 0ti1B;jo0salv2;se;v0z0Q;adU;eykjavik,i1o0;me,t25;ga,o de janei17;to;a8e6h5i4o2r0ueb1Qyongya1N;a0etor24;gue;rt0zn24; elizabe3o;ls1Grae24;iladelph1Znom pe07oenix;r0tah tik19;th;lerJr0tr10;is;dessa,s0ttawa;a1Hlo;a2ew 0is;delTtaip0york;ei;goya,nt0Upl0Uv1R;a5e4i3o1u0;mb0Lni0I;nt0scH;evideo,real;l1Mn01skolc;dell\xEDn,lbour0S;drid,l5n3r0;ib1se0;ille;or;chest0dalWi0Z;er;mo;a4i1o0vAy01;nd00s angel0F;ege,ma0nz,sbZverpo1;!ss0;ol; pla0Iusan0F;a5hark4i3laipeda,o1rak0uala lump2;ow;be,pavog0sice;ur;ev,ng8;iv;b3mpa0Kndy,ohsiu0Hra0un03;c0j;hi;ncheMstanb0\u0307zmir;ul;a5e3o0; chi mi1ms,u0;stI;nh;lsin0rakliG;ki;ifa,m0noi,va0A;bu0SiltD;alw4dan3en2hent,iza,othen1raz,ua0;dalaj0Gngzhou;bu0P;eUoa;sk;ay;es,rankfu0;rt;dmont4indhovU;a1ha01oha,u0;blRrb0Eshanbe;e0kar,masc0FugavpiJ;gu,je0;on;a7ebu,h2o0raioJuriti01;lo0nstanJpenhagNrk;gFmbo;enn3i1ristchur0;ch;ang m1c0ttagoL;ago;ai;i0lgary,pe town,rac4;ro;aHeBirminghWogoAr5u0;char3dap3enos air2r0sZ;g0sa;as;es;est;a2isba1usse0;ls;ne;silPtisla0;va;ta;i3lgrade,r0;g1l0n;in;en;ji0rut;ng;ku,n3r0sel;celo1ranquil0;la;na;g1ja lu0;ka;alo0kok;re;aBb9hmedabad,l7m4n2qa1sh0thens,uckland;dod,gabat;ba;k0twerp;ara;m5s0;terd0;am;exandr0maty;ia;idj0u dhabi;an;lbo1rh0;us;rg|Place\xA6aMbKcIdHeFfEgBhAi9jfk,kul,l7m5new eng4ord,p2s1the 0upJyyz;bronx,hamptons;fo,oho,under2yd;acifMek,h0;l,x;land;a0co,idDuc;libu,nhattK;a0gw,hr;s,x;ax,cn,ndianGst;arlem,kg,nd;ay village,re0;at 0enwich;britain,lak2;co,ra;urope,verglad0;es;en,fw,own1xb;dg,gk,hina0lt;town;cn,e0kk,rooklyn;l air,verly hills;frica,m5ntar1r1sia,tl0;!ant1;ct0;ic0; oce0;an;ericas,s|FemaleName\xA60:G0;1:G4;2:FT;3:FF;4:FE;5:FU;6:ER;7:GH;8:F1;9:ET;A:GD;B:E7;C:GA;D:FQ;E:FN;F:EI;G:C8;aE4bD6cB9dAJe9Hf92g8Ih85i7Uj6Wk61l4Pm3An2Vo2Sp2Hqu2Fr1Ps0Rt05ursu9vVwPyMzH;aKeIoH;e,la,ra;lHna;da,ma;da,ra;as7GeIol1UvH;et6onBA;le0sen3;an8endBPhiB5iH;lJnH;if3BniHo0;e,f3A;a,helmi0lHma;a,ow;aNeKiH;cIviH;an9YenG4;kD1tor3;da,l8Wnus,rH;a,nHoniD4;a,iDE;leHnesEF;nDOrH;i1y;aTeQhOiNoKrHu9y4;acG6iHu0F;c3na,sH;h9Nta;nIrH;a,i;i9Kya;a5KffaCIna,s5;al3eHomasi0;a,l8Ho6Zres1;g7Vo6YrIssH;!a,ie;eFi,ri7;bOliNmLnJrIs5tHwa0;ia0um;a,yn;iHya;a,ka,s5;a4e4iHmCCra;!ka;a,t5;at5it5;a06carlet2Ze05hViTkye,oRtNuIyH;bFMlvi1;e,sIzH;an2Uet6ie,y;anHi7;!a,e,nH;aEe;aJeH;fHl3EphH;an2;cFBr73;f3nHphi1;d4ia,ja,ya;er4lv3mon1nHobh76;dy;aLeHirlBNo0y9;ba,e0i9lJrH;iHrBRyl;!d71;ia,lBX;ki4nJrIu0w0yH;la,na;i,leAon,ron;a,da,ia,nHon;a,on;l60re0;bNdMi8lLmJndIrHs5vannaE;aEi0;ra,y;aHi4;nt5ra;lBPome;e,ie;in1ri0;a03eYhWiUoIuH;by,thBM;bRcQlPnOsIwe0xH;an95ie,y;aIeHie,lC;ann7ll1marBHtB;!lHnn1;iHyn;e,nH;a,d7X;da,i,na;an8;hel55io;bin,erByn;a,cHkki,na,ta;helC2ki;ea,iannE0oH;da,n13;an0bJgi0i0nHta,y0;aHee;!e,ta;a,eH;cATkaE;chHe,i0mo0n5FquCGvDy0;aCFelHi8;!e,le;een2iH;a0nn;aNeMhKoJrH;iHudenAX;scil1Uyamva8;lly,rt3;ilome0oebe,ylH;is,lis;arl,ggy,nelope,r9t4;ige,m0Fn4Po9rvaBDtIulH;a,et6in1;ricHsy,tA9;a,e,ia;ctav3deIf86lHph86;a,ga,iv3;l3t6;aReQiKoHy9;eIrH;aEeDma;ll1mi;aLcJkHla,na,s5ta;iHki;!ta;hoB4k8ColH;a,eBJ;!mh;l7Una,risF;dJi5PnIo23taH;li1s5;cy,et6;eAiCQ;a01ckenz2eViLoIrignayani,uriBIyrH;a,na,tAV;i4ll9ZnH;a,iH;ca,ka,qB7;a,chPkaOlKmi,nJrHtzi;aHiam;!n8;a,dy,erva,h,n2;a,dJi9LlH;iHy;cent,e;red;!e9;ae9el3I;ag4LgLi,lIrH;edi62isFyl;an2iHliF;nHsAP;a,da;!an,han;b09c9Gd07e,g05i04l02n00rLtKuIv6TxGyHz2;a,bell,ra;de,rH;a,eD;h77il8t2;a,cTgPiKjor2l6Jn2s5tJyH;!aHbe5RjaAlou;m,n9V;a,ha,i0;!aJbAOeIja,lCna,sHt54;!a,ol,sa;!l07;!h,m,nH;!a,e,n1;arJeIie,oHr3Lueri6;!t;!ry;et3JiB;elHi62y;a,l1;dHon,ue9;akranBy;iHlo97;a,ka,n8;a,re,s2;daHg2;!l2Y;alCd2elHge,isBJon0;eiAin1yn;el,le;a0Je09iXoRuLyH;d3la,nH;!a,dIe9VnHsAT;!a,e9U;a,sAR;aB4cKelJiFlIna,pHz;e,iB;a,u;a,la;iHy;a2Ce,l27n8;is,l1IrItt2uH;el9is1;aJeIi7na,rH;aGi7;lei,n1tB;!in1;aRbQd3lMnJsIv3zH;!a,be4Let6z2;a,et6;a,dH;a,sHy;ay,ey,i,y;a,iaJlH;iHy;a8Je;!n4G;b7Verty;!n5T;aOda,e0iMla,nLoJslAUtHx2;iHt2;c3t3;la,nHra;a,ie,o4;a,or1;a,gh,laH;!ni;!h,nH;a,d4e,n4O;cOdon7Ui9kes5na,rNtLurJvIxHy9;mi;ern1in3;a,eHie,yn;l,n;as5is5oH;nya,ya;a,isF;ey,ie,y;a01eWhadija,iOoNrJyH;lHra;a,ee,ie;isHy5D;!tH;a,en,iHy;!e,n48;ri,urtn9C;aNerMl9BmJrHzzy;a,stH;en,in;!berlH;eHi,y;e,y;a,stD;!na,ra;el6QiKlJnIrH;a,i,ri;d4na;ey,i,l9Ss2y;ra,s5;c8Yi5YlPma9nyakumari,rNss5MtKviByH;!e,lH;a,eH;e,i7A;a5FeIhHi3PlCri0y;arGerGie,leDr9Hy;!lyn75;a,en,iHl4Vyn;!ma,n31sF;ei74i,l2;a05eWilUoNuH;anLdKliHstG;aIeHsF;!nAt0W;!n8Z;e,i2Ry;a,iB;!anMcelCd5Wel73han6JlKni,sIva0yH;a,ce;eHie;fi0lCphG;eHie;en,n1;!a,e,n36;!i10lH;!i0Z;anMle0nJrIsH;i5Rsi5R;i,ri;!a,el6Rif1RnH;a,et6iHy;!e,f1P;a,e74iInH;a,e73iH;e,n1;cMd1mi,nIqueliAsmin2Uvie4yAzH;min7;a7eIiH;ce,e,n1s;!lHsFt06;e,le;inIk2lCquelH;in1yn;da,ta;da,lQmOnNo0rMsIvaH;!na;aIiHob6W;do4;!belHdo4;!a,e,l2G;en1i0ma;a,di4es,gr5T;el8ogH;en1;a,eAia0o0se;aNeKilIoHyacin1N;ll2rten1H;a5HdHla5H;a,egard;ath0XiIlHnrietBrmiAst0X;en25ga;di;il78lLnKrHtt2yl78z6G;iHmo4Hri4I;etH;!te;aEnaE;ey,l2;aZeUiPlNold13rJwH;enHyne19;!dolC;acIetHisel8;a,chD;e,ieH;!la;adys,enHor3yn1Z;a,da,na;aKgi,lIna,ov74selH;a,e,le;da,liH;an;!n0;mZnJorgIrH;aldGi,m2Utru76;et6i5W;a,eHna;s1Ovieve;briel3Hil,le,rnet,yle;aSePio0loNrH;anIe8iH;da,e8;!cH;esIiHoi0H;n1s3X;!ca;!rH;a,en45;lIrnH;!an8;ec3ic3;rItiHy7;ma;ah,rah;d0GileDkBl01mVn4DrSsNtMuLvH;aJelIiH;e,ta;in0Byn;!ngelG;geni1la,ni3T;h55ta;meral8peranKtH;eIhHrel9;er;l2Rr;za;iHma,nestGyn;cHka,n;a,ka;eKilJmH;aHie,y;!liA;ee,i1y;lHrald;da,y;aUeSiNlMma,no4oKsJvH;a,iH;na,ra;a,ie;iHuiH;se;a,en,ie,y;a0c3da,nKsHzaI;aHe;!beH;th;!a,or;anor,nH;!a;in1na;en,iHna,wi0;e,th;aXeLiKoHul2W;lor54miniq41n32rHtt2;a,eDis,la,othHthy;ea,y;an0AnaEonAx2;anQbPde,eOiMja,lJmetr3nHsir4X;a,iH;ce,se;a,iIla,orHphiA;es,is;a,l5M;dHrdH;re;!d4Pna;!b2EoraEra;a,d4nH;!a,e;hl3i0mNnLphn1rIvi1YyH;le,na;a,by,cIia,lH;a,en1;ey,ie;a,et6iH;!ca,el1Cka;arHia;is;a0Se0Oh06i04lWoKrIynH;di,th3;istHy06;al,i0;lQnNrIurH;tn1F;aKdJiHnJriA;!nH;a,e,n1;el3;!l1T;n2sH;tanHuelo;ce,za;eHleD;en,t6;aJeoIotH;il4D;!pat4;ir7rJudH;et6iH;a,ne;a,e,iH;ce,sY;a4er4ndH;i,y;aQeNloe,rH;isIyH;stal;sy,tH;aIen,iHy;!an1e,n1;!l;lseIrH;!i7yl;a,y;nMrH;isKlImH;aiA;a,eHot6;n1t6;!sa;d4el1RtH;al,el1Q;cIlH;es6i3H;el3ilH;e,ia,y;iZlYmilXndWrOsMtHy9;aKeJhHri0;erGleDrCy;in1;ri0;li0ri0;a2IsH;a2Hie;a,iNlLmeJolIrH;ie,ol;!e,in1yn;lHn;!a,la;a,eHie,y;ne,y;na,sF;a0Ei0E;a,e,l1;isBl2;tlH;in,yn;arb0DeZianYlWoUrH;andSeQiJoIyH;an0nn;nwCok7;an2PdgLg0KtH;n29tH;!aInH;ey,i,y;ny;etH;!t7;an0e,nH;da,na;i7y;bbi7nH;iBn2;ancHossom,ythe;a,he;ca;aScky,lin8niBrOssNtJulaEvH;!erlH;ey,y;hIsy,tH;e,i11y7;!anH;ie,y;!ie;nHt5yl;adIiH;ce;et6iA;!triH;ce,z;a4ie,ra;aliy2Bb26d1Ng1Ji1Bl0Um0Pn03rYsPthe0uLvJyH;anHes5;a,na;a,eHr27;ry;drJgusIrH;el3o4;ti0;a,ey,i,y;hItrH;id;aLlHt1Q;eIi7yH;!n;e,iHy;gh;!nH;ti;iJleIpiB;ta;en,n1t6;an1AelH;le;aZdXeVgRiPja,nItoHya;inet6n3;!aKeIiHmJ;e,ka;!mHt6;ar2;!belIliFmU;sa;!le;ka,sHta;a,sa;elHie;a,iH;a,ca,n1qH;ue;!t6;te;je9rea;la;!bImHstas3;ar3;el;aJberIel3iHy;e,na;!ly;l3n8;da;aUba,eOiLlJma,ta,yH;a,c3sH;a,on,sa;iHys0K;e,s0J;a,cIna,sHza;a,ha,on,sa;e,ia;c3is5jaJna,ssaJxH;aHia;!nd4;nd4;ra;ia;i0nIyH;ah,na;a,is,naE;c5da,leDmMnslLsH;haElH;inHyX;g,n;!h;ey;ee;en;at5g2nH;es;ie;ha;aWdiTelMrH;eJiH;anMenH;a,e,ne;an0;na;aLeKiIyH;nn;a,n1;a,e;!ne;!iH;de;e,lCsH;on;yn;!lH;iAyn;ne;agaKbIiH;!gaJ;ey,i7y;!e;il;ah|Person\xA6a01bZcTdQeOfMgJhHinez,jFkEleDmAnettPo9p7r4s3t2uncle,v0womL;a0irgin maH;lentino rossi,n go3;heresa may,iger woods,yra banks;addam hussaQcarlett johanssRistZlobodan milosevic,omeone,tepGuC;ay romano,eese witherspoQo1ush limbau0;gh;d stewart,naldinho,sario;a0ipV;lmUris hiltM;prah winfrOra;an,essiaen,itt romnNo0ubarek;m0thR;!my;bron james,e;anye west,iefer sutherland,obe bryaN;aime,effersFk rowli0;ng;alle ber0ulk hog3;ry;astBentlem1irl,rand0uy;fa2mo2;an;a0ella;thF;ff0meril lagasse,zekiel;ie;a0enzel washingt4ick wolf,ude;d0lt3nte;!dy;ar2lint1ous0ruz;in;on;dinal wols1son0;! palm5;ey;arack obama,oy,ro0;!ck,th2;dolf hitl1shton kutch1u0;nt;er|WeekDay\xA6fri4mon4s2t1wed0;!nesd4;hurs2ues2;at0un1;!urd1;!d0;ay0;!s|Date\xA6autumn,daylight9eom,one d8s5t2w0yesterd8;eek0int5;d6end;mr1o0;d4morrow;!w;ome 1tandard3umm0;er;d0point;ay; time|Time\xA6a6breakfast 5dinner5e3lunch5m2n0oclock,some5to7;i7o0;on,w;id4or1;od,ve0;ning;time;fternoon,go,ll day,t 0;ni0;ght|Holiday\xA60:1Q;1:1P;a1Fb1Bc12d0Ye0Of0Kg0Hh0Di09june07kwanzaa,l04m00nYoVpRrPsFt9v6w4xm03y2;om 2ule;hasho16kippur;hit2int0Xomens equalit8; 0Ss0T;alentines3e2ictor1E;r1Bteran1;! 0;-0ax 0h6isha bav,rinityMu2; b3rke2;y 0;ish2she2;vat;a0Xe prophets birth0;a6eptember14h4imchat tor0Ut 3u2;kk4mmer T;a8p7s6valentines day ;avu2mini atzeret;ot;int 2mhain;a4p3s2valentine1;tephen1;atrick1;ndrew1;amadan,ememberanc0Yos2;a park1h hashana;a3entecost,reside0Zur2;im,ple heart 0;lm2ssovE; s04;rthodox 2stara;christma1easter2goOhoJn0C;! m07;ational 2ew years09;freedom 0nurse1;a2emorial 0lHoOuharram;bMr2undy thurs0;ch0Hdi gr2tin luther k0B;as;a2itRughnassadh;bour 0g baom2ilat al-qadr;er; 2teenth;soliU;d aJmbolc,n2sra and miraj;augurGd2;ependen2igenous people1;c0Bt1;a3o2;ly satur0;lloween,nukkUrvey mil2;k 0;o3r2;ito de dolores,oundhoW;odW;a4east of 2;our lady of guadalupe,the immaculate concepti2;on;ther1;aster8id 3lectYmancip2piphany;atX;al-3u2;l-f3;ad3f2;itr;ha;! 2;m8s2;un0;ay of the dead,ecemb3i2;a de muertos,eciseis de septiembre,wali;er sol2;stice;anad8h4inco de mayo,o3yber m2;on0;lumbu1mmonwealth 0rpus christi;anuk4inese n3ristmas2;! N;ew year;ah;a 0ian tha2;nksgiving;astillCeltaine,lack4ox2;in2;g 0; fri0;dvent,ll 9pril fools,rmistic8s6u2;stral4tum2;nal2; equinox;ia 0;cens2h wednes0sumption of mary;ion 0;e 0;hallows 6s2;ai2oul1t1;nt1;s 0;day;eve|Month\xA6aBdec9feb7j2mar,nov9oct1sep0;!t8;!o8;an3u0;l1n0;!e;!y;!u1;!ru0;ary;!em0;ber;pr1ug0;!ust;!il|Duration\xA6centur4d2hour3m0seconds,week3year3;i0onth2;llisecond1nute1;ay0ecade0;!s;ies,y|FirstName\xA6aEblair,cCdevBj8k6lashawn,m3nelly,re2sh0;ay,e0iloh;a,lby;g1ne;ar1el,org0;an;ion,lo;as8e0;ls7nyatta,rry;am0ess1;ie,m0;ie;an,on;as0heyenne;ey,sidy;lexis,ndra,ubr0;ey|LastName\xA60:35;1:3C;2:3A;3:2Z;4:2F;a3Bb31c2Od2Ee2Bf25g1Zh1Oi1Jj1Dk16l0Ym0Mn0Io0Fp04rXsLtGvEwBxAy7zh5;a5ou,u;ng,o;a5eun2Uoshi1Jun;ma5ng;da,guc1Zmo27sh21zaQ;iao,u;a6eb0il5o3right,u;li3Bs2;gn0lk0ng,tanabe;a5ivaldi;ssilj37zqu1;a8h7i2Go6r5sui,urn0;an,ynisI;lst0Orr1Uth;at1Uomps2;kah0Unaka,ylor;aDchCeBhimizu,iAmi9o8t6u5zabo;ar1lliv2AzuD;a5ein0;l23rm0;sa,u3;rn4th;lva,mmo24ngh;mjon4rrano;midt,neid0ulz;ito,n6sa5to;ki;ch1dKtos,z;amAeag1Zi8o6u5;bio,iz,sC;b5dri1MgHj0Sme24osevelt,sZux;erts,ins2;c5ve0E;ci,hards2;ir1os;aDe9h7ic5ow20;as5hl0;so;a5illips;m,n1T;ders20et7r6t5;e0Nr4;ez,ry;ers;h21rk0t5vl4;el,te0J;baAg0Alivei00r5;t5w1O;ega,iz;a5eils2guy1Rix2owak,ym1E;gy,ka5var1K;ji5muV;ma;aDeBiAo7u5;ll0n5rr0Bssolini,\xF15;oz;lina,oJr5zart;al0Me5r0U;au,no;hhail4ll0;rci0s5y0;si;eVmmad4r5tsu07;in5tin1;!o;aBe7i5op1uo;!n5u;coln,dholm;fe6n0Qr5w0J;oy;bv5v5;re;mmy,rs14u;aAennedy,imu9le0Lo7u6wo5;k,n;mar,znets4;bay5vacs;asY;ra;hn,rl8to,ur,zl4;a9en8ha3imen1o5u3;h5nYu3;an5ns2;ss2;ki0Es0S;cks2nsse0D;glesi8ke7noue,shik6to,vano5;u,v;awa;da;as;aBe8it7o6u5;!a3b0ghNynh;a3ffmann,rvat;chcock,l0;mingw6nde5rM;rs2;ay;ns0ErrPs6y5;asCes;an4hi5;moI;a8il,o7r6u5;o,tierr1;ayli3ub0;m1nzal1;nd5o,rcia;hi;er9is8lor7o6uj5;ita;st0urni0;es;ch0;nand1;d6insteGsposi5vaK;to;is2wards;aBeAi8omin7u5;bo5rand;is;gu1;az,mitr4;ov;lgado,vi;nkula,rw6vi5;es,s;in;aEhAlark9o5;hKl5op0rbyn,x;em6li5;ns;an;!e;an7e6iu,o5ristensFu3we;i,ng,u3w,y;!n,on5u3;!g;mpb6rt0st5;ro;ell;aAe7ha3lanco,oyko,r5yrne;ooks,yant;ng;ck6ethov5nnett;en;er,ham;ch,h7iley,rn5;es,i0;er;k,ng;dCl8nd5;ers5r9;en,on,s2;on;eks6iy7var1;ez;ej5;ev;ams|MaleName\xA60:CE;1:BK;2:C2;3:BS;4:B4;5:BZ;6:AT;7:9V;8:BC;9:AW;A:AO;B:8W;aB5bA9c98d88e7Hf6Zg6Hh5Wi5Ij4Lk4Bl3Rm2Pn2Eo28p22qu20r1As0Qt07u06v01wOxavi3yHzC;aCor0;cCh8Jne;hDkC;!a5Z;ar51e5Y;ass2i,oDuC;sEu25;nFsEusC;oCsD;uf;ef;at0g;aKeIiDoCyaAQ;lfgang,odrow;lCn1O;bEey,frBJlC;aA6iC;am,e,s;e8Aur;i,nde7sC;!l6t1;de,lDrr5yC;l1ne;lCt3;a94y;aFern1iC;cDha0nceCrg9Cva0;!nt;ente,t5B;lentin49n8Zughn;lyss4Msm0;aTeOhLiJoFrDyC;!l3ro8s1;av9ReCist0oy,um0;nt9Jv55y;bEd7YmCny;!as,mCoharu;aAYie,y;iBy;mCt9;!my,othy;adDeoCia7EomB;!do7O;!de9;dFrC;en8JrC;an8IeCy;ll,n8H;!dy;dgh,ic9Unn3req,ts46;aScotQeOhKiIoGpenc3tCur1Pylve8Jzym1;anEeCua7D;f0phAGvCwa7C;e59ie;!islaw,l6;lom1nA4uC;leyma8ta;dClBm1;!n6;aEeC;lCrm0;d1t1;h6Une,qu0Vun,wn,y8;aCbasti0k1Yl42rg41th,ymo9J;m9n;!tC;!ie,y;lDmCnti22q4Kul;!mAu4;ik,vato6X;aXeThe94iPoGuDyC;an,ou;b6NdDf9pe6SssC;!elAK;ol2Vy;an,bJcIdHel,geGh0landA4mFnEry,sDyC;!ce;coe,s;!a96nA;an,eo;l3Kr;e4Sg3n6oA5ri6A;co,ky;bAe9V;cCl6;ar5Qc5PhDkCo;!ey,ie,y;a87ie;gDid,ub5x,yCza;ansh,nT;g8XiC;na8Ts;ch60fa4lEmDndCpha4sh6Wul,ymo72;alA0ol2Cy;i9Jon;f,ph;ent2inC;cy,t1;aGeEhilDier64ol,reC;st1;!ip,lip;d9Crcy,tC;ar,e2W;b3Udra6Ht46ul;ctav2Wliv3m97rGsDtCum8Vw5;is,to;aDc8TvC;al54;ma;i,l4BvK;athKeIiEoC;aCel,l0ma0r2Y;h,m;cDg4i3KkC;h6Wola;holBkColB;!olB;al,d,il,ls1vC;il52;anCy;!a4i4;aXeUiLoGuDyC;l22r1;hamDr61staC;fa,p4I;ed,mG;dibo,e,hamEis1YntDsCussa;es,he;e,y;ad,ed,mC;ad,ed;cHgu4kFlEnDtchC;!e7;a7Aik;o04t1;e,olC;aj;ah,hCk6;a4eC;al,l;hDlv2rC;le,ri7v2;di,met;ck,hOlMmPnu4rIs1tEuricDxC;!imilian87we7;e,io;eo,hDiBtC;!eo,hew,ia;eCis;us,w;cEio,k81lDqu6Isha7tCv2;i2Jy;in,on;!el,oLus;achCcolm,ik;ai,y;amCdi,moud;adC;ou;aSeOiNlo2ToJuDyC;le,nd1;cFiEkCth3;aCe;!s;gi,s;as,iaC;no;g0nn6SrenEuCwe7;!iC;e,s;!zo;am,on4;a7Cevi,la4UnEoCst3vi;!nC;!a62el;!ny;mDnCr16ur4Vwr4V;ce,d1;ar,o4P;aJeEhaled,iCrist4Xu4Ay3D;er0p,rC;by,k,ollos;en0iFnCrmit,v2;!dDnCt5E;e10y;a7ri4P;r,th;na69rCthem;im,l;aZeRiPoEuC;an,liCst2;an,o,us;aqu2eKhnJnHrFsC;eDhCi7Due;!ua;!ph;dCge;an,i,on;!aCny;h,s,th4Z;!ath4Yie,nA;!l,sCy;ph;an,e,mC;!mA;d,ffHrEsC;sCus;!e;a5KemDmai8oCry;me,ni0Q;i6Wy;!e07rC;ey,y;cId5kHmGrEsDvi3yC;!d5s1;on,p3;ed,od,rCv4O;e51od;al,es,is1;e,ob,ub;k,ob,quC;es;aObrahNchika,gLkeKlija,nuJrHsEtCv0;ai,sC;uki;aCha0i6Hma4sac;ac,iaC;h,s;a,vinCw2;!g;k,nngu53;!r;nacCor;io;im;in,n;aLeGina4WoEuCyd57;be27gCmber4EsE;h,o;m3ra35sCwa3Z;se2;aFctEitEnDrC;be22m0;ry;or;th;bLlKmza,nJo,rEsDyC;a44d5;an,s0;lFo4FrEuCv6;hi41ki,tC;a,o;is1y;an,ey;k,s;!im;ib;aReNiMlenLoJrFuC;illerDsC;!tavo;mo;aEegCov3;!g,orC;io,y;dy,h58nt;nzaCrd1;lo;!n;lbe4Qno,ovan4S;ne,oErC;aCry;ld,rd4O;ffr6rge;bri4l5rCv2;la20r3Fth,y;aSeOiMlKorr0JrC;anEedCitz;!dAeCri25;ri24;cEkC;!ie,lC;in,yn;esKisC;!co,zek;etch3oC;yd;d4lConn;ip;deriEliDng,rnC;an02;pe,x;co;bi0di;ar00dVfrUit0lOmHnGo2rDsteb0th0uge8vCym5zra;an,ere2W;gi,iDnCrol,v2w2;est3Zie;c08k;och,rique,zo;aHerGiDmC;aGe2Q;lDrC;!h0;!io;s1y;nu4;be0Ad1iFliEmDt1viCwood;n,s;er,o;ot1Us;!as,j44sC;ha;a2en;!dAg32mFuDwC;a26in;arC;do;o0Tu0T;l,nC;est;aZePiMoFrEuDwCyl0;ay8ight;a8dl6nc0st2;ag0ew;minGnEri0ugDyC;le;!lB;!a29nCov0;e7ie,y;go,icC;!k;armuDeCll1on,rk;go;id;anJj0lbeImetri9nGon,rFsEvDwCxt3;ay8ey;en,in;hawn,mo09;ek,ri0G;is,nCv3;is,y;rt;!dC;re;lLmJnIrEvC;e,iC;!d;en,iEne7rCyl;eCin,yl;l2Wn;n,o,us;!e,i4ny;iCon;an,en,on;e,lB;as;a07e05hXiar0lMoHrFuDyrC;il,us;rtC;!is;aCistobal;ig;dy,lFnDrC;ey,neli9y;or,rC;ad;by,e,in,l2t1;aHeEiCyJ;fCnt;fo0Dt1;meDt9velaC;nd;nt;rEuDyC;!t1;de;enC;ce;aGeFrisDuC;ck;!tC;i0oph3;st3;d,rlCs;eCie;s,y;cCdric,s11;il;lFmer1rC;ey,lDro7y;ll;!os,t1;eb,v2;ar03eVilUlaToQrDuCyr1;ddy,rtJ;aKeFiEuDyC;an,ce,on;ce,no;an,ce;nDtC;!t;dDtC;!on;an,on;dDndC;en,on;!foCl6y;rd;bDrCyd;is;!by;i8ke;al,lA;nGrCshoi;at,nDtC;!r11;aCie;rd0M;!edict,iDjam2nA;ie,y;to;n6rCt;eCy;tt;ey;ar0Yb0Od0Kgust2hm0Hid5ja0FlZmXnPputsiOrFsaEuCya0ziz;gust9st2;us;hi;aJchIi4jun,maGnEon,tCy0;hCu07;ur;av,oC;ld;an,nd05;el;ie;ta;aq;dHgel00tC;hoFoC;i8nC;!iXy;ne;ny;reCy;!as,s,w;ir,mCos;ar;an,bePd5eJfGi,lFonEphonIt1vC;aNin;on;so,zo;an,en;onDrC;edK;so;c,jaFksandEssaFxC;!and3;er;ar,er;ndC;ro;rtC;!o;ni;en;ad,eC;d,t;in;aDoCri0vik;lfo;mCn;!a;dGeFraDuC;!bakr,lfazl;hCm;am;!l;allFel,oulaye,ulC;!lDrahm0;an;ah,o;ah;av,on|Verb\xA6awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en|PhrasalVerb\xA60:71;1:6P;2:7D;3:73;4:6I;5:7G;6:75;7:6O;8:6B;9:6C;A:5H;B:70;C:6Z;a7Gb62c5Cd59e57f45g3Nh37iron0j33k2Yl2Km2Bn29o27p1Pr1Es09tQuOvacuum 1wGyammerCzD;eroAip EonD;e0k0;by,up;aJeGhFiEorDrit52;d 1k2Q;mp0n49pe0r8s8;eel Bip 7K;aEiD;gh 06rd0;n Br 3C;it 5Jk8lk6rm 0Qsh 73t66v4O;rgeCsD;e 9herA;aRePhNiJoHrFuDype 0N;ckArn D;d2in,o3Fup;ade YiDot0y 32;ckle67p 79;ne66p Ds4C;d2o6Kup;ck FdEe Dgh5Sme0p o0Dre0;aw3ba4d2in,up;e5Jy 1;by,o6U;ink Drow 5U;ba4ov7up;aDe 4Hll4N;m 1r W;ckCke Elk D;ov7u4N;aDba4d2in,o30up;ba4ft7p4Sw3;a0Gc0Fe09h05i02lYmXnWoVpSquare RtJuHwD;earFiD;ngEtch D;aw3ba4o6O; by;ck Dit 1m 1ss0;in,up;aIe0RiHoFrD;aigh1LiD;ke 5Xn2X;p Drm1O;by,in,o6A;n2Yr 1tc3H;c2Xmp0nd Dr6Gve6y 1;ba4d2up;d2o66up;ar2Uell0ill4TlErDurC;ingCuc8;a32it 3T;be4Brt0;ap 4Dow B;ash 4Yoke0;eep EiDow 9;c3Mp 1;in,oD;ff,v7;gn Eng2Yt Dz8;d2o5up;in,o5up;aFoDu4E;ot Dut0w 5W;aw3ba4f36o5Q;c2EdeAk4Rve6;e Hll0nd GtD; Dtl42;d2in,o5upD;!on;aw3ba4d2in,o1Xup;o5to;al4Kout0rap4K;il6v8;at0eKiJoGuD;b 4Dle0n Dstl8;aDba4d2in52o3Ft2Zu3D;c1Ww3;ot EuD;g2Jnd6;a1Wf2Qo5;ng 4Np6;aDel6inAnt0;c4Xd D;o2Su0C;aQePiOlMoKrHsyc29uD;ll Ft D;aDba4d2in,o1Gt33up;p38w3;ap37d2in,o5t31up;attleCess EiGoD;p 1;ah1Gon;iDp 52re3Lur44wer 52;nt0;ay3YuD;gAmp 9;ck 52g0leCn 9p3V;el 46ncilA;c3Oir 2Hn0ss FtEy D;ba4o4Q; d2c1X;aw3ba4o11;pDw3J;e3It B;arrow3Serd0oD;d6te3R;aJeHiGoEuD;ddl8ll36;c16p 1uth6ve D;al3Ad2in,o5up;ss0x 1;asur8lt 9ss D;a19up;ke Dn 9r2Zs1Kx0;do,o3Xup;aOeMiHoDuck0;a16c36g 0AoDse0;k Dse34;aft7ba4d2forw2Ain3Vov7uD;nd7p;e GghtFnEsDv1T;ten 4D;e 1k 1; 1e2Y;ar43d2;av1Ht 2YvelD; o3L;p 1sh DtchCugh6y1U;in3Lo5;eEick6nock D;d2o3H;eDyA;l2Hp D;aw3ba4d2fSin,o05to,up;aFoEuD;ic8mpA;ke2St2W;c31zz 1;aPeKiHoEuD;nker2Ts0U;lDneArse2O;d De 1;ba4d2oZup;de Et D;ba4on,up;aw3o5;aDlp0;d Fr Dt 1;fDof;rom;in,oO;cZm 1nDve it;d Dg 27kerF;d2in,o5;aReLive Jloss1VoFrEunD; f0M;in39ow 23; Dof 0U;aEb17it,oDr35t0Ou12;ff,n,v7;bo5ft7hJw3;aw3ba4d2in,oDup,w3;ff,n,ut;a17ek0t D;aEb11d2oDr2Zup;ff,n,ut,v7;cEhDl1Pr2Xt,w3;ead;ross;d aEnD;g 1;bo5;a08e01iRlNoJrFuD;cDel 1;k 1;eEighten DownCy 1;aw3o2L;eDshe1G; 1z8;lFol D;aDwi19;bo5r2I;d 9;aEeDip0;sh0;g 9ke0mDrD;e 2K;gLlJnHrFsEzzD;le0;h 2H;e Dm 1;aw3ba4up;d0isD;h 1;e Dl 11;aw3fI;ht ba4ure0;eInEsD;s 1;cFd D;fDo1X;or;e B;dQl 1;cHll Drm0t0O;apYbFd2in,oEtD;hrough;ff,ut,v7;a4ehi1S;e E;at0dge0nd Dy8;o1Mup;o09rD;ess 9op D;aw3bNin,o15;aShPlean 9oDross But 0T;me FoEuntD; o1M;k 1l6;aJbIforGin,oFtEuD;nd7;ogeth7;ut,v7;th,wD;ard;a4y;pDr19w3;art;eDipA;ck BeD;r 1;lJncel0rGsFtch EveA; in;o16up;h Bt6;ry EvD;e V;aw3o12;l Dm02;aDba4d2o10up;r0Vw3;a0He08l01oSrHuD;bbleFcklTilZlEndlTrn 05tDy 10zz6;t B;k 9; ov7;anMeaKiDush6;ghHng D;aEba4d2forDin,o5up;th;bo5lDr0Lw3;ong;teD;n 1;k D;d2in,o5up;ch0;arKgJil 9n8oGssFttlEunce Dx B;aw3ba4;e 9; ar0B;k Bt 1;e 1;d2up; d2;d 1;aIeed0oDurt0;cFw D;aw3ba4d2o5up;ck;k D;in,oK;ck0nk0st6; oJaGef 1nd D;d2ov7up;er;up;r0t D;d2in,oDup;ff,ut;ff,nD;to;ck Jil0nFrgEsD;h B;ainCe B;g BkC; on;in,o5; o5;aw3d2o5up;ay;cMdIsk Fuction6; oD;ff;arDo5;ouD;nd;d D;d2oDup;ff,n;own;t D;o5up;ut|Modal\xA6c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to;ay,ight,ust;an,o0;uld|Adjective\xA60:73;1:7I;2:7O;3:7H;4:7A;5:5A;6:4Q;7:48;8:47;9:7F;A:5Z;B:71;C:6Y;D:6X;E:5V;a6Hb63c5Pd55e4Rf48g40h3Pi34j32k31l2Qm2Fn26o1Qp1Aquack,r10s0Gt09uQvNwFyear5;arp0eJholeIiHoF;man5oFu6A;d6Czy;despr73s5E;!sa7;eGlFste25;co1Hl o4J;!k5;aGiFola4A;b7Rce versa,ol53;ca2gabo61nilla;ltWnJpGrb58su4tterF;!moD; f33b1NpGsFti1G;ca7et,ide dMtairs;er,i3M;aPbeco6Pconvin26deMeLfair,ivers4knKprecedYrIsGwF;iel1Zritt5X;i1UuF;pervis0specti3;eFu5;cognLgul6Fl6F;own;ndi3v5Rxpect0;cid0rF;!grou5MsF;iz0tood;b7ppeaLssu6EuthorF;iz0;i23ra;aJeHhough4NoGrF;i1oubl0;geth6p,rpC;en5OlFm4Yrr2Tst0;li3;boo,lFn;ent0;aXcWeUhTiRmug,nobbi3DoPpOqueami3DtJuFymb62;bHi gener53pFrprisi3;erFre0K;! dup6b,i28;du0seq4S;anda6SeIi0OrFy37;aightFip0; fFfF;or59;adfaDreotyp0;aEec2Fir1IlendCot on; call0le,mb6phist1WrFu0Wvi40;dCry;gnifica2nF;ceEg7;am2Oe6ocki3ut;cFda1em5lfi2Xni1Vpa67re8;o1Fr3U;at56ient27reec56;cr0me,ns serif;aMeIiGoF;buDtt4SuSy4;ghtFv4;!-28fA;ar,bel,condi1du61fres50lHpublic3UsFtard0;is46oF;lu1na2;e1Duc44;bCciF;al,st;aPeNicayu8lacCopuliDrGuF;bl58mp0;eJiGoF;!b09fuBmi30p6;mGor,sFva1;ti8;a4Ue;ciBmF;a0Hi5I;ac20rFti1;fe9ma2Tplexi3v33;rFst;allelHtF;-tiFi4;me;!ed;bQffOkNld fashion0nMpLrg1Hth6utKvF;al,erF;!aHniGt,wF;eiFrouF;ght;ll;do0Ver,g2Lsi45;en,posi1; boa5Fg2Jli8;!ay; gua5DbFli8;eat;eHsF;cFer0Hole1;e8uE;d2Sse;ak0eMiLoFua4O;nJrGtF;ab7;thF;!eF;rn;chala2descri4Zstop;ght5;arby,cessa3Wighbor5xt;aNeLiIoFultip7;bi7derGlFnth5ot,st;dy;a1n;nFx0;iaFor;tuE;di4EnaFre;ci3;cFgenta,in,j03keshift,le,mmoth,ny,sculi8;abEho;aOeJiGoFu13;uti12vi3;mGteraF;l,te;it0;ftIgFth4;al,eGitiF;ma1;nda3C;!-0C;nguCst,tt6;ap1Sind5no0A;agg0uF;niOstifi0veni7;de4gno4Blleg4mSnHpso 1VrF;a1releF;va2; NaMbr0corLdJfluenTiTnIsHtF;a9enBoxF;ic36;a8i2R;a1er,oce2;iGoF;or;re9;deq3Jppr2Y;fFsitu,vitro;ro2;mJpF;arHerfe9oFrop6;li1rtF;a2ed;ti4;eFi0Q;d2QnB;aKelJiHoFumdr3B;neDok0rrFs07ur5;if2S;ghfalut1OspF;an2Q;liZpfA;lInHrF;d05roF;wi3;dy,gi3;f,low0;ainfAener2Jiga22lLoKraHuF;ilFng ho;ty;cGtF;efAis;efA;ne,od;ea2Dob4;aUeOinNlMoHrF;a1TeFoz1K;e2Dq12tfA;oHrF; keeps,eFm6tuna1;g04ign;liF;sh;ag2Zue2;al,i1;dJmGrF;ti7;a7ini8;ne;le; up;bl0i2lBr Fux,vori1;oFreac1F;ff;aOfficie2lNmiMnKre9there4veJxF;a9cess,peHtraGuF;be2Ml0I;!va1E;ct0rt;n,ryday; Fcouragi3tiE;rou1sui1;ne2;abo23dQe18i1;g6sF;t,ygF;oi3;er;aVeNiHoFrea15ue;mina2ne,ubF;le,tfA;dact1Bfficu1OsGvF;erB;creHeas0gruntl0honeDordGtF;a2ress0;er5;et; LadpKfJgene1PliHrang0spe1PtGvoF;ut;ail0ermin0;be1Mca1ghF;tfA;ia2;an;facto;i5magFngeroZs0I;ed,i3;ly;ertaRhief,ivil,oHrF;aFowd0u0H;mp0v02z0;loNmLnGoi3rrFve0P;e9u1I;cre1grIsHtF;emFra0F;po0D;ta2;ue2;mer08pleF;te,x;ni4ss4;in;aPeLizarElJoGrF;and new,isk,okP;gGna fiWttom,urgeoF;is;us;ank,iI;re;autifAhiGlov0nFst,yoG;eVt;nd;ul;ckGnkru0XrrF;en;!wards; priori,b0Nc0Kd0AfraCg05h04lZma06ntiquYpUrOsMttracti07utheLvIwF;aGkF;wa0U;ke,re;ant garGerF;age;de;ntV;leep,tonisF;hi3;ab,bitIroHtiF;fiF;ci4;ga2;raF;ry;pFt;are2etiPrF;oprF;ia1;at0;arIcohGeFiMl,oof;rt;olF;ic;mi3;ead;ainDgressiGoniF;zi3;ve;st;id; MeKuJvF;aGerB;se;nc0;ed;lt;pt,qF;ua1;hoc,infinitF;um;cuGtu4u1;al;ra1;erPlOoMruLsGuF;nda2;e2oGtra9;ct;lu1rbi3;ng;te;pt;aFve;rd;aze,e;ra2;nt|Comparable\xA60:41;1:4I;2:45;3:4B;4:3X;5:2Y;a4Ob44c3Od3De35f2Rg2Fh24i1Vj1Uk1Rl1Im1Cn16o14p0Tqu0Rr0IsRtKuIvFw7y6za12;ell27ou3;aBe9hi1Yi7r6;o3y;ck0Mde,l6n1ry,se;d,y;a6i4Mt;k,ry;n1Tr6sI;m,y;a7e6ulgar;nge4rda2xi3;gue,in,st;g0n6pco3Mse4;like0ti1;aAen9hi8i7ough,r6;anqu2Qen1ue;dy,g3Ume0ny,r09;ck,n,rs2R;d42se;ll,me,rt,s6wd47;te4;aVcarUeThRiQkin0GlMmKoHpGqua1HtAu7w6;eet,ift;b7dd15per0Hr6;e,re2J;sta2Ht5;aAe9iff,r7u6;pXr1;a6ict,o3;ig3Hn0W;a1ep,rn;le,rk;e24i3Hright0;ci2Aft,l7o6re,ur;n,thi3;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g37m6;!y;ek,nd3F;ck,l0mp5;a6iUort,rill,y;dy,ll0Zrp;cu0Tve0Txy;ce,ed,y;d,fe,int0l1Xv16;aBe9i8o6ude;mantic,o1Ksy,u6;gh,nd;ch,pe,tzy;a6d,mo0J;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aFhoEi1SlCoBr8u6;ny,r6;e,p5;egna2ic7o6;fou00ud;ey,k0;li06or,te1D;a6easa2;in,nt;ny;in4le;dd,f6i0ld,ranR;fi11;aAe8i7o6;b5isy,rm16sy;ce,mb5;a6w;r,t;ive,rr02;aAe8ild,o7u6;nda1Ate;ist,o1;a6ek,llY;n,s0ty;d,tuR;aCeBi9o6ucky;f0Vn7o1Eu6ve0w18y0U;d,sy;e0g;g1Uke0tt5v6;e0i3;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti3;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b5id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te4;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t5uiY;u1y;aIeeb5iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get4mG;my;erce8n6rm,t;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi3;gey,lm8r6;e4i3;ful;!i3;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i3;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd|Adverb\xA6a07by 05d01eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,w0Bye0;p,s; to,wards5;h1o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hXtimes,w07;a1e0;alS;ndomRthN;ar excellDer0oint blank; Mhaps;f3n0;ce0ly;! 0;ag00moU; courHten;ewJo0; longEt 0;onHwithstanding;aybe,eanwhiAore0;!ovB;! aboS;deed,steT;en0;ce;or2u0;l9rther0;!moH; 0ev3;examp0good,suF;le;n mas1v0;er;se;e0irect1; 1finite0;ly;ju7trop;far,n0;ow; CbroBd nauseam,gAl5ny2part,side,t 0w3;be5l0mo5wor5;arge,ea4;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori|Expression\xA6a02b01dXeVfuck,gShLlImHnGoDpBshAu7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la|Preposition\xA6'o,-,aKbHcGdFexcept,fEinDmidPnotwithstandiQoBpRqua,sAt6u3vi2w0;/o,hereMith0;!in,oQ;a,s-a-vis;n1p0;!on;like,til;h0ill,owards;an,r0;ough0u;!oI;ans,ince,o that;',f0n1ut;!f;!to;or,rom;espite,own,u3;hez,irca;ar1e0oAy;low,sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut|Conjunction\xA6aEbAcuz,how8in caDno7o6p4supposing,t1vers5wh0yet;eth8ile;h0o;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh|Determiner\xA6aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0nough,very;!se;ch;e0u;!s;!n0;!o0y;th0;er\",\"conjugations\":\"t:ake,ook,,,aken|:can,could,can,_|free:_,,,ing|puk:e,,,ing|ar:ise,ose,,,isen|babys:it,at|:be,was,is,am,been|:is,was,is,being|beat:_,,,ing,en|beg:in,an,,inning,un|ban:_,ned,,ning|bet:_,,,,_|bit:e,_,,ing,ten|ble:ed,d,,,d|bre:ed,d|br:ing,ought,,,ought|broadcast:_,_|buil:d,t,,,t|b:uy,ought,,,ought|cho:ose,se,,osing,sen|cost:_,_|deal:_,t,,,t|d:ie,ied,,ying|d:ig,ug,,igging,ug|dr:aw,ew,,,awn|dr:ink,ank,,,unk|dr:ive,ove,,iving,iven|:eat,ate,,eating,eaten|f:all,ell,,,allen|fe:ed,d,,,d|fe:el,lt|f:ight,ought,,,ought|f:ind,ound|fl:y,ew,,,own|bl:ow,ew,,,own|forb:id,ade|edit:_,,,ing|forg:et,ot,,eting,otten|forg:ive,ave,,iving,iven|fr:eeze,oze,,eezing,ozen|g:et,ot|g:ive,ave,,iving,iven|:go,went,goes,,gone|h:ang,ung,,,ung|ha:ve,d,s,ving,d|hear:_,d,,,d|hid:e,_,,,den|h:old,eld,,,eld|hurt:_,_,,,_|la:y,id,,,id|le:ad,d,,,d|le:ave,ft,,,ft|l:ie,ay,,ying|li:ght,t,,,t|los:e,t,,ing|ma:ke,de,,,de|mean:_,t,,,t|me:et,t,,eting,t|pa:y,id,,,id|read:_,_,,,_|r:ing,ang,,,ung|r:ise,ose,,ising,isen|r:un,an,,unning,un|sa:y,id,ys,,id|s:ee,aw,,eeing,een|s:ell,old,,,old|sh:ine,one,,,one|sho:ot,t,,,t|show:_,ed|s:ing,ang,,,ung|s:ink,ank|s:it,at|slid:e,_,,,_|sp:eak,oke,,,oken|sp:in,un,,inning,un|st:and,ood|st:eal,ole|st:ick,uck|st:ing,ung|:stream,,,,|str:ike,uck,,iking|sw:ear,ore|sw:im,am,,imming|sw:ing,ung|t:each,aught,eaches|t:ear,ore|t:ell,old|th:ink,ought|underst:and,ood|w:ake,oke|w:ear,ore|w:in,on,,inning|withdr:aw,ew|wr:ite,ote,,iting,itten|t:ie,ied,,ying|ski:_,ied|:boil,,,,|miss:_,,_|:act,,,,|compet:e,ed,,ing|:being,were,are,are|impl:y,ied,ies|ic:e,ed,,ing|develop:_,ed,,ing|wait:_,ed,,ing|aim:_,ed,,ing|spil:l,t,,,led|drop:_,ped,,ping|log:_,ged,,ging|rub:_,bed,,bing|smash:_,,es|egg:_,ed|suit:_,ed,,ing|age:_,d,s,ing|shed:_,_,s,ding|br:eak,oke|ca:tch,ught|d:o,id,oes|b:ind,ound|spread:_,_|become:_,,,,_|ben:d,,,,t|br:ake,,,,oken|burn:_,,,,ed|burst:_,,,,_|cl:ing,,,,ung|c:ome,ame,,,ome|cre:ep,,,,pt|cut:_,,,,_|dive:_,,,,d|dream:_,,,,t|fle:e,,,eing,d|fl:ing,,,,ung|got:_,,,,ten|grow:_,,,,n|hit:_,,,,_|ke:ep,,,,pt|kne:el,,,,lt|know:_,,,,n|leap:_,,,,t|len:d,,,,t|lo:ose,,,,st|prove:_,,,,n|put:_,,,,_|quit:_,,,,_|rid:e,,,,den|s:eek,,,,ought|sen:d,,,,t|set:_,,,,_|sew:_,,,,n|shake:_,,,,n|shave:_,,,,d|shut:_,,,,_|s:eat,,,,at|sla:y,,,,in|sle:ep,,,,pt|sn:eak,,,,uck|spe:ed,,,,d|spen:d,,,,t|sp:it,,,,at|split:_,,,,_|spr:ing,,,,ung|st:ink,unk,,,unk|strew:_,,,,n|sw:are,,,,orn|swe:ep,,,,pt|thrive:_,,,,d|undergo:_,,,,ne|upset:_,,,,_|w:eave,,,,oven|we:ep,,,,pt|w:ind,,,,ound|wr:ing,,,,ung\",\"plurals\":\"addend|um|a,alga|e,alumna|e,alumn|us|i,appendi|x|ces,avocado|s,bacill|us|i,barracks|,beau|x,bus|es,cact|us|i,chateau|x,analys|is|es,diagnos|is|es,parenthes|is|es,prognos|is|es,synops|is|es,thes|is|es,child|ren,circus|es,clothes|,corp|us|ora,criteri|on|a,curricul|um|a,database|s,deer|,echo|es,embargo|es,epoch|s,f|oot|eet,gen|us|era,g|oose|eese,halo|s,hippopotam|us|i,ind|ex|ices,larva|e,lea|f|ves,librett|o|i,loa|f|ves,m|an|en,matri|x|ces,memorand|um|a,modul|us|i,mosquito|es,move|s,op|us|era,ov|um|a,ox|en,pe|rson|ople,phenomen|on|a,quiz|zes,radi|us|i,referend|um|a,rodeo|s,sex|es,shoe|s,sombrero|s,stomach|s,syllab|us|i,tableau|x,thie|f|ves,t|ooth|eeth,tornado|s,tuxedo|s,zero|s\",\"patterns\":{\"Person\":[\"master of #Noun\",\"captain of the #Noun\"]},\"regex\":{\"HashTag\":[\"^#[a-z]+\"],\"Gerund\":[\"^[a-z]+n['\u2019]$\"],\"PhoneNumber\":[\"^[0-9]{3}-[0-9]{4}$\",\"^[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$\"],\"Time\":[\"^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$\",\"^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$\",\"^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$\",\"^[PMCE]ST$\",\"^utc ?[+-]?[0-9]+?$\",\"^[a-z0-9]*? o'?clock$\"],\"Date\":[\"^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$\",\"^[0-9]{1,4}/[0-9]{1,2}/[0-9]{1,4}$\"],\"Money\":[\"^[-+]?[$\u20AC\xA5\xA3][0-9]+(.[0-9]{1,2})?$\",\"^[-+]?[$\u20AC\xA5\xA3][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$\"],\"Value\":[\"^[-+]?[$\u20AC\xA5\xA3][0-9]+(.[0-9]{1,2})?$\",\"^[-+]?[$\u20AC\xA5\xA3][0-9]{1,3}(,[0-9]{3})+(.[0-9]{1,2})?$\",\"^[0-9.]{1,2}[-\u2013][0-9]{1,2}$\"],\"NumberRange\":[\"^[0-9.]{1,4}(st|nd|rd|th)?[-\u2013][0-9.]{1,4}(st|nd|rd|th)?$\",\"^[0-9.]{1,2}[-\u2013][0-9]{1,2}$\"],\"NiceNumber\":[\"^[-+]?[0-9.,]{1,3}(,[0-9.,]{3})+(.[0-9]+)?$\"],\"NumericValue\":[\"^[-+]?[0-9]+(.[0-9]+)?$\",\"^.?[0-9]+([0-9,.]+)?%$\"],\"Percent\":[\"^.?[0-9]+([0-9,.]+)?%$\"],\"Cardinal\":[\"^.?[0-9]+([0-9,.]+)?%$\"],\"Fraction\":[\"^[0-9]{1,4}/[0-9]{1,4}$\"],\"LastName\":[\"^ma?c'.*\",\"^o'[drlkn].*\"]}}";

},{}],209:[function(_dereq_,module,exports){
'use strict';

var conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js'); //extend our current irregular conjugations, overwrite if exists
//also, map the irregulars for easy infinitive lookup - {bought: 'buy'}


var addConjugations = function addConjugations(obj) {
  var _this = this;

  Object.keys(obj).forEach(function (inf) {
    _this.conjugations[inf] = _this.conjugations[inf] || {}; //add it to the lexicon

    _this.words[inf] = _this.words[inf] || 'Infinitive';
    Object.keys(obj[inf]).forEach(function (tag) {
      var word = obj[inf][tag]; //add this to our conjugations

      _this.conjugations[inf][tag] = word; //add it to the lexicon, too

      _this.words[word] = _this.words[word] || tag; //also denormalize to cache.toInfinitive

      _this.cache.toInfinitive[obj[inf][tag]] = inf;
    }); //guess the other conjugations

    var forms = conjugate(inf, _this);
    Object.keys(forms).forEach(function (k) {
      var word = forms[k];

      if (_this.words.hasOwnProperty(word) === false) {
        _this.words[word] = k;
      }
    });
  });
  return obj;
};

module.exports = addConjugations;

},{"../subset/verbs/methods/conjugate/faster.js":79}],210:[function(_dereq_,module,exports){
"use strict";

//
var addPatterns = function addPatterns(obj) {
  var _this = this;

  Object.keys(obj).forEach(function (k) {
    _this.patterns[k] = obj[k];
  });
  return obj;
};

module.exports = addPatterns;

},{}],211:[function(_dereq_,module,exports){
'use strict'; //put singular->plurals in world, the reverse in cache,
//and both forms in the lexicon

var addPlurals = function addPlurals(obj) {
  var _this = this;

  Object.keys(obj).forEach(function (sing) {
    var plur = obj[sing];
    _this.plurals[sing] = plur; //add them both to the lexicon

    _this.words[plur] = _this.words[plur] || 'Plural';
    _this.words[sing] = _this.words[sing] || 'Singular'; //denormalize them in cache.toPlural

    _this.cache.toSingular[plur] = sing;
  });
  return obj;
};

module.exports = addPlurals;

},{}],212:[function(_dereq_,module,exports){
"use strict";

//
var addRegex = function addRegex(obj) {
  var _this = this;

  Object.keys(obj).forEach(function (k) {
    _this.regex.push({
      reg: new RegExp(k, 'i'),
      tag: obj[k]
    });
  });
};

module.exports = addRegex;

},{}],213:[function(_dereq_,module,exports){
'use strict'; //add 'downward' tags (that immediately depend on this one)

var addDownword = _dereq_('../tags/addDownward'); //extend our known tagset with these new ones


var addTags = function addTags(tags) {
  var _this = this;

  Object.keys(tags).forEach(function (tag) {
    var obj = tags[tag];
    obj.notA = obj.notA || [];
    obj.downward = obj.downward || [];
    _this.tags[tag] = obj;
  });
  addDownword(this.tags);
  return tags;
};

module.exports = addTags;

},{"../tags/addDownward":135}],214:[function(_dereq_,module,exports){
'use strict';

var normalize = _dereq_('../term/methods/normalize/normalize').normalize;

var inflect = _dereq_('../subset/nouns/methods/pluralize');

var conjugate = _dereq_('../subset/verbs/methods/conjugate/faster.js');

var adjFns = _dereq_('../subset/adjectives/methods');

var wordReg = / /;

var cleanUp = function cleanUp(str) {
  str = normalize(str); //extra whitespace

  str = str.replace(/\s+/, ' '); //remove sentence-punctuaion too

  str = str.replace(/[.\?,;\!]/g, '');
  return str;
}; //


var addWords = function addWords(words) {
  var _this = this;

  //go through each word
  Object.keys(words).forEach(function (word) {
    var tag = words[word];
    word = cleanUp(word);
    _this.words[word] = tag; //add it to multi-word cache,

    if (wordReg.test(word) === true) {
      var arr = word.split(wordReg);
      _this.cache.firstWords[arr[0]] = true;
    } //turn singulars into plurals


    if (tag === 'Singular') {
      var plural = inflect(word, {});

      if (plural && plural !== word) {
        _this.words[plural] = 'Plural';
      }

      return;
    } //turn infinitives into all conjugations


    if (tag === 'Infinitive') {
      var conj = conjugate(word, _this);
      Object.keys(conj).forEach(function (k) {
        _this.words[conj[k]] = k;
      });
      return;
    } //phrasals like 'pull out' get conjugated too


    if (tag === 'PhrasalVerb') {
      var _arr = word.split(/ /);

      var _conj = conjugate(_arr[0], _this);

      Object.keys(_conj).forEach(function (k) {
        var form = _conj[k] + ' ' + _arr[1];
        _this.words[form] = 'PhrasalVerb'; //add it to cache, too

        _this.cache.firstWords[_conj[k]] = true;
      });
      return;
    } //turn some adjectives into superlatives


    if (tag === 'Comparable') {
      var comp = adjFns.toComparative(word);

      if (comp && word !== comp) {
        _this.words[comp] = 'Comparative';
      }

      var supr = adjFns.toSuperlative(word);

      if (supr && word !== supr) {
        _this.words[supr] = 'Superlative';
      }
    }
  });
  return words;
};

module.exports = addWords;

},{"../subset/adjectives/methods":11,"../subset/nouns/methods/pluralize":44,"../subset/verbs/methods/conjugate/faster.js":79,"../term/methods/normalize/normalize":149}],215:[function(_dereq_,module,exports){
'use strict'; // const addWords = require('./addWords');

var fns = _dereq_('../fns');

var data = _dereq_('./_data');

var moreData = _dereq_('./more-data');

var tags = _dereq_('../tags');

var unpack = _dereq_('./unpack');

var addTags = _dereq_('./addTags');

var addWords = _dereq_('./addWords');

var addRegex = _dereq_('./addRegex');

var addConjugations = _dereq_('./addConjugations');

var addPatterns = _dereq_('./addPatterns');

var addPlurals = _dereq_('./addPlurals');

var misc = _dereq_('./more-data/misc'); //lazier/faster object-merge


var extend = function extend(main, obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    main[keys[i]] = obj[keys[i]];
  }

  return main;
}; //class World


var World = function World() {
  this.words = {};
  this.tags = tags;
  this.regex = [];
  this.patterns = {};
  this.conjugations = {};
  this.plurals = {}; //denormalized data for faster-lookups

  this.cache = {
    firstWords: {},
    toInfinitive: {},
    toSingular: {}
  };
};

World.prototype.addTags = addTags;
World.prototype.addWords = addWords;
World.prototype.addRegex = addRegex;
World.prototype.addConjugations = addConjugations;
World.prototype.addPlurals = addPlurals;
World.prototype.addPatterns = addPatterns; //make a no-reference copy of all the data

World.prototype.clone = function () {
  var _this = this;

  var w2 = new World();
  ['words', 'firstWords', 'tagset', 'regex', 'patterns', 'conjugations', 'plurals'].forEach(function (k) {
    if (_this[k]) {
      w2[k] = fns.copy(_this[k]);
    }
  });
  return w2;
}; //add all the things, in all the places


World.prototype.plugin = function (obj) {
  //untangle compromise-plugin
  obj = unpack(obj); //add all-the-things to this world object
  //(order may matter)

  if (obj.tags) {
    this.addTags(obj.tags);
  }

  if (obj.regex) {
    this.addRegex(obj.regex);
  }

  if (obj.patterns) {
    this.addPatterns(obj.patterns);
  }

  if (obj.conjugations) {
    this.addConjugations(obj.conjugations);
  }

  if (obj.plurals) {
    this.addPlurals(obj.plurals);
  }

  if (obj.words) {
    this.addWords(obj.words);
  }
}; //export a default world


var w = new World();
w.plugin(data);
w.addWords(misc);
moreData.forEach(function (obj) {
  extend(w.words, obj);
});
module.exports = {
  w: w,
  reBuild: function reBuild() {
    //export a default world
    var w2 = new World();
    w2.plugin(data);
    w2.addWords(misc);
    moreData.forEach(function (obj) {
      extend(w2.words, obj);
    });
    return w2;
  }
};

},{"../fns":3,"../tags":137,"./_data":208,"./addConjugations":209,"./addPatterns":210,"./addPlurals":211,"./addRegex":212,"./addTags":213,"./addWords":214,"./more-data":217,"./more-data/misc":219,"./unpack":223}],216:[function(_dereq_,module,exports){
//these are common word shortenings used in the lexicon and sentence segmentation methods
//there are all nouns,or at the least, belong beside one.
"use strict"; //common abbreviations

var compact = {
  Noun: ["arc", "al", "exp", "fy", "pd", "pl", "plz", "tce", "bl", "ma", "ba", "lit", "ex", "eg", "ie", "ca", "cca", "vs", "etc", "esp", "ft", //these are too ambiguous
  "bc", "ad", "md", "corp", "col"],
  Organization: ["dept", "univ", "assn", "bros", "inc", "ltd", "co", //proper nouns with exclamation marks
  "yahoo", "joomla", "jeopardy"],
  Place: ["rd", "st", "dist", "mt", "ave", "blvd", "cl", "ct", "cres", "hwy", //states
  "ariz", "cal", "calif", "colo", "conn", "fla", "fl", "ga", "ida", "ia", "kan", "kans", "minn", "neb", "nebr", "okla", "penna", "penn", "pa", "dak", "tenn", "tex", "ut", "vt", "va", "wis", "wisc", "wy", "wyo", "usafa", "alta", "ont", "que", "sask"],
  Month: ["jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec"],
  Date: ["circa"],
  //Honorifics
  Honorific: ["adj", "adm", "adv", "asst", "atty", "bldg", "brig", "capt", "cmdr", "comdr", "cpl", "det", "dr", "esq", "gen", "gov", "hon", "jr", "llb", "lt", "maj", "messrs", "mister", "mlle", "mme", "mr", "mrs", "ms", "mstr", "op", "ord", "phd", "prof", "pvt", "rep", "reps", "res", "rev", "sen", "sens", "sfc", "sgt", "sir", "sr", "supt", "surg" //miss
  //misses
  ],
  Value: ["no"]
}; //unpack the compact terms into the misc lexicon..

var abbreviations = {};
var keys = Object.keys(compact);

for (var i = 0; i < keys.length; i++) {
  var arr = compact[keys[i]];

  for (var i2 = 0; i2 < arr.length; i2++) {
    abbreviations[arr[i2]] = [keys[i], "Abbreviation"];
  }
}

module.exports = abbreviations;

},{}],217:[function(_dereq_,module,exports){
"use strict";

module.exports = [_dereq_('./abbreviations'), _dereq_('./irregularAdjectives').lexicon, _dereq_('./numbers').lexicon, _dereq_('./orgWords')];

},{"./abbreviations":216,"./irregularAdjectives":218,"./numbers":220,"./orgWords":221}],218:[function(_dereq_,module,exports){
'use strict'; //adjectives that have irregular conjugations to adverb, comparative, and superlative forms

var toAdverb = {
  bad: 'badly',
  best: 'best',
  early: 'early',
  fast: 'fast',
  good: 'well',
  hard: 'hard',
  icy: 'icily',
  idle: 'idly',
  late: 'late',
  latter: 'latter',
  little: 'little',
  long: 'long',
  low: 'low',
  male: 'manly',
  public: 'publicly',
  simple: 'simply',
  single: 'singly',
  special: 'especially',
  straight: 'straight',
  vague: 'vaguely',
  well: 'well',
  whole: 'wholly',
  wrong: 'wrong'
};
var toComparative = {
  grey: 'greyer',
  gray: 'grayer',
  green: 'greener',
  yellow: 'yellower',
  red: 'redder',
  good: 'better',
  well: 'better',
  bad: 'worse',
  sad: 'sadder',
  big: 'bigger'
};
var toSuperlative = {
  nice: 'nicest',
  late: 'latest',
  hard: 'hardest',
  inner: 'innermost',
  outer: 'outermost',
  far: 'furthest',
  worse: 'worst',
  bad: 'worst',
  good: 'best',
  big: 'biggest',
  large: 'largest'
};

var combine = function combine(lexicon, obj, tag) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    lexicon[keys[i]] = 'Comparable';

    if (lexicon[obj[keys[i]]] === undefined) {
      lexicon[obj[keys[i]]] = tag;
    }
  }

  return lexicon;
};

var lexicon = combine({}, toSuperlative, 'Superlative');
lexicon = combine(lexicon, toComparative, 'Comparative');
lexicon = combine(lexicon, toAdverb, 'Adverb');
module.exports = {
  lexicon: lexicon,
  toAdverb: toAdverb,
  toComparative: toComparative,
  toSuperlative: toSuperlative
};

},{}],219:[function(_dereq_,module,exports){
"use strict";

//words that can't be compressed, for whatever reason
module.exports = {
  '20th century fox': 'Organization',
  '3m': 'Organization',
  '7 eleven': 'Organization',
  '7-eleven': 'Organization',
  'g8': 'Organization',
  'motel 6': 'Organization',
  'vh1': 'Organization',
  'q1': 'Date',
  'q2': 'Date',
  'q3': 'Date',
  'q4': 'Date',
  //misc
  'records': 'Plural',
  '&': 'Conjunction'
};

},{}],220:[function(_dereq_,module,exports){
'use strict';

var cardinal = {
  ones: {
    // 'a': 1,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  },
  teens: {
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
  },
  tens: {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fourty: 40,
    //support typo
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
  },
  multiples: {
    hundred: 1e2,
    thousand: 1e3,
    // grand: 1e3,
    million: 1e6,
    billion: 1e9,
    trillion: 1e12,
    quadrillion: 1e15,
    quintillion: 1e18,
    sextillion: 1e21,
    septillion: 1e24
  }
};
var ordinal = {
  ones: {
    zeroth: 0,
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9
  },
  teens: {
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19
  },
  tens: {
    twentieth: 20,
    thirtieth: 30,
    fortieth: 40,
    fourtieth: 40,
    //support typo
    fiftieth: 50,
    sixtieth: 60,
    seventieth: 70,
    eightieth: 80,
    ninetieth: 90
  },
  multiples: {
    hundredth: 1e2,
    thousandth: 1e3,
    millionth: 1e6,
    billionth: 1e9,
    trillionth: 1e12,
    quadrillionth: 1e15,
    quintillionth: 1e18,
    sextillionth: 1e21,
    septillionth: 1e24
  }
}; //used for the units

var prefixes = {
  yotta: 1,
  zetta: 1,
  exa: 1,
  peta: 1,
  tera: 1,
  giga: 1,
  mega: 1,
  kilo: 1,
  hecto: 1,
  deka: 1,
  deci: 1,
  centi: 1,
  milli: 1,
  micro: 1,
  nano: 1,
  pico: 1,
  femto: 1,
  atto: 1,
  zepto: 1,
  yocto: 1,
  square: 1,
  cubic: 1,
  quartic: 1
}; //create an easy mapping between ordinal-cardinal

var toOrdinal = {};
var toCardinal = {};
var lexicon = {};
Object.keys(ordinal).forEach(function (k) {
  var ord = Object.keys(ordinal[k]);
  var card = Object.keys(cardinal[k]);

  for (var i = 0; i < card.length; i++) {
    toOrdinal[card[i]] = ord[i];
    toCardinal[ord[i]] = card[i];
    lexicon[ord[i]] = ['Ordinal', 'TextValue'];
    lexicon[card[i]] = ['Cardinal', 'TextValue'];

    if (k === 'multiples') {
      lexicon[ord[i]].push('Multiple');
      lexicon[card[i]].push('Multiple');
    }
  }
});
module.exports = {
  toOrdinal: toOrdinal,
  toCardinal: toCardinal,
  cardinal: cardinal,
  ordinal: ordinal,
  prefixes: prefixes,
  lexicon: lexicon
};

},{}],221:[function(_dereq_,module,exports){
"use strict";

//nouns that also signal the title of an unknown organization
//todo remove/normalize plural forms
var orgWords = ['administration', 'agence', 'agences', 'agencies', 'agency', 'airlines', 'airways', 'army', 'assoc', 'associates', 'association', 'assurance', 'authority', 'autorite', 'aviation', 'bank', 'banque', 'board', 'boys', 'brands', 'brewery', 'brotherhood', 'brothers', 'building society', 'bureau', 'cafe', 'caisse', 'capital', 'care', 'cathedral', 'center', 'central bank', 'centre', 'chemicals', 'choir', 'chronicle', 'church', 'circus', 'clinic', 'clinique', 'club', 'co', 'coalition', 'coffee', 'collective', 'college', 'commission', 'committee', 'communications', 'community', 'company', 'comprehensive', 'computers', 'confederation', 'conference', 'conseil', 'consulting', 'containers', 'corporation', 'corps', 'corp', 'council', 'crew', 'daily news', 'data', 'departement', 'department', 'department store', 'departments', 'design', 'development', 'directorate', 'division', 'drilling', 'education', 'eglise', 'electric', 'electricity', 'energy', 'ensemble', 'enterprise', 'enterprises', 'entertainment', 'estate', 'etat', 'evening news', 'faculty', 'federation', 'financial', 'fm', 'foundation', 'fund', 'gas', 'gazette', 'girls', 'government', 'group', 'guild', 'health authority', 'herald', 'holdings', 'hospital', 'hotel', 'hotels', 'inc', 'industries', 'institut', 'institute', 'institute of technology', 'institutes', 'insurance', 'international', 'interstate', 'investment', 'investments', 'investors', 'journal', 'laboratory', 'labs', // 'law',
'liberation army', 'limited', 'local authority', 'local health authority', 'machines', 'magazine', 'management', 'marine', 'marketing', 'markets', 'media', 'memorial', 'mercantile exchange', 'ministere', 'ministry', 'military', 'mobile', 'motor', 'motors', 'musee', 'museum', // 'network',
'news', 'news service', 'observatory', 'office', 'oil', 'optical', 'orchestra', 'organization', 'partners', 'partnership', // 'party',
'people\'s party', 'petrol', 'petroleum', 'pharmacare', 'pharmaceutical', 'pharmaceuticals', 'pizza', 'plc', 'police', 'polytechnic', 'post', 'power', 'press', 'productions', 'quartet', 'radio', 'regional authority', 'regional health authority', 'reserve', 'resources', 'restaurant', 'restaurants', 'savings', 'school', 'securities', 'service', 'services', 'social club', 'societe', 'society', 'sons', 'standard', 'state police', 'state university', 'stock exchange', 'subcommittee', 'syndicat', 'systems', 'telecommunications', 'telegraph', 'television', 'times', 'tribunal', 'tv', 'union', 'university', 'utilities', 'workers'];
module.exports = orgWords.reduce(function (h, str) {
  h[str] = 'Noun';
  return h;
}, {});

},{}],222:[function(_dereq_,module,exports){
'use strict'; //supported verb forms:

var forms = [null, 'PastTense', 'PresentTense', 'Gerund', 'Participle']; //

var unpackVerbs = function unpackVerbs(str) {
  var verbs = str.split('|');
  return verbs.reduce(function (h, s) {
    var parts = s.split(':');
    var prefix = parts[0];
    var ends = parts[1].split(','); //grab the infinitive

    var inf = prefix + ends[0];

    if (ends[0] === '_') {
      inf = prefix;
    }

    h[inf] = {}; //we did the infinitive, now do the rest:

    for (var i = 1; i < forms.length; i++) {
      var word = parts[0] + ends[i];

      if (ends[i] === '_') {
        word = parts[0];
      }

      if (ends[i]) {
        h[inf][forms[i]] = word;
      }
    }

    return h;
  }, {});
};

module.exports = unpackVerbs;

},{}],223:[function(_dereq_,module,exports){
'use strict';

var unpack = {
  words: _dereq_('efrt-unpack'),
  plurals: _dereq_('./plurals'),
  conjugations: _dereq_('./conjugations'),
  keyValue: _dereq_('./key-value')
};
/*
 == supported plugin fields ==
  name
  words        - efrt packed
  tags         - stringified
  regex        - key-value
  patterns     - key-value
  plurals      - plural-unpack
  conjugations - conjugation-unpack
*/

var unpackPlugin = function unpackPlugin(str) {
  var obj = str;

  if (typeof str === 'string') {
    obj = JSON.parse(str);
  } //words is packed with efrt


  if (obj.words && typeof obj.words === 'string') {
    obj.words = unpack.words(obj.words);
  } //patterns is pivoted as key-value


  if (obj.patterns) {
    obj.patterns = unpack.keyValue(obj.patterns);
  } //regex, too


  if (obj.regex) {
    obj.regex = unpack.keyValue(obj.regex);
  } //plurals is packed in a ad-hoc way


  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpack.plurals(obj.plurals);
  } //conjugations is packed in another ad-hoc way


  if (obj.conjugations && typeof obj.conjugations === 'string') {
    obj.conjugations = unpack.conjugations(obj.conjugations);
  }

  return obj;
};

module.exports = unpackPlugin;

},{"./conjugations":222,"./key-value":224,"./plurals":225,"efrt-unpack":1}],224:[function(_dereq_,module,exports){
'use strict'; //pivot k:[val,val] ->  val:k, val:k

var keyValue = function keyValue(obj) {
  var keys = Object.keys(obj);
  var isCompressed = true;

  if (keys[0] && typeof obj[keys[0]] === 'string') {
    isCompressed = false;
  }

  return keys.reduce(function (h, k) {
    if (isCompressed === true) {
      var arr = obj[k];
      arr.forEach(function (a) {
        if (h[a]) {
          //convert val to an array
          if (typeof h[a] === 'string') {
            h[a] = [h[a]];
          } //add it


          h[a].push(k);
        } else {
          h[a] = k;
        }
      });
    } else {
      h[k] = obj[k];
    }

    return h;
  }, {});
};

module.exports = keyValue;

},{}],225:[function(_dereq_,module,exports){
'use strict';

var unpackPlurals = function unpackPlurals(str) {
  return str.split(/,/g).reduce(function (h, s) {
    var arr = s.split(/\|/g);

    if (arr.length === 3) {
      h[arr[0] + arr[1]] = arr[0] + arr[2];
    } else if (arr.length === 2) {
      h[arr[0]] = arr[0] + arr[1];
    } else {
      h[arr[0]] = arr[0];
    }

    return h;
  }, {});
};

module.exports = unpackPlurals;

},{}]},{},[4])(4)
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (process){
module.exports = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    var forest = new Array();

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 0.5) {
            classes[0] = 0.6635573546538804;
            classes[1] = 0.044862930463717546;
        } else {
            classes[0] = 0.24070768276623525;
            classes[1] = 0.050872032115592374;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[42] <= 2.5) {
            classes[0] = 0.24786502714919684;
            classes[1] = 0.09890356989127574;
        } else {
            classes[0] = 0.5803420025414379;
            classes[1] = 0.07288940041798003;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[169] <= 0.5) {
            classes[0] = 0.24027301077681204;
            classes[1] = 0.1387842329011938;
        } else {
            classes[0] = 0.5103260314532759;
            classes[1] = 0.11061672486827649;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[66] <= 0.5) {
            classes[0] = 0.5646408979395554;
            classes[1] = 0.19603968580633171;
        } else {
            classes[0] = 0.1192480249195991;
            classes[1] = 0.12007139133470547;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[169] <= 1.5) {
            classes[0] = 0.3369684310326913;
            classes[1] = 0.27064680806269714;
        } else {
            classes[0] = 0.29526050361772843;
            classes[1] = 0.0971242572870193;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 0.5) {
            classes[0] = 0.5105639043417646;
            classes[1] = 0.28260043539486374;
        } else {
            classes[0] = 0.0829680371310738;
            classes[1] = 0.12386762313197211;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 0.5) {
            classes[0] = 0.27216549636482873;
            classes[1] = 0.12757260288398992;
        } else {
            classes[0] = 0.2940392015164295;
            classes[1] = 0.3062226992348591;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[171] <= 0.5) {
            classes[0] = 0.35001310818774417;
            classes[1] = 0.37040545295738475;
        } else {
            classes[0] = 0.19636786126267736;
            classes[1] = 0.08321357759217618;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 0.5) {
            classes[0] = 0.1590065347580664;
            classes[1] = 0.2207708570504024;
        } else {
            classes[0] = 0.3732518457105667;
            classes[1] = 0.24697076248094257;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 0.5) {
            classes[0] = 0.3729427389827311;
            classes[1] = 0.25731935312343723;
        } else {
            classes[0] = 0.14973699943155935;
            classes[1] = 0.2200009084622475;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[231] <= 0.5) {
            classes[0] = 0.3299361216192262;
            classes[1] = 0.38337876699693285;
        } else {
            classes[0] = 0.18604100028440596;
            classes[1] = 0.10064411109942553;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 0.5) {
            classes[0] = 0.2738071876704275;
            classes[1] = 0.18197319663759104;
        } else {
            classes[0] = 0.23723292676851568;
            classes[1] = 0.3069866889234556;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[193] <= 0.5) {
            classes[0] = 0.23798224432331322;
            classes[1] = 0.30963648575748304;
        } else {
            classes[0] = 0.26972110992931536;
            classes[1] = 0.18266015998985438;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[66] <= 0.5) {
            classes[0] = 0.41090414689029614;
            classes[1] = 0.3403318104384912;
        } else {
            classes[0] = 0.09446311827579247;
            classes[1] = 0.15430092439540832;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[212] <= 2.5) {
            classes[0] = 0.4120962999550046;
            classes[1] = 0.45622722046730113;
        } else {
            classes[0] = 0.09176971907834207;
            classes[1] = 0.039906760499367096;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[42] <= 0.5) {
            classes[0] = 0.05858275783537092;
            classes[1] = 0.11026924857339195;
        } else {
            classes[0] = 0.44387843154117196;
            classes[1] = 0.3872695620501814;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 1.5) {
            classes[0] = 0.37402018461713826;
            classes[1] = 0.3037089531990422;
        } else {
            classes[0] = 0.12785683103310472;
            classes[1] = 0.19441403115072625;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[90] <= 0.5) {
            classes[0] = 0.2774513435374351;
            classes[1] = 0.3415600957495747;
        } else {
            classes[0] = 0.22393400443666808;
            classes[1] = 0.15705455627628234;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 1.5) {
            classes[0] = 0.4491685329531281;
            classes[1] = 0.3976082349551108;
        } else {
            classes[0] = 0.051763774084067654;
            classes[1] = 0.10145945800773003;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[236] <= 1.5) {
            classes[0] = 0.3906288893381185;
            classes[1] = 0.43776486846220997;
        } else {
            classes[0] = 0.11018781145930971;
            classes[1] = 0.0614184307403622;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 0.5) {
            classes[0] = 0.42744387880377127;
            classes[1] = 0.3754392258377346;
        } else {
            classes[0] = 0.0730113773284195;
            classes[1] = 0.12410551803001195;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[368] <= 0.5) {
            classes[0] = 0.4167108201312239;
            classes[1] = 0.4557130175278552;
        } else {
            classes[0] = 0.08370942704879657;
            classes[1] = 0.043866735292095366;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 1.5) {
            classes[0] = 0.3333655279918135;
            classes[1] = 0.2737228972768997;
        } else {
            classes[0] = 0.16680905530448506;
            classes[1] = 0.22610251942676168;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[265] <= 0.5) {
            classes[0] = 0.32272487241232967;
            classes[1] = 0.37704088545114667;
        } else {
            classes[0] = 0.17742137493099686;
            classes[1] = 0.12281286720551998;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[200] <= 0.5) {
            classes[0] = 0.3627549526486755;
            classes[1] = 0.4097949531329251;
        } else {
            classes[0] = 0.13730260756325327;
            classes[1] = 0.09014748665515734;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 3.5) {
            classes[0] = 0.43088642987008036;
            classes[1] = 0.3875934945748248;
        } else {
            classes[0] = 0.06909717593615516;
            classes[1] = 0.1124228996189331;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[257] <= 0.5) {
            classes[0] = 0.4238519018079959;
            classes[1] = 0.4592204018848136;
        } else {
            classes[0] = 0.07620914492155102;
            classes[1] = 0.040718551385647554;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 1.5) {
            classes[0] = 0.48389591315215746;
            classes[1] = 0.45949572405799877;
        } else {
            classes[0] = 0.01604554840774195;
            classes[1] = 0.040562814382120824;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[197] <= 0.5) {
            classes[0] = 0.41540049625421216;
            classes[1] = 0.4514697131110264;
        } else {
            classes[0] = 0.08471217745739422;
            classes[1] = 0.04841761317734002;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[282] <= 0.5) {
            classes[0] = 0.4231115066709893;
            classes[1] = 0.4558638714809323;
        } else {
            classes[0] = 0.07688534877223423;
            classes[1] = 0.04413927307587193;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 0.5) {
            classes[0] = 0.22107210396093702;
            classes[1] = 0.17193423936019314;
        } else {
            classes[0] = 0.2788523693624297;
            classes[1] = 0.32814128731643244;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[89] <= 0.5) {
            classes[0] = 0.15036769580564588;
            classes[1] = 0.19862202647093874;
        } else {
            classes[0] = 0.3495659084485237;
            classes[1] = 0.3014443692748948;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[66] <= 0.5) {
            classes[0] = 0.4074518194002139;
            classes[1] = 0.36596035210979433;
        } else {
            classes[0] = 0.09252153787908468;
            classes[1] = 0.13406629061090178;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[340] <= 0.5) {
            classes[0] = 0.3982771028857979;
            classes[1] = 0.4337940262810198;
        } else {
            classes[0] = 0.10174311065350007;
            classes[1] = 0.0661857601796901;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[99] <= 0.5) {
            classes[0] = 0.35652861094327526;
            classes[1] = 0.3106135913647838;
        } else {
            classes[0] = 0.14343870183974347;
            classes[1] = 0.1894190958521803;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[168] <= 1.5) {
            classes[0] = 0.4022902469418475;
            classes[1] = 0.4368591890729277;
        } else {
            classes[0] = 0.09770676974137489;
            classes[1] = 0.06314379424384985;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[187] <= 0.5) {
            classes[0] = 0.42344045063272523;
            classes[1] = 0.38540454826421183;
        } else {
            classes[0] = 0.07651031850351776;
            classes[1] = 0.1146446825995354;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[337] <= 0.5) {
            classes[0] = 0.46503215569390927;
            classes[1] = 0.48501889344613924;
        } else {
            classes[0] = 0.03497711204461975;
            classes[1] = 0.014971838815313868;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 3.5) {
            classes[0] = 0.45341738389032527;
            classes[1] = 0.42332575399752376;
        } else {
            classes[0] = 0.04648376313968217;
            classes[1] = 0.07677309897246705;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[213] <= 0.5) {
            classes[0] = 0.2995028294290279;
            classes[1] = 0.3448172859601136;
        } else {
            classes[0] = 0.20048327515826236;
            classes[1] = 0.15519660945259595;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 0.5) {
            classes[0] = 0.34699184061460764;
            classes[1] = 0.3039598669974111;
        } else {
            classes[0] = 0.15298301489866448;
            classes[1] = 0.19606527748931424;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[193] <= 1.5) {
            classes[0] = 0.36713050579751483;
            classes[1] = 0.40518364705303916;
        } else {
            classes[0] = 0.1328659757338646;
            classes[1] = 0.09481987141558747;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[127] <= 0.5) {
            classes[0] = 0.3102128772087099;
            classes[1] = 0.26605340104775926;
        } else {
            classes[0] = 0.18975522341769674;
            classes[1] = 0.23397849832583625;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[63] <= 1.5) {
            classes[0] = 0.2243416958484495;
            classes[1] = 0.2671075091610173;
        } else {
            classes[0] = 0.2756426224064432;
            classes[1] = 0.2329081725840905;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[101] <= 0.5) {
            classes[0] = 0.35006772868612146;
            classes[1] = 0.3102932962006119;
        } else {
            classes[0] = 0.1499219371679939;
            classes[1] = 0.189717037945269;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 1.5) {
            classes[0] = 0.28378193451402633;
            classes[1] = 0.3242261951299178;
        } else {
            classes[0] = 0.2162229213163098;
            classes[1] = 0.17576894903975193;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 2.5) {
            classes[0] = 0.3889648038980025;
            classes[1] = 0.35145715286131474;
        } else {
            classes[0] = 0.1110310285599146;
            classes[1] = 0.1485470146807683;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[200] <= 0.5) {
            classes[0] = 0.3704390967573682;
            classes[1] = 0.40454790501913696;
        } else {
            classes[0] = 0.12957874874744466;
            classes[1] = 0.09543424947605339;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[255] <= 0.5) {
            classes[0] = 0.4958711827369945;
            classes[1] = 0.48500943231801186;
        } else {
            classes[0] = 0.004119556412980858;
            classes[1] = 0.014999828532014158;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[10] <= 0.5) {
            classes[0] = 0.4506228922527687;
            classes[1] = 0.4713971624837031;
        } else {
            classes[0] = 0.04950095427371974;
            classes[1] = 0.0284789909898058;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[99] <= 0.5) {
            classes[0] = 0.35327522621486995;
            classes[1] = 0.31679053025601944;
        } else {
            classes[0] = 0.14676439412090272;
            classes[1] = 0.18316984940821776;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[131] <= 0.5) {
            classes[0] = 0.3461379812129589;
            classes[1] = 0.38221938964094404;
        } else {
            classes[0] = 0.15389986722206367;
            classes[1] = 0.11774276192403056;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 1.5) {
            classes[0] = 0.4440676828815356;
            classes[1] = 0.41738617837560965;
        } else {
            classes[0] = 0.05594221150213956;
            classes[1] = 0.08260392724070956;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[431] <= 0.5) {
            classes[0] = 0.4723702428808224;
            classes[1] = 0.48757849739905507;
        } else {
            classes[0] = 0.027665992226883204;
            classes[1] = 0.012385267493242463;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[316] <= 0.5) {
            classes[0] = 0.4979564137218058;
            classes[1] = 0.4894281880723775;
        } else {
            classes[0] = 0.0019966540811439475;
            classes[1] = 0.01061874412467633;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[187] <= 0.5) {
            classes[0] = 0.4203811361400701;
            classes[1] = 0.3904092522412138;
        } else {
            classes[0] = 0.0797545433881147;
            classes[1] = 0.1094550682306076;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[236] <= 0.5) {
            classes[0] = 0.30247684836110095;
            classes[1] = 0.33959499532353976;
        } else {
            classes[0] = 0.1976391648800705;
            classes[1] = 0.1602889914352863;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[156] <= 0.5) {
            classes[0] = 0.4112130308864443;
            classes[1] = 0.3801423111649868;
        } else {
            classes[0] = 0.08885981252631787;
            classes[1] = 0.11978484542223539;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[212] <= 6.5) {
            classes[0] = 0.4780012964585083;
            classes[1] = 0.49122007120726663;
        } else {
            classes[0] = 0.02206884280221282;
            classes[1] = 0.008709789532021044;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 5.5) {
            classes[0] = 0.4795752064576217;
            classes[1] = 0.46156762210590624;
        } else {
            classes[0] = 0.020389699524605325;
            classes[1] = 0.038467471911860486;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[280] <= 0.5) {
            classes[0] = 0.4007416421832904;
            classes[1] = 0.42886547163968636;
        } else {
            classes[0] = 0.09928732046163688;
            classes[1] = 0.07110556571538548;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 0.5) {
            classes[0] = 0.4254373881749696;
            classes[1] = 0.39633868156639923;
        } else {
            classes[0] = 0.07456054304037665;
            classes[1] = 0.10366338721824661;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[42] <= 0.5) {
            classes[0] = 0.07025399628571928;
            classes[1] = 0.09768603914610088;
        } else {
            classes[0] = 0.42976694742636246;
            classes[1] = 0.40229301714181487;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[39] <= 0.5) {
            classes[0] = 0.2500910923457448;
            classes[1] = 0.21318200291706385;
        } else {
            classes[0] = 0.24994484105973017;
            classes[1] = 0.2867820636774639;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[419] <= 0.5) {
            classes[0] = 0.45848433397075955;
            classes[1] = 0.4766413033553654;
        } else {
            classes[0] = 0.041539033133477885;
            classes[1] = 0.0233353295403965;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[116] <= 0.5) {
            classes[0] = 0.4718384974989852;
            classes[1] = 0.4537272224124748;
        } else {
            classes[0] = 0.02813334229775612;
            classes[1] = 0.04630093779077618;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[291] <= 0.5) {
            classes[0] = 0.3434468018239762;
            classes[1] = 0.3752926439858508;
        } else {
            classes[0] = 0.15656664422956504;
            classes[1] = 0.12469390996060951;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[127] <= 0.5) {
            classes[0] = 0.3066278587226726;
            classes[1] = 0.27164623163862406;
        } else {
            classes[0] = 0.19337114701846275;
            classes[1] = 0.22835476262024162;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[193] <= 2.5) {
            classes[0] = 0.42358485897361137;
            classes[1] = 0.44689651153408055;
        } else {
            classes[0] = 0.07641782230142366;
            classes[1] = 0.05310080719089374;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[47] <= 0.5) {
            classes[0] = 0.23373215426205382;
            classes[1] = 0.1994904148893626;
        } else {
            classes[0] = 0.26624728415516574;
            classes[1] = 0.3005301466934165;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[192] <= 0.5) {
            classes[0] = 0.3457319733657274;
            classes[1] = 0.3759975498927337;
        } else {
            classes[0] = 0.15425096517407433;
            classes[1] = 0.12401951156746058;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[99] <= 0.5) {
            classes[0] = 0.3517506619863957;
            classes[1] = 0.32029688194334743;
        } else {
            classes[0] = 0.14822826763073982;
            classes[1] = 0.17972418843951346;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[197] <= 0.5) {
            classes[0] = 0.4242777877914229;
            classes[1] = 0.4464096219969977;
        } else {
            classes[0] = 0.07571408961580259;
            classes[1] = 0.05359850059577569;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[80] <= 0.5) {
            classes[0] = 0.4086509205163386;
            classes[1] = 0.3819520311797074;
        } else {
            classes[0] = 0.09132421717976431;
            classes[1] = 0.11807283112419333;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[237] <= 0.5) {
            classes[0] = 0.34607473334347144;
            classes[1] = 0.37612487786149884;
        } else {
            classes[0] = 0.1539200592106822;
            classes[1] = 0.12388032958435585;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[101] <= 0.5) {
            classes[0] = 0.3477621344546509;
            classes[1] = 0.31655141475007126;
        } else {
            classes[0] = 0.1522252345339479;
            classes[1] = 0.18346121626133174;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[90] <= 0.5) {
            classes[0] = 0.29741549516392946;
            classes[1] = 0.32916689218245127;
        } else {
            classes[0] = 0.20258169421925534;
            classes[1] = 0.17083591843436757;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[174] <= 0.5) {
            classes[0] = 0.4743262365390851;
            classes[1] = 0.4581033356637648;
        } else {
            classes[0] = 0.025667363862147335;
            classes[1] = 0.04190306393500629;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[134] <= 4.5) {
            classes[0] = 0.4844609302544888;
            classes[1] = 0.4935289461703566;
        } else {
            classes[0] = 0.015563319768400766;
            classes[1] = 0.006446803806749414;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 5.5) {
            classes[0] = 0.4623776706141242;
            classes[1] = 0.4431083521683907;
        } else {
            classes[0] = 0.03758754980685085;
            classes[1] = 0.056926427410634;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[310] <= 0.5) {
            classes[0] = 0.38906264360480486;
            classes[1] = 0.4140516719011788;
        } else {
            classes[0] = 0.11093743511814488;
            classes[1] = 0.08594824937587013;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[187] <= 0.5) {
            classes[0] = 0.4188322885251176;
            classes[1] = 0.39381100352376996;
        } else {
            classes[0] = 0.0811563871063287;
            classes[1] = 0.10620032084478598;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 2.5) {
            classes[0] = 0.4948240375880468;
            classes[1] = 0.4864095984559866;
        } else {
            classes[0] = 0.005180785117677073;
            classes[1] = 0.013585578838291042;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[131] <= 1.5) {
            classes[0] = 0.44611376395474645;
            classes[1] = 0.464198715405263;
        } else {
            classes[0] = 0.053946537237117176;
            classes[1] = 0.03574098340287742;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[127] <= 1.5) {
            classes[0] = 0.4155926464772656;
            classes[1] = 0.3910420759049969;
        } else {
            classes[0] = 0.0844269364689216;
            classes[1] = 0.10893834114881545;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[349] <= 0.5) {
            classes[0] = 0.435878423401345;
            classes[1] = 0.4553563992016378;
        } else {
            classes[0] = 0.06414645914893667;
            classes[1] = 0.04461871824808937;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[337] <= 0.5) {
            classes[0] = 0.4700721449014754;
            classes[1] = 0.48278600314627956;
        } else {
            classes[0] = 0.029926466826298532;
            classes[1] = 0.01721538512594603;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 0.5) {
            classes[0] = 0.21412555952285547;
            classes[1] = 0.18467451191714407;
        } else {
            classes[0] = 0.28584480590108896;
            classes[1] = 0.3153551226589229;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[316] <= 0.5) {
            classes[0] = 0.4974805132221877;
            classes[1] = 0.49115268308698035;
        } else {
            classes[0] = 0.002496045728723484;
            classes[1] = 0.008870757962111814;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[161] <= 1.5) {
            classes[0] = 0.42227201477617476;
            classes[1] = 0.4426945988703342;
        } else {
            classes[0] = 0.07778514668587862;
            classes[1] = 0.057248239667608024;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[140] <= 0.5) {
            classes[0] = 0.4048964458012992;
            classes[1] = 0.3799166692096589;
        } else {
            classes[0] = 0.09512960707650524;
            classes[1] = 0.12005727791254159;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[255] <= 0.5) {
            classes[0] = 0.49514082195387255;
            classes[1] = 0.48752581045959553;
        } else {
            classes[0] = 0.004886716910154866;
            classes[1] = 0.012446650676372352;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 2.5) {
            classes[0] = 0.35533553200866974;
            classes[1] = 0.38078704001756464;
        } else {
            classes[0] = 0.14473197167394103;
            classes[1] = 0.1191454562998317;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[173] <= 0.5) {
            classes[0] = 0.4367603943772377;
            classes[1] = 0.41515156875277115;
        } else {
            classes[0] = 0.06328060353726128;
            classes[1] = 0.08480743333273183;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[66] <= 0.5) {
            classes[0] = 0.4068962763418844;
            classes[1] = 0.3832578242311395;
        } else {
            classes[0] = 0.09314574756372787;
            classes[1] = 0.11670015186325228;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[189] <= 0.5) {
            classes[0] = 0.44103574388195715;
            classes[1] = 0.45843130636761475;
        } else {
            classes[0] = 0.05900196874049086;
            classes[1] = 0.04153098100994401;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[326] <= 0.5) {
            classes[0] = 0.4873211779457253;
            classes[1] = 0.47667072978887276;
        } else {
            classes[0] = 0.012689448326361569;
            classes[1] = 0.023318643939029392;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[168] <= 2.5) {
            classes[0] = 0.4510437722818987;
            classes[1] = 0.46649041134398117;
        } else {
            classes[0] = 0.04899268106327807;
            classes[1] = 0.03347313531084387;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[156] <= 0.5) {
            classes[0] = 0.40917767465819777;
            classes[1] = 0.38523328214534525;
        } else {
            classes[0] = 0.0908312869958952;
            classes[1] = 0.1147577562005673;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[195] <= 0.5) {
            classes[0] = 0.21479553242345695;
            classes[1] = 0.2425330084992101;
        } else {
            classes[0] = 0.2852198237624998;
            classes[1] = 0.2574516353148335;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[366] <= 0.5) {
            classes[0] = 0.4822986663456802;
            classes[1] = 0.4700641151772675;
        } else {
            classes[0] = 0.01771296788215058;
            classes[1] = 0.02992425059488949;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[412] <= 0.5) {
            classes[0] = 0.49678651689610615;
            classes[1] = 0.4904222876951113;
        } else {
            classes[0] = 0.00324641077750504;
            classes[1] = 0.009544784631282322;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[193] <= 5.5) {
            classes[0] = 0.47557737542192047;
            classes[1] = 0.485784739806726;
        } else {
            classes[0] = 0.024498794471241023;
            classes[1] = 0.014139090300117799;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 7.5) {
            classes[0] = 0.4782098622860727;
            classes[1] = 0.46474300970689175;
        } else {
            classes[0] = 0.02182039383913823;
            classes[1] = 0.035226734167888456;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[249] <= 0.5) {
            classes[0] = 0.47051983852142115;
            classes[1] = 0.4568864629283648;
        } else {
            classes[0] = 0.02952405049855514;
            classes[1] = 0.04306964805164624;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[123] <= 1.5) {
            classes[0] = 0.4472370771375136;
            classes[1] = 0.4627379743008248;
        } else {
            classes[0] = 0.05280790754118303;
            classes[1] = 0.03721704102048059;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[116] <= 0.5) {
            classes[0] = 0.4712772257438491;
            classes[1] = 0.45750338862468337;
        } else {
            classes[0] = 0.028740254457213232;
            classes[1] = 0.04247913117425504;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[231] <= 0.5) {
            classes[0] = 0.3495887119160431;
            classes[1] = 0.3726561902149708;
        } else {
            classes[0] = 0.15043899880072395;
            classes[1] = 0.1273160990682606;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[136] <= 0.5) {
            classes[0] = 0.3922050878672593;
            classes[1] = 0.3694799691084867;
        } else {
            classes[0] = 0.10781023393000498;
            classes[1] = 0.1305047090942507;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[191] <= 0.5) {
            classes[0] = 0.32525595557492304;
            classes[1] = 0.34903236481154976;
        } else {
            classes[0] = 0.17476033421657627;
            classes[1] = 0.15095134539695032;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[99] <= 0.5) {
            classes[0] = 0.35029467566990985;
            classes[1] = 0.3247939837924417;
        } else {
            classes[0] = 0.14971381643753753;
            classes[1] = 0.17519752410010467;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 0.5) {
            classes[0] = 0.42416862312575926;
            classes[1] = 0.4047299051548316;
        } else {
            classes[0] = 0.07584092560846915;
            classes[1] = 0.09526054611094555;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[213] <= 0.5) {
            classes[0] = 0.3122822504249526;
            classes[1] = 0.3375207195155837;
        } else {
            classes[0] = 0.18773162276229716;
            classes[1] = 0.1624654072971607;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 2.5) {
            classes[0] = 0.3857890081119404;
            classes[1] = 0.36346773609307165;
        } else {
            classes[0] = 0.1142179172535605;
            classes[1] = 0.13652533854142565;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[91] <= 0.5) {
            classes[0] = 0.1913660264014824;
            classes[1] = 0.21689402881540512;
        } else {
            classes[0] = 0.30864351479164853;
            classes[1] = 0.28309642999146706;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[82] <= 1.5) {
            classes[0] = 0.35973068968678895;
            classes[1] = 0.335976014874415;
        } else {
            classes[0] = 0.1402775527548465;
            classes[1] = 0.1640157426839513;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[44] <= 10.5) {
            classes[0] = 0.4504496003268185;
            classes[1] = 0.4654330860653784;
        } else {
            classes[0] = 0.049559664093224515;
            classes[1] = 0.034557649514569445;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[332] <= 2.5) {
            classes[0] = 0.49790207156205574;
            classes[1] = 0.4930946804934004;
        } else {
            classes[0] = 0.002090065724565265;
            classes[1] = 0.006913182219969111;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[141] <= 0.5) {
            classes[0] = 0.3875913724783558;
            classes[1] = 0.36600093998602523;
        } else {
            classes[0] = 0.1124528495834394;
            classes[1] = 0.1339548379521835;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[200] <= 0.5) {
            classes[0] = 0.3802745986039999;
            classes[1] = 0.4009822007650469;
        } else {
            classes[0] = 0.11976074426552229;
            classes[1] = 0.09898245636543056;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[47] <= 0.5) {
            classes[0] = 0.23072271862889734;
            classes[1] = 0.20606964091428928;
        } else {
            classes[0] = 0.2692968602857341;
            classes[1] = 0.2939107801710756;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[89] <= 0.5) {
            classes[0] = 0.16342428633128425;
            classes[1] = 0.1876189983799956;
        } else {
            classes[0] = 0.33658848638099353;
            classes[1] = 0.31236822890772836;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[67] <= 2.5) {
            classes[0] = 0.47565876393877304;
            classes[1] = 0.46394564720431614;
        } else {
            classes[0] = 0.024352608530635936;
            classes[1] = 0.03604298032627406;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[181] <= 0.5) {
            classes[0] = 0.39568003255736095;
            classes[1] = 0.4152203532839498;
        } else {
            classes[0] = 0.10434120566665703;
            classes[1] = 0.08475840849202608;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[80] <= 0.5) {
            classes[0] = 0.4061135294105817;
            classes[1] = 0.3863978782334027;
        } else {
            classes[0] = 0.09389539409566924;
            classes[1] = 0.11359319826034994;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[340] <= 0.5) {
            classes[0] = 0.4099862279316903;
            classes[1] = 0.42806513280406006;
        } else {
            classes[0] = 0.09002497109923982;
            classes[1] = 0.0719236681650079;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[95] <= 0.5) {
            classes[0] = 0.2560741266402671;
            classes[1] = 0.23177116781314672;
        } else {
            classes[0] = 0.24392718752701745;
            classes[1] = 0.26822751801956574;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[131] <= 0.5) {
            classes[0] = 0.3571117236213811;
            classes[1] = 0.37863693199044746;
        } else {
            classes[0] = 0.14288902947497858;
            classes[1] = 0.12136231491318976;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[101] <= 0.5) {
            classes[0] = 0.34641848917340345;
            classes[1] = 0.3235583311446582;
        } else {
            classes[0] = 0.1535783181861666;
            classes[1] = 0.17644486149577265;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[337] <= 2.5) {
            classes[0] = 0.4959425245224052;
            classes[1] = 0.49926058076129326;
        } else {
            classes[0] = 0.004057723380910595;
            classes[1] = 0.0007391713353909561;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[269] <= 0.5) {
            classes[0] = 0.48831057918073234;
            classes[1] = 0.4802597222751024;
        } else {
            classes[0] = 0.011622442294151119;
            classes[1] = 0.019807256250008985;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[42] <= 0.5) {
            classes[0] = 0.07526429440170809;
            classes[1] = 0.0928862623204291;
        } else {
            classes[0] = 0.4247059755338085;
            classes[1] = 0.4071434677440581;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[126] <= 0.5) {
            classes[0] = 0.3510782645343189;
            classes[1] = 0.3292460854357539;
        } else {
            classes[0] = 0.14890647718366665;
            classes[1] = 0.17076917284625942;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 4.5) {
            classes[0] = 0.42557076009647676;
            classes[1] = 0.4420360983650328;
        } else {
            classes[0] = 0.07442093551803267;
            classes[1] = 0.05797220602045877;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[187] <= 0.5) {
            classes[0] = 0.4170994074239238;
            classes[1] = 0.3986802154207425;
        } else {
            classes[0] = 0.08288732667066676;
            classes[1] = 0.10133305048466694;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[170] <= 8.5) {
            classes[0] = 0.48785962708239394;
            classes[1] = 0.4940444447745172;
        } else {
            classes[0] = 0.012136338649092773;
            classes[1] = 0.005959589493996496;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[37] <= 10.5) {
            classes[0] = 0.48825942827325614;
            classes[1] = 0.4798746003179756;
        } else {
            classes[0] = 0.011714771238958203;
            classes[1] = 0.020151200169809143;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[230] <= 0.5) {
            classes[0] = 0.24763880147122813;
            classes[1] = 0.2707241230680482;
        } else {
            classes[0] = 0.25236145600438853;
            classes[1] = 0.2292756194563365;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[204] <= 0.5) {
            classes[0] = 0.37048459094983016;
            classes[1] = 0.3489475248539196;
        } else {
            classes[0] = 0.12951537297139573;
            classes[1] = 0.15105251122485633;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[316] <= 0.5) {
            classes[0] = 0.496972796297296;
            classes[1] = 0.4922666132046549;
        } else {
            classes[0] = 0.0030303941570487916;
            classes[1] = 0.00773019634099122;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[199] <= 1.5) {
            classes[0] = 0.44368035613162776;
            classes[1] = 0.4573279560854715;
        } else {
            classes[0] = 0.05635193853959175;
            classes[1] = 0.04263974924331926;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[127] <= 1.5) {
            classes[0] = 0.4135317481133447;
            classes[1] = 0.39523656946775776;
        } else {
            classes[0] = 0.08648304460135424;
            classes[1] = 0.10474863781754064;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[10] <= 0.5) {
            classes[0] = 0.45607715605186333;
            classes[1] = 0.46805224544180896;
        } else {
            classes[0] = 0.04393791227992703;
            classes[1] = 0.031932686226395356;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[65] <= 3.5) {
            classes[0] = 0.4977898400309997;
            classes[1] = 0.4936129438924455;
        } else {
            classes[0] = 0.00221169520453692;
            classes[1] = 0.006385520872014711;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[241] <= 0.5) {
            classes[0] = 0.41229248106095784;
            classes[1] = 0.4289274519348848;
        } else {
            classes[0] = 0.08774262928148463;
            classes[1] = 0.07103743772267421;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[140] <= 0.5) {
            classes[0] = 0.4028365466958684;
            classes[1] = 0.3843813748665795;
        } else {
            classes[0] = 0.09718269802777625;
            classes[1] = 0.11559938040978313;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[197] <= 0.5) {
            classes[0] = 0.4294960830900607;
            classes[1] = 0.44446074987723366;
        } else {
            classes[0] = 0.07052121749433456;
            classes[1] = 0.05552194953837331;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[512] <= 0.5) {
            classes[0] = 0.49343214724736645;
            classes[1] = 0.49762258448980495;
        } else {
            classes[0] = 0.006573725713482146;
            classes[1] = 0.0023715425493378048;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[109] <= 0.5) {
            classes[0] = 0.3066607717431759;
            classes[1] = 0.28507260728090866;
        } else {
            classes[0] = 0.19331159809557424;
            classes[1] = 0.21495502288034346;
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[192] <= 0.5) {
            classes[0] = 0.3530418299245151;
            classes[1] = 0.3734595935960394;
        } else {
            classes[0] = 0.14693977689734136;
            classes[1] = 0.12655879958210184;
        }
        return classes;
    });

    this.predict = function(features) {
        var n_estimators = forest.length;
        var preds = new Array(n_estimators);
        var n_classes = 2;
        var classes = new Array(n_classes).fill(0.);
        var normalizer, sum, idx, val;
        var i, j;

        for (i = 0; i < n_estimators; i++) {
            preds[i] = forest[i](features);
        }
        for (i = 0; i < n_estimators; i++) {
            normalizer = 0.;
            for (j = 0; j < n_classes; j++) {
                normalizer += preds[i][j];
            }
            if (normalizer == 0.) {
                normalizer = 1.0;
            }
            for (j = 0; j < n_classes; j++) {
                preds[i][j] = preds[i][j] / normalizer;
                if (preds[i][j] <= 2.2204460492503131e-16) {
                    preds[i][j] = 2.2204460492503131e-16;
                }
                preds[i][j] = Math.log(preds[i][j]);
            }
            sum = 0.0;
            for (j = 0; j < n_classes; j++) {
                sum += preds[i][j];
            }
            for (j = 0; j < n_classes; j++) {
                preds[i][j] = (n_classes - 1) * (preds[i][j] - (1. / n_classes) * sum);
            }
        }
        for (i = 0; i < n_estimators; i++) {
            for (j = 0; j < n_classes; j++) {
                classes[j] += preds[i][j];
            }
        }

        return findMax(classes);
    };
};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 === 547) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var clf = new AdaBoostClassifier();
        var prediction = clf.predict(features);
        console.log(prediction);

    }
}

}).call(this,require('_process'))
},{"_process":5}],3:[function(require,module,exports){
module.exports = class Vectorizer {
 constructor() {
     var most_frequent_toxic_words = ["you","i","the","a","to","and","is","not","of","are","fuck","your","that","it","do","in","my","this","me","have","am","on","for","will","with","shit","wikipedia","be","what","like","all","nigger","can","an","fucking","suck","so","ass","as","go","u","hate","if","was","page","just","up","but","who","he","get","about","or","person","know","no","gay","die","faggot","off","yourself","fat","because","moron","from","by","article","bitch","cunt","why","they","1","hi","has","jew","user","at","did","stupid","stop","sucks","wiki","how","pig","here","dick","out","want","would","there","should","his","some","cock","penis","talk","edit","we","think","now","time","going","bullshit","asshole","then","admin","life","being","block","idiot","when","wanker","been","fag","right","more","bark","other","even","vandalism","sex","make","does","please","only","than","see","any","piece","them","balls","again","little","nipple","their","bad","really","hey","kill","bastard","good","aids","hell","eat","dickhead","thing","fucker","which","say","care","him","were","also","shut","well","way","back","had","loser","nothing","give","down","such","damn","old","over","own","2","man","freedom","come","faggots","take","love","need","too","blocked","fucksex","yourselfgo","said","rape","big","tell","homo","keep","d","never","fact","comment","mother","huge","us","ever","still","guy","cocksucker","she","its","name","god","day","editing","f","look","nigga","super","dog","anything","where","delete","ban","oh","hitler","poop","very","information","buttsecks","work","before","something","mothjer","real","much","source","her","world","fggt","someone","got","bitches","pussy","many","read","noobs","attack","must","bastered","let","editor","use","site","those","could","pro","these","bush","every","made","better","wrong","into","post","assad","personal","banned","rules","anal","1st","put","warning","making","word","dumb","heil","new","trying","leave","doing","mexican","year","boob","edits","3","hope","most","try","fuckin","crap","power","hanibal911youre","anyone","mean","offfuck","fool","racist","since","reason","retarded","same","around","find","problem","ip","administrator","small","after","another","ur","thanks","bollock","ha","actually","place","pathetic","sexsex","last","nice","else","change","history","yet","useless","sexual","while","live","alone","lick","notrhbysouthbanof","call","deleting","account","whore","against","point","american","our","done","may","image","without","feel","away","deleted","lol","cocksucking","message","jewish","oxymoron","nazi","long","maybe","understand","criminalwar","bunksteve","enough","head","bot","opinion","called","fan","free","computer","prick","sure","china","remove","seriously","yeah","chester","sorry","people","org","believe","truth","mitt","romney","link","marcolfuck","revert","bum","self","http","friend","others","wp","everyone","fart","bloody","face","help","arse","dirty","write","already","homeland","anti","loves","yes","kind","thought","instead","continue","unblock","true","probably","whatever","fack","black","en","white","removing","vandal","smells","using","tommy2010","8","part","securityfuck","j","added","cuntbag","vomit","cougar","internet","picture","show","war","child","encyclopedia","stuff","makes","fun","idea","wales","sick","website","job","used","com","game","youbollock","takes","c","proof","lot","guess","dude","wrote","veggietale","thank","talking","5","jerk","ancestryfuck","saying","everything","egg","having","full","spanish","edgar181","add","discussion","troll","atheist","ya","joke","getting","boy","cheese","vagina","son","ok","fire","question","clearly","calling","robert","state","both","chicken","nhrhs2010","delanoy","might","o","licker","anthony","blocking","hard","says","always","threat","ugly","great","mind","r","obviously","hello","left","ignorant","once","sad","n","bradbury","ullmann","death","4","removed","language","anyway","seem","bunch","english","shitfuck","1967","whole","though","ask","until","bag","centraliststupid","fired","reference","country","guys","motherfucker","either","liar","action","piss","section","drink","claim","jim","ball","through","mum","matter","content","less","next","seems","lmao","mongo","k","stay","case","told","cause","s","reverting","rice","contribution","reading","retard","douche","10","abusing","kid","dare","dead","seen","rule","scum","george","ahead","happy","woman","mouth","ah","policy","school","quit","dumbass","t","girl","myself","list","sock","means","far","book","under","least","play","act","end","few","bit","wow","nonsense","shall","above","false","sense","fucked","best","simply","rather","71","completely","terrorists","bleachanhero","0","68","consider","aidsaid","human","needs","along","different","murder","quite","yo","view","mom","one","twat","listen","e","clear","gets","eye","correct","shithead","bitchmattythewhite","course","hairy","run","number","due","reported","evidence","non","wanted","agree","posted","p","lies","goes","abuse","funny","hand","info","jones","watch","butt","telling","family","shithole","worthless","waste","house","report","start","check","haahhahahah","yaaa","yaaaa","sign","written","stick","wish","high","learn","leaving","soon","writing","business","deal","term","coward","nerd","eats","address","dipshit","reliable","poor","between","google","2nd","insult","biased","complete","nobody","however","john","watching","pov","arrest","minority","million","argument","brain","ill","hour","coming","adding","chocobos","respect","enjoy","note","california","shitty","17","issue","hole","censor","evil","censorship","answer","re","support","grow","heard","communism","6","band","especially","jesus","diego","blank","entire","tried","important","homosexual","wait","vista","24","lost","example","found","www","15","ridiculous","suggest","statement","gayi","dear","likes","created","etc","cuntliz","single","text","serious","wtf","news","given","disgusting","several","mesan","chula","group","reverted","sort","boo","baby","86","100","looks","money","rest","b","taking","each","youre","lie","pennnis","pneis","pensnsnniensnsn","20","cut","known","cool","deletion","following","attention","came","looking","fascist","propaganda","liberal","home","uuuuuu","vandalize","ck","okay","shame","ruining","weak","nl33ers","fffff","anymore","ps","forever","bet","exactly","deserve","expect","hoo","di","itsuck","side","things","pretty","wikipedians","perhaps","muslim","ago","happen","douchebag","bother","shot","sucking","faith","subject","together","worst","edited","totally","total","started","mod","rvv","line","simple","explain","comes","taken","sockpuppet","lying","freak","worse","animal","wants","chink","prove","cccccc","kkkkkk","uu","kk","research","took","greek","fine","based","able","response","behind","cody","behavior","speech","terrorist","today","wonder","lifetime","six","absolutely","mention","unsigned","killed","gayfrozen","9","14","knows","order","himself","vandalizing","acting","public","years","realized","rude","11","sit","remember","silly","gave","obvious","request","edie","friggen","7","project","garbage","puppet","half","allowed","screw","preceding","entry","member","nazis","accusation","failed","control","song","user_talk","gone","spend","havent","original","donkey","communist","past","cline","gayfag","blood","living","political","changing","fight","whether","babywhat","cuntfrank","become","bully","putting","asked","night","apparently","speak","stand","blah","2013","burn","thinks","excuse","gives","thread","metal","wtc","fake","community","enigmaman","valid","monkey","asian","arrogant","shannon","12","g","christian","accept","weeks","shoot","posting","playing","went","tv","attacking","march","trip","notable","related","mine","standard","fair","floor","18","cares","upon","common","type","sweet","salt","kike","21","further","hit","title","haha","biggest","level","slap","credit","spics","2006","supposed","wikipedian","hypocrite","create","bring","british","longer","working","links","didnt","laugh","allow","material","knob","ahahahahahahahahahahahahahahahahahahaha","jasenm222","latinus","99","hurt","fix","finally","unless","gamaliel","later","possible","farted","certainly","move","open","difference","favor","topic","mad","nation","party","almost","law","22","m","changed","brown","horrible","cry","month","saw","reply","lion","misterwiki","mann","40","attempt","authority","knowledge","fit","citation","city","giving","week","crazy","buddy","hear","sweep","destroy","njgw","angela","fuckingabf","bongwarriorcongratualtion","216","lazy","shove","regarding","thinking","truly","jackass","none","ignore","nor","shows","certain","brother","phuq","stupidity","bye","front","college","video","relevant","cuz","happened","indian","raid","sloppy","muahahahahahahahahahahahahahahahahahaha","yooo","antivman","dive_right_in_awardhttp","16","forget","earth","welcome","send","mistake","itself","top","punk","except","otherwise","quote","lack","personally","win","annoying","oi","posts","jforget","159","outside","indeed","music","arab","kiss","story","cited","144","huh","jimbo","spam","knew","pay","official","america","russian","themself","bestfrozen","bill","vuvuzela","the_real_stephen_hawkinghttp","75","within","notice","motherfucking","religion","gg","y","step","chinese","somebody","lame","final","system","minute","ignorance","w","discuss","civil","sup","criticism","billj","lolooolbootstoot","bia","admit","sake","queer","slut","attitude","sannse","showing","goodbye","harassing","born","culture","assume","race","israel","including","articles","steal","version","republican","close","rock","50","jack","mentioned","pissed","idiotic","agenda","current","decide","realize","during","search","considered","libtard","61","follow","exist","award","media","wasting","worth","advice","straight","violation","individual","contribute","theory","therefore","form","offensive","blow","lady","summary","uncivil","useful","fc","mate","special","filter","btw","chuck","1967fan","76","79","sentence","whoever","photo","trouble","seman","angry","future","everybody","accurate","limped","dicked","fuckbag","low","porn","disgrace","harassment","father","cum","insulting","consensus","touch","asking","provide","body","reality","threaten","red","film","raped","118","filthy","recent","government","tag","messages","forum","nate","pedophile","appear","hair","movie","dust","enjoys","doubt","feeling","review","basement","wife","neutral","european","style","effort","basically","actual","trolling","nasty","david","according","chance","repeatedly","constructive","94","mark","sound","yours","hot","perfectly","multiple","respond","character","behaviour","debate","jeske","19","248","peace","sister","sucker","trash","banning","mess","accusing","legitimate","honestly","npov","admins","position","accuse","couriano","13","2007","2009","template","goddamn","area","perfect","disruptive","hide","ground","large","main","star","although","set","claims","meaning","web","hellor","229","islam","general","german","smart","towards","98","clean","pompous","save","situation","abusive","protect","nut","manner","team","result","keeps","class","password","227","decided","christ","proper","male","ing","tired","eh","break","parent","userpage","killing","anybody","wing","appropriate","defend","catholic","tool","interest","lives","land","logic","turn","idiots","kick","online","definition","purpose","force","space","rubbish","facebook","accounts","involved","contact","clown","1lol","23","70","master","worry","died","smell","beat","drop","scumbag","york","everyday","fail","typical","factual","meet","30","67","include","hahaha","threatening","paid","la","glad","virgin","normal","changes","extremely","dispute","contributor","united","bbb","69","2005","won","spread","fu","horse","dad","noticed","warned","neo","rot","spelling","unlike","honest","lose","hates","needed","turned","supertr0ll","fucky","lets","turkish","turk","age","mental","de","heart","amount","parents","awesome","doesnt","across","hes","childish","email","ancient","profile","da","attacks","ly","copyright","girlfriend","lover","cite","cancer","north","irish","ruin","proud","warn","planet","ho","clue","claiming","iranian","met","arguing","_","ggot","82","191","rid","constantly","failure","hold","throw","hatred","busy","works","expert","middle","fellow","enemy","society","provided","genital","juicy","barnstar","keeping","lunchables","mccain","28","74","cking","luck","al","street","users","despite","episode","vandalising","category","blocks","nose","protected","period","utter","wit","female","appears","addition","education","v","25","27","58","2012","running","bigger","date","cult","stalking","mentally","major","nerve","youtube","filled","merely","record","stated","swear","improve","religious","belief","korean","intelligence","scared","south","constructed","46","72","2008","proven","neither","sh","criminal","conspiracy","uses","irrelevant","times","petty","states","particular","figure","frankly","insane","fault","event","fraud","massive","album","gun","belong","ummmmmmm","saliva","64","678","social","bald","sitting","finger","contributing","august","short","somewhere","pull","attacked","starting","per","username","blind","ashamed","vandalized","highly","status","conversation","happens","plus","h","church","blog","tab","vote","kidding","youcaltla","d3","1r","norriss","31","42","90","173","179","aware","couple","prison","victim","editors","often","bull","crime","pure","isnt","ad","india","author","study","interesting","usa","anywhere","genre","stating","anus","onto","lovers","9807","included","test","lord","somehow","moderator","stalker","apology","absolute","various","reporting","remark","holy","cos","deserves","stuck","legal","join","immediately","hiding","accused","l","majority","harass","king","billcj","maher","meatspin","48","122","listed","racism","defending","upset","explanation","skin","giant","concept","sleep","meant","young","board","series","pages","sounds","complain","double","james","omg","present","dave","national","thousand","possibly","177","miss","sometimes","sandbox","count","jump","hypocritical","freaking","ignoring","geek","supporting","views","inside","proxy","foolish","helping","laid","easy","afraid","civility","error","loving","allemande","guidelines","33","54","192","kindly","hating","july","ips","access","negative","politics","warring","ego","bs","eating","brought","currently","refuse","nature","random","properly","looked","thats","fighting","x","pant","below","uk","assyrian","80","97","dark","pushing","likely","quality","adult","intelligent","earlier","cat","thi","germany","whom","minded","speaking","skill","previous","process","creating","insulted","usually","serve","slave","vandalise","student","controversial","bio","sourced","seeing","pain","demand","wedge","trust","destroyed","hail","shoit","26","65","73","92","129","168","195","homosexuality","appreciate","battle","modern","worked","bullying","discussing","bro","paragraph","terrible","teacher","value","intellectual","spent","load","box","african","3rd","yea","considering","pic","flying","dealing","forgot","similar","zionist","spell","color","choice","anonymous","recently","censoring","organization","moment","definitely","return","korea","stopped","diff","paul","corrupt","bout","cia","curps","rever","56","78","fall","innocent","local","became","university","curse","id","wall","immature","heck","sue","choose","niggaz","activity","tiny","comments","russia","issues","disagree","basis","proves","offended","native","jimmy","er","damned","logical","identity","refer","hack","detail","whose","erase","net","canadian","pointless","beyond","shown","81","232","bible","decision","thus","suppose","silence","beautiful","century","complaint","named","crying","company","referring","congratulation","buy","understanding","removal","messing","quick","flag","bothered","argue","cop","forgive","available","refrain","html","illegal","apply","laughing","hater","plain","suicide","kurt","foot","file","simpson","deny","62","176","sincerely","damage","ability","suspect","ready","existence","un","featured","historical","basic","polouse","nearly","handle","population","repeat","acceptable","rat","played","concern","visit","pop","hero","obama","cover","describe","hopefully","kept","pick","thick","famous","bias","data","whatsoever","promote","unblocked","pretend","goof","fucken","kaff","dickbutt","35","66","87","172","180","420","fuckhead","track","prostitute","poo","fucks","alive","goal","concerned","effect","turd","signed","incorrect","second","iran","gwernol","club","licking","insert","police","flame","lead","avoid","letter","conflict","yank","surprised","sexy","stage","deep","ethnic","tom","strong","regard","redirect","hahahahahahahahahahahahaha","violating","sent","censored","ashol","malusia","bail","32","89","139","gang","fuk","late","dance","express","arrogance","bite","interested","calm","hindu","room","sending","reader","confirmed","scientific","fully","apologize","unemployed","yall","mommy","linked","forced","incompetent","semite","matters","central","felt","blame","degree","truck","speedy","size","held","bold","campaign","joe","republic","peoples","pedo","sucked","justice","worthy","teach","separate","php","push","rant","moonshine","wanta","butthead","jessica","53","85","107","142","149","200","244","2010","mass","tony","nationalist","violent","boring","april","french","player","share","exposed","experience","western","dishonest","press","mail","drunk","dozen","knowing","log","light","guilty","maggot","crack","tough","encyclopedic","genocide","thomas","lesson","fly","complaining","imagine","treat","scientist","ppl","magazine","fear","calls","undo","facts","car","japanese","dickface","grade","biography","leftist","nl33ersi","air","co","easily","minor","owned","beavis","59","95","114","132","145","153","174","186","210","first","awful","moronic","spreading","entirely","foul","professional","besides","england","im","wide","vile","caught","becoming","killer","mighty","drive","greatest","pity","pretending","beginning","hang","necessary","hypocrisy","lesbian","tit","inch","military","bigoted","bongwarrior","wwe","grammar","persian","bitchmother","notability","violate","remain","near","emo","commie","38","41","45","60","124","156","162","164","217","254","undoing","blatant","pervert","hahahaha","threatened","till","responsible","steve","daily","semitic","explained","defense","chat","mostly","gut","complex","willing","uneducated","football","punishment","illiterate","treated","june","bed","ruined","gotta","michael","cyber","fa","09","beth","lived","ear","sack","alternative","belongs","thug","fuckwit","pointing","sources","fantasy","favour","australian","helped","kicked","05","arsehole","court","shyt","duck","contra","36","44","84","166","184","250","251","uh","creature","suffer","tonight","pissing","art","humanity","among","hated","agent","pile","road","positive","academic","cow","topics","supported","fast","01","royal","suggestion","cross","alright","directly","believes","racial","november","jersey","objective","published","devil","miserable","rapist","regardless","powerful","blue","plenty","morning","crappy","wrestling","tea","addresses","benefit","bigot","virtual","method","dan","finding","anime","whine","toilet","slow","noob","prefer","caltla","suppressing","146","190","209","228","dream","headed","artist","smelly","imbecile","practice","ignored","tells","dat","insist","paper","picking","deliberately","wikipedium","islamic","san","reasonable","anon","words","inappropriate","lock","waiting","fucktard","dummy","righteous","wat","index","inc","jpg","helpful","external","furthermore","label","unfortunately","spongebob","nick","confused","screen","product","newspaper","wondering","mah","plz","whining","strange","aggressive","australia","october","numerous","iraq","taste","jews","fascists","uhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubni","sikh","retardedyour","scrotum","jpgsuck","37","57","91","101","131","201","questions","holocaust","spot","breaking","amazing","grave","jealous","naughty","molesting","bin","mo","sexuality","water","soul","loose","moral","tree","button","difficult","spamming","limited","pass","citizen","indefinitely","bothering","showed","network","september","boss","army","canada","spending","closed","eyes","round","rob","twice","charge","rots","peter","reverts","friendly","ani","bored","harry","fuckk","reasons","conclusion","breath","missed","rodeo","machine","wigger","everywhere","yammer","wolf","viva","oli","165","2011","northern","folk","badly","children","daughter","throat","usual","extreme","ben","boyfriend","regards","letting","carry","pleasure","range","appeal","paranoid","daddy","foundation","hobby","socialist","abused","commit","morons","wannabe","generally","behave","surely","denial","stfu","utterly","league","dictator","field","specifically","archive","ought","specific","former","continued","00","desire","services","elsewhere","02","weight","green","tight","followed","homophobic","protecting","libel","serb","correctly","smoke","terrorism","protection","drug","plan","empire","significant","chose","feels","justify","pink","contributed","era","replies","rajput","math","grandma","terri","referenced","pg","bootstoot","asswhole","96","108","123","178","181","205","2004","food","realise","lawyer","unconstructive","idiocy","filth","decent","valuable","office","clever","sand","proved","wipe","buck","hungry","town","names","connection","spends","context","precious","lulz","regularly","january","lucky","pray","particularly","verizon","europe","service","standing","checking","previously","responding","disruption","arbitration","lil","apparent","science","wake","don","plot","higher","staff","radio","kkk","gotten","ape","looser","ideology","satan","voice","copy","strike","private","average","hazel","hardly","homosexuals","pedia","robot","monkeyman","loloool","macro","spartucused","alstair","34","51","93","130","141","182","202","arm","pc","bullies","roman","gross","mainstream","incident","tone","knock","conduct","obsessed","teh","impossible","eventually","slander","politically","wikipeida","repeated","international","checked","keyboard","em","soviet","exact","agreed","desperate","sine","legion","wank","um","prevent","cease","victory","via","relationship","object","rip","bottom","ones","location","justine","democracy","credibility","regular","bitching","tibbit","noted","engage","challenge","polish","months","caused","sexist","update","meat","soldier","fuc","hunt","season","lyrics","faced","justification","sitush","unacceptable","channel","sht","prime","saaaaad","tabtab","csd","ea","39","49","112","128","134","161","163","170","183","196","214","222","1000000","william","origin","wasted","secondly","neutrality","amusing","rate","throwing","tears","easier","harm","blp","revenge","importance","covered","excus","responded","cheer","married","contrary","reasoning","supporter","blatantly","q","lower","asswipe","required","administrative","natural","yep","wear","diety","direct","released","catch","dont","directed","days","stink","fixed","gender","women","presence","sun","equally","revision","intent","mike","deepak","reputation","democratic","lay","odd","fed","attempting","dildo","task","unsourced","laughable","proposal","broken","arbcom","bob","existed","worm","ed","global","slowly","yer","suit","alex","hoping","chris","suggested","hav","deserved","primary","burned","dork","clueless","mama","accident","universe","3rr","secret","chick","zuck","dying","santa","twitter","accepted","hence","08","cold","lessheard","vanu","154","158","187","194","199","220","252","goat","bear","stinks","park","presented","pakistan","superior","mothers","card","bogus","claimed","cowardly","concerning","opposite","career","conservative","supremacist","iq","leg","naked","walk","favorite","weed","finished","surprise","greater","base","personality","israeli","fox","movement","obnoxious","union","table","correction","sysop","offer","otherword","paterson","anger","forward","weird","polite","investigation","began","latter","formal","trial","instance","described","shared","length","fame","points","permanently","smoking","painful","code","forth","hundred","invented","loved","county","credible","resource","integrity","pole","redneck","target","arbitrary","afd","fred","kissing","roll","discussed","scholar","upload","residents","uploaded","judge","8181818181818182","fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck","fece","jackson","castro","countless","macedonian","https","exists","criterion","sucksfrozen","f2p","52","83","102","103","125","138","185","234","pair","matt","pashtun","yamla","careful","controversy","dictionary","kurd","turkey","lonely","dislike","constant","restore","twit","fairly","dis","whenever","meaningless","monster","active","wikimedia","gods","impact","west","slightest","learned","trick","inane","supports","murdered","ii","hilarious","format","pointed","absurd","tax","ian","administrators","ufc","dynamic","insignificant","throughout","becomes","openly","proving","commenting","hat","background","legit","remind","fatuorum","urantia","writer","building","attempts","africa","spirit","jun","early","doosh","owner","stands","shower","spit","boi","equal","telugu","bound","popular","pics","rebels","aleppo","gvhy","ye","mutha","verifiable","leader","flaming","plays","misleading","fish","misery","ka","literally","squad","pal","unreliable","hmm","ended","quoting","whats","pseudo","supressing","suckersyou","shioty","ashit","shgit","ahot","aot","shiot","shti","sot","cake","47","203","204","207","215","230","800","1984","2015","destroying","screwed","bow","malicious","italian","freakin","uncle","kurdish","kinda","wasnt","ta","offense","principle","frank","somewhat","boston","grand","lousy","idle","providing","degenerate","seek","partisan","talkpage","moved","finish","east","traffic","armenian","bug","glass","educated","allegation","exception","refused","thief","wonderful","cus","frozen","chill","classic","expected","murderer","alleged","door","development","circle","prior","pee","semi","continuing","guest","display","appreciated","taught","sarcastic","nationality","radical","hoe","palestinian","intention","andrew","neck","february","journalist","received","husband","affair","cowards","thrown","fruit","mary","pen","hateful","approach","chair","contain","hacker","encyclopaedia","britain","drinking","ireland","bang","ybm","zuckerberg","security","mel","cultural","sponsored","quickly","traitor","scribble","heh","broke","slightly","managed","assassination","missing","replied","hsoit","drummer","manual","facists","29","55","106","111","127","169","206","211","212","226","242","appointed","tosser","masturbating","empty","willy","script","ethnicity","productive","revealed","teenager","dumbest","mature","acts","testicle","disgust","hunjan","fiction","answered","placed","dangerous","permission","meeting","assholes","choke","assuming","descent","model","raping","library","sore","dumbfuck","pusher","picked","bright","aka","defeat","influence","frustrated","ultra","retired","revolution","path","dies","slavic","improving","06","represent","symbol","bridge","compared","sockpuppetry","myspace","associated","sheep","heads","hoax","twisted","wet","association","edition","believed","replace","fatty","health","gas","airport","shoulder","safe","familiar","ownership","joseph","slur","sided","dvd","inaccurate","johnny","pope","extra","handed","burning","sensitive","undid","writes","ima","impression","pulled","peice","stinky","awww","someday","hanging","cretin","warming","begin","heres","founder","martin","hill","confirm","dahn","grasp","bar","che","cleaning","election","rfa","couldnt","medical","rich","assure","flap","pecker","desk","violated","fell","apart","publicly","moon","tries","evolution","listening","fukin","spoke","punch","december","brains","extremist","reports","deathcore","thumb","latest","shite","viewpoint","karen","weeaboo","isbn","pirates","algorithm","63","77","105","109","115","117","157","171","188","189","218","221","240","241","1000","1990","sin","fictional","everytime","fagget","afghanistan","zero","peer","happening","men","quoted","decline","bringing","hits","remains","clan","ethical","sum","jeremy","bomb","eyed","cracker","dragon","eastern","drmy","soooo","bashing","cousin","expression","grandmother","baseball","whiny","arabic","kingdom","gold","awards","sean","unfair","facist","annoyed","userbox","sight","seeking","boot","mindless","harrassing","dropped","becuase","tomorrow","draw","suggesting","junk","arent","vindictive","hispanic","xd","falls","expose","unable","jeff","falsely","fuckers","refers","sees","trusted","tale","judgement","smear","fuckface","engaged","blanking","extent","themselves","fighter","serves","screwing","harder","violates","mirror","stolen","referred","actively","fuking","paying","scene","widely","ref","older","perform","scare","bugger","oil","root","humor","description","cute","turkic","unfortunate","buried","carefully","trouted","delusional","noone","stalin","tactics","purely","pretentious","constitute","vandalised","corner","jail","paste","nu","puke","ng","gtfo","tongue","obsessive","na","recognize","fill","joy","opening","objection","cheap","publication","ton","romanian","suppress","spotty","tyrant","motha","arrange","pre","virus","bulgarian","intended","division","putin","jschnur","duplicate","deletionist","bicth","putza","104","110","119","133","219","231","400","777","nope","horny","candidate","match","sob","4285714285714284","committed","historian","fails","knee","window","operation","admitted","images","wash","key","reject","niggers","poorly","allah","pride","negro","privilege","momma","discovered","masturbate","center","monitor","map","wee","regime","sri","apologise","hominem","nationalism","charles","pot","coffee","cunts","urself","goon","stance","retentive","reaction","stalk","masturbation","interpretation","fanatic","fixing","logged","chain","curious","advertising","spare","smile","loud","passed","physical","wine","virtually","opportunity","bare","unnecessary","friends","profanity","asperger","rfc","movy","behalf","guide","pedantic","mar","bullied","relation","experiment","strongly","offend","instant","inserting","click","molester","phrase","mentioning","london","usage","spoken","brave","singer","losing","tooth","collection","keith","anarchist","jus","ryulong","crusade","administration","travel","creation","aol","erasing","ice","sport","talkin","purple","solid","loss","refusing","attempted","documented","obsession","pit","fist","swine","screaming","trade","orientation","wording","limit","resolution","creep","camp","encourage","manage","beating","spite","turns","van","headline","actress","accuracy","pimp","scream","property","dustbin","losers","kerry","hearing","checkuser","aside","dutch","aussie","allows","vocal","wicked","malik","vincent","eppstein","rw","advocated","cannistraro","43","120","155","245","2014","erased","helps","independent","geniu","nowhere","albanian","skull","lines","kids","dem","joker","ancestor","climate","role","narrow","moving","fukkin","dismiss","crybaby","swallow","weasel","enjoyed","communicate","replaced","daniel","ally","causing","bay","region","cup","th","maintain","swastika","nerdy","linking","tilde","crook","drove","acknowledge","motive","ga","contributions","program","registered","pest","originally","disease","cowboy","trivial","automatically","unwarranted","requested","smoker","yesterday","item","amazon","adam","decency","slick","fanboy","gger","freud","enter","belive","wearing","enjoying","orange","tolerated","schengen","retarted","ignores","continues","register","corpse","readers","homework","slavery","intercourse","chriso","driven","novel","covers","scale","enforce","mediation","harrassment","scholarly","journal","brilliant","mistaken","learning","alert","wouldnt","heavy","designed","improvement","allowing","river","bat","suffering","condom","brainwashed","eric","truthful","misinformation","stinking","promoting","stealing","circumstance","bank","established","dickwad","hours","watched","craig","ends","cruel","ryan","phil","caste","massacre","liked","cuba","psycho","species","trivia","pansy","document","barely","orgy","foreign","tradition","locked","interpret","train","laden","vicious","portion","ann","rational","badge","controlled","creator","ukrainian","mentality","nerds","nosed","hip","hop","socialism","fyi","serving","interview","nickname","assertion","oldid","dedicated","requirement","junior","shill","isp","irritating","whilst","penisis","intimidate","adds","birthday","focus","sell","reviewed","fk","jar","reflect","numeral","nsc","agencys","113","140","160","167","193","208","239","246","247","drown","minutes","playground","rumor","immigrant","slimy","cell","beg","psychopath","jumped","capacity","cd","shitting","comic","crawl","babe","bla","stole","capital","snitch","signature","grown","respected","backwards","reign","outta","measure","japan","francisco","joking","opposed","beloved","runs","justin","identify","nazism","mouse","retards","france","selfish","bought","butthurt","joined","preventing","sat","frustration","baseless","wikzilla","toe","barack","ss","beer","sunrise","nutcase","informed","incivility","bnp","compulsive","defence","dogshit","fundamentalist","returned","florida","dress","toward","impressed","breathing","consequence","harassed","potential","twist","hurting","deletes","opponent","participating","z","mentions","seperate","mummy","rush","mere","fights","paki","surface","dam","puts","fairness","rewrite","chicago","democrat","elitist","recognized","mankind","pr","melodic","brand","anyhow","ma","excellent","serbian","blogger","talent","contempt","feed","yankees","slang","defined","contest","gothic","anytime","patience","hidden","demon","fcuk","richard","remotely","speculation","drama","teaching","engine","birth","fatass","proposed","dealt","amusement","justified","nuff","dyke","punished","listing","cynical","lied","sold","supposedly","translation","compare","turning","replying","recall","element","chip","faggoty","gs","ultimate","lmfao","thru","belle","fo","puerto","rotten","impotent","mountain","heritage","inform","punish","outrageous","neil","gosh","wise","incapable","bent","knife","hood","deeply","boxing","vs","saved","crum","americans","merit","splatter","treating","guideline","bell","factor","philosophy","perverted","pakistani","skinned","fringe","banana","beeblebrox","domain","wheelchairi","denied","webquest","manipulate","fought","horrid","holding","hu","rationale","jujube","redundant","entity","redver","safesubst","dickbig","dickheaditalic","88","116","135","143","147","150","152","175","197","233","255","2000","exclusive","destructive","gays","dry","someones","jay","pool","stopping","04","jan","yourselves","supreme","kim","smug","poster","chest","mix","wil","tard","dennis","fisherqueen","bud","condition","notices","lolz","suddenly","turks","htm","growing","crowd","minds","hint","maker","diaper","kitten","demonstrate","sexually","cursed","spastic","litter","speed","kansas","iii","xbox","ilk","clique","asshat","irrational","intellect","christmas","sickening","solution","rights","arthur","surname","duty","serial","tyranny","discrimination","flat","chump","beatles","heading","stubborn","winston","succeed","submit","islamist","rediculous","fock","dense","webpage","cloud","require","publish","equivalent","transgender","replacing","bands","toy","eu","muhammad","hospital","addiction","suspend","approved","malleu","envy","girls","boys","hardcore","hostile","politely","bizarre","entitled","alcohol","weekend","contrast","encounter","falling","spelled","courtesy","driving","incredibly","continually","effective","unbiased","aid","sufficient","coi","unhappy","spain","tha","spade","consideration","judging","quiet","receive","rag","qualify","backward","expense","disrupt","worship","cluebot","vendetta","impress","brit","license","asinine","doo","blown","epic","island","served","rolling","kannada","tamil","heavily","begging","hebrew","4chan","bearing","movies","greece","rambling","bishonen","involves","sayin","comedy","release","wars","addressed","pornography","federal","cast","correcting","triple","ring","amongst","build","motherf","ch","fucka","glorious","npa","corrected","smarter","theyre","revisionist","disturbed","shop","feature","drag","dish","lip","grant","palace","detailed","bottle","harvard","autistic","ceo","cure","congrat","subjects","annoy","sides","aspect","bee","sing","tolerate","flower","honor","4th","trace","spaniard","favourite","deluded","stab","obtuse","templates","wrongly","bothers","prolly","humour","lecture","price","offered","shameful","critical","gigantic","linda","bombing","wikia","walter","civilian","albino","oreilly","blanked","incivil","goth","tosh","pound","bird","decides","gorilla","fuckwad","bastards","03","angel","commonly","mcewan","attractive","propagandist","copied","psp","advance","ending","fancy","adolf","dahlia","nomination","wut","trout","gogo","dodo","blogspot","gain","mongrel","yehovah","trap","dayewalker","depth","highest","nawlinwiki","extinct","pattern","brainless","kleargear","nevermind","wik","gawd","badgujjar","keepin","driver","spiral","github","featuring","121","137","213","224","235","238","253","combat","wimp","mobile","reversion","et","bone","myth","existance","civilized","intend","storm","soapbox","whereas","exchange","defective","paglia","alike","singh","produce","sits","treatment","normally","buzz","vast","homie","klptyzm","adminship","engaging","danger","corrupted","ranting","scope","bucket","ran","reset","fallacy","dropping","imperial","ooh","youve","merge","disrupting","bitter","viking","creative","hall","serbia","pa","unbelievable","technically","torture","visiting","museum","agf","reveal","fags","persistent","bigotry","iron","destruction","ar","wanting","confusing","granted","guarantee","distinction","priest","bureaucratic","guard","donate","dump","xenophobic","reads","jason","commentary","immediate","split","rap","medal","protest","procedure","advocate","switch","unit","passage","frickin","marry","benefits","fortunately","schedule","slit","insisting","raised","8th","incompetence","dicks","verbal","cheek","dirt","kong","corporation","contacting","dublin","ruler","backed","sometime","comrade","feeble","translate","contrib","hooker","guevara","essentially","rofl","shitface","kills","energy","explains","pulling","beast","spin","wiping","restored","contained","butthole","talked","breast","spoiler","books","sword","application","amendment","lewis","croatian","wears","fascism","trigger","uncyclopedia","cent","doom","kevin","believing","stupidest","market","ganna","motivation","despicable","anointed","incest","weakness","untrue","handful","rats","regret","ll","wrestler","pipe","contacted","patent","witch","tender","champion","existing","goodness","meatpuppet","reckon","cabal","swedish","assured","progress","convicted","illness","edge","celebrity","spineless","meaningful","wanking","moms","phone","refute","deed","verified","chavez","motivated","assclown","sooner","promise","riddance","honesty","wretch","stupidly","adress","pack","dreadstar","thoroughly","slapped","starts","yr","stereotype","plainly","assed","paedophile","stone","opposing","forcing","qualified","formed","guessing","audacity","illusion","closing","reach","washington","profit","gook","vietnam","testing","mainly","fits","mission","championship","blunt","wikinazi","planning","marine","aggression","doc","counter","wind","angeles","lolololol","poland","palestine","pet","overall","neiln","aramaic","ridiculously","faggotmongo","sale","herself","advise","mulatto","passive","guitar","soccer","communicating","comparison","offence","niggertard","macedonia","palmer","winner","norris","151","223","236","243","249","2001","sidaway","store","trained","prophet","talks","racists","poopie","additional","ride","built","promotion","persecution","automated","perish","pokemon","monday","disputed","typically","sticking","smith","correctness","policing","led","worried","occasionally","marriage","pushed","aryan","scjessey","lowest","includes","chase","advantage","hehe","represented","le","encouraged","rectum","commercial","goddamned","shape","hollywood","endless","rub","forgotten","winning","graduated","figured","defeated","wikinazis","tribe","colombo","wrist","suggests","signing","prejudice","pisses","understood","jayjg","ideal","violence","trollish","pertinent","clothes","dos","verify","shitbag","inserted","daft","issued","condescending","consistent","questionable","thou","hathate","n00b","enforcement","auburnpilot","scandal","pls","graceful","ugh","mixed","politician","documentary","contemporary","knight","shoe","dinner","undeniable","wore","manhood","inherently","ultimately","tend","disrespectful","option","judgment","spy","wikis","occasion","damaging","crush","ninja","indirectly","insults","nancy","wishes","fanatics","saddam","obscene","software","busted","animation","bus","jill","6th","fork","sounding","indicates","imagination","sunday","joining","expressed","crew","abuser","tie","unknown","print","jerkoff","lighten","janitor","persons","sarah","untill","promotes","disagrees","tabloid","monroe","observation","habit","eternity","shadow","caring","meets","whoop","incredible","determine","hippie","inferior","agreement","border","foreigner","juice","deviant","lab","educational","training","gene","antisemitic","sham","groups","printed","publishing","produced","rocket","cena","bi","fellatio","declared","rumour","oops","rick","naturally","temper","subhuman","server","witness","orthodox","st","noticeboard","walking","dominated","wheel","cmon","recorded","apple","mid","drivel","nah","taht","heaven","precisely","ou","inbred","saturday","behaving","disturbing","pictures","failing","faggit","inclusion","problems","latin","handhe","freaky","raul654","motherfuckers","prepare","sigh","nuclear","osama","philosophical","snow","dollar","brothers","technique","uck","developed","zhanzhao","muscle","genuine","mexico","latino","photograph","tommy","fashion","creepy","delusion","ironic","loserqueen","cap","johnson","manipulated","faster","memory","titty","niggardly","logo","displayed","ukraine","gee","intentionally","blonde","arabian","judaism","convinced","ymblanter","toss","cooperate","largely","assumption","seat","bleed","warrior","cites","scary","unpleasant","stub","metalcore","agrees","3333333333333335e","seemingly","atleast","pm","loik","vanity","gentleman","rawr","poker","esteem","sunni","gary","stephen","jumping","senseless","feces","umm","thankyou","urge","brick","flight","unique","entertainment","tranny","hahahahaha","bleeding","norman","penistown","newcomer","puta","thoughts","tuesday","syndrome","council","raise","yu","revoked","marxist","wobb","reversing","dc","demanding","sanchez","slapping","deaf","actor","meter","iz","academia","banging","lisa","notion","gather","involvement","pronounce","ova","d0","bwilkin","indefinite","poem","define","prominent","gimme","occupation","chief","repeating","values","je","espionage","epbr123","pronunciation","nicosia","126","198","225","237","333","500","763","999","1995","3000","100000","tiger","ww2","grudge","recommend","operator","sued","moar","secondary","outright","alter","speaks","barry","uptight","weirdo","oral","dawg","weapon","walks","begins","sanctimonious","totalitarian","lecturing","wikiproject","ruled","mouthed","criticise","feminist","browse","gunna","darkness","rejected","pos","ct","nam","infringement","jizz","selective","persistant","syria","molay","sane","youyou","pitiful","lately","unwanted","thy","sibling","sam","eater","determined","exposing","bits","andpiece","fagot","cker","fing","ot","sooo","oooh","insecure","threats","pieces","stack","mood","christians","yah","improved","ongoing","barbarian","greatly","wrath","infact","samuel","cuban","trashy","akbar","purpos","harmful","dec","eternal","undone","sheer","breakdown","ooooh","filipino","satisfaction","welsh","implying","uncalled","dum","employee","organisation","acted","unblocking","tolerance","duke","sympathy","mr","disorder","psychotic","ohio","parasite","roger","jet","represents","pagan","fking","couch","tch","tactic","hug","chatting","sharing","dorm","thin","permitted","belt","thigh","preferred","slack","bore","pianist","addressing","messed","josh","extend","convention","realy","tramp","monitoring","hands","sewer","answers","mud","fellowship","illogical","requires","rabbit","actions","hai","kafziel","charges","musical","recognition","marcus","transparent","ethics","cultist","bash","tp","offender","disabled","rapper","village","infobox","derogatory","czech","stan","kosovo","figures","luckily","pat","disappear","vulgar","sleeping","sadly","disregard","sahrawi","sissy","palin","bans","sings","quotation","wacko","citing","wild","git","jerks","input","qualification","fanatical","deceased","tang","shock","kannadiga","hermit","bless","collect","visited","pan","jlatondre","rudeness","forbid","makin","hockey","department","christianity","advanced","notes","refuses","additionally","tho","ps3","yamaguchi","descendant","shortly","ilchee","saab","nationalistic","cost","phras","vampire","dreamguy","potter","wankers","somethin","afterwards","squeeze","slutty","midget","cockroach","clinton","saxon","floyd","resist","tryin","furry","ghetto","nig","devout","dong","leech","brained","beef","despise","collapsed","physics","duh","opposition","gestapo","civilization","bullet","laughs","zoom","embarrassing","submitted","scientology","moore","marie","rv","imdb","aged","updated","rican","terror","grader","celebrate","heat","regarded","con","lez","propagandists","grew","interaction","stir","littlemountain5","editorial","smash","phoenixreporter","prank","accomplishment","shameless","boom","contains","unlock","bath","forbidden","nuke","typo","inability","rarely","largest","interfere","hayes","irc","withdraw","sentiment","bubble","flawed","greeting","researcher","hopes","experienced","statue","larger","julian","hurts","crock","ungraceful","gossip","happend","molest","shooting","armed","forces","surgery","teen","suspected","youi","policies","scam","placing","owns","cheat","rhobite","tim","firm","unban","sets","ned","rod","nuisance","mohammed","explaining","holder","conway","dweeb","coal","requests","jewfat","interfering","carried","production","grass","generic","permanent","coverage","score","abc","welfare","sweat","goin","shout","sieg","consistently","reagan","admission","facing","aclu","function","anglo","congress","ancestry","blatent","issuing","troop","guilt","bureaucracy","sub","hahahahahahahaha","trolls","drum","sa","silent","medicine","unreasonable","relating","ds","southern","poison","ted","nuts","validity","unhelpful","nableezy","blowjob","wa","industry","pays","joint","stock","gaming","pakistanis","risk","monger","farce","whale","chosen","yonsei","antics","chelsea","reached","voted","suspicion","causes","rascal","childrens","television","alison","tank","pice","prestigious","officially","hurricane","clau","intellectually","hurry","digg","gag","encylopedia","applies","dogs","ads","platform","legend","participate","fyrom","denis","hong","gwen","gale","guru","speaker","kamboj","dbachmann","berry","uncensored","shitlol","136","300","1980","asks","grab","noble","italic","reduce","traditional","salute","mofo","compliment","literature","websites","prohibit","sanction","antisemite","vain","firstly","dub","lake","ballz","savage","hire","kiddy","kicks","breaks","gibson","buffoon","sadder","whoa","wid","wave","unprotect","subjective","moi","blaming","adopt","yard","feb","canon","respectable","tape","shocked","whim","awhile","shouting","lift","lunatic","exposure","shares","rogue","rose","summon","shake","harrass","thousands","interact","bich","raging","typed","sweden","hub","ages","accessible","explicit","kool","uninformed","appeared","geez","cossde","tied","friday","expertise","barek","ensure","pale","senior","yawn","maintaining","comprehension","hook","curtain","enormous","ballsack","rise","disgraceful","blows","spouting","debating","hooded","classified","mob","hopeless","blowing","snide","modem","decausa","hay","tip","threw","references","beauty","irs","physicq210","requesting","counts","jpgordon","command","drunken","shutup","chan","defining","develop","occurred","physically","jam","transvestite","restaurant","suburb","lighter","shade","skirt","strap","heel","shorter","testament","invite","sofa","roast","concert","analysis","cutting","detrimental","howard","worded","suffered","pod","chin","grip","closely","communication","ray","singing","accuses","chooses","worldwide","host","hypocrites","potentially","zoe","diamond","vodka","asia","imaginary","solaris","futile","bryan","discography","grey","yeh","pleased","remarks","wikipeidia","corruption","compromise","advertisement","clowns","republicans","comparing","authoritarian","warnings","spout","proportion","environment","italy","sourcing","warcraft","continuously","numbered","centric","distort","voting","stern","stripped","economic","constitution","bitchy","horribly","hls","considers","ive","antonio","resigned","firefox","forsyth","stomp","classical","aspie","waht","wreck","icon","hahahahahaha","balanced","painfully","incessant","kicking","fools","touched","expired","straw","obese","imagined","sought","documentation","plane","leaves","mongol","sect","qld","implies","biatch","smartass","filed","lofton","strip","copies","activist","aim","introduce","ytmnd","disagreed","solve","uaf","rage","angle","matches","proceed","alan","shirt","levy","harrasing","dismissed","comics","jolly","roster","fried","conducted","champions","newby","gutless","confront","nevertheless","hitting","whistle","recognised","nightmare","srebrenica","poisoned","summer","expecting","ding","abuses","texas","snake","strength","whites","tear","noise","ups","liking","recognise","maturity","belly","artical","contradicting","au","bryant","jd","archives","frog","dating","fantastic","watches","systematically","msg","resolve","luv","prepubescent","jon","imperialism","brainwashing","dishonesty","crackpot","ticket","phony","cnn","babies","bc","spiteful","hm","foolishness","scratch","breakfast","closet","bullcrap","equality","alexander","denying","brutal","glove","epithet","snot","stops","hog","auto","indicated","blamed","combination","carrying","kuru","homophobe","merry","economy","agony","suspended","reversed","mormon","complains","employed","jacking","resistance","discredit","perspective","newbie","casual","dull","rabid","semitism","stepped","sole","fuckhole","pimply","han","criticize","approval","uuuuu","moreover","manga","ranking","jonathan","emphasis","skewed","diatribe","mocking","cole","athiest","luna","rudely","copying","jerking","dig","desperado","rsvp","scott","daedalus","stronger","5th","comply","righteousness","firmly","stays","extension","hunger","crash","deliberate","coldplay","halfway","smack","jungle","realised","dame","imposter","concede","router","fbi","tagged","fry","pasted","golf","describing","multi","mask","anna","relatively","bragging","transsexual","egotistical","hypothesis","spider","opinon","pwned","puppetry","ker","tragedy","nominated","terminator","magic","lunchable","outing","fooling","removes","centered","airways","rated","stains","dictatorship","internal","buying","hiv","flea","genetic","germanic","indicate","shankbone","chode","fans","irrigation","malaysian","technical","lacking","seemed","kitchen","diaspora","informative","earned","worker","baiting","scrap","mole","hmmm","files","questioning","appearance","goddess","manchester","successful","ahole","font","capable","vietnamese","fundamental","beckjord","unsuccessful","hired","oppose","convert","aviation","resident","opened","exercise","snivelling","uniform","boner","gujjar","acceptance","offending","arabs","khan","lefty","soap","moldovan","ina","youth","ira","hacked","eff","honey","innit","complained","happiness","fairy","badass","fidel","sunflower","omp","darker","ship","licks","certified","tests","attorney","abe","answere","30mod","sieve","60mod","greatings","gaetjens","howcheng","148","850","1969","1991","1999","894840","nonsensical","brutally","shave","deadly","beware","batman","meta","tw","atheism","laurent","execution","customer","honorable","parrot","namely","emperor","chauvinist","murdering","purposely","meanwhile","violently","simultaneously","locate","pete","ali","volunteer","drawing","representation","breathe","controlling","tagging","marking","golden","dawn","doggy","tht","vandals","sensible","minimum","chanting","tory","assault","cough","funeral","sux","mercy","hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha","lolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol","aaron","toad","perception","theorist","henry","philip","perversion","legacy","grief","naconkantari","festering","cage","wholly","hippy","outrage","hostage","passport","kshatriya","deals","increase","determination","poisoning","yourcousin","ol","solely","earn","crackhead","alredy","farm","sausage","closest","arguement","stood","poke","warm","addicted","rss","percent","affect","evidently","dares","areaseven","merciless","yada","survivor","socking","abus","presidency","fresh","pseudonym","critics","madness","publisher","accurately","raising","pronounced","clearer","saving","responsibility","wikipedo","mf","slime","hatchet","yellow","burns","herd","aggressor","caucasian","nt","smalljim","grawp","lance","pizza","jeppiz","connected","overwhelming","graduate","manipulating","dislikes","desist","suk","warmonger","abd","masturbator","careless","mild","significance","organ","shift","heterosexual","leads","aforementioned","sleeper","enabling","dmack","graduation","roommate","recliner","stocking","fitting","absently","intimacy","admire","intimate","stayed","awake","nietzsche","painting","aimed","dose","blindly","falsehood","absolutly","greasy","hungarian","homepage","los","employer","excessive","prohibited","asap","persist","brings","saudi","arabia","biblical","lad","gibberish","wins","slimvirgin","spewed","swede","victoria","goethean","insists","gimp","ba","psychological","beard","hahahah","isaac","highlight","yankee","wikistalking","concluded","dumbshit","ten","kosova","suckin","pow","travesty","intolerance","pigs","avatar","individuals","yay","splitting","rome","shallow","malcolm","oppressive","argued","tragic","affected","reporter","stench","crossed","achieved","finds","lists","understands","undermine","sadr","answering","bangladeshi","bangladesh","awfully","viewer","serbs","confirming","sanctioned","essex","concensus","pour","features","nintendo","judged","misrepresent","accepting","fcuking","haggard","messiah","authoritative","corporate","knuckle","billion","cracka","watson","subtle","holier","visitor","travelling","rodhullandemu","industrial","cocksuckers","labour","slipped","su","guttyboy3d","prepared","apt","cartoon","hijacked","whitewash","owning","relative","repulsive","humans","evolved","hola","rotting","ex","census","shouldnt","patient","preaching","verifiability","cola","yoga","greedy","facebuster","nom","glowing","doomed","satisfy","chapter","thereby","acne","wiped","conrad","murphy","orton","tna","delivering","edu","sounded","nicely","sonofabitch","yadav","specially","string","commons","technology","slim","dot","oregon","dreaming","effin","kno","wilson","grandfather","mcdonald","puppeting","desu","cheesy","whores","columnist","hilariously","dignity","jose","ash","aw","reverse","sour","insight","puerile","depraved","galaxy","deem","panty","piggy","liz","containing","intervention","admi","riot","isle","chart","magnifying","olive","screenshot","threesome","sidewalk","sites","privacy","networking","hammer","presume","irony","weenie","occupied","sooooo","jk","inconsistent","shocking","proclaimed","universal","monopoly","discriminate","survive","cookie","__","hmmmm","jihad","rear","launch","importantly","bickering","thee","newsflash","silliness","lust","slant","charade","formatting","tail","cocaine","il","patriotic","brief","inferiority","gringo","elitism","bros","mario","session","merged","ant","gear","quo","notify","kiwi","hispanics","coon","mans","substantiated","mtv","ludicrous","servant","assumed","geeky","brah","robin","hl","laziness","butter","kiddo","depends","scribblebook","referencing","unfounded","refresh","height","sharp","practically","struggle","dancing","robo","android","dearest","karma","juvenile","ideological","canderra","cursory","alias","hump","secretly","pwn","tu","gayness","clicking","boat","cave","countries","pencil","abortion","fuckign","reaper","mc","suprised","annoyance","performed","historically","te","alf","goddam","wog","cheers","anyways","closer","episodes","tireless","station","assh","workshop","fond","clark","affirmative","comprehend","slanderous","burger","satisfied","bombay","worthwhile","pump","coke","sauce","typing","burnt","gypsy","centre","hahah","dhivehi","discriminating","muslims","follows","preach","jean","hooked","telly","freaks","jewranger","urban","candy","returning","absorbed","inclination","bitchass","demonstrating","crimea","evident","humble","challenged","propose","database","relevance","mill","ordinary","poll","humid","fortune","englishman","searching","gregalton","studying","partially","attached","andy","jeez","thompson","hs","activism","hd","whack","infinite","tennis","limp","sickness","phallus","douch","ruling","brag","medium","provides","cliff","balance","ke","connor","coz","classify","stabbing","unworthy","watchlist","declare","dictate","grockl","tao","danny","popper","hollow","dammit","hel","kwa","swag","pcap","editting","cream","raw","demeaning","goldentony111","oppression","indecent","franklin","coincidence","provoke","relax","envious","obviou","ffs","burrito","widr","notorious","arrived","lanka","inflated","doin","node","resort","sociopath","flash","incomplete","yelling","jockey","oprah","elected","williams","censors","assigned","grindcore","debt","deleate","kisses","zaido","soo","portal","understandable","orgasm","founding","associate","wool","mls","novaranist","cyprus","frequently","chk","pst","senator","broadway","bbb23","pressure","follower","nobhead","obscure","fck","retarder","conversion","3333333333333333","ko","problematic","squat","ronald","liberation","finland","putz","ja","hume","morality","kissed","ankit","fadia","bombed","rajputs","anthem","sea","tbm","wong","labeled","brat","prost","tute","yardie","darn","tendentious","hmmmmm","unlimited","kuwait","rifleman","marc","shinda","zebedee","rename","vent","inpure","mlpearc","kwanzaa","usher","trail","ptta","hooligan","pembroke","1300","2002","2602","20000","500000","578254","33000000","skinhead","assert","almighty","detective","calton","settled","dickweed","younger","capoeira","devote","mardyk","rebel","languages","announced","teenage","safety","sons","kelly","shed","lowlife","burton","rebuke","hounding","jzg","gamergate","hermaphrodite","armenia","pertaining","nostril","accomplish","garden","camille","entirety","stripper","direction","razor","deletin","irishguy","agency","nyc","metro","promotional","pimping","cuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcunti","4ever","crank","protocol","planned","molested","substance","motion","pie","abysmal","warrant","contract","liberty","dripping","playstation","therapy","saturn","tube","insecurity","twinkle","prissy","essence","focu","fudge","trapped","charged","agreeing","thefortyfive","jingiby","pathetically","bosnia","lozer","tbhotch","afro","spiritual","replacement","alumnus","hung","upside","connotation","stooge","misguided","concerns","passes","todd","devoted","scottish","socks","aswell","horror","ccp","falun","gong","mongoloid","increasingly","insensitive","comma","wang","wealth","naming","illustrate","header","broadcast","bureaucrat","prose","evn","jane","swinging","castrated","b1tch","worships","costs","confirmation","preserve","expressing","thorough","saddo","mac","sould","pretends","curry","revenue","crony","footnote","constitutes","silver","vandalist","nocal","convince","harold","gaba","milosevic","sicko","realization","impulse","mechanism","nair","provocateur","attraction","welcomed","evening","attract","surprisingly","piercing","waking","outfit","feminine","wrapped","lengthy","immensely","drives","considerably","eliot","19th","guides","20th","confusion","paint","zen","parade","province","promptly","portray","bend","egyptian","oscar","dax","stare","georg","standards","mattythewhite","yell","gangsta","drew","lobbying","printing","plea","buisness","territory","patronising","unrelated","gesprach","duration","gesprach3","revise","members","intl","hosts","continent","invited","modification","jealousy","charlotte","homeless","animals","twerp","trailer","harrasment","mutt","smoked","jackasses","spa","charity","moot","yor","enterprise","mistress","divorced","pedofile","estate","carolina","abomination","aman","solved","tat","venue","scholarship","structure","staying","eb","yahoo","nob","slandering","linguist","passion","balkan","generation","vital","essential","impartial","smaller","confuse","videos","thankfully","euphemism","drugs","folks","nussle","trophy","muther","unsolicited","distinguish","distortion","stretched","wack","elephant","majesty","batch","ministry","jacobite","yuo","camera","ustashe","sallary","peabody","iam","truely","sports","lier","deleteing","persecuted","incorrectly","disguised","characters","tulu","eaten","wot","windows","clones","cheerleader","square","iranians","kindness","orbit","ndp","outlet","vsmith","creativity","disaster","vacation","den","elen","revolve","nosey","trayvon","000","outsider","presumably","waa","probaly","horseshit","von","delet","h8","copyrighted","collins","pdf","beleive","vengeance","fckin","manchu","cked","spew","prisoner","effects","ejaculation","hoped","demanded","charlatan","stalked","emotional","sorts","nutjob","12th","selling","describes","admitting","shutting","establish","bhadani","subculture","pedigree","ignoramu","rollback","undisputed","rs","dates","youself","facsist","intentional","timing","spi","processes","schmuck","representing","catholics","protestant","batista","quarter","ure","stabbed","receiving","bussiness","hadith","volume","ohnoitsjamie","med","ger","likewise","smelled","two","ucking","reminded","nasa","underage","displaying","eg","chemical","png","krishna","hipocrite","ohh","fagg","idoit","unionist","derry","beaner","donald","founded","deface","discredited","estonian","ki","fenian","brush","troubled","changon","commy","column","niger","fukcing","libelous","hick","ghost","abandoned","ocean","escape","goose","stepping","catching","python","executed","winter","attracts","discharge","el","bourbon","sober","scout","burp","lit","sincerly","ca","worrying","rewritten","pandering","yorker","kent","flynn","hobo","injustice","sinebot","reckless","hunter","heater","talkback","hans","___","dumber","ku","klan","occur","design","invalid","injury","tits","dumbhead","srsly","malfeasance","terribly","tire","ouch","jury","stifle","amaze","friendship","felony","apologized","portuguese","located","brazil","resign","grenade","frigging","hopping","wright","chap","needing","tourism","es","funded","mop","religiously","hurl","laws","shii","hysterical","lonnie","bloke","inflation","beaten","elizabeth","lo","beach","explicitly","basketball","waltz","rugby","mercado","riding","heap","president","applied","pd","conscious","colon","du","bignole","stuffed","diseas","wth","blew","fanny","deceive","depending","hoot","fishing","wbc","cherry","shotgun","fcken","mediterranean","afrocentrist","chess","banter","dedicate","introduction","unfunny","amanda","reward","slag","captured","gallant","betrayed","iv","emerging","device","producing","donation","venture","sycophant","retract","gordon","neilson","gayest","sonisona","britannica","bein","cid","chamber","stripping","autism","extended","initial","factory","ate","rampant","laughed","reviewing","simon","haters","omfg","disruptively","attacker","differently","rope","underwear","comprehensive","salvio","hideous","homophobia","routinely","meantime","repent","prat","quiz","bong","etymology","cared","threatens","napoleon","corbett","downhill","corps","spoil","nfcc","respective","destroyer","nothin","dwelling","haven","sung","missile","invisible","effectively","dweller","disco","steel","metallica","educate","clooney","praise","b4","fud","summerphd","competition","owe","stoned","afghan","mafia","slight","pablo","accomplished","stakes","jo","motor","cabaye","exclusively","happyme22","aggressiv","lax","articleonly","wikipedai","forums","euro","nonesense","statistics","kangaroo","buys","fluid","hillary","jerry","apologist","continental","sony","millions","hamburger","dirtball","leap","deciding","slide","walker","frodesiak","struck","wholeheartedly","stranger","wikpedia","andrea","hore","globally","fling","fagots","indef","goo","higgin","wh","anonymity","bossy","resulting","pedant","spewing","mods","obey","kp","banner","happily","swearing","andrex","gamer","muhajir","whiney","gmc","shark","wah","headless","zone","productions","nawlin","sized","weigh","thier","gained","americas","colonized","inept","bagel","denier","degrading","airbus","pillar","vet","stain","consists","grace","courage","kar","flip","moves","roti","intro","bregman","improper","warfare","harsh","elses","nasal","diary","einstein","labelled","aug","skeptic","disagreeing","ounce","functioning","temporary","assistant","epf","wisdom","reduced","vassal","denialist","teaming","arguably","fuckstick","quietly","saga","manhattan","rachel","civilisation","spurious","bengali","retardmongo","deceitful","studied","atomic","arsewipe","filling","ramgarhia","screeching","int","bermender","arbitrator","partial","trek","undue","phase","ox","partner","diana","unfairly","extensive","drawn","sarcasm","cooler","fin","encountered","reviewer","ve","jobs","mush","credential","lacks","chop","sep","mmm","terminated","blink","skunk","releases","gaylord","cm","morgan","freely","node_ue","blessed","jewboy","herring","recieve","sacred","opinionated","casualty","rutherford","pursue","hangingcurve","sucka","stomach","2checkout","roker","applicable","infidel","ole","kaikolar","gullible","milburn","simpleton","intolerant","institution","anonymou","safwwefe","popularity","psychiatric","focused","moist","quer","forms","sincere","marsden","clandestine","valley","gvnayr","cyphoidbomb","sunshine","highness","row","basics","factual80man","onorem","vague","shia","stillborn","oversight","dhoni","relevent","audio","download","yrs","unpleasure","doesn","jps","reminder","demonstrated","disagreement","impose","lane","invade","rating","fattyjwood","explosive","criticizing","se","deity","violator","2x","fifa","encyclopaedic","kgb","mega","deemed","unfit","tyler","condemn","jossi","lgbt","infinitely","crow","souza","brittanica","rain","puff","jsut","nobel","setting","yummy","collective","sarfatti","strictly","investigate","thereof","lawsuit","deleter","fever","imperialist","defacing","addict","pharlap","ocd","liars","khalsa","avoiding","crooked","axe","bhadva","maria","draws","skinny","opengl","oldest","rue","wikiquette_alerts","december_8","lego","sukecchi","moronhi","piano","boyz","mossad","expelled","dashiel","reconstructed","barret","gaogouli","decended","barranquilla","phobia","hydao","baltic","pyprime","adoni","croft","eddieebo","450","700","767","844","861","1111","1930","1950","1987","10000","mediocre","overweight","sorrow","premature","convenience","artie","leno","repost","weiner","martial","skills","pedantry","authentic","deck","misconception","hardy","crisis","kunduz","tajik","shoving","nis","vandilism","rides","wof","verification","regional","suprise","dagizza","blasphemy","misogynist","core","thirdly","invitation","cleaned","spoiled","albania","posters","smartest","thoughtful","profound","schoolyard","amuse","pulp","bites","notified","columbus","appreciation","eatin","retardo","sez","zion","ranger","walkin","delta","blueboy96","suitable","gorf","resorting","tuna","smelling","collapse","outraged","revels","grill","polar","slayer","lovely","ourselves","ne","whos","frankie","peopel","nil","checks","anne","rewrote","savior","questioned","originated","fy","deeper","beneficial","closeness","muthafucka","catherine","confessed","lifestyle","introduced","sheesh","mailman","guzzling","snob","munching","logs","respectively","sniff","arbitrarily","stroking","frequent","steak","tryna","manifest","incorporated","outed","mcneight","kww","fricken","excrement","assorted","starving","biggie","piles","semetic","tellin","figuring","katie","nonetheless","pissant","ignoramus","restricting","audience","becuse","ti","twats","viable","jacko","cattle","snarky","leading","offends","godforsaken","royalist","puppy","condone","starved","nail","wikibreak","fears","yuck","baboon","adams","expanded","shits","messy","acorn","abnormal","drones","smiled","emotion","dialect","rusty","revertin","dolt","ante","karl","administator","dissident","fluff","nhl","eminem","songs","tko","hunted","fuk1ng","gc","churches","dee","protector","dept","thomson","ment","cencor","legitimacy","wherever","crystal","gail","initiated","succeeded","thuggery","preference","brake","uglyness","georgian","sector","flick","royle","holiday","pursued","urges","ping","pong","crass","psychoanalysis","castration","phallic","primarily","principal","events","significantly","desires","sufficiently","degrade","retire","toot","laughter","comfort","cozy","sipping","hectic","linger","gloss","lips","strawberry","flavor","fingernail","worn","complexion","sweater","sparkling","listened","thankful","navel","touches","ceased","faint","tfa","programme","rein","deference","refusal","mysticism","bicker","freepsbane","resorted","effing","ron","drooling","unbelieveable","xxx","stirring","emotionally","treason","patriot","outlook","developing","propol","angele","competent","spring","substantial","hybrid","picks","paranoia","resentment","lucas","psychology","inmate","cooperation","fac","poof","spui","robotic","rack","jdwolff","undermining","pimple","gulf","ect","imbecilic","highway","soil","israelis","enforcing","hasta","philippines","phenomenon","ked","sarek","cruft","bean","roskam","revised","mis","paradise","delight","kiddie","obligation","fella","entrusted","mezo","pestering","spinning","morris","doug","towel","bass","sorted","farmer","inflammatory","involving","yopie","puss","rm","desperately","distorting","tampon","fuckedy","serbo","revolutionary","researched","disservice","literary","weekly","fatal","dab","yugoslavia","displeasure","iota","apparantly","materialscientist","bint","colleague","err","variety","briefly","literal","pederast","misusing","militant","fuel","ie","moroccan","speedily","cooper","precise","melon","naz1","nations","feral","translated","sneaky","nest","alt","senile","offline","brian","21st","morally","xchanter","autoblock","byzantium","constantinople","geoff","phuck","lightly","sod","appalling","betta","limey","indiscriminately","isis","ware","dragging","rudest","lowly","wuz","fruity","reinstated","outer","munch","delicious","attend","blinded","demo","bounty","swiss","fallacious","affiliation","perceived","adolescent","unjust","rightfully","visa","arrested","forcibly","belonging","certificate","functional","sensational","animalfucker","vill","av","acid","dickless","autofellatio","gallery","coach","peep","isolated","infringing","megadeth","yous","dung","andre","waz","ripped","aunt","donna","tasmania","federation","hometown","spoiling","reserve","digital","sheet","neverending","pocket","bibliography","proposing","nominate","plant","distorted","linear","max","forgetting","replay","comin","absurdity","crusades","aww","ashole","sucky","jobber","taker","streak","norwegian","abandon","collaborate","drowned","phelps","warfighter","brandon","declaration","feeding","fragment","mystery","snowman","charlie","nominating","supplied","sherlock","influential","games","cliche","crucial","deter","ironically","jobsworth","blond","madonna","funding","pollution","erroneous","adorable","rank","vandalizes","pirate","searches","elite","rent","equipment","fuckan","mughal","kin","bracket","photography","escalating","minding","cp","crip","third","lest","inadvertently","wakopedia","cancel","giver","sandy","suede","walrus","eduardo","santos","studio","svg","smeared","richly","hawk","rancid","fisted","flesh","deficient","oink","bailey","witted","fiend","mercury","unimportant","nicholas","spill","arsten","canvassing","navy","prosecuted","attracted","clusterfuck","hierarchy","vaginal","leftists","comedian","cyde","dea","infested","regulations","lincoln","myles","usefull","differentiate","illegitimate","mediator","pubic","spat","puny","horrendous","tendency","merchandise","bases","huggle","bullsh","lookin","forbes","facebooks","gawker","admits","businessinsider","ims","wont","e2","greg","cannon","transcript","gona","dubious","mistakes","swift","persia","imagery","adler","fearing","monkeywrenching","cuntyou","klux","wayne","excited","graphic","ckatz","brahmin","wipes","inevitable","creatures","outdated","relying","etiquette","idk","biitch","suppression","untouchable","pkk","moaning","trains","unaware","jamaica","persona","widdle","wuhwuzdat","favorable","portrayal","columbia","underpinnings","keeper","kite","deflower","girldo","pt","butler","jiang","randi","behead","anally","hrs","damaged","dreams","smokin","seeks","ilovedirtbike","washing","merits","magnificent","fulfill","achieve","confidence","infected","sinner","rifle","meanie","dumbo","grotesque","multitude","ce","recieving","jacob","citizenship","peasant","upa","tj","champ","gon","retain","bellend","ease","advocates","cleansing","challenges","ruth","larry","sanger","rio","meddling","everyones","rr","dated","ull","scarian","posing","chemistry","biggus","dicku","hezbollah","announce","worries","jerusalem","btng","silenced","toast","oyu","elonka","shoved","disprove","tor","sleaze","sleazy","contradict","polluting","concrete","obsolete","mice","carbon","katrina","sabotage","interpreted","bleckter","manipulates","apologised","domination","moscow","fuckyourself","rhino","gnaa","kung","lestrade","downright","positively","objectionable","naive","hound","rm994","billy","motherfuckin","crum375","jewel","throne","celestial","spaceship","merest","astro","billions","titanium","manacle","legionnaire","weissus","platoon","hypno","scepter","viewing","signal","concealed","swings","chaser","tripper","sanity","baloney","fund","invest","players","probly","sympathize","hunting","rodent","pedophilia","germans","cyberspace","clarify","stress","immediatly","spic","romance","blogs","rescue","schulz","tripe","endorse","motherfuck","troublemaker","conclude","ambiguous","hereby","eyeball","refuted","cunning","sombody","digress","capitalist","provider","shoo","inject","nay","lunch","stunt","mmmm","cash","neurotic","batty","indication","santanos","hysteria","amateurish","whitewashing","armchair","utmost","battleground","pose","boast","behaved","punitive","oo","seb","michalczewski","illegally","cats","knicker","disability","werent","orangemarlin","identifying","announcement","ripping","derive","plato","hammersoft","grateful","ruthless","exterminated","numbskull","singapore","swarm","panic","barn","clarified","broad","stephanie","stake","differ","adopted","insufferable","backstabbing","pops","port","accross","worlds","strongest","washed","bolognese","eagle","nutter","graffiti","oik","invader","informing","dialogue","bunny","cocky","healthy","playboy","rolls","tour","robbing","factually","russkie","latchkey","drain","ethnically","bowl","accordingly","vbutt","tide","indefinately","plague","mullah","enquirer","packing","goddamit","shalom","pork","firmware","installed","possibility","dik","hahahahahahaha","researching","speach","toxic","possess","orlowski","extensively","patrick","cannibal","sky","civilised","blessing","prima","demonstrates","allahu","ogle","itch","pin","bandwagon","zimmerman","tibetan","updating","clause","patrol","whales","yur","wikilawyering","surprising","acount","abram","conveniently","flipping","tlk","kthx","tideroll","believer","bann","bombs","contributors","feedback","usenet","expensive","snotty","invasion","schumin","haunt","ruben","abolish","wolfkeeper","d1","handling","gettin","amblin","olympics","kew","randomly","ciara","busybody","needlessly","flaunting","kraut","jake","iasi","reputable","blast","achievement","teens","erect","architecture","rex","collaboration","wishing","aircraft","respecting","centipede","humbly","supress","cheating","marked","baar","promoted","fffffffff","cccc","chronology","jenkins","bland","detest","hehehe","blud","rapes","mock","backside","yeshuwa","essay","uber","kinky","vaguely","alien","canai","repair","neda","sec","retribution","bankrupt","amounts","ciao","delivery","ib","submission","unite","contradiction","consent","cases","connect","curp","economics","rough","audi","a4","icp","attended","negroid","caus","jfdwolff","shadeed","crushed","contribs","advised","annoys","verita","kafka","cafe","akkadian","aramean","mule","facet","denies","obsessively","bruce","snoop","settle","greed","tower","squish","grammatically","slept","swing","logically","measurement","condemned","woo","proposition","guesses","randy","wedgie","amoeba","unlikely","lasted","wankstain","fvck","meal","ham","attending","bile","taunt","humorous","jasper","edl","espouse","hijack","aliens","nilly","bumbling","harrison","sodomite","respectful","mevlana","ebusiness","inadequate","director","pumper","hacking","helpdesk","expire","4meter4","falsetto","marvel","uppity","fourth","customary","races","yolo","bozo","eekster","dihydrous","oxide","genius","commentator","gaping","maniac","dads","shemale","platinum","amused","jamie","mate1","julius","breed","dajudem","successfully","counting","cheri","prob","cc","legalese","skank","gmail","afford","supporters","y0u","lump","unqualified","celtic","dressing","granny","rt","recurring","friggin","declined","woe","reel","investigated","neat","severely","covering","overly","mp","vocalist","trend","teabag","dogo","gma","bugging","yup","imho","booby","tut","pooch","exhibit","revealing","temptation","ac","browser","greeks","academics","bangin","kant","infant","bears","hersfold","insistence","moderators","computa","coanda","plank","grossly","ww1","dodgy","sacrifice","killers","enters","leki","jess","vision","aspects","pschemp","ers","satanic","notarealword","remeber","incorporate","tentinator","catilinarian","rao","colour","lauren","brute","opera","va","enabler","sox","orlean","runt","pint","wireless","webster","unintelligent","provoked","jeepday","tags","seanmack","inline","lou","catholicism","presidential","expletive","rhetoric","targeting","ther","fut","perf","marie_luv","faggott","gfy","propoganda","peridon","mitchell","idol","reminds","romania","dungeon","founders","dean","gaffney","cretinous","stony","success","objectivity","influences","corey","thrash","uncomfortable","dollars","terms","overturned","constructively","kennedy","residence","handled","surrounding","capitalization","bodom","amon","amarth","onscreen","podcast","notifying","hike","idf","treats","fkn","ducking","jenny","prop","wordpress","knocked","oliveira","db","redirects","webmaster","bmt","mommmmmmmmmmm","yeahhhhh","chaaaaa","fetish","pounding","resulted","collegial","politeness","belldandy","allen","practiced","remaining","greetings","scat","negotiate","arnold","affront","depressed","criticised","rulebook","brookie","chasing","retared","disgusted","analogy","usd","aa","xtian","erection","creationist","dufus","prayer","flyer22","harrassed","shelby","unsubstantiated","quack","dunce","predator","biologically","biologist","diarrhea","handicap","spithole","prevail","hella","bjp","hiya","weakling","stored","misunderstanding","dikkkkk","tripping","incidentally","defends","intimidation","suffers","cesc","10th","fabrega","klt","dna","afrocentric","eurocentric","chew","pressing","delivered","locking","maam","persib","rapid","wednesday","wood","warmer","bigdunc","mile","jat","spilled","panel","unbelievably","hearted","ken","warren","selected","senor","flaw","microsoft","henchman","07","grabbing","expand","relief","shitler","davidson","mongomutter","tier","somone","gokdel","sodomy","lonelyboy","nvidia","rfar","bust","marcol","insurance","babble","malleus","joo","c3","establishing","imposed","jokes","clearest","jamesbwatson","shabazz","hides","buttface","circumcised","peg","elk","grove","viewed","mathematician","hasbara","jai","rico","domesticated","hazara","basepagename","simplified","kubigula","slav","manager","kawwww","fundy","bulgaria","adventure","defines","foreskin","exam","saini","maratha","____","linguistics","hodson","mil","cantor","controvertial","client","commandment","mysterio","govt","madrid","mariah","carey","unto","schubert","cuntface","intrinsically","fp","vecia","putang","awp","ncpa","2b","bks","tbo","22trail","atkin","marmaduke","lgagnon","yoshendi","305","320","711","1971","1993","1997","2601","2752","4000","4170","6000","6500","15000","40000","slavs","forehead","sorryi","dominance","syrthiss","freshman","appearence","lange","authenticity","povs","cousins","herat","whereever","kuchi","delay","lunacy","canuck","hanged","impolite","admittedly","schools","fark","dejay","choosing","burden","representative","cockblocker","interviewed","guaranteed","daughters","bends","drinks","theres","groin","anyday","somali","physicist","poet","harlot","doth","tharkarn","gooood","az","tru","mothafuckin","tools","xeno","collaborative","solving","blend","passing","sections","eroticism","critic","focuses","feminism","wheeler","wire","tripod","muthafucker","bulk","rajbeer","similarly","arbiter","downtown","resolves","swartz","untrustworthy","becuz","bathroom","zod","deceptive","ford","herpes","zapatanca","priviledge","projects","eligible","asad","downfall","escaping","loyalty","burtalbert","spree","gta","sludge","rubbing","penguin","tastes","fence","dime","biographical","advertised","ahve","gatekeeper","slaughter","hous","newl","googie","villian","librarian","muck","muzemike","maddox","forged","uss","varna","drastic","angered","involve","stumbled","gladly","packer","cranky","temple","fugly","wikipiedia","roy","fukk","lulu","salacious","temperament","lease","katy","perry","fallen","porno","ostensibly","pas","jobless","mentor","krasnoi","unilaterally","abstain","borderline","capitalize","conquest","survived","disclaimer","identifies","spike","crammed","freezing","renounce","gassed","chzz","handedly","examination","pathological","thnk","qed","mckay","specialist","jerked","banhammer","sexism","bakutrix","senses","transitional","renegade","participated","punishable","slurp","defender","flee","tito","bobby","resolved","entering","mongolia","dragged","fold","churchill","rink","gd","shear","thinker","improperly","altering","wi","shaft","fate","stewards","nervous","atrocious","labeling","bidding","troublemaking","sharma","ola","niggah","whyd","fr3nzi3","quartered","unsatisfied","sista","jackoff","cade","neckbreaker","flair","sonnet","delaney","vatican","tweedle","flush","income","defamatory","morale","beforehand","cencorship","realizing","vastly","incidents","longest","surrender","deception","smiley","temporarily","hunkyou","hijo","firework","unfriendly","streets","rourkela","initially","parting","ryanpostlethwaitei","blpcrime","patently","resume","salon","freudian","psychosexual","parallel","metaphorically","sigmund","three","libidinal","concentrate","anatomy","obtaining","occurs","violet","ambition","occasional","actors","professionalism","trump","transphobic","diareah","zoey","enthusiastic","secluded","knit","quad","sip","glow","enticing","elegant","plunging","sequined","neckline","cleavage","garter","descending","noticeable","toned","hoop","earring","widen","noticeably","paler","heel4","earrings","adorned","stud","flowed","twirled","strands","graduating","chatter","stunning","perched","resting","softly","stroked","dipped","brushed","sweatpant","caressed","stiffening","reveled","rediscovery","slowed","regularity","awoke","scent","unmistakable","brewed","nectar","shortcoming","plow","respectfully","akin","honour","bonus","gray","9th","gregory","cardinal","vacuous","assistance","jordan","tickle","spunk","riddled","servers","thingi","foolishly","premise","ridiculed","sicken","drinker","organizations","wreak","gnome","orlando","fantasia","blu","overzealous","sudden","wikiepdia","holds","tel","collectonian","misrepresents","legitimately","denmark","repressed","mailing","wrongfully","asylum","matey","gift","johncd","vermin","basket","primitive","tiptoety","ceremony","indulge","rely","examine","relentless","mens","youe","stuart","begun","maggie","relieved","lieing","grunge","ernesto","serna","siempre","unsupported","regulation","discusses","mysterious","shityou","bh","sb","hag","clicked","melissa","dccc","accountable","slung","sept","lee","grin","ross","nightlife","tinchy","stryder","gunn","hwy","weller","declaring","lopez","damnit","peole","hamilton","kthxbye","boxer","steam","dwarf","negativity","wikitard","praising","differs","trendy","speculating","dayton","conquered","odious","generate","simplest","hubri","uncovered","wiktionary","predictable","diane","sensibility","faq","misuse","rama","url","astonishingly","activists","defunct","beings","cleanup","benben","destiny","fukyou","musician","lennon","garage","cleveland","herpe","nba","distinct","bluff","credits","clarification","veteran","exposes","patriotism","corresponding","si","polock","fuckup","myopic","oz","pursuit","conceal","formerly","mars","timothy","penalty","toronto","diddum","shocker","disambiguation","touching","static","unwilling","mode","linguistic","smacks","prone","kde","naruto","shoud","loony","preacher","corkscrew","rubin","layout","assface","denigrating","idiotyou","underlying","nevada","wikipedidiots","comedrinker","biotch","urdu","ambrose","fakes","edward","neutralist","lendering","terrifying","howl","convincing","select","stifling","esl","prague","profession","soaked","bertil","videt","confident","moderate","vandolism","earthquake","baron","negligible","chickenshit","adolph","micropenis","mp3","aborigine","mong","gov","goatse","sandstein","delted","trademark","stooges","shud","unprotected","whiner","conservapedia","approximately","raul","lawl","nad","contaminate","csssclll","financial","treasure","ff","projection","mislead","scummy","loosing","actuall","unverifiable","pamphlet","reprinted","anarchy","dialog","budget","khorasan","ddt","generating","creates","entries","hrm","calzaghe","om","promised","hijacking","whois","lookup","adjust","occassional","ditch","fisting","goodluck","brethren","interference","identical","tampering","headlock","abyss","achieving","tata","sodomized","helper","overbearing","wesley","dessert","maintenance","texts","observe","dissing","lifeless","awsome","ock","apples","estimate","2k15","produces","nightstallions","uw","phrasing","cockus","fled","disproven","paris","hilton","divorce","bigelow","initiate","shipping","hurtful","linkin","tantrum","gnu","basterd","shudra","yadavs","kettle","thingy","mouthing","kimchi","farking","travis","mexicans","switching","amateur","reprimanded","pluto","checker","wisconsin","ammendment","enuff","waaaaay","robe","osli73","wite","changin","minister","victor","eated","creeps","priority","witkacy","bait","conceived","ting","fuckon","funk","gilliam","seperates","adduce","illuminati","automatic","transmission","zis","imbeciles","dreaded","accomplice","observer","milwaukee","progressive","southerner","canker","deserving","cad","monument","profane","rhythm","smarmy","dread","gill","dimension","emit","baked","creat","madre","acusing","ruddy","hesitate","lazlo","bores","corn","privilage","ym","adminstrator","seal","crafty","tarc","glory","arrangement","wimpy","leso","salvador","d2d","9f7b","4c92","shiti","booze","dey","youuu","petrol","letterbox","daniels","igor","bogdanov","protege","rjb","turnbull","unlucky","fr","offical","connolly","hughes","blindness","clash","additions","eyesnore","samir","swalwell","coat","kisser","naw","beta","trusting","sherrod","lawrence","allegedly","login","students","launched","sns","redacted","graeme","blok","celeb","dic","painstakingly","scan","skit","louis","rudimentary","sockpuppets","engineering","mathematics","crud","suckish","abroad","oxygen","ample","subnet","rambo","vocabulary","cracks","ish","difficulty","distance","1000s","wholesale","vindicated","seth","peel","spanking","misinterpret","apon","eccentric","snatch","lutheran","busting","ruins","visual","newest","enforcer","unreferenced","malta","cunting","perceive","hazelton","refactoring","generated","tombstone","mongering","answerable","bandit","hillarious","screamed","wikipidia","entitle","conviction","niteshift","wedding","nigg","michelle","tucky","heartbeat","forestgarden4","forestgarden","itsahappyday","palau","antartica","flimsy","nicola","hideously","gate","zealot","grinning","trauma","amy","kate","uve","catalan","mujjahedin","armstrong","muppet","incestuous","cram","youdo","wheaton","woooo","scorn","boost","auspice","fetched","khastriya","drakhan","inflicted","swoger","ignorantly","hugo","amigo","phenomena","crikey","ideas","tattling","croat","medication","ferret","barney","grind","sacrificed","numbnut","chopped","pascal","powder","sarcastically","evasion","porch","decree","alpha","shamed","cumming","monstrous","demigod","uncertain","toddler","freeman","moose","paine","jefferson","anarchism","congressional","subvert","inconvenient","feud","judah","eww","ewwww","alcoholism","shhh","nutted","dar","wrestle","colorado","shoopsywoopsy","liek","glorifying","hicks","atheists","adjective","jakeyboy","biochemistry","bullshido","dope","comunist","pinoccio","pussbag","width","fabrication","misfortunes","whomsoever","misread","emailed","overcome","strategy","captive","administrate","imply","tiresome","tc","wink","witty","dearly","bluerasberry","uni","reinforce","deepest","quip","spelt","muffin","dandy","payal","rohatgi","hello5678","2over0","2overo","akeran","managerarc","ratings","wbo","degale","gorgeous","hasnt","unusual","irwin","ottoman","barrel","squeak","worshipping","austin","vandlism","atmosphere","idc","diffrent","welcoming","chabad","consist","licked","purchase","249er","penny","throwaway","verdict","renamed","arguments","exclude","habsmtl","gore","woot","thwarted","clap","melted","traitorous","evader","geo","stationary","chapman","ecstasy","releasing","witnessing","mack","sinister","neh","trumpet","fanfare","newly","smashing","beam","awaiting","decoy","dive","choking","fingers","portia","gibbons","milk","wished","hun","quah","meatspace","dougweller","cashier","alll","invading","hamster","sl93","louse","journalistic","fecal","pants","jamal","ovens","ne1","frontpage","favored","browsing","frivolous","airplane","harmless","preserved","memorial","precedent","spank","mccarthy","apocalypse","coast","cyrus","brazilian","pineapple","cr","dried","sweaty","vandalisim","demonize","reek","thx","hypocrit","launching","stark","cried","nag","tripolis","fashist","dale","glen","msn","jacket","dragong4","obsess","unhinged","beside","intensive","nhs","lastly","fuckass","quotes","pending","knowledgeable","calvin","cherokee","plagiarism","abundantly","repeats","homy","zappa","sicilian","ortiz","designation","linder","misinterpreted","formatted","android79","trinity","freind","subordinate","divine","unattractive","republicanjacobite","patrolling","holla","crushes","yiff","scroll","farther","rocky","koscheck","dynamite","hbo","vacant","knockin","roflmao","carter","cyberstalker","halen","yknow","hotdog","seed","les","continuous","burner","functionality","iw","nonconstructive","stream","reminding","yearold","grain","falsified","punks","shaggy","nuked","nawmean","snitchin","pooper","tables","practicing","orders","puppets","cleared","dramatica","medicinal","chemist","emphasize","quake","pumping","fists","oap","invention","poetry","afghanis","unjustified","grammatical","dim","guardian","haired","zay","vinny","commited","scones","sage","abcmonster","ecto","vanessa","smashed","construct","degrassi","pffff","chocolate","homeboy","rump","magazines","actin","flo","selection","honda","neva","gagin","mosque","asswhipe","grocery","barbaric","ooooooh","cigarette","dumpster","xenophobia","fellates","robbins","metropolitan","popsucker","paraphrase","las","vega","narcissistic","tuff","conceited","populate","yugo","cursing","admistor","tornado","tricky","meddle","applying","tracking","forensics","testimony","embarassed","py","adio","azeri","ponyo","fucing","mini","fooled","uploading","babu","zillion","notre","tech","ged","remarkable","solace","prophecy","kenny","libeled","mediocrity","pedestal","misbehaviour","errata","handbook","glasses","pun","hummel","protesting","raining","severe","unfettered","shriveled","melting","flay","pools","newer","murderers","russell","subtropical","lean","para","nickelodeon","workers","dross","knol","mason","peeps","geezer","obscenity","kay","shenanigan","mindlessly","obtained","efforts","memorable","minuscule","mines","yanksox","tal","sugar","wheelchair","danish","stupidhead","uhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubnvvi","modi","11th","marijuana","pill","gravitation","phelp","flushed","opens","13th","feelings","spammed","unchallenged","worthiness","goofball","mammy","anticipated","notably","immigrants","snobbish","ukdoctor","satanist","safely","ts","fuked","ram","gump","carlo","gardens","malibu","ketchup","gorlitz","ioeth","officious","bunghole","critique","engineer","shrine","nudity","ir","freeza","nude","barcelona","ripe","janet","tasty","flores","pleasant","shine","bowel","fabricated","abdul","f1","rectify","unjustly","sheryn","titles","tedious","havnt","babylon","functions","manipur","gangster","necessarily","ethnocentric","tibet","aspergers","harami","delte","warrants","insomnia","christopher","routine","ignorants","platter","fagit","ign","evula","qualifies","simmons","assisted","freemason","prey","misogynistic","grandparent","laptop","blade","posed","frustrating","tunnel","proudly","traced","coolie","submitting","puting","restart","shat","mornin","prettier","bury","dysfunction","bulb","beacuse","youa","prostitution","evolving","labelling","erik","legally","beneath","mucking","harp","nascar","masterbate","jazz","glaring","posse","complaints","compiled","operated","debunk","pleasee","theme","wrestlemania","esp","diving","linux","persecuting","steps","destructobot","branch","evading","handicapped","rhetorical","epfnot","mut","syke","geneticists","assimilationist","pupety","taylor","fok","peneltized","incumbent","assyria","lingua","franca","aramaena","syriac","separatist","unencylcopediatic","downsize","comer","distorter","assyrians","assholery","decade","miz","havoc","aboutmovies","diligence","summarize","mujahideen","finest","tortured","tay","rewriting","ritual","nahi","recommended","paula","heroic","custard","hurtin","gall","tan","chairmanofall","fraudulent","sceptre","ugliest","threating","jeffrey","devoting","basted","glistening","redkneck","sed","bighead","spectrum","aricle","detailing","unencyclopedic","indo","cavity","consume","coarse","ids","espousing","neer","misquoting","paraphrasing","cloning","manson","panda","caspian","distraction","implied","californiadreamling","yuk","victorian","trends","putinist","cumulus","safavid","oppress","ibn","sina","default","montenegrin","tall","teased","rubbed","hinting","nod","chased","nolan","poured","dy","griffin","pimped","possessed","hussein","praying","pagethat","hypothetical","breathy","aloud","fusion","fabricate","kindergarten","meth","compelled","kyle","sexiest","committee","howling","confess","rationally","bolivia","prospects","insatiable","verse","chong","sermon","votes","prevents","writers","zionism","vandelism","hahahahahahahahaha","hotmail","citations","husky","userspace","stinkin","pardon","nutcaseyou","gaga","sy","greco","complicated","psychologist","devoid","subtract","policeman","enjoyable","specifics","viscous","wrestlinglover420","tce","elias","immoral","inner","conditioned","geneva","uniformed","rd","emerge","15th","prof","min","terminate","7th","infomation","williamson","highschool","powerfulness","producer","etitis","douchbag","fukkers","indoctrinated","exaggerated","whoopee","journalism","chrissake","molests","hentai","shore","triangle","shining","journey","impotence","penetrated","sphincter","pregnant","ties","camel","dink","crossing","troops","confirms","thang","moslem","ru","armageddon","cape","shareholder","sink","m8","mot","mistaking","emboldened","handy","scar","superpower","seriousness","rare","mundi","lyk","pedal","lynch","n3gros","illinois","soad","rspw","betty","youll","exhaust","wmc","draft","elementary","adventures","friendless","isai","vellala","battery","mount","strikes","bedroom","urinate","rode","incoherent","screens","relies","affects","separated","muscular","avoided","recommendation","vintagekit","brits","horn","cud","beige","hotel","banno","soup","pollute","nitwit","bringeth","uhhh","convenient","perma","louise","closes","insinuating","krimpet","essjay","aims","willmcw","alliance","socially","sinking","wolfowitz","wikipeia","loathe","afternoon","jizzul","rager","chic","differing","spirited","visible","washout","caden","remembered","softpedia","globe","heed","kittens","relavent","humourous","joan","phanatical","falsifying","adrift","cocks","fragile","farcical","olbermann","zomby","crashing","islamo","aaryanrajput","ronchos","suppporter","histroy","suckdickeer","raghav","ebadgujar","reinstate","framework","compensate","lava","thuggish","nbc","perpetrated","phillipine","synonym","mildly","pikachu","delicate","jerky","invaded","thracian","tribes","targeted","beehive","approves","satori","martinez","conservatives","twofer","donohue","neighbor","f0r","westside","shred","compliant","zealous","entertaining","prosper","vitus","jett","odle","tattle","fuckn","surrounded","ari","100million","indus","indians","kashmir","unpopular","malo","cowering","oliver","adrian","cheated","drv","renault","comeback","doc9871","greaseball","engines","crust","plate","thorn","tos","sleepy","vhs","mathsci","waving","trivium","kamelot","guitarist","growled","chainsaw","barnstars","embarassing","literate","adoption","broom","cacknuck","survey","highland","kthnxbai","registering","derhexer","flow","viz","dike","myg0t","titled","steer","disclose","facility","errant","adultery","hindi","sl","tyou","ecw","snugglies","colossal","yugoslav","pacific","hal","quicker","gulag","guards","haunted","amazed","reeves","burial","atlan","kalmah","c5","witnessed","hoc","ivy","georgie","custom","maa","gundagai","chairman","fiddling","opponents","implication","pioneered","compete","enjoyment","cries","drake","elf","pseudomakedonian","fresco","backbone","reopen","molestor","messaging","verge","lights","gayyou","lots","snippy","fcking","stretch","gospel","breeding","potato","hulk","bench","godless","nimrod","sweety","dip","reviews","offened","nub","ni","flex","fashioned","catalog","coulter","classed","detected","gabe","compounded","murderous","jw","overboard","misfortune","awarded","helpfully","sandwich","shiny","connolley","kingshowman","relate","omitting","provocation","tempted","binksternet","slash","bead","woah","cryin","majorly","communists","hearsay","authors","tulip","schiavo","barrymore","fukker","anthropologist","fawlty","kolkata","clit","extract","sensitivity","attach","widespread","continuation","yesmoredonkey","implemented","places","embarassment","mcgeddon","cater","irresponsible","devastating","wrap","richer","reliably","kach","nk","riff","mistakenly","pumpkin","tt","def","igger","mall","venezuelan","whop","combine","spreads","hindutva","urine","zip","adequate","longhair","dj","fest","defensive","carl","chaldean","mak","negatively","prestige","katyn","undoubtedly","afrika","paprika","pentagon","tweet","commented","dosent","demographic","moor","rhymeless","colonial","cultivated","epitome","jello","scratching","bbc","lair","fort","faggy","peple","provoking","kil","suks","dominate","advertise","eichmann","weeeelllll","shes","kamehameha","fuckiest","titshe","bitchshe","teddy","airforce","samurai","pizarro","slaughtered","lap","oversighted","mongrose","storyline","creek","align","buddism","spotted","elaborate","assessed","xx","virginity","lucasbfr","moderating","dbz","wallop","operate","motto","watcher","wht","pejorative","erin","mabye","asp","tralala","painstaking","rcn","ap","reflects","enema","misspelling","connors","objectivist","fanaticism","privelage","stamp","zilla","returns","krazy","wikiepedia","foil","zombie","dangling","kasparov","jerome","tesla","x2","weather","impressive","chugging","beater","belligerent","lung","untoward","boar","assessment","unprofessional","cancelled","bullzeye","dufu","goodday","eachother","rouge","charted","motherfucka","mei","battlefield","cycle","defended","refering","monkeys","iranica","discussions","yadda","wikidick","appoloboy","os","parjay","sheffield","incase","machchunk","accuser","xalwine","voyage","dumbasses","mos","parking","sava","inshallah","steaming","appearing","programmer","history_of_indian_and_arabic_numerals","deeptrivia","neighbourhood","duel","outspoken","strut","reserved","deletionism","malber","lingam","dai","bred","motorcycle","milboreone","huon","doctorate","funniest","ud","hiyou","professor","aye","pyprimes","internationally","ekograf","antisemitism","biology","mee","voicing","brett","terraria","limits","wekepedia","perseveration","meh","appealing","pygmy","pelmet","fuckoff","falsify","seating","punchline","detect","prize","spawned"];
     this.voc = this.extractDictionary(most_frequent_toxic_words.join(' '), this.nGram(2));
     this.remove_unfrequent(5, 20000, this.voc);

     this.nlp = require('compromise');
 }

 vectorize(text) {
    var text = this.preprocess(text);
    var text = this.cleanString(text).toLowerCase();
    return this.bow(text, this.voc, this.nGram(2))
}

 preprocess(text) {
    return this.nlp(text).normalize({case:false, puctuation:false, plurals:true, parentheses:true, possessives:true, honorifics:true, verbs:true}).out('text');
 }

 remove_unfrequent(min, max, voc) {
    var words = [];
    var dict = voc['dict'];

    for (var k in dict) {
        var value = dict[k];
        if(value < min || value > max) {
            delete dict[k];
        } else {
            words.push(k);
        }
    }

    voc.words = words;
    voc.dict = dict;
}

cleanString(input) {
    var output = "";
    for (var i=0; i<input.length; i++) {
        if (input.charCodeAt(i) <= 127) {
            output += input.charAt(i);
        }
    }
    return output;
}

 nGram(n) {
  if (typeof n !== 'number' || isNaN(n) || n < 1 || n === Infinity) {
    throw new Error('`' + n + '` is not a valid argument for n-gram')
  }

  return grams

  // Create n-grams from a given value.
  function grams(value) {
    var nGrams = []
    var index

    if (value === null || value === undefined) {
      return nGrams
    }

    value = value.slice ? value : String(value)
    index = value.length - n + 1

    if (index < 1) {
      return nGrams
    }

    while (index--) {
      nGrams[index] = value.slice(index, index + n)
    }

    return nGrams
  }
}

extractDictionary(textArray, f) {
    var dict = {},
      keys = [],
      words;

    textArray = Array.isArray(textArray) ? textArray : [textArray];
    textArray.forEach(function (text) {
      words = f(text);
      words.forEach(function (word) {
        word = word.toLowerCase();
        if (!dict[word] && word !== '') {
          dict[word] = 1;
          keys.push(word);
        } else {
          dict[word] += 1;
        }
      });
    });

    return {
      words: keys,
      dict: dict
    };
  }

bow(text, vocabulary, f) {
    var dict = this.extractDictionary([text], f).dict,
      vector = [];

    vocabulary.words.forEach(function (word) {
      vector.push(dict[word] || 0);
    });
    return vector;
}
}
},{"compromise":1}],4:[function(require,module,exports){
const Classifier = require('./classifier/classifier.js');
const Vectorizer = require('./classifier/vectorizer.js');

/**
 * Returns 1 if comment is toxic, 0 otherwise.
 *
 * @param comment is null terminated string representation of a comment.
 */
function classifyComment(comment) {
    const vector = vectorizer.vectorize(comment);
    return classifier.predict(vector);
}

function addBlurFilter(element) {
    element.style.filter = "blur(2px)";
}

function removeBlurFilter(element) {
    element.style.filter = null;
}

function addHooverListener(child) {
    child.onmouseover = function() {
        removeBlurFilter(child);
    };

    child.onmouseout = function () {
        addBlurFilter(child);
    };
}


function markCommentIfToxic(commentNode) {
    let commentTextElement = commentNode.children[0].children[1].children[1].children[1].children[0];
    let commentInnerText = commentTextElement.innerText;

    if (classifyComment(commentInnerText) === 1) {
        console.log('Toxic comment: ' + commentInnerText);
        addBlurFilter(commentTextElement);
        addHooverListener(commentTextElement);
    }
}

function addMutationObserver(target) {
    const config = {
        childList: true
    };

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function (mutation) {
            let commentNode = mutation.target.childNodes[globalCommentId];
            console.log('Mutation #' + globalCommentId + ': ' + commentNode);
            markCommentIfToxic(commentNode);
            globalCommentId += 1;
        })
    });

    observer.observe(target, config);
}

function activePollForContentsElement(commentsElement) {
    const interval = setInterval(function () {
        const contentsElement = commentsElement.children[1].children[2];
        if (contentsElement !== null) {
            clearInterval(interval);
            console.log('Loaded: contents');
            addMutationObserver(contentsElement);
        } else {
            console.log('Not loaded yet: contents');
        }
    }, 100);
}

function activePollFor(elementId) {
    const interval = setInterval(function () {
        const commentsElement = document.getElementById(elementId);
        if (commentsElement !== null) {
            clearInterval(interval);
            console.log('Loaded: ' + elementId);
            activePollForContentsElement(commentsElement);
        } else {
            console.log('Not loaded yet: ' + elementId);
        }
    }, 100);
}

let globalCommentId = 0;
const vectorizer = new Vectorizer();
const classifier = new Classifier();

window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

console.log('Start polling...');
activePollFor('comments');

},{"./classifier/classifier.js":2,"./classifier/vectorizer.js":3}],5:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[4]);
