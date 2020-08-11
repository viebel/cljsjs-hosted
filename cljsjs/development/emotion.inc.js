!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(e.emotion={})}(this,function(e){"use strict";var l=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var r=e.prototype;return r.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var r,t=(a=this,(n=document.createElement("style")).setAttribute("data-emotion",a.key),void 0!==a.nonce&&n.setAttribute("nonce",a.nonce),n.appendChild(document.createTextNode("")),n);r=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(t,r),this.tags.push(t)}var a,n,s=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(s);try{var c=105===e.charCodeAt(1)&&64===e.charCodeAt(0);i.insertRule(e,c?0:i.cssRules.length)}catch(e){}}else s.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}();function f(e){function j(e,r,t){var a=r.trim().split(u),n=(r=a).length,s=e.length;switch(s){case 0:case 1:var i=0;for(e=0===s?"":e[0]+" ";i<n;++i)r[i]=l(e,r[i],t).trim();break;default:var c=i=0;for(r=[];i<n;++i)for(var o=0;o<s;++o)r[c++]=l(e[o]+" ",a[i],t).trim()}return r}function l(e,r,t){var a=r.charCodeAt(0);switch(a<33&&(a=(r=r.trim()).charCodeAt(0)),a){case 38:return r.replace(n,"$1"+e.trim());case 58:return e.trim()+r.replace(n,"$1"+e.trim());default:if(0<1*t&&0<r.indexOf("\f"))return r.replace(n,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+r}function z(e,r,t,a){var n=e+";",s=2*r+3*t+4*a;if(944===s){e=n.indexOf(":",9)+1;var i=n.substring(e,n.length-1).trim();return i=n.substring(0,e).trim()+i+";",1===T||2===T&&E(i,1)?"-webkit-"+i+i:i}if(0===T||2===T&&!E(n,1))return n;switch(s){case 1015:return 97===n.charCodeAt(10)?"-webkit-"+n+n:n;case 951:return 116===n.charCodeAt(3)?"-webkit-"+n+n:n;case 963:return 110===n.charCodeAt(5)?"-webkit-"+n+n:n;case 1009:if(100!==n.charCodeAt(4))break;case 969:case 942:return"-webkit-"+n+n;case 978:return"-webkit-"+n+"-moz-"+n+n;case 1019:case 983:return"-webkit-"+n+"-moz-"+n+"-ms-"+n+n;case 883:if(45===n.charCodeAt(8))return"-webkit-"+n+n;if(0<n.indexOf("image-set(",11))return n.replace(p,"$1-webkit-$2")+n;break;case 932:if(45===n.charCodeAt(4))switch(n.charCodeAt(5)){case 103:return"-webkit-box-"+n.replace("-grow","")+"-webkit-"+n+"-ms-"+n.replace("grow","positive")+n;case 115:return"-webkit-"+n+"-ms-"+n.replace("shrink","negative")+n;case 98:return"-webkit-"+n+"-ms-"+n.replace("basis","preferred-size")+n}return"-webkit-"+n+"-ms-"+n+n;case 964:return"-webkit-"+n+"-ms-flex-"+n+n;case 1023:if(99!==n.charCodeAt(8))break;return"-webkit-box-pack"+(i=n.substring(n.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+n+"-ms-flex-pack"+i+n;case 1005:return o.test(n)?n.replace(c,":-webkit-")+n.replace(c,":-moz-")+n:n;case 1e3:switch(r=(i=n.substring(13).trim()).indexOf("-")+1,i.charCodeAt(0)+i.charCodeAt(r)){case 226:i=n.replace(d,"tb");break;case 232:i=n.replace(d,"tb-rl");break;case 220:i=n.replace(d,"lr");break;default:return n}return"-webkit-"+n+"-ms-"+i+n;case 1017:if(-1===n.indexOf("sticky",9))break;case 975:switch(r=(n=e).length-10,s=(i=(33===n.charCodeAt(r)?n.substring(0,r):n).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|i.charCodeAt(7))){case 203:if(i.charCodeAt(8)<111)break;case 115:n=n.replace(i,"-webkit-"+i)+";"+n;break;case 207:case 102:n=n.replace(i,"-webkit-"+(102<s?"inline-":"")+"box")+";"+n.replace(i,"-webkit-"+i)+";"+n.replace(i,"-ms-"+i+"box")+";"+n}return n+";";case 938:if(45===n.charCodeAt(5))switch(n.charCodeAt(6)){case 105:return i=n.replace("-items",""),"-webkit-"+n+"-webkit-box-"+i+"-ms-flex-"+i+n;case 115:return"-webkit-"+n+"-ms-flex-item-"+n.replace(b,"")+n;default:return"-webkit-"+n+"-ms-flex-line-pack"+n.replace("align-content","").replace(b,"")+n}break;case 973:case 989:if(45!==n.charCodeAt(3)||122===n.charCodeAt(4))break;case 931:case 953:if(!0===g.test(e))return 115===(i=e.substring(e.indexOf(":")+1)).charCodeAt(0)?z(e.replace("stretch","fill-available"),r,t,a).replace(":fill-available",":stretch"):n.replace(i,"-webkit-"+i)+n.replace(i,"-moz-"+i.replace("fill-",""))+n;break;case 962:if(n="-webkit-"+n+(102===n.charCodeAt(5)?"-ms-"+n:"")+n,211===t+a&&105===n.charCodeAt(13)&&0<n.indexOf("transform",10))return n.substring(0,n.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+n}return n}function E(e,r){var t=e.indexOf(1===r?":":"{"),a=e.substring(0,3!==r?t:10);return t=e.substring(t+1,e.length-1),i(2!==r?a:a.replace(s,"$1"),t,r)}function R(e,r){var t=z(r,r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2));return t!==r+";"?t.replace(a," or ($1)").substring(4):"("+r+")"}function _(e,r,t,a,n,s,i,c,o,l){for(var f,u=0,d=r;u<B;++u)switch(f=m[u].call(h,e,d,t,a,n,s,i,c,o,l)){case void 0:case!1:case!0:case null:break;default:d=f}if(d!==r)return d}function r(e){return void 0!==(e=e.prefix)&&(i=null,e?"function"!=typeof e?T=1:(T=2,i=e):T=0),r}function h(e,r){var t=e;if(t.charCodeAt(0)<33&&(t=t.trim()),t=[t],0<B){var a=_(-1,r,t,t,F,D,0,0,0,0);void 0!==a&&"string"==typeof a&&(r=a)}var n=function e(r,t,a,n,s){for(var i,c,o,l,f,u=0,d=0,h=0,b=0,g=0,p=0,m=o=i=0,k=0,v=0,w=0,y=0,A=a.length,C=A-1,x="",S="",O="",$="";k<A;){if(c=a.charCodeAt(k),k===C&&0!==d+b+h+u&&(0!==d&&(c=47===d?10:47),b=h=u=0,A++,C++),0===d+b+h+u){if(k===C&&(0<v&&(x=x.replace(N,"")),0<x.trim().length)){switch(c){case 32:case 9:case 59:case 13:case 10:break;default:x+=a.charAt(k)}c=59}switch(c){case 123:for(i=(x=x.trim()).charCodeAt(0),o=1,y=++k;k<A;){switch(c=a.charCodeAt(k)){case 123:o++;break;case 125:o--;break;case 47:switch(c=a.charCodeAt(k+1)){case 42:case 47:e:{for(m=k+1;m<C;++m)switch(a.charCodeAt(m)){case 47:if(42===c&&42===a.charCodeAt(m-1)&&k+2!==m){k=m+1;break e}break;case 10:if(47===c){k=m+1;break e}}k=m}}break;case 91:c++;case 40:c++;case 34:case 39:for(;k++<C&&a.charCodeAt(k)!==c;);}if(0===o)break;k++}switch(o=a.substring(y,k),0===i&&(i=(x=x.replace(G,"").trim()).charCodeAt(0)),i){case 64:switch(0<v&&(x=x.replace(N,"")),c=x.charCodeAt(1)){case 100:case 109:case 115:case 45:v=t;break;default:v=q}if(y=(o=e(t,v,o,c,s+1)).length,0<B&&(f=_(3,o,v=j(q,x,w),t,F,D,y,c,s,n),x=v.join(""),void 0!==f&&0===(y=(o=f.trim()).length)&&(c=0,o="")),0<y)switch(c){case 115:x=x.replace(W,R);case 100:case 109:case 45:o=x+"{"+o+"}";break;case 107:o=(x=x.replace(I,"$1 $2"))+"{"+o+"}",o=1===T||2===T&&E("@"+o,3)?"@-webkit-"+o+"@"+o:"@"+o;break;default:o=x+o,112===n&&(S+=o,o="")}else o="";break;default:o=e(t,j(t,x,w),o,n,s+1)}O+=o,o=w=v=m=i=0,x="",c=a.charCodeAt(++k);break;case 125:case 59:if(1<(y=(x=(0<v?x.replace(N,""):x).trim()).length))switch(0===m&&(i=x.charCodeAt(0),45===i||96<i&&i<123)&&(y=(x=x.replace(" ",":")).length),0<B&&void 0!==(f=_(1,x,t,r,F,D,S.length,n,s,n))&&0===(y=(x=f.trim()).length)&&(x="\0\0"),i=x.charCodeAt(0),c=x.charCodeAt(1),i){case 0:break;case 64:if(105===c||99===c){$+=x+a.charAt(k);break}default:58!==x.charCodeAt(y-1)&&(S+=z(x,i,c,x.charCodeAt(2)))}w=v=m=i=0,x="",c=a.charCodeAt(++k)}}switch(c){case 13:case 10:47===d?d=0:0===1+i&&107!==n&&0<x.length&&(v=1,x+="\0"),0<B*H&&_(0,x,t,r,F,D,S.length,n,s,n),D=1,F++;break;case 59:case 125:if(0===d+b+h+u){D++;break}default:switch(D++,l=a.charAt(k),c){case 9:case 32:if(0===b+u+d)switch(g){case 44:case 58:case 9:case 32:l="";break;default:32!==c&&(l=" ")}break;case 0:l="\\0";break;case 12:l="\\f";break;case 11:l="\\v";break;case 38:0===b+d+u&&(v=w=1,l="\f"+l);break;case 108:if(0===b+d+u+L&&0<m)switch(k-m){case 2:112===g&&58===a.charCodeAt(k-3)&&(L=g);case 8:111===p&&(L=p)}break;case 58:0===b+d+u&&(m=k);break;case 44:0===d+h+b+u&&(v=1,l+="\r");break;case 34:case 39:0===d&&(b=b===c?0:0===b?c:b);break;case 91:0===b+d+h&&u++;break;case 93:0===b+d+h&&u--;break;case 41:0===b+d+u&&h--;break;case 40:if(0===b+d+u){if(0===i)switch(2*g+3*p){case 533:break;default:i=1}h++}break;case 64:0===d+h+b+u+m+o&&(o=1);break;case 42:case 47:if(!(0<b+u+h))switch(d){case 0:switch(2*c+3*a.charCodeAt(k+1)){case 235:d=47;break;case 220:y=k,d=42}break;case 42:47===c&&42===g&&y+2!==k&&(33===a.charCodeAt(y+2)&&(S+=a.substring(y,k+1)),l="",d=0)}}0===d&&(x+=l)}p=g,g=c,k++}if(0<(y=S.length)){if(v=t,0<B&&void 0!==(f=_(2,S,v,r,F,D,y,n,s,n))&&0===(S=f).length)return $+S+O;if(S=v.join(",")+"{"+S+"}",0!=T*L){switch(2!==T||E(S,2)||(L=0),L){case 111:S=S.replace(P,":-moz-$1")+S;break;case 112:S=S.replace(M,"::-webkit-input-$1")+S.replace(M,"::-moz-$1")+S.replace(M,":-ms-input-$1")+S}L=0}}return $+S+O}(q,t,r,0,0);return 0<B&&(void 0!==(a=_(-2,n,t,t,F,D,n.length,0,0,0))&&(n=a)),"",L=0,D=F=1,n}var G=/^\0+/g,N=/[\0\r\f]/g,c=/: */g,o=/zoo|gra/,f=/([,: ])(transform)/g,u=/,\r+?/g,n=/([\t\r\n ])*\f?&/g,I=/@(k\w+)\s*(\S*)\s*/,M=/::(place)/g,P=/:(read-only)/g,d=/[svh]\w+-[tblr]{2}/,W=/\(\s*(.*)\s*\)/g,a=/([\s\S]*?);/g,b=/-self|flex-/g,s=/[^]*?(:[rp][el]a[\w-]+)[^]*/,g=/stretch|:\s*\w+\-(?:conte|avail)/,p=/([^-])(image-set\()/,D=1,F=1,L=0,T=1,q=[],m=[],B=0,i=null,H=0;return h.use=function e(r){switch(r){case void 0:case null:B=m.length=0;break;default:if("function"==typeof r)m[B++]=r;else if("object"==typeof r)for(var t=0,a=r.length;t<a;++t)e(r[t]);else H=0|!!r}return e},h.set=r,void 0!==e&&r(e),h}var u="/*|*/";function d(e){e&&h.current.insert(e+"}")}var h={current:null},b=function(e,r,t,a,n,s,i,c,o,l){switch(e){case 1:switch(r.charCodeAt(0)){case 64:return h.current.insert(r+";"),"";case 108:if(98===r.charCodeAt(2))return""}break;case 2:if(0===c)return r+u;break;case 3:switch(c){case 102:case 112:return h.current.insert(t[0]+r),"";default:return r+(0===l?u:"")}case-2:r.split("/*|*/}").forEach(d)}};var t={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var r,a,n=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,o=(r=function(e){return e.replace(n,"-$&").toLowerCase()},a={},function(e){return void 0===a[e]&&(a[e]=r(e)),a[e]}),g=function(e,r){if(null==r||"boolean"==typeof r)return"";switch(e){case"animation":case"animationName":"string"==typeof r&&(r=r.replace(s,function(e,r,t){return m={name:r,styles:t,next:m},r}))}return 1!==t[e]&&45!==e.charCodeAt(1)&&"number"==typeof r&&0!==r?r+"px":r};function p(e,r,t,a){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return m={name:t.name,styles:t.styles,next:m},t.name;if(void 0!==t.styles){var n=t.next;if(void 0!==n)for(;void 0!==n;)m={name:n.name,styles:n.styles,next:m},n=n.next;return t.styles}return function(e,r,t){var a="";if(Array.isArray(t))for(var n=0;n<t.length;n++)a+=p(e,r,t[n],!1);else for(var s in t){var i=t[s];if("object"!=typeof i)null!=r&&void 0!==r[i]?a+=s+"{"+r[i]+"}":a+=o(s)+":"+g(s,i)+";";else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=r&&void 0!==r[i[0]])a+=s+"{"+p(e,r,i,!1)+"}";else for(var c=0;c<i.length;c++)a+=o(s)+":"+g(s,i[c])+";"}return a}(e,r,t);case"function":if(void 0!==e){var s=m,i=t(e);return m=s,p(e,r,i,a)}default:if(null==r)return t;var c=r[t];return void 0===c||a?t:c}}var m,k=/label:\s*([^\s;\n{]+)\s*;/g,i=function(e,r,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var a=!0,n="";m=void 0;var s=e[0];null==s||void 0===s.raw?n+=p(t,r,s,a=!1):n+=s[0];for(var i=1;i<e.length;i++)n+=p(t,r,e[i],46===n.charCodeAt(n.length-1)),a&&(n+=s[i]);k.lastIndex=0;for(var c,o="";null!==(c=k.exec(n));)o+="-"+c[1];return{name:function(e){for(var r,t=e.length,a=t^t,n=0;4<=t;)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+((1540483477*(r>>>16)&65535)<<16),a=1540483477*(65535&a)+((1540483477*(a>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),t-=4,++n;switch(t){case 3:a^=(255&e.charCodeAt(n+2))<<16;case 2:a^=(255&e.charCodeAt(n+1))<<8;case 1:a=1540483477*(65535&(a^=255&e.charCodeAt(n)))+((1540483477*(a>>>16)&65535)<<16)}return a=1540483477*(65535&(a^=a>>>13))+((1540483477*(a>>>16)&65535)<<16),((a^=a>>>15)>>>0).toString(36)}(n)+o,styles:n,next:m}};function c(r,t,e){var a="";return e.split(" ").forEach(function(e){void 0!==r[e]?t.push(r[e]):a+=e+" "}),a}function v(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function w(e,r,t){var a=[],n=c(e,a,t);return a.length<2?t:n+r(a)}var y=function e(r){for(var t="",a=0;a<r.length;a++){var n=r[a];if(null!=n){var s=void 0;switch(typeof n){case"boolean":break;case"object":if(Array.isArray(n))s=e(n);else for(var i in s="",n)n[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=n}s&&(t&&(t+=" "),t+=s)}}return t},A=function(e){var s=function(e){void 0===e&&(e={});var r,t=e.key||"css";void 0!==e.prefix&&(r={prefix:e.prefix});var a,s=new f(r),n={};a=e.container||document.head;var i,c=document.querySelectorAll("style[data-emotion-"+t+"]");Array.prototype.forEach.call(c,function(e){e.getAttribute("data-emotion-"+t).split(" ").forEach(function(e){n[e]=!0}),e.parentNode!==a&&a.appendChild(e)}),s.use(e.stylisPlugins)(b),i=function(e,r,t,a){var n=r.name;h.current=t,s(e,r.styles),a&&(o.inserted[n]=!0)};var o={key:t,sheet:new l({key:t,container:a,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:n,registered:{},insert:i};return o}(e);s.sheet.speedy=function(e){this.isSpeedy=e},s.compat=!0;var a=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=i(r,s.registered,void 0!==this?this.mergedProps:void 0);return function(e,r,t){var a=e.key+"-"+r.name;if(!1===t&&void 0===e.registered[a]&&(e.registered[a]=r.styles),void 0===e.inserted[r.name])for(var n=r;e.insert("."+a,n,e.sheet,!0),void 0!==(n=n.next););}(s,a,!1),s.key+"-"+a.name};return{css:a,cx:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return w(s.registered,a,y(r))},injectGlobal:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=i(r,s.registered);v(s,a)},keyframes:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=i(r,s.registered),n="animation-"+a.name;return v(s,{name:a.name,styles:"@keyframes "+n+"{"+a.styles+"}"}),n},hydrate:function(e){e.forEach(function(e){s.inserted[e]=!0})},flush:function(){s.registered={},s.inserted={},s.sheet.flush()},sheet:s.sheet,cache:s,getRegisteredStyles:c.bind(null,s.registered),merge:w.bind(null,s.registered,a)}}(),C=A.flush,x=A.hydrate,S=A.cx,O=A.merge,$=A.getRegisteredStyles,j=A.injectGlobal,z=A.keyframes,E=A.css,R=A.sheet,_=A.cache;e.flush=C,e.hydrate=x,e.cx=S,e.merge=O,e.getRegisteredStyles=$,e.injectGlobal=j,e.keyframes=z,e.css=E,e.sheet=R,e.cache=_,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=emotion.umd.min.js.map
