!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function O(e){return l=e,f=setTimeout(h,t),s?y(e):u}function S(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=p();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?m(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=p(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return O(c);if(d)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var O=document.querySelector(".feedback-form"),S="feedback-form-state",h={};!function(){try{var e=JSON.parse(localStorage.getItem(S));if(!e)return;h=e,O.email.value=h.email,O.message.value=h.message}catch(e){console.error(e.message)}}(),O.addEventListener("input",e(t)((function(e){(h=JSON.parse(localStorage.getItem(S)))[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(h))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),console.log(h),localStorage.removeItem(S)}))}();
//# sourceMappingURL=03-feedback.f27ddc5a.js.map
