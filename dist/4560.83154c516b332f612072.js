(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[4560],{74560:(e,r,t)=>{var n,i;n=[t,r,t(37578),t(49359),t(25489),t(68548)],void 0===(i=function(e,n,i,o,l,a){"use strict";function c(e){return Object.freeze({__proto__:null,default:e})}async function u(e=null,r){if(i.geometryServiceUrl)return new(0,(await new Promise((function(e,r){t.e(6523).then((function(){var r=[t(96523)];(function(r){e(c(r))}).apply(null,r)})).catch(r.bind(this))}))).default)({url:i.geometryServiceUrl});if(!e)throw new o("internal:geometry-service-url-not-configured");let n;if(n="portal"in e?e.portal||l.getDefault():e,await n.load({signal:r}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url)return new(0,(await new Promise((function(e,r){t.e(6523).then((function(){var r=[t(96523)];(function(r){e(c(r))}).apply(null,r)})).catch(r.bind(this))}))).default)({url:n.helperServices.geometry.url});throw new o("internal:geometry-service-url-not-configured")}r.create=u,r.projectGeometry=async function(e,r,t=null,n){const i=await u(t,n),l=new a;l.geometries=[e],l.outSpatialReference=r;const c=await i.project(l,{signal:n});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new o("internal:geometry-service-projection-failed")},Object.defineProperty(n,"__esModule",{value:!0})}.apply(r,n))||(e.exports=i)}}]);