(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[2670],{32670:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(37578),r(3718),r(73462),r(67059),r(26475),r(59376),r(99752),r(4037),r(51916),r(18377),r(9720),r(63006),r(59981),r(40810),r(26530),r(54518),r(93741),r(40125),r(95791),r(64393),r(8336),r(23704),r(87842),r(52058),r(40162),r(93511)],void 0===(i=function(e,t,r,o,i,l,n,a,p,s,y,c,d,u,S,_,f,h,v,g,m,b,C,R,k,L,O,w,F){"use strict";const x=["atom","xml"],M={base:S,key:"type",typeMap:{"simple-line":_},errorContext:"symbol"},j={base:S,key:"type",typeMap:{"picture-marker":h,"simple-marker":g},errorContext:"symbol"},E={base:S,key:"type",typeMap:{"simple-fill":v},errorContext:"symbol"};let G=function(t){function r(...e){var r;return(r=t.call(this,...e)||this).description=null,r.legendEnabled=!0,r.lineSymbol=null,r.pointSymbol=null,r.polygonSymbol=null,r.operationalLayerType="GeoRSS",r.outSpatialReference=null,r.url=null,r.type="geo-rss",r}e._inheritsLoose(r,t);var l=r.prototype;return l.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},l.readFeatureCollections=function(e,t){return t.featureCollection.layers.forEach((e=>{const t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers},l.load=function(e){const t=i.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),u.resolve(this)},l._fetchService=async function(e){const{data:t}=await f(o.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e});this.read(t,{origin:"service"})},e._createClass(r,[{key:"title",get:function(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?y.getFilename(this.url,x)||"GeoRSS":e||""},set:function(e){this._set("title",e)}}]),r}(L.BlendLayer(w.RefreshableLayer(k.OperationalLayer(O.PortalLayer(F.ScaleRangeLayer(C.MultiOriginJSONMixin(b)))))));return t.__decorate([a.property()],G.prototype,"description",void 0),t.__decorate([a.property({dependsOn:["url"],json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],G.prototype,"title",null),t.__decorate([a.property()],G.prototype,"featureCollections",void 0),t.__decorate([p.reader("service","featureCollections",["featureCollection.layers"])],G.prototype,"readFeatureCollections",null),t.__decorate([a.property(R.legendEnabled)],G.prototype,"legendEnabled",void 0),t.__decorate([a.property({types:M,json:{write:!0}})],G.prototype,"lineSymbol",void 0),t.__decorate([a.property({type:["show","hide"]})],G.prototype,"listMode",void 0),t.__decorate([a.property({types:j,json:{write:!0}})],G.prototype,"pointSymbol",void 0),t.__decorate([a.property({types:E,json:{write:!0}})],G.prototype,"polygonSymbol",void 0),t.__decorate([a.property({type:["GeoRSS"]})],G.prototype,"operationalLayerType",void 0),t.__decorate([a.property()],G.prototype,"outSpatialReference",void 0),t.__decorate([a.property(R.url)],G.prototype,"url",void 0),t.__decorate([a.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],G.prototype,"type",void 0),G=t.__decorate([s.subclass("esri.layers.GeoRSSLayer")],G),G}.apply(t,o))||(e.exports=i)}}]);