var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function w(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,w(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),w(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=w(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=w(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return w(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return w(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!C.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)C.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.6`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,te=-1,S=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<S)}function re(){if(g=!1,ee){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.6`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var w=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case C:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var k=me(null),A=me(null),he=me(null),j=me(null);function M(e,t){switch(O(he,t),O(A,e),O(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(k),O(k,e)}function ge(){D(k),D(A),D(he)}function _e(e){e.memoizedState!==null&&O(j,e);var t=k.current,n=Hd(t,e.type);t!==n&&(O(A,e),O(k,n))}function ve(e){A.current===e&&(D(k),D(A)),j.current===e&&(D(j),Qf._currentValue=de)}var N,P;function ye(e){if(N===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||``,P=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+N+e+P}var be=!1;function xe(e,t){if(!e||be)return``;be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ye(n):``}function Se(e,t){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye(`Lazy`);case 13:return e.child!==t&&t!==null?ye(`Suspense Fallback`):ye(`Suspense`);case 19:return ye(`SuspenseList`);case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return ye(`Activity`);default:return``}}function Ce(e){try{var t=``,n=null;do t+=Se(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var we=Object.prototype.hasOwnProperty,Te=t.unstable_scheduleCallback,Ee=t.unstable_cancelCallback,De=t.unstable_shouldYield,Oe=t.unstable_requestPaint,ke=t.unstable_now,F=t.unstable_getCurrentPriorityLevel,Ae=t.unstable_ImmediatePriority,je=t.unstable_UserBlockingPriority,I=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:He,Be=Math.log,Ve=Math.LN2;function He(e){return e>>>=0,e===0?32:31-(Be(e)/Ve|0)|0}var Ue=256,We=262144,Ge=4194304;function L(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=L(n))):i=L(o):i=L(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=L(n))):i=L(o)):i=L(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Je(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=Ge;return Ge<<=1,!(Ge&62914560)&&(Ge=4194304),e}function Xe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&$e(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function et(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function tt(e,t){var n=t&-t;return n=n&42?1:nt(n),(n&(e.suspendedLanes|t))===0?n:0}function nt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function it(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function at(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ot=Math.random().toString(36).slice(2),st=`__reactFiber$`+ot,ct=`__reactProps$`+ot,lt=`__reactContainer$`+ot,ut=`__reactEvents$`+ot,dt=`__reactListeners$`+ot,ft=`__reactHandles$`+ot,pt=`__reactResources$`+ot,mt=`__reactMarker$`+ot;function ht(e){delete e[st],delete e[ct],delete e[ut],delete e[dt],delete e[ft]}function gt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[lt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[st])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function _t(e){if(e=e[st]||e[lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function yt(e){var t=e[pt];return t||=e[pt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function bt(e){e[mt]=!0}var xt=new Set,St={};function R(e,t){Ct(e,t),Ct(e+`Capture`,t)}function Ct(e,t){for(St[e]=t,e=0;e<t.length;e++)xt.add(t[e])}var wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Tt={},Et={};function Dt(e){return we.call(Et,e)?!0:we.call(Tt,e)?!1:wt.test(e)?Et[e]=!0:(Tt[e]=!0,!1)}function Ot(e,t,n){if(Dt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function At(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Mt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Nt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pt(e){if(!e._valueTracker){var t=Mt(e)?`checked`:`value`;e._valueTracker=Nt(e,t,``+e[t])}}function Ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Mt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function It(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Rt(e){return e.replace(Lt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function zt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+jt(t)):e.value!==``+jt(t)&&(e.value=``+jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Vt(e,o,jt(n)):Vt(e,o,jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+jt(s):e.removeAttribute(`name`)}function Bt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Pt(e);return}n=n==null?``:``+jt(n),t=t==null?n:``+jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Pt(e)}function Vt(e,t,n){t===`number`&&It(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ht(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ut(e,t,n){if(t!=null&&(t=``+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+jt(n)}function Wt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Pt(e)}function Gt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Kt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Jt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&qt(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&qt(e,a,t[a])}function Yt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qt(e){return Zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function $t(){}var en=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nn=null,rn=null;function an(e){var t=_t(e);if(t&&(e=t.stateNode)){var n=e[ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(zt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Rt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ct]||null;if(!i)throw Error(s(90));zt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ft(r)}break a;case`textarea`:Ut(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}}}var on=!1;function sn(e,t,n){if(on)return e(t,n);on=!0;try{return e(t)}finally{if(on=!1,(nn!==null||rn!==null)&&(bu(),nn&&(t=nn,e=rn,rn=nn=null,an(t),e)))for(t=0;t<e.length;t++)an(e[t])}}function cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var ln=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),un=!1;if(ln)try{var dn={};Object.defineProperty(dn,`passive`,{get:function(){un=!0}}),window.addEventListener(`test`,dn,dn),window.removeEventListener(`test`,dn,dn)}catch{un=!1}var fn=null,pn=null,mn=null;function hn(){if(mn)return mn;var e,t=pn,n=t.length,r,i=`value`in fn?fn.value:fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return mn=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(bn),Sn=h({},bn,{view:0,detail:0}),Cn=yn(Sn),z,wn,Tn,En=h({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Tn&&(Tn&&e.type===`mousemove`?(z=e.screenX-Tn.screenX,wn=e.screenY-Tn.screenY):wn=z=0,Tn=e),z)},movementY:function(e){return`movementY`in e?e.movementY:wn}}),Dn=yn(En),On=yn(h({},En,{dataTransfer:0})),kn=yn(h({},Sn,{relatedTarget:0})),An=yn(h({},bn,{animationName:0,elapsedTime:0,pseudoElement:0})),jn=yn(h({},bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Mn=yn(h({},bn,{data:0})),Nn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Pn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Fn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function In(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fn[e])?!!t[e]:!1}function Ln(){return In}var Rn=yn(h({},Sn,{key:function(e){if(e.key){var t=Nn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Pn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),zn=yn(h({},En,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Bn=yn(h({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),Vn=yn(h({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Hn=yn(h({},En,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Un=yn(h({},bn,{newState:0,oldState:0})),Wn=[9,13,27,32],Gn=ln&&`CompositionEvent`in window,Kn=null;ln&&`documentMode`in document&&(Kn=document.documentMode);var qn=ln&&`TextEvent`in window&&!Kn,Jn=ln&&(!Gn||Kn&&8<Kn&&11>=Kn),Yn=` `,Xn=!1;function Zn(e,t){switch(e){case`keyup`:return Wn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Qn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var $n=!1;function er(e,t){switch(e){case`compositionend`:return Qn(t);case`keypress`:return t.which===32?(Xn=!0,Yn):null;case`textInput`:return e=t.data,e===Yn&&Xn?null:e;default:return null}}function tr(e,t){if($n)return e===`compositionend`||!Gn&&Zn(e,t)?(e=hn(),mn=pn=fn=null,$n=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Jn&&t.locale!==`ko`?null:t.data;default:return null}}var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!nr[e.type]:t===`textarea`}function ir(e,t,n,r){nn?rn?rn.push(r):rn=[r]:nn=r,t=Ed(t,`onChange`),0<t.length&&(n=new xn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ar=null,or=null;function sr(e){yd(e,0)}function cr(e){if(Ft(vt(e)))return e}function lr(e,t){if(e===`change`)return t}var ur=!1;if(ln){var dr;if(ln){var fr=`oninput`in document;if(!fr){var pr=document.createElement(`div`);pr.setAttribute(`oninput`,`return;`),fr=typeof pr.oninput==`function`}dr=fr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function mr(){ar&&(ar.detachEvent(`onpropertychange`,hr),or=ar=null)}function hr(e){if(e.propertyName===`value`&&cr(or)){var t=[];ir(t,or,e,tn(e)),sn(sr,t)}}function gr(e,t,n){e===`focusin`?(mr(),ar=t,or=n,ar.attachEvent(`onpropertychange`,hr)):e===`focusout`&&mr()}function _r(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return cr(or)}function vr(e,t){if(e===`click`)return cr(t)}function yr(e,t){if(e===`input`||e===`change`)return cr(t)}function br(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var xr=typeof Object.is==`function`?Object.is:br;function Sr(e,t){if(xr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!we.call(t,i)||!xr(e[i],t[i]))return!1}return!0}function Cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Cr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Cr(n)}}function Tr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Er(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=It(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=It(e.document)}return t}function Dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Or=ln&&`documentMode`in document&&11>=document.documentMode,kr=null,Ar=null,jr=null,Mr=!1;function Nr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mr||kr==null||kr!==It(r)||(r=kr,`selectionStart`in r&&Dr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Sr(jr,r)||(jr=r,r=Ed(Ar,`onSelect`),0<r.length&&(t=new xn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Fr={animationend:Pr(`Animation`,`AnimationEnd`),animationiteration:Pr(`Animation`,`AnimationIteration`),animationstart:Pr(`Animation`,`AnimationStart`),transitionrun:Pr(`Transition`,`TransitionRun`),transitionstart:Pr(`Transition`,`TransitionStart`),transitioncancel:Pr(`Transition`,`TransitionCancel`),transitionend:Pr(`Transition`,`TransitionEnd`)},Ir={},Lr={};ln&&(Lr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),`TransitionEvent`in window||delete Fr.transitionend.transition);function Rr(e){if(Ir[e])return Ir[e];if(!Fr[e])return e;var t=Fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lr)return Ir[e]=t[n];return e}var zr=Rr(`animationend`),Br=Rr(`animationiteration`),Vr=Rr(`animationstart`),Hr=Rr(`transitionrun`),Ur=Rr(`transitionstart`),Wr=Rr(`transitioncancel`),Gr=Rr(`transitionend`),Kr=new Map,qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);qr.push(`scrollEnd`);function Jr(e,t){Kr.set(e,t),R(t,[e])}var Yr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Xr=[],Zr=0,Qr=0;function $r(){for(var e=Zr,t=Qr=Zr=0;t<e;){var n=Xr[t];Xr[t++]=null;var r=Xr[t];Xr[t++]=null;var i=Xr[t];Xr[t++]=null;var a=Xr[t];if(Xr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ri(n,i,a)}}function ei(e,t,n,r){Xr[Zr++]=e,Xr[Zr++]=t,Xr[Zr++]=n,Xr[Zr++]=r,Qr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ti(e,t,n,r){return ei(e,t,n,r),ii(e)}function ni(e,t){return ei(e,null,null,t),ii(e)}function ri(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ii(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)ci(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,k.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=si(31,n,t,i),e.elementType=ae,e.lanes=a,e;case y:return fi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=si(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case C:return e=si(13,n,t,i),e.elementType=C,e.lanes=a,e;case ne:return e=si(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:o=10;break a;case ee:o=9;break a;case S:o=11;break a;case re:o=14;break a;case ie:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=si(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:Ce(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:Ce(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-ze(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,B=null,V=!1,Ni=null,Pi=!1,Fi=Error(s(519));function Ii(e){throw Hi(_i(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ct]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Wt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Mi=Mi.return}}function zi(e){if(e!==Mi)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&B&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));B=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));B=uf(e)}else t===27?(t=B,Zd(e.type)?(e=lf,lf=null,B=e):B=t):B=Mi?cf(e.stateNode.nextSibling):null;return!0}function Bi(){B=Mi=null,V=!1}function Vi(){var e=Ni;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=me(null),Wi=null,Gi=null;function Ki(e,t,n){O(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,D(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ji(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ji(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Xi(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;xr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===j.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!xr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=dd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=T.S;T.S=function(e,t){eu=ke(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=me(null);function _a(){var e=ga.current;return e===null?q.pooledCache:e}function va(e,t){t===null?O(ga,ga.current):O(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:aa._currentValue,pool:e}}var ba=Error(s(460)),xa=Error(s(474)),Sa=Error(s(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($t,$t),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then($t,$t);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(s(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(s(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ie&&Ea(a)===t.type)?(t=i(t,n.props),Na(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=fi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=di(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=hi(t,e.mode,n),t.return=e,t;case ie:return t=Ea(t),f(e,t,n)}if(ue(t)||ce(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===te)return f(e,ea(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Ea(n),p(e,t,n,r)}if(ue(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===te)return p(e,t,ea(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Ea(r),m(e,t,n,r,i)}if(ue(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===te)return m(e,t,n,ea(t,r),i);Pa(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return V&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Di(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),V&&Di(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return V&&Di(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),V&&Di(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Ea(l)===r.type){n(e,r.sibling),c=i(r,a.props),Na(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=fi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=di(a.type,a.key,a.props,null,e.mode,c),Na(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=hi(a,e.mode,c),c.return=e,e=c}return o(e);case ie:return a=Ea(a),b(e,r,a,c)}if(ue(a))return h(e,r,a,c);if(ce(a)){if(l=ce(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ma(a),c);if(a.$$typeof===te)return b(e,r,ea(e,a),c);Pa(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=pi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ii(e),ri(e,null,n),t}return ei(e,r,t,n),ii(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=da;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ua&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ra=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=me(null),Za=me(0);function Qa(e,t){e=Ul,O(Za,e),O(Xa,t),Ul=e|t.baseLanes}function $a(){O(Za,Ul),O(Xa,Xa.current)}function eo(){Ul=Za.current,D(Xa),D(Za)}var to=me(null),no=null;function ro(e){var t=e.alternate;O(co,co.current&1),O(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){O(co,co.current),O(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(O(co,co.current),O(to,e),no===null&&(no=e)):oo(e)}function oo(){O(co,co.current),O(to,to.current)}function so(e){D(to),no===e&&(no=null),D(co)}var co=me(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,ho=!1,go=0,_o=0,vo=null,yo=0;function bo(){throw Error(s(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xr(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?zs:Bs,ho=!1,a=n(r,i),ho=!1,mo&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){T.H=Rs;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,_o=0,vo=null,t)throw Error(s(300));e===null||rc||(e=e.dependencies,e!==null&&Zi(e)&&(rc=!0))}function wo(e,t,n,r){H=e;var i=0;do{if(mo&&(vo=null),_o=0,mo=!1,25<=i)throw Error(s(301));if(i+=1,fo=U=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}T.H=Vs,a=t(n,r)}while(mo);return a}function To(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function Eo(){var e=go!==0;return go=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,_o=go=0,vo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function Ao(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(s(467)):Error(s(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=_o;return _o+=1,vo===null&&(vo=[]),e=Ta(vo,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===te)return $i(e)}throw Error(s(438,String(e)))}function Po(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),U,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((uo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,H.lanes|=p,Gl|=p;f=u.action,ho&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,H.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!xr(a,e.memoizedState)&&(rc=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);xr(a,t.memoizedState)||(rc=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function zo(e,t,n){var r=H,i=Ao(),a=V;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!xr((U||i).memoizedState,n);if(o&&(i.memoizedState=n,rc=!0),i=i.queue,us(Ho.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,i,n,t),null),q===null)throw Error(s(349));a||uo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=jo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xr(e,n)}catch{return!0}}function Wo(e){var t=ni(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),ho){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,U,typeof r==`function`?r:Fo)}function qo(e,t,n,r,i){if(Fs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};T.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Jo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(V){var n=q.formState;if(n!==null){a:{var r=H;if(V){if(B){b:{for(var i=B,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,H,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,H,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),U,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===ba?Sa:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=U;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=jo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();H.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&xo(r,U.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(H.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=jo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),ho){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),H.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return xr(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),H.lanes|=e,Gl|=e,t):(e=bs(e,n,r),xr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ps(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ma(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Ts(e).queue;Ss(e,i,t,de,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return $i(Qf)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Va(n);var r=Ha(t,e,n);r!==null&&(hu(r,t,n),Ua(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ti(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,xr(s,o))return ei(e,t,i,0),q===null&&$r(),!1}catch{}if(n=ti(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(s(479))}else t=ti(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===H||t!==null&&t===H}function Is(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,et(e,n)}}var Rs={readContext:$i,use:No,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Rs.useEffectEvent=bo;var zs={readContext:$i,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(ho){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(ho){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,H,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,i=ko();if(V){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),q===null)throw Error(s(349));Y&127||Bo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ls(Ho.bind(null,r,a,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),n},useId:function(){var e=ko(),t=q.identifierPrefix;if(V){var n=Ei,r=Ti;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,H)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),U.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return U===null?bs(n,e,t):xs(n,U.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(hu(t,e,n),Ua(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){Yr(e)}function Js(e){console.error(e)}function Ys(e){Yr(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Va(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,i,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(V)return t=to.current,t===null?(r!==Fi&&(t=Error(s(423),{cause:r}),Hi(_i(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=_i(r,n),i=Qs(e.stateNode,r,i),Wa(e,i),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Fi&&(e=Error(s(422),{cause:r}),Hi(_i(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=_i(a,n),Xl===null?Xl=[a]:Xl.push(a),Wl!==4&&(Wl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Qs(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=$s(i),ec(i,e,n,r),Wa(n,i),!1}n=n.return}while(n!==null);return!1}var nc=Error(s(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&s&&ki(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Sr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Sr(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),$a(),oo(t)):(va(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),$a(),ao(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ia(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(io(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return dc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(io(t),i)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(rc||Xi(e,t,n,!1),i=(n&e.childLanes)!==0,rc||i){if(r=q,r!==null&&(o=tt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,ni(e,o),hu(r,e,o),nc;Du(),t=fc(e,t,n)}else e=a.treeContext,B=cf(o.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=dc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return Qi(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ra||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ra||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Bi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:ya()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(co.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(V){if(i?ro(t):oo(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(oo(t),i=t.mode,c=wc({mode:`hidden`,children:c},i),r=fi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,o,n),t.memoizedState=yc,lc(null,r)):(ro(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(ro(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,i=t.mode,r=wc({mode:`visible`,children:r.children},i),c=fi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,o,n),t.memoizedState=yc,t=lc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Hi({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||Xi(e,t,n,!1),o=(n&e.childLanes)!==0,rc||o){if(o=q,o!==null&&(r=tt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ni(e,r),hu(o,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=cf(c.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return i?(oo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,i,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(i=c.cachePool,i===null?i=ya():(l=aa._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=xc(e,o,n),t.memoizedState=yc,lc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ia(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(co,o),ic(e,t,r,n),r=V?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Zi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:M(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:_e(t);break;case 4:M(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(co,co.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,V&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===S){t.tag=11,t=ac(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(s(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ks(r,t.pendingProps),_c(e,t,r,i,n);case 3:a:{if(M(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ba(e,t),qa(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0),Ka(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==i){i=_i(Error(s(424)),t),Hi(i),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=cf(e.firstChild),Mi=t,V=!0,Ni=null,Pi=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===i){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[st]=t,r[ct]=e,Pd(r,n,e),bt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&V&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Mi=t,Pi=!0,i=B,Zd(t.type)?(lf=i,B=cf(r.firstChild)):B=i),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((i=r=B)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?i=!1:(t.stateNode=r,Mi=t,B=cf(r.firstChild),Pi=!1,i=!0)),i||Ii(t)),_e(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=So(e,t,To,null,null,n),Qf._currentValue=i),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Mi=t,B=null,e=!0)),e||Ii(t)),null;case 13:return Sc(e,t,n);case 4:return M(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Qi(t),i=$i(i),r=r(i),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(i=_a(),i===null&&(i=q,a=oa(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},za(t),Ki(t,aa,i)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Ki(t,aa,r),r!==i.cache&&Yi(t,[aa],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ki(t,aa,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Da=Ca,xa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Da=Ca,xa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ye(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),W(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Nc(t),a===null?(W(t),Pc(t,i,null,r,n)):(W(t),Fc(t,a))):a?a===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,a)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,i,e,r,n)),null;case 27:if(ve(t),n=he.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return W(t),null}e=k.current,zi(t)?Li(t,e):(e=ff(i,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(ve(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return W(t),null}if(a=k.current,zi(t))Li(t,a);else{var o=Bd(he.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[st]=t,a[ct]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=he.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Mi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ii(t,!0)}else e=Bd(e).createTextNode(r),e[st]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[st]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(s(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[st]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),i=!1}else i=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return ge(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return qi(t.type),W(t),null;case 19:if(D(co),r=t.memoizedState,r===null)return W(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=lo(e),a!==null){for(t.flags|=128,Lc(r,!1),e=a.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return O(co,co.current&1|2),V&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ke()>tu&&(t.flags|=128,i=!0,Lc(r,!1),t.lanes=4194304)}else{if(!i)if(e=lo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!V)return W(t),null}else 2*ke()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ke(),e.sibling=null,n=co.current,O(co,i?n&1|2:n&1),V&&Di(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),W(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function zc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(s(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(co),null;case 4:return ge(),null;case 10:return qi(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&D(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ai(t),t.tag){case 3:qi(aa),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:D(co);break;case 10:qi(t.type);break;case 22:case 23:so(t),eo(),e!==null&&D(ga);break;case 24:qi(aa)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ct]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$t));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[st]=e,t[ct]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Er(e),Dr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ks(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ht(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null)if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(s(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(s(160));ul(a,o,i),G=null,cl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[mt]||a[st]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[st]=e,bt(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[st]=e,bt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){i=e.stateNode;try{Gt(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Jc(e,i,n===null?i:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=gl,gl=gf(t.containerInfo),hl(t,e),gl=i,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=ke()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||i,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;Qc(e,Xc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Gt(a,``),n.flags&=-33),Qc(e,Xc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;Zc(e,Xc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:T.T===null?it():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||V){var e=We;We<<=1,!(We&3932160)&&(We=262144),Jl=e}else Jl=536870912;return e=to.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),Ze(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||qe(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-ke(),10<i)){if(yu(r,t,Jl,!Bl),Ke(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},jl(t,a,d);var m=(a&62914560)===a?$l-ke():(a&4194048)===a?eu-ke():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&$e(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Gi=Wi=null,Oo(e),Aa=null,ja=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=li(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,$r(),n}function Cu(e,t){H=null,T.H=Rs,t===ba||t===Sa?(t=Oa(),X=3):t===xa?(t=Oa(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,_i(t,e.current)))}function wu(){var e=to.current;return e===null?!0:(Y&4194048)===Y?no===null:(Y&62914560)===Y||Y&536870912?e===no:!1}function Tu(){var e=T.H;return T.H=Rs,e===null?Rs:e}function Eu(){var e=T.A;return T.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&to.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,K=r,T.H=i,T.A=a,J===null&&(q=null,Y=0,$r()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),i=Eu();q!==e||Y!==t?(nu=null,tu=ke()+500,Su(e,t)):Vl=qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var a=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,a,1);break;case 2:case 9:if(wa(a)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},a.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:wa(a)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(J.tag){case 26:o=J.memoizedState;case 5:case 27:var c=J;if(o?Wf(o):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,a,5);break;case 6:X=0,zl=null,Pu(e,t,a,6);break;case 8:xu(),Wl=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Gi=Wi=null,T.H=r,T.A=i,K=n,J===null?(q=null,Y=0,$r(),Wl):0}function ju(){for(;J!==null&&!De();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Oo(t);default:Bc(n,t),t=J=ui(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Gi=Wi=null,Oo(t),Aa=null,ja=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,_i(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,_i(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=Qr,Qe(e,n,a,o,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(I,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,i=E.p,E.p=2,o=K,K|=4;try{al(e,t,n)}finally{K=o,E.p=i,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Er(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Tr(s.ownerDocument.documentElement,s)){if(c!==null&&Dr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=wr(s,h),v=wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Oe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),rt(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=rt(su),r=T.T,i=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(s(331));var c=K;if(K|=4,Pl(a.current),El(a,a.current,o,n),K=c,id(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,a)}catch{}return!0}finally{E.p=i,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=_i(n,t),t=Qs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(Ze(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=_i(n,e),n=$s(2),r=Ha(t,n,2),r!==null&&(ec(n,r,t,e),Ze(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>ke()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Ye()),e=ni(e,t),e!==null&&(Ze(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Te(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ke(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=ke(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Je(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Ke(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ee(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ee(r),rt(n)){case 2:case 8:n=je;break;case 32:n=I;break;case 268435456:n=Ne;break;default:n=I}return r=cd.bind(null,e),n=Te(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ee(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ke(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,ke()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Te(Ae,ad):od()})}function dd(){if(nd===0){var e=ua;e===0&&(e=Ue,Ue<<=1,!(Ue&261888)&&(Ue=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Qt(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ct]||null).action),o=r.submitter;o&&(t=(t=o[ct]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new xn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<qr.length;hd++){var gd=qr[hd];Jr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Jr(zr,`onAnimationEnd`),Jr(Br,`onAnimationIteration`),Jr(Vr,`onAnimationStart`),Jr(`dblclick`,`onDoubleClick`),Jr(`focusin`,`onFocus`),Jr(`focusout`,`onBlur`),Jr(Hr,`onTransitionRun`),Jr(Ur,`onTransitionStart`),Jr(Wr,`onTransitionCancel`),Jr(Gr,`onTransitionEnd`),Ct(`onMouseEnter`,[`mouseout`,`mouseover`]),Ct(`onMouseLeave`,[`mouseout`,`mouseover`]),Ct(`onPointerEnter`,[`pointerout`,`pointerover`]),Ct(`onPointerLeave`,[`pointerout`,`pointerover`]),R(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),R(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),R(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),R(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),R(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),R(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Yr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ut];n===void 0&&(n=t[ut]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,xt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!un||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=gt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}sn(function(){var r=a,i=tn(n),o=[];a:{var s=Kr.get(e);if(s!==void 0){var c=xn,u=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:c=Rn;break;case`focusin`:u=`focus`,c=kn;break;case`focusout`:u=`blur`,c=kn;break;case`beforeblur`:case`afterblur`:c=kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Dn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=On;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Bn;break;case zr:case Br:case Vr:c=An;break;case Gr:c=Vn;break;case`scroll`:case`scrollend`:c=Cn;break;case`wheel`:c=Hn;break;case`copy`:case`cut`:case`paste`:c=jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=zn;break;case`toggle`:case`beforetoggle`:c=Un}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=cn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==en&&(u=n.relatedTarget||n.fromElement)&&(gt(u)||u[lt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?gt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Dn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:vt(c),h=u==null?s:vt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,gt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?vt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=lr;else if(rr(s))if(ur)v=yr;else{v=_r;var y=gr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Yt(r.elementType)&&(v=lr):v=vr;if(v&&=v(e,r)){ir(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Vt(s,`number`,s.value)}switch(y=r?vt(r):window,e){case`focusin`:(rr(y)||y.contentEditable===`true`)&&(kr=y,Ar=r,jr=null);break;case`focusout`:jr=Ar=kr=null;break;case`mousedown`:Mr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Mr=!1,Nr(o,n,i);break;case`selectionchange`:if(Or)break;case`keydown`:case`keyup`:Nr(o,n,i)}var b;if(Gn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else $n?Zn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Jn&&n.locale!==`ko`&&($n||x!==`onCompositionStart`?x===`onCompositionEnd`&&$n&&(b=hn()):(fn=i,pn=`value`in fn?fn.value:fn.textContent,$n=!0)),y=Ed(r,x),0<y.length&&(x=new Mn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=Qn(n),b!==null&&(x.data=b)))),(b=qn?er(e,n):tr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Mn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=cn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=cn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=cn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=cn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Gt(e,``+r);break;case`className`:kt(e,`class`,r);break;case`tabIndex`:kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:kt(e,n,r);break;case`style`:Jt(e,r,a);break;case`data`:if(t!==`object`){kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Qt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Qt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ot(e,`popover`,r);break;case`xlinkActuate`:At(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:At(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:At(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:At(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:At(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:At(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ot(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Xt.get(n)||n,Ot(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:Jt(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Gt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Gt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=$t);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ct]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ot(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Bt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Ht(e,!!r,n,!0):Ht(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Wt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(Yt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}zt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Ht(e,!!n,n?[]:``,!1):Ht(e,!!n,t,!0)):Ht(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Ut(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Yt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[mt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),ht(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[mt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ht(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=_t(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Rt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Rt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Rt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Rt(n.imageSizes)+`"]`)):i+=`[href="`+Rt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Rt(r)+`"][href="`+Rt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),bt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=yt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);bt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=he.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=yt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=yt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=yt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Rt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),bt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Rt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Rt(n.href)+`"]`);if(r)return t.instance=r,bt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),bt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,bt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),bt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,bt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),bt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[mt]||a[st]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,bt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(hu(n,e,t),Ua(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=nt(t);var n=ni(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=_t(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=L(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=ke()+500,id(0,!1))}}break;case 31:case 13:s=ni(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=tn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=gt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(F()){case Ae:return 2;case je:return 8;case I:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=_t(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=gt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,at(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);en=r,n.target.dispatchEvent(r),en=null}else return t=_t(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=_t(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ct]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ct]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[lt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=it();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.6`)throw Error(s(527,Lp,`19.2.6`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),Le=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=qs,a=Js,o=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[lt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),f=e(((e,t)=>{t.exports=d()}))(),p={bg:`#070710`,s1:`#0d0d1a`,s2:`#12121f`,border:`#1e1e38`,text:`#e2e4f3`,muted:`#5a5a7a`,brute:`#e05a6f`,better:`#e89a2a`,opt:`#29cc7a`,accent:`#5b8df5`,purple:`#9b72e8`},m={brute:{color:p.brute,label:`Brute Force`,icon:`🔴`},better:{color:p.better,label:`Better`,icon:`🟡`},opt:{color:p.opt,label:`Optimized`,icon:`🟢`}},h=[`js`,`py`,`cpp`,`java`],g={js:`JavaScript`,py:`Python`,cpp:`C++`,java:`Java`};function _(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Basic bubble sort — always runs all passes`,ln:0});for(let e=0;e<n-1;e++){for(let a=0;a<n-e-1;a++)r.push({a:[...t],hi:[a,a+1],sw:[],done:[...i],msg:`Compare a[${a}]=${t[a]} vs a[${a+1}]=${t[a+1]}`,ln:3}),t[a]>t[a+1]&&([t[a],t[a+1]]=[t[a+1],t[a]],r.push({a:[...t],hi:[],sw:[a,a+1],done:[...i],msg:`Swap!`,ln:4}));i.add(n-1-e),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Pass ${e+1} done`,ln:2})}return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted!`,ln:7}),r}function v(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Bubble + early exit flag`,ln:0});for(let e=0;e<n-1;e++){let a=!1;for(let o=0;o<n-e-1;o++)r.push({a:[...t],hi:[o,o+1],sw:[],done:[...i],msg:`Compare a[${o}]=${t[o]} vs a[${o+1}]=${t[o+1]}`,ln:3}),t[o]>t[o+1]&&([t[o],t[o+1]]=[t[o+1],t[o]],a=!0,r.push({a:[...t],hi:[],sw:[o,o+1],done:[...i],msg:`Swap! swapped=true`,ln:4}));if(i.add(n-1-e),!a){for(let e=0;e<n;e++)i.add(e);return r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`No swaps — EARLY EXIT ✓`,ln:7}),r}r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Pass ${e+1} done, swapped=${a}`,ln:2})}return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted!`,ln:9}),r}function y(e){let t=[...e],n=t.length,r=[],i=new Set,a=n-1;for(r.push({a:[...t],hi:[],sw:[],done:[],msg:`Track last swap → shrinks inner loop each pass`,ln:0});a>0;){let e=0;for(let n=0;n<a;n++)r.push({a:[...t],hi:[n,n+1],sw:[],done:[...i],msg:`Compare a[${n}]=${t[n]} vs a[${n+1}]=${t[n+1]}`,ln:3}),t[n]>t[n+1]&&([t[n],t[n+1]]=[t[n+1],t[n]],e=n+1,r.push({a:[...t],hi:[],sw:[n,n+1],done:[...i],msg:`Swap! lastSwap=${e}`,ln:4}));for(let t=e;t<n;t++)i.add(t);a=e,r.push({a:[...t],hi:[],sw:[],done:[...i],msg:e>0?`Next limit=${e}`:`Done!`,ln:6})}for(let e=0;e<n;e++)i.add(e);return r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! Fewest comparisons`,ln:8}),r}function b(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Find minimum in unsorted part, swap to front`,ln:0});for(let e=0;e<n-1;e++){let a=e;r.push({a:[...t],hi:[e],sw:[],done:[...i],msg:`Pass ${e+1}: assume min=a[${e}]=${t[e]}`,ln:2});for(let o=e+1;o<n;o++)r.push({a:[...t],hi:[o,a],sw:[],done:[...i],msg:`a[${o}]=${t[o]} vs min=${t[a]}`,ln:4}),t[o]<t[a]&&(a=o,r.push({a:[...t],hi:[a],sw:[],done:[...i],msg:`New min: a[${a}]=${t[a]}`,ln:5}));a!==e&&([t[e],t[a]]=[t[a],t[e]],r.push({a:[...t],hi:[],sw:[e,a],done:[...i],msg:`Swap a[${e}]↔a[${a}]`,ln:7})),i.add(e),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Index ${e} sorted`,ln:8})}return i.add(n-1),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted!`,ln:10}),r}function x(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Stable selection: shift instead of swap`,ln:0});for(let e=0;e<n-1;e++){let a=e;for(let o=e+1;o<n;o++)r.push({a:[...t],hi:[o,a],sw:[],done:[...i],msg:`Find min in [${e}..${n-1}]`,ln:3}),t[o]<t[a]&&(a=o);if(a!==e){let n=t[a];r.push({a:[...t],hi:[e,a],sw:[],done:[...i],msg:`Shift elements right to place min=${n}`,ln:5});for(let n=a;n>e;n--)t[n]=t[n-1],r.push({a:[...t],hi:[],sw:[n],done:[...i],msg:`Shift a[${n-1}] right`,ln:6});t[e]=n,r.push({a:[...t],hi:[],sw:[e],done:[...i],msg:`Placed min=${n} at index ${e}`,ln:7})}i.add(e)}return i.add(n-1),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! (stable — relative order preserved)`,ln:9}),r}function ee(e){let t=[...e],n=t.length,r=[],i=new Set,a=0,o=n-1;for(r.push({a:[...t],hi:[],sw:[],done:[],msg:`Bidirectional: find min AND max each pass`,ln:0});a<o;){let e=a,n=a;r.push({a:[...t],hi:[a,o],sw:[],done:[...i],msg:`Scan [${a}..${o}] for min & max simultaneously`,ln:3});for(let s=a+1;s<=o;s++)r.push({a:[...t],hi:[s],sw:[],done:[...i],msg:`Check a[${s}]=${t[s]}`,ln:4}),t[s]<t[e]&&(e=s),t[s]>t[n]&&(n=s);r.push({a:[...t],hi:[e,n],sw:[],done:[...i],msg:`Min=a[${e}]=${t[e]}, Max=a[${n}]=${t[n]}`,ln:5}),e!==a&&([t[a],t[e]]=[t[e],t[a]],r.push({a:[...t],hi:[],sw:[a,e],done:[...i],msg:`Swap min to front`,ln:6}),n===a&&(n=e)),n!==o&&([t[o],t[n]]=[t[n],t[o]],r.push({a:[...t],hi:[],sw:[o,n],done:[...i],msg:`Swap max to back`,ln:7})),i.add(a),i.add(o),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Both ends sorted — half the passes!`,ln:8}),a++,o--}for(let e=0;e<n;e++)i.add(e);return r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! ~50% fewer passes`,ln:10}),r}function te(e){let t=[...e],n=t.length,r=[];r.push({a:[...t],hi:[],sw:[],done:[0],msg:`Insert each element into its correct position`,ln:0});for(let e=1;e<n;e++){let n=t[e],i=e-1;for(r.push({a:[...t],hi:[e],sw:[],done:Array.from({length:e},(e,t)=>t),msg:`Key=a[${e}]=${n}`,ln:2});i>=0&&t[i]>n;)r.push({a:[...t],hi:[i],sw:[],done:[],msg:`a[${i}]=${t[i]}>key, shift right`,ln:4}),t[i+1]=t[i],i--,r.push({a:[...t],hi:[],sw:[i+1],done:[],msg:`Shifted`,ln:5});t[i+1]=n,r.push({a:[...t],hi:[],sw:[i+1],done:Array.from({length:e+1},(e,t)=>t),msg:`Placed key=${n} at ${i+1}`,ln:7})}return r.push({a:[...t],hi:[],sw:[],done:Array.from({length:n},(e,t)=>t),msg:`✓ Sorted! O(n) best case`,ln:9}),r}function S(e){let t=[...e],n=t.length,r=[];r.push({a:[...t],hi:[],sw:[],done:[0],msg:`Binary insertion: use binary search to find position`,ln:0});for(let e=1;e<n;e++){let n=t[e];r.push({a:[...t],hi:[e],sw:[],done:Array.from({length:e},(e,t)=>t),msg:`Key=a[${e}]=${n} — binary search for position`,ln:2});let i=0,a=e-1;for(;i<=a;){let e=Math.floor((i+a)/2);r.push({a:[...t],hi:[e],sw:[],done:[],msg:`Binary: mid=${e}, a[${e}]=${t[e]} vs key=${n}`,ln:4}),t[e]<=n?i=e+1:a=e-1}r.push({a:[...t],hi:[i],sw:[],done:[],msg:`Insert position = ${i} (found in O(log i))`,ln:6});for(let n=e;n>i;n--)t[n]=t[n-1],r.push({a:[...t],hi:[],sw:[n],done:[],msg:`Shift right`,ln:7});t[i]=n,r.push({a:[...t],hi:[],sw:[i],done:Array.from({length:e+1},(e,t)=>t),msg:`Placed key=${n}`,ln:8})}return r.push({a:[...t],hi:[],sw:[],done:Array.from({length:n},(e,t)=>t),msg:`✓ Sorted! Fewer comparisons with binary search`,ln:10}),r}function C(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Shell Sort: insertion sort with decreasing gap`,ln:0});let a=Math.floor(n/2);for(;a>0;){r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Gap = ${a} — comparing elements ${a} apart`,ln:2});for(let e=a;e<n;e++){let n=t[e],o=e;for(r.push({a:[...t],hi:[e,e-a],sw:[],done:[...i],msg:`Compare a[${e}]=${t[e]} with a[${e-a}]=${t[e-a]} (gap=${a})`,ln:4});o>=a&&t[o-a]>n;)r.push({a:[...t],hi:[o-a],sw:[o],done:[...i],msg:`Shift a[${o-a}] right by gap=${a}`,ln:5}),t[o]=t[o-a],o-=a;t[o]=n,o!==e&&r.push({a:[...t],hi:[],sw:[o],done:[...i],msg:`Placed ${n} at ${o}`,ln:6})}if(a===1)for(let e=0;e<n;e++)i.add(e);r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`Gap ${a} pass done`,ln:7}),a=Math.floor(a/2)}return r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! Shell sort — O(n log n) average`,ln:9}),r}function ne(e){let t=[...e],n=[];n.push({a:[...t],hi:[],sw:[],done:[],msg:`Top-down recursive merge sort`,ln:0});function r(e,t,r,i){let a=e.slice(t,r+1),o=e.slice(r+1,i+1),s=0,c=0,l=t;for(n.push({a:[...e],hi:[t,i],sw:[],done:[],msg:`Merging [${t}..${r}] & [${r+1}..${i}]`,ln:8});s<a.length&&c<o.length;)n.push({a:[...e],hi:[t+s,r+1+c],sw:[],done:[],msg:`${a[s]} vs ${o[c]}`,ln:10}),a[s]<=o[c]?e[l++]=a[s++]:e[l++]=o[c++],n.push({a:[...e],hi:[],sw:[l-1],done:[],msg:`Placed ${e[l-1]}`,ln:11});for(;s<a.length;)e[l++]=a[s++],n.push({a:[...e],hi:[],sw:[l-1],done:[],msg:`Copy L`,ln:12});for(;c<o.length;)e[l++]=o[c++],n.push({a:[...e],hi:[],sw:[l-1],done:[],msg:`Copy R`,ln:12});n.push({a:[...e],hi:[],sw:[],done:Array.from({length:i-t+1},(e,n)=>t+n),msg:`Merged [${t}..${i}]`,ln:13})}function i(e,t,a){if(t<a){let o=Math.floor((t+a)/2);n.push({a:[...e],hi:[t,a],sw:[],done:[],msg:`Divide [${t}..${a}] mid=${o}`,ln:3}),i(e,t,o),i(e,o+1,a),r(e,t,o,a)}}return i(t,0,t.length-1),n.push({a:[...t],hi:[],sw:[],done:Array.from({length:t.length},(e,t)=>t),msg:`✓ Sorted!`,ln:16}),n}function re(e){let t=[...e],n=t.length,r=[];r.push({a:[...t],hi:[],sw:[],done:[],msg:`Bottom-up: no recursion, merge pairs iteratively`,ln:0});for(let e=1;e<n;e*=2){r.push({a:[...t],hi:[],sw:[],done:[],msg:`Merge subarrays of size ${e}`,ln:3});for(let i=0;i<n-1;i+=2*e){let a=Math.min(i+e-1,n-1),o=Math.min(i+2*e-1,n-1);if(a<o){let e=t.slice(i,a+1),n=t.slice(a+1,o+1),s=0,c=0,l=i;for(r.push({a:[...t],hi:[i,o],sw:[],done:[],msg:`Merge [${i}..${a}] & [${a+1}..${o}]`,ln:5});s<e.length&&c<n.length;)e[s]<=n[c]?t[l++]=e[s++]:t[l++]=n[c++],r.push({a:[...t],hi:[],sw:[l-1],done:[],msg:`Placed ${t[l-1]}`,ln:7});for(;s<e.length;)t[l++]=e[s++];for(;c<n.length;)t[l++]=n[c++]}}}return r.push({a:[...t],hi:[],sw:[],done:Array.from({length:n},(e,t)=>t),msg:`✓ Sorted! No recursion stack`,ln:10}),r}function ie(e){let t=[...e],n=t.length,r=[];r.push({a:[...t],hi:[],sw:[],done:[],msg:`Hybrid: Insertion Sort for n≤4, Merge for rest`,ln:0});function i(e,t,n){for(let i=t+1;i<=n;i++){let a=e[i],o=i-1;for(r.push({a:[...e],hi:[i],sw:[],done:[],msg:`Insertion in [${t}..${n}]`,ln:3});o>=t&&e[o]>a;)e[o+1]=e[o],o--;e[o+1]=a}}function a(e,t,n,i){let a=e.slice(t,n+1),o=e.slice(n+1,i+1),s=0,c=0,l=t;for(r.push({a:[...e],hi:[t,i],sw:[],done:[],msg:`Merge [${t}..${n}] & [${n+1}..${i}]`,ln:7});s<a.length&&c<o.length;)a[s]<=o[c]?e[l++]=a[s++]:e[l++]=o[c++],r.push({a:[...e],hi:[],sw:[l-1],done:[],msg:`Placed ${e[l-1]}`,ln:8});for(;s<a.length;)e[l++]=a[s++];for(;c<o.length;)e[l++]=o[c++];r.push({a:[...e],hi:[],sw:[],done:Array.from({length:i-t+1},(e,n)=>t+n),msg:`Merged`,ln:9})}function o(e,t,n){if(n-t<=4)r.push({a:[...e],hi:[t,n],sw:[],done:[],msg:`n=${n-t+1}≤4: use Insertion Sort`,ln:2}),i(e,t,n);else{let i=Math.floor((t+n)/2);r.push({a:[...e],hi:[t,n],sw:[],done:[],msg:`n=${n-t+1}>4: divide at ${i}`,ln:5}),o(e,t,i),o(e,i+1,n),a(e,t,i,n)}}return o(t,0,n-1),r.push({a:[...t],hi:[],sw:[],done:Array.from({length:n},(e,t)=>t),msg:`✓ Sorted! (TimSort concept)`,ln:11}),r}function ae(e,t,n,r,i){let a=e[n],o=t-1;r.push({a:[...e],hi:[n],sw:[],done:[],msg:`Pivot = a[${n}] = ${a}`,ln:3});for(let i=t;i<n;i++)r.push({a:[...e],hi:[i,n],sw:[],done:[],msg:`a[${i}]=${e[i]} vs pivot=${a}`,ln:5}),e[i]<=a&&(o++,o!==i&&([e[o],e[i]]=[e[i],e[o]],r.push({a:[...e],hi:[],sw:[o,i],done:[],msg:`Swap a[${o}]↔a[${i}]`,ln:6})));return[e[o+1],e[n]]=[e[n],e[o+1]],r.push({a:[...e],hi:[],sw:[o+1,n],done:[o+1],msg:`Pivot ${a} placed at index ${o+1}`,ln:8}),o+1}function oe(e){let t=[...e],n=[],r=new Set;n.push({a:[...t],hi:[],sw:[],done:[],msg:`Quick Sort: last element as pivot (Lomuto)`,ln:0});function i(e,a){if(e<a){n.push({a:[...t],hi:[e,a],sw:[],done:[...r],msg:`Partition [${e}..${a}]`,ln:2});let o=ae(t,e,a,n);r.add(o),i(e,o-1),i(o+1,a)}}i(0,t.length-1);for(let e=0;e<t.length;e++)r.add(e);return n.push({a:[...t],hi:[],sw:[],done:[...r],msg:`✓ Sorted!`,ln:10}),n}function se(e){let t=[...e],n=[],r=new Set;n.push({a:[...t],hi:[],sw:[],done:[],msg:`Quick Sort: random pivot — avoids worst case`,ln:0});function i(e,a){if(e<a){let o=e+Math.floor(Math.random()*(a-e+1));n.push({a:[...t],hi:[o],sw:[],done:[...r],msg:`Random pivot index=${o}, val=${t[o]}`,ln:2}),[t[o],t[a]]=[t[a],t[o]],n.push({a:[...t],hi:[],sw:[o,a],done:[...r],msg:`Swap pivot to end`,ln:3});let s=ae(t,e,a,n);r.add(s),i(e,s-1),i(s+1,a)}}i(0,t.length-1);for(let e=0;e<t.length;e++)r.add(e);return n.push({a:[...t],hi:[],sw:[],done:[...r],msg:`✓ Sorted! O(n log n) expected`,ln:10}),n}function ce(e){let t=[...e],n=[],r=new Set;n.push({a:[...t],hi:[],sw:[],done:[],msg:`3-Way Partition (Dutch National Flag) — handles duplicates`,ln:0});function i(e,a){if(e>=a)return;let o=t[e],s=e,c=a,l=e+1;for(n.push({a:[...t],hi:[e],sw:[],done:[...r],msg:`Pivot=${o}, split into <${o} | =${o} | >${o}`,ln:2});l<=c;)n.push({a:[...t],hi:[l],sw:[],done:[...r],msg:`a[${l}]=${t[l]}: ${t[l]<o?`< lt`:``}${t[l]===o?`= skip`:``}${t[l]>o?`> swap with gt`:``}`,ln:4}),t[l]<o?([t[s],t[l]]=[t[l],t[s]],n.push({a:[...t],hi:[],sw:[s,l],done:[...r],msg:`<pivot: swap a[${s}]↔a[${l}]`,ln:5}),s++,l++):t[l]>o?([t[l],t[c]]=[t[c],t[l]],n.push({a:[...t],hi:[],sw:[l,c],done:[...r],msg:`>pivot: swap a[${l}]↔a[${c}]`,ln:6}),c--):l++;for(let e=s;e<=c;e++)r.add(e);n.push({a:[...t],hi:[],sw:[],done:[...r],msg:`Partitioned: [<${o}][=${o}][>${o}]`,ln:8}),i(e,s-1),i(c+1,a)}i(0,t.length-1);for(let e=0;e<t.length;e++)r.add(e);return n.push({a:[...t],hi:[],sw:[],done:[...r],msg:`✓ Sorted! Equal elements grouped — great for duplicates`,ln:10}),n}function w(e,t,n,r,i){let a=n,o=2*n+1,s=2*n+2;r.push({a:[...e],hi:[n,o<t?o:-1,s<t?s:-1].filter(e=>e>=0),sw:[],done:[...i],msg:`Heapify: parent a[${n}]=${e[n]}, children=${o<t?e[o]:`∅`},${s<t?e[s]:`∅`}`,ln:4}),o<t&&e[o]>e[a]&&(a=o),s<t&&e[s]>e[a]&&(a=s),a!==n&&([e[n],e[a]]=[e[a],e[n]],r.push({a:[...e],hi:[],sw:[n,a],done:[...i],msg:`Swap a[${n}]↔a[${a}]`,ln:5}),w(e,t,a,r,i))}function le(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Heap Sort: build max-heap from bottom up`,ln:0});for(let e=Math.floor(n/2)-1;e>=0;e--)r.push({a:[...t],hi:[e],sw:[],done:[],msg:`Build heap: siftDown(${e})`,ln:2}),w(t,n,e,r,i);r.push({a:[...t],hi:[],sw:[],done:[],msg:`Max-heap built! Now extract elements`,ln:6});for(let e=n-1;e>0;e--)r.push({a:[...t],hi:[0,e],sw:[],done:[...i],msg:`Swap max a[0]=${t[0]} to position ${e}`,ln:8}),[t[0],t[e]]=[t[e],t[0]],i.add(e),r.push({a:[...t],hi:[],sw:[0,e],done:[...i],msg:`Heapify remaining [0..${e-1}]`,ln:9}),w(t,e,0,r,i);return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! O(n log n) always`,ln:11}),r}function ue(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Floyd's O(n) heapification — start from last non-leaf`,ln:0});let a=Math.floor(n/2)-1;r.push({a:[...t],hi:[a],sw:[],done:[],msg:`Last non-leaf = index ${a}, build heap downward`,ln:2});for(let e=a;e>=0;e--)r.push({a:[...t],hi:[e],sw:[],done:[],msg:`SiftDown index ${e} — O(n) total (not O(n log n)!)`,ln:3}),w(t,n,e,r,i);r.push({a:[...t],hi:[],sw:[],done:[],msg:`Heap built in O(n) — now extract O(n log n)`,ln:7});for(let e=n-1;e>0;e--)[t[0],t[e]]=[t[e],t[0]],i.add(e),r.push({a:[...t],hi:[],sw:[0,e],done:[...i],msg:`Extract max, heapify remaining`,ln:9}),w(t,e,0,r,i);return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! Floyd's build is O(n), not O(n log n)`,ln:11}),r}function T(e){let t=[...e],n=t.length,r=[],i=new Set;r.push({a:[...t],hi:[],sw:[],done:[],msg:`Optimized: skip leaf nodes in heapify phase`,ln:0});let a=Math.floor(n/2)-1,o=a+1;r.push({a:[...t],hi:[...Array.from({length:n-o},(e,t)=>o+t)],sw:[],done:[],msg:`Indices ${o}..${n-1} are leaves — skip them!`,ln:2});for(let e=a;e>=0;e--)w(t,n,e,r,i);r.push({a:[...t],hi:[],sw:[],done:[],msg:`Heap built (only non-leaves processed). Extracting...`,ln:6});for(let e=n-1;e>0;e--)[t[0],t[e]]=[t[e],t[0]],i.add(e),w(t,e,0,r,i);return i.add(0),r.push({a:[...t],hi:[],sw:[],done:[...i],msg:`✓ Sorted! Skip leaf optimization`,ln:10}),r}function E(e,t){let n=[{arr:e,cur:-1,l:-1,r:-1,found:-1,msg:`Linear: scan every element for ${t}`,ln:0}];for(let r=0;r<e.length;r++)if(n.push({arr:e,cur:r,l:-1,r:-1,found:-1,msg:`Check arr[${r}]=${e[r]}`,ln:2}),e[r]===t)return n.push({arr:e,cur:r,l:-1,r:-1,found:r,msg:`✓ Found ${t} at index ${r}!`,ln:3}),n;return n.push({arr:e,cur:-1,l:-1,r:-1,found:-2,msg:`✗ Not found`,ln:5}),n}function de(e,t){let n=[...e];n[n.length-1],n.push(t);let r=[{arr:[...n],cur:-1,l:-1,r:-1,found:-1,msg:`Sentinel: append ${t} to end — skip bounds check`,ln:0}],i=0;for(;n[i]!==t;)r.push({arr:[...n],cur:i,l:-1,r:-1,found:-1,msg:`arr[${i}]=${n[i]}≠${t} (no bounds check needed!)`,ln:3}),i++;return i<e.length?r.push({arr:[...n],cur:i,l:-1,r:-1,found:i,msg:`✓ Found at index ${i}! (not the sentinel)`,ln:5}):r.push({arr:[...n],cur:i,l:-1,r:-1,found:-2,msg:`Hit sentinel at ${i} — not in original array`,ln:7}),r}function fe(e,t){let n=[...e],r=[{arr:[...n],cur:-1,l:-1,r:-1,found:-1,msg:`Transposition: move found element forward for faster future searches`,ln:0}];for(let e=0;e<n.length;e++)if(r.push({arr:[...n],cur:e,l:-1,r:-1,found:-1,msg:`Check arr[${e}]=${n[e]}`,ln:2}),n[e]===t)return r.push({arr:[...n],cur:e,l:-1,r:-1,found:e,msg:`✓ Found ${t} at index ${e}!`,ln:3}),e>0&&([n[e],n[e-1]]=[n[e-1],n[e]],r.push({arr:[...n],cur:e-1,l:-1,r:-1,found:e-1,msg:`Swapped forward → future searches find it faster!`,ln:4})),r;return r.push({arr:[...n],cur:-1,l:-1,r:-1,found:-2,msg:`✗ Not found`,ln:6}),r}function pe(e,t){let n=[...e].sort((e,t)=>e-t),r=0,i=n.length-1,a=[{arr:n,cur:-1,l:r,r:i,found:-1,msg:`Binary Search (iterative) for ${t}`,ln:0}];for(;r<=i;){let e=Math.floor((r+i)/2);if(a.push({arr:n,cur:e,l:r,r:i,found:-1,msg:`mid=${e}, arr[${e}]=${n[e]}`,ln:4}),n[e]===t)return a.push({arr:n,cur:e,l:r,r:i,found:e,msg:`✓ Found at ${e}!`,ln:5}),a;n[e]<t?(a.push({arr:n,cur:e,l:e+1,r:i,found:-1,msg:`${n[e]}<${t}: discard left half`,ln:6}),r=e+1):(a.push({arr:n,cur:e,l:r,r:e-1,found:-1,msg:`${n[e]}>${t}: discard right half`,ln:7}),i=e-1)}return a.push({arr:n,cur:-1,l:r,r:i,found:-2,msg:`✗ Not found`,ln:9}),a}function me(e,t){let n=[...e].sort((e,t)=>e-t),r=[{arr:n,cur:-1,l:0,r:n.length-1,found:-1,msg:`Binary Search (recursive) for ${t}`,ln:0}],i=-2;function a(e,o){if(e>o){r.push({arr:n,cur:-1,l:e,r:o,found:-2,msg:`l>r: base case, not found`,ln:2});return}let s=Math.floor((e+o)/2);if(r.push({arr:n,cur:s,l:e,r:o,found:-1,msg:`search(${e},${o}): mid=${s}, arr[${s}]=${n[s]}`,ln:4}),n[s]===t){i=s,r.push({arr:n,cur:s,l:e,r:o,found:s,msg:`✓ Found at ${s}!`,ln:5});return}n[s]<t?(r.push({arr:n,cur:s,l:s+1,r:o,found:-1,msg:`Recurse right: search(${s+1},${o})`,ln:6}),a(s+1,o)):(r.push({arr:n,cur:s,l:e,r:s-1,found:-1,msg:`Recurse left: search(${e},${s-1})`,ln:7}),a(e,s-1))}return a(0,n.length-1),i<0&&r.push({arr:n,cur:-1,l:0,r:n.length-1,found:-2,msg:`✗ Not found`,ln:9}),r}function D(e,t){let n=[...e].sort((e,t)=>e-t),r=n.length,i=[{arr:n,cur:-1,l:0,r:r-1,found:-1,msg:`Exponential Search: find range, then binary search`,ln:0}];if(n[0]===t)return i.push({arr:n,cur:0,l:0,r:0,found:0,msg:`✓ Found at index 0!`,ln:2}),i;let a=1;for(i.push({arr:n,cur:a,l:0,r:r-1,found:-1,msg:`Start with i=1, double each step`,ln:3});a<r&&n[a]<=t;)i.push({arr:n,cur:a,l:0,r:r-1,found:-1,msg:`arr[${a}]=${n[a]} ≤ ${t}: double i=${a*2}`,ln:4}),a*=2;let o=Math.floor(a/2),s=Math.min(a,r-1);i.push({arr:n,cur:-1,l:o,r:s,found:-1,msg:`Range found! Binary search in [${o}..${s}]`,ln:6});let c=o,l=s;for(;c<=l;){let e=Math.floor((c+l)/2);if(i.push({arr:n,cur:e,l:c,r:l,found:-1,msg:`Binary: mid=${e}, arr[${e}]=${n[e]}`,ln:8}),n[e]===t)return i.push({arr:n,cur:e,l:c,r:l,found:e,msg:`✓ Found at ${e}!`,ln:9}),i;n[e]<t?c=e+1:l=e-1}return i.push({arr:n,cur:-1,l:c,r:l,found:-2,msg:`✗ Not found`,ln:11}),i}function O(e,t){let n=[...e].sort((e,t)=>e-t),r=n.length,i=Math.floor(Math.sqrt(r)),a=0,o=i,s=[{arr:n,cur:-1,l:0,r:i,found:-1,msg:`Jump: step=√${r}≈${i}`,ln:0}];for(;o<r&&n[Math.min(o,r-1)]<t;)s.push({arr:n,cur:Math.min(o,r-1),l:a,r:Math.min(o,r-1),found:-1,msg:`Jump to ${Math.min(o,r-1)}: ${n[Math.min(o,r-1)]}<${t}`,ln:4}),a=o,o+=i;let c=Math.min(o,r-1);s.push({arr:n,cur:-1,l:a,r:c,found:-1,msg:`Block [${a}..${c}]: linear scan`,ln:7});for(let e=a;e<=c;e++)if(s.push({arr:n,cur:e,l:a,r:c,found:-1,msg:`Check arr[${e}]=${n[e]}`,ln:8}),n[e]===t)return s.push({arr:n,cur:e,l:a,r:c,found:e,msg:`✓ Found at ${e}!`,ln:9}),s;return s.push({arr:n,cur:-1,l:-1,r:-1,found:-2,msg:`✗ Not found`,ln:11}),s}function k(e,t){let n=[...e].sort((e,t)=>e-t),r=n.length,i=[{arr:n,cur:-1,l:0,r:r-1,found:-1,msg:`Fibonacci Search: uses Fibonacci numbers as jump sizes`,ln:0}],a=0,o=1,s=o+a;for(;s<r;)a=o,o=s,s=o+a;let c=-1;for(i.push({arr:n,cur:-1,l:0,r:r-1,found:-1,msg:`Fibonacci ${s} covers array of size ${r}`,ln:3});s>1;){let e=Math.min(c+a,r-1);if(i.push({arr:n,cur:e,l:0,r:r-1,found:-1,msg:`Check arr[${e}]=${n[e]} (fib step=${a})`,ln:5}),n[e]<t)s=o,o=a,a=s-o,c=e,i.push({arr:n,cur:e,l:e,r:r-1,found:-1,msg:`arr[${e}]<${t}: eliminate left`,ln:6});else if(n[e]>t)s=a,o-=a,a=s-o,i.push({arr:n,cur:e,l:0,r:e,found:-1,msg:`arr[${e}]>${t}: eliminate right`,ln:7});else return i.push({arr:n,cur:e,l:0,r:r-1,found:e,msg:`✓ Found at ${e}!`,ln:8}),i}return o&&n[c+1]===t?(i.push({arr:n,cur:c+1,l:0,r:r-1,found:c+1,msg:`✓ Found at ${c+1}!`,ln:9}),i):(i.push({arr:n,cur:-1,l:-1,r:-1,found:-2,msg:`✗ Not found`,ln:11}),i)}function A(e,t){let n=[...e].sort((e,t)=>e-t),r=0,i=n.length-1,a=[{arr:n,cur:-1,l:r,r:i,found:-1,msg:`Interpolation: estimate position by value distribution`,ln:0}];for(;r<=i&&t>=n[r]&&t<=n[i];){if(r===i){if(n[r]===t)return a.push({arr:n,cur:r,l:r,r:i,found:r,msg:`✓ Found at ${r}!`,ln:3}),a;break}let e=r+Math.floor((t-n[r])/(n[i]-n[r])*(i-r));if(a.push({arr:n,cur:e,l:r,r:i,found:-1,msg:`Estimate: pos=${e}, arr[${e}]=${n[e]} (formula: ${r}+((${t}-${n[r]})/(${n[i]}-${n[r]}))×(${i}-${r}))`,ln:2}),n[e]===t)return a.push({arr:n,cur:e,l:r,r:i,found:e,msg:`✓ Found at ${e}!`,ln:4}),a;n[e]<t?(a.push({arr:n,cur:e,l:e+1,r:i,found:-1,msg:`arr[${e}]<${t}: search right`,ln:5}),r=e+1):(a.push({arr:n,cur:e,l:r,r:e-1,found:-1,msg:`arr[${e}]>${t}: search left`,ln:6}),i=e-1)}return a.push({arr:n,cur:-1,l:r,r:i,found:-2,msg:`✗ Not found`,ln:8}),a}function he(e,t){let n=[{arr:e,p1:-1,p2:-1,found:[],map:{},msg:`Two Sum=${t}: O(n²) try every pair`,ln:0}];for(let r=0;r<e.length-1;r++)for(let i=r+1;i<e.length;i++)if(n.push({arr:e,p1:r,p2:i,found:[],map:{},msg:`${e[r]}+${e[i]}=${e[r]+e[i]}`,ln:3}),e[r]+e[i]===t)return n.push({arr:e,p1:r,p2:i,found:[r,i],map:{},msg:`✓ Found [${r},${i}]`,ln:4}),n;return n.push({arr:e,p1:-1,p2:-1,found:[],map:{},msg:`✗ No pair`,ln:6}),n}function j(e,t){let n=[...e].sort((e,t)=>e-t),r=0,i=n.length-1,a=[{arr:n,p1:r,p2:i,found:[],map:{},msg:`Sort + Two Pointers`,ln:0}];for(;r<i;){let e=n[r]+n[i];if(a.push({arr:n,p1:r,p2:i,found:[],map:{},msg:`${n[r]}+${n[i]}=${e}`,ln:4}),e===t)return a.push({arr:n,p1:r,p2:i,found:[r,i],map:{},msg:`✓ [${r},${i}]`,ln:5}),a;e<t?r++:i--,a.push({arr:n,p1:r,p2:i,found:[],map:{},msg:e<t?`Sum<${t}, L→`:`Sum>${t}, ←R`,ln:7})}return a.push({arr:n,p1:r,p2:i,found:[],map:{},msg:`✗ Not found`,ln:9}),a}function M(e,t){let n={},r=[{arr:e,p1:-1,p2:-1,found:[],map:{},msg:`HashMap: single pass O(n)`,ln:0}];for(let i=0;i<e.length;i++){let a=t-e[i];if(r.push({arr:e,p1:i,p2:-1,found:[],map:{...n},msg:`Need ${a}`,ln:3}),a in n)return r.push({arr:e,p1:i,p2:n[a],found:[n[a],i],map:{...n},msg:`✓ [${n[a]},${i}]`,ln:4}),r;n[e[i]]=i,r.push({arr:e,p1:i,p2:-1,found:[],map:{...n},msg:`Store ${e[i]}→${i}`,ln:6})}return r.push({arr:e,p1:-1,p2:-1,found:[],map:{},msg:`✗ Not found`,ln:8}),r}function ge(e){let t=0,n=[{active:-1,memo:{},table:null,calls:0,result:null,msg:`fib(${e}) naive recursion O(2ⁿ)`,ln:0}];function r(e){if(t++,n.push({active:e,memo:{},table:null,calls:t,result:null,msg:`fib(${e}) called — total:${t}`,ln:1}),e<=1)return n.push({active:e,memo:{},table:null,calls:t,result:e,msg:`Base: fib(${e})=${e}`,ln:2}),e;let i=r(e-1),a=r(e-2),o=i+a;return n.push({active:e,memo:{},table:null,calls:t,result:o,msg:`fib(${e})=${i}+${a}=${o}`,ln:3}),o}let i=r(e);return n.push({active:-1,memo:{},table:null,calls:t,result:i,msg:`✓ fib(${e})=${i} — ${t} calls!`,ln:4}),n}function _e(e){let t={},n=[{active:-1,memo:{},table:null,calls:0,result:null,msg:`fib(${e}) memoization O(n)`,ln:0}];function r(e){if(e in t)return n.push({active:e,memo:{...t},table:null,calls:0,result:t[e],msg:`Cache hit! memo[${e}]=${t[e]}`,ln:1}),t[e];if(n.push({active:e,memo:{...t},table:null,calls:0,result:null,msg:`Compute fib(${e})`,ln:3}),e<=1)return t[e]=e,n.push({active:e,memo:{...t},table:null,calls:0,result:e,msg:`Base fib(${e})=${e}`,ln:4}),e;let i=r(e-1)+r(e-2);return t[e]=i,n.push({active:e,memo:{...t},table:null,calls:0,result:i,msg:`fib(${e})=${i} cached`,ln:6}),i}let i=r(e);return n.push({active:-1,memo:{...t},table:null,calls:0,result:i,msg:`✓ fib(${e})=${i} — ${Object.keys(t).length} unique`,ln:8}),n}function ve(e){let t=Math.max(e+1,2),n=Array(t).fill(0);n[0]=0,e>=1&&(n[1]=1);let r=[{active:-1,memo:{},table:[...n],calls:0,result:null,msg:`fib(${e}) DP O(1) space`,ln:2}];for(let t=2;t<=e;t++)n[t]=n[t-1]+n[t-2],r.push({active:t,memo:{},table:[...n],calls:0,result:null,msg:`dp[${t}]=${n[t-1]}+${n[t-2]}=${n[t]}`,ln:4});return r.push({active:-1,memo:{},table:[...n],calls:0,result:n[e],msg:`✓ fib(${e})=${n[e]} O(1) space!`,ln:6}),r}var N=(e,t,n,r)=>({js:e,py:t,cpp:n,java:r}),P={bubbleBasic:N(`function bubbleSort(arr) {
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
} // O(n²)`),bubbleFlag:N(`function bubbleSort(arr) {
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
}`),bubbleLastSwap:N(`function bubbleSort(arr) {
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
}`),selBasic:N(`function selectionSort(arr) {
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
}`),selStable:N(`function selectionSortStable(arr) {
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
}`),selBidir:N(`function selectionSortBidir(arr) {
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
}`),insBasic:N(`function insertionSort(arr) {
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
}`),insBinary:N(`function insertionSortBinary(arr) {
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
}`),shellSort:N(`function shellSort(arr) {
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
}`),mergeTopDown:N(`function mergeSort(arr) {
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
}`),mergeBottomUp:N(`function mergeSort(arr) {
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
}`),mergeHybrid:N(`const K = 4; // threshold
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
// Hybrid like TimSort`),quickLast:N(`function quickSort(arr, lo=0, hi=arr.length-1) {
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
// O(n²) worst for sorted`),quickRandom:N(`function quickSort(arr, lo=0, hi=arr.length-1) {
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
}`),quick3Way:N(`function quickSort3(arr, lo=0, hi=arr.length-1) {
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
}`),heapBasic:N(`function heapSort(arr) {
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
}`),heapFloyd:N(`// Floyd's O(n) build — more efficient!
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
}`),heapOpt:N(`// Skip leaf nodes in heapify
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
}`),linBasic:N(`function linearSearch(arr, target) {
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
}`),linSentinel:N(`function linearSearchSentinel(arr, target) {
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
}`),linTranspose:N(`// Move-to-front: found item moves forward
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
}`),binIter:N(`function binarySearch(arr, target) {
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
}`),binRecur:N(`function binarySearch(arr, target, lo=0, hi=arr.length-1) {
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
}`),binExponential:N(`function exponentialSearch(arr, target) {
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
}`),jumpBasic:N(`function jumpSearch(arr, target) {
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
}`),fibSearch:N(`function fibonacciSearch(arr, target) {
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
}`),interpolation:N(`function interpolationSearch(arr, target) {
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
}`),tsBrute:N(`function twoSum(nums,target){
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
}`),tsTwo:N(`function twoSum(nums,target){
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
}`),tsHash:N(`function twoSum(nums,target){
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
}`),fibRec:N(`function fib(n){
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
// O(2^n) — exponential!`),fibMemo:N(`function fib(n,m={}){
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
}`),fibDP:N(`function fib(n){
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
// O(1) space!`)};function ye(e){let t=e,n=t.length,r=[],i=-1/0,a=0,o=0;r.push({a:[...t],window:[],maxWindow:[],curSum:0,maxSum:-1/0,msg:`Check ALL subarrays O(n³)`,ln:0});for(let e=0;e<n;e++)for(let s=e;s<n;s++){let n=0,c=[];for(let r=e;r<=s;r++)n+=t[r],c.push(r);r.push({a:[...t],window:c,maxWindow:[...Array.from({length:o-a+1},(e,t)=>a+t)],curSum:n,maxSum:i,msg:`Sum a[${e}..${s}]=${n}`,ln:4}),n>i&&(i=n,a=e,o=s,r.push({a:[...t],window:c,maxWindow:[...c],curSum:n,maxSum:i,msg:`New max! sum=${n} at [${e}..${s}]`,ln:5}))}return r.push({a:[...t],window:[],maxWindow:Array.from({length:o-a+1},(e,t)=>a+t),curSum:0,maxSum:i,msg:`✓ Max subarray sum = ${i}`,ln:7}),r}function be(e){let t=e,n=t.length,r=[],i=-1/0,a=0,o=0;r.push({a:[...t],window:[],maxWindow:[],curSum:0,maxSum:-1/0,msg:`Prefix sums: fix start, extend end O(n²)`,ln:0});for(let e=0;e<n;e++){let s=0;r.push({a:[...t],window:[e],maxWindow:[...Array.from({length:o-a+1},(e,t)=>a+t)],curSum:0,maxSum:i,msg:`Fix start at i=${e}`,ln:2});for(let c=e;c<n;c++){s+=t[c];let n=Array.from({length:c-e+1},(t,n)=>e+n);r.push({a:[...t],window:n,maxWindow:[...Array.from({length:o-a+1},(e,t)=>a+t)],curSum:s,maxSum:i,msg:`Extend to j=${c}: sum=${s}`,ln:4}),s>i&&(i=s,a=e,o=c,r.push({a:[...t],window:n,maxWindow:[...n],curSum:s,maxSum:i,msg:`New max! sum=${s} at [${e}..${c}]`,ln:5}))}}return r.push({a:[...t],window:[],maxWindow:Array.from({length:o-a+1},(e,t)=>a+t),curSum:0,maxSum:i,msg:`✓ Max subarray sum = ${i}`,ln:7}),r}function xe(e){let t=e,n=t.length,r=[],i=t[0],a=t[0],o=0,s=0,c=0;r.push({a:[...t],window:[0],maxWindow:[0],curSum:t[0],maxSum:t[0],msg:`Init: curSum=maxSum=a[0]=${t[0]}`,ln:0});for(let e=1;e<n;e++)r.push({a:[...t],window:[e],maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`Extend or restart? a[${e}]=${t[e]}, curSum=${i}`,ln:3}),t[e]>i+t[e]?(i=t[e],c=e,r.push({a:[...t],window:[e],maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`Restart at i=${e}: curSum=${i}`,ln:4})):(i+=t[e],r.push({a:[...t],window:Array.from({length:e-c+1},(e,t)=>c+t),maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`Extend: curSum=${i}`,ln:5})),i>a&&(a=i,o=c,s=e,r.push({a:[...t],window:Array.from({length:s-o+1},(e,t)=>o+t),maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`New max! sum=${a} at [${o}..${s}]`,ln:6}));return r.push({a:[...t],window:[],maxWindow:Array.from({length:s-o+1},(e,t)=>o+t),curSum:i,maxSum:a,msg:`✓ Kadane's: max sum = ${a}`,ln:8}),r}function Se(e){let t=0,n=[{table:null,active:-1,calls:0,result:null,msg:`climbStairs(${e}) — 1 or 2 steps each time`,ln:0}];function r(e){if(t++,n.push({table:null,active:e,calls:t,result:null,msg:`climb(${e}) called — total calls:${t}`,ln:1}),e<=1)return n.push({table:null,active:e,calls:t,result:e,msg:`Base: climb(${e})=${e}`,ln:2}),e;let i=r(e-1),a=r(e-2),o=i+a;return n.push({table:null,active:e,calls:t,result:o,msg:`climb(${e})=climb(${e-1})+climb(${e-2})=${i}+${a}=${o}`,ln:3}),o}let i=r(e);return n.push({table:null,active:-1,calls:t,result:i,msg:`✓ ${i} ways to climb ${e} stairs — ${t} calls!`,ln:4}),n}function Ce(e){let t={},n=[{table:null,active:-1,calls:0,result:null,memo:{},msg:`Memoized climbing stairs`,ln:0}];function r(e){if(e in t)return n.push({table:null,active:e,calls:0,result:t[e],memo:{...t},msg:`Cache hit! memo[${e}]=${t[e]}`,ln:1}),t[e];if(n.push({table:null,active:e,calls:0,result:null,memo:{...t},msg:`Compute climb(${e})`,ln:3}),e<=1)return t[e]=e,n.push({table:null,active:e,calls:0,result:e,memo:{...t},msg:`Base: climb(${e})=${e}`,ln:4}),e;let i=r(e-1)+r(e-2);return t[e]=i,n.push({table:null,active:e,calls:0,result:i,memo:{...t},msg:`climb(${e})=${i} cached`,ln:5}),i}let i=r(e);return n.push({table:null,active:-1,calls:0,result:i,memo:{...t},msg:`✓ ${i} ways to climb ${e} stairs`,ln:7}),n}function we(e){let t=Array(e+1).fill(0);t[0]=1,e>=1&&(t[1]=1);let n=[{table:[...t],active:-1,calls:0,result:null,msg:`DP: dp[0]=1 (empty), dp[1]=1 (one step)`,ln:2}];for(let r=2;r<=e;r++)t[r]=t[r-1]+t[r-2],n.push({table:[...t],active:r,calls:0,result:null,msg:`dp[${r}]=dp[${r-1}]+dp[${r-2}]=${t[r-1]}+${t[r-2]}=${t[r]} ways`,ln:4});return n.push({table:[...t],active:-1,calls:0,result:t[e],msg:`✓ ${t[e]} ways to climb ${e} stairs — O(1) space possible`,ln:6}),n}var Te=[1,2,5],Ee=11;function De(e){let t=Te,n=e||Ee,r=0,i=[{dpArr:null,active:-1,calls:0,result:null,msg:`coinChange([${t}], ${n}) — min coins`,ln:0}];function a(e){if(r++,i.push({dpArr:null,active:e,calls:r,result:null,msg:`coin(${e}) called — total calls:${r}`,ln:2}),e<0)return i.push({dpArr:null,active:e,calls:r,result:-1,msg:`rem<0: invalid`,ln:3}),1/0;if(e===0)return i.push({dpArr:null,active:e,calls:r,result:0,msg:`rem=0: need 0 coins`,ln:4}),0;let n=1/0;for(let r of t){let t=a(e-r);t<n&&(n=t)}let o=n===1/0?-1:n+1;return i.push({dpArr:null,active:e,calls:r,result:o,msg:`coin(${e})=${o===-1?`impossible`:o} coins`,ln:5}),n===1/0?1/0:n+1}let o=a(n),s=o===1/0?-1:o;return i.push({dpArr:null,active:-1,calls:r,result:s,msg:`✓ Min coins for ${n}: ${s} — ${r} recursive calls!`,ln:7}),i}function Oe(e){let t=Te,n=e||Ee,r=new Map,i=[{dpArr:null,active:-1,calls:0,result:null,msg:`Memoized coin change`,ln:0}];function a(e){if(r.has(e))return i.push({dpArr:null,active:e,calls:0,result:r.get(e),msg:`Cache! memo[${e}]=${r.get(e)}`,ln:1}),r.get(e);if(e<0)return 1/0;if(e===0)return i.push({dpArr:null,active:e,calls:0,result:0,msg:`Base: 0 coins for rem=0`,ln:3}),0;i.push({dpArr:null,active:e,calls:0,result:null,msg:`Compute coin(${e})`,ln:4});let n=1/0;for(let r of t){let t=a(e-r);t<n&&(n=t)}let o=n===1/0?1/0:n+1;return r.set(e,o),i.push({dpArr:null,active:e,calls:0,result:o===1/0?-1:o,msg:`coin(${e})=${o===1/0?`impossible`:o} — cached`,ln:5}),o}let o=a(n),s=o===1/0?-1:o;return i.push({dpArr:null,active:-1,calls:0,result:s,msg:`✓ Min coins for ${n}: ${s} — only ${r.size} unique states`,ln:7}),i}function ke(e){let t=Te,n=e||Ee,r=Array(n+1).fill(1/0);r[0]=0;let i=[{dpArr:[...r].map(e=>e===1/0?`∞`:e),active:-1,calls:0,result:null,msg:`DP array: dp[0]=0, dp[1..${n}]=∞`,ln:2}];for(let e=1;e<=n;e++){i.push({dpArr:[...r].map(e=>e===1/0?`∞`:e),active:e,calls:0,result:null,msg:`Compute dp[${e}]: try coins [${t}]`,ln:3});for(let n of t)e>=n&&r[e-n]+1<r[e]&&(r[e]=r[e-n]+1,i.push({dpArr:[...r].map(e=>e===1/0?`∞`:e),active:e,calls:0,result:null,msg:`dp[${e}]=dp[${e-n}]+1=${r[e]} (coin=${n})`,ln:4}))}let a=r[n]===1/0?-1:r[n];return i.push({dpArr:[...r].map(e=>e===1/0?`∞`:e),active:-1,calls:0,result:a,msg:`✓ Min coins for ${n}: ${a}`,ln:6}),i}var F=[{id:0,label:`A`,x:80,y:130},{id:1,label:`B`,x:220,y:50},{id:2,label:`C`,x:220,y:210},{id:3,label:`D`,x:360,y:50},{id:4,label:`E`,x:360,y:210},{id:5,label:`F`,x:500,y:130}],Ae=[{f:0,t:1,w:4},{f:0,t:2,w:2},{f:1,t:3,w:5},{f:1,t:2,w:1},{f:2,t:4,w:8},{f:2,t:3,w:3},{f:3,t:5,w:2},{f:4,t:5,w:4}],je=F.map((e,t)=>Ae.filter(e=>e.f===t).map(e=>({to:e.t,w:e.w})));function I(e,t,n,r,i,a,o){return{nodes:F,edges:Ae,visited:[...e],current:t,queue:[...n],distances:{...r},path:[...i],msg:a,ln:o}}function Me(){let e=new Set,t=[],n=[];for(n.push(I(e,-1,t,{},[],`BFS from A — explore level by level`,0)),t.push(0),e.add(0),n.push(I(e,-1,t,{},[],`Start: enqueue A`,1));t.length;){let r=t.shift();n.push(I(e,r,t,{},[],`Visit ${F[r].label} — dequeue and process`,3));for(let{to:i}of je[r])e.has(i)||(e.add(i),t.push(i),n.push(I(e,r,[...t],{},[],`Discover ${F[i].label} from ${F[r].label} → enqueue`,4)));n.push(I(e,-1,t,{},[],`${F[r].label} fully processed, queue:[${t.map(e=>F[e].label)}]`,5))}return n.push(I(e,-1,[],{},[...e],`✓ BFS complete! Visited: ${[...e].map(e=>F[e].label).join(`→`)}`,7)),n}function Ne(){let e=new Set,t=[],n={},r=[];for(r.push(I(e,-1,t,{},[],`BFS shortest path: A → ${F[5].label}`,0)),t.push(0),e.add(0),n[0]=-1;t.length;){let i=t.shift();if(r.push(I(e,i,t,{},[],`Process ${F[i].label}`,3)),i===5){let t=[],i=5;for(;i!==-1;)t.unshift(i),i=n[i];return r.push(I(e,-1,[],{},t,`✓ Shortest path (hops): ${t.map(e=>F[e].label).join(` → `)}`,8)),r}for(let{to:a}of je[i])e.has(a)||(e.add(a),t.push(a),n[a]=i,r.push(I(e,i,[...t],{},[],`Found ${F[a].label} via ${F[i].label}`,4)))}return r}function Pe(){let e=new Set,t=[],n=0,r=[0];for(e.add(0),t.push(I(e,-1,r,{},[],`Level-order BFS: process entire level at once`,0));r.length;){t.push(I(e,-1,r,{},[],`Level ${n}: [${r.map(e=>F[e].label)}]`,2));let i=[];for(let a of r){t.push(I(e,a,[...i],{},[],`Process ${F[a].label} at level ${n}`,3));for(let{to:r}of je[a])e.has(r)||(e.add(r),i.push(r),t.push(I(e,a,[...i],{},[],`${F[r].label} → level ${n+1}`,4)))}n++,r=i}return t.push(I(e,-1,[],{},[...e],`✓ ${n} levels, all nodes visited`,6)),t}function Fe(){let e=new Set,t=[],n=[];n.push(I(e,-1,[],{},[],`DFS Recursive from A — go deep first`,0));function r(i){e.add(i),t.push(i),n.push(I(e,i,[],{},t,`Visit ${F[i].label} — recurse deeper`,2));for(let{to:a}of je[i])e.has(a)?n.push(I(e,i,[],{},t,`${F[a].label} already visited — skip`,4)):(n.push(I(e,i,[a],{},t,`${F[a].label} unvisited → recurse`,3)),r(a));n.push(I(e,-1,[],{},t,`Backtrack from ${F[i].label}`,5))}return r(0),n.push(I(e,-1,[],{},t,`✓ DFS order: ${t.map(e=>F[e].label).join(` → `)}`,7)),n}function Ie(){let e=new Set,t=[0],n=[],r=[];for(r.push(I(e,-1,t,{},[],`DFS Iterative: uses explicit stack`,0));t.length;){let i=t.pop();if(e.has(i)){r.push(I(e,-1,t,{},n,`${F[i].label} already visited, skip`,2));continue}e.add(i),n.push(i),r.push(I(e,i,t,{},n,`Pop & visit ${F[i].label}`,3));for(let{to:a}of[...je[i]].reverse())e.has(a)||(t.push(a),r.push(I(e,i,[...t],{},n,`Push ${F[a].label} to stack`,4)))}return r.push(I(e,-1,[],{},n,`✓ DFS order: ${n.map(e=>F[e].label).join(` → `)}`,6)),r}function Le(){let e=new Set,t=new Set,n=[],r=[],i=!1;r.push(I(e,-1,[],{},[],`DFS Cycle Detection: track recursion stack`,0));function a(o){if(!i){e.add(o),t.add(o),n.push(o),r.push(I(e,o,[...t],{},n,`Visit ${F[o].label} — add to stack`,2));for(let{to:s}of je[o])if(!e.has(s))a(s);else if(t.has(s)){i=!0,r.push(I(e,o,[...t],{},n,`⚠ Back edge ${F[o].label}→${F[s].label}: CYCLE DETECTED!`,5));return}t.delete(o),r.push(I(e,-1,[...t],{},n,`Remove ${F[o].label} from recursion stack`,6))}}for(let t=0;t<F.length;t++)e.has(t)||a(t);return r.push(I(e,-1,[],{},n,i?`⚠ Graph has a cycle!`:`✓ No cycle found — DAG`,8)),r}function Re(){let e=1/0,t=F.length,n=Array(t).fill(e);n[0]=0;let r=new Set,i=[],a=Array(t).fill(-1);i.push(I(r,-1,[],{...n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{})},[],`Dijkstra: dist[A]=0, all others=∞`,0));for(let o=0;o<t;o++){let o=-1;for(let e=0;e<t;e++)!r.has(e)&&(o===-1||n[e]<n[o])&&(o=e);if(o===-1||n[o]===e)break;r.add(o);let s=n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{});i.push(I(r,o,[],s,[],`Pick unvisited node with min dist: ${F[o].label} (dist=${n[o]})`,3));for(let{to:t,w:s}of je[o])if(n[o]+s<n[t]){n[t]=n[o]+s,a[t]=o;let c=n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{});i.push(I(r,o,[],c,[],`Relax: dist[${F[t].label}]=dist[${F[o].label}]+${s}=${n[t]}`,4))}}let o=[],s=5;for(;s!==-1;)o.unshift(s),s=a[s];let c=n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{});return i.push(I(r,-1,[],c,o,`✓ Shortest A→F: ${o.map(e=>F[e].label).join(`→`)} = ${n[5]}`,7)),i}function ze(){let e=1/0,t=F.length,n=Array(t).fill(e);n[0]=0;let r=new Set,i=[[0,0]],a=[],o=Array(t).fill(-1);for(a.push(I(r,-1,i.map(e=>e[1]),{...n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{})},[],`Dijkstra + Priority Queue (min-heap)`,0));i.length;){i.sort((e,t)=>e[0]-t[0]);let[t,s]=i.shift();if(r.has(s)){a.push(I(r,-1,i.map(e=>e[1]),n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`${F[s].label} already settled, skip`,2));continue}r.add(s),a.push(I(r,s,i.map(e=>e[1]),n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Settle ${F[s].label} with dist=${t}`,3));for(let{to:t,w:c}of je[s])!r.has(t)&&n[s]+c<n[t]&&(n[t]=n[s]+c,o[t]=s,i.push([n[t],t]),a.push(I(r,s,i.map(e=>e[1]),n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Push (${n[t]},${F[t].label}) to PQ`,4)))}let s=[],c=5;for(;c!==-1;)s.unshift(c),c=o[c];return a.push(I(r,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),s,`✓ A→F optimal: ${s.map(e=>F[e].label).join(`→`)} = ${n[5]}`,7)),a}function Be(){let e=1/0,t=F.length,n=Array(t).fill(e);n[0]=0;let r=Array(t).fill(-1),i=[I(new Set,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Bellman-Ford: relax ALL edges n-1 times`,0)];for(let a=1;a<t;a++){i.push(I(new Set,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Pass ${a}/${t-1}: relax all ${Ae.length} edges`,2));let o=!1;for(let{f:t,t:a,w:s}of Ae)n[t]!==e&&n[t]+s<n[a]&&(n[a]=n[t]+s,r[a]=t,o=!0,i.push(I(new Set([t,a]),t,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`Relax ${F[t].label}→${F[a].label}: dist[${F[a].label}]=${n[a]}`,3)));if(!o){i.push(I(new Set,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),[],`No updates in pass ${a} — early termination!`,5));break}}let a=[],o=5;for(;o!==-1;)a.unshift(o),o=r[o];let s=new Set(Array.from({length:t},(e,t)=>t));return i.push(I(s,-1,[],n.reduce((t,n,r)=>({...t,[r]:n===e?`∞`:n}),{}),a,`✓ Bellman-Ford: A→F = ${a.map(e=>F[e].label).join(`→`)} cost=${n[5]}. Works with negative edges!`,7)),i}var Ve={maxSubBrute:N(`function maxSubarray(arr) {
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
}`),maxSubBetter:N(`function maxSubarray(arr) {
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
}`),kadane:N(`function maxSubarray(arr) {
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
}`),climbRec:N(`function climbStairs(n) {
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
// O(2^n)`),climbMemo:N(`function climbStairs(n, memo={}) {
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
}`),climbDP:N(`function climbStairs(n) {
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
// O(1) space!`),coinRec:N(`function coinChange(coins, amount) {
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
}`),coinMemo:N(`function coinChange(coins, amount) {
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
}`),coinDP:N(`function coinChange(coins, amount) {
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
}`)},He={bfsBasic:N(`function bfs(graph, start) {
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
}`),bfsPath:N(`function bfsShortestPath(graph, start, end) {
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
}`),bfsLevel:N(`function bfsLevels(graph, start) {
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
}`),dfsRec:N(`function dfs(graph, u, visited=new Set()) {
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
// O(V+E)`),dfsIter:N(`function dfsIterative(graph, start) {
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
}`),dfsCycle:N(`function hasCycle(graph) {
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
}`),dijkstraBasic:N(`function dijkstra(graph, start) {
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
}`),dijkstraPQ:N(`function dijkstra(graph, start) {
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
}`),bellmanFord:N(`function bellmanFord(edges, nodes, start) {
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
}`)},Ue=[50,30,70,20,40,60,80];function We(e){let t={},n=0;function r(e,i){if(e===null){let e=n++;return t[e]={id:e,val:i,left:null,right:null},e}return i<t[e].val?t[e].left=r(t[e].left,i):t[e].right=r(t[e].right,i),e}let i=null;for(let t of e)i=r(i,t);return{nodes:t,root:i}}function Ge(e,t){let n={},r=0;function i(t,a){t!==null&&(i(e[t].left,a+1),n[t]={x:r*52+30,y:a*62+30},r++,i(e[t].right,a+1))}return i(t,0),n}function L(e,t,n,r,i,a,o,s){let c={};return Object.keys(e).forEach(t=>{c[t]={...e[t]}}),{nodes:c,root:t,positions:Ge(e,t),highlighted:n,visited:[...r],path:[...i],result:[...a],msg:o,ln:s}}function Ke(){let{nodes:e,root:t}=We(Ue),n=[],r=[],i=[];n.push(L(e,t,[],r,[],i,`BST Inorder: Left → Root → Right (gives sorted output!)`,0));function a(o){o!==null&&(n.push(L(e,t,[o],r,[],i,`Go left from ${e[o].val}`,2)),a(e[o].left),n.push(L(e,t,[o],r,[],i,`Visit ${e[o].val}`,3)),r.push(o),i.push(e[o].val),n.push(L(e,t,[],r,[],i,`Visited: [${i}]`,3)),a(e[o].right))}return a(t),n.push(L(e,t,[],r,[],i,`✓ Inorder: [${i}] — sorted!`,5)),n}function qe(){let{nodes:e,root:t}=We(Ue),n=[],r=[],i=[],a=[];n.push(L(e,t,[],r,[],a,`Iterative inorder with explicit stack`,0));let o=t;for(;o!==null||i.length;){for(;o!==null;)n.push(L(e,t,[o],r,[...i,o],a,`Push ${e[o].val} to stack, go left`,3)),i.push(o),o=e[o].left;o=i.pop(),n.push(L(e,t,[o],r,[...i],a,`Pop ${e[o].val} — visit it`,5)),r.push(o),a.push(e[o].val),n.push(L(e,t,[],r,[...i],a,`Result so far: [${a}]`,5)),o=e[o].right}return n.push(L(e,t,[],r,[],a,`✓ [${a}] — no recursion stack!`,7)),n}function Je(){let{nodes:e,root:t}=We(Ue),n=[],r=[],i=[];n.push(L(e,t,[],r,[],i,`Preorder: Root → Left → Right (useful for cloning)`,0));function a(o){o!==null&&(n.push(L(e,t,[o],r,[],i,`Visit ${e[o].val} first`,2)),r.push(o),i.push(e[o].val),n.push(L(e,t,[],r,[],i,`Result: [${i}]`,2)),a(e[o].left),a(e[o].right))}return a(t),n.push(L(e,t,[],r,[],i,`✓ Preorder: [${i}]`,4)),n}function Ye(){let{nodes:e,root:t}=We(Ue),n=[],r=[],i=[];n.push(L(e,t,[],r,[],i,`Postorder: Left → Right → Root (useful for deletion)`,0));function a(o){o!==null&&(n.push(L(e,t,[o],r,[],i,`Dive into subtree of ${e[o].val}`,2)),a(e[o].left),a(e[o].right),r.push(o),i.push(e[o].val),n.push(L(e,t,[o],r,[],i,`Visit ${e[o].val} last: [${i}]`,3)))}return a(t),n.push(L(e,t,[],r,[],i,`✓ Postorder: [${i}]`,5)),n}function Xe(e=40){let{nodes:t,root:n}=We(Ue),r=[],i=[];r.push(L(t,n,[],[],i,[],`Search for ${e} in BST (recursive)`,0));function a(o){return o===null?(r.push(L(t,n,[],[],i,[],`✗ ${e} not found`,3)),!1):(i.push(o),r.push(L(t,n,[o],[],i,[],`Compare ${e} vs ${t[o].val}`,2)),t[o].val===e?(r.push(L(t,n,[o],[o],i,[],`✓ Found ${e}!`,3)),!0):e<t[o].val?(r.push(L(t,n,[o],[],i,[],`${e}<${t[o].val} → go left`,4)),a(t[o].left)):(r.push(L(t,n,[o],[],i,[],`${e}>${t[o].val} → go right`,5)),a(t[o].right)))}return a(n),r}function Ze(e=40){let{nodes:t,root:n}=We(Ue),r=[],i=[];r.push(L(t,n,[],[],i,[],`Search for ${e} iteratively`,0));let a=n;for(;a!==null;){if(i.push(a),r.push(L(t,n,[a],[],i,[],`Compare ${e} vs ${t[a].val}`,3)),t[a].val===e)return r.push(L(t,n,[a],[a],i,[],`✓ Found ${e}!`,4)),r;e<t[a].val?(r.push(L(t,n,[a],[],i,[],`Go left`,5)),a=t[a].left):(r.push(L(t,n,[a],[],i,[],`Go right`,6)),a=t[a].right)}return r.push(L(t,n,[],[],i,[],`✗ Not found`,8)),r}function Qe(e=35){let{nodes:t,root:n}=We(Ue),r={...t},i=[],a=[],o=n;i.push(L(r,o,[],[],a,[],`Insert ${e} into BST`,0));function s(e,t){if(e===null){let e=Object.keys(r).length;return r[e]={id:e,val:t,left:null,right:null},i.push(L(r,o,[e],[e],a,[],`✓ Inserted ${t} as new node!`,4)),e}return a.push(e),i.push(L(r,o,[e],[],a,[],`${t}<${r[e].val}? → go ${t<r[e].val?`left`:`right`}`,2)),t<r[e].val?r[e].left=s(r[e].left,t):r[e].right=s(r[e].right,t),e}return o=s(o,e),i.push(L(r,o,[],[],a,[],`✓ BST property maintained after insert`,6)),i}function $e(e=6){let t=[],n=[],r=0;t.push({board:Array(e).fill(-1),queens:[],calls:0,solutions:0,msg:`N-Queens: place ${e} queens on ${e}×${e} board`,ln:0});function i(e,t,n){for(let r=0;r<t;r++)if(e[r]===n||Math.abs(e[r]-n)===Math.abs(r-t))return!1;return!0}function a(o,s){if(r++,s===e){n.push([...o]),t.push({board:[...o],queens:[...o],calls:r,solutions:n.length,msg:`✓ Solution found! [${o}]`,ln:6});return}for(let c=0;c<e;c++)t.push({board:[...o],queens:[...o.slice(0,s)],calls:r,solutions:n.length,msg:`Try queen at row=${s}, col=${c}`,ln:3}),i(o,s,c)&&(o[s]=c,t.push({board:[...o],queens:[...o.slice(0,s+1)],calls:r,solutions:n.length,msg:`Place queen at (${s},${c}) — safe!`,ln:4}),a(o,s+1),o[s]=-1,t.push({board:[...o],queens:[...o.slice(0,s)],calls:r,solutions:n.length,msg:`Backtrack from row ${s}`,ln:5}))}return a(Array(e).fill(-1),0),t.push({board:n[0]||Array(e).fill(-1),queens:n[0]||[],calls:r,solutions:n.length,msg:`✓ Found ${n.length} solutions in ${r} calls`,ln:8}),t}function et(e=6){let t=[],n=[],r=0,i=(1<<e)-1;t.push({board:Array(e).fill(-1),queens:[],calls:0,solutions:0,msg:`Bitmask N-Queens: cols/diags as bit flags`,ln:0});function a(o,s,c,l,u){if(r++,s===i){n.push([...u]),t.push({board:[...u],queens:[...u],calls:r,solutions:n.length,msg:`✓ Solution! [${u}]`,ln:5});return}let d=i&~(s|c|l);for(t.push({board:[...u],queens:[...u.slice(0,o)],calls:r,solutions:n.length,msg:`Row ${o}: available cols bitmask=${d.toString(2).padStart(e,`0`)}`,ln:3});d;){let e=d&-d,i=Math.log2(e);d-=e,u[o]=i,t.push({board:[...u],queens:[...u.slice(0,o+1)],calls:r,solutions:n.length,msg:`Place at col=${i} (bit=${e.toString(2)})`,ln:4}),a(o+1,s|e,(c|e)<<1,(l|e)>>1,u),u[o]=-1}}return a(0,0,0,0,Array(e).fill(-1)),t.push({board:n[0]||Array(e).fill(-1),queens:n[0]||[],calls:r,solutions:n.length,msg:`✓ ${n.length} solutions found — bitmask is ~3× faster`,ln:8}),t}function tt(e=[1,2,3,4]){let t=[],n=[];t.push({arr:e,current:[],all:[],idx:-1,msg:`Generate all subsets of [${e}]`,ln:0});function r(i,a){if(t.push({arr:e,current:[...a],all:[...n],idx:i,msg:`At index ${i}, current subset: [${a}]`,ln:2}),i===e.length){n.push([...a]),t.push({arr:e,current:[...a],all:[...n],idx:i,msg:`Complete subset: [${a}]`,ln:3});return}a.push(e[i]),t.push({arr:e,current:[...a],all:[...n],idx:i,msg:`Include inp[${i}]=${e[i]}: [${a}]`,ln:4}),r(i+1,a),a.pop(),t.push({arr:e,current:[...a],all:[...n],idx:i,msg:`Exclude inp[${i}]=${e[i]}: [${a}]`,ln:6}),r(i+1,a)}return r(0,[]),t.push({arr:e,current:[],all:[...n],idx:-1,msg:`✓ ${n.length} subsets = 2^${e.length}`,ln:8}),t}function nt(e=[1,2,3]){let t=[],n=[];t.push({arr:[...e],current:[...e],all:[],idx:-1,msg:`Generate all permutations of [${e}]`,ln:0});function r(e,i){if(i===e.length){n.push([...e]),t.push({arr:[...e],current:[...e],all:[...n],idx:i,msg:`Permutation: [${e}]`,ln:3});return}for(let a=i;a<e.length;a++)t.push({arr:[...e],current:[...e],all:[...n],idx:i,msg:`Swap arr[${i}] ↔ arr[${a}]: ${e[i]}↔${e[a]}`,ln:5}),[e[i],e[a]]=[e[a],e[i]],t.push({arr:[...e],current:[...e],all:[...n],idx:i+1,msg:`Recurse with [${e}]`,ln:6}),r(e,i+1),[e[i],e[a]]=[e[a],e[i]],t.push({arr:[...e],current:[...e],all:[...n],idx:i,msg:`Backtrack`,ln:7})}return r([...e],0),t.push({arr:[...e],current:[...e],all:[...n],idx:-1,msg:`✓ ${n.length} permutations = ${e.length}!`,ln:9}),t}var rt=`AABAACAADAABA`,it=`AABA`;function at(e=rt,t=it){let n=e.length,r=t.length,i=[],a=[];i.push({text:e,pat:t,i:0,j:-1,matches:[],msg:`Brute force: check every position O(nm)`,ln:0});for(let o=0;o<=n-r;o++){i.push({text:e,pat:t,i:o,j:0,matches:[...a],msg:`Try starting at index ${o}`,ln:2});let n=0;for(;n<r&&(i.push({text:e,pat:t,i:o,j:n,matches:[...a],msg:`text[${o+n}]='${e[o+n]}' vs pat[${n}]='${t[n]}'`,ln:3}),e[o+n]===t[n]);)n++;n===r?(a.push(o),i.push({text:e,pat:t,i:o,j:-1,matches:[...a],msg:`✓ Match found at index ${o}!`,ln:5})):i.push({text:e,pat:t,i:o,j:-1,matches:[...a],msg:`Mismatch at j=${n}, try next position`,ln:7})}return i.push({text:e,pat:t,i:-1,j:-1,matches:[...a],msg:`✓ Found ${a.length} matches at [${a}] — O(nm)`,ln:9}),i}function ot(e=rt,t=it){let n=e.length,r=t.length,i=[],a=[],o=Array(r).fill(0),s=0,c=1;for(i.push({text:e,pat:t,i:0,j:0,matches:[],lps:[...o],msg:`KMP: build LPS (Longest Proper Prefix Suffix) table`,ln:0});c<r;)t[c]===t[s]?(o[c]=++s,i.push({text:e,pat:t,i:0,j:c,matches:[],lps:[...o],msg:`lps[${c}]=${s}`,ln:3}),c++):s>0?(s=o[s-1],i.push({text:e,pat:t,i:0,j:c,matches:[],lps:[...o],msg:`Mismatch, fallback len=${s}`,ln:5})):(o[c]=0,i.push({text:e,pat:t,i:0,j:c,matches:[],lps:[...o],msg:`lps[${c}]=0`,ln:6}),c++);i.push({text:e,pat:t,i:0,j:0,matches:[],lps:[...o],msg:`LPS=[${o}]. Now search!`,ln:7});let l=0,u=0;for(;l<n;)i.push({text:e,pat:t,i:l,j:u,matches:[...a],lps:[...o],msg:`text[${l}]='${e[l]}' vs pat[${u}]='${t[u]}'`,ln:9}),e[l]===t[u]&&(l++,u++),u===r?(a.push(l-u),i.push({text:e,pat:t,i:l,j:u,matches:[...a],lps:[...o],msg:`✓ Match at ${l-u}! Use lps to skip`,ln:10}),u=o[u-1]):l<n&&e[l]!==t[u]&&(u===0?l++:(i.push({text:e,pat:t,i:l,j:u,matches:[...a],lps:[...o],msg:`Mismatch: skip to lps[${u-1}]=${o[u-1]}`,ln:11}),u=o[u-1]));return i.push({text:e,pat:t,i:-1,j:-1,matches:[...a],lps:[...o],msg:`✓ ${a.length} matches at [${a}] — O(n+m) no backtrack!`,ln:13}),i}function st(e=rt,t=it){let n=e.length,r=t.length,i=[],a=[],o=0,s=0,c=1;for(let e=0;e<r-1;e++)c=c*256%101;for(let n=0;n<r;n++)o=(256*o+t.charCodeAt(n))%101,s=(256*s+e.charCodeAt(n))%101;i.push({text:e,pat:t,i:0,j:-1,matches:[],msg:`Rabin-Karp: hash pattern hash=${o}, compute rolling hash`,ln:0});for(let l=0;l<=n-r;l++){if(i.push({text:e,pat:t,i:l,j:-1,matches:[...a],msg:`Window hash=${s} vs pattern hash=${o}`,ln:3}),o===s){let n=0;for(;n<r&&e[l+n]===t[n];)n++;n===r?(a.push(l),i.push({text:e,pat:t,i:l,j:-1,matches:[...a],msg:`✓ Hash match confirmed at index ${l}!`,ln:5})):i.push({text:e,pat:t,i:l,j:-1,matches:[...a],msg:`Hash collision at ${l} — not a real match`,ln:6})}l<n-r&&(s=(256*(s-e.charCodeAt(l)*c)+e.charCodeAt(l+r))%101,s<0&&(s+=101),i.push({text:e,pat:t,i:l+1,j:-1,matches:[...a],msg:`Roll hash: remove '${e[l]}', add '${e[l+r]}' → ${s}`,ln:8}))}return i.push({text:e,pat:t,i:-1,j:-1,matches:[...a],msg:`✓ ${a.length} matches — O(n+m) average`,ln:10}),i}var ct=3;function lt(e){let t=e,n=t.length,r=ct,i=[],a=-1/0,o=0;i.push({a:t,wStart:-1,wEnd:-1,maxStart:o,maxEnd:o+r-1,curSum:0,maxSum:a,msg:`Max sum subarray of size k=${r} — brute O(nk)`,ln:0});for(let e=0;e<=n-r;e++){let n=0;for(let i=e;i<e+r;i++)n+=t[i];i.push({a:t,wStart:e,wEnd:e+r-1,maxStart:o,maxEnd:o+r-1,curSum:n,maxSum:a,msg:`Sum a[${e}..${e+r-1}]=${n}`,ln:3}),n>a&&(a=n,o=e,i.push({a:t,wStart:e,wEnd:e+r-1,maxStart:o,maxEnd:o+r-1,curSum:n,maxSum:a,msg:`New max! sum=${n} at [${e}..${e+r-1}]`,ln:4}))}return i.push({a:t,wStart:-1,wEnd:-1,maxStart:o,maxEnd:o+r-1,curSum:0,maxSum:a,msg:`✓ Max sum=${a} at [${o}..${o+r-1}]`,ln:6}),i}function ut(e){let t=e,n=t.length,r=ct,i=[],a=0;for(let e=0;e<r;e++)a+=t[e];let o=a,s=0;i.push({a:t,wStart:0,wEnd:r-1,maxStart:s,maxEnd:r-1,curSum:a,maxSum:o,msg:`Init: sum first window [0..${r-1}]=${a}`,ln:0});for(let e=r;e<n;e++){let n=t[e-r];a=a-n+t[e],i.push({a:t,wStart:e-r+1,wEnd:e,maxStart:s,maxEnd:s+r-1,curSum:a,maxSum:o,msg:`Slide: remove a[${e-r}]=${n}, add a[${e}]=${t[e]} → sum=${a}`,ln:3}),a>o&&(o=a,s=e-r+1,i.push({a:t,wStart:e-r+1,wEnd:e,maxStart:s,maxEnd:e,curSum:a,maxSum:o,msg:`New max! sum=${a}`,ln:4}))}return i.push({a:t,wStart:-1,wEnd:-1,maxStart:s,maxEnd:s+r-1,curSum:0,maxSum:o,msg:`✓ Max sum=${o} — O(n) single pass!`,ln:6}),i}function dt(e){let t=e,n=t.length,r=[],i=new Set,a=0,o=0,s=0;r.push({a:t,wStart:0,wEnd:0,maxStart:0,maxEnd:0,curSum:0,maxSum:0,msg:`Longest subarray with unique elements`,ln:0});for(let e=0;e<n;e++){for(r.push({a:t,wStart:a,wEnd:e,maxStart:s,maxEnd:s+o-1,curSum:e-a+1,maxSum:o,msg:`Expand right to ${t[e]}`,ln:2});i.has(t[e]);)r.push({a:t,wStart:a,wEnd:e,maxStart:s,maxEnd:s+o-1,curSum:e-a,maxSum:o,msg:`${t[e]} duplicate! Shrink left: remove ${t[a]}`,ln:4}),i.delete(t[a]),a++;i.add(t[e]),e-a+1>o?(o=e-a+1,s=a,r.push({a:t,wStart:a,wEnd:e,maxStart:s,maxEnd:e,curSum:o,maxSum:o,msg:`New max length=${o} at [${a}..${e}]`,ln:5})):r.push({a:t,wStart:a,wEnd:e,maxStart:s,maxEnd:s+o-1,curSum:e-a+1,maxSum:o,msg:`Window [${a}..${e}] len=${e-a+1}`,ln:5})}return r.push({a:t,wStart:-1,wEnd:-1,maxStart:s,maxEnd:s+o-1,curSum:0,maxSum:o,msg:`✓ Longest unique subarray length=${o}`,ln:7}),r}var ft=[{s:1,e:4},{s:3,e:5},{s:0,e:6},{s:5,e:7},{s:3,e:8},{s:5,e:9},{s:6,e:10},{s:8,e:11},{s:8,e:12},{s:2,e:13},{s:12,e:14}];function pt(){let e=ft.slice(0,6),t=e.length,n=[],r=[];n.push({acts:e,selected:[],current:-1,msg:`Activity Selection: find max non-overlapping activities`,ln:0});function i(a,o,s){if(a===t){s.length>r.length&&(r=[...s]),n.push({acts:e,selected:[...s],current:a,msg:`Subset size=${s.length}`,ln:2});return}e[a].s>=o&&i(a+1,e[a].e,[...s,a]),i(a+1,o,s)}return i(0,-1,[]),n.push({acts:e,selected:r,current:-1,msg:`✓ Max activities=${r.length}: [${r.map(t=>e[t].s+`-`+e[t].e)}]`,ln:5}),n}function mt(){let e=[...ft.slice(0,8)].sort((e,t)=>e.e-t.e),t=[],n=[];t.push({acts:e,selected:[],current:-1,msg:`Greedy: sort by END time, greedily select`,ln:0}),t.push({acts:e,selected:[],current:-1,msg:`Sorted by end: [${e.map(e=>e.s+`-`+e.e)}]`,ln:1});let r=-1/0;for(let i=0;i<e.length;i++)t.push({acts:e,selected:[...n],current:i,msg:`Activity [${e[i].s}-${e[i].e}]: starts after last end ${r}?`,ln:3}),e[i].s>=r?(n.push(i),r=e[i].e,t.push({acts:e,selected:[...n],current:i,msg:`✓ Select [${e[i].s}-${e[i].e}], lastEnd=${r}`,ln:4})):t.push({acts:e,selected:[...n],current:i,msg:`✗ Skip [${e[i].s}-${e[i].e}] — overlaps`,ln:5});return t.push({acts:e,selected:[...n],current:-1,msg:`✓ Selected ${n.length} activities — O(n log n)`,ln:7}),t}function ht(){let e=[{w:10,v:60},{w:20,v:100},{w:30,v:120}],t=[],n=[],r=[...e].map((e,t)=>({...e,i:t,ratio:e.v/e.w})).sort((e,t)=>t.ratio-e.ratio);t.push({items:r,taken:[],capacity:50,curW:0,curV:0,msg:`Fractional Knapsack: capacity=50, sort by value/weight ratio`,ln:0});let i=0,a=0;for(let e of r)if(t.push({items:r,taken:[...n],capacity:50,curW:i,curV:a,msg:`Item w=${e.w} v=${e.v} ratio=${e.ratio.toFixed(1)}`,ln:3}),i+e.w<=50)i+=e.w,a+=e.v,n.push({...e,frac:1}),t.push({items:r,taken:[...n],capacity:50,curW:i,curV:a,msg:`Take whole item: curV=${a}, curW=${i}`,ln:4});else{let o=(50-i)/e.w;a+=e.v*o,i=50,n.push({...e,frac:o}),t.push({items:r,taken:[...n],capacity:50,curW:i,curV:a,msg:`Take ${(o*100).toFixed(0)}% of item: curV=${a.toFixed(1)}`,ln:5});break}return t.push({items:r,taken:[...n],capacity:50,curW:i,curV:a,msg:`✓ Max value=${a.toFixed(1)} — optimal greedy!`,ln:7}),t}function gt(e){let t=[...e].sort((e,t)=>e-t),n=e[0]+e[e.length-1],r=0,i=t.length-1,a=[{arr:t,p1:r,p2:i,found:[],map:{},msg:`Two pointers on sorted array — target=${n}`,ln:0}];for(;r<i;){let e=t[r]+t[i];if(a.push({arr:t,p1:r,p2:i,found:[],map:{},msg:`arr[${r}]=${t[r]} + arr[${i}]=${t[i]} = ${e}`,ln:3}),e===n)return a.push({arr:t,p1:r,p2:i,found:[r,i],map:{},msg:`✓ Found pair summing to ${n}!`,ln:4}),a;e<n?(a.push({arr:t,p1:r+1,p2:i,found:[],map:{},msg:`Sum<target, move L→`,ln:5}),r++):(a.push({arr:t,p1:r,p2:i-1,found:[],map:{},msg:`Sum>target, ←R`,ln:6}),i--)}return a.push({arr:t,p1:r,p2:i,found:[],map:{},msg:`✗ Not found`,ln:8}),a}function _t(e){let t=[...e].sort((e,t)=>e-t),n=[{arr:[...t],p1:0,p2:1,found:[0],map:{},msg:`Remove duplicates in-place — two pointers`,ln:0}],r=0;for(let e=1;e<t.length;e++)n.push({arr:[...t],p1:r,p2:e,found:Array.from({length:r+1},(e,t)=>t),map:{},msg:`fast=${e}: arr[${e}]=${t[e]} vs arr[${r}]=${t[r]}`,ln:2}),t[e]===t[r]?n.push({arr:[...t],p1:r,p2:e,found:Array.from({length:r+1},(e,t)=>t),map:{},msg:`Duplicate ${t[e]}, skip`,ln:4}):(r++,t[r]=t[e],n.push({arr:[...t],p1:r,p2:e,found:Array.from({length:r+1},(e,t)=>t),map:{},msg:`New unique: arr[${r}]=${t[r]}`,ln:3}));return n.push({arr:[...t],p1:r,p2:-1,found:Array.from({length:r+1},(e,t)=>t),map:{},msg:`✓ ${r+1} unique elements`,ln:6}),n}function vt(e){let t=[...e].map(e=>Math.min(e,9)),n=0,r=t.length-1,i=0,a=0,o=0,s=[{arr:t,p1:n,p2:r,found:[],map:{curWater:0,maxWater:0},msg:`Container With Most Water: two pointer O(n)`,ln:0}];for(;n<r;){let e=Math.min(t[n],t[r])*(r-n);s.push({arr:t,p1:n,p2:r,found:[],map:{curWater:e,maxWater:i},msg:`h[${n}]=${t[n]}, h[${r}]=${t[r]}: water=${e}`,ln:3}),e>i&&(i=e,a=n,o=r,s.push({arr:t,p1:n,p2:r,found:[n,r],map:{curWater:e,maxWater:i},msg:`New max water=${e}!`,ln:4})),t[n]<t[r]?(s.push({arr:t,p1:n+1,p2:r,found:[],map:{curWater:e,maxWater:i},msg:`h[L]<h[R], move L→`,ln:5}),n++):(s.push({arr:t,p1:n,p2:r-1,found:[],map:{curWater:e,maxWater:i},msg:`h[L]≥h[R], ←R`,ln:6}),r--)}return s.push({arr:t,p1:a,p2:o,found:[a,o],map:{curWater:i,maxWater:i},msg:`✓ Max water=${i}`,ln:8}),s}function yt(e,t=8){return(e>>>0).toString(2).padStart(t,`0`)}function bt(e=23){let t=[],n=0,r=e;for(t.push({bits:yt(e),num:e,count:0,step:-1,msg:`Count set bits in ${e} = ${yt(e)}`,ln:0});r>0;){let e=r&1;t.push({bits:yt(r),num:r,count:n,step:0,msg:`num&1 = ${e}: ${e?`count++`:`skip`}, then num>>=1`,ln:2}),e&&n++,r>>=1,t.push({bits:yt(r),num:r,count:n,step:0,msg:`After shift: num=${r}=${yt(r)}, count=${n}`,ln:3})}return t.push({bits:yt(e),num:0,count:n,step:-1,msg:`✓ ${e} has ${n} set bits`,ln:5}),t}function xt(e=23){let t=[],n=0,r=e;for(t.push({bits:yt(e),num:e,count:0,step:-1,msg:`Brian Kernighan's trick: n&(n-1) clears lowest set bit`,ln:0});r>0;){let e=r,i=r-1,a=r&i;t.push({bits:yt(e),num:e,count:n,step:1,msg:`n=${e}=${yt(e)}, n-1=${i}=${yt(i)}`,ln:2}),t.push({bits:yt(a),num:a,count:n,step:1,msg:`n&(n-1)=${a}=${yt(a)} — cleared lowest bit`,ln:3}),r=a,n++,t.push({bits:yt(r),num:r,count:n,step:-1,msg:`count=${n}, ${r} remaining`,ln:4})}return t.push({bits:yt(e),num:0,count:n,step:-1,msg:`✓ ${e} has ${n} set bits — only loops once per set bit!`,ln:6}),t}function St(e=16){let t=Array(e+1).fill(0),n=[{dpArr:[...t],active:0,msg:`DP: dp[i] = dp[i>>1] + (i&1)`,ln:0}];for(let r=1;r<=e;r++)t[r]=t[r>>1]+(r&1),n.push({dpArr:[...t],active:r,msg:`dp[${r}]=dp[${r>>1}]+${r&1}=${t[r]} (${yt(r)})`,ln:2});return n.push({dpArr:[...t],active:-1,msg:`✓ All bit counts computed in O(n)!`,ln:4}),n}var R={inorder:N(`function inorder(root) {
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
// O(n)`),inorderIter:N(`function inorderIter(root) {
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
}`),preorder:N(`function preorder(root) {
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
}`),postorder:N(`function postorder(root) {
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
}`),bstSearchRec:N(`function search(root, val) {
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
}`),bstSearchIter:N(`function search(root, val) {
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
}`),bstInsert:N(`function insert(root, val) {
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
}`)},Ct={nqueens:N(`function solveNQueens(n) {
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
}`),nqBitmask:N(`function solveNQueens(n) {
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
}`),subsets:N(`function subsets(nums) {
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
}`)},wt={patBrute:N(`function search(text, pat) {
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
}`),kmp:N(`function kmpSearch(text, pat) {
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
}`)},Tt={maxSumBrute:N(`function maxSumK(arr, k) {
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
}`),maxSumSlide:N(`function maxSumK(arr, k) {
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
}`)},Et={actBrute:N(`// Brute: try all subsets
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
}`),actGreedy:N(`function activitySelection(acts) {
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
}`)},Dt={twoSum:N(`function twoSumSorted(arr, target) {
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
}`),removeDups:N(`function removeDuplicates(arr) {
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
}`),containerWater:N(`function maxWater(h) {
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
}`)},Ot={countBrute:N(`function countBits(n) {
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
// O(log n)`),countKernighan:N(`function countBits(n) {
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
// Brian Kernighan`),countDP:N(`function countBitsAll(n) {
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
// O(n)`)};function kt(e){let t={};return e.forEach((n,r)=>{t[r]={id:r,val:n,next:r<e.length-1?r+1:null}}),{nodes:t,head:e.length?0:null}}function At(e,t,n,r,i,a,o){return{nodes:{...e},head:t,pointers:{...n},highlighted:[...r],visited:[...i],msg:a,ln:o}}function jt(){let{nodes:e,head:t}=kt([1,4,3,2,5]),n={...e},r=[At(n,t,{head:t},[],[],`Reverse linked list iteratively`,0)],i=null,a=t;for(;a!==null;){let e=n[a].next;r.push(At(n,t,{prev:i??`∅`,cur:a,next:e??`∅`},[a],[],`Save next=${e??`null`}, point ${n[a].val}→${i===null?`null`:n[i].val}`,2)),n[a]={...n[a],next:i},r.push(At(n,t,{prev:a,cur:e??`∅`},[a],[a],`Reversed: ${n[a].val}→${i===null?`null`:n[i].val}`,3)),i=a,a=e}return r.push(At(n,i,{head:i},[],[...Object.keys(n).map(Number)],`✓ List reversed! New head=${n[i].val}`,5)),r}function Mt(){let{nodes:e,head:t}=kt([1,4,3,2,5]),n={...e},r=[At(n,t,{head:t},[],[],`Reverse recursively: go to end first`,0)],i=null;function a(e){if(r.push(At(n,t,{cur:e},[e],[],`Recurse to `+n[e].val,2)),n[e].next===null)return i=e,r.push(At(n,t,{newHead:e},[e],[e],`Base: `+n[e].val+` is new head`,3)),e;let o=n[e].next;a(o),n[o]={...n[o],next:e},n[e]={...n[e],next:null},r.push(At(n,i,{newHead:i},[e,o],[o],`${n[o].val}→${n[e].val} reversed`,4))}return a(t),r.push(At(n,i,{head:i},[],[...Object.keys(n).map(Number)],`✓ Reversed recursively!`,6)),r}function Nt(){let{nodes:e}=kt([3,1,4,1,5,9,2]),t={...e};t[6]={...t[6],next:2};let n=[At(t,0,{slow:0,fast:0},[],[],`Floyd's: slow moves 1, fast moves 2`,0)],r=0,i=0;for(let e=0;e<10;e++){let e=t[r]?.next,a=t[i]?.next,o=a===null?null:t[a]?.next;if(e===null||a===null||o===null)break;if(r=e,i=o,n.push(At(t,0,{slow:r,fast:i},[r,i],[],`slow=`+t[r].val+` fast=`+t[i].val,3)),r===i){n.push(At(t,0,{slow:r,fast:i,MEET:r},[r],[r],`⚠ Cycle detected! slow==fast at `+t[r].val,4));break}}return n}function Pt(){let e={},t={};[1,3,5].forEach((t,n)=>{e[n]={id:n,val:t,next:n<2?n+1:null}}),[2,4,6].forEach((e,n)=>{t[n+10]={id:n+10,val:e,next:n<2?n+11:null}});let n={...e,...t},r={id:99,val:`*`,next:null},i=[{nodes:{...n,99:r},head:99,pointers:{l:0,r:10},highlighted:[],visited:[],msg:`Merge two sorted lists [1,3,5] & [2,4,6]`,ln:0}],a=0,o=10,s=99,c={...n,99:r};for(;a!==null&&o!==null;){let n=e[a]?.val,r=t[o]?.val;i.push({nodes:{...c},head:99,pointers:{l:a??`∅`,r:o??`∅`,cur:s},highlighted:[a,o].filter(e=>e!==null),visited:[],msg:`Compare ${n} vs ${r}`,ln:3}),n<=r?(c[s]={...c[s],next:a},s=a,a=e[a].next,i.push({nodes:{...c},head:99,pointers:{l:a??`∅`,r:o,cur:s},highlighted:[s],visited:[s],msg:`Take ${n} from left`,ln:4})):(c[s]={...c[s],next:o},s=o,o=t[o].next,i.push({nodes:{...c},head:99,pointers:{l:a,r:o??`∅`,cur:s},highlighted:[s],visited:[s],msg:`Take ${r} from right`,ln:5}))}return a&&(c[s]={...c[s],next:a}),o&&(c[s]={...c[s],next:o}),i.push({nodes:{...c},head:99,pointers:{},highlighted:[],visited:[...Object.keys(c).map(Number)],msg:`✓ Merged: [1,2,3,4,5,6]`,ln:7}),i}function Ft(e=48,t=18){let n=[{a:e,b:t,cur:-1,gcd:-1,nums:[],msg:`GCD(${e},${t}): check all divisors from 1 to min`,ln:0}],r=1;for(let i=1;i<=Math.min(e,t);i++)n.push({a:e,b:t,cur:i,gcd:r,nums:[],msg:`Is ${i} a divisor of both ${e} and ${t}?`,ln:2}),e%i===0&&t%i===0&&(r=i,n.push({a:e,b:t,cur:i,gcd:r,nums:[],msg:`Yes! GCD so far = ${r}`,ln:3}));return n.push({a:e,b:t,cur:-1,gcd:r,nums:[],msg:`✓ GCD(${e},${t}) = ${r}`,ln:5}),n}function It(e=48,t=18){let n=[{a:e,b:t,cur:e,gcd:-1,nums:[e,t],msg:`Euclidean: GCD(${e},${t}) = GCD(${t}, ${e}%${t})`,ln:0}],r=e,i=t;for(;i!==0;){let a=r%i;n.push({a:e,b:t,cur:a,gcd:-1,nums:[r,i],msg:`GCD(${r},${i}): ${r} % ${i} = ${a}`,ln:2}),r=i,i=a,n.push({a:e,b:t,cur:i,gcd:i===0?r:-1,nums:[r,i],msg:i===0?`GCD found = ${r}`:`Now compute GCD(${r},${i})`,ln:3})}return n.push({a:e,b:t,cur:-1,gcd:r,nums:[r,0],msg:`✓ GCD(${e},${t}) = ${r} — O(log min(a,b))`,ln:5}),n}function Lt(e=30){let t=Array(e+1).fill(!0);t[0]=t[1]=!1;let n=[{nums:[...t],cur:-1,factor:-1,msg:`Sieve of Eratosthenes up to ${e}`,ln:0}];for(let r=2;r*r<=e;r++)if(t[r]){n.push({nums:[...t],cur:r,factor:r,msg:`${r} is prime — mark all multiples`,ln:2});for(let i=r*r;i<=e;i+=r)t[i]=!1,n.push({nums:[...t],cur:i,factor:r,msg:`Mark ${i}=${r}×${i/r} as composite`,ln:3})}let r=t.map((e,t)=>e?t:-1).filter(e=>e>1);return n.push({nums:[...t],cur:-1,factor:-1,msg:`✓ Primes: [${r}]`,ln:5}),n}function Rt(e=2,t=10){let n=[{a:e,b:t,cur:e,gcd:-1,nums:[e,t],msg:`Fast Power: ${e}^${t} using binary exponentiation`,ln:0}],r=1,i=e,a=t;for(;a>0;)n.push({a:e,b:t,cur:a,gcd:r,nums:[i,a],msg:`e=${a}, ${a}&1=${a&1}: ${a&1?`multiply result`:`skip`}`,ln:2}),a&1&&(r*=i,n.push({a:e,b:t,cur:a,gcd:r,nums:[i,a],msg:`result *= ${i} = ${r}`,ln:3})),i*=i,a>>=1,n.push({a:e,b:t,cur:a,gcd:r,nums:[i,a],msg:`Square base: ${i}, halve exp: ${a}`,ln:4});return n.push({a:e,b:t,cur:-1,gcd:r,nums:[r],msg:`✓ ${e}^${t} = ${r} — O(log n)!`,ln:6}),n}function zt(e=`({[]})`){let t=[{str:e,stack:[],idx:-1,valid:null,msg:`Valid Parentheses: "${e}" — brute check`,ln:0}];function n(e){if(e.length===0)return!0;for(let r=0;r<e.length-1;r++){let i=e[r]+e[r+1];if(i===`()`||i===`{}`||i===`[]`)return t.push({str:e,stack:[],idx:r,valid:null,msg:`Found pair "${i}" at ${r} — remove and repeat`,ln:2}),n(e.slice(0,r)+e.slice(r+2))}return!1}let r=n(e);return t.push({str:e,stack:[],idx:-1,valid:r,msg:`✓ "${e}" is ${r?`VALID`:`INVALID`}`,ln:4}),t}function Bt(e=`({[]})`){let t={"(":`)`,"[":`]`,"{":`}`},n=new Set(`([{`),r=[],i=[];i.push({str:e.split(``),stack:[],idx:-1,valid:null,msg:`Stack: match brackets as we scan`,ln:0});for(let a=0;a<e.length;a++){let o=e[a];if(i.push({str:e.split(``),stack:[...r],idx:a,valid:null,msg:`Char '${o}': ${n.has(o)?`push to stack`:`check against top`}`,ln:2}),n.has(o))r.push(o),i.push({str:e.split(``),stack:[...r],idx:a,valid:null,msg:`Pushed '${o}', stack=[${r}]`,ln:3});else{let n=r[r.length-1];if(!r.length||t[n]!==o)return i.push({str:e.split(``),stack:[...r],idx:a,valid:!1,msg:`✗ Mismatch: expected '${t[n]}' got '${o}'`,ln:5}),i;r.pop(),i.push({str:e.split(``),stack:[...r],idx:a,valid:null,msg:`Matched '${n}${o}', stack=[${r}]`,ln:4})}}let a=r.length===0;return i.push({str:e.split(``),stack:[...r],idx:-1,valid:a,msg:`✓ "${e}" is ${a?`VALID`:`INVALID — unmatched brackets`}`,ln:7}),i}function Vt(e){let t=e,n=t.length,r=Array(n).fill(-1),i=[];i.push({a:t,stack:[],result:[...r],idx:-1,msg:`Next Greater Element — brute O(n²)`,ln:0});for(let e=0;e<n;e++){i.push({a:t,stack:[],result:[...r],idx:e,msg:`Find next greater for a[${e}]=${t[e]}`,ln:2});for(let a=e+1;a<n;a++)if(i.push({a:t,stack:[a],result:[...r],idx:e,msg:`a[${a}]=${t[a]} > a[${e}]=${t[e]}?`,ln:3}),t[a]>t[e]){r[e]=t[a],i.push({a:t,stack:[a],result:[...r],idx:e,msg:`Found! NGE[${e}]=${t[a]}`,ln:4});break}}return i.push({a:t,stack:[],result:[...r],idx:-1,msg:`✓ NGE: [${r}]`,ln:6}),i}function Ht(e){let t=e,n=t.length,r=Array(n).fill(-1),i=[],a=[];a.push({a:t,stack:[...i],result:[...r],idx:-1,msg:`NGE with Monotonic Stack O(n)`,ln:0});for(let e=0;e<n;e++){for(a.push({a:t,stack:[...i],result:[...r],idx:e,msg:`Process a[${e}]=${t[e]}`,ln:2});i.length&&t[i[i.length-1]]<t[e];){let n=i.pop();r[n]=t[e],a.push({a:t,stack:[...i],result:[...r],idx:e,msg:`NGE[${n}]=${t[e]} (popped ${t[n]}<${t[e]})`,ln:3})}i.push(e),a.push({a:t,stack:[...i],result:[...r],idx:e,msg:`Push index ${e}, stack=[${i.map(e=>t[e])}]`,ln:4})}return a.push({a:t,stack:[],result:[...r],idx:-1,msg:`✓ NGE: [${r}] — single pass!`,ln:6}),a}function Ut(){let e=[`push 3`,`push 5`,`push 2`,`push 1`,`pop`,`getMin`,`pop`,`getMin`],t=[],n=[],r=[];r.push({a:t.map(e=>e.v),stack:[...t],result:[...n.map(e=>e.v)],idx:-1,msg:`Min Stack: O(1) push/pop/getMin`,ln:0});for(let i of e)if(i.startsWith(`push`)){let e=+i.split(` `)[1];t.push({v:e});let a=n.length?Math.min(e,n[n.length-1].v):e;n.push({v:a}),r.push({a:t.map(e=>e.v),stack:[...t.map(e=>e.v)],result:[...n.map(e=>e.v)],idx:e,msg:`push(${e}): stack=[${t.map(e=>e.v)}], minStack=[${n.map(e=>e.v)}]`,ln:2})}else if(i===`pop`){let e=t.pop()?.v;n.pop(),r.push({a:t.map(e=>e.v),stack:[...t.map(e=>e.v)],result:[...n.map(e=>e.v)],idx:-1,msg:`pop() removed ${e}: stack=[${t.map(e=>e.v)}]`,ln:4})}else if(i===`getMin`){let e=n[n.length-1]?.v;r.push({a:t.map(e=>e.v),stack:[...t.map(e=>e.v)],result:[...n.map(e=>e.v)],idx:e,msg:`getMin() = ${e} — O(1)!`,ln:6})}return r}var Wt=`ABCBD`,Gt=`BDCAB`;function Kt(e=Wt,t=Gt){let n=0,r=[];r.push({s1:e,s2:t,table:null,i:-1,j:-1,result:null,msg:`LCS("${e}","${t}") — recursive O(2^n)`,ln:0});function i(a,o){if(n++,r.push({s1:e,s2:t,table:null,i:a,j:o,result:null,msg:`lcs(${a},${o}): compare '${e[a-1]||`∅`}' vs '${t[o-1]||`∅`}' — calls:${n}`,ln:2}),a===0||o===0)return 0;if(e[a-1]===t[o-1]){let n=1+i(a-1,o-1);return r.push({s1:e,s2:t,table:null,i:a,j:o,result:n,msg:`Match! +1 → ${n}`,ln:3}),n}let s=Math.max(i(a-1,o),i(a,o-1));return r.push({s1:e,s2:t,table:null,i:a,j:o,result:s,msg:`No match: max=${s}`,ln:4}),s}let a=i(Math.min(e.length,5),Math.min(t.length,5));return r.push({s1:e,s2:t,table:null,i:-1,j:-1,result:a,msg:`✓ LCS="${a}" — ${n} calls! O(2^n)`,ln:6}),r}function qt(e=Wt,t=Gt){let n=e.length,r=t.length,i={},a=[],o=()=>Array.from({length:n+1},(e,t)=>Array.from({length:r+1},(e,n)=>i[`${t},${n}`]??null));a.push({s1:e,s2:t,table:o(),i:-1,j:-1,result:null,msg:`LCS Memoization — cache subproblems`,ln:0});function s(n,r){let c=`${n},${r}`;return c in i?(a.push({s1:e,s2:t,table:o(),i:n,j:r,result:i[c],msg:`Cache hit! memo[${n},${r}]=${i[c]}`,ln:1}),i[c]):n===0||r===0?(i[c]=0,0):(a.push({s1:e,s2:t,table:o(),i:n,j:r,result:null,msg:`Compute lcs(${n},${r}): '${e[n-1]}' vs '${t[r-1]}'`,ln:3}),e[n-1]===t[r-1]?i[c]=1+s(n-1,r-1):i[c]=Math.max(s(n-1,r),s(n,r-1)),a.push({s1:e,s2:t,table:o(),i:n,j:r,result:i[c],msg:`memo[${n},${r}]=${i[c]}`,ln:4}),i[c])}let c=s(n,r);return a.push({s1:e,s2:t,table:o(),i:-1,j:-1,result:c,msg:`✓ LCS length=${c} — only ${Object.keys(i).length} unique subproblems`,ln:6}),a}function Jt(e=Wt,t=Gt){let n=e.length,r=t.length,i=Array.from({length:n+1},()=>Array(r+1).fill(0)),a=[];a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:0,j:0,result:null,msg:`LCS DP table (${n+1}×${r+1}): fill bottom-up`,ln:0});for(let o=1;o<=n;o++)for(let n=1;n<=r;n++)a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`Compare s1[${o-1}]='${e[o-1]}' vs s2[${n-1}]='${t[n-1]}'`,ln:3}),e[o-1]===t[n-1]?(i[o][n]=i[o-1][n-1]+1,a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`Match! dp[${o}][${n}]=dp[${o-1}][${n-1}]+1=${i[o][n]}`,ln:4})):(i[o][n]=Math.max(i[o-1][n],i[o][n-1]),a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`No match: dp[${o}][${n}]=max(${i[o-1][n]},${i[o][n-1]})=${i[o][n]}`,ln:5}));return a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:-1,j:-1,result:i[n][r],msg:`✓ LCS length=${i[n][r]} — O(mn) time+space`,ln:7}),a}var Yt=`CAKE`,Xt=`LAKE`;function Zt(e=Yt,t=Xt){let n=0,r=[];r.push({s1:e,s2:t,table:null,i:-1,j:-1,result:null,msg:`Edit Distance: min ops to convert "${e}"→"${t}"`,ln:0});function i(a,o){if(n++,a===0)return o;if(o===0)return a;if(r.push({s1:e,s2:t,table:null,i:a,j:o,result:null,msg:`ed(${a},${o}): '${e[a-1]}' vs '${t[o-1]}' — calls:${n}`,ln:2}),e[a-1]===t[o-1])return i(a-1,o-1);let s=1+Math.min(i(a-1,o),i(a,o-1),i(a-1,o-1));return r.push({s1:e,s2:t,table:null,i:a,j:o,result:s,msg:`Insert/Delete/Replace → ${s}`,ln:3}),s}let a=i(e.length,t.length);return r.push({s1:e,s2:t,table:null,i:-1,j:-1,result:a,msg:`✓ Edit distance=${a} — ${n} calls`,ln:5}),r}function Qt(e=Yt,t=Xt){let n=e.length,r=t.length,i={},a=[],o=()=>Array.from({length:n+1},(e,t)=>Array.from({length:r+1},(e,n)=>i[`${t},${n}`]??null));a.push({s1:e,s2:t,table:o(),i:-1,j:-1,result:null,msg:`Edit Distance with memoization`,ln:0});function s(n,r){let c=`${n},${r}`;return c in i?i[c]:n===0?i[c]=r:r===0?i[c]=n:(a.push({s1:e,s2:t,table:o(),i:n,j:r,result:null,msg:`ed(${n},${r}): '${e[n-1]}' vs '${t[r-1]}'`,ln:3}),e[n-1]===t[r-1]?i[c]=s(n-1,r-1):i[c]=1+Math.min(s(n-1,r),s(n,r-1),s(n-1,r-1)),a.push({s1:e,s2:t,table:o(),i:n,j:r,result:i[c],msg:`Cached ed(${n},${r})=${i[c]}`,ln:4}),i[c])}let c=s(n,r);return a.push({s1:e,s2:t,table:o(),i:-1,j:-1,result:c,msg:`✓ Edit distance=${c}`,ln:6}),a}function $t(e=Yt,t=Xt){let n=e.length,r=t.length,i=Array.from({length:n+1},(e,t)=>Array.from({length:r+1},(e,n)=>t===0?n:n===0?t:0)),a=[{s1:e,s2:t,table:i.map(e=>[...e]),i:0,j:0,result:null,msg:`Edit Distance table: base cases set (row0=0..n, col0=0..m)`,ln:0}];for(let o=1;o<=n;o++)for(let n=1;n<=r;n++)a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`'${e[o-1]}' vs '${t[n-1]}': ${e[o-1]===t[n-1]?`match→copy diagonal`:`min(del,ins,replace)`}`,ln:3}),e[o-1]===t[n-1]?i[o][n]=i[o-1][n-1]:i[o][n]=1+Math.min(i[o-1][n],i[o][n-1],i[o-1][n-1]),a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:o,j:n,result:null,msg:`dp[${o}][${n}]=${i[o][n]} (del:${i[o-1][n]},ins:${i[o][n-1]},rep:${i[o-1][n-1]})`,ln:5});return a.push({s1:e,s2:t,table:i.map(e=>[...e]),i:-1,j:-1,result:i[n][r],msg:`✓ Edit distance="${i[n][r]}"`,ln:7}),a}var en=[10,9,2,5,3,7,18,6];function tn(e=en){let t=e.length,n=[],r=[];n.push({a:e,dp:Array(t).fill(1),cur:-1,prev:-1,result:null,msg:`LIS brute: check all subsequences O(2^n)`,ln:0});function i(a,o,s){if(a===t){(s.length>r.length||r.length===0)&&(r.length=0,s.forEach(e=>r.push(e))),n.push({a:e,dp:Array(t).fill(1),cur:a,prev:o,result:s.length,msg:`Subseq: [${s}] len=${s.length}`,ln:2});return}(o===-1||e[a]>e[o])&&i(a+1,a,[...s,e[a]]),i(a+1,o,s)}return i(0,-1,[]),n.push({a:e,dp:Array(t).fill(1),cur:-1,prev:-1,result:r.length,msg:`✓ LIS=[${r}] length=${r.length}`,ln:4}),n}function nn(e=en){let t=e.length,n=Array(t).fill(1),r=[];r.push({a:e,dp:[...n],cur:-1,prev:-1,result:null,msg:`LIS DP: dp[i]=longest ending at arr[i]`,ln:0});let i=1;for(let a=1;a<t;a++){r.push({a:e,dp:[...n],cur:a,prev:-1,result:null,msg:`Find LIS ending at a[${a}]=${e[a]}`,ln:2});for(let t=0;t<a;t++)r.push({a:e,dp:[...n],cur:a,prev:t,result:null,msg:`a[${t}]=${e[t]}<a[${a}]=${e[a]}? → extend dp[${t}]+1`,ln:3}),e[t]<e[a]&&n[t]+1>n[a]&&(n[a]=n[t]+1,r.push({a:e,dp:[...n],cur:a,prev:t,result:null,msg:`dp[${a}]=${n[a]}`,ln:4}));i=Math.max(i,n[a])}return r.push({a:e,dp:[...n],cur:-1,prev:-1,result:i,msg:`✓ LIS length=${i} — O(n²)`,ln:6}),r}function rn(e=en){let t=[],n=[];n.push({a:e,dp:[...t],cur:-1,prev:-1,result:null,msg:`LIS binary search (Patience Sort): O(n log n)`,ln:0});for(let r=0;r<e.length;r++){let i=0,a=t.length;for(n.push({a:e,dp:[...t],cur:r,prev:-1,result:null,msg:`Process ${e[r]}: binary search in tails=[${t}]`,ln:2});i<a;){let n=i+a>>1;t[n]<e[r]?i=n+1:a=n}t[i]=e[r],n.push({a:e,dp:[...t],cur:r,prev:i,result:null,msg:`Place ${e[r]} at tails[${i}]: [${t}]`,ln:3})}return n.push({a:e,dp:[...t],cur:-1,prev:-1,result:t.length,msg:`✓ LIS length=${t.length} — O(n log n)!`,ln:5}),n}var an=[{w:2,v:6},{w:2,v:10},{w:3,v:12}],on=5;function sn(){let e=an,t=on,n=0,r=[];r.push({items:e,cap:t,table:null,i:-1,j:-1,result:null,msg:`0/1 Knapsack brute: items=${JSON.stringify(e)} cap=${t}`,ln:0});function i(a,o){if(n++,a===0||o===0)return 0;if(r.push({items:e,cap:t,table:null,i:a,j:o,result:null,msg:`ks(${a},${o}): item w=${e[a-1].w} v=${e[a-1].v} — calls:${n}`,ln:2}),e[a-1].w>o)return i(a-1,o);let s=Math.max(i(a-1,o),e[a-1].v+i(a-1,o-e[a-1].w));return r.push({items:e,cap:t,table:null,i:a,j:o,result:s,msg:`ks(${a},${o})=${s}`,ln:3}),s}let a=i(e.length,t);return r.push({items:e,cap:t,table:null,i:-1,j:-1,result:a,msg:`✓ Max value=${a} — ${n} recursive calls`,ln:5}),r}function cn(){let e=an,t=on,n=e.length,r={},i=[],a=()=>Array.from({length:n+1},(e,n)=>Array.from({length:t+1},(e,t)=>r[`${n},${t}`]??null));i.push({items:e,cap:t,table:a(),i:-1,j:-1,result:null,msg:`Knapsack memoization`,ln:0});function o(n,s){let c=`${n},${s}`;return c in r?(i.push({items:e,cap:t,table:a(),i:n,j:s,result:r[c],msg:`Cache hit! ks(${n},${s})=${r[c]}`,ln:1}),r[c]):n===0||s===0?r[c]=0:(i.push({items:e,cap:t,table:a(),i:n,j:s,result:null,msg:`ks(${n},${s}): item w=${e[n-1].w} v=${e[n-1].v}`,ln:3}),e[n-1].w>s?r[c]=o(n-1,s):r[c]=Math.max(o(n-1,s),e[n-1].v+o(n-1,s-e[n-1].w)),i.push({items:e,cap:t,table:a(),i:n,j:s,result:r[c],msg:`ks(${n},${s})=${r[c]} cached`,ln:4}),r[c])}let s=o(n,t);return i.push({items:e,cap:t,table:a(),i:-1,j:-1,result:s,msg:`✓ Max value=${s} — only ${Object.keys(r).length} unique states`,ln:6}),i}function ln(){let e=an,t=on,n=e.length,r=Array.from({length:n+1},()=>Array(t+1).fill(0)),i=[];i.push({items:e,cap:t,table:r.map(e=>[...e]),i:0,j:0,result:null,msg:`Knapsack 2D DP table (${n+1}×${t+1})`,ln:0});for(let a=1;a<=n;a++)for(let n=0;n<=t;n++)i.push({items:e,cap:t,table:r.map(e=>[...e]),i:a,j:n,result:null,msg:`Item ${a} (w=${e[a-1].w},v=${e[a-1].v}), capacity=${n}`,ln:3}),e[a-1].w>n?(r[a][n]=r[a-1][n],i.push({items:e,cap:t,table:r.map(e=>[...e]),i:a,j:n,result:null,msg:`Too heavy: dp[${a}][${n}]=dp[${a-1}][${n}]=${r[a][n]}`,ln:4})):(r[a][n]=Math.max(r[a-1][n],e[a-1].v+r[a-1][n-e[a-1].w]),i.push({items:e,cap:t,table:r.map(e=>[...e]),i:a,j:n,result:null,msg:`max(skip=${r[a-1][n]},take=${e[a-1].v}+${r[a-1][n-e[a-1].w]})=${r[a][n]}`,ln:5}));return i.push({items:e,cap:t,table:r.map(e=>[...e]),i:-1,j:-1,result:r[n][t],msg:`✓ Max value=${r[n][t]} — O(n×W) time`,ln:7}),i}var un=[`app`,`apple`,`apply`,`apt`,`bat`,`ball`];function dn(e){let t={0:{id:0,char:``,children:{},isEnd:!1,depth:0}},n=1;for(let r of e){let e=0;for(let i of r)t[e].children[i]||(t[n]={id:n,char:i,children:{},isEnd:!1,depth:t[e].depth+1,parent:e,parentChar:i},t[e].children[i]=n,n++),e=t[e].children[i];t[e].isEnd=!0}return{nodes:t,root:0}}function fn(e,t){let n={},r={},i=[t];for(r[t]=0;i.length;){let t=i.shift();Object.values(e[t].children).forEach(e=>{r[e]=r[t]+1,i.push(e)})}let a={};return Object.keys(r).forEach(e=>{let t=r[e];a[t]||(a[t]=[]),a[t].push(+e)}),Object.keys(a).forEach(e=>{let t=a[e],r=t.length;t.forEach((t,i)=>{n[t]={x:(i+1)*(480/(r+1)),y:e*52+30}})}),n}function pn(e,t,n,r,i,a,o){return{nodes:{...e},root:t,positions:fn(e,t),highlighted:n,path:[...r],found:i,msg:a,ln:o}}function mn(){let e=un,t=[],n={0:{id:0,char:``,children:{},isEnd:!1,depth:0}},r=1;t.push(pn({...n},0,[],[],null,`Trie: insert words one by one`,0));for(let i of e){let e=0,a=[];t.push(pn({...n},0,[],[],null,`Insert "${i}"`,1));for(let o of i)n[e].children[o]?t.push(pn({...n},0,[n[e].children[o]],[...a,n[e].children[o]],null,`'${o}' exists, follow`,2)):(n[r]={id:r,char:o,children:{},isEnd:!1,depth:n[e].depth+1,parent:e},n[e].children[o]=r,t.push(pn({...n},0,[r],[...a,r],null,`Create node '${o}' for "${i}"`,3)),r++),a.push(n[e].children[o]),e=n[e].children[o];n[e].isEnd=!0,t.push(pn({...n},0,[e],[...a],e,`Mark end of "${i}"`,4))}return t.push(pn({...n},0,[],[],null,`✓ Trie built with ${r} nodes for ${e.length} words`,6)),t}function hn(){let e=`apple`,{nodes:t,root:n}=dn(un),r=[],i=[];i.push(pn(t,n,[],[],null,`Search "${e}" in Trie`,0));let a=n;for(let o of e){if(i.push(pn(t,n,[a],[...r],null,`At node '${t[a].char||`root`}': look for '${o}'`,2)),!t[a].children[o])return i.push(pn(t,n,[a],[...r],null,`'${o}' not found — "${e}" NOT in trie`,4)),i;a=t[a].children[o],r.push(a),i.push(pn(t,n,[a],[...r],null,`Found '${o}', advance`,3))}let o=t[a].isEnd;return i.push(pn(t,n,[a],[...r],o?a:null,`isEnd=${o}: "${e}" ${o?`FOUND ✓`:`exists as prefix only`}`,5)),i}function gn(){let{nodes:e,root:t}=dn(un),n=[],r=[],i=[];i.push(pn(e,t,[],[],null,`Prefix search: find all words starting with "ap"`,0));let a=t;for(let r of`ap`){if(i.push(pn(e,t,[a],[...n],null,`Navigate to '${r}'`,1)),!e[a].children[r])return i.push(pn(e,t,[a],[...n],null,`No words with prefix "ap"`,3)),i;a=e[a].children[r],n.push(a)}i.push(pn(e,t,[a],[...n],null,`Reached prefix "ap" — DFS to find all endings`,2));function o(a,s){e[a].isEnd&&(r.push(s),i.push(pn(e,t,[a],[...n],a,`Found word: "${s}"`,4))),Object.entries(e[a].children).forEach(([e,t])=>o(t,s+e))}return o(a,`ap`),i.push(pn(e,t,[],[...n],null,`✓ Words with "ap": [${r.join(`, `)}]`,6)),i}var _n=[{id:0,label:`A`,x:80,y:130},{id:1,label:`B`,x:200,y:60},{id:2,label:`C`,x:200,y:200},{id:3,label:`D`,x:320,y:60},{id:4,label:`E`,x:320,y:200},{id:5,label:`F`,x:440,y:130}],vn=[{f:0,t:1,w:1},{f:0,t:2,w:1},{f:1,t:3,w:1},{f:1,t:4,w:1},{f:2,t:4,w:1},{f:3,t:5,w:1},{f:4,t:5,w:1}],yn=_n.map((e,t)=>vn.filter(e=>e.f===t).map(e=>e.t)),bn=_n.map((e,t)=>vn.filter(e=>e.t===t).length);function xn(e,t,n,r,i,a){return{nodes:_n,edges:vn,visited:[...e],current:t,queue:[...n],distances:{},path:[...r],msg:i,ln:a}}function Sn(){let e=[...bn],t=[],n=[],r=new Set,i=[];for(let n=0;n<_n.length;n++)e[n]===0&&t.push(n);for(i.push(xn(r,-1,[...t],[],`Kahn's: add all 0-indegree nodes to queue: [${t.map(e=>_n[e].label)}]`,0));t.length;){let a=t.shift();n.push(a),r.add(a),i.push(xn(r,a,[...t],[...n],`Process ${_n[a].label}, add to order`,3));for(let o of yn[a])e[o]--,i.push(xn(r,a,[...t],[...n],`Reduce indeg[${_n[o].label}] to ${e[o]}`,4)),e[o]===0&&(t.push(o),i.push(xn(r,a,[...t],[...n],`${_n[o].label} now has indeg=0, enqueue`,5)))}return i.push(xn(r,-1,[],[...n],`✓ Topo order: ${n.map(e=>_n[e].label).join(`→`)}`,7)),i}function Cn(){let e=new Set,t=[],n=[];n.push(xn(e,-1,[],[],`DFS Topo: run DFS, push to stack after exploring`,0));function r(i){e.add(i),n.push(xn(e,i,[],[...t],`DFS visit ${_n[i].label}`,2));for(let a of yn[i])e.has(a)||(n.push(xn(e,i,[a],[...t],`Recurse into ${_n[a].label}`,3)),r(a));t.unshift(i),n.push(xn(e,-1,[],[...t],`Push ${_n[i].label} to front of result`,4))}for(let t=0;t<_n.length;t++)e.has(t)||r(t);return n.push(xn(e,-1,[],[...t],`✓ Topo order: ${t.map(e=>_n[e].label).join(`→`)}`,6)),n}var z=[{id:0,label:`A`,x:80,y:130},{id:1,label:`B`,x:220,y:50},{id:2,label:`C`,x:220,y:210},{id:3,label:`D`,x:360,y:50},{id:4,label:`E`,x:360,y:210},{id:5,label:`F`,x:500,y:130}],wn=[{f:0,t:1,w:4},{f:0,t:2,w:2},{f:1,t:2,w:1},{f:1,t:3,w:5},{f:2,t:4,w:8},{f:2,t:3,w:3},{f:3,t:5,w:2},{f:4,t:5,w:4}];function Tn(){let e=[...wn].sort((e,t)=>e.w-t.w),t=z.map((e,t)=>t),n=Array(z.length).fill(0);function r(e){return t[e]===e?e:t[e]=r(t[e])}function i(e,i){let a=r(e),o=r(i);return a===o?!1:(n[a]<n[o]?t[a]=o:n[a]>n[o]?t[o]=a:(t[o]=a,n[a]++),!0)}let a=[],o=new Set,s=[];s.push({nodes:z,edges:wn,visited:[],current:-1,queue:[],distances:{},path:[],mstEdges:[],msg:`Kruskal's: sort edges by weight, add if no cycle`,ln:0});for(let t of e)s.push({nodes:z,edges:wn,visited:[t.f,t.t],current:t.f,queue:[t.t],distances:{},path:[],mstEdges:[...a],msg:`Try edge ${z[t.f].label}-${z[t.t].label} w=${t.w}`,ln:3}),i(t.f,t.t)?(a.push(t),o.add(t.f),o.add(t.t),s.push({nodes:z,edges:wn,visited:[...o],current:t.f,queue:[],distances:{},path:[],mstEdges:[...a],msg:`✓ Added! MST cost+=${t.w}, total=${a.reduce((e,t)=>e+t.w,0)}`,ln:4})):s.push({nodes:z,edges:wn,visited:[...o],current:-1,queue:[],distances:{},path:[],mstEdges:[...a],msg:`Skip — would create cycle`,ln:5});let c=a.reduce((e,t)=>e+t.w,0);return s.push({nodes:z,edges:wn,visited:[...o],current:-1,queue:[],distances:{},path:[],mstEdges:[...a],msg:`✓ MST cost=${c} with ${a.length} edges`,ln:7}),s}function En(){let e=z.length,t=Array(e).fill(1/0),n=Array(e).fill(!1),r=Array(e).fill(-1);t[0]=0;let i=[],a=new Set,o=[];o.push({nodes:z,edges:wn,visited:[],current:-1,queue:[0],distances:t.reduce((e,t,n)=>({...e,[n]:t===1/0?`∞`:t}),{}),path:[],mstEdges:[],msg:`Prim's: grow MST from node A`,ln:0});for(let s=0;s<e;s++){let s=-1;for(let r=0;r<e;r++)!n[r]&&(s===-1||t[r]<t[s])&&(s=r);n[s]=!0,a.add(s),r[s]!==-1&&i.push({f:r[s],t:s,w:t[s]}),o.push({nodes:z,edges:wn,visited:[...a],current:s,queue:[],distances:t.reduce((e,t,n)=>({...e,[n]:t===1/0?`∞`:t}),{}),path:[],mstEdges:[...i],msg:`Add ${z[s].label} to MST (key=${t[s]})`,ln:3});for(let e of wn.filter(e=>e.f===s||e.t===s)){let c=e.f===s?e.t:e.f;!n[c]&&e.w<t[c]&&(t[c]=e.w,r[c]=s,o.push({nodes:z,edges:wn,visited:[...a],current:s,queue:[c],distances:t.reduce((e,t,n)=>({...e,[n]:t===1/0?`∞`:t}),{}),path:[],mstEdges:[...i],msg:`Update key[${z[c].label}]=${e.w}`,ln:4}))}}let s=i.reduce((e,t)=>e+t.w,0);return o.push({nodes:z,edges:wn,visited:[...a],current:-1,queue:[],distances:t.reduce((e,t,n)=>({...e,[n]:t}),{}),path:[],mstEdges:[...i],msg:`✓ MST cost=${s}`,ln:6}),o}function Dn(){let e=z.length,t=1/0,n=Array.from({length:e},(n,r)=>Array.from({length:e},(e,n)=>{if(r===n)return 0;let i=wn.find(e=>e.f===r&&e.t===n||e.f===n&&e.t===r);return i?i.w:t})),r=[{nodes:z,edges:wn,visited:[],current:-1,queue:[],distances:{},path:[],distMatrix:n.map(e=>e.map(e=>e===t?`∞`:e)),k:-1,i:-1,j:-1,msg:`Floyd-Warshall: all-pairs shortest paths`,ln:0}];for(let i=0;i<e;i++){r.push({nodes:z,edges:wn,visited:[i],current:i,queue:[],distances:{},path:[],distMatrix:n.map(e=>e.map(e=>e===t?`∞`:e)),k:i,i:-1,j:-1,msg:`Use ${z[i].label} as intermediate node`,ln:2});for(let a=0;a<e;a++)for(let o=0;o<e;o++)n[a][i]!==t&&n[i][o]!==t&&n[a][i]+n[i][o]<n[a][o]&&(n[a][o]=n[a][i]+n[i][o],r.push({nodes:z,edges:wn,visited:[i,a,o],current:i,queue:[],distances:{},path:[a,i,o],distMatrix:n.map(e=>e.map(e=>e===t?`∞`:e)),k:i,i:a,j:o,msg:`Shorter path ${z[a].label}→${z[i].label}→${z[o].label}: ${n[a][o]}`,ln:3}))}return r.push({nodes:z,edges:wn,visited:[...Array.from({length:e},(e,t)=>t)],current:-1,queue:[],distances:{},path:[],distMatrix:n.map(e=>e.map(e=>e===t?`∞`:e)),k:-1,i:-1,j:-1,msg:`✓ All-pairs shortest paths computed!`,ln:5}),r}var On=[{u:0,v:1},{u:2,v:3},{u:4,v:5},{u:0,v:2},{u:1,v:6},{u:3,v:7},{u:0,v:4}];function kn(e){let t={};return e.forEach((n,r)=>{let i=r;for(;e[i]!==i;)i=e[i];t[i]||(t[i]=[]),t[i].push(r)}),t}function An(e,t,n,r,i){return{parent:[...e],rank:[...t],highlighted:n,components:kn(e),msg:r,ln:i}}function jn(){let e=Array.from({length:8},(e,t)=>t),t=[];t.push({parent:[...e],rank:Array(8).fill(0),highlighted:[],components:kn(e),msg:`Quick Find: id[i]=component ID. Find=O(1), Union=O(n)`,ln:0});for(let{u:n,v:r}of On){if(t.push(An(e,Array(8).fill(0),[n,r],`Union(${n},${r}): find id[${n}]=${e[n]}, id[${r}]=${e[r]}`,2)),e[n]===e[r]){t.push(An(e,Array(8).fill(0),[n,r],`Already connected! id[${n}]=id[${r}]=${e[n]}`,3));continue}let i=e[r];for(let t=0;t<8;t++)e[t]===i&&(e[t]=e[n]);t.push(An(e,Array(8).fill(0),[n,r],`Union done: relabeled all ${i}→${e[n]} (O(n) scan!)`,4))}return t.push(An(e,Array(8).fill(0),[],`✓ All unions done — ${Object.keys(kn(e)).length} components`,6)),t}function Mn(){let e=Array.from({length:8},(e,t)=>t),t=Array(8).fill(0),n=[];n.push(An(e,t,[],`Quick Union: parent[i]=parent node. Find=O(n) tree height, Union=O(1)`,0));function r(t){let n=t;for(;e[n]!==n;)n=e[n];return n}for(let{u:i,v:a}of On){let o=r(i),s=r(a);if(n.push(An(e,t,[i,a,o,s],`Union(${i},${a}): root(${i})=${o}, root(${a})=${s}`,2)),o===s){n.push(An(e,t,[o],`Already same component (root=${o})`,3));continue}e[s]=o,n.push(An(e,t,[o,s],`Set parent[${s}]=${o} — tree may get tall!`,4))}return n.push(An(e,t,[],`✓ Done — but trees can be O(n) tall → slow find!`,6)),n}function Nn(){let e=Array.from({length:8},(e,t)=>t),t=Array(8).fill(0),n=[];n.push(An(e,t,[],`Weighted Union + Path Compression: O(α(n)) ≈ O(1) amortized`,0));function r(i){return e[i]!==i&&(n.push(An(e,t,[i,e[i]],`Path compress: parent[${i}]=${e[i]}→root`,2)),e[i]=r(e[i])),e[i]}function i(i,a){let o=r(i),s=r(a);o!==s&&(t[o]<t[s]?(e[o]=s,n.push(An(e,t,[o,s],`Attach smaller rank tree ${o} under ${s}`,4))):t[o]>t[s]?(e[s]=o,n.push(An(e,t,[o,s],`Attach ${s} under ${o}`,4))):(e[s]=o,t[o]++,n.push(An(e,t,[o,s],`Equal rank: attach ${s}→${o}, rank[${o}]=${t[o]}`,4))))}for(let{u:r,v:a}of On)n.push(An(e,t,[r,a],`Union(${r},${a})`,1)),i(r,a),n.push(An(e,t,[],`Components: ${Object.keys(kn(e)).length}`,5));return n.push(An(e,t,[],`✓ O(α(n)) — effectively constant time!`,6)),n}var Pn=[1,3,5,7,9,11];function Fn(e=Pn){let t=[{arr:[...e],tree:[],node:-1,ql:1,qr:3,result:null,building:!1,msg:`Brute range sum: scan every element O(n)`,ln:0}];for(let n=0;n<e.length-1;n+=2){let r=n+2<e.length?n+2:e.length-1,i=0;t.push({arr:[...e],tree:[],node:-1,ql:n,qr:r,result:null,building:!1,msg:`Range sum [${n}..${r}]: start scan`,ln:2});for(let a=n;a<=r;a++)i+=e[a],t.push({arr:[...e],tree:[],node:a,ql:n,qr:r,result:i,building:!1,msg:`Add arr[${a}]=${e[a]}, sum=${i}`,ln:3});t.push({arr:[...e],tree:[],node:-1,ql:n,qr:r,result:i,building:!1,msg:`Sum[${n}..${r}]=${i} — O(n) per query`,ln:4})}return t}function In(e=Pn){let t=e.length,n=Array(4*t).fill(0),r=[];r.push({arr:[...e],tree:[...n],node:-1,ql:0,qr:t-1,result:null,building:!0,msg:`Build segment tree from [${e}]`,ln:0});function i(t,a,o){if(r.push({arr:[...e],tree:[...n],node:t,ql:a,qr:o,result:null,building:!0,msg:`Build node ${t} for range [${a}..${o}]`,ln:2}),a===o){n[t]=e[a],r.push({arr:[...e],tree:[...n],node:t,ql:a,qr:o,result:e[a],building:!0,msg:`Leaf: tree[${t}]=arr[${a}]=${e[a]}`,ln:3});return}let s=a+o>>1;i(2*t,a,s),i(2*t+1,s+1,o),n[t]=n[2*t]+n[2*t+1],r.push({arr:[...e],tree:[...n],node:t,ql:a,qr:o,result:n[t],building:!0,msg:`tree[${t}]=${n[2*t]}+${n[2*t+1]}=${n[t]}`,ln:4})}i(1,0,t-1),r.push({arr:[...e],tree:[...n],node:1,ql:0,qr:t-1,result:n[1],building:!1,msg:`Tree built! Root=tree[1]=${n[1]} (total sum). Now query:`,ln:6});function a(t,i,o,s,c){if(r.push({arr:[...e],tree:[...n],node:t,ql:s,qr:c,result:null,building:!1,msg:`Query [${s}..${c}] at node ${t}=[${i}..${o}]`,ln:8}),c<i||o<s)return r.push({arr:[...e],tree:[...n],node:t,ql:s,qr:c,result:0,building:!1,msg:`Out of range → return 0`,ln:9}),0;if(s<=i&&o<=c)return r.push({arr:[...e],tree:[...n],node:t,ql:s,qr:c,result:n[t],building:!1,msg:`Fully covered → return ${n[t]}`,ln:10}),n[t];let l=i+o>>1,u=a(2*t,i,l,s,c),d=a(2*t+1,l+1,o,s,c);return r.push({arr:[...e],tree:[...n],node:t,ql:s,qr:c,result:u+d,building:!1,msg:`Partial: left=${u}+right=${d}=${u+d}`,ln:11}),u+d}let o=a(1,0,t-1,1,4);return r.push({arr:[...e],tree:[...n],node:1,ql:1,qr:4,result:o,building:!1,msg:`✓ Range sum [1..4]=${o} — O(log n)!`,ln:13}),r}function Ln(e=Pn){let t=e.length,n=Array(4*t).fill(0),r=Array(4*t).fill(0),i=[];function a(t,r,i){if(r===i){n[t]=e[r];return}let o=r+i>>1;a(2*t,r,o),a(2*t+1,o+1,i),n[t]=n[2*t]+n[2*t+1]}a(1,0,t-1),i.push({arr:[...e],tree:[...n],node:1,ql:0,qr:t-1,result:n[1],building:!0,msg:`Lazy Propagation: defer updates, apply only when needed`,ln:0});function o(t,a,o){if(r[t]){let s=a+o>>1,c=s-a+1,l=o-s;n[2*t]+=r[t]*c,n[2*t+1]+=r[t]*l,r[2*t]+=r[t],r[2*t+1]+=r[t],i.push({arr:[...e],tree:[...n],node:t,ql:a,qr:o,result:r[t],building:!1,msg:`Push lazy ${r[t]} down from node ${t}`,ln:4}),r[t]=0}}function s(t,a,c,l,u,d){if(u<a||c<l)return;if(l<=a&&c<=u){n[t]+=d*(c-a+1),r[t]+=d,i.push({arr:[...e],tree:[...n],node:t,ql:l,qr:u,result:n[t],building:!1,msg:`Lazy mark node ${t}[${a}..${c}] += ${d}`,ln:6});return}o(t,a,c);let f=a+c>>1;s(2*t,a,f,l,u,d),s(2*t+1,f+1,c,l,u,d),n[t]=n[2*t]+n[2*t+1]}return s(1,0,t-1,1,3,2),i.push({arr:[...e],tree:[...n],node:1,ql:1,qr:3,result:n[1],building:!1,msg:`✓ Range update [1..3]+=2 done lazily — O(log n)!`,ln:8}),i}var Rn={quickFind:N(`// Quick Find: find O(1), union O(n)
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
}`),weightedUF:N(`// Weighted Union + Path Compression: O(α(n)) ≈ O(1)
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
}`)},zn={brute:N(`// Brute force range sum: O(n) per query
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
void update(int[]a,int l,int r,int v){for(int i=l;i<=r;i++)a[i]+=v;}`),segTree:N(`// Segment Tree: O(log n) query + update
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
}`)},Bn=[{id:`sorting`,label:`Sorting`,emoji:`⬆️`,algorithms:[{id:`bubble`,label:`Bubble Sort`,vizType:`bars`,approaches:[{id:`b0`,tier:`brute`,name:`Basic`,time:`O(n²) always`,space:`O(1)`,why:`No optimization — always runs all comparisons`,genSteps:_,code:P.bubbleBasic},{id:`b1`,tier:`better`,name:`Early Exit Flag`,time:`O(n²) · Best O(n)`,space:`O(1)`,why:`Stops if no swaps in a pass — O(n) for sorted input`,genSteps:v,code:P.bubbleFlag},{id:`b2`,tier:`opt`,name:`Last Swap Tracking`,time:`O(n²) · Best O(n)`,space:`O(1)`,why:`Shrinks inner loop by tracking last swap position`,genSteps:y,code:P.bubbleLastSwap}]},{id:`selection`,label:`Selection Sort`,vizType:`bars`,approaches:[{id:`s0`,tier:`brute`,name:`Basic`,time:`O(n²) always`,space:`O(1)`,why:`Find min, swap to front — unstable sort`,genSteps:b,code:P.selBasic},{id:`s1`,tier:`better`,name:`Stable Selection`,time:`O(n²) always`,space:`O(1)`,why:`Shift instead of swap — preserves relative order`,genSteps:x,code:P.selStable},{id:`s2`,tier:`opt`,name:`Bidirectional`,time:`O(n²) · ~50% passes`,space:`O(1)`,why:`Find min AND max simultaneously — halves passes`,genSteps:ee,code:P.selBidir}]},{id:`insertion`,label:`Insertion Sort`,vizType:`bars`,approaches:[{id:`i0`,tier:`brute`,name:`Basic`,time:`O(n²) · Best O(n)`,space:`O(1)`,why:`Linear scan backward — simple and adaptive`,genSteps:te,code:P.insBasic},{id:`i1`,tier:`better`,name:`Binary Insertion`,time:`O(n log n) comps`,space:`O(1)`,why:`Binary search to find position — fewer comparisons`,genSteps:S,code:P.insBinary},{id:`i2`,tier:`opt`,name:`Shell Sort`,time:`O(n log n) avg`,space:`O(1)`,why:`Insertion sort with diminishing gap sequence`,genSteps:C,code:P.shellSort}]},{id:`merge`,label:`Merge Sort`,vizType:`bars`,approaches:[{id:`m0`,tier:`brute`,name:`Top-Down Recursive`,time:`O(n log n)`,space:`O(n log n)`,why:`Simple recursion — creates many temporary arrays`,genSteps:ne,code:P.mergeTopDown},{id:`m1`,tier:`better`,name:`Bottom-Up Iterative`,time:`O(n log n)`,space:`O(n)`,why:`No recursion stack — iterative, cache-friendly`,genSteps:re,code:P.mergeBottomUp},{id:`m2`,tier:`opt`,name:`Hybrid (TimSort)`,time:`O(n log n)`,space:`O(n)`,why:`Insertion sort for small subarrays — best of both`,genSteps:ie,code:P.mergeHybrid}]},{id:`quick`,label:`Quick Sort`,vizType:`bars`,approaches:[{id:`q0`,tier:`brute`,name:`Last Element Pivot`,time:`O(n²) worst`,space:`O(log n)`,why:`Simple but O(n²) on sorted input`,genSteps:oe,code:P.quickLast},{id:`q1`,tier:`better`,name:`Random Pivot`,time:`O(n log n) expected`,space:`O(log n)`,why:`Random pivot avoids worst case in practice`,genSteps:se,code:P.quickRandom},{id:`q2`,tier:`opt`,name:`3-Way Partition`,time:`O(n log n) · O(n) dups`,space:`O(log n)`,why:`Dutch National Flag — optimal for duplicates`,genSteps:ce,code:P.quick3Way}]},{id:`heap`,label:`Heap Sort`,vizType:`bars`,approaches:[{id:`h0`,tier:`brute`,name:`Basic Heap Sort`,time:`O(n log n)`,space:`O(1)`,why:`Build max-heap then extract one by one`,genSteps:le,code:P.heapBasic},{id:`h1`,tier:`better`,name:`Floyd's Heapify`,time:`O(n log n)`,space:`O(1)`,why:`Floyd's O(n) build phase — more efficient`,genSteps:ue,code:P.heapFloyd},{id:`h2`,tier:`opt`,name:`Skip Leaf Nodes`,time:`O(n log n)`,space:`O(1)`,why:`Leaves are trivial heaps — skip in heapify`,genSteps:T,code:P.heapOpt}]}]},{id:`searching`,label:`Searching`,emoji:`🔍`,algorithms:[{id:`linear`,label:`Linear Search`,vizType:`array`,approaches:[{id:`l0`,tier:`brute`,name:`Basic Scan`,time:`O(n)`,space:`O(1)`,why:`Scan each element — works on unsorted arrays`,genSteps:E,code:P.linBasic},{id:`l1`,tier:`better`,name:`Sentinel Search`,time:`O(n) · fewer ops`,space:`O(1)`,why:`Append target as sentinel — eliminates bounds check`,genSteps:de,code:P.linSentinel},{id:`l2`,tier:`opt`,name:`Transposition`,time:`O(n) · improves`,space:`O(1)`,why:`Move found element forward — frequent items rise up`,genSteps:fe,code:P.linTranspose}]},{id:`binary`,label:`Binary Search`,vizType:`array`,approaches:[{id:`bs0`,tier:`brute`,name:`Iterative`,time:`O(log n)`,space:`O(1)`,why:`Halve space iteratively — no stack usage`,genSteps:pe,code:P.binIter},{id:`bs1`,tier:`better`,name:`Recursive`,time:`O(log n)`,space:`O(log n)`,why:`Elegant recursion — uses call stack`,genSteps:me,code:P.binRecur},{id:`bs2`,tier:`opt`,name:`Exponential Search`,time:`O(log n)`,space:`O(1)`,why:`Find range first by doubling — great for unbounded arrays`,genSteps:D,code:P.binExponential}]},{id:`jump`,label:`Jump / Advanced`,vizType:`array`,approaches:[{id:`j0`,tier:`brute`,name:`Jump Search`,time:`O(√n)`,space:`O(1)`,why:`Jump √n blocks then linear scan`,genSteps:O,code:P.jumpBasic},{id:`j1`,tier:`better`,name:`Fibonacci Search`,time:`O(log n)`,space:`O(1)`,why:`Fibonacci step sizes — divides array unevenly`,genSteps:k,code:P.fibSearch},{id:`j2`,tier:`opt`,name:`Interpolation`,time:`O(log log n)`,space:`O(1)`,why:`Estimate position by value — O(log log n) for uniform`,genSteps:A,code:P.interpolation}]}]},{id:`dp`,label:`Dynamic Prog.`,emoji:`📊`,algorithms:[{id:`maxsub`,label:`Max Subarray`,vizType:`dp`,approaches:[{id:`ms0`,tier:`brute`,name:`All Subarrays`,time:`O(n³)`,space:`O(1)`,why:`Check every possible subarray sum — triple nested loop`,genSteps:ye,code:Ve.maxSubBrute},{id:`ms1`,tier:`better`,name:`Prefix Sums`,time:`O(n²)`,space:`O(1)`,why:`Fix start, extend end — eliminate innermost loop`,genSteps:be,code:Ve.maxSubBetter},{id:`ms2`,tier:`opt`,name:`Kadane's Algorithm`,time:`O(n)`,space:`O(1)`,why:`Single pass — extend or restart based on current sum`,genSteps:xe,code:Ve.kadane}]},{id:`climbing`,label:`Climbing Stairs`,vizType:`fib`,approaches:[{id:`cs0`,tier:`brute`,name:`Naive Recursion`,time:`O(2ⁿ)`,space:`O(n)`,why:`Recomputes same steps repeatedly — exponential`,genSteps:Se,code:Ve.climbRec},{id:`cs1`,tier:`better`,name:`Memoization`,time:`O(n)`,space:`O(n)`,why:`Cache subproblems — each computed once`,genSteps:Ce,code:Ve.climbMemo},{id:`cs2`,tier:`opt`,name:`Bottom-Up DP`,time:`O(n)`,space:`O(1)`,why:`Fill table iteratively — O(1) space with just 2 vars`,genSteps:we,code:Ve.climbDP}]},{id:`coinchange`,label:`Coin Change`,vizType:`dp`,approaches:[{id:`cc0`,tier:`brute`,name:`Naive Recursion`,time:`O(Sⁿ)`,space:`O(S)`,why:`Try all coin combinations — exponential`,genSteps:()=>De(Ee),code:Ve.coinRec},{id:`cc1`,tier:`better`,name:`Memoization`,time:`O(S×n)`,space:`O(S)`,why:`Cache amount → min coins — top-down DP`,genSteps:()=>Oe(Ee),code:Ve.coinMemo},{id:`cc2`,tier:`opt`,name:`Bottom-Up DP`,time:`O(S×n)`,space:`O(S)`,why:`Fill dp[0..amount] iteratively — optimal`,genSteps:()=>ke(Ee),code:Ve.coinDP}]}]},{id:`graph`,label:`Graph`,emoji:`🕸️`,algorithms:[{id:`bfs`,label:`BFS`,vizType:`graph`,approaches:[{id:`bf0`,tier:`brute`,name:`Basic BFS`,time:`O(V+E)`,space:`O(V)`,why:`Level-by-level exploration using a queue`,genSteps:Me,code:He.bfsBasic},{id:`bf1`,tier:`better`,name:`Shortest Path BFS`,time:`O(V+E)`,space:`O(V)`,why:`Track parent nodes to reconstruct shortest path`,genSteps:Ne,code:He.bfsPath},{id:`bf2`,tier:`opt`,name:`Level-Order BFS`,time:`O(V+E)`,space:`O(V)`,why:`Process entire level at once — track depth explicitly`,genSteps:Pe,code:He.bfsLevel}]},{id:`dfs`,label:`DFS`,vizType:`graph`,approaches:[{id:`df0`,tier:`brute`,name:`Recursive DFS`,time:`O(V+E)`,space:`O(V)`,why:`Elegant recursion — uses call stack for backtracking`,genSteps:Fe,code:He.dfsRec},{id:`df1`,tier:`better`,name:`Iterative DFS`,time:`O(V+E)`,space:`O(V)`,why:`Explicit stack — avoids call stack overflow on large graphs`,genSteps:Ie,code:He.dfsIter},{id:`df2`,tier:`opt`,name:`Cycle Detection`,time:`O(V+E)`,space:`O(V)`,why:`Track recursion stack — detect back edges = cycle`,genSteps:Le,code:He.dfsCycle}]},{id:`shortest`,label:`Shortest Path`,vizType:`graph`,approaches:[{id:`sp0`,tier:`brute`,name:`Dijkstra Basic`,time:`O(V²)`,space:`O(V)`,why:`Simple array scan for min-distance node — O(V²)`,genSteps:Re,code:He.dijkstraBasic},{id:`sp1`,tier:`better`,name:`Dijkstra + PQ`,time:`O((V+E) log V)`,space:`O(V)`,why:`Priority queue for O(log V) extraction — faster`,genSteps:ze,code:He.dijkstraPQ},{id:`sp2`,tier:`opt`,name:`Bellman-Ford`,time:`O(VE)`,space:`O(V)`,why:`Handles negative weights — detects negative cycles`,genSteps:Be,code:He.bellmanFord}]}]},{id:`problems`,label:`Problems`,emoji:`🧩`,algorithms:[{id:`twosum`,label:`Two Sum`,vizType:`array`,approaches:[{id:`ts0`,tier:`brute`,name:`Nested Loops`,time:`O(n²)`,space:`O(1)`,why:`Try every pair — simple but quadratic`,genSteps:he,code:P.tsBrute},{id:`ts1`,tier:`better`,name:`Sort + Two Pointers`,time:`O(n log n)`,space:`O(1)`,why:`Sort then converge pointers — no extra memory`,genSteps:j,code:P.tsTwo},{id:`ts2`,tier:`opt`,name:`HashMap`,time:`O(n)`,space:`O(n)`,why:`One-pass complement lookup — optimal time`,genSteps:M,code:P.tsHash}]},{id:`fibonacci`,label:`Fibonacci`,vizType:`fib`,approaches:[{id:`f0`,tier:`brute`,name:`Naive Recursion`,time:`O(2ⁿ)`,space:`O(n)`,why:`Recomputes subproblems exponentially`,genSteps:ge,code:P.fibRec},{id:`f1`,tier:`better`,name:`Memoization`,time:`O(n)`,space:`O(n)`,why:`Cache results — each subproblem once`,genSteps:_e,code:P.fibMemo},{id:`f2`,tier:`opt`,name:`Space-Opt DP`,time:`O(n)`,space:`O(1)`,why:`Only 2 variables needed — minimal memory`,genSteps:ve,code:P.fibDP}]}]},,{id:`trees`,label:`Trees`,emoji:`🌳`,algorithms:[{id:`traversal`,label:`BST Traversal`,vizType:`tree`,approaches:[{id:`tr0`,tier:`brute`,name:`Inorder Recursive`,time:`O(n)`,space:`O(h)`,why:`Left→Root→Right: gives sorted output for BST`,genSteps:Ke,code:R.inorder},{id:`tr1`,tier:`better`,name:`Inorder Iterative`,time:`O(n)`,space:`O(h)`,why:`Explicit stack — no recursion, avoids stack overflow`,genSteps:qe,code:R.inorderIter},{id:`tr2`,tier:`opt`,name:`Preorder / Postorder`,time:`O(n)`,space:`O(h)`,why:`Preorder for cloning; Postorder for deletion`,genSteps:Je,code:R.preorder}]},{id:`bstsearch`,label:`BST Search`,vizType:`tree`,approaches:[{id:`ss0`,tier:`brute`,name:`Recursive Search`,time:`O(log n) avg`,space:`O(h)`,why:`Simple recursion following BST property`,genSteps:()=>Xe(40),code:R.bstSearchRec},{id:`ss1`,tier:`better`,name:`Iterative Search`,time:`O(log n) avg`,space:`O(1)`,why:`No stack — constant space, same time complexity`,genSteps:()=>Ze(40),code:R.bstSearchIter},{id:`ss2`,tier:`opt`,name:`BST Insert`,time:`O(log n) avg`,space:`O(h)`,why:`Same logic as search — insert at correct BST position`,genSteps:()=>Qe(35),code:R.bstInsert}]},{id:`bstpostorder`,label:`Postorder`,vizType:`tree`,approaches:[{id:`po0`,tier:`brute`,name:`Postorder Recursive`,time:`O(n)`,space:`O(h)`,why:`Left→Right→Root: process children before parent`,genSteps:Ye,code:R.postorder},{id:`po1`,tier:`better`,name:`Search (target=60)`,time:`O(log n)`,space:`O(1)`,why:`Iterative BST search — O(1) space`,genSteps:()=>Ze(60),code:R.bstSearchIter},{id:`po2`,tier:`opt`,name:`Insert (new=45)`,time:`O(log n)`,space:`O(h)`,why:`Insert new node maintaining BST property`,genSteps:()=>Qe(45),code:R.bstInsert}]}]},{id:`backtracking`,label:`Backtracking`,emoji:`🔄`,algorithms:[{id:`nqueens`,label:`N-Queens`,vizType:`backtrack`,approaches:[{id:`nq0`,tier:`brute`,name:`Basic Backtrack`,time:`O(n!)`,space:`O(n)`,why:`Try each column, backtrack on conflict`,genSteps:()=>$e(6),code:Ct.nqueens},{id:`nq1`,tier:`better`,name:`Bitmask N-Queens`,time:`O(n!)`,space:`O(n)`,why:`Bitmask tracks cols/diagonals — ~3× fewer operations`,genSteps:()=>et(6),code:Ct.nqBitmask},{id:`nq2`,tier:`opt`,name:`Subsets`,time:`O(2ⁿ)`,space:`O(n)`,why:`Include/exclude pattern generates all 2^n subsets`,genSteps:()=>tt([1,2,3,4]),code:Ct.subsets}]},{id:`permutations`,label:`Permutations`,vizType:`backtrack`,approaches:[{id:`pm0`,tier:`brute`,name:`Swap Backtrack`,time:`O(n×n!)`,space:`O(n)`,why:`Swap each element to front, recurse on rest`,genSteps:()=>nt([1,2,3]),code:Ct.subsets},{id:`pm1`,tier:`better`,name:`Subsets [1,2,3,4]`,time:`O(2ⁿ×n)`,space:`O(n)`,why:`Generate all 2^n subsets with include/exclude`,genSteps:()=>tt([1,2,3]),code:Ct.subsets},{id:`pm2`,tier:`opt`,name:`Subsets [1,2,3,4,5]`,time:`O(2ⁿ)`,space:`O(n)`,why:`Bit manipulation: iterate all 2^n bitmasks`,genSteps:()=>tt([1,2,3,4]),code:Ct.subsets}]}]},{id:`strings`,label:`Strings`,emoji:`🔤`,algorithms:[{id:`patternsearch`,label:`Pattern Search`,vizType:`string`,approaches:[{id:`ps0`,tier:`brute`,name:`Brute Force`,time:`O(nm)`,space:`O(1)`,why:`Check every position — shift by 1 on mismatch`,genSteps:()=>at(rt,it),code:wt.patBrute},{id:`ps1`,tier:`better`,name:`KMP Algorithm`,time:`O(n+m)`,space:`O(m)`,why:`LPS table enables smart skipping — no re-reading text`,genSteps:()=>ot(rt,it),code:wt.kmp},{id:`ps2`,tier:`opt`,name:`Rabin-Karp`,time:`O(n+m) avg`,space:`O(1)`,why:`Rolling hash: O(1) window comparison on average`,genSteps:()=>st(rt,it),code:wt.patBrute}]}]},{id:`slidingwindow`,label:`Sliding Window`,emoji:`🪟`,algorithms:[{id:`maxsumk`,label:`Max Sum (k=3)`,vizType:`slide`,approaches:[{id:`sw0`,tier:`brute`,name:`Brute Force O(nk)`,time:`O(nk)`,space:`O(1)`,why:`Recompute sum for every window — wasteful`,genSteps:lt,code:Tt.maxSumBrute},{id:`sw1`,tier:`better`,name:`Sliding Window O(n)`,time:`O(n)`,space:`O(1)`,why:`Subtract leaving element, add entering — single pass`,genSteps:ut,code:Tt.maxSumSlide},{id:`sw2`,tier:`opt`,name:`Longest Unique`,time:`O(n)`,space:`O(k)`,why:`Variable window: shrink from left when duplicate found`,genSteps:dt,code:Tt.maxSumSlide}]}]},{id:`greedy`,label:`Greedy`,emoji:`💡`,algorithms:[{id:`activity`,label:`Activity Selection`,vizType:`greedy`,approaches:[{id:`ga0`,tier:`brute`,name:`Brute Force 2^n`,time:`O(2ⁿ)`,space:`O(n)`,why:`Try all subsets — guaranteed optimal but exponential`,genSteps:pt,code:Et.actBrute},{id:`ga1`,tier:`better`,name:`Sort by End Greedy`,time:`O(n log n)`,space:`O(1)`,why:`Sort by end time, greedily pick earliest-finishing`,genSteps:mt,code:Et.actGreedy},{id:`ga2`,tier:`opt`,name:`Fractional Knapsack`,time:`O(n log n)`,space:`O(n)`,why:`Sort by value/weight ratio — greedy is optimal here`,genSteps:ht,code:Et.actGreedy}]}]},{id:`linkedlist`,label:`Linked List`,emoji:`🔗`,algorithms:[{id:`reversell`,label:`Reverse List`,vizType:`ll`,approaches:[{id:`rl0`,tier:`brute`,name:`Iterative`,time:`O(n)`,space:`O(1)`,why:`Three pointers: prev, cur, next — in-place reversal`,genSteps:jt,code:R.inorder},{id:`rl1`,tier:`better`,name:`Recursive`,time:`O(n)`,space:`O(n)`,why:`Recurse to end then re-wire links on the way back`,genSteps:Mt,code:R.inorder},{id:`rl2`,tier:`opt`,name:`Merge Two Sorted`,time:`O(n+m)`,space:`O(1)`,why:`Two pointers: always advance the smaller head`,genSteps:Pt,code:R.inorder}]},{id:`cyclell`,label:`Cycle Detection`,vizType:`ll`,approaches:[{id:`cl0`,tier:`brute`,name:`Floyd's Tortoise & Hare`,time:`O(n)`,space:`O(1)`,why:`slow=1 step, fast=2 steps — they meet if cycle exists`,genSteps:Nt,code:R.inorder},{id:`cl1`,tier:`better`,name:`Reverse List`,time:`O(n)`,space:`O(1)`,why:`Iterative 3-pointer reversal — classic interview question`,genSteps:jt,code:R.inorder},{id:`cl2`,tier:`opt`,name:`Merge Sorted Lists`,time:`O(n+m)`,space:`O(1)`,why:`Merge [1,3,5] + [2,4,6] into [1,2,3,4,5,6]`,genSteps:Pt,code:R.inorder}]}]},{id:`math`,label:`Math`,emoji:`📐`,algorithms:[{id:`gcd`,label:`GCD & LCM`,vizType:`math`,approaches:[{id:`gcd0`,tier:`brute`,name:`Brute Force`,time:`O(min(a,b))`,space:`O(1)`,why:`Check all divisors from 1 to min(a,b)`,genSteps:()=>Ft(48,18),code:R.inorder},{id:`gcd1`,tier:`better`,name:`Euclidean Algorithm`,time:`O(log min(a,b))`,space:`O(1)`,why:`GCD(a,b) = GCD(b, a%b) — halves problem each step`,genSteps:()=>It(48,18),code:R.inorder},{id:`gcd2`,tier:`opt`,name:`Fast Power`,time:`O(log n)`,space:`O(1)`,why:`Square base and halve exponent — binary exponentiation`,genSteps:()=>Rt(2,10),code:R.inorder}]},{id:`sieve`,label:`Prime Sieve`,vizType:`math`,approaches:[{id:`sv0`,tier:`brute`,name:`Trial Division`,time:`O(n√n)`,space:`O(n)`,why:`Check each number against all smaller primes`,genSteps:()=>Ft(36,24),code:R.inorder},{id:`sv1`,tier:`better`,name:`Sieve of Eratosthenes`,time:`O(n log log n)`,space:`O(n)`,why:`Mark multiples of each prime — most efficient for range`,genSteps:()=>Lt(30),code:R.inorder},{id:`sv2`,tier:`opt`,name:`Binary GCD`,time:`O(log² n)`,space:`O(log n)`,why:`Uses bit shifts instead of division — hardware-friendly`,genSteps:()=>It(72,48),code:R.inorder}]}]},{id:`stacks`,label:`Stack/Queue`,emoji:`📦`,algorithms:[{id:`validparens`,label:`Valid Parentheses`,vizType:`stackviz`,approaches:[{id:`vp0`,tier:`brute`,name:`Brute Force`,time:`O(n²)`,space:`O(n)`,why:`Repeatedly remove matched pairs until none left`,genSteps:()=>zt(`({[]})`),code:wt.patBrute},{id:`vp1`,tier:`better`,name:`Stack O(n)`,time:`O(n)`,space:`O(n)`,why:`Push open brackets, pop and match on close brackets`,genSteps:()=>Bt(`({[]})`),code:wt.kmp},{id:`vp2`,tier:`opt`,name:`Counter (only parens)`,time:`O(n)`,space:`O(1)`,why:`Single counter — O(1) space for same-type brackets`,genSteps:()=>Bt(`((()))`),code:wt.kmp}]},{id:`nge`,label:`Next Greater Element`,vizType:`stackviz`,approaches:[{id:`ng0`,tier:`brute`,name:`Brute O(n²)`,time:`O(n²)`,space:`O(1)`,why:`For each element, scan right to find first greater`,genSteps:()=>Vt([4,5,2,10,8]),code:wt.patBrute},{id:`ng1`,tier:`better`,name:`Monotonic Stack O(n)`,time:`O(n)`,space:`O(n)`,why:`Decreasing stack: pop when larger element found`,genSteps:()=>Ht([4,5,2,10,8]),code:wt.kmp},{id:`ng2`,tier:`opt`,name:`Min Stack O(1)`,time:`O(1) all ops`,space:`O(n)`,why:`Parallel min-stack: getMin is always O(1)`,genSteps:Ut,code:wt.kmp}]}]},{id:`twopointers`,label:`Two Pointers`,emoji:`👆`,algorithms:[{id:`twoptr`,label:`Two Pointer Patterns`,vizType:`array`,approaches:[{id:`tp0`,tier:`brute`,name:`Two Sum Sorted`,time:`O(n log n)`,space:`O(1)`,why:`Sort then converge L↔R — classic two pointer`,genSteps:gt,code:Dt.twoSum},{id:`tp1`,tier:`better`,name:`Remove Duplicates`,time:`O(n)`,space:`O(1)`,why:`Slow/fast pointers: slow marks unique, fast scans ahead`,genSteps:_t,code:Dt.removeDups},{id:`tp2`,tier:`opt`,name:`Container With Water`,time:`O(n)`,space:`O(1)`,why:`Always move the shorter side — greedy is provably optimal`,genSteps:vt,code:Dt.containerWater}]}]},{id:`bits`,label:`Bit Magic`,emoji:`🔢`,algorithms:[{id:`setbits`,label:`Count Set Bits`,vizType:`bits`,approaches:[{id:`cb0`,tier:`brute`,name:`Shift & Count`,time:`O(log n)`,space:`O(1)`,why:`Shift right and check LSB — loops once per bit`,genSteps:()=>bt(23),code:Ot.countBrute},{id:`cb1`,tier:`better`,name:`Kernighan's Trick`,time:`O(k) k=set bits`,space:`O(1)`,why:`n & (n-1) clears the lowest set bit — only k iterations`,genSteps:()=>xt(23),code:Ot.countKernighan},{id:`cb2`,tier:`opt`,name:`DP All at Once`,time:`O(n)`,space:`O(n)`,why:`dp[i] = dp[i>>1] + (i&1) — compute all n counts in O(n)`,genSteps:()=>St(16),code:Ot.countDP}]}]},,{id:`advdp`,label:`Advanced DP`,emoji:`🧮`,algorithms:[{id:`lcs`,label:`Longest Common Subseq`,vizType:`dp2d`,approaches:[{id:`lcs0`,tier:`brute`,name:`Recursive O(2ⁿ)`,time:`O(2ⁿ)`,space:`O(n+m)`,why:`Explore all subsequences — exponential recomputation`,genSteps:Kt,code:{js:`// LCS Recursive
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
}`}},{id:`lcs1`,tier:`better`,name:`Memoization`,time:`O(nm)`,space:`O(nm)`,why:`Cache (i,j) pairs — each subproblem computed once`,genSteps:qt,code:{js:`function lcs(s1,s2,i=s1.length,j=s2.length,m={}){
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
}`,java:`// O(nm) memoized`}},{id:`lcs2`,tier:`opt`,name:`DP Tabulation`,time:`O(nm)`,space:`O(nm)`,why:`Fill 2D table bottom-up — no recursion stack`,genSteps:Jt,code:{js:`function lcs(s1,s2){
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
}`}}]},{id:`editdist`,label:`Edit Distance`,vizType:`dp2d`,approaches:[{id:`ed0`,tier:`brute`,name:`Recursive O(3ⁿ)`,time:`O(3ⁿ)`,space:`O(n+m)`,why:`Try all insert/delete/replace at each mismatch`,genSteps:Zt,code:{js:`function ed(s1,s2,i=s1.length,j=s2.length){
  if(i===0) return j;
  if(j===0) return i;
  if(s1[i-1]===s2[j-1]) return ed(s1,s2,i-1,j-1);
  return 1+Math.min(ed(s1,s2,i-1,j),ed(s1,s2,i,j-1),ed(s1,s2,i-1,j-1));
}`,py:`def ed(s1,s2,i=None,j=None):
    if i is None: i=len(s1);j=len(s2)
    if i==0: return j
    if j==0: return i
    if s1[i-1]==s2[j-1]: return ed(s1,s2,i-1,j-1)
    return 1+min(ed(s1,s2,i-1,j),ed(s1,s2,i,j-1),ed(s1,s2,i-1,j-1))`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`ed1`,tier:`better`,name:`Memoization`,time:`O(nm)`,space:`O(nm)`,why:`Cache each (i,j) state — eliminates overlapping subproblems`,genSteps:Qt,code:{js:`function editDist(s1,s2,i=s1.length,j=s2.length,m={}){
  const k=\`\${i},\${j}\`;
  if(k in m) return m[k];
  if(!i) return m[k]=j;
  if(!j) return m[k]=i;
  if(s1[i-1]===s2[j-1]) return m[k]=editDist(s1,s2,i-1,j-1,m);
  return m[k]=1+Math.min(editDist(s1,s2,i-1,j,m),editDist(s1,s2,i,j-1,m),editDist(s1,s2,i-1,j-1,m));
}`,py:``,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`ed2`,tier:`opt`,name:`DP Tabulation`,time:`O(nm)`,space:`O(nm)`,why:`Classic DP table — each cell is min(delete,insert,replace)`,genSteps:$t,code:{js:`function editDist(s1,s2){
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
}`}}]},{id:`lis`,label:`Longest Increasing Subseq`,vizType:`lis`,approaches:[{id:`lis0`,tier:`brute`,name:`Recursive O(2ⁿ)`,time:`O(2ⁿ)`,space:`O(n)`,why:`Try including/excluding each element — exponential`,genSteps:tn,code:{js:`function lisLength(arr){
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
    return best[0]`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`lis1`,tier:`better`,name:`DP O(n²)`,time:`O(n²)`,space:`O(n)`,why:`dp[i] = LIS ending at i — build from earlier results`,genSteps:nn,code:{js:`function lis(arr){
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
}`}},{id:`lis2`,tier:`opt`,name:`Binary Search O(n log n)`,time:`O(n log n)`,space:`O(n)`,why:`Patience sorting — maintain 'tails' array with binary search`,genSteps:rn,code:{js:`function lis(arr){
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
}`}}]},{id:`knapsack`,label:`0/1 Knapsack`,vizType:`dp2d`,approaches:[{id:`ks0`,tier:`brute`,name:`Recursive`,time:`O(2ⁿ)`,space:`O(n)`,why:`Include or exclude each item — tries all 2^n subsets`,genSteps:sn,code:{js:`function knapsack(items,cap,i=items.length){
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
    return max(knapsack(items,cap,i-1),items[i-1][1]+knapsack(items,cap-items[i-1][0],i-1))`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`ks1`,tier:`better`,name:`Memoization`,time:`O(nW)`,space:`O(nW)`,why:`Cache (item,capacity) pairs — top-down DP`,genSteps:cn,code:{js:`function knapsack(items,cap){
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
    return dp(len(items),cap)`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`ks2`,tier:`opt`,name:`DP Tabulation`,time:`O(nW)`,space:`O(nW)`,why:`Fill 2D table: rows=items, cols=capacity 0..W`,genSteps:ln,code:{js:`function knapsack(items,cap){
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
}`}}]}]},{id:`trie`,label:`Trie`,emoji:`🗺️`,algorithms:[{id:`trieops`,label:`Trie Operations`,vizType:`trie`,approaches:[{id:`to0`,tier:`brute`,name:`Insert Words`,time:`O(L) per word`,space:`O(total chars)`,why:`Each character becomes a node — shared prefixes save space`,genSteps:mn,code:{js:`class Trie {
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
}`}},{id:`to1`,tier:`better`,name:`Search Word`,time:`O(L)`,space:`O(1)`,why:`Follow character path — O(L) regardless of dictionary size`,genSteps:hn,code:{js:`search(word){
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
}`}},{id:`to2`,tier:`opt`,name:`Prefix / Autocomplete`,time:`O(L+results)`,space:`O(1)`,why:`Navigate to prefix node then DFS — powers autocomplete features`,genSteps:gn,code:{js:`startsWith(prefix){
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
}`}}]}]},{id:`advgraph`,label:`Advanced Graph`,emoji:`🔀`,algorithms:[{id:`toposort`,label:`Topological Sort`,vizType:`graph`,approaches:[{id:`ag0`,tier:`brute`,name:`Kahn's BFS`,time:`O(V+E)`,space:`O(V)`,why:`Track in-degrees — add 0-in-degree nodes to queue`,genSteps:Sn,code:{js:`function topoSort(graph,n){
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
}`}},{id:`ag1`,tier:`better`,name:`DFS Topo Sort`,time:`O(V+E)`,space:`O(V)`,why:`Run DFS and push to stack after all neighbors visited`,genSteps:Cn,code:{js:`function topoSort(graph,n){
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
}`,java:`// Same logic — see JS/Python above`}},{id:`ag2`,tier:`opt`,name:`Kruskal's MST`,time:`O(E log E)`,space:`O(V)`,why:`Sort edges by weight, use Union-Find to avoid cycles`,genSteps:Tn,code:{js:`function kruskal(edges,n){
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
    return [e for e in edges if union(e[0],e[1])]`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}}]},{id:`mst`,label:`MST & Floyd-Warshall`,vizType:`mst`,approaches:[{id:`mst0`,tier:`brute`,name:`Kruskal's MST`,time:`O(E log E)`,space:`O(V)`,why:`Sort edges, union-find to skip cycles — greedy is optimal`,genSteps:Tn,code:{js:`// See Kruskal above`,py:``,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`mst1`,tier:`better`,name:`Prim's MST`,time:`O(V²) or O(E log V)`,space:`O(V)`,why:`Grow MST from one node — add cheapest edge at each step`,genSteps:En,code:{js:`function prim(graph,n){
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
    return parent`,cpp:`// Same logic — see JS/Python above`,java:`// Same logic — see JS/Python above`}},{id:`mst2`,tier:`opt`,name:`Floyd-Warshall`,time:`O(V³)`,space:`O(V²)`,why:`3 nested loops: try every node as intermediate — all-pairs shortest paths`,genSteps:Dn,code:{js:`function floydWarshall(dist,n){
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
}`}}]}]},,{id:`unionfind`,label:`Union-Find`,emoji:`🔗`,algorithms:[{id:`uf`,label:`Disjoint Set Union`,vizType:`uf`,approaches:[{id:`uf0`,tier:`brute`,name:`Quick Find`,time:`O(n) union`,space:`O(n)`,why:`id[i]=component — find O(1) but union scans all elements`,genSteps:jn,code:Rn.quickFind},{id:`uf1`,tier:`better`,name:`Quick Union`,time:`O(n) find`,space:`O(n)`,why:`Tree structure — union O(1) but find traces to root`,genSteps:Mn,code:Rn.quickFind},{id:`uf2`,tier:`opt`,name:`Weighted + Path Compress`,time:`O(α(n)) ≈ O(1)`,space:`O(n)`,why:`Rank keeps trees flat, path compression halves depth — near O(1)`,genSteps:Nn,code:Rn.weightedUF}]}]},{id:`segtree`,label:`Segment Tree`,emoji:`🌲`,algorithms:[{id:`seg`,label:`Range Queries`,vizType:`seg`,approaches:[{id:`sg0`,tier:`brute`,name:`Linear Scan`,time:`O(n) per query`,space:`O(1)`,why:`Scan every element in range — simple but slow`,genSteps:Fn,code:zn.brute},{id:`sg1`,tier:`better`,name:`Segment Tree`,time:`O(log n) query`,space:`O(n)`,why:`Pre-build tree of range sums — O(log n) per query`,genSteps:In,code:zn.segTree},{id:`sg2`,tier:`opt`,name:`Lazy Propagation`,time:`O(log n) update`,space:`O(n)`,why:`Defer range updates — apply lazily only when needed`,genSteps:Ln,code:zn.segTree}]}]}];function Vn({step:e}){if(!e?.a)return null;let{a:t,hi:n=[],sw:r=[],done:i=[]}=e,a=Math.max(...t);return(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:2,height:130,width:`100%`,padding:`0 4px`},children:t.map((e,t)=>{let o=p.border;return i.includes&&i.includes(t)&&(o=p.opt),Array.isArray(i)&&i.includes(t)&&(o=p.opt),r.includes(t)&&(o=p.brute),n.includes(t)&&(o=p.better),(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:1},children:[(0,f.jsx)(`div`,{style:{width:`100%`,height:Math.max(6,Math.round(e/a*118)),background:o,borderRadius:`2px 2px 0 0`,transition:`all 0.18s`}}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:e})]},t)})})}function Hn({step:e,catId:t}){if(!e)return null;let n=e.arr||e.a;if(!n)return null;let r=Array.isArray(e.found)?e.found:e.found>=0?[e.found]:[],i=e.found===-2;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6,width:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:3,justifyContent:`center`},children:n.map((t,n)=>{let a=p.s2,o=p.border,s=p.text;return r.includes(n)?(a=`#0e2a1c`,o=p.opt,s=p.opt):i&&n===e.cur?(a=`#2a0e12`,o=p.brute,s=p.brute):e.p1!==void 0||e.p2!==void 0?(n===e.p1&&(a=`#0e1a2a`,o=p.accent,s=p.accent),e.p2!==void 0&&e.p2>=0&&n===e.p2&&e.p2!==e.p1&&(a=`#1a0e2a`,o=p.purple,s=p.purple)):n===e.cur?(a=`#2a1e0e`,o=p.better,s=p.better):e.l>=0&&n>=e.l&&n<=e.r&&(a=`#0e1220`,o=`#2a2a5a`),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:34,height:34,display:`flex`,alignItems:`center`,justifyContent:`center`,background:a,border:`1.5px solid ${o}`,borderRadius:6,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:s,transition:`all 0.15s`},children:t}),(0,f.jsx)(`span`,{style:{fontSize:8,color:p.muted,fontFamily:`JetBrains Mono`},children:n})]},n)})}),e.map?.curWater!==void 0&&(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,justifyContent:`center`,marginTop:4,flexWrap:`wrap`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Current Water`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:700},children:e.map.curWater})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Max Water`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:e.map.maxWater})]})]}),(t===`twosum`||t===`twoSum`)&&e.map&&Object.keys(e.map).length>0&&(0,f.jsx)(`div`,{style:{padding:`3px 8px`,background:p.s1,border:`1px solid ${p.border}`,borderRadius:5,fontSize:9,fontFamily:`JetBrains Mono`,color:p.muted},children:`map:{${Object.entries(e.map).filter(([e])=>e!==`curWater`).slice(0,6).map(([e,t])=>`${e}→${t}`).join(`,`)}}`})]})}function Un({step:e}){if(!e)return null;let{active:t,memo:n,table:r,calls:i,result:a}=e;if(r)return(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`DP table:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:r.slice(0,Math.min(r.length,12)).map((e,n)=>{let r=n===t;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:40,height:36,display:`flex`,alignItems:`center`,justifyContent:`center`,background:r?`#0e1a2a`:p.s2,border:`1.5px solid ${r?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:e>999?9:11,fontWeight:500,color:r?p.accent:p.text,transition:`all 0.15s`},children:n<=1||e>0?e:``}),(0,f.jsxs)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:[`dp[`,n,`]`]})]},n)})}),a!=null&&(0,f.jsxs)(`div`,{style:{marginTop:8,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`Result: `,a]})]});let o=Object.keys(n||{}).sort((e,t)=>e-+t);return(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,width:`100%`},children:[i>0&&(0,f.jsxs)(`div`,{style:{marginBottom:6,display:`flex`,alignItems:`center`,gap:6},children:[(0,f.jsx)(`span`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:`Total calls:`}),(0,f.jsx)(`span`,{style:{fontSize:15,color:i>30?p.brute:p.better,fontFamily:`JetBrains Mono`,fontWeight:700},children:i})]}),t>=0&&(0,f.jsxs)(`div`,{style:{marginBottom:6,display:`flex`,alignItems:`center`,gap:6},children:[(0,f.jsx)(`span`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:`Computing:`}),(0,f.jsxs)(`span`,{style:{fontSize:13,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`fib(`,t,`)`]})]}),o.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:3},children:`Cache:`}),(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:3},children:o.slice(0,12).map(e=>(0,f.jsxs)(`div`,{style:{padding:`2px 6px`,background:+e===t?`#0e1a2a`:p.s2,border:`1px solid ${+e===t?p.accent:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:9,color:p.text},children:[e,`:`,n[e]]},e))})]}),a!=null&&(0,f.jsxs)(`div`,{style:{marginTop:8,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`Result: `,a]})]})}function Wn({codeStr:e,highlightLine:t,language:n,onLang:r}){let i=(e||``).split(`
`),a=(0,l.useRef)(null);return(0,l.useEffect)(()=>{a.current?.scrollIntoView({block:`nearest`,behavior:`smooth`})},[t]),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,background:p.bg},children:[(0,f.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid ${p.border}`,flexShrink:0},children:h.map(e=>(0,f.jsx)(`button`,{onClick:()=>r(e),style:{flex:1,padding:`5px 2px`,background:n===e?p.s1:`transparent`,color:n===e?p.text:p.muted,border:`none`,borderBottom:n===e?`2px solid ${p.accent}`:`2px solid transparent`,cursor:`pointer`,fontSize:10,fontFamily:`JetBrains Mono`,transition:`all 0.12s`},children:g[e]},e))}),(0,f.jsx)(`div`,{style:{flex:1,overflowY:`auto`,padding:`4px 0`},children:i.map((e,n)=>(0,f.jsxs)(`div`,{ref:n===t?a:null,style:{display:`flex`,alignItems:`center`,minHeight:18,background:n===t?`rgba(91,141,245,0.1)`:`transparent`,borderLeft:n===t?`2px solid ${p.accent}`:`2px solid transparent`},children:[(0,f.jsx)(`span`,{style:{width:26,textAlign:`right`,paddingRight:6,color:p.muted,fontSize:9,fontFamily:`JetBrains Mono`,flexShrink:0,opacity:.5},children:n+1}),(0,f.jsx)(`span`,{style:{fontSize:10.5,fontFamily:`JetBrains Mono`,color:n===t?p.text:p.muted,whiteSpace:`pre`,lineHeight:`18px`},children:e})]},n))})]})}function Gn({onClick:e,title:t}){return(0,f.jsx)(`button`,{onClick:e,style:{padding:`6px 11px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:5,cursor:`pointer`,fontSize:13,fontFamily:`JetBrains Mono`,touchAction:`manipulation`},children:t})}function Kn({step:e}){if(!e)return null;if(e.window!==void 0){let{a:t,window:n=[],maxWindow:r=[],curSum:i,maxSum:a}=e;return Math.max(...t.map(Math.abs),1),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,width:`100%`,padding:`4px`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,flexWrap:`wrap`},children:t.map((e,t)=>{let i=p.s2,a=p.border,o=p.text;return r.includes(t)&&(i=`#0e2a1c`,a=p.opt,o=p.opt),n.includes(t)&&!r.includes(t)&&(i=`#0e1a2a`,a=p.accent,o=p.accent),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:34,height:34,display:`flex`,alignItems:`center`,justifyContent:`center`,background:i,border:`1.5px solid ${a}`,borderRadius:6,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:o,transition:`all 0.15s`},children:e}),(0,f.jsx)(`span`,{style:{fontSize:8,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,justifyContent:`center`,flexWrap:`wrap`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Current Sum`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:700},children:i??`—`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Max Sum`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:a===-1/0?`—`:a})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:6,justifyContent:`center`,fontSize:10,color:p.muted},children:[(0,f.jsx)(`span`,{style:{color:p.accent},children:`■ Current window`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`■ Max window`})]})]})}if(`dpArr`in e&&e.dpArr===null){let{active:t,calls:n,result:r}=e;return(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,width:`100%`},children:[(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:8},children:[`Coins: [`,Te.join(`, `),`] — Target: `,Ee]}),n>0&&(0,f.jsxs)(`div`,{style:{marginBottom:8,display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`span`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`},children:`Recursive calls so far:`}),(0,f.jsx)(`span`,{style:{fontSize:16,color:n>50?p.brute:p.better,fontFamily:`JetBrains Mono`,fontWeight:700},children:n})]}),t>=0&&(0,f.jsxs)(`div`,{style:{marginBottom:8,display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`span`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`},children:`Computing:`}),(0,f.jsxs)(`span`,{style:{fontSize:14,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`coin(rem=`,t,`)`]})]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:6,flexWrap:`wrap`,marginTop:8},children:Te.map(e=>(0,f.jsxs)(`div`,{style:{padding:`4px 10px`,background:p.s2,border:`1px solid ${p.border}`,borderRadius:6,fontFamily:`JetBrains Mono`,fontSize:12,color:p.muted},children:[`coin: `,e]},e))}),r!=null&&(0,f.jsxs)(`div`,{style:{marginTop:12,fontSize:14,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`Min coins: `,r===-1?`impossible`:r]})]})}if(e.dpArr!==void 0&&e.dpArr!==null){let{dpArr:t,active:n}=e,r=Math.min(t.length,13);return(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`dp[amount] = min coins needed:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:t.slice(0,r).map((e,t)=>{let r=t===n;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:38,height:34,display:`flex`,alignItems:`center`,justifyContent:`center`,background:r?`#0e1a2a`:e===`∞`?p.s2:`#0e2a1c`,border:`1.5px solid ${r?p.accent:e===`∞`?p.border:p.opt}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:r?p.accent:e===`∞`?p.muted:p.opt,transition:`all 0.15s`},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),e.result!=null&&(0,f.jsxs)(`div`,{style:{marginTop:8,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:600},children:[`Min coins: `,e.result]})]})}return null}function qn({step:e}){if(!e)return null;let{nodes:t,edges:n,visited:r=[],current:i,queue:a=[],distances:o={},path:s=[]}=e,c=e=>s.length>1&&s.includes(e)?{fill:`#1a2a1a`,stroke:p.opt,text:p.opt}:e===i?{fill:`#2a1e0e`,stroke:p.better,text:p.better}:a.includes(e)?{fill:`#0e1220`,stroke:p.accent,text:p.accent}:r.includes(e)?{fill:`#0e1a0e`,stroke:`#2a5a2a`,text:`#4a9a4a`}:{fill:p.s2,stroke:p.border,text:p.muted};return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 520 280`,style:{width:`100%`,maxWidth:520,display:`block`,margin:`0 auto`},children:[n.map((e,n)=>{let r=t[e.f],i=t[e.t],a=s.length>1&&s.includes(e.f)&&s.includes(e.t)&&Math.abs(s.indexOf(e.f)-s.indexOf(e.t))===1,o=(r.x+i.x)/2,c=(r.y+i.y)/2,l=i.x-r.x,u=i.y-r.y,d=Math.sqrt(l*l+u*u),m=r.x+l/d*18,h=r.y+u/d*18,g=i.x-l/d*18,_=i.y-u/d*18;return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`defs`,{children:(0,f.jsx)(`marker`,{id:`arr${n}`,markerWidth:`8`,markerHeight:`8`,refX:`6`,refY:`3`,orient:`auto`,children:(0,f.jsx)(`path`,{d:`M0,0 L0,6 L8,3 z`,fill:a?p.opt:p.border})})}),(0,f.jsx)(`line`,{x1:m,y1:h,x2:g,y2:_,stroke:a?p.opt:p.border,strokeWidth:a?2.5:1.5,markerEnd:`url(#arr${n})`,strokeDasharray:`none`}),(0,f.jsx)(`rect`,{x:o-9,y:c-8,width:18,height:15,rx:3,fill:p.s1}),(0,f.jsx)(`text`,{x:o,y:c+4,textAnchor:`middle`,fontSize:9,fill:a?p.opt:p.muted,fontFamily:`JetBrains Mono`,children:e.w})]},n)}),t.map(e=>{let t=c(e.id),n=o[e.id];return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:e.x,cy:e.y,r:18,fill:t.fill,stroke:t.stroke,strokeWidth:e.id===i?2.5:1.5}),(0,f.jsx)(`text`,{x:e.x,y:e.y+5,textAnchor:`middle`,fontSize:13,fontWeight:`700`,fill:t.text,fontFamily:`Syne`,children:e.label}),n!==void 0&&n!==`∞`&&(0,f.jsx)(`text`,{x:e.x,y:e.y-22,textAnchor:`middle`,fontSize:9,fill:p.accent,fontFamily:`JetBrains Mono`,children:n})]},e.id)}),a.length>0&&(0,f.jsxs)(`text`,{x:10,y:270,fontSize:9,fill:p.muted,fontFamily:`JetBrains Mono`,children:[`Queue: [`,a.map(e=>t[e]?.label||e).join(`,`),`]`]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,justifyContent:`center`,flexWrap:`wrap`,padding:`4px 8px`,fontSize:9,color:p.muted},children:[(0,f.jsx)(`span`,{style:{color:p.better},children:`● Processing`}),(0,f.jsx)(`span`,{style:{color:p.accent},children:`● In Queue`}),(0,f.jsx)(`span`,{style:{color:`#4a9a4a`},children:`● Visited`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`● Shortest Path`})]})]})}function Jn({step:e}){if(!e||!e.nodes)return null;let{nodes:t,head:n,pointers:r={},highlighted:i=[],visited:a=[]}=e,o=[],s=n,c=new Set;for(;s!=null&&!c.has(s)&&o.length<10;)c.add(s),o.push(s),s=t[s]?.next??null;let l=s!=null&&c.has(s),u=Math.max(400,o.length*80+60),d={};return Object.entries(r).forEach(([e,t])=>{d[t]||(d[t]=[]),d[t].push(e)}),(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 ${u} 130`,style:{width:`100%`,maxWidth:u,display:`block`,margin:`0 auto`},children:[(0,f.jsxs)(`defs`,{children:[(0,f.jsx)(`marker`,{id:`llarr`,markerWidth:`7`,markerHeight:`7`,refX:`5`,refY:`3`,orient:`auto`,children:(0,f.jsx)(`path`,{d:`M0,0 L0,6 L7,3 z`,fill:p.border})}),(0,f.jsx)(`marker`,{id:`llarrg`,markerWidth:`7`,markerHeight:`7`,refX:`5`,refY:`3`,orient:`auto`,children:(0,f.jsx)(`path`,{d:`M0,0 L0,6 L7,3 z`,fill:p.opt})})]}),o.map((e,n)=>{let r=n*80+20,s=i.includes(e),c=a.includes(e),u=p.s2,m=p.border,h=p.text;e===99?(u=`transparent`,m=`transparent`,h=p.muted):c?(u=`#0e2a1c`,m=p.opt,h=p.opt):s&&(u=`#2a1e0e`,m=p.better,h=p.better);let g=d[e]||[],_=t[e]?.next,v=o.indexOf(_);return(0,f.jsxs)(`g`,{children:[e!==99&&(0,f.jsx)(`rect`,{x:r,y:50,width:50,height:32,rx:5,fill:u,stroke:m,strokeWidth:s?2.5:1.5}),e!==99&&(0,f.jsx)(`text`,{x:r+25,y:71,textAnchor:`middle`,fontSize:13,fontWeight:`700`,fill:h,fontFamily:`JetBrains Mono`,children:t[e]?.val}),g.filter(e=>e!==`∅`).map((e,t)=>(0,f.jsx)(`text`,{x:r+25,y:42-t*13,textAnchor:`middle`,fontSize:9,fill:p.accent,fontFamily:`JetBrains Mono`,fontWeight:`600`,children:e},e)),_!=null&&v>=0&&(0,f.jsx)(`line`,{x1:r+50,y1:66,x2:r+80,y2:66,stroke:c?p.opt:p.border,strokeWidth:1.5,markerEnd:c?`url(#llarrg)`:`url(#llarr)`}),_===null&&e!==99&&(0,f.jsx)(`text`,{x:r+56,y:70,fontSize:9,fill:p.muted,fontFamily:`JetBrains Mono`,children:`∅`}),l&&n===o.length-1&&(0,f.jsx)(`path`,{d:`M${r+50},66 C${r+70},105 ${o.indexOf(_)*80+50},105 ${o.indexOf(_)*80+50},82`,stroke:p.brute,strokeWidth:1.5,fill:`none`,strokeDasharray:`4,3`,markerEnd:`url(#llarr)`})]},e)})]}),l&&(0,f.jsx)(`div`,{style:{textAlign:`center`,fontSize:10,color:p.brute,fontFamily:`JetBrains Mono`,marginTop:2},children:`⚠ Cycle detected`})]})}function Yn({step:e}){if(!e)return null;if(Array.isArray(e.nums)&&e.nums.length>2&&typeof e.nums[0]==`boolean`){let{nums:t,cur:n,factor:r}=e;return(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`Sieve of Eratosthenes:`}),(0,f.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:3},children:t.map((e,t)=>{if(t<2)return null;let i=t===n,a=t===r,o=e?`#0e2a1c`:p.s2,s=e?p.opt:p.border,c=e?p.opt:p.muted;return i&&(o=`#2a0e12`,s=p.brute,c=p.brute),a&&e&&(o=`#0e1a2a`,s=p.accent,c=p.accent),(0,f.jsx)(`div`,{style:{width:28,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:o,border:`1.5px solid ${s}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:10,fontWeight:500,color:c,transition:`all 0.12s`},children:t},t)})}),(0,f.jsxs)(`div`,{style:{marginTop:6,display:`flex`,gap:10,fontSize:9,color:p.muted},children:[(0,f.jsx)(`span`,{style:{color:p.opt},children:`■ Prime`}),(0,f.jsx)(`span`,{style:{color:p.brute},children:`■ Marked composite`}),(0,f.jsx)(`span`,{style:{color:p.accent},children:`■ Current factor`})]})]})}let{a:t,b:n,cur:r,gcd:i,nums:a}=e;return(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,width:`100%`,display:`flex`,flexDirection:`column`,gap:10,alignItems:`center`},children:[a&&a.length>=2&&(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`,flexWrap:`wrap`,justifyContent:`center`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`a`}),(0,f.jsx)(`div`,{style:{fontSize:22,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:700},children:a[0]})]}),(0,f.jsx)(`div`,{style:{fontSize:18,color:p.border},children:`⇄`}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`b`}),(0,f.jsx)(`div`,{style:{fontSize:22,color:p.purple,fontFamily:`JetBrains Mono`,fontWeight:700},children:a[1]})]})]}),r>=0&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,f.jsx)(`span`,{style:{fontSize:11,color:p.muted,fontFamily:`JetBrains Mono`},children:`Current:`}),(0,f.jsx)(`span`,{style:{fontSize:16,color:p.better,fontFamily:`JetBrains Mono`,fontWeight:700},children:r})]}),i>0&&(0,f.jsx)(`div`,{style:{padding:`6px 18px`,background:`#0e2a1c`,border:`1.5px solid ${p.opt}`,borderRadius:8},children:(0,f.jsxs)(`span`,{style:{fontSize:12,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`GCD / Result = `,i]})})]})}function Xn({step:e}){if(!e)return null;let{stack:t=[],result:n=[],str:r,idx:i,valid:a,a:o}=e,s=r!==void 0,c=Array.isArray(o)&&n.length===o.length;if(s)return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:`4px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,flexWrap:`wrap`},children:(Array.isArray(r)?r:r.split(``)).map((e,t)=>{let n=t===i;return(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:p.s2,border:`1.5px solid ${n?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:14,fontWeight:600,color:n?p.accent:p.text,transition:`all 0.15s`},children:e},t)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,justifyContent:`center`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column-reverse`,gap:2,alignItems:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginTop:4},children:`Stack`}),t.length===0&&(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`empty`}),t.map((e,n)=>(0,f.jsx)(`div`,{style:{width:36,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n===t.length-1?`#0e1a2a`:p.s2,border:`1.5px solid ${n===t.length-1?p.accent:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:13,fontWeight:600,color:n===t.length-1?p.accent:p.text},children:e},n))]}),a!=null&&(0,f.jsx)(`div`,{style:{padding:`6px 14px`,background:a?`#0e2a1c`:`#2a0e12`,border:`2px solid ${a?p.opt:p.brute}`,borderRadius:8,fontSize:13,fontWeight:700,color:a?p.opt:p.brute,fontFamily:`JetBrains Mono`},children:a?`✓ VALID`:`✗ INVALID`})]})]});let l=c?o:t;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:`4px`,width:`100%`},children:[l.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:c?`Array:`:`Stack:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:l.map((e,t)=>{let n=c?t===i:!1;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:34,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:p.s2,border:`1.5px solid ${n?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:n?p.accent:p.text,transition:`all 0.12s`},children:e}),c&&(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})})]}),n.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:c?`NGE Result:`:`Min Stack:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:n.map((e,t)=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:34,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:e>0?`#0e2a1c`:p.s2,border:`1.5px solid ${e>0?p.opt:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:e>0?p.opt:p.muted,transition:`all 0.12s`},children:e===-1?`—`:e}),c&&(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t))})]})]})}function Zn({step:e}){if(!e||!e.nodes)return null;let{nodes:t,root:n,positions:r={},highlighted:i=[],visited:a=[],path:o=[],result:s=[]}=e;if(n==null)return null;let c=Object.keys(r);if(!c.length)return null;let l=Math.max(...c.map(e=>r[e].x))+50,u=Math.max(...c.map(e=>r[e].y))+50,d=[],m=[];return Object.values(t).forEach(e=>{if(e.left!==null&&r[e.id]&&r[e.left]){let t=o.includes(e.id)&&o.includes(e.left);d.push((0,f.jsx)(`line`,{x1:r[e.id].x,y1:r[e.id].y,x2:r[e.left].x,y2:r[e.left].y,stroke:t?p.opt:p.border,strokeWidth:t?2:1.5},`el${e.id}`))}if(e.right!==null&&r[e.id]&&r[e.right]){let t=o.includes(e.id)&&o.includes(e.right);d.push((0,f.jsx)(`line`,{x1:r[e.id].x,y1:r[e.id].y,x2:r[e.right].x,y2:r[e.right].y,stroke:t?p.opt:p.border,strokeWidth:t?2:1.5},`er${e.id}`))}}),Object.values(t).forEach(e=>{if(!r[e.id])return;let{x:t,y:n}=r[e.id],s=p.s2,c=p.border,l=p.muted;a.includes(e.id)&&(s=`#0e2a1c`,c=p.opt,l=p.opt),o.includes(e.id)&&(s=`#0e1a2a`,c=p.accent,l=p.accent),i.includes(e.id)&&(s=`#2a1e0e`,c=p.better,l=p.better),m.push((0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:t,cy:n,r:16,fill:s,stroke:c,strokeWidth:i.includes(e.id)?2.5:1.5}),(0,f.jsx)(`text`,{x:t,y:n+5,textAnchor:`middle`,fontSize:11,fontWeight:`700`,fill:l,fontFamily:`JetBrains Mono`,children:e.val})]},e.id))}),(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 ${l} ${u}`,style:{width:`100%`,maxWidth:l,display:`block`,margin:`0 auto`},children:[d,m]}),s.length>0&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:10,color:p.opt,fontFamily:`JetBrains Mono`,padding:`2px 8px`},children:[`[`,s.join(` → `),`]`]})]})}function Qn({step:e}){if(!e)return null;let{board:t,queens:n=[],calls:r=0,solutions:i=0,arr:a,current:o=[],all:s=[]}=e;if(t){let e=t.length;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,padding:`4px`},children:[(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${e},1fr)`,gap:2,maxWidth:e*38},children:Array.from({length:e*e},(t,r)=>{let i=Math.floor(r/e),a=r%e,o=n[i]===a,s=(i+a)%2==0;return(0,f.jsx)(`div`,{style:{width:36,height:36,background:o?`#0e2a1c`:s?`#1a1a2e`:`#0d0d1a`,border:`1px solid ${o?p.opt:p.border}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:16,borderRadius:2},children:o?`♛`:``},r)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:12,fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[(0,f.jsxs)(`span`,{children:[`Calls: `,(0,f.jsx)(`span`,{style:{color:p.better},children:r})]}),(0,f.jsxs)(`span`,{children:[`Solutions: `,(0,f.jsx)(`span`,{style:{color:p.opt},children:i})]})]})]})}return(0,f.jsxs)(`div`,{style:{padding:`6px`,width:`100%`},children:[a&&(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,marginBottom:8},children:a.map((e,t)=>(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:o.includes&&o.includes(e)?`#0e1a2a`:p.s2,border:`1.5px solid ${o.includes&&o.includes(e)?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:12,fontWeight:600,color:p.text},children:e},t))}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:[`Current: [`,o.join(`, `),`]`]}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:[`Found (`,s.length,`): `,s.slice(-4).map(e=>`[${e}]`).join(` `)]})]})}function $n({step:e}){if(!e)return null;let{text:t,pat:n,i:r,j:i,matches:a=[],lps:o}=e;return t?(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,width:`100%`,display:`flex`,flexDirection:`column`,gap:8},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`Text:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,flexWrap:`wrap`},children:t.split(``).map((e,t)=>{let i=a.some(e=>t>=e&&t<e+n.length),o=r>=0&&t>=r&&t<r+n.length,s=p.s2,c=p.border,l=p.muted;return i?(s=`#0e2a1c`,c=p.opt,l=p.opt):o&&(s=`#0e1a2a`,c=p.accent,l=p.accent),(0,f.jsx)(`div`,{style:{width:22,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,background:s,border:`1.5px solid ${c}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:l,transition:`all 0.12s`},children:e},t)})})]}),n&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`Pattern:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,flexWrap:`wrap`},children:n.split(``).map((e,t)=>{let n=i>=0&&t<=i;return(0,f.jsx)(`div`,{style:{width:22,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#2a1e0e`:p.s2,border:`1.5px solid ${n?p.better:p.border}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:n?p.better:p.muted},children:e},t)})})]}),o&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`LPS table:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:2},children:o.map((e,t)=>(0,f.jsx)(`div`,{style:{width:22,height:22,display:`flex`,alignItems:`center`,justifyContent:`center`,background:e>0?`#0e1a2a`:p.s2,border:`1px solid ${e>0?p.accent:p.border}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:9,color:e>0?p.accent:p.muted},children:e},t))})]}),a.length>0&&(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.opt,fontFamily:`JetBrains Mono`},children:[`Matches at: [`,a.join(`, `),`]`]})]}):null}function er({step:e}){if(!e||!e.a)return null;let{a:t,wStart:n,wEnd:r,maxStart:i,maxEnd:a,curSum:o,maxSum:s}=e;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:`4px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,flexWrap:`wrap`},children:t.map((e,t)=>{let o=t>=i&&t<=a&&a>=i,s=n>=0&&t>=n&&t<=r,c=p.s2,l=p.border,u=p.text;return o&&!s&&(c=`#0e2a1c`,l=p.opt,u=p.opt),s&&(c=`#0e1a2a`,l=p.accent,u=p.accent),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:c,border:`1.5px solid ${l}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:u,transition:`all 0.15s`},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:14,justifyContent:`center`,flexWrap:`wrap`},children:[(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Current`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.accent,fontFamily:`JetBrains Mono`,fontWeight:700},children:o??`—`})]}),(0,f.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`},children:`Max`}),(0,f.jsx)(`div`,{style:{fontSize:16,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:s??`—`})]})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,justifyContent:`center`,fontSize:9,color:p.muted},children:[(0,f.jsx)(`span`,{style:{color:p.accent},children:`■ Current window`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`■ Best window`})]})]})}function tr({step:e}){if(!e)return null;let{acts:t,selected:n=[],current:r=-1,items:i,taken:a=[],capacity:o,curW:s,curV:c}=e;if(i)return(0,f.jsxs)(`div`,{style:{padding:`8px`,width:`100%`},children:[(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:8},children:[`Capacity: `,o,` | Current weight: `,s,` | Value: `,typeof c==`number`?c.toFixed(1):0]}),i.map((e,t)=>{let n=a.find(t=>t.i===e.i),i=n?n.frac*100:0;return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4,opacity:n||t===r?1:.5},children:[(0,f.jsxs)(`div`,{style:{width:60,fontSize:10,fontFamily:`JetBrains Mono`,color:p.muted},children:[`w=`,e.w,` v=`,e.v]}),(0,f.jsxs)(`div`,{style:{width:50,fontSize:9,fontFamily:`JetBrains Mono`,color:p.accent},children:[`r=`,e.ratio.toFixed(1)]}),(0,f.jsx)(`div`,{style:{flex:1,height:16,background:p.s2,borderRadius:3,overflow:`hidden`},children:(0,f.jsx)(`div`,{style:{height:`100%`,width:`${i}%`,background:i===100?p.opt:p.better,transition:`width 0.2s`,borderRadius:3}})}),(0,f.jsx)(`div`,{style:{width:35,fontSize:9,fontFamily:`JetBrains Mono`,color:n?p.opt:p.muted},children:i>0?`${i.toFixed(0)}%`:``})]},t)})]});if(!t)return null;let l=Math.max(...t.map(e=>e.e||e.end||0),14);return(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`Timeline (activities sorted by end time):`}),t.map((e,t)=>{let i=n.includes(t),a=t===r,o=e.s??e.start??0,s=e.e??e.end??0;return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6,marginBottom:3},children:[(0,f.jsx)(`div`,{style:{width:24,fontSize:9,fontFamily:`JetBrains Mono`,color:i?p.opt:p.muted,textAlign:`right`},children:t}),(0,f.jsx)(`div`,{style:{flex:1,position:`relative`,height:20},children:(0,f.jsxs)(`div`,{style:{position:`absolute`,left:`${o/l*100}%`,width:`${(s-o)/l*100}%`,height:`100%`,background:i?`#0e2a1c`:a?`#0e1a2a`:p.s2,border:`1.5px solid ${i?p.opt:a?p.accent:p.border}`,borderRadius:3,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:8,fontFamily:`JetBrains Mono`,color:i?p.opt:a?p.accent:p.muted,whiteSpace:`nowrap`,overflow:`hidden`},children:[o,`-`,s]})}),i&&(0,f.jsx)(`span`,{style:{fontSize:9,color:p.opt},children:`✓`})]},t)}),(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.opt,fontFamily:`JetBrains Mono`,marginTop:4},children:[`Selected: `,n.length,` activities`]})]})}function nr({step:e}){if(!e)return null;let{bits:t,num:n,count:r,dpArr:i,active:a}=e;if(i){let e=Math.min(i.length,17);return(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:`dp[i] = popcount(i):`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:i.slice(0,e).map((e,t)=>{let n=t===a;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:30,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:e>0?`#0e2a1c`:p.s2,border:`1.5px solid ${n?p.accent:e>0?p.opt:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:n?p.accent:e>0?p.opt:p.muted},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})})]})}return t?(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,width:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:10},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`,justifyContent:`center`},children:t.split(``).map((e,t)=>(0,f.jsx)(`div`,{style:{width:28,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:e===`1`?`#0e2a1c`:p.s2,border:`1.5px solid ${e===`1`?p.opt:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:13,fontWeight:700,color:e===`1`?p.opt:p.muted},children:e},t))}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:16,fontSize:12,fontFamily:`JetBrains Mono`},children:[(0,f.jsxs)(`span`,{style:{color:p.muted},children:[`decimal: `,(0,f.jsx)(`span`,{style:{color:p.accent},children:n})]}),(0,f.jsxs)(`span`,{style:{color:p.muted},children:[`set bits: `,(0,f.jsx)(`span`,{style:{color:p.opt,fontWeight:700},children:r})]})]})]}):null}function rr({step:e}){if(!e||!e.table)return null;let{s1:t,s2:n,table:r,i,j:a,result:o,items:s,cap:c}=e;r.length;let l=r[0]?.length||0,u=e=>e===0?`∅`:s?`i${e}(w${s[e-1].w}v${s[e-1].v})`:(t||``)[e-1]||e,d=e=>e===0?`∅`:s?e:(n||``)[e-1]||e,m=s?36:28;return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`,padding:`4px 8px`},children:[(0,f.jsxs)(`div`,{style:{display:`inline-block`,minWidth:`100%`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,marginBottom:2,paddingLeft:m+6},children:Array.from({length:l},(e,t)=>(0,f.jsx)(`div`,{style:{width:m,height:18,fontSize:9,color:t===a?p.better:p.muted,fontFamily:`JetBrains Mono`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:t===a?700:400},children:d(t)},t))}),r.map((e,t)=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:2,marginBottom:2},children:[(0,f.jsx)(`div`,{style:{width:m,height:m,fontSize:8,color:t===i?p.better:p.muted,fontFamily:`JetBrains Mono`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:t===i?700:400,flexShrink:0,overflow:`hidden`},children:u(t)}),e.map((e,n)=>{let r=t===i&&n===a,o=t===i-1&&n===a-1,s=t===i&&n===a-1||t===i-1&&n===a,c=e===null,l=c?p.s1:e>0?`#0e1a2a`:p.s2,u=c?p.s1:r?p.better:e>0?p.accent:p.border,d=c?p.border:r?p.better:e>0?p.accent:p.muted;return o&&!r&&(l=`#0e2a1c`,u=p.opt,d=p.opt),s&&!r&&!o&&(l=`#0e1220`,u=`#2a2a5a`,d=p.muted),(0,f.jsx)(`div`,{style:{width:m,height:m,display:`flex`,alignItems:`center`,justifyContent:`center`,background:l,border:`1.5px solid ${u}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:r?12:10,fontWeight:r||e>0?600:400,color:d,transition:`all 0.1s`,flexShrink:0},children:c?`·`:e},n)})]},t))]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:4,fontSize:9,color:p.muted,flexWrap:`wrap`},children:[(0,f.jsx)(`span`,{style:{color:p.better},children:`■ Current`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`■ Diagonal (match)`}),(0,f.jsx)(`span`,{style:{color:p.accent},children:`■ Non-zero value`})]}),o!=null&&(0,f.jsxs)(`div`,{style:{marginTop:6,fontSize:14,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`Result: `,o]})]})}function ir({step:e}){if(!e||!e.a)return null;let{a:t,dp:n=[],cur:r=-1,prev:i=-1,result:a}=e;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,padding:`4px`,width:`100%`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`Array:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:t.map((e,t)=>{let n=p.s2,a=p.border,o=p.text;return t===r&&(n=`#2a1e0e`,a=p.better,o=p.better),t===i&&(n=`#0e1220`,a=p.accent,o=p.accent),(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n,border:`1.5px solid ${a}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:o,transition:`all 0.12s`},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})})]}),n.length>0&&(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:n.some(e=>e>1)?`dp[i] = LIS length ending at i:`:`Patience tails:`}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,flexWrap:`wrap`},children:n.map((e,t)=>(0,f.jsx)(`div`,{style:{width:32,height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:e>1?`#0e2a1c`:p.s2,border:`1.5px solid ${e>1?p.opt:p.border}`,borderRadius:4,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:e>1?p.opt:p.muted},children:e},t))})]}),a!=null&&(0,f.jsxs)(`div`,{style:{fontSize:14,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700},children:[`LIS length: `,a]})]})}function ar({step:e}){if(!e||!e.nodes)return null;let{nodes:t,root:n,positions:r={},highlighted:i=[],path:a=[],found:o}=e;if(!Object.keys(r).length)return null;let s=Object.values(r),c=Math.max(...s.map(e=>e.x))+40,l=Math.max(...s.map(e=>e.y))+40,u=[],d=[];return Object.values(t).forEach(e=>{Object.values(e.children).forEach(t=>{if(!r[e.id]||!r[t])return;let n=a.includes(e.id)&&a.includes(t);u.push((0,f.jsx)(`line`,{x1:r[e.id].x,y1:r[e.id].y,x2:r[t].x,y2:r[t].y,stroke:n?p.opt:p.border,strokeWidth:n?2:1.5},`e${e.id}-${t}`))})}),Object.values(t).forEach(e=>{if(!r[e.id])return;let{x:t,y:n}=r[e.id],s=i.includes(e.id),c=a.includes(e.id),l=o===e.id,u=p.s2,m=p.border,h=p.muted;l?(u=`#0e2a1c`,m=p.opt,h=p.opt):s?(u=`#2a1e0e`,m=p.better,h=p.better):c?(u=`#0e1a2a`,m=p.accent,h=p.accent):e.isEnd&&(u=`#0e1a2a`,m=p.purple,h=p.purple),d.push((0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:t,cy:n,r:e.id===0?14:12,fill:u,stroke:m,strokeWidth:s?2.5:1.5}),(0,f.jsx)(`text`,{x:t,y:n+4,textAnchor:`middle`,fontSize:e.id===0?9:11,fontWeight:`700`,fill:h,fontFamily:`JetBrains Mono`,children:e.id===0?`root`:e.char}),e.isEnd&&(0,f.jsx)(`circle`,{cx:t,cy:n,r:9,fill:`none`,stroke:l?p.opt:p.purple,strokeWidth:1,strokeDasharray:`2,2`})]},e.id))}),(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 ${c} ${l}`,style:{width:`100%`,maxWidth:c,display:`block`,margin:`0 auto`},children:[u,d]}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:10,justifyContent:`center`,fontSize:9,color:p.muted,padding:`2px 8px`,flexWrap:`wrap`},children:[(0,f.jsx)(`span`,{style:{color:p.accent},children:`● Search path`}),(0,f.jsx)(`span`,{style:{color:p.purple},children:`● End of word`}),(0,f.jsx)(`span`,{style:{color:p.opt},children:`● Found`})]})]})}function or({step:e}){if(!e)return null;let{nodes:t,edges:n,visited:r=[],current:i,path:a=[],mstEdges:o=[],distMatrix:s,k:c,i:l,j:u}=e;if(s){s.length;let e=t.map(e=>e.label);return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`,padding:`4px 8px`},children:[(0,f.jsxs)(`div`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:6},children:[`Distance matrix `,c>=0?`(k=${t[c].label})`:``,`:`]}),(0,f.jsxs)(`div`,{style:{display:`inline-block`},children:[(0,f.jsx)(`div`,{style:{display:`flex`,gap:2,marginBottom:2,paddingLeft:26},children:e.map((e,t)=>(0,f.jsx)(`div`,{style:{width:28,height:16,fontSize:9,color:t===u?p.better:p.muted,fontFamily:`JetBrains Mono`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:t===u?700:400},children:e},t))}),s.map((t,n)=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:2,marginBottom:2},children:[(0,f.jsx)(`div`,{style:{width:22,height:26,fontSize:9,color:n===l?p.better:p.muted,fontFamily:`JetBrains Mono`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:n===l?700:400},children:e[n]}),t.map((e,t)=>{let r=n===l&&t===u,i=n===c||t===c,a=e===`∞`?p.s2:e>0?`#0e1a2a`:p.s2,o=r?p.better:i?p.accent:p.border,s=e===`∞`?p.muted:r?p.better:i?p.accent:p.text;return(0,f.jsx)(`div`,{style:{width:28,height:26,display:`flex`,alignItems:`center`,justifyContent:`center`,background:a,border:`1.5px solid ${o}`,borderRadius:3,fontFamily:`JetBrains Mono`,fontSize:9,fontWeight:r?700:400,color:s,transition:`all 0.1s`},children:e},t)})]},n))]})]})}let d=new Set(o.map(e=>`${Math.min(e.f,e.t)}-${Math.max(e.f,e.t)}`));return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 520 280`,style:{width:`100%`,maxWidth:520,display:`block`,margin:`0 auto`},children:[n.map((e,n)=>{let a=t[e.f],o=t[e.t],s=`${Math.min(e.f,e.t)}-${Math.max(e.f,e.t)}`,c=d.has(s),l=r.includes(e.f)&&(i===e.f||i===e.t),u=(a.x+o.x)/2,m=(a.y+o.y)/2;return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`line`,{x1:a.x,y1:a.y,x2:o.x,y2:o.y,stroke:c?p.opt:l?p.better:p.border,strokeWidth:c?3:1.5,strokeDasharray:`none`}),(0,f.jsx)(`rect`,{x:u-9,y:m-8,width:18,height:15,rx:3,fill:p.s1}),(0,f.jsx)(`text`,{x:u,y:m+4,textAnchor:`middle`,fontSize:9,fill:c?p.opt:p.muted,fontFamily:`JetBrains Mono`,fontWeight:c?700:400,children:e.w})]},n)}),t.map(e=>{let t=o.some(t=>t.f===e.id||t.t===e.id),n=e.id===i,r=p.s2,a=p.border,s=p.muted;return t&&(r=`#0e2a1c`,a=p.opt,s=p.opt),n&&(r=`#2a1e0e`,a=p.better,s=p.better),(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:e.x,cy:e.y,r:18,fill:r,stroke:a,strokeWidth:n?2.5:1.5}),(0,f.jsx)(`text`,{x:e.x,y:e.y+5,textAnchor:`middle`,fontSize:13,fontWeight:`700`,fill:s,fontFamily:`Syne`,children:e.label})]},e.id)})]}),o.length>0&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:10,color:p.opt,fontFamily:`JetBrains Mono`,padding:`2px 8px`},children:[`MST edges: `,o.map(e=>`${t[e.f].label}-${t[e.t].label}(${e.w})`).join(`, `),` = `,o.reduce((e,t)=>e+t.w,0)]})]})}function sr({step:e}){if(!e||!e.parent)return null;let{parent:t,rank:n,highlighted:r=[],components:i={}}=e,a=t.length,o=[`#5b8df5`,`#e89a2a`,`#29cc7a`,`#e05a6f`,`#9b72e8`,`#29cccc`,`#cc7a29`,`#7acc29`],s=Object.keys(i).map(Number),c={};s.forEach((e,t)=>c[e]=o[t%o.length]);let l=e=>{let n=e;for(;t[n]!==n;)n=t[n];return c[n]||p.muted},u=320/(a+1);return(0,f.jsxs)(`div`,{style:{width:`100%`,overflowX:`auto`},children:[(0,f.jsxs)(`svg`,{viewBox:`0 0 320 120`,style:{width:`100%`,maxWidth:320,display:`block`,margin:`0 auto`},children:[t.map((e,t)=>{if(e!==t){let n=u*(t+1),r=u*(e+1);return(0,f.jsx)(`path`,{d:`M${n},50 Q${(n+r)/2},${50-(Math.abs(r-n)*.3+15)} ${r},50`,stroke:l(t),strokeWidth:1.5,fill:`none`,markerEnd:`url(#ufarr)`},`e${t}`)}return null}),(0,f.jsx)(`defs`,{children:(0,f.jsx)(`marker`,{id:`ufarr`,markerWidth:`6`,markerHeight:`6`,refX:`5`,refY:`3`,orient:`auto`,children:(0,f.jsx)(`path`,{d:`M0,0 L0,6 L6,3 z`,fill:p.border})})}),Array.from({length:a},(e,i)=>{let a=u*(i+1),o=r.includes(i),s=t[i]===i,c=l(i);return(0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:a,cy:50,r:s?18:14,fill:`${c}22`,stroke:c,strokeWidth:o?3:s?2:1.5}),(0,f.jsx)(`text`,{x:a,y:55,textAnchor:`middle`,fontSize:12,fontWeight:`700`,fill:c,fontFamily:`JetBrains Mono`,children:i}),s&&(0,f.jsx)(`text`,{x:a,y:82,textAnchor:`middle`,fontSize:8,fill:c,fontFamily:`JetBrains Mono`,children:`root`}),n[i]>0&&(0,f.jsxs)(`text`,{x:a,y:28,textAnchor:`middle`,fontSize:8,fill:p.muted,fontFamily:`JetBrains Mono`,children:[`r=`,n[i]]})]},i)})]}),(0,f.jsx)(`div`,{style:{display:`flex`,gap:6,justifyContent:`center`,flexWrap:`wrap`,padding:`4px 8px`,fontSize:9,fontFamily:`JetBrains Mono`},children:Object.entries(i).map(([e,t])=>(0,f.jsx)(`span`,{style:{padding:`2px 6px`,background:`${l(+e)}22`,border:`1px solid ${l(+e)}`,borderRadius:4,color:l(+e)},children:`{${t.join(`,`)}}`},e))})]})}function cr({step:e}){if(!e||!e.arr)return null;let{arr:t,tree:n=[],node:r,ql:i,qr:a,result:o,building:s}=e,c=t.length,l=(0,f.jsx)(`div`,{style:{display:`flex`,gap:3,justifyContent:`center`,marginBottom:8},children:t.map((e,t)=>{let n=i>=0&&t>=i&&t<=a;return(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,f.jsx)(`div`,{style:{width:32,height:32,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`#0e1a2a`:p.s2,border:`1.5px solid ${n?p.accent:p.border}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:11,fontWeight:500,color:n?p.accent:p.text},children:e}),(0,f.jsx)(`span`,{style:{fontSize:7,color:p.muted,fontFamily:`JetBrains Mono`},children:t})]},t)})}),u=Math.ceil(Math.log2(c))+1,d=[];function m(e,t,i,a){if(t>u||e>=n.length||i>a)return;let o=e===r,s=n[e];if(s===0&&!o&&t>1)return;let c=Math.floor(Math.log2(e)),l=e-(1<<c),h=1<<c,g=(l+.5)*(300/h),_=c*40+10;if(d.push((0,f.jsxs)(`g`,{children:[(0,f.jsx)(`circle`,{cx:g,cy:_,r:o?16:13,fill:o?`#2a1e0e`:s>0?`#0e1a2a`:p.s2,stroke:o?p.better:s>0?p.accent:p.border,strokeWidth:o?2.5:1.5}),(0,f.jsx)(`text`,{x:g,y:_+4,textAnchor:`middle`,fontSize:o?11:9,fontWeight:o?`700`:`500`,fill:o?p.better:s>0?p.accent:p.muted,fontFamily:`JetBrains Mono`,children:s||``})]},e)),i<a){let r=i+a>>1;if(2*e<n.length){let t=c+1,n=2*e-(1<<t),r=1<<t,i=(n+.5)*(300/r);d.push((0,f.jsx)(`line`,{x1:g,y1:_+13,x2:i,y2:_+40-13,stroke:p.border,strokeWidth:1},`el${e}`))}if(2*e+1<n.length){let t=c+1,n=2*e+1-(1<<t),r=1<<t,i=(n+.5)*(300/r);d.push((0,f.jsx)(`line`,{x1:g,y1:_+13,x2:i,y2:_+40-13,stroke:p.border,strokeWidth:1},`er${e}`))}m(2*e,t+1,i,r),m(2*e+1,t+1,r+1,a)}}return n.some(e=>e>0)&&m(1,1,0,c-1),(0,f.jsxs)(`div`,{style:{padding:`4px 8px`,width:`100%`},children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:`Array:`}),l,n.some(e=>e>0)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{style:{fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,marginBottom:4},children:s?`Building tree:`:`Segment tree (querying):`}),(0,f.jsx)(`svg`,{viewBox:`0 0 300 180`,style:{width:`100%`,maxWidth:300,display:`block`,margin:`0 auto`},children:d})]}),o!=null&&(0,f.jsxs)(`div`,{style:{textAlign:`center`,fontSize:13,color:p.opt,fontFamily:`JetBrains Mono`,fontWeight:700,marginTop:4},children:[`Result: `,o]})]})}var lr={"O(1)":0,"O(log log n)":1,"O(α(n))":1,"O(log n)":2,"O(√n)":3,"O(n)":4,"O(n log n)":5,"O(n²)":6,"O(n³)":7,"O(2ⁿ)":8,"O(n!)":9};function ur(e){return e?Object.entries(lr).reduce((t,[n,r])=>e.includes(n.replace(`O(`,``).replace(`)`,``).split(` `)[0])&&r<t.rank?{rank:r,key:n}:t,{rank:10,key:``}).rank:5}function dr({cat:e,onClose:t}){return e?(0,f.jsx)(`div`,{style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,zIndex:500,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16},onClick:t,children:(0,f.jsxs)(`div`,{style:{background:p.s1,border:`1px solid ${p.border}`,borderRadius:12,padding:20,maxWidth:560,width:`100%`,maxHeight:`80vh`,overflowY:`auto`},onClick:e=>e.stopPropagation(),children:[(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:16},children:[(0,f.jsxs)(`div`,{style:{fontFamily:`Syne`,fontWeight:800,fontSize:16},children:[e.emoji,` `,e.label,` — Complexity Comparison`]}),(0,f.jsx)(`button`,{onClick:t,style:{background:`none`,border:`none`,color:p.muted,cursor:`pointer`,fontSize:18},children:`✕`})]}),e.algorithms.map(e=>(0,f.jsxs)(`div`,{style:{marginBottom:16},children:[(0,f.jsx)(`div`,{style:{fontFamily:`Syne`,fontWeight:700,fontSize:12,color:p.text,marginBottom:6},children:e.label}),e.approaches.map(e=>{let t=ur(e.time),n=Math.min(100,Math.max(8,t/9*100)),r=m[e.tier]?.color||p.muted;return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4},children:[(0,f.jsx)(`div`,{style:{width:90,fontSize:10,color:r,fontFamily:`Syne`,fontWeight:600,flexShrink:0},children:e.name}),(0,f.jsx)(`div`,{style:{flex:1,height:20,background:p.s2,borderRadius:3,overflow:`hidden`},children:(0,f.jsx)(`div`,{style:{height:`100%`,width:`${n}%`,background:r,borderRadius:3,opacity:.7,transition:`width 0.4s`}})}),(0,f.jsx)(`div`,{style:{width:100,fontSize:10,color:r,fontFamily:`JetBrains Mono`,flexShrink:0},children:e.time})]},e.id)})]},e.id)),(0,f.jsx)(`div`,{style:{marginTop:12,fontSize:9,color:p.muted,fontFamily:`JetBrains Mono`,textAlign:`right`},children:`Bar length = relative complexity. Click outside to close.`})]})}):null}function fr(){let[e,t]=(0,l.useState)(`sorting`),n=Math.max(0,Bn.findIndex(t=>t?.id===e)),[r,i]=(0,l.useState)(0),[a,o]=(0,l.useState)(0),[s,c]=(0,l.useState)(`js`),[u,d]=(0,l.useState)(0),[h,g]=(0,l.useState)(!1),[_,v]=(0,l.useState)(550),[y,b]=(0,l.useState)([34,7,23,32,5,62,18,45,11,28,50,9]),[x,ee]=(0,l.useState)(23),[te,S]=(0,l.useState)(8),[C,ne]=(0,l.useState)(!1),[re,ie]=(0,l.useState)(``),[ae,oe]=(0,l.useState)(!1),[se,ce]=(0,l.useState)({correct:0,total:0,streak:0}),[w,le]=(0,l.useState)(null),[ue,T]=(0,l.useState)(!1);(0,l.useRef)(``);let E=(0,l.useMemo)(()=>{if(!re.trim())return Bn;let e=re.toLowerCase();return Bn.map(t=>({...t,algorithms:t.algorithms.filter(n=>n.label.toLowerCase().includes(e)||t.label.toLowerCase().includes(e)||n.approaches.some(t=>t.name.toLowerCase().includes(e)))})).filter(e=>e.algorithms.length>0)},[re]),[de,fe]=(0,l.useState)(!1),[pe,me]=(0,l.useState)(`viz`),D=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=()=>ne(window.innerWidth<768);return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let O=Bn[Math.max(0,n)]||Bn[0],k=O?.algorithms?.[Math.min(r,(O?.algorithms?.length||1)-1)]||O?.algorithms?.[0],A=k?.approaches?.[Math.min(a,(k?.approaches?.length||1)-1)]||k?.approaches?.[0],he=m[A?.tier||`brute`]?.color||p.brute,j=(0,l.useMemo)(()=>!k||!A?[]:k.vizType===`bars`?A.genSteps(y):k.vizType===`graph`||k.id===`coinchange`||k.vizType===`ll`||k.vizType===`backtrack`||k.vizType===`string`||k.vizType===`greedy`||k.vizType===`stackviz`||k.vizType===`math`||k.vizType===`bits`||k.vizType===`dp2d`||k.vizType===`trie`||k.vizType===`mst`||k.vizType===`tree`||k.vizType===`uf`||k.vizType===`seg`?A.genSteps():k.vizType===`lis`?A.genSteps(y):k.vizType===`fib`||k.id===`fibonacci`?A.genSteps(Math.min(te,A.tier===`brute`?10:15)):k.vizType===`slide`?A.genSteps(y):A.genSteps(y,x),[k,A,y,x,te]),M=j.length>0?j[Math.min(u,j.length-1)]:null;(0,l.useEffect)(()=>{let e=e=>{e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`||(e.key===`ArrowRight`||e.key===`l`?d(e=>Math.min((j?.length||1)-1,e+1)):e.key===`ArrowLeft`||e.key===`h`?d(e=>Math.max(0,e-1)):e.key===` `?(e.preventDefault(),g(e=>!e)):e.key===`r`||e.key===`R`?k?.vizType===`bars`&&b(Array.from({length:12},()=>Math.floor(Math.random()*75)+5)):e.key===`1`?o(0):e.key===`2`?o(1):e.key===`3`?o(2):e.key===`q`||e.key===`Q`?oe(e=>!e):(e.key===`c`||e.key===`C`)&&T(e=>!e))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[j,k]),(0,l.useEffect)(()=>{clearInterval(D.current),d(0),g(!1)},[e,r,a,y,x,te]),(0,l.useEffect)(()=>(h?D.current=setInterval(()=>{d(e=>e>=j.length-1?(g(!1),e):e+1)},_):clearInterval(D.current),()=>clearInterval(D.current)),[h,_,j.length]);let ge=()=>b(Array.from({length:12},()=>Math.floor(Math.random()*75)+5)),_e=()=>{if(!j||j.length<2||u>=j.length-1)return;let e=j[u+1]?.msg||`Next step`,t=j.filter((e,t)=>t!==u+1).map(e=>e?.msg).filter(Boolean),n=[],r=new Set([e]);for(;n.length<3&&t.length;){let e=Math.floor(Math.random()*t.length),i=t[e];t.splice(e,1),r.has(i)||(r.add(i),n.push(i))}for(;n.length<3;)n.push(`No more steps`);let i=[e,...n].sort(()=>Math.random()-.5);le({options:i,correctIdx:i.indexOf(e),answered:!1,selectedIdx:-1})},ve=e=>{t(e),i(0),o(0),fe(!1)},N=e=>{i(e),o(0),fe(!1)};return!O||!k||!A?null:(0,f.jsxs)(`div`,{style:{display:`flex`,height:`100vh`,background:p.bg,color:p.text,fontFamily:`Syne,sans-serif`,overflow:`hidden`,fontSize:13},children:[(0,f.jsxs)(`div`,{style:{width:C?de?220:0:200,minWidth:C?de?220:0:200,background:p.s1,borderRight:`1px solid ${p.border}`,display:`flex`,flexDirection:`column`,overflowY:`auto`,transition:`all 0.25s`,flexShrink:0,position:C?`absolute`:`relative`,zIndex:C?300:1,height:`100vh`},children:[(0,f.jsx)(`div`,{style:{padding:`12px 10px 4px`,fontSize:16,fontWeight:800,letterSpacing:-.3},children:`AlgoViz`}),(0,f.jsx)(`div`,{style:{padding:`4px 8px 6px`},children:(0,f.jsxs)(`div`,{style:{position:`relative`},children:[(0,f.jsx)(`input`,{type:`text`,value:re,onChange:e=>{ie(e.target.value)},placeholder:`Search algorithms...`,style:{width:`100%`,padding:`5px 24px 5px 8px`,background:p.s2,border:`1px solid ${re?p.accent:p.border}`,color:p.text,borderRadius:5,fontSize:10,fontFamily:`Syne`,outline:`none`,boxSizing:`border-box`}}),re&&(0,f.jsx)(`button`,{onClick:()=>ie(``),style:{position:`absolute`,right:4,top:`50%`,transform:`translateY(-50%)`,background:`none`,border:`none`,color:p.muted,cursor:`pointer`,fontSize:12,padding:`0 2px`,lineHeight:1},children:`✕`})]})}),E.length===0&&(0,f.jsxs)(`div`,{style:{padding:`12px 10px`,fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[`No matches for "`,re,`"`]}),E.map((t,n)=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`button`,{onClick:()=>ve(t.id),style:{width:`100%`,padding:`7px 10px`,background:e===t.id?`${p.accent}22`:`transparent`,color:e===t.id?p.accent:p.muted,border:`none`,textAlign:`left`,cursor:`pointer`,fontSize:11,fontFamily:`Syne`,fontWeight:700,borderLeft:e===t.id?`3px solid ${p.accent}`:`3px solid transparent`,display:`flex`,alignItems:`center`,gap:5},children:[(0,f.jsx)(`span`,{style:{fontSize:14},children:t.emoji}),t.label.toUpperCase()]}),e===t.id&&t.algorithms.map((e,t)=>(0,f.jsx)(`button`,{onClick:()=>N(t),style:{width:`100%`,padding:`5px 10px 5px 22px`,background:r===t?p.s2:`transparent`,color:r===t?p.text:p.muted,border:`none`,textAlign:`left`,cursor:`pointer`,fontSize:11.5,fontFamily:`Syne`,borderLeft:r===t?`3px solid ${he}`:`3px solid transparent`,transition:`all 0.1s`},children:e.label},e.id))]},t.id))]}),(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,overflow:`hidden`,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,padding:`6px 10px`,borderBottom:`1px solid ${p.border}`,background:p.s1,gap:6,flexShrink:0,flexWrap:`wrap`},children:[C&&(0,f.jsx)(`button`,{onClick:()=>fe(e=>!e),style:{padding:`4px 8px`,background:de?p.s2:`transparent`,border:`1px solid ${de?p.border:`transparent`}`,color:p.text,borderRadius:4,cursor:`pointer`,fontSize:16,touchAction:`manipulation`},children:`☰`}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4,flex:1,minWidth:0,flexWrap:`wrap`},children:[(0,f.jsx)(`span`,{style:{fontFamily:`Syne`,fontWeight:700,fontSize:12,color:p.muted},children:O.label}),(0,f.jsx)(`span`,{style:{color:p.border},children:`›`}),(0,f.jsx)(`span`,{style:{fontFamily:`Syne`,fontWeight:700,fontSize:12,color:p.text},children:k.label})]}),k.vizType===`bars`&&(0,f.jsx)(`button`,{onClick:ge,style:{padding:`3px 8px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:4,cursor:`pointer`,fontSize:C?13:11,touchAction:`manipulation`},children:`🔀`}),(0,f.jsx)(`button`,{onClick:()=>T(e=>!e),title:`Complexity Chart (C)`,style:{padding:`3px 8px`,background:ue?`${p.accent}33`:p.s2,border:`1px solid ${ue?p.accent:p.border}`,color:ue?p.accent:p.muted,borderRadius:4,cursor:`pointer`,fontSize:11,touchAction:`manipulation`},children:`📊`}),(0,f.jsx)(`button`,{onClick:()=>{oe(e=>!e),ae||_e()},title:`Quiz Mode (Q)`,style:{padding:`3px 8px`,background:ae?`${p.better}33`:p.s2,border:`1px solid ${ae?p.better:p.border}`,color:ae?p.better:p.muted,borderRadius:4,cursor:`pointer`,fontSize:11,touchAction:`manipulation`},children:ae?`🎯 Quiz ON`:`🎯 Quiz`}),k.vizType===`bars`&&(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:(0,f.jsx)(`input`,{value:y.join(`,`),onChange:e=>{let t=e.target.value.split(`,`).map(e=>parseInt(e.trim())).filter(e=>!isNaN(e));t.length>0&&b(t)},style:{width:140,padding:`2px 5px`,background:p.s2,border:`1px solid ${p.border}`,color:p.text,borderRadius:4,fontSize:10,fontFamily:`JetBrains Mono`,outline:`none`},placeholder:`custom array...`})}),(k.vizType===`array`||k.vizType===`slide`)&&k.id!==`fibonacci`&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,f.jsx)(`label`,{style:{fontSize:10,color:p.muted},children:`target:`}),(0,f.jsx)(`input`,{type:`number`,value:x,onChange:e=>ee(+e.target.value),style:{width:46,padding:`2px 4px`,background:p.s2,border:`1px solid ${p.border}`,color:p.text,borderRadius:4,fontSize:11,fontFamily:`JetBrains Mono`,outline:`none`}})]}),k.id===`fibonacci`&&(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,f.jsx)(`label`,{style:{fontSize:10,color:p.muted},children:`n=`}),(0,f.jsx)(`input`,{type:`number`,value:te,min:1,max:A.id===`f0`?10:15,onChange:e=>S(Math.min(A.id===`f0`?10:15,Math.max(1,+e.target.value))),style:{width:42,padding:`2px 4px`,background:p.s2,border:`1px solid ${p.border}`,color:p.text,borderRadius:4,fontSize:11,fontFamily:`JetBrains Mono`,outline:`none`}})]})]}),(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:7,padding:`8px 10px`,background:p.s1,borderBottom:`1px solid ${p.border}`,flexShrink:0},children:k.approaches.map((e,t)=>{let n=m[e.tier].color,r=a===t;return(0,f.jsxs)(`button`,{onClick:()=>o(t),style:{padding:C?`7px 4px`:`10px 8px`,background:r?`${n}18`:p.s2,border:`2px solid ${r?n:p.border}`,borderRadius:8,cursor:`pointer`,transition:`all 0.15s`,textAlign:`center`,touchAction:`manipulation`,outline:`none`},children:[(0,f.jsx)(`div`,{style:{fontSize:C?14:16,marginBottom:2},children:m[e.tier].icon}),(0,f.jsx)(`div`,{style:{fontSize:C?8:9,fontWeight:700,color:n,fontFamily:`Syne`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:1},children:m[e.tier].label}),(0,f.jsx)(`div`,{style:{fontSize:C?9:10,fontWeight:600,color:r?p.text:p.muted,fontFamily:`Syne`,marginBottom:2,lineHeight:1.2},children:e.name}),(0,f.jsx)(`div`,{style:{fontSize:C?8:9,color:r?n:p.muted,fontFamily:`JetBrains Mono`},children:e.time})]},e.id)})}),C&&(0,f.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid ${p.border}`,background:p.s1,flexShrink:0},children:[`viz`,`code`].map(e=>(0,f.jsx)(`button`,{onClick:()=>me(e),style:{flex:1,padding:`6px`,background:pe===e?p.bg:`transparent`,color:pe===e?p.text:p.muted,border:`none`,borderBottom:pe===e?`2px solid ${he}`:`2px solid transparent`,cursor:`pointer`,fontSize:11,fontFamily:`Syne`,fontWeight:pe===e?700:400,touchAction:`manipulation`},children:e===`viz`?`Visualizer`:`Code`},e))}),(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,overflow:`hidden`,minHeight:0},children:[(!C||pe===`viz`)&&(0,f.jsxs)(`div`,{style:{flex:C?1:1.1,display:`flex`,flexDirection:`column`,borderRight:C?`none`:`1px solid ${p.border}`,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,background:p.bg,padding:10,overflow:`auto`,minHeight:0},children:[k.vizType===`bars`&&(0,f.jsx)(Vn,{step:M}),k.vizType===`array`&&(0,f.jsx)(Hn,{step:M,catId:k.id}),k.vizType===`fib`&&(0,f.jsx)(Un,{step:M}),k.vizType===`dp`&&(0,f.jsx)(Kn,{step:M}),k.vizType===`graph`&&(0,f.jsx)(qn,{step:M}),k.vizType===`tree`&&(M?.nodes?(0,f.jsx)(Zn,{step:M}):(0,f.jsx)(`div`,{style:{color:p.muted,fontSize:11,fontFamily:`JetBrains Mono`,padding:8},children:`Loading tree...`})),k.vizType===`backtrack`&&(0,f.jsx)(Qn,{step:M}),k.vizType===`string`&&(0,f.jsx)($n,{step:M}),k.vizType===`slide`&&(0,f.jsx)(er,{step:M}),k.vizType===`greedy`&&(0,f.jsx)(tr,{step:M}),k.vizType===`ll`&&(0,f.jsx)(Jn,{step:M}),k.vizType===`math`&&(0,f.jsx)(Yn,{step:M}),k.vizType===`stackviz`&&(0,f.jsx)(Xn,{step:M}),k.vizType===`bits`&&(0,f.jsx)(nr,{step:M}),k.vizType===`dp2d`&&(0,f.jsx)(rr,{step:M}),k.vizType===`lis`&&(0,f.jsx)(ir,{step:M}),k.vizType===`trie`&&(0,f.jsx)(ar,{step:M}),k.vizType===`mst`&&(0,f.jsx)(or,{step:M}),k.vizType===`uf`&&(0,f.jsx)(sr,{step:M}),k.vizType===`seg`&&(0,f.jsx)(cr,{step:M}),k.vizType===`dp2d`&&(0,f.jsx)(rr,{step:M}),k.vizType===`lis`&&(0,f.jsx)(ir,{step:M}),k.vizType===`trie`&&(0,f.jsx)(ar,{step:M}),k.vizType===`mst`&&(0,f.jsx)(or,{step:M}),k.vizType===`uf`&&(0,f.jsx)(sr,{step:M}),k.vizType===`seg`&&(0,f.jsx)(cr,{step:M})]}),(0,f.jsx)(`div`,{style:{padding:`4px 12px`,background:p.s2,borderTop:`1px solid ${p.border}`,borderLeft:`3px solid ${he}`,fontFamily:`JetBrains Mono`,fontSize:10,color:p.muted,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,flexShrink:0},children:ae&&w&&!w.answered?`🎯 What happens next?`:M?.msg}),ae&&w&&(0,f.jsx)(`div`,{style:{padding:`8px`,background:p.s1,borderTop:`1px solid ${p.border}`,flexShrink:0},children:w.answered?(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[w.options.map((e,t)=>{let n=t===w.correctIdx,r=t===w.selectedIdx,i=p.s2,a=p.border,o=p.muted;return n?(i=`#0e2a1c`,a=p.opt,o=p.opt):r&&!n&&(i=`#2a0e12`,a=p.brute,o=p.brute),(0,f.jsxs)(`div`,{style:{padding:`5px 8px`,background:i,border:`1px solid ${a}`,borderRadius:5,fontFamily:`JetBrains Mono`,fontSize:9,color:o},children:[n?`✓`:r?`✗`:`·`,` `,e.length>60?e.slice(0,60)+`...`:e]},t)}),(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginTop:2},children:[(0,f.jsxs)(`span`,{style:{fontSize:9,color:w.selectedIdx===w.correctIdx?p.opt:p.brute,fontFamily:`JetBrains Mono`,fontWeight:700},children:[w.selectedIdx===w.correctIdx?`✓ Correct!`:`✗ Wrong`,` Score: `,se.correct,`/`,se.total,` Streak: `,se.streak,`🔥`]}),(0,f.jsx)(`button`,{onClick:()=>{d(e=>Math.min((j?.length||1)-1,e+1)),le(null),setTimeout(_e,300)},style:{padding:`3px 10px`,background:p.s2,border:`1px solid ${p.border}`,color:p.muted,borderRadius:4,cursor:`pointer`,fontSize:10,fontFamily:`JetBrains Mono`,touchAction:`manipulation`},children:`Next →`})]})]}):(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:w.options.map((e,t)=>(0,f.jsxs)(`button`,{onClick:()=>{let e=t===w.correctIdx;le(e=>({...e,answered:!0,selectedIdx:t})),ce(t=>({correct:t.correct+ +!!e,total:t.total+1,streak:e?t.streak+1:0})),e&&setTimeout(()=>{d(e=>Math.min((j?.length||1)-1,e+1)),le(null),setTimeout(_e,300)},800)},style:{padding:`5px 8px`,background:p.s2,border:`1px solid ${p.border}`,borderRadius:5,color:p.text,cursor:`pointer`,fontFamily:`JetBrains Mono`,fontSize:9,textAlign:`left`,transition:`all 0.1s`,touchAction:`manipulation`},children:[String.fromCharCode(65+t),`. `,e.length>60?e.slice(0,60)+`...`:e]},t))})}),(0,f.jsx)(`div`,{style:{height:3,background:p.border,flexShrink:0},children:(0,f.jsx)(`div`,{style:{height:`100%`,background:he,width:`${(u+1)/j.length*100}%`,transition:`width 0.2s`}})}),(0,f.jsxs)(`div`,{style:{padding:`5px 8px`,display:`flex`,alignItems:`center`,gap:4,background:p.s1,borderTop:`1px solid ${p.border}`,flexShrink:0},children:[(0,f.jsx)(Gn,{onClick:()=>{d(0),g(!1)},title:`⏮`}),(0,f.jsx)(Gn,{onClick:()=>d(e=>Math.max(0,e-1)),title:`◀`}),(0,f.jsx)(`button`,{onClick:()=>g(e=>!e),style:{padding:`5px 14px`,background:h?p.s2:`${he}22`,border:`1px solid ${h?p.border:he}`,color:h?p.muted:he,borderRadius:5,cursor:`pointer`,fontSize:14,fontWeight:600,fontFamily:`JetBrains Mono`,touchAction:`manipulation`},children:h?`⏸`:`▶`}),(0,f.jsx)(Gn,{onClick:()=>d(e=>Math.min(j.length-1,e+1)),title:`▶`}),(0,f.jsx)(Gn,{onClick:()=>{d(j.length-1),g(!1)},title:`⏭`}),(0,f.jsxs)(`span`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`,marginLeft:2},children:[u+1,`/`,j.length]}),(0,f.jsx)(`div`,{style:{flex:1}}),(0,f.jsx)(`input`,{type:`range`,min:80,max:1200,step:80,value:_,onChange:e=>v(+e.target.value),style:{width:55,accentColor:he}})]}),(0,f.jsxs)(`div`,{style:{padding:`6px 8px`,borderTop:`1px solid ${p.border}`,background:p.s1,flexShrink:0},children:[(0,f.jsx)(`div`,{style:{fontSize:9,fontWeight:700,color:p.muted,textTransform:`uppercase`,letterSpacing:`0.08em`,marginBottom:3},children:`Why this approach?`}),(0,f.jsxs)(`div`,{style:{fontSize:10.5,color:p.muted,lineHeight:1.4},children:[`💡 `,A.why]}),(0,f.jsxs)(`div`,{style:{marginTop:3,display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,f.jsx)(`span`,{style:{fontSize:10,color:he,fontFamily:`JetBrains Mono`,fontWeight:600},children:A.time}),(0,f.jsxs)(`span`,{style:{fontSize:10,color:p.muted,fontFamily:`JetBrains Mono`},children:[`Space: `,A.space]})]})]})]}),(!C||pe===`code`)&&(0,f.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,overflow:`hidden`,minWidth:0},children:[(0,f.jsxs)(`div`,{style:{padding:`5px 10px`,borderBottom:`1px solid ${p.border}`,background:p.s1,fontSize:10,color:p.muted,display:`flex`,alignItems:`center`,gap:5,flexShrink:0},children:[(0,f.jsx)(`span`,{style:{color:he,fontFamily:`JetBrains Mono`,fontWeight:600},children:A.name}),(0,f.jsx)(`span`,{children:`·`}),(0,f.jsx)(`span`,{style:{fontFamily:`JetBrains Mono`},children:A.time})]}),(0,f.jsx)(`div`,{style:{flex:1,overflow:`hidden`},children:(0,f.jsx)(Wn,{codeStr:A.code[s]||``,highlightLine:M?.ln??-1,language:s,onLang:c})})]})]})]}),ue&&(0,f.jsx)(dr,{cat:O,onClose:()=>T(!1)}),!C&&(0,f.jsx)(`div`,{style:{position:`fixed`,bottom:8,right:8,fontSize:8,color:p.border,fontFamily:`JetBrains Mono`,pointerEvents:`none`},children:`←→ step · Space play · 1/2/3 approach · R random · Q quiz · C chart`}),C&&de&&(0,f.jsx)(`div`,{onClick:()=>fe(!1),style:{position:`fixed`,inset:0,zIndex:200,background:`rgba(0,0,0,0.5)`}})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,f.jsx)(l.StrictMode,{children:(0,f.jsx)(fr,{})}));