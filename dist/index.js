!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ScrollPrevent=t()}(this,function(){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}
/**
   * ScrollPrevent - by zjhch123
   * https://github.com/zjhch123/ScrollPrevent
   * Issue: https://github.com/zjhch123/ScrollPrevent/issues
   */
var i=navigator.userAgent,a=new RegExp("(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)","i"),s=function(e,t,n,o,r){return 0==e?function(){t.removeEventListener("touchstart",n),t.removeEventListener("touchmove",o)}:function(){t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",o),window.removeEventListener("wheel",r)}};return new(
/* */
function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isTouch=a.test(i),this.targetDOM=null}var t,n,o;return t=e,(n=[{key:"init",value:function(e){if(e||Event.prototype.preventDefault&&Event.prototype.stopPropagation&&Element.prototype.addEventListener)return this.targetDOM=e,this.isTouch?this.initMobile():this.initWeb();console.error(new Error("Your browser is not support"))}},{key:"initMobile",value:function(){var n=this,o=this.targetDOM,r=0,e=function(e){r=e.touches[0].pageY},t=function(e){var t=e.touches[0].pageY;(0<t-r&&0==n.targetDOM.scrollTop||t-r<0&&n.targetDOM.scrollTop==n.getMaxScroll(o))&&e.preventDefault(),r=t};return o.addEventListener("touchstart",e),o.addEventListener("touchmove",t),s(0,o,e,t)}},{key:"initWeb",value:function(){var t=this,n=this.targetDOM,o=!1,e=function(){o=!0},r=function(){o=!1},i=function(e){o&&(e.deltaY<=0&&0==n.scrollTop?e.preventDefault():0<e.deltaY&&n.scrollTop==t.getMaxScroll(n)&&e.preventDefault())};return n.addEventListener("mouseenter",e),n.addEventListener("mouseleave",r),window.addEventListener("wheel",i),s(1,n,e,r,i)}},{key:"getMaxScroll",value:function(){var e=this.targetDOM;return e.scrollHeight-e.clientHeight}}])&&r(t.prototype,n),o&&r(t,o),e}())});
