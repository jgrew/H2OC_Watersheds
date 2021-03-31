import{r as e,c as a,h as t,H as l,g as c}from"./p-0f61cfe6.js";import{b as i,g as s}from"./p-bdd3281d.js";const r=class{constructor(l){e(this,l),this.calciteLabelFocus=a(this,"calciteLabelFocus",7),this.alignment="start",this.status="idle",this.scale="m",this.layout="default",this.handleCalciteHtmlForClicks=e=>{if(!this.for)return;const a=document.getElementById(this.for);if(!a)return;if(!a.localName.startsWith("calcite"))return;if(e===a)return;if(["button","input","meter","output","progress","select","textarea"].includes(e.localName))return;const l=["calcite-button","calcite-checkbox","calcite-date","calcite-inline-editable","calcite-input","calcite-radio","calcite-radio-button","calcite-radio-button-group","calcite-radio-group","calcite-rating","calcite-select","calcite-slider","calcite-switch"];if(!l.includes(e.localName)){for(let a=0;a<l.length;a++)if(e.closest(l[a]))return;a.click()}}}disabledWatcher(){this.disabled&&this.setDisabledControls()}onClick(e){const a=e.target;this.calciteLabelFocus.emit({labelEl:this.el,interactedEl:a,requestedInput:this.for}),this.handleCalciteHtmlForClicks(a)}componentDidLoad(){this.disabled&&this.setDisabledControls()}render(){const e=i(this.el,["disabled","id","layout","scale","status","theme"]),a=s(this.el);return t(l,{dir:a},t("label",Object.assign({},e,{ref:e=>this.labelEl=e}),t("slot",null)))}setDisabledControls(){var e;null===(e=this.labelEl)||void 0===e||e.childNodes.forEach((e=>{e.nodeName.includes("CALCITE")&&e.setAttribute("disabled","")}))}get el(){return c(this)}static get watchers(){return{disabled:["disabledWatcher"]}}};r.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-label:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-label-h{display:none}[alignment=start].sc-calcite-label-h,[alignment=end][dir=rtl].sc-calcite-label-h{text-align:left}[alignment=end].sc-calcite-label-h,[alignment=start][dir=rtl].sc-calcite-label-h{text-align:right}[alignment=center].sc-calcite-label-h{text-align:center}[scale=s].sc-calcite-label-h{--calcite-label-margin-bottom:12px}[scale=s].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--2)}[scale=m].sc-calcite-label-h{--calcite-label-margin-bottom:14px}[scale=m].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size--1)}[scale=l].sc-calcite-label-h{--calcite-label-margin-bottom:18px}[scale=l].sc-calcite-label-h label.sc-calcite-label{font-size:var(--calcite-font-size-1)}.sc-calcite-label-h label.sc-calcite-label{cursor:pointer;width:100%;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0;line-height:1.3}[layout=default].sc-calcite-label-h label.sc-calcite-label{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}[layout=inline].sc-calcite-label-h label.sc-calcite-label,[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:0.75rem}[layout=inline-space-between].sc-calcite-label-h label.sc-calcite-label{-ms-flex-pack:justify;justify-content:space-between}[disabled].sc-calcite-label-h>label.sc-calcite-label{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*{pointer-events:none}.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled],.sc-calcite-label-h[disabled] .sc-calcite-label-s>*[disabled] *{opacity:1}.sc-calcite-label-h[disabled] .sc-calcite-label-s>calcite-input-message:not([active]){opacity:0}[status=invalid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-danger)}[status=valid].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[status=idle].sc-calcite-label-h label.sc-calcite-label{color:var(--calcite-ui-text-2)}[disable-spacing].sc-calcite-label-h label.sc-calcite-label{gap:0;margin:0}";export{r as calcite_label};