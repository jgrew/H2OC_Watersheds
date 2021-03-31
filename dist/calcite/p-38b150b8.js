import{h as t,H as s}from"./p-0f61cfe6.js";import{f as i,d as n,g as e,a as r}from"./p-bdd3281d.js";import{d as a}from"./p-7758183a.js";import{g as o}from"./p-0ae16e31.js";import{C as c}from"./p-39515aa9.js";function h(){this.setUpItems(),this.setUpFilter()}const l=["ArrowUp","ArrowDown"];function u(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=a(j.bind(this),0)}function f(){this.observer.observe(this.el,{childList:!0,subtree:!0})}function d(){this.observer.disconnect()}function m(e){const{selectedValues:t}=this,{item:s,value:i,selected:l,shiftPressed:a}=e.detail;l?(this.multiple||this.deselectSiblingItems(s),this.multiple&&a&&this.selectSiblings(s),t.set(i,s)):(t.delete(i),this.multiple&&a&&this.selectSiblings(s,!0)),this.multiple||A(s,l),this.lastSelectedItem=s,this.emitCalciteListChange()}function p(e){e.stopPropagation();const t=e.detail.oldValue,s=this.selectedValues;if(s.has(t)){const i=s.get(t);s.delete(t),s.set(e.detail.newValue,i)}}function b(e){const{key:t,target:s}=e;if(!function(e){return!!l.find((t=>t===e))}(t))return;const{items:a,multiple:n}=this,{length:r}=a,c=a.indexOf(s);if(!r||-1===c)return;e.preventDefault();const d=a[o(c+("ArrowUp"===t?-1:1),r)];A(d,!0),i(d),n||(d.selected=!0)}function j(){this.calciteListChange.emit(this.selectedValues)}function g(e){if(e.defaultPrevented)return;const t=e.target,s=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===t.parentElement.tagName?(t.parentElement.remove(),Array.from(t.parentElement.children).forEach((e=>s.delete(e.value)))):(t.remove(),s.delete(t.value)),this.emitCalciteListChange()}function A(e,t){t?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1")}function v(){const{multiple:e,items:t}=this;if(0!==t.length)return e?t[0].setFocus():(t.find((e=>e.selected))||t[0]).setFocus()}function y(e){this.items=Array.from(this.el.querySelectorAll(e));let t=!1;const{items:s}=this;s.forEach((e=>{e.icon=this.getIconType(),this.multiple||(e.disableDeselect=!0,A(e,!1)),e.selected&&(t=!0,A(e,!0),this.selectedValues.set(e.value,e))}));const[i]=s;!t&&i&&A(i,!0)}function C(e){this.items.forEach((t=>{t.value!==e.value&&(t.toggleSelected(!1),this.selectedValues.has(t.value)&&this.selectedValues.delete(t.value))}))}function O(e,t=!1){if(!this.lastSelectedItem)return;const{items:s}=this,i=s.findIndex((e=>e.value===this.lastSelectedItem.value)),l=s.findIndex((t=>t.value===e.value));s.slice(Math.min(i,l),Math.max(i,l)).forEach((e=>{e.toggleSelected(!t),t?this.selectedValues.delete(e.value):this.selectedValues.set(e.value,e)}))}let w;function F(e){const t=e.detail.map((e=>e.value));w||(w=new Set);const s=this.items.filter((e=>{const s=e.parentElement;s.matches("calcite-pick-list-group")&&w.add(s);const i=t.includes(e.value);return e.hidden=!i,i}));w.forEach((e=>{const t=s.some((t=>e.contains(t)));if(e.hidden=!t,!t)return;const i=n(e,"parent-item");i&&(i.hidden=!1,s.includes(i)&&Array.from(e.children).forEach((e=>e.hidden=!1)))})),w.clear()}function L(){return this.items.map((e=>({label:e.label,description:e.description,metadata:e.metadata,value:e.value})))}const P=i=>{var{props:{disabled:l,loading:a,filterEnabled:n,dataForFilter:o,handleFilter:d,filterPlaceholder:u,el:h}}=i,m=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(i=Object.getOwnPropertySymbols(e);l<i.length;l++)t.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(s[i[l]]=e[i[l]])}return s}(i,["props"]);const f=t("slot",null);return t(s,Object.assign({"aria-busy":a.toString(),"aria-disabled":l.toString(),role:"menu"},m),t("section",null,t("header",{class:{[c.sticky]:!0}},n?t("calcite-filter",{"aria-label":u,data:o,dir:e(h),onCalciteFilterChange:d,placeholder:u}):null,t("slot",{name:"menu-actions"})),a||l?t("calcite-scrim",{loading:a,theme:r(h)},f):f))};export{P as L,f as a,m as b,d as c,C as d,p as e,y as f,L as g,F as h,u as i,v as j,b as k,h as m,g as r,O as s};