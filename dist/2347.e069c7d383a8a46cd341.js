(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[2347,4818,6412],{14818:(t,n,e)=>{var i;void 0===(i=function(t){"use strict";var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:"undefined"!=typeof self?self:{};function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}n.commonjsGlobal=i,n.commonjsRequire=r,n.createCommonjsModule=function(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return r(null==n&&e.path)}},e.exports),e.exports},n.getDefaultExportFromCjs=function(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}}.apply(n,[n]))||(t.exports=i)},67098:(t,n,e)=>{var i,r;i=[n,e(14818)],void 0===(r=function(t,e){"use strict";var i=e.createCommonjsModule((function(t){var n;void 0!==(n=function(){function t(e,i,r,o,s){for(;o>r;){if(o-r>600){var a=o-r+1,u=i-r+1,h=Math.log(a),l=.5*Math.exp(2*h/3),c=.5*Math.sqrt(h*l*(a-l)/a)*(u-a/2<0?-1:1);t(e,i,Math.max(r,Math.floor(i-u*l/a+c)),Math.min(o,Math.floor(i+(a-u)*l/a+c)),s)}var d=e[i],f=r,m=o;for(n(e,r,i),s(e[o],d)>0&&n(e,r,o);f<m;){for(n(e,f,m),f++,m--;s(e[f],d)<0;)f++;for(;s(e[m],d)>0;)m--}0===s(e[r],d)?n(e,r,m):n(e,++m,o),m<=i&&(r=m+1),i<=m&&(o=m-1)}}function n(t,n,e){var i=t[n];t[n]=t[e],t[e]=i}function e(t,n){return t<n?-1:t>n?1:0}return function(n,i,r,o,s){t(n,i,r||0,o||n.length-1,s||e)}}())&&(t.exports=n)}));n.quickselect=i}.apply(n,i))||(t.exports=r)},32782:(t,n,e)=>{var i,r;i=[n,e(67098)],void 0===(r=function(t,e){"use strict";function i(t,n){if(!(this instanceof i))return new i(t,n);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}function r(t,n,e){if(!e)return n.indexOf(t);for(var i=0;i<n.length;i++)if(e(t,n[i]))return i;return-1}function o(t,n){s(t,0,t.children.length,n,t)}function s(t,n,e,i,r){r||(r=m(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o,s=n;s<e;s++)o=t.children[s],a(r,t.leaf?i(o):o);return r}function a(t,n){return t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY),t}function u(t,n){return t.minX-n.minX}function h(t,n){return t.minY-n.minY}function l(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function f(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function m(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function p(t,n,i,r,o){for(var s,a=[n,i];a.length;)(i=a.pop())-(n=a.pop())<=r||(s=n+Math.ceil((i-n)/r/2)*r,e.quickselect(t,s,n,i,o),a.push(n,s,s,i))}i.prototype={all:function(){return this._all(this.data,[])},search:function(t){var n=this.data,e=[],i=this.toBBox;if(!f(t,n))return e;for(var r,o,s,a,u=[];n;){for(r=0,o=n.children.length;r<o;r++)s=n.children[r],f(t,a=n.leaf?i(s):s)&&(n.leaf?e.push(s):d(t,a)?this._all(s,e):u.push(s));n=u.pop()}return e},collides:function(t){var n=this.data,e=this.toBBox;if(!f(t,n))return!1;for(var i,r,o,s,a=[];n;){for(i=0,r=n.children.length;i<r;i++)if(o=n.children[i],f(t,s=n.leaf?e(o):o)){if(n.leaf||d(t,s))return!0;a.push(o)}n=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=m([]),this},remove:function(t,n){if(!t)return this;for(var e,i,o,s,a=this.data,u=this.toBBox(t),h=[],l=[];a||h.length;){if(a||(a=h.pop(),i=h[h.length-1],e=l.pop(),s=!0),a.leaf&&-1!==(o=r(t,a.children,n)))return a.children.splice(o,1),h.push(a),this._condense(h),this;s||a.leaf||!d(a,u)?i?(e++,a=i.children[e],s=!1):a=null:(h.push(a),l.push(e),e=0,i=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:u,compareMinY:h,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,n){for(var e=[];t;)t.leaf?n.push.apply(n,t.children):e.push.apply(e,t.children),t=e.pop();return n},_build:function(t,n,e,i){var r,s=e-n+1,a=this._maxEntries;if(s<=a)return o(r=m(t.slice(n,e+1)),this.toBBox),r;i||(i=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/Math.pow(a,i-1))),(r=m([])).leaf=!1,r.height=i;var u,h,l,c,d=Math.ceil(s/a),f=d*Math.ceil(Math.sqrt(a));for(p(t,n,e,f,this.compareMinX),u=n;u<=e;u+=f)for(p(t,u,l=Math.min(u+f-1,e),d,this.compareMinY),h=u;h<=l;h+=d)c=Math.min(h+d-1,l),r.children.push(this._build(t,h,c,i-1));return o(r,this.toBBox),r},_chooseSubtree:function(t,n,e,i){for(var r,o,s,a,u,h,c,d,f,m;i.push(n),!n.leaf&&i.length-1!==e;){for(c=d=1/0,r=0,o=n.children.length;r<o;r++)u=l(s=n.children[r]),f=t,m=s,(h=(Math.max(m.maxX,f.maxX)-Math.min(m.minX,f.minX))*(Math.max(m.maxY,f.maxY)-Math.min(m.minY,f.minY))-u)<d?(d=h,c=u<c?u:c,a=s):h===d&&u<c&&(c=u,a=s);n=a||n.children[0]}return n},_insert:function(t,n,e){var i=this.toBBox,r=e?t:i(t),o=[],s=this._chooseSubtree(r,this.data,n,o);for(s.children.push(t),a(s,r);n>=0&&o[n].children.length>this._maxEntries;)this._split(o,n),n--;this._adjustParentBBoxes(r,o,n)},_split:function(t,n){var e=t[n],i=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,i);var s=this._chooseSplitIndex(e,r,i),a=m(e.children.splice(s,e.children.length-s));a.height=e.height,a.leaf=e.leaf,o(e,this.toBBox),o(a,this.toBBox),n?t[n-1].children.push(a):this._splitRoot(e,a)},_splitRoot:function(t,n){this.data=m([t,n]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},_chooseSplitIndex:function(t,n,e){var i,r,o,a,u,h,c,d,f,m,p,x,g,_;for(h=c=1/0,i=n;i<=e-n;i++)f=r=s(t,0,i,this.toBBox),m=o=s(t,i,e,this.toBBox),p=Math.max(f.minX,m.minX),x=Math.max(f.minY,m.minY),g=Math.min(f.maxX,m.maxX),_=Math.min(f.maxY,m.maxY),a=Math.max(0,g-p)*Math.max(0,_-x),u=l(r)+l(o),a<h?(h=a,d=i,c=u<c?u:c):a===h&&u<c&&(c=u,d=i);return d},_chooseSplitAxis:function(t,n,e){var i=t.leaf?this.compareMinX:u,r=t.leaf?this.compareMinY:h;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,r)&&t.children.sort(i)},_allDistMargin:function(t,n,e,i){t.children.sort(i);var r,o,u=this.toBBox,h=s(t,0,n,u),l=s(t,e-n,e,u),d=c(h)+c(l);for(r=n;r<e-n;r++)o=t.children[r],a(h,t.leaf?u(o):o),d+=c(h);for(r=e-n-1;r>=n;r--)o=t.children[r],a(l,t.leaf?u(o):o),d+=c(l);return d},_adjustParentBBoxes:function(t,n,e){for(var i=e;i>=0;i--)a(n[i],t)},_condense:function(t){for(var n,e=t.length-1;e>=0;e--)0===t[e].children.length?e>0?(n=t[e-1].children).splice(n.indexOf(t[e]),1):this.clear():o(t[e],this.toBBox)},_initFormat:function(t){var n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},n.rbush=i}.apply(n,i))||(t.exports=r)},115:(t,n)=>{var e;void 0===(e=function(t){"use strict";const e={convertToGEGeometry:function(t,n){return null==n?null:t.convertJSONToGeometry(n)},exportPoint:function(t,n,e){const r=new i(t.getPointX(n),t.getPointY(n),e),o=t.hasZ(n),s=t.hasM(n);return o&&(r.z=t.getPointZ(n)),s&&(r.m=t.getPointM(n)),r},exportPolygon:function(t,n,e){return new r(t.exportPaths(n),e,t.hasZ(n),t.hasM(n))},exportPolyline:function(t,n,e){return new o(t.exportPaths(n),e,t.hasZ(n),t.hasM(n))},exportMultipoint:function(t,n,e){return new s(t.exportPoints(n),e,t.hasZ(n),t.hasM(n))},exportExtent:function(t,n,e){const i=t.hasZ(n),r=t.hasM(n),o=new a(t.getXMin(n),t.getYMin(n),t.getXMax(n),t.getYMax(n),e);if(i){const e=t.getZExtent(n);o.zmin=e.vmin,o.zmax=e.vmax}if(r){const e=t.getMExtent(n);o.mmin=e.vmin,o.mmax=e.vmax}return o}};let i=function(t,n,e){this.x=t,this.y=n,this.spatialReference=e,this.z=void 0,this.m=void 0},r=function(t,n,e,i){this.rings=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)},o=function(t,n,e,i){this.paths=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)},s=function(t,n,e,i){this.points=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)},a=function(t,n,e,i,r){this.xmin=t,this.ymin=n,this.xmax=e,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0};n.jsonAdapter=e,Object.defineProperty(t,"__esModule",{value:!0})}.apply(n,[n]))||(t.exports=e)},5999:(t,n,e)=>{var i,r;i=[n,e(57167)],void 0===(r=function(t,e){"use strict";function i(t){return t&&"upperLeft"===t.originPosition}const r=(t,n,e)=>[n,e],o=(t,n,e)=>[n,e,t[2]],s=(t,n,e)=>[n,e,t[2],t[3]];function a({scale:t,translate:n},e){return Math.round((e-n[0])/t[0])}function u({scale:t,translate:n},e){return Math.round((n[1]-e)/t[1])}function h(t,n,e){const i=[];let r,o,s,h;for(let l=0;l<e.length;l++){const c=e[l];l>0?(s=a(t,c[0]),h=u(t,c[1]),s===r&&h===o||(i.push(n(c,s-r,h-o)),r=s,o=h)):(r=a(t,c[0]),o=u(t,c[1]),i.push(n(c,r,o)))}return i.length>0?i:null}function l(t,n,e,i){return h(t,e?i?s:o:i?o:r,n)}function c(t,n,e,i){const a=[],u=e?i?s:o:i?o:r;for(let e=0;e<n.length;e++){const i=h(t,u,n[e]);i&&i.length>=3&&a.push(i)}return a.length?a:null}function d(t,n,e,i){const a=[],u=e?i?s:o:i?o:r;for(let e=0;e<n.length;e++){const i=h(t,u,n[e]);i&&i.length>=2&&a.push(i)}return a.length?a:null}function f({scale:t,translate:n},e){return e*t[0]+n[0]}function m({scale:t,translate:n},e){return n[1]-e*t[1]}function p(t,n,e){const i=new Array(e.length);if(!e.length)return i;const[r,o]=t.scale;let s=f(t,e[0][0]),a=m(t,e[0][1]);i[0]=n(e[0],s,a);for(let t=1;t<e.length;t++){const u=e[t];s+=u[0]*r,a-=u[1]*o,i[t]=n(u,s,a)}return i}function x(t,n,e){const i=new Array(e.length);for(let r=0;r<e.length;r++)i[r]=p(t,n,e[r]);return i}function g(t,n,e,i){return p(t,e?i?s:o:i?o:r,n)}function _(t,n,e,i){return x(t,e?i?s:o:i?o:r,n)}function y(t,n,e,i){return x(t,e?i?s:o:i?o:r,n)}function I(t,n,e){let[i,r]=e[0],o=Math.min(i,n[0]),s=Math.min(r,n[1]),a=Math.max(i,n[2]),u=Math.max(r,n[3]);for(let t=1;t<e.length;t++){const[n,h]=e[t];i+=n,r+=h,n<0&&(o=Math.min(o,i)),n>0&&(a=Math.max(a,i)),h<0?s=Math.min(s,r):h>0&&(u=Math.max(u,r))}return t[0]=o,t[1]=s,t[2]=a,t[3]=u,t}function M(t,n){if(!n.length)return null;t[0]=t[1]=Number.POSITIVE_INFINITY,t[2]=t[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++)I(t,t,n[e]);return t}function v(t,n,e,i,r){return n.xmin=a(t,e.xmin),n.ymin=u(t,e.ymin),n.xmax=a(t,e.xmax),n.ymax=u(t,e.ymax),n!==e&&(i&&(n.zmin=e.zmin,n.zmax=e.zmax),r&&(n.mmin=e.mmin,n.mmax=e.mmax)),n}function B(t,n,e,i,r){return n.points=l(t,e.points,i,r),n}function b(t,n,e,i,r){return n.x=a(t,e.x),n.y=u(t,e.y),n!==e&&(i&&(n.z=e.z),r&&(n.m=e.m)),n}function Y(t,n,e,i,r){const o=c(t,e.rings,i,r);return o?(n.rings=o,n):null}function z(t,n,e,i,r){const o=d(t,e.paths,i,r);return o?(n.paths=o,n):null}n.equals=function(t,n){if(t===n||null==t&&null==n)return!0;if(null==t||null==n)return!1;let e,r,o,s,a,u;return i(t)?(e=t.translate[0],r=t.translate[1],o=t.scale[0]):(e=t.extent.xmin,r=t.extent.ymax,o=t.tolerance),i(n)?(s=n.translate[0],a=n.translate[1],u=n.scale[0]):(s=n.extent.xmin,a=n.extent.ymax,u=n.tolerance),e===s&&r===a&&o===u},n.getQuantizedBoundsCoordsArray=I,n.getQuantizedBoundsCoordsArrayArray=M,n.getQuantizedBoundsPaths=function(t){return M([0,0,0,0],t)},n.getQuantizedBoundsPoints=function(t){const n=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return I(n,n,t)},n.getQuantizedBoundsRings=function(t){return M([0,0,0,0],t)},n.quantizeBounds=function(t,n,e){return n[0]=a(t,e[0]),n[3]=u(t,e[1]),n[2]=a(t,e[2]),n[1]=u(t,e[3]),n},n.quantizeExtent=v,n.quantizeGeometry=function(t,n){return t&&n?e.isPoint(n)?b(t,{},n,!1,!1):e.isPolyline(n)?z(t,{},n,!1,!1):e.isPolygon(n)?Y(t,{},n,!1,!1):e.isMultipoint(n)?B(t,{},n,!1,!1):e.isExtent(n)?v(t,{},n,!1,!1):null:null},n.quantizeMultipoint=B,n.quantizePaths=d,n.quantizePoint=b,n.quantizePoints=l,n.quantizePolygon=Y,n.quantizePolyline=z,n.quantizeRings=c,n.quantizeX=a,n.quantizeY=u,n.toQuantizationTransform=function(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:[t.tolerance,t.tolerance],translate:[t.extent.xmin,t.extent.ymax]}:null},n.unquantizeBounds=function(t,n,e){return e?(n[0]=f(t,e[0]),n[1]=m(t,e[3]),n[2]=f(t,e[2]),n[3]=m(t,e[1]),n):[f(t,n[0]),m(t,n[3]),f(t,n[2]),m(t,n[1])]},n.unquantizeCoordsArray=p,n.unquantizeCoordsArrayArray=x,n.unquantizeExtent=function(t,n,e,i,r){return n.xmin=f(t,e.xmin),n.ymin=m(t,e.ymin),n.xmax=f(t,e.xmax),n.ymax=m(t,e.ymax),n!==e&&(i&&(n.zmin=e.zmin,n.zmax=e.zmax),r&&(n.mmin=e.mmin,n.mmax=e.mmax)),n},n.unquantizeMultipoint=function(t,n,e,i,r){return n.points=g(t,e.points,i,r),n},n.unquantizePaths=_,n.unquantizePoint=function(t,n,e,i,r){return n.x=f(t,e.x),n.y=m(t,e.y),n!==e&&(i&&(n.z=e.z),r&&(n.m=e.m)),n},n.unquantizePoints=g,n.unquantizePolygon=function(t,n,e,i,r){return n.rings=y(t,e.rings,i,r),n},n.unquantizePolyline=function(t,n,e,i,r){return n.paths=_(t,e.paths,i,r),n},n.unquantizeRings=y,n.unquantizeX=f,n.unquantizeY=m,Object.defineProperty(t,"__esModule",{value:!0})}.apply(n,i))||(t.exports=r)},38003:(t,n)=>{var e;void 0===(e=function(t){"use strict";function e(t,n){return t?n?4:3:n?3:2}function i(t,n,i,r,o,s,a=1){const u=e(o,s);let h=i,l=i+u,c=0,d=0,f=0,m=0,p=0;for(let e=0,i=r-1;e<i;e++,h+=u,l+=u){const e=n[h],i=n[h+1],r=n[h+2],s=n[l],a=n[l+1],u=n[l+2];let x=e*a-s*i;m+=x,c+=(e+s)*x,d+=(i+a)*x,o&&(x=e*u-s*r,f+=(r+u)*x,p+=x),e<t[0]&&(t[0]=e),e>t[1]&&(t[1]=e),i<t[2]&&(t[2]=i),i>t[3]&&(t[3]=i),o&&(r<t[4]&&(t[4]=r),r>t[5]&&(t[5]=r))}if(m*a>0&&(m*=-1),p*a>0&&(p*=-1),!m)return null;const x=[c,d,.5*m];return o&&(x[3]=f,x[4]=.5*p),x}function r(t,n,i,r,h){const l=e(r,h);let c=n,d=n+l,f=0,m=0,p=0,x=0;for(let n=0,e=i-1;n<e;n++,c+=l,d+=l){const n=t[c],e=t[c+1],i=t[c+2],h=t[d],l=t[d+1],g=t[d+2],_=r?s(n,e,i,h,l,g):o(n,e,h,l);if(_)if(f+=_,r){const t=u(n,e,i,h,l,g);m+=_*t[0],p+=_*t[1],x+=_*t[2]}else{const t=a(n,e,h,l);m+=_*t[0],p+=_*t[1]}}return f>0?r?[m/f,p/f,x/f]:[m/f,p/f]:i>0?r?[t[n],t[n+1],t[n+2]]:[t[n],t[n+1]]:null}function o(t,n,e,i){const r=e-t,o=i-n;return Math.sqrt(r*r+o*o)}function s(t,n,e,i,r,o){const s=i-t,a=r-n,u=o-e;return Math.sqrt(s*s+a*a+u*u)}function a(t,n,e,i){return[t+.5*(e-t),n+.5*(i-n)]}function u(t,n,e,i,r,o){return[t+.5*(i-t),n+.5*(r-n),e+.5*(o-e)]}n.getCentroidOptimizedGeometry=function(t,n,o,s,a){if(!n||!n.lengths.length)return null;const u="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const h=t.coords,l=[],c=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:f}=n,m=e(o,s);let p=0;for(const t of d){const n=i(c,f,p,t,o,s,u);n&&l.push(n),p+=t*m}if(l.sort(((t,n)=>{let e=u*t[2]-u*n[2];return 0===e&&o&&(e=t[4]-n[4]),e})),l.length){let t=6*l[0][2];h[0]=l[0][0]/t,h[1]=l[0][1]/t,o&&(t=6*l[0][4],h[2]=0!==t?l[0][3]/t:0),(h[0]<c[0]||h[0]>c[1]||h[1]<c[2]||h[1]>c[3]||o&&(h[2]<c[4]||h[2]>c[5]))&&(h.length=0)}if(!h.length){const t=n.lengths[0]?r(f,0,d[0],o,s):null;if(!t)return null;h[0]=t[0],h[1]=t[1],o&&t.length>2&&(h[2]=t[2])}return t},n.lineCentroid=r,Object.defineProperty(t,"__esModule",{value:!0})}.apply(n,[n]))||(t.exports=e)},74373:(t,n,e)=>{var i,r;i=[n,e(74637),e(32782)],void 0===(r=function(t,e,i){"use strict";const r={minX:0,minY:0,maxX:0,maxY:0};let o=function(){function t(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=i.rbush(9,e("csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let n=0;this._idByBounds.forEach(((e,i)=>{t[n++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}var n=t.prototype;return n.clear=function(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()},n.delete=function(t){const n=this._boundsById.get(t);this._boundsById.delete(t),n&&(this._idByBounds.delete(n),this._indexInvalid||this._index.remove(n))},n.forEachInBounds=function(t,n){this._loadIndex();for(const e of function(t,n){return r.minX=n[0],r.minY=n[1],r.maxX=n[2],r.maxY=n[3],t.search(r)}(this._index,t))n(this._idByBounds.get(e))},n.get=function(t){return this._boundsById.get(t)},n.has=function(t){return this._boundsById.has(t)},n.invalidateIndex=function(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)},n.set=function(t,n){if(!this._indexInvalid){const n=this._boundsById.get(t);n&&(this._index.remove(n),this._idByBounds.delete(n))}this._boundsById.set(t,n),n&&(this._idByBounds.set(n,t),this._indexInvalid||(this._boundsToLoad.push(n),this._boundsToLoad.length>5e4&&this._loadIndex()))},t}();n.BoundsStore=o,Object.defineProperty(t,"__esModule",{value:!0})}.apply(n,i))||(t.exports=r)},7604:(t,n,e)=>{var i,r;i=[e(58797),e(3718),e(73462),e(49359),e(59286),e(18167),e(16985),e(24088),e(74373),e(78674)],void 0===(r=function(t,n,e,i,r,o,s,a,u,h){"use strict";return function(){function l(t){this.geometryInfo=t,this._boundsStore=new u.BoundsStore,this._featuresById=new Map,this._markedIds=new Set,this.events=new r,this.featureAdapter=h.optimizedFeatureQueryEngineAdapter}var c=l.prototype;return c.add=function(t){this._add(t),this._emitChanged()},c.addMany=function(t){for(const n of t)this._add(n);this._emitChanged()},c.clear=function(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()},c.removeById=function(t){const n=this._featuresById.get(t);return n?(this._remove(n),this._emitChanged(),n):null},c.removeManyById=function(t){this._boundsStore.invalidateIndex();for(const n of t){const t=this._featuresById.get(n);t&&this._remove(t)}this._emitChanged()},c.forEachBounds=function(t,n,e){for(const i of t){const t=this._boundsStore.get(i.objectId);t&&n(a.fromRect(e,t))}},c.getFeature=function(t){return this._featuresById.get(t)},c.has=function(t){return this._featuresById.has(t)},c.forEach=function(t){this._featuresById.forEach((n=>t(n)))},c.forEachInBounds=function(t,n){this._boundsStore.forEachInBounds(t,(t=>{n(this._featuresById.get(t))}))},c.startMarkingUsedFeatures=function(){this._boundsStore.invalidateIndex(),this._markedIds.clear()},c.sweep=function(){let t=!1;this._featuresById.forEach(((n,e)=>{this._markedIds.has(e)||(t=!0,this._remove(n))})),this._markedIds.clear(),t&&this._emitChanged()},c._emitChanged=function(){this.events.emit("changed",void 0)},c._add=function(t){if(!t)return;const r=t.objectId;if(null==r)return void e.getLogger("esri.layers.graphics.data.FeatureStore").error(new i("featurestore:invalid-feature","feature id is missing",{feature:t}));const a=this._featuresById.get(r);let u;if(this._markedIds.add(r),a?(t.displayId=a.displayId,u=this._boundsStore.get(r),this._boundsStore.delete(r)):n.isSome(this.onFeatureAdd)&&this.onFeatureAdd(t),!t.geometry||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(r,null),void this._featuresById.set(r,t);u=s.getBoundsOptimizedGeometry(u||o.create(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(r,u),this._featuresById.set(r,t)},c._remove=function(t){return n.isSome(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t},t._createClass(l,[{key:"geometryType",get:function(){return this.geometryInfo.geometryType}},{key:"hasM",get:function(){return this.geometryInfo.hasM}},{key:"hasZ",get:function(){return this.geometryInfo.hasZ}},{key:"numFeatures",get:function(){return this._featuresById.size}},{key:"fullBounds",get:function(){if(!this.numFeatures)return null;const t=o.create(o.NEGATIVE_INFINITY);return this._featuresById.forEach((n=>{const e=this._boundsStore.get(n.objectId);e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]))})),t}},{key:"storeStatistics",get:function(){let t=0;return this._featuresById.forEach((n=>{n.geometry&&n.geometry.coords&&(t+=n.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}}]),l}()}.apply(n,i))||(t.exports=r)},78674:(t,n,e)=>{var i,r;i=[n,e(5691),e(87547),e(38003)],void 0===(r=function(t,e,i,r){"use strict";const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,n)=>t.attributes[n],cloneWithGeometry:(t,n)=>new e(n,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,n)=>(t.centroid||(t.centroid=r.getCentroidOptimizedGeometry(new i,t.geometry,n.hasZ,n.hasM)),t.centroid)};n.default=o,n.optimizedFeatureQueryEngineAdapter=o,Object.defineProperty(t,"__esModule",{value:!0})}.apply(n,i))||(t.exports=r)},79043:(t,n,e)=>{var i,r;i=[n,e(9720),e(56750),e(70272),e(79928),e(115)],void 0===(r=function(t,e,i,r,o,s){"use strict";const a=[0,0];function u(t,n){if(!n)return null;if("x"in n){const e={x:0,y:0};return[e.x,e.y]=t(n.x,n.y,a),null!=n.z&&(e.z=n.z),null!=n.m&&(e.m=n.m),e}if("xmin"in n){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=t(n.xmin,n.ymin,a),[e.xmax,e.ymax]=t(n.xmax,n.ymax,a),n.hasZ&&(e.zmin=n.zmin,e.zmax=n.zmax,e.hasZ=!0),n.hasM&&(e.mmin=n.mmin,e.mmax=n.mmax,e.hasM=!0),e}return"rings"in n?{rings:h(n.rings,t),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:h(n.paths,t),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:l(n.points,t),hasM:n.hasM,hasZ:n.hasZ}:void 0}function h(t,n){const e=[];for(const i of t)e.push(l(i,n));return e}function l(t,n){const e=[];for(const i of t){const t=n(i[0],i[1],[0,0]);e.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return e}const c=u.bind(null,r.lngLatToXY),d=u.bind(null,r.xyToLngLat),f=new(function(){function t(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}var n=t.prototype;return n.push=async function(t,n,r){!t||!t.length||!n||!r||i.equals(n,r);const o={geometries:t,inSpatialReference:n,outSpatialReference:r,resolve:null};return this._jobs.push(o),e.create((t=>{o.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))},n._process=function(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:e,outSpatialReference:a,resolve:u}=t;r.canProject(e,a)?i.isWebMercator(a)?u(n.map(c)):u(n.map(d)):u(o.projectMany(s.jsonAdapter,n,e,a,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))},t}());n.checkProjectionSupport=async function(t,n){if(!n)return;const e=Array.isArray(t)?t.map((t=>{var n;return null==(n=t.geometry)?void 0:n.spatialReference})):[t];await o.initializeProjection(e.map((t=>({source:t,dest:n}))))},n.project=function(t,n,e){return t?(e||(e=n,n=t.spatialReference),i.isValid(n)&&i.isValid(e)&&!i.equals(n,e)?r.canProject(n,e)?i.isWebMercator(e)?c(t):d(t):o.projectMany(s.jsonAdapter,[t],n,e,null)[0]:t):t},n.projectMany=async function(t,n,e){return f.push(t,n,e)},Object.defineProperty(t,"__esModule",{value:!0})}.apply(n,i))||(t.exports=r)}}]);