(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))c(A);new MutationObserver(A=>{for(const R of A)if(R.type==="childList")for(const I of R.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&c(I)}).observe(document,{childList:!0,subtree:!0});function E(A){const R={};return A.integrity&&(R.integrity=A.integrity),A.referrerPolicy&&(R.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?R.credentials="include":A.crossOrigin==="anonymous"?R.credentials="omit":R.credentials="same-origin",R}function c(A){if(A.ep)return;A.ep=!0;const R=E(A);fetch(A.href,R)}})();var Is={exports:{}},pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Yy(){if(Am)return pi;Am=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function E(c,A,R){var I=null;if(R!==void 0&&(I=""+R),A.key!==void 0&&(I=""+A.key),"key"in A){R={};for(var G in A)G!=="key"&&(R[G]=A[G])}else R=A;return A=R.ref,{$$typeof:s,type:c,key:I,ref:A!==void 0?A:null,props:R}}return pi.Fragment=d,pi.jsx=E,pi.jsxs=E,pi}var wm;function By(){return wm||(wm=1,Is.exports=Yy()),Is.exports}var u=By(),qs={exports:{}},Q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function Iy(){if(Nm)return Q;Nm=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),I=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),C=Symbol.for("react.view_transition"),Ee=Symbol.iterator;function F(m){return m===null||typeof m!="object"?null:(m=Ee&&m[Ee]||m["@@iterator"],typeof m=="function"?m:null)}var ne={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ae=Object.assign,je={};function $e(m,x,Y){this.props=m,this.context=x,this.refs=je,this.updater=Y||ne}$e.prototype.isReactComponent={},$e.prototype.setState=function(m,x){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,x,"setState")},$e.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function Pe(){}Pe.prototype=$e.prototype;function wt(m,x,Y){this.props=m,this.context=x,this.refs=je,this.updater=Y||ne}var Nt=wt.prototype=new Pe;Nt.constructor=wt,ae(Nt,$e.prototype),Nt.isPureReactComponent=!0;var et=Array.isArray;function J(){}var ie={H:null,A:null,T:null,S:null},Ot=Object.prototype.hasOwnProperty;function it(m,x,Y){var B=Y.ref;return{$$typeof:s,type:m,key:x,ref:B!==void 0?B:null,props:Y}}function oe(m,x){return it(m.type,x,m.props)}function Ge(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function Sn(m){var x={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(Y){return x[Y]})}var ta=/\/+/g;function Le(m,x){return typeof m=="object"&&m!==null&&m.key!=null?Sn(""+m.key):x.toString(36)}function j(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(J,J):(m.status="pending",m.then(function(x){m.status==="pending"&&(m.status="fulfilled",m.value=x)},function(x){m.status==="pending"&&(m.status="rejected",m.reason=x)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function V(m,x,Y,B,ue){var re=typeof m;(re==="undefined"||re==="boolean")&&(m=null);var ce=!1;if(m===null)ce=!0;else switch(re){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(m.$$typeof){case s:case d:ce=!0;break;case w:return ce=m._init,V(ce(m._payload),x,Y,B,ue)}}if(ce)return ue=ue(m),ce=B===""?"."+Le(m,0):B,et(ue)?(Y="",ce!=null&&(Y=ce.replace(ta,"$&/")+"/"),V(ue,x,Y,"",function(an){return an})):ue!=null&&(Ge(ue)&&(ue=oe(ue,Y+(ue.key==null||m&&m.key===ue.key?"":(""+ue.key).replace(ta,"$&/")+"/")+ce)),x.push(ue)),1;ce=0;var z=B===""?".":B+":";if(et(m))for(var X=0;X<m.length;X++)B=m[X],re=z+Le(B,X),ce+=V(B,x,Y,re,ue);else if(X=F(m),typeof X=="function")for(m=X.call(m),X=0;!(B=m.next()).done;)B=B.value,re=z+Le(B,X++),ce+=V(B,x,Y,re,ue);else if(re==="object"){if(typeof m.then=="function")return V(j(m),x,Y,B,ue);throw x=String(m),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return ce}function k(m,x,Y){if(m==null)return m;var B=[],ue=0;return V(m,B,"","",function(re){return x.call(Y,re,ue++)}),B}function be(m){if(m._status===-1){var x=m._result,Y=x();Y.then(function(B){(m._status===0||m._status===-1)&&(m._status=1,m._result=B,Y.status===void 0&&(Y.status="fulfilled",Y.value=B))},function(B){(m._status===0||m._status===-1)&&(m._status=2,m._result=B,Y.status===void 0&&(Y.status="rejected",Y.reason=B))}),m._status===-1&&(m._status=0,m._result=Y)}if(m._status===1)return m._result.default;throw m._result}var he=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function zt(m){var x=ie.T,Y={};Y.types=x!==null?x.types:null,ie.T=Y;try{var B=m(),ue=ie.S;ue!==null&&ue(Y,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(J,he)}catch(re){he(re)}finally{x!==null&&Y.types!==null&&(x.types=Y.types),ie.T=x}}function nn(m){var x=ie.T;if(x!==null){var Y=x.types;Y===null?x.types=[m]:Y.indexOf(m)===-1&&Y.push(m)}else zt(nn.bind(null,m))}var na={map:k,forEach:function(m,x,Y){k(m,function(){x.apply(this,arguments)},Y)},count:function(m){var x=0;return k(m,function(){x++}),x},toArray:function(m){return k(m,function(x){return x})||[]},only:function(m){if(!Ge(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return Q.Activity=S,Q.Children=na,Q.Component=$e,Q.Fragment=E,Q.Profiler=A,Q.PureComponent=wt,Q.StrictMode=c,Q.Suspense=H,Q.ViewTransition=C,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ie,Q.__COMPILER_RUNTIME={__proto__:null,c:function(m){return ie.H.useMemoCache(m)}},Q.addTransitionType=nn,Q.cache=function(m){return function(){return m.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(m,x,Y){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var B=ae({},m.props),ue=m.key;if(x!=null)for(re in x.key!==void 0&&(ue=""+x.key),x)!Ot.call(x,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&x.ref===void 0||(B[re]=x[re]);var re=arguments.length-2;if(re===1)B.children=Y;else if(1<re){for(var ce=Array(re),z=0;z<re;z++)ce[z]=arguments[z+2];B.children=ce}return it(m.type,ue,B)},Q.createContext=function(m){return m={$$typeof:I,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:R,_context:m},m},Q.createElement=function(m,x,Y){var B,ue={},re=null;if(x!=null)for(B in x.key!==void 0&&(re=""+x.key),x)Ot.call(x,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(ue[B]=x[B]);var ce=arguments.length-2;if(ce===1)ue.children=Y;else if(1<ce){for(var z=Array(ce),X=0;X<ce;X++)z[X]=arguments[X+2];ue.children=z}if(m&&m.defaultProps)for(B in ce=m.defaultProps,ce)ue[B]===void 0&&(ue[B]=ce[B]);return it(m,re,ue)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(m){return{$$typeof:G,render:m}},Q.isValidElement=Ge,Q.lazy=function(m){return{$$typeof:w,_payload:{_status:-1,_result:m},_init:be}},Q.memo=function(m,x){return{$$typeof:M,type:m,compare:x===void 0?null:x}},Q.startTransition=zt,Q.unstable_useCacheRefresh=function(){return ie.H.useCacheRefresh()},Q.use=function(m){return ie.H.use(m)},Q.useActionState=function(m,x,Y){return ie.H.useActionState(m,x,Y)},Q.useCallback=function(m,x){return ie.H.useCallback(m,x)},Q.useContext=function(m){return ie.H.useContext(m)},Q.useDebugValue=function(){},Q.useDeferredValue=function(m,x){return ie.H.useDeferredValue(m,x)},Q.useEffect=function(m,x){return ie.H.useEffect(m,x)},Q.useEffectEvent=function(m){return ie.H.useEffectEvent(m)},Q.useId=function(){return ie.H.useId()},Q.useImperativeHandle=function(m,x,Y){return ie.H.useImperativeHandle(m,x,Y)},Q.useInsertionEffect=function(m,x){return ie.H.useInsertionEffect(m,x)},Q.useLayoutEffect=function(m,x){return ie.H.useLayoutEffect(m,x)},Q.useMemo=function(m,x){return ie.H.useMemo(m,x)},Q.useOptimistic=function(m,x){return ie.H.useOptimistic(m,x)},Q.useReducer=function(m,x,Y){return ie.H.useReducer(m,x,Y)},Q.useRef=function(m){return ie.H.useRef(m)},Q.useState=function(m){return ie.H.useState(m)},Q.useSyncExternalStore=function(m,x,Y){return ie.H.useSyncExternalStore(m,x,Y)},Q.useTransition=function(){return ie.H.useTransition()},Q.version="19.3.0",Q}var Om;function Ks(){return Om||(Om=1,qs.exports=Iy()),qs.exports}var de=Ks(),Gs={exports:{}},gi={},Vs={exports:{}},ks={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function qy(){return Rm||(Rm=1,(function(s){function d(j,V){var k=j.length;j.push(V);e:for(;0<k;){var be=k-1>>>1,he=j[be];if(0<A(he,V))j[be]=V,j[k]=he,k=be;else break e}}function E(j){return j.length===0?null:j[0]}function c(j){if(j.length===0)return null;var V=j[0],k=j.pop();if(k!==V){j[0]=k;e:for(var be=0,he=j.length,zt=he>>>1;be<zt;){var nn=2*(be+1)-1,na=j[nn],m=nn+1,x=j[m];if(0>A(na,k))m<he&&0>A(x,na)?(j[be]=x,j[m]=k,be=m):(j[be]=na,j[nn]=k,be=nn);else if(m<he&&0>A(x,k))j[be]=x,j[m]=k,be=m;else break e}}return V}function A(j,V){var k=j.sortIndex-V.sortIndex;return k!==0?k:j.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var R=performance;s.unstable_now=function(){return R.now()}}else{var I=Date,G=I.now();s.unstable_now=function(){return I.now()-G}}var H=[],M=[],w=1,S=null,C=3,Ee=!1,F=!1,ne=!1,ae=!1,je=typeof setTimeout=="function"?setTimeout:null,$e=typeof clearTimeout=="function"?clearTimeout:null,Pe=typeof setImmediate<"u"?setImmediate:null;function wt(j){for(var V=E(M);V!==null;){if(V.callback===null)c(M);else if(V.startTime<=j)c(M),V.sortIndex=V.expirationTime,d(H,V);else break;V=E(M)}}function Nt(j){if(ne=!1,wt(j),!F)if(E(H)!==null)F=!0,et||(et=!0,Ge());else{var V=E(M);V!==null&&Le(Nt,V.startTime-j)}}var et=!1,J=-1,ie=5,Ot=-1;function it(){return ae?!0:!(s.unstable_now()-Ot<ie)}function oe(){if(ae=!1,et){var j=s.unstable_now();Ot=j;var V=!0;try{e:{F=!1,ne&&(ne=!1,$e(J),J=-1),Ee=!0;var k=C;try{t:{for(wt(j),S=E(H);S!==null&&!(S.expirationTime>j&&it());){var be=S.callback;if(typeof be=="function"){S.callback=null,C=S.priorityLevel;var he=be(S.expirationTime<=j);if(j=s.unstable_now(),typeof he=="function"){S.callback=he,wt(j),V=!0;break t}S===E(H)&&c(H),wt(j)}else c(H);S=E(H)}if(S!==null)V=!0;else{var zt=E(M);zt!==null&&Le(Nt,zt.startTime-j),V=!1}}break e}finally{S=null,C=k,Ee=!1}V=void 0}}finally{V?Ge():et=!1}}}var Ge;if(typeof Pe=="function")Ge=function(){Pe(oe)};else if(typeof MessageChannel<"u"){var Sn=new MessageChannel,ta=Sn.port2;Sn.port1.onmessage=oe,Ge=function(){ta.postMessage(null)}}else Ge=function(){je(oe,0)};function Le(j,V){J=je(function(){j(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return C},s.unstable_next=function(j){switch(C){case 1:case 2:case 3:var V=3;break;default:V=C}var k=C;C=V;try{return j()}finally{C=k}},s.unstable_requestPaint=function(){ae=!0},s.unstable_runWithPriority=function(j,V){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var k=C;C=j;try{return V()}finally{C=k}},s.unstable_scheduleCallback=function(j,V,k){var be=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?be+k:be):k=be,j){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=k+he,j={id:w++,callback:V,priorityLevel:j,startTime:k,expirationTime:he,sortIndex:-1},k>be?(j.sortIndex=k,d(M,j),E(H)===null&&j===E(M)&&(ne?($e(J),J=-1):ne=!0,Le(Nt,k-be))):(j.sortIndex=he,d(H,j),F||Ee||(F=!0,et||(et=!0,Ge()))),j},s.unstable_shouldYield=it,s.unstable_wrapCallback=function(j){var V=C;return function(){var k=C;C=V;try{return j.apply(this,arguments)}finally{C=k}}}})(ks)),ks}var xm;function Gy(){return xm||(xm=1,Vs.exports=qy()),Vs.exports}var Xs={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function Vy(){if(_m)return We;_m=1;var s=Ks();function d(w){var S="https://react.dev/errors/"+w;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)S+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+w+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(){}var c={d:{f:E,r:function(){throw Error(d(522))},D:E,C:E,L:E,m:E,X:E,S:E,M:E},p:0,findDOMNode:null},A=Symbol.for("react.portal"),R=Symbol.for("react.recoverable"),I=Symbol.for("react.optimistic_key");function G(w,S,C){var Ee=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:Ee==null?null:Ee===I?I:""+Ee,children:w,containerInfo:S,implementation:C}}var H=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(w,S){if(w==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,We.browser=function(w){return{$$typeof:R,_reason:w}},We.createPortal=function(w,S){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(d(299));return G(w,S,null,C)},We.flushSync=function(w){var S=H.T,C=c.p;try{if(H.T=null,c.p=2,w)return w()}finally{H.T=S,c.p=C,c.d.f()}},We.preconnect=function(w,S){typeof w=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,c.d.C(w,S))},We.prefetchDNS=function(w){typeof w=="string"&&c.d.D(w)},We.preinit=function(w,S){if(typeof w=="string"&&S&&typeof S.as=="string"){var C=S.as,Ee=M(C,S.crossOrigin),F=typeof S.integrity=="string"?S.integrity:void 0,ne=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;C==="style"?c.d.S(w,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:Ee,integrity:F,fetchPriority:ne}):C==="script"&&c.d.X(w,{crossOrigin:Ee,integrity:F,fetchPriority:ne,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},We.preinitModule=function(w,S){if(typeof w=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var C=M(S.as,S.crossOrigin);c.d.M(w,{crossOrigin:C,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}}else S==null&&c.d.M(w)},We.preload=function(w,S){if(typeof w=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var C=S.as,Ee=M(C,S.crossOrigin);c.d.L(w,C,{crossOrigin:Ee,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},We.preloadModule=function(w,S){if(typeof w=="string")if(S){var C=M(S.as,S.crossOrigin);c.d.m(w,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:C,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}else c.d.m(w)},We.requestFormReset=function(w){c.d.r(w)},We.unstable_batchedUpdates=function(w,S){return w(S)},We.useFormState=function(w,S,C){return H.H.useFormState(w,S,C)},We.useFormStatus=function(){return H.H.useHostTransitionStatus()},We.version="19.3.0",We}var jm;function ky(){if(jm)return Xs.exports;jm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Xs.exports=Vy(),Xs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function Xy(){if(Um)return gi;Um=1;var s=Gy(),d=Ks(),E=ky();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function R(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function I(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function H(e){if(R(e)!==e)throw Error(c(188))}function M(e){var t=e.alternate;if(!t){if(t=R(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return H(l),e;if(i===a)return H(l),t;i=i.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,r=l.child;r;){if(r===n){o=!0,n=l,a=i;break}if(r===a){o=!0,a=l,n=i;break}r=r.sibling}if(!o){for(r=i.child;r;){if(r===n){o=!0,n=i,a=l;break}if(r===a){o=!0,a=i,n=l;break}r=r.sibling}if(!o)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}function S(e,t,n,a,l,i){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,a,l,i)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&S(e.child,t,n,a,l,i))return!0;e=e.sibling}return!1}function C(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Ee(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function F(e){var t=[null,null],n=C(e);return n===null||ne(t,e,n.child,{foundSelf:!1}),t}function ne(e,t,n,a){for(;n!==null;){if(n===t)a.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(a.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ne(e,t,n.child,a))return!0;n=n.sibling}return!1}function ae(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(c(559))}}var je=null,$e=null;function Pe(e,t,n){return e===n?!0:e===t?(je=e,!0):!1}function wt(e,t,n){return e===n?($e=e,!1):e===t?($e!==null&&(je=e),!0):!1}function Nt(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function et(e,t,n){for(var a=0,l=e;l;l=n(l))a++;l=0;for(var i=t;i;i=n(i))l++;for(;0<a-l;)e=n(e),a--;for(;0<l-a;)t=n(t),l--;for(;a--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var J=Object.assign,ie=Symbol.for("react.element"),Ot=Symbol.for("react.transitional.element"),it=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Sn=Symbol.for("react.profiler"),ta=Symbol.for("react.consumer"),Le=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),zt=Symbol.for("react.activity"),nn=Symbol.for("react.legacy_hidden"),na=Symbol.for("react.memo_cache_sentinel"),m=Symbol.for("react.view_transition"),x=Symbol.for("react.recoverable"),Y=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oe:return"Fragment";case Sn:return"Profiler";case Ge:return"StrictMode";case V:return"Suspense";case k:return"SuspenseList";case zt:return"Activity";case m:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case it:return"Portal";case Le:return e.displayName||"Context";case ta:return(e._context.displayName||"Context")+".Consumer";case j:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ce=Array.isArray,z=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,an={pending:!1,data:null,method:null,action:null},iu=[],xa=-1;function Vt(e){return{current:e}}function Ve(e){0>xa||(e.current=iu[xa],iu[xa]=null,xa--)}function Se(e,t){xa++,iu[xa]=e.current,e.current=t}var kt=Vt(null),El=Vt(null),An=Vt(null),Si=Vt(null);function Ai(e,t){switch(Se(An,t),Se(El,e),Se(kt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ch(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ch(t),e=Dh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ve(kt),Se(kt,e)}function _a(){Ve(kt),Ve(El),Ve(An)}function ou(e){var t=e.memoizedState;t!==null&&(gl._currentValue=t.memoizedState,Se(Si,e)),t=kt.current;var n=Dh(t,e.type);t!==n&&(Se(El,e),Se(kt,n))}function wi(e){El.current===e&&(Ve(kt),Ve(El)),Si.current===e&&(Ve(Si),gl._currentValue=an)}var uu,$s;function wn(e){if(uu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uu=t&&t[1]||"",$s=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+uu+e+$s}var ru=!1;function su(e,t){if(!e||ru)return"";ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(_){var p=_}Reflect.construct(e,[],O)}else{try{O.call()}catch(_){p=_}O=!1;try{var b=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),O=!0,new e}finally{O&&(b!==void 0?Object.defineProperty(e.prototype,"props",b):delete e.prototype.props)}}}else{try{throw Error()}catch(_){p=_}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(_){if(_&&p&&typeof _.stack=="string")return[_.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],r=i[1];if(o&&r){var f=o.split(`
`),y=r.split(`
`);for(l=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;if(a===f.length||l===y.length)for(a=f.length-1,l=y.length-1;1<=a&&0<=l&&f[a]!==y[l];)l--;for(;1<=a&&0<=l;a--,l--)if(f[a]!==y[l]){if(a!==1||l!==1)do if(a--,l--,0>l||f[a]!==y[l]){var T=`
`+f[a].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=a&&0<=l);break}}}finally{ru=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?wn(n):""}function Gm(e,t){switch(e.tag){case 26:case 27:case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return e.child!==t&&t!==null?wn("Suspense Fallback"):wn("Suspense");case 19:return wn("SuspenseList");case 0:case 15:return su(e.type,!1);case 11:return su(e.type.render,!1);case 1:return su(e.type,!0);case 31:return wn("Activity");case 30:return wn("ViewTransition");default:return""}}function Ps(e){try{var t="",n=null;do t+=Gm(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var cu=Object.prototype.hasOwnProperty,fu=s.unstable_scheduleCallback,du=s.unstable_cancelCallback,Vm=s.unstable_shouldYield,km=s.unstable_requestPaint,ht=s.unstable_now,Xm=s.unstable_getCurrentPriorityLevel,ec=s.unstable_ImmediatePriority,tc=s.unstable_UserBlockingPriority,Ni=s.unstable_NormalPriority,Qm=s.unstable_LowPriority,nc=s.unstable_IdlePriority,Zm=s.log,Km=s.unstable_setDisableYieldValue,Sl=null,mt=null;function Nn(e){if(typeof Zm=="function"&&Km(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Sl,e)}catch{}}var pt=Math.clz32?Math.clz32:Fm,Jm=Math.log,Wm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(Jm(e)/Wm|0)|0}var Oi=256,Ri=262144,xi=4194304;function aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _i(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=a&134217727;return r!==0?(a=r&~i,a!==0?l=aa(a):(o&=r,o!==0?l=aa(o):n||(n=r&~e,n!==0&&(l=aa(n))))):(r=a&~i,r!==0?l=aa(r):o!==0?l=aa(o):n||(n=a&~e,n!==0&&(l=aa(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Al(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ac(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var a=31-pt(n),l=1<<a;t|=e[a],n&=~l}return t}function $m(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(){var e=xi;return xi<<=1,(xi&62914560)===0&&(xi=4194304),e}function hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pm(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var r=e.entanglements,f=e.expirationTimes,y=e.hiddenUpdates;for(n=o&~n;0<n;){var T=31-pt(n),O=1<<T;r[T]=0,f[T]=-1;var p=y[T];if(p!==null)for(y[T]=null,T=0;T<p.length;T++){var b=p[T];b!==null&&(b.lane&=-536870913)}n&=~O}a!==0&&ic(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function ic(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-pt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-pt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function uc(e,t){var n=t&-t;return n=(n&42)!==0?1:mu(n),(n&(e.suspendedLanes|t))!==0?0:n}function mu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:gm(e.type))}function sc(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var ln=Math.random().toString(36).slice(2),ke="__reactFiber$"+ln,ot="__reactProps$"+ln,ja="__reactContainer$"+ln,cc="__reactEvents$"+ln,ep="__reactListeners$"+ln,tp="__reactHandles$"+ln,fc="__reactResources$"+ln,Nl="__reactMarker$"+ln,ji="__reactLoad$"+ln;function Ui(e){delete e[ke],delete e[ot],delete e[ep],delete e[tp]}function la(e){var t;if(t=e[ke])return t;for(var n=e.parentNode;n;){if(t=n[ja]||n[ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wh(e);e!==null;){if(n=e[ke])return n;e=Wh(e)}return t}e=n,n=e.parentNode}return null}function Ua(e){if(e=e[ke]||e[ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ol(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Ca(e){var t=e[fc];return t||(t=e[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Nl]=!0}function dc(e){e[ji]=void 0}var hc=new Set,mc={};function ia(e,t){Da(e,t),Da(e+"Capture",t)}function Da(e,t){for(mc[e]=t,e=0;e<t.length;e++)hc.add(t[e])}var np=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pc={},gc={};function ap(e){return cu.call(gc,e)?!0:cu.call(pc,e)?!1:np.test(e)?gc[e]=!0:(pc[e]=!0,!1)}var se=!1;function yc(){var e=se;return se=!1,e}function Ci(e,t,n){if(ap(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Di(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function on(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,a)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lp(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gu(e){if(!e._valueTracker){var t=vc(e)?"checked":"value";e._valueTracker=lp(e,t,""+e[t])}}function bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=vc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}var ip=/[\n"\\]/g;function Rt(e){return e.replace(ip,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yu(e,t,n,a,l,i,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?o==="number"&&e.value==t?vu(e,gt(e.value)):vu(e,gt(t)):n!=null?vu(e,gt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+gt(r):e.removeAttribute("name")}function Tc(e,t,n,a,l,i,o,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){gu(e);return}n=n!=null?""+gt(n):"",t=t!=null?""+gt(t):n,r||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=r?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),gu(e)}function vu(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Ha(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ec(e,t,n){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+gt(n):""}function Sc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(ce(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=gt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),gu(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var op=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ac(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||op.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function wc(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="",se=!0);for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&(Ac(e,l,a),se=!0)}else for(var i in t)t.hasOwnProperty(i)&&Ac(e,i,t[i])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var up=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),rp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hi(e){return rp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var Tu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,La=null;function Nc(e){var t=Ua(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(yu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[ot]||null;if(!l)throw Error(c(90));yu(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&bc(a)}break e;case"textarea":Ec(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ha(e,!!n.multiple,t,!1)}}}var Su=!1;function Oc(e,t,n){if(Su)return e(t,n);Su=!0;try{var a=e(t);return a}finally{if(Su=!1,(za!==null||La!==null)&&(Mo(),za&&(t=za,e=La,La=za=null,Nc(t),e)))for(t=0;t<e.length;t++)Nc(e[t])}}function Rl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ot]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(un)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){Au=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{Au=!1}var On=null,wu=null,Mi=null;function Rc(){if(Mi)return Mi;var e,t=wu,n=t.length,a,l="value"in On?On.value:On.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return Mi=l.slice(e,1<a?1-a:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function xc(){return!1}function tt(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Li:xc,this.isPropagationStopped=xc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yi=tt(Rn),_l=J({},Rn,{view:0,detail:0}),sp=tt(_l),Nu,Ou,jl,Bi=J({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jl&&(jl&&e.type==="mousemove"?(Nu=e.screenX-jl.screenX,Ou=e.screenY-jl.screenY):Ou=Nu=0,jl=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),_c=tt(Bi),cp=J({},Bi,{dataTransfer:0}),fp=tt(cp),dp=J({},_l,{relatedTarget:0}),Ru=tt(dp),hp=J({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),mp=tt(hp),pp=J({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=tt(pp),yp=J({},Rn,{data:0}),jc=tt(yp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ep(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tp[e])?!!t[e]:!1}function xu(){return Ep}var Sp=J({},_l,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=tt(Sp),wp=J({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=tt(wp),Np=J({},Rn,{submitter:0}),Op=tt(Np),Rp=J({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),xp=tt(Rp),_p=J({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=tt(_p),Up=J({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cp=tt(Up),Dp=J({},Rn,{newState:0,oldState:0,source:0}),Hp=tt(Dp),Mp=[9,13,27,32],_u=un&&"CompositionEvent"in window,Ul=null;un&&"documentMode"in document&&(Ul=document.documentMode);var zp=un&&"TextEvent"in window&&!Ul,Cc=un&&(!_u||Ul&&8<Ul&&11>=Ul),Dc=" ",Hc=!1;function Mc(e,t){switch(e){case"keyup":return Mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ya=!1;function Lp(e,t){switch(e){case"compositionend":return zc(t);case"keypress":return t.which!==32?null:(Hc=!0,Dc);case"textInput":return e=t.data,e===Dc&&Hc?null:e;default:return null}}function Yp(e,t){if(Ya)return e==="compositionend"||!_u&&Mc(e,t)?(e=Rc(),Mi=wu=On=null,Ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bp[e.type]:t==="textarea"}function Yc(e,t,n,a){za?La?La.push(a):La=[a]:za=a,t=qo(t,"onChange"),0<t.length&&(n=new Yi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Cl=null,Dl=null;function Ip(e){Oh(e,0)}function Ii(e){var t=Ol(e);if(bc(t))return e}function Bc(e,t){if(e==="change")return t}var Ic=!1;if(un){var ju;if(un){var Uu="oninput"in document;if(!Uu){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),Uu=typeof qc.oninput=="function"}ju=Uu}else ju=!1;Ic=ju&&(!document.documentMode||9<document.documentMode)}function Gc(){Cl&&(Cl.detachEvent("onpropertychange",Vc),Dl=Cl=null)}function Vc(e){if(e.propertyName==="value"&&Ii(Dl)){var t=[];Yc(t,Dl,e,Eu(e)),Oc(Ip,t)}}function qp(e,t,n){e==="focusin"?(Gc(),Cl=t,Dl=n,Cl.attachEvent("onpropertychange",Vc)):e==="focusout"&&Gc()}function Gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ii(Dl)}function Vp(e,t){if(e==="click")return Ii(t)}function kp(e,t){if(e==="input"||e==="change")return Ii(t)}function Xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Xp;function Hl(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!cu.call(t,l)||!yt(e[l],t[l]))return!1}return!0}function Cu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xc(e,t){var n=kc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kc(n)}}function Qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Cu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cu(e.document)}return t}function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qp=un&&"documentMode"in document&&11>=document.documentMode,Ba=null,Hu=null,Ml=null,Mu=!1;function Kc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mu||Ba==null||Ba!==Cu(a)||(a=Ba,"selectionStart"in a&&Du(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ml&&Hl(Ml,a)||(Ml=a,a=qo(Hu,"onSelect"),0<a.length&&(t=new Yi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ba)))}function oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ia={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},zu={},Jc={};un&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function ua(e){if(zu[e])return zu[e];if(!Ia[e])return e;var t=Ia[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jc)return zu[e]=t[n];return e}var Wc=ua("animationend"),Fc=ua("animationiteration"),$c=ua("animationstart"),Zp=ua("transitionrun"),Kp=ua("transitionstart"),Jp=ua("transitioncancel"),Pc=ua("transitionend"),ef=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Lt(e,t){ef.set(e,t),ia(t,[e])}var Wp=0;function rn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=qt.identifierPrefix;var n=Wp++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function tf(e){if(e==null||typeof e=="string")return e;var t=null,n=ol;if(n!==null)for(var a=0;a<n.length;a++){var l=e[n[a]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function sn(e,t){return e=tf(e),t=tf(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var qi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],qa=0,Yu=0;function Gi(){for(var e=qa,t=Yu=qa=0;t<e;){var n=xt[t];xt[t++]=null;var a=xt[t];xt[t++]=null;var l=xt[t];xt[t++]=null;var i=xt[t];if(xt[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&nf(n,l,i)}}function Vi(e,t,n,a){xt[qa++]=e,xt[qa++]=t,xt[qa++]=n,xt[qa++]=a,Yu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Bu(e,t,n,a){return Vi(e,t,n,a),ki(e)}function ra(e,t){return Vi(e,null,null,t),ki(e)}function nf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-pt(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function ki(e){if(50<ai)throw ai=0,Ho=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ga={};function Fp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,a){return new Fp(e,t,n,a)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function af(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Xi(e,t,n,a,l,i){var o=0;if(a=e,typeof a=="function")Iu(a)&&(o=1);else if(typeof a=="string")o=Ny(e,n,kt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(a){case zt:return e=ut(31,n,t,l),e.elementType=zt,e.lanes=i,e;case oe:return sa(n.children,l,i,t);case Ge:o=8,l|=24;break;case Sn:return e=ut(12,n,t,l|2),e.elementType=Sn,e.lanes=i,e;case V:return e=ut(13,n,t,l),e.elementType=V,e.lanes=i,e;case k:return e=ut(19,n,t,l),e.elementType=k,e.lanes=i,e;case nn:case m:return e=l|32,e=ut(30,n,t,e),e.elementType=m,e.lanes=i,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Le:o=10;break e;case ta:o=9;break e;case j:o=11;break e;case be:o=14;break e;case he:o=16,a=null;break e}o=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=ut(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function sa(e,t,n,a){return e=ut(7,e,a,t),e.lanes=n,e}function qu(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function lf(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function Gu(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var of=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var n=of.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ps(t)},of.set(e,t),t)}return{value:e,source:t,stack:Ps(t)}}var Va=[],ka=0,Qi=null,zl=0,jt=[],Ut=0,xn=null,Qt=1,Zt="";function fn(e,t){Va[ka++]=zl,Va[ka++]=Qi,Qi=e,zl=t}function uf(e,t,n){jt[Ut++]=Qt,jt[Ut++]=Zt,jt[Ut++]=xn,xn=e;var a=Qt;e=Zt;var l=32-pt(a)-1;a&=~(1<<l),n+=1;var i=32-pt(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Qt=1<<32-pt(t)+l|n<<l|a,Zt=i+e}else Qt=1<<i|n<<l|a,Zt=e}function Zi(e){e.return!==null&&(fn(e,1),uf(e,1,0))}function Vu(e){for(;e===Qi;)Qi=Va[--ka],Va[ka]=null,zl=Va[--ka],Va[ka]=null;for(;e===xn;)xn=jt[--Ut],jt[Ut]=null,Zt=jt[--Ut],jt[Ut]=null,Qt=jt[--Ut],jt[Ut]=null}function rf(e,t){jt[Ut++]=Qt,jt[Ut++]=Zt,jt[Ut++]=xn,Qt=t.id,Zt=t.overflow,xn=e}var Be=null,Ae=null,W=!1,_n=null,Ct=!1,ku=Error(c(519));function jn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ll(_t(t,e)),ku}function sf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ke]=e,t[ot]=a,n){case"dialog":P("cancel",t),P("close",t);break;case"iframe":case"object":case"embed":P("load",t);break;case"video":case"audio":for(n=0;n<ii.length;n++)P(ii[n],t);break;case"source":P("error",t);break;case"img":case"image":case"link":P("error",t),P("load",t);break;case"details":P("toggle",t);break;case"input":P("invalid",t),Tc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":P("invalid",t);break;case"textarea":P("invalid",t),Sc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||jh(t.textContent,n)?(a.popover!=null&&(P("beforetoggle",t),P("toggle",t)),a.onScroll!=null&&P("scroll",t),a.onScrollEnd!=null&&P("scrollend",t),a.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||jn(e,!0)}function Ki(e){for(Be=e.return;Be;)switch(Be.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Be=Be.return}}function Xa(e){if(e!==Be)return!1;if(!W)return Ki(e),W=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ts(e.type,e.memoizedProps)),n=!n),n&&Ae&&jn(e),Ki(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ae=Jh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ae=Jh(e)}else t===27?(t=Ae,Qn(e.type)?(e=_s,_s=null,Ae=e):Ae=t):Ae=Be?Ht(e.stateNode.nextSibling):null;return!0}function ca(){Ae=Be=null,W=!1}function Xu(){var e=_n;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),_n=null),e}function Ll(e){_n===null?_n=[e]:_n.push(e)}var Qu=Vt(null),fa=null,dn=null;function Un(e,t,n){Se(Qu,t._currentValue),t._currentValue=n}function hn(e){e._currentValue=Qu.current,Ve(Qu)}function Ji(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Zu(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=l;for(var f=0;f<t.length;f++)if(r.context===t[f]){i.lanes|=n,r=i.alternate,r!==null&&(r.lanes|=n),Ji(i.return,n,e),a||(o=null);break e}i=r.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(c(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Ji(o,n,e),o=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Ji(l.return,n,e),o=l.child,o=o!==null?o.sibling:null):o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function da(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var r=l.type;yt(l.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(l===Si.current){if(o=l.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}l=l.return}return e!==null&&Zu(t,e,n,a),t.flags|=262144,e!==null}function Wi(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){fa=e,dn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return cf(fa,e)}function Fi(e,t){return fa===null&&ha(e),cf(e,t)}function cf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},dn===null){if(e===null)throw Error(c(308));dn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else dn=dn.next=t;return n}var $p=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Pp=s.unstable_scheduleCallback,eg=s.unstable_NormalPriority,Ce={$$typeof:Le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new $p,data:new Map,refCount:0}}function Yl(e){e.refCount--,e.refCount===0&&Pp(eg,function(){e.controller.abort()})}function ff(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var a=t[e];n.indexOf(a)===-1&&n.push(a)}}}var Bl=null;function tg(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Il=null,Ju=0,ma=0,Qa=null;function ng(e,t){if(Il===null){var n=Il=[];Ju=0,ma=fs(),Qa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ju++,t.then(df,df),t}function df(){if(--Ju===0&&(Bl=null,Il!==null)){Qa!==null&&(Qa.status="fulfilled");var e=Il;Il=null,ma=0,Qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ag(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var hf=z.S;z.S=function(e,t){if(ih=ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ng(e,t),Bl!==null)for(var n=cl;n!==null;)ff(n,Bl),n=n.next;if(n=e.types,n!==null){for(var a=cl;a!==null;)ff(a,n),a=a.next;if(ma!==0){a=Bl,a===null&&(a=Bl=[]);for(var l=0;l<n.length;l++){var i=n[l];a.indexOf(i)===-1&&a.push(i)}}}hf!==null&&hf(e,t)};var pa=Vt(null);function Wu(){var e=pa.current;return e!==null?e:Te.pooledCache}function $i(e,t){t===null?Se(pa,pa.current):Se(pa,t.pool)}function mf(){var e=Wu();return e===null?null:{parent:Ce._currentValue,pool:e}}var Za=Error(c(460)),Fu=Error(c(474)),Pi=Error(c(542)),eo={then:function(){}};function pf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xt,Xt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vf(e),e===void 0&&!("reason"in t)?Error(c(600)):e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vf(e),e}throw ya=t,Za}}function ga(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ya=n,Za):n}}var ya=null;function yf(){if(ya===null)throw Error(c(459));var e=ya;return ya=null,e}function vf(e){if(e===Za||e===Pi)throw Error(c(483))}var Ka=null,ql=0;function to(e){var t=ql;return ql+=1,Ka===null&&(Ka=[]),gf(Ka,e,t)}function Cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function no(e,t){throw t.$$typeof===ie?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bf(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function a(g){for(var h=new Map;g!==null;)g.key===null?h.set(g.index,g):h.set(g.key,g),g=g.sibling;return h}function l(g,h){return g=cn(g,h),g.index=0,g.sibling=null,g}function i(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=134217730,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=134217730),g}function r(g,h,v,N){return h===null||h.tag!==6?(h=qu(v,g.mode,N),h.return=g,h):(h=l(h,v),h.return=g,h)}function f(g,h,v,N){var U=v.type;return U===oe?(g=T(g,h,v.props.children,N,v.key),Cn(g,v),g):h!==null&&(h.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===he&&ga(U)===h.type)?(h=l(h,v.props),Cn(h,v),h.return=g,h):(h=Xi(v.type,v.key,v.props,null,g.mode,N),Cn(h,v),h.return=g,h)}function y(g,h,v,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Gu(v,g.mode,N),h.return=g,h):(h=l(h,v.children||[]),h.return=g,h)}function T(g,h,v,N,U){return h===null||h.tag!==7?(h=sa(v,g.mode,N,U),h.return=g,h):(h=l(h,v),h.return=g,h)}function O(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=qu(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ot:return v=Xi(h.type,h.key,h.props,null,g.mode,v),Cn(v,h),v.return=g,v;case it:return h=Gu(h,g.mode,v),h.return=g,h;case he:return h=ga(h),O(g,h,v)}if(ce(h)||B(h))return h=sa(h,g.mode,v,null),h.return=g,h;if(typeof h.then=="function")return O(g,to(h),v);if(h.$$typeof===Le)return O(g,Fi(g,h),v);no(g,h)}return null}function p(g,h,v,N){var U=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return U!==null?null:r(g,h,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ot:return v.key===U?f(g,h,v,N):null;case it:return v.key===U?y(g,h,v,N):null;case he:return v=ga(v),p(g,h,v,N)}if(ce(v)||B(v))return U!==null?null:T(g,h,v,N,null);if(typeof v.then=="function")return p(g,h,to(v),N);if(v.$$typeof===Le)return p(g,h,Fi(g,v),N);no(g,v)}return null}function b(g,h,v,N,U){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return g=g.get(v)||null,r(h,g,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ot:return g=g.get(N.key===null?v:N.key)||null,f(h,g,N,U);case it:return g=g.get(N.key===null?v:N.key)||null,y(h,g,N,U);case he:return N=ga(N),b(g,h,v,N,U)}if(ce(N)||B(N))return g=g.get(v)||null,T(h,g,N,U,null);if(typeof N.then=="function")return b(g,h,v,to(N),U);if(N.$$typeof===Le)return b(g,h,v,Fi(h,N),U);no(h,N)}return null}function _(g,h,v,N){for(var U=null,te=null,L=h,q=h=0,Me=null;L!==null&&q<v.length;q++){L.index>q?(Me=L,L=null):Me=L.sibling;var le=p(g,L,v[q],N);if(le===null){L===null&&(L=Me);break}e&&L&&le.alternate===null&&t(g,L),h=i(le,h,q),te===null?U=le:te.sibling=le,te=le,L=Me}if(q===v.length)return n(g,L),W&&fn(g,q),U;if(L===null){for(;q<v.length;q++)L=O(g,v[q],N),L!==null&&(h=i(L,h,q),te===null?U=L:te.sibling=L,te=L);return W&&fn(g,q),U}for(L=a(L);q<v.length;q++)Me=b(L,g,q,v[q],N),Me!==null&&(e&&(le=Me.alternate,le!==null&&L.delete(le.key===null?q:le.key)),h=i(Me,h,q),te===null?U=Me:te.sibling=Me,te=Me);return e&&L.forEach(function(Fn){return t(g,Fn)}),W&&fn(g,q),U}function D(g,h,v,N){if(v==null)throw Error(c(151));for(var U=null,te=null,L=h,q=h=0,Me=null,le=v.next();L!==null&&!le.done;q++,le=v.next()){L.index>q?(Me=L,L=null):Me=L.sibling;var Fn=p(g,L,le.value,N);if(Fn===null){L===null&&(L=Me);break}e&&L&&Fn.alternate===null&&t(g,L),h=i(Fn,h,q),te===null?U=Fn:te.sibling=Fn,te=Fn,L=Me}if(le.done)return n(g,L),W&&fn(g,q),U;if(L===null){for(;!le.done;q++,le=v.next())le=O(g,le.value,N),le!==null&&(h=i(le,h,q),te===null?U=le:te.sibling=le,te=le);return W&&fn(g,q),U}for(L=a(L);!le.done;q++,le=v.next())le=b(L,g,q,le.value,N),le!==null&&(e&&(Me=le.alternate,Me!==null&&L.delete(Me.key===null?q:Me.key)),h=i(le,h,q),te===null?U=le:te.sibling=le,te=le);return e&&L.forEach(function(Ly){return t(g,Ly)}),W&&fn(g,q),U}function K(g,h,v,N){if(typeof v=="object"&&v!==null&&v.type===oe&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ot:e:{for(var U=v.key;h!==null;){if(h.key===U){if(U=v.type,U===oe){if(h.tag===7){n(g,h.sibling),N=l(h,v.props.children),Cn(N,v),N.return=g,g=N;break e}}else if(h.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===he&&ga(U)===h.type){n(g,h.sibling),N=l(h,v.props),Cn(N,v),N.return=g,g=N;break e}n(g,h);break}else t(g,h);h=h.sibling}v.type===oe?(N=sa(v.props.children,g.mode,N,v.key),Cn(N,v),N.return=g,g=N):(N=Xi(v.type,v.key,v.props,null,g.mode,N),Cn(N,v),N.return=g,g=N)}return o(g);case it:e:{for(U=v.key;h!==null;){if(h.key===U)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),N=l(h,v.children||[]),N.return=g,g=N;break e}else{n(g,h);break}else t(g,h);h=h.sibling}N=Gu(v,g.mode,N),N.return=g,g=N}return o(g);case he:return v=ga(v),K(g,h,v,N)}if(ce(v))return _(g,h,v,N);if(B(v)){if(U=B(v),typeof U!="function")throw Error(c(150));return v=U.call(v),D(g,h,v,N)}if(typeof v.then=="function")return K(g,h,to(v),N);if(v.$$typeof===Le)return K(g,h,Fi(g,v),N);no(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),N=l(h,v),N.return=g,g=N):(n(g,h),N=qu(v,g.mode,N),N.return=g,g=N),o(g)):n(g,h)}return function(g,h,v,N){try{ql=0;var U=K(g,h,v,N);return Ka=null,U}catch(L){if(L===Za||L===Pi)throw L;var te=ut(29,L,null,g.mode);return te.lanes=N,te.return=g,te}finally{}}}var va=bf(!0),Tf=bf(!1),Dn=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(fe&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ki(e),nf(e,null,n),t}return Vi(e,a,t,n),ki(e)}function Gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,oc(e,n)}}function er(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var tr=!1;function Vl(){if(tr){var e=Qa;if(e!==null)throw e}}function kl(e,t,n,a){tr=!1;var l=e.updateQueue;Dn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var f=r,y=f.next;f.next=null,o===null?i=y:o.next=y,o=f;var T=e.alternate;T!==null&&(T=T.updateQueue,r=T.lastBaseUpdate,r!==o&&(r===null?T.firstBaseUpdate=y:r.next=y,T.lastBaseUpdate=f))}if(i!==null){var O=l.baseState;o=0,T=y=f=null,r=i;do{var p=r.lane&-536870913,b=p!==r.lane;if(b?(ee&p)===p:(a&p)===p){p!==0&&p===ma&&(tr=!0),T!==null&&(T=T.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var _=e,D=r;p=t;var K=n;switch(D.tag){case 1:if(_=D.payload,typeof _=="function"){O=_.call(K,O,p);break e}O=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=D.payload,p=typeof _=="function"?_.call(K,O,p):_,p==null)break e;O=J({},O,p);break e;case 2:Dn=!0}}p=r.callback,p!==null&&(e.flags|=64,b&&(e.flags|=8192),b=l.callbacks,b===null?l.callbacks=[p]:b.push(p))}else b={lane:p,tag:r.tag,payload:r.payload,callback:r.callback,next:null},T===null?(y=T=b,f=O):T=T.next=b,o|=p;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;b=r,r=b.next,b.next=null,l.lastBaseUpdate=b,l.shared.pending=null}}while(!0);T===null&&(f=O),l.baseState=f,l.firstBaseUpdate=y,l.lastBaseUpdate=T,i===null&&(l.shared.lanes=0),Gn|=o,e.lanes=o,e.memoizedState=O}}function Ef(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Sf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ef(n[e],t)}var zn=Vt(null),ao=Vt(0);function Af(e,t){e=vn,Se(ao,e),Se(zn,t),vn=e|t.baseLanes}function nr(){Se(ao,vn),Se(zn,zn.current)}function ar(){vn=ao.current,Ve(zn),Ve(ao)}var Qe=Vt(null),Fe=null;function Ln(e){var t=e.alternate;Se(Ze,Ze.current&1),Se(Qe,e),Fe===null&&(t===null||zn.current!==null||t.memoizedState!==null)&&(Fe=e)}function lr(e){Se(Ze,Ze.current),Se(Qe,e),Fe===null&&(Fe=e)}function wf(e){e.tag===22?(Se(Ze,Ze.current),Se(Qe,e),Fe===null&&(Fe=e)):Yn()}function Yn(){Se(Ze,Ze.current),Se(Qe,Qe.current)}function vt(e){Ve(Qe),Fe===e&&(Fe=null),Ve(Ze)}var Ze=Vt(0);function Xl(e,t){Se(Qe,Qe.current),Se(Ze,t)}function ir(e){Ve(Ze),Ve(Qe),Fe===e&&(Fe=null)}function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Rs(n)||xs(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mn=0,Z=null,ve=null,De=null,io=!1,Ja=!1,ba=!1,oo=0,Ql=0,Wa=null,lg=0;function xe(){throw Error(c(321))}function or(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function ur(e,t,n,a,l,i){return mn=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?ud:rd,ba=!1,i=n(a,l),ba=!1,Ja&&(i=Of(t,n,a,l)),Nf(e),i}function Nf(e){z.H=mo;var t=ve!==null&&ve.next!==null;if(mn=0,De=ve=Z=null,io=!1,Ql=0,Wa=null,t)throw Error(c(300));e===null||He||(e=e.dependencies,e!==null&&Wi(e)&&(He=!0))}function Of(e,t,n,a){Z=e;var l=0;do{if(Ja&&(Wa=null),Ql=0,Ja=!1,25<=l)throw Error(c(301));if(l+=1,De=ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=dg,i=t(n,a)}while(Ja);return i}function ig(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Zl(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(Z.flags|=1024),t}function rr(){var e=oo!==0;return oo=0,e}function sr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cr(e){if(io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}io=!1}mn=0,De=ve=Z=null,Ja=!1,Ql=oo=0,Wa=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Z.memoizedState=De=e:De=De.next=e,De}function Ue(){if(ve===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=De===null?Z.memoizedState:De.next;if(t!==null)De=t,ve=e;else{if(e===null)throw Z.alternate===null?Error(c(467)):Error(c(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},De===null?Z.memoizedState=De=e:De=De.next=e}return De}function uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zl(e){var t=Ql;return Ql+=1,Wa===null&&(Wa=[]),e=gf(Wa,e,t),t=Z,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?ud:rd),e}function ro(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zl(e);if(e.$$typeof===x)return;if(e.$$typeof===Le)return Xe(e)}throw Error(c(438,String(e)))}function fr(e){var t=null,n=Z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=Z.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=uo(),Z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=na;return t.index++,n}function pn(e,t){return typeof t=="function"?t(e):t}function so(e){var t=Ue();return dr(t,ve,e)}function dr(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var r=o=null,f=null,y=t,T=!1;do{var O=y.lane&-536870913;if(O!==y.lane?(ee&O)===O:(mn&O)===O){var p=y.revertLane;if(p===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),O===ma&&(T=!0);else if((mn&p)===p){y=y.next,p===ma&&(T=!0);continue}else O={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(r=f=O,o=i):f=f.next=O,Z.lanes|=p,Gn|=p;O=y.action,ba&&n(i,O),i=y.hasEagerState?y.eagerState:n(i,O)}else p={lane:O,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(r=f=p,o=i):f=f.next=p,Z.lanes|=O,Gn|=O;y=y.next}while(y!==null&&y!==t);if(f===null?o=i:f.next=r,!yt(i,e.memoizedState)&&(He=!0,T&&(n=Qa,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=f,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function hr(e){var t=Ue(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);yt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Rf(e,t,n){var a=Z,l=Ue(),i=W;if(i){if(n===void 0)throw Error(c(407));n=n()}else n=t();var o=!yt((ve||l).memoizedState,n);if(o&&(l.memoizedState=n,He=!0),l=l.queue,gr(jf.bind(null,a,l,e),[e]),e=l.getSnapshot!==t||o||De!==null&&(De.memoizedState.tag&1)!==0,Fa(e?9:8,{destroy:void 0},_f.bind(null,a,l,n,t),null),e){if(a.flags|=2048,Te===null)throw Error(c(349));i||(mn&127)!==0||xf(a,t,n)}return n}function xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t=uo(),Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _f(e,t,n,a){t.value=n,t.getSnapshot=a,Uf(t)&&Cf(e)}function jf(e,t,n){return n(function(){Uf(t)&&Cf(e)})}function Uf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Cf(e){var t=ra(e,2);t!==null&&ft(t,e,2)}function mr(e){var t=nt();if(typeof e=="function"){var n=e;if(e=n(),ba){Nn(!0);try{n()}finally{Nn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:e},t}function Df(e,t,n,a){return e.baseState=n,dr(e,ve,typeof a=="function"?a:pn)}function og(e,t,n,a,l){if(ho(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};z.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Hf(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Hf(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=z.T,o={};o.types=i!==null?i.types:null,z.T=o;try{var r=n(l,a),f=z.S;f!==null&&f(o,r),Mf(e,t,r)}catch(y){pr(e,t,y)}finally{i!==null&&o.types!==null&&(i.types=o.types),z.T=i}}else try{i=n(l,a),Mf(e,t,i)}catch(y){pr(e,t,y)}}function Mf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){zf(e,t,a)},function(a){return pr(e,t,a)}):zf(e,t,n)}function zf(e,t,n){t.status="fulfilled",t.value=n,Lf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hf(e,n)))}function pr(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Lf(t),t=t.next;while(t!==a)}e.action=null}function Lf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yf(e,t){return t}function Bf(e,t){if(W){var n=Te.formState;if(n!==null){e:{var a=Z;if(W){if(Ae){t:{for(var l=Ae,i=Ct;l.nodeType!==8;){if(!i){l=null;break t}if(l=Ht(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Ae=Ht(l.nextSibling),a=l.data==="F!";break e}}jn(a)}a=!1}a&&(t=n[0])}}return n=nt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yf,lastRenderedState:t},n.queue=a,n=ld.bind(null,Z,a),a.dispatch=n,a=mr(!1),i=Er.bind(null,Z,!1,a.queue),a=nt(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=og.bind(null,Z,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function If(e){var t=Ue();return qf(t,ve,e)}function qf(e,t,n){if(t=dr(e,t,Yf)[0],e=so(pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Zl(t)}catch(o){throw o===Za?Pi:o}else a=t;t=Ue();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(Z.flags|=2048,Fa(9,{destroy:void 0},ug.bind(null,l,n),null)),[a,i,e]}function ug(e,t){e.action=t}function Gf(e){var t=Ue(),n=ve;if(n!==null)return qf(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Fa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=Z.updateQueue,t===null&&(t=uo(),Z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Vf(){return Ue().memoizedState}function co(e,t,n,a){var l=nt();Z.flags|=e,l.memoizedState=Fa(1|t,{destroy:void 0},n,a===void 0?null:a)}function fo(e,t,n,a){var l=Ue();a=a===void 0?null:a;var i=l.memoizedState.inst;ve!==null&&a!==null&&or(a,ve.memoizedState.deps)?l.memoizedState=Fa(t,i,n,a):(Z.flags|=e,l.memoizedState=Fa(1|t,i,n,a))}function kf(e,t){co(8390656,8,e,t)}function gr(e,t){fo(2048,8,e,t)}function rg(e){Z.flags|=4;var t=Z.updateQueue;if(t===null)t=uo(),Z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Xf(e){var t=Ue().memoizedState;return rg({ref:t,nextImpl:e}),function(){if((fe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Qf(e,t){return fo(4,2,e,t)}function Zf(e,t){return fo(4,4,e,t)}function Kf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jf(e,t,n){n=n!=null?n.concat([e]):null,fo(4,4,Kf.bind(null,t,e),n)}function yr(){}function Wf(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&or(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Ff(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&or(t,a[1]))return a[0];if(a=e(),ba){Nn(!0);try{e()}finally{Nn(!1)}}return n.memoizedState=[a,t],a}function vr(e,t,n){return n===void 0||(mn&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=uh(),Z.lanes|=e,Gn|=e,n)}function $f(e,t,n,a){return yt(n,t)?n:zn.current!==null?(e=vr(e,n,a),yt(e,t)||(He=!0),e):(mn&106)===0||(mn&1073741824)!==0&&(ee&261930)===0?(He=!0,e.memoizedState=n):(e=uh(),Z.lanes|=e,Gn|=e,t)}function Pf(e,t,n,a,l){var i=X.p;X.p=i!==0&&8>i?i:8;var o=z.T,r={};r.types=o!==null?o.types:null,z.T=r,Er(e,!1,t,n);try{var f=l(),y=z.S;if(y!==null&&y(r,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var T=ag(f,a);Kl(e,t,T,St(e))}else Kl(e,t,a,St(e))}catch(O){Kl(e,t,{then:function(){},status:"rejected",reason:O},St())}finally{X.p=i,o!==null&&r.types!==null&&(o.types=r.types),z.T=o}}function sg(){}function br(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=ed(e).queue;Pf(e,l,t,an,n===null?sg:function(){return td(e),n(a)})}function ed(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:an,baseState:an,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:an},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function td(e){var t=ed(e);t.next===null&&(t=e.alternate.memoizedState),Kl(e,t.next.queue,{},St())}function Tr(){return Xe(gl)}function nd(){return Ue().memoizedState}function ad(){return Ue().memoizedState}function cg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=St();e=Hn(n);var a=Mn(t,e,n);a!==null&&(ft(a,t,n),Gl(a,t,n)),t={cache:Ku()},e.payload=t;return}t=t.return}}function fg(e,t,n){var a=St();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ho(e)?id(t,n):(n=Bu(e,t,n,a),n!==null&&(ft(n,e,a),od(n,t,a)))}function ld(e,t,n){var a=St();Kl(e,t,n,a)}function Kl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ho(e))id(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,r=i(o,n);if(l.hasEagerState=!0,l.eagerState=r,yt(r,o))return Vi(e,t,l,0),Te===null&&Gi(),!1}catch{}finally{}if(n=Bu(e,t,l,a),n!==null)return ft(n,e,a),od(n,t,a),!0}return!1}function Er(e,t,n,a){if(a={lane:2,revertLane:fs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ho(e)){if(t)throw Error(c(479))}else t=Bu(e,n,a,2),t!==null&&ft(t,e,2)}function ho(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function id(e,t){Ja=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function od(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,oc(e,n)}}var mo={readContext:Xe,use:ro,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useLayoutEffect:xe,useInsertionEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useSyncExternalStore:xe,useId:xe,useHostTransitionStatus:xe,useFormState:xe,useActionState:xe,useOptimistic:xe,useMemoCache:xe,useCacheRefresh:xe,useEffectEvent:xe},ud={readContext:Xe,use:ro,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:kf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,co(4194308,4,Kf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){co(4,2,e,t)},useMemo:function(e,t){var n=nt();t=t===void 0?null:t;var a=e();if(ba){Nn(!0);try{e()}finally{Nn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=nt();if(n!==void 0){var l=n(t);if(ba){Nn(!0);try{n(t)}finally{Nn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=fg.bind(null,Z,e),[a.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=mr(e);var t=e.queue,n=ld.bind(null,Z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yr,useDeferredValue:function(e,t){var n=nt();return vr(n,e,t)},useTransition:function(){var e=mr(!1);return e=Pf.bind(null,Z,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Z,l=nt();if(W){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Te===null)throw Error(c(349));(ee&127)!==0||xf(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,kf(jf.bind(null,a,i,e),[e]),a.flags|=2048,Fa(9,{destroy:void 0},_f.bind(null,a,i,n,t),null),n},useId:function(){var e=nt(),t=Te.identifierPrefix;if(W){var n=Zt,a=Qt;n=(a&~(1<<32-pt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=oo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=lg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Tr,useFormState:Bf,useActionState:Bf,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Er.bind(null,Z,!0,n),n.dispatch=t,[e,t]},useMemoCache:fr,useCacheRefresh:function(){return nt().memoizedState=cg.bind(null,Z)},useEffectEvent:function(e){var t=nt(),n={impl:e};return t.memoizedState=n,function(){if((fe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},rd={readContext:Xe,use:ro,useCallback:Wf,useContext:Xe,useEffect:gr,useImperativeHandle:Jf,useInsertionEffect:Qf,useLayoutEffect:Zf,useMemo:Ff,useReducer:so,useRef:Vf,useState:function(){return so(pn)},useDebugValue:yr,useDeferredValue:function(e,t){var n=Ue();return $f(n,ve.memoizedState,e,t)},useTransition:function(){var e=so(pn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Zl(e),t]},useSyncExternalStore:Rf,useId:nd,useHostTransitionStatus:Tr,useFormState:If,useActionState:If,useOptimistic:function(e,t){var n=Ue();return Df(n,ve,e,t)},useMemoCache:fr,useCacheRefresh:ad,useEffectEvent:Xf},dg={readContext:Xe,use:ro,useCallback:Wf,useContext:Xe,useEffect:gr,useImperativeHandle:Jf,useInsertionEffect:Qf,useLayoutEffect:Zf,useMemo:Ff,useReducer:hr,useRef:Vf,useState:function(){return hr(pn)},useDebugValue:yr,useDeferredValue:function(e,t){var n=Ue();return ve===null?vr(n,e,t):$f(n,ve.memoizedState,e,t)},useTransition:function(){var e=hr(pn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:Zl(e),t]},useSyncExternalStore:Rf,useId:nd,useHostTransitionStatus:Tr,useFormState:Gf,useActionState:Gf,useOptimistic:function(e,t){var n=Ue();return ve!==null?Df(n,ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fr,useCacheRefresh:ad,useEffectEvent:Xf};function Sr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ar={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=St(),l=Hn(a);l.payload=t,n!=null&&(l.callback=n),t=Mn(e,l,a),t!==null&&(ft(t,e,a),Gl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=St(),l=Hn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Mn(e,l,a),t!==null&&(ft(t,e,a),Gl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=St(),a=Hn(n);a.tag=2,t!=null&&(a.callback=t),t=Mn(e,a,n),t!==null&&(ft(t,e,n),Gl(t,e,n))}};function sd(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!Hl(n,a)||!Hl(l,i):!0}function cd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Ar.enqueueReplaceState(t,t.state,null)}function Ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=J({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function fd(e){qi(e)}function dd(e){console.error(e)}function hd(e){qi(e)}function po(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function md(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wr(e,t,n){return n=Hn(n),n.tag=3,n.payload={element:null},n.callback=function(){po(e,t)},n}function pd(e){return e=Hn(e),e.tag=3,e}function gd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){md(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){md(t,n,a),typeof l!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var r=a.stack;this.componentDidCatch(a.value,{componentStack:r!==null?r:""})})}function hg(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&da(t,n,l,!0),n=Qe.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Fe===null?zo():n.alternate===null&&_e===0&&(_e=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),rs(e,a,l)),!1;case 22:return n.flags|=65536,a===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),rs(e,a,l)),!1}throw Error(c(435,n.tag))}return rs(e,a,l),zo(),!1}if(W)return t=Qe.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==ku&&(e=Error(c(422),{cause:a}),Ll(_t(e,n)))):(a!==ku&&(t=Error(c(423),{cause:a}),Ll(_t(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=_t(a,n),l=wr(e.stateNode,a,l),er(e,l),_e!==4&&(_e=2)),!1;var i=Error(c(520),{cause:a});if(i=_t(i,n),ni===null?ni=[i]:ni.push(i),_e!==4&&(_e=2),t===null)return!0;a=_t(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=wr(n.stateNode,a,e),er(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Vn===null||!Vn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=pd(l),gd(l,e,n,a),er(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Nr=Error(c(461)),He=!1;function ze(e,t,n,a){t.child=e===null?Tf(t,null,n,a):va(t,e.child,n,a)}function yd(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var r in a)r!=="ref"&&(o[r]=a[r])}else o=a;return ha(t),a=ur(e,t,n,o,i,l),r=rr(),e!==null&&!He?(sr(e,t,l),gn(e,t,l)):(W&&r&&Zi(t),t.flags|=1,ze(e,t,a,l),t.child)}function vd(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Iu(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,bd(e,t,i,a,l)):(e=Xi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Dr(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hl,n(o,a)&&e.ref===t.ref)return gn(e,t,l)}return t.flags|=1,e=cn(i,a),e.ref=t.ref,e.return=t,t.child=e}function bd(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Hl(i,a)&&e.ref===t.ref)if(He=!1,t.pendingProps=a=i,Dr(e,l))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,gn(e,t,l)}return Or(e,t,n,a,l)}function Td(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return Ed(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$i(t,i!==null?i.cachePool:null),i!==null?Af(t,i):nr(),wf(t);else return a=t.lanes=536870912,Ed(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?($i(t,i.cachePool),Af(t,i),Yn(),t.memoizedState=null):(e!==null&&$i(t,null),nr(),Yn());return ze(e,t,l,n),t.child}function Jl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ed(e,t,n,a,l){var i=Wu();return i=i===null?null:{parent:Ce._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&$i(t,null),nr(),wf(t),e!==null&&da(e,t,a,!0),t.childLanes=l,null}function go(e,t){return t=yo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Sd(e,t,n){return va(t,e.child,null,n),e=go(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function mg(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(W){if(a.mode==="hidden")return e=go(t,a),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Jl(null,e);if(lr(t),(e=Ae)?(e=Kh(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},n=lf(e),n.return=t,t.child=n,Be=t,Ae=null)):e=null,e===null)throw jn(t);return t.lanes=536870912,null}return go(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(lr(t),l)if(t.flags&256)t.flags&=-257,t=Sd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(He||da(e,t,n,!1),l=(n&e.childLanes)!==0,He||l){if(zn.current===null){if(a=Te,a!==null&&(o=uc(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,ra(e,o),ft(a,e,o),Nr;zo()}t=Sd(e,t,n)}else e=i.treeContext,Ae=Ht(o.nextSibling),Be=t,W=!0,_n=null,Ct=!1,e!==null&&rf(t,e),t=go(t,a),t.flags|=134221824;return t}return e=cn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function $a(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Or(e,t,n,a,l){return ha(t),n=ur(e,t,n,a,void 0,l),a=rr(),e!==null&&!He?(sr(e,t,l),gn(e,t,l)):(W&&a&&Zi(t),t.flags|=1,ze(e,t,n,l),t.child)}function Ad(e,t,n,a,l,i){return ha(t),t.updateQueue=null,n=Of(t,a,n,l),Nf(e),a=rr(),e!==null&&!He?(sr(e,t,i),gn(e,t,i)):(W&&a&&Zi(t),t.flags|=1,ze(e,t,n,i),t.child)}function wd(e,t,n,a,l){if(ha(t),t.stateNode===null){var i=Ga,o=n.contextType;typeof o=="object"&&o!==null&&(i=Xe(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ar,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},$u(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Xe(o):Ga,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Sr(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Ar.enqueueReplaceState(i,i.state,null),kl(t,a,i,l),Vl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,f=Ta(n,r);i.props=f;var y=i.context,T=n.contextType;o=Ga,typeof T=="object"&&T!==null&&(o=Xe(T));var O=n.getDerivedStateFromProps;T=typeof O=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||y!==o)&&cd(t,i,a,o),Dn=!1;var p=t.memoizedState;i.state=p,kl(t,a,i,l),Vl(),y=t.memoizedState,r||p!==y||Dn?(typeof O=="function"&&(Sr(t,n,O,a),y=t.memoizedState),(f=Dn||sd(t,n,f,a,p,y,o))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=o,a=f):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Pu(e,t),o=t.memoizedProps,T=Ta(n,o),i.props=T,O=t.pendingProps,p=i.context,y=n.contextType,f=Ga,typeof y=="object"&&y!==null&&(f=Xe(y)),r=n.getDerivedStateFromProps,(y=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==O||p!==f)&&cd(t,i,a,f),Dn=!1,p=t.memoizedState,i.state=p,kl(t,a,i,l),Vl();var b=t.memoizedState;o!==O||p!==b||Dn||e!==null&&e.dependencies!==null&&Wi(e.dependencies)?(typeof r=="function"&&(Sr(t,n,r,a),b=t.memoizedState),(T=Dn||sd(t,n,T,a,p,b,f)||e!==null&&e.dependencies!==null&&Wi(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,f)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=f,a=T):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,$a(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=va(t,e.child,null,l),t.child=va(t,null,n,l)):ze(e,t,n,l),t.memoizedState=i.state,e=t.child):e=gn(e,t,l),e}function Nd(e,t,n,a){return ca(),t.flags|=256,ze(e,t,n,a),t.child}var Rr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xr(e){return{baseLanes:e,cachePool:mf()}}function _r(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Et),e}function Od(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(W){if(l?Ln(t):Yn(),(e=Ae)?(e=Kh(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},n=lf(e),n.return=t,t.child=n,Be=t,Ae=null)):e=null,e===null)throw jn(t);return xs(e)?t.lanes=32:t.lanes=536870912,null}return i=a.children,a=a.fallback,l?(Yn(),l=t.mode,i=yo({mode:"hidden",children:i},l),a=sa(a,l,n,null),i.return=t,a.return=t,i.sibling=a,t.child=i,a=t.child,a.memoizedState=xr(n),a.childLanes=_r(e,o,n),t.memoizedState=Rr,Jl(null,a)):(Ln(t),jr(t,i))}var r=e.memoizedState;if(r!==null){var f=r.dehydrated;if(f!==null)return pg(e,t,i,o,a,f,r,n)}return l?(Yn(),l=a.fallback,i=t.mode,r=e.child,f=r.sibling,a=cn(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&1206910976,f!==null?l=cn(f,l):(l=sa(l,i,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,Jl(null,a),a=t.child,l=e.child.memoizedState,l===null?l=xr(n):(i=l.cachePool,i!==null?(r=Ce._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=mf(),l={baseLanes:l.baseLanes|n,cachePool:i}),a.memoizedState=l,a.childLanes=_r(e,o,n),t.memoizedState=Rr,Jl(e.child,a)):(Ln(t),n=e.child,e=n.sibling,n=cn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function jr(e,t){return t=yo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yo(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function vo(e,t,n){return va(t,e.child,null,n),e=jr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pg(e,t,n,a,l,i,o,r){if(n)return t.flags&256?(Ln(t),t.flags&=-257,vo(e,t,r)):t.memoizedState!==null?(Yn(),t.child=e.child,t.flags|=128,null):(Yn(),i=l.fallback,o=t.mode,l=yo({mode:"visible",children:l.children},o),i=sa(i,o,r,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,va(t,e.child,null,r),l=t.child,l.memoizedState=xr(r),l.childLanes=_r(e,a,r),t.memoizedState=Rr,Jl(null,l));if(Ln(t),xs(i)){if(a=i.nextSibling&&i.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(l=Error(c(419)),l.stack="",l.digest=a,Ll({value:l,source:null,stack:null})),vo(e,t,r)}if(He||da(e,t,r,!1),a=(r&e.childLanes)!==0,He||a){if(zn.current!==null)return vo(e,t,r);if(a=Te,a!==null&&(l=uc(a,r),l!==0&&l!==o.retryLane))throw o.retryLane=l,ra(e,l),ft(a,e,l),Nr;return Rs(i)||zo(),vo(e,t,r)}return Rs(i)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,Ae=Ht(i.nextSibling),Be=t,W=!0,_n=null,Ct=!1,e!==null&&rf(t,e),t=jr(t,l.children),t.flags|=134221824,t)}function Rd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ji(e.return,t,n)}function xd(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&lo(n)===null&&(t=e),e=e.sibling}return t}function bo(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function Ur(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Cr(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=Ze.current;if(t.flags&128)return Xl(t,o),null;var r=(o&2)!==0;if(r?(o=o&1|2,t.flags|=128):o&=1,Xl(t,o),l==="backwards"&&e!==null?(Ur(e),ze(e,t,a,n),Ur(e)):ze(e,t,a,n),a=W?zl:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rd(e,n,t);else if(e.tag===19)Rd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=xd(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,Ur(t)),bo(t,!0,l,null,i,a);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&lo(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}bo(t,!0,n,null,i,a);break;case"together":bo(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:n=xd(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),bo(t,!1,l,n,i,a)}return t.child}function _d(e,t,n){var a=t.pendingProps;return Un(t,t.type,a.value),ze(e,t,a.children,n),t.child}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(da(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wi(e)))}function gg(e,t,n){switch(t.tag){case 3:Ai(t,t.stateNode.containerInfo),Un(t,Ce,e.memoizedState.cache),ca();break;case 27:case 5:ou(t);break;case 4:Ai(t,t.stateNode.containerInfo);break;case 10:Un(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lr(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return Ln(t),t.flags|=128,null;a=da(e,t,n,!1);var l=t.child.childLanes;return a||(n&l)!==0?Od(e,t,n):(Ln(t),e=gn(e,t,n),e!==null?e.sibling:null)}Ln(t);break;case 19:if(t.flags&128)return Cr(e,t,n);if(l=(e.flags&128)!==0,a=(n&t.childLanes)!==0,a||(da(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Cr(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Xl(t,Ze.current),a)break;return null;case 22:return t.lanes=0,Td(e,t,n,t.pendingProps);case 24:Un(t,Ce,e.memoizedState.cache)}return gn(e,t,n)}function jd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Dr(e,n)&&(t.flags&128)===0)return He=!1,gg(e,t,n);He=(e.flags&131072)!==0}else He=!1,W&&(t.flags&1048576)!==0&&uf(t,zl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ga(t.elementType),t.type=e,typeof e=="function")Iu(e)?(a=Ta(e,a),t.tag=1,t=wd(null,t,e,a,n)):(t.tag=0,t=Or(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===j){t.tag=11,t=yd(null,t,e,a,n);break e}else if(l===be){t.tag=14,t=vd(null,t,e,a,n);break e}else if(l===Le){t.tag=10,t.type=e,t=_d(null,t,n);break e}}throw t=re(e)||e,Error(c(306,t,""))}}return t;case 0:return Or(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Ta(a,t.pendingProps),wd(e,t,a,l,n);case 3:e:{if(Ai(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Pu(e,t),kl(t,a,null,n);var o=t.memoizedState;if(a=o.cache,Un(t,Ce,a),a!==i.cache&&Zu(t,[Ce],n,!0),Vl(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Nd(e,t,a,n);break e}else if(a!==l){l=_t(Error(c(424)),t),Ll(l),t=Nd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=Ht(e.firstChild),Be=t,W=!0,_n=null,Ct=!0,n=Tf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ca(),a===l){t=gn(e,t,n);break e}ze(e,t,a,n)}t=t.child}return t;case 26:return $a(e,t),e===null?(n=tm(t.type,null,t.pendingProps,null))?t.memoizedState=n:W||(t.stateNode=Hh(t.type,t.pendingProps,An.current,t)):t.memoizedState=tm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ou(t),e===null&&W&&(a=t.stateNode=Fh(t.type,t.pendingProps,An.current),Be=t,Ct=!0,l=Ae,Qn(t.type)?(_s=l,Ae=Ht(a.firstChild)):Ae=l),ze(e,t,t.pendingProps.children,n),$a(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&W&&((l=a=Ae)&&(a=cy(a,t.type,t.pendingProps,Ct),a!==null?(t.stateNode=a,Be=t,Ae=Ht(a.firstChild),Ct=!1,l=!0):l=!1),l||jn(t)),ou(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ts(l,i)?a=null:o!==null&&Ts(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=ur(e,t,ig,null,null,n),gl._currentValue=l),$a(e,t),ze(e,t,a,n),t.child;case 6:return e===null&&W&&((e=n=Ae)&&(n=fy(n,t.pendingProps,Ct),n!==null?(t.stateNode=n,Be=t,Ae=null,e=!0):e=!1),e||jn(t)),null;case 13:return Od(e,t,n);case 4:return Ai(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=va(t,null,a,n):ze(e,t,a,n),t.child;case 11:return yd(e,t,t.type,t.pendingProps,n);case 7:return a=t.pendingProps,$a(e,t),ze(e,t,a,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:return _d(e,t,n);case 9:return l=t.type._context,a=t.pendingProps.children,ha(t),l=Xe(l),a=a(l),t.flags|=1,ze(e,t,a,n),t.child;case 14:return vd(e,t,t.type,t.pendingProps,n);case 15:return bd(e,t,t.type,t.pendingProps,n);case 19:return Cr(e,t,n);case 31:return mg(e,t,n);case 22:return Td(e,t,n,t.pendingProps);case 24:return ha(t),a=Xe(Ce),e===null?(l=Wu(),l===null&&(l=Te,i=Ku(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},$u(t),Un(t,Ce,l)):((e.lanes&n)!==0&&(Pu(e,t),kl(t,null,null,n),Vl()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Un(t,Ce,a)):(a=i.cache,Un(t,Ce,a),a!==l.cache&&Zu(t,[Ce],n,!0))),ze(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=e===null?18882560:18874368:W&&Zi(t),e!==null&&e.memoizedProps.name!==a.name?t.flags|=4194816:$a(e,t),ze(e,t,a.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function yn(e){e.flags|=4}function Hr(e,t,n,a,l){var i;if((i=(e.mode&32)!==0)&&(i=n===null?im(t,a):im(t,a)&&(a.src!==n.src||a.srcSet!==n.srcSet)),i){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(fh())e.flags|=8192;else throw ya=eo,Fu}else e.flags&=-16777217}function Ud(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!om(t))if(fh())e.flags|=8192;else throw ya=eo,Fu}function To(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lc():536870912,e.lanes|=t,al|=t)}function Wl(e,t){if(!W)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&1206910976,a|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function yg(e,t,n){var a=t.pendingProps;switch(Vu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),hn(Ce),_a(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xa(t)?yn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xu())),we(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(yn(t),i!==null?(we(t),Ud(t,i)):(we(t),Hr(t,l,null,a,n))):i?i!==e.memoizedState?(yn(t),we(t),Ud(t,i)):(we(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&yn(t),we(t),Hr(t,l,e,a,n)),null;case 27:if(wi(t),n=An.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return we(t),t.subtreeFlags&=-33554433,null}e=kt.current,Xa(t)?sf(t):(e=Fh(l,a,n),t.stateNode=e,yn(t))}return we(t),t.subtreeFlags&=-33554433,null;case 5:if(wi(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return we(t),t.subtreeFlags&=-33554433,null}if(i=kt.current,Xa(t))sf(t);else{var o=ui(An.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[ke]=t,i[ot]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Je(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&yn(t)}}return we(t),t.subtreeFlags&=-33554433,Hr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&yn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=An.current,Xa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Be,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ke]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||jh(e.nodeValue,n)),e||jn(t,!0)}else e=ui(e).createTextNode(a),e[ke]=t,t.stateNode=e}return we(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Xa(t),n!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[ke]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),e=!1}else n=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(c(558))}return we(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Xa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[ke]=t}else ca(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),l=!1}else l=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),To(t,t.updateQueue),we(t),null);case 4:return _a(),e===null&&ps(t.stateNode.containerInfo),t.flags|=67108864,we(t),null;case 10:return hn(t.type),we(t),null;case 19:if(ir(t),a=t.memoizedState,a===null)return we(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)Wl(a,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=lo(e),i!==null){for(t.flags|=128,Wl(a,!1),e=i.updateQueue,t.updateQueue=e,To(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)af(n,e),n=n.sibling;return Xl(t,Ze.current&1|2),W&&fn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ht()>Co&&(t.flags|=128,l=!0,Wl(a,!1),t.lanes=4194304)}else{if(!l)if(e=lo(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,To(t,e),Wl(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!i.alternate&&!W)return we(t),null}else 2*ht()-a.renderingStartTime>Co&&n!==536870912&&(t.flags|=128,l=!0,Wl(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}if(a.tail!==null){e=a.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ht(),e.sibling=null,i=Ze.current,i=l?i&1|2:i&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!n||W?Xl(t,i):(n=i,Se(Qe,t),Se(Ze,n),Fe===null&&(Fe=t)),W&&fn(t,a.treeForkCount),e}return we(t),null;case 22:case 23:return vt(t),ar(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),n=t.updateQueue,n!==null&&To(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Ve(pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),hn(Ce),we(t),null;case 25:return null;case 30:return t.flags|=33554432,we(t),null}throw Error(c(156,t.tag))}function vg(e,t){switch(Vu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(Ce),_a(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wi(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(c(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));ca()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ir(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return _a(),null;case 10:return hn(t.type),null;case 22:case 23:return vt(t),ar(),e!==null&&Ve(pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hn(Ce),null;case 25:return null;default:return null}}function Cd(e,t){switch(Vu(t),t.tag){case 3:hn(Ce),_a();break;case 26:case 27:case 5:wi(t);break;case 4:_a();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:ir(t);break;case 10:hn(t.type);break;case 22:case 23:vt(t),ar(),e!==null&&Ve(pa);break;case 24:hn(Ce)}}function Fl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(r){ge(t,t.return,r)}}function Bn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,l=t;var f=n,y=r;try{y()}catch(T){ge(l,f,T)}}}a=a.next}while(a!==i)}}catch(T){ge(t,t.return,T)}}function Dd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Sf(t,n)}catch(a){ge(e,e.return,a)}}}function Hd(e,t,n){n.props=Ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){ge(e,t,a)}}function Kt(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:var l=e.stateNode,i=rn(e.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=qh(i)),a=l.ref;break;case 7:if(e.stateNode===null){var o=new At(e);S(e.child,!1,ry,o,void 0,void 0),e.stateNode=o}a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){ge(e,t,r)}}function Ke(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){ge(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ge(e,t,l)}else n.current=null}function Eo(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Zh(e.stateNode,t[n])}function Md(e){for(var t=e.return;t!==null&&(zr(t)&&Zh(e.stateNode,t.stateNode),!Mr(t));)t=t.return}function $l(e){for(var t=e.return;t!==null&&(zr(t)&&sy(e.stateNode,t.stateNode),!Mr(t));)t=t.return}function Mr(e){return e.tag===5||e.tag===3||e.tag===27}function zr(e){return e&&e.tag===7&&e.stateNode!==null}function Lr(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){ge(e,e.return,l)}}function Yr(e,t,n){try{var a=e.stateNode;kg(a,e.type,n,t),a[ot]=t}catch(l){ge(e,e.return,l)}}function zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qn(e.type)||e.tag===4}function Br(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ir(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xt)),Eo(e,a),se=!0;else if(l!==4&&(l===27&&(Eo(e,a),a=null,Qn(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ir(e,t,n,a),e=e.sibling;e!==null;)Ir(e,t,n,a),e=e.sibling}function So(e,t,n,a){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),Eo(e,a),se=!0;else if(l!==4&&(l===27&&(Eo(e,a),a=null,Qn(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(So(e,t,n,a),e=e.sibling;e!==null;)So(e,t,n,a),e=e.sibling}function Ld(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Je(t,a,n),t[ke]=e,t[ot]=n}catch(i){ge(e,e.return,i)}}var Ao=!1,bt=null;function Yd(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ao=!0)}var Jt=null;function Bd(){var e=Jt;return Jt=null,e}var rt=0;function Pa(e,t,n,a,l){return rt=0,Id(e.child,t,n,a,l)}function Id(e,t,n,a,l){for(var i=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(a!==null){var r=As(o);a.push(r),r.view&&(i=!0)}else i||As(o).view&&(i=!0);Ao=!0,Bh(o,rt===0?t:t+"_"+rt,n),rt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Id(e.child,t,n,a,l)&&(i=!0));e=e.sibling}return i}function Wt(e,t){for(;e!==null;)e.tag===5?Ih(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Wt(e.child,t)),e=e.sibling}function wo(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(wo(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(c(544));var n=t.name;t=sn(t.default,t.share),t!=="none"&&(Pa(e,n,t,null,!1)||Wt(e.child,!1))}e=e.sibling}}function qr(e,t){if(e.tag===30){var n=e.stateNode,a=e.memoizedProps,l=rn(a,n),i=sn(a.default,n.paired?a.share:a.enter);i!=="none"?Pa(e,l,i,null,!1)?(wo(e),n.paired||t||ul(e,a.onEnter)):Wt(e.child,!1):wo(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qr(e,t),e=e.sibling;else wo(e)}function Gr(e){if(bt!==null&&bt.size!==0){var t=bt;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,a=n.name;if(a!=null&&a!=="auto"){var l=t.get(a);if(l!==void 0){var i=sn(n.default,n.share);if(i!=="none"&&(Pa(e,a,i,null,!1)?(i=e.stateNode,l.paired=i,i.paired=l,ul(e,n.onShare)):Wt(e.child,!1)),t.delete(a),t.size===0)break}}}Gr(e)}e=e.sibling}}}function Vr(e){if(e.tag===30){var t=e.memoizedProps,n=rn(t,e.stateNode),a=bt!==null?bt.get(n):void 0,l=sn(t.default,a!==void 0?t.share:t.exit);l!=="none"&&(Pa(e,n,l,null,!1)?a!==void 0?(l=e.stateNode,a.paired=l,l.paired=a,bt.delete(n),ul(e,t.onShare)):ul(e,t.onExit):Wt(e.child,!1)),bt!==null&&Gr(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vr(e),e=e.sibling;else bt!==null&&Gr(e)}function qd(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=rn(t,e.stateNode);t=sn(t.default,t.update),e.flags&=-5,t!=="none"&&Pa(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&qd(e);e=e.sibling}}function kr(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Wt(e.child,!1))}kr(e)}e=e.sibling}}function No(e){if(e.tag===30)e.stateNode.paired=null,Wt(e.child,!1),kr(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)No(e),e=e.sibling;else kr(e)}function Gd(e){for(e=e.child;e!==null;)e.tag===30?Wt(e.child,!1):(e.subtreeFlags&33554432)!==0&&Gd(e),e=e.sibling}function Xr(e,t,n,a,l,i,o){for(var r=!1;t!==null;){if(t.tag===5){var f=t.stateNode;if(i!==null&&rt<i.length){var y=i[rt],T=As(f);(y.view||T.view)&&(r=!0);var O;if(O=(e.flags&4)===0)if(T.clip)O=!0;else{O=y.rect;var p=T.rect;O=O.y!==p.y||O.x!==p.x||O.height!==p.height||O.width!==p.width}O&&(e.flags|=4),T.abs?T=!y.abs:(y=y.rect,T=T.rect,T=y.height!==T.height||y.width!==T.width),T&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Bh(f,rt===0?n:n+"_"+rt,l),r&&(e.flags&4)!==0||(Jt===null&&(Jt=[]),Jt.push(f,rt===0?a:a+"_"+rt,t.memoizedProps)),rt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Xr(e,t.child,n,a,l,i,o)&&(r=!0));t=t.sibling}return r}function Vd(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=e.stateNode,l=rn(n,a),i=sn(n.default,n.update),o;o=e.memoizedState,e.memoizedState=null,a=e;var r=e.child;rt=0,l=Xr(a,r,l,l,i,o,!1),(e.flags&4)!==0&&l&&ul(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Vd(e);e=e.sibling}}var Ie=!1,me=!1,Ft=!1,Qr=!1,kd=typeof WeakSet=="function"?WeakSet:Set,qe=null,$t=!1,Pl=!1,Oo=!1,Zr=!1;function bg(e,t,n){if(e=e.containerInfo,vs=yl,e=Zc(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var r=0,f=-1,y=-1,T=0,O=0,p=e,b=null;t:for(;;){for(var _;p!==a||i!==0&&p.nodeType!==3||(f=r+i),p!==o||l!==0&&p.nodeType!==3||(y=r+l),p.nodeType===3&&(r+=p.nodeValue.length),(_=p.firstChild)!==null;)b=p,p=_;for(;;){if(p===e)break t;if(b===a&&++T===i&&(f=r),b===o&&++O===l&&(y=r),(_=p.nextSibling)!==null)break;p=b,b=p.parentNode}p=_}a=f===-1||y===-1?null:{start:f,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(bs={focusedElem:e,selectionRange:a},yl=!1,n=(n&335544064)===n,qe=t,t=n?9270:1024;qe!==null;){if(e=qe,n&&(a=e.deletions,a!==null))for(i=0;i<a.length;i++)n&&Vr(a[i]);if(e.alternate===null&&(e.flags&2)!==0)n&&Yd(e),Ro(n);else{if(e.tag===22){if(a=e.alternate,e.memoizedState!==null){a!==null&&a.memoizedState===null&&n&&Vr(a),Ro(n);continue}else if(a!==null&&a.memoizedState!==null){n&&Yd(e),Ro(n);continue}}a=e.child,(e.subtreeFlags&t)!==0&&a!==null?(a.return=e,qe=a):(n&&qd(e),Ro(n))}}bt=null}function Ro(e){for(;qe!==null;){var t=qe,n=e,a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){n=void 0,l=a.memoizedProps,a=a.memoizedState;var i=t.stateNode;try{var o=Ta(t.type,l);n=i.getSnapshotBeforeUpdate(o,a),i.__reactInternalSnapshotBeforeUpdate=n}catch(r){ge(t,t.return,r)}}break;case 3:if((l&1024)!==0){if(a=t.stateNode.containerInfo,n=a.nodeType,n===9)Os(a);else if(n===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Os(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&a!==null&&(n=rn(a.memoizedProps,a.stateNode),l=t.memoizedProps,l=sn(l.default,l.update),l!=="none"&&Pa(a,n,l,a.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(c(163))}if(a=t.sibling,a!==null){a.return=t.return,qe=a;break}qe=t.return}}function Xd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Pt(e,n),a&4&&Fl(5,n);break;case 1:if(Pt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ge(n,n.return,o)}else{var l=Ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(n,n.return,o)}}a&64&&Dd(n),a&512&&Kt(n,n.return);break;case 3:if(Pt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Sf(e,t)}catch(o){ge(n,n.return,o)}}break;case 27:t===null&&a&4&&Ld(n);case 26:case 5:Pt(e,n),t===null&&a&4&&Lr(n),a&512&&Kt(n,n.return);break;case 12:Pt(e,n);break;case 31:Pt(e,n),a&4&&Jd(e,n);break;case 13:Pt(e,n),a&4&&Wd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ug.bind(null,n),dy(e,n))));break;case 22:if(a=n.memoizedState!==null||Ie,!a){var i=t!==null&&t.memoizedState!==null||me;t=Ie,l=me,Ie=a,(me=i)&&!l?(a=2,(n.subtreeFlags&8772)!==0&&(a|=1),It(e,n,a)):Pt(e,n),Ie=t,me=l}break;case 30:Pt(e,n),a&512&&Kt(n,n.return);break;case 7:a&512&&Kt(n,n.return);default:Pt(e,n)}}function Kr(e,t){for(e=e.child;e!==null;)Qd(e,t),e=e.sibling}function Qd(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var a=n.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var l=e.stateNode,i=e.memoizedProps.style,o=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=o==null||typeof o=="boolean"?"":(""+o).trim()}}catch(f){ge(e,e.return,f)}Jr(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,se=!0}catch(f){ge(e,e.return,f)}break;case 18:try{var r=e.stateNode;t?Yh(r,!0):Yh(e.stateNode,!1)}catch(f){ge(e,e.return,f)}break;case 22:case 23:e.memoizedState===null&&Kr(e,t);break;default:Kr(e,t)}}function Jr(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,a=t;switch(n.tag){case 4:Qd(n,a);break e;case 22:n.memoizedState===null&&Jr(n,a);break e;default:Jr(n,a)}}e=e.sibling}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ui(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,st=!1;function Yt(e,t,n){for(n=n.child;n!==null;)Kd(e,t,n),n=n.sibling}function Kd(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 26:me||Ke(n,t),Yt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!me&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:me||Ke(n,t),$l(n);var a=Ne,l=st;Qn(n.type)&&(Ne=n.stateNode,st=!1),Yt(e,t,n),$h(n.stateNode,n.type,n.memoizedProps),Ne=a,st=l;break;case 5:me||Ke(n,t),$l(n);case 6:if(n.tag===6&&$l(n),a=Ne,l=st,Ne=null,Yt(e,t,n),Ne=a,st=l,Ne!==null)if(st)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode),se=!0}catch(i){ge(n,t,i)}else try{Ne.removeChild(n.stateNode),se=!0}catch(i){ge(n,t,i)}break;case 18:Ne!==null&&(st?(e=Ne,Lh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vl(e)):Lh(Ne,n.stateNode));break;case 4:a=Ne,l=st,Ne=n.stateNode.containerInfo,st=!0,Yt(e,t,n),Ne=a,st=l;break;case 0:case 11:case 14:case 15:Bn(2,n,t),me||Bn(4,n,t),Yt(e,t,n);break;case 1:me||(Ke(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Hd(n,t,a)),Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:me=(a=me)||n.memoizedState!==null,Yt(e,t,n),me=a;break;case 30:Ke(n,t),Yt(e,t,n);break;case 7:me||Ke(n,t),Yt(e,t,n);break;default:Yt(e,t,n)}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vl(e)}catch(n){ge(t,t.return,n)}}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vl(e)}catch(n){ge(t,t.return,n)}}function Tg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new kd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new kd),t;default:throw Error(c(435,e.tag))}}function xo(e,t){var n=Tg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=Cg.bind(null,e,a);a.then(l,l)}})}function at(e,t,n){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],o=e,r=t,f=r;e:for(;f!==null;){switch(f.tag){case 27:if(Qn(f.type)){Ne=f.stateNode,st=!1;break e}break;case 5:Ne=f.stateNode,st=!1;break e;case 3:case 4:Ne=f.stateNode.containerInfo,st=!0;break e}f=f.return}if(Ne===null)throw Error(c(160));Kd(o,r,i),Ne=null,st=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fd(t,e,n),t=t.sibling}var Bt=null;function Fd(e,t,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(var i=0;i<a.length;i++){var o=a[i];o.ref.impl=o.nextImpl}at(t,e,n),lt(e),l&4&&(Bn(3,e,e.return),Fl(3,e),Bn(5,e,e.return));break;case 1:at(t,e,n),lt(e),l&512&&(me||a===null||Ke(a,a.return)),l&64&&Ie&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(i=Bt,at(t,e,n),lt(e),l&512&&(me||a===null||Ke(a,a.return)),l&4)if(l=a!==null?a.memoizedState:null,n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null)if(Ie)e.stateNode=Hh(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,l=i.ownerDocument||i;t:switch(t){case"title":a=l.getElementsByTagName("title")[0],(!a||a[Nl]||a[ke]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=l.createElement(t),l.head.insertBefore(a,l.querySelector("head > title"))),Je(a,t,n),a[ke]=e,Ye(a),t=a;break e;case"link":if(i=lm("link","href",l).get(t+(n.href||""))){for(o=0;o<i.length;o++)if(a=i[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(o,1);break t}}a=l.createElement(t),Je(a,t,n),l.head.appendChild(a);break;case"meta":if(i=lm("meta","content",l).get(t+(n.content||""))){for(o=0;o<i.length;o++)if(a=i[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(o,1);break t}}a=l.createElement(t),Je(a,t,n),l.head.appendChild(a);break;default:throw Error(c(468,t))}a[ke]=e,Ye(a),t=a}e.stateNode=t}else Ie||Ds(i,e.type,e.stateNode);else e.stateNode=am(i,n,e.memoizedProps);else l!==n?(l===null?(t=a.stateNode,t===null||me||t.parentNode.removeChild(t)):l.count--,n===null?Ie||Ds(i,e.type,e.stateNode):am(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Yr(e,e.memoizedProps,a.memoizedProps);break;case 27:at(t,e,n),lt(e),l&512&&(me||a===null||Ke(a,a.return)),a!==null&&l&4&&Yr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(i=Ft,Ft=!1,at(t,e,n),Ft=i,lt(e),l&512&&(me||a===null||Ke(a,a.return)),e.flags&32){t=e.stateNode;try{Ma(t,""),se=!0}catch(T){ge(e,e.return,T)}}l&4&&e.stateNode!=null&&(t=e.memoizedProps,Yr(e,t,a!==null?a.memoizedProps:t)),l&1024&&(Qr=!0);break;case 6:if(at(t,e,n),lt(e),l&4){if(e.stateNode===null)throw Error(c(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,se=!0}catch(T){ge(e,e.return,T)}}break;case 3:if(se=!1,Vo=null,i=Bt,Bt=ri(t.containerInfo),at(t,e,n),Bt=i,lt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{vl(t.containerInfo)}catch(T){ge(e,e.return,T)}Qr&&(Qr=!1,$d(e)),se=!1;break;case 4:l=Ft,Ft=Ie,a=yc(),i=Bt,Bt=ri(e.stateNode.containerInfo),at(t,e,n),lt(e),Bt=i,se&&Pl&&(Oo=!0),se=a,Ft=l;break;case 12:at(t,e,n),lt(e);break;case 31:at(t,e,n),lt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xo(e,t)));break;case 13:at(t,e,n),lt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Uo=ht()),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xo(e,t)));break;case 22:i=e.memoizedState!==null,o=a!==null&&a.memoizedState!==null;var r=Ie,f=me,y=Ft;Ie=r||i,Ft=y||i,me=f||o,at(t,e,n),me=f,Ft=y,Ie=r,lt(e),l&8192&&(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||a===null||o||Ie||me||(t=o||me,n=Ie,a=me,Ie=i||Ie,me=t,In(e,2),Ie=n,me=a),!i&&Ft||Kr(e,i)),l&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,xo(e,n))));break;case 19:at(t,e,n),lt(e),l&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xo(e,t)));break;case 30:l&512&&(me||a===null||Ke(a,a.return)),l=yc(),i=Pl,o=(n&335544064)===n,r=e.memoizedProps,Pl=o&&sn(r.default,r.update)!=="none",at(t,e,n),lt(e),o&&a!==null&&se&&(e.flags|=4),Pl=i,se=l;break;case 21:break;case 7:l&512&&(me||a===null||Ke(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=e);default:at(t,e,n),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(zd(a)){n=a;break}a=a.return}a=null;for(var l=e.return;l!==null;){if(zr(l)){var i=l.stateNode;a===null?a=[i]:a.push(i)}if(Mr(l))break;l=l.return}var o=a;if(n==null)throw Error(c(160));switch(n.tag){case 27:var r=n.stateNode,f=Br(e);So(e,f,r,o);break;case 5:var y=n.stateNode;n.flags&32&&(Ma(y,""),n.flags&=-33);var T=Br(e);So(e,T,y,o);break;case 3:case 4:var O=n.stateNode.containerInfo,p=Br(e);Ir(e,p,O,o);break;default:throw Error(c(161))}}catch(b){ge(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $d(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$d(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,yl=!0,t.reset(),yl=!1),e=e.sibling}}function el(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling;else Vd(t)}function Pd(e,t){var n=e.alternate;if(n===null)qr(e,!1);else switch(e.tag){case 3:if(Zr=$t=!1,Bd(),el(t,e),!$t&&!Oo){if(e=Jt,e!==null)for(var a=0;a<e.length;a+=3){n=e[a];var l=e[a+1];Ih(n,e[a+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Zr=!0}Jt=null;break;case 5:el(t,e);break;case 4:a=$t,$t=!1,el(t,e),$t&&(Oo=!0),$t=a;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?qr(e,!1):el(t,e));break;case 30:a=$t,l=Bd(),$t=!1,el(t,e),$t&&(e.flags|=4);var i=e.memoizedProps,o=e.stateNode;t=rn(i,o),o=rn(n.memoizedProps,o);var r=sn(i.default,i.update);r==="none"?t=!1:(i=n.memoizedState,n.memoizedState=null,n=e.child,rt=0,t=Xr(e,n,t,o,r,i,!0),rt!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(ul(e,e.memoizedProps.onUpdate),Jt=l):l!==null&&(l.push.apply(l,Jt),Jt=l),$t=(e.flags&32)!==0?!0:a;break;default:el(t,e)}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xd(e,t.alternate,t),t=t.sibling}function In(e,t){for(e=e.child;e!==null;){var n=e,a=t;switch(n.tag){case 0:case 11:case 14:case 15:Bn(4,n,n.return),In(n,a);break;case 1:Ke(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Hd(n,n.return,l),In(n,a);break;case 27:(a&2)!==0&&$h(n.stateNode,n.type,n.memoizedProps);case 5:Ke(n,n.return),n.tag!==5&&n.tag!==27||$l(n),In(n,a);break;case 6:$l(n);break;case 26:Ke(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||me||l.parentNode.removeChild(l),In(n,a);break;case 22:n.memoizedState===null&&In(n,a);break;case 30:Ke(n,n.return),In(n,a);break;case 7:Ke(n,n.return);default:In(n,a)}e=e.sibling}}function It(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags,r=(n&1)!==0;switch(i.tag){case 0:case 11:case 15:It(l,i,n),Fl(4,i);break;case 1:if(It(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(T){ge(a,a.return,T)}if(a=i,l=a.updateQueue,l!==null){var f=a.stateNode;try{var y=l.shared.hiddenCallbacks;if(y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<y.length;l++)Ef(y[l],f)}catch(T){ge(a,a.return,T)}}r&&o&64&&Dd(i),Kt(i,i.return);break;case 27:(n&2)!==0&&Ld(i);case 5:i.tag!==5&&i.tag!==27||Md(i),It(l,i,n),r&&a===null&&o&4&&Lr(i),Kt(i,i.return);break;case 6:Md(i);break;case 26:f=i.stateNode,i.memoizedState!==null||f===null||Ie||Ds(ri(f.ownerDocument),i.type,f),It(l,i,n),r&&a===null&&o&4&&Lr(i),Kt(i,i.return);break;case 12:It(l,i,n);break;case 31:It(l,i,n),r&&o&4&&Jd(l,i);break;case 13:It(l,i,n),r&&o&4&&Wd(l,i);break;case 22:i.memoizedState===null&&It(l,i,n),Kt(i,i.return);break;case 30:It(l,i,n),Kt(i,i.return);break;case 7:Kt(i,i.return);default:It(l,i,n)}t=t.sibling}}function Wr(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Yl(n))}function Fr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e))}function Dt(e,t,n,a){var l=(n&335544064)===n;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)eh(e,t,n,a),t=t.sibling;else l&&Gd(t)}function eh(e,t,n,a){var l=(n&335544064)===n;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&No(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,n,a),i&2048&&Fl(9,t);break;case 1:Dt(e,t,n,a);break;case 3:Dt(e,t,n,a),l&&Zr&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Yl(i)));break;case 12:if(i&2048){Dt(e,t,n,a),i=t.stateNode;try{var o=t.memoizedProps,r=o.id,f=o.onPostCommit;typeof f=="function"&&f(r,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(y){ge(t,t.return,y)}}else Dt(e,t,n,a);break;case 31:Dt(e,t,n,a);break;case 13:Dt(e,t,n,a);break;case 23:break;case 22:o=t.stateNode,r=t.alternate,t.memoizedState!==null?(l&&r!==null&&r.memoizedState===null&&No(r),o._visibility&2?Dt(e,t,n,a):ei(e,t)):(l&&r!==null&&r.memoizedState!==null&&No(t),o._visibility&2?Dt(e,t,n,a):(o._visibility|=2,tl(e,t,n,a,(t.subtreeFlags&10256)!==0||!1))),i&2048&&Wr(r,t);break;case 24:Dt(e,t,n,a),i&2048&&Fr(t.alternate,t);break;case 30:l&&(i=t.alternate,i!==null&&(Wt(i.child,!0),Wt(t.child,!0))),Dt(e,t,n,a);break;default:Dt(e,t,n,a)}}function tl(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,r=n,f=a,y=o.flags;switch(o.tag){case 0:case 11:case 15:tl(i,o,r,f,l),Fl(8,o);break;case 23:break;case 22:var T=o.stateNode;o.memoizedState!==null?T._visibility&2?tl(i,o,r,f,l):ei(i,o):(T._visibility|=2,tl(i,o,r,f,l)),l&&y&2048&&Wr(o.alternate,o);break;case 24:tl(i,o,r,f,l),l&&y&2048&&Fr(o.alternate,o);break;default:tl(i,o,r,f,l)}t=t.sibling}}function ei(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:ei(n,a),l&2048&&Wr(a.alternate,a);break;case 24:ei(n,a),l&2048&&Fr(a.alternate,a);break;default:ei(n,a)}t=t.sibling}}var Ea=8192;function Sa(e,t,n){if(e.subtreeFlags&Ea)for(e=e.child;e!==null;)th(e,t,n),e=e.sibling}function th(e,t,n){switch(e.tag){case 26:Sa(e,t,n),e.flags&Ea&&(e.memoizedState!==null?Oy(n,Bt,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&rm(n,e)));break;case 5:Sa(e,t,n),e.flags&Ea&&(e=e.stateNode,(t&335544128)===t&&rm(n,e));break;case 3:case 4:var a=Bt;Bt=ri(e.stateNode.containerInfo),Sa(e,t,n),Bt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ea,Ea=16777216,Sa(e,t,n),Ea=a):Sa(e,t,n));break;case 30:if((e.flags&Ea)!==0&&(a=e.memoizedProps.name,a!=null&&a!=="auto")){var l=e.stateNode;l.paired=null,bt===null&&(bt=new Map),bt.set(a,l)}Sa(e,t,n);break;default:Sa(e,t,n)}}function nh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];qe=a,lh(a,e)}nh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ah(e),e=e.sibling}function ah(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&Bn(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_o(e)):ti(e);break;default:ti(e)}}function _o(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];qe=a,lh(a,e)}nh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Bn(8,t,t.return),_o(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,_o(t));break;default:_o(t)}e=e.sibling}}function lh(e,t){for(;qe!==null;){var n=qe;switch(n.tag){case 0:case 11:case 15:Bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Yl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,qe=a;else e:for(n=e;qe!==null;){a=qe;var l=a.sibling,i=a.return;if(Zd(a),a===n){qe=null;break e}if(l!==null){l.return=i,qe=l;break e}qe=i}}}var Eg={getCacheForType:function(e){var t=Xe(Ce),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Xe(Ce).controller.signal}},Sg=typeof WeakMap=="function"?WeakMap:Map,fe=0,Te=null,$=null,ee=0,pe=0,Tt=null,qn=!1,nl=!1,$r=!1,vn=0,_e=0,Gn=0,Aa=0,jo=0,Et=0,al=0,ni=null,ct=null,Pr=!1,Uo=0,ih=0,Co=1/0,Do=null,Vn=null,Oe=0,qt=null,wa=null,en=0,es=0,ts=null,oh=null,ll=null,il=null,ol=null,ai=0,Ho=null;function St(){return(fe&2)!==0&&ee!==0?ee&-ee:z.T!==null?fs():rc()}function uh(){if(Et===0)if((ee&536870912)===0||W){var e=Ri;Ri<<=1,(Ri&3932160)===0&&(Ri=262144),Et=e}else Et=536870912;return e=Qe.current,e!==null&&(e.flags|=32),Et}function ul(e,t){if(t!=null){var n=e.stateNode,a=n.ref;a===null&&(a=n.ref=qh(rn(e.memoizedProps,n))),il===null&&(il=[]),il.push(t.bind(null,a))}}function ft(e,t,n){(e===Te&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(rl(e,0),kn(e,ee,Et,!1)),wl(e,n),((fe&2)===0||e!==Te)&&(e===Te&&((fe&2)===0&&(Aa|=n),_e===4&&kn(e,ee,Et,!1)),tn(e))}function rh(e,t,n){if((fe&6)!==0)throw Error(c(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Al(e,t),l=a?Ng(e,t):as(e,t,!0),i=a;do{if(l===0){nl&&!a&&kn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Ag(n)){l=as(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var r=e;l=ni;var f=r.current.memoizedState.isDehydrated;if(f&&(rl(r,o).flags|=256),o=as(r,o,!1),o!==2&&o!==6){if($r&&!f){r.errorRecoveryDisabledLanes|=i,Aa|=i,l=4;break e}i=ct,ct=l,i!==null&&(ct===null?ct=i:ct.push.apply(ct,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){rl(e,0),kn(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:kn(a,t,Et,!qn);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Uo+300-ht(),10<l)){if(kn(a,t,Et,!qn),_i(a,0,!0)!==0)break e;en=t,a.timeoutHandle=Ss(sh.bind(null,a,n,ct,Do,Pr,t,Et,Aa,al,qn,i,"Throttled",-0,0),l);break e}sh(a,n,ct,Do,Pr,t,Et,Aa,al,qn,i,null,-0,0)}}break}while(!0);tn(e)}function sh(e,t,n,a,l,i,o,r,f,y,T,O,p,b){e.timeoutHandle=-1;var _=t.subtreeFlags,D=(i&335544064)===i;if(O=null,(D||_&8192||(_&16785408)===16785408)&&(O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},bt=null,th(t,i,O),D&&(_=O,D=e.containerInfo,D=(D.nodeType===9?D:D.ownerDocument).__reactViewTransition,D!=null&&(_.count++,_.waitingForViewTransition=!0,_=fi.bind(_),D.finished.then(_,_))),_=(i&62914560)===i?Uo-ht():(i&4194048)===i?ih-ht():0,_=Ry(O,_),_!==null)){en=i,e.cancelPendingCommit=_(yh.bind(null,e,t,i,n,a,l,o,r,f,y,T,O,null,p,b)),kn(e,i,o,!y);return}yh(e,t,i,n,a,l,o,r,f,y,T,O)}function Ag(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!yt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,a){t=ac(e,t),t&=~jo,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-pt(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&ic(e,n,t)}function Mo(){return(fe&6)===0?(li(0),!1):!0}function ns(){if($!==null){if(pe===0)var e=$.return;else e=$,dn=fa=null,cr(e),Ka=null,ql=0,e=$;for(;e!==null;)Cd(e.alternate,e),e=e.return;$=null}}function rl(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Zg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),en=0,ns(),Te=e,$=n=cn(e.current,null),ee=t,pe=0,Tt=null,qn=!1,nl=Al(e,t),$r=!1,al=Et=jo=Aa=Gn=_e=0,ct=ni=null,Pr=!1,vn=ac(e,t),Gi(),n}function ch(e,t){Z=null,z.H=mo,t===Za||t===Pi?(t=yf(),pe=3):t===Fu?(t=yf(),pe=4):pe=t===Nr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,$===null&&(_e=1,po(e,_t(t,e.current)))}function fh(){var e=Qe.current;return e===null?!0:(ee&4194048)===ee?Fe===null:(ee&62914560)===ee||(ee&536870912)!==0?e===Fe:!1}function dh(){var e=z.H;return z.H=mo,e===null?mo:e}function hh(){var e=z.A;return z.A=Eg,e}function zo(){_e=4,qn||(ee&4194048)!==ee&&Qe.current!==null||(nl=!0),(Gn&134217727)===0&&(Aa&134217727)===0||Te===null||kn(Te,ee,Et,!1)}function as(e,t,n){var a=fe;fe|=2;var l=dh(),i=hh();(Te!==e||ee!==t)&&(Do=null,rl(e,t)),t=!1;var o=_e;e:do try{if(pe!==0&&$!==null){var r=$,f=Tt;switch(pe){case 8:ns(),o=6;break e;case 3:case 2:case 9:case 6:Qe.current===null&&(t=!0);var y=pe;if(pe=0,Tt=null,sl(e,r,f,y),n&&nl){o=0;break e}break;default:y=pe,pe=0,Tt=null,sl(e,r,f,y)}}wg(),o=_e;break}catch(T){ch(e,T)}while(!0);return t&&e.shellSuspendCounter++,dn=fa=null,fe=a,z.H=l,z.A=i,$===null&&(Te=null,ee=0,Gi()),o}function wg(){for(;$!==null;)mh($)}function Ng(e,t){var n=fe;fe|=2;var a=dh(),l=hh();Te!==e||ee!==t?(Do=null,Co=ht()+500,rl(e,t)):nl=Al(e,t);e:do try{if(pe!==0&&$!==null){t=$;var i=Tt;t:switch(pe){case 1:pe=0,Tt=null,sl(e,t,i,1);break;case 2:case 9:if(pf(i)){pe=0,Tt=null,ph(t);break}t=function(){pe!==2&&pe!==9||Te!==e||(pe=7),tn(e)},i.then(t,t);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:pf(i)?(pe=0,Tt=null,ph(t)):(pe=0,Tt=null,sl(e,t,i,7));break;case 5:var o=null;switch($.tag){case 26:o=$.memoizedState;case 5:case 27:var r=$;if(o?om(o):r.stateNode.complete){pe=0,Tt=null;var f=r.sibling;if(f!==null)$=f;else{var y=r.return;y!==null?($=y,Lo(y)):$=null}break t}}pe=0,Tt=null,sl(e,t,i,5);break;case 6:pe=0,Tt=null,sl(e,t,i,6);break;case 8:ns(),_e=6;break e;default:throw Error(c(462))}}Og();break}catch(T){ch(e,T)}while(!0);return dn=fa=null,z.H=a,z.A=l,fe=n,$!==null?0:(Te=null,ee=0,Gi(),_e)}function Og(){for(;$!==null&&!Vm();)mh($)}function mh(e){var t=jd(e.alternate,e,vn);e.memoizedProps=e.pendingProps,t===null?Lo(e):$=t}function ph(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ad(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=Ad(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:cr(t);var a=t;a===Be&&(W?(Ki(a),a.tag===5&&a.stateNode!=null&&(Ae=a.stateNode)):(Ki(a),W=!0));default:Cd(n,t),t=$=af(t,vn),t=jd(n,t,vn)}e.memoizedProps=e.pendingProps,t===null?Lo(e):$=t}function sl(e,t,n,a){dn=fa=null,cr(t),Ka=null,ql=0;var l=t.return;try{if(hg(e,l,t,n,ee)){_e=1,po(e,_t(n,e.current)),$=null;return}}catch(i){if(l!==null)throw $=l,i;_e=1,po(e,_t(n,e.current)),$=null;return}t.flags&32768?(W||a===1?e=!0:nl||(ee&536870912)!==0?e=!1:(qn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Qe.current,a!==null&&a.tag===13&&(a.flags|=16384))),gh(t,e)):Lo(t)}function Lo(e){var t=e;do{if((t.flags&32768)!==0){gh(t,qn);return}e=t.return;var n=yg(t.alternate,t,vn);if(n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);_e===0&&(_e=5)}function gh(e,t){do{var n=vg(e.alternate,e);if(n!==null){n.flags&=32767,$=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){$=e;return}$=e=n}while(e!==null);_e=6,$=null}function yh(e,t,n,a,l,i,o,r,f,y,T,O){e.cancelPendingCommit=null;do Yo();while(Oe!==0);if((fe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));e===Te&&($=Te=null,ee=0),wa=t,qt=e,en=n,ts=l,oh=a,Rg(e,t,n,o,r,f,O)}}function Rg(e,t,n,a,l,i,o){var r=t.lanes|t.childLanes;if(es=r,r|=Yu,Pm(e,n,r,a,l,i),il=null,(n&335544064)===n?(ol=tg(e),a=10262):(ol=null,a=10256),(t.subtreeFlags&a)!==0||(t.flags&a)!==0?(e.callbackNode=null,e.callbackPriority=0,Dg(Ni,function(){return us(),null})):(e.callbackNode=null,e.callbackPriority=0),Ao=!1,a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,l=X.p,X.p=2,i=fe,fe|=4;try{bg(e,t,n)}finally{fe=i,X.p=l,z.T=a}}Oe=1,Ao?ll=Pg(o,e.containerInfo,ol,ls,is,_g,os,us,xg):(ls(),is(),os())}function xg(e){if(Oe!==0){var t=qt.onRecoverableError;t(e,{componentStack:null})}}function _g(){Oe===3&&(Oe=0,Pd(wa,qt),Oe=4)}function ls(){if(Oe===1){Oe=0;var e=qt,t=wa,n=en,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=X.p;X.p=2;var i=fe;fe|=4;try{Pl=Oo=!1,Fd(t,e,n),n=bs;var o=Zc(e.containerInfo),r=n.focusedElem,f=n.selectionRange;if(o!==r&&r&&r.ownerDocument&&Qc(r.ownerDocument.documentElement,r)){if(f!==null&&Du(r)){var y=f.start,T=f.end;if(T===void 0&&(T=y),"selectionStart"in r)r.selectionStart=y,r.selectionEnd=Math.min(T,r.value.length);else{var O=r.ownerDocument||document,p=O&&O.defaultView||window;if(p.getSelection){var b=p.getSelection(),_=r.textContent.length,D=Math.min(f.start,_),K=f.end===void 0?D:Math.min(f.end,_);!b.extend&&D>K&&(o=K,K=D,D=o);var g=Xc(r,D),h=Xc(r,K);if(g&&h&&(b.rangeCount!==1||b.anchorNode!==g.node||b.anchorOffset!==g.offset||b.focusNode!==h.node||b.focusOffset!==h.offset)){var v=O.createRange();v.setStart(g.node,g.offset),b.removeAllRanges(),D>K?(b.addRange(v),b.extend(h.node,h.offset)):(v.setEnd(h.node,h.offset),b.addRange(v))}}}}for(O=[],b=r;b=b.parentNode;)b.nodeType===1&&O.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<O.length;r++){var N=O[r];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}yl=!!vs,bs=vs=null}finally{fe=i,X.p=l,z.T=a}}e.current=t,Oe=2}}function is(){if(Oe===2){Oe=0;var e=qt,t=wa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var a=X.p;X.p=2;var l=fe;fe|=4;try{Xd(e,t.alternate,t)}finally{fe=l,X.p=a,z.T=n}}Oe=3}}function os(){if(Oe===4||Oe===3){Oe=0;var e=ll;ll=null,km();var t=qt,n=wa,a=en,l=oh,i=(a&335544064)===a?10262:10256;if((n.subtreeFlags&i)!==0||(n.flags&i)!==0?Oe=5:(Oe=0,wa=qt=null,vh(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(Vn=null),pu(a),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Sl,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=z.T,i=X.p,X.p=2,z.T=null;try{for(var o=t.onRecoverableError,r=0;r<l.length;r++){var f=l[r];o(f.value,{componentStack:f.stack})}}finally{z.T=n,X.p=i}}if(l=il,o=ol,ol=null,l!==null&&(il=null,o===null&&(o=[]),e!==null))for(f=0;f<l.length;f++)n=(0,l[f])(o),n!==void 0&&e.finished.finally(n);(en&3)!==0&&Yo(),tn(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Ho?ai++:(ai=0,Ho=t):(ai=0,Ho=null),li(0)}}function vh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yl(t)))}function Yo(){return ll!==null&&(ll.skipTransition(),ll=null),ls(),is(),os(),us()}function us(){if(Oe!==5)return!1;var e=qt,t=es;es=0;var n=pu(en),a=z.T,l=X.p;try{X.p=32>n?32:n,z.T=null,n=ts,ts=null;var i=qt,o=en;if(Oe=0,wa=qt=null,en=0,(fe&6)!==0)throw Error(c(331));var r=fe;if(fe|=4,ah(i.current),eh(i,i.current,o,n),fe=r,li(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Sl,i)}catch{}return!0}finally{X.p=l,z.T=a,vh(e,t)}}function bh(e,t,n){t=_t(n,t),t=wr(e.stateNode,t,2),e=Mn(e,t,2),e!==null&&(wl(e,2),tn(e))}function ge(e,t,n){if(e.tag===3)bh(e,e,n);else for(;t!==null;){if(t.tag===3){bh(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Vn===null||!Vn.has(a))){e=_t(n,e),n=pd(2),a=Mn(t,n,2),a!==null&&(gd(n,a,t,e),wl(a,2),tn(a));break}}t=t.return}}function rs(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Sg;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||($r=!0,l.add(n),e=jg.bind(null,e,t,n),t.then(e,e))}function jg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(ee&n)===n&&((_e===4||_e===3&&(ee&62914560)===ee&&300>ht()-Uo)&&(fe&2)===0?rl(e,0):jo|=n,al===ee&&(al=0)),tn(e)}function Th(e,t){t===0&&(t=lc()),e=ra(e,t),e!==null&&(wl(e,t),tn(e))}function Ug(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Th(e,n)}function Cg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),Th(e,n)}function Dg(e,t){return fu(e,t)}var cl=null,fl=null,ss=!1,Bo=!1,cs=!1,Xn=0;function tn(e){e!==fl&&e.next===null&&(fl===null?cl=fl=e:fl=fl.next=e),Bo=!0,ss||(ss=!0,Mg())}function li(e,t){if(!cs&&Bo){cs=!0;do for(var n=!1,a=cl;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,r=a.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=l&~(o&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,wh(a,i))}else i=ee,i=_i(a,a===Te?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Al(a,i)||(n=!0,wh(a,i));a=a.next}while(n);cs=!1}}function Hg(){Eh()}function Eh(){Bo=ss=!1;var e=0;Xn!==0&&Qg()&&(e=Xn);for(var t=ht(),n=null,a=cl;a!==null;){var l=a.next,i=Sh(a,t);i===0?(a.next=null,n===null?cl=l:n.next=l,l===null&&(fl=n)):(n=a,(e!==0||(i&3)!==0)&&(Bo=!0)),a=l}Oe!==0&&Oe!==5||li(e),Xn!==0&&(Xn=0)}function Sh(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-pt(i),r=1<<o,f=l[o];f===-1?((r&n)===0||(r&a)!==0)&&(l[o]=$m(r,t)):f<=t&&(e.expiredLanes|=r),i&=~r}if(t=Te,n=ee,n=_i(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&du(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Al(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&du(a),pu(n)){case 2:case 8:n=tc;break;case 32:n=Ni;break;case 268435456:n=nc;break;default:n=Ni}return a=Ah.bind(null,e),n=fu(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&du(a),e.callbackPriority=2,e.callbackNode=null,2}function Ah(e,t){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Yo()&&e.callbackNode!==n)return null;var a=ee;return a=_i(e,e===Te?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(rh(e,a,t),Sh(e,ht()),e.callbackNode!=null&&e.callbackNode===n?Ah.bind(null,e):null)}function wh(e,t){if(Yo())return null;rh(e,t,!0)}function Mg(){Kg(function(){(fe&6)!==0?fu(ec,Hg):Eh()})}function fs(){if(Xn===0){var e=ma;e===0&&(e=Oi,Oi<<=1,(Oi&261888)===0&&(Oi=256)),Xn=e}return Xn}function Nh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hi(e)}function zg(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Nh((l[ot]||null).action),o=a.submitter;o&&(t=(t=o[ot]||null)?Nh(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var r=new Yi("action","action",null,a,l);e.push({event:r,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Xn!==0){var f=new FormData(l,o);br(n,{pending:!0,data:f,method:l.method,action:i},null,f)}}else typeof i=="function"&&(r.preventDefault(),f=new FormData(l,o),br(n,{pending:!0,data:f,method:l.method,action:i},i,f))},currentTarget:l}]})}}for(var ds=0;ds<Lu.length;ds++){var hs=Lu[ds],Lg=hs.toLowerCase(),Yg=hs[0].toUpperCase()+hs.slice(1);Lt(Lg,"on"+Yg)}Lt(Wc,"onAnimationEnd"),Lt(Fc,"onAnimationIteration"),Lt($c,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(Zp,"onTransitionRun"),Lt(Kp,"onTransitionStart"),Lt(Jp,"onTransitionCancel"),Lt(Pc,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii));function Oh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var r=a[o],f=r.instance,y=r.currentTarget;if(r=r.listener,f!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=y;try{i(l)}catch(T){qi(T)}l.currentTarget=null,i=f}else for(o=0;o<a.length;o++){if(r=a[o],f=r.instance,y=r.currentTarget,r=r.listener,f!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=y;try{i(l)}catch(T){qi(T)}l.currentTarget=null,i=f}}}}function P(e,t){var n=t[cc];n===void 0&&(n=t[cc]=new Set);var a=e+"__bubble";n.has(a)||(Rh(t,e,2,!1),n.add(a))}function ms(e,t,n){var a=0;t&&(a|=4),Rh(n,e,a,t)}var Io="_reactListening"+Math.random().toString(36).slice(2);function ps(e){if(!e[Io]){e[Io]=!0,hc.forEach(function(n){n!=="selectionchange"&&(Bg.has(n)||ms(n,!1,e),ms(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Io]||(t[Io]=!0,ms("selectionchange",!1,t))}}function Rh(e,t,n,a){switch(gm(t)){case 2:var l=Uy;break;case 8:l=Cy;break;default:l=Ms}n=l.bind(null,t,n,e),l=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function gs(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var r=a.stateNode.containerInfo;if(r===l)break;if(o===4)for(o=a.return;o!==null;){var f=o.tag;if((f===3||f===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;r!==null;){if(o=la(r),o===null)return;if(f=o.tag,f===5||f===6||f===26||f===27){a=i=o;continue e}r=r.parentNode}}a=a.return}Oc(function(){var y=i,T=Eu(n),O=[];e:{var p=ef.get(e);if(p!==void 0){var b=Yi,_=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":b=Ap;break;case"focusin":_="focus",b=Ru;break;case"focusout":_="blur",b=Ru;break;case"beforeblur":case"afterblur":b=Ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=xp;break;case Wc:case Fc:case $c:b=mp;break;case Pc:b=jp;break;case"scroll":case"scrollend":b=sp;break;case"wheel":b=Cp;break;case"copy":case"cut":case"paste":b=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Uc;break;case"submit":b=Op;break;case"toggle":case"beforetoggle":b=Hp}var D=(t&4)!==0,K=!D&&(e==="scroll"||e==="scrollend"),g=D?p!==null?p+"Capture":null:p;D=[];for(var h=y,v;h!==null;){var N=h;if(v=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||v===null||g===null||(N=Rl(h,g),N!=null&&D.push(oi(h,N,v))),K)break;h=h.return}0<D.length&&(p=new b(p,_,null,n,T),O.push({event:p,listeners:D}))}}if((t&7)===0){e:{if(b=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",b&&n!==Tu&&(_=n.relatedTarget||n.fromElement)&&(la(_)||_[ja]))break e;(p||b)&&(_=T.window===T?T:(b=T.ownerDocument)?b.defaultView||b.parentWindow:window,p?(b=n.relatedTarget||n.toElement,p=y,b=b?la(b):null,b!==null&&(K=R(b),D=b.tag,b!==K||D!==5&&D!==27&&D!==6)&&(b=null)):(p=null,b=y),p!==b&&(D=_c,N="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(D=Uc,N="onPointerLeave",g="onPointerEnter",h="pointer"),K=p==null?_:Ol(p),v=b==null?_:Ol(b),_=new D(N,h+"leave",p,n,T),_.target=K,_.relatedTarget=v,N=null,la(T)===y&&(D=new D(g,h+"enter",b,n,T),D.target=v,D.relatedTarget=K,N=D),K=N,D=p&&b?et(p,b,Ig):null,p!==null&&xh(O,_,p,D,!1),b!==null&&K!==null&&xh(O,K,b,D,!0)))}e:{if(p=y?Ol(y):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var U=Bc;else if(Lc(p))if(Ic)U=kp;else{U=Gp;var te=qp}else b=p.nodeName,!b||b.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?y&&bu(y.elementType)&&(U=Bc):U=Vp;if(U&&(U=U(e,y))){Yc(O,U,n,T);break e}te&&te(e,p,y)}switch(te=y?Ol(y):window,e){case"focusin":(Lc(te)||te.contentEditable==="true")&&(Ba=te,Hu=y,Ml=null);break;case"focusout":Ml=Hu=Ba=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Kc(O,n,T);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":Kc(O,n,T)}var L;if(_u)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else Ya?Mc(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(Cc&&n.locale!=="ko"&&(Ya||q!=="onCompositionStart"?q==="onCompositionEnd"&&Ya&&(L=Rc()):(On=T,wu="value"in On?On.value:On.textContent,Ya=!0)),te=qo(y,q),0<te.length&&(q=new jc(q,e,null,n,T),O.push({event:q,listeners:te}),L?q.data=L:(L=zc(n),L!==null&&(q.data=L)))),(L=zp?Lp(e,n):Yp(e,n))&&(q=qo(y,"onBeforeInput"),0<q.length&&(te=new jc("onBeforeInput","beforeinput",null,n,T),O.push({event:te,listeners:q}),te.data=L)),zg(O,e,y,n,T)}Oh(O,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Rl(e,n),l!=null&&a.unshift(oi(e,l,i)),l=Rl(e,t),l!=null&&a.push(oi(e,l,i))),e.tag===3)return a;e=e.return}return[]}function Ig(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xh(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var r=n,f=r.alternate,y=r.stateNode;if(r=r.tag,f!==null&&f===a)break;r!==5&&r!==26&&r!==27||y===null||(f=y,l?(y=Rl(n,i),y!=null&&o.unshift(oi(n,y,f))):l||(y=Rl(n,i),y!=null&&o.push(oi(n,y,f)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qg=/\r\n?/g,Gg=/\u0000|\uFFFD/g;function _h(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Gg,"")}function jh(e,t){return t=_h(t),_h(e)===t}function ye(e,t,n,a,l,i){switch(n){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||Ma(e,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&Ma(e,""+a);else return;break;case"className":Di(e,"class",a);break;case"tabIndex":Di(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Di(e,n,a);break;case"style":wc(e,a,i);return;case"data":if(t!=="object"){Di(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Hi(a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&ye(e,t,"name",l.name,l,null),ye(e,t,"formEncType",l.formEncType,l,null),ye(e,t,"formMethod",l.formMethod,l,null),ye(e,t,"formTarget",l.formTarget,l,null)):(ye(e,t,"encType",l.encType,l,null),ye(e,t,"method",l.method,l,null),ye(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Hi(a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Xt);return;case"onScroll":a!=null&&P("scroll",e);return;case"onScrollEnd":a!=null&&P("scrollend",e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Hi(a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":P("beforetoggle",e),P("toggle",e),Ci(e,"popover",a);break;case"xlinkActuate":on(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":on(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":on(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":on(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":on(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":on(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":on(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":on(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":on(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ci(e,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=up.get(n)||n,Ci(e,n,a);else return}se=!0}function ys(e,t,n,a,l,i){switch(n){case"style":wc(e,a,i);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));(i!=null?i.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof a=="string")Ma(e,a);else if(typeof a=="number"||typeof a=="bigint")Ma(e,""+a);else return;break;case"onScroll":a!=null&&P("scroll",e);return;case"onScrollEnd":a!=null&&P("scrollend",e);return;case"onClick":a!=null&&(e.onclick=Xt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!mc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),i=n.slice(2,l?n.length-7:void 0),t=e[ot]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(i,t,l),typeof a=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(i,a,l);break e}se=!0,n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ci(e,n,a)}return}se=!0}function Je(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":P("error",e),P("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,i,o,n,null)}}l&&ye(e,t,"srcSet",n.srcSet,n,null),a&&ye(e,t,"src",n.src,n,null);return;case"input":P("invalid",e);var r=i=o=l=null,f=null,y=null;for(a in n)if(n.hasOwnProperty(a)){var T=n[a];if(T!=null)switch(a){case"name":l=T;break;case"type":o=T;break;case"checked":f=T;break;case"defaultChecked":y=T;break;case"value":i=T;break;case"defaultValue":r=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(c(137,t));break;default:ye(e,t,a,T,n,null)}}Tc(e,i,r,f,y,o,l,!1);return;case"select":P("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:ye(e,t,l,r,n,null)}t=i,n=o,e.multiple=!!a,t!=null?Ha(e,!!a,t,!1):n!=null&&Ha(e,!!a,n,!0);return;case"textarea":P("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(r=n[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:ye(e,t,o,r,n,null)}Sc(e,a,l,i);return;case"option":for(f in n)if(n.hasOwnProperty(f)&&(a=n[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ye(e,t,f,a,n,null)}return;case"dialog":P("beforetoggle",e),P("toggle",e),P("cancel",e),P("close",e);break;case"iframe":case"object":P("load",e);break;case"video":case"audio":for(a=0;a<ii.length;a++)P(ii[a],e);break;case"image":P("error",e),P("load",e);break;case"details":P("toggle",e);break;case"embed":case"source":case"link":P("error",e),P("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ye(e,t,y,a,n,null)}return;default:if(bu(t)){for(T in n)n.hasOwnProperty(T)&&(a=n[T],a!==void 0&&ys(e,t,T,a,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(a=n[r],a!=null&&ye(e,t,r,a,n,null))}var Vg={};function kg(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,r=null,f=null,y=null,T=null;for(b in n){var O=n[b];if(n.hasOwnProperty(b)&&O!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":f=O;default:a.hasOwnProperty(b)||ye(e,t,b,null,a,O)}}for(var p in a){var b=a[p];if(O=n[p],a.hasOwnProperty(p)&&(b!=null||O!=null))switch(p){case"type":b!==O&&(se=!0),i=b;break;case"name":b!==O&&(se=!0),l=b;break;case"checked":b!==O&&(se=!0),y=b;break;case"defaultChecked":b!==O&&(se=!0),T=b;break;case"value":b!==O&&(se=!0),o=b;break;case"defaultValue":b!==O&&(se=!0),r=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(c(137,t));break;default:b!==O&&ye(e,t,p,b,a,O)}}yu(e,o,r,f,y,T,i,l);return;case"select":b=o=r=p=null;for(i in n)if(f=n[i],n.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":b=f;default:a.hasOwnProperty(i)||ye(e,t,i,null,a,f)}for(l in a)if(i=a[l],f=n[l],a.hasOwnProperty(l)&&(i!=null||f!=null))switch(l){case"value":i!==f&&(se=!0),p=i;break;case"defaultValue":i!==f&&(se=!0),r=i;break;case"multiple":i!==f&&(se=!0),o=i;default:i!==f&&ye(e,t,l,i,a,f)}t=r,n=o,a=b,p!=null?Ha(e,!!n,p,!1):!!a!=!!n&&(t!=null?Ha(e,!!n,t,!0):Ha(e,!!n,n?[]:"",!1));return;case"textarea":b=p=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null&&!a.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ye(e,t,r,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":l!==i&&(se=!0),p=l;break;case"defaultValue":l!==i&&(se=!0),b=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&ye(e,t,o,l,a,i)}Ec(e,p,b);return;case"option":for(var _ in n)if(p=n[_],n.hasOwnProperty(_)&&p!=null&&!a.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:ye(e,t,_,null,a,p)}for(f in a)if(p=a[f],b=n[f],a.hasOwnProperty(f)&&p!==b&&(p!=null||b!=null))switch(f){case"selected":p!==b&&(se=!0),e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:ye(e,t,f,p,a,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var D in n)p=n[D],n.hasOwnProperty(D)&&p!=null&&!a.hasOwnProperty(D)&&ye(e,t,D,null,a,p);for(y in a)if(p=a[y],b=n[y],a.hasOwnProperty(y)&&p!==b&&(p!=null||b!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(137,t));break;default:ye(e,t,y,p,a,b)}return;default:if(bu(t)){for(var K in n)p=n[K],n.hasOwnProperty(K)&&p!==void 0&&!a.hasOwnProperty(K)&&ys(e,t,K,void 0,a,p);for(T in a)p=a[T],b=n[T],!a.hasOwnProperty(T)||p===b||p===void 0&&b===void 0||ys(e,t,T,p,a,b);return}}for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!a.hasOwnProperty(g)&&ye(e,t,g,null,a,p);for(O in a)p=a[O],b=n[O],!a.hasOwnProperty(O)||p===b||p==null&&b==null||ye(e,t,O,p,a,b)}function Uh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,r=l.duration;if(i&&r&&Uh(o)){for(o=0,r=l.responseEnd,a+=1;a<n.length;a++){var f=n[a],y=f.startTime;if(y>r)break;var T=f.transferSize,O=f.initiatorType;T&&Uh(O)&&(f=f.responseEnd,o+=T*(f<r?1:(r-y)/(f-y)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vs=null,bs=null;function ui(e){return e.nodeType===9?e:e.ownerDocument}function Ch(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hh(e,t,n,a){return n=ui(n).createElement(e),n[ke]=a,n[ot]=t,Je(n,e,t),Ye(n),n}function Ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Es=null;function Qg(){var e=window.event;return e&&e.type==="popstate"?e===Es?!1:(Es=e,!0):(Es=null,!1)}var Ss=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,Mh=typeof Promise=="function"?Promise:void 0,zh=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ss,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Mh<"u"?function(e){return Mh.resolve(null).then(e).catch(Jg)}:Ss;function Jg(e){setTimeout(function(){throw e})}function Qn(e){return e==="head"}function Lh(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),vl(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")js(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,js(n);for(var i=n.firstChild;i;){var o=i.nextSibling,r=i.nodeName;i[Nl]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&js(e.ownerDocument.body);n=l}while(n);vl(t)}function Yh(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Bh(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var a=1;else for(var l=a=0;l<t.length;l++){var i=t[l];0<i.width&&0<i.height&&a++}a===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function Ih(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Wg(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function As(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Wg(t,n,e)}function Fg(e){return e.documentElement.clientHeight}function $g(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Pg(e,t,n,a,l,i,o,r,f){var y=t.nodeType===9?t:t.ownerDocument;try{var T=y.startViewTransition({update:function(){var p=y.defaultView,b=p.navigation&&p.navigation.transition,_=y.fonts.status;a();var D=[];if(_==="loaded"&&(Fg(y),y.fonts.status==="loading"&&D.push(y.fonts.ready)),_=D.length,e!==null)for(var K=e.suspenseyImages,g=0,h=0;h<K.length;h++){var v=K[h];if(!v.complete){var N=v.getBoundingClientRect();if(0<N.bottom&&0<N.right&&N.top<p.innerHeight&&N.left<p.innerWidth){if(g+=um(v),g>ko){D.length=_;break}v=new Promise($g.bind(v)),D.push(v)}}}if(0<D.length)return p=Promise.race([Promise.all(D),new Promise(function(U){return setTimeout(U,500)})]).then(l,l),(b?Promise.allSettled([b.finished,p]):p).then(i,i);if(l(),b)return b.finished.then(i,i);i()},types:n});y.__reactViewTransition=T;var O=[];return T.ready.then(function(){for(var p=y.documentElement.getAnimations({subtree:!0}),b=0;b<p.length;b++){var _=p[b],D=_.effect,K=D.pseudoElement;if(K!=null&&K.startsWith("::view-transition")){O.push(_),_=D.getKeyframes();for(var g=K=void 0,h=!0,v=0;v<_.length;v++){var N=_[v],U=N.width;if(K===void 0)K=U;else if(K!==U){h=!1;break}if(U=N.height,g===void 0)g=U;else if(g!==U){h=!1;break}delete N.width,delete N.height,N.transform==="none"&&delete N.transform}h&&K!==void 0&&g!==void 0&&(D.setKeyframes(_),h=getComputedStyle(D.target,D.pseudoElement),h.width!==K||h.height!==g)&&(h=_[0],h.width=K,h.height=g,h=_[_.length-1],h.width=K,h.height=g,D.setKeyframes(_))}}o()},function(p){y.__reactViewTransition===T&&(y.__reactViewTransition=null);try{if(typeof p=="object"&&p!==null)switch(p.name){case"InvalidStateError":(p.message==="View transition was skipped because document visibility state is hidden."||p.message==="Skipping view transition because document visibility state has become hidden."||p.message==="Skipping view transition because viewport size changed."||p.message==="Transition was aborted because of invalid state")&&(p=null)}p!==null&&f(p)}finally{a(),l(),o()}}),T.finished.finally(function(){for(var p=0;p<O.length;p++)O[p].cancel();y.__reactViewTransition===T&&(y.__reactViewTransition=null),r()}),T}catch{return a(),l(),o(),null}}function Na(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Na.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:J({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Na.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),a=[],l=0;l<n.length;l++){var i=n[l].effect;i!==null&&i.target===e&&i.pseudoElement===t&&a.push(n[l])}return a},Na.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function qh(e){return{name:e,group:new Na("group",e),imagePair:new Na("image-pair",e),old:new Na("old",e),new:new Na("new",e)}}function At(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}At.prototype.addEventListener=function(e,t,n){var a=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(a=n.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(Vh(i,e,t,n)===-1){var o=this,r=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(r=function(f){o.removeEventListener(e,t,n),typeof t=="function"?t.call(this,f):t.handleEvent(f)}),a!==null&&(l=o.removeEventListener.bind(o,e,t,n),a.addEventListener("abort",l,{once:!0}),l=a.removeEventListener.bind(a,"abort",l)),a=dl(n),i.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:r,cleanup:l}),S(this._fragmentFiber.child,!1,ey,e,r,a)}this._eventListeners=i}};function ey(e,t,n,a){return ae(e).addEventListener(t,n,a),!1}At.prototype.removeEventListener=function(e,t,n){var a=this._eventListeners;if(a!==null&&(t=Vh(a,e,t,n),t!==-1)){var l=a[t];n=l.attachedListener;var i=l.cleanup;l=dl(l.optionsOrUseCapture),S(this._fragmentFiber.child,!1,ty,e,n,l),a.splice(t,1),i!==null&&i()}};function ty(e,t,n,a){return ae(e).removeEventListener(t,n,a),!1}function dl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Gh(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Vh(e,t,n,a){if(e.length===0)return-1;a=Gh(a);for(var l=0;l<e.length;l++){var i=e[l];if(i.type===t&&i.listener===n&&Gh(i.optionsOrUseCapture)===a)return l}return-1}At.prototype.dispatchEvent=function(e){var t=C(this._fragmentFiber);if(t===null)return!0;t=ae(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var i=n[l];a.addEventListener(i.type,i.attachedListener,dl(i.optionsOrUseCapture))}if(t.appendChild(a),e=a.dispatchEvent(e),n)for(l=0;l<n.length;l++)i=n[l],a.removeEventListener(i.type,i.attachedListener,dl(i.optionsOrUseCapture));return t.removeChild(a),e}return t.dispatchEvent(e)},At.prototype.focus=function(e){S(this._fragmentFiber.child,!0,kh,e,void 0,void 0)};function kh(e,t){return e.tag===6?!1:(e=ae(e),hy(e,t))}At.prototype.focusLast=function(e){var t=[];S(this._fragmentFiber.child,!0,ws,t,void 0,void 0);for(var n=t.length-1;0<=n&&!kh(t[n],e);n--);};function ws(e,t){return t.push(e),!1}At.prototype.blur=function(){var e=C(this._fragmentFiber);e!==null&&(e=ae(e),e=ui(e).activeElement,e!==null&&S(this._fragmentFiber.child,!1,ny,e,void 0,void 0))};function ny(e,t){return e.tag===6?!1:(e=ae(e),e===t||e.contains(t)?(t.blur(),!0):!1)}At.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),S(this._fragmentFiber.child,!1,ay,e,void 0,void 0)};function ay(e,t){return e.tag===6||(e=ae(e),t.observe(e)),!1}At.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),S(this._fragmentFiber.child,!1,ly,e,void 0,void 0);for(var n=t=0;n<Gt.length;n++){var a=Gt[n];a.fragmentInstance===this&&a.observer===e?e.unobserve(a.instance):Gt[t++]=a}Gt.length=t}};function ly(e,t){return e.tag===6||(e=ae(e),t.unobserve(e)),!1}var Gt=[],Ns=!1;function iy(e,t,n){Gt.push({fragmentInstance:e,observer:t,instance:n}),Ns||(Ns=!0,my(function(){Ns=!1;var a=Gt;Gt=[];for(var l=0;l<a.length;l++){var i=a[l];i.observer.unobserve(i.instance)}}))}At.prototype.getClientRects=function(){var e=[];return S(this._fragmentFiber.child,!1,oy,e,void 0,void 0),e};function oy(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=ae(e),t.push.apply(t,e.getClientRects());return!1}At.prototype.getRootNode=function(e){var t=C(this._fragmentFiber);return t===null?this:ae(t).getRootNode(e)},At.prototype.compareDocumentPosition=function(e){var t=C(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];S(this._fragmentFiber.child,!1,ws,n,void 0,void 0);var a=ae(t);if(n.length===0){if(n=a,Ee(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var l=a=n.compareDocumentPosition(e);return n===e?l=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=F(t)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=ae(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=ae(n[0]),l=ae(n[n.length-1]);var i=Ee(this._fragmentFiber)?t.parentElement:a;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),r=l.compareDocumentPosition(e),f=o&Node.DOCUMENT_POSITION_CONTAINED_BY||r&Node.DOCUMENT_POSITION_CONTAINED_BY;return r=a&&i&&o&Node.DOCUMENT_POSITION_FOLLOWING&&r&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===e||i&&l===e||f||r?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===e||!i&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||uy(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function uy(e,t,n,a,l){var i=la(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!i)e:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){n=!0;break e}i=i.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;e:{for(i=t,t=C(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break e}i=i.return}i=!1}return i}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===n)&&(t=et(n,i,Nt),t===null?t=!1:(S(t,!0,Pe,i,n),i=je,je=null,t=i!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===a)&&(t=et(a,i,Nt),t===null?t=!1:(S(t,!0,wt,i,a),i=je,$e=je=null,t=i!==null)),t):!1}function Xh(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}At.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(c(566));var t=[];S(this._fragmentFiber.child,!1,ws,t,void 0,void 0);var n=e!==!1;if(t.length===0){var a=F(this._fragmentFiber);if(a=n?a[1]||a[0]||C(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){e=ae(a),Xh(e,n);return}if(a=ae(a),a.nodeType!==9){if(a.nodeType===11){n="host"in a?a.host:null,n!==null&&n.scrollIntoView(e);return}a.scrollIntoView(e)}}for(a=n?t.length-1:0;a!==(n?-1:t.length);){var l=t[a];l.tag===6?(l=ae(l),Xh(l,n)):ae(l).scrollIntoView(e),a+=n?-1:1}};function ry(e,t){return e=ae(e),Qh(e,t),!1}function Qh(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Zh(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.addEventListener(l.type,l.attachedListener,dl(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){for(var o=0,r=0;r<Gt.length;r++){var f=Gt[r];(f.fragmentInstance!==t||f.observer!==i||f.instance!==e)&&(Gt[o++]=f)}Gt.length=o,i.observe(e)}),Qh(e,t))}function sy(e,t){var n=t._eventListeners;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];e.removeEventListener(l.type,l.attachedListener,dl(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(i){typeof i.rootMargin=="string"?iy(t,i,e):i.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Os(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Os(n),Ui(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function cy(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Nl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Ht(e.nextSibling),e===null)break}return null}function fy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ht(e.nextSibling),e===null))return null;return e}function Kh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ht(e.nextSibling),e===null))return null;return e}function Rs(e){return e.data==="$?"||e.data==="$~"}function xs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dy(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _s=null;function Jh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ht(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Wh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function hy(e,t){function n(){a=!0}if(e.ownerDocument.activeElement===e)return!0;var a=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return a}function my(e){zh(function(){zh(function(t){return e(t)})})}function Fh(e,t,n){switch(t=ui(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function $h(e,t,n){for(var a in n){var l=n[a];n.hasOwnProperty(a)&&l!=null&&ye(e,t,a,null,Vg,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Xt&&(e.onclick=null),Ui(e)}function js(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ui(e)}var Mt=new Map,Ph=new Set;function ri(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var bn=X.d;X.d={f:py,r:gy,D:yy,C:vy,L:by,m:Ty,X:Sy,S:Ey,M:Ay};function py(){var e=bn.f(),t=Mo();return e||t}function gy(e){var t=Ua(e);t!==null&&t.tag===5&&t.type==="form"?td(t):bn.r(e)}var hl=typeof document>"u"?null:document;function em(e,t,n){var a=hl;if(a&&typeof t=="string"&&t){var l=Rt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Ph.has(l)||(Ph.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Je(t,"link",e),Ye(t),a.head.appendChild(t)))}}function yy(e){bn.D(e),em("dns-prefetch",e,null)}function vy(e,t){bn.C(e,t),em("preconnect",e,t)}function by(e,t,n){bn.L(e,t,n);var a=hl;if(a&&e&&t){var l='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Rt(n.imageSizes)+'"]')):l+='[href="'+Rt(e)+'"]';var i=l;switch(t){case"style":i=ml(e);break;case"script":i=pl(e)}if(!(Mt.has(i)||(e=J({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(si(i))||t==="script"&&a.querySelector(ci(i))))){var o=a.createElement("link");Je(o,"link",e),t==="style"&&(o[ji]=!0,o.onload=o.onerror=function(){dc(o)}),Ye(o),a.head.appendChild(o)}}}function Ty(e,t){bn.m(e,t);var n=hl;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Rt(a)+'"][href="'+Rt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=pl(e)}if(!Mt.has(i)&&(e=J({rel:"modulepreload",href:e},t),Mt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ci(i)))return}a=n.createElement("link"),Je(a,"link",e),Ye(a),n.head.appendChild(a)}}}function Ey(e,t,n){bn.S(e,t,n);var a=hl;if(a&&e){var l=Ca(a).hoistableStyles,i=ml(e);t=t||"default";var o=l.get(i);if(!o){var r={loading:0,preload:null};if(o=a.querySelector(si(i)))r.loading=5;else{e=J({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mt.get(i))&&Us(e,n);var f=o=a.createElement("link");Ye(f),Je(f,"link",e),f._p=new Promise(function(y,T){f.onload=y,f.onerror=T}),f.addEventListener("load",function(){r.loading|=1}),f.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Go(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:r},l.set(i,o)}}}function Sy(e,t){bn.X(e,t);var n=hl;if(n&&e){var a=Ca(n).hoistableScripts,l=pl(e),i=a.get(l);i||(i=n.querySelector(ci(l)),i||(e=J({src:e,async:!0},t),(t=Mt.get(l))&&Cs(e,t),i=n.createElement("script"),Ye(i),Je(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Ay(e,t){bn.M(e,t);var n=hl;if(n&&e){var a=Ca(n).hoistableScripts,l=pl(e),i=a.get(l);i||(i=n.querySelector(ci(l)),i||(e=J({src:e,async:!0,type:"module"},t),(t=Mt.get(l))&&Cs(e,t),i=n.createElement("script"),Ye(i),Je(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function tm(e,t,n,a){var l=(l=An.current)?ri(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=ml(n.href),t=Ca(l).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ml(n.href);var i=Ca(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(si(e)))?i._p||(o.instance=i,o.state.loading=5):(i=Mt.get(e),i||(i={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mt.set(e,i)),wy(l,e,i,o.state))),t&&a===null)throw Error(c(528,""));return o}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=pl(n),t=Ca(l).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ml(e){return'href="'+Rt(e)+'"'}function si(e){return'link[rel="stylesheet"]['+e+"]"}function nm(e){return J({},e,{"data-precedence":e.precedence,precedence:null})}function wy(e,t,n,a){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[ji]!==!0){a.loading=1;return}}else t=e.createElement("link"),t[ji]=!0,t.onload=t.onerror=dc.bind(null,t),Je(t,"link",n),Ye(t),e.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function pl(e){return'[src="'+Rt(e)+'"]'}function ci(e){return"script[async]"+e}function am(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Rt(n.href)+'"]');if(a)return t.instance=a,Ye(a),a;var l=J({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ye(a),Je(a,"style",l),Go(a,n.precedence,e),t.instance=a;case"stylesheet":l=ml(n.href);var i=e.querySelector(si(l));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;a=nm(n),(l=Mt.get(l))&&Us(a,l),i=(e.ownerDocument||e).createElement("link"),Ye(i);var o=i;return o._p=new Promise(function(r,f){o.onload=r,o.onerror=f}),Je(i,"link",a),t.state.loading|=4,Go(i,n.precedence,e),t.instance=i;case"script":return i=pl(n.src),(l=e.querySelector(ci(i)))?(t.instance=l,Ye(l),l):(a=n,(l=Mt.get(i))&&(a=J({},n),Cs(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ye(l),Je(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Go(a,n.precedence,e));return t.instance}function Go(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var r=a[o];if(r.dataset.precedence===t)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Us(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vo=null;function lm(e,t,n){if(Vo===null){var a=new Map,l=Vo=new Map;l.set(n,a)}else l=Vo,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Nl]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var r=a.get(o);r?r.push(i):a.set(o,[i])}}return a}function Ds(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ny(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function im(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function om(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function um(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function rm(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=um(t),e.suspenseyImages.push(t)),e=xy.bind(e),t.decode().then(e,e))}function Oy(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=ml(a.href),i=t.querySelector(si(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=fi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Ye(i);return}i=t.ownerDocument||t,a=nm(a),(l=Mt.get(l))&&Us(a,l),i=i.createElement("link"),Ye(i);var o=i;o._p=new Promise(function(r,f){o.onload=r,o.onerror=f}),Je(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=fi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ko=0;function Ry(e,t){return e.stylesheets&&e.count===0&&Qo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&ko===0&&(ko=62500*Xg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qo(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>ko?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function sm(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Qo(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function fi(){this.count--,sm(this)}function xy(){this.imgCount--,sm(this)}var Xo=null;function Qo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xo=new Map,t.forEach(_y,e),Xo=null,fi.call(e))}function _y(e,t){if(!(t.state.loading&4)){var n=Xo.get(e);if(n)var a=n.get(null);else{n=new Map,Xo.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=fi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var gl={$$typeof:Le,Provider:null,Consumer:null,_currentValue:an,_currentValue2:an,_threadCount:0};function jy(e,t,n,a,l,i,o,r,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.hiddenUpdates=hu(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function cm(e,t,n,a,l,i,o,r,f,y,T,O){return e=new jy(e,t,n,o,f,y,T,O,r),t=1,i===!0&&(t|=24),i=ut(3,null,null,t),e.current=i,i.stateNode=e,t=Ku(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},$u(i),e}function fm(e){return e?(e=Ga,e):Ga}function dm(e,t,n,a,l,i){l=fm(l),a.context===null?a.context=l:a.pendingContext=l,a=Hn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=Mn(e,a,t),n!==null&&(ft(n,e,t),Gl(n,e,t))}function hm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hs(e,t){hm(e,t),(e=e.alternate)&&hm(e,t)}function mm(e){if(e.tag===13||e.tag===31){var t=ra(e,67108864);t!==null&&ft(t,e,67108864),Hs(e,67108864)}}function pm(e){if(e.tag===13||e.tag===31){var t=St();t=mu(t);var n=ra(e,t);n!==null&&ft(n,e,t),Hs(e,t)}}var yl=!0;function Uy(e,t,n,a){var l=z.T;z.T=null;var i=X.p;try{X.p=2,Ms(e,t,n,a)}finally{X.p=i,z.T=l}}function Cy(e,t,n,a){var l=z.T;z.T=null;var i=X.p;try{X.p=8,Ms(e,t,n,a)}finally{X.p=i,z.T=l}}function Ms(e,t,n,a){if(yl){var l=zs(a);if(l===null)gs(e,t,a,Zo,n),ym(e,a);else if(Hy(l,e,t,n,a))a.stopPropagation();else if(ym(e,a),t&4&&-1<Dy.indexOf(e)){for(;l!==null;){var i=Ua(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=aa(i.pendingLanes);if(o!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var f=1<<31-pt(o);r.entanglements[1]|=f,o&=~f}tn(i),(fe&6)===0&&(Co=ht()+500,li(0))}}break;case 31:case 13:r=ra(i,2),r!==null&&ft(r,i,2),Mo(),Hs(i,2)}if(i=zs(a),i===null&&gs(e,t,a,Zo,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else gs(e,t,a,null,n)}}function zs(e){return e=Eu(e),Ls(e)}var Zo=null;function Ls(e){if(Zo=null,e=la(e),e!==null){var t=R(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=I(t),e!==null)return e;e=null}else if(n===31){if(e=G(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zo=e,null}function gm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xm()){case ec:return 2;case tc:return 8;case Ni:case Qm:return 32;case nc:return 268435456;default:return 32}default:return 32}}var Ys=!1,Zn=null,Kn=null,Jn=null,di=new Map,hi=new Map,Wn=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ym(e,t){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(t.pointerId)}}function mi(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Ua(t),t!==null&&mm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Hy(e,t,n,a,l){switch(t){case"focusin":return Zn=mi(Zn,e,t,n,a,l),!0;case"dragenter":return Kn=mi(Kn,e,t,n,a,l),!0;case"mouseover":return Jn=mi(Jn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return di.set(i,mi(di.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,hi.set(i,mi(hi.get(i)||null,e,t,n,a,l)),!0}return!1}function vm(e){var t=la(e.target);if(t!==null){var n=R(t);if(n!==null){if(t=n.tag,t===13){if(t=I(n),t!==null){e.blockedOn=t,sc(e.priority,function(){pm(n)});return}}else if(t===31){if(t=G(n),t!==null){e.blockedOn=t,sc(e.priority,function(){pm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zs(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Tu=a,n.target.dispatchEvent(a),Tu=null}else return t=Ua(n),t!==null&&mm(t),e.blockedOn=n,!1;t.shift()}return!0}function bm(e,t,n){Ko(e)&&n.delete(t)}function My(){Ys=!1,Zn!==null&&Ko(Zn)&&(Zn=null),Kn!==null&&Ko(Kn)&&(Kn=null),Jn!==null&&Ko(Jn)&&(Jn=null),di.forEach(bm),hi.forEach(bm)}function Jo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,My)))}var Wo=null;function Tm(e){Wo!==e&&(Wo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Wo===e&&(Wo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Ls(a||n)===null)continue;break}var i=Ua(n);i!==null&&(e.splice(t,3),t-=3,br(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function vl(e){function t(f){return Jo(f,e)}Zn!==null&&Jo(Zn,e),Kn!==null&&Jo(Kn,e),Jn!==null&&Jo(Jn,e),di.forEach(t),hi.forEach(t);for(var n=0;n<Wn.length;n++){var a=Wn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)vm(n),n.blockedOn===null&&Wn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[ot]||null;if(typeof i=="function")o||Tm(n);else if(o){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[ot]||null)r=o.formAction;else if(Ls(l)!==null)continue}else r=o.action;typeof r=="function"?n[a+1]=r:(n.splice(a,3),a-=3),Tm(n)}}}function Em(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Bs(e){this._internalRoot=e}Fo.prototype.render=Bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=St();dm(n,a,e,t,null,null)},Fo.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dm(e.current,2,null,e,null,null),Mo(),t[ja]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=rc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wn.length&&t!==0&&t<Wn[n].priority;n++);Wn.splice(n,0,e),n===0&&vm(e)}};var Sm=d.version;if(Sm!=="19.3.0")throw Error(c(527,Sm,"19.3.0"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=M(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var zy={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{Sl=$o.inject(zy),mt=$o}catch{}}return gi.createRoot=function(e,t){if(!A(e))throw Error(c(299));var n=!1,a="",l=fd,i=dd,o=hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=cm(e,1,!1,null,null,n,a,null,l,i,o,Em),e[ja]=t.current,ps(e),new Bs(t)},gi.hydrateRoot=function(e,t,n){if(!A(e))throw Error(c(299));var a=!1,l="",i=fd,o=dd,r=hd,f=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),t=cm(e,1,!0,t,n??null,a,l,f,i,o,r,Em),t.context=fm(null),n=t.current,a=St(),a=mu(a),l=Hn(a),l.callback=null,Mn(n,l,a),n=a,t.current.lanes=n,wl(t,n),tn(t),e[ja]=t.current,ps(e),new Fo(t)},gi.version="19.3.0",gi}var Cm;function Qy(){if(Cm)return Gs.exports;Cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),Gs.exports=Xy(),Gs.exports}var Zy=Qy();const Oa={futureWorld:new URL(""+new URL("result-future-world-v4-C_B3ZATV.png",import.meta.url).href,import.meta.url).href,transitionWorld:new URL(""+new URL("welcome-name-bg-C2irimY2.png",import.meta.url).href,import.meta.url).href,questionWorld:new URL(""+new URL("world-master-q1-q3-Bve8q5cj.png",import.meta.url).href,import.meta.url).href},Tn={explorer:new URL(""+new URL("result-hero-explorer-male-C3HOzdJp.png",import.meta.url).href,import.meta.url).href,builder:new URL(""+new URL("result-hero-builder-female-CVfYd4rn.png",import.meta.url).href,import.meta.url).href,leader:new URL(""+new URL("result-hero-leader-male-D2qmJOcv.png",import.meta.url).href,import.meta.url).href,navigator:new URL(""+new URL("result-hero-navigator-male-CHaqvyki.png",import.meta.url).href,import.meta.url).href,pathfinder:new URL(""+new URL("result-hero-pathfinder-female-B677tJpB.png",import.meta.url).href,import.meta.url).href,tactician:new URL(""+new URL("result-hero-tactician-male-BKZ7ODK-.png",import.meta.url).href,import.meta.url).href,captain:new URL(""+new URL("result-hero-captain-female-OKHQJ_9G.png",import.meta.url).href,import.meta.url).href,pioneer:new URL(""+new URL("result-hero-pioneer-male-R3cspVjR.png",import.meta.url).href,import.meta.url).href,strategos:new URL(""+new URL("result-hero-strategos-female-C4OOJDhq.png",import.meta.url).href,import.meta.url).href},En={explorer:new URL(""+new URL("01-explorer-CbaQrFTZ.png",import.meta.url).href,import.meta.url).href,builder:new URL(""+new URL("02-builder-mg0SMib4.png",import.meta.url).href,import.meta.url).href,leader:new URL(""+new URL("03-leader-CWAJvaN3.png",import.meta.url).href,import.meta.url).href,navigator:new URL(""+new URL("04-navigator-hSWs7PyQ.png",import.meta.url).href,import.meta.url).href,pathfinder:new URL(""+new URL("05-pathfinder-Dz9XBz4y.png",import.meta.url).href,import.meta.url).href,tactician:new URL(""+new URL("06-tactician-C6u7rcLK.png",import.meta.url).href,import.meta.url).href,captain:new URL(""+new URL("07-captain-nK8Pk0hU.png",import.meta.url).href,import.meta.url).href,pioneer:new URL(""+new URL("08-pioneer-B31bJQgj.png",import.meta.url).href,import.meta.url).href,strategos:new URL(""+new URL("09-strategos-CRT10XGg.png",import.meta.url).href,import.meta.url).href},bi=[{id:"captain",name:"Captain",family:"explore",familyLabel:"Explore",tier:3,scope:"Strategic ownership",descriptor:"Discover bold new frontiers.",shortMeaning:"Direction and alignment across projects.",whatItMeans:"Lead people to discover an important strategic frontier and commit to a portfolio of Impact Projects.",proof:"Proof includes 10+ people and at least US$1 million in committed portfolio value.",image:Tn.captain,avatarPosition:"52% center",backgroundImage:En.captain,backgroundPosition:"center",accent:"#003F8A",comingLater:!0},{id:"pioneer",name:"Pioneer",family:"build",familyLabel:"Build",tier:3,scope:"Strategic ownership",descriptor:"Create game-changing possibilities.",shortMeaning:"Shared capabilities, dependencies, connections and enabling systems.",whatItMeans:"Lead people to build and validate a portfolio of pioneering solutions for a strategic priority.",proof:"Proof includes 10+ people and at least US$1 million in validated portfolio value.",image:Tn.pioneer,avatarPosition:"50% center",backgroundImage:En.pioneer,backgroundPosition:"center",accent:"#005C28",comingLater:!0},{id:"strategos",name:"Strategos",family:"lead",familyLabel:"Lead",tier:3,scope:"Strategic ownership",descriptor:"Deliver transformational strategic impact.",shortMeaning:"Combined adoption, performance and strategic impact.",whatItMeans:"Lead people to deploy solutions against a key strategic priority and achieve independently confirmed impact.",proof:"Proof includes 10+ people and at least US$1 million in confirmed impact.",image:Tn.strategos,avatarPosition:"54% center",backgroundImage:En.strategos,backgroundPosition:"center",accent:"#A00020",comingLater:!0},{id:"navigator",name:"Navigator",family:"explore",familyLabel:"Explore",tier:2,scope:"Develop another owner",descriptor:"Spark curiosity in Explorers.",shortMeaning:"Help another person sharpen what may be worth pursuing without taking the question away from them.",whatItMeans:"Improve another person’s ability to frame, test, challenge and judge their own possibilities while ownership stays with them.",proof:"Proof looks like stronger approved proposals that remain owned by the people you enabled.",image:Tn.navigator,avatarPosition:"48% center",backgroundImage:En.navigator,backgroundPosition:"center",accent:"#003F8A",href:"https://enchanting-bunny-07fee5.netlify.app/roles/navigator"},{id:"pathfinder",name:"Pathfinder",family:"build",familyLabel:"Build",tier:2,scope:"Develop another owner",descriptor:"Ignite creativity in Builders.",shortMeaning:"Help someone grow as a builder through a build that stays theirs.",whatItMeans:"A working build is only half the evidence. The other half is whether the person who built it became more capable along the way.",proof:"Proof looks like validated prototypes and stronger builders who can explain, adapt and repeat the work.",image:Tn.pathfinder,avatarPosition:"53% center",backgroundImage:En.pathfinder,backgroundPosition:"center",accent:"#005C28",href:"https://enchanting-bunny-07fee5.netlify.app/roles/pathfinder"},{id:"tactician",name:"Tactician",family:"lead",familyLabel:"Lead",tier:2,scope:"Develop another owner",descriptor:"Awaken courage in Leaders.",shortMeaning:"Help someone else bring their work to people and get better at it each time.",whatItMeans:"Help another owner bring people with them in their own voice, without carrying the adoption challenge for them.",proof:"Proof looks like adoption and confirmed benefit led by the people you enabled.",image:Tn.tactician,avatarPosition:"50% center",backgroundImage:En.tactician,backgroundPosition:"center",accent:"#A00020",href:"https://enchanting-bunny-07fee5.netlify.app/roles/tactician"},{id:"explorer",name:"Explorer",family:"explore",familyLabel:"Explore",tier:1,scope:"Own the work directly",descriptor:"Propose an exciting solution.",shortMeaning:"Discover what may be worth pursuing while the direction is still unresolved.",whatItMeans:"Stay with an important unresolved question long enough to discover a possibility that is clear, meaningful and grounded enough to take further.",proof:"Proof looks like a painful problem, a credible value case and an approved direction.",image:Tn.explorer,avatarPosition:"54% center",backgroundImage:En.explorer,backgroundPosition:"center",accent:"#003F8A",href:"https://enchanting-bunny-07fee5.netlify.app/roles/explorer"},{id:"builder",name:"Builder",family:"build",familyLabel:"Build",tier:1,scope:"Own the work directly",descriptor:"Build a powerful prototype.",shortMeaning:"Turn a chosen possibility into something that works in reality.",whatItMeans:"Close the lived gap between intention and functioning reality by making, testing, diagnosing, connecting and improving the build.",proof:"Proof looks like a prototype tested against reality with evidence of meaningful value.",image:Tn.builder,avatarPosition:"50% center",backgroundImage:En.builder,backgroundPosition:"center",accent:"#005C28",href:"https://enchanting-bunny-07fee5.netlify.app/roles/builder"},{id:"leader",name:"Leader",family:"lead",familyLabel:"Lead",tier:1,scope:"Own the work directly",descriptor:"Lead inspiring change.",shortMeaning:"Bring what works into people’s lives.",whatItMeans:"Help value cross the distance between a functioning solution and the people it is meant to serve through understanding, use and practical benefit.",proof:"Proof looks like deployment, real adoption and independently confirmed impact.",image:Tn.leader,avatarPosition:"52% center",backgroundImage:En.leader,backgroundPosition:"center",accent:"#A00020",href:"https://enchanting-bunny-07fee5.netlify.app/roles/leader"}],Ky={explorer:{level:1,threshold:"US$10,000+",valueType:"Potential value",scope:"Individual contribution",evidence:"Propose a solution and secure approval."},builder:{level:2,threshold:"US$10,000+",valueType:"Potential value",scope:"Individual contribution",evidence:"Build and test a prototype."},leader:{level:3,threshold:"US$10,000+",valueType:"Measured value",scope:"Individual contribution",evidence:"Lead adoption of a solution."},navigator:{level:4,threshold:"US$100,000+",valueType:"Combined potential value",scope:"Coach a cohort of 5 people",evidence:"Discover opportunities and propose solutions."},pathfinder:{level:5,threshold:"US$100,000+",valueType:"Combined potential value",scope:"Coach a cohort of 5 people",evidence:"Build and test prototypes."},tactician:{level:6,threshold:"US$100,000+",valueType:"Combined measured value",scope:"Coach a cohort of 5 people",evidence:"Lead transformations."},captain:{level:7,threshold:"US$1,000,000+",valueType:"Potential value",scope:"Lead 10 or more people",evidence:"Discover bold new frontiers."},pioneer:{level:8,threshold:"US$1,000,000+",valueType:"Potential value",scope:"Lead 10 or more people",evidence:"Build and test game-changing possibilities."},strategos:{level:9,threshold:"US$1,000,000+",valueType:"Measured value",scope:"Lead 10 or more people",evidence:"Deliver a portfolio with transformational strategic impact."}},tu=Object.fromEntries(bi.map(s=>[s.id,s])),eu=[{number:1,role:"explorer",text:"Have you individually proposed a solution worth US$10,000+ in potential value and secured approval to proceed?",title:"Have you individually proposed a solution worth US$10,000+ in potential value and secured approval to proceed?",criteria:["Individually proposed a solution","US$10,000+ in potential value","Secured approval to proceed"]},{number:2,role:"builder",text:"Have you individually built and tested a prototype demonstrating US$10,000+ in potential value?",title:"Have you individually built and tested a prototype demonstrating US$10,000+ in potential value?",criteria:["Individually built and tested a prototype","Demonstrating US$10,000+ in potential value"]},{number:3,role:"leader",text:"Have you individually led the adoption of a solution that delivered US$10,000+ in measured value?",title:"Have you individually led the adoption of a solution that delivered US$10,000+ in measured value?",criteria:["Individually led the adoption of a solution","Delivered US$10,000+ in measured value"]},{number:4,role:"navigator",text:"Have you sparked curiosity in a cohort of 5 people, coaching them to discover opportunities and propose solutions worth US$100,000+ combined in potential value?",title:"Have you sparked curiosity in a cohort of 5 people, coaching them to discover opportunities and propose solutions worth US$100,000+ combined in potential value?",criteria:["Sparked curiosity in a cohort of 5 people","Coaching them to discover opportunities","Propose solutions worth US$100,000+ combined in potential value"]},{number:5,role:"pathfinder",text:"Have you ignited creativity in a cohort of 5 people, coaching them to build and test prototypes demonstrating US$100,000+ combined in potential value?",title:"Have you ignited creativity in a cohort of 5 people, coaching them to build and test prototypes demonstrating US$100,000+ combined in potential value?",criteria:["Ignited creativity in a cohort of 5 people","Coaching them to build and test prototypes","Demonstrating US$100,000+ combined in potential value"]},{number:6,role:"tactician",text:"Have you awakened courage in a cohort of 5 people, coaching them to lead transformations that delivered US$100,000+ combined in measured value?",title:"Have you awakened courage in a cohort of 5 people, coaching them to lead transformations that delivered US$100,000+ combined in measured value?",criteria:["Awakened courage in a cohort of 5 people","Coaching them to lead transformations","Delivered US$100,000+ combined in measured value"]},{number:7,role:"captain",text:"Have you led an army of 10 or more people to discover bold new frontiers worth US$1 million+ in potential value?",title:"Have you led an army of 10 or more people to discover bold new frontiers worth US$1 million+ in potential value?",criteria:["Led an army of 10 or more people","Discover bold new frontiers","US$1 million+ in potential value"]},{number:8,role:"pioneer",text:"Have you led an army of 10 or more people to build and test game-changing possibilities demonstrating US$1 million+ in potential value?",title:"Have you led an army of 10 or more people to build and test game-changing possibilities demonstrating US$1 million+ in potential value?",criteria:["Led an army of 10 or more people","Build and test game-changing possibilities","Demonstrating US$1 million+ in potential value"]},{number:9,role:"strategos",text:"Have you led an army of 10 or more people to deliver a portfolio of solutions with transformational strategic impact worth US$1 million+ in measured value?",title:"Have you led an army of 10 or more people to deliver a portfolio of solutions with transformational strategic impact worth US$1 million+ in measured value?",criteria:["Led an army of 10 or more people","Deliver a portfolio of solutions with transformational strategic impact","US$1 million+ in measured value"]}],Jy=[{label:"Yes, within the last 12 months",score:3},{label:"Yes, 13 to 24 months ago",score:2},{label:"Yes, 25 to 36 months ago",score:1},{label:"No, not within the last 36 months",score:0}];function Tl(s){return s===3?"Demonstrated within the last 12 months":s===2?"Demonstrated 13 to 24 months ago":s===1?"Demonstrated 25 to 36 months ago":"No evidence demonstrated within the last 36 months"}const Pn=["explorer","builder","leader","navigator","pathfinder","tactician","captain","pioneer","strategos"];function Wy(s){return Object.fromEntries(Pn.map(d=>{const E=Number.isFinite(s[d])?s[d]:0;return[d,Math.max(0,Math.min(3,Math.round(E)))]}))}function Fy(s,d){return s&&(d==null?void 0:d.sent)===!0}function $y(s){return`Leadapreneur-Future-Proofing-Result-${s.trim().replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"")||"Participant"}.pdf`}function Mm({participantName:s,completionDate:d,scores:E,resultUrl:c}){const A=Wy(E),R=Pn.reduce((w,S)=>w+A[S],0),I=Math.max(...Pn.map(w=>A[w])),G=I>0?Pn.filter(w=>A[w]===I).map(w=>tu[w]):[],H=Pn.filter(w=>A[w]<3).map(w=>tu[w]),M=G.length?G:H.slice(0,1);return{participantName:s.trim()||"Participant",completionDate:d,scores:A,total:R,strongest:G,focusRoles:M,focusLabel:G.length?"YOUR STRONGEST EVIDENCE":"YOUR NEXT ROLE TO BUILD",focusState:G.length?Tl(I):Tl(M[0]?A[M[0].id]:0),nextChallenges:H,resultUrl:c,pdfFilename:$y(s)}}function Py(s,d,E){return{email:s,participantName:d.participantName,completionDate:d.completionDate,resultPayload:E,resultUrl:d.resultUrl,pdfFilename:d.pdfFilename,scores:d.scores,total:d.total,strongestRoleIds:d.strongest.map(c=>c.id),nextChallengeRoleIds:d.nextChallenges.map(c=>c.id)}}function ev(s){return s.focusRoles.length===Pn.length?"All nine roles":s.focusRoles.map(d=>d.name).join(" + ")}const tv="60173397455",nv=["Hi Leadapreneur Team, I've completed the Leadapreneur Future-Proofing Check and I'd like to start future-proofing myself.","Are there any programmes I can join personally, or programmes that could also support my team or organisation?","I'd love to learn more about the options available."].join(`

`),Js=`https://wa.me/${tv}?text=${encodeURIComponent(nv)}`,av="https://www.leadapreneur.com/future-proof-friday/",yi="#009FB8",bl={margin:"0 0 16px",fontSize:16,lineHeight:1.7},lv={fontSize:11,fontWeight:700,letterSpacing:"1.5px",color:yi};function Po({children:s}){return u.jsx("p",{style:bl,children:s})}function iv({model:s}){return u.jsxs("article",{className:"result-email","aria-label":"Future-Proofing result email",style:{maxWidth:680,margin:"0 auto",border:"1px solid #e8e3db",borderRadius:12,overflow:"hidden",backgroundColor:"#ffffff",fontFamily:"Arial, sans-serif",color:"#26322f"},children:[u.jsx("style",{children:"@media only screen and (max-width: 480px){.fp-email-body{padding:30px 20px!important}.fp-email-header{padding:20px!important}.fp-email-title{font-size:30px!important}.fp-email-button{display:block!important;text-align:center!important}}"}),u.jsx("table",{role:"presentation",width:"100%",cellPadding:"0",cellSpacing:"0",style:{borderCollapse:"collapse"},children:u.jsxs("tbody",{children:[u.jsx("tr",{children:u.jsx("td",{className:"fp-email-header",style:{padding:"24px 28px",backgroundColor:"#faf8f3",borderBottom:"1px solid #e8e3db"},children:u.jsx("table",{role:"presentation",width:"100%",cellPadding:"0",cellSpacing:"0",children:u.jsx("tbody",{children:u.jsxs("tr",{children:[u.jsxs("td",{children:[u.jsx("strong",{style:{display:"block",fontSize:15,letterSpacing:3},children:"LEADAPRENEUR"}),u.jsx("span",{style:{fontSize:11,letterSpacing:2},children:"FUTURE-PROOFING CHECK"})]}),u.jsx("td",{align:"right",children:u.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:1,color:yi,border:"1px solid #b8e7ed",borderRadius:20,padding:"8px 10px",whiteSpace:"nowrap"},children:"PDF ATTACHED"})})]})})})})}),u.jsx("tr",{children:u.jsxs("td",{className:"fp-email-body",style:{padding:"36px 48px 42px"},children:[u.jsxs(Po,{children:["Hi ",s.participantName,","]}),u.jsx(Po,{children:"Your Future-Proofing result is ready."}),u.jsxs("div",{style:{margin:"26px 0",padding:24,borderLeft:`4px solid ${yi}`,borderRadius:"0 10px 10px 0",backgroundColor:"#f3f7f5"},children:[u.jsx("span",{style:lv,children:s.focusLabel}),u.jsx("h2",{className:"fp-email-title",style:{margin:"14px 0 6px",fontSize:40,letterSpacing:"-1.5px",color:"#172521"},children:ev(s)}),u.jsx("p",{style:{margin:"0 0 14px",fontSize:12,fontWeight:700,textTransform:"uppercase",color:"#4f5c57"},children:s.focusState}),s.focusRoles.length>3?u.jsxs("p",{style:{...bl,margin:0},children:["Recent evidence is tied across ",s.focusRoles.length===9?"the full nine-role system":`${s.focusRoles.length} roles`,"."]}):s.focusRoles.map(d=>u.jsx("p",{style:{...bl,margin:"10px 0 0"},children:d.shortMeaning},d.id))]}),u.jsxs("section",{className:"result-email__role-summary","aria-labelledby":"email-role-summary-title",style:{margin:"26px 0"},children:[u.jsx("h3",{id:"email-role-summary-title",style:{margin:"0 0 6px",fontSize:13,letterSpacing:"1px"},children:"YOUR 9-ROLE RECENCY MAP"}),u.jsx("p",{style:{...bl,marginBottom:14},children:"Stronger colour means more recent evidence."}),u.jsx("table",{role:"presentation",width:"100%",cellPadding:"0",cellSpacing:"6",style:{tableLayout:"fixed"},children:u.jsx("tbody",{children:[0,1,2].map(d=>u.jsx("tr",{children:bi.slice(d*3,d*3+3).map(E=>{const c=s.scores[E.id],A=E.family==="explore"?"#003F8A":E.family==="build"?"#005C28":"#A00020";return u.jsxs("td",{style:{padding:"10px 8px",border:`1px solid ${c===0?"#d7ddda":A}`,borderRadius:6,verticalAlign:"top",backgroundColor:c===0?"#f7f8f6":A,color:c===0?"#26322f":"#ffffff"},children:[u.jsx("strong",{style:{display:"block",fontSize:11},children:E.name.toUpperCase()}),u.jsx("small",{style:{display:"block",marginTop:5,fontSize:9,lineHeight:1.3},children:Tl(c)})]},E.id)})},d))})})]}),u.jsx(Po,{children:"Your result reflects what you have demonstrated in your professional work over the last 36 months, and how recently that evidence was created."}),u.jsx(Po,{children:"Your full Future-Proofing report is attached as a PDF."}),u.jsx("a",{className:"fp-email-button",href:s.resultUrl,target:"_blank",rel:"noreferrer",style:{display:"inline-block",padding:"18px 22px",borderRadius:8,backgroundColor:yi,color:"#ffffff",textDecoration:"none",fontSize:12,fontWeight:700},children:"VIEW MY INTERACTIVE RESULT"}),u.jsxs("div",{style:{marginTop:30,paddingTop:26,borderTop:"1px solid #e2ddd4"},children:[u.jsx("p",{style:{...bl,fontWeight:700},children:"Ready to keep building your Future-Proofing evidence?"}),u.jsx("a",{href:Js,target:"_blank",rel:"noreferrer",style:{color:yi,fontSize:12,fontWeight:700,textDecoration:"underline"},children:"START MY FUTURE-PROOFING JOURNEY"})]}),u.jsx("p",{style:{...bl,margin:"28px 0 0",fontWeight:700},children:"Leadapreneur Team"})]})}),u.jsx("tr",{children:u.jsxs("td",{style:{padding:"18px 28px",backgroundColor:"#faf8f3",borderTop:"1px solid #e8e3db",fontSize:12,lineHeight:1.7,color:"#56625e",overflowWrap:"anywhere"},children:[u.jsx("strong",{children:"Attachment"}),u.jsx("br",{}),s.pdfFilename]})})]})})]})}function ov(s){return s>=3?"Within the last 12 months":s===2?"13–24 months ago":s===1?"25–36 months ago":"No evidence in the last 36 months"}const uv={explorer:{reportedWork:"proposed a solution with US$10,000+ in potential value and secured approval to proceed",currentPractice:"you can turn an unresolved problem into an approved direction worth pursuing",nextAction:"Identify another meaningful problem, propose a solution with US$10,000+ in potential value, and secure approval to proceed.",proof:"Keep evidence of the proposal, estimated value, and approval."},builder:{reportedWork:"built and tested a working prototype demonstrating US$10,000+ in potential value",currentPractice:"you can turn a chosen possibility into a tested prototype with credible potential value",nextAction:"Build and test another working prototype demonstrating US$10,000+ in potential value.",proof:"Capture the prototype, test results, and demonstrated potential value."},leader:{reportedWork:"led adoption of a solution that delivered US$10,000+ in measured value",currentPractice:"you can move a working solution into real adoption and measured value",nextAction:"Lead another solution into use and confirm at least US$10,000+ in measured value.",proof:"Capture adoption, usage, and measured outcomes."},navigator:{reportedWork:"coached a cohort of 5 people to discover opportunities and propose solutions worth US$100,000+ combined in potential value",currentPractice:"you can strengthen other people’s ability to discover and propose valuable opportunities",nextAction:"Coach another cohort of 5 people to discover opportunities and propose solutions worth US$100,000+ combined in potential value.",proof:"Capture the cohort work, proposals, approvals, and documented potential value as applicable."},pathfinder:{reportedWork:"coached a cohort of 5 people to build and test prototypes demonstrating US$100,000+ combined in potential value",currentPractice:"you can help other owners become stronger builders through real prototype work",nextAction:"Coach another cohort of 5 people to build and test prototypes demonstrating US$100,000+ combined in potential value.",proof:"Capture the coaching activity, prototypes, and test outcomes."},tactician:{reportedWork:"coached a cohort of 5 people to lead transformations that delivered US$100,000+ combined in measured value",currentPractice:"you can help other owners lead adoption and deliver measurable transformation",nextAction:"Coach another cohort of 5 people to lead transformations delivering US$100,000+ combined in measured value.",proof:"Capture adoption outcomes, transformation evidence, and measured impact."},captain:{reportedWork:"led 10 or more people to discover strategic opportunities worth US$1 million+ in potential value",currentPractice:"you can align people around strategic opportunities at portfolio scale",nextAction:"Lead 10 or more people to discover strategic opportunities worth US$1 million+ in potential value.",proof:"Capture the team initiatives, opportunities, and value estimates."},pioneer:{reportedWork:"led 10 or more people to build and test game-changing solutions demonstrating US$1 million+ in potential value",currentPractice:"you can orchestrate people and systems to validate game-changing possibilities at scale",nextAction:"Lead 10 or more people to build and test game-changing solutions demonstrating US$1 million+ in potential value.",proof:"Capture the portfolio of prototypes, test outcomes, and demonstrated potential value."},strategos:{reportedWork:"led 10 or more people to deliver a portfolio of solutions with US$1 million+ in measured strategic impact",currentPractice:"you can mobilise an organisation-scale portfolio toward adoption and measured strategic impact",nextAction:"Lead 10 or more people to deliver a portfolio of solutions with US$1 million+ in measured strategic impact.",proof:"Capture portfolio results, adoption metrics, and measured strategic impact."}};function rv(s,d){const E=uv[s],c=Math.max(0,Math.min(3,d));return c===0?{status:"BUILD EVIDENCE",interpretation:`Based on your answer, you have not reported evidence within the past 36 months that you ${E.reportedWork}.`,whyItMatters:`Taking on a meaningful challenge would begin to demonstrate that ${E.currentPractice}.`,nextStep:`Start with real work: ${E.nextAction} ${E.proof}`}:c===1?{status:"STRENGTHEN EVIDENCE",interpretation:`Based on your answer, you reported that you ${E.reportedWork} 25–36 months ago.`,whyItMatters:`That shows past experience. Applying the role to a meaningful challenge now would demonstrate that ${E.currentPractice}.`,nextStep:`Put the role back into practice through real work: ${E.nextAction} ${E.proof}`}:c===2?{status:"STRENGTHEN EVIDENCE",interpretation:`Based on your answer, you reported that you ${E.reportedWork} 13–24 months ago.`,whyItMatters:`That demonstrates the capability. Applying the role to another meaningful challenge would create value and show that ${E.currentPractice}.`,nextStep:`Strengthen the evidence through real work: ${E.nextAction} ${E.proof}`}:{status:"EVIDENCE CURRENT",interpretation:`Based on your answer, you reported that you ${E.reportedWork} within the last 12 months.`,whyItMatters:`That is current evidence that ${E.currentPractice}. Keep the practice active and make its value visible.`,nextStep:`Continue through another meaningful challenge: ${E.nextAction} ${E.proof}`}}const sv=""+new URL("ada-lovelace-DkorRdN6.jpg",import.meta.url).href,cv=""+new URL("alan-mulally-CXjPHGVS.jpg",import.meta.url).href,fv=""+new URL("alexander-fleming-cwHui7y2.jpg",import.meta.url).href,dv=""+new URL("astro-teller-CNDYmlRQ.jpg",import.meta.url).href,hv=""+new URL("brac-oral-therapy-programme-CXAh-PZd.jpg",import.meta.url).href,mv=""+new URL("charles-darwin-wJ5UyOjX.jpg",import.meta.url).href,pv=""+new URL("clearness-committee-CE0v1-kT.jpg",import.meta.url).href,gv=""+new URL("florence-nightingale-B91hwrLm.jpg",import.meta.url).href,yv=""+new URL("george-mueller-apollo-C1TlwOQa.jpg",import.meta.url).href,vv=""+new URL("ibm-system-360-YSCOPv9p.jpg",import.meta.url).href,bv=""+new URL("ibn-al-haytham-DVBBSCDN.jpg",import.meta.url).href,Tv=""+new URL("ignaz-semmelweis-Bb24KEgc.jpg",import.meta.url).href,Ev=""+new URL("james-dyson-Bxl0Ru_m.jpg",import.meta.url).href,Sv=""+new URL("jcr-licklider-ItlevwOr.jpg",import.meta.url).href,Av=""+new URL("josephine-cochrane-GV12tOri.png",import.meta.url).href,wv=""+new URL("margaret-hamilton-apollo-Ds5MRpiH.jpg",import.meta.url).href,Nv=""+new URL("mike-rother-toyota-kata-ocaZXQq6.jpg",import.meta.url).href,Ov=""+new URL("nigeria-smallpox-vaccination-CGpIhbrR.jpg",import.meta.url).href,Rv=""+new URL("pathfinder-cs50-ai-lecture-BuupGyG5.jpg",import.meta.url).href,xv=""+new URL("pathfinder-twi-wartime-training-DPo1b_pG.jpg",import.meta.url).href,_v=""+new URL("pathfinder-vivien-thomas-sdxzzIfG.jpg",import.meta.url).href,jv=""+new URL("peter-pronovost-CiXNyC8U.jpg",import.meta.url).href,Uv=""+new URL("pixar-braintrust-ed-catmull-CetCbeam.jpg",import.meta.url).href,Cv=""+new URL("rainer-maria-rilke-ru3c6_vH.jpg",import.meta.url).href,Dv=""+new URL("richard-hamming-DfYY3Jdr.jpg",import.meta.url).href,Hv=""+new URL("satya-nadella-B4oSOIzD.jpg",import.meta.url).href,Mv=""+new URL("seaman-knapp-D-3AaeOV.jpg",import.meta.url).href,zv=""+new URL("seymour-papert-DhD3wqRg.png",import.meta.url).href,Lv=""+new URL("tactician-va-healthcare-training-Uqb-4vc7.jpg",import.meta.url).href,Yv=""+new URL("tim-berners-lee-BD-oAm9o.jpg",import.meta.url).href,Bv=""+new URL("toyota-kata-kanban-7R-tFl79.jpg",import.meta.url).href,Iv=""+new URL("toyota-production-system-BS33GESt.jpg",import.meta.url).href,qv=""+new URL("wright-brothers-DuFREVro.jpg",import.meta.url).href,Gv=s=>new URL(Object.assign({"../../public/assets/assessment/history/ada-lovelace.jpg":sv,"../../public/assets/assessment/history/alan-mulally.jpg":cv,"../../public/assets/assessment/history/alexander-fleming.jpg":fv,"../../public/assets/assessment/history/astro-teller.jpg":dv,"../../public/assets/assessment/history/brac-oral-therapy-programme.jpg":hv,"../../public/assets/assessment/history/charles-darwin.jpg":mv,"../../public/assets/assessment/history/clearness-committee.jpg":pv,"../../public/assets/assessment/history/florence-nightingale.jpg":gv,"../../public/assets/assessment/history/george-mueller-apollo.jpg":yv,"../../public/assets/assessment/history/ibm-system-360.jpg":vv,"../../public/assets/assessment/history/ibn-al-haytham.jpg":bv,"../../public/assets/assessment/history/ignaz-semmelweis.jpg":Tv,"../../public/assets/assessment/history/james-dyson.jpg":Ev,"../../public/assets/assessment/history/jcr-licklider.jpg":Sv,"../../public/assets/assessment/history/josephine-cochrane.png":Av,"../../public/assets/assessment/history/margaret-hamilton-apollo.jpg":wv,"../../public/assets/assessment/history/mike-rother-toyota-kata.jpg":Nv,"../../public/assets/assessment/history/nigeria-smallpox-vaccination.jpg":Ov,"../../public/assets/assessment/history/pathfinder-cs50-ai-lecture.jpg":Rv,"../../public/assets/assessment/history/pathfinder-twi-wartime-training.jpg":xv,"../../public/assets/assessment/history/pathfinder-vivien-thomas.jpg":_v,"../../public/assets/assessment/history/peter-pronovost.jpg":jv,"../../public/assets/assessment/history/pixar-braintrust-ed-catmull.jpg":Uv,"../../public/assets/assessment/history/rainer-maria-rilke.jpg":Cv,"../../public/assets/assessment/history/richard-hamming.jpg":Dv,"../../public/assets/assessment/history/satya-nadella.jpg":Hv,"../../public/assets/assessment/history/seaman-knapp.jpg":Mv,"../../public/assets/assessment/history/seymour-papert.png":zv,"../../public/assets/assessment/history/tactician-va-healthcare-training.jpg":Lv,"../../public/assets/assessment/history/tim-berners-lee.jpg":Yv,"../../public/assets/assessment/history/toyota-kata-kanban.jpg":Bv,"../../public/assets/assessment/history/toyota-production-system.jpg":Iv,"../../public/assets/assessment/history/wright-brothers.jpg":qv})[`../../public/assets/assessment/history/${s}`],import.meta.url).href,Re=(s,d,E="center",c)=>({src:Gv(s),alt:d,position:E,credit:c}),Vv={explorer:[{name:"CHARLES DARWIN",label:"Darwin Correspondence Project",url:"https://darwin-editorial.darwinproject.ac.uk/commentary/evolution/natural-selection",image:Re("charles-darwin.jpg","Charles Darwin in later life","center 22%")},{name:"ADA LOVELACE",label:"Computer History Museum",url:"https://www.computerhistory.org/babbage/adalovelace",image:Re("ada-lovelace.jpg","Portrait of Ada Lovelace","center 24%")},{name:"ALEXANDER FLEMING",label:"University of Oxford, The discovery of penicillin",url:"https://www.path.ox.ac.uk/centenary/the-discovery-of-penicillin/",image:Re("alexander-fleming.jpg","Portrait of Alexander Fleming","center 32%")}],builder:[{name:"THE WRIGHT BROTHERS",label:"Smithsonian National Air and Space Museum",url:"https://airandspace.si.edu/explore/stories/researching-wright-way",image:Re("wright-brothers.jpg","Archival photograph of the Wright brothers","center 42%")},{name:"JAMES DYSON",label:"Dyson, Our history",url:"https://www.dyson.com/discover/innovation/behind-the-invention/our-story",image:Re("james-dyson.jpg","Portrait of James Dyson","center 26%")},{name:"JOSEPHINE COCHRANE",label:"National Inventors Hall of Fame",url:"https://www.invent.org/inductees/josephine-garis-cochran",image:Re("josephine-cochrane.png","Portrait of Josephine Cochrane","center 22%")}],leader:[{name:"SEAMAN KNAPP AND THE PORTER DEMONSTRATION FARM",label:"USDA, Cooperative Extension History",url:"https://www.nifa.usda.gov/about-nifa/what-we-do/extension/cooperative-extension-history",image:Re("seaman-knapp.jpg","Archival portrait of Seaman A. Knapp","center 30%")},{name:"BRAC AND ORAL REHYDRATION THERAPY",label:"BRAC, Community healthcare to pandemic response",url:"https://www.brac.net/stay-informed/the-good-feed/50-years-of-serving-bangladesh-community-healthcare-to-pandemic-response/",image:Re("brac-oral-therapy-programme.jpg","BRAC community health workers supporting oral rehydration therapy","center 42%")}],navigator:[{name:"RICHARD HAMMING",label:"Richard Hamming, You and Your Research",url:"https://faculty.nps.edu/irvine/Miscellaneous/Hamming1986You-and-Your-Research.pdf",image:Re("richard-hamming.jpg","Portrait of Richard Hamming","center 28%")},{name:"THE QUAKER CLEARNESS COMMITTEE",label:"Friends General Conference, Clearness Committees",url:"https://www.fgcquaker.org/fgcresources/spiritual-practices/clearness-committees/",image:Re("clearness-committee.jpg","A participant in a Quaker meeting space","center 44%")},{name:"PIXAR BRAINTRUST",label:"Stanford eCorner, Ed Catmull: Inside the Braintrust",url:"https://ecorner.stanford.edu/clips/inside-the-braintrust/",image:Re("pixar-braintrust-ed-catmull.jpg","Pixar co-founder Ed Catmull speaking","center 28%",{label:"Steve Jurvetson / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Ed_Catmull,_ETL_2014.jpg",license:"CC BY 2.0"})}],pathfinder:[{name:"SEYMOUR PAPERT",label:"MIT Logo Foundation, Logo and Learning",url:"https://el.media.mit.edu/logo-foundation/what_is_logo/logo_and_learning.html",image:Re("seymour-papert.png","Portrait of Seymour Papert","center 24%",{label:"Rodrigo Mesquita / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Seymour_Papert.png",license:"CC BY-SA 2.0"})},{name:"MIKE ROTHER AND TOYOTA KATA",label:"Toyota Kata, University of Michigan",url:"https://public.websites.umich.edu/~jmondisa/TK/",image:Re("mike-rother-toyota-kata.jpg","Mike Rother, researcher and author of Toyota Kata","center",{label:"Mike Rother / Kata to Grow",url:"https://www.katatogrow.com/",license:"Official source"})},{name:"DAVID MALAN AND CS50.AI",label:"Harvard, Teaching CS50 with AI",url:"https://cs.harvard.edu/malan/publications/V1fp0567-liu.pdf",image:Re("pathfinder-cs50-ai-lecture.jpg","David Malan teaching CS50","center 36%")}],tactician:[{name:"VHA MEDICAL TEAM TRAINING",label:"PubMed, Medical team training and coaching in VHA",url:"https://pubmed.ncbi.nlm.nih.gov/20693225/",image:Re("tactician-va-healthcare-training.jpg","A Veterans Health Administration medical team training together","center 40%")},{name:"MICHIGAN KEYSTONE ICU PROJECT",label:"AHRQ, Michigan Keystone ICU project",url:"https://www.ahrq.gov/hai/cusp/clabsi-final/clabsifinal1.html",image:Re("peter-pronovost.jpg","Peter Pronovost, a leader of the Michigan Keystone ICU project","center 26%")}],captain:[{name:"J.C.R. LICKLIDER AND DARPA IPTO",label:"DARPA, ARPANET",url:"https://www.darpa.mil/news/features/arpanet",image:Re("jcr-licklider.jpg","Portrait of J.C.R. Licklider","center 24%",{label:"U.S. Government / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Portrait_of_J._C._R._Licklider.jpg",license:"Public domain"})},{name:"ASTRO TELLER AND X, THE MOONSHOT FACTORY",label:"X, The Moonshot Factory Operating Manual",url:"https://x.company/blog/posts/a-peek-inside-the-moonshot-factory-operating-manual/",image:Re("astro-teller.jpg","Portrait of Astro Teller","center 24%",{label:"Touroftheworld / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Astro_Teller_candid.jpg",license:"CC BY-SA 3.0"})}],pioneer:[{name:"IBM SYSTEM/360",label:"IBM, The IBM System/360",url:"https://www.ibm.com/history/system-360",image:Re("ibm-system-360.jpg","An IBM System/360 installation at the United States Department of Agriculture","center 48%",{label:"USDA / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:IBM_System_360_at_USDA.jpg",license:"Public domain"})},{name:"GEORGE MUELLER AND APOLLO ALL-UP TESTING",label:"NASA, Apollo: A Retrospective Analysis",url:"https://www.nasa.gov/wp-content/uploads/2023/04/sp-4503-apollo.pdf",image:Re("george-mueller-apollo.jpg","NASA Associate Administrator George Mueller","center",{label:"NASA, George Mueller portrait",url:"https://www.nasa.gov/history/50-years-ago-management-changes-at-nasa/",license:"NASA historical image"})}],strategos:[{name:"TAIICHI OHNO AND THE TOYOTA PRODUCTION SYSTEM",label:"Toyota, Basic concept of the Toyota Production System",url:"https://www.toyota-global.com/company/history_of_toyota/75years/data/automotive_business/production/system/change.html",image:Re("toyota-production-system.jpg","A visual model of the Toyota Production System","center",{label:"Peppi1972 / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Toyota-produktionssystem.jpeg",license:"Public domain"})},{name:"SATYA NADELLA AND MICROSOFT'S TRANSFORMATION",label:"Microsoft, Satya Nadella's first-day CEO message",url:"https://news.microsoft.com/source/2014/02/04/satya-nadella-email-to-employees-on-first-day-as-ceo/",image:Re("satya-nadella.jpg","Satya Nadella speaking at LeWeb Paris","center 26%",{label:"Official LeWeb Photos / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Satya_Nadella.jpg",license:"CC BY 2.0"})},{name:"ALAN MULALLY AND ONE FORD",label:"Leader to Leader, Alan Mulally on Working Together",url:"https://onlinelibrary.wiley.com/doi/full/10.1002/ltl.20628",image:Re("alan-mulally.jpg","Alan Mulally during his time leading Ford","center 22%",{label:"Ford Motor Company / Wikimedia Commons",url:"https://commons.wikimedia.org/wiki/File:Alan_Mulally_2013-01-30_001.jpg",license:"CC BY 3.0"})}]},Qs=`CRITICAL CONTENT CORRECTION

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

In the Leadapreneur AI x Talent Accelerator, this outcome is called an Approved Proposal, verified by a manager. That is the programme's own verification standard, not an extra requirement for this check.

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

In the Leadapreneur AI x Talent Accelerator, this outcome is called a Validated Solution, verified by a Head of Department. That is the programme's own verification standard, not an extra requirement for this check.

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

In the Leadapreneur AI x Talent Accelerator, this outcome is called an Adopted Transformation, verified by audit. That is the programme's own verification standard, not an extra requirement for this check.

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

At Level 4, a Navigator does this for a cohort of five people, coaching them to discover opportunities and propose solutions worth US$100,000+ in combined potential value.

PROFESSIONAL FUTURE-PROOFING

Grow another person's ability to find opportunities worth pursuing, and do it for a cohort of five.

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

At Level 5, a Pathfinder does this for a cohort of five people, coaching them to build and test prototypes worth US$100,000+ in combined potential value.

PROFESSIONAL FUTURE-PROOFING

Grow another person's ability to build, test, diagnose, and improve, and do it for a cohort of five.

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

At Level 6, a Tactician does this for a cohort of five people, coaching them to lead transformations worth US$100,000+ in combined measured value.

PROFESSIONAL FUTURE-PROOFING

Grow another person's ability to lead change in their own voice, and do it for a cohort of five.

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
`,Zs=["explorer","builder","leader","navigator","pathfinder","tactician","captain","pioneer","strategos"],vi={explorer:"EXPLORER",builder:"BUILDER",leader:"LEADER",navigator:"NAVIGATOR",pathfinder:"PATHFINDER",tactician:"TACTICIAN",captain:"CAPTAIN",pioneer:"PIONEER",strategos:"STRATEGOS"};function dt(s,d){if(!s)throw new Error(`Canonical role copy error: ${d}`)}function ea(s){return s.trim().split(/\n\s*\n/).map(d=>d.trim()).filter(Boolean)}function $n(s,d,E){const c=s.indexOf(d);dt(c>=0,`Missing section ${d}`);const A=s.indexOf(`

`,c);dt(A>=0,`Missing body for ${d}`);const R=E?s.indexOf(`

${E}`,A+2):s.length;return dt(R>=0,`Missing section ${E}`),s.slice(A+2,R).trim()}function kv(s){const d=`==================================================
${vi[s]}
==================================================`,E=Qs.indexOf(d);dt(E>=0,`Missing role ${vi[s]}`);const c=Zs[Zs.indexOf(s)+1],A=c?`==================================================
${vi[c]}
==================================================`:`==================================================
FINAL CTA FOR EVERY ROLE
==================================================`,R=Qs.indexOf(A,E+d.length);return dt(R>=0,`Missing end marker for ${vi[s]}`),Qs.slice(E+d.length,R).trim()}function Xv(s){const d=ea($n(s,"HERO","01 CAN YOU PROVE IT?")),E=d.indexOf("PROFESSIONAL FUTURE-PROOFING"),c=d.findIndex(A=>A.startsWith("THE ")&&A.endsWith("QUESTION"));return dt(E>1,"Malformed hero professional future-proofing copy"),dt(c>E,"Malformed hero question copy"),{name:d[0],promise:d[1],introduction:d.slice(2,E),professionalFutureProofing:d[E+1],questionLabel:d[c],question:d[c+1]}}function Qv(s){const d=ea($n(s,"01 CAN YOU PROVE IT?","02 HOW ")),E=d.findIndex(R=>R.startsWith("- "));dt(E>=0,"Missing proof signals");const c=d[E].split(`
`).map(R=>R.replace(/^-\s*/,"").trim()),A=d[E+1];return dt(A,"Missing proof formula"),{introduction:d.slice(0,E),signals:c,formula:A,closing:d.slice(E+2)}}function Zv(s){return ea(s).map(d=>({kind:/[A-Z]/.test(d)&&d===d.toUpperCase()?"heading":"paragraph",text:d}))}function Kv(s,d){const E=Vv[s];return E.map((c,A)=>{var S;const R=d.indexOf(c.name);dt(R>=0,`Missing story ${c.name}`);const I=(S=E[A+1])==null?void 0:S.name,G=I?d.indexOf(`

${I}`,R):d.length;dt(G>=0,`Missing end of story ${c.name}`);const H=ea(d.slice(R+c.name.length,G)),M=H.findIndex(C=>C.startsWith("WHY THIS MATTERS TO ")),w=H.indexOf("REFLECTION");return dt(M>0,`Missing why-it-matters for ${c.name}`),dt(w>M,`Missing reflection for ${c.name}`),{name:c.name,context:H[0],narrative:H.slice(1,M),whyHeading:H[M],whyItMatters:H.slice(M+1,w),reflection:H.slice(w+1),source:{label:c.label,url:c.url},image:{...c.image,credit:c.image.credit??{label:c.label,url:c.url,license:"Source page"}}}})}function Jv(s){const d=ea($n(s,"DO IT. PROVE IT. EARN IT.")),E=d.indexOf("DO IT"),c=d.indexOf("PROVE IT"),A=d.indexOf("EARN IT");return dt(E>=0&&c>E&&A>c,"Malformed practice copy"),{doIt:d.slice(E+1,c),proveIt:d.slice(c+1,A),earnIt:d.slice(A+1)}}function Wv(s){const d=kv(s),E=vi[s],c=$n(d,"05 STORIES IN ACTION","AND WHAT ABOUT YOURS?");return{hero:Xv(d),canYouProveIt:Qv(d),howItWorks:Zv($n(d,"02 HOW ",`03 ${E} AND FUTURE-PROOFING`)),futureProofing:ea($n(d,`03 ${E} AND FUTURE-PROOFING`,"04 THE HUMAN SIDE")),humanSide:ea($n(d,"04 THE HUMAN SIDE","05 STORIES IN ACTION")),stories:Kv(s,c),whatAboutYours:ea($n(d,"AND WHAT ABOUT YOURS?","DO IT. PROVE IT. EARN IT.")),practice:Jv(d)}}const Fv=Object.fromEntries(Zs.map(s=>[s,Wv(s)])),$v="Kezia",Pv=!0,Dm={explorer:3,builder:2,leader:1,navigator:2,pathfinder:0,tactician:2,captain:1,pioneer:2,strategos:0};function zm(s,d){const E=s===null?"u":s?"y":"n",c=Pn.map(A=>d[A]??0).join("");return`v1.${E}.${c}`}function e0(s){if(!s)return null;const d=/^v1\.([ynu])\.([0-3]{9})$/.exec(s);if(!d)return null;const E=d[2].split("").map(Number),c=Object.fromEntries(Pn.map((A,R)=>[A,E[R]]));return{gatewayAnswer:d[1]==="u"?null:d[1]==="y",scores:c}}function Lm(s,d){const E=new URL(window.location.href);return E.search="",E.hash="",E.searchParams.set("result",zm(s,d)),E.toString()}async function t0(s){var c;if((c=navigator.clipboard)!=null&&c.writeText){await navigator.clipboard.writeText(s);return}const d=document.createElement("textarea");d.value=s,d.style.position="fixed",d.style.opacity="0",document.body.appendChild(d),d.select();const E=document.execCommand("copy");if(d.remove(),!E)throw new Error("Copy was unavailable")}function nu(){return u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:u.jsx("path",{d:"M5 12h13M13 6l6 6-6 6"})})}function Ra({light:s=!1}){return u.jsxs("div",{className:`brand${s?" brand--light":""}`,"aria-label":"Leadapreneur Future-Proofing Check",children:[u.jsx("strong",{children:"LEADAPRENEUR"}),u.jsx("span",{children:"Future-Proofing Check"})]})}function Ti(s){return{backgroundImage:`url(${s.backgroundImage})`,"--role-background-position-default":s.backgroundPosition}}function Ws({className:s}){return u.jsxs("div",{className:s,"aria-hidden":"true",children:[u.jsx("span",{children:"Explore"}),u.jsx("span",{children:"Build"}),u.jsx("span",{children:"Lead"})]})}function Fs({children:s,onClick:d,disabled:E=!1,type:c="button"}){return u.jsxs("button",{className:"primary-button",type:c,onClick:d,disabled:E,children:[u.jsx("span",{children:s}),u.jsx(nu,{})]})}function Ei({onClick:s}){return u.jsx("button",{className:"text-button back-button",type:"button",onClick:s,children:"← Back"})}function Ym({countdown:s}){return u.jsxs("div",{className:"transition-status","aria-live":"polite",children:[u.jsxs("strong",{children:["Continuing in ",s]}),u.jsx("span",{className:"transition-status__desktop",children:"Click anywhere to continue"}),u.jsx("span",{className:"transition-status__mobile",children:"Tap anywhere to continue"})]})}function Bm(s){const[d,E]=de.useState(10),c=de.useRef(!1),A=de.useRef(s);A.current=s;const R=()=>{c.current||(c.current=!0,A.current())};return de.useEffect(()=>{const I=Date.now(),G=window.setInterval(()=>{const M=Math.floor((Date.now()-I)/1e3);E(Math.max(0,10-M))},200),H=window.setTimeout(R,1e4);return()=>{window.clearInterval(G),window.clearTimeout(H)}},[]),{countdown:d,complete:R}}function n0({onContinue:s}){return u.jsxs("main",{className:"intro-screen screen-enter",id:"main-content",children:[u.jsxs("div",{className:"intro-world","aria-hidden":"true",children:[u.jsx("img",{className:"intro-world__scene",src:Oa.futureWorld,alt:""}),u.jsx("div",{className:"intro-world__orbit intro-world__orbit--one"}),u.jsx("div",{className:"intro-world__orbit intro-world__orbit--two"}),u.jsx("div",{className:"intro-world__veil"})]}),u.jsx("header",{className:"intro-header",children:u.jsx(Ra,{})}),u.jsxs("section",{className:"intro-copy","aria-labelledby":"intro-title",children:[u.jsx("p",{className:"eyebrow",children:"A professional evidence check"}),u.jsxs("h1",{id:"intro-title",children:["THE WORLD OF WORK",u.jsx("br",{}),"IS CHANGING FAST"]}),u.jsx("p",{className:"intro-lede",children:"AI is changing how we work, what organisations need, and where professionals create value."}),u.jsx("h2",{children:"But how future proof are you?"}),u.jsx("p",{className:"intro-explainer",children:"Being future proof is not about knowing everything about AI."}),u.jsx("p",{className:"intro-capabilities__lead",children:"It is about your ability to:"}),u.jsxs("div",{className:"intro-capabilities","aria-label":"Future-Proofing capabilities",children:[u.jsxs("article",{"data-family":"explore",children:[u.jsx("strong",{children:"EXPLORE"}),u.jsx("p",{children:"Find opportunities worth pursuing."})]}),u.jsxs("article",{"data-family":"build",children:[u.jsx("strong",{children:"BUILD"}),u.jsx("p",{children:"Turn possibilities into solutions that work."})]}),u.jsxs("article",{"data-family":"lead",children:[u.jsx("strong",{children:"LEAD"}),u.jsx("p",{children:"Bring solutions into use and create real impact."})]})]}),u.jsx("p",{className:"intro-growth",children:"As your capability grows, so does the scale of the impact you can create."}),u.jsx("div",{className:"intro-action-row",children:u.jsx(Fs,{onClick:s,children:"CHECK HOW FUTURE PROOF I AM"})})]}),u.jsxs("div",{className:"scroll-cue","aria-hidden":"true",children:[u.jsx("span",{}),"Discover your evidence"]})]})}function Im({activeTier:s}){return u.jsxs("div",{className:"mini-role-grid","aria-label":"Nine Leadapreneur capability roles",children:[u.jsx("div",{className:"mini-role-grid__roles",children:bi.map(d=>u.jsxs("article",{className:`mini-role${s===d.tier?" mini-role--active":""}${s&&s!==d.tier?" mini-role--dim":""}`,"data-family":d.family,"data-role":d.id,"aria-label":`${d.name}, ${d.familyLabel}, ${d.scope}`,children:[u.jsx("div",{className:"mini-role__world","data-role":d.id,style:Ti(d),"aria-hidden":"true"}),u.jsx("img",{src:d.image,alt:"",style:{objectPosition:d.avatarPosition}}),u.jsx("strong",{className:"role-title",children:d.name})]},d.id))}),u.jsx(Ws,{className:"mini-role-grid__headings"})]})}function a0({activeScope:s}){const d=[{number:1,label:"Create impact yourself"},{number:2,label:"Coach other owners"},{number:3,label:"Shape strategic scale"}],E=bi.filter(c=>c.tier===s);return u.jsxs("div",{className:"transition-scope-map",children:[u.jsx("div",{className:"transition-scope-map__steps","aria-label":"Future-proofing scope progression",children:d.map(c=>u.jsx("div",{className:c.number===s?"is-active":c.number<s?"is-complete":"",children:u.jsx("strong",{children:c.label})},c.number))}),u.jsx("div",{className:"transition-scope-map__roles","aria-label":"Roles in this scope",children:E.map(c=>u.jsxs("div",{"data-family":c.family,children:[u.jsxs("span",{className:"transition-scope-map__portrait","aria-hidden":"true",children:[u.jsx("span",{className:"transition-scope-map__world","data-role":c.id,style:Ti(c)}),u.jsx("img",{src:c.image,alt:"",style:{objectPosition:c.avatarPosition}})]}),u.jsx("strong",{className:"role-title",children:c.name})]},c.id))}),u.jsx(Ws,{className:"transition-scope-map__labels"})]})}function l0({name:s,setName:d,onBack:E,onStart:c}){const A=s.trim();return u.jsxs("main",{className:"standard-screen screen-enter",id:"main-content",children:[u.jsxs("header",{className:"standard-header",children:[u.jsx(Ra,{}),u.jsx("button",{className:"text-button",onClick:E,children:"← Back"})]}),u.jsxs("div",{className:"standard-layout",children:[u.jsxs("section",{className:"standard-copy","aria-labelledby":"standard-title",children:[u.jsx("p",{className:"eyebrow",children:"Evidence, not instinct"}),u.jsxs("h1",{id:"standard-title",children:["THIS IS NOT A",u.jsx("br",{}),"PERSONALITY TEST"]}),u.jsxs("div",{className:"standard-lede",children:[u.jsx("p",{children:"We are not asking what you think you could do."}),u.jsx("p",{children:"We are looking at what you have actually demonstrated in your professional work."})]}),u.jsxs("div",{className:"proof-cues","aria-label":"Evidence standard",children:[u.jsxs("span",{children:[u.jsx("i",{}),"REAL WORK"]}),u.jsxs("span",{children:[u.jsx("i",{}),"REAL EVIDENCE"]}),u.jsxs("span",{children:[u.jsx("i",{}),"REAL IMPACT"]})]}),u.jsxs("form",{onSubmit:R=>{R.preventDefault(),A&&c()},children:[u.jsx("label",{htmlFor:"participant-name",children:"Before we start, what should we call you?"}),u.jsxs("div",{className:"name-field",children:[u.jsx("input",{id:"participant-name",name:"participant-name",type:"text",autoComplete:"given-name",maxLength:42,value:s,onChange:R=>d(R.target.value),placeholder:"Your name",autoFocus:!0}),u.jsx("span",{"aria-hidden":"true",children:"↗"})]}),A?u.jsxs("div",{className:"ready-panel ready-panel--visible","aria-live":"polite",children:[u.jsxs("p",{className:"ready-name",children:["Ready, ",A,"?"]}),u.jsx("h2",{children:"Think about your professional work within the last 36 months."}),u.jsx("p",{children:"Answer based on what you actually completed, not what you intended to do."})]}):null,u.jsx(Fs,{type:"submit",disabled:!A,children:"I'M READY"})]})]}),u.jsxs("aside",{className:"standard-visual",children:[u.jsx("div",{className:"standard-visual__world",style:{backgroundImage:`url(${Oa.futureWorld})`},"aria-hidden":"true"}),u.jsx("div",{className:"standard-visual__topline",children:u.jsx("span",{children:"The role system"})}),u.jsx(Im,{}),u.jsx("p",{className:"standard-visual__note",children:"As your capability grows, so does the scale of the impact you can create."})]})]})]})}function i0({onComplete:s,onBack:d}){const[E,c]=de.useState(0),{countdown:A,complete:R}=Bm(s);de.useEffect(()=>{const H=window.matchMedia("(prefers-reduced-motion: reduce)").matches?[20,40,60,80]:[160,650,1250,2050],M=[window.setTimeout(()=>c(1),H[0]),window.setTimeout(()=>c(2),H[1]),window.setTimeout(()=>c(3),H[2]),window.setTimeout(()=>c(4),H[3])];return()=>M.forEach(window.clearTimeout)},[]);const I=G=>{G.target===G.currentTarget&&(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),R())};return u.jsxs("main",{className:`start-transition start-transition--${E}`,id:"main-content",role:"button",tabIndex:0,"aria-label":"Continue to the first question",onClick:R,onKeyDown:I,children:[u.jsx("div",{className:"start-transition__world",style:{backgroundImage:`url(${Oa.transitionWorld})`},"aria-hidden":"true"}),u.jsx("div",{className:"start-transition__wash","aria-hidden":"true"}),u.jsxs("header",{className:"transition-header",children:[u.jsxs("div",{className:"header-nav",children:[u.jsx(Ra,{}),u.jsx("span",{onClick:G=>G.stopPropagation(),children:u.jsx(Ei,{onClick:d})})]}),u.jsx(au,{current:1,answered:0})]}),u.jsxs("div",{className:"start-transition__copy","aria-live":"polite",children:[u.jsx("p",{children:"THINK ABOUT YOUR PROFESSIONAL WORK"}),u.jsx("h1",{children:"OVER THE LAST 36 MONTHS..."}),u.jsx("div",{className:"start-transition__role-map",children:u.jsx(Im,{activeTier:E>=4?1:void 0})}),u.jsx("div",{className:"start-transition__tier",children:u.jsx("h2",{children:"LET'S BEGIN WITH WHAT YOU'VE CREATED YOURSELF."})})]}),u.jsx(Ym,{countdown:A})]})}function o0({onContinue:s,onBack:d}){return u.jsxs("main",{className:"impact-intro-screen screen-enter",id:"main-content",children:[u.jsx("div",{className:"impact-intro-screen__world",style:{backgroundImage:`url(${Oa.questionWorld})`},"aria-hidden":"true"}),u.jsx("div",{className:"impact-intro-screen__wash","aria-hidden":"true"}),u.jsxs("header",{className:"quiz-header",children:[u.jsxs("div",{className:"header-nav",children:[u.jsx(Ra,{}),u.jsx(Ei,{onClick:d})]}),u.jsx(au,{current:1,answered:0})]}),u.jsx("section",{className:"impact-intro-screen__shell","aria-labelledby":"impact-intro-title",children:u.jsxs("div",{className:"impact-intro-card",children:[u.jsx("p",{className:"eyebrow",children:"BEFORE QUESTION 1"}),u.jsx("h1",{id:"impact-intro-title",children:"HOW TO ANSWER THESE QUESTIONS"}),u.jsx("p",{className:"impact-intro-card__introduction",children:"This check looks at what you have actually demonstrated through your professional work, not what you think you could do."}),u.jsx("p",{className:"impact-intro-card__subheading",children:"As you answer, consider three things:"}),u.jsxs("div",{className:"impact-intro-card__guidance",children:[u.jsxs("article",{children:[u.jsx("span",{"aria-hidden":"true",children:"01"}),u.jsx("h2",{children:"WHAT YOU DID"}),u.jsx("p",{children:"Did you complete the work yourself, coach a cohort of 5 people, or lead a team of 10 or more?"})]}),u.jsxs("article",{children:[u.jsx("span",{"aria-hidden":"true",children:"02"}),u.jsx("h2",{children:"THE VALUE CREATED"}),u.jsx("p",{children:"Potential value is the estimated benefit a solution could create. Measured value is the impact already achieved."})]}),u.jsxs("article",{children:[u.jsx("span",{"aria-hidden":"true",children:"03"}),u.jsx("h2",{children:"WHEN IT HAPPENED"}),u.jsx("p",{children:"Think about the last 36 months. Choose when you most recently demonstrated each activity."})]})]}),u.jsx("p",{className:"impact-intro-card__highlight",children:"REAL WORK. REAL EVIDENCE. REAL IMPACT."}),u.jsx("p",{className:"impact-intro-card__note",children:`If you haven't demonstrated an activity within the last 36 months, simply select "No".`}),u.jsx(Fs,{onClick:s,children:"CONTINUE TO QUESTION 1"})]})})]})}function au({current:s,answered:d}){return u.jsxs("div",{className:"question-progress","aria-label":`Question ${s} of ${eu.length}. ${d} answered.`,children:[u.jsxs("div",{className:"question-progress__label",children:[u.jsxs("strong",{children:[s," OF ",eu.length]}),u.jsxs("span",{children:[d," answered"]})]}),u.jsx("div",{className:"question-progress__segments","aria-hidden":"true",children:eu.map(E=>u.jsx("span",{className:`${E.number<=d?"is-answered ":""}${E.number===s?"is-current":""}`},E.number))})]})}function u0({question:s,answered:d,selectedScore:E,onBack:c,onAnswer:A}){const R=s.role?tu[s.role]:null,I=R?Ti(R):{backgroundImage:`url(${Oa.questionWorld})`},G=s.title.length>=140?"long":s.title.length>=120?"medium":"standard";return u.jsxs("main",{className:"quiz-screen","data-family":R==null?void 0:R.family,"data-question":s.number,id:"main-content",children:[u.jsx("div",{className:"question-world","data-role":R==null?void 0:R.id,style:I,"aria-hidden":"true",children:R?u.jsx("img",{className:"question-world__role",src:R.image,alt:"",style:{objectPosition:R.avatarPosition}}):null}),u.jsxs("header",{className:"quiz-header",children:[u.jsxs("div",{className:"header-nav",children:[u.jsx(Ra,{}),u.jsx(Ei,{onClick:c})]}),u.jsx(au,{current:s.number,answered:d})]}),u.jsx("section",{className:"question-shell screen-enter",children:u.jsxs("div",{className:"question-card","data-question-density":G,children:[u.jsxs("div",{className:"question-card__topline",children:[u.jsxs("p",{children:["LEVEL ",s.number," · ",R==null?void 0:R.name]}),R?u.jsx("span",{"data-family":R.family,children:R.familyLabel}):null]}),u.jsxs("div",{className:"question-card__body",children:[u.jsxs("div",{className:"question-card__prompt",children:[u.jsx("h1",{children:s.title}),u.jsx("ul",{className:"question-criteria",children:s.criteria.map(H=>u.jsx("li",{children:H},H))})]}),u.jsxs("div",{className:"answer-panel",children:[u.jsx("p",{children:"When did you most recently complete this evidence?"}),u.jsx("div",{className:"recency-answer-grid","aria-label":"Choose the timing of your most recent completed evidence",children:Jy.map(H=>u.jsxs("button",{className:`recency-answer${E===H.score?" is-selected":""}`,"aria-pressed":E===H.score,onClick:()=>A(H.score),children:[u.jsx("span",{"aria-hidden":"true",children:H.score===0?"○":"✓"}),u.jsx("strong",{children:H.label})]},H.label))})]})]})]})},s.number)]})}function r0({tier:s,onContinue:d,onBack:E}){const[c,A]=de.useState(0),{countdown:R,complete:I}=Bm(d),G=s===2?{eyebrow:"YOU'VE CHECKED HOW YOU CREATE IMPACT YOURSELF",title:"Next, let's see how you coach others to create it."}:{eyebrow:"WHAT HAPPENS WHEN THE CHALLENGE GETS BIGGER?",title:"Now we move from individual owners to strategic scale."};de.useEffect(()=>{const w=window.matchMedia("(prefers-reduced-motion: reduce)").matches?[20,40]:[320,1050],S=[window.setTimeout(()=>A(1),w[0]),window.setTimeout(()=>A(2),w[1])];return()=>S.forEach(window.clearTimeout)},[]);const H=M=>{M.target===M.currentTarget&&(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),I())};return u.jsxs("main",{className:`tier-transition tier-transition--${c}`,id:"main-content",role:"button",tabIndex:0,"aria-label":"Continue to the next question",onClick:I,onKeyDown:H,children:[u.jsx("div",{className:"tier-transition__background",style:{backgroundImage:`url(${Oa.transitionWorld})`},"aria-hidden":"true"}),u.jsx("div",{className:"tier-transition__overlay","aria-hidden":"true"}),u.jsxs("header",{className:"transition-header",children:[u.jsxs("div",{className:"header-nav",children:[u.jsx(Ra,{}),u.jsx("span",{onClick:M=>M.stopPropagation(),children:u.jsx(Ei,{onClick:E})})]}),u.jsx(au,{current:s===2?4:7,answered:s===2?3:6})]}),u.jsxs("section",{children:[u.jsx("p",{children:G.eyebrow}),u.jsx("h1",{children:G.title}),u.jsx(a0,{activeScope:s}),u.jsx("button",{className:"text-button",onClick:I,children:"Continue now →"})]}),u.jsx(Ym,{countdown:R})]})}const s0=[{score:0,label:"Not demonstrated within the last 36 months"},{score:1,label:"25 to 36 months ago"},{score:2,label:"13 to 24 months ago"},{score:3,label:"Within the last 12 months"}];function lu({score:s}){return u.jsx("span",{className:"evidence-segments","data-recency":s,"aria-hidden":"true",children:[1,2,3].map(d=>u.jsx("i",{className:d<=s?"is-filled":""},d))})}function c0(){return u.jsxs("div",{className:"recency-legend","aria-label":"Role evidence recency legend",children:[u.jsxs("div",{className:"recency-legend__intro",children:[u.jsx("strong",{children:"Evidence level"}),u.jsx("p",{children:"Stronger role colour means more recent evidence."})]}),u.jsx("div",{className:"recency-legend__items",children:s0.map(s=>u.jsxs("div",{children:[u.jsx(lu,{score:s.score}),u.jsx("span",{children:u.jsx("strong",{children:s.label})})]},s.score))})]})}function f0({role:s,score:d,expanded:E,onOpen:c}){const A=ov(d);return u.jsxs("button",{className:"result-role","data-family":s.family,"data-tier":s.tier,"data-role":s.id,"data-recency":d,"data-expanded":E,onClick:c,"aria-expanded":E,"aria-controls":`role-evidence-${s.id}`,"aria-label":`Show ${s.name} evidence and next step. ${Tl(d)}.`,children:[u.jsxs("div",{className:"result-role__art",children:[u.jsx("div",{className:"result-role__world","data-role":s.id,style:Ti(s),"aria-hidden":"true"}),u.jsx("img",{src:s.image,alt:"",style:{objectPosition:s.avatarPosition}})]}),u.jsxs("div",{className:"result-role__copy",children:[u.jsx("strong",{className:"role-title",children:s.name}),u.jsx("span",{className:"result-role__descriptor",children:s.descriptor}),u.jsx("span",{className:"result-role__evidence",children:u.jsx(lu,{score:d})}),u.jsx("small",{children:A})]}),u.jsx("span",{className:"result-role__open","aria-hidden":"true",children:E?"−":"+"})]})}function d0({role:s,score:d,onViewDetails:E}){const c=rv(s.id,d),A=s.tier===3?2:s.tier===2?4:6;return u.jsxs("section",{className:"inline-evidence",id:`role-evidence-${s.id}`,"data-family":s.family,"data-tier":s.tier,style:{"--inline-evidence-row":A},"aria-labelledby":`role-evidence-title-${s.id}`,children:[u.jsxs("div",{className:"inline-evidence__status",children:[u.jsxs("p",{className:"eyebrow",id:`role-evidence-title-${s.id}`,children:["Your ",s.name," evidence"]}),u.jsxs("div",{children:[u.jsx(lu,{score:d}),u.jsx("span",{children:Tl(d)})]})]}),u.jsxs("div",{className:"inline-evidence__advice",children:[u.jsx("h3",{children:c.status}),u.jsx("p",{className:"inline-evidence__interpretation",children:c.interpretation}),u.jsxs("p",{className:"inline-evidence__why",children:[u.jsx("strong",{children:"Why it matters"}),c.whyItMatters]}),u.jsxs("div",{className:"inline-evidence__next",children:[u.jsx("strong",{children:"Your next step"}),u.jsx("p",{children:c.nextStep})]}),u.jsxs("div",{className:"inline-evidence__conversion",children:[u.jsx("p",{className:"inline-evidence__mantra",children:"DO IT. PROVE IT. EARN IT."}),u.jsx("p",{className:"inline-evidence__invitation",children:"Explore with us to unlock your next level of impact."}),u.jsxs("div",{className:"inline-evidence__actions",children:[u.jsxs("button",{className:"inline-evidence__details",type:"button",onClick:E,children:["View ",s.name," details ",u.jsx("span",{"aria-hidden":"true",children:"→"})]}),u.jsxs("a",{className:"inline-evidence__journey",href:Js,target:"_blank",rel:"noreferrer",children:[u.jsx("span",{children:"Start my Future-Proofing Journey"}),u.jsx(nu,{})]})]})]})]})]})}function h0({story:s}){return u.jsxs("details",{className:"story-card",children:[u.jsxs("summary",{children:[u.jsx("span",{className:"story-card__marker","aria-hidden":"true"}),u.jsx("span",{className:"story-card__thumbnail","aria-hidden":"true",children:u.jsx("img",{src:s.image.src,alt:"",loading:"lazy",decoding:"async",style:{objectPosition:s.image.position}})}),u.jsxs("span",{children:[u.jsx("strong",{children:s.name}),u.jsx("small",{children:s.context}),u.jsx("span",{className:"story-card__teaser",children:s.narrative[0]})]}),u.jsxs("span",{className:"story-card__affordance","aria-hidden":"true",children:[u.jsx("b",{children:"Read story"}),u.jsx("i",{children:"+"})]})]}),u.jsxs("div",{className:"story-card__body",children:[u.jsxs("figure",{className:"story-card__visual",style:{"--story-image":`url(${s.image.src})`},children:[u.jsx("img",{src:s.image.src,alt:s.image.alt,loading:"lazy",decoding:"async",style:{objectPosition:s.image.position}}),s.image.credit?u.jsxs("figcaption",{children:["Image: ",u.jsx("a",{href:s.image.credit.url,target:"_blank",rel:"noreferrer",children:s.image.credit.label})," · ",s.image.credit.license]}):null]}),u.jsxs("div",{className:"story-card__narrative",children:[s.narrative.map(d=>u.jsx("p",{children:d},d)),u.jsxs("div",{className:"story-card__why",children:[u.jsx("span",{children:s.whyHeading}),s.whyItMatters.map(d=>u.jsx("p",{children:d},d))]}),u.jsxs("div",{className:"story-card__reflection",children:[u.jsx("span",{children:"REFLECTION"}),s.reflection.map(d=>u.jsx("p",{children:d},d))]}),u.jsxs("a",{className:"story-card__source",href:s.source.url,target:"_blank",rel:"noreferrer",children:["Source: ",s.source.label," ↗"]})]})]})]})}function Hm(s){const d=[];return s.forEach(E=>{E.kind==="heading"?d.push({heading:E.text,paragraphs:[]}):d.length&&d[d.length-1].paragraphs.push(E.text)}),d}function m0({role:s}){const d=Ky[s.id];return u.jsx("section",{className:"impact-benchmark","data-family":s.family,"aria-labelledby":`impact-benchmark-${s.id}`,children:u.jsxs("div",{className:"impact-benchmark__inner",children:[u.jsxs("div",{className:"impact-benchmark__lead",children:[u.jsx("p",{className:"eyebrow",id:`impact-benchmark-${s.id}`,children:"Impact Benchmark"}),u.jsx("p",{className:"impact-benchmark__threshold",children:d.threshold}),u.jsx("p",{className:"impact-benchmark__value-type",children:d.valueType})]}),u.jsxs("dl",{className:"impact-benchmark__facts",children:[u.jsxs("div",{children:[u.jsx("dt",{children:"Level"}),u.jsxs("dd",{children:[d.level," · ",s.name]})]}),u.jsxs("div",{children:[u.jsx("dt",{children:"Who"}),u.jsx("dd",{children:d.scope})]}),u.jsxs("div",{children:[u.jsx("dt",{children:"Evidence"}),u.jsx("dd",{children:d.evidence})]})]})]})})}function p0({role:s,score:d,onClose:E}){const c=de.useRef(null),A=Fv[s.id],R=A.howItWorks.findIndex(w=>w.kind==="heading"&&w.text==="IT STARTS WITH CARE."),I=R>=0?A.howItWorks.slice(0,R):A.howItWorks,G=R>=0?A.howItWorks.slice(R):[],H=Hm(I),M=Hm(G);return de.useEffect(()=>{var S;(S=c.current)==null||S.focus();const w=C=>{C.key==="Escape"&&E()};return document.addEventListener("keydown",w),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",w),document.body.classList.remove("modal-open")}},[E]),u.jsx("div",{className:"role-modal",role:"dialog","aria-modal":"true","aria-labelledby":"role-modal-title",onMouseDown:w=>{w.target===w.currentTarget&&E()},children:u.jsxs("article",{"data-family":s.family,children:[u.jsx("button",{className:"role-modal__close",onClick:E,ref:c,"aria-label":"Close role details",children:"×"}),u.jsxs("div",{className:"role-modal__content",children:[u.jsxs("header",{className:"role-detail-hero",children:[u.jsx("div",{className:"role-detail-hero__realm","data-role":s.id,style:Ti(s),"aria-hidden":"true"}),u.jsx("div",{className:"role-detail-hero__wash","aria-hidden":"true"}),u.jsx("img",{className:"role-detail-hero__avatar",src:s.image,alt:"",style:{objectPosition:s.avatarPosition}}),u.jsxs("div",{className:"role-detail-hero__content",children:[u.jsxs("p",{className:"eyebrow",children:[s.familyLabel," · Tier ",s.tier]}),u.jsx("h2",{className:"role-title",id:"role-modal-title",children:A.hero.name}),u.jsx("p",{className:"role-modal__meaning",children:A.hero.promise}),u.jsx("div",{className:"role-detail-copy role-detail-hero__introduction",children:A.hero.introduction.map(w=>u.jsx("p",{children:w},w))}),u.jsxs("div",{className:"role-detail-hero__prompts",children:[u.jsxs("article",{children:[u.jsx("span",{children:"PROFESSIONAL FUTURE-PROOFING"}),u.jsx("p",{children:A.hero.professionalFutureProofing})]}),u.jsxs("article",{children:[u.jsx("span",{children:A.hero.questionLabel}),u.jsx("p",{children:A.hero.question})]})]}),u.jsxs("div",{className:"role-modal__state",children:[u.jsx(lu,{score:d}),u.jsx("span",{children:Tl(d)})]})]})]}),u.jsx(m0,{role:s}),u.jsxs("section",{className:"role-detail-section role-detail-proof",children:[u.jsx("p",{className:"role-detail-section__index",children:"01"}),u.jsxs("div",{children:[u.jsx("h3",{children:"Can You Prove It?"}),u.jsx("div",{className:"role-detail-copy",children:A.canYouProveIt.introduction.map(w=>u.jsx("p",{children:w},w))}),u.jsx("ul",{children:A.canYouProveIt.signals.map(w=>u.jsx("li",{children:w},w))}),u.jsx("p",{className:"role-detail-formula",children:A.canYouProveIt.formula}),u.jsx("div",{className:"role-detail-copy",children:A.canYouProveIt.closing.map(w=>u.jsx("p",{children:w},w))})]})]}),u.jsxs("section",{className:"role-detail-section role-detail-how",children:[u.jsx("p",{className:"role-detail-section__index",children:"02"}),u.jsxs("div",{children:[u.jsxs("h3",{children:["How ",s.id==="explorer"?"an":"a"," ",u.jsx("span",{className:"role-title",children:s.name})," Works"]}),u.jsx("div",{className:"role-behaviour-grid",children:H.map(w=>u.jsxs("article",{children:[u.jsx("h4",{children:w.heading}),w.paragraphs.map(S=>u.jsx("p",{children:S},S))]},w.heading))}),M.map(w=>u.jsxs("div",{className:"role-detail-care",children:[u.jsx("h4",{children:w.heading}),w.paragraphs.map(S=>u.jsx("p",{children:S},S))]},w.heading))]})]}),u.jsxs("section",{className:"role-detail-section role-detail-future",children:[u.jsx("p",{className:"role-detail-section__index",children:"03"}),u.jsxs("div",{children:[u.jsxs("h3",{children:[u.jsx("span",{className:"role-title",children:s.name})," and Future-Proofing"]}),u.jsx("div",{className:"role-detail-copy",children:A.futureProofing.map(w=>u.jsx("p",{children:w},w))})]})]}),u.jsxs("section",{className:"role-detail-section role-detail-human",children:[u.jsx("p",{className:"role-detail-section__index",children:"04"}),u.jsxs("div",{children:[u.jsx("h3",{children:"The Human Side"}),u.jsx("div",{className:"role-detail-copy",children:A.humanSide.map(w=>u.jsx("p",{children:w},w))})]})]}),u.jsxs("section",{className:"role-detail-section role-detail-stories",children:[u.jsx("p",{className:"role-detail-section__index",children:"05"}),u.jsxs("div",{children:[u.jsx("h3",{children:"Stories in Action"}),u.jsx("div",{className:"story-list",children:A.stories.map(w=>u.jsx(h0,{story:w},w.name))})]})]}),u.jsxs("section",{className:"role-detail-section role-detail-better-world",children:[u.jsx("p",{className:"role-detail-section__index",children:"06"}),u.jsxs("div",{children:[u.jsx("h3",{children:"And What About Yours?"}),u.jsx("div",{className:"role-detail-copy",children:A.whatAboutYours.map(w=>u.jsx("p",{children:w},w))})]})]}),u.jsxs("section",{className:"role-detail-section role-detail-practice",children:[u.jsx("p",{className:"role-detail-section__index",children:"07"}),u.jsxs("div",{children:[u.jsx("h3",{children:"Do It. Prove It. Earn It."}),u.jsxs("div",{className:"practice-steps",children:[u.jsxs("article",{children:[u.jsx("span",{children:"DO IT"}),A.practice.doIt.map(w=>u.jsx("p",{children:w},w))]}),u.jsxs("article",{children:[u.jsx("span",{children:"PROVE IT"}),A.practice.proveIt.map(w=>u.jsx("p",{children:w},w))]}),u.jsxs("article",{children:[u.jsx("span",{children:"EARN IT"}),A.practice.earnIt.map(w=>u.jsx("p",{children:w},w))]})]})]})]}),u.jsx("footer",{className:"role-detail-footer",children:u.jsx(qm,{})})]})]})})}function qm({global:s=!1}){return u.jsxs("div",{className:`role-journey-cta${s?" role-journey-cta--global":""}`,children:[u.jsx("h3",{children:"READY TO FUTURE-PROOF YOURSELF?"}),u.jsx("p",{children:"Knowing where you stand is only the beginning."}),u.jsx("p",{children:"The next step is to practise these capabilities through real Impact Projects, build evidence, and create measurable value."}),u.jsxs("a",{className:"primary-button",href:Js,target:"_blank",rel:"noreferrer",children:[u.jsx("span",{children:"START MY FUTURE-PROOFING JOURNEY"}),u.jsx(nu,{})]}),u.jsxs("a",{className:"community-button",href:av,target:"_blank",rel:"noopener noreferrer",children:[u.jsx("span",{children:"JOIN OUR FUTURE-PROOFING COMMUNITY"}),u.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})}function g0(){const s=Mm({participantName:$v,completionDate:new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"long",year:"numeric"}).format(new Date),scores:Dm,resultUrl:Lm(Pv,Dm)});return u.jsxs("main",{className:"email-preview-page screen-enter",id:"main-content",children:[u.jsxs("header",{className:"email-preview-page__header",children:[u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"Email design preview"}),u.jsx("h1",{children:"Your Leadapreneur Future-Proofing Result"})]}),u.jsx("p",{children:"Desktop and mobile responsive · Sample participant: Kezia · Nine-role recency map"})]}),u.jsxs("div",{className:"email-preview-page__canvas",children:[u.jsxs("div",{className:"email-preview-page__meta",children:[u.jsx("span",{children:"SUBJECT"}),u.jsx("strong",{children:"Your Leadapreneur Future-Proofing Result"})]}),u.jsx(iv,{model:s})]})]})}function y0({name:s,gatewayAnswer:d,scores:E,resultUrl:c,onClose:A}){const R=de.useRef(null),[I,G]=de.useState(""),[H,M]=de.useState(""),[w,S]=de.useState(!1),C=Mm({participantName:s,completionDate:new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"long",year:"numeric"}).format(new Date),scores:E,resultUrl:c});de.useEffect(()=>{var ne;(ne=R.current)==null||ne.focus();const F=ae=>{ae.key==="Escape"&&A()};return document.addEventListener("keydown",F),document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",F),document.body.classList.remove("modal-open")}},[A]);const Ee=async F=>{F.preventDefault(),S(!0),M("");try{const ne=await fetch("/api/future-proofing-result-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Py(I,C,zm(d,E)))}),je=(ne.headers.get("content-type")??"").includes("application/json")?await ne.json():null;if(!Fy(ne.ok,je))throw new Error((je==null?void 0:je.message)||"Secure email delivery is not connected in this preview.");M("Your email and matching PDF have been sent. Please check your inbox.")}catch(ne){M(ne instanceof Error?ne.message:"Email delivery failed. Nothing was marked as sent.")}finally{S(!1)}};return u.jsx("div",{className:"email-result-modal",role:"dialog","aria-modal":"true","aria-labelledby":"email-result-title",onMouseDown:F=>{F.target===F.currentTarget&&A()},children:u.jsxs("section",{children:[u.jsx("button",{className:"email-result-modal__close",type:"button",onClick:A,"aria-label":"Close email result",children:"×"}),u.jsx("p",{className:"eyebrow",children:"Keep your result"}),u.jsx("h2",{id:"email-result-title",children:"Get your result by email"}),u.jsx("p",{children:"Enter the email address where you want to receive the PDF report and interactive result link."}),u.jsxs("form",{onSubmit:Ee,children:[u.jsx("label",{htmlFor:"result-email",children:"Email address"}),u.jsx("input",{ref:R,id:"result-email",type:"email",inputMode:"email",autoComplete:"email",required:!0,value:I,onChange:F=>{G(F.target.value),M("")},placeholder:"you@email.com"}),u.jsxs("button",{className:"primary-button",type:"submit",disabled:w,children:[u.jsx("span",{children:w?"SENDING…":"SEND MY RESULT"}),u.jsx(nu,{})]})]}),u.jsx("p",{className:"email-result-modal__privacy",children:"Your email is never added to the result link. We confirm sending after the email service accepts your email and PDF attachment."}),H?u.jsx("p",{className:"email-result-modal__status",role:"status",children:H}):null,u.jsx("a",{className:"email-result-modal__link",href:c,target:"_blank",rel:"noreferrer",children:"Open the shareable result link ↗"})]})})}function v0({resultUrl:s,onEmail:d,isSharedResult:E,onStartOwn:c}){const[A,R]=de.useState(""),I=async()=>{if(R(""),navigator.share)try{await navigator.share({title:"My Leadapreneur Future-Proofing Check result",text:"View my Leadapreneur Future-Proofing Check result.",url:s}),R("RESULT SHARED");return}catch(G){if(G instanceof DOMException&&G.name==="AbortError")return}try{await t0(s),R("RESULT LINK COPIED")}catch{R("COPY UNAVAILABLE — OPEN THE RESULT LINK AND COPY IT FROM YOUR BROWSER")}};return u.jsxs("section",{className:"result-actions","aria-label":"Save or share this result",children:[u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"Keep the evidence moving"}),u.jsx("h2",{children:"Save or share this result."}),u.jsx("p",{children:"The share link contains only the gateway context and nine role scores. It does not include your name, email, or answers."})]}),u.jsxs("div",{className:"result-actions__controls",children:[u.jsxs("button",{type:"button",className:"result-action-button",onClick:d,children:[u.jsx("span",{"aria-hidden":"true",children:"✉"})," EMAIL MY RESULT"]}),u.jsxs("button",{type:"button",className:"result-action-button result-action-button--primary",onClick:I,children:["SHARE MY RESULT ",u.jsx("span",{"aria-hidden":"true",children:"↗"})]}),E?u.jsx("button",{type:"button",className:"text-button result-actions__own",onClick:c,children:"CHECK MY OWN FUTURE-PROOFING →"}):null,u.jsx("p",{className:"result-actions__status",role:"status","aria-live":"polite",children:A})]})]})}function b0({name:s,gatewayAnswer:d,scores:E,onBack:c,onRestart:A,initialRoleId:R=null,isSharedResult:I=!1}){const[G,H]=de.useState(R),[M,w]=de.useState(null),[S,C]=de.useState(!1),Ee=Lm(d,E);return u.jsxs("main",{className:"result-screen screen-enter",id:"main-content",children:[u.jsxs("header",{className:"result-header",children:[u.jsx(Ra,{}),u.jsxs("div",{className:"result-header__actions",children:[I?null:u.jsx(Ei,{onClick:c}),u.jsx("button",{className:"text-button",onClick:A,children:I?"Check my own future-proofing →":"Retake check ↻"})]})]}),u.jsxs("section",{className:"result-hero",children:[u.jsx("div",{className:"result-hero__world",style:{backgroundImage:`url(${Oa.futureWorld})`},"aria-hidden":"true"}),u.jsxs("div",{className:"result-hero__copy",children:[u.jsx("p",{className:"eyebrow light",children:"Your evidence map"}),u.jsx("h1",{children:I?"Here is the shared Future-Proofing result.":`${s}, here is what your recent work demonstrates.`}),u.jsx("p",{children:"This is a snapshot of practice, not a permanent label. It shows the standards your evidence supports today and where your next stretch may be."})]}),u.jsxs("div",{className:"result-hero__indicator",children:[u.jsxs("div",{children:[u.jsx("span",{children:"Future-Proofing Practice Indicator"}),u.jsx("small",{children:"Nine roles · Four recency states"})]}),u.jsx("p",{children:"Your nine-role grid is the indicator. Each card becomes more powered when the evidence is more recent; an empty card means no evidence was demonstrated within the last 36 months."})]})]}),u.jsx(v0,{resultUrl:Ee,onEmail:()=>C(!0),isSharedResult:I,onStartOwn:A}),u.jsxs("section",{className:"result-map","aria-labelledby":"result-map-title",children:[u.jsxs("div",{className:"section-heading",children:[u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"Future-Proofing Practice Indicator"}),u.jsx("h2",{id:"result-map-title",children:"Nine roles. Four recency states. One view of your current practice."})]}),u.jsxs("div",{className:"result-map__guide",children:[u.jsx("strong",{children:"SELECT ANY ROLE TO SEE YOUR EVIDENCE AND NEXT STEP"}),u.jsxs("small",{children:["Click or tap any role ",u.jsx("b",{"aria-hidden":"true",children:"↓"})]})]})]}),u.jsxs("div",{className:"result-capability-map",children:[u.jsx(c0,{}),u.jsx("div",{className:"result-grid",children:bi.map(F=>{const ne=G===F.id,ae=E[F.id]??0;return u.jsxs("div",{className:"result-grid__item","data-family":F.family,"data-tier":F.tier,children:[u.jsx(f0,{role:F,score:ae,expanded:ne,onOpen:()=>H(je=>je===F.id?null:F.id)}),ne?u.jsx(d0,{role:F,score:ae,onViewDetails:()=>w(F)}):null]},F.id)})}),u.jsx(Ws,{className:"result-grid-headings"})]})]}),u.jsxs("section",{className:"result-footnote",children:[d===null?null:u.jsxs("p",{children:[u.jsx("strong",{children:"Gateway context:"})," ",d?"You reported an Impact Project beyond business as usual in the last 36 months.":"You selected Not Yet for the 36-month Impact Project gateway."]}),u.jsx("p",{children:"Your result reflects evidence and recency. It does not claim that you are permanently future proof."})]}),M?null:u.jsx("section",{className:"result-closing",children:u.jsx(qm,{global:!0})}),M?u.jsx(p0,{role:M,score:E[M.id]??0,onClose:()=>w(null)}):null,S?u.jsx(y0,{name:s,gatewayAnswer:d,scores:E,resultUrl:Ee,onClose:()=>C(!1)}):null]})}function T0(){const s=de.useMemo(()=>new URLSearchParams(window.location.search),[]),d=de.useMemo(()=>e0(s.get("result")),[s]);Number(s.get("q"));const E=d?"result":"intro",c=s.get("role");c&&tu[c];const[A,R]=de.useState(E),[I,G]=de.useState(""),[H,M]=de.useState(0),[w,S]=de.useState((d==null?void 0:d.gatewayAnswer)??null),[C,Ee]=de.useState((d==null?void 0:d.scores)??{}),[F,ne]=de.useState(null),[ae,je]=de.useState(!!d),$e=de.useMemo(()=>Object.keys(C).length,[C]),Pe=eu[H],wt=Pe.role&&Object.prototype.hasOwnProperty.call(C,Pe.role)?C[Pe.role]??null:null;de.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"});const oe=document.getElementById("main-content");oe==null||oe.setAttribute("tabindex",A==="start-transition"||A==="tier-transition"?"0":"-1"),A!=="intro"&&A!=="standard"&&(oe==null||oe.focus({preventScroll:!0}))},[A,H]);const Nt=oe=>{if(oe.number===3){M(3),ne(2),R("tier-transition");return}if(oe.number===6){M(6),ne(3),R("tier-transition");return}if(oe.number===9){R("result");return}M(Ge=>Ge+1)},et=oe=>{Pe.role&&(Ee(Ge=>({...Ge,[Pe.role]:oe})),Nt(Pe))},J=()=>{if(H===0){R("impact-intro");return}if(H===3){ne(2),R("tier-transition");return}if(H===6){ne(3),R("tier-transition");return}M(oe=>Math.max(0,oe-1))},ie=()=>{M(F===2?2:5),R("quiz")},Ot=()=>{ne(null),M(8),R("quiz")},it=()=>{const oe=new URL(window.location.href);oe.searchParams.has("result")&&(oe.searchParams.delete("result"),window.history.replaceState({},"",`${oe.pathname}${oe.search}${oe.hash}`)),je(!1),R("intro"),G(""),M(0),S(null),Ee({}),ne(null)};return u.jsxs("div",{className:"app-shell",children:[u.jsx("a",{className:"skip-link",href:"#main-content",children:"Skip to main content"}),A==="intro"?u.jsx(n0,{onContinue:()=>R("standard")}):null,A==="standard"?u.jsx(l0,{name:I,setName:G,onBack:()=>R("intro"),onStart:()=>R("start-transition")}):null,A==="start-transition"?u.jsx(i0,{onComplete:()=>R("impact-intro"),onBack:()=>R("standard")}):null,A==="impact-intro"?u.jsx(o0,{onContinue:()=>R("quiz"),onBack:()=>R("start-transition")}):null,A==="quiz"?u.jsx(u0,{question:Pe,answered:$e,selectedScore:wt,onBack:J,onAnswer:et}):null,A==="tier-transition"&&F?u.jsx(r0,{tier:F,onContinue:()=>R("quiz"),onBack:ie}):null,A==="result"?u.jsx(b0,{name:I.trim(),gatewayAnswer:w,scores:C,onBack:Ot,onRestart:it,initialRoleId:null,isSharedResult:ae}):null,A==="email-preview"?u.jsx(g0,{}):null]})}Zy.createRoot(document.getElementById("root")).render(u.jsx(de.StrictMode,{children:u.jsx(T0,{})}));
