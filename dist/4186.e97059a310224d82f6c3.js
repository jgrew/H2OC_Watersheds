(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[4186],{72880:(e,t,i)=>{var s,n;s=[t,i(58797),i(57167),i(16985),i(3434),i(44789)],void 0===(n=function(e,i,s,n,r,o){"use strict";let a=function(e){function t(t,i){return e.call(this,t,i,null)||this}i._inheritsLoose(t,e),t.from=function(e){const i=r.FeatureSetReader.createInstance(),o=[],a=e.filter((e=>!!e.geometry));for(const e of a){const t=s.getJsonType(e.geometry);n.convertFromGraphics(o,[e],t,!1,!1,"uid")}return new t(i,o)};var o=t.prototype;return o.readGraphic=function(){return this._current},o.getCursor=function(){return this.copy()},o.copy=function(){const e=new t(this.instance,this._features);return this.copyInto(e),e},i._createClass(t,[{key:"geometryType",get:function(){const e=this._current;return e?e.geometryType:null}}]),t}(o.FeatureSetReaderJSON);t.GraphicsReader=a,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,s))||(e.exports=n)},56331:(e,t,i)=>{var s,n;s=[i(58797),i(53183),i(9192)],void 0===(n=function(e,t,i){"use strict";return function(i){function s(){return i.apply(this,arguments)||this}e._inheritsLoose(s,i);var n=s.prototype;return n.renderChildren=function(e){this.attributeView.bindTextures(e.context),this.children.some((e=>e.hasData))&&(i.prototype.renderChildren.call(this,e),e.drawPhase===t.WGLDrawPhase.MAP&&this._renderChildren(e),e.drawPhase===t.WGLDrawPhase.HIGHLIGHT&&this._renderHighlight(e))},n._renderChildren=function(e,t){for(const i of this.children)i.isReady&&i.hasData&&(i.commitChanges(e),e.context.setStencilFunction(514,i.stencilRef,255),i._displayList.replay(e,i,t))},n._renderHighlight=function(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()},e._createClass(s,[{key:"hasLabels",get:function(){return!1}},{key:"labelsVisible",get:function(){return!1}}]),s}(i.FeatureContainer)}.apply(t,s))||(e.exports=n)},16968:(e,t,i)=>{var s,n;s=[i(74637),i(19328),i(81405),i(57167),i(90920),i(35477),i(18167),i(2707),i(32782),i(61377),i(20057)],void 0===(n=function(e,t,i,s,n,r,o,a,h,c,l){"use strict";const d={minX:0,minY:0,maxX:0,maxY:0},u=o.create(),p=[];function g(e,t,i,s,n){return d.minX=t,d.minY=i,d.maxX=s,d.maxY=n,e.search(d)}return function(){function d(t,i,s,n,o,a){this._graphics=n,this._onAdd=o,this._onRemove=a,this._index=h.rbush(9,e("csp-restrictions")?e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this._itemByGraphic=new Map,this._currentLevel=-1/0,this._tileInfoView=t,this._uidFieldName=s;const c=t.getClosestInfoForScale(i);c&&(this._currentLevel=c.level,this._resolution=this._tileInfoView.getTileResolution(c.level)),this._metersPerUnit=r.getMetersPerUnit(t.spatialReference)}var m=d.prototype;return m.hitTest=function(e,r,h,l,d){e=a.normalizeMapX(e,this._tileInfoView.spatialReference);const p=.5*l*h;u[0]=e-p,u[1]=r-p,u[2]=e+p,u[3]=r+p;const m=.5*l*(h+50),f=g(this._index,e-m,r-m,e+m,r+m);if(!f||0===f.length)return[];const y={x:e,y:r},_=[];let x;for(const a of f)if(a.graphic.visible)switch(s.getJsonType(a.geometry)){case"esriGeometryPoint":{const e=a.symbol;if(!e)continue;const i=a.geometry,{x:s,y:n}=i,r=l*this._metersPerUnit;let o;switch(e.type){case"esriTS":o=c.getTextSymbolBounds(s,n,e,a.size,l,d);break;case"expanded-cim":o=c.getCIMMarkerBounds(s,n,e,l,r,d);break;case"esriSMS":case"esriPMS":o=c.getMarkerSymbolBounds(s,n,e,l,r,d)}t.polygonContainsPoint(o,y)&&_.push(a)}break;case"esriGeometryPolyline":{const t=a.symbol;if(!t||!t.layers.length)continue;const i=t.layers[0];x=1.5*l*window.devicePixelRatio*n.pt2px(i.width),c.isPointOnPolyline(a.geometry,e,r,x)&&_.push(a)}break;case"esriGeometryEnvelope":{const e=a.geometry,t=o.fromValues(e.xmin,e.ymin,e.xmax,e.ymax);o.intersects(t,u)&&_.push(a);break}case"esriGeometryPolygon":{if(t.polygonContainsPoint(a.geometry,y)){_.push(a);break}const e=i.getPolygonExtent(a.geometry);if(Math.abs(e.ymax-e.ymin)<5*l||Math.abs(e.xmax-e.xmin)<5*l){const t=o.fromValues(e.xmin,e.ymin,e.xmax,e.ymax);o.intersects(t,u)&&_.push(a)}break}case"esriGeometryMultipoint":{const e=a.symbol;if(!e)continue;const i=a.geometry.points;let s;for(let n=0;n<i.length;n++)if(s="esriTS"===e.type?c.getTextSymbolBounds(i[n][0],i[n][1],e,a.size,l,d):c.getMarkerSymbolBounds(i[n][0],i[n][1],e,l,l*this._metersPerUnit,d),t.polygonContainsPoint(s,y)){_.push(a);break}break}}return _.sort(((e,t)=>{const i=c.graphicGeometryToNumber(e.graphic),s=c.graphicGeometryToNumber(t.graphic);return i===s?t.zorder-e.zorder:i-s})),_.map((e=>e.graphic))},m.getGraphicsData=function(e,t,i){const s=g(this._index,t.bounds[0],t.bounds[1],t.bounds[2],t.bounds[3]);if(0===s.length||0===i.length)return[];s.sort(((e,t)=>e.zorder-t.zorder)),s[0].insertAfter=-1;for(let e=1;e<s.length;e++)s[e].insertAfter=s[e-1].graphic.uid;s.sort(((e,t)=>e.graphic.uid-t.graphic.uid)),i.sort(((e,t)=>e.uid-t.uid));let n,r=0,o=0;const a=[],h={originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]};for(const t of i){for(o=-2;r<s.length;)if(n=s[r],r++,t.uid===n.graphic.uid){o=n.insertAfter;break}if(!n.geometry||-2===o)continue;const i=n.getGeometryQuantized(h),c={...n.graphic.attributes};c[this._uidFieldName]=t.uid,null==n.groupId&&(n.groupId=e.createTemplateGroup(n.symbol,null)),a.push({centroid:l.getCentroidQuantized(n,h),geometry:i,attributes:c,symbol:n.symbol,groupId:n.groupId,insertAfter:o,zorder:n.zorder})}return a.sort(((e,t)=>e.zorder-t.zorder)),a},m.queryTileData=function(e,t){const i=50*t.resolution,s=o.pad(t.bounds,i,o.create()),n=g(this._index,s[0],s[1],s[2],s[3]),r=[];return this._createTileGraphics(r,e,n,{originPosition:"upperLeft",scale:[t.resolution,t.resolution],translate:[t.bounds[0],t.bounds[3]]}),r},m.has=function(e){return this._itemByGraphic.has(e)},m.getBounds=function(e){return this._itemByGraphic.has(e)?this._itemByGraphic.get(e).bounds:null},m.addOrModify=function(e,t,i){if(!e)return;this.has(e)&&this.remove(e),this._onAdd(e);const s=l.acquire(e,t,i,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference);return this._itemByGraphic.set(e,s),i&&this._index.insert(s),s.bounds},m.remove=function(e){if(!this._itemByGraphic.has(e))return;this._onRemove(e);const t=this._itemByGraphic.get(e);this._index.remove(t),this._itemByGraphic.delete(e)},m.updateZ=function(){const e=this._graphics.items;let t,i;for(let s=0;s<e.length;s++)i=e[s],t=this._itemByGraphic.get(i),t&&(t.zorder=s)},m.update=function(e,t,i){const s=this._itemByGraphic.get(e);s.groupId=null;const n=o.clone(s.bounds);return s.size[0]=s.size[1]=0,this._index.remove(s),s.set(e,t,i,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),i&&this._index.insert(s),{oldBounds:n,newBounds:s.bounds}},m.updateLevel=function(e){if(this._currentLevel===e)return;this._currentLevel=e;const t=this._tileInfoView.getTileResolution(e);this._resolution=t,this._index.clear(),p.length=0,this._itemByGraphic.forEach((e=>{e.updateBounds(this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),e.geometry&&p.push(e)})),this._index.load(p)},m.clear=function(){this._itemByGraphic.clear(),this._index.clear()},m._createTileGraphics=function(e,t,i,s){const n=this._uidFieldName;let r,o,a,h;i.sort(((e,t)=>e.zorder-t.zorder));for(let c=0;c<i.length;c++){a=i[c],r=a.graphic,o=a.getGeometryQuantized(s),h=0===c?-1:i[c-1].graphic.uid;const d={...a.graphic.attributes};d[n]=r.uid,null==a.groupId&&(a.groupId=t.createTemplateGroup(a.symbol,null)),e.push({centroid:l.getCentroidQuantized(a,s),geometry:o,attributes:d,symbol:a.symbol,groupId:a.groupId,insertAfter:h,zorder:a.zorder})}},d}()}.apply(t,s))||(e.exports=n)},20057:(e,t,i)=>{var s,n;s=[i(58797),i(3718),i(22502),i(57167),i(18167),i(87547),i(16985),i(5999),i(61377)],void 0===(n=function(e,t,i,s,n,r,o,a,h){"use strict";const c=new r,l=new r,d="esriGeometryPolyline";function u(e){e.coords.length=0,e.lengths.length=0}let p=function(){function r(){this.bounds=n.create(),this.graphic=null,this.size=[0,0,0,0]}r.acquire=function(e=null,t,i,s,n,o){let a;return 0===r._pool.length?a=new r:(a=r._pool.pop(),this._set.delete(a)),a.acquire(e,t,i,s,n,o),a},r.release=function(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))},r.getCentroidQuantized=function(e,n){if(s.isPolygon(e.geometry)){const s=e.symbol;if(t.isNone(s))return null;if(h.isMarkerSymbol(s.type)){const t=i.polygonCentroid(e.geometry);return a.quantizePoint(n,{},{x:t[0],y:t[1]},!1,!1)}}return null};var p=r.prototype;return p.acquire=function(e=null,t,i,s,n,r){e&&this.set(e,t,i,s,n,r)},p.release=function(){this.graphic=null,this.symbolResource=null,this.geometry=null},p.set=function(e,t,i,s,n,r){this.graphic=e,this.geometry=i,this.symbolResource=t,this.updateBounds(s,n,r)},p.updateBounds=function(e,t,i){h.getBounds(this.bounds,this.size,this.symbolResource,this.geometry,e,t,i)},p.getGeometryQuantized=function(e){if(s.isPolygon(this.geometry)){const t=this.geometry.rings;if(1===t.length&&2===t[0].length)return a.quantizeGeometry(e,{paths:[[t[0][0],t[0][1]]]})}else if(s.isPolyline(this.geometry))return u(c),u(l),o.convertFromPolyline(c,this.geometry),o.generalizeOptimizedGeometry(l,c,this.geometry.hasZ,this.geometry.hasM,d,e.scale[0]),o.quantizeOptimizedGeometry(c,l,this.geometry.hasZ,this.geometry.hasM,d,e),o.convertToPolyline(c,this.geometry.hasZ,this.geometry.hasM);return a.quantizeGeometry(e,this.geometry)},e._createClass(r,[{key:"symbol",get:function(){return this.symbolResource.symbol}}]),r}();return p._pool=[],p._set=new Set,p}.apply(t,s))||(e.exports=n)},54186:(e,t,i)=>{var s,n;s=[i(58797),i(11285),i(74637),i(3718),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(9720),i(37862),i(56750),i(23084),i(20290),i(50257),i(57167),i(90920),i(18167),i(63872),i(74474),i(79043),i(39241),i(43768),i(69911),i(88309),i(16670),i(40546),i(55726),i(96899),i(85294),i(92131),i(74549),i(30390),i(72880),i(91240),i(56331),i(61377),i(16968),i(28234)],void 0===(n=function(e,t,i,s,n,r,o,a,h,c,l,d,u,p,g,m,f,y,_,x,b,S,v,w,M,I,G,T,P,C,z,U,R,A,k,B,F,L,q,O,D){"use strict";function H(e,t,i){if(i.has(e))return i.get(e);const s={tile:t,addedOrModified:[],removed:[]};return i.set(e,s),s}let N=function(t){function i(i){var s;return(s=t.call(this,i)||this)._storage=new k.ComputedAttributeStorage,s._displayIds=new Map,s._tiles=new Map,s._graphicStoreUpdate=!1,s._graphicsSet=new Set,s._matcher=d.resolve(null),s._tileUpdateSet=new Set,s._tilesToUpdate=new Map,s._graphicIdToAbortController=new Map,s._attached=!1,s._highlightIds=new Map,s._updatingGraphicsTimer=null,s._processing=!1,s._needsProcessing=!1,s._pendingUpdate={added:new Set,updated:new Set,removed:new Set},s.lastUpdateId=-1,s.updateRequested=!1,s.graphicUpdateHandler=s.graphicUpdateHandler.bind(e._assertThisInitialized(s)),s._processAnalyzedGraphics=s._processAnalyzedGraphics.bind(e._assertThisInitialized(s)),s._graphicsChangeHandler=s._graphicsChangeHandler.bind(e._assertThisInitialized(s)),s}e._inheritsLoose(i,t);var n=i.prototype;return n._createMatcher=function(e,t){if(e){const i=C.createMatcherSchema({indexCount:0,fields:{}},"feature",e);this._matcher=z.createMatcher(i,t,null)}},n._createDisplayId=function(e){return this._displayIds.has(e)||this._displayIds.set(e,this._storage.createDisplayId()),this._displayIds.get(e)},n.initialize=function(){this._tileStore=new F(this.view.featuresTilingScheme),this.container=new L(this.view.featuresTilingScheme),this._attributeStore=new A.default({type:"local",initialize:e=>d.resolve(this.container.attributeView.initialize(e)),update:e=>this.container.attributeView.requestUpdate(e),render:()=>this.container.requestRender()},M()),this._graphicStore=new O(this.view.featuresTilingScheme,this.view.state.scale,this.uid,this.graphics,(e=>{this._createDisplayId(e.uid),this._setFilterState(e.uid,e.visible)}),(e=>{const t=this._displayIds.get(e.uid);this._displayIds.delete(e.uid),this._storage.releaseDisplayId(t)}));const e=new U.WGLTemplateStore(this.container.getMaterialItems.bind(this.container),!0);this._createMatcher(this.renderer,e),this._meshFactory=new R.WGLMeshFactory(null,this.uid,e),this._templateStore=e,this.watch("renderer",(t=>{this._createMatcher(t,e);for(const e of this.graphics)this._pendingUpdate.updated.add(e);this.requestUpdate()})),this._tileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",(()=>{this.graphics.items.length>0&&this._graphicsChangeHandler({target:this.graphics,added:this.graphics.items,removed:[],moved:[]}),this.handles.add(this.graphics.on("change",this._graphicsChangeHandler),"graphics"),this._attached=!0,this.notifyChange("updating")}))},n.destroy=function(){this._updatingGraphicsTimer&&(clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=null,this.notifyChange("updating")),this.container.destroy(),this._set("graphics",null),this._graphicStore.clear(),this._tileStore.destroy(),this._attributeStore=null},n.hitTest=function(e,t){if(!this.view||!this.view.position)return d.resolve();const i=this.view.toMap(_.createScreenPoint(e,t));return this.searchFeatures(i).then((e=>e&&e.length?e[0]:null))},n.searchFeatures=async function(e,t=2){return this._graphicStore.hitTest(e.x,e.y,t,this.view.state.resolution,this.view.state.rotation)},n.update=function(e){const t=e.state,i=this.view.featuresTilingScheme.getClosestInfoForScale(t.scale).level;if(this._graphicStore.updateLevel(i),this._tileStore.setViewState(t),this._graphicStoreUpdate=!0,this.updateRequested=!1,this._pendingUpdate.updated.size>0){if(!this._processing)return void this._updateGraphics();this._needsProcessing=!0}},n.viewChange=function(){this.requestUpdate()},n.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback())},n.processUpdate=function(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))},n.graphicUpdateHandler=function(e){const{graphic:t,property:i,newValue:s}=e,n=t;switch(i){case"attributes":break;case"geometry":case"symbol":this._pendingUpdate.updated.add(n),this.requestUpdate();break;case"visible":this._setFilterState(n.uid,s),this._attributeStore.sendUpdates()}},n.addHighlight=function(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()},n.removeHighlight=function(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()},n._updateHighlight=function(){const e=Array.from(this._highlightIds.keys()),t=e.map((e=>this._displayIds.get(e)));this._attributeStore.setHighlight(e,t)},n._getIntersectingTiles=function(e){const t=this._graphicStore.getBounds(e);return t&&0!==x.width(t)&&0!==x.height(t)?this._tileStore.boundsIntersections(t):[]},n._updateTile=function(e){const t=e.tile,i=this._getGraphicsData(this._templateStore,t,e.addedOrModified);return this._processGraphics(i).then((i=>(this._patchTile(t.key,{type:"update",addOrUpdate:i,remove:e.removed,end:!0}),i)))},n._patchTile=function(e,t){if(!this._tiles.has(e))return;const i=this._tiles.get(e);this.container.onTileData(i,t),this.container.requestRender()},n._graphicsChangeHandler=function(e){for(const t of e.added)this._pendingUpdate.added.add(t);for(const t of e.moved)this._pendingUpdate.added.add(t);for(const t of e.removed)this._pendingUpdate.added.has(t)?this._pendingUpdate.added.delete(t):this._pendingUpdate.removed.add(t);this._processing?this._needsProcessing=!0:this._updateGraphics()},n._getGraphicsToUpdate=function(){const e={added:[],removed:[],updated:[]},t=this._pendingUpdate;for(const i of this.graphics.items)t.added.has(i)?e.added.push(i):t.updated.has(i)&&e.updated.push(i);for(const i of t.removed)this._graphicStore.has(i)&&e.removed.push(i);return t.added.clear(),t.removed.clear(),t.updated.clear(),e},n._updateGraphics=async function(){this._processing=!0;const{added:e,removed:t,updated:i}=this._getGraphicsToUpdate(),s=this._tilesToUpdate;let n;try{if(!this._graphicStoreUpdate){const e=this.view.state,t=this.view.featuresTilingScheme.getClosestInfoForScale(e.scale).level;this._graphicStore.updateLevel(t),this._tileStore.setViewState(e)}const r=[],o=new Array(e.length+t.length);for(let e=0;e<i.length;e++){const t=i[e],a=this._getIntersectingTiles(t);for(const e of a)n=e.id,H(n,e,s).removed.push(this._displayIds.get(t.uid));r.push(this._updateGraphic(t,null)),o[e]=t}const a=i.length;for(let t=0;t<e.length;t++){const i=e[t];o[a+t]=i,this._graphicsSet.add(i),r.push(this.addGraphic(i))}for(const e of t){this._abortProcessingGraphic(e.uid);const t=this._getIntersectingTiles(e);for(const i of t)n=i.id,H(n,i,s).removed.push(this._displayIds.get(e.uid));this._graphicsSet.delete(e),this._graphicStore.remove(e)}let h;this._flipUpdatingGraphics(),await d.all(r);for(let e=0;e<o.length;e++){h=o[e];const t=this._getIntersectingTiles(h);for(const e of t)n=e.id,H(n,e,s).addedOrModified.push(h)}this._graphicStore.updateZ();const c=[];for(const[e,t]of s)c.push(this._updateTile(t));await d.all(c)}catch(e){}s.clear(),this.notifyChange("updating"),this._processing=!1,this._needsProcessing&&(this._needsProcessing=!1,this._updateGraphics())},n._getArcadeInfo=function(e){const t=(e.attributes?Object.keys(e.attributes):[]).map((t=>({name:t,alias:t,type:"string"==typeof e.attributes[t]?"esriFieldTypeString":"esriFieldTypeDouble"})));return s.isNone(e.geometry)?null:{geometryType:y.getJsonType(e.geometry),spatialReference:g.fromJSON(e.geometry.spatialReference),fields:t}},n._getSymbolForGraphic=async function(e,t){return s.isSome(e.symbol)?e.symbol:s.isSome(this.renderer)?this.renderer.getSymbolAsync(e,{scale:this.view.scale,abortOptions:t}):this._getNullSymbol(e)},n._getSymbolResources=async function(e,t){if(!this.container.stage)return d.resolve(null);const i=this._getArcadeInfo(e),s=await this._getSymbolForGraphic(e,t),n=C.createSymbolSchema(s),r=await G.expandSymbol(n,i,t);if("esriTS"===r.type){const e=[],[t]=I.bidiText(r.text);for(let i=0;i<t.length;i++)e.push(t.charCodeAt(i));const i={symbol:r,id:0,glyphIds:e},[{mosaicItem:s}]=await this.container.getMaterialItems([i]);return{symbol:r,mosaicItem:s}}return{symbol:r,mosaicItem:null}},n._projectAndNormalizeGeometry=async function(e){if(s.isNone(e.geometry))return d.resolve(null);let t=e.geometry;if(y.isPolygon(t)){const e=t.rings;t.rings=e}else if(y.isPolyline(t)){const e=t.paths;t.paths=e}else y.isExtent(t)&&(t=f.fromExtent(t));return v.checkProjectionSupport(t.spatialReference,this.view.spatialReference).then((()=>{const e=q.normalizeCentralMeridian(t),i=v.project(e,t.spatialReference,this.view.spatialReference);return m.closeRingsAndFixWinding(i),i}))},n._onTileUpdate=function(e){const t=p.getInfo(this.view.spatialReference);if(e.added&&e.added.length>0)for(const i of e.added)this._addNewTile(i,t);if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)},n.addGraphic=function(e){this._abortProcessingGraphic(e.uid);const t=d.createAbortController();this._graphicIdToAbortController.set(e.uid,t);const i={signal:t.signal};return this._addOrUpdateGraphic(e,i).then((()=>{this._graphicIdToAbortController.delete(e.uid)})).catch((t=>{if(this._graphicIdToAbortController.delete(e.uid),!d.isAbortError(t))throw t}))},n._updateGraphic=async function(e,t){const i=this._projectAndNormalizeGeometry(e),s=this._getSymbolResources(e,t),[n,r]=await d.all([i,s]);this._graphicStore.addOrModify(e,r,n)},n._addOrUpdateGraphic=async function(e,t){const i=this._projectAndNormalizeGeometry(e),s=this._getSymbolResources(e,t);try{const[t,n]=await d.all([i,s]);this._addProjectedGraphic(e,n,t)}catch(e){if(!d.isAbortError(e))throw e}},n._addProjectedGraphic=function(e,t,i){this._graphicsSet.has(e)&&this._graphicStore.addOrModify(e,t,i)},n._addTile=function(e){const t=x.create();this.view.featuresTilingScheme.getTileBounds(t,e);const i=new P.WGLTile(e,t,!0);return this._tiles.set(e,i),this.container.addChild(i),i},n._addNewTile=function(e,t){const i=this._addTile(e.key),s=this._graphicStore.queryTileData(this._templateStore,e);if(t){const i=Math.round((t.valid[1]-t.valid[0])/e.resolution);for(const e of s)e.geometry&&y.isPoint(e.geometry)&&this._wrapPoints(e,i)}const n=e.key;this._tileUpdateSet.add(e.key),this.notifyChange("updating"),this._processGraphics(s).then((e=>{const t={type:"update",clear:!0,addOrUpdate:e,remove:[],end:!0};i.setData(t),this._tileUpdateSet.delete(n),this.notifyChange("updating")})).catch((e=>{if(this._tileUpdateSet.delete(n),this.notifyChange("updating"),!d.isAbortError(e))throw e}))},n._removeTile=function(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)},n._setFilterState=function(e,t){const i=this._displayIds.get(e),s=this._attributeStore.getHighlightFlag(e);this._attributeStore.setData(i,0,0,s|(t?w.FILTER_FLAG_0:0))},n._getGraphicsData=function(e,t,i){const s=p.getInfo(this.view.spatialReference),n=this._graphicStore.getGraphicsData(e,t,i);if(s){const e=Math.round((s.valid[1]-s.valid[0])/t.resolution);for(const t of n)t.geometry&&y.isPoint(t.geometry)&&this._wrapPoints(t,e)}return n},n._wrapPoints=function(e,t){const i=e.geometry;512===t?i.x<20?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>492&&(e.geometry={points:[[i.x,i.y],[-t,0]]}):i.x<-20?e.geometry={points:[[i.x,i.y],[t,0]]}:i.x>532&&(e.geometry={points:[[i.x,i.y],[-t,0]]})},n._processGraphics=async function(e,t){if(!e||!e.length||!this._meshFactory)return null;const i=B.GraphicsReader.from(e),s=this._meshFactory;return await s.analyzeGraphics(i,await this._matcher,null,null,t),this._attributeStore.sendUpdates(),this._processAnalyzedGraphics(i)},n._processAnalyzedGraphics=function(e){const t=this._meshFactory,i=t.createMeshData(e.getApproximateSize()),s=e.getCursor();for(;s.next();){const e=s.readGraphic();e.insertAfter=-1===e.insertAfter?-1:this._displayIds.get(e.insertAfter),e.displayId=this._displayIds.get(e.attributes[this.uid]),t.writeGraphic(i,s)}const n={};return i.encode(n,[]),T.TileData.decode(n)},n._abortProcessingGraphic=function(e){this._graphicIdToAbortController.has(e)&&this._graphicIdToAbortController.get(e).abort()},n._getNullSymbol=function(e){const t=e.geometry;return y.isPolyline(t)?b.errorPolylineSymbol2D:y.isPolygon(t)||y.isExtent(t)?b.errorPolygonSymbol2D:b.errorPointSymbol2D},n._flipUpdatingGraphics=function(){this._updatingGraphicsTimer&&clearTimeout(this._updatingGraphicsTimer),this._updatingGraphicsTimer=setTimeout((()=>{this._updatingGraphicsTimer=null,this.notifyChange("updating")}),160),this.notifyChange("updating")},e._createClass(i,[{key:"updating",get:function(){return!this._attached||null!==this._updatingGraphicsTimer||this._tileUpdateSet.size>0||this._tilesToUpdate.size>0}}]),i}(D.GraphicsView(S.HandleOwnerMixin(u)));return t.__decorate([o.property({constructOnly:!0})],N.prototype,"requestUpdateCallback",void 0),t.__decorate([o.property({constructOnly:!0})],N.prototype,"graphics",void 0),t.__decorate([o.property()],N.prototype,"updating",null),t.__decorate([o.property()],N.prototype,"view",void 0),t.__decorate([o.property()],N.prototype,"updateRequested",void 0),N=t.__decorate([a.subclass("esri.views.2d.layers.support.GraphicsView2D")],N),N}.apply(t,s))||(e.exports=n)},61377:(e,t,i)=>{var s,n;s=[t,i(74637),i(3718),i(56750),i(23084),i(52148),i(63629),i(57167),i(90920),i(18167),i(2707),i(10709),i(68904),i(38970),i(1422),i(81901),i(35561),i(69911),i(51361)],void 0===(n=function(e,i,s,n,r,o,a,h,c,l,d,u,p,g,m,f,y,_,x){"use strict";const b=Math.PI/180,S=.04,v=g.create(),w=m.create(),M=l.create(),I=m.create(),G=m.create(),T=m.create(),P=m.create(),C=m.create(),z=m.create(),U=m.create();function R(e,t,i,s,n,r){let o,a;const h=c.pt2px(i.xoffset),l=c.pt2px(i.yoffset),d=b*i.angle,g=b*r;switch(i.type){case"esriSMS":o=a=c.pt2px(i.size);break;case"esriPMS":o=c.pt2px(i.width),a=c.pt2px(i.height)}n<S&&(s=S*s/n);const m=p.identity(v);p.translate(m,m,u.set(w,e,t)),p.rotate(m,m,g-d),p.scale(m,m,u.set(w,s,-s)),p.translate(m,m,u.set(w,h,-l));const f=[0,0];u.transformMat2d(f,u.set(w,-.5*o,-.5*a),m);const y=[0,0];u.transformMat2d(y,u.set(w,-.5*o,.5*a),m);const _=[0,0];u.transformMat2d(_,u.set(w,.5*o,-.5*a),m);const x=[0,0];return u.transformMat2d(x,u.set(w,.5*o,.5*a),m),{rings:[[f,_,x,y,f]]}}function A(e,t,i,s,n,r){const o=x.CIMSymbolHelper.getEnvelope(i.data);if(!o)return null;n<S&&(s=S*s/n);const a=c.pt2px(o.width),h=c.pt2px(o.height),l=c.pt2px(o.x),d=c.pt2px(o.y),g=0*b,m=b*r,f=p.identity(v);p.translate(f,f,u.set(w,e,t)),p.rotate(f,f,m-g),p.scale(f,f,u.set(w,s,s));const y=[0,0];u.transformMat2d(y,u.set(w,l,d+h),f);const _=[0,0];u.transformMat2d(_,u.set(w,l,d),f);const M=[0,0];u.transformMat2d(M,u.set(w,l+a,d+h),f);const I=[0,0];return u.transformMat2d(I,u.set(w,l+a,d),f),{rings:[[y,M,I,_,y]]}}function k(e,t,i,s,n,r){const o=c.pt2px(i.xoffset),a=c.pt2px(i.yoffset),h=b*i.angle,l=b*r,d=p.identity(v);p.translate(d,d,u.set(w,e,t)),p.rotate(d,d,l),p.scale(d,d,u.set(w,n,-n));const g=s[0]+s[2]/2,m=s[1]+s[3]/2;p.translate(d,d,u.set(w,o,-a)),p.translate(d,d,u.set(w,g,m)),p.rotate(d,d,h),p.translate(d,d,u.set(w,-g,-m));const f=[0,0];u.transformMat2d(f,u.set(w,s[0],s[1]),d);const y=[0,0];u.transformMat2d(y,u.set(w,s[0],s[1]+s[3]),d);const _=[0,0];u.transformMat2d(_,u.set(w,s[0]+s[2],s[1]),d);const x=[0,0];return u.transformMat2d(x,u.set(w,s[0]+s[2],s[1]+s[3]),d),{rings:[[f,_,x,y,f]]}}function B(e){switch(e.symbol.type){case"esriSFS":case"esriPFS":{const t=e.symbol.outline;return t?t.width:0}case"esriSLS":return c.pt2px(e.symbol.width);case"esriSMS":return c.pt2px(e.symbol.size);case"esriPMS":return c.pt2px(Math.max(e.symbol.width,e.symbol.height));case"esriTS":{const t=[0,0,0,0];F(t,e.symbol,e.mosaicItem);const i=Math.max(Math.abs(t[0]),Math.abs(t[1]));return Math.max(t[2],t[3])+i}case"expanded-cim":{const t=x.CIMSymbolHelper.getEnvelope(e.symbol.data);return c.pt2px(Math.sqrt(t.width*t.width+t.height*t.height))}case"composite-symbol":{if(!e.symbol.layers.length)return 0;const t=e.symbol.layers.length-1;return B({symbol:e.symbol.layers[t],mosaicItem:null})}case"label":default:return 0}}function F(e,t,i){if(!i||0===i.glyphMosaicItems.length)return e;const s=_.bidiText(t.text)[1],n=i.glyphMosaicItems,r=y.shapeGlyphs(n,s,{scale:c.pt2px(t.font.size)/24,angle:t.angle,xOffset:t.xoffset,yOffset:t.yoffset,hAlign:f.getXAnchorDirection(t.horizontalAlignment||"center"),vAlign:f.getYAnchorDirection(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=c.pt2px(r.x-r.halfWidth),e[1]=c.pt2px(r.y-r.halfHeight),e[2]=c.pt2px(r.width),e[3]=c.pt2px(r.height),e}const L={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:{paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:r.WebMercator},minus180Line:{paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:r.WebMercator}},4326:{maxX:180,minX:-180,plus180Line:{paths:[[[180,-180],[180,180]]],spatialReference:r.WGS84},minus180Line:{paths:[[[-180,-180],[-180,180]]],spatialReference:r.WGS84}}};function q(e,t){return Math.ceil((e-t)/(2*t))}function O(e,t){const[i,s]=t.valid,n=2*s;let r,o=0;return e>s?(r=Math.ceil(Math.abs(e-s)/n),e-=r*n,o=r):e<i&&(r=Math.ceil(Math.abs(e-i)/n),e+=r*n,o=-r),{x:e,frameId:o}}function D(e,t){const{xmin:i,ymin:s,xmax:n,ymax:r}=t;return H(e,i,s)&&H(e,i,r)&&H(e,n,r)&&H(e,n,s)}function H(e,t,i){return t>=e.xmin&&t<=e.xmax&&i>=e.ymin&&i<=e.ymax}function N(e,t,i){if(Array.isArray(e)){const s=e[0];if(s>t){const i=q(s,t);e[0]=s+i*(-2*t)}else if(s<i){const t=q(s,i);e[0]=s+t*(-2*i)}}else{const s=e.x;if(s>t){const i=q(s,t);e.x+=i*(-2*t)}else if(s<i){const t=q(s,i);e.x+=t*(-2*i)}}return e}let V=function(){function e(){}return e.prototype.cut=function(e,t){let i;if(e.rings)this.closed=!0,i=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,i=e.paths,this.minPts=2}const s=i.length,n=-2*t;for(let e=0;e<s;e++){const t=i[e];if(t&&t.length>=this.minPts){const e=[];for(const i of t)e.push([i[0]+n,i[1]]);i.push(e)}}return this.closed?e.rings=i:e.paths=i,e},e}();t.getBounds=function(e,t,i,s,r,o,c){if(!s||!i.symbol)return e[0]=e[1]=e[2]=e[3]=0,t[0]=t[1]=t[2]=t[3]=0,e;const l=s;if(!h.isPoint(l)){a.getBoundsXY(e,l);let s=t[0];0===s&&(s=B(i),t[0]=s);const n=r*s/2;return e[0]-=n,e[1]-=n,e[2]+=n,e[3]+=n,e}{const s=l.x,a=l.y;"esriTS"===i.symbol.type&&0===t[2]&&0===t[3]&&F(t,i.symbol,i.mosaicItem),function(e,t,i,s,r,o,a,h){let c;switch(s.type){case"esriSMS":case"esriPMS":c=R(t,i,s,o,a,0);break;case"esriTS":c=k(t,i,s,r,o,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":c=A(t,i,s,o,a,0)}let l,u,p=0;for(let e=0;e<c.rings[0].length-1;e++)u=c.rings[0][e],l=(t-u[0])*(t-u[0])+(i-u[1])*(i-u[1]),p=Math.max(p,l);p=Math.sqrt(p);let g=d.normalizeMapX(t-p,h),m=d.normalizeMapX(t+p,h);if(g>m){const e=n.getInfo(h);if(e){const[t,i]=e.valid;g=t,m=i}}e[0]=g,e[1]=i-p,e[2]=m,e[3]=i+p}(e,s,a,i.symbol,t,r,o,c)}return e},t.getCIMMarkerBounds=A,t.getMarkerSymbolBounds=R,t.getTextSymbolBounds=k,t.getTextSymbolSize=F,t.graphicGeometryToNumber=function(e){switch(s.unwrap(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0},t.isMarkerSymbol=function(e){return"simple-marker"===e||"picture-marker"===e||"text"===e},t.isPointOnPolyline=function(e,t,i,s){u.set(T,t,i);const n=e.paths;let r,o,a,h,c,l,d,p,g,m=1/0;for(let e=0;e<n.length;e++){const f=n[e];if(!(f.length<2))for(let e=1;e<f.length;e++)r=f[e-1][0],a=f[e-1][1],o=f[e][0],h=f[e][1],c=Math.min(r,o)-s,l=Math.min(a,h)-s,d=Math.max(r,o)+s,p=Math.max(a,h)+s,t<c||t>d||i<l||i>p||(u.set(I,r,a),u.set(G,o,h),u.subtract(P,G,I),u.subtract(C,I,T),u.scale(z,P,u.dot(P,C)/u.dot(P,P)),u.subtract(U,C,z),g=u.dot(U,U),m>g&&(m=g))}return Math.sqrt(m)<=s},t.normalizeCentralMeridian=function(e){let t,i,s,r,c,l,d,u,p,g=null;if(!e)return null;if("mesh"===e.type)return e.toJSON();if(t=e.spatialReference,i=n.getInfo(t),!i)return e.toJSON();s=t.isWebMercator,l=s?102100:4326,r=L[l].maxX,c=L[l].minX,d=L[l].plus180Line,u=L[l].minus180Line;const m=e.toJSON();if(h.isPoint(m))p=N(m,r,c);else if(h.isMultipoint(m))m.points=m.points.map((e=>N(e,r,c))),p=m;else if(h.isExtent(m))p=function(e,t){if(!t)return e;const i=function(e,t){const i=[],{ymin:s,ymax:n}=e,r=e.xmax-e.xmin,o=e.xmin,a=e.xmax;let h;const[c,l]=t.valid;h=O(e.xmin,t);const d=h.x,u=h.frameId;h=O(e.xmax,t);const p=h.x,g=h.frameId,m=d===p&&r>0;if(r>2*l){const e={xmin:o<a?d:p,ymin:s,xmax:l,ymax:n},t={xmin:c,ymin:s,xmax:o<a?p:d,ymax:n},r={xmin:0,ymin:s,xmax:l,ymax:n},h={xmin:c,ymin:s,xmax:0,ymax:n},m=[],f=[];D(e,r)&&m.push(u),D(e,h)&&f.push(u),D(t,r)&&m.push(g),D(t,h)&&f.push(g);for(let e=u+1;e<g;e++)m.push(e),f.push(e);i.push({extent:e,frameIds:[u]},{extent:t,frameIds:[g]},{extent:r,frameIds:m},{extent:h,frameIds:f})}else d>p||m?i.push({extent:{xmin:d,ymin:s,xmax:l,ymax:n},frameIds:[u]},{extent:{xmin:c,ymin:s,xmax:p,ymax:n},frameIds:[g]}):i.push({extent:{xmin:d,ymin:s,xmax:p,ymax:n},frameIds:[u]});return i}(e,t).map((e=>e.extent));return i.length<2?i[0]||e:i.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:i.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}(m,i);else if(h.isPolygon(m)||h.isPolyline(m)){const e=M;a.getBoundsXY(e,m);const t={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},i=q(t.xmin,c)*(2*r),s=0===i?m:function(e,t){const i=function(e){return h.isPolygon(e)?e.rings:e.paths}(e);for(const e of i)for(const i of e)i[0]+=t;return e}(m,i);t.xmin+=i,t.xmax+=i,o.extentIntersectsPolyline(t,d)&&t.xmax!==r||o.extentIntersectsPolyline(t,u)&&t.xmin!==c?g=s:p=s}else p=e.clone();return null!==g?(new V).cut(g,r):p},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,s))||(e.exports=n)},28234:(e,t,i)=>{var s,n;s=[t,i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(52521)],void 0===(n=function(e,i,s,n,r,o,a,h,c,l,d,u){"use strict";t.GraphicsView=e=>{let t=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).graphics=null,t.renderer=null,t.view=null,t}return i._inheritsLoose(t,e),t}(u.IdentifiableMixin(e));return s.__decorate([a.property()],t.prototype,"graphics",void 0),s.__decorate([a.property()],t.prototype,"renderer",void 0),s.__decorate([a.property()],t.prototype,"updating",void 0),s.__decorate([a.property()],t.prototype,"view",void 0),t=s.__decorate([h.subclass("esri.views.layers.GraphicsView")],t),t},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,s))||(e.exports=n)}}]);