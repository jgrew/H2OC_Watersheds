(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[9042,9646],{89042:(e,t,r)=>{var i,o;i=[r(58797),r(11285),r(74637),r(92231),r(72885),r(73462),r(67059),r(26475),r(59376),r(99752),r(25179),r(49359),r(4037),r(51916),r(18377),r(9720),r(12997),r(82438),r(40810),r(75416),r(95791),r(64393),r(23704),r(87842),r(52058),r(40162),r(93511),r(72146),r(6755),r(49646),r(8479),r(24972)],void 0===(o=function(e,t,r,i,o,l,s,a,n,p,u,c,d,y,m,f,h,g,v,_,w,x,S,T,I,M,L,b,O,P,E,R){"use strict";const U={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},C=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let F=function(t){function r(...r){var i;return(i=t.call(this,...r)||this)._sublayersHandles=new _,i.copyright="",i.customParameters=null,i.customLayerParameters=null,i.fullExtent=null,i.operationalLayerType="WebTiledLayer",i.resourceInfo=null,i.serviceMode="RESTful",i.sublayers=null,i.type="wmts",i.version="1.0.0",i.watch("activeLayer",((t,r)=>{r&&(r.layer=null),t&&(t.layer=e._assertThisInitialized(i))}),!0),i.watch("sublayers",((t,r)=>{r&&(r.forEach((e=>{e.layer=null})),i._sublayersHandles.removeAll(),i._sublayersHandles=null),t&&(t.forEach((t=>{t.layer=e._assertThisInitialized(i)})),i._sublayersHandles||(i._sublayersHandles=new _),i._sublayersHandles.add([t.on("after-add",(({item:t})=>{t.layer=e._assertThisInitialized(i)})),t.on("after-remove",(({item:e})=>{e.layer=null}))]))}),!0),i}e._inheritsLoose(r,t);var l=r.prototype;return l.normalizeCtorArgs=function(e,t){return"string"==typeof e?{url:e,...t}:e},l.load=function(e){if("KVP"===this.serviceMode||"RESTful"===this.serviceMode)return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>this._fetchService(e))).catch((e=>{throw new c("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),f.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")},l.readActiveLayerFromService=function(e,t,r){let i;return this.activeLayer?t.layers.some((e=>e.id===this.activeLayer.id&&(i=e,!0))):(this.activeLayer=new E,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer},l.readActiveLayerFromItemOrWebDoc=function(e,t){const{templateUrl:r,wmtsInfo:i}=t,o=r?this._getLowerCasedUrlParams(r):null,l=i&&i.layerIdentifier;let s=null;const a=i&&i.tileMatrixSet;a&&(Array.isArray(a)?a.length&&(s=a[0]):s=a);const n=o&&o.format,p=o&&o.style;return new E({id:l,imageFormat:n,styleId:p,tileMatrixSetId:s})},l.writeActiveLayer=function(e,t,r,i){const l=this.activeLayer;t.templateUrl=this.getUrlTemplate(l.id,l.tileMatrixSetId,l.imageFormat,l.styleId);const s=o.getDeepValue("tileMatrixSet.tileInfo",l);t.tileInfo=s?s.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:l.id,tileMatrixSet:l.tileMatrixSetId}},l.readCustomParameters=function(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null},l.readServiceMode=function(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"},l.readSublayersFromService=function(e,t,r){return function(e,t){return e.map((e=>{const r=new E;return r.read(e,t),r}))}(t.layers,r)},l.createWebTileLayer=function(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId).tileInfo,i=e.fullExtent,o=new O.default({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new P({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:o})},l.fetchTile=function(e,t,r){const i=this.getTileUrl(e,t,r);return v(i,{responseType:"image"}).then((e=>e.data))},l.findSublayerById=function(e){return this.sublayers.find((t=>t.id===e))},l.getTileUrl=function(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId).tileInfo.lods[e],o=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let l=this.resourceInfo?"":R.getTileUrlFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,o).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l},l.getUrlTemplate=function(e,t,r,i){if(!this.resourceInfo){const r=R.getTileUrlTemplateFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let o="";return U[r.toLowerCase()]&&(o=U[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+o}return""},l._fetchService=async function(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),this.serviceMode=r}catch(e){throw new c("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=R.parseResourceInfo(t.data):t.data=R.parseCapabilities(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})},l._getCapabilities=async function(e,t){const r=this._getCapabilitiesUrl(e);return await v(r,{...t,responseType:"text"})},l._getTileMatrixSetById=function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find((t=>t.id===e))},l._appendCustomParameters=function(e){if(this.customParameters)for(const t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e},l._appendCustomLayerParameters=function(e){if(this.customLayerParameters||this.customParameters){const t={...i.clone(this.customParameters||{}),...this.customLayerParameters};for(const r in t)e+=(-1===e.indexOf("?")?"?":"&")+r+"="+encodeURIComponent(t[r])}return e},l._getCapabilitiesUrl=function(e){let t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t),t},l._getLowerCasedUrlParams=function(e){if(!e)return null;const t=d.urlToObject(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r},l._mergeParams=function(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?i.clone(e):{},t.forEach((t=>{e.hasOwnProperty(t)||C.has(t)||(e[t]=r[t])})))}return e},e._createClass(r,[{key:"activeLayer",get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)}},{key:"fullExtents",get:function(){const e=[];return this.activeLayer.tileMatrixSets.forEach((t=>{t.fullExtent&&e.push(t.fullExtent)})),e}},{key:"supportedSpatialReferences",get:function(){return this.activeLayer.tileMatrixSets.map((e=>e.tileInfo.spatialReference)).toArray()}},{key:"title",get:function(){var e,t;return null!=(e=null==(t=this.activeLayer)?void 0:t.title)?e:"Layer"},set:function(e){e?this._override("title",e):this._clearOverride("title")}},{key:"url",get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}}]),r}(T.BlendLayer(M.RefreshableLayer(L.ScaleRangeLayer(S.OperationalLayer(I.PortalLayer(x.MultiOriginJSONMixin(w)))))));return t.__decorate([a.property()],F.prototype,"dimensionMap",void 0),t.__decorate([a.property()],F.prototype,"layerMap",void 0),t.__decorate([a.property({type:E,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],F.prototype,"activeLayer",null),t.__decorate([n.reader("service","activeLayer",["layers"])],F.prototype,"readActiveLayerFromService",null),t.__decorate([n.reader(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],F.prototype,"readActiveLayerFromItemOrWebDoc",null),t.__decorate([u.writer(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:b},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],F.prototype,"writeActiveLayer",null),t.__decorate([a.property({type:String,value:"",json:{write:!0}})],F.prototype,"copyright",void 0),t.__decorate([a.property({type:["show","hide"]})],F.prototype,"listMode",void 0),t.__decorate([a.property({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],F.prototype,"customParameters",void 0),t.__decorate([n.reader("web-document","customParameters"),n.reader("portal-item","customParameters")],F.prototype,"readCustomParameters",null),t.__decorate([a.property({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],F.prototype,"customLayerParameters",void 0),t.__decorate([a.property({type:h,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],F.prototype,"fullExtent",void 0),t.__decorate([a.property({readOnly:!0,dependsOn:["activeLayer"]})],F.prototype,"fullExtents",null),t.__decorate([a.property({type:["WebTiledLayer"]})],F.prototype,"operationalLayerType",void 0),t.__decorate([a.property()],F.prototype,"resourceInfo",void 0),t.__decorate([a.property()],F.prototype,"serviceMode",void 0),t.__decorate([n.reader(["portal-item","web-document"],"serviceMode",["templateUrl"])],F.prototype,"readServiceMode",null),t.__decorate([a.property({type:g.ofType(E)})],F.prototype,"sublayers",void 0),t.__decorate([n.reader("service","sublayers",["layers"])],F.prototype,"readSublayersFromService",null),t.__decorate([a.property({readOnly:!0,dependsOn:["activeLayer"]})],F.prototype,"supportedSpatialReferences",null),t.__decorate([a.property({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],F.prototype,"title",null),t.__decorate([a.property({json:{read:!1},readOnly:!0,value:"wmts"})],F.prototype,"type",void 0),t.__decorate([a.property({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],F.prototype,"url",null),t.__decorate([a.property()],F.prototype,"version",void 0),F=t.__decorate([p.subclass("esri.layers.WMTSLayer")],F),F}.apply(t,i))||(e.exports=o)},49646:(e,t,r)=>{var i,o;i=[r(58797),r(11285),r(74637),r(92231),r(73227),r(73462),r(67059),r(26475),r(59376),r(99752),r(25179),r(49359),r(4037),r(51916),r(18377),r(9720),r(23084),r(35558),r(12997),r(26016),r(40810),r(95791),r(64393),r(23704),r(87842),r(52058),r(40162),r(93511),r(36368),r(72146),r(6755)],void 0===(o=function(e,t,r,i,o,l,s,a,n,p,u,c,d,y,m,f,h,g,v,_,w,x,S,T,I,M,L,b,O,P,E){"use strict";let R=function(t){function r(...e){var r;return(r=t.call(this,...e)||this).copyright="",r.fullExtent=new v(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,h.WebMercator),r.legendEnabled=!1,r.isReference=null,r.popupEnabled=!1,r.spatialReference=h.WebMercator,r.subDomains=null,r.tileInfo=new P({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new g({x:-20037508.342787,y:20037508.342787,spatialReference:h.WebMercator}),spatialReference:h.WebMercator,lods:[new O({level:0,scale:591657527.591555,resolution:156543.033928}),new O({level:1,scale:295828763.795777,resolution:78271.5169639999}),new O({level:2,scale:147914381.897889,resolution:39135.7584820001}),new O({level:3,scale:73957190.948944,resolution:19567.8792409999}),new O({level:4,scale:36978595.474472,resolution:9783.93962049996}),new O({level:5,scale:18489297.737236,resolution:4891.96981024998}),new O({level:6,scale:9244648.868618,resolution:2445.98490512499}),new O({level:7,scale:4622324.434309,resolution:1222.99245256249}),new O({level:8,scale:2311162.217155,resolution:611.49622628138}),new O({level:9,scale:1155581.108577,resolution:305.748113140558}),new O({level:10,scale:577790.554289,resolution:152.874056570411}),new O({level:11,scale:288895.277144,resolution:76.4370282850732}),new O({level:12,scale:144447.638572,resolution:38.2185141425366}),new O({level:13,scale:72223.819286,resolution:19.1092570712683}),new O({level:14,scale:36111.909643,resolution:9.55462853563415}),new O({level:15,scale:18055.954822,resolution:4.77731426794937}),new O({level:16,scale:9027.977411,resolution:2.38865713397468}),new O({level:17,scale:4513.988705,resolution:1.19432856685505}),new O({level:18,scale:2256.994353,resolution:.597164283559817}),new O({level:19,scale:1128.497176,resolution:.298582141647617})]}),r.type="web-tile",r.urlTemplate=null,r.wmtsInfo=null,r}e._inheritsLoose(r,t);var l=r.prototype;return l.normalizeCtorArgs=function(e,t){return"string"==typeof e?i.mixin({urlTemplate:e},t||{}):e},l.load=function(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new d.Url(this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new c("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),f.resolve(this)},l.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&h.fromJSON(t.fullExtent.spatialReference)},l.readUrlTemplate=function(e,t){return e||t.templateUrl},l.writeUrlTemplate=function(e,t){e&&d.isProtocolRelative(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=d.normalize(e)),t.templateUrl=e},l.fetchTile=function(e,t,r,i={}){const{signal:o,timestamp:l}=i,s=this.getTileUrl(e,t,r),a={responseType:"image",signal:o};return null!=l&&(a.query={_ts:i.timestamp}),w(s,a).then((e=>e.data))},l.getTileUrl=function(e,t,r){const i=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+o.replace(this.urlPath,{level:i,z:i,col:r,x:r,row:t,y:t})},e._createClass(r,[{key:"levelValues",get:function(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new d.Url(t),o=i.scheme?i.scheme+"://":"//",l=o+i.authority+"/";if(-1===i.authority.indexOf("{subDomain}"))e.push(l);else if(r&&r.length>0&&i.authority.split(".").length>1)for(const t of r)e.push(o+i.authority.replace(/\{subDomain\}/gi,t)+"/");return e.map((e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e)))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new d.Url(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}}]),r}(I.BlendLayer(L.RefreshableLayer(b.ScaleRangeLayer(T.OperationalLayer(M.PortalLayer(S.MultiOriginJSONMixin(x)))))));return t.__decorate([a.property({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),t.__decorate([a.property({type:v,json:{write:!0}})],R.prototype,"fullExtent",void 0),t.__decorate([a.property({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),t.__decorate([a.property({type:["show","hide"]})],R.prototype,"listMode",void 0),t.__decorate([a.property({dependsOn:["tileInfo"]})],R.prototype,"levelValues",null),t.__decorate([a.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),t.__decorate([a.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),t.__decorate([a.property({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),t.__decorate([a.property({type:h})],R.prototype,"spatialReference",void 0),t.__decorate([n.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),t.__decorate([a.property({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),t.__decorate([a.property({type:P,json:{write:!0}})],R.prototype,"tileInfo",void 0),t.__decorate([a.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],R.prototype,"tileServers",null),t.__decorate([a.property({json:{read:!1}})],R.prototype,"type",void 0),t.__decorate([a.property({dependsOn:["urlTemplate"]})],R.prototype,"urlPath",null),t.__decorate([a.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),t.__decorate([n.reader("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),t.__decorate([u.writer("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),t.__decorate([a.property({type:E.default,json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=t.__decorate([p.subclass("esri.layers.WebTileLayer")],R),R}.apply(t,i))||(e.exports=o)},27930:(e,t,r)=>{var i,o;i=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162),r(12997),r(72146)],void 0===(o=function(e,t,r,i,o,l,s,a,n,p,u,c,d){"use strict";var y;let m=y=function(t){function r(e){var r;return(r=t.call(this,e)||this).fullExtent=null,r.id=null,r.tileInfo=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){const e=new y;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e},r}(u.JSONSupport);return t.__decorate([l.property({type:c,json:{read:{source:"fullExtent"}}})],m.prototype,"fullExtent",void 0),t.__decorate([l.property({type:String,json:{read:{source:"id"}}})],m.prototype,"id",void 0),t.__decorate([l.property({type:d,json:{read:{source:"tileInfo"}}})],m.prototype,"tileInfo",void 0),m=y=t.__decorate([s.subclass("esri.layer.support.TileMatrixSet")],m),m}.apply(t,i))||(e.exports=o)},6755:(e,t,r)=>{var i,o;i=[t,r(58797),r(11285),r(74637),r(92231),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162)],void 0===(o=function(e,r,i,o,l,s,a,n,p,u,c,d,y){"use strict";var m;t.WMTSLayerInfo=m=function(e){function t(t){return e.call(this,t)||this}return r._inheritsLoose(t,e),t.prototype.clone=function(){return new m({customLayerParameters:l.clone(this.customLayerParameters),customParameters:l.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})},t}(y.JSONSupport),i.__decorate([n.property({json:{type:Object,write:!0}})],e.WMTSLayerInfo.prototype,"customLayerParameters",void 0),i.__decorate([n.property({json:{type:Object,write:!0}})],e.WMTSLayerInfo.prototype,"customParameters",void 0),i.__decorate([n.property({type:String,json:{write:!0}})],e.WMTSLayerInfo.prototype,"layerIdentifier",void 0),i.__decorate([n.property({type:String,json:{write:!0}})],e.WMTSLayerInfo.prototype,"tileMatrixSet",void 0),i.__decorate([n.property({type:String,json:{write:!0}})],e.WMTSLayerInfo.prototype,"url",void 0),t.WMTSLayerInfo=m=i.__decorate([p.subclass("esri.layer.support.WMTSLayerInfo")],e.WMTSLayerInfo);var f=e.WMTSLayerInfo;t.default=f,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,i))||(e.exports=o)},11752:(e,t,r)=>{var i,o;i=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162)],void 0===(o=function(e,t,r,i,o,l,s,a,n,p,u){"use strict";var c;let d=c=function(t){function r(e){var r;return(r=t.call(this,e)||this).id=null,r.title=null,r.description=null,r.legendUrl=null,r}return e._inheritsLoose(r,t),r.prototype.clone=function(){const e=new c;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e},r}(u.JSONSupport);return t.__decorate([l.property({json:{read:{source:"id"}}})],d.prototype,"id",void 0),t.__decorate([l.property({json:{read:{source:"title"}}})],d.prototype,"title",void 0),t.__decorate([l.property({json:{read:{source:"abstract"}}})],d.prototype,"description",void 0),t.__decorate([l.property({json:{read:{source:"legendUrl"}}})],d.prototype,"legendUrl",void 0),t.__decorate([l.property({json:{read:{source:"isDefault"}}})],d.prototype,"isDefault",void 0),t.__decorate([l.property({json:{read:{source:"keywords"}}})],d.prototype,"keywords",void 0),d=c=t.__decorate([s.subclass("esri.layer.support.WMTSStyle")],d),d}.apply(t,i))||(e.exports=o)},8479:(e,t,r)=>{var i,o;i=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(59376),r(99752),r(4037),r(51916),r(18377),r(56162),r(12997),r(82438),r(27930),r(11752)],void 0===(o=function(e,t,r,i,o,l,s,a,n,p,u,c,d,y,m,f){"use strict";var h;let g=h=function(t){function r(e){var r;return(r=t.call(this,e)||this).fullExtent=null,r.imageFormats=null,r.id=null,r.layer=null,r.styles=null,r.tileMatrixSetId=null,r.tileMatrixSets=null,r}e._inheritsLoose(r,t);var i=r.prototype;return i.readFullExtent=function(e,t){return(e=t.fullExtent)?d.fromJSON(e):null},i.clone=function(){const e=new h;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e},e._createClass(r,[{key:"description",get:function(){return this._get("description")},set:function(e){this._set("description",e)}},{key:"imageFormat",get:function(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e},set:function(e){const t=this.imageFormats;e&&(e.indexOf("image/")>-1||t&&-1===t.indexOf(e))&&(-1===e.indexOf("image/")&&(e="image/"+e),t&&-1===t.indexOf(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}},{key:"styleId",get:function(){let e=this._get("styleId");return e||(e=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),e},set:function(e){this._set("styleId",e)}},{key:"title",get:function(){return this._get("title")},set:function(e){this._set("title",e)}},{key:"tileMatrixSet",get:function(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}}]),r}(c.JSONSupport);return t.__decorate([l.property()],g.prototype,"description",null),t.__decorate([l.property()],g.prototype,"fullExtent",void 0),t.__decorate([s.reader("fullExtent",["fullExtent"])],g.prototype,"readFullExtent",null),t.__decorate([l.property({dependsOn:["imageFormats"]})],g.prototype,"imageFormat",null),t.__decorate([l.property({json:{read:{source:"formats"}}})],g.prototype,"imageFormats",void 0),t.__decorate([l.property()],g.prototype,"id",void 0),t.__decorate([l.property()],g.prototype,"layer",void 0),t.__decorate([l.property({dependsOn:["styles"]})],g.prototype,"styleId",null),t.__decorate([l.property({type:y.ofType(f),json:{read:{source:"styles"}}})],g.prototype,"styles",void 0),t.__decorate([l.property({value:null,json:{write:{ignoreOrigin:!0}}})],g.prototype,"title",null),t.__decorate([l.property()],g.prototype,"tileMatrixSetId",void 0),t.__decorate([l.property({readOnly:!0,dependsOn:["tileMatrixSetId"]})],g.prototype,"tileMatrixSet",null),t.__decorate([l.property({type:y.ofType(m),json:{read:{source:"tileMatrixSets"}}})],g.prototype,"tileMatrixSets",void 0),g=h=t.__decorate([a.subclass("esri.layers.support.WMTSSublayer")],g),g}.apply(t,i))||(e.exports=o)},24972:(e,t,r)=>{var i,o;i=[t,r(49359),r(25710),r(23084),r(35558),r(12997),r(25944),r(72146)],void 0===(o=function(e,r,i,o,l,s,a,n){"use strict";const p=90.71428571428571,u=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function c(e,t){const r=t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function d(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map((e=>e.textContent))}function y(e,t){return e.split(">").forEach((e=>{t&&(t=c(e,t))})),t&&t.textContent}function m(e,t,r,i){let o;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.indexOf(e)>-1){const e=c(t,i),l=e&&e.textContent;if(l===r||r.split(":")&&r.split(":")[1]===l)return o=i,!0}return!1})),o}function f(e,t){const r=[],i=e.layerMap.get(t);if(!i)return;const o=Array.prototype.slice.call(i.getElementsByTagName("ResourceURL")),l=i.getElementsByTagName("Dimension");let s,a,n,p;return l.length&&(s=y("Identifier",l[0]),a=d("Default",l[0])||d("Value",l[0])),l.length>1&&(n=y("Identifier",l[1]),p=d("Default",l[1])||d("Value",l[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:p}),o.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(s&&a.length)if(t.indexOf("{"+s+"}")>-1)t=t.replace("{"+s+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+s.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+s.length+2))}if(n&&p.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+n.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function h(e,t,r,i){const o=y("Identifier",e),l=y("ScaleDenominator",e).split("E").map((e=>Number(e)));let s;s=l.length>1?l[0]*Math.pow(10,l[1]):l[0];const a=g(t,s,i);return s*=96/p,{level:r,levelValue:o,scale:s,resolution:a}}function g(e,t,r){let o;return o=i.hasOwnProperty(String(e))?i.values[i[e]]:"default028mm"===r?6370997*Math.PI/180:a.getReferenceEllipsoidFromWKID(e).metersPerDegree,7*t/25e3/o}t.getTileUrlFromResourceUrls=function(e,t,r,i,o,l,s,a){const{dimensionMap:n}=e,p=f(e,t),u=n.get(t).dimensions&&n.get(t).dimensions[0],c=n.get(t).dimensions2&&n.get(t).dimensions2[0];let d="";if(p&&p.length>0){let e=null;p.some((t=>t.format===i&&(e=t,!0))),e||(e=p[s%p.length]),d=e.template.replace(/\{Style\}/gi,o).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+s).replace(/\{TileCol\}/gi,""+a).replace(/\{dimensionValue\}/gi,u).replace(/\{dimensionValue2\}/gi,c)}return d},t.getTileUrlTemplateFromResourceUrls=function(e,t,r,i){const{dimensionMap:o}=e,l=f(e,t);let s="";if(l&&l.length>0){const e=o.get(t).dimensions&&o.get(t).dimensions[0],a=o.get(t).dimensions2&&o.get(t).dimensions2[0];s=l[0].template,s.indexOf(".xxx")===s.length-4&&(s=s.slice(0,s.length-4)),s=s.replace(/\{Style\}/gi,i),s=s.replace(/\{TileMatrixSet\}/gi,r),s=s.replace(/\{TileMatrix\}/gi,"{level}"),s=s.replace(/\{TileRow\}/gi,"{row}"),s=s.replace(/\{TileCol\}/gi,"{col}"),s=s.replace(/\{dimensionValue\}/gi,e),s=s.replace(/\{dimensionValue2\}/gi,a)}return s},t.parseCapabilities=function(e,t){e=e.replace(/ows:/gi,"");const i=(new DOMParser).parseFromString(e,"text/xml").documentElement,a=new Map,p=new Map,f=c("Contents",i);if(!f)throw new r("wmtslayer:wmts-capabilities-xml-is-not-valid");const g=c("OperationsMetadata",i),v=g&&g.querySelector("[name='GetTile']"),_=v&&v.getElementsByTagName("Get"),w=_&&Array.prototype.slice.call(_),x=t&&t.url&&t.url.indexOf("https")>-1;let S,T,I=t.serviceMode,M=t&&t.url;if(w&&w.length&&w.some((e=>{const t=c("Constraint",e);return!t||m("AllowedValues","Value",I,t)?(M=e.attributes[0].nodeValue,!0):(!t||m("AllowedValues","Value","RESTful",t)||m("AllowedValues","Value","REST",t)?T=e.attributes[0].nodeValue:t&&!m("AllowedValues","Value","KVP",t)||(S=e.attributes[0].nodeValue),!1)})),!M)if(T)M=T,I="RESTful";else if(S)M=S,I="KVP";else{const e=c("ServiceMetadataURL",i);M=e&&e.getAttribute("xlink:href")}const L=M.indexOf("1.0.0/");return-1===L&&"RESTful"===I?M+="/":L>-1&&(M=M.substring(0,L)),"KVP"===I&&(M+=L>-1?"":"?"),x&&(M=M.replace(/^http:/i,"https:")),{copyright:y("ServiceIdentification>AccessConstraints",i),layers:Array.prototype.slice.call(f.getElementsByTagName("Layer")).map((e=>{const t=y("Identifier",e);return a.set(t,e),function(e,t,r,i){const a=y("Abstract",t),p=d("Format",t),f=function(e){const t=c("WGS84BoundingBox",e),r=t?y("LowerCorner",t).split(" "):["-180","-90"],i=t?y("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}(t),g=function(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map((e=>{const r=c("LegendURL",e),i=c("Keywords",e),o=i&&d("Keyword",i);let l=r&&r.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:y("Abstract",e),id:y("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:o,legendUrl:l,title:y("Title",e)}}))}(t,i),v=y("Title",t),_=function(e,t){return d("TileMatrixSet",e).map((r=>function(e,t,r){const i=d("TileMatrix",m("TileMatrixSetLink","TileMatrixSet",e,t)),a=m("TileMatrixSet","Identifier",e,r),p=function(e){let t=y("SupportedCRS",e);t&&(t=t.toLowerCase());let r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);let i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);const s=new o({wkid:r}),a=y("TopLeftCorner",c("TileMatrix",e)).split(" "),n=a[0].split("E").map((e=>Number(e))),p=a[1].split("E").map((e=>Number(e)));let d,m=n[0],f=p[0];n.length>1&&(m=n[0]*Math.pow(10,n[1])),p.length>1&&(f=p[0]*Math.pow(10,p[1]));const h=i&&4326===r&&90===m&&-180===f;return u.some(((e,o)=>{const a=Number(t.split(":").pop());return a>=e[0]&&a<=e[1]||4326===r&&(!i||h)?(d=new l(f,m,s),!0):(o===u.length-1&&(d=new l(m,f,s)),!1)})),d}(a),f=p.spatialReference,g=f.wkid,v=c("TileMatrix",a),_=[parseInt(y("TileWidth",v),10),parseInt(y("TileHeight",v),10)],w=[];i.length?i.forEach(((t,r)=>{const i=m("TileMatrix","Identifier",t,a);w.push(h(i,g,r,e))})):Array.prototype.slice.call(a.getElementsByTagName("TileMatrix")).forEach(((t,r)=>{w.push(h(t,g,r,e))}));const x=function(e,t,r,i){const o=c("BoundingBox",e);let l,a,n,p,u,d;if(o&&(l=y("LowerCorner",o).split(" "),a=y("UpperCorner",o).split(" ")),l&&l.length>1&&a&&a.length>1)n=parseFloat(l[0]),u=parseFloat(l[1]),p=parseFloat(a[0]),d=parseFloat(a[1]);else{const o=c("TileMatrix",e),l=parseFloat(y("MatrixWidth",o)),s=parseFloat(y("MatrixHeight",o));n=t.x,d=t.y,p=n+l*r[0]*i.resolution,u=d-s*r[1]*i.resolution}return new s(n,u,p,d,t.spatialReference)}(a,p,_,w[0]);return{id:e,fullExtent:x.toJSON(),tileInfo:new n({dpi:96,spatialReference:f,size:_,origin:p,lods:w}).toJSON()}}(r,e,t)))}(t,r);return{id:e,fullExtent:f,description:a,formats:p,styles:g,title:v,tileMatrixSets:_}}(t,e,f,x)})),tileUrl:M,serviceMode:I,layerMap:a,dimensionMap:p}},t.parseResourceInfo=function(e){return e.layers.forEach((e=>{e.tileMatrixSets.forEach((e=>{const t=e.tileInfo;96!==t.dpi&&(t.lods.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=g(t.spatialReference.wkid,r.scale*p/96,e.id)})),t.dpi=96)}))})),e},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,i))||(e.exports=o)}}]);