(self.webpackChunkh2oc=self.webpackChunkh2oc||[]).push([[9333],{71417:(e,t,n)=>{var i,r;i=[t,n(73227),n(49707)],void 0===(r=function(e,n,i){"use strict";const r={ar:[".",","],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function l(e){e||(e=i.getLocale());let t=e in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[n,l,o="#,##0.###"]=r[e];return{decimal:n,group:l,pattern:o}}const o=/[#0,]*[#0](?:\.0*#*)?/;function s(e){const t=l((e=e||{}).locale),i=e.pattern||t.pattern,r=t.group,s=t.decimal;let u=1;if(-1!==i.indexOf("%"))u/=100;else if(-1!==i.indexOf("‰"))u/=1e3;else if(-1!==i.indexOf("¤"))throw new Error("currency notation not supported");const d=i.split(";");return 1===d.length&&d.push("-"+d[0]),{regexp:c(d,(function(t){return(t="(?:"+n.escapeRegExpString(t,".")+")").replace(o,(function(t){const n={signed:!1,separator:e.strict?r:[r,""],fractional:e.fractional,decimal:s,exponent:!1},i=t.split(".");let l=e.places;1===i.length&&1!==u&&(i[1]="###"),1===i.length||0===l?n.fractional=!1:(void 0===l&&(l=e.pattern?i[1].lastIndexOf("0")+1:1/0),l&&null==e.fractional&&(n.fractional=!0),!e.places&&l<i[1].length&&(l+=","+i[1].length),n.places=l);const o=i[0].split(",");return o.length>1&&(n.groupSize=o.pop().length,o.length>1&&(n.groupSize2=o.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=a(e),n=c(e.fractional,(function(t){let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+c(e.exponent,(function(t){return t?"([eE]"+a({signed:e.eSigned})+")":""}))}(n)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:r,decimal:s,factor:u}}function a(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",c(e.signed,(function(e){return e?"[-+]":""}),!0)+c(e.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=n.escapeRegExpString(t))?t="\\s":" "===t&&(t="\\s\\xa0");const i=e.groupSize,r=e.groupSize2;if(r){const e="(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*["+t+"]\\d{"+i+"})";return i-r>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(i-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(i-1)+"}(?:["+t+"]\\d{"+i+"})*)"}),!0)}const c=function(e,t,n){if(!(e instanceof Array))return t(e);const i=[];for(let n=0;n<e.length;n++)i.push(t(e[n]));return u(i.join("|"),n)},u=function(e,t){return"("+(t?"?:":"")+e+")"};t._parseInfo=s,t.format=function(e,t){const n=l((t={...t}).locale);t.customs=n;const i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const i=(n=n||{}).customs.group,r=n.customs.decimal,l=t.split(";"),s=l[0];if(-1!==(t=l[e<0?1:0]||"-"+s).indexOf("%"))e*=100;else if(-1!==t.indexOf("‰"))e*=1e3;else{if(-1!==t.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==t.indexOf("E"))throw new Error("exponential notation not supported")}const a=o,c=s.match(a);if(!c)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(a,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const i=t.split("."),r="string"==typeof n.places&&n.places.indexOf(",");let l=n.places;r?l=n.places.substring(r+1):l>=0||(l=(i[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(l))));const o=String(Math.abs(e)).split("."),s=o[1]||"";if(i[1]||n.places){r&&(n.places=n.places.substring(0,r));const e=void 0!==n.places?n.places:i[1]&&i[1].lastIndexOf("0")+1;e>s.length&&(o[1]=s.padEnd(Number(e),"0")),l<s.length&&(o[1]=s.substr(0,Number(l)))}else o[1]&&o.pop();const a=i[0].replace(",","");let c=a.indexOf("0");-1!==c&&(c=a.length-c,c>o[0].length&&(o[0]=o[0].padStart(c,"0")),-1===a.indexOf("#")&&(o[0]=o[0].substr(o[0].length-c)));let u,d,f=i[0].lastIndexOf(",");if(-1!==f){u=i[0].length-f-1;const e=i[0].substr(0,f);f=e.lastIndexOf(","),-1!==f&&(d=e.length-f-1)}const p=[];for(let e=o[0];e;){const t=e.length-u;p.push(t>0?e.substr(t):e),e=t>0?e.slice(0,t):"",d&&(u=d,d=void 0)}return o[0]=p.reverse().join(n.group||","),o.join(n.decimal||".")}(e,c[0],{decimal:r,group:i,places:n.places,round:n.round}))}(e,i,t)},t.getCustoms=l,t.parse=function(e,t){const n=s(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;let r=i[1];if(!i[1]){if(!i[2])return NaN;r=i[2],n.factor*=-1}return r=r.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(r)*n.factor},t.regexp=function(e){return s(e).regexp},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,i))||(e.exports=r)},9036:(e,t)=>{var n;void 0===(n=function(e){"use strict";const n=/^\s*"([\S\s]*)"\s*$/,i=/""/g,r=[","," ",";","|","\t"];function l(e,t){const n={},i=e.length;for(let r=0;r<i;r++)n[e[r]]=t[r];return n}function*o(e,t,n){let i=0;for(;i<=e.length;){const r=e.indexOf(t,i),l=e.substring(i,r>-1?r:void 0);i+=l.length+1,n&&!l.trim()||(yield l)}}function s(e,t){return o(e,t,!1)}function a(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}t.inferDelimiter=function(e){const t=e.trim();let n=0,i="";for(const e of r){const r=t.split(e).length;r>n&&(n=r,i=e)}return""===i?null:i},t.parseRows=function*(e,t,r){let o="",c="",u=0,d=[];e:for(;;){const{value:f,done:p}=e.next();if(p)return;const g=s(f,r);t:for(;;){const{value:e,done:t}=g.next();if(t)break t;if(o+=c+e,c="",u+=a(e),u%2==0){if(u>0){const e=n.exec(o);if(!e){d=[],o="",u=0;continue e}d.push(e[1].replace(i,'"'))}else d.push(o);o="",u=0}else c=r}0===u?(yield l(t,d),d=[]):c="\n"}},t.readRowParts=s,t.readRows=function(e){const t=e.includes("\r\n")?"\r\n":"\n";return o(e,t,!0)},Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,[t]))||(e.exports=n)},99333:(e,t,n)=>{var i,r;i=[t,n(74637),n(92231),n(49359),n(4037),n(9720),n(56750),n(23084),n(70272),n(26016),n(40810),n(79928),n(71417),n(5691),n(87547),n(97949),n(115),n(79043),n(21863),n(7604),n(28405),n(9036)],void 0===(r=function(e,n,i,r,l,o,s,a,c,u,d,f,p,g,m,h,y,x,F,b,I,N){"use strict";const w=F.createDrawingInfo("esriGeometryPoint"),_=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],T=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],E=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],v=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,D=["csv"],O=[0,0];let S=function(e,t){this.x=e,this.y=t};const j=function(){const e=p._parseInfo(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return function(r){const l=t.exec(r);if(e.factor=i,!l)return NaN;let o=l[1];if(!l[1]){if(!l[2])return NaN;o=l[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),k="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;let R=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}var t=e.prototype;return t.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},t.load=async function(e,t={}){const[n]=await o.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),i=this._parse(n,e);if(this._queryEngine=this._createQueryEngine(n,i),i.layerDefinition.extent=this._queryEngine.fullExtent,i.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;i.layerDefinition.timeInfo.timeExtent=[e,t]}return i},t.applyEdits=async function(){throw new r("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")},t.queryFeatures=async function(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)},t.queryFeatureCount=async function(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)},t.queryObjectIds=async function(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)},t.queryExtent=async function(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)},t._fetch=async function(e,t){if(!e)throw new r("csv-source:invalid-source","url not defined");const n=l.urlToObject(e);return(await d(n.path,{query:n.query,responseType:"text",signal:t.signal})).data},t._parse=function(e,t){const n=t.parsing||{},o={columnDelimiter:n.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},s=N.readRows(e);let{value:a}=s.next();if(!a)throw new r("csv","CSV is empty",{csv:e});if(a=a.trim(),!n.columnDelimiter){const e=N.inferDelimiter(a);if(!e)throw new r("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");o.columnDelimiter=e}const c=a.split(o.columnDelimiter),u=o.layerDefinition={name:l.getFilename(t.url,D)||"csv",drawingInfo:w,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=this._inferLocationInfo(c);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new r("csv","Unable to identify latitudeField and/or longitudeField from CSV");o.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName}}const d=this._inferFields(s,o.columnDelimiter,c,o.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of d){const n=e.get(t.name.toLowerCase());if(n){const e=t.name;i.mixin(t,n),t.name=e}}}if(u.fields=d,!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(this._fieldsIndex=new h(u.fields),u.timeInfo){const e=u.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(u.timeInfo=null)}return o},t._inferLocationInfo=function(e){let t=null,n=null;const i=t=>e.find((e=>e.toLowerCase()===t));return E.some((e=>(t=i(e),!!t))),T.some((e=>(n=i(e),!!n))),{longitudeFieldName:t,latitudeFieldName:n}},t._inferFields=function(e,t,n,i){const r=[],l=N.parseRows(e,n,t),o=[];e:for(;o.length<10;){const{value:e,done:t}=l.next();if(t)break e;o.push(e)}for(const e of n)if(e===i.longitudeFieldName||e===i.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:e});else{const t=o.map((t=>t[e])),n=this._inferFieldType(t),i={name:e,type:null,alias:e};switch(n){case"integer":i.type="esriFieldTypeInteger";break;case"double":i.type="esriFieldTypeDouble";break;case"date":i.type="esriFieldTypeDate",i.length=36;break;default:i.type="esriFieldTypeString",i.length=255}r.push(i)}return r},t._inferFieldType=function(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let n=!1;if(""!==e){if(t.test(e))n=!0;else{let t=j(e);if(!isNaN(t))return/[.,]/.test(e)||!k(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))},t._isValidDate=function(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let i=!0;if(n("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,n=0;for(;!t&&n<=e.length;)t=!v.test(e[n]),n++;i=!t}}return i},t._createQueryEngine=function(e,t){const{latitudeFieldName:n,longitudeFieldName:i}=t.locationInfo,{objectIdField:r,fields:l,extent:o,timeInfo:u}=t.layerDefinition;let d=[];const p=[],h=new Set,x=new Set,F=[];for(const{name:e,type:t}of l)"esriFieldTypeDate"===t?h.add(e):_.indexOf(t)>-1&&x.add(e),e!==r&&F.push(e);let w=0;const T=N.readRows(e);T.next();const E=N.parseRows(T,F,t.columnDelimiter);e:for(;;){const{value:e,done:t}=E.next();if(t)break e;const l=this._parseCoordinateValue(e[n]),o=this._parseCoordinateValue(e[i]);if(null!=o&&null!=l&&!isNaN(l)&&!isNaN(o)){e[n]=l,e[i]=o;for(const t in e)if(t!==n&&t!==i)if(h.has(t)){const n=new Date(e[t]);e[t]=this._isValidDate(n,e[t])?n.getTime():null}else if(x.has(t)){const n=j(e[t]);isNaN(n)?e[t]=null:e[t]=n}e[r]=w,w++,d.push(new S(o,l)),p.push(e)}}if(!s.equals({wkid:4326},o.spatialReference))if(s.isWebMercator(o.spatialReference))for(const e of d)[e.x,e.y]=c.lngLatToXY(e.x,e.y,O);else d=f.projectMany(y.jsonAdapter,d,a.WGS84,o.spatialReference,null);const v=new b({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),D=new I.default({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:u,objectIdField:r,spatialReference:o.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:v}),k=[];for(let e=0;e<d.length;e++){const{x:t,y:n}=d[e],i=p[e];i[r]=e+1,k.push(new g(new m([],[t,n]),i,null,i[r]))}return v.addMany(k),D},t._parseCoordinateValue=function(e){if(null==e||""===e)return null;let t=j(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},t._checkProjection=async function(e){try{await x.checkProjectionSupport(s.WGS84,e)}catch{throw new r("csv-layer","Projection not supported")}},e}();t.csvLatitudeFieldNames=T,t.csvLongitudeFieldNames=E,t.default=R,Object.defineProperty(e,"__esModule",{value:!0})}.apply(t,i))||(e.exports=r)}}]);