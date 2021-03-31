(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[9887],{49887:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(92231),r(3718),r(73462),r(67059),r(26475),r(59376),r(99752),r(49359),r(4037),r(51916),r(18377),r(9720),r(23084),r(12997),r(82438),r(41654),r(24189),r(95791),r(64393),r(8336),r(23704),r(25548),r(52058),r(93511),r(85138),r(6218),r(17469),r(26880),r(87803),r(56802)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c,f,h,v,_,g,m,b,S,w,O,I,F,L,x,j,T,A,P,B){"use strict";const E=s.getLogger("esri.layers.BuildingSceneLayer"),M=_.ofType(A),N=o.clone(j.sublayersProperty);N.json.origins["web-scene"]={type:[x],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},N.json.origins["portal-item"]={type:[x],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let R=function(t){function r(r){var o;return(o=t.call(this,r)||this).operationalLayerType="BuildingSceneLayer",o.allSublayers=new m({root:e._assertThisInitialized(o),rootCollectionNames:["sublayers"],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),o.sublayers=null,o.sublayerOverrides=null,o.filters=new M,o.activeFilterId=null,o.summaryStatistics=null,o.outFields=null,o.type="building-scene",o}e._inheritsLoose(r,t);var s=r.prototype;return s.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},s.destroy=function(){this.allSublayers.destroy()},s.readSublayers=function(e,t,r){const o=j.readSublayers(e,t,r);return j.forEachSublayer(o,(e=>e.layer=this)),this.sublayerOverrides&&(this.applySublayerOverrides(o,this.sublayerOverrides),this.sublayerOverrides=null),o},s.applySublayerOverrides=function(e,{overrides:t,context:r}){j.forEachSublayer(e,(e=>e.read(t.get(e.id),r)))},s.readSublayerOverrides=function(e,t){const r=new Map;for(const o of e)null!=o&&"object"==typeof o&&"number"==typeof o.id?r.set(o.id,o):t.messages.push(new u("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:o}));return{overrides:r,context:t}},s.writeSublayerOverrides=function(e,t,r){const o=[];j.forEachSublayer(this.sublayers,(e=>{const t=e.write({},r);Object.keys(t).length>1&&o.push(t)})),o.length>0&&(t.sublayers=o)},s.writeUnappliedOverrides=function(e,t){t.sublayers=[],e.overrides.forEach((e=>{t.sublayers.push(o.clone(e))}))},s.write=function(e,r){return e=t.prototype.write.call(this,e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e},s.read=function(e,r){if(t.prototype.read.call(this,e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}},s.readSummaryStatistics=function(e,t){if("string"==typeof t.statisticsHRef){const e=d.join(this.parsedUrl.path,t.statisticsHRef);return new P({url:e})}return null},s.load=function(e){const t=i.isSome(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch((()=>{})).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),f.resolve(this)},s.loadAll=function(){return g.loadAll(this,(e=>{j.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))},s.saveAs=async function(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)},s.save=async function(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(0,e)},s.validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new u("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},s._getTypeKeywords=function(){return["Building"]},s._validateElevationInfo=function(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&E.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&E.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},s._fetchAssociatedFeatureService=async function(e){const t=new B.FetchAssociatedFeatureLayer(this.parsedUrl,this.portalItem,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(e){E.warn("Associated feature service item could not be loaded",e)}},e._createClass(r,[{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}}]),r}(T.SceneService(I.ArcGISService(O.OperationalLayer(F.PortalLayer(L.ScaleRangeLayer(S.MultiOriginJSONMixin(b)))))));return t.__decorate([a.property({type:["BuildingSceneLayer"]})],R.prototype,"operationalLayerType",void 0),t.__decorate([a.property({readOnly:!0})],R.prototype,"allSublayers",void 0),t.__decorate([a.property(N)],R.prototype,"sublayers",void 0),t.__decorate([p.reader("service","sublayers")],R.prototype,"readSublayers",null),t.__decorate([a.property({type:M,nonNullable:!0,json:{write:!0}})],R.prototype,"filters",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],R.prototype,"activeFilterId",void 0),t.__decorate([a.property({readOnly:!0,type:P})],R.prototype,"summaryStatistics",void 0),t.__decorate([p.reader("summaryStatistics",["statisticsHRef"])],R.prototype,"readSummaryStatistics",null),t.__decorate([a.property({type:[String],json:{read:!1}})],R.prototype,"outFields",void 0),t.__decorate([a.property(w.readOnlyService(v))],R.prototype,"fullExtent",void 0),t.__decorate([a.property({type:["show","hide","hide-children"]})],R.prototype,"listMode",void 0),t.__decorate([a.property(w.readOnlyService(h))],R.prototype,"spatialReference",void 0),t.__decorate([a.property(w.elevationInfo)],R.prototype,"elevationInfo",null),t.__decorate([a.property({json:{read:!1},readOnly:!0})],R.prototype,"type",void 0),t.__decorate([a.property()],R.prototype,"associatedFeatureServiceItem",void 0),R=t.__decorate([l.subclass("esri.layers.BuildingSceneLayer")],R),R}.apply(t,o))||(e.exports=i)},85138:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(3718),r(73462),r(67059),r(26475),r(86928),r(12187),r(59376),r(99752),r(49359),r(4037),r(51916),r(18377),r(9720),r(23084),r(12997),r(88710),r(40810),r(96349),r(88074),r(86062),r(8336),r(14365),r(27282),r(83231),r(87703),r(68162),r(63510),r(16520),r(58670),r(25519),r(97949),r(43277),r(65131),r(909),r(98757),r(86884),r(48253),r(43503)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c,f,h,v,_,g,m,b,S,w,O,I,F,L,x,j,T,A,P,B,E,M,N,R,U,k,D,q){"use strict";const C=M.defineFieldProperties();let Q=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="building-component",r.nodePages=null,r.materialDefinitions=null,r.textureSetDefinitions=null,r.geometryDefinitions=null,r.serviceUpdateTimeStamp=null,r.fields=null,r.associatedLayer=null,r.outFields=null,r.listMode="show",r.renderer=null,r.definitionExpression=null,r.popupEnabled=!0,r.popupTemplate=null,r.layerType="3d-object",r}e._inheritsLoose(r,t);var i=r.prototype;return i.readAssociatedLayer=function(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return o.isSome(r)&&"number"==typeof i?new U({portalItem:r,layerId:i}):null},i.load=function(e){const t=o.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),h.resolve(this)},i.createPopupTemplate=function(e){return N.createPopupTemplate(this,e)},i._fetchService=async function(e){const t=(await m(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})},i.getField=function(e){return this.fieldsIndex.get(e)},i.getFieldDomain=function(e){const t=this.getField(e);return t&&t.domain?t.domain:null},i.createQuery=function(){const e=new R;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e},i.queryExtent=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))},i.queryFeatureCount=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))},i.queryFeatures=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))},i.queryObjectIds=function(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))},i.getFieldUsageInfo=function(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:o.isSome(this.associatedLayer)}},i._getAssociatedLayerForQuery=function(){const e=this.associatedLayer;return o.isSome(e)&&e.loaded?h.resolve(e):this._loadAssociatedLayerForQuery()},i._loadAssociatedLayerForQuery=async function(){if(await this.load(),o.isNone(this.associatedLayer))throw new d("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer},e._createClass(r,[{key:"parsedUrl",get:function(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}},{key:"fieldsIndex",get:function(){return new E(this.fields)}},{key:"objectIdField",get:function(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}},{key:"displayField",get:function(){return o.isSome(this.associatedLayer)?this.associatedLayer.displayField:null}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"geometryType",get:function(){return"3d-object"===this.layerType?"mesh":"point"}},{key:"profile",get:function(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}},{key:"capabilities",get:function(){const e=o.isSome(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:D.zeroCapabilities,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}}]),r}(S.LoadableMixin(b.EsriPromiseMixin(k)));return t.__decorate([n.property({readOnly:!0,dependsOn:["layer","id"]})],Q.prototype,"parsedUrl",null),t.__decorate([n.property({type:q.I3SNodePageDefinition,readOnly:!0})],Q.prototype,"nodePages",void 0),t.__decorate([n.property({type:[q.I3SMaterialDefinition],readOnly:!0})],Q.prototype,"materialDefinitions",void 0),t.__decorate([n.property({type:[q.I3STextureSetDefinition],readOnly:!0})],Q.prototype,"textureSetDefinitions",void 0),t.__decorate([n.property({type:[q.I3SGeometryDefinition],readOnly:!0})],Q.prototype,"geometryDefinitions",void 0),t.__decorate([n.property({readOnly:!0})],Q.prototype,"serviceUpdateTimeStamp",void 0),t.__decorate([n.property({readOnly:!0})],Q.prototype,"store",void 0),t.__decorate([n.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],Q.prototype,"rootNode",void 0),t.__decorate([n.property({readOnly:!0})],Q.prototype,"attributeStorageInfo",void 0),t.__decorate([n.property(C.fields)],Q.prototype,"fields",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["fields"]})],Q.prototype,"fieldsIndex",null),t.__decorate([n.property({readOnly:!0,type:U})],Q.prototype,"associatedLayer",void 0),t.__decorate([l.reader("service","associatedLayer",["associatedLayerID"])],Q.prototype,"readAssociatedLayer",null),t.__decorate([n.property(C.outFields)],Q.prototype,"outFields",void 0),t.__decorate([n.property({type:String,dependsOn:["fields"],readOnly:!0})],Q.prototype,"objectIdField",null),t.__decorate([n.property({readOnly:!0,type:String,json:{read:!1},dependsOn:["associatedLayer.displayField"]})],Q.prototype,"displayField",null),t.__decorate([n.property({readOnly:!0,type:_,aliasOf:"layer.fullExtent"})],Q.prototype,"fullExtent",void 0),t.__decorate([n.property({readOnly:!0,type:v,aliasOf:"layer.spatialReference"})],Q.prototype,"spatialReference",void 0),t.__decorate([n.property({readOnly:!0,aliasOf:"layer.version"})],Q.prototype,"version",void 0),t.__decorate([n.property({readOnly:!0,type:w,aliasOf:"layer.elevationInfo"})],Q.prototype,"elevationInfo",void 0),t.__decorate([n.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],Q.prototype,"minScale",void 0),t.__decorate([n.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],Q.prototype,"maxScale",void 0),t.__decorate([n.property({type:["hide","show"],json:{write:!0}})],Q.prototype,"listMode",void 0),t.__decorate([n.property({types:P.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],Q.prototype,"renderer",void 0),t.__decorate([n.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],Q.prototype,"definitionExpression",void 0),t.__decorate([n.property(O.popupEnabled)],Q.prototype,"popupEnabled",void 0),t.__decorate([n.property({type:g,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Q.prototype,"popupTemplate",void 0),t.__decorate([n.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],Q.prototype,"normalReferenceFrame",void 0),t.__decorate([n.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],Q.prototype,"defaultPopupTemplate",null),t.__decorate([n.property({json:{write:!1}}),p.enumeration(new a.JSONMap({"3DObject":"3d-object",Point:"point"}))],Q.prototype,"layerType",void 0),t.__decorate([n.property({dependsOn:["layerType"]})],Q.prototype,"geometryType",null),t.__decorate([n.property({dependsOn:["layerType"]})],Q.prototype,"profile",null),t.__decorate([n.property({readOnly:!0,json:{read:!1},dependsOn:["associatedLayer.capabilities"]})],Q.prototype,"capabilities",null),Q=t.__decorate([u.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],Q),Q}.apply(t,o))||(e.exports=i)},6218:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(99145),r(99752),r(4037),r(51916),r(18377),r(82438),r(41654),r(86884),r(85138)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c,f){"use strict";var h;const v={type:d,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:_}}},read:!1}};function _(e,t,r){if(e&&Array.isArray(e))return new d(e.map((e=>{const t=function(e){return"group"===e.layerType?g:f}(e);if(t){const o=new t;return o.read(e,r),o}r&&r.messages&&e&&r.messages.push(new n("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r}))})))}let g=h=function(t){function r(e){var r;return(r=t.call(this,e)||this).type="building-group",r.listMode="show",r.sublayers=null,r}return e._inheritsLoose(r,t),r.prototype.loadAll=function(){return y.loadAllChildren(this,(e=>h.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))},r}(c);return t.__decorate([s.property({type:["hide","show","hide-children"],json:{write:!0}})],g.prototype,"listMode",void 0),t.__decorate([s.property(v)],g.prototype,"sublayers",void 0),g=h=t.__decorate([a.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],g),function(e){e.sublayersProperty=v,e.readSublayers=_,e.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))}}(g||(g={})),g}.apply(t,o))||(e.exports=i)},86884:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(59376),r(99752),r(4037),r(51916),r(18377),r(52521),r(64393),r(8336)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c){"use strict";let f=function(t){function r(e){var r;return(r=t.call(this,e)||this).title="",r.id=-1,r.modelName=null,r.isEmpty=null,r.visible=!0,r.opacity=1,r}e._inheritsLoose(r,t);var o=r.prototype;return o.readTitle=function(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""},o.readIdOnlyOnce=function(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0},r}(d.IdentifiableMixin(y.MultiOriginJSONSupport));return t.__decorate([s.property({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],f.prototype,"title",void 0),t.__decorate([n.reader("service","title",["alias","name"])],f.prototype,"readTitle",null),t.__decorate([s.property()],f.prototype,"layer",void 0),t.__decorate([s.property({type:i.Integer,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],f.prototype,"id",void 0),t.__decorate([n.reader("service","id")],f.prototype,"readIdOnlyOnce",null),t.__decorate([s.property(c.readOnlyService(String))],f.prototype,"modelName",void 0),t.__decorate([s.property(c.readOnlyService(Boolean))],f.prototype,"isEmpty",void 0),t.__decorate([s.property({type:Boolean,json:{name:"visibility",write:!0}})],f.prototype,"visible",void 0),t.__decorate([s.property({type:Number,json:{write:!0}})],f.prototype,"opacity",void 0),f=t.__decorate([a.subclass("esri.layers.buildingSublayers.BuildingSublayer")],f),f}.apply(t,o))||(e.exports=i)},26880:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(92231),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162),r(82438),r(46290),r(74885),r(42057)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c,f,h){"use strict";var v;const _=y.ofType(h);let g=v=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).description=null,e.filterBlocks=null,e.id=l.generateUUID(),e.name=null,e}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new v({description:this.description,filterBlocks:o.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:o.clone(this.filterAuthoringInfo)})},r}(d.JSONSupport);return t.__decorate([n.property({type:String,json:{write:!0}})],g.prototype,"description",void 0),t.__decorate([n.property({type:_,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterBlocks",void 0),t.__decorate([n.property({types:{key:"type",base:c,typeMap:{checkbox:f}},json:{read:e=>{switch(e&&e.type){case"checkbox":return f.fromJSON(e);default:return null}},write:!0}})],g.prototype,"filterAuthoringInfo",void 0),t.__decorate([n.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"id",void 0),t.__decorate([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"name",void 0),g=v=t.__decorate([a.subclass("esri.layers.support.BuildingFilter")],g),g}.apply(t,o))||(e.exports=i)},46290:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u){"use strict";let d=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).type=null,e}return e._inheritsLoose(r,t),r}(u.JSONSupport);return t.__decorate([s.property({type:String,readOnly:!0,json:{write:!0}})],d.prototype,"type",void 0),d=t.__decorate([n.subclass("esri.layers.support.BuildingFilterAuthoringInfo")],d),d}.apply(t,o))||(e.exports=i)},92874:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(92231),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162),r(82438),r(84465)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c){"use strict";var f;const h=y.ofType(c);let v=f=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new f({filterTypes:o.clone(this.filterTypes)})},r}(d.JSONSupport);return t.__decorate([n.property({type:h,json:{write:!0}})],v.prototype,"filterTypes",void 0),v=f=t.__decorate([a.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],v),v}.apply(t,o))||(e.exports=i)},74885:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(92231),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(82438),r(46290),r(92874)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c){"use strict";var f;const h=d.ofType(c);let v=f=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).type="checkbox",e}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new f({filterBlocks:o.clone(this.filterBlocks)})},r}(y);return t.__decorate([n.property({type:["checkbox"]})],v.prototype,"type",void 0),t.__decorate([n.property({type:h,json:{write:!0}})],v.prototype,"filterBlocks",void 0),v=f=t.__decorate([a.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],v),v}.apply(t,o))||(e.exports=i)},84465:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(92231),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d){"use strict";var y;let c=y=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).filterType=null,e.filterValues=null,e}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new y({filterType:this.filterType,filterValues:o.clone(this.filterValues)})},r}(d.JSONSupport);return t.__decorate([n.property({type:String,json:{write:!0}})],c.prototype,"filterType",void 0),t.__decorate([n.property({type:[String],json:{write:!0}})],c.prototype,"filterValues",void 0),c=y=t.__decorate([a.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],c),c}.apply(t,o))||(e.exports=i)},42057:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(92231),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162),r(63911),r(44508),r(40800),r(180)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c,f,h){"use strict";var v;const _={nonNullable:!0,types:{key:"type",base:y,typeMap:{solid:c,"wire-frame":f,"x-ray":h}},json:{read:e=>{switch(e&&e.type){case"solid":return c.fromJSON(e);case"wireFrame":return f.fromJSON(e);case"x-ray":return h.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let g=v=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).filterExpression=null,e.filterMode=new c,e.title="",e}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new v({filterExpression:this.filterExpression,filterMode:o.clone(this.filterMode),title:this.title})},r}(d.JSONSupport);return t.__decorate([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"filterExpression",void 0),t.__decorate([n.property(_)],g.prototype,"filterMode",void 0),t.__decorate([n.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],g.prototype,"title",void 0),g=v=t.__decorate([a.subclass("esri.layers.support.BuildingFilterBlock")],g),g}.apply(t,o))||(e.exports=i)},63911:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(56162)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u){"use strict";let d=function(t){function r(){return t.apply(this,arguments)||this}return e._inheritsLoose(r,t),r}(u.JSONSupport);return t.__decorate([s.property({readOnly:!0,json:{read:!1}})],d.prototype,"type",void 0),d=t.__decorate([n.subclass("esri.layers.support.BuildingFilterMode")],d),d}.apply(t,o))||(e.exports=i)},44508:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(63911)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u){"use strict";var d;let y=d=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).type="solid",e}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new d},r}(u);return t.__decorate([s.property({type:["solid"],readOnly:!0,json:{write:!0}})],y.prototype,"type",void 0),y=d=t.__decorate([n.subclass("esri.layers.support.BuildingFilterModeSolid")],y),y}.apply(t,o))||(e.exports=i)},40800:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(92231),r(73462),r(67059),r(26475),r(12187),r(99752),r(4037),r(51916),r(18377),r(62181),r(63911)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c){"use strict";var f;let h=f=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).type="wire-frame",e.edges=null,e}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new f({edges:o.clone(this.edges)})},r}(c);return t.__decorate([a.enumeration({wireFrame:"wire-frame"})],h.prototype,"type",void 0),t.__decorate([n.property(y.symbol3dEdgesProperty)],h.prototype,"edges",void 0),h=f=t.__decorate([p.subclass("esri.layers.support.BuildingFilterModeWireFrame")],h),h}.apply(t,o))||(e.exports=i)},180:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(63911)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u){"use strict";var d;let y=d=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).type="x-ray",e}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new d},r}(u);return t.__decorate([s.property({type:["x-ray"],readOnly:!0,json:{write:!0}})],y.prototype,"type",void 0),y=d=t.__decorate([n.subclass("esri.layers.support.BuildingFilterModeXRay")],y),y}.apply(t,o))||(e.exports=i)},87803:(e,t,r)=>{var o,i;o=[r(58797),r(11285),r(74637),r(3718),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(9720),r(56162),r(40810),r(96349),r(88074)],void 0===(i=function(e,t,r,o,i,s,n,a,p,l,u,d,y,c,f,h){"use strict";const v=i.getLogger("esri.layers.support.BuildingSummaryStatistics");let _=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).fieldName=null,e.modelName=null,e.label=null,e.min=null,e.max=null,e.mostFrequentValues=null,e.subLayerIds=null,e}return e._inheritsLoose(r,t),r}(y.JSONSupport);t.__decorate([n.property({type:String})],_.prototype,"fieldName",void 0),t.__decorate([n.property({type:String})],_.prototype,"modelName",void 0),t.__decorate([n.property({type:String})],_.prototype,"label",void 0),t.__decorate([n.property({type:Number})],_.prototype,"min",void 0),t.__decorate([n.property({type:Number})],_.prototype,"max",void 0),t.__decorate([n.property({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],_.prototype,"mostFrequentValues",void 0),t.__decorate([n.property({type:[Number]})],_.prototype,"subLayerIds",void 0),_=t.__decorate([a.subclass("esri.layers.support.BuildingFieldStatistics")],_);let g=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).url=null,e}e._inheritsLoose(r,t);var i=r.prototype;return i.load=function(e){const t=o.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),d.resolve(this)},i._fetchService=async function(e){const t=(await c(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})},e._createClass(r,[{key:"fields",get:function(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(v.error("building summary statistics are not loaded"),null)}}]),r}(h.LoadableMixin(f.EsriPromiseMixin(y.JSONSupport)));return t.__decorate([n.property({constructOnly:!0,type:String})],g.prototype,"url",void 0),t.__decorate([n.property({readOnly:!0,type:[_],json:{read:{source:"summary"}}})],g.prototype,"fields",null),g=t.__decorate([a.subclass("esri.layers.support.BuildingSummaryStatistics")],g),g}.apply(t,o))||(e.exports=i)},56802:(e,t,r)=>{var o,i;o=[t,r(3718),r(9720),r(13032),r(40810),r(25489),r(22728),r(98757)],void 0===(i=function(e,r,o,i,s,n,a,p){"use strict";let l=function(){function e(e,t,r){this.parsedUrl=e,this.portalItem=t,this.signal=r,this.rootDocument=null;const o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}var t=e.prototype;return t.fetch=async function(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();if(r.isNone(t))return this.loadFromUrl();const o=await this.findAndLoadRelatedPortalItem(t);return r.isNone(o)?null:this.loadFeatureLayerFromPortalItem(o)},t.fetchPortalItem=async function(){var e;if(!this.urlParts)return null;const t=null!=(e=this.portalItem)?e:await this.portalItemFromServiceItemId();return r.isNone(t)?null:this.findAndLoadRelatedPortalItem(t)},t.fetchRootDocument=async function(){if(r.isSome(this.rootDocument))return this.rootDocument;if(r.isNone(this.urlParts))return this.rootDocument={},{};const e={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},t=`${this.urlParts.root}/SceneServer`;try{const r=await s(t,e);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument},t.fetchServiceOwningPortalUrl=async function(){var e;const t=null==(e=i.id)?void 0:e.findServerInfo(this.parsedUrl.path);if(null!=t&&t.owningSystemUrl)return t.owningSystemUrl;const r=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await s(r,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){o.throwIfAbortError(e)}return null},t.findAndLoadRelatedPortalItem=async function(e){try{return(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((e=>"Feature Service"===e.type))||null}catch(e){return o.throwIfAbortError(e),null}},t.loadFeatureLayerFromPortalItem=async function(e){await e.load({signal:this.signal});const t=await this.findMatchingAssociatedSublayerUrl(e.url);return new p({url:t,portalItem:e}).load({signal:this.signal})},t.loadFromUrl=async function(){const e=await this.findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new p({url:e}).load({signal:this.signal})},t.findMatchingAssociatedSublayerUrl=async function(e){const t=e.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},i=this.urlParts.layerId,n=this.fetchRootDocument(),a=s(t,r),[p,l]=await o.all([a,n]),u=l&&l.layers,d=p.data&&p.data.layers;if(!Array.isArray(d))throw new Error("expected layers array");if(Array.isArray(u)){for(let e=0;e<Math.min(u.length,d.length);e++)if(u[e].id===i)return`${t}/${d[e].id}`}else if(i<d.length)return`${t}/${d[i].id}`;throw new Error("could not find matching associated sublayer")},t.portalItemFromServiceItemId=async function(){const e=(await this.fetchRootDocument()).serviceItemId;if(!e)return null;const t=new a({id:e}),i=await this.fetchServiceOwningPortalUrl();r.isSome(i)&&(t.portal=new n({url:i}));try{return t.load({signal:this.signal})}catch(e){return o.throwIfAbortError(e),null}},e}();t.FetchAssociatedFeatureLayer=l,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,o))||(e.exports=i)},48253:(e,t)=>{var r;void 0===(r=function(e){"use strict";t.zeroCapabilities={attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsStatistics:!1,tileMaxRecordCount:0}},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,[t]))||(e.exports=r)}}]);