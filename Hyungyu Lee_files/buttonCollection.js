(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[308],{3556:function(e,t,n){"use strict";n.r(t),n.d(t,"ModalDialog",function(){return d});var a=n(3493),i=n(1692),r=n(43),o=n.n(r),s=n(197),c=Object(a.t)({container:{display:"flex"}}),d=function(e){var t,n=!!(e.modal&&e.modal.isValid&&e.modal.props.settingsStore)&&Object(s.e)(e.modal.props.settingsStore.getSettingObject("isModalTabIndexDisabled","boolean"));return e.modal&&e.modal.isValid?o.a.createElement(i.e,{onDismiss:function(){e.modal.dismiss()},isOpen:!0,topOffsetFixed:null!==(t=e.modal.props.isTopOffsetFixed)&&void 0!==t&&t,containerClassName:c.container,titleAriaId:e.modal.props.titleAriaId,isBlocking:e.modal.props.isBlocking,isAlert:e.modal.props.isAlert},o.a.createElement("div",{tabIndex:n&&e.modal.props.preventTabIndex?void 0:-1,onKeyDown:function(t){"Escape"===t.key&&e.modal.isValid&&(t.preventDefault(),t.stopPropagation(),e.modal.dismiss())}},e.modal.props.getContent())):null};t.default=d},3667:function(e,t,n){"use strict";n.r(t),n.d(t,"MarkerCollection",function(){return Y});var a=n(0),i=n(2056),r=n(278),o=n(878),s=n(43),c=n.n(s),d=n(197),l=n(421),u=n(264),f=n(78),p=n(1945),m=n(1934),_=n(3493),h=n(356),b="white",g=function(e){return{root:{display:"inline-block",zIndex:1e6,padding:0,maxWidth:"160px",gapSpace:8,beakWidth:12,calloutMaxWidth:160,styles:{beak:{display:e?"none":"visible"},root:{padding:0}},doNotLayer:!0}}},v=function(e,t,n,a){return{icon:S(e,t,n),iconHovered:{color:"".concat(b)},root:D,rootHovered:I,rootPressed:x,rootFocused:C(a)}},y=function(){return Object(_.t)({textClipping:{overflow:"hidden",whiteSpace:"pre-line",textOverflow:"ellipsis",minWidth:"16px",textAlign:"left",width:"max-content",maxWidth:"144px",padding:8}})},S=function(e,t,n){return n?{"@media screen and (-ms-high-contrast: active)":{color:"Highlight !important",backgroundColor:"HighlightText !important"},color:"".concat(b," !important"),fontSize:e,lineHeight:e,height:e,margin:"".concat(t,"px"),pointerEvents:"auto",fontStyle:"normal"}:{color:"".concat(b," !important"),fontSize:e,lineHeight:e,height:e,margin:"".concat(t,"px"),pointerEvents:"auto",fontStyle:"normal"}},D=Object(a.e)({},{backgroundColor:"unset"}),I={backgroundColor:h.e.Gray160,borderRadius:"50%"},x={backgroundColor:h.e.Gray150,borderRadius:"50%"},C=function(e){return{border:"2px solid "+e,boxSizing:"border-box",borderRadius:"50%",selectors:{"::after":{outline:"none !important"}}}},O="MarkerAriaDescription",w=n(121),E=function(){return Object(_.t)({textClipping:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},textClippingBold:{fontWeight:w.t.semibold,display:"inline"}})},A=n(199),L=function(e){var t,n=e.tooltip,i=(e.isMarkerTooltipBeakHidden,e.customTooltipContent),r=c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{"aria-hidden":"true",className:y().textClipping}," ",(t="<bold>",n.split("</bold>").map(function(e){return e.startsWith(t)?c.a.createElement("div",{className:E().textClippingBold}," ",e.substring(t.length,e.length)," "):e}))," "),i&&i());return c.a.createElement(M,Object(a.e)({},e,{tooltipProps:r}))},k=function(e){var t=e.tooltip,n=e.isMarkerTooltipBeakHidden,i=e.customTooltipContent,r=c.a.useRef(e.customTooltipState);return c.a.createElement(L,Object(a.e)({},e,{tooltip:t,isMarkerTooltipBeakHidden:n,customTooltipContent:function(){return i?i(function(){return r.current},function(e){r.current=e}):c.a.createElement(c.a.Fragment,null)}}))},M=function(e){var t,n=e.options,i=e.id,r=e.ariaLabel,o=e.markerTimeMs,s=e.relativePosition,d=e.isMarkerListItemReadoutFixEnabled,b=e.tooltipToggleHandler,S=e.isFluentMtcEnabled,D=e.onClick,I=e.log,x=e.localization,C=e.pluginIdentifier,w=e.playbackTimeSec,E=e.userActionName,L=e.tooltipProps,k=e.isMarkerTooltipBeakHidden,M=Object(A.e)().semanticColors.focusBorder,T=n.icon,U=c.a.createRef(),F=(t=100*s,Object(_.t)({container:{position:"absolute",left:"calc(".concat(t,"% - ").concat(16,"px)"),bottom:"100%",zIndex:4,pointerEvents:"auto",padding:0}})),H=c.a.useState(!1),R=H[0],N=H[1],B="iconbutton-marker-".concat(i),j=c.a.useRef(void 0),V=c.a.useState(!1),z=V[0],G=V[1];c.a.useEffect(function(){G(!1)}),e.isFluentMtcEnabled&&P(U),document.addEventListener("captureSurveyButtonParentEvent",function(){N(!1)});var K={onFocus:function(){N(!0)},onBlur:function(){N(!1)},onMouseEnter:function(){b(!0),N(!0),void 0!==j.current&&(clearTimeout(j.current),j.current=void 0),C&&I.userAction("PluginButtonAction",Object(a.e)(Object(a.e)({},C),{name:"MarkerHover-".concat(E),playbackTimeSec:w,actionType:"Hover"}))},onMouseLeave:function(){b(!1),j.current=setTimeout(function(){N(!1)},200)},onKeyDown:function(e){"Escape"===e.key&&N(!1)}};return c.a.createElement("div",Object(a.e)({key:"marker-".concat(i),className:F.container,id:"marker-container-".concat(i)},K),c.a.createElement(l.e,{id:B,elementRef:U,styles:v(20,6,S,M),onClick:function(){G(!0),D()},iconProps:{iconName:T,id:"marker-".concat(i)},ariaLabel:r,"aria-description":Object(p.e)(x.getString(O),"Event",Object(m.e)(o)),role:d?"listitem":void 0}),R&&c.a.createElement(u.e,{id:B,styles:g(k),style:{backgroundColor:h.e.Gray170},className:y().textClipping,gapSpace:8,target:"#".concat(B),directionalHint:f.e.topCenter,isBeakVisible:!1,doNotLayer:!0,setInitialFocus:z},L))},P=function(e){c.a.useEffect(function(){var t=function(e){e.preventDefault(),e.stopPropagation()},n=null==e?void 0:e.current;return n&&(n.addEventListener("mousedown",t),n.addEventListener("touchstart",t)),function(){n&&(n.removeEventListener("mousedown",t),n.removeEventListener("touchstart",t))}},[])},T=n(346),U=n(201),F=function(e){return{display:"block",position:"absolute",top:"5px",left:e?"1px":"2px",width:e?"5px":"4px",height:"4px",backgroundColor:"black"}},H=function(e){return{position:"absolute",left:"3px",top:"1px",visibility:e?"visible":"hidden",width:"1px",height:"12px",backgroundColor:"#FFFFFF"}},R={display:"block",width:"9px",height:"14px",background:"linear-gradient(to bottom, transparent 0px, transparent 5px, black 5px, black 9px, transparent 9px, transparent 100%)",maskImage:"linear-gradient(to right, transparent 0px, transparent 3px, white 3px, white 6px, transparent 6px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 1px, white 1px, white 13px, transparent 13px, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0px, transparent 3px, white 3px, white 6px, transparent 6px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 1px, white 1px, white 13px, transparent 13px, transparent 100%)",maskComposite:"intersect",WebkitMaskComposite:"destination-in"},N={display:"block",width:"9px",height:"14px",background:"linear-gradient(to bottom, transparent 0px, transparent 4px, black 4px, black 9px, transparent 9px, transparent 100%)",maskImage:"linear-gradient(to right, transparent 0px, transparent 3px, white 3px, white 6px, transparent 6px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 1px, white 1px, white 13px, transparent 13px, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0px, transparent 3px, white 3px, white 6px, transparent 6px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 1px, white 1px, white 13px, transparent 13px, transparent 100%)",maskComposite:"intersect",WebkitMaskComposite:"copy"},B={background:"linear-gradient(to right, transparent 0px, transparent 4px, white 4px, white 5px, transparent 5px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 5px, black 5px, black 9px, transparent 9px, transparent 100%)",maskImage:"linear-gradient(to right, transparent 0px, transparent 2px, white 2px, white 7px, transparent 7px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 1px, white 1px, white 13px, transparent 13px, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0px, transparent 2px, white 2px, white 7px, transparent 7px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 1px, white 1px, white 13px, transparent 13px, transparent 100%)"},j=function(e){return{outlineColor:e,outlineOffset:"-3px",maskImage:"linear-gradient(to right, transparent 0px, transparent 2px, white 2px, white 7px, transparent 7px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 1px, white 1px, white 13px, transparent 13px, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0px, transparent 2px, white 2px, white 7px, transparent 7px, transparent 100%), linear-gradient(to bottom, transparent 0px, transparent 1px, white 1px, white 13px, transparent 13px, transparent 100%)"}},V=function(e,t){return void 0===t&&(t=!1),{root:t?N:R,rootHovered:B,rootFocused:j(e)}},z=function(e){var t=e.tooltip,n=e.id,i=e.ariaLabel,r=e.markerTimeMs,o=e.relativePosition,s=e.isMarkerListItemReadoutFixEnabled,d=e.isMarkerTooltipBeakHidden,u=e.isTimelineMarkerGradientRenderingEnabled,f=e.isFluentMtcEnabled,h=e.localization,b=e.tooltipToggleHandler,g=e.onClick,v=Object(A.e)().semanticColors.focusBorder,y=function(e,t){return t?Object(_.t)({container:{position:"absolute",left:"".concat(e,"%"),bottom:"auto",zIndex:0,pointerEvents:"auto"}}):Object(_.t)({container:{position:"absolute",left:"".concat(e,"%"),bottom:"auto",zIndex:12}})}(100*o,f),S=Object(a.e)(Object(a.e)({},function(e){return{maxWidth:"160px",calloutProps:{gapSpace:8,backgroundColor:"#292827",beakWidth:12,calloutMaxWidth:160,styles:{beak:{display:e?"none":"visible"},beakCurtain:{backgroundColor:"#292827"}},doNotLayer:!0}}}(d)),{onRenderContent:function(){return c.a.createElement("div",{"aria-hidden":"true",className:E().textClipping}," ",t," ")}});return c.a.createElement("div",{key:"marker-".concat(n),className:y.container,id:"marker-container-".concat(n)},c.a.createElement(T.e,{id:"tooltip-marker-".concat(n),delay:U.e.zero,styles:{root:{display:"block",height:"14px",width:"8px",transform:"translateX(-50%)",zIndex:1e6}},tooltipProps:S,onTooltipToggle:b},u?c.a.createElement(l.e,{styles:V(v,f),onClick:g,id:"marker-".concat(n),role:s?"listitem":void 0,ariaLabel:i,"aria-description":Object(p.e)(h.getString(O),"Chapter",Object(m.e)(r))}):c.a.createElement("div",{style:{display:"block",height:"100%",width:"100%"},onMouseEnter:function(){var e=document.getElementById("marker-".concat(n)),t=F(!0);e&&(e.style.width=String(t.width),e.style.left=String(t.left));var a=document.getElementById("timeline-marker-snap-pointer-".concat(n));a&&(a.style.visibility=String(H(!0).visibility))},onMouseLeave:function(){var e=document.getElementById("marker-".concat(n)),t=F(!1);e&&(e.style.width=String(t.width),e.style.left=String(t.left));var a=document.getElementById("timeline-marker-snap-pointer-".concat(n));a&&(a.style.visibility=String(H(!1).visibility))}},c.a.createElement("div",{id:"marker-".concat(n),style:F(!1),tabIndex:0,role:s?"listitem":"button","aria-label":i,"data-is-focusable":!0,onClick:g}),c.a.createElement("div",{id:"timeline-marker-snap-pointer-".concat(n),style:H(!1)}))))},G=function(e){return c.a.createElement(c.a.Fragment,null,e.isFirstVisibleMarker&&0!==e.markerTimeMs&&c.a.createElement(K,{id:-1,relativePosition:0,relativeWidth:e.relativePosition,isLastSegment:!1,hoveringTimelineMarkerId:e.hoveringTimelineMarkerId,setHoveringTimelineMarkerId:e.setHoveringTimelineMarkerId}),c.a.createElement(K,{id:e.id,relativePosition:e.relativePosition,relativeWidth:e.relativeWidth,isLastSegment:e.isLastVisibleMarker,onClick:e.onClick,hoveringTimelineMarkerId:e.hoveringTimelineMarkerId,setHoveringTimelineMarkerId:e.setHoveringTimelineMarkerId}))},K=function(e){var t=c.a.useState(!1),n=t[0],a=t[1],i=e.hoveringTimelineMarkerId===e.id,r=function(e,t,n,a,i){return Object(_.t)({markerContainer:{position:"absolute",left:"".concat(e,"%"),width:"calc(".concat(t,"% - ").concat(n?"0px":"3px",")"),bottom:"auto"},segmentContainer:{position:"absolute",width:"100%",height:"14px",zIndex:a?-1:0,pointerEvents:a?"none":"auto"},segment:{position:"relative",display:"block",height:a?"8px":"4px",top:a?"3px":"5px",borderRadius:a?"2px":"10px",backgroundColor:"rgba(256, 256, 256, 0.5)"},marker:{position:"absolute",display:"block",width:"7px",height:"14px",transform:"translateX(-3px)",bottom:"auto",zIndex:0,pointerEvents:"auto"},snapPointer:{position:"absolute",left:"3px",top:"1px",visibility:i?"visible":"hidden",width:"1px",height:"12px",backgroundColor:"#FFFFFF"}})}(100*e.relativePosition,100*e.relativeWidth,e.isLastSegment,i,n);return c.a.createElement("div",{key:"range-marker-container-".concat(e.id),id:"range-marker-container-".concat(e.id),className:r.markerContainer},c.a.createElement("div",{className:r.marker,id:"range-marker-".concat(e.id),onClick:e.onClick,onMouseEnter:function(){a(!0),e.setHoveringTimelineMarkerId(e.id)},onMouseLeave:function(){a(!1)}},c.a.createElement("div",{id:"range-marker-snap-pointer-".concat(e.id),className:r.snapPointer})),c.a.createElement("div",{id:"segment-container-".concat(e.id),className:r.segmentContainer,onMouseEnter:function(){e.setHoveringTimelineMarkerId(e.id)}},c.a.createElement("div",{id:"segment-".concat(e.id),className:r.segment})))},W=function(e){return c.a.createElement(Q,Object(a.e)({},e))},q=function(e){return c.a.createElement(Q,Object(a.e)({},e))},Q=function(e){if(!e.isVisible)return null;switch(e.options.type){case"AboveTimeline":return e.customTooltipState?c.a.createElement(k,Object(a.e)({},e,{options:e.options})):c.a.createElement(L,Object(a.e)({},e,{options:e.options}));case"OnTimelineRange":var t=e;return c.a.createElement(G,Object(a.e)({},t));default:return c.a.createElement(z,Object(a.e)({},e))}},Y=function(e){var t=Object(d.e)(e.settingsStore.getSettingObject("isMarkerHidingOnSmallScreensEnabled","boolean")),n=Object(d.e)(e.settingsStore.getSettingObject("isMarkerTooltipBeakHidden","boolean")),s=Object(d.e)(e.settingsStore.getSettingObject("isMarkerClickLoggingInsidePlatformEnabled","boolean")),l=Object(d.e)(e.settingsStore.getSettingObject("isTimelineMarkerGradientRenderingEnabled","boolean")),u=Object(d.e)(e.settingsStore.getSettingObject("isMarkerCollisionLogicEnabled","boolean")),f=Object(d.e)(e.settingsStore.getSettingObject("isBasicPOICollisionHandlingEnabled","boolean")),p=e.settingsStore.getSetting("isRangeMarkerFeatureEnabled","boolean"),m=c.a.useState(new Set),_=m[0],h=(m[1],c.a.useState(e.videoRegionWidth.value)),b=h[0],g=h[1],v=c.a.useState(void 0),y=v[0],S=v[1];c.a.useEffect(function(){if(t&&e.videoRegionWidth){var n=Object(i.t)(function(){e.videoRegionWidth&&g(e.videoRegionWidth.value)},200);return e.videoRegionWidth.subscribe(n)}},[t,e.videoRegionWidth]);var D=c.a.useMemo(function(){return Object(a.c)([],e.components,!0).sort(function(e,t){return e.timeMs-t.timeMs})},[e.components]),I=Object(d.e)(e.settingsStore.getSettingObject("isMarkerListItemReadoutFixEnabled","boolean"));c.a.useEffect(function(){var t;return p&&e.isSeekBarHovering&&(t=e.isSeekBarHovering.subscribe(function(e){e||S(void 0)})),function(){p&&t&&t()}},[]),c.a.useEffect(function(){if(p&&e.setSeekBarRailVisibility){var t=D.some(function(e){return"OnTimelineRange"===e.props.markerOptions.type&&!0===e.isVisible});e.setSeekBarRailVisibility(!t)}},[D]);var x=[];c.a.useMemo(function(){if(u){var t=function(t){return t*b/e.videoLengthInMs};[["AboveTimeline",36],["OnTimeline",9]].forEach(function(n){var i=n[0],r=n[1],o=D.filter(function(e){return e.props.markerOptions.type===i});if(o.length){x.push(o[0]);var s=o[0];o.slice(1).forEach(function(n){t(n.timeMs)-t(s.timeMs)<r&&n.pluginIdentifier&&!_.has(n.id)&&(!n.props.videoContainerWidthThreshold||b>n.props.videoContainerWidthThreshold)?(e.log.appLogic("PluginAppLogic",Object(a.e)({name:"MarkerCollision".concat(i,"-").concat(n.props.userActionLoggingInfo.userActionName),message:JSON.stringify({markerLeft:s.props.userActionLoggingInfo.userActionName,markerRight:n.props.userActionLoggingInfo.userActionName})},n.pluginIdentifier)),_.add(n.id)):"AboveTimeline"!==n.props.markerOptions.type||_.has(n.id)||x.push(n),"OnTimeline"===n.props.markerOptions.type&&x.push(n),s=x[x.length-1]})}})}},[u,D,e.log,e.videoLengthInMs,b,x]);var C=function(i,r){var o,d;if(!(null==i?void 0:i.isVisible)||t&&i.props.videoContainerWidthThreshold&&b<i.props.videoContainerWidthThreshold)return null;var u={isMarkerTooltipBeakHidden:n,isTimelineMarkerGradientRenderingEnabled:l,isMarkerListItemReadoutFixEnabled:I,isVisible:i.isVisible,id:i.id,ariaLabel:i.props.ariaLabel,markerTimeMs:i.props.timeMs,tooltip:i.tooltip,options:i.props.markerOptions,relativePosition:i.timeMs/e.videoLengthInMs,onClick:function(){var t;if(e.currentPlaybackTimeInSeconds.value=i.timeMs/1e3,i.props.onClick(),s&&i.pluginIdentifier){var n=i.props.userActionLoggingInfo.additionalSchema||{};e.log.userAction("PluginButtonAction",Object(a.e)(Object(a.e)(Object(a.e)({name:"MarkerClick-".concat(i.props.userActionLoggingInfo.userActionName)},i.pluginIdentifier),n),{actionType:"LeftClick",playbackTimeSec:null!==(t=e.currentPlaybackTimeInSeconds.value)&&void 0!==t?t:-1}))}},tooltipToggleHandler:e.tooltipToggleHandler,log:e.log,localization:e.localization,pluginIdentifier:i.pluginIdentifier,playbackTimeSec:null!==(o=e.currentPlaybackTimeInSeconds.value)&&void 0!==o?o:-1,userActionName:i.props.userActionLoggingInfo.userActionName,isFluentMtcEnabled:e.isFluentMtcEnabled};return p&&"OnTimelineRange"===i.props.markerOptions.type&&void 0!==r&&(u=function(e,t,n,i,r,o,s){for(var c=function(e){return"OnTimelineRange"===e.props.markerOptions.type&&!0===e.isVisible},d=n.slice(t+1),l=d.findIndex(c),u=-1,f=t-1;f>=0;f--)if(c(n[f])){u=f;break}var p=-1===l,m=((p?r:d[l].timeMs)-e.timeMs)/r;return Object(a.e)(Object(a.e)({},i),{options:{type:"OnTimelineRange"},relativeWidth:m,isFirstVisibleMarker:-1===u,isLastVisibleMarker:p,hoveringTimelineMarkerId:o,setHoveringTimelineMarkerId:s})}(i,r,D,u,e.videoLengthInMs,y,S)),(null===(d=i.props)||void 0===d?void 0:d.customTooltipState)?c.a.createElement(W,Object(a.e)({key:"marker-".concat(i.id)},u,{customTooltipContent:i.props.customTooltipContent,customTooltipState:i.props.customTooltipState})):c.a.createElement(q,Object(a.e)({key:"marker-".concat(i.id)},u,{customTooltipContent:i.props.customTooltipContent}))};return e.showLoadingUi?null:(D=f?x:D,c.a.useMemo(function(){D.sort(function(e,t){return e.timeMs-t.timeMs})},[D]),I?c.a.createElement(r.e,{direction:1,onKeyDown:function(e){if("Tab"===e.key){var t=e.currentTarget.querySelectorAll('[role="listitem"]');t.forEach(function(e,t){e.setAttribute("tabIndex",t?"-1":"0")}),t[0].focus()}},role:"list"},D.map(function(e,t){return C(e,t)})):c.a.createElement(r.e,{direction:1},c.a.createElement(o.e,{items:D,onRenderCell:C})))};t.default=Y},3732:function(e,t,n){"use strict";n.r(t),n.d(t,"ButtonCollection",function(){return m});var a=n(0),i=n(2056),r=n(198),o=n(346),s=n(201),c=n(192),d=n(648),l=n(43),u=n.n(l),f=n(197),p=n(3493),m=function(e){var t=u.a.useState(screen.width),n=t[0],l=t[1],m=Object(p.t)({container:{display:"flex",justifyContent:"flex-end"}}),_=Object(f.e)(e.settingsStore.getSettingObject("isControlBarButtonsLocalizationEnabled","boolean")),h=Object(f.e)(e.settingsStore.getSettingObject("areAriaLabeAndRoleWhenButtonCollectionHasOneChildDisabled","boolean")),b=function(e){var t={},i={},r="";return e&&e.isUnderlined&&(t={content:"''",display:"block",height:"4px",width:"calc(100% - 4px)",margin:"0 2px",position:"absolute",bottom:"-8px",backgroundColor:"rgba(255, 255, 255, 0.5)",boxSizing:"inherit"},i=Object(a.e)(Object(a.e)({},t),{bottom:"-8px !important",top:"unset !important",left:"unset !important",right:"unset !important",outline:"unset !important"}),r="1px solid"),{root:{backgroundColor:"unset",border:0,minWidth:32,padding:0,color:"white",selectors:{"::after":t},display:e&&e.reflowThreshold&&n<e.reflowThreshold?"none":"inline-block"},rootHovered:{backgroundColor:"unset",color:"white"},rootPressed:{backgroundColor:"unset"},rootFocused:{selectors:{"::after":i},outline:r},rootCheckedHovered:{selectors:{"::after":i},backgroundColor:"unset"},rootChecked:{selectors:{"::after":i},backgroundColor:"unset"},icon:{color:"white !important",fontSize:"20px",margin:0},label:{margin:0},iconHovered:{color:"white"}}},g=function(t){return e.components.filter(function(e){return e.props.type===t&&e.isVisible}).map(function(e){var n;return{key:"button-".concat(e.id),text:"Secondary"===t?e.tooltip:"",iconProps:{iconName:e.icon},iconOnly:!0,onClick:y(e.props.onClick,e.userActionName,e.pluginIdentifier),disabled:!e.isEnabled,tooltip:e.tooltip,ariaLabel:e.ariaLabel,isUnderlined:e.isUnderlined,reflowThreshold:e.reflowThreshold,toggle:!!e.props.toggleButtonRole,role:null!==(n=e.props.toggleButtonRole)&&void 0!==n?n:"button","aria-checked":e.props.toggleButtonRole&&"switch"===e.props.toggleButtonRole?e.isUnderlined:null,checked:e.props.toggleButtonRole&&"switch"!==e.props.toggleButtonRole?e.isUnderlined:null}})},v=function(){return g("Primary")};u.a.useEffect(function(){var e=function(){l(Math.min(screen.width,window.innerWidth))},t=Object(i.n)(e,200);return e(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}},[]);var y=function(t,n,i){return function(){var r;t(),i&&e.log.userAction("PluginButtonAction",Object(a.e)(Object(a.e)({name:n},i),{actionType:"LeftClick",playbackTimeSec:null!==(r=e.currentPlaybackTimeInSeconds.value)&&void 0!==r?r:-1}))}},S=h&&1===v().length?void 0:_?e.localization.getString("ControlBarButtonsAriaLabel"):"Control Bar Buttons",D=h&&1===v().length?void 0:"menubar";return v().length>0?u.a.createElement("div",{className:m.container},u.a.createElement(d.e,{vertical:e.vertical,"aria-label":S,role:D,items:v(),overflowItems:g("Secondary"),onRenderOverflowButton:function(e){return u.a.createElement(c.e,{role:"menuitem",title:"More items",styles:b(),menuIconProps:{iconName:r.e.More,styles:{root:{color:"white !important"}}},menuProps:{items:e}})},onRenderItem:function(e){var t=b(e),n={root:{display:t.root.valueOf().display,zIndex:1e6}};return u.a.createElement(o.e,{delay:s.e.zero,content:e.tooltip,id:"tooltip-".concat(e.key),styles:n,calloutProps:{doNotLayer:!0}},u.a.createElement(c.e,Object(a.e)({},e,{styles:t})))}})):null};t.default=m}}]);