/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(t,n,e){function o(t){return t=t||location.href,"#"+t.replace(/^[^#]*#?(.*)$/,"$1")}var r,i="hashchange",c=document,a=t.event.special,u=c.documentMode,f="on"+i in n&&(u===e||u>7);t.fn[i]=function(t){return t?this.bind(i,t):this.trigger(i)},t.fn[i].delay=50,a[i]=t.extend(a[i],{setup:function(){return f?!1:void t(r.start)},teardown:function(){return f?!1:void t(r.stop)}}),r=function(){function r(){var e=o(),c=p(s);e!==s?(l(s=e,c),t(n).trigger(i)):c!==s&&(location.href=location.href.replace(/#.*/,"")+c),a=setTimeout(r,t.fn[i].delay)}var a,u={},s=o(),d=function(t){return t},l=d,p=d;return u.start=function(){a||r()},u.stop=function(){a&&clearTimeout(a),a=e},t.browser.msie&&!f&&function(){var n,e;u.start=function(){n||(e=t.fn[i].src,e=e&&e+o(),n=t('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){e||l(o()),r()}).attr("src",e||"javascript:0").insertAfter("body")[0].contentWindow,c.onpropertychange=function(){try{"title"===event.propertyName&&(n.document.title=c.title)}catch(t){}})},u.stop=d,p=function(){return o(n.location.href)},l=function(e,o){var r=n.document,a=t.fn[i].domain;e!==o&&(r.title=c.title,r.open(),a&&r.write('<script>document.domain="'+a+'"</script>'),r.close(),n.location.hash=e)}}(),u}()}(jQuery,this);