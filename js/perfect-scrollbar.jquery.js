!function l(i,s,a){function c(n,t){if(!s[n]){if(!i[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(u)return u(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var o=s[n]={exports:{}};i[n][0].call(o.exports,function(t){var e=i[n][1][t];return c(e||t)},o,o.exports,l,i,s,a)}return s[n].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)c(a[t]);return c}({1:[function(t,e,n){"use strict";var r=t("../main"),o=t("../plugin/instances");function l(t){t.fn.perfectScrollbar=function(n){return this.each(function(){if("object"==typeof n||void 0===n){var t=n;o.get(this)||r.initialize(this,t)}else{var e=n;"update"===e?r.update(this):"destroy"===e&&r.destroy(this)}})}}if("function"==typeof define&&define.amd)define(["jquery"],l);else{var i=window.jQuery?window.jQuery:window.$;void 0!==i&&l(i)}e.exports=l},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";n.add=function(t,e){var n,r,o;t.classList?t.classList.add(e):(r=e,(o=(n=t).className.split(" ")).indexOf(r)<0&&o.push(r),n.className=o.join(" "))},n.remove=function(t,e){var n,r,o,l;t.classList?t.classList.remove(e):(r=e,o=(n=t).className.split(" "),0<=(l=o.indexOf(r))&&o.splice(l,1),n.className=o.join(" "))},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";var r={};r.e=function(t,e){var n=document.createElement(t);return n.className=e,n},r.appendTo=function(t,e){return e.appendChild(t),t},r.css=function(t,e,n){return"object"==typeof e?function(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}(t,e):void 0===n?(i=t,s=e,window.getComputedStyle(i)[s]):(r=t,o=e,"number"==typeof(l=n)&&(l=l.toString()+"px"),r.style[o]=l,r);var r,o,l,i,s},r.matches=function(t,e){return void 0!==t.matches?t.matches(e):void 0!==t.matchesSelector?t.matchesSelector(e):void 0!==t.webkitMatchesSelector?t.webkitMatchesSelector(e):void 0!==t.mozMatchesSelector?t.mozMatchesSelector(e):void 0!==t.msMatchesSelector?t.msMatchesSelector(e):void 0},r.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},r.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return r.matches(t,e)})},e.exports=r},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(e,n){var r=void 0!==n;this.events[e]=this.events[e].filter(function(t){return!(!r||t===n)||(this.element.removeEventListener(e,t,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(e){var t=this.eventElements.filter(function(t){return t.element===e})[0];return void 0===t&&(t=new r(e),this.eventElements.push(t)),t},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var o=t("./class"),r=t("./dom"),l=n.toInt=function(t){return parseInt(t,10)||0},i=n.clone=function(t){if(t){if(t.constructor===Array)return t.map(i);if("object"==typeof t){var e={};for(var n in t)e[n]=i(t[n]);return e}return t}return null};n.extend=function(t,e){var n=i(t);for(var r in e)n[r]=i(e[r]);return n},n.isEditable=function(t){return r.matches(t,"input,[contenteditable]")||r.matches(t,"select,[contenteditable]")||r.matches(t,"textarea,[contenteditable]")||r.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=o.list(t),n=0;n<e.length;n++){var r=e[n];0===r.indexOf("ps-")&&o.remove(t,r)}},n.outerWidth=function(t){return l(r.css(t,"width"))+l(r.css(t,"paddingLeft"))+l(r.css(t,"paddingRight"))+l(r.css(t,"borderLeftWidth"))+l(r.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){o.add(t,"ps-in-scrolling"),void 0!==e?o.add(t,"ps-"+e):(o.add(t,"ps-x"),o.add(t,"ps-y"))},n.stopScrolling=function(t,e){o.remove(t,"ps-in-scrolling"),void 0!==e?o.remove(t,"ps-"+e):(o.remove(t,"ps-x"),o.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),l=t("./plugin/update");e.exports={initialize:o,update:l,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances");e.exports=function(t){var e=l.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),r.removePsClasses(t),l.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";var r=t("../instances"),l=t("../update-geometry"),i=t("../update-scroll");e.exports=function(t){!function(n,r){function o(t){return t.getBoundingClientRect()}var t=function(t){t.stopPropagation()};r.event.bind(r.scrollbarY,"click",t),r.event.bind(r.scrollbarYRail,"click",function(t){var e=t.pageY-window.pageYOffset-o(r.scrollbarYRail).top>r.scrollbarYTop?1:-1;i(n,"top",n.scrollTop+e*r.containerHeight),l(n),t.stopPropagation()}),r.event.bind(r.scrollbarX,"click",t),r.event.bind(r.scrollbarXRail,"click",function(t){var e=t.pageX-window.pageXOffset-o(r.scrollbarXRail).left>r.scrollbarXLeft?1:-1;i(n,"left",n.scrollLeft+e*r.containerWidth),l(n),t.stopPropagation()})}(t,r.get(t))}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";var s=t("../../lib/helper"),a=t("../../lib/dom"),r=t("../instances"),c=t("../update-geometry"),u=t("../update-scroll");function o(o,l){var i=null,e=null;var n=function(t){!function(t){var e=i+t*l.railXRatio,n=Math.max(0,l.scrollbarXRail.getBoundingClientRect().left)+l.railXRatio*(l.railXWidth-l.scrollbarXWidth);l.scrollbarXLeft=e<0?0:n<e?n:e;var r=s.toInt(l.scrollbarXLeft*(l.contentWidth-l.containerWidth)/(l.containerWidth-l.railXRatio*l.scrollbarXWidth))-l.negativeScrollAdjustment;u(o,"left",r)}(t.pageX-e),c(o),t.stopPropagation(),t.preventDefault()},r=function(){s.stopScrolling(o,"x"),l.event.unbind(l.ownerDocument,"mousemove",n)};l.event.bind(l.scrollbarX,"mousedown",function(t){e=t.pageX,i=s.toInt(a.css(l.scrollbarX,"left"))*l.railXRatio,s.startScrolling(o,"x"),l.event.bind(l.ownerDocument,"mousemove",n),l.event.once(l.ownerDocument,"mouseup",r),t.stopPropagation(),t.preventDefault()})}function l(o,l){var i=null,e=null;var n=function(t){!function(t){var e=i+t*l.railYRatio,n=Math.max(0,l.scrollbarYRail.getBoundingClientRect().top)+l.railYRatio*(l.railYHeight-l.scrollbarYHeight);l.scrollbarYTop=e<0?0:n<e?n:e;var r=s.toInt(l.scrollbarYTop*(l.contentHeight-l.containerHeight)/(l.containerHeight-l.railYRatio*l.scrollbarYHeight));u(o,"top",r)}(t.pageY-e),c(o),t.stopPropagation(),t.preventDefault()},r=function(){s.stopScrolling(o,"y"),l.event.unbind(l.ownerDocument,"mousemove",n)};l.event.bind(l.scrollbarY,"mousedown",function(t){e=t.pageY,i=s.toInt(a.css(l.scrollbarY,"top"))*l.railYRatio,s.startScrolling(o,"y"),l.event.bind(l.ownerDocument,"mousemove",n),l.event.once(l.ownerDocument,"mouseup",r),t.stopPropagation(),t.preventDefault()})}e.exports=function(t){var e=r.get(t);o(t,e),l(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";var a=t("../../lib/helper"),c=t("../../lib/dom"),r=t("../instances"),u=t("../update-geometry"),d=t("../update-scroll");function o(l,i){var s=!1;i.event.bind(l,"mouseenter",function(){s=!0}),i.event.bind(l,"mouseleave",function(){s=!1});i.event.bind(i.ownerDocument,"keydown",function(t){if(!(t.isDefaultPrevented&&t.isDefaultPrevented()||t.defaultPrevented)){var e=c.matches(i.scrollbarX,":focus")||c.matches(i.scrollbarY,":focus");if(s||e){var n=document.activeElement?document.activeElement:i.ownerDocument.activeElement;if(n){if("IFRAME"===n.tagName)n=n.contentDocument.activeElement;else for(;n.shadowRoot;)n=n.shadowRoot.activeElement;if(a.isEditable(n))return}var r=0,o=0;switch(t.which){case 37:r=t.metaKey?-i.contentWidth:t.altKey?-i.containerWidth:-30;break;case 38:o=t.metaKey?i.contentHeight:t.altKey?i.containerHeight:30;break;case 39:r=t.metaKey?i.contentWidth:t.altKey?i.containerWidth:30;break;case 40:o=t.metaKey?-i.contentHeight:t.altKey?-i.containerHeight:-30;break;case 33:o=90;break;case 32:o=t.shiftKey?90:-90;break;case 34:o=-90;break;case 35:o=t.ctrlKey?-i.contentHeight:-i.containerHeight;break;case 36:o=t.ctrlKey?l.scrollTop:i.containerHeight;break;default:return}d(l,"top",l.scrollTop-o),d(l,"left",l.scrollLeft+r),u(l),function(t,e){var n=l.scrollTop;if(0===t){if(!i.scrollbarYActive)return!1;if(0===n&&0<e||n>=i.contentHeight-i.containerHeight&&e<0)return!i.settings.wheelPropagation}var r=l.scrollLeft;if(0===e){if(!i.scrollbarXActive)return!1;if(0===r&&t<0||r>=i.contentWidth-i.containerWidth&&0<t)return!i.settings.wheelPropagation}return!0}(r,o)&&t.preventDefault()}}})}e.exports=function(t){o(t,r.get(t))}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";var r=t("../instances"),u=t("../update-geometry"),d=t("../update-scroll");function o(s,a){var c=!1;function t(t){var e,n,r,o=(n=(e=t).deltaX,r=-1*e.deltaY,void 0!==n&&void 0!==r||(n=-1*e.wheelDeltaX/6,r=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(n*=10,r*=10),n!=n&&r!=r&&(n=0,r=e.wheelDelta),e.shiftKey?[-r,-n]:[n,r]),l=o[0],i=o[1];(function(t,e){var n=s.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(n){if(!window.getComputedStyle(n).overflow.match(/(scroll|auto)/))return!1;var r=n.scrollHeight-n.clientHeight;if(0<r&&!(0===n.scrollTop&&0<e||n.scrollTop===r&&e<0))return!0;var o=n.scrollLeft-n.clientWidth;if(0<o&&!(0===n.scrollLeft&&t<0||n.scrollLeft===o&&0<t))return!0}return!1})(l,i)||(c=!1,a.settings.useBothWheelAxes?a.scrollbarYActive&&!a.scrollbarXActive?(d(s,"top",i?s.scrollTop-i*a.settings.wheelSpeed:s.scrollTop+l*a.settings.wheelSpeed),c=!0):a.scrollbarXActive&&!a.scrollbarYActive&&(d(s,"left",l?s.scrollLeft+l*a.settings.wheelSpeed:s.scrollLeft-i*a.settings.wheelSpeed),c=!0):(d(s,"top",s.scrollTop-i*a.settings.wheelSpeed),d(s,"left",s.scrollLeft+l*a.settings.wheelSpeed)),u(s),(c=c||function(t,e){var n=s.scrollTop;if(0===t){if(!a.scrollbarYActive)return!1;if(0===n&&0<e||n>=a.contentHeight-a.containerHeight&&e<0)return!a.settings.wheelPropagation}var r=s.scrollLeft;if(0===e){if(!a.scrollbarXActive)return!1;if(0===r&&t<0||r>=a.contentWidth-a.containerWidth&&0<t)return!a.settings.wheelPropagation}return!0}(l,i))&&(t.stopPropagation(),t.preventDefault()))}void 0!==window.onwheel?a.event.bind(s,"wheel",t):void 0!==window.onmousewheel&&a.event.bind(s,"mousewheel",t)}e.exports=function(t){o(t,r.get(t))}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";var r=t("../instances"),o=t("../update-geometry");e.exports=function(t){var e,n=r.get(t);e=t,n.event.bind(e,"scroll",function(){o(e)})}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";var p=t("../../lib/helper"),h=t("../instances"),f=t("../update-geometry"),b=t("../update-scroll");function r(s,t){var a=null,c={top:0,left:0};function u(){a&&(clearInterval(a),a=null),p.stopScrolling(s)}var d=!1;t.event.bind(t.ownerDocument,"selectionchange",function(){var t;s.contains(0===(t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"").toString().length?null:t.getRangeAt(0).commonAncestorContainer)?d=!0:(d=!1,u())}),t.event.bind(window,"mouseup",function(){d&&(d=!1,u())}),t.event.bind(window,"keyup",function(){d&&(d=!1,u())}),t.event.bind(window,"mousemove",function(t){if(d){var e=t.pageX,n=t.pageY,r=s.offsetLeft,o=s.offsetLeft+s.offsetWidth,l=s.offsetTop,i=s.offsetTop+s.offsetHeight;e<r+3?(c.left=-5,p.startScrolling(s,"x")):o-3<e?(c.left=5,p.startScrolling(s,"x")):c.left=0,n<l+3?(c.top=l+3-n<5?-5:-20,p.startScrolling(s,"y")):i-3<n?(c.top=n-i+3<5?5:20,p.startScrolling(s,"y")):c.top=0,0===c.top&&0===c.left?u():a||(a=setInterval(function(){h.get(s)?(b(s,"top",s.scrollTop+c.top),b(s,"left",s.scrollLeft+c.left),f(s)):clearInterval(a)},50))}})}e.exports=function(t){r(t,h.get(t))}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";var r=t("../../lib/helper"),m=t("../instances"),w=t("../update-geometry"),Y=t("../update-scroll");function o(s,a,t,e){function c(t,e){Y(s,"top",s.scrollTop-e),Y(s,"left",s.scrollLeft-t),w(s)}var u={},d=0,p={},n=null,h=!1,f=!1;function r(){h=!0}function o(){h=!1}function b(t){return t.targetTouches?t.targetTouches[0]:t}function v(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function g(t){if(v(t)){f=!0;var e=b(t);u.pageX=e.pageX,u.pageY=e.pageY,d=(new Date).getTime(),null!==n&&clearInterval(n),t.stopPropagation()}}function l(t){if(!f&&a.settings.swipePropagation&&g(t),!h&&f&&v(t)){var e=b(t),n={pageX:e.pageX,pageY:e.pageY},r=n.pageX-u.pageX,o=n.pageY-u.pageY;c(r,o),u=n;var l=(new Date).getTime(),i=l-d;0<i&&(p.x=r/i,p.y=o/i,d=l),function(t,e){var n=s.scrollTop,r=s.scrollLeft,o=Math.abs(t),l=Math.abs(e);if(o<l){if(e<0&&n===a.contentHeight-a.containerHeight||0<e&&0===n)return!a.settings.swipePropagation}else if(l<o&&(t<0&&r===a.contentWidth-a.containerWidth||0<t&&0===r))return!a.settings.swipePropagation;return!0}(r,o)&&(t.stopPropagation(),t.preventDefault())}}function i(){!h&&f&&(f=!1,clearInterval(n),n=setInterval(function(){m.get(s)&&(p.x||p.y)?Math.abs(p.x)<.01&&Math.abs(p.y)<.01?clearInterval(n):(c(30*p.x,30*p.y),p.x*=.8,p.y*=.8):clearInterval(n)},10))}t?(a.event.bind(window,"touchstart",r),a.event.bind(window,"touchend",o),a.event.bind(s,"touchstart",g),a.event.bind(s,"touchmove",l),a.event.bind(s,"touchend",i)):e&&(window.PointerEvent?(a.event.bind(window,"pointerdown",r),a.event.bind(window,"pointerup",o),a.event.bind(s,"pointerdown",g),a.event.bind(s,"pointermove",l),a.event.bind(s,"pointerup",i)):window.MSPointerEvent&&(a.event.bind(window,"MSPointerDown",r),a.event.bind(window,"MSPointerUp",o),a.event.bind(s,"MSPointerDown",g),a.event.bind(s,"MSPointerMove",l),a.event.bind(s,"MSPointerUp",i)))}e.exports=function(t){(r.env.supportsTouch||r.env.supportsIePointer)&&o(t,m.get(t),r.env.supportsTouch,r.env.supportsIePointer)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),l=t("./instances"),i=t("./update-geometry"),s={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},a=t("./handler/native-scroll");e.exports=function(e,t){t="object"==typeof t?t:{},o.add(e,"ps-container");var n=l.add(e);n.settings=r.extend(n.settings,t),o.add(e,"ps-theme-"+n.settings.theme),n.settings.handlers.forEach(function(t){s[t](e)}),a(e),i(e)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";var i=t("../lib/helper"),s=t("../lib/class"),a=t("./default-setting"),c=t("../lib/dom"),u=t("../lib/event-manager"),r=t("../lib/guid"),o={};function l(t){var e,n,r=this;function o(){s.add(t,"ps-focus")}function l(){s.remove(t,"ps-focus")}r.settings=i.clone(a),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===c.css(t,"direction"),r.isNegativeScroll=(n=t.scrollLeft,t.scrollLeft=-1,e=t.scrollLeft<0,t.scrollLeft=n,e),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new u,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=c.appendTo(c.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=c.appendTo(c.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",o),r.event.bind(r.scrollbarX,"blur",l),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=i.toInt(c.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom==r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:i.toInt(c.css(r.scrollbarXRail,"top")),r.railBorderXWidth=i.toInt(c.css(r.scrollbarXRail,"borderLeftWidth"))+i.toInt(c.css(r.scrollbarXRail,"borderRightWidth")),c.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=i.toInt(c.css(r.scrollbarXRail,"marginLeft"))+i.toInt(c.css(r.scrollbarXRail,"marginRight")),c.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=c.appendTo(c.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=c.appendTo(c.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",o),r.event.bind(r.scrollbarY,"blur",l),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=i.toInt(c.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight==r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:i.toInt(c.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?i.outerWidth(r.scrollbarY):null,r.railBorderYWidth=i.toInt(c.css(r.scrollbarYRail,"borderTopWidth"))+i.toInt(c.css(r.scrollbarYRail,"borderBottomWidth")),c.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=i.toInt(c.css(r.scrollbarYRail,"marginTop"))+i.toInt(c.css(r.scrollbarYRail,"marginBottom")),c.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function d(t){return t.getAttribute("data-ps-id")}n.add=function(t){var e,n=r();return e=n,t.setAttribute("data-ps-id",e),o[n]=new l(t),o[n]},n.remove=function(t){delete o[d(t)],t.removeAttribute("data-ps-id")},n.get=function(t){return o[d(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/class"),l=t("../lib/dom"),i=t("./instances"),s=t("./update-scroll");function a(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}e.exports=function(t){var e,n=i.get(t);n.containerWidth=t.clientWidth,n.containerHeight=t.clientHeight,n.contentWidth=t.scrollWidth,n.contentHeight=t.scrollHeight,t.contains(n.scrollbarXRail)||(0<(e=l.queryChildren(t,".ps-scrollbar-x-rail")).length&&e.forEach(function(t){l.remove(t)}),l.appendTo(n.scrollbarXRail,t)),t.contains(n.scrollbarYRail)||(0<(e=l.queryChildren(t,".ps-scrollbar-y-rail")).length&&e.forEach(function(t){l.remove(t)}),l.appendTo(n.scrollbarYRail,t)),!n.settings.suppressScrollX&&n.containerWidth+n.settings.scrollXMarginOffset<n.contentWidth?(n.scrollbarXActive=!0,n.railXWidth=n.containerWidth-n.railXMarginWidth,n.railXRatio=n.containerWidth/n.railXWidth,n.scrollbarXWidth=a(n,r.toInt(n.railXWidth*n.containerWidth/n.contentWidth)),n.scrollbarXLeft=r.toInt((n.negativeScrollAdjustment+t.scrollLeft)*(n.railXWidth-n.scrollbarXWidth)/(n.contentWidth-n.containerWidth))):n.scrollbarXActive=!1,!n.settings.suppressScrollY&&n.containerHeight+n.settings.scrollYMarginOffset<n.contentHeight?(n.scrollbarYActive=!0,n.railYHeight=n.containerHeight-n.railYMarginHeight,n.railYRatio=n.containerHeight/n.railYHeight,n.scrollbarYHeight=a(n,r.toInt(n.railYHeight*n.containerHeight/n.contentHeight)),n.scrollbarYTop=r.toInt(t.scrollTop*(n.railYHeight-n.scrollbarYHeight)/(n.contentHeight-n.containerHeight))):n.scrollbarYActive=!1,n.scrollbarXLeft>=n.railXWidth-n.scrollbarXWidth&&(n.scrollbarXLeft=n.railXWidth-n.scrollbarXWidth),n.scrollbarYTop>=n.railYHeight-n.scrollbarYHeight&&(n.scrollbarYTop=n.railYHeight-n.scrollbarYHeight),function(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,l.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,l.css(e.scrollbarYRail,r),l.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),l.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(t,n),n.scrollbarXActive?o.add(t,"ps-active-x"):(o.remove(t,"ps-active-x"),n.scrollbarXWidth=0,n.scrollbarXLeft=0,s(t,"left",0)),n.scrollbarYActive?o.add(t,"ps-active-y"):(o.remove(t,"ps-active-y"),n.scrollbarYHeight=0,n.scrollbarYTop=0,s(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var o,l,i=t("./instances"),s=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};e.exports=function(t,e,n){if(void 0===t)throw"You must provide an element to the update-scroll function";if(void 0===e)throw"You must provide an axis to the update-scroll function";if(void 0===n)throw"You must provide a value to the update-scroll function";"top"===e&&n<=0&&(t.scrollTop=n=0,t.dispatchEvent(s("ps-y-reach-start"))),"left"===e&&n<=0&&(t.scrollLeft=n=0,t.dispatchEvent(s("ps-x-reach-start")));var r=i.get(t);"top"===e&&n>=r.contentHeight-r.containerHeight&&((n=r.contentHeight-r.containerHeight)-t.scrollTop<=1?n=t.scrollTop:t.scrollTop=n,t.dispatchEvent(s("ps-y-reach-end"))),"left"===e&&n>=r.contentWidth-r.containerWidth&&((n=r.contentWidth-r.containerWidth)-t.scrollLeft<=1?n=t.scrollLeft:t.scrollLeft=n,t.dispatchEvent(s("ps-x-reach-end"))),o||(o=t.scrollTop),l||(l=t.scrollLeft),"top"===e&&n<o&&t.dispatchEvent(s("ps-scroll-up")),"top"===e&&o<n&&t.dispatchEvent(s("ps-scroll-down")),"left"===e&&n<l&&t.dispatchEvent(s("ps-scroll-left")),"left"===e&&l<n&&t.dispatchEvent(s("ps-scroll-right")),"top"===e&&(t.scrollTop=o=n,t.dispatchEvent(s("ps-scroll-y"))),"left"===e&&(t.scrollLeft=l=n,t.dispatchEvent(s("ps-scroll-x")))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/helper"),o=t("../lib/dom"),l=t("./instances"),i=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=l.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(o.css(e.scrollbarXRail,"marginLeft"))+r.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(o.css(e.scrollbarYRail,"marginTop"))+r.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),i(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);