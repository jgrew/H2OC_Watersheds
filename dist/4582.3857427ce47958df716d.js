(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[4582],{34582:(e,r,t)=>{var n,o;n=[r,t(36921),t(86484),t(739),t(27975),t(78328),t(39086),t(48188),t(41940),t(26411),t(98043),t(98663)],void 0===(o=function(e,t,n,o,a,s,i,c,f,p,u,l){"use strict";r.createContextOrErrorHTML=t.createContextOrErrorHTML,r.Program=n,r.BufferObject=o,r.Texture=a,r.VertexArrayObject=s,r.Renderbuffer=i,r.FramebufferObject=c,r.createProgram=f.createProgram,r.glslifyDefineMap=f.glslifyDefineMap,r.ProgramCache=p,r.RenderingContext=u,r.ShaderCompiler=l,Object.defineProperty(e,"__esModule",{value:!0})}.apply(r,n))||(e.exports=o)},26411:(e,r,t)=>{var n,o;n=[t(41940)],void 0===(o=function(e){"use strict";return function(){function r(e){this._programCacheByTemplate=new Map,this._rctx=e}var t=r.prototype;return t.dispose=function(){this._programCacheByTemplate.forEach((e=>{e.programs.forEach((e=>{e.dispose()}))})),this._programCacheByTemplate=null},t.getProgram=function(r,t){return this._programCacheByTemplate.has(r)||this.addProgramTemplate(r,(t=>e.createProgram(this._rctx,r,t))),this.getProgramTemplateInstance(r,t)},t.addProgramTemplate=function(e,r){this._programCacheByTemplate.set(e,{constructor:r,programs:new Map})},t.getProgramTemplateInstance=function(e,r){const t=this._programCacheByTemplate.get(e);if(t){const e=r?JSON.stringify(r):"default";if(!t.programs.has(e)){const n=t.constructor(r);t.programs.set(e,n)}return t.programs.get(e)}return null},r}()}.apply(r,n))||(e.exports=o)},98663:(e,r,t)=>{var n;void 0===(n=function(){"use strict";return function(){function e(e){this.readFile=e}var r=e.prototype;return r.resolveIncludes=function(e){return this.resolve(e)},r.resolve=function(e,r=new Map){if(r.has(e))return r.get(e);const t=this.read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let o=n.exec(t);const a=[];for(;null!=o;)a.push({path:o[1],start:o.index,length:o[0].length}),o=n.exec(t);let s=0,i="";return a.forEach((e=>{i+=t.slice(s,e.start),i+=r.has(e.path)?"":this.resolve(e.path,r),s=e.start+e.length})),i+=t.slice(s),r.set(e,i),i},r.read=function(e){return this.readFile(e)},e}()}.call(r,t,r,e))||(e.exports=n)},41940:(e,r,t)=>{var n,o;n=[r,t(86484)],void 0===(o=function(e,t){"use strict";r.createProgram=function(e,r,n,o){n=n||{},o=o||"";const a="function"==typeof r.shaders?r.shaders(n):r.shaders;return new t(e,o+a.vertexShader,o+a.fragmentShader,r.attributes)},r.glslifyDefineMap=function(e){let r="";for(const t in e){const n=e[t];if("boolean"==typeof n)n&&(r+=`#define ${t}\n`);else if("number"==typeof n)r+=`#define ${t} ${n.toFixed()}\n`;else if("object"==typeof n){const e=n.options;let o=0;for(const t in e)r+=`#define ${e[t]} ${(o++).toFixed()}\n`;r+=`#define ${t} ${e[n.value]}\n`}}return r},Object.defineProperty(e,"__esModule",{value:!0})}.apply(r,n))||(e.exports=o)}}]);