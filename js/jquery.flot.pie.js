!function(e,i){"function"==typeof define&&define.amd?define(["jquery","px-libs/jquery.flot"],i):"object"==typeof exports?module.exports=i(require("jquery"),require("px-libs/jquery.flot")):e.Jquery_flot_pie=i(e.jQuery,e._flot_)}(this,function(e,i){var P,s;s={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,shadow:{left:5,top:15,alpha:.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(e,i){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+i.color+";'>"+e+"<br/>"+Math.round(i.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}},(P=e).plot.plugins.push({init:function(h){var a=null,w=null,y=null,u=null,k=null,M=null,o=!1,g=null,c=[];function p(e){if(0<y.series.pie.innerRadius){e.save();var i=1<y.series.pie.innerRadius?y.series.pie.innerRadius:u*y.series.pie.innerRadius;e.globalCompositeOperation="destination-out",e.beginPath(),e.fillStyle=y.series.pie.stroke.color,e.arc(0,0,i,0,2*Math.PI,!1),e.fill(),e.closePath(),e.restore(),e.save(),e.beginPath(),e.strokeStyle=y.series.pie.stroke.color,e.arc(0,0,i,0,2*Math.PI,!1),e.stroke(),e.closePath(),e.restore()}}function d(e,i){for(var s=!1,t=-1,r=e.length,a=r-1;++t<r;a=t)(e[t][1]<=i[1]&&i[1]<e[a][1]||e[a][1]<=i[1]&&i[1]<e[t][1])&&i[0]<(e[a][0]-e[t][0])*(i[1]-e[t][1])/(e[a][1]-e[t][1])+e[t][0]&&(s=!s);return s}function t(e){i("plothover",e)}function r(e){i("plotclick",e)}function i(e,i){var s,t,r,a=h.offset(),l=function(e,i){for(var s,t,r=h.getData(),a=h.getOptions(),l=1<a.series.pie.radius?a.series.pie.radius:u*a.series.pie.radius,n=0;n<r.length;++n){var o=r[n];if(o.pie.show){if(g.save(),g.beginPath(),g.moveTo(0,0),g.arc(0,0,l,o.startAngle,o.startAngle+o.angle/2,!1),g.arc(0,0,l,o.startAngle+o.angle/2,o.startAngle+o.angle,!1),g.closePath(),s=e-k,t=i-M,g.isPointInPath){if(g.isPointInPath(e-k,i-M))return g.restore(),{datapoint:[o.percent,o.data],dataIndex:0,series:o,seriesIndex:n}}else if(d([[0,0],[l*Math.cos(o.startAngle),l*Math.sin(o.startAngle)],[l*Math.cos(o.startAngle+o.angle/4),l*Math.sin(o.startAngle+o.angle/4)],[l*Math.cos(o.startAngle+o.angle/2),l*Math.sin(o.startAngle+o.angle/2)],[l*Math.cos(o.startAngle+o.angle/1.5),l*Math.sin(o.startAngle+o.angle/1.5)],[l*Math.cos(o.startAngle+o.angle),l*Math.sin(o.startAngle+o.angle)]],[s,t]))return g.restore(),{datapoint:[o.percent,o.data],dataIndex:0,series:o,seriesIndex:n};g.restore()}}return null}(parseInt(i.pageX-a.left),parseInt(i.pageY-a.top));if(y.grid.autoHighlight)for(var n=0;n<c.length;++n){var o=c[n];o.auto!=e||l&&o.series==l.series||f(o.series)}l&&(s=l.series,t=e,-1==(r=v(s))?(c.push({series:s,auto:t}),h.triggerRedrawOverlay()):t||(c[r].auto=!1));var p={pageX:i.pageX,pageY:i.pageY};w.trigger(e,[p,l])}function f(e){null==e&&(c=[],h.triggerRedrawOverlay());var i=v(e);-1!=i&&(c.splice(i,1),h.triggerRedrawOverlay())}function v(e){for(var i=0;i<c.length;++i)if(c[i].series==e)return i;return-1}h.hooks.processOptions.push(function(e,i){i.series.pie.show&&(i.grid.show=!1,"auto"==i.series.pie.label.show&&(i.legend.show?i.series.pie.label.show=!1:i.series.pie.label.show=!0),"auto"==i.series.pie.radius&&(i.series.pie.label.show?i.series.pie.radius=.75:i.series.pie.radius=1),1<i.series.pie.tilt?i.series.pie.tilt=1:i.series.pie.tilt<0&&(i.series.pie.tilt=0))}),h.hooks.bindEvents.push(function(e,i){var s=e.getOptions();s.series.pie.show&&(s.grid.hoverable&&i.unbind("mousemove").mousemove(t),s.grid.clickable&&i.unbind("click").click(r))}),h.hooks.processDatapoints.push(function(e,i,s,t){var r;e.getOptions().series.pie.show&&(r=e,o||(o=!0,a=r.getCanvas(),w=P(a).parent(),y=r.getOptions(),r.setData(function(e){for(var i=0,s=0,t=0,r=y.series.pie.combine.color,a=[],l=0;l<e.length;++l){var n=e[l].data;P.isArray(n)&&1==n.length&&(n=n[0]),P.isArray(n)?!isNaN(parseFloat(n[1]))&&isFinite(n[1])?n[1]=+n[1]:n[1]=0:n=!isNaN(parseFloat(n))&&isFinite(n)?[1,+n]:[1,0],e[l].data=[n]}for(var l=0;l<e.length;++l)i+=e[l].data[0][1];for(var l=0;l<e.length;++l){var n=e[l].data[0][1];n/i<=y.series.pie.combine.threshold&&(s+=n,t++,r||(r=e[l].color))}for(var l=0;l<e.length;++l){var n=e[l].data[0][1];(t<2||n/i>y.series.pie.combine.threshold)&&a.push(P.extend(e[l],{data:[[1,n]],color:e[l].color,label:e[l].label,angle:n*Math.PI*2/i,percent:n/(i/100)}))}return 1<t&&a.push({data:[[1,s]],color:r,label:y.series.pie.combine.label,angle:s*Math.PI*2/i,percent:s/(i/100)}),a}(r.getData()))))}),h.hooks.drawOverlay.push(function(e,i){e.getOptions().series.pie.show&&function(e,i){var s=e.getOptions(),t=1<s.series.pie.radius?s.series.pie.radius:u*s.series.pie.radius;i.save(),i.translate(k,M),i.scale(1,s.series.pie.tilt);for(var r=0;r<c.length;++r)a(c[r].series);function a(e){e.angle<=0||isNaN(e.angle)||(i.fillStyle="rgba(255, 255, 255, "+s.series.pie.highlight.opacity+")",i.beginPath(),1e-9<Math.abs(e.angle-2*Math.PI)&&i.moveTo(0,0),i.arc(0,0,t,e.startAngle,e.startAngle+e.angle/2,!1),i.arc(0,0,t,e.startAngle+e.angle/2,e.startAngle+e.angle,!1),i.closePath(),i.fill())}p(i),i.restore()}(e,i)}),h.hooks.draw.push(function(e,i){e.getOptions().series.pie.show&&function(e,i){if(w){var v=e.getPlaceholder().width(),b=e.getPlaceholder().height(),s=w.children().filter(".legend").children().width()||0;g=i,o=!1,u=Math.min(v,b/y.series.pie.tilt)/2,M=b/2+y.series.pie.offset.top,k=v/2,"auto"==y.series.pie.offset.left?(y.legend.position.match("w")?k+=s/2:k-=s/2,k<u?k=u:v-u<k&&(k=v-u)):k+=y.series.pie.offset.left;for(var l=e.getData(),t=0;0<t&&(u*=.95),t+=1,r(),y.series.pie.tilt<=.8&&a(),!n()&&t<10;);10<=t&&(r(),w.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")),e.setSeries&&e.insertLegend&&(e.setSeries(l),e.insertLegend())}function r(){g.clearRect(0,0,v,b),w.children().filter(".pieLabel, .pieLabelBackground").remove()}function a(){var e=y.series.pie.shadow.left,i=y.series.pie.shadow.top,s=y.series.pie.shadow.alpha,t=1<y.series.pie.radius?y.series.pie.radius:u*y.series.pie.radius;if(!(v/2-e<=t||t*y.series.pie.tilt>=b/2-i||t<=10)){g.save(),g.translate(e,i),g.globalAlpha=s,g.fillStyle="#000",g.translate(k,M),g.scale(1,y.series.pie.tilt);for(var r=1;r<=10;r++)g.beginPath(),g.arc(0,0,t,0,2*Math.PI,!1),g.fill(),t-=r;g.restore()}}function n(){var t=Math.PI*y.series.pie.startAngle,r=1<y.series.pie.radius?y.series.pie.radius:u*y.series.pie.radius;g.save(),g.translate(k,M),g.scale(1,y.series.pie.tilt),g.save();for(var a=t,e=0;e<l.length;++e)l[e].startAngle=a,i(l[e].angle,l[e].color,!0);if(g.restore(),0<y.series.pie.stroke.width){g.save(),g.lineWidth=y.series.pie.stroke.width,a=t;for(var e=0;e<l.length;++e)i(l[e].angle,y.series.pie.stroke.color,!1);g.restore()}return p(g),g.restore(),!y.series.pie.label.show||function(){for(var e=t,f=1<y.series.pie.label.radius?y.series.pie.label.radius:u*y.series.pie.label.radius,i=0;i<l.length;++i){if(l[i].percent>=100*y.series.pie.label.threshold&&!s(l[i],e,i))return!1;e+=l[i].angle}return!0;function s(e,i,s){if(0==e.data[0][1])return!0;var t,r=y.legend.labelFormatter,a=y.series.pie.label.formatter;t=r?r(e.label,e):e.label,a&&(t=a(t,e));var l=(i+e.angle+i)/2,n=k+Math.round(Math.cos(l)*f),o=M+Math.round(Math.sin(l)*f)*y.series.pie.tilt,p="<span class='pieLabel' id='pieLabel"+s+"' style='position:absolute;top:"+o+"px;left:"+n+"px;'>"+t+"</span>";w.append(p);var h=w.children("#pieLabel"+s),u=o-h.height()/2,g=n-h.width()/2;if(h.css("top",u),h.css("left",g),0<0-u||0<0-g||b-(u+h.height())<0||v-(g+h.width())<0)return!1;if(0!=y.series.pie.label.background.opacity){var c=y.series.pie.label.background.color;null==c&&(c=e.color);var d="top:"+u+"px;left:"+g+"px;";P("<div class='pieLabelBackground' style='position:absolute;width:"+h.width()+"px;height:"+h.height()+"px;"+d+"background-color:"+c+";'></div>").css("opacity",y.series.pie.label.background.opacity).insertBefore(h)}return!0}}();function i(e,i,s){e<=0||isNaN(e)||(s?g.fillStyle=i:(g.strokeStyle=i,g.lineJoin="round"),g.beginPath(),1e-9<Math.abs(e-2*Math.PI)&&g.moveTo(0,0),g.arc(0,0,r,a,a+e/2,!1),g.arc(0,0,r,a+e/2,a+e,!1),g.closePath(),a+=e,s?g.fill():g.stroke())}}}(e,i)})},options:s,name:"pie",version:"1.1"})});