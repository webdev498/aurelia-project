!function(e,o){"function"==typeof define&&define.amd?define(["jquery","px-libs/jquery.flot"],o):"object"==typeof exports?module.exports=o(require("jquery"),require("px-libs/jquery.flot")):e.Jquery_flot_categories=o(e.jQuery,e._flot_)}(this,function(e,o){!function(a){function o(e,o,r,i){var n="categories"==o.xaxis.options.mode,t="categories"==o.yaxis.options.mode;if(n||t){var s=i.format;if(!s){var a=o;if((s=[]).push({x:!0,number:!0,required:!0}),s.push({y:!0,number:!0,required:!0}),a.bars.show||a.lines.show&&a.lines.fill){var u=!!(a.bars.show&&a.bars.zero||a.lines.show&&a.lines.zero);s.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:u}),a.bars.horizontal&&(delete s[s.length-1].y,s[s.length-1].x=!0)}i.format=s}for(var f=0;f<s.length;++f)s[f].x&&n&&(s[f].number=!1),s[f].y&&t&&(s[f].number=!1)}}function u(e){var o=[];for(var r in e.categories){var i=e.categories[r];i>=e.min&&i<=e.max&&o.push([i,r])}return o.sort(function(e,o){return e[0]-o[0]}),o}function i(e,o,r){if("categories"==e[o].options.mode){if(!e[o].categories){var i={},n=e[o].options.categories||{};if(a.isArray(n))for(var t=0;t<n.length;++t)i[n[t]]=t;else for(var s in n)i[s]=n[s];e[o].categories=i}e[o].options.ticks||(e[o].options.ticks=u),function(e,o,r){for(var i=e.points,n=e.pointsize,t=e.format,s=o.charAt(0),a=function(e){var o=-1;for(var r in e)e[r]>o&&(o=e[r]);return o+1}(r),u=0;u<i.length;u+=n)if(null!=i[u])for(var f=0;f<n;++f){var l=i[u+f];null!=l&&t[f][s]&&(l in r||(r[l]=a,++a),i[u+f]=r[l])}}(r,o,e[o].categories)}}function r(e,o,r){i(o,"xaxis",r),i(o,"yaxis",r)}a.plot.plugins.push({init:function(e){e.hooks.processRawData.push(o),e.hooks.processDatapoints.push(r)},options:{xaxis:{categories:null},yaxis:{categories:null}},name:"categories",version:"1.0"})}(e)});