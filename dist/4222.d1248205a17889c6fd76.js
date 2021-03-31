(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[4222],{41361:(e,r,t)=>{var o,i;o=[t(58797),t(11285),t(70792),t(74637),t(3718),t(73462),t(67059),t(26475),t(86928),t(59376),t(83981),t(99752),t(25179),t(49359),t(4037),t(51916),t(18377),t(9720),t(23084),t(12997),t(26016),t(12808),t(88710),t(40810),t(40125),t(95791),t(64393),t(86062),t(8336),t(23704),t(14365),t(27282),t(83231),t(87703),t(68162),t(63510),t(16520),t(58670),t(25519),t(62631),t(97949),t(25548),t(87842),t(52058),t(40162),t(93511),t(45095),t(44084),t(42423),t(72491),t(13278),t(65131),t(909),t(56609)],void 0===(i=function(e,r,t,o,i,n,p,a,l,d,s,y,c,u,f,m,_,g,h,v,b,w,S,I,R,T,F,O,x,j,L,k,D,P,N,E,G,J,C,A,U,W,M,z,V,q,B,Q,H,K,X,Y,Z,$){"use strict";const ee=n.getLogger("esri.layers.StreamLayer"),re=new l.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});let te=function(r){function o(...e){var t;return(t=r.call(this,...e)||this).copyright=null,t.definitionExpression=null,t.displayField=null,t.elevationInfo=null,t.featureReduction=null,t.fields=null,t.geometryDefinition=null,t.geometryType=null,t.labelsVisible=!0,t.labelingInfo=null,t.legendEnabled=!0,t.maxReconnectionAttempts=0,t.maxReconnectionInterval=20,t.objectIdField=null,t.operationalLayerType="ArcGISStreamLayer",t.popupEnabled=!0,t.popupTemplate=null,t.purgeOptions=new $,t.screenSizePerspectiveEnabled=!0,t.sourceJSON=null,t.spatialReference=h.WGS84,t.type="stream",t.url=null,t.updateInterval=300,t.webSocketUrl=null,t}e._inheritsLoose(o,r);var n=o.prototype;return n.normalizeCtorArgs=function(e,r){return"string"==typeof e?{url:e,...r}:e},n.load=function(e){"WebSocket"in t||g.reject(new u("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."));const r=i.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch((e=>e)).then((()=>this._fetchService(r)))),g.resolve(this)},n.readFeatureReduction=function(e,r){return H.read(e,r)},n.writeWebSceneFeatureReduction=function(e,r,t,o){H.writeTarget(e,r,"layerDefinition.featureReduction",o)},n.readRenderer=function(e,r,t){const o=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(o){const e=C.read(o,r,t)||void 0;return e||ee.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:t}),e}if(r.defaultSymbol)return r.types&&r.types.length?new D({defaultSymbol:oe(r.defaultSymbol,r,t),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:oe(e.symbol,e,t)})))}):new G({symbol:oe(r.defaultSymbol,r,t)})},n.writeRenderer=function(e,r,t,o){C.write(e,r,t,o)},n.writeWebSceneRenderer=function(e,r,t,o){C.write(e,r,"layerDefinition.drawingInfo.renderer",o)},n.createPopupTemplate=function(e){return Y.createPopupTemplate(this,e)},n.createQuery=function(){const e=new Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e},n.getFieldDomain=function(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t},n.getField=function(e){return this.fieldsIndex.get(e)},n._fetchService=async function(e){var r;if(this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new u("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new u("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new u("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new u("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:r}=await I(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),w.fixRendererFields(this.renderer,this.fields),w.fixTimeInfoFields(this.timeInfo,this.fields),X.loadStyleRenderer(this,{origin:"service"})},e._createClass(o,[{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"fieldsIndex",get:function(){return new U(this.fields)}},{key:"renderer",set:function(e){w.fixRendererFields(e,this.fields),this._set("renderer",e)}}]),o}(M.BlendLayer(B.TemporalLayer(q.ScaleRangeLayer(V.RefreshableLayer(W.ArcGISService(j.OperationalLayer(z.PortalLayer(F.MultiOriginJSONMixin(T)))))))));r.__decorate([a.property({type:String})],te.prototype,"copyright",void 0),r.__decorate([a.property({readOnly:!0,dependsOn:["fields","title"]})],te.prototype,"defaultPopupTemplate",null),r.__decorate([a.property({type:String})],te.prototype,"definitionExpression",void 0),r.__decorate([a.property({type:String})],te.prototype,"displayField",void 0),r.__decorate([a.property({type:O})],te.prototype,"elevationInfo",void 0),r.__decorate([d.reader("featureReduction",["layerDefinition.featureReduction"])],te.prototype,"readFeatureReduction",null),r.__decorate([c.writer("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:H.webSceneFeatureReductionTypes}})],te.prototype,"writeWebSceneFeatureReduction",null),r.__decorate([a.property({type:[A]})],te.prototype,"fields",void 0),r.__decorate([a.property({readOnly:!0,dependsOn:["fields"]})],te.prototype,"fieldsIndex",null),r.__decorate([a.property({type:v})],te.prototype,"geometryDefinition",void 0),r.__decorate([a.property({type:["point","polygon","polyline","multipoint"],json:{read:{reader:re.read}}})],te.prototype,"geometryType",void 0),r.__decorate([a.property(x.labelsVisible)],te.prototype,"labelsVisible",void 0),r.__decorate([a.property({type:[Q],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:K.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],te.prototype,"labelingInfo",void 0),r.__decorate([a.property(x.legendEnabled)],te.prototype,"legendEnabled",void 0),r.__decorate([a.property({type:["show","hide"]})],te.prototype,"listMode",void 0),r.__decorate([a.property({type:p.Integer})],te.prototype,"maxReconnectionAttempts",void 0),r.__decorate([a.property({type:p.Integer})],te.prototype,"maxReconnectionInterval",void 0),r.__decorate([a.property({type:String})],te.prototype,"objectIdField",void 0),r.__decorate([a.property({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],te.prototype,"operationalLayerType",void 0),r.__decorate([a.property(x.popupEnabled)],te.prototype,"popupEnabled",void 0),r.__decorate([a.property({type:S,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],te.prototype,"popupTemplate",void 0),r.__decorate([a.property({type:$})],te.prototype,"purgeOptions",void 0),r.__decorate([a.property({types:J.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],te.prototype,"renderer",null),r.__decorate([d.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),d.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],te.prototype,"readRenderer",null),r.__decorate([c.writer("renderer")],te.prototype,"writeRenderer",null),r.__decorate([c.writer("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:J.webSceneRendererTypes}})],te.prototype,"writeWebSceneRenderer",null),r.__decorate([a.property(x.screenSizePerspectiveEnabled)],te.prototype,"screenSizePerspectiveEnabled",void 0),r.__decorate([a.property({type:h,json:{origins:{service:{read:{source:"spatialReference"}}}}})],te.prototype,"spatialReference",void 0),r.__decorate([a.property({json:{read:!1}})],te.prototype,"type",void 0),r.__decorate([a.property(x.url)],te.prototype,"url",void 0),r.__decorate([a.property({type:Number})],te.prototype,"updateInterval",void 0),r.__decorate([a.property({type:String})],te.prototype,"webSocketUrl",void 0),te=r.__decorate([y.subclass("esri.layers.StreamLayer")],te);const oe=s.createTypeReader({types:R.symbolTypesRenderer});return te}.apply(r,o))||(e.exports=i)},56609:(e,r,t)=>{var o,i;o=[t(58797),t(11285),t(74637),t(73462),t(67059),t(26475),t(99752),t(4037),t(51916),t(18377),t(56162)],void 0===(i=function(e,r,t,o,i,n,p,a,l,d,s){"use strict";var y;let c=y=function(r){function t(){var e;return(e=r.apply(this,arguments)||this).age=null,e.ageReceived=null,e.displayCount=null,e.maxObservations=1,e}return e._inheritsLoose(t,r),t.prototype.clone=function(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})},t}(s.JSONSupport);return r.__decorate([n.property({type:Number,json:{write:!0}})],c.prototype,"age",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],c.prototype,"ageReceived",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],c.prototype,"displayCount",void 0),r.__decorate([n.property({type:Number,json:{write:!0}})],c.prototype,"maxObservations",void 0),c=y=r.__decorate([p.subclass("esri.layers.support.PurgeOptions")],c),c}.apply(r,o))||(e.exports=i)}}]);