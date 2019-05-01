!function(t,i){"function"==typeof define&&define.amd?define(["jquery","px-bootstrap/modal"],i):"object"==typeof exports?module.exports=i(require("jquery"),require("px-bootstrap/modal")):t.BootstrapTimepicker=i(t.jQuery,t._modal_)}(this,function(t,i){!function(m,g,s){"use strict";var n=function(t,i){this.widget="",this.$element=m(t),this.defaultTime=i.defaultTime,this.disableFocus=i.disableFocus,this.disableMousewheel=i.disableMousewheel,this.isOpen=i.isOpen,this.minuteStep=i.minuteStep,this.modalBackdrop=i.modalBackdrop,this.orientation=i.orientation,this.secondStep=i.secondStep,this.snapToStep=i.snapToStep,this.showInputs=i.showInputs,this.showMeridian=i.showMeridian,this.showSeconds=i.showSeconds,this.template=i.template,this.appendWidgetTo=i.appendWidgetTo,this.showWidgetOnAddonClick=i.showWidgetOnAddonClick,this.icons=i.icons,this.maxHours=i.maxHours,this.explicitMode=i.explicitMode,this.handleDocumentClick=function(t){var i=t.data.scope;i.$element.parent().find(t.target).length||i.$widget.is(t.target)||i.$widget.find(t.target).length||i.hideWidget()},this._init()};n.prototype={constructor:n,_init:function(){var t=this;this.showWidgetOnAddonClick&&this.$element.parent().hasClass("input-group")&&this.$element.parent().hasClass("bootstrap-timepicker")?(this.$element.parent(".input-group.bootstrap-timepicker").find(".input-group-addon").on({"click.timepicker":m.proxy(this.showWidget,this)}),this.$element.on({"focus.timepicker":m.proxy(this.highlightUnit,this),"click.timepicker":m.proxy(this.highlightUnit,this),"keydown.timepicker":m.proxy(this.elementKeydown,this),"blur.timepicker":m.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":m.proxy(this.mousewheel,this)})):this.template?this.$element.on({"focus.timepicker":m.proxy(this.showWidget,this),"click.timepicker":m.proxy(this.showWidget,this),"blur.timepicker":m.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":m.proxy(this.mousewheel,this)}):this.$element.on({"focus.timepicker":m.proxy(this.highlightUnit,this),"click.timepicker":m.proxy(this.highlightUnit,this),"keydown.timepicker":m.proxy(this.elementKeydown,this),"blur.timepicker":m.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":m.proxy(this.mousewheel,this)}),!1!==this.template?this.$widget=m(this.getTemplate()).on("click",m.proxy(this.widgetClick,this)):this.$widget=!1,this.showInputs&&!1!==this.$widget&&this.$widget.find("input").each(function(){m(this).on({"click.timepicker":function(){m(this).select()},"keydown.timepicker":m.proxy(t.widgetKeydown,t),"keyup.timepicker":m.proxy(t.widgetKeyup,t)})}),this.setDefaultTime(this.defaultTime)},blurElement:function(){this.highlightedUnit=null,this.updateFromElementVal()},clear:function(){this.hour="",this.minute="",this.second="",this.meridian="",this.$element.val("")},decrementHour:function(){if(this.showMeridian)if(1===this.hour)this.hour=12;else{if(12===this.hour)return this.hour--,this.toggleMeridian();if(0===this.hour)return this.hour=11,this.toggleMeridian();this.hour--}else this.hour<=0?this.hour=this.maxHours-1:this.hour--},decrementMinute:function(t){var i;(i=t?this.minute-t:this.minute-this.minuteStep)<0?(this.decrementHour(),this.minute=i+60):this.minute=i},decrementSecond:function(){var t=this.second-this.secondStep;t<0?(this.decrementMinute(!0),this.second=t+60):this.second=t},elementKeydown:function(t){switch(t.which){case 9:if(t.shiftKey){if("hour"===this.highlightedUnit){this.hideWidget();break}this.highlightPrevUnit()}else{if(this.showMeridian&&"meridian"===this.highlightedUnit||this.showSeconds&&"second"===this.highlightedUnit||!this.showMeridian&&!this.showSeconds&&"minute"===this.highlightedUnit){this.hideWidget();break}this.highlightNextUnit()}t.preventDefault(),this.updateFromElementVal();break;case 27:this.updateFromElementVal();break;case 37:t.preventDefault(),this.highlightPrevUnit(),this.updateFromElementVal();break;case 38:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.incrementHour(),this.highlightHour();break;case"minute":this.incrementMinute(),this.highlightMinute();break;case"second":this.incrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update();break;case 39:t.preventDefault(),this.highlightNextUnit(),this.updateFromElementVal();break;case 40:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.decrementHour(),this.highlightHour();break;case"minute":this.decrementMinute(),this.highlightMinute();break;case"second":this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update()}},getCursorPosition:function(){var t=this.$element.get(0);if("selectionStart"in t)return t.selectionStart;if(s.selection){t.focus();var i=s.selection.createRange(),e=s.selection.createRange().text.length;return i.moveStart("character",-t.value.length),i.text.length-e}},getTemplate:function(){var t,i,e,s,h,n;switch(this.showInputs?(i='<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>',e='<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>',s='<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>',h='<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>'):(i='<span class="bootstrap-timepicker-hour"></span>',e='<span class="bootstrap-timepicker-minute"></span>',s='<span class="bootstrap-timepicker-second"></span>',h='<span class="bootstrap-timepicker-meridian"></span>'),n='<table><tr><td><a href="#" data-action="incrementHour"><span class="'+this.icons.up+'"></span></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><span class="'+this.icons.up+'"></span></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><span class="'+this.icons.up+'"></span></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="'+this.icons.up+'"></span></a></td>':"")+"</tr><tr><td>"+i+'</td> <td class="separator">:</td><td>'+e+"</td> "+(this.showSeconds?'<td class="separator">:</td><td>'+s+"</td>":"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td>'+h+"</td>":"")+'</tr><tr><td><a href="#" data-action="decrementHour"><span class="'+this.icons.down+'"></span></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><span class="'+this.icons.down+'"></span></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><span class="'+this.icons.down+'"></span></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><span class="'+this.icons.down+'"></span></a></td>':"")+"</tr></table>",this.template){case"modal":t='<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+(this.modalBackdrop?"true":"false")+'"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;</a><h3>Pick a Time</h3></div><div class="modal-content">'+n+'</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';break;case"dropdown":t='<div class="bootstrap-timepicker-widget dropdown-menu">'+n+"</div>"}return t},getTime:function(){return""===this.hour?"":this.hour+":"+(1===this.minute.toString().length?"0"+this.minute:this.minute)+(this.showSeconds?":"+(1===this.second.toString().length?"0"+this.second:this.second):"")+(this.showMeridian?" "+this.meridian:"")},hideWidget:function(){!1!==this.isOpen&&(this.$element.trigger({type:"hide.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),"modal"===this.template&&this.$widget.modal?this.$widget.modal("hide"):this.$widget.removeClass("open"),m(s).off("mousedown.timepicker, touchend.timepicker",this.handleDocumentClick),this.isOpen=!1,this.$widget.detach())},highlightUnit:function(){this.position=this.getCursorPosition(),0<=this.position&&this.position<=2?this.highlightHour():3<=this.position&&this.position<=5?this.highlightMinute():6<=this.position&&this.position<=8?this.showSeconds?this.highlightSecond():this.highlightMeridian():9<=this.position&&this.position<=11&&this.highlightMeridian()},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":this.showSeconds?this.highlightSecond():this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"second":this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"meridian":this.highlightHour()}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.showMeridian?this.highlightMeridian():this.showSeconds?this.highlightSecond():this.highlightMinute();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":this.showSeconds?this.highlightSecond():this.highlightMinute()}},highlightHour:function(){var t=this.$element.get(0),i=this;this.highlightedUnit="hour",t.setSelectionRange&&setTimeout(function(){i.hour<10?t.setSelectionRange(0,1):t.setSelectionRange(0,2)},0)},highlightMinute:function(){var t=this.$element.get(0),i=this;this.highlightedUnit="minute",t.setSelectionRange&&setTimeout(function(){i.hour<10?t.setSelectionRange(2,4):t.setSelectionRange(3,5)},0)},highlightSecond:function(){var t=this.$element.get(0),i=this;this.highlightedUnit="second",t.setSelectionRange&&setTimeout(function(){i.hour<10?t.setSelectionRange(5,7):t.setSelectionRange(6,8)},0)},highlightMeridian:function(){var t=this.$element.get(0),i=this;this.highlightedUnit="meridian",t.setSelectionRange&&(this.showSeconds?setTimeout(function(){i.hour<10?t.setSelectionRange(8,10):t.setSelectionRange(9,11)},0):setTimeout(function(){i.hour<10?t.setSelectionRange(5,7):t.setSelectionRange(6,8)},0))},incrementHour:function(){if(this.showMeridian){if(11===this.hour)return this.hour++,this.toggleMeridian();12===this.hour&&(this.hour=0)}this.hour!==this.maxHours-1?this.hour++:this.hour=0},incrementMinute:function(t){var i;59<(i=t?this.minute+t:this.minute+this.minuteStep-this.minute%this.minuteStep)?(this.incrementHour(),this.minute=i-60):this.minute=i},incrementSecond:function(){var t=this.second+this.secondStep-this.second%this.secondStep;59<t?(this.incrementMinute(!0),this.second=t-60):this.second=t},mousewheel:function(t){if(!this.disableMousewheel){t.preventDefault(),t.stopPropagation();var i=t.originalEvent.wheelDelta||-t.originalEvent.detail,e=null;switch("mousewheel"===t.type?e=-1*t.originalEvent.wheelDelta:"DOMMouseScroll"===t.type&&(e=40*t.originalEvent.detail),e&&(t.preventDefault(),m(this).scrollTop(e+m(this).scrollTop())),this.highlightedUnit){case"minute":0<i?this.incrementMinute():this.decrementMinute(),this.highlightMinute();break;case"second":0<i?this.incrementSecond():this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian();break;default:0<i?this.incrementHour():this.decrementHour(),this.highlightHour()}return!1}},changeToNearestStep:function(t,i){return t%i==0?t:Math.round(t%i/i)?(t+(i-t%i))%60:t-t%i},place:function(){if(!this.isInline){var t=this.$widget.outerWidth(),i=this.$widget.outerHeight(),e=m(g).width(),s=m(g).height(),h=m(g).scrollTop(),n=parseInt(this.$element.parents().filter(function(){return"auto"!==m(this).css("z-index")}).first().css("z-index"),10)+10,o=this.component?this.component.parent().offset():this.$element.offset(),a=this.component?this.component.outerHeight(!0):this.$element.outerHeight(!1),r=this.component?this.component.outerWidth(!0):this.$element.outerWidth(!1),d=o.left,c=o.top;this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"),"auto"!==this.orientation.x?(this.$widget.addClass("timepicker-orient-"+this.orientation.x),"right"===this.orientation.x&&(d-=t-r)):(this.$widget.addClass("timepicker-orient-left"),o.left<0?d-=o.left-10:o.left+t>e&&(d=e-t-10));var l,u,p=this.orientation.y;"auto"===p&&(l=-h+o.top-i,u=h+s-(o.top+a+i),p=Math.max(l,u)===u?"top":"bottom"),this.$widget.addClass("timepicker-orient-"+p),"top"===p?c+=a:c-=i+parseInt(this.$widget.css("padding-top"),10),this.$widget.css({top:c,left:d,zIndex:n})}},remove:function(){m("document").off(".timepicker"),this.$widget&&this.$widget.remove(),delete this.$element.data().timepicker},setDefaultTime:function(t){if(this.$element.val())this.updateFromElementVal();else if("current"===t){var i=new Date,e=i.getHours(),s=i.getMinutes(),h=i.getSeconds(),n="AM";0!==h&&60===(h=Math.ceil(i.getSeconds()/this.secondStep)*this.secondStep)&&(s+=1,h=0),0!==s&&60===(s=Math.ceil(i.getMinutes()/this.minuteStep)*this.minuteStep)&&(e+=1,s=0),this.showMeridian&&(0===e?e=12:12<=e?(12<e&&(e-=12),n="PM"):n="AM"),this.hour=e,this.minute=s,this.second=h,this.meridian=n,this.update()}else!1===t?(this.hour=0,this.minute=0,this.second=0,this.meridian="AM"):this.setTime(t)},setTime:function(t,i){if(t){var e,s,h,n,o,a;if("object"==typeof t&&t.getMonth)h=t.getHours(),n=t.getMinutes(),o=t.getSeconds(),this.showMeridian&&(a="AM",12<h&&(a="PM",h%=12),12===h&&(a="PM"));else{if(2<(e=(/a/i.test(t)?1:0)+(/p/i.test(t)?2:0)))return void this.clear();if(h=(s=t.replace(/[^0-9\:]/g,"").split(":"))[0]?s[0].toString():s.toString(),this.explicitMode&&2<h.length&&h.length%2!=0)return void this.clear();n=s[1]?s[1].toString():"",o=s[2]?s[2].toString():"",4<h.length&&(o=h.slice(-2),h=h.slice(0,-2)),2<h.length&&(n=h.slice(-2),h=h.slice(0,-2)),2<n.length&&(o=n.slice(-2),n=n.slice(0,-2)),h=parseInt(h,10),n=parseInt(n,10),o=parseInt(o,10),isNaN(h)&&(h=0),isNaN(n)&&(n=0),isNaN(o)&&(o=0),59<o&&(o=59),59<n&&(n=59),h>=this.maxHours&&(h=this.maxHours-1),this.showMeridian?(12<h&&(e=2,h-=12),e||(e=1),0===h&&(h=12),a=1===e?"AM":"PM"):h<12&&2===e?h+=12:h>=this.maxHours?h=this.maxHours-1:(h<0||12===h&&1===e)&&(h=0)}this.hour=h,this.snapToStep?(this.minute=this.changeToNearestStep(n,this.minuteStep),this.second=this.changeToNearestStep(o,this.secondStep)):(this.minute=n,this.second=o),this.meridian=a,this.update(i)}else this.clear()},showWidget:function(){this.isOpen||this.$element.is(":disabled")||(this.$widget.appendTo(this.appendWidgetTo),m(s).on("mousedown.timepicker, touchend.timepicker",{scope:this},this.handleDocumentClick),this.$element.trigger({type:"show.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.place(),this.disableFocus&&this.$element.blur(),""===this.hour&&(this.defaultTime?this.setDefaultTime(this.defaultTime):this.setTime("0:0:0")),"modal"===this.template&&this.$widget.modal?this.$widget.modal("show").on("hidden",m.proxy(this.hideWidget,this)):!1===this.isOpen&&this.$widget.addClass("open"),this.isOpen=!0)},toggleMeridian:function(){this.meridian="AM"===this.meridian?"PM":"AM"},update:function(t){this.updateElement(),t||this.updateWidget(),this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}})},updateElement:function(){this.$element.val(this.getTime()).change()},updateFromElementVal:function(){this.setTime(this.$element.val())},updateWidget:function(){if(!1!==this.$widget){var t=this.hour,i=1===this.minute.toString().length?"0"+this.minute:this.minute,e=1===this.second.toString().length?"0"+this.second:this.second;this.showInputs?(this.$widget.find("input.bootstrap-timepicker-hour").val(t),this.$widget.find("input.bootstrap-timepicker-minute").val(i),this.showSeconds&&this.$widget.find("input.bootstrap-timepicker-second").val(e),this.showMeridian&&this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)):(this.$widget.find("span.bootstrap-timepicker-hour").text(t),this.$widget.find("span.bootstrap-timepicker-minute").text(i),this.showSeconds&&this.$widget.find("span.bootstrap-timepicker-second").text(e),this.showMeridian&&this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))}},updateFromWidgetInputs:function(){if(!1!==this.$widget){var t=this.$widget.find("input.bootstrap-timepicker-hour").val()+":"+this.$widget.find("input.bootstrap-timepicker-minute").val()+(this.showSeconds?":"+this.$widget.find("input.bootstrap-timepicker-second").val():"")+(this.showMeridian?this.$widget.find("input.bootstrap-timepicker-meridian").val():"");this.setTime(t,!0)}},widgetClick:function(t){t.stopPropagation(),t.preventDefault();var i=m(t.target),e=i.closest("a").data("action");e&&this[e](),this.update(),i.is("input")&&i.get(0).setSelectionRange(0,2)},widgetKeydown:function(t){var i=m(t.target),e=i.attr("class").replace("bootstrap-timepicker-","");switch(t.which){case 9:if(t.shiftKey){if("hour"===e)return this.hideWidget()}else if(this.showMeridian&&"meridian"===e||this.showSeconds&&"second"===e||!this.showMeridian&&!this.showSeconds&&"minute"===e)return this.hideWidget();break;case 27:this.hideWidget();break;case 38:switch(t.preventDefault(),e){case"hour":this.incrementHour();break;case"minute":this.incrementMinute();break;case"second":this.incrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),i.get(0).setSelectionRange(0,2);break;case 40:switch(t.preventDefault(),e){case"hour":this.decrementHour();break;case"minute":this.decrementMinute();break;case"second":this.decrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),i.get(0).setSelectionRange(0,2)}},widgetKeyup:function(t){(65===t.which||77===t.which||80===t.which||46===t.which||8===t.which||48<=t.which&&t.which<=57||96<=t.which&&t.which<=105)&&this.updateFromWidgetInputs()}},m.fn.timepicker=function(s){var h=Array.apply(null,arguments);return h.shift(),this.each(function(){var t=m(this),i=t.data("timepicker"),e="object"==typeof s&&s;i||t.data("timepicker",i=new n(this,m.extend({},m.fn.timepicker.defaults,e,m(this).data()))),"string"==typeof s&&i[s].apply(i,h)})},m.fn.timepicker.defaults={defaultTime:"current",disableFocus:!1,disableMousewheel:!1,isOpen:!1,minuteStep:15,modalBackdrop:!1,orientation:{x:"auto",y:"auto"},secondStep:15,snapToStep:!1,showSeconds:!1,showInputs:!0,showMeridian:!0,template:"dropdown",appendWidgetTo:"body",showWidgetOnAddonClick:!0,icons:{up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down"},maxHours:24,explicitMode:!1},m.fn.timepicker.Constructor=n,m(s).on("focus.timepicker.data-api click.timepicker.data-api",'[data-provide="timepicker"]',function(t){var i=m(this);i.data("timepicker")||(t.preventDefault(),i.timepicker())})}(t,window,document)});