(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[3194,4818,6412],{56847:(n,e,t)=>{var r,u;r=[e,t(9720),t(86003),t(7130),t(69269)],void 0===(u=function(n,t,r,u,a){"use strict";function o(n,e,o,c,s,l){if(1===c.length){if(r.isArray(c[0]))return t.resolve(u.calculateStat(n,c[0],r.defaultUndefined(c[1],-1)));if(r.isImmutableArray(c[0]))return t.resolve(u.calculateStat(n,c[0].toArray(),r.defaultUndefined(c[1],-1)))}else if(2===c.length){if(r.isArray(c[0]))return t.resolve(u.calculateStat(n,c[0],r.defaultUndefined(c[1],-1)));if(r.isImmutableArray(c[0]))return t.resolve(u.calculateStat(n,c[0].toArray(),r.defaultUndefined(c[1],-1)));if(r.isFeatureSet(c[0]))return c[0].load().then((t=>i(a.WhereClause.create(c[1],t.getFieldsIndex()),l,s).then((t=>c[0].calculateStatistic(n,t,r.defaultUndefined(c[2],1e3),e.abortSignal)))))}else if(3===c.length&&r.isFeatureSet(c[0]))return c[0].load().then((t=>i(a.WhereClause.create(c[1],t.getFieldsIndex()),l,s).then((t=>c[0].calculateStatistic(n,t,r.defaultUndefined(c[2],1e3),e.abortSignal)))));return t.resolve(u.calculateStat(n,c,-1))}function i(n,e,r){try{const u=n.getVariables();if(u.length>0){const a=[];for(let n=0;n<u.length;n++){const t={name:u[n]};a.push(e.evaluateIdentifier(r,t))}return t.all(a).then((e=>{const t={};for(let n=0;n<u.length;n++)t[u[n]]=e[n];return n.parameters=t,n}))}return t.resolve(n)}catch(n){return t.reject(n)}}e.registerFunctions=function(n){"async"===n.mode&&(n.functions.stdev=function(e,t){return n.standardFunctionAsync(e,t,(function(t,r,u){return o("stdev",t,0,u,e,n)}))},n.functions.variance=function(e,t){return n.standardFunctionAsync(e,t,(function(t,r,u){return o("variance",t,0,u,e,n)}))},n.functions.average=function(e,t){return n.standardFunctionAsync(e,t,(function(t,r,u){return o("mean",t,0,u,e,n)}))},n.functions.mean=function(e,t){return n.standardFunctionAsync(e,t,(function(t,r,u){return o("mean",t,0,u,e,n)}))},n.functions.sum=function(e,t){return n.standardFunctionAsync(e,t,(function(t,r,u){return o("sum",t,0,u,e,n)}))},n.functions.min=function(e,t){return n.standardFunctionAsync(e,t,(function(t,r,u){return o("min",t,0,u,e,n)}))},n.functions.max=function(e,t){return n.standardFunctionAsync(e,t,(function(t,r,u){return o("max",t,0,u,e,n)}))},n.functions.count=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if(r.pcCheck(t,1,1),r.isFeatureSet(t[0]))return t[0].count(n.abortSignal);if(r.isArray(t[0])||r.isString(t[0]))return t[0].length;if(r.isImmutableArray(t[0]))return t[0].length();throw new Error("Invalid Parameters for Count")}))})},Object.defineProperty(n,"__esModule",{value:!0})}.apply(e,r))||(n.exports=u)},14818:(n,e,t)=>{var r;void 0===(r=function(n){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{};function u(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}e.commonjsGlobal=r,e.commonjsRequire=u,e.createCommonjsModule=function(n,e,t){return n(t={path:e,exports:{},require:function(n,e){return u(null==e&&t.path)}},t.exports),t.exports},e.getDefaultExportFromCjs=function(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}}.apply(e,[e]))||(n.exports=r)}}]);