(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[5891],{89115:(e,t,r)=>{var f,n;f=[t,r(99086)],void 0===(n=function(e,r){"use strict";function f(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function n(e,t,r,f,n){return e[0]=t,e[1]=r,e[2]=f,e[3]=n,e}function i(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function u(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function s(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function o(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function y(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function c(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function h(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e}function a(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e}function l(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function p(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function d(e,t,r,f){return e[0]=t[0]+r[0]*f,e[1]=t[1]+r[1]*f,e[2]=t[2]+r[2]*f,e[3]=t[3]+r[3]*f,e}function B(e,t){const r=t[0]-e[0],f=t[1]-e[1],n=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(r*r+f*f+n*n+i*i)}function m(e,t){const r=t[0]-e[0],f=t[1]-e[1],n=t[2]-e[2],i=t[3]-e[3];return r*r+f*f+n*n+i*i}function b(e){const t=e[0],r=e[1],f=e[2],n=e[3];return Math.sqrt(t*t+r*r+f*f+n*n)}function T(e){const t=e[0],r=e[1],f=e[2],n=e[3];return t*t+r*r+f*f+n*n}function E(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function V(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function w(e,t){const r=t[0],f=t[1],n=t[2],i=t[3];let u=r*r+f*f+n*n+i*i;return u>0&&(u=1/Math.sqrt(u),e[0]=r*u,e[1]=f*u,e[2]=n*u,e[3]=i*u),e}function L(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function _(e,t,r,f){const n=t[0],i=t[1],u=t[2],s=t[3];return e[0]=n+f*(r[0]-n),e[1]=i+f*(r[1]-i),e[2]=u+f*(r[2]-u),e[3]=s+f*(r[3]-s),e}function S(e,t){let f,n,i,u,s,o;t=t||1;do{f=2*r.RANDOM()-1,n=2*r.RANDOM()-1,s=f*f+n*n}while(s>=1);do{i=2*r.RANDOM()-1,u=2*r.RANDOM()-1,o=i*i+u*u}while(o>=1);const y=Math.sqrt((1-s)/o);return e[0]=t*f,e[1]=t*n,e[2]=t*i*y,e[3]=t*u*y,e}function M(e,t,r){const f=t[0],n=t[1],i=t[2],u=t[3];return e[0]=r[0]*f+r[4]*n+r[8]*i+r[12]*u,e[1]=r[1]*f+r[5]*n+r[9]*i+r[13]*u,e[2]=r[2]*f+r[6]*n+r[10]*i+r[14]*u,e[3]=r[3]*f+r[7]*n+r[11]*i+r[15]*u,e}function A(e,t,r){const f=t[0],n=t[1],i=t[2],u=r[0],s=r[1],o=r[2],y=r[3],c=y*f+s*i-o*n,h=y*n+o*f-u*i,a=y*i+u*n-s*f,l=-u*f-s*n-o*i;return e[0]=c*y+l*-u+h*-o-a*-s,e[1]=h*y+l*-s+a*-u-c*-o,e[2]=a*y+l*-o+c*-s-h*-u,e[3]=t[3],e}function v(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function O(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function g(e,t){const f=e[0],n=e[1],i=e[2],u=e[3],s=t[0],o=t[1],y=t[2],c=t[3];return Math.abs(f-s)<=r.EPSILON*Math.max(1,Math.abs(f),Math.abs(s))&&Math.abs(n-o)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-y)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(u-c)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))}let I=u,F=s,C=o,N=B,P=m,R=b,x=T;var Y=Object.freeze({__proto__:null,copy:f,set:n,add:i,subtract:u,multiply:s,divide:o,ceil:y,floor:c,min:h,max:a,round:l,scale:p,scaleAndAdd:d,distance:B,squaredDistance:m,length:b,squaredLength:T,negate:E,inverse:V,normalize:w,dot:L,lerp:_,random:S,transformMat4:M,transformQuat:A,str:v,exactEquals:O,equals:g,sub:I,mul:F,div:C,dist:N,sqrDist:P,len:R,sqrLen:x});t.add=i,t.ceil=y,t.copy=f,t.dist=N,t.distance=B,t.div=C,t.divide=o,t.dot=L,t.equals=g,t.exactEquals=O,t.floor=c,t.inverse=V,t.len=R,t.length=b,t.lerp=_,t.max=a,t.min=h,t.mul=F,t.multiply=s,t.negate=E,t.normalize=w,t.random=S,t.round=l,t.scale=p,t.scaleAndAdd=d,t.set=n,t.sqrDist=P,t.sqrLen=x,t.squaredDistance=m,t.squaredLength=T,t.str=v,t.sub=I,t.subtract=u,t.transformMat4=M,t.transformQuat=A,t.vec4=Y}.apply(t,f))||(e.exports=n)},89193:(e,t,r)=>{var f,n;f=[t,r(58797),r(75063),r(85986),r(88594),r(95245),r(82457),r(19394)],void 0===(n=function(e,r,f,n,i,u,s,o){"use strict";let y=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float32Array,t,r,f,n)||this).elementType="f32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(i.BufferViewScalarImpl);y.ElementType="f32";let c=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float32Array,t,r,f,n)||this).elementType="f32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(u.BufferViewVec2Impl);c.ElementType="f32";let h=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float32Array,t,r,f,n)||this).elementType="f32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(s.BufferViewVec3Impl);h.ElementType="f32";let a=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float32Array,t,r,f,n)||this).elementType="f32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(o.BufferViewVec4Impl);a.ElementType="f32";let l=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float32Array,t,r,f,n)||this).elementType="f32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(f.BufferViewMat3Impl);l.ElementType="f32";let p=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float64Array,t,r,f,n)||this).elementType="f64",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(f.BufferViewMat3Impl);p.ElementType="f64";let d=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float32Array,t,r,f,n)||this).elementType="f32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(n.BufferViewMat4Impl);d.ElementType="f32";let B=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float64Array,t,r,f,n)||this).elementType="f64",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(n.BufferViewMat4Impl);B.ElementType="f64";let m=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float64Array,t,r,f,n)||this).elementType="f64",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(i.BufferViewScalarImpl);m.ElementType="f64";let b=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float64Array,t,r,f,n)||this).elementType="f64",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(u.BufferViewVec2Impl);b.ElementType="f64";let T=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float64Array,t,r,f,n)||this).elementType="f64",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(s.BufferViewVec3Impl);T.ElementType="f64";let E=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Float64Array,t,r,f,n)||this).elementType="f64",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(o.BufferViewVec4Impl);E.ElementType="f64";let V=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint8Array,t,r,f,n)||this).elementType="u8",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(i.BufferViewScalarImpl);V.ElementType="u8";let w=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint8Array,t,r,f,n)||this).elementType="u8",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(u.BufferViewVec2Impl);w.ElementType="u8";let L=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint8Array,t,r,f,n)||this).elementType="u8",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(s.BufferViewVec3Impl);L.ElementType="u8";let _=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint8Array,t,r,f,n)||this).elementType="u8",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(o.BufferViewVec4Impl);_.ElementType="u8";let S=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint16Array,t,r,f,n)||this).elementType="u16",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(i.BufferViewScalarImpl);S.ElementType="u16";let M=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint16Array,t,r,f,n)||this).elementType="u16",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(u.BufferViewVec2Impl);M.ElementType="u16";let A=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint16Array,t,r,f,n)||this).elementType="u16",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(s.BufferViewVec3Impl);A.ElementType="u16";let v=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint16Array,t,r,f,n)||this).elementType="u16",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(o.BufferViewVec4Impl);v.ElementType="u16";let O=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint32Array,t,r,f,n)||this).elementType="u32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(i.BufferViewScalarImpl);O.ElementType="u32";let g=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint32Array,t,r,f,n)||this).elementType="u32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(u.BufferViewVec2Impl);g.ElementType="u32";let I=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint32Array,t,r,f,n)||this).elementType="u32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(s.BufferViewVec3Impl);I.ElementType="u32";let F=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Uint32Array,t,r,f,n)||this).elementType="u32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(o.BufferViewVec4Impl);F.ElementType="u32";let C=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int8Array,t,r,f,n)||this).elementType="i8",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(i.BufferViewScalarImpl);C.ElementType="i8";let N=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int8Array,t,r,f,n)||this).elementType="i8",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(u.BufferViewVec2Impl);N.ElementType="i8";let P=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int8Array,t,r,f,n)||this).elementType="i8",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(s.BufferViewVec3Impl);P.ElementType="i8";let R=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int8Array,t,r,f,n)||this).elementType="i8",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(o.BufferViewVec4Impl);R.ElementType="i8";let x=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int16Array,t,r,f,n)||this).elementType="i16",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(i.BufferViewScalarImpl);x.ElementType="i16";let Y=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int16Array,t,r,f,n)||this).elementType="i16",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(u.BufferViewVec2Impl);Y.ElementType="i16";let U=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int16Array,t,r,f,n)||this).elementType="i16",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(s.BufferViewVec3Impl);U.ElementType="i16";let q=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int16Array,t,r,f,n)||this).elementType="i16",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(o.BufferViewVec4Impl);q.ElementType="i16";let k=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int32Array,t,r,f,n)||this).elementType="i32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(i.BufferViewScalarImpl);k.ElementType="i32";let j=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int32Array,t,r,f,n)||this).elementType="i32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(u.BufferViewVec2Impl);j.ElementType="i32";let D=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int32Array,t,r,f,n)||this).elementType="i32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(s.BufferViewVec3Impl);D.ElementType="i32";let z=function(e){function t(t,r=0,f,n){var i;return(i=e.call(this,Int32Array,t,r,f,n)||this).elementType="i32",i}return r._inheritsLoose(t,e),t.fromTypedArray=function(e,r){return new t(e.buffer,e.byteOffset,r,e.byteOffset+e.byteLength)},t}(o.BufferViewVec4Impl);z.ElementType="i32",t.BufferViewFloat=y,t.BufferViewFloat64=m,t.BufferViewInt16=x,t.BufferViewInt32=k,t.BufferViewInt8=C,t.BufferViewMat3f=l,t.BufferViewMat3f64=p,t.BufferViewMat4f=d,t.BufferViewMat4f64=B,t.BufferViewUint16=S,t.BufferViewUint32=O,t.BufferViewUint8=V,t.BufferViewVec2f=c,t.BufferViewVec2f64=b,t.BufferViewVec2i16=Y,t.BufferViewVec2i32=j,t.BufferViewVec2i8=N,t.BufferViewVec2u16=M,t.BufferViewVec2u32=g,t.BufferViewVec2u8=w,t.BufferViewVec3f=h,t.BufferViewVec3f64=T,t.BufferViewVec3i16=U,t.BufferViewVec3i32=D,t.BufferViewVec3i8=P,t.BufferViewVec3u16=A,t.BufferViewVec3u32=I,t.BufferViewVec3u8=L,t.BufferViewVec4f=a,t.BufferViewVec4f64=E,t.BufferViewVec4i16=q,t.BufferViewVec4i32=z,t.BufferViewVec4i8=R,t.BufferViewVec4u16=v,t.BufferViewVec4u32=F,t.BufferViewVec4u8=_,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)},45891:(e,t,r)=>{var f,n;f=[t,r(58797),r(89193),r(75858)],void 0===(n=function(e,r,f,n){"use strict";let i=function(){function e(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}var t=e.prototype;return t.getField=function(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null},t.slice=function(t,r){return new e(this.layout,this.buffer.slice(t*this.stride,r*this.stride))},t.copyFrom=function(e,t,r,f){const n=this.stride;if(n%4==0){const i=new Uint32Array(e.buffer,t*n,f*n/4);new Uint32Array(this.buffer,r*n,f*n/4).set(i)}else{const i=new Uint8Array(e.buffer,t*n,f*n);new Uint8Array(this.buffer,r*n,f*n).set(i)}},r._createClass(e,[{key:"stride",get:function(){return this.layout.stride}},{key:"count",get:function(){return this.buffer.byteLength/this.stride}},{key:"byteLength",get:function(){return this.buffer.byteLength}}]),e}(),u=function(){function e(){this.stride=0,this.fields=new Map,this.fieldNames=[]}var t=e.prototype;return t.vec2f=function(e,t){return this.appendField(e,f.BufferViewVec2f,t),this},t.vec2f64=function(e,t){return this.appendField(e,f.BufferViewVec2f64,t),this},t.vec3f=function(e,t){return this.appendField(e,f.BufferViewVec3f,t),this},t.vec3f64=function(e,t){return this.appendField(e,f.BufferViewVec3f64,t),this},t.vec4f=function(e,t){return this.appendField(e,f.BufferViewVec4f,t),this},t.vec4f64=function(e,t){return this.appendField(e,f.BufferViewVec4f64,t),this},t.mat3f=function(e,t){return this.appendField(e,f.BufferViewMat3f,t),this},t.mat3f64=function(e,t){return this.appendField(e,f.BufferViewMat3f64,t),this},t.mat4f=function(e,t){return this.appendField(e,f.BufferViewMat4f,t),this},t.mat4f64=function(e,t){return this.appendField(e,f.BufferViewMat4f64,t),this},t.vec4u8=function(e,t){return this.appendField(e,f.BufferViewVec4u8,t),this},t.f32=function(e,t){return this.appendField(e,f.BufferViewFloat,t),this},t.f64=function(e,t){return this.appendField(e,f.BufferViewFloat64,t),this},t.u8=function(e,t){return this.appendField(e,f.BufferViewUint8,t),this},t.u16=function(e,t){return this.appendField(e,f.BufferViewUint16,t),this},t.i8=function(e,t){return this.appendField(e,f.BufferViewInt8,t),this},t.vec2i8=function(e,t){return this.appendField(e,f.BufferViewVec2i8,t),this},t.vec2i16=function(e,t){return this.appendField(e,f.BufferViewVec2i16,t),this},t.vec2u8=function(e,t){return this.appendField(e,f.BufferViewVec2u8,t),this},t.vec4u16=function(e,t){return this.appendField(e,f.BufferViewVec4u16,t),this},t.u32=function(e,t){return this.appendField(e,f.BufferViewUint32,t),this},t.appendField=function(e,t,r){const f=t.ElementCount*n.elementTypeSize(t.ElementType),i=this.stride;this.fields.set(e,{size:f,constructor:t,offset:i,optional:r}),this.stride+=f,this.fieldNames.push(e)},t.alignTo=function(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this},t.hasField=function(e){return this.fieldNames.indexOf(e)>=0},t.createBuffer=function(e){return new i(this,e)},t.createView=function(e){return new i(this,e)},t.clone=function(){const t=new e;return t.stride=this.stride,t.fields=new Map,this.fields.forEach(((e,r)=>t.fields.set(r,e))),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t},e}();t.InterleavedBuffer=i,t.InterleavedLayout=u,t.newLayout=function(){return new u},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)},75063:(e,t,r)=>{var f,n;f=[t,r(58797)],void 0===(n=function(e,r){"use strict";let f=function(){function e(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,u):new i(t,u,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var t=e.prototype;return t.getMat=function(e,t){const r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r+e];return t},t.setMat=function(e,t){const r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r+e]=t[e]},t.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},t.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},t.copyFrom=function(e,t,r){const f=this.typedBuffer,n=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let e=0;e<9;++e)f[i+e]=n[u+e]},r._createClass(e,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();f.ElementCount=9,t.BufferViewMat3Impl=f,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)},85986:(e,t,r)=>{var f,n;f=[t,r(58797)],void 0===(n=function(e,r){"use strict";let f=function(){function e(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,u):new i(t,u,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var t=e.prototype;return t.getMat=function(e,t){const r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r+e];return t},t.setMat=function(e,t){const r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r+e]=t[e]},t.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},t.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},t.copyFrom=function(e,t,r){const f=this.typedBuffer,n=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride;for(let e=0;e<16;++e)f[i+e]=n[u+e]},r._createClass(e,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();f.ElementCount=16,t.BufferViewMat4Impl=f,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)},88594:(e,t,r)=>{var f,n;f=[t,r(58797)],void 0===(n=function(e,r){"use strict";let f=function(){function e(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===f&&(f=i.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,u):new i(t,u,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var t=e.prototype;return t.get=function(e){return this.typedBuffer[e*this.typedBufferStride]},t.set=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t},r._createClass(e,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();f.ElementCount=1,t.BufferViewScalarImpl=f,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)},95245:(e,t,r)=>{var f,n;f=[t,r(58797),r(10709)],void 0===(n=function(e,r,f){"use strict";let n=function(){function e(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,u):new i(t,u,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var t=e.prototype;return t.getVec=function(e,t){return f.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1])},t.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1]},t.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},t.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},t.setValues=function(e,t,r){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r},t.copyFrom=function(e,t,r){const f=this.typedBuffer,n=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride;f[i]=n[u],f[i+1]=n[u+1]},r._createClass(e,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();n.ElementCount=2,t.BufferViewVec2Impl=n,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)},82457:(e,t,r)=>{var f,n;f=[t,r(58797),r(16843)],void 0===(n=function(e,r,f){"use strict";let n=function(){function e(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,u):new i(t,u,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var t=e.prototype;return t.getVec=function(e,t){return f.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2])},t.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2]},t.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},t.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},t.setValues=function(e,t,r,f){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=f},t.copyFrom=function(e,t,r){const f=this.typedBuffer,n=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride;f[i]=n[u],f[i+1]=n[u+1],f[i+2]=n[u+2]},r._createClass(e,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();n.ElementCount=3,t.BufferViewVec3Impl=n,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)},19394:(e,t,r)=>{var f,n;f=[t,r(58797),r(89115)],void 0===(n=function(e,r,f){"use strict";let n=function(){function e(e,t,r=0,f,n){this.TypedArrayConstructor=e,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===t.byteLength?0:r;this.typedBuffer=null==n?new i(t,u):new i(t,u,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}var t=e.prototype;return t.getVec=function(e,t){return f.set(t,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])},t.setVec=function(e,t){this.typedBuffer[e*this.typedBufferStride]=t[0],this.typedBuffer[e*this.typedBufferStride+1]=t[1],this.typedBuffer[e*this.typedBufferStride+2]=t[2],this.typedBuffer[e*this.typedBufferStride+3]=t[3]},t.get=function(e,t){return this.typedBuffer[e*this.typedBufferStride+t]},t.set=function(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r},t.setValues=function(e,t,r,f,n){this.typedBuffer[e*this.typedBufferStride]=t,this.typedBuffer[e*this.typedBufferStride+1]=r,this.typedBuffer[e*this.typedBufferStride+2]=f,this.typedBuffer[e*this.typedBufferStride+3]=n},t.copyFrom=function(e,t,r){const f=this.typedBuffer,n=t.typedBuffer,i=e*this.typedBufferStride,u=r*t.typedBufferStride;f[i]=n[u],f[i+1]=n[u+1],f[i+2]=n[u+2],f[i+3]=n[u+3]},r._createClass(e,[{key:"buffer",get:function(){return this.typedBuffer.buffer}}]),e}();n.ElementCount=4,t.BufferViewVec4Impl=n,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)},75858:(e,t,r)=>{var f,n;f=[t,r(74637)],void 0===(n=function(e,r){"use strict";t.elementTypeSize=function(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}},t.isInteger=function(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}},t.isSigned=function(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}},t.maximumValue=function(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,f))||(e.exports=n)}}]);