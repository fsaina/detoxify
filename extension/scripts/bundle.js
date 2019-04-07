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
        if (features[2] <= 0.5) {
            if (features[50] <= 0.5) {
                if (features[17] <= 0.5) {
                    classes[0] = 0.055101591841222826;
                    classes[1] = 0.006584219872086945;
                } else {
                    classes[0] = 0.017191256658861592;
                    classes[1] = 0.007456354007888416;
                }
            } else {
                if (features[119] <= 1.5) {
                    classes[0] = 0.3108097490454627;
                    classes[1] = 0.02502474975250183;
                } else {
                    classes[0] = 0.2771736568348682;
                    classes[1] = 0.009004195672328864;
                }
            }
        } else {
            if (features[50] <= 2.5) {
                if (features[5] <= 0.5) {
                    classes[0] = 0.03404465955340353;
                    classes[1] = 0.007684208872196908;
                } else {
                    classes[0] = 0.0035199648003520255;
                    classes[1] = 0.019469805301946516;
                }
            } else {
                if (features[225] <= 1.5) {
                    classes[0] = 0.18431887109700032;
                    classes[1] = 0.019713374294828008;
                } else {
                    classes[0] = 0.01609126765875163;
                    classes[1] = 0.006812074736395437;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[19] <= 0.5) {
            if (features[14] <= 1.5) {
                if (features[133] <= 0.5) {
                    classes[0] = 0.11936205596924376;
                    classes[1] = 0.09777386275152687;
                } else {
                    classes[0] = 0.020168577463118592;
                    classes[1] = 0.032814504915324415;
                }
            } else {
                if (features[228] <= 0.5) {
                    classes[0] = 0.057983781673055526;
                    classes[1] = 0.030044624198727016;
                } else {
                    classes[0] = 0.0666611707242996;
                    classes[1] = 0.01792405514186974;
                }
            }
        } else {
            if (features[104] <= 4.5) {
                if (features[17] <= 3.5) {
                    classes[0] = 0.13410794095100448;
                    classes[1] = 0.19082086920178232;
                } else {
                    classes[0] = 0.025216314659667376;
                    classes[1] = 0.08833080355948915;
                }
            } else {
                if (features[119] <= 12.5) {
                    classes[0] = 0.05264356100803364;
                    classes[1] = 0.03794860184288204;
                } else {
                    classes[0] = 0.02385659755160539;
                    classes[1] = 0.004342678388433813;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[250] <= 0.5) {
            if (features[225] <= 0.5) {
                if (features[12] <= 0.5) {
                    classes[0] = 0.1970465060693693;
                    classes[1] = 0.2365265193956828;
                } else {
                    classes[0] = 0.098977358617136;
                    classes[1] = 0.07313388694499395;
                }
            } else {
                if (features[5] <= 0.5) {
                    classes[0] = 0.021898130971509312;
                    classes[1] = 0.022138023766540685;
                } else {
                    classes[0] = 0.007085753037609913;
                    classes[1] = 0.04818094539150847;
                }
            }
        } else {
            if (features[19] <= 8.5) {
                if (features[200] <= 0.5) {
                    classes[0] = 0.08104198805906869;
                    classes[1] = 0.06507124925653757;
                } else {
                    classes[0] = 0.08695356489049225;
                    classes[1] = 0.04002930850363793;
                }
            } else {
                if (features[297] <= 1.5) {
                    classes[0] = 0.005816933223392318;
                    classes[1] = 0.014834687243345376;
                } else {
                    classes[0] = 0.0011797651314130824;
                    classes[1] = 8.537949777701702e-05;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[21] <= 0.5) {
            if (features[64] <= 0.5) {
                if (features[104] <= 0.5) {
                    classes[0] = 0.11708854844487436;
                    classes[1] = 0.11487410518971441;
                } else {
                    classes[0] = 0.16030808018732665;
                    classes[1] = 0.09641796962780338;
                }
            } else {
                if (features[254] <= 0.5) {
                    classes[0] = 0.07246078307419171;
                    classes[1] = 0.10607437851462086;
                } else {
                    classes[0] = 0.0729475282363964;
                    classes[1] = 0.062290630051326436;
                }
            }
        } else {
            if (features[66] <= 0.5) {
                if (features[369] <= 0.5) {
                    classes[0] = 0.04386352128369744;
                    classes[1] = 0.05305151653199428;
                } else {
                    classes[0] = 0.0038248284402429174;
                    classes[1] = 0.0008001340292553603;
                }
            } else {
                if (features[50] <= 13.5) {
                    classes[0] = 0.010537839720102186;
                    classes[1] = 0.04147278019458954;
                } else {
                    classes[0] = 0.018968870613164553;
                    classes[1] = 0.025018485860706607;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[771] <= 1.5) {
            if (features[133] <= 0.5) {
                if (features[158] <= 0.5) {
                    classes[0] = 0.2373446616690174;
                    classes[1] = 0.24975476398445232;
                } else {
                    classes[0] = 0.06427712089041047;
                    classes[1] = 0.038114736324244086;
                }
            } else {
                if (features[202] <= 0.5) {
                    classes[0] = 0.04820351676887593;
                    classes[1] = 0.08868435306776809;
                } else {
                    classes[0] = 0.0589136177849532;
                    classes[1] = 0.06275201927517858;
                }
            }
        } else {
            if (features[16] <= 1.5) {
                if (features[35] <= 0.5) {
                    classes[0] = 0.03666780639709135;
                    classes[1] = 0.012481200061679638;
                } else {
                    classes[0] = 0.007008180081943056;
                    classes[1] = 0.006714883478561724;
                }
            } else {
                if (features[251] <= 2.5) {
                    classes[0] = 0.04465608941065634;
                    classes[1] = 0.04123698858377094;
                } else {
                    classes[0] = 0.0029290069970786792;
                    classes[1] = 0.0002610552243467106;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[210] <= 0.5) {
            if (features[203] <= 0.5) {
                if (features[0] <= 0.5) {
                    classes[0] = 0.20404485128736033;
                    classes[1] = 0.207875414350202;
                } else {
                    classes[0] = 0.14585460828663618;
                    classes[1] = 0.09712464584276481;
                }
            } else {
                if (features[118] <= 0.5) {
                    classes[0] = 0.09955220665948132;
                    classes[1] = 0.14165787402716434;
                } else {
                    classes[0] = 0.04853705504770131;
                    classes[1] = 0.04171599891763601;
                }
            }
        } else {
            if (features[18] <= 6.5) {
                if (features[264] <= 2.5) {
                    classes[0] = 0.0010107379943255996;
                    classes[1] = 0.009567363207752038;
                } else {
                    classes[0] = 8.300800156615792e-05;
                    classes[1] = 0.0;
                }
            } else {
                if (features[35] <= 0.5) {
                    classes[0] = 0.0005387720097915069;
                    classes[1] = 0.00048069881208857233;
                } else {
                    classes[0] = 0.0003787607131172642;
                    classes[1] = 0.0015780048424097334;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[372] <= 0.5) {
            if (features[270] <= 0.5) {
                if (features[53] <= 0.5) {
                    classes[0] = 0.3483951174426992;
                    classes[1] = 0.33285560919447443;
                } else {
                    classes[0] = 0.05744633763064626;
                    classes[1] = 0.03463570603039961;
                }
            } else {
                if (features[233] <= 0.5) {
                    classes[0] = 0.036831911892202404;
                    classes[1] = 0.06622038995602351;
                } else {
                    classes[0] = 0.05262257675384182;
                    classes[1] = 0.05040258053797789;
                }
            }
        } else {
            if (features[237] <= 0.5) {
                if (features[296] <= 0.5) {
                    classes[0] = 0.0020017763129962485;
                    classes[1] = 0.0016209936815354176;
                } else {
                    classes[0] = 4.309326227760429e-05;
                    classes[1] = 0.000820891028859172;
                }
            } else {
                if (features[229] <= 3.5) {
                    classes[0] = 0.0019065487991794812;
                    classes[1] = 0.01307012292738687;
                } else {
                    classes[0] = 0.0007526379067935025;
                    classes[1] = 0.0003737066427146189;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[58] <= 0.5) {
            if (features[212] <= 0.5) {
                if (features[207] <= 0.5) {
                    classes[0] = 0.17321792654463788;
                    classes[1] = 0.14882813649725954;
                } else {
                    classes[0] = 0.0082303864305936;
                    classes[1] = 0.01518589853366254;
                }
            } else {
                if (features[32] <= 0.5) {
                    classes[0] = 0.0406765823407188;
                    classes[1] = 0.06905364173323746;
                } else {
                    classes[0] = 0.1259831511880606;
                    classes[1] = 0.1480017871234901;
                }
            }
        } else {
            if (features[90] <= 0.5) {
                if (features[97] <= 0.5) {
                    classes[0] = 0.12457367382018916;
                    classes[1] = 0.08399576340949336;
                } else {
                    classes[0] = 0.018744042807864236;
                    classes[1] = 0.021055466259114926;
                }
            } else {
                if (features[771] <= 4.5) {
                    classes[0] = 0.006438457468619496;
                    classes[1] = 0.012789989797949536;
                } else {
                    classes[0] = 0.0021357793993086174;
                    classes[1] = 0.0010893166457966418;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[74] <= 0.5) {
            if (features[340] <= 0.5) {
                if (features[184] <= 0.5) {
                    classes[0] = 0.23466079497072087;
                    classes[1] = 0.20314453568309548;
                } else {
                    classes[0] = 0.2182267321416577;
                    classes[1] = 0.24468667623204282;
                }
            } else {
                if (features[4] <= 0.5) {
                    classes[0] = 0.0060943983655543975;
                    classes[1] = 0.022966509036507033;
                } else {
                    classes[0] = 0.01877486736014689;
                    classes[1] = 0.01838363031551544;
                }
            }
        } else {
            if (features[16] <= 7.5) {
                if (features[159] <= 2.5) {
                    classes[0] = 0.01865252158932259;
                    classes[1] = 0.0058337303223584035;
                } else {
                    classes[0] = 0.0005636579317272754;
                    classes[1] = 0.0010984047759689001;
                }
            } else {
                if (features[102] <= 11.5) {
                    classes[0] = 0.0016902357130260742;
                    classes[1] = 0.0037742218499736933;
                } else {
                    classes[0] = 0.0013367919278544276;
                    classes[1] = 0.00011229178453685799;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[171] <= 0.5) {
            if (features[2] <= 1.5) {
                if (features[130] <= 0.5) {
                    classes[0] = 0.21515710235743649;
                    classes[1] = 0.24554453525533224;
                } else {
                    classes[0] = 0.06654857052431694;
                    classes[1] = 0.05162317705851095;
                }
            } else {
                if (features[5] <= 0.5) {
                    classes[0] = 0.013707353515460052;
                    classes[1] = 0.018227890392973303;
                } else {
                    classes[0] = 0.005245896823357226;
                    classes[1] = 0.016647001315625177;
                }
            }
        } else {
            if (features[188] <= 0.5) {
                if (features[289] <= 0.5) {
                    classes[0] = 0.12801506722694847;
                    classes[1] = 0.08696624248704388;
                } else {
                    classes[0] = 0.005979008279843737;
                    classes[1] = 0.009009225518829133;
                }
            } else {
                if (features[130] <= 3.5) {
                    classes[0] = 0.05427941068403834;
                    classes[1] = 0.06463499630397113;
                } else {
                    classes[0] = 0.011067590588595346;
                    classes[1] = 0.007346931667716466;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[192] <= 0.5) {
            if (features[251] <= 0.5) {
                if (features[35] <= 0.5) {
                    classes[0] = 0.3811543154534557;
                    classes[1] = 0.36205613196506004;
                } else {
                    classes[0] = 0.08439736885474666;
                    classes[1] = 0.10893341975048133;
                }
            } else {
                if (features[52] <= 13.5) {
                    classes[0] = 0.02829422074959473;
                    classes[1] = 0.013394480883588241;
                } else {
                    classes[0] = 0.0018149159208336106;
                    classes[1] = 0.0036650287122435444;
                }
            }
        } else {
            if (features[85] <= 0.5) {
                if (features[202] <= 0.5) {
                    classes[0] = 0.0007216025011881088;
                    classes[1] = 9.00120970562421e-05;
                } else {
                    classes[0] = 0.00013315635597265445;
                    classes[1] = 0.00033458779381102463;
                }
            } else {
                if (features[111] <= 6.5) {
                    classes[0] = 0.002626614848168402;
                    classes[1] = 0.011056695599738096;
                } else {
                    classes[0] = 0.0008578053160417163;
                    classes[1] = 0.0004696431980227919;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[505] <= 0.5) {
            if (features[19] <= 4.5) {
                if (features[227] <= 0.5) {
                    classes[0] = 0.32217307206442586;
                    classes[1] = 0.34387465455869687;
                } else {
                    classes[0] = 0.1239150577990946;
                    classes[1] = 0.09918170319168085;
                }
            } else {
                if (features[2] <= 0.5) {
                    classes[0] = 0.00824261884530782;
                    classes[1] = 0.01979416131806064;
                } else {
                    classes[0] = 0.019926122253949127;
                    classes[1] = 0.02236220121961366;
                }
            }
        } else {
            if (features[267] <= 0.5) {
                if (features[186] <= 2.5) {
                    classes[0] = 0.018248858647122203;
                    classes[1] = 0.00644385571197567;
                } else {
                    classes[0] = 0.00021793926186607665;
                    classes[1] = 0.0007090524525453684;
                }
            } else {
                if (features[146] <= 8.5) {
                    classes[0] = 0.0050242420704705165;
                    classes[1] = 0.0067415962051678175;
                } else {
                    classes[0] = 0.002252089057759523;
                    classes[1] = 0.0008927753422621265;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[244] <= 0.5) {
            if (features[98] <= 0.5) {
                if (features[311] <= 0.5) {
                    classes[0] = 0.34123303540116795;
                    classes[1] = 0.3329809854910758;
                } else {
                    classes[0] = 0.01373886055319904;
                    classes[1] = 0.024567440356760138;
                }
            } else {
                if (features[216] <= 1.5) {
                    classes[0] = 0.04486238248391842;
                    classes[1] = 0.025575295181286054;
                } else {
                    classes[0] = 0.028999005160170878;
                    classes[1] = 0.02627755619703616;
                }
            }
        } else {
            if (features[417] <= 0.5) {
                if (features[67] <= 0.5) {
                    classes[0] = 0.032603301456553345;
                    classes[1] = 0.039305559298416094;
                } else {
                    classes[0] = 0.020050936053386686;
                    classes[1] = 0.03736732269383206;
                }
            } else {
                if (features[2] <= 6.5) {
                    classes[0] = 0.01752339891750334;
                    classes[1] = 0.011283035240179262;
                } else {
                    classes[0] = 0.000989079974100728;
                    classes[1] = 0.0026428055414108517;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[164] <= 0.5) {
            if (features[139] <= 1.5) {
                if (features[23] <= 0.5) {
                    classes[0] = 0.2534004092853605;
                    classes[1] = 0.22678112720447594;
                } else {
                    classes[0] = 0.06678138311892914;
                    classes[1] = 0.08508506953653487;
                }
            } else {
                if (features[113] <= 6.5) {
                    classes[0] = 0.04494453888147281;
                    classes[1] = 0.07188155550346123;
                } else {
                    classes[0] = 0.06314907123644553;
                    classes[1] = 0.06267056086885132;
                }
            }
        } else {
            if (features[44] <= 0.5) {
                if (features[17] <= 0.5) {
                    classes[0] = 0.012592821462703189;
                    classes[1] = 0.003565758432813102;
                } else {
                    classes[0] = 0.015314851017938827;
                    classes[1] = 0.009960688114147916;
                }
            } else {
                if (features[136] <= 7.5) {
                    classes[0] = 0.028793155536203527;
                    classes[1] = 0.030453558806489135;
                } else {
                    classes[0] = 0.015023769460941425;
                    classes[1] = 0.009601681533224625;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[87] <= 0.5) {
            if (features[23] <= 0.5) {
                if (features[314] <= 0.5) {
                    classes[0] = 0.1979363598885644;
                    classes[1] = 0.19887271063359588;
                } else {
                    classes[0] = 0.011200287483355144;
                    classes[1] = 0.021717948386175422;
                }
            } else {
                if (features[243] <= 0.5) {
                    classes[0] = 0.019119428501445285;
                    classes[1] = 0.038584396915906004;
                } else {
                    classes[0] = 0.008406922248864456;
                    classes[1] = 0.0065353997584567764;
                }
            }
        } else {
            if (features[225] <= 3.5) {
                if (features[238] <= 0.5) {
                    classes[0] = 0.15175276871381937;
                    classes[1] = 0.11876169943641678;
                } else {
                    classes[0] = 0.10988269688930517;
                    classes[1] = 0.1099936138217795;
                }
            } else {
                if (features[27] <= 15.5) {
                    classes[0] = 0.001402021136461543;
                    classes[1] = 0.005531497456852417;
                } else {
                    classes[0] = 0.0002995151381869922;
                    classes[1] = 2.7335908150539727e-06;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[11] <= 0.5) {
            if (features[181] <= 0.5) {
                if (features[48] <= 24.5) {
                    classes[0] = 0.31070862854782844;
                    classes[1] = 0.3009574665284361;
                } else {
                    classes[0] = 0.0005299883804509895;
                    classes[1] = 0.003487082051918247;
                }
            } else {
                if (features[200] <= 1.5) {
                    classes[0] = 0.07841894293791635;
                    classes[1] = 0.10657253641802102;
                } else {
                    classes[0] = 0.012674627007480802;
                    classes[1] = 0.010939383256697839;
                }
            }
        } else {
            if (features[21] <= 2.5) {
                if (features[125] <= 0.5) {
                    classes[0] = 0.023129430647250784;
                    classes[1] = 0.02321474725837349;
                } else {
                    classes[0] = 0.06987863167434329;
                    classes[1] = 0.047558369190418996;
                }
            } else {
                if (features[77] <= 0.5) {
                    classes[0] = 0.0014397746450918996;
                    classes[1] = 0.0007987727180964769;
                } else {
                    classes[0] = 0.003219976159637685;
                    classes[1] = 0.0064716425780369765;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[231] <= 0.5) {
            if (features[593] <= 0.5) {
                if (features[459] <= 0.5) {
                    classes[0] = 0.478882338034453;
                    classes[1] = 0.4687009546383717;
                } else {
                    classes[0] = 0.0025443432053146773;
                    classes[1] = 0.007219026758493841;
                }
            } else {
                if (features[451] <= 0.5) {
                    classes[0] = 0.004951337922921588;
                    classes[1] = 0.0010103881518648758;
                } else {
                    classes[0] = 0.00010949939045456327;
                    classes[1] = 0.0003184506612270161;
                }
            }
        } else {
            if (features[299] <= 0.5) {
                if (features[229] <= 0.5) {
                    classes[0] = 0.005505488626517449;
                    classes[1] = 0.006676487946600711;
                } else {
                    classes[0] = 0.005577805689608684;
                    classes[1] = 0.014788945291069644;
                }
            } else {
                if (features[17] <= 12.5) {
                    classes[0] = 0.0021618004649561744;
                    classes[1] = 0.00073634826253375;
                } else {
                    classes[0] = 0.0002673866657648391;
                    classes[1] = 0.0005493982898388864;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[189] <= 0.5) {
            if (features[3] <= 0.5) {
                if (features[186] <= 0.5) {
                    classes[0] = 0.3876058451225936;
                    classes[1] = 0.37673290850895136;
                } else {
                    classes[0] = 0.027444896834676623;
                    classes[1] = 0.041232861439798534;
                }
            } else {
                if (features[5] <= 0.5) {
                    classes[0] = 0.03709861822316022;
                    classes[1] = 0.021353755911091985;
                } else {
                    classes[0] = 0.014034945813833055;
                    classes[1] = 0.014873896615747584;
                }
            }
        } else {
            if (features[252] <= 3.5) {
                if (features[188] <= 0.5) {
                    classes[0] = 0.011461793690408315;
                    classes[1] = 0.011148410686436348;
                } else {
                    classes[0] = 0.015130892877278966;
                    classes[1] = 0.031070836658421426;
                }
            } else {
                if (features[163] <= 10.5) {
                    classes[0] = 0.007125978234803331;
                    classes[1] = 0.0031087183106110246;
                } else {
                    classes[0] = 9.702920325253288e-05;
                    classes[1] = 0.0004786118689346266;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[111] <= 0.5) {
            if (features[17] <= 1.5) {
                if (features[24] <= 11.5) {
                    classes[0] = 0.16740140106072607;
                    classes[1] = 0.1670964024746803;
                } else {
                    classes[0] = 0.00036477845447159833;
                    classes[1] = 0.002319035595757378;
                }
            } else {
                if (features[37] <= 1.5) {
                    classes[0] = 0.020589145248613244;
                    classes[1] = 0.03968404462743106;
                } else {
                    classes[0] = 0.027800869942863755;
                    classes[1] = 0.031725674535132614;
                }
            }
        } else {
            if (features[351] <= 0.5) {
                if (features[361] <= 0.5) {
                    classes[0] = 0.22998586765080187;
                    classes[1] = 0.2154190105355203;
                } else {
                    classes[0] = 0.0443280731468513;
                    classes[1] = 0.02941712601646176;
                }
            } else {
                if (features[331] <= 0.5) {
                    classes[0] = 0.008898923426529756;
                    classes[1] = 0.01427699350571507;
                } else {
                    classes[0] = 0.000630941069135564;
                    classes[1] = 6.171270930444345e-05;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[285] <= 0.5) {
            if (features[223] <= 0.5) {
                if (features[43] <= 0.5) {
                    classes[0] = 0.33346148689536464;
                    classes[1] = 0.32614609893874713;
                } else {
                    classes[0] = 0.040623980773662145;
                    classes[1] = 0.05436920865643322;
                }
            } else {
                if (features[139] <= 2.5) {
                    classes[0] = 0.06198515625850676;
                    classes[1] = 0.04359451035553577;
                } else {
                    classes[0] = 0.031728323967046466;
                    classes[1] = 0.032459268946677375;
                }
            }
        } else {
            if (features[87] <= 8.5) {
                if (features[119] <= 12.5) {
                    classes[0] = 0.027550373879060817;
                    classes[1] = 0.037510034224306196;
                } else {
                    classes[0] = 0.0007944694530462879;
                    classes[1] = 0.0032820462868632916;
                }
            } else {
                if (features[28] <= 12.5) {
                    classes[0] = 0.0036331346257170555;
                    classes[1] = 0.0017763210297377994;
                } else {
                    classes[0] = 0.00022307414759734564;
                    classes[1] = 0.000862511561698982;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[160] <= 0.5) {
            if (features[225] <= 0.5) {
                if (features[41] <= 9.5) {
                    classes[0] = 0.32210625081410943;
                    classes[1] = 0.32373994104407666;
                } else {
                    classes[0] = 0.0020455143708769216;
                    classes[1] = 0.005679847663305762;
                }
            } else {
                if (features[106] <= 0.5) {
                    classes[0] = 0.011681628962621496;
                    classes[1] = 0.0248798775993886;
                } else {
                    classes[0] = 0.024535473718109987;
                    classes[1] = 0.025308606786949617;
                }
            }
        } else {
            if (features[260] <= 0.5) {
                if (features[250] <= 0.5) {
                    classes[0] = 0.06864301103294448;
                    classes[1] = 0.04745364303688473;
                } else {
                    classes[0] = 0.042507228105833676;
                    classes[1] = 0.03954874740567649;
                }
            } else {
                if (features[316] <= 0.5) {
                    classes[0] = 0.024404520419226694;
                    classes[1] = 0.03107474167477956;
                } else {
                    classes[0] = 0.004076372576279917;
                    classes[1] = 0.0023145947889380404;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[234] <= 0.5) {
            if (features[392] <= 0.5) {
                if (features[17] <= 2.5) {
                    classes[0] = 0.26036866735856307;
                    classes[1] = 0.26953464765113877;
                } else {
                    classes[0] = 0.046541019049159596;
                    classes[1] = 0.06309711776515844;
                }
            } else {
                if (features[281] <= 0.5) {
                    classes[0] = 0.00846362030904726;
                    classes[1] = 0.008162521919490209;
                } else {
                    classes[0] = 0.0075600670281924355;
                    classes[1] = 0.0025748132391795525;
                }
            }
        } else {
            if (features[268] <= 0.5) {
                if (features[252] <= 1.5) {
                    classes[0] = 0.05160208570158389;
                    classes[1] = 0.039367990356232674;
                } else {
                    classes[0] = 0.008270902625653102;
                    classes[1] = 0.003425434523398427;
                }
            } else {
                if (features[19] <= 0.5) {
                    classes[0] = 0.028097497826211966;
                    classes[1] = 0.035792122980038296;
                } else {
                    classes[0] = 0.08909614010158573;
                    classes[1] = 0.07804535156536307;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[190] <= 0.5) {
            if (features[77] <= 0.5) {
                if (features[1] <= 0.5) {
                    classes[0] = 0.2846001390193617;
                    classes[1] = 0.29363768709226484;
                } else {
                    classes[0] = 0.058285091322637705;
                    classes[1] = 0.04618756852681468;
                }
            } else {
                if (features[161] <= 0.5) {
                    classes[0] = 0.029564962010737147;
                    classes[1] = 0.045406447569723306;
                } else {
                    classes[0] = 0.050346874780394936;
                    classes[1] = 0.05057795139381783;
                }
            }
        } else {
            if (features[119] <= 1.5) {
                if (features[142] <= 0.5) {
                    classes[0] = 0.019091945580691806;
                    classes[1] = 0.014216963290502654;
                } else {
                    classes[0] = 0.011108786957780092;
                    classes[1] = 0.0047477650718477935;
                }
            } else {
                if (features[2] <= 0.5) {
                    classes[0] = 0.01880291212838091;
                    classes[1] = 0.022506830883565802;
                } else {
                    classes[0] = 0.028199288200014636;
                    classes[1] = 0.022718786171461867;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[6] <= 0.5) {
            if (features[157] <= 0.5) {
                if (features[141] <= 0.5) {
                    classes[0] = 0.220810406779553;
                    classes[1] = 0.22485506700406382;
                } else {
                    classes[0] = 0.07860944282292846;
                    classes[1] = 0.06357958482315026;
                }
            } else {
                if (features[422] <= 0.5) {
                    classes[0] = 0.025807612996541683;
                    classes[1] = 0.01584120558063321;
                } else {
                    classes[0] = 8.240302408276167e-05;
                    classes[1] = 0.0006184770103412748;
                }
            }
        } else {
            if (features[55] <= 0.5) {
                if (features[171] <= 2.5) {
                    classes[0] = 0.05607943365841865;
                    classes[1] = 0.07508855878147856;
                } else {
                    classes[0] = 0.003063333139639709;
                    classes[1] = 0.0015744030177267932;
                }
            } else {
                if (features[104] <= 4.5) {
                    classes[0] = 0.07630520729368395;
                    classes[1] = 0.06919957625999973;
                } else {
                    classes[0] = 0.03924216028515286;
                    classes[1] = 0.04924312752260461;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[153] <= 0.5) {
            if (features[252] <= 0.5) {
                if (features[206] <= 0.5) {
                    classes[0] = 0.19888473136859203;
                    classes[1] = 0.19240745098238526;
                } else {
                    classes[0] = 0.021809197808169898;
                    classes[1] = 0.02917784853061542;
                }
            } else {
                if (features[314] <= 3.5) {
                    classes[0] = 0.08991808055883853;
                    classes[1] = 0.07001059970733847;
                } else {
                    classes[0] = 0.00046102520602692555;
                    classes[1] = 0.0017013782433062722;
                }
            }
        } else {
            if (features[33] <= 12.5) {
                if (features[104] <= 4.5) {
                    classes[0] = 0.13913823841165918;
                    classes[1] = 0.15060150469934983;
                } else {
                    classes[0] = 0.021863349744652087;
                    classes[1] = 0.03382047289348374;
                }
            } else {
                if (features[133] <= 5.5) {
                    classes[0] = 0.02469483306182994;
                    classes[1] = 0.0168157043830229;
                } else {
                    classes[0] = 0.003230543840232396;
                    classes[1] = 0.005465040560498906;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[360] <= 0.5) {
            if (features[368] <= 0.5) {
                if (features[5] <= 2.5) {
                    classes[0] = 0.42620442355633587;
                    classes[1] = 0.422385389355044;
                } else {
                    classes[0] = 0.003378451933199724;
                    classes[1] = 0.007206210325178812;
                }
            } else {
                if (features[177] <= 0.5) {
                    classes[0] = 0.009867014017138073;
                    classes[1] = 0.010341274136575705;
                } else {
                    classes[0] = 0.01356920863795193;
                    classes[1] = 0.02264693870036581;
                }
            }
        } else {
            if (features[19] <= 1.5) {
                if (features[41] <= 9.5) {
                    classes[0] = 0.02379228688994337;
                    classes[1] = 0.012485399190137346;
                } else {
                    classes[0] = 0.0017644295984888003;
                    classes[1] = 0.0024243546229929403;
                }
            } else {
                if (features[103] <= 3.5) {
                    classes[0] = 0.008987109817845134;
                    classes[1] = 0.012348427594894594;
                } else {
                    classes[0] = 0.012437075549087902;
                    classes[1] = 0.0101620060748103;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[104] <= 1.5) {
            if (features[108] <= 0.5) {
                if (features[238] <= 0.5) {
                    classes[0] = 0.21434312825891508;
                    classes[1] = 0.20420936988152597;
                } else {
                    classes[0] = 0.04818276329081984;
                    classes[1] = 0.06295088182398195;
                }
            } else {
                if (features[163] <= 0.5) {
                    classes[0] = 0.022905815359763337;
                    classes[1] = 0.026372743204188708;
                } else {
                    classes[0] = 0.009032158080213156;
                    classes[1] = 0.01979447643273906;
                }
            }
        } else {
            if (features[264] <= 0.5) {
                if (features[21] <= 0.5) {
                    classes[0] = 0.11011361052183591;
                    classes[1] = 0.10113808867344101;
                } else {
                    classes[0] = 0.031151391814579956;
                    classes[1] = 0.01783862928709205;
                }
            } else {
                if (features[250] <= 0.5) {
                    classes[0] = 0.030439524514027774;
                    classes[1] = 0.02592150013880135;
                } else {
                    classes[0] = 0.033831608159852325;
                    classes[1] = 0.04177431055822601;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[120] <= 3.5) {
            if (features[216] <= 0.5) {
                if (features[67] <= 0.5) {
                    classes[0] = 0.23565835522454556;
                    classes[1] = 0.21397105790381812;
                } else {
                    classes[0] = 0.04643661655497625;
                    classes[1] = 0.055233046328157405;
                }
            } else {
                if (features[19] <= 0.5) {
                    classes[0] = 0.06172053570130327;
                    classes[1] = 0.08215725278477434;
                } else {
                    classes[0] = 0.11714580310409535;
                    classes[1] = 0.11914487718026087;
                }
            }
        } else {
            if (features[154] <= 3.5) {
                if (features[242] <= 5.5) {
                    classes[0] = 0.017596330749008297;
                    classes[1] = 0.008246013121949164;
                } else {
                    classes[0] = 8.236809600596645e-05;
                    classes[1] = 0.0005141970719079372;
                }
            } else {
                if (features[157] <= 0.5) {
                    classes[0] = 0.012502401869983689;
                    classes[1] = 0.008923540503833986;
                } else {
                    classes[0] = 0.008857588700078507;
                    classes[1] = 0.011810015105300121;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[4] <= 1.5) {
            if (features[119] <= 1.5) {
                if (features[295] <= 0.5) {
                    classes[0] = 0.2970289472076165;
                    classes[1] = 0.29581316365157206;
                } else {
                    classes[0] = 0.01928398773999375;
                    classes[1] = 0.011022137280933618;
                }
            } else {
                if (features[2] <= 0.5) {
                    classes[0] = 0.06943957475361127;
                    classes[1] = 0.09610420150875947;
                } else {
                    classes[0] = 0.06592716965148263;
                    classes[1] = 0.05880390653685862;
                }
            }
        } else {
            if (features[256] <= 0.5) {
                if (features[136] <= 8.5) {
                    classes[0] = 0.02923381227057656;
                    classes[1] = 0.022588076034158057;
                } else {
                    classes[0] = 0.007489492537770641;
                    classes[1] = 0.003100877713232733;
                }
            } else {
                if (features[33] <= 51.5) {
                    classes[0] = 0.010113115966734284;
                    classes[1] = 0.012135597181134302;
                } else {
                    classes[0] = 0.0014838998722153452;
                    classes[1] = 0.00043204009335064093;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[2] <= 2.5) {
            if (features[92] <= 1.5) {
                if (features[379] <= 0.5) {
                    classes[0] = 0.19908835346662404;
                    classes[1] = 0.2082622828129235;
                } else {
                    classes[0] = 0.005689012716213716;
                    classes[1] = 0.01088244817054682;
                }
            } else {
                if (features[176] <= 0.5) {
                    classes[0] = 0.23651760902482746;
                    classes[1] = 0.20570197389412304;
                } else {
                    classes[0] = 0.03707393271012137;
                    classes[1] = 0.04346409027975133;
                }
            }
        } else {
            if (features[508] <= 1.5) {
                if (features[5] <= 1.5) {
                    classes[0] = 0.015561766549449924;
                    classes[1] = 0.020343209684666762;
                } else {
                    classes[0] = 0.005107705422225115;
                    classes[1] = 0.0111533900582224;
                }
            } else {
                if (features[287] <= 0.5) {
                    classes[0] = 0.0009570569423419216;
                    classes[1] = 0.00010137077630958709;
                } else {
                    classes[0] = 4.563168194610668e-06;
                    classes[1] = 9.123432345699953e-05;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[17] <= 0.5) {
            if (features[139] <= 0.5) {
                if (features[133] <= 0.5) {
                    classes[0] = 0.0936601746835951;
                    classes[1] = 0.08492333091122903;
                } else {
                    classes[0] = 0.020659164502192233;
                    classes[1] = 0.010289163078668688;
                }
            } else {
                if (features[199] <= 6.5) {
                    classes[0] = 0.08946980589582859;
                    classes[1] = 0.09326142888088336;
                } else {
                    classes[0] = 0.001175785042120847;
                    classes[1] = 2.506102451620896e-05;
                }
            }
        } else {
            if (features[50] <= 0.5) {
                if (features[2] <= 0.5) {
                    classes[0] = 0.03105318666342731;
                    classes[1] = 0.01891128063572617;
                } else {
                    classes[0] = 0.005456474883052235;
                    classes[1] = 0.008465875155649538;
                }
            } else {
                if (features[50] <= 4.5) {
                    classes[0] = 0.10327998434899724;
                    classes[1] = 0.13397186797882463;
                } else {
                    classes[0] = 0.15524542398078542;
                    classes[1] = 0.15015199233450163;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[133] <= 1.5) {
            if (features[32] <= 0.5) {
                if (features[120] <= 0.5) {
                    classes[0] = 0.1493107007549328;
                    classes[1] = 0.1553235922228172;
                } else {
                    classes[0] = 0.007389273984787525;
                    classes[1] = 0.015317704781517996;
                }
            } else {
                if (features[44] <= 1.5) {
                    classes[0] = 0.23157036598667136;
                    classes[1] = 0.20044456465530425;
                } else {
                    classes[0] = 0.05568724906011464;
                    classes[1] = 0.062150816711369385;
                }
            }
        } else {
            if (features[165] <= 3.5) {
                if (features[411] <= 0.5) {
                    classes[0] = 0.038080198868310204;
                    classes[1] = 0.05342257211287426;
                } else {
                    classes[0] = 0.005961477106210093;
                    classes[1] = 0.0046944068711279536;
                }
            } else {
                if (features[333] <= 1.5) {
                    classes[0] = 0.010815627099515751;
                    classes[1] = 0.006171362470300389;
                } else {
                    classes[0] = 0.0011851071394590562;
                    classes[1] = 0.0024749801746873157;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[59] <= 0.5) {
            if (features[198] <= 0.5) {
                if (features[13] <= 0.5) {
                    classes[0] = 0.153708708735724;
                    classes[1] = 0.18026836861328704;
                } else {
                    classes[0] = 0.18222013406776877;
                    classes[1] = 0.17793478573880908;
                }
            } else {
                if (features[285] <= 4.5) {
                    classes[0] = 0.10563849462406033;
                    classes[1] = 0.09267795769039487;
                } else {
                    classes[0] = 0.00013895841326684014;
                    classes[1] = 0.0011406346624474523;
                }
            }
        } else {
            if (features[27] <= 0.5) {
                if (features[2] <= 0.5) {
                    classes[0] = 0.010660688167231449;
                    classes[1] = 0.008690416531971367;
                } else {
                    classes[0] = 0.010579845962431557;
                    classes[1] = 0.002892205288337121;
                }
            } else {
                if (features[65] <= 2.5) {
                    classes[0] = 0.03361840739010396;
                    classes[1] = 0.03493184132586243;
                } else {
                    classes[0] = 0.0034347626394145873;
                    classes[1] = 0.001463790148891816;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[25] <= 3.5) {
            if (features[0] <= 1.5) {
                if (features[21] <= 0.5) {
                    classes[0] = 0.2356637110453192;
                    classes[1] = 0.2161841422554964;
                } else {
                    classes[0] = 0.019648629356951757;
                    classes[1] = 0.025062936421118905;
                }
            } else {
                if (features[148] <= 2.5) {
                    classes[0] = 0.01786795804138616;
                    classes[1] = 0.009614130702832914;
                } else {
                    classes[0] = 0.0002754261002270086;
                    classes[1] = 0.001095875901232151;
                }
            }
        } else {
            if (features[432] <= 0.5) {
                if (features[25] <= 99.5) {
                    classes[0] = 0.2030085060170738;
                    classes[1] = 0.22726154399218595;
                } else {
                    classes[0] = 0.00012936327185879715;
                    classes[1] = 0.0013889643932399462;
                }
            } else {
                if (features[356] <= 1.5) {
                    classes[0] = 0.023038819593515995;
                    classes[1] = 0.01790339519185905;
                } else {
                    classes[0] = 0.00036758657366614094;
                    classes[1] = 0.0014890111420347014;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[394] <= 0.5) {
            if (features[365] <= 0.5) {
                if (features[245] <= 0.5) {
                    classes[0] = 0.3179196593190755;
                    classes[1] = 0.33006186690416706;
                } else {
                    classes[0] = 0.11060150182868694;
                    classes[1] = 0.09559866927330551;
                }
            } else {
                if (features[209] <= 0.5) {
                    classes[0] = 0.0205696140717019;
                    classes[1] = 0.021933672764457415;
                } else {
                    classes[0] = 0.015813324698177995;
                    classes[1] = 0.024950459631034445;
                }
            }
        } else {
            if (features[159] <= 0.5) {
                if (features[395] <= 0.5) {
                    classes[0] = 0.023751536086963412;
                    classes[1] = 0.01665683941318394;
                } else {
                    classes[0] = 0.002737983070909828;
                    classes[1] = 0.0005361007163607894;
                }
            } else {
                if (features[65] <= 0.5) {
                    classes[0] = 0.004113568882657147;
                    classes[1] = 0.006975005279096338;
                } else {
                    classes[0] = 0.004492812041830453;
                    classes[1] = 0.003287386018394328;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[289] <= 5.5) {
            if (features[207] <= 0.5) {
                if (features[165] <= 0.5) {
                    classes[0] = 0.28280325477427753;
                    classes[1] = 0.2973433926537786;
                } else {
                    classes[0] = 0.14833461217698382;
                    classes[1] = 0.12171034078075972;
                }
            } else {
                if (features[311] <= 0.5) {
                    classes[0] = 0.060651436039553495;
                    classes[1] = 0.05993781372836984;
                } else {
                    classes[0] = 0.007652922597251396;
                    classes[1] = 0.018855678014164403;
                }
            }
        } else {
            if (features[96] <= 2.5) {
                if (features[97] <= 0.5) {
                    classes[0] = 0.00018102957849013308;
                    classes[1] = 0.0020543523736358503;
                } else {
                    classes[0] = 7.252686624671968e-05;
                    classes[1] = 1.0516416583913023e-05;
                }
            } else {
                if (features[155] <= 8.5) {
                    classes[0] = 0.00027854940859734954;
                    classes[1] = 0.0;
                } else {
                    classes[0] = 2.566855859569458e-05;
                    classes[1] = 8.79060327093388e-05;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[26] <= 0.5) {
            if (features[51] <= 0.5) {
                if (features[127] <= 0.5) {
                    classes[0] = 0.1219875876794753;
                    classes[1] = 0.12623163771164717;
                } else {
                    classes[0] = 0.022718432989713478;
                    classes[1] = 0.01592319138990077;
                }
            } else {
                if (features[34] <= 0.5) {
                    classes[0] = 0.022207930637329423;
                    classes[1] = 0.011487392496388336;
                } else {
                    classes[0] = 0.02886955792094357;
                    classes[1] = 0.025378254828722344;
                }
            }
        } else {
            if (features[311] <= 0.5) {
                if (features[14] <= 0.5) {
                    classes[0] = 0.03782009161011023;
                    classes[1] = 0.033248749458283065;
                } else {
                    classes[0] = 0.23810045428995757;
                    classes[1] = 0.2662497109653715;
                }
            } else {
                if (features[206] <= 2.5) {
                    classes[0] = 0.025112202294912494;
                    classes[1] = 0.02084265341943274;
                } else {
                    classes[0] = 0.0031837425796463663;
                    classes[1] = 0.0006384097281666533;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[214] <= 0.5) {
            if (features[216] <= 1.5) {
                if (features[771] <= 0.5) {
                    classes[0] = 0.20660936024478732;
                    classes[1] = 0.21952388832467779;
                } else {
                    classes[0] = 0.05451946872679005;
                    classes[1] = 0.04520678690232701;
                }
            } else {
                if (features[88] <= 8.5) {
                    classes[0] = 0.02978475299983958;
                    classes[1] = 0.04193257416169021;
                } else {
                    classes[0] = 0.0005770900107836896;
                    classes[1] = 5.208681201403364e-05;
                }
            }
        } else {
            if (features[54] <= 2.5) {
                if (features[0] <= 2.5) {
                    classes[0] = 0.07657047694723056;
                    classes[1] = 0.06370666035698445;
                } else {
                    classes[0] = 0.0038505751068151173;
                    classes[1] = 0.0012756209317417967;
                }
            } else {
                if (features[92] <= 3.5) {
                    classes[0] = 0.03088431284160498;
                    classes[1] = 0.03831958180407278;
                } else {
                    classes[0] = 0.0972039631221476;
                    classes[1] = 0.08998280070649244;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[539] <= 0.5) {
            if (features[43] <= 1.5) {
                if (features[302] <= 0.5) {
                    classes[0] = 0.39472920089390984;
                    classes[1] = 0.4016304706919176;
                } else {
                    classes[0] = 0.07917648254636259;
                    classes[1] = 0.06776594745073135;
                }
            } else {
                if (features[203] <= 1.5) {
                    classes[0] = 0.014380104320492174;
                    classes[1] = 0.015554747175973101;
                } else {
                    classes[0] = 0.007590261218184222;
                    classes[1] = 0.013253170802529858;
                }
            }
        } else {
            if (features[153] <= 2.5) {
                if (features[46] <= 2.5) {
                    classes[0] = 0.001826145108373791;
                    classes[1] = 0.0009617554650734749;
                } else {
                    classes[0] = 0.0016035427669053358;
                    classes[1] = 6.9204771497245165e-06;
                }
            } else {
                if (features[228] <= 4.5) {
                    classes[0] = 0.0003497563648436553;
                    classes[1] = 0.0007751820440708841;
                } else {
                    classes[0] = 0.00034450678093017037;
                    classes[1] = 5.1805892554166586e-05;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[155] <= 0.5) {
            if (features[200] <= 0.5) {
                if (features[412] <= 0.5) {
                    classes[0] = 0.21981179167836365;
                    classes[1] = 0.22011705737790627;
                } else {
                    classes[0] = 0.0031765719676518267;
                    classes[1] = 0.0008883110562488362;
                }
            } else {
                if (features[77] <= 1.5) {
                    classes[0] = 0.04166096876727267;
                    classes[1] = 0.026977820947450465;
                } else {
                    classes[0] = 0.0020811875817474297;
                    classes[1] = 0.003909092269904454;
                }
            }
        } else {
            if (features[125] <= 1.5) {
                if (features[227] <= 3.5) {
                    classes[0] = 0.12230764326044113;
                    classes[1] = 0.14543302980377507;
                } else {
                    classes[0] = 0.00267569389180639;
                    classes[1] = 0.0011986311733537904;
                }
            } else {
                if (features[19] <= 1.5) {
                    classes[0] = 0.04768286367927371;
                    classes[1] = 0.038380419496850726;
                } else {
                    classes[0] = 0.06060327917344088;
                    classes[1] = 0.06309563787451153;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[219] <= 0.5) {
            if (features[274] <= 0.5) {
                if (features[8] <= 20.5) {
                    classes[0] = 0.2217834390252759;
                    classes[1] = 0.20341022425879585;
                } else {
                    classes[0] = 7.591031501002078e-05;
                    classes[1] = 0.0011304846698936433;
                }
            } else {
                if (features[46] <= 0.5) {
                    classes[0] = 0.000344864314552433;
                    classes[1] = 0.0020901211520807355;
                } else {
                    classes[0] = 0.0006569173224397978;
                    classes[1] = 0.0007504774401301847;
                }
            }
        } else {
            if (features[252] <= 2.5) {
                if (features[356] <= 0.5) {
                    classes[0] = 0.2344149485808138;
                    classes[1] = 0.2510449178176831;
                } else {
                    classes[0] = 0.006590709571120223;
                    classes[1] = 0.011367119952149658;
                }
            } else {
                if (features[30] <= 3.5) {
                    classes[0] = 0.0041005753679765;
                    classes[1] = 0.0012410908936287457;
                } else {
                    classes[0] = 0.03203263550281351;
                    classes[1] = 0.02896556381563629;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[449] <= 0.5) {
            if (features[292] <= 0.5) {
                if (features[184] <= 2.5) {
                    classes[0] = 0.36499154286364005;
                    classes[1] = 0.3659317091195532;
                } else {
                    classes[0] = 0.04221764466016892;
                    classes[1] = 0.05376863985049162;
                }
            } else {
                if (features[208] <= 0.5) {
                    classes[0] = 0.05273797374033027;
                    classes[1] = 0.041799656750684526;
                } else {
                    classes[0] = 0.036959201579348136;
                    classes[1] = 0.03743182884713459;
                }
            }
        } else {
            if (features[19] <= 2.5) {
                if (features[247] <= 1.5) {
                    classes[0] = 0.0021532579474314584;
                    classes[1] = 0.0001927881691768508;
                } else {
                    classes[0] = 0.00022775023919474415;
                    classes[1] = 0.00023590341265229198;
                }
            } else {
                if (features[117] <= 0.5) {
                    classes[0] = 0.0002998779541139493;
                    classes[1] = 0.0006046973904259157;
                } else {
                    classes[0] = 0.00041275101577806683;
                    classes[1] = 3.477645988136063e-05;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[255] <= 2.5) {
            if (features[23] <= 1.5) {
                if (features[51] <= 1.5) {
                    classes[0] = 0.3693230204831435;
                    classes[1] = 0.3752412977330233;
                } else {
                    classes[0] = 0.06680348747910721;
                    classes[1] = 0.056227170303266516;
                }
            } else {
                if (features[227] <= 1.5) {
                    classes[0] = 0.03190435547080774;
                    classes[1] = 0.04410905314847929;
                } else {
                    classes[0] = 0.016942519882358235;
                    classes[1] = 0.014554706616177296;
                }
            }
        } else {
            if (features[73] <= 1.5) {
                if (features[133] <= 3.5) {
                    classes[0] = 0.00318220873193325;
                    classes[1] = 0.0005246750054341059;
                } else {
                    classes[0] = 0.0001271421805893896;
                    classes[1] = 0.0003749432919484954;
                }
            } else {
                if (features[258] <= 1.5) {
                    classes[0] = 0.006441830072245846;
                    classes[1] = 0.0065466724038923865;
                } else {
                    classes[0] = 0.005275435699814924;
                    classes[1] = 0.00242148149778247;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[78] <= 7.5) {
            if (features[200] <= 3.5) {
                if (features[267] <= 0.5) {
                    classes[0] = 0.43383212949942523;
                    classes[1] = 0.42456966695009674;
                } else {
                    classes[0] = 0.05727117788885292;
                    classes[1] = 0.06759677719180929;
                }
            } else {
                if (features[17] <= 27.5) {
                    classes[0] = 0.006982719706577879;
                    classes[1] = 0.003210528094001939;
                } else {
                    classes[0] = 0.0002670669943814334;
                    classes[1] = 0.0007883479690174558;
                }
            }
        } else {
            if (features[265] <= 7.5) {
                if (features[290] <= 5.5) {
                    classes[0] = 0.0011974945544256156;
                    classes[1] = 0.0021116139551875255;
                } else {
                    classes[0] = 0.00017497275777660835;
                    classes[1] = 0.0016941515899450356;
                }
            } else {
                if (features[146] <= 5.5) {
                    classes[0] = 1.1503208573328553e-06;
                    classes[1] = 2.8914249940932437e-05;
                } else {
                    classes[0] = 0.00027328827770104326;
                    classes[1] = 0.0;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[145] <= 0.5) {
            if (features[329] <= 0.5) {
                if (features[84] <= 0.5) {
                    classes[0] = 0.1830433403162487;
                    classes[1] = 0.196191747485505;
                } else {
                    classes[0] = 0.021715530267837162;
                    classes[1] = 0.015941161182063002;
                }
            } else {
                if (features[379] <= 0.5) {
                    classes[0] = 0.010236905856983213;
                    classes[1] = 0.012538421922098817;
                } else {
                    classes[0] = 0.0009752116118355918;
                    classes[1] = 0.005343681226529815;
                }
            }
        } else {
            if (features[20] <= 0.5) {
                if (features[37] <= 7.5) {
                    classes[0] = 0.07431497133802724;
                    classes[1] = 0.06166583110277863;
                } else {
                    classes[0] = 0.0018845579152494245;
                    classes[1] = 0.00037769965460838025;
                }
            } else {
                if (features[333] <= 0.5) {
                    classes[0] = 0.1828306185264537;
                    classes[1] = 0.1889725358766929;
                } else {
                    classes[0] = 0.024998864169404264;
                    classes[1] = 0.018968921547682756;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[307] <= 0.5) {
            if (features[110] <= 0.5) {
                if (features[330] <= 0.5) {
                    classes[0] = 0.35455901825751795;
                    classes[1] = 0.35122027966333935;
                } else {
                    classes[0] = 0.023324679515788368;
                    classes[1] = 0.030826798079259997;
                }
            } else {
                if (features[97] <= 1.5) {
                    classes[0] = 0.08386312217791496;
                    classes[1] = 0.07050718991239305;
                } else {
                    classes[0] = 0.0025956794850936385;
                    classes[1] = 0.004325042295036056;
                }
            }
        } else {
            if (features[771] <= 4.5) {
                if (features[156] <= 0.5) {
                    classes[0] = 0.015137073137582543;
                    classes[1] = 0.015198266556912563;
                } else {
                    classes[0] = 0.017571676163956457;
                    classes[1] = 0.026242332039002017;
                }
            } else {
                if (features[208] <= 6.5) {
                    classes[0] = 0.0026839110626492623;
                    classes[1] = 0.0010456429192198628;
                } else {
                    classes[0] = 0.0002648401994974864;
                    classes[1] = 0.0006344485348367326;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[259] <= 4.5) {
            if (features[83] <= 13.5) {
                if (features[338] <= 0.5) {
                    classes[0] = 0.49436834270592156;
                    classes[1] = 0.4923469793533988;
                } else {
                    classes[0] = 0.0031204203441874074;
                    classes[1] = 0.005629107629573157;
                }
            } else {
                if (features[201] <= 7.5) {
                    classes[0] = 0.0001207610552031004;
                    classes[1] = 0.0011521164921201403;
                } else {
                    classes[0] = 4.562543289720547e-05;
                    classes[1] = 8.6692635112128e-08;
                }
            }
        } else {
            if (features[68] <= 12.5) {
                if (features[21] <= 4.5) {
                    classes[0] = 0.001992070227482434;
                    classes[1] = 0.00031345151594518677;
                } else {
                    classes[0] = 2.9690826048157308e-05;
                    classes[1] = 0.00011651720340243209;
                }
            } else {
                if (features[76] <= 0.5) {
                    classes[0] = 7.448335956016338e-05;
                    classes[1] = 0.00038511638581766635;
                } else {
                    classes[0] = 0.0002486060486909158;
                    classes[1] = 5.662472710625722e-05;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[406] <= 0.5) {
            if (features[589] <= 0.5) {
                if (features[444] <= 0.5) {
                    classes[0] = 0.48597324251769974;
                    classes[1] = 0.4902193171064392;
                } else {
                    classes[0] = 0.008018781707655076;
                    classes[1] = 0.005000433154583014;
                }
            } else {
                if (features[2] <= 0.5) {
                    classes[0] = 0.0032178452115316646;
                    classes[1] = 0.0007986807210960809;
                } else {
                    classes[0] = 0.002323682528628018;
                    classes[1] = 0.0023346628112105644;
                }
            }
        } else {
            if (features[86] <= 0.5) {
                if (features[171] <= 1.5) {
                    classes[0] = 9.146414561161165e-05;
                    classes[1] = 0.0011337733455709625;
                } else {
                    classes[0] = 3.401688861152158e-05;
                    classes[1] = 1.3321091750340867e-05;
                }
            } else {
                if (features[152] <= 0.5) {
                    classes[0] = 0.00024713322085496926;
                    classes[1] = 0.0001306496568727679;
                } else {
                    classes[0] = 9.383377941214609e-05;
                    classes[1] = 0.00036916211247390603;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[268] <= 0.5) {
            if (features[120] <= 0.5) {
                if (features[314] <= 0.5) {
                    classes[0] = 0.18189886812743244;
                    classes[1] = 0.17754070017902057;
                } else {
                    classes[0] = 0.008813747903470056;
                    classes[1] = 0.01347944550471372;
                }
            } else {
                if (features[81] <= 2.5) {
                    classes[0] = 0.045374549929129954;
                    classes[1] = 0.029254721061081145;
                } else {
                    classes[0] = 0.018662819452756135;
                    classes[1] = 0.021579064922894107;
                }
            }
        } else {
            if (features[203] <= 0.5) {
                if (features[254] <= 2.5) {
                    classes[0] = 0.11067884403699357;
                    classes[1] = 0.13259239642591591;
                } else {
                    classes[0] = 0.010178400503535467;
                    classes[1] = 0.007264659047396393;
                }
            } else {
                if (features[5] <= 1.5) {
                    classes[0] = 0.11216512420377026;
                    classes[1] = 0.10251222878321749;
                } else {
                    classes[0] = 0.012227645842913944;
                    classes[1] = 0.015776784075760476;
                }
            }
        }
        return classes;
    });

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[243] <= 1.5) {
            if (features[139] <= 2.5) {
                if (features[417] <= 1.5) {
                    classes[0] = 0.4009249517073616;
                    classes[1] = 0.3976761253752193;
                } else {
                    classes[0] = 0.004226105369266928;
                    classes[1] = 0.0018904097301679409;
                }
            } else {
                if (features[125] <= 3.5) {
                    classes[0] = 0.04735352214114615;
                    classes[1] = 0.05971267931842488;
                } else {
                    classes[0] = 0.02718533364936809;
                    classes[1] = 0.025256716861231775;
                }
            }
        } else {
            if (features[329] <= 1.5) {
                if (features[69] <= 1.5) {
                    classes[0] = 0.005414576049816328;
                    classes[1] = 0.004846185961105798;
                } else {
                    classes[0] = 0.011964160105800911;
                    classes[1] = 0.0060250447960406425;
                }
            } else {
                if (features[218] <= 3.5) {
                    classes[0] = 0.0016192758842533729;
                    classes[1] = 0.0037109636550195155;
                } else {
                    classes[0] = 0.0013120750929831915;
                    classes[1] = 0.000881874302791375;
                }
            }
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
    if (process.argv.length - 2 === 811) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var clf = new AdaBoostClassifier();
        var prediction = clf.predict(features);
        console.log(prediction);

    }
}

}).call(this,require('_process'))
},{"_process":6}],3:[function(require,module,exports){
module.exports = class ExactMatch {
    constructor() {
        this.exact_match_toxic_words = ["mound of venus","asslover","s&m","queaf","whitetrash","meatrack","ra8s","pimp","urine","whit","randy","herpes","niglet","narcotic","pudboy","rimming","boner","pornography","poop chute","israel","dong","slanteye","muffdiving","jiggabo","assassination","peepshpw","popimp","girl on","testicles","laid","molestor","peni5","tranny","barface","hell","arsehole","pissed","sixsixsix","execute","shitty ","conspiracy","hamas","cunilingus","bitcher","muslim","pee","niggled","muffindiver","cocksman","scag","aroused","niggling","fingerfucker ","nlggor","niggaz","assfuck","slant","urinate","mothafucked ","fungus","retard","gummer","venus mound","alla","spaghettinigger","piss","mickeyfinn","fuckers","jizzim","tramp","quashie","prince albert piercing","hardon","menage a trois","bukkake","shag","australian","raped","buggery","deth","weenie","lickme","reverse cowgirl","tonguetramp","cum","copulate","gun","schlong","cunn","damnit","crackpipe","buttmuncher","cameltoe","camgirl","hotpussy","cuntfucker","slave","sluts","ball licking","hentai","jackshit","dickman","doo-doo","gook","crimes","ho","bomd","shitdick","slapper","urinary","tantra","nookie","fuckedup","gubba","niggur","cybersex","dicklicker","cunillingus","hitlerism","butt","triplex","busty","dicklick","kunilingus","asian","tonguethrust","fistfucking ","assmonkey","criminal","cockknob","koon","children's","shat","footfucker","blonde action","spitter","weapon","dive","cumm","cuntlicking ","sexy-slim","lemon party","vibrater","upskirt","jijjiboo","fuckfriend","pthc","mothafucka","sniggered","buttfuckers","nutfucker","peehole","taboo","erection","nudity","bast","lesbayn","hummer","shortfuck","cherrypopper","adult","palestinian","pussylips","nooner","how to kill","blumpkin","stiffy","piss pig","beastiality","latin","butchbabes","spunk","gross","xx","crackwhore","butt-fuckers","kraut","pooping","style doggy","lactate","fecal","rusty trombone","wrinkled starfish","spigotty","dink","clogwog","whitey","dies","radical","slaughter","bollick","sodomite","balls","nimphomania","ball gag","poof","muff diver","jail bait","beaver","asspirate","bareback","pimpjuice","ballsack","bi-sexual","torture","limey","nookey","breastman","loser","kills","lesbo","beatyourmeat","lovemaking","munt","clitoris","fornicate","wet dream","double penetration","missionary position","bugger","lovejuice","date rape","eatballs","handjob","nlgger","dixiedyke","junglebunny","sonofabitch","goddamned","deep throat","jism","assclown","shitforbrains","screwyou","ethiopian","nastyslut","gang bang","lubejob","tied up","make me come","rimjob","sexfarm","tight white","lezbe","lezbo","tribadism","butt-bang","asskiss","sadism","biteme","angie","abortion","murderer","motherfucker","sextoy","2g1c","doggy style","cunntt","cooly","ball sack","sodom","slideitin","fudge packer","fatfuck","god","gipp","communist","felatio ","libido","xtc","cuntfuck","niggardly","fuckface","faggot","protestant","trailertrash","headfuck","shav","dickweed","refugee","trannie","giant cock","sexhound","slut","dead","titlover","wank","moslem","krappy","black cock","idiot","tortur","erotic","donkey punch","dirty pillows","cockcowboy","sucker","cocktail","doom","hymen","vibr","terrorist","mufflikcer","phonesex","teste","pisshead","slime","brea5t","tea bagging","slutt","cumbubble","blackout","hijacking","premature","sextogo","arse","racist","jimfish","flydye","juggs","jade","wigger","niggard's","jigg","dumb","devilworshipper","firing","gatorbait","murder","chinese","fastfuck","spik","nuke","bastinado","kondum","pansy","destroy","ikey","women rapping","titfucker","crime","swinger","shitola","killer","fart","booby","pimpsimp","coon","strap on","zigabo","faith","bisexual","gangsta","teat","boobies","kafir","dp action","jugs","husky","homoerotic","twinkie","spooge","kink","sleezebag","gay","homo","slutwhore","dickless","cumfest","israeli","fuk","niggardliness","nigr","goddamit","sandnigger","dope","insest","foreskin","acrotomophilia","dumbbitch","fuckmonkey","pubiclice","cyberslimer","titfuck","cummer","kumquat","one guy one jar","fire","sexo","carruth","cocktease","trisexual","pric","rabbi","gypp","cunnilingus","dipshit","welfare","arabs","transvestite","tnt","penile","mothafuckings","peckerwood","enemy","negroid","genital","gangbanger","queef","strapon","thicklips","female squirting","flydie","crabs","christ","ejaculate","carpet muncher","lucifer","butchdyke","vatican","skumbag","horseshit","eunuch","dickforbrains","bondage","kumbullbe","crack","niggerhole","niggard","rosy palm","assranger","beat-off","bastard ","asspuppies","jiggerboo","cuntlick ","pommie","doggie style","lezz","jesuschrist","nazi","feltch","chode","pleasure chest","wetback","zipperhead","necro","goddamnmuthafucker","whiskeydick","slopy","executioner","colored","ethnic","turnon","hole","nofuckingway","mastrabator","jack off","orgies","pisses ","blow j","criminals","cockqueen","tosser","snownigger","holestuffer","dipstick","mofo","nipplering","minority","italiano","palesimian","poo","horn","rape","genitals","conservative","jebus","bullcrap","dick","cumqueen","spread legs","cancer","kaffir","mocky","suckmytit","vorarephilia","naked","shited","nigg","spermhearder","whore","african","disease","lovebone","spreadeagle","coprolagnia","humping","suicide girls","bong","pole smoker","shrimping","gin","purinapricness","sexslave","big knockers","iblowu","pissin ","skank","lotion","asshole","easyslut","mothafucker","whiz","lsd","cocksucked ","hosejob","wanker","cumjockey","eat my ass","lovegoo","whites","propaganda","sexwhore","cunt","welcher","how to murder","scum","phuked","suckoff","shithapens","drug","auto erotic","sultry women","barenaked","wetspot","sixtynine","wrapping men","buttplug","jiggy","alligatorbait","flange","shitfit","dirty","huge fat","bulldyke","orgasm","bumfuck","deposit","big breasts","sexual","japanese","suckmyass","church","goyim","bohunk","bigass","fannyfucker","gaymuthafuckinwhore","babies","girls","turd","fuck buttons","fagging","pisser","sandm","wog","escort","octopussy","tinkle","snigger","groe","vibrator","dix","swalow","chin","niggles","asslicker","molester","backseat","geez","seppo","sexually","boong","voyeur","butthole","hoser","fore","asswhore","cocaine","skanky","european","mothafuck","titlicker","buttstain","penises","spermacide","mexican","skankybitch","white power","puddboy","coondog","stripclub","mockie","american","jesus","tushy","kumbubble","milf","mormon","ontherag","henhouse","slutty","big black","dego","daterape","phukked","cuntlicker ","failed","lezbefriends","pissing","bitchy","pohm","kigger","nastywhore","bangbros","upthebutt","cohee","fistfuck","fuckingbitch","shibari","cigs","jiggaboo","japcrap","raper","jackass","orgasim ","sexed","jackoff","baby batter","toilet","tampon","uk","porn","snowballing","goldenshower","titties","towelhead","titjob","abo","molestation","fok","crapola","foursome","suicide","scrotum","cumming","niggerhead","pussie","abuse","analannie","cocksucking","breastjob","blonde on blonde action","paedophile","kumming","reestie","suckme","willie","shhit","titbitnipply","hot chick","skankwhore","fudgepacker","dragqueen","deapthroat","barelylegal","circlejerk","shinola","hookers","flatulence","scat","damn","mafia","anus","gokkun","argie","buttpirate","goregasm","fagot","fuks","redneck","jiga","cockhead","freakfuck","2 girls 1 cup","crotchjockey","dripdick","die","fuckina","orgy","phungky","beaver cleaver","sexy","darky","magicwand","screw","dominatrix","butt-fucker","neonazi","fuckpig","manpaste","molest","whiskydick","lez","darkie","rearend","niggardliness's","trojan","smack","lapdance","brunette action","hindoo","fourtwenty","deepthroat","moles","hebe","pommy","fuckher","stringer","one cup two girls","peck","backdoorman","male squirting","shiting","clamdiver","fairy","pussylicker","slav","nigre","robber","horny","penetration","phuking","cigarette","dyefly","playboy","golden shower","cumshot","chinamen","pickaninny","diddle","fatah","bombers","suckdick","bigbastard","pube","mosshead","pornking","terror","pimper","fuckbuddy","period","catholics","pistol","g-spot","doodoo","mockey","funeral","prickhead","whop","allah","pussyeater","cocksmith","executed","barely legal","niggarding","swastika","buried","pocho","nip","weewee","whiskey","beast","phone sex","muncher","fuckhead","smackthemonkey","badfuck","harem","nigerians","bastardo","shooting","pissoff ","fistfucked ","ginzo","mattressprincess","primetime","undressing","fuckable","puss","bbw","damnation","jeez","stroking","leather restraint","yankee","piky","beastality","cocksucer","goddamn","poopchute","shitfaced","dickhead","gangbanged ","masterbate","pikey","rosy palm and her 5 sisters","doggiestyle","bitches","desire","pansies","dickbrain","sissy","felch","penis","horney","buttmunch","baptist","assassin","fingering","cock","osama","mothafucking ","republican","wetb","freefuck","rere","goatse","transexual","bunghole","assholes","butt-fuck","nig nog","snowback","sniper","gangbang","cockfight","death","mggor","skankbitch","goy","twat","masturbate","usama","babeland","dickwad","cornhole","nigra","fuckinright","blue waffle","clit","niggle","timbernigger","picaninny","whorefucker","yellowman","ass","ero","dommes","nig","lolita","grostulation","dixiedike","shitfucker","hymie","sheeney","asswipe","crash","vomit","died","femdom","cameljockey","footfuck","sonofbitch","cleveland steamer","dahmer","feltcher","bitch","fingerfuckers","buttface","evl","dammit","lovepistol","twink","shitting","blind","reefer","beaver lips","motherlovebone","panties","fucka","fatass","lugan","devil","pornflick","russkie","fight","thirdleg","hore","jerk off","negroes","moron","shaved beaver","gonzagas","drunken","blackman","asskisser","crotchrot","motherfuckin","lezzo","fondle","slopey","clusterfuck","fister","skankfuck","condom","kill","taff","shithouse","cockblock","hoes","horniest","kunt","facefucker","assmuncher","bollock","smut","stupidfuck","assmunch","prostitute","payo","poorwhitetrash","honkey","farting ","getiton","bulldike","raping","arab","moky","futanari","nigger","illegal","hardcore","skinflute","throating","asspacker","leather straight jacket","raghead","crotch","goo girl","knobbing","buttman","glazeddonut","urethra play","africa","fairies","fuckmehard","shaved pussy","bitchin","fu","cocks","fucker","gyppie","kinkster","penthouse","biatch","wop","erect","fag","fuck","shitfull","vaginal","fraud","color","flasher","filipino","sexpot","sexymoma","boonie","puke","buttcheeks","cacker","bdsm","shemale","porchmonkey","violet blue","eatme","looser","virgin","assbagger","limy","negro's","lesbian","hustler","cunteyed","tarbaby","nipples","dumbfuck","backdoor","wuzzie","sadom","threeway","pimpjuic","chinaman","brown showers","pubes","masturbating","bollocks","bunga","sodomize","goddammit","footstar","goatcx","chink","butthead","liquor","spermbag","jailbait","beatoff","incest","vagina","urophilia","niggarded","kaffer","rearentry","motherfucking","spic","areola","harder","greaseball","loverocket","asshore","perv","fingerfood","muff","shaggin","commie","hitler","burn","honky","tongue","fubar","oral","dildo","abbo","sniggering","bomb","omorashi","pedophile","spig","freakyfucker","swallower","birdlock","bigbutt","nastyho","goddamnes","pooperscooper","bi","sucks","jizz","nambla","puntang","gay sex","bootycall","reject","enema","sob","spankthemonkey","buggered","jewish","wuss","asslick","bitching","strip club","gringo","pendy","tard","boody","chocolate rosebuds","buttfuck","domination","faeces","splittail","clamdigger","shitlist","double dong","niggor","motherfucked","slimeball","pusy","pedobear","excrement","goddamnit","stagg","hijack","sexkitten","hook","coolie","phuq","servant","gyppo","slopehead","pud","fingerfuck ","dumbass","williewanker","fisting","crapper","sixtyniner","fetish","two girls one cup","threesome","bitchez","manhater","pudd","nympho","mothafuckin","shitted","hitlerist","semen","pi55","yaoi","scissoring","sodomise","ky","big tits","muffdiver","farty ","nsfw images","ecchi","dirty sanchez","mooncricket","shite","boom","asshat","fat","intercourse","chav","intheass","jacktheripper","felcher","spaghettibender","angry","gaysex ","willy","addict","russki","slimebucket","bogan","goodpoop","fuckme ","shitcan","brothel","rentafuck","footjob","sick","shitoutofluck","paki","rump","licker","nigerian","pindick","cockrider","felching","geezer","balllicker","ponyplay","fuckoff","jizzum","sadis","hodgie","fatfucker","poop","tits","bicurious","bombs","hork","mr hands","bi curious","sooty","liberal","prick","clover clamps","spunky","nymphomania","playgirl","vietcong","yellow showers","xxx","pecker","bitchslap","demon","crap","jihad","assjockey","macaca","kums","kinky","pooper","homicide","fuuck","poon","fear","shitfuck","tittie","wanking","girl on top","fistfucker ","zoophilia","farted ","nigglings","hiscock","tang","erotism","floo","honger","meth","beaner","kummer","wn","geni","whash","fuckinnuts","fuckin","tainted love","dyke","kotex","suck","poverty","butchdike","datnigga","uterus","execution","trots","luckycammeltoe","roach","swallow","motherfuck","blow","ball gravy","slutwear","panti","kissass","shawtypimp","muffdive","mulatto","noonan","wab","banging","tunneloflove","doggystyle","fuckwhore","rapist","homobangers","porno","barfface","sex","syphilis","pearlnecklace","sleezeball","sextoys","assman","german","shagging","anilingus","stupidfucker","loadedgun","beastial","shithead","asses","pussylover","niggah","gotohell","jigga","remains","frotting","thirdeye","fuckknob","inthebuff","nawashi","roundeye","retarded","mastabate","disturbed","kunnilingus","bung hole","pee-pee","camwhore","satan","lowlife","tubgirl","fucks","diseases","blow your l","krap","addicts","snatchpatch","bra","poontang","snatch","pussypounder","shit","knife","pu55i","footaction","footlicker","bimbos","mothafuckaz","pussycat","fucking","funfuck","piece of shit","boang","nipple","fuckit","shoot","quim","booty call","slutting","coitus","tit","spermherder","raging boner","buttfucker","quickie","grope","skum","rectum","kanake","soviet","lies","honkers","chinky","dingleberry","shota","hillbillies","godammit","fugly","nasty","ejaculation","waysted","carpetmuncher","nastybitch","camel toe","strappado","jew","limpdick","heroin","panty","polack","pornprincess","gonorrehea","meatbeatter","crotchmonkey","topless","shithappens","foot fetish","canadian","amateur","uck","whitenigger","niger","bigger","squaw","hand job","buttbang","titty","gypo","defecate","kock","niggaracci","pussyfucker","corruption","girls gone wild","boobs","ejaculated","shitface","autoerotic","creamy","bible","fckcum","knockers","fucck","whorehouse","cocksmoker","queer","cocklover","assblaster","bombing","hooters","forni","kike","hapa","bazooms","vulva","failure","racial","fuckfreak","snot","cuntsucker","fingerfucked ","scallywag","pixy","kkk","mastabater","byatch","whigger","sos","pussy","group sex","attack","fucktard","nook","marijuana","filipina","asscowboy","fatso","spit","bazongas","chickslick","joint","niggards","cockblocker","gob","lingerie","anal","headlights","dike","pegging","kaffre","taste my","crack-whore","lynch","tub girl","bullshit","explosion","black","homosexual","fucked","showtime","lesbin","kid","fellatio","nudger","women's","boonga","choad","assault","cra5h","tuckahoe","fingerfucking ","hijacker","athletesfoot","pom","livesex","hostage","cocknob","nude","hard core","fuckbag","hobo","itch","gyp","kyke","pros","stupid","radicals","figging","fuckfest","hottotrot","kinbaku","sexhouse","violet wand","analsex","nigga","nittit","jiz ","suckmydick","pussies","hotdamn","assfucker","jizim","pixie","kum","cemetery","rigger","ethical slut","dolcett","ejaculating ","babe","cumquat","eatpussy","phuk","givehead","drunk","phukking","shiteater","catholic","hooker","cocksuck ","cocksucker","ball kicking","fuckyou","crappy","feltching","mideast","ecstacy","ribbed","dog style","interracial","tongue in a","pocha","skankywhore","pu55y","motherfuckings","piker","peepshow","jap","yiffy","tongethruster","nigger's","breastlover","stroke","twobitwhore","shits","israel's","jerkoff","bullet vibe","assassinate","killed","pocketpool","whacker","wtf","barf","juggalo","negro","spick","gyppy","nymph","snigger's","violence","lovemuscle","dago","feces","booty","niggers","shitter","sodomy","hussy","pisspig","coprophilia","christian","pimped","boob","breast","sperm","coloured","redlight","blacks","orga","bumblefuck","mams","slavedriver","killing","uptheass","bestial","sweetness","heeb","piccaninny","pot","honk","jizjuice","fuc","nignog","mgger","sexing","virginbreaker","samckdaddy","masterblaster","heterosexual","jigger ","blowjob","lovegun","shitstain","spank","hiv","lesbain","mad","sniggers","jizm ","testicle","ball sucking","dragqween","guro","pubic","titfuckin","moneyshot","camslut","bountybar","assklown","cocky","transsexual","unfuckable","bestiality","cocklicker", "nigger", "fucker", "cunt", "gay", "fag", "faggy", "die"];
        this.nlp = require('compromise');
    }

 preprocess(text) {
    return this.nlp(text).normalize({case:false, puctuation:false, plurals:true, parentheses:true, possessives:true, honorifics:true, verbs:true}).out('text');
 }

tokenize(text) {
    return text
      .replace(/'/g, '')
      .replace(/[^A-Za-zА-Яа-яçÇğĞıİöÖşŞüÜ0-9_]/g, ' ')
      .replace(/\s\s+/g, ' ')
      .split(' ').map(function (s) {
        return s.toLowerCase();
      });
 }

check_match(text) {
     var text = this.preprocess(text);
     var tokens = this.tokenize(text);

     for (var i = 0; i < tokens.length; i++){
         var token = tokens[i];
         if (this.exact_match_toxic_words.indexOf(token) >= 0) {
            return 1;
        }
     }
     return 0;
 }
}








},{"compromise":1}],4:[function(require,module,exports){

module.exports = class Vectorizer {  
 constructor() {
     var most_frequent_toxic_words = ["cocksucker","before","you","piss","around","on","my","work","hey","what","is","it","talk","an","exclusive","group","of","some","wp","talibanswho","are","good","at","destroying","self","appointed","purist","who","gang","up","any","asks","them","questions","abt","their","anti","social","and","destructive","ask","sityush","to","clean","his","behavior","than","issue","me","nonsensical","warning","bye","do","not","look","come","or","think","comming","back","tosser","gay","antisemmitian","archangel","white","tiger","meow","greetingshhh","uh","there","way","why","erased","comment","about","ww","that","holocaust","was","brutally","slaying","jew","gaysgypsysslavsanyone","if","semitian","shave","your","head","bald","go","the","skinhead","meeting","doubt","word","bible","homosexuality","a","deadly","sin","make","pentagram","tatoo","forehead","satanistic","mass","with","pal","first","last","fucking","i","will","appreciate","more","nazi","shwain","would","write","in","page","wish","anymore","beware","dark","side","fuck","filthy","mother","ass","dry","am","sorryi","sorry","screwed","someones","very","bad","know","how","having","template","helps","assert","dominance","over","should","bow","down","almighty","administrator","but","then","again","going","play","outsidewith","mom","get","fucked","fuckeeed","got","drink","can","put","upi","right","now","stupid","peace","shit","stop","deleting","stuff","asshole","die","fall","hole","hell","tony","sidaway","obviously","fistfuckee","he","loves","arm","band","deletion","thought","gone","posted","does","delete","feeling","for","hasty","decision","still","cock","sucking","douche","sit","nd","life","has","become","done","did","take","long","nope","because","as","most","certainly","aware","shitstorm","sitting","front","computer","masturbating","fictional","creature","attempt","rid","mediocre","best","constantly","dick","failure","want","personal","attack","huh","well","too","fuckcock","mcdickersonyou","have","from","ahead","profile","wikipediai","just","another","syrthiss","insult","off","could","shatter","dream","innocent","year","old","college","freshman","trying","name","happy","person","overweight","single","man","dead","end","job","spot","perhaps","someone","else","follow","were","hold","him","so","somebody","suffer","like","yes","empty","threat","be","saying","anything","along","line","hurt","eat","child","within","sister","womb","say","son","bitch","sucker","food","drown","sorrow","premature","ejaculating","headed","something","nice","yourself","maybe","grab","couple","horny","goat","weeds","local","convenience","store","jack","little","longer","minutes","tonight","sincerely","better","every","believe","fat","artie","see","recent","appearence","show","jay","leno","looks","absolutely","awful","had","money","lange","miss","candidate","pool","kindly","keep","malicious","finger","above","everytime","remove","repost","all","edit","cunt","revert","understand","other","decided","bear","playground","grudge","problem","one","day","realise","damage","noble","project","hi","undoing","both","shut","run","wikipedia","especially","kid","pair","hating","weiner","schmucks","puck","ever","said","number","clearly","listed","being","only","batman","master","detective","martial","artist","been","trained","mentioned","combat","discplines","no","need","mention","skills","ability","battle","lost","won","encylopia","supposed","also","by","low","showing","high","where","proven","match","meta","slade","pinned","shiva","earliest","unblock","lawyer","blocking","constitutional","free","speech","fired","moronic","wimp","lazy","research","makes","sick","people","exist","this","world","fagget","oife","burn","hate","m","we","sex","running","out","conndom","reply","loser","un","defines","vietnam","part","southeast","asia","far","asean","used","french","indochina","laos","those","countries","anyway","culture","always","influenced","sea","han","chinese","admit","vietnamese","bunch","wannabe","crap","east","asian","spoken","thinks","integral","backward","dirty","speak","horrible","swearing","languagedoes","matter","spout","change","real","stinks","blatant","pov","pushing","neither","guys","made","contribution","italian","history","article","shove","unhistorical","unconstructive","modern","face","heard","reason","many","pissed","pedantry","idiocy","triviality","jsus","fcking","give","permanat","block","raseac","remember","muslim","worry","these","image","they","us","fake","nothing","islam","our","prophet","even","lame","authentic","source","its","encyclopedia","which","authenticity","anyone","whatever","thinkjust","raeasc","knows","talks","forget","wiki","authenticityi","recommend","add","christ","jessus","articlethey","faggot","pussy","kill","nigger","hard","others","included","racists","sometimes","deck","guy","blrude","awakening","leviathan","motherfucker","u","r","tw","boyu","smellyfuck","ur","mum","poopie","atheism","full","bia","spreading","misconception","spread","false","information","peopleyou","lostyou","cheapest","earthbloody","ignorant","foolcheck","rumor","let","when","crawled","arse","laurent","user","such","worthless","goddamn","authority","tell","ridiculous","fact","suspect","calton","please","care","award","eye","cares","ok","here","god","freakin","omnigan","matt","hardy","fucky","italic","textmediaexampleoggmatt","mean","startle","everyone","goodbye","luck","newfound","crisis","faith","seen","reference","claim","moron","sourceit","once","time","reduce","pashtun","nationalist","povs","order","uncle","cousins","execution","entire","northern","afghanistan","gardez","jalalabad","lashkargah","logar","paghman","laghman","kunduz","herat","farah","whereever","immigrant","descandant","violent","kuchi","settled","took","non","land","away","traditional","tajik","country","thank","hei","william","hope","fan","guess","new","ip","ready","vandalize","everything","regarding","sh","t","delay","stopping","lets","salute","lunacy","shoving","p","nis","mouth","userthe","bohemian","shinobis","yeah","piece","dear","mokele","fire","address","vandilism","bigger","racist","experimenting","katherine","heigl","test","worked","reverted","removed","use","sandbox","may","welcome","learn","contributing","canuck","censor","truth","kkkkanuck","o","trash","dickhead","motherfuckerlol","canucks","retards","fuk","dickweed","eidt","expel","jimbo","sob","watch","mofo","garbage","tryinbg","compliment","yamla","careful","call","existence","cdvf","further","proof","sad","twat","ugly","willy","never","edited","ago","pissing","wrong","muchacho","july","hii","mobile","porn","additional","wpalso","link","fk","rides","fun","sh_tty","boring","ride","operator","wof","sued","hanged","coaster","arrest","park","assassinate","customer","boy","died","timberwolf","august","nown","built","sh_t","moar","customers","dangerouser","grround","zero","area","filth","impolite","jan","sentence","argument","newseventsguyit","retroactive","reversion","simple","include","secondary","independent","verification","sedimentary","nanodiamond","younger","dryas","sediments","bement","madden","et","al","without","discussion","notice","yet","list","after","peer","review","literature","controversy","edits","stomped","less","admittedly","biased","editor","honorable","thing","recuse","editing","happening","until","already","complete","fool","yourselves","hello","fix","dictionary","dare","spam","kurd","lsit","kurdish","bloody","turkish","atoricity","commiting","bone","breaking","folk","slimy","turk","internet","undemocratic","turkey","prison","cell","buggers","membership","eec","plane","crashed","jeezz","quit","busting","nut","alljimbo","instead","priestess","knowledge","indeed","motherfucking","fuckhead","imbecile","pervert","parrot","promotion","websites","capoeira","schools","myth","origin","persecution","late","became","street","brawling","thus","prohibit","sanction","practice","banning","outright","brawlit","mestre","bimba","presented","art","luta","regional","baiana","decent","carioca","eager","sympathise","malandrismo","alter","mess","sock","puppet","accountsuprise","track","fucker","university","computers","suck","disgrace","humanity","wasting","valuable","resources","throw","pc","ps","fark","kinda","lonely","lol","short","find","retarded","bot","entirely","automated","leave","unattented","script","through","site","idiotic","suppose","scripting","perfect","proper","help","dipshit","since","ips","dislike","racism","speaks","spanish","antisemite","wasnt","vandalism","undelete","barry","dejay","curse","respect","lies","dangerously","evil","half","religion","following","users","namely","redtigerxyz","priyanath","emperor","geniu","raj","wikida","wikiveer","dagizza","committed","blasphemy","sacrilage","upon","perish","beg","forgiveness","supreme","lord","vishnu","choosing","blasphemous","website","true","devote","goes","vain","read","forever","id","wikipedian","male","chauvinist","pig","misogynist","core","existance","woman","useless","burden","civilized","worth","hatred","must","ignored","hahaha","actually","bullshit","telling","talking","access","representative","government","kim","jong","himself","totally","different","troll","somewhere","mardyk","cockblocker","hahahaha","defending","murdering","psychopath","hebrew","lydia","appology","today","learned","eulenspiegel","idiot","indicates","struggling","against","genesis","tab","mizraim","begot","ludim","anamim","lehabim","naphtuhim","mitzraim","confused","lud","shem","wasted","own","advice","pull","spend","rest","few","straight","firstly","smug","prick","secondly","ethnicity","biti","explain","count","thirdly","dog","bit","bender","seriously","pokemon","intend","disruptive","genuineley","upset","tried","april","joke","explanation","uptight","weirdo","mattsanchezinfo","live","monday","among","invitation","interviewed","nowhere","hidelet","victim","coward","schnider","final","peddle","disputed","neutrality","due","really","rebel","rebelguy","oral","prostitute","course","dub","depaaarted","likely","fin","men","harassment","mm","amazing","jumped","added","things","cleaned","working","human","pakistan","under","skin","badly","wow","sweetie","busy","harassing","threatened","productive","hit","wall","spoiled","greek","children","purposely","vandalizing","albania","related","iritating","albanian","explode","banned","historian","blush","quoted","reliable","quality","editors","move","languages","till","next","timewikipedia","sucks","thinking","nobody","attacked","revealed","age","announced","subject","constant","storm","abuse","same","knew","told","hated","meit","amusing","soapboxer","teenager","responsible","decline","soapbox","funny","adult","dumbest","mauricio","chuppah","redneckgirl","pinky","scooby","gg","foreverlosttinkerbell","greenrabbit","starrocketsinflight","bree","robinson","enigma","cocainenightmare","tokyodome","chad_ochocinco","steve","lake","teenage","posters","typically","smartest","onelet","g","dawg","head_banging_brunette","classicage","metropolis","chrisscript","adults","posting","rate","poo","ballz","smell","whoz","hawter","rape","girl","guyz","attention","whore","immature","savage","bullies","mental","capacity","yearold","whereas","teenagers","thoughtful","intelligent","mature","often","profound","schoolyard","bullying","poster","somehow","superior","born","earlier","logic","fails","amuse","idea","cumshitter","safety","guaranteed","bringing","fuckin","weapon","pay","oh","jokea","family","walks","into","agents","office","tells","great","vaudeville","routinehe","says","hire","kiddy","acts","agent","fine","throwing","outso","gets","readythe","daughter","hits","cd","player","circus","music","begins","playing","father","jump","kicks","stom","ground","pulp","proceeds","jerk","cum","shattered","skull","meanwhile","violently","fucks","point","takes","leftover","brain","shoves","her","while","simultaneously","sticking","daughters","throat","she","vomits","bites","mothers","hand","leaving","blood","squirt","placethe","smears","chest","bends","shitting","open","wound","microwave","heating","explodes","remains","mix","fathers","rips","sons","locate","testicle","breaks","drinks","sperm","comes","lines","ta","da","theres","silence","finally","love","itthe","aristocrat","smith","notified","dance","grave","groin","fucki","restore","wil","knee","video","game","pete","sake","cat","window","whoever","clever","making","bet","changed","card","date","likes","itin","muhamad","ali","kelly","giant","penis","columbus","stay","btard","ohhh","feelinglet","shed","tears","together","feel","pretty","important","pathetic","volunteer","living","basement","drawing","comic","book","lowlife","scum","offense","pompous","sanctimonious","twit","allowed","express","appreciation","gibson","featured","achingly","beautiful","kind","totalitarian","feminazi","dystopian","agenda","foist","based","exchange","bogus","political","correctness","schoolmarmish","policing","anyday","livei","sand","offthen","beat","pulpyou","chicken","shagger","dennis","brown","thanks","taking","serious","ill","might","ban","foolwhat","place","cult","changing","somali","clan","diverse","representation","criminal","transistor","principle","operation","section","athe","physicist","share","bthey","works","came","fairly","concept","jealous","discussing","much","language","naughty","boyill","studid","callin","frank","garrett","eatin","worms","crawl","outa","retardo","fisherqueen","havent","jim","burton","molesting","total","buffoon","usual","sadder","extreme","hypocritical","arrogance","lecturing","ethical","claimed","save","exactly","roman","poet","harlot","doth","rebuke","chaste","drop","breathe","easier","kids","truly","disgust","millino","hunjan","looking","fight","bull","tharkarn","waste","fu","ck","ing","trollreason","srcl","bud","bin","mind","gooood","mo","latah","dat","soon","az","ah","gitz","heah","sum","de","brotherz","n","sistahs","sez","hance","alive","send","zion","ranger","check","condition","whoa","led","gib","holler","dis","hollerin","bro","rangerz","dem","walkin","tru","wallz","dude","ain","harm","jes","checkin","ee","ben","gentle","remindah","kum","fuhst","readin","leedle","postin","doan","fohget","cut","zzzz","aftah","tad","sleep","fergit","sumptin","bdh","wrapt","roun","wid","delta","wave","kupla","otha","carrierz","diz","cuss","chow","alone","alonewhy","hounding","mothafuckin","cause","blemish","wikidon","stalking","sodomize","wife","house","queer","vagina","photo","picture","indonesian","jzg","standup","boyfriend","blueboy","notices","horse","blocked","dumb","cavorting","heretics","ha","blp","violation","oversited","admin","tools","cowardly","fascist","controlling","gamergate","completely","proved","death","brianna","wu","peddling","media","fictionthat","exposed","freaking","hermaphrodite","unprotect","suitable","title","dad","sami","worried","fit","omfk","lolz","haha","peeenis","gorf","threatening","try","suggest","account","deleted","paragraph","ignoring","policy","regards","tagging","suddenly","nonsense","resorting","bully","answered","question","neutral","despite","statement","tag","placed","occasionally","mistake","putting","subjective","noticed","admitted","writing","marking","historical","concerning","current","armenia","pertaining","wikiproject","winking","mark","antiturkish","joker","european","parliament","power","binding","silly","report","meant","ruled","ancestor","century","negative","images","turks","revenge","golden","dawn","userxeno","bite","blehi","server","damn","either","helvetica_font_newsvg","common","puppeti","lot","eb","foul","mouthed","basic","cest","moi","fourthave","homosexual","marriage","found","ghe","fag","jeremy","wash","insist","letting","musty","pile","tuna","tired","smelling","babe","doggy","style","pierces","nostril","turn","wipe","betteri","getting","tht","gross","heck","means","personel","attacks","idiots","screw","blaming","interested","arab","bomb","towelhead","poop","kick","vandals","encyclopediadramaticacom","redirecting","teddygodzilla","code","lyoko","episodes","middle","patience","enough","evacuate","hurricane","ike","laptop","charger","fried","small","amount","major","towards","mentally","defective","thi","effort","collaborative","community","school","essays","needs","professional","adopt","besides","accomplish","goal","solving","problemthat","whenever","perturb","meyou","criticise","garden","blend","neighbours","yard","tacky","passing","road","feb","kiss","difference","episode","articleyou","acting","geek","collapse","itself","sensible","rules","terrible","moderator","redirectingit","nerve","individual","camille","paglia","positive","feminist","supporting","links","asked","httpwwwlotlcomcontentpagliahtm","httpwwwreferencecombrowsewikisexpositive_feminism","entirety","post","relevant","sections","public","years","endorsed","stripper","whole","experience","concerned","effect","young","growing","climate","opposite","directioni","outraged","stereotyped","career","teacher","situation","commercialised","pushed","eroticismive","meaningless","exhibitionism","eroticism","american","criticpaglium","academic","focuses","role","vibrant","dangerous","sexuality","key","importance","feminism","advocacy","value","canon","text","somewhat","intellectual","conservative","revels","alike","celebrates","disapproved","mainstream","western","respectable","pro","large","listen","narrow","eyed","minimum","wage","doing","buck","consider","moving","lemuria","roams","thinki","big","antisemitei","myself","wheeler","grill","covered","razor","wire","tape","lone","tripod","lulzy","youtube","posterity","blanchardb","sue","hist","dishonest","disgusting","poor","wtf","polar","demonte","morton","bastard","deletin","cracker","muthafucker","bla","blasuck","irishguy","official","sound","resemplence","between","holocoust","armeian","deportation","press","agency","crowd","chanting","tory","daily","mail","paper","reported","croud","chanted","dispicable","scab","politics","liniage","unblocki","sorryhow","expect","accounts","meif","meill","acountssimpleur","worsestop","dealim","violating","nowso","itwhy","blockedjust","alreadyi","wellim","violate","anythingim","helpand","alexandria","unblockme","alreadythis","overratedcant","forgive","forgetmove","peoplethere","blockso","onagaini","peaceand","contribute","wikipediawhat","happend","past","happendthe","pastnow","presentlet","start","chapterstar","freshokdeal","promise","anythingall","asking","chanceone","chance","went","incident","board","warring","polouse","crime","basically","stole","wallet","punched","arresting","assault","hungry","ego","booster","taken","seems","lmao","wahhh","called","gunna","re","dragon","slayer","series","top","eh","cough","excuse","accusing","wrote","bulk","rajbeer","singh","gave","simply","permission","spent","carry","yourswith","pleasure","darkness","yourselfs","minds","drunk","musikanimal","insulting","funeral","friend","hint","st","rejected","dozen","similarly","ditched","produce","fukkin","pure","pos","paid","scumbag","offend","correct","angry","semitic","conspiracy","theory","cherished","aryan","supremacist","rightist","closedmouth","jackass","sux","y","tran","cuz","creditable","citation","load","isnt","quite","lovely","kiddding","eithercause","black","heart","evidence","tone","reject","england","easternsoutheast","ct","shocked","ourselves","ne","town","boston","nyc","metro","ly","propaganda","dismiss","actual","excus","water","sign","york","state","city","mine","niggers","spick","yourselfthe","preceding","unsigned","assume","least","capital","whos","deleated","info","drmy","frankie","stein","monster","f","dispeared","wax","harping","messages","peopel","nil","checks","phnom","nam","lyr","wildlife","sanctuary","turd","bag","yo","arguement","abo","wanker","noun","usuage","unique","though","commonwealth","similar","fashion","australian","seem","however","irrelevent","mate","bloke","etc","extensively","nz","uk","rm","gwh","worst","mercy","soul","unblockwhat","anne","kilkenny","poorly","written","rewrote","didnt","dumbass","idioti","verifying","ringtone","maker","online","brinked","assholes","removing","unambiguous","copyright","infringement","promotional","explained","system","requirmenti","starting","punk","snitch","abusive","hypocrite","jimbothe","crybaby","sits","everyday","arbiter","grand","knowing","expert","savior","questioned","cry","main","treatmentby","waya","lousy","uses","assdo","entry","obvious","criminial","loose","pimping","la","downtown","night","normally","bryanfrompalatine","resolves","cologne","germany","happen","reside","sockpuppet","per","active","username","signature","meagre","ressource","hot","girlfriend","hour","calm","hindu","cow","laugh","harming","picking","soooo","okay","im","wanted","buzz","probably","none","beez","nas","glad","filled","sources","cheating","bondscheater","cbs","yea","bonds","cheater","usa","sort","lyingit","clear","liar","news","lamar","baseball","digest","bond","whiner","influence","america","youth","barnes","wad","wait","hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha","lolololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololololol","cuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcunti","cuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcuntcu","aaron","swartz","reverting","killed","pages","restate","thread","inviting","realize","characterizing","ih","apologize","story","douchebag","douchetee","labled","terrorist","vast","knowlege","wide","range","topics","scjessey","example","ammend","alllallalalalalalalalalaalalaalalalalalal","minute","allalalalalalalalalalalalalalallalalalalalllalalala","allah","moral","defense","toad","signed","shurly","horsei","continue","bashing","complaint","b","log","forum","chat","room","redfarmer","untrustworthy","allow","whim","warned","able","giving","instruction","diaper","leonhart","across","congratulation","congratulatory","sense","sarcastic","thoughyou","pollutant","perversion","perception","reread","painfully","comprehend","explaining","multiple","fartsalot","motherclucker","lowest","iq","converse","kitten","becuz","lying","cousin","bathroom","awhile","zod","break","homo","choke","sending","bleck","jizz","deceptive","assuming","deliberately","scrubbed","sheds","light","race","hygiene","originated","create","reader","crank","theorist","wikipedium","henry","ford","includes","protocol","fy","vidgmr","homieit","named","klptyzm","sqgibbon","moother","sounds","slimmy","donute","coming","igho","otegheri","decide","herpes","trolling","zapatanca","calling","merely","demonstartes","arer","choose","chase","legitimate","ignore","record","therefore","consensus","overwhelmingly","trollin","lover","knock","spinningspark","sinkhole","deeper","advantage","priviledge","wikimedia","projects","demonstrate","week","appeal","beneficial","selective","eligible","adminship","ylgcdsynvm","persistant","fourm","syria","closeness","names","asad","assad","form","crazy","confirmed","eastern","muthafucka","hehe","hahah","swallow","pride","blackeyedfool","agree","apparently","bs","downfall","molay","planned","corrupting","catherine","valois","tending","engaging","anal","philip","danger","represented","nearly","sexually","molested","escaping","vile","confessed","jacques","cursed","philippe","le","bel","descent","pyre","responded","shouting","defiance","speculated","several","whom","corrupted","grown","enjoy","lifestyle","introduced","legacy","member","encouraged","model","conduct","loyalty","fidelity","guilty","sheesh","sane","neo","grief","examining","substance","ranting","reading","gose","youyou","handle","crying","respected","entitity","mostly","burtalbert","baklava","spree","pitiful","supported","motion","drini","naconkantari","scheduled","raping","lately","scope","sure","spastic","nerd","nasty","coments","gut","butt","bring","ky","gelly","mothjer","gta","timeline","paranoid","unwanted","bucket","sludge","obsessed","festering","sputum","teletubbie","rubbing","pantaloon","mailman","guzzling","minded","cooks","freak","decomposing","penguin","groper","thy","fawning","nurtured","lout","hath","idle","maggot","pie","daddy","eats","earwax","snotbox","eating","lift","leg","tree","naked","weasel","slobbers","wrinkly","snob","anatomically","incorrect","disfunctional","litter","munching","abysmal","lunatic","rectum","smelly","crack","tastes","mince","walk","backwards","swallowed","fence","ran","cage","parents","sibling","appetite","knowit","secondi","favorite","commercial","tv","fail","reset","button","expression","priceless","__________________","nor","foundation","dime","favor","vandalising","message","enjoyed","mfnickster","exposure","argumentative","fallacy","exterminating","negro","population","biographical","wholly","warrant","topic","grandmother","logs","teh","sam","couep","likn","complex","impossible","simplify","communicate","advertised","connection","speed","ahve","shares","telecommunications","company","jewish","gods","seewhich","respectively","hobby","nate","cite","fraken","gatekeeper","fascit","socialist","hippy","touch","communes","worse","slaughter","hous","vandilaze","usernhrhs","mitt","romney","userenigmaman","newl","googie","uplet","spends","rogue","editer","corniest","mad","replaced","donnie","biggest","outrage","blind","rather","pagedo","opinion","villian","hostage","reign","outta","wayi","goddamned","whiny","pipsquak","ashamed","twoofer","deserve","scientific","odpierdalcie","sie","jebani","faszysci","od","polski","rose","library","librarian","adding","category","difficult","eater","rot","awesome","dropping","muck","bother","summon","ibaranoff","cocksucking","ya","except","sniff","leaky","box","weed","irrelevant","arbitrarily","abused","privilege","daniel","finished","stroking","each","fully","arabic","islamic","spelling","unlike","christian","mouammar","qadhdhaffy","accept","shall","muzemike","kansas","critizing","maddox","response","contract","cancer","momma","speaking","times","israel","actualy","nation","including","ally","forged","passport","commit","murder","causing","framed","uss","liberty","iran","morons","lecture","sarah","downyou","disobedient","pedestal","bizarre","incapable","decency","licence","contemptit","insultingi","deal","honest","kissing","arrogant","snake","wonder","bastardised","dripping","chute","cheer","providing","ganga","lal","gupta","kushwaha","kshatriya","varna","valid","k","drastic","measure","step","kingdom","iii","playstation","xbox","pedophile","imperial","japan","degenerate","ilk","minority","views","showcasing","stalker","skill","googling","seek","therapy","gwernol","protect","doesnt","rule","surprise","apology","angered","determined","discovered","african","aids","realized","married","virgin","virginyou","unicorn","gold","honestly","jd","fiend","hes","ani","mrth","masturbate","smallthingy","frequent","hellfire","club","shake","tusch","catwalk","subscribe","spamming","unless","contrary","lackies","s","saturn","tube","steak","ooh","sore","narcissism","referring","rd","exposing","insecurity","jesus","handing","blocks","using","twinkle","lfdder","youve","merge","youd","stff","tryna","greater","san","francisco","bay","typical","definition","region","awards","type","issues","knox","gala","festivals","redleaf","ave","pacific","hwy","illegally","lives","pcfc","wahroonga","snobby","driveway","illegal","complain","ku","ring","gai","council","bastards","attend","jerky","reasoning","deals","harrass","shape","context","repeat","bits","andpiece","disrupting","lengthened","reasonable","cup","ark","buy","webkinz","involve","act","tough","parent","increase","th","eknwoledge","base","upsets","preciousness","otherwise","hitlerism","manifest","determination","clique","camh","acceptable","previous","liquorice","poisoning","prissy","original","incorporated","deeitful","essence","wikiism","licking","fagot","shapiros","lick","atreu","huhfunny","stumbled","thousands","outed","gladly","numb","asshat","clownshoes","mcneight","talkrequest","provide","httpenwikipediaorgwikiwikipedia_talkrequests_for_commentbraaad","quote","focu","eventually","personality","interact","normal","manner","bitter","petty","fudge","packer","gwernolmore","queerhole","kww","fcker","hahap","month","hellhole","fricken","excrement","fast","purpose","disturber","pss","nazis","ow","yourcousin","bich","personyou","grammer","typos","pick","fing","rat","ratted","trapped","cranky","patron","assorted","hobos","generally","unemployed","perpetually","starving","hollywood","star","wannabees","niggaz","yall","nigga","dumbsean","kingston","played","biggiei","joking","dumbfuck","riiiiightbecause","definately","opposed","indignation","endless","piles","israeli","convoy","activity","limited","insert","temple","buddy","rub","nose","triangulate","forgotten","semetic","d","tellin","fugly","earth","beloved","protected","raging","figuring","cockthat","wikipiedia","katie","roy","fukk","potentially","saving","citing","remind","steer","lulu","screed","latestdaily","slander","partisan","pusher","npov","salacious","shows","lack","temperament","politically","charged","note","anon","gamaliel","willing","considering","understanding","words","lulus","wikipeida","admins","behave","viking","creative","lose","center","ball","winning","fg","expiring","ol","body","picked","force","ot","aint","maintain","mothafucka","shup","squeakbox","agreeing","lease","removal","solely","unfair","irrational","ram","eyes","typed","stated","nonetheless","hall","monitor","noser","fox","precious","shiit","pissant","creatin","graduated","thirdclass","prosti","uneducated","earn","thousandth","sweet","briar","alum","saw","sooo","pass","monkey","ihad","katy","perry","nught","mommy","caught","oooh","certain","inside","ignoramus","hitler","swastika","noti","russian","roulette","aip","thefortyfive","lalalalalalalalala","fallen","jingiby","vandal","repeated","pathetically","insecure","sweden","hub","ages","porno","inappropriate","material","encyclopedic","general","restricting","audience","surely","accessible","ostensibly","linked","explicit","censorship","vandalized","yourselfdo","e","crackhead","litany","karlxii","shame","bright","intellect","genocide","denial","fashism","support","becuse","agression","serbia","dotter","bosnia","shour","inshalla","islamophobic","alredy","war","nerdy","creati","accounst","christmas","chetnik","wel","covjek","zaboravi","pas","ti","uvijek","vrati","stfu","changes","stf","themuserpic","business","twats","thomas","malinas","tiny","coren","lulz","ondo","police","case","figured","farm","animal","donkey","kool","lozer","reposting","tbhotch","jobless","highly","themself","tossing","reality","flame","demographics","trouble","threats","pieces","vpn","spoof","andit","google","linking","roughly","aka","retard","uninformed","changesit","impact","thistypical","wikinonsense","seman","viable","procreate","telegram","mailit","saysgwernol","swear","left","luke","orlando","jordan","properly","sourced","kanyon","dealit","disrespectful","spell","argue","pipe","smoke","freeland","pa","liberal","tilde","afrojack","afro","jacko","defeat","roydosan","fellow","defeated","runs","cattle","heil","reversions","spiritual","mentor","fauxchristian","justin","behind","wikinazis","snarky","comments","lock","talkpage","userpage","concern","toughhead","ducky","replacement","ferrara","crook","appeared","german","sausage","foolyou","map","krasnoi","lead","leading","west","russiansit","tormasov","enveloping","movement","ignorance","disgustingabsolutely","sickening","satsthat","kenmore","goaste","unbelievable","unilaterally","waiting","editori","wee","abstain","borderline","capitalize","lesson","stiker","jk","offends","action","creeper","visit","geez","flying","nearby","snowing","fraggle","proxy","itst","godforsaken","regime","supporter","blatantly","singled","tribe","conquest","forced","moved","royal","colombo","alumnus","lalith","kothalawala","cossde","avoid","shy","royalist","sri","lank","puppy","wants","survived","absolute","utterly","suggestion","created","league","footballer","finish","football","stack","shelf","asda","kva","solution","unblockdisclaimer","identify","facist","dictator","although","technically","mood","talkingst","apologise","set","closest","claims","gotreally","frustrated","annoyed","home","started","messing","second","permissable","userboxes","dealing","userbox","states","identifies","hitlerist","condone","nazism","eugenics","offensive","communist","extremely","russia","shackle","ankle","wrist","christians","spike","starved","killing","tied","cross","hung","upside","huge","prisoners","crammed","excrete","stood","upright","drove","nail","alright","perfectly","stand","sway","poke","freezer","signalled","freezing","warm","renounce","gassed","endure","torture","chzz","nowadays","meaning","wierd","connotation","wikibreak","addicted","ruining","recieved","punishment","becoming","enventually","cooled","forgot","arbour","fucktard","friday","obituary","useriamzodyourzodeveryzod","boo","yah","fears","uu","international","rights","org","jkpunjabnorth","eastetcbanning","expertise","stooge","rssshiv","senabajrang","dal","yuck","percent","sureu","killer","chittisinghpurau","hexachord","affect","slightest","encouraging","sp","backfire","various","tpo","trick","misguided","acknowledge","concerns","incompetent","evidently","content","dispute","sight","behold","baboon","flinging","visiting","museum","reporting","barek","douchenozzle","blow","mikeycm","carre","appear","seeking","remark","argumentum","ad","hominem","motive","attacking","disagree","wpagf","particular","improve","figure","basis","accusation","checked","articles","fly","yours","handedly","brought","ga","status","arthur","adams","expanded","improved","ongoing","currently","undergoing","examination","process","inane","reveal","abject","pathological","brazenly","dares","areaseven","thnk","momk","fuckinmg","fags","outside","passes","ensure","mouse","keyboard","cheeto","encrusted","pale","traffic","todd","quick","q","grow","qed","devoted","surname","mckay","suggests","uppercase","letter","specialist","field","surnames","specifically","irish","scottish","answer","persistent","refuse","barbarian","shits","conquering","ultra","armenian","turkcontributions","citizen","articlei","duty","hamper","jerked","anybody","whether","boot","complaining","deflate","blanket","generalization","plenty","logged","satisfy","sensibility","peasant","overactive","imagination","tricks","presenting","informative","macedonian","national","liberation","army","liberated","operating","macedonia","mnla","gayness","air","sunnis","directly","senior","greatly","disobeying","effectivly","slamming","banhammer","baseballs","bug","pancake","lady","stopppp","ew","nature","youre","sexism","introducing","dummy","bakutrix","retired","footing","program","blackout","ripper","serial","catched","party","france","during","revolution","abstract","nationalism","babeyou","embarrassingly","baby","blanche","barrow","glass","dexfield","shot","registered","defiant","subduing","merciless","wrath","wellyou","enemy","proves","reasonit","masterwe","netaji","india","regularly","homesick","mindless","offended","senses","pest","hates","yawn","insiste","preceeding","unsignedyadayada","rude","obnoxious","mkil","ht","future","illiterate","postyou","harrassing","failed","signing","righti","dropped","gives","transitional","period","path","righteous","beset","allside","inequalities","selfish","tyranny","creating","maintaining","invetnion","renegade","straighti","bendy","fervor","vapor","brother","inbetween","neigborhood","smart","build","imagine","treated","hapfsjen","english","comprehension","messy","conflict","treat","survivor","semite","impost","contentious","lie","participated","socking","indefinitely","bigotry","prejudice","discrimination","abus","wrongi","perversely","punishable","porky","infact","socks","wing","supports","hook","slurp","emc","vandalizei","bugman","chesdovi","dos","bruv","bought","flat","january","carat","originally","rbpop","em","steal","presidency","acorn","defender","oboama","zionist","stoppin","aswell","briliant","propagnadist","flee","horror","ccp","falun","gong","murdered","iron","curtain","china","destruction","soviet","union","dies","disease","samuel","chump","lower","cubans","flag","puertorrican","breasts","verga","venezuelans","peruvian","cuban","abnormal","mongoloid","educated","tito","puente","bobby","sanabria","believes","shithead","trashy","mikkalai","racial","space","oblivious","cowboy","testis","ahem","sire","penises","corroborated","bothered","drones","sectarian","ruin","akbar","sully","charles","siding","chink","asswipe","ii","computeri","mesan","diego","california","chula","vista","ar","conversation","wanting","reingnite","resolved","fresh","scientist","workshy","yorkshireman","interacts","trivial","beatles","matters","increasingly","confusing","pseudonym","archivethey","hilarious","altercation","critics","entertained","random","generator","entering","archive","heading","pot","madness","publisher","coffee","table","view","lucky","stubborn","contributer","household","smiled","becuase","ought","request","june","mauler","seriousy","happens","religious","belief","tomorrow","specific","accurately","emotion","required","pray","insensitive","granted","pisses","w","automatically","cyrillic","alphabet","slavic","central","former","republics","mongolia","hoo","insulted","guarantee","proud","native","besmirched","allegation","contributor","correction","summary","felt","raising","harlem","comma","noneit","dialect","purpos","phonetically","pronounced","usually","clearer","draw","distinction","holy","marginalized","society","tarred","feathered","strung","dragged","enormous","wang","personally","harmful","particularly","unspeakably","priest","responsibility","itthat","uncivil","wikipedo","unbearable","adjusted","exception","caption","fold","winston","churchill","appropriate","improving","butthurt","exact","blame","warn","humorless","oversensitive","unwarranted","administrative","succeed","joined","cunts","bathing","aro","pronouced","rink","rincon","wtoc","gd","mf","bureaucratic","slime","withered","ballsack","rusty","shear","syph","revertin","urself","licker","requested","wolfpuss","thinker","submit","naughtiness","improperly","refused","understood","suggesting","viridita","agreed","jayjg","continued","guard","hatchet","yasser","arafat","preventing","altering","dutifully","version","dec","unsecured","wi","fi","looked","striver","islamist","bothering","popping","rediculous","color","represent","ideal","yellow","neglecting","choice","convey","eternal","wealth","prosperity","mighty","naming","reactionary","frankly","position","symbol","illustrate","symbolism","dolt","team","stadium","programing","weeks","netowrk","showed","blaxplotation","double","header","consisting","superfly","shaft","broadcast","freindly","mytv","violence","fate","callednetwork","paxton","kunstler","jkg","hahahihihoho","bishone","mentaly","insane","ante","busts","bridge","burns","sysop","wannabee","moeron","junk","compared","sat","undone","awb","karl","swithwnbank","wrothe","littledan","administator","bed","anonymous","given","rise","manifesto","wikian","sheer","desire","frustration","degree","natural","lifers","cop","bureaucrat","stewards","drive","nutcas","nervous","breakdown","veryvery","needed","cull","herd","stick","dissident","aggressor","declined","barrymcpeedmipant","wev","student","smarter","insistence","richard","james","continually","refusing","identifying","slanderous","libelous","defaming","posts","interesting","bigfoot","compromise","decides","fist","campaigned","votes","fuckbefore","vote","consent","rage","jokingly","dayhe","insidious","accusational","weird","strange","attempting","expunge","offence","embarrassment","criticism","web","searches","immediately","inform","developer","operates","remain","strictly","enforced","private","detail","prohibited","separate","reputation","november","baseless","atrocious","prose","fluff","escape","userarilang","pretending","manchus","ethnically","undeniable","surprised","manchu","barnstar","forward","fringe","barbaric","monkeyhere","banana","managed","h","meatpuppet","yankees","hero","inuk","nhl","disgraceful","goon","caucasian","blows","wikzilla","trollish","boob","sockpuppetry","arent","hen","yep","suberbia","ooooh","plus","demiurge","spouting","foolish","marwenmedia","useful","pelycosaur","gluzing","cheese","pertinent","obligated","offer","labeling","appareny","discuss","demand","prove","fecking","hide","spineless","lefty","aaa","bullshitting","farta","rubbish","schtippdick","youuuuuu","terisoaio","refer","viewthat","skipped","tfd","speedied","explicitly","owner","perceive","intricacy","avail","oneself","modify","overstep","bound","encountered","probbly","bcuz","bidding","troublemaking","vindictive","vandalit","respond","smarojit","chakravarty","facebook","smalljim","mridul","sharma","wear","vidya","balans","clothes","ola","donate","buffoons","niggah","whyd","wpani","defend","fremantle","premiership","grawp","frnziim","evn","debatingur","adultnobody","youanywayeverybody","ugrownup","mani","swearin","eminem","songsu","brainshit","wat","userdarkhooded","smoker","asss","utter","controversial","remarks","alleged","toward","represents","refrain","tip","improvement","below","httpwwwforbescomsitesandygreenbergiszuckerbergsthehackerwayletterfacebooksdontbeevilandwillitliveuptoit","httpgawkercomfacebookceoadmitstocallingusersdumbfucks","httpaubusinessinsidercomwellthesenewzuckerbergimswonthelpfacebooksprivacyproblems","httpwwwtheregistercoukfacebook_trust_dumb","httpwwwtheweekcouktechnologyareusersedumbfucksetrustingdatafacebook","httptdhmezuckerbergcalledearlyfacebookusersdumbfuckssowhat","httpanphiclecomentheytrustmedumbfucksfacebookceomarkzuckerberg","httpwwwtomsguidecomusfacebookmarkzuckerbergsocialnetworkingprivacysecuritynewshtml","httpaubusinessinsidercomembarrassinganddamagingzuckerbergimsconfirmedbyzuckerbergthenewyorker","bryant","gumbel","mel","sherrod","kent","hovind","venkaiah","naidu","greg","gutfeld","lawrence","cannon","bernard","flynn","harvard","ceo","zuckerberg","allegedly","login","data","network","hack","students","email","instant","transcript","calls","shortly","launched","dorm","zuck","addresses","sns","redacted","manage","submitted","trust","ear","filipino","hispanic","pacificwarrior","twatus","majorus","verify","jane","mutilated","yyou","yank","mahy","mahonerz","ekgograf","nzi","greatest","batard","thief","quartered","satisfaction","slut","unsatisfied","fault","sista","jackoff","ruined","lance","cade","republican","shitbag","tko","swinging","neckbreaker","unsmart","unclever","faggotgot","hooded","snail","bale","turned","welsh","classified","stance","numbnuts","hunted","mob","castrated","btch","fukng","toe","hopeless","planet","sephiroth","ticks","threaten","blowing","control","snide","church","sarchastic","pity","bump","balls","theyve","weve","david","modem","sexless","desperate","retentive","pizza","ho","httpprofilemyspacecomindexcfm","fuseactionuserviewprofilefriendidit","fock","barack","obama","sine","diety","standard","otherword","paterson","jersey","verizon","services","inc","legion","contain","wherein","boobs","dorothy","lookd","extern","gc","userjeppiz","worships","userdecausa","ss","bimbo","delayed","reaction","happened","wonderful","yesterday","dense","xd","hay","abouth","berty","costs","inserted","confirmation","fc","internazionale","milano","webpage","daft","issued","inter","train","l","identical","vochen","avenue","condescending","gotta","consistent","stalk","format","cus","direct","dysphemistic","sexual","connected","masturbation","invoked","incite","anger","dump","beer","tops","provided","utc","threw","flair","sternness","questionable","interpretation","sonnet","references","beauteous","niggard","dost","thou","procreation","preserve","beauty","pleasuredo","disgustingit","jeraphine","gryphon","win","john","delaney","fanatic","catholic","associated","expressing","vatican","churches","xenophobic","manipulation","sorrybut","pratt","practise","preaches","hear","terrorizing","mexican","hathate","olyeller","lyingi","justifiably","dicki","pointed","falsehoodi","annual","event","simona","halep","pointy","revertss","owing","thorough","governing","uou","gargle","wank","saddo","diiiiiiieeeeeeeee","implying","mac","faggots","housewife","heardlet","pagewould","weirdannoyinguncalled","item","kansai","goma","dickheads","dumass","released","sould","availableit","available","aaaannnnyyyywwwwhhhheeeerrrreeee","europe","cdwow","amazon","woolworth","hmv","nb","fixing","wallpaper","waitwhatd","reads","youumi","minaqrky","cloud","falls","yeahp","thats","aned","maashel","kungfu","adam","pretends","cussed","tweedle","cussing","dee","tweele","dum","disney","character","jason","sunrise","wiener","catch","blowfish","fck","curry","fckand","jimmy","wales","calledhe","flush","nutcase","absurd","frozen","lion","bestfrozen","nirmal","chill","dont","protector","somethingand","thatbe","polite","known","tax","fraud","enforcement","capabilities","income","dept","indian","revenue","service","pageit","defamatory","directorate","investigation","commentaryit","irs","employee","organisation","pageinstead","helping","guiding","grieve","deadass","classic","wooooooooooooooooooooooooooow","morale","beforehand","morales","barricaded","elsewhere","gj","ian","thomson","httpwwwredditcomrconspiracycommentsnsll_conspiracy_extending_to_wikipedia","cencorship","expected","sheep","recently","realizing","serve","fanatically","overwhelming","experts","objective","lexcon","ment","nothingd","cencor","maen","informed","ppl","haed","jocking","culd","diid","heads","began","auburnpilot","prevent","misconduct","directed","physicq","requesting","latter","require","acted","surreal","legitimacy","belied","unblocking","devious","standing","vastly","preferable","fighting","abnegation","lackey","graduate","administrators","httpenwikipediaorgwikiwikipediaadministrators_noticeboardincidents","days","checking","wherever","manipulating","cover","factual","applecart","footnote","tolerance","dislikes","blog","previously","published","magazine","unavailable","author","publish","longest","expose","duke","hoax","censoring","crystal","gail","mangum","michael","nifong","lacrosse","scandal","profilingi","involved","initiated","elective","assurance","aggressors","exude","reconsider","formal","upped","surrender","wikiquivalent","cease","desist","index","publications","wikicensor","est","beginning","succeeded","crony","responding","thuggery","cutesy","euphemistic","deception","er","unable","authenticated","preference","cyber","stalinism","equivalent","smiley","civil","counts","disruption","incivility","verily","pps","temporarily","result","restoring","constitutes","sympathy","devil","blah","utd","arsenal","victory","fa","september","hunkyou","truck","brake","chain","uglyness","ufc","sexy","squishy","cockmaster","mr","jeff","savagely","describe","bnp","arbitration","stupidity","mexico","terrirory","confederate","arizona","goodyou","clue","awesomejpg","curious","transgender","objectiive","immediate","boss","hijo","edputa","suk","mistersmiley","dot","replacing","bandsbut","firework","pop","bandso","sup","george","unfriendly","falsely","helpful","advertising","pls","pagend","cartman","split","disorder","toyrd","spare","smile","weight","graceful","slick","httpwwwlublineuliublino_unijos_paskelbimo_aktashtml","miserable","wikibitch","lil","punkass","streets","dweler","laid","psychotic","fanboy","chinawhat","georgian","saakashvilihe","damned","sweep","ugh","wit","muhammad","murderer","rapist","slave","trader","warmonger","rjensen","jpgordon","obviu","orange","gs","blue","coz","compete","strong","realty","foot","longs","throated","strongest","female","snatch","mating","sized","outcompeted","ones","smallest","coloration","mimics","disguise","approach","engaged","fights","regardless","dookie","green","natlie","cuntbag","dynamic","fuckers","c","ohio","ranges","hang","yourselfyou","shoot","gger","rap","gayo","sector","rourkela","dudei","fuckkk","offf","medal","logical","organization","bronze","silver","mixed","httpenwikipediaorgwikitalksaab_lofton","kicked","radical","httpcommunityseattletimesnwsourcecomarchive","dateslug","lofton","hawking","grade","financial","aid","wayward","renewed","missed","class","substantial","wonders","dismissed","competent","printing","consisted","copies","sold","almost","famous","steven","king","dorksickle","btl","nvrg","span","tim","boucher","httpwwwpopocculturecombattleneverendingbysaabl","lived","berkeley","solano","mile","hitchhiked","cartooningdo","piling","vandalist","junkie","mcchrystal","refure","compaint","protest","userabd","huldra","initially","search","parting","decorated","command","flick","nocal","whinging","procedure","advocate","portrayed","rationalistic","twisted","biaes","dserstroy","currwnt","wally","ryanpostlethwaitei","picturefunny","drunken","convince","easy","parasite","browse","insignificant","roger","royle","harold","gaba","compulsive","masturbator","speedy","via","hospital","throughout","addiction","suspend","careless","milosevic","inditement","cos","kostunica","caled","shutup","massive","wbblpcrime","holiday","special","magnotta","prospective","defence","wet","fair","trial","approvedyou","politician","door","wpblp","kleenex","mild","breeze","malleu","pursued","wpblpcrime","patently","whoring","stink","association","warped","chan","jet","streamer","cool","resume","fixed","gluteus","maximu","salon","pedicure","brotha","sicko","grooms","tool","fufill","urges","suprise","loud","ping","pong","interjected","envy","navigation","crass","album","documentary","freudian","psychoanalysis","refers","theorized","psychosexual","development","realization","freud","considered","defining","moment","gender","identity","according","parallel","girls","castration","anxiety","contemporary","term","symbolically","metaphorically","women","size","genital","freuds","psychoanalytic","circle","external","sigmund","interest","develop","substantially","later","edition","three","significance","gradually","refined","believed","occurred","passed","electra","phallic","stage","latency","libidinal","primarily","prior","libido","physiological","instance","concentrate","becomes","organ","principal","catalyst","pivotal","events","oedipu","significantly","outcome","anatomy","shift","develops","impulse","realizes","physically","equipped","heterosexual","relationship","desires","described","sees","obtaining","apparent","assisting","leads","replace","eliminate","mimic","anticipates","aforementioned","incur","employs","mechanism","displacement","object","offshoot","cited","colloquially","occurs","switch","fear","furthermore","boys","powerful","unit","sufficiently","menacing","wider","enter","roses","red","violet","hardcore","omicronpersei","gwernols","mongo","pagan","altar","mecca","fatty","httpwwwrbblogcomwpcontentuploads_resizejpg","sadasivan","ambition","degrade","nair","passage","deserves","knight","rip","occasional","dogshit","shoe","bottom","andemu","jig","sleeper","provocateur","bolded","emphesis","hostile","bolding","wordi","belife","fking","politely","fluck","stupis","creted","cuking","belive","securityfuck","homeland","securi","jam","couch","dabomb","juicy","jizzbomb","speculative","frickin","actors","tch","professionalism","trusted","label","transvestite","science","trump","fundamentalist","enabling","health","maligned","transphobic","tactic","faggit","lyfe","madoonna","gorgeous","measurement","boi","bulgarian","season","fooled","connect","ddax","arrange","suspicion","terrorism","terror","nowaday","file","riaa","certification","httpwwwriaacomgpdatabasedefaultasp","pitatporgold","tlet","platinum","brl","tlm","fggt","retire","pee","toot","fart","gas","diareah","zoey","marry","redo","dmack","entitled","hopefully","unblockhahaahahahahahahaha","vandalise","graduation","enthusiastic","hug","airport","laughter","dinner","shared","restaurant","kept","contact","comfort","attraction","physical","location","returned","cozy","semi","secluded","suburb","sipping","wine","continuing","tale","presence","alcohol","tight","knit","benefits","chatting","sharing","justine","beth","roommate","quad","welcomed","guest","fortunately","hectic","schedule","weekend","recliner","sip","linger","florida","sun","glow","lighter","shade","shoulder","length","hair","wore","virtually","thin","gloss","lips","enticing","strawberry","flavor","evening","fingernail","dress","elegant","plunging","sequined","neckline","permitted","display","cleavage","appreciated","slit","skirt","wearing","stocking","held","garter","belt","descending","strap","definitely","noticeable","toned","thigh","heel","contrast","attract","surprisingly","hoop","earring","worn","widen","piercing","safe","opportunity","study","equally","impressed","noticeably","shorter","paler","complexion","testament","canada","spending","waking","preferred","outfit","sweater","fitting","slack","earrings","adorned","bore","sparkling","stud","flowed","absently","twirled","strands","listened","graduating","thankful","invite","chatter","intimacy","openly","admire","stunning","perched","sofa","feminine","resting","softly","wrapped","close","stroked","bare","dipped","navel","brushed","sweatpant","caressed","stiffening","manhood","closed","reveled","inherently","familiar","rediscovery","lengthy","watching","intimate","encounter","touches","slowed","ultimately","ceased","breathing","falling","regularity","stayed","awake","immensely","enjoying","awoke","morning","scent","roast","faint","unmistakable","brewed","nectar","opsec","consequence","rereverted","colonelhenry","harassed","shortcoming","intransigence","drives","nitpicking","proving","unfortunately","meek","tend","midst","plow","insisting","rushed","revision","alonj","raised","respectfully","tfa","wouldbecause","akin","concert","pianist","programme","recital","rein","deference","averse","refusal","considerably","inundated","necessary","analysis","hegel","nietzsche","mysticism","eliot","four","quartet","bicker","honour","spelled","guides","taught","cutting","brevity","aesthetic","option","bonus","confusion","unnecessary","articleand","warranted","ownership","courtesy","judgment","painting","gray","proceeded","paint","rock","addressing","keeps","convinces","nailing","philippa","gregory","feudalist","joseph","cardinal","zen","spy","orly","islander","undo","faithed","judgement","indefblocking","sorta","everyme","freepsbane","resorted","framing","revolves","effing","intent","driving","potential","yourselftoo","vacuous","anorexic","shi","beckyknock","gfyourself","sexsex","littke","aimed","thick","itselfit","twist","detrimental","wikis","stewart","hurting","incredibly","tolerated","march","treesexual","parade","inanimate","objects","messed","bus","tlk","quillacollo","province","friends","lifei","josh","nanni","ron","howard","extend","robust","schengen","deletes","profanity","followed","worded","promptly","dickipedia","boisterous","youfor","cluelessbot","roody","gayfagonaplane","dose","commenting","drooling","cp","claiming","occasion","incompetence","willful","appears","blindly","suzanne","opponent","level","scandalous","damaging","convention","slur","portray","homophobic","intertwine","stuck","quicksand","backbiting","perpetuate","falsehood","smear","suffered","fundie","thumper","bend","dicks","crappy","egyptian","sided","pod","trip","verbal","assistance","disclaimer","copying","referred","newspaper","bummer","turning","disneyland","protruding","possibly","soft","padding","absolutly","oscar","schmidt","destroy","machocarioca","dax","leggett","outstanding","flawless","unbelieveable","brightest","luscious","eyelash","stare","sayhes","crush","greasy","round","flabby","cheek","chin","mei","daxif","freddo","xxx","fuckface","grope","tickle","gentley","eveing","grip","authoitif","wake","realy","deeside","spunk","dunk","pottery","usergarycolemanfan","com","georg","hackenschmidt","wrestling","fame","jibbah","jabbah","wierdddd","tramp","hagrid","uck","deek","asperger","riddled","classification","hopefulls","vv","agarwal","dravidian","standards","atr","inaccuracies","sputnik","giantsnowman","struway","egghead","xx","ubiquity","mattythewhite","dangerouspanda","newbiepedian","sdpatrolbot","saintwen","patchy","bold","relating","talked","points","usefulness","stirring","yell","hat","dirt","effective","venting","serversit","notthat","thingi","rfcu","foolishly","knowyou","emotionally","treason","patriot","desecrate","hungarian","trator","rugrat","permanently","barred","accurate","unbiased","closely","monitoring","sheldon","smoking","ninja","movy","premise","shaky","outlook","bleak","painful","amazingly","attitude","inspired","entirelyi","patch","developing","ridiculed","mathematical","ecology","amoebas","homepagedo","ecologist","kong","sicken","sack","tea","drinker","gangsta","propol","drew","refferred","organizationwikimedia","corporation","seventh","citystatezipcodelos","angele","referraljuly","organizations","employer","identfication","x","campaign","excessive","lobbying","activite","campaigning","indirectly","participating","intervening","behalf","forth","drift","contacting","asap","notwell","law","sufficient","legal","background","communication","finale","plea","wreak","owellen","simulation","wpnpov","wpown","wpcoi","bias","thingthi","compliance","usataxcode","rob","illness","era","narcissistic","raghead","einstein","relativity","unvaldalizing","hands","buisness","sewer","persist","abusing","gnome","dublin","articleit","territory","dodo","patronising","z","dvd","pinocchio","mentions","guide","fantasia","blu","ray","spring","gabrielkat","seperate","singing","retarted","everybody","mike","raps","hybrid","meteora","overzealous","phuq","knob","salt","deepak","ruler","deepakan","likehe","unhappy","personi","promoise","legit","ignores","strcit","backed","insults","accuses","accustation","continues","return","sudden","againwith","nowith","answers","nohe","deepaks","onyou","ideahe","picks","chooses","wastes","inslut","thenand","writeeven","theneven","brings","uphe","downorhe","answerorhe","responds","wikiepdia","mud","actsisnt","answersometime","alland","sometime","dicator","wrongdeepak","holds","himand","tel","nancy","haemorrhoid","oneoneoneone","supertrll","unrelated","comrade","venomous","paranoia","register","feeble","raza","wetback","preserving","resentment","samsara","pedantic","aryour","ticle","lucas","biespiel","inaccurate","againi","wqa","elseit","mummy","fatuorum","suporter","palastinians","terrorists","finite","applicate","expulsion","purpse","trucking","gesprach","duration","usermomu","behaviour","woke","blanking","whith","buaagh","pleaseremove","nationality","spain","maurice","possible","catalonia","collectonian","extent","revise","rkansa","anywhere","elsewere","cummin","tha","corpse","uwe","translate","hairy","wishes","misrepresents","urantia","fellowship","legitimately","hundred","members","readers","intl","worldwide","denmark","saudi","arabia","korea","repressed","resentful","hosts","monthly","mailing","encompasses","continent","host","beguiled","calf","idolatrous","appease","psychology","deep","subliminal","facts","discontinue","twigboy","infantry","wrongfully","declines","twice","inmate","asylum","democracy","cooperation","writer","ballsy","stupidcan","yarrr","matey","invited","fac","kronan","skulking","gift","stopped","poof","goneyou","omg","gossiping","mgiganteus","balllllsssssss","spui","modification","homework","johnny","oi","johncd","rush","sisher","trojin","horses","mere","spade","hypocrites","darwin","commands","biblical","robotic","fanatics","vermin","jealousy","themselves","mod","charlotte","atheist","dummie","rack","lad","footie","testacle","jdwolff","pope","wharrrbl","grrrbl","basket","undermining","credibility","illogical","gibberish","homeless","etaonsh","building","freedom","wins","saddam","mar","primitive","nursery","betray","tiptoety","childish","attempts","antonescu","slavery","whoop","extra","bryte","zoe","hoe","consideration","ashwamedha","requires","ceremony","present","yajamana","patni","indulge","intercourse","ra","rely","officiate","nuclear","zone","odd","tan","desysopping","foolhardy","notion","hail","infamous","tiscali","rpeh","checkuser","usergeorgewilliamherbert","unofficial","hmmmm","prodego","desysopped","wpnpa","tens","slimvirgin","fatwhore","hordes","diamond","palestinian","starve","pimple","addition","wrongit","perverse","spewed","regular","gulf","examine","disposal","relentless","swede","alos","menand","mens","cumand","animals","ie","ect","irregardless","youe","bullied","lashing","privileges","obscene","judging","protecting","chriso","stupidi","vodka","pant","sooooooooooooo","imbecilic","car","topi","driven","stuart","highway","quiet","freeway","overseas","rabbit","begun","annoying","software","neway","maggie","contrib","iranian","terroriststhey","soil","africa","israelis","imaginary","relieved","relation","imagining","invented","lieing","actions","hai","expanding","encouragement","nonconstructive","conncern","bissni","painfulist","grunge","albumit","alternative","metal","twerp","enforcing","hooker","kafziel","join","fighter","ernesto","guevara","serna","hasta","victoria","siempre","douchei","paki","fuckersitalic","textfukin","taliban","youthat","song","fuller","pacificwarrion","philippines","manyou","rickk","hereever","jmlk","whose","hy","niceare","waring","solaris","experiment","wikipediasandbox","plot","movie","trailer","genre","belongs","unsupported","regulation","tabhere","film","essentially","serves","backdrop","lem","novel","discusses","mysterious","phenomenon","surface","futile","rofl","harrasment","userdo","jog","shitface","asswadcan","intention","shityou","loved","motherfuker","faggotyou","eurotoxin","assit","sockpuppetjoe","hazeton","folder","submited","higher","athority","strongly","fasti","bh","notable","charges","libel","forthwith","joehazeltonp","bryan","dino","bitching","screwing","indignant","embarrassed","humiliated","dumd","kills","charge","receive","consecutive","wikigestapo","energy","rowdy","wikipedians","spirit","jest","district","diff","swedefag","patterson","explains","petulantly","corrected","indication","executive","musical","discography","artists","bz","jun","shibata","covers","glay","dir","en","grey","boxrec","honor","dignity","court","banded","bill","dam","gates","thom","calandra","recognition","busted","handed","securities","mutt","repeatedly","marcus","paul","tibbit","raped","spongebob","animation","yeh","nick","smoked","sb","hag","fked","burning","noted","basalisk","administratoryou","transparent","ensuring","pleased","jackasses","flippant","rag","ons","puts","endnotes","nigerian","con","denude","inserting","nightclub","teenagerdo","sensitive","veteran","reserve","harder","bithch","genuinely","sarek","clicked","intending","itdid","tagafrica","coatrack","cruft","melissa","bean","jill","morgenthaler","bio","goethean","roskam","violates","systemic","wikipeidia","ethics","democrats","approved","gothean","wpspa","dccc","pretense","fairness","revised","rewrite","accountable","engage","disingenuous","mirror","compartmentalized","hypocrisy","liescensorship","mis","cultist","gothenan","chicago","democrat","thug","pulling","institutionalized","democratic","counted","elections","stolen","early","wino","voteall","elitist","county","cook","corruption","scale","rivaling","bannana","republic","paradise","dupage","figging","buda","insists","keeping","bostonas","bastrard","neogotiate","hina","damm","auto","archiving","struck","bcr","loads","missing","charity","fawn","pagei","slung","andrew","lesbian","moot","qualify","overinflated","doughboy","vandaldo","og","quintuspetilliu","sept","staff","brianann","macamhlaidh","depicted","shitehole","delight","emailing","sadass","bash","lay","dork","yor","moneyz","undid","agsb","aadam","kreissl","radio","beast","bthe","enterprise","nipple","gimp","mistress","curiosity","credible","divorced","benefit","pedofile","kiddie","ba","psychological","wppwner","neurosis","expense","afraid","havet","spin","neck","beard","tentacle","civility","beholder","beautyi","obligation","lessen","stature","eyei","unimpressed","lee","writes","wiping","amib","tp","bsinc","education","diplomacy","doosh","hahahah","itand","themselvesgrin","raven","isaac","salkeld","fella","smd","realtor","ingenius","showcase","offender","slap","recognized","nc","represenative","deborah","ross","estate","highlight","localit","strict","advertisement","carolina","nightlife","resource","apply","prematurely","clowns","entrusted","enforce","disabled","british","rapper","yankee","tinchy","stryder","mankind","abomination","aman","markmysoe","njgw","rots","mezo","disrupt","integrity","pestering","wikistalking","solved","concluded","tit","tat","needle","amicably","erase","spinning","morris","famously","venue","seminal","pr","alluded","controversially","scholarship","hyperventilating","itwe","volk","village","dumbshit","terminus","gunn","pole","moto","flygayguy","kkk","vander","plaat","jaysuschri","ten","commandments","republicans","melodic","click","itno","bookmarked","wikipeda","refdesk","beingbenschumin","fatgear","doug","weller","rfc","infobox","restored","gotten","warbox","towel","escalate","declaring","mediation","lopez","amok","stating","creaky","structure","soi","silliest","redneck","worship","bass","mouunted","woodsport","handdo","kosova","ape","povness","buh","sorted","skrewdrivernet","comparing","nitsch","rocked","damnit","february","ayr","saleban","revisionyou","actively","malefactor","synoonymous","defiencent","staying","darood","hawiye","somalia","contained","roam","peole","fuking","compkete","bitches","becaus","ei","fed","inch","butthole","trampoline","saddest","lgrainger","brand","hamilton","kthxbye","pinarayi","oneday","military","farmer","looser","dihck","nihgga","utorrant","oy","vey","boxer","sodomites","togetheryech","anyhow","rotate","dayskeep","suckin","myspace","okcupid","lfie","httpenwikipediaorgwikimatrimonials_sites","notift","cluebot","vernon","vendetta","glue","peoples","debate","dencord","amuses","webhost","guinnog","authoritarian","spankssorrythank","fork","pow","breast","vandelize","bigoted","heeded","warnings","whatsoever","proceeding","steam","fledged","inflammatory","derogatory","rhetoiric","travesty","bigot","intolerance","sounding","reminiscent","dwarf","involving","proportion","target","environment","remedy","httpwwwfreeadulthotelscom","yopie","czech","phanatic","czechia","chechnya","pigs","wikiadmins","enthusiastfrance","avatar","maccarthyst","japanese","showingoff","bumblebeez","booed","radioheadso","negativewhy","negativity","liberalist","molester","sooner","ryan","griffith","screen","wyrmking","nathan","petrellis","credit","merchan","dise","desginer","stan","troy","ramirez","mediayahoocomdfadfa","shiite","nob","dildo","bloodyou","incher","wikitard","puss","slandering","harrassment","gtta","weak","pedophiles","pedo","fn","yrold","pedos","saikano","individuals","praising","product","impress","brit","spoiler","yay","laughing","httpenwikipediaorgwikinigger","heydo","mywself","runing","propagandiast","desperately","korean","isolate","linguist","referece","languagesong","jae","jung","phrase","distorting","snowolf","tampon","sucksit","emeril","canceled","mentioning","harly","drags","abput","gettin","ponders","splitting","fuckedy","weeve","ma","italy","rome","serbo","nationalists","evlekis","excellent","scholarly","differs","serbian","trendy","shallow","kosovology","canadian","slavonic","thrilling","books","journalist","journal","malcolm","narrative","gripping","brilliant","task","vigor","passion","balkan","revolutionary","economist","kosovo","breathtaking","oppressive","sunday","brilliantly","researched","argued","magisterial","inevitably","received","disservice","pioneering","generation","literary","supplement","awe","inspiring","vital","successor","essential","tragic","todayhis","exceptional","unimpeachable","rearch","equitable","conflicting","ethnic","speculating","affected","dayton","accord","weekly","fatal","catastrophe","elaborately","noel","revered","aknowledged","impartial","blogger","conquered","serb","smaller","nameit","dab","balkanfever","devized","treaty","london","joining","reporter","interestedinfairness","confuse","yugoslavia","ahah","relaxed","kachin","madai","freepornvideoscom","fuko","videos","mosaics","uncencered","harada","thankfully","displeasure","odious","stench","contemptible","crossed","sword","mantra","unsourced","iota","fap","generate","whittled","talent","contempt","simplest","measured","stands","denominator","application","sourcing","arbitrary","laughable","seeing","butchering","cutter","pointless","grandstanding","workyou","near","chatham","nonsenseit","apparantly","feed","narrisisim","hubri","dpenis","avid","warcraft","figures","fuckwit","pleasedo","materialscientist","continuously","mayassa","bint","hamad","khalifa","thani","creativecommons","license","sheikha","uncovered","males","challenge","luckily","colleague","stationed","ofyou","dust","fuckdamn","maust","shitload","giants","pat","giy","mooch","hater","err","scrapiron","disappear","hiding","tdadamemd","slang","dictionarycom","vulgar","variety","numbered","wiktionary","euphemism","sleeping","stimulation","factors","wpconsensus","achieved","proposal","briefly","summarizing","activitysuch","expressed","uscentric","united","fuckit","literal","termthey","broken","astounding","againth","bongwarrior","motley","crew","predictable","abuser","flaunts","usage","drugs","sinneed","ft","sadly","mistaken","ctjf","j","delanoy","attends","diane","worthlessness","lci","folks","lethbridge","collegiate","institute","calmly","tie","shower","peter","symonds","dave","arbcom","removedcool","smosh","chilean","bolivian","bitchboy","anus","nussle","trophy","husband","finds","spit","muther","polish","pederast","misusing","unsolicited","spamhau","distinguish","spamhaus","lists","httpwwwspamhausorgfaqanswerslasso","sectionlegalquestions","misuse","defined","distort","distortion","rama","raima","affair","gaashooru","url","asslicking","contest","wehwalt","fiefdom","astonishingly","shapiro","reprint","militant","activists","unknown","defunct","print","months","correctly","jerkoff","mebanged","voting","afd","beings","timei","paying","asinine","reverts","caused","stretched","wack","packyou","stern","bob","fred","elephant","majesty","koen","franse","lighten","saddos","seriouslydo","preventative","timeout","moroni","shinolayou","cleanup","janitor","stripped","batch","understands","sexist","yov","ordered","deliting","fuel","undermine","existed","disregard","tachfin","administratives","sahrawi","moroccan","sadr","learning","rasd","sahara","salud","economic","ministry","alert","benben","dickdick","adolfadolf","pedepede","contested","speedily","hardship","destiny","amendment","fukyou","whoopdie","doo","ima","persons","fucyour","dumbasshave","wordier","wouldnt","sissy","musician","sucked","outloud","lennon","epstien","garage","sixty","blown","gimmee","tom","cleveland","justly","constitution","herpe","bastardized","nba","rashard","lewis","cooper","delusive","pointing","judger","evanescence","gothic","scene","distinct","stylistic","heavy","shakin","rightyou","answering","walters","million","boriquastar","dominican","ctcher","bluff","anytime","credits","pts","bangladeshicould","samei","bangladesh","dacca","precise","awfully","bangladeshi","bucko","justice","leeching","goodwill","brave","anisha","epic","tommy","goe","waterloo","kidding","palin","melon","egg","bitchy","horribly","clarification","constructive","unbelivable","repubolican","jacobitewhat","westies","hallmark","untill","knothing","jacobite","niteshit","yuo","hls","exposes","infiltration","hidden","camera","footage","naz","bans","ineffective","impression","viewer","attck","sdsm","commies","peopleno","promotes","croatian","patriotism","sings","serbs","perkovic","promote","ustasa","ideology","wears","corresponding","ustase","ndh","nationwhile","nationbut","otherswhere","nations","serbsbecause","warand","himnot","accused","performing","sdp","sourcehe","wingthat","si","widely","knownof","disagrees","considers","croatiabut","ustashe","pleasebecause","rockers","thisrock","roll","equal","fascismhe","singerof","noblesthat","confirming","outnumber","denouncement","virtual","nsdap","diminished","necessity","denounce","discussedferal","reliableits","tabloidonly","usedand","quotation","feralwhile","truethere","meaningbecause","contestand","fifferent","contestthi","questiona","translated","jutarnji","vecernji","listive","sourceslink","articlesand","alsosomeone","pagethi","aboutany","explainedshame","sneaky","method","resign","incompetents","polock","staten","island","nest","cowards","kai","paedophilia","sanctioned","wondering","peadophilia","worthy","sallary","peabody","essex","dan","monroe","pulled","freako","userallen","wacko","fuckup","itvs","britannia","myopic","trigger","frosty","mathrfuker","idioooot","antonio","padua","exept","amc","tomko","timko","bu","ref","resigned","wwe","argh","assehole","firefox","ctrl","alt","losing","aren","manor","corey","moline","signicance","plantation","backwood","gomer","tooth","rode","hmmm","hillbilly","hee","haw","httpuncyclopediaorgwikiusersir_james_paul","senile","oz","cent","lede","concensus","themsleve","pour","peice","sarcasticidealist","gun","soulless","continual","pursuit","finding","mirrors","designed","conceal","adieu","formerly","wuld","liccking","offline","iam","styrofoam","persong","stinky","hhh","teach","absence","revocation","fantasy","subsequent","rosoft","legila","autopatrolled","served","traveller","doom","kevin","forsyth","poorsite","ummmmmyeah","raid","awesomei","mcq","lollipop","truely","mars","volta","brian","redban","reichle","rolling","stones","httpwwwrollingstonecomsportsfeatureshowjoeroganwentfromufcannouncertostcenturytimothyleary","morally","penalty","believing","anthony","bourdain","stomp","testicals","emerils","jockstrap","yoooooooooooooooouuuuuuuuuuuuuuuuuuuuuu","lier","deleteing","bhaha","xchanter","solicitor","cheshire","trustworthy","geekyou","toronto","toyspram","persecuted","awww","diddum","generalyou","acknowledged","insulter","belittler","restriction","xeworlebithere","shocker","disambiguation","incorrectly","touching","nnnnnnnnnnnnnnnnnnnnnnnnnniiiiiiiiiiiiiiiiiiiiiggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaa","fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuc","autoblock","someday","pain","andf","autobot","disguised","strangle","supremacists","lobot","static","vetted","plain","pam","bondi","voters","revising","akhtak","sharmota","waysince","grammar","mingin","niggeryou","hanging","wild","subhumanyou","byzantium","constantinople","rollosmoke","observation","unwilling","toy","habit","mode","characters","nintendo","older","cretin","tulu","kannadaif","karnataka","eaten","tamil","telugusuppresing","linguistic","anways","kannda","borrows","heavily","sanskrit","classical","helly","talkno","judged","begging","stupidest","wikilobbying","aspie","likw","perform","felatio","scholar","hostility","market","turmoil","sales","unencyclopedic","selling","herunar","geoff","legimate","waht","phuck","porcupine","foad","cucking","abider","mikey","yoder","lightly","smacks","wafulz","minnow","typei","worm","swuck","faggotttttttt","wreck","sod","wagger","git","howzat","wot","ganna","diss","phyllis","schlafly","collection","jerks","misrepresent","corrupt","sluts","prone","kde","countered","windows","accepting","allowing","republicansodomite","praise","mccarthy","stake","ooop","democratantisodomite","keith","smeg","saturated","ballwipe","mane","souja","reknowledge","bureau","analy","satan","thorny","eternity","elitest","thrown","river","pirrahna","shiiiiiiiit","kyuubi","limitless","chakra","demon","naruto","shadow","clones","payed","anime","butyou","woohoo","scare","powerpussy","motivation","shoud","damien","icon","anarchist","oppressing","syoped","input","appalling","fcuk","deleatin","mah","dabiggestitaliano","scucci","ginnie","fcuking","whohe","betta","louieville","skullbig","giambi","bat","patrisio","youl","wearin","lifetime","despicable","montego","update","limey","bugger","loony","fruit","cheerleader","caring","cheerleading","mytouch","anointedhey","haggard","anointed","oil","prostitutehe","messiah","preacher","meets","qualification","abstinence","ed","gouged","corkscrew","notthe","rubin","criterion","employing","profitably","heidegger","demonstrated","error","grossly","distorrts","masturabtory","bbebfcfc","albert","square","eastenders","layout","relatives","elsethat","dickhole","assface","shitfucker","suffering","hahahahahaha","dickfucker","indiscriminately","wiggled","denigrating","credence","authoritative","voice","offdo","global","warming","balanced","fanatical","hypothosised","incest","deceased","wellgoodbuy","isis","terroristyou","monkeynut","idiotyou","responce","shawn","corporate","betrays","underlying","weakness","regullary","trolled","ware","nevada","guyhe","digustingly","sickeningly","slowly","correlation","anondo","crediablity","wikipedidiots","knuckle","draggingcyberthug","joe","miscreant","beyond","finalized","bout","httpiimgurcommbbozujpg","carrot","iranians","plz","filter","billion","comedrinker","crzrussian","longi","photographer","dickface","userbarneca","kindness","starhe","rudest","met","um","athuor","arkansas","qand","magnet","lowly","callspersonal","untrue","bithc","wuz","jus","chillin","jigaboo","cracka","tang","nuttin","biotch","yer","frenchman","fruity","pebble","pebbles","incessant","whining","reynolds","reinstated","ryulong","shock","kannadiga","urdu","originate","handful","kanndadiga","kicking","outer","orbit","munch","delicious","condom","addon","hermit","ndp","brainwashed","shroud","bless","rlevse","blinded","incredible","fools","chocobos","bush","geor","demo","httpnavysealscomnsoverviewnotablesealsrichardmarcinko","touched","collect","bounty","gauge","bruh","uglier","kurt","groaning","cocktail","whores","nuts","slutty","pissy","unlikely","abundantly","stepped","rehearsal","studio","flicked","krist","lap","giggling","taunting","drummer","floozie","forcibly","squealed","growled","forcing","kissed","possessively","shoved","widened","sent","silent","glare","silencing","crackwhore","sidestepping","singer","barely","steps","grabbed","erection","pressing","bitchi","muttered","slipping","quicklyyou","declared","strength","floor","resulted","laying","hissed","struggled","maneuverability","reached","tore","seam","pause","lubrication","quickly","screamed","wiggling","holding","onto","hip","scream","faded","faster","squeezed","glove","unreleased","spurted","mixture","leaking","grinning","refastened","glanced","superiority","infusing","owned","rumour","suspected","protection","expired","broseph","userfanofranzs","meat","shitbrown","stupiditythe","nailed","easter","fixation","mary","ambrose","fattie","begin","thingsi","mush","controlled","dictatorship","ended","restarted","pleas","restor","fdb","rockit","quarrel","gothrock","hypocricy","fakes","determine","unreliably","noq","edward","watson","sanitised","bushell","trott","dumpling","heres","swiss","neutralist","parroting","pen","straw","ignoratio","elenchi","fallacious","petitio","principii","doe","subtle","profiling","hippie","drug","remotely","reptile","obese","tongan","bearing","conjure","favour","imagined","affiliation","aptly","speculation","thingst","liviusorg","visited","thousand","jona","lendering","founder","maintainer","outlet","root","plan","paragon","pan","iranic","resurgence","obstacle","resurgent","achaemenid","empire","reawakening","terrifying","persian","horsemen","howl","forfeit","inferior","convincing","staythat","irrespective","perceived","pertains","friendly","sought","dispel","popular","ancient","drama","holier","vsmith","philanderer","select","crusade","hateful","stifling","adolescent","creativity","consequently","unlawful","unjust","administration","rightfully","tgp","agreement","disaster","renew","visitor","visa","reentering","teaching","permit","costly","intentioned","esl","travelling","poste","documentation","arrested","regard","belonging","prague","north","aggressive","border","deport","bitterly","americannot","britishenglish","vacation","europethen","travel","europeans","foreigner","eu","brussels","copy","creation","profession","bitchesfuck","rodhullandemu","engine","poopyhead","unfresh","preferably","soaked","industrial","antistink","juiceit","lambs","jlatondre","birth","certificate","leabian","poititive","critisism","jackie","movies","versions","cocksuckers","deviant","fuckwill","oo","committing","massacre","gaza","listens","leaves","kike","khoi","bertil","videt","vandalazing","suit","functional","biography","sensational","meet","animalfucker","homepage","fiendly","den","experimenter","lab","rats","forgiving","rudeness","overestimate","dumbness","elen","shitty","mongol","currant","guywhat","forbid","confident","nymphomaniac","oddly","revolve","fatass","jessey","boiling","stable","leftist","armor","describing","unlock","gameguide","retardedness","hereit","pill","trivia","armors","belong","npa","misleading","features","portion","articlethere","minor","unlockable","sect","qld","labour","moderate","implies","loyal","thisit","innacurate","pftt","standahl","mousestache","scared","federal","slipped","usertommyvandalise","putt","sawi","upload","regret","vandolism","makin","yourselfi","shiti","guttyboyd","guttyboydaolcom","terrilja","knoe","rschen","wips","stabs","soldier","pon","greece","pics","sonovabitch","alex","therevolutions","demeans","hockey","accuse","eric","goertz","strike","palsy","salivating","thinkbich","musarabbyahmad","dawnseeker","meathead","earthquake","wkipediado","recorrect","nosey","donei","baron","trayvon","martin","prospect","prepared","exlain","negligible","exercising","humor","erasing","outsider","rambling","apt","bishonen","probaby","cartoon","presumably","waa","involves","valuei","cleearly","vill","wooman","der","gauze","jac","chickenshit","tart","av","mailed","adolph","bwilkens","tessa","t_t","alun","acid","rehab","hijacked","whitewash","counters","department","pic","dickless","micropenis","autofellatio","gallery","qoute","exuse","triceratop","rhinoceroses","brr","userpuncharoo","misunderstood","transmidgetard","convinced","societal","enact","govern","trajectory","bday","informal","probaly","kickin","coach","recreated","wrestler","robby","hillcrestwrestler","chair","bleeds","blcok","unblocked","unleashed","christianity","miracle","whip","whinny","horseshit","efforst","lbocked","editnig","delusional","calculating","leader","indisuptable","debauchery","truthful","intelligence","schmegma","von","dicksuckington","barbed","delet","ergonomic","mp","owning","relative","hemenway","waster","hanibalyoure","rebels","aleppo","assadyoure","gvhy","wedge","residents","bodyhanibalyoure","peep","dickmania","hill","zimzalabim","yourwarning","repairing","depiction","repulsive","unnatural","educational","misinformation","humans","evolved","aborigine","frame","isolated","australia","hola","logg","rhaworth","purvey","stinking","putrid","cowardi","versed","advanced","marshall","arts","yeow","groupy","capture","hacker","contacted","participatory","patent","semblance","kinematic","replicating","machines","copyrighted","materials","infringing","notes","promoting","reprap","replicator","refuses","description","proposed","rotting","hll","collins","cute","corrupti","dealt","amusement","megadeth","mong","portugal","seay","ex","fuc","nationalis","alexikoua","yous","informationyou","wikipediathere","albaniahttpwwwinstatgovalmediarezultatet_kryesore_t__censusit_t__popullsis__dhe_banesave__n__shqip_ripdf","census","additionally","footprint","counseling","empathize","goatse","dung","andre","undersized","jinjo","sorely","ice","sport","icarly","bitchmother","iono","talkin","jibbs","waz","sayin","bouthim","shouldnt","patient","beleive","nooooo","sandstein","vengeance","fckin","mutha","redid","delted","promblem","redirectsclit","synonymous","redirected","musically","philistine","infant","grew","magically","developed","symptom","syndrome","vanda","facility","medical","advances","integrated","sesond","toonlucas","morty","comedy","purple","justified","tho","namewould","witch","hunt","confirm","exert","trademark","release","witt","stooges","eoganan","wobble","yaself","biatch","gtx","launching","moth","messaging","clueless","october","penn","blurb","chaos","smartass","bum","hoeshit","lacross","broah","wowwwwyou","shud","unprotected","yamaguchi","lakshmi","preaching","unblockplease","fcked","scientizzle","buster","spew","destroys","solid","hod","lipson","feita","merkle","roco","stealing","buddyi","training","kaine","ripped","immortalkaine","filed","wars","aunt","donna","goldsmith","nuff","shoots","prisoner","resfirestar","descendant","gardener","yalost","unblockunblock","dyke","tasmania","conservapedia","httpwwwconservapediacomtasmania","approximately","hobart","federation","significant","referendum","defeateddo","encyclopaedia","ridiculousi","wtc","mailboy","raul","lawl","rhymes","scheinwerfermann","effects","ejaculation","addressed","pornography","waist","arguing","md","nad","circumstance","punished","suicide","projecti","hoped","gene","contaminate","poolhere","hoping","hometown","loss","navier","stokes","equation","nonlinear","partial","differential","nonlinearity","solve","turbulence","empirically","measurable","reverse","gravity","headquarter","minus","abiding","verifiable","wikipedianeutral","wikipediano","wikipediaverifiability","wikipediareliable","outlined","demanded","csssclll","spoiling","greeenback","tender","bank","treasure","treasury","ff","bored","projection","charlatan","listing","jechoman","stalked","antisemitic","mislead","vacuo","cola","emotional","dahn","yoga","scummy","ilchee","greedy","lees","devotee","sorts","evildoing","sham","helped","remote","cynical","spirituality","chose","nutjob","groups","keilor","saab","loosing","digital","roofis","actuall","storie","creditibily","lied","globetreker","strip","sheet","zerox","stapled","printed","loosely","cartoonist","neverending","jarvis","marlow","pocket","supposedly","unverifiable","describes","publishing","pamphlet","reprinted","admitting","amazement","psuedonym","risking","activist","opportunist","masking","anarchy","privileged","dialog","shutting","saabs","wikepedia","chalked","bibliography","occulture","budget","wpbook","establish","notability","proposing","nominate","dufour","phoebe","chris","malaria","slimvirginyou","slimvirgini","shamedo","sbumissive","hid","protecte","bhadani","soliloqies","lumpens","nationalistic","subculture","looted","therein","thessaloniki","khorasan","merv","bukhara","scores","uzbekistan","turkmenistan","grasp","turkic","fravahrahura","mazda","aryanaafghanistan","khorasanafghanistan","plant","aim","cost","modicum","attempted","yeki","bar","sare","shakh","bon","miborid","pedigree","mislabeled","facebuster","ddt","pointer","suspicious","spylab","uploaded","introduce","generating","suggested","produced","shown","distorted","phras","inclusive","projectdespite","organizing","enhancing","creates","ignoramu","established","entries","dipset","str","che","fuhk","yrowo","surei","hrm","rollback","eas","btw","calzaghe","undisputed","linear","champion","xman","om","nom","gazette","rs","formated","dates","criticisms","dreamguyi","promised","vampire","apologizing","thoughhe","haning","v","pumps","eg","rooney","rocket","harry","potter","morhone","dickwad","hijacking","ytmnd","documented","whois","lookup","oopssorryguysytmndcom","rdh","youself","facsist","philiosophy","disagreed","orignal","adjust","leithp","glowing","doomed","knowldege","supervised","registration","creditability","sting","rainforests","phimo","teleprompter","chapter","peolpel","rpck","stdhs","occassional","intentional","lololololololololpenis","max","hohar","freand","cast","wankers","pppptttthhhh","aargh","hoursshitty","timing","spi","methink","tomorramust","zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz","forgetting","melbourne","existing","thereby","validating","judge","geeks","ditch","processes","itsi","laymen","mainly","yuke","nugget","roster","schmuck","osuthus","replay","acne","probally","xyn","wiped","fisting","obsession","goodluck","tighten","correcting","representing","lessi","tangible","becsuse","watched","relaity","goodness","memeory","centered","conspirasyy","hav","racially","acomplise","shaged","baitch","employed","dicate","irritate","inflating","derek","acorah","chastise","catholics","togetherit","protestant","brethren","somethin","fridays","brotther","comin","revertion","ashole","craig","newmark","leftwing","uaf","discriminates","shitpoke","barnabay","disturbs","professionally","absurdity","crusades","silverwhistle","conrad","tyre","saladin","spared","bloodshed","unfortunate","lusignan","reynald","interference","intensified","humphrey","foreveryou","workaww","sonek","prince","saly","clay","allison","assadhanibalyoure","yoy","dianna","tele","sucky","murphy","translation","tampering","cena","booked","batista","whine","jbl","evented","triple","orton","jobbing","tna","mic","headlock","compare","aj","styles","jobber","buried","booker","angle","abyss","deserved","ends","taker","streak","quarter","firedc","carefully","norwegian","beeswax","uncivic","collaborator","abandon","collaborate","itit","limitation","appropiate","bertie","pukata","dishoom","bi","failboat","achieving","undetected","sexlifeless","schitzophrenic","toat","ure","whatthefuck","goddamnit","pagebut","insanei","fuckk","stabbed","drowned","afterwards","pit","alight","matches","loading","assholeyou","asyou","schmeaters","ins","thatyou","enjoys","receiving","delivering","bollock","tata","squeeze","trouted","matty","winged","httpenwikipediaorgwikibyzantine_empire","sodomized","helper","proceed","alan","reckon","phelps","warfighter","ooooooooooohhhhhhhhhh","yyyyyyyyyeeeeeeeeeeaaaaaaaaaahhhhhhhh","majority","overbearing","harra","cabal","stacking","cetera","feels","wesley","outrigger","latterly","johnbod","brandon","delldo","mouththe","klansman","taney","aspersion","photoshopped","fellatio","rottweiler","pooped","shirt","dessert","bonjo","cruel","declaration","slaveryit","esay","taco","hombre","pablito","shithole","fromthewolfstar","emphatically","untrusted","trusting","practical","rewarding","reaching","pet","rattlesnake","diarrhea","jumping","bandwagon","roving","poopoo","caca","bullpenis","mined","bussiness","myslf","wha","feeding","sannse","angela","billj","levy","maintenance","cleaning","replying","exterminate","fragment","jade","mystery","jadeyomiel","swedish","assured","primary","sahih","bukhari","httpwwwusceduorgcmjereligioustextshadithbukharisbtphp","volume","narrated","jabir","abdullah","amongst","freed","snowman","eraser","pozer","liberalpedia","christaphobipedia","serioudo","inappropriately","sounded","harrasing","elvis","burgler","observedo","swine","hyperbole","dread","discussed","nauseam","gum","youdo","dissing","charlie","bray","ohnoitsjamie","lifeless","usermikenorton","puppett","howdy","nominating","supplied","awsome","yeeeeeeeee","haaaaaaaaa","screaming","trade","zzzzzzz","twt","sherlock","comics","med","verfied","ruinging","meds","suckkkkkkkkkkkkkkk","ep","reclassify","ig","ger","ay","ag","ock","psychokirby","midget","recall","britain","influential","games","apples","calculator","againcurrent","estimate","buddhists","millionwhat","jolly","fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck","wrongful","numerous","cautios","nosy","getts","dn","motherfin","bch","uncivial","cliche","reorganization","heterosexuality","distinguishes","orientation","likewise","reorganize","reproduction","causality","crucial","element","reorganizing","prairiewood","hinchinbrook","bossley","produces","noone","stalin","originates","nightstallions","smelled","admistrator","deter","barrack","pulmonary","emboli","burned","two","olddo","diannatelesburtalbert","conducted","nicely","ironically","fuckily","oops","metadata","preposite","manners","punctuation","overseen","fuckbook","wording","templateuwharass","criminology","phrasing","harass","purposefully","raaaaaape","redirect","warden","jobsworth","cockus","americu","truthfuly","timeon","paxmcdowell","intercontinental","champions","lifted","stalling","tactics","seriouslythere","limit","cockroach","reasons","feeder","thingnd","shined","fled","researchi","warningi","ucking","flaming","migrations","migration","disproven","sly","manipulate","austrian","fractional","banking","debt","monetary","napolean","height","reminded","paris","hilton","pointsno","shtick","blond","madonna","titsand","huffington","handsome","divorce","settlement","gop","awbern","sonofabitch","menstruating","kneelift","rick","falcon","clinton","outlawing","leo","httpwwwspacepoliticscom","staffer","bigelow","nasa","dumbfalcon","motherfalconer","falconing","pursestrings","cots","funding","areai","swim","progress","structural","inadequacy","initiate","uncalled","unbalanced","justify","lalu","prasad","yadav","faizan","goofs","queers","mudda","underage","drinking","fiskeharrison","decidedly","saxon","whaling","iraq","pollution","overcrowding","prisons","shipping","election","hurtful","specially","judy","blume","plays","linkin","fucka","payout","pharmaceutical","displaying","erroneous","scientifically","colloidal","naturally","occurring","abundance","pesticides","chemical","fertiliser","adorable","lololol","lolcats","vuvuzela","yemeni","prashant","rank","temper","tantrum","brittania","mugs","gimps","purely","shortened","thereholla","chrisyou","vandalizes","gnu","pirate","string","eviscerate","pretentious","subhuman","biting","newby","reaches","elite","rfa","degradation","anythingyou","rentacop","httpuploadwikimediaorgwikipediacommonsfsukhoi_su_operatorspng","quipment","technology","scumbags","equipment","phil","irresponsible","dumhead","rationale","dialogue","basterd","cholo","fuckan","changan","littal","whosoever","shudra","caste","glorious","historydo","krishna","yaduyadav","thn","yadavs","upto","contury","mughal","ruleso","shudras","kettle","hipocrite","skulk","vidkun","chip","thingy","gutless","confront","mouthing","slim","fxdh","httpwwwbarenakedislamcomwpcontentuploadsliveleakdotcomehusbykravallerlitenjpgresizedjpg","mootmootmootmootmootmootmootmootmootmoot","epithet","spiritually","hersef","kimchi","ohh","gayi","fagg","fuch","constitute","acaefffeceacb","zomfg","jeezu","potiental","rere","farking","idoitxd","robohacker","throu","fkin","emphasis","boa","conclude","anthropologists","inequality","biological","credited","peopleincluding","slrubenstein","travis","faggoty","mustache","fannyman","unionist","cockkkkkk","derry","londonderry","ireland","gayass","beaner","beaners","yourselfplus","pussyooo","lowliest","manit","lifethen","agian","mexicans","societyfuck","convert","dalit","arc","gritt","vandalised","formula","pink","floyd","bracket","nlers","nlersi","hiit","resolution","contentit","nevertheless","switching","wikipediavandalismtype","wikipediavandalismwhat","donald","albury","lighting","brickell","initiators","amateur","photography","tamar","braxton","clip","hitting","octave","soprano","whistle","registre","whsitle","destroyed","singers","physician","distrusts","carr","escalating","wpciv","kidyou","resist","snitching","minding","businessyou","reprimanded","recognised","pluto","merriamwebster","checker","founded","hosted","retardedass","corner","toilet","rightly","negress","genetically","average","amerikkkan","anuss","arsehole","embezzlement","evryday","oregon","turns","annoys","competence","brandenburg","merrill","wisconsin","witness","raeped","pendejo","dex","ammendment","legalizing","tipping","couldnt","enuff","talken","theyre","waaaaay","creep","orthodox","robe","nightmare","dreaming","quinsareth","effin","suuck","osli","deface","srebrenica","discredited","camp","participant","mackenzie","revisionist","belgrade","poisoned","equivalism","perv","convicted","disturbed","asten","bitchwelcome","ckckckck","tryin","queen","dunt","kno","wite","lyin","datz","sayini","maself","nite","changin","cpi","bettah","summer","frend","crip","niggggguuuuhhhh","zealotthat","agonizing","cured","minister","smiling","wilson","resetting","pretend","beeg","mooonster","poonag","verifibility","undoubted","uservintagekit","chicanery","connive","iridescant","furry","ottersex","ghetto","victor","cruz","evidance","taste","estonian","eated","grandfather","forest","creeps","enything","mvei","expecting","thatm","ki","ll","gladys","dreamtime","festival","whiff","stank","mama","fenian","bogtrotting","accident","trepens","epichal","conceit","humanis","chum","liked","reallyyoure","disappointed","balbo","petersburg","mumbai","chi","minh","flown","hahahahahahahahahahahahaha","nowit","priority","third","woodhead","tomer","witkacy","noticeboard","encourage","rephrase","lest","inadvertently","conclusion","bait","inadvisable","stretching","brush","troubled","pimps","adolescence","neighborhood","jackson","mississippi","walking","conceived","depite","wether","contention","gm","contend","pinski","drops","pawn","cure","refuted","decieves","visits","miltancy","pus","tattletale","construction","exciting","fackin","flake","sx","mcdonald","kindess","rpe","tuetue","nanobear","ting","changon","littol","fuckon","ideot","jossel","mubedeon","bettor","fixes","undarstand","reposted","puppeting","sassy","funk","commy","kroll","desu","yellla","treatment","dev","null","synopsis","therewe","cuba","contry","dominated","saidgirls","suckinto","jail","fish","cheesy","trannybangers","foster","antisocial","devout","gilliam","wakopedia","spaghetti","dealer","blowhard","righting","cancel","critism","columnist","column","edge","seperates","giver","adduce","sloppy","hilariously","shop","illuminati","niger","fukcing","shlt","paste","hours","mcarthys","gays","automatic","transmission","zis","ruskie","imbeciles","propagandai","sandy","queef","niggerlover","suede","sof","cluebotng","megizue","dreaded","walrus","greenman","jose","eduardo","santos","luanda","lpd","yxz","timbacktu","poorer","participation","ding","dong","escalates","exorcised","loving","crocker","lolzozlz","reediting","kisses","cuddle","lamb","tihnk","shii","maya","prophecy","fukkers","santa","fe","preemptive","sympathize","interpret","sacred","indoctrinated","academia","stitler","exaggerated","opinionated","jenkins","mayanist","agrees","appropriated","sony","ticket","popcorn","whoopee","jimini","cricket","yamla_likes_to_fuck_babies_up_the_ass_wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww","wheel","ultimate","abuses","accomplice","mischief","observer","ash","tray","ahahaha","halo","mw","cmon","chaoshi","aintcha","orifice","perceives","wav","goebbel","arrive","celebrity","foible","aw","mickproper","establishment","yoopeedooo","milwaukee","counterpoint","rhode","feature","rich","gated","comunity","hick","upstate","texas","progressive","eveni","birmingham","alabama","okla","homa","tulsa","eloquent","southerner","pickup","drag","recorded","salvation","achivement","psycho","wwweddynu","sadistic","orgasms","assure","wegetarian","ghost","filepacman","ghostssvg","texasi","canker","putrescent","vomit","deserving","profoundest","cad","monument","revulsion","sour","lemon","bleating","foal","curdled","staggering","mutant","smeared","richly","effluvia","offal","accompanying","insensate","blinking","meaningful","abandoned","puke","sired","species","ogre","malformation","barf","leper","fungus","dreg","insight","nincompoop","rapidly","skulled","hawk","beak","rancid","spattering","ocean","frothy","ignoble","queasy","convulsing","nausea","trite","weary","stale","unprofitable","grimy","squalid","profane","disgustingyou","unreservedly","unknowing","inexperienced","fisted","leprous","desert","rabidly","flesh","rhythm","moralsize","leech","emptiness","void","puerile","jawed","slapper","drool","deficient","lends","dank","benighted","unpleasantness","misery","smarmy","lager","woofter","pillock","grotty","wanking","oink","artless","apple","clouted","boggish","dankish","clack","dish","plonker","gormless","pated","churlish","boil","brained","clotpole","ponce","cockered","bailey","poofter","craven","dewberry","pisshead","cockup","pratting","naff","gob","gleeking","flap","coxcomb","bolted","fobbing","beef","witted","clapper","clawed","flirt","gill","breath","noxious","depraved","debased","despise","dehydrated","dimension","collapsed","neutron","singularity","blazing","mid","mercury","emit","galaxy","quasar","universe","primordial","bang","uncontaminated","physics","knowi","epiphany","deride","baked","unimportant","drivel","duh","snipped","constructing","creat","slob","nicholas","brybon","inshaneee","madre","acusing","sic","deem","pename","lmfao","wana","shite","ruddy","pecker","blumpkin","opposition","gestapo","goose","stepping","pyongyang","nah","mauled","flamers","abort","civilization","catching","jackaninny","usedo","panty","itnc","authoriy","pansy","yourarere","intolerable","dakota","sparsely","populated","tainga","kumakain","ka","ng","unggoy","manager","factualof","vandlize","fatso","hesitate","oven","piggy","whites","skibble","lazlo","bores","cordial","watcha","whatcha","python","hulkamania","tenacious","blocker","disciplined","deported","executed","wedgy","frenchy","sadcase","tigersfan","bp","parodie","spill","bodie","olin","beheading","ediot","gtfo","fgt","taht","liz","lizzi","corn","screenname","lip","awwww","arsten","privilage","shedding","tearcan","grant","sabotaging","obrigado","canvassing","ym","heaven","precisely","winter","palace","vulcan","ceasing","mistimed","adminstrator","tlak","presiding","adhere","giano","sustain","blofeld","needsa","worka","mannersa","darned","saws","twirp","navy","bullet","prosecuted","federally","seal","norfolk","clayton","pono","vagoo","laughs","crafty","user_talkpaglakahinkajune_","slow","attracted","chanes","deviation","_____________________________________________________________","noise","playa","recap","johnhistory","tarc","clusterfuck","detailed","attracts","spews","sf","glory","arrangement","hierarchy","vaginal","dischargewikipedium","governed","aborted","leftists","das","kapital","literally","figuratively","comedian","xboxcom","websitewe","capitum","nanny","ou","cougar","threatning","f__ck","wimpy","canadianlinuxuser","moms","thickest","thicker","leso","cyde","weants","forst","el","salvador","nicaragua","thiefs","suckup","atm","wetty","cupboard","downstairs","ups","dddeafbc","infested","tongue","polluted","houses","esc","exict","sendinh","felonious","monk","burried","berlet","hummor","beuracracy","seconds","providers","shyt","regulations","bourbon","lincoln","booze","sober","fartsniffing","oooohhhh","scout","burp","narramore","associates","dey","sickest","crib","wus","chromed","youuu","myles","petrol","letterbox","inbred","phone","bottle","lit","daniels","thru","sincerly","saturday","computing","output","io","processing","signal","nabils","aleem","ejaculates","plucks","nabil","retrieved","httpenwikipediaorgwikiuser_talkdawnseekerviewsuser","toolstry","beta","interaction","portal","toolbox","printable","permanent","modified","december","commons","attribution","sharealike","profit","organizationcontact","privacy","eja","goinf","snowskinner","cosmolog","thesis","ans","contributed","igor","bogdanov","refute","falsification","evidencies","ybm","acolyte","repaeatridly","occassion","oversteped","rr","evaluated","bidhonene","endeared","usefull","containing","serie","evidenscies","constiture","conspiratorial","deleeted","vnever","reinserted","document","voyer","infatuated","protege","intervention","rjb","acction","provocating","interfeer","differentiate","liking","admi","destructiv","retaliation","arbitrarious","arranged","illegitimate","mediator","turnbull","deed","snowsnippers","behaving","sabotor","vandaliser","riot","knoledge","refrein","comity","sowspinners","unlegitimate","stollen","recognise","boycot","arena","secret","snowspinner","unlucky","initiative","sens","responsability","maturity","evidency","confiscated","detroyed","disturbing","impert","sayed","bishonene","fr","leftcoastman","reaesarch","yto","cabridge","thnak","retiredget","chck","talibans","yuou","belly","frind","chick","internt","userarcayne","worrying","pictures","doingeven","emo","corspefucking","offical","gte","togethermeaning","negros","rewritten","gynocologists","pubic","failing","photos","reassured","uglybytch","jillion","swas","gifted","defensless","oldhow","pigyea","underestimate","admiration","isle","ballbag","irishman","padraig","pearse","connolly","clarke","sands","francis","hughes","spat","belittled","tiocfaidh","dickish","gurch","dusche","qwertyus","freeking","awkward","hearing","chart","artical","contradicting","blindness","puny","magnifying","eyedo","olive","horrendous","hazel","tendency","goldish","belle","clash","screenshot","zoom","merchandise","preseted","colorblind","verified","additions","cementing","vary","bases","eyesnore","beggars","empower","inapproprite","decausa","kurds","heterogeneous","thoroughly","joshs","languageswhich","studied","halcyseem","waaaaambulance","orgy","meetthemedic","meepthesheep","threesomeyou","tldr","errrrrrrryyyyydayyyyy","snjones","samirthe","gaybob","blcoking","adminastator","pandering","wilber","delude","sidewalk","httpwwwgiantbombcomrrocknriders","huggle","bullsht","autistic","obsessive","swalwell","alberta","fur","coat","pierre","salinger","kisser","lookin","naw","falashabeta","hackneyed","fks","inclusion","incidents","dunning","kruger","mabel","garbge","sorin","cerin","optimiology","squad","fookin","graeme","bartlet","stinc","hobo","fo","niiiiiiiiaaaaaaaaggaaaaaaaaaaaaaaaaaaaand","blok","nnnnniiiiiiga","gona","cusssssssse","gaaaaaaaaaaaaaaay","unblok","nnnnnnnnnnnnniiiiggggggggggggaaaaaaaaaand","celeb","nnnnnnnnigga","hammer","archives","crabby","vagnthat","mold","mould","beating","warrior","dic","coverage","sheppeywe","ganging","woofan","dubious","presume","injustice","posterized","hatin","dirtyi","mlau","irony","staement","hw","barring","undos","latin","numbskulls","castro","mongerer","chavez","weenie","solidarity","gobbler","occupied","joins","sooooo","sinebot","meso","azs","fkker","rushton","lynnyou","painstakingly","scan","desk","jaimes","jaime","guse","hiram","skit","daveryanshowcom","cds","viewable","reckless","inconsistent","shocking","feetboarding","louis","hotshit","proclaimed","douschebag","countless","mistakes","greenpeace","waves","onbold","cooked","swathe","rudimentary","eeverybody","obtain","sockpuppets","johnston","blabbing","jp","trilogy","titleit","contradict","lalalala","hunter","scalp","peso","indio","jonathon","swift","engineering","mathematics","universal","monopoly","aria","dari","persia","elam","elamite","rodeo","lyrics","heater","allemande","goof","handhe","imagery","plummet","placeyou","spitebut","harrassement","pathetictalking","crud","talkbacktdawg","ohhhhhhhhhhhhhh","noooooooooooo","clown","na","gaeilge","fuath","liom","soith","_","hans","adler","discrimating","suckish","seizures","abroad","fearing","discriminate","gymnasium","querfurt","sachsen","anhat","striving","progressivism","survive","rudolf","caputo","uncollaborative","unwelcoming","faced","backpeddling","co","polesmoker","chaining","intead","monkeywrenching","wrench","telephone","cleaner","whisper","hahahhahhahahahahahahahahahahahahahahahahahahahahaha","cookie","___","________","hrrassing","woken","huckster","perpetrating","anglia","gaywad","stophmmmm","thinkyou","frog","cuntyou","oxygen","wikiloser","jihad","palhere","hander","dumber","chips","goober","cultural","dating","shepherd","whedon","reasonyou","liner","klux","klan","ghirlor","rear","ample","preface","ratified","pennsylvania","scientology","homodo","buckley","understander","foreign","barbados","recognize","abkhazia","south","ossetium","recognzied","friendi","buttons","wayne","dawson","wayyyy","easily","fuss","excited","occur","launch","noteable","subnet","democratically","homosexualization","gratuitously","provocative","genetics","geogrpahy","calender","tradition","_beginning_","treacle","philosophic","righteousness","fantastic","graphic","design","historic","youexactly","dying","photographing","demolished","watches","mytalk","rambo","morrell","userfuck","vocabulary","congrat","glenelg","hectorian","cracks","bg","babel","flatter","patronised","ish","seated","ckatz","communism","difficulty","prickyou","timewe","clayworth","distance","strokedo","nadu","brahmin","permaban","motivated","cadre","imperious","systematically","withing","guidelines","simpson","dictatorial","arei","wholesale","referencei","disallowing","insufficient","locked","diminishes","vindicated","hindrance","hearty","verifiability","accuracy","flabbergastingly","jutra","msg","seth","potentialto","assclown","useredgar","shamrock","wipes","mick","peel","onion","spanking","underpants","calamba","wikiterrorists","duran","pacafistic","justification","behaviori","subjects","scatter","brainer","equelly","annoy","sitch","doesntblow","resolve","inevitable","scrabble","embrace","creatures","trait","invalid","misinterpret","outdated","inhumane","povpoint","thrives","apon","sides","eccentric","seperately","diffe","importantly","robots","leaders","favorites","knowwhat","embracing","enlightenmentdo","waved","injury","embraced","relying","bickering","butts","worsei","etiquette","ahole","chagedelete","aubernpilot","moore","tits","thee","lutheran","allida","akabor","lucifer","satanism","dumbhead","freaky","dumbassdo","anybodys","marie","luv","rv","unsourcedit","imdb","ruins","hitomi","kobayashi","httpenwikipediaorgwindexphp","titlehitomi_kobayashiactionhistory","spittle","jargon","visual","performer","decoration","newest","blather","newsflash","aged","clownyour","enforcer","updated","creed","idk","unreferenced","shockwave","aol","annoyin","biitch","smh","puerto","rican","dieeeeeeeeeeeeeeeeeeeee","silliness","wprr","signings","malta","cunting","supergabbyshoe","srsly","super","suchbut","ofweird","howver","smw","centrals","evangelicals","antichrist","fianna","hazelton","refactoring","suppression","generated","fiction","tombstone","malfeasance","gamalielraul","menwho","petulant","mongering","untouchable","answerable","bloted","lust","plug","rotten","violated","bandit","motherfuckers","fills","immense","terribly","sopcast","pkk","prepare","bawbag","bumder","moaning","spunki","miltiround","huskisson","ranover","deathwish","fell","hillarious","trains","unaware","beep","sigh","slurring","slant","srs","bizzness","jeske","couriano","stemonitis","botanist","taxonomy","dipterous","superfamille","yuppie","wikipidia","copright","biatchdo","hahahahahahahahahahhaahahhahahaahhahahahahahahahahahahahahahahahahahahahah","ahahahahahahahahahahahahahahahahahahahahahaahhahahahahahahahahahahahahahah","ahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahah","ahahahaahhahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha","seldomly","thatdo","jamaica","entitle","conviction","heavyweight","tire","persona","niteshift","widdle","feewing","corp","sometimei","tomorow","wuhwuzdat","hellbuswhen","wedding","haaaaaaa","nigg","kenyan","impotent","michelle","ouch","thatst","eyeballing","osama","laden","knowhe","mountainsthe","norad","mountain","van","tucky","vicious","jury","charade","heartbeat","forestgarden","stifle","favorable","aspect","portrayal","itsahappyday","philosophical","grader","amaze","palau","heritage","centric","antartica","columbia","snow","underpinnings","flimsy","nicola","colawhat","friendship","accidence","aee","ony","hideously","gate","keeper","hagiography","bollocks","bernstein","coi","kite","hudge","deflower","prepubescent","girldo","felony","zealot","apologized","makign","headline","ishrat","gujarat","accountit","salting","apart","burst","publicly","stranglehold","permissible","discourse","portuguese","located","httpptwikipediaorgwiki","brazil","opinoso","warred","monitors","frackingjniohndfngjifd","tio","ncfgh","etrjkrtjgrei","ifjvofgieroifgegjio","vjif","ijfggijsfdihbnb","gbfbjhfgiogfbhgifjhgifhnjnm","dejaun","butler","riddance","buggerize","cone","scrot","badgering","thusly","trauma","grenade","formatting","warningdo","f___","bahamut","gayit","twin","willoww","pillowp","separated","furiously","math","poetry","patrol","gee","statue","bird","pouting","extraordinarily","retardation","revieweri","snort","speedthat","needi","askin","questshun","integrat","sory","sumthin","posibly","wudnt","ansewr","wikipediaarticle","deletionfrasiers","crazier","frigging","piker","nkb","amy","roloff","breadwinner","kate","roloffs","jon","sheeple","exploits","hopping","eds","dui","wont","phire","changlc","jiang","orgasmic","honesty","adeputs","mechanicus","machine","warhammer","lemesurier","tail","httpsstorifycomdeltoidmachinehowwewonthejamesrandidollarparano","demolition","harrison","whitehouse","issuing","celebrate","yayyyyyy","hum","terrorize","terrorise","randolph","satterfield","fill","wretch","withering","beats","noob","furnace","heat","populace","behead","mabuhay","vandalismo","image_flag","moroccosvg","thre","morroco","saharawis","rejects","insititution","cocaine","overdose","snorting","valencia","uve","catalan","valencian","alivewe","imperialism","absorbing","senyera","aragonese","wikishit","stupidly","wackpedia","anally","mujjahedin","someonethey","il","dollar","civilan","cassualtis","charateristic","brothers","wright","socket","potto","chap","conspiricy","armstrong","regarded","totalitarianism","needing","hrs","muppet","testi","inand","neckbreakernot","tkogot","resuu","extrememly","damaged","cockyou","adress","secondsi","revandalising","incestuous","westboro","cram","zomg","choudarys","radicalizing","adebolajo","beheaded","londonthat","tabloid","pagejust","mumbling","brainwashing","wheaton","wary","deny","dreams","donner","souls","tourism","sanitized","sealed","kazakhstan","aes","zambia","httpwwwaccessmylibrarycomcomssummary__itm","woooooooooooooooooooooooooooooooooooooooooooo","smokin","lesbean","lezbian","woooooo","woooooooooooooooooooo","woooo","lalalalal","lez","bee","ann","lalalalalala","woooooooooooooooooooooooooooooooooooooooooooooooooo","hoit","wo","orld","anywaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay","crackit","scorn","sing","lalalalala","pecie","lallalalalalalal","lezzzzzzzzzzzzzzzz","beeeeeeeeeeeeeeeeeeeeeeeee_annnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn","kathryn","seeks","negate","boost","funded","pac","propagandists","fraudster","kitty","patriotic","mop","ilovedirtbike","washing","dishonesty","religiouslydelusional","bunrtsource","arrghhim","auspice","regression","technique","convered","comprehensively","wikii","flagrantly","breaching","tatter","moralise","stir","rebuild","unt","spiketoronto","rcp","fetched","crok","merits","wackier","textypu","fucken","spook","zealander","pack","agnes","nitt","nitthe","innit","hurl","enhance","punish","wikid","magnificent","misused","outrageous","srong","fulfill","rejecting","hardly","prosecutor","brief","condoning","tolerate","achieve","sitush","higlighted","sudhra","khastriya","flower","backup","ramona","chelski","reasoned","pigheaded","boringly","repetitive","weighed","photograph","shrill","incivil","girlfriends","ditz","tyrant","belfonte","drakhan","zad","paragrapg","nuthin","closet","jewboy","dreadstar","littlemountain","downtrodden","commoner","laws","scurvy","confidence","inferiority","inflicted","nobility","preservation","adjudicate","loot","hiriji","wpnothere","assharry","margereat","swoger","computerdo","invent","grasping","definitively","prefer","ham","factually","dill","niasnasdasldkaslfjlagfla","noticedit","gratifing","enraging","crackpottrollcontent","perverter","rational","hysterical","ordinated","chewing","apr","kennedy","ssx","baker","dubius","margeret","suckley","infected","actress","ignorantly","gringo","hugo","amigo","mcmap","pog","marine","corpsdo","corps","recruiters","grunt","battalion","corporal","mci","crockspotyou","duol","poweronly","eleemosynary","enabled","bandwidth","disk","spacewikipedia","coolitude","kinghy","stupidarent","ferrari","felipe","massa","injured","mindbogglingly","editorial","superb","ants","teagger","teabagger","teabagging","shortcut","rationalising","lonnie","frisbee","sinner","welli","acitivist","notturned","phenomena","cuts","seens","recruitment","crikey","inflation","myths","alkivar","elitism","ideas","leavin","chrisgriswold","loosei","smash","bros","net","retiring","salutation","emilyn","squintey","greaser","filmyou","mario","raintheone","bundesliga","beaten","heyst","snopes","session","duuuuude","mooreon","tooooo","tattling","shitgarbabge","shitsville","mayo","mujahedin","ceric","rei","specielly","comed","bosnian","croat","elizabeth","neil","edorse","illuminti","sponsored","phony","moon","cadet","rifle","merged","fcukin","httptwittercomphoenixreporter","userzhanzhao","wahahaha","prank","analdo","gosh","experimental","songs","muscle","ant","medication","rite","sighso","scaredwhat","goodth","tonite","randomizer","meanie","ferret","dumbo","barney","naylor","thriving","bespoke","libertarian","grind","gear","sacrificed","diu","lei","lo","numbnut","grotesque","chopped","whallow","cnn","zapped","multitude","badgehuter","speck","quo","singular","badge","accomplishment","slapped","babies","bcad","crapit","bcece","referenceit","espicially","recieving","analingu","vulnerable","spiteful","cuntesque","wankbagness","genuine","implore","bowel","jacob","magical","leprechaun","schould","ktjackson","wise","pascal","creasy","pye","grisly","martyrdom","officialness","preclude","wprfup","powder","sarcastically","salary","gist","starts","notify","feck","evasion","impudent","shameless","tries","bullheaded","evolutionist","evolution","kiwi","creator","boos","wpwaf","guideline","mickmacnee","defensive","repated","selected","obfuscation","interuption","deafness","agressively","disagreeing","hindsight","predicted","commented","jeppiz","storywhy","ksstm","heated","offriorob","nastiest","repugnant","observationsjeppiz","assumption","alastairward","rant","diffs","routinely","resorts","abusejeppiz","routine","alistair","provoked","package","sustained","tendentious","oblige","mickmacneest","grsz","mce","contributions","vague","behaved","deadelus","worng","porch","trace","beach","tard","hm","decree","lumbago","howz","citizenship","foolishness","martian","landed","alpha","centauri","parley","apache","sioux","scalping","spaniards","hispanics","hispanophones","mayan","aztec","shamed","spaniard","latino","indigenous","pendejos","gringoit","asians","oriental","yanks","cumming","cumdrinker","ukrainian","monstrous","upa","demigod","elderly","familys","cuntface","unreliable","paschmitt","tj","champ","ramp","gon","bam","boom","cuntlicker","scratch","sticker","zanetti","confetti","joy","uncertain","breakfast","retain","godking","_______________________two","later_____________________________","prevailed","userrettetast","contains","imagethe","ensamble","gurrufiojpg","orphan","toddler","declinefucking","bellend","blowjobs","sub","reinstatedi","wgungfu","liardo","userpascaltesson","universite","laval","therethat","pointit","factit","positiveit","basketball","acclamation","waltz","demonstrably","opening","acknowledges","defeats","wikipediachemtrail","freeman","oppressor","moose","inbreddo","mooose","rugby","culturally","bullcrap","personnel","tysonk","blockader","ease","subversive","paine","jefferson","minarchist","whereby","equality","forefather","alexander","madison","anarchism","congressional","lynched","impeached","mutually","subvert","overthrow","maoism","bockade","hmm","subverting","dictatorshiptotalitarian","baited","paing","unanarchistic","socialistic","intangible","duck","anorexia","nervosa","misquoted","flippin","fruitcake","bardstown","bent","folklore","disambig","crapplzi","timesgo","referencesthank","hypocrisyi","mentality","aggressively","scrutiny","doubtless","inconvenient","consistency","anomosity","thisi","feud","granting","jtkiefer","unike","denying","moniker","blooming","xerces","advocates","cleansing","jews","judah","samaria","gotsta","challenges","oj","eww","ewwww","peee","yewww","bath","fleabag","wendy","mercado","ruth","alcoholism","dyer","eddie","deverve","payback","kingpin","dooche","remus","remu","larry","sanger","cshhh","carnival","rio","nutted","generations","meddling","yalma","mrivera","kudo","dar","assholei","aobut","edison","shitu","yr","brainmjohn","wrestleu","bitchdidnt","wrestle","wrestlerp","favourite","blockd","nowgot","donut","hogtie","allied","pigdog","auschwitz","entente","riding","outi","hangs","heap","pony","zima","httpcommcoloradoedujacksonjresearchcoonpdf","ryantheravensfan","mans","vaid","substantiated","lucki","fanovian","nonexistent","everyones","incapacitated","shoopsywoopsy","brutal","forbidden","glitching","nerds","liek","idiotit","leaker","nighty","bigpimpinbrah","pimp","hindering","beliefs","hijackers","glorifying","mtv","bollox","hicks","president","nuke","ludicrous","paints","religonist","generalizing","atheists","decades","adjective","ohare","generalized","applied","perjorative","stereotype","ohares","carlin","jakeyboy","evilameoba","hearby","learnt","homosexuals","viscious","wolfy","deluded","pd","basicsyou","specialistyou","gp","plainly","dated","youi","parkinson","biochemistry","matchbox","conservatism","obsessionyou","herei","nm","itd","happier","turdst","kee","conscious","rocess","aonia","utilate","ake","oen","ull","colon","asturbation","disose","deositing","du","dishonourable","bombard","traitors","raving","absentium","replies","imp","dudeyou","walt","bullshido","swell","omni","postscript","downor","dope","heavier","scarian","obviosly","listening","comunist","pinoccio","pussbag","douching","faggotry","beforehmm","womantheir","traitor","width","bunched","dony","fabrication","bignole","alientravellers","assed","sniffin","megalomaniac","stuffed","fewer","abf","fuckingabf","diseas","misfortunes","servant","property","whomsoever","wth","spite","protestor","unarmed","posing","revolting","assumed","misread","chemistry","refuting","typo","summit","gavin","teamed","blew","inability","deeply","kahbepa","proposition","uncut","terminally","fuckstain","lorry","doubtful","wannabei","mastered","izak","glenfarcla","geeky","suffocate","sadness","upthat","deforimity","deformityi","nonsence","reposible","acuse","fanny","biggus","dicku","paedophile","hooooooooooooooooooooooooooo","linuxbeak","passable","informationit","cid","guoguo","unwillingness","suppressed","stalinist","hezbollah","deceive","hayson","emailed","announce","bypass","rarely","delve","shennanigan","gulping","fuckturd","goshdamn","couldd","stab","sponge","butcher","knife","rethink","snot","nosed","ears","randi","overcome","powerrful","strategy","phenom","underinformed","soooooooo","largest","interfere","pillbug","worries","stops","existant","quiteunusual","hog","mothyer","fukin","twink","stone","fetch","jerusalem","captive","rheumatism","opposing","foulmouthed","blanning","acme","thanker","tear","indicated","detractor","personalised","youn","fes","eco","mechanicscom","ypou","gey","brah","trpod","administrate","fuccin","cryme","robin","hood","yue","fei","jumong","zhou","tong","accepted","centuries","biographyso","archer","httpwwwgooglecomsearch","hlensafeoffqthomascannonhomosexualitybtngsearch","imply","tiresome","laziness","sexualitypenis","silenced","unacceptable","hamish","tc","fagboycan","obtuse","butter","toast","oyu","nixon","mumble","sojambi","pinola","wink","witty","soji","chuck","indefblock","templates","elonka","objection","sinhalesest","blamed","militancy","astr","nny","ebonism","nativism","arabism","ethno","dearly","uninhibited","jolin","luo","zhixiang","hop","embarrassing","thoughdiskindofsexistracistcmntokhere","wmfdapits","agk","bluerasberry","throbbing","qualified","pickle","farty","pikle","pinapple","bathrobe","brassiere","mustach","distant","warty","sikh","rss","sponsered","finaly","outyou","walai","speakswowmy","answere","matry","baptized","khalsa","fuker","guru","granth","sahib","fukersikh","himnow","religionit","creepy","delusion","hayes","seminar","disprove","whipped","aredo","ashida","op","dental","uni","tightass","inference","preist","password","irc","channel","torrent","referrer","sickfuckkkkk","vegetarian","reinforce","formed","aest","morro","entrenched","deepest","emails","weilding","trident","unloved","recluse","reichous","quirky","quip","rhetort","reestablished","superiori","guessing","keen","steezemuffin","combination","spelt","steeze","muffinis","dandy","nederland","communistic","socialism","tor","aeropagiticayou","kiddodo","patronise","likecocksucker","makn","rsponc","nser","madder","moderfn","diva","entourage","dustbin","hence","wikipediawhich","wrongly","sleaze","payal","rohatgi","audacity","depends","wpdispute","scribblebook","bothers","sleazy","referencing","spoke","ironic","scribble","carrying","illusion","idleand","pedia","withdraw","overo","akeran","managerarc","kuru","depending","hoot","loserqueen","fishing","closing","tbr","boxing","boxingyou","cap","httpringtvcraveonlinecomratingssupermiddleweight","wbc","varies","httpwbcboxingcomwbcengchampions","wbo","hypens","httpwwwwboboxingcomourchampions","httpwwwtelegraphcouksportothersportsboxingjamesdegaleclaimssupermiddleweighttitlewithpointswinoverandredirrellinbostonhtml","httpwwwindependentcouksportgeneralboxingandredirrellvsjamesdegaleonsaturdaydegalecanjoinbritainsgreatlistofsupermiddleweightchampionssaysstevebuncehtml","fyiboxing","hasnt","unusual","gald","irwin","timothy","treadwell","dpak","dsuza","serving","mull","unfounded","polluting","finneganw","bookworm","queir","bate","ottoman","cherry","tertiary","estimates","sentiment","kerr","barrel","shotgun","punch","concrete","obsolete","saved","douchecock","doubly","bubble","squeak","prolly","breaki","penised","mao","deng","ensures","mainland","worshipping","gangsters","voices","fcuken","fcken","deletesd","mothe","dinnersorry","heraldry","inline","specificity","bcn","sia","discussionst","undowar","avionews","rumourit","milan","siai","comercial","officer","inmediatly","cancellation","fco","mxp","flight","traspassing","moments","italyuk","relase","dennying","affirmation","informations","twicked","codeshare","alliance","partners","refered","referenced","bonomi","puntuation","urge","mauritiusxxvii","thenationality","ca","wizzardk","humour","mifter","defaced","fodder","gung","mice","nu","austin","interview","gayis","otheri","vandlism","challenging","carbon","warms","atmosphere","katrina","worsen","mediterranean","tirelessly","sabotage","savagery","devolution","pettiness","astute","flawed","propagandistic","afrocentrist","voodoo","mania","steeper","price","fagging","squad_","greeting","wassup","wwwwikipediaorg","eli","nickname","anusdo","researcher","interpreted","dastardly","fascists","listyou","fornicate","haz","questionwhy","johnson","manipulated","bleckter","ortho","blecker","editon","chess","manipulates","percentage","increases","reach","cheap","gareth","assyrian","banter","substandard","htf","losers","idc","dedicate","harmed","apologised","bls","ours","diffrent","fick","dich","nissim","cahn","vandali","welcoming","gil","proccess","chabad","quoting","rebbes","mashichist","domination","washington","carver","sniping","dood","gothere","guysi","webcam","snipe","hopes","donating","memory","consist","buggy","refresh","yiddish","citizendium","anis","hetar","licked","push","httpwwwcnncomcrimebarracksdeath","theredo","mised","chained","haxxring","userfcytravis","fuse","andfuck","purchase","moscow","barber","unsw","homophobe","vandalismit","phobe","merry","constantine","offered","substitional","unselfish","malfunctioning","penny","archivesyou","fuckyourself","wikiwankers","throwaway","experienced","shameful","attributing","basedo","editit","rhino","titty","girth","flaccid","kg","lostprophet","answear","asscake","ahoe","mothr","wikipda","badwrong","a_hole","fcukr","sht","introduction","cia","mute","gnaa","unfunny","verdict","unoriginal","highinbc","wag","epal","ahh","kung","sayo","kang","makialam","bida","naman","bagay","amanda","platelli","hullaballoo","sharp","critical","attackdo","excessively","lestrade","wikippedia","renamed","wikiprostitute","marring","manz","dlckhead","dlkhead","byei","boomer","bog","managua","armed","robbery","goin","reproductive","toxicity","gerry","wikipediain","newscandidates","downright","defamation","arguments","positively","faulty","consult","objectionable","mikhail","tolstykh","fishy","naive","sirtaki","hound","aranea","mortem","reward","exclude","economy","crapper","unemployment","infrastructure","crumbling","niggardly","userhabsmtl","practically","habsmtl","pt","logo","komin","kerry","gore","billy","motherfuckin","mayes","fredinburg","shoulderthat","motherfuckeronly","dhoom","creditif","liittle","wigger","raper","woot","misterwiki","talkmisterwikis","fta","icelantic","iassume","basin","tandem","trashed","technocracy","gino","thwarted","foiled","meddlesome","escaped","butros","crum","awaited","triumph","secured","dominion","struggle","clap","jewel","bedecked","scantily","clad","dancing","galactic","harem","accursed","vessel","melted","slag","artisan","towering","larger","grander","toppled","pinning","plinth","throne","ballroom","celestial","gigantic","tarp","unveiling","captured","traitorous","spaceship","evader","immobilized","geo","stationary","merest","activate","astro","detonator","assembled","billions","fireworks","butronian","helplessly","strapped","titanium","manacle","projecto","gallant","seized","chapman","sidekick","gorge","ecstasy","discharge","fang","carnivoron","walled","releasing","agony","witnessing","writhe","blasto","robo","legionnaire","displayed","repturova","talurnian","lizard","betrayed","weissus","valkyrie","platoon","julian","hypno","scepter","darling","tumble","seductively","writhing","contorting","viewing","lowered","kown","linda","mack","sinister","neh","heh","trumpet","fanfare","orchestra","andwhat","newly","rebuilt","iv","emerging","gangplank","herelf","activated","bursting","shrinking","transmut","bracelets","concealed","swings","mace","smashing","torturous","device","kazak","magneto","shooto","beam","awaiting","suspended","emitting","telltale","spark","android","drat","mannequin","decoy","aiyeee","helm","dive","bombing","billowing","everywhere","kaff","choking","fingers","teenie","appauling","scrupple","whophd","shagged","chaser","assertion","tripper","wnt","gloats","sanity","asigned","patheticis","drank","salvnaut","dearest","baloney","portia","gibbons","producing","ffffffffuuuuuuuuuuuucccccccccccccckkkkkkkkkkkkkkkk","yyyyyyyyyyyyyyyyyooooooooooooouuuuuuuuu","milk","actcount","miutes","wikimark","enlightening","crated","someting","scokputter","tempt","imposible","donation","fund","wikia","pockets","bessemer","beneficiary","wikiacom","adsense","invested","venture","retail","siteis","imdbcom","wished","invest","hospitable","fascinating","investor","sycophant","altogether","hurts","faggt","ccksucking","whres","ckthat","retract","cvnt","sandra","atlant","spectactular","superseded","vat","gungadin","userbungle","phoooee","hun","buggered","redirection","players","walter","gordon","neilson","willie","crock","overuled","robert","reversed","biographies","tojo","uuuuummmm","probly","gayest","ungraceful","dignify","gossip","sonisona","dammed","potty","quah","bonsai","extraordinaire","britannica","websters","gook","suckspeople","bein","fuuucccker","definitions","sequitur","verb","ways","latest","persisting","disconnect","permeates","andy","assessment","raise","direction","brokenit","psuedo","karma","meatspace","genki","penissmall","airman","ltc","mormon","dougweller","canvassed","mzilikazi","haploidavey","debase","juvenile","homie","bread","balonie","moonriddengirl","americans","tabst","spyy","americqan","pfffftab","ferguson","cowboys","molest","cashier","youamerican","iditos","thisalredy","paria","tabi","publication","aaaaso","perp","shooting","boomerang","aaaaai","upsssshe","alll","invading","aaaaaups","ukraine","defenseless","bagdad","onlet","hunting","complains","hamster","rodent","cemal","gursel","tickled","weaker","urs","abot","abit","stoping","tmi","maniac","proudly","mag","acquire","evolve","occuring","sl","pedophilia","sc","revisionists","germans","delousing","chamber","louse","zyklon","holocaust_denial","shaving","stripping","concocted","offenses","synthesis","wpverifiable","wpor","sabha","ideological","sikhism","accepts","unorthodox","merit","cyberspace","jacking","fegget","idiotical","mongolical","faaaaaaagggggggggggggyyyyyyyyyyyyyy","oyuy","pooing","encylopedic","intentionally","delves","journalistic","endeavor","sentences","outline","clarity","autism","cold","asakawa","clarify","playtime","user_talk","stress","ceviche","idiotswhen","reacing","blimey","stuptarded","fecal","matteri","gayboi","wikijew","immediatly","aggrandizing","spic","grotesquely","kirstie","alley","resistance","monarchy","pants","jamal","ovens","whats","allows","thretening","ergo","problems","paladin","circular","directing","testing","brains","splatter","cansee","soem","restraining","romance","flyin","extremist","fascism","bogusnone","doubts","canderra","titleche_guevaradiffoldid","goneand","metalk","faithcanderra","dicipline","frontpage","instituteare","blogs","millenium","wikidan","unknowningly","sachin","lokapure","blank","rescue","burgz","schulz","ce","vadalism","bc","overreach","misnomer","rossp","doper","childrenfelonsfeebleminded","peoplemoron","smerf","favored","treating","wrotei","hammered","tripe","picka","machina","extended","sextion","discredit","eradicate","blonde","muffin","hopefuly","ideale","runes","nordic","eradicated","awwwwwwww","fuckknuckle","httpenwikipediaorgwikiwikipediaharassmentwikihounding","walnut","paneled","clamp","perspective","cursory","browsing","reveals","disagreementviolation","tenants","newbie","initial","frivolous","mfd","stonei","endorse","airplane","dash","hotree","ummmmmmm","title_israeli_embassy_attackactioneditundoafterundo","carbomb","harmless","nights","alias","woomoobs","theni","slammer","motherfuck","factory","casual","tubby","chub","chubby","mcghee","marrigold","broke","ate","nawliwiki","toucher","ingorant","destroyyou","ptptpthtphthpthhhhhhh","ftang","oxymoron","drippy","drip","shaved","scrotolicious","bumble","preserved","civilian","memorial","plymouths","su","forces","plymouth","dedicated","troublemaker","tryptofish","charitable","sperging","httpenwikipediaorgwikithomas_dooley","httpenwikipediaorgwikifrank_klopas","httpenwikipediaorgwikiearnie_stewart","precedent","yahtzee","spank","notit","rightthat","ahs","fuckingl","descision","stopit","boychik","apocalypse","ambiguous","coast","hellst","fece","cyrus","hump","secretly","brazilian","fuckyou","wowjust","delenoy","pwn","coma","freight","ferocity","grundle","waltmanist","toho","clarified","positions","positioned","zlykinskyja","objected","reflected","follows","gauntlet","unreasonable","pineapple","assyou","surgery","mking","towikipedia","crp","psychopaths","creamy","dried","saggy","crusty","sweaty","unacurate","rampant","tu","es","dull","distrusted","vagrancy","elegance","chariatable","usercfif","chariatible","dumbie","mwahahahahahahahahahahahahahahahahahahahaha","unblockreasonliar","signaturedo","perezhilton","arabian","hereby","gian","hondasaregoodsez","teen","pintobeanerniggermexican","imposing","rabid","blogjust","hereyou","familyst","eyeball","viscera","limb","cauterise","heartit","vandalisim","meme","ton","bricks","hive","smoek","weeed","cumguzzling","httpenwikipediaorgwikiwikipediasuspected_sock_puppetspalaceguardusersumple","illustrates","wikieditors","ridiculousit","laughed","schoolwork","diot","demonize","sovereign","capitol","reek","semitism","diem","companion","gayer","undated","thx","heya","jayg","favoring","laureates","judaism","cunning","sombody","cockpussygod","concedered","fcc","tanaya","reviewing","digress","wale","huffed","impatiently","simon","clicking","shook","deja","vus","thatthat","protested","cargo","boat","muhammadan","cunti","albino","defect","cave","diedo","capitalist","vs","mortality","poorest","presentation","paaerduag","hypocrit","passionate","headstrong","haters","gush","blitz","stark","sole","kiran","lovers","pencil","bell","provider","wikipideian","headache","brickwall","qaedia","spami","osmosis","yakety","yakhere","gt","gf","gpu","httpwwwtechpowerupcomreviewsasusgeforce_gt_imagesgpujpg","continously","perverted","fuckhole","cried","bwahhahahaha","pimply","nag","romanian","gainer","cline","printer","toner","cottonheadednittymuggins","tripolis","hecrtoian","standart","oversee","istanbul","monuments","pogrom","plates","veremis","masscre","fashist","tespace","wher","criticize","requirement","policies","waffle","approval","scam","specialisis","semites","stormfront","supremist","linkage","whilst","strapping","bombs","focus","oppose","ty","herself","vehement","islamofascist","whoo","vandalismi","omfg","dale","glen","msnnow","followingon","oreilly","factor","jacket","jock","httpmediamattersorgitems","dragong","hammeryour","penisgateshould","httpnymagcomthecutyourguidetolennykravitzspenispiercinghtml","shoo","obsess","unhinged","grows","desensitised","willfully","terminated","usergeorgiawikiwriter","ymblanter","jaqeli","uuuuuu","sheriff","patrols","uuuuu","turqoise","placing","agitated","menow","scherer","spyware","darwinerhe","sockpuppeting","disruptively","unwelcomingi","bol","tif","jut","dibo","branded","tancred","seemed","exclusively","aiding","ehinger","erroneeouslly","footballsurely","neccessity","marconi","franchisis","clubspart","franchise","egqueensland","roar","marketting","premier","exemplified","chuq","soccer","funnilly","userchuq","userdibo","usertancred","accusatry","resuming","bogged","usefullness","warrer","heshe","wikiown","jeet","intuition","beside","chace","livescience","europeanaeu","httpsenwikipediaorgwindexphp","titlespecialasearchprofileallsearcheuropeanaeufulltextsearch","ramanatruth","blanked","verbatim","ramana","zakusage","owns","filing","toolbag","abortion","limbaugh","pakistant","cau","newb","olahu","harrases","moreover","abid","attacker","fromi","dole","boyi","couls","moma","gigowngnognronwoigwnoirowinowrioirwnorwoinrwoingroinrwoingroinoingwoingoinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnw","manga","evreryone","itor","jetstreamer","midazolam","alfentanil","synergistic","voluntary","respiration","intensive","mechanical","ventilator","adminsitered","nhs","ward","builds","morphine","twitch","nurses","inject","toss","fits","aussy","sabbathdo","sabbath","informationi","toni","iommi","hardheavy","kwwwwwww","youp","lastly","dontp","futurei","outsang","reworded","differently","fuckass","claymort","nay","thrice","lunch","trojan","slippery","eel","shrek","mission","stunt","rope","underwear","thong","pinocciotom","mmmm","tanstaafl","ymmv","wikitheclown","ibanez","userhampshirecricketfan","comprehensive","championship","yorkshire","quotes","evoking","disscussion","fdny","helicopter","pending","diminish","tarnished","pussbot","cannto","shudslavpu","knowledgeable","chng","kutcher","knw","trooth","againsmatean","fuckinill","winnar","wieght","uniployed","pist","slimebag","fuckign","calvin","editi","cooperate","cherokee","workout","reaper","bsatard","nibble","salvio","suckeri","offff","dickbag","muyou","ch","plagiarism","plagiarized","umpteenth","censored","cash","neurotic","hideous","repeats","cheat","ranking","skylarkdonot","manspaceman","spiff","manhe","accontmay","hojimachong","insulant","batty","jonathan","pacheco","appropriateyou","downgradedsnap","buuuuuuuuuuurn","motherfukkin","homy","kidnap","homophobia","preened","gentlemanyou","weeny","zappa","sicilian","sicilianfrenchenough","becausehe","heaaaggggggghhhhhh","mc","freakypiko","santanos","headadaaggggghhhhhhhh","deceiving","foung","lolst","notbut","greaterserbian","suprised","serbsyou","logging","norse","maximilian","delited","californication","literacy","mer","eurozone","otl","annoyance","piussing","blockeddo","performed","expedition","classifying","largely","summercamp","hysteria","limped","dicked","libtard","fuckbag","httpenwikipediaorgwikiuserraul","roz","lipshit","southern","headdo","goth","coon","ortiz","rhobite","emphasisi","slightly","historically","britanica","magnitude","naziism","amateurish","scholars","designation","linder","arises","skewed","victimizing","supportive","aspiration","meantime","petrikrohn","misinterpreted","puzzling","specious","humbug","unmaking","pawlenty","whitewashing","litterbox","muffling","tosh","guzzle","controvery","firm","exists","diatribe","denouncing","formatted","hereyour","moldy","seat","rb","morgans","spiced","rum","srnec","blunt","judje","unban","talksnowolf","feelings","portugues","armchair","deputy","usertenpoundhammerten","pound","chaanging","haloperidol","aluminum","foil","helmet","attacki","cooldown","danke","repent","trinity","gilabrand","freind","tyo","rename","maize","conversion","refernce","converting","arien","brotherhood","beforewho","thinghe","rjanag","suppress","kadeer","utmost","junky","subordinate","prat","battleground","bowing","blooded","unusful","vine","sets","divine","farting","unattractive","ned","cck","tasks","televised","handicaped","intentions","copulating","vulva","mwahahahahaha","fer","alf","zhanzhao","blackie","rodullandemu","pudding","rod","busily","collating","southhe","gadget","spotty","pondi","blighty","afl","pose","tackled","incapacity","sonny","funnyi","security","dashi","trawl","quiz","circulation","boast","enoughyou","bleed","propagandhi","bong","fings","republicanjacobite","tis","cospiricy","patrolling","orderly","guise","arrives","unvalidated","microscope","nuisance","mocking","holla","cites","cole","goddam","scary","atl","crushes","screan","reimageaotpjpg","encyclo","mote","yiff","buttseks","noi","andi","earsex","hadith","mohammed","sallalahu","alayhi","sellem","esselamu","aleikum","rahmetullah","discrepancy","etymology","athiest","leanr","thankx","punitive","malleable","novice","cared","vaginitis","ventilate","pervasive","odor","lingers","threatens","halt","luna","satin","trevor","tred","workscroll","__","oooooooooooooooooooooooooooo","ooooooooooooooooooooooooooooooooooooooooooooooooooooo","pacifier","farther","dignified","napoleon","pornyou","quaking","wog","youwhich","dontbut","allrocky","hartung","sourcedi","worthlessi","brad","wikinazi","reasoni","manic","graah","seb","rudely","resent","corbett","lavatory","koscheck","meansso","admintor","planning","itcheers","dynamite","weakit","par","unification","jones","michalczewski","nothingpaper","rightful","holder","wbaibf","belts","anyways","hbo","vacant","interim","tiozzo","relinquished","rocchigiani","httpwwwboxreccommediaindexphp","titlefight","jokewhenever","nuisancedo","sticky","knockin","cha","firelol","balcony","swimming","flamesno","jerking","cats","fucin","kremlin","shitted","dig","_____","knicker","kev","defacement","roflmao","xaidenx","bureaucrats","promising","stagnate","downhill","narom","unpleasant","harasser","carter","contestion","shoed","await","disability","mudsharking","ahahahahahahahahahahahahahahahahahahaha","blockworthy","thenyou","gorilla","gnat","retaliating","werent","undder","pakistans","doent","inequivalent","rejoice","orangemarlin","sakehave","conway","desperado","rsvp","closer","aside","duckish","awwwwwww","peacefully","anyware","dweeb","agreethose","spoil","moviesall","awesometwist","endingsso","blackthat","disconcerting","misandrist","wantedreef","blowertea","treedome","aired","scott","daedalus","cyberstalker","fggot","watchful","announcement","fgget","cyberstalking","unemployeed","horray","fuckwad","thier","danski","vandalists","casualty","warplane","libya","reports","concidering","coalition","cencoring","agsman","digusting","yoself","boifriend","wen","babya","septmeber","lollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuudddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd","kilt","lifter","wooden","ship","vandalization","cumfart","vandalisiziation","reasonning","halen","mewhat","powerlifter","stronger","anytimedo","imporve","waitjust","usermasterofthesky","yknow","instructing","instruct","beforeit","bygones","sig","birdbrained","garble","ripping","rzz","standssuck","hotdog","comply","lyden","pompass","aubrey","puberty","aboutdo","girlfriendsomething","liveif","dweller","wpnfcc","commentary","respective","derive","destroyer","exterminator","zest","annihilating","tireless","station","nothin","asyriac","qamishli","arminian","hut","dwelling","cultivation","seed","plato","aristotle","philosophy","archimide","heron","brunel","redicilous","lucasart","copywright","nbs","haven","deciet","homsexuality","isa","irishlass","voo","sung","asshles","asshle","outlawed","apothecary","montepuke","plague","nostradamu","fought","intelligencia","resale","narration","lemonhead","insolent","offi","pimpticon","changeing","miller","continuous","supprort","cour","praire","thios","beahiviour","fanatick","doll","diplomatic","missile","coal","burner","discourage","consorting","intensity","functionality","workshop","nfcc","iw","invisible","hammersoft","methods","firmly","borg","truculence","grateful","effectively","requests","stays","implements","realdealbillmcneill","fond","ruthless","aggression","extension","categorized","snitched","belinda","renounced","woodbrooke","rossville","addressdo","rockstar","moldavian","republicthat","dammned","dniester","roumanian","stream","transformed","upson","clark","lindsey","tully","starters","reminding","userviridita","cables","leak","purge","isi","shmucky","kilrathi","sivar","milleseconds","jewfat","stub","quasi","humanistic","undoubtedly","treats","denier","cream","variant","freemasonry","possess","manipulators","holdiiiing","holdddiiing","heeee","hoooooo","judeophobe","peterklutz","vandelised","occured","youngster","basij","paralysis","rajavi","pantywaist","bra","ye","exterminated","methane","dioxide","rebuilding","twins","pairs","benefiting","numbskull","vegetables","affirmative","aaliyah","stores","interfering","generous","hunger","singapore","fellating","proverbial","vengance","indentured","servitude","growth","bloodthirsty","beseige","engulfed","fiery","stairway","crash","frown","swarm","locust","devouring","fabric","bolshies","grain","requisition","carried","disincentivizing","production","famine","fallow","davies","falsified","disinform","gothicspunksbrit","suicidal","melancolic","panic","discocris","angelmcremily","strangetim","moviesafiallan","poe","bookskat","dhimmetalcore","bandsthe","curenirvanaplacebosadnessblack","upshaggy","hairstyleandrogyny","disco","ungrateful","dutch","islands","civlized","nuked","fucck","wateva","diick","blogsd","profeshionall","sinn","tymonr","patton","hotel","fifty","overheard","shine","enjoyit","prejudices","lrnbakebread","decroted","reportin","iight","nawmean","grass","snitchin","bitchinyo","rhyme","uayo","articlebut","particlewhyy","thati","burger","kingdeltedin","thingayo","kiddont","niggaand","pooper","greesy","cornur","diarea","barn","upping","higheest","deliberate","satisfied","broad","republicanjackoffdyke","recreational","haaha","unpunished","sabu","violenthe","steel","chairstriple","moonsaults","tableshe","coud","som","themhe","taughtby","uncleand","bombayindia","metallica","fresno","commonly","norcal","omb","educate","richter","marythat","worthwhileit","clooney","stephanie","repulicansodomite","practicing","rona","pizzazz","giles","orders","bombay","idiotu","stfuhe","michigan","stupidhe","indiahe","americanif","bombayull","davis","machida","hugging","unblockreasonyou","fud","scientus","userwilliamimmwilliam","immendorf","cst","syntax","friendsalliesmeat","puppetsjyrony","outvote","junior","arz","prevails","carp","tion","invalidmeaning","anywaydont","cleared","casehow","differ","deathcore","seciton","muchfucked","thsuck","moglucy","summerphd","junya","watanabe","adopted","insufferable","autoblocked","nathanr","dramatica","snopake","backstabbing","diesit","cleanse","liekz","raep","seasoneeeeeeeee","laundering","poisonous","shill","launder","dignifying","phd","medicinal","chemist","emphasize","serotoninergic","hta","receptor","quake","pops","wikipidea","agin","mcewan","hve","bypassed","browtown","machinehe","collaberated","timmy","mallet","enya","untraceable","unexistence","pumping","fists","sunsetsa","port","shirts","glint","eyehe","volunteering","homes","extracurriculur","oap","oldies","accross","ithe","pump","worlds","competitionhe","owe","chezzy","coke","growit","washedit","cutit","sustaining","generic","bolognese","sauce","saucehis","invention","occurence","dischargedhe","soonso","typing","harrassmentyou","breather","yintan","hmmdo","eagle","chilled","burnt","coverup","instrument","musicit","alarm","clocks","regirster","af","surrealist","stoned","kikes","fuckmor","radicals","wowyou","nutter","stateless","gypsy","lingustic","peoiple","afghanis","afghan","editiing","ironhold","ironholds","proposalcoldplay","unjustified","arcangel","anticipation","treasurytagtellers","wands","pinko","commie","gym","grammatical","dim","fuckbold","rror","aggrandising","guardian","mushu","shrimp","fuckyouself","jeeny","oranjblud","redrose","touchy","criticized","elinord","transexual","haired","knees","zay","maliciousness","trigonometric","function","freely","reversals","spraying","exchanges","imaginative","misinterpretations","sinusoid","lssa","reversal","score","milliuon","vinny","userdaniel","dudes","commited","redemtion","torment","syat","minte","unblockhello","duly","cretinism","undue","vive","plzkthx","scones","ard","technician","learnign","centre","hectorine","angelos","elefantis","thingsanyway","mafia","simoni","iti","sinofdream","graffiti","closeum","sureumwait","onanism","querelous","bloom","fangurl","ruthiek","departed","hysteric","wankery","timotheu","ittttttt","aussie","lebo","soaap","frighten","nishkid","sage","soothing","soemone","oik","sassalism","gasd","terrosist","thta","rexnl","seemingly","slight","fuckhe","agn","pablo","atleast","concise","pseudo","cuntmould","larne","cur","thinls","hahahahahahahahahahahahaahhahahahahaahhahahahahahahaha","stoufville","bison","driveyou","dhivehi","nonsese","abcmonster","abc","trooled","shuddup","usersolo","halfway","mrzaiu","lolcat","caturday","slobbering","discriminating","goths","ecto","critisim","sonofabithc","jhonen","manjhonen","critized","critiquing","vasquez","apologizer","dougiepooh","dougie","wknight","awt","phenomenum","documentally","belarusian","doc","slavics","rival","_war_","_holocaust_","dontlet","casaulty","accidental","counry","agains","invader","vanessa","nai","veer","pakistani","janjua","muslims","teri","chodu","behnchod","musalman","janjue","rajput","bhaag","upyou","higgy","mewhich","stuffing","brook","ornament","smashed","seanyou","seizure","deliberatly","accomplished","exampledont","shanes","construct","niggerly","niggered","nickel","impaled","stakes","informing","showers","bulldoze","welfare","grubbing","preach","fuckperezhiltoncom","railed","misinformed","degrassi","thraco","byzantines","pffff","observing","waddle","recoil","horrer","chocolate","counter","hastle","perhap","sillyi","newcomer","pillar","tutorial","manual","wikipediaquestion","helpme","attractive","adept","junkyard","interlude","smack","shoveli","takin","pm","horde","jewlry","gac","wizz","nligger","jungle","bunny","cocky","pagethere","impersonate","scrawny","odin","accustomed","suckitude","realised","becky","guysuh","buttit","roundit","itty","bitty","sprungwant","jean","wearingi","hooked","staring","homeboy","rump","smooth","benz","groupyi","dancin","romancin","sweat","turbo","vettei","magazines","healthy","likeem","throwin","gig","myselfi","actin","playboy","silicone","wannem","doublemixalot","beggin","bimbos","bimbosi","flo","jo","uhhhh","punks","friction","mercedes","shout","cosmo","selection","rolls","honda","playin","tapes","fonda","motor","inna","anaconda","buns","retrieve","curve","thinkin","stickin","beanpole","dame","rice","knucklehead","ladies","dial","mixalot","jealus","neva","pik","casper","telly","loik","gawddddddd","gagin","cabaye","cpfc","frustrates","tour","rationalize","mosque","asswhipe","aww","usar","ancestral","propagandist","trancscprit","jackboot","sieg","hatnote","orphaned","dmb","settle","carppy","juergen","klinsmann","httpenwikipediaorgwikijuergen_klinsmann","robbing","germanwhat","rightwhat","accuratedo","tisha","campbell","angelina","jolie","whoopi","goldberg","skinned","whiteyou","chumps","freaks","etaonshstill","firestarfirststatr","covenantdtypical","mibhofroovvsskskketyrusskie","luoweird","tomanandaaa","brokeback","mt","whollywood","transient","awhilethank","fristare","appearsit","wind","gamestop","wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww","sale","outselling","harsh","grocery","lubricant","hearts","yammer","latchkey","drain","soceity","actionsso","ooooooh","talkcraftyminion","httpenwikipediaorgwikiuser_talkst","craftyminion","bigcould","slowlyrd","nameth","cigarette","skydive","bikerbiker","truest","vanity","intrusive","happyme","consistently","aggressiv","reagan","admission","lax","articleonly","wikipedai","forums","dicksucking","euro","nonymous","lovd","rwiggum","allege","throats","treasonous","jewranger","jewrangerhe","otunka","pipi","gogojewranger","mocked","dumpster","nativist","vigilante","proliferated","immigration","xenophobia","quotest","molly","cunto","haaaahaaaahaaahaaa","humblegod","stamps","facing","inportantest","brittany","mellor","nonesense","moslem","ranchi","soldiers","fellates","prositute","borther","dwell","smlell","microorbe","bowl","robbins","statistics","undeniably","urban","metropolitan","kangaroo","cellpahi","morondding","userquiddity","gentleman","accordingly","fandalism","bolshevism","adjetive","crackpot","bolshivism","draius","deduced","deduction","popsucker","paraphrase","dofficult","disguises","suckpoper","usernoetica","disguising","vbutt","mudkipsplz","chixr","angel","httponlinewsjcomarticlesbhtml","modgooglenews_wsj","tide","rollwould","halloween","clubs","flamed","fashioned","teleporting","torturing","aclu","monstor","las","vega","computerfreak","srh","skillin","buiscut","indefinately","wikipeadia","floats","regan","propdel","englandwhich","technologyuk","buys","slbm","shamless","suckle","dickle","candy","abrahm","yeeaaaaahh","prickkkkk","rawr","ensiferum","tyr","volcanoes","pompeii","vulcanology","tanks","faget","forcefully","ethnocentrist","anglo","barnstarfuku","returning","tuff","poker","perogative","thumb","conceited","absorbed","populate","esteem","builder","unilateral","straus","inclination","verbiage","isp","imposter","candian","feared","ahahahhaaha","gotti","jewishrumor","sunni","mullah","omer","qaida","apostasy","accommodate","sunshine","niemti","fathom","timedo","demonstrating","vomiting","seriosly","fagetass","fluid","excretory","terorist","anab","ragad","beckon","di","rakon","akmon","elete","binadas","bvade","akhed","whenvdk","depot","surf","showroom","merritt","salesman","sheeesh","hillary","assassination","hillary_rodham_clinton_controversies","enquirer","jerry","oppenheimer","fray","congress","rodham","clintons","raged","compassion","disappered","ancestry","chirsma","earl","blatent","packing","wpnot","crumpet","concede","suburban","wlc","puttering","yugo","deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerp","duuuuh","cursing","bitchass","punishes","ahaha","dressed","adios","giuliano","denture","ignoranta","trp","pictoral","fastily","router","goddamit","admistor","makingdeath","stp","rong","ahte","oct","footnoted","senton","finisher","cancun","tornado","idia","los","dangerou","ultimo","fallaway","slam","superkick","moonsault","pwg","wiking","retort","doorknob","healing","shalom","motha","irritating","reoccuring","tricky","situatian","meddle","crimea","capability","uninvolvement","apologist","evident","applying","itjig","tracking","applecom","forensics","continental","copied","fbi","ssa","booksmart","subsumed","adobe","squeal","procure","testimony","embarassed","subpoena","tagged","pork","py","adio","bushie","sparkley","gorbachev","crackdown","baku","grandmaster","paranoic","azeri","witnesses","fry","jclemens","texanit","ddmc","psp","firmware","pre","installed","buyed","downloaded","bundle","onealready","httpforumspspslimhackscomuserhelppspfirmwareahtml","httpforumsmformaturenetshowthreadphp","millions","downloadedthi","psps","possibility","kupcinet","heri","bannedadelicad","dooyar","isotope","colscott","buushbby","httpsenwikipediaorgwikiuserponyo","httpsenwikipediaorgwikiuserhullaballoo_wolfowitz","cmnf","teletoon","pasted","marketing","boilerplate","crapass","hamburger","fucing","oarfish","pupinski","mini","dirtball","humble","taiwan","newyorkbrad","dik","hahahahahahaha","hahahahahahahahahahahaahaha","hahhahaaha","suker","useregg","theirishwarden","pdf","efficient","researching","uploading","draincould","speach","hjyunnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn","dicksi","kunstruktive","jst","jealuz","myh","wikkipeedya","skils","hoamie","jytdog","beetlefart","weaseldo","holocaut","oppositely","pqarakeet","babu","mask","koavf","bilorv","thue","zillion","kash","jaffreydo","advance","concieve","joey","waterboarded","plum","fagggot","shiguythat","hodges","crypto","craigy","stormie","anetode","scares","sap","golf","hose","toxic","theologyfrom","notre","vo","tech","ged","rejoinder","unfamiliar","xxiii","pontiff","facilitated","mcbrien","whitehead","remarkable","solace","obstinance","heavydpj","trys","thrill","metalcore","retardness","passe","circumvent","wikifiddler","orlowski","flagging","chutzpah","rants","leap","exhibiting","calculate","excirial","onward","minuses","retardedit","deciding","restauraunt","petsitter","patrick","garythat","gary","waaaaaay","challenged","bei","stephen","hillenburg","krabs","kenny","slide","ending","reruns","fancy","cannibal","dd","libeled","troop","planted","blossom","crumble","walker","instil","hegemony","unipolarity","multi","forceand","himpusssss","peging","uninvolved","compensating","mediocrity","greatness","propose","unconscienable","qq","crynig","nixonian","classwikitable","hting","authoritarianism","soliciting","iraqis","misbehaviour","innuendo","dolescum","couse","database","argying","errata","beeblebrox","corrige","handbook","bebblebrox","oughta","glasses","fortnight","pun","crapped","sho","preppy","shitased","moslim","guilt","domain","that_you","hunches","grimaldi","asholei","coin","depicts","relevance","bureaucracy","japanophile","indisputable","logogram","religiously","idiotically","zola","nikki","hummel","anna","frodesiak","mutilate","penisis","sky","minddo","nitpick","relatively","assaulted","hastiness","wholeheartedly","stranger","yournumbertwofan","protesting","nit","glock","uproar","everbody","targetted","wikpedia","insultsi","alexis","arquette","bragging","andrea","lowell","raining","falsy","reassignment","publicity","transsexual","hitch","wagon","weiss","spilling","ink","diploma","mill","hore","mikemikev","stupidiness","hahahahahahahaha","breen","severe","qwernol","civilised","wif","excusing","bomber","riana","shrew","wikihounded","wowfunny","moronicthe","unfettered","globally","shriveled","fling","egotistical","fagots","adolf","accountfascist","declinenigger","musicfreak","wikipieda","wikpeadia","servers","ordinary","muddy","jewbo","insensible","gabemc","mispells","intimidate","opposer","trolls","incites","drum","medcom","ebfore","ruckess","sidetrack","blessing","disrupted","beatle","poll","thethe","feather","wpbattleground","prima","demonstrates","indef","wpadmin","embarrasment","piehole","reindeer","melting","flay","lace","ollowing","arge","pools","kiddo","allahu","wrongthink","avenged","sevenfold","newer","mysterion","clyde","murderers","todays","russell","humid","subtropical","arid","steppe","lean","rainfall","citywhich","latitude","russellis","earthly","derees","longitude","angeles","studeng","econimy","worldto","wikipdia","management","wkikipedia","thenkapampangang","para","sa","katotohanan","nickelodeon","workers","conniving","shitcan","fortune","dickbeaters","veteranary","vandalisers","englishman","proove","goo","ogle","unusable","shitthat","searching","toolit","googol","humungous","datathat","hypothesis","ianmcm","evicted","faggotcocksucker","itch","overlook","pin","admiralty","composed","sandpeople","dross","forza","luton","gregalton","douchemaster","supremei","criticizes","frb","pageyou","knol","titleyou","wikipediado","baiter","aided","abetted","chided","adds","foxnews","zimmerman","pouring","zimmernan","jobe","tibetan","ben_ben","drmia","dumbi","updating","embarass","pals","mason","todayoh","herin","peeps","higgin","whr","chinned","hunchback","geezer","fckng","awwwwwwwwwww","medicine","wazoo","cunt_face","wikiadmin","clause","lurks","strangely","pernamently","vulgarity","obscenity","majullah","singapura","domestic","yahhhh","yoube","whales","milion","yur","pcdo","mugen","infantrynet","pakis","salavage","kay","blngyen","holness","crackheads","kyke","spider","loc","sinebutt","janjaweed","sexier","iis","totaly","redoing","scrapped","httpwwwinsidebigbrothernet","comprehending","thingit","shenanigan","anonymus","ashol","malusia","opinon","futhermore","wikilawyering","bulldonkey","pwned","virus","anonymity","beingyou","surprising","dishonor","peters","recplex","bossy","acount","anglophobic","tyke","inviolate","roughshod","wantsit","excitable","antagonism","quantity","liken","glance","tome","mindlessly","dispatch","endearment","peart","nohh","penetrate","tightly","calmed","likened","studying","obtained","honors","wellington","fuehrer","resulting","disconnection","efforts","senseless","heartless","memorable","minuscule","nevar","gsk","blockage","terminating","accounti","queenzeppelin","dmryi","blockedi","knowwe","__________________________","tracked","ayour","don","stryker","sideway","spiky","spoon","jeeeeezz","pedant","bitchfuck","bark","rectified","insurgency","vulnerability","propelled","mines","partially","tusk","abram","revolted","speciman","assya","thumbing","yanksox","santana","lopes","leadership","messit","apologetic","mrsantanas","performance","encyclopaedic","supporters","cunjuncture","debatably","countrys","salvageable","spewing","harpy","hypocriteyou","unevenly","mods","conveniently","puppetry","flattering","pander","forgiven","obey","httpeternallifetk","dahlia","tal","elevator","sniper","tarom","lolololol","lololololol","ginbum","kp","botany","teadrinker","moir","prom","cous","banner","ked","wre","promi","motherfu","ker","superficial","absorb","fuckfest","nickers","joakim","noah","crave","childhood","honcho","inapropriote","aidz","flipping","reform","sanhedrin","pardon","wikimitzvah","viral","stritting","sugar","smother","wheelchairi","wheelchair","userugugugugugugug","jibbering","sheuli","bose","yapping","danish","yk","teath","scaring","usit","discipline","giva","honkey","neighbor","wifi","humility","jeffire","stupidhead","scorpionman","poophead","irredeemable","attached","kthx","tideroll","wiley","grime","skepta","iuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubnvviuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubnvviuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubnvviuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfbfkjbnknlkshubnsutybnisueynboiserubnsiunybiosubnioseubnoitybnosiubnosriutbynsoitubnosiubnsoiubniuhbsirtubgyihihlkjngkjbnkgjnbkjfgnbknfgjkbnkfjgnbjkfnjbkfnjbkjbnfkjnbkjnbkjnfb","httpgawkercomwikipediaisslowlydyingi","happily","shutdown","nomination","pea","bvrain","believer","wimpit","bann","modi","retaliate","gardeningand","juggernaut","misplaced","sleazebag","hrassment","whaledad","everdo","englishdo","benned","wps","ewwwwwwwit","feces","crapwe","contributors","colonialist","okayst","dosercom","marijuana","heroin","lucid","somehting","olds","thislet","juicei","plskthxbai","gravitation","boggles","suction","radiant","gentile","completion","questionuntil","idiotdo","phelp","amaury","raheem","kassam","renato","laranja","nazii","attn","imroy","flushed","claudia","obscession","carly","manimma","tooalot","wmfyou","playfully","shiithead","bulshiit","alsoi","feedback","opens","thdo","omnipresence","impaired","sympathist","cocker","cocksuer","mohterfuck","unlce","suckefing","konw","yoru","grandma","terri","mau","umm","foretold","pseudoarchaeology","agendait","aniwhat","crewamy","davejohnsan","seasons","jeez","birthday","holidays","wwwdonate_feelingscom","defamed","spammed","usenet","hitherto","remained","unchallenged","joppa","editingplease","alonethat","cynic","whatisjoppacom","echidna","defimation","fukka","pieceofshit","plastic","expensive","dean","jameson","frinds","ruhrfisch","coeil","tragedy","validate","worthiness","dyk","itdo","submissionyou","exploited","nowi","goofball","lifeyou","andyscotlandlewis","republicanjcobite","vandalizee","sagging","lcistudent","noooooooooooooooob","snotty","projecting","mammy","shakira","andrex","invasion","poland","creeping","thankyou","soooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo","rad","blahhhhhhh","jforget","cbc","anticipated","schumin","remotelyi","fractionally","sleazed","whored","gruelling","elven","infernal","glam","morethey","telenet","uncover","spellcast","congratualtion","friggin","unblockimpudent","feckless","usbecause","kn","pf","thompson","whythat","gamer","yourslef","lolif","wernt","actully","sevral","notably","wookieepedia","immigrants","goku","syed","chumpmuhajir","muhajir","czeckoslovacian","glued","killyourself","whiney","jag","quimby","jaq","quimbynigga","farix","raoe","opp","accidently","bribe","commodity","delighted","robot","goldfish","themi","asscrackand","rly","brick","hs","niggerfags","marx","assraped","maas","haunt","mwahahhahaa","snobbish","doneit","basing","ukdoctor","ruben","abolish","gmc","trumped","rubengo","hesitant","conside","tubgirl","intruder","saidid","discretion","purile","manis","articlein","tomica","centraliststupid","centralist","scram","agentural","jdelanoy","aqua","satanist","bullshiti","theater","safely","babbling","wpnotcensored","wolfkeeper","comaring","ts","robt","desicion","worthwhile","kpdo","cliched","antithesis","koth","shark","futurama","shinigan","httpwwwmarinijcommarinci_","httpcbscomlocalwirelocalfsnewsbcnnheadlinenewspornarrestresources_bcn_htmlit","stemming","activism","wah","mgs","killzone","hd","fankid","handling","ds","iban","reagentspark","grabs","ballsbe","f__k","pasty","whack","wut","asaulted","luved","fuked","hott","autographs","dieeeee","fym","dfw","brillant","bookthat","wikipediaheadless","nominated","headless","oswalt","trout","ncyclopedia","knead","cusstalk","dippy","infinite","breeder","virtualsteve","nisarkand","obessesion","amblin","twilight","indiana","terminator","splash","poltergeist","forrest","gump","magic","productions","films","ilm","entertainment","chromosome","tennis","novak","broadsided","ambulance","monte","carlo","imports","oak","olympics","lunchables","lunchable","kew","gardens","hholt","murali","chucker","wpothercrapexist","malibu","agresive","vascoamaral","jojojjo","usercaptainpoisonim","autopyrotechnician","beginner","limp","ketchup","chipsbut","pansies","beret","shitfuck","bukkake","slutloadcom","fuckedi","definite","idly","randomly","gah","gorlitz","goto","hypocrital","alloy","expires","tommorrow","ciara","viligante","ioeth","whateverthefuck","vigiliante","douchette","vaffanculo","fai","schifo","sempre","blockee","officious","busybody","needlessly","wankeri","powerless","eternally","consensusthat","sickness","offtelling","flaunting","precedence","kraut","worstest","sokits","listenong","prime","opooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo","phallus","bunghole","tranny","nawlin","jake","waskett","outing","associating","coppertwig","crapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcrapcr","critique","strating","evopution","mikka","preity","faece","flewis","sprouting","iasi","palestina","varia","slurs","shannon","controller","mommies","cuntrag","opression","opress","gothamist","gawker","tmz","reputable","famewhore","douch","ruling","fcockc","studing","weigh","blast","dxraw","ridden","saunders","mosted","despised","barge","vfgfvfbfd","buttseck","kpja","polishing","platform","shoddy","disinformation","prominent","clochard","washed","decade","pl","politicians","fooling","condescendingly","icecoldbeer","engineer","jasonceyre","uc","bebop","linkthat","execute","nerddo","speedrunner","brag","nightfire","speedrun","editted","undually","achievement","spuriousness","bloomaisha","winx","wikienemy","martino","manwe","teens","valdalize","impossibly","ignourant","filtered","possession","taddle","vandel","motorhead","bogan","wiipedia","cripple","mums","norman","breton","steped","whoes","shrine","ultinate","truthyou","medium","nudity","giudelines","wwecom","souce","retirediron","unsanctioned","ted","dibiase","extravagant","httpwwwwwecominsidewwefeaturepagefeaturesmilliondollarlegacy","itiron","vacantiron","ir","nightiron","wikip","skier","ness","comprising","memeber","theyit","seriouslyit","freeza","refereed","frieza","httpwwwvegettoexcomblogwhythefriezaspellingdrivesmenuts","seville","nudeharry","sence","suitecivil","barcelona","involvement","bertiebasset","detract","hinders","betterment","vision","regrettably","remembered","dannyg","icty","criminals","butchers","arkan","mladic","specifico","chimed","thieving","dhmo","pageonly","beingsoso","kinkaid","gogo","cannuck","cansuck","othyer","useddo","ripe","erect","peeling","simulate","menew","singaporan","doooddeeeeee","croydon","ahhhhhhh","liffeeee","fuckee","sentry","boils","validity","abilityyou","hahahahaha","contraversial","maintainance","bleeding","architecture","categorynazi","physicians","experimentation","toure","neblett","janet","tasty","flores","removes","privilagei","douchey","mcdouchenstien","approve","interceptersaurus","rex","qb","unhelpfuli","listeningi","lodge","unhelpful","plead","corrections","atkins","truthit","polka","genocidal","gained","americas","colonized","denied","colony","colonize","occupy","nableezy","sponsor","violater","repressive","palestine","collaboration","confronted","annoyingly","savaging","bootkissing","inept","nip","blowjob","bagel","cocksuckerstop","motivating","upwhy","striker","siziba","sizzler","cuntim","ambitious","degrading","extentgo","kola","boofboof","daytime","wa","bingo","heyi","puppets","wiggle","penistown","airways","wishing","pleasant","penisian","penistowni","shorlty","airbus","boeing","depart","transport","worryi","aircraft","noez","drjoe","chingching","trashyou","squint","nowwhile","publically","ascribe","pelican","useryou","cred","rated","jakezing","otherwhat","jakeyou","wikipediayou","wpcivil","rulethat","cusse","wayyou","el_c","respecting","bkbkbkbk","fucc","bitcch","yourpedia","lawmaker","worldthat","arogancy","moves","thay","deadyou","brakes","enciclopedia","credo","intellectuals","disgustingly","uncorrupted","nobodyyou","underaged","therm","wannabeyou","tissue","moneyyou","cigar","auburnpiloti","bitchyou","bitchholla","rollin","vet","ptsd","druid","intensely","pruritic","papulonodular","eruption","desease","stds","begs","beggar","watkinsit","realible","fansite","dedicates","celeberty","answeare","wbraggs","surrealism","stains","wbragg","httpwwwsurrealcoconutcomsurrealism_galleryfound_objectsstainhtml","sanitation","bragg","ewwwwwwwwthat","ewwwwwwwwwwwwwwwcan","icky","childbirth","correctionperson","defacing","puta","khazana","fabricated","shamefull","abdul","habibi","shahnama","archeological","zmarai","ghurid","beeing","valueless","rising","safavids","compatible","beeings","stuipidity","neela","rasgotra","bongfag","stoner","lia","nyanpire","boybut","unregistered","userare","mockery","industry","thoughts","kermode","senna","consists","abouti","dorftrottel","retardwhat","centipede","cinema","waggers","webquest","vinci","superced","provides","replaces","googlefactblogspotcom","davinciquestblogspotcom","pays","gain","humbly","rectify","unjustly","administered","talkshit","irritated","sheryn","mongrel","tuesday","varga","incorporating","titles","records","fando","premisis","flavour","aiden","tedious","bombarding","hunderdsand","spammeror","deplorable","havnt","cliff","fwcking","twsser","congratulate","fwck","bwllshwt","pwss","alr","bytch","binned","fwk","cntz","firebombingi","linch","crosses","sisterit","gasoline","joooob","sanatizing","sewerage","jerkass","bearer","vandle","vanadlism","runescape","sinjagex","christo","babylon","joint","whichever","bard","vowel","ause","felicity","cox","phonetic","transcription","transcribes","speaker","broadit","uncommon","nasal","merger","southwestern","phonemic","atensing","accent","undergone","cities","pronounce","fromyou","contrasting","paracusforward","functions","micropedia","encyclopaediai","manipur","terrified","gangster","djinn","necessarily","supress","encylopaediac","ethnocentric","tibet","ngo","grace","fiancee","malouse","aspergers","satyagraha","twitter","courage","confederacy","dunces","hte","agencies","intimidated","balance","monkee","cocklskew","frampington","yeahhh","gymnastics","marked","margin","judges","fucko","alaexis","harami","ke","pilley","baar","cheezen","delte","kar","rahe","hain","unko","karo","suar","aulaad","promoted","hare","iskconswami","transcendental","meditationmaharshi","mahesh","yogasri","kriya","yogaparamahansa","yogananda","autobiography","yogi","vedantaswami","kayastha","fffffffff","ccccccccccccc","kkkkk","uuuuuuuuu","fffff","cccc","uuuuuuuuuuuuuuuu","cccccccccccc","waythat","chronology","spanning","stock","warrants","insomnia","gaming","uncyclopedian","uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu","morei","tourist","bland","seperatism","turgut","ozal","internal","affairs","abdulkadir","aksu","detest","christopher","connor","routinei","giraffe","kindergarden","ignorants","pakistanis","indid","iranidwhat","platter","mushrooms","mutilating","osirisv","buying","poison","nude","hudgens","hacked","mily","johansson","attny","apportioned","restitution","olstad","christina","vag","shots","olsteads","biches","youfuck","hiv","nameyou","hehehe","thanx","blud","anoyin","nufin","betur","initi","goner","pis","yureself","fagit","allim","ive","somethingmy","youyet","thatmaybe","meand","digging","doingmaybe","anybodybecause","gamespot","ign","donkeys","gato","annihilation","contrived","rapes","httpswwwyoutubecomwatch","vbyaqzzteut","mock","onit","geting","patheticrip","flip","pigfuckerthere","battlestar","wikiit","shorty","bashfest","blockbanrevert","constructed","douglas","feith","editsi","wikipediastalinist","unglue","sizeable","backside","evula","hysterically","tangent","incensed","summation","thanking","brooklyn","straighten","microphonefat","sacramento","diegoi","lbs","talkmain","pageaugustus","wppoint","ocupied","qualifies","classify","mediterrenean","rejection","simmons","wanteven","writeing","abacus","deside","sove","winkipedia","moda","assisted","jizzmaster","risk","edgy","qualifyit","yunshi","kuratowski","referencehating","stabbing","chruch","masonic","colors","clothed","revelation","alphanumerics","yehovah","freemason","yeshuwa","yeshuwas","moser","httpgroupsgooglecomgroupaltsupportdepressionmanicbrowse_threadthreadcfafbacd","moldoravia","essay","families","snooker","hly","yu","myt","ack","singagog","lvee","ys","normel","fsu","boredom","ennui","followup","djbullshit","prey","introductory","lectures","miners","flea","vocal","compilation","misogynistic","uber","kinky","layed","shafted","summerluvin","vaguely","trap","alien","conjugate","maple","trees","eaxactley","perfection","goldstann","niboy","grandparent","suped","fucktarded","rocking","roti","canai","revere","comicbook","blade","daywalker","dalus","infra","fyi","dayewalker","consortium","postings","unworthy","overall","bannation","completed","genetic","pushy","womanlady","unintended","identification","prefix","posed","ut","chowbok","girlie","mineral","vegtable","germanic","mofu","repair","bastrd","cuzzling","neda","agha","soltan","indicate","doh","gaya","wikize","indulgent","comically","babying","aready","federer","allan","maxim","surge","intro","watchlist","frustrating","xxxxxx","shankbone","zonked","depressant","andrei","treivas","bregman","improper","viagra","xxxxxxxx","tunnel","mavisor","decrepit","declare","apocalyptic","mi","sec","byrd","resembles","vanalism","tarantino","itso","similarity","simplifies","shrug","runyon","thunk","anythingi","psyou","jarful","cookies","edible","byte","morbid","curiousity","solitary","confinement","comprende","quaeda","warfare","precision","spies","traced","unholy","retribution","fury","ityou","animate","afterwardsyou","channon","miranda","coolie","betraying","megalomaniacal","thai","allports","menu","httpallportsfishandchipscoukmenuphp","definatly","briton","intended","submitting","meekly","kowtow","gicve","incentive","mz","cheney","chode","hgfhfghdghgfgdh","ehow","mannage","puting","forwards","rhythmically","liquid","mouththat","mln","blocki","nanana","booboo","restart","rotur","shat","mornin","prettier","stooping","estogen","solidly","fans","pronouncing","judgmentcondemnation","dictate","ethically","bankrupt","persuasion","bury","keystroke","terroism","amounts","dangerthreat","impunity","efficacy","ciao","unblockyou","pagebelow","kunt","ejf","elses","neiln","hotse","discrediting","grockl","irrigation","depth","ucsd","dysfunction","clinic","endoscopic","sinus","patted","clinical","authored","pulsatile","saline","delivery","bacteria","bulb","syringe","staphylococcu","orthopaedic","traumathat","implant","sourcei","immortality","foreeevvver","errrrasee","shittttttttt","stuppidd","ib","blantantly","controversal","irate","mutherfuckng","nolifer","plx","vanlig","halsning","vop","memoir","tao","diary","equivilent","tesao","cumputer","problemare","criteriaand","articleabout","notification","youand","giventhank","mma","wppreserve","wpvandalism","offending","generalised","finnally","qualm","chaging","hfc","gratuitous","grandizing","callous","okunless","malaysian","bunt","bunts","kodava","yakshagana","cultureless","kannadigas","subdued","beacuse","nof","youa","konkani","vijay","mallya","eliotgreenc","submission","jarlaxle","tanthony","sandchigger","juppiter","escorrt","prostitution","caty","yrgh","capuchin","usershushigeek","mutliple","nuetral","unite","admistrative","abilite","revoked","rightit","thirdand","yoursstillloli","octoberbut","conversationno","sandahl","labelled","contradiction","wikipedias","evolving","vandallic","labelling","legendary","danny","odoul","erik","legally","beneath","asage","cases","technical","mucking","transfer","aug","supressing","crhistian","fiance","fixin","xxxx","helpedfaggot","popper","harp","blower","hohner","curp","rulehe","moro","nascar","masterbate","massage","dokovic","boyfreind","haiti","moncrief","ojibwe","delaware","genres","serously","jeni","marxist","sickos","hollow","representatives","besser","inducing","oriented","smarterchildthree","economics","hvdc","jazz","fascistic","coup","cj","marsicano","niekerk","unlearned","smut","depravity","rough","invincible","punches","audi","controls","httpenwikipediaorgwikiuser_talkjohnfosthe_signpost__october_","httpenwikipediaorgwikiuser_talkepipelagic","httpenwikipediaorgwikiuser_talkbeagel","httpenwikipediaorgwikiuser_talklawrencekhoo","collude","movements","beagle","johnpho","lawrencekhoo","epipelagic","ax","fifle","wikiprojects","tweak","glaring","omissions","kasreynyou","posse","juggalo","complaints","compiled","icp","originating","wondered","operated","zakat","jizya","complained","irishpunktom","cooperating","apostacy","dhimmi","coordinated","viewpoint","resort","administratorship","ossmannare","skeptic","scientifics","graded","debunker","debunk","httpwwwsptimescomfloridianthe__quack__hunterhtml","thoughthat","skepticism","hgbob","thatit","behaviorwhat","flummery","enlist","scientifc","pitiouspreceding","scietific","unquestionably","psychics","faker","inferred","attended","bothwhat","ummmm","phage","freeston","highest","pleasee","levae","lacking","adddo","rancie","uncircumcized","greenstein","themanwholaugh","theme","wrestlemania","spyke","loop","groundbreaking","secular","humanism","khalifah","justifying","historywhat","esp","dicking","rewriting","omnipresent","freezone","ounce","drone","deletionfruit","benjiboi","bullshityou","diving","perioddo","cahoot","linux","persecuting","negroid","dammit","declineyou","doignorant","areyou","horrid","hooooooooorid","hooooooooorrid","caus","larsen","nawlinwiki","affecting","jfdwolff","gigolo","shadeed","css","duchebag","infringe","mccon","interpetion","argumention","hears","epoch","sufer","falungong","selfesnes","egoi","foto","desember","spellcheck","cheventogne","abbey","inferno","hel","ju","vant","nau","monger","functioning","autist","fantard","destructobot","bejust","hos","dais","vandalizingthen","crushed","niagetty","seethere","overlooked","avoided","introspect","gauged","apologies","holme","coveting","sods","reasonthat","goodkind","dickthat","jhoney","temporary","bodo","branch","mam","amped","demamp","cornhusker","concave","evading","talkback","contribs","shallowi","bullshitit","tootle","blantently","privledge","bwa","derelict","ridicule","titanic","advised","calldo","handicapped","parenting","rhetorical","muh","gabrielle","categorizing","teller","wobb","epfnot","mut","syke","geneticists","assimilationist","assistant","pupety","verita","epf","confuses","comapare","chiming","kwa","harrington","youhay","kitchen","singlked","requirment","malvina","enought","discution","wisdom","chalenges","fantasising","personalization","farce","peripheral","kafka","negation","negates","erodes","shitnew","mildred","taylor","underneath","gaydolf","homsexual","foggot","carf","trecking","warrington","fattest","karlie","fok","bitsh","harlmess","wromg","soulja","uncyclopedia","swag","imagepeopleofbritainpngp","wikijustice","peneltized","notoc__","cafe","cun","dusting","reflection","eart","jupeter","extinct","incumbent","akkadian","assyria","aramaic","lingua","franca","diaspora","aramaena","reduced","vassal","aramean","syriac","separatist","mule","facet","unencylcopediatic","downsize","comer","denialist","distorter","denies","assyrians","majoras","hollaback","stippud","iditio","penal","pathethic","monkeydonian","congratulationyou","amply","rewarded","teaming","assholery","instituting","altetendekrabbe","incentivize","heardnd","douches","wicked","obsessively","deluding","powers","wehn","hellost","malik","icgc","yearyou","jerkly","shabaz","arguably","ownyou","pattern","phill","mh","ghouta","hahahahahahahahahahahahahahahahahaha","regents","taintopenlygay","qiyamah","universaliss","refrained","accidentbut","suspectespecially","convo","southerncomfort","weekdo","inaccuracy","diffusing","situationi","massively","riveting","deposit","usb","relay","likenot","tellsdo","unedit","phaggot","fuckstick","miz","chalk","erasure","classroom","radisson","raddison","havoc","wankerit","nonce","bruce","perens","groklaw","revoke","infiltrator","useraboutmovies","pcap","commiserated","snoop","owed","quietly","slunk","repented","diligence","aboutmovy","summarize","tedder","mujahideen","pornfamily","incestincest","sexdad","fuckingmom","sexincest","cartoonsbrother","editting","disable","finest","lygophile","ponder","pe","chinelo","abu","saga","overheated","crawling","kissinger","jewbastard","khazar","filibuster","conclusionthat","editorialise","mogul","dragging","economically","tortured","helen","nukes","manhattan","eulogy","theodore","herzl","loan","wanderer","landcan","rachel","corrie","goy","tay","sachs","infest","medveds","sandlers","dylans","disraelis","rothschild","greenspan","disrepute","mckinley","romanov","westheimer","sternjerry","seinfeldeugene","greed","barbarism","clifford","tower","castle","ritual","mutilates","labia","civilisation","bloodsucking","bugsy","siegel","hollowcaue","kosher","racketeering","genocidist","slew","goliath","squish","thurphftp","monkeyman","saaaaad","nahi","mhi","ehi","spa","ricboom","schoolim","crusaders","dug","ideologically","spurious","earned","fucer","revolved","jpg","worldit","resembling","sell","surviving","feminizatoin","zubaty","mackensen","darcyj","mispell","ignor","similiar","grammatically","predijuice","bengali","ragib","deregatory","pakistanior","migranted","sexbot","recommended","noteworthiness","carries","micropenisis","inthey","paula","deen","factwhat","drigers","inappropreate","specificlly","rash","heroic","mizzary","cabbage","enoughthat","innapropriate","denegrate","tiiti","expiry","perm","debating","knowdo","immetidely","immeditley","reversing","aget","lifeutosigned","hahahahahahahahahah","dts","varified","dani","dm","httpwwwvictoryrecordscomdesigntheskyline","conclusive","archaeological","ridiculously","arithmetic","slept","epoynme","fagt","kebron","pamela","ibm","libeling","harrasign","usernat","genmay","saxifrage","custard","poplular","comfimed","shalt","ravished","buttockit","hurtin","kory","sherman","faggotmongo","retardmongo","handfaggotmongo","moronmongo","faggotjiggaboomongo","faggotkikeniggermongo","jewfaggotmongo","accountyou","mopntn","farted","gall","nutshell","worker","chairmanofall","brainless","hidey","rebutt","qing","tribute","humiliating","remisis","kinu","expereince","swing","oohh","amature","rookie","bloodiest","deadliest","baout","semantics","wordplay","instedd","waited","jusitify","escape_orbit","baiting","justifiable","schoolayard","vewy","angwy","awwwwthat","terwible","masterbatingky","dc","whateveryou","axiom","fraudulent","mastrbating","usesit","logically","refuge","meabsolutelyuninformative","ooo","metric","beeeitch","sukk","deeeek","condemned","suu","kyii","imprisonment","actionslet","aliar","deceitful","woo","wooooooo","gur","ess","whzat","sceptre","yataghan","hrant","dinknd","bozkurd","typisch","tyrkich","ala","ugliest","o_o","intervei","jackassery","abound","wikipediots","thwart","somthing","washer","threating","racieum","jeffrey","refrence","angrier","haoppen","unstable","rarelibra","bolzano","bozen","alto","adige","tyrol","guesses","toohe","behavier","heredo","situationdo","raw","devoting","basted","scrap","randy","glistening","atomic","wedgie","amoeba","redkneck","wasz","dhis","sed","numba","thur","bighead","federlines","mongoboy","spectrum","wpde","lasted","wankstain","arsewipe","illythr","siemens","americanism","coliseum","mural","textgreg","albuquerque","penetrating","userwill","beback","huyou","untermenschen","fvck","hyave","gangs","aricle","ytoull","resion","complaing","niggaaaazzz","herbythyme","userssjgoku","meal","whale","mutual","cuntt","moosethefortyfive","valueyou","attending","detailing","filling","terminal","bile","facelift","taunt","gezza","usersikhhistory","usersikh","ramgarhia","humorous","ncrt","textbook","writtin","seely","singahi","objecting","higer","menace","jasper","deung","phucking","tryhard","pseudoscientificthe","scythian","indo","originnot","semiticand","verybig","eurasian","yippee","yehaw","okie","dokie","agorrantly","explicity","bodily","cavity","satisfactory","demanding","orally","consume","unsatisfactory","extending","coarse","conflcit","abuot","demeaning","reflecting","inappropriateness","rollins","marnetted","cockthey","editorseven","pagestheyre","faking","bedo","uninterested","berated","goldentony","ids","bnpedl","espousing","espouse","victimisation","oppression","gibberishthe","bnper","screeching","draggers","bereft","thoughi","neer","itthi","eschew","belittle","uafmarxistfar","leftrapistpaedophile","misquoting","paraphrasing","harped","cloning","cloned","waffling","deprived","indecent","amoral","sapper","edl","islamophobe","ignoranceproven","marxists","coloured","etcthe","guttersnipes","failures","interminable","sneer","sensethey","proclaim","int","whut","dako","sanchez","opener","slapping","httpmansonhatersblogspotcom","trample","temp","panda","chosen","hijack","legitimize","jbgordon","crucify","palestinians","darfur","italics","wasteful","einstine","foorball","aliens","jupiter","plotted","fairyboy","ghandi","ricky","mole","faaaaaar","franklin","bermender","caspian","distraction","layer","prejudicial","arbitrator","yonsei","motherfuckerer","itiot","implied","comprised","terriably","institution","americanise","assholewe","tnxman","ovarythat","babymaker","att","nilly","paycheck","kleargear","fukface","bitchmattythewhite","coincidence","wikibattle","interests","wikipediait","worksand","yourselfthen","phsycobabble","californiadreamling","poopbold","fuckingg","tacos","bitchh","suckk","debri","bumbling","shmuck","bitchwhy","lke","deadfuck","goodnightmush","biggy","mockedst","keller","quif","sodomite","thumping","winger","dubya","yuk","victorian","subspicy","cockblockers","spitefulness","stimulating","acquiring","artificial","trends","asserted","greaseman","neturalhomer","blockedfast","downand","aiv","neutralhomer","eve","conclusionlet","deadthere","unequal","radiolet","cesar","romero","migraine","theology","utopian","envisionment","marti","carmen","manuel","mantilla","godfather","maria","fathered","boarder","appearance","circuit","bachelor","interviews","boze","hadleigh","bracelet","inscribed","butch","reportedly","bestowed","partner","joan","crawford","teased","proclivity","surrounding","liaison","finesse","mainstay","interred","inglewood","closerlookonsyria","putinist","shabiha","houla","fluffer","videography","stereotypical","persondo","powerdo","ofdo","cumulus","kircher","minimal","respectful","shakespearean","trek","artistic","itselfdo","oooo","accus","arr","rodgers","rodger","triali","discretionary","clouding","fyu","sysopadministrator","pgagnon","safavid","hsuing","kokturk","oppress","babek","bahram","chobin","ibn","sina","mevlana","rumi","independently","observed","exactsame","demonizing","lionizing","liberalit","infinitum","nauseum","persuade","happenit","hippocrite","bauder","woohookitty","kizzle","fvw","derex","redwolf","verklempt","appointement","psychiatristor","gynecologist","phase","fagtard","universally","centerfire","cartridge","default","ballistics","gaybo","mgay","urfvbn","js","cdtw","cfg","ikldgni","ajkbut","ykktb","revictoria","kingdeom","coffin","baptiste","lamarck","unstructured","duplicating","lamarckism","dunc","ebusiness","wpburden","titlebecky_gablediffoldid","focussing","lmaooh","crnagora","planethe","muslimsays","montenegrin","incidently","talon","httpenwikipediaorgwikifreedom_of_speech","bjs","ebola","shei","fashistdont","alledy","busniess","dreamguy","provoke","mousercise","imgimg","wikipediaupload","veinor","files","regulars","laquering","inadequate","templatei","bakharev","mentoring","compatriot","questioning","liari","noclador","holm","camping","moonless","indignantly","awakened","famed","deduce","stars","milky","fraction","solar","encircling","housing","sentient","forms","winded","albowed","exclaimed","tent","barefoot","kidney","mortal","enimy","entern","ity","tod","copper","enime","offnd","squash","meters","puzzles","consitering","motherfker","purged","asshoes","unblockhahahaha","vivid","winding","karen","radcliffe","johns","hopkin","intimatei","noon","relax","tall","hawaiian","blondei","curly","wantsi","ox","goddess","envious","breasted","bombshell","diana","triumvirate","counti","bloomer","rubbed","mound","hinting","antics","lurker","grin","fortunate","wouldn","rib","pointedlyis","replied","unison","nod","obviou","instigator","egging","echoed","chased","raided","talkcontribs","nolan","heyo","poured","barbecue","doubtlessly","digestive","jerkso","sucj","inflamatory","shorten","unfairly","chuckle","llawer","carlile","bryanstar","crescendotv","etcok","metalcorewith","ginyu","cui","shortening","villain","handzar","divison","division","wwii","obsessing","mates","shopsbasically","dy","shitter","knobhead","fatboy","transit","loathsome","asphyxiate","griffin","spine","makng","overwight","douchefaggot","director","suckass","eps","viacom","directv","uncivility","runner","chelsea","manchester","bagcock","nercd","byy","froth","snap","lanoitarus","permantly","backdoor","pimped","extensive","defectaroy","alai","possessed","drawn","dismembered","bodypart","xmas","idiom","hussein","hyokay","eitherlet","whad","syphillisss","praying","departments","sturgeon","motel","pumper","tanker","ladder","firefighter","yahoo","prvert","pagethat","hacking","helpdesk","sarcasm","angr","successful","expire","nutsi","caresdo","pennant","noin","fcw","wppwmo","regain","evince","betafive","smyou","awfull","marker","blockign","schapelle","corby","ffs","casp","hypothetical","saidim","afi","capitalized","capitalizing","meh","meter","profesionaly","falsetto","breathy","countertenor","shitit","advise","didntthat","slappedst","ether","jody","shackelford","aloud","burrito","invocation","shity","geak","feet","opposit","selfdefense","personly","maddd","cooling","cooler","fusion","sophie","mojo","brandti","mutiple","shitburn","eloy","stealthusa","artise","shwo","cathedral","uyou","avruchi","fabricate","obviousand","msds","vete","mierda","te","voy","matar","como","una","cabron","pero","maldito","fracasar","cabeza","manos","vas","recordar","pagina","toda","vida","nevermind","disrespect","cc","unscrew","falconxfin","marvel","directory","bones","aflis","mpla","alfi","uppity","imposes","fourth","superhero","ysee","backups","dopy","kindergarten","lisaminelli","actresses","liza","powerdrunk","shoulda","mulatto","shitskin","shaka","assi","intersection","roads","intersections","senate","resides","ontario","eitherwho","wikifag","roguegeeks","wikipaedia","boardwhere","isthat","punitively","spouts","jpgordonwho","slovenianwho","areit","africans","flock","customary","euopean","races","siz","scorsese","jatt","delhi","villager","portraying","trollop","meth","adicted","buncha","apocalype","extinction","compelled","kyle","roby","sexiest","betches","yolo","blaze","mataya","deepthroating","abnormally","curved","gast","committee","bozo","cgd","snakes","slither","howling","forthat","abide","prescription","incoherence","confess","caseit","sittin","fromthere","handyou","belli","beiber","font","disregarded","inexperience","reviewer","capable","undertake","expeditiously","etear","eekster","gya","azz","rott","honored","httpuploadwikimediaorgwikipediacommonsthumbusercoffee_in_dormspngpxusercoffee_in_dormspng","rationally","ve","dihydrous","oxide","roto","peruan","chile","peru","bolivia","ssn","birthdate","inquire","degreei","prospects","insatiable","patroller","exasperated","sympathisers","flameout","disillusionment","patrolled","xrap","sports","app","weeaboo","facebooktwitter","verse","konnichiwa","senpai","cartooni","housei","sticks","showered","chorus","kawaii","waifu","fafsa","gsa","rappers","affiliations","genius","baes","jobs","annotation","peeon","waits","applause","westside","hassle","gonedo","firearms","yorker","widr","pn","chingitty","chong","httpwwwhighdefdiscnewscom","deaf","discriminator","casteless","casteism","iyer","iyers","comeon","usermanukarnika","resident","kyiv","tenderly","cockmonkey","ggr","commentator","mongoloids","cybedemon","projectile","gaping","httpwwwthirdworldtravelercomblumgreece_khhtml","bane","gaashoo","pester","jjonz","hillbille","rave","sermon","criss","wik","affirming","httpwwwwftvcomnewsnewssanfordreadiestravonmartinrallycouncilvotesnlzzk","arelol","bronson","actor","pissiness","reword","congregation","devonshirehe","sockpuppetter","suckersyou","faaa","remere","kedah","hindus","slaves","parameswara","hinduism","bloodline","angkor","pasai","shah","cosucker","visualise","rganizashun","chinesejapanese","hideki","insisted","chinesekorean","dads","credential","dawkins","creationists","passive","graph","whateveri","pseudomona","feydey","fedey","shemale","curl","lotion","prevents","trustit","debatable","reflects","lameass","bigots","imitation","bwain","waaaaaaaah","undergraduate","lacks","youwhat","writers","broader","weighs","worksi","chestop","unintellectual","misinform","derived","fromt","olberman","unitellectual","niggerck","messagesi","reiterate","declineyoure","priiiiiiiiiiiick","beit","hanoun","endangering","terrorsts","nozzlehe","kenya","sailor","nomed","popdck","gayz","depend","yoursamll","unknowlagable","decaying","diarrea","chop","hydra","warningyou","measuring","sep","indistupitable","sentense","zionismand","sourceswhat","abrahamic","kings","mmm","vialation","vandelism","suds","flustered","superflous","applicability","haphazardly","hahahahahahahahaha","hahahahahahahahahaha","fundamental","amused","muchly","hahahahahahaahahaha","hlp","articl","baird","apethat","freinds","backstabber","olsow","muzikanimul","babywhat","nightstallion","jamie","dumbassnd","notorious","hrafn","usercamoq","wellthat","shell","preisthoods","nigedaishoninhotmailcom","reincarnated","citations","ajraddatz","becouse","elepant","appolobitch","disdain","jacks","insightful","maxis","bushyou","entail","uw","dawgs","husky","huskies","suspention","suspending","muchleave","idoit","immediatelyyou","userspace","jared","loughner","saphir","wolf","mindsthat","saysdo","editheadz","talkign","julius","goodye","jujube","antandrus","blink","stinkin","usered","castrate","stuttering","obamas","berber","veil","fictitious","alienated","doneyou","nutcaseyou","drk","shitkicker","nine","muse","muses","mythology","restraint","blacked","crutches","footstep","httpwwwhuffingtonpostcomjerrymichaelblanchards_n_html","crediton","khirton","mothafcka","cube","imense","becuzise","homunculus","skeetskeet","undermines","timer","natalya","freckle","skunks","skunk","psssssss","bunksteve","evaded","samlaptop","idenfinitley","loooooooooooooool","persistence","backs","allusion","unnamed","evidencethe","breed","dajudem","ae","familiarity","isarig","vanished","arbpia","arrived","sockingnow","bff","tundrabuggy","dishonestly","ai","stellarkid","successfully","counting","defenders","socked","knowingly","editionst","btd","rihanna","gggb","reloaded","releases","gaga","kehas","zeu","reviewed","undertale","cheri","sy","silverburg","bitolamatrix","funkyflytalk_","massacres","goverment","massucure","greco","overshadow","ahed","iamandrewrice","mor","homofobe","blatez","shor","mayte","prob","iz","lyf","mayt","bf","ugliness","ryte","thena","ter","netmonger","mystic","arsath","lahiru_k","raveen","complicated","lanka","concentrating","inactive","dumasss","fuckum","babiesum","reenter","psychologistit","eiffel","deficiency","vocubulary","mindset","devoid","whitey","lament","reparations","unnoticed","subtract","divide","multiply","sprang","yeahyou","beforedo","udaya","bhanu","anout","stoke","cockbag","herad","gaylord","traver","beaked","toothed","mischeif","reaked","poncy","inflated","burglaring","lickers","targeted","deskana","canarie","routing","lookingglass","dns","acornwdsmunca","wwwacornnlca","fingertip","oran","affiliates","wikians","whatev","affronted","skinnned","policeman","enjoyable","shhh","okhere","umgo","workingdo","futre","suckpuppet","motif","httpwwwyoutubecomwatch","vtadkxyqmfeaturerelated","merzul","obviosuly","extreemly","specifics","wpsoapbox","ncdave","viscous","nightguy","appreciating","cm","mitb","wrestlinglover","grilfriend","tce","lcnj","joyce","gemayel","wadih","safi","elias","rahbani","bassem","feghali","assasinated","bradbury","redundant","fucknuckle","wownever","aromanian","quixote","defficient","immoral","personl","menat","inner","setiment","dictates","conditioned","propblem","interpretaton","bordering","glenn","zezen","wpnor","cfebfebb","fyrom","skopje","erradicate","hiphop","rapped","vamp","slanted","internationalist","geneva","uniformed","operative","suitcase","waterboarding","stow","implicit","woefully","benzodiazepine","poopyou","rtrd","massachute","faggle","tremendous","encounters","dodged","mispeling","bloviated","misdirection","diaply","procedures","complicity","attest","overblown","dividing","cs","youngin","sterling","exercise","delusionpower","tripping","groundless","advent","emerge","ibrahim","daud","musa","pryag","allahabad","nicolas","notovitch","manufactured","subsequently","tomb","yuz","asaf","profyasin","fida","hassnain","scripture","semiticism","spaztik_noodlezhotmailcom","min","bothwell","lagalese","legaleseyou","skip","ludacri","mischaracterizing","refutation","avraham","legalese","sofeminine","homosexualno","convincingly","gaybut","sean","lewismy","morgan","overstatement","shoult","advertisment","doyou","presumed","blackmetalbaz","provoces","transportsa","cycled","doin","skank","backyard","cesspool","fluids","terminate","disproving","httpswwwacademiaedu_all_with_theories_to_sell_carleton_s_coon_bentley_glass_marston_bates_and_the_struggle_by_life_scientists_in_the_united_states_to_construct_a_social_mission_after_world_war_ii","nameless","sinusoids","motherfckers","fml","contradicted","vii","chrisch","schutzstaffel","voted","laborreeducation","aggies","staple","aggie","pmdrive","pricki","surrvive","weeping","caltla","rvv","ro","fidonet","gibraltarian","pretext","wiccan","inablity","convication","disapproval","discernible","splendorous","thunder","royalty","stormtrooper","apparatus","resemblance","endorphin","spurt","kindest","factyou","roasted","dss","monarchistic","karadzic","embassy","rondodamn","proofreading","aliv","infomation","qpr","assupmtion","infamou","gangstai","tevapedia","node_ue","williamson","highschool","node","ue","entity","blessed","powerfulness","painfulguess","bisexual","masculine","bisexuality","msn","aaaboyzhotmailcom","messenger","icq","ichiupsidedown","nodeuegmailcom","wrech","unprovokeddoes","arkane","sweetheart","federalist","wpnonsense","aesthetically","pleasing","blackburne","kwl","eleet","wronged","hugely","moderators","whatsoeverit","shockingy","unmaintained","alternatively","nosing","ocd","nerdishm","updatei","eject","helpit","troller","updates","degenerating","obfuscating","photographs","adheres","throughit","sadthere","journals","accreditation","papers","antihero","accolade","celebrities","agrue","herring","unarguable","sociopath","causes","slug","beckjord","whow","ouldnt","zign","anome","unenforcable","eyesocket","decimate","frontal","lobe","edie","dienew","leaning","ukip","brady","laara","divert","hybridlily","perfer","converts","cardinaldan","dipfucking","flash","untouchableyou","afford","varify","producer","tweeted","gumdrop","cuppycake","wolfowitz","outwardly","recieve","etitis","httpwwwiranchambercompersonalitiesmsadramulla_sadraphp","httpislunceduernstcatsubhtml","httpwwwsharghnewspapercomideahtm","httpwwwehyaanetyaddashthtm","httpshirazcityorgshirazshirazinformationfamouspeoplemullasadraehtm","dickopen","mouthi","wheels","therof","sneak","darn","minutium","schiavo","flypaper","jurisprudence","perspecitve","swatted","morrow","biscuit","atta","douchbag","carcass","lolwut","cuntheads","banhamma","nao","gayboy","judgemt","consit","journalism","chrissake","cheapjack","waaaaaaaay","incomplete","jdelanoys","fugg","suxxor","legitimitley","fergaliciou","oyur","tesc","degeneracy","simpleton","moderation","shion","kofth","exicution","shawtnegger","murdera","omar","classuserblock","molests","hentai","relevancy","steeped","chagnes","grounds","gains","unsuccessful","sophisticated","warmongering","renault","bo","clio","vaa","voom","mcflurry","motorpsycho","shore","deer","spartan","lultimo","cacciatore","bravest","valor","phantom","hanoi","braddock","warzone","jacknife","siege","firebase","gloria","expendable","mopic","triangle","dien","bien","phu","shining","tigerland","journey","tropic","watchman","dewaine","borf","generatin","rutherford","pendolino","wcml","bags","zack","bazemore","cigaretteswhy","manatee","s__continue","jermey","pursue","grapevine","impotence","pussyyou","deadbeat","penetrated","sphincter","lump","excetement","unqualified","usergwernol","cambridge","oic","expansion","snowflakes","visigoth","composite","celtic","scoundrel","pregnant","miscarriage","rascal","madman","hijacker","patsy","moster","contactr","professiona","chiildern","godf","motherhell","pigshit","taxation","sefton","schooldo","tou","ties","smugface","stead","dirtying","yelling","mortally","allergic","upsetting","haahhahahah","yaaa","yaaaa","haahh","gannon","forgave","thejadejackass","abou","immmmmmmmmmmmmmmmmmmmmmm","faggotttttttttttt","camel","jockey","dink","hapa","ginzo","ocker","neejee","dressing","crossing","haji","gub","granny","digs","bangs","dune","chee","oreo","banging","childrens","clog","nig","nog","hoyland","adsl","bandwith","hidrnick","relaxdo","andromedean","faultless","faultyou","reacting","arceu","moviesever","fuzzy","inchon","macarthur","rodman","wpowny","morbidly","peek","jeeee","zus","batshit","croatia","asdisis","stylistically","digestible","convoluted","baffle","alienate","josiah","blaggard","bastin","solemnly","blessth","doctor","innumberable","aftermath","drawdown","troops","ultraliberal","sturt","tread","goway","confirms","finlay","orientate","userponyo","becoz","compard","hardness","thrusting","microscopicly","screeming","nonstop","oficialy","sworn","yurselve","thang","boiz","hangingcurveblueboy","landing","youcaltla","sucka","molestes","hellowhat","httptheinsrunews","httprussianrtcomarticle","spreadin","suports","statei","digusted","armageddon","tricked","suporting","baxck","stereling","recurring","ocwhat","ahaghagagagaa","weare","chauvinism","speechwe","personso","bannedi","cape","anothersolipsist","stomach","faggg","pricing","checkout","shareholder","aapl","directors","brining","obstructing","compiling","jams","desgraciado","faerie","aire","incomprehensible","parma","lisa","ling","oprah","winfrey","enforces","woe","betide","himdo","dismissive","wikikpedia","fleet","lavin","olbermann","alegedly","audio","maitland","finals","claimswiki","beatdown","basturd","hannucka","observe","negotiation","catholicorthodox","chuch","sink","roker","rok","sori","reel","predict","talkta","commun","idiotthere","andante","wikidouchebag","innovative","httpblogtwittercommakingprogressonspamhtml","shioty","ashit","shgit","shoit","ahot","aot","hsoit","shiot","shti","sot","hsoitshit","ryu","stalkeryou","manny","ponyo","bons","mot","accout","mistaking","understan","repairer","stefanovic","humanoid","vercrumba","correspondance","emboldened","acheive","infront","wikipolitics","handy","incompetenti","flourish","selects","elbow","richeous","robs","misses","hmmmmmm","gi","silviaesque","shitscapade","fightlinker","mailbag","shittin","cheapo","anotehr","detect","changer","preisdent","grandkid","brasil","unfathomable","dumbdid","nokia","scandanavian","scar","spazz","ancestryfuck","superpower","meliorate","heiling","nazist","elected","nekolirkta","manipulative","sprinkle","fredy","kodak","clutching","diannaa","gather","investigated","tletbrain","fdfdf","contrarian","neat","situshpakistani","articlewe","pious","waldo","collateral","blatherskite","intimidating","mysteriously","evaporated","timpailthorpe","agentbond","backi","legged","liberally","gadz","severely","doctorates","cannons","cops","civilly","applicable","suspensions","verifable","akc","covering","seriousness","jeannine","palma","nairs","amins","verbally","irrationality","inexcusable","ccwater","tipped","williams","adl","twisting","httpenwikipediaorgwikiuserrolandr","wikiprojectaircraft","haver","censors","masterminded","exhume","attas","waterboard","dousche","avala","pedofiler","uv","rare","madagscan","lemur","exsists","christophius","sehsuvarugloop","hippo","prediction","timetable","bloated","wordy","collapsing","bridges","overly","siebert","quirk","transformer","laceration","circ","opinionyou","viewyou","whatsoeveri","appallingly","meg","simplicity","stripes","playingthat","foo","hottest","fancies","djathinkimacowboy","subjectivity","propensity","television","comprimised","bots","workplace","parcel","defeniding","wessely","lent","assigned","wipedia","sandpit","alpinist","farthest","deathcoregrindcore","knowamerican","symmetry","sonic","syndicate","disarmonia","mundi","grindcore","cuntmurders","shitim","conformist","heardit","tempo","guitar","vocalist","squeldo","breakdowns","dathis","boiwe","eagleya","flippy","lyk","hardcores","omgz","gage","rawwwrrr","pussies","trend","ohyour","stupidthe","maybejust","squel","badmy","chapel","bands","earththen","shittty","pedal","bpm","harddcoreeeee","rahhhh","yaaaaaa","douchebags","upthi","infidel","mongolic","asiatic","barbarity","mena","illne","removin","teabag","wayyyyy","condensed","tenth","_______________________________________________________________","cake","talkme","lolage","scapegoat","lynch","deleate","dogatro","contruction","oshwah","williamh","yt","oooooh","oooooooooooh","marines","jigsaw","constitue","readd","prehistoric","dogo","lonesome","sci","animay","sarujo","discussdo","becasue","whimsical","alison","investigationwell","partit","ngro","brast","ngros","daisy","sites","illinois","moonshine","bail","ykick","youuuuuuuuuuu","soad","rspw","rspwwikihe","jumper","betty","logan","articple","ggood","ttthink","justuck","vehicles","tank","cerny","painted","ashley","disputable","innumerable","partisanship","regrettable","pmanderson","religiong","alexf","curated","distrust","detachment","adherence","ghcool","defended","defy","insipid","hangup","hasbarah","brigade","orane","wart","algr","whitman","ole","ppppssssshhh","fanboyism","gma","hired","promoter","showalthough","kapuso","zaido","bugging","shaider","gooling","youll","gargantuan","phenomenal","exceedingly","scks","godbless","agan","homocronperson","yup","shaking","mincing","exhaust","juice","plu","tucked","referrence","vegetable","funerallikely","railing","companionshipor","peronality","barnstorming","wikioh","artcicle","anonnymous","wmc","imho","alternate","territorial","disputethat","preposterous","discord","jont","preschool","soo","buttfart","nipples","boobies","booby","dickyou","tut","goodbyeee","au","revoir","pooch","veracity","exhibit","specimen","doggie","whopper","pitifully","draft","revealing","sniffily","interval","tends","narrowed","calculated","lieit","remembering","slips","elementary","adventures","screenwriter","goldman","sporting","collar","peeking","purse","ebay","pooping","providedis","sothat","actuallyit","iowa","wyoming","excluded","soppused","gal","walmart","expalins","copywritten","numskull","legolas","pachecoyou","wannabedo","loneliness","friendless","refreshingly","illustration","workshophe","kaikolar","concubines","devadasi","concubinage","pice","isai","vellala","devadasis","resurected","oftendoes","abues","rudy","lolcow","matrix","neos","gullible","meatsack","battery","pwnd","superracist","evthing","milburn","deletor","mermaid","squid","autralian","knwo","neve","rthappened","flike","plucking","intolerant","prudish","unkind","tabtab","avery","dulles","evangelical","quarterly","argues","condoned","friedrich","nietsche","mount","temptation","pluck","craving","preventive","strikes","acute","dentist","sensuality","uncanny","disguisesfriedrich","shado","aphorism","worhless","wsff","broadcasts","wjjswjjx","rhythmic","playlist","ac","wsnv","wvtf","dickbutt","mozart","woooooooooooooooooooooooooooooooo","synthesizer","bedroom","urinate","imageboard","anonymou","powerhungry","maniacs","glockers","glocker","douchae","dimebag","wie","explorer","opus","safari","browser","doxa","rshomosexuality","calomny","sherpa","derpa","derp","incoherent","truthi","casket","kicker","lfjddsflkjasdfjjdsaflkjasfdajdsfsafsdfsadfadsfljsad","soyou","shmackok","understandable","nowthamk","sd","innaproprate","jkelly","responsibly","pished","greeks","contravene","menj","screens","gb","dooshish","foreve","crippling","manyyou","maverick","sonia","reaves","hangingcurve","safwwefe","reblockable","safweefe","blueboyhangingcurve","subsalicylate","schill","zealously","guarded","prestigious","bigest","blockwhat","academics","erudite","relies","hypnosis","officially","fisk","chancedo","renegotiate","favioe","radioactive","legitamet","soild","paved","bangin","twenty","sess","deletionsan","sanctioning","epidemic","cultures","abundant","dyslexia","affects","undiagnosed","treatable","incurable","primate","embryonic","muscular","orgasm","vocalizing","cuntsy","whoooooo","userbishonen","weikipedia","drunkard","emaill","belligerently","valhalla","macri","mrmacri","buddiesd","omitted","cnt","enhancement","kant","brouwerheyting","strawson","characteristic","examinations","danieleng","revertwar","communicating","tyar","stopdroproll","volcano","pointthere","fighti","seeeeeeeeee","coated","koala","popularity","philipbeswick","taguk","ayn","rand","vandalis","thimks","ncrossman","discernment","medr","freighted","psychiatric","rheumatological","neurologica","wch","khar","poorwhy","borrow","asip","salafit","kundad","hari","carrie","bears","sorority","denham","bk","laser","focused","hersfold","battled","occasions","shoemaker","recommendation","pch","convertible","sushi","vintagekit","brits","unblocks","assmy","youhahahahi","sexofendr","wath","evry","pothead","geniou","cucaracha","beingdont","beijing","mordor","userrdo","diagnosis","conditionyou","schizophrenic","neanderthal","ineptitude","devised","oversized","spiders","halfshadow","termerity","tfm","horn","oingo","boingo","presumption","privilegeit","mjroot","loutish","mandruss","transasia","fdr","pilot","feathering","fukkk","beetch","vacuum","bottomless","chans","lolikon","notchan","worldch","pluschan","stickied","gawd","moist","cud","caspa","hed","bod","ooooon","studs","struten","looken","cumd","ova","computa","beige","colord","creamin","niggr","awwwwwwwwwwwwwwwwwwwwwwwwwwwwww","droolen","stikin","awwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww","specialy","hehehehehe","accusations","clau","coanda","liesaccording","aviation","mutton","quer","gotee","likemore","plank","eene","wikipediacom","viridae","uncorrectly","deformed","carnildo","fulfillment","circcle","dangled","textthe","lakes","vandalbold","etitisit","cartesian","descarte","stigmatize","abbusively","itwhat","banno","soup","pollute","mensa","threath","inshanee","otterathome","wpup","sudoghost","insinuations","nitwit","wrongheaded","comparison","roskamand","balony","religionpolitics","clothing","inwardly","ravening","grape","thorns","fig","thistles","bringeth","hewn","wherefore","fruits","matthew","worshipped","aaaawwww","lester","abrevashun","nswer","queshton","againim","magranham","flipp","uhhh","rember","shovon","disagreeable","psychosis","pontic","genocideyep","gallipoli","britons","indisn","assimilated","algeria","independence","grandmothers","hellyoutube","funnyyou","tempered","dodgy","catholism","excepting","reap","benifits","strengthen","belcher","fetishist","texan","socky","svg","intellectually","greenmaven","gotcha","pseudonymn","stroke","midnight","maniacal","demonic","bloodlusting","vincent","sadbut","brainthat","underdeveloped","realism","implanted","httpwwworionsarmcom","backwe","noooo","junction","inborn","blinder","wpspade","barrage","cheeseburger","cyanide","tablet","compromising","sacrifice","rondakalitus","hamas","founding","convenient","hurry","acquit","yound","secpond","perma","felation","chihuahua","unequivocally","wppa","inexplicably","mitigation","metaphors","captioned","sysopping","canine","killers","graciously","sincere","gooding","goodytwo","crosseyed","wpsock","conciseness","louise","henriette","conti","henrietta","rearranged","templatehouse","adelaide","penthievre","stlye","victoire","chronic","groan","idiotd","retrodumb","blithely","infromation","openness","closes","bullhit","megan","pmcategory","weekendst","blogosphere","breakup","pundit","marsden","nonprofit","surfaced","divorcing","clandestine","lurid","silicon","valley","valleywag","auction","associate","exec","wool","insinuating","parlor","alleges","advancement","distressful","epicenter","enters","defent","usercerejota","talkdigg","userkrimpet","userleki","userandroid","bani","sry","commended","chifumbe","chaitanyamangala","shune","yadi","pashandi","yavana","seha","maha","vaishnava","haya","tatakshana","shri","chaitanya","mangala","consiousness","vandalizingi","dickthere","compelling","gvnayr","irradiated","lameness","everyonethere","anythingtalk","inapproriate","responddo","talkcontribsemail","jess","cyphoidbomb","aldensharon","godel","siece","rollison","madoff","bankrupted","pitbull","poitnless","problemi","assholedont","milly","buuuuuuuuuuuuuuuurned","dodge","chargerzzzzzzzzzzzzzzzzz","unforseen","concubine","courtesane","activitynd","unpacked","giddens","leadrd","conference","critically","livesthi","risker","faganthony","embelish","snowager","sayonarra","diet","rudaddbdddbddbdbaalex","smotrov","evering","toileti","teamer","bwilkin","worksyou","zaire","scrutinize","essjay","gulled","vaginally","interviewer","sellstrom","elaborates","darouet","putin","aims","collusion","willmcw","otehr","moralled","tryong","whihc","translates","sling","barb","buddying","upo","wiht","owni","leavingi","socially","malnourished","thorugh","seep","opened","nnot","aspects","mindful","andd","indrian","dreamcast","pounce","indefinite","noticing","ranked","duded","sinking","amiss","incomptence","administratordo","kthxbi","societyi","youusing","proselytist","persecutiuon","apostle","rallying","oakland","affiliated","themwe","agencywe","occupyoakland","mediawe","wikipeia","beaurocracy","loathe","knews","mutante","dniepr","trampe","vilnietis","vadalize","lyke","alwayz","sledgehog","dreamjerk","dagger","lubed","butterknife","translucence","shiz","afternoon","msc","incinerated","highness","jizzul","rager","darth","vader","hrrmmity","herm","exectued","nwo","jsp","fedarated","aku","assthen","vaibhav","utfuckin","bitchc","hhhhhaaaaaaaaaaaaaa","overrated","usuc","kneed","bwahaahaahaahaahaahaahaaa","upcoming","probation","peacock","disintegration","thathangdrawnand","row","monarch","joshua","rogues","eisenhower","basics","literaly","litrally","chic","disgraceyou","vandalyou","suited","giddy","nichiren","shoshu","mothn","whpo","predicte","reborn","huam","changging","buddhism","allways","catered","snivelling","geordie","fucknig","differing","user_talkpschemp","billcj","billcjs","avenge","weedhead","uncool","angrybirdlover","resonability","userfactualman","spirited","southwest","statemnet","whitecap","mls","visible","announcer","validation","ers","erring","gathered","compile","masturbathon","satanic","washout","unsuitable","washoutit","slandered","uniform","anu","hahahahahhahahahahahahahhahahahaha","rryou","lieberman","bios","terrific","balding","pimples","creditcard","wouldve","unconstructiveness","hoz","caden","shitt","wooha","sooooooooo","embarrsing","merope","curtin","celebrated","suxk","cumtaster","tasting","madam","indeedi","templating","triston","rockwell","bigass","gag","gestopoing","sarekofvulcan","disscus","notarealword","softpedia","entered","thatwhat","awared","sourcebodyentity","globe","amoung","freeware","softpedium","awardnonprimary","biddulph","debated","wikipediasoftpedia","picard","propagating","separation","wrongtalk","onorem","amirite","wikipediast","psudeo","encylopedia","afrocentristyour","northwest","heed","dresden","codex","whopping","invalidate","mardyks","trd","assclownyou","thanked","insinuate","revderted","fitna","scarlet","pimpernel","disliked","opposes","selfless","abd","pratibha","patil","rantheaded","remeber","justificationi","aristophane","poem","factori","capps","shotuing","sweardo","yepif","humanwell","reframe","yeahi","bitwont","diejust","peotically","abusedthen","dieno","sometimesi","comedianso","shouldbombs","mal","adminit","stirred","define","analogous","centers","circumference","theorem","calculus","infinitesimal","grizzlybear","bullcouchit","bizitch","kittens","deviantart","frikking","fooking","tick","notyou","eritrea","shagging","incorporate","yoursef","forthcoming","seriou","vancouver","haiu","fuckerall","wwwchrisohomocombold","deletions","talkpatgallacher","patricia","walsh","wikipediaadministrator","novaranist","kohala","severo","talkmatt","talktimostaurus","talkmason","decker","talknathanielpopoca","talkiustin","talknovaranist","talkzachlyda","usertentinatorarticles","createdst","catilinarian","toga","talkjaylentable","talkconservationscience","talkprasadaman","talkliberalufp","windowism","talklunedeep","talkblackiedog","talkgiovz","talkjarmanpreet","sandhu","talkrpriykant","talkpregish","talkshresthaprabhu","talkespabangalore","talkjadurkupi","talkjb","talkhikogaratashi","kumara","rao","httpenwikipediaorgwikinannayya","aipac","rosens","vindication","retardyou","youfuckingidiot","shia","meeeeeeeeooowww","shhhhhhhhhhhhhhhh","shittttttttttttttttttttttttttttt","ajohnson","conan","eppstein","allway","engages","foreplay","jasenm","dickfucking","boner","shtty","recruit","guild","femme","vorau","wraped","relgion","coolaid","relavent","wikkafkacatchanimalfarm","joehazleton","scored","talkashurism","garzo","stiff","fabricating","occassionaly","colour","scorpion","inspire","bilcat","slutt","leari","molag","bal","daedric","scalzi","confrontation","dishes","humourous","scenario","afebfbedd","yourname","hehehheheh","catches","razed","deamon","holyvfds","settlerthat","lebanese","settler","reprobate","mcnabb","waxing","carrott","rightous","sirfucking","gwernolugly","stillborn","niggertard","rw","cockgwernolugly","tass","rononadl","mcreagan","ameriprise","siteit","malice","aforethought","yourselfthat","expliciton","masqerades","protests","durova","exercution","theories","westerner","thrid","cyprus","turhish","anhero","bleachanhero","bleac","phanatical","ahasuerus","bullish","prevail","labeled","abhorrent","parliamentarian","edmund","burke","detected","extirpate","impartiality","islamophobia","misjudged","scientologist","disallow","quran","constanly","breach","himdoes","belonged","loses","motherfudger","falsifying","bullydo","conscience","trenton","onario","corrects","blotto","adrift","prof","descend","applies","questionit","gtalondon","expenstion","carcer","thjis","_l_","thaksin","fxxcking","anf","hxx","textread","cunnilingu","moses","diasporaanywaywell","israelespecially","usdont","ushowever","recongized","genocidei","welcomes","jewsdo","youfrench","alivebritons","expelled","jewsno","germansaskenazis","byzantine","comei","examplesyes","russiawhat","palemost","slaughtered","expelledmost","russiaye","peoplea","ewww","decendant","devilonly","slaughtering","momentdo","misunderstand","realistmost","differencewe","strongyeah","minortiy","coul","bbsrock","fireworksbut","anymorewhats","blocknot","postednothing","allthi","goading","hatei","admindo","squashed","screwy","noawaday","starkidz","etcno","trusts","infringment","badmouth","pennnis","pneis","pensnsnniensnsn","tosspot","cocks","reformed","hahhahahah","civildid","understatement","aquaman","traces","superfriend","learni","bdefdcada","cunthole","unwiki","lauren","caitlin","aretentive","fragile","enthusiasm","marm","types","upton","lifedo","tormenting","geezu","tiptoetys","usersmalljim","haines","houston","missionary","discofucker","brute","palce","parasitic","oversight","socha","tiller","cooley","frequently","itbitch","chickenfucker","farcical","oreillys","quitters","doubling","behing","seriouslygay","butwhy","doggone","zomby","theft","ambi","crashing","asshols","neways","islamo","goodrascal","dhoni","chk","httpmyoperacomaaryanrajputblog","ronchosthe","gujjar","suppporter","badgujjar","rajputwhy","histroy","contentu","suckdickeer","raghav","httpebadgujarcomhistoryhtml","httpenwikipediaorgwikiuser_talkspacemanspiff","va","posturing","pseudoreference","gaby","comprendo","wekipedia","dreamland","commentit","reinstate","framework","torturer","compensate","eq","harassmenti","enabler","punishing","sociopathic","ryulongi","biter","newbies","yeahh","sox","orlean","chinatown","beardy","wikitan","pocky","simpsons","obesessive","sonthese","fooli","mfn","calamitous","mothafuckayou","lava","marnette","queerbag","queermo","oh_babe","racooon","boxingwear","youy","wrinkled","grease","runt","keepin","jar","ido","scooped","bottled","forgit","poopi","httpwwwfreelyricsorghayseeddixiehtml","testify","lid","singi","characterised","implication","maltese","deletedin","fedreal","everboody","webpast","complant","vandalisedbeen","noobish","mainspace","jundallaah","suppressing","infoboxi","nlu","wuuld","relevent","trayon","thuggish","dealin","driver","assaultin","thievin","trueernegro","himthere","zimmmerman","suspiciously","robbed","doctored","nbc","audiothe","skittle","iced","unprovoked","cuddly","hollister","schooler","substantiate","substantiating","nada","werido","mus","obligatory","bloking","unsane","vendicativ","falsh","reiter","banish","professionnal","interprete","consciously","perpetrated","incommodate","profiles","quart","pint","potby","basical","rend","mig","alfabeten","possessget","skilled","unproven","masks","trisomic","slavs","lesser","salve","jusdafax","baldjo","wireless","sadist","textblock","download","yamomoto","nanking","phillipine","mesimpsons","dummasses","stories","dummass","deviating","unconventional","synonym","merriam","webster","mildly","heteronormative","binary","zeitgeist","pikachu","oaf","delicate","musy","toooo","gy","loooooooooooooooooooooooooooooooooool","oligarchist","itlet","contras","chiefs","dea","oosamaa","mujihadeeen","hilary","poppy","invaded","awaken","vito","pedro","reaseon","piecesof","hostname","broadgzgddynamicdatacomcn","chinanet","guangdong","cabledsl","blacklist","stateregion","guangzhou","broadminded","unintelligent","uncultured","httpwwwthreeworldwarscomforumviewtopicphp","tstartsidfafdaabefcaee","sentinel","socalsupereagle","wikipedblack","ia","swhole","yrs","aroung","thracian","tribes","kenta","poofy","connolley","uncontrolled","combustion","extinguish","urinating","reassurance","semantic","tsunami","skater","olly","bummed","eastbound","angers","beehive","swollen","morgue","poodle","vanalising","myanmar","prioryman","dunderhead","perpetuates","dogs","xxxxxxxxx","sockpuppethypocrite","solarra","cockwad","nyuggggaaa","niggggeeeerrrr","penisfuck","assfuck","niggafuck","namer","dp","parroted","failedi","carrington","ryans","heigh","cheetah","sergecross","deuchebag","approves","deems","sourcesfreedom","opinionim","themnow","hereand","firstyeah","vagabond","woody","israelophobic","pikang","jagex","fibbing","fied","melvin","lolly","waaa","willking","antagonizes","moshe","fyre","cooperative","racialist","jeepday","wpv","tags","cheers","seanmack","satori","wpfa","cmummert","deathtard","pst","bakersfield","californian","leonel","martinez","catechism","lou","petrillo","scrappy","nun","drilled","catholicism","presidential","edwards","senator","marcotte","jazusamo","newsactivism","oregonian","reinhard","conservatives","todaywe","twofer","mavens","multipronged","blogmaster","expletive","laced","demaistre","eliminationalist","rhetoric","acceptance","spech","stun","hatecrimeorg","targeting","suprisingly","nyer","pdt","donohue","theatre","experiencing","kiki","herb","broadway","prada","timely","romemore","papal","kellynlane","booshakla","sockpuppeteer","diend","theorizing","hodel","theone","talknigger","surrrrrrre","rapisti","finder","testified","clefify","ilija","garasanin","nacertanije","rulled","subjected","muslimsof","distroyedby","selfs","ideologywhich","chetniks","ressurected","everyting","foole","everybothy","bosniak","spreding","settlment","victom","lse","quting","cuntmuffin","truble","encyclpedia","oih","emma","faithlesswonderboywere","commin","yathe","cunsider","luckywe","firstthey","windpoof","shts","pantwhat","hamsterbold","gimme","cfhs","grad","stair","gobbled","greedily","tressel","locker","reflect","mosh","wots","prblem","goebbels","heinrich","himmler","peen","hammeryou","shred","beraian","pagesand","disabling","travelled","reatarded","removeing","mssontomarsk","httpwwwstategovgdrlrlshtm_toc","siting","chauviniste","lithuania","vilnius","unpleasure","stupiditythat","ther","compliant","fileinva","mula","gildajpg","fileoscar","nevesretouchedjpg","fileeliane","concertjpg","bollingjpg","zealous","clobber","wpcivility","politeness","shrink","expands","suckling","piglet","mercilessly","redistributed","aaaaaaaaaah","formation","captor","entertaining","fut","perf","wpetiquette","wpmastodon","wpbite","translating","prosper","mctrain","vitus","grinder","wwwavoisioncom","pople","withthe","wikipdeia","hoaxer","hoaxing","eveything","rida","itwikipediaorgwikimarie_luv","frwikipediaorgwikimarie_luv","eswikipediaorgwikimarie_luv","ptwikipediaorgwikimarie_luv","httpenwikipediaorgwikiportalpornographyfeatured_article","quiana","woni","hypnotoad","suggestions","faggott","subwayjack","homosapian","dow","ghostsa","wpgfy","niggus","wyt","jett","odle","arseholes","prik","estonisan","comittee","jerki","tyrannical","motivate","tattle","russians","propoganda","niggerkite","fuckn","loserdo","peridon","estranged","akm","pk","surrounded","chubbo","stylei","ariyou","hj","mitchell","expresso","idol","endian","motherfuckerson","nihgtmare","unrel","indus","idependent","conerted","arabs","majestic","laguage","indians","kashmir","jammu","dierectly","cocksucer","molesterfield","westerfield","searched","bluesband","duncan","civally","cival","enclyclopedia","editorialist","crafted","chinaman","reminds","torres","affords","interface","belonge","wwwchrisohomocom","romania","seselj","boxes","sums","wikipedica","obedience","weeelllll","istead","classes","puffery","wikicivil","applued","insulit","wrost","thows","pram","biado","unpopular","penile","mummay","kimvdlinde","amdin","user_talkmalo","fusspot","bbb","snottily","pathalogical","pube","thisis","wheva","shure","shortie","minehe","bigand","romeo","hallh","frodo","sooooooo","userscjesseyqueer","array","alalalllaallalalllalalalaalallalalaaallalallllaaaaa","nivix","qs","nivixs","wer","marybelle","wouldya","achmed","clipped","doodle","cowering","pressure","blaxtho","hype","dungeon","dragons","oust","sordid","indictment","himhe","personit","notrhbysouthbanof","bosses","unveiled","takeyya","massager","feloneou","servility","danged","cockonce","mechanics","mandate","textten","liars","onanizing","brainsick","opinions","importand","unblockwhite","inflatable","sto","eoriginal","founders","smallminded","pettyness","godliness","stripmall","ingestion","burgers","inconsitency","childishly","eductaion","regressive","gaffney","jps","sweetiepetie","waging","fervant","unfortunatly","reminder","fanbase","taboo","embittered","demilich","brutality","cretinous","samalek","skyscrapercity","oliver","cromwell","wij","polece","mailinglist","popup","ads","jultnet","jthzcom","enthusiast","stalkerlike","adrian","heracles","frreaking","pleaze","chasey","lains","bagcok","suckerdick","facehomoasswipesuck","ballsdick","tarnish","raceit","anyother","pinpoint","consistant","kos","dck","occupation","postman","claimant","concluding","connotes","roadwhore","capitalising","inconvient","parody","rapistwarmongerthiefmurderer","fantasize","blindfold","cheated","dorry","kommandohimmler","lasst","gruben","rigal","mansausage","tbone","boned","burly","dirk","jodie","wiitard","sylvester","stallone","stallion","lamer","losting","joadfyh","outrageously","sovereignty","hairs","fischer","sakedont","interpretations","flexing","incriminating","derangessadistic","disturingi","commence","drill","niggaknow","drv","wakpedia","usain","bolt","invlovment","faggoting","latinus","banes","homey","fourviolas","pinethicket","disagreement","buttlet","straightno","intendednd","culturebut","itjust","actdoesnt","thirdthere","brotherly","pedophilei","themthat","asslook","shaq","wade","fourthjust","reffered","gaydoesnt","werealot","dehumanizing","stupidlike","gayjust","comedies","peoplesomeone","fifthi","blahbut","impose","patheticjust","ripout","goodfrom","lincolnyou","definitive","lane","bagoas","alexanders","bagoa","haiduc","saystony","silenceno","comeback","supper","barnstarfcuk","immediently","iridescent","specify","etty","cobb","fora","gui","congolese","greaseball","waitin","toerag","scummer","insistance","retracted","entymology","smccandlish","follower","damning","sevurity","wikipediaorg","advertize","engines","advertizing","brasler","pinetree","wangbot","wortheless","miami","pp","loco","wrecked","jaysuschris","lusts","popin","capp","jewl","eatn","imageflag","mexicosvg","sayand","effected","peak","acceleration","crust","tectonic","plate","effecting","dickbreath","madcocksuckingboy","tattooing","tattoo","asslicker","tosho","redemption","thorn","blaxthos","comport","shamble","remotest","tos","covert","guyyou","whackjob","lobster","conceivable","attested","curps","amadeu","amadeus","jackassi","helloi","motivates","danielrigal","badmouthing","misessus","tyro","wppersonal","racisti","thyself","robertzubrincom","zubrins","success","legend","sleepy","previews","tales","copywrite","preview","aways","laserdisc","ichabod","vhs","alice","wonderland","objectivity","kirk","invade","conservation","rating","mathsci","redaction","surgical","technofaye","occam","waving","toothless","ludwigs","bmusician","exalted","trivium","pantera","kamelot","influences","guitarist","beaulieu","hammett","mustaine","robb","larocque","heafy","anselmo","obie","palotai","keyboardist","boyd","incubus","khan","trujillo","cioky","dolmayan","sethgar","daron","malakian","thrash","catalogued","rythm","acoustic","stinkman","maq","legola","horrorfying","acheron","smells","reinsert","cantarella","percy","angrydo","fb","unplug","wikipedaphile","eductational","threesomei","chainsaw","nandesuka","threatsiam","barnstars","embarassing","muboshgumephistophelian","claus","foundational","clarifying","literate","allowance","prompting","adoption","attained","broom","nobhead","subtly","obscure","waaaaaaaaaanker","fattyjwood","wikoipedia","fouling","tabthey","cacknuck","survey","unedited","greatist","gaurd","peadophile","bitchdo","nonspecific","obscures","buddies","misconstruing","dilweed","highland","scot","strathclyde","uncomfortable","gaddafi","instigated","wikipadian","herethey","stupiddo","bonjourrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr","thumbleftpxbomjourrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr","defie","explosive","peform","cautionjimbo","banzoured","kthnxbai","usersummerloverit","damages","juan","montoya","texthe","sandifer","forked","pennies","meee","assk","internetz","rams","revertedthat","eraseit","cliquey","dollars","hotter","selfi","registering","cockblock","prude","zit","squeaky","voiced","soap","hfydrhhtt","tttt","ttft","ttttt","ttt","gfftttttthdh","dhtdrrth","ffffff","fffffff","dnjqo","dqwelj","scrapironiv","rightnot","fagplease","derhexer","jschnur","triviums","grea","tidiot","fuckig","excruciatingly","morron","abolished","enemies","coherent","cumberbatch","milburnwho","rved","burntsource","tomfoolery","imediately","flow","connections","mista","pathetici","incorporeal","floating","tainted","joshbuddy","vandalismhow","haa","haaa","onlinend","viz","mrfucking","gonesuck","criticizing","screenful","denialism","tchaikovsky","mewulwe","se","inadmissible","terms","trivially","shines","conspiring","conducting","shield","humongous","focking","vatniki","penor","nigguuuh","httpwwwenotescompsychoanalysisencyclopediaunpleasure","wikigod","inquisition","slaking","flop","taysia","juss","somone","alrighty","whoooh","suckered","grumpu","stye","talkrelaxant","dike","fckingsandbox","yeeey","yourselfgo","profaggot","buring","guna","biasedyou","mongrol","swinedickk","sukker","headyou","farshists","likker","waould","funcking","retyc","dismissing","counterpart","sajuro","snott","parts","oui","retarder","youngamerican","fletch","hu","benidorm","disscusions","wancker","cumi","mygt","oooooooh","gtv","luxury","quakenet","gamesurge","titled","jedi","deity","userpleasedontdeletemyedit","geographical","hounded","peon","wwthevergecomwhyareeditorsleavingtheworldsbiggestencyclopedia","latina","yuh","braggin","pum","chief","spartaz","devolved","extraordinary","complying","overturned","consistenet","violator","gudieline","blahblahblah","legalo","anonying","nonsensedakota","offyou","hahahahahah","networking","disclose","reprogram","constructively","nofollow","reinserting","matching","regex","azazphotobucketcomalbumsjpg","sucksfrozen","sucksvvv","vvvfrozen","sucksvfrozen","revenger","interpersonal","accontless","eaters","fetus","horrific","lube","allmusic","jbkramer","lanchiau","kanina","sockputtery","commandent","errant","acutually","adultery","pupptery","truei","cutkd","tiw","girlthat","isles","cesspit","furluminati","crushing","masood","azhar","killind","hundreds","hindi","andjust","tyou","faying","ealier","quenti","suitcivil","twelvers","ismaili","ecw","lashley","lessheard","vanu","yiiiieeeeeeeee","baaaaaaaalllllldddd","baaaaaaaaaaaaaaald","yiiiiiieeeeeeee","hahahahahahahahaaaa","baldi","xi","hahahahahahahaaaa","baaaaaaaald","aquestion","foru","potexionn","pagemwaaaaaaaaaaaaaaaaaaaaahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahaaaaaaaaaaaaaaaaaaaaaaa","pagewhat","lbj","freee","declinei","snugglies","kurtraschke","snuggly","thejocrop","banished","siteyou","givin","unthinkable","picky","fifa","saves","participate","tk","terry","koeckritz","colossal","hush","crappiest","omgare","aquman","rt","aimeelee","reall","canadianaussiekiwi","drkiernan","anderson","aggiebean","cybertrouser","sweating","undisciplined","venom","stumbling","adversary","frightened","diabolical","bloodthirsthy","entrapped","yugoslav","uahahaha","loremaster","epistle","bastardtroll","txmaster","nsuboy","mia","oklahoma","faeget","profits","forests","clearcut","remorse","mindwith","token","maimed","cutted","trawledand","oblivion","decimated","humanhere","apace","eliminating","introwho","armband","pneumonia","interruption","advertiserthey","snack","otherfucker","anywayit","voluntaryslave","hal","turner","precvious","truehe","subh","azal","browne","reproduced","babi","apologizi","stragiht","buggin","rightuz","helpin","ohter","quickeri","friendsi","mroe","bullbut","niggas","pagesnawmean","gulag","guards","kgb","allie","haunted","meany","strawwe","residence","domicile","manually","minke","converter","amazed","iqbal","lesbo","usermega","revengecolorado","timberline","acadamy","drafting","copyedit","fuks","florence","hight","adminnaizsi","crhistmast","somneone","whjo","pniz","smlall","someguy","blackouti","nfl","prerogative","flare","cringe","handled","nan","marsala","indan","wakkeenah","reeve","suicided","reeves","vesa","repeating","wahkeenah","administratotor","loseryou","guidance","postgraduate","colonised","westerners","charadeshe","parseable","dataset","reaaly","pinethickets","capitalization","moldovan","veterans","trns","smirnov","voronin","alogene","colonist","polical","assholesuck","butters","denialyou","burial","commentyou","misreading","premarital","follwing","daylan","ik","spel","thenatureboy","kwon","ranks","gtfoyou","pearl","harbor","incorrectst","facets","contentnd","criminalized","hebephiles","hebephilia","subset","atlan","carmegenon","themed","sutpid","bodom","kalmah","amon","amarth","sn","bstard","potters","attackthat","diverge","confine","mealy","monky","yogurt","yoghurt","engvar","streptococcus","thermophilus","salivarius","subsp","vacuumbrain","assurred","plagarised","galore","psyche","exhaustive","pedaphile","appropriateness","epithets","httpenwikipediaorgwikicapegelj_tapes","prosecute","seaking","asshoul","retarddo","unrealcoopnet","userbabbaqyou","beeline","yetthat","aemoreira","titlemta_regional_bus_operations_bus_fleetactionhistory","beelie","brothel","mucha","lucha","witnessed","borat","infection","santorum","hoc","ml","attachment","dosh","pguniverse","onscreen","podcast","noteif","alitalia","rom","nummerous","flyertalker","faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaace","thugocracy","whateverit","guided","ipsockpuppetmeatpuppet","muhahahaha","daddys","neighbors","notifying","pronouncement","judgements","deemed","unfit","tarts","bettr","bak","teamin","mothafuka","boothy","fartchina","sm","isdo","thingis","digimon","completyely","reappaear","migh","waisting","hhahah","socalled","deicision","hemorrhaging","tinkabusivwmf","girlwhatso","polelolthat","bitchu","everyoneu","vandalu","himim","herenow","memaybe","getin","fronm","fbibuddy","yourl","ava","ivy","reeks","karmin","convienent","absolving","contragate","stupidd","declinenobody","hike","martyman","reckons","mattinbgn","asserting","georgie","fuicky","jackbrootjss","este","gusta","durita","por","atra","wwwdnsstuffcom","argentina","buenos","aires","huemul","misbehavior","signning","stdo","ina","eazy","fuckz","nhrhshitler","relevence","highways","georgia","perdy","godness","resonable","mlk","malcome","thursday","elkman","tyler","harasses","medcab","putem","narcissist","condemn","bbs","ltte","disciple","aspirant","custom","burkha","smuggle","idf","firing","bending","favors","ko","karke","tujhe","kya","mila","saale","khud","kuch","jaata","fir","dusor","karne","liye","hamesha","taiyaar","rehte","behenchod","kaheen","khush","abb","apni","maa","sis","toh","aake","chod","dunga","dono","chuda","bhosdke","kiya","aise","raha","jaise","behn","gangbang","diya","jossi","scruple","youhow","wikisuicide","kafkaesque","craziness","rawat","spokesperson","alcoholic","gayyyyyyyyyyyyyyyyyyyyyy","ayarkto","gundagai","crawler","condecending","serpahimblad","evans","oncoming","heather","mills","strongeryour","endangers","endyou","awaits","thatand","phaedriel","vnm","tebag","ooweeeooweeeahhhh","woof","gunpoint","kingstons","chairman","ownershipwpooa","citesource","contentyou","mismatching","congruent","wronger","henceforth","righter","sayerslle","baptist","sorting","georgewilliamherbert","intimately","jamesbwatson","fiddling","sir","scintilla","recycled","opponents","ira","pontificating","starvation","excess","windsor","grannyshe","coven","warlock","radiojerk","lotperhaps","tracing","gwen","contradictory","lightblue","usercategory","lgbt","nocat","categorizes","affix","ligand","acs","willingness","intelligently","pretension","divisive","awareness","unsound","berate","oily","cowworshipping","mallus","fkn","competition","ducking","mustard","biotchhhhh","faaaagggggggg","duplicate","nutsack","cotton","macks","fatheri","alleging","jenny","unannounced","infinitely","settles","slop","prop","exploitation","alongyou","pioneered","stitch","frim","lifesi","reprimand","retroactivelydoes","problematic","lchaim","skal","headbutt","bigjob","reid","banged","fraternity","militaries","womanit","neotarfit","forenjoyment","buffy","theresa","dogpenisknot","inalienable","retetast","kariteh","violationg","crow","rhoderedass","cries","chickenmmmmmmm","offering","knowl","sweepy","littlecarman","sweeping","pear","advisis","countryman","twattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwattwat","wpdick","calendar","chronological","acknowledgement","mindwhat","targets","herded","vileness","radiation","jokeyou","newsweek","rescind","policiesit","drake","cali","hemisphere","bollocki","timeyou","elf","provokation","minorities","makedonia","falsifier","httphistoryofmacedoniacomwordpressanessayaboutmacedonia","httphistoryofmacedoniacomwordpressthegreeksofmacedoniainslavicsources","httphistoryofmacedoniacomwordpresspseudomacedoniansthefallacyoftheircausebyvasilgligorov","httphistoryofmacedoniacomwordpressathesisonfyromiandenialsyndrom","administratoradministrator","pseudomakedonian","languagethey","grrrrrrrrr","yezzer","harris","coughencylopedia","knocked","cuntfrank","csd","denis","oliveira","souza","db","user_talkfrank","brownie","samir","shithere","shipped","gitmo","broomstick","washes","spoofs","vpns","surfing","badass","ooohhhh","mwalla","fec","ballot","dr","redirects","minga","paedofile","fresco","backbone","worhship","persistently","wealthy","webmaster","brittanica","doorit","adminbrittanica","fee","umberella","rain","vandelising","follish","bmt","reopen","revaling","cvu","transwoman","brutalized","identified","molestor","aand","dishwasher","permenant","cant","youryou","rist","fuckiing","congradulation","talkjesserafetalk","mightily","carei","decapitate","jewland","httpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawkinghttpenwikipediaorgwikithe_real_stephen_hawking","httpenwikipediaorgwikithe_real_stephen_hawking","pointi","converted","ephebophilia","fourty","danb","therapist","verge","loseing","dudethe","addedand","thatunderstand","addressesagain","pleasein","stuid","californiaalibaba","motherfuckerdo","lonympics","cam","pssy","demaing","thraten","whio","investing","stupidness","recepient","terrifed","unelectable","kinsider","jayhawk","squat","incompetant","sincerily","feedbag","httpecldukejournalsorgcontentvolissue","belives","britches","britch","sailed","detriment","camels","armpit","firebringervt","stupiditu","preys","pharma","motherfcker","motherfcking","barrier","wikipedea","unsung","nothingyou","wikimods","enable","aggree","honorably","gysnu","beefcake","shatner","astral","beffcake","loathed","ffi","clout","avout","girlswant","yourmom","mrmacman","mommmmmmmmmmm","yeahhhhh","chaaaaa","usersennen","goroshi","bullst","standardsoh","minion","redistributionit","medo","ultimatum","basisyou","bret","lights","gayfullbuster","yourasshole","aitel","dodging","perpetuating","fued","classy","arrrrghhh","brock","bullshitive","stat","nlui","pupperty","handjob","perpetual","gayyou","ronald","fetish","unnerved","lots","ovum","pinged","meatpippett","pounding","cells","trough","spaz","exploded","perennial","carlos","apteva","collegial","snippy","evade","amos","conolly","remopvecd","sionbgle","smu","hiler","yeahjh","shioch","himw","smugly","niot","worjk","derranged","nothibng","everone","wihtout","hugh","gimpphotoshop","zoomin","frace","ci","pleigh","hums","plantisimo","viva","cptdb","route","mccowan","markham","buisiest","hinder","restablish","decisiv","acuused","unbias","handler","personalize","locationi","mustdie","itif","aloneyou","stretch","puff","penisit","boyhold","tantamount","staliking","raptor","gospel","sensical","contradictionyou","attatched","intelligible","flowing","redundantly","symbolic","dialects","discerned","issuethat","methere","doit","fucers","milli","repsonded","apporpriate","iy","blasphamy","belldandy","keichi","underly","scenes","seduce","victimyou","allen","dared","useriously","jsut","ompleted","unscientific","breeding","practiced","matte","rif","lightning","potato","strictest","dowhat","hulks","unawarethe","hulk","bench","precinct","explainations","tidbit","uniquely","apolegetic","mukhtaran","mai","baba","etalk","souless","godless","roboti","lockout","skilli","kinkeshi","fari","remaining","kinnikuman","dath","seite","quisling","urotrash","cordially","ipban","dreadedwarlus","royboycrashfan","prays","onwhat","nimrod","duckworth","towner","carpetbagger","personyour","puttin","dora","dismantled","torn","dismantling","setup","sweety","correctnessit","xxxxxxmotherfucker","possbile","boothill","footapper","render","gcrashr","fehime","nemzade","selfthere","hih","fahima","sultana","dolma","bahche","rcvd","nishan","shafakat","yildiz","ortakoy","hh","damad","ghalib","pasha","tashvikaya","vizier","khadija","mahmud","bey","cavalry","selimiye","camii","httpwebarchiveorgwebhttpwwwdwnetroyalarkturkeyturkeyhtm","uncircumcised","greetings","decorating","scat","buttsex","caper","secert","negotiate","finnish","finland","hustler","gooooooooooooood","diiiiiiiiiiid","iiiiiiiiiiiit","dinosaur","deletionist","sacrificing","dip","abhor","molecule","vern","cork","vishwavijay","mohenjo","eligibility","cunningbloody","idiotplus","ibut","czar","cing","chf","transferred","neoplans","nabi","xcelsiors","amide","truce","ruber","chikenwe","arnold","palmer","havedrinknationcom","neweasyrecipecom","recipe","digg","bartender","aggregator","deraispl","againthat","extrapolate","harrased","aright","reviews","periodical","defame","segment","affront","depressed","blockingi","bungholei","tennessee","qqqqqq","olando","terrancee","soctt","raynor","ndgrade","christendom","cooky","hong","yck","chinaundeniable","criticised","rulebook","pompus","nubdo","mackay","offened","brookie","lp","nub","brooklynn","brooks","brookstone","brookback","bookie","fyishe","nobel","laureate","watermelon","prevaricative","putz","pussying","httpenwikipediaorgwikivera_lynn","strangelove","fijian","otrivia","retardedenglish","negrito","moitheather","eff","acheived","neccesary","remaines","legislate","chinait","americo","centrist","duncharri","lunatics","usurped","politcal","argentinean","agenga","falkland","buncgh","motherfuckerthere","whoi","originalsinner","notdo","fvcking","inhuman","hijra","chootiya","ni","mordetsky","carlito","nn","cretino","amesh","threatful","copypasted","dealwrongdoing","flex","aparently","airline","isbn","catalog","honey","fundrasing","setting","protypical","coulter","kook","dummkopfseri","meansolar","exploration","physicistswould","httpwikipediaclassactionorg","hugbox","vexatious","musicpvm","collapsehide","unspeakable","mediators","employ","conceptual","coddling","fiendish","aoluwatoyin","infrigment","elements","helomg","quebecfaggot","cockmuncher","sisterhood","wikiality","ptkfgs","chasing","qouting","compass","unorginal","tables","stalkerish","innocence","indoor","misterioso","complanin","hapens","dah","retaredit","daanschr","spellings","uniall","dieted","classed","noyes","suckage","eword","jezz","booted","bouncing","violin","academy","snicker","jlambertnandesukaehhehronz","friendyou","andreasesgde","apologie","looker","arise","disgusted","embarrasing","gabe","pilage","mediated","furthering","wpownership","luego","conspire","absolte","nicer","subjecting","namespace","revertedi","vzoqjgvdm","dancehallqueen","jamaican","perpetuated","compounded","digged","genie","analogy","prints","cautionary","doid","confirment","upper","bhramin","puppeteer","layne","staley","hae","eyebrow","wittering","twittering","nervously","amazes","pasting","deux","aeroport","tater","hooter","funbag","hootershooter","zuma","usd","taxpayer","luxurious","proverty","schock","taxpayers","diversementality","yummy","rapping","scurry","propagate","mouthpiece","murderous","shium","foe","lye","whant","meaner","levels","depriving","prognosis","altruism","disseminate","clamor","hissy","wpblah","wpyadda","yadda","rumination","squati","uhhhhhhhhhhhhhhhhhhhh","niggerball","ligitimate","accountability","responsiblity","patheticu","mirrored","httpenwikipediaorgwikigarolou","eskog","deadlydragon","abusinmg","jw","cheema","tease","kuti","bchay","baaz","aa","ja","wrna","boht","tng","krunga","pensis","europhile","accpetable","unklected","commission","googleing","sid","pogoing","pogoed","parted","cousinhi","lagers","fracas","libsey","lagged","boiler","clasical","overboard","leeway","reacted","instigation","dickbrain","sorriest","misfortune","narendra","titiling","dddfcfced","backspace","awarded","creationism","xtian","himherit","creationist","thunderstreak","vendor","focusing","maxx","diesel","innermost","helpfully","sandwich","disruptoryou","supply","cafes","websiteit","deforming","inverse","cupcake","loney","fruitloop","diggu","hanson","practices","needchian","sentenced","userenochlau","shiny","sympathetic","arkjedi","athiesm","usertalk","pains","theretheirtheyre","totootwo","toddst","gleefully","mmmkay","presumptive","bing","spouted","trf","lovegame","landon","idot","dufus","dufususerpic","zminecraft","unislamic","prayer","females","lash","yemen","egypt","veiled","blato","gladwys","snowfire","nefarious","kingshowman","levity","environmental","thankless","blocvk","flyer","harrassed","relate","sond","steamed","happiness","philsoophy","quiickly","omitting","philosophers","academically","rigorous","withouit","provocation","statured","luminary","augustine","aquina","especfially","hume","tempted","throng","rebellion","contra","escalated","popped","monoxide","scallywag","shelby","muci","contradictions","scorecard","kow","takpage","menot","funkmunch","cobain","sayingyou","sensei","godamn","reedit","binksternet","semitewho","bltch","barris","batmobile","steering","guiness","regress","barrister","anagram","goodnight","jd_uk","talmudical","yeshivah","philadelphia","typ","citate","annonymous","ymg","oron","cuntwhat","slash","byran","mattison","enviroemnt","referance","permissian","manif","reunification","bead","bil","facethat","vandalim","hulio","httpunruleinfofileswankmpeg","woah","explination","evarrrrrrrrr","dragoni","dipshityou","terroist","coutnry","pakistian","collective","bullshitted","dumbasssale","trading","topiccreate","callingit","clerking","sakes","microphone","inclosed","divice","echoing","distortions","screaching","guesswork","values","finance","insuinating","postable","blatently","unsubstantiated","heresay","newband","tonightand","violationor","km","woogiew","wuss","cryin","wahhhhhhhhhhhhh","fae","bovered","rightb","thepeg","screams","procured","majorly","wikipage","communists","spangled","germane","upfront","underlinked","delink","ddduu","callanecc","tasc","vadalizing","retared","rent","trasing","salem","paga","renta","rulesi","comical","felon","mordecai","tisali","untitled","questioni","sways","guyshe","cheerleaders","thar","acroterion","wikipeen","bofh","isps","wikie","propogate","wikipornography","quack","poopy","pornagraphic","fuckeri","dunce","teles","anuslicker","stereotyping","gale","vilolating","distribute","hearsay","dispappearance","authors","obscenities","crude","insertion","vandilise","phillip","trueman","infallible","abrech","heeck","happends","userbagumba","vaselineeeee","tulip","ded","documenting","lettin","sledge","pulverize","masticate","organize","pilin","cussin","feelin","increased","categoryterri","jagoff","actionable","pakisit","uspoverty","honourlike","afganistan","soviets","couragebut","pakisa","zeal","honourthe","worldpakis","eichenwald","takeoff","kla","coarseness","resolving","bohm","sarfatti","hado","grooming","voter","unblocklifetime","wanta","beavis","butthead","jessica","yahhhhh","faggoti","vandalizim","fuckelwad","calendarwatcher","lib","caution","exercised","wikiholiday","departure","fuckbags","stupied","lb","aitia","barrymore","supping","lubbock","predator","entertainer","davidindc","davidindci","wikibreakit","faux","retraction","reiteration","idiosyncratic","parlance","damnable","reliability","fukker","investigate","catholicsi","anthropologist","biologically","behavioral","forensic","biologist","developmental","psychologist","someon","judea","dowry","remarry","morality","precisionthat","questionyou","sheepyou","automation","crumb","ariel","cking","bumhole","theblacklarl","marskell","tne","mosher","sted","identifiable","squatted","shortage","inflexible","sneaker","rewrites","fawlty","basil","abey","gandu","salley","kolkata","salla","youshitbag","tfg","architect","virginiani","wordstar","amber","autocad","whatnotit","virginia","weirdest","clit","pulsating","extract","sensitivity","aome","samantha","pulls","crediblenif","zarine","greenwald","stickler","informationthat","fracking","tablets","nurse","talksweat","mashed","neutrally","melmac","attach","shittest","jackthomas","ooooooooooo","widespread","localized","abrasiveness","aver","pursuing","thereof","ahahahahahahahahahahaha","dakotakahn","montel","vontavius","porter","continous","cntdo","frost","chokeing","rl","candied","exmaple","cobaine","factoid","continuation","envies","torah","transgression","displays","allthe","realquick","yaoi","ohhhhh","misou","critcize","parsons","masturbated","scams","unread","clambake","gameshow","sidenote","xizer","ailment","wringing","spics","constipated","runny","yesmoredonkey","comissioner","implemented","existit","unwatch","wphuman","dgaf","imperialistic","bitey","toothbrush","feminists","womenz","places","jeffpw","norfolkline","gooder","truthiness","wikifagia","respectyou","embarassment","chessgamescom","kibitzing","mywikibizcomuserboxstufchessgames","egocentric","egoist","notedmost","persistency","lawsuit","godwin","farwe","amdrew","nana","coleman","iwould","squiggles","futility","whati","thig","disrespecting","humbles","stained","speculate","mcgeddon","boohooo","newsworthy","cater","ausy","kralizec","witlessfoolish","fatuous","sillydaft","asinineunwise","imprudent","injudicious","thoughtless","heedless","meanshit","quis","custodiet","ipsos","custode","consemnsus","wrogn","textx","pagewhatt","getand","wuzzup","sadomasochism","bankruptcy","boogieman","devastating","talkenglish","oni","doill","buttpirate","eachothers","exhibition","amputation","craft","pharisee","financially","allready","moraly","historcal","availble","ordering","euromaidan","userguto","comitting","rnc","wrap","iddea","wallets","healthcare","ppoor","natives","messin","richer","pooor","supermarioman","ravioli","jingle","hateryou","francesca","hogi","pmg","reliably","uhhwhy","canand","canhmm","dictatorships","hurlock","deportment","newpedia","tac","vulture","turgid","preserves","quoter","sourse","websitewhere","reportedyou","harrassmentit","yingfuck","tap","wisner","processooop","reftipto","sheltered","cocoon","boyle","fairy","mormonism","bitchbuss","sockpuppeti","turtle","libstar","discrimation","heher","tiem","historyi","lolyou","joba","monella","hirohito","wawa","neturei","karta","kach","nk","addint","balt","whitechapel","awesomeness","seeeeennnn","riff","drumming","ammounts","realllyyyy","sociopolitical","disciplinary","billvoltage","ofencive","motherucker","fiddler","boxmaybe","foreseeable","details","descussion","tdi","couples","buttdaddy","ooooooo","scienceman","convience","gayfag","inquiry","supervisor","contraception","babydaddy","sunlight","calcium","luminifer","contradicts","httpwwwflowertravellingbandcomenglishbiographyindexhtml","atlantic","grt","canadaitalic","fucknut","mistakenly","handicap","disadvantage","nerdskanichiwa","muhahahahahahahahahahahahahahahahahahaha","mega","worshiper","feller","facemask","cleatmark","ruckley","starr","valdal","ignorrant","wishful","natzi","pumpkin","hallowma","flunk","artlce","substuwvandalismpresident","stateswikipedia","nonfactual","goad","youthi","comprimise","ase","unthinkably","coldyou","internetor","tt","quicknetthe","infoalso","wayare","whatpunk","broadband","bt","fuckyourselve","auschvitz","everyfucking","gravedancing","thio","ankit","fadia","attendee","def","httpsecurityerrataorgerratacharlatanankit_fadia","jl","naudin","nomnination","radiofan","straining","ozzie","cooger","clarita","saugus","dicrimination","marek","freezes","rythmic","mrscrimpf","copmes","evaluating","httpblogstelegraphcouknewskateconnollyare_you_a_fachidiot","taugt","serbophobia","disparage","igger","upgrade","adamant","hasnain","pageant","secure","rumours","kellermann","mmmmmmmmmmmmmmmmmmmmmmmmmmk","hosting","spithole","mall","championships","kepp","asi","unbanened","wll","wreacfk","subjectiv","excellant","quincy","forensisc","columbo","candlestick","tali","ihantala","norway","russkie","karelia","scrotal","sacksespecially","yum","terminall","storydo","tocino","deposited","watered","manure","gurd","disputes","venezuelan","traditionally","progressivist","invokes","fidel","frantic","mindfuck","sockfuck","apankrat","hella","wikithority","faq","chad","helo","whop","repliin","goodbyei","ivan","rumora","nicknamed","direktor","alasdairgreen","logicalcreator","consoldiated","omnibussing","combine","mucky","hodgepodge","spreads","secularism","hindutva","tearing","bjp","twatdo","hehhehhehe","vipernerd","fatter","muahahahahahahahahahahahahahahahahahaha","muahahahahahahahahahahahahahahah","mixing","disqualify","noteworthy","bubbka","urine","zip","twinky","demented","predatory","capsice","adequate","unauthorized","anywaygo","wikipolouse","qeen","leather","daugher","alishah","wal","httpwwwshamalionlinecom","bache","saqau","zenite","muslimsbut","padarnalat","amanullah","succe","jailed","murders","thiefe","seller","dombdars","chung","losser","impatience","bearable","neglected","esophagu","kfar","spammingi","dolphin","sssssss","yooo","mann","dogggg","lowe","niggerit","commonplace","sittign","cackling","ewart","gretaw","sara","speakign","feral","ninny","helpcom","accoutn","talkgretaw","wikipediaassume","longhairtalk","bidgee","thrilled","fiddlingand","inteferring","blocksit","productively","likei","gmtv","globei","goten","strobe","cooli","landi","divingcan","spunker","dj","skid","overflowing","septillion","miles","deleter","stared","pearen","tobbst","hiya","wickzilla","fest","ooopswa","armenain","kibera","weakling","gabrielf","greenground","vandilizing","unaccepted","questionably","alhanuty","imitate","stored","barneca","tested","misunderstanding","hui","arethat","agothat","rioting","buddhist","alrite","userwuhwuzdat","unprecedented","frisco","bastardo","dikkkkk","benon","dammitstop","starrenburg","bobak","malignant","rears","aggrotech","japanoise","outgrowth","oswestry","resets","battling","jewbott","carl","truthfull","patriots","obsesive","chaldean","formally","mak","whined","leuko","scimd","negatively","lawsuits","myselfdo","puller","ullmann","talkjimbo","judenscwein","kman","tonne","redlink","singling","turgeon","stubborness","wwgb","grrrrrrrrrrrr","plums","septic","doign","liable","obnoxiousness","spiritness","callingreport","youquestionable","editsaccusation","trollinggeez","carlton","evergreenfir","transform","muahahaha","crab","sarky","brixton","lambeth","kennington","stockwell","vauxhall","incidentally","flooding","marks","comedic","dyam","gscshoyru","desudesudesudesudesudesudesudesudesudesudesudesudesudesu","lasers","hatewhat","hnm","balla","hter","shea","compton","redver","highlighting","uncaring","defends","animosity","sharyn","intimidation","lineit","retardedyour","dumping","suffers","fever","prestige","chosed","lnaka","thurstan","becaue","titt","fbodom","neglects","desacrate","sancturay","bloodsucker","nearest","breached","ompwn","omfmnlol","mg","dx","mol","memes","labor","squirrel","katyn","hannah","montana","miley","dere","showinganywayz","quickpoll","accusin","didntbut","umberto","humbert","renders","seriousdw","sourcethat","comptri","plagued","lobodomized","toady","saddened","deploy","intellectualism","cesc","fabregayou","fabregas","moronit","straightthere","fabrega","wikidelusion","structured","eddieebo","afriad","presumptuous","uscanada","saini","gurdan","jalal","ud","din","firuz","khilji","rana","hamir","sayit","luigi","direktoralasdairkuburazenanarh","userno","userafrika","paprika","disastrous","usermoreschi","poision","fuycker","carribean","insanely","wikistress","wetodid","briefing","useranonymous","eons","douchewho","jdealonys","schnitzelmangreek","schnitzel","hellenic","penguins","blacklisting","klr","klt","resurrection","kazaa","lite","lols","jibber","jabber","peacemaker","knowledgable","lisborne","contributers","ostracized","fukking","chime","betacommand","masse","icing","atop","sawdust","decadeyou","rainbow","likudis","pentagon","colonoscopy","skippy","frowned","chatroom","ziggy","kurth","consipracy","macon","coxk","suxker","fuxk","herethat","allit","beh","anoshirawan","revertnpovetc","abortionist","priests","dwain","bottomleyit","dickfag","dicksternet","smellvision","plasent","cheaper","chepeer","cheeppper","cheapeer","tweet","worrie","uner","faggett","astop","dwight","busyness","busness","stringently","usereric","badman","selecta","ahhahahaha","fastdid","homea","nationsbut","emmigrate","countrycapisci","emmigrated","polskinarodowiec","caley","irractic","endagering","dunfermline","rangers","blackburn","saju","cleaver","himyou","foolhahahha","awliya","ife","upleasant","boloock","electronics","bfore","alowed","dickheaddo","articlesinnit","dnt","intruding","fdg","dna","keeeennnndddeyyyyy","lolapaloozas","preachy","untyped","httpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipediaorgwikiuser_talkantivmandive_right_in_awardhttpenwikipe","wpcopyvio","talkstalk","terroris","guyzero","gagnd","slammed","bahahahahaha","humped","shadw","ridicilous","bombed","unnastand","numbaonestunna","bartlett","hocrriffic","carrear","wh","fuckerrajput","repect","brahmins","dosent","strongthe","rajputsthe","parshuramai","aslo","conceded","survanshiya","sever","dreadfully","accordance","penish","snooping","seeeeeeeeeeeeeeeee","thrindel","haredi","lithuanian","includable","yated","litvish","dushinsky","hasidus","superfinally","spitfirei","fluffernutter","vick","bullpoop","wini","adjunct","insufferably","gap","socialize","objectively","coincidentally","silverman","charisma","mentalitywe","completly","qualms","discern","partiality","hse","lauh","geniusi","mitch","hedberg","heroined","drawl","wrights","magnum","depressive","moanlewis","soundsthe","anushirvan","khampalak","hurted","persinizeddo","thivestypical","montanabw","pleistocene","mammals","bjorn","kurten","elaine","starter","equine","taxonomyi","unristricted","claimshere","protectionyou","mustang","bringer","ignorantism","arggggghhhhhhhhhhh","todelete","esherann","garlighbo","esherraaannn","timc","debut","cameras","mathgrgr","messsage","borchetta","pschiatry","psychiatey","promiss","sicret","possition","clock","faschion","psychiatry","ranch","americanish","casting","edsheeraan","producttion","mea","sectret","africanist","demographic","approximate","blaha","racistdenier","moor","afrocentric","nutwhat","sertima","olmec","yucatan","peninsula","studies","outsince","cordova","limpieza","sangre","saxonsand","irishi","eurocentric","impresive","platanogeniu","momentarily","postingyou","resolutely","crapman","zabrak","rhymeless","spelli","luxuary","folkes","venerial","anintersexual","imperialist","colonial","anthem","immigrantthey","multiculturalism","agnostic","buddha","manifestation","sacrilege","opt","thereit","traditiondo","grumble","petition","toughen","truckingit","imperfect","chew","tirade","dimented","collage","unaustralian","recruiting","evilamoeba","fyuck","httpenwikipediaorgwikimutilation","nasi","goreng","yeesh","cultivated","cooking","imporant","backing","blit","ductile","brittle","tensor","discouragedqat","discouraged","bieber","talentless","bopper","biebers","epitome","synch","schuminweb","motherfuckeryou","fruitless","dragonball","moan","jeangabin","statment","materialistic","pontiac","sorce","discounted","karrmann","ibelive","pinched","monthsfor","absofuckinglutely","pageinitiate","tossers","jello","commemoration","alonmg","enwikipediacom","offst","kurdistanica","propsal","scratching","excalibur","irrefutable","wikipedophile","delanoys","retaliatory","bongwarriorcongratualtion","yesterdayhe","pad","the_pope","interrupt","sotp","nursing","alonei","iamthecoinman","prompt","angelique","kkkarrington","centrici","backdo","unfree","tendansy","lcis","wats","bban","efore","cornholed","reppin","nebracka","bitchone","goddammed","websitefreedom","bitchput","dubass","tjis","pegging","bolster","meno","toth","fountain","edisontechcentercom","tebe","aknhrnbnhrn","tn","eba","nytkata","manha","nanho","hewactho","gallon","hemel","hampstead","poilce","sercvice","exploision","unaffected","bbc","unexploded","cocked","zach","kosim","doushe","bleeing","slaaaaaaaaaaaaag","beverly","delivered","performace","larked","rhydian","niki","roughi","leon","nowhe","quinn","handi","deadlock","dramatic","suspense","darkwave","tbm","synth","rockalternative","electronica","republica","berlin","httpdeyoutubecomwatch","vsagxqvdkfq","vfgvetaux","vijhfqdzpy","lair","sas","remzoy","unconfirmed","anounced","anmtv","montioned","fructose","fort","solverz","expresion","stalkers","kellogg","helpi","insistently","melee","addict","mutated","aspire","stephan","ridicules","leash","climatology","ipcc","workedit","goood","negligent","errryday","anothybadberry","discusting","mongolian","backhole","riddens","twelve","definently","diffuse","yankie","talkspace","talkzoophilia","talkyevgeny","petrosyan","talkklezmer","talksholem","aleichem","talkoasis","talkossetians","talkshish","taouk","talksemitic","talklockdown","rau","nixer","pharlap","yoget","clueyour","friendpharlap","buoyant","piera","agodont","muahahahaha","dcnoise","tweeting","brappage","shalamo","earlobe","slouse","dice","chili","douchebagyou","believers","ofthe","jippy","wong","prohibits","pto","dooper","systema","blockade","boycott","goods","miseducating","faggy","sockfarm","sloking","np","mgnbar","redefined","redefine","wikipeidathe","picturesbut","pageif","galling","linkt","researchgod","wonst","kitfo","mnnlaxer","maniacally","nott","ummm","fif","inacurate","peple","webanywhere","unblockit","vegetasaiyan","saruj","prod","keepi","uncontroversial","inclined","bitchesdo","costing","sroject","adverse","canvass","meatpuppets","arouca","slbedit","asleep","vinditice","eachother","usaul","spleasyre","prbaly","ottal","bbans","yiou","clam","thake","judas","shitass","motherless","schingslong","mangina","micro","perk","hunk","restrains","whispers","felching","sniffing","satisfying","submissive","onewon","submissively","garbagei","provoking","dourque","cheats","underrepresented","lolsy","palsies","cptnononyou","interacting","savant","abbreviated","problemyou","enjoyment","bradley","knockoff","corvette","cars","sedan","saloon","luggage","trunk","bulling","frnzii","cigan","retarde","goats","icewedge","comley","vandly","paks","pak","abriviation","asion","tollerate","socilistcommunister","standardization","screencap","brawl","innappropriate","vanalizing","pupil","sulphuric","carelessly","hahahahahahahahahaaahahhaha","bagger","otteke","neul","drappel","practitioner","phentype","annother","locking","falsity","reasonably","countering","ipit","blaschke","palapalam","palso","tombstonerock","gaelic","bavaria","dipshitted","uy","nevr","anyething","meredith","springlyn","een","kil","gronowksi","glibly","blib","fagat","suks","cok","neeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerd","maam","homer","thenwill","talksayyid","ayatollah","shirazi","vw","thefarix","dominate","territoryi","biggot","learnthat","kamboja","disoriented","kamboj","gazetteer","desirable","styled","wlllknown","adminstirator","writtemn","fench","howcome","adminitrators","dabbu","familiarise","kambojkas","prejudiced","advertise","puking","logicali","listings","bounce","unproductive","annoyingyou","ist","awhilewill","wooooo","f_ucck","cocksu_cking","motherfu_ccker","eichmann","foundersif","mindedye","areabout","realyet","rewatchlist","inures","yards","persib","persibhistorycom","masih","banyak","lagi","hanning","feild","forklift","provincetown","imaginable","inferiors","wherea","histrionic","verfiable","regiment","durrani","indiapakistanbangladesh","tpain","rayj","sohhcom","editnotice","rapid","semenuk","weeeelllll","bitchshe","worldshe","wednesday","shes","kamehameha","momshe","fuckiest","titshe","hairshe","faeggot","siad","wood","teddy","fuak","muddafaka","faked","uso","mallory","lambchop","lookey","airforce","kadena","basewowif","sends","subcriber","estfuaredirect","categorycategorycategorycategorycategorycategoryfffffff","samuell","lik","sunflkower","sunflower","arias","sunfloweri","unneccessary","samurai","champloo","articlewhy","sitcom","sunflowers","dominates","moderately","guessed","heliotropic","prevalent","alpine","warmer","pollinating","insects","httpwwwblackwellsynergycomdoifulljx","cookieset","heliotropism","pizarro","rephrased","messydo","iit","fuckercan","cornell","mcgreevy","sickens","yarnalgoyou","studios","tinker","disgize","neptune","tare","feast","thanksgiving","phenominal","omp","penelope","squiggle","anythingthey","periode","harte","dummer","leif","erikson","sonora","tisdale","hippoh","drizzy","ovhoe","lu","sheng","yen","refocus","hugger","rri","ineffectiveness","bwilkins","sodrum","rollusermo","ainm","userbigdunc","esteemed","stricken","conspicuous","skewing","sloth","survives","cowardice","gameing","wpouting","cleanstart","detestible","censure","oversighted","hers","soto","dickheadgetthe","starightwhatever","rajputbut","sehwag","jat","rajputsnot","glorius","tolerateu","mongrose","herder","wrold","bribeu","astroturfing","ooxml","rmsi","fsf","yandman","lilian","cheryl","whre","brat","storyline","tawker","bcozz","succede","creek","prost","tute","spilled","faithfully","authenticator","peanut","misrepresentation","andretti","phonies","mcmeans","byaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhhhh","dayasshole","styleborder","fdffe","rowspan","valignmiddle","stylefontsize","vertical","align","styleverticalalign","retarteded","yai","wikipedadia","buddism","spotted","symoble","ideals","budist","tanakh","httpwwwjewishpuborgproductphp","elaborate","indepth","internation","resound","alansoh","rosa","grandiosity","potshot","panel","justyknowleave","fretful","porpentine","acronym","assessed","undercut","enunciation","incompatible","situationthat","temperamentally","assess","assessing","assigninity","ddelete","eo","fyou","buttfacei","thjoker","butttface","likesits","anymoreanyways","buttaafce","zionism","humanist","whipe","forbes","pirates","secrets","wahahah","virginity","lucasbfr","usercool","yardie","fuckidiot","po","prang","neder","nottingahm","ferdinand","nottingham","brighton","tract","gfuck","seenit","uncredible","whitmore","denote","hinduist","wikipadia","packed","dumbed","garcia","goddard","imbecility","diderot","douchebagi","appaled","inormation","alreayd","darker","httpuploadwikimediaorgwikipediacommonsthumbaldrin_apollo__originaljpgpxaldrin_apollo__originaljpg","httpuploadwikimediaorgwikipediacommonsthumbcaldrin_apollo_jpgpxaldrin_apollo_jpg","alrdin","examination_of_apollo_moon_photographsissue","crosshair","transparency","vault","tolerating","bart","sibrel","ralph","rene","kaysing","windley","plait","svectors","cl","anthing","ubanned","kmhd","wanton","spoilerwho","defmation","wahhaby","winner","cognomen","berg","dramatically","kibbutz","proselytize","moammar","khadaffi","lybia","vitriol","rivals","warheit","excution","donny","osmond","tabdo","charlottesville","aeronwy","bastarrd","motehrfucker","ebarassed","moderating","nobly","superficiality","escapism","abyssyou","altruist","voyeurism","widefux","gardening","britney","spears","toby","jeeez","dbachmann","wiglaf","charcteristic","millianiarian","dispensationalist","blockers","wanti","partyou","dbz","swistertwister","unbelievably","doi","thinkign","somethign","anythign","spellign","micrsoft","asign","gradnman","tripled","decadei","mando","anythingsay","somethingi","smilei","drivei","wallop","lcv","abett","stony","hearted","asceticrose","bucklehead","mothersucker","dishonored","disgraced","fathersucker","boggle","deuce","unrighteous","heretic","rabby","ahmed","ssee","colored","tinted","operate","stevebaker","crowdharry","unbecoming","immediantly","hyyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyuyu","rarghhhh","relise","angelst","notnd","promusicae","medien","onwards","errorneous","chitchat","gladysbut","neccisaryly","caps","youdont","uncleg","axeman","acdcs","acdc","fairytale","fantasyland","iraqie","tresckow","cheerio","kohai","kco","corrijean","patzers","gayfrozen","motto","leve","cruise","constanlty","abetting","fdsafdsafda","fukkkk","absoloute","hoplesl","ltle","fkkka","indefensible","meetit","threshold","truthlet","lotlet","allowable","blur","pepper","eyelid","austeralian","cunthook","macquarie","deltion","artice","durst","bizkit","twitchy","showhttpenwikipediaorgwindexphp","titlewikipediaarequests_for_arbitrationfhis_excellencyfevidencediffoldid","usher","norm","distress","shelter","precursor","alikeand","jewi","penalize","perminently","nascent","hydrogen","dogooding","liberalism","pygmy","ken","critic","freddie","youtubecom","johnlatex","proabivouac","swallowing","wussiestop","jumps","gyllenhaal","doppelganger","togo","screwattack","yuccameister","bloviating","foaming","disambugation","yucca","avoiding","yuca","grande","wikpeida","thejps","crooked","wits","thejp","pleasured","hitchens","newpage","watcher","evan","spouse","bike","geraldo","kuma","pictured","unclear","whot","wb","xxxxxxxxxxx","fagetyou","jap","bigdunc","loobtard","assembly","hor","fuer","underrated","heirachy","againyou","clips","jadakiss","wht","bakers","assfucker","pejorative","georgians","tbilisian","nnyka","rpynha","selimovic","herzegovina","thereafter","conflicts","sarajevo","standardized","slobodan","nuanced","biographer","hayden","crnkovic","coy","unhumbly","tacit","downplay","lurk","oit","realizng","natalie","erin","ddo","knifing","sumamry","offfuck","discontinuing","bullshi","teh_greatest","evarr","powernewlin","crazturtle","contestant","purposed","reviving","bulletin","revertings","vandalisms","hoor","confronting","transphobia","jerkish","behaviorit","substantive","sureagainst","oppositionthat","patronization","innaccurate","neckbeard","decisions","dumbasz","warren","asz","laughingstock","aarp","bunker","senor","freebie","centurion","pontius","pilate","crucified","mabye","manget","crayon","btwthey","thos","deaths","piled","canyon","attackit","egotist","wther","prep","britsh","httpwwwhoracemannorghomecontentasp","df","disrespted","tindersticks","edict","bologna","di_ck","cu_nt","cu_nting","dou_che","fu_ck","uncontructive","refinal","apprentice","tralala","alongside","chit","condensation","vainly","condensing","painstaking","recite","martyr","concentration","sodomy","chadashah","yeshua","elochim","faschism","leviticus","detestable","bloodguiltiness","jackhamm","deranged","harrasser","ea","fp","toocan","wikimossad","rcn","worstive","flaw","bwahahahahahloser","haahhahaahaha","chokethere","milltown","governor","jamaicaim","mrlatibeaudiere","jamaicanobody","impearlist","youup","bargain","nich","sighned","ilke","microsoft","epage","rocky","restructured","botched","vested","obesity","subsection","regenhard","jha","jerskine","emotionless","monsters","sally","accidential","fifrefighters","notthey","handcuff","lovesssss","coo","oco","coco","haaaaaaaaaaaaz","outsmart","yourdo","deleat","liam","boofhead","bainyrue","erg","anemone","projector","unecessary","timvicker","admini","exclusionist","inclusionist","vultures","preying","wreaked","wreaking","themdo","dismisses","dualism","worryingly","distribution","infiltrate","ssing","biaatch","lionize","applauding","insured","sentate","condolence","apologists","msnbccbsnbcnprpbsabcreutersap","viet","vnam","longstanding","dems","kucinich","antipathy","indelible","henchman","oksomebody","herebut","pagani","boasting","isntwhich","fiddle","concerted","entities","lebanon","pernicious","livin","deff","muvvafukka","yecke","elsberry","pz","myers","qaradawi","asserts","zinnah","unmarried","stoning","riley","roofingaggmailcom","naziyou","excused","isf","lifegaurd","instability","tempting","attributed","proxies","accidentally","coincide","grammarrd","godcast","requirementwhat","spamyou","dickass","euphemistically","mamby","pamby","sobriquet","ballit","inhabitant","ferry","kabul","enema","reverter","jonhson","dallessio","rasp","sheodred","hahahahahahahahahahahahahahahahahahaha","afgan","ngga","cpc","bastardyou","cpcs","gws","piston","playnine","wikisophistry","strategem","sniveling","signifacant","boyoung","holidaysbut","youse","rim","appropriation","misspelling","moronyou","mfield","onwe","moreit","watchtower","cv","derbycountyinnz","userrayrayzone","muthfucker","fagstar","queeftet","buttfucking","hitchen","monitored","httpenwikipediaorgwikiuser_talkantoniomartin","scroll","ello","gobbling","prosecuting","disgracehe","incivilty","redits","prefectly","laver","staistic","connors","colussi","friuend","reforms","descroiption","digraceful","crticism","criticied","apologises","broughy","jeffreyneave","unfuck","malo","wikimartyrwa","maloyou","wikibullshit","yas","lactose","iresponsible","patato","grabbing","usercraig","vma","gasbag","bywaaaaaaa","vertigo","capiche","rretarded","azad","brough","casuatly","lable","stain","mta","beacuase","chicano","estimated","disordered","anglican","douchen","pel","vie","middles","whoremonger","objectivist","worshipper","britishyou","prevented","contador","mfer","mackcan","wield","axe","handles","brutish","captainsurrey","apartheid","mesh","salient","succumbing","vandalisng","wikipages","todaymy","articledo","megot","guildlines","desevere","apologe","sencerily","diahoreea","heyyou","marketed","expand","fanaticism","alphabetical","mla","apayou","rightregardless","privelage","urbonics","smutt","bandmates","skullmayhem","btwit","cache","toofreedom","speechand","creativityit","attain","assimilating","schema","herehow","falafel","hurricanefan","mushroom","stamp","hayter","docbengal","daivd","esle","aesthetics","trounced","mos","sizes","startedi","shitshe","badtogod","vandalsious","hariboneagle","zilla","expels","explosion","relief","returns","scaly","roarr","balked","zurich","madarchod","bhadva","randva","chutmarike","sisterfucker","krazy","user_talkbhadanisamir","user_talkbhadanikrazy","user_talkbhadanilost","sexdbachmann","noobs","thoth","lseryour","walksfock","scvmbagwhy","lser","idenity","tooi","timesi","rtten","crak","wikiepedia","tortilla","wrapping","hackman","archiveorg","britanniphobic","avowedly","numismatic","wikipediaadministrators","conducive","fuuck","yap","garfunkel","felchmaster","swan","realising","editsso","butthis","titleuser_talkizehardiffnextoldid","httpenwikipediaorgwikiwikipediarequests_for_commentghirlandajo","poles","polack","zombie","intoxicated","halibutt","molobo","rydel","booklet","daresay","strengthened","accuasion","talkhistory","belarus","portalrussianew","wojsyl","fantasies","idiosyncrasy","httpenwi","wikkkipedian","discographyshould","christoper","tyng","roadrunner","subscriberstheyll","hesp","fashoined","gregjay","httpenwikipediaorgwikiuser_talkhesperian","ilegal","indosty","captisit","fisherdyke","clatimort","fuckwits","sheared","airliner","vaporisation","wmds","lawn","unmarked","reinforced","metre","firebomb","riechstag","bumming","wed","dangling","legs","talkthe","wardrobe","feloniousmonk","rfche","theologian","polemic","conform","usertajiks","debenutzerphoenix","babak","rebecca","betting","garry","kasparov","bellingcat","discontented","youths","realm","slagging","jerome","charmaine","breastsp","dudethat","maher","meatspin","harrisons","fingering","httpwwwfreearchiveorgwikiindexphptape_editing","careit","harmon","afore","tesla","rinky","hull","afc","vnistelrooy","endelessly","vh","hailed","stupidthat","hmmmmm","rws","stigma","practicer","abutler","shitler","recoment","bahahahahhaha","againdo","gezaaa","stildisgustinlidisabldostail","ragibs","parochial","snubbed","soak","sayto","rightbuggy","doctors","charactersyou","jab","enforcementdo","funnyask","subconsciou","vandalyse","yoour","wrecking","expects","endlessly","uconn","aspiring","wikipediacivility","metadont","bunchofgrapesa","introspection","irani","pasdar","divided","countryi","sherly","beyoncebeyacth","serval","arsen","shold","dye","ashame","wankbag","sotos","davidson","ringer","rhodope","zajdi","karavelov","bulka","varvi","gora","zelena","excerpt","macedonians","sarievski","slnce","galicnik","sirthi","shortlydo","fukwit","prefect","devalue","glossed","wpr","wpnotpromotion","wpcensor","wpburo","wpnotbattleetc","reetardi","reeetard","uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu","peacetime","malfunction","weather","syte","basicly","httpwwwcyberboxingzonecomboxinglheavyhtm","champs","loer","splashhotel","explpoded","smackdown","kayfabe","budddddyyyyy","aelse","fetid","prickwikipedium","antagonist","arch","miacek","sarahs","toughts","fisrt","beleives","gutted","flithy","jschnuryou","bagyou","ssunglass","impressive","smirnoff","bluetooth","grenades","alway","careerthat","chugging","beater","tanning","inconsiderate","belligerent","lung","frat","notcome","roomyou","junkyou","noyou","birdyou","protein","pascerboy","sturmvogel","snitty","xck","spk","authorization","compliments","alankc","caribbean","hq","infuriate","prohibition","dictators","varadero","decadent","unlimited","feliz","varela","bolivar","disappoint","saint","postcards","camilo","cienfuego","powerbecause","itobsess","subjugated","vane","impartially","memories","peteyou","experiences","monologue","anchorman","repubican","benny","hinn","reconciled","straightbitches","fuglys","baha","untoward","vandilisim","patric","redvers","anythingcorrupt","unnoteworthy","ncd","_is_","radius","dispersion","milton","overide","zarqawi","boar","jazzera","medieval","httpmongomutterblogspotcomonedownhtml","httpphotosbloggercombloggerlesson_learnedjpg","koran","httpmongomutterblogspotcomcallinglondonistanitstimetowakehtml","vitriolic","unprofessional","garbagethey","tier","nikita","colonel","jessie","cancelled","flabbergassed","informatoin","tarsus","shutterd","gohhbzuyuumo","coldbrotha","constituted","binknsternet","balli","swore","niggershould","upn","bullzeye","lint","neiin","comatose","adrienne","shelly","titleadrienne_shellydiffoldid","aubie","certitude","willian","aussielegend","shitheads","mgr","munich","cyper","philosophu","beem","scientists","jcobinus","magnus","purson","kramuc","holes","oppressorser","wiktatorser","hypocracy","rory","cumslurping","cocklover","assocate","managment","hourly","consitered","walmarts","walton","maintained","grassroots","survay","vp","deliwhich","forwarded","flew","bentonville","deli","safty","perfomance","consiter","liberals","assocated","currupt","tring","mariai","bowles","vial","dufu","agouserpic","goodday","pupose","sucket","unblockhe","buddisht","cramers","alli","draws","primed","plucked","tuf","hightest","anomisty","lions","cable","chucks","genuinley","disbanded","hardasses","karate","ymcai","kuwaiti","collecting","kuwait","deployment","nipr","bootstoot","friggen","lolooolbootstoot","loloool","macro","spartucused","chilliwack","marital","sited","bischoff","erroryou","asain","dronebot","rouge","eaterwhat","upstairs","doire","derrydo","fergal","sharkey","nationailty","knobend","bracey","correspond","inhabitants","unblockim","sensative","stiller","rulei","moderaters","renovation","approx","unused","tepelena","paedophillic","pantheism","naturalist","uncoscious","pantheist","unity","unconscious","cody","akradecki","asskrack","bzuk","cardinaldanfuck","mebunch","slapperthat","teams","yilmaz","gokdel","galatasarayli","coached","galatasaray","seventy","corret","hawe","ataturk","daymee","youit","dreadedwalrus","zink","diei","probarbaly","harmonica","nakon","serianna","charted","togetheryou","ambush","ncis","wields","idealises","purveyed","philanthropic","pleaseis","scholastic","republicunt","lewiswhen","enit","fisher","userjackwen","homin","lawyers","yooooooooooooooooooooooooooooooouuuuuuuuuuuuuuuuuuuu","gayreeks","motherfucka","yre","anywayz","dinna","omega","googdbye","mybig","sjp","snigbrook","waityou","blackballed","overreactit","chooserr","misreads","invalidates","demonized","egregious","imperiousness","sophistry","injuring","mysekurity","amplifying","skeptical","oppressed","gormlessly","increasing","sterile","cockfag","prize","accont","categorial","skinny","cement","unelss","fdsgdfgfd","ratings","doubles","competitioncombined","httpwwwmediabistrocomtvnewserratingsthe_scoreboard_friday_june__asp","alessandro","bassist","tossed","defammation","provisional","plaintiffs","positivity","estimating","exagerrating","stems","worthlessyou","wikimania","punching","shitgirl","gingerbread","homos","lonelyboy","namei","youporn","matacafe","pornotube","hehehehehehehehehehheheheehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehehhehehehehehehehehe","rapeing","shaggadelic","astin","shizz","mwah","hitlerphile","circlejerk","honeypot","battlefield","videogame","perfecly","tightarse","custody","ahahahaha","opengl","httpsdevelopernvidiacomopengldriver","geforce","usable","altered","linki","rfar","privatly","backstab","threatned","backstabbers","neutralising","explaination","usersnowfire","vandalizer","mayne","bust","chester","marcol","marcolfuck","trah","underling","cycle","goain","characterize","legislature","diplomat","consultation","peacenik","morali","sectionit","aboutit","sorryyou","czechofile","yehudim","greeted","praises","nazismaryan","theirs","upmost","profusely","fel","dwains","frighteninghow","isfahan","iraqi","planes","afist","todie","donetsk","luhansk","bushranger","obnoxiuos","wnat","sanctamonius","terosit","saybullshit","hershe","caked","makeup","overdone","lipstickeye","unreal","vomitus","eruptus","chargeclown","yields","fret","disrespected","djac","herostratus","patronize","furfag","opst","kessel","eurorash","dutchman","titlekatzrindiffoldid","mrfriday","didpise","demonstration","homs","salafi","slogan","walked","attribute","twister","fingersjust","youhave","juden","refering","blacklash","woods","freelance","pg","ddiaz","norris","carved","rushmoore","roundhouse","export","ladin","disintegrated","everest","monkeys","emojis","versus","deaaaaad","sullenspice","poole","tendacy","cannont","bakugan","everlast","pigsonthewing","silently","downward","spiral","vindictiveness","childishness","sliding","downi","disruptionyou","amendmentsget","obessed","extremism","whipping","raja","forgottenyou","headleydown","australain","cleary","kkkyou","disheartened","ggtf","carol","cafeteria","hasspoken","sikandarji","absuing","talkhephthalite","deffinitly","iranica","underlines","appareantly","obstructive","hertfordsgire","presently","erika","steinbach","experiencied","yopu","arrr","mcrudster","cyinder","dumg","annon","uncivilised","thirsty","emmett","intense","whitethey","buit","youraskin","unprotection","vanbdal","disreputable","luther","jrs","nasteredpriyadarshivishal","problemthi","perfectgermany","overrrrrrrrrrrrrrrrrrr","bitchit","mredgar","quitmy","hitler_but","tremendously","archivethere","discussions","interrupting","rulessimple","apologistit","mathcore","silencecore","quidditch","assclowns","bid","hawkis","lobby","brendan","kensington","owrld","lostt","reconciliation","acusation","acused","modifications","eavil","doer","reenforces","mainsteam","unimaginable","obstruction","embodyment","lary","silverstein","maxed","insurance","cashed","extreamist","kit","vessle","obstruct","staged","jelous","usyou","problemsplease","babble","californiakansan","poking","interrupted","malleus","humiliation","humiliate","contributoryou","certifies","locks","throws","juliancolton","ceranthor","mccain","unheard","blithering","editable","starrring","americancanadian","amityville","montreal","broadcasting","doiong","admits","cautioned","wikipediahere","binky","unreliability","cheque","gfy","jeremya","discussionthousand","gawk","churn","queerdo","gordo","unmangable","famousdog","vehemently","paradigm","acupuncture","endogenous","brace","joo","unleash","warningsi","buttload","conected","underworld","holdwater","wikidick","nycs","rathe","borough","bacon","zivo","gayreek","revering","httprowikipediaorgwindexphp","titlediscucaieuniunea_democratc_maghiarc_din_romcaniadiffprevoldid","wikipediawikiquette","swears","ead","titlecaptain_pugwashactionhistory","appoloboy","pinch","shyamalan","ich","beuge","zu","ihnen","meinen","fuhrer","asssssss","screening","agoi","oly","explanations","noodle","defuck","fuckability","wikipediawikipedia","fuckpost","emphasized","httpwwwbushwatchcomgopconstrmmov","mudslime","vszkmug","somethingawfulcom","lurking","os","mudkipz","itt","steretype","peope","ganondorf","parjay","wwwwwwaaaaaaaa","establishing","investigating","virgins","pharmboy","maximillian","andrewmc","hyphens","oldest","userstephenb","thomasw","licks","userthomasw","wiseguy","faggieness","bolagne","bbolange","beck","jaws","durban","copuncil","taxes","imposed","handout","taxed","londons","paracite","afronazi","anc","openfutureboy","noses","numerical","constructivei","openlegboy","meadowhall","shopping","sheffield","sheffieldi","swagfuckingtastic","asimilated","illegaly","occupying","thenit","workable","griefer","neutered","assaulting","iar","exceptions","discriminatory","fatheaded","brayton","wingnuttery","turdit","lipped","protrude","saviour","davidw","presents","bootlickers","comprise","trustees","jester","interrogate","appraisal","proceess","editin","kk","wouldent","ebcause","oyure","usermisterwikis","fmisterwiki","holt","knott","deficit","jdchamp","usi","livedo","duechebag","urgent","buisiness","wweppvguy","suckz","cambridgebayweather","gita","samkhya","devotional","karmayoga","analytical","sankhya","achieves","banyan","narada","gandharva","citraratha","perfected","kapila","prolog","comparable","stoopid","incase","robotically","communityi","wholesome","moviei","bookmarks","xymmax","sniffer","spalunker","machchunk","frieeeeeeeeend","dvdm","fie","misfit","municipal","sewage","soddy","laboratories","herbert","ives","inasmuch","flouting","vandilising","gar","tur","abdin","assyrianyou","graham","nifht","divantranin","humping","divantrainin","asswhore","wretched","parole","gnashing","kasreyn","pleeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaassssssssssssssssseeeeeeeeeeeee","oneoneoneoneoneoneoneoneoneoneoenone","knighthood","volkert","fortuijn","lzer","pompos","accuser","golbalist","retributionlsr","witha","consensual","lude","provocatively","resigning","tariq","deacon","psyillyname","overhaul","aziz","lapsed","afaik","communicated","tareq","xalwine","chozen","wilt","rue","ghastly","martens","voyage","spitzbergen","germanlet","dumbasses","varient","whitecaps","fiasco","sphere","numbers","hilbert","meine","theorie","unquote","notrhby","ballad","knobyou","snobyou","simian","malodorous","boozer","bratyou","pratyou","rube","unscrupulous","muleyou","goob","toolyou","rubeyou","drunkyou","obstinate","punkyou","androgynous","maths","rarified","enviroment","ecosystem","cabin","corollary","menirosenfeld","nicest","michaelhardy","gentlemen","questioner","viewend","shellie","snitchthat","plans","metrification","idiotwhy","slated","dident","retrd","loli","rewording","collaborating","import","musta","reamed","headsupdid","willwe","leftbut","imature","realdealbillmcneal","ccgt","monthes","jokes","ampel","parking","sprited","buds","threatthi","defuse","whinning","fredfredburger","allive","sava","prizren","marija","gnjilane","cemeteries","jealou","gaytourage","werq","megna","trevon","saquele","sloan","xoxo","shun","shuuuuuuuuun","shuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuun","ching","gotye","gaaaaaaaaaaaaaaaaaaaaaaaaay","gaey","gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","hk","trio","companies","emokid","titsdutta","pageheropanti","certified","ceh","childsplay","saman","hypocriteoneone","verne","troyeur","honky","johny","bigee","piano","shortsighted","manifests","lukemia","soros","secretively","jobi","sheikh","opera","fickle","narrowminded","mhey","negligence","editingyour","absent","scarce","ttii","inshallah","steaming","bathe","oozing","bedsore","atom","entropy","novchak","cockrot","shampooor","tourett","appearing","screenit","disgustingi","programmer","lifefuck","thoughtyou","fedor","rus","krasnodar","stavropolie","enko","banderovitz","suppremacist","perished","holodomor","geddon","lusty","bogeyswilly","ddg","ghloooooov","ggaayy","ppeeooppllee","httpwwwfireflysuncombookwikipedia_user_pagephp","senators","congressmen","chrissakes","deconstructhis","dcandeto","resignation","fog","pitty","poxy","amelia","radovic","newport","rsl","pollypocket","updo","richards","godwins","giambiville","unsure","imageuncircumcisedpenisjpgrightthumbhephaesto","remenber","matador","coupe","culturaly","bedford","roasty","marudubshinki","elsehe","nervei","geekiness","jive","aging","costume","filming","christmasyou","imbd","bettman","themn","httpenwikipediaorgwikiwikipediavan","especcially","gurubrahma","wikipediawikiquette_alertsdecember_","clearest","numeral","demonstrable","othersnd","distinguished","paraphragh","talkhistory_of_indian_and_arabic_numeralsrfc_","talkhistory_of_indian_and_arabic_numeralssuggested_outlinec_please_consider_and_discuss","zocky","prefers","disctinction","talkhistory_of_indian_and_arabic_numeralswhat_this_page_is_about","talkarabic","hadnt","deeptrivia","mintute","pubeless","denny","fuckchop","__o","loy","basher","editwe","wordthat","haywirs","httpwwwthebostonchannelcomnewsdetailhtml","sdjasfldjg","dgsdglknfdts","gcs","dimerge","hmn","patronized","neighbourhood","horizon","unbanned","urging","striking","lily","extreeeeeeeeeeeeeeeeeeme","frivilous","putanginga","volkswagen","pta","toonami","sympathizer","huns","marmaduke","designated","trail","eloquently","passionately","chunk","critcism","duel","aroud","floppy","disc","hersfoldat","pointyour","overreacting","badyou","christs","tin","dayit","supplying","whines","bashorg","wikipedeia","belgian","dicklicking","orangemango","ber","unsuspecting","breathable","organizism","enjoyinglike","natch","flags","juda","kieron","richardson","ihateyou","rafael","araujo","garret","allusive","humanities","hallowed","awwwwwwdoes","femto","exhausted","noooooooooooooooooooooo","redhanded","sidetracked","decorative","realisation","agoafter","feasttell","everyplace","missrain","suggestbot","bearcrap","wristed","listne","norther","cord","existense","jiggalo","outspoken","wm","wpdttr","deltatriangle","uploader","familiarize","retained","shabazz","pregnancy","meritocracy","plutocracy","extolling","virtue","sherilyn","becausae","offhe","hng","netsex","roleplay","mug","ircname","_halfway","thru_","hides","pwinsider","pwspyware","carefulthat","vehemously","gute","nacht","hahahhahahahahahhahahahahahhahahahahahahahahhahahahhhhhhhhhhhhhhhahaahhahahahahahahahahahahahahahahahahhahahahahahahahahahahahahahhahahahahahahahhahahhaahahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","dumby","hahahahahhahgngjhfbvdfb","ifdsgvrfdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggd","vgfdbghdfjjgvnbfdsjb","fdnbfdkbvdfsbdsflb","pigeon","strut","victorious","olamot","reserved","deletionism","exploit","childless","reproduce","todisk","rotationi","hypocrits","pipa","sopa","shimgray","menial","electronic","vandalizations","warner","cartoons","chian","malber","amorrow","illegitimise","varied","wr","represtne","driect","stie","buttface","ican","gonane","eveteyhthing","buttafceas","havfe","stupidsget","zt","buutafa","acaeface","bwcny","squeezit","sspx","warez","inherited","ancestors","blacksafrican","spanishhispanics","nurple","colorblack","wikipedianpov","rifleman","crapping","creap","ripleman","float","desided","biohazard","upchuck","conman","implode","selve","shooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooowwwwwwwwwwwwwwwwwwwwwww","convetion","lego","masterpiece","clerk","bestseller","wto","vampires","wikilove","moody","unfinalized","krauts","lingam","buddhipriya","revamps","disregarding","questionsthere","circumcised","commonion","lunarian","sanathana","sarati","lingamboss","sarathi","anglicised","adjudge","englishthat","englishnow","thatstupid","mythtry","intolerence","tolerence","peeled","dai","pritchard","soapi","annihi","cenabee","cenandor","booorrrriiinnggg","dome","paged","moveddo","joni","cometstyle","colective","meanest","shudder","bred","waespi","homoesexual","sssss","peg","picrure","wasteland","ragweed","assholegood","proportionality","hamasshole","plotting","bissiness","highley","didsaspointed","knealing","switched","elk","grove","userwar","litle","alexfusco","mcdaniel","copthey","didi","stateit","slip","supermarket","blockdo","talkit","wplegalyou","mindy","kaling","absurdshe","dartmouth","necked","stiffy","brisbane","stereoscope","fevola","barman","motherfucken","tull","unwatchable","manwhy","arrivederci","primise","usless","sucessfully","androids","atheismit","generalize","nonbeliever","enraged","elevating","bemoaning","allegory","christmastime","faithit","devoutly","sennen","stupidkorsentry","ped","folded","fawkes","confomists","didnot","talklane","motorcycle","hahn","httpappsdmvcagovpubshdbkshr_slow_vehhtm","congested","vehicle","hoy","claybrooke","minutiae","wikijustification","onus","gow","humper","bendover","hale","milboreone","huon","youbut","helpunblock","fonte","regaz","col","imran","regazhey","huoncause","forcesplease","huonthanksbut","backremember","dumm","nationmore","waterlooroadforumscom","hiz","twitar","troo","nova","shitfacial","sherrif","shitsack","sagaiousphil","pillockbrain","elast","sagacious","dentite","dykey","npovi","npovit","arrgh","wikihow","tellyou","doctorate","fapping","explored","feldspar","fervent","blaaaaaaaaaaaaaaaaah","underestimated","peril","templateasshat","quitting","choir","tests","networks","religioustoleranceorg","aleast","consoled","californialet","chinko","marciano","ramey","refs","motie","eof","aggro","finto","phoney","mcfly","homyit","sleeps","energized","ungracious","withyou","familar","warraq","scribe","fulfil","shilling","handdid","callled","troling","agancy","becareful","superfag","somchai","swindle","islamism","funniest","homewrecking","prostitutional","familyi","thegodstemplate","pharoahe","monch","tracklisting","cuck","imperatrix","pax","afrika","paprikado","severina","moja","stikla","userit","nunh","jekyll","hydeyou","chitchatting","completes","hints","prizing","impersonal","abisharan","dependent","contestthat","edulcorantion","edulcorante","sweetening","rinsing","beaker","hhhhhhhhhhhhhhaaaaaahaha","reallyyyyyyy","drunknnnk","hiyou","professor","dook","aye","jeeze","orangemike","httpenwikipediaorgwikiuserorangemike","zeidler","ioannina","placesyou","stuffim","bitchim","masters","marc","hdayejr","hormone","gsn","favortism","abrams","camraon","camaraon","mohammad","ayoob","endorsing","hageography","supa","chilla","alllittle","gonden","snub","maunkey","wanky","bradford","abeg","stickiedlot","babbit","babbo","buckle","disruptyou","mushhhhhhhhh","mugambo","omnibus","terribleyou","comcast","httpwikimediafoundationorgwikiterms_of_use_refraining_from_certain_activities","tbjablins","ths","bastion","faceyou","unblocklick","negroes","babys","inflame","glorification","doof","usermachchunkmachchunk","httpsenwikipediaorgwikicategorywikipedia_sockpuppets_of_eleemosynary","cue","obliged","timewaster","beefcurtain","insomuch","steroids","climbing","obsesser","autismasperger","rira","charmed","anyonei","technicality","skyler","majeston","viewed","midwayer","doctorine","torch","privy","dunked","hyping","macosal","understandi","knowledgeit","wpgame","schfiftythree","swat","codename","codenamesscrolling","speechless","buuuullllshit","esurance","algorithm","twits","citd","github","slower","httpsenwikipediaorgwiki_prime_spirals","mathematician","programming","httpsgithubcomevandrixsplattreemastercodedemopyprimesapyprimestests","httpsmailpythonorgpipermailtutordecemberhtml","drprinceton","systematic","coercion","internationally","combatant","characteri","hierarchical","nobodies","gassing","hymhyrshyt","pate","trialled","courts","minutia","wpundue","wpatk","wptend","thingtabstill","gerard","viletriga","tabdavidgerardtabgo","gibbering","chlorpromazine","tabthingtabi","fuckwqit","tabthingtabthough","tabthingtabso","tabthingtabthi","tabthingtabwikipedia","tabthingtabyou","unplasant","davidgerardtabargh","tabdenelson_ipatabi","tabdavidgerardtabirate","dhcp","pita","tabprojectatabdave","tabambitabdavidgerard","lined","tabtabmode","thingrangebtcentralpluscom","davidgerard","tabtabyou","tabthingtabim","soory","invloves","talkingto","dickheadery","wptroll","wpoversighted","tytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytytyty","scumbagi","underbelly","vanboto","ekograf","funkmonk","antisemitism","antisemtism","analogyyou","denoted","fraggleyou","everthing","ftr","salam","internetdo","inquired","malevolent","daphne","guinness","formi","oirish","donk","azn","kirby","buttok","jewuncle","chandravanshi","jackpuss","chandravansh","creedence","avruch","coloursthi","crown","decisisjudicial","precedentthe","msd","breivik","jonah","ream","fueled","seoul","rightwing","nutjobs","underclass","plastered","incorporation","cures","wikibofh","fffffffffffffffuuuuuuuuuuuuuuuuuuuuuuuccccccccccccckkkkkkkkkkkkkkkkkkk","sukecchi","popuation","defacating","freash","useroldstone","readds","endeavour","booooooo","hasbara","menaged","slimey","regev","biopsychiatry","lostdo","ryanair","authorities","biology","crackdo","blockk","mee","godpussy","voicing","sifn","thingn","wikipediaaniproposed","useralarichu","whacko","wpporn","cas","restricted","fleeting","physiology","piotrushe","bucharest","editorhe","articledoes","historiography","whomever","silen","harasment","pushers","sayinmg","porsche","bishzilla","despair","whirl","tornados","yomangani","maximo","stupido","bishapod","slouch","wheaty","guyds","bastardize","reaaallly","wpspeedy","moocowsruletalk","moo","trow","wikiepia","everydaydo","methat","hait","loosen","levenboy","jennygirl","omnipotent","richie","harrod","authentically","sociable","restaurantand","evidentliy","discover","omgfirstly","britishi","dontsecondly","cupit","tournament","onthirdly","termsso","shitsure","nato","irishwhat","britainyou","irelandyour","racistyou","greta","irelandhell","reasonsbecause","hah","bars","vvd","aachi","masala","rooky","cunnywaft","cunnywafts","brett","favre","psumark","suspension","starwars","jokedo","cybil","sneaked","homecoming","hiroyuki","owaku","protagonist","sunderland","disappeared","terraria","burgess","halberg","lime","holesuck","vandilization","assyankruler","moviesyeahmake","moviesidiot","esa","sportscenter","jima","smuggling","seran","shoessss","hlqall","railroad","commentston","wahtever","pees","moronhi","limits","entitlement","faggs","kobe","mvp","candidacy","wekepedia","perseveration","nl","msturbtion","shitdo","graemel","affraid","commercialism","commune","equaly","imcompeted","graemeli","predictible","acquired","stgop","dimaggio","nooblet","gunotto","rubenstein","wd","maunus","convenientwho","jai","blackmailed","acces","declining","circumcision","subpage","lacunt","licd","irked","devulge","bestiality","cane","shuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuut","rox","libelled","socvk","nonesens","inventing","specturm","jmabel","lolololololololollololololololllolololololololololo","clanigger","niggernigger","pous","partymaniac","pers","bithce","navou","trollit","comfortable","wielding","alc","appealing","hesheit","polousei","rhinothat","lulzi","endeavours","cu","pixie","malign","virdi","matharu","shinda","stopgiving","tastic","interpretive","photoshops","mediadefender","perps","acquainted","cellmate","httpitinypiccomuunhfjpg","visceral","riposte","hitlers","goonbats","frequency","authorized","haveit","ebcdic","pelmet","microskirt","tast","excluding","blanqueamento","rico","allll","wan","lnown","whitepuerto","vandalistic","blanquemento","seriouslyi","providedthat","goalif","antiwikipeida","imporove","greer","component","hahason","euphamism","bengalii","elseafter","shaggy","cutobvious","propagandize","ethnonationalist","derision","warping","staet","debasement","cgi","amen","improvements","reggie","licken","userpchsnjrotc","gargling","shredder","curricular","playful","domesticated","hobbies","tennisi","gcse","lifethat","unhealthy","cuteshe","athey","bif","fancying","bedsit","adorableness","fuckoff","ypurself","wikiedia","wpremoved","elss","hazara","populations","importent","downjust","interfear","enables","sophy","duckling","sead","gipsee","tooit","standin","adminerstraters","entrient","cookiesandboob","litlle","dumbledore","blahblahblahblahnlahnlahblahblha","allowd","grohl","beltyou","unified","hopkins","possesion","politicsyou","dia","safesubstbasepagename","safesubstifeqsafesubstyesnonoyesgrazie","specialcontributionssafesubstbasepagenameyour","contributionssafesubstif","knotted","simplified","safesubstifmy","pagemy","blandly","plastering","lipstick","berry","sos","shitwtg","trench","pours","kindcan","acedemics","coe","orginzed","falsify","tinkering","culmination","dazzling","doubtdoes","gandhi","anatolianism","pple","cheeky","cub","seating","rounded","thr","yoursevlve","burnhamthorpe","whacking","ohright","orginal","by____","cosby","punchline","wikifags","wpmosislam","relied","fuckboy","moans","vince","mcmahon","steamer","hugglewhat","pive","pillars","aheadeveryone","mentionedyou","whatsoeverso","wonderfully","vigilant","nonsenseyou","vandalismwhich","horseshitand","fume","fabricators","editingwho","bali","soooooo","funimation","bardock","maul","pounder","ahnuld","obstinately","imagepeopleofbritainpng","scouse","subaru","tam","clairvoyance","ministerial","awayi","apostate","demons","psyched","gots","counslor","brownshirt","taleban","shepard","amartyabaaaag","wpcivilst","picthat","collumn","faltu","odisha","longhair","righty","wikiepdian","caredo","cjk","oppresses","persone","aboput","distracting","ealdgyth","sharpened","claws","slainte","zsero","necasery","fuckmehorns","pavel","vozenilek","gaelys","fisto","gurgle","jewbag","hailing","imbecilei","alsdo","freakshow","haunctckar","cbonoyb","apabckar","noactnnka","nnaapac","cpahn","historians","deali","fuckd","pxk","drugging","poseur","vegan","articlecolumbus","admitadly","untter","placement","principles","caseyou","groud","misconcieved","contributionyou","imagedamnation","crusadejpg","sells","imageforge","warjpg","belicuse","chooyooo","succeeding","despotism","yoke","pmo","duffy","yhou","buttock","suren","hyperinflation","barking","spawned","idjit","omgsee","pleasethere","writen","oficial","abkaz","georgianomgabkazian","abkazia","russianfufgod","infonerd","warnned","whap","comme","personae","gratae","vergara","kiedis","barito","putera","meen","dleated","bolth","sew","underhanded","machiavellian","kaipara","iyt","pendantic","troublei","httpsmobiletwittercomteletoonstatus","dushbag","httpjonnynsqgamescom","tristan","summons","teleport","travels","fuckism","roux","chinesecaspian","httpenwikipediaorgwikiwikipediawhat_wikipedia_is_notwikipedia_is_not_an_indiscriminate_collection_of_information","mii","niqqa","pbuh","honorifics","peruvianllama","kubigula","reallya","agw","suchit","agwm","somethng","eks","shadowfox","ahoywhat","dipshitboy","idjutwe","thatps","mallyarse","fatbum","muheehahahahahahahahahah","statemens","reerere","coldplay","diseased","imagines","schoolboy","chugga","deceived","sillier","schoolboys","dionyseu","clone","sycophantic","uefa","talkuefa","alpaugh","mercenary","fagtwhy","handfagtwhy","moronwhy","fagtjiggaboowhy","fagtkikenlggerwhy","fagti","jewfagtwhy","democratical","infantile","jacobson","touchdown","espn","siddiqui","fpas","provisions","basc","prompted","hominen","distract","psychologically","dire","franksanello","rulers","propgandist","newtman","warmed","antizionist","fundamentalism","nguyen","spanked","fewest","discrete","wpp","redherring","favonian","tyren","morrison","maddest","deceptionit","ivin","mossad","asset","pretended","toremovea","manufacturing","goyim","goesi","ivins","bolshevist","instinctively","sparing","ohioi","diffi","etic","facie","apologistic","retitled","adjustment","materially","adjustments","invoke","qwyrxian","shaikh","dedication","gitdo","reclusive","millionare","plesae","messagewe","kiddingmaybeyou","pearsonal","whew","thaaat","messagesit","neubiu","grotesquespeidel","scapegoating","rommel","ralf","reuth","serpentine","stulpnagel","seanse","conspirator","exquisite","speidel","linchpin","survival","suffice","scapegoated","trancript","testemony","dismayed","soz","legobatman","icekid","fanpop","disapprove","editsyou","marchaprilmayjunejuly","fabawanga","burk","yipped","yapped","elecit","wwwadlorg","whimpered","outhole","ointment","krab","rhawoth","userkrakatoakatie","tohey","watever","workingp","neuromancer","httpwwwpersonalumichedujlawleraueaanhtml","spotting","zebedee","texti","wikifool","copulatory","rotating","pastry","weaklingyou","defectiveyou","consulate","fyromian","alexandor","makedonski","slav","variation","moveset","aas","standsame","reigni","wweovw","unchecked","goofy","poooooooooooooo","blahhhhhhhhhhhblahhhhhhhhhblahblahblah","grrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr","growllllllllll","rawrrrrrrr","shkiyss","grrrrowlsssssssssss","ppppp","yeeeeeeeaaahhhhhboiiiiii","attackedd","nowww","anchor","cerebral","cortext","anchoring","koch","tomyea","talkn","yufirst","carreer","gettting","macdonalds","fuckkkkkkkkkk","fuckkkkkkkkkkkkkk","proyect","caricature","thisthere","peacepipe","rookiee","professed","orientationwhat","uppityness","craftiness","disseminates","wehatever","motorsport","agf","onoff","inevercry","caroline","noooooooooo","itto","gr","crows","peck","beady","kawwww","antagonizing","asd","chlipala","resedrved","blues","permision","fron","wpa","libary","memphis","minnie","danommbz","mmy","lok","perinoid","avt","predidanta","fanchildren","mylesi","existential","articlessss","youfaggot","callig","yoursel","christstop","gayhate","usman","naveed","messgae","lickin","memembers","brennenman","papist","roseanne","bw","cruiserfaggot","ihardlythinkso","talkcheckmate","upmanship","playhing","designate","onnod","muddo","httpwwwrottentomatoescomguidessummermoviescorecard","neutrel","hedonism","cyclade","ralfx","yag","yaggest","mothering","chinkie","incendiary","fink","shld","sillynss","tim_vicker","dud","tires","anouncement","fundy","rebirth","deleating","chronolgy","superscript","textsuperscript","textstrike","textredirect","sitewhy","whatsa","umpire","errors","colbert","kumar","telugu","nannaya","adi","kavi","centuryfirst","kannada","httpenwikipediaorgwikinannayyahe","httpwwwancientscriptscomteluguhtml","httpwwwanswerscomtopicteluguscript","httpwwwomniglotcomwritingkannadahtm","httpwwwbookragscomandhra_pradesh","httptuluresearchblogspotcomsearchlabelkadamba","httpbhashaindiacompatronslanguagetechteluguscriptaspxdo","yourselfdont","krishnadevaraya","doldrum","andra","pradesh","institutescollege","studentscollege","hahahahhaahhahaha","abut","hahhahhahahhhahhahahahha","hahahhahhhhhahahahh","singyrugay","askinyrugay","remix","hahhahhahahhah","stasny","josef","mengele","wiesenthal","gallow","wy","wanderin","informational","perverts","yahudi","textbold","textwe","aaarrrgggh","wikisuckmedik","queero","overt","bubba","vio","manicured","wptalk","wpidl","bedtime","hoolie","southside","albeit","misspelled","snark","crapyou","leaf","userescape","unambiguously","userpurplewowy","quicker","buwahahahaha","hyphen","xeno","maneuvers","mountaineering","nile","flows","slope","arrests","wpslash","proficiency","wikimanual","bonno","youngstown","charliesmith","conversations","surmise","smiths","bonnus","bigdo","sapp","facefred","zepplin","covington","kentucky","wryfully","brimestone","connives","headlines","bulgar","bulgaren","mazedonier","imro","bulgaria","talksummerphd","atlas","cassell","wikipediablank","yearbook","mugshot","dingleyhe","sarcasticpatronizingabusivecontemptuous","bannedhe","diver","flurry","runcp","fuhrman","satirical","documentated","epitaph","oath","appropriately","whitewashed","inteneded","lothat","trotha","contamination","typhoid","unsurprisingly","meuser","talksolatalk","coldfusion","therefor","vikernes","bandmate","johnnie","derailing","lea","caleb","cronan","cloudsong","fuuuuuuck","respects","stomping","metaphysical","sitefuck","baez","erroneosly","believejose","worldjerk","leniancy","statute","respectit","railway","milisecond","idiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiotidiot","ghat","declineignorance","mullet","sandpaper","tottally","burch","smearing","godthat","angrynintendo","rethey","technicalities","gwenrol","tycoon","editeor","talkbuck","edithmm","bbbs","francophonieandrophilieje","vous","editbuck","weast","yal","vomited","assload","immaturei","thatreality","crept","overboardwikipedium","cultish","cabaleri","dreambarf","unwashed","losersdrop","boyz","gunrack","packs","galileo","twatcunt","bastardsllpaybad","lmaooooooooo","waleed","talal","ashknazi","cisse","usein","stpid","twunt","larrymac","flattery","acanoobic","noobenger","rondo","prodigy","pollitically","understude","repository","dialoge","blathering","reconcile","psuedointellectual","antiviolence","mindedness","tamils","dawns","sneaking","assloser","wheres","alsion","tr","gos","conquer","corse","weakened","expansionist","charly","arg","sango","lifebaka","racistjust","chimp","attackyou","gallagher","contrvercy","tookhe","semiauto","uzi","submachinegun","gaand","lun","skirmish","suckers","midwest","facists","unsullied","complexity","oar","heaviest","faggotu","wikipediamaybe","didlo","gaaaaaaaaayyyyy","azukimonaka","koreanstop","adventure","cburnett","caesar","ncaa","bb","bailiwick","jerkweasel","vengence","tiptoy","wolrd","lothar","herero","mywikibizcomlothar_von_trotha","renata","pommy","persecute","plase","persists","attorney","serene","dunkeld","kincaid","promisisi","bj","masturbatory","stella","clich","bullettime","multiplied","blockbuster","crochety","pfeh","bah","hrmph","nonononononjesusfuckingchristno","northerner","ensued","yokels","birthmark","karr","karrs","debra","lafaves","blotted","uncensored","knopw","studiu","sans","bracketed","apprehended","rustle","feathers","prickdo","savvy","hummingbird","breakfastremember","gw","mite","tardigrade","baffling","readily","eitherit","moronicit","snak","retrn","blck","alllllllllllllllllllllllllllllll","fukerssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss","destroing","trinidad","tobago","cabals","dhass","retuhrd","cracking","antagonized","snowded","edi","snowy","contant","toungue","caressing","ahhhh","dickit","squeezing","tiddly","yeahbitch","biggoted","lma","foolz","pira","kingoomieiii","plumb","parental","antandarus","diggcom","redditcom","ubuntforum","etcyou","thatoh","rigged","incarnate","bahaullah","bahai","neonazi","romantic","hongkongese","truthism","espionage","spying","confidential","countermeasure","humint","operational","tradecraft","thisdick","patry","strategist","tzu","chanakya","subversion","chandragupta","maurya","arthasastra","acquisition","rahab","feudal","elizabethan","httpwwwhenrywottonorguk","weapons","tended","technological","sigint","imint","recruited","disciplines","accessing","desired","divulge","subterfuge","oslo","hanssen","transmitting","justicecite","authorlink","defe","rucka","repetition","naval","installation","httpssitesgooglecomsitedavebrodbeckcaughtonwikipediayou","vquakr","meththere","pissiest","shortbusser","diligent","terrier","stall","dt","diaryi","ferrick","moluccasternate","tidore","fabled","spice","augusta","pollen","rajbir","pooit","bunc","anythingyouwant","ceoil","unhappiness","inequity","manbreast","virtuous","beseech","wilds","slanderer","filiquarian","llc","gfdl","epbr","elliotjoyce","vost","accreditor","radar","rotation","commandeer","accountswhat","engendered","commandeering","graphical","deconstruction","obliterate","captcha","feasible","measures","fluctuate","undergoes","hash","ownedhow","scheme","shamir","matterthan","fulfilled","irregularity","decission","comitted","despotically","stil","takng","pedestrian","createdis","fulfilling","lipschitz","vbecaues","detlete","everythig","booooooom","motherfer","diagram","stupendously","upcomming","talkamerican","landrace","fuckipedia","competive","imbalance","vanamonde","rhett","enountered","slutbag","cohen","nilliam","townsiris","seahorse","expecto","patronum","ulliloquity","biasing","tijuana","brass","unmutated","devel","cann","monopolizing","kin","meshoot","warrens","mouthful","mislabelled","ita","renaim","bundy","noting","hefty","injuction","ms","regulating","hitleric","stategy","roayl","orz","clumsy","suvorov","pathologically","programmed","dicksuker","urinal","llama","salivary","gland","hahahahahahhahahahahahah","wpinvolved","encourages","spitsberg","awfulness","dyou","myob","beyotch","hrassing","susan","roesgen","preston","blakc","ofenneded","elbutler","habbit","smallville","graves","blackmailer","befor","lillte","livelihood","contructive","relates","uncompensated","imprisoned","insanity","sicknessit","hopelessthat","diagnose","humane","jerzy","consumed","deepen","mindit","kastle","composition","sweeten","liszts","rhapsody","alleviate","drowning","cleanliness","parading","octaves","pianism","washingtonhahahahaha","leitmotiv","belittling","nt","pathtic","emphasizing","pilsudski","plumber","lashon","hora","sugggested","immune","pavement","butjesus","byeeee","cocksusker","decist","distributing","fapper","flapper","twenties","pornographic","elicits","primetech","glaad","vino","maliciously","raperaped","entheozoo","pharmacognosy","fts","clobbering","votedo","isotalo","httpwwwthisiscom","cataphract","decipher","tactical","sharpton","jesse","nationalistthat","syllable","preconceived","herringyou","foam","arbitrated","iranianguy","araratarev","expectation","switzerland","kaveh","farrokh","contentthat","knuckles","shrugged","offed","britbarb","nephew","caped","consciousness","salvia","wantedkarma","bastardnext","leppard","danzig","seedy","lollipops","backstage","remembers","ploy","muazim","balwin","rvts","hahahahah","phew","lolzz","youz","befroe","coudl","lolll","meaningfulmeaning","bratland","homophob","typicial","reportage","deadenough","cheering","suppurating","vojvodina","serbsthe","factualbut","itan","crimesit","mostfactsthat","serbiayou","numbersif","killercould","surevery","sadi","thisplease","orn","vickie","sorb","sorbsu","ahbl","protects","linford","rbl","extortionist","sullivan","spammer","treading","xo","aup","sorbs","useroryhara","ohhhh","yummyy","empowered","fulfilment","glamorize","indiani","gasp","impractical","youactually","nuti","wetting","suits","bannedyou","smelli","yesterdayif","bathtub","smellytoo","smelland","smelllllllly","friendlybut","yugoslavian","seigenthaler","picutre","tanjug","stupppppppppid","shitipedia","crapipedia","beatty","removals","noine","dumbrt","doughnuthead","talkingand","badbitch","cnat","edog","query","cato","onthat","seeker","vindicate","rebutted","vfd","vandalizedhans","hermann","hoppe","lew","ensuing","wikinerd","anonymously","evaluation","aplication","scanned","bbbbbastard","ofcourse","rebuttals","trimming","wantyou","anywayi","modest","tweaking","analyze","muchi","misleadingst","sample","alogn","mauritanian","saharan","terriroty","faory","fbn","somewheredo","upskirting","cigaridiot","odocoileus","virginianus","idahoensis","unblockmaterial","pbass","delteted","evrything","dettailed","unexpanded","brooke","hogan","demi","lovato","shontelle","kristinias","tvoz","rvs","bhagat","arya","samajist","urv","helensville","mommas","duchas","nachui","pffft","democrathave","wwwronpaulcom","examples","cesko","slovensko","withstand","boykin","trey","thribb","farewell","catchphrase","unnecessarily","khatris","dashrath","rajputs","mcwalter","mmmkk","dickbig","wikido","sensorship","alexa","niche","nic","czechoslovak","panslavist","forexample","iaaasi","tiso","slovak","bloodbrother","wladthemlat","cockface","thumbjust","scold","doorsajar","wthell","cope","caucasia","kille","slavicsnot","gorgon","lovingly","gonad","heeeeeeeeeeee","idcab","budy","solzhenitsyn","eyewitness","alstair","usertouth","fuggin","textyou","thickhead","btsch","discount","damnest","gobblygook","soley","boyo","playpen","treavor","hg","hancock","fingerprints","wnk","plagerised","tylers","weep","hiccup","sleepcan","nihonjoe","censorshipwhy","usersthere","organizer","fagmom","revisionism","normalcy","ulterior","thisthat","bravado","ellen","overrides","pederastic","hurrah","boing","bannnnnnnnnnnnnnnnnnnnnnnnnn","wikipediaim","contents","arsewhole","ohcome","nodq","taping","uranus","nomorewriting","taint","gently","bluezy","bardrick","chronical","anonmoo","dramayou","rupert","starbuck","girraween","nlgga","fucktards","userfuture","subjectit","thatsphuckedcompostgirlscupvideoaspx","wikipediamanual","dbiv","readding","samsquanch","nker","mudkip","unchanging","wprm","articleshall","userda","vynci","arsed","oussama","assaidi","grassing","adminthat","clarkson","weaseli","bryce","killings","kapampangang","citywho","armarkov","despot","convict","foreskin","weeeahhhh","hahahaheeeahhhhhhh","jlw","feign","vent","outcast","contributes","antagonised","flakes","expunged","unfavorable","katieh","flout","loooooooooosers","happenswhat","nonsensei","saxmund","owls","pointbut","embarissing","ofcource","prowiki","behavoure","stoooooopppp","timeeeeeeeeeeee","vandallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll","editsssssssssssssss","gayy","manning","dispersal","extrapolation","woven","inseparable","bahi","kaleidoscope","devin","pyles","riewoldt","teammates","protective","surprises","ey","absolutley","acctually","exam","stretches","dosnt","nuffin","fam","yooh","gaiaonline","antebellum","allmovie","schindler","jaw","desructobot","tragically","wellcome","assholr","themepark","catamorphism","orwellian","wud","hilariu","slicker","psss","momwe","tractor","ohand","spits","itwhen","hafta","sayyour","ovation","shiting","avenges","hairless","lag","harria","douc","hebag","ipadperson","summarythey","advocating","kumioko","iranist","timur","sant","maharaj","rajinder","singhit","gurdass","ajaib","budinski","sirio","carrapa","numbchuck","itchy","sumedh","cckyou","ahoy","llanvew","debuted","shinola","contentment","reard","beacon","cambodia","toll","capitalism","ammount","proletariat","insentive","gutter","narc","thenmassive","bascially","periodyou","duplicates","osullivans","patrician","jihadist","jackasshole","studious","yuber","smth","marcuse","pinolado","biff","basahing","persuading","lashes","crossfireevidence","villainit","tehnique","toubling","sitehe","womanhe","sleuth","darkwarriorblake","yada","foxworth","pakistanyou","hahahayou","fukhead","asfuking","fuckfuker","httpwwwonlinenewspaperscomusstateuscalifohtm","httpwwwantelopevalleyhauntscomavhauntsmeetsavnewshtm","httplancastermoahorgdownloadsavnewstodayonlinecampognonelookstoputimpressivestamponmoahpdf","httpwwwavhidesertcomforumshowthreadphp","tid","weotihwroiuthjaseortiweajortiyuqpyuiqetiogjahdklghjetuioyqeotyuqeoyjqeoritaetioyjjey","advocated","nsc","cannistraro","agencys","motherfcuker","libal","powertrip","mhm","isit","dayi","____________________________","willyjeeve","articlesthen","uphold","chins","guarding","coding","sven","wraith","fuckwhit","republicant","killamanjario","blacks","newspapers","loathing","payroll","apiece","midgetitis","hahahhahahaha","dogi","likeyou","themdonot","crismus","gifts","ople","profanityst","horsesho","handgrenade","homophobeyou","plunder","verdy","buttsucking","remainder","executioner","magnanimous","apoligizing","myslef","unconditional","lukewarm","oki","magnaminous","immaturity","afterall","resilience","recreate","slakr","commanded","reconciles","persians","templars","offfff","userjusjih","notori","submerged","reddish","mamas","faggotthefortyfive","faugott","butterum","craxy","desuckacrooked","bulletand","krappydude","bandera","stubbornly","meenwhile","succesfully","freestyle","kiwis","aphrodisiac","fleshy","stray","outrrageous","taped","chaka","zulu","warriors","cocksuck","tearful","febuary","fundamentally","phrased","farrakhanistic","farrakhan","mulattoeuro","blackor","northalso","cibao","sammy","sosa","droppism","hyperdecent","dominicans","cibaeno","nationlaity","intermarrired","idiotslook","placethat","jurassic","neantherthal","punchy","melodramatic","edjohnston","hedagggggghhhhhhhhhhhhhhh","hedddajjjjjjggghhhhhhh","willybigcheese","ummmmmm","jumbo","spector","kust","ledrush","zeppelin","jurisdiction","react","fcytravis","usergofuckyourself","pontificalibus","nawit","persistentit","hamashiach","survivors","infor","evertime","redundent","thruth","repert","vegadick","joehazelton","shread","psyco","evey","lovin","vaild","husbands","wikiwacker","cuete","satisfation","easiest","wwwgaycomyour","fowgott","condones","motherland","maratha","breake","cultuer","cunningly","missinterpreted","scholer","fishst","tirupati","bhalagi","chalange","inteligence","anywher","balagi","sysyem","khandoba","articale","enimies","wiil","diadvantage","vishal","arshole","dominicanyou","incoming","dipshitit","geogre","ejaculator","enslavement","ejaculate","rosay","smokes","algebra","xtc","micheal","schumacher","advert","moralistic","sourceable","rorqual","excel","igncom","rang","paymont","userinuit","lond","afghani","athenian","pagewikipedia","jehovah","knocking","arses","usercossde","elders","charter","minelli","filll","copyviolation","wpvmongo","httpwwwstorg","ner","neocon","arseholethere","fireball","rattle","regushee","romanize","shitbox","o__","puppies","____","c_c_c_c","c_c_c_c____________","winkers","etna","peaceful","yey","ion","cinderella","dwpaul","anomiebot","corkythehornetfan","timberly","buttace","natral","connectioni","didshould","ura","abe","dashiel","hooray","cuase","les","hegemonic","bloat","montenegro","repercussion","gram","mudhuttian","enoguh","figner","persoanl","pagfe","wptouchmyshitagainandyoulllearnwahtitmeanstotossasaladfatnerdfuckingtrollpieceofshitasswipe","suer","belogn","relelvance","wacthing","inpure","againt","exitcution","destored","exceptally","fro","togarther","immortally","immortallity","happyniess","emeny","becuasue","corrputed","indivual","equall","brther","controll","broth","salafis","gaid","dang","crapbot","aylesfordian","larkfield","eccle","appalled","figet","dickasshole","thanxgiving","buttsecks","wikkkipedia","dayumm","mikewazowski","fav","tehkewl","timberlake","numbs","reconstructed","pronunciation","substantiation","differnece","linguists","repitition","regurgitating","provable","unanimously","thanos","papadimitrakopulos","postdates","chrys","caragounis","linguistics","philologist","mohr","siebeck","probable","ptolemaic","centred","septuagint","proto","fricative","gimel","gomorra","gamma","myriad","mediae","dasea","papadimitrakopulo","supremacy","tangut","lany","undiscussed","understaning","differenc","ebetween","surcived","bvcause","rabbits","insted","endnig","lc","revisiting","hoopla","outburst","lifespan","hodson","willi","moni","ingenious","unapologetic","init","impale","knowledgest","restrict","alonedo","devaraya","unrecognised","scant","httpwwworganiserorgdynamicmodulesphp","namecontentpashowpagepidpage","offdont","whatsoeverwhereas","analyst","yossef","bodansky","izetbegovic","aha","misleadingit","alqaeda","jokers","norwegians","subservience","httpwwwgeocitiescomheartystar","conforming","nonfiction","ferrylodge","wesker","flippen","peoplego","homiesteam","ssssssssssssshhhhhhhh","awaydo","suerpage","transgenders","fourohfour","vzaak","comedia","golbez","bridger","shiiiiiiiiiiit","wichert","boris","cru","stpo","probablay","messign","skyview","tocuh","conciliation","privately","remarkably","challange","slimeball","httpmansonhatersblogspotcomfourthupdatemansonhaterjamesbwatsonhtml","apopleptic","waterhead","libertarianism","heey","muthafucking","shitfaced","obicaibe","hillcountry","idt","succumb","blooddy","iddiot","declineno","mang","rosebud","writin","fone","typin","nxt","insincerely","fastest","prussian","indicative","lessened","levantine","sinbot","descript","merridew","cuntboyyou","borderdo","ikipedia","whata","schoolkid","gator","correctyour","wronglike","toaster","syphilis","galoot","eared","cammila","parker","fook","disingenous","undergo","frnzievry","uur","brainif","pplthey","assso","babyu","isbaby","unaccountable","recourse","redress","ichiro","hersford","reconsidering","relations","avowed","canto","salix","alba","libellious","assignment","cajun","manuscript","maclauchlan","genealogies","skene","scotland","embody","davidsons","gilliecattan","mhor","chattan","personage","muirich","dhai","dhu","descended","mhuirich","macpherson","aeneas","parson","kingussie","bunk","comyn","hobohobohobo","stabby","mcpenis","penisman","pedotastic","purrrrrrger","childfuck","prickshove","jeeezu","wept","whittle","chord","quartal","harmony","twaddlings","loathesome","uwere","everliving","rerun","wreckless","stirrer","serous","reformist","arcane","pwnt","rtr","tje","ruh","dmacks","uiuc","timethat","jackofoz","bonjour","accpunt","jerkofoz","jajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajajaja","thicky","keystone","clownlike","undogin","wrao","bolx","inspite","egotrip","rendered","conceive","teenaged","reit","beign","dumkopf","viii","recet","indent","emergency","mechanic","activating","intercom","goddammit","shinra","violenceand","tifa","barret","bustin","occurance","uncensoredthough","apostrophe","ffx","ffxii","ffvii","rpg","iffy","psx","therapeutic","midgar","epilogue","landscape","desolate","lush","greenery","sparkyfox","asswipes","outnumbered","scumbagdo","camwhore","profiled","dissent","presumedly","programs","archived","plethora","rogerjowett","popo","inclusionism","unblockanal","leakage","ddd","gaogouli","dynasty","migrated","bohai","xinluo","ansi","sui","tubo","tujue","huihe","envoy","inheritor","eloping","hgb","regarde","ooozing","reed","tivedshambo","ozurbanmusic","wowit","enver","alwqays","devot","liof","cair","turf","hooknose","daring","picket","gunned","reaturn","dop","wiseup","articlest","allin","quickyou","shitand","chrony","quoth","wikivand","lolfailure","mil","dickheadwhat","uprising","progressing","mestizo","uprise","diametrically","oppossed","balkanization","blackness","idots","agedo","konob","dontcha","lotta","vadalizm","anthropogenic","increasse","roisterer","sbetter","ignornat","emultiple","perfered","torpedo","agressor","oioi","kris","weston","excellence","ucunt","nooo","adming","sya","possiblity","mispronunciation","fyew","sha","latinized","botanical","nomenclature","hudson","dimwits","scotlands","penisfind","hiting","jammin_yahoocom","facade","respectability","interestyou","sobran","herohe","gratz","mutze","bosendorfer","accomplouse","deceptively","michaelisgreat","bibi","starfuk","rubbishshe","armour","fashhionthat","wolverhampton","abpout","lend","talkbolivian","chinchilla","noddlinesses","actioni","defintion","psychiatrist","strive","apathy","consesnsus","redefinition","affirmatvie","disscrimination","definetly","weakens","flagged","olde","wikilov","banns","litmus","wikipieida","shitwhat","incomparable","atrocity","tas","naht","faaahn","ingrained","misogyny","africanamerican","hhahahhahahahahh","backgoing","alo","tof","blacklisted","dougbiznatch","bannos","agodo","randazzo","hodja","shushing","bihcpadding","glide","homies","turkeys","proprietary","edityou","underwood","properlyi","leery","custodians","oppositioni","custodial","caretaker","associationi","veraciously","altslack","pagans","dinovo","soonest","gokcek","mistakenit","niggaaarr","pussiieee","temperance","meco","smugness","babbles","splinter","contesting","nuadin","exalt","spinoff","townsend","mythbuster","publicized","noteworthinness","censorshipi","bumsex","withdrawal","budge","normalise","obiously","normalising","kys","biz","impeding","dablink","stylin","womans","xv","hankering","continuin","coversation","coomie","barton","caanot","fields","tarshing","shag","blouse","chortle","httpenwikipediaorgwikiuserdamiruxhe","lawlz","buff","arzel","unthinking","urchin","berger","ckhead","nordicist","paulina","fenton","poser","elephants","netherlands","winafreeipodcom","timestamp","specialcontributionsvacantlips","beetstra","tutor","chipper","smacking","smke","niggerloving","gathering","chillax","impetuous","complicit","boerrigter","keying","httpfrwikipediaorgwikicommunes_du_luxembourg","mrchopper","usdm","relentlessly","passerby","catty","vapid","offenders","teachers","rotfwiki","lupus","almight","lazily","thingo","expireddo","dord","penisboy","packers","rutkowski","favremother","eragon","fallons","tinpot","participatei","wpbold","triumphant","noisis","crazed","slain","authori","bigees","darkwind","accountabilty","perpetrator","tvtimes","magazineyou","usemagazine","copyrights","wikipediaimage","quibble","officiousness","mlpearc","unnotable","thew","deletedi","boasts","rivalryin","rankle","bioi","nonsenseferret","kindlizing","gratifying","substitute","abandoning","restating","vi","shakesppeare","repertoire","questiong","httpultimateguitarcomnewsgeneral_music_newsred_hot_chili_peppers_accused_in_plagiarismhtml","rickety","mangled","oldruff","pashtu","uzbaki","kennett","kriner","pix","jaycieit","mazito","trololo","wooooollllffff","gannnggg","kimimaro","kaguya","baka","vandalfighter","aight","humankind","darkest","pits","despondently","maim","painfull","complanes","subarticle","domed","interacted","impinge","whiskies","updatin","shitopedia","brainwash","gayesty","thye","diner","unblockhttptwittercomphoenixreporter","flood","wahahhahaahah","zhan","zhao","opendo","bitchfest","crufti","faggggg","huuuuuuuge","cantor","oxymo","robbie","itis","ohara","backwoods","researchya","infoi","burb","chovain","minge","yriarte","foresth","vb","ggggrrrr","sow","thasent","liberalisation","tutsis","rwanda","bosniaks","usernancy","beenin","intire","gentalia","musrdered","callously","santimonimous","buttering","paranonia","nowehere","pappy","strom","crimminal","veryverser","ronaldo","accuracte","letup","bayern","warit","babydo","reflexive","awhhhhh","wikipediafeatured","candidatesmacedonia","quieti","focussed","wascally","boyths","vortex","oppotunity","optical","outdoor","warehouse","bibles","mediumthat","spiritualist","sensistive","vigorous","msmedium","contemplation","blubber","erryday","classprofessor","paulley","racise","suuukkks","deeeekk","avoids","nist","plausible","melt","xou","dayuum","mothrfucker","backyou","histoy","packet","nutcases","controvertial","decend","decended","wolves","lattitudesthey","eursaia","timber","tropical","colder","dwindle","adapted","breeds","spitz","sled","obviuous","interbreed","coyote","jackal","caudal","veterinary","squinty","hahahahahahahahahaaha","hahahahahahhaahhahahahaha","tonedo","commend","ari","chagrin","plagiarist","ply","sarsa","anyonesikh","retreated","sirhind","sikhs","wazir","punjab","fateh","burj","commemorates","lebron","durant","kyrie","irving","rajon","pierce","skylar","diggins","candace","biggie","smalls","oscillating","giraffes","vod","ize","jljalsdfsmlkfjsdf","talkbuckner","editonly","fudamnetalist","ele","tgeairn","monitorit","kidi","spills","poindexter","husond","caucasus","signifies","implement","unexisting","overyou","artificially","luce","console","kart","marty","sertich","roseville","rah","basstatard","rapeist","tilte","sytem","lingustical","hereill","timenoi","wasnti","ideasand","brandish","ridicoulous","frequented","gyrofrog","fage","nicole","httpenwikipediaorgwikinicole_atkins","myst","exile","amateria","edanna","narayan","teorlemin","tonditio","hast","thri","ixil","explore","releeshahn","jnanin","administrationthey","mosaic","burgoo","persnal","wrld","mre","bastardwe","cunta","bastardgo","earbigot","shouted","eminent","triste","tierra","spitefully","ait","titlewikipediaachanging_usernamediffoldid","bastardthat","fagex","hunigger","woudnt","hotle","rammed","pension","fagopedia","youslef","diaf","tobey","obv","alife","loveeee","jtoxxxx","pillow","contributation","titlewikipediasockpuppet_investigationsfaheyusmcdiffprevoldid","dragonfly","inspector","javert","retart","meghan","trainor","goulet","eding","indiviate","bulyingf","contd","padmalskhmi","considerable","bovine","chappati","rklaton","entriesuser","zippity","chadbryant","youyoure","impacted","importantyou","relaying","disappionted","peopleive","cornish","whannabe","latinusdo","consitute","particularno","degganged","disgruntled","alpe","southamptonpoland","gleisinger","buri","spells","homage","murray","peden","participants","dotage","homopedialet","jamming","spamster","generates","homopedia","pigi","iryna","editingit","colombian","factualit","malcontent","yourselvestim","bather","redux","paraded","lengthbox","usdsize","jj","stupidwhole","foreverhe","thisoh","empirethi","hesperian","abusi","anotheri","theyll","karenga","yoruself","qajar","lizzard","summed","arabhalf","boor","khums","sayyed","cramium","sahme","sadaat","ayatollahls","howza","characterized","mixes","richhno","angie","makeover","karljoo","phillipino","admixture","phillipines","disputing","alxays","stupydbitch","appropriatethere","forbids","experienceshe","mmmmmmmmmmmmmmmm","yesssss","ottomans","habsurgs","asskicked","outbred","albanians","pointlesslyhe","townhe","gander","browsed","mormons","thugstep","corrective","liberaton","theologisthe","successive","marsh","sumerian","jul","numnut","nvidia","whql","ingat","kekalahan","tangan","malaysia","indon","wothout","farooq","dand","chickens","truing","dontu","authoririty","letmsnently","fairfield","ny","teamsyour","kinross","beatlesand","musicemo","cultureis","stylenot","musicnot","yourselver","barbedwire","tariff","hangin","buttstud","antagonize","intercouse","threesome","yooioooooooooooooooooooooooooooooooou","drawer","foremost","bishop","meagan","storey","totse","holden","dapenor","amendmant","poofteri","disconcern","deliver","provacative","offit","gloat","paragraphdo","artivle","sarbonne","stingy","bigd","dustin","mubin","sniffs","denounced","relist","blpe","snype","shemeless","talkcontrib","sodo","wayit","mangojuice","ypr","adres","yif","yorselff","jokingi","bd","userpic","waaaaahh","weirdness","vitual","ramm","coelcan","munter","argie","pwheadlines","wikifiddle","combined","itfound","siteand","ethiopian","ouca","penishow","colleenvanessa","persyour","onal","illicit","serviceman","israelisby","waged","unblockedso","uberadmin","lk","servicing","client","coercive","counterfeit","pleading","reflexively","hemispherewithout","opportunism","programed","irrationally","destruct","foreclosuregate","closeyou","schiff","monthyou","wpwikipedia","ringswhat","fucksex","renzoy","nerowhatever","baghdadthe","englewood","hardest","stright","guyi","kurdistan","goalkepper","fagbag","hahahahahahahah","muncher","talkfuck","fjrgugfaggot","devices","pussytasty","sasayama","commiemoron","mayeb","chernodrinski","misirkov","bride","wikicop","zoo","skeet","diharea","raunchy","vicoden","kwanzaa","invetion","marxism","separatism","blubbering","jibberish","didwhat","didand","insider","excuuuuse","yourselfim","donegee","letterman","puckerd","mefrom","alligenmce","withinme","rightness","contributionspeg","entwistle","sooobig","hoser","easilyquitters","mannered","eediot","haahah","rifel","seesinz","fais","chukkk","comunism","astonished","diarrhoea","glorified","rui","gabirro","gabirrogmailcom","wavegetarian","cw","retardedly","fucccccckkkkk","yoooouuu","whatst","powerfull","varrio","cochella","mucnher","stupydbytch","teeeccccctooooniiiiiiiicccccc","shhhhhiiiiiiiifffffffftttttttt","everlasting","useryourname","nicerbi","badreal","noobness","lolololololol","ukraininan","slate","checkusers","wikibully","communal","tiniest","seasoned","pretentiously","curioity","pleae","subway","duplicated","caliber","whereupon","retagging","littering","toke","utensil","crater","diameter","httpenwikipediaorgwikifilekief_yellowjpg","dint","rocker","sayer","bitchin","dodona","ara","arb","planeteer","hao","evah","haev","bld","hmster","bludgeoned","rebar","devotion","pleasurable","assholedie","mhp","suckkk","daa","deeeeeee","adminsor","mofodo","munchin","poppers","memorizing","endlessdan","materazzi","vistory","circulates","circles","wills","cedar","yopur","shishkanigger","yaway","ythno","spblu","movse","vatnik","insecurite","worrywe","encyclopadic","suckgrawp","frenchie","foie","gra","lobbyist","therend","triggering","mayormcgeez","preferring","terminology","inculded","shanghai","starbucks","depended","whiners","infernoxv","risible","bastarda","fullname","queue","douchiest","hellor","mrc","shty","baggin","ange","rajchut","donot","chamar","mohammeden","whe","paan","charms","uhk","constr","prevention","toodle","reduction","memo","despit","bours","waaaaah","johnnyfog","abraham","parapgraph","relocation","proofs","armenians","exaggerate","usersokrateskerem","dragonforce","wowya","bitchez","slanteye","sucxs","prawn","transitive","indeterminate","finitely","radix","integer","integers","abq","condemnation","kmrsq","melchoir","meni","rosenfeld","knoll","sinhalese","jeyasinghe","patheticnot","antitrust","litigation","curtail","dominant","competitive","whittling","meaningfully","uncyc","ek","aguelhok","fore","correctit","kauffner","hahahahahaahahahahahahahahahahahahahahaha","kraft","pfizer","dorito","insulent","sladeakakevin","commandment","valentine","hahhahhahahahhahahahahahahahahaha","hahahahhahahhahahahahahahahahahahahahahahahahahahahahahahaa","pronoun","unfarily","mustyou","meercat","coll","adage","flies","satellite","alexie","luc","br","vouch","admirerstalkerimpostor","imposting","deflect","latch","lozano","moreschi","ryanpostlethwaite","fetishes","lev","yashin","allusions","cenauserpic","suspects","corruptiong","ahno","foolbrained","scumhead","idiothead","sarcas","dalkaen","numa","rh","syou","bastered","jimbos","textbuddy","ginourmous","torin","ami","geriatric","dyo","petite","spinnin","disparages","wonderfull","nontheist","moderates","vertebrates","carefuly","mitigate","rejuly","fgaribay","itallic","promo","mysterio","superiorespecially","hangul","soju","celibate","wages","talkcheerleading","httpwwwanticheerleadingcom","maaan","unrevert","dailyko","aerahemnpov","rever","offne","httpwwwndubzcomdiscography","dubz","relevanr","evidentdo","pointers","bitchwhat","aboutwho","dickyour","greekwarrior","interbreeding","futperf","intransigent","unargumented","unfundamented","lololololololol","masturbationjerk","amir","hungarianpolishgerman","stuffin","homokid","netto","asshats","reconsiders","mit","emanuel","hurricanes","prominently","reproducing","emmanuel","statistical","morano","aide","inhofe","oklast","skeptics","debunks","irrelvant","aramic","relgious","armaic","majoirty","zanimum","despises","stregthen","wedlock","lwc","analyzed","familiarized","consulted","httpsenwikipediaorgwikiwikipediaarticles_for_deletionthe_law_of_one","reflex","cccccc","kkkkkk","egalitarian","equalize","weath","concur","sponsors","prospider","lbgt","pajama","sensation","trina","jerkremove","indy","yourselfit","importing","graphite","geology","equals","lovebird","darre","ust","maryland","darrenhusted","nicosia","citydear","seric","citys","instantaneously","legalisation","depict","trnc","strategically","deteriorating","unrealistic","depicting","wrt","aribtrator","supoporter","stressing","tension","downgrading","marcobadotti","prormoting","myselfyou","spawn","begone","damnoh","personnal","cydevil","hornswoggle","eddit","nationwide","anthropometric","probe","fckhead","flamboyantly","boywe","nagged","begged","vibrator","crybabies","harriet","abbreviation","impairment","immortal","curie","kudos","immortalgoddess","pffffffff","wobbs","catgut","perert","ghetteaux","runnen","workon","jeorge","beon","mene","jassel","mubedian","cuntrey","govt","celebrite","spagetti","yadavsknow","crapmentoning","shitsome","hv","latore","recchi","paedophiles","focker","sensationalistic","wolfgirlhellahairy","renowned","empires","groening","kunal","basu","miniaturist","painter","akbarnama","disturb","utilized","nothign","guidlines","refining","encyclopediathank","inbreed","comemnting","filibustering","russion","galicia","malopolska","wschodnia","refactor","mainpage","bleive","puytting","jena","gooodd","girly","illiterates","championed","bwaaaaaaaaaaaahahahahaahaha","inheritance","gravesite","riddle","excruciating","likelihood","corny","occurrence","snatches","gezzaa","surinder","sukshinder","symmetric","iguarantee","shalll","cyberlynching","cashback","recycle","floss","dicksucker","twatyou","results","nop","nwjerseyliz","carefull","notthere","blankhe","sayfuck","mcsly","sotb","xplain","blight","peoplw","bravo","tramping","hackand","labels","donated","merkeypedia","merkey","fess","zanko","ignorantc_arrogantc_nastyc_and_rude","roaming","bdsm","purrum","hypotheticals","allegations","ordacity","demands","educating","publicit","sensored","swooping","teated","railroading","exempt","payer","wtg","barak","biaswhich","closly","llike","dummay","antivandal","warman","overseers","warcrime","fack","billshit","chynk","cockass","slyin","chrome","niggaplz","jehochman","idiote","talkiaaasi","anyos","jedlik","czecho","slovakia","specialists","que","randstad","risgay","yeayeayea","skillz","fasliy","propagandisti","reprehensible","cfdaabec","furious","dishonestyi","furiuous","kiddies","barranquilla","madrid","pleasse","atletico","eyepatch","sunglass","addy","cancerous","athena","hellene","pseudostate","grounding","boyscout","meggie","everett","itthere","worldlet","slurgnog","dumbdip","foggart","guzzler","hahahahahahahahahahahahahaha","hahahahahahahahahahahahahahahaha","boyband","whaaaaat","nonnative","doubting","ligmor","gerund","gomrot","tile","insistingly","sectionwhy","frightening","wedged","awwwwwwwwwwwwwwwwwwww","lingayat","felsher","sr","fredrick","dayallemandtando","geku","httpwwwbreitbartcombiggovernmentexclusivevideoshowselizabethwarrentellingtalltaleofcompositegrandmother","httpwwwbreitbartcombiggovernmentexclusiveelopedelizabethwarrenparentsmarriedinreligiousceremony","breitbart","dawning","flames","prevaricationst","martha","kookleynow","poccadishonest","bahaha","weave","wnobody","stfuithin","unblockthank","confrontational","userstwalkerster","hostilely","ensue","ebyabe","notrevert","facto","wonk","srk","salman","aamir","infer","turkiye","nukedyesssssss","wtfwjd","spartacu","titleuser_talkactionedit","lookie","wikicrap","copulatively","vyuc_mgts","ronz","apartment","edgar","notch","encycolpedist","effeminate","ineffectual","deb","warningif","talksmsarmad","infect","mistranslate","lahiru","kannangara","aerospace","cuny","lankan","uncloaked","identitythe","bespectacled","uneven","ticking","grim","werre","youprobable","rsf","hollandnethland","gdanskdanzig","statesamerica","crackers","talkdo","respecti","downgrade","infactual","user_a","user_b","overstepping","cling","clings","seck","burnett","obviouslydo","summeri","decsent","bulgarians","rampage","ammended","ghana","och","lassie","repmart","hunnington","gramatically","consipated","bannersgold","articlenessyou","rubbsih","objectivism","fucxxxk","axxxss","userwalter","eunuxxxch","gxxxay","spitting","exaclty","mentually","slows","persistantly","obsessesive","newyork","boricuas","tampa","philly","tf","boulder","schoolst","soni","pantone","shomron","colonialism","christain","earns","swivel","lampard","relativly","marshon","vrgin","fckers","ahahahahaha","kayne","childrenthere","sureno","markov","reification","lambda","calculation","reified","qlf","themsel","nipp","verdy_p","expirenced","lightbreather","dominating","usurp","longos","succesor","intentionaly","mired","examined","moooovvvvvveeeeeeeeeerrrrrrrrr","fuuuuuuuuuuuuuucccccckkkkkkkkkkkkkkeeeeeeeeeeeer","imbisil","wantit","instantly","toured","quadraphonic","fabulous","anywaycan","buzzkill","ndblp","facilitates","harms","proffessional","dickseriously","motherim","butcmon","userjosheastmanjo","cocki","dalaman","bodrum","jingibingy","jingy","lynn","margulis","evolutionary","dawkin","sodding","godallah","perpetrators","looting","decapitation","velikovsky","rohl","conventional","kabyle","fite","tallywacker","lidl","mariah","carey","whitney","del","macarena","elton","candle","monica","brandy","featuring","ludacris","olivia","newton","ashanti","nelly","rowland","dilemna","kanye","digger","carnes","lionel","beyonce","outkast","kross","dreamlover","thugz","crossroads","blackheart","mccartney","stevie","ebony","ivory","billie","informer","ub","montell","joran","tlc","waterfalls","herre","petey","goodies","blondie","rogers","geils","centerfold","irene","cara","flashdance","bended","ace","celine","dion","mase","rkelly","alicia","keys","fallin","blige","jennifer","doves","loaf","loca","wikihate","achive","ooohh","annoyingdo","hahaheeahhggghhhh","freeeeeeeeekay","snatanos","unto","cautious","knobjockey","construtive","byethe","correspondent","ninjutsu","nomad","fluke","jujitsu","wickipedia","personallydont","faild","washerrr","gurgurshite","bernie","vandilizm","vandalizm","braves","cameron","worrellthat","pats","lengthi","thatholla","yadaor","horace","unappreciated","runtshit","rance","gallows","argumentation","enganged","despotic","fifteen","barricade","attitudest","eurovision","eadtern","dpnt","villians","dullard","playgroup","articlebecause","dateless","plaid","shorts","perez","lilithborne","nazido","whhore","yacht","ghislaine","mona","maxwell","controvers","inlcuded","buffalo","harassement","wop","shaws","homophobiashould","pitched","arbusto","gastrich","codemn","faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaagggggooooooooooooooooooootttttttttttttttttt","niggs","shlong","drenched","stump","bonanza","intreged","perdicament","tune","bigi","repudiate","hatefull","graft","fys","aym","assholish","mysogynistic","brood","mare","toropov","peeeeeeeeeeniiiiiiiiiiiiisssss","fuuuuuuuuu","wesealthal","sucs","bugh","jesusland","severs","depression","digi","officethat","dieing","pabloyou","assand","seddon","stool","iginla","sricking","therer","glistens","mullard","poltics","rearrange","furniture","donttouch","aspy","shitgiggler","afresh","debacle","sockpuppeter","dumbum","dorky","yourselfand","seashell","fattard","lardo","birgin","afambro","irrelevanti","disrupts","afa","hooligans","uplifting","talkingin","askedwhat","weasti","liberatorking","thathe","prowhite","websitewhich","psread","intertnet","chack","thisarvanitasit","aristidh","tooplz","greku","behej","grekishte","shqipetar","dmth","pellazggrek","thote","civilizuar","marko","bocari","xhavela","shehu","tbnotch","cuntard","cheeks","baroni","forbe","adequately","orignial","premission","toffy","upperclass","pointdo","kiand","asendoh","plunged","pier","dew","thine","cringeworthy","sprotected","fker","thaking","fineit","reinforces","damon","neal","lonley","beckham","adgere","namesake","lays","plaster","notoreity","ashcroft","benedict","xvi","churchman","gravatation","shamblei","stoop","evidenced","copenhagen","thisa","thinguserpic","itching","arrhgh","frederica","sjo","pathetical","standardsyou","dildouche","grrr","carepity","indonesiacountry","visioneven","indonesianloser","wpquotemining","possibleit","inspection","wells","httpsenwikipediaorgwikiuser_talkfreerangefroga_big_fuck_you_to_youc_scum_of_the_earth_you_are_not_a_gentleman","demotivate","shovel","yeahmy","jayron","fabolou","walls","vbaxohnvosk","vsktfzfeka","dickheadfuck","brewing","rfcs","consensually","mirv","paeg","charlesmirv","mais","blhda","darren","jimothytrotter","youc","critisized","teadrinkernewscom","montage","vanadalism","semen","spray","tanthalas","userthankyoubaby","discreety","nrposition","charts","overrate","blablabla","wpiar","thankyoubaby","thnx","betterit","quarterback","foriegn","karaoke","axis","ossetian","httpenwikipediaorgwiki_south_ossetia_war","alreadythere","andhave","bsit","illusionit","timeit","cocksuckery","mansons","cutcho","fagoty","tailor","haram","halal","rayner","morphology","texts","biases","competency","subjectmatter","vandalstic","ze","amillion","pulse","spurs","cakewho","lording","rubber","mentral","againor","deathray","huttenbrenner","schubert","introvertedness","cockblaster","redskins","delared","creepi","epress","httpenwikipediaorgwikitemplate_talkcitations_missinginline_citations_are_not_required_by_policy","enshrines","awest","cath","suckyou","youtubejust","suckitpedia","dungeons","alfit","factsi","dealers","conwomanthere","gloving","dishoneststupid","concernedget","talkplain","gwah","laman","jegan","joof","serer","predicatable","vandalises","igonorance","observance","morphing","unicellular","organism","cellular","fossil","findings","underway","reyou","housewives","wikiboss","criminalwar","uthersrgjchillerup","unreviewed","pumpnd","jobbin","reasearch","anywayyou","hinted","httpenwikipediaorgwikist_amendment","httpenwikipediaorgwikicensorship","fostering","weirdoes","disillusioned","idioticyou","bridgethefortyfive","anorak","oli","dickheaditalic","egoistic","bullyi","agreees","crowbeat","worldnot","parshurama","mongroseu","dikkheadu","champelin","slutter","niahm","forhead","devour","admirer","entertain","needless","userironhold","ariobarzane","darius","codomannus","ecbatana","relent","customarily","hammond","curtius","rufus","bkbkbkbki","asswhole","muthafcker","impending","dukes","refraining","reasonsyou","oaks","tanzanian","userekograf","userethankp","tasted","menudo","intrinsically","phobia","breaches","evoke","uneasiness","scourge","deul","wildly","extraneous","alerting","basteredbastered","authorship","subscribing","britanicacom","wtfcrap","abhramidic","giggle","staid","religions","antiquity","elect","collaboratively","distributed","unmitigated","underhook","incorporates","fanboi","rabbi","blinly","wikipedist","orhodox","rabbis","sigismond","sistem","assange","glutton","intolerate","smallboy","mugging","userappletree","lessonit","appeals","badi","thuggry","naivete","optimistic","manipulator","sandiest","mirage","encumbering","exorbitance","decider","emphasise","cryingplease","cialis","unblockautofuck","wqhy","pocs","loike","maaaaaaaaaaaaaaaaaaaaaaad","komodo","memmt","cobol","digit","storage","denoting","sequence","brow","retardget","waaaah","penbat","rubbishbut","egomanical","allbasically","useralamanth","mebecause","alamanth","gratification","zeraeph","fangirl","millionaire","je","tencule","crois","quoi","quune","seule","plein","comptes","ici","autres","alors","faire","mettre","facho","merde","bloquez","une","jen","cree","cinq","pauvre","vais","veux","quand","criticising","lowering","korg","specialcontributions","separately","disappearing","organising","apersonal","repetative","erroneously","contines","ric","manag","eze","euryalus","sandbagger","deflem","titleuser_talkvsmitholdid","oneeuropeanheart","pabloflore","titletalkhuemul_projectoldid","titletalkcomisicbn_nacional_de_energcada_atcbmicaoldid","titleinstituto_balseirooldid","bridget","mendler","ppls","againno","mypov","sms","sydney","ausie","utterance","callyou","pinnochio","disappointing","outted","discard","inconvenience","candidates","coordinator","nguyn","quc","lau","khong","vn","khe","ngay","cng","anh","cho","lm","thnh","len","tham","binh","tinh","thoi","nhe","nghi","ngan","duc","sao","thng","ngy","contoday","sussexman","vintagekits","verde","amilcar","cabral","poeple","coldwar","mcgraw","ashle","rahmatul","alameen","ahmadis","indiansyou","dubai","ebike","richzubaty","hotmailcom","dispisis","wikieditor","ale_jrb","patetic","textfuck","mihoshi","iteration","tenchi","snope","charydibibidis","fema","motherfking","wpnsong","ravenkills","erases","rosetta","demotic","hieroglyph","earhart","dickheaded","microcephalics","infesting","cranial","ideiot","usercloverbeatme","jackassesim","legitso","dissenter","cunttwat","zarbon","dodorium","wpdbz","paikuhan","patientdo","decifer","wifione","honduras","condescension","wikilinked","elude","assholifity","wikilink","wikichrist","tajikpersian","gwerns","mmc","issac","messes","itselfrocky","consistantly","chinky","bullying_get","me_","jime","articled","wprfa","hoursdaysweeks","edgerton","monsterous","wendelmeyer","lien","plien","essayi","wiklish","homomorph","royboy","hillman","josephson","bluster","burinski","quantum","jackhorner","ap","unconscionable","vanquish","smite","dsouza","closeted","httpwwwgayforpaycom","settlin","picker","oooohhhhhhh","pfff","seanhoyland","grissom","meridian","napier","reconoce","youin","fitzcarraldo","rebut","eally","ooooo","wikiluser","sim","hows","needling","goofyou","legitamately","justfully","azeris","cuntdo","vandalismdo","didyou","competitor","mandatory","aboslute","disallows","susbcriber","tally","udauvflvf","loyalist","inla","innacuracy","resubmit","membersbut","relaible","override","overreaching","imposition","gabucho","disparaging","fps","amounted","girlfriendi","wikihomosexuals","wikiretard","userbbb","userjpgordon","userfavonian","userneiln","userbeyond","userwadesimmiser","usermaterialscientist","regal","gardengnome","darthpanda","pliers","hilariousthat","werieth","benefited","systemsattitudesculture","ebilit","meetingshe","geithner","noobsgo","reignman","stoled","harssment","warnning","paperwork","fantisy","unwad","iiedward","iijame","lgbtq","opting","biznitch","ahd","lifeshould","bastardtits","giggles","voulais","ppps","hugs","nasser","kharafi","netbattle","significanceyou","stint","independant","todeath","sexuall","fufilled","satisfyed","pagethey","finna","flexin","dothead","julianfuckton","prototyping","peopledo","looney","idioticy","racisto","kanuck","halcy","freethat","pschemp","khoikhoi","theists","handlfield","wandered","oboe","batted","operators","capricious","damndd","shtay","kcik","atalk","dicuser","faggity","smallman","smallmanq","ppppppppppttttttttttthhhhhhhhhhhhhhhhhhhh","bung","userlegacypac","nbk","chesinappudu","leedu","gani","chimpu","gadidi","cheste","noppi","telisinda","inefficient","stateddiscussion","grapple","intelligenceyou","listi","maked","scolded","whisperback","communique","protections","reblocked","conclusiondude","exudes","pimpocity","oswald","toyota","surly","libra","gemini","mainwaring","trusty","frigid","magnate","understandmysweetoldetc","oltl","amd","httppropagandapressorgfuckbubbabysaablofton","httppropagandapressorgmanfuckfloridatalkingshitaboutcubasaablofton","httpactivistsinlasvegasblogspotcomrulesforwhitesbysaabloftonhtml","rinder","spatter","illuminate","tiresomely","nonsens","elyrian","unhurt","skyscraper","ambigious","defying","chatty","fuckng","stickingyour","condensate","moisture","roof","toyboy","instantaneous","uganda","knowig","psyriatric","loganberry","bpy","pari","facepalm","dojo","eall","marth","doobie","schedulee","pantsget","ppv","wasit","talkseptember","macbook","intel","cpu","_you","spec","imac","duo","byatch","rsk","leftwingnutpro","lamest","hydao","lifer","daysmonthsyear","entreaty","riggr","awarding","fati","turdmuncher","buttmunch","buttmunching","undertaker","gobble","rengel","cubed","jdogg","jokejuvenile","bleeder","tarter","stefano","grindstone","councils","legislation","httpwwwaustliieduaudatabaseshtml","differencei","guinea","guido","bumfilled","chasewc","nightscream","deceityou","commissioner","solemn","snorted","daffy","wordonly","offwhich","plagiarizing","simp","oldwindybear","jelly","maudlin","slopping","hurling","youbecause","indulgence","wideband","prance","probablehere","numbah","itselfthe","prepped","revscrewedbluedtattooed","revolucion","enoughi","cocksmoking","proclamed","truththat","medoes","niggercocksucking","transmisogynist","cfefaecdec","stimulus","loonymonkey","futurepop","articulating","surreptitious","boorish","ettiquette","wwwyouporncom","objector","afaics","sociological","apd","beaurocratic","explanitory","gonei","statici","avoidable","endthat","rotflmao","faggggggggggggit","darry","mtking","flaws","nawlinwikinawlinwiki","vilified","dhoe","dha","vandalizin","uncestry","durex","mozilla","jetstream","paw","threatyou","domineering","tacticshe","instinctive","motivaition","rolak","fct","epx","orc","shotted","thrall","kara","dk","raiding","horseman","knights","mouthbreather","disposable","httpwwwclanyounginfo","constellation","boundary","astronomical","ecliptic","ophiuchu","situated","scorpiu","sagittariu","deceitfulness","hatefulness","shhhitt","wikicohen","rightsigh","amandajm","veritably","reponsibility","pertain","definitley","erm","grumpy","alsogood","layabout","pinstripe","zzuuzz","heloo","nigaar","hopw","nuffink","yh","expressin","ennit","bumed","crolla","budteddy","tmieskegmailcom","httptechurlstripodcom","httpelecurlstripodcom","wanna","hobbyist","lr","gu","kmk","unrefrenced","bicth","pxe","definatelly","protrecting","fapped","undies","userlessheard","tarage","vanquished","kokitus","brobablt","omnitroll","connecting","usernameit","offers","azzhole","sanders","muthafuckaa","jizzball","germanian","hassled","defiling","troubling","louddo","ltd","hogs","woodysgamertag","viewers","drugged","devolve","tasmanian","establishes","iva","councillors","permits","fines","llolis","loseruserpic","naught","arseface","mutherlicker","slobzz","cuzz","santiago","pricks","dismissal","referral","displeases","kobrakid","kakasuhan","kita","paglabag","cybercrime","quest","robyoure","wikkepedia","jatts","thereatning","salle","karar","banye","pata","zada","sala","batha","omgrofl","lacked","commitment","neutralityi","sysopped","choicei","consolation","jennavecia","desysoppedshe","desysoped","happeni","desysop","vecia","cranium","sanctification","pleeezee","detector","fierce","jeanlatore","lara","fairythat","sebyou","libeler","sharapova","extrema","atack","refernxce","baord","bullyingh","behavuour","zorglub","prv","bentif","arsey","personu","advertisis","sandusky","suckipedia","justifies","dogblue","narrowly","kimp","noteplease","wpspoiler","cockdear","avril","lavagflaps","punky","pioneers","vuia","bord","pioneer","traian","henri","characterization","timestab","romanianly","suspendedtab","denigrates","liketabtab","httpenwikipediaorgwikiaircraft_engine","stinker","shitlol","neoconservative","pityful","suraye","assyrianist","sinhareb","khon","bartz","venior","destined","embroiled","thak","antibody","usermvei","amended","amending","soapboxing","baltic","balts","creepshe","estonia","offcourse","denie","ussr","baltics","theoretical","generative","chomsky","animey","manja","freehttpenuswwwmozillacomenusfirefoxcentral","starteddom","individuality","slacking","indicating","pinacle","hangdog","inexistance","opinition","fendementalist","conqueer","alloed","barnholestar","barnholestarit","imagekris_jpg","granddaddy","rendition","denazification","hellosorry","timeim","busybut","peepee","gloating","mrschimpf","mynameisearl","ethnicities","othersjust","user_talksikhhistory","warkosign","banthat","prety","blargh","stuborn","atleastisbiggerthanrowans","forwardnessi","ramone","sistaer","nowbut","thans","anywayoh","nicki","bookiemade","reallly","considerate","offensee","roberts","holders","endowed","arson","yielded","stats","elkhorn","instagram","souray","imagescrotumjpgsuck","johnboywalton","daley","connaught","fuckawhat","selfu","assu","smartu","usertbhotch","usermakecat","grat","usermalik","honoured","intrudes","apoplectically","talktony","ftw","putang","bakla","kahayop","momag","chupaan","nalang","kayo","nrdg","dahil","walang","magawa","buhayfuck","putah","pleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeehttpenwikipediaorgwikiportalpersonal_lifeeeeeeeeeeeeeeeee","isang","tooo","unstoppable","mastcell","rahm","usaand","pelosi","billionaire","wpi","stubbornness","characteristics","sublime","miguel","happoldt","calgacu","kristian","digby","subheading","edwin","seyou","putnam","bugg","osfan","swimmie","blair","airplanes","declassified","websitei","cbw","chem","sparingly","constrained","credibilityi","epically","covertly","thisyou","indefinitly","psychopathic","europeoid","competititor","urrrrrr","chewbacca","muajaja","coleharry","sweoger","scienceapologist","scienceantagonist","underhand","tresman","dvdplasmacosmologynet","imitating","mouthyou","grabage","cracy","berbers","bedouin","exotic","lynching","ove","azaris","rigth","editwar","scriptures","folktale","fasist","talkspage","oa","tuoeis","aiua","ooa","eupw","oe","nanpwvouv","auepikavoi","noutavas","yie","yummuier","prithvi","downdo","wisher","wikipyou","homonetgayedia","beari","takerthis","pressed","distro","albums","skew","greenwaldwhat","fourfacom","radin","shack","eitehr","contributeimprove","assassin","omnicron","theofficial","theonly","linkdo","httpenwikipediaorgwikiuseromicron","titlekathy_najimydiffoldid","httpenwikipediaorgwikisam_harris_singer","rootmyass","practised","sceptical","prs","sceptic","climategate","rmv","putanus","returds","cruising","sheen","spiderman","filmographyst","revamp","dumbassyou","lifelong","gajin","cocksmooching","sbc","ybr","httpenwikipediaorgwikilife_in_hell","unpublished","tellme","vladimir","profited","stalins","delegation","niggy","pw","deutscher","missleading","episodse","jurai","noobsauce","wubba","miscarriged","cuando","quiero","llorar","artcile","skymac","wikipediawho","anywayancient","makedonian","spartans","atheniansancient","speaked","olympus","tribestake","enoughciao","ifa","iaf","internatonal","wwwanarchyno","nonsensensial","networkmembers","subscribers","zazaban","anarchismnet","ochlarchical","statementyou","quist","bussinesswat","pussyu","fainti","bearchubby","bearstocky","wwwbearwwwcom","wwwbearcom","wwwbiggggercitycomchat","surfer","fajita","tiffin","dcokeman","monkeydo","godi","tearsi","hurti","quadriplegic","talmudic","origionallyu","prickyour","itfoolishbenget","santin","impefect","borsch","mapsgooglecom","combative","inthis","ggot","farthead","howmany","usercharlieechotango","shting","nepenthessss","krakatoakatie","dimwit","homosexualtity","sinful","reccomend","astley","kudpung","slithering","fuckity","dumbshits","wt","biyatchso","behinderte","russen","ukrainians","facially","afflicted","languange","wikiplagirism","returd","shythole","soly","asher","shlock","thenm","driveby","irresponsibly","criticizable","postdoes","sook","gandalf","golem","yiur","corupted","deleeting","discussfull","enormously","snowboard","maru","attacksand","distorded","compleete","valey","discustfull","hetz","nicky","disraspectfull","ethic","honnesty","wikisreputation","kemor","nwa","topical","finger_","kare","oligarchy","sulk","amanbir","yohan","pardew","ces","newcastle","urslef","eagles","bitchson","cunningham","motherf","narcisism","bombast","gratitude","wagging","asskrackadacki","lapdog","jetlover","weasle","seduchia","effff","youuuu","broi","ordained","exposit","dangerousclick","nullifies","bitcz","philips","bandy","fanciful","dojimmy","walesdo","titans","immediatelydo","ussy","biaed","hatemongers","unblockretarded","claude","cameroon","protecing","mohamad","peddled","punt","druggo","listener","spontaneously","combusted","laffy","taffy","urbandictionary","dogg","folkz","dumps","fecelphaeliaci","yiu","granite","trans","slum","std","contracted","necrophiliac","teasing","vernacular","thegut","guts","ambiguity","repulsiveness","assuring","donor","loosre","cker","vickers","itsuck","itv","amazoncom","informercial","enoy","facking","freakofnuture","titch","hypnotise","blairs","puh","damnt","picnic","breakin","shaped","wikipediea","rto","qworty","treasurytag","vchip","chairs","caffeinated","tickets","punchies","grilled","deluxe","unicorns","callers","rigby","rigbys","govnor","dizzy","benson","receipt","jinx","sights","owl","ducks","pgst","skunked","nazicommunist","tlaking","recreat","formaly","becomeing","altra","lat","fatc","organisations","lotsd","cpw","awp","ptta","warwick","caller","fare","cna","cpa","ncpa","commitee","hsitory","fot","presidnet","dissolve","selvs","aksing","cswf","afp","fairdinkum","leninism","bliv","uand","ianwhat","sikander","chantinglol","refugee","puti","amma","modus","operandi","gamailiel","hone","finely","tuned","unquestioned","cadra","plaining","morel","allof","battlei","campaignbox","krill","aksai","deservedly","bunchsadare","chooyoo","sharpen","modernist","roma","invicta","perosn","vendalism","creationa","neon","infighting","coc","bedwetter","pedalling","descends","easycorethat","geographic","dover","agendizer","amst","creatori","eclectic","shoter","placei","kardashian","bbm","gere","wwwfacebookcom","remuv","agane","niggur","evur","dhat","geniac","luve","siq","talkhollow","wilerdingthat","eva","balll","junegloom","ammo","compartment","turret","tolking","leopard","merkava","chiken","permban","trully","idiotism","rustled","softimaged","favoritism","totality","yourcarry","strait","chirumirianpeaopunguriru","bovice","feendin","shiiiit","iphone","ahmadinejad","dishonore","forumulating","neurons","intelliegence","leach","indias","reeditting","biasness","moxy","anatomical","warriorspride","bugs","uneccesary","procreated","antare","fuuuuuuuuuuck","unclarified","kristana","loken","tx","clears","trelated","exclamation","collector","familiarly","ethnocentrism","franz","xoxoxoxoxo","uuuuuddy","grr","trespassing","harun","yahyaadnan","oktar","yahya","quranic","lawnmower","mosquito","nonsensest","jhieve","carrier","amor","welp","lemme","peeweeyget","weedy","persoinal","personalk","iot","behined","brunchone","griped","sniffed","crotch","maryann","gilligans","fondling","heathen","moss","manwhore","wpdrc","limiting","karaku","vanish","imprecisely","wrongdoing","goddamh","propriety","incontrovertable","wikicology","friendschris","thiswhat","favreau","vaughn","leonardo","dicaprio","winslet","ashe","ethnicityi","zealand","negrothat","mixtape","towellstop","jobie","mpst","firned","doenst","governs","notnews","wpilikeit","thinnest","reatard","youdoing","mat","siberia","roaringflamer","cuddling","niggerpuppet","trivialise","meatism","specism","ethinicity","panto","vigger","vegans","motherfucked","porki","vikie","deconstructive","christlet","postwhat","awawawawawa","typevandal","troutman","wowi","declinetake","reception","consumerist","debtor","poverty","eliminated","wikipediansand","sinneedah","bind","killthat","goona","plaything","ganesha","kanakadasa","madhva","scrubbing","veggietale","vinyl","steals","httpblogmyspacecomindexcfm","fuseactionblogviewfriendidblogidmytokenabbdccaee","saddens","dlck","cfred","triggerhappy","unrightfully","alansohn","tuck","presumes","contaygiu","abominably","simulataneously","specimens","clearyfy","exit","shitwhole","resonsible","responsabily","trated","cyberworld","approch","ununderstandible","sociopatic","caracter","ckhid","privilages","darkside","lameo","mcneal","botit","motherer","bewildered","wookitty","durovayou","joa","assole","bryansee","wikipediocracy","zoloft","recover","wpnpapersonal","uncollegial","redact","wpsp","callahan","emotinoal","lowers","productivity","natrual","countrywe","_________________________________________________","eaither","predjudice","httpbooksgooglecombooks","idspwaqaamaajqtrailofbloodandtearsbnativeamericandqtrailofbloodandtearsbnativeamericanhleneidqctvghtktgepomdebwsaxoibook_resultctresultresnumsqivedcfuqaewbw","tbmbkstboqtrailofbloodandtearsbnativeamericanbtngsclientpsyabhlentbotbmbkssourcehpqtrailofbloodandtearspbxoqtrailofbloodandtearsaqfaqiaqlgs_smegs_uplllllllllllllllbavonorr_gcr_pwfpbaebffbiwbih","tbmbkstboqtrailofbloodandtearsbnativeamericanbtngsclientpsyabhlentbotbmbkssourcehpqtrailofbloodandtearscherokeepbxoqtrailofbloodandtearscherokeeaqfaqiaqlgs_smegs_uplllllllllllllllfpbiwbihbavonorr_gcr_pwcadb","duimb","banme","kearsney","passtimes","dorms","afre","thinfg","fiorst","thisthe","waystop","theredpenofdoom","editordo","rfk","daaam","poofda","eunuch","womens","quarters","__goosebumps","society__","goosebumps","dumped","idiotthats","idiotyour","liedarkhooded","winds","skimming","kainthescion","actaully","shamit","kainthescionelkabong","enviroknot","mccourt","snapped","lagta","hamaray","colleghe","koi","khas","nafrat","tumhain","issi","kertay","hoowell","deadand","filecollege","enterencejpg","solos","solo","riffs","aidsx","hazarajat","powns","bengal","logistically","aurora","dsiplay","nx","imitator","originality","thhis","guni","kangaroos","fubar","chopin","cush","conniption","denigration","religionist","disposition","religionfriendly","historicity","excludes","endorsements","railroaded","talkhesperian","wackipedia","leprecaun","kilwinning","leauge","zhang","heng","samcoupe","kickass","releaed","woooof","theyr","programmers","pags","discovery","sieve","atkin","pyprime","forte","aademia","ama","primality","primes","pyprimes","adoni","drexel","signficant","croft","playng","rehash","verifies","helixq","probability","eratosthenes","inteview","yesi","expresses","ipod","ypur","hallway","pounds","tipget","stupider","entrance","roh","raddragons","tuning","causal","recipient","fundamentalists","pigpiled","grandpa","gus","realistic","dingley","keshia","keyshia","tge","soryy","moviesyoure","interset","produceing","throught","spaming","interptertaion","promoteing","myselfwhat","pernoid","interestby","neuteral","viewwhat","wikipediaby","linkisnt","vertue","hourse","sourceyou","robber","joing","rangeblock","indonesia","hmland","registry","materialespecially","burdon","labstore","wynne","hahahahahahahahahahahaha","amell","natively","installing","unintelligence","expounded","httpwwwindependentcouklifestyleunderthecounterwithlindsaycalderhtml","believable","tommevlie","exaggeration","voilation","asteredcome","priyadarshivishal","echomyron","mastodon","icecream","crapp","entheta","thugs","mehmet","conqueror","armadillofromhellyou","hastely","jacksoff","admisttraot","dissapoined","wekepdiea","becaouse","moronics","itude","cockbites","reienforcment","democrasy","ryanfreisling","felating","fonding","assmuncher","pritty","saya","httpenwikipediaorgwikiuser_talk","trueshe","coax","priveldge","doucmentationthere","subjecet","propagada","selectively","churchs","scholary","wingard","wackjob","pointim","prlck","dlickhead","rcaist","massacred","usefulhe","abrasive","cocknball","hjave","arte","youmy","wishit","unneccisary","wapanese","hammerspace","accosiated","mickey","ranmafag","desprite","caphtor","crete","oclock","ricer","somewere","stfudo","rally","articals","taged","frined","bonaparte","longtime","hypocritic","moldovans","vice","versa","betrayers","ancestrylet","httpwwwnvidiacomdownloaddriverresultsaspxenus","wikipediadont","horrifyingly","ritualistic","flagellation","underselling","hanzo","tenderises","mmmgoooody","goooody","everwant","arranging","livingstone","youbollock","youb","weasly","johnjoe","latuff","observant","tine","iset","telstra","oww","latelywhat","clipboard","ghey","deez","embesil","vandalisation","overcast","skyline","woaaaa","wikpedian","fishfood","waabi","deobandi","herefirst","siratal","mustakeem","wakeboarder","caphtorkeftiu","cretan","cityname","kftiw","amenhotep","iiithere","keftiu","certainty","boats","jewnigger","encompassing","herp","derpit","frack","snapping","thwarting","phantasy","youwe","whit","loserit","giveit","nee","yenti","kamma","braging","rascistariaciaitiaracistracistaricszarghghghghghhghghghg","millionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillionmillion","youuuuuuuuuuuuuuuuu","putza","arrrrrrrrrrrrrggggggggggggggghhhhhhhhhhhhhhhhhhh","six","argharghargharghargh","goider","putzzzzzzzzzzzz","usereasyme","scarcity","naseum","publishes","dil","hypocrtitical","leet","perilously","expound","httproflconorgbonusroflsjoemathletemarmadukeexplained","httpwwwlesjonescompostsshtml","httpwwwcollegehumorcomarticle","httpblogwfmuorgfreeformmarmaduke_explahtml","httpwwwpcmagcomslideshow_viewerldadpodasp","httpwwwnprorgtemplatesstorystoryphp","storyid","httproflconorgbreakingnewsjoemathleteofmarmadukeexplainedatroflcon","garner","collegehumor","pcmag","npr","endow","coveted","misquote","clusterfucked","dignitary","bbooobies","instigate","expansive","condescend","wikipediot","kernell","usee","gotheanen","augment","ratfucking","compunction","reciprocity","stalks","actrually","pellegrini","guang","gao","lir","doughtnut","christaphobic","wikipediagaming","foment","unrest","aggravation","jewishdo","ypu","harbouring","apathetic","carew","banderlog","fullest","crisp","crunch","decisive","thermopylae","repelled","unbeatable","charming","subservient","worldview","quintessentially","unblockthat","mousasi","parant","amsterdam","natioanlity","horkana","dontblocked","youknowbest","shirulashem","hooligan","inflamed","detonate","lhvu","cheeses","talented","tokio","hahaahhaa","opressed","argetinia","pretence","britian","fuycking","discoussion","xyklon","correctlyhere","airborne","infectious","spacehere","assigns","coka","shakespeare","sawyer","usergsk","httpsenwikipediaorgwikiwikipediaadministrators_noticeboardedit_warringuser_reported_by_usergsk_result_protected","ruy","glazed","postively","merging","wikistalker","macdonald","simcopter","yhead","geocities","httpwwwlangstoncomfun_peoplecfmhtml","httplistssamuraicompipermailbryanslistdecemberhtml","yogscast","rider","moreyou","expectiing","soiled","ttyl","anonyminity","englanliz","cuntliz","cuntd","edna","youngest","brentwood","standardrachel","cooke","accessed","brushford","dulverton","somerset","rescued","recounts","exmoor","filesliz","rediscover","wings","rural","bliss","persondata","newli","loner","ogoing","licensed","scamming","cursei","curseits","heckin","heare","asssss","dammitdo","prententious","otch","idiocracy","jesuit","glenco","cuntlandthat","accussed","dycedarg","hunch","truthjustice","pwok","partnered","charadehe","jbbscribe","muzzies","goodfellas","qu","eer","acknowledging","affirm","therf","uckng","cum_bag","funky","overmoderate","internode_system","urdudo","imperalism","hindustani","braille","gayyyyyyyyyyyyyyyyyyyyyyyy","kipper","haddock","gayyyy","weee","snaaaaaaaahh","myanw","cockteaseing","youhere","zmg","newfag","lolololz","wikiterrorist","bnunjch","littel","asnwer","polie","linmk","expectme","obsseded","membserhsip","jhitler","uop","grovel","pathweic","replting","makingme","anyof","mya","ccount","tthere","dheyward","wprfcu","wpaiv","necro","zivan","ozna","cazzate","cirt","bur","drmagic","coelacan","shunneling","unconditionally","blackmail","flamming","vandaling","rmzadeh","allday","faag","rebuttal","sinc","stoptalk","lgagnon","wpdrv","omgwtfbbq","lollerskates","unjustifiable","monkeysie","unworthies","loosers","ilki","fictionalised","zeta","acosta","contracticed","depp","reliving","rollercoaster","bats","unnecesary","jidf","ricehey","hedge","sympatitor","laf","sais","sameyou","editingdisruptiveblockingconflict","resolutionreverting","rightwrongindifferent","hiab","ritter","gena","yeari","eban","conduits","elaborating","demonizer","scheming","gamesbid","democrap","repsonse","mutiny","inbox","wither","commonsense","freestylefrappe","gamesmanship","asole","ordure","simpler","counterproductive","haber","saidi","propagated","americando","sown","tramples","kermugin","midarme","mdiarme","horney","cyberman","mistakestab","tabtabtab","tocboothy","assfack","feend","edouard","aril","blockednot","bmtron","mofucka","wankaget","skys","blankwrong","nowu","formattting","girlfriendtwicein","adhd","rocco","faffing","reg","rarnellit","eddiebo","versitial","ghengis","blockhead","wkrc","hardrock","webbased","scrible","mehndi","distracts","readability","nov","coder","someoen","jiiiiiiiiiiles","jile","nout","dumbf","dreadlocke","martinphi","itsad","electric","zereshk","doesn","torke","tablo","epicgenius","excremenet","alsodo","watchout","magog","lilly","livered","hounder","rulebreaker","dawe","mutherfucking","maestro","moredo","nici","photographers","heinous","controversies","mixon","fuckthat","bostonnew","commnet","antient","shusha","panah","postis","bottomline","fuckwitz","fuckitz","yoshendi","sarvajna","mrt","victimised","pontificated","liverpool","spiel","thu","merseyside","watchlisted","fense","jza","cushy","hekept","sayign","overlord","bahammut","unniggerfication","ballen","attractor","maoist","nik","integity","perceptivity","banal","distinctive","uniqueness","unmentioned","rigorously","biographylivingnoclassstartlistasjones","absalom","absolom","jian","peking","infancy","problematical","judith","reisman","finkelhor","disqualification","flim","flam","sakei","russavia","historicwarrior","gga","puy","waless","ru","bby","gurl","yells","debbie","charli","leverne","controled","mercthat","staunchly","salivo","recsportprowrestling","luk","santhosh","mesanthosh","clams","justanother","bloked","userizady","occupancy","debateable","lawful","disrespectfully","innocently","efficiently","oilman","duct","smegma","kumat","shitbreath","kayaking","feat","dori","upyoure","styou","metnd","flooded","backlash","bloddy","hizbolshaitan","climing","fudging","samson","protestation","gamed","gaymed","loon","ostracize","struggles","ratify","puked","titleuser_talkdiffoldid","patzer","ogbranniff","aidsaid","aidsai","wikify","boychat","detroit","plies","httplimelinxcomfileseeafaedeaabb","httpswwwgooglecomhlensclientpsyabqstoogesyoualljustejaculatedamouthfuloqstoogesyoualljustejaculatedamouthfulaqfaqiaqlgs_lhpjjjjjjjjjdjlrncipbxbavonorr_gcr_pwr_qfcfosbfpdadaacdbiwbih","izan","lan","dylan","meani","ahyyyyyyyeeeeee","runnnn","ahamed","cockbite","yelled","introduces","deservingly","bullshitpedia","delusions","grandeur","biasedprejudice","happenes","pharaoh","wizards","opinionit","wikipediaownership","genatalia","leavev","herein","offensing","oppinion","gypsies","woodard","guidebord","thatsgreat","congrad","lation","dooshbag","colonisated","fireside","amend","oppositionally","allover","argentinian","brasilia","supertall","wain","youuuuuuuu","amortia","laff","artko","arrogancei","cleansed","ptang","hayop","wala","aking","intensyon","siraan","ang","babuyin","kaya","meron","dapat","tumigil","ikaw","yun","insinuation","billboard","chutiyaay","oye","ludayyy","baal","amartyabaag","laand","harmi","bokka","chooda","laudayy","lannd","learneed","fluent","indianbioa","studystudy","semester","examsi","indianbio","gleekvampire","accountsits","wikipediaindian","batnstar","barnstat","himdoesnt","sensewell","supportpls","unfriends","subsidized","raises","subsidy","subsidizing","investment","wwwsourmathcom","dagammit","mmmmmmmmmmmmmmm","artistically","sensitively","reblock","petris","multipile","httpenwikipediaorgwikioregon_route_","shush","todst","roomate","stormed","odf","emailthat","roundabout","tattletalei","supermajority","thirty","timeframe","misrepresenting","refert","jmer","docetism","jesusmyth","ozgoodelawyer","everythin","sombady","pelase","beanbag","waver","noddle","variable","frightens","sockspuppet","soaks","feelins","murdoch","bitich","ringo","casts","ekoro","ascension","thunderbolt","vic","viper","thunderbeam","fainted","cletus","schlock","interjection","infers","diction","editorsfucking","whistleblower","wert","terd","pembroke","suckscom","excesive","gateway","whovians","cyberbully","upand","opology","alenko","wass","obvni","kratos","skype","bigbeareatslittlebunny","scambo","tapping","gummo","xenia","nefuck","pales","disqualifies","himit","deign","intuit","seattle","finer","nuvolasvg","talkcartick","spacemanspiff","knogledgeless","reinacment","laguna","spellingi","blunder","campu","wikapidea","nija","sandym","lowercase","sigma","vtech","itz","poppin","noe","blodds","phonics","whatt","dleteion","hnsampat","drmargi","ditto","codeine","pwns","facilitating","goggle","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaany","checkedi","dhanmondi","rented","icecats","swines","polands","intelligentsia","fsb","haying","putins","youpedantic","endorsement","badgeworthy","arsesome","nickle","pfffft","ooooooooooh","teabagged","ryda","hypocritedo","condemning","thierry","therehe","hahahahhahahaha","tno","offe","psychatrist","truther","schizophrenics","bathit","forsite","boresythforsyth","phsysicist","unle","polices","grafitti","disproved","mauser","kleck","methodology","horsecrap","cowcrap","worddo","gaining","wikipediapolling","wikipedialamest","pelmetim","vu","faithlessfaggotboy","ellie","chronicals","bmx","marsdon","tommorow","simlply","mcleods","brendle","motherfuckereven","achance","tuckdogg","matchup","liddell","tbd","gomnna","idoityou","charver","dicklicker","flocka","meaasge","pinoy","eaglestorm","pbb","collegue","deleates","bull_sh","httpbrainimmunecomandorszentivanyiandthebetaadrenergictheoryofallergyandasthma","httpenwikipediaorgwikispecialcontributionsjshultz","sucide","battlesthat","metaphorical","mio","esse","puedo","attracting","psychoanalyst","gentrifying","patiently","connotatively","denotatively","narrower","mistyped","undereducated","saliva","norriss","penisi","nonmuslim","referenceing","moongod","usernawlinwiki","gayyyyyyyyyyy","httpwwwripoffreportcomreportsripoffhtm","shittroll","wec","termdo","appoling","unclassy","representitive","sincir","ukcat","panicing","vampireheart","blackkite","agitating","construed","zindabad","murdabad","inquilab","fagyou","promisec","pretexting","flatly","greatings","gaetjens","howcheng","warnign","chirst","cojones","deleatist","extreemist","younappear","promulgating","yout","liberate","uplift","rowberry","disorders","propane","batangas","topped","nat","lope","jfdwolffyour","alludes","faggotness","cockhead","fayssalfag","wikishitia","miseducate","legalized","hidiyaat","kutta","inoninside","kutte","shiddazi","permanetly","lastyourhouse","administratore","alasdair","duuude","htmlthat","horizontal","hiidiot","delate","musulman","regulationhere","sillypeppymacspeed","phalus","odoyle","gorging","anxious","excretement","countryy","bading","chumupa","gago","buhay","diba","asawa","chiunuchupaan","siya","mahilig","talaga","oten","manyak","manuod","mga","baboy","plurals","alabamoy","alcoholismdo","httpwwwnysuncomarticle","bnai","brith","turddo","palinsatan","southerners","tapdancing","correctdo","hymie","arbcomi","behavioural","initiating","blockable","lolwat","clogged","connecticut","royce","strippers","clubz","phat","sourest","fester","mischievious","mound of venus","asslover","s&m","queaf","whitetrash","meatrack","ra8s","pimp","urine","whit","randy","herpes","niglet","narcotic","pudboy","rimming","boner","pornography","poop chute","israel","dong","slanteye","muffdiving","jiggabo","assassination","peepshpw","popimp","girl on","testicles","laid","molestor","peni5","tranny","barface","hell","arsehole","pissed","sixsixsix","execute","shitty ","conspiracy","hamas","cunilingus","bitcher","muslim","pee","niggled","muffindiver","cocksman","scag","aroused","niggling","fingerfucker ","nlggor","niggaz","assfuck","slant","urinate","mothafucked ","fungus","retard","gummer","venus mound","alla","spaghettinigger","piss","mickeyfinn","fuckers","jizzim","tramp","quashie","prince albert piercing","hardon","menage a trois","bukkake","shag","australian","raped","buggery","deth","weenie","lickme","reverse cowgirl","tonguetramp","cum","copulate","gun","schlong","cunn","damnit","crackpipe","buttmuncher","cameltoe","camgirl","hotpussy","cuntfucker","slave","sluts","ball licking","hentai","jackshit","dickman","doo-doo","gook","crimes","ho","bomd","shitdick","slapper","urinary","tantra","nookie","fuckedup","gubba","niggur","cybersex","dicklicker","cunillingus","hitlerism","butt","triplex","busty","dicklick","kunilingus","asian","tonguethrust","fistfucking ","assmonkey","criminal","cockknob","koon","children's","shat","footfucker","blonde action","spitter","weapon","dive","cumm","cuntlicking ","sexy-slim","lemon party","vibrater","upskirt","jijjiboo","fuckfriend","pthc","mothafucka","sniggered","buttfuckers","nutfucker","peehole","taboo","erection","nudity","bast","lesbayn","hummer","shortfuck","cherrypopper","adult","palestinian","pussylips","nooner","how to kill","blumpkin","stiffy","piss pig","beastiality","latin","butchbabes","spunk","gross","xx","crackwhore","butt-fuckers","kraut","pooping","style doggy","lactate","fecal","rusty trombone","wrinkled starfish","spigotty","dink","clogwog","whitey","dies","radical","slaughter","bollick","sodomite","balls","nimphomania","ball gag","poof","muff diver","jail bait","beaver","asspirate","bareback","pimpjuice","ballsack","bi-sexual","torture","limey","nookey","breastman","loser","kills","lesbo","beatyourmeat","lovemaking","munt","clitoris","fornicate","wet dream","double penetration","missionary position","bugger","lovejuice","date rape","eatballs","handjob","nlgger","dixiedyke","junglebunny","sonofabitch","goddamned","deep throat","jism","assclown","shitforbrains","screwyou","ethiopian","nastyslut","gang bang","lubejob","tied up","make me come","rimjob","sexfarm","tight white","lezbe","lezbo","tribadism","butt-bang","asskiss","sadism","biteme","angie","abortion","murderer","motherfucker","sextoy","2g1c","doggy style","cunntt","cooly","ball sack","sodom","slideitin","fudge packer","fatfuck","god","gipp","communist","felatio ","libido","xtc","cuntfuck","niggardly","fuckface","faggot","protestant","trailertrash","headfuck","shav","dickweed","refugee","trannie","giant cock","sexhound","slut","dead","titlover","wank","moslem","krappy","black cock","idiot","tortur","erotic","donkey punch","dirty pillows","cockcowboy","sucker","cocktail","doom","hymen","vibr","terrorist","mufflikcer","phonesex","teste","pisshead","slime","brea5t","tea bagging","slutt","cumbubble","blackout","hijacking","premature","sextogo","arse","racist","jimfish","flydye","juggs","jade","wigger","niggard's","jigg","dumb","devilworshipper","firing","gatorbait","murder","chinese","fastfuck","spik","nuke","bastinado","kondum","pansy","destroy","ikey","women rapping","titfucker","crime","swinger","shitola","killer","fart","booby","pimpsimp","coon","strap on","zigabo","faith","bisexual","gangsta","teat","boobies","kafir","dp action","jugs","husky","homoerotic","twinkie","spooge","kink","sleezebag","gay","homo","slutwhore","dickless","cumfest","israeli","fuk","niggardliness","nigr","goddamit","sandnigger","dope","insest","foreskin","acrotomophilia","dumbbitch","fuckmonkey","pubiclice","cyberslimer","titfuck","cummer","kumquat","one guy one jar","fire","sexo","carruth","cocktease","trisexual","pric","rabbi","gypp","cunnilingus","dipshit","welfare","arabs","transvestite","tnt","penile","mothafuckings","peckerwood","enemy","negroid","genital","gangbanger","queef","strapon","thicklips","female squirting","flydie","crabs","christ","ejaculate","carpet muncher","lucifer","butchdyke","vatican","skumbag","horseshit","eunuch","dickforbrains","bondage","kumbullbe","crack","niggerhole","niggard","rosy palm","assranger","beat-off","bastard ","asspuppies","jiggerboo","cuntlick ","pommie","doggie style","lezz","jesuschrist","nazi","feltch","chode","pleasure chest","wetback","zipperhead","necro","goddamnmuthafucker","whiskeydick","slopy","executioner","colored","ethnic","turnon","hole","nofuckingway","mastrabator","jack off","orgies","pisses ","blow j","criminals","cockqueen","tosser","snownigger","holestuffer","dipstick","mofo","nipplering","minority","italiano","palesimian","poo","horn","rape","genitals","conservative","jebus","bullcrap","dick","cumqueen","spread legs","cancer","kaffir","mocky","suckmytit","vorarephilia","naked","shited","nigg","spermhearder","whore","african","disease","lovebone","spreadeagle","coprolagnia","humping","suicide girls","bong","pole smoker","shrimping","gin","purinapricness","sexslave","big knockers","iblowu","pissin ","skank","lotion","asshole","easyslut","mothafucker","whiz","lsd","cocksucked ","hosejob","wanker","cumjockey","eat my ass","lovegoo","whites","propaganda","sexwhore","cunt","welcher","how to murder","scum","phuked","suckoff","shithapens","drug","auto erotic","sultry women","barenaked","wetspot","sixtynine","wrapping men","buttplug","jiggy","alligatorbait","flange","shitfit","dirty","huge fat","bulldyke","orgasm","bumfuck","deposit","big breasts","sexual","japanese","suckmyass","church","goyim","bohunk","bigass","fannyfucker","gaymuthafuckinwhore","babies","girls","turd","fuck buttons","fagging","pisser","sandm","wog","escort","octopussy","tinkle","snigger","groe","vibrator","dix","swalow","chin","niggles","asslicker","molester","backseat","geez","seppo","sexually","boong","voyeur","butthole","hoser","fore","asswhore","cocaine","skanky","european","mothafuck","titlicker","buttstain","penises","spermacide","mexican","skankybitch","white power","puddboy","coondog","stripclub","mockie","american","jesus","tushy","kumbubble","milf","mormon","ontherag","henhouse","slutty","big black","dego","daterape","phukked","cuntlicker ","failed","lezbefriends","pissing","bitchy","pohm","kigger","nastywhore","bangbros","upthebutt","cohee","fistfuck","fuckingbitch","shibari","cigs","jiggaboo","japcrap","raper","jackass","orgasim ","sexed","jackoff","baby batter","toilet","tampon","uk","porn","snowballing","goldenshower","titties","towelhead","titjob","abo","molestation","fok","crapola","foursome","suicide","scrotum","cumming","niggerhead","pussie","abuse","analannie","cocksucking","breastjob","blonde on blonde action","paedophile","kumming","reestie","suckme","willie","shhit","titbitnipply","hot chick","skankwhore","fudgepacker","dragqueen","deapthroat","barelylegal","circlejerk","shinola","hookers","flatulence","scat","damn","mafia","anus","gokkun","argie","buttpirate","goregasm","fagot","fuks","redneck","jiga","cockhead","freakfuck","2 girls 1 cup","crotchjockey","dripdick","die","fuckina","orgy","phungky","beaver cleaver","sexy","darky","magicwand","screw","dominatrix","butt-fucker","neonazi","fuckpig","manpaste","molest","whiskydick","lez","darkie","rearend","niggardliness's","trojan","smack","lapdance","brunette action","hindoo","fourtwenty","deepthroat","moles","hebe","pommy","fuckher","stringer","one cup two girls","peck","backdoorman","male squirting","shiting","clamdiver","fairy","pussylicker","slav","nigre","robber","horny","penetration","phuking","cigarette","dyefly","playboy","golden shower","cumshot","chinamen","pickaninny","diddle","fatah","bombers","suckdick","bigbastard","pube","mosshead","pornking","terror","pimper","fuckbuddy","period","catholics","pistol","g-spot","doodoo","mockey","funeral","prickhead","whop","allah","pussyeater","cocksmith","executed","barely legal","niggarding","swastika","buried","pocho","nip","weewee","whiskey","beast","phone sex","muncher","fuckhead","smackthemonkey","badfuck","harem","nigerians","bastardo","shooting","pissoff ","fistfucked ","ginzo","mattressprincess","primetime","undressing","fuckable","puss","bbw","damnation","jeez","stroking","leather restraint","yankee","piky","beastality","cocksucer","goddamn","poopchute","shitfaced","dickhead","gangbanged ","masterbate","pikey","rosy palm and her 5 sisters","doggiestyle","bitches","desire","pansies","dickbrain","sissy","felch","penis","horney","buttmunch","baptist","assassin","fingering","cock","osama","mothafucking ","republican","wetb","freefuck","rere","goatse","transexual","bunghole","assholes","butt-fuck","nig nog","snowback","sniper","gangbang","cockfight","death","mggor","skankbitch","goy","twat","masturbate","usama","babeland","dickwad","cornhole","nigra","fuckinright","blue waffle","clit","niggle","timbernigger","picaninny","whorefucker","yellowman","ass","ero","dommes","nig","lolita","grostulation","dixiedike","shitfucker","hymie","sheeney","asswipe","crash","vomit","died","femdom","cameljockey","footfuck","sonofbitch","cleveland steamer","dahmer","feltcher","bitch","fingerfuckers","buttface","evl","dammit","lovepistol","twink","shitting","blind","reefer","beaver lips","motherlovebone","panties","fucka","fatass","lugan","devil","pornflick","russkie","fight","thirdleg","hore","jerk off","negroes","moron","shaved beaver","gonzagas","drunken","blackman","asskisser","crotchrot","motherfuckin","lezzo","fondle","slopey","clusterfuck","fister","skankfuck","condom","kill","taff","shithouse","cockblock","hoes","horniest","kunt","facefucker","assmuncher","bollock","smut","stupidfuck","assmunch","prostitute","payo","poorwhitetrash","honkey","farting ","getiton","bulldike","raping","arab","moky","futanari","nigger","illegal","hardcore","skinflute","throating","asspacker","leather straight jacket","raghead","crotch","goo girl","knobbing","buttman","glazeddonut","urethra play","africa","fairies","fuckmehard","shaved pussy","bitchin","fu","cocks","fucker","gyppie","kinkster","penthouse","biatch","wop","erect","fag","fuck","shitfull","vaginal","fraud","color","flasher","filipino","sexpot","sexymoma","boonie","puke","buttcheeks","cacker","bdsm","shemale","porchmonkey","violet blue","eatme","looser","virgin","assbagger","limy","negro's","lesbian","hustler","cunteyed","tarbaby","nipples","dumbfuck","backdoor","wuzzie","sadom","threeway","pimpjuic","chinaman","brown showers","pubes","masturbating","bollocks","bunga","sodomize","goddammit","footstar","goatcx","chink","butthead","liquor","spermbag","jailbait","beatoff","incest","vagina","urophilia","niggarded","kaffer","rearentry","motherfucking","spic","areola","harder","greaseball","loverocket","asshore","perv","fingerfood","muff","shaggin","commie","hitler","burn","honky","tongue","fubar","oral","dildo","abbo","sniggering","bomb","omorashi","pedophile","spig","freakyfucker","swallower","birdlock","bigbutt","nastyho","goddamnes","pooperscooper","bi","sucks","jizz","nambla","puntang","gay sex","bootycall","reject","enema","sob","spankthemonkey","buggered","jewish","wuss","asslick","bitching","strip club","gringo","pendy","tard","boody","chocolate rosebuds","buttfuck","domination","faeces","splittail","clamdigger","shitlist","double dong","niggor","motherfucked","slimeball","pusy","pedobear","excrement","goddamnit","stagg","hijack","sexkitten","hook","coolie","phuq","servant","gyppo","slopehead","pud","fingerfuck ","dumbass","williewanker","fisting","crapper","sixtyniner","fetish","two girls one cup","threesome","bitchez","manhater","pudd","nympho","mothafuckin","shitted","hitlerist","semen","pi55","yaoi","scissoring","sodomise","ky","big tits","muffdiver","farty ","nsfw images","ecchi","dirty sanchez","mooncricket","shite","boom","asshat","fat","intercourse","chav","intheass","jacktheripper","felcher","spaghettibender","angry","gaysex ","willy","addict","russki","slimebucket","bogan","goodpoop","fuckme ","shitcan","brothel","rentafuck","footjob","sick","shitoutofluck","paki","rump","licker","nigerian","pindick","cockrider","felching","geezer","balllicker","ponyplay","fuckoff","jizzum","sadis","hodgie","fatfucker","poop","tits","bicurious","bombs","hork","mr hands","bi curious","sooty","liberal","prick","clover clamps","spunky","nymphomania","playgirl","vietcong","yellow showers","xxx","pecker","bitchslap","demon","crap","jihad","assjockey","macaca","kums","kinky","pooper","homicide","fuuck","poon","fear","shitfuck","tittie","wanking","girl on top","fistfucker ","zoophilia","farted ","nigglings","hiscock","tang","erotism","floo","honger","meth","beaner","kummer","wn","geni","whash","fuckinnuts","fuckin","tainted love","dyke","kotex","suck","poverty","butchdike","datnigga","uterus","execution","trots","luckycammeltoe","roach","swallow","motherfuck","blow","ball gravy","slutwear","panti","kissass","shawtypimp","muffdive","mulatto","noonan","wab","banging","tunneloflove","doggystyle","fuckwhore","rapist","homobangers","porno","barfface","sex","syphilis","pearlnecklace","sleezeball","sextoys","assman","german","shagging","anilingus","stupidfucker","loadedgun","beastial","shithead","asses","pussylover","niggah","gotohell","jigga","remains","frotting","thirdeye","fuckknob","inthebuff","nawashi","roundeye","retarded","mastabate","disturbed","kunnilingus","bung hole","pee-pee","camwhore","satan","lowlife","tubgirl","fucks","diseases","blow your l","krap","addicts","snatchpatch","bra","poontang","snatch","pussypounder","shit","knife","pu55i","footaction","footlicker","bimbos","mothafuckaz","pussycat","fucking","funfuck","piece of shit","boang","nipple","fuckit","shoot","quim","booty call","slutting","coitus","tit","spermherder","raging boner","buttfucker","quickie","grope","skum","rectum","kanake","soviet","lies","honkers","chinky","dingleberry","shota","hillbillies","godammit","fugly","nasty","ejaculation","waysted","carpetmuncher","nastybitch","camel toe","strappado","jew","limpdick","heroin","panty","polack","pornprincess","gonorrehea","meatbeatter","crotchmonkey","topless","shithappens","foot fetish","canadian","amateur","uck","whitenigger","niger","bigger","squaw","hand job","buttbang","titty","gypo","defecate","kock","niggaracci","pussyfucker","corruption","girls gone wild","boobs","ejaculated","shitface","autoerotic","creamy","bible","fckcum","knockers","fucck","whorehouse","cocksmoker","queer","cocklover","assblaster","bombing","hooters","forni","kike","hapa","bazooms","vulva","failure","racial","fuckfreak","snot","cuntsucker","fingerfucked ","scallywag","pixy","kkk","mastabater","byatch","whigger","sos","pussy","group sex","attack","fucktard","nook","marijuana","filipina","asscowboy","fatso","spit","bazongas","chickslick","joint","niggards","cockblocker","gob","lingerie","anal","headlights","dike","pegging","kaffre","taste my","crack-whore","lynch","tub girl","bullshit","explosion","black","homosexual","fucked","showtime","lesbin","kid","fellatio","nudger","women's","boonga","choad","assault","cra5h","tuckahoe","fingerfucking ","hijacker","athletesfoot","pom","livesex","hostage","cocknob","nude","hard core","fuckbag","hobo","itch","gyp","kyke","pros","stupid","radicals","figging","fuckfest","hottotrot","kinbaku","sexhouse","violet wand","analsex","nigga","nittit","jiz ","suckmydick","pussies","hotdamn","assfucker","jizim","pixie","kum","cemetery","rigger","ethical slut","dolcett","ejaculating ","babe","cumquat","eatpussy","phuk","givehead","drunk","phukking","shiteater","catholic","hooker","cocksuck ","cocksucker","ball kicking","fuckyou","crappy","feltching","mideast","ecstacy","ribbed","dog style","interracial","tongue in a","pocha","skankywhore","pu55y","motherfuckings","piker","peepshow","jap","yiffy","tongethruster","nigger's","breastlover","stroke","twobitwhore","shits","israel's","jerkoff","bullet vibe","assassinate","killed","pocketpool","whacker","wtf","barf","juggalo","negro","spick","gyppy","nymph","snigger's","violence","lovemuscle","dago","feces","booty","niggers","shitter","sodomy","hussy","pisspig","coprophilia","christian","pimped","boob","breast","sperm","coloured","redlight","blacks","orga","bumblefuck","mams","slavedriver","killing","uptheass","bestial","sweetness","heeb","piccaninny","pot","honk","jizjuice","fuc","nignog","mgger","sexing","virginbreaker","samckdaddy","masterblaster","heterosexual","jigger ","blowjob","lovegun","shitstain","spank","hiv","lesbain","mad","sniggers","jizm ","testicle","ball sucking","dragqween","guro","pubic","titfuckin","moneyshot","camslut","bountybar","assklown","cocky","transsexual","unfuckable","bestiality","cocklicker"];
     this.voc = this.extractDictionary(most_frequent_toxic_words.join(' '), this.nGram(2));
     this.nlp = require('compromise');
 }

 vectorize(text) {
    var text = this.preprocess(text);
    var text = this.cleanString(text);
    var vector = this.bow(text, this.voc, this.nGram(2))
    return vector;
}
    
 preprocess(text) {
    return this.nlp(text).normalize({case:false, puctuation:false, plurals:true, parentheses:true, possessives:true, honorifics:true, verbs:true}).out('text');
 }

 cleanString(input) {
    return input.replace(/[^A-Z_a-z\s!?]/g,'').toLowerCase();
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

















},{"compromise":1}],5:[function(require,module,exports){
const Classifier = require('./classifier/classifier.js');
const Vectorizer = require('./classifier/vectorizer.js');
const Matcher = require('./classifier/matcher.js');

/**
 * Returns 1 if comment is toxic, 0 otherwise.
 *
 * @param comment is null terminated string representation of a comment.
 */
function classifyComment(comment) {
    if (matcher.check_match(comment) === 1) {
        return 1;
    }
    const vector = vectorizer.vectorize(comment);
    return classifier.predict(vector);
}

function addBlurFilter(element) {
    element.style.filter = "blur(3px)";
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
    if (commentNode === null
        || typeof(commentNode) === 'undefined'
        || commentNode.children[0] === null
        || typeof(commentNode.children[0]) === 'undefined'
        || commentNode.children[0].children[1] === null
        || typeof(commentNode.children[0].children[1]) === 'undefined'
        || commentNode.children[0].children[1].children[1] === null
        || typeof(commentNode.children[0].children[1].children[1]) === 'undefined'
        || commentNode.children[0].children[1].children[1].children[1] === null
        || typeof(commentNode.children[0].children[1].children[1].children[1]) === 'undefined'
        || commentNode.children[0].children[1].children[1].children[1].children[0] === null
        || typeof(commentNode.children[0].children[1].children[1].children[1].children[0]) === 'undefined') {
        return;
    }


    let commentTextElement = commentNode.children[0].children[1].children[1].children[1].children[0];
    let commentInnerText = commentTextElement.innerText;
    globalCommentId += 1;

    if (classifyComment(commentInnerText.toLowerCase()) === 1) {
        console.log('Toxic comment: ' + commentInnerText);
        addBlurFilter(commentTextElement);
        addHooverListener(commentTextElement);
        hideReplies(commentNode);
        toxicCommentsCounter += 1;
    }
}

function hideReplies(commentNode) {
    if (commentNode === null
    || typeof(commentNode) === 'undefined'
    || commentNode.children[1] === null
    || typeof(commentNode.children[1]) === 'undefined') {
        return;
    }
    commentNode.children[1].style.visibility='hidden'
}

function addMutationObserverOnCommentsLoading(target) {
    const config = {
        childList: true
    };

    observer = new MutationObserver(function(mutations) {
        mutations.forEach(function (mutation) {
            let commentNode = mutation.target.childNodes[globalCommentId];
            console.log('Mutation #' + globalCommentId + ': ' + commentNode);
            if (isEnabled) {
                markCommentIfToxic(commentNode);
            } else {
                console.log('Skip detoxifying.')
            }
        })
    });

    observer.observe(target, config);
}

function activePollForContentsElement(commentsElement) {
    const interval = setInterval(function () {

        if (commentsElement === null
        || typeof(commentsElement) === 'undefined'
        ||  commentsElement.children[1] === null
        || typeof(commentsElement.children[1]) === 'undefined'
        ||  commentsElement.children[1].children[2] === null) {
            return;
        }

        const contentsElement = commentsElement.children[1].children[2];
        if (contentsElement !== null) {
            clearInterval(interval);
            console.log('Loaded: contents');
            addMutationObserverOnCommentsLoading(contentsElement);
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

function initializeDetoxifier() {
    console.log('Initializing detoxification...');
    globalCommentId = 0;
    toxicCommentsCounter = 0;
    if (observer !== undefined && observer !== null) {
        observer.disconnect();
    }

    activePollFor('comments');
}

const classifier = new Classifier();
const vectorizer = new Vectorizer();
const matcher = new Matcher();
let isEnabled = true;
let globalCommentId = 0;
let toxicCommentsCounter = 0;
let observer;

window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'tab-updated') {
        initializeDetoxifier();
    }
    if (request.message === 'pause') {
        console.log('Detoxify disabled!');
        isEnabled = false;
    }
    if (request.message === 'resume') {
        console.log('Detoxify enabled!');
        isEnabled = true;
    }
    if (request.message === 'isEnabled') {
        sendResponse({enabled: isEnabled});
    }
    if (request.message === 'toxicCounter') {
        sendResponse({toxicCounter: toxicCommentsCounter});
    }
    if (request.message === 'isContentsPageHere') {
        sendResponse({alive: true});
    }
});

initializeDetoxifier();

},{"./classifier/classifier.js":2,"./classifier/matcher.js":3,"./classifier/vectorizer.js":4}],6:[function(require,module,exports){
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

},{}]},{},[5]);
