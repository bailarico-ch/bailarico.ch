(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},u=n(1003),l=n(880),c=n(9246);function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function p(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var d=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,d=e.href,g=e.as,h=e.children,v=e.prefetch,y=e.passHref,m=e.replace,b=e.shallow,w=e.scroll,k=e.locale,S=e.onClick,O=e.onMouseEnter,x=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,a&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var L,C=!1!==v,j=l.useRouter(),E=i.default.useMemo((function(){var e=o(u.resolveHref(j,d,!0),2),t=e[0],n=e[1];return{href:t,as:g?u.resolveHref(j,g):n||t}}),[j,d,g]),I=E.href,U=E.as,A=i.default.useRef(I),P=i.default.useRef(U);a&&(L=i.default.Children.only(n));var M=a?L&&"object"===typeof L&&L.ref:t,D=o(c.useIntersection({rootMargin:"200px"}),3),T=D[0],F=D[1],R=D[2],_=i.default.useCallback((function(e){P.current===U&&A.current===I||(R(),P.current=U,A.current=I),T(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[U,M,I,R,T]);i.default.useEffect((function(){var e=F&&C&&u.isLocalURL(I),t="undefined"!==typeof k?k:j&&j.locale,n=f[I+"%"+U+(t?"%"+t:"")];e&&!n&&p(j,I,U,{locale:t})}),[U,I,F,k,C,j]);var N={ref:_,onClick:function(e){a||"function"!==typeof S||S(e),a&&L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,j,I,U,m,b,w,k)},onMouseEnter:function(e){a||"function"!==typeof O||O(e),a&&L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),u.isLocalURL(I)&&p(j,I,U,{priority:!0})}};if(!a||y||"a"===L.type&&!("href"in L.props)){var B="undefined"!==typeof k?k:j&&j.locale,H=j&&j.isLocaleDomain&&u.getDomainLocale(U,B,j&&j.locales,j&&j.domainLocales);N.href=H||u.addBasePath(u.addLocale(U,B,j&&j.defaultLocale))}return a?i.default.cloneElement(L,N):i.default.createElement("a",Object.assign({},x,N),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,s=a.useRef(),f=o(a.useState(!1),2),p=f[0],d=f[1],g=o(a.useState(t?t.current:null),2),h=g[0],v=g[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||p||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:n}))}),[r,h,n,p]),m=a.useCallback((function(){d(!1)}),[]);return a.useEffect((function(){if(!u&&!p){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&v(t.current)}),[t]),[y,p,m]};var a=n(7294),i=n(4686),u="undefined"!==typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},8076:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{Z:function(){return T}});var u=[],l=u.forEach,c=u.slice;function s(e){return l.call(c.call(arguments,1),(function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])})),e}var f=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,p=function(e,t,n){var r=n||{};r.path=r.path||"/";var o=e+"="+encodeURIComponent(t);if(r.maxAge>0){var a=r.maxAge-0;if(isNaN(a))throw new Error("maxAge should be a Number");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!f.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!f.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if("function"!==typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite)switch("string"===typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o},d=function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+60*n*1e3)),r&&(o.domain=r),document.cookie=p(e,encodeURIComponent(t),o)},g=function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null},h={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!==typeof document){var n=g(e.lookupCookie);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!==typeof document&&d(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},v={name:"querystring",lookup:function(e){var t;if("undefined"!==typeof window)for(var n=window.location.search.substring(1).split("&"),r=0;r<n.length;r++){var o=n[r].indexOf("=");if(o>0)n[r].substring(0,o)===e.lookupQuerystring&&(t=n[r].substring(o+1))}return t}},y=null,m=function(){if(null!==y)return y;try{y="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(t){y=!1}return y},b={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&m()){var n=window.localStorage.getItem(e.lookupLocalStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&m()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},w=null,k=function(){if(null!==w)return w;try{w="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(t){w=!1}return w},S={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&k()){var n=window.sessionStorage.getItem(e.lookupSessionStorage);n&&(t=n)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&k()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},O={name:"navigator",lookup:function(e){var t=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var n=0;n<navigator.languages.length;n++)t.push(navigator.languages[n]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},x={name:"htmlTag",lookup:function(e){var t,n=e.htmlTag||("undefined"!==typeof document?document.documentElement:null);return n&&"function"===typeof n.getAttribute&&(t=n.getAttribute("lang")),t}},L={name:"path",lookup:function(e){var t;if("undefined"!==typeof window){var n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(n instanceof Array)if("number"===typeof e.lookupFromPathIndex){if("string"!==typeof n[e.lookupFromPathIndex])return;t=n[e.lookupFromPathIndex].replace("/","")}else t=n[0].replace("/","")}return t}},C={name:"subdomain",lookup:function(e){var t;if("undefined"!==typeof window){var n=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);n instanceof Array&&(t="number"===typeof e.lookupFromSubdomainIndex?n[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):n[0].replace("http://","").replace("https://","").replace(".",""))}return t}};var j=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this.type="languageDetector",this.detectors={},this.init(t,n)}var t,n,r;return t=e,n=[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=s(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(h),this.addDetector(v),this.addDetector(b),this.addDetector(S),this.addDetector(O),this.addDetector(x),this.addDetector(L),this.addDetector(C)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var n=[];return e.forEach((function(e){if(t.detectors[e]){var r=t.detectors[e].lookup(t.options);r&&"string"===typeof r&&(r=[r]),r&&(n=n.concat(r))}})),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var n=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach((function(t){n.detectors[t]&&n.detectors[t].cacheUserLanguage(e,n.options)})))}}],n&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();j.type="languageDetector";var E=j,I=["supportedLngs","fallbackLng","order"];function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},M=function(e){if("string"===typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return 2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=P(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=P(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=P(n[2].toLowerCase()))),n.join("-")}return e},D=function(e){var t=e.supportedLngs,n=e.fallbackLng;return function(e){if(!e)return null;var r,o=function(e){return!t||!t.length||t.indexOf(e)>-1};return e.forEach((function(e){if(!r){var n=M(e);t&&!o(n)||(r=n)}})),!r&&t&&e.forEach((function(e){if(!r){var n=function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return M(t[0])}(e);r=o(n)?n:t.find((function(e){if(0===e.indexOf(n))return e}))}})),r||(r=n),r}};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.supportedLngs,n=e.fallbackLng,r=e.order,a=void 0===r?["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"]:r,i=o(e,I),u=D({supportedLngs:t,fallbackLng:n}),l=new E({languageUtils:{getBestMatchFromCodes:u}},A({order:a},i));return{detect:function(e){var t=l.detect(e);return u(t)},cache:function(e,t){return l.cacheUserLanguage(e,t)}}}}}]);