(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[1360],{41360:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(9720),i(82438),i(31099),i(75885),i(54186),i(46351)],void 0===(s=function(e,t,i,r,s,n,o,a,p,d,l,u,c,h,y,v){"use strict";const g={remove(){},pause(){},resume(){}};let f=function(t){function i(){return t.apply(this,arguments)||this}e._inheritsLoose(i,t);var r=i.prototype;return r.initialize=function(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics})},r.attach=function(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")},r.detach=function(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")},r.hitTest=function(e,t){return this.suspended||!this.graphicsView?l.resolve(null):this.graphicsView.hitTest(e,t)},r.fetchPopupFeatures=async function(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))},r.update=function(e){this.graphicsView.processUpdate(e)},r.moveStart=function(){},r.viewChange=function(){this.graphicsView.viewChange()},r.moveEnd=function(){},r.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},r.highlight=function(e){let t;return"number"==typeof e?t=[e]:e instanceof c?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):u.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this.graphicsView.addHighlight(t),{remove:()=>this.graphicsView.removeHighlight(t)}):g},r.queryGraphics=function(){return l.resolve(this.graphicsView.graphics)},i}(v.LayerView2DMixin(h));return t.__decorate([n.property()],f.prototype,"graphicsView",void 0),t.__decorate([n.property({dependsOn:["graphicsView.updating"]})],f.prototype,"updating",void 0),f=t.__decorate([o.subclass("esri.views.2d.layers.GraphicsLayerView2D")],f),f}.apply(t,r))||(e.exports=s)},46351:(e,t,i)=>{var r,s;r=[t,i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(82438),i(24002),i(69788),i(85698),i(45168),i(57042),i(70034),i(96138)],void 0===(s=function(e,i,r,s,n,o,a,p,d,l,u,c,h,y,v,g,f,_,w){"use strict";const b=c.ofType({key:"type",base:v,typeMap:{rect:g,path:w,geometry:_}});t.LayerView2DMixin=e=>{let t=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).clips=new b,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}i._inheritsLoose(t,e);var r=t.prototype;return r.initialize=function(){var e;this.container||(this.container=new f.Container),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([y.init(this,"suspended",(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),!0),y.init(this,["layer.opacity","container"],(()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)}),!0),y.init(this,["layer.blendMode"],(e=>{this.container&&(this.container.blendMode=e)}),!0),y.init(this,["layer.effect"],(e=>{this.container&&(this.container.effect=e)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))},r.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1},r.isVisibleAtScale=function(e){let t=!0;const i=this.layer,r=i.minScale,s=i.maxScale;if(null!=r&&null!=s){let i=!r,n=!s;!i&&e<=r&&(i=!0),!n&&e>=s&&(n=!0),t=i&&n}return t},r.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},r.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},r.isUpdating=function(){return!1},r.isRendering=function(){return!1},r.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},i._createClass(t,[{key:"updating",get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}}]),t}(e);return r.__decorate([a.property({type:b,set(e){const t=h.referenceSetter(e,this._get("clips"),b);this._set("clips",t)}})],t.prototype,"clips",void 0),r.__decorate([a.property()],t.prototype,"moving",void 0),r.__decorate([a.property()],t.prototype,"attached",void 0),r.__decorate([a.property()],t.prototype,"container",void 0),r.__decorate([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r.__decorate([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r.__decorate([a.property()],t.prototype,"updateRequested",void 0),r.__decorate([a.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),r.__decorate([a.property()],t.prototype,"view",void 0),t=r.__decorate([p.subclass("esri.views.2d.layers.LayerView2D")],t),t},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,r))||(e.exports=s)},75885:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(37862),i(59286),i(52521),i(96349),i(74474)],void 0===(s=function(e,t,i,r,s,n,o,a,p,d,l,u,c,h,y){"use strict";let v=function(t){function i(e){var i;return(i=t.call(this,e)||this).layer=null,i.parent=null,i}e._inheritsLoose(i,t);var s=i.prototype;return s.initialize=function(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}}))},s.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},s.getSuspendInfo=function(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e},s.isUpdating=function(){return!1},e._createClass(i,[{key:"fullOpacity",get:function(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}},{key:"visible",get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}}]),i}(y.HandleOwnerMixin(c.IdentifiableMixin(h.EsriPromiseMixin(u.EventedMixin(l)))));return t.__decorate([n.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],v.prototype,"fullOpacity",null),t.__decorate([n.property()],v.prototype,"layer",void 0),t.__decorate([n.property()],v.prototype,"parent",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],v.prototype,"suspended",null),t.__decorate([n.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended","view?.ready"]})],v.prototype,"suspendInfo",null),t.__decorate([n.property({readOnly:!0,dependsOn:["suspended","layer.legendEnabled?"]})],v.prototype,"legendEnabled",null),t.__decorate([n.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],v.prototype,"updating",null),t.__decorate([n.property({dependsOn:["layer.visible"]})],v.prototype,"visible",null),v=t.__decorate([o.subclass("esri.views.layers.LayerView")],v),v}.apply(t,r))||(e.exports=s)},85698:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(56162)],void 0===(s=function(e,t,i,r,s,n,o,a,p,d,l){"use strict";let u=function(t){function i(){return t.apply(this,arguments)||this}return e._inheritsLoose(i,t),i}(l.JSONSupport);return u=t.__decorate([o.subclass("esri.views.layers.support.ClipArea")],u),u}.apply(t,r))||(e.exports=s)},45168:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(85698)],void 0===(s=function(e,t,i,r,s,n,o,a,p,d,l){"use strict";var u;let c=u=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return e._inheritsLoose(i,t),i.prototype.clone=function(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},e._createClass(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(l);return t.__decorate([n.property({type:[Number,String],json:{write:!0}})],c.prototype,"left",void 0),t.__decorate([n.property({type:[Number,String],json:{write:!0}})],c.prototype,"right",void 0),t.__decorate([n.property({type:[Number,String],json:{write:!0}})],c.prototype,"top",void 0),t.__decorate([n.property({type:[Number,String],json:{write:!0}})],c.prototype,"bottom",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],c.prototype,"version",null),c=u=t.__decorate([o.subclass("esri.views.layers.support.ClipRect")],c),c}.apply(t,r))||(e.exports=s)},70034:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(27572),i(12997),i(50257),i(57167),i(26016),i(85698)],void 0===(s=function(e,t,i,r,s,n,o,a,p,d,l,u,c,h,y,v){"use strict";var g;const f={base:l,key:"type",typeMap:{extent:u,polygon:c}};let _=g=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).type="geometry",e.geometry=null,e}return e._inheritsLoose(i,t),i.prototype.clone=function(){return new g({geometry:this.geometry.clone()})},e._createClass(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(v);return t.__decorate([n.property({types:f,json:{read:h.fromJSON,write:!0}})],_.prototype,"geometry",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["geometry"]})],_.prototype,"version",null),_=g=t.__decorate([o.subclass("esri.views.layers.support.Geometry")],_),_}.apply(t,r))||(e.exports=s)},96138:(e,t,i)=>{var r,s;r=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(85698)],void 0===(s=function(e,t,i,r,s,n,o,a,p,d,l){"use strict";let u=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).type="path",e.path=[],e}return e._inheritsLoose(i,t),e._createClass(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(l);return t.__decorate([n.property({type:[[[Number]]],json:{write:!0}})],u.prototype,"path",void 0),t.__decorate([n.property({readOnly:!0,dependsOn:["path"]})],u.prototype,"version",null),u=t.__decorate([o.subclass("esri.views.layers.support.Path")],u),u}.apply(t,r))||(e.exports=s)}}]);