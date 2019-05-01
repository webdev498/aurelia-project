!function(t,i){"function"==typeof define&&define.amd?define(["jquery","px-libs/jquery.flot"],i):"object"==typeof exports?module.exports=i(require("jquery"),require("px-libs/jquery.flot")):t.Jquery_flot_tooltip=i(t.jQuery,t._flot_)}(this,function(t,i){!function(n){var t={tooltip:{show:!1,cssClass:"flotTip",content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,monthNames:null,dayNames:null,shifts:{x:10,y:20},defaultTheme:!0,snap:!0,lines:!1,clickTips:!1,onHover:function(t,i){},$compat:!1}};t.tooltipOpts=t.tooltip;var i=function(t){this.tipPosition={x:0,y:0},this.init(t)};i.prototype.init=function(h){var y=this,t=n.plot.plugins.length;if(this.plotPlugins=[],t)for(var i=0;i<t;i++)this.plotPlugins.push(n.plot.plugins[i].name);function e(t){var i={};i.x=t.pageX,i.y=t.pageY,h.setTooltipPosition(i)}function o(t,i,e){y.clickmode?(n(h.getPlaceholder()).bind("plothover",s),h.hideTooltip(),y.clickmode=!1):(s(t,i,e),y.getDomElement().is(":visible")&&(n(h.getPlaceholder()).unbind("plothover",s),y.clickmode=!0))}function s(t,d,i){var u=function(t,i,e,o){return Math.sqrt((e-t)*(e-t)+(o-i)*(o-i))};if(i)h.showTooltip(i,y.tooltipOptions.snap?i:d);else if(y.plotOptions.series.lines.show&&!0===y.tooltipOptions.lines){var e=y.plotOptions.grid.mouseActiveRadius,c={distance:e+1},x=d;n.each(h.getData(),function(t,i){for(var e=0,o=-1,s=1;s<i.data.length;s++)i.data[s-1][0]<=d.x&&i.data[s][0]>=d.x&&(e=s-1,o=s);if(-1!==o){var n={x:i.data[e][0],y:i.data[e][1]},a={x:i.data[o][0],y:i.data[o][1]},p=function(r,l,d,c,x,h,t){if(!t||(t=function(t,i,e,o,s,n){if(void 0!==d)return{x:d,y:l};if(void 0!==c)return{x:r,y:c};var a,p=-1/((h-c)/(x-d));return{x:a=(x*(r*p-l+c)+d*(r*-p+l-h))/(p*(x-d)+c-h),y:p*a-p*r+l}}()).x>=Math.min(d,x)&&t.x<=Math.max(d,x)&&t.y>=Math.min(c,h)&&t.y<=Math.max(c,h)){var i=c-h,e=x-d,o=d*h-c*x;return Math.abs(i*r+e*l+o)/Math.sqrt(i*i+e*e)}var s=u(r,l,d,c),n=u(r,l,x,h);return n<s?n:s}(i.xaxis.p2c(d.x),i.yaxis.p2c(d.y),i.xaxis.p2c(n.x),i.yaxis.p2c(n.y),i.xaxis.p2c(a.x),i.yaxis.p2c(a.y),!1);if(p<c.distance){var r=u(n.x,n.y,d.x,d.y)<u(d.x,d.y,a.x,a.y)?e:o,l=(i.datapoints.pointsize,[d.x,n.y+(a.y-n.y)*((d.x-n.x)/(a.x-n.x))]);c={distance:p,item:{datapoint:l,dataIndex:r,series:i,seriesIndex:t}},y.tooltipOptions.snap&&(x={pageX:i.xaxis.p2c(l[0]),pageY:i.yaxis.p2c(l[1])})}}else h.hideTooltip()}),c.distance<e+1?h.showTooltip(c.item,x):h.hideTooltip()}else h.hideTooltip()}h.hooks.bindEvents.push(function(t,i){if(y.plotOptions=t.getOptions(),"boolean"==typeof y.plotOptions.tooltip&&(y.plotOptions.tooltipOpts.show=y.plotOptions.tooltip,y.plotOptions.tooltip=y.plotOptions.tooltipOpts,delete y.plotOptions.tooltipOpts),!1!==y.plotOptions.tooltip.show&&void 0!==y.plotOptions.tooltip.show){y.tooltipOptions=y.plotOptions.tooltip,y.tooltipOptions.$compat?(y.wfunc="width",y.hfunc="height"):(y.wfunc="innerWidth",y.hfunc="innerHeight");y.getDomElement();n(t.getPlaceholder()).bind("plothover",s),y.tooltipOptions.clickTips&&n(t.getPlaceholder()).bind("plotclick",o),y.clickmode=!1,n(i).bind("mousemove",e)}}),h.hooks.shutdown.push(function(t,i){n(t.getPlaceholder()).unbind("plothover",s),n(t.getPlaceholder()).unbind("plotclick",o),t.removeTooltip(),n(i).unbind("mousemove",e)}),h.setTooltipPosition=function(t){var i=y.getDomElement(),e=i.outerWidth()+y.tooltipOptions.shifts.x,o=i.outerHeight()+y.tooltipOptions.shifts.y;t.x-n(window).scrollLeft()>n(window)[y.wfunc]()-e&&(t.x-=e,t.x=Math.max(t.x,0)),t.y-n(window).scrollTop()>n(window)[y.hfunc]()-o&&(t.y-=o),isNaN(t.x)?y.tipPosition.x=y.tipPosition.xPrev:(y.tipPosition.x=t.x,y.tipPosition.xPrev=t.x),isNaN(t.y)?y.tipPosition.y=y.tipPosition.yPrev:(y.tipPosition.y=t.y,y.tipPosition.yPrev=t.y)},h.showTooltip=function(t,i,e){var o=y.getDomElement(),s=y.stringFormat(y.tooltipOptions.content,t);""!==s&&(o.html(s),h.setTooltipPosition({x:y.tipPosition.x,y:y.tipPosition.y}),o.css({left:y.tipPosition.x+y.tooltipOptions.shifts.x,top:y.tipPosition.y+y.tooltipOptions.shifts.y}).show(),"function"==typeof y.tooltipOptions.onHover&&y.tooltipOptions.onHover(t,o))},h.hideTooltip=function(){y.getDomElement().hide().html("")},h.removeTooltip=function(){y.getDomElement().remove()}},i.prototype.getDomElement=function(){var t=n("<div>");return this.tooltipOptions&&this.tooltipOptions.cssClass&&0===(t=n("."+this.tooltipOptions.cssClass)).length&&((t=n("<div />").addClass(this.tooltipOptions.cssClass)).appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&t.css({background:"#fff","z-index":"1040",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"})),t},i.prototype.stringFormat=function(t,i){var e,o,s,n,a,p=/%s/,r=/%c/,l=/%lx/,d=/%ly/,c=/%x\.{0,1}(\d{0,})/,x=/%y\.{0,1}(\d{0,})/;if(void 0!==i.series.threshold?(e=i.datapoint[0],o=i.datapoint[1],s=i.datapoint[2]):void 0!==i.series.curvedLines?(e=i.datapoint[0],o=i.datapoint[1]):void 0!==i.series.lines&&i.series.lines.steps?(e=i.series.datapoints.points[2*i.dataIndex],o=i.series.datapoints.points[2*i.dataIndex+1],s=""):(e=i.series.data[i.dataIndex][0],o=i.series.data[i.dataIndex][1],s=i.series.data[i.dataIndex][2]),null===i.series.label&&i.series.originSeries&&(i.series.label=i.series.originSeries.label),"function"==typeof t&&(t=t(i.series.label,e,o,i)),"boolean"==typeof t&&!t)return"";if(s&&(t=t.replace("%ct",s)),void 0!==i.series.percent?n=i.series.percent:void 0!==i.series.percents&&(n=i.series.percents[i.dataIndex]),"number"==typeof n&&(t=this.adjustValPrecision(/%p\.{0,1}(\d{0,})/,t,n)),i.series.hasOwnProperty("pie")&&void 0!==i.series.data[0][1]&&(a=i.series.data[0][1]),"number"==typeof a&&(t=t.replace("%n",a)),t=void 0!==i.series.label?t.replace(p,i.series.label):t.replace(p,""),t=void 0!==i.series.color?t.replace(r,i.series.color):t.replace(r,""),t=this.hasAxisLabel("xaxis",i)?t.replace(l,i.series.xaxis.options.axisLabel):t.replace(l,""),t=this.hasAxisLabel("yaxis",i)?t.replace(d,i.series.yaxis.options.axisLabel):t.replace(d,""),this.isTimeMode("xaxis",i)&&this.isXDateFormat(i)&&(t=t.replace(c,this.timestampToDate(e,this.tooltipOptions.xDateFormat,i.series.xaxis.options))),this.isTimeMode("yaxis",i)&&this.isYDateFormat(i)&&(t=t.replace(x,this.timestampToDate(o,this.tooltipOptions.yDateFormat,i.series.yaxis.options))),"number"==typeof e&&(t=this.adjustValPrecision(c,t,e)),"number"==typeof o&&(t=this.adjustValPrecision(x,t,o)),void 0!==i.series.xaxis.ticks){var h;h=this.hasRotatedXAxisTicks(i)?"rotatedTicks":"ticks";var u=i.dataIndex+i.seriesIndex;for(var y in i.series.xaxis[h]){if(i.series.xaxis[h].hasOwnProperty(u)&&!this.isTimeMode("xaxis",i))(this.isCategoriesMode("xaxis",i)?i.series.xaxis[h][u].label:i.series.xaxis[h][u].v)===e&&(t=t.replace(c,i.series.xaxis[h][u].label.replace(/\$/g,"$$$$")))}}if(void 0!==i.series.yaxis.ticks)for(var m in i.series.yaxis.ticks){if(i.series.yaxis.ticks.hasOwnProperty(m))(this.isCategoriesMode("yaxis",i)?i.series.yaxis.ticks[m].label:i.series.yaxis.ticks[m].v)===o&&(t=t.replace(x,i.series.yaxis.ticks[m].label.replace(/\$/g,"$$$$")))}return void 0!==i.series.xaxis.tickFormatter&&(t=t.replace("%x",i.series.xaxis.tickFormatter(e,i.series.xaxis).replace(/\$/g,"$$"))),void 0!==i.series.yaxis.tickFormatter&&(t=t.replace("%y",i.series.yaxis.tickFormatter(o,i.series.yaxis).replace(/\$/g,"$$"))),t},i.prototype.isTimeMode=function(t,i){return void 0!==i.series[t].options.mode&&"time"===i.series[t].options.mode},i.prototype.isXDateFormat=function(t){return void 0!==this.tooltipOptions.xDateFormat&&null!==this.tooltipOptions.xDateFormat},i.prototype.isYDateFormat=function(t){return void 0!==this.tooltipOptions.yDateFormat&&null!==this.tooltipOptions.yDateFormat},i.prototype.isCategoriesMode=function(t,i){return void 0!==i.series[t].options.mode&&"categories"===i.series[t].options.mode},i.prototype.timestampToDate=function(t,i,e){var o=n.plot.dateGenerator(t,e);return n.plot.formatDate(o,i,this.tooltipOptions.monthNames,this.tooltipOptions.dayNames)},i.prototype.adjustValPrecision=function(t,i,e){var o;return null!==i.match(t)&&""!==RegExp.$1&&(o=RegExp.$1,e=e.toFixed(o),i=i.replace(t,e)),i},i.prototype.hasAxisLabel=function(t,i){return-1!==n.inArray("axisLabels",this.plotPlugins)&&void 0!==i.series[t].options.axisLabel&&0<i.series[t].options.axisLabel.length},i.prototype.hasRotatedXAxisTicks=function(t){return-1!==n.inArray("tickRotor",this.plotPlugins)&&void 0!==t.series.xaxis.rotatedTicks};n.plot.plugins.push({init:function(t){new i(t)},options:t,name:"tooltip",version:"0.8.5"})}(t)});