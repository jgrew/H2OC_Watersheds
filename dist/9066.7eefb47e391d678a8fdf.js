(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[9066],{739:(t,e,i)=>{var r,n;r=[i(58797),i(83490)],void 0===(n=function(t,e){"use strict";let i=function(){function i(t,e,i,n,o){this._context=null,this._glName=null,this._bufferType=void 0,this._usage=35044,this._size=-1,this._indexType=void 0,this.id=r++,t.instanceCounter.increment(1,this),this._context=t,this._bufferType=e,this._usage=i,this._glName=this._context.gl.createBuffer(),n&&this.setData(n,o)}i.createIndex=function(t,e,r,n){return new i(t,34963,e,r,n)},i.createVertex=function(t,e,r){return new i(t,34962,e,r)};var n=i.prototype;return n.dispose=function(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(1,this),this._context=null)},n.setData=function(t,i){if(!t)return;if("number"==typeof t){if(t<0&&console.error("Buffer size cannot be negative!"),34963===this._bufferType&&i)switch(this._indexType=i,this._size=t,i){case 5123:t*=2;break;case 5125:t*=4}}else{let i=t.byteLength;e.isUint16Array(t)&&(i/=2,this._indexType=5123),e.isUint32Array(t)&&(i/=4,this._indexType=5125),this._size=i}const r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this._bufferType,t,this._usage),this._context.bindVAO(r)},n.setSubData=function(t,i=0,r=0,n){if(!t)return;(i<0||i>=this._size)&&console.error("offset is out of range!");let o=i,s=r,a=n,c=t.byteLength;e.isUint16Array(t)&&(c/=2,o*=2,s*=2,a*=2),e.isUint32Array(t)&&(c/=4,o*=4,s*=4,a*=4),void 0===n&&(n=c-1),r>=n&&console.error("end must be bigger than start!"),i+r-n>this._size&&console.error("An attempt to write beyond the end of the buffer!");const f=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,h=ArrayBuffer.isView(t)?t.buffer:t;u.bufferSubData(this._bufferType,o,h.slice(s,a)),this._context.bindVAO(f)},t._createClass(i,[{key:"glName",get:function(){return this._glName}},{key:"size",get:function(){return this._size}},{key:"usage",get:function(){return this._usage}},{key:"bufferType",get:function(){return this._bufferType}},{key:"indexType",get:function(){return this._indexType}},{key:"byteSize",get:function(){return 34962===this._bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}}]),i}(),r=0;return i}.apply(e,r))||(t.exports=n)},86484:(t,e,i)=>{var r,n;r=[i(58797),i(74637),i(3718),i(76133)],void 0===(n=function(t,e,i,r){"use strict";let n=function(){function e(t,e,i,r,n={}){if(this._context=null,this._glName=null,this._locations={},this.id=s++,this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),t.instanceCounter.increment(3,this),this._context=t,this._vertexShaderSource=e,this._fragmentShaderSource=i,Array.isArray(n))for(const t of n)this._defines[t]="1";else this._defines=n;this._locations=r}var n=e.prototype;return n.getDefine=function(t){return this._defines[t]},n.dispose=function(){if(!this._context)return;const t=this._context.gl;if(this._vShader){const e=this._vShader;t.deleteShader(e),this._vShader=null}if(this._fShader){const e=this._fShader;t.deleteShader(e),this._fShader=null}this._glName&&(t.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null},n.initialize=function(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const t=this._context.gl,e=t.createProgram();t.attachShader(e,this._vShader),t.attachShader(e,this._fShader);for(const i in this._locations){const r=this._locations[i];t.bindAttribLocation(e,r,i)}t.linkProgram(e),this._glName=e,this._initialized=!0},n.getUniformLocation=function(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]},n.hasUniform=function(t){return null!==this.getUniformLocation(t)},n.getAttribLocation=function(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]},n.setUniform1i=function(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)},n.setUniform1iv=function(t,i){const r=this._nameToUniform1v[t];o(r,i)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(t),i),void 0===r?this._nameToUniform1v[t]=e._arrayCopy(i):e._arrayAssign(i,r))},n.setUniform2iv=function(t,i){const r=this._nameToUniform2[t];o(r,i)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(t),i),void 0===r?this._nameToUniform2[t]=e._arrayCopy(i):e._arrayAssign(i,r))},n.setUniform3iv=function(t,i){const r=this._nameToUniform3[t];o(r,i)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(t),i),void 0===r?this._nameToUniform3[t]=e._arrayCopy(i):e._arrayAssign(i,r))},n.setUniform4iv=function(t,i){const r=this._nameToUniform4[t];o(r,i)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(t),i),void 0===r?this._nameToUniform4[t]=e._arrayCopy(i):e._arrayAssign(i,r))},n.setUniform1f=function(t,e){const i=this._nameToUniform1[t];void 0!==i&&e===i||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(t),e),this._nameToUniform1[t]=e)},n.setUniform1fv=function(t,i){const r=this._nameToUniform1v[t];o(r,i)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(t),i),void 0===r?this._nameToUniform1v[t]=e._arrayCopy(i):e._arrayAssign(i,r))},n.setUniform2f=function(t,e,i){const r=this._nameToUniform2[t];void 0!==r&&e===r[0]&&i===r[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(t),e,i),void 0===r?this._nameToUniform2[t]=[e,i]:(r[0]=e,r[1]=i))},n.setUniform2fv=function(t,i){const r=this._nameToUniform2[t];o(r,i)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(t),i),void 0===r?this._nameToUniform2[t]=e._arrayCopy(i):e._arrayAssign(i,r))},n.setUniform3f=function(t,e,i,r){const n=this._nameToUniform3[t];void 0!==n&&e===n[0]&&i===n[1]&&r===n[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(t),e,i,r),void 0===n?this._nameToUniform3[t]=[e,i,r]:(n[0]=e,n[1]=i,n[2]=r))},n.setUniform3fv=function(t,i){const r=this._nameToUniform3[t];o(r,i)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(t),i),void 0===r?this._nameToUniform3[t]=e._arrayCopy(i):e._arrayAssign(i,r))},n.setUniform4f=function(t,e,i,r,n){const o=this._nameToUniform4[t];void 0!==o&&e===o[0]&&i===o[1]&&r===o[2]&&n===o[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(t),e,i,r,n),void 0===o?this._nameToUniform4[t]=[e,i,r,n]:(o[0]=e,o[1]=i,o[2]=r,o[3]=n))},n.setUniform4fv=function(t,i){const r=this._nameToUniform4[t];o(r,i)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(t),i),void 0===r?this._nameToUniform4[t]=e._arrayCopy(i):e._arrayAssign(i,r))},n.setUniformMatrix3fv=function(t,r,n=!1){const s=this._nameToUniformMatrix3[t];(function(t,e){return!!i.isNone(t)||(9!==t.length?o(t,e):9!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8])})(s,r)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(t),n,r),void 0===s?this._nameToUniformMatrix3[t]=e._arrayCopy(r):e._arrayAssign(r,s))},n.setUniformMatrix4fv=function(t,r,n=!1){const s=this._nameToUniformMatrix4[t];(function(t,e){return!!i.isNone(t)||(16!==t.length?o(t,e):16!==t.length||t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||t[4]!==e[4]||t[5]!==e[5]||t[6]!==e[6]||t[7]!==e[7]||t[8]!==e[8]||t[9]!==e[9]||t[10]!==e[10]||t[11]!==e[11]||t[12]!==e[12]||t[13]!==e[13]||t[14]!==e[14]||t[15]!==e[15])})(s,r)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(t),n,r),void 0===s?this._nameToUniformMatrix4[t]=e._arrayCopy(r):e._arrayAssign(r,s))},n.assertCompatibleVertexAttributeLocations=function(t){const e=t.locations===this.locations;return e||console.error("VertexAttributeLocations are incompatible"),e},e._padToThree=function(t){let e=t.toString();return t<1e3&&(e=("  "+t).slice(-3)),e},n._addLineNumbers=function(t){let i=2;return t.replace(/\n/g,(()=>"\n"+e._padToThree(i++)+":"))},n._loadShader=function(t){const e=35633===t;let i=e?this._vertexShaderSource:this._fragmentShaderSource,n="";for(const t in this._defines)n+=`#define ${t} ${this._defines[t]}\n`;i=n+i,"webgl2"===this._context.contextVersion&&(i=r.transpileShader(i,e?"vertex":"fragment"));const o=this._context.gl,s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s},e._arrayCopy=function(t){const e=[];for(let i=0;i<t.length;++i)e.push(t[i]);return e},e._arrayAssign=function(t,e){for(let i=0;i<t.length;++i)e[i]=t[i]},t._createClass(e,[{key:"glName",get:function(){return this._glName}},{key:"locations",get:function(){return this._locations}}]),e}();function o(t,e){if(i.isNone(t)||t.length!==e.length)return!0;for(let i=0;i<t.length;++i)if(t[i]!==e[i])return!0;return!1}let s=0;return n}.apply(e,r))||(t.exports=n)},76133:(t,e,i)=>{var r,n;r=[e,i(98582),i(80593)],void 0===(n=function(t,i,r){"use strict";var n=999,o=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function s(){var t,e,i,s=0,a=0,c=n,f=[],u=[],h=1,l=0,d=0,m=!1,_=!1,p="";return function(e){return u=[],null!==e?function(e){var r;for(s=0,i=(p+=e).length;t=p[s],s<i;){switch(r=s,c){case 0:s=v();break;case 1:case 2:s=b();break;case 3:s=A();break;case 4:s=w();break;case 11:s=T();break;case 5:s=D();break;case 9999:s=S();break;case 9:s=x();break;case n:s=y()}if(r!==s)switch(p[r]){case"\n":l=0,++h;break;default:++l}}return a+=s,p=p.slice(s),u}(e.replace?e.replace(/\r\n/g,"\n"):e):(f.length&&g(f.join("")),c=10,g("(eof)"),u)};function g(t){t.length&&u.push({type:o[c],data:t,position:d,line:h,column:l})}function y(){return f=f.length?[]:f,"/"===e&&"*"===t?(d=a+s-1,c=0,e=t,s+1):"/"===e&&"/"===t?(d=a+s-1,c=1,e=t,s+1):"#"===t?(c=2,d=a+s,s):/\s/.test(t)?(c=9,d=a+s,s):(m=/\d/.test(t),_=/[^\w_]/.test(t),d=a+s,c=m?4:_?3:9999,s)}function x(){return/[^\s]/g.test(t)?(g(f.join("")),c=n,s):(f.push(t),e=t,s+1)}function b(){return"\r"!==t&&"\n"!==t||"\\"===e?(f.push(t),e=t,s+1):(g(f.join("")),c=n,s)}function v(){return"/"===t&&"*"===e?(f.push(t),g(f.join("")),c=n,s+1):(f.push(t),e=t,s+1)}function A(){if("."===e&&/\d/.test(t))return c=5,s;if("/"===e&&"*"===t)return c=0,s;if("/"===e&&"/"===t)return c=1,s;if("."===t&&f.length){for(;U(f););return c=5,s}if(";"===t||")"===t||"("===t){if(f.length)for(;U(f););return g(t),c=n,s+1}var i=2===f.length&&"="!==t;if(/[\w_\d\s]/.test(t)||i){for(;U(f););return c=n,s}return f.push(t),e=t,s+1}function U(t){for(var e,i,n=0;;){if(e=r.operators.indexOf(t.slice(0,t.length+n).join("")),i=r.operators[e],-1===e){if(n--+t.length>0)continue;i=t.slice(0,1).join("")}return g(i),d+=i.length,(f=f.slice(i.length)).length}}function T(){return/[^a-fA-F0-9]/.test(t)?(g(f.join("")),c=n,s):(f.push(t),e=t,s+1)}function w(){return"."===t||/[eE]/.test(t)?(f.push(t),c=5,e=t,s+1):"x"===t&&1===f.length&&"0"===f[0]?(c=11,f.push(t),e=t,s+1):/[^\d]/.test(t)?(g(f.join("")),c=n,s):(f.push(t),e=t,s+1)}function D(){return"f"===t&&(f.push(t),e=t,s+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(f.push(t),e=t,s+1):/[^\d]/.test(t)?(g(f.join("")),c=n,s):(f.push(t),e=t,s+1)}function S(){if(/[^\d\w_]/.test(t)){var i=f.join("");return c=r.literals.indexOf(i)>-1?8:r.builtins.indexOf(i)>-1?7:6,g(f.join("")),c=n,s}return f.push(t),e=t,s+1}}function a(t){return e=t,i=s(),[].concat(i(e)).concat(i(null));var e,i}const c=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function f(t,e){for(let i=e-1;i>=0;i--){const e=t[i];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function u(t,e,i,r){r=r||i;for(const n of t)if("ident"===n.type&&n.data===i)return r in e?e[r]++:e[r]=0,u(t,e,r+"_"+e[r],r);return i}function h(t,e,i="afterVersion"){function r(t,e){for(let i=e;i<t.length;i++){const e=t[i];if("operator"===e.type&&";"===e.data)return i}return null}const n={data:"\n",type:"whitespace"},o=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=function(t){let e=-1,n=0,o=-1;for(let s=0;s<t.length;s++){const a=t[s];if("preprocessor"===a.type&&(a.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:a.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==i&&"afterPrecision"!==i||"preprocessor"===a.type&&/^#version/.test(a.data)&&(o=Math.max(o,s)),"afterPrecision"===i&&"keyword"===a.type&&"precision"===a.data){const e=r(t,s);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===n&&(e=s)}return e+1}(t);o(s-1)&&t.splice(s++,0,n);for(const i of e)t.splice(s++,0,i);o(s-1)&&o(s)&&t.splice(s,0,n)}function l(t,e,i,r="lowp"){h(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function d(t,e,i,r,n="lowp"){h(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:r.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function m(t,e){let i,r,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(i=o),"]"===e.data)){r=o;break}"integer"===e.type&&(n=parseInt(e.data,10))}return i&&r&&t.splice(i,r-i+1),n}e.transpileShader=function(t,e){const r=a(t);if("300 es"===function(t,e="100",i="300 es"){const r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=r.exec(n.data);if(t){const r=t[1].replace(/\s\s+/g," ");if(r===i)return r;if(r===e)return n.data="#version "+i,e;throw new Error("unknown glsl version: "+r)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+i},{type:"whitespace",data:"\n"}),null}(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let n=null,o=null;const s={},h={};for(let t=0;t<r.length;++t){const a=r[t];switch(a.type){case"keyword":"vertex"===e&&"attribute"===a.data?a.data="in":"varying"===a.data&&(a.data="vertex"===e?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim())&&(a.data=a.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===e&&"gl_FragColor"===a.data&&(n||(n=u(r,s,"fragColor"),l(r,n,"vec4")),a.data=n),"fragment"===e&&"gl_FragData"===a.data){const e=m(r,t+1),i=u(r,s,"fragData");d(r,i,"vec4",e,"mediump"),a.data=i}else"fragment"===e&&"gl_FragDepthEXT"===a.data&&(o||(o=u(r,s,"gl_FragDepth")),a.data=o);break;case"ident":if(i.indexOf(a.data)>=0){if("vertex"===e&&f(r,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");a.data in h||(h[a.data]=u(r,s,a.data)),a.data=h[a.data]}}}for(let t=r.length-1;t>=0;--t){const e=r[t];if("preprocessor"===e.type){const i=e.data.match(/\#extension\s+(.*)\:/);if(i&&i[1]&&c.indexOf(i[1].trim())>=0){const e=r[t+1];r.splice(t,e&&"whitespace"===e.type?2:1)}const n=e.data.match(/\#ifdef\s+(.*)/);n&&n[1]&&c.indexOf(n[1].trim())>=0&&(e.data="#if 1");const o=e.data.match(/\#ifndef\s+(.*)/);o&&o[1]&&c.indexOf(o[1].trim())>=0&&(e.data="#if 0")}}return function(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}(r)},Object.defineProperty(t,"__esModule",{value:!0})}.apply(e,r))||(t.exports=n)},81184:(t,e,i)=>{var r,n;r=[e,i(74637),i(3718)],void 0===(n=function(t,i,r){"use strict";function n(t){return t[0].stride}function o(t){switch(t){case 5126:case 5124:case 5125:return 4;case 5122:case 5123:return 2;case 5120:case 5121:return 1;default:throw new Error("Unknown data type")}}function s(t){switch(t){case 6406:case 6409:return 1;case 6410:return 2;case 6407:return 3;case 6408:case 34041:return 4;case 33325:return 2;case 33326:case 35898:case 33327:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33189:return 2;case 34041:return 4;case 32854:return 2;case 36168:return 1}return 0}e.addDescriptor=function(t,e,i,r,n,s){const a=o(r);if(t.length>0){const o=t[0].stride,c=o+a*i;t.forEach((t=>t.stride=c)),t.push({name:e,count:i,type:r,offset:o,stride:c,normalized:n,divisor:s})}else t.push({name:e,count:i,type:r,offset:0,stride:a*i,normalized:n,divisor:s})},e.bindVertexBufferLayout=function(t,e,i,r,n){const o=t.gl,s=t.capabilities.instancing;t.bindBuffer(i);for(const t of r){const i=e[t.name],r=(n||(0+t.baseInstance?t.baseInstance:0))*t.stride;if(void 0===i&&console.error(`There is no location for vertex attribute '${t.name}' defined.`),t.baseInstance&&!t.divisor&&console.error(`Vertex attribute '${t.name}' uses baseInstanceOffset without divisor.`),t.count<=4)o.vertexAttribPointer(i,t.count,t.type,t.normalized,t.stride,t.offset+r),o.enableVertexAttribArray(i),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i,t.divisor);else if(9===t.count)for(let e=0;e<3;e++)o.vertexAttribPointer(i+e,3,t.type,t.normalized,t.stride,t.offset+12*e+r),o.enableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i+e,t.divisor);else if(16===t.count)for(let e=0;e<4;e++)o.vertexAttribPointer(i+e,4,t.type,t.normalized,t.stride,t.offset+16*e+r),o.enableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&s&&s.vertexAttribDivisor(i+e,t.divisor);else console.error("Unsupported vertex attribute element count: "+t.count)}},e.copyFramebufferToTexture=function(t,e,i,r,n=0){const o=t.getBoundFramebufferObject(),s=t.getBoundTexture(0);t.bindFramebuffer(e),t.bindTexture(i,0),t.gl.copyTexImage2D(t.gl.TEXTURE_2D,n,i.descriptor.pixelFormat,r[0],r[1],r[2],r[3],0),t.gl.flush(),t.bindFramebuffer(o),t.bindTexture(s,0)},e.findAttribute=function(t,e){for(let i=0;i<t.length;i++)if(t[i].name===e)return t[i];return null},e.getBytesPerElement=o,e.getBytesPerElementFormat=s,e.getGpuMemoryUsage=function t(e){if(r.isNone(e))return 0;if("colorAttachment"in e)return e.glName?t(e.colorAttachment)+t(e.depthStencilAttachment):0;if("descriptor"in e)return e.glName?t(e.descriptor):0;const i=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!i)return 0;const n="hasMipmap"in e&&e.hasMipmap?1.3:1,o=e.width*e.height;return s(i)*o*n},e.getStride=n,e.getTypedArrayConstructor=function(t){switch(t){case 5120:return Int8Array;case 5126:return Float32Array;case 5124:return Int32Array;case 5122:return Int16Array;case 5121:return Uint8Array;case 5125:return Uint32Array;case 5123:return Uint16Array;default:throw new Error("Unknown data type")}},e.hasAttribute=function(t,e){for(let i=0;i<t.length;i++)if(t[i].name===e)return!0;return!1},e.setBaseInstanceOffset=function(t,e){const i={};for(const r in t)i[r]=t[r].map((t=>t.divisor?{...t,baseInstance:e}:t));return i},e.unbindVertexBufferLayout=function(t,e,i,r){const n=t.gl,o=t.capabilities.instancing;t.bindBuffer(i);for(const t of r){const i=e[t.name];if(t.count<=4)n.disableVertexAttribArray(i),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i,0);else if(9===t.count)for(let e=0;e<3;e++)n.disableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i+e,0);else if(16===t.count)for(let e=0;e<4;e++)n.disableVertexAttribArray(i+e),t.divisor&&t.divisor>0&&o&&o.vertexAttribDivisor(i+e,0);else console.error("Unsupported vertex attribute element count: "+t.count)}t.unbindBuffer(34962)},e.vertexCount=function(t,e){return t.vertexBuffers[e].size/n(t.layout[e])},Object.defineProperty(t,"__esModule",{value:!0})}.apply(e,r))||(t.exports=n)},78328:(t,e,i)=>{var r,n;r=[i(58797),i(81184)],void 0===(n=function(t,e){"use strict";let i=function(){function i(t,e,i,n,o){this._context=t,this._locations=e,this._layout=i,this._buffers=n,this._indexBuffer=o,this._glName=null,this.id=r++,this._initialized=!1,t.instanceCounter.increment(2,this)}var n=i.prototype;return n.dispose=function(t=!0){if(!this._context)return;const e=this._context.capabilities.vao;if(e&&this._glName&&(e.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),t){for(const t in this._buffers)this._buffers[t].dispose(),delete this._buffers[t];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}this._context.instanceCounter.decrement(2,this),this._context=null},n.initialize=function(){if(this._initialized)return;const t=this._context.capabilities.vao;if(t){const e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e}this._initialized=!0},n.bind=function(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())},n._bindLayout=function(){const t=this._buffers,i=!!this._context.capabilities.vao,r=this._layout,n=this._indexBuffer;t||console.error("Vertex buffer dictionary is empty!");const o=this._context.gl;for(const i in t){const n=t[i];n||console.error("Vertex buffer is uninitialized!");const o=r[i];o||console.error("Vertex element descriptor is empty!"),e.bindVertexBufferLayout(this._context,this._locations,n,o)}n&&(i?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.glName):this._context.bindBuffer(n))},n.unbind=function(){this.initialize();const t=this._context.capabilities.vao;t?t.bindVertexArray(null):this._unbindLayout()},n._unbindLayout=function(){const t=this._buffers,i=this._layout;t||console.error("Vertex buffer dictionary is empty!");for(const r in t){const n=t[r];n||console.error("Vertex buffer is uninitialized!");const o=i[r];e.unbindVertexBufferLayout(this._context,this._locations,n,o)}const r=this._indexBuffer;r&&this._context.unbindBuffer(r.bufferType)},t._createClass(i,[{key:"glName",get:function(){return this._glName}},{key:"vertexBuffers",get:function(){return this._buffers}},{key:"indexBuffer",get:function(){return this._indexBuffer}},{key:"size",get:function(){return Object.keys(this._buffers).reduce(((t,e)=>t+this._buffers[e].size),this._indexBuffer?this._indexBuffer.size:0)}},{key:"layout",get:function(){return this._layout}},{key:"locations",get:function(){return this._locations}}]),i}(),r=0;return i}.apply(e,r))||(t.exports=n)},98582:(t,e,i)=>{var r;void 0===(r=function(){"use strict";return["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]}.call(e,i,e,t))||(t.exports=r)}}]);