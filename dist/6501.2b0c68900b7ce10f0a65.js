(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[6501],{96501:(e,t,i)=>{var s,r;s=[t,i(74637),i(80593),i(27975),i(48188),i(98043),i(39024)],void 0===(r=function(e,i,s,r,n,o,a){"use strict";let c=function(){function e(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:{a_position:0}}}var t=e.prototype;return t.dispose=function(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)},t.draw=function(e,t,i){const{width:s,height:r}=t;this._createOrResizeResources(e,s,r);const{context:n,painter:o}=e,{materialManager:a}=o,c=this._programDesc,u=this._quad,l=i.colorMatrix;u.bind();const h=this._layerFBOTexture;n.bindFramebuffer(t),t.copyToTexture(0,0,s,r,0,0,h),n.setBlendingEnabled(!1),n.setStencilTestEnabled(!1);const d=a.getProgram(e,c);n.bindProgram(d),n.bindTexture(h,2),d.setUniformMatrix4fv("u_coefficients",l),d.setUniform1i("u_colorTexture",2),u.draw(),n.setBlendingEnabled(!0),n.setBlendFunction(1,771),n.setStencilTestEnabled(!0),u.unbind()},t._createOrResizeResources=function(e,t,i){const{context:s}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===i||(this._size[0]=t,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(t,i):this._layerFBOTexture=new r(s,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:i}),this._quad||(this._quad=new a(s,[-1,-1,1,-1,-1,1,1,1])))},e}();t.Colorize=c,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,s))||(e.exports=r)}}]);