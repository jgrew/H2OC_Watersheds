var __awaiter=this&&this.__awaiter||function(t,e,r,o){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,n){function a(t){try{l(o.next(t))}catch(t){n(t)}}function s(t){try{l(o.throw(t))}catch(t){n(t)}}function l(t){t.done?r(t.value):i(t.value).then(a,s)}l((o=o.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,o,i,n,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(t){return function(e){return l([t,e])}}function l(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,o=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==n[0]&&2!==n[0])){a=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){a.label=n[1];break}if(6===n[0]&&a.label<i[1]){a.label=i[1],i=n;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(n);break}i[2]&&a.ops.pop(),a.trys.pop();continue}n=e.call(t,a)}catch(t){n=[6,t],o=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js","./p-f1259a9b.system.js"],(function(t){"use strict";var e,r,o,i,n,a,s,l,c;return{setters:[function(t){e=t.r,r=t.c,o=t.h,i=t.H,n=t.g},function(t){a=t.h,s=t.g,l=t.c},function(t){c=t.g}],execute:function(){t("calcite_radio_group",function(){function t(t){var o=this;e(this,t),this.calciteRadioGroupChange=r(this,"calciteRadioGroupChange",7),this.appearance="solid",this.layout="horizontal",this.scale="m",this.width="auto",this.hiddenInput=function(){var t=document.createElement("input");return t.type="hidden",o.el.appendChild(t),t}()}return t.prototype.handleNameChange=function(t){this.hiddenInput.name=t},t.prototype.handleSelectedItemChange=function(t,e){if(t!==e){var r=this.getItems(),o=Array.from(r).filter((function(e){return e===t})).pop();o?(this.selectItem(o),this.calciteRadioGroupChange.emit(o.value)):r[0]&&(r[0].tabIndex=0)}},t.prototype.connectedCallback=function(){var t=this.getItems(),e=Array.from(t).filter((function(t){return t.checked})).pop();e?this.selectItem(e):t[0]&&(t[0].tabIndex=0);var r=this.hiddenInput,o=this.name;o&&(r.name=o),e&&(r.value=e.value)},t.prototype.componentDidLoad=function(){this.hasLoaded=!0},t.prototype.render=function(){return o(i,{role:"radiogroup",tabIndex:this.disabled?-1:null},o("slot",null))},t.prototype.handleLabelFocus=function(t){a(t.detail.labelEl,this.el)&&this.setFocus()},t.prototype.handleClick=function(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)},t.prototype.handleSelected=function(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))},t.prototype.handleKeyDown=function(t){var e=c(t.key),r=this.el,o=this.selectedItem;if(-1!==["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(e)){var i=e;"rtl"===s(r)&&("ArrowRight"===e&&(i="ArrowLeft"),"ArrowLeft"===e&&(i="ArrowRight"));var n=this.getItems(),a=-1;switch(n.forEach((function(t,e){t===o&&(a=e)})),i){case"ArrowLeft":case"ArrowUp":t.preventDefault();var l=a<1?n.item(n.length-1):n.item(a-1);return void this.selectItem(l);case"ArrowRight":case"ArrowDown":t.preventDefault();var u=-1===a?n.item(1):n.item(a+1)||n.item(0);return void this.selectItem(u);case" ":return t.preventDefault(),void this.selectItem(t.target);default:return}}},t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){return null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus(),[2]}))}))},t.prototype.getItems=function(){return this.el.querySelectorAll("calcite-radio-group-item")},t.prototype.selectItem=function(t){if(t!==this.selectedItem){var e=this.getItems(),r=null;e.forEach((function(e){var o=e.value===t.value;(o&&!e.checked||!o&&e.checked)&&(e.checked=o),e.tabIndex=o?0:-1,o&&(r=e)})),this.selectedItem=r,this.syncWithInputProxy(r),r&&r.focus()}},t.prototype.syncWithInputProxy=function(t){this.hiddenInput.value=t?t.value:""},Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{border:1px solid;display:-ms-flexbox;display:flex;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host([width=full]){width:100%}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:flex-start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}:host([disabled]){opacity:0.5;pointer-events:none}",t("calcite_radio_group_item",function(){function t(t){e(this,t),this.calciteRadioGroupItemChange=r(this,"calciteRadioGroupItemChange",7),this.checked=!1,this.iconPosition="start",this.mutationObserver=this.getMutationObserver()}return t.prototype.handleCheckedChange=function(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()},t.prototype.connectedCallback=function(){var t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t},t.prototype.disconnectedCallback=function(){this.mutationObserver.disconnect()},t.prototype.componentWillLoad=function(){var t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent},t.prototype.render=function(){var t=this,e=t.checked,r=t.useFallback,n=t.value,a=s(this.el),c=l(this.el,"scale","m"),u=l(this.el,"appearance","solid"),p=l(this.el,"layout","horizontal"),f=o("calcite-icon",{class:"radio-group-item-icon",dir:a,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"});return o(i,{appearance:u,"aria-checked":e.toString(),layout:p,role:"radio",scale:c},o("label",null,this.icon&&"start"===this.iconPosition?f:null,o("slot",null,r?n:""),o("slot",{name:"input"}),this.icon&&"end"===this.iconPosition?f:null))},t.prototype.getMutationObserver=function(){var t=this;return new MutationObserver((function(){return t.syncFromExternalInput()}))},t.prototype.syncFromExternalInput=function(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)},t.prototype.syncToExternalInput=function(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked","true"):this.inputProxy.removeAttribute("checked"))},Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{checked:["handleCheckedChange"]}},enumerable:!1,configurable:!0}),t}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;cursor:pointer;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out}:host label{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;color:var(--calcite-ui-text-3);border:1px solid transparent;margin:4px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;pointer-events:none;display:flex;-ms-flex-align:center;align-items:center}:host([layout=horizontal]) label{-ms-flex-pack:center;justify-content:center}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([scale=s]) label{font-size:var(--calcite-font-size--2);padding:0.25rem 0.75rem}:host([scale=m]) label{font-size:var(--calcite-font-size--1);padding:0.4rem 1rem}:host([scale=l]) label{font-size:var(--calcite-font-size-1);padding:0.5rem 1.5rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand);color:var(--calcite-ui-background);cursor:default}:host([appearance=outline][checked]) label{background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;line-height:inherit;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([icon-position=start]) .radio-group-item-icon{margin-right:0.5rem}:host([icon-position=start][dir=rtl]) .radio-group-item-icon{margin-right:0;margin-left:0.5rem}:host([icon-position=end]) .radio-group-item-icon{margin-left:0.5rem}:host([icon-position=end][dir=rtl]) .radio-group-item-icon{margin-left:0;margin-right:0.5rem}"}}}));