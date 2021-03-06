!function(t,i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof exports?module.exports=i(require("jquery")):t.Jquery_growl=i(t.jQuery)}(this,function(s){var r=function(){function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}}();function l(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(function(){"use strict";var e,o,i,t,n;e=s,(t=function(){function t(){l(this,t)}return r(t,null,[{key:"transition",value:function(t){var i,e,n,s;for(s in i=t[0],e=this.transitions)if(n=e[s],null!=i.style[s])return n}}]),t}()).transitions={webkitTransition:"webkitTransitionEnd",mozTransition:"mozTransitionEnd",oTransition:"oTransitionEnd",transition:"transitionend"},o=t,(n=function(){function i(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};l(this,i),this.render=this.render.bind(this),this.bind=this.bind.bind(this),this.unbind=this.unbind.bind(this),this.mouseEnter=this.mouseEnter.bind(this),this.mouseLeave=this.mouseLeave.bind(this),this.click=this.click.bind(this),this.close=this.close.bind(this),this.cycle=this.cycle.bind(this),this.waitAndDismiss=this.waitAndDismiss.bind(this),this.present=this.present.bind(this),this.dismiss=this.dismiss.bind(this),this.remove=this.remove.bind(this),this.animate=this.animate.bind(this),this.$growls=this.$growls.bind(this),this.$growl=this.$growl.bind(this),this.html=this.html.bind(this),this.content=this.content.bind(this),this.container=this.container.bind(this),this.settings=e.extend({},i.settings,t),this.initialize(this.settings.location),this.render()}return r(i,null,[{key:"growl",value:function(){return new i(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})}}]),r(i,[{key:"initialize",value:function(t){var i;return e("body:not(:has(#"+(i="growls-"+t)+"))").append('<div id="'+i+'" />')}},{key:"render",value:function(){var t;t=this.$growl(),this.$growls(this.settings.location).append(t),this.settings.fixed?this.present():this.cycle()}},{key:"bind",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.$growl();return t.on("click",this.click),this.settings.delayOnHover&&(t.on("mouseenter",this.mouseEnter),t.on("mouseleave",this.mouseLeave)),t.on("contextmenu",this.close).find("."+this.settings.namespace+"-close").on("click",this.close)}},{key:"unbind",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.$growl();return t.off("click",this.click),this.settings.delayOnHover&&(t.off("mouseenter",this.mouseEnter),t.off("mouseleave",this.mouseLeave)),t.off("contextmenu",this.close).find("."+this.settings.namespace+"-close").off("click",this.close)}},{key:"mouseEnter",value:function(t){return this.$growl().stop(!0,!0)}},{key:"mouseLeave",value:function(t){return this.waitAndDismiss()}},{key:"click",value:function(t){if(null!=this.settings.url)return t.preventDefault(),t.stopPropagation(),window.open(this.settings.url)}},{key:"close",value:function(t){return t.preventDefault(),t.stopPropagation(),this.$growl().stop().queue(this.dismiss).queue(this.remove)}},{key:"cycle",value:function(){return this.$growl().queue(this.present).queue(this.waitAndDismiss())}},{key:"waitAndDismiss",value:function(){return this.$growl().delay(this.settings.duration).queue(this.dismiss).queue(this.remove)}},{key:"present",value:function(t){var i;return i=this.$growl(),this.bind(i),this.animate(i,this.settings.namespace+"-incoming","out",t)}},{key:"dismiss",value:function(t){var i;return i=this.$growl(),this.unbind(i),this.animate(i,this.settings.namespace+"-outgoing","in",t)}},{key:"remove",value:function(t){return this.$growl().remove(),"function"==typeof t?t():void 0}},{key:"animate",value:function(t,i){var e,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"in",s=arguments[3];e=o.transition(t),t["in"===n?"removeClass":"addClass"](i),t.offset().position,t["in"===n?"addClass":"removeClass"](i),null!=s&&(null!=e?t.one(e,s):s())}},{key:"$growls",value:function(t){var i;return null==this.$_growls&&(this.$_growls=[]),null!=(i=this.$_growls)[t]?i[t]:i[t]=e("#growls-"+t)}},{key:"$growl",value:function(){return null!=this.$_growl?this.$_growl:this.$_growl=e(this.html())}},{key:"html",value:function(){return this.container(this.content())}},{key:"content",value:function(){return"<div class='"+this.settings.namespace+"-close'>"+this.settings.close+"</div>\n<div class='"+this.settings.namespace+"-title'>"+this.settings.title+"</div>\n<div class='"+this.settings.namespace+"-message'>"+this.settings.message+"</div>"}},{key:"container",value:function(t){return"<div class='"+this.settings.namespace+" "+this.settings.namespace+"-"+this.settings.style+" "+this.settings.namespace+"-"+this.settings.size+"'>\n  "+t+"\n</div>"}}]),i}()).settings={namespace:"growl",duration:3200,close:"&#215;",location:"default",style:"default",size:"medium",delayOnHover:!0},i=n,this.Growl=i,e.growl=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return i.growl(t)},e.growl.error=function(){var t,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t={title:"Error!",style:"error"},e.growl(e.extend(t,i))},e.growl.notice=function(){var t,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t={title:"Notice!",style:"notice"},e.growl(e.extend(t,i))},e.growl.warning=function(){var t,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t={title:"Warning!",style:"warning"},e.growl(e.extend(t,i))}}).call(this)});