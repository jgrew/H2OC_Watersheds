(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[4953],{74953:(e,t,r)=>{var a,o;a=[t,r(3718),r(49359),r(4037),r(40810)],void 0===(o=function(e,r,a,o,s){"use strict";function n(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function i(e){const[t,a]=function(e){const t=o.getPathExtension(e);return r.isNone(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[s,i]=n(t);return[s,i,a]}async function c(e){return e instanceof Blob?e:(await s(e.url,{responseType:"blob"})).data}t.addOrUpdateResource=async function(e,t,s,i){if(!e.hasPath())throw new a(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(i);const l=o.join(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[u,p]=n(e.path),d=await c(s),h=new FormData;return u&&"."!==u&&h.append("resourcesPrefix",u),h.append("fileName",p),h.append("file",d,p),h.append("f","json"),r.isSome(i)&&i.access&&h.append("access",i.access),await e.portalItem.portal._request(l,{method:"post",body:h,signal:r.get(i,"signal")}),e},t.contentToBlob=c,t.fetchResources=async function(e,t={},a){await e.load(a);const s=o.join(e.itemUrl,"resources"),{start:n=1,num:i=10,sortOrder:c="asc",sortField:l="created"}=t,u={query:{start:n,num:i,sortOrder:c,sortField:l},signal:r.get(a,"signal")},p=await e.portal._request(s,u);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}},t.getSiblingOfSameType=function(e,t){if(!e.hasPath())return null;const[r,,a]=i(e.path);return e.portalItem.resourceFromPath(o.join(r,t+a))},t.getSiblingOfSameTypeI=function(e,t){if(!e.hasPath())return null;const[r,,a]=i(e.path);return e.portalItem.resourceFromPath(o.join(r,t+a))},t.removeAllResources=async function(e,t){await e.load(t);const a=o.join(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:r.get(t,"signal")})},t.removeResource=async function(e,t,s){if(!t.hasPath())throw new a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(s);const n=o.join(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:r.get(s,"signal")}),t.portalItem=null},t.splitPrefixFileNameAndExtension=i,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,a))||(e.exports=o)}}]);