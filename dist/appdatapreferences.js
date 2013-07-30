!function(a){"use strict";a(function(){function a(a,c,d,e){return b(a).then(c,d,e)}function b(a){var b;return b=a instanceof e?a:i(a)?c(a):f(a)}function c(a){var b=h();try{a.then(function(a){b.resolve(a)},function(a){b.reject(a)},function(a){b.progress(a)})}catch(c){b.reject(c)}return b.promise}function d(b){return a(b,g)}function e(a){this.then=a}function f(a){var c=new e(function(c){try{return b("function"==typeof c?c(a):a)}catch(d){return g(d)}});return c}function g(a){var c=new e(function(c,d){try{return b("function"==typeof d?d(a):g(a))}catch(e){return g(e)}});return c}function h(){function a(a,b,c){return m(a,b,c)}function c(a){return o(b(a))}function d(a){return o(g(a))}function f(a){return n(a)}var i,j,k,l,m,n,o;return j=new e(a),i={then:a,resolve:c,reject:d,progress:f,notify:f,promise:j,resolver:{resolve:c,reject:d,progress:f,notify:f}},k=[],l=[],m=function(a,b,c){var d,e;return d=h(),e="function"==typeof c?function(a){try{d.notify(c(a))}catch(b){d.notify(b)}}:function(a){d.notify(a)},k.push(function(c){c.then(a,b).then(d.resolve,d.reject,e)}),l.push(e),d.promise},n=function(a){return q(l,a),a},o=function(a){return m=a.then,o=b,n=t,q(k,a),l=k=w,a},i}function i(a){return a&&"function"==typeof a.then}function j(b,c,d,e,f){return r(2,arguments),a(b,function(b){function g(a){p(a)}function i(a){o(a)}var j,k,l,m,n,o,p,q,r,t;if(r=b.length>>>0,j=Math.max(0,Math.min(c,r)),l=[],k=r-j+1,m=[],n=h(),j)for(q=n.notify,p=function(a){m.push(a),--k||(o=p=s,n.reject(m))},o=function(a){l.push(a),--j||(o=p=s,n.resolve(l))},t=0;r>t;++t)t in b&&a(b[t],i,g,q);else n.resolve(l);return n.promise.then(d,e,f)})}function k(a,b,c,d){function e(a){return b?b(a[0]):a[0]}return j(a,1,e,c,d)}function l(a,b,c,d){return r(1,arguments),n(a,t).then(b,c,d)}function m(){return n(arguments,t)}function n(b,c){return a(b,function(b){var d,e,f,g,i,j;if(f=e=b.length>>>0,d=[],j=h(),f)for(g=function(b,e){a(b,c).then(function(a){d[e]=a,--f||j.resolve(d)},j.reject)},i=0;e>i;i++)i in b?g(b[i],i):--f;else j.resolve(d);return j.promise})}function o(b,c){var d=v.call(arguments,1);return a(b,function(b){var e;return e=b.length,d[0]=function(b,d,f){return a(b,function(b){return a(d,function(a){return c(b,a,f,e)})})},u.apply(b,d)})}function p(b,c,d){var e=arguments.length>2;return a(b,function(a){return a=e?d:a,c.resolve(a),a},function(a){return c.reject(a),g(a)},function(a){return"function"==typeof c.notify&&c.notify(a),a})}function q(a,b){for(var c,d=0;c=a[d++];)c(b)}function r(a,b){for(var c,d=b.length;d>a;)if(c=b[--d],null!=c&&"function"!=typeof c)throw new Error("arg "+d+" must be a function")}function s(){}function t(a){return a}var u,v,w;return a.defer=h,a.resolve=b,a.reject=d,a.join=m,a.all=l,a.map=n,a.reduce=o,a.any=k,a.some=j,a.chain=p,a.isPromise=i,e.prototype={always:function(a,b){return this.then(a,a,b)},otherwise:function(a){return this.then(w,a)},yield:function(a){return this.then(function(){return a})},spread:function(a){return this.then(function(b){return l(b,function(b){return a.apply(w,b)})})}},v=[].slice,u=[].reduce||function(a){var b,c,d,e,f;if(f=0,b=Object(this),e=b.length>>>0,c=arguments,c.length<=1)for(;;){if(f in b){d=b[f++];break}if(++f>=e)throw new TypeError}else d=c[1];for(;e>f;++f)f in b&&(d=a(d,b[f],f,b));return d},a})}("function"==typeof define&&define.amd?define:function(a){"object"==typeof exports?module.exports=a():this.when=a()});
(function(){var h=void 0,i=!0,j=null,k=!1,l,p=p||{},q=this;function r(a,b,c){a=a.split(".");c=c||q;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var g;a.length&&(g=a.shift());)!a.length&&b!==h?c[g]=b:c=c[g]?c[g]:c[g]={}}r("goog.LOCALE","en");r("goog.TRUSTED_SITE",i);r("goog.ENABLE_DEBUG_LOADER",i);function aa(){}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ca(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){return"string"==typeof a}var v="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,g);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(j,arguments)}var ga=p.Ca&&Date.now||function(){return+new Date};function x(a,b){r(a,b,h)}
function y(a,b){function c(){}c.prototype=b.prototype;a.sa=b.prototype;a.prototype=new c};function ha(){};function z(){this.b=Array(4);this.Ea=Array(64);this.L=this.r=0;this.reset()}y(z,ha);z.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.L=this.r=0};
function ia(a,b,c){c||(c=0);var g=Array(16);if(t(b))for(var d=0;16>d;++d)g[d]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(d=0;16>d;++d)g[d]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.b[0];c=a.b[1];var d=a.b[2],f=a.b[3],e=0,e=b+(f^c&(d^f))+g[0]+3614090360&4294967295;b=c+(e<<7&4294967295|e>>>25);e=f+(d^b&(c^d))+g[1]+3905402710&4294967295;f=b+(e<<12&4294967295|e>>>20);e=d+(c^f&(b^c))+g[2]+606105819&4294967295;d=f+(e<<17&4294967295|e>>>15);e=c+(b^d&(f^b))+
g[3]+3250441966&4294967295;c=d+(e<<22&4294967295|e>>>10);e=b+(f^c&(d^f))+g[4]+4118548399&4294967295;b=c+(e<<7&4294967295|e>>>25);e=f+(d^b&(c^d))+g[5]+1200080426&4294967295;f=b+(e<<12&4294967295|e>>>20);e=d+(c^f&(b^c))+g[6]+2821735955&4294967295;d=f+(e<<17&4294967295|e>>>15);e=c+(b^d&(f^b))+g[7]+4249261313&4294967295;c=d+(e<<22&4294967295|e>>>10);e=b+(f^c&(d^f))+g[8]+1770035416&4294967295;b=c+(e<<7&4294967295|e>>>25);e=f+(d^b&(c^d))+g[9]+2336552879&4294967295;f=b+(e<<12&4294967295|e>>>20);e=d+(c^f&
(b^c))+g[10]+4294925233&4294967295;d=f+(e<<17&4294967295|e>>>15);e=c+(b^d&(f^b))+g[11]+2304563134&4294967295;c=d+(e<<22&4294967295|e>>>10);e=b+(f^c&(d^f))+g[12]+1804603682&4294967295;b=c+(e<<7&4294967295|e>>>25);e=f+(d^b&(c^d))+g[13]+4254626195&4294967295;f=b+(e<<12&4294967295|e>>>20);e=d+(c^f&(b^c))+g[14]+2792965006&4294967295;d=f+(e<<17&4294967295|e>>>15);e=c+(b^d&(f^b))+g[15]+1236535329&4294967295;c=d+(e<<22&4294967295|e>>>10);e=b+(d^f&(c^d))+g[1]+4129170786&4294967295;b=c+(e<<5&4294967295|e>>>
27);e=f+(c^d&(b^c))+g[6]+3225465664&4294967295;f=b+(e<<9&4294967295|e>>>23);e=d+(b^c&(f^b))+g[11]+643717713&4294967295;d=f+(e<<14&4294967295|e>>>18);e=c+(f^b&(d^f))+g[0]+3921069994&4294967295;c=d+(e<<20&4294967295|e>>>12);e=b+(d^f&(c^d))+g[5]+3593408605&4294967295;b=c+(e<<5&4294967295|e>>>27);e=f+(c^d&(b^c))+g[10]+38016083&4294967295;f=b+(e<<9&4294967295|e>>>23);e=d+(b^c&(f^b))+g[15]+3634488961&4294967295;d=f+(e<<14&4294967295|e>>>18);e=c+(f^b&(d^f))+g[4]+3889429448&4294967295;c=d+(e<<20&4294967295|
e>>>12);e=b+(d^f&(c^d))+g[9]+568446438&4294967295;b=c+(e<<5&4294967295|e>>>27);e=f+(c^d&(b^c))+g[14]+3275163606&4294967295;f=b+(e<<9&4294967295|e>>>23);e=d+(b^c&(f^b))+g[3]+4107603335&4294967295;d=f+(e<<14&4294967295|e>>>18);e=c+(f^b&(d^f))+g[8]+1163531501&4294967295;c=d+(e<<20&4294967295|e>>>12);e=b+(d^f&(c^d))+g[13]+2850285829&4294967295;b=c+(e<<5&4294967295|e>>>27);e=f+(c^d&(b^c))+g[2]+4243563512&4294967295;f=b+(e<<9&4294967295|e>>>23);e=d+(b^c&(f^b))+g[7]+1735328473&4294967295;d=f+(e<<14&4294967295|
e>>>18);e=c+(f^b&(d^f))+g[12]+2368359562&4294967295;c=d+(e<<20&4294967295|e>>>12);e=b+(c^d^f)+g[5]+4294588738&4294967295;b=c+(e<<4&4294967295|e>>>28);e=f+(b^c^d)+g[8]+2272392833&4294967295;f=b+(e<<11&4294967295|e>>>21);e=d+(f^b^c)+g[11]+1839030562&4294967295;d=f+(e<<16&4294967295|e>>>16);e=c+(d^f^b)+g[14]+4259657740&4294967295;c=d+(e<<23&4294967295|e>>>9);e=b+(c^d^f)+g[1]+2763975236&4294967295;b=c+(e<<4&4294967295|e>>>28);e=f+(b^c^d)+g[4]+1272893353&4294967295;f=b+(e<<11&4294967295|e>>>21);e=d+(f^
b^c)+g[7]+4139469664&4294967295;d=f+(e<<16&4294967295|e>>>16);e=c+(d^f^b)+g[10]+3200236656&4294967295;c=d+(e<<23&4294967295|e>>>9);e=b+(c^d^f)+g[13]+681279174&4294967295;b=c+(e<<4&4294967295|e>>>28);e=f+(b^c^d)+g[0]+3936430074&4294967295;f=b+(e<<11&4294967295|e>>>21);e=d+(f^b^c)+g[3]+3572445317&4294967295;d=f+(e<<16&4294967295|e>>>16);e=c+(d^f^b)+g[6]+76029189&4294967295;c=d+(e<<23&4294967295|e>>>9);e=b+(c^d^f)+g[9]+3654602809&4294967295;b=c+(e<<4&4294967295|e>>>28);e=f+(b^c^d)+g[12]+3873151461&4294967295;
f=b+(e<<11&4294967295|e>>>21);e=d+(f^b^c)+g[15]+530742520&4294967295;d=f+(e<<16&4294967295|e>>>16);e=c+(d^f^b)+g[2]+3299628645&4294967295;c=d+(e<<23&4294967295|e>>>9);e=b+(d^(c|~f))+g[0]+4096336452&4294967295;b=c+(e<<6&4294967295|e>>>26);e=f+(c^(b|~d))+g[7]+1126891415&4294967295;f=b+(e<<10&4294967295|e>>>22);e=d+(b^(f|~c))+g[14]+2878612391&4294967295;d=f+(e<<15&4294967295|e>>>17);e=c+(f^(d|~b))+g[5]+4237533241&4294967295;c=d+(e<<21&4294967295|e>>>11);e=b+(d^(c|~f))+g[12]+1700485571&4294967295;b=c+
(e<<6&4294967295|e>>>26);e=f+(c^(b|~d))+g[3]+2399980690&4294967295;f=b+(e<<10&4294967295|e>>>22);e=d+(b^(f|~c))+g[10]+4293915773&4294967295;d=f+(e<<15&4294967295|e>>>17);e=c+(f^(d|~b))+g[1]+2240044497&4294967295;c=d+(e<<21&4294967295|e>>>11);e=b+(d^(c|~f))+g[8]+1873313359&4294967295;b=c+(e<<6&4294967295|e>>>26);e=f+(c^(b|~d))+g[15]+4264355552&4294967295;f=b+(e<<10&4294967295|e>>>22);e=d+(b^(f|~c))+g[6]+2734768916&4294967295;d=f+(e<<15&4294967295|e>>>17);e=c+(f^(d|~b))+g[13]+1309151649&4294967295;
c=d+(e<<21&4294967295|e>>>11);e=b+(d^(c|~f))+g[4]+4149444226&4294967295;b=c+(e<<6&4294967295|e>>>26);e=f+(c^(b|~d))+g[11]+3174756917&4294967295;f=b+(e<<10&4294967295|e>>>22);e=d+(b^(f|~c))+g[2]+718787259&4294967295;d=f+(e<<15&4294967295|e>>>17);e=c+(f^(d|~b))+g[9]+3951481745&4294967295;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+(d+(e<<21&4294967295|e>>>11))&4294967295;a.b[2]=a.b[2]+d&4294967295;a.b[3]=a.b[3]+f&4294967295}
z.prototype.update=function(a,b){b===h&&(b=a.length);for(var c=b-64,g=this.Ea,d=this.r,f=0;f<b;){if(0==d)for(;f<=c;)ia(this,a,f),f+=64;if(t(a))for(;f<b;){if(g[d++]=a.charCodeAt(f++),64==d){ia(this,g);d=0;break}}else for(;f<b;)if(g[d++]=a[f++],64==d){ia(this,g);d=0;break}}this.r=d;this.L+=b};
function ja(a){var b=Array((56>a.r?64:128)-a.r);b[0]=128;for(var c=1;c<b.length-8;++c)b[c]=0;for(var g=8*a.L,c=b.length-8;c<b.length;++c)b[c]=g&255,g/=256;a.update(b);b=Array(16);for(c=g=0;4>c;++c)for(var d=0;32>d;d+=8)b[g++]=a.b[c]>>>d&255;return b};var A={};function B(a){Error.captureStackTrace?Error.captureStackTrace(this,B):this.stack=Error().stack||"";a&&(this.message=String(a))}y(B,Error);B.prototype.name="CustomError";function ka(a,b){for(var c=a.split("%s"),g="",d=Array.prototype.slice.call(arguments,1);d.length&&1<c.length;)g+=c.shift()+d.shift();return g+c.join("%s")}function la(a){if(!ma.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(na,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(oa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qa,"&quot;"));return a}var na=/&/g,oa=/</g,pa=/>/g,qa=/\"/g,ma=/[&<>\"]/;var ra={};r("goog.asserts.ENABLE_ASSERTS",k);function sa(a,b){b.unshift(a);B.call(this,ka.apply(j,b));b.shift();this.Za=a}y(sa,B);sa.prototype.name="AssertionError";function ta(a,b){if(ra.Ta)throw new sa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function D(){D.ca!=ua&&(D.Wa&&(this.Ha=Error().stack),va[this[v]||(this[v]=++da)]=this)}var ua=0;r("goog.Disposable.MONITORING_MODE",0);r("goog.Disposable.INCLUDE_STACK_ON_CREATION",i);var va={};D.prototype.S=k;D.prototype.fa=function(){if(!this.S&&(this.S=i,this.k(),D.ca!=ua)){var a=this[v]||(this[v]=++da);if(1==D.ca&&!va.hasOwnProperty(a))throw Error(this+" did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");delete va[a]}};D.prototype.k=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};var wa="closure_listenable_"+(1E6*Math.random()|0),ya=0;function za(a,b,c,g,d,f){za.Ua&&(this.Ha=Error().stack);this.X=a;this.proxy=b;this.src=c;this.type=g;this.capture=!!d;this.V=f;this.key=++ya;this.J=this.Q=k}r("goog.events.Listener.ENABLE_MONITORING",k);function Aa(a){var b=[],c=0,g;for(g in a)b[c++]=a[g];return b}function Ba(a){var b=[],c=0,g;for(g in a)b[c++]=g;return b}var Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Da(a,b){for(var c,g,d=1;d<arguments.length;d++){g=arguments[d];for(c in g)a[c]=g[c];for(var f=0;f<Ca.length;f++)c=Ca[f],Object.prototype.hasOwnProperty.call(g,c)&&(a[c]=g[c])}};var E={},F,Ea,Fa,Ga;r("goog.userAgent.ASSUME_IE",k);r("goog.userAgent.ASSUME_GECKO",k);r("goog.userAgent.ASSUME_WEBKIT",k);r("goog.userAgent.ASSUME_MOBILE_WEBKIT",k);r("goog.userAgent.ASSUME_OPERA",k);r("goog.userAgent.ASSUME_ANY_VERSION",k);var G=E.xa||E.wa||E.ya||E.Aa||E.za;function Ha(){return q.navigator?q.navigator.userAgent:j}
if(!G){Ga=Fa=Ea=F=k;var H;if(!G&&(H=Ha())){var Ia=q.navigator;F=0==H.lastIndexOf("Opera",0);Ea=!F&&(-1!=H.indexOf("MSIE")||-1!=H.indexOf("Trident"));Fa=!F&&-1!=H.indexOf("WebKit");Ga=!F&&!Fa&&!Ea&&"Gecko"==Ia.product}}var Ja=G?E.za:F,I=G?E.xa:Ea,Ka=G?E.wa:Ga,La=G?E.Aa||E.ya:Fa;r("goog.userAgent.ASSUME_MAC",k);r("goog.userAgent.ASSUME_WINDOWS",k);r("goog.userAgent.ASSUME_LINUX",k);r("goog.userAgent.ASSUME_X11",k);r("goog.userAgent.ASSUME_ANDROID",k);r("goog.userAgent.ASSUME_IPHONE",k);
r("goog.userAgent.ASSUME_IPAD",k);var Ma;a:{var Na="",J;if(Ja&&q.opera)var Oa=q.opera.version,Na="function"==typeof Oa?Oa():Oa;else if(Ka?J=/rv\:([^\);]+)(\)|;)/:I?J=/\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/:La&&(J=/WebKit\/(\S+)/),J)var Pa=J.exec(Ha()),Na=Pa?Pa[1]:"";if(I){var Qa,Ra=q.document;Qa=Ra?Ra.documentMode:h;if(Qa>parseFloat(Na)){Ma=String(Qa);break a}}Ma=Na}var Sa={};
function K(a){var b;if(!(b=E.Ra))if(!(b=Sa[a])){b=0;for(var c=String(Ma).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(c.length,g.length),f=0;0==b&&f<d;f++){var e=c[f]||"",m=g[f]||"",C=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var n=C.exec(e)||["","",""],s=u.exec(m)||["","",""];if(0==n[0].length&&0==s[0].length)break;b=((0==n[1].length?0:parseInt(n[1],10))<(0==s[1].length?0:parseInt(s[1],10))?-1:(0==n[1].length?
0:parseInt(n[1],10))>(0==s[1].length?0:parseInt(s[1],10))?1:0)||((0==n[2].length)<(0==s[2].length)?-1:(0==n[2].length)>(0==s[2].length)?1:0)||(n[2]<s[2]?-1:n[2]>s[2]?1:0)}while(0==b)}b=Sa[a]=0<=b}return b};I&&K("9");!La||K("528");Ka&&K("1.9b")||I&&K("8")||Ja&&K("9.5")||La&&K("528");Ka&&!K("8")||I&&K("9");r("goog.NATIVE_ARRAY_PROTOTYPES",p.Ca);var L=Array.prototype,Ta=p.Ba&&L.indexOf?function(a,b,c){return L.indexOf.call(a,b,c)}:function(a,b,c){c=c==j?0:0>c?Math.max(0,a.length+c):c;if(t(a))return!t(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ua=p.Ba&&L.forEach?function(a,b,c){L.forEach.call(a,b,c)}:function(a,b,c){for(var g=a.length,d=t(a)?a.split(""):a,f=0;f<g;f++)f in d&&b.call(c,d[f],f,a)};
function Va(a){var b;a:{b=Wa;for(var c=a.length,g=t(a)?a.split(""):a,d=0;d<c;d++)if(d in g&&b.call(h,g[d],d,a)){b=d;break a}b=-1}return 0>b?j:t(a)?a.charAt(b):a[b]}function Xa(a,b){var c=Ta(a,b),g;(g=0<=c)&&L.splice.call(a,c,1);return g};function M(a,b){this.type=a;this.currentTarget=this.target=b}M.prototype.k=function(){};M.prototype.fa=function(){};M.prototype.I=k;M.prototype.Oa=i;function Ya(a){this.src=a;this.e={};this.ba=0}Ya.prototype.add=function(a,b,c,g,d){var f=this.e[a];f||(f=this.e[a]=[],this.ba++);var e;a:{for(e=0;e<f.length;++e){var m=f[e];if(!m.J&&m.X==b&&m.capture==!!g&&m.V==d)break a}e=-1}-1<e?(a=f[e],c||(a.Q=k)):(a=new za(b,j,this.src,a,!!g,d),a.Q=c,f.push(a));return a};function N(){D.call(this);this.l=new Ya(this);this.Da=this}y(N,D);N.prototype[wa]=i;N.prototype.$=j;
N.prototype.dispatchEvent=function(a){var b,c=this.$;if(c)for(b=[];c;c=c.$)b.push(c);var c=this.Da,g=a.type||a;if(t(a))a=new M(a,c);else if(a instanceof M)a.target=a.target||c;else{var d=a;a=new M(g,c);Da(a,d)}var d=i,f;if(b)for(var e=b.length-1;!a.I&&0<=e;e--)f=a.currentTarget=b[e],d=Za(f,g,i,a)&&d;a.I||(f=a.currentTarget=c,d=Za(f,g,i,a)&&d,a.I||(d=Za(f,g,k,a)&&d));if(b)for(e=0;!a.I&&e<b.length;e++)f=a.currentTarget=b[e],d=Za(f,g,k,a)&&d;return d};
N.prototype.k=function(){N.sa.k.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.e){for(var g=a.e[c],d=0;d<g.length;d++)++b,g[d].J=i;delete a.e[c];a.ba--}}this.$=j};
function Za(a,b,c,g){b=a.l.e[b];if(!b)return i;var d=b.length;if(0<d){for(var f=Array(d),e=0;e<d;e++)f[e]=b[e];b=f}else b=[];d=i;for(f=0;f<b.length;++f){var m=b[f];if(m&&!m.J&&m.capture==c){var e=m.X,C=m.V||m.src;if(m.Q){var u=a.l,n=m,m=n.type;m in u.e&&Xa(u.e[m],n)&&(n.J=i,n.X=j,n.proxy=j,n.src=j,n.V=j,0==u.e[m].length&&(delete u.e[m],u.ba--))}d=e.call(C,g)!==k&&d}}return d&&g.Oa!=k};var $a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),ab=La;function bb(a,b){if(ab){ab=k;var c=q.location;if(c){var g=c.href;if(g&&(g=(g=bb(3,g))&&decodeURIComponent(g))&&g!=c.hostname)throw ab=i,Error();}}return b.match($a)[a]||j};function cb(a,b,c){if("function"==ba(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:q.setTimeout(a,b||0)};function db(a){if("function"==typeof a.C)return a.C();if(t(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,g=0;g<c;g++)b.push(a[g]);return b}return Aa(a)}function eb(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(ca(a)||t(a))Ua(a,b,c);else{var g;if("function"==typeof a.B)g=a.B();else if("function"!=typeof a.C)if(ca(a)||t(a)){g=[];for(var d=a.length,f=0;f<d;f++)g.push(f)}else g=Ba(a);else g=h;for(var d=db(a),f=d.length,e=0;e<f;e++)b.call(c,d[e],g&&g[e],a)}};function fb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function gb(){}gb.prototype.w=j;function hb(){return ib(O)}var O;r("goog.net.XmlHttp.ASSUME_NATIVE_XHR",k);function jb(){}y(jb,gb);function ib(a){return(a=kb(a))?new ActiveXObject(a):new XMLHttpRequest}function lb(a){var b={};kb(a)&&(b[0]=i,b[1]=i);return b}
function kb(a){if(hb.Sa)return"";if(!a.ja&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var g=b[c];try{return new ActiveXObject(g),a.ja=g}catch(d){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.ja}O=new jb;function mb(a,b){this.j={};this.c=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var g=0;g<c;g+=2)this.set(arguments[g],arguments[g+1])}else if(a){a instanceof mb?(c=a.B(),g=a.C()):(c=Ba(a),g=Aa(a));for(var d=0;d<c.length;d++)this.set(c[d],g[d])}}l=mb.prototype;l.z=0;l.va=0;l.C=function(){nb(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.j[this.c[b]]);return a};l.B=function(){nb(this);return this.c.concat()};
l.clear=function(){this.j={};this.va=this.z=this.c.length=0};function nb(a){if(a.z!=a.c.length){for(var b=0,c=0;b<a.c.length;){var g=a.c[b];Object.prototype.hasOwnProperty.call(a.j,g)&&(a.c[c++]=g);b++}a.c.length=c}if(a.z!=a.c.length){for(var d={},c=b=0;b<a.c.length;)g=a.c[b],Object.prototype.hasOwnProperty.call(d,g)||(a.c[c++]=g,d[g]=1),b++;a.c.length=c}}l.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
l.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.z++,this.c.push(a),this.va++);this.j[a]=b};l.clone=function(){return new mb(this)};r("goog.debug.LOGGING_ENABLED",k);function ob(a){return pb(a||arguments.callee.caller,[])}
function pb(a,b){var c=[];if(0<=Ta(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(qb(a)+"(");for(var g=a.arguments,d=0;d<g.length;d++){0<d&&c.push(", ");var f;f=g[d];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=qb(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(pb(a.caller,b))}catch(e){c.push("[exception trying to get caller]\n")}}else a?
c.push("[...long stack...]"):c.push("[end]");return c.join("")}function qb(a){if(P[a])return P[a];a=String(a);if(!P[a]){var b=/function ([^\(]+)/.exec(a);P[a]=b?b[1]:"[Anonymous]"}return P[a]}var P={};function Q(a,b,c,g,d){this.reset(a,b,c,g,d)}Q.prototype.Pa=0;Q.prototype.ha=j;Q.prototype.ga=j;r("goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS",i);var rb=0;Q.prototype.reset=function(a,b,c,g,d){Q.Va&&(this.Pa="number"==typeof d?d:rb++);this.$a=g||ga();this.t=a;this.Ka=b;this.Ya=c;delete this.ha;delete this.ga};Q.prototype.ra=function(a){this.t=a};function R(){this.clear()}var sb;r("goog.debug.LogBuffer.CAPACITY",0);R.prototype.clear=function(){this.da=Array(R.O);this.ea=-1;this.ka=k};function S(a){this.na=a}var tb;S.prototype.H=j;S.prototype.t=j;S.prototype.R=j;S.prototype.ia=j;r("goog.debug.Logger.ENABLE_HIERARCHY",i);if(!S.v)var ub=[];function T(a,b){this.name=a;this.value=b}T.prototype.toString=function(){return this.name};var vb=new T("OFF",Infinity),wb=new T("SEVERE",1E3),xb=new T("WARNING",900),yb=new T("CONFIG",700),zb=new T("FINE",500);S.prototype.getParent=function(){return this.H};S.prototype.ra=function(a){A.h&&(S.v?this.t=a:tb=a)};
function Ab(a){if(!A.h)return vb;if(!S.v)return tb;if(a.t)return a.t;if(a.H)return Ab(a.H);ta("Root logger has no level set.");return j}S.prototype.log=function(a,b,c){if(A.h&&A.h&&a.value>=Ab(this).value)if(a=this.Ia(a,b,c),b="log:"+a.Ka,q.console&&(q.console.timeStamp?q.console.timeStamp(b):q.console.markTimeline&&q.console.markTimeline(b)),q.msWriteProfilerMark&&q.msWriteProfilerMark(b),S.v)for(b=this;b;){c=b;var g=a;if(c.ia)for(var d=0,f=h;f=c.ia[d];d++)f(g);b=b.getParent()}else for(b=0;c=ub[b++];)c(a)};
S.prototype.Ia=function(a,b,c){var g;if(0<R.O){sb||(sb=new R);var d=sb;g=this.na;var f=(d.ea+1)%R.O;d.ea=f;d.ka?(d=d.da[f],d.reset(a,b,g),g=d):(d.ka=f==R.O-1,g=d.da[f]=new Q(a,b,g))}else g=new Q(a,String(b),this.na);if(c){g.ha=c;var e;d=arguments.callee.caller;try{var m;var C;c:{for(var f=["window","location","href"],u=q,n;n=f.shift();)if(u[n]!=j)u=u[n];else{C=j;break c}C=u}if(t(c))m={message:c,name:"Unknown error",lineNumber:"Not available",fileName:C,stack:"Not available"};else{var s,xa;n=k;try{s=
c.lineNumber||c.Xa||"Not available"}catch(Zb){s="Not available",n=i}try{xa=c.fileName||c.filename||c.sourceURL||q.$googDebugFname||C}catch($b){xa="Not available",n=i}m=n||!c.lineNumber||!c.fileName||!c.stack||!c.message||!c.name?{message:c.message||"Not available",name:c.name||"UnknownError",lineNumber:s,fileName:xa,stack:c.stack||"Not available"}:c}e="Message: "+la(m.message)+'\nUrl: <a href="view-source:'+m.fileName+'" target="_new">'+m.fileName+"</a>\nLine: "+m.lineNumber+"\n\nBrowser stack:\n"+
la(m.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+la(ob(d)+"-> ")}catch(Rb){e="Exception trying to expose exception! You win, we lose. "+Rb}g.ga=e}return g};var Bb={},Cb=j;function Db(a){Cb||(Cb=new S(""),Bb[""]=Cb,Cb.ra(yb));var b;if(!(b=Bb[a])){b=new S(a);if(S.v){var c=a.lastIndexOf("."),g=a.substr(c+1),c=Db(a.substr(0,c));c.R||(c.R={});c.R[g]=b;b.H=c}Bb[a]=b}return b};var Eb={};r("goog.log.ENABLED",A.h);function U(a,b){Eb.P&&a&&A.h&&a.log(zb,b,h)};function V(a){N.call(this);this.headers=new mb;this.p=a||j;this.f=k;this.N=this.a=j;this.ma=this.G="";this.m=0;this.s="";this.i=this.W=this.D=this.U=k;this.u=0;this.K=j;this.qa=Fb;this.M=this.Qa=k}y(V,N);var Fb="",Gb=V.prototype,Hb;Hb=Eb.P?Db("goog.net.XhrIo"):j;Gb.d=Hb;var Ib=/^https?$/i,Jb=["POST","PUT"],Kb=[];function Lb(a,b,c,g,d){var f=new V;Kb.push(f);b&&f.l.add("complete",b,k,h,h);f.l.add("ready",f.Fa,i,h,h);f.send(a,c,g,d)}l=V.prototype;l.Fa=function(){this.fa();Xa(Kb,this)};
l.send=function(a,b,c,g){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.G+"; newUri="+a);b=b?b.toUpperCase():"GET";this.G=a;this.s="";this.m=0;this.ma=b;this.U=k;this.f=i;this.a=this.p?ib(this.p):hb();this.N=this.p?this.p.w||(this.p.w=lb(this.p)):O.w||(O.w=lb(O));this.a.onreadystatechange=w(this.pa,this);try{U(this.d,W(this,"Opening Xhr")),this.W=i,this.a.open(b,a,i),this.W=k}catch(d){U(this.d,W(this,"Error opening Xhr: "+d.message));Mb(this,d);return}a=c||"";
var f=this.headers.clone();g&&eb(g,function(a,b){f.set(b,a)});g=Va(f.B());c=q.FormData&&a instanceof q.FormData;0<=Ta(Jb,b)&&(!g&&!c)&&f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");eb(f,function(a,b){this.a.setRequestHeader(b,a)},this);this.qa&&(this.a.responseType=this.qa);"withCredentials"in this.a&&(this.a.withCredentials=this.Qa);try{Nb(this),0<this.u&&(this.M=I&&K(9)&&"number"==typeof this.a.timeout&&this.a.ontimeout!==h,U(this.d,W(this,"Will abort after "+this.u+"ms if incomplete, xhr2 "+
this.M)),this.M?(this.a.timeout=this.u,this.a.ontimeout=w(this.ua,this)):this.K=cb(this.ua,this.u,this)),U(this.d,W(this,"Sending request")),this.D=i,this.a.send(a),this.D=k}catch(e){U(this.d,W(this,"Send error: "+e.message)),Mb(this,e)}};function Wa(a){return"content-type"==a.toLowerCase()}l.ua=function(){"undefined"!=typeof p&&this.a&&(this.s="Timed out after "+this.u+"ms, aborting",this.m=8,U(this.d,W(this,this.s)),this.dispatchEvent("timeout"),this.abort(8))};
function Mb(a,b){a.f=k;a.a&&(a.i=i,a.a.abort(),a.i=k);a.s=b;a.m=5;Ob(a);Pb(a)}function Ob(a){a.U||(a.U=i,a.dispatchEvent("complete"),a.dispatchEvent("error"))}l.abort=function(a){this.a&&this.f&&(U(this.d,W(this,"Aborting")),this.f=k,this.i=i,this.a.abort(),this.i=k,this.m=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Pb(this))};l.k=function(){this.a&&(this.f&&(this.f=k,this.i=i,this.a.abort(),this.i=k),Pb(this,i));V.sa.k.call(this)};
l.pa=function(){this.S||(!this.W&&!this.D&&!this.i?this.Na():Qb(this))};l.Na=function(){Qb(this)};
function Qb(a){if(a.f&&"undefined"!=typeof p)if(a.N[1]&&4==X(a)&&2==Sb(a))U(a.d,W(a,"Local request error detected and ignored"));else if(a.D&&4==X(a))cb(a.pa,0,a);else if(a.dispatchEvent("readystatechange"),4==X(a)){U(a.d,W(a,"Request complete"));a.f=k;try{if(Tb(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{a.m=6;var b;try{b=2<X(a)?a.a.statusText:""}catch(c){U(a.d,"Can not get status: "+c.message),b=""}a.s=b+" ["+Sb(a)+"]";Ob(a)}}finally{Pb(a)}}}
function Pb(a,b){if(a.a){Nb(a);var c=a.a,g=a.N[0]?aa:j;a.a=j;a.N=j;b||a.dispatchEvent("ready");try{c.onreadystatechange=g}catch(d){c=a.d,Eb.P&&c&&A.h&&c.log(wb,"Problem encountered resetting onreadystatechange: "+d.message,h)}}}function Nb(a){a.a&&a.M&&(a.a.ontimeout=j);"number"==typeof a.K&&(q.clearTimeout(a.K),a.K=j)}
function Tb(a){var b=Sb(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=i;break a;default:c=k}if(!c){if(b=0===b)a=bb(1,String(a.G)),!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!Ib.test(a?a.toLowerCase():"");c=b}return c}function X(a){return a.a?a.a.readyState:0}function Sb(a){try{return 2<X(a)?a.a.status:-1}catch(b){return a=a.d,Eb.P&&a&&A.h&&a.log(xb,"Can not get status: "+b.message,h),-1}}
function W(a,b){return b+" ["+a.ma+" "+a.G+" "+Sb(a)+"]"};function Y(a,b,c){this.method=a;this.path=b;this.params=c||{};this.contentType="application/json";this.headers={}}Y.prototype.o=function(a){this.g=a;return this};
Y.prototype.run=function(a){var b=[],c;for(c in this.params||{})b.push(c+"="+encodeURI(this.params[c]));c=this.path;0>this.path.indexOf("https://")&&(c=!this.Ja?"https://www.googleapis.com/drive/v2":"https://www.googleapis.com/upload/drive/v2",c+=this.path);c+="?"+b.join("&");this.headers.Authorization="Bearer "+this.g||"";this.headers["Content-Type"]=this.contentType;Lb(c,function(b){var c=!Tb(b.target)||b.target.m;a&&(b=b.target,b=b.a?fb(b.a.responseText):h,a(c,b))},this.method,this.body,this.headers)};function Ub(a){this.g=a}l=Ub.prototype;l.g=j;l.A=j;l.o=function(a){this.g=a};l.get=function(a,b){var c=this;Vb(this,a,function(a,d){c.A=d&&d.id;b(a,d)})};function Vb(a,b,c){a.A?(new Y("get","/files/"+a.A)).o(a.g).run(c):(new Y("get","/files",{q:'title = "appdatapreferences-localstorage.json"'})).o(a.g).run(function(g,d){if(g)return c(g,j);var f=d&&d.items&&d.items[0];f?f=c(g,f):(a.upload(a.A,b,c),f=h);return f})}
l.upload=function(a,b,c){b="--a_unique_boundary_tag\nContent-Type: application/json; charset=UTF-8\n\n"+JSON.stringify({title:"appdatapreferences-localstorage.json",parents:[{id:"appdata"}]})+"\n\n--a_unique_boundary_tag\nContent-Type: application/json\n\n"+JSON.stringify(b)+"\n\n--a_unique_boundary_tag--";a=new Y(!a?"post":"put",!a?"/files":"/files/"+a,{uploadType:"multipart"});a.contentType='multipart/related; boundary="a_unique_boundary_tag"';a.Ja=i;a.body=b;a.o(this.g).run(c)};
function Wb(a,b,c){(new Y("get",b.downloadUrl)).o(a.g).run(c)};function Xb(){N.call(this);this.T=new Ub}y(Xb,N);l=Xb.prototype;l.n=window.localStorage;l.T=j;l.aa=j;l.Z={};l.Y=new z;l.Ma=j;l.F=j;l.la=j;l.Ga=function(a){this.Z=a||{}};
l.ta=function(a){var b=this;Yb(this).get(this.n,function(c,g){if(!g)return a&&a();var d=g.md5Checksum;if(!b.F||d!=b.F)Wb(Yb(b),g,function(c,f){for(var g in b.n)delete b.n[g];for(g in f)b.n[g]=f[g];a&&a();b.F=d});else{b.Y.reset();b.Y.update(JSON.stringify(b.n));var f=ja(b.Y).join(".");if(f==b.la)return a&&a();Yb(b).upload(g.id,b.n,function(c,d){b.F=d.md5Checksum;b.la=f;a&&a()})}})};
l.start=function(){function a(){b.ta(function(){b.aa=setTimeout(function(){a()},b.Z.interval||5E3)})}var b=this;this.stop();a()};l.stop=function(){this.aa&&clearTimeout(this.aa)};l.La=function(a){this.Ma=a};function Yb(a){a.T.o(a.Z.token);return a.T}var Z=new Xb;x("appdatapreferences",Z);x("appdatapreferences.configure",Z.Ga);x("appdatapreferences.sync",Z.ta);x("appdatapreferences.start",Z.start);x("appdatapreferences.stop",Z.stop);x("appdatapreferences.onChange",Z.La);}).call(this);//@sourceMappingURL=dist/sourcemap.js.map