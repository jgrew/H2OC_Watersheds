(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[1742],{31742:(t,e,i)=>{var n,a;n=[i(58797),i(11285),i(74637),i(73462),i(67059),i(26475),i(99752),i(4037),i(51916),i(18377),i(9720),i(28187),i(75885),i(19048),i(46351),i(58329)],void 0===(a=function(t,e,i,n,a,r,s,o,h,p,u,c,d,y,f,l){"use strict";const m=n.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let g=function(e){function i(){return e.apply(this,arguments)||this}t._inheritsLoose(i,e);var n=i.prototype;return n.hitTest=function(){return null},n.update=function(t){this.strategy.update(t).catch((t=>{u.isAbortError(t)||m.error(t)})),this.notifyChange("updating")},n.attach=function(){this._bitmapContainer=new y.BitmapContainer,this.container.addChild(this._bitmapContainer),this.strategy=new l({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})},n.detach=function(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()},n.moveStart=function(){},n.viewChange=function(){},n.moveEnd=function(){this.requestUpdate()},n.fetchBitmapData=function(t,e,i){return this.layer.fetchImage(t,e,i,{timestamp:this.refreshTimestamp})},n.doRefresh=async function(){this.requestUpdate()},n.isUpdating=function(){return this.strategy.updating||this.updateRequested},i}(c.RefreshableLayerView(f.LayerView2DMixin(d)));return e.__decorate([r.property()],g.prototype,"strategy",void 0),e.__decorate([r.property({dependsOn:["strategy.updating"]})],g.prototype,"updating",void 0),g=e.__decorate([s.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],g),g}.apply(e,n))||(t.exports=a)}}]);