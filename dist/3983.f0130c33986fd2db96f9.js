(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[3983],{23983:(e,r,t)=>{var a,i;a=[t(58797),t(11285),t(74637),t(3718),t(73462),t(67059),t(26475),t(59376),t(99752),t(25179),t(49359),t(4037),t(51916),t(88209),t(18377),t(9720),t(12997),t(40810),t(41654),t(95791),t(62008),t(64393),t(8336),t(23704),t(25548),t(87842),t(84550),t(52058),t(40162),t(93511),t(45095),t(74474),t(54016),t(28342),t(5989),t(50500),t(13371),t(26552)],void 0===(i=function(e,r,t,a,i,o,s,n,l,p,c,y,u,d,h,m,g,f,b,v,_,S,x,w,O,I,L,M,q,E,N,P,R,j,J,T,A,F){"use strict";let U=function(r){function t(...e){var t;return(t=r.call(this,...e)||this).alwaysRefetch=!1,t.dpi=96,t.gdbVersion=null,t.imageFormat="png24",t.imageMaxHeight=2048,t.imageMaxWidth=2048,t.imageTransparency=!0,t.labelsVisible=!1,t.isReference=null,t.operationalLayerType="ArcGISMapServiceLayer",t.sourceJSON=null,t.sublayers=null,t.type="map-image",t.url=null,t}e._inheritsLoose(t,r);var i=t.prototype;return i.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},i.load=function(e){const r=a.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(r)),(()=>this._fetchService(r)))),m.resolve(this)},i.readImageFormat=function(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"},i.writeSublayers=function(e,r,t,a){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=d.nameToId(a.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;o=T.shouldWriteSublayerStructure(i,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");o=T.shouldWriteSublayerStructure(i,e.sublayers,d.nameToId(e.origin))}}const s=[],n={writeSublayerStructure:o,...a};let l=o;i.forEach((e=>{const r=e.write({},n);s.push(r),l=l||"user"===e.originOf("visible")})),s.some((e=>Object.keys(e).length>1))&&(r.layers=s),l&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))},i.createExportImageParameters=function(e,r,t,a){const i=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const o=new F.ExportImageParameters({layer:this,scale:R.getScale({extent:e,width:r})*i}),s=o.toJSON();o.destroy();const n=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},l=e&&e.spatialReference,p=l.wkid||JSON.stringify(l.toJSON());s.dpi*=i;const c={};if(null!=a&&a.timeExtent){const{start:e,end:r}=a.timeExtent.toJSON();c.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:r+","+t,...s,...n,...c}},i.fetchImage=async function(e,r,t,a){const i={responseType:"image"};a&&a.timestamp&&(i.query={...i.query,_ts:a.timestamp}),a&&a.signal&&(i.signal=a.signal),this.customParameters&&Object.keys(this.customParameters).length&&(i.query={...this.customParameters,...i.query});const o=this.parsedUrl.path+"/export",s={...this.parsedUrl.query,...this.createExportImageParameters(e,r,t,a),f:"image",_ts:this.alwaysRefetch?Date.now():null};return null==s.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(i.query?i.query={...s,...i.query}:i.query=s,f(o,i).then((e=>e.data)).catch((e=>{if(m.isAbortError(e))throw e;throw new c("mapimagelayer:image-fetch-error",`Unable to load image: ${o}`,{error:e})}))):m.reject(new c("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:s}))},i.fetchRecomputedExtents=async function(e={}){const r={...e,query:{returnUpdates:!0,f:"json"}},{data:t}=await f(this.url,r),{extent:a,fullExtent:i,timeExtent:o}=t,s=a||i;return{fullExtent:s&&g.fromJSON(s),timeExtent:o&&_.fromJSON({start:o[0],end:o[1]})}},i.loadAll=function(){return b.loadAll(this,(e=>{e(this.allSublayers)}))},i._fetchService=async function(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})},t}(I.BlendLayer(N.TemporalLayer(E.ScaleRangeLayer(q.RefreshableLayer(A.SublayersOwner(j.ArcGISMapService(O.ArcGISService(w.OperationalLayer(M.PortalLayer(S.MultiOriginJSONMixin(L.CustomParametersMixin(P.HandleOwnerMixin(v)))))))))))));return r.__decorate([s.property()],U.prototype,"alwaysRefetch",void 0),r.__decorate([s.property()],U.prototype,"dpi",void 0),r.__decorate([s.property()],U.prototype,"gdbVersion",void 0),r.__decorate([s.property({json:{read:!1,write:!1}})],U.prototype,"popupEnabled",void 0),r.__decorate([s.property()],U.prototype,"imageFormat",void 0),r.__decorate([n.reader("imageFormat",["supportedImageFormatTypes"])],U.prototype,"readImageFormat",null),r.__decorate([s.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],U.prototype,"imageMaxHeight",void 0),r.__decorate([s.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],U.prototype,"imageMaxWidth",void 0),r.__decorate([s.property()],U.prototype,"imageTransparency",void 0),r.__decorate([s.property({json:{read:!1,write:!1}})],U.prototype,"labelsVisible",void 0),r.__decorate([s.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],U.prototype,"isReference",void 0),r.__decorate([s.property({type:["ArcGISMapServiceLayer"]})],U.prototype,"operationalLayerType",void 0),r.__decorate([s.property()],U.prototype,"sourceJSON",void 0),r.__decorate([s.property({json:{write:{ignoreOrigin:!0}}})],U.prototype,"sublayers",void 0),r.__decorate([p.writer("sublayers",{layers:{type:[J]},visibleLayers:{type:[o.Integer]}})],U.prototype,"writeSublayers",null),r.__decorate([s.property({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),r.__decorate([s.property({json:{read:!1},readOnly:!0,value:"map-image"})],U.prototype,"type",void 0),r.__decorate([s.property(x.url)],U.prototype,"url",void 0),U=r.__decorate([l.subclass("esri.layers.MapImageLayer")],U),U}.apply(r,a))||(e.exports=i)}}]);