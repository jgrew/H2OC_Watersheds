/*! For license information please see p-b1c5ba32.js.LICENSE.txt */
const s=/(-shadowcsshost)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,t=/(-shadowcsscontext)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,o=/(-shadowcssslotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))?([^,{]*)/gim,n=/-shadowcsshost-no-combinator([^\s]*)/,e=[/::shadow/g,/::content/g],c=/-shadowcsshost/gim,r=/:host/gim,h=/::slotted/gim,a=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,l=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,i=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,g=/([{}])/g,u=(t,s)=>{const e=m(t);let o=0;return e.escapedString.replace(i,((...t)=>{const c=t[2];let r="",n=t[4],l="";n&&n.startsWith("{%BLOCK%")&&(r=e.blocks[o++],n=n.substring(8),l="{");const a=s({selector:c,content:r});return`${t[1]}${a.selector}${t[3]}${l}${a.content}${n}`}))},m=t=>{const s=t.split(g),e=[],o=[];let c=0,r=[];for(let t=0;t<s.length;t++){const n=s[t];"}"===n&&c--,c>0?r.push(n):(r.length>0&&(o.push(r.join("")),e.push("%BLOCK%"),r=[]),e.push(n)),"{"===n&&c++}return r.length>0&&(o.push(r.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:o}},w=(t,s,e)=>t.replace(s,((...t)=>{if(t[2]){const s=t[2].split(","),o=[];for(let c=0;c<s.length;c++){const r=s[c].trim();if(!r)break;o.push(e("-shadowcsshost-no-combinator",r,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]})),p=(t,s,e)=>t+s.replace("-shadowcsshost","")+e,$=(t,s,e)=>s.indexOf("-shadowcsshost")>-1?p(t,s,e):t+s+e+", "+s+" "+t+e,_=(t,s,e,o)=>u(t,(t=>{let r=t.selector,l=t.content;return"@"!==t.selector[0]?r=((t,s,e,o)=>t.split(",").map((t=>o&&t.indexOf("."+o)>-1?t.trim():((t,s)=>!(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(s).test(t))(t,s)?((t,s,e)=>{const o="."+(s=s.replace(/\[is=([^\]]*)\]/g,((t,...s)=>s[0]))),r=t=>{let r=t.trim();if(!r)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)r=((t,s,e)=>{if(c.lastIndex=0,c.test(t)){const s="."+e;return t.replace(n,((t,e)=>e.replace(/([^:]*)(:*)(.*)/,((t,e,o,c)=>e+s+o+c)))).replace(c,s+" ")}return s+" "+t})(t,s,e);else{const s=t.replace(c,"");if(s.length>0){const t=s.match(/([^:]*)(:*)(.*)/);t&&(r=t[1]+o+t[2]+t[3])}}return r},l=(t=>{const s=[];let e,o=0;return e=(t=t.replace(/(\[[^\]]*\])/g,((t,e)=>{const c=`__ph-${o}__`;return s.push(e),o++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,e,c)=>{const r=`__ph-${o}__`;return s.push(c),o++,e+r})),{content:e,placeholders:s}})(t);let a,h="",i=0;const p=/( |>|\+|~(?!=))\s*/g;let d=!((t=l.content).indexOf("-shadowcsshost-no-combinator")>-1);for(;null!==(a=p.exec(t));){const s=a[1],e=t.slice(i,a.index).trim();d=d||e.indexOf("-shadowcsshost-no-combinator")>-1,h+=`${d?r(e):e} ${s} `,i=p.lastIndex}const u=t.substring(i);return d=d||u.indexOf("-shadowcsshost-no-combinator")>-1,h+=d?r(u):u,((t,s)=>s.replace(/__ph-(\d+)__/g,((s,e)=>t[+e])))(l.placeholders,h)})(t,s,e).trim():t.trim())).join(", "))(t.selector,s,e,o):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(l=_(t.content,s,e,o)),{selector:r.replace(/\s{2,}/g," ").trim(),content:l}})),f=(c,n,i)=>{const m=n+"-h",g=n+"-s",f=(t=>t.match(l)||[])(c);c=(t=>t.replace(d,""))(c);const x=[];if(i){const t=t=>{const s=`/*!@___${x.length}___*/`;return x.push({placeholder:s,comment:`/*!@${t.selector}*/`}),t.selector=s+t.selector,t};c=u(c,(s=>"@"!==s.selector[0]?t(s):s.selector.startsWith("@media")||s.selector.startsWith("@supports")||s.selector.startsWith("@page")||s.selector.startsWith("@document")?(s.content=u(s.content,t),s):s))}const b=((c,n,l,i)=>{const d=((t,s)=>{const e="."+s+" > ",c=[];return t=t.replace(o,((...t)=>{if(t[2]){const s=t[2].trim(),o=e+s+t[3];let r="";for(let s=t[4]-1;s>=0;s--){const e=t[5][s];if("}"===e||","===e)break;r=e+r}const n=r+o,l=`${r.trimRight()}${o.trim()}`;return n.trim()!==l.trim()&&c.push({orgSelector:n,updatedSelector:`${l}, ${n}`}),o}return"-shadowcsshost-no-combinator"+t[3]})),{selectors:c,cssText:t}})(c=(s=>w(s,t,$))(c=(t=>w(t,s,p))(c=(t=>t.replace(a,"-shadowcsscontext").replace(r,"-shadowcsshost").replace(h,"-shadowcssslotted"))(c))),i);return c=(t=>e.reduce(((t,s)=>t.replace(s," ")),t))(c=d.cssText),n&&(c=_(c,n,l,i)),{cssText:(c=(c=c.replace(/-shadowcsshost-no-combinator/g,"."+l)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:d.selectors}})(c,n,m,g);return c=[b.cssText,...f].join("\n"),i&&x.forEach((({placeholder:t,comment:s})=>{c=c.replace(t,s)})),b.slottedSelectors.forEach((t=>{c=c.replace(t.orgSelector,t.updatedSelector)})),c};export{f as scopeCss};