import{i as r,b as t,a as n,r as e,f as o}from"./p-7758183a.js";var u=Array.isArray;function f(t){return t}var c=/^(?:0|[1-9]\d*)$/;function i(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&c.test(t))&&t>-1&&t%1==0&&t<r}function a(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}var l=Object.prototype;function b(r){return n(r)&&"[object Arguments]"==t(r)}var s=Object.prototype,v=s.hasOwnProperty,p=s.propertyIsEnumerable,j=b(function(){return arguments}())?b:function(t){return n(t)&&v.call(t,"callee")&&!p.call(t,"callee")},y="object"==typeof exports&&exports&&!exports.nodeType&&exports,m=y&&"object"==typeof module&&module&&!module.nodeType&&module,d=m&&m.exports===y?e.Buffer:void 0,x=(d?d.isBuffer:void 0)||function(){return!1},O={};O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Arguments]"]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object Boolean]"]=O["[object DataView]"]=O["[object Date]"]=O["[object Error]"]=O["[object Function]"]=O["[object Map]"]=O["[object Number]"]=O["[object Object]"]=O["[object RegExp]"]=O["[object Set]"]=O["[object String]"]=O["[object WeakMap]"]=!1;var g,A="object"==typeof exports&&exports&&!exports.nodeType&&exports,h=A&&"object"==typeof module&&module&&!module.nodeType&&module,F=h&&h.exports===A&&o.process,k=function(){try{return h&&h.require&&h.require("util").types||F&&F.binding&&F.binding("util")}catch(t){}}(),G=k&&k.isTypedArray,L=G?(g=G,function(t){return g(t)}):function(r){return n(r)&&a(r.length)&&!!O[t(r)]},P=Object.prototype.hasOwnProperty,S=Object.prototype.hasOwnProperty;function $(e){return null!=(o=e)&&a(o.length)&&!function(e){if(!r(e))return!1;var o=t(e);return"[object Function]"==o||"[object GeneratorFunction]"==o||"[object AsyncFunction]"==o||"[object Proxy]"==o}(o)?function(t,r){var e=u(t),o=!e&&j(t),n=!e&&!o&&x(t),c=!e&&!o&&!n&&L(t),a=e||o||n||c,b=a?function(t,r){for(var e=-1,o=Array(t);++e<t;)o[e]=r(e);return o}(t.length,String):[],f=b.length;for(var p in t)a&&("length"==p||n&&("offset"==p||"parent"==p)||c&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||i(p,f))||b.push(p);return b}(e):function(t){if(!r(t))return function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}(t);var e,o,n=(e=t)===("function"==typeof(o=e&&e.constructor)&&o.prototype||l),c=[];for(var u in t)("constructor"!=u||!n&&S.call(t,u))&&c.push(u);return c}(e);var o}function q(t,r){return null==t?t:function(t,r,e){for(var o=-1,n=Object(t),c=e(t),u=c.length;u--;){var a=c[++o];if(!1===r(n[a],a,n))break}return t}(t,"function"==typeof(e=r)?e:f,$);var e}export{q as f};