!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=44)}([function(t,n,e){t.exports=!e(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(7),o=e(6);t.exports=function(t){return r(o(t))}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(36),o=e(35),u=e(33),i=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4),o=e(3),u=e(39),i=e(37),c=e(9),f=function(t,n,e){var s,a,p,l=t&f.F,d=t&f.G,v=t&f.S,h=t&f.P,y=t&f.B,x=t&f.W,b=d?o:o[n]||(o[n]={}),_=b.prototype,O=d?r:v?r[n]:(r[n]||{}).prototype;for(s in d&&(e=n),e)(a=!l&&O&&void 0!==O[s])&&c(b,s)||(p=a?O[s]:e[s],b[s]=d&&"function"!=typeof O[s]?e[s]:y&&a?u(p,r):x&&O[s]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):h&&"function"==typeof p?u(Function.call,p):p,h&&((b.virtual||(b.virtual={}))[s]=p,t&f.R&&_&&!_[s]&&i(_,s,p)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.noop=function(){}},function(t,n,e){var r=e(11);r(r.S+r.F*!e(0),"Object",{defineProperty:e(10).f})},function(t,n,e){e(13);var r=e(3).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){t.exports={default:e(14),__esModule:!0}},function(t,n,e){"use strict";n.__esModule=!0;var r,o=e(15),u=(r=o)&&r.__esModule?r:{default:r};n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var r=e(6);t.exports=function(t){return Object(r(t))}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(4),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r=e(23)("keys"),o=e(22);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(5),o=Math.max,u=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):u(t,n)}},function(t,n,e){var r=e(5),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(8),o=e(26),u=e(25);t.exports=function(t){return function(n,e,i){var c,f=r(n),s=o(f.length),a=u(i,s);if(t&&e!=e){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(9),o=e(8),u=e(27)(!1),i=e(24)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=i&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~u(s,e)||s.push(e));return s}},function(t,n,e){var r=e(29),o=e(21);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){"use strict";var r=e(30),o=e(20),u=e(19),i=e(18),c=e(7),f=Object.assign;t.exports=!f||e(1)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=i(t),f=arguments.length,s=1,a=o.f,p=u.f;f>s;)for(var l,d=c(arguments[s++]),v=a?r(d).concat(a(d)):r(d),h=v.length,y=0;h>y;)p.call(d,l=v[y++])&&(e[l]=d[l]);return e}:f},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2),o=e(4).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){t.exports=!e(0)&&!e(1)(function(){return 7!=Object.defineProperty(e(34)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(10),o=e(32);t.exports=e(0)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(38);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(11);r(r.S+r.F,"Object",{assign:e(31)})},function(t,n,e){e(40),t.exports=e(3).Object.assign},function(t,n,e){t.exports={default:e(41),__esModule:!0}},function(t,n,e){"use strict";n.__esModule=!0;var r,o=e(42),u=(r=o)&&r.__esModule?r:{default:r};n.default=u.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=c(e(43)),o=c(e(17)),u=c(e(16)),i=e(12);function c(t){return t&&t.__esModule?t:{default:t}}var f={COUNTING:"counting",PAUSE:"pause",NONE:"none"},s=function(){function t(n){(0,o.default)(this,t),this.options=(0,r.default)({},t.defaultOptions,n),this.status=t.Status.NONE}return(0,u.default)(t,[{key:"start",value:function(n){clearTimeout(this.timeoutId),this.seconds=n,this.status=t.Status.COUNTING,this.next()}},{key:"next",value:function(){var t=this,n=this.options.count;this.seconds>0?(n(this.seconds),this.seconds--,this.timeoutId=setTimeout(function(){t.next(t.seconds)},1e3)):(0,this.options.end)(this.seconds)}},{key:"pause",value:function(){clearTimeout(this.timeoutId),this.status=t.Status.PAUSE}},{key:"resume",value:function(){this.status===t.Status.PAUSE&&(this.status=t.Status.COUNTING,this.next())}},{key:"reset",value:function(){clearTimeout(this.timeoutId),this.seconds=0,this.status=t.Status.NONE,(0,this.options.end)(this.seconds)}}]),t}();s.Status=f,s.defaultOptions={count:i.noop,end:i.noop,status:f.NONE},n.default=s}])});