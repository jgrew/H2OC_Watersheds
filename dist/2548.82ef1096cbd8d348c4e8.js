(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[2548],{46351:(e,t,i)=>{var r,s;r=[t,i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(82438),i(24002),i(69788),i(85698),i(45168),i(57042),i(70034),i(96138)],void 0===(s=function(e,i,r,s,n,o,a,p,l,d,u,c,h,y,v,f,_,g,w){"use strict";const b=c.ofType({key:"type",base:v,typeMap:{rect:f,path:w,geometry:g}});t.LayerView2DMixin=e=>{let t=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).clips=new b,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}i._inheritsLoose(t,e);var r=t.prototype;return r.initialize=function(){var e;this.container||(this.container=new _.Container),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([y.init(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),y.init(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),y.init(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),y.init(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))},r.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1},r.isVisibleAtScale=function(e){let t=!0;const i=this.layer,r=i.minScale,s=i.maxScale;if(null!=r&&null!=s){let i=!r,n=!s;!i&&e<=r&&(i=!0),!n&&e>=s&&(n=!0),t=i&&n}return t},r.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},r.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},r.isUpdating=function(){return!1},r.isRendering=function(){return!1},r.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},i._createClass(t,[{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}}]),t}(e);return r.__decorate([a.property({type:b,set(e){const t=h.referenceSetter(e,this._get("clips"),b);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([a.property()],t.prototype,"moving",void 0),r.__decorate([a.property()],t.prototype,"attached",void 0),r.__decorate([a.property()],t.prototype,"container",void 0),r.__decorate([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([a.property()],t.prototype,"updateRequested",void 0),r.__decorate([a.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([a.property()],t.prototype,"view",void 0),t=r.__decorate([p.subclass("esri.views.2d.layers.LayerView2D")],t),t},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,r))||(e.exports=s)},52548:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(9720),i(75416),i(75885),i(54186),i(46351)],void 0===(s=function(e,t,i,r,s,n,o,a,p,l,d,u,c,h,y){"use strict";let v=function(t){function i(){var e;return(e=t.apply(this,arguments)||this)._handles=new u,e._popupTemplates=new Map,e.graphicsViews=[],e}e._inheritsLoose(i,t);var r=i.prototype;return r.hitTest=function(e,t){if(this.suspended||!this.graphicsViews.length)return d.resolve();const i=this.graphicsViews.map((i=>i.hitTest(e,t)));return d.all(i).then((e=>e.filter(((e,t)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))},r.update=function(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)},r.attach=function(){this.layer.featureCollections.forEach((e=>{const t=new h({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});t.renderer=e.renderer,this._popupTemplates.set(t,e.popupTemplate),this.graphicsViews.push(t),this.container.addChild(t.container)}))},r.detach=function(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null},r.moveStart=function(){},r.moveEnd=function(){},r.viewChange=function(){for(const e of this.graphicsViews)e.viewChange()},i}(y.LayerView2DMixin(c));return v=t.__decorate([o.subclass("esri.views.2d.layers.RouteLayerView2D")],v),v}.apply(t,r))||(e.exports=s)},75885:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(37862),i(59286),i(52521),i(96349),i(74474)],void 0===(s=function(e,t,i,r,s,n,o,a,p,l,d,u,c,h,y){"use strict";let v=function(t){function i(e){var i;return(i=t.call(this,e)||this).layer=null,i.parent=null,i}e._inheritsLoose(i,t);var s=i.prototype;return s.initialize=function(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))},s.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},s.getSuspendInfo=function(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},s.isUpdating=function(){return!1},e._createClass(i,[{key:"fullOpacity",get:function(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}}]),i}(y.HandleOwnerMixin(c.IdentifiableMixin(h.EsriPromiseMixin(u.EventedMixin(d)))));return t.__decorate([n.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],v.prototype,"fullOpacity",null),t.__decorate([n.property()],v.prototype,"layer",void 0),t.__decorate([n.property()],v.prototype,"parent",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],v.prototype,"suspended",null),t.__decorate([n.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],v.prototype,"suspendInfo",null),t.__decorate([n.property({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],v.prototype,"legendEnabled",null),t.__decorate([n.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],v.prototype,"updating",null),t.__decorate([n.property({dependsOn:["layer.visible"]})],v.prototype,"visible",null),v=t.__decorate([o.subclass("esri.views.layers.LayerView")],v),v}.apply(t,r))||(e.exports=s)},85698:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(56162)],void 0===(s=function(e,t,i,r,s,n,o,a,p,l,d){"use strict";let u=function(t){function i(){return t.apply(this,arguments)||this}return e._inheritsLoose(i,t),i}(d.JSONSupport);return u=t.__decorate([o.subclass("esri.views.layers.support.ClipArea")],u),u}.apply(t,r))||(e.exports=s)},45168:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(85698)],void 0===(s=function(e,t,i,r,s,n,o,a,p,l,d){"use strict";var u;let c=u=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return e._inheritsLoose(i,t),i.prototype.clone=function(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},e._createClass(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(d);return t.__decorate([n.property({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),t.__decorate([n.property({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),t.__decorate([n.property({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),t.__decorate([n.property({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],c.prototype,"version",null),c=u=t.__decorate([o.subclass("esri.views.layers.support.ClipRect")],c),c}.apply(t,r))||(e.exports=s)},70034:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(27572),i(12997),i(50257),i(57167),i(26016),i(85698)],void 0===(s=function(e,t,i,r,s,n,o,a,p,l,d,u,c,h,y,v){"use strict";var f;const _={base:d,key:"type",typeMap:{extent:u,polygon:c}};let g=f=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).type="geometry",e.geometry=null,e}return e._inheritsLoose(i,t),i.prototype.clone=function(){return new f({geometry:this.geometry.clone()})},e._createClass(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(v);return t.__decorate([n.property({types:_,json:{read:h.fromJSON,write:!0}})],g.prototype,"geometry",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],g.prototype,"version",null),g=f=t.__decorate([o.subclass("esri.views.layers.support.Geometry")],g),g}.apply(t,r))||(e.exports=s)},96138:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(85698)],void 0===(s=function(e,t,i,r,s,n,o,a,p,l,d){"use strict";let u=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).type="path",e.path=[],e}return e._inheritsLoose(i,t),e._createClass(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(d);return t.__decorate([n.property({type:[[[Number]]],json:{write:!0}})],u.prototype,"path",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["path"]})],u.prototype,"version",null),u=t.__decorate([o.subclass("esri.views.layers.support.Path")],u),u}.apply(t,r))||(e.exports=s)}}]);