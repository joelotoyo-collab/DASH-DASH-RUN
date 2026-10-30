(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Fu={exports:{}},Xa={},Ou={exports:{}},gt={};var Kp;function Cv(){if(Kp)return gt;Kp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function S(N,ae,Se){this.props=N,this.context=ae,this.refs=R,this.updater=Se||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,ae){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ae,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function I(N,ae,Se){this.props=N,this.context=ae,this.refs=R,this.updater=Se||y}var H=I.prototype=new x;H.constructor=I,w(H,S.prototype),H.isPureReactComponent=!0;var C=Array.isArray,P=Object.prototype.hasOwnProperty,L={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function E(N,ae,Se){var ke,ze={},He=null,oe=null;if(ae!=null)for(ke in ae.ref!==void 0&&(oe=ae.ref),ae.key!==void 0&&(He=""+ae.key),ae)P.call(ae,ke)&&!U.hasOwnProperty(ke)&&(ze[ke]=ae[ke]);var de=arguments.length-2;if(de===1)ze.children=Se;else if(1<de){for(var Me=Array(de),Ye=0;Ye<de;Ye++)Me[Ye]=arguments[Ye+2];ze.children=Me}if(N&&N.defaultProps)for(ke in de=N.defaultProps,de)ze[ke]===void 0&&(ze[ke]=de[ke]);return{$$typeof:s,type:N,key:He,ref:oe,props:ze,_owner:L.current}}function b(N,ae){return{$$typeof:s,type:N.type,key:ae,ref:N.ref,props:N.props,_owner:N._owner}}function O(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function B(N){var ae={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Se){return ae[Se]})}var z=/\/+/g;function G(N,ae){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):ae.toString(36)}function k(N,ae,Se,ke,ze){var He=typeof N;(He==="undefined"||He==="boolean")&&(N=null);var oe=!1;if(N===null)oe=!0;else switch(He){case"string":case"number":oe=!0;break;case"object":switch(N.$$typeof){case s:case e:oe=!0}}if(oe)return oe=N,ze=ze(oe),N=ke===""?"."+G(oe,0):ke,C(ze)?(Se="",N!=null&&(Se=N.replace(z,"$&/")+"/"),k(ze,ae,Se,"",function(Ye){return Ye})):ze!=null&&(O(ze)&&(ze=b(ze,Se+(!ze.key||oe&&oe.key===ze.key?"":(""+ze.key).replace(z,"$&/")+"/")+N)),ae.push(ze)),1;if(oe=0,ke=ke===""?".":ke+":",C(N))for(var de=0;de<N.length;de++){He=N[de];var Me=ke+G(He,de);oe+=k(He,ae,Se,Me,ze)}else if(Me=g(N),typeof Me=="function")for(N=Me.call(N),de=0;!(He=N.next()).done;)He=He.value,Me=ke+G(He,de++),oe+=k(He,ae,Se,Me,ze);else if(He==="object")throw ae=String(N),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return oe}function Y(N,ae,Se){if(N==null)return N;var ke=[],ze=0;return k(N,ke,"","",function(He){return ae.call(Se,He,ze++)}),ke}function se(N){if(N._status===-1){var ae=N._result;ae=ae(),ae.then(function(Se){(N._status===0||N._status===-1)&&(N._status=1,N._result=Se)},function(Se){(N._status===0||N._status===-1)&&(N._status=2,N._result=Se)}),N._status===-1&&(N._status=0,N._result=ae)}if(N._status===1)return N._result.default;throw N._result}var ee={current:null},J={transition:null},$={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:J,ReactCurrentOwner:L};function Z(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:Y,forEach:function(N,ae,Se){Y(N,function(){ae.apply(this,arguments)},Se)},count:function(N){var ae=0;return Y(N,function(){ae++}),ae},toArray:function(N){return Y(N,function(ae){return ae})||[]},only:function(N){if(!O(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=I,gt.StrictMode=r,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,gt.act=Z,gt.cloneElement=function(N,ae,Se){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ke=w({},N.props),ze=N.key,He=N.ref,oe=N._owner;if(ae!=null){if(ae.ref!==void 0&&(He=ae.ref,oe=L.current),ae.key!==void 0&&(ze=""+ae.key),N.type&&N.type.defaultProps)var de=N.type.defaultProps;for(Me in ae)P.call(ae,Me)&&!U.hasOwnProperty(Me)&&(ke[Me]=ae[Me]===void 0&&de!==void 0?de[Me]:ae[Me])}var Me=arguments.length-2;if(Me===1)ke.children=Se;else if(1<Me){de=Array(Me);for(var Ye=0;Ye<Me;Ye++)de[Ye]=arguments[Ye+2];ke.children=de}return{$$typeof:s,type:N.type,key:ze,ref:He,props:ke,_owner:oe}},gt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},gt.createElement=E,gt.createFactory=function(N){var ae=E.bind(null,N);return ae.type=N,ae},gt.createRef=function(){return{current:null}},gt.forwardRef=function(N){return{$$typeof:f,render:N}},gt.isValidElement=O,gt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:se}},gt.memo=function(N,ae){return{$$typeof:p,type:N,compare:ae===void 0?null:ae}},gt.startTransition=function(N){var ae=J.transition;J.transition={};try{N()}finally{J.transition=ae}},gt.unstable_act=Z,gt.useCallback=function(N,ae){return ee.current.useCallback(N,ae)},gt.useContext=function(N){return ee.current.useContext(N)},gt.useDebugValue=function(){},gt.useDeferredValue=function(N){return ee.current.useDeferredValue(N)},gt.useEffect=function(N,ae){return ee.current.useEffect(N,ae)},gt.useId=function(){return ee.current.useId()},gt.useImperativeHandle=function(N,ae,Se){return ee.current.useImperativeHandle(N,ae,Se)},gt.useInsertionEffect=function(N,ae){return ee.current.useInsertionEffect(N,ae)},gt.useLayoutEffect=function(N,ae){return ee.current.useLayoutEffect(N,ae)},gt.useMemo=function(N,ae){return ee.current.useMemo(N,ae)},gt.useReducer=function(N,ae,Se){return ee.current.useReducer(N,ae,Se)},gt.useRef=function(N){return ee.current.useRef(N)},gt.useState=function(N){return ee.current.useState(N)},gt.useSyncExternalStore=function(N,ae,Se){return ee.current.useSyncExternalStore(N,ae,Se)},gt.useTransition=function(){return ee.current.useTransition()},gt.version="18.3.1",gt}var $p;function df(){return $p||($p=1,Ou.exports=Cv()),Ou.exports}var Zp;function Pv(){if(Zp)return Xa;Zp=1;var s=df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,_={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:y,props:_,_owner:o.current}}return Xa.Fragment=t,Xa.jsx=u,Xa.jsxs=u,Xa}var Jp;function Lv(){return Jp||(Jp=1,Fu.exports=Pv()),Fu.exports}var q=Lv(),Ut=df(),hl={},ku={exports:{}},Wn={},Bu={exports:{}},zu={};var Qp;function Nv(){return Qp||(Qp=1,(function(s){function e(J,$){var Z=J.length;J.push($);e:for(;0<Z;){var N=Z-1>>>1,ae=J[N];if(0<o(ae,$))J[N]=$,J[Z]=ae,Z=N;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var $=J[0],Z=J.pop();if(Z!==$){J[0]=Z;e:for(var N=0,ae=J.length,Se=ae>>>1;N<Se;){var ke=2*(N+1)-1,ze=J[ke],He=ke+1,oe=J[He];if(0>o(ze,Z))He<ae&&0>o(oe,ze)?(J[N]=oe,J[He]=Z,N=He):(J[N]=ze,J[ke]=Z,N=ke);else if(He<ae&&0>o(oe,Z))J[N]=oe,J[He]=Z,N=He;else break e}}return $}function o(J,$){var Z=J.sortIndex-$.sortIndex;return Z!==0?Z:J.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,_=null,g=3,y=!1,w=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(J){for(var $=t(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=J)r(p),$.sortIndex=$.expirationTime,e(h,$);else break;$=t(p)}}function C(J){if(R=!1,H(J),!w)if(t(h)!==null)w=!0,se(P);else{var $=t(p);$!==null&&ee(C,$.startTime-J)}}function P(J,$){w=!1,R&&(R=!1,x(E),E=-1),y=!0;var Z=g;try{for(H($),_=t(h);_!==null&&(!(_.expirationTime>$)||J&&!B());){var N=_.callback;if(typeof N=="function"){_.callback=null,g=_.priorityLevel;var ae=N(_.expirationTime<=$);$=s.unstable_now(),typeof ae=="function"?_.callback=ae:_===t(h)&&r(h),H($)}else r(h);_=t(h)}if(_!==null)var Se=!0;else{var ke=t(p);ke!==null&&ee(C,ke.startTime-$),Se=!1}return Se}finally{_=null,g=Z,y=!1}}var L=!1,U=null,E=-1,b=5,O=-1;function B(){return!(s.unstable_now()-O<b)}function z(){if(U!==null){var J=s.unstable_now();O=J;var $=!0;try{$=U(!0,J)}finally{$?G():(L=!1,U=null)}}else L=!1}var G;if(typeof I=="function")G=function(){I(z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=z,G=function(){Y.postMessage(null)}}else G=function(){S(z,0)};function se(J){U=J,L||(L=!0,G())}function ee(J,$){E=S(function(){J(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,se(P))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(J){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var Z=g;g=$;try{return J()}finally{g=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,$){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var Z=g;g=J;try{return $()}finally{g=Z}},s.unstable_scheduleCallback=function(J,$,Z){var N=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?N+Z:N):Z=N,J){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Z+ae,J={id:v++,callback:$,priorityLevel:J,startTime:Z,expirationTime:ae,sortIndex:-1},Z>N?(J.sortIndex=Z,e(p,J),t(h)===null&&J===t(p)&&(R?(x(E),E=-1):R=!0,ee(C,Z-N))):(J.sortIndex=ae,e(h,J),w||y||(w=!0,se(P))),J},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(J){var $=g;return function(){var Z=g;g=$;try{return J.apply(this,arguments)}finally{g=Z}}}})(zu)),zu}var em;function Dv(){return em||(em=1,Bu.exports=Nv()),Bu.exports}var tm;function Iv(){if(tm)return Wn;tm=1;var s=df(),e=Dv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return h.call(_,n)?!0:h.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,I);S[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,I);S[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,I);S[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function H(n,i,a,c){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),L=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),B=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),J=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,N;function ae(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Se=!1;function ke(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){c=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,F=m.length-1;1<=T&&0<=F&&d[T]!==m[F];)F--;for(;1<=T&&0<=F;T--,F--)if(d[T]!==m[F]){if(T!==1||F!==1)do if(T--,F--,0>F||d[T]!==m[F]){var V=`
`+d[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=F);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ae(n):""}function ze(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function He(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case L:return"Portal";case b:return"Profiler";case E:return"StrictMode";case G:return"Suspense";case k:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:He(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return He(n(i))}catch{}}return null}function oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return He(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=Me(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Fe(n){n._valueTracker||(n._valueTracker=Ye(n))}function at(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Me(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dt(n,i){var a=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function xt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Nt(n,i){i=i.checked,i!=null&&H(n,"checked",i,!1)}function ft(n,i){Nt(n,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Zt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Zt(n,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ot(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Zt(n,i,a){(i!=="number"||Ft(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var nn=Array.isArray;function Lt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Gt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function j(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(nn(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:de(a)}}function ln(n,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Tt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?D(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,ce=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Ae.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ce=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(Ce[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function $e(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var et=null,it=null,W=null;function be(n){if(n=Pa(n)){if(typeof et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ro(i),et(n.stateNode,n.type,i))}}function me(n){it?W?W.push(n):W=[n]:it=n}function Re(){if(it){var n=it,i=W;if(W=it=null,be(n),i)for(n=0;n<i.length;n++)be(i[n])}}function Ue(n,i){return n(i)}function ve(){}var Je=!1;function qe(n,i,a){if(Je)return n(i,a);Je=!0;try{return Ue(n,i,a)}finally{Je=!1,(it!==null||W!==null)&&(ve(),Re())}}function At(n,i){var a=n.stateNode;if(a===null)return null;var c=Ro(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Et=!1;if(f)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Et=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Et=!1}function ti(n,i,a,c,d,m,T,F,V){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(xe){this.onError(xe)}}var Or=!1,hs=null,kr=!1,Br=null,sc={onError:function(n){Or=!0,hs=n}};function co(n,i,a,c,d,m,T,F,V){Or=!1,hs=null,ti.apply(sc,arguments)}function uo(n,i,a,c,d,m,T,F,V){if(co.apply(this,arguments),Or){if(Or){var fe=hs;Or=!1,hs=null}else throw Error(t(198));kr||(kr=!0,Br=fe)}}function Nn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ps(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ca(n){if(Nn(n)!==n)throw Error(t(188))}function fo(n){var i=n.alternate;if(!i){if(i=Nn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return ca(d),n;if(m===c)return ca(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,F=d.child;F;){if(F===a){T=!0,a=d,c=m;break}if(F===c){T=!0,c=d,a=m;break}F=F.sibling}if(!T){for(F=m.child;F;){if(F===a){T=!0,a=m,c=d;break}if(F===c){T=!0,c=m,a=d;break}F=F.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function zr(n){return n=fo(n),n!==null?ua(n):null}function ua(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ua(n);if(i!==null)return i;n=n.sibling}return null}var Vr=e.unstable_scheduleCallback,da=e.unstable_cancelCallback,ho=e.unstable_shouldYield,ac=e.unstable_requestPaint,qt=e.unstable_now,oc=e.unstable_getCurrentPriorityLevel,fa=e.unstable_ImmediatePriority,ha=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,X=e.unstable_LowPriority,ue=e.unstable_IdlePriority,ie=null,te=null;function De(n){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(ie,n,void 0,(n.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Ze,Ne=Math.log,We=Math.LN2;function Ze(n){return n>>>=0,n===0?32:31-(Ne(n)/We|0)|0}var ot=64,ut=4194304;function Ve(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function St(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var F=T&~d;F!==0?c=Ve(F):(m&=T,m!==0&&(c=Ve(m)))}else T=a&~d,T!==0?c=Ve(T):m!==0&&(c=Ve(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Le(i),d=1<<a,c|=n[a],i&=~d;return c}function Jt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Le(m),F=1<<T,V=d[T];V===-1?((F&a)===0||(F&c)!==0)&&(d[T]=Jt(F,i)):V<=i&&(n.expiredLanes|=F),m&=~F}}function Pt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function cn(){var n=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),n}function Oe(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function en(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Le(i),n[i]=a}function yt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Le(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function wn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Le(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ht=0;function di(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wi,bt,Wt,fi,Dt,ni=!1,hi=[],pi=null,dr=null,fr=null,pa=new Map,ma=new Map,hr=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(n,i){switch(n){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":pa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(i.pointerId)}}function ga(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Pa(i),i!==null&&bt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Jg(n,i,a,c,d){switch(i){case"focusin":return pi=ga(pi,n,i,a,c,d),!0;case"dragenter":return dr=ga(dr,n,i,a,c,d),!0;case"mouseover":return fr=ga(fr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return pa.set(m,ga(pa.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,ma.set(m,ga(ma.get(m)||null,n,i,a,c,d)),!0}return!1}function Df(n){var i=Hr(n.target);if(i!==null){var a=Nn(i);if(a!==null){if(i=a.tag,i===13){if(i=ps(a),i!==null){n.blockedOn=i,Dt(n.priority,function(){Wt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=cc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=Pa(a),i!==null&&bt(i),n.blockedOn=a,!1;i.shift()}return!0}function If(n,i,a){po(n)&&a.delete(i)}function Qg(){ni=!1,pi!==null&&po(pi)&&(pi=null),dr!==null&&po(dr)&&(dr=null),fr!==null&&po(fr)&&(fr=null),pa.forEach(If),ma.forEach(If)}function va(n,i){n.blockedOn===i&&(n.blockedOn=null,ni||(ni=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Qg)))}function _a(n){function i(d){return va(d,n)}if(0<hi.length){va(hi[0],n);for(var a=1;a<hi.length;a++){var c=hi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(pi!==null&&va(pi,n),dr!==null&&va(dr,n),fr!==null&&va(fr,n),pa.forEach(i),ma.forEach(i),a=0;a<hr.length;a++)c=hr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Df(a),a.blockedOn===null&&hr.shift()}var ms=C.ReactCurrentBatchConfig,mo=!0;function e0(n,i,a,c){var d=ht,m=ms.transition;ms.transition=null;try{ht=1,lc(n,i,a,c)}finally{ht=d,ms.transition=m}}function t0(n,i,a,c){var d=ht,m=ms.transition;ms.transition=null;try{ht=4,lc(n,i,a,c)}finally{ht=d,ms.transition=m}}function lc(n,i,a,c){if(mo){var d=cc(n,i,a,c);if(d===null)Ac(n,i,c,go,a),Nf(n,c);else if(Jg(d,n,i,a,c))c.stopPropagation();else if(Nf(n,c),i&4&&-1<Zg.indexOf(n)){for(;d!==null;){var m=Pa(d);if(m!==null&&Wi(m),m=cc(n,i,a,c),m===null&&Ac(n,i,c,go,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Ac(n,i,c,null,a)}}var go=null;function cc(n,i,a,c){if(go=null,n=$e(c),n=Hr(n),n!==null)if(i=Nn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ps(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return go=n,null}function Uf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oc()){case fa:return 1;case ha:return 4;case A:case X:return 16;case ue:return 536870912;default:return 16}default:return 16}}var pr=null,uc=null,vo=null;function Ff(){if(vo)return vo;var n,i=uc,a=i.length,c,d="value"in pr?pr.value:pr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return vo=d.slice(n,1<c?1-c:void 0)}function _o(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xo(){return!0}function Of(){return!1}function Yn(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xo:Of,this.isPropagationStopped=Of,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=Yn(gs),xa=Z({},gs,{view:0,detail:0}),n0=Yn(xa),fc,hc,Sa,So=Z({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Sa&&(Sa&&n.type==="mousemove"?(fc=n.screenX-Sa.screenX,hc=n.screenY-Sa.screenY):hc=fc=0,Sa=n),fc)},movementY:function(n){return"movementY"in n?n.movementY:hc}}),kf=Yn(So),i0=Z({},So,{dataTransfer:0}),r0=Yn(i0),s0=Z({},xa,{relatedTarget:0}),pc=Yn(s0),a0=Z({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=Yn(a0),l0=Z({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),c0=Yn(l0),u0=Z({},gs,{data:0}),Bf=Yn(u0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=h0[n])?!!i[n]:!1}function mc(){return p0}var m0=Z({},xa,{key:function(n){if(n.key){var i=d0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_o(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?f0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(n){return n.type==="keypress"?_o(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_o(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),g0=Yn(m0),v0=Z({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=Yn(v0),_0=Z({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),x0=Yn(_0),S0=Z({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=Yn(S0),M0=Z({},So,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=Yn(M0),w0=[9,13,27,32],gc=f&&"CompositionEvent"in window,ya=null;f&&"documentMode"in document&&(ya=document.documentMode);var T0=f&&"TextEvent"in window&&!ya,Vf=f&&(!gc||ya&&8<ya&&11>=ya),Hf=" ",Gf=!1;function Wf(n,i){switch(n){case"keyup":return w0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function A0(n,i){switch(n){case"compositionend":return Xf(i);case"keypress":return i.which!==32?null:(Gf=!0,Hf);case"textInput":return n=i.data,n===Hf&&Gf?null:n;default:return null}}function b0(n,i){if(vs)return n==="compositionend"||!gc&&Wf(n,i)?(n=Ff(),vo=uc=pr=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vf&&i.locale!=="ko"?null:i.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!R0[n.type]:i==="textarea"}function Yf(n,i,a,c){me(c),i=To(i,"onChange"),0<i.length&&(a=new dc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ma=null,Ea=null;function C0(n){dh(n,0)}function yo(n){var i=Ms(n);if(at(i))return n}function P0(n,i){if(n==="change")return i}var jf=!1;if(f){var vc;if(f){var _c="oninput"in document;if(!_c){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),_c=typeof Kf.oninput=="function"}vc=_c}else vc=!1;jf=vc&&(!document.documentMode||9<document.documentMode)}function $f(){Ma&&(Ma.detachEvent("onpropertychange",Zf),Ea=Ma=null)}function Zf(n){if(n.propertyName==="value"&&yo(Ea)){var i=[];Yf(i,Ea,n,$e(n)),qe(C0,i)}}function L0(n,i,a){n==="focusin"?($f(),Ma=i,Ea=a,Ma.attachEvent("onpropertychange",Zf)):n==="focusout"&&$f()}function N0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yo(Ea)}function D0(n,i){if(n==="click")return yo(i)}function I0(n,i){if(n==="input"||n==="change")return yo(i)}function U0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:U0;function wa(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!mi(n[d],i[d]))return!1}return!0}function Jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qf(n,i){var a=Jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jf(a)}}function eh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?eh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function th(){for(var n=window,i=Ft();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ft(n.document)}return i}function xc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function F0(n){var i=th(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&eh(a.ownerDocument.documentElement,a)){if(c!==null&&xc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Qf(a,m);var T=Qf(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var O0=f&&"documentMode"in document&&11>=document.documentMode,_s=null,Sc=null,Ta=null,yc=!1;function nh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||_s==null||_s!==Ft(c)||(c=_s,"selectionStart"in c&&xc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&wa(Ta,c)||(Ta=c,c=To(Sc,"onSelect"),0<c.length&&(i=new dc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=_s)))}function Mo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var xs={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Mc={},ih={};f&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Eo(n){if(Mc[n])return Mc[n];if(!xs[n])return n;var i=xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ih)return Mc[n]=i[a];return n}var rh=Eo("animationend"),sh=Eo("animationiteration"),ah=Eo("animationstart"),oh=Eo("transitionend"),lh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,i){lh.set(n,i),l(i,[n])}for(var Ec=0;Ec<ch.length;Ec++){var wc=ch[Ec],k0=wc.toLowerCase(),B0=wc[0].toUpperCase()+wc.slice(1);mr(k0,"on"+B0)}mr(rh,"onAnimationEnd"),mr(sh,"onAnimationIteration"),mr(ah,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(oh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function uh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,uo(c,i,void 0,n),n.currentTarget=null}function dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var F=c[T],V=F.instance,fe=F.currentTarget;if(F=F.listener,V!==m&&d.isPropagationStopped())break e;uh(d,F,fe),m=V}else for(T=0;T<c.length;T++){if(F=c[T],V=F.instance,fe=F.currentTarget,F=F.listener,V!==m&&d.isPropagationStopped())break e;uh(d,F,fe),m=V}}}if(kr)throw n=Br,kr=!1,Br=null,n}function zt(n,i){var a=i[Nc];a===void 0&&(a=i[Nc]=new Set);var c=n+"__bubble";a.has(c)||(fh(i,n,2,!1),a.add(c))}function Tc(n,i,a){var c=0;i&&(c|=4),fh(a,n,c,i)}var wo="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[wo]){n[wo]=!0,r.forEach(function(a){a!=="selectionchange"&&(z0.has(a)||Tc(a,!1,n),Tc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[wo]||(i[wo]=!0,Tc("selectionchange",!1,i))}}function fh(n,i,a,c){switch(Uf(i)){case 1:var d=e0;break;case 4:d=t0;break;default:d=lc}a=d.bind(null,i,a,n),d=void 0,!Et||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Ac(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;T=T.return}for(;F!==null;){if(T=Hr(F),T===null)return;if(V=T.tag,V===5||V===6){c=m=T;continue e}F=F.parentNode}}c=c.return}qe(function(){var fe=m,xe=$e(a),ye=[];e:{var _e=lh.get(n);if(_e!==void 0){var Be=dc,Xe=n;switch(n){case"keypress":if(_o(a)===0)break e;case"keydown":case"keyup":Be=g0;break;case"focusin":Xe="focus",Be=pc;break;case"focusout":Xe="blur",Be=pc;break;case"beforeblur":case"afterblur":Be=pc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=r0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=x0;break;case rh:case sh:case ah:Be=o0;break;case oh:Be=y0;break;case"scroll":Be=n0;break;case"wheel":Be=E0;break;case"copy":case"cut":case"paste":Be=c0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=zf}var je=(i&4)!==0,tn=!je&&n==="scroll",re=je?_e!==null?_e+"Capture":null:_e;je=[];for(var K=fe,le;K!==null;){le=K;var we=le.stateNode;if(le.tag===5&&we!==null&&(le=we,re!==null&&(we=At(K,re),we!=null&&je.push(Ra(K,we,le)))),tn)break;K=K.return}0<je.length&&(_e=new Be(_e,Xe,null,a,xe),ye.push({event:_e,listeners:je}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",_e&&a!==Te&&(Xe=a.relatedTarget||a.fromElement)&&(Hr(Xe)||Xe[Xi]))break e;if((Be||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Be?(Xe=a.relatedTarget||a.toElement,Be=fe,Xe=Xe?Hr(Xe):null,Xe!==null&&(tn=Nn(Xe),Xe!==tn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Be=null,Xe=fe),Be!==Xe)){if(je=kf,we="onMouseLeave",re="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(je=zf,we="onPointerLeave",re="onPointerEnter",K="pointer"),tn=Be==null?_e:Ms(Be),le=Xe==null?_e:Ms(Xe),_e=new je(we,K+"leave",Be,a,xe),_e.target=tn,_e.relatedTarget=le,we=null,Hr(xe)===fe&&(je=new je(re,K+"enter",Xe,a,xe),je.target=le,je.relatedTarget=tn,we=je),tn=we,Be&&Xe)t:{for(je=Be,re=Xe,K=0,le=je;le;le=Ss(le))K++;for(le=0,we=re;we;we=Ss(we))le++;for(;0<K-le;)je=Ss(je),K--;for(;0<le-K;)re=Ss(re),le--;for(;K--;){if(je===re||re!==null&&je===re.alternate)break t;je=Ss(je),re=Ss(re)}je=null}else je=null;Be!==null&&hh(ye,_e,Be,je,!1),Xe!==null&&tn!==null&&hh(ye,tn,Xe,je,!0)}}e:{if(_e=fe?Ms(fe):window,Be=_e.nodeName&&_e.nodeName.toLowerCase(),Be==="select"||Be==="input"&&_e.type==="file")var Qe=P0;else if(qf(_e))if(jf)Qe=I0;else{Qe=N0;var tt=L0}else(Be=_e.nodeName)&&Be.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Qe=D0);if(Qe&&(Qe=Qe(n,fe))){Yf(ye,Qe,a,xe);break e}tt&&tt(n,_e,fe),n==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&Zt(_e,"number",_e.value)}switch(tt=fe?Ms(fe):window,n){case"focusin":(qf(tt)||tt.contentEditable==="true")&&(_s=tt,Sc=fe,Ta=null);break;case"focusout":Ta=Sc=_s=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,nh(ye,a,xe);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":nh(ye,a,xe)}var nt;if(gc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else vs?Wf(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Vf&&a.locale!=="ko"&&(vs||st!=="onCompositionStart"?st==="onCompositionEnd"&&vs&&(nt=Ff()):(pr=xe,uc="value"in pr?pr.value:pr.textContent,vs=!0)),tt=To(fe,st),0<tt.length&&(st=new Bf(st,n,null,a,xe),ye.push({event:st,listeners:tt}),nt?st.data=nt:(nt=Xf(a),nt!==null&&(st.data=nt)))),(nt=T0?A0(n,a):b0(n,a))&&(fe=To(fe,"onBeforeInput"),0<fe.length&&(xe=new Bf("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:fe}),xe.data=nt))}dh(ye,i)})}function Ra(n,i,a){return{instance:n,listener:i,currentTarget:a}}function To(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=At(n,a),m!=null&&c.unshift(Ra(n,m,d)),m=At(n,i),m!=null&&c.push(Ra(n,m,d))),n=n.return}return c}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hh(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var F=a,V=F.alternate,fe=F.stateNode;if(V!==null&&V===c)break;F.tag===5&&fe!==null&&(F=fe,d?(V=At(a,m),V!=null&&T.unshift(Ra(a,V,F))):d||(V=At(a,m),V!=null&&T.push(Ra(a,V,F)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var V0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function ph(n){return(typeof n=="string"?n:""+n).replace(V0,`
`).replace(H0,"")}function Ao(n,i,a){if(i=ph(i),ph(n)!==i&&a)throw Error(t(425))}function bo(){}var bc=null,Rc=null;function Cc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(n){return mh.resolve(null).then(n).catch(X0)}:Pc;function X0(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),_a(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);_a(i)}function gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Li="__reactFiber$"+ys,Ca="__reactProps$"+ys,Xi="__reactContainer$"+ys,Nc="__reactEvents$"+ys,q0="__reactListeners$"+ys,Y0="__reactHandles$"+ys;function Hr(n){var i=n[Li];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Xi]||a[Li]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=gh(n);n!==null;){if(a=n[Li])return a;n=gh(n)}return i}n=a,a=n.parentNode}return null}function Pa(n){return n=n[Li]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ro(n){return n[Ca]||null}var Dc=[],Es=-1;function vr(n){return{current:n}}function Vt(n){0>Es||(n.current=Dc[Es],Dc[Es]=null,Es--)}function Bt(n,i){Es++,Dc[Es]=n.current,n.current=i}var _r={},Tn=vr(_r),Bn=vr(!1),Gr=_r;function ws(n,i){var a=n.type.contextTypes;if(!a)return _r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function zn(n){return n=n.childContextTypes,n!=null}function Co(){Vt(Bn),Vt(Tn)}function vh(n,i,a){if(Tn.current!==_r)throw Error(t(168));Bt(Tn,i),Bt(Bn,a)}function _h(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,oe(n)||"Unknown",d));return Z({},a,c)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Gr=Tn.current,Bt(Tn,n),Bt(Bn,Bn.current),!0}function xh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=_h(n,i,Gr),c.__reactInternalMemoizedMergedChildContext=n,Vt(Bn),Vt(Tn),Bt(Tn,n)):Vt(Bn),Bt(Bn,a)}var qi=null,Lo=!1,Ic=!1;function Sh(n){qi===null?qi=[n]:qi.push(n)}function j0(n){Lo=!0,Sh(n)}function xr(){if(!Ic&&qi!==null){Ic=!0;var n=0,i=ht;try{var a=qi;for(ht=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}qi=null,Lo=!1}catch(d){throw qi!==null&&(qi=qi.slice(n+1)),Vr(fa,xr),d}finally{ht=i,Ic=!1}}return null}var Ts=[],As=0,No=null,Do=0,ii=[],ri=0,Wr=null,Yi=1,ji="";function Xr(n,i){Ts[As++]=Do,Ts[As++]=No,No=n,Do=i}function yh(n,i,a){ii[ri++]=Yi,ii[ri++]=ji,ii[ri++]=Wr,Wr=n;var c=Yi;n=ji;var d=32-Le(c)-1;c&=~(1<<d),a+=1;var m=32-Le(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Yi=1<<32-Le(i)+d|a<<d|c,ji=m+n}else Yi=1<<m|a<<d|c,ji=n}function Uc(n){n.return!==null&&(Xr(n,1),yh(n,1,0))}function Fc(n){for(;n===No;)No=Ts[--As],Ts[As]=null,Do=Ts[--As],Ts[As]=null;for(;n===Wr;)Wr=ii[--ri],ii[ri]=null,ji=ii[--ri],ii[ri]=null,Yi=ii[--ri],ii[ri]=null}var jn=null,Kn=null,Xt=!1,gi=null;function Mh(n,i){var a=li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Eh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,jn=n,Kn=gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,jn=n,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wr!==null?{id:Yi,overflow:ji}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=li(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,jn=n,Kn=null,!0):!1;default:return!1}}function Oc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kc(n){if(Xt){var i=Kn;if(i){var a=i;if(!Eh(n,i)){if(Oc(n))throw Error(t(418));i=gr(a.nextSibling);var c=jn;i&&Eh(n,i)?Mh(c,a):(n.flags=n.flags&-4097|2,Xt=!1,jn=n)}}else{if(Oc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,jn=n}}}function wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Io(n){if(n!==jn)return!1;if(!Xt)return wh(n),Xt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Cc(n.type,n.memoizedProps)),i&&(i=Kn)){if(Oc(n))throw Th(),Error(t(418));for(;i;)Mh(n,i),i=gr(i.nextSibling)}if(wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Kn=gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Kn=null}}else Kn=jn?gr(n.stateNode.nextSibling):null;return!0}function Th(){for(var n=Kn;n;)n=gr(n.nextSibling)}function bs(){Kn=jn=null,Xt=!1}function Bc(n){gi===null?gi=[n]:gi.push(n)}var K0=C.ReactCurrentBatchConfig;function La(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var F=d.refs;T===null?delete F[m]:F[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Uo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ah(n){var i=n._init;return i(n._payload)}function bh(n){function i(re,K){if(n){var le=re.deletions;le===null?(re.deletions=[K],re.flags|=16):le.push(K)}}function a(re,K){if(!n)return null;for(;K!==null;)i(re,K),K=K.sibling;return null}function c(re,K){for(re=new Map;K!==null;)K.key!==null?re.set(K.key,K):re.set(K.index,K),K=K.sibling;return re}function d(re,K){return re=br(re,K),re.index=0,re.sibling=null,re}function m(re,K,le){return re.index=le,n?(le=re.alternate,le!==null?(le=le.index,le<K?(re.flags|=2,K):le):(re.flags|=2,K)):(re.flags|=1048576,K)}function T(re){return n&&re.alternate===null&&(re.flags|=2),re}function F(re,K,le,we){return K===null||K.tag!==6?(K=Pu(le,re.mode,we),K.return=re,K):(K=d(K,le),K.return=re,K)}function V(re,K,le,we){var Qe=le.type;return Qe===U?xe(re,K,le.props.children,we,le.key):K!==null&&(K.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===se&&Ah(Qe)===K.type)?(we=d(K,le.props),we.ref=La(re,K,le),we.return=re,we):(we=sl(le.type,le.key,le.props,null,re.mode,we),we.ref=La(re,K,le),we.return=re,we)}function fe(re,K,le,we){return K===null||K.tag!==4||K.stateNode.containerInfo!==le.containerInfo||K.stateNode.implementation!==le.implementation?(K=Lu(le,re.mode,we),K.return=re,K):(K=d(K,le.children||[]),K.return=re,K)}function xe(re,K,le,we,Qe){return K===null||K.tag!==7?(K=Qr(le,re.mode,we,Qe),K.return=re,K):(K=d(K,le),K.return=re,K)}function ye(re,K,le){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Pu(""+K,re.mode,le),K.return=re,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case P:return le=sl(K.type,K.key,K.props,null,re.mode,le),le.ref=La(re,null,K),le.return=re,le;case L:return K=Lu(K,re.mode,le),K.return=re,K;case se:var we=K._init;return ye(re,we(K._payload),le)}if(nn(K)||$(K))return K=Qr(K,re.mode,le,null),K.return=re,K;Uo(re,K)}return null}function _e(re,K,le,we){var Qe=K!==null?K.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return Qe!==null?null:F(re,K,""+le,we);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case P:return le.key===Qe?V(re,K,le,we):null;case L:return le.key===Qe?fe(re,K,le,we):null;case se:return Qe=le._init,_e(re,K,Qe(le._payload),we)}if(nn(le)||$(le))return Qe!==null?null:xe(re,K,le,we,null);Uo(re,le)}return null}function Be(re,K,le,we,Qe){if(typeof we=="string"&&we!==""||typeof we=="number")return re=re.get(le)||null,F(K,re,""+we,Qe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case P:return re=re.get(we.key===null?le:we.key)||null,V(K,re,we,Qe);case L:return re=re.get(we.key===null?le:we.key)||null,fe(K,re,we,Qe);case se:var tt=we._init;return Be(re,K,le,tt(we._payload),Qe)}if(nn(we)||$(we))return re=re.get(le)||null,xe(K,re,we,Qe,null);Uo(K,we)}return null}function Xe(re,K,le,we){for(var Qe=null,tt=null,nt=K,st=K=0,vn=null;nt!==null&&st<le.length;st++){nt.index>st?(vn=nt,nt=null):vn=nt.sibling;var Rt=_e(re,nt,le[st],we);if(Rt===null){nt===null&&(nt=vn);break}n&&nt&&Rt.alternate===null&&i(re,nt),K=m(Rt,K,st),tt===null?Qe=Rt:tt.sibling=Rt,tt=Rt,nt=vn}if(st===le.length)return a(re,nt),Xt&&Xr(re,st),Qe;if(nt===null){for(;st<le.length;st++)nt=ye(re,le[st],we),nt!==null&&(K=m(nt,K,st),tt===null?Qe=nt:tt.sibling=nt,tt=nt);return Xt&&Xr(re,st),Qe}for(nt=c(re,nt);st<le.length;st++)vn=Be(nt,re,st,le[st],we),vn!==null&&(n&&vn.alternate!==null&&nt.delete(vn.key===null?st:vn.key),K=m(vn,K,st),tt===null?Qe=vn:tt.sibling=vn,tt=vn);return n&&nt.forEach(function(Rr){return i(re,Rr)}),Xt&&Xr(re,st),Qe}function je(re,K,le,we){var Qe=$(le);if(typeof Qe!="function")throw Error(t(150));if(le=Qe.call(le),le==null)throw Error(t(151));for(var tt=Qe=null,nt=K,st=K=0,vn=null,Rt=le.next();nt!==null&&!Rt.done;st++,Rt=le.next()){nt.index>st?(vn=nt,nt=null):vn=nt.sibling;var Rr=_e(re,nt,Rt.value,we);if(Rr===null){nt===null&&(nt=vn);break}n&&nt&&Rr.alternate===null&&i(re,nt),K=m(Rr,K,st),tt===null?Qe=Rr:tt.sibling=Rr,tt=Rr,nt=vn}if(Rt.done)return a(re,nt),Xt&&Xr(re,st),Qe;if(nt===null){for(;!Rt.done;st++,Rt=le.next())Rt=ye(re,Rt.value,we),Rt!==null&&(K=m(Rt,K,st),tt===null?Qe=Rt:tt.sibling=Rt,tt=Rt);return Xt&&Xr(re,st),Qe}for(nt=c(re,nt);!Rt.done;st++,Rt=le.next())Rt=Be(nt,re,st,Rt.value,we),Rt!==null&&(n&&Rt.alternate!==null&&nt.delete(Rt.key===null?st:Rt.key),K=m(Rt,K,st),tt===null?Qe=Rt:tt.sibling=Rt,tt=Rt);return n&&nt.forEach(function(Rv){return i(re,Rv)}),Xt&&Xr(re,st),Qe}function tn(re,K,le,we){if(typeof le=="object"&&le!==null&&le.type===U&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case P:e:{for(var Qe=le.key,tt=K;tt!==null;){if(tt.key===Qe){if(Qe=le.type,Qe===U){if(tt.tag===7){a(re,tt.sibling),K=d(tt,le.props.children),K.return=re,re=K;break e}}else if(tt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===se&&Ah(Qe)===tt.type){a(re,tt.sibling),K=d(tt,le.props),K.ref=La(re,tt,le),K.return=re,re=K;break e}a(re,tt);break}else i(re,tt);tt=tt.sibling}le.type===U?(K=Qr(le.props.children,re.mode,we,le.key),K.return=re,re=K):(we=sl(le.type,le.key,le.props,null,re.mode,we),we.ref=La(re,K,le),we.return=re,re=we)}return T(re);case L:e:{for(tt=le.key;K!==null;){if(K.key===tt)if(K.tag===4&&K.stateNode.containerInfo===le.containerInfo&&K.stateNode.implementation===le.implementation){a(re,K.sibling),K=d(K,le.children||[]),K.return=re,re=K;break e}else{a(re,K);break}else i(re,K);K=K.sibling}K=Lu(le,re.mode,we),K.return=re,re=K}return T(re);case se:return tt=le._init,tn(re,K,tt(le._payload),we)}if(nn(le))return Xe(re,K,le,we);if($(le))return je(re,K,le,we);Uo(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,K!==null&&K.tag===6?(a(re,K.sibling),K=d(K,le),K.return=re,re=K):(a(re,K),K=Pu(le,re.mode,we),K.return=re,re=K),T(re)):a(re,K)}return tn}var Rs=bh(!0),Rh=bh(!1),Fo=vr(null),Oo=null,Cs=null,zc=null;function Vc(){zc=Cs=Oo=null}function Hc(n){var i=Fo.current;Vt(Fo),n._currentValue=i}function Gc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ps(n,i){Oo=n,zc=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(zc!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Oo===null)throw Error(t(308));Cs=n,Oo.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var qr=null;function Wc(n){qr===null?qr=[n]:qr.push(n)}function Ch(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Wc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ki(n,c)}function Ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Sr=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function $i(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ki(n,a)}return d=c.interleaved,d===null?(i.next=i,Wc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ki(n,a)}function ko(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,wn(n,a)}}function Lh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Bo(n,i,a,c){var d=n.updateQueue;Sr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var V=F,fe=V.next;V.next=null,T===null?m=fe:T.next=fe,T=V;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==T&&(F===null?xe.firstBaseUpdate=fe:F.next=fe,xe.lastBaseUpdate=V))}if(m!==null){var ye=d.baseState;T=0,xe=fe=V=null,F=m;do{var _e=F.lane,Be=F.eventTime;if((c&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=n,je=F;switch(_e=i,Be=a,je.tag){case 1:if(Xe=je.payload,typeof Xe=="function"){ye=Xe.call(Be,ye,_e);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=je.payload,_e=typeof Xe=="function"?Xe.call(Be,ye,_e):Xe,_e==null)break e;ye=Z({},ye,_e);break e;case 2:Sr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[F]:_e.push(F))}else Be={eventTime:Be,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(fe=xe=Be,V=ye):xe=xe.next=Be,T|=_e;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(V=ye),d.baseState=V,d.firstBaseUpdate=fe,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Kr|=T,n.lanes=T,n.memoizedState=ye}}function Nh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Na={},Ni=vr(Na),Da=vr(Na),Ia=vr(Na);function Yr(n){if(n===Na)throw Error(t(174));return n}function qc(n,i){switch(Bt(Ia,i),Bt(Da,n),Bt(Ni,Na),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Vt(Ni),Bt(Ni,i)}function Ls(){Vt(Ni),Vt(Da),Vt(Ia)}function Dh(n){Yr(Ia.current);var i=Yr(Ni.current),a=M(i,n.type);i!==a&&(Bt(Da,n),Bt(Ni,a))}function Yc(n){Da.current===n&&(Vt(Ni),Vt(Da))}var Yt=vr(0);function zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var jc=[];function Kc(){for(var n=0;n<jc.length;n++)jc[n]._workInProgressVersionPrimary=null;jc.length=0}var Vo=C.ReactCurrentDispatcher,$c=C.ReactCurrentBatchConfig,jr=0,jt=null,un=null,mn=null,Ho=!1,Ua=!1,Fa=0,$0=0;function An(){throw Error(t(321))}function Zc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function Jc(n,i,a,c,d,m){if(jr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Vo.current=n===null||n.memoizedState===null?ev:tv,n=a(c,d),Ua){m=0;do{if(Ua=!1,Fa=0,25<=m)throw Error(t(301));m+=1,mn=un=null,i.updateQueue=null,Vo.current=nv,n=a(c,d)}while(Ua)}if(Vo.current=Xo,i=un!==null&&un.next!==null,jr=0,mn=un=jt=null,Ho=!1,i)throw Error(t(300));return n}function Qc(){var n=Fa!==0;return Fa=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?jt.memoizedState=mn=n:mn=mn.next=n,mn}function ai(){if(un===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var i=mn===null?jt.memoizedState:mn.next;if(i!==null)mn=i,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},mn===null?jt.memoizedState=mn=n:mn=mn.next=n}return mn}function Oa(n,i){return typeof i=="function"?i(n):i}function eu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=un,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var F=T=null,V=null,fe=m;do{var xe=fe.lane;if((jr&xe)===xe)V!==null&&(V=V.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var ye={lane:xe,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};V===null?(F=V=ye,T=c):V=V.next=ye,jt.lanes|=xe,Kr|=xe}fe=fe.next}while(fe!==null&&fe!==m);V===null?T=c:V.next=F,mi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,jt.lanes|=m,Kr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function tu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);mi(m,i.memoizedState)||(Vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Ih(){}function Uh(n,i){var a=jt,c=ai(),d=i(),m=!mi(c.memoizedState,d);if(m&&(c.memoizedState=d,Vn=!0),c=c.queue,nu(kh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||mn!==null&&mn.memoizedState.tag&1){if(a.flags|=2048,ka(9,Oh.bind(null,a,c,d,i),void 0,null),gn===null)throw Error(t(349));(jr&30)!==0||Fh(a,i,d)}return d}function Fh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Oh(n,i,a,c){i.value=a,i.getSnapshot=c,Bh(i)&&zh(n)}function kh(n,i,a){return a(function(){Bh(i)&&zh(n)})}function Bh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function zh(n){var i=Ki(n,1);i!==null&&Si(i,n,1,-1)}function Vh(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:n},i.queue=n,n=n.dispatch=Q0.bind(null,jt,n),[i.memoizedState,n]}function ka(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Hh(){return ai().memoizedState}function Go(n,i,a,c){var d=Di();jt.flags|=n,d.memoizedState=ka(1|i,a,void 0,c===void 0?null:c)}function Wo(n,i,a,c){var d=ai();c=c===void 0?null:c;var m=void 0;if(un!==null){var T=un.memoizedState;if(m=T.destroy,c!==null&&Zc(c,T.deps)){d.memoizedState=ka(i,a,m,c);return}}jt.flags|=n,d.memoizedState=ka(1|i,a,m,c)}function Gh(n,i){return Go(8390656,8,n,i)}function nu(n,i){return Wo(2048,8,n,i)}function Wh(n,i){return Wo(4,2,n,i)}function Xh(n,i){return Wo(4,4,n,i)}function qh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Yh(n,i,a){return a=a!=null?a.concat([n]):null,Wo(4,4,qh.bind(null,i,n),a)}function iu(){}function jh(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Kh(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function $h(n,i,a){return(jr&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=a):(mi(a,i)||(a=cn(),jt.lanes|=a,Kr|=a,n.baseState=!0),i)}function Z0(n,i){var a=ht;ht=a!==0&&4>a?a:4,n(!0);var c=$c.transition;$c.transition={};try{n(!1),i()}finally{ht=a,$c.transition=c}}function Zh(){return ai().memoizedState}function J0(n,i,a){var c=Tr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Jh(n))Qh(i,a);else if(a=Ch(n,i,a,c),a!==null){var d=In();Si(a,n,c,d),ep(a,i,c)}}function Q0(n,i,a){var c=Tr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jh(n))Qh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,F=m(T,a);if(d.hasEagerState=!0,d.eagerState=F,mi(F,T)){var V=i.interleaved;V===null?(d.next=d,Wc(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}a=Ch(n,i,d,c),a!==null&&(d=In(),Si(a,n,c,d),ep(a,i,c))}}function Jh(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function Qh(n,i){Ua=Ho=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ep(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,wn(n,a)}}var Xo={readContext:si,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},ev={readContext:si,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:Gh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Go(4194308,4,qh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Go(4194308,4,n,i)},useInsertionEffect:function(n,i){return Go(4,2,n,i)},useMemo:function(n,i){var a=Di();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Di();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=J0.bind(null,jt,n),[c.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:Vh,useDebugValue:iu,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=Vh(!1),i=n[0];return n=Z0.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=jt,d=Di();if(Xt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),gn===null)throw Error(t(349));(jr&30)!==0||Fh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Gh(kh.bind(null,c,m,n),[n]),c.flags|=2048,ka(9,Oh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Di(),i=gn.identifierPrefix;if(Xt){var a=ji,c=Yi;a=(c&~(1<<32-Le(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Fa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=$0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},tv={readContext:si,useCallback:jh,useContext:si,useEffect:nu,useImperativeHandle:Yh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:Kh,useReducer:eu,useRef:Hh,useState:function(){return eu(Oa)},useDebugValue:iu,useDeferredValue:function(n){var i=ai();return $h(i,un.memoizedState,n)},useTransition:function(){var n=eu(Oa)[0],i=ai().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1},nv={readContext:si,useCallback:jh,useContext:si,useEffect:nu,useImperativeHandle:Yh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:Kh,useReducer:tu,useRef:Hh,useState:function(){return tu(Oa)},useDebugValue:iu,useDeferredValue:function(n){var i=ai();return un===null?i.memoizedState=n:$h(i,un.memoizedState,n)},useTransition:function(){var n=tu(Oa)[0],i=ai().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=Z({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ru(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Z({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var qo={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=In(),d=Tr(n),m=$i(c,d);m.payload=i,a!=null&&(m.callback=a),i=yr(n,m,d),i!==null&&(Si(i,n,d,c),ko(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=In(),d=Tr(n),m=$i(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=yr(n,m,d),i!==null&&(Si(i,n,d,c),ko(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=In(),c=Tr(n),d=$i(a,c);d.tag=2,i!=null&&(d.callback=i),i=yr(n,d,c),i!==null&&(Si(i,n,c,a),ko(i,n,c))}};function tp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!wa(a,c)||!wa(d,m):!0}function np(n,i,a){var c=!1,d=_r,m=i.contextType;return typeof m=="object"&&m!==null?m=si(m):(d=zn(i)?Gr:Tn.current,c=i.contextTypes,m=(c=c!=null)?ws(n,d):_r),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function ip(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&qo.enqueueReplaceState(i,i.state,null)}function su(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Xc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=si(m):(m=zn(i)?Gr:Tn.current,d.context=ws(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ru(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qo.enqueueReplaceState(d,d.state,null),Bo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,i){try{var a="",c=i;do a+=ze(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function au(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ou(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function rp(n,i,a){a=$i(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Qo||(Qo=!0,Mu=c),ou(n,i)},a}function sp(n,i,a){a=$i(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){ou(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){ou(n,i),typeof c!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function ap(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new iv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=vv.bind(null,n,i,a),i.then(n,n))}function op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=$i(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var rv=C.ReactCurrentOwner,Vn=!1;function Dn(n,i,a,c){i.child=n===null?Rh(i,null,a,c):Rs(i,n.child,a,c)}function cp(n,i,a,c,d){a=a.render;var m=i.ref;return Ps(i,d),c=Jc(n,i,a,c,m,d),a=Qc(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Zi(n,i,d)):(Xt&&a&&Uc(i),i.flags|=1,Dn(n,i,c,d),i.child)}function up(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Cu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,dp(n,i,m,c,d)):(n=sl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:wa,a(T,c)&&n.ref===i.ref)return Zi(n,i,d)}return i.flags|=1,n=br(m,c),n.ref=i.ref,n.return=i,i.child=n}function dp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(wa(m,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,Zi(n,i,d)}return lu(n,i,a,c,d)}function fp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Is,$n),$n|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Is,$n),$n|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Bt(Is,$n),$n|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Bt(Is,$n),$n|=c;return Dn(n,i,d,a),i.child}function hp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function lu(n,i,a,c,d){var m=zn(a)?Gr:Tn.current;return m=ws(i,m),Ps(i,d),a=Jc(n,i,a,c,m,d),c=Qc(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Zi(n,i,d)):(Xt&&c&&Uc(i),i.flags|=1,Dn(n,i,a,d),i.child)}function pp(n,i,a,c,d){if(zn(a)){var m=!0;Po(i)}else m=!1;if(Ps(i,d),i.stateNode===null)jo(n,i),np(i,a,c),su(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,F=i.memoizedProps;T.props=F;var V=T.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=si(fe):(fe=zn(a)?Gr:Tn.current,fe=ws(i,fe));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==c||V!==fe)&&ip(i,T,c,fe),Sr=!1;var _e=i.memoizedState;T.state=_e,Bo(i,c,T,d),V=i.memoizedState,F!==c||_e!==V||Bn.current||Sr?(typeof xe=="function"&&(ru(i,a,xe,c),V=i.memoizedState),(F=Sr||tp(i,a,F,c,_e,V,fe))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),T.props=c,T.state=V,T.context=fe,c=F):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Ph(n,i),F=i.memoizedProps,fe=i.type===i.elementType?F:vi(i.type,F),T.props=fe,ye=i.pendingProps,_e=T.context,V=a.contextType,typeof V=="object"&&V!==null?V=si(V):(V=zn(a)?Gr:Tn.current,V=ws(i,V));var Be=a.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(F!==ye||_e!==V)&&ip(i,T,c,V),Sr=!1,_e=i.memoizedState,T.state=_e,Bo(i,c,T,d);var Xe=i.memoizedState;F!==ye||_e!==Xe||Bn.current||Sr?(typeof Be=="function"&&(ru(i,a,Be,c),Xe=i.memoizedState),(fe=Sr||tp(i,a,fe,c,_e,Xe,V)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Xe,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Xe,V)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),T.props=c,T.state=Xe,T.context=V,c=fe):(typeof T.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return cu(n,i,a,c,m,d)}function cu(n,i,a,c,d,m){hp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&xh(i,a,!1),Zi(n,i,m);c=i.stateNode,rv.current=i;var F=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Rs(i,n.child,null,m),i.child=Rs(i,null,F,m)):Dn(n,i,F,m),i.memoizedState=c.state,d&&xh(i,a,!0),i.child}function mp(n){var i=n.stateNode;i.pendingContext?vh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(n,i.context,!1),qc(n,i.containerInfo)}function gp(n,i,a,c,d){return bs(),Bc(d),i.flags|=256,Dn(n,i,a,c),i.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function du(n){return{baseLanes:n,cachePool:null,transitions:null}}function vp(n,i,a){var c=i.pendingProps,d=Yt.current,m=!1,T=(i.flags&128)!==0,F;if((F=T)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Bt(Yt,d&1),n===null)return kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=al(T,c,0,null),n=Qr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=du(a),i.memoizedState=uu,n):fu(i,T));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return sv(n,i,T,c,F,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,F=d.sibling;var V={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=br(d,V),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?m=br(F,m):(m=Qr(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?du(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=uu,c}return m=n.child,n=m.sibling,c=br(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function fu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Yo(n,i,a,c){return c!==null&&Bc(c),Rs(i,n.child,null,a),n=fu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function sv(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=au(Error(t(422))),Yo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=al({mode:"visible",children:c.children},d,0,null),m=Qr(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Rs(i,n.child,null,T),i.child.memoizedState=du(T),i.memoizedState=uu,m);if((i.mode&1)===0)return Yo(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=au(m,c,void 0),Yo(n,i,T,c)}if(F=(T&n.childLanes)!==0,Vn||F){if(c=gn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ki(n,d),Si(c,n,d,-1))}return Ru(),c=au(Error(t(421))),Yo(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=_v.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Kn=gr(d.nextSibling),jn=i,Xt=!0,gi=null,n!==null&&(ii[ri++]=Yi,ii[ri++]=ji,ii[ri++]=Wr,Yi=n.id,ji=n.overflow,Wr=i),i=fu(i,c.children),i.flags|=4096,i)}function _p(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Gc(n.return,i,a)}function hu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function xp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Dn(n,i,c.children,a),c=Yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_p(n,a,i);else if(n.tag===19)_p(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Bt(Yt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&zo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),hu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&zo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}hu(i,!0,a,null,m);break;case"together":hu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=br(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=br(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function av(n,i,a){switch(i.tag){case 3:mp(i),bs();break;case 5:Dh(i);break;case 1:zn(i.type)&&Po(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Bt(Fo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Bt(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?vp(n,i,a):(Bt(Yt,Yt.current&1),n=Zi(n,i,a),n!==null?n.sibling:null);Bt(Yt,Yt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return xp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Bt(Yt,Yt.current),c)break;return null;case 22:case 23:return i.lanes=0,fp(n,i,a)}return Zi(n,i,a)}var Sp,pu,yp,Mp;Sp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pu=function(){},yp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Yr(Ni.current);var m=null;switch(a){case"input":d=dt(n,d),c=dt(n,c),m=[];break;case"select":d=Z({},d,{value:void 0}),c=Z({},c,{value:void 0}),m=[];break;case"textarea":d=Gt(n,d),c=Gt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bo)}Ke(a,c);var T;a=null;for(fe in d)if(!c.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var F=d[fe];for(T in F)F.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?m||(m=[]):(m=m||[]).push(fe,null));for(fe in c){var V=c[fe];if(F=d?.[fe],c.hasOwnProperty(fe)&&V!==F&&(V!=null||F!=null))if(fe==="style")if(F){for(T in F)!F.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in V)V.hasOwnProperty(T)&&F[T]!==V[T]&&(a||(a={}),a[T]=V[T])}else a||(m||(m=[]),m.push(fe,a)),a=V;else fe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(m=m||[]).push(fe,V)):fe==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(fe,""+V):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(V!=null&&fe==="onScroll"&&zt("scroll",n),m||F===V||(m=[])):(m=m||[]).push(fe,V))}a&&(m=m||[]).push("style",a);var fe=m;(i.updateQueue=fe)&&(i.flags|=4)}},Mp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ba(n,i){if(!Xt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function ov(n,i,a){var c=i.pendingProps;switch(Fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return zn(i.type)&&Co(),bn(i),null;case 3:return c=i.stateNode,Ls(),Vt(Bn),Vt(Tn),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Io(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Tu(gi),gi=null))),pu(n,i),bn(i),null;case 5:Yc(i);var d=Yr(Ia.current);if(a=i.type,n!==null&&i.stateNode!=null)yp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bn(i),null}if(n=Yr(Ni.current),Io(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Li]=i,c[Ca]=m,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(d=0;d<Aa.length;d++)zt(Aa[d],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":xt(c,m),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},zt("invalid",c);break;case"textarea":j(c,m),zt("invalid",c)}Ke(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var F=m[T];T==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&Ao(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Ao(c.textContent,F,n),d=["children",""+F]):o.hasOwnProperty(T)&&F!=null&&T==="onScroll"&&zt("scroll",c)}switch(a){case"input":Fe(c),Ot(c,m,!0);break;case"textarea":Fe(c),Tt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=bo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Li]=i,n[Ca]=c,Sp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Pe(a,c),a){case"dialog":zt("cancel",n),zt("close",n),d=c;break;case"iframe":case"object":case"embed":zt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Aa.length;d++)zt(Aa[d],n);d=c;break;case"source":zt("error",n),d=c;break;case"img":case"image":case"link":zt("error",n),zt("load",n),d=c;break;case"details":zt("toggle",n),d=c;break;case"input":xt(n,c),d=dt(n,c),zt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=Z({},c,{value:void 0}),zt("invalid",n);break;case"textarea":j(n,c),d=Gt(n,c),zt("invalid",n);break;default:d=c}Ke(a,d),F=d;for(m in F)if(F.hasOwnProperty(m)){var V=F[m];m==="style"?ge(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ce(n,V)):m==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&he(n,V):typeof V=="number"&&he(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&zt("scroll",n):V!=null&&H(n,m,V,T))}switch(a){case"input":Fe(n),Ot(n,c,!1);break;case"textarea":Fe(n),Tt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+de(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Lt(n,!!c.multiple,m,!1):c.defaultValue!=null&&Lt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=bo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(n&&i.stateNode!=null)Mp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yr(Ia.current),Yr(Ni.current),Io(i)){if(c=i.stateNode,a=i.memoizedProps,c[Li]=i,(m=c.nodeValue!==a)&&(n=jn,n!==null))switch(n.tag){case 3:Ao(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ao(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Li]=i,i.stateNode=c}return bn(i),null;case 13:if(Vt(Yt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),bs(),i.flags|=98560,m=!1;else if(m=Io(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Li]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),m=!1}else gi!==null&&(Tu(gi),gi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?dn===0&&(dn=3):Ru())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return Ls(),pu(n,i),n===null&&ba(i.stateNode.containerInfo),bn(i),null;case 10:return Hc(i.type._context),bn(i),null;case 17:return zn(i.type)&&Co(),bn(i),null;case 19:if(Vt(Yt),m=i.memoizedState,m===null)return bn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Ba(m,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=zo(n),T!==null){for(i.flags|=128,Ba(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Bt(Yt,Yt.current&1|2),i.child}n=n.sibling}m.tail!==null&&qt()>Us&&(i.flags|=128,c=!0,Ba(m,!1),i.lanes=4194304)}else{if(!c)if(n=zo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ba(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Xt)return bn(i),null}else 2*qt()-m.renderingStartTime>Us&&a!==1073741824&&(i.flags|=128,c=!0,Ba(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,a=Yt.current,Bt(Yt,c?a&1|2:a&1),i):(bn(i),null);case 22:case 23:return bu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?($n&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function lv(n,i){switch(Fc(i),i.tag){case 1:return zn(i.type)&&Co(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ls(),Vt(Bn),Vt(Tn),Kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yc(i),null;case 13:if(Vt(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(Yt),null;case 4:return Ls(),null;case 10:return Hc(i.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var Ko=!1,Rn=!1,cv=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(n,i,c)}else a.current=null}function mu(n,i,a){try{a()}catch(c){Qt(n,i,c)}}var Ep=!1;function uv(n,i){if(bc=mo,n=th(),xc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,F=-1,V=-1,fe=0,xe=0,ye=n,_e=null;t:for(;;){for(var Be;ye!==a||d!==0&&ye.nodeType!==3||(F=T+d),ye!==m||c!==0&&ye.nodeType!==3||(V=T+c),ye.nodeType===3&&(T+=ye.nodeValue.length),(Be=ye.firstChild)!==null;)_e=ye,ye=Be;for(;;){if(ye===n)break t;if(_e===a&&++fe===d&&(F=T),_e===m&&++xe===c&&(V=T),(Be=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Be}a=F===-1||V===-1?null:{start:F,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},mo=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var je=Xe.memoizedProps,tn=Xe.memoizedState,re=i.stateNode,K=re.getSnapshotBeforeUpdate(i.elementType===i.type?je:vi(i.type,je),tn);re.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Qt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return Xe=Ep,Ep=!1,Xe}function za(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&mu(i,a,m)}d=d.next}while(d!==c)}}function $o(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function gu(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function wp(n){var i=n.alternate;i!==null&&(n.alternate=null,wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Li],delete i[Ca],delete i[Nc],delete i[q0],delete i[Y0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Tp(n){return n.tag===5||n.tag===3||n.tag===4}function Ap(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bo));else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}var yn=null,_i=!1;function Mr(n,i,a){for(a=a.child;a!==null;)bp(n,i,a),a=a.sibling}function bp(n,i,a){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 5:Rn||Ds(a,i);case 6:var c=yn,d=_i;yn=null,Mr(n,i,a),yn=c,_i=d,yn!==null&&(_i?(n=yn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(_i?(n=yn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),_a(n)):Lc(yn,a.stateNode));break;case 4:c=yn,d=_i,yn=a.stateNode.containerInfo,_i=!0,Mr(n,i,a),yn=c,_i=d;break;case 0:case 11:case 14:case 15:if(!Rn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&mu(a,i,T),d=d.next}while(d!==c)}Mr(n,i,a);break;case 1:if(!Rn&&(Ds(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){Qt(a,i,F)}Mr(n,i,a);break;case 21:Mr(n,i,a);break;case 22:a.mode&1?(Rn=(c=Rn)||a.memoizedState!==null,Mr(n,i,a),Rn=c):Mr(n,i,a);break;default:Mr(n,i,a)}}function Rp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new cv),i.forEach(function(c){var d=xv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,F=T;e:for(;F!==null;){switch(F.tag){case 5:yn=F.stateNode,_i=!1;break e;case 3:yn=F.stateNode.containerInfo,_i=!0;break e;case 4:yn=F.stateNode.containerInfo,_i=!0;break e}F=F.return}if(yn===null)throw Error(t(160));bp(m,T,d),yn=null,_i=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(fe){Qt(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(i,n),Ii(n),c&4){try{za(3,n,n.return),$o(3,n)}catch(je){Qt(n,n.return,je)}try{za(5,n,n.return)}catch(je){Qt(n,n.return,je)}}break;case 1:xi(i,n),Ii(n),c&512&&a!==null&&Ds(a,a.return);break;case 5:if(xi(i,n),Ii(n),c&512&&a!==null&&Ds(a,a.return),n.flags&32){var d=n.stateNode;try{he(d,"")}catch(je){Qt(n,n.return,je)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&Nt(d,m),Pe(F,T);var fe=Pe(F,m);for(T=0;T<V.length;T+=2){var xe=V[T],ye=V[T+1];xe==="style"?ge(d,ye):xe==="dangerouslySetInnerHTML"?ce(d,ye):xe==="children"?he(d,ye):H(d,xe,ye,fe)}switch(F){case"input":ft(d,m);break;case"textarea":ln(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Be=m.value;Be!=null?Lt(d,!!m.multiple,Be,!1):_e!==!!m.multiple&&(m.defaultValue!=null?Lt(d,!!m.multiple,m.defaultValue,!0):Lt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ca]=m}catch(je){Qt(n,n.return,je)}}break;case 6:if(xi(i,n),Ii(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(je){Qt(n,n.return,je)}}break;case 3:if(xi(i,n),Ii(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{_a(i.containerInfo)}catch(je){Qt(n,n.return,je)}break;case 4:xi(i,n),Ii(n);break;case 13:xi(i,n),Ii(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(yu=qt())),c&4&&Rp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(Rn=(fe=Rn)||xe,xi(i,n),Rn=fe):xi(i,n),Ii(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!xe&&(n.mode&1)!==0)for(Ge=n,xe=n.child;xe!==null;){for(ye=Ge=xe;Ge!==null;){switch(_e=Ge,Be=_e.child,_e.tag){case 0:case 11:case 14:case 15:za(4,_e,_e.return);break;case 1:Ds(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(je){Qt(c,a,je)}}break;case 5:Ds(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Np(ye);continue}}Be!==null?(Be.return=_e,Ge=Be):Np(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,fe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=ye.stateNode,V=ye.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=pe("display",T))}catch(je){Qt(n,n.return,je)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=fe?"":ye.memoizedProps}catch(je){Qt(n,n.return,je)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:xi(i,n),Ii(n),c&4&&Rp(n);break;case 21:break;default:xi(i,n),Ii(n)}}function Ii(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Tp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var m=Ap(n);_u(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,F=Ap(n);vu(n,F,T);break;default:throw Error(t(161))}}catch(V){Qt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function dv(n,i,a){Ge=n,Pp(n)}function Pp(n,i,a){for(var c=(n.mode&1)!==0;Ge!==null;){var d=Ge,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Ko;if(!T){var F=d.alternate,V=F!==null&&F.memoizedState!==null||Rn;F=Ko;var fe=Rn;if(Ko=T,(Rn=V)&&!fe)for(Ge=d;Ge!==null;)T=Ge,V=T.child,T.tag===22&&T.memoizedState!==null?Dp(d):V!==null?(V.return=T,Ge=V):Dp(d);for(;m!==null;)Ge=m,Pp(m),m=m.sibling;Ge=d,Ko=F,Rn=fe}Lp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ge=m):Lp(n)}}function Lp(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||$o(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Rn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Nh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Nh(i,T,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var xe=fe.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&_a(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Rn||i.flags&512&&gu(i)}catch(_e){Qt(i,i.return,_e)}}if(i===n){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Np(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Dp(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$o(4,i)}catch(V){Qt(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(V){Qt(i,d,V)}}var m=i.return;try{gu(i)}catch(V){Qt(i,m,V)}break;case 5:var T=i.return;try{gu(i)}catch(V){Qt(i,T,V)}}}catch(V){Qt(i,i.return,V)}if(i===n){Ge=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Ge=F;break}Ge=i.return}}var fv=Math.ceil,Zo=C.ReactCurrentDispatcher,xu=C.ReactCurrentOwner,oi=C.ReactCurrentBatchConfig,wt=0,gn=null,rn=null,Mn=0,$n=0,Is=vr(0),dn=0,Va=null,Kr=0,Jo=0,Su=0,Ha=null,Hn=null,yu=0,Us=1/0,Ji=null,Qo=!1,Mu=null,Er=null,el=!1,wr=null,tl=0,Ga=0,Eu=null,nl=-1,il=0;function In(){return(wt&6)!==0?qt():nl!==-1?nl:nl=qt()}function Tr(n){return(n.mode&1)===0?1:(wt&2)!==0&&Mn!==0?Mn&-Mn:K0.transition!==null?(il===0&&(il=cn()),il):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Uf(n.type)),n)}function Si(n,i,a,c){if(50<Ga)throw Ga=0,Eu=null,Error(t(185));en(n,a,c),((wt&2)===0||n!==gn)&&(n===gn&&((wt&2)===0&&(Jo|=a),dn===4&&Ar(n,Mn)),Gn(n,c),a===1&&wt===0&&(i.mode&1)===0&&(Us=qt()+500,Lo&&xr()))}function Gn(n,i){var a=n.callbackNode;kt(n,i);var c=St(n,n===gn?Mn:0);if(c===0)a!==null&&da(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&da(a),i===1)n.tag===0?j0(Up.bind(null,n)):Sh(Up.bind(null,n)),W0(function(){(wt&6)===0&&xr()}),a=null;else{switch(di(c)){case 1:a=fa;break;case 4:a=ha;break;case 16:a=A;break;case 536870912:a=ue;break;default:a=A}a=Gp(a,Ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Ip(n,i){if(nl=-1,il=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Fs()&&n.callbackNode!==a)return null;var c=St(n,n===gn?Mn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=rl(n,c);else{i=c;var d=wt;wt|=2;var m=Op();(gn!==n||Mn!==i)&&(Ji=null,Us=qt()+500,Zr(n,i));do try{mv();break}catch(F){Fp(n,F)}while(!0);Vc(),Zo.current=m,wt=d,rn!==null?i=0:(gn=null,Mn=0,i=dn)}if(i!==0){if(i===2&&(d=Pt(n),d!==0&&(c=d,i=wu(n,d))),i===1)throw a=Va,Zr(n,0),Ar(n,c),Gn(n,qt()),a;if(i===6)Ar(n,c);else{if(d=n.current.alternate,(c&30)===0&&!hv(d)&&(i=rl(n,c),i===2&&(m=Pt(n),m!==0&&(c=m,i=wu(n,m))),i===1))throw a=Va,Zr(n,0),Ar(n,c),Gn(n,qt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Jr(n,Hn,Ji);break;case 3:if(Ar(n,c),(c&130023424)===c&&(i=yu+500-qt(),10<i)){if(St(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){In(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Pc(Jr.bind(null,n,Hn,Ji),i);break}Jr(n,Hn,Ji);break;case 4:if(Ar(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Le(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fv(c/1960))-c,10<c){n.timeoutHandle=Pc(Jr.bind(null,n,Hn,Ji),c);break}Jr(n,Hn,Ji);break;case 5:Jr(n,Hn,Ji);break;default:throw Error(t(329))}}}return Gn(n,qt()),n.callbackNode===a?Ip.bind(null,n):null}function wu(n,i){var a=Ha;return n.current.memoizedState.isDehydrated&&(Zr(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Hn,Hn=a,i!==null&&Tu(i)),n}function Tu(n){Hn===null?Hn=n:Hn.push.apply(Hn,n)}function hv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!mi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ar(n,i){for(i&=~Su,i&=~Jo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Le(i),c=1<<a;n[a]=-1,i&=~c}}function Up(n){if((wt&6)!==0)throw Error(t(327));Fs();var i=St(n,0);if((i&1)===0)return Gn(n,qt()),null;var a=rl(n,i);if(n.tag!==0&&a===2){var c=Pt(n);c!==0&&(i=c,a=wu(n,c))}if(a===1)throw a=Va,Zr(n,0),Ar(n,i),Gn(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Jr(n,Hn,Ji),Gn(n,qt()),null}function Au(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(Us=qt()+500,Lo&&xr())}}function $r(n){wr!==null&&wr.tag===0&&(wt&6)===0&&Fs();var i=wt;wt|=1;var a=oi.transition,c=ht;try{if(oi.transition=null,ht=1,n)return n()}finally{ht=c,oi.transition=a,wt=i,(wt&6)===0&&xr()}}function bu(){$n=Is.current,Vt(Is)}function Zr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,G0(a)),rn!==null)for(a=rn.return;a!==null;){var c=a;switch(Fc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Co();break;case 3:Ls(),Vt(Bn),Vt(Tn),Kc();break;case 5:Yc(c);break;case 4:Ls();break;case 13:Vt(Yt);break;case 19:Vt(Yt);break;case 10:Hc(c.type._context);break;case 22:case 23:bu()}a=a.return}if(gn=n,rn=n=br(n.current,null),Mn=$n=i,dn=0,Va=null,Su=Jo=Kr=0,Hn=Ha=null,qr!==null){for(i=0;i<qr.length;i++)if(a=qr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}qr=null}return n}function Fp(n,i){do{var a=rn;try{if(Vc(),Vo.current=Xo,Ho){for(var c=jt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ho=!1}if(jr=0,mn=un=jt=null,Ua=!1,Fa=0,xu.current=null,a===null||a.return===null){dn=1,Va=i,rn=null;break}e:{var m=n,T=a.return,F=a,V=i;if(i=Mn,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var fe=V,xe=F,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=op(T);if(Be!==null){Be.flags&=-257,lp(Be,T,F,m,i),Be.mode&1&&ap(m,fe,i),i=Be,V=fe;var Xe=i.updateQueue;if(Xe===null){var je=new Set;je.add(V),i.updateQueue=je}else Xe.add(V);break e}else{if((i&1)===0){ap(m,fe,i),Ru();break e}V=Error(t(426))}}else if(Xt&&F.mode&1){var tn=op(T);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),lp(tn,T,F,m,i),Bc(Ns(V,F));break e}}m=V=Ns(V,F),dn!==4&&(dn=2),Ha===null?Ha=[m]:Ha.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var re=rp(m,V,i);Lh(m,re);break e;case 1:F=V;var K=m.type,le=m.stateNode;if((m.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(Er===null||!Er.has(le)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=sp(m,F,i);Lh(m,we);break e}}m=m.return}while(m!==null)}Bp(a)}catch(Qe){i=Qe,rn===a&&a!==null&&(rn=a=a.return);continue}break}while(!0)}function Op(){var n=Zo.current;return Zo.current=Xo,n===null?Xo:n}function Ru(){(dn===0||dn===3||dn===2)&&(dn=4),gn===null||(Kr&268435455)===0&&(Jo&268435455)===0||Ar(gn,Mn)}function rl(n,i){var a=wt;wt|=2;var c=Op();(gn!==n||Mn!==i)&&(Ji=null,Zr(n,i));do try{pv();break}catch(d){Fp(n,d)}while(!0);if(Vc(),wt=a,Zo.current=c,rn!==null)throw Error(t(261));return gn=null,Mn=0,dn}function pv(){for(;rn!==null;)kp(rn)}function mv(){for(;rn!==null&&!ho();)kp(rn)}function kp(n){var i=Hp(n.alternate,n,$n);n.memoizedProps=n.pendingProps,i===null?Bp(n):rn=i,xu.current=null}function Bp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ov(a,i,$n),a!==null){rn=a;return}}else{if(a=lv(a,i),a!==null){a.flags&=32767,rn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,rn=null;return}}if(i=i.sibling,i!==null){rn=i;return}rn=i=n}while(i!==null);dn===0&&(dn=5)}function Jr(n,i,a){var c=ht,d=oi.transition;try{oi.transition=null,ht=1,gv(n,i,a,c)}finally{oi.transition=d,ht=c}return null}function gv(n,i,a,c){do Fs();while(wr!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(yt(n,m),n===gn&&(rn=gn=null,Mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,Gp(A,function(){return Fs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=oi.transition,oi.transition=null;var T=ht;ht=1;var F=wt;wt|=4,xu.current=null,uv(n,a),Cp(a,n),F0(Rc),mo=!!bc,Rc=bc=null,n.current=a,dv(a),ac(),wt=F,ht=T,oi.transition=m}else n.current=a;if(el&&(el=!1,wr=n,tl=d),m=n.pendingLanes,m===0&&(Er=null),De(a.stateNode),Gn(n,qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Qo)throw Qo=!1,n=Mu,Mu=null,n;return(tl&1)!==0&&n.tag!==0&&Fs(),m=n.pendingLanes,(m&1)!==0?n===Eu?Ga++:(Ga=0,Eu=n):Ga=0,xr(),null}function Fs(){if(wr!==null){var n=di(tl),i=oi.transition,a=ht;try{if(oi.transition=null,ht=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,tl=0,(wt&6)!==0)throw Error(t(331));var d=wt;for(wt|=4,Ge=n.current;Ge!==null;){var m=Ge,T=m.child;if((Ge.flags&16)!==0){var F=m.deletions;if(F!==null){for(var V=0;V<F.length;V++){var fe=F[V];for(Ge=fe;Ge!==null;){var xe=Ge;switch(xe.tag){case 0:case 11:case 15:za(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,Ge=ye;else for(;Ge!==null;){xe=Ge;var _e=xe.sibling,Be=xe.return;if(wp(xe),xe===fe){Ge=null;break}if(_e!==null){_e.return=Be,Ge=_e;break}Ge=Be}}}var Xe=m.alternate;if(Xe!==null){var je=Xe.child;if(je!==null){Xe.child=null;do{var tn=je.sibling;je.sibling=null,je=tn}while(je!==null)}}Ge=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ge=T;else e:for(;Ge!==null;){if(m=Ge,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:za(9,m,m.return)}var re=m.sibling;if(re!==null){re.return=m.return,Ge=re;break e}Ge=m.return}}var K=n.current;for(Ge=K;Ge!==null;){T=Ge;var le=T.child;if((T.subtreeFlags&2064)!==0&&le!==null)le.return=T,Ge=le;else e:for(T=K;Ge!==null;){if(F=Ge,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:$o(9,F)}}catch(Qe){Qt(F,F.return,Qe)}if(F===T){Ge=null;break e}var we=F.sibling;if(we!==null){we.return=F.return,Ge=we;break e}Ge=F.return}}if(wt=d,xr(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(ie,n)}catch{}c=!0}return c}finally{ht=a,oi.transition=i}}return!1}function zp(n,i,a){i=Ns(a,i),i=rp(n,i,1),n=yr(n,i,1),i=In(),n!==null&&(en(n,1,i),Gn(n,i))}function Qt(n,i,a){if(n.tag===3)zp(n,n,a);else for(;i!==null;){if(i.tag===3){zp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Er===null||!Er.has(c))){n=Ns(a,n),n=sp(i,n,1),i=yr(i,n,1),n=In(),i!==null&&(en(i,1,n),Gn(i,n));break}}i=i.return}}function vv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=In(),n.pingedLanes|=n.suspendedLanes&a,gn===n&&(Mn&a)===a&&(dn===4||dn===3&&(Mn&130023424)===Mn&&500>qt()-yu?Zr(n,0):Su|=a),Gn(n,i)}function Vp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ut,ut<<=1,(ut&130023424)===0&&(ut=4194304)));var a=In();n=Ki(n,i),n!==null&&(en(n,i,a),Gn(n,a))}function _v(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Vp(n,a)}function xv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Vp(n,a)}var Hp;Hp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Vn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,av(n,i,a);Vn=(n.flags&131072)!==0}else Vn=!1,Xt&&(i.flags&1048576)!==0&&yh(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;jo(n,i),n=i.pendingProps;var d=ws(i,Tn.current);Ps(i,a),d=Jc(null,i,c,n,d,a);var m=Qc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,zn(c)?(m=!0,Po(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Xc(i),d.updater=qo,i.stateNode=d,d._reactInternals=i,su(i,c,n,a),i=cu(null,i,c,!0,m,a)):(i.tag=0,Xt&&m&&Uc(i),Dn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(jo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=yv(c),n=vi(c,n),d){case 0:i=lu(null,i,c,n,a);break e;case 1:i=pp(null,i,c,n,a);break e;case 11:i=cp(null,i,c,n,a);break e;case 14:i=up(null,i,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:vi(c,d),lu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:vi(c,d),pp(n,i,c,d,a);case 3:e:{if(mp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Ph(n,i),Bo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ns(Error(t(423)),i),i=gp(n,i,c,a,d);break e}else if(c!==d){d=Ns(Error(t(424)),i),i=gp(n,i,c,a,d);break e}else for(Kn=gr(i.stateNode.containerInfo.firstChild),jn=i,Xt=!0,gi=null,a=Rh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===d){i=Zi(n,i,a);break e}Dn(n,i,c,a)}i=i.child}return i;case 5:return Dh(i),n===null&&kc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Cc(c,d)?T=null:m!==null&&Cc(c,m)&&(i.flags|=32),hp(n,i),Dn(n,i,T,a),i.child;case 6:return n===null&&kc(i),null;case 13:return vp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Rs(i,null,c,a):Dn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:vi(c,d),cp(n,i,c,d,a);case 7:return Dn(n,i,i.pendingProps,a),i.child;case 8:return Dn(n,i,i.pendingProps.children,a),i.child;case 12:return Dn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Bt(Fo,c._currentValue),c._currentValue=T,m!==null)if(mi(m.value,T)){if(m.children===d.children&&!Bn.current){i=Zi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){T=m.child;for(var V=F.firstContext;V!==null;){if(V.context===c){if(m.tag===1){V=$i(-1,a&-a),V.tag=2;var fe=m.updateQueue;if(fe!==null){fe=fe.shared;var xe=fe.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),fe.pending=V}}m.lanes|=a,V=m.alternate,V!==null&&(V.lanes|=a),Gc(m.return,a,i),F.lanes|=a;break}V=V.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,F=T.alternate,F!==null&&(F.lanes|=a),Gc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Dn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ps(i,a),d=si(d),c=c(d),i.flags|=1,Dn(n,i,c,a),i.child;case 14:return c=i.type,d=vi(c,i.pendingProps),d=vi(c.type,d),up(n,i,c,d,a);case 15:return dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:vi(c,d),jo(n,i),i.tag=1,zn(c)?(n=!0,Po(i)):n=!1,Ps(i,a),np(i,c,d),su(i,c,d,a),cu(null,i,c,!0,n,a);case 19:return xp(n,i,a);case 22:return fp(n,i,a)}throw Error(t(156,i.tag))};function Gp(n,i){return Vr(n,i)}function Sv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,a,c){return new Sv(n,i,a,c)}function Cu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yv(n){if(typeof n=="function")return Cu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===Y)return 14}return 2}function br(n,i){var a=n.alternate;return a===null?(a=li(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function sl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Cu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return Qr(a.children,d,m,i);case E:T=8,d|=8;break;case b:return n=li(12,a,i,d|2),n.elementType=b,n.lanes=m,n;case G:return n=li(13,a,i,d),n.elementType=G,n.lanes=m,n;case k:return n=li(19,a,i,d),n.elementType=k,n.lanes=m,n;case ee:return al(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:T=10;break e;case B:T=9;break e;case z:T=11;break e;case Y:T=14;break e;case se:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Qr(n,i,a,c){return n=li(7,n,c,i),n.lanes=a,n}function al(n,i,a,c){return n=li(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function Pu(n,i,a){return n=li(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Mv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oe(0),this.expirationTimes=Oe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Nu(n,i,a,c,d,m,T,F,V){return n=new Mv(n,i,a,F,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=li(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(m),n}function Ev(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Wp(n){if(!n)return _r;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(zn(a))return _h(n,a,i)}return i}function Xp(n,i,a,c,d,m,T,F,V){return n=Nu(a,c,!0,n,d,m,T,F,V),n.context=Wp(null),a=n.current,c=In(),d=Tr(a),m=$i(c,d),m.callback=i??null,yr(a,m,d),n.current.lanes=d,en(n,d,c),Gn(n,c),n}function ol(n,i,a,c){var d=i.current,m=In(),T=Tr(d);return a=Wp(a),i.context===null?i.context=a:i.pendingContext=a,i=$i(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yr(d,i,T),n!==null&&(Si(n,d,T,m),ko(n,d,T)),T}function ll(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function qp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Du(n,i){qp(n,i),(n=n.alternate)&&qp(n,i)}function wv(){return null}var Yp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Iu(n){this._internalRoot=n}cl.prototype.render=Iu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},cl.prototype.unmount=Iu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;$r(function(){ol(null,n,null,null)}),i[Xi]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=fi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<hr.length&&i!==0&&i<hr[a].priority;a++);hr.splice(a,0,n),a===0&&Df(n)}};function Uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function Tv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var fe=ll(T);m.call(fe)}}var T=Xp(i,c,n,0,null,!1,!1,"",jp);return n._reactRootContainer=T,n[Xi]=T.current,ba(n.nodeType===8?n.parentNode:n),$r(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var fe=ll(V);F.call(fe)}}var V=Nu(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=V,n[Xi]=V.current,ba(n.nodeType===8?n.parentNode:n),$r(function(){ol(i,V,a,c)}),V}function dl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var F=d;d=function(){var V=ll(T);F.call(V)}}ol(i,T,n,d)}else T=Tv(a,i,n,d,c);return ll(T)}Wi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ve(i.pendingLanes);a!==0&&(wn(i,a|1),Gn(i,qt()),(wt&6)===0&&(Us=qt()+500,xr()))}break;case 13:$r(function(){var c=Ki(n,1);if(c!==null){var d=In();Si(c,n,1,d)}}),Du(n,1)}},bt=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var a=In();Si(i,n,134217728,a)}Du(n,134217728)}},Wt=function(n){if(n.tag===13){var i=Tr(n),a=Ki(n,i);if(a!==null){var c=In();Si(a,n,i,c)}Du(n,i)}},fi=function(){return ht},Dt=function(n,i){var a=ht;try{return ht=n,i()}finally{ht=a}},et=function(n,i,a){switch(i){case"input":if(ft(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ro(c);if(!d)throw Error(t(90));at(c),ft(c,d)}}}break;case"textarea":ln(n,a);break;case"select":i=a.value,i!=null&&Lt(n,!!a.multiple,i,!1)}},Ue=Au,ve=$r;var Av={usingClientEntryPoint:!1,Events:[Pa,Ms,Ro,me,Re,Au]},Wa={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bv={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zr(n),n===null?null:n.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{ie=fl.inject(bv),te=fl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av,Wn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uu(i))throw Error(t(200));return Ev(n,i,null,a)},Wn.createRoot=function(n,i){if(!Uu(n))throw Error(t(299));var a=!1,c="",d=Yp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Nu(n,1,!1,null,null,a,!1,c,d),n[Xi]=i.current,ba(n.nodeType===8?n.parentNode:n),new Iu(i)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zr(i),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return $r(n)},Wn.hydrate=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!0,a)},Wn.hydrateRoot=function(n,i,a){if(!Uu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=Yp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Xp(i,null,n,1,a??null,d,!1,m,T),n[Xi]=i.current,ba(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new cl(i)},Wn.render=function(n,i,a){if(!ul(i))throw Error(t(200));return dl(null,n,i,!1,a)},Wn.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?($r(function(){dl(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Au,Wn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ul(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return dl(n,i,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var nm;function Uv(){if(nm)return ku.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ku.exports=Iv(),ku.exports}var im;function Fv(){if(im)return hl;im=1;var s=Uv();return hl.createRoot=s.createRoot,hl.hydrateRoot=s.hydrateRoot,hl}var Ov=Fv();const ff="186",kv=0,rm=1,Bv=2,kl=1,sg=2,Ja=3,os=0,On=1,Ai=2,or=0,eo=1,sm=2,am=3,om=4,zv=5,Zs=100,Vv=101,Hv=102,Gv=103,Wv=104,Xv=200,qv=201,Yv=202,jv=203,ag=204,og=205,Kv=206,$v=207,Zv=208,Jv=209,Qv=210,e_=211,t_=212,n_=213,i_=214,xd=0,Sd=1,yd=2,io=3,Md=4,Ed=5,wd=6,Td=7,lg=0,r_=1,s_=2,Vi=0,cg=1,ug=2,dg=3,hf=4,fg=5,hg=6,pg=7,mg=300,ls=301,na=302,Vu=303,Hu=304,Jl=306,Ad=1e3,ar=1001,bd=1002,En=1003,a_=1004,pl=1005,Ln=1006,Gu=1007,ss=1008,ei=1009,gg=1010,vg=1011,ro=1012,pf=1013,Hi=1014,ki=1015,Gi=1016,mf=1017,gf=1018,so=1020,_g=35902,xg=35899,Sg=1021,yg=1022,Ri=1023,ur=1026,as=1027,Mg=1028,vf=1029,cs=1030,_f=1031,xf=1033,Bl=33776,zl=33777,Vl=33778,Hl=33779,Rd=35840,Cd=35841,Pd=35842,Ld=35843,Nd=36196,Dd=37492,Id=37496,Ud=37488,Fd=37489,Wl=37490,Od=37491,kd=37808,Bd=37809,zd=37810,Vd=37811,Hd=37812,Gd=37813,Wd=37814,Xd=37815,qd=37816,Yd=37817,jd=37818,Kd=37819,$d=37820,Zd=37821,Jd=36492,Qd=36494,ef=36495,tf=36283,nf=36284,Xl=36285,rf=36286,o_=3200,sf=0,l_=1,Ur="",ui="srgb",ql="srgb-linear",Yl="linear",It="srgb",Wu=7680,c_=519,u_=512,d_=513,f_=514,Sf=515,h_=516,p_=517,yf=518,m_=519,g_=35044,lm="300 es",Bi=2e3,ao=2001;function v_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function __(){const s=jl("canvas");return s.style.display="block",s}const cm={};function um(...s){const e="THREE."+s.shift();console.log(e,...s)}function Eg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=Eg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=Eg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ea(...s){const e=s.join(" ");e in cm||(cm[e]=!0,rt(...s))}function x_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const S_={[xd]:Sd,[yd]:wd,[Md]:Td,[io]:Ed,[Sd]:xd,[wd]:yd,[Td]:Md,[Ed]:io};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dm=1234567;const to=Math.PI/180,ia=180/Math.PI;function sa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function Mf(s,e){return(s%e+e)%e}function y_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function M_(s,e,t){return s!==e?(t-s)/(e-s):0}function no(s,e,t){return(1-t)*s+t*e}function E_(s,e,t,r){return no(s,e,1-Math.exp(-t*r))}function w_(s,e=1){return e-Math.abs(Mf(s,e*2)-e)}function T_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function A_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function b_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function R_(s,e){return s+Math.random()*(e-s)}function C_(s){return s*(.5-Math.random())}function P_(s){s!==void 0&&(dm=s);let e=dm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L_(s){return s*to}function N_(s){return s*ia}function D_(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function I_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function U_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function F_(s,e,t,r,o){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),p=l((e+r)/2),v=u((e+r)/2),_=l((e-r)/2),g=u((e-r)/2),y=l((r-e)/2),w=u((r-e)/2);switch(o){case"XYX":s.set(f*v,h*_,h*g,f*p);break;case"YZY":s.set(h*g,f*v,h*_,f*p);break;case"ZXZ":s.set(h*_,h*g,f*v,f*p);break;case"XZX":s.set(f*v,h*w,h*y,f*p);break;case"YXY":s.set(h*y,f*v,h*w,f*p);break;case"ZYZ":s.set(h*w,h*y,f*v,f*p);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Js(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const af={DEG2RAD:to,RAD2DEG:ia,generateUUID:sa,clamp:vt,euclideanModulo:Mf,mapLinear:y_,inverseLerp:M_,lerp:no,damp:E_,pingpong:w_,smoothstep:T_,smootherstep:A_,randInt:b_,randFloat:R_,randFloatSpread:C_,seededRandom:P_,degToRad:L_,radToDeg:N_,isPowerOfTwo:D_,ceilPowerOfTwo:I_,floorPowerOfTwo:U_,setQuaternionFromProperEuler:F_,normalize:Un,denormalize:Js},bf=class bf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bf.prototype.isVector2=!0;let _t=bf;class aa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3],g=l[u+0],y=l[u+1],w=l[u+2],R=l[u+3];if(_!==R||h!==g||p!==y||v!==w){let S=h*g+p*y+v*w+_*R;S<0&&(g=-g,y=-y,w=-w,R=-R,S=-S);let x=1-f;if(S<.9995){const I=Math.acos(S),H=Math.sin(I);x=Math.sin(x*I)/H,f=Math.sin(f*I)/H,h=h*x+g*f,p=p*x+y*f,v=v*x+w*f,_=_*x+R*f}else{h=h*x+g*f,p=p*x+y*f,v=v*x+w*f,_=_*x+R*f;const I=1/Math.sqrt(h*h+p*p+v*v+_*_);h*=I,p*=I,v*=I,_*=I}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],_=l[u],g=l[u+1],y=l[u+2],w=l[u+3];return e[t]=f*w+v*_+h*y-p*g,e[t+1]=h*w+v*g+p*_-f*y,e[t+2]=p*w+v*y+f*g-h*_,e[t+3]=v*w-f*_-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),_=f(l/2),g=h(r/2),y=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*v*_+p*y*w,this._y=p*y*_-g*v*w,this._z=p*v*w+g*y*_,this._w=p*v*_-g*y*w;break;case"YXZ":this._x=g*v*_+p*y*w,this._y=p*y*_-g*v*w,this._z=p*v*w-g*y*_,this._w=p*v*_+g*y*w;break;case"ZXY":this._x=g*v*_-p*y*w,this._y=p*y*_+g*v*w,this._z=p*v*w+g*y*_,this._w=p*v*_-g*y*w;break;case"ZYX":this._x=g*v*_-p*y*w,this._y=p*y*_+g*v*w,this._z=p*v*w-g*y*_,this._w=p*v*_+g*y*w;break;case"YZX":this._x=g*v*_+p*y*w,this._y=p*y*_+g*v*w,this._z=p*v*w-g*y*_,this._w=p*v*_-g*y*w;break;case"XZY":this._x=g*v*_-p*y*w,this._y=p*y*_-g*v*w,this._z=p*v*w+g*y*_,this._w=p*v*_+g*y*w;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],_=t[10],g=r+f+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-h)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>f&&r>_){const y=2*Math.sqrt(1+r-f-_);this._w=(v-h)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(f>_){const y=2*Math.sqrt(1+f-r-_);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(h+v)/y}else{const y=2*Math.sqrt(1+_-r-f);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(h+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rf=class Rf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),_=2*(l*r-u*t);return this.x=t+h*p+u*_-f*v,this.y=r+h*v+f*p-l*_,this.z=o+h*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rf.prototype.isVector3=!0;let ne=Rf;const Xu=new ne,fm=new aa,Cf=class Cf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],_=r[7],g=r[2],y=r[5],w=r[8],R=o[0],S=o[3],x=o[6],I=o[1],H=o[4],C=o[7],P=o[2],L=o[5],U=o[8];return l[0]=u*R+f*I+h*P,l[3]=u*S+f*H+h*L,l[6]=u*x+f*C+h*U,l[1]=p*R+v*I+_*P,l[4]=p*S+v*H+_*L,l[7]=p*x+v*C+_*U,l[2]=g*R+y*I+w*P,l[5]=g*S+y*H+w*L,l[8]=g*x+y*C+w*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=v*u-f*p,g=f*h-v*l,y=p*l-u*h,w=t*_+r*g+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=_*R,e[1]=(o*p-v*r)*R,e[2]=(f*r-o*u)*R,e[3]=g*R,e[4]=(v*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=y*R,e[7]=(r*h-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return ea("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(e,t)),this}rotate(e){return ea("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return ea("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cf.prototype.isMatrix3=!0;let lt=Cf;const qu=new lt,hm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pm=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O_(){const s={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=ta(o.r),o.g=ta(o.g),o.b=ta(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?Yl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ql]:{primaries:e,whitePoint:r,transfer:Yl,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:It,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Mt=O_();function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class k_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Os===void 0&&(Os=jl("canvas")),Os.width=e.width,Os.height=e.height;const o=Os.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Os}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=lr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class Ef{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Yu(o[u].image)):l.push(Yu(o[u]))}else l=Yu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Yu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?k_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let z_=0;const ju=new ne;class kn extends fs{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,r=ar,o=ar,l=Ln,u=ss,f=Ri,h=ei,p=kn.DEFAULT_ANISOTROPY,v=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=sa(),this.name="",this.source=new Ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=mg;kn.DEFAULT_ANISOTROPY=1;const Pf=class Pf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],_=h[8],g=h[1],y=h[5],w=h[9],R=h[2],S=h[6],x=h[10];if(Math.abs(v-g)<.01&&Math.abs(_-R)<.01&&Math.abs(w-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+R)<.1&&Math.abs(w+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const H=(p+1)/2,C=(y+1)/2,P=(x+1)/2,L=(v+g)/4,U=(_+R)/4,E=(w+S)/4;return H>C&&H>P?H<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(H),o=L/r,l=U/r):C>P?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=L/o,l=E/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=U/l,o=E/l),this.set(r,o,l,t),this}let I=Math.sqrt((S-w)*(S-w)+(_-R)*(_-R)+(g-v)*(g-v));return Math.abs(I)<.001&&(I=1),this.x=(S-w)/I,this.y=(_-R)/I,this.z=(g-v)/I,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pf.prototype.isVector4=!0;let Kt=Pf;class V_ extends fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new kn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ef(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends V_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class wg extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=En,this.minFilter=En,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H_ extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=En,this.minFilter=En,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Zl=class Zl{constructor(e,t,r,o,l,u,f,h,p,v,_,g,y,w,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,_,g,y,w,R,S)}set(e,t,r,o,l,u,f,h,p,v,_,g,y,w,R,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=p,x[6]=v,x[10]=_,x[14]=g,x[3]=y,x[7]=w,x[11]=R,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,y=u*_,w=f*v,R=f*_;t[0]=h*v,t[4]=-h*_,t[8]=p,t[1]=y+w*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=w+y*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,y=h*_,w=p*v,R=p*_;t[0]=g+R*f,t[4]=w*f-y,t[8]=u*p,t[1]=u*_,t[5]=u*v,t[9]=-f,t[2]=y*f-w,t[6]=R+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,y=h*_,w=p*v,R=p*_;t[0]=g-R*f,t[4]=-u*_,t[8]=w+y*f,t[1]=y+w*f,t[5]=u*v,t[9]=R-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,y=u*_,w=f*v,R=f*_;t[0]=h*v,t[4]=w*p-y,t[8]=g*p+R,t[1]=h*_,t[5]=R*p+g,t[9]=y*p-w,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,y=u*p,w=f*h,R=f*p;t[0]=h*v,t[4]=R-g*_,t[8]=w*_+y,t[1]=_,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=y*_+w,t[10]=g-R*_}else if(e.order==="XZY"){const g=u*h,y=u*p,w=f*h,R=f*p;t[0]=h*v,t[4]=-_,t[8]=p*v,t[1]=g*_+R,t[5]=u*v,t[9]=y*_-w,t[2]=w*_-y,t[6]=f*v,t[10]=R*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,W_)}lookAt(e,t,r){const o=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Cr.crossVectors(r,Zn),Cr.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Cr.crossVectors(r,Zn)),Cr.normalize(),ml.crossVectors(Zn,Cr),o[0]=Cr.x,o[4]=ml.x,o[8]=Zn.x,o[1]=Cr.y,o[5]=ml.y,o[9]=Zn.y,o[2]=Cr.z,o[6]=ml.z,o[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],_=r[5],g=r[9],y=r[13],w=r[2],R=r[6],S=r[10],x=r[14],I=r[3],H=r[7],C=r[11],P=r[15],L=o[0],U=o[4],E=o[8],b=o[12],O=o[1],B=o[5],z=o[9],G=o[13],k=o[2],Y=o[6],se=o[10],ee=o[14],J=o[3],$=o[7],Z=o[11],N=o[15];return l[0]=u*L+f*O+h*k+p*J,l[4]=u*U+f*B+h*Y+p*$,l[8]=u*E+f*z+h*se+p*Z,l[12]=u*b+f*G+h*ee+p*N,l[1]=v*L+_*O+g*k+y*J,l[5]=v*U+_*B+g*Y+y*$,l[9]=v*E+_*z+g*se+y*Z,l[13]=v*b+_*G+g*ee+y*N,l[2]=w*L+R*O+S*k+x*J,l[6]=w*U+R*B+S*Y+x*$,l[10]=w*E+R*z+S*se+x*Z,l[14]=w*b+R*G+S*ee+x*N,l[3]=I*L+H*O+C*k+P*J,l[7]=I*U+H*B+C*Y+P*$,l[11]=I*E+H*z+C*se+P*Z,l[15]=I*b+H*G+C*ee+P*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],_=e[6],g=e[10],y=e[14],w=e[3],R=e[7],S=e[11],x=e[15],I=h*y-p*g,H=f*y-p*_,C=f*g-h*_,P=u*y-p*v,L=u*g-h*v,U=u*_-f*v;return t*(R*I-S*H+x*C)-r*(w*I-S*P+x*L)+o*(w*H-R*P+x*U)-l*(w*C-R*L+S*U)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],v=e[10];return t*(u*v-f*p)-r*(l*v-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=e[9],g=e[10],y=e[11],w=e[12],R=e[13],S=e[14],x=e[15],I=t*f-r*u,H=t*h-o*u,C=t*p-l*u,P=r*h-o*f,L=r*p-l*f,U=o*p-l*h,E=v*R-_*w,b=v*S-g*w,O=v*x-y*w,B=_*S-g*R,z=_*x-y*R,G=g*x-y*S,k=I*G-H*z+C*B+P*O-L*b+U*E;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/k;return e[0]=(f*G-h*z+p*B)*Y,e[1]=(o*z-r*G-l*B)*Y,e[2]=(R*U-S*L+x*P)*Y,e[3]=(g*L-_*U-y*P)*Y,e[4]=(h*O-u*G-p*b)*Y,e[5]=(t*G-o*O+l*b)*Y,e[6]=(S*C-w*U-x*H)*Y,e[7]=(v*U-g*C+y*H)*Y,e[8]=(u*z-f*O+p*E)*Y,e[9]=(r*O-t*z-l*E)*Y,e[10]=(w*L-R*C+x*I)*Y,e[11]=(_*C-v*L-y*I)*Y,e[12]=(f*b-u*B-h*E)*Y,e[13]=(t*B-r*b+o*E)*Y,e[14]=(R*H-w*P-S*I)*Y,e[15]=(v*P-_*H+g*I)*Y,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,_=f+f,g=l*p,y=l*v,w=l*_,R=u*v,S=u*_,x=f*_,I=h*p,H=h*v,C=h*_,P=r.x,L=r.y,U=r.z;return o[0]=(1-(R+x))*P,o[1]=(y+C)*P,o[2]=(w-H)*P,o[3]=0,o[4]=(y-C)*L,o[5]=(1-(g+x))*L,o[6]=(S+I)*L,o[7]=0,o[8]=(w+H)*U,o[9]=(S-I)*U,o[10]=(1-(g+R))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ks.set(o[0],o[1],o[2]).length();const f=ks.set(o[4],o[5],o[6]).length(),h=ks.set(o[8],o[9],o[10]).length();l<0&&(u=-u),yi.copy(this);const p=1/u,v=1/f,_=1/h;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=v,yi.elements[5]*=v,yi.elements[6]*=v,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,t.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=Bi,h=!1){const p=this.elements,v=2*l/(t-e),_=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let w,R;if(h)w=l/(u-l),R=u*l/(u-l);else if(f===Bi)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===ao)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Bi,h=!1){const p=this.elements,v=2/(t-e),_=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let w,R;if(h)w=1/(u-l),R=u/(u-l);else if(f===Bi)w=-2/(u-l),R=-(u+l)/(u-l);else if(f===ao)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Zl.prototype.isMatrix4=!0;let $t=Zl;const ks=new ne,yi=new $t,G_=new ne(0,0,0),W_=new ne(1,1,1),Cr=new ne,ml=new ne,Zn=new ne,mm=new $t,gm=new aa;class Fr{constructor(e=0,t=0,r=0,o=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],_=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-vt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class Tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const vm=new ne,Bs=new aa,Qi=new $t,gl=new ne,qa=new ne,q_=new ne,Y_=new aa,_m=new ne(1,0,0),xm=new ne(0,1,0),Sm=new ne(0,0,1),ym={type:"added"},j_={type:"removed"},zs={type:"childadded",child:null},Ku={type:"childremoved",child:null};class on extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new ne,t=new Fr,r=new aa,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new lt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gl.copy(e):gl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(qa,gl,this.up):Qi.lookAt(gl,qa,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),zs.child=e,this.dispatchEvent(zs),zs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j_),Ku.child=e,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,Y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),y=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}on.DEFAULT_UP=new ne(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zi extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K_={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const S=t.getJointPose(R,r),x=this._getHandJoint(p,R);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),y=.02,w=.005;p.inputState.pinching&&g>y+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new zi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Zu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Mt.workingColorSpace){if(e=Mf(e,1),t=vt(t,0,1),r=vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Zu(u,l,e+1/3),this.g=Zu(u,l,e),this.b=Zu(u,l,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=Ag[e.toLowerCase()];return r!==void 0?this.setHex(r,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Mt.workingToColorSpace(Pn.copy(this),e),Math.round(vt(Pn.r*255,0,255))*65536+Math.round(vt(Pn.g*255,0,255))*256+Math.round(vt(Pn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Pn.copy(this),t);const r=Pn.r,o=Pn.g,l=Pn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const _=u-f;switch(p=v<=.5?_/(u+f):_/(2-u-f),u){case r:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-r)/_+2;break;case l:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=ui){Mt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,o=Pn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(vl);const r=no(Pr.h,vl.h,t),o=no(Pr.s,vl.s,t),l=no(Pr.l,vl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new mt;mt.NAMES=Ag;class wf{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new mt(e),this.near=t,this.far=r}clone(){return new wf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $_ extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new ne,er=new ne,Ju=new ne,tr=new ne,Vs=new ne,Hs=new ne,Mm=new ne,Qu=new ne,ed=new ne,td=new ne,nd=new Kt,id=new Kt,rd=new Kt;class bi{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),er.subVectors(r,t),Ju.subVectors(e,t);const u=Mi.dot(Mi),f=Mi.dot(er),h=Mi.dot(Ju),p=er.dot(er),v=er.dot(Ju),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,y=(p*h-f*v)*g,w=(u*v-f*h)*g;return l.set(1-y-w,w,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,tr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,tr.x),h.addScaledVector(u,tr.y),h.addScaledVector(f,tr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,t),id.fromBufferAttribute(e,r),rd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(nd,l.x),u.addScaledVector(id,l.y),u.addScaledVector(rd,l.z),u}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),er.subVectors(e,t),Mi.cross(er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Mi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return bi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Vs.subVectors(o,r),Hs.subVectors(l,r),Qu.subVectors(e,r);const h=Vs.dot(Qu),p=Hs.dot(Qu);if(h<=0&&p<=0)return t.copy(r);ed.subVectors(e,o);const v=Vs.dot(ed),_=Hs.dot(ed);if(v>=0&&_<=v)return t.copy(o);const g=h*_-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(Vs,u);td.subVectors(e,l);const y=Vs.dot(td),w=Hs.dot(td);if(w>=0&&y<=w)return t.copy(l);const R=y*p-h*w;if(R<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(r).addScaledVector(Hs,f);const S=v*w-y*_;if(S<=0&&_-v>=0&&y-w>=0)return Mm.subVectors(l,o),f=(_-v)/(_-v+(y-w)),t.copy(o).addScaledVector(Mm,f);const x=1/(S+R+g);return u=R*x,f=g*x,t.copy(r).addScaledVector(Vs,u).addScaledVector(Hs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class lo{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_l.copy(r.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),xl.subVectors(this.max,Ya),Gs.subVectors(e.a,Ya),Ws.subVectors(e.b,Ya),Xs.subVectors(e.c,Ya),Lr.subVectors(Ws,Gs),Nr.subVectors(Xs,Ws),es.subVectors(Gs,Xs);let t=[0,-Lr.z,Lr.y,0,-Nr.z,Nr.y,0,-es.z,es.y,Lr.z,0,-Lr.x,Nr.z,0,-Nr.x,es.z,0,-es.x,-Lr.y,Lr.x,0,-Nr.y,Nr.x,0,-es.y,es.x,0];return!sd(t,Gs,Ws,Xs,xl)||(t=[1,0,0,0,1,0,0,0,1],!sd(t,Gs,Ws,Xs,xl))?!1:(Sl.crossVectors(Lr,Nr),t=[Sl.x,Sl.y,Sl.z],sd(t,Gs,Ws,Xs,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Ei=new ne,_l=new lo,Gs=new ne,Ws=new ne,Xs=new ne,Lr=new ne,Nr=new ne,es=new ne,Ya=new ne,xl=new ne,Sl=new ne,ts=new ne;function sd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ts.fromArray(s,l);const f=o.x*Math.abs(ts.x)+o.y*Math.abs(ts.y)+o.z*Math.abs(ts.z),h=e.dot(ts),p=t.dot(ts),v=r.dot(ts);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const sn=new ne,yl=new _t;let Z_=0;class cr extends fs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=g_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Js(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Js(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Js(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Js(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class bg extends cr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rg extends cr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class fn extends cr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const J_=new lo,ja=new ne,ad=new ne;class Ql{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):J_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ja,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(ad)),this.expandByPoint(ja.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Q_=0;const ci=new $t,od=new on,qs=new ne,Jn=new lo,Ka=new lo,_n=new ne;class Xn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v_(e)?Rg:bg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new fn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Ka.setFromBufferAttribute(f),this.morphTargetsRelative?(_n.addVectors(Jn.min,Ka.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Ka.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Ka.min),Jn.expandByPoint(Ka.max))}Jn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)_n.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(_n));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)_n.fromBufferAttribute(f,p),h&&(qs.fromBufferAttribute(e,p),_n.add(qs)),o=Math.max(o,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new cr(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let E=0;E<r.count;E++)f[E]=new ne,h[E]=new ne;const p=new ne,v=new ne,_=new ne,g=new _t,y=new _t,w=new _t,R=new ne,S=new ne;function x(E,b,O){p.fromBufferAttribute(r,E),v.fromBufferAttribute(r,b),_.fromBufferAttribute(r,O),g.fromBufferAttribute(l,E),y.fromBufferAttribute(l,b),w.fromBufferAttribute(l,O),v.sub(p),_.sub(p),y.sub(g),w.sub(g);const B=1/(y.x*w.y-w.x*y.y);isFinite(B)&&(R.copy(v).multiplyScalar(w.y).addScaledVector(_,-y.y).multiplyScalar(B),S.copy(_).multiplyScalar(y.x).addScaledVector(v,-w.x).multiplyScalar(B),f[E].add(R),f[b].add(R),f[O].add(R),h[E].add(S),h[b].add(S),h[O].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let E=0,b=I.length;E<b;++E){const O=I[E],B=O.start,z=O.count;for(let G=B,k=B+z;G<k;G+=3)x(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const H=new ne,C=new ne,P=new ne,L=new ne;function U(E){P.fromBufferAttribute(o,E),L.copy(P);const b=f[E];H.copy(b),H.sub(P.multiplyScalar(P.dot(b))).normalize(),C.crossVectors(L,b);const B=C.dot(h[E])<0?-1:1;u.setXYZW(E,H.x,H.y,H.z,B)}for(let E=0,b=I.length;E<b;++E){const O=I[E],B=O.start,z=O.count;for(let G=B,k=B+z;G<k;G+=3)U(e.getX(G+0)),U(e.getX(G+1)),U(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new cr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new ne,l=new ne,u=new ne,f=new ne,h=new ne,p=new ne,v=new ne,_=new ne;if(e)for(let g=0,y=e.count;g<y;g+=3){const w=e.getX(g+0),R=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,S),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),f.add(v),h.add(v),p.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,_=f.normalized,g=new p.constructor(h.length*v);let y=0,w=0;for(let R=0,S=h.length;R<S;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*v;for(let x=0;x<v;x++)g[w++]=p[y++]}return new cr(g,v,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,_=p.length;v<_;v++){const g=p[v],y=e(g,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let _=0,g=p.length;_<g;_++){const y=p[_];v.push(y.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,y=_.length;g<y;g++)v.push(_[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ld=new ne,ex=new ne,tx=new lt;class Ir{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ld.subVectors(r,t).cross(ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(ld),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||tx.getNormalMatrix(e),o=this.coplanarPoint(ld).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let nx=0;class oa extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=eo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ag,this.blendDst=og,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wu,this.stencilZFail=Wu,this.stencilZPass=Wu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Ir().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new _t().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new ne,cd=new ne,Ml=new ne,El=new ne;class Cg{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){cd.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),El.copy(this.origin).sub(cd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ml),f=El.dot(this.direction),h=-El.dot(Ml),p=El.lengthSq(),v=Math.abs(1-u*u);let _,g,y,w;if(v>0)if(_=u*h-f,g=u*f-h,w=l*v,_>=0)if(g>=-w)if(g<=w){const R=1/v;_*=R,g*=R,y=_*(_+u*g+2*f)+g*(u*_+g+2*h)+p}else g=l,_=Math.max(0,-(u*g+f)),y=-_*_+g*(g+2*h)+p;else g=-l,_=Math.max(0,-(u*g+f)),y=-_*_+g*(g+2*h)+p;else g<=-w?(_=Math.max(0,-(-u*l+f)),g=_>0?-l:Math.min(Math.max(-l,-h),l),y=-_*_+g*(g+2*h)+p):g<=w?(_=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(_=Math.max(0,-(u*l+f)),g=_>0?l:Math.min(Math.max(-l,-h),l),y=-_*_+g*(g+2*h)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+f)),y=-_*_+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(cd).addScaledVector(Ml,g),y}intersectSphere(e,t){if(e.radius<0)return null;ir.subVectors(e.center,this.origin);const r=ir.dot(this.direction),o=ir.dot(ir)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,v=f.z,_=e.x-u.x,g=e.y-u.y,y=e.z-u.z,w=t.x-u.x,R=t.y-u.y,S=t.z-u.z,x=r.x-u.x,I=r.y-u.y,H=r.z-u.z,C=Math.abs(h),P=Math.abs(p),L=Math.abs(v);let U,E,b,O,B,z,G,k,Y,se,ee,J;if(C>=P&&C>=L?(b=h,z=_,Y=w,J=x,h>=0?(U=p,E=v,O=g,B=y,G=R,k=S,se=I,ee=H):(U=v,E=p,O=y,B=g,G=S,k=R,se=H,ee=I)):P>=L?(b=p,z=g,Y=R,J=I,p>=0?(U=v,E=h,O=y,B=_,G=S,k=w,se=H,ee=x):(U=h,E=v,O=_,B=y,G=w,k=S,se=x,ee=H)):(b=v,z=y,Y=S,J=H,v>=0?(U=h,E=p,O=_,B=g,G=w,k=R,se=x,ee=I):(U=p,E=h,O=g,B=_,G=R,k=w,se=I,ee=x)),b===0)return null;const $=U/b,Z=E/b,N=1/b,ae=O-$*z,Se=B-Z*z,ke=G-$*Y,ze=k-Z*Y,He=se-$*J,oe=ee-Z*J,de=He*ze-oe*ke,Me=ae*oe-Se*He,Ye=ke*Se-ze*ae;if(o){if(de<0||Me<0||Ye<0)return null}else if((de<0||Me<0||Ye<0)&&(de>0||Me>0||Ye>0))return null;const Fe=de+Me+Ye;if(Fe===0)return null;const at=N*(de*z+Me*Y+Ye*J);return(Fe>0?at<0:at>0)?null:this.at(at/Fe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class us extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Em=new $t,ns=new Cg,wl=new Ql,wm=new ne,Tl=new ne,Al=new ne,bl=new ne,ud=new ne,Rl=new ne,Tm=new ne,Cl=new ne;class ct extends on{constructor(e=new Xn,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Rl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],_=l[h];v!==0&&(ud.fromBufferAttribute(_,e),u?Rl.addScaledVector(ud,v):Rl.addScaledVector(ud.sub(t),v))}t.add(Rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(wl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(wl,wm)===null||ns.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Em.copy(l).invert(),ns.copy(e.ray).applyMatrix4(Em),!(r.boundingBox!==null&&ns.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const S=g[w],x=u[S.materialIndex],I=Math.max(S.start,y.start),H=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=I,P=H;C<P;C+=3){const L=f.getX(C),U=f.getX(C+1),E=f.getX(C+2);o=Pl(this,x,e,r,p,v,_,L,U,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let S=w,x=R;S<x;S+=3){const I=f.getX(S),H=f.getX(S+1),C=f.getX(S+2);o=Pl(this,u,e,r,p,v,_,I,H,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const S=g[w],x=u[S.materialIndex],I=Math.max(S.start,y.start),H=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let C=I,P=H;C<P;C+=3){const L=C,U=C+1,E=C+2;o=Pl(this,x,e,r,p,v,_,L,U,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let S=w,x=R;S<x;S+=3){const I=S,H=S+1,C=S+2;o=Pl(this,u,e,r,p,v,_,I,H,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function ix(s,e,t,r,o,l,u,f){let h;if(e.side===On?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===os,f),h===null)return null;Cl.copy(f),Cl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Cl);return p<t.near||p>t.far?null:{distance:p,point:Cl.clone(),object:s}}function Pl(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Tl),s.getVertexPosition(h,Al),s.getVertexPosition(p,bl);const v=ix(s,e,t,r,Tl,Al,bl,Tm);if(v){const _=new ne;bi.getBarycoord(Tm,Tl,Al,bl,_),o&&(v.uv=bi.getInterpolatedAttribute(o,f,h,p,_,new _t)),l&&(v.uv1=bi.getInterpolatedAttribute(l,f,h,p,_,new _t)),u&&(v.normal=bi.getInterpolatedAttribute(u,f,h,p,_,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new ne,materialIndex:0};bi.getNormal(Tl,Al,bl,g.normal),v.face=g,v.barycoord=_}return v}class rx extends kn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=En,v=En,_,g){super(null,u,f,h,p,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const is=new Ql,sx=new _t(.5,.5),Ll=new ne;class Tf{constructor(e=new Ir,t=new Ir,r=new Ir,o=new Ir,l=new Ir,u=new Ir){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Bi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],_=l[5],g=l[6],y=l[7],w=l[8],R=l[9],S=l[10],x=l[11],I=l[12],H=l[13],C=l[14],P=l[15];if(o[0].setComponents(p-u,y-v,x-w,P-I).normalize(),o[1].setComponents(p+u,y+v,x+w,P+I).normalize(),o[2].setComponents(p+f,y+_,x+R,P+H).normalize(),o[3].setComponents(p-f,y-_,x-R,P-H).normalize(),r)o[4].setComponents(h,g,S,C).normalize(),o[5].setComponents(p-h,y-g,x-S,P-C).normalize();else if(o[4].setComponents(p-h,y-g,x-S,P-C).normalize(),t===Bi)o[5].setComponents(p+h,y+g,x+S,P+C).normalize();else if(t===ao)o[5].setComponents(h,g,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=sx.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ll.x=o.normal.x>0?e.max.x:e.min.x,Ll.y=o.normal.y>0?e.max.y:e.min.y,Ll.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pg extends oa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Am=new $t,of=new Cg,Nl=new Ql,Dl=new ne;class ax extends on{constructor(e=new Xn,t=new Pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(o),Nl.radius+=l,e.ray.intersectsSphere(Nl)===!1)return;Am.copy(o).invert(),of.copy(e.ray).applyMatrix4(Am);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,_=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let w=g,R=y;w<R;w++){const S=p.getX(w);Dl.fromBufferAttribute(_,S),bm(Dl,S,h,o,e,t,this)}}else{const g=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let w=g,R=y;w<R;w++)Dl.fromBufferAttribute(_,w),bm(Dl,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function bm(s,e,t,r,o,l,u){const f=of.distanceSqToPoint(s);if(f<t){const h=new ne;of.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Lg extends kn{constructor(e=[],t=ls,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oo extends kn{constructor(e,t,r=Hi,o,l,u,f=En,h=En,p,v=ur,_=1){if(v!==ur&&v!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ox extends oo{constructor(e,t=Hi,r=ls,o,l,u=En,f=En,h,p=ur){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ng extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ht extends Xn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],_=[];let g=0,y=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(v,3)),this.setAttribute("uv",new fn(_,2));function w(R,S,x,I,H,C,P,L,U,E,b){const O=C/U,B=P/E,z=C/2,G=P/2,k=L/2,Y=U+1,se=E+1;let ee=0,J=0;const $=new ne;for(let Z=0;Z<se;Z++){const N=Z*B-G;for(let ae=0;ae<Y;ae++){const Se=ae*O-z;$[R]=Se*I,$[S]=N*H,$[x]=k,p.push($.x,$.y,$.z),$[R]=0,$[S]=0,$[x]=L>0?1:-1,v.push($.x,$.y,$.z),_.push(ae/U),_.push(1-Z/E),ee+=1}}for(let Z=0;Z<E;Z++)for(let N=0;N<U;N++){const ae=g+N+Y*Z,Se=g+N+Y*(Z+1),ke=g+(N+1)+Y*(Z+1),ze=g+(N+1)+Y*Z;h.push(ae,Se,ze),h.push(Se,ke,ze),J+=6}f.addGroup(y,J,b),y+=J,g+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kl extends Xn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],f=[],h=[],p=new ne,v=new _t;u.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let _=0,g=3;_<=t;_++,g+=3){const y=r+_/t*o;p.x=e*Math.cos(y),p.y=e*Math.sin(y),u.push(p.x,p.y,p.z),f.push(0,0,1),v.x=(u[g]/e+1)/2,v.y=(u[g+1]/e+1)/2,h.push(v.x,v.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new fn(u,3)),this.setAttribute("normal",new fn(f,3)),this.setAttribute("uv",new fn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ds extends Xn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],_=[],g=[],y=[];let w=0;const R=[],S=r/2;let x=0;I(),u===!1&&(e>0&&H(!0),t>0&&H(!1)),this.setIndex(v),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(g,3)),this.setAttribute("uv",new fn(y,2));function I(){const C=new ne,P=new ne;let L=0;const U=(t-e)/r;for(let E=0;E<=l;E++){const b=[],O=E/l,B=O*(t-e)+e;for(let z=0;z<=o;z++){const G=z/o,k=G*h+f,Y=Math.sin(k),se=Math.cos(k);P.x=B*Y,P.y=-O*r+S,P.z=B*se,_.push(P.x,P.y,P.z),C.set(Y,U,se).normalize(),g.push(C.x,C.y,C.z),y.push(G,1-O),b.push(w++)}R.push(b)}for(let E=0;E<o;E++)for(let b=0;b<l;b++){const O=R[b][E],B=R[b+1][E],z=R[b+1][E+1],G=R[b][E+1];(e>0||b!==0)&&(v.push(O,B,G),L+=3),(t>0||b!==l-1)&&(v.push(B,z,G),L+=3)}p.addGroup(x,L,0),x+=L}function H(C){const P=w,L=new _t,U=new ne;let E=0;const b=C===!0?e:t,O=C===!0?1:-1;for(let z=1;z<=o;z++)_.push(0,S*O,0),g.push(0,O,0),y.push(.5,.5),w++;const B=w;for(let z=0;z<=o;z++){const k=z/o*h+f,Y=Math.cos(k),se=Math.sin(k);U.x=b*se,U.y=S*O,U.z=b*Y,_.push(U.x,U.y,U.z),g.push(0,O,0),L.x=Y*.5+.5,L.y=se*.5*O+.5,y.push(L.x,L.y),w++}for(let z=0;z<o;z++){const G=P+z,k=B+z;C===!0?v.push(k,k+1,G):v.push(k+1,k,G),E+=3}p.addGroup(x,E,C===!0?1:2),x+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends Xn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,_=e/f,g=t/h,y=[],w=[],R=[],S=[];for(let x=0;x<v;x++){const I=x*g-u;for(let H=0;H<p;H++){const C=H*_-l;w.push(C,-I,0),R.push(0,0,1),S.push(H/f),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let I=0;I<f;I++){const H=I+p*x,C=I+p*(x+1),P=I+1+p*(x+1),L=I+1+p*x;y.push(H,C,L),y.push(C,P,L)}this.setIndex(y),this.setAttribute("position",new fn(w,3)),this.setAttribute("normal",new fn(R,3)),this.setAttribute("uv",new fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ec extends Xn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],_=new ne,g=new ne,y=[],w=[],R=[],S=[];for(let x=0;x<=r;x++){const I=[],H=x/r,C=u+H*f,P=e*Math.cos(C),L=Math.sqrt(e*e-P*P);let U=0;x===0&&u===0?U=.5/t:x===r&&h===Math.PI&&(U=-.5/t);for(let E=0;E<=t;E++){const b=E/t,O=o+b*l;_.x=-L*Math.cos(O),_.y=P,_.z=L*Math.sin(O),w.push(_.x,_.y,_.z),g.copy(_).normalize(),R.push(g.x,g.y,g.z),S.push(b+U,1-H),I.push(p++)}v.push(I)}for(let x=0;x<r;x++)for(let I=0;I<t;I++){const H=v[x][I+1],C=v[x][I],P=v[x+1][I],L=v[x+1][I+1];(x!==0||u>0)&&y.push(H,C,L),(x!==r-1||h<Math.PI)&&y.push(C,P,L)}this.setIndex(y),this.setAttribute("position",new fn(w,3)),this.setAttribute("normal",new fn(R,3)),this.setAttribute("uv",new fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ra(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Rm(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Rm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Fn(s){const e={};for(let t=0;t<s.length;t++){const r=ra(s[t]);for(const o in r)e[o]=r[o]}return e}function Rm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function lx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const cx={clone:ra,merge:Fn};var ux=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ux,this.fragmentShader=dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new mt().setHex(o.value);break;case"v2":this.uniforms[r].value=new _t().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ne().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Kt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new $t().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fx extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xn extends oa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sf,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hx extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class px extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tc extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mx extends tc{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const dd=new $t,Cm=new ne,Pm=new ne;class Ig{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tf,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Cm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cm),Pm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){dd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(dd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===ao||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Il=new ne,Ul=new aa,Ui=new ne;class Ug extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ul,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Il,Ul,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new ne,Lm=new _t,Nm=new _t;class Qn extends Ug{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Lm,Nm),t.subVectors(Nm,Lm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gx extends Ig{constructor(){super(new Qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=ia*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class vx extends tc{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new gx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Af extends Ug{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _x extends Ig{constructor(){super(new Af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xx extends tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new _x}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sx extends tc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ys=-90,js=1;class yx extends on{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Qn(Ys,js,e,t);o.layers=this.layers,this.add(o);const l=new Qn(Ys,js,e,t);l.layers=this.layers,this.add(l);const u=new Qn(Ys,js,e,t);u.layers=this.layers,this.add(u);const f=new Qn(Ys,js,e,t);f.layers=this.layers,this.add(f);const h=new Qn(Ys,js,e,t);h.layers=this.layers,this.add(h);const p=new Qn(Ys,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ao)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Mx extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ex{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Lf=class Lf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Lf.prototype.isMatrix2=!0;let Dm=Lf;function Im(s,e,t,r){const o=wx(r);switch(t){case Sg:return s*e;case Mg:return s*e/o.components*o.byteLength;case vf:return s*e/o.components*o.byteLength;case cs:return s*e*2/o.components*o.byteLength;case _f:return s*e*2/o.components*o.byteLength;case yg:return s*e*3/o.components*o.byteLength;case Ri:return s*e*4/o.components*o.byteLength;case xf:return s*e*4/o.components*o.byteLength;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Ld:return Math.max(s,16)*Math.max(e,8)/4;case Rd:case Pd:return Math.max(s,8)*Math.max(e,8)/2;case Nd:case Dd:case Ud:case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Id:case Wl:case Od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Jd:case Qd:case ef:return Math.ceil(s/4)*Math.ceil(e/4)*16;case tf:case nf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xl:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wx(s){switch(s){case ei:case gg:return{byteLength:1,components:1};case ro:case vg:case Gi:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case Hi:case pf:case ki:return{byteLength:4,components:1};case _g:case xg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ff}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ff);function Fg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Tx(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,p){const v=h.array,_=h.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,v);else{_.sort((y,w)=>y.start-w.start);let g=0;for(let y=1;y<_.length;y++){const w=_[g],R=_[y];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,_[g]=R)}_.length=g+1;for(let y=0,w=_.length;y<w;y++){const R=_[y];s.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ix=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nS="gl_FragColor = linearToOutputTexel( gl_FragColor );",iS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ES=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,CS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,KS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Ax,alphahash_pars_fragment:bx,alphamap_fragment:Rx,alphamap_pars_fragment:Cx,alphatest_fragment:Px,alphatest_pars_fragment:Lx,aomap_fragment:Nx,aomap_pars_fragment:Dx,batching_pars_vertex:Ix,batching_vertex:Ux,begin_vertex:Fx,beginnormal_vertex:Ox,bsdfs:kx,iridescence_fragment:Bx,bumpmap_pars_fragment:zx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Gx,clipping_planes_vertex:Wx,color_fragment:Xx,color_pars_fragment:qx,color_pars_vertex:Yx,color_vertex:jx,common:Kx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Jx,displacementmap_vertex:Qx,emissivemap_fragment:eS,emissivemap_pars_fragment:tS,colorspace_fragment:nS,colorspace_pars_fragment:iS,envmap_fragment:rS,envmap_common_pars_fragment:sS,envmap_pars_fragment:aS,envmap_pars_vertex:oS,envmap_physical_pars_fragment:_S,envmap_vertex:lS,fog_vertex:cS,fog_pars_vertex:uS,fog_fragment:dS,fog_pars_fragment:fS,gradientmap_pars_fragment:hS,lightmap_pars_fragment:pS,lights_lambert_fragment:mS,lights_lambert_pars_fragment:gS,lights_pars_begin:vS,lights_toon_fragment:xS,lights_toon_pars_fragment:SS,lights_phong_fragment:yS,lights_phong_pars_fragment:MS,lights_physical_fragment:ES,lights_physical_pars_fragment:wS,lights_fragment_begin:TS,lights_fragment_maps:AS,lights_fragment_end:bS,lightprobes_pars_fragment:RS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:PS,logdepthbuf_pars_vertex:LS,logdepthbuf_vertex:NS,map_fragment:DS,map_pars_fragment:IS,map_particle_fragment:US,map_particle_pars_fragment:FS,metalnessmap_fragment:OS,metalnessmap_pars_fragment:kS,morphinstance_vertex:BS,morphcolor_vertex:zS,morphnormal_vertex:VS,morphtarget_pars_vertex:HS,morphtarget_vertex:GS,normal_fragment_begin:WS,normal_fragment_maps:XS,normal_pars_fragment:qS,normal_pars_vertex:YS,normal_vertex:jS,normalmap_pars_fragment:KS,clearcoat_normal_fragment_begin:$S,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:JS,iridescence_pars_fragment:QS,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:ry,dithering_pars_fragment:sy,roughnessmap_fragment:ay,roughnessmap_pars_fragment:oy,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:uy,shadowmask_pars_fragment:dy,skinbase_vertex:fy,skinning_pars_vertex:hy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:vy,tonemapping_fragment:_y,tonemapping_pars_fragment:xy,transmission_fragment:Sy,transmission_pars_fragment:yy,uv_pars_fragment:My,uv_pars_vertex:Ey,uv_vertex:wy,worldpos_vertex:Ty,background_vert:Ay,background_frag:by,backgroundCube_vert:Ry,backgroundCube_frag:Cy,cube_vert:Py,cube_frag:Ly,depth_vert:Ny,depth_frag:Dy,distance_vert:Iy,distance_frag:Uy,equirect_vert:Fy,equirect_frag:Oy,linedashed_vert:ky,linedashed_frag:By,meshbasic_vert:zy,meshbasic_frag:Vy,meshlambert_vert:Hy,meshlambert_frag:Gy,meshmatcap_vert:Wy,meshmatcap_frag:Xy,meshnormal_vert:qy,meshnormal_frag:Yy,meshphong_vert:jy,meshphong_frag:Ky,meshphysical_vert:$y,meshphysical_frag:Zy,meshtoon_vert:Jy,meshtoon_frag:Qy,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:rM,sprite_frag:sM},Ie={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Fn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Fn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Fn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Fn([Ie.lights,Ie.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Fl={r:0,b:0,g:0},aM=new $t,Og=new lt;Og.set(-1,0,0,0,1,0,0,0,1);function oM(s,e,t,r,o,l){const u=new mt(0);let f=o===!0?0:1,h,p,v=null,_=0,g=null;function y(I){let H=I.isScene===!0?I.background:null;if(H&&H.isTexture){const C=I.backgroundBlurriness>0;H=e.get(H,C)}return H}function w(I){let H=!1;const C=y(I);C===null?S(u,f):C&&C.isColor&&(S(C,1),H=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||H)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(I,H){const C=y(H);C&&(C.isCubeTexture||C.mapping===Jl)?(p===void 0&&(p=new ct(new Ht(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:ra(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(aM.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Og),p.material.toneMapped=Mt.getTransfer(C.colorSpace)!==It,(v!==C||_!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=C,_=C.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new ct(new sr(2,2),new Pi({name:"BackgroundMaterial",uniforms:ra(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(C.colorSpace)!==It,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=C,_=C.version,g=s.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function S(I,H){I.getRGB(Fl,Dg(s)),t.buffers.color.setClear(Fl.r,Fl.g,Fl.b,H,l)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,H=1){u.set(I),f=H,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(I){f=I,S(u,f)},render:w,addToRenderList:R,dispose:x}}function lM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(B,z,G,k,Y){let se=!1;const ee=_(B,k,G,z);l!==ee&&(l=ee,p(l.object)),se=y(B,k,G,Y),se&&w(B,k,G,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,C(B,z,G,k),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return s.createVertexArray()}function p(B){return s.bindVertexArray(B)}function v(B){return s.deleteVertexArray(B)}function _(B,z,G,k){const Y=k.wireframe===!0;let se=r[z.id];se===void 0&&(se={},r[z.id]=se);const ee=B.isInstancedMesh===!0?B.id:0;let J=se[ee];J===void 0&&(J={},se[ee]=J);let $=J[G.id];$===void 0&&($={},J[G.id]=$);let Z=$[Y];return Z===void 0&&(Z=g(h()),$[Y]=Z),Z}function g(B){const z=[],G=[],k=[];for(let Y=0;Y<t;Y++)z[Y]=0,G[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:k,object:B,attributes:{},index:null}}function y(B,z,G,k){const Y=l.attributes,se=z.attributes;let ee=0;const J=G.getAttributes();for(const $ in J)if(J[$].location>=0){const N=Y[$];let ae=se[$];if(ae===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(ae=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(ae=B.instanceColor)),N===void 0||N.attribute!==ae||ae&&N.data!==ae.data)return!0;ee++}return l.attributesNum!==ee||l.index!==k}function w(B,z,G,k){const Y={},se=z.attributes;let ee=0;const J=G.getAttributes();for(const $ in J)if(J[$].location>=0){let N=se[$];N===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(N=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(N=B.instanceColor));const ae={};ae.attribute=N,N&&N.data&&(ae.data=N.data),Y[$]=ae,ee++}l.attributes=Y,l.attributesNum=ee,l.index=k}function R(){const B=l.newAttributes;for(let z=0,G=B.length;z<G;z++)B[z]=0}function S(B){x(B,0)}function x(B,z){const G=l.newAttributes,k=l.enabledAttributes,Y=l.attributeDivisors;G[B]=1,k[B]===0&&(s.enableVertexAttribArray(B),k[B]=1),Y[B]!==z&&(s.vertexAttribDivisor(B,z),Y[B]=z)}function I(){const B=l.newAttributes,z=l.enabledAttributes;for(let G=0,k=z.length;G<k;G++)z[G]!==B[G]&&(s.disableVertexAttribArray(G),z[G]=0)}function H(B,z,G,k,Y,se,ee){ee===!0?s.vertexAttribIPointer(B,z,G,Y,se):s.vertexAttribPointer(B,z,G,k,Y,se)}function C(B,z,G,k){R();const Y=k.attributes,se=G.getAttributes(),ee=z.defaultAttributeValues;for(const J in se){const $=se[J];if($.location>=0){let Z=Y[J];if(Z===void 0&&(J==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),J==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),Z!==void 0){const N=Z.normalized,ae=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;const ke=Se.buffer,ze=Se.type,He=Se.bytesPerElement,oe=ze===s.INT||ze===s.UNSIGNED_INT||Z.gpuType===pf;if(Z.isInterleavedBufferAttribute){const de=Z.data,Me=de.stride,Ye=Z.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<$.locationSize;Fe++)x($.location+Fe,de.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<$.locationSize;Fe++)S($.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let Fe=0;Fe<$.locationSize;Fe++)H($.location+Fe,ae/$.locationSize,ze,N,Me*He,(Ye+ae/$.locationSize*Fe)*He,oe)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<$.locationSize;de++)x($.location+de,Z.meshPerAttribute);B.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<$.locationSize;de++)S($.location+de);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let de=0;de<$.locationSize;de++)H($.location+de,ae/$.locationSize,ze,N,ae*He,ae/$.locationSize*de*He,oe)}}else if(ee!==void 0){const N=ee[J];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv($.location,N);break;case 3:s.vertexAttrib3fv($.location,N);break;case 4:s.vertexAttrib4fv($.location,N);break;default:s.vertexAttrib1fv($.location,N)}}}}I()}function P(){b();for(const B in r){const z=r[B];for(const G in z){const k=z[G];for(const Y in k){const se=k[Y];for(const ee in se)v(se[ee].object),delete se[ee];delete k[Y]}}delete r[B]}}function L(B){if(r[B.id]===void 0)return;const z=r[B.id];for(const G in z){const k=z[G];for(const Y in k){const se=k[Y];for(const ee in se)v(se[ee].object),delete se[ee];delete k[Y]}}delete r[B.id]}function U(B){for(const z in r){const G=r[z];for(const k in G){const Y=G[k];if(Y[B.id]===void 0)continue;const se=Y[B.id];for(const ee in se)v(se[ee].object),delete se[ee];delete Y[B.id]}}}function E(B){for(const z in r){const G=r[z],k=B.isInstancedMesh===!0?B.id:0,Y=G[k];if(Y!==void 0){for(const se in Y){const ee=Y[se];for(const J in ee)v(ee[J].object),delete ee[J];delete Y[se]}delete G[k],Object.keys(G).length===0&&delete r[z]}}}function b(){O(),u=!0,l!==o&&(l=o,p(l.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:b,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:S,disableUnusedAttributes:I}}function cM(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let g=0;for(let y=0;y<v;y++)g+=p[y];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function uM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Ri&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const E=U===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ei&&U!==ki&&!E&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(rt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),H=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:H,maxFragmentUniforms:C,maxSamples:P,samples:L}}function dM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ir,f=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||r!==0||o;return o=g,r=_.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,y){const w=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!o||w===null||w.length===0||l&&!S)l?v(null):p();else{const I=l?0:r,H=I*4;let C=x.clippingState||null;h.value=C,C=v(w,g,H,y);for(let P=0;P!==H;++P)C[P]=t[P];x.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,y,w){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=h.value,w!==!0||S===null){const x=y+R*4,I=g.matrixWorldInverse;f.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let H=0,C=y;H!==R;++H,C+=4)u.copy(_[H]).applyMatrix4(I,f),u.normal.toArray(S,C),S[C+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const Qs=4,fM=6,hM=20,pM=256,$a=new Af,Um=new mt;let fd=null,hd=0,pd=0,md=!1;const mM=new ne,rs=new ne;class Fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=mM}=l;fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,hd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Gi,format:Ri,colorSpace:ql,depthBuffer:!1},o=Om(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Om(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gM(l)),this._blurMaterial=_M(l,e,t),this._ggxMaterial=vM(l,e,t)}return o}_compileMaterial(e){const t=new ct(new Xn,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,r,o,l){const h=new Qn(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(Um),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Ht,new us({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let x=!1;const I=e.background;I?I.isColor&&(S.color.copy(I),e.background=null,x=!0):(S.color.copy(Um),x=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(h.up.set(0,p[H],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[H],l.y,l.z)):C===1?(h.up.set(0,0,p[H]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[H],l.z)):(h.up.set(0,p[H],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[H]));const P=this._cubeSize;Ks(o,C*P,H>2?P:0,P,P),_.setRenderTarget(o),x&&_.render(R,h),_.render(e,h)}_.toneMapping=y,_.autoClear=g,e.background=I}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ls||e.mapping===na;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ks(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,$a)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=p*1.25,y=_*g,{_lodMax:w}=this,R=this._sizeLods[r],S=3*R*(r>w-Qs?r-w+Qs:0),x=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=w-t,Ks(l,S,x,3*R,2*R),o.setRenderTarget(l),o.render(f,$a),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,Ks(e,S,x,3*R,2*R),o.setRenderTarget(e),o.render(f,$a)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,h=this._lodMeshes[o];h.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],_=3*v*(o>this._lodMax-Qs?o-this._lodMax+Qs:0),g=4*(this._cubeSize-v);Ks(t,_,g,3*v,2*v),u.setRenderTarget(t),u.render(h,$a)}}function gM(s){const e=[],t=[];let r=s;const o=s-Qs+1+fM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),h=-f,p=1+f,v=[h,h,p,h,p,p,h,h,p,p,h,p],_=6,g=6,y=3,w=new Float32Array(y*g*_),R=new Float32Array(y*g*_);for(let x=0;x<_;x++){const I=x%3*2/3-1,H=x>2?0:-1,C=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];w.set(C,y*g*x);for(let P=0;P<g;P++){const L=v[P*2]*2-1,U=v[P*2+1]*2-1;x===0?rs.set(1,U,L):x===1?rs.set(-L,1,-U):x===2?rs.set(-L,U,1):x===3?rs.set(-1,U,-L):x===4?rs.set(-L,-1,U):rs.set(L,U,-1),rs.toArray(R,(x*g+P)*y)}}const S=new Xn;S.setAttribute("position",new cr(w,y)),S.setAttribute("outputDirection",new cr(R,y)),t.push(new ct(S,null)),r>Qs&&r--}return{lodMeshes:t,sizeLods:e}}function Om(s,e,t){const r=new Ci(s,e,t);return r.texture.mapping=Jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ks(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function vM(s,e,t){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function _M(s,e,t){return new Pi({name:"SphericalGaussianBlur",defines:{SAMPLES:hM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function km(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Bm(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kg extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Lg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ht(5,5,5),l=new Pi({name:"CubemapFromEquirect",uniforms:ra(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:or});l.uniforms.tEquirect.value=t;const u=new ct(o,l),f=t.minFilter;return t.minFilter===ss&&(t.minFilter=Ln),new yx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function xM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?u(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Vu||y===Hu)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new kg(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const y=g.mapping,w=y===Vu||y===Hu,R=y===ls||y===na;if(w||R){let S=t.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new Fm(s)),S=w?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const I=g.image;return w&&I&&I.height>0||R&&I&&h(I)?(r===null&&(r=new Fm(s)),S=w?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function f(g,y){return y===Vu?g.mapping=ls:y===Hu&&(g.mapping=na),g}function h(g){let y=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&y++;return y===w}function p(g){const y=g.target;y.removeEventListener("dispose",p);const w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const w=t.get(y);w!==void 0&&(t.delete(y),w.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function SM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ea("WebGLRenderer: "+r+" extension not supported."),o}}}function yM(s,e,t,r){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function p(_){const g=[],y=_.index,w=_.attributes.position;let R=0;if(w===void 0)return;if(y!==null){const I=y.array;R=y.version;for(let H=0,C=I.length;H<C;H+=3){const P=I[H+0],L=I[H+1],U=I[H+2];g.push(P,L,L,U,U,P)}}else{const I=w.array;R=w.version;for(let H=0,C=I.length/3-1;H<C;H+=3){const P=H+0,L=H+1,U=H+2;g.push(P,L,L,U,U,P)}}const S=new(w.count>=65535?Rg:bg)(g,1);S.version=R;const x=l.get(_);x&&e.remove(x),l.set(_,S)}function v(_){const g=l.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:v}}function MM(s,e,t){let r;function o(_){r=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,g){s.drawElements(r,g,l,_*u),t.update(g,r,1)}function p(_,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,_*u,y),t.update(g,r,y))}function v(_,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,y);let R=0;for(let S=0;S<y;S++)R+=g[S];t.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function EM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function wM(s,e,t){const r=new WeakMap,o=new Kt;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let O=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",O)};var y=O;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],H=f.morphAttributes.color||[];let C=0;w===!0&&(C=1),R===!0&&(C=2),S===!0&&(C=3);let P=f.attributes.position.count*C,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const U=new Float32Array(P*L*4*_),E=new wg(U,P,L,_);E.type=ki,E.needsUpdate=!0;const b=C*4;for(let B=0;B<_;B++){const z=x[B],G=I[B],k=H[B],Y=P*L*4*B;for(let se=0;se<z.count;se++){const ee=se*b;w===!0&&(o.fromBufferAttribute(z,se),U[Y+ee+0]=o.x,U[Y+ee+1]=o.y,U[Y+ee+2]=o.z,U[Y+ee+3]=0),R===!0&&(o.fromBufferAttribute(G,se),U[Y+ee+4]=o.x,U[Y+ee+5]=o.y,U[Y+ee+6]=o.z,U[Y+ee+7]=0),S===!0&&(o.fromBufferAttribute(k,se),U[Y+ee+8]=o.x,U[Y+ee+9]=o.y,U[Y+ee+10]=o.z,U[Y+ee+11]=k.itemSize===4?o.w:1)}}g={count:_,texture:E,size:new _t(P,L)},r.set(f,g),f.addEventListener("dispose",O)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let S=0;S<p.length;S++)w+=p[S];const R=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function TM(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==v&&(y.update(),l.set(y,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const AM={[cg]:"LINEAR_TONE_MAPPING",[ug]:"REINHARD_TONE_MAPPING",[dg]:"CINEON_TONE_MAPPING",[hf]:"ACES_FILMIC_TONE_MAPPING",[hg]:"AGX_TONE_MAPPING",[pg]:"NEUTRAL_TONE_MAPPING",[fg]:"CUSTOM_TONE_MAPPING"};function bM(s,e,t,r,o,l){const u=new Ci(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null;const p=new Xn;p.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new fn([0,2,0,0,2,0],2));const v=new fx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new ct(p,v),g=new Af(-1,1,1,-1,0,1);let y=null,w=null,R=!1,S,x=null,I=[],H=!1;this.setSize=function(C,P){u.setSize(C,P),f!==null&&f.setSize(C,P),h!==null&&h.setSize(C,P);for(let L=0;L<I.length;L++){const U=I[L];U.setSize&&U.setSize(C,P)}},this.setEffects=function(C){I=C,H=I.length>0&&I[0].isRenderPass===!0;const P=u.width,L=u.height;I.length>0&&f===null&&(f=new Ci(P,L,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),h=new Ci(P,L,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<I.length;U++){const E=I[U];E.setSize&&E.setSize(P,L)}},this.begin=function(C,P){if(R||C.toneMapping===Vi&&I.length===0)return!1;if(x=P,P!==null){const L=P.width,U=P.height;(u.width!==L||u.height!==U)&&this.setSize(L,U)}return H===!1&&C.setRenderTarget(u),S=C.toneMapping,C.toneMapping=Vi,!0},this.hasRenderPass=function(){return H},this.end=function(C,P){C.toneMapping=S,R=!0;let L=u,U=f;for(let E=0;E<I.length;E++){const b=I[E];b.enabled!==!1&&(b.render(C,U,L,P),b.needsSwap!==!1&&(L=U,U=U===f?h:f))}if(y!==C.outputColorSpace||w!==C.toneMapping){y=C.outputColorSpace,w=C.toneMapping,v.defines={},Mt.getTransfer(y)===It&&(v.defines.SRGB_TRANSFER="");const E=AM[w];E&&(v.defines[E]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(x),C.render(_,g),x=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),p.dispose(),v.dispose()}}const Bg=new kn,lf=new oo(1,1),zg=new wg,Vg=new H_,Hg=new Lg,zm=[],Vm=[],Hm=new Float32Array(16),Gm=new Float32Array(9),Wm=new Float32Array(4);function la(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=zm[o];if(l===void 0&&(l=new Float32Array(o),zm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function pn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ic(s,e){let t=Vm[e];t===void 0&&(t=new Int32Array(e),Vm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function RM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),pn(t,e)}}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),pn(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),pn(t,e)}}function NM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Wm.set(r),s.uniformMatrix2fv(this.addr,!1,Wm),pn(t,r)}}function DM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Gm.set(r),s.uniformMatrix3fv(this.addr,!1,Gm),pn(t,r)}}function IM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Hm.set(r),s.uniformMatrix4fv(this.addr,!1,Hm),pn(t,r)}}function UM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),pn(t,e)}}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),pn(t,e)}}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),pn(t,e)}}function BM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),pn(t,e)}}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),pn(t,e)}}function HM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),pn(t,e)}}function GM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(lf.compareFunction=t.isReversedDepthBuffer()?yf:Sf,l=lf):l=Bg,t.setTexture2D(e||l,o)}function WM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Vg,o)}function XM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Hg,o)}function qM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||zg,o)}function YM(s){switch(s){case 5126:return RM;case 35664:return CM;case 35665:return PM;case 35666:return LM;case 35674:return NM;case 35675:return DM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return kM;case 5125:return BM;case 36294:return zM;case 36295:return VM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}function jM(s,e){s.uniform1fv(this.addr,e)}function KM(s,e){const t=la(e,this.size,2);s.uniform2fv(this.addr,t)}function $M(s,e){const t=la(e,this.size,3);s.uniform3fv(this.addr,t)}function ZM(s,e){const t=la(e,this.size,4);s.uniform4fv(this.addr,t)}function JM(s,e){const t=la(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function QM(s,e){const t=la(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function eE(s,e){const t=la(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tE(s,e){s.uniform1iv(this.addr,e)}function nE(s,e){s.uniform2iv(this.addr,e)}function iE(s,e){s.uniform3iv(this.addr,e)}function rE(s,e){s.uniform4iv(this.addr,e)}function sE(s,e){s.uniform1uiv(this.addr,e)}function aE(s,e){s.uniform2uiv(this.addr,e)}function oE(s,e){s.uniform3uiv(this.addr,e)}function lE(s,e){s.uniform4uiv(this.addr,e)}function cE(s,e,t){const r=this.cache,o=e.length,l=ic(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=lf:u=Bg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function uE(s,e,t){const r=this.cache,o=e.length,l=ic(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Vg,l[u])}function dE(s,e,t){const r=this.cache,o=e.length,l=ic(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Hg,l[u])}function fE(s,e,t){const r=this.cache,o=e.length,l=ic(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||zg,l[u])}function hE(s){switch(s){case 5126:return jM;case 35664:return KM;case 35665:return $M;case 35666:return ZM;case 35674:return JM;case 35675:return QM;case 35676:return eE;case 5124:case 35670:return tE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return rE;case 5125:return sE;case 36294:return aE;case 36295:return oE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return fE}}class pE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}}class mE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hE(t.type)}}class gE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Xm(s,e){s.seq.push(e),s.map[e.id]=e}function vE(s,e,t){const r=s.name,o=r.length;for(gd.lastIndex=0;;){const l=gd.exec(r),u=gd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Xm(t,p===void 0?new pE(f,s,e):new mE(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new gE(f),Xm(t,_)),t=_}}}class Gl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);vE(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function qm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const _E=37297;let xE=0;function SE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Ym=new lt;function yE(s){Mt._getMatrix(Ym,Mt.workingColorSpace,s);const e=`mat3( ${Ym.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(s)){case Yl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function jm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+SE(s.getShaderSource(e),f)}else return l}function ME(s,e){const t=yE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const EE={[cg]:"Linear",[ug]:"Reinhard",[dg]:"Cineon",[hf]:"ACESFilmic",[hg]:"AgX",[pg]:"Neutral",[fg]:"Custom"};function wE(s,e){const t=EE[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ol=new ne;function TE(){Mt.getLuminanceCoefficients(Ol);const s=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function bE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function RE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Qa(s){return s!==""}function Km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CE=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(s){return s.replace(CE,LE)}const PE=new Map;function LE(s,e){let t=pt[e];if(t===void 0){const r=PE.get(e);if(r!==void 0)t=pt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cf(t)}const NE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(s){return s.replace(NE,DE)}function DE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Jm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const IE={[kl]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function UE(s){return IE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FE={[ls]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};function OE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":FE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const kE={[na]:"ENVMAP_MODE_REFRACTION"};function BE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":kE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zE={[lg]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function VE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":zE[s.combine]||"ENVMAP_BLENDING_NONE"}function HE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function GE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=UE(t),p=OE(t),v=BE(t),_=VE(t),g=HE(t),y=AE(t),w=bE(l),R=o.createProgram();let S,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Qa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Qa).join(`
`),x.length>0&&(x+=`
`)):(S=[Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),x=[Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?wE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,ME("linearToOutputTexel",t.outputColorSpace),TE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),u=cf(u),u=Km(u,t),u=$m(u,t),f=cf(f),f=Km(f,t),f=$m(f,t),u=Zm(u),f=Zm(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=I+S+u,C=I+x+f,P=qm(o,o.VERTEX_SHADER,H),L=qm(o,o.FRAGMENT_SHADER,C);o.attachShader(R,P),o.attachShader(R,L),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function U(B){if(s.debug.checkShaderErrors){const z=o.getProgramInfoLog(R)||"",G=o.getShaderInfoLog(P)||"",k=o.getShaderInfoLog(L)||"",Y=z.trim(),se=G.trim(),ee=k.trim();let J=!0,$=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,P,L);else{const Z=jm(o,P,"vertex"),N=jm(o,L,"fragment");Ct("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+Z+`
`+N)}else Y!==""?rt("WebGLProgram: Program Info Log:",Y):(se===""||ee==="")&&($=!1);$&&(B.diagnostics={runnable:J,programLog:Y,vertexShader:{log:se,prefix:S},fragmentShader:{log:ee,prefix:x}})}o.deleteShader(P),o.deleteShader(L),E=new Gl(o,R),b=RE(o,R)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(R,_E)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=P,this.fragmentShader=L,this}let WE=0;class XE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new qE(e),t.set(e,r)),r}}class qE{constructor(e){this.id=WE++,this.code=e,this.usedTimes=0}}function YE(s){return s===cs||s===Wl||s===Xl}function jE(s,e,t,r,o,l){const u=new Tg,f=new XE,h=new Set,p=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return h.add(E),E===0?"uv":`uv${E}`}function R(E,b,O,B,z,G){const k=B.fog,Y=z.geometry,se=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,J=e.get(E.envMap||se,ee),$=J&&J.mapping===Jl?J.image.height:null,Z=y[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&rt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=N!==void 0?N.length:0;let Se=0;Y.morphAttributes.position!==void 0&&(Se=1),Y.morphAttributes.normal!==void 0&&(Se=2),Y.morphAttributes.color!==void 0&&(Se=3);let ke,ze,He,oe;if(Z){const At=Oi[Z];ke=At.vertexShader,ze=At.fragmentShader}else{ke=E.vertexShader,ze=E.fragmentShader;const At=f.getVertexShaderStage(E),Et=f.getFragmentShaderStage(E);f.update(E,At,Et),He=At.id,oe=Et.id}const de=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ye=z.isInstancedMesh===!0,Fe=z.isBatchedMesh===!0,at=!!E.map,Ft=!!E.matcap,dt=!!J,xt=!!E.aoMap,Nt=!!E.lightMap,ft=!!E.bumpMap&&E.wireframe===!1,Ot=!!E.normalMap,Zt=!!E.displacementMap,nn=!!E.emissiveMap,Lt=!!E.metalnessMap,Gt=!!E.roughnessMap,j=E.anisotropy>0,ln=E.clearcoat>0,Tt=E.dispersion>0,D=E.retroreflectivity>0,M=E.iridescence>0,Q=E.sheen>0,ce=E.transmission>0,he=j&&!!E.anisotropyMap,Ee=ln&&!!E.clearcoatMap,Ae=ln&&!!E.clearcoatNormalMap,pe=ln&&!!E.clearcoatRoughnessMap,ge=M&&!!E.iridescenceMap,Ce=M&&!!E.iridescenceThicknessMap,Ke=Q&&!!E.sheenColorMap,Pe=Q&&!!E.sheenRoughnessMap,Te=!!E.specularMap,$e=!!E.specularColorMap,et=!!E.specularIntensityMap,it=ce&&!!E.transmissionMap,W=ce&&!!E.thicknessMap,be=!!E.gradientMap,me=!!E.alphaMap,Re=E.alphaTest>0,Ue=!!E.alphaHash,ve=!!E.extensions;let Je=Vi;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=s.toneMapping);const qe={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:ke,fragmentShader:ze,defines:E.defines,customVertexShaderID:He,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:at,matcap:Ft,envMap:dt,envMapMode:dt&&J.mapping,envMapCubeUVHeight:$,aoMap:xt,lightMap:Nt,bumpMap:ft,normalMap:Ot,displacementMap:Zt,emissiveMap:nn,normalMapObjectSpace:Ot&&E.normalMapType===l_,normalMapTangentSpace:Ot&&E.normalMapType===sf,packedNormalMap:Ot&&E.normalMapType===sf&&YE(E.normalMap.format),metalnessMap:Lt,roughnessMap:Gt,anisotropy:j,anisotropyMap:he,clearcoat:ln,clearcoatMap:Ee,clearcoatNormalMap:Ae,clearcoatRoughnessMap:pe,dispersion:Tt,retroreflection:D,iridescence:M,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:Q,sheenColorMap:Ke,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:$e,specularIntensityMap:et,transmission:ce,transmissionMap:it,thicknessMap:W,gradientMap:be,opaque:E.transparent===!1&&E.blending===eo&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:Re,alphaHash:Ue,combine:E.combine,mapUv:at&&w(E.map.channel),aoMapUv:xt&&w(E.aoMap.channel),lightMapUv:Nt&&w(E.lightMap.channel),bumpMapUv:ft&&w(E.bumpMap.channel),normalMapUv:Ot&&w(E.normalMap.channel),displacementMapUv:Zt&&w(E.displacementMap.channel),emissiveMapUv:nn&&w(E.emissiveMap.channel),metalnessMapUv:Lt&&w(E.metalnessMap.channel),roughnessMapUv:Gt&&w(E.roughnessMap.channel),anisotropyMapUv:he&&w(E.anisotropyMap.channel),clearcoatMapUv:Ee&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&w(E.sheenRoughnessMap.channel),specularMapUv:Te&&w(E.specularMap.channel),specularColorMapUv:$e&&w(E.specularColorMap.channel),specularIntensityMapUv:et&&w(E.specularIntensityMap.channel),transmissionMapUv:it&&w(E.transmissionMap.channel),thicknessMapUv:W&&w(E.thicknessMap.channel),alphaMapUv:me&&w(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ot||j),vertexNormals:!!Y.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(at||me),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Y.attributes.normal===void 0&&Ot===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Me,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Se,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:at&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===It,decodeVideoTextureEmissive:nn&&E.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(E.emissiveMap.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ai,flipSided:E.side===On,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function S(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)b.push(O),b.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(x(b,E),I(b,E),b.push(s.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function x(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numSunLights),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numSunLightShadows),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function I(E,b){u.disableAll(),b.instancing&&u.enable(0),b.instancingColor&&u.enable(1),b.instancingMorph&&u.enable(2),b.matcap&&u.enable(3),b.envMap&&u.enable(4),b.normalMapObjectSpace&&u.enable(5),b.normalMapTangentSpace&&u.enable(6),b.clearcoat&&u.enable(7),b.iridescence&&u.enable(8),b.alphaTest&&u.enable(9),b.vertexColors&&u.enable(10),b.vertexAlphas&&u.enable(11),b.vertexUv1s&&u.enable(12),b.vertexUv2s&&u.enable(13),b.vertexUv3s&&u.enable(14),b.vertexTangents&&u.enable(15),b.anisotropy&&u.enable(16),b.alphaHash&&u.enable(17),b.batching&&u.enable(18),b.dispersion&&u.enable(19),b.retroreflection&&u.enable(24),b.batchingColor&&u.enable(20),b.gradientMap&&u.enable(21),b.packedNormalMap&&u.enable(22),b.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reversedDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),b.numLightProbeGrids>0&&u.enable(22),b.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function H(E){const b=y[E.type];let O;if(b){const B=Oi[b];O=cx.clone(B.uniforms)}else O=E.uniforms;return O}function C(E,b){let O=v.get(b);return O!==void 0?++O.usedTimes:(O=new GE(s,b,E,o),p.push(O),v.set(b,O)),O}function P(E){if(--E.usedTimes===0){const b=p.indexOf(E);p[b]=p[p.length-1],p.pop(),v.delete(E.cacheKey),E.destroy()}}function L(E){f.remove(E)}function U(){f.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:H,acquireProgram:C,releaseProgram:P,releaseShaderCache:L,programs:p,dispose:U}}function KE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function $E(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Qm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,w,R,S,x){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:y,material:w,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:x},s[e]=I):(I.id=g.id,I.object=g,I.geometry=y,I.material=w,I.materialVariant=u(g),I.groupOrder=R,I.renderOrder=g.renderOrder,I.z=S,I.group=x),e++,I}function h(g,y,w,R,S,x,I){I.reversedDepth===!0&&(S=-S);const H=f(g,y,w,R,S,x);w.transmission>0?r.push(H):w.transparent===!0?o.push(H):t.push(H)}function p(g,y,w,R,S,x){const I=f(g,y,w,R,S,x);w.transmission>0?r.unshift(I):w.transparent===!0?o.unshift(I):t.unshift(I)}function v(g,y){t.length>1&&t.sort(g||$E),r.length>1&&r.sort(y||Qm),o.length>1&&o.sort(y||Qm)}function _(){for(let g=e,y=s.length;g<y;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:_,sort:v}}function ZE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new eg,s.set(r,[u])):o>=l.length?(u=new eg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function JE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ne,color:new mt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function QE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ew=0;function tw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nw(s){const e=new JE,t=QE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const o=new ne,l=new $t,u=new $t;function f(p){let v=0,_=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let y=0,w=0,R=0,S=0,x=0,I=0,H=0,C=0,P=0,L=0,U=0,E=0,b=0,O=0;p.sort(tw);for(let z=0,G=p.length;z<G;z++){const k=p[z],Y=k.color,se=k.intensity,ee=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===cs?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=Y.r*se,_+=Y.g*se,g+=Y.b*se;else if(k.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(k.sh.coefficients[$],se);O++}else if(k.isSunLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,N=t.get(k);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[w]=N,r.sunShadowMap[w]=J;const ae=Z.getViewportCount();for(let Se=0;Se<ae;Se++)r.sunShadowMatrix[R+Se]=Z.getMatrix(Se),r.sunShadowCascade[R+Se]=Z._cascadeData[Se];R+=ae,w++}r.sun[y]=$,y++}else if(k.isDirectionalLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,N=t.get(k);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,r.directionalShadow[S]=N,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=k.shadow.matrix,P++}r.directional[S]=$,S++}else if(k.isSpotLight){const $=e.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(Y).multiplyScalar(se),$.distance=ee,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,r.spot[I]=$;const Z=k.shadow;if(k.map&&(r.spotLightMap[E]=k.map,E++,Z.updateMatrices(k),k.castShadow&&b++),r.spotLightMatrix[I]=Z.matrix,k.castShadow){const N=t.get(k);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,r.spotShadow[I]=N,r.spotShadowMap[I]=J,U++}I++}else if(k.isRectAreaLight){const $=e.get(k);$.color.copy(Y).multiplyScalar(se),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),r.rectArea[H]=$,H++}else if(k.isPointLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){const Z=k.shadow,N=t.get(k);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,r.pointShadow[x]=N,r.pointShadowMap[x]=J,r.pointShadowMatrix[x]=k.shadow.matrix,L++}r.point[x]=$,x++}else if(k.isHemisphereLight){const $=e.get(k);$.skyColor.copy(k.color).multiplyScalar(se),$.groundColor.copy(k.groundColor).multiplyScalar(se),r.hemi[C]=$,C++}}H>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const B=r.hash;(B.sunLength!==y||B.directionalLength!==S||B.pointLength!==x||B.spotLength!==I||B.rectAreaLength!==H||B.hemiLength!==C||B.numSunShadows!==w||B.numDirectionalShadows!==P||B.numPointShadows!==L||B.numSpotShadows!==U||B.numSpotMaps!==E||B.numLightProbes!==O)&&(r.sun.length=y,r.directional.length=S,r.spot.length=I,r.rectArea.length=H,r.point.length=x,r.hemi.length=C,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.spotLightMatrix.length=U+E-b,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=O,B.sunLength=y,B.directionalLength=S,B.pointLength=x,B.spotLength=I,B.rectAreaLength=H,B.hemiLength=C,B.numSunShadows=w,B.numDirectionalShadows=P,B.numPointShadows=L,B.numSpotShadows=U,B.numSpotMaps=E,B.numLightProbes=O,r.version=ew++)}function h(p,v){let _=0,g=0,y=0,w=0,R=0,S=0;const x=v.matrixWorldInverse;for(let I=0,H=p.length;I<H;I++){const C=p[I];if(C.isSunLight){const P=r.sun[_];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(x),_++}else if(C.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),g++}else if(C.isSpotLight){const P=r.spot[w];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),w++}else if(C.isRectAreaLight){const P=r.rectArea[R];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(x),u.identity(),l.copy(C.matrixWorld),l.premultiply(x),u.extractRotation(l),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(x),y++}else if(C.isHemisphereLight){const P=r.hemi[S];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(x),S++}}}return{setup:f,setupView:h,state:r}}function tg(s){const e=new nw(s),t=[],r=[],o=[];function l(g){_.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function iw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new tg(s),e.set(o,[f])):l>=u.length?(f=new tg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aw=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],ow=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],ng=new $t,Za=new ne,vd=new ne;function lw(s,e,t){let r=new Tf;const o=new _t,l=new _t,u=new Kt,f=new hx,h=new px,p={},v=t.maxTextureSize,_={[os]:On,[On]:os,[Ai]:Ai},g=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:rw,fragmentShader:sw}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const w=new Xn;w.setAttribute("position",new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ct(w,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let x=this.type;this.render=function(L,U,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===sg&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kl);const b=s.getRenderTarget(),O=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),z=s.state;z.setBlending(or),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=x!==this.type;G&&U.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(Y=>Y.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,Y=L.length;k<Y;k++){const se=L[k],ee=se.shadow;if(ee===void 0){rt("WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const J=ee.getFrameExtents();o.multiply(J),l.copy(ee.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/J.x),o.x=l.x*J.x,ee.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/J.y),o.y=l.y*J.y,ee.mapSize.y=l.y));const $=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=$,ee.map===null||G===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Ja){if(se.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Ci(o.x,o.y,{format:cs,type:Gi,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),ee.map.texture.name=se.name+".shadowMap",ee.map.depthTexture=new oo(o.x,o.y,ki),ee.map.depthTexture.name=se.name+".shadowMapDepth",ee.map.depthTexture.format=ur,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=En,ee.map.depthTexture.magFilter=En}else se.isPointLight?(ee.map=new kg(o.x),ee.map.depthTexture=new ox(o.x,Hi)):(ee.map=new Ci(o.x,o.y),ee.map.depthTexture=new oo(o.x,o.y,Hi)),ee.map.depthTexture.name=se.name+".shadowMap",ee.map.depthTexture.format=ur,this.type===kl?(ee.map.depthTexture.compareFunction=$?yf:Sf,ee.map.depthTexture.minFilter=Ln,ee.map.depthTexture.magFilter=Ln):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=En,ee.map.depthTexture.magFilter=En);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const Z=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();se.isPointLight!==!0&&ee.updateMatrices(se,E);for(let N=0;N<Z;N++){const ae=ee.getCamera(N);if(se.isPointLight){const Se=ee.camera,ke=ee.matrix,ze=se.distance||Se.far;ze!==Se.far&&(Se.far=ze,Se.updateProjectionMatrix()),Za.setFromMatrixPosition(se.matrixWorld),Se.position.copy(Za),vd.copy(Se.position),vd.add(aw[N]),Se.up.copy(ow[N]),Se.lookAt(vd),Se.updateMatrixWorld(),ke.makeTranslation(-Za.x,-Za.y,-Za.z),ng.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(ng,Se.coordinateSystem,Se.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,N),s.clear();else{N===0&&(s.setRenderTarget(ee.map),s.clear());const Se=ee.getViewport(N);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),z.viewport(u)}r=ee.getFrustum(N),C(U,E,ae,se,this.type)}ee.isPointLightShadow!==!0&&this.type===Ja&&I(ee,E),ee.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(b,O,B)};function I(L,U){const E=e.update(R);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null?L.mapPass=new Ci(o.x,o.y,{format:cs,type:Gi}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(U,null,E,g,R,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value.set(L.map.width,L.map.height),y.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(U,null,E,y,R,null)}function H(L,U,E,b){let O=null;const B=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)O=B;else if(O=E.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const z=O.uuid,G=U.uuid;let k=p[z];k===void 0&&(k={},p[z]=k);let Y=k[G];Y===void 0&&(Y=O.clone(),k[G]=Y,U.addEventListener("dispose",P)),O=Y}if(O.visible=U.visible,O.wireframe=U.wireframe,b===Ja?O.side=U.shadowSide!==null?U.shadowSide:U.side:O.side=U.shadowSide!==null?U.shadowSide:_[U.side],O.alphaMap=U.alphaMap,O.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,O.map=U.map,O.clipShadows=U.clipShadows,O.clippingPlanes=U.clippingPlanes,O.clipIntersection=U.clipIntersection,O.displacementMap=U.displacementMap,O.displacementScale=U.displacementScale,O.displacementBias=U.displacementBias,O.wireframeLinewidth=U.wireframeLinewidth,O.linewidth=U.linewidth,E.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const z=s.properties.get(O);z.light=E}return O}function C(L,U,E,b,O){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&O===Ja)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const G=e.update(L),k=L.material;if(Array.isArray(k)){const Y=G.groups;for(let se=0,ee=Y.length;se<ee;se++){const J=Y[se],$=k[J.materialIndex];if($&&$.visible){const Z=H(L,$,b,O);L.onBeforeShadow(s,L,U,E,G,Z,J),s.renderBufferDirect(E,null,G,Z,L,J),L.onAfterShadow(s,L,U,E,G,Z,J)}}}else if(k.visible){const Y=H(L,k,b,O);L.onBeforeShadow(s,L,U,E,G,Y,null),s.renderBufferDirect(E,null,G,Y,L,null),L.onAfterShadow(s,L,U,E,G,Y,null)}}const z=L.children;for(let G=0,k=z.length;G<k;G++)C(z[G],U,E,b,O)}function P(L){L.target.removeEventListener("dispose",P);for(const E in p){const b=p[E],O=L.target.uuid;O in b&&(b[O].dispose(),delete b[O])}}}function cw(s,e){function t(){let W=!1;const be=new Kt;let me=null;const Re=new Kt(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!W&&(s.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,ve,Je,qe,At){At===!0&&(Ue*=qe,ve*=qe,Je*=qe),be.set(Ue,ve,Je,qe),Re.equals(be)===!1&&(s.clearColor(Ue,ve,Je,qe),Re.copy(be))},reset:function(){W=!1,me=null,Re.set(-1,0,0,0)}}}function r(){let W=!1,be=!1,me=null,Re=null,Ue=null;return{setReversed:function(ve){if(be!==ve){const Je=e.get("EXT_clip_control");ve?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),be=ve;const qe=Ue;Ue=null,this.setClear(qe)}},getReversed:function(){return be},setTest:function(ve){ve?de(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ve){me!==ve&&!W&&(s.depthMask(ve),me=ve)},setFunc:function(ve){if(be&&(ve=S_[ve]),Re!==ve){switch(ve){case xd:s.depthFunc(s.NEVER);break;case Sd:s.depthFunc(s.ALWAYS);break;case yd:s.depthFunc(s.LESS);break;case io:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case Ed:s.depthFunc(s.GEQUAL);break;case wd:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Ue!==ve&&(Ue=ve,be&&(ve=1-ve),s.clearDepth(ve))},reset:function(){W=!1,me=null,Re=null,Ue=null,be=!1}}}function o(){let W=!1,be=null,me=null,Re=null,Ue=null,ve=null,Je=null,qe=null,At=null;return{setTest:function(Et){W||(Et?de(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Et){be!==Et&&!W&&(s.stencilMask(Et),be=Et)},setFunc:function(Et,Sn,ti){(me!==Et||Re!==Sn||Ue!==ti)&&(s.stencilFunc(Et,Sn,ti),me=Et,Re=Sn,Ue=ti)},setOp:function(Et,Sn,ti){(ve!==Et||Je!==Sn||qe!==ti)&&(s.stencilOp(Et,Sn,ti),ve=Et,Je=Sn,qe=ti)},setLocked:function(Et){W=Et},setClear:function(Et){At!==Et&&(s.clearStencil(Et),At=Et)},reset:function(){W=!1,be=null,me=null,Re=null,Ue=null,ve=null,Je=null,qe=null,At=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},_={},g={},y=new WeakMap,w=[],R=null,S=!1,x=null,I=null,H=null,C=null,P=null,L=null,U=null,E=new mt(0,0,0),b=0,O=!1,B=null,z=null,G=null,k=null,Y=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,J=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),ee=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ee=J>=2);let Z=null,N={};const ae=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),ke=new Kt().fromArray(ae),ze=new Kt().fromArray(Se);function He(W,be,me,Re){const Ue=new Uint8Array(4),ve=s.createTexture();s.bindTexture(W,ve),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<me;Je++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(be+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return ve}const oe={};oe[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(s.DEPTH_TEST),u.setFunc(io),ft(!1),Ot(rm),de(s.CULL_FACE),xt(or);function de(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Me(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Ye(W,be){return g[W]!==be?(s.bindFramebuffer(W,be),g[W]=be,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=be),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Fe(W,be){let me=w,Re=!1;if(W){me=y.get(be),me===void 0&&(me=[],y.set(be,me));const Ue=W.textures;if(me.length!==Ue.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Je=Ue.length;ve<Je;ve++)me[ve]=s.COLOR_ATTACHMENT0+ve;me.length=Ue.length,Re=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Re=!0);Re&&s.drawBuffers(me)}function at(W){return R!==W?(s.useProgram(W),R=W,!0):!1}const Ft={[Zs]:s.FUNC_ADD,[Vv]:s.FUNC_SUBTRACT,[Hv]:s.FUNC_REVERSE_SUBTRACT};Ft[Gv]=s.MIN,Ft[Wv]=s.MAX;const dt={[Xv]:s.ZERO,[qv]:s.ONE,[Yv]:s.SRC_COLOR,[ag]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Zv]:s.DST_COLOR,[Kv]:s.DST_ALPHA,[jv]:s.ONE_MINUS_SRC_COLOR,[og]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[$v]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(W,be,me,Re,Ue,ve,Je,qe,At,Et){if(W===or){S===!0&&(Me(s.BLEND),S=!1);return}if(S===!1&&(de(s.BLEND),S=!0),W!==zv){if(W!==x||Et!==O){if((I!==Zs||P!==Zs)&&(s.blendEquation(s.FUNC_ADD),I=Zs,P=Zs),Et)switch(W){case eo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sm:s.blendFunc(s.ONE,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case om:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",W);break}else switch(W){case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case am:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case om:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",W);break}H=null,C=null,L=null,U=null,E.set(0,0,0),b=0,x=W,O=Et}return}Ue=Ue||be,ve=ve||me,Je=Je||Re,(be!==I||Ue!==P)&&(s.blendEquationSeparate(Ft[be],Ft[Ue]),I=be,P=Ue),(me!==H||Re!==C||ve!==L||Je!==U)&&(s.blendFuncSeparate(dt[me],dt[Re],dt[ve],dt[Je]),H=me,C=Re,L=ve,U=Je),(qe.equals(E)===!1||At!==b)&&(s.blendColor(qe.r,qe.g,qe.b,At),E.copy(qe),b=At),x=W,O=!1}function Nt(W,be){W.side===Ai?Me(s.CULL_FACE):de(s.CULL_FACE);let me=W.side===On;be&&(me=!me),ft(me),W.blending===eo&&W.transparent===!1?xt(or):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Re=W.stencilWrite;f.setTest(Re),Re&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),nn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(W){B!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),B=W)}function Ot(W){W!==kv?(de(s.CULL_FACE),W!==z&&(W===rm?s.cullFace(s.BACK):W===Bv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),z=W}function Zt(W){W!==G&&(ee&&s.lineWidth(W),G=W)}function nn(W,be,me){W?(de(s.POLYGON_OFFSET_FILL),(k!==be||Y!==me)&&(k=be,Y=me,u.getReversed()&&(be=-be),s.polygonOffset(be,me))):Me(s.POLYGON_OFFSET_FILL)}function Lt(W){W?de(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=s.TEXTURE0+se-1),Z!==W&&(s.activeTexture(W),Z=W)}function j(W,be,me){me===void 0&&(Z===null?me=s.TEXTURE0+se-1:me=Z);let Re=N[me];Re===void 0&&(Re={type:void 0,texture:void 0},N[me]=Re),(Re.type!==W||Re.texture!==be)&&(Z!==me&&(s.activeTexture(me),Z=me),s.bindTexture(W,be||oe[W]),Re.type=W,Re.texture=be)}function ln(){const W=N[Z];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Tt(){try{s.compressedTexImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function M(){try{s.texSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Q(){try{s.texSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Ee(){try{s.texStorage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Ae(){try{s.texStorage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function pe(){try{s.texImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ge(){try{s.texImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Ce(W){return _[W]!==void 0?_[W]:s.getParameter(W)}function Ke(W,be){_[W]!==be&&(s.pixelStorei(W,be),_[W]=be)}function Pe(W){ke.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ke.copy(W))}function Te(W){ze.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ze.copy(W))}function $e(W,be){let me=p.get(be);me===void 0&&(me=new WeakMap,p.set(be,me));let Re=me.get(W);Re===void 0&&(Re=s.getUniformBlockIndex(be,W.name),me.set(W,Re))}function et(W,be){const Re=p.get(be).get(W);h.get(be)!==Re&&(s.uniformBlockBinding(be,Re,W.__bindingPointIndex),h.set(be,Re))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},Z=null,N={},g={},y=new WeakMap,w=[],R=null,S=!1,x=null,I=null,H=null,C=null,P=null,L=null,U=null,E=new mt(0,0,0),b=0,O=!1,B=null,z=null,G=null,k=null,Y=null,ke.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:Me,bindFramebuffer:Ye,drawBuffers:Fe,useProgram:at,setBlending:xt,setMaterial:Nt,setFlipSided:ft,setCullFace:Ot,setLineWidth:Zt,setPolygonOffset:nn,setScissorTest:Lt,activeTexture:Gt,bindTexture:j,unbindTexture:ln,compressedTexImage2D:Tt,compressedTexImage3D:D,texImage2D:pe,texImage3D:ge,pixelStorei:Ke,getParameter:Ce,updateUBOMapping:$e,uniformBlockBinding:et,texStorage2D:Ee,texStorage3D:Ae,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:ce,compressedTexSubImage3D:he,scissor:Pe,viewport:Te,reset:it}}function uw(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _t,v=new WeakMap,_=new Set;let g;const y=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,M){return w?new OffscreenCanvas(D,M):jl("canvas")}function S(D,M,Q){let ce=1;const he=Tt(D);if((he.width>Q||he.height>Q)&&(ce=Q/Math.max(he.width,he.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ee=Math.floor(ce*he.width),Ae=Math.floor(ce*he.height);g===void 0&&(g=R(Ee,Ae));const pe=M?R(Ee,Ae):g;return pe.width=Ee,pe.height=Ae,pe.getContext("2d").drawImage(D,0,0,Ee,Ae),rt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Ae+")."),pe}else return"data"in D&&rt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function x(D){return D.generateMipmaps}function I(D){s.generateMipmap(D)}function H(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(D,M,Q,ce,he,Ee=!1){if(D!==null){if(s[D]!==void 0)return s[D];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ae;ce&&(Ae=e.get("EXT_texture_norm16"),Ae||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=M;if(M===s.RED&&(Q===s.FLOAT&&(pe=s.R32F),Q===s.HALF_FLOAT&&(pe=s.R16F),Q===s.UNSIGNED_BYTE&&(pe=s.R8),Q===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.R16_EXT),Q===s.SHORT&&Ae&&(pe=Ae.R16_SNORM_EXT)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.R8UI),Q===s.UNSIGNED_SHORT&&(pe=s.R16UI),Q===s.UNSIGNED_INT&&(pe=s.R32UI),Q===s.BYTE&&(pe=s.R8I),Q===s.SHORT&&(pe=s.R16I),Q===s.INT&&(pe=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(pe=s.RG32F),Q===s.HALF_FLOAT&&(pe=s.RG16F),Q===s.UNSIGNED_BYTE&&(pe=s.RG8),Q===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RG16_EXT),Q===s.SHORT&&Ae&&(pe=Ae.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RG8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RG16UI),Q===s.UNSIGNED_INT&&(pe=s.RG32UI),Q===s.BYTE&&(pe=s.RG8I),Q===s.SHORT&&(pe=s.RG16I),Q===s.INT&&(pe=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),Q===s.UNSIGNED_INT&&(pe=s.RGB32UI),Q===s.BYTE&&(pe=s.RGB8I),Q===s.SHORT&&(pe=s.RGB16I),Q===s.INT&&(pe=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),Q===s.UNSIGNED_INT&&(pe=s.RGBA32UI),Q===s.BYTE&&(pe=s.RGBA8I),Q===s.SHORT&&(pe=s.RGBA16I),Q===s.INT&&(pe=s.RGBA32I)),M===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGB16_EXT),Q===s.SHORT&&Ae&&(pe=Ae.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),M===s.RGBA){const ge=Ee?Yl:Mt.getTransfer(he);Q===s.FLOAT&&(pe=s.RGBA32F),Q===s.HALF_FLOAT&&(pe=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(pe=ge===It?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ae&&(pe=Ae.RGBA16_EXT),Q===s.SHORT&&Ae&&(pe=Ae.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(D,M){let Q;return D?M===null||M===Hi||M===so?Q=s.DEPTH24_STENCIL8:M===ki?Q=s.DEPTH32F_STENCIL8:M===ro&&(Q=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===so?Q=s.DEPTH_COMPONENT24:M===ki?Q=s.DEPTH_COMPONENT32F:M===ro&&(Q=s.DEPTH_COMPONENT16),Q}function L(D,M){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==En&&D.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function U(D){const M=D.target;M.removeEventListener("dispose",U),b(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&_.delete(M)}function E(D){const M=D.target;M.removeEventListener("dispose",E),B(M)}function b(D){const M=r.get(D);if(M.__webglInit===void 0)return;const Q=D.source,ce=y.get(Q);if(ce){const he=ce[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(D),Object.keys(ce).length===0&&y.delete(Q)}r.remove(D)}function O(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const Q=D.source,ce=y.get(Q);delete ce[M.__cacheKey],u.memory.textures--}function B(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(M.__webglFramebuffer[ce]))for(let he=0;he<M.__webglFramebuffer[ce].length;he++)s.deleteFramebuffer(M.__webglFramebuffer[ce][he]);else s.deleteFramebuffer(M.__webglFramebuffer[ce]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ce])}else{if(Array.isArray(M.__webglFramebuffer))for(let ce=0;ce<M.__webglFramebuffer.length;ce++)s.deleteFramebuffer(M.__webglFramebuffer[ce]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ce=0;ce<M.__webglColorRenderbuffer.length;ce++)M.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ce]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=D.textures;for(let ce=0,he=Q.length;ce<he;ce++){const Ee=r.get(Q[ce]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove(Q[ce])}r.remove(D)}let z=0;function G(){z=0}function k(){return z}function Y(D){z=D}function se(){const D=z;return D>=o.maxTextures&&rt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+o.maxTextures),z+=1,D}function ee(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function J(D,M){const Q=r.get(D);if(D.isVideoTexture&&j(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const ce=D.image;if(ce===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Q,D,M);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function $(D,M){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Me(Q,D,M);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function Z(D,M){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Me(Q,D,M);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function N(D,M){const Q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){Ye(Q,D,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}const ae={[Ad]:s.REPEAT,[ar]:s.CLAMP_TO_EDGE,[bd]:s.MIRRORED_REPEAT},Se={[En]:s.NEAREST,[a_]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[Gu]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},ke={[u_]:s.NEVER,[m_]:s.ALWAYS,[d_]:s.LESS,[Sf]:s.LEQUAL,[f_]:s.EQUAL,[yf]:s.GEQUAL,[h_]:s.GREATER,[p_]:s.NOTEQUAL};function ze(D,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===Gu||M.magFilter===pl||M.magFilter===ss||M.minFilter===Ln||M.minFilter===Gu||M.minFilter===pl||M.minFilter===ss)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ae[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ae[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ae[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Se[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Se[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===En||M.minFilter!==pl&&M.minFilter!==ss||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function He(D,M){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",U));const ce=M.source;let he=y.get(ce);he===void 0&&(he={},y.set(ce,he));const Ee=ee(M);if(Ee!==D.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),he[Ee].usedTimes++;const Ae=he[D.__cacheKey];Ae!==void 0&&(he[D.__cacheKey].usedTimes--,Ae.usedTimes===0&&O(M)),D.__cacheKey=Ee,D.__webglTexture=he[Ee].texture}return Q}function oe(D,M,Q){return Math.floor(Math.floor(D/Q)/M)}function de(D,M,Q,ce){const Ee=D.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,Q,ce,M.data);else{Ee.sort((Ke,Pe)=>Ke.start-Pe.start);let Ae=0;for(let Ke=1;Ke<Ee.length;Ke++){const Pe=Ee[Ae],Te=Ee[Ke],$e=Pe.start+Pe.count,et=oe(Te.start,M.width,4),it=oe(Pe.start,M.width,4);Te.start<=$e+1&&et===it&&oe(Te.start+Te.count-1,M.width,4)===et?Pe.count=Math.max(Pe.count,Te.start+Te.count-Pe.start):(++Ae,Ee[Ae]=Te)}Ee.length=Ae+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ke=0,Pe=Ee.length;Ke<Pe;Ke++){const Te=Ee[Ke],$e=Math.floor(Te.start/4),et=Math.ceil(Te.count/4),it=$e%M.width,W=Math.floor($e/M.width),be=et,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,it),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,it,W,be,me,Q,ce,M.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function Me(D,M,Q){let ce=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=s.TEXTURE_3D);const he=He(D,M),Ee=M.source;t.bindTexture(ce,D.__webglTexture,s.TEXTURE0+Q);const Ae=r.get(Ee);if(Ee.version!==Ae.__version||he===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),Re=M.colorSpace===Ur?null:Mt.getPrimaries(M.colorSpace),Ue=M.colorSpace===Ur||me===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let ge=S(M.image,!1,o.maxTextureSize);ge=ln(M,ge);const Ce=l.convert(M.format,M.colorSpace),Ke=l.convert(M.type);let Pe=C(M.internalFormat,Ce,Ke,M.normalized,M.colorSpace,M.isVideoTexture);ze(ce,M);let Te;const $e=M.mipmaps,et=M.isVideoTexture!==!0,it=Ae.__version===void 0||he===!0,W=Ee.dataReady,be=L(M,ge);if(M.isDepthTexture)Pe=P(M.format===as,M.type),it&&(et?t.texStorage2D(s.TEXTURE_2D,1,Pe,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Ce,Ke,null));else if(M.isDataTexture)if($e.length>0){et&&it&&t.texStorage2D(s.TEXTURE_2D,be,Pe,$e[0].width,$e[0].height);for(let me=0,Re=$e.length;me<Re;me++)Te=$e[me],et?W&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Ce,Ke,Te.data):t.texImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Ce,Ke,Te.data);M.generateMipmaps=!1}else et?(it&&t.texStorage2D(s.TEXTURE_2D,be,Pe,ge.width,ge.height),W&&de(M,ge,Ce,Ke)):t.texImage2D(s.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Ce,Ke,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){et&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Pe,$e[0].width,$e[0].height,ge.depth);for(let me=0,Re=$e.length;me<Re;me++)if(Te=$e[me],M.format!==Ri)if(Ce!==null)if(et){if(W)if(M.layerUpdates.size>0){const Ue=Im(Te.width,Te.height,M.format,M.type);for(const ve of M.layerUpdates){const Je=Te.data.subarray(ve*Ue/Te.data.BYTES_PER_ELEMENT,(ve+1)*Ue/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ve,Te.width,Te.height,1,Ce,Je)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,Ce,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,ge.depth,0,Te.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,Ce,Ke,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,ge.depth,0,Ce,Ke,Te.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{et&&it&&t.texStorage2D(s.TEXTURE_2D,be,Pe,$e[0].width,$e[0].height);for(let me=0,Re=$e.length;me<Re;me++)Te=$e[me],M.format!==Ri?Ce!==null?et?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Te.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?W&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Te.width,Te.height,Ce,Ke,Te.data):t.texImage2D(s.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Ce,Ke,Te.data)}else if(M.isDataArrayTexture)if(et){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Pe,ge.width,ge.height,ge.depth),W)if(M.layerUpdates.size>0){const me=Im(ge.width,ge.height,M.format,M.type);for(const Re of M.layerUpdates){const Ue=ge.data.subarray(Re*me/ge.data.BYTES_PER_ELEMENT,(Re+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Re,ge.width,ge.height,1,Ce,Ke,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ke,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,Ce,Ke,ge.data);else if(M.isData3DTexture)et?(it&&t.texStorage3D(s.TEXTURE_3D,be,Pe,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ke,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,Ce,Ke,ge.data);else if(M.isFramebufferTexture){if(it)if(et)t.texStorage2D(s.TEXTURE_2D,be,Pe,ge.width,ge.height);else{let me=ge.width,Re=ge.height;for(let Ue=0;Ue<be;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,Pe,me,Re,0,Ce,Ke,null),me>>=1,Re>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),_.add(M),me.onpaint=Re=>{const Ue=Re.changedElements;for(const ve of _)Ue.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Ue=s.RGBA,ve=s.RGBA,Je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ue,ve,Je,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if($e.length>0){if(et&&it){const me=Tt($e[0]);t.texStorage2D(s.TEXTURE_2D,be,Pe,me.width,me.height)}for(let me=0,Re=$e.length;me<Re;me++)Te=$e[me],et?W&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ce,Ke,Te):t.texImage2D(s.TEXTURE_2D,me,Pe,Ce,Ke,Te);M.generateMipmaps=!1}else if(et){if(it){const me=Tt(ge);t.texStorage2D(s.TEXTURE_2D,be,Pe,me.width,me.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Ke,ge)}else t.texImage2D(s.TEXTURE_2D,0,Pe,Ce,Ke,ge);x(M)&&I(ce),Ae.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ye(D,M,Q){if(M.image.length!==6)return;const ce=He(D,M),he=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Q);const Ee=r.get(he);if(he.version!==Ee.__version||ce===!0){t.activeTexture(s.TEXTURE0+Q);const Ae=Mt.getPrimaries(Mt.workingColorSpace),pe=M.colorSpace===Ur?null:Mt.getPrimaries(M.colorSpace),ge=M.colorSpace===Ur||Ae===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ke=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let ve=0;ve<6;ve++)!Ce&&!Ke?Pe[ve]=S(M.image[ve],!0,o.maxCubemapSize):Pe[ve]=Ke?M.image[ve].image:M.image[ve],Pe[ve]=ln(M,Pe[ve]);const Te=Pe[0],$e=l.convert(M.format,M.colorSpace),et=l.convert(M.type),it=C(M.internalFormat,$e,et,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,be=Ee.__version===void 0||ce===!0,me=he.dataReady;let Re=L(M,Te);ze(s.TEXTURE_CUBE_MAP,M);let Ue;if(Ce){W&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,it,Te.width,Te.height);for(let ve=0;ve<6;ve++){Ue=Pe[ve].mipmaps;for(let Je=0;Je<Ue.length;Je++){const qe=Ue[Je];M.format!==Ri?$e!==null?W?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,0,0,qe.width,qe.height,$e,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,it,qe.width,qe.height,0,qe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,0,0,qe.width,qe.height,$e,et,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je,it,qe.width,qe.height,0,$e,et,qe.data)}}}else{if(Ue=M.mipmaps,W&&be){Ue.length>0&&Re++;const ve=Tt(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,it,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ke){W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe[ve].width,Pe[ve].height,$e,et,Pe[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,Pe[ve].width,Pe[ve].height,0,$e,et,Pe[ve].data);for(let Je=0;Je<Ue.length;Je++){const At=Ue[Je].image[ve].image;W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,0,0,At.width,At.height,$e,et,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,it,At.width,At.height,0,$e,et,At.data)}}else{W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,$e,et,Pe[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,it,$e,et,Pe[ve]);for(let Je=0;Je<Ue.length;Je++){const qe=Ue[Je];W?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,0,0,$e,et,qe.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Je+1,it,$e,et,qe.image[ve])}}}x(M)&&I(s.TEXTURE_CUBE_MAP),Ee.__version=he.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Fe(D,M,Q,ce,he,Ee){const Ae=l.convert(Q.format,Q.colorSpace),pe=l.convert(Q.type),ge=C(Q.internalFormat,Ae,pe,Q.normalized,Q.colorSpace),Ce=r.get(M),Ke=r.get(Q);if(Ke.__renderTarget=M,!Ce.__hasExternalTextures){const Pe=Math.max(1,M.width>>Ee),Te=Math.max(1,M.height>>Ee);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,ge,Pe,Te,M.depth,0,Ae,pe,null):t.texImage2D(he,Ee,ge,Pe,Te,0,Ae,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,he,Ke.__webglTexture,0,Lt(M)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,he,Ke.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(D,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const ce=M.depthTexture,he=ce&&ce.isDepthTexture?ce.type:null,Ee=P(M.stencilBuffer,he),Ae=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(M),Ee,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(M),Ee,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,D)}else{const ce=M.textures;for(let he=0;he<ce.length;he++){const Ee=ce[he],Ae=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),ge=C(Ee.internalFormat,Ae,pe,Ee.normalized,Ee.colorSpace);Gt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(M),ge,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(M),ge,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ge,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(D,M,Q){const ce=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ce){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=l.convert(M.depthTexture.format),Ke=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===ur?Pe=s.DEPTH_COMPONENT24:M.depthTexture.format===as&&(Pe=s.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Pe,M.width,M.height,0,Ce,Ke,null)}}else J(M.depthTexture,0);const Ee=he.__webglTexture,Ae=Lt(M),pe=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,ge=M.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===ur)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else if(M.depthTexture.format===as)Gt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ee,0,Ae):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(D){const M=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ce=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ce){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ce.removeEventListener("dispose",he)};ce.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=ce}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let ce=0;ce<6;ce++)Ft(M.__webglFramebuffer[ce],D,ce);else{const ce=D.texture.mipmaps;ce&&ce.length>0?Ft(M.__webglFramebuffer[0],D,0):Ft(M.__webglFramebuffer,D,0)}else if(Q){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]===void 0)M.__webglDepthbuffer[ce]=s.createRenderbuffer(),at(M.__webglDepthbuffer[ce],D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ee)}}else{const ce=D.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),at(M.__webglDepthbuffer,D,!1);else{const he=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(D,M,Q){const ce=r.get(D);M!==void 0&&Fe(ce.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&dt(D)}function Nt(D){const M=D.texture,Q=r.get(D),ce=r.get(M);D.addEventListener("dispose",E);const he=D.textures,Ee=D.isWebGLCubeRenderTarget===!0,Ae=he.length>1;if(Ae||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=M.version,u.memory.textures++),Ee){Q.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[pe]=[];for(let ge=0;ge<M.mipmaps.length;ge++)Q.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else Q.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)Q.__webglFramebuffer[pe]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let pe=0,ge=he.length;pe<ge;pe++){const Ce=r.get(he[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&Gt(D)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];Q.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const Ce=l.convert(ge.format,ge.colorSpace),Ke=l.convert(ge.type),Pe=C(ge.internalFormat,Ce,Ke,ge.normalized,ge.colorSpace,D.isXRRenderTarget===!0),Te=Lt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Pe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Q.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),at(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),ze(s.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Fe(Q.__webglFramebuffer[pe][ge],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Fe(Q.__webglFramebuffer[pe],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(M)&&I(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,ge=he.length;pe<ge;pe++){const Ce=he[pe],Ke=r.get(Ce);let Pe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ke.__webglTexture),ze(Pe,Ce),Fe(Q.__webglFramebuffer,D,Ce,s.COLOR_ATTACHMENT0+pe,Pe,0),x(Ce)&&I(Pe)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,ce.__webglTexture),ze(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Fe(Q.__webglFramebuffer[ge],D,M,s.COLOR_ATTACHMENT0,pe,ge);else Fe(Q.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,pe,0);x(M)&&I(pe),t.unbindTexture()}D.depthBuffer&&dt(D)}function ft(D){const M=D.textures;for(let Q=0,ce=M.length;Q<ce;Q++){const he=M[Q];if(x(he)){const Ee=H(D),Ae=r.get(he).__webglTexture;t.bindTexture(Ee,Ae),I(Ee),t.unbindTexture()}}}const Ot=[],Zt=[];function nn(D){if(D.samples>0){if(Gt(D)===!1){const M=D.textures,Q=D.width,ce=D.height;let he=s.COLOR_BUFFER_BIT;const Ee=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=r.get(D),pe=M.length>1;if(pe)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ge=D.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);const Ke=r.get(M[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,Q,ce,0,0,Q,ce,he,s.NEAREST),h===!0&&(Ot.length=0,Zt.length=0,Ot.push(s.COLOR_ATTACHMENT0+Ce),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(Ot.push(Ee),Zt.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ce]);const Ke=r.get(M[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&h){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Lt(D){return Math.min(o.maxSamples,D.samples)}function Gt(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function j(D){const M=u.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function ln(D,M){const Q=D.colorSpace,ce=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==ql&&Q!==Ur&&(Mt.getTransfer(Q)===It?(ce!==Ri||he!==ei)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",Q)),M}function Tt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=G,this.getTextureUnits=k,this.setTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=xt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dw(s,e){function t(r,o=Ur){let l;const u=Mt.getTransfer(o);if(r===ei)return s.UNSIGNED_BYTE;if(r===mf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_g)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===gg)return s.BYTE;if(r===vg)return s.SHORT;if(r===ro)return s.UNSIGNED_SHORT;if(r===pf)return s.INT;if(r===Hi)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Gi)return s.HALF_FLOAT;if(r===Sg)return s.ALPHA;if(r===yg)return s.RGB;if(r===Ri)return s.RGBA;if(r===ur)return s.DEPTH_COMPONENT;if(r===as)return s.DEPTH_STENCIL;if(r===Mg)return s.RED;if(r===vf)return s.RED_INTEGER;if(r===cs)return s.RG;if(r===_f)return s.RG_INTEGER;if(r===xf)return s.RGBA_INTEGER;if(r===Bl||r===zl||r===Vl||r===Hl)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Cd||r===Pd||r===Ld)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nd||r===Dd||r===Id||r===Ud||r===Fd||r===Wl||r===Od)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Nd||r===Dd)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Id)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ud)return l.COMPRESSED_R11_EAC;if(r===Fd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Wl)return l.COMPRESSED_RG11_EAC;if(r===Od)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===kd||r===Bd||r===zd||r===Vd||r===Hd||r===Gd||r===Wd||r===Xd||r===qd||r===Yd||r===jd||r===Kd||r===$d||r===Zd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===kd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jd||r===Qd||r===ef)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Jd)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ef)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tf||r===nf||r===Xl||r===rf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===tf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===nf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===so?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ng(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Pi({vertexShader:fw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new sr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mw extends fs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,_=null,g=null,y=null,w=null;const R=typeof XRWebGLBinding<"u",S=new pw,x={},I=t.getContextAttributes();let H=null,C=null;const P=[],L=[],U=new _t;let E=null,b=null;const O=new Qn;O.viewport=new Kt;const B=new Qn;B.viewport=new Kt;const z=[O,B],G=new Mx;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let de=P[oe];return de===void 0&&(de=new $u,P[oe]=de),de.getTargetRaySpace()},this.getControllerGrip=function(oe){let de=P[oe];return de===void 0&&(de=new $u,P[oe]=de),de.getGripSpace()},this.getHand=function(oe){let de=P[oe];return de===void 0&&(de=new $u,P[oe]=de),de.getHandSpace()};function se(oe){const de=L.indexOf(oe.inputSource);if(de===-1)return;const Me=P[de];Me!==void 0&&(Me.update(oe.inputSource,oe.frame,p||u),Me.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",J);for(let oe=0;oe<P.length;oe++){const de=L[oe];de!==null&&(L[oe]=null,P[oe].disconnect(de))}k=null,Y=null,S.reset();for(const oe in x)delete x[oe];if(e.setRenderTarget(H),y=null,g=null,_=null,o=null,C=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(U.width,U.height,!1),b!==null){const oe=b.camera;oe.fov=b.fov,oe.zoom=b.zoom,oe.updateProjectionMatrix(),b=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(H=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",J),I.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(U),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ye=null,Fe=null;I.depth&&(Fe=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=I.stencil?as:ur,Ye=I.stencil?so:Hi);const at={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(at),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Ci(g.textureWidth,g.textureHeight,{format:Ri,type:ei,depthTexture:new oo(g.textureWidth,g.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Ci(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),He.setContext(o),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(oe){for(let de=0;de<oe.removed.length;de++){const Me=oe.removed[de],Ye=L.indexOf(Me);Ye>=0&&(L[Ye]=null,P[Ye].disconnect(Me))}for(let de=0;de<oe.added.length;de++){const Me=oe.added[de];let Ye=L.indexOf(Me);if(Ye===-1){for(let at=0;at<P.length;at++)if(at>=L.length){L.push(Me),Ye=at;break}else if(L[at]===null){L[at]=Me,Ye=at;break}if(Ye===-1)break}const Fe=P[Ye];Fe&&Fe.connect(Me)}}const $=new ne,Z=new ne;function N(oe,de,Me){$.setFromMatrixPosition(de.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);const Ye=$.distanceTo(Z),Fe=de.projectionMatrix.elements,at=Me.projectionMatrix.elements,Ft=Fe[14]/(Fe[10]-1),dt=Fe[14]/(Fe[10]+1),xt=(Fe[9]+1)/Fe[5],Nt=(Fe[9]-1)/Fe[5],ft=(Fe[8]-1)/Fe[0],Ot=(at[8]+1)/at[0],Zt=Ft*ft,nn=Ft*Ot,Lt=Ye/(-ft+Ot),Gt=Lt*-ft;if(de.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Gt),oe.translateZ(Lt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Fe[10]===-1)oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const j=Ft+Lt,ln=dt+Lt,Tt=Zt-Gt,D=nn+(Ye-Gt),M=xt*dt/ln*j,Q=Nt*dt/ln*j;oe.projectionMatrix.makePerspective(Tt,D,M,Q,j,ln),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ae(oe,de){de===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(de.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let de=oe.near,Me=oe.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Me=S.depthFar)),G.near=B.near=O.near=de,G.far=B.far=O.far=Me,(k!==G.near||Y!==G.far)&&(o.updateRenderState({depthNear:G.near,depthFar:G.far}),k=G.near,Y=G.far),G.layers.mask=oe.layers.mask|6,O.layers.mask=G.layers.mask&-5,B.layers.mask=G.layers.mask&-3;const Ye=oe.parent,Fe=G.cameras;ae(G,Ye);for(let at=0;at<Fe.length;at++)ae(Fe[at],Ye);Fe.length===2?N(G,O,B):G.projectionMatrix.copy(O.projectionMatrix),b===null&&oe.isPerspectiveCamera&&(b={camera:oe,fov:oe.fov,zoom:oe.zoom}),Se(oe,G,Ye)};function Se(oe,de,Me){Me===null?oe.matrix.copy(de.matrixWorld):(oe.matrix.copy(Me.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(de.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=ia*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(oe){h=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(G)},this.getCameraTexture=function(oe){return x[oe]};let ke=null;function ze(oe,de){if(v=de.getViewerPose(p||u),w=de,v!==null){const Me=v.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Ye=!1;Me.length!==G.cameras.length&&(G.cameras.length=0,Ye=!0);for(let dt=0;dt<Me.length;dt++){const xt=Me[dt];let Nt=null;if(y!==null)Nt=y.getViewport(xt);else{const Ot=_.getViewSubImage(g,xt);Nt=Ot.viewport,dt===0&&(e.setRenderTargetTextures(C,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(C))}let ft=z[dt];ft===void 0&&(ft=new Qn,ft.layers.enable(dt),ft.viewport=new Kt,z[dt]=ft),ft.matrix.fromArray(xt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(xt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),dt===0&&(G.matrix.copy(ft.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ye===!0&&G.cameras.push(ft)}const Fe=o.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const dt=_.getDepthInformation(Me[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(Fe&&Fe.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<Me.length;dt++){const xt=Me[dt].camera;if(xt){let Nt=x[xt];Nt||(Nt=new Ng,x[xt]=Nt);const ft=_.getCameraImage(xt);Nt.sourceTexture=ft}}}}for(let Me=0;Me<P.length;Me++){const Ye=L[Me],Fe=P[Me];Ye!==null&&Fe!==void 0&&Fe.update(Ye,de,p||u)}ke&&ke(oe,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),w=null}const He=new Fg;He.setAnimationLoop(ze),this.setAnimationLoop=function(oe){ke=oe},this.dispose=function(){}}}const gw=new $t,Gg=new lt;Gg.set(-1,0,0,0,1,0,0,0,1);function vw(s,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Dg(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,I,H,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(S,x):x.isMeshLambertMaterial?(l(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),v(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(l(S,x),w(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),R(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?h(S,x,I,H):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===On&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===On&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=e.get(x),H=I.envMap,C=I.envMapRotation;H&&(S.envMap.value=H,S.envMapRotation.value.setFromMatrix4(gw.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Gg),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,I,H){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=H*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function R(S,x){const I=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function _w(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,P){const L=P.program;r.uniformBlockBinding(C,L)}function p(C,P){let L=o[C.id];L===void 0&&(S(C),L=v(C),o[C.id]=L,C.addEventListener("dispose",I));const U=P.program;r.updateUBOMapping(C,U);const E=e.render.frame;l[C.id]!==E&&(g(C),l[C.id]=E)}function v(C){const P=_();C.__bindingPointIndex=P;const L=s.createBuffer(),U=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,U,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function _(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],L=C.uniforms,U=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let E=0,b=L.length;E<b;E++){const O=L[E];if(Array.isArray(O))for(let B=0,z=O.length;B<z;B++)y(O[B],E,B,U);else y(O,E,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,P,L,U){if(R(C,P,L,U)===!0){const E=C.__offset,b=C.value;if(Array.isArray(b)){let O=0;for(let B=0;B<b.length;B++){const z=b[B],G=x(z);w(z,C.__data,O),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(O+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(b,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function w(C,P,L){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,L)}function R(C,P,L,U){const E=C.value,b=P+"_"+L;if(U[b]===void 0)return typeof E=="number"||typeof E=="boolean"?U[b]=E:ArrayBuffer.isView(E)?U[b]=E.slice():U[b]=E.clone(),!0;{const O=U[b];if(typeof E=="number"||typeof E=="boolean"){if(O!==E)return U[b]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(O.equals(E)===!1)return O.copy(E),!0}}return!1}function S(C){const P=C.uniforms;let L=0;const U=16;for(let b=0,O=P.length;b<O;b++){const B=Array.isArray(P[b])?P[b]:[P[b]];for(let z=0,G=B.length;z<G;z++){const k=B[z],Y=Array.isArray(k.value)?k.value:[k.value];for(let se=0,ee=Y.length;se<ee;se++){const J=Y[se],$=x(J),Z=L%U,N=Z%$.boundary,ae=Z+N;L+=N,ae!==0&&U-ae<$.storage&&(L+=U-ae),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=L,L+=$.storage}}}const E=L%U;return E>0&&(L+=U-E),C.__size=L,C.__cache={},this}function x(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",C),P}function I(C){const P=C.target;P.removeEventListener("dispose",I);const L=u.indexOf(P.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function H(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:H}}const xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function Sw(){return Fi===null&&(Fi=new rx(xw,16,16,cs,Gi),Fi.name="DFG_LUT",Fi.minFilter=Ln,Fi.magFilter=Ln,Fi.wrapS=ar,Fi.wrapT=ar,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class yw{constructor(e={}){const{canvas:t=__(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ei}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=y,S=new Set([xf,_f,vf]),x=new Set([ei,Hi,ro,so,mf,gf]),I=new Uint32Array(4),H=new Int32Array(4),C=new ne;let P=null,L=null;const U=[],E=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let B=!1,z=null,G=null,k=null,Y=null;this._outputColorSpace=ui;let se=0,ee=0,J=null,$=-1,Z=null;const N=new Kt,ae=new Kt;let Se=null;const ke=new mt(0);let ze=0,He=t.width,oe=t.height,de=1,Me=null,Ye=null;const Fe=new Kt(0,0,He,oe),at=new Kt(0,0,He,oe);let Ft=!1;const dt=new Tf;let xt=!1,Nt=!1;const ft=new $t,Ot=new ne,Zt=new Kt,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Gt(){return J===null?de:1}let j=r;function ln(A,X){return t.getContext(A,X)}let Tt,D,M,Q,ce,he,Ee,Ae,pe,ge,Ce,Ke,Pe,Te,$e,et,it,W,be,me,Re,Ue,ve;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ff}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),j===null){const X="webgl2";if(j=ln(X,A),j===null)throw ln(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(A){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Ct("WebGLRenderer: "+A.message),A}function Je(){Tt=new SM(j),Tt.init(),Re=new dw(j,Tt),D=new uM(j,Tt,e,Re),M=new cw(j,Tt),D.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),G=j.createFramebuffer(),k=j.createFramebuffer(),Y=j.createFramebuffer(),Q=new EM(j),ce=new KE,he=new uw(j,Tt,M,ce,D,Re,Q),Ee=new xM(O),Ae=new Tx(j),Ue=new lM(j,Ae),pe=new yM(j,Ae,Q,Ue),ge=new TM(j,pe,Ae,Ue,Q),W=new wM(j,D,he),$e=new dM(ce),Ce=new jE(O,Ee,Tt,D,Ue,$e),Ke=new vw(O,ce),Pe=new ZE,Te=new iw(Tt),it=new oM(O,Ee,M,ge,w,h),et=new lw(O,ge,D),ve=new _w(j,Q,D,M),be=new cM(j,Tt,Q),me=new MM(j,Tt,Q),Q.programs=Ce.programs,O.capabilities=D,O.extensions=Tt,O.properties=ce,O.renderLists=Pe,O.shadowMap=et,O.state=M,O.info=Q}R!==ei&&(b=new bM(R,t.width,t.height,f,o,l));const qe=new mw(O,j);this.xr=qe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(He,oe,!1))},this.getSize=function(A){return A.set(He,oe)},this.setSize=function(A,X,ue=!0){if(qe.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}He=A,oe=X,t.width=Math.floor(A*de),t.height=Math.floor(X*de),ue===!0&&(t.style.width=A+"px",t.style.height=X+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(He*de,oe*de).floor()},this.setDrawingBufferSize=function(A,X,ue){He=A,oe=X,de=ue,t.width=Math.floor(A*ue),t.height=Math.floor(X*ue),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(R===ei){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,X,ue,ie){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,X,ue,ie),M.viewport(N.copy(Fe).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,X,ue,ie){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,X,ue,ie),M.scissor(ae.copy(at).multiplyScalar(de).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(A){M.setScissorTest(Ft=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ue=!0){let ie=0;if(A){let te=!1;if(J!==null){const De=J.texture.format;te=S.has(De)}if(te){const De=J.texture.type,Le=x.has(De),Ne=it.getClearColor(),We=it.getClearAlpha(),Ze=Ne.r,ot=Ne.g,ut=Ne.b;Le?(I[0]=Ze,I[1]=ot,I[2]=ut,I[3]=We,j.clearBufferuiv(j.COLOR,0,I)):(H[0]=Ze,H[1]=ot,H[2]=ut,H[3]=We,j.clearBufferiv(j.COLOR,0,H))}else ie|=j.COLOR_BUFFER_BIT}X&&(ie|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),it.dispose(),Pe.dispose(),Te.dispose(),ce.dispose(),Ee.dispose(),ge.dispose(),Ue.dispose(),ve.dispose(),Ce.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",co),qe.removeEventListener("sessionend",uo),Nn.stop()};function At(A){A.preventDefault(),um("WebGLRenderer: Context Lost."),B=!0}function Et(){um("WebGLRenderer: Context Restored."),B=!1;const A=Q.autoReset,X=et.enabled,ue=et.autoUpdate,ie=et.needsUpdate,te=et.type;Je(),Q.autoReset=A,et.enabled=X,et.autoUpdate=ue,et.needsUpdate=ie,et.type=te}function Sn(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ti(A){const X=A.target;X.removeEventListener("dispose",ti),Or(X)}function Or(A){hs(A),ce.remove(A)}function hs(A){const X=ce.get(A).programs;X!==void 0&&(X.forEach(function(ue){Ce.releaseProgram(ue)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ue,ie,te,De){X===null&&(X=nn);const Le=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ne=qt(A,X,ue,ie,te);M.setMaterial(ie,Le);let We=ue.index,Ze=1;if(ie.wireframe===!0){if(We=pe.getWireframeAttribute(ue),We===void 0)return;Ze=2}const ot=ue.drawRange,ut=ue.attributes.position;let Ve=ot.start*Ze,St=(ot.start+ot.count)*Ze;De!==null&&(Ve=Math.max(Ve,De.start*Ze),St=Math.min(St,(De.start+De.count)*Ze)),We!==null?(Ve=Math.max(Ve,0),St=Math.min(St,We.count)):ut!=null&&(Ve=Math.max(Ve,0),St=Math.min(St,ut.count));const Jt=St-Ve;if(Jt<0||Jt===1/0)return;Ue.setup(te,ie,Ne,ue,We);let kt,Pt=be;if(We!==null&&(kt=Ae.get(We),Pt=me,Pt.setIndex(kt)),te.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*Gt()),Pt.setMode(j.LINES)):Pt.setMode(j.TRIANGLES);else if(te.isLine){let cn=ie.linewidth;cn===void 0&&(cn=1),M.setLineWidth(cn*Gt()),te.isLineSegments?Pt.setMode(j.LINES):te.isLineLoop?Pt.setMode(j.LINE_LOOP):Pt.setMode(j.LINE_STRIP)}else te.isPoints?Pt.setMode(j.POINTS):te.isSprite&&Pt.setMode(j.TRIANGLES);if(te.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const cn=te._multiDrawStarts,Oe=te._multiDrawCounts,en=te._multiDrawCount,yt=We?Ae.get(We).bytesPerElement:1,wn=ce.get(ie).currentProgram.getUniforms();for(let ht=0;ht<en;ht++)wn.setValue(j,"_gl_DrawID",ht),Pt.render(cn[ht]/yt,Oe[ht])}else if(te.isInstancedMesh)Pt.renderInstances(Ve,Jt,te.count);else if(ue.isInstancedBufferGeometry){const cn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Oe=Math.min(ue.instanceCount,cn);Pt.renderInstances(Ve,Jt,Oe)}else Pt.render(Ve,Jt)};function kr(A,X,ue,ie){z!==null&&A.isNodeMaterial&&z.setObject(ie,A),xt===!0&&$e.setState(A,ue,!1),A.transparent===!0&&A.side===Ai&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,Vr(A,X,ie),A.side=os,A.needsUpdate=!0,Vr(A,X,ie),A.side=Ai):Vr(A,X,ie)}this.compile=function(A,X,ue=null){ue===null&&(ue=A),z!==null&&z.renderStart(A,X,ue),L=Te.get(ue),L.init(X),E.push(L),ue.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),A!==ue&&A.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),L.setupLights(),z!==null&&z.updateLights(L.state.lightsArray),Nt=this.localClippingEnabled,xt=$e.init(this.clippingPlanes,Nt),xt===!0&&$e.setGlobalState(this.clippingPlanes,X),z!==null&&et.render(L.state.shadowsArray,ue,X);const ie=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const De=te.material;if(De)if(Array.isArray(De))for(let Le=0;Le<De.length;Le++){const Ne=De[Le];kr(Ne,ue,X,te),ie.add(Ne)}else kr(De,ue,X,te),ie.add(De)}),L=E.pop(),z!==null&&z.renderEnd(),ie},this.compileAsync=function(A,X,ue=null){const ie=this.compile(A,X,ue);return new Promise(te=>{function De(){if(ie.forEach(function(Le){const We=ce.get(Le).currentProgram;(We===void 0||We.isReady())&&ie.delete(Le)}),ie.size===0){te(A);return}setTimeout(De,10)}Tt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Br=null;function sc(A){Br&&Br(A)}function co(){Nn.stop()}function uo(){Nn.start()}const Nn=new Fg;Nn.setAnimationLoop(sc),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){Br=A,qe.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},qe.addEventListener("sessionstart",co),qe.addEventListener("sessionend",uo),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(A,X);const ue=qe.enabled===!0&&qe.isPresenting===!0,ie=b!==null&&(J===null||ue)&&b.begin(O,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(X),X=qe.getCamera()),A.isScene===!0&&A.onBeforeRender(O,A,X,J),L=Te.get(A,E.length),L.init(X),L.state.textureUnits=he.getTextureUnits(),E.push(L),ft.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),dt.setFromProjectionMatrix(ft,Bi,X.reversedDepth),Nt=this.localClippingEnabled,xt=$e.init(this.clippingPlanes,Nt),P=Pe.get(A,U.length),P.init(),U.push(P),qe.enabled===!0&&qe.isPresenting===!0){const Le=O.xr.getDepthSensingMesh();Le!==null&&ps(Le,X,-1/0,O.sortObjects)}ps(A,X,0,O.sortObjects),P.finish(),z!==null&&z.updateLights(L.state.lightsArray),O.sortObjects===!0&&P.sort(Me,Ye),Lt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Lt&&it.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&$e.beginShadows();const te=L.state.shadowsArray;if(et.render(te,A,X),xt===!0&&$e.endShadows(),(ie&&b.hasRenderPass())===!1){const Le=P.opaque,Ne=P.transmissive;if(L.setupLights(),X.isArrayCamera){const We=X.cameras;if(Ne.length>0)for(let Ze=0,ot=We.length;Ze<ot;Ze++){const ut=We[Ze];fo(Le,Ne,A,ut)}Lt&&it.render(A);for(let Ze=0,ot=We.length;Ze<ot;Ze++){const ut=We[Ze];ca(P,A,ut,ut.viewport)}}else Ne.length>0&&fo(Le,Ne,A,X),Lt&&it.render(A),ca(P,A,X)}J!==null&&ee===0&&(he.updateMultisampleRenderTarget(J),he.updateRenderTargetMipmap(J)),ie&&b.end(O),A.isScene===!0&&A.onAfterRender(O,A,X),Ue.resetDefaultState(),$=-1,Z=null,E.pop(),E.length>0?(L=E[E.length-1],he.setTextureUnits(L.state.textureUnits),xt===!0&&$e.setGlobalState(O.clippingPlanes,L.state.camera)):L=null,U.pop(),U.length>0?P=U[U.length-1]:P=null,z!==null&&z.renderEnd()};function ps(A,X,ue,ie){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(dt)){ie&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ft);const Le=ge.update(A),Ne=A.material;Ne.visible&&P.push(A,Le,Ne,ue,Zt.z,null,X)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(dt))){const Le=ge.update(A),Ne=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Zt.copy(Le.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(ft)),Array.isArray(Ne)){const We=Le.groups;for(let Ze=0,ot=We.length;Ze<ot;Ze++){const ut=We[Ze],Ve=Ne[ut.materialIndex];Ve&&Ve.visible&&P.push(A,Le,Ve,ue,Zt.z,ut,X)}}else Ne.visible&&P.push(A,Le,Ne,ue,Zt.z,null,X)}}const De=A.children;for(let Le=0,Ne=De.length;Le<Ne;Le++)ps(De[Le],X,ue,ie)}function ca(A,X,ue,ie){const{opaque:te,transmissive:De,transparent:Le}=A;L.setupLightsView(ue),xt===!0&&$e.setGlobalState(O.clippingPlanes,ue),ie&&M.viewport(N.copy(ie)),te.length>0&&zr(te,X,ue),De.length>0&&zr(De,X,ue),Le.length>0&&zr(Le,X,ue),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function fo(A,X,ue,ie){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Ve=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new Ci(1,1,{generateMipmaps:!0,type:Ve?Gi:ei,minFilter:ss,samples:Math.max(4,D.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const De=L.state.transmissionRenderTarget[ie.id],Le=ie.viewport||N;De.setSize(Le.z*O.transmissionResolutionScale,Le.w*O.transmissionResolutionScale);const Ne=O.getRenderTarget(),We=O.getActiveCubeFace(),Ze=O.getActiveMipmapLevel();O.setRenderTarget(De),O.getClearColor(ke),ze=O.getClearAlpha(),ze<1&&O.setClearColor(16777215,.5),O.clear(),Lt&&it.render(ue);const ot=O.toneMapping;O.toneMapping=Vi;const ut=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),xt===!0&&$e.setGlobalState(O.clippingPlanes,ie),zr(A,ue,ie),he.updateMultisampleRenderTarget(De),he.updateRenderTargetMipmap(De),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let St=0,Jt=X.length;St<Jt;St++){const kt=X[St],{object:Pt,geometry:cn,material:Oe,group:en}=kt;if(Oe.side===Ai&&Pt.layers.test(ie.layers)){const yt=Oe.side;Oe.side=On,Oe.needsUpdate=!0,ua(Pt,ue,ie,cn,Oe,en),Oe.side=yt,Oe.needsUpdate=!0,Ve=!0}}Ve===!0&&(he.updateMultisampleRenderTarget(De),he.updateRenderTargetMipmap(De))}O.setRenderTarget(Ne,We,Ze),O.setClearColor(ke,ze),ut!==void 0&&(ie.viewport=ut),O.toneMapping=ot}function zr(A,X,ue){const ie=X.isScene===!0?X.overrideMaterial:null;for(let te=0,De=A.length;te<De;te++){const Le=A[te],{object:Ne,geometry:We,group:Ze}=Le;let ot=Le.material;ot.allowOverride===!0&&ie!==null&&(ot=ie),Ne.layers.test(ue.layers)&&ua(Ne,X,ue,We,ot,Ze)}}function ua(A,X,ue,ie,te,De){z!==null&&te.isNodeMaterial&&z.setObject(A,te),A.onBeforeRender(O,X,ue,ie,te,De),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(O,X,ue,ie,A,De),te.transparent===!0&&te.side===Ai&&te.forceSinglePass===!1?(te.side=On,te.needsUpdate=!0,O.renderBufferDirect(ue,X,ie,te,A,De),te.side=os,te.needsUpdate=!0,O.renderBufferDirect(ue,X,ie,te,A,De),te.side=Ai):O.renderBufferDirect(ue,X,ie,te,A,De),A.onAfterRender(O,X,ue,ie,te,De)}function Vr(A,X,ue){X.isScene!==!0&&(X=nn);const ie=ce.get(A),te=L.state.lights,De=L.state.shadowsArray,Le=te.state.version,Ne=Ce.getParameters(A,te.state,De,X,ue,L.state.lightProbeGridArray),We=Ce.getProgramCacheKey(Ne);let Ze=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ie.fog=X.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Ee.get(A.envMap||ie.environment,ot),ie.envMapRotation=ie.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",ti),Ze=new Map,ie.programs=Ze);let ut=Ze.get(We);if(ut!==void 0){if(ie.currentProgram===ut&&ie.lightsStateVersion===Le)return ho(A,Ne),ut}else Ne.uniforms=Ce.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,ue,Ne),A.onBeforeCompile(Ne,O),ut=Ce.acquireProgram(Ne,We),Ze.set(We,ut),ie.uniforms=Ne.uniforms;const Ve=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=$e.uniform),ho(A,Ne),ie.needsLights=fa(A),ie.lightsStateVersion=Le,ie.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.sunLights.value=te.state.sun,Ve.sunLightShadows.value=te.state.sunShadow,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.sunShadowMatrix.value=te.state.sunShadowMatrix,Ve.sunShadowCascade.value=te.state.sunShadowCascade,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotLightMatrix.value=te.state.spotLightMatrix,Ve.spotLightMap.value=te.state.spotLightMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=ut,ie.uniformsList=null,ut}function da(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Gl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ho(A,X){const ue=ce.get(A);ue.outputColorSpace=X.outputColorSpace,ue.batching=X.batching,ue.batchingColor=X.batchingColor,ue.instancing=X.instancing,ue.instancingColor=X.instancingColor,ue.instancingMorph=X.instancingMorph,ue.skinning=X.skinning,ue.morphTargets=X.morphTargets,ue.morphNormals=X.morphNormals,ue.morphColors=X.morphColors,ue.morphTargetsCount=X.morphTargetsCount,ue.numClippingPlanes=X.numClippingPlanes,ue.numIntersection=X.numClipIntersection,ue.vertexAlphas=X.vertexAlphas,ue.vertexTangents=X.vertexTangents,ue.toneMapping=X.toneMapping}function ac(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(X.matrixWorld);for(let ue=0,ie=A.length;ue<ie;ue++){const te=A[ue];if(te.texture!==null&&te.boundingBox.containsPoint(C))return te}return null}function qt(A,X,ue,ie,te){X.isScene!==!0&&(X=nn),he.resetTextureUnits();const De=X.fog,Le=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?X.environment:null,Ne=J===null?O.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Mt.workingColorSpace,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ze=Ee.get(ie.envMap||Le,We),ot=ie.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ut=!!ue.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!ue.morphAttributes.position,St=!!ue.morphAttributes.normal,Jt=!!ue.morphAttributes.color;let kt=Vi;ie.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(kt=O.toneMapping);const Pt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,cn=Pt!==void 0?Pt.length:0,Oe=ce.get(ie),en=L.state.lights;if(xt===!0&&(Nt===!0||A!==Z)){const Dt=A===Z&&ie.id===$;$e.setState(ie,A,Dt)}let yt=!1;ie.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==en.state.version||Oe.outputColorSpace!==Ne||te.isBatchedMesh&&Oe.batching===!1||!te.isBatchedMesh&&Oe.batching===!0||te.isBatchedMesh&&Oe.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Oe.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Oe.instancing===!1||!te.isInstancedMesh&&Oe.instancing===!0||te.isSkinnedMesh&&Oe.skinning===!1||!te.isSkinnedMesh&&Oe.skinning===!0||te.isInstancedMesh&&Oe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Oe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Oe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Oe.instancingMorph===!1&&te.morphTexture!==null||Oe.envMap!==Ze||ie.fog===!0&&Oe.fog!==De||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==$e.numPlanes||Oe.numIntersection!==$e.numIntersection)||Oe.vertexAlphas!==ot||Oe.vertexTangents!==ut||Oe.morphTargets!==Ve||Oe.morphNormals!==St||Oe.morphColors!==Jt||Oe.toneMapping!==kt||Oe.morphTargetsCount!==cn||!!Oe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Oe.__version=ie.version);let wn=Oe.currentProgram;yt===!0&&(wn=Vr(ie,X,te),z&&ie.isNodeMaterial&&z.onUpdateProgram(ie,wn,Oe));let ht=!1,di=!1,Wi=!1;const bt=wn.getUniforms(),Wt=Oe.uniforms;if(M.useProgram(wn.program)&&(ht=!0,di=!0,Wi=!0),ie.id!==$&&($=ie.id,di=!0),Oe.needsLights){const Dt=ac(L.state.lightProbeGridArray,te);Oe.lightProbeGrid!==Dt&&(Oe.lightProbeGrid=Dt,di=!0)}if(ht||Z!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(j,"projectionMatrix",A.projectionMatrix),bt.setValue(j,"viewMatrix",A.matrixWorldInverse);const ni=bt.map.cameraPosition;ni!==void 0&&ni.setValue(j,Ot.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&bt.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&bt.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,di=!0,Wi=!0)}if(Oe.needsLights&&(en.state.sunShadowMap.length>0&&bt.setValue(j,"sunShadowMap",en.state.sunShadowMap,he),en.state.directionalShadowMap.length>0&&bt.setValue(j,"directionalShadowMap",en.state.directionalShadowMap,he),en.state.spotShadowMap.length>0&&bt.setValue(j,"spotShadowMap",en.state.spotShadowMap,he),en.state.pointShadowMap.length>0&&bt.setValue(j,"pointShadowMap",en.state.pointShadowMap,he)),te.isSkinnedMesh){bt.setOptional(j,te,"bindMatrix"),bt.setOptional(j,te,"bindMatrixInverse");const Dt=te.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),bt.setValue(j,"boneTexture",Dt.boneTexture,he))}te.isBatchedMesh&&(bt.setOptional(j,te,"batchingTexture"),bt.setValue(j,"batchingTexture",te._matricesTexture,he),bt.setOptional(j,te,"batchingIdTexture"),bt.setValue(j,"batchingIdTexture",te._indirectTexture,he),bt.setOptional(j,te,"batchingColorTexture"),te._colorsTexture!==null&&bt.setValue(j,"batchingColorTexture",te._colorsTexture,he));const fi=ue.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&W.update(te,ue,wn),(di||Oe.receiveShadow!==te.receiveShadow)&&(Oe.receiveShadow=te.receiveShadow,bt.setValue(j,"receiveShadow",te.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&X.environment!==null&&(Wt.envMapIntensity.value=X.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Sw()),di){if(bt.setValue(j,"toneMappingExposure",O.toneMappingExposure),Oe.needsLights&&oc(Wt,Wi),De&&ie.fog===!0&&Ke.refreshFogUniforms(Wt,De),Ke.refreshMaterialUniforms(Wt,ie,de,oe,L.state.transmissionRenderTarget[A.id]),Oe.needsLights&&Oe.lightProbeGrid){const Dt=Oe.lightProbeGrid;Wt.probesSH.value=Dt.texture,Wt.probesMin.value.copy(Dt.boundingBox.min),Wt.probesMax.value.copy(Dt.boundingBox.max),Wt.probesResolution.value.copy(Dt.resolution)}Gl.upload(j,da(Oe),Wt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Gl.upload(j,da(Oe),Wt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&bt.setValue(j,"center",te.center),bt.setValue(j,"modelViewMatrix",te.modelViewMatrix),bt.setValue(j,"normalMatrix",te.normalMatrix),bt.setValue(j,"modelMatrix",te.matrixWorld),ie.uniformsGroups!==void 0){const Dt=ie.uniformsGroups;for(let ni=0,hi=Dt.length;ni<hi;ni++){const pi=Dt[ni];ve.update(pi,wn),ve.bind(pi,wn)}}return wn}function oc(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function fa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,X,ue){const ie=ce.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ce.get(A.texture).__webglTexture=X,ce.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ue,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ue=ce.get(A);ue.__webglFramebuffer=X,ue.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ue=0){J=A,se=X,ee=ue;let ie=null,te=!1,De=!1;if(A){const Ne=ce.get(A);if(Ne.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,Ne.__webglFramebuffer),N.copy(A.viewport),ae.copy(A.scissor),Se=A.scissorTest,M.viewport(N),M.scissor(ae),M.setScissorTest(Se),$=-1;return}else if(Ne.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Ne.__hasExternalTextures)he.rebindTextures(A,ce.get(A.texture).__webglTexture,ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Ne.__boundDepthTexture!==ot){if(ot!==null&&ce.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Ze=ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ie=Ze[X][ue]:ie=Ze[X],te=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ie=ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?ie=Ze[ue]:ie=Ze,N.copy(A.viewport),ae.copy(A.scissor),Se=A.scissorTest}else N.copy(Fe).multiplyScalar(de).floor(),ae.copy(at).multiplyScalar(de).floor(),Se=Ft;if(ue!==0&&(ie=G),M.bindFramebuffer(j.FRAMEBUFFER,ie)&&M.drawBuffers(A,ie),M.viewport(N),M.scissor(ae),M.setScissorTest(Se),te){const Ne=ce.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,ue)}else if(De){const Ne=X;for(let We=0;We<A.textures.length;We++){const Ze=ce.get(A.textures[We]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+We,Ze.__webglTexture,ue,Ne)}}else if(A!==null&&ue!==0){const Ne=ce.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ne.__webglTexture,ue)}$=-1};function ha(A){const X=ce.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=D.textureFormatReadable(A.format),X.__typeReadable=D.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,ue,ie,te,De,Le,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(We=We[Le]),We){M.bindFramebuffer(j.FRAMEBUFFER,We);try{const Ze=A.textures[Ne],ot=Ze.format,ut=Ze.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ne);const Ve=ha(Ze);if(Ve.__formatReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ie&&ue>=0&&ue<=A.height-te&&j.readPixels(X,ue,ie,te,Re.convert(ot),Re.convert(ut),De)}finally{const Ze=J!==null?ce.get(J).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,X,ue,ie,te,De,Le,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(We=We[Le]),We)if(X>=0&&X<=A.width-ie&&ue>=0&&ue<=A.height-te){M.bindFramebuffer(j.FRAMEBUFFER,We);const Ze=A.textures[Ne],ot=Ze.format,ut=Ze.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ne);const Ve=ha(Ze);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,St),j.bufferData(j.PIXEL_PACK_BUFFER,De.byteLength,j.STREAM_READ),j.readPixels(X,ue,ie,te,Re.convert(ot),Re.convert(ut),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const Jt=J!==null?ce.get(J).__webglFramebuffer:null;M.bindFramebuffer(j.FRAMEBUFFER,Jt);const kt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await x_(j,kt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,St),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,De),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(St),j.deleteSync(kt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ue=0){const ie=Math.pow(2,-ue),te=Math.floor(A.image.width*ie),De=Math.floor(A.image.height*ie),Le=X!==null?X.x:0,Ne=X!==null?X.y:0;he.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,ue,0,0,Le,Ne,te,De),M.unbindTexture()},this.copyTextureToTexture=function(A,X,ue=null,ie=null,te=0,De=0){let Le,Ne,We,Ze,ot,ut,Ve,St,Jt;const kt=A.isCompressedTexture?A.mipmaps[De]:A.image;if(ue!==null)Le=ue.max.x-ue.min.x,Ne=ue.max.y-ue.min.y,We=ue.isBox3?ue.max.z-ue.min.z:1,Ze=ue.min.x,ot=ue.min.y,ut=ue.isBox3?ue.min.z:0;else{const Wt=Math.pow(2,-te);Le=Math.floor(kt.width*Wt),Ne=Math.floor(kt.height*Wt),A.isDataArrayTexture?We=kt.depth:A.isData3DTexture?We=Math.floor(kt.depth*Wt):We=1,Ze=0,ot=0,ut=0}ie!==null?(Ve=ie.x,St=ie.y,Jt=ie.z):(Ve=0,St=0,Jt=0);const Pt=Re.convert(X.format),cn=Re.convert(X.type);let Oe;X.isData3DTexture?(he.setTexture3D(X,0),Oe=j.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(he.setTexture2DArray(X,0),Oe=j.TEXTURE_2D_ARRAY):(he.setTexture2D(X,0),Oe=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,X.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,X.unpackAlignment);const en=M.getParameter(j.UNPACK_ROW_LENGTH),yt=M.getParameter(j.UNPACK_IMAGE_HEIGHT),wn=M.getParameter(j.UNPACK_SKIP_PIXELS),ht=M.getParameter(j.UNPACK_SKIP_ROWS),di=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,kt.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,kt.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,Ze),M.pixelStorei(j.UNPACK_SKIP_ROWS,ot),M.pixelStorei(j.UNPACK_SKIP_IMAGES,ut);const Wi=A.isDataArrayTexture||A.isData3DTexture,bt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Wt=ce.get(A),fi=ce.get(X),Dt=ce.get(Wt.__renderTarget),ni=ce.get(fi.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,Dt.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let hi=0;hi<We;hi++)Wi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ce.get(A).__webglTexture,te,ut+hi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ce.get(X).__webglTexture,De,Jt+hi)),j.blitFramebuffer(Ze,ot,Le,Ne,Ve,St,Le,Ne,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||ce.has(A)){const Wt=ce.get(A),fi=ce.get(X);M.bindFramebuffer(j.READ_FRAMEBUFFER,k),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,Y);for(let Dt=0;Dt<We;Dt++)Wi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Wt.__webglTexture,te,ut+Dt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Wt.__webglTexture,te),bt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,fi.__webglTexture,De,Jt+Dt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,fi.__webglTexture,De),te!==0?j.blitFramebuffer(Ze,ot,Le,Ne,Ve,St,Le,Ne,j.COLOR_BUFFER_BIT,j.NEAREST):bt?j.copyTexSubImage3D(Oe,De,Ve,St,Jt+Dt,Ze,ot,Le,Ne):j.copyTexSubImage2D(Oe,De,Ve,St,Ze,ot,Le,Ne);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Oe,De,Ve,St,Jt,Le,Ne,We,Pt,cn,kt.data):X.isCompressedArrayTexture?j.compressedTexSubImage3D(Oe,De,Ve,St,Jt,Le,Ne,We,Pt,kt.data):j.texSubImage3D(Oe,De,Ve,St,Jt,Le,Ne,We,Pt,cn,kt):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,De,Ve,St,Le,Ne,Pt,cn,kt.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,De,Ve,St,kt.width,kt.height,Pt,kt.data):j.texSubImage2D(j.TEXTURE_2D,De,Ve,St,Le,Ne,Pt,cn,kt);M.pixelStorei(j.UNPACK_ROW_LENGTH,en),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt),M.pixelStorei(j.UNPACK_SKIP_PIXELS,wn),M.pixelStorei(j.UNPACK_SKIP_ROWS,ht),M.pixelStorei(j.UNPACK_SKIP_IMAGES,di),De===0&&X.generateMipmaps&&j.generateMipmap(Oe),M.unbindTexture()},this.initRenderTarget=function(A){ce.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){se=0,ee=0,J=null,M.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class Mw{state={forward:!1,backward:!1,left:!1,right:!1,handbrake:!1,sprint:!1,interact:!1,interactPressed:!1,pause:!1,pausePressed:!1};keys=new Set;interactEdge=!1;pauseEdge=!1;listeners=[];enabled=!1;enable(){this.enabled||(this.enabled=!0,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur))}disable(){this.enabled&&(this.enabled=!1,window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),this.reset())}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}setTouch(e,t){switch(e){case"forward":case"backward":case"left":case"right":case"handbrake":case"sprint":this.state[e]=t;break;case"interact":t&&!this.state.interact&&(this.interactEdge=!0),this.state.interact=t;break;case"pause":t&&!this.state.pause&&(this.pauseEdge=!0),this.state.pause=t;break}}triggerInteract(){this.interactEdge=!0,this.state.interact=!0,setTimeout(()=>this.state.interact=!1,50)}triggerPause(){this.pauseEdge=!0,this.state.pause=!0,setTimeout(()=>this.state.pause=!1,50)}consumeEdges(){this.state.interactPressed=this.interactEdge,this.state.pausePressed=this.pauseEdge,this.interactEdge=!1,this.pauseEdge=!1}onKeyDown=e=>{const t=e.key.toLowerCase();if(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," ","shift","e","escape"].includes(t)&&e.preventDefault(),t==="escape"){this.state.pause||(this.pauseEdge=!0),this.state.pause=!0;return}if(t==="e"){this.state.interact||(this.interactEdge=!0),this.state.interact=!0;return}this.keys.add(t),this.sync()};onKeyUp=e=>{const t=e.key.toLowerCase();if(t==="escape"){this.state.pause=!1;return}if(t==="e"){this.state.interact=!1;return}this.keys.delete(t),this.sync()};onBlur=()=>{this.keys.clear(),this.reset()};reset(){this.state.forward=!1,this.state.backward=!1,this.state.left=!1,this.state.right=!1,this.state.handbrake=!1,this.state.sprint=!1,this.state.interact=!1,this.state.pause=!1}sync(){const e=(...t)=>t.some(r=>this.keys.has(r));this.state.forward=e("w","arrowup"),this.state.backward=e("s","arrowdown"),this.state.left=e("a","arrowleft"),this.state.right=e("d","arrowright"),this.state.handbrake=e(" "),this.state.sprint=e("shift")}}const an=48,rr=14,wi=5;function Ew(s){let e=s;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}function ww(s){const e=new zi,t=[],r=[],o=Ew(7321),l=[2767452,3359070,2042693,3820142,2633799,1712176,4208719,2958648],u=new sr(wi*an,wi*an),f=new xn({color:1316898,roughness:.95,metalness:0}),h=new ct(u,f);h.rotation.x=-Math.PI/2,h.position.y=0,h.receiveShadow=!0,e.add(h);const p=(wi-1)/2*an,v=new xn({color:3824268,emissive:16755268,emissiveIntensity:.35,roughness:.4,metalness:.2});for(let E=0;E<wi;E++)for(let b=0;b<wi;b++){const O=E*an-p,B=b*an-p,z=an-rr,G=new Ht(z,.3,z),k=new xn({color:4475477,roughness:.9}),Y=new ct(G,k);Y.position.set(O,.15,B),Y.receiveShadow=!0,e.add(Y);const se=o()>.5?2:1,ee=z/se;for(let J=0;J<se;J++)for(let $=0;$<se;$++){if(o()<.12)continue;const Z=O-z/2+ee/2+J*ee,N=B-z/2+ee/2+$*ee,ae=ee*(.6+o()*.3),Se=ee*(.6+o()*.3),ke=8+o()*o()*60,ze=Math.floor(o()*l.length),He=new Ht(ae,ke,Se),oe=new xn({color:l[ze],roughness:.7,metalness:.15}),de=new ct(He,oe);if(de.position.set(Z,ke/2+.3,N),de.castShadow=s!=="low",de.receiveShadow=s!=="low",e.add(de),t.push({x:Z,z:N,w:ae,d:Se,h:ke}),ke>18&&s!=="low"){const Me=Math.floor(ke/6);for(let Ye=0;Ye<Me;Ye++){if(o()<.5)continue;const Fe=new Ht(ae*1.01,1.2,Se*1.01),at=new ct(Fe,v.clone()),Ft=at.material;Ft.emissiveIntensity=.25+o()*.3,Ft.emissive=new mt(o()>.7?8965375:16755268),at.position.set(Z,2+Ye*6,N),e.add(at)}}}}const _=new xn({color:790294,roughness:.9,metalness:0}),g=new us({color:16764006}),y=wi*an;for(let E=0;E<=wi;E++){const b=E*an-p-an/2,O=new sr(y+an,rr),B=new ct(O,_);B.rotation.x=-Math.PI/2,B.position.set(0,.02,b),B.receiveShadow=!0,e.add(B),r.push({x1:-y/2,z1:b,x2:y/2,z2:b,width:rr});const z=new sr(y,.3),G=new ct(z,g);G.rotation.x=-Math.PI/2,G.position.set(0,.05,b),e.add(G)}for(let E=0;E<=wi;E++){const b=E*an-p-an/2,O=new sr(rr,y+an),B=new ct(O,_);B.rotation.x=-Math.PI/2,B.position.set(b,.02,0),B.receiveShadow=!0,e.add(B),r.push({x1:b,z1:-y/2,x2:b,z2:y/2,width:rr});const z=new sr(.3,y),G=new ct(z,g);G.rotation.x=-Math.PI/2,G.position.set(b,.05,0),e.add(G)}if(s!=="low"){const E=new xn({color:2236962,roughness:.6}),b=new xn({color:16766592,emissive:16761418,emissiveIntensity:1.4});for(let O=0;O<=wi;O++)for(let B=0;B<=wi;B++){const z=O*an-p-an/2,G=B*an-p-an/2;if(!(z<-y/2+1||z>y/2-1)&&!(G<-y/2+1||G>y/2-1))for(const[k,Y]of[[rr/2+1,rr/2+1],[-rr/2-1,-rr/2-1]]){const se=new ct(new ds(.12,.18,6,6),E);se.position.set(z+k,3,G+Y),se.castShadow=!1,e.add(se);const ee=new ct(new Ht(1.5,.15,.15),E);ee.position.set(z+k-Math.sign(k)*.6,6,G+Y),e.add(ee);const J=new ct(new ec(.3,8,8),b);J.position.set(z+k-Math.sign(k)*1.2,5.9,G+Y),e.add(J)}}}const w=-p+an/2,R=-p+an/2,S=new ct(new Ht(18,.4,24),new xn({color:2830138,roughness:.8}));S.position.set(w,.2,R),S.receiveShadow=!0,e.add(S);const x=new xn({color:5595248,roughness:.5,metalness:.3});for(const E of[-1,1]){const b=new ct(new Ht(.6,5,.6),x);b.position.set(w+E*7,2.5,R-10),b.castShadow=!0,e.add(b)}const I=new ct(new Ht(15,.6,.6),x);I.position.set(w,5,R-10),I.castShadow=!0,e.add(I);const H=new Sx(4872826,.5);e.add(H);const C=new mx(16757626,2107456,.6);e.add(C);const P=new xx(16755285,1.6);if(P.position.set(-60,40,-30),P.target.position.set(0,0,0),P.castShadow=s!=="low",s!=="low"){P.shadow.mapSize.set(s==="high"?2048:1024,s==="high"?2048:1024);const E=P.shadow.camera;E.left=-y/2,E.right=y/2,E.top=y/2,E.bottom=-y/2,E.near=1,E.far=200,E.updateProjectionMatrix()}e.add(P),e.add(P.target);let L="sunset";const U=E=>{P.castShadow=E!=="low",E!=="low"&&P.shadow.mapSize.set(E==="high"?2048:1024,E==="high"?2048:1024)};return{group:e,colliders:t,roadSegments:r,blockSize:an,gridCount:wi,garage:new ne(w,.4,R),sun:P,hemi:C,ambient:H,timeOfDay:L,setQuality:U}}function Tw(s,e){const t=e==="sunset"?{top:1712208,mid:5913198,bot:16747082,fog:3813456}:{top:329231,mid:657950,bot:1708592,fog:657944},r=new ec(400,32,16),o=new Pi({side:On,uniforms:{topColor:{value:new mt(t.top)},midColor:{value:new mt(t.mid)},botColor:{value:new mt(t.bot)}},vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 botColor;
      varying vec3 vPos;
      void main() {
        float h = normalize(vPos).y;
        vec3 col = mix(botColor, midColor, smoothstep(-0.1, 0.3, h));
        col = mix(col, topColor, smoothstep(0.3, 0.9, h));
        gl_FragColor = vec4(col, 1.0);
      }
    `}),l=new ct(r,o);if(s.add(l),e==="sunset"){const u=new ct(new Kl(18,32),new us({color:16767392,transparent:!0,opacity:.95}));u.position.set(-120,18,-200),u.lookAt(0,0,0),s.add(u)}else{const u=new ct(new Kl(12,32),new us({color:13689087,transparent:!0,opacity:.9}));u.position.set(100,80,-200),u.lookAt(0,0,0),s.add(u);const f=new Xn,h=[];for(let v=0;v<300;v++){const g=Math.random()*Math.PI*2,y=Math.acos(Math.random()*.7+.2);h.push(350*Math.sin(y)*Math.cos(g),350*Math.cos(y),350*Math.sin(y)*Math.sin(g))}f.setAttribute("position",new fn(h,3));const p=new Pg({color:16777215,size:1.2,sizeAttenuation:!1});s.add(new ax(f,p))}s.fog=new wf(t.fog,80,260)}class Aw{group;pos=new ne;rot=0;speed=0;steer=0;maxSpeed=42;maxReverse=16;accel=22;brake=30;engineDrag=4;handbrakeDrag=26;grip=.9;turnSpeed=1.6;wheels=[];wheelRot=0;headlights;taillights;brakeOn=!1;revOn=!1;occupied=!1;w=2;l=4.2;h=1.2;constructor(){this.group=new zi,this.group.add(this.buildBody()),this.wheels=this.buildWheels(),this.wheels.forEach(r=>this.group.add(r));const{headlights:e,taillights:t}=this.buildLights();this.headlights=e,this.taillights=t,e.forEach(r=>this.group.add(r)),t.forEach(r=>this.group.add(r))}buildBody(){const e=new zi,t=new xn({color:13774896,metalness:.6,roughness:.3}),r=new xn({color:1710623,metalness:.4,roughness:.5}),o=new xn({color:660512,metalness:.8,roughness:.15,transparent:!0,opacity:.7}),l=new ct(new Ht(this.w,.5,this.l),r);l.position.y=.45,l.castShadow=!0,e.add(l);const u=new ct(new Ht(this.w*.92,.5,this.l*.55),t);u.position.set(0,.95,-this.l*.05),u.castShadow=!0,e.add(u);const f=new ct(new Ht(this.w*.82,.5,this.l*.42),o);f.position.set(0,1,this.l*.05),e.add(f);const h=new ct(new Ht(this.w*.78,.18,this.l*.4),t);h.position.set(0,1.28,this.l*.05),h.castShadow=!0,e.add(h);const p=new ct(new Ht(this.w*.95,.25,.4),r);p.position.set(0,.35,-this.l/2),e.add(p);const v=new ct(new Ht(this.w*.9,.3,.3),r);return v.position.set(0,.5,this.l/2),e.add(v),e}buildWheels(){const e=new xn({color:657930,roughness:.7}),t=new xn({color:8947848,metalness:.8,roughness:.2}),r=[],o=new ds(.45,.45,.3,14),l=new ds(.2,.2,.32,8),u=[[this.w/2-.1,.45,-this.l/2+.6],[-(this.w/2-.1),.45,-this.l/2+.6],[this.w/2-.1,.45,this.l/2-.7],[-(this.w/2-.1),.45,this.l/2-.7]];for(const[f,h,p]of u){const v=new ct(o,e);v.position.set(f,h,p),v.rotation.z=Math.PI/2,v.castShadow=!0;const _=new ct(l,t);_.rotation.z=Math.PI/2,v.add(_),r.push(v)}return r}buildLights(){const e=[],t=[],r=new xn({color:3145728,emissive:16720418,emissiveIntensity:.5});for(const o of[-1,1]){const l=new vx(16773328,0,40,Math.PI/6,.4,1.5);l.position.set(o*.6,.8,-this.l/2),l.target.position.set(o*.6,.2,-this.l/2-10),this.group.add(l.target),e.push(l);const u=new ct(new Ht(.3,.15,.08),r.clone());u.position.set(o*.55,.5,this.l/2-.02),t.push(u)}return{headlights:e,taillights:t}}setOccupied(e){this.occupied=e,e?(this.headlights.forEach(t=>t.intensity=2.2),this.taillights.forEach(t=>{t.material.emissiveIntensity=.4})):(this.headlights.forEach(t=>t.intensity=0),this.taillights.forEach(t=>{t.material.emissiveIntensity=.15}))}getSpeedKmh(){return Math.abs(this.speed)*3.6*1}setBrakeLights(e){this.taillights.forEach(t=>{const r=t.material;r.emissiveIntensity=e?1.6:this.occupied?.4:.15})}update(e,t,r){if(!this.occupied){this.speed=af.lerp(this.speed,0,Math.min(1,e*2)),this.setBrakeLights(!1),this.applyWheelVisual(e);return}const o=t.forward?1:t.backward?-1:0,l=t.backward&&this.speed>.5;if(o>0?(this.speed+=this.accel*e,this.revOn=!1):o<0?(this.speed>.5?this.speed-=this.brake*e:this.speed-=this.accel*.7*e,this.revOn=!0):this.speed>0?this.speed=Math.max(0,this.speed-this.engineDrag*e):this.speed<0&&(this.speed=Math.min(0,this.speed+this.engineDrag*e)),t.handbrake){const S=this.handbrakeDrag*e;this.speed>0?this.speed=Math.max(0,this.speed-S):this.speed<0&&(this.speed=Math.min(0,this.speed+S)),this.setBrakeLights(!0)}else l?this.setBrakeLights(!0):this.setBrakeLights(!1);this.speed=Math.max(-this.maxReverse,Math.min(this.maxSpeed,this.speed));const u=Math.min(1,Math.abs(this.speed)/8),f=Math.sign(this.speed);let h=0;t.left&&(h=1),t.right&&(h=-1),this.steer=af.lerp(this.steer,h,Math.min(1,e*6));const p=this.steer*this.turnSpeed*u*f;this.rot+=p*e;const v=Math.cos(this.rot),_=Math.sin(this.rot),g=this.pos.x+-_*this.speed*e,y=this.pos.z+-v*this.speed*e,{x:w,z:R}=this.resolveCollision(g,y,r);this.pos.x=w,this.pos.z=R,this.pos.y=0,this.group.position.copy(this.pos),this.group.rotation.y=this.rot,this.applyWheelVisual(e,Math.abs(this.speed))}applyWheelVisual(e,t=0){this.wheelRot+=t*e/.45;const r=this.steer*.5;for(let o=0;o<this.wheels.length;o++){const l=this.wheels[o];o<2?l.rotation.y=r:l.rotation.y=0,l.children[0].rotation.x=this.wheelRot}}resolveCollision(e,t,r){const o=Math.max(this.w,this.l)/2*.8;let l=e,u=t,f=!1;for(const h of r){const p=h.x-h.w/2-o,v=h.x+h.w/2+o,_=h.z-h.d/2-o,g=h.z+h.d/2+o;if(l>p&&l<v&&u>_&&u<g){const y=Math.abs(l-p),w=Math.abs(l-v),R=Math.abs(u-_),S=Math.abs(u-g),x=Math.min(y,w,R,S);x===y?l=p:x===w?l=v:x===R?u=_:u=g,f=!0,this.speed*=.35}}return f&&(this._hit=!0),{x:l,z:u}}hitThisFrame(){const e=this._hit;return this._hit=!1,!!e}}class bw{group;pos=new ne;rot=0;speed=0;walkCycle=0;body;head;legs;legL;legR;armL;armR;maxSpeed=7;sprintMul=1.7;constructor(){this.group=new zi;const e=new xn({color:13209194,roughness:.7}),t=new xn({color:2106416,roughness:.8}),r=new xn({color:2764602,roughness:.8});this.body=new ct(new Ht(.7,.9,.4),t),this.body.position.y=1.15,this.body.castShadow=!0,this.group.add(this.body),this.head=new ct(new Ht(.4,.4,.4),e),this.head.position.y=1.85,this.head.castShadow=!0,this.group.add(this.head),this.armL=new ct(new Ht(.2,.7,.2),t),this.armL.position.set(.45,1.15,0),this.armL.castShadow=!0,this.group.add(this.armL),this.armR=new ct(new Ht(.2,.7,.2),t),this.armR.position.set(-.45,1.15,0),this.armR.castShadow=!0,this.group.add(this.armR),this.legs=new zi,this.legL=new ct(new Ht(.25,.8,.25),r),this.legL.position.set(.18,-.4,0),this.legL.castShadow=!0,this.legR=new ct(new Ht(.25,.8,.25),r),this.legR.position.set(-.18,-.4,0),this.legR.castShadow=!0,this.legs.position.y=.8,this.legs.add(this.legL),this.legs.add(this.legR),this.group.add(this.legs)}setPosition(e){this.pos.copy(e),this.group.position.copy(this.pos)}update(e,t,r){const o=(t.right?1:0)-(t.left?1:0),l=(t.backward?1:0)-(t.forward?1:0),u=o!==0||l!==0,f=this.maxSpeed*(t.sprint?this.sprintMul:1);if(u){const p=r+Math.atan2(o,l);this.pos.x+=-Math.sin(p)*f*e,this.pos.z+=-Math.cos(p)*f*e;let _=p+Math.PI-this.rot;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;this.rot+=_*Math.min(1,e*10),this.walkCycle+=e*(t.sprint?14:9)}else this.walkCycle*=Math.max(0,1-e*8);this.group.position.copy(this.pos),this.group.rotation.y=this.rot;const h=Math.sin(this.walkCycle)*(u?.6:0);this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h,this.armR.rotation.x=h}}class Rw{cam;target=new ne;pos=new ne;yaw=0;mode="drive";tmp=new ne;ideal=new ne;constructor(e){this.cam=new Qn(62,e,.1,600)}setAspect(e){this.cam.aspect=e,this.cam.updateProjectionMatrix()}follow(e,t,r){const o=this.mode==="drive"?10:6,l=this.mode==="drive"?5:3.2;this.mode==="drive"&&(this.yaw=af.lerp(this.yaw,t,Math.min(1,r*4)));const u=Math.cos(this.yaw),f=Math.sin(this.yaw);this.ideal.set(e.x+f*o,e.y+l,e.z+u*o),this.pos.lerp(this.ideal,Math.min(1,r*5)),this.cam.position.copy(this.pos),this.tmp.copy(e).add(new ne(-f*4,1.2,-u*4)),this.cam.lookAt(this.tmp)}}const $l=[{id:"explorer",name:"City Explorer",description:"Drive to the marked destination in the city.",hasTimer:!0,timeLimit:90,type:"reach"},{id:"timetrial",name:"Time Trial",description:"Hit all 5 checkpoints before the clock runs out.",hasTimer:!0,timeLimit:75,type:"checkpoints"},{id:"freedrive",name:"Free Drive",description:"Explore the city. No timer, no pressure.",hasTimer:!1,timeLimit:0,type:"free"}];class Cw{scene;state=null;onUpdate=null;onComplete=null;citySpan;constructor(e,t){this.scene=e,this.citySpan=t}start(e,t){this.clear();const r=[];let o=null;if(e.type==="reach"){const l=this.randomRoadPoint();r.push(l.clone()),o=this.makeMarker(l)}else if(e.type==="checkpoints"){for(let l=0;l<5;l++)r.push(this.randomRoadPoint());o=this.makeMarker(r[0])}this.state={def:e,active:!0,completed:!1,timeLeft:e.timeLimit,elapsed:0,checkpoints:r,currentCheckpoint:0,marker:o,score:0},o&&this.scene.add(o),this.onUpdate?.(this.state)}clear(){this.state?.marker&&this.scene.remove(this.state.marker),this.state=null}randomRoadPoint(){this.citySpan/2;const e=48,t=4/2*e,r=Math.floor(Math.random()*6),o=(Math.random()-.5)*this.citySpan,l=Math.random()>.5,u=l?o:r*e-t-e/2,f=l?r*e-t-e/2:o;return new ne(u,.5,f)}makeMarker(e){const t=new zi,r=new ct(new ds(3,3,.3,24,1,!0),new us({color:3399167,transparent:!0,opacity:.85,side:Ai}));r.position.y=.2,r.rotation.x=Math.PI/2,t.add(r);const o=new ct(new ds(.3,.6,40,12,1,!0),new us({color:3399167,transparent:!0,opacity:.25,side:Ai}));return o.position.y=20,t.add(o),t.position.copy(e),t.position.y=0,t}updateMarker(){if(!this.state?.marker||this.state.checkpoints.length===0)return;const e=Math.min(this.state.currentCheckpoint,this.state.checkpoints.length-1),t=this.state.checkpoints[e];this.state.marker.position.set(t.x,0,t.z);const r=1+Math.sin(performance.now()/250)*.08;this.state.marker.scale.set(r,1,r)}update(e,t){if(!this.state||!this.state.active)return{completed:!1};if(this.updateMarker(),this.state.def.hasTimer&&(this.state.timeLeft-=e,this.state.timeLeft<=0))return this.state.timeLeft=0,this.state.active=!1,this.state.completed=!1,this.onUpdate?.(this.state),{completed:!1};if(this.state.elapsed+=e,this.state.checkpoints.length>0){const r=this.state.checkpoints[this.state.currentCheckpoint],o=t.x-r.x,l=t.z-r.z;if(Math.sqrt(o*o+l*l)<6)return this.state.currentCheckpoint++,this.state.score+=this.state.def.type==="reach"?500:200,this.state.currentCheckpoint>=this.state.checkpoints.length?(this.state.completed=!0,this.state.active=!1,this.state.score+=this.state.def.hasTimer?Math.floor(this.state.timeLeft)*10:0,this.onUpdate?.(this.state),this.onComplete?.(this.state),{completed:!0}):(this.onUpdate?.(this.state),{completed:!1,checkpointHit:!0})}return this.onUpdate?.(this.state),{completed:!1}}pause(){}}class Pw{canvas;ctx;size=160;span;colliders;garage;constructor(e,t,r){this.canvas=document.createElement("canvas"),this.canvas.width=this.size,this.canvas.height=this.size,this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.display="block",this.ctx=this.canvas.getContext("2d"),this.colliders=e,this.span=t,this.garage=r}worldToMap(e,t){const r=this.size/this.span;return[this.size/2+e*r,this.size/2+t*r]}draw(e,t,r,o,l){const u=this.ctx,{size:f}=this;u.clearRect(0,0,f,f),u.fillStyle="rgba(10,12,20,0.85)",u.fillRect(0,0,f,f),u.strokeStyle="rgba(80,90,120,0.5)",u.lineWidth=2;const h=48,p=4/2*h;for(let w=0;w<=5;w++){const[R,S]=this.worldToMap(w*h-p-h/2,-this.span/2),[x,I]=this.worldToMap(w*h-p-h/2,this.span/2);u.beginPath(),u.moveTo(R,S),u.lineTo(x,I),u.stroke();const[H,C]=this.worldToMap(-this.span/2,w*h-p-h/2),[P,L]=this.worldToMap(this.span/2,w*h-p-h/2);u.beginPath(),u.moveTo(H,C),u.lineTo(P,L),u.stroke()}u.fillStyle="rgba(60,70,100,0.7)";for(const w of this.colliders){const[R,S]=this.worldToMap(w.x,w.z),x=this.size/this.span;u.fillRect(R-w.w*x/2,S-w.d*x/2,w.w*x,w.d*x)}const[v,_]=this.worldToMap(this.garage.x,this.garage.z);if(u.fillStyle="#ffaa44",u.fillRect(v-3,_-3,6,6),o&&o.length>0)for(let w=0;w<o.length;w++){const[R,S]=this.worldToMap(o[w].x,o[w].z);u.beginPath(),u.arc(R,S,w===l?5:3,0,Math.PI*2),u.fillStyle=w<l?"rgba(120,140,160,0.6)":"#33ddff",u.fill()}if(r){const[w,R]=this.worldToMap(r.x,r.z);u.fillStyle="#33ddff",u.beginPath(),u.arc(w,R,4,0,Math.PI*2),u.fill()}const[g,y]=this.worldToMap(e.x,e.z);u.save(),u.translate(g,y),u.rotate(-t),u.fillStyle="#ff4466",u.beginPath(),u.moveTo(0,-6),u.lineTo(4,5),u.lineTo(-4,5),u.closePath(),u.fill(),u.restore(),u.strokeStyle="rgba(120,140,180,0.5)",u.lineWidth=2,u.strokeRect(1,1,f-2,f-2)}}class Lw{ctx=null;masterGain;musicGain;sfxGain;engineOsc=null;engineGain=null;engineFilter=null;masterVolume=.8;musicVolume=.6;sfxVolume=.7;musicEnabled=!0;activeTracks=new Map;ready=!1;async init(){if(!this.ready)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.musicGain=this.ctx.createGain(),this.sfxGain=this.ctx.createGain(),this.masterGain.connect(this.ctx.destination),this.musicGain.connect(this.masterGain),this.sfxGain.connect(this.masterGain),this.applyVolumes(),this.ready=!0}catch{this.ready=!1}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMasterVolume(e){this.masterVolume=e,this.applyVolumes()}setMusicVolume(e){this.musicVolume=e,this.applyVolumes()}setSfxVolume(e){this.sfxVolume=e,this.applyVolumes()}applyVolumes(){this.ready&&(this.masterGain.gain.value=this.masterVolume,this.musicGain.gain.value=this.musicEnabled?this.musicVolume:0,this.sfxGain.gain.value=this.sfxVolume)}setMusicEnabled(e){this.musicEnabled=e,this.applyVolumes()}playSfx(e,t={}){if(!this.ready||!this.ctx)return;const r=this.ctx,o=t.volume??1,l=r.currentTime,u=(p,v,_,g)=>{p.gain.setValueAtTime(0,l),p.gain.linearRampToValueAtTime(v,l+_),p.gain.exponentialRampToValueAtTime(1e-4,l+_+g)},f=(p,v,_,g,y,w)=>{const R=r.createOscillator(),S=r.createGain();R.type=v,R.frequency.setValueAtTime(p,l),u(S,_,g,y),R.connect(S),S.connect(w),R.start(l),R.stop(l+g+y+.05)},h=this.sfxGain;switch(e){case"menu":{f(660,"sine",.3*o,.005,.12,h),f(990,"sine",.15*o,.01,.18,h);break}case"mission":{f(523,"triangle",.3*o,.01,.2,h),setTimeout(()=>this.ready&&f(659,"triangle",.3*o,.01,.2,h),120),setTimeout(()=>this.ready&&f(784,"triangle",.35*o,.01,.4,h),260);break}case"enter":{f(220,"sawtooth",.2*o,.01,.15,h),setTimeout(()=>this.ready&&f(330,"sawtooth",.18*o,.01,.12,h),80);break}case"exit":{f(330,"sawtooth",.2*o,.01,.12,h),setTimeout(()=>this.ready&&f(220,"sawtooth",.18*o,.01,.15,h),80);break}case"brake":{const p=this.makeNoise(.25*o),v=r.createGain(),_=r.createBiquadFilter();_.type="bandpass",_.frequency.value=1200,v.gain.setValueAtTime(.25*o,l),v.gain.exponentialRampToValueAtTime(.001,l+.25),p.connect(_),_.connect(v),v.connect(h),p.start(l),p.stop(l+.3);break}case"tire":{const p=this.makeNoise(.15*o),v=r.createGain(),_=r.createBiquadFilter();_.type="highpass",_.frequency.value=2e3,v.gain.setValueAtTime(.12*o,l),v.gain.exponentialRampToValueAtTime(.001,l+.2),p.connect(_),_.connect(v),v.connect(h),p.start(l),p.stop(l+.25);break}case"collision":{const p=this.makeNoise(.5*o),v=r.createGain(),_=r.createBiquadFilter();_.type="lowpass",_.frequency.value=400,v.gain.setValueAtTime(.5*o,l),v.gain.exponentialRampToValueAtTime(.001,l+.35),p.connect(_),_.connect(v),v.connect(h),p.start(l),p.stop(l+.4),f(80,"square",.3*o,.005,.2,h);break}}}makeNoise(e){const t=this.ctx,r=t.createBuffer(1,t.sampleRate*.4,t.sampleRate),o=r.getChannelData(0);for(let u=0;u<o.length;u++)o[u]=(Math.random()*2-1)*e;const l=t.createBufferSource();return l.buffer=r,l}startEngine(){if(!this.ready||!this.ctx||this.engineOsc)return;const e=this.ctx;this.engineOsc=e.createOscillator(),this.engineGain=e.createGain(),this.engineFilter=e.createBiquadFilter(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.value=60,this.engineFilter.type="lowpass",this.engineFilter.frequency.value=600,this.engineGain.gain.value=0,this.engineOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.sfxGain),this.engineOsc.start()}updateEngine(e,t){if(!this.ready||!this.engineOsc||!this.engineGain||!this.engineFilter)return;const r=this.ctx,o=55+e*220,l=.05+t*.12,u=500+e*1800;this.engineOsc.frequency.setTargetAtTime(o,r.currentTime,.08),this.engineGain.gain.setTargetAtTime(l,r.currentTime,.1),this.engineFilter.frequency.setTargetAtTime(u,r.currentTime,.1)}stopEngine(){if(this.engineOsc){try{this.engineOsc.stop()}catch{}this.engineOsc.disconnect(),this.engineGain?.disconnect(),this.engineFilter?.disconnect(),this.engineOsc=null,this.engineGain=null,this.engineFilter=null}}stopAllMusic(){this.activeTracks.forEach(e=>e.stop()),this.activeTracks.clear()}fadeOutMusic(e,t=1.5){const r=this.activeTracks.get(e);r&&(r.stop(),this.activeTracks.delete(e))}isTrackPlaying(e){return this.activeTracks.has(e)}playMusicTrack(e,t){if(!this.ready||!this.ctx||this.activeTracks.has(e))return;const r=this.ctx,o=r.currentTime,l=60/t.bpm,u=r.createGain();u.gain.value=0,u.connect(this.musicGain),u.gain.setTargetAtTime(.85,o,.8);const f=[],h=[];let p=!1,v=null;const _=b=>440*Math.pow(2,(b-69)/12);let g=0;const y=b=>{const O=t.chords[g%t.chords.length];g++;const B=l*4;if(t.pad)for(const z of O){const G=r.createOscillator(),k=r.createGain();G.type="sine",G.frequency.value=_(t.root+z),k.gain.setValueAtTime(0,b),k.gain.linearRampToValueAtTime(.06,b+.6),k.gain.setValueAtTime(.06,b+B-.6),k.gain.linearRampToValueAtTime(0,b+B),G.connect(k),k.connect(u),G.start(b),G.stop(b+B+.1),f.push(G)}if(t.bass){const z=t.root+O[0]-12;for(let G=0;G<4;G++){const k=r.createOscillator(),Y=r.createGain();k.type="triangle",k.frequency.value=_(z-12);const se=b+G*l;Y.gain.setValueAtTime(0,se),Y.gain.linearRampToValueAtTime(.16,se+.02),Y.gain.exponentialRampToValueAtTime(.001,se+l*.8),k.connect(Y),Y.connect(u),k.start(se),k.stop(se+l+.05),f.push(k)}}},w=[0,3,5,7,10];let R=0;const S=b=>{if(!t.lead)return;const O=8;for(let B=0;B<O;B++){if(Math.random()<.35)continue;R+=Math.floor((Math.random()-.5)*4),R=Math.max(0,Math.min(14,R));const z=Math.floor(R/5)*12,G=t.root+12+z+w[R%5],k=r.createOscillator(),Y=r.createGain();k.type="triangle",k.frequency.value=_(G);const se=b+B/O*l*4,ee=l*4/O;Y.gain.setValueAtTime(0,se),Y.gain.linearRampToValueAtTime(.07,se+.02),Y.gain.exponentialRampToValueAtTime(.001,se+ee*.9),k.connect(Y),Y.connect(u),k.start(se),k.stop(se+ee+.05),f.push(k)}},x=(b,O)=>{const B=r.createOscillator(),z=r.createGain();B.frequency.setValueAtTime(140,b),B.frequency.exponentialRampToValueAtTime(40,b+.12),z.gain.setValueAtTime(O,b),z.gain.exponentialRampToValueAtTime(.001,b+.18),B.connect(z),z.connect(u),B.start(b),B.stop(b+.2),f.push(B)},I=(b,O)=>{const B=r.createBuffer(1,.05*r.sampleRate,r.sampleRate),z=B.getChannelData(0);for(let se=0;se<z.length;se++)z[se]=(Math.random()*2-1)*O;const G=r.createBufferSource();G.buffer=B;const k=r.createBiquadFilter();k.type="highpass",k.frequency.value=6e3;const Y=r.createGain();Y.gain.setValueAtTime(O,b),Y.gain.exponentialRampToValueAtTime(.001,b+.04),G.connect(k),k.connect(Y),Y.connect(u),G.start(b),h.push(G)},H=(b,O)=>{const B=r.createBuffer(1,.15*r.sampleRate,r.sampleRate),z=B.getChannelData(0);for(let se=0;se<z.length;se++)z[se]=(Math.random()*2-1)*O;const G=r.createBufferSource();G.buffer=B;const k=r.createBiquadFilter();k.type="bandpass",k.frequency.value=1800;const Y=r.createGain();Y.gain.setValueAtTime(O,b),Y.gain.exponentialRampToValueAtTime(.001,b+.12),G.connect(k),k.connect(Y),Y.connect(u),G.start(b),h.push(G)},C=b=>{if(!t.drums)return;const O=8;for(let B=0;B<O;B++){const z=b+B/O*l*4;B%2===0&&x(z,.5),B===4&&H(z,.3),I(z,.12)}},P=l*4;let L=o+.1;const U=()=>{if(!p){for(;L<r.currentTime+.5;)y(L),S(L),C(L),L+=P;v=window.setTimeout(U,200)}};U();const E=()=>{p||(p=!0,v&&clearTimeout(v),u.gain.setTargetAtTime(0,r.currentTime,.4),setTimeout(()=>{f.forEach(b=>{try{b.stop()}catch{}b.disconnect()}),h.forEach(b=>{try{b.stop()}catch{}b.disconnect()}),u.disconnect()},800))};this.activeTracks.set(e,{stop:E})}}const uf=[{id:"menu-aurora",title:"Aurora",artist:"AFTERHOURS Collective",mood:"menu",config:{bpm:70,chords:[[0,4,7],[9,12,16],[7,11,14],[5,9,12]],root:57,lead:!0,drums:!1,bass:!0,pad:!0}},{id:"explore-lofi",title:"City Lights",artist:"AFTERHOURS Collective",mood:"explore",config:{bpm:82,chords:[[0,4,7],[-3,0,4],[-5,-1,2],[-7,-3,0]],root:60,lead:!0,drums:!0,bass:!0,pad:!0}},{id:"explore-chill",title:"Midnight Stroll",artist:"AFTERHOURS Collective",mood:"explore",config:{bpm:88,chords:[[0,4,7,11],[2,5,9,12],[4,7,11,14],[-1,2,7,11]],root:55,lead:!0,drums:!0,bass:!0,pad:!0}},{id:"drive-neon",title:"Neon Pulse",artist:"AFTERHOURS Collective",mood:"drive",config:{bpm:128,chords:[[0,4,7],[-3,0,4],[-5,-1,2],[-7,-3,0]],root:50,lead:!0,drums:!0,bass:!0,pad:!0}},{id:"drive-overdrive",title:"Overdrive",artist:"AFTERHOURS Collective",mood:"drive",config:{bpm:140,chords:[[0,3,7],[5,10,14],[3,7,10],[-2,3,7]],root:52,lead:!0,drums:!0,bass:!0,pad:!1}},{id:"sunset-amber",title:"Amber Sky",artist:"AFTERHOURS Collective",mood:"sunset",config:{bpm:74,chords:[[0,4,7,11],[2,6,9,13],[-3,0,4,7],[-5,-1,2,7]],root:57,lead:!0,drums:!1,bass:!0,pad:!0}},{id:"night-synthwave",title:"Chrome Dreams",artist:"AFTERHOURS Collective",mood:"night",config:{bpm:110,chords:[[0,3,7,10],[5,8,12,15],[3,7,10,14],[-2,1,5,8]],root:48,lead:!0,drums:!0,bass:!0,pad:!0}},{id:"victory-fanfare",title:"Victory",artist:"AFTERHOURS Collective",mood:"victory",config:{bpm:120,chords:[[0,4,7],[5,9,12],[7,11,14],[0,4,7]],root:60,lead:!0,drums:!0,bass:!0,pad:!0}}];class Nw{engine;current=null;listeners=[];constructor(e){this.engine=e}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}get currentTrack(){return this.current}notify(){this.listeners.forEach(e=>e(this.current))}tracksForMood(e){return uf.filter(t=>t.mood===e)}setMood(e,t={}){if(!this.engine.musicEnabled)return;const r=this.tracksForMood(e);if(r.length===0||this.current&&this.current.mood===e&&!t.force)return;const o=r[Math.floor(Math.random()*r.length)];this.playTrack(o)}playTrack(e){this.engine.musicEnabled&&(this.current&&this.current.id===e.id||(this.current&&this.engine.fadeOutMusic(this.current.id,1.2),this.current=e,this.engine.playMusicTrack(e.id,e.config),this.notify()))}skip(){if(!this.current)return;const e=this.tracksForMood(this.current.mood),t=e.filter(l=>l.id!==this.current.id),r=t.length>0?t:e,o=r[Math.floor(Math.random()*r.length)];this.playTrack(o)}stop(){this.engine.stopAllMusic(),this.current=null,this.notify()}pause(){this.engine.setMusicEnabled(!1)}resume(){}}const ig={masterVolume:.8,musicVolume:.6,sfxVolume:.7,musicEnabled:!0,quality:"medium",timeOfDay:"sunset"},Wg="afterhours.settings";function rg(){try{const s=localStorage.getItem(Wg);if(s)return{...ig,...JSON.parse(s)}}catch{}return{...ig}}function Xg(s){try{localStorage.setItem(Wg,JSON.stringify(s))}catch{}}class Dw{canvas;renderer;scene;world;vehicle;player;camera;input;audio;soundtrack;missions;minimap;rafId=null;lastTime=0;clock=new Ex;screen="menu";inVehicle=!1;prevInVehicle=!1;canEnter=!1;hudListeners=[];currentMissionDef=$l[0];settings;constructor(e,t){this.canvas=e,this.settings=t,this.input=new Mw,this.audio=new Lw,this.soundtrack=new Nw(this.audio)}subscribeHud(e){return this.hudListeners.push(e),()=>{this.hudListeners=this.hudListeners.filter(t=>t!==e)}}subscribeTrack(e){return this.soundtrack.subscribe(e)}async init(){this.renderer=new yw({canvas:this.canvas,antialias:this.settings.quality!=="low",powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.settings.quality==="high"?2:1.25)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=this.settings.quality!=="low",this.renderer.shadowMap.type=sg,this.renderer.toneMapping=hf,this.renderer.toneMappingExposure=1,this.scene=new $_,Tw(this.scene,this.settings.timeOfDay),this.world=ww(this.settings.quality),this.scene.add(this.world.group),this.camera=new Rw(window.innerWidth/window.innerHeight),this.camera.mode="foot",this.vehicle=new Aw,this.vehicle.pos.copy(this.world.garage),this.vehicle.pos.z+=3,this.vehicle.pos.y=0,this.vehicle.group.position.copy(this.vehicle.pos),this.vehicle.setOccupied(!1),this.scene.add(this.vehicle.group),this.player=new bw,this.player.setPosition(new ne(this.world.garage.x+3,0,this.world.garage.z+3)),this.scene.add(this.player.group),this.missions=new Cw(this.scene,240),this.minimap=new Pw(this.world.colliders,240,this.world.garage),window.addEventListener("resize",this.onResize),await this.audio.init(),this.applySettings(this.settings),this.input.enable(),this.input.subscribe(this.onInput),this.startMenuMusic(),this.loop(),this.emitHud()}dispose(){this.rafId&&cancelAnimationFrame(this.rafId),this.input.disable(),this.audio.stopEngine(),this.audio.stopAllMusic(),window.removeEventListener("resize",this.onResize),this.renderer?.dispose()}applySettings(e){if(this.settings=e,this.audio.setMasterVolume(e.masterVolume),this.audio.setMusicVolume(e.musicVolume),this.audio.setSfxVolume(e.sfxVolume),this.audio.setMusicEnabled(e.musicEnabled),this.renderer){this.renderer.shadowMap.enabled=e.quality!=="low";const t=e.quality==="high"?2:1.25;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t))}this.world&&this.world.setQuality(e.quality),Xg(e)}setScreen(e){const t=this.screen;this.screen=e,e==="playing"&&(this.audio.resume(),this.lastTime=performance.now()),e==="paused"&&t==="playing"&&this.soundtrack.pause(),e==="playing"&&t==="paused"&&this.soundtrack.resume(),this.emitHud()}startGame(e=$l[0]){this.currentMissionDef=e,this.audio.resume(),this.audio.playSfx("menu",{volume:.5}),this.vehicle.pos.copy(this.world.garage),this.vehicle.pos.z+=3,this.vehicle.speed=0,this.vehicle.group.position.copy(this.vehicle.pos),this.vehicle.setOccupied(!1),this.inVehicle=!1,this.player.setPosition(new ne(this.world.garage.x+3,0,this.world.garage.z+3)),this.missions.start(e,this.vehicle.pos),this.startSoundtrackFor(e),this.setScreen("playing"),this.lastTime=performance.now()}restartMission(){this.startGame(this.currentMissionDef)}goToMenu(){this.missions.clear(),this.audio.stopEngine(),this.setScreen("menu"),this.startMenuMusic()}startMenuMusic(){this.settings.musicEnabled&&(this.audio.resume(),this.soundtrack.setMood("menu",{force:!0}))}startSoundtrackFor(e){if(!this.settings.musicEnabled)return;let t="explore";e.id==="freedrive"?t=this.settings.timeOfDay==="night"?"night":"explore":t="drive",this.soundtrack.setMood(t,{force:!0})}handlePauseInput(){this.input.state.pausePressed&&(this.screen==="playing"?this.setScreen("paused"):this.screen==="paused"&&this.setScreen("playing"))}loop=()=>{this.rafId=requestAnimationFrame(this.loop);const e=Math.min(.05,this.clock.getDelta()),t=this.screen==="playing";this.handlePauseInput(),t&&this.updateGame(e),this.screen==="menu"||this.screen==="paused"?this.menuCamSpin(e):this.camera.follow(this.inVehicle?this.vehicle.pos:this.player.pos,this.inVehicle?this.vehicle.rot:this.player.rot,e),this.renderer.render(this.scene,this.camera.cam),t&&this.emitHud(),this.input.consumeEdges()};menuAngle=0;menuRadius=40;menuTarget=new ne;menuCamPos=new ne;menuCamSpin(e){this.menuAngle+=e*.08;const t=Math.cos(this.menuAngle)*this.menuRadius,r=Math.sin(this.menuAngle)*this.menuRadius;this.menuCamPos.set(t,14,r),this.camera.cam.position.lerp(this.menuCamPos,Math.min(1,e*1.5)),this.menuTarget.set(0,2,0),this.camera.cam.lookAt(this.menuTarget),this.vehicle.group.rotation.y+=e*.3}updateGame(e){if(this.input.state.interactPressed&&(this.inVehicle?this.exitVehicle():this.canEnter&&this.enterVehicle()),this.inVehicle?(this.vehicle.update(e,this.input.state,this.world.colliders),this.audio.updateEngine(Math.abs(this.vehicle.speed)/this.vehicle.maxSpeed,this.input.state.forward?1:0),this.vehicle.hitThisFrame()&&this.audio.playSfx("collision",{volume:.7}),this.input.state.handbrake&&Math.abs(this.vehicle.speed)>8&&Math.random()<.1&&this.audio.playSfx("tire",{volume:.4}),Math.abs(this.vehicle.speed)>18?this.soundtrack.setMood("drive"):this.soundtrack.setMood("explore")):(this.player.update(e,this.input.state,this.camera.yaw),this.audio.updateEngine(0,0)),this.inVehicle)this.canEnter=!1;else{const t=this.player.pos.x-this.vehicle.pos.x,r=this.player.pos.z-this.vehicle.pos.z,o=Math.sqrt(t*t+r*r);this.canEnter=o<4}if(this.missions.state?.active){const t=this.inVehicle?this.vehicle.pos:this.player.pos,r=this.missions.update(e,t);r.checkpointHit&&this.audio.playSfx("mission",{volume:.5}),r.completed&&(this.audio.playSfx("mission",{volume:.8}),this.soundtrack.setMood("victory",{force:!0}))}}enterVehicle(){this.inVehicle=!0,this.vehicle.setOccupied(!0),this.camera.mode="drive",this.audio.playSfx("enter",{volume:.6}),this.audio.startEngine(),this.player.group.visible=!1}exitVehicle(){this.inVehicle=!1,this.vehicle.setOccupied(!1),this.vehicle.speed=0,this.camera.mode="foot",this.audio.playSfx("exit",{volume:.6}),this.audio.stopEngine();const e=Math.cos(this.vehicle.rot),t=Math.sin(this.vehicle.rot);this.player.pos.set(this.vehicle.pos.x+e*2.2,0,this.vehicle.pos.z-t*2.2),this.player.group.visible=!0}onInput=()=>{};onResize=()=>{!this.renderer||!this.camera||(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.setAspect(window.innerWidth/window.innerHeight))};emitHud(){let e=null;if(this.missions.state&&(e=this.missions.state.checkpoints),this.minimap){const r=this.inVehicle?this.vehicle.pos:this.player.pos,o=this.inVehicle?this.vehicle.rot:this.player.rot,l=this.missions?.state?.marker&&this.missions.state.checkpoints[Math.min(this.missions.state.currentCheckpoint,this.missions.state.checkpoints.length-1)]||null;this.minimap.draw(r,o,l,e,this.missions?.state?.currentCheckpoint??0)}const t={screen:this.screen,speed:this.vehicle?this.vehicle.getSpeedKmh():0,inVehicle:this.inVehicle,canEnterVehicle:this.canEnter,mission:this.missions?.state??null,minimapCanvas:this.minimap?.canvas??null,track:this.soundtrack.currentTrack,timeOfDay:this.settings.timeOfDay};this.hudListeners.forEach(r=>r(t))}skipTrack(){this.soundtrack.skip()}playTrack(e){this.audio.resume(),this.settings.musicEnabled||(this.settings.musicEnabled=!0,this.audio.setMusicEnabled(!0)),this.soundtrack.playTrack(e)}setMood(e){this.soundtrack.setMood(e,{force:!0})}}const Iw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qg=(...s)=>s.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");var Uw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Fw=Ut.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>Ut.createElement("svg",{ref:h,...Uw,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:qg("lucide",o),...f},[...u.map(([p,v])=>Ut.createElement(p,v)),...Array.isArray(l)?l:[l]]));const qn=(s,e)=>{const t=Ut.forwardRef(({className:r,...o},l)=>Ut.createElement(Fw,{ref:l,iconNode:e,className:qg(`lucide-${Iw(s)}`,r),...o}));return t.displayName=`${s}`,t};const Ow=qn("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);const kw=qn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);const Bw=qn("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);const zw=qn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);const Vw=qn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);const Yg=qn("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);const Hw=qn("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);const Gw=qn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);const jg=qn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const Ww=qn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);const Kg=qn("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const $g=qn("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);const Xw=qn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);const rc=qn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function qw({onPlay:s,onSettings:e,onSoundtrack:t,onHowTo:r,onAbout:o,audioStarted:l,onEnableAudio:u}){const f=[{label:"PLAY",icon:jg,onClick:s},{label:"SETTINGS",icon:Kg,onClick:e},{label:"SOUNDTRACK",icon:Hw,onClick:t},{label:"HOW TO PLAY",icon:kw,onClick:r},{label:"ABOUT",icon:Vw,onClick:o}];return q.jsxs("div",{className:"absolute inset-0 z-20 flex flex-col",children:[q.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"}),q.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"}),q.jsxs("div",{className:"relative flex flex-1 flex-col justify-center px-[8vw]",children:[q.jsxs("div",{className:"mb-2 flex items-center gap-3",children:[q.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-amber-400"}),q.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.4em] text-amber-300/80",children:"Arcade Driving"})]}),q.jsxs("h1",{className:"font-['Orbitron',system-ui,sans-serif] text-7xl font-black leading-none tracking-tight text-white sm:text-8xl md:text-[9rem]",children:["AFTER",q.jsx("span",{className:"text-amber-400",children:"HOURS"})]}),q.jsx("p",{className:"mt-3 text-lg font-light tracking-[0.25em] text-white/70 sm:text-xl",children:"THE CITY NEVER SLEEPS."}),q.jsx("div",{className:"mt-10 flex w-[min(320px,80vw)] flex-col gap-3",children:f.map(h=>{const p=h.icon;return q.jsxs("button",{onClick:h.onClick,className:"group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm transition hover:border-amber-400/60 hover:bg-amber-400/10",children:[q.jsx(p,{className:"h-5 w-5 text-amber-400 transition group-hover:scale-110"}),q.jsx("span",{className:"text-lg font-bold tracking-[0.2em] text-white group-hover:text-amber-200",children:h.label})]},h.label)})})]}),q.jsxs("div",{className:"relative flex items-center justify-between px-[8vw] pb-6",children:[q.jsxs("div",{className:"flex items-center gap-2 text-xs text-white/40",children:[q.jsx(Ow,{className:"h-4 w-4"}),q.jsx("span",{children:"v1.0 · Original Soundtrack · Procedural City"})]}),!l&&q.jsxs("button",{onClick:u,className:"flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-400/20",children:[q.jsx(Xw,{className:"h-4 w-4"}),"Tap to enable sound"]})]})]})}function Yw({hud:s,track:e,onSkip:t,onPause:r}){const[o,l]=Ut.useState(!1);Ut.useEffect(()=>{l(!s.inVehicle&&s.canEnterVehicle)},[s.inVehicle,s.canEnterVehicle]);const u=Math.round(s.speed),f=s.mission,h=f?.timeLeft??0,p=Math.floor(h/60),v=Math.floor(h%60);return q.jsxs("div",{className:"pointer-events-none absolute inset-0 z-10 font-sans",children:[f&&q.jsxs("div",{className:"absolute left-1/2 top-4 -translate-x-1/2 text-center",children:[q.jsxs("div",{className:"rounded-xl border border-white/10 bg-black/50 px-6 py-2 backdrop-blur-md",children:[q.jsx("div",{className:"text-xs font-semibold uppercase tracking-[0.3em] text-amber-300",children:f.def.name}),q.jsx("div",{className:"text-sm text-white/80",children:f.def.description})]}),f.def.hasTimer&&q.jsxs("div",{className:`mt-2 inline-block rounded-lg px-4 py-1 font-mono text-2xl font-bold backdrop-blur-md ${h<15?"bg-red-500/30 text-red-200":"bg-black/50 text-white"}`,children:[p,":",v.toString().padStart(2,"0")]}),f.def.type==="checkpoints"&&q.jsxs("div",{className:"mt-1 text-xs text-cyan-300",children:["Checkpoint ",Math.min(f.currentCheckpoint+1,f.checkpoints.length)," / ",f.checkpoints.length]})]}),q.jsx("button",{onClick:r,className:"pointer-events-auto absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:bg-white/10","aria-label":"Pause",children:q.jsx(Gw,{className:"h-5 w-5"})}),s.minimapCanvas&&q.jsx("div",{className:"absolute left-4 top-4 h-[140px] w-[140px] overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-md sm:h-[160px] sm:w-[160px]",children:q.jsx("div",{ref:_=>{_&&s.minimapCanvas&&_.firstChild!==s.minimapCanvas&&_.appendChild(s.minimapCanvas)},className:"h-full w-full"})}),q.jsxs("div",{className:"absolute bottom-6 right-6 flex flex-col items-end",children:[q.jsxs("div",{className:"flex items-end gap-1 rounded-2xl border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-md",children:[q.jsx("span",{className:"font-mono text-5xl font-black tabular-nums text-white",children:u}),q.jsxs("div",{className:"mb-1 flex flex-col items-start",children:[q.jsx("span",{className:"text-[0.6rem] font-semibold uppercase tracking-widest text-amber-300",children:"KM/H"}),q.jsx(Bw,{className:"h-4 w-4 text-amber-400"})]})]}),q.jsx("div",{className:"mt-1 text-xs font-semibold uppercase tracking-widest text-white/50",children:s.inVehicle?"Driving":"On Foot"})]}),q.jsxs("div",{className:"absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md",children:[q.jsx(Yg,{className:"h-5 w-5 text-amber-400"}),q.jsxs("div",{className:"min-w-0",children:[q.jsx("div",{className:"max-w-[160px] truncate text-sm font-semibold text-white",children:e?.title??"—"}),q.jsx("div",{className:"max-w-[160px] truncate text-xs text-white/50",children:e?.artist??""})]}),q.jsx("button",{onClick:t,className:"pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-amber-400/30","aria-label":"Skip track",children:q.jsx($g,{className:"h-4 w-4"})})]}),o&&q.jsx("div",{className:"absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg border border-amber-400/50 bg-black/70 px-5 py-2 backdrop-blur-md",children:q.jsxs("span",{className:"text-sm font-semibold text-amber-300",children:["Press ",q.jsx("kbd",{className:"rounded bg-amber-400/20 px-2 py-0.5 font-mono text-amber-200",children:"E"})," to enter vehicle"]})})]})}function jw({onResume:s,onSettings:e,onRestart:t,onMenu:r}){const o=[{label:"Resume",icon:jg,onClick:s},{label:"Settings",icon:Kg,onClick:e},{label:"Restart Mission",icon:Ww,onClick:t},{label:"Main Menu",icon:zw,onClick:r}];return q.jsx("div",{className:"absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-md",children:q.jsxs("div",{className:"w-[min(360px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl",children:[q.jsx("h2",{className:"mb-6 text-center font-['Orbitron',sans-serif] text-3xl font-black tracking-widest text-white",children:"PAUSED"}),q.jsx("div",{className:"space-y-3",children:o.map(l=>{const u=l.icon;return q.jsxs("button",{onClick:l.onClick,className:"group flex w-full items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:border-amber-400/50 hover:bg-amber-400/10",children:[q.jsx(u,{className:"h-5 w-5 text-amber-400 transition group-hover:scale-110"}),q.jsx("span",{className:"text-lg font-semibold tracking-wider text-white",children:l.label})]},l.label)})})]})})}function Kw({settings:s,onChange:e,onClose:t}){const r=o=>e({...s,...o});return q.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:q.jsxs("div",{className:"w-[min(560px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl",children:[q.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[q.jsx("h2",{className:"text-2xl font-extrabold tracking-widest text-amber-400",children:"SETTINGS"}),q.jsx("button",{onClick:t,className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",children:q.jsx(rc,{className:"h-5 w-5"})})]}),q.jsxs("div",{className:"space-y-5",children:[q.jsx(_d,{label:"Master Volume",value:s.masterVolume,onChange:o=>r({masterVolume:o})}),q.jsx(_d,{label:"Music Volume",value:s.musicVolume,onChange:o=>r({musicVolume:o})}),q.jsx(_d,{label:"Sound Effects",value:s.sfxVolume,onChange:o=>r({sfxVolume:o})}),q.jsxs("div",{className:"flex items-center justify-between",children:[q.jsx("span",{className:"text-sm font-semibold text-white/80",children:"Music"}),q.jsx("button",{onClick:()=>r({musicEnabled:!s.musicEnabled}),className:`relative h-7 w-14 rounded-full transition ${s.musicEnabled?"bg-amber-400":"bg-white/15"}`,children:q.jsx("span",{className:`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition ${s.musicEnabled?"left-7":"left-0.5"}`})})]}),q.jsxs("div",{children:[q.jsx("span",{className:"text-sm font-semibold text-white/80",children:"Graphics Quality"}),q.jsx("div",{className:"mt-2 grid grid-cols-3 gap-2",children:["low","medium","high"].map(o=>q.jsx("button",{onClick:()=>r({quality:o}),className:`rounded-lg border px-3 py-2 text-sm font-semibold capitalize transition ${s.quality===o?"border-amber-400 bg-amber-400/20 text-amber-200":"border-white/10 bg-white/5 text-white/60 hover:bg-white/10"}`,children:o},o))})]}),q.jsxs("div",{children:[q.jsx("span",{className:"text-sm font-semibold text-white/80",children:"Time of Day"}),q.jsx("div",{className:"mt-2 grid grid-cols-2 gap-2",children:["sunset","night"].map(o=>q.jsx("button",{onClick:()=>e({...s,timeOfDay:o}),className:`rounded-lg border px-3 py-2 text-sm font-semibold capitalize transition ${s.timeOfDay===o?"border-amber-400 bg-amber-400/20 text-amber-200":"border-white/10 bg-white/5 text-white/60 hover:bg-white/10"}`,children:o},o))})]}),q.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 p-4",children:[q.jsx("div",{className:"mb-2 text-sm font-bold text-amber-300",children:"Controls"}),q.jsxs("div",{className:"grid grid-cols-2 gap-y-1 text-xs text-white/70",children:[q.jsx("span",{children:"W / ↑"}),q.jsx("span",{children:"Accelerate / forward"}),q.jsx("span",{children:"S / ↓"}),q.jsx("span",{children:"Brake / reverse"}),q.jsx("span",{children:"A / ←"}),q.jsx("span",{children:"Steer left"}),q.jsx("span",{children:"D / →"}),q.jsx("span",{children:"Steer right"}),q.jsx("span",{children:"E"}),q.jsx("span",{children:"Enter / exit vehicle"}),q.jsx("span",{children:"Space"}),q.jsx("span",{children:"Handbrake"}),q.jsx("span",{children:"Shift"}),q.jsx("span",{children:"Sprint (on foot)"}),q.jsx("span",{children:"Esc"}),q.jsx("span",{children:"Pause"})]}),q.jsx("div",{className:"mt-2 text-xs text-white/40",children:"Mobile: on-screen buttons appear automatically."})]})]})]})})}function _d({label:s,value:e,onChange:t}){return q.jsxs("div",{children:[q.jsxs("div",{className:"flex items-center justify-between",children:[q.jsx("span",{className:"text-sm font-semibold text-white/80",children:s}),q.jsxs("span",{className:"font-mono text-xs text-amber-300",children:[Math.round(e*100),"%"]})]}),q.jsx("input",{type:"range",min:0,max:1,step:.01,value:e,onChange:r=>t(parseFloat(r.target.value)),className:"mt-2 w-full accent-amber-400"})]})}function $w({onClose:s}){return q.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:q.jsxs("div",{className:"w-[min(560px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl",children:[q.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[q.jsx("h2",{className:"text-2xl font-extrabold tracking-widest text-amber-400",children:"HOW TO PLAY"}),q.jsx("button",{onClick:s,className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",children:q.jsx(rc,{className:"h-5 w-5"})})]}),q.jsxs("div",{className:"space-y-4 text-sm text-white/80",children:[q.jsx($s,{title:"Getting Started",children:"Start the City Explorer mission to learn the basics. Your car waits in the garage at the center of the city."}),q.jsxs($s,{title:"Entering a Vehicle",children:["Walk up to the car until the prompt appears, then press ",q.jsx(Ti,{children:"E"})," to get in. Press ",q.jsx(Ti,{children:"E"})," again to exit."]}),q.jsxs($s,{title:"Driving",children:["Use ",q.jsx(Ti,{children:"W"}),"/",q.jsx(Ti,{children:"↑"})," to accelerate and ",q.jsx(Ti,{children:"S"}),"/",q.jsx(Ti,{children:"↓"})," to brake or reverse. Steer with ",q.jsx(Ti,{children:"A"}),"/",q.jsx(Ti,{children:"D"}),". Hold ",q.jsx(Ti,{children:"Space"})," for a handbrake to drift through corners."]}),q.jsxs($s,{title:"On Foot",children:["Move with ",q.jsx(Ti,{children:"WASD"})," or arrow keys. Hold ",q.jsx(Ti,{children:"Shift"})," to sprint. The camera follows you."]}),q.jsx($s,{title:"Missions",children:"Reach glowing markers to complete objectives. In Time Trial, hit every checkpoint before the timer ends."}),q.jsx($s,{title:"Music",children:"The soundtrack adapts to your driving — relax while cruising, energy picks up at speed. Use the player in the corner to skip tracks."})]})]})})}function $s({title:s,children:e}){return q.jsxs("div",{children:[q.jsx("div",{className:"mb-1 font-bold text-amber-300",children:s}),q.jsx("div",{className:"text-white/70",children:e})]})}function Ti({children:s}){return q.jsx("kbd",{className:"rounded bg-amber-400/20 px-1.5 py-0.5 font-mono text-xs text-amber-200",children:s})}function Zw({onClose:s}){return q.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:q.jsxs("div",{className:"w-[min(560px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl",children:[q.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[q.jsx("h2",{className:"text-2xl font-extrabold tracking-widest text-amber-400",children:"ABOUT"}),q.jsx("button",{onClick:s,className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",children:q.jsx(rc,{className:"h-5 w-5"})})]}),q.jsxs("div",{className:"space-y-4 text-sm text-white/80",children:[q.jsxs("p",{children:[q.jsxs("span",{className:"font-['Orbitron',sans-serif] text-lg font-black text-white",children:["AFTER",q.jsx("span",{className:"text-amber-400",children:"HOURS"})]})," is an original, browser-based 3D driving game inspired by the freedom and arcade-style action of open-world driving games. The city, the car, the music, and the atmosphere are all original."]}),q.jsx("p",{className:"text-white/60",children:"Built with Three.js and the Web Audio API. The entire soundtrack is synthesized live in your browser — no external music files. The city is procedurally generated each run with stylized lighting and a cinematic golden-hour or neon-night mood."}),q.jsx("p",{className:"text-white/60",children:"This is a playable prototype — the foundation of something bigger. Explore, drive, and enjoy the city that never sleeps."}),q.jsx("p",{className:"pt-2 text-xs text-white/40",children:"v1.0 · Original procedural assets · No copyrighted material"})]})]})})}const Jw={menu:"Main Menu",explore:"City Exploration",drive:"Fast Driving",sunset:"Sunset",night:"Night",victory:"Mission Complete"};function Qw({current:s,onSkip:e,onClose:t,game:r}){const o=[...new Set(uf.map(l=>l.mood))];return q.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:q.jsxs("div",{className:"w-[min(560px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl",children:[q.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[q.jsx("h2",{className:"text-2xl font-extrabold tracking-widest text-amber-400",children:"SOUNDTRACK"}),q.jsx("button",{onClick:t,className:"flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20",children:q.jsx(rc,{className:"h-5 w-5"})})]}),q.jsxs("div",{className:"mb-4 flex items-center justify-between rounded-xl border border-amber-400/20 bg-amber-400/5 p-4",children:[q.jsxs("div",{className:"flex items-center gap-3",children:[q.jsx(Yg,{className:"h-6 w-6 text-amber-400"}),q.jsxs("div",{children:[q.jsx("div",{className:"text-sm text-white/50",children:"Now Playing"}),q.jsx("div",{className:"text-lg font-bold text-white",children:s?.title??"—"}),q.jsx("div",{className:"text-xs text-white/50",children:s?.artist??""})]})]}),q.jsx("button",{onClick:e,className:"flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 transition hover:bg-amber-400/30",children:q.jsx($g,{className:"h-5 w-5"})})]}),q.jsx("div",{className:"max-h-[40vh] space-y-4 overflow-y-auto pr-1",children:o.map(l=>q.jsxs("div",{children:[q.jsx("div",{className:"mb-2 text-xs font-bold uppercase tracking-widest text-amber-300/80",children:Jw[l]??l}),q.jsx("div",{className:"space-y-1",children:uf.filter(u=>u.mood===l).map(u=>q.jsxs("button",{onClick:()=>r?.playTrack(u),className:`flex w-full items-center justify-between rounded-lg border px-4 py-2 text-left transition ${s?.id===u.id?"border-amber-400 bg-amber-400/10":"border-white/5 bg-white/5 hover:bg-white/10"}`,children:[q.jsxs("div",{children:[q.jsx("div",{className:"text-sm font-semibold text-white",children:u.title}),q.jsxs("div",{className:"text-xs text-white/40",children:[u.artist," · ",u.config.bpm," BPM"]})]}),s?.id===u.id&&q.jsx("span",{className:"text-xs font-bold text-amber-300",children:"PLAYING"})]},u.id))})]},l))}),q.jsx("p",{className:"mt-4 text-xs text-white/40",children:"All tracks are original and synthesized live with the Web Audio API. No copyrighted material is used."})]})})}function e1({input:s}){const e=Ut.useRef(new Set),t=(l,u)=>{e.current.add(u),s.setTouch(l,!0)},r=(l,u)=>{e.current.delete(u),s.setTouch(l,!1)};Ut.useEffect(()=>()=>{e.current.forEach(l=>{}),s.setTouch("forward",!1),s.setTouch("backward",!1),s.setTouch("left",!1),s.setTouch("right",!1),s.setTouch("handbrake",!1)},[s]);const o=(l,u,f,h)=>q.jsx("button",{className:`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border-2 text-lg font-bold backdrop-blur-md transition active:scale-95 ${h}`,onTouchStart:p=>{p.preventDefault(),t(l,u)},onTouchEnd:p=>{p.preventDefault(),r(l,u)},onTouchCancel:p=>{p.preventDefault(),r(l,u)},onContextMenu:p=>p.preventDefault(),children:f});return q.jsxs("div",{className:"absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-4 pb-4 sm:hidden",children:[q.jsxs("div",{className:"flex gap-3",children:[o("left","ml","◀","border-white/20 bg-black/50 text-white"),o("right","mr","▶","border-white/20 bg-black/50 text-white")]}),q.jsxs("div",{className:"flex flex-col items-end gap-3",children:[q.jsxs("div",{className:"flex gap-3",children:[q.jsx("button",{className:"pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-amber-400/50 bg-amber-400/20 text-amber-200 backdrop-blur-md transition active:scale-95",onTouchStart:l=>{l.preventDefault(),s.triggerInteract()},onContextMenu:l=>l.preventDefault(),children:"IN/OUT"}),q.jsx("button",{className:"pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 bg-black/50 text-white/80 backdrop-blur-md transition active:scale-95",onTouchStart:l=>{l.preventDefault(),s.triggerPause()},onContextMenu:l=>l.preventDefault(),children:"❚❚"})]}),q.jsxs("div",{className:"flex gap-3",children:[o("backward","bk","▼","border-red-400/40 bg-red-500/20 text-red-200"),o("forward","fw","▲","border-emerald-400/40 bg-emerald-500/20 text-emerald-200")]})]})]})}function t1(){const s=Ut.useRef(null),e=Ut.useRef(null),[t,r]=Ut.useState(null),[o,l]=Ut.useState(null),[u,f]=Ut.useState("none"),[h,p]=Ut.useState(()=>rg()),[v,_]=Ut.useState(!1),[g,y]=Ut.useState(!1);Ut.useEffect(()=>{const U=()=>_(window.matchMedia("(pointer: coarse)").matches||window.innerWidth<820);return U(),window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[]),Ut.useEffect(()=>{if(!s.current)return;const U=new Dw(s.current,rg());e.current=U;const E=U.subscribeHud(r),b=U.subscribeTrack(l);return U.init().catch(O=>console.error("Game init failed",O)),()=>{E(),b(),U.dispose(),e.current=null}},[]);const w=Ut.useCallback(U=>{p(U),Xg(U),e.current?.applySettings(U)},[]),R=Ut.useCallback(U=>{g||(e.current?.audio.resume(),y(!0)),e.current?.startGame(U??$l[0]),f("none")},[g]),S=Ut.useCallback(U=>{R(U)},[R]),x=Ut.useCallback(()=>{e.current?.setScreen("playing")},[]),I=Ut.useCallback(()=>{e.current?.restartMission()},[]),H=Ut.useCallback(()=>{e.current?.goToMenu(),f("none")},[]),C=Ut.useCallback(()=>{e.current?.setScreen("paused")},[]),P=Ut.useCallback(()=>{e.current?.skipTrack()},[]),L=t?.screen??"menu";return q.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-black select-none",children:[q.jsx("canvas",{ref:s,className:"absolute inset-0 w-full h-full block"}),L==="playing"&&t&&q.jsxs(q.Fragment,{children:[q.jsx(Yw,{hud:t,track:o,onSkip:P,onPause:C}),v&&q.jsx(e1,{input:e.current.input})]}),L==="menu"&&q.jsx(qw,{onPlay:()=>f("missionselect"),onSettings:()=>f("settings"),onSoundtrack:()=>f("soundtrack"),onHowTo:()=>f("howto"),onAbout:()=>f("about"),audioStarted:g,onEnableAudio:()=>{e.current?.audio.resume(),e.current?.startMenuMusic(),y(!0)}}),L==="paused"&&q.jsx(jw,{onResume:x,onSettings:()=>f("settings"),onRestart:I,onMenu:H}),u==="missionselect"&&q.jsx(n1,{onSelect:S}),u==="settings"&&q.jsx(Kw,{settings:h,onChange:w,onClose:()=>f("none")}),u==="soundtrack"&&q.jsx(Qw,{current:o,onSkip:P,onClose:()=>f("none"),game:e.current}),u==="howto"&&q.jsx($w,{onClose:()=>f("none")}),u==="about"&&q.jsx(Zw,{onClose:()=>f("none")})]})}function n1({onSelect:s}){return q.jsx("div",{className:"absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm",children:q.jsxs("div",{className:"w-[min(640px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl",children:[q.jsx("h2",{className:"text-2xl font-extrabold tracking-widest text-amber-400",children:"SELECT MISSION"}),q.jsx("div",{className:"mt-4 space-y-3",children:$l.map(e=>q.jsxs("button",{onClick:()=>s(e),className:"group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:border-amber-400/50 hover:bg-amber-400/10",children:[q.jsxs("div",{children:[q.jsx("div",{className:"text-lg font-bold text-white",children:e.name}),q.jsx("div",{className:"text-sm text-white/60",children:e.description})]}),q.jsx("span",{className:"text-amber-400 opacity-0 transition group-hover:opacity-100",children:"PLAY →"})]},e.id))})]})})}Ov.createRoot(document.getElementById("root")).render(q.jsx(Ut.StrictMode,{children:q.jsx(t1,{})}));
