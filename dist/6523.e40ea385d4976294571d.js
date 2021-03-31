(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[6523],{71101:(e,t,r)=>{var n,s;n=[t,r(40810),r(10419)],void 0===(s=function(e,r,n){"use strict";t.areasAndLengths=async function(e,t,s){const o=n.parseUrl(e),i={...o.query,f:"json",...t.toJSON()},a=n.asValidOptions(i,s);return r(o.path+"/areasAndLengths",a).then((e=>e.data))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},25840:(e,t,r)=>{var n,s;n=[t,r(50257),r(26016),r(40810),r(10419),r(60915)],void 0===(s=function(e,r,n,s,o,i){"use strict";t.autoComplete=async function(e,t,n,a){const u=t[0].spatialReference,c=o.parseUrl(e),p={...c.query,f:"json",sr:JSON.stringify(u.toJSON()),polygons:JSON.stringify(i.encodeGeometries(t).geometries),polylines:JSON.stringify(i.encodeGeometries(n).geometries)},f=o.asValidOptions(p,a);return s(c.path+"/autoComplete",f).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new r({spatialReference:u,rings:e})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},97147:(e,t,r)=>{var n,s;n=[t,r(50257),r(26016),r(40810),r(10419)],void 0===(s=function(e,r,n,s,o){"use strict";t.buffer=async function(e,t,n){const i=o.parseUrl(e),a={...i.query,f:"json",...t.toJSON()},u=t.outSpatialReference||t.geometries[0].spatialReference,c=o.asValidOptions(a,n);return s(i.path+"/buffer",c).then((e=>(e.data.geometries||[]).map((({rings:e})=>new r({spatialReference:u,rings:e})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},62859:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419),r(60915)],void 0===(s=function(e,r,n,s,o){"use strict";t.convexHull=async function(e,t,i){const a=t[0].spatialReference,u=s.parseUrl(e),c={...u.query,f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t))},p=s.asValidOptions(c,i);return n(u.path+"/convexHull",p).then((({data:e})=>r.fromJSON(e.geometry).set({spatialReference:a})))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},16233:(e,t,r)=>{var n,s;n=[t,r(57167),r(26016),r(40810),r(10419)],void 0===(s=function(e,r,n,s,o){"use strict";t.cut=async function(e,t,n,i){const a=o.parseUrl(e),u=t[0].spatialReference,c={...i,query:{...a.query,f:"json",sr:JSON.stringify(u),target:JSON.stringify({geometryType:r.getJsonType(t[0]),geometries:t}),cutter:JSON.stringify(n)}},p=await s(a.path+"/cut",c),{cutIndexes:f,geometries:l=[]}=p.data;return{cutIndexes:f,geometries:l.map((e=>{const t=r.fromJSON(e);return t.spatialReference=u,t}))}},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},47509:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419)],void 0===(s=function(e,r,n,s){"use strict";t.densify=async function(e,t,o){const i=t.geometries[0].spatialReference,a=s.parseUrl(e),u={...a.query,f:"json",...t.toJSON()},c=s.asValidOptions(u,o);return n(a.path+"/densify",c).then((({data:e})=>(e.geometries||[]).map((e=>r.fromJSON(e).set({spatialReference:i})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},86444:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419),r(60915)],void 0===(s=function(e,r,n,s,o){"use strict";t.difference=async function(e,t,i,a){const u=t[0].spatialReference,c=s.parseUrl(e);let p={query:{...c.query,f:"json",sr:JSON.stringify(u.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t)),geometry:JSON.stringify({geometryType:r.getJsonType(i),geometry:i.toJSON()})}};return a&&(p={...a,...p}),n(c.path+"/difference",p).then((({data:e})=>(e.geometries||[]).map((e=>r.fromJSON(e).set({spatialReference:u})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},76756:(e,t,r)=>{var n,s;n=[t,r(40810),r(10419)],void 0===(s=function(e,r,n){"use strict";t.distance=async function(e,t,s){const o=n.parseUrl(e),i={...o.query,f:"json",...t.toJSON()},a=n.asValidOptions(i,s);return r(o.path+"/distance",a).then((({data:e})=>e&&e.distance))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},97796:(e,t,r)=>{var n,s;n=[t,r(40810),r(10419),r(33727)],void 0===(s=function(e,r,n,s){"use strict";t.fromGeoCoordinateString=async function(e,t,o){const i={};null!=t.sr&&"object"==typeof t.sr?i.sr=t.sr.wkid||JSON.stringify(t.sr):i.sr=t.sr,i.strings=JSON.stringify(t.strings);const a=t.conversionType||"mgrs";i.conversionType=s.conversionTypeKebabDict.toJSON(a),i.conversionMode=t.conversionMode;const u=n.parseUrl(e),c={...u.query,f:"json",...i},p=n.asValidOptions(c,o);return r(u.path+"/fromGeoCoordinateString",p).then((({data:e})=>e.coordinates))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},32208:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419),r(70501),r(96476)],void 0===(s=function(e,r,n,s,o,i){"use strict";t.generalize=async function(e,t,a){const u=(t=i.from(t)).toJSON(),c=o.generalizeToRESTParameters(t),p=s.parseUrl(e),f={...p.query,f:"json",...c},l=u.geometries[0].spatialReference,N=s.asValidOptions(f,a);return n(p.path+"/generalize",N).then((({data:e})=>(e.geometries||[]).map((e=>r.fromJSON(e).set({spatialReference:l})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},72689:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419),r(60915)],void 0===(s=function(e,r,n,s,o){"use strict";t.intersect=async function(e,t,i,a){const u=t[0].spatialReference,c=s.parseUrl(e),p={...c.query,f:"json",sr:JSON.stringify(u.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t)),geometry:JSON.stringify({geometryType:r.getJsonType(i),geometry:i.toJSON()})},f=s.asValidOptions(p,a);return n(c.path+"/intersect",f).then((({data:e})=>(e.geometries||[]).map((e=>r.fromJSON(e).set({spatialReference:u})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},58490:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419)],void 0===(s=function(e,r,n,s){"use strict";t.labelPoints=function(e,t,o){const i=t.map((e=>e.toJSON())),a=t[0].spatialReference,u=s.parseUrl(e),c={...u.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(i)},p=s.asValidOptions(c,o);return n(u.path+"/labelPoints",p).then((({data:e})=>(e.labelPoints||[]).map((e=>r.fromJSON(e).set({spatialReference:a})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},71029:(e,t,r)=>{var n,s;n=[t,r(40810),r(10419),r(82513),r(96005)],void 0===(s=function(e,r,n,s,o){"use strict";t.lengths=async function(e,t,i){t=o.from(t);const a=s.lengthsToRESTParameters(t),u=n.parseUrl(e),c={...u.query,f:"json",...a},p=n.asValidOptions(c,i);return r(u.path+"/lengths",p).then((({data:e})=>e))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},33499:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419),r(42704),r(6258)],void 0===(s=function(e,r,n,s,o,i){"use strict";t.offset=async function(e,t,a){t=i.from(t);const u=o.offsetToRESTParameters(t),c=s.parseUrl(e),p={...c.query,f:"json",...u},f=t.geometries[0].spatialReference,l=s.asValidOptions(p,a);return n(c.path+"/offset",l).then((({data:e})=>(e.geometries||[]).map((e=>r.fromJSON(e).set({spatialReference:f})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},59448:(e,t,r)=>{var n,s;n=[t,r(40810),r(10419),r(56257),r(68534)],void 0===(s=function(e,r,n,s,o){"use strict";t.relation=async function(e,t,i){t=o.from(t);const a=s.relationToRESTParameters(t),u=n.parseUrl(e),c={...u.query,f:"json",...a},p=n.asValidOptions(c,i);return r(u.path+"/relation",p).then((({data:e})=>e.relations))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},17517:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419)],void 0===(s=function(e,r,n,s){"use strict";t.reshape=async function(e,t,o,i){const a=t.spatialReference,u=s.parseUrl(e),c={...u.query,f:"json",sr:JSON.stringify(a.toJSON()),target:JSON.stringify({geometryType:r.getJsonType(t),geometry:t.toJSON()}),reshaper:JSON.stringify(o.toJSON())},p=s.asValidOptions(c,i);return n(u.path+"/reshape",p).then((({data:e})=>r.fromJSON(e.geometry).set({spatialReference:a})))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},13637:(e,t,r)=>{var n,s;n=[t,r(4037),r(57167),r(40810),r(60915)],void 0===(s=function(e,r,n,s,o){"use strict";t.simplify=async function(e,t,i){const a="string"==typeof e?r.urlToObject(e):e,u=t[0].spatialReference,c=n.getJsonType(t[0]),p={...i,query:{...a.query,f:"json",sr:u.wkid?u.wkid:JSON.stringify(u),geometries:JSON.stringify(o.encodeGeometries(t))}},{data:f}=await s(a.path+"/simplify",p);return o.decodeGeometries(f.geometries,c,u)},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},21773:(e,t,r)=>{var n,s;n=[t,r(40810),r(10419),r(33727)],void 0===(s=function(e,r,n,s){"use strict";t.toGeoCoordinateString=async function(e,t,o){const i={};null!=t.sr&&"object"==typeof t.sr?i.sr=t.sr.wkid||JSON.stringify(t.sr):i.sr=t.sr,i.coordinates=JSON.stringify(t.coordinates);const a=t.conversionType||"mgrs";i.conversionType=s.conversionTypeKebabDict.toJSON(a),i.conversionMode=t.conversionMode,i.numOfDigits=t.numOfDigits,i.rounding=t.rounding,i.addSpaces=t.addSpaces;const u=n.parseUrl(e),c={...u.query,f:"json",...i},p=n.asValidOptions(c,o);return r(u.path+"/toGeoCoordinateString",p).then((({data:e})=>e.strings))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},51505:(e,t,r)=>{var n,s;n=[t,r(11446),r(26016),r(40810),r(10419),r(95804),r(66515)],void 0===(s=function(e,r,n,s,o,i,a){"use strict";t.trimExtend=async function(e,t,n){t=a.from(t);const u=i.trimExtendToRESTParameters(t),c=o.parseUrl(e),p={...c.query,f:"json",...u},f=t.sr,l=o.asValidOptions(p,n);return s(c.path+"/trimExtend",l).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new r({spatialReference:f,paths:e})))))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},25270:(e,t,r)=>{var n,s;n=[t,r(57167),r(40810),r(10419),r(60915)],void 0===(s=function(e,r,n,s,o){"use strict";t.union=async function(e,t,i){const a=t[0].spatialReference,u=s.parseUrl(e),c={...u.query,f:"json",sr:JSON.stringify(a.toJSON()),geometries:JSON.stringify(o.encodeGeometries(t))},p=s.asValidOptions(c,i);return n(u.path+"/union",p).then((({data:e})=>r.fromJSON(e.geometry).set({spatialReference:a})))},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,n))||(e.exports=s)},96523:(e,t,r)=>{var n,s;n=[r(58797),r(11285),r(74637),r(73462),r(67059),r(26475),r(99752),r(4037),r(51916),r(18377),r(27398),r(71101),r(25840),r(97147),r(62859),r(16233),r(47509),r(86444),r(76756),r(33727),r(97796),r(32208),r(72689),r(58490),r(71029),r(33499),r(33741),r(59448),r(17517),r(13637),r(21773),r(51505),r(25270)],void 0===(s=function(e,t,r,n,s,o,i,a,u,c,p,f,l,N,_,T,d,I,y,O,S,U,g,E,R,m,A,h,v,J,M,C,j){"use strict";let L=function(t){function r(e){var r;return(r=t.call(this,e)||this).url=null,r}e._inheritsLoose(r,t);var n=r.prototype;return n.areasAndLengths=function(e,t){return f.areasAndLengths(this.url,e,t)},n.autoComplete=function(e,t,r){return l.autoComplete(this.url,e,t,r)},n.buffer=function(e,t){return N.buffer(this.url,e,t)},n.convexHull=function(e,t){return _.convexHull(this.url,e,t)},n.cut=function(e,t,r){return T.cut(this.url,e,t,r)},n.densify=function(e,t){return d.densify(this.url,e,t)},n.difference=function(e,t,r){return I.difference(this.url,e,t,r)},n.distance=function(e,t){return y.distance(this.url,e,t)},n.fromGeoCoordinateString=function(e,t){return S.fromGeoCoordinateString(this.url,e,t)},n.generalize=function(e,t){return U.generalize(this.url,e,t)},n.intersect=function(e,t,r){return g.intersect(this.url,e,t,r)},n.labelPoints=function(e,t){return E.labelPoints(this.url,e,t)},n.lengths=function(e,t){return R.lengths(this.url,e,t)},n.offset=function(e,t){return m.offset(this.url,e,t)},n.project=function(e,t){return A.project(this.url,e,t)},n.relation=function(e,t){return h.relation(this.url,e,t)},n.reshape=function(e,t,r){return v.reshape(this.url,e,t,r)},n.simplify=function(e,t){return J.simplify(this.url,e,t)},n.toGeoCoordinateString=function(e,t){return M.toGeoCoordinateString(this.url,e,t)},n.trimExtend=function(e,t){return C.trimExtend(this.url,e,t)},n.union=function(e,t){return j.union(this.url,e,t)},r}(p);return L.UNIT_METER=9001,L.UNIT_GERMAN_METER=9031,L.UNIT_FOOT=9002,L.UNIT_SURVEY_FOOT=9003,L.UNIT_CLARKE_FOOT=9005,L.UNIT_FATHOM=9014,L.UNIT_NAUTICAL_MILE=9030,L.UNIT_SURVEY_CHAIN=9033,L.UNIT_SURVEY_LINK=9034,L.UNIT_SURVEY_MILE=9035,L.UNIT_KILOMETER=9036,L.UNIT_CLARKE_YARD=9037,L.UNIT_CLARKE_CHAIN=9038,L.UNIT_CLARKE_LINK=9039,L.UNIT_SEARS_YARD=9040,L.UNIT_SEARS_FOOT=9041,L.UNIT_SEARS_CHAIN=9042,L.UNIT_SEARS_LINK=9043,L.UNIT_BENOIT_1895A_YARD=9050,L.UNIT_BENOIT_1895A_FOOT=9051,L.UNIT_BENOIT_1895A_CHAIN=9052,L.UNIT_BENOIT_1895A_LINK=9053,L.UNIT_BENOIT_1895B_YARD=9060,L.UNIT_BENOIT_1895B_FOOT=9061,L.UNIT_BENOIT_1895B_CHAIN=9062,L.UNIT_BENOIT_1895B_LINK=9063,L.UNIT_INDIAN_FOOT=9080,L.UNIT_INDIAN_1937_FOOT=9081,L.UNIT_INDIAN_1962_FOOT=9082,L.UNIT_INDIAN_1975_FOOT=9083,L.UNIT_INDIAN_YARD=9084,L.UNIT_INDIAN_1937_YARD=9085,L.UNIT_INDIAN_1962_YARD=9086,L.UNIT_INDIAN_1975_YARD=9087,L.UNIT_FOOT_1865=9070,L.UNIT_RADIAN=9101,L.UNIT_DEGREE=9102,L.UNIT_ARCMINUTE=9103,L.UNIT_ARCSECOND=9104,L.UNIT_GRAD=9105,L.UNIT_GON=9106,L.UNIT_MICRORADIAN=9109,L.UNIT_ARCMINUTE_CENTESIMAL=9112,L.UNIT_ARCSECOND_CENTESIMAL=9113,L.UNIT_MIL6400=9114,L.UNIT_BRITISH_1936_FOOT=9095,L.UNIT_GOLDCOAST_FOOT=9094,L.UNIT_INTERNATIONAL_CHAIN=109003,L.UNIT_INTERNATIONAL_LINK=109004,L.UNIT_INTERNATIONAL_YARD=109001,L.UNIT_STATUTE_MILE=9093,L.UNIT_SURVEY_YARD=109002,L.UNIT_50KILOMETER_LENGTH=109030,L.UNIT_150KILOMETER_LENGTH=109031,L.UNIT_DECIMETER=109005,L.UNIT_CENTIMETER=109006,L.UNIT_MILLIMETER=109007,L.UNIT_INTERNATIONAL_INCH=109008,L.UNIT_US_SURVEY_INCH=109009,L.UNIT_INTERNATIONAL_ROD=109010,L.UNIT_US_SURVEY_ROD=109011,L.UNIT_US_NAUTICAL_MILE=109012,L.UNIT_UK_NAUTICAL_MILE=109013,L.UNIT_SQUARE_INCHES="esriSquareInches",L.UNIT_SQUARE_FEET="esriSquareFeet",L.UNIT_SQUARE_YARDS="esriSquareYards",L.UNIT_ACRES="esriAcres",L.UNIT_SQUARE_MILES="esriSquareMiles",L.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",L.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",L.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",L.UNIT_SQUARE_METERS="esriSquareMeters",L.UNIT_ARES="esriAres",L.UNIT_HECTARES="esriHectares",L.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",t.__decorate([o.property()],L.prototype,"url",void 0),L=t.__decorate([i.subclass("esri.tasks.GeometryService")],L),L}.apply(t,n))||(e.exports=s)}}]);