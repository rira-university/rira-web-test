(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6106:function(e,n,t){"use strict";t.d(n,{Z:function(){return ie}});var r=function(){function e(e){var n=this;this._insertTag=function(e){var t;t=0===n.tags.length?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(e,t),n.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(e){e.forEach(this._insertTag)},n.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),void 0!==e.nonce&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}(n);try{t.insertRule(e,t.cssRules.length)}catch(r){0}}else n.appendChild(document.createTextNode(e));this.ctr++},n.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=Math.abs,o=String.fromCharCode,a=Object.assign;function c(e){return e.trim()}function s(e,n,t){return e.replace(n,t)}function u(e,n){return e.indexOf(n)}function l(e,n){return 0|e.charCodeAt(n)}function f(e,n,t){return e.slice(n,t)}function d(e){return e.length}function p(e){return e.length}function h(e,n){return n.push(e),e}var m=1,y=1,v=0,g=0,b=0,w="";function x(e,n,t,r,i,o,a){return{value:e,root:n,parent:t,type:r,props:i,children:o,line:m,column:y,length:a,return:""}}function k(e,n){return a(x("",null,null,"",null,null,0),e,{length:-e.length},n)}function S(){return b=g>0?l(w,--g):0,y--,10===b&&(y=1,m--),b}function $(){return b=g<v?l(w,g++):0,y++,10===b&&(y=1,m++),b}function C(){return l(w,g)}function O(){return g}function j(e,n){return f(w,e,n)}function _(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A(e){return m=y=1,v=d(w=e),g=0,[]}function E(e){return w="",e}function P(e){return c(j(g-1,R(91===e?e+2:40===e?e+1:e)))}function Z(e){for(;(b=C())&&b<33;)$();return _(e)>2||_(b)>3?"":" "}function M(e,n){for(;--n&&$()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return j(e,O()+(n<6&&32==C()&&32==$()))}function R(e){for(;$();)switch(b){case e:return g;case 34:case 39:34!==e&&39!==e&&R(b);break;case 40:41===e&&R(e);break;case 92:$()}return g}function T(e,n){for(;$()&&e+b!==57&&(e+b!==84||47!==C()););return"/*"+j(n,g-1)+"*"+o(47===e?e:$())}function I(e){for(;!_(C());)$();return j(e,g)}var N="-ms-",z="-moz-",L="-webkit-",F="comm",B="rule",D="decl",X="@keyframes";function U(e,n){for(var t="",r=p(e),i=0;i<r;i++)t+=n(e[i],i,e,n)||"";return t}function G(e,n,t,r){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case F:return"";case X:return e.return=e.value+"{"+U(e.children,r)+"}";case B:e.value=e.props.join(",")}return d(t=U(e.children,r))?e.return=e.value+"{"+t+"}":""}function H(e,n){switch(function(e,n){return(((n<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3)}(e,n)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+z+e+N+e+e;case 6828:case 4268:return L+e+N+e+e;case 6165:return L+e+N+"flex-"+e+e;case 5187:return L+e+s(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return L+e+N+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return L+e+N+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return L+e+N+s(e,"shrink","negative")+e;case 5292:return L+e+N+s(e,"basis","preferred-size")+e;case 6060:return L+"box-"+s(e,"-grow","")+L+e+N+s(e,"grow","positive")+e;case 4554:return L+s(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-n>6)switch(l(e,n+1)){case 109:if(45!==l(e,n+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+z+(108==l(e,n+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?H(s(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(115!==l(e,n+1))break;case 6444:switch(l(e,d(e)-3-(~u(e,"!important")&&10))){case 107:return s(e,":",":"+L)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(45===l(e,14)?"inline-":"")+"box$3$1"+L+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(l(e,n+11)){case 114:return L+e+N+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+N+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+N+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return L+e+N+e+e}return e}function W(e){return E(K("",null,null,null,[""],e=A(e),0,[0],e))}function K(e,n,t,r,i,a,c,l,f){for(var p=0,m=0,y=c,v=0,g=0,b=0,w=1,x=1,k=1,j=0,_="",A=i,E=a,R=r,N=_;x;)switch(b=j,j=$()){case 40:if(108!=b&&58==N.charCodeAt(y-1)){-1!=u(N+=s(P(j),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:N+=P(j);break;case 9:case 10:case 13:case 32:N+=Z(b);break;case 92:N+=M(O()-1,7);continue;case 47:switch(C()){case 42:case 47:h(q(T($(),O()),n,t),f);break;default:N+="/"}break;case 123*w:l[p++]=d(N)*k;case 125*w:case 59:case 0:switch(j){case 0:case 125:x=0;case 59+m:g>0&&d(N)-y&&h(g>32?J(N+";",r,t,y-1):J(s(N," ","")+";",r,t,y-2),f);break;case 59:N+=";";default:if(h(R=Y(N,n,t,p,m,i,l,_,A=[],E=[],y),a),123===j)if(0===m)K(N,n,R,R,A,a,y,l,E);else switch(v){case 100:case 109:case 115:K(e,R,R,r&&h(Y(e,R,R,0,0,i,l,_,i,A=[],y),E),i,E,y,l,r?A:E);break;default:K(N,R,R,R,[""],E,0,l,E)}}p=m=g=0,w=k=1,_=N="",y=c;break;case 58:y=1+d(N),g=b;default:if(w<1)if(123==j)--w;else if(125==j&&0==w++&&125==S())continue;switch(N+=o(j),j*w){case 38:k=m>0?1:(N+="\f",-1);break;case 44:l[p++]=(d(N)-1)*k,k=1;break;case 64:45===C()&&(N+=P($())),v=C(),m=y=d(_=N+=I(O())),j++;break;case 45:45===b&&2==d(N)&&(w=0)}}return a}function Y(e,n,t,r,o,a,u,l,d,h,m){for(var y=o-1,v=0===o?a:[""],g=p(v),b=0,w=0,k=0;b<r;++b)for(var S=0,$=f(e,y+1,y=i(w=u[b])),C=e;S<g;++S)(C=c(w>0?v[S]+" "+$:s($,/&\f/g,v[S])))&&(d[k++]=C);return x(e,n,t,0===o?B:l,d,h,m)}function q(e,n,t){return x(e,n,t,F,o(b),f(e,2,-2),0)}function J(e,n,t,r){return x(e,n,t,D,f(e,0,r),f(e,r+1,-1),r)}var V=function(e,n,t){for(var r=0,i=0;r=i,i=C(),38===r&&12===i&&(n[t]=1),!_(i);)$();return j(e,g)},Q=function(e,n){return E(function(e,n){var t=-1,r=44;do{switch(_(r)){case 0:38===r&&12===C()&&(n[t]=1),e[t]+=V(g-1,n,t);break;case 2:e[t]+=P(r);break;case 4:if(44===r){e[++t]=58===C()?"&\f":"",n[t]=e[t].length;break}default:e[t]+=o(r)}}while(r=$());return e}(A(e),n))},ee=new WeakMap,ne=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var n=e.value,t=e.parent,r=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===n.charCodeAt(0)||ee.get(t))&&!r){ee.set(e,!0);for(var i=[],o=Q(n,i),a=t.props,c=0,s=0;c<o.length;c++)for(var u=0;u<a.length;u++,s++)e.props[s]=i[c]?o[c].replace(/&\f/g,a[u]):a[u]+" "+o[c]}}},te=function(e){if("decl"===e.type){var n=e.value;108===n.charCodeAt(0)&&98===n.charCodeAt(2)&&(e.return="",e.value="")}},re=[function(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=H(e.value,e.length);break;case X:return U([k(e,{value:s(e.value,"@","@"+L)})],r);case B:if(e.length)return function(e,n){return e.map(n).join("")}(e.props,(function(n){switch(function(e,n){return(e=n.exec(e))?e[0]:e}(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([k(e,{props:[s(n,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return U([k(e,{props:[s(n,/:(plac\w+)/,":-webkit-input-$1")]}),k(e,{props:[s(n,/:(plac\w+)/,":-moz-$1")]}),k(e,{props:[s(n,/:(plac\w+)/,N+"input-$1")]})],r)}return""}))}}],ie=function(e){var n=e.key;if("css"===n){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var i=e.stylisPlugins||re;var o,a,c={},s=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),(function(e){for(var n=e.getAttribute("data-emotion").split(" "),t=1;t<n.length;t++)c[n[t]]=!0;s.push(e)}));var u,l,f=[G,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],d=function(e){var n=p(e);return function(t,r,i,o){for(var a="",c=0;c<n;c++)a+=e[c](t,r,i,o)||"";return a}}([ne,te].concat(i,f));a=function(e,n,t,r){u=t,U(W(e?e+"{"+n.styles+"}":n.styles),d),r&&(h.inserted[n.name]=!0)};var h={key:n,sheet:new r({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:a};return h.sheet.hydrate(s),h}},917:function(e,n,t){"use strict";t.d(n,{iv:function(){return i}});t(7294),t(6106),t(8679);var r=t(2243);function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.O)(n)}},156:function(e,n,t){"use strict";t.d(n,{HY:function(){return m},tZ:function(){return y},BX:function(){return v}});var r=t(7294),i=t(6106);var o=t(2243),a={}.hasOwnProperty,c=(0,r.createContext)("undefined"!==typeof HTMLElement?(0,i.Z)({key:"css"}):null);c.Provider;var s=function(e){return(0,r.forwardRef)((function(n,t){var i=(0,r.useContext)(c);return e(n,i,t)}))},u=(0,r.createContext)({});var l="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",f=function(e,n){var t={};for(var r in n)a.call(n,r)&&(t[r]=n[r]);return t[l]=e,t},d=function(){return null},p=s((function(e,n,t){var i=e.css;"string"===typeof i&&void 0!==n.registered[i]&&(i=n.registered[i]);var c=e[l],s=[i],f="";"string"===typeof e.className?f=function(e,n,t){var r="";return t.split(" ").forEach((function(t){void 0!==e[t]?n.push(e[t]+";"):r+=t+" "})),r}(n.registered,s,e.className):null!=e.className&&(f=e.className+" ");var p=(0,o.O)(s,void 0,(0,r.useContext)(u));!function(e,n,t){var r=e.key+"-"+n.name;if(!1===t&&void 0===e.registered[r]&&(e.registered[r]=n.styles),void 0===e.inserted[n.name]){var i=n;do{e.insert(n===i?"."+r:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}(n,p,"string"===typeof c);f+=n.key+"-"+p.name;var h={};for(var m in e)a.call(e,m)&&"css"!==m&&m!==l&&(h[m]=e[m]);h.ref=t,h.className=f;var y=(0,r.createElement)(c,h),v=(0,r.createElement)(d,null);return(0,r.createElement)(r.Fragment,null,v,y)}));t(8679);var h=t(5893),m=h.Fragment;function y(e,n,t){return a.call(n,"css")?(0,h.jsx)(p,f(e,n),t):(0,h.jsx)(e,n,t)}function v(e,n,t){return a.call(n,"css")?(0,h.jsxs)(p,f(e,n),t):(0,h.jsxs)(e,n,t)}},2243:function(e,n,t){"use strict";t.d(n,{O:function(){return h}});var r=function(e){for(var n,t=0,r=0,i=e.length;i>=4;++r,i-=4)n=1540483477*(65535&(n=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(n>>>16)<<16),t=1540483477*(65535&(n^=n>>>24))+(59797*(n>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(i){case 3:t^=(255&e.charCodeAt(r+2))<<16;case 2:t^=(255&e.charCodeAt(r+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(r)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)},i={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var o=/[A-Z]|^ms/g,a=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!==typeof e},u=function(e){var n=Object.create(null);return function(t){return void 0===n[t]&&(n[t]=e(t)),n[t]}}((function(e){return c(e)?e:e.replace(o,"-$&").toLowerCase()})),l=function(e,n){switch(e){case"animation":case"animationName":if("string"===typeof n)return n.replace(a,(function(e,n,t){return d={name:n,styles:t,next:d},n}))}return 1===i[e]||c(e)||"number"!==typeof n||0===n?n:n+"px"};function f(e,n,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return d={name:t.name,styles:t.styles,next:d},t.name;if(void 0!==t.styles){var r=t.next;if(void 0!==r)for(;void 0!==r;)d={name:r.name,styles:r.styles,next:d},r=r.next;return t.styles+";"}return function(e,n,t){var r="";if(Array.isArray(t))for(var i=0;i<t.length;i++)r+=f(e,n,t[i])+";";else for(var o in t){var a=t[o];if("object"!==typeof a)null!=n&&void 0!==n[a]?r+=o+"{"+n[a]+"}":s(a)&&(r+=u(o)+":"+l(o,a)+";");else if(!Array.isArray(a)||"string"!==typeof a[0]||null!=n&&void 0!==n[a[0]]){var c=f(e,n,a);switch(o){case"animation":case"animationName":r+=u(o)+":"+c+";";break;default:r+=o+"{"+c+"}"}}else for(var d=0;d<a.length;d++)s(a[d])&&(r+=u(o)+":"+l(o,a[d])+";")}return r}(e,n,t);case"function":if(void 0!==e){var i=d,o=t(e);return d=i,f(e,n,o)}break;case"string":}if(null==n)return t;var a=n[t];return void 0!==a?a:t}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var h=function(e,n,t){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var i=!0,o="";d=void 0;var a=e[0];null==a||void 0===a.raw?(i=!1,o+=f(t,n,a)):o+=a[0];for(var c=1;c<e.length;c++)o+=f(t,n,e[c]),i&&(o+=a[c]);p.lastIndex=0;for(var s,u="";null!==(s=p.exec(o));)u+="-"+s[1];return{name:r(o)+u,styles:o,next:d}}},8679:function(e,n,t){"use strict";var r=t(1296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?a:c[e.$$typeof]||i}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(n,t,r){if("string"!==typeof t){if(h){var i=p(t);i&&i!==h&&e(n,i,r)}var a=l(t);f&&(a=a.concat(f(t)));for(var c=s(n),m=s(t),y=0;y<a.length;++y){var v=a[y];if(!o[v]&&(!r||!r[v])&&(!m||!m[v])&&(!c||!c[v])){var g=d(t,v);try{u(n,v,g)}catch(b){}}}}return n}},6103:function(e,n){"use strict";var t="function"===typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,u=t?Symbol.for("react.context"):60110,l=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,p=t?Symbol.for("react.suspense"):60113,h=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.block"):60121,g=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118,w=t?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case l:case f:case o:case c:case a:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case y:case m:case s:return e;default:return n}}case i:return n}}}function k(e){return x(e)===f}n.AsyncMode=l,n.ConcurrentMode=f,n.ContextConsumer=u,n.ContextProvider=s,n.Element=r,n.ForwardRef=d,n.Fragment=o,n.Lazy=y,n.Memo=m,n.Portal=i,n.Profiler=c,n.StrictMode=a,n.Suspense=p,n.isAsyncMode=function(e){return k(e)||x(e)===l},n.isConcurrentMode=k,n.isContextConsumer=function(e){return x(e)===u},n.isContextProvider=function(e){return x(e)===s},n.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return x(e)===d},n.isFragment=function(e){return x(e)===o},n.isLazy=function(e){return x(e)===y},n.isMemo=function(e){return x(e)===m},n.isPortal=function(e){return x(e)===i},n.isProfiler=function(e){return x(e)===c},n.isStrictMode=function(e){return x(e)===a},n.isSuspense=function(e){return x(e)===p},n.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===f||e===c||e===a||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===g||e.$$typeof===b||e.$$typeof===w||e.$$typeof===v)},n.typeOf=x},1296:function(e,n,t){"use strict";e.exports=t(6103)},2136:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(9336)}])},3330:function(e,n,t){"use strict";var r;t.d(n,{v:function(){return r}}),function(e){e.En="en",e.Jp="jp",e.Kr="kr"}(r||(r={}))},3569:function(e,n,t){"use strict";t.d(n,{Z6:function(){return r},_w:function(){return i},FF:function(){return o},R1:function(){return a}});var r="'Baloo 2'",i="'BalooDa 2'",o="'ONE-Mobile-Regular'",a="'ONE-Mobile-POP'"},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(6273),s=t(387),u=t(7190);var l={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=s.useRouter(),o=a.default.useMemo((function(){var n=i(c.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),d=o.href,p=o.as,h=e.children,m=e.replace,y=e.shallow,v=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,w=i(u.useIntersection({rootMargin:"200px"}),2),x=w[0],k=w[1],S=a.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);a.default.useEffect((function(){var e=k&&t&&c.isLocalURL(d),n="undefined"!==typeof g?g:r&&r.locale,i=l[d+"%"+p+(n?"%"+n:"")];e&&!i&&f(r,d,p,{locale:n})}),[p,d,k,g,t,r]);var $={ref:S,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),n[i?"replace":"push"](t,r,{shallow:o,locale:s,scroll:a}))}(e,r,d,p,m,y,v,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof g?g:r&&r.locale,O=r&&r.isLocaleDomain&&c.getDomainLocale(p,C,r&&r.locales,r&&r.domainLocales);$.href=O||c.addBasePath(c.addLocale(p,C,r&&r.defaultLocale))}return a.default.cloneElement(n,$)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,r=o.useRef(),u=i(o.useState(!1),2),l=u[0],f=u[1],d=o.useCallback((function(e){r.current&&(r.current(),r.current=void 0),t||l||e&&e.tagName&&(r.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,l]);return o.useEffect((function(){if(!c&&!l){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[l]),[d,l]};var o=t(7294),a=t(9311),c="undefined"!==typeof IntersectionObserver;var s=new Map},9336:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r=t(156),i=t(9008),o=t(3330),a=JSON.parse('{"en":{"title":"Welcome to Rira Institute of Technology!","description":"Welcome to Rira Institute of Technology!.","keywords":["Rira","RIT","Rira Institute of Technology"]},"jp":{"title":"\u30ea\u30e9\u5de5\u79d1\u5927\u5b66\u3078\u3088\u3046\u3053\u305d\uff01","description":"\u30ea\u30e9\u5de5\u79d1\u5927\u5b66\u3078\u3088\u3046\u3053\u305d\uff01 \ube14\ub85d\uccb4\uc778 \uc704\uc5d0 \uc138\uc6cc\uc9c4 \uc138\uacc4 \ucd5c\ucd08\uc758 \ub300\ud559\uc5d0\uc11c \uc5ec\ub7ec\ubd84\uc758 \uafc8\uc744 \ud3bc\uce58\uc138\uc694.","keywords":["Rira","RIT","Rira Institute of Technology"]},"kr":{"title":"\ub9ac\ub77c \uacf5\uacfc\ub300\ud559\uc5d0 \uc5b4\uc11c\uc624\uc138\uc694!","description":"\uc774\uacf3\uc740 \ub9ac\ub77c \uacf5\uacfc\ub300\ud559\uc785\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778 \uc704\uc5d0 \uc138\uc6cc\uc9c4 \uc138\uacc4 \ucd5c\ucd08\uc758 \ub300\ud559\uc5d0\uc11c \uc5ec\ub7ec\ubd84\uc758 \uafc8\uc744 \ud3bc\uce58\uc138\uc694.","keywords":["Rira","RIT","Rira Institute of Technology","\ub9ac\ub77c","\ub9ac\ub77c \uacf5\uacfc\ub300\ud559"]}}');function c(e){var n=e.currentLangCode,t=a[n||o.v.En];return(0,r.BX)(i.default,{children:[(0,r.tZ)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.tZ)("meta",{charSet:"UTF-8"}),(0,r.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.tZ)("title",{children:t.title}),(0,r.tZ)("meta",{name:"description",content:t.description}),(0,r.tZ)("meta",{name:"keywords",content:t.keywords.join(", ")}),(0,r.tZ)("link",{rel:"alternate",hrefLang:"x-default",href:"https://rira.university/en"})]})}var s=t(7294),u=t(1664),l=t(917),f=t(3569);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function p(){var e=d(["\n        align-items: center;\n        background-color: white;\n        display: flex;\n        height: 60px;\n        justify-content: space-between;\n        position: sticky;\n        top: 0;\n        z-index: 2;\n\n        @media (min-width: 1024px) {\n          height: 120px;\n          padding: 0 calc(100% * 192 / 1440);\n        }\n      "]);return p=function(){return e},e}function h(){var e=d(["\n          align-items: center;\n          background-color: white;\n          display: flex;\n          height: 100%;\n          justify-content: space-between;\n          padding: 0 20px;\n          width: 100%;\n\n          @media (min-width: 1024px) {\n            padding: 0;\n          }\n        "]);return h=function(){return e},e}function m(){var e=d(["\n              object-fit: contain;\n              width: 109px;\n\n              @media (min-width: 1024px) {\n                width: 219px;\n              }\n            "]);return m=function(){return e},e}function y(){var e=d(["\n            cursor: pointer;\n            object-fit: contain;\n            width: 20px;\n\n            @media (min-width: 1024px) {\n              display: none;\n            }\n          "]);return y=function(){return e},e}function v(){var e=d(["\n            background-color: black;\n            content: '';\n            display: ",";\n            height: 100vh;\n            left: 0;\n            opacity: 0.5;\n            position: fixed;\n            top: 0;\n            width: 100%;\n            z-index: -1;\n\n            @media (min-width: 1024px) {\n              display: none;\n            }\n          "]);return v=function(){return e},e}function g(){var e=d(["\n          align-items: flex-end;\n          background-color: white;\n          bottom: 0;\n          display: flex;\n          flex-direction: column;\n          left: 0;\n          padding-bottom: 12px;\n          position: absolute;\n          transform: translateY(",");\n          transition: transform 0.3s;\n          width: 100%;\n          z-index: -1;\n\n          @media (min-width: 1024px) {\n            align-items: center;\n            flex-direction: row;\n            height: 100%;\n            justify-content: flex-end;\n            padding-bottom: 0;\n            position: relative;\n            transform: translateY(0);\n            transition: transform 0s;\n          }\n        "]);return g=function(){return e},e}function b(){var e=d(["\n            align-items: flex-end;\n            display: flex;\n            flex-direction: column;\n\n            @media (min-width: 1024px) {\n              align-items: center;\n              flex-direction: row;\n            }\n\n            > a {\n              font-family: ",", sans-serif;\n              font-size: 24px;\n              height: 48px;\n              letter-spacing: -0.75px;\n              line-height: 1.25;\n              padding: 9px 20px;\n\n              @media (min-width: 1024px) {\n                height: auto;\n                margin-left: 20px;\n                padding: 0;\n              }\n            }\n          "]);return b=function(){return e},e}function w(){var e=d(["\n              cursor: pointer;\n            "]);return w=function(){return e},e}function x(){var e=d(["\n            align-items: center;\n            display: flex;\n\n            height: 48px;\n            justify-content: flex-end;\n            padding: 0 20px;\n\n            @media (min-width: 1024px) {\n              margin-left: 40px;\n              padding: 0;\n            }\n          "]);return x=function(){return e},e}function k(){var e=d(["\n                  color: ",";\n                  font-family: ",", sans-serif;\n                  font-size: 24px;\n                  letter-spacing: -0.75px;\n\n                  &:not(:first-of-type) {\n                    margin-left: 10px;\n                  }\n\n                  @media (min-width: 1024px) {\n                    margin: 0;\n                  }\n                "]);return k=function(){return e},e}var S="/rira-web-test";function $(e){var n=e.currentLangCode,t=(0,s.useState)(!1),i=t[0],a=t[1];return(0,r.BX)("nav",{css:(0,l.iv)(p()),children:[(0,r.BX)("div",{css:(0,l.iv)(h()),children:[(0,r.tZ)("a",{href:"#",children:(0,r.tZ)("img",{src:S+"/logo-rit.png",alt:"RIT logo",css:(0,l.iv)(m())})}),(0,r.tZ)("img",{src:S+"/icon-menu.png",alt:"Menu button",onClick:function(){return a(!i)},css:(0,l.iv)(y())}),(0,r.tZ)("div",{onClick:function(){return a(!1)},css:(0,l.iv)(v(),i?"block":"none")})]}),(0,r.BX)("div",{css:(0,l.iv)(g(),i?"100%":0),children:[(0,r.BX)("div",{css:(0,l.iv)(b(),f.Z6),children:[(0,r.tZ)("a",{onClick:function(){return alert("Coming Soon")},css:(0,l.iv)(w()),children:"Mint"}),(0,r.tZ)("a",{href:"https://opensea.io/",target:"_blank",rel:"noreferrer",children:"OpenSea"})]}),(0,r.tZ)("div",{css:(0,l.iv)(x()),children:Object.values(o.v).map((function(e){return(0,r.tZ)(u.default,{href:"/".concat(e),children:(0,r.tZ)("a",{href:"/".concat(e),css:(0,l.iv)(k(),e===n?"#969696":"#c8c8c8",f._w),children:e.toUpperCase()})},e)}))})]})]})}function C(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function O(){var e=C(["\n        align-items: center;\n        background-color: #869cdd;\n        display: flex;\n        flex-direction: column;\n        padding: 22px 0;\n\n        @media (min-width: 1024px) {\n          flex-direction: row-reverse;\n          justify-content: space-between;\n          padding: 36px calc(100% * 192 / 1440);\n        }\n      "]);return O=function(){return e},e}function j(){var e=C(["\n          a {\n            &:not(:first-of-type) {\n              margin-left: 20px;\n            }\n\n            img {\n              width: 24px;\n\n              @media (min-width: 1024px) {\n                width: 48px;\n              }\n            }\n          }\n        "]);return j=function(){return e},e}function _(){var e=C(["\n          color: #000;\n          font-family: ",", sans-serif;\n          font-size: 12px;\n          letter-spacing: -0.38px;\n          margin-top: 12px;\n          text-align: center;\n\n          @media (min-width: 1024px) {\n            font-size: 24px;\n            letter-spacing: -0.75px;\n            margin-top: 0;\n          }\n        "]);return _=function(){return e},e}function A(){return(0,r.BX)("footer",{css:(0,l.iv)(O()),children:[(0,r.BX)("div",{css:(0,l.iv)(j()),children:[(0,r.tZ)("a",{href:"https://twitter.com/KawaiiGirlNFT",target:"_blank",rel:"noreferrer",children:(0,r.tZ)("img",{src:"/rira-web-test/icon-twitterjp.png",alt:"Twitter JP logo"})}),(0,r.tZ)("a",{href:"https://twitter.com/RiraUniversity",target:"_blank",rel:"noreferrer",children:(0,r.tZ)("img",{src:"/rira-web-test/icon-twitter.png",alt:"Twitter logo"})}),(0,r.tZ)("a",{href:"https://github.com/rira-university/",target:"_blank",rel:"noreferrer",children:(0,r.tZ)("img",{src:"/rira-web-test/icon-github.png",alt:"GitHub logo"})}),(0,r.tZ)("a",{href:"https://discord.com/invite/4mX3gBRDWt",target:"_blank",rel:"noreferrer",children:(0,r.tZ)("img",{src:"/rira-web-test/icon-discord.png",alt:"Discord logo"})}),(0,r.tZ)("a",{href:"https://medium.com/rira-institute-of-technology",target:"_blank",rel:"noreferrer",children:(0,r.tZ)("img",{src:"/rira-web-test/icon-medium.png",alt:"Medium logo"})})]}),(0,r.tZ)("span",{css:(0,l.iv)(_(),f._w),children:"\xa9 Copyright 2022 RIT"})]})}t(7284);function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){E(e,n,t[n])}))}return e}function Z(e){var n,t=e.Component,i=e.pageProps;return(null!==(n=t.getLayout)&&void 0!==n?n:function(e){return e})((0,r.BX)(r.HY,{children:[(0,r.tZ)(c,P({},i)),(0,r.tZ)($,P({},i)),(0,r.tZ)(t,P({},i)),(0,r.tZ)(A,{})]}))}},7284:function(){},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(2136),n(387)}));var t=e.O();_N_E=t}]);