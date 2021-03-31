import{r as t,h as e,H as a,g as i,c as n}from"./p-0f61cfe6.js";import{g as s,d as r}from"./p-bdd3281d.js";import{C as o}from"./p-28355066.js";import{C as l}from"./p-fe7af860.js";const c=class{constructor(e){t(this,e),this.panelCount=0,this.flowDirection=null,this.panels=[],this.getFlowDirection=(e,t)=>e&&t>1||e>1?t<e?"retreating":"advancing":null,this.updateFlowProps=()=>{const{panels:e}=this,t=Array.from(this.el.querySelectorAll("calcite-panel")),a=e.length,i=t.length,n=t[i-1],s=t[i-2];if(i&&n&&t.forEach((e=>{e.showBackButton=i>1,e.hidden=e!==n})),s&&(s.menuOpen=!1),this.panels=t,a!==i){const e=this.getFlowDirection(a,i);this.panelCount=i,this.flowDirection=e}},this.panelItemObserver=new MutationObserver(this.updateFlowProps)}async back(){const e=this.el.querySelector("calcite-panel:last-child");if(e)return(e.beforeBack?e.beforeBack:()=>Promise.resolve()).call(e).then((()=>(e.remove(),e)))}connectedCallback(){this.panelItemObserver.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){this.panelItemObserver.disconnect()}handleCalcitePanelBackClick(){this.back()}render(){const{flowDirection:t,panelCount:i}=this;return e(a,null,e("div",{class:{frame:!0,"frame--advancing":"advancing"===t,"frame--retreating":"retreating"===t},key:i},e("slot",null)))}get el(){return i(this)}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;width:100%;height:100%;overflow:hidden;position:relative}:host .frame{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;width:100%;padding:0;margin:0;-ms-flex-direction:column;flex-direction:column;position:relative}:host ::slotted(calcite-panel){height:100%}:host .frame--advancing{-webkit-animation:calcite-frame-advance 150ms ease-in-out;animation:calcite-frame-advance 150ms ease-in-out}:host .frame--retreating{-webkit-animation:calcite-frame-retreat 150ms ease-in-out;animation:calcite-frame-retreat 150ms ease-in-out}@-webkit-keyframes calcite-frame-advance{0%{--bg-opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-advance{0%{--bg-opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes calcite-frame-retreat{0%{--bg-opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--bg-opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}";const d=class{constructor(e){t(this,e),this.calcitePanelDismissedChange=n(this,"calcitePanelDismissedChange",7),this.calcitePanelScroll=n(this,"calcitePanelScroll",7),this.calcitePanelBackClick=n(this,"calcitePanelBackClick",7),this.dismissed=!1,this.disabled=!1,this.dismissible=!1,this.headingLevel=3,this.showBackButton=!1,this.loading=!1,this.menuOpen=!1,this.setContainerRef=e=>{this.containerEl=e},this.setDismissRef=e=>{this.dismissButtonEl=e},this.setBackRef=e=>{this.backButtonEl=e},this.panelKeyUpHandler=e=>{"Escape"===e.key&&this.dismiss()},this.dismiss=()=>{this.dismissed=!0},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.backButtonClick=()=>{this.calcitePanelBackClick.emit()}}dismissedHandler(){this.calcitePanelDismissedChange.emit()}async setFocus(e){var t,a,i;"dismiss-button"!==e?"back-button"!==e?null===(i=this.containerEl)||void 0===i||i.focus():null===(a=this.backButtonEl)||void 0===a||a.setFocus():null===(t=this.dismissButtonEl)||void 0===t||t.setFocus()}renderBackButton(){const{el:t}=this,a="rtl"===s(t),{showBackButton:i,intlBack:n,backButtonClick:r}=this,o=n||"Back";return i?e("calcite-action",{"aria-label":o,class:"back-button",icon:a?"chevron-right":"chevron-left",key:"back-button",onClick:r,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:o}):null}renderHeaderContent(){const{heading:t,headingLevel:a,summary:i}=this,n=t?e(l,{class:"heading",level:a},t):null,s=i?e("span",{class:"summary"},i):null;return n||s?e("div",{class:"header-content",key:"header-content"},n,s):null}renderHeaderSlottedContent(){return e("div",{class:"header-content",key:"header-content"},e("slot",{name:"header-content"}))}renderHeaderStartActions(){const{el:t}=this;return r(t,"header-actions-start")?e("div",{class:{"header-actions--start":!0,"header-actions":!0},key:"header-actions-start"},e("slot",{name:"header-actions-start"})):null}renderHeaderActionsEnd(){const{dismiss:t,dismissible:a,el:i,intlClose:n}=this,s=n||"Close",o=a?e("calcite-action",{"aria-label":s,icon:"x",onClick:t,ref:this.setDismissRef,text:s}):null,l=e("slot",{name:"header-actions-end"});return r(i,"header-actions-end")||o?e("div",{class:{"header-actions--end":!0,"header-actions":!0},key:"header-actions-end"},l,o):null}renderMenu(){const{el:t,intlOptions:a,menuOpen:i}=this;return r(t,"header-menu-actions")?e("calcite-action-menu",{flipPlacements:["top","bottom"],intlOptions:a,open:i,placement:"bottom-end"},e("slot",{name:"header-menu-actions"})):null}renderHeaderNode(){const{el:t,showBackButton:a}=this,i=this.renderBackButton(),n=r(t,"header-content")?this.renderHeaderSlottedContent():this.renderHeaderContent(),s=this.renderHeaderStartActions(),o=this.renderHeaderActionsEnd(),l=this.renderMenu();return s||n||o||l||a?e("header",{class:"header"},i,s,n,o,l):null}renderFooterSlottedContent(){const{el:t}=this;return r(t,"footer")?e("footer",{class:"footer"},e("slot",{name:"footer"})):null}renderFooterActions(){const{el:t}=this;return r(t,"footer-actions")?e("footer",{class:"footer"},e("slot",{name:"footer-actions"})):null}renderContent(){return e("section",{class:"content-container",onScroll:this.panelScrollHandler,tabIndex:0},e("slot",null),this.renderFab())}renderFab(){const{el:t}=this;return r(t,"fab")?e("div",{class:"fab-container"},e("slot",{name:"fab"})):null}render(){const{dismissed:t,disabled:i,dismissible:n,el:r,loading:l,panelKeyUpHandler:c}=this,d="rtl"===s(r),m=e("article",{"aria-busy":l.toString(),class:{container:!0,[o.rtl]:d},hidden:n&&t,onKeyUp:c,ref:this.setContainerRef,tabIndex:n?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderFooterSlottedContent()||this.renderFooterActions());return e(a,null,l||i?e("calcite-scrim",{loading:l},m):m)}get el(){return i(this)}static get watchers(){return{dismissed:["dismissedHandler"]}}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;position:relative;max-height:var(--calcite-panel-max-height);width:var(--calcite-panel-width);max-width:var(--calcite-panel-max-width);min-width:var(--calcite-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, width 150ms ease-in-out;transition:max-height 150ms ease-in-out, width 150ms ease-in-out;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);height:100%;width:100%;padding:0;margin:0}calcite-scrim{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;width:100%;height:100%;pointer-events:none}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:12vw;--calcite-panel-max-width:300px;--calcite-panel-min-width:150px}:host([width-scale=m]){--calcite-panel-width:20vw;--calcite-panel-max-width:420px;--calcite-panel-min-width:240px}:host([width-scale=l]){--calcite-panel-width:45vw;--calcite-panel-max-width:680px;--calcite-panel-min-width:340px}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative;z-index:1}.header{border-bottom:1px solid;-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);-ms-flex-pack:start;justify-content:flex-start;position:-webkit-sticky;position:sticky;top:0;border-bottom-color:var(--calcite-ui-border-3);width:100%;-ms-flex:0 0 auto;flex:0 0 auto;min-height:3rem;z-index:2;width:100%}.header-content{display:block;overflow:hidden;margin-right:auto;padding-top:1rem;padding-bottom:1rem;padding-left:0.75rem;padding-right:0.75rem}.header-content .heading,.header-content .summary{padding:0;display:block;overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis}.header-content .heading{font-weight:var(--calcite-font-weight-bold);margin-top:0;margin-left:0;margin-right:0;margin-bottom:0.25rem;font-size:var(--calcite-font-size-0);line-height:1.375}.header-content .heading:only-child{margin-bottom:0}.header-content .summary{color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);line-height:1.375}.header-actions{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.menu-container:only-child{margin-left:auto}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:10rem;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content-container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.footer{border-top:1px solid;background-color:var(--calcite-ui-foreground-1);border-top-color:var(--calcite-ui-border-3);display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;position:-webkit-sticky;position:sticky;bottom:0;width:100%;-ms-flex:0 0 auto;flex:0 0 auto;min-height:3rem;padding:0.5rem}.calcite--rtl .header-content{margin-left:auto;margin-right:unset}.calcite--rtl .menu-container:only-child{margin-right:auto;margin-left:unset}.fab-container{display:inline-block;position:-webkit-sticky;position:sticky;margin-top:0;margin-bottom:0;margin-left:auto;margin-right:auto;bottom:0;left:0;right:0;z-index:1;padding:0.5rem}";export{c as calcite_flow,d as calcite_panel};