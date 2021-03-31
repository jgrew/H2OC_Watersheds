(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[5994],{5994:(e,t,n)=>{var i,o;i=[t,n(58797),n(3718),n(49359),n(9720),n(35558),n(54668),n(11446),n(2727),n(35477),n(18167),n(79928),n(14261),n(59331)],void 0===(o=function(e,n,i,o,l,s,a,r,c,u,f,p,h,m){"use strict";let d=function(){function e(){}var t=e.prototype;return t.queryAll=async function(e,t,n){if(!(e=n&&n.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new o("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=y.fromGeometry(t);let l=!1;n&&n.returnSampleInfo||(l=!0);const s={...w,...n,returnSampleInfo:!0},a=await this.query(e[e.length-1],i,s),r=await this._queryAllContinue(e,a,s);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r},t.query=async function(e,t,n){if(!e)throw new o("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof y)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new o("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...w,...n},l=new x(e,t.spatialReference,i),s=i.signal;return await e.load({signal:s}),await this._createGeometryDescriptor(l,t,s),await this._selectTiles(l,s),await this._populateElevationTiles(l,s),this._sampleGeometryWithElevation(l),this._createQueryResult(l,s)},t.createSampler=async function(e,t,n){if(!e)throw new o("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new o("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...n};return this._createSampler(e,t,i)},t.createSamplerAll=async function(e,t,n){if(!(e=n&&n.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new o("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new o("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...n,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,l,i)},t._createSampler=async function(e,t,n,i){const o=n.signal;await e.load({signal:o});const l=t.spatialReference,s=e.tileInfo.spatialReference;l.equals(s)||(await p.initializeProjection([{source:l,dest:s}],{signal:o}),t=p.project(t,s));const a=new T(e,t,n,i);return await this._selectTiles(a,o),await this._populateElevationTiles(a,o),new h.MultiTileElevationSampler(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)},t._createSamplerAllContinue=async function(e,t,n,i){if(e.pop(),!e.length)return n;const o=n.samplers.map((e=>f.fromExtent(e.extent))),l=await this._createSampler(e[e.length-1],t,i,o);if(0===l.samplers.length)return n;const s=n.samplers.concat(l.samplers),a=new h.MultiTileElevationSampler(s,i.noDataValue);return this._createSamplerAllContinue(e,t,a,i)},t._queryAllContinue=async function(e,t,n){const i=e.pop(),o=t.geometry.coordinates,l=[],s=[];for(let n=0;n<o.length;n++){const a=t.sampleInfo[n];a.demResolution>=0?a.source||(a.source=i):e.length&&(l.push(o[n]),s.push(n))}if(!e.length||0===l.length)return t;const a=t.geometry.clone(l),r=await this.query(e[e.length-1],a,n);return s.forEach(((e,n)=>{o[e].z=r.geometry.coordinates[n].z,t.sampleInfo[e].demResolution=r.sampleInfo[n].demResolution})),this._queryAllContinue(e,t,n)},t._createQueryResult=async function(e,t){const n={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),n},t._createGeometryDescriptor=async function(e,t,n){let i;const l=e.layer.tileInfo.spatialReference;if(t instanceof y?i=await t.project(l,n):(await p.initializeProjection([{source:t.spatialReference,dest:l}],{signal:n}),i=p.project(t,l)),!i)throw new o("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=y.fromGeometry(i)},t._selectTiles=async function(e,t){const n=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof n)this._selectTilesClosestResolution(e);else if("finest-contiguous"===n)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==n)throw new o("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${n}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}},t._preselectOutsideLayerExtent=function(e){const t=new m.ElevationTile(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const n=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const i=e.x,o=e.y;(i<n.xmin||i>n.xmax||o<n.ymin||o>n.ymax)&&(e.elevationTile=t)}))},t._selectTilesClosestResolution=function(e){const t=e.layer.tileInfo,n=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(n)},t._findNearestDemResolutionLODIndex=function(e,t){const n=t/u.getMetersPerUnitForSR(e.spatialReference);let i=e.lods[0],o=0;for(let t=1;t<e.lods.length;t++){const l=e.lods[t];Math.abs(l.resolution-n)<Math.abs(i.resolution-n)&&(i=l,o=t)}return o},t._selectTilesFinestContiguous=async function(e,t){const n=g(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,n,t)},t._selectTilesFinestContiguousAt=async function(e,t,n){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=i.tilemapCache,a=e.getTilesToFetch();try{if(s)await l.whenOrAbort(l.all(a.map((e=>s.fetchAvailability(e.level,e.row,e.col,{signal:n})))),n);else if(await this._populateElevationTiles(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new o("elevation-query:has-unavailable-tiles")}catch(i){l.throwIfAbortError(i),await this._selectTilesFinestContiguousAt(e,t-1,n)}},t._populateElevationTiles=async function(e,t){const n=e.getTilesToFetch(),o={},s=e.options.cache,a=e.options.noDataValue,r=n.map((async n=>{const l=`${e.layer.uid}:${n.id}:${a}`,r=i.isSome(s)?s.get(l):null,c=i.isSome(r)?r:await e.layer.fetchTile(n.level,n.row,n.col,{noDataValue:a,signal:t});i.isSome(s)&&s.put(l,c),o[n.id]=new m.ElevationTile(n,c)}));await l.whenOrAbort(l.eachAlways(r),t),e.populateElevationTiles(o)},t._selectTilesAuto=async function(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const n=e.layer.tilemapCache;if(!n)return this._selectTilesAutoPrefetchUpsample(e,t);const i=e.getTilesToFetch(),o={},s=i.map((async e=>{const i={id:null,level:0,row:0,col:0,extent:f.create()},s=await c.result(n.fetchAvailabilityUpsample(e.level,e.row,e.col,i,{signal:t}));!1===s.ok?l.throwIfAbortError(s.error):o[e.id]=i}));await l.whenOrAbort(l.all(s),t),e.remapTiles(o)},t._reduceTilesForMaximumRequests=function(e){const t=e.layer.tileInfo;let n=0;const i={},o=e=>{e.id in i?i[e.id]++:(i[e.id]=1,n++)},l=e=>{const t=i[e.id];1===t?(delete i[e.id],n--):i[e.id]=t-1};e.forEachTileToFetch(o,l);let s=!0;for(;s&&(s=!1,e.forEachTileToFetch((i=>{n<=e.options.maximumAutoTileRequests||(l(i),t.upsampleTile(i)&&(s=!0),o(i))}),l),s););},t._selectTilesAutoFinest=function(e){const t=g(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)},t._selectTilesAutoPrefetchUpsample=async function(e,t){const n=e.layer.tileInfo;await this._populateElevationTiles(e,t);let i=!1;e.forEachTileToFetch(((e,t)=>{n.upsampleTile(e)?i=!0:t()})),i&&await this._selectTilesAutoPrefetchUpsample(e,t)},t._sampleGeometryWithElevation=function(e){e.geometry.coordinates.forEach((t=>{const n=t.elevationTile;let i=e.options.noDataValue;if(n){const e=n.sample(t.x,t.y);void 0!==e?i=e:t.elevationTile=null}t.z=i}))},t._extractSampleInfo=function(e){const t=e.layer.tileInfo,n=u.getMetersPerUnitForSR(t.spatialReference);return e.geometry.coordinates.map((i=>{let o=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(o=t.lodAt(i.elevationTile.tile.level).resolution*n),{demResolution:o}}))},e}(),y=function(){function e(){}var t=e.prototype;return t.export=function(){return this._exporter(this.coordinates,this.spatialReference)},t.clone=function(t){const n=new e;return n.geometry=this.geometry,n.spatialReference=this.spatialReference,n.coordinates=t||this.coordinates.map((e=>this._cloneCoordinate(e))),n._exporter=this._exporter,n},t.project=async function(e,t){if(this.spatialReference.equals(e))return this.clone();await p.initializeProjection([{source:this.spatialReference,dest:e}],{signal:t});const n=new a({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),i=p.project(n,e);if(!i)return null;const o=this.coordinates.map(((e,t)=>{const n=this._cloneCoordinate(e),o=i.points[t];return n.x=o[0],n.y=o[1],n})),l=this.clone(o);return l.spatialReference=e,l},t._cloneCoordinate=function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}},e.fromGeometry=function(t){const n=new e;if(n.geometry=t,n.spatialReference=t.spatialReference,t instanceof e)n.coordinates=t.coordinates.map((e=>n._cloneCoordinate(e))),n._exporter=(e,n)=>{const i=t.clone(e);return i.spatialReference=n,i};else switch(t.type){case"point":{const e=t,{hasZ:i,hasM:o}=e;n.coordinates=i&&o?[{x:e.x,y:e.y,z:e.z,m:e.m}]:i?[{x:e.x,y:e.y,z:e.z}]:o?[{x:e.x,y:e.y,m:e.m}]:[{x:e.x,y:e.y}],n._exporter=(e,n)=>t.hasM?new s(e[0].x,e[0].y,e[0].z,e[0].m,n):new s(e[0].x,e[0].y,e[0].z,n);break}case"multipoint":{const e=t,{hasZ:i,hasM:o}=e;n.coordinates=i&&o?e.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):i?e.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):o?e.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):e.points.map((e=>({x:e[0],y:e[1]}))),n._exporter=(e,n)=>t.hasM?new a({points:e.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:n}):new a(e.map((e=>[e.x,e.y,e.z])),n);break}case"polyline":{const e=t,i=[],o=[],{hasZ:l,hasM:s}=t;let a=0;for(const t of e.paths)if(o.push([a,a+t.length]),a+=t.length,l&&s)for(const e of t)i.push({x:e[0],y:e[1],z:e[2],m:e[3]});else if(l)for(const e of t)i.push({x:e[0],y:e[1],z:e[2]});else if(s)for(const e of t)i.push({x:e[0],y:e[1],m:e[2]});else for(const e of t)i.push({x:e[0],y:e[1]});n.coordinates=i,n._exporter=(e,n)=>{const i=t.hasM?e.map((e=>[e.x,e.y,e.z,e.m])):e.map((e=>[e.x,e.y,e.z])),l=o.map((e=>i.slice(e[0],e[1])));return new r({paths:l,hasM:t.hasM,hasZ:!0,spatialReference:n})};break}}return n},e}(),v=function(e,t){this.layer=e,this.options=t},x=function(e){function t(t,n,i){var o;return(o=e.call(this,t,i)||this).type="geometry",o.outSpatialReference=n,o}n._inheritsLoose(t,e);var i=t.prototype;return i.selectTilesAtLOD=function(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,n=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(n,e.x,e.y)}))}},i.allElevationTilesFetched=function(){return!this.geometry.coordinates.some((e=>!e.elevationTile))},i.clearElevationTiles=function(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)},i.populateElevationTiles=function(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])},i.remapTiles=function(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]},i.getTilesToFetch=function(){const e={},t=[];for(const n of this.geometry.coordinates){const i=n.tile;n.elevationTile||!n.tile||e[i.id]||(e[i.id]=i,t.push(i))}return t},i.forEachTileToFetch=function(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))},t}(v),T=function(e){function t(t,n,i,o){var l;return(l=e.call(this,t,i)||this).type="extent",l.elevationTiles=[],l.candidateTiles=[],l.fetchedCandidates=new Set,l.extent=n.intersection(t.fullExtent),l.maskExtents=o,l}n._inheritsLoose(t,e);var i=t.prototype;return i.selectTilesAtLOD=function(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)},i._maximumLodForRequests=function(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const n=this.extent;for(let i=t.lods.length-1;i>=0;i--){const o=t.lods[i],l=o.resolution*t.size[0],s=o.resolution*t.size[1];if(Math.ceil(n.width/l)*Math.ceil(n.height/s)<=e)return i}return-1},i.allElevationTilesFetched=function(){return this.candidateTiles.length===this.elevationTiles.length},i.clearElevationTiles=function(){this.elevationTiles.length=0,this.fetchedCandidates.clear()},i.populateElevationTiles=function(e){for(const t of this.candidateTiles){const n=e[t.id];n&&(this.fetchedCandidates.add(t),this.elevationTiles.push(n))}},i.remapTiles=function(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))},i.getTilesToFetch=function(){return this.candidateTiles},i.forEachTileToFetch=function(e,t){const n=this.candidateTiles;this.candidateTiles=[],n.forEach((n=>{if(this.fetchedCandidates.has(n))return void(t&&t(n));let i=!1;e(n,(()=>i=!0)),i?t&&t(n):this.candidateTiles.push(n)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)},i._uniqueNonOverlappingTiles=function(e,t){const n={},i=[];for(const o of e)n[o.id]?t&&t(o):(n[o.id]=o,i.push(o));const o=i.sort(((e,t)=>e.level-t.level));return o.filter(((e,n)=>{for(let i=0;i<n;i++)if(f.contains(o[i].extent,e.extent))return t&&t(e),!1;return!0}))},i._selectCandidateTilesCoveringExtentAt=function(e){this.candidateTiles.length=0;const t=this.layer.tileInfo,n=t.lods[e],i=this.extent,o=t.tileAt(n.level,i.xmin,i.ymin),l=n.resolution*t.size[0],s=n.resolution*t.size[1],a=Math.ceil((i.xmax-o.extent[0])/l),r=Math.ceil((i.ymax-o.extent[1])/s);for(let e=0;e<r;e++)for(let n=0;n<a;n++){const i={id:null,level:o.level,row:o.row-e,col:o.col+n};t.updateTileInfo(i),this._tileIsMasked(i)||this.candidateTiles.push(i)}},i._tileIsMasked=function(e){return!!this.maskExtents&&this.maskExtents.some((t=>f.contains(t,e.extent)))},t}(v);function g(e,t){let n=e.lods.length-1;if(t>0){const i=e.lods.findIndex((e=>e.resolution<t));0===i?n=0:i>0&&(n=i-1)}return n}const w={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};t.ElevationQuery=d,t.GeometryDescriptor=y,t.default=d,t.getFinestLodIndex=g,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,i))||(e.exports=o)},14261:(e,t,n)=>{var i,o;i=[t,n(58797),n(74637),n(73462),n(70272),n(35558),n(19328),n(26016),n(35477),n(18167)],void 0===(o=function(e,n,i,o,l,s,a,r,c,u){"use strict";const f=o.getLogger("esri.layers.support.ElevationSampler");let p=function(){function e(){}var t=e.prototype;return t.queryElevation=function(e){return d(e.clone(),this)},t.on=function(){return x},t.projectIfRequired=function(e,t){return y(e,t)},e}(),h=function(e){function t(t,n,i){var o;(o=e.call(this)||this).tile=t,o.noDataValue=i,o.extent=u.toExtent(t.tile.extent,n.spatialReference);const l=c.getMetersPerUnitForSR(n.spatialReference),s=n.lodAt(t.tile.level).resolution*l;return o.demResolution={min:s,max:s},o}n._inheritsLoose(t,e);var i=t.prototype;return i.contains=function(e){const t=this.projectIfRequired(e,this.spatialReference);return a.extentContainsPoint(this.extent,t)},i.elevationAt=function(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;if(!this.contains(e)){const t=this.extent,n=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;f.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${n})`)}return this.tile.sample(t.x,t.y)},n._createClass(t,[{key:"spatialReference",get:function(){return this.extent.spatialReference}}]),t}(p),m=function(e){function t(t,n,i){var o;let l;o=e.call(this)||this,"number"==typeof n?(o.noDataValue=n,l=null):(l=n,o.noDataValue=i),o.samplers=l?t.map((e=>new h(e,l,o.noDataValue))):t;const s=o.samplers[0];if(s){o.extent=s.extent.clone();const{min:e,max:t}=s.demResolution;o.demResolution={min:e,max:t};for(let e=1;e<o.samplers.length;e++){const t=o.samplers[e];o.extent.union(t.extent),o.demResolution.min=Math.min(o.demResolution.min,t.demResolution.min),o.demResolution.max=Math.max(o.demResolution.max,t.demResolution.max)}}else o.extent=u.toExtent(u.create(),l.spatialReference),o.demResolution={min:0,max:0};return o}return n._inheritsLoose(t,e),t.prototype.elevationAt=function(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const e of this.samplers)if(e.contains(t))return e.elevationAt(t);return f.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),null},n._createClass(t,[{key:"spatialReference",get:function(){return this.extent.spatialReference}}]),t}(p);function d(e,t){const n=y(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":!function(e,t,n){e.z=n.elevationAt(t)||0}(e,n,t);break;case"polyline":!function(e,t,n){v.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let o=0;o<e.paths.length;o++){const l=e.paths[o],s=t.paths[o];for(let e=0;e<l.length;e++){const t=l[e],o=s[e];v.x=o[0],v.y=o[1];const a=n.elevationAt(v)||0;i&&(t[3]=t[2]),t[2]=a}}e.hasZ=!0}(e,n,t);break;case"multipoint":!function(e,t,n){v.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let o=0;o<e.points.length;o++){const l=e.points[o],s=t.points[o];v.x=s[0],v.y=s[1];const a=n.elevationAt(v)||0;i&&(l[3]=l[2]),l[2]=a}e.hasZ=!0}(e,n,t)}return e}function y(e,t){const n=e.spatialReference;return n.equals(t)?e:l.canProject(n,t)?l.project(e,t):(f.error(`Cannot project geometry spatial reference (wkid:${n.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),null)}const v=new s,x={remove(){}};t.ElevationSamplerBase=p,t.MultiTileElevationSampler=m,t.TileElevationSampler=h,t.updateGeometryElevation=d,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,i))||(e.exports=o)},59331:(e,t)=>{var n;void 0===(n=function(e){"use strict";let n=function(){function e(e,t){if(this.tile=e,!t)return void(this.samplerData=null);const n=this.tile.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(n[2]-n[0]),dy:(t.width-1)/(n[3]-n[1]),x0:n[0],y1:n[3]}}return e.prototype.sample=function(e,t){if(this.samplerData)return function(e,t,n){const{safeWidth:o,width:l,pixelData:s,noDataValue:a}=e,r=i(e.dy*(e.y1-n),0,o),c=i(e.dx*(t-e.x0),0,o),u=Math.floor(r),f=Math.floor(c),p=u*l+f,h=p+l,m=s[p],d=s[h],y=s[p+1],v=s[h+1];if(m!==a&&d!==a&&y!==a&&v!==a){const e=c-f,t=m+(y-m)*e;return t+(d+(v-d)*e-t)*(r-u)}}(this.samplerData,e,t)},e}();function i(e,t,n){return e<t?t:e>n?n:e}t.ElevationTile=n,t.default=n,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,[t]))||(e.exports=n)}}]);