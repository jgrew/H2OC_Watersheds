System.register(["./p-4105a996.system.js","./p-7bf86ee3.system.js"],(function(e){"use strict";var t,a,i,r,n,o;return{setters:[function(e){t=e.r,a=e.h,i=e.H,r=e.g,n=e.c},function(e){o=e.d}],execute:function(){var l="content",s="center-row",c="primary-panel",d="shell-header",h="shell-footer";e("calcite_shell",function(){function e(e){t(this,e)}return e.prototype.renderHeader=function(){return o(this.el,d)?a("slot",{name:d}):null},e.prototype.renderContent=function(){return this.contentBehind?this.renderContentBehind():this.renderContentInline()},e.prototype.renderContentBehind=function(){var e;return a("div",{class:(e={},e.content=!0,e["content--behind"]=!!this.contentBehind,e)},a("slot",null))},e.prototype.renderContentInline=function(){return a("div",{class:l},a("slot",null),this.renderCenterRow())},e.prototype.renderCenterRow=function(){return o(this.el,s)?a("slot",{name:s}):null},e.prototype.renderFooter=function(){return o(this.el,h)?a("div",{class:"footer"},a("slot",{name:h})):null},e.prototype.renderMain=function(){var e,t=o(this.el,c),i=((e={}).main=!0,e["main--reversed"]="end"===(null==t?void 0:t.position),e);return a("div",{class:i},a("slot",{name:c}),this.renderContent(),this.contentBehind?this.renderCenterRow():null,a("slot",{name:"contextual-panel"}))},e.prototype.render=function(){return a(i,null,this.renderHeader(),this.renderMain(),this.renderFooter())},Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),e}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{height:100%;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;border-top:1px solid var(--calcite-ui-border-3);border-bottom:1px solid var(--calcite-ui-border-3);-ms-flex-pack:justify;justify-content:space-between;overflow:hidden}.main--reversed{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.content{border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3);height:100%;overflow:auto;width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content ::slotted(calcite-shell-center-row),.content ::slotted(calcite-panel),.content ::slotted(calcite-flow){-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}.content--behind{border:0;display:initial;position:absolute;left:0;right:0;bottom:0;top:0;z-index:0}::slotted(calcite-shell-center-row){width:unset}::slotted(.header .heading){font-weight:var(--calcite-font-weight-normal);font-size:0.875rem;line-height:1.5}::slotted(calcite-shell-panel),::slotted(calcite-shell-center-row){position:relative;z-index:1}slot[name=center-row]::slotted(calcite-shell-center-row:not([detached])){border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3)}::slotted(calcite-tip-manager){border-radius:0.25rem;-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);position:absolute;-webkit-animation:in-up 300ms ease-in-out;animation:in-up 300ms ease-in-out;bottom:var(--calcite-spacing-plus-half);-webkit-box-sizing:border-box;box-sizing:border-box;left:var(--calcite-shell-tip-spacing);right:var(--calcite-shell-tip-spacing);z-index:2}";var p="header";e("calcite_shell_panel",function(){function e(e){t(this,e),this.calciteShellPanelToggle=n(this,"calciteShellPanelToggle",7),this.collapsed=!1,this.detached=!1,this.detachedHeightScale="l",this.widthScale="m"}return e.prototype.watchHandler=function(){this.calciteShellPanelToggle.emit()},e.prototype.render=function(){var e,t=this,r=t.collapsed,n=t.detached,l=t.el,s=t.position,c=o(l,p),d=a("div",{class:(e={},e.content=!0,e["content--detached"]=n,e),hidden:r},c?a("slot",{name:p}):null,a("slot",null)),h=[a("slot",{name:"action-bar"}),d];return"end"===s&&h.reverse(),a(i,null,h)},Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{collapsed:["watchHandler"]}},enumerable:!1,configurable:!0}),e}()).style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;pointer-events:none;--calcite-shell-panel-detached-max-height:unset}::slotted(calcite-panel),::slotted(calcite-flow){height:100%;max-height:unset;max-width:unset;width:100%}.content{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-ui-background);-ms-flex-flow:column nowrap;flex-flow:column nowrap;display:-ms-flexbox;display:flex;padding:0;pointer-events:auto;width:var(--calcite-shell-panel-width);max-width:var(--calcite-shell-panel-max-width);min-width:var(--calcite-shell-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, max-width 150ms ease-in-out;transition:max-height 150ms ease-in-out, max-width 150ms ease-in-out}:host([width-scale=s]) .content{--calcite-shell-panel-width:12vw;--calcite-shell-panel-max-width:300px;--calcite-shell-panel-min-width:150px}:host([width-scale=m]) .content{--calcite-shell-panel-width:20vw;--calcite-shell-panel-max-width:420px;--calcite-shell-panel-min-width:240px}:host([width-scale=l]) .content{--calcite-shell-panel-width:45vw;--calcite-shell-panel-max-width:680px;--calcite-shell-panel-min-width:340px}:host([detached-height-scale=s]) .content--detached{--calcite-shell-panel-detached-max-height:40vh}:host([detached-height-scale=m]) .content--detached{--calcite-shell-panel-detached-max-height:60vh}:host([detached-height-scale=l]) .content--detached{--calcite-shell-panel-detached-max-height:80vh}.content--detached{border-radius:0.25rem;-webkit-box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);box-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);height:auto;overflow:hidden;margin-top:0.5rem;margin-bottom:auto;margin-left:0.5rem;margin-right:0.5rem;max-height:var(--calcite-shell-panel-detached-max-height)}.content--detached ::slotted(calcite-panel),.content--detached ::slotted(calcite-flow){max-height:unset}.content[hidden]{display:none}:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar){border-right:1px solid var(--calcite-ui-border-3)}:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar){border-left:1px solid var(--calcite-ui-border-3)}"}}}));