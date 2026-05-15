var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return ee(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function te(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():S=!1}}}var ne;if(typeof y==`function`)ne=function(){y(te)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=te,ne=function(){ie.postMessage(null)}}else ne=function(){_(te,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ne()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.6`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,k;function we(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,k=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+k}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,A=t.unstable_getCurrentPriorityLevel,j=t.unstable_ImmediatePriority,M=t.unstable_UserBlockingPriority,N=t.unstable_NormalPriority,P=t.unstable_LowPriority,Fe=t.unstable_IdlePriority,Ie=t.log,Le=t.unstable_setDisableYieldValue,Re=null,ze=null;function Be(e){if(typeof Ie==`function`&&Le(e),ze&&typeof ze.setStrictMode==`function`)try{ze.setStrictMode(Re,e)}catch{}}var Ve=Math.clz32?Math.clz32:We,He=Math.log,Ue=Math.LN2;function We(e){return e>>>=0,e===0?32:31-(He(e)/Ue|0)|0}var Ge=256,Ke=262144,qe=4194304;function F(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=F(n))):i=F(o):i=F(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=F(n))):i=F(o)):i=F(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ye(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=qe;return qe<<=1,!(qe&62914560)&&(qe=4194304),e}function Qe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $e(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ve(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&tt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ve(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function nt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function rt(e,t){var n=t&-t;return n=n&42?1:it(n),(n&(e.suspendedLanes|t))===0?n:0}function it(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function at(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ot(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function st(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ct=Math.random().toString(36).slice(2),lt=`__reactFiber$`+ct,ut=`__reactProps$`+ct,dt=`__reactContainer$`+ct,ft=`__reactEvents$`+ct,pt=`__reactListeners$`+ct,mt=`__reactHandles$`+ct,ht=`__reactResources$`+ct,gt=`__reactMarker$`+ct;function _t(e){delete e[lt],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[lt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[lt]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function I(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return ke.call(Ot,e)?!0:ke.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ft(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function It(e){if(!e._valueTracker){var t=Pt(e)?`checked`:`value`;e._valueTracker=Ft(e,t,``+e[t])}}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Pt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Rt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var zt=/[\n"\\]/g;function Bt(e){return e.replace(zt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Vt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ut(e,o,Nt(n)):Ut(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Ht(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){It(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),It(e)}function Ut(e,t,n){t===`number`&&Rt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Wt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function Kt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(le(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),It(e)}function qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Yt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Jt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Xt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Yt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Yt(e,a,t[a])}function Zt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function en(e){return $t.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function tn(){}var nn=null;function rn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,on=null;function sn(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Bt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ut]||null;if(!i)throw Error(s(90));Vt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lt(r)}break a;case`textarea`:Gt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}}}var cn=!1;function ln(e,t,n){if(cn)return e(t,n);cn=!0;try{return e(t)}finally{if(cn=!1,(an!==null||on!==null)&&(bu(),an&&(t=an,e=on,on=an=null,sn(t),e)))for(t=0;t<e.length;t++)sn(e[t])}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var dn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),fn=!1;if(dn)try{var pn={};Object.defineProperty(pn,`passive`,{get:function(){fn=!0}}),window.addEventListener(`test`,pn,pn),window.removeEventListener(`test`,pn,pn)}catch{fn=!1}var mn=null,hn=null,gn=null;function _n(){if(gn)return gn;var e,t=hn,n=t.length,r,i=`value`in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return gn=i.slice(e,1<r?1-r:void 0)}function vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function bn(){return!1}function xn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?yn:bn,this.isPropagationStopped=bn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=xn(Sn),wn=h({},Sn,{view:0,detail:0}),Tn=xn(wn),L,En,Dn,On=h({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(L=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=L=0,Dn=e),L)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=xn(On),An=xn(h({},On,{dataTransfer:0})),jn=xn(h({},wn,{relatedTarget:0})),Mn=xn(h({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=xn(h({},Sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=xn(h({},Sn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=xn(h({},wn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=xn(h({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=xn(h({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=xn(h({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=xn(h({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=xn(h({},Sn,{newState:0,oldState:0})),Kn=[9,13,27,32],qn=dn&&`CompositionEvent`in window,Jn=null;dn&&`documentMode`in document&&(Jn=document.documentMode);var Yn=dn&&`TextEvent`in window&&!Jn,Xn=dn&&(!qn||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return Kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var R=!1;function tr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function nr(e,t){if(R)return e===`compositionend`||!qn&&$n(e,t)?(e=_n(),gn=hn=mn=null,R=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var rr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!rr[e.type]:t===`textarea`}function ar(e,t,n,r){an?on?on.push(r):on=[r]:an=r,t=Ed(t,`onChange`),0<t.length&&(n=new Cn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){yd(e,0)}function lr(e){if(Lt(bt(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(dn){var fr;if(dn){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,rn(e)),ln(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rt(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var z=dn&&`documentMode`in document&&11>=document.documentMode,kr=null,Ar=null,jr=null,Mr=!1;function Nr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mr||kr==null||kr!==Rt(r)||(r=kr,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Cr(jr,r)||(jr=r,r=Ed(Ar,`onSelect`),0<r.length&&(t=new Cn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Fr={animationend:Pr(`Animation`,`AnimationEnd`),animationiteration:Pr(`Animation`,`AnimationIteration`),animationstart:Pr(`Animation`,`AnimationStart`),transitionrun:Pr(`Transition`,`TransitionRun`),transitionstart:Pr(`Transition`,`TransitionStart`),transitioncancel:Pr(`Transition`,`TransitionCancel`),transitionend:Pr(`Transition`,`TransitionEnd`)},Ir={},Lr={};dn&&(Lr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),`TransitionEvent`in window||delete Fr.transitionend.transition);function Rr(e){if(Ir[e])return Ir[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lr)return Ir[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),Hr=Rr(`transitionrun`),Ur=Rr(`transitionstart`),Wr=Rr(`transitioncancel`),Gr=Rr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),I(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ve(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)ci(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=si(31,n,t,i),e.elementType=re,e.lanes=a,e;case y:return fi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=si(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case T:return e=si(13,n,t,i),e.elementType=T,e.lanes=a,e;case ee:return e=si(19,n,t,i),e.elementType=ee,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:o=10;break a;case S:o=9;break a;case w:o=11;break a;case te:o=14;break a;case ne:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=si(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-Ve(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,B=null,V=!1,Ni=null,Pi=!1,Fi=Error(s(519));function Ii(e){throw Hi(_i(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[lt]=e,t[ut]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ht(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=tn),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Mi=Mi.return}}function zi(e){if(e!==Mi)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&B&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));B=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));B=uf(e)}else t===27?(t=B,Zd(e.type)?(e=lf,lf=null,B=e):B=t):B=Mi?cf(e.stateNode.nextSibling):null;return!0}function Bi(){B=Mi=null,V=!1}function Vi(){var e=Ni;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=pe(null),Wi=null,Gi=null;function Ki(e,t,n){O(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,me(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ji(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ji(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Xi(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Sr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ve.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=dd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=E.S;E.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=pe(null);function _a(){var e=ga.current;return e===null?q.pooledCache:e}function va(e,t){t===null?O(ga,ga.current):O(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:aa._currentValue,pool:e}}var ba=Error(s(460)),xa=Error(s(474)),Sa=Error(s(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tn,tn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then(tn,tn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(s(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(s(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ne&&Ea(a)===t.type)?(t=i(t,n.props),Na(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=fi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=di(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=hi(t,e.mode,n),t.return=e,t;case ne:return t=Ea(t),f(e,t,n)}if(le(t)||oe(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===C)return f(e,ea(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=Ea(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===C)return p(e,t,ea(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=Ea(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===C)return m(e,t,n,ea(t,r),i);Pa(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return V&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Di(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),V&&Di(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return V&&Di(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),V&&Di(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&Ea(l)===r.type){n(e,r.sibling),c=i(r,a.props),Na(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=fi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=di(a.type,a.key,a.props,null,e.mode,c),Na(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=hi(a,e.mode,c),c.return=e,e=c}return o(e);case ne:return a=Ea(a),b(e,r,a,c)}if(le(a))return h(e,r,a,c);if(oe(a)){if(l=oe(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ma(a),c);if(a.$$typeof===C)return b(e,r,ea(e,a),c);Pa(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=pi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=da;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ua&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ra=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=pe(null),Za=pe(0);function Qa(e,t){e=Ul,O(Za,e),O(Xa,t),Ul=e|t.baseLanes}function $a(){O(Za,Ul),O(Xa,Xa.current)}function eo(){Ul=Za.current,me(Xa),me(Za)}var to=pe(null),no=null;function ro(e){var t=e.alternate;O(co,co.current&1),O(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){O(co,co.current),O(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(O(co,co.current),O(to,e),no===null&&(no=e)):oo(e)}function oo(){O(co,co.current),O(to,to.current)}function so(e){me(to),no===e&&(no=null),me(co)}var co=pe(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,ho=!1,go=0,_o=0,vo=null,yo=0;function bo(){throw Error(s(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?zs:Bs,ho=!1,a=n(r,i),ho=!1,mo&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){E.H=Rs;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,_o=0,vo=null,t)throw Error(s(300));e===null||rc||(e=e.dependencies,e!==null&&Zi(e)&&(rc=!0))}function wo(e,t,n,r){H=e;var i=0;do{if(mo&&(vo=null),_o=0,mo=!1,25<=i)throw Error(s(301));if(i+=1,fo=U=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=Vs,a=t(n,r)}while(mo);return a}function To(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function Eo(){var e=go!==0;return go=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,_o=go=0,vo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function Ao(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(s(467)):Error(s(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=_o;return _o+=1,vo===null&&(vo=[]),e=Ta(vo,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===C)return $i(e)}throw Error(s(438,String(e)))}function Po(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),U,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((uo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,H.lanes|=p,Gl|=p;f=u.action,ho&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,H.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Sr(a,e.memoizedState)&&(rc=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Sr(a,t.memoizedState)||(rc=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function zo(e,t,n){var r=H,i=Ao(),a=V;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Sr((U||i).memoizedState,n);if(o&&(i.memoizedState=n,rc=!0),i=i.queue,us(Ho.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,i,n,t),null),q===null)throw Error(s(349));a||uo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=jo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Wo(e){var t=ni(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),ho){Be(!0);try{n()}finally{Be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,U,typeof r==`function`?r:Fo)}function qo(e,t,n,r,i){if(Fs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Jo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(V){var n=q.formState;if(n!==null){a:{var r=H;if(V){if(B){b:{for(var i=B,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,H,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,H,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),U,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===ba?Sa:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=U;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=jo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();H.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&xo(r,U.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(H.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=jo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),ho){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),H.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return Sr(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),H.lanes|=e,Gl|=e,t):(e=bs(e,n,r),Sr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ps(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ma(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Ts(e).queue;Ss(e,i,t,ue,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return $i(Qf)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Va(n);var r=Ha(t,e,n);r!==null&&(hu(r,t,n),Ua(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ti(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ei(e,t,i,0),q===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(s(479))}else t=ti(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===H||t!==null&&t===H}function Is(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}var Rs={readContext:$i,use:No,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Rs.useEffectEvent=bo;var zs={readContext:$i,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(ho){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(ho){Be(!0);try{n(t)}finally{Be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,H,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,i=ko();if(V){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),q===null)throw Error(s(349));Y&127||Bo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ls(Ho.bind(null,r,a,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),n},useId:function(){var e=ko(),t=q.identifierPrefix;if(V){var n=Ei,r=Ti;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,H)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),U.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return U===null?bs(n,e,t):xs(n,U.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(hu(t,e,n),Ua(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){Yr(e)}function Js(e){console.error(e)}function Ys(e){Yr(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Va(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,i,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(V)return t=to.current,t===null?(r!==Fi&&(t=Error(s(423),{cause:r}),Hi(_i(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=_i(r,n),i=Qs(e.stateNode,r,i),Wa(e,i),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Fi&&(e=Error(s(422),{cause:r}),Hi(_i(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=_i(a,n),Xl===null?Xl=[a]:Xl.push(a),Wl!==4&&(Wl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Qs(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=$s(i),ec(i,e,n,r),Wa(n,i),!1}n=n.return}while(n!==null);return!1}var nc=Error(s(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&s&&ki(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),$a(),oo(t)):(va(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),$a(),ao(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ia(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(io(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return dc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(io(t),i)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(rc||Xi(e,t,n,!1),i=(n&e.childLanes)!==0,rc||i){if(r=q,r!==null&&(o=rt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,ni(e,o),hu(r,e,o),nc;Du(),t=fc(e,t,n)}else e=a.treeContext,B=cf(o.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=dc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return Qi(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ra||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ra||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Bi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:ya()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(co.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(V){if(i?ro(t):oo(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(oo(t),i=t.mode,c=wc({mode:`hidden`,children:c},i),r=fi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,o,n),t.memoizedState=yc,lc(null,r)):(ro(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(ro(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,i=t.mode,r=wc({mode:`visible`,children:r.children},i),c=fi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,o,n),t.memoizedState=yc,t=lc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Hi({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||Xi(e,t,n,!1),o=(n&e.childLanes)!==0,rc||o){if(o=q,o!==null&&(r=rt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),hu(o,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=cf(c.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return i?(oo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,i,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(i=c.cachePool,i===null?i=ya():(l=aa._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=xc(e,o,n),t.memoizedState=yc,lc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ia(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(co,o),ic(e,t,r,n),r=V?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Zi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(co,co.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,V&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=ac(null,t,e,r,n);break a}else if(i===te){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(s(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ks(r,t.pendingProps),_c(e,t,r,i,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ba(e,t),qa(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0),Ka(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==i){i=_i(Error(s(424)),t),Hi(i),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=cf(e.firstChild),Mi=t,V=!0,Ni=null,Pi=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===i){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[lt]=t,r[ut]=e,Pd(r,n,e),St(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&V&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Mi=t,Pi=!0,i=B,Zd(t.type)?(lf=i,B=cf(r.firstChild)):B=i),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((i=r=B)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?i=!1:(t.stateNode=r,Mi=t,B=cf(r.firstChild),Pi=!1,i=!0)),i||Ii(t)),xe(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=So(e,t,To,null,null,n),Qf._currentValue=i),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Mi=t,B=null,e=!0)),e||Ii(t)),null;case 13:return Sc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Qi(t),i=$i(i),r=r(i),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(i=_a(),i===null&&(i=q,a=oa(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},za(t),Ki(t,aa,i)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Ki(t,aa,r),r!==i.cache&&Yi(t,[aa],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ki(t,aa,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Da=Ca,xa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Da=Ca,xa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ze(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),W(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Nc(t),a===null?(W(t),Pc(t,i,null,r,n)):(W(t),Fc(t,a))):a?a===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,a)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,i,e,r,n)),null;case 27:if(Se(t),n=_e.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return W(t),null}e=he.current,zi(t)?Li(t,e):(e=ff(i,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(Se(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return W(t),null}if(a=he.current,zi(t))Li(t,a);else{var o=Bd(_e.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[lt]=t,a[ut]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=_e.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Mi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ii(t,!0)}else e=Bd(e).createTextNode(r),e[lt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[lt]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(s(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[lt]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),i=!1}else i=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return qi(t.type),W(t),null;case 19:if(me(co),r=t.memoizedState,r===null)return W(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=lo(e),a!==null){for(t.flags|=128,Lc(r,!1),e=a.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return O(co,co.current&1|2),V&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,i=!0,Lc(r,!1),t.lanes=4194304)}else{if(!i)if(e=lo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!V)return W(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=co.current,O(co,i?n&1|2:n&1),V&&Di(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),W(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function zc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(s(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(co),null;case 4:return be(),null;case 10:return qi(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&me(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ai(t),t.tag){case 3:qi(aa),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:me(co);break;case 10:qi(t.type);break;case 22:case 23:so(t),eo(),e!==null&&me(ga);break;case 24:qi(aa)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ut]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[lt]=e,t[ut]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Dr(e),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ks(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount==`function`)try{ze.onCommitFiberUnmount(Re,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null)if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(s(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(s(160));ul(a,o,i),G=null,cl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[gt]||a[lt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[lt]=e,St(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[lt]=e,St(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){i=e.stateNode;try{qt(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Jc(e,i,n===null?i:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=gl,gl=gf(t.containerInfo),hl(t,e),gl=i,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||i,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;Qc(e,Xc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(qt(a,``),n.flags&=-33),Qc(e,Xc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;Zc(e,Xc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:E.T===null?ot():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||V){var e=Ke;Ke<<=1,!(Ke&3932160)&&(Ke=262144),Jl=e}else Jl=536870912;return e=to.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),$e(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ye(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-Pe(),10<i)){if(yu(r,t,Jl,!Bl),Je(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},jl(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ve(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&tt(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Gi=Wi=null,Oo(e),Aa=null,ja=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=li(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Ye(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ve(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,$r(),n}function Cu(e,t){H=null,E.H=Rs,t===ba||t===Sa?(t=Oa(),X=3):t===xa?(t=Oa(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,_i(t,e.current)))}function wu(){var e=to.current;return e===null?!0:(Y&4194048)===Y?no===null:(Y&62914560)===Y||Y&536870912?e===no:!1}function Tu(){var e=E.H;return E.H=Rs,e===null?Rs:e}function Eu(){var e=E.A;return E.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&to.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,K=r,E.H=i,E.A=a,J===null&&(q=null,Y=0,$r()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),i=Eu();q!==e||Y!==t?(nu=null,tu=Pe()+500,Su(e,t)):Vl=Ye(e,t);a:do try{if(X!==0&&J!==null){t=J;var a=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,a,1);break;case 2:case 9:if(wa(a)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},a.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:wa(a)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(J.tag){case 26:o=J.memoizedState;case 5:case 27:var c=J;if(o?Wf(o):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,a,5);break;case 6:X=0,zl=null,Pu(e,t,a,6);break;case 8:xu(),Wl=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Gi=Wi=null,E.H=r,E.A=i,K=n,J===null?(q=null,Y=0,$r(),Wl):0}function ju(){for(;J!==null&&!Me();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Oo(t);default:Bc(n,t),t=J=ui(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Gi=Wi=null,Oo(t),Aa=null,ja=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,_i(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,_i(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=Qr,et(e,n,a,o,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(N,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,o=K,K|=4;try{al(e,t,n)}finally{K=o,D.p=i,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Er(s.ownerDocument.documentElement,s)){if(c!==null&&Or(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Tr(s,h),v=Tr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),at(n),t=t.stateNode,ze&&typeof ze.onCommitFiberRoot==`function`)try{ze.onCommitFiberRoot(Re,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=at(su),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(s(331));var c=K;if(K|=4,Pl(a.current),El(a,a.current,o,n),K=c,id(0,!1),ze&&typeof ze.onPostCommitFiberRoot==`function`)try{ze.onPostCommitFiberRoot(Re,a)}catch{}return!0}finally{D.p=i,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=_i(n,t),t=Qs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&($e(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=_i(n,e),n=$s(2),r=Ha(t,n,2),r!==null&&(ec(n,r,t,e),$e(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Pe()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ze()),e=ni(e,t),e!==null&&($e(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ve(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Je(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ye(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ve(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Xe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ye(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),at(n)){case 2:case 8:n=M;break;case 32:n=N;break;case 268435456:n=Fe;break;default:n=N}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Je(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Ae(j,ad):od()})}function dd(){if(nd===0){var e=ua;e===0&&(e=Ge,Ge<<=1,!(Ge&261888)&&(Ge=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:en(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Cn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<qr.length;hd++){var gd=qr[hd];Jr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Jr(zr,`onAnimationEnd`),Jr(Br,`onAnimationIteration`),Jr(Vr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Hr,`onTransitionRun`),Jr(Ur,`onTransitionStart`),Jr(Wr,`onTransitionCancel`),Jr(Gr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),I(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),I(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),I(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),I(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),I(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),I(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=vt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}ln(function(){var r=a,i=rn(n),o=[];a:{var s=Kr.get(e);if(s!==void 0){var c=Cn,u=e;switch(e){case`keypress`:if(vn(n)===0)break a;case`keydown`:case`keyup`:c=Bn;break;case`focusin`:u=`focus`,c=jn;break;case`focusout`:u=`blur`,c=jn;break;case`beforeblur`:case`afterblur`:c=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Hn;break;case zr:case Br:case Vr:c=Mn;break;case Gr:c=Un;break;case`scroll`:case`scrollend`:c=Tn;break;case`wheel`:c=Wn;break;case`copy`:case`cut`:case`paste`:c=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Vn;break;case`toggle`:case`beforetoggle`:c=Gn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=un(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==nn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?vt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Vn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:bt(c),h=u==null?s:bt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?bt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=ur;else if(ir(s))if(dr)v=br;else{v=vr;var y=_r}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Zt(r.elementType)&&(v=ur):v=yr;if(v&&=v(e,r)){ar(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Ut(s,`number`,s.value)}switch(y=r?bt(r):window,e){case`focusin`:(ir(y)||y.contentEditable===`true`)&&(kr=y,Ar=r,jr=null);break;case`focusout`:jr=Ar=kr=null;break;case`mousedown`:Mr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Mr=!1,Nr(o,n,i);break;case`selectionchange`:if(z)break;case`keydown`:case`keyup`:Nr(o,n,i)}var b;if(qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else R?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(R||x!==`onCompositionStart`?x===`onCompositionEnd`&&R&&(b=_n()):(mn=i,hn=`value`in mn?mn.value:mn.textContent,R=!0)),y=Ed(r,x),0<y.length&&(x=new Pn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?tr(e,n):nr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=un(e,n),i!=null&&r.unshift(Td(e,i,a)),i=un(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=un(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=un(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&qt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Xt(e,r,a);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=en(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Qt.get(n)||n,At(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:Xt(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ut]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Ht(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Wt(e,!!r,n,!0):Wt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Kt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(Zt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Vt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Wt(e,!!n,n?[]:``,!1):Wt(e,!!n,t,!0)):Wt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Gt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Zt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Bt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Bt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Bt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Bt(n.imageSizes)+`"]`)):i+=`[href="`+Bt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Bt(r)+`"][href="`+Bt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=xt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);St(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=xt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),St(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=_e.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=xt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=xt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=xt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Bt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),St(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Bt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Bt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,St(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),St(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,St(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),St(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[lt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(hu(n,e,t),Ua(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=it(t);var n=ni(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=F(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ve(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=rn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=vt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(A()){case j:return 2;case M:return 8;case N:case P:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,st(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,st(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nn=r,n.target.dispatchEvent(r),nn=null}else return t=yt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[dt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.6`)throw Error(s(527,Lp,`19.2.6`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Re=zp.inject(Rp),ze=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=qs,a=Js,o=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[dt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),f=e(((e,t)=>{t.exports=d()}))(),p={bg:`#070710`,s1:`#0d0d1a`,s2:`#12121f`,border:`#1e1e38`,text:`#e2e4f3`,muted:`#5a5a7a`,brute:`#e05a6f`,better:`#e89a2a`,opt:`#29cc7a`,accent:`#5b8df5`,purple:`#9b72e8`},m={brute:{color:p.brute,label:`Brute Force`,icon:`🔴`},better:{color:p.better,label:`Better`,icon:`🟡`},opt:{color:p.opt,label:`Optimized`,icon:`🟢`}},h=[`js`,`py`,`cpp`,`java`],g=(e,t,n,r)=>({js:e,py:t,cpp:n,java:r}),_={js:`JavaScript`,py:`Python`,cpp:`C++`,java:`Java`};function v(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Basic bubble sort — always runs all passes`,ln:0});for(let e=0;e<n-1;e++){for(let a=0;a<n-e-1;a++)r.push({a:[...t],hi:[a,a+1],sw:[],done:[...i],msg:`Compare a[${a}]=${t[a]} vs a[${a+1}]=${t[a+1]}`,ln:3}),t[a]>t[a+1]&&([t[a],t[a+1]]=[t[a+1],t[a]],r.push({a:[...t],hi:[],sw:[a,a+1],done:[...i],msg:`Swap!`,ln:4}));i.add(n-1-e),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Pass ${e+1} done`,ln:2})}return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted!`,ln:7}),r}function y(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Bubble + early exit flag`,ln:0});for(let e=0;e<n-1;e++){let a=!1;for(let o=0;o<n-e-1;o++)r.push({a:[...t],hi:[o,o+1],sw:[],done:[...i],msg:`Compare a[${o}]=${t[o]} vs a[${o+1}]=${t[o+1]}`,ln:3}),t[o]>t[o+1]&&([t[o],t[o+1]]=[t[o+1],t[o]],a=!0,r.push({a:[...t],hi:[],sw:[o,o+1],done:[...i],msg:`Swap! swapped=true`,ln:4}));if(i.add(n-1-e),!a){for(let e=0;e<n;e++)i.add(e);return r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`No swaps — EARLY EXIT ✓`,ln:7}),r}r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Pass ${e+1} done, swapped=${a}`,ln:2})}return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted!`,ln:9}),r}function b(e){let t=[...e],n=t.length,r=[],i=new Set,a=n-1;for(r.push({a:[...t],hi:[],sw:[],done:[],msg:`Track last swap → shrinks inner loop each pass`,ln:0});a>0;){let e=0;for(let n=0;n<a;n++)r.push({a:[...t],hi:[n,n+1],sw:[],done:[...i],msg:`Compare a[${n}]=${t[n]} vs a[${n+1}]=${t[n+1]}`,ln:3}),t[n]>t[n+1]&&([t[n],t[n+1]]=[t[n+1],t[n]],e=n+1,r.push({a:[...t],hi:[],sw:[n,n+1],done:[...i],msg:`Swap! lastSwap=${e}`,ln:4}));for(let t=e;t<n;t++)i.add(t);a=e,r.push({a:[...t],hi:[],sw:[],done:[...i],msg:e>0?`Next limit=${e}`:`Done!`,ln:6})}for(let e=0;e<n;e++)i.add(e);return r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! Fewest comparisons`,ln:8}),r}function x(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Find minimum in unsorted part, swap to front`,ln:0});for(let e=0;e<n-1;e++){let a=e;r.push({a:[...t],hi:[e],sw:[],done:[...i],msg:`Pass ${e+1}: assume min=a[${e}]=${t[e]}`,ln:2});for(let o=e+1;o<n;o++)r.push({a:[...t],hi:[o,a],sw:[],done:[...i],msg:`a[${o}]=${t[o]} vs min=${t[a]}`,ln:4}),t[o]<t[a]&&(a=o,r.push({a:[...t],hi:[a],sw:[],done:[...i],msg:`New min: a[${a}]=${t[a]}`,ln:5}));a!==e&&([t[e],t[a]]=[t[a],t[e]],r.push({a:[...t],hi:[],sw:[e,a],done:[...i],msg:`Swap a[${e}]↔a[${a}]`,ln:7})),i.add(e),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Index ${e} sorted`,ln:8})}return i.add(n-1),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted!`,ln:10}),r}function S(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Stable selection: shift instead of swap`,ln:0});for(let e=0;e<n-1;e++){let a=e;for(let o=e+1;o<n;o++)r.push({a:[...t],hi:[o,a],sw:[],done:[...i],msg:`Find min in [${e}..${n-1}]`,ln:3}),t[o]<t[a]&&(a=o);if(a!==e){let n=t[a];r.push({a:[...t],hi:[e,a],sw:[],done:[...i],msg:`Shift elements right to place min=${n}`,ln:5});for(let n=a;n>e;n--)t[n]=t[n-1],r.push({a:[...t],hi:[],sw:[n],done:[...i],msg:`Shift a[${n-1}] right`,ln:6});t[e]=n,r.push({a:[...t],hi:[],sw:[e],done:[...i],msg:`Placed min=${n} at index ${e}`,ln:7})}i.add(e)}return i.add(n-1),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! (stable — relative order preserved)`,ln:9}),r}function C(e){let t=[...e],n=t.length,r=[],i=new Set,a=0,o=n-1;for(r.push({a:[...t],hi:[],sw:[],done:[],msg:`Bidirectional: find min AND max each pass`,ln:0});a<o;){let e=a,n=a;r.push({a:[...t],hi:[a,o],sw:[],done:[...i],msg:`Scan [${a}..${o}] for min & max simultaneously`,ln:3});for(let s=a+1;s<=o;s++)r.push({a:[...t],hi:[s],sw:[],done:[...i],msg:`Check a[${s}]=${t[s]}`,ln:4}),t[s]<t[e]&&(e=s),t[s]>t[n]&&(n=s);r.push({a:[...t],hi:[e,n],sw:[],done:[...i],msg:`Min=a[${e}]=${t[e]}, Max=a[${n}]=${t[n]}`,ln:5}),e!==a&&([t[a],t[e]]=[t[e],t[a]],r.push({a:[...t],hi:[],sw:[a,e],done:[...i],msg:`Swap min to front`,ln:6}),n===a&&(n=e)),n!==o&&([t[o],t[n]]=[t[n],t[o]],r.push({a:[...t],hi:[],sw:[o,n],done:[...i],msg:`Swap max to back`,ln:7})),i.add(a),i.add(o),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Both ends sorted — half the passes!`,ln:8}),a++,o--}for(let e=0;e<n;e++)i.add(e);return r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! ~50% fewer passes`,ln:10}),r}function w(e){let t=[...e],n=t.length,r=[];r.push({a:[...t],hi:[],sw:[],done:[0],msg:`Insert each element into its correct position`,ln:0});for(let e=1;e<n;e++){let n=t[e],i=e-1;for(r.push({a:[...t],hi:[e],sw:[],done:Array.from({length:e},(e,t)=>t),msg:`Key=a[${e}]=${n}`,ln:2});i>=0&&t[i]>n;)r.push({a:[...t],hi:[i],sw:[],done:[],msg:`a[${i}]=${t[i]}>key, shift right`,ln:4}),t[i+1]=t[i],i--,r.push({a:[...t],hi:[],sw:[i+1],done:[],msg:`Shifted`,ln:5});t[i+1]=n,r.push({a:[...t],hi:[],sw:[i+1],done:Array.from({length:e+1},(e,t)=>t),msg:`Placed key=${n} at ${i+1}`,ln:7})}return r.push({a:[...t],hi:[],sw:[],done:Array.from({length:n},(e,t)=>t),msg:`✓ Sorted! O(n) best case`,ln:9}),r}function T(e){let t=[...e],n=t.length,r=[];r.push({a:[...t],hi:[],sw:[],done:[0],msg:`Binary insertion: use binary search to find position`,ln:0});for(let e=1;e<n;e++){let n=t[e];r.push({a:[...t],hi:[e],sw:[],done:Array.from({length:e},(e,t)=>t),msg:`Key=a[${e}]=${n} — binary search for position`,ln:2});let i=0,a=e-1;for(;i<=a;){let e=Math.floor((i+a)/2);r.push({a:[...t],hi:[e],sw:[],done:[],msg:`Binary: mid=${e}, a[${e}]=${t[e]} vs key=${n}`,ln:4}),t[e]<=n?i=e+1:a=e-1}r.push({a:[...t],hi:[i],sw:[],done:[],msg:`Insert position = ${i} (found in O(log i))`,ln:6});for(let n=e;n>i;n--)t[n]=t[n-1],r.push({a:[...t],hi:[],sw:[n],done:[],msg:`Shift right`,ln:7});t[i]=n,r.push({a:[...t],hi:[],sw:[i],done:Array.from({length:e+1},(e,t)=>t),msg:`Placed key=${n}`,ln:8})}return r.push({a:[...t],hi:[],sw:[],done:Array.from({length:n},(e,t)=>t),msg:`✓ Sorted! Fewer comparisons with binary search`,ln:10}),r}function ee(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Shell Sort: insertion sort with decreasing gap`,ln:0});let a=Math.floor(n/2);for(;a>0;){r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Gap = ${a} — comparing elements ${a} apart`,ln:2});for(let e=a;e<n;e++){let n=t[e],o=e;for(r.push({a:[...t],hi:[e,e-a],sw:[],done:[...i],msg:`Compare a[${e}]=${t[e]} with a[${e-a}]=${t[e-a]} (gap=${a})`,ln:4});o>=a&&t[o-a]>n;)r.push({a:[...t],hi:[o-a],sw:[o],done:[...i],msg:`Shift a[${o-a}] right by gap=${a}`,ln:5}),t[o]=t[o-a],o-=a;t[o]=n,o!==e&&r.push({a:[...t],hi:[],sw:[o],done:[...i],msg:`Placed ${n} at ${o}`,ln:6})}if(a===1)for(let e=0;e<n;e++)i.add(e);r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Gap ${a} pass done`,ln:7}),a=Math.floor(a/2)}return r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! Shell sort — O(n log n) average`,ln:9}),r}function te(e){let t=[...e],n=[];n.push({a:[...t],hi:[],sw:[],done:[],msg:`Top-down recursive merge sort`,ln:0});function r(e,t,r,i){let a=e.slice(t,r+1),o=e.slice(r+1,i+1),s=0,c=0,l=t;for(n.push({a:[...e],hi:[t,i],sw:[],done:[],msg:`Merging [${t}..${r}] & [${r+1}..${i}]`,ln:8});s<a.length&&c<o.length;)n.push({a:[...e],hi:[t+s,r+1+c],sw:[],done:[],msg:`${a[s]} vs ${o[c]}`,ln:10}),a[s]<=o[c]?e[l++]=a[s++]:e[l++]=o[c++],n.push({a:[...e],hi:[],sw:[l-1],done:[],msg:`Placed ${e[l-1]}`,ln:11});for(;s<a.length;)e[l++]=a[s++],n.push({a:[...e],hi:[],sw:[l-1],done:[],msg:`Copy L`,ln:12});for(;c<o.length;)e[l++]=o[c++],n.push({a:[...e],hi:[],sw:[l-1],done:[],msg:`Copy R`,ln:12});n.push({a:[...e],hi:[],sw:[],done:Array.from({length:i-t+1},(e,n)=>t+n),msg:`Merged [${t}..${i}]`,ln:13})}function i(e,t,a){if(t<a){let o=Math.floor((t+a)/2);n.push({a:[...e],hi:[t,a],sw:[],done:[],msg:`Divide [${t}..${a}] mid=${o}`,ln:3}),i(e,t,o),i(e,o+1,a),r(e,t,o,a)}}return i(t,0,t.length-1),n.push({a:[...t],hi:[],sw:[],done:Array.from({length:t.length},(e,t)=>t),msg:`✓ Sorted!`,ln:16}),n}function ne(e){let t=[...e],n=t.length,r=[];r.push({a:[...t],hi:[],sw:[],done:[],msg:`Bottom-up: no recursion, merge pairs iteratively`,ln:0});for(let e=1;e<n;e*=2){r.push({a:[...t],hi:[],sw:[],done:[],msg:`Merge subarrays of size ${e}`,ln:3});for(let i=0;i<n-1;i+=2*e){let a=Math.min(i+e-1,n-1),o=Math.min(i+2*e-1,n-1);if(a<o){let e=t.slice(i,a+1),n=t.slice(a+1,o+1),s=0,c=0,l=i;for(r.push({a:[...t],hi:[i,o],sw:[],done:[],msg:`Merge [${i}..${a}] & [${a+1}..${o}]`,ln:5});s<e.length&&c<n.length;)e[s]<=n[c]?t[l++]=e[s++]:t[l++]=n[c++],r.push({a:[...t],hi:[],sw:[l-1],done:[],msg:`Placed ${t[l-1]}`,ln:7});for(;s<e.length;)t[l++]=e[s++];for(;c<n.length;)t[l++]=n[c++]}}}return r.push({a:[...t],hi:[],sw:[],done:Array.from({length:n},(e,t)=>t),msg:`✓ Sorted! No recursion stack`,ln:10}),r}function re(e){let t=[...e],n=t.length,r=[];r.push({a:[...t],hi:[],sw:[],done:[],msg:`Hybrid: Insertion Sort for n≤4, Merge for rest`,ln:0});function i(e,t,n){for(let i=t+1;i<=n;i++){let a=e[i],o=i-1;for(r.push({a:[...e],hi:[i],sw:[],done:[],msg:`Insertion in [${t}..${n}]`,ln:3});o>=t&&e[o]>a;)e[o+1]=e[o],o--;e[o+1]=a}}function a(e,t,n,i){let a=e.slice(t,n+1),o=e.slice(n+1,i+1),s=0,c=0,l=t;for(r.push({a:[...e],hi:[t,i],sw:[],done:[],msg:`Merge [${t}..${n}] & [${n+1}..${i}]`,ln:7});s<a.length&&c<o.length;)a[s]<=o[c]?e[l++]=a[s++]:e[l++]=o[c++],r.push({a:[...e],hi:[],sw:[l-1],done:[],msg:`Placed ${e[l-1]}`,ln:8});for(;s<a.length;)e[l++]=a[s++];for(;c<o.length;)e[l++]=o[c++];r.push({a:[...e],hi:[],sw:[],done:Array.from({length:i-t+1},(e,n)=>t+n),msg:`Merged`,ln:9})}function o(e,t,n){if(n-t<=4)r.push({a:[...e],hi:[t,n],sw:[],done:[],msg:`n=${n-t+1}≤4: use Insertion Sort`,ln:2}),i(e,t,n);else{let i=Math.floor((t+n)/2);r.push({a:[...e],hi:[t,n],sw:[],done:[],msg:`n=${n-t+1}>4: divide at ${i}`,ln:5}),o(e,t,i),o(e,i+1,n),a(e,t,i,n)}}return o(t,0,n-1),r.push({a:[...t],hi:[],sw:[],done:Array.from({length:n},(e,t)=>t),msg:`✓ Sorted! (TimSort concept)`,ln:11}),r}function ie(e,t,n,r,i){let a=e[n],o=t-1;r.push({a:[...e],hi:[n],sw:[],done:[],msg:`Pivot = a[${n}] = ${a}`,ln:3});for(let i=t;i<n;i++)r.push({a:[...e],hi:[i,n],sw:[],done:[],msg:`a[${i}]=${e[i]} vs pivot=${a}`,ln:5}),e[i]<=a&&(o++,o!==i&&([e[o],e[i]]=[e[i],e[o]],r.push({a:[...e],hi:[],sw:[o,i],done:[],msg:`Swap a[${o}]↔a[${i}]`,ln:6})));return[e[o+1],e[n]]=[e[n],e[o+1]],r.push({a:[...e],hi:[],sw:[o+1,n],done:[o+1],msg:`Pivot ${a} placed at index ${o+1}`,ln:8}),o+1}function ae(e){let t=[...e],n=[],r=new Set;n.push({a:[...t],hi:[],sw:[],done:[],msg:`Quick Sort: last element as pivot (Lomuto)`,ln:0});function i(e,a){if(e<a){n.push({a:[...t],hi:[e,a],sw:[],done:[...r],msg:`Partition [${e}..${a}]`,ln:2});let o=ie(t,e,a,n);r.add(o),i(e,o-1),i(o+1,a)}}i(0,t.length-1);for(let e=0;e<t.length;e++)r.add(e);return n.push({a:[...t],hi:[],sw:[],done:[...r],msg:`✓ Sorted!`,ln:10}),n}function oe(e){let t=[...e],n=[],r=new Set;n.push({a:[...t],hi:[],sw:[],done:[],msg:`Quick Sort: random pivot — avoids worst case`,ln:0});function i(e,a){if(e<a){let o=e+Math.floor(Math.random()*(a-e+1));n.push({a:[...t],hi:[o],sw:[],done:[...r],msg:`Random pivot index=${o}, val=${t[o]}`,ln:2}),[t[o],t[a]]=[t[a],t[o]],n.push({a:[...t],hi:[],sw:[o,a],done:[...r],msg:`Swap pivot to end`,ln:3});let s=ie(t,e,a,n);r.add(s),i(e,s-1),i(s+1,a)}}i(0,t.length-1);for(let e=0;e<t.length;e++)r.add(e);return n.push({a:[...t],hi:[],sw:[],done:[...r],msg:`✓ Sorted! O(n log n) expected`,ln:10}),n}function se(e){let t=[...e],n=[],r=new Set;n.push({a:[...t],hi:[],sw:[],done:[],msg:`3-Way Partition (Dutch National Flag) — handles duplicates`,ln:0});function i(e,a){if(e>=a)return;let o=t[e],s=e,c=a,l=e+1;for(n.push({a:[...t],hi:[e],sw:[],done:[...r],msg:`Pivot=${o}, split into <${o} | =${o} | >${o}`,ln:2});l<=c;)n.push({a:[...t],hi:[l],sw:[],done:[...r],msg:`a[${l}]=${t[l]}: ${t[l]<o?`< lt`:``}${t[l]===o?`= skip`:``}${t[l]>o?`> swap with gt`:``}`,ln:4}),t[l]<o?([t[s],t[l]]=[t[l],t[s]],n.push({a:[...t],hi:[],sw:[s,l],done:[...r],msg:`<pivot: swap a[${s}]↔a[${l}]`,ln:5}),s++,l++):t[l]>o?([t[l],t[c]]=[t[c],t[l]],n.push({a:[...t],hi:[],sw:[l,c],done:[...r],msg:`>pivot: swap a[${l}]↔a[${c}]`,ln:6}),c--):l++;for(let e=s;e<=c;e++)r.add(e);n.push({a:[...t],hi:[],sw:[],done:[...r],msg:`Partitioned: [<${o}][=${o}][>${o}]`,ln:8}),i(e,s-1),i(c+1,a)}i(0,t.length-1);for(let e=0;e<t.length;e++)r.add(e);return n.push({a:[...t],hi:[],sw:[],done:[...r],msg:`✓ Sorted! Equal elements grouped — great for duplicates`,ln:10}),n}function ce(e,t,n,r,i){let a=n,o=2*n+1,s=2*n+2;r.push({a:[...e],hi:[n,o<t?o:-1,s<t?s:-1].filter(e=>e>=0),sw:[],done:[...i],msg:`Heapify: parent a[${n}]=${e[n]}, children=${o<t?e[o]:`∅`},${s<t?e[s]:`∅`}`,ln:4}),o<t&&e[o]>e[a]&&(a=o),s<t&&e[s]>e[a]&&(a=s),a!==n&&([e[n],e[a]]=[e[a],e[n]],r.push({a:[...e],hi:[],sw:[n,a],done:[...i],msg:`Swap a[${n}]↔a[${a}]`,ln:5}),ce(e,t,a,r,i))}function le(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Heap Sort: build max-heap from bottom up`,ln:0});for(let e=Math.floor(n/2)-1;e>=0;e--)r.push({a:[...t],hi:[e],sw:[],done:[],msg:`Build heap: siftDown(${e})`,ln:2}),ce(t,n,e,r,i);r.push({a:[...t],hi:[],sw:[],done:[],msg:`Max-heap built! Now extract elements`,ln:6});for(let e=n-1;e>0;e--)r.push({a:[...t],hi:[0,e],sw:[],done:[...i],msg:`Swap max a[0]=${t[0]} to position ${e}`,ln:8}),[t[0],t[e]]=[t[e],t[0]],i.add(e),r.push({a:[...t],hi:[],sw:[0,e],done:[...i],msg:`Heapify remaining [0..${e-1}]`,ln:9}),ce(t,e,0,r,i);return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! O(n log n) always`,ln:11}),r}function E(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Floyd's O(n) heapification — start from last non-leaf`,ln:0});let a=Math.floor(n/2)-1;r.push({a:[...t],hi:[a],sw:[],done:[],msg:`Last non-leaf = index ${a}, build heap downward`,ln:2});for(let e=a;e>=0;e--)r.push({a:[...t],hi:[e],sw:[],done:[],msg:`SiftDown index ${e} — O(n) total (not O(n log n)!)`,ln:3}),ce(t,n,e,r,i);r.push({a:[...t],hi:[],sw:[],done:[],msg:`Heap built in O(n) — now extract O(n log n)`,ln:7});for(let e=n-1;e>0;e--)[t[0],t[e]]=[t[e],t[0]],i.add(e),r.push({a:[...t],hi:[],sw:[0,e],done:[...i],msg:`Extract max, heapify remaining`,ln:9}),ce(t,e,0,r,i);return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! Floyd's build is O(n), not O(n log n)`,ln:11}),r}function D(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Optimized: skip leaf nodes in heapify phase`,ln:0});let a=Math.floor(n/2)-1,o=a+1;r.push({a:[...t],hi:[...Array.from({length:n-o},(e,t)=>o+t)],sw:[],done:[],msg:`Indices ${o}..${n-1} are leaves — skip them!`,ln:2});for(let e=a;e>=0;e--)ce(t,n,e,r,i);r.push({a:[...t],hi:[],sw:[],done:[],msg:`Heap built (only non-leaves processed). Extracting...`,ln:6});for(let e=n-1;e>0;e--)[t[0],t[e]]=[t[e],t[0]],i.add(e),ce(t,e,0,r,i);return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! Skip leaf optimization`,ln:10}),r}function ue(e,t){let n=[{arr:e,cur:-1,l:-1,r:-1,found:-1,msg:`Linear: scan every element for ${t}`,ln:0}];for(let r=0;r<e.length;r++)if(n.push({arr:e,cur:r,l:-1,r:-1,found:-1,msg:`Check arr[${r}]=${e[r]}`,ln:2}),e[r]===t)return n.push({arr:e,cur:r,l:-1,r:-1,found:r,msg:`✓ Found ${t} at index ${r}!`,ln:3}),n;return n.push({arr:e,cur:-1,l:-1,r:-1,found:-2,msg:`✗ Not found`,ln:5}),n}function de(e,t){let n=[...e];n[n.length-1],n.push(t);let r=[{arr:[...n],cur:-1,l:-1,r:-1,found:-1,msg:`Sentinel: append ${t} to end — skip bounds check`,ln:0}],i=0;for(;n[i]!==t;)r.push({arr:[...n],cur:i,l:-1,r:-1,found:-1,msg:`arr[${i}]=${n[i]}≠${t} (no bounds check needed!)`,ln:3}),i++;return i<e.length?r.push({arr:[...n],cur:i,l:-1,r:-1,found:i,msg:`✓ Found at index ${i}! (not the sentinel)`,ln:5}):r.push({arr:[...n],cur:i,l:-1,r:-1,found:-2,msg:`Hit sentinel at ${i} — not in original array`,ln:7}),r}function fe(e,t){let n=[...e],r=[{arr:[...n],cur:-1,l:-1,r:-1,found:-1,msg:`Transposition: move found element forward for faster future searches`,ln:0}];for(let e=0;e<n.length;e++)if(r.push({arr:[...n],cur:e,l:-1,r:-1,found:-1,msg:`Check arr[${e}]=${n[e]}`,ln:2}),n[e]===t)return r.push({arr:[...n],cur:e,l:-1,r:-1,found:e,msg:`✓ Found ${t} at index ${e}!`,ln:3}),e>0&&([n[e],n[e-1]]=[n[e-1],n[e]],r.push({arr:[...n],cur:e-1,l:-1,r:-1,found:e-1,msg:`Swapped forward → future searches find it faster!`,ln:4})),r;return r.push({arr:[...n],cur:-1,l:-1,r:-1,found:-2,msg:`✗ Not found`,ln:6}),r}function pe(e,t){let n=[...e].sort((e,t)=>e-t),r=0,i=n.length-1,a=[{arr:n,cur:-1,l:r,r:i,found:-1,msg:`Binary Search (iterative) for ${t}`,ln:0}];for(;r<=i;){let e=Math.floor((r+i)/2);if(a.push({arr:n,cur:e,l:r,r:i,found:-1,msg:`mid=${e}, arr[${e}]=${n[e]}`,ln:4}),n[e]===t)return a.push({arr:n,cur:e,l:r,r:i,found:e,msg:`✓ Found at ${e}!`,ln:5}),a;n[e]<t?(a.push({arr:n,cur:e,l:e+1,r:i,found:-1,msg:`${n[e]}<${t}: discard left half`,ln:6}),r=e+1):(a.push({arr:n,cur:e,l:r,r:e-1,found:-1,msg:`${n[e]}>${t}: discard right half`,ln:7}),i=e-1)}return a.push({arr:n,cur:-1,l:r,r:i,found:-2,msg:`✗ Not found`,ln:9}),a}function me(e,t){let n=[...e].sort((e,t)=>e-t),r=[{arr:n,cur:-1,l:0,r:n.length-1,found:-1,msg:`Binary Search (recursive) for ${t}`,ln:0}],i=-2;function a(e,o){if(e>o){r.push({arr:n,cur:-1,l:e,r:o,found:-2,msg:`l>r: base case, not found`,ln:2});return}let s=Math.floor((e+o)/2);if(r.push({arr:n,cur:s,l:e,r:o,found:-1,msg:`search(${e},${o}): mid=${s}, arr[${s}]=${n[s]}`,ln:4}),n[s]===t){i=s,r.push({arr:n,cur:s,l:e,r:o,found:s,msg:`✓ Found at ${s}!`,ln:5});return}n[s]<t?(r.push({arr:n,cur:s,l:s+1,r:o,found:-1,msg:`Recurse right: search(${s+1},${o})`,ln:6}),a(s+1,o)):(r.push({arr:n,cur:s,l:e,r:s-1,found:-1,msg:`Recurse left: search(${e},${s-1})`,ln:7}),a(e,s-1))}return a(0,n.length-1),i<0&&r.push({arr:n,cur:-1,l:0,r:n.length-1,found:-2,msg:`✗ Not found`,ln:9}),r}function O(e,t){let n=[...e].sort((e,t)=>e-t),r=n.length,i=[{arr:n,cur:-1,l:0,r:r-1,found:-1,msg:`Exponential Search: find range, then binary search`,ln:0}];if(n[0]===t)return i.push({arr:n,cur:0,l:0,r:0,found:0,msg:`✓ Found at index 0!`,ln:2}),i;let a=1;for(i.push({arr:n,cur:a,l:0,r:r-1,found:-1,msg:`Start with i=1, double each step`,ln:3});a<r&&n[a]<=t;)i.push({arr:n,cur:a,l:0,r:r-1,found:-1,msg:`arr[${a}]=${n[a]} ≤ ${t}: double i=${a*2}`,ln:4}),a*=2;let o=Math.floor(a/2),s=Math.min(a,r-1);i.push({arr:n,cur:-1,l:o,r:s,found:-1,msg:`Range found! Binary search in [${o}..${s}]`,ln:6});let c=o,l=s;for(;c<=l;){let e=Math.floor((c+l)/2);if(i.push({arr:n,cur:e,l:c,r:l,found:-1,msg:`Binary: mid=${e}, arr[${e}]=${n[e]}`,ln:8}),n[e]===t)return i.push({arr:n,cur:e,l:c,r:l,found:e,msg:`✓ Found at ${e}!`,ln:9}),i;n[e]<t?c=e+1:l=e-1}return i.push({arr:n,cur:-1,l:c,r:l,found:-2,msg:`✗ Not found`,ln:11}),i}function he(e,t){let n=[...e].sort((e,t)=>e-t),r=n.length,i=Math.floor(Math.sqrt(r)),a=0,o=i,s=[{arr:n,cur:-1,l:0,r:i,found:-1,msg:`Jump: step=√${r}≈${i}`,ln:0}];for(;o<r&&n[Math.min(o,r-1)]<t;)s.push({arr:n,cur:Math.min(o,r-1),l:a,r:Math.min(o,r-1),found:-1,msg:`Jump to ${Math.min(o,r-1)}: ${n[Math.min(o,r-1)]}<${t}`,ln:4}),a=o,o+=i;let c=Math.min(o,r-1);s.push({arr:n,cur:-1,l:a,r:c,found:-1,msg:`Block [${a}..${c}]: linear scan`,ln:7});for(let e=a;e<=c;e++)if(s.push({arr:n,cur:e,l:a,r:c,found:-1,msg:`Check arr[${e}]=${n[e]}`,ln:8}),n[e]===t)return s.push({arr:n,cur:e,l:a,r:c,found:e,msg:`✓ Found at ${e}!`,ln:9}),s;return s.push({arr:n,cur:-1,l:-1,r:-1,found:-2,msg:`✗ Not found`,ln:11}),s}function ge(e,t){let n=[...e].sort((e,t)=>e-t),r=n.length,i=[{arr:n,cur:-1,l:0,r:r-1,found:-1,msg:`Fibonacci Search: uses Fibonacci numbers as jump sizes`,ln:0}],a=0,o=1,s=o+a;for(;s<r;)a=o,o=s,s=o+a;let c=-1;for(i.push({arr:n,cur:-1,l:0,r:r-1,found:-1,msg:`Fibonacci ${s} covers array of size ${r}`,ln:3});s>1;){let e=Math.min(c+a,r-1);if(i.push({arr:n,cur:e,l:0,r:r-1,found:-1,msg:`Check arr[${e}]=${n[e]} (fib step=${a})`,ln:5}),n[e]<t)s=o,o=a,a=s-o,c=e,i.push({arr:n,cur:e,l:e,r:r-1,found:-1,msg:`arr[${e}]<${t}: eliminate left`,ln:6});else if(n[e]>t)s=a,o-=a,a=s-o,i.push({arr:n,cur:e,l:0,r:e,found:-1,msg:`arr[${e}]>${t}: eliminate right`,ln:7});else return i.push({arr:n,cur:e,l:0,r:r-1,found:e,msg:`✓ Found at ${e}!`,ln:8}),i}return o&&n[c+1]===t?(i.push({arr:n,cur:c+1,l:0,r:r-1,found:c+1,msg:`✓ Found at ${c+1}!`,ln:9}),i):(i.push({arr:n,cur:-1,l:-1,r:-1,found:-2,msg:`✗ Not found`,ln:11}),i)}function _e(e,t){let n=[...e].sort((e,t)=>e-t),r=0,i=n.length-1,a=[{arr:n,cur:-1,l:r,r:i,found:-1,msg:`Interpolation: estimate position by value distribution`,ln:0}];for(;r<=i&&t>=n[r]&&t<=n[i];){if(r===i){if(n[r]===t)return a.push({arr:n,cur:r,l:r,r:i,found:r,msg:`✓ Found at ${r}!`,ln:3}),a;break}let e=r+Math.floor((t-n[r])/(n[i]-n[r])*(i-r));if(a.push({arr:n,cur:e,l:r,r:i,found:-1,msg:`Estimate: pos=${e}, arr[${e}]=${n[e]} (formula: ${r}+((${t}-${n[r]})/(${n[i]}-${n[r]}))×(${i}-${r}))`,ln:2}),n[e]===t)return a.push({arr:n,cur:e,l:r,r:i,found:e,msg:`✓ Found at ${e}!`,ln:4}),a;n[e]<t?(a.push({arr:n,cur:e,l:e+1,r:i,found:-1,msg:`arr[${e}]<${t}: search right`,ln:5}),r=e+1):(a.push({arr:n,cur:e,l:r,r:e-1,found:-1,msg:`arr[${e}]>${t}: search left`,ln:6}),i=e-1)}return a.push({arr:n,cur:-1,l:r,r:i,found:-2,msg:`✗ Not found`,ln:8}),a}function ve(e,t){let n=[{arr:e,p1:-1,p2:-1,found:[],map:{},msg:`Two Sum=${t}: O(n²) try every pair`,ln:0}];for(let r=0;r<e.length-1;r++)for(let i=r+1;i<e.length;i++)if(n.push({arr:e,p1:r,p2:i,found:[],map:{},msg:`${e[r]}+${e[i]}=${e[r]+e[i]}`,ln:3}),e[r]+e[i]===t)return n.push({arr:e,p1:r,p2:i,found:[r,i],map:{},msg:`✓ Found [${r},${i}]`,ln:4}),n;return n.push({arr:e,p1:-1,p2:-1,found:[],map:{},msg:`✗ No pair`,ln:6}),n}function ye(e,t){let n=[...e].sort((e,t)=>e-t),r=0,i=n.length-1,a=[{arr:n,p1:r,p2:i,found:[],map:{},msg:`Sort + Two Pointers`,ln:0}];for(;r<i;){let e=n[r]+n[i];if(a.push({arr:n,p1:r,p2:i,found:[],map:{},msg:`${n[r]}+${n[i]}=${e}`,ln:4}),e===t)return a.push({arr:n,p1:r,p2:i,found:[r,i],map:{},msg:`✓ [${r},${i}]`,ln:5}),a;e<t?r++:i--,a.push({arr:n,p1:r,p2:i,found:[],map:{},msg:e<t?`Sum<${t}, L→`:`Sum>${t}, ←R`,ln:7})}return a.push({arr:n,p1:r,p2:i,found:[],map:{},msg:`✗ Not found`,ln:9}),a}function be(e,t){let n={},r=[{arr:e,p1:-1,p2:-1,found:[],map:{},msg:`HashMap: single pass O(n)`,ln:0}];for(let i=0;i<e.length;i++){let a=t-e[i];if(r.push({arr:e,p1:i,p2:-1,found:[],map:{...n},msg:`Need ${a}`,ln:3}),a in n)return r.push({arr:e,p1:i,p2:n[a],found:[n[a],i],map:{...n},msg:`✓ [${n[a]},${i}]`,ln:4}),r;n[e[i]]=i,r.push({arr:e,p1:i,p2:-1,found:[],map:{...n},msg:`Store ${e[i]}→${i}`,ln:6})}return r.push({arr:e,p1:-1,p2:-1,found:[],map:{},msg:`✗ Not found`,ln:8}),r}function xe(e){let t=0,n=[{active:-1,memo:{},table:null,calls:0,result:null,msg:`fib(${e}) naive recursion O(2ⁿ)`,ln:0}];function r(e){if(t++,n.push({active:e,memo:{},table:null,calls:t,result:null,msg:`fib(${e}) called — total:${t}`,ln:1}),e<=1)return n.push({active:e,memo:{},table:null,calls:t,result:e,msg:`Base: fib(${e})=${e}`,ln:2}),e;let i=r(e-1),a=r(e-2),o=i+a;return n.push({active:e,memo:{},table:null,calls:t,result:o,msg:`fib(${e})=${i}+${a}=${o}`,ln:3}),o}let i=r(e);return n.push({active:-1,memo:{},table:null,calls:t,result:i,msg:`✓ fib(${e})=${i} — ${t} calls!`,ln:4}),n}function Se(e){let t={},n=[{active:-1,memo:{},table:null,calls:0,result:null,msg:`fib(${e}) memoization O(n)`,ln:0}];function r(e){if(e in t)return n.push({active:e,memo:{...t},table:null,calls:0,result:t[e],msg:`Cache hit! memo[${e}]=${t[e]}`,ln:1}),t[e];if(n.push({active:e,memo:{...t},table:null,calls:0,result:null,msg:`Compute fib(${e})`,ln:3}),e<=1)return t[e]=e,n.push({active:e,memo:{...t},table:null,calls:0,result:e,msg:`Base fib(${e})=${e}`,ln:4}),e;let i=r(e-1)+r(e-2);return t[e]=i,n.push({active:e,memo:{...t},table:null,calls:0,result:i,msg:`fib(${e})=${i} cached`,ln:6}),i}let i=r(e);return n.push({active:-1,memo:{...t},table:null,calls:0,result:i,msg:`✓ fib(${e})=${i} — ${Object.keys(t).length} unique`,ln:8}),n}function Ce(e){let t=Math.max(e+1,2),n=Array(t).fill(0);n[0]=0,e>=1&&(n[1]=1);let r=[{active:-1,memo:{},table:[...n],calls:0,result:null,msg:`fib(${e}) DP O(1) space`,ln:2}];for(let t=2;t<=e;t++)n[t]=n[t-1]+n[t-2],r.push({active:t,memo:{},table:[...n],calls:0,result:null,msg:`dp[${t}]=${n[t-1]}+${n[t-2]}=${n[t]}`,ln:4});return r.push({active:-1,memo:{},table:[...n],calls:0,result:n[e],msg:`✓ fib(${e})=${n[e]} O(1) space!`,ln:6}),r}var k={bubbleBasic:g(`function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1])
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
    }
  }
  return arr; // O(n²) always
}`,`def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1]=arr[j+1],arr[j]
    return arr  # O(n²)`,`void bubbleSort(int a[],int n){
    for(int i=0;i<n-1;i++)
        for(int j=0;j<n-i-1;j++)
            if(a[j]>a[j+1])
                swap(a[j],a[j+1]);
} // O(n²)`,`void bubbleSort(int[] a){
    int n=a.length;
    for(int i=0;i<n-1;i++)
        for(int j=0;j<n-i-1;j++)
            if(a[j]>a[j+1]){
                int t=a[j];a[j]=a[j+1];a[j+1]=t;}
} // O(n²)`),bubbleFlag:g(`function bubbleSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // early exit!
  }
  return arr; // O(n) best case
}`,`def bubble_sort(arr):
    for i in range(len(arr)-1):
        swapped = False
        for j in range(len(arr)-i-1):
            if arr[j]>arr[j+1]:
                arr[j],arr[j+1]=arr[j+1],arr[j]
                swapped=True
        if not swapped: break
    return arr  # O(n) best`,`void bubbleSort(int a[],int n){
    for(int i=0;i<n-1;i++){
        bool sw=false;
        for(int j=0;j<n-i-1;j++)
            if(a[j]>a[j+1]){swap(a[j],a[j+1]);sw=true;}
        if(!sw) break; // early exit!
    }
}`,`void bubbleSort(int[] a){
    for(int i=0;i<a.length-1;i++){
        boolean sw=false;
        for(int j=0;j<a.length-i-1;j++)
            if(a[j]>a[j+1]){
                int t=a[j];a[j]=a[j+1];a[j+1]=t;sw=true;}
        if(!sw) break;
    }
}`),bubbleLastSwap:g(`function bubbleSort(arr) {
  let n = arr.length;
  while (n > 1) {
    let last = 0;
    for (let j = 0; j < n-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        last = j+1; // track last swap
      }
    }
    n = last; // shrink inner loop!
  }
  return arr;
}`,`def bubble_sort(arr):
    n = len(arr)
    while n > 1:
        last = 0
        for j in range(n-1):
            if arr[j]>arr[j+1]:
                arr[j],arr[j+1]=arr[j+1],arr[j]
                last=j+1
        n=last  # shrink!
    return arr`,`void bubbleSort(int a[],int n){
    while(n>1){
        int last=0;
        for(int j=0;j<n-1;j++)
            if(a[j]>a[j+1]){swap(a[j],a[j+1]);last=j+1;}
        n=last;
    }
}`,`void bubbleSort(int[] a){
    int n=a.length;
    while(n>1){
        int last=0;
        for(int j=0;j<n-1;j++)
            if(a[j]>a[j+1]){
                int t=a[j];a[j]=a[j+1];a[j+1]=t;last=j+1;}
        n=last;
    }
}`),selBasic:g(`function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let minIdx = i;
    for (let j = i+1; j < arr.length; j++)
      if (arr[j] < arr[minIdx]) minIdx = j;
    if (minIdx !== i)
      [arr[i],arr[minIdx]]=[arr[minIdx],arr[i]];
  }
  return arr; // O(n²) always
}`,`def selection_sort(arr):
    for i in range(len(arr)-1):
        min_i = i
        for j in range(i+1,len(arr)):
            if arr[j]<arr[min_i]: min_i=j
        arr[i],arr[min_i]=arr[min_i],arr[i]
    return arr  # O(n²)`,`void selSort(int a[],int n){
    for(int i=0;i<n-1;i++){
        int m=i;
        for(int j=i+1;j<n;j++) if(a[j]<a[m])m=j;
        swap(a[i],a[m]);
    }
}`,`void selSort(int[] a){
    for(int i=0;i<a.length-1;i++){
        int m=i;
        for(int j=i+1;j<a.length;j++) if(a[j]<a[m])m=j;
        int t=a[i];a[i]=a[m];a[m]=t;
    }
}`),selStable:g(`function selectionSortStable(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let minIdx = i;
    for (let j = i+1; j < arr.length; j++)
      if (arr[j] < arr[minIdx]) minIdx = j;
    // shift instead of swap — preserves order
    const min = arr[minIdx];
    while (minIdx > i) { arr[minIdx] = arr[minIdx-1]; minIdx--; }
    arr[i] = min;
  }
  return arr; // stable!
}`,`def sel_sort_stable(arr):
    for i in range(len(arr)-1):
        min_i=min(range(i,len(arr)),key=lambda x:arr[x])
        min_val=arr[min_i]
        arr[i+1:min_i+1]=arr[i:min_i]  # shift
        arr[i]=min_val
    return arr  # stable`,`// Shift instead of swap = stable
void selSortStable(int a[],int n){
    for(int i=0;i<n-1;i++){
        int m=i;
        for(int j=i+1;j<n;j++) if(a[j]<a[m])m=j;
        int v=a[m];
        while(m>i){a[m]=a[m-1];m--;}
        a[i]=v;
    }
}`,`// Shift = stable selection sort
void selSortStable(int[] a){
    for(int i=0;i<a.length-1;i++){
        int m=i;
        for(int j=i+1;j<a.length;j++) if(a[j]<a[m])m=j;
        int v=a[m];
        while(m>i){a[m]=a[m-1];m--;}
        a[i]=v;
    }
}`),selBidir:g(`function selectionSortBidir(arr) {
  let l=0, r=arr.length-1;
  while (l < r) {
    let min=l, max=l;
    for (let j=l; j<=r; j++) {
      if (arr[j]<arr[min]) min=j;
      if (arr[j]>arr[max]) max=j;
    }
    [arr[l],arr[min]]=[arr[min],arr[l]];
    if (arr[l]===arr[max]) max=min; // fix if max was at l
    [arr[r],arr[max]]=[arr[max],arr[r]];
    l++; r--;
  }
  return arr; // ~50% fewer passes!
}`,`def sel_bidir(arr):
    l,r=0,len(arr)-1
    while l<r:
        mn=mx=l
        for j in range(l,r+1):
            if arr[j]<arr[mn]: mn=j
            if arr[j]>arr[mx]: mx=j
        arr[l],arr[mn]=arr[mn],arr[l]
        if mx==l: mx=mn
        arr[r],arr[mx]=arr[mx],arr[r]
        l+=1;r-=1
    return arr`,`void selBidir(int a[],int n){
    int l=0,r=n-1;
    while(l<r){
        int mn=l,mx=l;
        for(int j=l;j<=r;j++){
            if(a[j]<a[mn])mn=j;
            if(a[j]>a[mx])mx=j;
        }
        swap(a[l],a[mn]);
        if(mx==l)mx=mn;
        swap(a[r],a[mx]);
        l++;r--;
    }
}`,`void selBidir(int[] a){
    int l=0,r=a.length-1;
    while(l<r){
        int mn=l,mx=l;
        for(int j=l;j<=r;j++){
            if(a[j]<a[mn])mn=j;
            if(a[j]>a[mx])mx=j;}
        int t=a[l];a[l]=a[mn];a[mn]=t;
        if(mx==l)mx=mn;
        t=a[r];a[r]=a[mx];a[mx]=t;
        l++;r--;
    }
}`),insBasic:g(`function insertionSort(arr) {
  for (let i=1; i<arr.length; i++) {
    const key = arr[i];
    let j = i-1;
    while (j>=0 && arr[j]>key) {
      arr[j+1]=arr[j]; j--;
    }
    arr[j+1]=key;
  }
  return arr; // O(n) best case
}`,`def insertion_sort(arr):
    for i in range(1,len(arr)):
        key=arr[i]; j=i-1
        while j>=0 and arr[j]>key:
            arr[j+1]=arr[j]; j-=1
        arr[j+1]=key
    return arr`,`void insSort(int a[],int n){
    for(int i=1;i<n;i++){
        int key=a[i],j=i-1;
        while(j>=0&&a[j]>key){a[j+1]=a[j];j--;}
        a[j+1]=key;
    }
}`,`void insSort(int[] a){
    for(int i=1;i<a.length;i++){
        int key=a[i],j=i-1;
        while(j>=0&&a[j]>key){a[j+1]=a[j];j--;}
        a[j+1]=key;
    }
}`),insBinary:g(`function insertionSortBinary(arr) {
  for (let i=1; i<arr.length; i++) {
    const key=arr[i];
    let lo=0, hi=i-1;
    while (lo<=hi) { // binary search!
      const m=Math.floor((lo+hi)/2);
      if (arr[m]<=key) lo=m+1; else hi=m-1;
    }
    // shift and place
    for (let j=i; j>lo; j--) arr[j]=arr[j-1];
    arr[lo]=key;
  }
  return arr; // O(log i) comparisons
}`,`def ins_binary(arr):
    for i in range(1,len(arr)):
        key=arr[i];lo,hi=0,i-1
        while lo<=hi:
            m=(lo+hi)//2
            if arr[m]<=key: lo=m+1
            else: hi=m-1
        arr[lo+1:i+1]=arr[lo:i]
        arr[lo]=key
    return arr`,`void insBinary(int a[],int n){
    for(int i=1;i<n;i++){
        int key=a[i],lo=0,hi=i-1;
        while(lo<=hi){int m=(lo+hi)/2;if(a[m]<=key)lo=m+1;else hi=m-1;}
        for(int j=i;j>lo;j--)a[j]=a[j-1];
        a[lo]=key;
    }
}`,`void insBinary(int[] a){
    for(int i=1;i<a.length;i++){
        int key=a[i],lo=0,hi=i-1;
        while(lo<=hi){int m=(lo+hi)/2;if(a[m]<=key)lo=m+1;else hi=m-1;}
        for(int j=i;j>lo;j--)a[j]=a[j-1];
        a[lo]=key;
    }
}`),shellSort:g(`function shellSort(arr) {
  let gap = Math.floor(arr.length/2);
  while (gap > 0) {
    for (let i=gap; i<arr.length; i++) {
      const temp = arr[i];
      let j = i;
      while (j>=gap && arr[j-gap]>temp) {
        arr[j]=arr[j-gap]; j-=gap;
      }
      arr[j]=temp;
    }
    gap = Math.floor(gap/2);
  }
  return arr; // O(n log n) typical
}`,`def shell_sort(arr):
    n=len(arr); gap=n//2
    while gap>0:
        for i in range(gap,n):
            temp=arr[i]; j=i
            while j>=gap and arr[j-gap]>temp:
                arr[j]=arr[j-gap]; j-=gap
            arr[j]=temp
        gap//=2
    return arr`,`void shellSort(int a[],int n){
    for(int gap=n/2;gap>0;gap/=2)
        for(int i=gap;i<n;i++){
            int tmp=a[i],j=i;
            while(j>=gap&&a[j-gap]>tmp){a[j]=a[j-gap];j-=gap;}
            a[j]=tmp;
        }
}`,`void shellSort(int[] a){
    for(int gap=a.length/2;gap>0;gap/=2)
        for(int i=gap;i<a.length;i++){
            int tmp=a[i],j=i;
            while(j>=gap&&a[j-gap]>tmp){a[j]=a[j-gap];j-=gap;}
            a[j]=tmp;
        }
}`),mergeTopDown:g(`function mergeSort(arr) {
  if(arr.length<=1) return arr;
  const m=Math.floor(arr.length/2);
  const L=mergeSort(arr.slice(0,m));
  const R=mergeSort(arr.slice(m));
  return merge(L,R);
}
function merge(L,R){
  const res=[];let i=0,j=0;
  while(i<L.length&&j<R.length)
    res.push(L[i]<=R[j]?L[i++]:R[j++]);
  return [...res,...L.slice(i),...R.slice(j)];
}`,`def merge_sort(arr):
    if len(arr)<=1: return arr
    m=len(arr)//2
    L=merge_sort(arr[:m]);R=merge_sort(arr[m:])
    return merge(L,R)
def merge(L,R):
    res,i,j=[],0,0
    while i<len(L) and j<len(R):
        if L[i]<=R[j]: res.append(L[i]);i+=1
        else: res.append(R[j]);j+=1
    return res+L[i:]+R[j:]`,`vector<int> mergeSort(vector<int> a){
    if(a.size()<=1) return a;
    int m=a.size()/2;
    auto L=mergeSort({a.begin(),a.begin()+m});
    auto R=mergeSort({a.begin()+m,a.end()});
    return merge(L,R);
} // O(n log n)`,`int[] mergeSort(int[] arr){
    if(arr.length<=1) return arr;
    int m=arr.length/2;
    int[] L=mergeSort(Arrays.copyOfRange(arr,0,m));
    int[] R=mergeSort(Arrays.copyOfRange(arr,m,arr.length));
    return merge(L,R);
}`),mergeBottomUp:g(`function mergeSort(arr) {
  const n = arr.length;
  for (let size=1; size<n; size*=2)
    for (let l=0; l<n-1; l+=2*size) {
      const m=Math.min(l+size-1,n-1);
      const r=Math.min(l+2*size-1,n-1);
      merge(arr, l, m, r); // in-place
    }
  return arr;
}
// No recursion stack!`,`def merge_sort(arr):
    n=len(arr); size=1
    while size<n:
        for l in range(0,n-1,2*size):
            m=min(l+size-1,n-1)
            r=min(l+2*size-1,n-1)
            merge_inplace(arr,l,m,r)
        size*=2
    return arr
# No recursion!`,`void mergeSort(int a[],int n){
    for(int sz=1;sz<n;sz*=2)
        for(int l=0;l<n-1;l+=2*sz){
            int m=min(l+sz-1,n-1),r=min(l+2*sz-1,n-1);
            merge(a,l,m,r);
        }
}
// No recursion stack!`,`void mergeSort(int[] a){
    int n=a.length;
    for(int sz=1;sz<n;sz*=2)
        for(int l=0;l<n-1;l+=2*sz){
            int m=Math.min(l+sz-1,n-1),r=Math.min(l+2*sz-1,n-1);
            merge(a,l,m,r);
        }
}`),mergeHybrid:g(`const K = 4; // threshold
function mergeSort(arr, l=0, r=arr.length-1) {
  if (r-l <= K) {
    insertionSort(arr, l, r); // fast for small!
    return;
  }
  const m=Math.floor((l+r)/2);
  mergeSort(arr, l, m);
  mergeSort(arr, m+1, r);
  merge(arr, l, m, r);
}
// Like TimSort — best of both!`,`K = 4
def merge_sort(arr,l=0,r=None):
    if r is None: r=len(arr)-1
    if r-l<=K:
        insertion_sort(arr,l,r)
        return
    m=(l+r)//2
    merge_sort(arr,l,m)
    merge_sort(arr,m+1,r)
    merge(arr,l,m,r)
# TimSort concept`,`const int K=4;
void mergeSort(int a[],int l,int r){
    if(r-l<=K){insSort(a,l,r);return;}
    int m=(l+r)/2;
    mergeSort(a,l,m);
    mergeSort(a,m+1,r);
    merge(a,l,m,r);
}
// Hybrid like TimSort`,`final int K=4;
void mergeSort(int[] a,int l,int r){
    if(r-l<=K){insSort(a,l,r);return;}
    int m=(l+r)/2;
    mergeSort(a,l,m);
    mergeSort(a,m+1,r);
    merge(a,l,m,r);
}
// Hybrid like TimSort`),quickLast:g(`function quickSort(arr, lo=0, hi=arr.length-1) {
  if (lo < hi) {
    const p = partition(arr, lo, hi);
    quickSort(arr, lo, p-1);
    quickSort(arr, p+1, hi);
  }
  return arr;
}
function partition(arr, lo, hi) {
  const pivot=arr[hi]; let i=lo-1;
  for(let j=lo;j<hi;j++)
    if(arr[j]<=pivot){i++;[arr[i],arr[j]]=[arr[j],arr[i]];}
  [arr[i+1],arr[hi]]=[arr[hi],arr[i+1]];
  return i+1;
} // O(n²) worst if sorted`,`def quicksort(arr,lo=0,hi=None):
    if hi is None: hi=len(arr)-1
    if lo<hi:
        p=partition(arr,lo,hi)
        quicksort(arr,lo,p-1)
        quicksort(arr,p+1,hi)
def partition(arr,lo,hi):
    pivot=arr[hi]; i=lo-1
    for j in range(lo,hi):
        if arr[j]<=pivot:
            i+=1;arr[i],arr[j]=arr[j],arr[i]
    arr[i+1],arr[hi]=arr[hi],arr[i+1]
    return i+1`,`void quickSort(int a[],int lo,int hi){
    if(lo<hi){
        int p=partition(a,lo,hi);
        quickSort(a,lo,p-1);
        quickSort(a,p+1,hi);
    }
}
// O(n²) worst for sorted`,`void quickSort(int[] a,int lo,int hi){
    if(lo<hi){
        int p=partition(a,lo,hi);
        quickSort(a,lo,p-1);
        quickSort(a,p+1,hi);
    }
}
// O(n²) worst for sorted`),quickRandom:g(`function quickSort(arr, lo=0, hi=arr.length-1) {
  if (lo < hi) {
    // random pivot avoids worst case!
    const ri = lo+Math.floor(Math.random()*(hi-lo+1));
    [arr[ri],arr[hi]]=[arr[hi],arr[ri]];
    const p = partition(arr, lo, hi);
    quickSort(arr, lo, p-1);
    quickSort(arr, p+1, hi);
  }
  return arr;
} // O(n log n) expected`,`import random
def quicksort(arr,lo=0,hi=None):
    if hi is None: hi=len(arr)-1
    if lo<hi:
        ri=random.randint(lo,hi)
        arr[ri],arr[hi]=arr[hi],arr[ri]
        p=partition(arr,lo,hi)
        quicksort(arr,lo,p-1)
        quicksort(arr,p+1,hi)
# O(n log n) expected`,`void quickRand(int a[],int lo,int hi){
    if(lo<hi){
        int ri=lo+rand()%(hi-lo+1);
        swap(a[ri],a[hi]);
        int p=partition(a,lo,hi);
        quickRand(a,lo,p-1);
        quickRand(a,p+1,hi);
    }
}
// O(n log n) expected`,`void quickRand(int[] a,int lo,int hi){
    if(lo<hi){
        int ri=lo+(int)(Math.random()*(hi-lo+1));
        int t=a[ri];a[ri]=a[hi];a[hi]=t;
        int p=partition(a,lo,hi);
        quickRand(a,lo,p-1);
        quickRand(a,p+1,hi);
    }
}`),quick3Way:g(`function quickSort3(arr, lo=0, hi=arr.length-1) {
  if (lo >= hi) return;
  const pivot=arr[lo];
  let lt=lo, gt=hi, i=lo+1;
  while (i <= gt) {
    if (arr[i]<pivot) [arr[lt++],arr[i++]]=[arr[i],arr[lt]];
    else if (arr[i]>pivot) [arr[i],arr[gt--]]=[arr[gt],arr[i]];
    else i++;
  }
  quickSort3(arr,lo,lt-1);
  quickSort3(arr,gt+1,hi);
} // great for duplicates!`,`def qs3(arr,lo=0,hi=None):
    if hi is None: hi=len(arr)-1
    if lo>=hi: return
    pivot=arr[lo];lt,gt,i=lo,hi,lo+1
    while i<=gt:
        if arr[i]<pivot:
            arr[lt],arr[i]=arr[i],arr[lt];lt+=1;i+=1
        elif arr[i]>pivot:
            arr[i],arr[gt]=arr[gt],arr[i];gt-=1
        else: i+=1
    qs3(arr,lo,lt-1);qs3(arr,gt+1,hi)
# Great for duplicates!`,`void qs3(int a[],int lo,int hi){
    if(lo>=hi)return;
    int pv=a[lo],lt=lo,gt=hi,i=lo+1;
    while(i<=gt){
        if(a[i]<pv)swap(a[lt++],a[i++]);
        else if(a[i]>pv)swap(a[i],a[gt--]);
        else i++;
    }
    qs3(a,lo,lt-1);qs3(a,gt+1,hi);
}
// 3-way Dutch flag`,`void qs3(int[] a,int lo,int hi){
    if(lo>=hi)return;
    int pv=a[lo],lt=lo,gt=hi,i=lo+1;
    while(i<=gt){
        if(a[i]<pv){int t=a[lt];a[lt]=a[i];a[i]=t;lt++;i++;}
        else if(a[i]>pv){int t=a[i];a[i]=a[gt];a[gt]=t;gt--;}
        else i++;
    }
    qs3(a,lo,lt-1);qs3(a,gt+1,hi);
}`),heapBasic:g(`function heapSort(arr) {
  const n = arr.length;
  // Build max-heap
  for(let i=Math.floor(n/2)-1;i>=0;i--)
    siftDown(arr,n,i);
  // Extract elements
  for(let i=n-1;i>0;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]];
    siftDown(arr,i,0);
  }
  return arr;
}
function siftDown(arr,n,i){
  let lg=i,l=2*i+1,r=2*i+2;
  if(l<n&&arr[l]>arr[lg])lg=l;
  if(r<n&&arr[r]>arr[lg])lg=r;
  if(lg!==i){[arr[i],arr[lg]]=[arr[lg],arr[i]];siftDown(arr,n,lg);}
}`,`def heap_sort(arr):
    n=len(arr)
    for i in range(n//2-1,-1,-1):
        sift_down(arr,n,i)
    for i in range(n-1,0,-1):
        arr[0],arr[i]=arr[i],arr[0]
        sift_down(arr,i,0)
def sift_down(arr,n,i):
    lg=i;l=2*i+1;r=2*i+2
    if l<n and arr[l]>arr[lg]:lg=l
    if r<n and arr[r]>arr[lg]:lg=r
    if lg!=i:
        arr[i],arr[lg]=arr[lg],arr[i]
        sift_down(arr,n,lg)`,`void heapSort(int a[],int n){
    for(int i=n/2-1;i>=0;i--)siftDown(a,n,i);
    for(int i=n-1;i>0;i--){
        swap(a[0],a[i]);siftDown(a,i,0);
    }
}
void siftDown(int a[],int n,int i){
    int lg=i,l=2*i+1,r=2*i+2;
    if(l<n&&a[l]>a[lg])lg=l;
    if(r<n&&a[r]>a[lg])lg=r;
    if(lg!=i){swap(a[i],a[lg]);siftDown(a,n,lg);}
}`,`void heapSort(int[] a){
    int n=a.length;
    for(int i=n/2-1;i>=0;i--)siftDown(a,n,i);
    for(int i=n-1;i>0;i--){
        int t=a[0];a[0]=a[i];a[i]=t;siftDown(a,i,0);
    }
}`),heapFloyd:g(`// Floyd's O(n) build — more efficient!
function heapSort(arr) {
  const n = arr.length;
  // Floyd: start from last non-leaf
  const start = Math.floor(n/2) - 1;
  for(let i=start; i>=0; i--)
    siftDown(arr,n,i); // O(n) total!
  for(let i=n-1;i>0;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]];
    siftDown(arr,i,0);
  }
  return arr;
}
// Build phase: O(n) not O(n log n)!`,`# Floyd's O(n) heapification
def heap_sort(arr):
    n=len(arr)
    # start from last non-leaf = O(n)
    for i in range(n//2-1,-1,-1):
        sift_down(arr,n,i)
    for i in range(n-1,0,-1):
        arr[0],arr[i]=arr[i],arr[0]
        sift_down(arr,i,0)
# Build = O(n) not O(n log n)!`,`// Floyd's O(n) build phase
void heapSortFloyd(int a[],int n){
    // Last non-leaf = n/2-1
    for(int i=n/2-1;i>=0;i--)
        siftDown(a,n,i); // O(n) total!
    for(int i=n-1;i>0;i--){
        swap(a[0],a[i]);
        siftDown(a,i,0);
    }
}`,`// Floyd's O(n) heapification
void heapSortFloyd(int[] a){
    int n=a.length;
    for(int i=n/2-1;i>=0;i--)
        siftDown(a,n,i); // O(n)
    for(int i=n-1;i>0;i--){
        int t=a[0];a[0]=a[i];a[i]=t;
        siftDown(a,i,0);
    }
}`),heapOpt:g(`// Skip leaf nodes in heapify
function heapSort(arr) {
  const n=arr.length;
  const firstLeaf = Math.floor(n/2);
  // Only heapify non-leaf nodes
  for(let i=firstLeaf-1;i>=0;i--)
    siftDown(arr,n,i);
  for(let i=n-1;i>0;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]];
    siftDown(arr,i,0);
  }
  return arr;
}
// Leaves are already 1-element heaps`,`def heap_sort_opt(arr):
    n=len(arr)
    # Leaves are trivial heaps — skip them!
    first_leaf=n//2
    for i in range(first_leaf-1,-1,-1):
        sift_down(arr,n,i)
    for i in range(n-1,0,-1):
        arr[0],arr[i]=arr[i],arr[0]
        sift_down(arr,i,0)`,`// Skip leaves (trivial heaps)
void heapSortOpt(int a[],int n){
    int fl=n/2; // first leaf
    for(int i=fl-1;i>=0;i--)
        siftDown(a,n,i);
    for(int i=n-1;i>0;i--){
        swap(a[0],a[i]);
        siftDown(a,i,0);
    }
}`,`void heapSortOpt(int[] a){
    int n=a.length,fl=n/2;
    for(int i=fl-1;i>=0;i--)
        siftDown(a,n,i);
    for(int i=n-1;i>0;i--){
        int t=a[0];a[0]=a[i];a[i]=t;
        siftDown(a,i,0);
    }
}`),linBasic:g(`function linearSearch(arr, target) {
  for (let i=0; i<arr.length; i++)
    if (arr[i]===target) return i;
  return -1; // O(n)
}`,`def linear_search(arr,target):
    for i,v in enumerate(arr):
        if v==target: return i
    return -1  # O(n)`,`int linSearch(int a[],int n,int t){
    for(int i=0;i<n;i++)
        if(a[i]==t) return i;
    return -1;
}`,`int linSearch(int[] a,int t){
    for(int i=0;i<a.length;i++)
        if(a[i]==t) return i;
    return -1;
}`),linSentinel:g(`function linearSearchSentinel(arr, target) {
  const n = arr.length;
  const last = arr[n-1];
  arr[n-1] = target; // sentinel!
  let i = 0;
  while (arr[i] !== target) i++;
  arr[n-1] = last; // restore
  if (i<n-1 || last===target) return i;
  return -1;
}
// No bounds check in inner loop!`,`def lin_sentinel(arr, target):
    n=len(arr);last=arr[n-1]
    arr[n-1]=target  # sentinel!
    i=0
    while arr[i]!=target: i+=1
    arr[n-1]=last  # restore
    if i<n-1 or last==target: return i
    return -1
# No i<n check in loop!`,`int linSentinel(int a[],int n,int t){
    int last=a[n-1];
    a[n-1]=t; // sentinel!
    int i=0;
    while(a[i]!=t)i++;
    a[n-1]=last;
    if(i<n-1||last==t)return i;
    return -1;
}`,`int linSentinel(int[] a,int t){
    int n=a.length,last=a[n-1];
    a[n-1]=t;
    int i=0;
    while(a[i]!=t)i++;
    a[n-1]=last;
    return(i<n-1||last==t)?i:-1;
}`),linTranspose:g(`// Move-to-front: found item moves forward
function linearSearch(arr, target) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i]===target) {
      if (i>0) // swap forward
        [arr[i],arr[i-1]]=[arr[i-1],arr[i]];
      return Math.max(0,i-1);
    }
  }
  return -1;
}
// Frequent items rise to top over time`,`def lin_transpose(arr,target):
    for i in range(len(arr)):
        if arr[i]==target:
            if i>0:
                arr[i],arr[i-1]=arr[i-1],arr[i]
            return max(0,i-1)
    return -1
# Frequent items rise to top`,`int linTranspose(int a[],int n,int t){
    for(int i=0;i<n;i++)
        if(a[i]==t){
            if(i>0)swap(a[i],a[i-1]);
            return i>0?i-1:0;
        }
    return -1;
}`,`int linTranspose(int[] a,int t){
    for(int i=0;i<a.length;i++)
        if(a[i]==t){
            if(i>0){int x=a[i];a[i]=a[i-1];a[i-1]=x;}
            return i>0?i-1:0;
        }
    return -1;
}`),binIter:g(`function binarySearch(arr, target) {
  arr.sort((a,b)=>a-b);
  let lo=0, hi=arr.length-1;
  while (lo<=hi) {
    const m=Math.floor((lo+hi)/2);
    if(arr[m]===target) return m;
    else if(arr[m]<target) lo=m+1;
    else hi=m-1;
  }
  return -1; // O(log n)
}`,`def binary_search(arr,target):
    arr.sort()
    lo,hi=0,len(arr)-1
    while lo<=hi:
        m=(lo+hi)//2
        if arr[m]==target: return m
        elif arr[m]<target: lo=m+1
        else: hi=m-1
    return -1`,`int binSearch(int a[],int n,int t){
    sort(a,a+n);
    int lo=0,hi=n-1;
    while(lo<=hi){
        int m=(lo+hi)/2;
        if(a[m]==t)return m;
        else if(a[m]<t)lo=m+1;
        else hi=m-1;
    }return -1;
}`,`int binSearch(int[] a,int t){
    Arrays.sort(a);
    int lo=0,hi=a.length-1;
    while(lo<=hi){
        int m=(lo+hi)/2;
        if(a[m]==t)return m;
        else if(a[m]<t)lo=m+1;
        else hi=m-1;
    }return -1;
}`),binRecur:g(`function binarySearch(arr, target, lo=0, hi=arr.length-1) {
  arr.sort((a,b)=>a-b);
  if (lo>hi) return -1; // base case
  const m = Math.floor((lo+hi)/2);
  if(arr[m]===target) return m;
  if(arr[m]<target) return binarySearch(arr,target,m+1,hi);
  return binarySearch(arr,target,lo,m-1);
}
// O(log n) — recursive call stack`,`def bin_recursive(arr,t,lo=0,hi=None):
    if hi is None:
        arr.sort();hi=len(arr)-1
    if lo>hi: return -1
    m=(lo+hi)//2
    if arr[m]==t: return m
    if arr[m]<t: return bin_recursive(arr,t,m+1,hi)
    return bin_recursive(arr,t,lo,m-1)`,`int binRecur(int a[],int t,int lo,int hi){
    if(lo>hi)return -1;
    int m=(lo+hi)/2;
    if(a[m]==t)return m;
    if(a[m]<t)return binRecur(a,t,m+1,hi);
    return binRecur(a,t,lo,m-1);
}`,`int binRecur(int[] a,int t,int lo,int hi){
    if(lo>hi)return -1;
    int m=(lo+hi)/2;
    if(a[m]==t)return m;
    if(a[m]<t)return binRecur(a,t,m+1,hi);
    return binRecur(a,t,lo,m-1);
}`),binExponential:g(`function exponentialSearch(arr, target) {
  arr.sort((a,b)=>a-b);
  if(arr[0]===target) return 0;
  let i=1;
  while(i<arr.length && arr[i]<=target) i*=2;
  // now binary search in [i/2 .. i]
  let lo=Math.floor(i/2), hi=Math.min(i,arr.length-1);
  while(lo<=hi){
    const m=Math.floor((lo+hi)/2);
    if(arr[m]===target) return m;
    arr[m]<target ? lo=m+1 : hi=m-1;
  }
  return -1;
}
// Great for unbounded arrays!`,`def exponential_search(arr,t):
    arr.sort()
    if arr[0]==t: return 0
    i=1
    while i<len(arr) and arr[i]<=t: i*=2
    lo,hi=i//2,min(i,len(arr)-1)
    while lo<=hi:
        m=(lo+hi)//2
        if arr[m]==t: return m
        if arr[m]<t: lo=m+1
        else: hi=m-1
    return -1`,`int expSearch(int a[],int n,int t){
    if(a[0]==t)return 0;
    int i=1;
    while(i<n&&a[i]<=t)i*=2;
    int lo=i/2,hi=min(i,n-1);
    while(lo<=hi){int m=(lo+hi)/2;if(a[m]==t)return m;if(a[m]<t)lo=m+1;else hi=m-1;}
    return -1;
}`,`int expSearch(int[] a,int t){
    int n=a.length;
    if(a[0]==t)return 0;
    int i=1;
    while(i<n&&a[i]<=t)i*=2;
    int lo=i/2,hi=Math.min(i,n-1);
    while(lo<=hi){int m=(lo+hi)/2;if(a[m]==t)return m;if(a[m]<t)lo=m+1;else hi=m-1;}
    return -1;
}`),jumpBasic:g(`function jumpSearch(arr, target) {
  arr.sort((a,b)=>a-b);
  const n=arr.length, step=Math.floor(Math.sqrt(n));
  let prev=0, curr=step;
  while(curr<n && arr[curr]<target){
    prev=curr; curr+=step;
  }
  for(let i=prev; i<=Math.min(curr,n-1); i++)
    if(arr[i]===target) return i;
  return -1; // O(√n)
}`,`import math
def jump_search(arr,t):
    arr.sort();n=len(arr)
    step=int(math.sqrt(n))
    prev,curr=0,step
    while curr<n and arr[curr]<t:
        prev,curr=curr,curr+step
    for i in range(prev,min(curr,n-1)+1):
        if arr[i]==t: return i
    return -1`,`int jumpSearch(int a[],int n,int t){
    sort(a,a+n);
    int step=sqrt(n),prev=0,curr=step;
    while(curr<n&&a[curr]<t){prev=curr;curr+=step;}
    for(int i=prev;i<=min(curr,n-1);i++)
        if(a[i]==t)return i;
    return -1;
}`,`int jumpSearch(int[] a,int t){
    Arrays.sort(a);
    int n=a.length,step=(int)Math.sqrt(n);
    int prev=0,curr=step;
    while(curr<n&&a[curr]<t){prev=curr;curr+=step;}
    for(int i=prev;i<=Math.min(curr,n-1);i++)
        if(a[i]==t)return i;
    return -1;
}`),fibSearch:g(`function fibonacciSearch(arr, target) {
  arr.sort((a,b)=>a-b);
  const n=arr.length;
  let f2=0,f1=1,f=f1+f2;
  while(f<n){f2=f1;f1=f;f=f1+f2;}
  let offset=-1;
  while(f>1){
    const i=Math.min(offset+f2,n-1);
    if(arr[i]<target){f=f1;f1=f2;f2=f-f1;offset=i;}
    else if(arr[i]>target){f=f2;f1=f1-f2;f2=f-f1;}
    else return i;
  }
  if(f1&&arr[offset+1]===target) return offset+1;
  return -1;
} // Uses Fibonacci numbers as steps`,`def fibonacci_search(arr,t):
    arr.sort();n=len(arr)
    f2,f1,f=0,1,1
    while f<n: f2,f1,f=f1,f,f1+f2
    offset=-1
    while f>1:
        i=min(offset+f2,n-1)
        if arr[i]<t: f,f1,f2=f1,f2,f1-f2;offset=i
        elif arr[i]>t: f,f1,f2=f2,f1-f2,f2-(f1-f2)
        else: return i
    if f1 and arr[offset+1]==t: return offset+1
    return -1`,`// Fibonacci Search
int fibSearch(int a[],int n,int t){
    int f2=0,f1=1,f=f1+f2;
    while(f<n){f2=f1;f1=f;f=f1+f2;}
    int off=-1;
    while(f>1){
        int i=min(off+f2,n-1);
        if(a[i]<t){f=f1;f1=f2;f2=f-f1;off=i;}
        else if(a[i]>t){f=f2;f1-=f2;f2=f-f1;}
        else return i;
    }
    return(f1&&a[off+1]==t)?off+1:-1;
}`,`// Fibonacci Search
int fibSearch(int[] a,int t){
    int n=a.length,f2=0,f1=1,f=1;
    while(f<n){int tmp=f1+f2;f2=f1;f1=tmp;f=f1+f2;}
    int off=-1;
    while(f>1){
        int i=Math.min(off+f2,n-1);
        if(a[i]<t){f=f1;f1=f2;f2=f-f1;off=i;}
        else if(a[i]>t){f=f2;f1-=f2;f2=f-f1;}
        else return i;
    }
    return(f1==1&&a[off+1]==t)?off+1:-1;
}`),interpolation:g(`function interpolationSearch(arr, target) {
  arr.sort((a,b)=>a-b);
  let lo=0, hi=arr.length-1;
  while(lo<=hi && target>=arr[lo] && target<=arr[hi]){
    // Estimate position by value!
    const pos=lo+Math.floor((target-arr[lo])/(arr[hi]-arr[lo])*(hi-lo));
    if(arr[pos]===target) return pos;
    if(arr[pos]<target) lo=pos+1;
    else hi=pos-1;
  }
  return -1;
}
// O(log log n) for uniform data!`,`def interpolation_search(arr,t):
    arr.sort();lo,hi=0,len(arr)-1
    while lo<=hi and t>=arr[lo] and t<=arr[hi]:
        pos=lo+int((t-arr[lo])/(arr[hi]-arr[lo])*(hi-lo))
        if arr[pos]==t: return pos
        if arr[pos]<t: lo=pos+1
        else: hi=pos-1
    return -1
# O(log log n) uniform data`,`int interSearch(int a[],int n,int t){
    int lo=0,hi=n-1;
    while(lo<=hi&&t>=a[lo]&&t<=a[hi]){
        int pos=lo+(t-a[lo])*(hi-lo)/(a[hi]-a[lo]);
        if(a[pos]==t)return pos;
        if(a[pos]<t)lo=pos+1;else hi=pos-1;
    }return -1;
}`,`int interSearch(int[] a,int t){
    int lo=0,hi=a.length-1;
    while(lo<=hi&&t>=a[lo]&&t<=a[hi]){
        int pos=lo+(t-a[lo])*(hi-lo)/(a[hi]-a[lo]);
        if(a[pos]==t)return pos;
        if(a[pos]<t)lo=pos+1;else hi=pos-1;
    }return -1;
}`),tsBrute:g(`function twoSum(nums,target){
  for(let i=0;i<nums.length;i++)
    for(let j=i+1;j<nums.length;j++)
      if(nums[i]+nums[j]===target)
        return [i,j];
  return []; // O(n²)
}`,`def two_sum(nums,target):
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i]+nums[j]==target:
                return [i,j]
    return []`,`vector<int> twoSum(vector<int>& n,int t){
    for(int i=0;i<n.size();i++)
        for(int j=i+1;j<n.size();j++)
            if(n[i]+n[j]==t)return{i,j};
    return{};
}`,`int[] twoSum(int[] n,int t){
    for(int i=0;i<n.length;i++)
        for(int j=i+1;j<n.length;j++)
            if(n[i]+n[j]==t)return new int[]{i,j};
    return new int[]{};
}`),tsTwo:g(`function twoSum(nums,target){
  nums.sort((a,b)=>a-b);
  let l=0,r=nums.length-1;
  while(l<r){
    const s=nums[l]+nums[r];
    if(s===target) return [l,r];
    s<target?l++:r--;
  }
  return [];
}`,`def two_sum(nums,target):
    nums.sort();l,r=0,len(nums)-1
    while l<r:
        s=nums[l]+nums[r]
        if s==target: return [l,r]
        if s<target: l+=1
        else: r-=1
    return []`,`vector<int> twoSum(vector<int> n,int t){
    sort(n.begin(),n.end());
    int l=0,r=n.size()-1;
    while(l<r){int s=n[l]+n[r];if(s==t)return{l,r};if(s<t)l++;else r--;}
    return{};
}`,`int[] twoSum(int[] n,int t){
    Arrays.sort(n);int l=0,r=n.length-1;
    while(l<r){int s=n[l]+n[r];if(s==t)return new int[]{l,r};if(s<t)l++;else r--;}
    return new int[]{};
}`),tsHash:g(`function twoSum(nums,target){
  const map=new Map();
  for(let i=0;i<nums.length;i++){
    const need=target-nums[i];
    if(map.has(need)) return [map.get(need),i];
    map.set(nums[i],i);
  }
  return []; // O(n)
}`,`def two_sum(nums,target):
    seen={}
    for i,v in enumerate(nums):
        if target-v in seen: return [seen[target-v],i]
        seen[v]=i
    return []`,`vector<int> twoSum(vector<int>& n,int t){
    unordered_map<int,int> m;
    for(int i=0;i<n.size();i++){int need=t-n[i];if(m.count(need))return{m[need],i};m[n[i]]=i;}
    return{};
}`,`int[] twoSum(int[] n,int t){
    Map<Integer,Integer> m=new HashMap<>();
    for(int i=0;i<n.length;i++){int nd=t-n[i];if(m.containsKey(nd))return new int[]{m.get(nd),i};m.put(n[i],i);}
    return new int[]{};
}`),fibRec:g(`function fib(n){
  if(n<=1) return n;
  return fib(n-1)+fib(n-2);
}
// Time: O(2ⁿ) — exponential!
// fib(40) ≈ 2 billion calls`,`def fib(n):
    if n<=1: return n
    return fib(n-1)+fib(n-2)
# Time: O(2^n) — exponential!`,`int fib(int n){
    if(n<=1)return n;
    return fib(n-1)+fib(n-2);
}
// O(2^n) — exponential!`,`int fib(int n){
    if(n<=1)return n;
    return fib(n-1)+fib(n-2);
}
// O(2^n) — exponential!`),fibMemo:g(`function fib(n,m={}){
  if(n in m) return m[n];
  if(n<=1) return n;
  m[n]=fib(n-1,m)+fib(n-2,m);
  return m[n];
}
// Time: O(n), Space: O(n)`,`from functools import lru_cache
@lru_cache(maxsize=None)
def fib(n):
    if n<=1: return n
    return fib(n-1)+fib(n-2)
# O(n) time+space`,`int fib(int n,unordered_map<int,int>& m){
    if(m.count(n))return m[n];
    if(n<=1)return n;
    return m[n]=fib(n-1,m)+fib(n-2,m);
}
// O(n)`,`Map<Integer,Integer> m=new HashMap<>();
int fib(int n){
    if(m.containsKey(n))return m.get(n);
    if(n<=1)return n;
    m.put(n,fib(n-1)+fib(n-2));
    return m.get(n);
}`),fibDP:g(`function fib(n){
  if(n<=1) return n;
  let prev=0,curr=1;
  for(let i=2;i<=n;i++)
    [prev,curr]=[curr,prev+curr];
  return curr;
}
// O(n) time, O(1) space!`,`def fib(n):
    if n<=1: return n
    prev,curr=0,1
    for _ in range(2,n+1):
        prev,curr=curr,prev+curr
    return curr
# O(1) space!`,`int fib(int n){
    if(n<=1)return n;
    int p=0,c=1;
    for(int i=2;i<=n;i++){int t=p+c;p=c;c=t;}
    return c;
}
// O(1) space!`,`int fib(int n){
    if(n<=1)return n;
    int p=0,c=1;
    for(int i=2;i<=n;i++){int t=p+c;p=c;c=t;}
    return c;
}
// O(1) space!`)};function we(e){let t=e,n=t.length,r=[],i=-1/0,a=0,o=0;r.push({a:[...t],window:[],maxWindow:[],curSum:0,maxSum:-1/0,msg:`Check ALL subarrays O(n³)`,ln:0});for(let e=0;e<n;e++)for(let s=e;s<n;s++){let n=0,c=[];for(let r=e;r<=s;r++)n+=t[r],c.push(r);r.push({a:[...t],window:c,maxWindow:[...Array.from({length:o-a+1},(e,t)=>a+t)],curSum:n,maxSum:i,msg:`Sum a[${e}..${s}]=${n}`,ln:4}),n>i&&(i=n,a=e,o=s,r.push({a:[...t],window:c,maxWindow:[...c],curSum:n,maxSum:i,msg:`New max! sum=${n} at [${e}..${s}]`,ln:5}))}return r.push({a:[...t],window:[],maxWindow:Array.from({length:o-a+1},(e,t)=>a+t),curSum:0,maxSum:i,msg:`✓ Max subarray sum = ${i}`,ln:7}),r}function Te(e){let t=e,n=t.length,r=[],i=-1/0,a=0,o=0;r.push({a:[...t],window:[],maxWindow:[],curSum:0,maxSum:-1/0,msg:`Prefix sums: fix start, extend end O(n²)`,ln:0});for(let e=0;e<n;e++){let s=0;r.push({a:[...t],window:[e],maxWindow:[...Array.from({length:o-a+1},(e,t)=>a+t)],curSum:0,maxSum:i,msg:`Fix start at i=${e}`,ln:2});for(let c=e;c<n;c++){s+=t[c];let n=Array.from({length:c-e+1},(t,n)=>e+n);r.push({a:[...t],window:n,maxWindow:[...Array.from({length:o-a+1},(e,t)=>a+t)],curSum:s,maxSum:i,msg:`Extend to j=${c}: sum=${s}`,ln:4}),s>i&&(i=s,a=e,o=c,r.push({a:[...t],window:n,maxWindow:[...n],curSum:s,maxSum:i,msg:`New max! sum=${s} at [${e}..${c}]`,ln:5}))}}return r.push({a:[...t],window:[],maxWindow:Array.from({length:o-a+1},(e,t)=>a+t),curSum:0,maxSum:i,msg:`✓ Max subarray sum = ${i}`,ln:7}),r}function Ee(e){let t=e,n=t.length,r=[],i=t[0],a=t[0],o=0,s=0,c=0;r.push({a:[...t],window:[0],maxWindow:[0],curSum:t[0],maxSum:t[0],msg:`Init: curSum=maxSum=a[0]=${t[0]}`,ln:0});for(let e=1;e<n;e++)r.push({a:[...t],window:[e],maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`Extend or restart? a[${e}]=${t[e]}, curSum=${i}`,ln:3}),t[e]>i+t[e]?(i=t[e],c=e,r.push({a:[...t],window:[e],maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`Restart at i=${e}: curSum=${i}`,ln:4})):(i+=t[e],r.push({a:[...t],window:Array.from({length:e-c+1},(e,t)=>c+t),maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`Extend: curSum=${i}`,ln:5})),i>a&&(a=i,o=c,s=e,r.push({a:[...t],window:Array.from({length:s-o+1},(e,t)=>o+t),maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`New max! sum=${a} at [${o}..${s}]`,ln:6}));return r.push({a:[...t],window:[],maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`✓ Kadane's: max sum = ${a}`,ln:8}),r}function De(e){let t=0,n=[{table:null,active:-1,calls:0,result:null,msg:`climbStairs(${e}) — 1 or 2 steps each time`,ln:0}];function r(e){if(t++,n.push({table:null,active:e,calls:t,result:null,msg:`climb(${e}) called — total calls:${t}`,ln:1}),e<=1)return n.push({table:null,active:e,calls:t,result:e,msg:`Base: climb(${e})=${e}`,ln:2}),e;let i=r(e-1),a=r(e-2),o=i+a;return n.push({table:null,active:e,calls:t,result:o,msg:`climb(${e})=climb(${e-1})+climb(${e-2})=${i}+${a}=${o}`,ln:3}),o}let i=r(e);return n.push({table:null,active:-1,calls:t,result:i,msg:`✓ ${i} ways to climb ${e} stairs — ${t} calls!`,ln:4}),n}function Oe(e){let t={},n=[{table:null,active:-1,calls:0,result:null,memo:{},msg:`Memoized climbing stairs`,ln:0}];function r(e){if(e in t)return n.push({table:null,active:e,calls:0,result:t[e],memo:{...t},msg:`Cache hit! memo[${e}]=${t[e]}`,ln:1}),t[e];if(n.push({table:null,active:e,calls:0,result:null,memo:{...t},msg:`Compute climb(${e})`,ln:3}),e<=1)return t[e]=e,n.push({table:null,active:e,calls:0,result:e,memo:{...t},msg:`Base: climb(${e})=${e}`,ln:4}),e;let i=r(e-1)+r(e-2);return t[e]=i,n.push({table:null,active:e,calls:0,result:i,memo:{...t},msg:`climb(${e})=${i} cached`,ln:5}),i}let i=r(e);return n.push({table:null,active:-1,calls:0,result:i,memo:{...t},msg:`✓ ${i} ways to climb ${e} stairs`,ln:7}),n}function ke(e){let t=Array(e+1).fill(0);t[0]=1,e>=1&&(t[1]=1);let n=[{table:[...t],active:-1,calls:0,result:null,msg:`DP: dp[0]=1 (empty), dp[1]=1 (one step)`,ln:2}];for(let r=2;r<=e;r++)t[r]=t[r-1]+t[r-2],n.push({table:[...t],active:r,calls:0,result:null,msg:`dp[${r}]=dp[${r-1}]+dp[${r-2}]=${t[r-1]}+${t[r-2]}=${t[r]} ways`,ln:4});return n.push({table:[...t],active:-1,calls:0,result:t[e],msg:`✓ ${t[e]} ways to climb ${e} stairs — O(1) space possible`,ln:6}),n}var Ae=[1,2,5],je=11;function Me(e){let t=Ae,n=e||je,r=0,i=[{dpArr:null,active:-1,calls:0,result:null,msg:`coinChange([${t}], ${n}) — min coins`,ln:0}];function a(e){if(r++,i.push({dpArr:null,active:e,calls:r,result:null,msg:`coin(${e}) called — total calls:${r}`,ln:2}),e<0)return i.push({dpArr:null,active:e,calls:r,result:-1,msg:`rem<0: invalid`,ln:3}),1/0;if(e===0)return i.push({dpArr:null,active:e,calls:r,result:0,msg:`rem=0: need 0 coins`,ln:4}),0;let n=1/0;for(let r of t){let t=a(e-r);t<n&&(n=t)}let o=n===1/0?-1:n+1;return i.push({dpArr:null,active:e,calls:r,result:o,msg:`coin(${e})=${o===-1?`impossible`:o} coins`,ln:5}),n===1/0?1/0:n+1}let o=a(n),s=o===1/0?-1:o;return i.push({dpArr:null,active:-1,calls:r,result:s,msg:`✓ Min coins for ${n}: ${s} — ${r} recursive calls!`,ln:7}),i}function Ne(e){let t=Ae,n=e||je,r=new Map,i=[{dpArr:null,active:-1,calls:0,result:null,msg:`Memoized coin change`,ln:0}];function a(e){if(r.has(e))return i.push({dpArr:null,active:e,calls:0,result:r.get(e),msg:`Cache! memo[${e}]=${r.get(e)}`,ln:1}),r.get(e);if(e<0)return 1/0;if(e===0)return i.push({dpArr:null,active:e,calls:0,result:0,msg:`Base: 0 coins for rem=0`,ln:3}),0;i.push({dpArr:null,active:e,calls:0,result:null,msg:`Compute coin(${e})`,ln:4});let n=1/0;for(let r of t){let t=a(e-r);t<n&&(n=t)}let o=n===1/0?1/0:n+1;return r.set(e,o),i.push({dpArr:null,active:e,calls:0,result:o===1/0?-1:o,msg:`coin(${e})=${o===1/0?`impossible`:o} — cached`,ln:5}),o}let o=a(n),s=o===1/0?-1:o;return i.push({dpArr:null,active:-1,calls:0,result:s,msg:`✓ Min coins for ${n}: ${s} — only ${r.size} unique states`,ln:7}),i}function Pe(e){let t=Ae,n=e||je,r=Array(n+1).fill(1/0);r[0]=0;let i=[{dpArr:[...r].map(e=>e===1/0?`∞`:e),active:-1,calls:0,result:null,msg:`DP array: dp[0]=0, dp[1..${n}]=∞`,ln:2}];for(let e=1;e<=n;e++){i.push({dpArr:[...r].map(e=>e===1/0?`∞`:e),active:e,calls:0,result:null,msg:`Compute dp[${e}]: try coins [${t}]`,ln:3});for(let n of t)e>=n&&r[e-n]+1<r[e]&&(r[e]=r[e-n]+1,i.push({dpArr:[...r].map(e=>e===1/0?`∞`:e),active:e,calls:0,result:null,msg:`dp[${e}]=dp[${e-n}]+1=${r[e]} (coin=${n})`,ln:4}))}let a=r[n]===1/0?-1:r[n];return i.push({dpArr:[...r].map(e=>e===1/0?`∞`:e),active:-1,calls:0,result:a,msg:`✓ Min coins for ${n}: ${a}`,ln:6}),i}var A=[{id:0,label:`A`,x:80,y:130},{id:1,label:`B`,x:220,y:50},{id:2,label:`C`,x:220,y:210},{id:3,label:`D`,x:360,y:50},{id:4,label:`E`,x:360,y:210},{id:5,label:`F`,x:500,y:130}],j=[{f:0,t:1,w:4},{f:0,t:2,w:2},{f:1,t:3,w:5},{f:1,t:2,w:1},{f:2,t:4,w:8},{f:2,t:3,w:3},{f:3,t:5,w:2},{f:4,t:5,w:4}],M=A.map((e,t)=>j.filter(e=>e.f===t).map(e=>({to:e.t,w:e.w})));function N(e,t,n,r,i,a,o){return{nodes:A,edges:j,visited:[...e],current:t,queue:[...n],distances:{...r},path:[...i],msg:a,ln:o}}function P(){let e=new Set,t=[],n=[];for(n.push(N(e,-1,t,{},[],`BFS from A — explore level by level`,0)),t.push(0),e.add(0),n.push(N(e,-1,t,{},[],`Start: enqueue A`,1));t.length;){let r=t.shift();n.push(N(e,r,t,{},[],`Visit ${A[r].label} — dequeue and process`,3));for(let{to:i}of M[r])e.has(i)||(e.add(i),t.push(i),n.push(N(e,r,[...t],{},[],`Discover ${A[i].label} from ${A[r].label} → enqueue`,4)));n.push(N(e,-1,t,{},[],`${A[r].label} fully processed, queue:[${t.map(e=>A[e].label)}]`,5))}return n.push(N(e,-1,[],{},[...e],`✓ BFS complete! Visited: ${[...e].map(e=>A[e].label).join(`→`)}`,7)),n}function Fe(){let e=new Set,t=[],n={},r=[];for(r.push(N(e,-1,t,{},[],`BFS shortest path: A → ${A[5].label}`,0)),t.push(0),e.add(0),n[0]=-1;t.length;){let i=t.shift();if(r.push(N(e,i,t,{},[],`Process ${A[i].label}`,3)),i===5){let t=[],i=5;for(;i!==-1;)t.unshift(i),i=n[i];return r.push(N(e,-1,[],{},t,`✓ Shortest path (hops): ${t.map(e=>A[e].label).join(` → `)}`,8)),r}for(let{to:a}of M[i])e.has(a)||(e.add(a),t.push(a),n[a]=i,r.push(N(e,i,[...t],{},[],`Found ${A[a].label} via ${A[i].label}`,4)))}return r}function Ie(){let e=new Set,t=[],n=0,r=[0];for(e.add(0),t.push(N(e,-1,r,{},[],`Level-order BFS: process entire level at once`,0));r.length;){t.push(N(e,-1,r,{},[],`Level ${n}: [${r.map(e=>A[e].label)}]`,2));let i=[];for(let a of r){t.push(N(e,a,[...i],{},[],`Process ${A[a].label} at level ${n}`,3));for(let{to:r}of M[a])e.has(r)||(e.add(r),i.push(r),t.push(N(e,a,[...i],{},[],`${A[r].label} → level ${n+1}`,4)))}n++,r=i}return t.push(N(e,-1,[],{},[...e],`✓ ${n} levels, all nodes visited`,6)),t}function Le(){let e=new Set,t=[],n=[];n.push(N(e,-1,[],{},[],`DFS Recursive from A — go deep first`,0));function r(i){e.add(i),t.push(i),n.push(N(e,i,[],{},t,`Visit ${A[i].label} — recurse deeper`,2));for(let{to:a}of M[i])e.has(a)?n.push(N(e,i,[],{},t,`${A[a].label} already visited — skip`,4)):(n.push(N(e,i,[a],{},t,`${A[a].label} unvisited → recurse`,3)),r(a));n.push(N(e,-1,[],{},t,`Backtrack from ${A[i].label}`,5))}return r(0),n.push(N(e,-1,[],{},t,`✓ DFS order: ${t.map(e=>A[e].label).join(` → `)}`,7)),n}function Re(){let e=new Set,t=[0],n=[],r=[];for(r.push(N(e,-1,t,{},[],`DFS Iterative: uses explicit stack`,0));t.length;){let i=t.pop();if(e.has(i)){r.push(N(e,-1,t,{},n,`${A[i].label} already visited, skip`,2));continue}e.add(i),n.push(i),r.push(N(e,i,t,{},n,`Pop & visit ${A[i].label}`,3));for(let{to:a}of[...M[i]].reverse())e.has(a)||(t.push(a),r.push(N(e,i,[...t],{},n,`Push ${A[a].label} to stack`,4)))}return r.push(N(e,-1,[],{},n,`✓ DFS order: ${n.map(e=>A[e].label).join(` → `)}`,6)),r}function ze(){let e=new Set,t=new Set,n=[],r=[],i=!1;r.push(N(e,-1,[],{},[],`DFS Cycle Detection: track recursion stack`,0));function a(o){if(!i){e.add(o),t.add(o),n.push(o),r.push(N(e,o,[...t],{},n,`Visit ${A[o].label} — add to stack`,2));for(let{to:s}of M[o])if(!e.has(s))a(s);else if(t.has(s)){i=!0,r.push(N(e,o,[...t],{},n,`⚠ Back edge ${A[o].label}→${A[s].label}: CYCLE DETECTED!`,5));return}t.delete(o),r.push(N(e,-1,[...t],{},n,`Remove ${A[o].label} from recursion stack`,6))}}for(let t=0;t<A.length;t++)e.has(t)||a(t);return r.push(N(e,-1,[],{},n,i?`⚠ Graph has a cycle!`:`✓ No cycle found — DAG`,8)),r}function Be(){let e=1/0,t=A.length,n=Array(t).fill(e);n[0]=0;let r=new Set,i=[],a=Array(t).fill(-1);i.push(N(r,-1,[],{...n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{})},[],`Dijkstra: dist[A]=0, all others=∞`,0));for(let o=0;o<t;o++){let o=-1;for(let e=0;e<t;e++)!r.has(e)&&(o===-1||n[e]<n[o])&&(o=e);if(o===-1||n[o]===e)break;r.add(o);let s=n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{});i.push(N(r,o,[],s,[],`Pick unvisited node with min dist: ${A[o].label} (dist=${n[o]})`,3));for(let{to:t,w:s}of M[o])if(n[o]+s<n[t]){n[t]=n[o]+s,a[t]=o;let c=n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{});i.push(N(r,o,[],c,[],`Relax: dist[${A[t].label}]=dist[${A[o].label}]+${s}=${n[t]}`,4))}}let o=[],s=5;for(;s!==-1;)o.unshift(s),s=a[s];let c=n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{});return i.push(N(r,-1,[],c,o,`✓ Shortest A→F: ${o.map(e=>A[e].label).join(`→`)} = ${n[5]}`,7)),i}function Ve(){let e=1/0,t=A.length,n=Array(t).fill(e);n[0]=0;let r=new Set,i=[[0,0]],a=[],o=Array(t).fill(-1);for(a.push(N(r,-1,i.map(e=>e[1]),{...n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{})},[],`Dijkstra + Priority Queue (min-heap)`,0));i.length;){i.sort((e,t)=>e[0]-t[0]);let[t,s]=i.shift();if(r.has(s)){a.push(N(r,-1,i.map(e=>e[1]),n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`${A[s].label} already settled, skip`,2));continue}r.add(s),a.push(N(r,s,i.map(e=>e[1]),n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Settle ${A[s].label} with dist=${t}`,3));for(let{to:t,w:c}of M[s])!r.has(t)&&n[s]+c<n[t]&&(n[t]=n[s]+c,o[t]=s,i.push([n[t],t]),a.push(N(r,s,i.map(e=>e[1]),n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Push (${n[t]},${A[t].label}) to PQ`,4)))}let s=[],c=5;for(;c!==-1;)s.unshift(c),c=o[c];return a.push(N(r,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),s,`✓ A→F optimal: ${s.map(e=>A[e].label).join(`→`)} = ${n[5]}`,7)),a}function He(){let e=1/0,t=A.length,n=Array(t).fill(e);n[0]=0;let r=Array(t).fill(-1),i=[N(new Set,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Bellman-Ford: relax ALL edges n-1 times`,0)];for(let a=1;a<t;a++){i.push(N(new Set,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Pass ${a}/${t-1}: relax all ${j.length} edges`,2));let o=!1;for(let{f:t,t:a,w:s}of j)n[t]!==e&&n[t]+s<n[a]&&(n[a]=n[t]+s,r[a]=t,o=!0,i.push(N(new Set([t,a]),t,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Relax ${A[t].label}→${A[a].label}: dist[${A[a].label}]=${n[a]}`,3)));if(!o){i.push(N(new Set,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`No updates in pass ${a} — early termination!`,5));break}}let a=[],o=5;for(;o!==-1;)a.unshift(o),o=r[o];let s=new Set(Array.from({length:t},(e,t)=>t));return i.push(N(s,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),a,`✓ Bellman-Ford: A→F = ${a.map(e=>A[e].label).join(`→`)} cost=${n[5]}. Works with negative edges!`,7)),i}var Ue={maxSubBrute:g(`function maxSubarray(arr) {
  let maxSum=-Infinity, n=arr.length;
  for(let i=0;i<n;i++)
    for(let j=i;j<n;j++){
      let sum=0;
      for(let k=i;k<=j;k++) sum+=arr[k]; // O(n³)
      maxSum=Math.max(maxSum,sum);
    }
  return maxSum;
}`,`def max_subarray(arr):
    maxSum=float('-inf')
    n=len(arr)
    for i in range(n):
        for j in range(i,n):
            s=sum(arr[i:j+1])  # O(n³)
            maxSum=max(maxSum,s)
    return maxSum`,`int maxSub(int a[],int n){
    int mx=INT_MIN;
    for(int i=0;i<n;i++)
        for(int j=i;j<n;j++){
            int s=0;
            for(int k=i;k<=j;k++)s+=a[k];
            mx=max(mx,s);
        }
    return mx; // O(n³)
}`,`int maxSub(int[] a){
    int mx=Integer.MIN_VALUE,n=a.length;
    for(int i=0;i<n;i++)
        for(int j=i;j<n;j++){
            int s=0;
            for(int k=i;k<=j;k++)s+=a[k];
            mx=Math.max(mx,s);
        }
    return mx;
}`),maxSubBetter:g(`function maxSubarray(arr) {
  let maxSum=-Infinity, n=arr.length;
  for(let i=0;i<n;i++){
    let sum=0;
    for(let j=i;j<n;j++){  // O(n²)
      sum+=arr[j];
      maxSum=Math.max(maxSum,sum);
    }
  }
  return maxSum;
}`,`def max_subarray(arr):
    maxSum=float('-inf')
    for i in range(len(arr)):
        s=0
        for j in range(i,len(arr)):  # O(n²)
            s+=arr[j]
            maxSum=max(maxSum,s)
    return maxSum`,`int maxSub(int a[],int n){
    int mx=INT_MIN;
    for(int i=0;i<n;i++){
        int s=0;
        for(int j=i;j<n;j++){  // O(n²)
            s+=a[j];
            mx=max(mx,s);
        }
    }
    return mx;
}`,`int maxSub(int[] a){
    int mx=Integer.MIN_VALUE,n=a.length;
    for(int i=0;i<n;i++){
        int s=0;
        for(int j=i;j<n;j++){
            s+=a[j];
            mx=Math.max(mx,s);
        }
    }
    return mx;
}`),kadane:g(`function maxSubarray(arr) {
  let curSum=arr[0], maxSum=arr[0];
  for(let i=1;i<arr.length;i++){
    curSum = Math.max(arr[i], curSum+arr[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}
// Kadane's O(n) — single pass!`,`def max_subarray(arr):
    cur=mx=arr[0]
    for x in arr[1:]:
        cur=max(x, cur+x)  # extend or restart
        mx=max(mx, cur)
    return mx
# Kadane's O(n)!`,`int kadane(int a[],int n){
    int cur=a[0],mx=a[0];
    for(int i=1;i<n;i++){
        cur=max(a[i],cur+a[i]);
        mx=max(mx,cur);
    }
    return mx; // O(n)!
}`,`int kadane(int[] a){
    int cur=a[0],mx=a[0];
    for(int i=1;i<a.length;i++){
        cur=Math.max(a[i],cur+a[i]);
        mx=Math.max(mx,cur);
    }
    return mx;
}`),climbRec:g(`function climbStairs(n) {
  if (n<=1) return n;
  return climbStairs(n-1) + climbStairs(n-2);
}
// Time: O(2^n) — same as naive fib!`,`def climb_stairs(n):
    if n<=1: return n
    return climb_stairs(n-1)+climb_stairs(n-2)
# O(2^n) — exponential`,`int climb(int n){
    if(n<=1)return n;
    return climb(n-1)+climb(n-2);
}
// O(2^n)`,`int climb(int n){
    if(n<=1)return n;
    return climb(n-1)+climb(n-2);
}
// O(2^n)`),climbMemo:g(`function climbStairs(n, memo={}) {
  if (n in memo) return memo[n];
  if (n<=1) return n;
  memo[n]=climbStairs(n-1,memo)+climbStairs(n-2,memo);
  return memo[n];
}
// O(n) time+space`,`from functools import lru_cache
@lru_cache(maxsize=None)
def climb(n):
    if n<=1: return n
    return climb(n-1)+climb(n-2)
# O(n)`,`int climb(int n,unordered_map<int,int>& m){
    if(m.count(n))return m[n];
    if(n<=1)return n;
    return m[n]=climb(n-1,m)+climb(n-2,m);
}
// O(n)`,`Map<Integer,Integer> m=new HashMap<>();
int climb(int n){
    if(m.containsKey(n))return m.get(n);
    if(n<=1)return n;
    m.put(n,climb(n-1)+climb(n-2));
    return m.get(n);
}`),climbDP:g(`function climbStairs(n) {
  const dp = Array(n+1);
  dp[0]=1; dp[1]=1;
  for(let i=2;i<=n;i++)
    dp[i]=dp[i-1]+dp[i-2];
  return dp[n];
}
// Or O(1) space: just track prev 2`,`def climb_stairs(n):
    dp=[0]*(n+1)
    dp[0]=dp[1]=1
    for i in range(2,n+1):
        dp[i]=dp[i-1]+dp[i-2]
    return dp[n]
# O(n) or O(1) space`,`int climb(int n){
    if(n<=1)return 1;
    int a=1,b=1;
    for(int i=2;i<=n;i++){int c=a+b;a=b;b=c;}
    return b;
}
// O(1) space!`,`int climb(int n){
    if(n<=1)return 1;
    int a=1,b=1;
    for(int i=2;i<=n;i++){int c=a+b;a=b;b=c;}
    return b;
}
// O(1) space!`),coinRec:g(`function coinChange(coins, amount) {
  function dp(rem) {
    if (rem<0) return Infinity;
    if (rem===0) return 0;
    let min=Infinity;
    for(const c of coins)
      min=Math.min(min, dp(rem-c)+1);
    return min;
  }
  const r=dp(amount);
  return r===Infinity?-1:r;
}
// O(S^n) — exponential!`,`def coin_change(coins,amount):
    def dp(rem):
        if rem<0: return float('inf')
        if rem==0: return 0
        return min(dp(rem-c)+1 for c in coins)
    r=dp(amount)
    return -1 if r==float('inf') else r
# Exponential`,`int coinRec(vector<int>& c,int rem){
    if(rem<0)return INT_MAX;
    if(rem==0)return 0;
    int mn=INT_MAX;
    for(int ci:c){
        int r=coinRec(c,rem-ci);
        if(r!=INT_MAX)mn=min(mn,r+1);
    }
    return mn;
}`,`int coinRec(int[] c,int rem){
    if(rem<0)return Integer.MAX_VALUE;
    if(rem==0)return 0;
    int mn=Integer.MAX_VALUE;
    for(int ci:c){
        int r=coinRec(c,rem-ci);
        if(r!=Integer.MAX_VALUE)mn=Math.min(mn,r+1);
    }
    return mn;
}`),coinMemo:g(`function coinChange(coins, amount) {
  const memo=new Map();
  function dp(rem){
    if(rem<0) return Infinity;
    if(rem===0) return 0;
    if(memo.has(rem)) return memo.get(rem);
    let min=Infinity;
    for(const c of coins)
      min=Math.min(min, dp(rem-c)+1);
    memo.set(rem,min);
    return min;
  }
  const r=dp(amount);
  return r===Infinity?-1:r;
}`,`def coin_change(coins,amount):
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def dp(rem):
        if rem<0: return float('inf')
        if rem==0: return 0
        return min(dp(rem-c)+1 for c in coins)
    r=dp(amount)
    return -1 if r==float('inf') else r`,`unordered_map<int,int> m;
int coin(vector<int>& c,int rem){
    if(rem<0)return INT_MAX;
    if(rem==0)return 0;
    if(m.count(rem))return m[rem];
    int mn=INT_MAX;
    for(int ci:c){int r=coin(c,rem-ci);if(r!=INT_MAX)mn=min(mn,r+1);}
    return m[rem]=mn;
}`,`Map<Integer,Integer> memo=new HashMap<>();
int coin(int[] c,int rem){
    if(rem<0)return Integer.MAX_VALUE;
    if(rem==0)return 0;
    if(memo.containsKey(rem))return memo.get(rem);
    int mn=Integer.MAX_VALUE;
    for(int ci:c){int r=coin(c,rem-ci);if(r!=Integer.MAX_VALUE)mn=Math.min(mn,r+1);}
    memo.put(rem,mn);return mn;
}`),coinDP:g(`function coinChange(coins, amount) {
  const dp=Array(amount+1).fill(Infinity);
  dp[0]=0;
  for(let i=1;i<=amount;i++)
    for(const c of coins)
      if(i>=c && dp[i-c]+1<dp[i])
        dp[i]=dp[i-c]+1;
  return dp[amount]===Infinity?-1:dp[amount];
}
// O(amount×coins) — optimal`,`def coin_change(coins,amount):
    dp=[float('inf')]*(amount+1)
    dp[0]=0
    for i in range(1,amount+1):
        for c in coins:
            if i>=c and dp[i-c]+1<dp[i]:
                dp[i]=dp[i-c]+1
    return -1 if dp[amount]==float('inf') else dp[amount]`,`int coinDP(vector<int>& c,int amt){
    vector<int> dp(amt+1,INT_MAX);
    dp[0]=0;
    for(int i=1;i<=amt;i++)
        for(int ci:c)
            if(i>=ci&&dp[i-ci]!=INT_MAX)
                dp[i]=min(dp[i],dp[i-ci]+1);
    return dp[amt]==INT_MAX?-1:dp[amt];
}`,`int coinDP(int[] c,int amt){
    int[] dp=new int[amt+1];
    Arrays.fill(dp,Integer.MAX_VALUE);
    dp[0]=0;
    for(int i=1;i<=amt;i++)
        for(int ci:c)
            if(i>=ci&&dp[i-ci]!=Integer.MAX_VALUE)
                dp[i]=Math.min(dp[i],dp[i-ci]+1);
    return dp[amt]==Integer.MAX_VALUE?-1:dp[amt];
}`)},We={bfsBasic:g(`function bfs(graph, start) {
  const visited=new Set(), queue=[start];
  visited.add(start);
  const order=[];
  while(queue.length){
    const u=queue.shift();
    order.push(u);
    for(const v of graph[u])
      if(!visited.has(v)){
        visited.add(v);
        queue.push(v);
      }
  }
  return order; // O(V+E)
}`,`from collections import deque
def bfs(graph,start):
    visited={start};queue=deque([start])
    order=[]
    while queue:
        u=queue.popleft();order.append(u)
        for v in graph[u]:
            if v not in visited:
                visited.add(v);queue.append(v)
    return order  # O(V+E)`,`void bfs(vector<vector<int>>& g,int s){
    vector<bool> vis(g.size(),false);
    queue<int> q;q.push(s);vis[s]=true;
    while(!q.empty()){
        int u=q.front();q.pop();
        for(int v:g[u])
            if(!vis[v]){vis[v]=true;q.push(v);}
    }
} // O(V+E)`,`void bfs(List<List<Integer>> g,int s){
    boolean[] vis=new boolean[g.size()];
    Queue<Integer> q=new LinkedList<>();
    q.add(s);vis[s]=true;
    while(!q.isEmpty()){
        int u=q.poll();
        for(int v:g.get(u))
            if(!vis[v]){vis[v]=true;q.add(v);}
    }
}`),bfsPath:g(`function bfsShortestPath(graph, start, end) {
  const prev={}, visited=new Set([start]);
  const queue=[start];
  prev[start]=-1;
  while(queue.length){
    const u=queue.shift();
    if(u===end) break;
    for(const v of graph[u])
      if(!visited.has(v)){
        visited.add(v); prev[v]=u;
        queue.push(v);
      }
  }
  // reconstruct path
  const path=[];let cur=end;
  while(cur!==-1){path.unshift(cur);cur=prev[cur];}
  return path; // O(V+E)
}`,`def bfs_path(graph,start,end):
    from collections import deque
    prev={start:None};visited={start}
    queue=deque([start])
    while queue:
        u=queue.popleft()
        if u==end: break
        for v in graph[u]:
            if v not in visited:
                visited.add(v);prev[v]=u
                queue.append(v)
    path=[];cur=end
    while cur: path.append(cur);cur=prev[cur]
    return path[::-1]`,`// BFS Shortest Path (unweighted)
vector<int> bfsPath(vector<vector<int>>& g,int s,int t){
    vector<int> prev(g.size(),-1);
    vector<bool> vis(g.size(),false);
    queue<int> q;q.push(s);vis[s]=true;
    while(!q.empty()){
        int u=q.front();q.pop();
        if(u==t)break;
        for(int v:g[u]) if(!vis[v]){vis[v]=true;prev[v]=u;q.push(v);}
    }
    vector<int> path;for(int v=t;v!=-1;v=prev[v])path.push_back(v);
    reverse(path.begin(),path.end());return path;
}`,`// BFS Shortest Path
List<Integer> bfsPath(List<List<Integer>> g,int s,int t){
    int[] prev=new int[g.size()];Arrays.fill(prev,-1);
    boolean[] vis=new boolean[g.size()];
    Queue<Integer> q=new LinkedList<>();
    q.add(s);vis[s]=true;
    while(!q.isEmpty()){
        int u=q.poll();if(u==t)break;
        for(int v:g.get(u)) if(!vis[v]){vis[v]=true;prev[v]=u;q.add(v);}
    }
    List<Integer> path=new ArrayList<>();
    for(int v=t;v!=-1;v=prev[v])path.add(0,v);
    return path;
}`),bfsLevel:g(`function bfsLevels(graph, start) {
  const visited=new Set([start]);
  let current=[start], level=0;
  while(current.length){
    console.log('Level', level, current);
    const next=[];
    for(const u of current)
      for(const v of graph[u])
        if(!visited.has(v)){
          visited.add(v); next.push(v);
        }
    current=next; level++;
  }
}
// Process entire level at once`,`def bfs_levels(graph,start):
    visited={start};curr=[start];level=0
    while curr:
        print(f'Level {level}:',curr)
        nxt=[]
        for u in curr:
            for v in graph[u]:
                if v not in visited:
                    visited.add(v);nxt.append(v)
        curr=nxt;level+=1`,`// Level-order BFS
void bfsLevel(vector<vector<int>>& g,int s){
    vector<bool> vis(g.size(),false);
    vector<int> curr={s};vis[s]=true;
    int lv=0;
    while(!curr.empty()){
        vector<int> nxt;
        for(int u:curr)
            for(int v:g[u])
                if(!vis[v]){vis[v]=true;nxt.push_back(v);}
        curr=nxt;lv++;
    }
}`,`void bfsLevel(List<List<Integer>> g,int s){
    boolean[] vis=new boolean[g.size()];
    List<Integer> curr=new ArrayList<>();
    curr.add(s);vis[s]=true;
    while(!curr.isEmpty()){
        List<Integer> nxt=new ArrayList<>();
        for(int u:curr)
            for(int v:g.get(u))
                if(!vis[v]){vis[v]=true;nxt.add(v);}
        curr=nxt;
    }
}`),dfsRec:g(`function dfs(graph, u, visited=new Set()) {
  visited.add(u);
  console.log('Visit', u);
  for(const v of graph[u])
    if(!visited.has(v))
      dfs(graph, v, visited);
  return visited;
}
// O(V+E) — call stack depth O(V)`,`def dfs(graph,u,visited=None):
    if visited is None: visited=set()
    visited.add(u)
    print('Visit',u)
    for v in graph[u]:
        if v not in visited:
            dfs(graph,v,visited)
    return visited  # O(V+E)`,`void dfs(vector<vector<int>>& g,int u,vector<bool>& vis){
    vis[u]=true;
    for(int v:g[u])
        if(!vis[v])
            dfs(g,v,vis);
}
// O(V+E)`,`void dfs(List<List<Integer>> g,int u,boolean[] vis){
    vis[u]=true;
    for(int v:g.get(u))
        if(!vis[v])
            dfs(g,v,vis);
}
// O(V+E)`),dfsIter:g(`function dfsIterative(graph, start) {
  const visited=new Set(), stack=[start];
  const order=[];
  while(stack.length){
    const u=stack.pop();
    if(visited.has(u)) continue;
    visited.add(u); order.push(u);
    for(const v of graph[u])
      if(!visited.has(v)) stack.push(v);
  }
  return order;
}
// No recursion stack!`,`def dfs_iter(graph,start):
    visited=set();stack=[start];order=[]
    while stack:
        u=stack.pop()
        if u in visited: continue
        visited.add(u);order.append(u)
        for v in graph[u]:
            if v not in visited: stack.append(v)
    return order  # No recursion`,`void dfsIter(vector<vector<int>>& g,int s){
    vector<bool> vis(g.size(),false);
    stack<int> st;st.push(s);
    while(!st.empty()){
        int u=st.top();st.pop();
        if(vis[u])continue;
        vis[u]=true;
        for(int v:g[u]) if(!vis[v])st.push(v);
    }
}`,`void dfsIter(List<List<Integer>> g,int s){
    boolean[] vis=new boolean[g.size()];
    Deque<Integer> st=new ArrayDeque<>();
    st.push(s);
    while(!st.isEmpty()){
        int u=st.pop();
        if(vis[u])continue;
        vis[u]=true;
        for(int v:g.get(u)) if(!vis[v])st.push(v);
    }
}`),dfsCycle:g(`function hasCycle(graph) {
  const visited=new Set(), inStack=new Set();
  function dfs(u){
    visited.add(u); inStack.add(u);
    for(const v of graph[u]){
      if(!visited.has(v) && dfs(v)) return true;
      if(inStack.has(v)) return true; // back edge!
    }
    inStack.delete(u);
    return false;
  }
  for(const u of Object.keys(graph))
    if(!visited.has(u) && dfs(u)) return true;
  return false;
}`,`def has_cycle(graph):
    visited=set();in_stack=set()
    def dfs(u):
        visited.add(u);in_stack.add(u)
        for v in graph[u]:
            if v not in visited and dfs(v): return True
            if v in in_stack: return True  # back edge!
        in_stack.discard(u);return False
    return any(dfs(u) for u in graph if u not in visited)`,`bool hasCycle(vector<vector<int>>& g){
    int n=g.size();
    vector<int> color(n,0); // 0=white,1=gray,2=black
    function<bool(int)> dfs=[&](int u)->bool{
        color[u]=1;
        for(int v:g[u]){
            if(color[v]==1)return true;
            if(color[v]==0&&dfs(v))return true;
        }
        color[u]=2;return false;
    };
    for(int i=0;i<n;i++) if(color[i]==0&&dfs(i))return true;
    return false;
}`,`boolean hasCycle(List<List<Integer>> g){
    int n=g.size();
    int[] color=new int[n]; // 0=white,1=gray,2=black
    for(int i=0;i<n;i++)
        if(color[i]==0&&dfs(g,i,color))return true;
    return false;
}`),dijkstraBasic:g(`function dijkstra(graph, start) {
  const dist={}, visited=new Set();
  for(const u of graph.nodes) dist[u]=Infinity;
  dist[start]=0;
  while(true){
    // find unvisited node with min dist
    let u=null;
    for(const v of graph.nodes)
      if(!visited.has(v)&&(u===null||dist[v]<dist[u])) u=v;
    if(!u||dist[u]===Infinity) break;
    visited.add(u);
    for(const[v,w] of graph.adj[u])
      if(dist[u]+w<dist[v]) dist[v]=dist[u]+w;
  }
  return dist; // O(V²)
}`,`def dijkstra(graph,start):
    dist={u:float('inf') for u in graph}
    dist[start]=0;visited=set()
    while True:
        u=min((v for v in graph if v not in visited),
              key=lambda v:dist[v],default=None)
        if u is None or dist[u]==float('inf'): break
        visited.add(u)
        for v,w in graph[u]:
            if dist[u]+w<dist[v]: dist[v]=dist[u]+w
    return dist  # O(V²)`,`// Dijkstra O(V²) basic
void dijkstra(vector<vector<pair<int,int>>>& g,int s,vector<int>& d){
    int n=g.size();d.assign(n,INT_MAX);d[s]=0;
    vector<bool> vis(n,false);
    for(int i=0;i<n;i++){
        int u=-1;
        for(int v=0;v<n;v++) if(!vis[v]&&(u==-1||d[v]<d[u]))u=v;
        if(u==-1||d[u]==INT_MAX)break;
        vis[u]=true;
        for(auto[v,w]:g[u]) if(d[u]+w<d[v])d[v]=d[u]+w;
    }
}`,`// Dijkstra O(V²)
void dijkstra(List<List<int[]>> g,int s,int[] d){
    int n=g.size();Arrays.fill(d,Integer.MAX_VALUE);d[s]=0;
    boolean[] vis=new boolean[n];
    for(int i=0;i<n;i++){
        int u=-1;
        for(int v=0;v<n;v++) if(!vis[v]&&(u==-1||d[v]<d[u]))u=v;
        if(u==-1)break;vis[u]=true;
        for(int[] e:g.get(u)) if(d[u]+e[1]<d[e[0]])d[e[0]]=d[u]+e[1];
    }
}`),dijkstraPQ:g(`function dijkstra(graph, start) {
  const dist={[start]:0};
  const pq=[[0,start]]; // [dist, node]
  const visited=new Set();
  while(pq.length){
    pq.sort((a,b)=>a[0]-b[0]);
    const[d,u]=pq.shift();
    if(visited.has(u)) continue;
    visited.add(u);
    for(const[v,w] of graph[u]){
      const nd=d+w;
      if(nd<(dist[v]??Infinity)){
        dist[v]=nd; pq.push([nd,v]);
      }
    }
  }
  return dist; // O((V+E) log V)
}`,`import heapq
def dijkstra(graph,start):
    dist={start:0};pq=[(0,start)]
    visited=set()
    while pq:
        d,u=heapq.heappop(pq)
        if u in visited: continue
        visited.add(u)
        for v,w in graph[u]:
            if d+w<dist.get(v,float('inf')):
                dist[v]=d+w
                heapq.heappush(pq,(dist[v],v))
    return dist  # O((V+E)logV)`,`// Dijkstra with priority queue O((V+E)logV)
void dijkstraPQ(vector<vector<pair<int,int>>>& g,int s,vector<int>& d){
    int n=g.size();d.assign(n,INT_MAX);d[s]=0;
    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<>> pq;
    pq.push({0,s});
    while(!pq.empty()){
        auto[du,u]=pq.top();pq.pop();
        if(du>d[u])continue;
        for(auto[v,w]:g[u]) if(d[u]+w<d[v]){d[v]=d[u]+w;pq.push({d[v],v});}
    }
}`,`// Dijkstra + PQ O((V+E)logV)
void dijkstraPQ(List<List<int[]>> g,int s,int[] d){
    int n=g.size();Arrays.fill(d,Integer.MAX_VALUE);d[s]=0;
    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[0]-b[0]);
    pq.offer(new int[]{0,s});
    while(!pq.isEmpty()){
        int[] top=pq.poll();int du=top[0],u=top[1];
        if(du>d[u])continue;
        for(int[] e:g.get(u)) if(d[u]+e[1]<d[e[0]]){d[e[0]]=d[u]+e[1];pq.offer(new int[]{d[e[0]],e[0]});}
    }
}`),bellmanFord:g(`function bellmanFord(edges, nodes, start) {
  const dist={[start]:0};
  for(const u of nodes) if(u!==start) dist[u]=Infinity;
  for(let i=0;i<nodes.length-1;i++){
    for(const{u,v,w} of edges){
      if(dist[u]+w<dist[v])
        dist[v]=dist[u]+w; // relax
    }
  }
  // Check negative cycles
  for(const{u,v,w} of edges)
    if(dist[u]+w<dist[v]) return null; // neg cycle!
  return dist; // O(VE) — handles negative edges!
}`,`def bellman_ford(edges,n,start):
    dist=[float('inf')]*n;dist[start]=0
    for _ in range(n-1):  # n-1 passes
        for u,v,w in edges:
            if dist[u]+w<dist[v]:
                dist[v]=dist[u]+w
    # Detect negative cycle
    for u,v,w in edges:
        if dist[u]+w<dist[v]: return None
    return dist  # O(VE)`,`// Bellman-Ford O(VE) — handles negative edges!
vector<int> bellmanFord(vector<tuple<int,int,int>>& edges,int n,int s){
    vector<int> d(n,INT_MAX);d[s]=0;
    for(int i=0;i<n-1;i++)
        for(auto[u,v,w]:edges)
            if(d[u]!=INT_MAX&&d[u]+w<d[v])d[v]=d[u]+w;
    for(auto[u,v,w]:edges)
        if(d[u]!=INT_MAX&&d[u]+w<d[v])return{}; // neg cycle
    return d;
}`,`// Bellman-Ford O(VE)
int[] bellmanFord(int[][] edges,int n,int s){
    int[] d=new int[n];Arrays.fill(d,Integer.MAX_VALUE);d[s]=0;
    for(int i=0;i<n-1;i++)
        for(int[] e:edges)
            if(d[e[0]]!=Integer.MAX_VALUE&&d[e[0]]+e[2]<d[e[1]])
                d[e[1]]=d[e[0]]+e[2];
    return d;
}`)},Ge=[50,30,70,20,40,60,80];function Ke(e){let t={},n=0;function r(e,i){if(e===null){let e=n++;return t[e]={id:e,val:i,left:null,right:null},e}return i<t[e].val?t[e].left=r(t[e].left,i):t[e].right=r(t[e].right,i),e}let i=null;for(let t of e)i=r(i,t);return{nodes:t,root:i}}function qe(e,t){let n={},r=0;function i(t,a){t!==null&&(i(e[t].left,a+1),n[t]={x:r*52+30,y:a*62+30},r++,i(e[t].right,a+1))}return i(t,0),n}function F(e,t,n,r,i,a,o,s){let c={};return Object.keys(e).forEach(t=>{c[t]={...e[t]}}),{nodes:c,root:t,positions:qe(e,t),highlighted:n,visited:[...r],path:[...i],result:[...a],msg:o,ln:s}}function Je(){let{nodes:e,root:t}=Ke(Ge),n=[],r=[],i=[];n.push(F(e,t,[],r,[],i,`BST Inorder: Left → Root → Right (gives sorted output!)`,0));function a(o){o!==null&&(n.push(F(e,t,[o],r,[],i,`Go left from ${e[o].val}`,2)),a(e[o].left),n.push(F(e,t,[o],r,[],i,`Visit ${e[o].val}`,3)),r.push(o),i.push(e[o].val),n.push(F(e,t,[],r,[],i,`Visited: [${i}]`,3)),a(e[o].right))}return a(t),n.push(F(e,t,[],r,[],i,`✓ Inorder: [${i}] — sorted!`,5)),n}function Ye(){let{nodes:e,root:t}=Ke(Ge),n=[],r=[],i=[],a=[];n.push(F(e,t,[],r,[],a,`Iterative inorder with explicit stack`,0));let o=t;for(;o!==null||i.length;){for(;o!==null;)n.push(F(e,t,[o],r,[...i,o],a,`Push ${e[o].val} to stack, go left`,3)),i.push(o),o=e[o].left;o=i.pop(),n.push(F(e,t,[o],r,[...i],a,`Pop ${e[o].val} — visit it`,5)),r.push(o),a.push(e[o].val),n.push(F(e,t,[],r,[...i],a,`Result so far: [${a}]`,5)),o=e[o].right}return n.push(F(e,t,[],r,[],a,`✓ [${a}] — no recursion stack!`,7)),n}function Xe(){let{nodes:e,root:t}=Ke(Ge),n=[],r=[],i=[];n.push(F(e,t,[],r,[],i,`Preorder: Root → Left → Right (useful for cloning)`,0));function a(o){o!==null&&(n.push(F(e,t,[o],r,[],i,`Visit ${e[o].val} first`,2)),r.push(o),i.push(e[o].val),n.push(F(e,t,[],r,[],i,`Result: [${i}]`,2)),a(e[o].left),a(e[o].right))}return a(t),n.push(F(e,t,[],r,[],i,`✓ Preorder: [${i}]`,4)),n}function Ze(){let{nodes:e,root:t}=Ke(Ge),n=[],r=[],i=[];n.push(F(e,t,[],r,[],i,`Postorder: Left → Right → Root (useful for deletion)`,0));function a(o){o!==null&&(n.push(F(e,t,[o],r,[],i,`Dive into subtree of ${e[o].val}`,2)),a(e[o].left),a(e[o].right),r.push(o),i.push(e[o].val),n.push(F(e,t,[o],r,[],i,`Visit ${e[o].val} last: [${i}]`,3)))}return a(t),n.push(F(e,t,[],r,[],i,`✓ Postorder: [${i}]`,5)),n}function Qe(e=40){let{nodes:t,root:n}=Ke(Ge),r=[],i=[];r.push(F(t,n,[],[],i,[],`Search for ${e} in BST (recursive)`,0));function a(o){return o===null?(r.push(F(t,n,[],[],i,[],`✗ ${e} not found`,3)),!1):(i.push(o),r.push(F(t,n,[o],[],i,[],`Compare ${e} vs ${t[o].val}`,2)),t[o].val===e?(r.push(F(t,n,[o],[o],i,[],`✓ Found ${e}!`,3)),!0):e<t[o].val?(r.push(F(t,n,[o],[],i,[],`${e}<${t[o].val} → go left`,4)),a(t[o].left)):(r.push(F(t,n,[o],[],i,[],`${e}>${t[o].val} → go right`,5)),a(t[o].right)))}return a(n),r}function $e(e=40){let{nodes:t,root:n}=Ke(Ge),r=[],i=[];r.push(F(t,n,[],[],i,[],`Search for ${e} iteratively`,0));let a=n;for(;a!==null;){if(i.push(a),r.push(F(t,n,[a],[],i,[],`Compare ${e} vs ${t[a].val}`,3)),t[a].val===e)return r.push(F(t,n,[a],[a],i,[],`✓ Found ${e}!`,4)),r;e<t[a].val?(r.push(F(t,n,[a],[],i,[],`Go left`,5)),a=t[a].left):(r.push(F(t,n,[a],[],i,[],`Go right`,6)),a=t[a].right)}return r.push(F(t,n,[],[],i,[],`✗ Not found`,8)),r}function et(e=35){let{nodes:t,root:n}=Ke(Ge),r={...t},i=[],a=[],o=n;i.push(F(r,o,[],[],a,[],`Insert ${e} into BST`,0));function s(e,t){if(e===null){let e=Object.keys(r).length;return r[e]={id:e,val:t,left:null,right:null},i.push(F(r,o,[e],[e],a,[],`✓ Inserted ${t} as new node!`,4)),e}return a.push(e),i.push(F(r,o,[e],[],a,[],`${t}<${r[e].val}? → go ${t<r[e].val?`left`:`right`}`,2)),t<r[e].val?r[e].left=s(r[e].left,t):r[e].right=s(r[e].right,t),e}return o=s(o,e),i.push(F(r,o,[],[],a,[],`✓ BST property maintained after insert`,6)),i}function tt(e=6){let t=[],n=[],r=0;t.push({board:Array(e).fill(-1),queens:[],calls:0,solutions:0,msg:`N-Queens: place ${e} queens on ${e}×${e} board`,ln:0});function i(e,t,n){for(let r=0;r<t;r++)if(e[r]===n||Math.abs(e[r]-n)===Math.abs(r-t))return!1;return!0}function a(o,s){if(r++,s===e){n.push([...o]),t.push({board:[...o],queens:[...o],calls:r,solutions:n.length,msg:`✓ Solution found! [${o}]`,ln:6});return}for(let c=0;c<e;c++)t.push({board:[...o],queens:[...o.slice(0,s)],calls:r,solutions:n.length,msg:`Try queen at row=${s}, col=${c}`,ln:3}),i(o,s,c)&&(o[s]=c,t.push({board:[...o],queens:[...o.slice(0,s+1)],calls:r,solutions:n.length,msg:`Place queen at (${s},${c}) — safe!`,ln:4}),a(o,s+1),o[s]=-1,t.push({board:[...o],queens:[...o.slice(0,s)],calls:r,solutions:n.length,msg:`Backtrack from row ${s}`,ln:5}))}return a(Array(e).fill(-1),0),t.push({board:n[0]||Array(e).fill(-1),queens:n[0]||[],calls:r,solutions:n.length,msg:`✓ Found ${n.length} solutions in ${r} calls`,ln:8}),t}function nt(e=6){let t=[],n=[],r=0,i=(1<<e)-1;t.push({board:Array(e).fill(-1),queens:[],calls:0,solutions:0,msg:`Bitmask N-Queens: cols/diags as bit flags`,ln:0});function a(o,s,c,l,u){if(r++,s===i){n.push([...u]),t.push({board:[...u],queens:[...u],calls:r,solutions:n.length,msg:`✓ Solution! [${u}]`,ln:5});return}let d=i&~(s|c|l);for(t.push({board:[...u],queens:[...u.slice(0,o)],calls:r,solutions:n.length,msg:`Row ${o}: available cols bitmask=${d.toString(2).padStart(e,`0`)}`,ln:3});d;){let e=d&-d,i=Math.log2(e);d-=e,u[o]=i,t.push({board:[...u],queens:[...u.slice(0,o+1)],calls:r,solutions:n.length,msg:`Place at col=${i} (bit=${e.toString(2)})`,ln:4}),a(o+1,s|e,(c|e)<<1,(l|e)>>1,u),u[o]=-1}}return a(0,0,0,0,Array(e).fill(-1)),t.push({board:n[0]||Array(e).fill(-1),queens:n[0]||[],calls:r,solutions:n.length,msg:`✓ ${n.length} solutions found — bitmask is ~3× faster`,ln:8}),t}function rt(e=[1,2,3,4]){let t=[],n=[];t.push({arr:e,current:[],all:[],idx:-1,msg:`Generate all subsets of [${e}]`,ln:0});function r(i,a){if(t.push({arr:e,current:[...a],all:[...n],idx:i,msg:`At index ${i}, current subset: [${a}]`,ln:2}),i===e.length){n.push([...a]),t.push({arr:e,current:[...a],all:[...n],idx:i,msg:`Complete subset: [${a}]`,ln:3});return}a.push(e[i]),t.push({arr:e,current:[...a],all:[...n],idx:i,msg:`Include inp[${i}]=${e[i]}: [${a}]`,ln:4}),r(i+1,a),a.pop(),t.push({arr:e,current:[...a],all:[...n],idx:i,msg:`Exclude inp[${i}]=${e[i]}: [${a}]`,ln:6}),r(i+1,a)}return r(0,[]),t.push({arr:e,current:[],all:[...n],idx:-1,msg:`✓ ${n.length} subsets = 2^${e.length}`,ln:8}),t}function it(e=[1,2,3]){let t=[],n=[];t.push({arr:[...e],current:[...e],all:[],idx:-1,msg:`Generate all permutations of [${e}]`,ln:0});function r(e,i){if(i===e.length){n.push([...e]),t.push({arr:[...e],current:[...e],all:[...n],idx:i,msg:`Permutation: [${e}]`,ln:3});return}for(let a=i;a<e.length;a++)t.push({arr:[...e],current:[...e],all:[...n],idx:i,msg:`Swap arr[${i}] ↔ arr[${a}]: ${e[i]}↔${e[a]}`,ln:5}),[e[i],e[a]]=[e[a],e[i]],t.push({arr:[...e],current:[...e],all:[...n],idx:i+1,msg:`Recurse with [${e}]`,ln:6}),r(e,i+1),[e[i],e[a]]=[e[a],e[i]],t.push({arr:[...e],current:[...e],all:[...n],idx:i,msg:`Backtrack`,ln:7})}return r([...e],0),t.push({arr:[...e],current:[...e],all:[...n],idx:-1,msg:`✓ ${n.length} permutations = ${e.length}!`,ln:9}),t}var at=`AABAACAADAABA`,ot=`AABA`;function st(e=at,t=ot){let n=e.length,r=t.length,i=[],a=[];i.push({text:e,pat:t,i:0,j:-1,matches:[],msg:`Brute force: check every position O(nm)`,ln:0});for(let o=0;o<=n-r;o++){i.push({text:e,pat:t,i:o,j:0,matches:[...a],msg:`Try starting at index ${o}`,ln:2});let n=0;for(;n<r&&(i.push({text:e,pat:t,i:o,j:n,matches:[...a],msg:`text[${o+n}]='${e[o+n]}' vs pat[${n}]='${t[n]}'`,ln:3}),e[o+n]===t[n]);)n++;n===r?(a.push(o),i.push({text:e,pat:t,i:o,j:-1,matches:[...a],msg:`✓ Match found at index ${o}!`,ln:5})):i.push({text:e,pat:t,i:o,j:-1,matches:[...a],msg:`Mismatch at j=${n}, try next position`,ln:7})}return i.push({text:e,pat:t,i:-1,j:-1,matches:[...a],msg:`✓ Found ${a.length} matches at [${a}] — O(nm)`,ln:9}),i}function ct(e=at,t=ot){let n=e.length,r=t.length,i=[],a=[],o=Array(r).fill(0),s=0,c=1;for(i.push({text:e,pat:t,i:0,j:0,matches:[],lps:[...o],msg:`KMP: build LPS (Longest Proper Prefix Suffix) table`,ln:0});c<r;)t[c]===t[s]?(o[c]=++s,i.push({text:e,pat:t,i:0,j:c,matches:[],lps:[...o],msg:`lps[${c}]=${s}`,ln:3}),c++):s>0?(s=o[s-1],i.push({text:e,pat:t,i:0,j:c,matches:[],lps:[...o],msg:`Mismatch, fallback len=${s}`,ln:5})):(o[c]=0,i.push({text:e,pat:t,i:0,j:c,matches:[],lps:[...o],msg:`lps[${c}]=0`,ln:6}),c++);i.push({text:e,pat:t,i:0,j:0,matches:[],lps:[...o],msg:`LPS=[${o}]. Now search!`,ln:7});let l=0,u=0;for(;l<n;)i.push({text:e,pat:t,i:l,j:u,matches:[...a],lps:[...o],msg:`text[${l}]='${e[l]}' vs pat[${u}]='${t[u]}'`,ln:9}),e[l]===t[u]&&(l++,u++),u===r?(a.push(l-u),i.push({text:e,pat:t,i:l,j:u,matches:[...a],lps:[...o],msg:`✓ Match at ${l-u}! Use lps to skip`,ln:10}),u=o[u-1]):l<n&&e[l]!==t[u]&&(u===0?l++:(i.push({text:e,pat:t,i:l,j:u,matches:[...a],lps:[...o],msg:`Mismatch: skip to lps[${u-1}]=${o[u-1]}`,ln:11}),u=o[u-1]));return i.push({text:e,pat:t,i:-1,j:-1,matches:[...a],lps:[...o],msg:`✓ ${a.length} matches at [${a}] — O(n+m) no backtrack!`,ln:13}),i}function lt(e=at,t=ot){let n=e.length,r=t.length,i=[],a=[],o=0,s=0,c=1;for(let e=0;e<r-1;e++)c=c*256%101;for(let n=0;n<r;n++)o=(256*o+t.charCodeAt(n))%101,s=(256*s+e.charCodeAt(n))%101;i.push({text:e,pat:t,i:0,j:-1,matches:[],msg:`Rabin-Karp: hash pattern hash=${o}, compute rolling hash`,ln:0});for(let l=0;l<=n-r;l++){if(i.push({text:e,pat:t,i:l,j:-1,matches:[...a],msg:`Window hash=${s} vs pattern hash=${o}`,ln:3}),o===s){let n=0;for(;n<r&&e[l+n]===t[n];)n++;n===r?(a.push(l),i.push({text:e,pat:t,i:l,j:-1,matches:[...a],msg:`✓ Hash match confirmed at index ${l}!`,ln:5})):i.push({text:e,pat:t,i:l,j:-1,matches:[...a],msg:`Hash collision at ${l} — not a real match`,ln:6})}l<n-r&&(s=(256*(s-e.charCodeAt(l)*c)+e.charCodeAt(l+r))%101,s<0&&(s+=101),i.push({text:e,pat:t,i:l+1,j:-1,matches:[...a],msg:`Roll hash: remove '${e[l]}', add '${e[l+r]}' → ${s}`,ln:8}))}return i.push({text:e,pat:t,i:-1,j:-1,matches:[...a],msg:`✓ ${a.length} matches — O(n+m) average`,ln:10}),i}var ut=3;function dt(e){let t=e,n=t.length,r=ut,i=[],a=-1/0,o=0;i.push({a:t,wStart:-1,wEnd:-1,maxStart:o,maxEnd:o+r-1,curSum:0,maxSum:a,msg:`Max sum subarray of size k=${r} — brute O(nk)`,ln:0});for(let e=0;e<=n-r;e++){let n=0;for(let i=e;i<e+r;i++)n+=t[i];i.push({a:t,wStart:e,wEnd:e+r-1,maxStart:o,maxEnd:o+r-1,curSum:n,maxSum:a,msg:`Sum a[${e}..${e+r-1}]=${n}`,ln:3}),n>a&&(a=n,o=e,i.push({a:t,wStart:e,wEnd:e+r-1,maxStart:o,maxEnd:o+r-1,curSum:n,maxSum:a,msg:`New max! sum=${n} at [${e}..${e+r-1}]`,ln:4}))}return i.push({a:t,wStart:-1,wEnd:-1,maxStart:o,maxEnd:o+r-1,curSum:0,maxSum:a,msg:`✓ Max sum=${a} at [${o}..${o+r-1}]`,ln:6}),i}function ft(e){let t=e,n=t.length,r=ut,i=[],a=0;for(let e=0;e<r;e++)a+=t[e];let o=a,s=0;i.push({a:t,wStart:0,wEnd:r-1,maxStart:s,maxEnd:r-1,curSum:a,maxSum:o,msg:`Init: sum first window [0..${r-1}]=${a}`,ln:0});for(let e=r;e<n;e++){let n=t[e-r];a=a-n+t[e],i.push({a:t,wStart:e-r+1,wEnd:e,maxStart:s,maxEnd:s+r-1,curSum:a,maxSum:o,msg:`Slide: remove a[${e-r}]=${n}, add a[${e}]=${t[e]} → sum=${a}`,ln:3}),a>o&&(o=a,s=e-r+1,i.push({a:t,wStart:e-r+1,wEnd:e,maxStart:s,maxEnd:e,curSum:a,maxSum:o,msg:`New max! sum=${a}`,ln:4}))}return i.push({a:t,wStart:-1,wEnd:-1,maxStart:s,maxEnd:s+r-1,curSum:0,maxSum:o,msg:`✓ Max sum=${o} — O(n) single pass!`,ln:6}),i}function pt(e){let t=e,n=t.length,r=[],i=new Set,a=0,o=0,s=0;r.push({a:t,wStart:0,wEnd:0,maxStart:0,maxEnd:0,curSum:0,maxSum:0,msg:`Longest subarray with unique elements`,ln:0});for(let e=0;e<n;e++){for(r.push({a:t,wStart:a,wEnd:e,maxStart:s,maxEnd:s+o-1,curSum:e-a+1,maxSum:o,msg:`Expand right to ${t[e]}`,ln:2});i.has(t[e]);)r.push({a:t,wStart:a,wEnd:e,maxStart:s,maxEnd:s+o-1,curSum:e-a,maxSum:o,msg:`${t[e]} duplicate! Shrink left: remove ${t[a]}`,ln:4}),i.delete(t[a]),a++;i.add(t[e]),e-a+1>o?(o=e-a+1,s=a,r.push({a:t,wStart:a,wEnd:e,maxStart:s,maxEnd:e,curSum:o,maxSum:o,msg:`New max length=${o} at [${a}..${e}]`,ln:5})):r.push({a:t,wStart:a,wEnd:e,maxStart:s,maxEnd:s+o-1,curSum:e-a+1,maxSum:o,msg:`Window [${a}..${e}] len=${e-a+1}`,ln:5})}return r.push({a:t,wStart:-1,wEnd:-1,maxStart:s,maxEnd:s+o-1,curSum:0,maxSum:o,msg:`✓ Longest unique subarray length=${o}`,ln:7}),r}var mt=[{s:1,e:4},{s:3,e:5},{s:0,e:6},{s:5,e:7},{s:3,e:8},{s:5,e:9},{s:6,e:10},{s:8,e:11},{s:8,e:12},{s:2,e:13},{s:12,e:14}];function ht(){let e=mt.slice(0,6),t=e.length,n=[],r=[];n.push({acts:e,selected:[],current:-1,msg:`Activity Selection: find max non-overlapping activities`,ln:0});function i(a,o,s){if(a===t){s.length>r.length&&(r=[...s]),n.push({acts:e,selected:[...s],current:a,msg:`Subset size=${s.length}`,ln:2});return}e[a].s>=o&&i(a+1,e[a].e,[...s,a]),i(a+1,o,s)}return i(0,-1,[]),n.push({acts:e,selected:r,current:-1,msg:`✓ Max activities=${r.length}: [${r.map(t=>e[t].s+`-`+e[t].e)}]`,ln:5}),n}function gt(){let e=[...mt.slice(0,8)].sort((e,t)=>e.e-t.e),t=[],n=[];t.push({acts:e,selected:[],current:-1,msg:`Greedy: sort by END time, greedily select`,ln:0}),t.push({acts:e,selected:[],current:-1,msg:`Sorted by end: [${e.map(e=>e.s+`-`+e.e)}]`,ln:1});let r=-1/0;for(let i=0;i<e.length;i++)t.push({acts:e,selected:[...n],current:i,msg:`Activity [${e[i].s}-${e[i].e}]: starts after last end ${r}?`,ln:3}),e[i].s>=r?(n.push(i),r=e[i].e,t.push({acts:e,selected:[...n],current:i,msg:`✓ Select [${e[i].s}-${e[i].e}], lastEnd=${r}`,ln:4})):t.push({acts:e,selected:[...n],current:i,msg:`✗ Skip [${e[i].s}-${e[i].e}] — overlaps`,ln:5});return t.push({acts:e,selected:[...n],current:-1,msg:`✓ Selected ${n.length} activities — O(n log n)`,ln:7}),t}function _t(){let e=[{w:10,v:60},{w:20,v:100},{w:30,v:120}],t=[],n=[],r=[...e].map((e,t)=>({...e,i:t,ratio:e.v/e.w})).sort((e,t)=>t.ratio-e.ratio);t.push({items:r,taken:[],capacity:50,curW:0,curV:0,msg:`Fractional Knapsack: capacity=50, sort by value/weight ratio`,ln:0});let i=0,a=0;for(let e of r)if(t.push({items:r,taken:[...n],capacity:50,curW:i,curV:a,msg:`Item w=${e.w} v=${e.v} ratio=${e.ratio.toFixed(1)}`,ln:3}),i+e.w<=50)i+=e.w,a+=e.v,n.push({...e,frac:1}),t.push({items:r,taken:[...n],capacity:50,curW:i,curV:a,msg:`Take whole item: curV=${a}, curW=${i}`,ln:4});else{let o=(50-i)/e.w;a+=e.v*o,i=50,n.push({...e,frac:o}),t.push({items:r,taken:[...n],capacity:50,curW:i,curV:a,msg:`Take ${(o*100).toFixed(0)}% of item: curV=${a.toFixed(1)}`,ln:5});break}return t.push({items:r,taken:[...n],capacity:50,curW:i,curV:a,msg:`✓ Max value=${a.toFixed(1)} — optimal greedy!`,ln:7}),t}function vt(e){let t=[...e].sort((e,t)=>e-t),n=e[0]+e[e.length-1],r=0,i=t.length-1,a=[{arr:t,p1:r,p2:i,found:[],map:{},msg:`Two pointers on sorted array — target=${n}`,ln:0}];for(;r<i;){let e=t[r]+t[i];if(a.push({arr:t,p1:r,p2:i,found:[],map:{},msg:`arr[${r}]=${t[r]} + arr[${i}]=${t[i]} = ${e}`,ln:3}),e===n)return a.push({arr:t,p1:r,p2:i,found:[r,i],map:{},msg:`✓ Found pair summing to ${n}!`,ln:4}),a;e<n?(a.push({arr:t,p1:r+1,p2:i,found:[],map:{},msg:`Sum<target, move L→`,ln:5}),r++):(a.push({arr:t,p1:r,p2:i-1,found:[],map:{},msg:`Sum>target, ←R`,ln:6}),i--)}return a.push({arr:t,p1:r,p2:i,found:[],map:{},msg:`✗ Not found`,ln:8}),a}function yt(e){let t=[...e].sort((e,t)=>e-t),n=[{arr:[...t],p1:0,p2:1,found:[0],map:{},msg:`Remove duplicates in-place — two pointers`,ln:0}],r=0;for(let e=1;e<t.length;e++)n.push({arr:[...t],p1:r,p2:e,found:Array.from({length:r+1},(e,t)=>t),map:{},msg:`fast=${e}: arr[${e}]=${t[e]} vs arr[${r}]=${t[r]}`,ln:2}),t[e]===t[r]?n.push({arr:[...t],p1:r,p2:e,found:Array.from({length:r+1},(e,t)=>t),map:{},msg:`Duplicate ${t[e]}, skip`,ln:4}):(r++,t[r]=t[e],n.push({arr:[...t],p1:r,p2:e,found:Array.from({length:r+1},(e,t)=>t),map:{},msg:`New unique: arr[${r}]=${t[r]}`,ln:3}));return n.push({arr:[...t],p1:r,p2:-1,found:Array.from({length:r+1},(e,t)=>t),map:{},msg:`✓ ${r+1} unique elements`,ln:6}),n}function bt(e){let t=[...e].map(e=>Math.min(e,9)),n=0,r=t.length-1,i=0,a=0,o=0,s=[{arr:t,p1:n,p2:r,found:[],map:{curWater:0,maxWater:0},msg:`Container With Most Water: two pointer O(n)`,ln:0}];for(;n<r;){let e=Math.min(t[n],t[r])*(r-n);s.push({arr:t,p1:n,p2:r,found:[],map:{curWater:e,maxWater:i},msg:`h[${n}]=${t[n]}, h[${r}]=${t[r]}: water=${e}`,ln:3}),e>i&&(i=e,a=n,o=r,s.push({arr:t,p1:n,p2:r,found:[n,r],map:{curWater:e,maxWater:i},msg:`New max water=${e}!`,ln:4})),t[n]<t[r]?(s.push({arr:t,p1:n+1,p2:r,found:[],map:{curWater:e,maxWater:i},msg:`h[L]<h[R], move L→`,ln:5}),n++):(s.push({arr:t,p1:n,p2:r-1,found:[],map:{curWater:e,maxWater:i},msg:`h[L]≥h[R], ←R`,ln:6}),r--)}return s.push({arr:t,p1:a,p2:o,found:[a,o],map:{curWater:i,maxWater:i},msg:`✓ Max water=${i}`,ln:8}),s}function xt(e,t=8){return(e>>>0).toString(2).padStart(t,`0`)}function St(e=23){let t=[],n=0,r=e;for(t.push({bits:xt(e),num:e,count:0,step:-1,msg:`Count set bits in ${e} = ${xt(e)}`,ln:0});r>0;){let e=r&1;t.push({bits:xt(r),num:r,count:n,step:0,msg:`num&1 = ${e}: ${e?`count++`:`skip`}, then num>>=1`,ln:2}),e&&n++,r>>=1,t.push({bits:xt(r),num:r,count:n,step:0,msg:`After shift: num=${r}=${xt(r)}, count=${n}`,ln:3})}return t.push({bits:xt(e),num:0,count:n,step:-1,msg:`✓ ${e} has ${n} set bits`,ln:5}),t}function Ct(e=23){let t=[],n=0,r=e;for(t.push({bits:xt(e),num:e,count:0,step:-1,msg:`Brian Kernighan's trick: n&(n-1) clears lowest set bit`,ln:0});r>0;){let e=r,i=r-1,a=r&i;t.push({bits:xt(e),num:e,count:n,step:1,msg:`n=${e}=${xt(e)}, n-1=${i}=${xt(i)}`,ln:2}),t.push({bits:xt(a),num:a,count:n,step:1,msg:`n&(n-1)=${a}=${xt(a)} — cleared lowest bit`,ln:3}),r=a,n++,t.push({bits:xt(r),num:r,count:n,step:-1,msg:`count=${n}, ${r} remaining`,ln:4})}return t.push({bits:xt(e),num:0,count:n,step:-1,msg:`✓ ${e} has ${n} set bits — only loops once per set bit!`,ln:6}),t}function wt(e=16){let t=Array(e+1).fill(0),n=[{dpArr:[...t],active:0,msg:`DP: dp[i] = dp[i>>1] + (i&1)`,ln:0}];for(let r=1;r<=e;r++)t[r]=t[r>>1]+(r&1),n.push({dpArr:[...t],active:r,msg:`dp[${r}]=dp[${r>>1}]+${r&1}=${t[r]} (${xt(r)})`,ln:2});return n.push({dpArr:[...t],active:-1,msg:`✓ All bit counts computed in O(n)!`,ln:4}),n}var I={inorder:g(`function inorder(root) {
  if (!root) return [];
  return [...inorder(root.left), root.val, ...inorder(root.right)];
}
// O(n) — gives sorted output for BST!`,`def inorder(root):
    if not root: return []
    return inorder(root.left)+[root.val]+inorder(root.right)
# O(n) sorted output`,`void inorder(Node* r,vector<int>& res){
    if(!r)return;
    inorder(r->left,res);
    res.push_back(r->val);
    inorder(r->right,res);
}
// O(n)`,`void inorder(TreeNode r,List<Integer> res){
    if(r==null)return;
    inorder(r.left,res);
    res.add(r.val);
    inorder(r.right,res);
}
// O(n)`),inorderIter:g(`function inorderIter(root) {
  const stack=[], res=[];
  let cur=root;
  while(cur || stack.length){
    while(cur){stack.push(cur);cur=cur.left;}
    cur=stack.pop();
    res.push(cur.val);
    cur=cur.right;
  }
  return res; // No recursion!
}`,`def inorder_iter(root):
    stack,res,cur=[],[],root
    while cur or stack:
        while cur: stack.append(cur);cur=cur.left
        cur=stack.pop()
        res.append(cur.val)
        cur=cur.right
    return res`,`vector<int> inorderIter(Node* root){
    stack<Node*> st;vector<int> res;
    Node* cur=root;
    while(cur||!st.empty()){
        while(cur){st.push(cur);cur=cur->left;}
        cur=st.top();st.pop();
        res.push_back(cur->val);
        cur=cur->right;
    }return res;
}`,`List<Integer> inorderIter(TreeNode root){
    Deque<TreeNode> st=new ArrayDeque<>();
    List<Integer> res=new ArrayList<>();
    TreeNode cur=root;
    while(cur!=null||!st.isEmpty()){
        while(cur!=null){st.push(cur);cur=cur.left;}
        cur=st.pop();res.add(cur.val);cur=cur.right;
    }return res;
}`),preorder:g(`function preorder(root) {
  if (!root) return [];
  return [root.val, ...preorder(root.left), ...preorder(root.right)];
}
// Root first — useful for cloning trees`,`def preorder(root):
    if not root: return []
    return [root.val]+preorder(root.left)+preorder(root.right)
# Root → Left → Right`,`void preorder(Node* r,vector<int>& res){
    if(!r)return;
    res.push_back(r->val);
    preorder(r->left,res);
    preorder(r->right,res);
}`,`void preorder(TreeNode r,List<Integer> res){
    if(r==null)return;
    res.add(r.val);
    preorder(r.left,res);
    preorder(r.right,res);
}`),postorder:g(`function postorder(root) {
  if (!root) return [];
  return [...postorder(root.left), ...postorder(root.right), root.val];
}
// Root last — useful for deleting trees`,`def postorder(root):
    if not root: return []
    return postorder(root.left)+postorder(root.right)+[root.val]
# Leaf → ... → Root`,`void postorder(Node* r,vector<int>& res){
    if(!r)return;
    postorder(r->left,res);
    postorder(r->right,res);
    res.push_back(r->val);
}`,`void postorder(TreeNode r,List<Integer> res){
    if(r==null)return;
    postorder(r.left,res);
    postorder(r.right,res);
    res.add(r.val);
}`),bstSearchRec:g(`function search(root, val) {
  if (!root || root.val === val) return root;
  if (val < root.val) return search(root.left, val);
  return search(root.right, val);
}
// O(log n) avg, O(n) worst`,`def search(root,val):
    if not root or root.val==val: return root
    if val<root.val: return search(root.left,val)
    return search(root.right,val)
# O(log n) avg`,`Node* search(Node* r,int v){
    if(!r||r->val==v)return r;
    if(v<r->val)return search(r->left,v);
    return search(r->right,v);
}`,`TreeNode search(TreeNode r,int v){
    if(r==null||r.val==v)return r;
    if(v<r.val)return search(r.left,v);
    return search(r.right,v);
}`),bstSearchIter:g(`function search(root, val) {
  let cur = root;
  while (cur) {
    if (cur.val === val) return cur;
    cur = val < cur.val ? cur.left : cur.right;
  }
  return null; // O(log n) no stack
}`,`def search(root,val):
    cur=root
    while cur:
        if cur.val==val: return cur
        cur=cur.left if val<cur.val else cur.right
    return None  # O(log n)`,`Node* search(Node* r,int v){
    while(r){
        if(r->val==v)return r;
        r=v<r->val?r->left:r->right;
    }return nullptr;
}`,`TreeNode search(TreeNode r,int v){
    while(r!=null){
        if(r.val==v)return r;
        r=v<r.val?r.left:r.right;
    }return null;
}`),bstInsert:g(`function insert(root, val) {
  if (!root) return new Node(val);
  if (val < root.val) root.left = insert(root.left, val);
  else root.right = insert(root.right, val);
  return root;
}
// O(log n) avg`,`def insert(root,val):
    if not root: return Node(val)
    if val<root.val: root.left=insert(root.left,val)
    else: root.right=insert(root.right,val)
    return root`,`Node* insert(Node* r,int v){
    if(!r)return new Node(v);
    if(v<r->val)r->left=insert(r->left,v);
    else r->right=insert(r->right,v);
    return r;
}`,`TreeNode insert(TreeNode r,int v){
    if(r==null)return new TreeNode(v);
    if(v<r.val)r.left=insert(r.left,v);
    else r.right=insert(r.right,v);
    return r;
}`)},Tt={nqueens:g(`function solveNQueens(n) {
  const res=[], board=Array(n).fill(-1);
  function bt(row){
    if(row===n){res.push([...board]);return;}
    for(let col=0;col<n;col++){
      if(isSafe(board,row,col)){
        board[row]=col; bt(row+1); board[row]=-1;
      }
    }
  }
  bt(0); return res;
}`,`def solve_n_queens(n):
    res=[];board=[-1]*n
    def bt(row):
        if row==n: res.append(board[:]); return
        for col in range(n):
            if is_safe(board,row,col):
                board[row]=col; bt(row+1); board[row]=-1
    bt(0); return res`,`void bt(vector<int>& b,int row,int n,vector<vector<int>>& res){
    if(row==n){res.push_back(b);return;}
    for(int c=0;c<n;c++)
        if(isSafe(b,row,c)){b[row]=c;bt(b,row+1,n,res);b[row]=-1;}
}`,`void bt(int[] b,int row,int n,List<int[]> res){
    if(row==n){res.add(b.clone());return;}
    for(int c=0;c<n;c++)
        if(isSafe(b,row,c)){b[row]=c;bt(b,row+1,n,res);b[row]=-1;}
}`),nqBitmask:g(`function solveNQueens(n) {
  const full=(1<<n)-1; let count=0;
  function bt(cols,ld,rd){
    if(cols===full){count++;return;}
    let avail=full&~(cols|ld|rd);
    while(avail){
      const bit=avail&(-avail); avail-=bit;
      bt(cols|bit,(ld|bit)<<1,(rd|bit)>>1);
    }
  }
  bt(0,0,0); return count;
}
// ~3x faster with bitmasks!`,`def solve_bitmask(n):
    full=(1<<n)-1;count=0
    def bt(cols,ld,rd):
        nonlocal count
        if cols==full: count+=1; return
        avail=full&~(cols|ld|rd)
        while avail:
            bit=avail&(-avail);avail-=bit
            bt(cols|bit,(ld|bit)<<1,(rd|bit)>>1)
    bt(0,0,0);return count`,`int bt(int cols,int ld,int rd,int full){
    if(cols==full)return 1;
    int avail=full&~(cols|ld|rd),cnt=0;
    while(avail){int bit=avail&(-avail);avail-=bit;
        cnt+=bt(cols|bit,(ld|bit)<<1,(rd|bit)>>1,full);}
    return cnt;
}`,`int bt(int cols,int ld,int rd,int full){
    if(cols==full)return 1;
    int avail=full&~(cols|ld|rd),cnt=0;
    while(avail!=0){int bit=avail&(-avail);avail-=bit;
        cnt+=bt(cols|bit,(ld|bit)<<1,(rd|bit)>>1,full);}
    return cnt;
}`),subsets:g(`function subsets(nums) {
  const res=[[]];
  function bt(i, cur){
    if(i===nums.length){res.push([...cur]);return;}
    bt(i+1, [...cur, nums[i]]); // include
    bt(i+1, cur);               // exclude
  }
  bt(0,[]); return res;
}
// 2^n subsets`,`def subsets(nums):
    res=[[]]
    def bt(i,cur):
        if i==len(nums): res.append(cur[:]); return
        cur.append(nums[i]); bt(i+1,cur)
        cur.pop(); bt(i+1,cur)
    bt(0,[]);return res`,`void bt(vector<int>& n,int i,vector<int>& cur,vector<vector<int>>& res){
    if(i==n.size()){res.push_back(cur);return;}
    cur.push_back(n[i]);bt(n,i+1,cur,res);
    cur.pop_back();bt(n,i+1,cur,res);
}`,`void bt(int[] n,int i,List<Integer> cur,List<List<Integer>> res){
    if(i==n.length){res.add(new ArrayList<>(cur));return;}
    cur.add(n[i]);bt(n,i+1,cur,res);
    cur.remove(cur.size()-1);bt(n,i+1,cur,res);
}`)},Et={patBrute:g(`function search(text, pat) {
  const n=text.length, m=pat.length;
  const res=[];
  for(let i=0;i<=n-m;i++){
    let j=0;
    while(j<m && text[i+j]===pat[j]) j++;
    if(j===m) res.push(i);
  }
  return res; // O(nm)
}`,`def search(text,pat):
    n,m,res=len(text),len(pat),[]
    for i in range(n-m+1):
        if text[i:i+m]==pat: res.append(i)
    return res  # O(nm)`,`vector<int> search(string t,string p){
    int n=t.size(),m=p.size();
    vector<int> res;
    for(int i=0;i<=n-m;i++){
        int j=0;
        while(j<m&&t[i+j]==p[j])j++;
        if(j==m)res.push_back(i);
    }return res;
}`,`List<Integer> search(String t,String p){
    int n=t.length(),m=p.length();
    List<Integer> res=new ArrayList<>();
    for(int i=0;i<=n-m;i++){
        int j=0;
        while(j<m&&t.charAt(i+j)==p.charAt(j))j++;
        if(j==m)res.add(i);
    }return res;
}`),kmp:g(`function kmpSearch(text, pat) {
  const lps = buildLPS(pat);
  const res=[]; let i=0,j=0;
  while(i<text.length){
    if(text[i]===pat[j]){i++;j++;}
    if(j===pat.length){res.push(i-j);j=lps[j-1];}
    else if(i<text.length&&text[i]!==pat[j])
      j>0 ? j=lps[j-1] : i++;
  }
  return res; // O(n+m)!
}`,`def kmp_search(text,pat):
    lps=build_lps(pat)
    res,i,j=[],0,0
    while i<len(text):
        if text[i]==pat[j]: i+=1;j+=1
        if j==len(pat): res.append(i-j);j=lps[j-1]
        elif i<len(text) and text[i]!=pat[j]:
            j=lps[j-1] if j>0 else (i:=i+1,0)[1]
    return res  # O(n+m)`,`vector<int> kmpSearch(string t,string p){
    vector<int> lps=buildLPS(p),res;
    int i=0,j=0;
    while(i<t.size()){
        if(t[i]==p[j]){i++;j++;}
        if(j==p.size()){res.push_back(i-j);j=lps[j-1];}
        else if(i<t.size()&&t[i]!=p[j])
            j>0?j=lps[j-1]:i++;
    }return res;
}`,`List<Integer> kmpSearch(String t,String p){
    int[] lps=buildLPS(p);
    List<Integer> res=new ArrayList<>();
    int i=0,j=0;
    while(i<t.length()){
        if(t.charAt(i)==p.charAt(j)){i++;j++;}
        if(j==p.length()){res.add(i-j);j=lps[j-1];}
        else if(i<t.length()&&t.charAt(i)!=p.charAt(j))
            if(j>0)j=lps[j-1]; else i++;
    }return res;
}`)},Dt={maxSumBrute:g(`function maxSumK(arr, k) {
  let max=-Infinity;
  for(let i=0;i<=arr.length-k;i++){
    let sum=0;
    for(let j=i;j<i+k;j++) sum+=arr[j]; // O(nk)
    max=Math.max(max,sum);
  }
  return max;
}`,`def max_sum_k(arr,k):
    mx=float('-inf')
    for i in range(len(arr)-k+1):
        mx=max(mx,sum(arr[i:i+k]))  # O(nk)
    return mx`,`int maxSumK(int a[],int n,int k){
    int mx=INT_MIN;
    for(int i=0;i<=n-k;i++){
        int s=0;
        for(int j=i;j<i+k;j++)s+=a[j];
        mx=max(mx,s);
    }return mx;
}`,`int maxSumK(int[] a,int k){
    int mx=Integer.MIN_VALUE;
    for(int i=0;i<=a.length-k;i++){
        int s=0;
        for(int j=i;j<i+k;j++)s+=a[j];
        mx=Math.max(mx,s);
    }return mx;
}`),maxSumSlide:g(`function maxSumK(arr, k) {
  let sum=0;
  for(let i=0;i<k;i++) sum+=arr[i];
  let max=sum;
  for(let i=k;i<arr.length;i++){
    sum+=arr[i]-arr[i-k]; // slide!
    max=Math.max(max,sum);
  }
  return max; // O(n) single pass!
}`,`def max_sum_k(arr,k):
    s=sum(arr[:k]);mx=s
    for i in range(k,len(arr)):
        s+=arr[i]-arr[i-k]  # slide!
        mx=max(mx,s)
    return mx  # O(n)`,`int maxSumK(int a[],int n,int k){
    int s=0;
    for(int i=0;i<k;i++)s+=a[i];
    int mx=s;
    for(int i=k;i<n;i++){
        s+=a[i]-a[i-k];
        mx=max(mx,s);
    }return mx;
}`,`int maxSumK(int[] a,int k){
    int s=0;
    for(int i=0;i<k;i++)s+=a[i];
    int mx=s;
    for(int i=k;i<a.length;i++){
        s+=a[i]-a[i-k];
        mx=Math.max(mx,s);
    }return mx;
}`)},Ot={actBrute:g(`// Brute: try all subsets
function activitySelection(acts) {
  let best=[];
  for(let mask=0;mask<(1<<acts.length);mask++){
    const sel=acts.filter((_,i)=>mask>>i&1);
    if(isValid(sel) && sel.length>best.length)
      best=sel;
  }
  return best; // O(2^n)
}`,`def activity_brute(acts):
    best=[]
    for mask in range(1<<len(acts)):
        sel=[acts[i] for i in range(len(acts)) if mask>>i&1]
        if is_valid(sel) and len(sel)>len(best):
            best=sel
    return best  # O(2^n)`,`// O(2^n) brute force
vector<Activity> actBrute(vector<Activity>& a){
    int n=a.size();vector<Activity> best;
    for(int m=0;m<(1<<n);m++){
        vector<Activity> sel;
        for(int i=0;i<n;i++) if(m>>i&1)sel.push_back(a[i]);
        if(isValid(sel)&&sel.size()>best.size())best=sel;
    }return best;
}`,`// O(2^n)
List<Activity> actBrute(List<Activity> a){
    List<Activity> best=new ArrayList<>();
    for(int m=0;m<(1<<a.size());m++){
        List<Activity> sel=new ArrayList<>();
        for(int i=0;i<a.size();i++) if((m>>i&1)!=0)sel.add(a.get(i));
        if(isValid(sel)&&sel.size()>best.size())best=new ArrayList<>(sel);
    }return best;
}`),actGreedy:g(`function activitySelection(acts) {
  acts.sort((a,b)=>a.end-b.end); // sort by end time!
  const selected=[acts[0]];
  let lastEnd=acts[0].end;
  for(let i=1;i<acts.length;i++){
    if(acts[i].start>=lastEnd){
      selected.push(acts[i]);
      lastEnd=acts[i].end;
    }
  }
  return selected; // O(n log n)
}`,`def activity_selection(acts):
    acts.sort(key=lambda a:a['end'])
    selected=[acts[0]];last=acts[0]['end']
    for a in acts[1:]:
        if a['start']>=last:
            selected.append(a);last=a['end']
    return selected  # O(n log n)`,`vector<Activity> actGreedy(vector<Activity> a){
    sort(a.begin(),a.end(),[](auto& x,auto& y){return x.e<y.e;});
    vector<Activity> res={a[0]};int last=a[0].e;
    for(int i=1;i<a.size();i++)
        if(a[i].s>=last){res.push_back(a[i]);last=a[i].e;}
    return res;
}`,`List<int[]> actGreedy(List<int[]> a){
    a.sort((x,y)->x[1]-y[1]);
    List<int[]> res=new ArrayList<>();res.add(a.get(0));
    int last=a.get(0)[1];
    for(int i=1;i<a.size();i++)
        if(a.get(i)[0]>=last){res.add(a.get(i));last=a.get(i)[1];}
    return res;
}`)},kt={twoSum:g(`function twoSumSorted(arr, target) {
  let l=0, r=arr.length-1;
  while(l<r){
    const s=arr[l]+arr[r];
    if(s===target) return [l,r];
    s<target ? l++ : r--;
  }
  return null; // O(n) after O(n log n) sort
}`,`def two_sum_sorted(arr,target):
    l,r=0,len(arr)-1
    while l<r:
        s=arr[l]+arr[r]
        if s==target: return [l,r]
        if s<target: l+=1
        else: r-=1
    return None`,`pair<int,int> twoSum(vector<int>& a,int t){
    int l=0,r=a.size()-1;
    while(l<r){int s=a[l]+a[r];if(s==t)return{l,r};if(s<t)l++;else r--;}
    return{-1,-1};
}`,`int[] twoSum(int[] a,int t){
    int l=0,r=a.length-1;
    while(l<r){int s=a[l]+a[r];if(s==t)return new int[]{l,r};if(s<t)l++;else r--;}
    return new int[]{};
}`),removeDups:g(`function removeDuplicates(arr) {
  let slow=0;
  for(let fast=1;fast<arr.length;fast++){
    if(arr[fast]!==arr[slow]){
      slow++;
      arr[slow]=arr[fast];
    }
  }
  return slow+1; // length of unique part
}
// O(n) in-place!`,`def remove_dups(arr):
    slow=0
    for fast in range(1,len(arr)):
        if arr[fast]!=arr[slow]:
            slow+=1;arr[slow]=arr[fast]
    return slow+1  # O(n)`,`int removeDups(int a[],int n){
    int slow=0;
    for(int fast=1;fast<n;fast++)
        if(a[fast]!=a[slow]){slow++;a[slow]=a[fast];}
    return slow+1;
}`,`int removeDups(int[] a){
    int slow=0;
    for(int fast=1;fast<a.length;fast++)
        if(a[fast]!=a[slow]){slow++;a[slow]=a[fast];}
    return slow+1;
}`),containerWater:g(`function maxWater(h) {
  let l=0, r=h.length-1, max=0;
  while(l<r){
    max=Math.max(max, Math.min(h[l],h[r])*(r-l));
    h[l]<h[r] ? l++ : r--;
  }
  return max; // O(n) two pointer!
}`,`def max_water(h):
    l,r,mx=0,len(h)-1,0
    while l<r:
        mx=max(mx,min(h[l],h[r])*(r-l))
        if h[l]<h[r]: l+=1
        else: r-=1
    return mx`,`int maxWater(vector<int>& h){
    int l=0,r=h.size()-1,mx=0;
    while(l<r){mx=max(mx,min(h[l],h[r])*(r-l));if(h[l]<h[r])l++;else r--;}
    return mx;
}`,`int maxWater(int[] h){
    int l=0,r=h.length-1,mx=0;
    while(l<r){mx=Math.max(mx,Math.min(h[l],h[r])*(r-l));if(h[l]<h[r])l++;else r--;}
    return mx;
}`)},At={countBrute:g(`function countBits(n) {
  let count=0;
  while(n>0){
    count += n & 1; // check last bit
    n >>= 1;        // shift right
  }
  return count;
}
// O(log n) — bits in n`,`def count_bits(n):
    count=0
    while n>0:
        count+=n&1  # check last bit
        n>>=1       # shift right
    return count
# O(log n)`,`int countBits(int n){
    int c=0;
    while(n>0){c+=n&1;n>>=1;}
    return c;
}
// O(log n)`,`int countBits(int n){
    int c=0;
    while(n>0){c+=n&1;n>>=1;}
    return c;
}
// O(log n)`),countKernighan:g(`function countBits(n) {
  let count=0;
  while(n>0){
    n = n & (n-1); // clear lowest set bit!
    count++;
  }
  return count;
}
// Loops ONCE per set bit — faster!`,`def count_bits(n):
    count=0
    while n>0:
        n=n&(n-1)  # clear lowest set bit!
        count+=1
    return count
# Only loops per set bit`,`int countBits(int n){
    int c=0;
    while(n){n&=(n-1);c++;}
    return c;
}
// One iteration per set bit`,`int countBits(int n){
    int c=0;
    while(n!=0){n&=(n-1);c++;}
    return c;
}
// Brian Kernighan`),countDP:g(`function countBitsAll(n) {
  const dp = Array(n+1).fill(0);
  for(let i=1;i<=n;i++)
    dp[i] = dp[i>>1] + (i&1); // DP!
  return dp;
}
// O(n) — compute all at once`,`def count_bits_all(n):
    dp=[0]*(n+1)
    for i in range(1,n+1):
        dp[i]=dp[i>>1]+(i&1)  # DP!
    return dp
# O(n) all at once`,`vector<int> countBitsAll(int n){
    vector<int> dp(n+1,0);
    for(int i=1;i<=n;i++)
        dp[i]=dp[i>>1]+(i&1);
    return dp;
}
// O(n) all counts!`,`int[] countBitsAll(int n){
    int[] dp=new int[n+1];
    for(int i=1;i<=n;i++)
        dp[i]=dp[i>>1]+(i&1);
    return dp;
}
// O(n)`)};function jt(e){let t={};return e.forEach((n,r)=>{t[r]={id:r,val:n,next:r<e.length-1?r+1:null}}),{nodes:t,head:e.length?0:null}}function Mt(e,t,n,r,i,a,o){return{nodes:{...e},head:t,pointers:{...n},highlighted:[...r],visited:[...i],msg:a,ln:o}}function Nt(){let{nodes:e,head:t}=jt([1,4,3,2,5]),n={...e},r=[Mt(n,t,{head:t},[],[],`Reverse linked list iteratively`,0)],i=null,a=t;for(;a!==null;){let e=n[a].next;r.push(Mt(n,t,{prev:i??`∅`,cur:a,next:e??`∅`},[a],[],`Save next=${e??`null`}, point ${n[a].val}→${i===null?`null`:n[i].val}`,2)),n[a]={...n[a],next:i},r.push(Mt(n,t,{prev:a,cur:e??`∅`},[a],[a],`Reversed: ${n[a].val}→${i===null?`null`:n[i].val}`,3)),i=a,a=e}return r.push(Mt(n,i,{head:i},[],[...Object.keys(n).map(Number)],`✓ List reversed! New head=${n[i].val}`,5)),r}function Pt(){let{nodes:e,head:t}=jt([1,4,3,2,5]),n={...e},r=[Mt(n,t,{head:t},[],[],`Reverse recursively: go to end first`,0)],i=null;function a(e){if(r.push(Mt(n,t,{cur:e},[e],[],`Recurse to `+n[e].val,2)),n[e].next===null)return i=e,r.push(Mt(n,t,{newHead:e},[e],[e],`Base: `+n[e].val+` is new head`,3)),e;let o=n[e].next;a(o),n[o]={...n[o],next:e},n[e]={...n[e],next:null},r.push(Mt(n,i,{newHead:i},[e,o],[o],`${n[o].val}→${n[e].val} reversed`,4))}return a(t),r.push(Mt(n,i,{head:i},[],[...Object.keys(n).map(Number)],`✓ Reversed recursively!`,6)),r}function Ft(){let{nodes:e}=jt([3,1,4,1,5,9,2]),t={...e};t[6]={...t[6],next:2};let n=[Mt(t,0,{slow:0,fast:0},[],[],`Floyd's: slow moves 1, fast moves 2`,0)],r=0,i=0;for(let e=0;e<10;e++){let e=t[r]?.next,a=t[i]?.next,o=a===null?null:t[a]?.next;if(e===null||a===null||o===null)break;if(r=e,i=o,n.push(Mt(t,0,{slow:r,fast:i},[r,i],[],`slow=`+t[r].val+` fast=`+t[i].val,3)),r===i){n.push(Mt(t,0,{slow:r,fast:i,MEET:r},[r],[r],`⚠ Cycle detected! slow==fast at `+t[r].val,4));break}}return n}function It(){let e={},t={};[1,3,5].forEach((t,n)=>{e[n]={id:n,val:t,next:n<2?n+1:null}}),[2,4,6].forEach((e,n)=>{t[n+10]={id:n+10,val:e,next:n<2?n+11:null}});let n={...e,...t},r={id:99,val:`*`,next:null},i=[{nodes:{...n,99:r},head:99,pointers:{l:0,r:10},highlighted:[],visited:[],msg:`Merge two sorted lists [1,3,5] & [2,4,6]`,ln:0}],a=0,o=10,s=99,c={...n,99:r};for(;a!==null&&o!==null;){let n=e[a]?.val,r=t[o]?.val;i.push({nodes:{...c},head:99,pointers:{l:a??`∅`,r:o??`∅`,cur:s},highlighted:[a,o].filter(e=>e!==null),visited:[],msg:`Compare ${n} vs ${r}`,ln:3}),n<=r?(c[s]={...c[s],next:a},s=a,a=e[a].next,i.push({nodes:{...c},head:99,pointers:{l:a??`∅`,r:o,cur:s},highlighted:[s],visited:[s],msg:`Take ${n} from left`,ln:4})):(c[s]={...c[s],next:o},s=o,o=t[o].next,i.push({nodes:{...c},head:99,pointers:{l:a,r:o??`∅`,cur:s},highlighted:[s],visited:[s],msg:`Take ${r} from right`,ln:5}))}return a&&(c[s]={...c[s],next:a}),o&&(c[s]={...c[s],next:o}),i.push({nodes:{...c},head:99,pointers:{},highlighted:[],visited:[...Object.keys(c).map(Number)],msg:`✓ Merged: [1,2,3,4,5,6]`,ln:7}),i}function Lt(e=48,t=18){let n=[{a:e,b:t,cur:-1,gcd:-1,nums:[],msg:`GCD(${e},${t}): check all divisors from 1 to min`,ln:0}],r=1;for(let i=1;i<=Math.min(e,t);i++)n.push({a:e,b:t,cur:i,gcd:r,nums:[],msg:`Is ${i} a divisor of both ${e} and ${t}?`,ln:2}),e%i===0&&t%i===0&&(r=i,n.push({a:e,b:t,cur:i,gcd:r,nums:[],msg:`Yes! GCD so far = ${r}`,ln:3}));return n.push({a:e,b:t,cur:-1,gcd:r,nums:[],msg:`✓ GCD(${e},${t}) = ${r}`,ln:5}),n}function Rt(e=48,t=18){let n=[{a:e,b:t,cur:e,gcd:-1,nums:[e,t],msg:`Euclidean: GCD(${e},${t}) = GCD(${t}, ${e}%${t})`,ln:0}],r=e,i=t;for(;i!==0;){let a=r%i;n.push({a:e,b:t,cur:a,gcd:-1,nums:[r,i],msg:`GCD(${r},${i}): ${r} % ${i} = ${a}`,ln:2}),r=i,i=a,n.push({a:e,b:t,cur:i,gcd:i===0?r:-1,nums:[r,i],msg:i===0?`GCD found = ${r}`:`Now compute GCD(${r},${i})`,ln:3})}return n.push({a:e,b:t,cur:-1,gcd:r,nums:[r,0],msg:`✓ GCD(${e},${t}) = ${r} — O(log min(a,b))`,ln:5}),n}function zt(e=30){let t=Array(e+1).fill(!0);t[0]=t[1]=!1;let n=[{nums:[...t],cur:-1,factor:-1,msg:`Sieve of Eratosthenes up to ${e}`,ln:0}];for(let r=2;r*r<=e;r++)if(t[r]){n.push({nums:[...t],cur:r,factor:r,msg:`${r} is prime — mark all multiples`,ln:2});for(let i=r*r;i<=e;i+=r)t[i]=!1,n.push({nums:[...t],cur:i,factor:r,msg:`Mark ${i}=${r}×${i/r} as composite`,ln:3})}let r=t.map((e,t)=>e?t:-1).filter(e=>e>1);return n.push({nums:[...t],cur:-1,factor:-1,msg:`✓ Primes: [${r}]`,ln:5}),n}function Bt(e=2,t=10){let n=[{a:e,b:t,cur:e,gcd:-1,nums:[e,t],msg:`Fast Power: ${e}^${t} using binary exponentiation`,ln:0}],r=1,i=e,a=t;for(;a>0;)n.push({a:e,b:t,cur:a,gcd:r,nums:[i,a],msg:`e=${a}, ${a}&1=${a&1}: ${a&1?`multiply result`:`skip`}`,ln:2}),a&1&&(r*=i,n.push({a:e,b:t,cur:a,gcd:r,nums:[i,a],msg:`result *= ${i} = ${r}`,ln:3})),i*=i,a>>=1,n.push({a:e,b:t,cur:a,gcd:r,nums:[i,a],msg:`Square base: ${i}, halve exp: ${a}`,ln:4});return n.push({a:e,b:t,cur:-1,gcd:r,nums:[r],msg:`✓ ${e}^${t} = ${r} — O(log n)!`,ln:6}),n}function Vt(e=`({[]})`){let t=[{str:e,stack:[],idx:-1,valid:null,msg:`Valid Parentheses: "${e}" — brute check`,ln:0}];function n(e){if(e.length===0)return!0;for(let r=0;r<e.length-1;r++){let i=e[r]+e[r+1];if(i===`()`||i===`{}`||i===`[]`)return t.push({str:e,stack:[],idx:r,valid:null,msg:`Found pair "${i}" at ${r} — remove and repeat`,ln:2}),n(e.slice(0,r)+e.slice(r+2))}return!1}let r=n(e);return t.push({str:e,stack:[],idx:-1,valid:r,msg:`✓ "${e}" is ${r?`VALID`:`INVALID`}`,ln:4}),t}function Ht(e=`({[]})`){let t={"(":`)`,"[":`]`,"{":`}`},n=new Set(`([{`),r=[],i=[];i.push({str:e.split(``),stack:[],idx:-1,valid:null,msg:`Stack: match brackets as we scan`,ln:0});for(let a=0;a<e.length;a++){let o=e[a];if(i.push({str:e.split(``),stack:[...r],idx:a,valid:null,msg:`Char '${o}': ${n.has(o)?`push to stack`:`check against top`}`,ln:2}),n.has(o))r.push(o),i.push({str:e.split(``),stack:[...r],idx:a,valid:null,msg:`Pushed '${o}', stack=[${r}]`,ln:3});else{let n=r[r.length-1];if(!r.length||t[n]!==o)return i.push({str:e.split(``),stack:[...r],idx:a,valid:!1,msg:`✗ Mismatch: expected '${t[n]}' got '${o}'`,ln:5}),i;r.pop(),i.push({str:e.split(``),stack:[...r],idx:a,valid:null,msg:`Matched '${n}${o}', stack=[${r}]`,ln:4})}}let a=r.length===0;return i.push({str:e.split(``),stack:[...r],idx:-1,valid:a,msg:`✓ "${e}" is ${a?`VALID`:`INVALID — unmatched brackets`}`,ln:7}),i}function Ut(e){let t=e,n=t.length,r=Array(n).fill(-1),i=[];i.push({a:t,stack:[],result:[...r],idx:-1,msg:`Next Greater Element — brute O(n²)`,ln:0});for(let e=0;e<n;e++){i.push({a:t,stack:[],result:[...r],idx:e,msg:`Find next greater for a[${e}]=${t[e]}`,ln:2});for(let a=e+1;a<n;a++)if(i.push({a:t,stack:[a],result:[...r],idx:e,msg:`a[${a}]=${t[a]} > a[${e}]=${t[e]}?`,ln:3}),t[a]>t[e]){r[e]=t[a],i.push({a:t,stack:[a],result:[...r],idx:e,msg:`Found! NGE[${e}]=${t[a]}`,ln:4});break}}return i.push({a:t,stack:[],result:[...r],idx:-1,msg:`✓ NGE: [${r}]`,ln:6}),i}function Wt(e){let t=e,n=t.length,r=Array(n).fill(-1),i=[],a=[];a.push({a:t,stack:[...i],result:[...r],idx:-1,msg:`NGE with Monotonic Stack O(n)`,ln:0});for(let e=0;e<n;e++){for(a.push({a:t,stack:[...i],result:[...r],idx:e,msg:`Process a[${e}]=${t[e]}`,ln:2});i.length&&t[i[i.length-1]]<t[e];){let n=i.pop();r[n]=t[e],a.push({a:t,stack:[...i],result:[...r],idx:e,msg:`NGE[${n}]=${t[e]} (popped ${t[n]}<${t[e]})`,ln:3})}i.push(e),a.push({a:t,stack:[...i],result:[...r],idx:e,msg:`Push index ${e}, stack=[${i.map(e=>t[e])}]`,ln:4})}return a.push({a:t,stack:[],result:[...r],idx:-1,msg:`✓ NGE: [${r}] — single pass!`,ln:6}),a}function Gt(){let e=[`push 3`,`push 5`,`push 2`,`push 1`,`pop`,`getMin`,`pop`,`getMin`],t=[],n=[],r=[];r.push({a:t.map(e=>e.v),stack:[...t],result:[...n.map(e=>e.v)],idx:-1,msg:`Min Stack: O(1) push/pop/getMin`,ln:0});for(let i of e)if(i.startsWith(`push`)){let e=+i.split(` `)[1];t.push({v:e});let a=n.length?Math.min(e,n[n.length-1].v):e;n.push({v:a}),r.push({a:t.map(e=>e.v),stack:[...t.map(e=>e.v)],result:[...n.map(e=>e.v)],idx:e,msg:`push(${e}): stack=[${t.map(e=>e.v)}], minStack=[${n.map(e=>e.v)}]`,ln:2})}else if(i===`pop`){let e=t.pop()?.v;n.pop(),r.push({a:t.map(e=>e.v),stack:[...t.map(e=>e.v)],result:[...n.map(e=>e.v)],idx:-1,msg:`pop() removed ${e}: stack=[${t.map(e=>e.v)}]`,ln:4})}else if(i===`getMin`){let e=n[n.length-1]?.v;r.push({a:t.map(e=>e.v),stack:[...t.map(e=>e.v)],result:[...n.map(e=>e.v)],idx:e,msg:`getMin() = ${e} — O(1)!`,ln:6})}return r}var Kt=`ABCBD`,qt=`BDCAB`;function Jt(e=Kt,t=qt){let n=0,r=[];r.push({s1:e,s2:t,table:null,i:-1,j:-1,result:null,msg:`LCS("${e}","${t}") — recursive O(2^n)`,ln:0});function i(a,o){if(n++,r.push({s1:e,s2:t,table:null,i:a,j:o,result:null,msg:`lcs(${a},${o}): compare '${e[a-1]||`∅`}' vs '${t[o-1]||`∅`}' — calls:${n}`,ln:2}),a===0||o===0)return 0;if(e[a-1]===t[o-1]){let n=1+i(a-1,o-1);return r.push({s1:e,s2:t,table:null,i:a,j:o,result:n,msg:`Match! +1 → ${n}`,ln:3}),n}let s=Math.max(i(a-1,o),i(a,o-1));return r.push({s1:e,s2:t,table:null,i:a,j:o,result:s,msg:`No match: max=${s}`,ln:4}),s}let a=i(Math.min(e.length,5),Math.min(t.length,5));return r.push({s1:e,s2:t,table:null,i:-1,j:-1,result:a,msg:`✓ LCS="${a}" — ${n} calls! O(2^n)`,ln:6}),r}function Yt(e=Kt,t=qt){let n=e.length,r=t.length,i={},a=[],o=()=>Array.from({length:n+1},(e,t)=>Array.from({length:r+1},(e,n)=>i[`${t},${n}`]??null));a.push({s1:e,s2:t,table:o(),i:-1,j:-1,result:null,msg:`LCS Memoization — cache subproblems`,ln:0});function s(n,r){let c=`${n},${r}`;return c in i?(a.push({s1:e,s2:t,table:o(),i:n,j:r,result:i[c],msg:`Cache hit! memo[${n},${r}]=${i[c]}`,ln:1}),i[c]):n===0||r===0?(i[c]=0,0):(a.push({s1:e,s2:t,table:o(),i:n,j:r,result:null,msg:`Compute lcs(${n},${r}): '${e[n-1]}' vs '${t[r-1]}'`,ln:3}),e[n-1]===t[r-1]?i[c]=1+s(n-1,r-1):i[c]=Math.max(s(n-1,r),s(n,r-1)),a.push({s1:e,s2:t,table:o(),i:n,j:r,result:i[c],msg:`memo[${n},${r}]=${i[c]}`,ln:4}),i[c])}let c=s(n,r);return a.push({s1:e,s2:t,table:o(),i:-1,j:-1,result:c,msg:`✓ LCS length=${c} — only ${Object.keys(i).length} unique subproblems`,ln:6}),a}function Xt(e=Kt,t=qt){let n=e.length,r=t.length,i=Array.from({length:n+1},()=>Array(r+1).fill(0)),a=[];a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:0,j:0,result:null,msg:`LCS DP table (${n+1}×${r+1}): fill bottom-up`,ln:0});for(let o=1;o<=n;o++)for(let n=1;n<=r;n++)a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`Compare s1[${o-1}]='${e[o-1]}' vs s2[${n-1}]='${t[n-1]}'`,ln:3}),e[o-1]===t[n-1]?(i[o][n]=i[o-1][n-1]+1,a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`Match! dp[${o}][${n}]=dp[${o-1}][${n-1}]+1=${i[o][n]}`,ln:4})):(i[o][n]=Math.max(i[o-1][n],i[o][n-1]),a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`No match: dp[${o}][${n}]=max(${i[o-1][n]},${i[o][n-1]})=${i[o][n]}`,ln:5}));return a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:-1,j:-1,result:i[n][r],msg:`✓ LCS length=${i[n][r]} — O(mn) time+space`,ln:7}),a}var Zt=`CAKE`,Qt=`LAKE`;function $t(e=Zt,t=Qt){let n=0,r=[];r.push({s1:e,s2:t,table:null,i:-1,j:-1,result:null,msg:`Edit Distance: min ops to convert "${e}"→"${t}"`,ln:0});function i(a,o){if(n++,a===0)return o;if(o===0)return a;if(r.push({s1:e,s2:t,table:null,i:a,j:o,result:null,msg:`ed(${a},${o}): '${e[a-1]}' vs '${t[o-1]}' — calls:${n}`,ln:2}),e[a-1]===t[o-1])return i(a-1,o-1);let s=1+Math.min(i(a-1,o),i(a,o-1),i(a-1,o-1));return r.push({s1:e,s2:t,table:null,i:a,j:o,result:s,msg:`Insert/Delete/Replace → ${s}`,ln:3}),s}let a=i(e.length,t.length);return r.push({s1:e,s2:t,table:null,i:-1,j:-1,result:a,msg:`✓ Edit distance=${a} — ${n} calls`,ln:5}),r}function en(e=Zt,t=Qt){let n=e.length,r=t.length,i={},a=[],o=()=>Array.from({length:n+1},(e,t)=>Array.from({length:r+1},(e,n)=>i[`${t},${n}`]??null));a.push({s1:e,s2:t,table:o(),i:-1,j:-1,result:null,msg:`Edit Distance with memoization`,ln:0});function s(n,r){let c=`${n},${r}`;return c in i?i[c]:n===0?i[c]=r:r===0?i[c]=n:(a.push({s1:e,s2:t,table:o(),i:n,j:r,result:null,msg:`ed(${n},${r}): '${e[n-1]}' vs '${t[r-1]}'`,ln:3}),e[n-1]===t[r-1]?i[c]=s(n-1,r-1):i[c]=1+Math.min(s(n-1,r),s(n,r-1),s(n-1,r-1)),a.push({s1:e,s2:t,table:o(),i:n,j:r,result:i[c],msg:`Cached ed(${n},${r})=${i[c]}`,ln:4}),i[c])}let c=s(n,r);return a.push({s1:e,s2:t,table:o(),i:-1,j:-1,result:c,msg:`✓ Edit distance=${c}`,ln:6}),a}function tn(e=Zt,t=Qt){let n=e.length,r=t.length,i=Array.from({length:n+1},(e,t)=>Array.from({length:r+1},(e,n)=>t===0?n:n===0?t:0)),a=[{s1:e,s2:t,table:i.map(e=>[...e]),i:0,j:0,result:null,msg:`Edit Distance table: base cases set (row0=0..n, col0=0..m)`,ln:0}];for(let o=1;o<=n;o++)for(let n=1;n<=r;n++)a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`'${e[o-1]}' vs '${t[n-1]}': ${e[o-1]===t[n-1]?`match→copy diagonal`:`min(del,ins,replace)`}`,ln:3}),e[o-1]===t[n-1]?i[o][n]=i[o-1][n-1]:i[o][n]=1+Math.min(i[o-1][n],i[o][n-1],i[o-1][n-1]),a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`dp[${o}][${n}]=${i[o][n]} (del:${i[o-1][n]},ins:${i[o][n-1]},rep:${i[o-1][n-1]})`,ln:5});return a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:-1,j:-1,result:i[n][r],msg:`✓ Edit distance="${i[n][r]}"`,ln:7}),a}var nn=[10,9,2,5,3,7,18,6];function rn(e=nn){let t=e.length,n=[],r=[];n.push({a:e,dp:Array(t).fill(1),cur:-1,prev:-1,result:null,msg:`LIS brute: check all subsequences O(2^n)`,ln:0});function i(a,o,s){if(a===t){(s.length>r.length||r.length===0)&&(r.length=0,s.forEach(e=>r.push(e))),n.push({a:e,dp:Array(t).fill(1),cur:a,prev:o,result:s.length,msg:`Subseq: [${s}] len=${s.length}`,ln:2});return}(o===-1||e[a]>e[o])&&i(a+1,a,[...s,e[a]]),i(a+1,o,s)}return i(0,-1,[]),n.push({a:e,dp:Array(t).fill(1),cur:-1,prev:-1,result:r.length,msg:`✓ LIS=[${r}] length=${r.length}`,ln:4}),n}function an(e=nn){let t=e.length,n=Array(t).fill(1),r=[];r.push({a:e,dp:[...n],cur:-1,prev:-1,result:null,msg:`LIS DP: dp[i]=longest ending at arr[i]`,ln:0});let i=1;for(let a=1;a<t;a++){r.push({a:e,dp:[...n],cur:a,prev:-1,result:null,msg:`Find LIS ending at a[${a}]=${e[a]}`,ln:2});for(let t=0;t<a;t++)r.push({a:e,dp:[...n],cur:a,prev:t,result:null,msg:`a[${t}]=${e[t]}<a[${a}]=${e[a]}? → extend dp[${t}]+1`,ln:3}),e[t]<e[a]&&n[t]+1>n[a]&&(n[a]=n[t]+1,r.push({a:e,dp:[...n],cur:a,prev:t,result:null,msg:`dp[${a}]=${n[a]}`,ln:4}));i=Math.max(i,n[a])}return r.push({a:e,dp:[...n],cur:-1,prev:-1,result:i,msg:`✓ LIS length=${i} — O(n²)`,ln:6}),r}function on(e=nn){let t=[],n=[];n.push({a:e,dp:[...t],cur:-1,prev:-1,result:null,msg:`LIS binary search (Patience Sort): O(n log n)`,ln:0});for(let r=0;r<e.length;r++){let i=0,a=t.length;for(n.push({a:e,dp:[...t],cur:r,prev:-1,result:null,msg:`Process ${e[r]}: binary search in tails=[${t}]`,ln:2});i<a;){let n=i+a>>1;t[n]<e[r]?i=n+1:a=n}t[i]=e[r],n.push({a:e,dp:[...t],cur:r,prev:i,result:null,msg:`Place ${e[r]} at tails[${i}]: [${t}]`,ln:3})}return n.push({a:e,dp:[...t],cur:-1,prev:-1,result:t.length,msg:`✓ LIS length=${t.length} — O(n log n)!`,ln:5}),n}var sn=[{w:2,v:6},{w:2,v:10},{w:3,v:12}],cn=5;function ln(){let e=sn,t=cn,n=0,r=[];r.push({items:e,cap:t,table:null,i:-1,j:-1,result:null,msg:`0/1 Knapsack brute: items=${JSON.stringify(e)} cap=${t}`,ln:0});function i(a,o){if(n++,a===0||o===0)return 0;if(r.push({items:e,cap:t,table:null,i:a,j:o,result:null,msg:`ks(${a},${o}): item w=${e[a-1].w} v=${e[a-1].v} — calls:${n}`,ln:2}),e[a-1].w>o)return i(a-1,o);let s=Math.max(i(a-1,o),e[a-1].v+i(a-1,o-e[a-1].w));return r.push({items:e,cap:t,table:null,i:a,j:o,result:s,msg:`ks(${a},${o})=${s}`,ln:3}),s}let a=i(e.length,t);return r.push({items:e,cap:t,table:null,i:-1,j:-1,result:a,msg:`✓ Max value=${a} — ${n} recursive calls`,ln:5}),r}function un(){let e=sn,t=cn,n=e.length,r={},i=[],a=()=>Array.from({length:n+1},(e,n)=>Array.from({length:t+1},(e,t)=>r[`${n},${t}`]??null));i.push({items:e,cap:t,table:a(),i:-1,j:-1,result:null,msg:`Knapsack memoization`,ln:0});function o(n,s){let c=`${n},${s}`;return c in r?(i.push({items:e,cap:t,table:a(),i:n,j:s,result:r[c],msg:`Cache hit! ks(${n},${s})=${r[c]}`,ln:1}),r[c]):n===0||s===0?r[c]=0:(i.push({items:e,cap:t,table:a(),i:n,j:s,result:null,msg:`ks(${n},${s}): item w=${e[n-1].w} v=${e[n-1].v}`,ln:3}),e[n-1].w>s?r[c]=o(n-1,s):r[c]=Math.max(o(n-1,s),e[n-1].v+o(n-1,s-e[n-1].w)),i.push({items:e,cap:t,table:a(),i:n,j:s,result:r[c],msg:`ks(${n},${s})=${r[c]} cached`,ln:4}),r[c])}let s=o(n,t);return i.push({items:e,cap:t,table:a(),i:-1,j:-1,result:s,msg:`✓ Max value=${s} — only ${Object.keys(r).length} unique states`,ln:6}),i}function dn(){let e=sn,t=cn,n=e.length,r=Array.from({length:n+1},()=>Array(t+1).fill(0)),i=[];i.push({items:e,cap:t,table:r.map(e=>[...e]),i:0,j:0,result:null,msg:`Knapsack 2D DP table (${n+1}×${t+1})`,ln:0});for(let a=1;a<=n;a++)for(let n=0;n<=t;n++)i.push({items:e,cap:t,table:r.map(e=>[...e]),i:a,j:n,result:null,msg:`Item ${a} (w=${e[a-1].w},v=${e[a-1].v}), capacity=${n}`,ln:3}),e[a-1].w>n?(r[a][n]=r[a-1][n],i.push({items:e,cap:t,table:r.map(e=>[...e]),i:a,j:n,result:null,msg:`Too heavy: dp[${a}][${n}]=dp[${a-1}][${n}]=${r[a][n]}`,ln:4})):(r[a][n]=Math.max(r[a-1][n],e[a-1].v+r[a-1][n-e[a-1].w]),i.push({items:e,cap:t,table:r.map(e=>[...e]),i:a,j:n,result:null,msg:`max(skip=${r[a-1][n]},take=${e[a-1].v}+${r[a-1][n-e[a-1].w]})=${r[a][n]}`,ln:5}));return i.push({items:e,cap:t,table:r.map(e=>[...e]),i:-1,j:-1,result:r[n][t],msg:`✓ Max value=${r[n][t]} — O(n×W) time`,ln:7}),i}var fn=[`app`,`apple`,`apply`,`apt`,`bat`,`ball`];function pn(e){let t={0:{id:0,char:``,children:{},isEnd:!1,depth:0}},n=1;for(let r of e){let e=0;for(let i of r)t[e].children[i]||(t[n]={id:n,char:i,children:{},isEnd:!1,depth:t[e].depth+1,parent:e,parentChar:i},t[e].children[i]=n,n++),e=t[e].children[i];t[e].isEnd=!0}return{nodes:t,root:0}}function mn(e,t){let n={},r={},i=[t];for(r[t]=0;i.length;){let t=i.shift();Object.values(e[t].children).forEach(e=>{r[e]=r[t]+1,i.push(e)})}let a={};return Object.keys(r).forEach(e=>{let t=r[e];a[t]||(a[t]=[]),a[t].push(+e)}),Object.keys(a).forEach(e=>{let t=a[e],r=t.length;t.forEach((t,i)=>{n[t]={x:(i+1)*(480/(r+1)),y:e*52+30}})}),n}function hn(e,t,n,r,i,a,o){return{nodes:{...e},root:t,positions:mn(e,t),highlighted:n,path:[...r],found:i,msg:a,ln:o}}function gn(){let e=fn,t=[],n={0:{id:0,char:``,children:{},isEnd:!1,depth:0}},r=1;t.push(hn({...n},0,[],[],null,`Trie: insert words one by one`,0));for(let i of e){let e=0,a=[];t.push(hn({...n},0,[],[],null,`Insert "${i}"`,1));for(let o of i)n[e].children[o]?t.push(hn({...n},0,[n[e].children[o]],[...a,n[e].children[o]],null,`'${o}' exists, follow`,2)):(n[r]={id:r,char:o,children:{},isEnd:!1,depth:n[e].depth+1,parent:e},n[e].children[o]=r,t.push(hn({...n},0,[r],[...a,r],null,`Create node '${o}' for "${i}"`,3)),r++),a.push(n[e].children[o]),e=n[e].children[o];n[e].isEnd=!0,t.push(hn({...n},0,[e],[...a],e,`Mark end of "${i}"`,4))}return t.push(hn({...n},0,[],[],null,`✓ Trie built with ${r} nodes for ${e.length} words`,6)),t}function _n(){let e=`apple`,{nodes:t,root:n}=pn(fn),r=[],i=[];i.push(hn(t,n,[],[],null,`Search "${e}" in Trie`,0));let a=n;for(let o of e){if(i.push(hn(t,n,[a],[...r],null,`At node '${t[a].char||`root`}': look for '${o}'`,2)),!t[a].children[o])return i.push(hn(t,n,[a],[...r],null,`'${o}' not found — "${e}" NOT in trie`,4)),i;a=t[a].children[o],r.push(a),i.push(hn(t,n,[a],[...r],null,`Found '${o}', advance`,3))}let o=t[a].isEnd;return i.push(hn(t,n,[a],[...r],o?a:null,`isEnd=${o}: "${e}" ${o?`FOUND ✓`:`exists as prefix only`}`,5)),i}function vn(){let{nodes:e,root:t}=pn(fn),n=[],r=[],i=[];i.push(hn(e,t,[],[],null,`Prefix search: find all words starting with "ap"`,0));let a=t;for(let r of`ap`){if(i.push(hn(e,t,[a],[...n],null,`Navigate to '${r}'`,1)),!e[a].children[r])return i.push(hn(e,t,[a],[...n],null,`No words with prefix "ap"`,3)),i;a=e[a].children[r],n.push(a)}i.push(hn(e,t,[a],[...n],null,`Reached prefix "ap" — DFS to find all endings`,2));function o(a,s){e[a].isEnd&&(r.push(s),i.push(hn(e,t,[a],[...n],a,`Found word: "${s}"`,4))),Object.entries(e[a].children).forEach(([e,t])=>o(t,s+e))}return o(a,`ap`),i.push(hn(e,t,[],[...n],null,`✓ Words with "ap": [${r.join(`, `)}]`,6)),i}var yn=[{id:0,label:`A`,x:80,y:130},{id:1,label:`B`,x:200,y:60},{id:2,label:`C`,x:200,y:200},{id:3,label:`D`,x:320,y:60},{id:4,label:`E`,x:320,y:200},{id:5,label:`F`,x:440,y:130}],bn=[{f:0,t:1,w:1},{f:0,t:2,w:1},{f:1,t:3,w:1},{f:1,t:4,w:1},{f:2,t:4,w:1},{f:3,t:5,w:1},{f:4,t:5,w:1}],xn=yn.map((e,t)=>bn.filter(e=>e.f===t).map(e=>e.t)),Sn=yn.map((e,t)=>bn.filter(e=>e.t===t).length);function Cn(e,t,n,r,i,a){return{nodes:yn,edges:bn,visited:[...e],current:t,queue:[...n],distances:{},path:[...r],msg:i,ln:a}}function wn(){let e=[...Sn],t=[],n=[],r=new Set,i=[];for(let n=0;n<yn.length;n++)e[n]===0&&t.push(n);for(i.push(Cn(r,-1,[...t],[],`Kahn's: add all 0-indegree nodes to queue: [${t.map(e=>yn[e].label)}]`,0));t.length;){let a=t.shift();n.push(a),r.add(a),i.push(Cn(r,a,[...t],[...n],`Process ${yn[a].label}, add to order`,3));for(let o of xn[a])e[o]--,i.push(Cn(r,a,[...t],[...n],`Reduce indeg[${yn[o].label}] to ${e[o]}`,4)),e[o]===0&&(t.push(o),i.push(Cn(r,a,[...t],[...n],`${yn[o].label} now has indeg=0, enqueue`,5)))}return i.push(Cn(r,-1,[],[...n],`✓ Topo order: ${n.map(e=>yn[e].label).join(`→`)}`,7)),i}function Tn(){let e=new Set,t=[],n=[];n.push(Cn(e,-1,[],[],`DFS Topo: run DFS, push to stack after exploring`,0));function r(i){e.add(i),n.push(Cn(e,i,[],[...t],`DFS visit ${yn[i].label}`,2));for(let a of xn[i])e.has(a)||(n.push(Cn(e,i,[a],[...t],`Recurse into ${yn[a].label}`,3)),r(a));t.unshift(i),n.push(Cn(e,-1,[],[...t],`Push ${yn[i].label} to front of result`,4))}for(let t=0;t<yn.length;t++)e.has(t)||r(t);return n.push(Cn(e,-1,[],[...t],`✓ Topo order: ${t.map(e=>yn[e].label).join(`→`)}`,6)),n}var L=[{id:0,label:`A`,x:80,y:130},{id:1,label:`B`,x:220,y:50},{id:2,label:`C`,x:220,y:210},{id:3,label:`D`,x:360,y:50},{id:4,label:`E`,x:360,y:210},{id:5,label:`F`,x:500,y:130}],En=[{f:0,t:1,w:4},{f:0,t:2,w:2},{f:1,t:2,w:1},{f:1,t:3,w:5},{f:2,t:4,w:8},{f:2,t:3,w:3},{f:3,t:5,w:2},{f:4,t:5,w:4}];function Dn(){let e=[...En].sort((e,t)=>e.w-t.w),t=L.map((e,t)=>t),n=Array(L.length).fill(0);function r(e){return t[e]===e?e:t[e]=r(t[e])}function i(e,i){let a=r(e),o=r(i);return a===o?!1:(n[a]<n[o]?t[a]=o:n[a]>n[o]?t[o]=a:(t[o]=a,n[a]++),!0)}let a=[],o=new Set,s=[];s.push({nodes:L,edges:En,visited:[],current:-1,queue:[],distances:{},path:[],mstEdges:[],msg:`Kruskal's: sort edges by weight, add if no cycle`,ln:0});for(let t of e)s.push({nodes:L,edges:En,visited:[t.f,t.t],current:t.f,queue:[t.t],distances:{},path:[],mstEdges:[...a],msg:`Try edge ${L[t.f].label}-${L[t.t].label} w=${t.w}`,ln:3}),i(t.f,t.t)?(a.push(t),o.add(t.f),o.add(t.t),s.push({nodes:L,edges:En,visited:[...o],current:t.f,queue:[],distances:{},path:[],mstEdges:[...a],msg:`✓ Added! MST cost+=${t.w}, total=${a.reduce((e,t)=>e+t.w,0)}`,ln:4})):s.push({nodes:L,edges:En,visited:[...o],current:-1,queue:[],distances:{},path:[],mstEdges:[...a],msg:`Skip — would create cycle`,ln:5});let c=a.reduce((e,t)=>e+t.w,0);return s.push({nodes:L,edges:En,visited:[...o],current:-1,queue:[],distances:{},path:[],mstEdges:[...a],msg:`✓ MST cost=${c} with ${a.length} edges`,ln:7}),s}function On(){let e=L.length,t=Array(e).fill(1/0),n=Array(e).fill(!1),r=Array(e).fill(-1);t[0]=0;let i=[],a=new Set,o=[];o.push({nodes:L,edges:En,visited:[],current:-1,queue:[0],distances:t.reduce((e,t,n)=>({...e,[n]:t===1/0?`∞`:t}),{}),path:[],mstEdges:[],msg:`Prim's: grow MST from node A`,ln:0});for(let s=0;s<e;s++){let s=-1;for(let r=0;r<e;r++)!n[r]&&(s===-1||t[r]<t[s])&&(s=r);n[s]=!0,a.add(s),r[s]!==-1&&i.push({f:r[s],t:s,w:t[s]}),o.push({nodes:L,edges:En,visited:[...a],current:s,queue:[],distances:t.reduce((e,t,n)=>({...e,[n]:t===1/0?`∞`:t}),{}),path:[],mstEdges:[...i],msg:`Add ${L[s].label} to MST (key=${t[s]})`,ln:3});for(let e of En.filter(e=>e.f===s||e.t===s)){let c=e.f===s?e.t:e.f;!n[c]&&e.w<t[c]&&(t[c]=e.w,r[c]=s,o.push({nodes:L,edges:En,visited:[...a],current:s,queue:[c],distances:t.reduce((e,t,n)=>({...e,[n]:t===1/0?`∞`:t}),{}),path:[],mstEdges:[...i],msg:`Update key[${L[c].label}]=${e.w}`,ln:4}))}}let s=i.reduce((e,t)=>e+t.w,0);return o.push({nodes:L,edges:En,visited:[...a],current:-1,queue:[],distances:t.reduce((e,t,n)=>({...e,[n]:t}),{}),path:[],mstEdges:[...i],msg:`✓ MST cost=${s}`,ln:6}),o}function kn(){let e=L.length,t=1/0,n=Array.from({length:e},(n,r)=>Array.from({length:e},(e,n)=>{if(r===n)return 0;let i=En.find(e=>e.f===r&&e.t===n||e.f===n&&e.t===r);return i?i.w:t})),r=[{nodes:L,edges:En,visited:[],current:-1,queue:[],distances:{},path:[],distMatrix:n.map(e=>e.map(e=>e===t?`∞`:e)),k:-1,i:-1,j:-1,msg:`Floyd-Warshall: all-pairs shortest paths`,ln:0}];for(let i=0;i<e;i++){r.push({nodes:L,edges:En,visited:[i],current:i,queue:[],distances:{},path:[],distMatrix:n.map(e=>e.map(e=>e===t?`∞`:e)),k:i,i:-1,j:-1,msg:`Use ${L[i].label} as intermediate node`,ln:2});for(let a=0;a<e;a++)for(let o=0;o<e;o++)n[a][i]!==t&&n[i][o]!==t&&n[a][i]+n[i][o]<n[a][o]&&(n[a][o]=n[a][i]+n[i][o],r.push({nodes:L,edges:En,visited:[i,a,o],current:i,queue:[],distances:{},path:[a,i,o],distMatrix:n.map(e=>e.map(e=>e===t?`∞`:e)),k:i,i:a,j:o,msg:`Shorter path ${L[a].label}→${L[i].label}→${L[o].label}: ${n[a][o]}`,ln:3}))}return r.push({nodes:L,edges:En,visited:[...Array.from({length:e},(e,t)=>t)],current:-1,queue:[],distances:{},path:[],distMatrix:n.map(e=>e.map(e=>e===t?`∞`:e)),k:-1,i:-1,j:-1,msg:`✓ All-pairs shortest paths computed!`,ln:5}),r}var An=[{u:0,v:1},{u:2,v:3},{u:4,v:5},{u:0,v:2},{u:1,v:6},{u:3,v:7},{u:0,v:4}];function jn(e){let t={};return e.forEach((n,r)=>{let i=r;for(;e[i]!==i;)i=e[i];t[i]||(t[i]=[]),t[i].push(r)}),t}function Mn(e,t,n,r,i){return{parent:[...e],rank:[...t],highlighted:n,components:jn(e),msg:r,ln:i}}function Nn(){let e=Array.from({length:8},(e,t)=>t),t=[];t.push({parent:[...e],rank:Array(8).fill(0),highlighted:[],components:jn(e),msg:`Quick Find: id[i]=component ID. Find=O(1), Union=O(n)`,ln:0});for(let{u:n,v:r}of An){if(t.push(Mn(e,Array(8).fill(0),[n,r],`Union(${n},${r}): find id[${n}]=${e[n]}, id[${r}]=${e[r]}`,2)),e[n]===e[r]){t.push(Mn(e,Array(8).fill(0),[n,r],`Already connected! id[${n}]=id[${r}]=${e[n]}`,3));continue}let i=e[r];for(let t=0;t<8;t++)e[t]===i&&(e[t]=e[n]);t.push(Mn(e,Array(8).fill(0),[n,r],`Union done: relabeled all ${i}→${e[n]} (O(n) scan!)`,4))}return t.push(Mn(e,Array(8).fill(0),[],`✓ All unions done — ${Object.keys(jn(e)).length} components`,6)),t}function Pn(){let e=Array.from({length:8},(e,t)=>t),t=Array(8).fill(0),n=[];n.push(Mn(e,t,[],`Quick Union: parent[i]=parent node. Find=O(n) tree height, Union=O(1)`,0));function r(t){let n=t;for(;e[n]!==n;)n=e[n];return n}for(let{u:i,v:a}of An){let o=r(i),s=r(a);if(n.push(Mn(e,t,[i,a,o,s],`Union(${i},${a}): root(${i})=${o}, root(${a})=${s}`,2)),o===s){n.push(Mn(e,t,[o],`Already same component (root=${o})`,3));continue}e[s]=o,n.push(Mn(e,t,[o,s],`Set parent[${s}]=${o} — tree may get tall!`,4))}return n.push(Mn(e,t,[],`✓ Done — but trees can be O(n) tall → slow find!`,6)),n}function Fn(){let e=Array.from({length:8},(e,t)=>t),t=Array(8).fill(0),n=[];n.push(Mn(e,t,[],`Weighted Union + Path Compression: O(α(n)) ≈ O(1) amortized`,0));function r(i){return e[i]!==i&&(n.push(Mn(e,t,[i,e[i]],`Path compress: parent[${i}]=${e[i]}→root`,2)),e[i]=r(e[i])),e[i]}function i(i,a){let o=r(i),s=r(a);o!==s&&(t[o]<t[s]?(e[o]=s,n.push(Mn(e,t,[o,s],`Attach smaller rank tree ${o} under ${s}`,4))):t[o]>t[s]?(e[s]=o,n.push(Mn(e,t,[o,s],`Attach ${s} under ${o}`,4))):(e[s]=o,t[o]++,n.push(Mn(e,t,[o,s],`Equal rank: attach ${s}→${o}, rank[${o}]=${t[o]}`,4))))}for(let{u:r,v:a}of An)n.push(Mn(e,t,[r,a],`Union(${r},${a})`,1)),i(r,a),n.push(Mn(e,t,[],`Components: ${Object.keys(jn(e)).length}`,5));return n.push(Mn(e,t,[],`✓ O(α(n)) — effectively constant time!`,6)),n}var In=[1,3,5,7,9,11];function Ln(e=In){let t=[{arr:[...e],tree:[],node:-1,ql:1,qr:3,result:null,building:!1,msg:`Brute range sum: scan every element O(n)`,ln:0}];for(let n=0;n<e.length-1;n+=2){let r=n+2<e.length?n+2:e.length-1,i=0;t.push({arr:[...e],tree:[],node:-1,ql:n,qr:r,result:null,building:!1,msg:`Range sum [${n}..${r}]: start scan`,ln:2});for(let a=n;a<=r;a++)i+=e[a],t.push({arr:[...e],tree:[],node:a,ql:n,qr:r,result:i,building:!1,msg:`Add arr[${a}]=${e[a]}, sum=${i}`,ln:3});t.push({arr:[...e],tree:[],node:-1,ql:n,qr:r,result:i,building:!1,msg:`Sum[${n}..${r}]=${i} — O(n) per query`,ln:4})}return t}function Rn(e=In){let t=e.length,n=Array(4*t).fill(0),r=[];r.push({arr:[...e],tree:[...n],node:-1,ql:0,qr:t-1,result:null,building:!0,msg:`Build segment tree from [${e}]`,ln:0});function i(t,a,o){if(r.push({arr:[...e],tree:[...n],node:t,ql:a,qr:o,result:null,building:!0,msg:`Build node ${t} for range [${a}..${o}]`,ln:2}),a===o){n[t]=e[a],r.push({arr:[...e],tree:[...n],node:t,ql:a,qr:o,result:e[a],building:!0,msg:`Leaf: tree[${t}]=arr[${a}]=${e[a]}`,ln:3});return}let s=a+o>>1;i(2*t,a,s),i(2*t+1,s+1,o),n[t]=n[2*t]+n[2*t+1],r.push({arr:[...e],tree:[...n],node:t,ql:a,qr:o,result:n[t],building:!0,msg:`tree[${t}]=${n[2*t]}+${n[2*t+1]}=${n[t]}`,ln:4})}i(1,0,t-1),r.push({arr:[...e],tree:[...n],node:1,ql:0,qr:t-1,result:n[1],building:!1,msg:`Tree built! Root=tree[1]=${n[1]} (total sum). Now query:`,ln:6});function a(t,i,o,s,c){if(r.push({arr:[...e],tree:[...n],node:t,ql:s,qr:c,result:null,building:!1,msg:`Query [${s}..${c}] at node ${t}=[${i}..${o}]`,ln:8}),c<i||o<s)return r.push({arr:[...e],tree:[...n],node:t,ql:s,qr:c,result:0,building:!1,msg:`Out of range → return 0`,ln:9}),0;if(s<=i&&o<=c)return r.push({arr:[...e],tree:[...n],node:t,ql:s,qr:c,result:n[t],building:!1,msg:`Fully covered → return ${n[t]}`,ln:10}),n[t];let l=i+o>>1,u=a(2*t,i,l,s,c),d=a(2*t+1,l+1,o,s,c);return r.push({arr:[...e],tree:[...n],node:t,ql:s,qr:c,result:u+d,building:!1,msg:`Partial: left=${u}+right=${d}=${u+d}`,ln:11}),u+d}let o=a(1,0,t-1,1,4);return r.push({arr:[...e],tree:[...n],node:1,ql:1,qr:4,result:o,building:!1,msg:`✓ Range sum [1..4]=${o} — O(log n)!`,ln:13}),r}function zn(e=In){let t=e.length,n=Array(4*t).fill(0),r=Array(4*t).fill(0),i=[];function a(t,r,i){if(r===i){n[t]=e[r];return}let o=r+i>>1;a(2*t,r,o),a(2*t+1,o+1,i),n[t]=n[2*t]+n[2*t+1]}a(1,0,t-1),i.push({arr:[...e],tree:[...n],node:1,ql:0,qr:t-1,result:n[1],building:!0,msg:`Lazy Propagation: defer updates, apply only when needed`,ln:0});function o(t,a,o){if(r[t]){let s=a+o>>1,c=s-a+1,l=o-s;n[2*t]+=r[t]*c,n[2*t+1]+=r[t]*l,r[2*t]+=r[t],r[2*t+1]+=r[t],i.push({arr:[...e],tree:[...n],node:t,ql:a,qr:o,result:r[t],building:!1,msg:`Push lazy ${r[t]} down from node ${t}`,ln:4}),r[t]=0}}function s(t,a,c,l,u,d){if(u<a||c<l)return;if(l<=a&&c<=u){n[t]+=d*(c-a+1),r[t]+=d,i.push({arr:[...e],tree:[...n],node:t,ql:l,qr:u,result:n[t],building:!1,msg:`Lazy mark node ${t}[${a}..${c}] += ${d}`,ln:6});return}o(t,a,c);let f=a+c>>1;s(2*t,a,f,l,u,d),s(2*t+1,f+1,c,l,u,d),n[t]=n[2*t]+n[2*t+1]}return s(1,0,t-1,1,3,2),i.push({arr:[...e],tree:[...n],node:1,ql:1,qr:3,result:n[1],building:!1,msg:`✓ Range update [1..3]+=2 done lazily — O(log n)!`,ln:8}),i}var Bn={quickFind:g(`// Quick Find: find O(1), union O(n)
class UnionFind {
  constructor(n){this.id=Array.from({length:n},(_,i)=>i);}
  find(x){return this.id[x];}
  union(x,y){
    const px=this.id[x],py=this.id[y];
    if(px===py)return;
    // relabel all py nodes to px — O(n)!
    for(let i=0;i<this.id.length;i++)
      if(this.id[i]===py)this.id[i]=px;
  }
  connected(x,y){return this.id[x]===this.id[y];}
}`,`class UnionFind:
    def __init__(self,n): self.id=list(range(n))
    def find(self,x): return self.id[x]
    def union(self,x,y):
        px,py=self.id[x],self.id[y]
        if px==py: return
        for i in range(len(self.id)):
            if self.id[i]==py: self.id[i]=px
    def connected(self,x,y): return self.id[x]==self.id[y]`,`class UF{vector<int>id;public:
    UF(int n):id(n){iota(id.begin(),id.end(),0);}
    int find(int x){return id[x];}
    void unite(int x,int y){int px=id[x],py=id[y];if(px==py)return;for(auto&v:id)if(v==py)v=px;}
    bool conn(int x,int y){return id[x]==id[y];}
};`,`class UF{int[]id;
    UF(int n){id=new int[n];for(int i=0;i<n;i++)id[i]=i;}
    int find(int x){return id[x];}
    void unite(int x,int y){int px=id[x],py=id[y];if(px==py)return;for(int i=0;i<id.length;i++)if(id[i]==py)id[i]=px;}
    boolean conn(int x,int y){return id[x]==id[y];}
}`),weightedUF:g(`// Weighted Union + Path Compression: O(α(n)) ≈ O(1)
class UnionFind {
  constructor(n){
    this.parent=Array.from({length:n},(_,i)=>i);
    this.rank=Array(n).fill(0);
  }
  find(x){
    if(this.parent[x]!==x)
      this.parent[x]=this.find(this.parent[x]); // path compression!
    return this.parent[x];
  }
  union(x,y){
    const rx=this.find(x),ry=this.find(y);
    if(rx===ry)return false;
    if(this.rank[rx]<this.rank[ry])this.parent[rx]=ry;
    else if(this.rank[rx]>this.rank[ry])this.parent[ry]=rx;
    else{this.parent[ry]=rx;this.rank[rx]++;}
    return true;
  }
  connected(x,y){return this.find(x)===this.find(y);}
}`,`class UnionFind:
    def __init__(self,n):
        self.parent=list(range(n));self.rank=[0]*n
    def find(self,x):
        if self.parent[x]!=x:
            self.parent[x]=self.find(self.parent[x])  # path compression
        return self.parent[x]
    def union(self,x,y):
        rx,ry=self.find(x),self.find(y)
        if rx==ry: return False
        if self.rank[rx]<self.rank[ry]: self.parent[rx]=ry
        elif self.rank[rx]>self.rank[ry]: self.parent[ry]=rx
        else: self.parent[ry]=rx;self.rank[rx]+=1
        return True`,`class UF{vector<int>par,rnk;public:
    UF(int n):par(n),rnk(n,0){iota(par.begin(),par.end(),0);}
    int find(int x){return par[x]==x?x:par[x]=find(par[x]);}
    bool unite(int x,int y){int rx=find(x),ry=find(y);if(rx==ry)return false;
        if(rnk[rx]<rnk[ry])swap(rx,ry);par[ry]=rx;if(rnk[rx]==rnk[ry])rnk[rx]++;return true;}
};`,`class UF{int[]par,rnk;
    UF(int n){par=new int[n];rnk=new int[n];for(int i=0;i<n;i++)par[i]=i;}
    int find(int x){return par[x]==x?x:(par[x]=find(par[x]));}
    boolean unite(int x,int y){int rx=find(x),ry=find(y);if(rx==ry)return false;
        if(rnk[rx]<rnk[ry]){int t=rx;rx=ry;ry=t;}par[ry]=rx;if(rnk[rx]==rnk[ry])rnk[rx]++;return true;}
}`)},Vn={brute:g(`// Brute force range sum: O(n) per query
function rangeSum(arr, l, r) {
  let sum = 0;
  for (let i = l; i <= r; i++) sum += arr[i];
  return sum; // O(n)
}
// Range update: O(n) too
function rangeUpdate(arr, l, r, val) {
  for (let i = l; i <= r; i++) arr[i] += val;
}`,`def range_sum(arr,l,r): return sum(arr[l:r+1])  # O(n)
def range_update(arr,l,r,v):
    for i in range(l,r+1): arr[i]+=v  # O(n)`,`int rangeSum(vector<int>&a,int l,int r){int s=0;for(int i=l;i<=r;i++)s+=a[i];return s;}
void update(vector<int>&a,int l,int r,int v){for(int i=l;i<=r;i++)a[i]+=v;}`,`int rangeSum(int[]a,int l,int r){int s=0;for(int i=l;i<=r;i++)s+=a[i];return s;}
void update(int[]a,int l,int r,int v){for(int i=l;i<=r;i++)a[i]+=v;}`),segTree:g(`// Segment Tree: O(log n) query + update
class SegTree {
  constructor(arr){
    this.n=arr.length;
    this.tree=Array(4*this.n).fill(0);
    this.build(arr,1,0,this.n-1);
  }
  build(arr,node,s,e){
    if(s===e){this.tree[node]=arr[s];return;}
    const m=(s+e)>>1;
    this.build(arr,2*node,s,m);
    this.build(arr,2*node+1,m+1,e);
    this.tree[node]=this.tree[2*node]+this.tree[2*node+1];
  }
  query(l,r,node=1,s=0,e=this.n-1){
    if(r<s||e<l) return 0;
    if(l<=s&&e<=r) return this.tree[node];
    const m=(s+e)>>1;
    return this.query(l,r,2*node,s,m)+
           this.query(l,r,2*node+1,m+1,e);
  }
}
// O(log n) query!`,`class SegTree:
    def __init__(self,arr):
        self.n=len(arr);self.t=[0]*(4*self.n)
        self._build(arr,1,0,self.n-1)
    def _build(self,a,nd,s,e):
        if s==e: self.t[nd]=a[s]; return
        m=(s+e)//2
        self._build(a,2*nd,s,m);self._build(a,2*nd+1,m+1,e)
        self.t[nd]=self.t[2*nd]+self.t[2*nd+1]
    def query(self,l,r,nd=1,s=0,e=None):
        if e is None: e=self.n-1
        if r<s or e<l: return 0
        if l<=s<=e<=r: return self.t[nd]
        m=(s+e)//2
        return self.query(l,r,2*nd,s,m)+self.query(l,r,2*nd+1,m+1,e)`,`struct SegTree{int n;vector<int>t;
    SegTree(vector<int>&a):n(a.size()),t(4*n){build(a,1,0,n-1);}
    void build(vector<int>&a,int nd,int s,int e){
        if(s==e){t[nd]=a[s];return;}int m=(s+e)/2;
        build(a,2*nd,s,m);build(a,2*nd+1,m+1,e);t[nd]=t[2*nd]+t[2*nd+1];}
    int query(int l,int r,int nd=1,int s=0,int e=-1){
        if(e<0)e=n-1;if(r<s||e<l)return 0;
        if(l<=s&&e<=r)return t[nd];int m=(s+e)/2;
        return query(l,r,2*nd,s,m)+query(l,r,2*nd+1,m+1,e);}
};`,`class SegTree{int n;int[]t;
    SegTree(int[]a){n=a.length;t=new int[4*n];build(a,1,0,n-1);}
    void build(int[]a,int nd,int s,int e){
        if(s==e){t[nd]=a[s];return;}int m=(s+e)/2;
        build(a,2*nd,s,m);build(a,2*nd+1,m+1,e);t[nd]=t[2*nd]+t[2*nd+1];}
    int query(int l,int r,int nd,int s,int e){
        if(r<s||e<l)return 0;if(l<=s&&e<=r)return t[nd];int m=(s+e)/2;
        return query(l,r,2*nd,s,m)+query(l,r,2*nd+1,m+1,e);}
}`)},Hn=[0,1,0,2,1,0,1,3,2,1,2,1],Un=[2,1,5,6,2,3],Wn=[73,74,75,71,69,72,76,73];function Gn(e=Hn){let t=e.length,n=[],r=Array(t).fill(0),i=0;n.push({arr:e,stack:[],water:[...r],cur:-1,total:i,msg:`Brute: for each cell scan left+right for max walls`,ln:0});for(let a=1;a<t-1;a++){let o=0,s=0;for(let t=0;t<=a;t++)o=Math.max(o,e[t]);for(let n=a;n<t;n++)s=Math.max(s,e[n]);let c=Math.min(o,s)-e[a];c>0&&(r[a]=c,i+=c),n.push({arr:e,stack:[],water:[...r],cur:a,total:i,msg:`pos[${a}]: maxL=${o} maxR=${s} → water=min(${o},${s})-${e[a]}=${Math.max(0,c)}`,ln:3})}return n.push({arr:e,stack:[],water:r,cur:-1,total:i,msg:`✓ Total trapped = ${i} units — O(n²) scans`,ln:6}),n}function Kn(e=Hn){let t=e.length,n=[],r=Array(t).fill(0),i=Array(t).fill(0),a=Array(t).fill(0);i[0]=e[0];for(let n=1;n<t;n++)i[n]=Math.max(i[n-1],e[n]);a[t-1]=e[t-1];for(let n=t-2;n>=0;n--)a[n]=Math.max(a[n+1],e[n]);n.push({arr:e,stack:[],water:[...r],cur:-1,total:0,msg:`Precompute lMax[] and rMax[] arrays — O(n) space`,ln:0});let o=0;for(let s=1;s<t-1;s++)r[s]=Math.max(0,Math.min(i[s],a[s])-e[s]),o+=r[s],n.push({arr:e,stack:[],water:[...r],cur:s,total:o,msg:`pos[${s}]: min(lMax=${i[s]},rMax=${a[s]})-height=${e[s]} = ${r[s]}`,ln:4});return n.push({arr:e,stack:[],water:r,cur:-1,total:o,msg:`✓ Total = ${o} — O(n) time, O(n) space`,ln:6}),n}function qn(e=Hn){let t=e.length,n=[],r=Array(t).fill(0),i=0,a=t-1,o=0,s=0,c=0;for(n.push({arr:e,stack:[i,a],water:[...r],cur:-1,total:c,msg:`Two pointers: L=0 R=${t-1}, move the smaller side`,ln:0});i<a;)e[i]<=e[a]?(e[i]>=o?o=e[i]:(r[i]=o-e[i],c+=r[i]),n.push({arr:e,stack:[i,a],water:[...r],cur:i,total:c,msg:`L[${i}]=${e[i]} ≤ R[${a}]=${e[a]}: maxL=${o}, water[${i}]=${r[i]}`,ln:3}),i++):(e[a]>=s?s=e[a]:(r[a]=s-e[a],c+=r[a]),n.push({arr:e,stack:[i,a],water:[...r],cur:a,total:c,msg:`R[${a}]=${e[a]} < L[${i}]=${e[i]}: maxR=${s}, water[${a}]=${r[a]}`,ln:5}),a--);return n.push({arr:e,stack:[],water:r,cur:-1,total:c,msg:`✓ Total = ${c} — O(n) time, O(1) space!`,ln:7}),n}function Jn(e=Un){let t=e.length,n=[],r=0;n.push({arr:e,stack:[],water:Array(t).fill(0),cur:-1,total:r,msg:`Brute: for every pair (i,j) find min height`,ln:0});for(let i=0;i<t;i++){let a=e[i];for(let o=i;o<t;o++){a=Math.min(a,e[o]);let s=a*(o-i+1);r=Math.max(r,s),n.push({arr:e,stack:[i,o],water:Array(t).fill(0),cur:o,total:r,msg:`bars[${i}..${o}]: minH=${a} width=${o-i+1} area=${s} max=${r}`,ln:3})}}return n.push({arr:e,stack:[],water:Array(t).fill(0),cur:-1,total:r,msg:`✓ Max rectangle = ${r} — O(n²)`,ln:5}),n}function Yn(e=Un){let t=e.length,n=[],r=[],i=0;n.push({arr:e,stack:[...r],water:Array(t).fill(0),cur:-1,total:0,msg:`Monotonic stack: keep indices of increasing bars`,ln:0});for(let a=0;a<=t;a++){let o=a===t?0:e[a];for(;r.length&&(a===t||e[r[r.length-1]]>=o);){let o=e[r.pop()],s=r.length===0?a:a-r[r.length-1]-1,c=o*s;i=Math.max(i,c),n.push({arr:e,stack:[...r],water:Array(t).fill(0),cur:a<t?a:-1,total:i,msg:`Pop h=${o}: width=${s} area=${c} max=${i}`,ln:4})}a<t&&(r.push(a),n.push({arr:e,stack:[...r],water:Array(t).fill(0),cur:a,total:i,msg:`Push index ${a} (h=${e[a]}) — stack increasing`,ln:2}))}return n.push({arr:e,stack:[],water:Array(t).fill(0),cur:-1,total:i,msg:`✓ Max rectangle = ${i} — O(n)!`,ln:6}),n}function Xn(e=Wn){let t=e.length,n=[],r=Array(t).fill(0);n.push({arr:e,stack:[],water:[...r],cur:-1,total:0,msg:`Next Greater: for each element scan right — O(n²)`,ln:0});for(let i=0;i<t;i++){for(let a=i+1;a<t;a++)if(e[a]>e[i]){r[i]=a-i,n.push({arr:e,stack:[i,a],water:[...r],cur:i,total:0,msg:`T[${i}]=${e[i]}: next warmer is T[${a}]=${e[a]}, wait=${a-i} days`,ln:3});break}r[i]===0&&n.push({arr:e,stack:[i],water:[...r],cur:i,total:0,msg:`T[${i}]=${e[i]}: no warmer day found → 0`,ln:3})}return n.push({arr:e,stack:[],water:r,cur:-1,total:0,msg:`✓ Answer: [${r}] — O(n²)`,ln:5}),n}function Zn(e=Wn){let t=e.length,n=[],r=[],i=Array(t).fill(0);n.push({arr:e,stack:[...r],water:[...i],cur:-1,total:0,msg:`Monotonic stack: keep indices of unresolved temperatures`,ln:0});for(let a=0;a<t;a++){for(;r.length&&e[r[r.length-1]]<e[a];){let t=r.pop();i[t]=a-t,n.push({arr:e,stack:[...r],water:[...i],cur:a,total:0,msg:`T[${t}]=${e[t]} < T[${a}]=${e[a]}: wait=${a-t} days ✓`,ln:4})}r.push(a),n.push({arr:e,stack:[...r],water:[...i],cur:a,total:0,msg:`Push i=${a} (T=${e[a]}) — waiting for warmer`,ln:2})}return n.push({arr:e,stack:[],water:i,cur:-1,total:0,msg:`✓ Answer: [${i}] — O(n) one pass!`,ln:6}),n}var Qn=4,$n=4;function er(e=Qn,t=$n){return Array.from({length:e},(e,n)=>Array.from({length:t},(e,t)=>n===0&&t===0?1:null))}function R(e,t,n,r,i,a,o){return{grid:e.map(e=>[...e]),dp:t.map(e=>[...e]),row:n,col:r,result:i,msg:a,ln:o}}function tr(){let e=Qn,t=$n,n=[],r=er(e,t),i=Array.from({length:e},()=>Array(t).fill(null)),a=0;n.push(R(r,i,-1,-1,null,`Unique Paths: robot moves right or down only, count all paths`,0));function o(s,c){return a++,s>=e||c>=t?0:s===e-1&&c===t-1?(n.push(R(r,i,s,c,1,`Reached bottom-right! calls=${a}`,2)),1):(n.push(R(r,i,s,c,null,`paths(${s},${c}): try right and down — calls=${a}`,3)),o(s,c+1)+o(s+1,c))}let s=o(0,0);return n.push(R(r,i,e-1,t-1,s,`✓ ${s} unique paths — ${a} calls! O(2^(m+n))`,5)),n}function nr(){let e=Qn,t=$n,n=[],r=er(e,t),i=Array.from({length:e},()=>Array(t).fill(0));n.push(R(r,i,-1,-1,null,`Unique Paths DP: dp[i][j] = dp[i-1][j] + dp[i][j-1]`,0));for(let a=0;a<e;a++)for(let e=0;e<t;e++)i[a][e]=a===0||e===0?1:i[a-1][e]+i[a][e-1],n.push(R(r,i,a,e,i[a][e],`dp[${a}][${e}]=${a===0||e===0?1:`dp[${a-1}][${e}]+dp[${a}][${e-1}]=${i[a-1]?.[e]||0}+${i[a]?.[e-1]||0}`}=${i[a][e]}`,2));return n.push(R(r,i,e-1,t-1,i[e-1][t-1],`✓ ${i[e-1][t-1]} paths — O(mn) time+space`,4)),n}function rr(){let e=Qn,t=$n,n=[],r=er(e,t),i=Array(t).fill(1),a=Array.from({length:e},()=>Array(t).fill(null));a[0]=Array(t).fill(1),n.push(R(r,a,-1,-1,null,`Space Opt: keep only 1 row — O(n) space`,0));for(let o=1;o<e;o++){let e=[1];for(let s=1;s<t;s++)e[s]=e[s-1]+i[s],n.push(R(r,a,o,s,e[s],`row ${o}, col ${s}: left=${e[s-1]} + above=${i[s]} = ${e[s]}`,2));i=e,a[o]=[...e]}return n.push(R(r,a,e-1,t-1,i[t-1],`✓ ${i[t-1]} paths — O(n) space only!`,4)),n}var ir=[[1,3,1],[1,5,1],[4,2,1]];function ar(){let e=ir,t=e.length,n=e[0].length,r=[],i=0,a=Array.from({length:t},()=>Array(n).fill(null));r.push(R(e,a,-1,-1,null,`Min Path Sum: find path with minimum total`,0));function o(s,c){return i++,s>=t||c>=n?1/0:s===t-1&&c===n-1?e[s][c]:(r.push(R(e,a,s,c,null,`minPath(${s},${c})=${e[s][c]}+min(right,down) calls=${i}`,2)),e[s][c]+Math.min(o(s,c+1),o(s+1,c)))}let s=o(0,0);return r.push(R(e,a,t-1,n-1,s,`✓ Min path sum = ${s} — O(2^(m+n)) calls`,4)),r}function or(){let e=ir,t=e.length,n=e[0].length,r=[],i=Array.from({length:t},()=>Array(n).fill(0));r.push(R(e,i,-1,-1,null,`Min Path DP: dp[i][j]=grid[i][j]+min(top,left)`,0));for(let a=0;a<t;a++)for(let t=0;t<n;t++)a===0&&t===0?i[a][t]=e[a][t]:a===0?i[a][t]=i[a][t-1]+e[a][t]:t===0?i[a][t]=i[a-1][t]+e[a][t]:i[a][t]=Math.min(i[a-1][t],i[a][t-1])+e[a][t],r.push(R(e,i,a,t,i[a][t],`dp[${a}][${t}]=${e[a][t]}+${a===0&&t===0?0:a===0?i[a][t-1]:t===0?i[a-1][t]:`min(${i[a-1][t]},${i[a][t-1]})`}=${i[a][t]}`,2));return r.push(R(e,i,t-1,n-1,i[t-1][n-1],`✓ Min path = ${i[t-1][n-1]} — O(mn)`,4)),r}function sr(){let e=ir,t=e.length,n=e[0].length,r=[],i=[...e[0]],a=Array.from({length:t},()=>Array(n).fill(null));for(let e=1;e<n;e++)i[e]+=i[e-1];a[0]=[...i],r.push(R(e,a,-1,-1,null,`Min Path Opt: update in-place, O(n) space`,0));for(let o=1;o<t;o++){i[0]+=e[o][0],a[o][0]=i[0];for(let t=1;t<n;t++)i[t]=Math.min(i[t],i[t-1])+e[o][t],a[o][t]=i[t],r.push(R(e,a,o,t,i[t],`dp[${t}]=min(above=${a[o-1][t]},left=${i[t-1]})+${e[o][t]}=${i[t]}`,2))}return r.push(R(e,a,t-1,n-1,i[n-1],`✓ Min = ${i[n-1]} — O(n) space`,4)),r}var cr={trapBrute:g(`function trap(h){let tot=0;const n=h.length;
  for(let i=1;i<n-1;i++){
    let l=0,r=0;
    for(let k=0;k<=i;k++)l=Math.max(l,h[k]);
    for(let k=i;k<n;k++)r=Math.max(r,h[k]);
    tot+=Math.min(l,r)-h[i];
  }return tot;}`,`def trap(h):
    tot=0
    for i in range(1,len(h)-1):
        l=max(h[:i+1]);r=max(h[i:])
        tot+=min(l,r)-h[i]
    return tot`,`int trap(vector<int>&h){
    int tot=0,n=h.size();
    for(int i=1;i<n-1;i++){
        int l=*max_element(h.begin(),h.begin()+i+1);
        int r=*max_element(h.begin()+i,h.end());
        tot+=min(l,r)-h[i];
    }return tot;
}`,`int trap(int[]h){
    int tot=0,n=h.length;
    for(int i=1;i<n-1;i++){
        int l=0,r=0;
        for(int k=0;k<=i;k++) l=Math.max(l,h[k]);
        for(int k=i;k<n;k++) r=Math.max(r,h[k]);
        tot+=Math.min(l,r)-h[i];
    }return tot;
}`),trapTwoPtr:g(`function trap(h){
  let l=0,r=h.length-1,mL=0,mR=0,tot=0;
  while(l<r){
    if(h[l]<=h[r]){
      h[l]>=mL?mL=h[l]:tot+=mL-h[l]; l++;
    }else{
      h[r]>=mR?mR=h[r]:tot+=mR-h[r]; r--;
    }
  }return tot;}`,`def trap(h):
    l,r,mL,mR,tot=0,len(h)-1,0,0,0
    while l<r:
        if h[l]<=h[r]:
            mL=max(mL,h[l]);tot+=mL-h[l];l+=1
        else:
            mR=max(mR,h[r]);tot+=mR-h[r];r-=1
    return tot`,`int trap(vector<int>&h){
    int l=0,r=h.size()-1,mL=0,mR=0,tot=0;
    while(l<r){
        if(h[l]<=h[r]){
            mL=max(mL,h[l]);tot+=mL-h[l];l++;
        }else{
            mR=max(mR,h[r]);tot+=mR-h[r];r--;
        }
    }return tot;
}`,`int trap(int[]h){
    int l=0,r=h.length-1,mL=0,mR=0,tot=0;
    while(l<r){
        if(h[l]<=h[r]){
            mL=Math.max(mL,h[l]);tot+=mL-h[l];l++;
        }else{
            mR=Math.max(mR,h[r]);tot+=mR-h[r];r--;
        }
    }return tot;
}`),histStack:g(`function largestRect(h){
  const stack=[]; let max=0;
  for(let i=0;i<=h.length;i++){
    while(stack.length&&(i===h.length||h[stack.at(-1)]>=h[i])){
      const height=h[stack.pop()];
      const width=stack.length?i-stack.at(-1)-1:i;
      max=Math.max(max,height*width);
    }
    stack.push(i);
  }return max;}`,`def largestRect(h):
    stack,mx=[],0
    for i in range(len(h)+1):
        while stack and(i==len(h) or h[stack[-1]]>=h[i]):
            height=h[stack.pop()]
            width=i-stack[-1]-1 if stack else i
            mx=max(mx,height*width)
        stack.append(i)
    return mx`,`int largestRect(vector<int>&h){
    stack<int>st;int mx=0,n=h.size();
    for(int i=0;i<=n;i++){
        while(!st.empty()&&(i==n||h[st.top()]>=h[i])){
            int ht=h[st.top()];st.pop();
            int w=st.empty()?i:i-st.top()-1;
            mx=max(mx,ht*w);
        }
        if(i<n) st.push(i);
    }return mx;
}`,`int largestRect(int[]h){
    Deque<Integer>st=new ArrayDeque<>();
    int mx=0,n=h.length;
    for(int i=0;i<=n;i++){
        while(!st.isEmpty()&&(i==n||h[st.peek()]>=h[i])){
            int ht=h[st.pop()];
            int w=st.isEmpty()?i:i-st.peek()-1;
            mx=Math.max(mx,ht*w);
        }
        if(i<n) st.push(i);
    }return mx;
}`),ngeStack:g(`function dailyTemps(T){
  const res=Array(T.length).fill(0),stack=[];
  for(let i=0;i<T.length;i++){
    while(stack.length&&T[stack.at(-1)]<T[i]){
      const j=stack.pop(); res[j]=i-j;
    }
    stack.push(i);
  }return res;}`,`def dailyTemps(T):
    res=[0]*len(T);stack=[]
    for i,t in enumerate(T):
        while stack and T[stack[-1]]<t:
            j=stack.pop();res[j]=i-j
        stack.append(i)
    return res`,`vector<int>dailyTemperatures(vector<int>&T){
    int n=T.size();
    vector<int>res(n);
    stack<int>st;
    for(int i=0;i<n;i++){
        while(!st.empty()&&T[st.top()]<T[i]){
            res[st.top()]=i-st.top();
            st.pop();
        }
        st.push(i);
    }return res;
}`,`int[]dailyTemperatures(int[]T){
    int n=T.length;
    int[]res=new int[n];
    Deque<Integer>st=new ArrayDeque<>();
    for(int i=0;i<n;i++){
        while(!st.isEmpty()&&T[st.peek()]<T[i])
            res[st.peek()]=i-st.pop();
        st.push(i);
    }return res;
}`)},lr={pathBrute:g(`function uniquePaths(m,n){
  function f(r,c){
    if(r>=m||c>=n)return 0;
    if(r===m-1&&c===n-1)return 1;
    return f(r+1,c)+f(r,c+1);
  }return f(0,0);} // O(2^(m+n))`,`def uniquePaths(m,n):
    def f(r,c):
        if r>=m or c>=n: return 0
        if r==m-1 and c==n-1: return 1
        return f(r+1,c)+f(r,c+1)
    return f(0,0)`,`int uniquePaths(int m,int n){
    function<int(int,int)>f=[&](int r,int c)->int{
        if(r>=m||c>=n) return 0;
        if(r==m-1&&c==n-1) return 1;
        return f(r+1,c)+f(r,c+1);
    };
    return f(0,0);
}`,`int uniquePaths(int m,int n){
    return solve(0,0,m,n);
}
int solve(int r,int c,int m,int n){
    if(r>=m||c>=n) return 0;
    if(r==m-1&&c==n-1) return 1;
    return solve(r+1,c,m,n)+solve(r,c+1,m,n);
}`),pathDP:g(`function uniquePaths(m,n){
  const dp=Array.from({length:m},()=>Array(n).fill(1));
  for(let r=1;r<m;r++)
    for(let c=1;c<n;c++)
      dp[r][c]=dp[r-1][c]+dp[r][c-1];
  return dp[m-1][n-1];}`,`def uniquePaths(m,n):
    dp=[[1]*n for _ in range(m)]
    for r in range(1,m):
        for c in range(1,n):
            dp[r][c]=dp[r-1][c]+dp[r][c-1]
    return dp[m-1][n-1]`,`int uniquePaths(int m,int n){
    vector<vector<int>>dp(m,vector<int>(n,1));
    for(int r=1;r<m;r++)
        for(int c=1;c<n;c++)
            dp[r][c]=dp[r-1][c]+dp[r][c-1];
    return dp[m-1][n-1];
}`,`int uniquePaths(int m,int n){
    int[][]dp=new int[m][n];
    for(int[]r:dp) Arrays.fill(r,1);
    for(int r=1;r<m;r++)
        for(int c=1;c<n;c++)
            dp[r][c]=dp[r-1][c]+dp[r][c-1];
    return dp[m-1][n-1];
}`),minPath:g(`function minPathSum(g){
  const m=g.length,n=g[0].length;
  const dp=g.map(r=>[...r]);
  for(let c=1;c<n;c++)dp[0][c]+=dp[0][c-1];
  for(let r=1;r<m;r++){
    dp[r][0]+=dp[r-1][0];
    for(let c=1;c<n;c++)
      dp[r][c]+=Math.min(dp[r-1][c],dp[r][c-1]);
  }return dp[m-1][n-1];}`,`def minPathSum(g):
    m,n=len(g),len(g[0])
    dp=[r[:] for r in g]
    for c in range(1,n): dp[0][c]+=dp[0][c-1]
    for r in range(1,m):
        dp[r][0]+=dp[r-1][0]
        for c in range(1,n):
            dp[r][c]+=min(dp[r-1][c],dp[r][c-1])
    return dp[m-1][n-1]`,`int minPathSum(vector<vector<int>>&g){
    int m=g.size(),n=g[0].size();
    for(int c=1;c<n;c++) g[0][c]+=g[0][c-1];
    for(int r=1;r<m;r++){
        g[r][0]+=g[r-1][0];
        for(int c=1;c<n;c++)
            g[r][c]+=min(g[r-1][c],g[r][c-1]);
    }return g[m-1][n-1];
}`,`int minPathSum(int[][]g){
    int m=g.length,n=g[0].length;
    for(int c=1;c<n;c++) g[0][c]+=g[0][c-1];
    for(int r=1;r<m;r++){
        g[r][0]+=g[r-1][0];
        for(int c=1;c<n;c++)
            g[r][c]+=Math.min(g[r-1][c],g[r][c-1]);
    }return g[m-1][n-1];
}`)};function ur(e,t){return t===null?0:e[t]?.height||1}function dr(e,t){return t===null?0:ur(e,e[t].left)-ur(e,e[t].right)}function fr(e,t){t!==null&&(e[t].height=1+Math.max(ur(e,e[t].left),ur(e,e[t].right)))}function pr(e){let t={};return Object.keys(e).forEach(n=>t[n]={...e[n]}),t}function mr(e,t,n,r,i){let a=pr(e),o={};return Object.keys(a).forEach(e=>o[e]=dr(a,e)),{nodes:a,root:t,positions:t==null?{}:qe(a,t),highlighted:n,visited:[],path:[],result:[],balanceFactors:o,msg:r,ln:i}}function hr(){let e=[10,20,30,40,50],t=[],n={},r=0,i=null;t.push({...mr(n,null,[],`Insert sorted values without balancing — watch tree skew!`,0),root:null});function a(e,t){if(e===null){let e=r++;return n[e]={id:e,val:t,left:null,right:null,height:1},e}return t<n[e].val?n[e].left=a(n[e].left,t):n[e].right=a(n[e].right,t),fr(n,e),e}for(let r of e){i=a(i,r);let e=Object.keys(n).filter(e=>Math.abs(dr(n,+e))>1).map(e=>+e);t.push(mr(n,i,e,`Inserted ${r}. ${e.length?`⚠ ${e.length} unbalanced node(s)!`:`OK so far`} — no rotations applied`,2))}return t.push(mr(n,i,[],`Result: height=${ur(n,i)} for ${e.length} nodes — should be ${Math.ceil(Math.log2(e.length+1))}! O(n) worst case`,4)),t}function gr(){let e=[30,20,40,10,25,35,50,5,15,28],t=[],n={},r=0,i=null;t.push({...mr(n,null,[],`AVL Tree: balance factor = leftH - rightH, must stay in {-1,0,1}`,0),root:null});function a(e){let t=n[e].left,r=n[t].right;return n[t].right=e,n[e].left=r,fr(n,e),fr(n,t),t}function o(e){let t=n[e].right,r=n[t].left;return n[t].left=e,n[e].right=r,fr(n,e),fr(n,t),t}function s(e,c){if(e===null){let e=r++;return n[e]={id:e,val:c,left:null,right:null,height:1},e}t.push(mr(n,i,[e],`${c} ${c<n[e].val?`<`:`>`} ${n[e].val} → go ${c<n[e].val?`left`:`right`}`,2)),c<n[e].val?n[e].left=s(n[e].left,c):n[e].right=s(n[e].right,c),fr(n,e);let l=dr(n,e);return Math.abs(l)>1&&t.push(mr(n,i,[e],`⚠ bf[${n[e].val}]=${l} — need rotation!`,3)),l>1&&n[e].left!==null&&c<n[n[e].left].val?(t.push(mr(n,i,[e,n[e].left],`LL case: Right Rotate at ${n[e].val}`,5)),a(e)):l<-1&&n[e].right!==null&&c>n[n[e].right].val?(t.push(mr(n,i,[e,n[e].right],`RR case: Left Rotate at ${n[e].val}`,5)),o(e)):l>1&&n[e].left!==null?(t.push(mr(n,i,[e,n[e].left],`LR case: Left Rotate left child, then Right Rotate`,6)),n[e].left=o(n[e].left),a(e)):l<-1&&n[e].right!==null?(t.push(mr(n,i,[e,n[e].right],`RL case: Right Rotate right child, then Left Rotate`,6)),n[e].right=a(n[e].right),o(e)):e}for(let r of e)i=s(i,r),t.push(mr(n,i,[],`✓ Inserted ${r} — height=${ur(n,i)}, balanced!`,7));return t.push(mr(n,i,[],`✓ AVL complete: ${r} nodes, height=${ur(n,i)} — O(log n) guaranteed!`,8)),t}function _r(){let e=[],t={};e.push({...mr(t,null,[],`4 AVL Rotation Cases — the heart of self-balancing trees`,0),root:null});function n(e){let t={},n=0,r=null;function i(e,r){if(e===null){let e=n++;return t[e]={id:e,val:r,left:null,right:null,height:1},e}return r<t[e].val?t[e].left=i(t[e].left,r):t[e].right=i(t[e].right,r),fr(t,e),e}return e.forEach(e=>r=i(r,e)),{ns:t,r}}for(let{vals:t,label:r,fix:i,why:a}of[{vals:[30,20,10],label:`LL Case`,fix:`Single Right Rotation`,why:`Inserted left of left child`},{vals:[10,20,30],label:`RR Case`,fix:`Single Left Rotation`,why:`Inserted right of right child`},{vals:[30,10,20],label:`LR Case`,fix:`Left Rotate + Right Rotate`,why:`Inserted right of left child`},{vals:[10,30,20],label:`RL Case`,fix:`Right Rotate + Left Rotate`,why:`Inserted left of right child`}]){let{ns:o,r:s}=n(t),c={};Object.keys(o).forEach(e=>c[e]=dr(o,e));let l=Object.keys(o).filter(e=>Math.abs(c[e])>1).map(Number);e.push({nodes:pr(o),root:s,positions:qe(o,s),highlighted:l,visited:[],path:[],result:[],balanceFactors:c,msg:`${r}: insert [${t}] — ${a}`,ln:2}),e.push({nodes:pr(o),root:s,positions:qe(o,s),highlighted:l,visited:[],path:[],result:[],balanceFactors:c,msg:`Fix: ${i}`,ln:4})}return e.push({...mr(t,null,[],`✓ All 4 cases: LL→R, RR→L, LR→LR, RL→RL. Height stays O(log n)`,6),root:null}),e}var vr={avl:g(`// AVL Insert with rotations
class AVL {
  constructor(){this.root=null;}
  height(n){return n?n.height:0;}
  bf(n){return n?this.height(n.left)-this.height(n.right):0;}
  rotR(y){const x=y.left;y.left=x.right;x.right=y;
    y.height=1+Math.max(this.height(y.left),this.height(y.right));
    x.height=1+Math.max(this.height(x.left),this.height(x.right));return x;}
  rotL(x){const y=x.right;x.right=y.left;y.left=x;
    x.height=1+Math.max(this.height(x.left),this.height(x.right));
    y.height=1+Math.max(this.height(y.left),this.height(y.right));return y;}
  insert(val){this.root=this._ins(this.root,val);}
  _ins(n,val){
    if(!n)return{val,left:null,right:null,height:1};
    if(val<n.val)n.left=this._ins(n.left,val);
    else n.right=this._ins(n.right,val);
    n.height=1+Math.max(this.height(n.left),this.height(n.right));
    const bf=this.bf(n);
    if(bf>1&&val<n.left.val) return this.rotR(n);       // LL
    if(bf<-1&&val>n.right.val) return this.rotL(n);     // RR
    if(bf>1&&val>n.left.val){n.left=this.rotL(n.left);return this.rotR(n);} // LR
    if(bf<-1&&val<n.right.val){n.right=this.rotR(n.right);return this.rotL(n);} // RL
    return n;}}`,`class AVL:
    def height(self,n): return n.h if n else 0
    def bf(self,n): return self.height(n.l)-self.height(n.r) if n else 0
    def rotR(self,y):
        x=y.l;y.l=x.r;x.r=y
        y.h=1+max(self.height(y.l),self.height(y.r))
        x.h=1+max(self.height(x.l),self.height(x.r));return x
    def rotL(self,x):
        y=x.r;x.r=y.l;y.l=x
        x.h=1+max(self.height(x.l),self.height(x.r))
        y.h=1+max(self.height(y.l),self.height(y.r));return y
    def insert(self,n,v):
        if not n: return Node(v)
        if v<n.v: n.l=self.insert(n.l,v)
        else: n.r=self.insert(n.r,v)
        n.h=1+max(self.height(n.l),self.height(n.r))
        bf=self.bf(n)
        if bf>1 and v<n.l.v: return self.rotR(n)
        if bf<-1 and v>n.r.v: return self.rotL(n)
        if bf>1 and v>n.l.v: n.l=self.rotL(n.l);return self.rotR(n)
        if bf<-1 and v<n.r.v: n.r=self.rotR(n.r);return self.rotL(n)
        return n`,`struct Node{int v,h=1;Node*l=nullptr,*r=nullptr;Node(int v):v(v){}};
int h(Node*n){return n?n->h:0;}
void uh(Node*n){if(n)n->h=1+max(h(n->l),h(n->r));}
Node*rotR(Node*y){Node*x=y->l;y->l=x->r;x->r=y;uh(y);uh(x);return x;}
Node*rotL(Node*x){Node*y=x->r;x->r=y->l;y->l=x;uh(x);uh(y);return y;}
Node*ins(Node*n,int v){
    if(!n) return new Node(v);
    if(v<n->v) n->l=ins(n->l,v);
    else n->r=ins(n->r,v);
    uh(n);int b=h(n->l)-h(n->r);
    if(b>1&&v<n->l->v) return rotR(n);
    if(b<-1&&v>n->r->v) return rotL(n);
    if(b>1){n->l=rotL(n->l);return rotR(n);}
    if(b<-1){n->r=rotR(n->r);return rotL(n);}
    return n;
}`,`class N{int v,h=1;N l,r;N(int v){this.v=v;}}
class AVL{
    int h(N n){return n==null?0:n.h;}
    void uh(N n){if(n!=null)n.h=1+Math.max(h(n.l),h(n.r));}
    N rotR(N y){N x=y.l;y.l=x.r;x.r=y;uh(y);uh(x);return x;}
    N rotL(N x){N y=x.r;x.r=y.l;y.l=x;uh(x);uh(y);return y;}
    N ins(N n,int v){
        if(n==null) return new N(v);
        if(v<n.v) n.l=ins(n.l,v); else n.r=ins(n.r,v);
        uh(n);int b=h(n.l)-h(n.r);
        if(b>1&&v<n.l.v) return rotR(n);
        if(b<-1&&v>n.r.v) return rotL(n);
        if(b>1){n.l=rotL(n.l);return rotR(n);}
        if(b<-1){n.r=rotR(n.r);return rotL(n);}
        return n;
    }
}`)},yr=[5,3,8,1,9,2,7,4,6];function br(e){return Math.floor((e-1)/2)}function xr(e){return 2*e+1}function Sr(e){return 2*e+2}function Cr(e,t,n,r,i,a,o){return{heap:[...e],size:t,cur:n,swap:r,result:i,msg:a,ln:o}}function wr(){let e=[...yr],t=[];t.push(Cr(e,e.length,-1,[],``,`Brute: unsorted array — insert O(1), find-min O(n)`,0));for(let n=0;n<e.length;n++)t.push(Cr(e,n+1,n,[],``,`Insert ${e[n]} at index ${n} — just append, O(1)`,2));let n=0;for(let r=1;r<e.length;r++)t.push(Cr(e,e.length,r,[n,r],``,`Compare arr[${r}]=${e[r]} with current min arr[${n}]=${e[n]}`,3)),e[r]<e[n]&&(n=r);return t.push(Cr(e,e.length,n,[],``+e[n],`✓ Min=${e[n]} found — O(n) scan required!`,5)),t}function Tr(){let e=[],t=[];t.push(Cr([],0,-1,[],``,`Min-Heap: parent ≤ children always. Insert=O(log n)`,0));for(let n of yr){e.push(n);let r=e.length-1;for(t.push(Cr([...e],e.length,r,[],``,`Insert ${n} at index ${r} (last position)`,2));r>0&&e[br(r)]>e[r];){let n=br(r);t.push(Cr([...e],e.length,r,[r,n],``,`Sift-up: heap[${r}]=${e[r]} < parent heap[${n}]=${e[n]} → swap`,3)),[e[r],e[n]]=[e[n],e[r]],r=n,t.push(Cr([...e],e.length,r,[],``,`After swap: index ${r} = ${e[r]}`,4))}t.push(Cr([...e],e.length,0,[],``+e[0],`✓ Inserted ${n}. Min=${e[0]}`,5))}return t}function Er(){let e=[...yr],t=e.length,n=[];function r(e,t,r){for(;;){let i=t,a=xr(t),o=Sr(t);if(a<r&&e[a]<e[i]&&(i=a),o<r&&e[o]<e[i]&&(i=o),i===t)break;n.push(Cr([...e],r,t,[t,i],``,`Sift-down: swap ${e[t]} with child ${e[i]}`,3)),[e[t],e[i]]=[e[i],e[t]],t=i}}n.push(Cr([...e],t,-1,[],``,`Heapify from array — O(n) build (not O(n log n)!)`,0));for(let i=Math.floor(t/2)-1;i>=0;i--)n.push(Cr([...e],t,i,[],``,`Heapify node ${i} (val=${e[i]})`,2)),r(e,i,t);n.push(Cr([...e],t,0,[],``+e[0],`✓ Heap built in O(n)! Min=${e[0]}`,5));for(let i=0;i<3;i++){let a=e[0];n.push(Cr([...e],t-i,0,[],``+a,`Extract-Min=${a}: move last to root`,6)),e[0]=e[t-i-1],e.length=t-i-1,r(e,0,t-i-1),n.push(Cr([...e],t-i-1,0,[],``+a,`After sift-down: next min=${e[0]}`,7))}return n.push(Cr([...e],e.length,0,[],``,`✓ Each extract O(log n) — heap property maintained!`,8)),n}var Dr=[[1,3],[2,6],[8,10],[15,18],[5,7]],Or=[[0,30],[5,10],[15,20],[7,13]];function z(e,t,n,r,i,a,o){return{intervals:e.map(e=>[...e]),merged:t.map(e=>[...e]),cur:n,active:r,result:i,msg:a,ln:o}}function kr(){let e=Dr.map(e=>[...e]),t=[];e.length,t.push(z(e,[],[],-1,0,`Merge Intervals brute: check every pair O(n²)`,0));let n=!0,r=e.map(e=>[...e]);for(;n;){n=!1;for(let e=0;e<r.length;e++){for(let i=e+1;i<r.length;i++)if(t.push(z(r,[],[e,i],-1,r.length,`Compare [${r[e]}] with [${r[i]}]`,2)),r[e][0]<=r[i][1]&&r[i][0]<=r[e][1]){let a=[Math.min(r[e][0],r[i][0]),Math.max(r[e][1],r[i][1])];t.push(z(r,[],[e,i],-1,r.length,`Overlap! Merge → [${a}]`,3)),r[e]=a,r.splice(i,1),n=!0;break}if(n)break}}return t.push(z(r,r,[],r.length-1,r.length,`✓ Merged: ${r.map(e=>`[${e}]`).join(` `)} — O(n²)`,5)),t}function Ar(){let e=[...Dr].sort((e,t)=>e[0]-t[0]),t=[],n=[];t.push(z(e,[],[],-1,0,`Sort by start, then sweep — O(n log n)`,0));for(let r=0;r<e.length;r++)t.push(z(e,n.map(e=>[...e]),[r],-1,n.length,`Process [${e[r]}]`,2)),!n.length||n[n.length-1][1]<e[r][0]?(n.push([...e[r]]),t.push(z(e,n.map(e=>[...e]),[r],-1,n.length,`No overlap — append [${e[r]}]`,3))):(n[n.length-1][1]=Math.max(n[n.length-1][1],e[r][1]),t.push(z(e,n.map(e=>[...e]),[r],n.length-1,n.length,`Overlap! Extend to [${n[n.length-1]}]`,4)));return t.push(z(e,n,[],-1,n.length,`✓ Merged: ${n.map(e=>`[${e}]`).join(` `)} — O(n log n)`,5)),t}function jr(){let e=[...Dr].sort((e,t)=>e[0]-t[0]),t=[],n=e.length,r=0;t.push(z(e,[],[],-1,0,`In-place: write merged back to same array`,0));for(let i=1;i<n;i++)t.push(z(e,e.slice(0,r+1).map(e=>[...e]),[i],r,r+1,`ivls[${i}]=[${e[i]}] vs last=[${e[r]}]`,2)),e[i][0]<=e[r][1]?(e[r][1]=Math.max(e[r][1],e[i][1]),t.push(z(e,e.slice(0,r+1).map(e=>[...e]),[i],r,r+1,`Extend: [${e[r]}]`,3))):(r++,e[r]=[...e[i]],t.push(z(e,e.slice(0,r+1).map(e=>[...e]),[i],r,r+1,`No overlap — advance k to ${r}`,4)));return t.push(z(e,e.slice(0,r+1).map(e=>[...e]),[],-1,r+1,`✓ ${r+1} merged intervals — O(1) extra space!`,5)),t}function Mr(){let e=Or.map(e=>[...e]),t=e.length,n=[];n.push(z(e,[],[],-1,0,`Meeting Rooms II: min rooms needed`,0));let r=1;for(let i=0;i<t;i++){let a=1;for(let n=0;n<t;n++)i!==n&&e[n][0]<e[i][1]&&e[i][0]<e[n][1]&&a++;r=Math.max(r,a),n.push(z(e,[],[i],i,r,`Meeting [${e[i]}]: ${a} concurrent meetings`,2))}return n.push(z(e,[],[],-1,r,`✓ Min rooms needed = ${r} — O(n²)`,4)),n}function Nr(){let e=Or,t=[],n=[];e.forEach(([e,t])=>{n.push([e,1]),n.push([t,-1])}),n.sort((e,t)=>e[0]-t[0]||e[1]-t[1]),t.push(z(e,[],[],-1,0,`Events: +1 at start, -1 at end, track max concurrent`,0));let r=0,i=0,a=[];for(let[o,s]of n)r+=s,i=Math.max(i,r),a.push([o,o+0]),t.push(z(e,a.map(e=>[...e]),[],-1,i,`t=${o}: ${s>0?`start +1`:`end -1`} → active=${r} max=${i}`,3));return t.push(z(e,[],[],-1,i,`✓ Min rooms = ${i} — O(n log n)`,5)),t}function Pr(){let e=Or,t=[],n=[...e.map(e=>e[0])].sort((e,t)=>e-t),r=[...e.map(e=>e[1])].sort((e,t)=>e-t),i=0,a=0,o=0;t.push(z(e,[],[],-1,0,`Sorted starts=[${n}] ends=[${r}]`,0));for(let s=0;s<n.length;s++)n[s]<r[o]?(i++,t.push(z(e,[],[],s,i=Math.max(a=i,a),`start ${n[s]} < end ${r[o]} → need new room (${i})`,3))):(i--,o++,t.push(z(e,[],[],s,i=Math.max(0,i),`start ${n[s]} ≥ end ${r[o-1]} → room freed (${i})`,4))),a=Math.max(a,i);return t.push(z(e,[],[],-1,a,`✓ Min rooms = ${a} — O(n log n), O(n) space`,5)),t}var Fr=`abcabcbb`;function Ir(){let e=Fr,t=[],n=0,r=``;t.push({a:[...e],wStart:0,wEnd:0,maxStart:0,maxEnd:0,curSum:0,maxSum:0,msg:`Brute: check every substring O(n³)`,ln:0});for(let i=0;i<8;i++)for(let a=i;a<8;a++){let o=e.slice(i,a+1),s=new Set(o).size!==o.length;t.push({a:[...e],wStart:i,wEnd:a,maxStart:0,maxEnd:r.length-1,curSum:o.length,maxSum:n,msg:`"${o}": ${s?`has duplicates`:`unique! len=`+o.length}`,ln:2}),!s&&o.length>n&&(n=o.length,r=o)}return t.push({a:[...e],wStart:0,wEnd:r.length-1,maxStart:0,maxEnd:r.length-1,curSum:n,maxSum:n,msg:`✓ Longest="${r}" len=${n} — O(n³)`,ln:4}),t}function Lr(){let e=Fr,t=[],n={},r=0,i=0,a=0;t.push({a:[...e],wStart:0,wEnd:0,maxStart:0,maxEnd:0,curSum:0,maxSum:0,msg:`Sliding window + hashmap: O(n)`,ln:0});for(let o=0;o<8;o++)n[e[o]]!==void 0&&n[e[o]]>=r&&(t.push({a:[...e],wStart:r,wEnd:o,maxStart:a,maxEnd:a+i-1,curSum:o-r,maxSum:i,msg:`Dup '${e[o]}' at ${o}: shrink left from ${r} to ${n[e[o]]+1}`,ln:3}),r=n[e[o]]+1),n[e[o]]=o,o-r+1>i&&(i=o-r+1,a=r),t.push({a:[...e],wStart:r,wEnd:o,maxStart:a,maxEnd:a+i-1,curSum:o-r+1,maxSum:i,msg:`window="${e.slice(r,o+1)}" len=${o-r+1} max=${i}`,ln:4});return t.push({a:[...e],wStart:a,wEnd:a+i-1,maxStart:a,maxEnd:a+i-1,curSum:i,maxSum:i,msg:`✓ Longest="${e.slice(a,a+i)}" len=${i} — O(n)`,ln:5}),t}function Rr(){let e=[1,2,3,4,5],t=e.map((t,n)=>({id:n,val:t,next:n<e.length-1?n+1:2})),n=[];function r(e,n,r,i,a){return{nodes:t.map(e=>({...e})),slow:e,fast:n,head:0,cycle:!0,cycleEntry:2,phase:r,msg:i,ln:a}}n.push(r(-1,-1,`init`,`Floyd: find cycle start. 1→2→3→4→5→3 (cycle at ${t[2].val})`,0));let i=0,a=0;n.push(r(i,a,`detect`,`Phase 1: move slow=1, fast=2 until they meet`,2));for(let e=0;e<8;e++)if(i=t[i].next,a=t[t[a].next].next,n.push(r(i,a,`detect`,`slow→${t[i].val}, fast→${t[a].val}`,3)),i===a){n.push(r(i,a,`meet`,`Meeting point: node ${t[i].val}!`,4));break}let o=0;for(n.push(r(o,i,`find`,`Phase 2: reset ptr1 to head, ptr2 stays at meeting point`,5));o!==i;)o=t[o].next,i=t[i].next,n.push(r(o,i,`find`,`ptr1→${t[o].val}, ptr2→${t[i].val}`,6));return n.push(r(o,i,`done`,`✓ Cycle starts at node ${t[o].val}! O(n) time O(1) space`,7)),n}function zr(){let e=[1,2,3,4,5],t=e.map((t,n)=>({id:n,val:t,next:n<e.length-1?n+1:2})),n=[];function r(e,n,r,i,a){return{nodes:t.map(e=>({...e})),slow:e,fast:n,head:0,cycle:null,cycleEntry:2,phase:r,msg:i,ln:a}}n.push(r(0,0,`init`,`Detect cycle only: slow=1 step, fast=2 steps`,0));let i=0,a=0;for(let e=0;e<8;e++)if(i=t[i].next,a=t[t[a].next].next,n.push(r(i,a,`detect`,`slow=${t[i].val}, fast=${t[a].val}`,2)),i===a)return n.push(r(i,a,`meet`,`✓ Cycle detected! They meet at ${t[i].val}`,4)),n;return n.push(r(-1,-1,`done`,`No cycle`,4)),n}var Br=[`push:3`,`push:1`,`push:5`,`push:2`,`getMin`,`pop`,`getMin`,`push:0`,`getMin`];function Vr(){let e=[],t=[];t.push({stack:[...e],minStack:[],op:``,top:null,minVal:null,msg:`Min Stack brute: scan stack for min each time O(n)`,ln:0});for(let n of Br)if(n.startsWith(`push:`)){let r=+n.split(`:`)[1];e.push(r),t.push({stack:[...e],minStack:[],op:n,top:r,minVal:Math.min(...e),msg:`push(${r}) — stack=[${e}] min=${Math.min(...e)} via scan`,ln:2})}else if(n===`pop`){let r=e.pop();t.push({stack:[...e],minStack:[],op:n,top:e[e.length-1]??null,minVal:e.length?Math.min(...e):null,msg:`pop()=${r} — must rescan for new min O(n)`,ln:4})}else t.push({stack:[...e],minStack:[],op:n,top:e[e.length-1]??null,minVal:Math.min(...e),msg:`getMin()=${Math.min(...e)} — O(n) scan!`,ln:6});return t}function Hr(){let e=[],t=[],n=[];n.push({stack:[],minStack:[],op:``,top:null,minVal:null,msg:`Min Stack O(1): auxiliary min-stack tracks running minimum`,ln:0});for(let r of Br)if(r.startsWith(`push:`)){let i=+r.split(`:`)[1];e.push(i),(!t.length||i<=t[t.length-1])&&t.push(i),n.push({stack:[...e],minStack:[...t],op:r,top:i,minVal:t[t.length-1],msg:`push(${i}): min-stack=${JSON.stringify(t)}`,ln:2})}else if(r===`pop`){let i=e.pop();i===t[t.length-1]&&t.pop(),n.push({stack:[...e],minStack:[...t],op:r,top:e[e.length-1]??null,minVal:t[t.length-1]??null,msg:`pop()=${i}: min-stack=${JSON.stringify(t)}`,ln:4})}else n.push({stack:[...e],minStack:[...t],op:r,top:e[e.length-1]??null,minVal:t[t.length-1]??null,msg:`getMin()=${t[t.length-1]} — O(1)!`,ln:6});return n}var Ur={h:g(`class MinHeap{constructor(){this.h=[];}
  ins(v){this.h.push(v);this._up(this.h.length-1);}
  _up(i){while(i>0){const p=(i-1)>>1;if(this.h[p]>this.h[i]){[this.h[p],this.h[i]]=[this.h[i],this.h[p]];i=p;}else break;}}
  extract(){const m=this.h[0];this.h[0]=this.h.pop();this._down(0);return m;}
  _down(i){const n=this.h.length;while(true){let s=i,l=2*i+1,r=2*i+2;if(l<n&&this.h[l]<this.h[s])s=l;if(r<n&&this.h[r]<this.h[s])s=r;if(s===i)break;[this.h[i],this.h[s]]=[this.h[s],this.h[i]];i=s;}}
  min(){return this.h[0];}}`,`import heapq
h=[]
heapq.heappush(h,5)   # O(log n)
heapq.heappop(h)      # O(log n)
h[0]                  # peek min O(1)`,`priority_queue<int,vector<int>,greater<int>>pq;
pq.push(5);  // O(log n)
pq.top();    // O(1)
pq.pop();    // O(log n)`,`PriorityQueue<Integer>pq=new PriorityQueue<>();
pq.offer(5); // O(log n)
pq.peek();   // O(1)
pq.poll();   // O(log n)`)},Wr={merge:g(`function merge(ivls){
  ivls.sort((a,b)=>a[0]-b[0]);
  const res=[ivls[0]];
  for(const[s,e]of ivls.slice(1)){
    if(s<=res.at(-1)[1])res.at(-1)[1]=Math.max(res.at(-1)[1],e);
    else res.push([s,e]);
  }return res;}`,`def merge(ivls):
    ivls.sort()
    res=[ivls[0]]
    for s,e in ivls[1:]:
        if s<=res[-1][1]: res[-1][1]=max(res[-1][1],e)
        else: res.append([s,e])
    return res`,`vector<vector<int>>merge(vector<vector<int>>&v){
    sort(v.begin(),v.end());
    vector<vector<int>>r={v[0]};
    for(auto&i:v){
        if(i[0]<=r.back()[1])
            r.back()[1]=max(r.back()[1],i[1]);
        else r.push_back(i);
    }return r;
}`,`int[][]merge(int[][]v){
    Arrays.sort(v,(a,b)->a[0]-b[0]);
    List<int[]>r=new ArrayList<>();
    r.add(v[0]);
    for(int[]i:v){
        int[]last=r.get(r.size()-1);
        if(i[0]<=last[1]) last[1]=Math.max(last[1],i[1]);
        else r.add(i);
    }
    return r.toArray(new int[0][]);
}`),lsub:g(`function lengthOfLongestSubstring(s){
  const map={};let l=0,max=0;
  for(let r=0;r<s.length;r++){
    if(map[s[r]]>=l)l=map[s[r]]+1;
    map[s[r]]=r;
    max=Math.max(max,r-l+1);
  }return max;}`,`def lengthOfLongestSubstring(s):
    m={};l=res=0
    for r,c in enumerate(s):
        if c in m and m[c]>=l: l=m[c]+1
        m[c]=r;res=max(res,r-l+1)
    return res`,`int lengthOfLongestSubstring(string s){
    unordered_map<char,int>m;
    int l=0,res=0;
    for(int r=0;r<(int)s.size();r++){
        if(m.count(s[r])&&m[s[r]]>=l)
            l=m[s[r]]+1;
        m[s[r]]=r;
        res=max(res,r-l+1);
    }return res;
}`,`int lengthOfLongestSubstring(String s){
    Map<Character,Integer>m=new HashMap<>();
    int l=0,res=0;
    for(int r=0;r<s.length();r++){
        char c=s.charAt(r);
        if(m.containsKey(c)&&m.get(c)>=l)
            l=m.get(c)+1;
        m.put(c,r);
        res=Math.max(res,r-l+1);
    }return res;
}`)},Gr={opt:g(`class MinStack{constructor(){this.s=[];this.m=[];}
  push(v){this.s.push(v);if(!this.m.length||v<=this.m.at(-1))this.m.push(v);}
  pop(){if(this.s.pop()===this.m.at(-1))this.m.pop();}
  getMin(){return this.m.at(-1);} // O(1)!
  top(){return this.s.at(-1);}}`,`class MinStack:
    def __init__(self): self.s=[];self.m=[]
    def push(self,v): self.s.append(v);(not self.m or v<=self.m[-1])and self.m.append(v)
    def pop(self): v=self.s.pop();v==self.m[-1]and self.m.pop()
    def getMin(self): return self.m[-1]  # O(1)`,`class MinStack{
    stack<int>s,m;
public:
    void push(int v){
        s.push(v);
        if(m.empty()||v<=m.top()) m.push(v);
    }
    void pop(){
        if(s.top()==m.top()) m.pop();
        s.pop();
    }
    int getMin(){return m.top();}
    int top(){return s.top();}
};`,`class MinStack{
    Deque<Integer>s=new ArrayDeque<>(),m=new ArrayDeque<>();
    public void push(int v){
        s.push(v);
        if(m.isEmpty()||v<=m.peek()) m.push(v);
    }
    public void pop(){
        if(s.pop().equals(m.peek())) m.pop();
    }
    public int getMin(){return m.peek();}
    public int top(){return s.peek();}
}`)},Kr=[[1,1,0,0,0],[1,1,0,0,1],[0,0,0,1,1],[0,0,0,0,0],[1,0,1,0,1]],qr=[[`A`,`B`,`C`,`E`],[`S`,`F`,`C`,`S`],[`A`,`D`,`E`,`E`]],Jr=`ABCCED`,Yr=[[0,1],[1,0],[0,-1],[-1,0]];function Xr(e){return e.map(e=>[...e])}function Zr(e,t,n,r,i,a,o,s){return{grid:e.map(e=>[...e]),visited:t.map(e=>[...e]),cur:n,islands:r,path:[...i],found:a,msg:o,ln:s}}function Qr(){let e=Xr(Kr),t=e.length,n=e[0].length,r=[],i=Array.from({length:t},()=>Array(n).fill(0)),a=0;r.push(Zr(e,i,null,0,[],!1,`Brute: scan all cells, flood fill each unvisited 1`,0));for(let o=0;o<t;o++)for(let s=0;s<n;s++)if(e[o][s]===1&&!i[o][s]){a++,r.push(Zr(e,i,[o,s],a,[],!1,`Found land at [${o},${s}] → Island #${a}! Flood fill...`,2));let c=[[o,s]];for(i[o][s]=a;c.length;){let[o,s]=c.shift();for(let[l,u]of Yr){let d=o+l,f=s+u;d>=0&&d<t&&f>=0&&f<n&&e[d][f]===1&&!i[d][f]&&(i[d][f]=a,c.push([d,f]),r.push(Zr(e,i,[d,f],a,[],!1,`Mark [${d},${f}] as Island #${a}`,3)))}}}return r.push(Zr(e,i,null,a,[],!0,`✓ Found ${a} islands — O(n·m) time`,5)),r}function $r(){let e=Xr(Kr),t=e.length,n=e[0].length,r=[],i=Array.from({length:t},()=>Array(n).fill(0)),a=0;r.push(Zr(e,i,null,0,[],!1,`DFS: recursively sink connected land cells`,0));function o(s,c,l,u){if(!(s<0||s>=t||c<0||c>=n||e[s][c]===0||i[s][c])){i[s][c]=l,u.push([s,c]),r.push(Zr(e,i,[s,c],a,[...u],!1,`DFS visit [${s},${c}] — Island #${l}`,3));for(let[e,t]of Yr)o(s+e,c+t,l,[...u])}}for(let s=0;s<t;s++)for(let t=0;t<n;t++)e[s][t]===1&&!i[s][t]&&(a++,r.push(Zr(e,i,[s,t],a,[],!1,`Start DFS at [${s},${t}] → Island #${a}`,2)),o(s,t,a,[]));return r.push(Zr(e,i,null,a,[],!0,`✓ ${a} islands — DFS O(n·m) time O(n·m) stack`,5)),r}function ei(){let e=Xr(Kr),t=e.length,n=e[0].length,r=[],i=Array.from({length:t},()=>Array(n).fill(0)),a=0;r.push(Zr(e,i,null,0,[],!1,`BFS: use queue to spread across each island`,0));for(let o=0;o<t;o++)for(let s=0;s<n;s++)if(e[o][s]===1&&!i[o][s]){a++;let c=[[o,s]];for(i[o][s]=a,r.push(Zr(e,i,[o,s],a,[],!1,`BFS from [${o},${s}] → Island #${a}`,2));c.length;){let[o,s]=c.shift();r.push(Zr(e,i,[o,s],a,[],!1,`Process [${o},${s}] — check 4 neighbors`,3));for(let[l,u]of Yr){let d=o+l,f=s+u;d>=0&&d<t&&f>=0&&f<n&&e[d][f]===1&&!i[d][f]&&(i[d][f]=a,c.push([d,f]),r.push(Zr(e,i,[d,f],a,[],!1,`Enqueue neighbor [${d},${f}]`,4)))}}}return r.push(Zr(e,i,null,a,[],!0,`✓ ${a} islands — BFS O(n·m) same complexity, iterative`,5)),r}function ti(e,t,n,r,i,a,o){return{grid:e.map(e=>[...e]),visited:t.map(e=>[...e]),cur:n,islands:0,path:[...r],found:i,msg:a,ln:o,word:Jr}}function ni(){let e=qr,t=e.length,n=e[0].length,r=Jr,i=[],a=Array.from({length:t},()=>Array(n).fill(0));i.push(ti(e,a,null,[],!1,`Search for "${r}" in grid — brute: try every cell`,0));let o=!1,s=0;outer:for(let c=0;c<t&&!o;c++)for(let l=0;l<n&&!o;l++)if(e[c][l]===r[0]){s++,i.push(ti(e,a,[c,l],[],!1,`Try start [${c},${l}]='${e[c][l]}' matches '${r[0]}'`,2));function u(s,c,l,d){if(l===6)return o=!0,!0;if(s<0||s>=t||c<0||c>=n||a[s][c]||e[s][c]!==r[l])return!1;a[s][c]=1,d.push([s,c]),i.push(ti(e,a,[s,c],[...d],!1,`Match '${r[l]}' at [${s},${c}] — idx=${l}`,3));for(let[e,t]of Yr)if(u(s+e,c+t,l+1,d))return!0;return a[s][c]=0,d.pop(),i.push(ti(e,a,[s,c],[...d],!1,`Backtrack from [${s},${c}]`,4)),!1}if(u(c,l,0,[]))return i.push(ti(e,a,null,[],!0,`✓ Found "${r}"! ${s} starts tried`,5)),i;a.forEach(e=>e.fill(0))}return o||i.push(ti(e,a,null,[],!1,`"${r}" not found`,5)),i}function ri(){let e=qr,t=e.length,n=e[0].length,r=Jr,i=[],a=Array.from({length:t},()=>Array(n).fill(0));i.push(ti(e,a,null,[],!1,`DFS + backtracking: explore, backtrack on mismatch`,0));let o=!1;function s(c,l,u,d){if(!o){if(u===6){o=!0,i.push(ti(e,a,null,[...d],!0,`✓ "${r}" found! Path: ${d.map(e=>`[${e}]`).join(`→`)}`,5));return}if(!(c<0||c>=t||l<0||l>=n||a[c][l]||e[c][l]!==r[u])){a[c][l]=1,d.push([c,l]),i.push(ti(e,a,[c,l],[...d],!1,`Match '${r[u]}' at [${c},${l}] (${u+1}/6)`,2));for(let[e,t]of Yr)s(c+e,l+t,u+1,[...d]);o||(a[c][l]=0,d.pop(),i.push(ti(e,a,[c,l],[...d],!1,`Backtrack [${c},${l}] — dead end`,4)))}}}for(let e=0;e<t&&!o;e++)for(let t=0;t<n&&!o;t++)s(e,t,0,[]);return o||i.push(ti(e,a,null,[],!1,`"${r}" not found in grid`,5)),i}var ii={islands:g(`function numIslands(grid){
  const R=grid.length,C=grid[0].length;
  let count=0;
  function dfs(r,c){
    if(r<0||r>=R||c<0||c>=C||grid[r][c]==='0') return;
    grid[r][c]='0'; // sink the land
    dfs(r+1,c);dfs(r-1,c);
    dfs(r,c+1);dfs(r,c-1);
  }
  for(let r=0;r<R;r++)
    for(let c=0;c<C;c++)
      if(grid[r][c]==='1'){count++;dfs(r,c);}
  return count; // O(n·m)
}`,`def numIslands(grid):
    def dfs(r,c):
        if r<0 or r>=len(grid) or c<0 or c>=len(grid[0]): return
        if grid[r][c]!='1': return
        grid[r][c]='0'
        dfs(r+1,c);dfs(r-1,c)
        dfs(r,c+1);dfs(r,c-1)
    count=0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c]=='1':
                count+=1;dfs(r,c)
    return count`,`int numIslands(vector<vector<char>>&g){
    int R=g.size(),C=g[0].size(),cnt=0;
    function<void(int,int)>dfs=[&](int r,int c){
        if(r<0||r>=R||c<0||c>=C||g[r][c]!='1') return;
        g[r][c]='0';
        dfs(r+1,c);dfs(r-1,c);
        dfs(r,c+1);dfs(r,c-1);
    };
    for(int r=0;r<R;r++)
        for(int c=0;c<C;c++)
            if(g[r][c]=='1'){cnt++;dfs(r,c);}
    return cnt;
}`,`int numIslands(char[][]g){
    int R=g.length,C=g[0].length,cnt=0;
    for(int r=0;r<R;r++)
        for(int c=0;c<C;c++)
            if(g[r][c]=='1'){cnt++;dfs(g,r,c,R,C);}
    return cnt;
}
void dfs(char[][]g,int r,int c,int R,int C){
    if(r<0||r>=R||c<0||c>=C||g[r][c]!='1') return;
    g[r][c]='0';
    dfs(g,r+1,c,R,C);dfs(g,r-1,c,R,C);
    dfs(g,r,c+1,R,C);dfs(g,r,c-1,R,C);
}`),wordsearch:g(`function exist(board,word){
  const R=board.length,C=board[0].length;
  function dfs(r,c,i){
    if(i===word.length) return true;
    if(r<0||r>=R||c<0||c>=C) return false;
    if(board[r][c]!==word[i]) return false;
    const tmp=board[r][c];
    board[r][c]='#'; // mark visited
    const found=dfs(r+1,c,i+1)||dfs(r-1,c,i+1)||
                dfs(r,c+1,i+1)||dfs(r,c-1,i+1);
    board[r][c]=tmp; // restore
    return found;
  }
  for(let r=0;r<R;r++)
    for(let c=0;c<C;c++)
      if(dfs(r,c,0)) return true;
  return false;
}`,`def exist(board,word):
    R,C=len(board),len(board[0])
    def dfs(r,c,i):
        if i==len(word): return True
        if r<0 or r>=R or c<0 or c>=C: return False
        if board[r][c]!=word[i]: return False
        tmp=board[r][c];board[r][c]='#'
        res=dfs(r+1,c,i+1) or dfs(r-1,c,i+1) or \\
            dfs(r,c+1,i+1) or dfs(r,c-1,i+1)
        board[r][c]=tmp
        return res
    return any(dfs(r,c,0) for r in range(R)
               for c in range(C))`,`bool exist(vector<vector<char>>&b,string w){
    int R=b.size(),C=b[0].size();
    function<bool(int,int,int)>dfs=[&](int r,int c,int i)->bool{
        if(i==(int)w.size()) return true;
        if(r<0||r>=R||c<0||c>=C||b[r][c]!=w[i]) return false;
        char tmp=b[r][c];b[r][c]='#';
        bool ok=dfs(r+1,c,i+1)||dfs(r-1,c,i+1)||
                dfs(r,c+1,i+1)||dfs(r,c-1,i+1);
        b[r][c]=tmp;return ok;
    };
    for(int r=0;r<R;r++)
        for(int c=0;c<C;c++)
            if(dfs(r,c,0)) return true;
    return false;
}`,`boolean exist(char[][]b,String w){
    int R=b.length,C=b[0].length;
    for(int r=0;r<R;r++)
        for(int c=0;c<C;c++)
            if(dfs(b,r,c,0,w,R,C)) return true;
    return false;
}
boolean dfs(char[][]b,int r,int c,int i,String w,int R,int C){
    if(i==w.length()) return true;
    if(r<0||r>=R||c<0||c>=C||b[r][c]!=w.charAt(i)) return false;
    char tmp=b[r][c];b[r][c]='#';
    boolean ok=dfs(b,r+1,c,i+1,w,R,C)||dfs(b,r-1,c,i+1,w,R,C)||
               dfs(b,r,c+1,i+1,w,R,C)||dfs(b,r,c-1,i+1,w,R,C);
    b[r][c]=tmp;return ok;
}`)},ai=[1,3,-1,-3,5,3,6,7],oi=3;function si(e=ai){let t=e.length,n=oi,r=[],i=[];r.push({a:e,wStart:0,wEnd:n-1,curSum:-1/0,maxSum:-1/0,msg:`Sliding Window Max brute: O(n·k)`,ln:0});for(let a=0;a<=t-n;a++){let t=e[a];for(let o=a;o<a+n;o++)t=Math.max(t,e[o]),r.push({a:e,wStart:a,wEnd:a+n-1,curSum:t,maxSum:i.length?Math.max(...i):-1/0,msg:`Window [${a}..${a+n-1}]: check ${e[o]}, max so far=${t}`,ln:2});i.push(t),r.push({a:e,wStart:a,wEnd:a+n-1,curSum:t,maxSum:t,msg:`Window [${a}..${a+n-1}] max=${t}`,ln:3})}return r.push({a:e,wStart:0,wEnd:n-1,curSum:0,maxSum:Math.max(...i),msg:`✓ Maxima=[${i}] — O(n·k)`,ln:5}),r}function ci(e=ai){let t=e.length,n=oi,r=[],i=[],a=[];r.push({a:e,wStart:0,wEnd:n-1,curSum:0,maxSum:0,msg:`Monotonic Deque: keep indices of decreasing values O(n)`,ln:0});for(let o=0;o<t;o++){for(;i.length&&i[0]<o-n+1;)r.push({a:e,wStart:Math.max(0,o-n+1),wEnd:o,curSum:e[i[0]],maxSum:a.length?a[a.length-1]:0,msg:`Remove outdated idx ${i[0]} from front`,ln:2}),i.shift();for(;i.length&&e[i[i.length-1]]<=e[o];)r.push({a:e,wStart:Math.max(0,o-n+1),wEnd:o,curSum:e[o],maxSum:a.length?a[a.length-1]:0,msg:`arr[${i[i.length-1]}]=${e[i[i.length-1]]} ≤ ${e[o]}: remove`,ln:3}),i.pop();i.push(o),o>=n-1&&(a.push(e[i[0]]),r.push({a:e,wStart:o-n+1,wEnd:o,curSum:e[i[0]],maxSum:e[i[0]],msg:`Window [${o-n+1}..${o}] max=${e[i[0]]} (deque front)`,ln:4}))}return r.push({a:e,wStart:0,wEnd:n-1,curSum:0,maxSum:Math.max(...a),msg:`✓ [${a}] — O(n) each element added/removed once!`,ln:6}),r}var li=[3,1,4,2,6],ui=7;function di(){let e=li,t=ui,n=[],r=0;n.push({s1:e.join(`,`),s2:String(t),table:null,i:-1,j:t,result:null,msg:`Subset Sum: can we pick nums to sum=${t}? Recursive O(2^n)`,ln:0});function i(a,o){return r++,o===0?(n.push({s1:e.join(`,`),s2:String(t),table:null,i:a,j:o,result:1,msg:`✓ Sum=0 reached! Subset exists — calls=${r}`,ln:2}),!0):a>=e.length||o<0?(n.push({s1:e.join(`,`),s2:String(t),table:null,i:a,j:Math.max(0,o),result:0,msg:`Dead end: idx=${a} rem=${o}`,ln:3}),!1):(n.push({s1:e.join(`,`),s2:String(t),table:null,i:a,j:o,result:null,msg:`solve(${a},${o}): skip ${e[a]} or take it`,ln:4}),i(a+1,o)||i(a+1,o-e[a]))}let a=i(0,t);return n.push({s1:e.join(`,`),s2:String(t),table:null,i:-1,j:0,result:+!!a,msg:`${a?`✓ YES`:`✗ NO`}: subset sum=${t} (${r} calls)`,ln:5}),n}function fi(){let e=li,t=ui,n=e.length,r=[],i=Array.from({length:n+1},()=>Array(t+1).fill(null));for(let e=0;e<=n;e++)i[e][0]=1;r.push({s1:e.join(`,`),s2:String(t),table:i.map(e=>[...e]),i:0,j:0,result:null,msg:`Subset DP: dp[i][j]=can we reach sum j using first i nums`,ln:0});for(let a=1;a<=n;a++)for(let n=0;n<=t;n++)i[a][n]=i[a-1][n],n>=e[a-1]&&i[a-1][n-e[a-1]]&&(i[a][n]=1),r.push({s1:e.join(`,`),s2:String(t),table:i.map(e=>[...e]),i:a,j:n,result:i[a][n],msg:`dp[${a}][${n}]: skip=${i[a-1][n]} | take(${e[a-1]})=${n>=e[a-1]?i[a-1][n-e[a-1]]:`-`} → ${i[a][n]?`YES`:`NO`}`,ln:3});return r.push({s1:e.join(`,`),s2:String(t),table:i.map(e=>[...e]),i:n,j:t,result:i[n][t],msg:`✓ dp[${n}][${t}]=${i[n][t]?`YES`:`NO`} — O(n·target)`,ln:5}),r}function pi(){let e=li,t=ui,n=e.length,r=[],i=Array(t+1).fill(0);i[0]=1;let a=[i.map(e=>e?1:null),...Array(n).fill(null).map(()=>Array(t+1).fill(null))];r.push({s1:e.join(`,`),s2:String(t),table:a,i:0,j:0,result:null,msg:`Subset DP space-optimized: single row O(target) space`,ln:0});for(let a=0;a<n;a++){let o=[...i];for(let s=e[a];s<=t;s++)i[s-e[a]]&&(o[s]=1),r.push({s1:e.join(`,`),s2:String(t),table:[o.map(e=>e?1:null),...Array(n-a-1).fill(null).map(()=>Array(t+1).fill(null))],i:a+1,j:s,result:o[s],msg:`j=${s}: dp[${s-e[a]}]=${i[s-e[a]]} → dp[${s}]=${o[s]}`,ln:3});i=o}return r.push({s1:e.join(`,`),s2:String(t),table:[i.map(e=>e?1:null)],i:n,j:t,result:i[t],msg:`✓ dp[${t}]=${i[t]?`YES`:`NO`} — O(n·target) time O(target) space!`,ln:5}),r}var mi=`babad`;function hi(){let e=mi,t=[],n=e[0];t.push({text:e,pat:e[0],i:0,j:0,matches:[0],msg:`Longest Palindrome brute: check all O(n³) substrings`,ln:0});for(let r=0;r<5;r++)for(let i=r;i<5;i++){let a=e.slice(r,i+1),o=a===a.split(``).reverse().join(``);t.push({text:e,pat:a,i:r,j:i,matches:o?Array.from({length:i-r+1},(e,t)=>r+t):[],msg:`"${a}": ${o?`✓ palindrome len=`+a.length:`✗ not palindrome`}`,ln:2}),o&&a.length>n.length&&(n=a)}return t.push({text:e,pat:n,i:e.indexOf(n),j:e.indexOf(n)+n.length-1,matches:Array.from({length:n.length},(t,r)=>e.indexOf(n)+r),msg:`✓ Longest: "${n}" len=${n.length} — O(n³)`,ln:4}),t}function gi(){let e=mi,t=[],n=0,r=1;t.push({text:e,pat:e[0],i:0,j:0,matches:[0],msg:`Expand around center: O(n²) — 2n-1 centers`,ln:0});function i(i,a){for(;i>=0&&a<5&&e[i]===e[a];)a-i+1>r&&(r=a-i+1,n=i),t.push({text:e,pat:e.slice(i,a+1),i,j:a,matches:Array.from({length:a-i+1},(e,t)=>i+t),msg:`Expand: "${e.slice(i,a+1)}" len=${a-i+1} ✓`,ln:3}),i--,a++}for(let n=0;n<5;n++)t.push({text:e,pat:e[n],i:n,j:n,matches:[n],msg:`Center ${n}: odd palindromes`,ln:2}),i(n,n),n+1<5&&(t.push({text:e,pat:e.slice(n,n+2),i:n,j:n+1,matches:[n,n+1],msg:`Center ${n}-${n+1}: even palindromes`,ln:2}),i(n,n+1));let a=e.slice(n,n+r);return t.push({text:e,pat:a,i:n,j:n+r-1,matches:Array.from({length:r},(e,t)=>n+t),msg:`✓ Longest: "${a}" len=${r} — O(n²)`,ln:5}),t}function _i(){let e=mi,t=`#`+e.split(``).join(`#`)+`#`,n=t.length,r=[],i=Array(n).fill(0),a=0,o=0;r.push({text:e,pat:e,i:0,j:0,matches:[],msg:`Manacher's O(n): transform "${e}" → "${t}"`,ln:0});for(let s=0;s<n;s++){for(s<o&&(i[s]=Math.min(o-s,i[2*a-s]));s+i[s]+1<n&&s-i[s]-1>=0&&t[s+i[s]+1]===t[s-i[s]-1];)i[s]++;if(s+i[s]>o&&(a=s,o=s+i[s]),t[s]!==`#`){let n=Math.floor(s/2)-i[s]/2,a=i[s];r.push({text:e,pat:e.slice(Math.max(0,Math.floor((s-i[s])/2)),Math.floor((s+i[s])/2)+1),i:Math.max(0,n),j:Math.min(4,n+a),matches:Array.from({length:Math.min(a+1,5)},(e,t)=>Math.max(0,n)+t).filter(e=>e<5),msg:`p[${s}]=${i[s]}: palindrome radius at "${t[s]}"`,ln:3})}}let s=Math.max(...i),c=i.indexOf(s),l=Math.floor((c-s)/2),u=s,d=e.slice(l,l+Math.max(1,u));return r.push({text:e,pat:d,i:l,j:l+d.length-1,matches:Array.from({length:d.length},(e,t)=>l+t),msg:`✓ "${d}" len=${d.length} — O(n) Manacher's!`,ln:5}),r}var vi=[7,1,5,3,6,4];function yi(e=vi){let t=e.length,n=[],r=0,i=0,a=0;n.push({a:e,hi:[],sw:[],done:[],msg:`Stock I brute: try all buy/sell pairs O(n²)`,ln:0});for(let o=0;o<t;o++)for(let s=o+1;s<t;s++){let t=e[s]-e[o];n.push({a:e,hi:[s],sw:[o],done:[],msg:`Buy day ${o}=$${e[o]}, sell day ${s}=$${e[s]}: profit=$${t}${t>r?` ← best!`:``}`,ln:2}),t>r&&(r=t,i=o,a=s)}return n.push({a:e,hi:[a],sw:[i],done:[],msg:`✓ Max profit=$${r} (buy day ${i}@$${e[i]}, sell ${a}@$${e[a]}) — O(n²)`,ln:4}),n}function bi(e=vi){let t=e.length,n=[],r=e[0],i=0,a=0,o=0;n.push({a:e,hi:[0],sw:[],done:[],msg:`Stock I greedy: track running min — O(n) one pass`,ln:0});for(let s=1;s<t;s++)if(e[s]<r)r=e[s],a=s,n.push({a:e,hi:[],sw:[s],done:[],msg:`New min price $${e[s]} on day ${s} → update buy day`,ln:2});else{let t=e[s]-r;n.push({a:e,hi:[s],sw:[a],done:[],msg:`Sell day ${s}@$${e[s]}: profit=$${e[s]}-$${r}=$${t}${t>i?` ← new best!`:``}`,ln:3}),t>i&&(i=t,o=s)}return n.push({a:e,hi:[o],sw:[a],done:[],msg:`✓ Max profit=$${i} — O(n) greedy!`,ln:5}),n}function xi(e=vi){let t=e.length,n=[],r=-e[0],i=0;n.push({a:e,hi:[0],sw:[],done:[],msg:`Stock DP: 2 states — hold (bought) / cash (not holding)`,ln:0}),n.push({a:e,hi:[0],sw:[],done:[],msg:`Day 0: hold=-$${e[0]} (buy), cash=$0 (skip)`,ln:2});for(let a=1;a<t;a++){let t=Math.max(r,-e[a]),o=Math.max(i,r+e[a]);n.push({a:e,hi:[a],sw:[],done:[],msg:`Day ${a}@$${e[a]}: hold=max(${r},-${e[a]})=${t} cash=max(${i},${r}+${e[a]})=${o}`,ln:3}),r=t,i=o}return n.push({a:e,hi:[],sw:[],done:[],msg:`✓ Max profit=$${i} — DP O(n) time O(1) space`,ln:5}),n}var Si=`226`;function Ci(){let e=Si,t=[],n=0;t.push({s1:e,s2:`A-Z`,table:null,i:0,j:3,result:null,msg:`Decode Ways: '${e}' → how many ways? Recursive O(2^n)`,ln:0});function r(i){if(n++,i===3)return t.push({s1:e,s2:`A-Z`,table:null,i,j:0,result:1,msg:`✓ Decoded full string! (calls=${n})`,ln:2}),1;if(e[i]===`0`)return t.push({s1:e,s2:`A-Z`,table:null,i,j:0,result:0,msg:`s[${i}]='0': can't decode alone → 0`,ln:3}),0;let a=r(i+1);if(i+1<3){let n=parseInt(e.slice(i,i+2));n<=26&&(t.push({s1:e,s2:`A-Z`,table:null,i,j:i+1,result:n,msg:`Take 2 digits "${e.slice(i,i+2)}"=${n} ≤ 26 ✓`,ln:4}),a+=r(i+2))}return a}let i=r(0);return t.push({s1:e,s2:`A-Z`,table:null,i:0,j:3,result:i,msg:`✓ ${i} ways to decode "${e}" — O(2^n)`,ln:5}),t}function wi(){let e=Si,t=[,,,,].fill(0),n=[];t[0]=1,t[1]=e[0]===`0`?0:1,n.push({s1:e,s2:`A-Z`,table:[t.map(e=>e||null)],i:0,j:0,result:null,msg:`Decode DP: dp[i]=ways to decode first i chars`,ln:0});for(let r=2;r<=3;r++){e[r-1]!==`0`&&(t[r]+=t[r-1]);let i=parseInt(e.slice(r-2,r));i>=10&&i<=26&&(t[r]+=t[r-2]),n.push({s1:e,s2:`A-Z`,table:[t.map(e=>e||null)],i:r,j:r,result:t[r],msg:`dp[${r}]: 1-digit="${e[r-1]}"→+${e[r-1]===`0`?0:t[r-1]} 2-digit="${e.slice(r-2,r)}"→+${i>=10&&i<=26?t[r-2]:0} = ${t[r]}`,ln:3})}return n.push({s1:e,s2:`A-Z`,table:[t.map(e=>e||null)],i:3,j:3,result:t[3],msg:`✓ ${t[3]} ways — O(n) time O(1) space`,ln:5}),n}var Ti={deque:g(`function maxSlidingWindow(nums,k){
  const deq=[],res=[];
  for(let i=0;i<nums.length;i++){
    while(deq.length&&deq[0]<i-k+1) deq.shift();
    while(deq.length&&nums[deq.at(-1)]<=nums[i]) deq.pop();
    deq.push(i);
    if(i>=k-1) res.push(nums[deq[0]]);
  }
  return res; // O(n)
}`,`from collections import deque
def maxSlidingWindow(nums,k):
    dq=deque();res=[]
    for i,v in enumerate(nums):
        while dq and dq[0]<i-k+1: dq.popleft()
        while dq and nums[dq[-1]]<=v: dq.pop()
        dq.append(i)
        if i>=k-1: res.append(nums[dq[0]])
    return res`,`vector<int>maxSlidingWindow(vector<int>&n,int k){
    deque<int>dq;vector<int>res;
    for(int i=0;i<(int)n.size();i++){
        while(!dq.empty()&&dq.front()<i-k+1) dq.pop_front();
        while(!dq.empty()&&n[dq.back()]<=n[i]) dq.pop_back();
        dq.push_back(i);
        if(i>=k-1) res.push_back(n[dq.front()]);
    }return res;
}`,`int[]maxSlidingWindow(int[]n,int k){
    Deque<Integer>dq=new ArrayDeque<>();
    int[]res=new int[n.length-k+1];int idx=0;
    for(int i=0;i<n.length;i++){
        while(!dq.isEmpty()&&dq.peek()<i-k+1) dq.poll();
        while(!dq.isEmpty()&&n[dq.peekLast()]<=n[i]) dq.pollLast();
        dq.offer(i);
        if(i>=k-1) res[idx++]=n[dq.peek()];
    }return res;
}`)},Ei={dp:g(`function canSum(nums,target){
  const dp=Array(target+1).fill(false);
  dp[0]=true;
  for(const n of nums)
    for(let j=target;j>=n;j--)
      if(dp[j-n]) dp[j]=true;
  return dp[target]; // O(n*target)
}`,`def canSum(nums,target):
    dp=[False]*(target+1);dp[0]=True
    for n in nums:
        for j in range(target,n-1,-1):
            if dp[j-n]: dp[j]=True
    return dp[target]`,`bool canSum(vector<int>&nums,int t){
    vector<bool>dp(t+1,false);dp[0]=true;
    for(int n:nums)
        for(int j=t;j>=n;j--)
            if(dp[j-n]) dp[j]=true;
    return dp[t];
}`,`boolean canSum(int[]nums,int t){
    boolean[]dp=new boolean[t+1];dp[0]=true;
    for(int n:nums)
        for(int j=t;j>=n;j--)
            if(dp[j-n]) dp[j]=true;
    return dp[t];
}`)},Di={expand:g(`function longestPalindrome(s){
  let start=0,maxLen=1;
  function expand(l,r){
    while(l>=0&&r<s.length&&s[l]===s[r]){
      if(r-l+1>maxLen){maxLen=r-l+1;start=l;}
      l--;r++;
    }
  }
  for(let i=0;i<s.length;i++){
    expand(i,i);   // odd
    expand(i,i+1); // even
  }
  return s.slice(start,start+maxLen); // O(n²)
}`,`def longestPalindrome(s):
    start=maxLen=1 if s else 0
    def expand(l,r):
        nonlocal start,maxLen
        while l>=0 and r<len(s) and s[l]==s[r]:
            if r-l+1>maxLen: maxLen=r-l+1;start=l
            l-=1;r+=1
    for i in range(len(s)):
        expand(i,i);expand(i,i+1)
    return s[start:start+maxLen]`,`string longestPalindrome(string s){
    int n=s.size(),start=0,maxLen=1;
    auto expand=[&](int l,int r){
        while(l>=0&&r<n&&s[l]==s[r]){
            if(r-l+1>maxLen){maxLen=r-l+1;start=l;}
            l--;r++;
        }
    };
    for(int i=0;i<n;i++){expand(i,i);expand(i,i+1);}
    return s.substr(start,maxLen);
}`,`String longestPalindrome(String s){
    int n=s.length(),start=0,maxLen=1;
    for(int i=0;i<n;i++){
        for(int[]lr:new int[][]{{i,i},{i,i+1}}){
            int l=lr[0],r=lr[1];
            while(l>=0&&r<n&&s.charAt(l)==s.charAt(r)){
                if(r-l+1>maxLen){maxLen=r-l+1;start=l;}
                l--;r++;
            }
        }
    }
    return s.substring(start,start+maxLen);
}`)},Oi={greedy:g(`function maxProfit(prices){
  let minPrice=Infinity,maxProfit=0;
  for(const p of prices){
    minPrice=Math.min(minPrice,p);
    maxProfit=Math.max(maxProfit,p-minPrice);
  }
  return maxProfit; // O(n) one pass
}`,`def maxProfit(prices):
    minP,maxP=float('inf'),0
    for p in prices:
        minP=min(minP,p)
        maxP=max(maxP,p-minP)
    return maxP`,`int maxProfit(vector<int>&p){
    int mn=INT_MAX,mx=0;
    for(int v:p){mn=min(mn,v);mx=max(mx,v-mn);}
    return mx;
}`,`int maxProfit(int[]p){
    int mn=Integer.MAX_VALUE,mx=0;
    for(int v:p){mn=Math.min(mn,v);mx=Math.max(mx,v-mn);}
    return mx;
}`)},ki={dp:g(`function numDecodings(s){
  if(!s||s[0]==='0') return 0;
  const n=s.length;
  let prev2=1,prev1=1;
  for(let i=2;i<=n;i++){
    let cur=0;
    if(s[i-1]!=='0') cur+=prev1;
    const two=parseInt(s.slice(i-2,i));
    if(two>=10&&two<=26) cur+=prev2;
    prev2=prev1;prev1=cur;
  }
  return prev1; // O(n) O(1) space
}`,`def numDecodings(s):
    if not s or s[0]=='0': return 0
    n=len(s);a,b=1,1
    for i in range(2,n+1):
        c=0
        if s[i-1]!='0': c+=b
        if 10<=int(s[i-2:i])<=26: c+=a
        a,b=b,c
    return b`,`int numDecodings(string s){
    if(s.empty()||s[0]=='0') return 0;
    int n=s.size(),a=1,b=1;
    for(int i=2;i<=n;i++){
        int c=0;
        if(s[i-1]!='0') c+=b;
        int two=stoi(s.substr(i-2,2));
        if(two>=10&&two<=26) c+=a;
        a=b;b=c;
    }
    return b;
}`,`int numDecodings(String s){
    if(s.isEmpty()||s.charAt(0)=='0') return 0;
    int n=s.length(),a=1,b=1;
    for(int i=2;i<=n;i++){
        int c=0;
        if(s.charAt(i-1)!='0') c+=b;
        int two=Integer.parseInt(s.substring(i-2,i));
        if(two>=10&&two<=26) c+=a;
        a=b;b=c;
    }
    return b;
}`)},Ai=[{id:`sorting`,label:`Sorting`,emoji:`⬆️`,algorithms:[{id:`bubble`,label:`Bubble Sort`,vizType:`bars`,approaches:[{id:`b0`,tier:`brute`,name:`Basic`,time:`O(n²) always`,space:`O(1)`,why:`No optimization — always runs all comparisons`,genSteps:v,code:k.bubbleBasic},{id:`b1`,tier:`better`,name:`Early Exit Flag`,time:`O(n²) · Best O(n)`,space:`O(1)`,why:`Stops if no swaps in a pass — O(n) for sorted input`,genSteps:y,code:k.bubbleFlag},{id:`b2`,tier:`opt`,name:`Last Swap Tracking`,time:`O(n²) · Best O(n)`,space:`O(1)`,why:`Shrinks inner loop by tracking last swap position`,genSteps:b,code:k.bubbleLastSwap}]},{id:`selection`,label:`Selection Sort`,vizType:`bars`,approaches:[{id:`s0`,tier:`brute`,name:`Basic`,time:`O(n²) always`,space:`O(1)`,why:`Find min, swap to front — unstable sort`,genSteps:x,code:k.selBasic},{id:`s1`,tier:`better`,name:`Stable Selection`,time:`O(n²) always`,space:`O(1)`,why:`Shift instead of swap — preserves relative order`,genSteps:S,code:k.selStable},{id:`s2`,tier:`opt`,name:`Bidirectional`,time:`O(n²) · ~50% passes`,space:`O(1)`,why:`Find min AND max simultaneously — halves passes`,genSteps:C,code:k.selBidir}]},{id:`insertion`,label:`Insertion Sort`,vizType:`bars`,approaches:[{id:`i0`,tier:`brute`,name:`Basic`,time:`O(n²) · Best O(n)`,space:`O(1)`,why:`Linear scan backward — simple and adaptive`,genSteps:w,code:k.insBasic},{id:`i1`,tier:`better`,name:`Binary Insertion`,time:`O(n log n) comps`,space:`O(1)`,why:`Binary search to find position — fewer comparisons`,genSteps:T,code:k.insBinary},{id:`i2`,tier:`opt`,name:`Shell Sort`,time:`O(n log n) avg`,space:`O(1)`,why:`Insertion sort with diminishing gap sequence`,genSteps:ee,code:k.shellSort}]},{id:`merge`,label:`Merge Sort`,vizType:`bars`,approaches:[{id:`m0`,tier:`brute`,name:`Top-Down Recursive`,time:`O(n log n)`,space:`O(n log n)`,why:`Simple recursion — creates many temporary arrays`,genSteps:te,code:k.mergeTopDown},{id:`m1`,tier:`better`,name:`Bottom-Up Iterative`,time:`O(n log n)`,space:`O(n)`,why:`No recursion stack — iterative, cache-friendly`,genSteps:ne,code:k.mergeBottomUp},{id:`m2`,tier:`opt`,name:`Hybrid (TimSort)`,time:`O(n log n)`,space:`O(n)`,why:`Insertion sort for small subarrays — best of both`,genSteps:re,code:k.mergeHybrid}]},{id:`quick`,label:`Quick Sort`,vizType:`bars`,approaches:[{id:`q0`,tier:`brute`,name:`Last Element Pivot`,time:`O(n²) worst`,space:`O(log n)`,why:`Simple but O(n²) on sorted input`,genSteps:ae,code:k.quickLast},{id:`q1`,tier:`better`,name:`Random Pivot`,time:`O(n log n) expected`,space:`O(log n)`,why:`Random pivot avoids worst case in practice`,genSteps:oe,code:k.quickRandom},{id:`q2`,tier:`opt`,name:`3-Way Partition`,time:`O(n log n) · O(n) dups`,space:`O(log n)`,why:`Dutch National Flag — optimal for duplicates`,genSteps:se,code:k.quick3Way}]},{id:`heap`,label:`Heap Sort`,vizType:`bars`,approaches:[{id:`h0`,tier:`brute`,name:`Basic Heap Sort`,time:`O(n log n)`,space:`O(1)`,why:`Build max-heap then extract one by one`,genSteps:le,code:k.heapBasic},{id:`h1`,tier:`better`,name:`Floyd's Heapify`,time:`O(n log n)`,space:`O(1)`,why:`Floyd's O(n) build phase — more efficient`,genSteps:E,code:k.heapFloyd},{id:`h2`,tier:`opt`,name:`Skip Leaf Nodes`,time:`O(n log n)`,space:`O(1)`,why:`Leaves are trivial heaps — skip in heapify`,genSteps:D,code:k.heapOpt}]}]},{id:`searching`,label:`Searching`,emoji:`🔍`,algorithms:[{id:`linear`,label:`Linear Search`,vizType:`array`,approaches:[{id:`l0`,tier:`brute`,name:`Basic Scan`,time:`O(n)`,space:`O(1)`,why:`Scan each element — works on unsorted arrays`,genSteps:ue,code:k.linBasic},{id:`l1`,tier:`better`,name:`Sentinel Search`,time:`O(n) · fewer ops`,space:`O(1)`,why:`Append target as sentinel — eliminates bounds check`,genSteps:de,code:k.linSentinel},{id:`l2`,tier:`opt`,name:`Transposition`,time:`O(n) · improves`,space:`O(1)`,why:`Move found element forward — frequent items rise up`,genSteps:fe,code:k.linTranspose}]},{id:`binary`,label:`Binary Search`,vizType:`array`,approaches:[{id:`bs0`,tier:`brute`,name:`Iterative`,time:`O(log n)`,space:`O(1)`,why:`Halve space iteratively — no stack usage`,genSteps:pe,code:k.binIter},{id:`bs1`,tier:`better`,name:`Recursive`,time:`O(log n)`,space:`O(log n)`,why:`Elegant recursion — uses call stack`,genSteps:me,code:k.binRecur},{id:`bs2`,tier:`opt`,name:`Exponential Search`,time:`O(log n)`,space:`O(1)`,why:`Find range first by doubling — great for unbounded arrays`,genSteps:O,code:k.binExponential}]},{id:`jump`,label:`Jump / Advanced`,vizType:`array`,approaches:[{id:`j0`,tier:`brute`,name:`Jump Search`,time:`O(√n)`,space:`O(1)`,why:`Jump √n blocks then linear scan`,genSteps:he,code:k.jumpBasic},{id:`j1`,tier:`better`,name:`Fibonacci Search`,time:`O(log n)`,space:`O(1)`,why:`Fibonacci step sizes — divides array unevenly`,genSteps:ge,code:k.fibSearch},{id:`j2`,tier:`opt`,name:`Interpolation`,time:`O(log log n)`,space:`O(1)`,why:`Estimate position by value — O(log log n) for uniform`,genSteps:_e,code:k.interpolation}]}]},{id:`dp`,label:`Dynamic Prog.`,emoji:`📊`,algorithms:[{id:`maxsub`,label:`Max Subarray`,vizType:`dp`,approaches:[{id:`ms0`,tier:`brute`,name:`All Subarrays`,time:`O(n³)`,space:`O(1)`,why:`Check every possible subarray sum — triple nested loop`,genSteps:we,code:Ue.maxSubBrute},{id:`ms1`,tier:`better`,name:`Prefix Sums`,time:`O(n²)`,space:`O(1)`,why:`Fix start, extend end — eliminate innermost loop`,genSteps:Te,code:Ue.maxSubBetter},{id:`ms2`,tier:`opt`,name:`Kadane's Algorithm`,time:`O(n)`,space:`O(1)`,why:`Single pass — extend or restart based on current sum`,genSteps:Ee,code:Ue.kadane}]},{id:`climbing`,label:`Climbing Stairs`,vizType:`fib`,approaches:[{id:`cs0`,tier:`brute`,name:`Naive Recursion`,time:`O(2ⁿ)`,space:`O(n)`,why:`Recomputes same steps repeatedly — exponential`,genSteps:De,code:Ue.climbRec},{id:`cs1`,tier:`better`,name:`Memoization`,time:`O(n)`,space:`O(n)`,why:`Cache subproblems — each computed once`,genSteps:Oe,code:Ue.climbMemo},{id:`cs2`,tier:`opt`,name:`Bottom-Up DP`,time:`O(n)`,space:`O(1)`,why:`Fill table iteratively — O(1) space with just 2 vars`,genSteps:ke,code:Ue.climbDP}]},{id:`coinchange`,label:`Coin Change`,vizType:`dp`,approaches:[{id:`cc0`,tier:`brute`,name:`Naive Recursion`,time:`O(Sⁿ)`,space:`O(S)`,why:`Try all coin combinations — exponential`,genSteps:()=>Me(je),code:Ue.coinRec},{id:`cc1`,tier:`better`,name:`Memoization`,time:`O(S×n)`,space:`O(S)`,why:`Cache amount → min coins — top-down DP`,genSteps:()=>Ne(je),code:Ue.coinMemo},{id:`cc2`,tier:`opt`,name:`Bottom-Up DP`,time:`O(S×n)`,space:`O(S)`,why:`Fill dp[0..amount] iteratively — optimal`,genSteps:()=>Pe(je),code:Ue.coinDP}]}]},{id:`graph`,label:`Graph`,emoji:`🕸️`,algorithms:[{id:`bfs`,label:`BFS`,vizType:`graph`,approaches:[{id:`bf0`,tier:`brute`,name:`Basic BFS`,time:`O(V+E)`,space:`O(V)`,why:`Level-by-level exploration using a queue`,genSteps:P,code:We.bfsBasic},{id:`bf1`,tier:`better`,name:`Shortest Path BFS`,time:`O(V+E)`,space:`O(V)`,why:`Track parent nodes to reconstruct shortest path`,genSteps:Fe,code:We.bfsPath},{id:`bf2`,tier:`opt`,name:`Level-Order BFS`,time:`O(V+E)`,space:`O(V)`,why:`Process entire level at once — track depth explicitly`,genSteps:Ie,code:We.bfsLevel}]},{id:`dfs`,label:`DFS`,vizType:`graph`,approaches:[{id:`df0`,tier:`brute`,name:`Recursive DFS`,time:`O(V+E)`,space:`O(V)`,why:`Elegant recursion — uses call stack for backtracking`,genSteps:Le,code:We.dfsRec},{id:`df1`,tier:`better`,name:`Iterative DFS`,time:`O(V+E)`,space:`O(V)`,why:`Explicit stack — avoids call stack overflow on large graphs`,genSteps:Re,code:We.dfsIter},{id:`df2`,tier:`opt`,name:`Cycle Detection`,time:`O(V+E)`,space:`O(V)`,why:`Track recursion stack — detect back edges = cycle`,genSteps:ze,code:We.dfsCycle}]},{id:`shortest`,label:`Shortest Path`,vizType:`graph`,approaches:[{id:`sp0`,tier:`brute`,name:`Dijkstra Basic`,time:`O(V²)`,space:`O(V)`,why:`Simple array scan for min-distance node — O(V²)`,genSteps:Be,code:We.dijkstraBasic},{id:`sp1`,tier:`better`,name:`Dijkstra + PQ`,time:`O((V+E) log V)`,space:`O(V)`,why:`Priority queue for O(log V) extraction — faster`,genSteps:Ve,code:We.dijkstraPQ},{id:`sp2`,tier:`opt`,name:`Bellman-Ford`,time:`O(VE)`,space:`O(V)`,why:`Handles negative weights — detects negative cycles`,genSteps:He,code:We.bellmanFord}]}]},{id:`problems`,label:`Problems`,emoji:`🧩`,algorithms:[{id:`twosum`,label:`Two Sum`,vizType:`array`,approaches:[{id:`ts0`,tier:`brute`,name:`Nested Loops`,time:`O(n²)`,space:`O(1)`,why:`Try every pair — simple but quadratic`,genSteps:ve,code:k.tsBrute},{id:`ts1`,tier:`better`,name:`Sort + Two Pointers`,time:`O(n log n)`,space:`O(1)`,why:`Sort then converge pointers — no extra memory`,genSteps:ye,code:k.tsTwo},{id:`ts2`,tier:`opt`,name:`HashMap`,time:`O(n)`,space:`O(n)`,why:`One-pass complement lookup — optimal time`,genSteps:be,code:k.tsHash}]},{id:`fibonacci`,label:`Fibonacci`,vizType:`fib`,approaches:[{id:`f0`,tier:`brute`,name:`Naive Recursion`,time:`O(2ⁿ)`,space:`O(n)`,why:`Recomputes subproblems exponentially`,genSteps:xe,code:k.fibRec},{id:`f1`,tier:`better`,name:`Memoization`,time:`O(n)`,space:`O(n)`,why:`Cache results — each subproblem once`,genSteps:Se,code:k.fibMemo},{id:`f2`,tier:`opt`,name:`Space-Opt DP`,time:`O(n)`,space:`O(1)`,why:`Only 2 variables needed — minimal memory`,genSteps:Ce,code:k.fibDP}]}]},,{id:`trees`,label:`Trees`,emoji:`🌳`,algorithms:[{id:`traversal`,label:`BST Traversal`,vizType:`tree`,approaches:[{id:`tr0`,tier:`brute`,name:`Inorder Recursive`,time:`O(n)`,space:`O(h)`,why:`Left→Root→Right: gives sorted output for BST`,genSteps:Je,code:I.inorder},{id:`tr1`,tier:`better`,name:`Inorder Iterative`,time:`O(n)`,space:`O(h)`,why:`Explicit stack — no recursion, avoids stack overflow`,genSteps:Ye,code:I.inorderIter},{id:`tr2`,tier:`opt`,name:`Preorder / Postorder`,time:`O(n)`,space:`O(h)`,why:`Preorder for cloning; Postorder for deletion`,genSteps:Xe,code:I.preorder}]},{id:`bstsearch`,label:`BST Search`,vizType:`tree`,approaches:[{id:`ss0`,tier:`brute`,name:`Recursive Search`,time:`O(log n) avg`,space:`O(h)`,why:`Simple recursion following BST property`,genSteps:()=>Qe(40),code:I.bstSearchRec},{id:`ss1`,tier:`better`,name:`Iterative Search`,time:`O(log n) avg`,space:`O(1)`,why:`No stack — constant space, same time complexity`,genSteps:()=>$e(40),code:I.bstSearchIter},{id:`ss2`,tier:`opt`,name:`BST Insert`,time:`O(log n) avg`,space:`O(h)`,why:`Same logic as search — insert at correct BST position`,genSteps:()=>et(35),code:I.bstInsert}]},{id:`bstpostorder`,label:`Postorder`,vizType:`tree`,approaches:[{id:`po0`,tier:`brute`,name:`Postorder Recursive`,time:`O(n)`,space:`O(h)`,why:`Left→Right→Root: process children before parent`,genSteps:Ze,code:I.postorder},{id:`po1`,tier:`better`,name:`Search (target=60)`,time:`O(log n)`,space:`O(1)`,why:`Iterative BST search — O(1) space`,genSteps:()=>$e(60),code:I.bstSearchIter},{id:`po2`,tier:`opt`,name:`Insert (new=45)`,time:`O(log n)`,space:`O(h)`,why:`Insert new node maintaining BST property`,genSteps:()=>et(45),code:I.bstInsert}]}]},{id:`advtrees`,label:`AVL Tree`,emoji:`🌲`,algorithms:[{id:`avltree`,label:`AVL Insert`,vizType:`avl`,approaches:[{id:`av0`,tier:`brute`,name:`Unbalanced BST`,time:`O(n) worst`,space:`O(n)`,why:`No balancing — sorted input creates linked list, O(n) height`,genSteps:hr,code:vr.avl},{id:`av1`,tier:`better`,name:`AVL with Rotations`,time:`O(log n)`,space:`O(log n)`,why:`4 rotation cases keep height ≤ 1.44·log₂n — guaranteed O(log n)`,genSteps:gr,code:vr.avl},{id:`av2`,tier:`opt`,name:`All 4 Rotation Cases`,time:`O(log n)`,space:`O(log n)`,why:`LL→R, RR→L, LR→LR, RL→RL — each restores balance in O(1)`,genSteps:_r,code:vr.avl}]}]},{id:`backtracking`,label:`Backtracking`,emoji:`🔄`,algorithms:[{id:`nqueens`,label:`N-Queens`,vizType:`backtrack`,approaches:[{id:`nq0`,tier:`brute`,name:`Basic Backtrack`,time:`O(n!)`,space:`O(n)`,why:`Try each column, backtrack on conflict`,genSteps:()=>tt(6),code:Tt.nqueens},{id:`nq1`,tier:`better`,name:`Bitmask N-Queens`,time:`O(n!)`,space:`O(n)`,why:`Bitmask tracks cols/diagonals — ~3× fewer operations`,genSteps:()=>nt(6),code:Tt.nqBitmask},{id:`nq2`,tier:`opt`,name:`Subsets`,time:`O(2ⁿ)`,space:`O(n)`,why:`Include/exclude pattern generates all 2^n subsets`,genSteps:()=>rt([1,2,3,4]),code:Tt.subsets}]},{id:`permutations`,label:`Permutations`,vizType:`backtrack`,approaches:[{id:`pm0`,tier:`brute`,name:`Swap Backtrack`,time:`O(n×n!)`,space:`O(n)`,why:`Swap each element to front, recurse on rest`,genSteps:()=>it([1,2,3]),code:Tt.subsets},{id:`pm1`,tier:`better`,name:`Subsets [1,2,3,4]`,time:`O(2ⁿ×n)`,space:`O(n)`,why:`Generate all 2^n subsets with include/exclude`,genSteps:()=>rt([1,2,3]),code:Tt.subsets},{id:`pm2`,tier:`opt`,name:`Subsets [1,2,3,4,5]`,time:`O(2ⁿ)`,space:`O(n)`,why:`Bit manipulation: iterate all 2^n bitmasks`,genSteps:()=>rt([1,2,3,4]),code:Tt.subsets}]}]},{id:`strings`,label:`Strings`,emoji:`🔤`,algorithms:[{id:`patternsearch`,label:`Pattern Search`,vizType:`string`,approaches:[{id:`ps0`,tier:`brute`,name:`Brute Force`,time:`O(nm)`,space:`O(1)`,why:`Check every position — shift by 1 on mismatch`,genSteps:()=>st(at,ot),code:Et.patBrute},{id:`ps1`,tier:`better`,name:`KMP Algorithm`,time:`O(n+m)`,space:`O(m)`,why:`LPS table enables smart skipping — no re-reading text`,genSteps:()=>ct(at,ot),code:Et.kmp},{id:`ps2`,tier:`opt`,name:`Rabin-Karp`,time:`O(n+m) avg`,space:`O(1)`,why:`Rolling hash: O(1) window comparison on average`,genSteps:()=>lt(at,ot),code:Et.patBrute}]},{id:`longestpalin`,label:`Longest Palindrome`,vizType:`string`,approaches:[{id:`lp0`,tier:`brute`,name:`Check All O(n³)`,time:`O(n³)`,space:`O(1)`,why:`Check every substring if it's a palindrome — very slow`,genSteps:hi,code:Di.expand},{id:`lp1`,tier:`better`,name:`Expand Centers O(n²)`,time:`O(n²)`,space:`O(1)`,why:`Expand around each center — 2n-1 centers, each O(n) worst case`,genSteps:gi,code:Di.expand},{id:`lp2`,tier:`opt`,name:`Manacher's O(n)`,time:`O(n)`,space:`O(n)`,why:`Transform string with #separators, reuse previous palindrome info`,genSteps:_i,code:Di.expand}]}]},{id:`slidingwindow`,label:`Sliding Window`,emoji:`🪟`,algorithms:[{id:`maxsumk`,label:`Max Sum (k=3)`,vizType:`slide`,approaches:[{id:`sw0`,tier:`brute`,name:`Brute Force O(nk)`,time:`O(nk)`,space:`O(1)`,why:`Recompute sum for every window — wasteful`,genSteps:dt,code:Dt.maxSumBrute},{id:`sw1`,tier:`better`,name:`Sliding Window O(n)`,time:`O(n)`,space:`O(1)`,why:`Subtract leaving element, add entering — single pass`,genSteps:ft,code:Dt.maxSumSlide},{id:`sw2`,tier:`opt`,name:`Longest Unique`,time:`O(n)`,space:`O(k)`,why:`Variable window: shrink from left when duplicate found`,genSteps:pt,code:Dt.maxSumSlide}]},{id:`longestuniq`,label:`Longest Unique Substring`,vizType:`slide`,approaches:[{id:`lu0`,tier:`brute`,name:`Brute O(n³)`,time:`O(n³)`,space:`O(n)`,why:`Check every substring for duplicate chars — very slow`,genSteps:Ir,code:Wr.lsub},{id:`lu1`,tier:`better`,name:`Sliding Window`,time:`O(n)`,space:`O(n)`,why:`Expand right, shrink left on duplicate — single pass O(n)`,genSteps:Lr,code:Wr.lsub},{id:`lu2`,tier:`opt`,name:`Hashmap O(n)`,time:`O(n)`,space:`O(n)`,why:`Track last position of each char — jump left pointer directly, no inner loop`,genSteps:Lr,code:Wr.lsub}]},{id:`swmax`,label:`Sliding Window Max`,vizType:`slide`,approaches:[{id:`swm0`,tier:`brute`,name:`Brute O(n·k)`,time:`O(n·k)`,space:`O(n)`,why:`For each window scan k elements for max — simple but slow`,genSteps:si,code:Ti.deque},{id:`swm1`,tier:`better`,name:`Monotonic Deque`,time:`O(n)`,space:`O(k)`,why:`Deque stores indices in decreasing order — front is always max`,genSteps:ci,code:Ti.deque},{id:`swm2`,tier:`opt`,name:`Deque O(n)`,time:`O(n)`,space:`O(k)`,why:`Each element added/removed once — O(n) total amortized`,genSteps:ci,code:Ti.deque}]}]},{id:`greedy`,label:`Greedy`,emoji:`💡`,algorithms:[{id:`activity`,label:`Activity Selection`,vizType:`greedy`,approaches:[{id:`ga0`,tier:`brute`,name:`Brute Force 2^n`,time:`O(2ⁿ)`,space:`O(n)`,why:`Try all subsets — guaranteed optimal but exponential`,genSteps:ht,code:Ot.actBrute},{id:`ga1`,tier:`better`,name:`Sort by End Greedy`,time:`O(n log n)`,space:`O(1)`,why:`Sort by end time, greedily pick earliest-finishing`,genSteps:gt,code:Ot.actGreedy},{id:`ga2`,tier:`opt`,name:`Fractional Knapsack`,time:`O(n log n)`,space:`O(n)`,why:`Sort by value/weight ratio — greedy is optimal here`,genSteps:_t,code:Ot.actGreedy}]}]},{id:`linkedlist`,label:`Linked List`,emoji:`🔗`,algorithms:[{id:`reversell`,label:`Reverse List`,vizType:`ll`,approaches:[{id:`rl0`,tier:`brute`,name:`Iterative`,time:`O(n)`,space:`O(1)`,why:`Three pointers: prev, cur, next — in-place reversal`,genSteps:Nt,code:I.inorder},{id:`rl1`,tier:`better`,name:`Recursive`,time:`O(n)`,space:`O(n)`,why:`Recurse to end then re-wire links on the way back`,genSteps:Pt,code:I.inorder},{id:`rl2`,tier:`opt`,name:`Merge Two Sorted`,time:`O(n+m)`,space:`O(1)`,why:`Two pointers: always advance the smaller head`,genSteps:It,code:I.inorder}]},{id:`cyclell`,label:`Cycle Detection`,vizType:`ll`,approaches:[{id:`cl0`,tier:`brute`,name:`Floyd's Tortoise & Hare`,time:`O(n)`,space:`O(1)`,why:`slow=1 step, fast=2 steps — they meet if cycle exists`,genSteps:Ft,code:I.inorder},{id:`cl1`,tier:`better`,name:`Reverse List`,time:`O(n)`,space:`O(1)`,why:`Iterative 3-pointer reversal — classic interview question`,genSteps:Nt,code:I.inorder},{id:`cl2`,tier:`opt`,name:`Merge Sorted Lists`,time:`O(n+m)`,space:`O(1)`,why:`Merge [1,3,5] + [2,4,6] into [1,2,3,4,5,6]`,genSteps:It,code:I.inorder}]},{id:`floydstart`,label:`Floyd Cycle Start`,vizType:`ll`,approaches:[{id:`fc0`,tier:`brute`,name:`HashSet O(n) space`,time:`O(n)`,space:`O(n)`,why:`Store visited nodes in set — first repeat is cycle start`,genSteps:zr,code:Wr.merge},{id:`fc1`,tier:`better`,name:`Detect Only`,time:`O(n)`,space:`O(1)`,why:`Tortoise+hare meet inside cycle — detect but not locate`,genSteps:zr,code:Wr.merge},{id:`fc2`,tier:`opt`,name:`Find Cycle Start`,time:`O(n)`,space:`O(1)`,why:`After meeting, reset one ptr to head — they meet exactly at cycle entry!`,genSteps:Rr,code:Wr.merge}]}]},{id:`math`,label:`Math`,emoji:`📐`,algorithms:[{id:`gcd`,label:`GCD & LCM`,vizType:`math`,approaches:[{id:`gcd0`,tier:`brute`,name:`Brute Force`,time:`O(min(a,b))`,space:`O(1)`,why:`Check all divisors from 1 to min(a,b)`,genSteps:()=>Lt(48,18),code:I.inorder},{id:`gcd1`,tier:`better`,name:`Euclidean Algorithm`,time:`O(log min(a,b))`,space:`O(1)`,why:`GCD(a,b) = GCD(b, a%b) — halves problem each step`,genSteps:()=>Rt(48,18),code:I.inorder},{id:`gcd2`,tier:`opt`,name:`Fast Power`,time:`O(log n)`,space:`O(1)`,why:`Square base and halve exponent — binary exponentiation`,genSteps:()=>Bt(2,10),code:I.inorder}]},{id:`sieve`,label:`Prime Sieve`,vizType:`math`,approaches:[{id:`sv0`,tier:`brute`,name:`Trial Division`,time:`O(n√n)`,space:`O(n)`,why:`Check each number against all smaller primes`,genSteps:()=>Lt(36,24),code:I.inorder},{id:`sv1`,tier:`better`,name:`Sieve of Eratosthenes`,time:`O(n log log n)`,space:`O(n)`,why:`Mark multiples of each prime — most efficient for range`,genSteps:()=>zt(30),code:I.inorder},{id:`sv2`,tier:`opt`,name:`Binary GCD`,time:`O(log² n)`,space:`O(log n)`,why:`Uses bit shifts instead of division — hardware-friendly`,genSteps:()=>Rt(72,48),code:I.inorder}]}]},{id:`stacks`,label:`Stack/Queue`,emoji:`📦`,algorithms:[{id:`validparens`,label:`Valid Parentheses`,vizType:`stackviz`,approaches:[{id:`vp0`,tier:`brute`,name:`Brute Force`,time:`O(n²)`,space:`O(n)`,why:`Repeatedly remove matched pairs until none left`,genSteps:()=>Vt(`({[]})`),code:Et.patBrute},{id:`vp1`,tier:`better`,name:`Stack O(n)`,time:`O(n)`,space:`O(n)`,why:`Push open brackets, pop and match on close brackets`,genSteps:()=>Ht(`({[]})`),code:Et.kmp},{id:`vp2`,tier:`opt`,name:`Counter (only parens)`,time:`O(n)`,space:`O(1)`,why:`Single counter — O(1) space for same-type brackets`,genSteps:()=>Ht(`((()))`),code:Et.kmp}]},{id:`nge`,label:`Next Greater Element`,vizType:`stackviz`,approaches:[{id:`ng0`,tier:`brute`,name:`Brute O(n²)`,time:`O(n²)`,space:`O(1)`,why:`For each element, scan right to find first greater`,genSteps:()=>Ut([4,5,2,10,8]),code:Et.patBrute},{id:`ng1`,tier:`better`,name:`Monotonic Stack O(n)`,time:`O(n)`,space:`O(n)`,why:`Decreasing stack: pop when larger element found`,genSteps:()=>Wt([4,5,2,10,8]),code:Et.kmp},{id:`ng2`,tier:`opt`,name:`Min Stack O(1)`,time:`O(1) all ops`,space:`O(n)`,why:`Parallel min-stack: getMin is always O(1)`,genSteps:Gt,code:Et.kmp}]},{id:`minstack`,label:`Min Stack`,vizType:`stackviz`,approaches:[{id:`ms0`,tier:`brute`,name:`Scan for Min O(n)`,time:`O(n) getMin`,space:`O(n)`,why:`No extra structure — scan entire stack to find minimum`,genSteps:Vr,code:Gr.opt},{id:`ms1`,tier:`better`,name:`Aux Min Stack`,time:`O(1) getMin`,space:`O(n)`,why:`Auxiliary stack tracks running minimum — push when ≤ current min`,genSteps:Hr,code:Gr.opt},{id:`ms2`,tier:`opt`,name:`Optimized Space`,time:`O(1) all ops`,space:`O(1) extra`,why:`Store (val-min) differences to encode min without extra stack`,genSteps:Hr,code:Gr.opt}]}]},{id:`twopointers`,label:`Two Pointers`,emoji:`👆`,algorithms:[{id:`twoptr`,label:`Two Pointer Patterns`,vizType:`array`,approaches:[{id:`tp0`,tier:`brute`,name:`Two Sum Sorted`,time:`O(n log n)`,space:`O(1)`,why:`Sort then converge L↔R — classic two pointer`,genSteps:vt,code:kt.twoSum},{id:`tp1`,tier:`better`,name:`Remove Duplicates`,time:`O(n)`,space:`O(1)`,why:`Slow/fast pointers: slow marks unique, fast scans ahead`,genSteps:yt,code:kt.removeDups},{id:`tp2`,tier:`opt`,name:`Container With Water`,time:`O(n)`,space:`O(1)`,why:`Always move the shorter side — greedy is provably optimal`,genSteps:bt,code:kt.containerWater}]}]},{id:`bits`,label:`Bit Magic`,emoji:`🔢`,algorithms:[{id:`setbits`,label:`Count Set Bits`,vizType:`bits`,approaches:[{id:`cb0`,tier:`brute`,name:`Shift & Count`,time:`O(log n)`,space:`O(1)`,why:`Shift right and check LSB — loops once per bit`,genSteps:()=>St(23),code:At.countBrute},{id:`cb1`,tier:`better`,name:`Kernighan's Trick`,time:`O(k) k=set bits`,space:`O(1)`,why:`n & (n-1) clears the lowest set bit — only k iterations`,genSteps:()=>Ct(23),code:At.countKernighan},{id:`cb2`,tier:`opt`,name:`DP All at Once`,time:`O(n)`,space:`O(n)`,why:`dp[i] = dp[i>>1] + (i&1) — compute all n counts in O(n)`,genSteps:()=>wt(16),code:At.countDP}]}]},,{id:`advdp`,label:`Advanced DP`,emoji:`🧮`,algorithms:[{id:`lcs`,label:`Longest Common Subseq`,vizType:`dp2d`,approaches:[{id:`lcs0`,tier:`brute`,name:`Recursive O(2ⁿ)`,time:`O(2ⁿ)`,space:`O(n+m)`,why:`Explore all subsequences — exponential recomputation`,genSteps:Jt,code:{js:`// LCS Recursive
function lcs(s1,s2,i,j){
  if(i===0||j===0)return 0;
  if(s1[i-1]===s2[j-1])return 1+lcs(s1,s2,i-1,j-1);
  return Math.max(lcs(s1,s2,i-1,j),lcs(s1,s2,i,j-1));
}
// O(2^n) — exponential!`,py:`def lcs(s1,s2,i,j):
    if i==0 or j==0: return 0
    if s1[i-1]==s2[j-1]: return 1+lcs(s1,s2,i-1,j-1)
    return max(lcs(s1,s2,i-1,j),lcs(s1,s2,i,j-1))`,cpp:`int lcs(string& s1,string& s2,int i,int j){
    if(!i||!j) return 0;
    if(s1[i-1]==s2[j-1]) return 1+lcs(s1,s2,i-1,j-1);
    return max(lcs(s1,s2,i-1,j),lcs(s1,s2,i,j-1));
}`,java:`int lcs(String s1,String s2,int i,int j){
    if(i==0||j==0) return 0;
    if(s1.charAt(i-1)==s2.charAt(j-1)) return 1+lcs(s1,s2,i-1,j-1);
    return Math.max(lcs(s1,s2,i-1,j),lcs(s1,s2,i,j-1));
}`}},{id:`lcs1`,tier:`better`,name:`Memoization`,time:`O(nm)`,space:`O(nm)`,why:`Cache (i,j) pairs — each subproblem computed once`,genSteps:Yt,code:{js:`function lcs(s1,s2,i=s1.length,j=s2.length,m={}){
  const k=\`\${i},\${j}\`;
  if(k in m) return m[k];
  if(!i||!j) return m[k]=0;
  if(s1[i-1]===s2[j-1]) return m[k]=1+lcs(s1,s2,i-1,j-1,m);
  return m[k]=Math.max(lcs(s1,s2,i-1,j,m),lcs(s1,s2,i,j-1,m));
}`,py:`from functools import lru_cache
@lru_cache(maxsize=None)
def lcs(s1,s2,i,j):
    if i==0 or j==0: return 0
    if s1[i-1]==s2[j-1]: return 1+lcs(s1,s2,i-1,j-1)
    return max(lcs(s1,s2,i-1,j),lcs(s1,s2,i,j-1))`,cpp:`unordered_map<string,int> m;
int lcs(string& s1,string& s2,int i,int j){
    string k=to_string(i)+","+to_string(j);
    if(m.count(k)) return m[k];
    if(!i||!j) return m[k]=0;
    if(s1[i-1]==s2[j-1]) return m[k]=1+lcs(s1,s2,i-1,j-1);
    return m[k]=max(lcs(s1,s2,i-1,j),lcs(s1,s2,i,j-1));
}`,java:`// O(nm) memoized`}},{id:`lcs2`,tier:`opt`,name:`DP Tabulation`,time:`O(nm)`,space:`O(nm)`,why:`Fill 2D table bottom-up — no recursion stack`,genSteps:Xt,code:{js:`function lcs(s1,s2){
  const m=s1.length,n=s2.length;
  const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
  for(let i=1;i<=m;i++)
    for(let j=1;j<=n;j++)
      dp[i][j]=s1[i-1]===s2[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
  return dp[m][n];
}`,py:`def lcs(s1,s2):
    m,n=len(s1),len(s2)
    dp=[[0]*(n+1) for _ in range(m+1)]
    for i in range(1,m+1):
        for j in range(1,n+1):
            if s1[i-1]==s2[j-1]: dp[i][j]=dp[i-1][j-1]+1
            else: dp[i][j]=max(dp[i-1][j],dp[i][j-1])
    return dp[m][n]`,cpp:`int lcs(string s1,string s2){
    int m=s1.size(),n=s2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1,0));
    for(int i=1;i<=m;i++)
        for(int j=1;j<=n;j++)
            dp[i][j]=s1[i-1]==s2[j-1]?dp[i-1][j-1]+1:max(dp[i-1][j],dp[i][j-1]);
    return dp[m][n];
}`,java:`int lcs(String s1,String s2){
    int m=s1.length(),n=s2.length();
    int[][] dp=new int[m+1][n+1];
    for(int i=1;i<=m;i++)
        for(int j=1;j<=n;j++)
            dp[i][j]=s1.charAt(i-1)==s2.charAt(j-1)?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
    return dp[m][n];
}`}}]},{id:`editdist`,label:`Edit Distance`,vizType:`dp2d`,approaches:[{id:`ed0`,tier:`brute`,name:`Recursive O(3ⁿ)`,time:`O(3ⁿ)`,space:`O(n+m)`,why:`Try all insert/delete/replace at each mismatch`,genSteps:$t,code:{js:`function ed(s1,s2,i=s1.length,j=s2.length){
  if(i===0) return j;
  if(j===0) return i;
  if(s1[i-1]===s2[j-1]) return ed(s1,s2,i-1,j-1);
  return 1+Math.min(ed(s1,s2,i-1,j),ed(s1,s2,i,j-1),ed(s1,s2,i-1,j-1));
}`,py:`def ed(s1,s2,i=None,j=None):
    if i is None: i=len(s1);j=len(s2)
    if i==0: return j
    if j==0: return i
    if s1[i-1]==s2[j-1]: return ed(s1,s2,i-1,j-1)
    return 1+min(ed(s1,s2,i-1,j),ed(s1,s2,i,j-1),ed(s1,s2,i-1,j-1))`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`ed1`,tier:`better`,name:`Memoization`,time:`O(nm)`,space:`O(nm)`,why:`Cache each (i,j) state — eliminates overlapping subproblems`,genSteps:en,code:{js:`function editDist(s1,s2,i=s1.length,j=s2.length,m={}){
  const k=\`\${i},\${j}\`;
  if(k in m) return m[k];
  if(!i) return m[k]=j;
  if(!j) return m[k]=i;
  if(s1[i-1]===s2[j-1]) return m[k]=editDist(s1,s2,i-1,j-1,m);
  return m[k]=1+Math.min(editDist(s1,s2,i-1,j,m),editDist(s1,s2,i,j-1,m),editDist(s1,s2,i-1,j-1,m));
}`,py:``,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`ed2`,tier:`opt`,name:`DP Tabulation`,time:`O(nm)`,space:`O(nm)`,why:`Classic DP table — each cell is min(delete,insert,replace)`,genSteps:tn,code:{js:`function editDist(s1,s2){
  const m=s1.length,n=s2.length;
  const dp=Array.from({length:m+1},(_,i)=>Array.from({length:n+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=m;i++)
    for(let j=1;j<=n;j++)
      dp[i][j]=s1[i-1]===s2[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}
// del=dp[i-1][j], ins=dp[i][j-1], rep=dp[i-1][j-1]`,py:`def edit_dist(s1,s2):
    m,n=len(s1),len(s2)
    dp=[[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0]=i
    for j in range(n+1): dp[0][j]=j
    for i in range(1,m+1):
        for j in range(1,n+1):
            if s1[i-1]==s2[j-1]: dp[i][j]=dp[i-1][j-1]
            else: dp[i][j]=1+min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])
    return dp[m][n]`,cpp:`int editDist(string s1,string s2){
    int m=s1.size(),n=s2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1));
    for(int i=0;i<=m;i++) dp[i][0]=i;
    for(int j=0;j<=n;j++) dp[0][j]=j;
    for(int i=1;i<=m;i++)
        for(int j=1;j<=n;j++)
            dp[i][j]=s1[i-1]==s2[j-1]?dp[i-1][j-1]:1+min({dp[i-1][j],dp[i][j-1],dp[i-1][j-1]});
    return dp[m][n];
}`,java:`int editDist(String s1,String s2){
    int m=s1.length(),n=s2.length();
    int[][] dp=new int[m+1][n+1];
    for(int i=0;i<=m;i++) dp[i][0]=i;
    for(int j=0;j<=n;j++) dp[0][j]=j;
    for(int i=1;i<=m;i++)
        for(int j=1;j<=n;j++)
            dp[i][j]=s1.charAt(i-1)==s2.charAt(j-1)?dp[i-1][j-1]:1+Math.min(dp[i-1][j],Math.min(dp[i][j-1],dp[i-1][j-1]));
    return dp[m][n];
}`}}]},{id:`lis`,label:`Longest Increasing Subseq`,vizType:`lis`,approaches:[{id:`lis0`,tier:`brute`,name:`Recursive O(2ⁿ)`,time:`O(2ⁿ)`,space:`O(n)`,why:`Try including/excluding each element — exponential`,genSteps:rn,code:{js:`function lisLength(arr){
  let max=0;
  function bt(i,prev,len){
    max=Math.max(max,len);
    for(let j=i;j<arr.length;j++)
      if(arr[j]>prev) bt(j+1,arr[j],len+1);
  }
  bt(0,-Infinity,0);
  return max;
}
// O(2^n)`,py:`def lis(arr):
    best=[0]
    def bt(i,prev,l):
        best[0]=max(best[0],l)
        for j in range(i,len(arr)):
            if arr[j]>prev: bt(j+1,arr[j],l+1)
    bt(0,float('-inf'),0)
    return best[0]`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`lis1`,tier:`better`,name:`DP O(n²)`,time:`O(n²)`,space:`O(n)`,why:`dp[i] = LIS ending at i — build from earlier results`,genSteps:an,code:{js:`function lis(arr){
  const dp=Array(arr.length).fill(1);
  let max=1;
  for(let i=1;i<arr.length;i++){
    for(let j=0;j<i;j++)
      if(arr[j]<arr[i]) dp[i]=Math.max(dp[i],dp[j]+1);
    max=Math.max(max,dp[i]);
  }
  return max;
}
// O(n²)`,py:`def lis(arr):
    dp=[1]*len(arr)
    for i in range(1,len(arr)):
        for j in range(i):
            if arr[j]<arr[i]: dp[i]=max(dp[i],dp[j]+1)
    return max(dp)`,cpp:`int lis(vector<int>& a){
    int n=a.size();vector<int> dp(n,1);
    int mx=1;
    for(int i=1;i<n;i++){
        for(int j=0;j<i;j++)
            if(a[j]<a[i])dp[i]=max(dp[i],dp[j]+1);
        mx=max(mx,dp[i]);
    }return mx;
}`,java:`int lis(int[] a){
    int n=a.length;int[] dp=new int[n];Arrays.fill(dp,1);
    int mx=1;
    for(int i=1;i<n;i++){
        for(int j=0;j<i;j++)
            if(a[j]<a[i])dp[i]=Math.max(dp[i],dp[j]+1);
        mx=Math.max(mx,dp[i]);
    }return mx;
}`}},{id:`lis2`,tier:`opt`,name:`Binary Search O(n log n)`,time:`O(n log n)`,space:`O(n)`,why:`Patience sorting — maintain 'tails' array with binary search`,genSteps:on,code:{js:`function lis(arr){
  const tails=[];
  for(const x of arr){
    let lo=0,hi=tails.length;
    while(lo<hi){const m=(lo+hi)>>1;if(tails[m]<x)lo=m+1;else hi=m;}
    tails[lo]=x;
  }
  return tails.length;
}
// O(n log n) — optimal!`,py:`import bisect
def lis(arr):
    tails=[]
    for x in arr:
        pos=bisect.bisect_left(tails,x)
        if pos==len(tails): tails.append(x)
        else: tails[pos]=x
    return len(tails)
# O(n log n)`,cpp:`int lis(vector<int>& a){
    vector<int> tails;
    for(int x:a){
        auto it=lower_bound(tails.begin(),tails.end(),x);
        if(it==tails.end())tails.push_back(x);
        else *it=x;
    }return tails.size();
}`,java:`int lis(int[] a){
    List<Integer> tails=new ArrayList<>();
    for(int x:a){
        int pos=Collections.binarySearch(tails,x);
        if(pos<0)pos=-(pos+1);
        if(pos==tails.size())tails.add(x);
        else tails.set(pos,x);
    }return tails.size();
}`}}]},{id:`knapsack`,label:`0/1 Knapsack`,vizType:`dp2d`,approaches:[{id:`ks0`,tier:`brute`,name:`Recursive`,time:`O(2ⁿ)`,space:`O(n)`,why:`Include or exclude each item — tries all 2^n subsets`,genSteps:ln,code:{js:`function knapsack(items,cap,i=items.length){
  if(i===0||cap===0) return 0;
  if(items[i-1].w>cap) return knapsack(items,cap,i-1);
  return Math.max(
    knapsack(items,cap,i-1),
    items[i-1].v+knapsack(items,cap-items[i-1].w,i-1)
  );
}
// O(2^n)`,py:`def knapsack(items,cap,i=None):
    if i is None: i=len(items)
    if i==0 or cap==0: return 0
    if items[i-1][0]>cap: return knapsack(items,cap,i-1)
    return max(knapsack(items,cap,i-1),items[i-1][1]+knapsack(items,cap-items[i-1][0],i-1))`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`ks1`,tier:`better`,name:`Memoization`,time:`O(nW)`,space:`O(nW)`,why:`Cache (item,capacity) pairs — top-down DP`,genSteps:un,code:{js:`function knapsack(items,cap){
  const memo={};
  function dp(i,w){
    const k=\`\${i},\${w}\`;
    if(k in memo) return memo[k];
    if(i===0||w===0) return memo[k]=0;
    if(items[i-1].w>w) return memo[k]=dp(i-1,w);
    return memo[k]=Math.max(dp(i-1,w),items[i-1].v+dp(i-1,w-items[i-1].w));
  }
  return dp(items.length,cap);
}`,py:`from functools import lru_cache
def knapsack(items,cap):
    @lru_cache(maxsize=None)
    def dp(i,w):
        if i==0 or w==0: return 0
        if items[i-1][0]>w: return dp(i-1,w)
        return max(dp(i-1,w),items[i-1][1]+dp(i-1,w-items[i-1][0]))
    return dp(len(items),cap)`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`ks2`,tier:`opt`,name:`DP Tabulation`,time:`O(nW)`,space:`O(nW)`,why:`Fill 2D table: rows=items, cols=capacity 0..W`,genSteps:dn,code:{js:`function knapsack(items,cap){
  const n=items.length;
  const dp=Array.from({length:n+1},()=>Array(cap+1).fill(0));
  for(let i=1;i<=n;i++)
    for(let w=0;w<=cap;w++)
      dp[i][w]=items[i-1].w>w?dp[i-1][w]:Math.max(dp[i-1][w],items[i-1].v+dp[i-1][w-items[i-1].w]);
  return dp[n][cap];
}
// O(nW) — pseudo-polynomial`,py:`def knapsack(items,cap):
    n=len(items)
    dp=[[0]*(cap+1) for _ in range(n+1)]
    for i in range(1,n+1):
        for w in range(cap+1):
            if items[i-1][0]>w: dp[i][w]=dp[i-1][w]
            else: dp[i][w]=max(dp[i-1][w],items[i-1][1]+dp[i-1][w-items[i-1][0]])
    return dp[n][cap]`,cpp:`int knapsack(vector<pair<int,int>>& it,int cap){
    int n=it.size();
    vector<vector<int>> dp(n+1,vector<int>(cap+1,0));
    for(int i=1;i<=n;i++)
        for(int w=0;w<=cap;w++)
            dp[i][w]=it[i-1].first>w?dp[i-1][w]:max(dp[i-1][w],it[i-1].second+dp[i-1][w-it[i-1].first]);
    return dp[n][cap];
}`,java:`int knapsack(int[][] it,int cap){
    int n=it.length;
    int[][] dp=new int[n+1][cap+1];
    for(int i=1;i<=n;i++)
        for(int w=0;w<=cap;w++)
            dp[i][w]=it[i-1][0]>w?dp[i-1][w]:Math.max(dp[i-1][w],it[i-1][1]+dp[i-1][w-it[i-1][0]]);
    return dp[n][cap];
}`}}]},{id:`subsetsum`,label:`Subset Sum`,vizType:`dp2d`,approaches:[{id:`ss0`,tier:`brute`,name:`Recursion O(2^n)`,time:`O(2^n)`,space:`O(n)`,why:`Try include/exclude each number — exponential without memo`,genSteps:di,code:Ei.dp},{id:`ss1`,tier:`better`,name:`DP Table O(n·T)`,time:`O(n·T)`,space:`O(n·T)`,why:`dp[i][j]=can we make sum j with first i numbers`,genSteps:fi,code:Ei.dp},{id:`ss2`,tier:`opt`,name:`1D DP O(T) space`,time:`O(n·T)`,space:`O(T)`,why:`Only need previous row — single boolean array updated right-to-left`,genSteps:pi,code:Ei.dp}]},{id:`decodeways`,label:`Decode Ways`,vizType:`dp`,approaches:[{id:`dw0`,tier:`brute`,name:`Recursion O(2^n)`,time:`O(2^n)`,space:`O(n)`,why:`At each position try 1 or 2 digits recursively`,genSteps:Ci,code:ki.dp},{id:`dw1`,tier:`better`,name:`DP Array O(n)`,time:`O(n)`,space:`O(n)`,why:`dp[i]=ways to decode first i chars, build bottom-up`,genSteps:wi,code:ki.dp},{id:`dw2`,tier:`opt`,name:`DP O(1) space`,time:`O(n)`,space:`O(1)`,why:`Only need prev 2 values — rolling variables instead of array`,genSteps:wi,code:ki.dp}]}]},{id:`trie`,label:`Trie`,emoji:`🗺️`,algorithms:[{id:`trieops`,label:`Trie Operations`,vizType:`trie`,approaches:[{id:`to0`,tier:`brute`,name:`Insert Words`,time:`O(L) per word`,space:`O(total chars)`,why:`Each character becomes a node — shared prefixes save space`,genSteps:gn,code:{js:`class Trie {
  constructor(){this.root={};}
  insert(word){
    let node=this.root;
    for(const c of word){
      if(!node[c]) node[c]={};
      node=node[c];
    }
    node["#"]=true; // end marker
  }
}
// O(L) insert`,py:`class Trie:
    def __init__(self): self.root={}
    def insert(self,word):
        node=self.root
        for c in word:
            if c not in node: node[c]={}
            node=node[c]
        node["#"]=True
# O(L)`,cpp:`struct Trie{
    unordered_map<char,Trie*> ch;
    bool end=false;
    void insert(string& w){
        Trie* cur=this;
        for(char c:w){
            if(!cur->ch[c])cur->ch[c]=new Trie();
            cur=cur->ch[c];
        }
        cur->end=true;
    }
};`,java:`class Trie{
    Map<Character,Trie> ch=new HashMap<>();
    boolean end;
    void insert(String w){
        Trie cur=this;
        for(char c:w.toCharArray()){
            cur.ch.putIfAbsent(c,new Trie());
            cur=cur.ch.get(c);
        }
        cur.end=true;
    }
}`}},{id:`to1`,tier:`better`,name:`Search Word`,time:`O(L)`,space:`O(1)`,why:`Follow character path — O(L) regardless of dictionary size`,genSteps:_n,code:{js:`search(word){
  let node=this.root;
  for(const c of word){
    if(!node[c]) return false;
    node=node[c];
  }
  return node["#"]===true;
}
// O(L) — faster than hash for prefixes!`,py:`def search(self,word):
    node=self.root
    for c in word:
        if c not in node: return False
        node=node[c]
    return "#" in node
# O(L)`,cpp:`bool search(string& w){
    Trie* cur=this;
    for(char c:w){
        if(!cur->ch.count(c))return false;
        cur=cur->ch[c];
    }
    return cur->end;
}`,java:`boolean search(String w){
    Trie cur=this;
    for(char c:w.toCharArray()){
        if(!cur.ch.containsKey(c))return false;
        cur=cur.ch.get(c);
    }
    return cur.end;
}`}},{id:`to2`,tier:`opt`,name:`Prefix / Autocomplete`,time:`O(L+results)`,space:`O(1)`,why:`Navigate to prefix node then DFS — powers autocomplete features`,genSteps:vn,code:{js:`startsWith(prefix){
  let node=this.root;
  for(const c of prefix){
    if(!node[c]) return [];
    node=node[c];
  }
  // DFS from prefix node
  const results=[];
  function dfs(n,word){
    if(n["#"]) results.push(word);
    for(const c in n) if(c!="#") dfs(n[c],word+c);
  }
  dfs(node,prefix);
  return results;
}`,py:`def starts_with(self,prefix):
    node=self.root
    for c in prefix:
        if c not in node: return []
        node=node[c]
    res=[]
    def dfs(n,w):
        if "#" in n: res.append(w)
        for c in n:
            if c!="#": dfs(n[c],w+c)
    dfs(node,prefix)
    return res`,cpp:`vector<string> startsWith(string pre){
    Trie* cur=this;
    for(char c:pre){if(!cur->ch.count(c))return{};cur=cur->ch[c];}
    vector<string> res;
    function<void(Trie*,string)> dfs=[&](Trie* n,string w){
        if(n->end)res.push_back(w);
        for(auto& p:n->ch)dfs(p.second,w+p.first);
    };
    dfs(cur,pre);return res;
}`,java:`List<String> startsWith(String pre){
    Trie cur=this;
    for(char c:pre.toCharArray()){if(!cur.ch.containsKey(c))return new ArrayList<>();cur=cur.ch.get(c);}
    List<String> res=new ArrayList<>();
    // DFS to collect all words
    dfs(cur,pre,res);
    return res;
}`}}]}]},{id:`advgraph`,label:`Advanced Graph`,emoji:`🔀`,algorithms:[{id:`toposort`,label:`Topological Sort`,vizType:`graph`,approaches:[{id:`ag0`,tier:`brute`,name:`Kahn's BFS`,time:`O(V+E)`,space:`O(V)`,why:`Track in-degrees — add 0-in-degree nodes to queue`,genSteps:wn,code:{js:`function topoSort(graph,n){
  const indeg=Array(n).fill(0);
  for(let u=0;u<n;u++) for(const v of graph[u]) indeg[v]++;
  const q=[],order=[];
  for(let i=0;i<n;i++) if(indeg[i]===0) q.push(i);
  while(q.length){
    const u=q.shift(); order.push(u);
    for(const v of graph[u]) if(--indeg[v]===0) q.push(v);
  }
  return order; // O(V+E)
}`,py:`from collections import deque
def topo_sort(graph,n):
    indeg=[0]*n
    for u in range(n):
        for v in graph[u]: indeg[v]+=1
    q=deque(i for i in range(n) if indeg[i]==0)
    order=[]
    while q:
        u=q.popleft();order.append(u)
        for v in graph[u]:
            indeg[v]-=1
            if indeg[v]==0: q.append(v)
    return order`,cpp:`vector<int> topoSort(vector<vector<int>>& g,int n){
    vector<int> ind(n,0);
    for(int u=0;u<n;u++) for(int v:g[u]) ind[v]++;
    queue<int> q;for(int i=0;i<n;i++) if(!ind[i])q.push(i);
    vector<int> res;
    while(!q.empty()){int u=q.front();q.pop();res.push_back(u);for(int v:g[u]) if(--ind[v]==0)q.push(v);}
    return res;
}`,java:`List<Integer> topoSort(List<List<Integer>> g,int n){
    int[] ind=new int[n];
    for(int u=0;u<n;u++) for(int v:g.get(u)) ind[v]++;
    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<n;i++) if(ind[i]==0) q.add(i);
    List<Integer> res=new ArrayList<>();
    while(!q.isEmpty()){int u=q.poll();res.add(u);for(int v:g.get(u)) if(--ind[v]==0) q.add(v);}
    return res;
}`}},{id:`ag1`,tier:`better`,name:`DFS Topo Sort`,time:`O(V+E)`,space:`O(V)`,why:`Run DFS and push to stack after all neighbors visited`,genSteps:Tn,code:{js:`function topoSort(graph,n){
  const vis=new Set(),stack=[];
  function dfs(u){
    vis.add(u);
    for(const v of graph[u]) if(!vis.has(v)) dfs(v);
    stack.unshift(u); // add to front after exploring
  }
  for(let i=0;i<n;i++) if(!vis.has(i)) dfs(i);
  return stack;
}`,py:`def topo_dfs(graph,n):
    vis=set();stack=[]
    def dfs(u):
        vis.add(u)
        for v in graph[u]:
            if v not in vis: dfs(v)
        stack.insert(0,u)
    for i in range(n):
        if i not in vis: dfs(i)
    return stack`,cpp:`void dfs(vector<vector<int>>& g,int u,vector<bool>& vis,vector<int>& st){
    vis[u]=true;
    for(int v:g[u]) if(!vis[v]) dfs(g,v,vis,st);
    st.push_back(u);
}
vector<int> topoSort(vector<vector<int>>& g,int n){
    vector<bool> vis(n,false);vector<int> st;
    for(int i=0;i<n;i++) if(!vis[i]) dfs(g,i,vis,st);
    reverse(st.begin(),st.end());return st;
}`,java:`// Same logic — see JS/Python above`}},{id:`ag2`,tier:`opt`,name:`Kruskal's MST`,time:`O(E log E)`,space:`O(V)`,why:`Sort edges by weight, use Union-Find to avoid cycles`,genSteps:Dn,code:{js:`function kruskal(edges,n){
  edges.sort((a,b)=>a.w-b.w);
  const par=[...Array(n).keys()],rank=Array(n).fill(0);
  function find(x){return par[x]===x?x:par[x]=find(par[x]);}
  function union(a,b){
    const ra=find(a),rb=find(b);
    if(ra===rb)return false;
    if(rank[ra]<rank[rb])par[ra]=rb;
    else if(rank[ra]>rank[rb])par[rb]=ra;
    else{par[rb]=ra;rank[ra]++;}
    return true;
  }
  return edges.filter(e=>union(e.u,e.v));
}
// O(E log E)`,py:`def kruskal(edges,n):
    edges.sort(key=lambda e:e[2])
    parent=list(range(n));rank=[0]*n
    def find(x):
        while parent[x]!=x: parent[x]=parent[parent[x]];x=parent[x]
        return x
    def union(a,b):
        ra,rb=find(a),find(b)
        if ra==rb: return False
        if rank[ra]<rank[rb]: parent[ra]=rb
        elif rank[ra]>rank[rb]: parent[rb]=ra
        else: parent[rb]=ra;rank[ra]+=1
        return True
    return [e for e in edges if union(e[0],e[1])]`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}}]},{id:`mst`,label:`MST & Floyd-Warshall`,vizType:`mst`,approaches:[{id:`mst0`,tier:`brute`,name:`Kruskal's MST`,time:`O(E log E)`,space:`O(V)`,why:`Sort edges, union-find to skip cycles — greedy is optimal`,genSteps:Dn,code:{js:`// See Kruskal above`,py:``,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`mst1`,tier:`better`,name:`Prim's MST`,time:`O(V²) or O(E log V)`,space:`O(V)`,why:`Grow MST from one node — add cheapest edge at each step`,genSteps:On,code:{js:`function prim(graph,n){
  const key=Array(n).fill(Infinity),inMST=Array(n).fill(false),parent=Array(n).fill(-1);
  key[0]=0;
  for(let i=0;i<n;i++){
    let u=key.reduce((m,v,i)=>(!inMST[i]&&v<key[m])?i:m,0);
    inMST[u]=true;
    for(const[v,w] of graph[u])
      if(!inMST[v]&&w<key[v]){key[v]=w;parent[v]=u;}
  }
  return parent;
}
// O(V²) basic`,py:`import heapq
def prim(graph,n):
    key=[float('inf')]*n;inMST=[False]*n;parent=[-1]*n
    key[0]=0;pq=[(0,0)]
    while pq:
        d,u=heapq.heappop(pq)
        if inMST[u]: continue
        inMST[u]=True
        for v,w in graph[u]:
            if not inMST[v] and w<key[v]:
                key[v]=w;parent[v]=u;heapq.heappush(pq,(w,v))
    return parent`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`mst2`,tier:`opt`,name:`Floyd-Warshall`,time:`O(V³)`,space:`O(V²)`,why:`3 nested loops: try every node as intermediate — all-pairs shortest paths`,genSteps:kn,code:{js:`function floydWarshall(dist,n){
  for(let k=0;k<n;k++)
    for(let i=0;i<n;i++)
      for(let j=0;j<n;j++)
        if(dist[i][k]+dist[k][j]<dist[i][j])
          dist[i][j]=dist[i][k]+dist[k][j];
  return dist;
}
// O(V³) — all pairs!`,py:`def floyd_warshall(dist,n):
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k]+dist[k][j]<dist[i][j]:
                    dist[i][j]=dist[i][k]+dist[k][j]
    return dist`,cpp:`void floydWarshall(vector<vector<int>>& d,int n){
    for(int k=0;k<n;k++)
        for(int i=0;i<n;i++)
            for(int j=0;j<n;j++)
                if(d[i][k]!=INF&&d[k][j]!=INF&&d[i][k]+d[k][j]<d[i][j])
                    d[i][j]=d[i][k]+d[k][j];
}`,java:`void floydWarshall(int[][] d,int n){
    for(int k=0;k<n;k++)
        for(int i=0;i<n;i++)
            for(int j=0;j<n;j++)
                if(d[i][k]!=INF&&d[k][j]!=INF&&d[i][k]+d[k][j]<d[i][j])
                    d[i][j]=d[i][k]+d[k][j];
}`}}]}]},,{id:`unionfind`,label:`Union-Find`,emoji:`🔗`,algorithms:[{id:`uf`,label:`Disjoint Set Union`,vizType:`uf`,approaches:[{id:`uf0`,tier:`brute`,name:`Quick Find`,time:`O(n) union`,space:`O(n)`,why:`id[i]=component — find O(1) but union scans all elements`,genSteps:Nn,code:Bn.quickFind},{id:`uf1`,tier:`better`,name:`Quick Union`,time:`O(n) find`,space:`O(n)`,why:`Tree structure — union O(1) but find traces to root`,genSteps:Pn,code:Bn.quickFind},{id:`uf2`,tier:`opt`,name:`Weighted + Path Compress`,time:`O(α(n)) ≈ O(1)`,space:`O(n)`,why:`Rank keeps trees flat, path compression halves depth — near O(1)`,genSteps:Fn,code:Bn.weightedUF}]}]},{id:`segtree`,label:`Segment Tree`,emoji:`🌲`,algorithms:[{id:`seg`,label:`Range Queries`,vizType:`seg`,approaches:[{id:`sg0`,tier:`brute`,name:`Linear Scan`,time:`O(n) per query`,space:`O(1)`,why:`Scan every element in range — simple but slow`,genSteps:Ln,code:Vn.brute},{id:`sg1`,tier:`better`,name:`Segment Tree`,time:`O(log n) query`,space:`O(n)`,why:`Pre-build tree of range sums — O(log n) per query`,genSteps:Rn,code:Vn.segTree},{id:`sg2`,tier:`opt`,name:`Lazy Propagation`,time:`O(log n) update`,space:`O(n)`,why:`Defer range updates — apply lazily only when needed`,genSteps:zn,code:Vn.segTree}]}]},,{id:`monostack`,label:`Monotonic Stack`,emoji:`📚`,algorithms:[{id:`traprain`,label:`Trapping Rain Water`,vizType:`mono`,approaches:[{id:`tr0`,tier:`brute`,name:`Brute O(n²)`,time:`O(n²)`,space:`O(1)`,why:`For each cell scan left+right for max walls`,genSteps:Gn,code:cr.trapBrute},{id:`tr1`,tier:`better`,name:`Prefix Arrays O(n)`,time:`O(n)`,space:`O(n)`,why:`Precompute leftMax/rightMax arrays, one pass`,genSteps:Kn,code:cr.trapBrute},{id:`tr2`,tier:`opt`,name:`Two Pointers O(1)`,time:`O(n)`,space:`O(1)`,why:`Two pointers from both ends, no extra space needed`,genSteps:qn,code:cr.trapTwoPtr}]},{id:`histogram`,label:`Largest Rectangle`,vizType:`mono`,approaches:[{id:`hs0`,tier:`brute`,name:`Brute O(n²)`,time:`O(n²)`,space:`O(1)`,why:`Check every pair (i,j) and find minimum height`,genSteps:Jn,code:cr.histStack},{id:`hs1`,tier:`better`,name:`Monotonic Stack`,time:`O(n)`,space:`O(n)`,why:`Stack keeps indices of increasing bars — O(n) one pass`,genSteps:Yn,code:cr.histStack},{id:`hs2`,tier:`opt`,name:`Monotonic Stack`,time:`O(n)`,space:`O(n)`,why:`Same stack, handles sentinel at end cleanly`,genSteps:Yn,code:cr.histStack}]},{id:`dailytemp`,label:`Daily Temperatures`,vizType:`mono`,approaches:[{id:`dt0`,tier:`brute`,name:`Nested Loop O(n²)`,time:`O(n²)`,space:`O(1)`,why:`For each day scan forward for warmer temperature`,genSteps:Xn,code:cr.ngeStack},{id:`dt1`,tier:`better`,name:`Mono Stack O(n)`,time:`O(n)`,space:`O(n)`,why:`Stack stores unresolved indices — pop when warmer found`,genSteps:Zn,code:cr.ngeStack},{id:`dt2`,tier:`opt`,name:`Mono Stack O(n)`,time:`O(n)`,space:`O(n)`,why:`Same stack approach — effectively O(n) amortized`,genSteps:Zn,code:cr.ngeStack}]}]},{id:`matrixdp`,label:`Matrix DP`,emoji:`🔲`,algorithms:[{id:`uniquepaths`,label:`Unique Paths`,vizType:`matrix`,approaches:[{id:`up0`,tier:`brute`,name:`Recursion O(2^n)`,time:`O(2^(m+n))`,space:`O(m+n)`,why:`Explore every path recursively — exponential without memoization`,genSteps:tr,code:lr.pathBrute},{id:`up1`,tier:`better`,name:`Tabulation O(mn)`,time:`O(mn)`,space:`O(mn)`,why:`Build dp table: dp[i][j]=dp[i-1][j]+dp[i][j-1]`,genSteps:nr,code:lr.pathDP},{id:`up2`,tier:`opt`,name:`Space O(n)`,time:`O(mn)`,space:`O(n)`,why:`Only need previous row to compute next — single row suffices`,genSteps:rr,code:lr.pathDP}]},{id:`minpath`,label:`Min Path Sum`,vizType:`matrix`,approaches:[{id:`mp0`,tier:`brute`,name:`Recursion`,time:`O(2^(m+n))`,space:`O(m+n)`,why:`Try all paths recursively and take minimum`,genSteps:ar,code:lr.minPath},{id:`mp1`,tier:`better`,name:`Tabulation O(mn)`,time:`O(mn)`,space:`O(mn)`,why:`dp[i][j]=grid[i][j]+min(top,left)`,genSteps:or,code:lr.minPath},{id:`mp2`,tier:`opt`,name:`In-place O(1)`,time:`O(mn)`,space:`O(1)`,why:`Modify grid in-place — no extra space needed`,genSteps:sr,code:lr.minPath}]}]},,{id:`heap`,label:`Heap`,emoji:`🔺`,algorithms:[{id:`heapds`,label:`Min Heap`,vizType:`heap`,approaches:[{id:`hb0`,tier:`brute`,name:`Unsorted Array`,time:`O(n) find-min`,space:`O(n)`,why:`No structure — insert fast but finding min requires full scan`,genSteps:wr,code:Ur.h},{id:`hb1`,tier:`better`,name:`Min Heap Insert`,time:`O(log n)`,space:`O(n)`,why:`Sift-up after insert maintains heap property — O(log n) height`,genSteps:Tr,code:Ur.h},{id:`hb2`,tier:`opt`,name:`Heapify + Extract`,time:`O(n) build`,space:`O(n)`,why:`Build in O(n) via heapify-down from n/2 — better than n inserts!`,genSteps:Er,code:Ur.h}]}]},{id:`intervals`,label:`Intervals`,emoji:`📏`,algorithms:[{id:`mergeivl`,label:`Merge Intervals`,vizType:`interval`,approaches:[{id:`mi0`,tier:`brute`,name:`Check All Pairs`,time:`O(n²)`,space:`O(n)`,why:`Check every pair for overlap and merge repeatedly`,genSteps:kr,code:Wr.merge},{id:`mi1`,tier:`better`,name:`Sort + Sweep`,time:`O(n log n)`,space:`O(n)`,why:`Sort by start, sweep once merging overlaps — O(n log n) sort dominates`,genSteps:Ar,code:Wr.merge},{id:`mi2`,tier:`opt`,name:`In-place Merge`,time:`O(n log n)`,space:`O(1)`,why:`Same sort+sweep but write results back in-place — O(1) extra space`,genSteps:jr,code:Wr.merge}]},{id:`meetrooms`,label:`Meeting Rooms II`,vizType:`interval`,approaches:[{id:`mr0`,tier:`brute`,name:`Count Concurrent`,time:`O(n²)`,space:`O(1)`,why:`For each meeting count how many others overlap it`,genSteps:Mr,code:Wr.merge},{id:`mr1`,tier:`better`,name:`Events Sort`,time:`O(n log n)`,space:`O(n)`,why:`Create start/end events, track active count — elegant O(n) pass after sort`,genSteps:Nr,code:Wr.merge},{id:`mr2`,tier:`opt`,name:`Two Sorted Arrays`,time:`O(n log n)`,space:`O(n)`,why:`Sort starts and ends separately, two-pointer sweep — same complexity but cleaner`,genSteps:Pr,code:Wr.merge}]}]},,{id:`gridalgos`,label:`Grid Algorithms`,emoji:`🔲`,algorithms:[{id:`numislands`,label:`Number of Islands`,vizType:`gridviz`,approaches:[{id:`ni0`,tier:`brute`,name:`Flood Fill BFS`,time:`O(n·m)`,space:`O(n·m)`,why:`BFS from each unvisited land cell, mark all connected cells as one island`,genSteps:Qr,code:ii.islands},{id:`ni1`,tier:`better`,name:`DFS Recursive`,time:`O(n·m)`,space:`O(n·m) stack`,why:`DFS sinks each island in-place — elegant recursion, same complexity`,genSteps:$r,code:ii.islands},{id:`ni2`,tier:`opt`,name:`BFS Iterative`,time:`O(n·m)`,space:`O(min(n,m))`,why:`BFS uses queue — iterative, avoids stack overflow on large grids`,genSteps:ei,code:ii.islands}]},{id:`wordsearch`,label:`Word Search`,vizType:`gridviz`,approaches:[{id:`ws0`,tier:`brute`,name:`Try All Starts`,time:`O(n·m·4^L)`,space:`O(L)`,why:`Try every cell as start, DFS in all 4 directions — backtrack on mismatch`,genSteps:ni,code:ii.wordsearch},{id:`ws1`,tier:`better`,name:`DFS + Backtrack`,time:`O(n·m·4^L)`,space:`O(L)`,why:`Mark visited to avoid revisiting, backtrack by restoring original value`,genSteps:ri,code:ii.wordsearch},{id:`ws2`,tier:`opt`,name:`DFS + Pruning`,time:`O(n·m·4^L)`,space:`O(L)`,why:`Same DFS but stop early when first match found — same worst case, better avg`,genSteps:ri,code:ii.wordsearch}]}]},,{id:`stocks`,label:`Stock Problems`,emoji:`📈`,algorithms:[{id:`stockI`,label:`Best Time to Buy/Sell`,vizType:`bars`,approaches:[{id:`sk0`,tier:`brute`,name:`Try All Pairs`,time:`O(n²)`,space:`O(1)`,why:`Try every buy/sell combination and track maximum profit`,genSteps:yi,code:Oi.greedy},{id:`sk1`,tier:`better`,name:`Greedy O(n)`,time:`O(n)`,space:`O(1)`,why:`Track running minimum — any better price seen later is profit`,genSteps:bi,code:Oi.greedy},{id:`sk2`,tier:`opt`,name:`DP States`,time:`O(n)`,space:`O(1)`,why:`hold/cash states: hold=max(hold,-price), cash=max(cash,hold+price)`,genSteps:xi,code:Oi.greedy}]}]}];function ji({step:e,prevStep:t}){if(!e?.a)return null;let{a:n,hi:r=[],sw:i=[],done:a=[]}=e,o=Math.max(...n);return(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:2,height:130,width:`100%`,padding:`0 4px`},children:n.map((e,n)=>{let s=p.border;a.includes&&a.includes(n)&&(s=p.opt),Array.isArray(a)&&a.includes(n)&&(s=p.opt),i.includes(n)&&(s=p.brute),r.includes(n)&&(s=p.better);let c=t?.a&&t.a[n]!==void 0&&t.a[n]!==e&&!i.includes(n)&&!r.includes(n);c&&(s=`${p.better}66`);let l=Math.max(6,Math.round(e/o*118)),u=i.includes(n)?{boxShadow:`0 0 8px ${p.better}88`}:c?{boxShadow:`0 0 4px ${p.better}55`}:{};return(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:1},children:[(0,f.jsx)(`div`,{style:{width:`100%`,height:l,background:s,borderRadius:`2px 2px 0 0`,transition:`all 0.18s`,...u}}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:e})]},n)})})}function Mi({step:e,catId:t,prevStep:n}){if(!e)return null;let r=e.arr||e.a;if(!r)return null;let i=Array.isArray(e.found)?e.found:e.found>=0?[e.found]:[],a=e.found===-2;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6,width:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:3,justifyContent:`center`},children:r.map((t,r)=>{let o=n?.arr?.[r]??n?.a?.[r],s=o!==void 0&&o!==t,c=p.s2,l=p.border,u=p.text;return s&&!i.includes(r)&&(c=`${p.better}11`,l=`${p.better}66`),i.includes(r)?(c=`#0e2a1c`,l=p.opt,u=p.opt):a&&r===e.cur?(c=`#2a0e12`,l=p.brute,u=p.brute):e.p1!==void 0||e.p2!==void 0?(r===e.p1&&(c=`#0e1a2a`,l=p.accent,u=p.accent),e.p2!==void 0&&e.p2>=0&&r===e.p2&&e.p2!==e.p1&&(c=`#1a0e2a`,l=p.purple,u=p.purple)):r===e.cur?(c=`#2a1e0e`,l=p.better,u=p.better):e.l>=0&&r>=e.l&&r<=e.r&&(c=`#0e1220`,l=`#2a2a5a`),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:34,height:34,display:`flex`,alignItems:`center`,justifyContent:`center`,background:c,border:`1.5px solid ${l}`,borderRadius:6,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:u,transition:`all 0.15s`},children:t}),(0,f.jsx)(`span`,{style:{fontSize:8,color:p.muted,fontFamily:`JetBrains Mono`},children:r})]},r)})}),e.map?.curWater!==void 0&&(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,justifyContent:`center`,marginTop:4,flexWrap:`wrap`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Current Water`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:700},children:e.map.curWater})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Max Water`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:e.map.maxWater})]})]}),(t===`twosum`||t===`twoSum`)&&e.map&&Object.keys(e.map).length>0&&(0,f.jsx)(`div`,{style:{padding:`3px 8px`,background:p.s1,border:`1px solid ${p.border}`,borderRadius:5,fontSize:9,fontFamily:`JetBrains Mono`,color:p.muted},children:`map:{${Object.entries(e.map).filter(([e])=>e!==`curWater`).slice(0,6).map(([e,t])=>`${e}→${t}`).join(`,`)}}`})]})}function B({step:e}){if(!e)return null;let{active:t,memo:n,table:r,calls:i,result:a}=e;if(r)return(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`DP table:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:r.slice(0,Math.min(r.length,12)).map((e,n)=>{let r=n===t;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:40,height:36,display:`flex`,alignItems:`center`,justifyContent:`center`,background:r?`#0e1a2a`:p.s2,border:`1.5px solid ${r?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:e>999?9:11,fontWeight:500,color:r?p.accent:p.text,transition:`all 0.15s`},children:n<=1||e>0?e:``}),(0,f.jsxs)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:[`dp[`,n,`]`]})]},n)})}),a!=null&&(0,f.jsxs)(`div`,{style:{marginTop:8,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`Result: `,a]})]});let o=Object.keys(n||{}).sort((e,t)=>e-+t);return(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,width:`100%`},children:[i>0&&(0,f.jsxs)(`div`,{style:{marginBottom:6,display:`flex`,alignItems:`center`,gap:6},children:[(0,f.jsx)(`span`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:`Total calls:`}),(0,f.jsx)(`span`,{style:{fontSize:15,color:i>30?p.brute:p.better,fontFamily:`JetBrains Mono`,fontWeight:700},children:i})]}),t>=0&&(0,f.jsxs)(`div`,{style:{marginBottom:6,display:`flex`,alignItems:`center`,gap:6},children:[(0,f.jsx)(`span`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:`Computing:`}),(0,f.jsxs)(`span`,{style:{fontSize:13,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`fib(`,t,`)`]})]}),o.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:3},children:`Cache:`}),(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:3},children:o.slice(0,12).map(e=>(0,f.jsxs)(`div`,{style:{padding:`2px 6px`,background:+e===t?`#0e1a2a`:p.s2,border:`1px solid ${+e===t?p.accent:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:9,color:p.text},children:[e,`:`,n[e]]},e))})]}),a!=null&&(0,f.jsxs)(`div`,{style:{marginTop:8,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`Result: `,a]})]})}function V({codeStr:e,highlightLine:t,language:n,onLang:r}){let i=(e||``).split(`
`),a=(0,l.useRef)(null);return(0,l.useEffect)(()=>{a.current?.scrollIntoView({block:`nearest`,behavior:`smooth`})},[t]),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,background:p.bg},children:[(0,f.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid ${p.border}`,flexShrink:0},children:h.map(e=>(0,f.jsx)(`button`,{onClick:()=>r(e),style:{flex:1,padding:`5px 2px`,background:n===e?p.s1:`transparent`,color:n===e?p.text:p.muted,border:`none`,borderBottom:n===e?`2px solid ${p.accent}`:`2px solid transparent`,cursor:`pointer`,fontSize:10,fontFamily:`JetBrains Mono`,transition:`all 0.12s`},children:_[e]},e))}),(0,f.jsx)(`div`,{style:{flex:1,overflowY:`auto`,padding:`4px 0`},children:i.map((e,n)=>(0,f.jsxs)(`div`,{ref:n===t?a:null,style:{display:`flex`,alignItems:`center`,minHeight:18,background:n===t?`rgba(91,141,245,0.1)`:`transparent`,borderLeft:n===t?`2px solid ${p.accent}`:`2px solid transparent`},children:[(0,f.jsx)(`span`,{style:{width:26,textAlign:`right`,paddingRight:6,color:p.muted,fontSize:9,fontFamily:`JetBrains Mono`,flexShrink:0,opacity:.5},children:n+1}),(0,f.jsx)(`span`,{style:{fontSize:10.5,fontFamily:`JetBrains Mono`,color:n===t?p.text:p.muted,whiteSpace:`pre`,lineHeight:`18px`},children:e})]},n))})]})}function Ni({onClick:e,title:t}){return(0,f.jsx)(`button`,{onClick:e,style:{padding:`6px 11px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:5,cursor:`pointer`,fontSize:13,fontFamily:`JetBrains Mono`,touchAction:`manipulation`},children:t})}function Pi({step:e}){if(!e)return null;if(e.window!==void 0){let{a:t,window:n=[],maxWindow:r=[],curSum:i,maxSum:a}=e;return Math.max(...t.map(Math.abs),1),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,width:`100%`,padding:`4px`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,flexWrap:`wrap`},children:t.map((e,t)=>{let i=p.s2,a=p.border,o=p.text;return r.includes(t)&&(i=`#0e2a1c`,a=p.opt,o=p.opt),n.includes(t)&&!r.includes(t)&&(i=`#0e1a2a`,a=p.accent,o=p.accent),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:34,height:34,display:`flex`,alignItems:`center`,justifyContent:`center`,background:i,border:`1.5px solid ${a}`,borderRadius:6,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:o,transition:`all 0.15s`},children:e}),(0,f.jsx)(`span`,{style:{fontSize:8,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,justifyContent:`center`,flexWrap:`wrap`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Current Sum`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:700},children:i??`—`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Max Sum`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:a===-1/0?`—`:a})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:6,justifyContent:`center`,fontSize:10,color:p.muted},children:[(0,f.jsx)(`span`,{style:{color:p.accent},children:`■ Current window`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`■ Max window`})]})]})}if(`dpArr`in e&&e.dpArr===null){let{active:t,calls:n,result:r}=e;return(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,width:`100%`},children:[(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:8},children:[`Coins: [`,Ae.join(`, `),`] — Target: `,je]}),n>0&&(0,f.jsxs)(`div`,{style:{marginBottom:8,display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`span`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`},children:`Recursive calls so far:`}),(0,f.jsx)(`span`,{style:{fontSize:16,color:n>50?p.brute:p.better,fontFamily:`JetBrains Mono`,fontWeight:700},children:n})]}),t>=0&&(0,f.jsxs)(`div`,{style:{marginBottom:8,display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`span`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`},children:`Computing:`}),(0,f.jsxs)(`span`,{style:{fontSize:14,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`coin(rem=`,t,`)`]})]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginTop:8},children:Ae.map(e=>(0,f.jsxs)(`div`,{style:{padding:`4px 10px`,background:p.s2,border:`1px solid ${p.border}`,borderRadius:6,fontFamily:`JetBrains Mono`,fontSize:12,color:p.muted},children:[`coin: `,e]},e))}),r!=null&&(0,f.jsxs)(`div`,{style:{marginTop:12,fontSize:14,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`Min coins: `,r===-1?`impossible`:r]})]})}if(e.dpArr!==void 0&&e.dpArr!==null){let{dpArr:t,active:n}=e,r=Math.min(t.length,13);return(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`dp[amount] = min coins needed:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:t.slice(0,r).map((e,t)=>{let r=t===n;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:38,height:34,display:`flex`,alignItems:`center`,justifyContent:`center`,background:r?`#0e1a2a`:e===`∞`?p.s2:`#0e2a1c`,border:`1.5px solid ${r?p.accent:e===`∞`?p.border:p.opt}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:r?p.accent:e===`∞`?p.muted:p.opt,transition:`all 0.15s`},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),e.result!=null&&(0,f.jsxs)(`div`,{style:{marginTop:8,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`Min coins: `,e.result]})]})}return null}function Fi({step:e}){if(!e)return null;let{nodes:t,edges:n,visited:r=[],current:i,queue:a=[],distances:o={},path:s=[]}=e,c=e=>s.length>1&&s.includes(e)?{fill:`#1a2a1a`,stroke:p.opt,text:p.opt}:e===i?{fill:`#2a1e0e`,stroke:p.better,text:p.better}:a.includes(e)?{fill:`#0e1220`,stroke:p.accent,text:p.accent}:r.includes(e)?{fill:`#0e1a0e`,stroke:`#2a5a2a`,text:`#4a9a4a`}:{fill:p.s2,stroke:p.border,text:p.muted};return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 520 280`,style:{width:`100%`,maxWidth:520,display:`block`,margin:`0 auto`},children:[n.map((e,n)=>{let r=t[e.f],i=t[e.t],a=s.length>1&&s.includes(e.f)&&s.includes(e.t)&&Math.abs(s.indexOf(e.f)-s.indexOf(e.t))===1,o=(r.x+i.x)/2,c=(r.y+i.y)/2,l=i.x-r.x,u=i.y-r.y,d=Math.sqrt(l*l+u*u),m=r.x+l/d*18,h=r.y+u/d*18,g=i.x-l/d*18,_=i.y-u/d*18;return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`defs`,{children:(0,f.jsx)(`marker`,{id:`arr${n}`,markerWidth:`8`,markerHeight:`8`,refX:`6`,refY:`3`,orient:`auto`,children:(0,f.jsx)(`path`,{d:`M0,0 L0,6 L8,3 z`,fill:a?p.opt:p.border})})}),(0,f.jsx)(`line`,{x1:m,y1:h,x2:g,y2:_,stroke:a?p.opt:p.border,strokeWidth:a?2.5:1.5,markerEnd:`url(#arr${n})`,strokeDasharray:`none`}),(0,f.jsx)(`rect`,{x:o-9,y:c-8,width:18,height:15,rx:3,fill:p.s1}),(0,f.jsx)(`text`,{x:o,y:c+4,textAnchor:`middle`,fontSize:9,fill:a?p.opt:p.muted,fontFamily:`JetBrains Mono`,children:e.w})]},n)}),t.map(e=>{let t=c(e.id),n=o[e.id];return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:e.x,cy:e.y,r:18,fill:t.fill,stroke:t.stroke,strokeWidth:e.id===i?2.5:1.5}),(0,f.jsx)(`text`,{x:e.x,y:e.y+5,textAnchor:`middle`,fontSize:13,fontWeight:`700`,fill:t.text,fontFamily:`Syne`,children:e.label}),n!==void 0&&n!==`∞`&&(0,f.jsx)(`text`,{x:e.x,y:e.y-22,textAnchor:`middle`,fontSize:9,fill:p.accent,fontFamily:`JetBrains Mono`,children:n})]},e.id)}),a.length>0&&(0,f.jsxs)(`text`,{x:10,y:270,fontSize:9,fill:p.muted,fontFamily:`JetBrains Mono`,children:[`Queue: [`,a.map(e=>t[e]?.label||e).join(`,`),`]`]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,justifyContent:`center`,flexWrap:`wrap`,padding:`4px 8px`,fontSize:9,color:p.muted},children:[(0,f.jsx)(`span`,{style:{color:p.better},children:`● Processing`}),(0,f.jsx)(`span`,{style:{color:p.accent},children:`● In Queue`}),(0,f.jsx)(`span`,{style:{color:`#4a9a4a`},children:`● Visited`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`● Shortest Path`})]})]})}function Ii({step:e}){if(!e||!e.nodes)return null;let{nodes:t,head:n,pointers:r={},highlighted:i=[],visited:a=[]}=e,o=[],s=n,c=new Set;for(;s!=null&&!c.has(s)&&o.length<10;)c.add(s),o.push(s),s=t[s]?.next??null;let l=s!=null&&c.has(s),u=Math.max(400,o.length*80+60),d={};return Object.entries(r).forEach(([e,t])=>{d[t]||(d[t]=[]),d[t].push(e)}),(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 ${u} 130`,style:{width:`100%`,maxWidth:u,display:`block`,margin:`0 auto`},children:[(0,f.jsxs)(`defs`,{children:[(0,f.jsx)(`marker`,{id:`llarr`,markerWidth:`7`,markerHeight:`7`,refX:`5`,refY:`3`,orient:`auto`,children:(0,f.jsx)(`path`,{d:`M0,0 L0,6 L7,3 z`,fill:p.border})}),(0,f.jsx)(`marker`,{id:`llarrg`,markerWidth:`7`,markerHeight:`7`,refX:`5`,refY:`3`,orient:`auto`,children:(0,f.jsx)(`path`,{d:`M0,0 L0,6 L7,3 z`,fill:p.opt})})]}),o.map((e,n)=>{let r=n*80+20,s=i.includes(e),c=a.includes(e),u=p.s2,m=p.border,h=p.text;e===99?(u=`transparent`,m=`transparent`,h=p.muted):c?(u=`#0e2a1c`,m=p.opt,h=p.opt):s&&(u=`#2a1e0e`,m=p.better,h=p.better);let g=d[e]||[],_=t[e]?.next,v=o.indexOf(_);return(0,f.jsxs)(`g`,{children:[e!==99&&(0,f.jsx)(`rect`,{x:r,y:50,width:50,height:32,rx:5,fill:u,stroke:m,strokeWidth:s?2.5:1.5}),e!==99&&(0,f.jsx)(`text`,{x:r+25,y:71,textAnchor:`middle`,fontSize:13,fontWeight:`700`,fill:h,fontFamily:`JetBrains Mono`,children:t[e]?.val}),g.filter(e=>e!==`∅`).map((e,t)=>(0,f.jsx)(`text`,{x:r+25,y:42-t*13,textAnchor:`middle`,fontSize:9,fill:p.accent,fontFamily:`JetBrains Mono`,fontWeight:`600`,children:e},e)),_!=null&&v>=0&&(0,f.jsx)(`line`,{x1:r+50,y1:66,x2:r+80,y2:66,stroke:c?p.opt:p.border,strokeWidth:1.5,markerEnd:c?`url(#llarrg)`:`url(#llarr)`}),_===null&&e!==99&&(0,f.jsx)(`text`,{x:r+56,y:70,fontSize:9,fill:p.muted,fontFamily:`JetBrains Mono`,children:`∅`}),l&&n===o.length-1&&(0,f.jsx)(`path`,{d:`M${r+50},66 C${r+70},105 ${o.indexOf(_)*80+50},105 ${o.indexOf(_)*80+50},82`,stroke:p.brute,strokeWidth:1.5,fill:`none`,strokeDasharray:`4,3`,markerEnd:`url(#llarr)`})]},e)})]}),l&&(0,f.jsx)(`div`,{style:{textAlign:`center`,fontSize:10,color:p.brute,fontFamily:`JetBrains Mono`,marginTop:2},children:`⚠ Cycle detected`})]})}function Li({step:e}){if(!e)return null;if(Array.isArray(e.nums)&&e.nums.length>2&&typeof e.nums[0]==`boolean`){let{nums:t,cur:n,factor:r}=e;return(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`Sieve of Eratosthenes:`}),(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:3},children:t.map((e,t)=>{if(t<2)return null;let i=t===n,a=t===r,o=e?`#0e2a1c`:p.s2,s=e?p.opt:p.border,c=e?p.opt:p.muted;return i&&(o=`#2a0e12`,s=p.brute,c=p.brute),a&&e&&(o=`#0e1a2a`,s=p.accent,c=p.accent),(0,f.jsx)(`div`,{style:{width:28,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:o,border:`1.5px solid ${s}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:10,fontWeight:500,color:c,transition:`all 0.12s`},children:t},t)})}),(0,f.jsxs)(`div`,{style:{marginTop:6,display:`flex`,gap:10,fontSize:9,color:p.muted},children:[(0,f.jsx)(`span`,{style:{color:p.opt},children:`■ Prime`}),(0,f.jsx)(`span`,{style:{color:p.brute},children:`■ Marked composite`}),(0,f.jsx)(`span`,{style:{color:p.accent},children:`■ Current factor`})]})]})}let{a:t,b:n,cur:r,gcd:i,nums:a}=e;return(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,width:`100%`,display:`flex`,flexDirection:`column`,gap:10,alignItems:`center`},children:[a&&a.length>=2&&(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,flexWrap:`wrap`,justifyContent:`center`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`a`}),(0,f.jsx)(`div`,{style:{fontSize:22,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:700},children:a[0]})]}),(0,f.jsx)(`div`,{style:{fontSize:18,color:p.border},children:`⇄`}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`b`}),(0,f.jsx)(`div`,{style:{fontSize:22,color:p.purple,fontFamily:`JetBrains Mono`,fontWeight:700},children:a[1]})]})]}),r>=0&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`span`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`},children:`Current:`}),(0,f.jsx)(`span`,{style:{fontSize:16,color:p.better,fontFamily:`JetBrains Mono`,fontWeight:700},children:r})]}),i>0&&(0,f.jsx)(`div`,{style:{padding:`6px 18px`,background:`#0e2a1c`,border:`1.5px solid ${p.opt}`,borderRadius:8},children:(0,f.jsxs)(`span`,{style:{fontSize:12,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`GCD / Result = `,i]})})]})}function Ri({step:e}){if(!e)return null;let{stack:t=[],result:n=[],str:r,idx:i,valid:a,a:o}=e,s=r!==void 0,c=Array.isArray(o)&&n.length===o.length;if(s)return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:`4px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,flexWrap:`wrap`},children:(Array.isArray(r)?r:r.split(``)).map((e,t)=>{let n=t===i;return(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:p.s2,border:`1.5px solid ${n?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:14,fontWeight:600,color:n?p.accent:p.text,transition:`all 0.15s`},children:e},t)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,justifyContent:`center`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column-reverse`,gap:2,alignItems:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginTop:4},children:`Stack`}),t.length===0&&(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`empty`}),t.map((e,n)=>(0,f.jsx)(`div`,{style:{width:36,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n===t.length-1?`#0e1a2a`:p.s2,border:`1.5px solid ${n===t.length-1?p.accent:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:13,fontWeight:600,color:n===t.length-1?p.accent:p.text},children:e},n))]}),a!=null&&(0,f.jsx)(`div`,{style:{padding:`6px 14px`,background:a?`#0e2a1c`:`#2a0e12`,border:`2px solid ${a?p.opt:p.brute}`,borderRadius:8,fontSize:13,fontWeight:700,color:a?p.opt:p.brute,fontFamily:`JetBrains Mono`},children:a?`✓ VALID`:`✗ INVALID`})]})]});let l=c?o:t;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:`4px`,width:`100%`},children:[l.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:c?`Array:`:`Stack:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:l.map((e,t)=>{let n=c?t===i:!1;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:34,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:p.s2,border:`1.5px solid ${n?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:n?p.accent:p.text,transition:`all 0.12s`},children:e}),c&&(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})})]}),n.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:c?`NGE Result:`:`Min Stack:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:n.map((e,t)=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:34,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:e>0?`#0e2a1c`:p.s2,border:`1.5px solid ${e>0?p.opt:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:e>0?p.opt:p.muted,transition:`all 0.12s`},children:e===-1?`—`:e}),c&&(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t))})]})]})}function zi({step:e}){if(!e||!e.nodes)return null;let{nodes:t,root:n,positions:r={},highlighted:i=[],visited:a=[],path:o=[],result:s=[]}=e;if(n==null)return null;let c=Object.keys(r);if(!c.length)return null;let l=Math.max(...c.map(e=>r[e].x))+50,u=Math.max(...c.map(e=>r[e].y))+50,d=[],m=[];return Object.values(t).forEach(e=>{if(e.left!==null&&r[e.id]&&r[e.left]){let t=o.includes(e.id)&&o.includes(e.left);d.push((0,f.jsx)(`line`,{x1:r[e.id].x,y1:r[e.id].y,x2:r[e.left].x,y2:r[e.left].y,stroke:t?p.opt:p.border,strokeWidth:t?2:1.5},`el${e.id}`))}if(e.right!==null&&r[e.id]&&r[e.right]){let t=o.includes(e.id)&&o.includes(e.right);d.push((0,f.jsx)(`line`,{x1:r[e.id].x,y1:r[e.id].y,x2:r[e.right].x,y2:r[e.right].y,stroke:t?p.opt:p.border,strokeWidth:t?2:1.5},`er${e.id}`))}}),Object.values(t).forEach(e=>{if(!r[e.id])return;let{x:t,y:n}=r[e.id],s=p.s2,c=p.border,l=p.muted;a.includes(e.id)&&(s=`#0e2a1c`,c=p.opt,l=p.opt),o.includes(e.id)&&(s=`#0e1a2a`,c=p.accent,l=p.accent),i.includes(e.id)&&(s=`#2a1e0e`,c=p.better,l=p.better),m.push((0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:t,cy:n,r:16,fill:s,stroke:c,strokeWidth:i.includes(e.id)?2.5:1.5}),(0,f.jsx)(`text`,{x:t,y:n+5,textAnchor:`middle`,fontSize:11,fontWeight:`700`,fill:l,fontFamily:`JetBrains Mono`,children:e.val})]},e.id))}),(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 ${l} ${u}`,style:{width:`100%`,maxWidth:l,display:`block`,margin:`0 auto`},children:[d,m]}),s.length>0&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:10,color:p.opt,fontFamily:`JetBrains Mono`,padding:`2px 8px`},children:[`[`,s.join(` → `),`]`]})]})}function Bi({step:e}){if(!e)return null;let{board:t,queens:n=[],calls:r=0,solutions:i=0,arr:a,current:o=[],all:s=[]}=e;if(t){let e=t.length;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:`4px`},children:[(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${e},1fr)`,gap:2,maxWidth:e*38},children:Array.from({length:e*e},(t,r)=>{let i=Math.floor(r/e),a=r%e,o=n[i]===a,s=(i+a)%2==0;return(0,f.jsx)(`div`,{style:{width:36,height:36,background:o?`#0e2a1c`:s?`#1a1a2e`:`#0d0d1a`,border:`1px solid ${o?p.opt:p.border}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:16,borderRadius:2},children:o?`♛`:``},r)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[(0,f.jsxs)(`span`,{children:[`Calls: `,(0,f.jsx)(`span`,{style:{color:p.better},children:r})]}),(0,f.jsxs)(`span`,{children:[`Solutions: `,(0,f.jsx)(`span`,{style:{color:p.opt},children:i})]})]})]})}return(0,f.jsxs)(`div`,{style:{padding:`6px`,width:`100%`},children:[a&&(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,marginBottom:8},children:a.map((e,t)=>(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:o.includes&&o.includes(e)?`#0e1a2a`:p.s2,border:`1.5px solid ${o.includes&&o.includes(e)?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:12,fontWeight:600,color:p.text},children:e},t))}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:[`Current: [`,o.join(`, `),`]`]}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:[`Found (`,s.length,`): `,s.slice(-4).map(e=>`[${e}]`).join(` `)]})]})}function Vi({step:e}){if(!e)return null;let{text:t,pat:n,i:r,j:i,matches:a=[],lps:o}=e;return t?(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,width:`100%`,display:`flex`,flexDirection:`column`,gap:8},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`Text:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,flexWrap:`wrap`},children:t.split(``).map((e,t)=>{let i=a.some(e=>t>=e&&t<e+n.length),o=r>=0&&t>=r&&t<r+n.length,s=p.s2,c=p.border,l=p.muted;return i?(s=`#0e2a1c`,c=p.opt,l=p.opt):o&&(s=`#0e1a2a`,c=p.accent,l=p.accent),(0,f.jsx)(`div`,{style:{width:22,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,background:s,border:`1.5px solid ${c}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:l,transition:`all 0.12s`},children:e},t)})})]}),n&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`Pattern:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,flexWrap:`wrap`},children:n.split(``).map((e,t)=>{let n=i>=0&&t<=i;return(0,f.jsx)(`div`,{style:{width:22,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#2a1e0e`:p.s2,border:`1.5px solid ${n?p.better:p.border}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:n?p.better:p.muted},children:e},t)})})]}),o&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`LPS table:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2},children:o.map((e,t)=>(0,f.jsx)(`div`,{style:{width:22,height:22,display:`flex`,alignItems:`center`,justifyContent:`center`,background:e>0?`#0e1a2a`:p.s2,border:`1px solid ${e>0?p.accent:p.border}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:9,color:e>0?p.accent:p.muted},children:e},t))})]}),a.length>0&&(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.opt,fontFamily:`JetBrains Mono`},children:[`Matches at: [`,a.join(`, `),`]`]})]}):null}function Hi({step:e}){if(!e||!e.a)return null;let{a:t,wStart:n,wEnd:r,maxStart:i,maxEnd:a,curSum:o,maxSum:s}=e;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:`4px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,flexWrap:`wrap`},children:t.map((e,t)=>{let o=t>=i&&t<=a&&a>=i,s=n>=0&&t>=n&&t<=r,c=p.s2,l=p.border,u=p.text;return o&&!s&&(c=`#0e2a1c`,l=p.opt,u=p.opt),s&&(c=`#0e1a2a`,l=p.accent,u=p.accent),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:c,border:`1.5px solid ${l}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:u,transition:`all 0.15s`},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:14,justifyContent:`center`,flexWrap:`wrap`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Current`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:700},children:o??`—`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Max`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:s??`—`})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,justifyContent:`center`,fontSize:9,color:p.muted},children:[(0,f.jsx)(`span`,{style:{color:p.accent},children:`■ Current window`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`■ Best window`})]})]})}function Ui({step:e}){if(!e)return null;let{acts:t,selected:n=[],current:r=-1,items:i,taken:a=[],capacity:o,curW:s,curV:c}=e;if(i)return(0,f.jsxs)(`div`,{style:{padding:`8px`,width:`100%`},children:[(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:8},children:[`Capacity: `,o,` | Current weight: `,s,` | Value: `,typeof c==`number`?c.toFixed(1):0]}),i.map((e,t)=>{let n=a.find(t=>t.i===e.i),i=n?n.frac*100:0;return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4,opacity:n||t===r?1:.5},children:[(0,f.jsxs)(`div`,{style:{width:60,fontSize:10,fontFamily:`JetBrains Mono`,color:p.muted},children:[`w=`,e.w,` v=`,e.v]}),(0,f.jsxs)(`div`,{style:{width:50,fontSize:9,fontFamily:`JetBrains Mono`,color:p.accent},children:[`r=`,e.ratio.toFixed(1)]}),(0,f.jsx)(`div`,{style:{flex:1,height:16,background:p.s2,borderRadius:3,overflow:`hidden`},children:(0,f.jsx)(`div`,{style:{height:`100%`,width:`${i}%`,background:i===100?p.opt:p.better,transition:`width 0.2s`,borderRadius:3}})}),(0,f.jsx)(`div`,{style:{width:35,fontSize:9,fontFamily:`JetBrains Mono`,color:n?p.opt:p.muted},children:i>0?`${i.toFixed(0)}%`:``})]},t)})]});if(!t)return null;let l=Math.max(...t.map(e=>e.e||e.end||0),14);return(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`Timeline (activities sorted by end time):`}),t.map((e,t)=>{let i=n.includes(t),a=t===r,o=e.s??e.start??0,s=e.e??e.end??0;return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,marginBottom:3},children:[(0,f.jsx)(`div`,{style:{width:24,fontSize:9,fontFamily:`JetBrains Mono`,color:i?p.opt:p.muted,textAlign:`right`},children:t}),(0,f.jsx)(`div`,{style:{flex:1,position:`relative`,height:20},children:(0,f.jsxs)(`div`,{style:{position:`absolute`,left:`${o/l*100}%`,width:`${(s-o)/l*100}%`,height:`100%`,background:i?`#0e2a1c`:a?`#0e1a2a`:p.s2,border:`1.5px solid ${i?p.opt:a?p.accent:p.border}`,borderRadius:3,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:8,fontFamily:`JetBrains Mono`,color:i?p.opt:a?p.accent:p.muted,whiteSpace:`nowrap`,overflow:`hidden`},children:[o,`-`,s]})}),i&&(0,f.jsx)(`span`,{style:{fontSize:9,color:p.opt},children:`✓`})]},t)}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.opt,fontFamily:`JetBrains Mono`,marginTop:4},children:[`Selected: `,n.length,` activities`]})]})}function Wi({step:e}){if(!e)return null;let{bits:t,num:n,count:r,dpArr:i,active:a}=e;if(i){let e=Math.min(i.length,17);return(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`dp[i] = popcount(i):`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:i.slice(0,e).map((e,t)=>{let n=t===a;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:30,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:e>0?`#0e2a1c`:p.s2,border:`1.5px solid ${n?p.accent:e>0?p.opt:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:n?p.accent:e>0?p.opt:p.muted},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})})]})}return t?(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,width:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:10},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`,justifyContent:`center`},children:t.split(``).map((e,t)=>(0,f.jsx)(`div`,{style:{width:28,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:e===`1`?`#0e2a1c`:p.s2,border:`1.5px solid ${e===`1`?p.opt:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:13,fontWeight:700,color:e===`1`?p.opt:p.muted},children:e},t))}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,fontSize:12,fontFamily:`JetBrains Mono`},children:[(0,f.jsxs)(`span`,{style:{color:p.muted},children:[`decimal: `,(0,f.jsx)(`span`,{style:{color:p.accent},children:n})]}),(0,f.jsxs)(`span`,{style:{color:p.muted},children:[`set bits: `,(0,f.jsx)(`span`,{style:{color:p.opt,fontWeight:700},children:r})]})]})]}):null}function Gi({step:e}){if(!e)return null;if(!e.table){let{s1:t,s2:n,i:r,j:i,result:a,items:o,cap:s,msg:c}=e;return(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,width:`100%`,display:`flex`,flexDirection:`column`,gap:10},children:[t&&n&&(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:[`s1: "`,t,`"`]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,flexWrap:`wrap`},children:t.split(``).map((e,t)=>{let n=r>0&&t===r-1;return(0,f.jsx)(`div`,{style:{width:24,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#2a1e0e`:p.s2,border:`1.5px solid ${n?p.better:p.border}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:600,color:n?p.better:p.text},children:e},t)})})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:[`s2: "`,n,`"`]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,flexWrap:`wrap`},children:n.split(``).map((e,t)=>{let n=i>0&&t===i-1;return(0,f.jsx)(`div`,{style:{width:24,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:p.s2,border:`1.5px solid ${n?p.accent:p.border}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:600,color:n?p.accent:p.text},children:e},t)})})]})]}),o&&(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:[`Items (w=weight, v=value) · Capacity=`,s]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`},children:o.map((e,t)=>{let n=t===r-1;return(0,f.jsxs)(`div`,{style:{padding:`4px 10px`,background:n?`#0e1a2a`:p.s2,border:`1.5px solid ${n?p.accent:p.border}`,borderRadius:6,fontFamily:`JetBrains Mono`,fontSize:10,color:n?p.accent:p.muted},children:[`w:`,e.w,` v:`,e.v]},t)})}),i>=0&&(0,f.jsxs)(`div`,{style:{marginTop:6,fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[`Current capacity: `,(0,f.jsx)(`span`,{style:{color:p.accent},children:i})]})]}),r>=0&&i>=0&&!o&&(0,f.jsxs)(`div`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`},children:[`Comparing index `,(0,f.jsxs)(`span`,{style:{color:p.better},children:[`i=`,r]}),` × `,(0,f.jsxs)(`span`,{style:{color:p.accent},children:[`j=`,i]})]}),a!=null&&(0,f.jsxs)(`div`,{style:{fontSize:14,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`Result: `,a]}),(0,f.jsx)(`div`,{style:{fontSize:9,color:p.border,fontFamily:`JetBrains Mono`,fontStyle:`italic`},children:`2D table fills in with Memoization or Tabulation approaches →`})]})}let{s1:t,s2:n,table:r,i,j:a,result:o,items:s,cap:c}=e;r.length;let l=r[0]?.length||0,u=e=>e===0?`∅`:s?`i${e}(w${s[e-1].w}v${s[e-1].v})`:(t||``)[e-1]||e,d=e=>e===0?`∅`:s?e:(n||``)[e-1]||e,m=s?36:28;return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`,padding:`4px 8px`},children:[(0,f.jsxs)(`div`,{style:{display:`inline-block`,minWidth:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,marginBottom:2,paddingLeft:m+6},children:Array.from({length:l},(e,t)=>(0,f.jsx)(`div`,{style:{width:m,height:18,fontSize:9,color:t===a?p.better:p.muted,fontFamily:`JetBrains Mono`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:t===a?700:400},children:d(t)},t))}),r.map((e,t)=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:2,marginBottom:2},children:[(0,f.jsx)(`div`,{style:{width:m,height:m,fontSize:8,color:t===i?p.better:p.muted,fontFamily:`JetBrains Mono`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:t===i?700:400,flexShrink:0,overflow:`hidden`},children:u(t)}),e.map((e,n)=>{let r=t===i&&n===a,o=t===i-1&&n===a-1,s=t===i&&n===a-1||t===i-1&&n===a,c=e===null,l=c?p.s1:e>0?`#0e1a2a`:p.s2,u=c?p.s1:r?p.better:e>0?p.accent:p.border,d=c?p.border:r?p.better:e>0?p.accent:p.muted;return o&&!r&&(l=`#0e2a1c`,u=p.opt,d=p.opt),s&&!r&&!o&&(l=`#0e1220`,u=`#2a2a5a`,d=p.muted),(0,f.jsx)(`div`,{style:{width:m,height:m,display:`flex`,alignItems:`center`,justifyContent:`center`,background:l,border:`1.5px solid ${u}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:r?12:10,fontWeight:r||e>0?600:400,color:d,transition:`all 0.1s`,flexShrink:0},children:c?`·`:e},n)})]},t))]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:4,fontSize:9,color:p.muted,overflow:`hidden`},children:[(0,f.jsx)(`span`,{style:{color:p.better},children:`■ Current`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`■ Diagonal (match)`}),(0,f.jsx)(`span`,{style:{color:p.accent},children:`■ Non-zero value`})]}),o!=null&&(0,f.jsxs)(`div`,{style:{marginTop:6,fontSize:14,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`Result: `,o]})]})}function Ki({step:e}){if(!e||!e.a)return null;let{a:t,dp:n=[],cur:r=-1,prev:i=-1,result:a}=e;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:`4px`,width:`100%`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`Array:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:t.map((e,t)=>{let n=p.s2,a=p.border,o=p.text;return t===r&&(n=`#2a1e0e`,a=p.better,o=p.better),t===i&&(n=`#0e1220`,a=p.accent,o=p.accent),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n,border:`1.5px solid ${a}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:o,transition:`all 0.12s`},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})})]}),n.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:n.some(e=>e>1)?`dp[i] = LIS length ending at i:`:`Patience tails:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:n.map((e,t)=>(0,f.jsx)(`div`,{style:{width:32,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:e>1?`#0e2a1c`:p.s2,border:`1.5px solid ${e>1?p.opt:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:e>1?p.opt:p.muted},children:e},t))})]}),a!=null&&(0,f.jsxs)(`div`,{style:{fontSize:14,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`LIS length: `,a]})]})}function qi({step:e}){if(!e||!e.nodes)return null;let{nodes:t,root:n,positions:r={},highlighted:i=[],path:a=[],found:o}=e;if(!Object.keys(r).length)return null;let s=Object.values(r),c=Math.max(...s.map(e=>e.x))+40,l=Math.max(...s.map(e=>e.y))+40,u=[],d=[];return Object.values(t).forEach(e=>{Object.values(e.children).forEach(t=>{if(!r[e.id]||!r[t])return;let n=a.includes(e.id)&&a.includes(t);u.push((0,f.jsx)(`line`,{x1:r[e.id].x,y1:r[e.id].y,x2:r[t].x,y2:r[t].y,stroke:n?p.opt:p.border,strokeWidth:n?2:1.5},`e${e.id}-${t}`))})}),Object.values(t).forEach(e=>{if(!r[e.id])return;let{x:t,y:n}=r[e.id],s=i.includes(e.id),c=a.includes(e.id),l=o===e.id,u=p.s2,m=p.border,h=p.muted;l?(u=`#0e2a1c`,m=p.opt,h=p.opt):s?(u=`#2a1e0e`,m=p.better,h=p.better):c?(u=`#0e1a2a`,m=p.accent,h=p.accent):e.isEnd&&(u=`#0e1a2a`,m=p.purple,h=p.purple),d.push((0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:t,cy:n,r:e.id===0?14:12,fill:u,stroke:m,strokeWidth:s?2.5:1.5}),(0,f.jsx)(`text`,{x:t,y:n+4,textAnchor:`middle`,fontSize:e.id===0?9:11,fontWeight:`700`,fill:h,fontFamily:`JetBrains Mono`,children:e.id===0?`root`:e.char}),e.isEnd&&(0,f.jsx)(`circle`,{cx:t,cy:n,r:9,fill:`none`,stroke:l?p.opt:p.purple,strokeWidth:1,strokeDasharray:`2,2`})]},e.id))}),(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 ${c} ${l}`,style:{width:`100%`,maxWidth:c,display:`block`,margin:`0 auto`},children:[u,d]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,justifyContent:`center`,fontSize:9,color:p.muted,padding:`2px 8px`,flexWrap:`wrap`},children:[(0,f.jsx)(`span`,{style:{color:p.accent},children:`● Search path`}),(0,f.jsx)(`span`,{style:{color:p.purple},children:`● End of word`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`● Found`})]})]})}function Ji({step:e}){if(!e)return null;let{nodes:t,edges:n,visited:r=[],current:i,path:a=[],mstEdges:o=[],distMatrix:s,k:c,i:l,j:u}=e;if(s){s.length;let e=t.map(e=>e.label);return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`,padding:`4px 8px`},children:[(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:[`Distance matrix `,c>=0?`(k=${t[c].label})`:``,`:`]}),(0,f.jsxs)(`div`,{style:{display:`inline-block`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,marginBottom:2,paddingLeft:26},children:e.map((e,t)=>(0,f.jsx)(`div`,{style:{width:28,height:16,fontSize:9,color:t===u?p.better:p.muted,fontFamily:`JetBrains Mono`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:t===u?700:400},children:e},t))}),s.map((t,n)=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:2,marginBottom:2},children:[(0,f.jsx)(`div`,{style:{width:22,height:26,fontSize:9,color:n===l?p.better:p.muted,fontFamily:`JetBrains Mono`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:n===l?700:400},children:e[n]}),t.map((e,t)=>{let r=n===l&&t===u,i=n===c||t===c,a=e===`∞`?p.s2:e>0?`#0e1a2a`:p.s2,o=r?p.better:i?p.accent:p.border,s=e===`∞`?p.muted:r?p.better:i?p.accent:p.text;return(0,f.jsx)(`div`,{style:{width:28,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,background:a,border:`1.5px solid ${o}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:9,fontWeight:r?700:400,color:s,transition:`all 0.1s`},children:e},t)})]},n))]})]})}let d=new Set(o.map(e=>`${Math.min(e.f,e.t)}-${Math.max(e.f,e.t)}`));return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 520 280`,style:{width:`100%`,maxWidth:520,display:`block`,margin:`0 auto`},children:[n.map((e,n)=>{let a=t[e.f],o=t[e.t],s=`${Math.min(e.f,e.t)}-${Math.max(e.f,e.t)}`,c=d.has(s),l=r.includes(e.f)&&(i===e.f||i===e.t),u=(a.x+o.x)/2,m=(a.y+o.y)/2;return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`line`,{x1:a.x,y1:a.y,x2:o.x,y2:o.y,stroke:c?p.opt:l?p.better:p.border,strokeWidth:c?3:1.5,strokeDasharray:`none`}),(0,f.jsx)(`rect`,{x:u-9,y:m-8,width:18,height:15,rx:3,fill:p.s1}),(0,f.jsx)(`text`,{x:u,y:m+4,textAnchor:`middle`,fontSize:9,fill:c?p.opt:p.muted,fontFamily:`JetBrains Mono`,fontWeight:c?700:400,children:e.w})]},n)}),t.map(e=>{let t=o.some(t=>t.f===e.id||t.t===e.id),n=e.id===i,r=p.s2,a=p.border,s=p.muted;return t&&(r=`#0e2a1c`,a=p.opt,s=p.opt),n&&(r=`#2a1e0e`,a=p.better,s=p.better),(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:e.x,cy:e.y,r:18,fill:r,stroke:a,strokeWidth:n?2.5:1.5}),(0,f.jsx)(`text`,{x:e.x,y:e.y+5,textAnchor:`middle`,fontSize:13,fontWeight:`700`,fill:s,fontFamily:`Syne`,children:e.label})]},e.id)})]}),o.length>0&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:10,color:p.opt,fontFamily:`JetBrains Mono`,padding:`2px 8px`},children:[`MST edges: `,o.map(e=>`${t[e.f].label}-${t[e.t].label}(${e.w})`).join(`, `),` = `,o.reduce((e,t)=>e+t.w,0)]})]})}function Yi({step:e}){if(!e||!e.parent)return null;let{parent:t,rank:n,highlighted:r=[],components:i={}}=e,a=t.length,o=[`#5b8df5`,`#e89a2a`,`#29cc7a`,`#e05a6f`,`#9b72e8`,`#29cccc`,`#cc7a29`,`#7acc29`],s=Object.keys(i).map(Number),c={};s.forEach((e,t)=>c[e]=o[t%o.length]);let l=e=>{let n=e;for(;t[n]!==n;)n=t[n];return c[n]||p.muted},u=320/(a+1);return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 320 120`,style:{width:`100%`,maxWidth:320,display:`block`,margin:`0 auto`},children:[t.map((e,t)=>{if(e!==t){let n=u*(t+1),r=u*(e+1);return(0,f.jsx)(`path`,{d:`M${n},50 Q${(n+r)/2},${50-(Math.abs(r-n)*.3+15)} ${r},50`,stroke:l(t),strokeWidth:1.5,fill:`none`,markerEnd:`url(#ufarr)`},`e${t}`)}return null}),(0,f.jsx)(`defs`,{children:(0,f.jsx)(`marker`,{id:`ufarr`,markerWidth:`6`,markerHeight:`6`,refX:`5`,refY:`3`,orient:`auto`,children:(0,f.jsx)(`path`,{d:`M0,0 L0,6 L6,3 z`,fill:p.border})})}),Array.from({length:a},(e,i)=>{let a=u*(i+1),o=r.includes(i),s=t[i]===i,c=l(i);return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:a,cy:50,r:s?18:14,fill:`${c}22`,stroke:c,strokeWidth:o?3:s?2:1.5}),(0,f.jsx)(`text`,{x:a,y:55,textAnchor:`middle`,fontSize:12,fontWeight:`700`,fill:c,fontFamily:`JetBrains Mono`,children:i}),s&&(0,f.jsx)(`text`,{x:a,y:82,textAnchor:`middle`,fontSize:8,fill:c,fontFamily:`JetBrains Mono`,children:`root`}),n[i]>0&&(0,f.jsxs)(`text`,{x:a,y:28,textAnchor:`middle`,fontSize:8,fill:p.muted,fontFamily:`JetBrains Mono`,children:[`r=`,n[i]]})]},i)})]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:6,justifyContent:`center`,flexWrap:`wrap`,padding:`4px 8px`,fontSize:9,fontFamily:`JetBrains Mono`},children:Object.entries(i).map(([e,t])=>(0,f.jsx)(`span`,{style:{padding:`2px 6px`,background:`${l(+e)}22`,border:`1px solid ${l(+e)}`,borderRadius:4,color:l(+e)},children:`{${t.join(`,`)}}`},e))})]})}function Xi({step:e}){if(!e||!e.arr)return null;let{arr:t,tree:n=[],node:r,ql:i,qr:a,result:o,building:s}=e,c=t.length,l=(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,marginBottom:8},children:t.map((e,t)=>{let n=i>=0&&t>=i&&t<=a;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:p.s2,border:`1.5px solid ${n?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:n?p.accent:p.text},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),u=Math.ceil(Math.log2(c))+1,d=[];function m(e,t,i,a){if(t>u||e>=n.length||i>a)return;let o=e===r,s=n[e];if(s===0&&!o&&t>1)return;let c=Math.floor(Math.log2(e)),l=e-(1<<c),h=1<<c,g=(l+.5)*(300/h),_=c*40+10;if(d.push((0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:g,cy:_,r:o?16:13,fill:o?`#2a1e0e`:s>0?`#0e1a2a`:p.s2,stroke:o?p.better:s>0?p.accent:p.border,strokeWidth:o?2.5:1.5}),(0,f.jsx)(`text`,{x:g,y:_+4,textAnchor:`middle`,fontSize:o?11:9,fontWeight:o?`700`:`500`,fill:o?p.better:s>0?p.accent:p.muted,fontFamily:`JetBrains Mono`,children:s||``})]},e)),i<a){let r=i+a>>1;if(2*e<n.length){let t=c+1,n=2*e-(1<<t),r=1<<t,i=(n+.5)*(300/r);d.push((0,f.jsx)(`line`,{x1:g,y1:_+13,x2:i,y2:_+40-13,stroke:p.border,strokeWidth:1},`el${e}`))}if(2*e+1<n.length){let t=c+1,n=2*e+1-(1<<t),r=1<<t,i=(n+.5)*(300/r);d.push((0,f.jsx)(`line`,{x1:g,y1:_+13,x2:i,y2:_+40-13,stroke:p.border,strokeWidth:1},`er${e}`))}m(2*e,t+1,i,r),m(2*e+1,t+1,r+1,a)}}return n.some(e=>e>0)&&m(1,1,0,c-1),(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`Array:`}),l,n.some(e=>e>0)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:s?`Building tree:`:`Segment tree (querying):`}),(0,f.jsx)(`svg`,{viewBox:`0 0 300 180`,style:{width:`100%`,maxWidth:300,display:`block`,margin:`0 auto`},children:d})]}),o!=null&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700,marginTop:4},children:[`Result: `,o]})]})}var Zi={"O(1)":0,"O(log log n)":1,"O(α(n))":1,"O(log n)":2,"O(√n)":3,"O(n)":4,"O(n log n)":5,"O(n²)":6,"O(n³)":7,"O(2ⁿ)":8,"O(n!)":9};function Qi(e){return e?Object.entries(Zi).reduce((t,[n,r])=>e.includes(n.replace(`O(`,``).replace(`)`,``).split(` `)[0])&&r<t.rank?{rank:r,key:n}:t,{rank:10,key:``}).rank:5}function $i({cat:e,onClose:t}){return e?(0,f.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,zIndex:500,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16},onClick:t,children:(0,f.jsxs)(`div`,{style:{background:p.s1,border:`1px solid ${p.border}`,borderRadius:12,padding:20,maxWidth:560,width:`100%`,maxHeight:`80vh`,overflowY:`auto`},onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:16},children:[(0,f.jsxs)(`div`,{style:{fontFamily:`Syne`,fontWeight:800,fontSize:16},children:[e.emoji,` `,e.label,` — Complexity Comparison`]}),(0,f.jsx)(`button`,{onClick:t,style:{background:`none`,border:`none`,color:p.muted,cursor:`pointer`,fontSize:18},children:`✕`})]}),e.algorithms.map(e=>(0,f.jsxs)(`div`,{style:{marginBottom:16},children:[(0,f.jsx)(`div`,{style:{fontFamily:`Syne`,fontWeight:700,fontSize:12,color:p.text,marginBottom:6},children:e.label}),e.approaches.map(e=>{let t=Qi(e.time),n=Math.min(100,Math.max(8,t/9*100)),r=m[e.tier]?.color||p.muted;return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4},children:[(0,f.jsx)(`div`,{style:{width:90,fontSize:10,color:r,fontFamily:`Syne`,fontWeight:600,flexShrink:0},children:e.name}),(0,f.jsx)(`div`,{style:{flex:1,height:20,background:p.s2,borderRadius:3,overflow:`hidden`},children:(0,f.jsx)(`div`,{style:{height:`100%`,width:`${n}%`,background:r,borderRadius:3,opacity:.7,transition:`width 0.4s`}})}),(0,f.jsx)(`div`,{style:{width:100,fontSize:10,color:r,fontFamily:`JetBrains Mono`,flexShrink:0},children:e.time})]},e.id)})]},e.id)),(0,f.jsx)(`div`,{style:{marginTop:12,fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,textAlign:`right`},children:`Bar length = relative complexity. Click outside to close.`})]})}):null}function ea(e,t){if(!e||!t)return null;let n=(t.msg||``).toLowerCase(),r=e.vizType||``,i=(e.label||``).toLowerCase();return n.includes(`compare`)&&r===`bars`?`Comparing these two elements determines their relative order. Every comparison-based sort needs Ω(n log n) comparisons in the worst case — that's a mathematical lower bound you cannot beat.`:n.includes(`swap`)?`Swapping moves each element closer to its final position. Counting swaps is a great way to measure an algorithm's efficiency — fewer swaps generally means faster runtime.`:n.includes(`pivot`)?`The pivot is placed in its exact final sorted position after partitioning. No matter what happens to the rest of the array, this element will never move again.`:n.includes(`partition`)?`Partitioning separates elements smaller than the pivot (left) from larger (right). After this single O(n) pass, the pivot is permanently sorted — that's why QuickSort works.`:n.includes(`heapify`)||n.includes(`siftdown`)?`Heapify restores the heap property: every parent must be larger than its children. Starting from the bottom and working up takes O(n) total — much better than inserting one by one at O(n log n).`:n.includes(`merge`)&&r===`bars`?`Merging two sorted halves into one sorted array takes O(n) — always compare the front elements and take the smaller. This is why Merge Sort's O(n log n) is guaranteed, even in the worst case.`:n.includes(`gap`)&&n.includes(`shell`)?`Shell Sort uses a large gap to move elements far distances cheaply. Reducing the gap each pass means final passes are almost sorted — insertion sort is O(n) on nearly-sorted data.`:n.includes(`mid`)?`Binary search eliminates half the search space with every comparison. After k comparisons, only n/2^k elements remain — that's why it's O(log n) and not O(n).`:n.includes(`sentinel`)?`The sentinel is a guaranteed match at the end, so the inner loop never needs to check bounds. Removing the bounds check saves one operation per iteration — measurable on large datasets.`:n.includes(`hash`)?`A hash map stores (value→index) pairs for O(1) lookup. Instead of scanning for the complement, we just ask: 'have I seen target-current before?' One pass is all we need.`:n.includes(`cache hit`)?`This subproblem was already solved and stored. Retrieving a cached result is O(1) regardless of how hard it was to compute. This transforms exponential recursion into polynomial time.`:n.includes(`dp[`)?`This cell stores the optimal answer for a subproblem. Building bottom-up means every value we need is already computed. This is the essence of dynamic programming: optimal substructure.`:n.includes(`match!`)&&i.includes(`lcs`)?`When characters match, the LCS gets 1 longer — we extend the diagonal value. The diagonal represents 'LCS without either of these characters', so matching one of each adds exactly 1.`:n.includes(`kadane`)?`Kadane's key insight: at each position, the best subarray either extends the previous one (if positive) or starts fresh. We never need to look back — one pass captures every possibility.`:n.includes(`enqueue`)||n.includes(`queue`)?`BFS processes nodes level by level using a queue (FIFO). Nodes added earlier are processed first, guaranteeing the shortest path (in hops) is found before longer ones.`:n.includes(`visit`)&&(n.includes(`dfs`)||r===`graph`)?`DFS commits to exploring one path as deep as possible before backtracking. The call stack implicitly tracks the path — each recursive call goes one level deeper.`:n.includes(`relax`)?`Edge relaxation checks: can we reach this neighbor cheaper via the current node? If yes, update. Dijkstra relaxes every edge once — that's why it's O(E log V) with a priority queue.`:n.includes(`settle`)||n.includes(`min dist`)?`Settling a node means its distance is now permanent — no future path can improve it. This is Dijkstra's greedy insight: always process the closest unsettled node first.`:n.includes(`inorder`)?`Inorder traversal (Left→Root→Right) visits a BST's nodes in sorted ascending order. This is the defining property of BSTs — and why in-order traversal is so useful for sorting-related operations.`:n.includes(`bst propert`)?`The BST property states every left subtree value < root < every right subtree value. This invariant enables O(log n) search, insert, and delete on balanced trees.`:n.includes(`backtrack`)?`Backtracking is a controlled undo. When a path leads to a dead end, we undo the last choice and try the next option. This exhaustive-but-smart search guarantees finding all valid solutions.`:n.includes(`safe`)?`A 'safe' position means no two queens threaten each other — no shared row, column, or diagonal. We only recurse into positions that might lead to a solution.`:n.includes(`lps`)?`The LPS (Longest Proper Prefix that is also Suffix) table tells KMP how far to jump back after a mismatch, without re-reading text characters. Building it is the O(m) preprocessing step that makes the whole algorithm O(n+m).`:n.includes(`roll`)&&n.includes(`hash`)?`Rolling hash removes the leftmost character's contribution and adds the new rightmost character in O(1). This is what makes Rabin-Karp O(n) average — we never recompute the entire hash.`:n.includes(`path compress`)?`Path compression makes every node on the find path point directly to the root. Future finds on these nodes become O(1). Combined with union by rank, this gives the near-constant O(α(n)) amortized time.`:n.includes(`union`)?`Union by rank always attaches the shorter tree under the taller one. This prevents the tree from becoming a chain (which would make find O(n)), keeping tree height at O(log n).`:n.includes(`lazy`)?`Lazy propagation defers updates: instead of propagating changes immediately to all children, we mark the parent and push the update down only when a child is actually accessed. This saves enormous work on range updates.`:n.includes(`fully covered`)?`When a query range fully covers a tree node's range, we return that node's value immediately — no need to go deeper. This early exit is the key to O(log n) queries.`:n.includes(`base case`)?`A base case stops recursion by providing an immediate answer for the simplest input. Without base cases, recursion runs forever. Every recursive algorithm must reach a base case eventually.`:n.includes(`o(n)`)?`O(n) means the work grows linearly with input size. Double the input → double the work. This is generally considered efficient, and often the best possible for problems that require reading every element.`:n.includes(`sorted`)?`Once an element is in its final sorted position, it never needs to move again. Recognizing 'permanently placed' elements early lets some algorithms skip unnecessary work.`:n.includes(`✓`)&&n.includes(`done`)?`Algorithm complete! Notice how the final answer emerged step-by-step from simple operations. This is the power of algorithms: breaking complex problems into mechanical, repeatable steps.`:null}function ta({algo:e,inputArr:t,target:n,fibN:r,tierColor:i}){let[a,o]=(0,l.useState)(0),[s,c]=(0,l.useState)(0),[u,d]=(0,l.useState)(!1),[h,g]=(0,l.useState)({a:-1,b:-1}),_=(0,l.useRef)(null),v=(0,l.useRef)(null),y=e?.approaches?.[0],b=e?.approaches?.[2]||e?.approaches?.[1],x=(0,l.useMemo)(()=>{if(!y)return[];try{return e.vizType===`bars`?y.genSteps(t):[`graph`,`ll`,`backtrack`,`string`,`greedy`,`stackviz`,`math`,`bits`,`dp2d`,`trie`,`mst`,`tree`,`uf`,`seg`].includes(e.vizType)?y.genSteps():e.vizType===`fib`||e.id===`fibonacci`?y.genSteps(Math.min(r,10)):e.vizType===`slide`||e.vizType===`lis`?y.genSteps(t):y.genSteps(t,n)}catch{return[]}},[y,t,n,r]),S=(0,l.useMemo)(()=>{if(!b)return[];try{return e.vizType===`bars`?b.genSteps(t):[`graph`,`ll`,`backtrack`,`string`,`greedy`,`stackviz`,`math`,`bits`,`dp2d`,`trie`,`mst`,`tree`,`uf`,`seg`].includes(e.vizType)?b.genSteps():e.vizType===`fib`||e.id===`fibonacci`?b.genSteps(Math.min(r,15)):e.vizType===`slide`||e.vizType===`lis`?b.genSteps(t):b.genSteps(t,n)}catch{return[]}},[b,t,n,r]),C=()=>{o(0),c(0),g({a:-1,b:-1}),d(!0)},w=()=>{clearInterval(_.current),clearInterval(v.current),o(0),c(0),d(!1),g({a:-1,b:-1})};if((0,l.useEffect)(()=>{if(!u)return;let e={a:-1,b:-1};return _.current=setInterval(()=>o(t=>t>=x.length-1?(clearInterval(_.current),e={...e,a:t},g(e=>({...e,a:t})),t):t+1),120),v.current=setInterval(()=>c(t=>t>=S.length-1?(clearInterval(v.current),e={...e,b:t},g(e=>({...e,b:t})),t):t+1),120),()=>{clearInterval(_.current),clearInterval(v.current)}},[u,x.length,S.length]),!y||!b)return(0,f.jsx)(`div`,{style:{color:p.muted,padding:16,fontFamily:`JetBrains Mono`,fontSize:11},children:`Need at least 2 approaches to race.`});let T=x[Math.min(a,x.length-1)],ee=S[Math.min(s,S.length-1)],te=x.length>1?Math.round(a/(x.length-1)*100):100,ne=S.length>1?Math.round(s/(S.length-1)*100):100,re=h.a>=0,ie=h.b>=0,ae=re&&ie?x.length<S.length?0:S.length<x.length?1:`tie`:re?0:ie?1:-1;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:8,height:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:8,flex:1,minHeight:0},children:[{ap:y,s:T,idx:a,steps:x,p:te,fin:re,side:0},{ap:b,s:ee,idx:s,steps:S,p:ne,fin:ie,side:1}].map(({ap:t,s:n,idx:r,steps:i,p:a,fin:o,side:s})=>{let c=m[t.tier]?.color||p.muted,l=ae===s;return(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,border:`2px solid ${l?p.opt:o?p.muted:c}`,borderRadius:8,overflow:`hidden`,background:l?`#0e2a1c`:p.s2,transition:`border-color 0.3s`},children:[(0,f.jsxs)(`div`,{style:{padding:`5px 8px`,background:l?`#0e2a1c`:p.s1,borderBottom:`1px solid ${c}22`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,f.jsxs)(`span`,{style:{fontSize:10,fontWeight:700,color:c,fontFamily:`Syne`},children:[l?`🏆 `:``,t.name]}),(0,f.jsxs)(`span`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:[r+1,`/`,i.length,` steps`]})]}),(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:8,overflow:`auto`,minHeight:0},children:[e.vizType===`bars`&&n?.a&&(0,f.jsx)(ji,{step:n}),e.vizType===`array`&&n&&(0,f.jsx)(Mi,{step:n,catId:e.id}),e.vizType===`fib`&&n&&(0,f.jsx)(B,{step:n}),e.vizType===`tree`&&n?.nodes&&(0,f.jsx)(zi,{step:n}),e.vizType===`graph`&&n&&(0,f.jsx)(Fi,{step:n}),![`bars`,`array`,`fib`,`tree`,`graph`].includes(e.vizType)&&(0,f.jsx)(`div`,{style:{color:p.muted,fontSize:10,fontFamily:`JetBrains Mono`,textAlign:`center`},children:n?.msg})]}),(0,f.jsxs)(`div`,{style:{padding:`3px 6px`,background:p.s1,borderTop:`1px solid ${p.border}`},children:[(0,f.jsx)(`div`,{style:{height:4,background:p.border,borderRadius:2},children:(0,f.jsx)(`div`,{style:{height:`100%`,width:`${a}%`,background:c,borderRadius:2,transition:`width 0.1s`}})}),(0,f.jsx)(`div`,{style:{fontSize:8,color:p.muted,fontFamily:`JetBrains Mono`,marginTop:2,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:n?.msg})]})]},s)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`,flexShrink:0},children:[(0,f.jsx)(`button`,{onClick:u?w:C,style:{padding:`5px 14px`,background:u?p.s2:`${p.better}22`,border:`1px solid ${u?p.border:p.better}`,color:u?p.muted:p.better,borderRadius:5,cursor:`pointer`,fontSize:12,fontFamily:`JetBrains Mono`,fontWeight:700,touchAction:`manipulation`},children:u?`Reset`:`⚡ Start Race`}),ae===`tie`&&(0,f.jsx)(`span`,{style:{color:p.better,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:700},children:`🤝 Tie!`}),ae===0&&re&&ie&&(0,f.jsxs)(`span`,{style:{color:p.opt,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:700},children:[`🏆 `,y.name,` wins (`,x.length,` vs `,S.length,` steps)!`]}),ae===1&&re&&ie&&(0,f.jsxs)(`span`,{style:{color:p.opt,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:700},children:[`🏆 `,b.name,` wins (`,S.length,` vs `,x.length,` steps)!`]})]})]})}function na(){let e=new Date().toDateString(),t=0;for(let n of e)t=t*31+n.charCodeAt(0)&4294967295;let n=[];return Ai.forEach(e=>e.algorithms.forEach(t=>t.approaches.forEach(r=>{n.push({cat:e,algo:t,ap:r})}))),n[Math.abs(t)%n.length]}function ra({onClose:e}){let t=(0,l.useMemo)(na,[]),[n,r]=(0,l.useState)(0),[i,a]=(0,l.useState)(0),[o,s]=(0,l.useState)(-1),[c,u]=(0,l.useState)(!1),d=(0,l.useMemo)(()=>{try{let{algo:e,ap:n}=t;return e.vizType===`bars`?n.genSteps([5,3,8,1,9,2,7,4]):[`graph`,`ll`,`backtrack`,`string`,`greedy`,`stackviz`,`math`,`bits`,`dp2d`,`trie`,`mst`,`tree`,`uf`,`seg`].includes(e.vizType)?n.genSteps():e.vizType===`fib`?n.genSteps(6):n.genSteps([5,3,8,1,9,2,7],10)}catch{return[{msg:`Loading...`,ln:0}]}},[t]),h=(0,l.useMemo)(()=>{let e=[],t=[...d];for(let n=0;n<Math.min(5,t.length-1);n++){let r=Math.floor(n*(t.length/5)),i=t[Math.min(r+1,t.length-1)]?.msg||`Done`,a=[i,...t.filter((e,t)=>t!==r+1).map(e=>e?.msg).filter(Boolean).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);e.push({step:t[r],correct:i,opts:a,correctIdx:a.indexOf(i)})}return e},[d]),g=new Date().toDateString(),_=parseInt(localStorage.getItem(`avStreak`)||`0`),v=localStorage.getItem(`avLastDay`)||``,y=e=>{o>=0||(s(e),e===h[n]?.correctIdx&&a(e=>e+1),setTimeout(()=>{if(n>=h.length-1){u(!0);let e=v===new Date(Date.now()-864e5).toDateString()||v===g?_+1:1;localStorage.setItem(`avStreak`,e),localStorage.setItem(`avLastDay`,g)}else r(e=>e+1),s(-1)},900))},b=h[n];return(0,f.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.8)`,zIndex:600,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16},onClick:e,children:(0,f.jsxs)(`div`,{style:{background:p.s1,border:`1px solid ${p.border}`,borderRadius:12,padding:20,maxWidth:480,width:`100%`,maxHeight:`85vh`,overflowY:`auto`},onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:12},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontFamily:`Syne`,fontWeight:800,fontSize:15},children:`📅 Daily Challenge`}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[g,` · 🔥 Streak: `,_,` day`,_===1?``:`s`]})]}),(0,f.jsx)(`button`,{onClick:e,style:{background:`none`,border:`none`,color:p.muted,cursor:`pointer`,fontSize:18},children:`✕`})]}),(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,background:p.s2,borderRadius:8,marginBottom:12,border:`1px solid ${m[t.ap.tier]?.color||p.border}33`},children:[(0,f.jsxs)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:2},children:[t.cat.emoji,` `,t.cat.label,` → `,t.algo.label]}),(0,f.jsx)(`div`,{style:{fontSize:12,fontWeight:700,color:m[t.ap.tier]?.color||p.text,fontFamily:`Syne`},children:t.ap.name}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[t.ap.time,` · `,t.ap.why]})]}),c?(0,f.jsxs)(`div`,{style:{textAlign:`center`,padding:16},children:[(0,f.jsx)(`div`,{style:{fontSize:32,marginBottom:8},children:i>=4?`🏆`:i>=3?`🥈`:i>=2?`🥉`:`📚`}),(0,f.jsxs)(`div`,{style:{fontSize:18,fontWeight:800,fontFamily:`Syne`,color:i>=4?p.opt:p.better,marginBottom:4},children:[`Score: `,i,`/`,h.length]}),(0,f.jsxs)(`div`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:12},children:[`🔥 Streak: `,parseInt(localStorage.getItem(`avStreak`)||`0`),` days`]}),(0,f.jsx)(`button`,{onClick:()=>{let e=`I scored ${i}/${h.length} on today's AlgoViz challenge (${t.algo.label})! 🔥 ${parseInt(localStorage.getItem(`avStreak`)||0)}-day streak https://DORNIPATIANIRUDH.github.io/algo-visualizer`;navigator.clipboard?.writeText(e),alert(`Score copied! Share it 🚀`)},style:{padding:`8px 16px`,background:`${p.opt}22`,border:`1px solid ${p.opt}`,color:p.opt,borderRadius:6,cursor:`pointer`,fontFamily:`Syne`,fontSize:12,fontWeight:700},children:`📤 Share Score`})]}):b&&(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:8},children:[(0,f.jsxs)(`div`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`},children:[`Q`,n+1,` of `,h.length]}),(0,f.jsxs)(`div`,{style:{fontSize:11,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`Score: `,i,`/`,n]})]}),(0,f.jsxs)(`div`,{style:{padding:`8px 10px`,background:p.s2,borderRadius:6,marginBottom:10,fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,borderLeft:`3px solid ${p.accent}`},children:[`Step: "`,b.step?.msg,`"`]}),(0,f.jsx)(`div`,{style:{fontSize:11,color:p.text,fontFamily:`Syne`,fontWeight:600,marginBottom:8},children:`What happens next?`}),(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:5},children:b.opts.map((e,t)=>{let n=p.s2,r=p.border,i=p.text;return o>=0&&(t===b.correctIdx?(n=`#0e2a1c`,r=p.opt,i=p.opt):t===o&&(n=`#2a0e12`,r=p.brute,i=p.brute)),(0,f.jsxs)(`button`,{onClick:()=>y(t),disabled:o>=0,style:{padding:`7px 10px`,background:n,border:`1px solid ${r}`,borderRadius:6,color:i,cursor:o>=0?`default`:`pointer`,fontFamily:`JetBrains Mono`,fontSize:9,textAlign:`left`,transition:`all 0.15s`},children:[String.fromCharCode(65+t),`. `,e.length>70?e.slice(0,70)+`...`:e]},t)})})]})]})})}function ia({step:e}){if(!e||!e.arr)return null;let{arr:t,stack:n=[],water:r=[],cur:i,total:a,msg:o}=e,s=t.length,c=Math.max(...t,1),l=r.some(e=>e>0)||o?.includes(`water`)||o?.includes(`trap`),u=o?.includes(`rect`)||o?.includes(`area`)||o?.includes(`height`),d=Math.min(28,Math.floor(260/s));return(0,f.jsxs)(`div`,{style:{width:`100%`,padding:`8px`,display:`flex`,flexDirection:`column`,gap:8},children:[(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:1,justifyContent:`center`,height:120,position:`relative`},children:t.map((e,t)=>{let a=Math.round(e/c*100),o=i===t,s=Array.isArray(n)&&n.includes(t),l=r[t]||0,u=Math.round(l/c*100),m=p.s2,h=p.border;return o?(m=p.better,h=p.better):s&&(m=`${p.accent}44`,h=p.accent),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:0,position:`relative`},children:[l>0&&(0,f.jsx)(`div`,{style:{width:d,height:u,background:`#1a4a8a55`,border:`1px solid #5b8df5`,borderRadius:`2px 2px 0 0`,marginBottom:0,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,f.jsx)(`span`,{style:{fontSize:7,color:`#5b8df5`,fontFamily:`JetBrains Mono`},children:l})}),(0,f.jsx)(`div`,{style:{width:d,height:Math.max(a,2),background:m,border:`1.5px solid ${h}`,borderRadius:`3px 3px 0 0`,display:`flex`,alignItems:`flex-start`,justifyContent:`center`,paddingTop:2},children:(0,f.jsx)(`span`,{style:{fontSize:7,color:o?`#000`:p.muted,fontFamily:`JetBrains Mono`,fontWeight:o?700:400},children:e})}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),Array.isArray(n)&&n.length>0&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4,flexWrap:`wrap`},children:[(0,f.jsx)(`span`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`stack:`}),[...n].reverse().map((e,n)=>(0,f.jsx)(`div`,{style:{padding:`2px 8px`,background:`${p.accent}22`,border:`1px solid ${p.accent}`,borderRadius:4,fontSize:10,color:p.accent,fontFamily:`JetBrains Mono`},children:u?`i=${e}(${t[e]})`:e},n))]}),a>0&&l&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:13,color:`#5b8df5`,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`💧 `,a,` units trapped`]}),a>0&&!l&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`Max area: `,a]}),r.some(e=>e>0)&&!l&&(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,justifyContent:`center`,flexWrap:`wrap`},children:r.map((e,t)=>(0,f.jsx)(`div`,{style:{padding:`2px 6px`,background:e>0?`${p.opt}22`:p.s2,border:`1px solid ${e>0?p.opt:p.border}`,borderRadius:3,fontSize:10,color:e>0?p.opt:p.muted,fontFamily:`JetBrains Mono`},children:e},t))})]})}function aa({step:e}){if(!e||!e.dp)return null;let{grid:t,dp:n,row:r,col:i,result:a}=e,o=n.length,s=n[0]?.length||0;if(!o||!s)return null;let c=t&&t[0]?.[0]!==1;return(0,f.jsxs)(`div`,{style:{padding:`8px`,width:`100%`,overflowX:`auto`},children:[t&&(0,f.jsxs)(`div`,{style:{marginBottom:8},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:c?`Grid (costs):`:`Grid (paths):`}),(0,f.jsx)(`div`,{style:{display:`inline-grid`,gridTemplateColumns:`repeat(${s},1fr)`,gap:2},children:t.map((e,t)=>e.map((e,n)=>{let a=t===r&&n===i;return(0,f.jsx)(`div`,{style:{width:36,height:36,display:`flex`,alignItems:`center`,justifyContent:`center`,background:a?`#2a1e0e`:p.s2,border:`1.5px solid ${a?p.better:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:a?700:400,color:a?p.better:p.muted},children:e},`${t}-${n}`)}))})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`DP table:`}),(0,f.jsx)(`div`,{style:{display:`inline-grid`,gridTemplateColumns:`repeat(${s},1fr)`,gap:2},children:n.map((e,t)=>e.map((e,n)=>{let a=t===r&&n===i,o=e!=null;return(0,f.jsx)(`div`,{style:{width:36,height:36,display:`flex`,alignItems:`center`,justifyContent:`center`,background:a?`#0e1a2a`:o?`${p.accent}11`:p.s2,border:`1.5px solid ${a?p.accent:o?`${p.accent}55`:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:a?12:10,fontWeight:a?700:400,color:a?p.accent:o?p.text:p.border},children:o?e:`·`},`${t}-${n}`)}))})]}),a!=null&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:14,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700,marginTop:8},children:[`Answer: `,a]})]})}function oa(e){if(!e)return null;let t=Math.floor((Date.now()-e)/864e5);return t===0?`today`:t===1?`yesterday`:t<7?`${t}d ago`:t<30?`${Math.floor(t/7)}w ago`:`${Math.floor(t/30)}mo ago`}function sa(e,t,n){if(!n||t===0)return!1;let r=e/t,i=r>=.8?7:r>=.5?3:1;return Date.now()>n+i*864e5}function ca({onClose:e}){let[t,n]=(0,l.useState)(`overview`),r=JSON.parse(localStorage.getItem(`avVisitedData`)||`{}`),i=JSON.parse(localStorage.getItem(`avQuizScores`)||`{}`),a=parseInt(localStorage.getItem(`avStreak`)||`0`),o=Ai.reduce((e,t)=>e+t.algorithms.reduce((e,t)=>e+t.approaches.length,0),0),s=Object.keys(r).length,c=Math.round(s/o*100),u=[];return Ai.forEach(e=>e.algorithms.forEach(t=>{let n=i[`${e.id}:${t.id}`];n&&sa(n.correct,n.total,n.lastQuiz)&&u.push({cat:e,algo:t,qs:n})})),(0,f.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.82)`,zIndex:600,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16},onClick:e,children:(0,f.jsxs)(`div`,{style:{background:p.s1,border:`1px solid ${p.border}`,borderRadius:12,padding:20,maxWidth:560,width:`100%`,maxHeight:`88vh`,overflowY:`auto`,display:`flex`,flexDirection:`column`,gap:14},onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontFamily:`Syne`,fontWeight:800,fontSize:16},children:`📊 My Progress`}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginTop:2},children:[s,`/`,o,` visited · 🔥 `,a,`-day streak`]})]}),(0,f.jsx)(`button`,{onClick:e,style:{background:`none`,border:`none`,color:p.muted,cursor:`pointer`,fontSize:18},children:`✕`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:4},children:[(0,f.jsx)(`span`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:`Overall`}),(0,f.jsxs)(`span`,{style:{fontSize:11,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[c,`%`]})]}),(0,f.jsx)(`div`,{style:{height:8,background:p.s2,borderRadius:4,overflow:`hidden`},children:(0,f.jsx)(`div`,{style:{height:`100%`,width:`${c}%`,background:`linear-gradient(90deg,${p.accent},${p.opt})`,borderRadius:4}})})]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:4},children:[[`overview`,`📋 Overview`],[`review`,`🔁 Review${u.length?` (${u.length})`:``}`],[`scores`,`🎯 Scores`]].map(([e,r])=>(0,f.jsx)(`button`,{onClick:()=>n(e),style:{padding:`4px 10px`,background:t===e?`${p.accent}22`:p.s2,border:`1px solid ${t===e?p.accent:p.border}`,color:t===e?p.accent:p.muted,borderRadius:5,cursor:`pointer`,fontSize:10,fontFamily:`Syne`,fontWeight:t===e?700:400},children:r},e))}),t===`overview`&&(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:7},children:Ai.map(e=>{let t=e.algorithms.reduce((e,t)=>e+t.approaches.length,0),n=e.algorithms.reduce((t,n)=>t+n.approaches.filter(t=>r[`${e.id}:${n.id}:${t.id}`]).length,0),i=Math.round(n/t*100),a=Math.max(0,...e.algorithms.flatMap(t=>t.approaches.map(n=>r[`${e.id}:${t.id}:${n.id}`]?.time||0))),o=i===100?p.opt:i>50?p.better:i>0?p.accent:p.border,s=u.some(t=>t.cat.id===e.id);return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`span`,{style:{fontSize:13,width:22,flexShrink:0},children:e.emoji}),(0,f.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:2,alignItems:`center`},children:[(0,f.jsxs)(`span`,{style:{fontSize:10,fontFamily:`Syne`,fontWeight:600,color:i>0?p.text:p.muted,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:[e.label,s&&(0,f.jsx)(`span`,{style:{marginLeft:4,fontSize:8,color:p.better},children:`🔁`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:5,alignItems:`center`,flexShrink:0,marginLeft:4},children:[a>0&&(0,f.jsx)(`span`,{style:{fontSize:8,color:p.border,fontFamily:`JetBrains Mono`},children:oa(a)}),(0,f.jsxs)(`span`,{style:{fontSize:9,color:o,fontFamily:`JetBrains Mono`},children:[n,`/`,t]})]})]}),(0,f.jsx)(`div`,{style:{height:4,background:p.s2,borderRadius:2,overflow:`hidden`},children:(0,f.jsx)(`div`,{style:{height:`100%`,width:`${i}%`,background:o,borderRadius:2}})})]})]},e.id)})}),t===`review`&&(0,f.jsx)(`div`,{children:u.length===0?(0,f.jsxs)(`div`,{style:{textAlign:`center`,padding:24,color:p.muted,fontFamily:`JetBrains Mono`,fontSize:11},children:[`✅ Nothing due!`,(0,f.jsx)(`br`,{}),(0,f.jsx)(`span`,{style:{fontSize:9},children:`Quiz algorithms to start spaced repetition.`})]}):(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:u.map(({cat:e,algo:t,qs:n})=>{let r=Math.round(n.correct/n.total*100),i=r>=80?p.opt:r>=50?p.better:p.brute;return(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,background:p.s2,borderRadius:7,border:`1px solid ${i}55`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{fontSize:11,fontFamily:`Syne`,fontWeight:700},children:[e.emoji,` `,t.label]}),(0,f.jsxs)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:[`Quizzed `,oa(n.lastQuiz),` · `,n.correct,`/`,n.total]})]}),(0,f.jsxs)(`span`,{style:{padding:`3px 8px`,background:`${i}22`,border:`1px solid ${i}`,borderRadius:4,fontSize:10,color:i,fontFamily:`JetBrains Mono`,fontWeight:700},children:[r,`%`]})]},`${e.id}:${t.id}`)})})}),t===`scores`&&(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6},children:Object.keys(i).length===0?(0,f.jsx)(`div`,{style:{textAlign:`center`,padding:24,color:p.muted,fontFamily:`JetBrains Mono`,fontSize:11},children:`No quiz scores yet — try Quiz Mode!`}):Object.entries(i).sort(([,e],[,t])=>t.lastQuiz-e.lastQuiz).map(([e,t])=>{let[n,r]=e.split(`:`),i=Ai.find(e=>e.id===n),a=i?.algorithms.find(e=>e.id===r);if(!i||!a)return null;let o=Math.round(t.correct/t.total*100),s=o>=80?p.opt:o>=50?p.better:p.brute;return(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,padding:`6px 10px`,background:p.s2,borderRadius:6},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`span`,{style:{fontSize:10,fontFamily:`Syne`,fontWeight:600},children:[i.emoji,` `,a.label]}),(0,f.jsx)(`span`,{style:{fontSize:8,color:p.muted,fontFamily:`JetBrains Mono`,marginLeft:6},children:oa(t.lastQuiz)}),sa(t.correct,t.total,t.lastQuiz)&&(0,f.jsx)(`span`,{style:{fontSize:8,color:p.better,marginLeft:5},children:`🔁 due`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,f.jsx)(`div`,{style:{width:48,height:4,background:p.border,borderRadius:2},children:(0,f.jsx)(`div`,{style:{width:`${o}%`,height:`100%`,background:s,borderRadius:2}})}),(0,f.jsxs)(`span`,{style:{fontSize:10,color:s,fontFamily:`JetBrains Mono`,fontWeight:700,width:30,textAlign:`right`},children:[o,`%`]})]})]},e)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,borderTop:`1px solid ${p.border}`,paddingTop:10},children:[(0,f.jsx)(`button`,{onClick:()=>{let e={visitedData:r,quizScores:i,streak:a,exportedAt:new Date().toISOString()},t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`algoviz-${new Date().toISOString().slice(0,10)}.json`,n.click()},style:{padding:`5px 12px`,background:`${p.opt}22`,border:`1px solid ${p.opt}`,color:p.opt,borderRadius:5,cursor:`pointer`,fontSize:10,fontFamily:`JetBrains Mono`},children:`⬇ Export JSON`}),(0,f.jsxs)(`label`,{style:{padding:`5px 12px`,background:`${p.accent}22`,border:`1px solid ${p.accent}`,color:p.accent,borderRadius:5,cursor:`pointer`,fontSize:10,fontFamily:`JetBrains Mono`},children:[`⬆ Import`,(0,f.jsx)(`input`,{type:`file`,accept:`.json`,onChange:e=>{let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target.result);t.visitedData&&localStorage.setItem(`avVisitedData`,JSON.stringify(t.visitedData)),t.quizScores&&localStorage.setItem(`avQuizScores`,JSON.stringify(t.quizScores)),t.streak&&localStorage.setItem(`avStreak`,String(t.streak)),alert(`Imported! Refresh to see stats.`)}catch{alert(`Invalid file`)}},n.readAsText(t)},style:{display:`none`}})]}),(0,f.jsx)(`button`,{onClick:()=>{window.confirm(`Reset all progress?`)&&([`avVisitedData`,`avQuizScores`,`avStreak`,`avLastDay`].forEach(e=>localStorage.removeItem(e)),e())},style:{padding:`5px 12px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:5,cursor:`pointer`,fontSize:10,fontFamily:`JetBrains Mono`,marginLeft:`auto`},children:`Reset All`})]})]})})}function la({step:e}){if(!e||!e.nodes)return null;if(!e.root&&e.root!==0)return(0,f.jsx)(`div`,{style:{padding:16,color:p.muted,fontSize:11,fontFamily:`JetBrains Mono`,textAlign:`center`},children:e.msg||`Tree is empty`});let{nodes:t,root:n,positions:r={},highlighted:i=[],balanceFactors:a={}}=e,o=Object.keys(r);if(!o.length)return null;let s=Math.max(...o.map(e=>r[e].x))+50,c=Math.max(...o.map(e=>r[e].y))+65,l=[],u=[];return Object.values(t).forEach(e=>{e.left!==null&&r[e.id]&&r[e.left]&&l.push((0,f.jsx)(`line`,{x1:r[e.id].x,y1:r[e.id].y,x2:r[e.left].x,y2:r[e.left].y,stroke:p.border,strokeWidth:1.5},`el${e.id}`)),e.right!==null&&r[e.id]&&r[e.right]&&l.push((0,f.jsx)(`line`,{x1:r[e.id].x,y1:r[e.id].y,x2:r[e.right].x,y2:r[e.right].y,stroke:p.border,strokeWidth:1.5},`er${e.id}`))}),Object.values(t).forEach(e=>{if(!r[e.id])return;let{x:t,y:n}=r[e.id],o=i.includes(e.id),s=a[e.id]??0,c=Math.abs(s)>1?p.brute:Math.abs(s)===1?p.better:p.opt,l=p.s2,d=p.border,m=p.text;o&&(l=`#2a1e0e`,d=p.better,m=p.better),u.push((0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:t,cy:n,r:16,fill:l,stroke:d,strokeWidth:o?2.5:1.5}),(0,f.jsx)(`text`,{x:t,y:n+4,textAnchor:`middle`,fontSize:10,fontWeight:`700`,fill:m,fontFamily:`JetBrains Mono`,children:e.val}),(0,f.jsxs)(`text`,{x:t,y:n+28,textAnchor:`middle`,fontSize:8,fill:c,fontFamily:`JetBrains Mono`,children:[`bf=`,s]}),(0,f.jsxs)(`text`,{x:t+19,y:n-10,textAnchor:`middle`,fontSize:7,fill:p.muted,fontFamily:`JetBrains Mono`,children:[`h`,e.height||1]})]},e.id))}),(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 ${s} ${c}`,style:{width:`100%`,maxWidth:s,display:`block`,margin:`0 auto`},children:[l,u]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:10,justifyContent:`center`,padding:`4px 8px`,fontSize:8,fontFamily:`JetBrains Mono`},children:[[p.opt,`bf=0 balanced`],[p.better,`|bf|=1 ok`],[p.brute,`|bf|>1 ROTATE!`]].map(([e,t])=>(0,f.jsx)(`span`,{style:{color:e},children:t},t))})]})}function ua({onClose:e,onNavigate:t}){let[n,r]=(0,l.useState)(``),[i,a]=(0,l.useState)(0),o=(0,l.useRef)(null);(0,l.useEffect)(()=>{o.current?.focus()},[]);let s=(0,l.useMemo)(()=>{let e=[];return Ai.forEach(t=>t.algorithms.forEach(n=>n.approaches.forEach(r=>{e.push({cat:t,algo:n,ap:r,text:`${t.label} ${n.label} ${r.name} ${r.time} ${r.why||``}`.toLowerCase()})}))),e},[]),c=(0,l.useMemo)(()=>{if(!n.trim())return s.filter((e,t)=>t%3==0).slice(0,8);let e=n.toLowerCase();return s.filter(t=>t.text.includes(e)).slice(0,10)},[n,s]);return(0,l.useEffect)(()=>{a(0)},[n]),(0,f.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.75)`,zIndex:700,display:`flex`,alignItems:`flex-start`,justifyContent:`center`,padding:`80px 16px 16px`},onClick:e,children:(0,f.jsxs)(`div`,{style:{background:p.s1,border:`1px solid ${p.border}`,borderRadius:12,width:`100%`,maxWidth:540,boxShadow:`0 24px 60px rgba(0,0,0,0.5)`},onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,padding:`10px 14px`,borderBottom:`1px solid ${p.border}`,gap:8},children:[(0,f.jsx)(`span`,{style:{color:p.muted,fontSize:14},children:`🔍`}),(0,f.jsx)(`input`,{ref:o,value:n,onChange:e=>r(e.target.value),onKeyDown:n=>{if(n.key===`ArrowDown`)n.preventDefault(),a(e=>Math.min(e+1,c.length-1));else if(n.key===`ArrowUp`)n.preventDefault(),a(e=>Math.max(e-1,0));else if(n.key===`Enter`&&c[i]){let{cat:n,algo:r,ap:a}=c[i];t(n.id,r.id,r.approaches.indexOf(a)),e()}else n.key===`Escape`&&e()},placeholder:`Search algorithms, complexity, keywords...`,style:{flex:1,background:`none`,border:`none`,outline:`none`,color:p.text,fontFamily:`JetBrains Mono`,fontSize:13}}),(0,f.jsx)(`kbd`,{style:{padding:`2px 6px`,background:p.s2,border:`1px solid ${p.border}`,borderRadius:4,fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:`ESC`})]}),(0,f.jsxs)(`div`,{style:{maxHeight:360,overflowY:`auto`},children:[c.length===0&&(0,f.jsxs)(`div`,{style:{padding:20,textAlign:`center`,color:p.muted,fontFamily:`JetBrains Mono`,fontSize:11},children:[`No results for "`,n,`"`]}),c.map(({cat:n,algo:r,ap:o},s)=>{let c=m[o.tier]?.color||p.muted;return(0,f.jsxs)(`div`,{onMouseEnter:()=>a(s),onClick:()=>{t(n.id,r.id,r.approaches.indexOf(o)),e()},style:{display:`flex`,alignItems:`center`,gap:10,padding:`9px 14px`,background:i===s?`${p.accent}18`:`transparent`,cursor:`pointer`,borderBottom:`1px solid ${p.border}22`},children:[(0,f.jsx)(`span`,{style:{fontSize:16,flexShrink:0},children:n.emoji}),(0,f.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[(0,f.jsx)(`span`,{style:{fontSize:11,fontFamily:`Syne`,fontWeight:700,color:i===s?p.text:p.muted,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:r.label}),(0,f.jsx)(`span`,{style:{fontSize:9,color:c,fontFamily:`Syne`,fontWeight:600,flexShrink:0},children:o.name})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:1},children:[(0,f.jsx)(`span`,{style:{fontSize:9,color:p.border,fontFamily:`JetBrains Mono`},children:n.label}),(0,f.jsx)(`span`,{style:{fontSize:9,color:c,fontFamily:`JetBrains Mono`},children:o.time})]})]}),i===s&&(0,f.jsx)(`kbd`,{style:{padding:`2px 5px`,background:p.s2,border:`1px solid ${p.border}`,borderRadius:3,fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,flexShrink:0},children:`↵`})]},`${n.id}:${r.id}:${o.id}`)})]}),(0,f.jsxs)(`div`,{style:{padding:`6px 14px`,borderTop:`1px solid ${p.border}`,display:`flex`,gap:12,fontSize:8,color:p.border,fontFamily:`JetBrains Mono`},children:[(0,f.jsx)(`span`,{children:`↑↓ navigate`}),(0,f.jsx)(`span`,{children:`↵ select`}),(0,f.jsx)(`span`,{children:`ESC close`}),(0,f.jsx)(`span`,{style:{marginLeft:`auto`},children:`⌘K to open`})]})]})})}function da({step:e}){if(!e||!e.heap)return null;let{heap:t,size:n,cur:r,swap:i=[],result:a}=e,o=Math.min(t.length,n||t.length),s={};for(let e=0;e<o;e++){let t=Math.floor(Math.log2(e+1)),n=e-(2**t-1),r=2**t;s[e]={x:(n+.5)*(320/r),y:t*52+16+4}}let c=o>0?Math.max(...Object.values(s).map(e=>e.y))+16+10:60,l=[];for(let e=1;e<o;e++){let t=br(e);s[t]&&s[e]&&l.push((0,f.jsx)(`line`,{x1:s[t].x,y1:s[t].y,x2:s[e].x,y2:s[e].y,stroke:p.border,strokeWidth:1.5},`e${e}`))}let u=[];for(let e=0;e<o;e++){if(!s[e])continue;let{x:n,y:a}=s[e],o=r===e,c=i.includes(e),l=e===0,d=p.s2,m=p.border,h=p.text;c?(d=`#2a1a0e`,m=p.better,h=p.better):o?(d=`#0e1a2a`,m=p.accent,h=p.accent):l&&(d=`#0e2a1c`,m=p.opt,h=p.opt),u.push((0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:n,cy:a,r:16,fill:d,stroke:m,strokeWidth:o||c?2.5:1.5}),(0,f.jsx)(`text`,{x:n,y:a+4,textAnchor:`middle`,fontSize:10,fontWeight:`700`,fill:h,fontFamily:`JetBrains Mono`,children:t[e]}),(0,f.jsx)(`text`,{x:n,y:a+26,textAnchor:`middle`,fontSize:7,fill:p.border,fontFamily:`JetBrains Mono`,children:e})]},e))}return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`,display:`flex`,flexDirection:`column`,gap:6},children:[(0,f.jsxs)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,padding:`0 8px`},children:[`Tree view: `,(0,f.jsx)(`span`,{style:{color:p.opt},children:`min (root)`}),` · `,(0,f.jsx)(`span`,{style:{color:p.better},children:`swapping`}),` · `,(0,f.jsx)(`span`,{style:{color:p.accent},children:`current`})]}),(0,f.jsxs)(`svg`,{viewBox:`0 0 320 ${Math.max(c,60)}`,style:{width:`100%`,maxWidth:320,display:`block`,margin:`0 auto`},children:[l,u]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,padding:`2px 8px`,flexWrap:`wrap`,justifyContent:`center`},children:t.slice(0,o).map((e,t)=>{let n=i.includes(t),a=r===t,o=t===0,s=p.s2,c=p.border,l=p.text;return n?(s=`#2a1a0e`,c=p.better,l=p.better):a?(s=`#0e1a2a`,c=p.accent,l=p.accent):o&&(s=`#0e2a1c`,c=p.opt,l=p.opt),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:1},children:[(0,f.jsx)(`div`,{style:{width:28,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:s,border:`1.5px solid ${c}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:10,fontWeight:600,color:l},children:e}),(0,f.jsx)(`span`,{style:{fontSize:6,color:p.border,fontFamily:`JetBrains Mono`},children:t})]},t)})}),a&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700,padding:`0 8px`},children:[`Min: `,a]})]})}function fa({step:e}){if(!e||!e.intervals)return null;let{intervals:t,merged:n,cur:r=[],active:i}=e,a=[...t,...n||[]];if(!a.length)return null;let o=Math.min(...a.map(e=>e[0])),s=Math.max(...a.map(e=>e[1])),c=Math.max(s-o,1),l=e=>(e-o)/c*280+10;return(0,f.jsxs)(`div`,{style:{width:`100%`,padding:`8px 12px`,display:`flex`,flexDirection:`column`,gap:8},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`Input intervals:`}),(0,f.jsx)(`svg`,{viewBox:`0 0 300 ${t.length*24+4}`,style:{width:`100%`,maxWidth:300,display:`block`},children:t.map(([e,t],n)=>{let i=r.includes(n);return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`rect`,{x:l(e),y:n*24,width:Math.max(l(t)-l(e),4),height:20,fill:i?`${p.better}33`:p.s2,stroke:i?p.better:p.border,strokeWidth:i?2:1,rx:3}),(0,f.jsxs)(`text`,{x:(l(e)+l(t))/2,y:n*24+20/2+4,textAnchor:`middle`,fontSize:9,fill:i?p.better:p.muted,fontFamily:`JetBrains Mono`,children:[`[`,e,`,`,t,`]`]})]},n)})})]}),n&&n.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.opt,fontFamily:`JetBrains Mono`,marginBottom:6},children:`Merged so far:`}),(0,f.jsx)(`svg`,{viewBox:`0 0 300 ${n.length*24+4}`,style:{width:`100%`,maxWidth:300,display:`block`},children:n.map(([e,t],n)=>{let r=i===n;return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`rect`,{x:l(e),y:n*24,width:Math.max(l(t)-l(e),4),height:20,fill:r?`${p.opt}33`:`${p.opt}22`,stroke:r?p.opt:p.accent,strokeWidth:r?2.5:1.5,rx:3}),(0,f.jsxs)(`text`,{x:(l(e)+l(t))/2,y:n*24+20/2+4,textAnchor:`middle`,fontSize:9,fill:r?p.opt:p.accent,fontFamily:`JetBrains Mono`,fontWeight:`600`,children:[`[`,e,`,`,t,`]`]})]},n)})})]}),e.result>0&&(0,f.jsx)(`div`,{style:{textAlign:`center`,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:n&&n.length>0?`${n.length} intervals`:`${e.result} rooms needed`})]})}var pa=[`#5b8df5`,`#e89a2a`,`#29cc7a`,`#e05a6f`,`#9b72e8`,`#29cccc`,`#cc7a29`,`#7acc29`];function ma({step:e}){if(!e||!e.grid)return null;let{grid:t,visited:n,cur:r,islands:i,path:a=[],found:o,word:s}=e;t.length;let c=t[0].length,l=(e,t)=>a.some(([n,r])=>n===e&&r===t),u=(e,t)=>r&&r[0]===e&&r[1]===t,d=!!s;return a.length,(0,f.jsxs)(`div`,{style:{width:`100%`,padding:`8px`,display:`flex`,flexDirection:`column`,gap:8},children:[d&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,padding:`4px 8px`,background:c.s2,borderRadius:6,fontSize:11,fontFamily:`JetBrains Mono`},children:[s.split(``).map((e,t)=>{let n=t<a.length;return(0,f.jsx)(`span`,{style:{padding:`2px 5px`,background:n?`${c.opt}22`:c.s2,border:`1px solid ${n?c.opt:c.border}`,borderRadius:3,color:n?c.opt:c.muted,fontWeight:n?700:400},children:e},t)}),o&&(0,f.jsx)(`span`,{style:{marginLeft:6,color:c.opt,fontWeight:700},children:`✓ Found!`})]}),(0,f.jsx)(`div`,{style:{display:`inline-grid`,gridTemplateColumns:`repeat(${c},1fr)`,gap:2,width:`fit-content`,margin:`0 auto`},children:t.map((e,t)=>e.map((e,r)=>{let i=n?.[t]?.[r]||0,s=l(t,r),p=u(t,r),m=a.findIndex(([e,n])=>e===t&&n===r),h=c.s2,g=c.border,_=c.muted,v=400;if(d)p?(h=`#2a1e0e`,g=c.better,_=c.better,v=700):s?(h=`${c.opt}33`,g=c.opt,_=c.opt,v=700):o&&s?(h=`${c.opt}55`,g=c.opt):(e===0||e===`.`||e===`#`)&&(h=c.s1,_=c.border);else if(e===0)h=c.s1,_=c.border;else if(p)h=`#2a1e0e`,g=c.better,_=c.better,v=700;else if(i>0){let e=pa[(i-1)%pa.length];h=`${e}22`,g=e,_=e,v=600}else h=`${c.accent}11`,g=`${c.accent}44`,_=c.accent;return(0,f.jsxs)(`div`,{style:{width:36,height:36,display:`flex`,alignItems:`center`,justifyContent:`center`,background:h,border:`1.5px solid ${g}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:d?13:12,fontWeight:v,color:_,transition:`all 0.15s`,position:`relative`},children:[d?e:e===1?`■`:``,!d&&i>0&&(0,f.jsx)(`span`,{style:{position:`absolute`,bottom:1,right:2,fontSize:7,color:pa[(i-1)%pa.length],opacity:.7},children:i}),d&&s&&m>=0&&(0,f.jsx)(`span`,{style:{position:`absolute`,top:0,right:2,fontSize:7,color:c.opt},children:m})]},`${t}-${r}`)}))}),!d&&(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,justifyContent:`center`,flexWrap:`wrap`,fontSize:9,fontFamily:`JetBrains Mono`},children:[(0,f.jsx)(`span`,{style:{color:c.accent},children:`■ land (unvisited)`}),Array.from({length:Math.min(i,4)},(e,t)=>(0,f.jsxs)(`span`,{style:{color:pa[t%pa.length]},children:[`■ island `,t+1]},t)),i>0&&(0,f.jsxs)(`span`,{style:{color:c.opt,fontWeight:700},children:[`Total: `,i]})]})]})}function ha({onClose:e}){let t=JSON.parse(localStorage.getItem(`avVisitedData`)||`{}`),n=JSON.parse(localStorage.getItem(`avQuizScores`)||`{}`),r=parseInt(localStorage.getItem(`avStreak`)||`0`),i=Ai.reduce((e,t)=>e+t.algorithms.reduce((e,t)=>e+t.approaches.length,0),0),a=Object.keys(t).length,o=Math.round(a/i*100),s=(0,l.useRef)(null),c=()=>{let e=s.current;if(!e)return;let t=new XMLSerializer().serializeToString(e),n=new Blob([t],{type:`image/svg+xml`}),r=document.createElement(`a`);r.href=URL.createObjectURL(n),r.download=`algoviz-report-card.svg`,r.click()},u=()=>{let e=`📊 My AlgoViz Report Card\n🔥 ${r}-day streak\n✅ ${a}/${i} approaches (${o}%)\n🏆 ${Object.keys(n).length} algorithms quizzed\n\nhttps://DORNIPATIANIRUDH.github.io/algo-visualizer`;navigator.clipboard?.writeText(e).then(()=>alert(`Copied to clipboard! Share it 🚀`))},d=Math.ceil(Ai.length/4)*60+24+100;return(0,f.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.85)`,zIndex:700,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16},onClick:e,children:(0,f.jsxs)(`div`,{style:{background:p.s1,border:`1px solid ${p.border}`,borderRadius:12,padding:20,maxWidth:600,width:`100%`,maxHeight:`90vh`,overflowY:`auto`},onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:16},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontFamily:`Syne`,fontWeight:800,fontSize:16},children:`🏆 My Report Card`}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[a,`/`,i,` explored · `,o,`% complete · 🔥 `,r,` days`]})]}),(0,f.jsx)(`button`,{onClick:e,style:{background:`none`,border:`none`,color:p.muted,cursor:`pointer`,fontSize:18},children:`✕`})]}),(0,f.jsxs)(`svg`,{ref:s,viewBox:`0 0 504 ${d}`,style:{width:`100%`,background:`#0a0a0f`,borderRadius:8,display:`block`},xmlns:`http://www.w3.org/2000/svg`,children:[(0,f.jsx)(`text`,{x:504/2,y:28,textAnchor:`middle`,fill:`#5b8df5`,fontSize:14,fontWeight:`800`,fontFamily:`Arial`,children:`AlgoViz Progress Report`}),(0,f.jsxs)(`text`,{x:504/2,y:44,textAnchor:`middle`,fill:`#666`,fontSize:9,fontFamily:`monospace`,children:[a,`/`,i,` approached · `,o,`% · 🔥`,r,` days`]}),(0,f.jsx)(`rect`,{x:12,y:52,width:480,height:6,rx:3,fill:`#1a1a2a`}),(0,f.jsx)(`rect`,{x:12,y:52,width:480*o/100,height:6,rx:3,fill:`#5b8df5`}),Ai.map((e,r)=>{let i=r%4,a=Math.floor(r/4),o=12+i*120,s=68+a*60,c=e.algorithms.reduce((e,t)=>e+t.approaches.length,0),l=e.algorithms.reduce((n,r)=>n+r.approaches.filter(n=>t[`${e.id}:${r.id}:${n.id}`]).length,0),u=Math.round(l/c*100),d=u===100?`#29cc7a`:u>50?`#e89a2a`:u>0?`#5b8df5`:`#1a1a2a`,p=Object.entries(n).filter(([t])=>t.startsWith(e.id)),m=p.length?Math.round(p.reduce((e,[,t])=>e+t.correct/t.total,0)/p.length*100):0;return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`rect`,{x:o+2,y:s+2,width:116,height:56,rx:6,fill:u>0?`${d}18`:`#111`,stroke:d,strokeWidth:u>0?1.5:.5}),(0,f.jsx)(`text`,{x:o+120/2,y:s+16,textAnchor:`middle`,fontSize:16,fill:`white`,children:e.emoji}),(0,f.jsx)(`text`,{x:o+120/2,y:s+28,textAnchor:`middle`,fontSize:7,fill:u>0?`#ccc`:`#444`,fontFamily:`Arial`,fontWeight:`600`,children:e.label.length>12?e.label.slice(0,12)+`…`:e.label}),(0,f.jsx)(`rect`,{x:o+8,y:s+34,width:104,height:4,rx:2,fill:`#1a1a2a`}),(0,f.jsx)(`rect`,{x:o+8,y:s+34,width:104*u/100,height:4,rx:2,fill:d}),(0,f.jsxs)(`text`,{x:o+120/2,y:s+48,textAnchor:`middle`,fontSize:7,fill:d,fontFamily:`monospace`,children:[l,`/`,c,m>0?` · quiz:${m}%`:``]})]},e.id)}),(0,f.jsx)(`text`,{x:504/2,y:d-8,textAnchor:`middle`,fill:`#333`,fontSize:7,fontFamily:`monospace`,children:`DORNIPATIANIRUDH.github.io/algo-visualizer`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:12},children:[(0,f.jsx)(`button`,{onClick:c,style:{flex:1,padding:`8px`,background:`${p.opt}22`,border:`1px solid ${p.opt}`,color:p.opt,borderRadius:6,cursor:`pointer`,fontFamily:`Syne`,fontSize:11,fontWeight:700},children:`⬇ Download SVG`}),(0,f.jsx)(`button`,{onClick:u,style:{flex:1,padding:`8px`,background:`${p.accent}22`,border:`1px solid ${p.accent}`,color:p.accent,borderRadius:6,cursor:`pointer`,fontFamily:`Syne`,fontSize:11,fontWeight:700},children:`📤 Copy Share Text`})]})]})})}function ga({onClose:e}){let t=Math.floor(Date.now()/(7*864e5)),n=Ai.flatMap(e=>e.algorithms.map(t=>({cat:e,algo:t})));function r(e){let t=e;return()=>(t=t*1664525+1013904223&4294967295,Math.abs(t)/2147483647)}let i=r(t*31337),a=[...n].sort(()=>i()-.5).slice(0,7),o=`avWeekly:${t}`,s=JSON.parse(localStorage.getItem(o)||`[]`),c=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],l=new Date().getDay(),u=l===0?6:l-1;return(0,f.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.82)`,zIndex:600,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16},onClick:e,children:(0,f.jsxs)(`div`,{style:{background:p.s1,border:`1px solid ${p.border}`,borderRadius:12,padding:20,maxWidth:460,width:`100%`,maxHeight:`85vh`,overflowY:`auto`},onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:16},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontFamily:`Syne`,fontWeight:800,fontSize:16},children:`📅 Weekly Challenge`}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[`Week `,t,` · `,s.length,`/7 completed`]})]}),(0,f.jsx)(`button`,{onClick:e,style:{background:`none`,border:`none`,color:p.muted,cursor:`pointer`,fontSize:18},children:`✕`})]}),(0,f.jsx)(`div`,{style:{height:6,background:p.s2,borderRadius:3,marginBottom:16,overflow:`hidden`},children:(0,f.jsx)(`div`,{style:{height:`100%`,width:`${s.length/7*100}%`,background:s.length===7?p.opt:p.accent,borderRadius:3,transition:`width 0.3s`}})}),(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:a.map(({cat:t,algo:n},r)=>{let i=s.includes(r),a=r===u,l=i?p.opt:a?p.better:p.muted;return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,padding:`10px 12px`,background:a?`${p.better}11`:i?`${p.opt}11`:p.s2,border:`1px solid ${a?p.better:i?p.opt:p.border}`,borderRadius:8},children:[(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:i?`${p.opt}22`:a?`${p.better}22`:p.s1,borderRadius:6,fontSize:14,flexShrink:0},children:i?`✅`:a?`👉`:c[r]}),(0,f.jsxs)(`div`,{style:{flex:1},children:[(0,f.jsxs)(`div`,{style:{fontSize:11,fontFamily:`Syne`,fontWeight:700,color:l},children:[t.emoji,` `,n.label]}),(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:t.label})]}),!i&&(0,f.jsx)(`button`,{onClick:()=>{let t=[...s,r];localStorage.setItem(o,JSON.stringify(t)),e()},style:{padding:`4px 10px`,background:`${p.accent}22`,border:`1px solid ${p.accent}`,color:p.accent,borderRadius:5,cursor:`pointer`,fontSize:10,fontFamily:`JetBrains Mono`},children:`Study →`})]},r)})}),s.length===7&&(0,f.jsx)(`div`,{style:{textAlign:`center`,padding:16,fontSize:14,color:p.opt,fontFamily:`Syne`,fontWeight:800,marginTop:8},children:`🏆 Week Complete! Amazing!`})]})})}function _a(){let[e,t]=(0,l.useState)(`sorting`),n=Math.max(0,Ai.findIndex(t=>t?.id===e)),[r,i]=(0,l.useState)(0),[a,o]=(0,l.useState)(0),[s,c]=(0,l.useState)(`js`),[u,d]=(0,l.useState)(0),[h,g]=(0,l.useState)(!1),[_,v]=(0,l.useState)(550),[y,b]=(0,l.useState)([34,7,23,32,5,62,18,45,11,28,50,9]),[x,S]=(0,l.useState)(23),[C,w]=(0,l.useState)(8),[T,ee]=(0,l.useState)(!1),[te,ne]=(0,l.useState)(``),[re,ie]=(0,l.useState)(!1),[ae,oe]=(0,l.useState)({correct:0,total:0,streak:0}),[se,ce]=(0,l.useState)(null),[le,E]=(0,l.useState)(!1),[D,ue]=(0,l.useState)(!1),[de,fe]=(0,l.useState)(!0),[pe,me]=(0,l.useState)(!1),[O,he]=(0,l.useState)(!1),[ge,_e]=(0,l.useState)(!1),[ve,ye]=(0,l.useState)(!1),[be,xe]=(0,l.useState)(!1),[Se,Ce]=(0,l.useState)(``),[k,we]=(0,l.useState)(!1);(0,l.useRef)(``);let Te=(0,l.useMemo)(()=>{if(!te.trim())return Ai;let e=te.toLowerCase();return Ai.map(t=>({...t,algorithms:t.algorithms.filter(n=>n.label.toLowerCase().includes(e)||t.label.toLowerCase().includes(e)||n.approaches.some(t=>t.name.toLowerCase().includes(e)))})).filter(e=>e.algorithms.length>0)},[te]),[Ee,De]=(0,l.useState)(!1),[Oe,ke]=(0,l.useState)(`viz`),Ae=(0,l.useRef)(null),je=(0,l.useRef)(null),Me=(0,l.useRef)([]),Ne=(0,l.useRef)(-1);(0,l.useEffect)(()=>{try{let e=new URLSearchParams(location.search);if(e.get(`cat`)&&t(e.get(`cat`)),e.get(`cat`)&&e.get(`algo`)){let t=Ai.find(t=>t.id===e.get(`cat`));if(t){let n=t.algorithms.findIndex(t=>t.id===e.get(`algo`));n>=0&&i(n)}}e.get(`app`)&&o(parseInt(e.get(`app`))||0),e.get(`step`)&&setTimeout(()=>d(parseInt(e.get(`step`))||0),600)}catch{}},[]),(0,l.useEffect)(()=>{let e=()=>ee(window.innerWidth<768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Pe=Ai[Math.max(0,n)]||Ai[0],A=Pe?.algorithms?.[Math.min(r,(Pe?.algorithms?.length||1)-1)]||Pe?.algorithms?.[0],j=A?.approaches?.[Math.min(a,(A?.approaches?.length||1)-1)]||A?.approaches?.[0],M=m[j?.tier||`brute`]?.color||p.brute,N=(0,l.useMemo)(()=>!A||!j?[]:A.vizType===`bars`?j.genSteps(y):[`graph`,`ll`,`backtrack`,`string`,`greedy`,`stackviz`,`math`,`bits`,`dp2d`,`trie`,`mst`,`tree`,`avl`,`uf`,`seg`,`mono`,`matrix`,`heap`,`interval`,`gridviz`].includes(A.vizType)||A.id===`coinchange`?j.genSteps():A.vizType===`lis`?j.genSteps(y):A.vizType===`fib`||A.id===`fibonacci`?j.genSteps(Math.min(C,j.tier===`brute`?10:15)):A.vizType===`slide`?j.genSteps(y):j.genSteps(y,x),[A,j,y,x,C]),P=N.length>0?N[Math.min(u,N.length-1)]:null,Fe=je.current;(0,l.useEffect)(()=>{je.current=P},[P]),(0,l.useEffect)(()=>{let e=e=>{if(e.target.tagName!==`TEXTAREA`&&!(e.target.tagName===`INPUT`&&!e.metaKey&&!e.ctrlKey)){if((e.metaKey||e.ctrlKey)&&e.key===`k`){e.preventDefault(),xe(e=>!e);return}e.key===`ArrowRight`||e.key===`l`?d(e=>Math.min((N?.length||1)-1,e+1)):e.key===`ArrowLeft`||e.key===`h`?d(e=>Math.max(0,e-1)):e.key===` `?(e.preventDefault(),g(e=>!e)):e.key===`r`||e.key===`R`?A?.vizType===`bars`&&b(Array.from({length:12},()=>Math.floor(Math.random()*75)+5)):e.key===`1`?o(0):e.key===`2`?o(1):e.key===`3`?o(2):e.key===`q`||e.key===`Q`?ie(e=>!e):e.key===`c`||e.key===`C`?E(e=>!e):e.key===`e`||e.key===`E`?ue(e=>!e):e.key===`x`||e.key===`X`?fe(e=>!e):e.key===`d`||e.key===`D`?me(e=>!e):e.key===`p`||e.key===`P`?he(e=>!e):e.key===`w`||e.key===`W`?ye(e=>!e):(e.altKey||e.metaKey)&&e.key===`ArrowLeft`?(e.preventDefault(),Re()):(e.altKey||e.metaKey)&&e.key===`ArrowRight`&&(e.preventDefault(),ze())}};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[N,A]),(0,l.useEffect)(()=>{clearInterval(Ae.current),d(0),g(!1)},[e,r,a,y,x,C]),(0,l.useEffect)(()=>(h?Ae.current=setInterval(()=>{d(e=>e>=N.length-1?(g(!1),e):e+1)},_):clearInterval(Ae.current),()=>clearInterval(Ae.current)),[h,_,N.length]),(0,l.useEffect)(()=>{if(!e||!A)return;let t={cId:e,aId:A.id,apI:a},n=Me.current,r=n[Ne.current];r&&r.cId===t.cId&&r.aId===t.aId||(n.splice(Ne.current+1),n.push(t),Ne.current=n.length-1)},[e,A?.id,a]),(0,l.useEffect)(()=>{A&&Ce(localStorage.getItem(`avNote:${e}:${A.id}`)||``)},[e,A?.id]),(0,l.useEffect)(()=>{if(!A||!j)return;let t=`${e}:${A.id}:${j.id}`,n=JSON.parse(localStorage.getItem(`avVisitedData`)||`{}`);n[t]={time:Date.now(),count:(n[t]?.count||0)+1},localStorage.setItem(`avVisitedData`,JSON.stringify(n))},[e,A?.id,j?.id]);let Ie=()=>b(Array.from({length:12},()=>Math.floor(Math.random()*75)+5)),Le=()=>{if(!N||N.length<2||u>=N.length-1)return;let e=N[u+1]?.msg||`Next step`,t=N.filter((e,t)=>t!==u+1).map(e=>e?.msg).filter(Boolean),n=[],r=new Set([e]);for(;n.length<3&&t.length;){let e=Math.floor(Math.random()*t.length),i=t[e];t.splice(e,1),r.has(i)||(r.add(i),n.push(i))}for(;n.length<3;)n.push(`No more steps`);let i=[e,...n].sort(()=>Math.random()-.5);ce({options:i,correctIdx:i.indexOf(e),answered:!1,selectedIdx:-1})},Re=()=>{if(Ne.current>0){Ne.current--;let{cId:e,aId:n,apI:r}=Me.current[Ne.current];t(e);let a=Ai.find(t=>t?.id===e);a&&(i(Math.max(0,a.algorithms.findIndex(e=>e.id===n))),o(r||0))}},ze=()=>{if(Ne.current<Me.current.length-1){Ne.current++;let{cId:e,aId:n,apI:r}=Me.current[Ne.current];t(e);let a=Ai.find(t=>t?.id===e);a&&(i(Math.max(0,a.algorithms.findIndex(e=>e.id===n))),o(r||0))}},Be=e=>{t(e),i(0),o(0),De(!1)},Ve=(e,n,r=0)=>{let a=Ai.find(t=>t.id===e);if(!a)return;let s=a.algorithms.findIndex(e=>e.id===n);t(e),i(Math.max(0,s)),o(r),d(0)},He=e=>{i(e),o(0),De(!1)};return!Pe||!A||!j?null:(0,f.jsxs)(`div`,{style:{display:`flex`,height:`100vh`,background:p.bg,color:p.text,fontFamily:`Syne,sans-serif`,overflow:`hidden`,fontSize:13},children:[(0,f.jsxs)(`div`,{style:{width:T?Ee?220:0:200,minWidth:T?Ee?220:0:200,background:p.s1,borderRight:`1px solid ${p.border}`,display:`flex`,flexDirection:`column`,overflowY:`auto`,transition:`all 0.25s`,flexShrink:0,position:T?`absolute`:`relative`,zIndex:T?300:1,height:`100vh`},children:[(0,f.jsx)(`div`,{style:{padding:`12px 10px 4px`,fontSize:16,fontWeight:800,letterSpacing:-.3},children:`AlgoViz`}),(0,f.jsx)(`div`,{style:{padding:`4px 8px 6px`},children:(0,f.jsxs)(`div`,{style:{position:`relative`},children:[(0,f.jsx)(`input`,{type:`text`,value:te,onChange:e=>{ne(e.target.value)},placeholder:`Search algorithms...`,style:{width:`100%`,padding:`5px 24px 5px 8px`,background:p.s2,border:`1px solid ${te?p.accent:p.border}`,color:p.text,borderRadius:5,fontSize:10,fontFamily:`Syne`,outline:`none`,boxSizing:`border-box`}}),te&&(0,f.jsx)(`button`,{onClick:()=>ne(``),style:{position:`absolute`,right:4,top:`50%`,transform:`translateY(-50%)`,background:`none`,border:`none`,color:p.muted,cursor:`pointer`,fontSize:12,padding:`0 2px`,lineHeight:1},children:`✕`})]})}),Te.length===0&&(0,f.jsxs)(`div`,{style:{padding:`12px 10px`,fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[`No matches for "`,te,`"`]}),Te.map((t,n)=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`button`,{onClick:()=>Be(t.id),style:{width:`100%`,padding:`7px 10px`,background:e===t.id?`${p.accent}22`:`transparent`,color:e===t.id?p.accent:p.muted,border:`none`,textAlign:`left`,cursor:`pointer`,fontSize:11,fontFamily:`Syne`,fontWeight:700,borderLeft:e===t.id?`3px solid ${p.accent}`:`3px solid transparent`,display:`flex`,alignItems:`center`,gap:5},children:[(0,f.jsx)(`span`,{style:{fontSize:14},children:t.emoji}),t.label.toUpperCase()]}),e===t.id&&t.algorithms.map((e,t)=>(0,f.jsx)(`button`,{onClick:()=>He(t),style:{width:`100%`,padding:`5px 10px 5px 22px`,background:r===t?p.s2:`transparent`,color:r===t?p.text:p.muted,border:`none`,textAlign:`left`,cursor:`pointer`,fontSize:13,fontFamily:`Syne`,borderLeft:r===t?`3px solid ${M}`:`3px solid transparent`,transition:`all 0.1s`},children:e.label},e.id))]},t.id))]}),(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,overflow:`hidden`,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,padding:`6px 10px`,borderBottom:`1px solid ${p.border}`,background:p.s1,gap:6,flexShrink:0,overflow:`hidden`},children:[T&&(0,f.jsx)(`button`,{onClick:()=>De(e=>!e),style:{padding:`4px 8px`,background:Ee?p.s2:`transparent`,border:`1px solid ${Ee?p.border:`transparent`}`,color:p.text,borderRadius:4,cursor:`pointer`,fontSize:16,touchAction:`manipulation`},children:`☰`}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4,flex:1,minWidth:0,overflow:`hidden`},children:[!T&&(0,f.jsx)(`button`,{onClick:Re,disabled:Ne.current<=0,title:`Back (Alt+←)`,style:{padding:`2px 6px`,background:`none`,border:`1px solid ${p.border}`,color:Ne.current>0?p.muted:p.border,borderRadius:4,cursor:Ne.current>0?`pointer`:`default`,fontSize:12},children:`←`}),!T&&(0,f.jsx)(`button`,{onClick:ze,disabled:Ne.current>=Me.current.length-1,title:`Forward (Alt+→)`,style:{padding:`2px 6px`,background:`none`,border:`1px solid ${p.border}`,color:Ne.current<Me.current.length-1?p.muted:p.border,borderRadius:4,cursor:Ne.current<Me.current.length-1?`pointer`:`default`,fontSize:12},children:`→`}),!T&&(0,f.jsx)(`span`,{style:{fontFamily:`Syne`,fontWeight:700,fontSize:13,color:p.muted},children:Pe.label}),!T&&(0,f.jsx)(`span`,{style:{color:p.border},children:`›`}),(0,f.jsx)(`span`,{style:{color:p.border},children:`›`}),(0,f.jsx)(`span`,{style:{fontFamily:`Syne`,fontWeight:700,fontSize:T?14:15,color:p.text,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,maxWidth:T?120:999},children:A.label})]}),A.vizType===`bars`&&(0,f.jsx)(`button`,{onClick:Ie,style:{padding:`3px 8px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:4,cursor:`pointer`,fontSize:T?13:11,touchAction:`manipulation`},children:`🔀`}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:3,overflowX:`auto`,alignItems:`center`,flexShrink:0},children:[(0,f.jsx)(`button`,{onClick:()=>xe(!0),style:{padding:T?`6px`:`3px 7px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:5,cursor:`pointer`,fontSize:T?15:11,flexShrink:0,touchAction:`manipulation`},children:T?`🔍`:`🔍 Search`}),(0,f.jsx)(`button`,{onClick:()=>E(e=>!e),style:{padding:T?`6px`:`3px 7px`,background:le?`${p.accent}33`:p.s2,border:`1px solid ${le?p.accent:p.border}`,color:le?p.accent:p.muted,borderRadius:5,cursor:`pointer`,fontSize:T?15:11,flexShrink:0,touchAction:`manipulation`},children:T?`📊`:`📊 Chart`}),(0,f.jsx)(`button`,{onClick:()=>{ie(e=>!e),re||Le()},style:{padding:T?`6px`:`3px 7px`,background:re?`${p.better}33`:p.s2,border:`1px solid ${re?p.better:p.border}`,color:re?p.better:p.muted,borderRadius:5,cursor:`pointer`,fontSize:T?15:11,flexShrink:0,touchAction:`manipulation`},children:T?`🎯`:`🎯 Quiz`}),(0,f.jsx)(`button`,{onClick:()=>ue(e=>!e),style:{padding:T?`6px`:`3px 7px`,background:D?`${p.better}33`:p.s2,border:`1px solid ${D?p.better:p.border}`,color:D?p.better:p.muted,borderRadius:5,cursor:`pointer`,fontSize:T?15:11,flexShrink:0,touchAction:`manipulation`},children:T?`⚡`:`⚡ Race`}),(0,f.jsx)(`button`,{onClick:()=>fe(e=>!e),style:{padding:T?`6px`:`3px 7px`,background:de?`${p.purple}33`:p.s2,border:`1px solid ${de?p.purple:p.border}`,color:de?p.purple:p.muted,borderRadius:5,cursor:`pointer`,fontSize:T?15:11,flexShrink:0,touchAction:`manipulation`},children:T?`💡`:`💡 Explain`}),(0,f.jsx)(`button`,{onClick:()=>he(!0),style:{padding:T?`6px`:`3px 7px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:5,cursor:`pointer`,fontSize:T?15:11,flexShrink:0,touchAction:`manipulation`},children:T?`📈`:`📈 Progress`}),(0,f.jsx)(`button`,{onClick:()=>me(!0),style:{padding:T?`6px`:`3px 7px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:5,cursor:`pointer`,fontSize:T?15:11,flexShrink:0,touchAction:`manipulation`},children:T?`🔔`:`📅 Daily`}),!T&&(0,f.jsx)(`button`,{onClick:()=>_e(!0),style:{padding:`3px 7px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:5,cursor:`pointer`,fontSize:11,flexShrink:0},children:`🏆 Card`}),!T&&(0,f.jsx)(`button`,{onClick:()=>ye(!0),style:{padding:`3px 7px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:5,cursor:`pointer`,fontSize:11,flexShrink:0},children:`📅 Weekly`}),(0,f.jsx)(`button`,{onClick:()=>{let t=location.origin+location.pathname+`?cat=`+encodeURIComponent(e)+`&algo=`+encodeURIComponent(A?.id||``)+`&app=`+a+`&step=`+u;navigator.clipboard?.writeText(t).then(()=>{we(!0),setTimeout(()=>we(!1),2e3)})},style:{padding:T?`6px`:`3px 7px`,background:k?`#0e2a1c`:p.s2,border:`1px solid ${k?p.opt:p.border}`,color:k?p.opt:p.muted,borderRadius:5,cursor:`pointer`,fontSize:T?15:11,flexShrink:0,touchAction:`manipulation`},children:k?`✓`:`🔗`})]}),A.vizType===`bars`&&(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:(0,f.jsx)(`input`,{value:y.join(`,`),onChange:e=>{let t=e.target.value.split(`,`).map(e=>parseInt(e.trim())).filter(e=>!isNaN(e));t.length>0&&b(t)},style:{width:140,padding:`2px 5px`,background:p.s2,border:`1px solid ${p.border}`,color:p.text,borderRadius:4,fontSize:10,fontFamily:`JetBrains Mono`,outline:`none`},placeholder:`custom array...`})}),(A.vizType===`array`||A.vizType===`slide`)&&A.id!==`fibonacci`&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,f.jsx)(`label`,{style:{fontSize:10,color:p.muted},children:`target:`}),(0,f.jsx)(`input`,{type:`number`,value:x,onChange:e=>S(+e.target.value),style:{width:46,padding:`2px 4px`,background:p.s2,border:`1px solid ${p.border}`,color:p.text,borderRadius:4,fontSize:11,fontFamily:`JetBrains Mono`,outline:`none`}})]}),A.id===`fibonacci`&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,f.jsx)(`label`,{style:{fontSize:10,color:p.muted},children:`n=`}),(0,f.jsx)(`input`,{type:`number`,value:C,min:1,max:j.id===`f0`?10:15,onChange:e=>w(Math.min(j.id===`f0`?10:15,Math.max(1,+e.target.value))),style:{width:42,padding:`2px 4px`,background:p.s2,border:`1px solid ${p.border}`,color:p.text,borderRadius:4,fontSize:11,fontFamily:`JetBrains Mono`,outline:`none`}})]})]}),(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:T?4:7,padding:T?`5px 6px`:`8px 10px`,background:p.s1,borderBottom:`1px solid ${p.border}`,flexShrink:0},children:A.approaches.map((e,t)=>{let n=m[e.tier].color,r=a===t;return(0,f.jsxs)(`button`,{onClick:()=>o(t),style:{padding:T?`5px 3px`:`10px 8px`,background:r?`${n}18`:p.s2,border:`2px solid ${r?n:p.border}`,borderRadius:8,cursor:`pointer`,transition:`all 0.15s`,textAlign:`center`,touchAction:`manipulation`,outline:`none`},children:[(0,f.jsx)(`div`,{style:{fontSize:T?14:16,marginBottom:2},children:m[e.tier].icon}),(0,f.jsx)(`div`,{style:{fontSize:T?9:11,fontWeight:700,color:n,fontFamily:`Syne`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:1},children:m[e.tier].label}),(0,f.jsx)(`div`,{style:{fontSize:T?10:12,fontWeight:600,color:r?p.text:p.muted,fontFamily:`Syne`,marginBottom:1,lineHeight:1.2},children:e.name}),!T&&(0,f.jsx)(`div`,{style:{fontSize:11,color:r?n:p.muted,fontFamily:`JetBrains Mono`},children:e.time})]},e.id)})}),T&&(0,f.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid ${p.border}`,background:p.s1,flexShrink:0},children:[`viz`,`code`].map(e=>(0,f.jsx)(`button`,{onClick:()=>ke(e),style:{flex:1,padding:`6px`,background:Oe===e?p.bg:`transparent`,color:Oe===e?p.text:p.muted,border:`none`,borderBottom:Oe===e?`2px solid ${M}`:`2px solid transparent`,cursor:`pointer`,fontSize:11,fontFamily:`Syne`,fontWeight:Oe===e?700:400,touchAction:`manipulation`},children:e===`viz`?`Visualizer`:`Code`},e))}),(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,overflow:`hidden`,minHeight:0},children:[(!T||Oe===`viz`)&&(0,f.jsxs)(`div`,{style:{flex:T?1:1.1,display:`flex`,flexDirection:`column`,borderRight:T?`none`:`1px solid ${p.border}`,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,background:p.bg,padding:D?0:10,overflow:`auto`,minHeight:0},children:[D&&(0,f.jsx)(ta,{algo:A,inputArr:y,target:x,fibN:C,tierColor:M}),!D&&(0,f.jsxs)(f.Fragment,{children:[A.vizType===`bars`&&(0,f.jsx)(ji,{step:P,prevStep:Fe}),A.vizType===`array`&&(0,f.jsx)(Mi,{step:P,catId:A.id,prevStep:Fe}),A.vizType===`fib`&&(0,f.jsx)(B,{step:P}),A.vizType===`dp`&&(0,f.jsx)(Pi,{step:P}),A.vizType===`graph`&&(0,f.jsx)(Fi,{step:P}),A.vizType===`tree`&&(P?.nodes?(0,f.jsx)(zi,{step:P}):(0,f.jsx)(`div`,{style:{color:p.muted,fontSize:11,fontFamily:`JetBrains Mono`,padding:8},children:`Loading tree...`})),A.vizType===`avl`&&(0,f.jsx)(la,{step:P}),A.vizType===`backtrack`&&(0,f.jsx)(Bi,{step:P}),A.vizType===`string`&&(0,f.jsx)(Vi,{step:P}),A.vizType===`slide`&&(0,f.jsx)(Hi,{step:P}),A.vizType===`greedy`&&(0,f.jsx)(Ui,{step:P}),A.vizType===`ll`&&(0,f.jsx)(Ii,{step:P}),A.vizType===`math`&&(0,f.jsx)(Li,{step:P}),A.vizType===`stackviz`&&(0,f.jsx)(Ri,{step:P}),A.vizType===`bits`&&(0,f.jsx)(Wi,{step:P}),A.vizType===`dp2d`&&(0,f.jsx)(Gi,{step:P}),A.vizType===`lis`&&(0,f.jsx)(Ki,{step:P}),A.vizType===`trie`&&(0,f.jsx)(qi,{step:P}),A.vizType===`mst`&&(0,f.jsx)(Ji,{step:P}),A.vizType===`uf`&&(0,f.jsx)(Yi,{step:P}),A.vizType===`seg`&&(0,f.jsx)(Xi,{step:P}),A.vizType===`gridviz`&&(0,f.jsx)(ma,{step:P}),A.vizType===`heap`&&(0,f.jsx)(da,{step:P}),A.vizType===`interval`&&(0,f.jsx)(fa,{step:P}),A.vizType===`mono`&&(0,f.jsx)(ia,{step:P}),A.vizType===`matrix`&&(0,f.jsx)(aa,{step:P})]})]}),(0,f.jsx)(`input`,{type:`range`,min:0,max:Math.max(0,N.length-1),value:u,onChange:e=>{g(!1),d(+e.target.value)},style:{width:`100%`,height:3,accentColor:M,cursor:`pointer`,flexShrink:0,display:`block`}}),(0,f.jsx)(`div`,{style:{padding:T?`6px 10px`:`4px 12px`,background:p.s2,borderTop:`1px solid ${p.border}`,borderLeft:`3px solid ${M}`,fontFamily:`JetBrains Mono`,fontSize:T?13:12,color:p.text,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,flexShrink:0},children:re&&se&&!se.answered?`🎯 What happens next?`:P?.msg}),de&&!re&&(()=>{let e=ea(A,P);return e?(0,f.jsxs)(`div`,{style:{padding:`6px 12px`,background:`#0d0d1e`,borderTop:`1px solid ${p.border}`,borderLeft:`3px solid ${p.purple}`,flexShrink:0},children:[(0,f.jsx)(`div`,{style:{fontSize:11,fontWeight:700,color:p.purple,fontFamily:`Syne`,marginBottom:2},children:`💡 WHY THIS WORKS`}),(0,f.jsx)(`div`,{style:{fontSize:12,color:p.muted,fontFamily:`JetBrains Mono`,lineHeight:1.6},children:e})]}):null})(),re&&se&&(0,f.jsx)(`div`,{style:{padding:`8px`,background:p.s1,borderTop:`1px solid ${p.border}`,flexShrink:0},children:se.answered?(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[se.options.map((e,t)=>{let n=t===se.correctIdx,r=t===se.selectedIdx,i=p.s2,a=p.border,o=p.muted;return n?(i=`#0e2a1c`,a=p.opt,o=p.opt):r&&!n&&(i=`#2a0e12`,a=p.brute,o=p.brute),(0,f.jsxs)(`div`,{style:{padding:`5px 8px`,background:i,border:`1px solid ${a}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:9,color:o},children:[n?`✓`:r?`✗`:`·`,` `,e.length>60?e.slice(0,60)+`...`:e]},t)}),(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginTop:2},children:[(0,f.jsxs)(`span`,{style:{fontSize:9,color:se.selectedIdx===se.correctIdx?p.opt:p.brute,fontFamily:`JetBrains Mono`,fontWeight:700},children:[se.selectedIdx===se.correctIdx?`✓ Correct!`:`✗ Wrong`,` Score: `,ae.correct,`/`,ae.total,` Streak: `,ae.streak,`🔥`]}),(0,f.jsx)(`button`,{onClick:()=>{d(e=>Math.min((N?.length||1)-1,e+1)),ce(null),setTimeout(Le,300)},style:{padding:`3px 10px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:4,cursor:`pointer`,fontSize:10,fontFamily:`JetBrains Mono`,touchAction:`manipulation`},children:`Next →`})]})]}):(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:se.options.map((t,n)=>(0,f.jsxs)(`button`,{onClick:()=>{let t=n===se.correctIdx;ce(e=>({...e,answered:!0,selectedIdx:n})),oe(e=>({correct:e.correct+ +!!t,total:e.total+1,streak:t?e.streak+1:0}));let r=`${e}:${A?.id}`,i=JSON.parse(localStorage.getItem(`avQuizScores`)||`{}`),a=i[r]||{correct:0,total:0};i[r]={correct:a.correct+ +!!t,total:a.total+1,lastQuiz:Date.now()},localStorage.setItem(`avQuizScores`,JSON.stringify(i)),t&&setTimeout(()=>{d(e=>Math.min((N?.length||1)-1,e+1)),ce(null),setTimeout(Le,300)},800)},style:{padding:`5px 8px`,background:p.s2,border:`1px solid ${p.border}`,borderRadius:5,color:p.text,cursor:`pointer`,fontFamily:`JetBrains Mono`,fontSize:9,textAlign:`left`,transition:`all 0.1s`,touchAction:`manipulation`},children:[String.fromCharCode(65+n),`. `,t.length>60?t.slice(0,60)+`...`:t]},n))})}),(0,f.jsx)(`div`,{style:{height:3,background:p.border,flexShrink:0},children:(0,f.jsx)(`div`,{style:{height:`100%`,background:M,width:`${(u+1)/N.length*100}%`,transition:`width 0.2s`}})}),(0,f.jsxs)(`div`,{style:{padding:`5px 8px`,display:`flex`,alignItems:`center`,gap:4,background:p.s1,borderTop:`1px solid ${p.border}`,flexShrink:0},children:[(0,f.jsx)(Ni,{onClick:()=>{d(0),g(!1)},title:`⏮`}),(0,f.jsx)(Ni,{onClick:()=>d(e=>Math.max(0,e-1)),title:`◀`}),(0,f.jsx)(`button`,{onClick:()=>g(e=>!e),style:{padding:`5px 14px`,background:h?p.s2:`${M}22`,border:`1px solid ${h?p.border:M}`,color:h?p.muted:M,borderRadius:5,cursor:`pointer`,fontSize:14,fontWeight:600,fontFamily:`JetBrains Mono`,touchAction:`manipulation`},children:h?`⏸`:`▶`}),(0,f.jsx)(Ni,{onClick:()=>d(e=>Math.min(N.length-1,e+1)),title:`▶`}),(0,f.jsx)(Ni,{onClick:()=>{d(N.length-1),g(!1)},title:`⏭`}),(0,f.jsxs)(`span`,{style:{fontSize:12,color:p.muted,fontFamily:`JetBrains Mono`,marginLeft:2},children:[u+1,`/`,N.length]}),(0,f.jsx)(`div`,{style:{flex:1}}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2},children:[[`🐢`,1200],[`▶`,550],[`⚡`,200],[`🚀`,80]].map(([e,t])=>(0,f.jsx)(`button`,{onClick:()=>v(t),style:{padding:`2px 6px`,background:_===t?`${M}33`:p.s2,border:`1px solid ${_===t?M:p.border}`,color:_===t?M:p.muted,borderRadius:4,cursor:`pointer`,fontSize:11,fontFamily:`JetBrains Mono`,touchAction:`manipulation`},children:e},t))})]}),(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,borderTop:`1px solid ${p.border}`,background:p.s1,flexShrink:0},children:[!T&&(0,f.jsx)(`div`,{style:{fontSize:11,fontWeight:700,color:p.muted,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:3},children:`Why this approach?`}),(0,f.jsxs)(`div`,{style:{fontSize:T?10:12,color:p.muted,lineHeight:1.4},children:[`💡 `,j.why]}),(0,f.jsxs)(`div`,{style:{marginTop:3,display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,f.jsx)(`span`,{style:{fontSize:12,color:M,fontFamily:`JetBrains Mono`,fontWeight:600},children:j.time}),(0,f.jsxs)(`span`,{style:{fontSize:12,color:p.muted,fontFamily:`JetBrains Mono`},children:[`Space: `,j.space]})]})]})]}),(!T||Oe===`code`)&&(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,overflow:`hidden`,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{padding:`5px 10px`,borderBottom:`1px solid ${p.border}`,background:p.s1,fontSize:10,color:p.muted,display:`flex`,alignItems:`center`,gap:5,flexShrink:0},children:[(0,f.jsx)(`span`,{style:{color:M,fontFamily:`JetBrains Mono`,fontWeight:600},children:j.name}),(0,f.jsx)(`span`,{children:`·`}),(0,f.jsx)(`span`,{style:{fontFamily:`JetBrains Mono`},children:j.time})]}),(0,f.jsx)(`div`,{style:{flex:1,overflow:`hidden`},children:(0,f.jsx)(V,{codeStr:j.code[s]||``,highlightLine:P?.ln??-1,language:s,onLang:c})}),(0,f.jsxs)(`div`,{style:{borderTop:`1px solid ${p.border}`,padding:`6px 10px`,flexShrink:0},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:4},children:[(0,f.jsx)(`span`,{style:{fontSize:11,color:p.muted,fontFamily:`Syne`,fontWeight:700},children:`📝 MY NOTES`}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`},children:[Se&&(0,f.jsxs)(`span`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:[Se.length,` chars`]}),Se&&(0,f.jsx)(`span`,{style:{fontSize:9,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:`✓ saved`})]})]}),(0,f.jsx)(`textarea`,{value:Se,onChange:t=>{let n=t.target.value;Ce(n),localStorage.setItem(`avNote:${e}:${A?.id}`,n)},placeholder:`Your notes on this algorithm... (auto-saved)`,rows:T?2:3,style:{width:`100%`,background:p.s2,border:`1px solid ${Se?p.accent:p.border}`,color:p.text,borderRadius:4,padding:`6px 8px`,fontFamily:`JetBrains Mono`,fontSize:11,resize:`vertical`,outline:`none`,boxSizing:`border-box`,lineHeight:1.5}})]})]})]})]}),le&&(0,f.jsx)($i,{cat:Pe,onClose:()=>E(!1)}),pe&&(0,f.jsx)(ra,{onClose:()=>me(!1)}),O&&(0,f.jsx)(ca,{onClose:()=>he(!1)}),ge&&(0,f.jsx)(ha,{onClose:()=>_e(!1)}),ve&&(0,f.jsx)(ga,{onClose:()=>ye(!1)}),be&&(0,f.jsx)(ua,{onClose:()=>xe(!1),onNavigate:Ve}),!T&&(0,f.jsx)(`div`,{style:{position:`fixed`,bottom:8,right:8,fontSize:8,color:p.border,fontFamily:`JetBrains Mono`,pointerEvents:`none`},children:`←→ step · Space play · 1/2/3 approach · R random · Q quiz · C chart`}),T&&Ee&&(0,f.jsx)(`div`,{onClick:()=>De(!1),style:{position:`fixed`,inset:0,zIndex:200,background:`rgba(0,0,0,0.5)`}})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,f.jsx)(l.StrictMode,{children:(0,f.jsx)(_a,{})}));