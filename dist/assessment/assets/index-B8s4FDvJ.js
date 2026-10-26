(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))f(w);new MutationObserver(w=>{for(const R of w)if(R.type==="childList")for(const q of R.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&f(q)}).observe(document,{childList:!0,subtree:!0});function A(w){const R={};return w.integrity&&(R.integrity=w.integrity),w.referrerPolicy&&(R.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?R.credentials="include":w.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function f(w){if(w.ep)return;w.ep=!0;const R=A(w);fetch(w.href,R)}})();var Mr={exports:{}},mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Cy(){if(ym)return mi;ym=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function A(f,w,R){var q=null;if(R!==void 0&&(q=""+R),w.key!==void 0&&(q=""+w.key),"key"in w){R={};for(var I in w)I!=="key"&&(R[I]=w[I])}else R=w;return w=R.ref,{$$typeof:r,type:f,key:q,ref:w!==void 0?w:null,props:R}}return mi.Fragment=m,mi.jsx=A,mi.jsxs=A,mi}var vm;function My(){return vm||(vm=1,Mr.exports=Cy()),Mr.exports}var o=My(),Hr={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Hy(){if(bm)return Z;bm=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),q=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),M=Symbol.for("react.view_transition"),Se=Symbol.iterator;function ce(h){return h===null||typeof h!="object"?null:(h=Se&&h[Se]||h["@@iterator"],typeof h=="function"?h:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,je={};function k(h,_,Y){this.props=h,this.context=_,this.refs=je,this.updater=Y||ae}k.prototype.isReactComponent={},k.prototype.setState=function(h,_){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,_,"setState")},k.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function $e(){}$e.prototype=k.prototype;function Ne(h,_,Y){this.props=h,this.context=_,this.refs=je,this.updater=Y||ae}var tt=Ne.prototype=new $e;tt.constructor=Ne,le(tt,k.prototype),tt.isPureReactComponent=!0;var Ce=Array.isArray;function W(){}var ue={H:null,A:null,T:null,S:null},Rt=Object.prototype.hasOwnProperty;function ot(h,_,Y){var B=Y.ref;return{$$typeof:r,type:h,key:_,ref:B!==void 0?B:null,props:Y}}function st(h,_){return ot(h.type,_,h.props)}function ne(h){return typeof h=="object"&&h!==null&&h.$$typeof===r}function _t(h){var _={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(Y){return _[Y]})}var ta=/\/+/g;function Ie(h,_){return typeof h=="object"&&h!==null&&h.key!=null?_t(""+h.key):_.toString(36)}function j(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(W,W):(h.status="pending",h.then(function(_){h.status==="pending"&&(h.status="fulfilled",h.value=_)},function(_){h.status==="pending"&&(h.status="rejected",h.reason=_)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function V(h,_,Y,B,oe){var se=typeof h;(se==="undefined"||se==="boolean")&&(h=null);var fe=!1;if(h===null)fe=!0;else switch(se){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(h.$$typeof){case r:case m:fe=!0;break;case S:return fe=h._init,V(fe(h._payload),_,Y,B,oe)}}if(fe)return oe=oe(h),fe=B===""?"."+Ie(h,0):B,Ce(oe)?(Y="",fe!=null&&(Y=fe.replace(ta,"$&/")+"/"),V(oe,_,Y,"",function(un){return un})):oe!=null&&(ne(oe)&&(oe=st(oe,Y+(oe.key==null||h&&h.key===oe.key?"":(""+oe.key).replace(ta,"$&/")+"/")+fe)),_.push(oe)),1;fe=0;var H=B===""?".":B+":";if(Ce(h))for(var Q=0;Q<h.length;Q++)B=h[Q],se=H+Ie(B,Q),fe+=V(B,_,Y,se,oe);else if(Q=ce(h),typeof Q=="function")for(h=Q.call(h),Q=0;!(B=h.next()).done;)B=B.value,se=H+Ie(B,Q++),fe+=V(B,_,Y,se,oe);else if(se==="object"){if(typeof h.then=="function")return V(j(h),_,Y,B,oe);throw _=String(h),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return fe}function X(h,_,Y){if(h==null)return h;var B=[],oe=0;return V(h,B,"","",function(se){return _.call(Y,se,oe++)}),B}function Te(h){if(h._status===-1){var _=h._result,Y=_();Y.then(function(B){(h._status===0||h._status===-1)&&(h._status=1,h._result=B,Y.status===void 0&&(Y.status="fulfilled",Y.value=B))},function(B){(h._status===0||h._status===-1)&&(h._status=2,h._result=B,Y.status===void 0&&(Y.status="rejected",Y.reason=B))}),h._status===-1&&(h._status=0,h._result=Y)}if(h._status===1)return h._result.default;throw h._result}var he=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function Yt(h){var _=ue.T,Y={};Y.types=_!==null?_.types:null,ue.T=Y;try{var B=h(),oe=ue.S;oe!==null&&oe(Y,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(W,he)}catch(se){he(se)}finally{_!==null&&Y.types!==null&&(_.types=Y.types),ue.T=_}}function ln(h){var _=ue.T;if(_!==null){var Y=_.types;Y===null?_.types=[h]:Y.indexOf(h)===-1&&Y.push(h)}else Yt(ln.bind(null,h))}var na={map:X,forEach:function(h,_,Y){X(h,function(){_.apply(this,arguments)},Y)},count:function(h){var _=0;return X(h,function(){_++}),_},toArray:function(h){return X(h,function(_){return _})||[]},only:function(h){if(!ne(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return Z.Activity=E,Z.Children=na,Z.Component=k,Z.Fragment=A,Z.Profiler=w,Z.PureComponent=Ne,Z.StrictMode=f,Z.Suspense=D,Z.ViewTransition=M,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,Z.__COMPILER_RUNTIME={__proto__:null,c:function(h){return ue.H.useMemoCache(h)}},Z.addTransitionType=ln,Z.cache=function(h){return function(){return h.apply(null,arguments)}},Z.cacheSignal=function(){return null},Z.cloneElement=function(h,_,Y){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var B=le({},h.props),oe=h.key;if(_!=null)for(se in _.key!==void 0&&(oe=""+_.key),_)!Rt.call(_,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&_.ref===void 0||(B[se]=_[se]);var se=arguments.length-2;if(se===1)B.children=Y;else if(1<se){for(var fe=Array(se),H=0;H<se;H++)fe[H]=arguments[H+2];B.children=fe}return ot(h.type,oe,B)},Z.createContext=function(h){return h={$$typeof:q,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:R,_context:h},h},Z.createElement=function(h,_,Y){var B,oe={},se=null;if(_!=null)for(B in _.key!==void 0&&(se=""+_.key),_)Rt.call(_,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(oe[B]=_[B]);var fe=arguments.length-2;if(fe===1)oe.children=Y;else if(1<fe){for(var H=Array(fe),Q=0;Q<fe;Q++)H[Q]=arguments[Q+2];oe.children=H}if(h&&h.defaultProps)for(B in fe=h.defaultProps,fe)oe[B]===void 0&&(oe[B]=fe[B]);return ot(h,se,oe)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(h){return{$$typeof:I,render:h}},Z.isValidElement=ne,Z.lazy=function(h){return{$$typeof:S,_payload:{_status:-1,_result:h},_init:Te}},Z.memo=function(h,_){return{$$typeof:z,type:h,compare:_===void 0?null:_}},Z.startTransition=Yt,Z.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},Z.use=function(h){return ue.H.use(h)},Z.useActionState=function(h,_,Y){return ue.H.useActionState(h,_,Y)},Z.useCallback=function(h,_){return ue.H.useCallback(h,_)},Z.useContext=function(h){return ue.H.useContext(h)},Z.useDebugValue=function(){},Z.useDeferredValue=function(h,_){return ue.H.useDeferredValue(h,_)},Z.useEffect=function(h,_){return ue.H.useEffect(h,_)},Z.useEffectEvent=function(h){return ue.H.useEffectEvent(h)},Z.useId=function(){return ue.H.useId()},Z.useImperativeHandle=function(h,_,Y){return ue.H.useImperativeHandle(h,_,Y)},Z.useInsertionEffect=function(h,_){return ue.H.useInsertionEffect(h,_)},Z.useLayoutEffect=function(h,_){return ue.H.useLayoutEffect(h,_)},Z.useMemo=function(h,_){return ue.H.useMemo(h,_)},Z.useOptimistic=function(h,_){return ue.H.useOptimistic(h,_)},Z.useReducer=function(h,_,Y){return ue.H.useReducer(h,_,Y)},Z.useRef=function(h){return ue.H.useRef(h)},Z.useState=function(h){return ue.H.useState(h)},Z.useSyncExternalStore=function(h,_,Y){return ue.H.useSyncExternalStore(h,_,Y)},Z.useTransition=function(){return ue.H.useTransition()},Z.version="19.3.0",Z}var Tm;function Gr(){return Tm||(Tm=1,Hr.exports=Hy()),Hr.exports}var ge=Gr(),zr={exports:{}},gi={},Lr={exports:{}},Yr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function zy(){return Em||(Em=1,(function(r){function m(j,V){var X=j.length;j.push(V);e:for(;0<X;){var Te=X-1>>>1,he=j[Te];if(0<w(he,V))j[Te]=V,j[X]=he,X=Te;else break e}}function A(j){return j.length===0?null:j[0]}function f(j){if(j.length===0)return null;var V=j[0],X=j.pop();if(X!==V){j[0]=X;e:for(var Te=0,he=j.length,Yt=he>>>1;Te<Yt;){var ln=2*(Te+1)-1,na=j[ln],h=ln+1,_=j[h];if(0>w(na,X))h<he&&0>w(_,na)?(j[Te]=_,j[h]=X,Te=h):(j[Te]=na,j[ln]=X,Te=ln);else if(h<he&&0>w(_,X))j[Te]=_,j[h]=X,Te=h;else break e}}return V}function w(j,V){var X=j.sortIndex-V.sortIndex;return X!==0?X:j.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;r.unstable_now=function(){return R.now()}}else{var q=Date,I=q.now();r.unstable_now=function(){return q.now()-I}}var D=[],z=[],S=1,E=null,M=3,Se=!1,ce=!1,ae=!1,le=!1,je=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,$e=typeof setImmediate<"u"?setImmediate:null;function Ne(j){for(var V=A(z);V!==null;){if(V.callback===null)f(z);else if(V.startTime<=j)f(z),V.sortIndex=V.expirationTime,m(D,V);else break;V=A(z)}}function tt(j){if(ae=!1,Ne(j),!ce)if(A(D)!==null)ce=!0,Ce||(Ce=!0,ne());else{var V=A(z);V!==null&&Ie(tt,V.startTime-j)}}var Ce=!1,W=-1,ue=5,Rt=-1;function ot(){return le?!0:!(r.unstable_now()-Rt<ue)}function st(){if(le=!1,Ce){var j=r.unstable_now();Rt=j;var V=!0;try{e:{ce=!1,ae&&(ae=!1,k(W),W=-1),Se=!0;var X=M;try{t:{for(Ne(j),E=A(D);E!==null&&!(E.expirationTime>j&&ot());){var Te=E.callback;if(typeof Te=="function"){E.callback=null,M=E.priorityLevel;var he=Te(E.expirationTime<=j);if(j=r.unstable_now(),typeof he=="function"){E.callback=he,Ne(j),V=!0;break t}E===A(D)&&f(D),Ne(j)}else f(D);E=A(D)}if(E!==null)V=!0;else{var Yt=A(z);Yt!==null&&Ie(tt,Yt.startTime-j),V=!1}}break e}finally{E=null,M=X,Se=!1}V=void 0}}finally{V?ne():Ce=!1}}}var ne;if(typeof $e=="function")ne=function(){$e(st)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,ta=_t.port2;_t.port1.onmessage=st,ne=function(){ta.postMessage(null)}}else ne=function(){je(st,0)};function Ie(j,V){W=je(function(){j(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_next=function(j){switch(M){case 1:case 2:case 3:var V=3;break;default:V=M}var X=M;M=V;try{return j()}finally{M=X}},r.unstable_requestPaint=function(){le=!0},r.unstable_runWithPriority=function(j,V){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=M;M=j;try{return V()}finally{M=X}},r.unstable_scheduleCallback=function(j,V,X){var Te=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Te+X:Te):X=Te,j){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=X+he,j={id:S++,callback:V,priorityLevel:j,startTime:X,expirationTime:he,sortIndex:-1},X>Te?(j.sortIndex=X,m(z,j),A(D)===null&&j===A(z)&&(ae?(k(W),W=-1):ae=!0,Ie(tt,X-Te))):(j.sortIndex=he,m(D,j),ce||Se||(ce=!0,Ce||(Ce=!0,ne()))),j},r.unstable_shouldYield=ot,r.unstable_wrapCallback=function(j){var V=M;return function(){var X=M;M=V;try{return j.apply(this,arguments)}finally{M=X}}}})(Yr)),Yr}var Sm;function Ly(){return Sm||(Sm=1,Lr.exports=zy()),Lr.exports}var Br={exports:{}},Pe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Yy(){if(Am)return Pe;Am=1;var r=Gr();function m(S){var E="https://react.dev/errors/"+S;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)E+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+S+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(){}var f={d:{f:A,r:function(){throw Error(m(522))},D:A,C:A,L:A,m:A,X:A,S:A,M:A},p:0,findDOMNode:null},w=Symbol.for("react.portal"),R=Symbol.for("react.recoverable"),q=Symbol.for("react.optimistic_key");function I(S,E,M){var Se=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:Se==null?null:Se===q?q:""+Se,children:S,containerInfo:E,implementation:M}}var D=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(S,E){if(S==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,Pe.browser=function(S){return{$$typeof:R,_reason:S}},Pe.createPortal=function(S,E){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(m(299));return I(S,E,null,M)},Pe.flushSync=function(S){var E=D.T,M=f.p;try{if(D.T=null,f.p=2,S)return S()}finally{D.T=E,f.p=M,f.d.f()}},Pe.preconnect=function(S,E){typeof S=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,f.d.C(S,E))},Pe.prefetchDNS=function(S){typeof S=="string"&&f.d.D(S)},Pe.preinit=function(S,E){if(typeof S=="string"&&E&&typeof E.as=="string"){var M=E.as,Se=z(M,E.crossOrigin),ce=typeof E.integrity=="string"?E.integrity:void 0,ae=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;M==="style"?f.d.S(S,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:Se,integrity:ce,fetchPriority:ae}):M==="script"&&f.d.X(S,{crossOrigin:Se,integrity:ce,fetchPriority:ae,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Pe.preinitModule=function(S,E){if(typeof S=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var M=z(E.as,E.crossOrigin);f.d.M(S,{crossOrigin:M,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0})}}else E==null&&f.d.M(S)},Pe.preload=function(S,E){if(typeof S=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var M=E.as,Se=z(M,E.crossOrigin);f.d.L(S,M,{crossOrigin:Se,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Pe.preloadModule=function(S,E){if(typeof S=="string")if(E){var M=z(E.as,E.crossOrigin);f.d.m(S,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:M,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0})}else f.d.m(S)},Pe.requestFormReset=function(S){f.d.r(S)},Pe.unstable_batchedUpdates=function(S,E){return S(E)},Pe.useFormState=function(S,E,M){return D.H.useFormState(S,E,M)},Pe.useFormStatus=function(){return D.H.useHostTransitionStatus()},Pe.version="19.3.0",Pe}var wm;function By(){if(wm)return Br.exports;wm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),Br.exports=Yy(),Br.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function Iy(){if(Om)return gi;Om=1;var r=Ly(),m=Gr(),A=By();function f(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function R(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function q(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function I(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(R(e)!==e)throw Error(f(188))}function z(e){var t=e.alternate;if(!t){if(t=R(e),t===null)throw Error(f(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return D(l),e;if(i===a)return D(l),t;i=i.sibling}throw Error(f(188))}if(n.return!==a.return)n=l,a=i;else{for(var u=!1,s=l.child;s;){if(s===n){u=!0,n=l,a=i;break}if(s===a){u=!0,a=l,n=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===n){u=!0,n=i,a=l;break}if(s===a){u=!0,a=i,n=l;break}s=s.sibling}if(!u)throw Error(f(189))}}if(n.alternate!==a)throw Error(f(190))}if(n.tag!==3)throw Error(f(188));return n.stateNode.current===n?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}function E(e,t,n,a,l,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,a,l,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&E(e.child,t,n,a,l,i))return!0;e=e.sibling}return!1}function M(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Se(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ce(e){var t=[null,null],n=M(e);return n===null||ae(t,e,n.child,{foundSelf:!1}),t}function ae(e,t,n,a){for(;n!==null;){if(n===t)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ae(e,t,n.child,a))return!0;n=n.sibling}return!1}function le(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(f(559))}}var je=null,k=null;function $e(e,t,n){return e===n?!0:e===t?(je=e,!0):!1}function Ne(e,t,n){return e===n?(k=e,!1):e===t?(k!==null&&(je=e),!0):!1}function tt(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Ce(e,t,n){for(var a=0,l=e;l;l=n(l))a++;l=0;for(var i=t;i;i=n(i))l++;for(;0<a-l;)e=n(e),a--;for(;0<l-a;)t=n(t),l--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var W=Object.assign,ue=Symbol.for("react.element"),Rt=Symbol.for("react.transitional.element"),ot=Symbol.for("react.portal"),st=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),_t=Symbol.for("react.profiler"),ta=Symbol.for("react.consumer"),Ie=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),Te=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),Yt=Symbol.for("react.activity"),ln=Symbol.for("react.legacy_hidden"),na=Symbol.for("react.memo_cache_sentinel"),h=Symbol.for("react.view_transition"),_=Symbol.for("react.recoverable"),Y=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case st:return"Fragment";case _t:return"Profiler";case ne:return"StrictMode";case V:return"Suspense";case X:return"SuspenseList";case Yt:return"Activity";case h:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ot:return"Portal";case Ie:return e.displayName||"Context";case ta:return(e._context.displayName||"Context")+".Consumer";case j:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Te:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var fe=Array.isArray,H=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,un={pending:!1,data:null,method:null,action:null},Pu=[],Ra=-1;function Qt(e){return{current:e}}function Qe(e){0>Ra||(e.current=Pu[Ra],Pu[Ra]=null,Ra--)}function Ae(e,t){Ra++,Pu[Ra]=e.current,e.current=t}var Zt=Qt(null),Tl=Qt(null),wn=Qt(null),Ti=Qt(null);function Ei(e,t){switch(Ae(wn,t),Ae(Tl,e),Ae(Zt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nh(t),e=Rh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Qe(Zt),Ae(Zt,e)}function _a(){Qe(Zt),Qe(Tl),Qe(wn)}function $u(e){var t=e.memoizedState;t!==null&&(gl._currentValue=t.memoizedState,Ae(Ti,e)),t=Zt.current;var n=Rh(t,e.type);t!==n&&(Ae(Tl,e),Ae(Zt,n))}function Si(e){Tl.current===e&&(Qe(Zt),Qe(Tl)),Ti.current===e&&(Qe(Ti),gl._currentValue=un)}var eo,Zr;function On(e){if(eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eo=t&&t[1]||"",Zr=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eo+e+Zr}var to=!1;function no(e,t){if(!e||to)return"";to=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(x){var g=x}Reflect.construct(e,[],N)}else{try{N.call()}catch(x){g=x}N=!1;try{var b=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),N=!0,new e}finally{N&&(b!==void 0?Object.defineProperty(e.prototype,"props",b):delete e.prototype.props)}}}else{try{throw Error()}catch(x){g=x}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(x){if(x&&g&&typeof x.stack=="string")return[x.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var c=u.split(`
`),y=s.split(`
`);for(l=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;if(a===c.length||l===y.length)for(a=c.length-1,l=y.length-1;1<=a&&0<=l&&c[a]!==y[l];)l--;for(;1<=a&&0<=l;a--,l--)if(c[a]!==y[l]){if(a!==1||l!==1)do if(a--,l--,0>l||c[a]!==y[l]){var T=`
`+c[a].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=a&&0<=l);break}}}finally{to=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?On(n):""}function Lm(e,t){switch(e.tag){case 26:case 27:case 5:return On(e.type);case 16:return On("Lazy");case 13:return e.child!==t&&t!==null?On("Suspense Fallback"):On("Suspense");case 19:return On("SuspenseList");case 0:case 15:return no(e.type,!1);case 11:return no(e.type.render,!1);case 1:return no(e.type,!0);case 31:return On("Activity");case 30:return On("ViewTransition");default:return""}}function kr(e){try{var t="",n=null;do t+=Lm(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ao=Object.prototype.hasOwnProperty,lo=r.unstable_scheduleCallback,io=r.unstable_cancelCallback,Ym=r.unstable_shouldYield,Bm=r.unstable_requestPaint,pt=r.unstable_now,Im=r.unstable_getCurrentPriorityLevel,Kr=r.unstable_ImmediatePriority,Jr=r.unstable_UserBlockingPriority,Ai=r.unstable_NormalPriority,qm=r.unstable_LowPriority,Wr=r.unstable_IdlePriority,Gm=r.log,Vm=r.unstable_setDisableYieldValue,El=null,yt=null;function Nn(e){if(typeof Gm=="function"&&Vm(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(El,e)}catch{}}var vt=Math.clz32?Math.clz32:Zm,Xm=Math.log,Qm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Xm(e)/Qm|0)|0}var wi=256,Oi=262144,Ni=4194304;function aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ri(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?l=aa(a):(u&=s,u!==0?l=aa(u):n||(n=s&~e,n!==0&&(l=aa(n))))):(s=a&~i,s!==0?l=aa(s):u!==0?l=aa(u):n||(n=a&~e,n!==0&&(l=aa(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Sl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fr(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-vt(n),l=1<<a;t|=e[a],n&=~l}return t}function km(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pr(){var e=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),e}function uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Al(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Km(e,t,n,a,l,i){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,y=e.hiddenUpdates;for(n=u&~n;0<n;){var T=31-vt(n),N=1<<T;s[T]=0,c[T]=-1;var g=y[T];if(g!==null)for(y[T]=null,T=0;T<g.length;T++){var b=g[T];b!==null&&(b.lane&=-536870913)}n&=~N}a!==0&&$r(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function $r(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-vt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-vt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function tc(e,t){var n=t&-t;return n=(n&42)!==0?1:oo(n),(n&(e.suspendedLanes|t))!==0?0:n}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function so(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function nc(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:cm(e.type))}function ac(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var on=Math.random().toString(36).slice(2),Ze="__reactFiber$"+on,rt="__reactProps$"+on,xa="__reactContainer$"+on,lc="__reactEvents$"+on,Jm="__reactListeners$"+on,Wm="__reactHandles$"+on,ic="__reactResources$"+on,wl="__reactMarker$"+on,_i="__reactLoad$"+on;function xi(e){delete e[Ze],delete e[rt],delete e[Jm],delete e[Wm]}function la(e){var t;if(t=e[Ze])return t;for(var n=e.parentNode;n;){if(t=n[xa]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xh(e);e!==null;){if(n=e[Ze])return n;e=Xh(e)}return t}e=n,n=e.parentNode}return null}function ja(e){if(e=e[Ze]||e[xa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ol(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(f(33))}function Ua(e){var t=e[ic];return t||(t=e[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[wl]=!0}function uc(e){e[_i]=void 0}var oc=new Set,sc={};function ia(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(sc[e]=t,e=0;e<t.length;e++)oc.add(t[e])}var Fm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rc={},cc={};function Pm(e){return ao.call(cc,e)?!0:ao.call(rc,e)?!1:Fm.test(e)?cc[e]=!0:(rc[e]=!0,!1)}var re=!1;function fc(){var e=re;return re=!1,e}function ji(e,t,n){if(Pm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Ui(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function sn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,a)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $m(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){if(!e._valueTracker){var t=dc(e)?"checked":"value";e._valueTracker=$m(e,t,""+e[t])}}function hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=dc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}var eg=/[\n"\\]/g;function xt(e){return e.replace(eg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function co(e,t,n,a,l,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?u==="number"&&e.value==t?fo(e,bt(e.value)):fo(e,bt(t)):n!=null?fo(e,bt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+bt(s):e.removeAttribute("name")}function mc(e,t,n,a,l,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ro(e);return}n=n!=null?""+bt(n):"",t=t!=null?""+bt(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),ro(e)}function fo(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ca(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gc(e,t,n){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+bt(n):""}function pc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(f(92));if(fe(a)){if(1<a.length)throw Error(f(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=bt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),ro(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||tg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vc(e,t,n){if(t!=null&&typeof t!="object")throw Error(f(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",re=!0);for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&(yc(e,l,a),re=!0)}else for(var i in t)t.hasOwnProperty(i)&&yc(e,i,t[i])}function ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ng=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ag=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Di(e){return ag.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kt(){}var mo=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,za=null;function bc(e){var t=ja(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(co(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[rt]||null;if(!l)throw Error(f(90));co(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&hc(a)}break e;case"textarea":gc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ca(e,!!n.multiple,t,!1)}}}var po=!1;function Tc(e,t,n){if(po)return e(t,n);po=!0;try{var a=e(t);return a}finally{if(po=!1,(Ha!==null||za!==null)&&(Du(),Ha&&(t=Ha,e=za,za=Ha=null,bc(t),e)))for(t=0;t<e.length;t++)bc(e[t])}}function Nl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[rt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(f(231,t,typeof n));return n}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yo=!1;if(rn)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){yo=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{yo=!1}var Rn=null,vo=null,Ci=null;function Ec(){if(Ci)return Ci;var e,t=vo,n=t.length,a,l="value"in Rn?Rn.value:Rn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(a=1;a<=u&&t[n-a]===l[i-a];a++);return Ci=l.slice(e,1<a?1-a:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hi(){return!0}function Sc(){return!1}function nt(e){function t(n,a,l,i,u){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hi:Sc,this.isPropagationStopped=Sc,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=nt(_n),_l=W({},_n,{view:0,detail:0}),lg=nt(_l),bo,To,xl,Li=W({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xl&&(xl&&e.type==="mousemove"?(bo=e.screenX-xl.screenX,To=e.screenY-xl.screenY):To=bo=0,xl=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:To}}),Ac=nt(Li),ig=W({},Li,{dataTransfer:0}),ug=nt(ig),og=W({},_l,{relatedTarget:0}),Eo=nt(og),sg=W({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=nt(sg),cg=W({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fg=nt(cg),dg=W({},_n,{data:0}),wc=nt(dg),hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gg[e])?!!t[e]:!1}function So(){return pg}var yg=W({},_l,{key:function(e){if(e.key){var t=hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vg=nt(yg),bg=W({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=nt(bg),Tg=W({},_n,{submitter:0}),Eg=nt(Tg),Sg=W({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),Ag=nt(Sg),wg=W({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Og=nt(wg),Ng=W({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=nt(Ng),_g=W({},_n,{newState:0,oldState:0,source:0}),xg=nt(_g),jg=[9,13,27,32],Ao=rn&&"CompositionEvent"in window,jl=null;rn&&"documentMode"in document&&(jl=document.documentMode);var Ug=rn&&"TextEvent"in window&&!jl,Nc=rn&&(!Ao||jl&&8<jl&&11>=jl),Rc=" ",_c=!1;function xc(e,t){switch(e){case"keyup":return jg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var La=!1;function Dg(e,t){switch(e){case"compositionend":return jc(t);case"keypress":return t.which!==32?null:(_c=!0,Rc);case"textInput":return e=t.data,e===Rc&&_c?null:e;default:return null}}function Cg(e,t){if(La)return e==="compositionend"||!Ao&&xc(e,t)?(e=Ec(),Ci=vo=Rn=null,La=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var Mg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mg[e.type]:t==="textarea"}function Dc(e,t,n,a){Ha?za?za.push(a):za=[a]:Ha=a,t=Yu(t,"onChange"),0<t.length&&(n=new zi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ul=null,Dl=null;function Hg(e){Th(e,0)}function Yi(e){var t=Ol(e);if(hc(t))return e}function Cc(e,t){if(e==="change")return t}var Mc=!1;if(rn){var wo;if(rn){var Oo="oninput"in document;if(!Oo){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Oo=typeof Hc.oninput=="function"}wo=Oo}else wo=!1;Mc=wo&&(!document.documentMode||9<document.documentMode)}function zc(){Ul&&(Ul.detachEvent("onpropertychange",Lc),Dl=Ul=null)}function Lc(e){if(e.propertyName==="value"&&Yi(Dl)){var t=[];Dc(t,Dl,e,go(e)),Tc(Hg,t)}}function zg(e,t,n){e==="focusin"?(zc(),Ul=t,Dl=n,Ul.attachEvent("onpropertychange",Lc)):e==="focusout"&&zc()}function Lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Dl)}function Yg(e,t){if(e==="click")return Yi(t)}function Bg(e,t){if(e==="input"||e==="change")return Yi(t)}function Ig(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:Ig;function Cl(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!ao.call(t,l)||!Tt(e[l],t[l]))return!1}return!0}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,t){var n=Yc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yc(n)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=No(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=No(e.document)}return t}function Ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var qg=rn&&"documentMode"in document&&11>=document.documentMode,Ya=null,_o=null,Ml=null,xo=!1;function Gc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||Ya==null||Ya!==No(a)||(a=Ya,"selectionStart"in a&&Ro(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ml&&Cl(Ml,a)||(Ml=a,a=Yu(_o,"onSelect"),0<a.length&&(t=new zi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ya)))}function ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ba={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},jo={},Vc={};rn&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function oa(e){if(jo[e])return jo[e];if(!Ba[e])return e;var t=Ba[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vc)return jo[e]=t[n];return e}var Xc=oa("animationend"),Qc=oa("animationiteration"),Zc=oa("animationstart"),Gg=oa("transitionrun"),Vg=oa("transitionstart"),Xg=oa("transitioncancel"),kc=oa("transitionend"),Kc=new Map,Uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uo.push("scrollEnd");function Bt(e,t){Kc.set(e,t),ia(t,[e])}var Qg=0;function cn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Vt.identifierPrefix;var n=Qg++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Jc(e){if(e==null||typeof e=="string")return e;var t=null,n=il;if(n!==null)for(var a=0;a<n.length;a++){var l=e[n[a]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function fn(e,t){return e=Jc(e),t=Jc(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jt=[],Ia=0,Do=0;function Ii(){for(var e=Ia,t=Do=Ia=0;t<e;){var n=jt[t];jt[t++]=null;var a=jt[t];jt[t++]=null;var l=jt[t];jt[t++]=null;var i=jt[t];if(jt[t++]=null,a!==null&&l!==null){var u=a.pending;u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l}i!==0&&Wc(n,l,i)}}function qi(e,t,n,a){jt[Ia++]=e,jt[Ia++]=t,jt[Ia++]=n,jt[Ia++]=a,Do|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Co(e,t,n,a){return qi(e,t,n,a),Gi(e)}function sa(e,t){return qi(e,null,null,t),Gi(e)}function Wc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-vt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function Gi(e){if(50<ni)throw ni=0,Uu=null,Error(f(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qa={};function Zg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,a){return new Zg(e,t,n,a)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fc(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vi(e,t,n,a,l,i){var u=0;if(a=e,typeof a=="function")Mo(a)&&(u=1);else if(typeof a=="string")u=Ty(e,n,Zt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case Yt:return e=ct(31,n,t,l),e.elementType=Yt,e.lanes=i,e;case st:return ra(n.children,l,i,t);case ne:u=8,l|=24;break;case _t:return e=ct(12,n,t,l|2),e.elementType=_t,e.lanes=i,e;case V:return e=ct(13,n,t,l),e.elementType=V,e.lanes=i,e;case X:return e=ct(19,n,t,l),e.elementType=X,e.lanes=i,e;case ln:case h:return e=l|32,e=ct(30,n,t,e),e.elementType=h,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ie:u=10;break e;case ta:u=9;break e;case j:u=11;break e;case Te:u=14;break e;case he:u=16,a=null;break e}u=29,n=Error(f(130,e===null?"null":typeof e,"")),a=null}return t=ct(u,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function ra(e,t,n,a){return e=ct(7,e,a,t),e.lanes=n,e}function Ho(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Pc(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function zo(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $c=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var n=$c.get(e);return n!==void 0?n:(t={value:e,source:t,stack:kr(t)},$c.set(e,t),t)}return{value:e,source:t,stack:kr(t)}}var Ga=[],Va=0,Xi=null,Hl=0,Dt=[],Ct=0,xn=null,Kt=1,Jt="";function hn(e,t){Ga[Va++]=Hl,Ga[Va++]=Xi,Xi=e,Hl=t}function ef(e,t,n){Dt[Ct++]=Kt,Dt[Ct++]=Jt,Dt[Ct++]=xn,xn=e;var a=Kt;e=Jt;var l=32-vt(a)-1;a&=~(1<<l),n+=1;var i=32-vt(t)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,Kt=1<<32-vt(t)+l|n<<l|a,Jt=i+e}else Kt=1<<i|n<<l|a,Jt=e}function Qi(e){e.return!==null&&(hn(e,1),ef(e,1,0))}function Lo(e){for(;e===Xi;)Xi=Ga[--Va],Ga[Va]=null,Hl=Ga[--Va],Ga[Va]=null;for(;e===xn;)xn=Dt[--Ct],Dt[Ct]=null,Jt=Dt[--Ct],Dt[Ct]=null,Kt=Dt[--Ct],Dt[Ct]=null}function tf(e,t){Dt[Ct++]=Kt,Dt[Ct++]=Jt,Dt[Ct++]=xn,Kt=t.id,Jt=t.overflow,xn=e}var Ge=null,we=null,F=!1,jn=null,Mt=!1,Yo=Error(f(519));function Un(e){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zl(Ut(t,e)),Yo}function nf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ze]=e,t[rt]=a,n){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(n=0;n<li.length;n++)$(li[n],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),mc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),pc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||wh(t.textContent,n)?(a.popover!=null&&($("beforetoggle",t),$("toggle",t)),a.onScroll!=null&&$("scroll",t),a.onScrollEnd!=null&&$("scrollend",t),a.onClick!=null&&(t.onclick=kt),t=!0):t=!1,t||Un(e,!0)}function Zi(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:Ge=Ge.return}}function Xa(e){if(e!==Ge)return!1;if(!F)return Zi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||mr(e.type,e.memoizedProps)),n=!n),n&&we&&Un(e),Zi(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));we=Vh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));we=Vh(e)}else t===27?(t=we,kn(e.type)?(e=Ar,Ar=null,we=e):we=t):we=Ge?zt(e.stateNode.nextSibling):null;return!0}function ca(){we=Ge=null,F=!1}function Bo(){var e=jn;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),jn=null),e}function zl(e){jn===null?jn=[e]:jn.push(e)}var Io=Qt(null),fa=null,mn=null;function Dn(e,t,n){Ae(Io,t._currentValue),t._currentValue=n}function gn(e){e._currentValue=Io.current,Qe(Io)}function ki(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function qo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=l;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ki(i.return,n,e),a||(u=null);break e}i=s.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(f(341));u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),ki(u,n,e),u=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),ki(l.return,n,e),u=l.child,u=u!==null?u.sibling:null):u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===e){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function da(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var s=l.type;Tt(l.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(l===Ti.current){if(u=l.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}l=l.return}return e!==null&&qo(t,e,n,a),t.flags|=262144,e!==null}function Ki(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){fa=e,mn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ke(e){return af(fa,e)}function Ji(e,t){return fa===null&&ha(e),af(e,t)}function af(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},mn===null){if(e===null)throw Error(f(308));mn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else mn=mn.next=t;return n}var kg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Kg=r.unstable_scheduleCallback,Jg=r.unstable_NormalPriority,He={$$typeof:Ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Go(){return{controller:new kg,data:new Map,refCount:0}}function Ll(e){e.refCount--,e.refCount===0&&Kg(Jg,function(){e.controller.abort()})}function lf(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];n.indexOf(a)===-1&&n.push(a)}}}var Yl=null;function Wg(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Bl=null,Vo=0,ma=0,Qa=null;function Fg(e,t){if(Bl===null){var n=Bl=[];Vo=0,ma=ir(),Qa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Vo++,t.then(uf,uf),t}function uf(){if(--Vo===0&&(Yl=null,Bl!==null)){Qa!==null&&(Qa.status="fulfilled");var e=Bl;Bl=null,ma=0,Qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var of=H.S;H.S=function(e,t){if($d=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fg(e,t),Yl!==null)for(var n=rl;n!==null;)lf(n,Yl),n=n.next;if(n=e.types,n!==null){for(var a=rl;a!==null;)lf(a,n),a=a.next;if(ma!==0){a=Yl,a===null&&(a=Yl=[]);for(var l=0;l<n.length;l++){var i=n[l];a.indexOf(i)===-1&&a.push(i)}}}of!==null&&of(e,t)};var ga=Qt(null);function Xo(){var e=ga.current;return e!==null?e:Ee.pooledCache}function Wi(e,t){t===null?Ae(ga,ga.current):Ae(ga,t.pool)}function sf(){var e=Xo();return e===null?null:{parent:He._currentValue,pool:e}}var Za=Error(f(460)),Qo=Error(f(474)),Fi=Error(f(542)),Pi={then:function(){}};function rf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function cf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(kt,kt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e===void 0&&!("reason"in t)?Error(f(600)):e;default:if(typeof t.status=="string")t.then(kt,kt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e}throw ya=t,Za}}function pa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ya=n,Za):n}}var ya=null;function ff(){if(ya===null)throw Error(f(459));var e=ya;return ya=null,e}function df(e){if(e===Za||e===Fi)throw Error(f(483))}var ka=null,Il=0;function $i(e){var t=Il;return Il+=1,ka===null&&(ka=[]),cf(ka,e,t)}function Cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function eu(e,t){throw t.$$typeof===ue?Error(f(525)):(e=Object.prototype.toString.call(t),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hf(e){function t(p,d){if(e){var v=p.deletions;v===null?(p.deletions=[d],p.flags|=16):v.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function a(p){for(var d=new Map;p!==null;)p.key===null?d.set(p.index,p):d.set(p.key,p),p=p.sibling;return d}function l(p,d){return p=dn(p,d),p.index=0,p.sibling=null,p}function i(p,d,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<d?(p.flags|=2,d):v):(p.flags|=134217730,d)):(p.flags|=1048576,d)}function u(p){return e&&p.alternate===null&&(p.flags|=134217730),p}function s(p,d,v,O){return d===null||d.tag!==6?(d=Ho(v,p.mode,O),d.return=p,d):(d=l(d,v),d.return=p,d)}function c(p,d,v,O){var U=v.type;return U===st?(p=T(p,d,v.props.children,O,v.key),Cn(p,v),p):d!==null&&(d.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===he&&pa(U)===d.type)?(d=l(d,v.props),Cn(d,v),d.return=p,d):(d=Vi(v.type,v.key,v.props,null,p.mode,O),Cn(d,v),d.return=p,d)}function y(p,d,v,O){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=zo(v,p.mode,O),d.return=p,d):(d=l(d,v.children||[]),d.return=p,d)}function T(p,d,v,O,U){return d===null||d.tag!==7?(d=ra(v,p.mode,O,U),d.return=p,d):(d=l(d,v),d.return=p,d)}function N(p,d,v){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=Ho(""+d,p.mode,v),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Rt:return v=Vi(d.type,d.key,d.props,null,p.mode,v),Cn(v,d),v.return=p,v;case ot:return d=zo(d,p.mode,v),d.return=p,d;case he:return d=pa(d),N(p,d,v)}if(fe(d)||B(d))return d=ra(d,p.mode,v,null),d.return=p,d;if(typeof d.then=="function")return N(p,$i(d),v);if(d.$$typeof===Ie)return N(p,Ji(p,d),v);eu(p,d)}return null}function g(p,d,v,O){var U=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return U!==null?null:s(p,d,""+v,O);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rt:return v.key===U?c(p,d,v,O):null;case ot:return v.key===U?y(p,d,v,O):null;case he:return v=pa(v),g(p,d,v,O)}if(fe(v)||B(v))return U!==null?null:T(p,d,v,O,null);if(typeof v.then=="function")return g(p,d,$i(v),O);if(v.$$typeof===Ie)return g(p,d,Ji(p,v),O);eu(p,v)}return null}function b(p,d,v,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return p=p.get(v)||null,s(d,p,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Rt:return p=p.get(O.key===null?v:O.key)||null,c(d,p,O,U);case ot:return p=p.get(O.key===null?v:O.key)||null,y(d,p,O,U);case he:return O=pa(O),b(p,d,v,O,U)}if(fe(O)||B(O))return p=p.get(v)||null,T(d,p,O,U,null);if(typeof O.then=="function")return b(p,d,v,$i(O),U);if(O.$$typeof===Ie)return b(p,d,v,Ji(d,O),U);eu(d,O)}return null}function x(p,d,v,O){for(var U=null,te=null,L=d,G=d=0,Ye=null;L!==null&&G<v.length;G++){L.index>G?(Ye=L,L=null):Ye=L.sibling;var ie=g(p,L,v[G],O);if(ie===null){L===null&&(L=Ye);break}e&&L&&ie.alternate===null&&t(p,L),d=i(ie,d,G),te===null?U=ie:te.sibling=ie,te=ie,L=Ye}if(G===v.length)return n(p,L),F&&hn(p,G),U;if(L===null){for(;G<v.length;G++)L=N(p,v[G],O),L!==null&&(d=i(L,d,G),te===null?U=L:te.sibling=L,te=L);return F&&hn(p,G),U}for(L=a(L);G<v.length;G++)Ye=b(L,p,G,v[G],O),Ye!==null&&(e&&(ie=Ye.alternate,ie!==null&&L.delete(ie.key===null?G:ie.key)),d=i(Ye,d,G),te===null?U=Ye:te.sibling=Ye,te=Ye);return e&&L.forEach(function(Pn){return t(p,Pn)}),F&&hn(p,G),U}function C(p,d,v,O){if(v==null)throw Error(f(151));for(var U=null,te=null,L=d,G=d=0,Ye=null,ie=v.next();L!==null&&!ie.done;G++,ie=v.next()){L.index>G?(Ye=L,L=null):Ye=L.sibling;var Pn=g(p,L,ie.value,O);if(Pn===null){L===null&&(L=Ye);break}e&&L&&Pn.alternate===null&&t(p,L),d=i(Pn,d,G),te===null?U=Pn:te.sibling=Pn,te=Pn,L=Ye}if(ie.done)return n(p,L),F&&hn(p,G),U;if(L===null){for(;!ie.done;G++,ie=v.next())ie=N(p,ie.value,O),ie!==null&&(d=i(ie,d,G),te===null?U=ie:te.sibling=ie,te=ie);return F&&hn(p,G),U}for(L=a(L);!ie.done;G++,ie=v.next())ie=b(L,p,G,ie.value,O),ie!==null&&(e&&(Ye=ie.alternate,Ye!==null&&L.delete(Ye.key===null?G:Ye.key)),d=i(ie,d,G),te===null?U=ie:te.sibling=ie,te=ie);return e&&L.forEach(function(Dy){return t(p,Dy)}),F&&hn(p,G),U}function J(p,d,v,O){if(typeof v=="object"&&v!==null&&v.type===st&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Rt:e:{for(var U=v.key;d!==null;){if(d.key===U){if(U=v.type,U===st){if(d.tag===7){n(p,d.sibling),O=l(d,v.props.children),Cn(O,v),O.return=p,p=O;break e}}else if(d.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===he&&pa(U)===d.type){n(p,d.sibling),O=l(d,v.props),Cn(O,v),O.return=p,p=O;break e}n(p,d);break}else t(p,d);d=d.sibling}v.type===st?(O=ra(v.props.children,p.mode,O,v.key),Cn(O,v),O.return=p,p=O):(O=Vi(v.type,v.key,v.props,null,p.mode,O),Cn(O,v),O.return=p,p=O)}return u(p);case ot:e:{for(U=v.key;d!==null;){if(d.key===U)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(p,d.sibling),O=l(d,v.children||[]),O.return=p,p=O;break e}else{n(p,d);break}else t(p,d);d=d.sibling}O=zo(v,p.mode,O),O.return=p,p=O}return u(p);case he:return v=pa(v),J(p,d,v,O)}if(fe(v))return x(p,d,v,O);if(B(v)){if(U=B(v),typeof U!="function")throw Error(f(150));return v=U.call(v),C(p,d,v,O)}if(typeof v.then=="function")return J(p,d,$i(v),O);if(v.$$typeof===Ie)return J(p,d,Ji(p,v),O);eu(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,d!==null&&d.tag===6?(n(p,d.sibling),O=l(d,v),O.return=p,p=O):(n(p,d),O=Ho(v,p.mode,O),O.return=p,p=O),u(p)):n(p,d)}return function(p,d,v,O){try{Il=0;var U=J(p,d,v,O);return ka=null,U}catch(L){if(L===Za||L===Fi)throw L;var te=ct(29,L,null,p.mode);return te.lanes=O,te.return=p,te}finally{}}}var va=hf(!0),mf=hf(!1),Mn=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(de&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Gi(e),Wc(e,null,n),t}return qi(e,a,t,n),Gi(e)}function ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ec(e,n)}}function Ko(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jo=!1;function Gl(){if(Jo){var e=Qa;if(e!==null)throw e}}function Vl(e,t,n,a){Jo=!1;var l=e.updateQueue;Mn=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,y=c.next;c.next=null,u===null?i=y:u.next=y,u=c;var T=e.alternate;T!==null&&(T=T.updateQueue,s=T.lastBaseUpdate,s!==u&&(s===null?T.firstBaseUpdate=y:s.next=y,T.lastBaseUpdate=c))}if(i!==null){var N=l.baseState;u=0,T=y=c=null,s=i;do{var g=s.lane&-536870913,b=g!==s.lane;if(b?(ee&g)===g:(a&g)===g){g!==0&&g===ma&&(Jo=!0),T!==null&&(T=T.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var x=e,C=s;g=t;var J=n;switch(C.tag){case 1:if(x=C.payload,typeof x=="function"){N=x.call(J,N,g);break e}N=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,g=typeof x=="function"?x.call(J,N,g):x,g==null)break e;N=W({},N,g);break e;case 2:Mn=!0}}g=s.callback,g!==null&&(e.flags|=64,b&&(e.flags|=8192),b=l.callbacks,b===null?l.callbacks=[g]:b.push(g))}else b={lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},T===null?(y=T=b,c=N):T=T.next=b,u|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;b=s,s=b.next,b.next=null,l.lastBaseUpdate=b,l.shared.pending=null}}while(!0);T===null&&(c=N),l.baseState=c,l.firstBaseUpdate=y,l.lastBaseUpdate=T,i===null&&(l.shared.lanes=0),Vn|=u,e.lanes=u,e.memoizedState=N}}function gf(e,t){if(typeof e!="function")throw Error(f(191,e));e.call(t)}function pf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)gf(n[e],t)}var Ln=Qt(null),tu=Qt(0);function yf(e,t){e=Tn,Ae(tu,e),Ae(Ln,t),Tn=e|t.baseLanes}function Wo(){Ae(tu,Tn),Ae(Ln,Ln.current)}function Fo(){Tn=tu.current,Qe(Ln),Qe(tu)}var Ke=Qt(null),et=null;function Yn(e){var t=e.alternate;Ae(Je,Je.current&1),Ae(Ke,e),et===null&&(t===null||Ln.current!==null||t.memoizedState!==null)&&(et=e)}function Po(e){Ae(Je,Je.current),Ae(Ke,e),et===null&&(et=e)}function vf(e){e.tag===22?(Ae(Je,Je.current),Ae(Ke,e),et===null&&(et=e)):Bn()}function Bn(){Ae(Je,Je.current),Ae(Ke,Ke.current)}function Et(e){Qe(Ke),et===e&&(et=null),Qe(Je)}var Je=Qt(0);function Xl(e,t){Ae(Ke,Ke.current),Ae(Je,t)}function $o(e){Qe(Je),Qe(Ke),et===e&&(et=null)}function nu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Er(n)||Sr(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pn=0,K=null,be=null,ze=null,au=!1,Ka=!1,ba=!1,lu=0,Ql=0,Ja=null,$g=0;function Ue(){throw Error(f(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function ts(e,t,n,a,l,i){return pn=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?td:nd,ba=!1,i=n(a,l),ba=!1,Ka&&(i=Tf(t,n,a,l)),bf(e),i}function bf(e){H.H=fu;var t=be!==null&&be.next!==null;if(pn=0,ze=be=K=null,au=!1,Ql=0,Ja=null,t)throw Error(f(300));e===null||Le||(e=e.dependencies,e!==null&&Ki(e)&&(Le=!0))}function Tf(e,t,n,a){K=e;var l=0;do{if(Ka&&(Ja=null),Ql=0,Ka=!1,25<=l)throw Error(f(301));if(l+=1,ze=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}H.H=op,i=t(n,a)}while(Ka);return i}function ep(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?Zl(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(K.flags|=1024),t}function ns(){var e=lu!==0;return lu=0,e}function as(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ls(e){if(au){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}au=!1}pn=0,ze=be=K=null,Ka=!1,Ql=lu=0,Ja=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?K.memoizedState=ze=e:ze=ze.next=e,ze}function Me(){if(be===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=ze===null?K.memoizedState:ze.next;if(t!==null)ze=t,be=e;else{if(e===null)throw K.alternate===null?Error(f(467)):Error(f(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},ze===null?K.memoizedState=ze=e:ze=ze.next=e}return ze}function iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zl(e){var t=Ql;return Ql+=1,Ja===null&&(Ja=[]),e=cf(Ja,e,t),t=K,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?td:nd),e}function uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zl(e);if(e.$$typeof===_)return;if(e.$$typeof===Ie)return ke(e)}throw Error(f(438,String(e)))}function is(e){var t=null,n=K.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=K.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=iu(),K.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=na;return t.index++,n}function yn(e,t){return typeof t=="function"?t(e):t}function ou(e){var t=Me();return us(t,be,e)}function us(e,t,n){var a=e.queue;if(a===null)throw Error(f(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var s=u=null,c=null,y=t,T=!1;do{var N=y.lane&-536870913;if(N!==y.lane?(ee&N)===N:(pn&N)===N){var g=y.revertLane;if(g===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),N===ma&&(T=!0);else if((pn&g)===g){y=y.next,g===ma&&(T=!0);continue}else N={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},c===null?(s=c=N,u=i):c=c.next=N,K.lanes|=g,Vn|=g;N=y.action,ba&&n(i,N),i=y.hasEagerState?y.eagerState:n(i,N)}else g={lane:N,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},c===null?(s=c=g,u=i):c=c.next=g,K.lanes|=N,Vn|=N;y=y.next}while(y!==null&&y!==t);if(c===null?u=i:c.next=s,!Tt(i,e.memoizedState)&&(Le=!0,T&&(n=Qa,n!==null)))throw n;e.memoizedState=i,e.baseState=u,e.baseQueue=c,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function os(e){var t=Me(),n=t.queue;if(n===null)throw Error(f(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);Tt(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Ef(e,t,n){var a=K,l=Me(),i=F;if(i){if(n===void 0)throw Error(f(407));n=n()}else n=t();var u=!Tt((be||l).memoizedState,n);if(u&&(l.memoizedState=n,Le=!0),l=l.queue,cs(wf.bind(null,a,l,e),[e]),e=l.getSnapshot!==t||u||ze!==null&&(ze.memoizedState.tag&1)!==0,Wa(e?9:8,{destroy:void 0},Af.bind(null,a,l,n,t),null),e){if(a.flags|=2048,Ee===null)throw Error(f(349));i||(pn&127)!==0||Sf(a,t,n)}return n}function Sf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t=iu(),K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Af(e,t,n,a){t.value=n,t.getSnapshot=a,Of(t)&&Nf(e)}function wf(e,t,n){return n(function(){Of(t)&&Nf(e)})}function Of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Nf(e){var t=sa(e,2);t!==null&&mt(t,e,2)}function ss(e){var t=at();if(typeof e=="function"){var n=e;if(e=n(),ba){Nn(!0);try{n()}finally{Nn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t}function Rf(e,t,n,a){return e.baseState=n,us(e,be,typeof a=="function"?a:yn)}function tp(e,t,n,a,l){if(cu(e))throw Error(f(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};H.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,_f(t,i)):(i.next=n.next,t.pending=n.next=i)}}function _f(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=H.T,u={};u.types=i!==null?i.types:null,H.T=u;try{var s=n(l,a),c=H.S;c!==null&&c(u,s),xf(e,t,s)}catch(y){rs(e,t,y)}finally{i!==null&&u.types!==null&&(i.types=u.types),H.T=i}}else try{i=n(l,a),xf(e,t,i)}catch(y){rs(e,t,y)}}function xf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){jf(e,t,a)},function(a){return rs(e,t,a)}):jf(e,t,n)}function jf(e,t,n){t.status="fulfilled",t.value=n,Uf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_f(e,n)))}function rs(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Uf(t),t=t.next;while(t!==a)}e.action=null}function Uf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Df(e,t){return t}function Cf(e,t){if(F){var n=Ee.formState;if(n!==null){e:{var a=K;if(F){if(we){t:{for(var l=we,i=Mt;l.nodeType!==8;){if(!i){l=null;break t}if(l=zt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){we=zt(l.nextSibling),a=l.data==="F!";break e}}Un(a)}a=!1}a&&(t=n[0])}}return n=at(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Df,lastRenderedState:t},n.queue=a,n=Pf.bind(null,K,a),a.dispatch=n,a=ss(!1),i=gs.bind(null,K,!1,a.queue),a=at(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=tp.bind(null,K,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function Mf(e){var t=Me();return Hf(t,be,e)}function Hf(e,t,n){if(t=us(e,t,Df)[0],e=ou(yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Zl(t)}catch(u){throw u===Za?Fi:u}else a=t;t=Me();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(K.flags|=2048,Wa(9,{destroy:void 0},np.bind(null,l,n),null)),[a,i,e]}function np(e,t){e.action=t}function zf(e){var t=Me(),n=be;if(n!==null)return Hf(t,n,e);Me(),t=t.memoizedState,n=Me();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Wa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=K.updateQueue,t===null&&(t=iu(),K.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Lf(){return Me().memoizedState}function su(e,t,n,a){var l=at();K.flags|=e,l.memoizedState=Wa(1|t,{destroy:void 0},n,a===void 0?null:a)}function ru(e,t,n,a){var l=Me();a=a===void 0?null:a;var i=l.memoizedState.inst;be!==null&&a!==null&&es(a,be.memoizedState.deps)?l.memoizedState=Wa(t,i,n,a):(K.flags|=e,l.memoizedState=Wa(1|t,i,n,a))}function Yf(e,t){su(8390656,8,e,t)}function cs(e,t){ru(2048,8,e,t)}function ap(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=iu(),K.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Bf(e){var t=Me().memoizedState;return ap({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function If(e,t){return ru(4,2,e,t)}function qf(e,t){return ru(4,4,e,t)}function Gf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vf(e,t,n){n=n!=null?n.concat([e]):null,ru(4,4,Gf.bind(null,t,e),n)}function fs(){}function Xf(e,t){var n=Me();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&es(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Qf(e,t){var n=Me();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&es(t,a[1]))return a[0];if(a=e(),ba){Nn(!0);try{e()}finally{Nn(!1)}}return n.memoizedState=[a,t],a}function ds(e,t,n){return n===void 0||(pn&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=th(),K.lanes|=e,Vn|=e,n)}function Zf(e,t,n,a){return Tt(n,t)?n:Ln.current!==null?(e=ds(e,n,a),Tt(e,t)||(Le=!0),e):(pn&106)===0||(pn&1073741824)!==0&&(ee&261930)===0?(Le=!0,e.memoizedState=n):(e=th(),K.lanes|=e,Vn|=e,t)}function kf(e,t,n,a,l){var i=Q.p;Q.p=i!==0&&8>i?i:8;var u=H.T,s={};s.types=u!==null?u.types:null,H.T=s,gs(e,!1,t,n);try{var c=l(),y=H.S;if(y!==null&&y(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var T=Pg(c,a);kl(e,t,T,Ot(e))}else kl(e,t,a,Ot(e))}catch(N){kl(e,t,{then:function(){},status:"rejected",reason:N},Ot())}finally{Q.p=i,u!==null&&s.types!==null&&(u.types=s.types),H.T=u}}function lp(){}function hs(e,t,n,a){if(e.tag!==5)throw Error(f(476));var l=Kf(e).queue;kf(e,l,t,un,n===null?lp:function(){return Jf(e),n(a)})}function Kf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:un,baseState:un,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:un},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jf(e){var t=Kf(e);t.next===null&&(t=e.alternate.memoizedState),kl(e,t.next.queue,{},Ot())}function ms(){return ke(gl)}function Wf(){return Me().memoizedState}function Ff(){return Me().memoizedState}function ip(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();e=Hn(n);var a=zn(t,e,n);a!==null&&(mt(a,t,n),ql(a,t,n)),t={cache:Go()},e.payload=t;return}t=t.return}}function up(e,t,n){var a=Ot();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},cu(e)?$f(t,n):(n=Co(e,t,n,a),n!==null&&(mt(n,e,a),ed(n,t,a)))}function Pf(e,t,n){var a=Ot();kl(e,t,n,a)}function kl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(cu(e))$f(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,n);if(l.hasEagerState=!0,l.eagerState=s,Tt(s,u))return qi(e,t,l,0),Ee===null&&Ii(),!1}catch{}finally{}if(n=Co(e,t,l,a),n!==null)return mt(n,e,a),ed(n,t,a),!0}return!1}function gs(e,t,n,a){if(a={lane:2,revertLane:ir(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cu(e)){if(t)throw Error(f(479))}else t=Co(e,n,a,2),t!==null&&mt(t,e,2)}function cu(e){var t=e.alternate;return e===K||t!==null&&t===K}function $f(e,t){Ka=au=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ed(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ec(e,n)}}var fu={readContext:ke,use:uu,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue,useEffectEvent:Ue},td={readContext:ke,use:uu,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:ke,useEffect:Yf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,su(4194308,4,Gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return su(4194308,4,e,t)},useInsertionEffect:function(e,t){su(4,2,e,t)},useMemo:function(e,t){var n=at();t=t===void 0?null:t;var a=e();if(ba){Nn(!0);try{e()}finally{Nn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=at();if(n!==void 0){var l=n(t);if(ba){Nn(!0);try{n(t)}finally{Nn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=up.bind(null,K,e),[a.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:function(e){e=ss(e);var t=e.queue,n=Pf.bind(null,K,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:fs,useDeferredValue:function(e,t){var n=at();return ds(n,e,t)},useTransition:function(){var e=ss(!1);return e=kf.bind(null,K,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=K,l=at();if(F){if(n===void 0)throw Error(f(407));n=n()}else{if(n=t(),Ee===null)throw Error(f(349));(ee&127)!==0||Sf(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Yf(wf.bind(null,a,i,e),[e]),a.flags|=2048,Wa(9,{destroy:void 0},Af.bind(null,a,i,n,t),null),n},useId:function(){var e=at(),t=Ee.identifierPrefix;if(F){var n=Jt,a=Kt;n=(a&~(1<<32-vt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=lu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=$g++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ms,useFormState:Cf,useActionState:Cf,useOptimistic:function(e){var t=at();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=gs.bind(null,K,!0,n),n.dispatch=t,[e,t]},useMemoCache:is,useCacheRefresh:function(){return at().memoizedState=ip.bind(null,K)},useEffectEvent:function(e){var t=at(),n={impl:e};return t.memoizedState=n,function(){if((de&2)!==0)throw Error(f(440));return n.impl.apply(void 0,arguments)}}},nd={readContext:ke,use:uu,useCallback:Xf,useContext:ke,useEffect:cs,useImperativeHandle:Vf,useInsertionEffect:If,useLayoutEffect:qf,useMemo:Qf,useReducer:ou,useRef:Lf,useState:function(){return ou(yn)},useDebugValue:fs,useDeferredValue:function(e,t){var n=Me();return Zf(n,be.memoizedState,e,t)},useTransition:function(){var e=ou(yn)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:Zl(e),t]},useSyncExternalStore:Ef,useId:Wf,useHostTransitionStatus:ms,useFormState:Mf,useActionState:Mf,useOptimistic:function(e,t){var n=Me();return Rf(n,be,e,t)},useMemoCache:is,useCacheRefresh:Ff,useEffectEvent:Bf},op={readContext:ke,use:uu,useCallback:Xf,useContext:ke,useEffect:cs,useImperativeHandle:Vf,useInsertionEffect:If,useLayoutEffect:qf,useMemo:Qf,useReducer:os,useRef:Lf,useState:function(){return os(yn)},useDebugValue:fs,useDeferredValue:function(e,t){var n=Me();return be===null?ds(n,e,t):Zf(n,be.memoizedState,e,t)},useTransition:function(){var e=os(yn)[0],t=Me().memoizedState;return[typeof e=="boolean"?e:Zl(e),t]},useSyncExternalStore:Ef,useId:Wf,useHostTransitionStatus:ms,useFormState:zf,useActionState:zf,useOptimistic:function(e,t){var n=Me();return be!==null?Rf(n,be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:is,useCacheRefresh:Ff,useEffectEvent:Bf};function ps(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ot(),l=Hn(a);l.payload=t,n!=null&&(l.callback=n),t=zn(e,l,a),t!==null&&(mt(t,e,a),ql(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ot(),l=Hn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=zn(e,l,a),t!==null&&(mt(t,e,a),ql(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),a=Hn(n);a.tag=2,t!=null&&(a.callback=t),t=zn(e,a,n),t!==null&&(mt(t,e,n),ql(t,e,n))}};function ad(e,t,n,a,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Cl(n,a)||!Cl(l,i):!0}function ld(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function Ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=W({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function id(e){Bi(e)}function ud(e){console.error(e)}function od(e){Bi(e)}function du(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function sd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function vs(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){du(e,t)},n}function rd(e){return e=Hn(e),e.tag=3,e}function cd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){sd(t,n,a)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){sd(t,n,a),typeof l!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function sp(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&da(t,n,l,!0),n=Ke.current,n!==null){switch(n.tag){case 31:case 13:case 19:return et===null?Cu():n.alternate===null&&De===0&&(De=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===Pi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),nr(e,a,l)),!1;case 22:return n.flags|=65536,a===Pi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),nr(e,a,l)),!1}throw Error(f(435,n.tag))}return nr(e,a,l),Cu(),!1}if(F)return t=Ke.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Yo&&(e=Error(f(422),{cause:a}),zl(Ut(e,n)))):(a!==Yo&&(t=Error(f(423),{cause:a}),zl(Ut(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Ut(a,n),l=vs(e.stateNode,a,l),Ko(e,l),De!==4&&(De=2)),!1;var i=Error(f(520),{cause:a});if(i=Ut(i,n),ti===null?ti=[i]:ti.push(i),De!==4&&(De=2),t===null)return!0;a=Ut(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=vs(n.stateNode,a,e),Ko(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Xn===null||!Xn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=rd(l),cd(l,e,n,a),Ko(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var bs=Error(f(461)),Le=!1;function Be(e,t,n,a){t.child=e===null?mf(t,null,n,a):va(t,e.child,n,a)}function fd(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return ha(t),a=ts(e,t,n,u,i,l),s=ns(),e!==null&&!Le?(as(e,t,l),vn(e,t,l)):(F&&s&&Qi(t),t.flags|=1,Be(e,t,a,l),t.child)}function dd(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Mo(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,hd(e,t,i,a,l)):(e=Vi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Rs(e,l)){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Cl,n(u,a)&&e.ref===t.ref)return vn(e,t,l)}return t.flags|=1,e=dn(i,a),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Cl(i,a)&&e.ref===t.ref)if(Le=!1,t.pendingProps=a=i,Rs(e,l))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,vn(e,t,l)}return Ts(e,t,n,a,l)}function md(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return gd(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(t,i!==null?i.cachePool:null),i!==null?yf(t,i):Wo(),vf(t);else return a=t.lanes=536870912,gd(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Wi(t,i.cachePool),yf(t,i),Bn(),t.memoizedState=null):(e!==null&&Wi(t,null),Wo(),Bn());return Be(e,t,l,n),t.child}function Kl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gd(e,t,n,a,l){var i=Xo();return i=i===null?null:{parent:He._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Wi(t,null),Wo(),vf(t),e!==null&&da(e,t,a,!0),t.childLanes=l,null}function hu(e,t){return t=mu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pd(e,t,n){return va(t,e.child,null,n),e=hu(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function rp(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(F){if(a.mode==="hidden")return e=hu(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Kl(null,e);if(Po(t),(e=we)?(e=Gh(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Kt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},n=Pc(e),n.return=t,t.child=n,Ge=t,we=null)):e=null,e===null)throw Un(t);return t.lanes=536870912,null}return hu(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Po(t),l)if(t.flags&256)t.flags&=-257,t=pd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(f(558));else if(Le||da(e,t,n,!1),l=(n&e.childLanes)!==0,Le||l){if(Ln.current===null){if(a=Ee,a!==null&&(u=tc(a,n),u!==0&&u!==i.retryLane))throw i.retryLane=u,sa(e,u),mt(a,e,u),bs;Cu()}t=pd(e,t,n)}else e=i.treeContext,we=zt(u.nextSibling),Ge=t,F=!0,jn=null,Mt=!1,e!==null&&tf(t,e),t=hu(t,a),t.flags|=134221824;return t}return e=dn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fa(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(f(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ts(e,t,n,a,l){return ha(t),n=ts(e,t,n,a,void 0,l),a=ns(),e!==null&&!Le?(as(e,t,l),vn(e,t,l)):(F&&a&&Qi(t),t.flags|=1,Be(e,t,n,l),t.child)}function yd(e,t,n,a,l,i){return ha(t),t.updateQueue=null,n=Tf(t,a,n,l),bf(e),a=ns(),e!==null&&!Le?(as(e,t,i),vn(e,t,i)):(F&&a&&Qi(t),t.flags|=1,Be(e,t,n,i),t.child)}function vd(e,t,n,a,l){if(ha(t),t.stateNode===null){var i=qa,u=n.contextType;typeof u=="object"&&u!==null&&(i=ke(u)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ys,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Zo(t),u=n.contextType,i.context=typeof u=="object"&&u!==null?ke(u):qa,i.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(ps(t,n,u,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&ys.enqueueReplaceState(i,i.state,null),Vl(t,a,i,l),Gl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,c=Ta(n,s);i.props=c;var y=i.context,T=n.contextType;u=qa,typeof T=="object"&&T!==null&&(u=ke(T));var N=n.getDerivedStateFromProps;T=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||y!==u)&&ld(t,i,a,u),Mn=!1;var g=t.memoizedState;i.state=g,Vl(t,a,i,l),Gl(),y=t.memoizedState,s||g!==y||Mn?(typeof N=="function"&&(ps(t,n,N,a),y=t.memoizedState),(c=Mn||ad(t,n,c,a,g,y,u))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=u,a=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,ko(e,t),u=t.memoizedProps,T=Ta(n,u),i.props=T,N=t.pendingProps,g=i.context,y=n.contextType,c=qa,typeof y=="object"&&y!==null&&(c=ke(y)),s=n.getDerivedStateFromProps,(y=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==N||g!==c)&&ld(t,i,a,c),Mn=!1,g=t.memoizedState,i.state=g,Vl(t,a,i,l),Gl();var b=t.memoizedState;u!==N||g!==b||Mn||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof s=="function"&&(ps(t,n,s,a),b=t.memoizedState),(T=Mn||ad(t,n,T,a,g,b,c)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=c,a=T):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Fa(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=va(t,e.child,null,l),t.child=va(t,null,n,l)):Be(e,t,n,l),t.memoizedState=i.state,e=t.child):e=vn(e,t,l),e}function bd(e,t,n,a){return ca(),t.flags|=256,Be(e,t,n,a),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ss(e){return{baseLanes:e,cachePool:sf()}}function As(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=wt),e}function Td(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),u&&(l=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(F){if(l?Yn(t):Bn(),(e=we)?(e=Gh(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Kt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},n=Pc(e),n.return=t,t.child=n,Ge=t,we=null)):e=null,e===null)throw Un(t);return Sr(e)?t.lanes=32:t.lanes=536870912,null}return i=a.children,a=a.fallback,l?(Bn(),l=t.mode,i=mu({mode:"hidden",children:i},l),a=ra(a,l,n,null),i.return=t,a.return=t,i.sibling=a,t.child=i,a=t.child,a.memoizedState=Ss(n),a.childLanes=As(e,u,n),t.memoizedState=Es,Kl(null,a)):(Yn(t),ws(t,i))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return cp(e,t,i,u,a,c,s,n)}return l?(Bn(),l=a.fallback,i=t.mode,s=e.child,c=s.sibling,a=dn(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&1206910976,c!==null?l=dn(c,l):(l=ra(l,i,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,Kl(null,a),a=t.child,l=e.child.memoizedState,l===null?l=Ss(n):(i=l.cachePool,i!==null?(s=He._currentValue,i=i.parent!==s?{parent:s,pool:s}:i):i=sf(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=As(e,u,n),t.memoizedState=Es,Kl(e.child,a)):(Yn(t),n=e.child,e=n.sibling,n=dn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=n,t.memoizedState=null,n)}function ws(e,t){return t=mu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mu(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function gu(e,t,n){return va(t,e.child,null,n),e=ws(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cp(e,t,n,a,l,i,u,s){if(n)return t.flags&256?(Yn(t),t.flags&=-257,gu(e,t,s)):t.memoizedState!==null?(Bn(),t.child=e.child,t.flags|=128,null):(Bn(),i=l.fallback,u=t.mode,l=mu({mode:"visible",children:l.children},u),i=ra(i,u,s,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,va(t,e.child,null,s),l=t.child,l.memoizedState=Ss(s),l.childLanes=As(e,a,s),t.memoizedState=Es,Kl(null,l));if(Yn(t),Sr(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var c=a.dgst;return a=c,a!==""&&(l=Error(f(419)),l.stack="",l.digest=a,zl({value:l,source:null,stack:null})),gu(e,t,s)}if(Le||da(e,t,s,!1),a=(s&e.childLanes)!==0,Le||a){if(Ln.current!==null)return gu(e,t,s);if(a=Ee,a!==null&&(l=tc(a,s),l!==0&&l!==u.retryLane))throw u.retryLane=l,sa(e,l),mt(a,e,l),bs;return Er(i)||Cu(),gu(e,t,s)}return Er(i)?(t.flags|=192,t.child=e.child,null):(e=u.treeContext,we=zt(i.nextSibling),Ge=t,F=!0,jn=null,Mt=!1,e!==null&&tf(t,e),t=ws(t,l.children),t.flags|=134221824,t)}function Ed(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ki(e.return,t,n)}function Sd(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&nu(n)===null&&(t=e),e=e.sibling}return t}function pu(e,t,n,a,l,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=l,u.treeForkCount=i)}function Os(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ns(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var u=Je.current;if(t.flags&128)return Xl(t,u),null;var s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,Xl(t,u),l==="backwards"&&e!==null?(Os(e),Be(e,t,a,n),Os(e)):Be(e,t,a,n),a=F?Hl:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,n,t);else if(e.tag===19)Ed(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=Sd(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,Os(t)),pu(t,!0,l,null,i,a);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&nu(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}pu(t,!0,n,null,i,a);break;case"together":pu(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:n=Sd(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),pu(t,!1,l,n,i,a)}return t.child}function Ad(e,t,n){var a=t.pendingProps;return Dn(t,t.type,a.value),Be(e,t,a.children,n),t.child}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(da(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(f(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ki(e)))}function fp(e,t,n){switch(t.tag){case 3:Ei(t,t.stateNode.containerInfo),Dn(t,He,e.memoizedState.cache),ca();break;case 27:case 5:$u(t);break;case 4:Ei(t,t.stateNode.containerInfo);break;case 10:Dn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Po(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return Yn(t),t.flags|=128,null;a=da(e,t,n,!1);var l=t.child.childLanes;return a||(n&l)!==0?Td(e,t,n):(Yn(t),e=vn(e,t,n),e!==null?e.sibling:null)}Yn(t);break;case 19:if(t.flags&128)return Ns(e,t,n);if(l=(e.flags&128)!==0,a=(n&t.childLanes)!==0,a||(da(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Ns(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Xl(t,Je.current),a)break;return null;case 22:return t.lanes=0,md(e,t,n,t.pendingProps);case 24:Dn(t,He,e.memoizedState.cache)}return vn(e,t,n)}function wd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!Rs(e,n)&&(t.flags&128)===0)return Le=!1,fp(e,t,n);Le=(e.flags&131072)!==0}else Le=!1,F&&(t.flags&1048576)!==0&&ef(t,Hl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=pa(t.elementType),t.type=e,typeof e=="function")Mo(e)?(a=Ta(e,a),t.tag=1,t=vd(null,t,e,a,n)):(t.tag=0,t=Ts(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===j){t.tag=11,t=fd(null,t,e,a,n);break e}else if(l===Te){t.tag=14,t=dd(null,t,e,a,n);break e}else if(l===Ie){t.tag=10,t.type=e,t=Ad(null,t,n);break e}}throw t=se(e)||e,Error(f(306,t,""))}}return t;case 0:return Ts(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Ta(a,t.pendingProps),vd(e,t,a,l,n);case 3:e:{if(Ei(t,t.stateNode.containerInfo),e===null)throw Error(f(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,ko(e,t),Vl(t,a,null,n);var u=t.memoizedState;if(a=u.cache,Dn(t,He,a),a!==i.cache&&qo(t,[He],n,!0),Gl(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=bd(e,t,a,n);break e}else if(a!==l){l=Ut(Error(f(424)),t),zl(l),t=bd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=zt(e.firstChild),Ge=t,F=!0,jn=null,Mt=!0,n=mf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ca(),a===l){t=vn(e,t,n);break e}Be(e,t,a,n)}t=t.child}return t;case 26:return Fa(e,t),e===null?(n=Jh(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(t.stateNode=_h(t.type,t.pendingProps,wn.current,t)):t.memoizedState=Jh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $u(t),e===null&&F&&(a=t.stateNode=Qh(t.type,t.pendingProps,wn.current),Ge=t,Mt=!0,l=we,kn(t.type)?(Ar=l,we=zt(a.firstChild)):we=l),Be(e,t,t.pendingProps.children,n),Fa(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((l=a=we)&&(a=iy(a,t.type,t.pendingProps,Mt),a!==null?(t.stateNode=a,Ge=t,we=zt(a.firstChild),Mt=!1,l=!0):l=!1),l||Un(t)),$u(t),l=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,mr(l,i)?a=null:u!==null&&mr(l,u)&&(t.flags|=32),t.memoizedState!==null&&(l=ts(e,t,ep,null,null,n),gl._currentValue=l),Fa(e,t),Be(e,t,a,n),t.child;case 6:return e===null&&F&&((e=n=we)&&(n=uy(n,t.pendingProps,Mt),n!==null?(t.stateNode=n,Ge=t,we=null,e=!0):e=!1),e||Un(t)),null;case 13:return Td(e,t,n);case 4:return Ei(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=va(t,null,a,n):Be(e,t,a,n),t.child;case 11:return fd(e,t,t.type,t.pendingProps,n);case 7:return a=t.pendingProps,Fa(e,t),Be(e,t,a,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:return Ad(e,t,n);case 9:return l=t.type._context,a=t.pendingProps.children,ha(t),l=ke(l),a=a(l),t.flags|=1,Be(e,t,a,n),t.child;case 14:return dd(e,t,t.type,t.pendingProps,n);case 15:return hd(e,t,t.type,t.pendingProps,n);case 19:return Ns(e,t,n);case 31:return rp(e,t,n);case 22:return md(e,t,n,t.pendingProps);case 24:return ha(t),a=ke(He),e===null?(l=Xo(),l===null&&(l=Ee,i=Go(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},Zo(t),Dn(t,He,l)):((e.lanes&n)!==0&&(ko(e,t),Vl(t,null,null,n),Gl()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Dn(t,He,a)):(a=i.cache,Dn(t,He,a),a!==l.cache&&qo(t,[He],n,!0))),Be(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:F&&Qi(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:Fa(e,t),Be(e,t,a.children,n),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function bn(e){e.flags|=4}function _s(e,t,n,a,l){var i;if((i=(e.mode&32)!==0)&&(i=n===null?$h(t,a):$h(t,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ih())e.flags|=8192;else throw ya=Pi,Qo}else e.flags&=-16777217}function Od(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!em(t))if(ih())e.flags|=8192;else throw ya=Pi,Qo}function yu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Pr():536870912,e.lanes|=t,nl|=t)}function Jl(e,t){if(!F)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function dp(e,t,n){var a=t.pendingProps;switch(Lo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),gn(He),_a(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xa(t)?bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bo())),Oe(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(bn(t),i!==null?(Oe(t),Od(t,i)):(Oe(t),_s(t,l,null,a,n))):i?i!==e.memoizedState?(bn(t),Oe(t),Od(t,i)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&bn(t),Oe(t),_s(t,l,e,a,n)),null;case 27:if(Si(t),n=wn.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(!a){if(t.stateNode===null)throw Error(f(166));return Oe(t),t.subtreeFlags&=-33554433,null}e=Zt.current,Xa(t)?nf(t):(e=Qh(l,a,n),t.stateNode=e,bn(t))}return Oe(t),t.subtreeFlags&=-33554433,null;case 5:if(Si(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(!a){if(t.stateNode===null)throw Error(f(166));return Oe(t),t.subtreeFlags&=-33554433,null}if(i=Zt.current,Xa(t))nf(t);else{var u=ui(wn.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}i[Ze]=t,i[rt]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Fe(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&bn(t)}}return Oe(t),t.subtreeFlags&=-33554433,_s(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&bn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(f(166));if(e=wn.current,Xa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Ge,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||wh(e.nodeValue,n)),e||Un(t,!0)}else e=ui(e).createTextNode(a),e[Ze]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Xa(t),n!==null){if(e===null){if(!a)throw Error(f(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ze]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=Bo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(f(558))}return Oe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Xa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(f(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));l[Ze]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),l=!1}else l=Bo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),yu(t,t.updateQueue),Oe(t),null);case 4:return _a(),e===null&&rr(t.stateNode.containerInfo),t.flags|=67108864,Oe(t),null;case 10:return gn(t.type),Oe(t),null;case 19:if($o(t),a=t.memoizedState,a===null)return Oe(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Jl(a,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=nu(e),i!==null){for(t.flags|=128,Jl(a,!1),e=i.updateQueue,t.updateQueue=e,yu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fc(n,e),n=n.sibling;return Xl(t,Je.current&1|2),F&&hn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&pt()>xu&&(t.flags|=128,l=!0,Jl(a,!1),t.lanes=4194304)}else{if(!l)if(e=nu(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,yu(t,e),Jl(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!F)return Oe(t),null}else 2*pt()-a.renderingStartTime>xu&&n!==536870912&&(t.flags|=128,l=!0,Jl(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}if(a.tail!==null){e=a.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,i=Je.current,i=l?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||F?Xl(t,i):(n=i,Ae(Ke,t),Ae(Je,n),et===null&&(et=t)),F&&hn(t,a.treeForkCount),e}return Oe(t),null;case 22:case 23:return Et(t),Fo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&yu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Qe(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),gn(He),Oe(t),null;case 25:return null;case 30:return t.flags|=33554432,Oe(t),null}throw Error(f(156,t.tag))}function hp(e,t){switch(Lo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(He),_a(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Si(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(f(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(f(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $o(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return _a(),null;case 10:return gn(t.type),null;case 22:case 23:return Et(t),Fo(),e!==null&&Qe(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return gn(He),null;case 25:return null;default:return null}}function Nd(e,t){switch(Lo(t),t.tag){case 3:gn(He),_a();break;case 26:case 27:case 5:Si(t);break;case 4:_a();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:$o(t);break;case 10:gn(t.type);break;case 22:case 23:Et(t),Fo(),e!==null&&Qe(ga);break;case 24:gn(He)}}function Wl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,u=n.inst;a=i(),u.destroy=a}n=n.next}while(n!==l)}}catch(s){ye(t,t.return,s)}}function In(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,l=t;var c=n,y=s;try{y()}catch(T){ye(l,c,T)}}}a=a.next}while(a!==i)}}catch(T){ye(t,t.return,T)}}function Rd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{pf(t,n)}catch(a){ye(e,e.return,a)}}}function _d(e,t,n){n.props=Ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ye(e,t,a)}}function Wt(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var l=e.stateNode,i=cn(e.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=Hh(i)),a=l.ref;break;case 7:if(e.stateNode===null){var u=new Nt(e);E(e.child,!1,ay,u,void 0,void 0),e.stateNode=u}a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(s){ye(e,t,s)}}function We(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ye(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ye(e,t,l)}else n.current=null}function vu(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)qh(e.stateNode,t[n])}function xd(e){for(var t=e.return;t!==null&&(js(t)&&qh(e.stateNode,t.stateNode),!xs(t));)t=t.return}function Fl(e){for(var t=e.return;t!==null&&(js(t)&&ly(e.stateNode,t.stateNode),!xs(t));)t=t.return}function xs(e){return e.tag===5||e.tag===3||e.tag===27}function js(e){return e&&e.tag===7&&e.stateNode!==null}function Us(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ye(e,e.return,l)}}function Ds(e,t,n){try{var a=e.stateNode;Bp(a,e.type,n,t),a[rt]=t}catch(l){ye(e,e.return,l)}}function jd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&kn(e.type)||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&kn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ms(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kt)),vu(e,a),re=!0;else if(l!==4&&(l===27&&(vu(e,a),a=null,kn(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ms(e,t,n,a),e=e.sibling;e!==null;)Ms(e,t,n,a),e=e.sibling}function bu(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),vu(e,a),re=!0;else if(l!==4&&(l===27&&(vu(e,a),a=null,kn(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(bu(e,t,n,a),e=e.sibling;e!==null;)bu(e,t,n,a),e=e.sibling}function Ud(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Fe(t,a,n),t[Ze]=e,t[rt]=n}catch(i){ye(e,e.return,i)}}var Tu=!1,St=null;function Dd(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Tu=!0)}var Ft=null;function Cd(){var e=Ft;return Ft=null,e}var ft=0;function Pa(e,t,n,a,l){return ft=0,Md(e.child,t,n,a,l)}function Md(e,t,n,a,l){for(var i=!1;e!==null;){if(e.tag===5){var u=e.stateNode;if(a!==null){var s=yr(u);a.push(s),s.view&&(i=!0)}else i||yr(u).view&&(i=!0);Tu=!0,Ch(u,ft===0?t:t+"_"+ft,n),ft++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Md(e.child,t,n,a,l)&&(i=!0));e=e.sibling}return i}function Pt(e,t){for(;e!==null;)e.tag===5?Mh(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Pt(e.child,t)),e=e.sibling}function Eu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Eu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(f(544));var n=t.name;t=fn(t.default,t.share),t!=="none"&&(Pa(e,n,t,null,!1)||Pt(e.child,!1))}e=e.sibling}}function Hs(e,t){if(e.tag===30){var n=e.stateNode,a=e.memoizedProps,l=cn(a,n),i=fn(a.default,n.paired?a.share:a.enter);i!=="none"?Pa(e,l,i,null,!1)?(Eu(e),n.paired||t||ul(e,a.onEnter)):Pt(e.child,!1):Eu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hs(e,t),e=e.sibling;else Eu(e)}function zs(e){if(St!==null&&St.size!==0){var t=St;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var l=t.get(a);if(l!==void 0){var i=fn(n.default,n.share);if(i!=="none"&&(Pa(e,a,i,null,!1)?(i=e.stateNode,l.paired=i,i.paired=l,ul(e,n.onShare)):Pt(e.child,!1)),t.delete(a),t.size===0)break}}}zs(e)}e=e.sibling}}}function Ls(e){if(e.tag===30){var t=e.memoizedProps,n=cn(t,e.stateNode),a=St!==null?St.get(n):void 0,l=fn(t.default,a!==void 0?t.share:t.exit);l!=="none"&&(Pa(e,n,l,null,!1)?a!==void 0?(l=e.stateNode,a.paired=l,l.paired=a,St.delete(n),ul(e,t.onShare)):ul(e,t.onExit):Pt(e.child,!1)),St!==null&&zs(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ls(e),e=e.sibling;else St!==null&&zs(e)}function Hd(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=cn(t,e.stateNode);t=fn(t.default,t.update),e.flags&=-5,t!=="none"&&Pa(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Hd(e);e=e.sibling}}function Ys(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Pt(e.child,!1))}Ys(e)}e=e.sibling}}function Su(e){if(e.tag===30)e.stateNode.paired=null,Pt(e.child,!1),Ys(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Su(e),e=e.sibling;else Ys(e)}function zd(e){for(e=e.child;e!==null;)e.tag===30?Pt(e.child,!1):(e.subtreeFlags&33554432)!==0&&zd(e),e=e.sibling}function Bs(e,t,n,a,l,i,u){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(i!==null&&ft<i.length){var y=i[ft],T=yr(c);(y.view||T.view)&&(s=!0);var N;if(N=(e.flags&4)===0)if(T.clip)N=!0;else{N=y.rect;var g=T.rect;N=N.y!==g.y||N.x!==g.x||N.height!==g.height||N.width!==g.width}N&&(e.flags|=4),T.abs?T=!y.abs:(y=y.rect,T=T.rect,T=y.height!==T.height||y.width!==T.width),T&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Ch(c,ft===0?n:n+"_"+ft,l),s&&(e.flags&4)!==0||(Ft===null&&(Ft=[]),Ft.push(c,ft===0?a:a+"_"+ft,t.memoizedProps)),ft++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u?e.flags|=t.flags&32:Bs(e,t.child,n,a,l,i,u)&&(s=!0));t=t.sibling}return s}function Ld(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=e.stateNode,l=cn(n,a),i=fn(n.default,n.update),u;u=e.memoizedState,e.memoizedState=null,a=e;var s=e.child;ft=0,l=Bs(a,s,l,l,i,u,!1),(e.flags&4)!==0&&l&&ul(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Ld(e);e=e.sibling}}var Ve=!1,me=!1,$t=!1,Is=!1,Yd=typeof WeakSet=="function"?WeakSet:Set,Xe=null,en=!1,Pl=!1,Au=!1,qs=!1;function mp(e,t,n){if(e=e.containerInfo,dr=pl,e=qc(e),Ro(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var s=0,c=-1,y=-1,T=0,N=0,g=e,b=null;t:for(;;){for(var x;g!==a||i!==0&&g.nodeType!==3||(c=s+i),g!==u||l!==0&&g.nodeType!==3||(y=s+l),g.nodeType===3&&(s+=g.nodeValue.length),(x=g.firstChild)!==null;)b=g,g=x;for(;;){if(g===e)break t;if(b===a&&++T===i&&(c=s),b===u&&++N===l&&(y=s),(x=g.nextSibling)!==null)break;g=b,b=g.parentNode}g=x}a=c===-1||y===-1?null:{start:c,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(hr={focusedElem:e,selectionRange:a},pl=!1,n=(n&335544064)===n,Xe=t,t=n?9270:1024;Xe!==null;){if(e=Xe,n&&(a=e.deletions,a!==null))for(i=0;i<a.length;i++)n&&Ls(a[i]);if(e.alternate===null&&(e.flags&2)!==0)n&&Dd(e),wu(n);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&Ls(a),wu(n);continue}else if(a!==null&&a.memoizedState!==null){n&&Dd(e),wu(n);continue}}a=e.child,(e.subtreeFlags&t)!==0&&a!==null?(a.return=e,Xe=a):(n&&Hd(e),wu(n))}}St=null}function wu(e){for(;Xe!==null;){var t=Xe,n=e,a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){n=void 0,l=a.memoizedProps,a=a.memoizedState;var i=t.stateNode;try{var u=Ta(t.type,l);n=i.getSnapshotBeforeUpdate(u,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(s){ye(t,t.return,s)}}break;case 3:if((l&1024)!==0){if(a=t.stateNode.containerInfo,n=a.nodeType,n===9)Tr(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Tr(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=cn(a.memoizedProps,a.stateNode),l=t.memoizedProps,l=fn(l.default,l.update),l!=="none"&&Pa(a,n,l,a.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(f(163))}if(a=t.sibling,a!==null){a.return=t.return,Xe=a;break}Xe=t.return}}function Bd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:tn(e,n),a&4&&Wl(5,n);break;case 1:if(tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(u){ye(n,n.return,u)}else{var l=Ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){ye(n,n.return,u)}}a&64&&Rd(n),a&512&&Wt(n,n.return);break;case 3:if(tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{pf(e,t)}catch(u){ye(n,n.return,u)}}break;case 27:t===null&&a&4&&Ud(n);case 26:case 5:tn(e,n),t===null&&a&4&&Us(n),a&512&&Wt(n,n.return);break;case 12:tn(e,n);break;case 31:tn(e,n),a&4&&Vd(e,n);break;case 13:tn(e,n),a&4&&Xd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Np.bind(null,n),oy(e,n))));break;case 22:if(a=n.memoizedState!==null||Ve,!a){var i=t!==null&&t.memoizedState!==null||me;t=Ve,l=me,Ve=a,(me=i)&&!l?(a=2,(n.subtreeFlags&8772)!==0&&(a|=1),Gt(e,n,a)):tn(e,n),Ve=t,me=l}break;case 30:tn(e,n),a&512&&Wt(n,n.return);break;case 7:a&512&&Wt(n,n.return);default:tn(e,n)}}function Gs(e,t){for(e=e.child;e!==null;)Id(e,t),e=e.sibling}function Id(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var l=e.stateNode,i=e.memoizedProps.style,u=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(c){ye(e,e.return,c)}Vs(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,re=!0}catch(c){ye(e,e.return,c)}break;case 18:try{var s=e.stateNode;t?Dh(s,!0):Dh(e.stateNode,!1)}catch(c){ye(e,e.return,c)}break;case 22:case 23:e.memoizedState===null&&Gs(e,t);break;default:Gs(e,t)}}function Vs(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,a=t;switch(n.tag){case 4:Id(n,a);break e;case 22:n.memoizedState===null&&Vs(n,a);break e;default:Vs(n,a)}}e=e.sibling}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,dt=!1;function It(e,t,n){for(n=n.child;n!==null;)Gd(e,t,n),n=n.sibling}function Gd(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 26:me||We(n,t),It(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!me&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:me||We(n,t),Fl(n);var a=Re,l=dt;kn(n.type)&&(Re=n.stateNode,dt=!1),It(e,t,n),Zh(n.stateNode,n.type,n.memoizedProps),Re=a,dt=l;break;case 5:me||We(n,t),Fl(n);case 6:if(n.tag===6&&Fl(n),a=Re,l=dt,Re=null,It(e,t,n),Re=a,dt=l,Re!==null)if(dt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode),re=!0}catch(i){ye(n,t,i)}else try{Re.removeChild(n.stateNode),re=!0}catch(i){ye(n,t,i)}break;case 18:Re!==null&&(dt?(e=Re,Uh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),yl(e)):Uh(Re,n.stateNode));break;case 4:a=Re,l=dt,Re=n.stateNode.containerInfo,dt=!0,It(e,t,n),Re=a,dt=l;break;case 0:case 11:case 14:case 15:In(2,n,t),me||In(4,n,t),It(e,t,n);break;case 1:me||(We(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&_d(n,t,a)),It(e,t,n);break;case 21:It(e,t,n);break;case 22:me=(a=me)||n.memoizedState!==null,It(e,t,n),me=a;break;case 30:We(n,t),It(e,t,n);break;case 7:me||We(n,t),It(e,t,n);break;default:It(e,t,n)}}function Vd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yl(e)}catch(n){ye(t,t.return,n)}}}function Xd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yl(e)}catch(n){ye(t,t.return,n)}}function gp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Yd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Yd),t;default:throw Error(f(435,e.tag))}}function Ou(e,t){var n=gp(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Rp.bind(null,e,a);a.then(l,l)}})}function lt(e,t,n){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],u=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(kn(c.type)){Re=c.stateNode,dt=!1;break e}break;case 5:Re=c.stateNode,dt=!1;break e;case 3:case 4:Re=c.stateNode.containerInfo,dt=!0;break e}c=c.return}if(Re===null)throw Error(f(160));Gd(u,s,i),Re=null,dt=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qd(t,e,n),t=t.sibling}var qt=null;function Qd(e,t,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var u=a[i];u.ref.impl=u.nextImpl}lt(t,e,n),it(e),l&4&&(In(3,e,e.return),Wl(3,e),In(5,e,e.return));break;case 1:lt(t,e,n),it(e),l&512&&(me||a===null||We(a,a.return)),l&64&&Ve&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=qt,lt(t,e,n),it(e),l&512&&(me||a===null||We(a,a.return)),l&4)if(l=a!==null?a.memoizedState:null,n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null)if(Ve)e.stateNode=_h(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,l=i.ownerDocument||i;t:switch(t){case"title":a=l.getElementsByTagName("title")[0],(!a||a[wl]||a[Ze]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(t),l.head.insertBefore(a,l.querySelector("head > title"))),Fe(a,t,n),a[Ze]=e,qe(a),t=a;break e;case"link":if(i=Ph("link","href",l).get(t+(n.href||""))){for(u=0;u<i.length;u++)if(a=i[u],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(u,1);break t}}a=l.createElement(t),Fe(a,t,n),l.head.appendChild(a);break;case"meta":if(i=Ph("meta","content",l).get(t+(n.content||""))){for(u=0;u<i.length;u++)if(a=i[u],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(u,1);break t}}a=l.createElement(t),Fe(a,t,n),l.head.appendChild(a);break;default:throw Error(f(468,t))}a[Ze]=e,qe(a),t=a}e.stateNode=t}else Ve||Rr(i,e.type,e.stateNode);else e.stateNode=Fh(i,n,e.memoizedProps);else l!==n?(l===null?(t=a.stateNode,t===null||me||t.parentNode.removeChild(t)):l.count--,n===null?Ve||Rr(i,e.type,e.stateNode):Fh(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ds(e,e.memoizedProps,a.memoizedProps);break;case 27:lt(t,e,n),it(e),l&512&&(me||a===null||We(a,a.return)),a!==null&&l&4&&Ds(e,e.memoizedProps,a.memoizedProps);break;case 5:if(i=$t,$t=!1,lt(t,e,n),$t=i,it(e),l&512&&(me||a===null||We(a,a.return)),e.flags&32){t=e.stateNode;try{Ma(t,""),re=!0}catch(T){ye(e,e.return,T)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,Ds(e,t,a!==null?a.memoizedProps:t)),l&1024&&(Is=!0);break;case 6:if(lt(t,e,n),it(e),l&4){if(e.stateNode===null)throw Error(f(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,re=!0}catch(T){ye(e,e.return,T)}}break;case 3:if(re=!1,Iu=null,i=qt,qt=oi(t.containerInfo),lt(t,e,n),qt=i,it(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{yl(t.containerInfo)}catch(T){ye(e,e.return,T)}Is&&(Is=!1,Zd(e)),re=!1;break;case 4:l=$t,$t=Ve,a=fc(),i=qt,qt=oi(e.stateNode.containerInfo),lt(t,e,n),it(e),qt=i,re&&Pl&&(Au=!0),re=a,$t=l;break;case 12:lt(t,e,n),it(e);break;case 31:lt(t,e,n),it(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ou(e,t)));break;case 13:lt(t,e,n),it(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_u=pt()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ou(e,t)));break;case 22:i=e.memoizedState!==null,u=a!==null&&a.memoizedState!==null;var s=Ve,c=me,y=$t;Ve=s||i,$t=y||i,me=c||u,lt(t,e,n),me=c,$t=y,Ve=s,it(e),l&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||a===null||u||Ve||me||(t=u||me,n=Ve,a=me,Ve=i||Ve,me=t,qn(e,2),Ve=n,me=a),!i&&$t||Gs(e,i)),l&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Ou(e,n))));break;case 19:lt(t,e,n),it(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ou(e,t)));break;case 30:l&512&&(me||a===null||We(a,a.return)),l=fc(),i=Pl,u=(n&335544064)===n,s=e.memoizedProps,Pl=u&&fn(s.default,s.update)!=="none",lt(t,e,n),it(e),u&&a!==null&&re&&(e.flags|=4),Pl=i,re=l;break;case 21:break;case 7:l&512&&(me||a===null||We(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:lt(t,e,n),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(jd(a)){n=a;break}a=a.return}a=null;for(var l=e.return;l!==null;){if(js(l)){var i=l.stateNode;a===null?a=[i]:a.push(i)}if(xs(l))break;l=l.return}var u=a;if(n==null)throw Error(f(160));switch(n.tag){case 27:var s=n.stateNode,c=Cs(e);bu(e,c,s,u);break;case 5:var y=n.stateNode;n.flags&32&&(Ma(y,""),n.flags&=-33);var T=Cs(e);bu(e,T,y,u);break;case 3:case 4:var N=n.stateNode.containerInfo,g=Cs(e);Ms(e,g,N,u);break;default:throw Error(f(161))}}catch(b){ye(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zd(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,pl=!0,t.reset(),pl=!1),e=e.sibling}}function $a(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)kd(t,e),t=t.sibling;else Ld(t)}function kd(e,t){var n=e.alternate;if(n===null)Hs(e,!1);else switch(e.tag){case 3:if(qs=en=!1,Cd(),$a(t,e),!en&&!Au){if(e=Ft,e!==null)for(var a=0;a<e.length;a+=3){n=e[a];var l=e[a+1];Mh(n,e[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),qs=!0}Ft=null;break;case 5:$a(t,e);break;case 4:a=en,en=!1,$a(t,e),en&&(Au=!0),en=a;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Hs(e,!1):$a(t,e));break;case 30:a=en,l=Cd(),en=!1,$a(t,e),en&&(e.flags|=4);var i=e.memoizedProps,u=e.stateNode;t=cn(i,u),u=cn(n.memoizedProps,u);var s=fn(i.default,i.update);s==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,ft=0,t=Bs(e,n,t,u,s,i,!0),ft!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(ul(e,e.memoizedProps.onUpdate),Ft=l):l!==null&&(l.push.apply(l,Ft),Ft=l),en=(e.flags&32)!==0?!0:a;break;default:$a(t,e)}}function tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bd(e,t.alternate,t),t=t.sibling}function qn(e,t){for(e=e.child;e!==null;){var n=e,a=t;switch(n.tag){case 0:case 11:case 14:case 15:In(4,n,n.return),qn(n,a);break;case 1:We(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&_d(n,n.return,l),qn(n,a);break;case 27:(a&2)!==0&&Zh(n.stateNode,n.type,n.memoizedProps);case 5:We(n,n.return),n.tag!==5&&n.tag!==27||Fl(n),qn(n,a);break;case 6:Fl(n);break;case 26:We(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||me||l.parentNode.removeChild(l),qn(n,a);break;case 22:n.memoizedState===null&&qn(n,a);break;case 30:We(n,n.return),qn(n,a);break;case 7:We(n,n.return);default:qn(n,a)}e=e.sibling}}function Gt(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,u=i.flags,s=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:Gt(l,i,n),Wl(4,i);break;case 1:if(Gt(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(T){ye(a,a.return,T)}if(a=i,l=a.updateQueue,l!==null){var c=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)gf(y[l],c)}catch(T){ye(a,a.return,T)}}s&&u&64&&Rd(i),Wt(i,i.return);break;case 27:(n&2)!==0&&Ud(i);case 5:i.tag!==5&&i.tag!==27||xd(i),Gt(l,i,n),s&&a===null&&u&4&&Us(i),Wt(i,i.return);break;case 6:xd(i);break;case 26:c=i.stateNode,i.memoizedState!==null||c===null||Ve||Rr(oi(c.ownerDocument),i.type,c),Gt(l,i,n),s&&a===null&&u&4&&Us(i),Wt(i,i.return);break;case 12:Gt(l,i,n);break;case 31:Gt(l,i,n),s&&u&4&&Vd(l,i);break;case 13:Gt(l,i,n),s&&u&4&&Xd(l,i);break;case 22:i.memoizedState===null&&Gt(l,i,n),Wt(i,i.return);break;case 30:Gt(l,i,n),Wt(i,i.return);break;case 7:Wt(i,i.return);default:Gt(l,i,n)}t=t.sibling}}function Xs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ll(n))}function Qs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ll(e))}function Ht(e,t,n,a){var l=(n&335544064)===n;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)Kd(e,t,n,a),t=t.sibling;else l&&zd(t)}function Kd(e,t,n,a){var l=(n&335544064)===n;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Su(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ht(e,t,n,a),i&2048&&Wl(9,t);break;case 1:Ht(e,t,n,a);break;case 3:Ht(e,t,n,a),l&&qs&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Ll(i)));break;case 12:if(i&2048){Ht(e,t,n,a),i=t.stateNode;try{var u=t.memoizedProps,s=u.id,c=u.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(y){ye(t,t.return,y)}}else Ht(e,t,n,a);break;case 31:Ht(e,t,n,a);break;case 13:Ht(e,t,n,a);break;case 23:break;case 22:u=t.stateNode,s=t.alternate,t.memoizedState!==null?(l&&s!==null&&s.memoizedState===null&&Su(s),u._visibility&2?Ht(e,t,n,a):$l(e,t)):(l&&s!==null&&s.memoizedState!==null&&Su(t),u._visibility&2?Ht(e,t,n,a):(u._visibility|=2,el(e,t,n,a,(t.subtreeFlags&10256)!==0||!1))),i&2048&&Xs(s,t);break;case 24:Ht(e,t,n,a),i&2048&&Qs(t.alternate,t);break;case 30:l&&(i=t.alternate,i!==null&&(Pt(i.child,!0),Pt(t.child,!0))),Ht(e,t,n,a);break;default:Ht(e,t,n,a)}}function el(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=n,c=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:el(i,u,s,c,l),Wl(8,u);break;case 23:break;case 22:var T=u.stateNode;u.memoizedState!==null?T._visibility&2?el(i,u,s,c,l):$l(i,u):(T._visibility|=2,el(i,u,s,c,l)),l&&y&2048&&Xs(u.alternate,u);break;case 24:el(i,u,s,c,l),l&&y&2048&&Qs(u.alternate,u);break;default:el(i,u,s,c,l)}t=t.sibling}}function $l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:$l(n,a),l&2048&&Xs(a.alternate,a);break;case 24:$l(n,a),l&2048&&Qs(a.alternate,a);break;default:$l(n,a)}t=t.sibling}}var Ea=8192;function Sa(e,t,n){if(e.subtreeFlags&Ea)for(e=e.child;e!==null;)Jd(e,t,n),e=e.sibling}function Jd(e,t,n){switch(e.tag){case 26:Sa(e,t,n),e.flags&Ea&&(e.memoizedState!==null?Ey(n,qt,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&nm(n,e)));break;case 5:Sa(e,t,n),e.flags&Ea&&(e=e.stateNode,(t&335544128)===t&&nm(n,e));break;case 3:case 4:var a=qt;qt=oi(e.stateNode.containerInfo),Sa(e,t,n),qt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ea,Ea=16777216,Sa(e,t,n),Ea=a):Sa(e,t,n));break;case 30:if((e.flags&Ea)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var l=e.stateNode;l.paired=null,St===null&&(St=new Map),St.set(a,l)}Sa(e,t,n);break;default:Sa(e,t,n)}}function Wd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Xe=a,Pd(a,e)}Wd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fd(e),e=e.sibling}function Fd(e){switch(e.tag){case 0:case 11:case 15:ei(e),e.flags&2048&&In(9,e,e.return);break;case 3:ei(e);break;case 12:ei(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Nu(e)):ei(e);break;default:ei(e)}}function Nu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Xe=a,Pd(a,e)}Wd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:In(8,t,t.return),Nu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Nu(t));break;default:Nu(t)}e=e.sibling}}function Pd(e,t){for(;Xe!==null;){var n=Xe;switch(n.tag){case 0:case 11:case 15:In(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ll(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Xe=a;else e:for(n=e;Xe!==null;){a=Xe;var l=a.sibling,i=a.return;if(qd(a),a===n){Xe=null;break e}if(l!==null){l.return=i,Xe=l;break e}Xe=i}}}var pp={getCacheForType:function(e){var t=ke(He),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ke(He).controller.signal}},yp=typeof WeakMap=="function"?WeakMap:Map,de=0,Ee=null,P=null,ee=0,pe=0,At=null,Gn=!1,tl=!1,Zs=!1,Tn=0,De=0,Vn=0,Aa=0,Ru=0,wt=0,nl=0,ti=null,ht=null,ks=!1,_u=0,$d=0,xu=1/0,ju=null,Xn=null,_e=0,Vt=null,wa=null,nn=0,Ks=0,Js=null,eh=null,al=null,ll=null,il=null,ni=0,Uu=null;function Ot(){return(de&2)!==0&&ee!==0?ee&-ee:H.T!==null?ir():nc()}function th(){if(wt===0)if((ee&536870912)===0||F){var e=Oi;Oi<<=1,(Oi&3932160)===0&&(Oi=262144),wt=e}else wt=536870912;return e=Ke.current,e!==null&&(e.flags|=32),wt}function ul(e,t){if(t!=null){var n=e.stateNode,a=n.ref;a===null&&(a=n.ref=Hh(cn(e.memoizedProps,n))),ll===null&&(ll=[]),ll.push(t.bind(null,a))}}function mt(e,t,n){(e===Ee&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(ol(e,0),Qn(e,ee,wt,!1)),Al(e,n),((de&2)===0||e!==Ee)&&(e===Ee&&((de&2)===0&&(Aa|=n),De===4&&Qn(e,ee,wt,!1)),an(e))}function nh(e,t,n){if((de&6)!==0)throw Error(f(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Sl(e,t),l=a?Tp(e,t):Fs(e,t,!0),i=a;do{if(l===0){tl&&!a&&Qn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!vp(n)){l=Fs(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;l=ti;var c=s.current.memoizedState.isDehydrated;if(c&&(ol(s,u).flags|=256),u=Fs(s,u,!1),u!==2&&u!==6){if(Zs&&!c){s.errorRecoveryDisabledLanes|=i,Aa|=i,l=4;break e}i=ht,ht=l,i!==null&&(ht===null?ht=i:ht.push.apply(ht,i))}l=u}if(i=!1,l!==2)continue}}if(l===1){ol(e,0),Qn(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Qn(a,t,wt,!Gn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(l=_u+300-pt(),10<l)){if(Qn(a,t,wt,!Gn),Ri(a,0,!0)!==0)break e;nn=t,a.timeoutHandle=pr(ah.bind(null,a,n,ht,ju,ks,t,wt,Aa,nl,Gn,i,"Throttled",-0,0),l);break e}ah(a,n,ht,ju,ks,t,wt,Aa,nl,Gn,i,null,-0,0)}}break}while(!0);an(e)}function ah(e,t,n,a,l,i,u,s,c,y,T,N,g,b){e.timeoutHandle=-1;var x=t.subtreeFlags,C=(i&335544064)===i;if(N=null,(C||x&8192||(x&16785408)===16785408)&&(N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kt},St=null,Jd(t,i,N),C&&(x=N,C=e.containerInfo,C=(C.nodeType===9?C:C.ownerDocument).__reactViewTransition,C!=null&&(x.count++,x.waitingForViewTransition=!0,x=ci.bind(x),C.finished.then(x,x))),x=(i&62914560)===i?_u-pt():(i&4194048)===i?$d-pt():0,x=Sy(N,x),x!==null)){nn=i,e.cancelPendingCommit=x(fh.bind(null,e,t,i,n,a,l,u,s,c,y,T,N,null,g,b)),Qn(e,i,u,!y);return}fh(e,t,i,n,a,l,u,s,c,y,T,N)}function vp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Tt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t,n,a){t=Fr(e,t),t&=~Ru,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-vt(l),u=1<<i;a[i]=-1,l&=~u}n!==0&&$r(e,n,t)}function Du(){return(de&6)===0?(ai(0),!1):!0}function Ws(){if(P!==null){if(pe===0)var e=P.return;else e=P,mn=fa=null,ls(e),ka=null,Il=0,e=P;for(;e!==null;)Nd(e.alternate,e),e=e.return;P=null}}function ol(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Gp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),nn=0,Ws(),Ee=e,P=n=dn(e.current,null),ee=t,pe=0,At=null,Gn=!1,tl=Sl(e,t),Zs=!1,nl=wt=Ru=Aa=Vn=De=0,ht=ti=null,ks=!1,Tn=Fr(e,t),Ii(),n}function lh(e,t){K=null,H.H=fu,t===Za||t===Fi?(t=ff(),pe=3):t===Qo?(t=ff(),pe=4):pe=t===bs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,P===null&&(De=1,du(e,Ut(t,e.current)))}function ih(){var e=Ke.current;return e===null?!0:(ee&4194048)===ee?et===null:(ee&62914560)===ee||(ee&536870912)!==0?e===et:!1}function uh(){var e=H.H;return H.H=fu,e===null?fu:e}function oh(){var e=H.A;return H.A=pp,e}function Cu(){De=4,Gn||(ee&4194048)!==ee&&Ke.current!==null||(tl=!0),(Vn&134217727)===0&&(Aa&134217727)===0||Ee===null||Qn(Ee,ee,wt,!1)}function Fs(e,t,n){var a=de;de|=2;var l=uh(),i=oh();(Ee!==e||ee!==t)&&(ju=null,ol(e,t)),t=!1;var u=De;e:do try{if(pe!==0&&P!==null){var s=P,c=At;switch(pe){case 8:Ws(),u=6;break e;case 3:case 2:case 9:case 6:Ke.current===null&&(t=!0);var y=pe;if(pe=0,At=null,sl(e,s,c,y),n&&tl){u=0;break e}break;default:y=pe,pe=0,At=null,sl(e,s,c,y)}}bp(),u=De;break}catch(T){lh(e,T)}while(!0);return t&&e.shellSuspendCounter++,mn=fa=null,de=a,H.H=l,H.A=i,P===null&&(Ee=null,ee=0,Ii()),u}function bp(){for(;P!==null;)sh(P)}function Tp(e,t){var n=de;de|=2;var a=uh(),l=oh();Ee!==e||ee!==t?(ju=null,xu=pt()+500,ol(e,t)):tl=Sl(e,t);e:do try{if(pe!==0&&P!==null){t=P;var i=At;t:switch(pe){case 1:pe=0,At=null,sl(e,t,i,1);break;case 2:case 9:if(rf(i)){pe=0,At=null,rh(t);break}t=function(){pe!==2&&pe!==9||Ee!==e||(pe=7),an(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:rf(i)?(pe=0,At=null,rh(t)):(pe=0,At=null,sl(e,t,i,7));break;case 5:var u=null;switch(P.tag){case 26:u=P.memoizedState;case 5:case 27:var s=P;if(u?em(u):s.stateNode.complete){pe=0,At=null;var c=s.sibling;if(c!==null)P=c;else{var y=s.return;y!==null?(P=y,Mu(y)):P=null}break t}}pe=0,At=null,sl(e,t,i,5);break;case 6:pe=0,At=null,sl(e,t,i,6);break;case 8:Ws(),De=6;break e;default:throw Error(f(462))}}Ep();break}catch(T){lh(e,T)}while(!0);return mn=fa=null,H.H=a,H.A=l,de=n,P!==null?0:(Ee=null,ee=0,Ii(),De)}function Ep(){for(;P!==null&&!Ym();)sh(P)}function sh(e){var t=wd(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,t===null?Mu(e):P=t}function rh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yd(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=yd(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:ls(t);var a=t;a===Ge&&(F?(Zi(a),a.tag===5&&a.stateNode!=null&&(we=a.stateNode)):(Zi(a),F=!0));default:Nd(n,t),t=P=Fc(t,Tn),t=wd(n,t,Tn)}e.memoizedProps=e.pendingProps,t===null?Mu(e):P=t}function sl(e,t,n,a){mn=fa=null,ls(t),ka=null,Il=0;var l=t.return;try{if(sp(e,l,t,n,ee)){De=1,du(e,Ut(n,e.current)),P=null;return}}catch(i){if(l!==null)throw P=l,i;De=1,du(e,Ut(n,e.current)),P=null;return}t.flags&32768?(F||a===1?e=!0:tl||(ee&536870912)!==0?e=!1:(Gn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ke.current,a!==null&&a.tag===13&&(a.flags|=16384))),ch(t,e)):Mu(t)}function Mu(e){var t=e;do{if((t.flags&32768)!==0){ch(t,Gn);return}e=t.return;var n=dp(t.alternate,t,Tn);if(n!==null){P=n;return}if(t=t.sibling,t!==null){P=t;return}P=t=e}while(t!==null);De===0&&(De=5)}function ch(e,t){do{var n=hp(e.alternate,e);if(n!==null){n.flags&=32767,P=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){P=e;return}P=e=n}while(e!==null);De=6,P=null}function fh(e,t,n,a,l,i,u,s,c,y,T,N){e.cancelPendingCommit=null;do Hu();while(_e!==0);if((de&6)!==0)throw Error(f(327));if(t!==null){if(t===e.current)throw Error(f(177));e===Ee&&(P=Ee=null,ee=0),wa=t,Vt=e,nn=n,Js=l,eh=a,Sp(e,t,n,u,s,c,N)}}function Sp(e,t,n,a,l,i,u){var s=t.lanes|t.childLanes;if(Ks=s,s|=Do,Km(e,n,s,a,l,i),ll=null,(n&335544064)===n?(il=Wg(e),a=10262):(il=null,a=10256),(t.subtreeFlags&a)!==0||(t.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,_p(Ai,function(){return tr(),null})):(e.callbackNode=null,e.callbackPriority=0),Tu=!1,a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=H.T,H.T=null,l=Q.p,Q.p=2,i=de,de|=4;try{mp(e,t,n)}finally{de=i,Q.p=l,H.T=a}}_e=1,Tu?al=Kp(u,e.containerInfo,il,Ps,$s,wp,er,tr,Ap):(Ps(),$s(),er())}function Ap(e){if(_e!==0){var t=Vt.onRecoverableError;t(e,{componentStack:null})}}function wp(){_e===3&&(_e=0,kd(wa,Vt),_e=4)}function Ps(){if(_e===1){_e=0;var e=Vt,t=wa,n=nn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=Q.p;Q.p=2;var i=de;de|=4;try{Pl=Au=!1,Qd(t,e,n),n=hr;var u=qc(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(u!==s&&s&&s.ownerDocument&&Ic(s.ownerDocument.documentElement,s)){if(c!==null&&Ro(s)){var y=c.start,T=c.end;if(T===void 0&&(T=y),"selectionStart"in s)s.selectionStart=y,s.selectionEnd=Math.min(T,s.value.length);else{var N=s.ownerDocument||document,g=N&&N.defaultView||window;if(g.getSelection){var b=g.getSelection(),x=s.textContent.length,C=Math.min(c.start,x),J=c.end===void 0?C:Math.min(c.end,x);!b.extend&&C>J&&(u=J,J=C,C=u);var p=Bc(s,C),d=Bc(s,J);if(p&&d&&(b.rangeCount!==1||b.anchorNode!==p.node||b.anchorOffset!==p.offset||b.focusNode!==d.node||b.focusOffset!==d.offset)){var v=N.createRange();v.setStart(p.node,p.offset),b.removeAllRanges(),C>J?(b.addRange(v),b.extend(d.node,d.offset)):(v.setEnd(d.node,d.offset),b.addRange(v))}}}}for(N=[],b=s;b=b.parentNode;)b.nodeType===1&&N.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<N.length;s++){var O=N[s];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}pl=!!dr,hr=dr=null}finally{de=i,Q.p=l,H.T=a}}e.current=t,_e=2}}function $s(){if(_e===2){_e=0;var e=Vt,t=wa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var a=Q.p;Q.p=2;var l=de;de|=4;try{Bd(e,t.alternate,t)}finally{de=l,Q.p=a,H.T=n}}_e=3}}function er(){if(_e===4||_e===3){_e=0;var e=al;al=null,Bm();var t=Vt,n=wa,a=nn,l=eh,i=(a&335544064)===a?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?_e=5:(_e=0,wa=Vt=null,dh(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(Xn=null),so(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(El,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=H.T,i=Q.p,Q.p=2,H.T=null;try{for(var u=t.onRecoverableError,s=0;s<l.length;s++){var c=l[s];u(c.value,{componentStack:c.stack})}}finally{H.T=n,Q.p=i}}if(l=ll,u=il,il=null,l!==null&&(ll=null,u===null&&(u=[]),e!==null))for(c=0;c<l.length;c++)n=(0,l[c])(u),n!==void 0&&e.finished.finally(n);(nn&3)!==0&&Hu(),an(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Uu?ni++:(ni=0,Uu=t):(ni=0,Uu=null),ai(0)}}function dh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ll(t)))}function Hu(){return al!==null&&(al.skipTransition(),al=null),Ps(),$s(),er(),tr()}function tr(){if(_e!==5)return!1;var e=Vt,t=Ks;Ks=0;var n=so(nn),a=H.T,l=Q.p;try{Q.p=32>n?32:n,H.T=null,n=Js,Js=null;var i=Vt,u=nn;if(_e=0,wa=Vt=null,nn=0,(de&6)!==0)throw Error(f(331));var s=de;if(de|=4,Fd(i.current),Kd(i,i.current,u,n),de=s,ai(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(El,i)}catch{}return!0}finally{Q.p=l,H.T=a,dh(e,t)}}function hh(e,t,n){t=Ut(n,t),t=vs(e.stateNode,t,2),e=zn(e,t,2),e!==null&&(Al(e,2),an(e))}function ye(e,t,n){if(e.tag===3)hh(e,e,n);else for(;t!==null;){if(t.tag===3){hh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xn===null||!Xn.has(a))){e=Ut(n,e),n=rd(2),a=zn(t,n,2),a!==null&&(cd(n,a,t,e),Al(a,2),an(a));break}}t=t.return}}function nr(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new yp;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Zs=!0,l.add(n),e=Op.bind(null,e,t,n),t.then(e,e))}function Op(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(ee&n)===n&&((De===4||De===3&&(ee&62914560)===ee&&300>pt()-_u)&&(de&2)===0?ol(e,0):Ru|=n,nl===ee&&(nl=0)),an(e)}function mh(e,t){t===0&&(t=Pr()),e=sa(e,t),e!==null&&(Al(e,t),an(e))}function Np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mh(e,n)}function Rp(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(f(314))}a!==null&&a.delete(t),mh(e,n)}function _p(e,t){return lo(e,t)}var rl=null,cl=null,ar=!1,zu=!1,lr=!1,Zn=0;function an(e){e!==cl&&e.next===null&&(cl===null?rl=cl=e:cl=cl.next=e),zu=!0,ar||(ar=!0,jp())}function ai(e,t){if(!lr&&zu){lr=!0;do for(var n=!1,a=rl;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-vt(42|e)+1)-1,i&=l&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,vh(a,i))}else i=ee,i=Ri(a,a===Ee?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Sl(a,i)||(n=!0,vh(a,i));a=a.next}while(n);lr=!1}}function xp(){gh()}function gh(){zu=ar=!1;var e=0;Zn!==0&&qp()&&(e=Zn);for(var t=pt(),n=null,a=rl;a!==null;){var l=a.next,i=ph(a,t);i===0?(a.next=null,n===null?rl=l:n.next=l,l===null&&(cl=n)):(n=a,(e!==0||(i&3)!==0)&&(zu=!0)),a=l}_e!==0&&_e!==5||ai(e),Zn!==0&&(Zn=0)}function ph(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-vt(i),s=1<<u,c=l[u];c===-1?((s&n)===0||(s&a)!==0)&&(l[u]=km(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}if(t=Ee,n=ee,n=Ri(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&io(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Sl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&io(a),so(n)){case 2:case 8:n=Jr;break;case 32:n=Ai;break;case 268435456:n=Wr;break;default:n=Ai}return a=yh.bind(null,e),n=lo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&io(a),e.callbackPriority=2,e.callbackNode=null,2}function yh(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var a=ee;return a=Ri(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(nh(e,a,t),ph(e,pt()),e.callbackNode!=null&&e.callbackNode===n?yh.bind(null,e):null)}function vh(e,t){if(Hu())return null;nh(e,t,!0)}function jp(){Vp(function(){(de&6)!==0?lo(Kr,xp):gh()})}function ir(){if(Zn===0){var e=ma;e===0&&(e=wi,wi<<=1,(wi&261888)===0&&(wi=256)),Zn=e}return Zn}function bh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Di(e)}function Up(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=bh((l[rt]||null).action),u=a.submitter;u&&(t=(t=u[rt]||null)?bh(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new zi("action","action",null,a,l);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Zn!==0){var c=new FormData(l,u);hs(n,{pending:!0,data:c,method:l.method,action:i},null,c)}}else typeof i=="function"&&(s.preventDefault(),c=new FormData(l,u),hs(n,{pending:!0,data:c,method:l.method,action:i},i,c))},currentTarget:l}]})}}for(var ur=0;ur<Uo.length;ur++){var or=Uo[ur],Dp=or.toLowerCase(),Cp=or[0].toUpperCase()+or.slice(1);Bt(Dp,"on"+Cp)}Bt(Xc,"onAnimationEnd"),Bt(Qc,"onAnimationIteration"),Bt(Zc,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Gg,"onTransitionRun"),Bt(Vg,"onTransitionStart"),Bt(Xg,"onTransitionCancel"),Bt(kc,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(li));function Th(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var s=a[u],c=s.instance,y=s.currentTarget;if(s=s.listener,c!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=y;try{i(l)}catch(T){Bi(T)}l.currentTarget=null,i=c}else for(u=0;u<a.length;u++){if(s=a[u],c=s.instance,y=s.currentTarget,s=s.listener,c!==i&&l.isPropagationStopped())break e;i=s,l.currentTarget=y;try{i(l)}catch(T){Bi(T)}l.currentTarget=null,i=c}}}}function $(e,t){var n=t[lc];n===void 0&&(n=t[lc]=new Set);var a=e+"__bubble";n.has(a)||(Eh(t,e,2,!1),n.add(a))}function sr(e,t,n){var a=0;t&&(a|=4),Eh(n,e,a,t)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function rr(e){if(!e[Lu]){e[Lu]=!0,oc.forEach(function(n){n!=="selectionchange"&&(Mp.has(n)||sr(n,!1,e),sr(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lu]||(t[Lu]=!0,sr("selectionchange",!1,t))}}function Eh(e,t,n,a){switch(cm(t)){case 2:var l=Ny;break;case 8:l=Ry;break;default:l=xr}n=l.bind(null,t,n,e),l=void 0,!yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function cr(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===l)break;if(u===4)for(u=a.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;s!==null;){if(u=la(s),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){a=i=u;continue e}s=s.parentNode}}a=a.return}Tc(function(){var y=i,T=go(n),N=[];e:{var g=Kc.get(e);if(g!==void 0){var b=zi,x=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":b=vg;break;case"focusin":x="focus",b=Eo;break;case"focusout":x="blur",b=Eo;break;case"beforeblur":case"afterblur":b=Eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ag;break;case Xc:case Qc:case Zc:b=rg;break;case kc:b=Og;break;case"scroll":case"scrollend":b=lg;break;case"wheel":b=Rg;break;case"copy":case"cut":case"paste":b=fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Oc;break;case"submit":b=Eg;break;case"toggle":case"beforetoggle":b=xg}var C=(t&4)!==0,J=!C&&(e==="scroll"||e==="scrollend"),p=C?g!==null?g+"Capture":null:g;C=[];for(var d=y,v;d!==null;){var O=d;if(v=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||v===null||p===null||(O=Nl(d,p),O!=null&&C.push(ii(d,O,v))),J)break;d=d.return}0<C.length&&(g=new b(g,x,null,n,T),N.push({event:g,listeners:C}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",b&&n!==mo&&(x=n.relatedTarget||n.fromElement)&&(la(x)||x[xa]))break e;(g||b)&&(x=T.window===T?T:(b=T.ownerDocument)?b.defaultView||b.parentWindow:window,g?(b=n.relatedTarget||n.toElement,g=y,b=b?la(b):null,b!==null&&(J=R(b),C=b.tag,b!==J||C!==5&&C!==27&&C!==6)&&(b=null)):(g=null,b=y),g!==b&&(C=Ac,O="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=Oc,O="onPointerLeave",p="onPointerEnter",d="pointer"),J=g==null?x:Ol(g),v=b==null?x:Ol(b),x=new C(O,d+"leave",g,n,T),x.target=J,x.relatedTarget=v,O=null,la(T)===y&&(C=new C(p,d+"enter",b,n,T),C.target=v,C.relatedTarget=J,O=C),J=O,C=g&&b?Ce(g,b,Hp):null,g!==null&&Sh(N,x,g,C,!1),b!==null&&J!==null&&Sh(N,J,b,C,!0)))}e:{if(g=y?Ol(y):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var U=Cc;else if(Uc(g))if(Mc)U=Bg;else{U=Lg;var te=zg}else b=g.nodeName,!b||b.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?y&&ho(y.elementType)&&(U=Cc):U=Yg;if(U&&(U=U(e,y))){Dc(N,U,n,T);break e}te&&te(e,g,y)}switch(te=y?Ol(y):window,e){case"focusin":(Uc(te)||te.contentEditable==="true")&&(Ya=te,_o=y,Ml=null);break;case"focusout":Ml=_o=Ya=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,Gc(N,n,T);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":Gc(N,n,T)}var L;if(Ao)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else La?xc(e,n)&&(G="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(Nc&&n.locale!=="ko"&&(La||G!=="onCompositionStart"?G==="onCompositionEnd"&&La&&(L=Ec()):(Rn=T,vo="value"in Rn?Rn.value:Rn.textContent,La=!0)),te=Yu(y,G),0<te.length&&(G=new wc(G,e,null,n,T),N.push({event:G,listeners:te}),L?G.data=L:(L=jc(n),L!==null&&(G.data=L)))),(L=Ug?Dg(e,n):Cg(e,n))&&(G=Yu(y,"onBeforeInput"),0<G.length&&(te=new wc("onBeforeInput","beforeinput",null,n,T),N.push({event:te,listeners:G}),te.data=L)),Up(N,e,y,n,T)}Th(N,t)})}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yu(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Nl(e,n),l!=null&&a.unshift(ii(e,l,i)),l=Nl(e,t),l!=null&&a.push(ii(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Hp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sh(e,t,n,a,l){for(var i=t._reactName,u=[];n!==null&&n!==a;){var s=n,c=s.alternate,y=s.stateNode;if(s=s.tag,c!==null&&c===a)break;s!==5&&s!==26&&s!==27||y===null||(c=y,l?(y=Nl(n,i),y!=null&&u.unshift(ii(n,y,c))):l||(y=Nl(n,i),y!=null&&u.push(ii(n,y,c)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var zp=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function Ah(e){return(typeof e=="string"?e:""+e).replace(zp,`
`).replace(Lp,"")}function wh(e,t){return t=Ah(t),Ah(e)===t}function ve(e,t,n,a,l,i){switch(n){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||Ma(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&Ma(e,""+a);else return;break;case"className":Ui(e,"class",a);break;case"tabIndex":Ui(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ui(e,n,a);break;case"style":vc(e,a,i);return;case"data":if(t!=="object"){Ui(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Di(a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&ve(e,t,"name",l.name,l,null),ve(e,t,"formEncType",l.formEncType,l,null),ve(e,t,"formMethod",l.formMethod,l,null),ve(e,t,"formTarget",l.formTarget,l,null)):(ve(e,t,"encType",l.encType,l,null),ve(e,t,"method",l.method,l,null),ve(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Di(a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=kt);return;case"onScroll":a!=null&&$("scroll",e);return;case"onScrollEnd":a!=null&&$("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(f(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Di(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":$("beforetoggle",e),$("toggle",e),ji(e,"popover",a);break;case"xlinkActuate":sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":sn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":sn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":sn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":sn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ji(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=ng.get(n)||n,ji(e,n,a);else return}re=!0}function fr(e,t,n,a,l,i){switch(n){case"style":vc(e,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(f(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(f(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof a=="string")Ma(e,a);else if(typeof a=="number"||typeof a=="bigint")Ma(e,""+a);else return;break;case"onScroll":a!=null&&$("scroll",e);return;case"onScrollEnd":a!=null&&$("scrollend",e);return;case"onClick":a!=null&&(e.onclick=kt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!sc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),i=n.slice(2,l?n.length-7:void 0),t=e[rt]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,l),typeof a=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,a,l);break e}re=!0,n in e?e[n]=a:a===!0?e.setAttribute(n,""):ji(e,n,a)}return}re=!0}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ve(e,t,i,u,n,null)}}l&&ve(e,t,"srcSet",n.srcSet,n,null),a&&ve(e,t,"src",n.src,n,null);return;case"input":$("invalid",e);var s=i=u=l=null,c=null,y=null;for(a in n)if(n.hasOwnProperty(a)){var T=n[a];if(T!=null)switch(a){case"name":l=T;break;case"type":u=T;break;case"checked":c=T;break;case"defaultChecked":y=T;break;case"value":i=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(f(137,t));break;default:ve(e,t,a,T,n,null)}}mc(e,i,s,c,y,u,l,!1);return;case"select":$("invalid",e),a=u=i=null;for(l in n)if(n.hasOwnProperty(l)&&(s=n[l],s!=null))switch(l){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:ve(e,t,l,s,n,null)}t=i,n=u,e.multiple=!!a,t!=null?Ca(e,!!a,t,!1):n!=null&&Ca(e,!!a,n,!0);return;case"textarea":$("invalid",e),i=l=a=null;for(u in n)if(n.hasOwnProperty(u)&&(s=n[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":l=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(f(91));break;default:ve(e,t,u,s,n,null)}pc(e,a,l,i);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(a=n[c],a!=null))switch(c){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ve(e,t,c,a,n,null)}return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(a=0;a<li.length;a++)$(li[a],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:ve(e,t,y,a,n,null)}return;default:if(ho(t)){for(T in n)n.hasOwnProperty(T)&&(a=n[T],a!==void 0&&fr(e,t,T,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(a=n[s],a!=null&&ve(e,t,s,a,n,null))}var Yp={};function Bp(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,s=null,c=null,y=null,T=null;for(b in n){var N=n[b];if(n.hasOwnProperty(b)&&N!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":c=N;default:a.hasOwnProperty(b)||ve(e,t,b,null,a,N)}}for(var g in a){var b=a[g];if(N=n[g],a.hasOwnProperty(g)&&(b!=null||N!=null))switch(g){case"type":b!==N&&(re=!0),i=b;break;case"name":b!==N&&(re=!0),l=b;break;case"checked":b!==N&&(re=!0),y=b;break;case"defaultChecked":b!==N&&(re=!0),T=b;break;case"value":b!==N&&(re=!0),u=b;break;case"defaultValue":b!==N&&(re=!0),s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(f(137,t));break;default:b!==N&&ve(e,t,g,b,a,N)}}co(e,u,s,c,y,T,i,l);return;case"select":b=u=s=g=null;for(i in n)if(c=n[i],n.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":b=c;default:a.hasOwnProperty(i)||ve(e,t,i,null,a,c)}for(l in a)if(i=a[l],c=n[l],a.hasOwnProperty(l)&&(i!=null||c!=null))switch(l){case"value":i!==c&&(re=!0),g=i;break;case"defaultValue":i!==c&&(re=!0),s=i;break;case"multiple":i!==c&&(re=!0),u=i;default:i!==c&&ve(e,t,l,i,a,c)}t=s,n=u,a=b,g!=null?Ca(e,!!n,g,!1):!!a!=!!n&&(t!=null?Ca(e,!!n,t,!0):Ca(e,!!n,n?[]:"",!1));return;case"textarea":b=g=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ve(e,t,s,null,a,l)}for(u in a)if(l=a[u],i=n[u],a.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":l!==i&&(re=!0),g=l;break;case"defaultValue":l!==i&&(re=!0),b=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(f(91));break;default:l!==i&&ve(e,t,u,l,a,i)}gc(e,g,b);return;case"option":for(var x in n)if(g=n[x],n.hasOwnProperty(x)&&g!=null&&!a.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:ve(e,t,x,null,a,g)}for(c in a)if(g=a[c],b=n[c],a.hasOwnProperty(c)&&g!==b&&(g!=null||b!=null))switch(c){case"selected":g!==b&&(re=!0),e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:ve(e,t,c,g,a,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in n)g=n[C],n.hasOwnProperty(C)&&g!=null&&!a.hasOwnProperty(C)&&ve(e,t,C,null,a,g);for(y in a)if(g=a[y],b=n[y],a.hasOwnProperty(y)&&g!==b&&(g!=null||b!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,t));break;default:ve(e,t,y,g,a,b)}return;default:if(ho(t)){for(var J in n)g=n[J],n.hasOwnProperty(J)&&g!==void 0&&!a.hasOwnProperty(J)&&fr(e,t,J,void 0,a,g);for(T in a)g=a[T],b=n[T],!a.hasOwnProperty(T)||g===b||g===void 0&&b===void 0||fr(e,t,T,g,a,b);return}}for(var p in n)g=n[p],n.hasOwnProperty(p)&&g!=null&&!a.hasOwnProperty(p)&&ve(e,t,p,null,a,g);for(N in a)g=a[N],b=n[N],!a.hasOwnProperty(N)||g===b||g==null&&b==null||ve(e,t,N,g,a,b)}function Oh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ip(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,u=l.initiatorType,s=l.duration;if(i&&s&&Oh(u)){for(u=0,s=l.responseEnd,a+=1;a<n.length;a++){var c=n[a],y=c.startTime;if(y>s)break;var T=c.transferSize,N=c.initiatorType;T&&Oh(N)&&(c=c.responseEnd,u+=T*(c<s?1:(s-y)/(c-y)))}if(--a,t+=8*(i+u)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dr=null,hr=null;function ui(e){return e.nodeType===9?e:e.ownerDocument}function Nh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _h(e,t,n,a){return n=ui(n).createElement(e),n[Ze]=a,n[rt]=t,Fe(n,e,t),qe(n),n}function mr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gr=null;function qp(){var e=window.event;return e&&e.type==="popstate"?e===gr?!1:(gr=e,!0):(gr=null,!1)}var pr=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,jh=typeof requestAnimationFrame=="function"?requestAnimationFrame:pr,Vp=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(e){return xh.resolve(null).then(e).catch(Xp)}:pr;function Xp(e){setTimeout(function(){throw e})}function kn(e){return e==="head"}function Uh(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),yl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")wr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,wr(n);for(var i=n.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[wl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=u}}else n==="body"&&wr(e.ownerDocument.body);n=l}while(n);yl(t)}function Dh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Ch(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var l=a=0;l<t.length;l++){var i=t[l];0<i.width&&0<i.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Mh(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Qp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function yr(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Qp(t,n,e)}function Zp(e){return e.documentElement.clientHeight}function kp(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Kp(e,t,n,a,l,i,u,s,c){var y=t.nodeType===9?t:t.ownerDocument;try{var T=y.startViewTransition({update:function(){var g=y.defaultView,b=g.navigation&&g.navigation.transition,x=y.fonts.status;a();var C=[];if(x==="loaded"&&(Zp(y),y.fonts.status==="loading"&&C.push(y.fonts.ready)),x=C.length,e!==null)for(var J=e.suspenseyImages,p=0,d=0;d<J.length;d++){var v=J[d];if(!v.complete){var O=v.getBoundingClientRect();if(0<O.bottom&&0<O.right&&O.top<g.innerHeight&&O.left<g.innerWidth){if(p+=tm(v),p>qu){C.length=x;break}v=new Promise(kp.bind(v)),C.push(v)}}}if(0<C.length)return g=Promise.race([Promise.all(C),new Promise(function(U){return setTimeout(U,500)})]).then(l,l),(b?Promise.allSettled([b.finished,g]):g).then(i,i);if(l(),b)return b.finished.then(i,i);i()},types:n});y.__reactViewTransition=T;var N=[];return T.ready.then(function(){for(var g=y.documentElement.getAnimations({subtree:!0}),b=0;b<g.length;b++){var x=g[b],C=x.effect,J=C.pseudoElement;if(J!=null&&J.startsWith("::view-transition")){N.push(x),x=C.getKeyframes();for(var p=J=void 0,d=!0,v=0;v<x.length;v++){var O=x[v],U=O.width;if(J===void 0)J=U;else if(J!==U){d=!1;break}if(U=O.height,p===void 0)p=U;else if(p!==U){d=!1;break}delete O.width,delete O.height,O.transform==="none"&&delete O.transform}d&&J!==void 0&&p!==void 0&&(C.setKeyframes(x),d=getComputedStyle(C.target,C.pseudoElement),d.width!==J||d.height!==p)&&(d=x[0],d.width=J,d.height=p,d=x[x.length-1],d.width=J,d.height=p,C.setKeyframes(x))}}u()},function(g){y.__reactViewTransition===T&&(y.__reactViewTransition=null);try{if(typeof g=="object"&&g!==null)switch(g.name){case"InvalidStateError":(g.message==="View transition was skipped because document visibility state is hidden."||g.message==="Skipping view transition because document visibility state has become hidden."||g.message==="Skipping view transition because viewport size changed."||g.message==="Transition was aborted because of invalid state")&&(g=null)}g!==null&&c(g)}finally{a(),l(),u()}}),T.finished.finally(function(){for(var g=0;g<N.length;g++)N[g].cancel();y.__reactViewTransition===T&&(y.__reactViewTransition=null),s()}),T}catch{return a(),l(),u(),null}}function Oa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Oa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:W({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Oa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),a=[],l=0;l<n.length;l++){var i=n[l].effect;i!==null&&i.target===e&&i.pseudoElement===t&&a.push(n[l])}return a},Oa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Hh(e){return{name:e,group:new Oa("group",e),imagePair:new Oa("image-pair",e),old:new Oa("old",e),new:new Oa("new",e)}}function Nt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Nt.prototype.addEventListener=function(e,t,n){var a=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Lh(i,e,t,n)===-1){var u=this,s=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(s=function(c){u.removeEventListener(e,t,n),typeof t=="function"?t.call(this,c):t.handleEvent(c)}),a!==null&&(l=u.removeEventListener.bind(u,e,t,n),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=fl(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:l}),E(this._fragmentFiber.child,!1,Jp,e,s,a)}this._eventListeners=i}};function Jp(e,t,n,a){return le(e).addEventListener(t,n,a),!1}Nt.prototype.removeEventListener=function(e,t,n){var a=this._eventListeners;if(a!==null&&(t=Lh(a,e,t,n),t!==-1)){var l=a[t];n=l.attachedListener;var i=l.cleanup;l=fl(l.optionsOrUseCapture),E(this._fragmentFiber.child,!1,Wp,e,n,l),a.splice(t,1),i!==null&&i()}};function Wp(e,t,n,a){return le(e).removeEventListener(t,n,a),!1}function fl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zh(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Lh(e,t,n,a){if(e.length===0)return-1;a=zh(a);for(var l=0;l<e.length;l++){var i=e[l];if(i.type===t&&i.listener===n&&zh(i.optionsOrUseCapture)===a)return l}return-1}Nt.prototype.dispatchEvent=function(e){var t=M(this._fragmentFiber);if(t===null)return!0;t=le(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var i=n[l];a.addEventListener(i.type,i.attachedListener,fl(i.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),n)for(l=0;l<n.length;l++)i=n[l],a.removeEventListener(i.type,i.attachedListener,fl(i.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)},Nt.prototype.focus=function(e){E(this._fragmentFiber.child,!0,Yh,e,void 0,void 0)};function Yh(e,t){return e.tag===6?!1:(e=le(e),sy(e,t))}Nt.prototype.focusLast=function(e){var t=[];E(this._fragmentFiber.child,!0,vr,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Yh(t[n],e);n--);};function vr(e,t){return t.push(e),!1}Nt.prototype.blur=function(){var e=M(this._fragmentFiber);e!==null&&(e=le(e),e=ui(e).activeElement,e!==null&&E(this._fragmentFiber.child,!1,Fp,e,void 0,void 0))};function Fp(e,t){return e.tag===6?!1:(e=le(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Nt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),E(this._fragmentFiber.child,!1,Pp,e,void 0,void 0)};function Pp(e,t){return e.tag===6||(e=le(e),t.observe(e)),!1}Nt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),E(this._fragmentFiber.child,!1,$p,e,void 0,void 0);for(var n=t=0;n<Xt.length;n++){var a=Xt[n];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):Xt[t++]=a}Xt.length=t}};function $p(e,t){return e.tag===6||(e=le(e),t.unobserve(e)),!1}var Xt=[],br=!1;function ey(e,t,n){Xt.push({fragmentInstance:e,observer:t,instance:n}),br||(br=!0,ry(function(){br=!1;var a=Xt;Xt=[];for(var l=0;l<a.length;l++){var i=a[l];i.observer.unobserve(i.instance)}}))}Nt.prototype.getClientRects=function(){var e=[];return E(this._fragmentFiber.child,!1,ty,e,void 0,void 0),e};function ty(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=le(e),t.push.apply(t,e.getClientRects());return!1}Nt.prototype.getRootNode=function(e){var t=M(this._fragmentFiber);return t===null?this:le(t).getRootNode(e)},Nt.prototype.compareDocumentPosition=function(e){var t=M(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];E(this._fragmentFiber.child,!1,vr,n,void 0,void 0);var a=le(t);if(n.length===0){if(n=a,Se(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var l=a=n.compareDocumentPosition(e);return n===e?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ce(t)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=le(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=le(n[0]),l=le(n[n.length-1]);var i=Se(this._fragmentFiber)?t.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=t.compareDocumentPosition(e),s=l.compareDocumentPosition(e),c=u&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=a&&i&&u&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||i&&l===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!i&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ny(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ny(e,t,n,a,l){var i=la(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;e:{for(i=t,t=M(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=Ce(n,i,tt),t===null?t=!1:(E(t,!0,$e,i,n),i=je,je=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===a)&&(t=Ce(a,i,tt),t===null?t=!1:(E(t,!0,Ne,i,a),i=je,k=je=null,t=i!==null)),t):!1}function Bh(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Nt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(f(566));var t=[];E(this._fragmentFiber.child,!1,vr,t,void 0,void 0);var n=e!==!1;if(t.length===0){var a=ce(this._fragmentFiber);if(a=n?a[1]||a[0]||M(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=le(a),Bh(e,n);return}if(a=le(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=n?t.length-1:0;a!==(n?-1:t.length);){var l=t[a];l.tag===6?(l=le(l),Bh(l,n)):le(l).scrollIntoView(e),a+=n?-1:1}};function ay(e,t){return e=le(e),Ih(e,t),!1}function Ih(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function qh(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.addEventListener(l.type,l.attachedListener,fl(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var u=0,s=0;s<Xt.length;s++){var c=Xt[s];(c.fragmentInstance!==t||c.observer!==i||c.instance!==e)&&(Xt[u++]=c)}Xt.length=u,i.observe(e)}),Ih(e,t))}function ly(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.removeEventListener(l.type,l.attachedListener,fl(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?ey(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Tr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Tr(n),xi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function iy(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function uy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=zt(e.nextSibling),e===null))return null;return e}function Gh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Er(e){return e.data==="$?"||e.data==="$~"}function Sr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function oy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ar=null;function Vh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Xh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function sy(e,t){function n(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return a}function ry(e){jh(function(){jh(function(t){return e(t)})})}function Qh(e,t,n){switch(t=ui(n),e){case"html":if(e=t.documentElement,!e)throw Error(f(452));return e;case"head":if(e=t.head,!e)throw Error(f(453));return e;case"body":if(e=t.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function Zh(e,t,n){for(var a in n){var l=n[a];n.hasOwnProperty(a)&&l!=null&&ve(e,t,a,null,Yp,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===kt&&(e.onclick=null),xi(e)}function wr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xi(e)}var Lt=new Map,kh=new Set;function oi(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var En=Q.d;Q.d={f:cy,r:fy,D:dy,C:hy,L:my,m:gy,X:yy,S:py,M:vy};function cy(){var e=En.f(),t=Du();return e||t}function fy(e){var t=ja(e);t!==null&&t.tag===5&&t.type==="form"?Jf(t):En.r(e)}var dl=typeof document>"u"?null:document;function Kh(e,t,n){var a=dl;if(a&&typeof t=="string"&&t){var l=xt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),kh.has(l)||(kh.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Fe(t,"link",e),qe(t),a.head.appendChild(t)))}}function dy(e){En.D(e),Kh("dns-prefetch",e,null)}function hy(e,t){En.C(e,t),Kh("preconnect",e,t)}function my(e,t,n){En.L(e,t,n);var a=dl;if(a&&e&&t){var l='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+xt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+xt(n.imageSizes)+'"]')):l+='[href="'+xt(e)+'"]';var i=l;switch(t){case"style":i=hl(e);break;case"script":i=ml(e)}if(!(Lt.has(i)||(e=W({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(si(i))||t==="script"&&a.querySelector(ri(i))))){var u=a.createElement("link");Fe(u,"link",e),t==="style"&&(u[_i]=!0,u.onload=u.onerror=function(){uc(u)}),qe(u),a.head.appendChild(u)}}}function gy(e,t){En.m(e,t);var n=dl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+xt(a)+'"][href="'+xt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ml(e)}if(!Lt.has(i)&&(e=W({rel:"modulepreload",href:e},t),Lt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ri(i)))return}a=n.createElement("link"),Fe(a,"link",e),qe(a),n.head.appendChild(a)}}}function py(e,t,n){En.S(e,t,n);var a=dl;if(a&&e){var l=Ua(a).hoistableStyles,i=hl(e);t=t||"default";var u=l.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(si(i)))s.loading=5;else{e=W({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(i))&&Or(e,n);var c=u=a.createElement("link");qe(c),Fe(c,"link",e),c._p=new Promise(function(y,T){c.onload=y,c.onerror=T}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Bu(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:s},l.set(i,u)}}}function yy(e,t){En.X(e,t);var n=dl;if(n&&e){var a=Ua(n).hoistableScripts,l=ml(e),i=a.get(l);i||(i=n.querySelector(ri(l)),i||(e=W({src:e,async:!0},t),(t=Lt.get(l))&&Nr(e,t),i=n.createElement("script"),qe(i),Fe(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function vy(e,t){En.M(e,t);var n=dl;if(n&&e){var a=Ua(n).hoistableScripts,l=ml(e),i=a.get(l);i||(i=n.querySelector(ri(l)),i||(e=W({src:e,async:!0,type:"module"},t),(t=Lt.get(l))&&Nr(e,t),i=n.createElement("script"),qe(i),Fe(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Jh(e,t,n,a){var l=(l=wn.current)?oi(l):null;if(!l)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=hl(n.href),t=Ua(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=hl(n.href);var i=Ua(l).hoistableStyles,u=i.get(e);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=l.querySelector(si(e)))?i._p||(u.instance=i,u.state.loading=5):(i=Lt.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,i)),by(l,e,i,u.state))),t&&a===null)throw Error(f(528,""));return u}if(t&&a!==null)throw Error(f(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=ml(n),t=Ua(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function hl(e){return'href="'+xt(e)+'"'}function si(e){return'link[rel="stylesheet"]['+e+"]"}function Wh(e){return W({},e,{"data-precedence":e.precedence,precedence:null})}function by(e,t,n,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[_i]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[_i]=!0,t.onload=t.onerror=uc.bind(null,t),Fe(t,"link",n),qe(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function ml(e){return'[src="'+xt(e)+'"]'}function ri(e){return"script[async]"+e}function Fh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+xt(n.href)+'"]');if(a)return t.instance=a,qe(a),a;var l=W({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),qe(a),Fe(a,"style",l),Bu(a,n.precedence,e),t.instance=a;case"stylesheet":l=hl(n.href);var i=e.querySelector(si(l));if(i)return t.state.loading|=4,t.instance=i,qe(i),i;a=Wh(n),(l=Lt.get(l))&&Or(a,l),i=(e.ownerDocument||e).createElement("link"),qe(i);var u=i;return u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Fe(i,"link",a),t.state.loading|=4,Bu(i,n.precedence,e),t.instance=i;case"script":return i=ml(n.src),(l=e.querySelector(ri(i)))?(t.instance=l,qe(l),l):(a=n,(l=Lt.get(i))&&(a=W({},n),Nr(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),qe(l),Fe(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Bu(a,n.precedence,e));return t.instance}function Bu(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===t)i=s;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Nr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Iu=null;function Ph(e,t,n){if(Iu===null){var a=new Map,l=Iu=new Map;l.set(n,a)}else l=Iu,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[wl]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function Rr(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ty(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $h(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function em(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function nm(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=tm(t),e.suspenseyImages.push(t)),e=Ay.bind(e),t.decode().then(e,e))}function Ey(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=hl(a.href),i=t.querySelector(si(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ci.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,qe(i);return}i=t.ownerDocument||t,a=Wh(a),(l=Lt.get(l))&&Or(a,l),i=i.createElement("link"),qe(i);var u=i;u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Fe(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ci.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var qu=0;function Sy(e,t){return e.stylesheets&&e.count===0&&Vu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&qu===0&&(qu=62500*Ip());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>qu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function am(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Vu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ci(){this.count--,am(this)}function Ay(){this.imgCount--,am(this)}var Gu=null;function Vu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gu=new Map,t.forEach(wy,e),Gu=null,ci.call(e))}function wy(e,t){if(!(t.state.loading&4)){var n=Gu.get(e);if(n)var a=n.get(null);else{n=new Map,Gu.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),a=u)}a&&n.set(null,a)}l=t.instance,u=l.getAttribute("data-precedence"),i=n.get(u)||a,i===a&&n.set(null,l),n.set(u,l),this.count++,a=ci.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var gl={$$typeof:Ie,Provider:null,Consumer:null,_currentValue:un,_currentValue2:un,_threadCount:0};function Oy(e,t,n,a,l,i,u,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uo(0),this.hiddenUpdates=uo(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lm(e,t,n,a,l,i,u,s,c,y,T,N){return e=new Oy(e,t,n,u,c,y,T,N,s),t=1,i===!0&&(t|=24),i=ct(3,null,null,t),e.current=i,i.stateNode=e,t=Go(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Zo(i),e}function im(e){return e?(e=qa,e):qa}function um(e,t,n,a,l,i){l=im(l),a.context===null?a.context=l:a.pendingContext=l,a=Hn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=zn(e,a,t),n!==null&&(mt(n,e,t),ql(n,e,t))}function om(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _r(e,t){om(e,t),(e=e.alternate)&&om(e,t)}function sm(e){if(e.tag===13||e.tag===31){var t=sa(e,67108864);t!==null&&mt(t,e,67108864),_r(e,67108864)}}function rm(e){if(e.tag===13||e.tag===31){var t=Ot();t=oo(t);var n=sa(e,t);n!==null&&mt(n,e,t),_r(e,t)}}var pl=!0;function Ny(e,t,n,a){var l=H.T;H.T=null;var i=Q.p;try{Q.p=2,xr(e,t,n,a)}finally{Q.p=i,H.T=l}}function Ry(e,t,n,a){var l=H.T;H.T=null;var i=Q.p;try{Q.p=8,xr(e,t,n,a)}finally{Q.p=i,H.T=l}}function xr(e,t,n,a){if(pl){var l=jr(a);if(l===null)cr(e,t,a,Xu,n),fm(e,a);else if(xy(l,e,t,n,a))a.stopPropagation();else if(fm(e,a),t&4&&-1<_y.indexOf(e)){for(;l!==null;){var i=ja(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=aa(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var c=1<<31-vt(u);s.entanglements[1]|=c,u&=~c}an(i),(de&6)===0&&(xu=pt()+500,ai(0))}}break;case 31:case 13:s=sa(i,2),s!==null&&mt(s,i,2),Du(),_r(i,2)}if(i=jr(a),i===null&&cr(e,t,a,Xu,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else cr(e,t,a,null,n)}}function jr(e){return e=go(e),Ur(e)}var Xu=null;function Ur(e){if(Xu=null,e=la(e),e!==null){var t=R(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=q(t),e!==null)return e;e=null}else if(n===31){if(e=I(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xu=e,null}function cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Im()){case Kr:return 2;case Jr:return 8;case Ai:case qm:return 32;case Wr:return 268435456;default:return 32}default:return 32}}var Dr=!1,Kn=null,Jn=null,Wn=null,fi=new Map,di=new Map,Fn=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fm(e,t){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function hi(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ja(t),t!==null&&sm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function xy(e,t,n,a,l){switch(t){case"focusin":return Kn=hi(Kn,e,t,n,a,l),!0;case"dragenter":return Jn=hi(Jn,e,t,n,a,l),!0;case"mouseover":return Wn=hi(Wn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return fi.set(i,hi(fi.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,di.set(i,hi(di.get(i)||null,e,t,n,a,l)),!0}return!1}function dm(e){var t=la(e.target);if(t!==null){var n=R(t);if(n!==null){if(t=n.tag,t===13){if(t=q(n),t!==null){e.blockedOn=t,ac(e.priority,function(){rm(n)});return}}else if(t===31){if(t=I(n),t!==null){e.blockedOn=t,ac(e.priority,function(){rm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jr(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);mo=a,n.target.dispatchEvent(a),mo=null}else return t=ja(n),t!==null&&sm(t),e.blockedOn=n,!1;t.shift()}return!0}function hm(e,t,n){Qu(e)&&n.delete(t)}function jy(){Dr=!1,Kn!==null&&Qu(Kn)&&(Kn=null),Jn!==null&&Qu(Jn)&&(Jn=null),Wn!==null&&Qu(Wn)&&(Wn=null),fi.forEach(hm),di.forEach(hm)}function Zu(e,t){e.blockedOn===t&&(e.blockedOn=null,Dr||(Dr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jy)))}var ku=null;function mm(e){ku!==e&&(ku=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ku===e&&(ku=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Ur(a||n)===null)continue;break}var i=ja(n);i!==null&&(e.splice(t,3),t-=3,hs(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function yl(e){function t(c){return Zu(c,e)}Kn!==null&&Zu(Kn,e),Jn!==null&&Zu(Jn,e),Wn!==null&&Zu(Wn,e),fi.forEach(t),di.forEach(t);for(var n=0;n<Fn.length;n++){var a=Fn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)dm(n),n.blockedOn===null&&Fn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],u=l[rt]||null;if(typeof i=="function")u||mm(n);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[rt]||null)s=u.formAction;else if(Ur(l)!==null)continue}else s=u.action;typeof s=="function"?n[a+1]=s:(n.splice(a,3),a-=3),mm(n)}}}function gm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return l=u})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Cr(e){this._internalRoot=e}Ku.prototype.render=Cr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(f(409));var n=t.current,a=Ot();um(n,a,e,t,null,null)},Ku.prototype.unmount=Cr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;um(e.current,2,null,e,null,null),Du(),t[xa]=null}};function Ku(e){this._internalRoot=e}Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&dm(e)}};var pm=m.version;if(pm!=="19.3.0")throw Error(f(527,pm,"19.3.0"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=z(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Uy={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ju.isDisabled&&Ju.supportsFiber)try{El=Ju.inject(Uy),yt=Ju}catch{}}return gi.createRoot=function(e,t){if(!w(e))throw Error(f(299));var n=!1,a="",l=id,i=ud,u=od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=lm(e,1,!1,null,null,n,a,null,l,i,u,gm),e[xa]=t.current,rr(e),new Cr(t)},gi.hydrateRoot=function(e,t,n){if(!w(e))throw Error(f(299));var a=!1,l="",i=id,u=ud,s=od,c=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=lm(e,1,!0,t,n??null,a,l,c,i,u,s,gm),t.context=im(null),n=t.current,a=Ot(),a=oo(a),l=Hn(a),l.callback=null,zn(n,l,a),n=a,t.current.lanes=n,Al(t,n),an(t),e[xa]=t.current,rr(e),new Ku(t)},gi.version="19.3.0",gi}var Nm;function qy(){if(Nm)return zr.exports;Nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),zr.exports=Iy(),zr.exports}var Gy=qy();const ut={futureWorld:new URL(""+new URL("result-future-world-v4-C_B3ZATV.png",import.meta.url).href,import.meta.url).href,transitionWorld:new URL(""+new URL("welcome-name-bg-C2irimY2.png",import.meta.url).href,import.meta.url).href,questionWorld:new URL(""+new URL("world-master-q1-q3-Bve8q5cj.png",import.meta.url).href,import.meta.url).href,exploreWorld:new URL(""+new URL("result-world-explore-blue-v1-BWZLZMLk.png",import.meta.url).href,import.meta.url).href,buildWorld:new URL(""+new URL("result-world-build-green-crystal-ai-flag-v4-BC7a7lbc.png",import.meta.url).href,import.meta.url).href,leadWorld:new URL(""+new URL("result-world-lead-red-v1-NPwXAMqK.png",import.meta.url).href,import.meta.url).href,transitionGateway:new URL(""+new URL("journey-transition-01-gateway-DNDBG-fX.png",import.meta.url).href,import.meta.url).href,transitionBridge:new URL(""+new URL("journey-transition-02-crossing-bridge-CbUvHgLI.png",import.meta.url).href,import.meta.url).href,transitionIslands:new URL(""+new URL("journey-transition-03-approaching-islands-B44OBb2p.png",import.meta.url).href,import.meta.url).href},Sn={explorer:new URL(""+new URL("result-hero-explorer-male-wQjI7tST.png",import.meta.url).href,import.meta.url).href,builder:new URL(""+new URL("result-hero-builder-female-B0q9cCJl.png",import.meta.url).href,import.meta.url).href,leader:new URL(""+new URL("result-hero-leader-male-C7rt8HaK.png",import.meta.url).href,import.meta.url).href,navigator:new URL(""+new URL("result-hero-navigator-male-CHaqvyki.png",import.meta.url).href,import.meta.url).href,pathfinder:new URL(""+new URL("result-hero-pathfinder-female-B677tJpB.png",import.meta.url).href,import.meta.url).href,tactician:new URL(""+new URL("result-hero-tactician-male-BKZ7ODK-.png",import.meta.url).href,import.meta.url).href,captain:new URL(""+new URL("result-hero-captain-female-OKHQJ_9G.png",import.meta.url).href,import.meta.url).href,pioneer:new URL(""+new URL("result-hero-pioneer-male-R3cspVjR.png",import.meta.url).href,import.meta.url).href,strategos:new URL(""+new URL("result-hero-strategos-female-C4OOJDhq.png",import.meta.url).href,import.meta.url).href},bi=[{id:"captain",name:"Captain",family:"explore",familyLabel:"Explore",tier:3,scope:"Strategic ownership",shortMeaning:"Direction and alignment across projects.",whatItMeans:"Lead people to discover an important strategic frontier and commit to a portfolio of Impact Projects.",proof:"Proof includes 10+ people and at least US$1 million in committed portfolio value.",image:Sn.captain,avatarPosition:"52% center",realmImage:ut.transitionIslands,realmPosition:"14% center",accent:"#2558a6",comingLater:!0},{id:"pioneer",name:"Pioneer",family:"build",familyLabel:"Build",tier:3,scope:"Strategic ownership",shortMeaning:"Shared capabilities, dependencies, connections and enabling systems.",whatItMeans:"Lead people to build and validate a portfolio of pioneering solutions for a strategic priority.",proof:"Proof includes 10+ people and at least US$1 million in validated portfolio value.",image:Sn.pioneer,avatarPosition:"50% center",realmImage:ut.transitionIslands,realmPosition:"50% center",accent:"#2b7557",comingLater:!0},{id:"strategos",name:"Strategos",family:"lead",familyLabel:"Lead",tier:3,scope:"Strategic ownership",shortMeaning:"Combined adoption, performance and strategic impact.",whatItMeans:"Lead people to deploy solutions against a key strategic priority and achieve independently confirmed impact.",proof:"Proof includes 10+ people and at least US$1 million in confirmed impact.",image:Sn.strategos,avatarPosition:"54% center",realmImage:ut.transitionIslands,realmPosition:"88% center",accent:"#bf4d3c",comingLater:!0},{id:"navigator",name:"Navigator",family:"explore",familyLabel:"Explore",tier:2,scope:"Develop another owner",shortMeaning:"Help another person sharpen what may be worth pursuing without taking the question away from them.",whatItMeans:"Improve another person’s ability to frame, test, challenge and judge their own possibilities while ownership stays with them.",proof:"Proof looks like stronger approved proposals that remain owned by the people you enabled.",image:Sn.navigator,avatarPosition:"48% center",realmImage:ut.transitionBridge,realmPosition:"14% center",accent:"#2558a6",href:"https://enchanting-bunny-07fee5.netlify.app/roles/navigator"},{id:"pathfinder",name:"Pathfinder",family:"build",familyLabel:"Build",tier:2,scope:"Develop another owner",shortMeaning:"Help someone grow as a builder through a build that stays theirs.",whatItMeans:"A working build is only half the evidence. The other half is whether the person who built it became more capable along the way.",proof:"Proof looks like validated prototypes and stronger builders who can explain, adapt and repeat the work.",image:Sn.pathfinder,avatarPosition:"53% center",realmImage:ut.transitionBridge,realmPosition:"50% center",accent:"#2b7557",href:"https://enchanting-bunny-07fee5.netlify.app/roles/pathfinder"},{id:"tactician",name:"Tactician",family:"lead",familyLabel:"Lead",tier:2,scope:"Develop another owner",shortMeaning:"Help someone else bring their work to people and get better at it each time.",whatItMeans:"Help another owner bring people with them in their own voice, without carrying the adoption challenge for them.",proof:"Proof looks like adoption and confirmed benefit led by the people you enabled.",image:Sn.tactician,avatarPosition:"50% center",realmImage:ut.transitionBridge,realmPosition:"88% center",accent:"#bf4d3c",href:"https://enchanting-bunny-07fee5.netlify.app/roles/tactician"},{id:"explorer",name:"Explorer",family:"explore",familyLabel:"Explore",tier:1,scope:"Own the work directly",shortMeaning:"Discover what may be worth pursuing while the direction is still unresolved.",whatItMeans:"Stay with an important unresolved question long enough to discover a possibility that is clear, meaningful and grounded enough to take further.",proof:"Proof looks like a painful problem, a credible value case and an approved direction.",image:Sn.explorer,avatarPosition:"54% center",realmImage:ut.exploreWorld,realmPosition:"24% center",accent:"#2558a6",href:"https://enchanting-bunny-07fee5.netlify.app/roles/explorer"},{id:"builder",name:"Builder",family:"build",familyLabel:"Build",tier:1,scope:"Own the work directly",shortMeaning:"Turn a chosen possibility into something that works in reality.",whatItMeans:"Close the lived gap between intention and functioning reality by making, testing, diagnosing, connecting and improving the build.",proof:"Proof looks like a prototype tested against reality with evidence of meaningful value.",image:Sn.builder,avatarPosition:"50% center",realmImage:ut.buildWorld,realmPosition:"35% center",accent:"#2b7557",href:"https://enchanting-bunny-07fee5.netlify.app/roles/builder"},{id:"leader",name:"Leader",family:"lead",familyLabel:"Lead",tier:1,scope:"Own the work directly",shortMeaning:"Bring what works into people’s lives.",whatItMeans:"Help value cross the distance between a functioning solution and the people it is meant to serve through understanding, use and practical benefit.",proof:"Proof looks like deployment, real adoption and independently confirmed impact.",image:Sn.leader,avatarPosition:"52% center",realmImage:ut.leadWorld,realmPosition:"78% center",accent:"#bf4d3c",href:"https://enchanting-bunny-07fee5.netlify.app/roles/leader"}],vl=Object.fromEntries(bi.map(r=>[r.id,r])),Vr=[{number:1,text:"Did you undertake an Impact Project beyond business as usual, using AI or another emerging technology to solve a painful problem and create measurable value?",title:"Did you create an Impact Project?",criteria:["Beyond business as usual","Used AI or another emerging technology","Solved a meaningful professional problem","Created measurable value"]},{number:2,role:"explorer",text:"Did you identify a painful problem, propose an exciting solution worth at least US$10,000, and get it approved within 1 month?",title:"Did you get your Impact Project approved?",criteria:["You identified a painful problem","You proposed an AI or emerging technology solution","The opportunity was worth at least US$10,000","You got approval within 1 month"]},{number:3,role:"builder",text:"Did you build a powerful prototype and validate with evidence that it could create at least US$10,000 in value within 2 months?",title:"Did you build and validate the solution?",criteria:["You built a working prototype","You tested it with real evidence","It could create at least US$10,000 in value","You validated it within 2 months"]},{number:4,role:"leader",text:"Did you deploy the validated solution, drive adoption, and achieve at least US$10,000 in confirmed impact within 3 months?",title:"Did you deploy the solution and create real impact?",criteria:["You deployed the validated solution","You achieved real use and adoption","It created at least US$10,000 in confirmed impact","You achieved this within 3 months"]},{number:5,role:"navigator",text:"Did you enable up to 5 people to get Impact Project proposals approved with at least US$100,000 in combined proposed value?",title:"Did you help others get their Impact Projects approved?",criteria:["You enabled up to 5 people","They developed and owned their own proposals","Their proposals were approved","Combined value was at least US$100,000"]},{number:6,role:"pathfinder",text:"Did you enable up to 5 people to build and validate prototypes with at least US$100,000 in combined value?",title:"Did you help others build and validate their solutions?",criteria:["You enabled up to 5 people","They built and owned their own prototypes","Their solutions were tested and validated","Combined value was at least US$100,000"]},{number:7,role:"tactician",text:"Did you enable up to 5 people to lead their solutions into adoption and achieve at least US$100,000 in combined confirmed impact?",title:"Did you help others deploy their solutions and create impact?",criteria:["You enabled up to 5 people","They led deployment of their own solutions","They achieved real use and adoption","Combined confirmed impact was at least US$100,000"]},{number:8,role:"captain",text:"Did you lead 10+ people to discover an important strategic frontier and commit to Impact Projects worth at least US$1 million?",title:"Did you lead 10+ people to discover a strategic frontier?",criteria:["The frontier addressed an important strategic opportunity","10+ people explored and owned different opportunities","The work led to committed Impact Projects","Combined value was at least US$1 million"]},{number:9,role:"pioneer",text:"Did you lead 10+ people to build and validate a portfolio of pioneering solutions addressing a strategic priority worth at least US$1 million?",title:"Did you lead 10+ people to build and validate a portfolio of solutions?",criteria:["The portfolio addressed a strategic priority","Multiple solutions were built and validated","The work was coordinated across multiple owners","Combined value was at least US$1 million"]},{number:10,role:"strategos",text:"Did you lead 10+ people to deploy solutions against a key strategic priority and achieve at least US$1 million in independently confirmed impact?",title:"Did you lead 10+ people to deploy solutions and create strategic impact?",criteria:["The solutions addressed a key strategic priority","Multiple solutions were deployed","Adoption and real organisational change occurred","Independently confirmed impact was at least US$1 million"]}],Vy=[{label:"Yes, within the last 12 months",score:3},{label:"Yes, 13 to 24 months ago",score:2},{label:"Yes, 25 to 36 months ago",score:1},{label:"No, not within the last 36 months",score:0}];function Na(r){return r===3?"Recently demonstrated":r===2?"Demonstrated 13 to 24 months ago":r===1?"Demonstrated 25 to 36 months ago":"Not yet demonstrated"}const An=["explorer","builder","leader","navigator","pathfinder","tactician","captain","pioneer","strategos"];function Xy(r){return Object.fromEntries(An.map(m=>{const A=Number.isFinite(r[m])?r[m]:0;return[m,Math.max(0,Math.min(3,Math.round(A)))]}))}function Qy(r,m){return r&&(m==null?void 0:m.sent)===!0}function Zy(r){return`Leadapreneur-Future-Proofing-Result-${r.trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"")||"Participant"}.pdf`}function xm({participantName:r,completionDate:m,scores:A,resultUrl:f}){const w=Xy(A),R=An.reduce((S,E)=>S+w[E],0),q=Math.max(...An.map(S=>w[S])),I=q>0?An.filter(S=>w[S]===q).map(S=>vl[S]):[],D=An.filter(S=>w[S]<3).map(S=>vl[S]),z=I.length?I:D.slice(0,1);return{participantName:r.trim()||"Participant",completionDate:m,scores:w,total:R,strongest:I,focusRoles:z,focusLabel:I.length?"YOUR STRONGEST EVIDENCE":"YOUR NEXT ROLE TO BUILD",focusState:I.length?Na(q):Na(z[0]?w[z[0].id]:0),nextChallenges:D,resultUrl:f,pdfFilename:Zy(r)}}function ky(r,m,A){return{email:r,participantName:m.participantName,completionDate:m.completionDate,resultPayload:A,resultUrl:m.resultUrl,pdfFilename:m.pdfFilename,scores:m.scores,total:m.total,strongestRoleIds:m.strongest.map(f=>f.id),nextChallengeRoleIds:m.nextChallenges.map(f=>f.id)}}function Ky(r){return r.focusRoles.length===An.length?"All nine roles":r.focusRoles.map(m=>m.name).join(" + ")}const Jy="60173397455",Wy=["Hi Leadapreneur Team, I've completed the Leadapreneur Future-Proofing Check and I'd like to start future-proofing myself.","Are there any programmes I can join personally, or programmes that could also support my team or organisation?","I'd love to learn more about the options available."].join(`

`),jm=`https://wa.me/${Jy}?text=${encodeURIComponent(Wy)}`,pi="#009FB8",yi={margin:"0 0 16px",fontSize:16,lineHeight:1.7},Fy={fontSize:11,fontWeight:700,letterSpacing:"1.5px",color:pi};function Wu({children:r}){return o.jsx("p",{style:yi,children:r})}function Py({model:r}){return o.jsxs("article",{className:"result-email","aria-label":"Future-Proofing result email",style:{maxWidth:680,margin:"0 auto",border:"1px solid #e8e3db",borderRadius:12,overflow:"hidden",backgroundColor:"#ffffff",fontFamily:"Arial, sans-serif",color:"#26322f"},children:[o.jsx("style",{children:"@media only screen and (max-width: 480px){.fp-email-body{padding:30px 20px!important}.fp-email-header{padding:20px!important}.fp-email-title{font-size:30px!important}.fp-email-button{display:block!important;text-align:center!important}}"}),o.jsx("table",{role:"presentation",width:"100%",cellPadding:"0",cellSpacing:"0",style:{borderCollapse:"collapse"},children:o.jsxs("tbody",{children:[o.jsx("tr",{children:o.jsx("td",{className:"fp-email-header",style:{padding:"24px 28px",backgroundColor:"#faf8f3",borderBottom:"1px solid #e8e3db"},children:o.jsx("table",{role:"presentation",width:"100%",cellPadding:"0",cellSpacing:"0",children:o.jsx("tbody",{children:o.jsxs("tr",{children:[o.jsxs("td",{children:[o.jsx("strong",{style:{display:"block",fontSize:15,letterSpacing:3},children:"LEADAPRENEUR"}),o.jsx("span",{style:{fontSize:11,letterSpacing:2},children:"FUTURE-PROOFING CHECK"})]}),o.jsx("td",{align:"right",children:o.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:1,color:pi,border:"1px solid #b8e7ed",borderRadius:20,padding:"8px 10px",whiteSpace:"nowrap"},children:"PDF ATTACHED"})})]})})})})}),o.jsx("tr",{children:o.jsxs("td",{className:"fp-email-body",style:{padding:"36px 48px 42px"},children:[o.jsxs(Wu,{children:["Hi ",r.participantName,","]}),o.jsx(Wu,{children:"Your Future-Proofing result is ready."}),o.jsxs("div",{style:{margin:"26px 0",padding:24,borderLeft:`4px solid ${pi}`,borderRadius:"0 10px 10px 0",backgroundColor:"#f3f7f5"},children:[o.jsx("span",{style:Fy,children:r.focusLabel}),o.jsx("h2",{className:"fp-email-title",style:{margin:"14px 0 6px",fontSize:40,letterSpacing:"-1.5px",color:"#172521"},children:Ky(r)}),o.jsx("p",{style:{margin:"0 0 14px",fontSize:12,fontWeight:700,textTransform:"uppercase",color:"#4f5c57"},children:r.focusState}),r.focusRoles.length>3?o.jsxs("p",{style:{...yi,margin:0},children:["Recent evidence is tied across ",r.focusRoles.length===9?"the full nine-role system":`${r.focusRoles.length} roles`,"."]}):r.focusRoles.map(m=>o.jsx("p",{style:{...yi,margin:"10px 0 0"},children:m.shortMeaning},m.id))]}),o.jsx(Wu,{children:"Your result reflects what you have demonstrated in your professional work over the last 36 months, and how recently that evidence was created."}),o.jsx(Wu,{children:"Your full Future-Proofing report is attached as a PDF."}),o.jsx("a",{className:"fp-email-button",href:r.resultUrl,target:"_blank",rel:"noreferrer",style:{display:"inline-block",padding:"18px 22px",borderRadius:8,backgroundColor:pi,color:"#ffffff",textDecoration:"none",fontSize:12,fontWeight:700},children:"VIEW MY INTERACTIVE RESULT"}),o.jsxs("div",{style:{marginTop:30,paddingTop:26,borderTop:"1px solid #e2ddd4"},children:[o.jsx("p",{style:{...yi,fontWeight:700},children:"Ready to keep building your Future-Proofing evidence?"}),o.jsx("a",{href:jm,target:"_blank",rel:"noreferrer",style:{color:pi,fontSize:12,fontWeight:700,textDecoration:"underline"},children:"START MY FUTURE-PROOFING JOURNEY"})]}),o.jsx("p",{style:{...yi,margin:"28px 0 0",fontWeight:700},children:"Leadapreneur Team"})]})}),o.jsx("tr",{children:o.jsxs("td",{style:{padding:"18px 28px",backgroundColor:"#faf8f3",borderTop:"1px solid #e8e3db",fontSize:12,lineHeight:1.7,color:"#56625e",overflowWrap:"anywhere"},children:[o.jsx("strong",{children:"Attachment"}),o.jsx("br",{}),r.pdfFilename]})})]})})]})}const $y=""+new URL("ada-lovelace-DkorRdN6.jpg",import.meta.url).href,ev=""+new URL("alan-mulally-CXjPHGVS.jpg",import.meta.url).href,tv=""+new URL("alexander-fleming-cwHui7y2.jpg",import.meta.url).href,nv=""+new URL("astro-teller-CNDYmlRQ.jpg",import.meta.url).href,av=""+new URL("brac-oral-therapy-programme-CXAh-PZd.jpg",import.meta.url).href,lv=""+new URL("charles-darwin-wJ5UyOjX.jpg",import.meta.url).href,iv=""+new URL("clearness-committee-CE0v1-kT.jpg",import.meta.url).href,uv=""+new URL("florence-nightingale-B91hwrLm.jpg",import.meta.url).href,ov=""+new URL("george-mueller-apollo-C1TlwOQa.jpg",import.meta.url).href,sv=""+new URL("ibm-system-360-YSCOPv9p.jpg",import.meta.url).href,rv=""+new URL("ibn-al-haytham-DVBBSCDN.jpg",import.meta.url).href,cv=""+new URL("ignaz-semmelweis-Bb24KEgc.jpg",import.meta.url).href,fv=""+new URL("james-dyson-Bxl0Ru_m.jpg",import.meta.url).href,dv=""+new URL("jcr-licklider-ItlevwOr.jpg",import.meta.url).href,hv=""+new URL("josephine-cochrane-GV12tOri.png",import.meta.url).href,mv=""+new URL("margaret-hamilton-apollo-Ds5MRpiH.jpg",import.meta.url).href,gv=""+new URL("mike-rother-toyota-kata-ocaZXQq6.jpg",import.meta.url).href,pv=""+new URL("nigeria-smallpox-vaccination-CGpIhbrR.jpg",import.meta.url).href,yv=""+new URL("pathfinder-cs50-ai-lecture-BuupGyG5.jpg",import.meta.url).href,vv=""+new URL("pathfinder-twi-wartime-training-DPo1b_pG.jpg",import.meta.url).href,bv=""+new URL("pathfinder-vivien-thomas-sdxzzIfG.jpg",import.meta.url).href,Tv=""+new URL("peter-pronovost-CiXNyC8U.jpg",import.meta.url).href,Ev=""+new URL("pixar-braintrust-ed-catmull-CetCbeam.jpg",import.meta.url).href,Sv=""+new URL("rainer-maria-rilke-ru3c6_vH.jpg",import.meta.url).href,Av=""+new URL("richard-hamming-DfYY3Jdr.jpg",import.meta.url).href,wv=""+new URL("satya-nadella-B4oSOIzD.jpg",import.meta.url).href,Ov=""+new URL("seaman-knapp-D-3AaeOV.jpg",import.meta.url).href,Nv=""+new URL("seymour-papert-DhD3wqRg.png",import.meta.url).href,Rv=""+new URL("tactician-va-healthcare-training-Uqb-4vc7.jpg",import.meta.url).href,_v=""+new URL("tim-berners-lee-BD-oAm9o.jpg",import.meta.url).href,xv=""+new URL("toyota-kata-kanban-7R-tFl79.jpg",import.meta.url).href,jv=""+new URL("toyota-production-system-BS33GESt.jpg",import.meta.url).href,Uv=""+new URL("wright-brothers-DuFREVro.jpg",import.meta.url).href,Dv=r=>new URL(Object.assign({"../../public/assets/assessment/history/ada-lovelace.jpg":$y,"../../public/assets/assessment/history/alan-mulally.jpg":ev,"../../public/assets/assessment/history/alexander-fleming.jpg":tv,"../../public/assets/assessment/history/astro-teller.jpg":nv,"../../public/assets/assessment/history/brac-oral-therapy-programme.jpg":av,"../../public/assets/assessment/history/charles-darwin.jpg":lv,"../../public/assets/assessment/history/clearness-committee.jpg":iv,"../../public/assets/assessment/history/florence-nightingale.jpg":uv,"../../public/assets/assessment/history/george-mueller-apollo.jpg":ov,"../../public/assets/assessment/history/ibm-system-360.jpg":sv,"../../public/assets/assessment/history/ibn-al-haytham.jpg":rv,"../../public/assets/assessment/history/ignaz-semmelweis.jpg":cv,"../../public/assets/assessment/history/james-dyson.jpg":fv,"../../public/assets/assessment/history/jcr-licklider.jpg":dv,"../../public/assets/assessment/history/josephine-cochrane.png":hv,"../../public/assets/assessment/history/margaret-hamilton-apollo.jpg":mv,"../../public/assets/assessment/history/mike-rother-toyota-kata.jpg":gv,"../../public/assets/assessment/history/nigeria-smallpox-vaccination.jpg":pv,"../../public/assets/assessment/history/pathfinder-cs50-ai-lecture.jpg":yv,"../../public/assets/assessment/history/pathfinder-twi-wartime-training.jpg":vv,"../../public/assets/assessment/history/pathfinder-vivien-thomas.jpg":bv,"../../public/assets/assessment/history/peter-pronovost.jpg":Tv,"../../public/assets/assessment/history/pixar-braintrust-ed-catmull.jpg":Ev,"../../public/assets/assessment/history/rainer-maria-rilke.jpg":Sv,"../../public/assets/assessment/history/richard-hamming.jpg":Av,"../../public/assets/assessment/history/satya-nadella.jpg":wv,"../../public/assets/assessment/history/seaman-knapp.jpg":Ov,"../../public/assets/assessment/history/seymour-papert.png":Nv,"../../public/assets/assessment/history/tactician-va-healthcare-training.jpg":Rv,"../../public/assets/assessment/history/tim-berners-lee.jpg":_v,"../../public/assets/assessment/history/toyota-kata-kanban.jpg":xv,"../../public/assets/assessment/history/toyota-production-system.jpg":jv,"../../public/assets/assessment/history/wright-brothers.jpg":Uv})[`../../public/assets/assessment/history/${r}`],import.meta.url).href,xe=(r,m,A="center",f)=>({src:Dv(r),alt:m,position:A,credit:f}),Cv={explorer:[{name:"CHARLES DARWIN",label:"Darwin Correspondence Project",url:"https://darwin-editorial.darwinproject.ac.uk/commentary/evolution/natural-selection",image:xe("charles-darwin.jpg","Charles Darwin in later life","center 22%")},{name:"ADA LOVELACE",label:"Computer History Museum",url:"https://www.computerhistory.org/babbage/adalovelace",image:xe("ada-lovelace.jpg","Portrait of Ada Lovelace","center 24%")},{name:"ALEXANDER FLEMING",label:"University of Oxford, The discovery of penicillin",url:"https://www.path.ox.ac.uk/centenary/the-discovery-of-penicillin/",image:xe("alexander-fleming.jpg","Portrait of Alexander Fleming","center 32%")}],builder:[{name:"THE WRIGHT BROTHERS",label:"Smithsonian National Air and Space Museum",url:"https://airandspace.si.edu/explore/stories/researching-wright-way",image:xe("wright-brothers.jpg","Archival photograph of the Wright brothers","center 42%")},{name:"JAMES DYSON",label:"Dyson, Our history",url:"https://www.dyson.com/discover/innovation/behind-the-invention/our-story",image:xe("james-dyson.jpg","Portrait of James Dyson","center 26%")},{name:"JOSEPHINE COCHRANE",label:"National Inventors Hall of Fame",url:"https://www.invent.org/inductees/josephine-garis-cochran",image:xe("josephine-cochrane.png","Portrait of Josephine Cochrane","center 22%")}],leader:[{name:"SEAMAN KNAPP AND THE PORTER DEMONSTRATION FARM",label:"USDA, Cooperative Extension History",url:"https://www.nifa.usda.gov/about-nifa/what-we-do/extension/cooperative-extension-history",image:xe("seaman-knapp.jpg","Archival portrait of Seaman A. Knapp","center 30%")},{name:"BRAC AND ORAL REHYDRATION THERAPY",label:"BRAC, Community healthcare to pandemic response",url:"https://www.brac.net/stay-informed/the-good-feed/50-years-of-serving-bangladesh-community-healthcare-to-pandemic-response/",image:xe("brac-oral-therapy-programme.jpg","BRAC community health workers supporting oral rehydration therapy","center 42%")}],navigator:[{name:"RICHARD HAMMING",label:"Richard Hamming, You and Your Research",url:"https://faculty.nps.edu/irvine/Miscellaneous/Hamming1986You-and-Your-Research.pdf",image:xe("richard-hamming.jpg","Portrait of Richard Hamming","center 28%")},{name:"THE QUAKER CLEARNESS COMMITTEE",label:"Friends General Conference, Clearness Committees",url:"https://www.fgcquaker.org/fgcresources/spiritual-practices/clearness-committees/",image:xe("clearness-committee.jpg","A participant in a Quaker meeting space","center 44%")},{name:"PIXAR BRAINTRUST",label:"Stanford eCorner, Ed Catmull: Inside the Braintrust",url:"https://ecorner.stanford.edu/clips/inside-the-braintrust/",image:xe("pixar-braintrust-ed-catmull.jpg","Pixar co-founder Ed Catmull speaking","center 28%",{label:"Steve Jurvetson / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Ed_Catmull,_ETL_2014.jpg",license:"CC BY 2.0"})}],pathfinder:[{name:"SEYMOUR PAPERT",label:"MIT Logo Foundation, Logo and Learning",url:"https://el.media.mit.edu/logo-foundation/what_is_logo/logo_and_learning.html",image:xe("seymour-papert.png","Portrait of Seymour Papert","center 24%",{label:"Rodrigo Mesquita / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Seymour_Papert.png",license:"CC BY-SA 2.0"})},{name:"MIKE ROTHER AND TOYOTA KATA",label:"Toyota Kata, University of Michigan",url:"https://public.websites.umich.edu/~jmondisa/TK/",image:xe("mike-rother-toyota-kata.jpg","Mike Rother, researcher and author of Toyota Kata","center",{label:"Mike Rother / Kata to Grow",url:"https://www.katatogrow.com/",license:"Official source"})},{name:"DAVID MALAN AND CS50.AI",label:"Harvard, Teaching CS50 with AI",url:"https://cs.harvard.edu/malan/publications/V1fp0567-liu.pdf",image:xe("pathfinder-cs50-ai-lecture.jpg","David Malan teaching CS50","center 36%")}],tactician:[{name:"VHA MEDICAL TEAM TRAINING",label:"PubMed, Medical team training and coaching in VHA",url:"https://pubmed.ncbi.nlm.nih.gov/20693225/",image:xe("tactician-va-healthcare-training.jpg","A Veterans Health Administration medical team training together","center 40%")},{name:"MICHIGAN KEYSTONE ICU PROJECT",label:"AHRQ, Michigan Keystone ICU project",url:"https://www.ahrq.gov/hai/cusp/clabsi-final/clabsifinal1.html",image:xe("peter-pronovost.jpg","Peter Pronovost, a leader of the Michigan Keystone ICU project","center 26%")}],captain:[{name:"J.C.R. LICKLIDER AND DARPA IPTO",label:"DARPA, ARPANET",url:"https://www.darpa.mil/news/features/arpanet",image:xe("jcr-licklider.jpg","Portrait of J.C.R. Licklider","center 24%",{label:"U.S. Government / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Portrait_of_J._C._R._Licklider.jpg",license:"Public domain"})},{name:"ASTRO TELLER AND X, THE MOONSHOT FACTORY",label:"X, The Moonshot Factory Operating Manual",url:"https://x.company/blog/posts/a-peek-inside-the-moonshot-factory-operating-manual/",image:xe("astro-teller.jpg","Portrait of Astro Teller","center 24%",{label:"Touroftheworld / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Astro_Teller_candid.jpg",license:"CC BY-SA 3.0"})}],pioneer:[{name:"IBM SYSTEM/360",label:"IBM, The IBM System/360",url:"https://www.ibm.com/history/system-360",image:xe("ibm-system-360.jpg","An IBM System/360 installation at the United States Department of Agriculture","center 48%",{label:"USDA / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:IBM_System_360_at_USDA.jpg",license:"Public domain"})},{name:"GEORGE MUELLER AND APOLLO ALL-UP TESTING",label:"NASA, Apollo: A Retrospective Analysis",url:"https://www.nasa.gov/wp-content/uploads/2023/04/sp-4503-apollo.pdf",image:xe("george-mueller-apollo.jpg","NASA Associate Administrator George Mueller","center",{label:"NASA, George Mueller portrait",url:"https://www.nasa.gov/history/50-years-ago-management-changes-at-nasa/",license:"NASA historical image"})}],strategos:[{name:"TAIICHI OHNO AND THE TOYOTA PRODUCTION SYSTEM",label:"Toyota, Basic concept of the Toyota Production System",url:"https://www.toyota-global.com/company/history_of_toyota/75years/data/automotive_business/production/system/change.html",image:xe("toyota-production-system.jpg","A visual model of the Toyota Production System","center",{label:"Peppi1972 / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Toyota-produktionssystem.jpeg",license:"Public domain"})},{name:"SATYA NADELLA AND MICROSOFT'S TRANSFORMATION",label:"Microsoft, Satya Nadella's first-day CEO message",url:"https://news.microsoft.com/source/2014/02/04/satya-nadella-email-to-employees-on-first-day-as-ceo/",image:xe("satya-nadella.jpg","Satya Nadella speaking at LeWeb Paris","center 26%",{label:"Official LeWeb Photos / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Satya_Nadella.jpg",license:"CC BY 2.0"})},{name:"ALAN MULALLY AND ONE FORD",label:"Leader to Leader, Alan Mulally on Working Together",url:"https://onlinelibrary.wiley.com/doi/full/10.1002/ltl.20628",image:xe("alan-mulally.jpg","Alan Mulally during his time leading Ford","center 22%",{label:"Ford Motor Company / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Alan_Mulally_2013-01-30_001.jpg",license:"CC BY 3.0"})}]},Ir=`CRITICAL CONTENT CORRECTION

Replace the CURRENT role-detail copy in the Future-Proofing Check with the canonical content below.

This is the content the owner reviewed and approved in ChatGPT.

DO NOT:
- summarize it
- paraphrase it
- make it more concise
- harmonize the roles
- generate alternate copy
- replace paragraphs because they are too long for the UI

DESIGN MUST ADAPT TO THIS CONTENT.

If the content needs more space, make the drawer scroll.
If a story is long, use progressive disclosure.
If a card needs a teaser, create a separate teaser field while preserving the full copy below.

Use the same right-side drawer interaction already approved.

==================================================
EXPLORER
==================================================

HERO

EXPLORER

Discover what may be worth pursuing while the direction is still unresolved.

An Explorer works before the answer is obvious. They stay with an important question long enough to discover what may genuinely deserve pursuit.

PROFESSIONAL FUTURE-PROOFING

Turn uncertainty into a direction worth testing.

THE EXPLORER'S QUESTION

What is actually worth pursuing here?


01 CAN YOU PROVE IT?

It is easy to say you are curious, good at spotting opportunities, or full of ideas.

The harder question is:

Can you prove that you can turn uncertainty into a direction worth pursuing?

In Leadapreneur, an Explorer proves it by...

- Finding a painful professional problem
- Proposing a solution using AI or another emerging technology
- Building a credible value case of at least US$10,000
- Getting approval to proceed within 30 days

PROBLEM + VALUE CASE + PROPOSAL + APPROVAL + DATE

The proof is not the idea. The proof is a credible opportunity that is worth acting on.

Easy to claim. Different to prove.


02 HOW AN EXPLORER WORKS

NOTICE WHAT OTHERS HAVE NORMALISED

You see a painful problem and ask whether it really has to stay that way.

STAY OPEN BEFORE YOU COMMIT

You resist choosing the first attractive answer just because it feels certain.

LOOK FOR EVIDENCE, NOT AGREEMENT

You actively look for what could prove your idea wrong, not only what makes it sound good.

KNOW WHEN TO MOVE

Exploration is not endless research. At some point, there is enough evidence to make a call.


IT STARTS WITH CARE.

You notice something that matters.

A painful problem. A frustrating process. A customer need. Something that could be simpler, better, faster, or more valuable.

And then a question appears:

What if I could solve this?

What if I could make this easier?

What if there is a better way?

You care enough not to ignore it.

So you explore. You look more closely at the problem, question what is currently accepted, gather evidence, explore possible solutions, and work out what is genuinely worth pursuing.

Care is what makes you look again. Exploration is what turns that care into a direction.


03 EXPLORER AND FUTURE-PROOFING

AI can generate ideas, research markets, analyse data, and suggest solutions faster than ever.

That makes producing possibilities easier.

But it does not make every possibility worth pursuing.

The Explorer's value is judgment.

Which problem actually matters?

Which opportunity could create meaningful value?

Which assumption needs testing?

And when is there enough evidence to commit?

When answers become easier to generate, knowing which question is worth pursuing becomes more valuable.


04 THE HUMAN SIDE

Explorer work is not always rewarded quickly.

You may find a problem that others have learned to live with. You may propose something new and hear no. Your manager may not approve it. The evidence may weaken your first idea. People may prefer the safety of business as usual.

That does not mean you keep forcing the same answer.

You go back to what matters.

What did the rejection teach you?

Was the problem wrong, the solution weak, the value unclear, or simply the route not good enough yet?

A strong Explorer can let go of one answer without letting go of the problem.

You do not need your first idea to win. You need to find a direction worth pursuing.


05 STORIES IN ACTION

CHARLES DARWIN

The naturalist who changed how we understand life

Charles Darwin was a British naturalist who returned from the voyage of the Beagle with observations and specimens that did not fit neatly with the accepted explanations of his time.

He did not immediately force everything into one answer. He spent years collecting evidence, comparing species, recording competing ideas, and continuing to question how living things changed.

Over time, that work contributed to his explanation of evolution by natural selection and later to On the Origin of Species.

WHY THIS MATTERS TO AN EXPLORER

He did not begin with the answer. He stayed with an important question long enough for a stronger explanation to emerge.

REFLECTION

What are you seeing today that the accepted explanation does not fully explain?


ADA LOVELACE

The mathematician who saw a much bigger future for computing

Ada Lovelace was a 19th-century mathematician who studied Charles Babbage's plans for the Analytical Engine, a machine that was never completed in her lifetime.

Instead of seeing it only as a faster calculator, she considered something much bigger.

She imagined that numbers could represent more than quantities, and that a programmable machine might one day work with symbols, processes, and even music.

At a time when modern computing barely existed, Lovelace was already asking what such a machine could eventually make possible.

WHY THIS MATTERS TO AN EXPLORER

She did not only ask what the technology could do now. She asked what else it might make possible.

REFLECTION

Which technology around you are people still thinking about too narrowly?


ALEXANDER FLEMING

The scientist who noticed something unexpected and chose not to dismiss it

Alexander Fleming was a Scottish bacteriologist working at St Mary's Hospital in London.

In 1928, he noticed something unusual in one of his culture plates. A mould had contaminated the plate, but around it the bacteria had been destroyed.

It would have been easy to throw the contaminated plate away as a failed experiment.

Instead, Fleming investigated the anomaly.

His observation led him to study the antibacterial substance produced by the mould, which he called penicillin. Other researchers later developed that discovery into a practical medicine that transformed the treatment of bacterial infection.

WHY THIS MATTERS TO AN EXPLORER

Sometimes the opportunity is hiding inside the thing that was not supposed to happen.

REFLECTION

What unexpected result in your work might deserve investigation instead of dismissal?


AND WHAT ABOUT YOURS?

History looks obvious after the ending is known.

But most Explorer moments begin much smaller: a process everyone has learned to tolerate, a customer problem nobody owns, or a new technology people are using without asking what it could really change.

Your Explorer moment may never appear in a history book.

It may simply become the problem your team finally solved, the opportunity your organisation almost missed, or the idea that became worth building because you were willing to ask one more question.

Every better world begins before the answer is obvious.


DO IT. PROVE IT. EARN IT.

DO IT

Take on a real Explorer challenge.

PROVE IT

Show the problem, value case, proposal, approval, and timeframe.

EARN IT

Turn your evidence into recognised capability.


==================================================
BUILDER
==================================================

HERO

BUILDER

Turn a chosen possibility into something that works in reality.

A Builder takes something worth pursuing and makes it real. The idea has already been chosen. Now the question is whether it can survive contact with reality, work under real conditions, and create measurable improvement.

PROFESSIONAL FUTURE-PROOFING

Turn an approved direction into a working, tested solution.

THE BUILDER'S QUESTION

How can this chosen possibility actually work in reality?


01 CAN YOU PROVE IT?

It is easy to say you can build.

The harder question is:

Can you prove that what you built actually works?

In Leadapreneur, a Builder proves it by...

- Building a working prototype
- Testing it against a real problem or baseline
- Showing measurable improvement
- Using the evidence to support at least US$10,000 in validated value
- Doing it within 2 months

PROTOTYPE + TEST + BASELINE + RESULTS + ITERATION + VALUE

The proof is not that you built something. The proof is that reality gave you evidence it works.


02 HOW A BUILDER WORKS

IT STARTS WITH CARE.

You care enough about the opportunity not to leave it as a good idea.

What if I could make this actually work?

What if I could make it simpler?

What if there is a better way to build this?

What if the first version fails, but teaches me what to fix?

So you build.

Then you let reality answer.

A Builder tests assumptions instead of protecting them, finds out why things fail, improves the whole instead of endlessly patching it, and learns when something is genuinely good enough to move forward.

Care makes you want it to work. Builder capability helps you make it work in reality.


03 BUILDER AND FUTURE-PROOFING

AI can create first drafts, code, workflows, designs, and prototypes faster than ever.

That makes making something easier.

It does not automatically make that thing reliable, useful, integrated, or worth trusting.

The Builder's value is increasingly in judgment.

Does it actually work?

What breaks under real conditions?

Which part needs redesign rather than another patch?

What evidence is strong enough to move forward?

As tools make building easier, knowing whether something truly works becomes the rarer skill.


04 THE HUMAN SIDE

Building gets personal very quickly.

You may spend days on something that fails the first real test. A prototype you were proud of may break in front of someone important. A small fix may create three new problems. A deadline may tempt you to hide what is not working.

And sometimes the hardest thing is admitting:

The build is telling you something you did not want to hear.

A strong Builder does not defend the first version.

They learn from it.

The goal is not to prove your first idea was right. The goal is to make the right thing work.


05 STORIES IN ACTION

THE WRIGHT BROTHERS

Two bicycle makers who turned the dream of powered flight into something that could actually fly

Wilbur and Orville Wright spent years testing gliders, but their early machines did not perform the way existing calculations said they should.

They could have kept adjusting their aircraft around assumptions everyone accepted.

Instead, they questioned the data itself.

They built their own wind tunnel, tested different wing shapes, gathered better measurements, and redesigned around what the experiments showed them.

That evidence helped them develop a controllable aircraft and contributed to their successful powered flight in 1903.

WHY THIS MATTERS TO A BUILDER

They did not protect the first design. They let testing show them what was wrong, then rebuilt around better evidence.

REFLECTION

What in your work needs a better test, not a stronger argument?


JAMES DYSON

The inventor who built thousands of versions before the product worked the way he wanted

James Dyson became frustrated with vacuum cleaners that lost suction as their bags filled with dust.

He believed cyclonic separation could solve the problem.

The principle sounded promising. Making it work inside a practical consumer product was much harder.

Dyson spent years building and testing prototype after prototype, changing shapes, airflow, materials, and components as each version revealed another problem.

After thousands of prototypes, the technology became the basis for the bagless vacuum cleaners that later built the Dyson company.

WHY THIS MATTERS TO A BUILDER

A promising principle does not become a solution because you believe in it. It becomes a solution when repeated testing makes it work.

REFLECTION

How many versions are you willing to learn from before you call the idea a failure?


JOSEPHINE COCHRANE

The inventor who turned a frustrating household problem into a working machine

Josephine Cochrane wanted a better way to wash delicate dishes without damaging them.

She was not formally trained as an engineer.

The idea sounded simple. Making it actually work was not.

The machine had to hold dishes securely, direct water with enough force to clean them, and work reliably with the mechanics available at the time.

Cochrane worked with mechanical expertise to turn the concept into a functioning machine. She patented her design in 1886 and eventually built a business around it.

WHY THIS MATTERS TO A BUILDER

A Builder does not need to know how to do everything alone. They need to make the whole solution work.

REFLECTION

Which part of your build needs expertise you do not have yet?


AND WHAT ABOUT YOURS?

You do not need a spacecraft or a patent to have a Builder moment.

It may happen when an approved idea has to survive a real Tuesday.

When you inherit a messy process and leave it clearer.

Or when you notice that something only works because one particular person is there, and decide to change that.

A better world needs people who find what is worth doing, people who make it work, and people who help it make a difference.

Builder is where the chosen idea meets reality.


DO IT. PROVE IT. EARN IT.

DO IT

Take on a real Builder challenge.

PROVE IT

Show the prototype, test, measurable result, and what you improved.

EARN IT

Build evidence that holds beyond the first successful demonstration.


==================================================
LEADER
==================================================

HERO

LEADER

Bring what works into people's lives so it creates real benefit.

A Leader begins after something already works.

The challenge now is different:

Will people understand it, use it, trust it, adopt it, and actually be better off because it exists?

PROFESSIONAL FUTURE-PROOFING

Turn a working solution into real use and measurable benefit.

THE LEADER'S QUESTION

How does what works become what helps?


01 CAN YOU PROVE IT?

A launch is easy to announce.

A training session is easy to count.

A room full of people saying yes is easy to celebrate.

But:

Did anything actually change?

In Leadapreneur, a Leader proves it by...

- Deploying the validated solution
- Driving meaningful use or adoption
- Showing measurable benefit
- Confirming at least US$10,000 in realised impact
- Doing it within 3 months

DEPLOYMENT + USE + ADOPTION + BENEFIT + CONFIRMED IMPACT

The proof is not that people heard about it. The proof is that people used it and it made a meaningful difference.


02 HOW A LEADER WORKS

IT STARTS WITH CARE.

You care whether the thing that was built actually helps the people it was meant for.

What if people could really use this?

What if this could make their work easier?

What if the problem is not the solution, but the way we are bringing it to people?

You listen.

You explain.

You adapt the route.

You pay attention when people resist.

And you measure what happened after the launch.

Care makes you want people to benefit. Leader capability helps good work become useful in real life.


03 LEADER AND FUTURE-PROOFING

AI can generate polished communication in seconds.

It can write presentations, training materials, stakeholder messages, and change plans.

That means polished messaging is becoming easier.

What remains difficult is getting people to genuinely understand something, trust it appropriately, use it, and keep using it when the excitement is gone.

As messages get easier to produce, being understood gets rarer.

A future-proof Leader knows that adoption is not persuasion alone.

It is listening, adaptation, trust, behavior, and measurable benefit.


04 THE HUMAN SIDE

People may reject something you know works.

They may say yes in the meeting and never use it.

They may use it because they were told to, while quietly building workarounds.

Or they may use it and discover that it does not help as much as everyone expected.

That can hurt.

Especially when you care deeply about the solution.

A strong Leader does not respond by pushing harder.

They ask:

What is the resistance telling me?

Sometimes leadership means changing the route.

Sometimes it means accepting that the solution itself needs to change.


05 STORIES IN ACTION

SEAMAN KNAPP AND THE PORTER DEMONSTRATION FARM

The agricultural educator who realised that people often need to see change work in their own world

In the early 1900s, American farmers were facing serious agricultural problems.

Seaman Knapp believed that simply telling farmers about better methods would not be enough.

Working with farmer Walter Porter, he helped establish a demonstration farm where people could see improved methods working under conditions similar to their own.

Instead of asking farmers to trust an abstract recommendation, the demonstration allowed them to watch, compare, question, and judge the results for themselves.

The approach later influenced the wider demonstration model used in agricultural extension.

WHY THIS MATTERS TO A LEADER

A good solution becomes easier to trust when people can see what it means in conditions that feel real to them.

REFLECTION

What are you asking people to believe before they have had a chance to experience it?


BRAC AND ORAL REHYDRATION THERAPY

The organisation that learned that teaching a life-saving solution was not the same as getting people to use it

BRAC trained mothers across Bangladesh to prepare oral rehydration solution for children with diarrhoea.

The teaching worked.

Mothers could learn how to make the solution.

But BRAC discovered a harder problem.

Knowing how to make it did not guarantee that families would actually use it when a child became sick.

Instead of declaring the training successful, BRAC studied what was getting in the way and adapted its implementation around the realities of family behaviour, beliefs, and everyday life.

The programme eventually reached millions of households and became an important part of wider oral rehydration adoption in Bangladesh.

WHY THIS MATTERS TO A LEADER

Understanding is not the same as use. Use is not the same as benefit.

REFLECTION

What are you currently calling a success because people were trained, rather than because something actually changed?


AND WHAT ABOUT YOURS?

Leader moments are often small and easy to miss.

They happen when you find out why a good process is being ignored.

When you explain something so it finally makes sense to the person who needs it.

Or when you notice that a tool everyone uses is quietly creating a new burden and choose to address it.

A better world needs people who find what is worth doing, people who make it work, and people who help it make a real difference.

Leader is where good work meets the people it was meant for.


DO IT. PROVE IT. EARN IT.

DO IT

Lead something that already works into real use.

PROVE IT

Show adoption, behavior change, benefit, and confirmed impact.

EARN IT

Show that the impact exists beyond the launch moment.


==================================================
NAVIGATOR
==================================================

HERO

NAVIGATOR

Help another person discover what may be worth pursuing without taking the question away from them.

A Navigator does not win by having the smartest answer.

They help someone else think more clearly, question more deeply, and arrive at a direction they can genuinely own.

PROFESSIONAL FUTURE-PROOFING

Grow another person's ability to find opportunities worth pursuing.

THE NAVIGATOR'S QUESTION

How can I help them think this through for themselves?


01 CAN YOU PROVE IT?

It is easy to say:

"I coach my team."

But did they become better at exploring?

Or did they simply learn to bring their questions to you?

In Leadapreneur, a Navigator proves it by...

- Enabling a small cohort to find meaningful problems
- Helping them shape credible AI or emerging technology proposals
- Helping them get those proposals approved
- Keeping the ideas and decisions genuinely theirs
- Working toward at least US$100,000 in combined value

THEIR PROBLEMS + THEIR PROPOSALS + THEIR APPROVALS + THEIR OWNERSHIP + COMBINED VALUE

If the good idea is really yours, you have not proved Navigator capability yet.


02 HOW A NAVIGATOR WORKS

IT STARTS WITH CARE.

You care about someone's judgment, not only their answer.

What if they could see the opportunity themselves?

What if one question from me could help them notice something they were missing?

What if I do not need to be the smartest person in this conversation?

So you listen.

You ask.

You challenge.

You widen the frame without quietly choosing the direction for them.

Care makes you want them to grow. Navigator capability helps them discover without making them dependent on you.


03 NAVIGATOR AND FUTURE-PROOFING

AI can generate answers almost instantly.

That changes the value of being the person who always knows what to say.

Answers are getting cheaper.

Judgment is not.

A Navigator helps people ask better questions, separate evidence from reassurance, and make decisions they can stand behind.

As answers get cheaper, helping someone think gets more valuable.


04 THE HUMAN SIDE

Sometimes you know the answer.

And letting them think feels painfully slow.

They may choose differently from you.

Their proposal may get rejected.

They may keep circling the same question.

The temptation is to step in and solve it.

A strong Navigator knows that helping does not always mean giving more.

Sometimes the better move is another question.

Sometimes it is useful information.

Sometimes it is silence.

The goal is not for them to think like you.

The goal is for them to think better for themselves.


05 STORIES IN ACTION

RICHARD HAMMING

The mathematician who made colleagues uncomfortable by asking what really deserved their attention

Richard Hamming was a mathematician at Bell Labs who worked alongside some of the most accomplished scientists of his generation.

At lunch with a group of colleagues, he began asking what the most important problems in their fields were.

Then he asked a harder question.

If those problems were so important, why were they not working on them?

The questions were uncomfortable.

But at least one colleague later told Hamming that the question stayed with him and changed the way he thought about his work.

WHY THIS MATTERS TO A NAVIGATOR

Hamming did not give his colleagues a research agenda. He made them examine whether the agenda they had chosen was worth their time.

REFLECTION

What question could help someone around you rethink what is actually important?


THE QUAKER CLEARNESS COMMITTEE

A practice built around helping someone reach clarity without deciding for them

A Quaker clearness committee gathers around a person who is facing an important question or decision.

The group does something unusually difficult.

Members listen carefully and ask honest questions without turning those questions into disguised advice.

The aim is not for the committee to solve the problem.

The decision remains with the person seeking clarity.

The group creates conditions for that person to see their own situation more clearly.

WHY THIS MATTERS TO A NAVIGATOR

Good help does not always end with your answer. Sometimes it ends with someone else's clearer judgment.

REFLECTION

Can you ask a useful question without secretly needing the person to reach your conclusion?


PIXAR BRAINTRUST

The creative feedback system designed to challenge the work without taking ownership away from its creator

At Pixar, directors bring unfinished films to a group of experienced peers known as the Braintrust.

The conversations can be extremely candid.

People are expected to identify what is confusing, weak, or not yet working.

But the Braintrust does not take control of the film.

The director remains responsible for deciding what to change and how to change it.

The purpose of the conversation is to improve the creator's view of the problem, not replace their judgment with the group's solution.

WHY THIS MATTERS TO A NAVIGATOR

The strongest feedback can challenge someone's thinking without taking the decision away from them.

REFLECTION

When you give feedback, are you helping someone see more clearly, or quietly trying to make the decision for them?


AND WHAT ABOUT YOURS?

A Navigator moment may be a conversation nobody else remembers.

But months later, someone makes a stronger decision without you.

Finds a better problem.

Challenges their own assumptions.

And knows how to do it again.

The best Navigator work becomes less visible as the other person becomes more capable.


DO IT. PROVE IT. EARN IT.

DO IT

Develop someone through a real Explore challenge.

PROVE IT

Show their proposal, approval, value case, and evidence that they owned the thinking.

EARN IT

Show that their capability grew, not only that the project moved.


==================================================
PATHFINDER
==================================================

HERO

PATHFINDER

Help someone grow as a Builder through a build that stays theirs.

A Pathfinder helps another person make something work without quietly becoming the person who makes it work for them.

PROFESSIONAL FUTURE-PROOFING

Grow another person's ability to build, test, diagnose, and improve.

THE PATHFINDER'S QUESTION

How do I help you make this work, so you can make the next one work too?


01 CAN YOU PROVE IT?

Fixing someone's build is useful.

It is not yet Pathfinder proof.

In Leadapreneur, a Pathfinder proves it by...

- Enabling a small cohort to build their own prototypes
- Helping them test and improve those prototypes
- Showing combined validated value of at least US$100,000
- Showing that they became better Builders through the process

THEIR BUILD + THEIR TEST + THEIR LEARNING + VALIDATED VALUE + CAPABILITY GROWTH

If the solution improved but the Builder did not, something is missing.


02 HOW A PATHFINDER WORKS

IT STARTS WITH CARE.

You care that someone can make things work without always needing you.

What if I help them find the bug instead of fixing it?

What if this failure could teach them something?

What if the next challenge can be slightly harder because they are ready for it?

So you support.

But you do not automatically rescue.

You diagnose together, adjust the amount of help, and know when to step closer or further back.

Care makes you want them to succeed. Pathfinder capability helps them become capable enough to succeed again.


03 PATHFINDER AND FUTURE-PROOFING

AI can now generate code, formulas, designs, layouts, instructions, and fixes.

That makes procedures easier to obtain.

But having an answer is different from knowing whether it is the right answer.

The durable capability is judgment.

Why did it fail?

Which assumption matters?

What should we test next?

What changes when the context changes?

Tools can hand someone a fix. Judgment tells them whether it is the right one.


04 THE HUMAN SIDE

Watching someone struggle can be harder than doing the work yourself.

Especially when the deadline is close.

You know the answer.

You could take the keyboard and solve it in five minutes.

Sometimes you should step in.

Sometimes stepping in steals the learning.

A strong Pathfinder learns the difference.

Letting someone struggle only helps while they are still learning from the struggle.


05 STORIES IN ACTION

SEYMOUR PAPERT

The computer scientist who believed people learn to build by building things themselves

Seymour Papert was a mathematician, computer scientist, and educator at MIT who helped develop the Logo programming language and later shaped an approach to learning known as constructionism.

At the time, computers in education were often imagined as machines that would deliver instruction to students.

Papert saw a different possibility.

He wanted learners to use computers to make things of their own.

When something broke, the mistake was not simply something for a teacher to correct.

Debugging became part of the learning itself.

The learner had to find what went wrong, form a theory, try a fix, and test again.

The point was not only to finish the program.

It was for the learner to become better at thinking, diagnosing, and making the next thing work.

WHY THIS MATTERS TO A PATHFINDER

Papert did not design learning around giving people the right answer. He designed conditions where they could build, get stuck, debug, and become better at solving the next problem themselves.

REFLECTION

When someone you are helping gets stuck, are you fixing the problem, or helping them become better at fixing problems?


MIKE ROTHER AND TOYOTA KATA

The researcher who turned coaching into a practice for helping people solve problems themselves

Mike Rother studied patterns of improvement at Toyota and later developed Improvement Kata and Coaching Kata as ways of practising scientific problem solving.

The learner works toward a real challenge.

They study the current condition, define a next target, identify obstacles, run experiments, and learn from what happens.

The coach does not own the problem.

Instead of supplying the solution, the coach helps the learner think through the next step and learn from evidence.

Over time, the aim is not only to solve today's problem.

It is to strengthen the learner's ability to approach tomorrow's problem.

WHY THIS MATTERS TO A PATHFINDER

The coach does not own the solution. They help the learner experiment, learn from evidence, and become better at solving the next problem themselves.

REFLECTION

When someone brings you a problem, are you helping them solve this one, or helping them become better at solving the next one too?


DAVID MALAN AND CS50.AI

The computer science programme that designed AI to help students solve problems without solving the problems for them

As generative AI became capable of producing code and answers almost instantly, Harvard's CS50 faced a new challenge.

If AI simply completed the work, students might finish the assignment without becoming better programmers.

So the CS50 team developed AI tools with pedagogical guardrails.

Instead of simply handing students complete solutions, the tools were designed to provide hints, questions, explanations, and guidance that could help students continue reasoning and debugging themselves.

The aim was not to remove struggle completely.

It was to make the struggle more productive.

WHY THIS MATTERS TO A PATHFINDER

The fastest way to finish someone's build is not always the best way to grow the Builder.

REFLECTION

When AI can solve the problem instantly, what does the person still need to learn to do for themselves?


AND WHAT ABOUT YOURS?

Your Pathfinder moment may be the afternoon you did not take the keyboard.

The question that helped someone find the bug themselves.

The day someone fixed a problem you never showed them exactly how to fix.

A better world needs people who make things work, and people who help others learn to.


DO IT. PROVE IT. EARN IT.

DO IT

Develop someone through a real Build challenge.

PROVE IT

Show what they built, tested, learned, and improved themselves.

EARN IT

Show that the next build needs less of you.


==================================================
TACTICIAN
==================================================

HERO

TACTICIAN

Help someone bring their work to people and get better at it each time.

A Tactician grows another person's ability to lead adoption, trust, use, and benefit without becoming the person who carries the change for them.

PROFESSIONAL FUTURE-PROOFING

Grow another person's ability to lead change in their own voice.

THE TACTICIAN'S QUESTION

How do I help you bring people with you, without carrying them for you?


01 CAN YOU PROVE IT?

Helping someone make a better presentation is not enough.

Getting senior support is not enough.

Even getting people to say yes is not enough.

In Leadapreneur, a Tactician proves it by...

- Enabling a small cohort to deploy their own solutions
- Helping them achieve real use and adoption
- Helping them confirm benefit
- Reaching at least US$100,000 in combined confirmed impact
- Showing that the owners themselves became better at leading change

THEIR ROLLOUT + THEIR VOICE + ADOPTION + BENEFIT + COMBINED IMPACT

If people only moved because you were in the room, the capability has not moved far enough yet.


02 HOW A TACTICIAN WORKS

IT STARTS WITH CARE.

You care that this helps people because they know how to lead it, not because you were there.

What if they could find their own voice?

What if they could understand why people resisted instead of just trying a stronger pitch?

What if the next difficult conversation did not need me?

So you prepare with them.

Challenge them.

Let them face the room.

And help them learn from what actually happened.

Care makes you want them to succeed. Tactician capability helps them become someone others can trust without borrowing your authority.


03 TACTICIAN AND FUTURE-PROOFING

AI can draft the pitch.

Map stakeholders.

Predict objections.

Play the sceptical colleague.

That makes polished communication easier.

What remains scarce is someone trusted in their own voice who can understand what people are really responding to.

Polished words are getting cheaper. Being trusted isn't.


04 THE HUMAN SIDE

Someone may have a brilliant solution and still be terrified to lead the change.

They may get rejected.

They may get criticised publicly.

The room may say yes, and nothing happens afterwards.

You may be able to rescue them simply by stepping in.

That is exactly why this role is hard.

A strong Tactician knows when support becomes substitution.

Your job is not to make them look like a Leader.

It is to help them become better at leading.


05 STORIES IN ACTION

VHA MEDICAL TEAM TRAINING

The healthcare programme that helped local teams become better at leading change in their own hospitals

The US Veterans Health Administration introduced a medical team training programme across surgical facilities.

The central team did not simply arrive and permanently run the change.

Local leaders and teams were trained, supported, and coached as they introduced new practices into their own clinical environments.

The local teams had to work with their own people, routines, resistance, and constraints.

The aim was not only to introduce a programme.

It was to strengthen local teams' ability to lead safer ways of working themselves.

WHY THIS MATTERS TO A TACTICIAN

The change still had to work after the people coaching it were no longer in the room.

REFLECTION

If you stepped out of the next important meeting, could the person you are helping still lead the change?


MICHIGAN KEYSTONE ICU PROJECT

The patient-safety effort that built local teams capable of leading improvement in their own intensive care units

The Michigan Keystone project brought together intensive care units working to reduce dangerous catheter-related infections.

The clinical practices needed to reduce infections were already known.

The harder challenge was helping many different hospitals implement them consistently in real working environments.

Local physician and nurse leaders formed improvement teams.

They received training, data, coaching, and support, but the local teams still had to lead the change in their own ICUs.

The work contributed to major and sustained reductions in infection rates.

WHY THIS MATTERS TO A TACTICIAN

A central expert can provide evidence, structure, and support. Real capability appears when local owners can lead the adoption themselves.

REFLECTION

Are the people you are helping becoming better at leading change, or simply better at following your change plan?


AND WHAT ABOUT YOURS?

Your Tactician moment may be the meeting you did not lead.

The script you refused to write for them.

The conversation where they finally understood why people said yes and still did nothing.

And eventually, the day they handled it differently from you and people trusted them.

A better world needs people who bring good work to people, and people who help others learn to.


DO IT. PROVE IT. EARN IT.

DO IT

Develop someone through a real Lead challenge.

PROVE IT

Show their rollout, adoption, benefit, and what they learned about leading people.

EARN IT

Show that they can lead the next difficult change with less of you.


==================================================
CAPTAIN
==================================================

HERO

CAPTAIN

Discover a strategic frontier and lead people into it.

A Captain works where the organisation does not yet know exactly where to look.

They create enough shared direction for several Explorers to search different parts of an important frontier, then bring what they learn back into one coherent picture.

PROFESSIONAL FUTURE-PROOFING

Turn distributed exploration into strategic direction.

THE CAPTAIN'S QUESTION

What new frontier is worth exploring, and what is our exploring adding up to?


01 CAN YOU PROVE IT?

Exploration at strategic scale is not about collecting more ideas.

The harder question is whether several independent searches can create a coherent direction for the organisation.

In the current Future-Proofing standard, Captain-level evidence includes:

- Leading 10+ people into an important strategic frontier
- Helping multiple owners investigate different parts of that frontier
- Keeping ownership of their individual questions with them
- Bringing the learning back into one coherent strategic picture
- Creating Impact Project commitments worth at least US$1 million

FRONTIER + MULTIPLE OWNERS + SEARCHES + STRATEGIC RETURN + VALUE

The proof is not the number of people exploring.

The proof is that their exploration adds up to a direction the organisation can act on.


02 HOW A CAPTAIN WORKS

IT STARTS WITH CARE.

You care that the organisation does not miss what is coming next.

What if we are looking in the wrong place?

What if different teams are seeing pieces of the same opportunity?

What if we could explore this before it becomes obvious to everyone else?

A Captain frames the frontier.

They create enough shared direction for several searches to remain connected without forcing everyone toward the same answer.

They notice when signals disagree.

They know when a search has taught enough.

And they know when it is time to bring the expedition home.


03 CAPTAIN AND FUTURE-PROOFING

AI can scan enormous amounts of information.

It can generate trends, scenarios, opportunities, and predictions faster than any individual team.

That does not automatically tell an organisation which frontier deserves attention.

When signals become easier to generate, strategic judgment becomes more important.

The Captain's value is not producing more ideas.

It is helping many different searches add up to something meaningful enough to guide action.


04 THE HUMAN SIDE

Everyone may be excited about a different thing.

Sponsors may want an answer before the evidence exists.

People's day jobs may keep consuming the time needed for exploration.

Different searches may contradict each other.

And sometimes the strongest signal in the room is the one you personally most want to believe.

A strong Captain has to be able to say:

I don't know yet.

And later:

We have learned enough. This is worth pursuing.

Or:

We explored it honestly. We should stop.


05 STORIES IN ACTION

J.C.R. LICKLIDER AND DARPA IPTO

The computer scientist who helped open a new frontier before the technologies needed to build it fully existed

In the early 1960s, computers were still largely large machines used for calculation and batch processing.

J.C.R. Licklider imagined something much broader.

People interacting directly with computers.

Computers becoming tools for communication and creativity.

Machines in different places eventually connecting with one another.

As the first director of DARPA's Information Processing Techniques Office, Licklider did not personally build all of those technologies.

Research was distributed across different programmes and institutions working on time-sharing, computer graphics, networking, artificial intelligence, and other emerging areas.

Those different searches helped create foundations for modern interactive computing and networking.

WHY THIS MATTERS TO A CAPTAIN

His contribution was not one answer or one build. He helped define a frontier, directed attention into it, and allowed different explorations to add up to a larger technological direction.

REFLECTION

What important frontier could your organisation be missing because everyone is still focused on today's categories?


ASTRO TELLER AND X, THE MOONSHOT FACTORY

The innovation organisation designed to explore ambitious problems and stop projects when the evidence says no

X was created to explore difficult problems that might lead to dramatically different solutions.

Its teams work on very different challenges.

The point is not to make every project succeed.

Teams are encouraged to identify the hardest assumptions early, test them, and stop projects when evidence shows that the idea is unlikely to work.

Projects that survive those tests may eventually grow into larger businesses.

The portfolio therefore depends on both exploration and disciplined stopping.

WHY THIS MATTERS TO A CAPTAIN

Leading a frontier is not about protecting every idea. It is about helping many searches produce honest learning, including the learning that tells you when to stop.

REFLECTION

Does your organisation reward people for discovering that an idea should stop, or only for keeping projects alive?


AND WHAT ABOUT YOURS?

Your Captain moment may begin when several weak signals stop looking unrelated.

When different teams are exploring pieces of the same future.

Or when your organisation needs someone to say:

We do not know the answer yet, but this is where we should look.

A better future often begins before there is a roadmap.


DO IT. PROVE IT. EARN IT.

DO IT

Lead a real strategic frontier.

PROVE IT

Show the mandate, multiple owners, different searches, honest stops, approved opportunities, and coherent strategic return.

EARN IT

Show that distributed exploration created a direction the organisation could act on.


==================================================
PIONEER
==================================================

HERO

PIONEER

Turn a strategic frontier into a portfolio of solutions that can work together.

A Pioneer does not simply build a bigger prototype.

They coordinate multiple builds, capabilities, experiments, and dependencies so an organisation can turn strategic possibility into validated reality.

PROFESSIONAL FUTURE-PROOFING

Build and validate strategic capability across multiple projects.

THE PIONEER'S QUESTION

How do many promising builds become something the organisation can actually make work together?


01 CAN YOU PROVE IT?

A collection of successful prototypes is not automatically a strategic capability.

In the current Future-Proofing standard, Pioneer-level evidence includes:

- Leading 10+ people across a portfolio of builds
- Coordinating multiple teams, systems, experiments, and dependencies
- Validating solutions against a shared strategic priority
- Showing that the portfolio works together rather than only in isolation
- Reaching at least US$1 million in validated strategic value

PORTFOLIO + INTEGRATION + EXPERIMENTS + DEPENDENCIES + VALIDATED VALUE

The proof is not how many prototypes were built.

The proof is that the organisation can make the whole system work.


02 HOW A PIONEER WORKS

IT STARTS WITH CARE.

You care that the organisation's big ambition becomes more than disconnected pilots.

What if these prototypes could work together?

What if one shared capability could unlock several projects?

What if we stop scaling the wrong thing too early?

A Pioneer looks across builds.

They identify shared dependencies.

They test how different parts interact.

They create shared capability where it is needed.

And they make honest decisions about what should stop, continue, integrate, or scale.


03 PIONEER AND FUTURE-PROOFING

AI makes prototypes dramatically easier to produce.

That can create a new problem.

An organisation full of impressive pilots that do not add up to anything.

Pioneer value lies in integration, evidence, shared capability, and portfolio judgment.

The future-proof organisation does not only experiment faster.

It learns how to turn experiments into systems that can actually work together.


04 THE HUMAN SIDE

One prototype works.

Another works.

A third looks brilliant.

Then they collide.

They depend on different data, systems, standards, budgets, workflows, or teams.

The temptation is to keep adding projects because visible activity feels like progress.

A Pioneer has to ask a harder question:

Are we building a portfolio that works, or collecting successful demos?


05 STORIES IN ACTION

IBM SYSTEM/360

The computer programme that replaced multiple incompatible machines with one shared architecture

By the early 1960s, IBM sold several computer product lines that were not compatible with one another.

Moving from one machine to another could require customers to rewrite software and replace major parts of their technology.

IBM decided to replace that fragmented world with something much more ambitious.

One compatible family of computers.

The System/360 programme had to coordinate processors with different levels of performance, peripherals, operating systems, software compatibility, and many different customer requirements.

It involved major technical and organisational risk.

But the result became a shared architecture that influenced generations of computing systems.

WHY THIS MATTERS TO A PIONEER

This was not one prototype becoming better. Multiple technologies, teams, products, and dependencies had to become one coherent system.

REFLECTION

Where is your organisation building several successful things that still cannot work together?


GEORGE MUELLER AND APOLLO ALL-UP TESTING

The NASA leader who pushed a complex system to be tested as a whole

The Saturn V rocket was one of the most complex machines ever built.

A traditional approach would have tested each stage separately through several flights before attempting a complete mission configuration.

George Mueller pushed NASA toward a much more integrated approach known as all-up testing.

Instead of waiting for every stage to complete a long sequence of separate flight tests, major stages and systems were tested together.

The approach increased risk in each individual test.

But it also allowed NASA to discover integration problems sooner and move much faster toward a system that could work as a whole.

WHY THIS MATTERS TO A PIONEER

When the real challenge is integration, proving that each component works separately is not enough.

REFLECTION

Which parts of your portfolio have only been proven alone, but never proven together?


AND WHAT ABOUT YOURS?

Your Pioneer moment may begin when your organisation already has several promising solutions.

But they use different data.

Different systems.

Different assumptions.

Different owners.

And someone finally asks:

How do these become one capability instead of ten separate pilots?

That is where strategic building begins.


DO IT. PROVE IT. EARN IT.

DO IT

Coordinate a real strategic build portfolio.

PROVE IT

Show the builds, dependencies, experiments, integration, and validated strategic value.

EARN IT

Show that the portfolio works beyond individual demonstrations.


==================================================
STRATEGOS
==================================================

HERO

STRATEGOS

Turn strategic change into sustained, transformational impact.

A Strategos works when multiple solutions, projects, and teams already exist.

The challenge is making them add up to real organisational change, adoption, performance, and measurable value.

PROFESSIONAL FUTURE-PROOFING

Lead strategic adoption and benefit at scale.

THE STRATEGOS' QUESTION

How do many changes become one sustained strategic impact?


01 CAN YOU PROVE IT?

Launching a transformation programme is not the same as transforming an organisation.

In the current Future-Proofing standard, Strategos-level evidence includes:

- Leading 10+ people across a strategic priority
- Coordinating multiple solutions and change efforts
- Driving adoption across the system
- Showing sustained change in behaviour, operating practice, or performance
- Achieving at least US$1 million in independently confirmed impact

STRATEGIC PRIORITY + MULTIPLE CHANGES + ADOPTION + SUSTAINED CHANGE + CONFIRMED IMPACT

The proof is not the transformation programme.

The proof is what changed because of it.


02 HOW A STRATEGOS WORKS

IT STARTS WITH CARE.

You care whether transformation actually changes the organisation.

What if all these projects could add up to something bigger?

What if adoption is the real bottleneck, not technology?

What if the dashboard says success, but people's behaviour has not actually changed?

A Strategos connects initiatives to a strategic outcome.

They align deployment, incentives, operating systems, leadership attention, measurement, and learning.

And they keep asking whether the organisation is genuinely changing or simply running more change activity.


03 STRATEGOS AND FUTURE-PROOFING

Buying new technology is becoming easier.

Building AI is becoming easier.

Getting consultants to design a strategy is possible.

The harder problem is changing how thousands of people actually work.

The Strategos creates conditions where Future-Proofing becomes organisational practice rather than a collection of isolated initiatives.

Transformation is not the number of initiatives launched.

It is the change that remains after the initiative is over.


04 THE HUMAN SIDE

Transformation creates fatigue.

Different teams want different things.

People may comply without changing.

Metrics may look green while real behaviour stays the same.

Success may be difficult to attribute because many changes are happening at once.

And the bigger the programme becomes, the easier it is to lose contact with the people living through it.

A strong Strategos keeps coming back to one question:

Did this actually change how the organisation works, and did that change create real value?


05 STORIES IN ACTION

TAIICHI OHNO AND THE TOYOTA PRODUCTION SYSTEM

The manufacturing leader who helped turn new production ideas into a way an entire organisation worked

After World War II, Toyota could not simply copy the large-scale production systems used by much bigger American manufacturers.

Through repeated experiments, Taiichi Ohno and others developed practices that became part of the Toyota Production System.

These included Just-in-Time production, jidoka, kanban, and new ways of identifying and reducing waste.

But inventing those practices was only the beginning.

The system spread from individual areas to plants, across Toyota, and eventually into supplier relationships and international operations.

That required changes to workflows, standards, training, logistics, management behaviour, and everyday operating habits.

WHY THIS MATTERS TO A STRATEGOS

The achievement was not one new process. Many changes became a sustained operating system used across an organisation.

REFLECTION

Which transformation in your organisation is still a project, when it needs to become the way people work?


SATYA NADELLA AND MICROSOFT'S TRANSFORMATION

The CEO who had to change strategy, business model, and culture at the same time

When Satya Nadella became CEO of Microsoft, the company faced major shifts in how technology was being built, sold, and consumed.

The challenge was not one product.

Microsoft had to move toward cloud services and subscription models while also changing how teams worked together, how leaders thought about learning, and how the organisation approached customers and innovation.

The strategic shift required many business units, products, incentives, and behaviours to move in a more coherent direction.

Over time, cloud services became central to Microsoft's business and the company's internal culture became part of the transformation story.

WHY THIS MATTERS TO A STRATEGOS

Strategic transformation happens when business model, technology, culture, and behaviour reinforce the same direction.

REFLECTION

Are the different parts of your transformation reinforcing one another, or asking people to move in different directions?


ALAN MULALLY AND ONE FORD

The turnaround effort that brought a fragmented global company around one shared operating system

When Alan Mulally became CEO of Ford, the company was divided across regions, brands, functions, and competing priorities.

Mulally introduced the One Ford approach.

The goal was not only to cut costs or launch new products.

Ford needed leaders across the business to operate around one plan, one set of priorities, and a common view of problems.

Regular Business Plan Review meetings made performance and problems visible across the organisation.

Leaders were expected to surface issues instead of hiding them.

Regional and functional efforts were brought into a more integrated global system.

The turnaround combined portfolio choices, operating discipline, accountability, and cultural change.

WHY THIS MATTERS TO A STRATEGOS

A transformation becomes real when separate efforts start behaving like one organisation.

REFLECTION

Does everyone in your transformation share the same reality, or does every team still have its own version of the truth?


AND WHAT ABOUT YOURS?

Your Strategos moment may begin after the organisation has already launched dozens of initiatives.

The question is no longer:

What else should we start?

It becomes:

How do all of these changes add up to something people can actually feel in the way the organisation works?

Strategic impact appears when change stops being an event and becomes normal practice.


DO IT. PROVE IT. EARN IT.

DO IT

Lead a real strategic transformation.

PROVE IT

Show coordinated adoption, sustained operating change, and independently confirmed impact.

EARN IT

Show that the combined change survives beyond the programme itself.


==================================================
FINAL CTA FOR EVERY ROLE
==================================================

Do NOT use:

Explore More Roles
Explore This Role
Read More Roles

End the drawer with:

READY TO FUTURE-PROOF YOURSELF?

Knowing where you stand is only the beginning.

The next step is to practise these capabilities through real Impact Projects, build evidence, and create measurable value.

BUTTON:

START MY FUTURE-PROOFING JOURNEY

Open the existing Leadapreneur WhatsApp destination already configured in the project.

DO NOT invent a phone number.

Prefilled WhatsApp message:

Hi Leadapreneur Team, I've completed the Leadapreneur Future-Proofing Check and I'd like to start future-proofing myself.

Are there any programmes I can join personally, or programmes that could also support my team or organisation?

I'd love to learn more about the options available.


==================================================
FINAL GOVERNANCE RULE
==================================================

The content above is canonical.

Do not modify it to fit the UI.

Do not regenerate role copy.

Do not replace it with shorter AI-generated summaries.

Do not change story assignments.

Do not change the quiz questions, scoring, recency logic, or result calculation.

If the content feels too long:

CHANGE THE DESIGN.

Do not change the content.
`,qr=["explorer","builder","leader","navigator","pathfinder","tactician","captain","pioneer","strategos"],vi={explorer:"EXPLORER",builder:"BUILDER",leader:"LEADER",navigator:"NAVIGATOR",pathfinder:"PATHFINDER",tactician:"TACTICIAN",captain:"CAPTAIN",pioneer:"PIONEER",strategos:"STRATEGOS"};function gt(r,m){if(!r)throw new Error(`Canonical role copy error: ${m}`)}function ea(r){return r.trim().split(/\n\s*\n/).map(m=>m.trim()).filter(Boolean)}function $n(r,m,A){const f=r.indexOf(m);gt(f>=0,`Missing section ${m}`);const w=r.indexOf(`

`,f);gt(w>=0,`Missing body for ${m}`);const R=A?r.indexOf(`

${A}`,w+2):r.length;return gt(R>=0,`Missing section ${A}`),r.slice(w+2,R).trim()}function Mv(r){const m=`==================================================
${vi[r]}
==================================================`,A=Ir.indexOf(m);gt(A>=0,`Missing role ${vi[r]}`);const f=qr[qr.indexOf(r)+1],w=f?`==================================================
${vi[f]}
==================================================`:`==================================================
FINAL CTA FOR EVERY ROLE
==================================================`,R=Ir.indexOf(w,A+m.length);return gt(R>=0,`Missing end marker for ${vi[r]}`),Ir.slice(A+m.length,R).trim()}function Hv(r){const m=ea($n(r,"HERO","01 CAN YOU PROVE IT?")),A=m.indexOf("PROFESSIONAL FUTURE-PROOFING"),f=m.findIndex(w=>w.startsWith("THE ")&&w.endsWith("QUESTION"));return gt(A>1,"Malformed hero professional future-proofing copy"),gt(f>A,"Malformed hero question copy"),{name:m[0],promise:m[1],introduction:m.slice(2,A),professionalFutureProofing:m[A+1],questionLabel:m[f],question:m[f+1]}}function zv(r){const m=ea($n(r,"01 CAN YOU PROVE IT?","02 HOW ")),A=m.findIndex(R=>R.startsWith("- "));gt(A>=0,"Missing proof signals");const f=m[A].split(`
`).map(R=>R.replace(/^-\s*/,"").trim()),w=m[A+1];return gt(w,"Missing proof formula"),{introduction:m.slice(0,A),signals:f,formula:w,closing:m.slice(A+2)}}function Lv(r){return ea(r).map(m=>({kind:/[A-Z]/.test(m)&&m===m.toUpperCase()?"heading":"paragraph",text:m}))}function Yv(r,m){const A=Cv[r];return A.map((f,w)=>{var E;const R=m.indexOf(f.name);gt(R>=0,`Missing story ${f.name}`);const q=(E=A[w+1])==null?void 0:E.name,I=q?m.indexOf(`

${q}`,R):m.length;gt(I>=0,`Missing end of story ${f.name}`);const D=ea(m.slice(R+f.name.length,I)),z=D.findIndex(M=>M.startsWith("WHY THIS MATTERS TO ")),S=D.indexOf("REFLECTION");return gt(z>0,`Missing why-it-matters for ${f.name}`),gt(S>z,`Missing reflection for ${f.name}`),{name:f.name,context:D[0],narrative:D.slice(1,z),whyHeading:D[z],whyItMatters:D.slice(z+1,S),reflection:D.slice(S+1),source:{label:f.label,url:f.url},image:{...f.image,credit:f.image.credit??{label:f.label,url:f.url,license:"Source page"}}}})}function Bv(r){const m=ea($n(r,"DO IT. PROVE IT. EARN IT.")),A=m.indexOf("DO IT"),f=m.indexOf("PROVE IT"),w=m.indexOf("EARN IT");return gt(A>=0&&f>A&&w>f,"Malformed practice copy"),{doIt:m.slice(A+1,f),proveIt:m.slice(f+1,w),earnIt:m.slice(w+1)}}function Iv(r){const m=Mv(r),A=vi[r],f=$n(m,"05 STORIES IN ACTION","AND WHAT ABOUT YOURS?");return{hero:Hv(m),canYouProveIt:zv(m),howItWorks:Lv($n(m,"02 HOW ",`03 ${A} AND FUTURE-PROOFING`)),futureProofing:ea($n(m,`03 ${A} AND FUTURE-PROOFING`,"04 THE HUMAN SIDE")),humanSide:ea($n(m,"04 THE HUMAN SIDE","05 STORIES IN ACTION")),stories:Yv(r,f),whatAboutYours:ea($n(m,"AND WHAT ABOUT YOURS?","DO IT. PROVE IT. EARN IT.")),practice:Bv(m)}}const qv=Object.fromEntries(qr.map(r=>[r,Iv(r)])),Gv="Kezia",Vv=!0,Rm={explorer:3,builder:2,leader:1,navigator:2,pathfinder:0,tactician:2,captain:1,pioneer:2,strategos:0};function Um(r,m){const A=r===null?"u":r?"y":"n",f=An.map(w=>m[w]??0).join("");return`v1.${A}.${f}`}function Xv(r){if(!r)return null;const m=/^v1\.([ynu])\.([0-3]{9})$/.exec(r);if(!m)return null;const A=m[2].split("").map(Number),f=Object.fromEntries(An.map((w,R)=>[w,A[R]]));return{gatewayAnswer:m[1]==="u"?null:m[1]==="y",scores:f}}function Dm(r,m){const A=new URL(window.location.href);return A.search="",A.hash="",A.searchParams.set("result",Um(r,m)),A.toString()}async function Qv(r){var f;if((f=navigator.clipboard)!=null&&f.writeText){await navigator.clipboard.writeText(r);return}const m=document.createElement("textarea");m.value=r,m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.select();const A=document.execCommand("copy");if(m.remove(),!A)throw new Error("Copy was unavailable")}function Xr(){return o.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M5 12h13M13 6l6 6-6 6"})})}function bl({light:r=!1}){return o.jsxs("div",{className:`brand${r?" brand--light":""}`,"aria-label":"Leadapreneur Future-Proofing Check",children:[o.jsx("strong",{children:"LEADAPRENEUR"}),o.jsx("span",{children:"Future-Proofing Check"})]})}function Cm({children:r,onClick:m,disabled:A=!1,type:f="button"}){return o.jsxs("button",{className:"primary-button",type:f,onClick:m,disabled:A,children:[o.jsx("span",{children:r}),o.jsx(Xr,{})]})}function Fu({onClick:r}){return o.jsx("button",{className:"text-button back-button",type:"button",onClick:r,children:"← Back"})}function Mm({countdown:r}){return o.jsxs("div",{className:"transition-status","aria-live":"polite",children:[o.jsxs("strong",{children:["Continuing in ",r]}),o.jsx("span",{className:"transition-status__desktop",children:"Click anywhere to continue"}),o.jsx("span",{className:"transition-status__mobile",children:"Tap anywhere to continue"})]})}function Hm(r){const[m,A]=ge.useState(10),f=ge.useRef(!1),w=ge.useRef(r);w.current=r;const R=()=>{f.current||(f.current=!0,w.current())};return ge.useEffect(()=>{const q=Date.now(),I=window.setInterval(()=>{const z=Math.floor((Date.now()-q)/1e3);A(Math.max(0,10-z))},200),D=window.setTimeout(R,1e4);return()=>{window.clearInterval(I),window.clearTimeout(D)}},[]),{countdown:m,complete:R}}function Zv({onContinue:r}){return o.jsxs("main",{className:"intro-screen screen-enter",id:"main-content",children:[o.jsxs("div",{className:"intro-world","aria-hidden":"true",children:[o.jsx("img",{className:"intro-world__scene",src:ut.futureWorld,alt:""}),o.jsx("div",{className:"intro-world__orbit intro-world__orbit--one"}),o.jsx("div",{className:"intro-world__orbit intro-world__orbit--two"}),o.jsx("div",{className:"intro-world__veil"})]}),o.jsx("header",{className:"intro-header",children:o.jsx(bl,{})}),o.jsxs("section",{className:"intro-copy","aria-labelledby":"intro-title",children:[o.jsx("p",{className:"eyebrow",children:"A professional evidence check"}),o.jsxs("h1",{id:"intro-title",children:["THE WORLD OF WORK",o.jsx("br",{}),"IS CHANGING FAST"]}),o.jsx("p",{className:"intro-lede",children:"AI is changing how we work, what organisations need, and where professionals create value."}),o.jsx("h2",{children:"But how future proof are you?"}),o.jsx("p",{className:"intro-explainer",children:"Being future proof is not about knowing everything about AI."}),o.jsx("p",{className:"intro-capabilities__lead",children:"It is about your ability to:"}),o.jsxs("div",{className:"intro-capabilities","aria-label":"Future-Proofing capabilities",children:[o.jsxs("article",{"data-family":"explore",children:[o.jsx("strong",{children:"EXPLORE"}),o.jsx("p",{children:"Find opportunities worth pursuing."})]}),o.jsxs("article",{"data-family":"build",children:[o.jsx("strong",{children:"BUILD"}),o.jsx("p",{children:"Turn possibilities into solutions that work."})]}),o.jsxs("article",{"data-family":"lead",children:[o.jsx("strong",{children:"LEAD"}),o.jsx("p",{children:"Bring solutions into use and create real impact."})]})]}),o.jsx("p",{className:"intro-growth",children:"As your capability grows, so does the scale of the impact you can create."}),o.jsx("div",{className:"intro-action-row",children:o.jsx(Cm,{onClick:r,children:"CHECK HOW FUTURE PROOF I AM"})})]}),o.jsxs("div",{className:"scroll-cue","aria-hidden":"true",children:[o.jsx("span",{}),"Discover your evidence"]})]})}function zm({activeTier:r}){return o.jsxs("div",{className:"mini-role-grid","aria-label":"Nine Leadapreneur capability roles",children:[o.jsxs("div",{className:"mini-role-grid__headings","aria-hidden":"true",children:[o.jsx("span",{children:"Explore"}),o.jsx("span",{children:"Build"}),o.jsx("span",{children:"Lead"})]}),o.jsx("div",{className:"mini-role-grid__roles",children:bi.map(m=>o.jsxs("article",{className:`mini-role${r===m.tier?" mini-role--active":""}${r&&r!==m.tier?" mini-role--dim":""}`,"data-family":m.family,"aria-label":`${m.name}, ${m.familyLabel}, ${m.scope}`,children:[o.jsx("div",{className:"mini-role__world",style:{backgroundImage:`url(${m.realmImage})`,backgroundPosition:m.realmPosition},"aria-hidden":"true"}),o.jsx("img",{src:m.image,alt:"",style:{objectPosition:m.avatarPosition}}),o.jsx("strong",{children:m.name})]},m.id))})]})}function kv({activeScope:r}){const m=[{number:1,label:"Create impact yourself"},{number:2,label:"Enable other owners"},{number:3,label:"Shape strategic scale"}],A=bi.filter(f=>f.tier===r);return o.jsxs("div",{className:"transition-scope-map",children:[o.jsx("div",{className:"transition-scope-map__steps","aria-label":"Future-proofing scope progression",children:m.map(f=>o.jsx("div",{className:f.number===r?"is-active":f.number<r?"is-complete":"",children:o.jsx("strong",{children:f.label})},f.number))}),o.jsx("div",{className:"transition-scope-map__roles","aria-label":"Roles in this scope",children:A.map(f=>o.jsxs("div",{"data-family":f.family,children:[o.jsx("span",{className:"transition-scope-map__portrait","aria-hidden":"true",children:o.jsx("img",{src:f.image,alt:"",style:{objectPosition:f.avatarPosition}})}),o.jsx("strong",{children:f.name}),o.jsx("small",{children:f.familyLabel})]},f.id))})]})}function Kv({name:r,setName:m,onBack:A,onStart:f}){const w=r.trim();return o.jsxs("main",{className:"standard-screen screen-enter",id:"main-content",children:[o.jsxs("header",{className:"standard-header",children:[o.jsx(bl,{}),o.jsx("button",{className:"text-button",onClick:A,children:"← Back"})]}),o.jsxs("div",{className:"standard-layout",children:[o.jsxs("section",{className:"standard-copy","aria-labelledby":"standard-title",children:[o.jsx("p",{className:"eyebrow",children:"Evidence, not instinct"}),o.jsxs("h1",{id:"standard-title",children:["THIS IS NOT A",o.jsx("br",{}),"PERSONALITY TEST"]}),o.jsxs("div",{className:"standard-lede",children:[o.jsx("p",{children:"We are not asking what you think you could do."}),o.jsx("p",{children:"We are looking at what you have actually demonstrated in your professional work."})]}),o.jsxs("div",{className:"proof-cues","aria-label":"Evidence standard",children:[o.jsxs("span",{children:[o.jsx("i",{}),"REAL WORK"]}),o.jsxs("span",{children:[o.jsx("i",{}),"REAL EVIDENCE"]}),o.jsxs("span",{children:[o.jsx("i",{}),"REAL IMPACT"]})]}),o.jsxs("form",{onSubmit:R=>{R.preventDefault(),w&&f()},children:[o.jsx("label",{htmlFor:"participant-name",children:"Before we start, what should we call you?"}),o.jsxs("div",{className:"name-field",children:[o.jsx("input",{id:"participant-name",name:"participant-name",type:"text",autoComplete:"given-name",maxLength:42,value:r,onChange:R=>m(R.target.value),placeholder:"Your name",autoFocus:!0}),o.jsx("span",{"aria-hidden":"true",children:"↗"})]}),w?o.jsxs("div",{className:"ready-panel ready-panel--visible","aria-live":"polite",children:[o.jsxs("p",{className:"ready-name",children:["Ready, ",w,"?"]}),o.jsx("h2",{children:"Think about your professional work within the last 36 months."}),o.jsx("p",{children:"Answer based on what you actually completed, not what you intended to do."})]}):null,o.jsx(Cm,{type:"submit",disabled:!w,children:"I'M READY"})]})]}),o.jsxs("aside",{className:"standard-visual",children:[o.jsx("div",{className:"standard-visual__world",style:{backgroundImage:`url(${ut.futureWorld})`},"aria-hidden":"true"}),o.jsx("div",{className:"standard-visual__topline",children:o.jsx("span",{children:"The role system"})}),o.jsx(zm,{}),o.jsx("p",{className:"standard-visual__note",children:"As your capability grows, so does the scale of the impact you can create."})]})]})]})}function Jv({onComplete:r,onBack:m}){const[A,f]=ge.useState(0),{countdown:w,complete:R}=Hm(r);ge.useEffect(()=>{const D=window.matchMedia("(prefers-reduced-motion: reduce)").matches?[20,40,60,80]:[160,650,1250,2050],z=[window.setTimeout(()=>f(1),D[0]),window.setTimeout(()=>f(2),D[1]),window.setTimeout(()=>f(3),D[2]),window.setTimeout(()=>f(4),D[3])];return()=>z.forEach(window.clearTimeout)},[]);const q=I=>{I.target===I.currentTarget&&(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),R())};return o.jsxs("main",{className:`start-transition start-transition--${A}`,id:"main-content",role:"button",tabIndex:0,"aria-label":"Continue to the first question",onClick:R,onKeyDown:q,children:[o.jsx("div",{className:"start-transition__world",style:{backgroundImage:`url(${ut.transitionWorld})`},"aria-hidden":"true"}),o.jsx("div",{className:"start-transition__wash","aria-hidden":"true"}),o.jsxs("header",{className:"transition-header",children:[o.jsxs("div",{className:"header-nav",children:[o.jsx(bl,{}),o.jsx("span",{onClick:I=>I.stopPropagation(),children:o.jsx(Fu,{onClick:m})})]}),o.jsx(Qr,{current:1,answered:0})]}),o.jsxs("div",{className:"start-transition__copy","aria-live":"polite",children:[o.jsx("p",{children:"THINK ABOUT YOUR PROFESSIONAL WORK"}),o.jsx("h1",{children:"OVER THE LAST 36 MONTHS..."}),o.jsx("div",{className:"start-transition__role-map",children:o.jsx(zm,{activeTier:A>=4?1:void 0})}),o.jsx("div",{className:"start-transition__tier",children:o.jsx("h2",{children:"LET'S BEGIN WITH WHAT YOU'VE CREATED YOURSELF."})})]}),o.jsx(Mm,{countdown:w})]})}function Qr({current:r,answered:m}){return o.jsxs("div",{className:"question-progress","aria-label":`Question ${r} of 10. ${m} answered.`,children:[o.jsxs("div",{className:"question-progress__label",children:[o.jsxs("strong",{children:[r," OF 10"]}),o.jsxs("span",{children:[m," answered"]})]}),o.jsx("div",{className:"question-progress__segments","aria-hidden":"true",children:Vr.map(A=>o.jsx("span",{className:`${A.number<=m?"is-answered ":""}${A.number===r?"is-current":""}`},A.number))})]})}function Wv({question:r,answered:m,selectedScore:A,onBack:f,onAnswer:w}){const R=r.role?vl[r.role]:null,q=(R==null?void 0:R.realmImage)??ut.questionWorld,I=(R==null?void 0:R.realmPosition)??"center";return o.jsxs("main",{className:"quiz-screen","data-family":R==null?void 0:R.family,"data-question":r.number,id:"main-content",children:[o.jsx("div",{className:"question-world",style:{backgroundImage:`url(${q})`,backgroundPosition:I},"aria-hidden":"true",children:R?o.jsx("img",{className:"question-world__role",src:R.image,alt:"",style:{objectPosition:R.avatarPosition}}):null}),o.jsxs("header",{className:"quiz-header",children:[o.jsxs("div",{className:"header-nav",children:[o.jsx(bl,{}),o.jsx(Fu,{onClick:f})]}),o.jsx(Qr,{current:r.number,answered:m})]}),o.jsx("section",{className:"question-shell screen-enter",children:o.jsxs("div",{className:"question-card",children:[o.jsxs("div",{className:"question-card__topline",children:[o.jsxs("p",{children:["QUESTION ",r.number]}),R?o.jsx("span",{"data-family":R.family,children:R.name}):o.jsx("span",{children:"Impact Project"})]}),o.jsxs("div",{className:"question-card__body",children:[o.jsxs("div",{className:"question-card__prompt",children:[o.jsx("h1",{children:r.title}),o.jsx("ul",{className:"question-criteria",children:r.criteria.map(D=>o.jsx("li",{children:D},D))})]}),o.jsxs("div",{className:"answer-panel",children:[o.jsx("p",{children:"When did you most recently complete this evidence?"}),o.jsx("div",{className:"recency-answer-grid","aria-label":"Choose the timing of your most recent completed evidence",children:Vy.map(D=>o.jsxs("button",{className:`recency-answer${A===D.score?" is-selected":""}`,"aria-pressed":A===D.score,onClick:()=>w(D.score),children:[o.jsx("span",{"aria-hidden":"true",children:D.score===0?"○":"✓"}),o.jsx("strong",{children:D.label})]},D.label))})]})]})]})},r.number)]})}function Fv({tier:r,onContinue:m,onBack:A}){const[f,w]=ge.useState(0),{countdown:R,complete:q}=Hm(m),I=r===2?{eyebrow:"YOU'VE CHECKED HOW YOU CREATE IMPACT YOURSELF",title:"Next, let's see how you help others create it."}:{eyebrow:"WHAT HAPPENS WHEN THE CHALLENGE GETS BIGGER?",title:"Now we move from individual owners to strategic scale."};ge.useEffect(()=>{const S=window.matchMedia("(prefers-reduced-motion: reduce)").matches?[20,40]:[320,1050],E=[window.setTimeout(()=>w(1),S[0]),window.setTimeout(()=>w(2),S[1])];return()=>E.forEach(window.clearTimeout)},[]);const D=z=>{z.target===z.currentTarget&&(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),q())};return o.jsxs("main",{className:`tier-transition tier-transition--${f}`,id:"main-content",role:"button",tabIndex:0,"aria-label":"Continue to the next question",onClick:q,onKeyDown:D,children:[o.jsx("div",{className:"tier-transition__background",style:{backgroundImage:`url(${ut.transitionWorld})`},"aria-hidden":"true"}),o.jsx("div",{className:"tier-transition__overlay","aria-hidden":"true"}),o.jsxs("header",{className:"transition-header",children:[o.jsxs("div",{className:"header-nav",children:[o.jsx(bl,{}),o.jsx("span",{onClick:z=>z.stopPropagation(),children:o.jsx(Fu,{onClick:A})})]}),o.jsx(Qr,{current:r===2?5:8,answered:r===2?4:7})]}),o.jsxs("section",{children:[o.jsx("p",{children:I.eyebrow}),o.jsx("h1",{children:I.title}),o.jsx(kv,{activeScope:r}),o.jsx("button",{className:"text-button",onClick:q,children:"Continue now →"})]}),o.jsx(Mm,{countdown:R})]})}function Pv({score:r}){return o.jsx("div",{className:"practice-indicator","aria-label":`${r} of 27 recency points demonstrated`,children:Array.from({length:27},(m,A)=>o.jsx("span",{className:A<r?"is-filled":"",style:{"--delay":`${A*28}ms`}},A))})}function $v({role:r,score:m,onOpen:A}){return o.jsxs("button",{className:"result-role","data-family":r.family,"data-tier":r.tier,"data-role":r.id,onClick:A,"aria-label":`Open ${r.name}. ${Na(m)}.`,children:[o.jsxs("div",{className:"result-role__art",children:[o.jsx("div",{className:"result-role__world",style:{backgroundImage:`url(${r.realmImage})`,backgroundPosition:r.realmPosition},"aria-hidden":"true"}),o.jsx("img",{src:r.image,alt:"",style:{objectPosition:r.avatarPosition}})]}),o.jsxs("div",{className:"result-role__copy",children:[o.jsxs("span",{children:[r.familyLabel," · ",r.scope]}),o.jsx("strong",{children:r.name}),o.jsx("small",{children:Na(m)})]}),o.jsx("div",{className:"result-role__points","aria-hidden":"true",children:[1,2,3].map(f=>o.jsx("i",{className:f<=m?"is-filled":""},f))}),o.jsx("span",{className:"result-role__open","aria-hidden":"true",children:"↗"})]})}function e0({story:r}){return o.jsxs("details",{className:"story-card",children:[o.jsxs("summary",{children:[o.jsx("span",{className:"story-card__marker","aria-hidden":"true"}),o.jsx("span",{className:"story-card__thumbnail","aria-hidden":"true",children:o.jsx("img",{src:r.image.src,alt:"",loading:"lazy",decoding:"async",style:{objectPosition:r.image.position}})}),o.jsxs("span",{children:[o.jsx("strong",{children:r.name}),o.jsx("small",{children:r.context}),o.jsx("span",{className:"story-card__teaser",children:r.narrative[0]})]}),o.jsxs("span",{className:"story-card__affordance","aria-hidden":"true",children:[o.jsx("b",{children:"Read story"}),o.jsx("i",{children:"+"})]})]}),o.jsxs("div",{className:"story-card__body",children:[o.jsxs("figure",{className:"story-card__visual",style:{"--story-image":`url(${r.image.src})`},children:[o.jsx("img",{src:r.image.src,alt:r.image.alt,loading:"lazy",decoding:"async",style:{objectPosition:r.image.position}}),r.image.credit?o.jsxs("figcaption",{children:["Image: ",o.jsx("a",{href:r.image.credit.url,target:"_blank",rel:"noreferrer",children:r.image.credit.label})," · ",r.image.credit.license]}):null]}),o.jsxs("div",{className:"story-card__narrative",children:[r.narrative.map(m=>o.jsx("p",{children:m},m)),o.jsxs("div",{className:"story-card__why",children:[o.jsx("span",{children:r.whyHeading}),r.whyItMatters.map(m=>o.jsx("p",{children:m},m))]}),o.jsxs("div",{className:"story-card__reflection",children:[o.jsx("span",{children:"REFLECTION"}),r.reflection.map(m=>o.jsx("p",{children:m},m))]}),o.jsxs("a",{className:"story-card__source",href:r.source.url,target:"_blank",rel:"noreferrer",children:["Source: ",r.source.label," ↗"]})]})]})]})}function _m(r){const m=[];return r.forEach(A=>{A.kind==="heading"?m.push({heading:A.text,paragraphs:[]}):m.length&&m[m.length-1].paragraphs.push(A.text)}),m}function t0({role:r,score:m,onClose:A}){const f=ge.useRef(null),w=qv[r.id],R=w.howItWorks.findIndex(S=>S.kind==="heading"&&S.text==="IT STARTS WITH CARE."),q=R>=0?w.howItWorks.slice(0,R):w.howItWorks,I=R>=0?w.howItWorks.slice(R):[],D=_m(q),z=_m(I);return ge.useEffect(()=>{var E;(E=f.current)==null||E.focus();const S=M=>{M.key==="Escape"&&A()};return document.addEventListener("keydown",S),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",S),document.body.classList.remove("modal-open")}},[A]),o.jsx("div",{className:"role-modal",role:"dialog","aria-modal":"true","aria-labelledby":"role-modal-title",onMouseDown:S=>{S.target===S.currentTarget&&A()},children:o.jsxs("article",{"data-family":r.family,children:[o.jsx("button",{className:"role-modal__close",onClick:A,ref:f,"aria-label":"Close role details",children:"×"}),o.jsxs("div",{className:"role-modal__content",children:[o.jsxs("header",{className:"role-detail-hero",style:{"--role-realm-position":r.realmPosition},children:[o.jsx("div",{className:"role-detail-hero__realm",style:{backgroundImage:`url(${r.realmImage})`},"aria-hidden":"true"}),o.jsx("div",{className:"role-detail-hero__wash","aria-hidden":"true"}),o.jsx("img",{className:"role-detail-hero__avatar",src:r.image,alt:"",style:{objectPosition:r.avatarPosition}}),o.jsxs("div",{className:"role-detail-hero__content",children:[o.jsxs("p",{className:"eyebrow",children:[r.familyLabel," · Tier ",r.tier]}),o.jsx("h2",{id:"role-modal-title",children:w.hero.name}),o.jsx("p",{className:"role-modal__meaning",children:w.hero.promise}),o.jsx("div",{className:"role-detail-copy role-detail-hero__introduction",children:w.hero.introduction.map(S=>o.jsx("p",{children:S},S))}),o.jsxs("div",{className:"role-detail-hero__prompts",children:[o.jsxs("article",{children:[o.jsx("span",{children:"PROFESSIONAL FUTURE-PROOFING"}),o.jsx("p",{children:w.hero.professionalFutureProofing})]}),o.jsxs("article",{children:[o.jsx("span",{children:w.hero.questionLabel}),o.jsx("p",{children:w.hero.question})]})]}),o.jsxs("div",{className:"role-modal__state",children:[o.jsx("span",{children:Na(m)}),o.jsx("div",{"aria-hidden":"true",children:[1,2,3].map(S=>o.jsx("i",{className:S<=m?"is-filled":""},S))})]})]})]}),o.jsxs("section",{className:"role-detail-section role-detail-proof",children:[o.jsx("p",{className:"role-detail-section__index",children:"01"}),o.jsxs("div",{children:[o.jsx("h3",{children:"Can You Prove It?"}),o.jsx("div",{className:"role-detail-copy",children:w.canYouProveIt.introduction.map(S=>o.jsx("p",{children:S},S))}),o.jsx("ul",{children:w.canYouProveIt.signals.map(S=>o.jsx("li",{children:S},S))}),o.jsx("p",{className:"role-detail-formula",children:w.canYouProveIt.formula}),o.jsx("div",{className:"role-detail-copy",children:w.canYouProveIt.closing.map(S=>o.jsx("p",{children:S},S))})]})]}),o.jsxs("section",{className:"role-detail-section role-detail-how",children:[o.jsx("p",{className:"role-detail-section__index",children:"02"}),o.jsxs("div",{children:[o.jsxs("h3",{children:["How ",r.id==="explorer"?"an":"a"," ",r.name," Works"]}),o.jsx("div",{className:"role-behaviour-grid",children:D.map(S=>o.jsxs("article",{children:[o.jsx("h4",{children:S.heading}),S.paragraphs.map(E=>o.jsx("p",{children:E},E))]},S.heading))}),z.map(S=>o.jsxs("div",{className:"role-detail-care",children:[o.jsx("h4",{children:S.heading}),S.paragraphs.map(E=>o.jsx("p",{children:E},E))]},S.heading))]})]}),o.jsxs("section",{className:"role-detail-section role-detail-future",children:[o.jsx("p",{className:"role-detail-section__index",children:"03"}),o.jsxs("div",{children:[o.jsxs("h3",{children:[r.name," and Future-Proofing"]}),o.jsx("div",{className:"role-detail-copy",children:w.futureProofing.map(S=>o.jsx("p",{children:S},S))})]})]}),o.jsxs("section",{className:"role-detail-section role-detail-human",children:[o.jsx("p",{className:"role-detail-section__index",children:"04"}),o.jsxs("div",{children:[o.jsx("h3",{children:"The Human Side"}),o.jsx("div",{className:"role-detail-copy",children:w.humanSide.map(S=>o.jsx("p",{children:S},S))})]})]}),o.jsxs("section",{className:"role-detail-section role-detail-stories",children:[o.jsx("p",{className:"role-detail-section__index",children:"05"}),o.jsxs("div",{children:[o.jsx("h3",{children:"Stories in Action"}),o.jsx("div",{className:"story-list",children:w.stories.map(S=>o.jsx(e0,{story:S},S.name))})]})]}),o.jsxs("section",{className:"role-detail-section role-detail-better-world",children:[o.jsx("p",{className:"role-detail-section__index",children:"06"}),o.jsxs("div",{children:[o.jsx("h3",{children:"And What About Yours?"}),o.jsx("div",{className:"role-detail-copy",children:w.whatAboutYours.map(S=>o.jsx("p",{children:S},S))})]})]}),o.jsxs("section",{className:"role-detail-section role-detail-practice",children:[o.jsx("p",{className:"role-detail-section__index",children:"07"}),o.jsxs("div",{children:[o.jsx("h3",{children:"Do It. Prove It. Earn It."}),o.jsxs("div",{className:"practice-steps",children:[o.jsxs("article",{children:[o.jsx("span",{children:"DO IT"}),w.practice.doIt.map(S=>o.jsx("p",{children:S},S))]}),o.jsxs("article",{children:[o.jsx("span",{children:"PROVE IT"}),w.practice.proveIt.map(S=>o.jsx("p",{children:S},S))]}),o.jsxs("article",{children:[o.jsx("span",{children:"EARN IT"}),w.practice.earnIt.map(S=>o.jsx("p",{children:S},S))]})]})]})]}),o.jsx("footer",{className:"role-detail-footer",children:o.jsxs("div",{className:"role-journey-cta",children:[o.jsx("h3",{children:"READY TO FUTURE-PROOF YOURSELF?"}),o.jsx("p",{children:"Knowing where you stand is only the beginning."}),o.jsx("p",{children:"The next step is to practise these capabilities through real Impact Projects, build evidence, and create measurable value."}),o.jsxs("a",{className:"primary-button",href:jm,target:"_blank",rel:"noreferrer",children:[o.jsx("span",{children:"START MY FUTURE-PROOFING JOURNEY"}),o.jsx(Xr,{})]})]})})]})]})})}function n0(){const r=xm({participantName:Gv,completionDate:new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"long",year:"numeric"}).format(new Date),scores:Rm,resultUrl:Dm(Vv,Rm)});return o.jsxs("main",{className:"email-preview-page screen-enter",id:"main-content",children:[o.jsxs("header",{className:"email-preview-page__header",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Email design preview"}),o.jsx("h1",{children:"Your Leadapreneur Future-Proofing Result"})]}),o.jsxs("p",{children:["Desktop and mobile responsive · Sample participant: Kezia · Score: ",r.total,"/27"]})]}),o.jsxs("div",{className:"email-preview-page__canvas",children:[o.jsxs("div",{className:"email-preview-page__meta",children:[o.jsx("span",{children:"SUBJECT"}),o.jsx("strong",{children:"Your Leadapreneur Future-Proofing Result"})]}),o.jsx(Py,{model:r})]})]})}function a0({name:r,gatewayAnswer:m,scores:A,resultUrl:f,onClose:w}){const R=ge.useRef(null),[q,I]=ge.useState(""),[D,z]=ge.useState(""),[S,E]=ge.useState(!1),M=xm({participantName:r,completionDate:new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"long",year:"numeric"}).format(new Date),scores:A,resultUrl:f});ge.useEffect(()=>{var ae;(ae=R.current)==null||ae.focus();const ce=le=>{le.key==="Escape"&&w()};return document.addEventListener("keydown",ce),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",ce),document.body.classList.remove("modal-open")}},[w]);const Se=async ce=>{ce.preventDefault(),E(!0),z("");try{const ae=await fetch("/api/future-proofing-result-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ky(q,M,Um(m,A)))}),je=(ae.headers.get("content-type")??"").includes("application/json")?await ae.json():null;if(!Qy(ae.ok,je))throw new Error((je==null?void 0:je.message)||"Secure email delivery is not connected in this preview.");z("Your email and matching PDF have been sent. Please check your inbox.")}catch(ae){z(ae instanceof Error?ae.message:"Email delivery failed. Nothing was marked as sent.")}finally{E(!1)}};return o.jsx("div",{className:"email-result-modal",role:"dialog","aria-modal":"true","aria-labelledby":"email-result-title",onMouseDown:ce=>{ce.target===ce.currentTarget&&w()},children:o.jsxs("section",{children:[o.jsx("button",{className:"email-result-modal__close",type:"button",onClick:w,"aria-label":"Close email result",children:"×"}),o.jsx("p",{className:"eyebrow",children:"Keep your result"}),o.jsx("h2",{id:"email-result-title",children:"Get your result by email"}),o.jsx("p",{children:"Enter the email address where you want to receive the PDF report and interactive result link."}),o.jsxs("form",{onSubmit:Se,children:[o.jsx("label",{htmlFor:"result-email",children:"Email address"}),o.jsx("input",{ref:R,id:"result-email",type:"email",inputMode:"email",autoComplete:"email",required:!0,value:q,onChange:ce=>{I(ce.target.value),z("")},placeholder:"you@email.com"}),o.jsxs("button",{className:"primary-button",type:"submit",disabled:S,children:[o.jsx("span",{children:S?"SENDING…":"SEND MY RESULT"}),o.jsx(Xr,{})]})]}),o.jsx("p",{className:"email-result-modal__privacy",children:"Your email is never added to the result link. We confirm sending after the email service accepts your email and PDF attachment."}),D?o.jsx("p",{className:"email-result-modal__status",role:"status",children:D}):null,o.jsx("a",{className:"email-result-modal__link",href:f,target:"_blank",rel:"noreferrer",children:"Open the shareable result link ↗"})]})})}function l0({resultUrl:r,onEmail:m,isSharedResult:A,onStartOwn:f}){const[w,R]=ge.useState(""),q=async()=>{if(R(""),navigator.share)try{await navigator.share({title:"My Leadapreneur Future-Proofing Check result",text:"View my Leadapreneur Future-Proofing Check result.",url:r}),R("RESULT SHARED");return}catch(I){if(I instanceof DOMException&&I.name==="AbortError")return}try{await Qv(r),R("RESULT LINK COPIED")}catch{R("COPY UNAVAILABLE — OPEN THE RESULT LINK AND COPY IT FROM YOUR BROWSER")}};return o.jsxs("section",{className:"result-actions","aria-label":"Save or share this result",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Keep the evidence moving"}),o.jsx("h2",{children:"Save or share this result."}),o.jsx("p",{children:"The share link contains only the gateway context and nine role scores. It does not include your name, email, or answers."})]}),o.jsxs("div",{className:"result-actions__controls",children:[o.jsxs("button",{type:"button",className:"result-action-button",onClick:m,children:[o.jsx("span",{"aria-hidden":"true",children:"✉"})," EMAIL MY RESULT"]}),o.jsxs("button",{type:"button",className:"result-action-button result-action-button--primary",onClick:q,children:["SHARE MY RESULT ",o.jsx("span",{"aria-hidden":"true",children:"↗"})]}),A?o.jsx("button",{type:"button",className:"text-button result-actions__own",onClick:f,children:"CHECK MY OWN FUTURE-PROOFING →"}):null,o.jsx("p",{className:"result-actions__status",role:"status","aria-live":"polite",children:w})]})]})}function i0({name:r,gatewayAnswer:m,scores:A,onBack:f,onRestart:w,initialRoleId:R=null,isSharedResult:q=!1}){const[I,D]=ge.useState(()=>R?vl[R]:null),[z,S]=ge.useState(!1),E=bi.reduce((k,$e)=>k+(A[$e.id]??0),0),M=An.map(k=>vl[k]),Se=Dm(m,A),ce=M.filter(k=>(A[k.id]??0)<3),ae=ce.filter(k=>(A[k.id]??0)===0),le=ce.filter(k=>{const $e=A[k.id]??0;return $e===1||$e===2}),je=(k,$e)=>{const Ne=A[k.id]??0,tt=Vr.find(Ce=>Ce.role===k.id);return o.jsxs("article",{className:"next-challenge__item","data-family":k.family,children:[o.jsxs("div",{className:"next-challenge__item-topline",children:[o.jsxs("span",{children:[k.familyLabel," · ",k.scope]}),o.jsx("div",{className:"next-challenge__segments","aria-label":Na(Ne),children:[1,2,3].map(Ce=>o.jsx("i",{className:Ce<=Ne?"is-filled":""},Ce))})]}),o.jsxs("h4",{children:[$e==="build"?"Build":"Strengthen"," your ",k.name," evidence"]}),o.jsx("p",{className:"next-challenge__state",children:Na(Ne)}),tt?o.jsx("p",{className:"next-challenge__prompt",children:tt.text}):null]},k.id)};return o.jsxs("main",{className:"result-screen screen-enter",id:"main-content",children:[o.jsxs("header",{className:"result-header",children:[o.jsx(bl,{}),o.jsxs("div",{className:"result-header__actions",children:[q?null:o.jsx(Fu,{onClick:f}),o.jsx("button",{className:"text-button",onClick:w,children:q?"Check my own future-proofing →":"Retake check ↻"})]})]}),o.jsxs("section",{className:"result-hero",children:[o.jsx("div",{className:"result-hero__world",style:{backgroundImage:`url(${ut.futureWorld})`},"aria-hidden":"true"}),o.jsxs("div",{className:"result-hero__copy",children:[o.jsx("p",{className:"eyebrow light",children:"Your evidence map"}),o.jsx("h1",{children:q?"Here is the shared Future-Proofing result.":`${r}, here is what your recent work demonstrates.`}),o.jsx("p",{children:"This is a snapshot of practice, not a permanent label. It shows the standards your evidence supports today and where your next stretch may be."})]}),o.jsxs("div",{className:"result-hero__indicator",children:[o.jsxs("div",{children:[o.jsx("span",{children:"Future-Proofing Practice Indicator"}),o.jsxs("small",{children:[E," of 27 recency points"]})]}),o.jsx(Pv,{score:E}),o.jsx("p",{children:"Each role can contribute up to three points based on how recently you demonstrated it. Your gateway response is stored separately and does not add points."})]})]}),o.jsx(l0,{resultUrl:Se,onEmail:()=>S(!0),isSharedResult:q,onStartOwn:w}),o.jsxs("section",{className:"result-map","aria-labelledby":"result-map-title",children:[o.jsxs("div",{className:"section-heading",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow",children:"Your role evidence map"}),o.jsx("h2",{id:"result-map-title",children:"Nine roles. One view of your current practice."})]}),o.jsxs("div",{className:"result-map__guide",children:[o.jsx("strong",{children:"SELECT ANY ROLE TO EXPLORE MORE"}),o.jsx("span",{children:"Evidence standard · Human side · Stories in action"}),o.jsxs("small",{children:["Click or tap any role ",o.jsx("b",{"aria-hidden":"true",children:"↗"})]})]})]}),o.jsxs("div",{className:"result-capability-map",children:[o.jsxs("div",{className:"result-grid-headings","aria-hidden":"true",children:[o.jsx("span",{children:"Explore"}),o.jsx("span",{children:"Build"}),o.jsx("span",{children:"Lead"})]}),o.jsx("div",{className:"result-grid",children:bi.map(k=>o.jsx($v,{role:k,score:A[k.id]??0,onOpen:()=>D(k)},k.id))})]})]}),o.jsxs("section",{className:"next-challenge","aria-labelledby":"next-challenge-title",children:[o.jsxs("div",{className:"next-challenge__heading",children:[o.jsx("p",{className:"eyebrow",children:"Your next challenges"}),o.jsx("h2",{id:"next-challenge-title",children:"Your personal evidence pathway."})]}),ce.length?o.jsxs("div",{className:"next-challenge__groups",children:[ae.length?o.jsxs("section",{className:"next-challenge__group","aria-labelledby":"build-evidence-title",children:[o.jsxs("div",{className:"next-challenge__group-heading",children:[o.jsx("span",{"aria-hidden":"true"}),o.jsx("h3",{id:"build-evidence-title",children:"Build evidence"})]}),o.jsx("div",{className:"next-challenge__list",children:ae.map(k=>je(k,"build"))})]}):null,le.length?o.jsxs("section",{className:"next-challenge__group","aria-labelledby":"strengthen-evidence-title",children:[o.jsxs("div",{className:"next-challenge__group-heading",children:[o.jsx("span",{"aria-hidden":"true"}),o.jsx("h3",{id:"strengthen-evidence-title",children:"Strengthen evidence"})]}),o.jsx("div",{className:"next-challenge__list",children:le.map(k=>je(k,"strengthen"))})]}):null]}):o.jsx("p",{className:"next-challenge__complete",children:"All nine role standards are recently demonstrated."})]}),o.jsxs("section",{className:"result-footnote",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Gateway context:"})," ",m?"You reported an Impact Project beyond business as usual in the last 36 months.":"You selected Not Yet for the 36-month Impact Project gateway."]}),o.jsx("p",{children:"Your result reflects evidence and recency. It does not claim that you are permanently future proof."})]}),I?o.jsx(t0,{role:I,score:A[I.id]??0,onClose:()=>D(null)}):null,z?o.jsx(a0,{name:r,gatewayAnswer:m,scores:A,resultUrl:Se,onClose:()=>S(!1)}):null]})}function u0(){const r=ge.useMemo(()=>new URLSearchParams(window.location.search),[]),m=ge.useMemo(()=>Xv(r.get("result")),[r]);Number(r.get("q"));const A=m?"result":"intro",f=r.get("role");f&&vl[f];const[w,R]=ge.useState(A),[q,I]=ge.useState(""),[D,z]=ge.useState(0),[S,E]=ge.useState((m==null?void 0:m.gatewayAnswer)===null||!m?null:m.gatewayAnswer?3:0),[M,Se]=ge.useState((m==null?void 0:m.scores)??{}),[ce,ae]=ge.useState(null),[le,je]=ge.useState(!!m),k=S===null?null:S>0,$e=ge.useMemo(()=>(S===null?0:1)+Object.keys(M).length,[S,M]),Ne=Vr[D],tt=Ne.number===1?S:Ne.role&&Object.prototype.hasOwnProperty.call(M,Ne.role)?M[Ne.role]??null:null;ge.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"});const ne=document.getElementById("main-content");ne==null||ne.setAttribute("tabindex",w==="start-transition"||w==="tier-transition"?"0":"-1"),w!=="intro"&&w!=="standard"&&(ne==null||ne.focus({preventScroll:!0}))},[w,D]);const Ce=ne=>{if(ne.number===4){z(4),ae(2),R("tier-transition");return}if(ne.number===7){z(7),ae(3),R("tier-transition");return}if(ne.number===10){R("result");return}z(_t=>_t+1)},W=ne=>{if(Ne.number===1){E(ne),Ce(Ne);return}Ne.role&&(Se(_t=>({..._t,[Ne.role]:ne})),Ce(Ne))},ue=()=>{if(D===0){R("start-transition");return}if(D===4){ae(2),R("tier-transition");return}if(D===7){ae(3),R("tier-transition");return}z(ne=>Math.max(0,ne-1))},Rt=()=>{z(ce===2?3:6),R("quiz")},ot=()=>{ae(null),z(9),R("quiz")},st=()=>{const ne=new URL(window.location.href);ne.searchParams.has("result")&&(ne.searchParams.delete("result"),window.history.replaceState({},"",`${ne.pathname}${ne.search}${ne.hash}`)),je(!1),R("intro"),I(""),z(0),E(null),Se({}),ae(null)};return o.jsxs("div",{className:"app-shell",children:[o.jsx("a",{className:"skip-link",href:"#main-content",children:"Skip to main content"}),w==="intro"?o.jsx(Zv,{onContinue:()=>R("standard")}):null,w==="standard"?o.jsx(Kv,{name:q,setName:I,onBack:()=>R("intro"),onStart:()=>R("start-transition")}):null,w==="start-transition"?o.jsx(Jv,{onComplete:()=>R("quiz"),onBack:()=>R("standard")}):null,w==="quiz"?o.jsx(Wv,{question:Ne,answered:$e,selectedScore:tt,onBack:ue,onAnswer:W}):null,w==="tier-transition"&&ce?o.jsx(Fv,{tier:ce,onContinue:()=>R("quiz"),onBack:Rt}):null,w==="result"?o.jsx(i0,{name:q.trim(),gatewayAnswer:k,scores:M,onBack:ot,onRestart:st,initialRoleId:null,isSharedResult:le}):null,w==="email-preview"?o.jsx(n0,{}):null]})}Gy.createRoot(document.getElementById("root")).render(o.jsx(ge.StrictMode,{children:o.jsx(u0,{})}));
