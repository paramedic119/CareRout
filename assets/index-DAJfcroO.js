(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const $o=()=>{};var br={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Uo=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],l=i[n++],h=i[n++],g=((o&7)<<18|(c&63)<<12|(l&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const c=i[n++],l=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},ps={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],l=o+1<i.length,h=l?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,b=c>>2,S=(c&3)<<4|h>>4;let k=(h&15)<<2|_>>6,D=_&63;g||(D=64,l||(k=64)),r.push(n[b],n[S],n[k],n[D])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ms(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Uo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],h=o<i.length?n[i.charAt(o)]:0;++o;const _=o<i.length?n[i.charAt(o)]:64;++o;const S=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||h==null||_==null||S==null)throw new Wo;const k=c<<2|h>>4;if(r.push(k),_!==64){const D=h<<4&240|_>>2;if(r.push(D),S!==64){const P=_<<6&192|S;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Wo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bo=function(i){const e=ms(i);return ps.encodeByteArray(e,!0)},gs=function(i){return Bo(i).replace(/\./g,"")},vs=function(i){try{return ps.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=()=>Fo().__FIREBASE_DEFAULTS__,Vo=()=>{if(typeof process>"u"||typeof br>"u")return;const i=br.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},jo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&vs(i[1]);return e&&JSON.parse(e)},Ho=()=>{try{return $o()||qo()||Vo()||jo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},zo=i=>{var e;return(e=Ho())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Go(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function Ko(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Xo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yo(){try{return typeof indexedDB=="object"}catch{return!1}}function Qo(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="FirebaseError";class Oe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Zo,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,At.prototype.create)}}class At{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?ea(c,r):"Error",h=`${this.serviceName}: ${l} (${o}).`;return new Oe(o,h,r)}}function ea(i,e){return i.replace(ta,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const ta=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ia(i,e){const n=new na(i,e);return n.subscribe.bind(n)}class na{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ra(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Vi),o.error===void 0&&(o.error=Vi),o.complete===void 0&&(o.complete=Vi);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ra(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Vi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}class Ye{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(U||(U={}));const sa={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},oa=U.INFO,aa={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},ca=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=aa[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class un{constructor(e){this.name=e,this._logLevel=oa,this._logHandler=ca,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const la=(i,e)=>e.some(n=>i instanceof n);let Er,kr;function da(){return Er||(Er=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ua(){return kr||(kr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Is=new WeakMap,Zi=new WeakMap,Ts=new WeakMap,ji=new WeakMap,hn=new WeakMap;function ha(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",l)},c=()=>{n(be(i.result)),o()},l=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Is.set(n,i)}).catch(()=>{}),hn.set(e,i),e}function fa(i){if(Zi.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",l),i.removeEventListener("abort",l)},c=()=>{n(),o()},l=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",l),i.addEventListener("abort",l)});Zi.set(i,e)}let en={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Zi.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ts.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ma(i){en=i(en)}function pa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Hi(this),e,...n);return Ts.set(r,e.sort?e.sort():[e]),be(r)}:ua().includes(i)?function(...e){return i.apply(Hi(this),e),be(Is.get(this))}:function(...e){return be(i.apply(Hi(this),e))}}function ga(i){return typeof i=="function"?pa(i):(i instanceof IDBTransaction&&fa(i),la(i,da())?new Proxy(i,en):i)}function be(i){if(i instanceof IDBRequest)return ha(i);if(ji.has(i))return ji.get(i);const e=ga(i);return e!==i&&(ji.set(i,e),hn.set(e,i)),e}const Hi=i=>hn.get(i);function va(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const l=indexedDB.open(i,e),h=be(l);return r&&l.addEventListener("upgradeneeded",g=>{r(be(l.result),g.oldVersion,g.newVersion,be(l.transaction),g)}),n&&l.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),h.then(g=>{c&&g.addEventListener("close",()=>c()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),h}const ya=["get","getKey","getAll","getAllKeys","count"],_a=["put","add","delete","clear"],zi=new Map;function Ar(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(zi.get(e))return zi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=_a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||ya.includes(n)))return;const c=async function(l,...h){const g=this.transaction(l,o?"readwrite":"readonly");let _=g.store;return r&&(_=_.index(h.shift())),(await Promise.all([_[n](...h),o&&g.done]))[0]};return zi.set(e,c),c}ma(i=>({...i,get:(e,n,r)=>Ar(e,n)||i.get(e,n,r),has:(e,n)=>!!Ar(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ta(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ta(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tn="@firebase/app",Or="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new un("@firebase/app"),wa="@firebase/app-compat",Sa="@firebase/analytics-compat",ba="@firebase/analytics",Ea="@firebase/app-check-compat",ka="@firebase/app-check",Aa="@firebase/auth",Oa="@firebase/auth-compat",Pa="@firebase/database",Da="@firebase/data-connect",Ca="@firebase/database-compat",La="@firebase/functions",Ra="@firebase/functions-compat",Na="@firebase/installations",xa="@firebase/installations-compat",Ma="@firebase/messaging",$a="@firebase/messaging-compat",Ua="@firebase/performance",Wa="@firebase/performance-compat",Ba="@firebase/remote-config",Fa="@firebase/remote-config-compat",qa="@firebase/storage",Va="@firebase/storage-compat",ja="@firebase/firestore",Ha="@firebase/ai",za="@firebase/firestore-compat",Ga="firebase",Ka="12.12.0",Ja={[tn]:"fire-core",[wa]:"fire-core-compat",[ba]:"fire-analytics",[Sa]:"fire-analytics-compat",[ka]:"fire-app-check",[Ea]:"fire-app-check-compat",[Aa]:"fire-auth",[Oa]:"fire-auth-compat",[Pa]:"fire-rtdb",[Da]:"fire-data-connect",[Ca]:"fire-rtdb-compat",[La]:"fire-fn",[Ra]:"fire-fn-compat",[Na]:"fire-iid",[xa]:"fire-iid-compat",[Ma]:"fire-fcm",[$a]:"fire-fcm-compat",[Ua]:"fire-perf",[Wa]:"fire-perf-compat",[Ba]:"fire-rc",[Fa]:"fire-rc-compat",[qa]:"fire-gcs",[Va]:"fire-gcs-compat",[ja]:"fire-fst",[za]:"fire-fst-compat",[Ha]:"fire-vertex","fire-js":"fire-js",[Ga]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Map,Ya=new Map,Pr=new Map;function Dr(i,e){try{i.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Qe(i){const e=i.name;if(Pr.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;Pr.set(e,i);for(const n of Xa.values())Dr(n,i);for(const n of Ya.values())Dr(n,i);return!0}function xe(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new At("app","Firebase",Qa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=Ka;function Ee(i,e,n){let r=Ja[i]??i;n&&(r+=`-${n}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const l=[`Unable to register library "${r}" with version "${e}":`];o&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(l.join(" "));return}Qe(new Ye(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="firebase-heartbeat-database",ec=1,wt="firebase-heartbeat-store";let Gi=null;function ws(){return Gi||(Gi=va(Za,ec,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(wt)}catch(n){console.warn(n)}}}}).catch(i=>{throw fn.create("idb-open",{originalErrorMessage:i.message})})),Gi}async function tc(i){try{const n=(await ws()).transaction(wt),r=await n.objectStore(wt).get(Ss(i));return await n.done,r}catch(e){if(e instanceof Oe)pe.warn(e.message);else{const n=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pe.warn(n.message)}}}async function Cr(i,e){try{const r=(await ws()).transaction(wt,"readwrite");await r.objectStore(wt).put(e,Ss(i)),await r.done}catch(n){if(n instanceof Oe)pe.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(r.message)}}}function Ss(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=1024,nc=30;class rc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Lr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>nc){const l=ac(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lr(),{heartbeatsToSend:r,unsentEntries:o}=sc(this._heartbeatsCache.heartbeats),c=gs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return pe.warn(n),""}}}function Lr(){return new Date().toISOString().substring(0,10)}function sc(i,e=ic){const n=[];let r=i.slice();for(const o of i){const c=n.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),Rr(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Rr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?Qo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rr(i){return gs(JSON.stringify({version:2,heartbeats:i})).length}function ac(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(i){Qe(new Ye("platform-logger",e=>new Ia(e),"PRIVATE")),Qe(new Ye("heartbeat",e=>new rc(e),"PRIVATE")),Ee(tn,Or,i),Ee(tn,Or,"esm2020"),Ee("fire-js","")}cc("");var lc="firebase",dc="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(lc,dc,"app");var Nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mn;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,u){function m(){}m.prototype=u.prototype,v.F=u.prototype,v.prototype=new m,v.prototype.constructor=v,v.D=function(y,p,T){for(var f=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)f[Z-2]=arguments[Z];return u.prototype[p].apply(y,f)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(v,u,m){m||(m=0);const y=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)y[p]=u.charCodeAt(m++)|u.charCodeAt(m++)<<8|u.charCodeAt(m++)<<16|u.charCodeAt(m++)<<24;else for(p=0;p<16;++p)y[p]=u[m++]|u[m++]<<8|u[m++]<<16|u[m++]<<24;u=v.g[0],m=v.g[1],p=v.g[2];let T=v.g[3],f;f=u+(T^m&(p^T))+y[0]+3614090360&4294967295,u=m+(f<<7&4294967295|f>>>25),f=T+(p^u&(m^p))+y[1]+3905402710&4294967295,T=u+(f<<12&4294967295|f>>>20),f=p+(m^T&(u^m))+y[2]+606105819&4294967295,p=T+(f<<17&4294967295|f>>>15),f=m+(u^p&(T^u))+y[3]+3250441966&4294967295,m=p+(f<<22&4294967295|f>>>10),f=u+(T^m&(p^T))+y[4]+4118548399&4294967295,u=m+(f<<7&4294967295|f>>>25),f=T+(p^u&(m^p))+y[5]+1200080426&4294967295,T=u+(f<<12&4294967295|f>>>20),f=p+(m^T&(u^m))+y[6]+2821735955&4294967295,p=T+(f<<17&4294967295|f>>>15),f=m+(u^p&(T^u))+y[7]+4249261313&4294967295,m=p+(f<<22&4294967295|f>>>10),f=u+(T^m&(p^T))+y[8]+1770035416&4294967295,u=m+(f<<7&4294967295|f>>>25),f=T+(p^u&(m^p))+y[9]+2336552879&4294967295,T=u+(f<<12&4294967295|f>>>20),f=p+(m^T&(u^m))+y[10]+4294925233&4294967295,p=T+(f<<17&4294967295|f>>>15),f=m+(u^p&(T^u))+y[11]+2304563134&4294967295,m=p+(f<<22&4294967295|f>>>10),f=u+(T^m&(p^T))+y[12]+1804603682&4294967295,u=m+(f<<7&4294967295|f>>>25),f=T+(p^u&(m^p))+y[13]+4254626195&4294967295,T=u+(f<<12&4294967295|f>>>20),f=p+(m^T&(u^m))+y[14]+2792965006&4294967295,p=T+(f<<17&4294967295|f>>>15),f=m+(u^p&(T^u))+y[15]+1236535329&4294967295,m=p+(f<<22&4294967295|f>>>10),f=u+(p^T&(m^p))+y[1]+4129170786&4294967295,u=m+(f<<5&4294967295|f>>>27),f=T+(m^p&(u^m))+y[6]+3225465664&4294967295,T=u+(f<<9&4294967295|f>>>23),f=p+(u^m&(T^u))+y[11]+643717713&4294967295,p=T+(f<<14&4294967295|f>>>18),f=m+(T^u&(p^T))+y[0]+3921069994&4294967295,m=p+(f<<20&4294967295|f>>>12),f=u+(p^T&(m^p))+y[5]+3593408605&4294967295,u=m+(f<<5&4294967295|f>>>27),f=T+(m^p&(u^m))+y[10]+38016083&4294967295,T=u+(f<<9&4294967295|f>>>23),f=p+(u^m&(T^u))+y[15]+3634488961&4294967295,p=T+(f<<14&4294967295|f>>>18),f=m+(T^u&(p^T))+y[4]+3889429448&4294967295,m=p+(f<<20&4294967295|f>>>12),f=u+(p^T&(m^p))+y[9]+568446438&4294967295,u=m+(f<<5&4294967295|f>>>27),f=T+(m^p&(u^m))+y[14]+3275163606&4294967295,T=u+(f<<9&4294967295|f>>>23),f=p+(u^m&(T^u))+y[3]+4107603335&4294967295,p=T+(f<<14&4294967295|f>>>18),f=m+(T^u&(p^T))+y[8]+1163531501&4294967295,m=p+(f<<20&4294967295|f>>>12),f=u+(p^T&(m^p))+y[13]+2850285829&4294967295,u=m+(f<<5&4294967295|f>>>27),f=T+(m^p&(u^m))+y[2]+4243563512&4294967295,T=u+(f<<9&4294967295|f>>>23),f=p+(u^m&(T^u))+y[7]+1735328473&4294967295,p=T+(f<<14&4294967295|f>>>18),f=m+(T^u&(p^T))+y[12]+2368359562&4294967295,m=p+(f<<20&4294967295|f>>>12),f=u+(m^p^T)+y[5]+4294588738&4294967295,u=m+(f<<4&4294967295|f>>>28),f=T+(u^m^p)+y[8]+2272392833&4294967295,T=u+(f<<11&4294967295|f>>>21),f=p+(T^u^m)+y[11]+1839030562&4294967295,p=T+(f<<16&4294967295|f>>>16),f=m+(p^T^u)+y[14]+4259657740&4294967295,m=p+(f<<23&4294967295|f>>>9),f=u+(m^p^T)+y[1]+2763975236&4294967295,u=m+(f<<4&4294967295|f>>>28),f=T+(u^m^p)+y[4]+1272893353&4294967295,T=u+(f<<11&4294967295|f>>>21),f=p+(T^u^m)+y[7]+4139469664&4294967295,p=T+(f<<16&4294967295|f>>>16),f=m+(p^T^u)+y[10]+3200236656&4294967295,m=p+(f<<23&4294967295|f>>>9),f=u+(m^p^T)+y[13]+681279174&4294967295,u=m+(f<<4&4294967295|f>>>28),f=T+(u^m^p)+y[0]+3936430074&4294967295,T=u+(f<<11&4294967295|f>>>21),f=p+(T^u^m)+y[3]+3572445317&4294967295,p=T+(f<<16&4294967295|f>>>16),f=m+(p^T^u)+y[6]+76029189&4294967295,m=p+(f<<23&4294967295|f>>>9),f=u+(m^p^T)+y[9]+3654602809&4294967295,u=m+(f<<4&4294967295|f>>>28),f=T+(u^m^p)+y[12]+3873151461&4294967295,T=u+(f<<11&4294967295|f>>>21),f=p+(T^u^m)+y[15]+530742520&4294967295,p=T+(f<<16&4294967295|f>>>16),f=m+(p^T^u)+y[2]+3299628645&4294967295,m=p+(f<<23&4294967295|f>>>9),f=u+(p^(m|~T))+y[0]+4096336452&4294967295,u=m+(f<<6&4294967295|f>>>26),f=T+(m^(u|~p))+y[7]+1126891415&4294967295,T=u+(f<<10&4294967295|f>>>22),f=p+(u^(T|~m))+y[14]+2878612391&4294967295,p=T+(f<<15&4294967295|f>>>17),f=m+(T^(p|~u))+y[5]+4237533241&4294967295,m=p+(f<<21&4294967295|f>>>11),f=u+(p^(m|~T))+y[12]+1700485571&4294967295,u=m+(f<<6&4294967295|f>>>26),f=T+(m^(u|~p))+y[3]+2399980690&4294967295,T=u+(f<<10&4294967295|f>>>22),f=p+(u^(T|~m))+y[10]+4293915773&4294967295,p=T+(f<<15&4294967295|f>>>17),f=m+(T^(p|~u))+y[1]+2240044497&4294967295,m=p+(f<<21&4294967295|f>>>11),f=u+(p^(m|~T))+y[8]+1873313359&4294967295,u=m+(f<<6&4294967295|f>>>26),f=T+(m^(u|~p))+y[15]+4264355552&4294967295,T=u+(f<<10&4294967295|f>>>22),f=p+(u^(T|~m))+y[6]+2734768916&4294967295,p=T+(f<<15&4294967295|f>>>17),f=m+(T^(p|~u))+y[13]+1309151649&4294967295,m=p+(f<<21&4294967295|f>>>11),f=u+(p^(m|~T))+y[4]+4149444226&4294967295,u=m+(f<<6&4294967295|f>>>26),f=T+(m^(u|~p))+y[11]+3174756917&4294967295,T=u+(f<<10&4294967295|f>>>22),f=p+(u^(T|~m))+y[2]+718787259&4294967295,p=T+(f<<15&4294967295|f>>>17),f=m+(T^(p|~u))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+u&4294967295,v.g[1]=v.g[1]+(p+(f<<21&4294967295|f>>>11))&4294967295,v.g[2]=v.g[2]+p&4294967295,v.g[3]=v.g[3]+T&4294967295}r.prototype.v=function(v,u){u===void 0&&(u=v.length);const m=u-this.blockSize,y=this.C;let p=this.h,T=0;for(;T<u;){if(p==0)for(;T<=m;)o(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<u;)if(y[p++]=v.charCodeAt(T++),p==this.blockSize){o(this,y),p=0;break}}else for(;T<u;)if(y[p++]=v[T++],p==this.blockSize){o(this,y),p=0;break}}this.h=p,this.o+=u},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var u=1;u<v.length-8;++u)v[u]=0;u=this.o*8;for(var m=v.length-8;m<v.length;++m)v[m]=u&255,u/=256;for(this.v(v),v=Array(16),u=0,m=0;m<4;++m)for(let y=0;y<32;y+=8)v[u++]=this.g[m]>>>y&255;return v};function c(v,u){var m=h;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=u(v)}function l(v,u){this.h=u;const m=[];let y=!0;for(let p=v.length-1;p>=0;p--){const T=v[p]|0;y&&T==u||(m[p]=T,y=!1)}this.g=m}var h={};function g(v){return-128<=v&&v<128?c(v,function(u){return new l([u|0],u<0?-1:0)}):new l([v|0],v<0?-1:0)}function _(v){if(isNaN(v)||!isFinite(v))return S;if(v<0)return A(_(-v));const u=[];let m=1;for(let y=0;v>=m;y++)u[y]=v/m|0,m*=4294967296;return new l(u,0)}function b(v,u){if(v.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(v.charAt(0)=="-")return A(b(v.substring(1),u));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=_(Math.pow(u,8));let y=S;for(let T=0;T<v.length;T+=8){var p=Math.min(8,v.length-T);const f=parseInt(v.substring(T,T+p),u);p<8?(p=_(Math.pow(u,p)),y=y.j(p).add(_(f))):(y=y.j(m),y=y.add(_(f)))}return y}var S=g(0),k=g(1),D=g(16777216);i=l.prototype,i.m=function(){if(N(this))return-A(this).m();let v=0,u=1;for(let m=0;m<this.g.length;m++){const y=this.i(m);v+=(y>=0?y:4294967296+y)*u,u*=4294967296}return v},i.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(N(this))return"-"+A(this).toString(v);const u=_(Math.pow(v,6));var m=this;let y="";for(;;){const p=Q(m,u).g;m=C(m,p.j(u));let T=((m.g.length>0?m.g[0]:m.h)>>>0).toString(v);if(m=p,P(m))return T+y;for(;T.length<6;)T="0"+T;y=T+y}},i.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(let u=0;u<v.g.length;u++)if(v.g[u]!=0)return!1;return!0}function N(v){return v.h==-1}i.l=function(v){return v=C(this,v),N(v)?-1:P(v)?0:1};function A(v){const u=v.g.length,m=[];for(let y=0;y<u;y++)m[y]=~v.g[y];return new l(m,~v.h).add(k)}i.abs=function(){return N(this)?A(this):this},i.add=function(v){const u=Math.max(this.g.length,v.g.length),m=[];let y=0;for(let p=0;p<=u;p++){let T=y+(this.i(p)&65535)+(v.i(p)&65535),f=(T>>>16)+(this.i(p)>>>16)+(v.i(p)>>>16);y=f>>>16,T&=65535,f&=65535,m[p]=f<<16|T}return new l(m,m[m.length-1]&-2147483648?-1:0)};function C(v,u){return v.add(A(u))}i.j=function(v){if(P(this)||P(v))return S;if(N(this))return N(v)?A(this).j(A(v)):A(A(this).j(v));if(N(v))return A(this.j(A(v)));if(this.l(D)<0&&v.l(D)<0)return _(this.m()*v.m());const u=this.g.length+v.g.length,m=[];for(var y=0;y<2*u;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(let p=0;p<v.g.length;p++){const T=this.i(y)>>>16,f=this.i(y)&65535,Z=v.i(p)>>>16,De=v.i(p)&65535;m[2*y+2*p]+=f*De,F(m,2*y+2*p),m[2*y+2*p+1]+=T*De,F(m,2*y+2*p+1),m[2*y+2*p+1]+=f*Z,F(m,2*y+2*p+1),m[2*y+2*p+2]+=T*Z,F(m,2*y+2*p+2)}for(v=0;v<u;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=u;v<2*u;v++)m[v]=0;return new l(m,0)};function F(v,u){for(;(v[u]&65535)!=v[u];)v[u+1]+=v[u]>>>16,v[u]&=65535,u++}function K(v,u){this.g=v,this.h=u}function Q(v,u){if(P(u))throw Error("division by zero");if(P(v))return new K(S,S);if(N(v))return u=Q(A(v),u),new K(A(u.g),A(u.h));if(N(u))return u=Q(v,A(u)),new K(A(u.g),u.h);if(v.g.length>30){if(N(v)||N(u))throw Error("slowDivide_ only works with positive integers.");for(var m=k,y=u;y.l(v)<=0;)m=J(m),y=J(y);var p=H(m,1),T=H(y,1);for(y=H(y,2),m=H(m,2);!P(y);){var f=T.add(y);f.l(v)<=0&&(p=p.add(m),T=f),y=H(y,1),m=H(m,1)}return u=C(v,p.j(u)),new K(p,u)}for(p=S;v.l(u)>=0;){for(m=Math.max(1,Math.floor(v.m()/u.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),T=_(m),f=T.j(u);N(f)||f.l(v)>0;)m-=y,T=_(m),f=T.j(u);P(T)&&(T=k),p=p.add(T),v=C(v,f)}return new K(p,v)}i.B=function(v){return Q(this,v).h},i.and=function(v){const u=Math.max(this.g.length,v.g.length),m=[];for(let y=0;y<u;y++)m[y]=this.i(y)&v.i(y);return new l(m,this.h&v.h)},i.or=function(v){const u=Math.max(this.g.length,v.g.length),m=[];for(let y=0;y<u;y++)m[y]=this.i(y)|v.i(y);return new l(m,this.h|v.h)},i.xor=function(v){const u=Math.max(this.g.length,v.g.length),m=[];for(let y=0;y<u;y++)m[y]=this.i(y)^v.i(y);return new l(m,this.h^v.h)};function J(v){const u=v.g.length+1,m=[];for(let y=0;y<u;y++)m[y]=v.i(y)<<1|v.i(y-1)>>>31;return new l(m,v.h)}function H(v,u){const m=u>>5;u%=32;const y=v.g.length-m,p=[];for(let T=0;T<y;T++)p[T]=u>0?v.i(T+m)>>>u|v.i(T+m+1)<<32-u:v.i(T+m);return new l(p,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=b,mn=l}).apply(typeof Nr<"u"?Nr:typeof self<"u"?self:typeof window<"u"?window:{});var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof jt=="object"&&jt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var d=0;d<t.length-1;d++){var I=t[d];if(!(I in a))break e;a=a[I]}t=t[t.length-1],d=a[t],s=s(d),s!=d&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}o("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(t){return t||function(s){var a=[],d;for(d in s)Object.prototype.hasOwnProperty.call(s,d)&&a.push([d,s[d]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function h(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function g(t,s,a){return t.call.apply(t.bind,arguments)}function _(t,s,a){return _=g,_.apply(null,arguments)}function b(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var d=a.slice();return d.push.apply(d,arguments),t.apply(this,d)}}function S(t,s){function a(){}a.prototype=s.prototype,t.Z=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Ob=function(d,I,w){for(var E=Array(arguments.length-2),O=2;O<arguments.length;O++)E[O-2]=arguments[O];return s.prototype[I].apply(d,E)}}var k=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function D(t){const s=t.length;if(s>0){const a=Array(s);for(let d=0;d<s;d++)a[d]=t[d];return a}return[]}function P(t,s){for(let d=1;d<arguments.length;d++){const I=arguments[d];var a=typeof I;if(a=a!="object"?a:I?Array.isArray(I)?"array":a:"null",a=="array"||a=="object"&&typeof I.length=="number"){a=t.length||0;const w=I.length||0;t.length=a+w;for(let E=0;E<w;E++)t[a+E]=I[E]}else t.push(I)}}class N{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return this.h>0?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function A(t){l.setTimeout(()=>{throw t},0)}function C(){var t=v;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class F{constructor(){this.h=this.g=null}add(s,a){const d=K.get();d.set(s,a),this.h?this.h.next=d:this.g=d,this.h=d}}var K=new N(()=>new Q,t=>t.reset());class Q{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let J,H=!1,v=new F,u=()=>{const t=Promise.resolve(void 0);J=()=>{t.then(m)}};function m(){for(var t;t=C();){try{t.h.call(t.g)}catch(a){A(a)}var s=K;s.j(t),s.h<100&&(s.h++,t.next=s.g,s.g=t)}H=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};l.addEventListener("test",a,s),l.removeEventListener("test",a,s)}catch{}return t}();function f(t){return/^[\s\xa0]*$/.test(t)}function Z(t,s){p.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,s)}S(Z,p),Z.prototype.init=function(t,s){const a=this.type=t.type,d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget,s||(a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement)),this.relatedTarget=s,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var De="closure_listenable_"+(Math.random()*1e6|0),io=0;function no(t,s,a,d,I){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!d,this.ha=I,this.key=++io,this.da=this.fa=!1}function Lt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Rt(t,s,a){for(const d in t)s.call(a,t[d],d,t)}function ro(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function En(t){const s={};for(const a in t)s[a]=t[a];return s}const kn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function An(t,s){let a,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(a in d)t[a]=d[a];for(let w=0;w<kn.length;w++)a=kn[w],Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a])}}function Nt(t){this.src=t,this.g={},this.h=0}Nt.prototype.add=function(t,s,a,d,I){const w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);const E=yi(t,s,d,I);return E>-1?(s=t[E],a||(s.fa=!1)):(s=new no(s,this.src,w,!!d,I),s.fa=a,t.push(s)),s};function vi(t,s){const a=s.type;if(a in t.g){var d=t.g[a],I=Array.prototype.indexOf.call(d,s,void 0),w;(w=I>=0)&&Array.prototype.splice.call(d,I,1),w&&(Lt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function yi(t,s,a,d){for(let I=0;I<t.length;++I){const w=t[I];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==d)return I}return-1}var _i="closure_lm_"+(Math.random()*1e6|0),Ii={};function On(t,s,a,d,I){if(Array.isArray(s)){for(let w=0;w<s.length;w++)On(t,s[w],a,d,I);return null}return a=Cn(a),t&&t[De]?t.J(s,a,h(d)?!!d.capture:!1,I):so(t,s,a,!1,d,I)}function so(t,s,a,d,I,w){if(!s)throw Error("Invalid event type");const E=h(I)?!!I.capture:!!I;let O=wi(t);if(O||(t[_i]=O=new Nt(t)),a=O.add(s,a,d,E,w),a.proxy)return a;if(d=oo(),a.proxy=d,d.src=t,d.listener=a,t.addEventListener)T||(I=E),I===void 0&&(I=!1),t.addEventListener(s.toString(),d,I);else if(t.attachEvent)t.attachEvent(Dn(s.toString()),d);else if(t.addListener&&t.removeListener)t.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return a}function oo(){function t(a){return s.call(t.src,t.listener,a)}const s=ao;return t}function Pn(t,s,a,d,I){if(Array.isArray(s))for(var w=0;w<s.length;w++)Pn(t,s[w],a,d,I);else d=h(d)?!!d.capture:!!d,a=Cn(a),t&&t[De]?(t=t.i,w=String(s).toString(),w in t.g&&(s=t.g[w],a=yi(s,a,d,I),a>-1&&(Lt(s[a]),Array.prototype.splice.call(s,a,1),s.length==0&&(delete t.g[w],t.h--)))):t&&(t=wi(t))&&(s=t.g[s.toString()],t=-1,s&&(t=yi(s,a,d,I)),(a=t>-1?s[t]:null)&&Ti(a))}function Ti(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[De])vi(s.i,t);else{var a=t.type,d=t.proxy;s.removeEventListener?s.removeEventListener(a,d,t.capture):s.detachEvent?s.detachEvent(Dn(a),d):s.addListener&&s.removeListener&&s.removeListener(d),(a=wi(s))?(vi(a,t),a.h==0&&(a.src=null,s[_i]=null)):Lt(t)}}}function Dn(t){return t in Ii?Ii[t]:Ii[t]="on"+t}function ao(t,s){if(t.da)t=!0;else{s=new Z(s,this);const a=t.listener,d=t.ha||t.src;t.fa&&Ti(t),t=a.call(d,s)}return t}function wi(t){return t=t[_i],t instanceof Nt?t:null}var Si="__closure_events_fn_"+(Math.random()*1e9>>>0);function Cn(t){return typeof t=="function"?t:(t[Si]||(t[Si]=function(s){return t.handleEvent(s)}),t[Si])}function G(){y.call(this),this.i=new Nt(this),this.M=this,this.G=null}S(G,y),G.prototype[De]=!0,G.prototype.removeEventListener=function(t,s,a,d){Pn(this,t,s,a,d)};function X(t,s){var a,d=t.G;if(d)for(a=[];d;d=d.G)a.push(d);if(t=t.M,d=s.type||s,typeof s=="string")s=new p(s,t);else if(s instanceof p)s.target=s.target||t;else{var I=s;s=new p(d,t),An(s,I)}I=!0;let w,E;if(a)for(E=a.length-1;E>=0;E--)w=s.g=a[E],I=xt(w,d,!0,s)&&I;if(w=s.g=t,I=xt(w,d,!0,s)&&I,I=xt(w,d,!1,s)&&I,a)for(E=0;E<a.length;E++)w=s.g=a[E],I=xt(w,d,!1,s)&&I}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var t=this.i;for(const s in t.g){const a=t.g[s];for(let d=0;d<a.length;d++)Lt(a[d]);delete t.g[s],t.h--}}this.G=null},G.prototype.J=function(t,s,a,d){return this.i.add(String(t),s,!1,a,d)},G.prototype.K=function(t,s,a,d){return this.i.add(String(t),s,!0,a,d)};function xt(t,s,a,d){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();let I=!0;for(let w=0;w<s.length;++w){const E=s[w];if(E&&!E.da&&E.capture==a){const O=E.listener,j=E.ha||E.src;E.fa&&vi(t.i,E),I=O.call(j,d)!==!1&&I}}return I&&!d.defaultPrevented}function co(t,s){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=_(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(s)>2147483647?-1:l.setTimeout(t,s||0)}function Ln(t){t.g=co(()=>{t.g=null,t.i&&(t.i=!1,Ln(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class lo extends y{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Ln(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(t){y.call(this),this.h=t,this.g={}}S(et,y);var Rn=[];function Nn(t){Rt(t.g,function(s,a){this.g.hasOwnProperty(a)&&Ti(s)},t),t.g={}}et.prototype.N=function(){et.Z.N.call(this),Nn(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bi=l.JSON.stringify,uo=l.JSON.parse,ho=class{stringify(t){return l.JSON.stringify(t,void 0)}parse(t){return l.JSON.parse(t,void 0)}};function xn(){}function fo(){}var tt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ei(){p.call(this,"d")}S(Ei,p);function ki(){p.call(this,"c")}S(ki,p);var Ve={},Mn=null;function Ai(){return Mn=Mn||new G}Ve.Ia="serverreachability";function $n(t){p.call(this,Ve.Ia,t)}S($n,p);function it(t){const s=Ai();X(s,new $n(s))}Ve.STAT_EVENT="statevent";function Un(t,s){p.call(this,Ve.STAT_EVENT,t),this.stat=s}S(Un,p);function Y(t){const s=Ai();X(s,new Un(s,t))}Ve.Ja="timingevent";function Wn(t,s){p.call(this,Ve.Ja,t),this.size=s}S(Wn,p);function nt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){t()},s)}function rt(){this.g=!0}rt.prototype.ua=function(){this.g=!1};function mo(t,s,a,d,I,w){t.info(function(){if(t.g)if(w){var E="",O=w.split("&");for(let W=0;W<O.length;W++){var j=O[W].split("=");if(j.length>1){const z=j[0];j=j[1];const ae=z.split("_");E=ae.length>=2&&ae[1]=="type"?E+(z+"="+j+"&"):E+(z+"=redacted&")}}}else E=null;else E=w;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+s+`
`+a+`
`+E})}function po(t,s,a,d,I,w,E){t.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+s+`
`+a+`
`+w+" "+E})}function je(t,s,a,d){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+vo(t,a)+(d?" "+d:"")})}function go(t,s){t.info(function(){return"TIMEOUT: "+s})}rt.prototype.info=function(){};function vo(t,s){if(!t.g)return s;if(!s)return null;try{const w=JSON.parse(s);if(w){for(t=0;t<w.length;t++)if(Array.isArray(w[t])){var a=w[t];if(!(a.length<2)){var d=a[1];if(Array.isArray(d)&&!(d.length<1)){var I=d[0];if(I!="noop"&&I!="stop"&&I!="close")for(let E=1;E<d.length;E++)d[E]=""}}}}return bi(w)}catch{return s}}var Oi={NO_ERROR:0,TIMEOUT:8},yo={},Bn;function Pi(){}S(Pi,xn),Pi.prototype.g=function(){return new XMLHttpRequest},Bn=new Pi;function st(t){return encodeURIComponent(String(t))}function _o(t){var s=1;t=t.split(":");const a=[];for(;s>0&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function ge(t,s,a,d){this.j=t,this.i=s,this.l=a,this.S=d||1,this.V=new et(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fn}function Fn(){this.i=null,this.g="",this.h=!1}var qn={},Di={};function Ci(t,s,a){t.M=1,t.A=$t(oe(s)),t.u=a,t.R=!0,Vn(t,null)}function Vn(t,s){t.F=Date.now(),Mt(t),t.B=oe(t.A);var a=t.B,d=t.S;Array.isArray(d)||(d=[String(d)]),ir(a.i,"t",d),t.C=0,a=t.j.L,t.h=new Fn,t.g=Ir(t.j,a?s:null,!t.u),t.P>0&&(t.O=new lo(_(t.Y,t,t.g),t.P)),s=t.V,a=t.g,d=t.ba;var I="readystatechange";Array.isArray(I)||(I&&(Rn[0]=I.toString()),I=Rn);for(let w=0;w<I.length;w++){const E=On(a,I[w],d||s.handleEvent,!1,s.h||s);if(!E)break;s.g[E.key]=E}s=t.J?En(t.J):{},t.u?(t.v||(t.v="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,s)):(t.v="GET",t.g.ea(t.B,t.v,null,s)),it(),mo(t.i,t.v,t.B,t.l,t.S,t.u)}ge.prototype.ba=function(t){t=t.target;const s=this.O;s&&_e(t)==3?s.j():this.Y(t)},ge.prototype.Y=function(t){try{if(t==this.g)e:{const O=_e(this.g),j=this.g.ya(),W=this.g.ca();if(!(O<3)&&(O!=3||this.g&&(this.h.h||this.g.la()||lr(this.g)))){this.K||O!=4||j==7||(j==8||W<=0?it(3):it(2)),Li(this);var s=this.g.ca();this.X=s;var a=Io(this);if(this.o=s==200,po(this.i,this.v,this.B,this.l,this.S,O,s),this.o){if(this.U&&!this.L){t:{if(this.g){var d,I=this.g;if((d=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(d)){var w=d;break t}}w=null}if(t=w)je(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ri(this,t);else{this.o=!1,this.m=3,Y(12),Ce(this),ot(this);break e}}if(this.R){t=!0;let z;for(;!this.K&&this.C<a.length;)if(z=To(this,a),z==Di){O==4&&(this.m=4,Y(14),t=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(z==qn){this.m=4,Y(15),je(this.i,this.l,a,"[Invalid Chunk]"),t=!1;break}else je(this.i,this.l,z,null),Ri(this,z);if(jn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),O!=4||a.length!=0||this.h.h||(this.m=1,Y(16),t=!1),this.o=this.o&&t,!t)je(this.i,this.l,a,"[Invalid Chunked Response]"),Ce(this),ot(this);else if(a.length>0&&!this.W){this.W=!0;var E=this.j;E.g==this&&E.aa&&!E.P&&(E.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Fi(E),E.P=!0,Y(11))}}else je(this.i,this.l,a,null),Ri(this,a);O==4&&Ce(this),this.o&&!this.K&&(O==4?gr(this.j,this):(this.o=!1,Mt(this)))}else xo(this.g),s==400&&a.indexOf("Unknown SID")>0?(this.m=3,Y(12)):(this.m=0,Y(13)),Ce(this),ot(this)}}}catch{}finally{}};function Io(t){if(!jn(t))return t.g.la();const s=lr(t.g);if(s==="")return"";let a="";const d=s.length,I=_e(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return Ce(t),ot(t),"";t.h.i=new l.TextDecoder}for(let w=0;w<d;w++)t.h.h=!0,a+=t.h.i.decode(s[w],{stream:!(I&&w==d-1)});return s.length=0,t.h.g+=a,t.C=0,t.h.g}function jn(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function To(t,s){var a=t.C,d=s.indexOf(`
`,a);return d==-1?Di:(a=Number(s.substring(a,d)),isNaN(a)?qn:(d+=1,d+a>s.length?Di:(s=s.slice(d,d+a),t.C=d+a,s)))}ge.prototype.cancel=function(){this.K=!0,Ce(this)};function Mt(t){t.T=Date.now()+t.H,Hn(t,t.H)}function Hn(t,s){if(t.D!=null)throw Error("WatchDog timer not null");t.D=nt(_(t.aa,t),s)}function Li(t){t.D&&(l.clearTimeout(t.D),t.D=null)}ge.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(go(this.i,this.B),this.M!=2&&(it(),Y(17)),Ce(this),this.m=2,ot(this)):Hn(this,this.T-t)};function ot(t){t.j.I==0||t.K||gr(t.j,t)}function Ce(t){Li(t);var s=t.O;s&&typeof s.dispose=="function"&&s.dispose(),t.O=null,Nn(t.V),t.g&&(s=t.g,t.g=null,s.abort(),s.dispose())}function Ri(t,s){try{var a=t.j;if(a.I!=0&&(a.g==t||Ni(a.h,t))){if(!t.L&&Ni(a.h,t)&&a.I==3){try{var d=a.Ba.g.parse(s)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<t.F)qt(a),Bt(a);else break e;Bi(a),Y(18)}}else a.xa=I[1],0<a.xa-a.K&&I[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=nt(_(a.Va,a),6e3));Kn(a.h)<=1&&a.ta&&(a.ta=void 0)}else Re(a,11)}else if((t.L||a.g==t)&&qt(a),!f(s))for(I=a.Ba.g.parse(s),s=0;s<I.length;s++){let W=I[s];const z=W[0];if(!(z<=a.K))if(a.K=z,W=W[1],a.I==2)if(W[0]=="c"){a.M=W[1],a.ba=W[2];const ae=W[3];ae!=null&&(a.ka=ae,a.j.info("VER="+a.ka));const Ne=W[4];Ne!=null&&(a.za=Ne,a.j.info("SVER="+a.za));const Ie=W[5];Ie!=null&&typeof Ie=="number"&&Ie>0&&(d=1.5*Ie,a.O=d,a.j.info("backChannelRequestTimeoutMs_="+d)),d=a;const Te=t.g;if(Te){const Vt=Te.g?Te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vt){var w=d.h;w.g||Vt.indexOf("spdy")==-1&&Vt.indexOf("quic")==-1&&Vt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(xi(w,w.h),w.h=null))}if(d.G){const qi=Te.g?Te.g.getResponseHeader("X-HTTP-Session-Id"):null;qi&&(d.wa=qi,B(d.J,d.G,qi))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-t.F,a.j.info("Handshake RTT: "+a.T+"ms")),d=a;var E=t;if(d.na=_r(d,d.L?d.ba:null,d.W),E.L){Jn(d.h,E);var O=E,j=d.O;j&&(O.H=j),O.D&&(Li(O),Mt(O)),d.g=E}else mr(d);a.i.length>0&&Ft(a)}else W[0]!="stop"&&W[0]!="close"||Re(a,7);else a.I==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Re(a,7):Wi(a):W[0]!="noop"&&a.l&&a.l.qa(W),a.A=0)}}it(4)}catch{}}var wo=class{constructor(t,s){this.g=t,this.map=s}};function zn(t){this.l=t||10,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Kn(t){return t.h?1:t.g?t.g.size:0}function Ni(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function xi(t,s){t.g?t.g.add(s):t.h=s}function Jn(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}zn.prototype.cancel=function(){if(this.i=Xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xn(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.G);return s}return D(t.i)}var Yn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function So(t,s){if(t){t=t.split("&");for(let a=0;a<t.length;a++){const d=t[a].indexOf("=");let I,w=null;d>=0?(I=t[a].substring(0,d),w=t[a].substring(d+1)):I=t[a],s(I,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ve(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let s;t instanceof ve?(this.l=t.l,at(this,t.j),this.o=t.o,this.g=t.g,ct(this,t.u),this.h=t.h,Mi(this,nr(t.i)),this.m=t.m):t&&(s=String(t).match(Yn))?(this.l=!1,at(this,s[1]||"",!0),this.o=lt(s[2]||""),this.g=lt(s[3]||"",!0),ct(this,s[4]),this.h=lt(s[5]||"",!0),Mi(this,s[6]||"",!0),this.m=lt(s[7]||"")):(this.l=!1,this.i=new ut(null,this.l))}ve.prototype.toString=function(){const t=[];var s=this.j;s&&t.push(dt(s,Qn,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(dt(s,Qn,!0),"@"),t.push(st(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&t.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(dt(a,a.charAt(0)=="/"?ko:Eo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",dt(a,Oo)),t.join("")},ve.prototype.resolve=function(t){const s=oe(this);let a=!!t.j;a?at(s,t.j):a=!!t.o,a?s.o=t.o:a=!!t.g,a?s.g=t.g:a=t.u!=null;var d=t.h;if(a)ct(s,t.u);else if(a=!!t.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var I=s.h.lastIndexOf("/");I!=-1&&(d=s.h.slice(0,I+1)+d)}if(I=d,I==".."||I==".")d="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){d=I.lastIndexOf("/",0)==0,I=I.split("/");const w=[];for(let E=0;E<I.length;){const O=I[E++];O=="."?d&&E==I.length&&w.push(""):O==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),d&&E==I.length&&w.push("")):(w.push(O),d=!0)}d=w.join("/")}else d=I}return a?s.h=d:a=t.i.toString()!=="",a?Mi(s,nr(t.i)):a=!!t.m,a&&(s.m=t.m),s};function oe(t){return new ve(t)}function at(t,s,a){t.j=a?lt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function ct(t,s){if(s){if(s=Number(s),isNaN(s)||s<0)throw Error("Bad port number "+s);t.u=s}else t.u=null}function Mi(t,s,a){s instanceof ut?(t.i=s,Po(t.i,t.l)):(a||(s=dt(s,Ao)),t.i=new ut(s,t.l))}function B(t,s,a){t.i.set(s,a)}function $t(t){return B(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function lt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,bo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qn=/[#\/\?@]/g,Eo=/[#\?:]/g,ko=/[#\?]/g,Ao=/[#\?@]/g,Oo=/#/g;function ut(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Le(t){t.g||(t.g=new Map,t.h=0,t.i&&So(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=ut.prototype,i.add=function(t,s){Le(this),this.i=null,t=He(this,t);let a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function Zn(t,s){Le(t),s=He(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function er(t,s){return Le(t),s=He(t,s),t.g.has(s)}i.forEach=function(t,s){Le(this),this.g.forEach(function(a,d){a.forEach(function(I){t.call(s,I,d,this)},this)},this)};function tr(t,s){Le(t);let a=[];if(typeof s=="string")er(t,s)&&(a=a.concat(t.g.get(He(t,s))));else for(t=Array.from(t.g.values()),s=0;s<t.length;s++)a=a.concat(t[s]);return a}i.set=function(t,s){return Le(this),this.i=null,t=He(this,t),er(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=tr(this,t),t.length>0?String(t[0]):s):s};function ir(t,s,a){Zn(t,s),a.length>0&&(t.i=null,t.g.set(He(t,s),D(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(let d=0;d<s.length;d++){var a=s[d];const I=st(a);a=tr(this,a);for(let w=0;w<a.length;w++){let E=I;a[w]!==""&&(E+="="+st(a[w])),t.push(E)}}return this.i=t.join("&")};function nr(t){const s=new ut;return s.i=t.i,t.g&&(s.g=new Map(t.g),s.h=t.h),s}function He(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Po(t,s){s&&!t.j&&(Le(t),t.i=null,t.g.forEach(function(a,d){const I=d.toLowerCase();d!=I&&(Zn(this,d),ir(this,I,a))},t)),t.j=s}function Do(t,s){const a=new rt;if(l.Image){const d=new Image;d.onload=b(ye,a,"TestLoadImage: loaded",!0,s,d),d.onerror=b(ye,a,"TestLoadImage: error",!1,s,d),d.onabort=b(ye,a,"TestLoadImage: abort",!1,s,d),d.ontimeout=b(ye,a,"TestLoadImage: timeout",!1,s,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=t}else s(!1)}function Co(t,s){const a=new rt,d=new AbortController,I=setTimeout(()=>{d.abort(),ye(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:d.signal}).then(w=>{clearTimeout(I),w.ok?ye(a,"TestPingServer: ok",!0,s):ye(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(I),ye(a,"TestPingServer: error",!1,s)})}function ye(t,s,a,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(a)}catch{}}function Lo(){this.g=new ho}function $i(t){this.i=t.Sb||null,this.h=t.ab||!1}S($i,xn),$i.prototype.g=function(){return new Ut(this.i,this.h)};function Ut(t,s){G.call(this),this.H=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ut,G),i=Ut.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=s,this.readyState=1,ft(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const s={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(s.body=t),(this.H||l).fetch(new Request(this.D,s)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ht(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ft(this)),this.g&&(this.readyState=3,ft(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;rr(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function rr(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.B.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?ht(this):ft(this),this.readyState==3&&rr(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,ht(this))},i.Na=function(t){this.g&&(this.response=t,ht(this))},i.ga=function(){this.g&&ht(this)};function ht(t){t.readyState=4,t.l=null,t.j=null,t.B=null,ft(t)}i.setRequestHeader=function(t,s){this.A.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function ft(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ut.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function sr(t){let s="";return Rt(t,function(a,d){s+=d,s+=":",s+=a,s+=`\r
`}),s}function Ui(t,s,a){e:{for(d in a){var d=!1;break e}d=!0}d||(a=sr(a),typeof t=="string"?a!=null&&st(a):B(t,s,a))}function q(t){G.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(q,G);var Ro=/^https?$/i,No=["POST","PUT"];i=q.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,s,a,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Bn.g(),this.g.onreadystatechange=k(_(this.Ca,this));try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){or(this,w);return}if(t=a||"",a=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)a.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())a.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),I=l.FormData&&t instanceof l.FormData,!(Array.prototype.indexOf.call(No,s,void 0)>=0)||d||I||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,E]of a)this.g.setRequestHeader(w,E);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(w){or(this,w)}};function or(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.o=5,ar(t),Wt(t)}function ar(t){t.A||(t.A=!0,X(t,"complete"),X(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,X(this,"complete"),X(this,"abort"),Wt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wt(this,!0)),q.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?cr(this):this.Xa())},i.Xa=function(){cr(this)};function cr(t){if(t.h&&typeof c<"u"){if(t.v&&_e(t)==4)setTimeout(t.Ca.bind(t),0);else if(X(t,"readystatechange"),_e(t)==4){t.h=!1;try{const w=t.ca();e:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var d;if(d=w===0){let E=String(t.D).match(Yn)[1]||null;!E&&l.self&&l.self.location&&(E=l.self.location.protocol.slice(0,-1)),d=!Ro.test(E?E.toLowerCase():"")}a=d}if(a)X(t,"complete"),X(t,"success");else{t.o=6;try{var I=_e(t)>2?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.ca()+"]",ar(t)}}finally{Wt(t)}}}}function Wt(t,s){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const a=t.g;t.g=null,s||X(t,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function _e(t){return t.g?t.g.readyState:0}i.ca=function(){try{return _e(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),uo(s)}};function lr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function xo(t){const s={};t=(t.g&&_e(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<t.length;d++){if(f(t[d]))continue;var a=_o(t[d]);const I=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[I]||[];s[I]=w,w.push(a)}ro(s,function(d){return d.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function dr(t){this.za=0,this.i=[],this.j=new rt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mt("baseRetryDelayMs",5e3,t),this.Za=mt("retryDelaySeedMs",1e4,t),this.Ta=mt("forwardChannelMaxRetries",2,t),this.va=mt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new zn(t&&t.concurrentRequestLimit),this.Ba=new Lo,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=dr.prototype,i.ka=8,i.I=1,i.connect=function(t,s,a,d){Y(0),this.W=t,this.H=s||{},a&&d!==void 0&&(this.H.OSID=a,this.H.OAID=d),this.F=this.X,this.J=_r(this,null,this.W),Ft(this)};function Wi(t){if(ur(t),t.I==3){var s=t.V++,a=oe(t.J);if(B(a,"SID",t.M),B(a,"RID",s),B(a,"TYPE","terminate"),pt(t,a),s=new ge(t,t.j,s),s.M=2,s.A=$t(oe(a)),a=!1,l.navigator&&l.navigator.sendBeacon)try{a=l.navigator.sendBeacon(s.A.toString(),"")}catch{}!a&&l.Image&&(new Image().src=s.A,a=!0),a||(s.g=Ir(s.j,null),s.g.ea(s.A)),s.F=Date.now(),Mt(s)}yr(t)}function Bt(t){t.g&&(Fi(t),t.g.cancel(),t.g=null)}function ur(t){Bt(t),t.v&&(l.clearTimeout(t.v),t.v=null),qt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&l.clearTimeout(t.m),t.m=null)}function Ft(t){if(!Gn(t.h)&&!t.m){t.m=!0;var s=t.Ea;J||u(),H||(J(),H=!0),v.add(s,t),t.D=0}}function Mo(t,s){return Kn(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=s.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=nt(_(t.Ea,t,s),vr(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const I=new ge(this,this.j,t);let w=this.o;if(this.U&&(w?(w=En(w),An(w,this.U)):w=this.U),this.u!==null||this.R||(I.J=w,w=null),this.S)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var d=this.i[a];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(s+=d,s>4096){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=fr(this,I,s),a=oe(this.J),B(a,"RID",t),B(a,"CVER",22),this.G&&B(a,"X-HTTP-Session-Id",this.G),pt(this,a),w&&(this.R?s="headers="+st(sr(w))+"&"+s:this.u&&Ui(a,this.u,w)),xi(this.h,I),this.Ra&&B(a,"TYPE","init"),this.S?(B(a,"$req",s),B(a,"SID","null"),I.U=!0,Ci(I,a,null)):Ci(I,a,s),this.I=2}}else this.I==3&&(t?hr(this,t):this.i.length==0||Gn(this.h)||hr(this))};function hr(t,s){var a;s?a=s.l:a=t.V++;const d=oe(t.J);B(d,"SID",t.M),B(d,"RID",a),B(d,"AID",t.K),pt(t,d),t.u&&t.o&&Ui(d,t.u,t.o),a=new ge(t,t.j,a,t.D+1),t.u===null&&(a.J=t.o),s&&(t.i=s.G.concat(t.i)),s=fr(t,a,1e3),a.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),xi(t.h,a),Ci(a,d,s)}function pt(t,s){t.H&&Rt(t.H,function(a,d){B(s,d,a)}),t.l&&Rt({},function(a,d){B(s,d,a)})}function fr(t,s,a){a=Math.min(t.i.length,a);const d=t.l?_(t.l.Ka,t.l,t):null;e:{var I=t.i;let O=-1;for(;;){const j=["count="+a];O==-1?a>0?(O=I[0].g,j.push("ofs="+O)):O=0:j.push("ofs="+O);let W=!0;for(let z=0;z<a;z++){var w=I[z].g;const ae=I[z].map;if(w-=O,w<0)O=Math.max(0,I[z].g-100),W=!1;else try{w="req"+w+"_"||"";try{var E=ae instanceof Map?ae:Object.entries(ae);for(const[Ne,Ie]of E){let Te=Ie;h(Ie)&&(Te=bi(Ie)),j.push(w+Ne+"="+encodeURIComponent(Te))}}catch(Ne){throw j.push(w+"type="+encodeURIComponent("_badmap")),Ne}}catch{d&&d(ae)}}if(W){E=j.join("&");break e}}E=void 0}return t=t.i.splice(0,a),s.G=t,E}function mr(t){if(!t.g&&!t.v){t.Y=1;var s=t.Da;J||u(),H||(J(),H=!0),v.add(s,t),t.A=0}}function Bi(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=nt(_(t.Da,t),vr(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,pr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=nt(_(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Y(10),Bt(this),pr(this))};function Fi(t){t.B!=null&&(l.clearTimeout(t.B),t.B=null)}function pr(t){t.g=new ge(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var s=oe(t.na);B(s,"RID","rpc"),B(s,"SID",t.M),B(s,"AID",t.K),B(s,"CI",t.F?"0":"1"),!t.F&&t.ia&&B(s,"TO",t.ia),B(s,"TYPE","xmlhttp"),pt(t,s),t.u&&t.o&&Ui(s,t.u,t.o),t.O&&(t.g.H=t.O);var a=t.g;t=t.ba,a.M=1,a.A=$t(oe(s)),a.u=null,a.R=!0,Vn(a,t)}i.Va=function(){this.C!=null&&(this.C=null,Bt(this),Bi(this),Y(19))};function qt(t){t.C!=null&&(l.clearTimeout(t.C),t.C=null)}function gr(t,s){var a=null;if(t.g==s){qt(t),Fi(t),t.g=null;var d=2}else if(Ni(t.h,s))a=s.G,Jn(t.h,s),d=1;else return;if(t.I!=0){if(s.o)if(d==1){a=s.u?s.u.length:0,s=Date.now()-s.F;var I=t.D;d=Ai(),X(d,new Wn(d,a)),Ft(t)}else mr(t);else if(I=s.m,I==3||I==0&&s.X>0||!(d==1&&Mo(t,s)||d==2&&Bi(t)))switch(a&&a.length>0&&(s=t.h,s.i=s.i.concat(a)),I){case 1:Re(t,5);break;case 4:Re(t,10);break;case 3:Re(t,6);break;default:Re(t,2)}}}function vr(t,s){let a=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(a*=2),a*s}function Re(t,s){if(t.j.info("Error code "+s),s==2){var a=_(t.bb,t),d=t.Ua;const I=!d;d=new ve(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||at(d,"https"),$t(d),I?Do(d.toString(),a):Co(d.toString(),a)}else Y(2);t.I=0,t.l&&t.l.pa(s),yr(t),ur(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function yr(t){if(t.I=0,t.ja=[],t.l){const s=Xn(t.h);(s.length!=0||t.i.length!=0)&&(P(t.ja,s),P(t.ja,t.i),t.h.i.length=0,D(t.i),t.i.length=0),t.l.oa()}}function _r(t,s,a){var d=a instanceof ve?oe(a):new ve(a);if(d.g!="")s&&(d.g=s+"."+d.g),ct(d,d.u);else{var I=l.location;d=I.protocol,s=s?s+"."+I.hostname:I.hostname,I=+I.port;const w=new ve(null);d&&at(w,d),s&&(w.g=s),I&&ct(w,I),a&&(w.h=a),d=w}return a=t.G,s=t.wa,a&&s&&B(d,a,s),B(d,"VER",t.ka),pt(t,d),d}function Ir(t,s,a){if(s&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Aa&&!t.ma?new q(new $i({ab:a})):new q(t.ma),s.Fa(t.L),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tr(){}i=Tr.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function ie(t,s){G.call(this),this.g=new dr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.sa&&(t?t["X-WebChannel-Client-Profile"]=s.sa:t={"X-WebChannel-Client-Profile":s.sa}),this.g.U=t,(t=s&&s.Qb)&&!f(t)&&(this.g.u=t),this.A=s&&s.supportsCrossDomainXhr||!1,this.v=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!f(s)&&(this.g.G=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new ze(this)}S(ie,G),ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ie.prototype.close=function(){Wi(this.g)},ie.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.v&&(a={},a.__data__=bi(t),t=a);s.i.push(new wo(s.Ya++,t)),s.I==3&&Ft(s)},ie.prototype.N=function(){this.g.l=null,delete this.j,Wi(this.g),delete this.g,ie.Z.N.call(this)};function wr(t){Ei.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}S(wr,Ei);function Sr(){ki.call(this),this.status=1}S(Sr,ki);function ze(t){this.g=t}S(ze,Tr),ze.prototype.ra=function(){X(this.g,"a")},ze.prototype.qa=function(t){X(this.g,new wr(t))},ze.prototype.pa=function(t){X(this.g,new Sr)},ze.prototype.oa=function(){X(this.g,"b")},ie.prototype.send=ie.prototype.o,ie.prototype.open=ie.prototype.m,ie.prototype.close=ie.prototype.close,Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,yo.COMPLETE="complete",fo.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",G.prototype.listen=G.prototype.J,q.prototype.listenOnce=q.prototype.K,q.prototype.getLastError=q.prototype.Ha,q.prototype.getLastErrorCode=q.prototype.ya,q.prototype.getStatus=q.prototype.ca,q.prototype.getResponseJson=q.prototype.La,q.prototype.getResponseText=q.prototype.la,q.prototype.send=q.prototype.ea,q.prototype.setWithCredentials=q.prototype.Fa}).apply(typeof jt<"u"?jt:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi="12.12.0";function uc(i){hi=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new un("@firebase/firestore");function se(i,...e){if(Qt.logLevel<=U.DEBUG){const n=e.map(Es);Qt.debug(`Firestore (${hi}): ${i}`,...n)}}function bs(i,...e){if(Qt.logLevel<=U.ERROR){const n=e.map(Es);Qt.error(`Firestore (${hi}): ${i}`,...n)}}function Es(i){if(typeof i=="string")return i;try{return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ks(i,r,n)}function ks(i,e,n){let r=`FIRESTORE (${hi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw bs(r),new Error(r)}function vt(i,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,i||ks(e,o,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class $ extends Oe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ee.UNAUTHENTICATED))}shutdown(){}}class mc{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){vt(this.o===void 0,42304);let r=this.i;const o=g=>this.i!==r?(r=this.i,n(g)):Promise.resolve();let c=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new yt,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},h=g=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(g=>h(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?h(g):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new yt)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string",31837,{l:r}),new hc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return vt(e===null||typeof e=="string",2055,{h:e}),new ee(e)}}class pc{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gc{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new pc(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vc{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){vt(this.o===void 0,3512);const r=c=>{c.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,se("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(vt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<i;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=yc(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<n&&(r+=e.charAt(o[c]%62))}return r}}function ke(i,e){return i<e?-1:i>e?1:0}function Ic(i,e){const n=Math.min(i.length,e.length);for(let r=0;r<n;r++){const o=i.charAt(r),c=e.charAt(r);if(o!==c)return Ki(o)===Ki(c)?ke(o,c):Ki(o)?1:-1}return ke(i.length,e.length)}const Tc=55296,wc=57343;function Ki(i){const e=i.charCodeAt(0);return e>=Tc&&e<=wc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="__name__";class ce{constructor(e,n,r){n===void 0?n=0:n>e.length&&Zt(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Zt(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ce.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ce?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const c=ce.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return ke(e.length,n.length)}static compareSegments(e,n){const r=ce.isNumericId(e),o=ce.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?ce.extractNumericId(e).compare(ce.extractNumericId(n)):Ic(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mn.fromString(e.substring(4,e.length-2))}}class re extends ce{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new re(n)}static emptyPath(){return new re([])}}const Sc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends ce{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return Sc.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mr}static keyField(){return new Me([Mr])}static fromServerFormat(e){const n=[];let r="",o=0;const c=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=g,o+=2}else h==="`"?(l=!l,o++):h!=="."||l?(r+=h,o++):(c(),o++)}if(c(),l)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.path=e}static fromPath(e){return new $e(re.fromString(e))}static fromName(e){return new $e(re.fromString(e).popFirst(5))}static empty(){return new $e(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $e(new re(e.slice()))}}function bc(i,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Ec(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(i,e){const n={typeString:i};return e&&(n.value=e),n}function Pt(i,e){if(!Ec(i))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const o=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in i)){n=`JSON missing required field: '${r}'`;break}const l=i[r];if(o&&typeof l!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(c!==void 0&&l!==c.value){n=`Expected '${r}' field to equal '${c.value}'`;break}}if(n)throw new $(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=-62135596800,Ur=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ur);return new le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$r)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ur}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pt(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$r;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:V("string",le._jsonSchemaVersion),seconds:V("number"),nanoseconds:V("number")};function kc(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Ac("Invalid base64 string: "+c):c}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(o){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);return c}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Wr="(default)";class ei{constructor(e,n){this.projectId=e,this.database=n||Wr}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database===Wr}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}function Oc(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(i.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n=null,r=[],o=[],c=null,l="F",h=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=c,this.limitType=l,this.startAt=h,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Dc(i){return new Pc(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Br,L;(L=Br||(Br={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new mn([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=1048576;function Ji(){return typeof document<"u"?document:null}class Rc{constructor(e,n,r=1e3,o=1.5,c=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=o,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-r);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const l=Date.now()+r,h=new pn(e,n,l,o,c);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Fr,qr;(qr=Fr||(Fr={})).Ma="default",qr.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="ComponentProvider",Vr=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="firestore.googleapis.com",jr=!0;class Hr{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mc,this.ssl=jr}else this.host=e.host,this.ssl=e.ssl??jr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lc)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nc(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fc;switch(r.type){case"firstParty":return new gc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vr.get(n);r&&(se(xc,"Removing Datastore"),Vr.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gn(this.firestore,e,this._query)}}class de{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Pt(n,de._jsonSchema))return new de(e,r||null,new $e(re.fromString(n.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:V("string",de._jsonSchemaVersion),referencePath:V("string")};class vn extends gn{constructor(e,n,r){super(e,n,Dc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new $e(e))}withConverter(e){return new vn(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="AsyncQueue";class Gr{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rc(this,"async_queue_retry"),this._c=()=>{const r=Ji();r&&se(zr,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ji();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ji();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new yt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!kc(e))throw e;se(zr,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,bs("INTERNAL UNHANDLED ERROR: ",Kr(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=pn.createAndSchedule(this,e,n,r,c=>this.hc(c));return this.tc.push(o),o}uc(){this.nc&&Zt(47125,{Pc:Kr(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Kr(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Uc extends $c{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Gr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gr(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new me(Fe.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new me(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pt(e,me._jsonSchema))return me.fromBase64String(e.bytes)}}me._jsonSchemaVersion="firestore/bytes/1.0",me._jsonSchema={type:V("string",me._jsonSchemaVersion),bytes:V("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:We._jsonSchemaVersion}}static fromJSON(e){if(Pt(e,We._jsonSchema))return new We(e.latitude,e.longitude)}}We._jsonSchemaVersion="firestore/geoPoint/1.0",We._jsonSchema={type:V("string",We._jsonSchemaVersion),latitude:V("number"),longitude:V("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==o[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Be._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pt(e,Be._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Be(e.vectorValues);throw new $(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Be._jsonSchemaVersion="firestore/vectorValue/1.0",Be._jsonSchema={type:V("string",Be._jsonSchemaVersion),vectorValues:V("object")};function Os(i,e,n){if((e=Ot(e))instanceof As)return e._internalPath;if(typeof e=="string")return Bc(i,e);throw nn("Field path arguments must be of type string or ",i)}const Wc=new RegExp("[~\\*/\\[\\]]");function Bc(i,e,n){if(e.search(Wc)>=0)throw nn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new As(...e.split("."))._internalPath}catch{throw nn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function nn(i,e,n,r,o){let c=`Function ${e}() called with invalid data`;c+=". ";let l="";return new $(M.INVALID_ARGUMENT,c+i+l)}const Jr="@firebase/firestore",Xr="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r,o,c){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Os("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fc extends Ps{data(){return super.data()}}class Ht{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ge extends Ps{constructor(e,n,r,o,c,l){super(e,n,r,o,l),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Os("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ge._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ge._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ge._jsonSchema={type:V("string",Ge._jsonSchemaVersion),bundleSource:V("string","DocumentSnapshot"),bundleName:V("string"),bundle:V("string")};class Jt extends Ge{data(e={}){return super.data(e)}}class _t{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ht(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jt(this._firestore,this._userDataWriter,r.key,r,new Ht(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let l=0;return o._snapshot.docChanges.map(h=>{const g=new Jt(o._firestore,o._userDataWriter,h.doc.key,h.doc,new Ht(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);return h.doc,{type:"added",doc:g,oldIndex:-1,newIndex:l++}})}{let l=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(h=>c||h.type!==3).map(h=>{const g=new Jt(o._firestore,o._userDataWriter,h.doc.key,h.doc,new Ht(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,b=-1;return h.type!==0&&(_=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),b=l.indexOf(h.doc.key)),{type:qc(h.type),doc:g,oldIndex:_,newIndex:b}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_t._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_c.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qc(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zt(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t._jsonSchemaVersion="firestore/querySnapshot/1.0",_t._jsonSchema={type:V("string",_t._jsonSchemaVersion),bundleSource:V("string","QuerySnapshot"),bundleName:V("string"),bundle:V("string")};(function(e,n=!0){uc(ui),Qe(new Ye("firestore",(r,{instanceIdentifier:o,options:c})=>{const l=r.getProvider("app").getImmediate(),h=new Uc(new mc(r.getProvider("auth-internal")),new vc(l,r.getProvider("app-check-internal")),Oc(l,o),l);return c={useFetchStreams:n,...c},h._setSettings(c),h},"PUBLIC").setMultipleInstances(!0)),Ee(Jr,Xr,e),Ee(Jr,Xr,"esm2020")})();function Ds(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vc=Ds,Cs=new At("auth","Firebase",Ds());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new un("@firebase/auth");function jc(i,...e){ti.logLevel<=U.WARN&&ti.warn(`Auth (${ui}): ${i}`,...e)}function Xt(i,...e){ti.logLevel<=U.ERROR&&ti.error(`Auth (${ui}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(i,...e){throw yn(i,...e)}function Ls(i,...e){return yn(i,...e)}function Rs(i,e,n){const r={...Vc(),[e]:n};return new At("auth","Firebase",r).create(e,{appName:i.name})}function Yt(i){return Rs(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yn(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return Cs.create(i,...e)}function x(i,e,...n){if(!i)throw yn(e,...n)}function It(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Xt(e),new Error(e)}function ii(i,e){i||It(e)}function Hc(){return Qr()==="http:"||Qr()==="https:"}function Qr(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hc()||Jo()||"connection"in navigator)?navigator.onLine:!0}function Gc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ii(n>e,"Short delay should be less than long delay!"),this.isMobile=Go()||Xo()}get(){return zc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(i,e){ii(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yc=new Dt(3e4,6e4);function xs(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function fi(i,e,n,r,o={}){return Ms(i,o,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const h=ys({key:i.config.apiKey,...l}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:g,...c};return Ko()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&_s(i.emulatorConfig.host)&&(_.credentials="include"),Ns.fetch()(await $s(i,i.config.apiHost,n,h),_)})}async function Ms(i,e,n){i._canInitEmulator=!1;const r={...Jc,...e};try{const o=new Qc(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw zt(i,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const h=c.ok?l.errorMessage:l.error.message,[g,_]=h.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw zt(i,"credential-already-in-use",l);if(g==="EMAIL_EXISTS")throw zt(i,"email-already-in-use",l);if(g==="USER_DISABLED")throw zt(i,"user-disabled",l);const b=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Rs(i,b,_);Yr(i,b)}}catch(o){if(o instanceof Oe)throw o;Yr(i,"network-request-failed",{message:String(o)})}}async function $s(i,e,n,r){const o=`${e}${n}?${r}`,c=i,l=c.config.emulator?Kc(i.config,o):`${i.config.apiScheme}://${o}`;return Xc.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}class Qc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ls(this.auth,"network-request-failed")),Yc.get())})}}function zt(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Ls(i,e,r);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(i,e){return fi(i,"POST","/v1/accounts:delete",e)}async function ni(i,e){return fi(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function el(i,e=!1){const n=Ot(i),r=await n.getIdToken(e),o=Us(r);x(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:Tt(Xi(o.auth_time)),issuedAtTime:Tt(Xi(o.iat)),expirationTime:Tt(Xi(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Xi(i){return Number(i)*1e3}function Us(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return Xt("JWT malformed, contained fewer than 3 sections"),null;try{const o=vs(n);return o?JSON.parse(o):(Xt("Failed to decode base64 JWT payload"),null)}catch(o){return Xt("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Zr(i){const e=Us(i);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Oe&&tl(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function tl({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tt(this.lastLoginAt),this.creationTime=Tt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(i){var S;const e=i.auth,n=await i.getIdToken(),r=await rn(i,ni(e,{idToken:n}));x(r==null?void 0:r.users.length,e,"internal-error");const o=r.users[0];i._notifyReloadListener(o);const c=(S=o.providerUserInfo)!=null&&S.length?Ws(o.providerUserInfo):[],l=rl(i.providerData,c),h=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(l!=null&&l.length),_=h?g:!1,b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new sn(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,b)}async function nl(i){const e=Ot(i);await ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rl(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Ws(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(i,e){const n=await Ms(i,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,l=await $s(i,o,"/v1/token",`key=${c}`),h=await i._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:h,body:r};return i.emulatorConfig&&_s(i.emulatorConfig.host)&&(g.credentials="include"),Ns.fetch()(l,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ol(i,e){return fi(i,"POST","/v2/accounts:revokeToken",xs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=Zr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await sl(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,l=new Ke;return r&&(x(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(x(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(x(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ke,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(i,e){x(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ue{constructor({uid:e,auth:n,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new il(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new sn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await rn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return el(this,e)}reload(){return nl(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ri(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await rn(this,Zc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,l=n.photoURL??void 0,h=n.tenantId??void 0,g=n._redirectEventId??void 0,_=n.createdAt??void 0,b=n.lastLoginAt??void 0,{uid:S,emailVerified:k,isAnonymous:D,providerData:P,stsTokenManager:N}=n;x(S&&N,e,"internal-error");const A=Ke.fromJSON(this.name,N);x(typeof S=="string",e,"internal-error"),we(r,e.name),we(o,e.name),x(typeof k=="boolean",e,"internal-error"),x(typeof D=="boolean",e,"internal-error"),we(c,e.name),we(l,e.name),we(h,e.name),we(g,e.name),we(_,e.name),we(b,e.name);const C=new ue({uid:S,auth:e,email:o,emailVerified:k,displayName:r,isAnonymous:D,photoURL:l,phoneNumber:c,tenantId:h,stsTokenManager:A,createdAt:_,lastLoginAt:b});return P&&Array.isArray(P)&&(C.providerData=P.map(F=>({...F}))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,n,r=!1){const o=new Ke;o.updateFromServerResponse(n);const c=new ue({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ri(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];x(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Ws(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),h=new Ke;h.updateFromIdToken(r);const g=new ue({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:l}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new sn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Map;function Ue(i){ii(i instanceof Function,"Expected a class definition");let e=es.get(i);return e?(ii(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,es.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bs.type="NONE";const ts=Bs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(i,e,n){return`firebase:${i}:${e}:${n}`}class Je{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Yi(this.userKey,o.apiKey,c),this.fullPersistenceKey=Yi("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ni(this.auth,{idToken:e}).catch(()=>{});return n?ue._fromGetAccountInfoResponse(this.auth,n,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Je(Ue(ts),e,r);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=o[0]||Ue(ts);const l=Yi(r,e.config.apiKey,e.name);let h=null;for(const _ of n)try{const b=await _._get(l);if(b){let S;if(typeof b=="string"){const k=await ni(e,{idToken:b}).catch(()=>{});if(!k)break;S=await ue._fromGetAccountInfoResponse(e,k,b)}else S=ue._fromJSON(e,b);_!==c&&(h=S),c=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new Je(c,e,r):(c=g[0],h&&await c._set(l,h.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(l)}catch{}})),new Je(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(al(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hl(e))return"Blackberry";if(fl(e))return"Webos";if(cl(e))return"Safari";if((e.includes("chrome/")||ll(e))&&!e.includes("edge/"))return"Chrome";if(ul(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function al(i=fe()){return/firefox\//i.test(i)}function cl(i=fe()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ll(i=fe()){return/crios\//i.test(i)}function dl(i=fe()){return/iemobile/i.test(i)}function ul(i=fe()){return/android/i.test(i)}function hl(i=fe()){return/blackberry/i.test(i)}function fl(i=fe()){return/webos/i.test(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(i,e=[]){let n;switch(i){case"Browser":n=is(fe());break;case"Worker":n=`${is(fe())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((l,h)=>{try{const g=e(c);l(g)}catch(g){h(g)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(i,e={}){return fi(i,"GET","/v2/passwordPolicy",xs(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=6;class vl{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??gl,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ns(this),this.idTokenSubscription=new ns(this),this.beforeStateQueue=new ml(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ue(n)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Je.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ni(this,{idToken:e}),r=await ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(xe(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(c=this.redirectUser)==null?void 0:c._redirectEventId,h=r==null?void 0:r._redirectEventId,g=await this.tryRedirectSignIn(e);(!l||l===h)&&(g!=null&&g.user)&&(r=g.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ri(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(Yt(this));const n=e?Ot(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pl(this),n=new vl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new At("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ol(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ue(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[Ue(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(h,this,"internal-error"),h.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,r,o);return()=>{l=!0,g()}}else{const g=e.addObserver(n);return()=>{l=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _l(i){return Ot(i)}class ns{constructor(e){this.auth=e,this.observer=null,this.addObserver=ia(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Il(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ue);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new Dt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Dt(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Dt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Dt(5e3,15e3);var rs="@firebase/auth",ss="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sl(i){Qe(new Ye("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:h}=r.options;x(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:l,authDomain:h,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fs(i)},_=new yl(r,o,c,g);return Il(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qe(new Ye("auth-internal",e=>{const n=_l(e.getProvider("auth").getImmediate());return(r=>new Tl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ee(rs,ss,wl(i)),Ee(rs,ss,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=5*60;zo("authIdTokenMaxAge");Sl("Browser");console.warn("⚠️ Firebase未設定。.envファイルにAPIキーを設定してください。");function El(i){const e=new Date(i),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${o}`}function si(i){const e=new Date(i),n=["日","月","火","水","木","金","土"];return`${e.getMonth()+1}月${e.getDate()}日（${n[e.getDay()]}）`}function Ct(){return El(new Date)}function qs(){return Date.now().toString(36)+Math.random().toString(36).slice(2,9)}function Vs(i,e,n,r){const c=Gt(n-i),l=Gt(r-e),h=Math.sin(c/2)**2+Math.cos(Gt(i))*Math.cos(Gt(n))*Math.sin(l/2)**2;return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h))}function Gt(i){return i*(Math.PI/180)}function he(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}function R(i,e="info",n=3e3){const r=document.getElementById("toast-container"),o={success:"check_circle",error:"error",warning:"warning",info:"info"},c=document.createElement("div");c.className=`toast ${e}`,c.innerHTML=`
    <span class="material-icons-round toast-icon">${o[e]||"info"}</span>
    <span>${he(i)}</span>
  `,r.appendChild(c),setTimeout(()=>{c.style.opacity="0",c.style.transform="translateX(40px)",c.style.transition="all .3s ease",setTimeout(()=>c.remove(),300)},n)}function mi(i,e,n=""){const r=document.getElementById("modal-overlay");document.getElementById("modal-title").textContent=i,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=n,r.style.display="flex"}function Ae(){document.getElementById("modal-overlay").style.display="none"}function _n(i,e){return new Promise(n=>{const r=`<p>${he(e)}</p>`;mi(i,r,`
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `),document.getElementById("confirm-ok").onclick=()=>{Ae(),n(!0)},document.getElementById("confirm-cancel").onclick=()=>{Ae(),n(!1)}})}function kl(i){{console.warn("Firebase未設定のためログイン画面を表示します"),setTimeout(()=>i(null,null),100);return}}async function Al(){throw new Error("Firebase未設定です。.envにAPIキーを設定してください。")}async function Ol(){}function Pl(){const i=document.getElementById("btn-google-login");i&&i.addEventListener("click",async()=>{i.disabled=!0,i.textContent="ログイン中...";try{await Al()}catch(e){console.error("ログインエラー:",e),e.code==="auth/popup-closed-by-user"?R("ログインがキャンセルされました","warning"):R("ログインに失敗しました","error"),i.disabled=!1,i.innerHTML=`
        <svg viewBox="0 0 24 24" width="20" height="20" class="google-icon">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleアカウントでログイン
      `}})}const Se={};function Ze(i){if(!Se[i]){const e=localStorage.getItem(`careroute_${i}`);Se[i]=e?JSON.parse(e):[]}return Se[i]}function pi(i){localStorage.setItem(`careroute_${i}`,JSON.stringify(Se[i]||[]))}async function os(){localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"),localStorage.removeItem("careroute_routes"),Se.staff=[],Se.clients=[],Se.visits=[],Se.routes=[]}async function In(i,e){{const n=qs();return Ze(i).push({id:n,...e,createdAt:new Date().toISOString()}),pi(i),n}}async function Tn(i){return Ze(i)}async function js(i,e,n){{const r=Ze(i),o=r.findIndex(c=>c.id===e);o!==-1&&(r[o]={...r[o],...n,updatedAt:new Date().toISOString()},pi(i));return}}async function wn(i,e){{const n=Ze(i),r=n.findIndex(o=>o.id===e);r!==-1&&(n.splice(r,1),pi(i));return}}async function Hs(i,e,n,r){return Ze(i).filter(c=>c[e]===r)}async function Pe(){return Tn("staff")}async function zs(i){return In("staff",i)}async function Dl(i,e){return js("staff",i,e)}async function Cl(i){return wn("staff",i)}async function qe(){return Tn("clients")}async function Gs(i){return In("clients",i)}async function Ll(i,e){return js("clients",i,e)}async function Rl(i){return wn("clients",i)}async function Nl(){return Tn("visits")}async function gi(i){return Hs("visits","date","==",i)}async function Ks(i){return In("visits",i)}async function xl(i){return wn("visits",i)}async function Ml(i){return Hs("routes","date","==",i)}async function $l(i){{const e=Ze("routes");for(const n of i)e.push({id:qs(),...n,createdAt:new Date().toISOString()});pi("routes");return}}async function Ul(){const i=document.getElementById("page-container"),[e,n]=await Promise.all([Pe().catch(()=>[]),qe().catch(()=>[])]),r=Ct(),o=await gi(r).catch(()=>[]),c=e.filter(g=>g.isActive),l=n.filter(g=>g.isActive),h=o.filter(g=>g.status!=="cancelled");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${si(new Date)}</span>
    </div>

    <!-- サマリーカード -->
    <div class="grid grid-4" style="margin-bottom:24px">
      <div class="card stat-card info">
        <span class="material-icons-round stat-icon">badge</span>
        <div class="stat-label">稼働職員</div>
        <div class="stat-value">${c.length}<span style="font-size:.9rem;color:var(--text-muted)">名</span></div>
      </div>
      <div class="card stat-card success">
        <span class="material-icons-round stat-icon">elderly</span>
        <div class="stat-label">登録利用者</div>
        <div class="stat-value">${l.length}<span style="font-size:.9rem;color:var(--text-muted)">名</span></div>
      </div>
      <div class="card stat-card">
        <span class="material-icons-round stat-icon">event</span>
        <div class="stat-label">本日の訪問</div>
        <div class="stat-value">${h.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <span class="material-icons-round stat-icon">warning</span>
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${Math.max(0,l.length-h.length)}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
    </div>

    <!-- 下部セクション -->
    <div class="grid grid-2">
      <!-- 職員一覧 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <span class="material-icons-round" style="color:var(--primary)">people</span>
            職員一覧
          </h3>
        </div>
        <div>
          ${c.length===0?'<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>':c.map(g=>{var _,b;return`
              <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
                <div style="width:12px;height:12px;border-radius:50%;background:${g.color||"#999"};flex-shrink:0"></div>
                <div style="flex:1">
                  <div style="font-weight:500">${g.name}</div>
                  <div style="font-size:.8rem;color:var(--text-muted)">${(((_=g.skills)==null?void 0:_.qualifications)||[]).join(", ")||"資格なし"}</div>
                </div>
                <div class="tags-container">
                  ${(((b=g.skills)==null?void 0:b.services)||[]).slice(0,2).map(S=>`<span class="tag">${S}</span>`).join("")}
                </div>
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- クイックアクション -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <span class="material-icons-round" style="color:var(--secondary)">bolt</span>
            クイックアクション
          </h3>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px">
          <button class="btn btn-primary" onclick="document.querySelector('[data-page=matching]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">auto_fix_high</span>
            マッチング＆ルート最適化を実行
          </button>
          <button class="btn btn-secondary" onclick="document.querySelector('[data-page=map]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">map</span>
            マップビューを開く
          </button>
          <button class="btn btn-secondary" onclick="document.querySelector('[data-page=staff]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">person_add</span>
            職員を管理する
          </button>
          <button class="btn btn-secondary" onclick="document.querySelector('[data-page=client]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">group_add</span>
            利用者を管理する
          </button>
        </div>
      </div>
    </div>
  `}let te=null,St=[],on=[],bt=null,an=null,cn=[];function Js(){return new Promise((i,e)=>{if(window.google&&window.google.maps){i();return}const n="AIzaSyCXFNBQjeiYpRYFdbs6VhISqlFZhrybM74",r=document.createElement("script");r.src=`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=geometry,places&language=ja`,r.async=!0,r.defer=!0,r.onload=i,r.onerror=()=>e(new Error("Google Maps APIの読み込みに失敗しました")),document.head.appendChild(r)})}function Wl(i,e={lat:35.6938,lng:139.7034},n=14){const r=document.getElementById(i);return r?!window.google||!window.google.maps?(r.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `,null):(te=new google.maps.Map(r,{center:e,zoom:n,mapTypeControl:!0,streetViewControl:!1,fullscreenControl:!0,styles:zl()}),bt=new google.maps.InfoWindow,an=new google.maps.DirectionsService,te):null}function Xs(i,e={}){if(!te)return null;const n=new google.maps.Marker({map:te,position:i,title:e.title||"",icon:e.icon||void 0,label:e.label||void 0});return e.infoContent&&n.addListener("click",()=>{bt.setContent(e.infoContent),bt.open(te,n)}),St.push(n),n}function as(i,e,n,r){if(!te)return null;const o={path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",fillColor:e,fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1.8,anchor:new google.maps.Point(12,22),labelOrigin:new google.maps.Point(12,9)};return Xs(i,{icon:o,label:void 0,infoContent:r})}function Bl(i,e){return te?Xs(i,{title:e,icon:{path:"M12 2L2 7v10l10 5 10-5V7L12 2z",fillColor:"#F59E0B",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:2,anchor:new google.maps.Point(12,12)},infoContent:`<div style="color:#333;padding:4px"><strong>🏢 ${e}</strong><br>（出発地点）</div>`}):null}function Fl(i,e,n){if(!te)return null;const r=i.map(c=>({lat:c.lat,lng:c.lng})),o=new google.maps.Polyline({path:r,geodesic:!0,strokeColor:e,strokeOpacity:.8,strokeWeight:4,map:te});return on.push(o),o}async function ql(i,e){if(!te||!an||i.length<2)return;const n=i[0],r=i[i.length-1],o=i.slice(1,-1).map(c=>({location:new google.maps.LatLng(c.lat,c.lng),stopover:!0}));try{const c=await new Promise((h,g)=>{an.route({origin:new google.maps.LatLng(n.lat,n.lng),destination:new google.maps.LatLng(r.lat,r.lng),waypoints:o,travelMode:google.maps.TravelMode.DRIVING,optimizeWaypoints:!1},(_,b)=>{b==="OK"?h(_):g(new Error(`Directions API: ${b}`))})}),l=new google.maps.DirectionsRenderer({map:te,directions:c,suppressMarkers:!0,polylineOptions:{strokeColor:e,strokeWeight:4,strokeOpacity:.8}});return cn.push(l),l}catch(c){return console.warn("Directions API呼び出し失敗。直線ポリラインで代替:",c),Fl(i,e)}}async function Vl(i){if(!window.google||!window.google.maps)return null;const e=new google.maps.DistanceMatrixService,n=i.map(r=>new google.maps.LatLng(r.lat,r.lng));try{return(await new Promise((c,l)=>{e.getDistanceMatrix({origins:n,destinations:n,travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC},(h,g)=>{g==="OK"?c(h):l(new Error(`Distance Matrix API: ${g}`))})})).rows.map(c=>c.elements.map(l=>({distance:l.status==="OK"?l.distance.value/1e3:null,duration:l.status==="OK"?Math.ceil(l.duration.value/60):null})))}catch(r){return console.error("Distance Matrix取得失敗:",r),null}}function jl(){St.forEach(i=>i.setMap(null)),St=[],on.forEach(i=>i.setMap(null)),on=[],cn.forEach(i=>i.setMap(null)),cn=[],bt&&bt.close()}function Hl(){if(!te||St.length===0)return;const i=new google.maps.LatLngBounds;St.forEach(e=>i.extend(e.getPosition())),te.fitBounds(i,50)}function zl(){return[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}const oi={qualifications:{label:"資格",options:["介護福祉士","実務者研修修了","初任者研修修了","看護師","ヘルパー2級"]},services:{label:"対応可能サービス",options:["身体介護","生活援助","通院等乗降介助","医療的ケア"]},physical:{label:"身体的対応力",options:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"]},special:{label:"特別スキル",options:["認知症ケア","ターミナルケア","精神障害対応","障害児支援"]}},Gl=["要支援1","要支援2","要介護1","要介護2","要介護3","要介護4","要介護5"],Ys=["身体介護","生活援助","通院等乗降介助","医療的ケア"],Kl=["男性","女性"],Jl=["指定なし","男性希望","女性希望"],cs=["#4A90D9","#E74C3C","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#3498DB","#E91E63","#00BCD4","#8BC34A","#FF5722"],gt={requiredSkill:1e3,genderMatch:2e3,staffType:500,proximity:30},ne={name:"事業所（拠点）",address:"〒501-3304 岐阜県加茂郡富加町高畑２９１",lat:35.497,lng:136.993};let ln="all",ai=Ct();async function Xl(){var n,r,o;const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <input type="date" id="map-date-picker" class="form-input" value="${ai}" style="width:160px">
        <select id="staff-filter" class="form-select" style="width:160px">
          <option value="all">全職員表示</option>
        </select>
        <button class="btn btn-secondary" id="btn-refresh-map">
          <span class="material-icons-round">refresh</span>
          更新
        </button>
      </div>
    </div>
    <div style="position:relative">
      <div id="map-canvas" class="map-container"></div>
      <div class="map-overlay" id="route-legend-panel">
        <h4 style="margin-bottom:12px;display:flex;align-items:center;gap:6px">
          <span class="material-icons-round" style="font-size:18px">legend_toggle</span>
          ルート凡例
        </h4>
        <div id="route-legend" class="route-legend">
          <p style="color:var(--text-muted);font-size:.85rem">
            マッチング＆最適化を実行するとルートが表示されます
          </p>
        </div>
      </div>
    </div>
  `;try{await Js()}catch(c){console.warn("Maps APIの読み込みスキップ:",c)}const e=Wl("map-canvas",{lat:ne.lat,lng:ne.lng});await Kt(e),(n=document.getElementById("map-date-picker"))==null||n.addEventListener("change",c=>{ai=c.target.value,Kt(e)}),(r=document.getElementById("staff-filter"))==null||r.addEventListener("change",c=>{ln=c.target.value,Kt(e)}),(o=document.getElementById("btn-refresh-map"))==null||o.addEventListener("click",()=>{Kt(e)})}async function Kt(i){const[e,n,r]=await Promise.all([Pe().catch(()=>[]),qe().catch(()=>[]),gi(ai).catch(()=>[])]),o=document.getElementById("staff-filter");if(o&&o.options.length<=1&&e.forEach(l=>{const h=document.createElement("option");h.value=l.id,h.textContent=l.name,o.appendChild(h)}),!i){Ql(e,n);return}jl(),Bl({lat:ne.lat,lng:ne.lng},ne.name);const c=await Ml(ai).catch(()=>[]);if(c.length>0)for(const l of c){if(ln!=="all"&&l.staffId!==ln)continue;const h=e.find(b=>b.id===l.staffId),g=(h==null?void 0:h.color)||"#999",_=[{lat:ne.lat,lng:ne.lng}];for(const b of l.clientIds||[]){const S=n.find(k=>k.id===b);S&&(_.push({lat:S.lat,lng:S.lng}),as({lat:S.lat,lng:S.lng},g,"",`<div style="color:#333;padding:4px">
              <strong>${S.name}</strong><br>
              ${S.careLevel} | ${(S.requiredServices||[]).join(", ")}<br>
              <small>担当: ${(h==null?void 0:h.name)||"未定"}</small>
            </div>`))}_.push({lat:ne.lat,lng:ne.lng}),await ql(_,g)}else{const l=n.filter(h=>h.isActive&&r.some(g=>g.clientId===h.id));for(const h of l){const g=r.filter(_=>_.clientId===h.id).map(_=>`${_.startTime}〜${_.endTime}`).join(", ");as({lat:h.lat,lng:h.lng},"#94A3B8","",`<div style="color:#333;padding:4px">
          <strong>${h.name}</strong><br>
          予定: ${g}<br>
          ${h.careLevel} | ${(h.requiredServices||[]).join(", ")}
        </div>`)}}Hl(),Yl(e,c,r)}function Yl(i,e,n=[]){const r=document.getElementById("route-legend");if(r){if(e.length===0){r.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem">
        本日の訪問予定: ${n.length}件<br>
        「スケジュール」画面からマッチング＆最適化を実行すると最適ルートが表示されます
      </p>
      <div style="margin-top:8px">
        <div class="legend-item">
          <div class="legend-color" style="background:#F59E0B"></div>
          <span>🏢 事業所</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background:#94A3B8"></div>
          <span>本日の訪問先（未ルート化）</span>
        </div>
      </div>
    `;return}r.innerHTML=`
    <div class="legend-item">
      <div class="legend-color" style="background:#F59E0B"></div>
      <span>🏢 事業所</span>
    </div>
    ${e.map(o=>{const c=i.find(l=>l.id===o.staffId);return`<div class="legend-item">
        <div class="legend-color" style="background:${(c==null?void 0:c.color)||"#999"}"></div>
        <span>${(c==null?void 0:c.name)||"不明"} (${(o.clientIds||[]).length}件, ${o.totalDistance||"?"}km)</span>
      </div>`}).join("")}
  `}}function Ql(i,e){const n=document.getElementById("route-legend");n&&(n.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${i.length}名<br>
        利用者: ${e.length}名
      </div>
    `)}let Et=[];async function Sn(){const i=document.getElementById("page-container");Et=await Pe().catch(()=>[]),i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">badge</span>
        職員管理
      </h1>
      <button class="btn btn-primary" id="btn-add-staff">
        <span class="material-icons-round">person_add</span>
        新規登録
      </button>
    </div>
    <div id="staff-list-container">
      ${Zl(Et)}
    </div>
  `,document.getElementById("btn-add-staff").addEventListener("click",()=>Qs())}function Zl(i){return i.length===0?`
      <div class="empty-state">
        <span class="material-icons-round">person_off</span>
        <h3>職員が登録されていません</h3>
        <p>「新規登録」ボタンから職員を追加してください</p>
      </div>
    `:`
    <div class="grid grid-2">
      ${i.map(e=>{var n,r,o,c,l;return`
        <div class="card" style="border-left:4px solid ${e.color||"#999"}">
          <div class="card-header">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:40px;height:40px;border-radius:50%;background:${e.color||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem">
                ${he(((n=e.name)==null?void 0:n.charAt(0))||"?")}
              </div>
              <div>
                <div style="font-weight:600;font-size:1.05rem">${he(e.name)}</div>
                <div style="font-size:.8rem;color:var(--text-muted)">${e.gender||""} ｜ ${e.workStart||""}〜${e.workEnd||""}</div>
              </div>
            </div>
            <div class="btn-group">
              <button class="btn-icon" title="編集" data-edit-staff="${e.id}">
                <span class="material-icons-round">edit</span>
              </button>
              <button class="btn-icon" title="削除" data-delete-staff="${e.id}" style="color:var(--danger)">
                <span class="material-icons-round">delete</span>
              </button>
            </div>
          </div>
          <div style="margin-bottom:8px">
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">資格</div>
            <div class="tags-container">
              ${(((r=e.skills)==null?void 0:r.qualifications)||[]).map(h=>`<span class="tag">${h}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div style="margin-bottom:8px">
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">対応サービス</div>
            <div class="tags-container">
              ${(((o=e.skills)==null?void 0:o.services)||[]).map(h=>`<span class="tag tag-secondary">${h}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div>
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">特別スキル</div>
            <div class="tags-container">
              ${[...((c=e.skills)==null?void 0:c.physical)||[],...((l=e.skills)==null?void 0:l.special)||[]].map(h=>`<span class="tag tag-accent">${h}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
        </div>
      `}).join("")}
    </div>
  `}function Qs(i=null){const e=!!i,n=e?"職員情報の編集":"新規職員登録",r=`
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${Kl.map(c=>`<option value="${c}" ${(i==null?void 0:i.gender)===c?"selected":""}>${c}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所</label>
        <input class="form-input" id="sf-address" value="${(i==null?void 0:i.address)||""}" placeholder="例: 東京都新宿区..." />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">勤務開始</label>
          <input class="form-input" type="time" id="sf-work-start" value="${(i==null?void 0:i.workStart)||"08:30"}" />
        </div>
        <div class="form-group">
          <label class="form-label">勤務終了</label>
          <input class="form-input" type="time" id="sf-work-end" value="${(i==null?void 0:i.workEnd)||"17:30"}" />
        </div>
      </div>
      ${Object.entries(oi).map(([c,l])=>`
        <div class="form-group">
          <label class="form-label">${l.label}</label>
          <div class="tags-container" style="gap:8px">
            ${l.options.map(h=>{var _,b;const g=(b=(_=i==null?void 0:i.skills)==null?void 0:_[c])!=null&&b.includes(h)?"checked":"";return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${c}" value="${h}" ${g} /> ${h}
              </label>`}).join("")}
          </div>
        </div>
      `).join("")}
    </form>
  `;mi(n,r,`
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("sf-cancel").onclick=Ae,document.getElementById("sf-save").onclick=async()=>{const c=document.getElementById("sf-name").value.trim();if(!c){R("氏名を入力してください","warning");return}const l={name:c,gender:document.getElementById("sf-gender").value,address:document.getElementById("sf-address").value.trim(),workStart:document.getElementById("sf-work-start").value,workEnd:document.getElementById("sf-work-end").value,lat:(i==null?void 0:i.lat)||35.69+Math.random()*.03,lng:(i==null?void 0:i.lng)||139.69+Math.random()*.05,skills:{},color:(i==null?void 0:i.color)||cs[Et.length%cs.length],isActive:!0};for(const[h]of Object.entries(oi)){const g=document.querySelectorAll(`input[name="skill-${h}"]:checked`);l.skills[h]=Array.from(g).map(_=>_.value)}try{e?(await Dl(i.id,l),R("職員情報を更新しました","success")):(await zs(l),R("職員を登録しました","success")),Ae(),await Sn()}catch(h){R("保存に失敗しました: "+h.message,"error")}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-staff]");if(e){const r=Et.find(o=>o.id===e.dataset.editStaff);r&&Qs(r)}const n=i.target.closest("[data-delete-staff]");if(n){const r=Et.find(o=>o.id===n.dataset.deleteStaff);if(r&&await _n("削除確認",`${r.name} を削除しますか？`))try{await Cl(r.id),R(`${r.name} を削除しました`,"success"),await Sn()}catch{R("削除に失敗しました","error")}}});let ci=[],ls=[];async function bn(){const i=document.getElementById("page-container");try{const[e,n]=await Promise.all([qe().catch(()=>[]),Nl().catch(()=>[])]);ci=e,ls=n}catch(e){console.error("データの取得に失敗",e)}i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">elderly</span>
        利用者管理
      </h1>
      <button class="btn btn-primary" id="btn-add-client">
        <span class="material-icons-round">group_add</span>
        新規登録
      </button>
    </div>
    <div id="client-list-container">
      ${ed(ci,ls)}
    </div>
  `,document.getElementById("btn-add-client").addEventListener("click",()=>Zs())}function ed(i,e){return i.length===0?`<div class="empty-state">
      <span class="material-icons-round">person_off</span>
      <h3>利用者が登録されていません</h3>
      <p>「新規登録」ボタンから利用者を追加してください</p>
    </div>`:`
    <div class="table-wrapper card">
      <table class="data-table">
        <thead><tr>
          <th>氏名</th><th>介護度</th><th>必要サービス</th><th>必要スキル</th>
          <th>利用予定（曜日・時間）</th><th>操作</th>
        </tr></thead>
        <tbody>
          ${i.map(n=>{var l,h;const r={月:1,火:2,水:3,木:4,金:5,土:6,日:7},o=e.filter(g=>g.clientId===n.id).sort((g,_)=>{const b=r[g.dayOfWeek]||99,S=r[_.dayOfWeek]||99;return b-S}),c=o.length>0?o.map(g=>`<div style="font-size:0.85rem;margin-bottom:2px;">
                  <span class="tag" style="background:#E2E8F0;color:#333">${g.dayOfWeek||"不明"}</span>
                  ${g.startTime}〜${g.endTime} (${g.duration}分)
                </div>`).join(""):'<span style="color:var(--text-muted)">設定なし</span>';return`<tr>
              <td><strong>${he(n.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${n.genderPreference!=="指定なし"?n.genderPreference:""}</span></td>
              <td><span class="tag ${(l=n.careLevel)!=null&&l.includes("4")||(h=n.careLevel)!=null&&h.includes("5")?"tag-danger":""}">${n.careLevel||"-"}</span></td>
              <td><div class="tags-container">${(n.requiredServices||[]).map(g=>`<span class="tag tag-secondary">${g}</span>`).join("")}</div></td>
              <td><div class="tags-container">${(n.requiredSkills||[]).map(g=>`<span class="tag tag-accent">${g}</span>`).join("")||"-"}</div></td>
              <td>${c}</td>
              <td>
                <div class="btn-group">
                  <button class="btn-icon" data-edit-client="${n.id}"><span class="material-icons-round">edit</span></button>
                  <button class="btn-icon" data-delete-client="${n.id}" style="color:var(--danger)"><span class="material-icons-round">delete</span></button>
                </div>
              </td>
            </tr>`}).join("")}
        </tbody>
      </table>
    </div>
  `}function Zs(i=null){var c,l;const e=!!i,n=[...oi.physical.options,...oi.special.options],r=`
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${Gl.map(h=>`<option ${(i==null?void 0:i.careLevel)===h?"selected":""}>${h}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所</label>
        <input class="form-input" id="cf-address" value="${(i==null?void 0:i.address)||""}" placeholder="例: 東京都新宿区..." />
      </div>
      <div class="form-group">
        <label class="form-label">必要サービス</label>
        <div class="tags-container" style="gap:8px">
          ${Ys.map(h=>{var g;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-service" value="${h}" ${(g=i==null?void 0:i.requiredServices)!=null&&g.includes(h)?"checked":""} /> ${h}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">必要スキル</label>
        <div class="tags-container" style="gap:8px">
          ${n.map(h=>{var g;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-skill" value="${h}" ${(g=i==null?void 0:i.requiredSkills)!=null&&g.includes(h)?"checked":""} /> ${h}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">性別希望</label>
          <select class="form-select" id="cf-gender-pref">
            ${Jl.map(h=>`<option ${(i==null?void 0:i.genderPreference)===h?"selected":""}>${h}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">訪問所要時間（分）</label>
          <input class="form-input" type="number" id="cf-duration" value="${(i==null?void 0:i.visitDuration)||60}" min="15" step="15" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">希望時間帯（開始）</label>
          <input class="form-input" type="time" id="cf-time-start" value="${((c=i==null?void 0:i.timeWindow)==null?void 0:c.start)||"09:00"}" />
        </div>
        <div class="form-group">
          <label class="form-label">希望時間帯（終了）</label>
          <input class="form-input" type="time" id="cf-time-end" value="${((l=i==null?void 0:i.timeWindow)==null?void 0:l.end)||"12:00"}" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">備考</label>
        <textarea class="form-input" id="cf-notes" rows="2" placeholder="特記事項があれば...">${(i==null?void 0:i.notes)||""}</textarea>
      </div>
    </form>
  `;mi(e?"利用者情報の編集":"新規利用者登録",r,`
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("cf-cancel").onclick=Ae,document.getElementById("cf-save").onclick=async()=>{const h=document.getElementById("cf-name").value.trim();if(!h){R("氏名を入力してください","warning");return}const g={name:h,careLevel:document.getElementById("cf-care-level").value,address:document.getElementById("cf-address").value.trim(),requiredServices:Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(_=>_.value),requiredSkills:Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(_=>_.value),genderPreference:document.getElementById("cf-gender-pref").value,visitDuration:parseInt(document.getElementById("cf-duration").value)||60,timeWindow:{start:document.getElementById("cf-time-start").value,end:document.getElementById("cf-time-end").value},notes:document.getElementById("cf-notes").value.trim(),lat:(i==null?void 0:i.lat)||35.69+Math.random()*.03,lng:(i==null?void 0:i.lng)||139.69+Math.random()*.05,isActive:!0};try{e?(await Ll(i.id,g),R("利用者情報を更新しました","success")):(await Gs(g),R("利用者を登録しました","success")),Ae(),await bn()}catch(_){R("保存に失敗しました: "+_.message,"error")}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-client]");if(e){const r=ci.find(o=>o.id===e.dataset.editClient);r&&Zs(r)}const n=i.target.closest("[data-delete-client]");if(n){const r=ci.find(o=>o.id===n.dataset.deleteClient);if(r&&await _n("削除確認",`${r.name} を削除しますか？`))try{await Rl(r.id),R(`${r.name} を削除しました`,"success"),await bn()}catch{R("削除に失敗しました","error")}}});let Xe=Ct();async function td(){const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">calendar_month</span>
        スケジュール管理
      </h1>
      <div class="btn-group">
        <input type="date" id="schedule-date" class="form-input" value="${Xe}" style="width:180px" />
        <button class="btn btn-primary" id="btn-add-visit">
          <span class="material-icons-round">add</span>
          訪問追加
        </button>
      </div>
    </div>
    <div id="schedule-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,document.getElementById("schedule-date").addEventListener("change",e=>{Xe=e.target.value,li()}),document.getElementById("btn-add-visit").addEventListener("click",id),await li()}async function li(){const i=document.getElementById("schedule-content"),[e,n,r]=await Promise.all([Pe().catch(()=>[]),qe().catch(()=>[]),gi(Xe).catch(()=>[])]);if(r.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round">event_busy</span>
        <h3>${si(Xe)} の訪問予定はありません</h3>
        <p>「訪問追加」ボタンから予定を登録するか、マッチング＆最適化を実行してください</p>
      </div>
    `;return}const o={};let c=0,l=0,h=0;for(const _ of r)o[_.staffId]||(o[_.staffId]=[]),o[_.staffId].push(_);let g="";if(window.isAdmin){for(const[S,k]of Object.entries(o)){const D=e.find(A=>A.id===S);if(!D)continue;const P=parseInt(D.wage)||1500;k.sort((A,C)=>(A.startTime||A.scheduledTime||"").localeCompare(C.startTime||C.scheduledTime||""));let N=null;k.forEach((A,C)=>{c+=parseInt(A.income)||3e3;const F=(A.duration||60)/60;l+=P*F;const K=n.find(v=>v.id===A.clientId),Q=K?K.area:null;let J=0,H=0;C===0?J=4:N&&Q&&N!==Q?(J=8,H=20):(J=4,H=10),A.calculatedTravelTime=H,h+=J*25,N=Q}),h+=4*25}const _=c-l-h,b=c>0?Math.round(_/c*100):0;g=`
      <div class="card" style="margin-bottom: 20px; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success);">
        <h3 class="card-title" style="color: var(--success); margin-bottom: 15px;">
          <span class="material-icons-round">analytics</span>
          【管理者専用】本日の収支シミュレーション
        </h3>
        <div class="grid grid-4" style="gap: 15px; text-align: center;">
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定売上</div>
            <div style="font-size: 1.5rem; font-weight: bold;">¥${c.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">人件費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${l.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">車両・移動費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${h.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定利益 (利益率)</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: ${_>=0?"var(--success)":"var(--danger)"};">
              ¥${_.toLocaleString()} <span style="font-size: 1rem;">(${b}%)</span>
            </div>
          </div>
        </div>
      </div>
    `}i.innerHTML=`
    ${g}
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${si(Xe)} — ${r.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(o).map(([_,b])=>{const S=e.find(k=>k.id===_);return`
          <div class="card" style="border-left:4px solid ${(S==null?void 0:S.color)||"#999"}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${(S==null?void 0:S.color)||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${b.length}
              </div>
              ${he((S==null?void 0:S.name)||"未割当")}
            </h3>
            <div class="schedule-timeline">
              ${b.map((k,D)=>{const P=n.find(F=>F.id===k.clientId),N=k.startTime||k.scheduledTime||"--:--";let A="",C="";if(D>0){const F=b[D-1],K=F.startTime||F.scheduledTime,Q=k.calculatedTravelTime||10;if(K&&N!=="--:--"){const[J,H]=K.split(":").map(Number),[v,u]=N.split(":").map(Number),m=J*60+H+(F.duration||60),p=v*60+u-m;p<Q&&(C=`
                          <div style="color:var(--danger); font-size: 0.8rem; padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border-radius: 4px; margin-bottom: 8px;">
                            <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">warning</span>
                            移動時間が不足しています（必要: ${Q}分, 実際: ${p}分）
                          </div>
                        `),A=`
                        <div style="margin-left: 60px; padding: 4px 0; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; border-left: 2px dashed var(--border); padding-left: 14px;">
                          <span class="material-icons-round" style="font-size: 14px; margin-right: 4px;">directions_car</span>
                          移動時間: 約${Q}分
                        </div>
                      `}}return`
                  ${A}
                  ${C}
                  <div class="time-slot">
                    <div class="time-label">${N}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${he((P==null?void 0:P.name)||"不明")}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">
                              ${k.serviceInfo||k.service||"訪問"} | ${k.duration||60}分
                            </div>
                            <div style="font-size:.75rem;color:var(--text-muted); margin-top:2px;">
                              <span class="material-icons-round" style="font-size:12px;vertical-align:middle">place</span>
                              ${he((P==null?void 0:P.area)||"未設定")}
                            </div>
                          </div>
                          <button class="btn-icon" data-delete-visit="${k.id}" style="color:var(--danger)" title="削除">
                            <span class="material-icons-round" style="font-size:18px">close</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                `}).join("")}
            </div>
          </div>
        `}).join("")}
    </div>
  `}async function id(){const[i,e]=await Promise.all([Pe().catch(()=>[]),qe().catch(()=>[])]),n=`
    <form id="visit-form">
      <div class="form-group">
        <label class="form-label">利用者 *</label>
        <select class="form-select" id="vf-client">
          <option value="">選択してください</option>
          ${e.filter(r=>r.isActive).map(r=>`<option value="${r.id}">${r.name}（${r.careLevel}）</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">担当職員 *</label>
        <select class="form-select" id="vf-staff">
          <option value="">選択してください</option>
          ${i.filter(r=>r.isActive).map(r=>`<option value="${r.id}">${r.name}</option>`).join("")}
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">訪問時間</label>
          <input class="form-input" type="time" id="vf-time" value="09:00" />
        </div>
        <div class="form-group">
          <label class="form-label">所要時間（分）</label>
          <input class="form-input" type="number" id="vf-duration" value="60" min="15" step="15" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">サービス種別</label>
        <select class="form-select" id="vf-service">
          ${Ys.map(r=>`<option>${r}</option>`).join("")}
        </select>
      </div>
    </form>
  `;mi("訪問予定の追加",n,`
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `),document.getElementById("vf-cancel").onclick=Ae,document.getElementById("vf-save").onclick=async()=>{const r=document.getElementById("vf-client").value,o=document.getElementById("vf-staff").value;if(!r||!o){R("利用者と職員を選択してください","warning");return}try{await Ks({date:Xe,clientId:r,staffId:o,scheduledTime:document.getElementById("vf-time").value,duration:parseInt(document.getElementById("vf-duration").value)||60,service:document.getElementById("vf-service").value,status:"scheduled"}),R("訪問予定を追加しました","success"),Ae(),await li()}catch{R("追加に失敗しました","error")}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-delete-visit]");if(e&&await _n("削除確認","この訪問予定を削除しますか？"))try{await xl(e.dataset.deleteVisit),R("訪問予定を削除しました","success"),await li()}catch{R("削除に失敗しました","error")}});function nd(i,e){var l,h,g,_,b;let n=0;const r=[];let o=!0;for(const S of e.requiredServices||[])(h=(l=i.skills)==null?void 0:l.services)!=null&&h.includes(S)?(n+=gt.requiredSkill,r.push(`✅ ${S}対応可`)):(o=!1,r.push(`❌ ${S}に対応不可`));const c=[...((g=i.skills)==null?void 0:g.qualifications)||[],...((_=i.skills)==null?void 0:_.physical)||[],...((b=i.skills)==null?void 0:b.special)||[]];for(const S of e.requiredSkills||[])c.includes(S)?(n+=gt.requiredSkill,r.push(`✅ ${S}あり`)):(o=!1,r.push(`❌ ${S}なし`));if(e.genderPreference&&e.genderPreference!=="指定なし"){const S=e.genderPreference.replace("希望","");i.gender===S?(n+=gt.genderMatch,r.push(`✅ 性別希望合致（${S}）`)):(o=!1,r.push(`❌ 性別希望不一致（希望: ${S}）`))}if(i.type==="正社員"&&(n+=gt.staffType,r.push("✅ 正社員")),i.lat&&e.lat){const S=Vs(i.lat,i.lng,e.lat,e.lng),k=Math.max(0,gt.proximity*(1-S/10));n+=k}return{score:Math.round(n),reasons:r,eligible:o}}function rd(i,e){const n=[],r=new Set,o={};for(const l of e){const h=i.filter(S=>S.isActive).map(S=>{const{score:k,eligible:D}=nd(S,l);return{staff:S,score:k,eligible:D}}).filter(S=>S.eligible);if(h.length===0)continue;h.sort((S,k)=>{const D=o[S.staff.id]||0,P=o[k.staff.id]||0,N=S.staff.type==="パート"?5:10,A=k.staff.type==="パート"?5:10,C=D>=N,F=P>=A;return C!==F?C?1:-1:D!==P?D-P:S.staff.type!==k.staff.type?S.staff.type==="正社員"?-1:1:k.score-S.score});const g=h[0],_=o[g.staff.id]||0,b=g.staff.type==="パート"?5:10;_<b&&(n.push({staffId:g.staff.id,staffName:g.staff.name,visitId:l.id,clientId:l.clientId,clientName:l.clientName||"利用者",score:g.score,startTime:l.startTime,endTime:l.endTime}),r.add(l.id),o[g.staff.id]=_+1)}const c=e.filter(l=>!r.has(l.id)).map(l=>({visitId:l.id,clientName:l.clientName||"利用者",reason:"適格な職員なし、または上限超過"}));return{assignments:n,unassigned:c}}async function sd(i,e,n,r=ne,o=null){const c={};for(const h of i)c[h.staffId]||(c[h.staffId]=[]),c[h.staffId].push(h.clientId);const l={};for(const[h,g]of Object.entries(c)){const _=e.find(C=>C.id===h),b=g.map(C=>n.find(F=>F.id===C)).filter(Boolean);if(b.length===0)continue;const S=[{id:"office",name:"事業所",lat:r.lat,lng:r.lng,isOffice:!0},...b.map(C=>({id:C.id,name:C.name,lat:C.lat,lng:C.lng,duration:C.visitDuration,timeWindow:C.timeWindow}))];let k=null;typeof o=="function"&&(k=await o(S));const D=od(S,k);let P=ad(S,D);P=cd(P,D);const N=ld(P,D),A=dd(P,D,_,k);l[h]={staffId:h,staffName:(_==null?void 0:_.name)||"不明",staffColor:(_==null?void 0:_.color)||"#999",route:P,totalDistance:Math.round(N*10)/10,totalDuration:ud(A),schedule:A}}return l}function od(i,e=null){const n=i.length,r=Array.from({length:n},()=>Array(n).fill(0));for(let o=0;o<n;o++)for(let c=0;c<n;c++)o!==c&&(e&&e[o]&&e[o][c]&&e[o][c].distance!==null?r[o][c]=e[o][c].distance:r[o][c]=Vs(i[o].lat,i[o].lng,i[c].lat,i[c].lng));return r}function ad(i,e){const n=i.length,r=new Set([0]),o=[0],c=[],l=[];for(let _=1;_<n;_++){const b=i[_];b.timeWindow&&b.timeWindow.start?c.push({index:_,start:dn(b.timeWindow.start),end:dn(b.timeWindow.end)}):l.push(_)}c.sort((_,b)=>_.start-b.start);const h=[...c.map(_=>_.index),...l];let g=0;for(;r.size<n;){let _=-1,b=1/0;for(const S of h)r.has(S)||e[g][S]<b&&(b=e[g][S],_=S);if(_===-1)break;o.push(_),r.add(_),g=_}return o.push(0),o}function cd(i,e){const n=i.length;let r=!0,o=[...i];for(;r;){r=!1;for(let c=1;c<n-2;c++)for(let l=c+1;l<n-1;l++){const h=e[o[c-1]][o[c]]+e[o[l]][o[l+1]];if(e[o[c-1]][o[l]]+e[o[c]][o[l+1]]<h-.001){const _=[...o];let b=c,S=l;for(;b<S;)[_[b],_[S]]=[_[S],_[b]],b++,S--;o=_,r=!0}}}return o}function ld(i,e){let n=0;for(let r=0;r<i.length-1;r++)n+=e[i[r]][i[r+1]];return n}function dd(i,e,n,r=null){const o=[];let l=dn((n==null?void 0:n.workStart)||"08:30");for(let h=0;h<i.length;h++){if(h>0){let g;const _=i[h-1],b=i[h];r&&r[_]&&r[_][b]&&r[_][b].duration!==null?g=r[_][b].duration:g=e[_][b]/20*60,l+=Math.ceil(g)}o.push({pointIndex:i[h],arrivalTime:hd(l),arrivalMinutes:l}),h>0&&h<i.length-1&&(l+=60)}return o}function ud(i){if(i.length<2)return 0;const e=i[0].arrivalMinutes;return i[i.length-1].arrivalMinutes-e}function dn(i){if(!i)return 0;const[e,n]=i.split(":").map(Number);return e*60+n}function hd(i){const e=Math.floor(i/60),n=i%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}let eo=null,fd=null,kt=Ct();async function md(){const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">auto_fix_high</span>
        マッチング＆ルート最適化
      </h1>
      <div style="display:flex;align-items:center;gap:12px">
        <input type="date" id="match-date-picker" class="form-input" value="${kt}" style="width:160px">
        <span style="color:var(--text-secondary)">の予定を最適化</span>
      </div>
    </div>

    <!-- 実行ボタン -->
    <div class="card" style="margin-bottom:24px;text-align:center;padding:32px">
      <h3 style="margin-bottom:8px">自動マッチング＆ルート最適化</h3>
      <p style="color:var(--text-secondary);margin-bottom:20px">
        職員のスキルと利用者のニーズを照合し、選択された日付の最適な割り当てを算出します
      </p>
      <button class="btn btn-primary" id="btn-run-optimization" style="padding:14px 40px;font-size:1rem">
        <span class="material-icons-round">play_arrow</span>
        最適化を実行
      </button>
    </div>

    <!-- 結果表示エリア -->
    <div id="optimization-results"></div>
  `,document.getElementById("match-date-picker").addEventListener("change",e=>{kt=e.target.value}),document.getElementById("btn-run-optimization").addEventListener("click",pd)}async function pd(){var n;const i=document.getElementById("btn-run-optimization"),e=document.getElementById("optimization-results");i.disabled=!0,i.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',e.innerHTML="";try{const[r,o,c]=await Promise.all([Pe(),qe(),gi(kt)]);if(r.length===0){R("職員が登録されていません","warning");return}if(c.length===0){R(`${si(new Date(kt))} の訪問予定がありません。スケジュール画面で予定を作成してください。`,"warning");return}const{assignments:l,unassigned:h}=rd(r.filter(_=>_.isActive),c);eo=l;const g=await sd(l,r,o,ne,async _=>{try{return await Js(),await Vl(_)}catch(b){return console.warn("実走行データの取得に失敗:",b),null}});fd=g,e.innerHTML=gd(r,o,l,h,g),(n=document.getElementById("btn-save-routes"))==null||n.addEventListener("click",async()=>{await vd(r,g)}),R("最適化が完了しました！","success")}catch(r){R("最適化に失敗しました: "+r.message,"error"),console.error(r)}finally{i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行'}}function gd(i,e,n,r,o){const c={};for(const l of n)c[l.staffId]||(c[l.staffId]={staff:i.find(h=>h.id===l.staffId),clients:[]}),c[l.staffId].clients.push({...l,client:e.find(h=>h.id===l.clientId)});return`
    <!-- サマリーカード -->
    <div class="grid grid-3" style="margin-bottom:24px">
      <div class="card stat-card success">
        <div class="stat-label">割り当て完了</div>
        <div class="stat-value">${n.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${r.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card info">
        <div class="stat-label">総移動距離</div>
        <div class="stat-value">${Object.values(o).reduce((l,h)=>l+h.totalDistance,0).toFixed(1)}<span style="font-size:.9rem;color:var(--text-muted)">km</span></div>
      </div>
    </div>

    <!-- 職員別結果 -->
    <div class="grid grid-2" style="margin-bottom:24px">
      ${Object.entries(c).map(([l,h])=>{var _,b,S;const g=o[l];return`
          <div class="card" style="border-left:4px solid ${((_=h.staff)==null?void 0:_.color)||"#999"}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${((b=h.staff)==null?void 0:b.color)||"#999"};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${h.clients.length}
                </div>
                ${he(((S=h.staff)==null?void 0:S.name)||"不明")}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${(g==null?void 0:g.totalDistance)||0}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${((g==null?void 0:g.schedule)||[]).filter(k=>k.pointIndex!==0||g.schedule.indexOf(k)===g.schedule.length-1).map((k,D,P)=>{var N,A,C,F;return k.pointIndex===0&&D===P.length-1?`<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${k.arrivalTime} 事業所帰着
                    </div>`:(h.clients.find(K=>(g.route[g.schedule.indexOf(k)],!0)),`<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${k.arrivalTime} ${((A=(N=h.clients[D])==null?void 0:N.client)==null?void 0:A.name)||"利用者"}</strong>
                      <span class="tag">${((F=(C=h.clients[D])==null?void 0:C.client)==null?void 0:F.visitDuration)||60}分</span>
                    </div>
                  </div>`)}).join("")}
            </div>
          </div>
        `}).join("")}
    </div>

    ${r.length>0?`
      <div class="card" style="border-left:4px solid var(--danger);margin-bottom:24px">
        <h3 class="card-title" style="color:var(--danger);margin-bottom:12px">
          <span class="material-icons-round">warning</span>
          未割り当ての利用者
        </h3>
        ${r.map(l=>`
          <div style="padding:6px 0;color:var(--text-secondary)">
            ${he(l.clientName)} — ${l.reason}
          </div>
        `).join("")}
      </div>
    `:""}

    <!-- 保存ボタン -->
    <div style="text-align:center;padding:20px">
      <button class="btn btn-primary" id="btn-save-routes" style="padding:14px 40px;font-size:1rem">
        <span class="material-icons-round">save</span>
        この結果を保存してマップに反映
      </button>
    </div>
  `}async function vd(i,e){try{const n=Object.entries(e).map(([o,c])=>({staffId:o,date:Ct(),clientIds:c.route.slice(1,-1).map(l=>{var h;return(h=c.schedule[l])==null?void 0:h.clientId}).filter(Boolean),totalDistance:c.totalDistance,totalDuration:c.totalDuration,schedule:c.schedule})),r=Object.entries(e).map(([o,c])=>{const l=eo.filter(h=>h.staffId===o).map(h=>h.clientId);return{staffId:o,date:kt,clientIds:l,totalDistance:c.totalDistance,totalDuration:c.totalDuration}});await $l(r),R("ルートを保存しました。マップビューで確認できます。","success")}catch(n){R("保存に失敗しました: "+n.message,"error")}}const yd={dashboard:{render:Ul,title:"ダッシュボード"},map:{render:Xl,title:"マップビュー"},staff:{render:Sn,title:"職員管理"},client:{render:bn,title:"利用者管理"},schedule:{render:td,title:"スケジュール"},matching:{render:md,title:"マッチング＆最適化"}};function _d(){var e,n,r;document.querySelectorAll(".nav-item").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.page;c&&di(c)})}),(e=document.getElementById("btn-sidebar-toggle"))==null||e.addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("collapsed")}),(n=document.getElementById("btn-modal-close"))==null||n.addEventListener("click",()=>{document.getElementById("modal-overlay").style.display="none"}),(r=document.getElementById("modal-overlay"))==null||r.addEventListener("click",o=>{o.target===o.currentTarget&&(o.currentTarget.style.display="none")})}async function di(i){const e=yd[i];if(!e)return;document.querySelectorAll(".nav-item").forEach(r=>{r.classList.toggle("active",r.dataset.page===i)}),document.title=`${e.title} - CareRoute`;const n=document.getElementById("page-container");n.innerHTML='<div class="loading"><div class="spinner"></div></div>';try{await e.render()}catch(r){console.error(`ページ「${e.title}」の表示エラー:`,r),n.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${r.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `}}const ds=[{id:"staff_2",name:"前川さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_3",name:"水口さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"18:01",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018},{id:"staff_4",name:"横家さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","火","水","木","金"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#F59E0B",isActive:!0,lat:35.443,lng:137.018},{id:"staff_5",name:"木澤さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["火","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#8B5CF6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_6",name:"圭子さん",gender:"女性",type:"パート",workStart:"07:50",workEnd:"16:00",days:["月","火","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:[]},color:"#EC4899",isActive:!0,lat:35.443,lng:137.018},{id:"staff_7",name:"藤吉さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"12:00",days:["火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["ペット可"]},color:"#14B8A6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_8",name:"ちえみさん",gender:"女性",type:"パート",workStart:"13:00",workEnd:"17:00",days:["月","火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#F97316",isActive:!0,lat:35.443,lng:137.018},{id:"staff_9",name:"棚橋さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["火","水","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#6366F1",isActive:!0,lat:35.443,lng:137.018},{id:"staff_10",name:"高井さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"14:00",days:["火","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理"]},color:"#84CC16",isActive:!0,lat:35.443,lng:137.018},{id:"staff_11",name:"小沢さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"16:00",days:["月","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#0EA5E9",isActive:!0,lat:35.443,lng:137.018},{id:"staff_12",name:"若尾さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["月","火","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#3B82F6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_13",name:"小川さん",gender:"女性",type:"パート",workStart:"08:20",workEnd:"17:00",days:["月","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_14",name:"井戸さん",gender:"女性",type:"パート",workStart:"07:30",workEnd:"16:00",days:["月","火","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018}],us=[{id:"client_1",name:"中村晃",genderPreference:"指定なし",address:"関市東新町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.497156833927576,lng:136.91472248776176,isActive:!0,area:"関市"},{id:"client_2",name:"今井 幸",genderPreference:"指定なし",address:"可児市今渡1334番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.429546564671064,lng:137.06448192237502,isActive:!0,area:"可児市"},{id:"client_3",name:"佐合愛",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441449916213905,lng:137.00859676668438,isActive:!0,area:"美濃加茂市"},{id:"client_4",name:"佐藤 平",genderPreference:"指定なし",address:"関市小野1378番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.496713667191365,lng:136.91611792725212,isActive:!0,area:"関市"},{id:"client_5",name:"佐藤 惠",genderPreference:"指定なし",address:"加茂郡富加町羽生1439-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49350458855056,lng:137.00284647997333,isActive:!0,area:"加茂郡富加町"},{id:"client_6",name:"内田 鉄",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1247",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43919134426946,lng:137.0179669717769,isActive:!0,area:"美濃加茂市"},{id:"client_7",name:"冨田 勝",genderPreference:"女性希望",address:"美濃加茂市蜂屋町中蜂屋1475番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.433236929814676,lng:137.0206065781048,isActive:!0,area:"美濃加茂市"},{id:"client_8",name:"前川 み",genderPreference:"指定なし",address:"美濃加茂市森山町3-4-28",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.447385010380714,lng:137.0241786951649,isActive:!0,area:"美濃加茂市"},{id:"client_9",name:"加藤 民",genderPreference:"指定なし",address:"加茂郡川辺町中川辺1220番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.475384399265096,lng:137.06390768355888,isActive:!0,area:"加茂郡川辺町"},{id:"client_10",name:"加藤 雪",genderPreference:"指定なし",address:"可児市松伏3-4",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.42952101999053,lng:137.06996025815,isActive:!0,area:"可児市"},{id:"client_11",name:"吉村 強",genderPreference:"女性希望",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45175401563851,lng:137.02161473049864,isActive:!0,area:"美濃加茂市"},{id:"client_12",name:"吉田あ",genderPreference:"指定なし",address:"関市西田原",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49115464552958,lng:136.92399997463878,isActive:!0,area:"関市"},{id:"client_13",name:"和田 隆",genderPreference:"指定なし",address:"加茂郡川辺町石神84番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48236841267637,lng:137.07760456602477,isActive:!0,area:"加茂郡川辺町"},{id:"client_14",name:"土岐 吉",genderPreference:"指定なし",address:"美濃加茂市加茂野町市橋836-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44162170104763,lng:137.0262114717999,isActive:!0,area:"美濃加茂市"},{id:"client_15",name:"土岐 雅",genderPreference:"指定なし",address:"加茂郡富加町羽生1453-20",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.488517359713484,lng:136.99491575096658,isActive:!0,area:"加茂郡富加町"},{id:"client_16",name:"大森 君",genderPreference:"女性希望",address:"加茂郡富加町高畑637-3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50099328128151,lng:136.98455151897673,isActive:!0,area:"加茂郡富加町"},{id:"client_17",name:"大橋ひさ",genderPreference:"女性希望",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.438385496082404,lng:137.02562783976515,isActive:!0,area:"美濃加茂市"},{id:"client_18",name:"天野慧",genderPreference:"指定なし",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.434155101090184,lng:137.02364638342797,isActive:!0,area:"美濃加茂市"},{id:"client_19",name:"奥田 邦",genderPreference:"指定なし",address:"加茂郡川辺町石神9778-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494079651227416,lng:137.07228502934993,isActive:!0,area:"加茂郡川辺町"},{id:"client_20",name:"安田 正",genderPreference:"女性希望",address:"関市東町4-3-24",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.498558378964844,lng:136.93317629557282,isActive:!0,area:"関市"},{id:"client_21",name:"安藤 悦治",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4458132002014,lng:137.0128572203751,isActive:!0,area:"美濃加茂市"},{id:"client_22",name:"宮本伸",genderPreference:"指定なし",address:"美濃加茂市上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43490869964852,lng:137.01386742162063,isActive:!0,area:"美濃加茂市"},{id:"client_23",name:"宮田 薫",genderPreference:"指定なし",address:"加茂郡富加町高畑637番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4893904414253,lng:136.9951458803918,isActive:!0,area:"加茂郡富加町"},{id:"client_24",name:"富田 菊",genderPreference:"指定なし",address:"可児市矢戸1445番地34",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.435752761721716,lng:137.0651931080912,isActive:!0,area:"可児市"},{id:"client_25",name:"小原 強",genderPreference:"指定なし",address:"美濃加茂市下米田町則光329番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441734590435274,lng:137.0125176746724,isActive:!0,area:"美濃加茂市"},{id:"client_26",name:"岡田 洋",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋1674番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4365047823305,lng:137.01270107633286,isActive:!0,area:"美濃加茂市"},{id:"client_27",name:"岩﨑 嬉",genderPreference:"指定なし",address:"美濃加茂市加茂川町３丁目４番７号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43346804141193,lng:137.01932833342485,isActive:!0,area:"美濃加茂市"},{id:"client_28",name:"川崎 イ",genderPreference:"指定なし",address:"加茂郡富加町滝田151番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.496723988527705,lng:136.9997990843252,isActive:!0,area:"加茂郡富加町"},{id:"client_29",name:"平田 裕",genderPreference:"指定なし",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.449511651048645,lng:137.00972072094092,isActive:!0,area:"美濃加茂市"},{id:"client_30",name:"平田あ",genderPreference:"女性希望",address:"加茂郡富加町羽生",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49517050409468,lng:136.9856735080124,isActive:!0,area:"加茂郡富加町"},{id:"client_31",name:"廣 強",genderPreference:"指定なし",address:"美濃加茂市牧野1076-75",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44218112119725,lng:137.01104910417206,isActive:!0,area:"美濃加茂市"},{id:"client_32",name:"斉藤真",genderPreference:"指定なし",address:"関市北天神",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48797634825378,lng:136.9143700838785,isActive:!0,area:"関市"},{id:"client_33",name:"日比野 奥",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.437015399250406,lng:137.00906805366205,isActive:!0,area:"美濃加茂市"},{id:"client_34",name:"日比野 由",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43337070077588,lng:137.0244453376369,isActive:!0,area:"美濃加茂市"},{id:"client_35",name:"日比野 直",genderPreference:"女性希望",address:"美濃加茂市清水町2-3-17",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44642678990315,lng:137.01795349522274,isActive:!0,area:"美濃加茂市"},{id:"client_36",name:"木村 光",genderPreference:"指定なし",address:"美濃加茂市太田町2600番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.435371997376876,lng:137.01108131268214,isActive:!0,area:"美濃加茂市"},{id:"client_37",name:"木澤 博",genderPreference:"指定なし",address:"加茂郡富加町加治田3461番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.506303390707046,lng:136.99104467350202,isActive:!0,area:"加茂郡富加町"},{id:"client_38",name:"木澤 照",genderPreference:"女性希望",address:"加茂郡川辺町石神215-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4880086414237,lng:137.07289353288346,isActive:!0,area:"加茂郡川辺町"},{id:"client_39",name:"杉島 希",genderPreference:"指定なし",address:"加茂郡富加町滝田283-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50110204409342,lng:136.98395012382613,isActive:!0,area:"加茂郡富加町"},{id:"client_40",name:"村仲 尚",genderPreference:"女性希望",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.438698758555574,lng:137.02193085044868,isActive:!0,area:"美濃加茂市"},{id:"client_41",name:"村仲 鍬",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452301436877214,lng:137.02067008781682,isActive:!0,area:"美濃加茂市"},{id:"client_42",name:"松元 良",genderPreference:"女性希望",address:"美濃加茂市本郷町1丁目1番26号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.43827103816531,lng:137.01191566430634,isActive:!0,area:"美濃加茂市"},{id:"client_43",name:"栗山 年",genderPreference:"指定なし",address:"加茂郡富加町高畑258番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494121986748645,lng:136.98518245423062,isActive:!0,area:"加茂郡富加町"},{id:"client_44",name:"櫻井 あ",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉773番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.45138892205426,lng:137.01422771742352,isActive:!0,area:"美濃加茂市"},{id:"client_45",name:"河野 仁",genderPreference:"指定なし",address:"加茂郡富加町羽生909-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.490271641834966,lng:136.98727323288463,isActive:!0,area:"加茂郡富加町"},{id:"client_46",name:"浅野",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45202959233498,lng:137.01566783519402,isActive:!0,area:"美濃加茂市"},{id:"client_47",name:"渡邉 文",genderPreference:"指定なし",address:"加茂郡川辺町比久見505番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49415672848246,lng:137.0639961091595,isActive:!0,area:"加茂郡川辺町"},{id:"client_48",name:"渡邉直",genderPreference:"女性希望",address:"美濃加茂市蜂屋町上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43872942558895,lng:137.01354730683613,isActive:!0,area:"美濃加茂市"},{id:"client_49",name:"瀧戸 邦",genderPreference:"指定なし",address:"加茂郡富加町高畑815-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49012105422854,lng:137.00036018284152,isActive:!0,area:"加茂郡富加町"},{id:"client_50",name:"石原 ヤ",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50124112017079,lng:136.98382202932007,isActive:!0,area:"加茂郡富加町"},{id:"client_51",name:"石原 孝",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49328324234597,lng:136.9835128247142,isActive:!0,area:"加茂郡富加町"},{id:"client_52",name:"石田 友",genderPreference:"指定なし",address:"関市大杉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49271720267115,lng:136.91679407643252,isActive:!0,area:"関市"},{id:"client_53",name:"神園 昭",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1552-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445736819174996,lng:137.02080207291,isActive:!0,area:"美濃加茂市"},{id:"client_54",name:"細田 と",genderPreference:"指定なし",address:"加茂郡川辺町比久見927番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49138118249907,lng:137.0669797974694,isActive:!0,area:"加茂郡川辺町"},{id:"client_55",name:"織部 恒",genderPreference:"女性希望",address:"加茂郡富加町大山561-2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4956482083646,lng:136.98479580431297,isActive:!0,area:"加茂郡富加町"},{id:"client_56",name:"纐纈 芳",genderPreference:"指定なし",address:"美濃加茂市田島町2-1-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45002813499261,lng:137.0212204400497,isActive:!0,area:"美濃加茂市"},{id:"client_57",name:"纐纈美",genderPreference:"指定なし",address:"美濃加茂市大手町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4391119160273,lng:137.02387050933302,isActive:!0,area:"美濃加茂市"},{id:"client_58",name:"肥田 太",genderPreference:"指定なし",address:"可児市下恵土4146-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4312051032861,lng:137.05456974028345,isActive:!0,area:"可児市"},{id:"client_59",name:"菊池 二",genderPreference:"指定なし",address:"美濃加茂市加茂野町鷹之巣1712番地13",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44067140824593,lng:137.00812252064713,isActive:!0,area:"美濃加茂市"},{id:"client_60",name:"酒向 み",genderPreference:"指定なし",address:"美濃加茂市下米田町東栃井173番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.439305854394995,lng:137.02599237626308,isActive:!0,area:"美濃加茂市"},{id:"client_61",name:"鈴木 春",genderPreference:"女性希望",address:"美濃加茂市蜂屋町伊瀬920",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445308304721735,lng:137.02055837255097,isActive:!0,area:"美濃加茂市"},{id:"client_62",name:"長沼 善",genderPreference:"指定なし",address:"美濃加茂市富加町加治田665",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452051259062436,lng:137.01855573983298,isActive:!0,area:"美濃加茂市"},{id:"client_63",name:"馬場 と",genderPreference:"女性希望",address:"美濃加茂市太田町3519-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44993124386665,lng:137.02104853551123,isActive:!0,area:"美濃加茂市"},{id:"client_64",name:"高山 智",genderPreference:"指定なし",address:"美濃加茂市牧野1941番地16",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44532882741129,lng:137.00968272003644,isActive:!0,area:"美濃加茂市"},{id:"client_65",name:"髙井 千",genderPreference:"女性希望",address:"加茂郡富加町羽生1751番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.505370248825024,lng:136.9927463803301,isActive:!0,area:"加茂郡富加町"},{id:"client_66",name:"鹿野 和",genderPreference:"指定なし",address:"美濃加茂市山之上町1538番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44890607991325,lng:137.01711922971506,isActive:!0,area:"美濃加茂市"},{id:"client_67",name:"鹿野 義",genderPreference:"指定なし",address:"美濃加茂市山之上町6260番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43761631928377,lng:137.01824050932268,isActive:!0,area:"美濃加茂市"}],hs=[{id:"visit_1",clientId:"client_46",dayOfWeek:"金",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_2",clientId:"client_18",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_3",clientId:"client_21",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_4",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"生活２・１７９０円"},{id:"visit_5",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_6",clientId:"client_52",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_7",clientId:"client_52",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_8",clientId:"client_52",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_9",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_10",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_11",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_12",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_13",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_14",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_15",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_16",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_17",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_18",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_19",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_20",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_21",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_22",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_23",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_24",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_25",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_26",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_27",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_28",clientId:"client_50",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2200,serviceInfo:"生活３・２２００円"},{id:"visit_29",clientId:"client_50",dayOfWeek:"水",startTime:"12:30",endTime:"14:00",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_30",clientId:"client_2",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_31",clientId:"client_27",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_32",clientId:"client_6",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_33",clientId:"client_17",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:5870,serviceInfo:"障害身体・５８７０円・１２００円"},{id:"visit_34",clientId:"client_17",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_35",clientId:"client_17",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_36",clientId:"client_16",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_37",clientId:"client_26",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_38",clientId:"client_19",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_39",clientId:"client_19",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_40",clientId:"client_25",dayOfWeek:"月",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_41",clientId:"client_25",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_42",clientId:"client_25",dayOfWeek:"木",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_43",clientId:"client_25",dayOfWeek:"水",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_44",clientId:"client_25",dayOfWeek:"金",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_45",clientId:"client_55",dayOfWeek:"月",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_46",clientId:"client_55",dayOfWeek:"土",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_47",clientId:"client_9",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_48",clientId:"client_9",dayOfWeek:"火",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_49",clientId:"client_9",dayOfWeek:"木",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_50",clientId:"client_9",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_51",clientId:"client_9",dayOfWeek:"土",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_52",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_53",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_54",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_55",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_56",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_57",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_58",clientId:"client_9",dayOfWeek:"月",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_59",clientId:"client_9",dayOfWeek:"土",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_60",clientId:"client_9",dayOfWeek:"火",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_61",clientId:"client_9",dayOfWeek:"金",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_62",clientId:"client_9",dayOfWeek:"木",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_63",clientId:"client_10",dayOfWeek:"水",startTime:"10:00",endTime:"11:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_64",clientId:"client_10",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_65",clientId:"client_53",dayOfWeek:"水",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_66",clientId:"client_28",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_67",clientId:"client_28",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_68",clientId:"client_45",dayOfWeek:"金",startTime:"09:15",endTime:"10:15",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_69",clientId:"client_59",dayOfWeek:"月",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_70",clientId:"client_59",dayOfWeek:"水",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_71",clientId:"client_59",dayOfWeek:"金",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_72",clientId:"client_38",dayOfWeek:"月",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_73",clientId:"client_38",dayOfWeek:"水",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_74",clientId:"client_38",dayOfWeek:"金",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_75",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_76",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_77",clientId:"client_37",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_78",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_79",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_80",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_81",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_82",clientId:"client_37",dayOfWeek:"水",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_83",clientId:"client_37",dayOfWeek:"木",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_84",clientId:"client_37",dayOfWeek:"火",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_85",clientId:"client_37",dayOfWeek:"土",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_86",clientId:"client_37",dayOfWeek:"火",startTime:"17:00",endTime:"17:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_87",clientId:"client_37",dayOfWeek:"水",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_88",clientId:"client_37",dayOfWeek:"木",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_89",clientId:"client_36",dayOfWeek:"月",startTime:"15:30",endTime:"16:30",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_90",clientId:"client_36",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_91",clientId:"client_36",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_92",clientId:"client_57",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_93",clientId:"client_43",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_94",clientId:"client_43",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_95",clientId:"client_43",dayOfWeek:"金",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_96",clientId:"client_43",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_97",clientId:"client_56",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害・４０４０円・１２００円"},{id:"visit_98",clientId:"client_32",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_99",clientId:"client_44",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_100",clientId:"client_44",dayOfWeek:"火",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_101",clientId:"client_44",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_102",clientId:"client_44",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_103",clientId:"client_60",dayOfWeek:"火",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_104",clientId:"client_60",dayOfWeek:"木",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_105",clientId:"client_60",dayOfWeek:"土",startTime:"08:10",endTime:"09:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_106",clientId:"client_3",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_107",clientId:"client_3",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_108",clientId:"client_5",dayOfWeek:"水",startTime:"12:00",endTime:"13:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_109",clientId:"client_4",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_110",clientId:"client_4",dayOfWeek:"火",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_111",clientId:"client_4",dayOfWeek:"水",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_112",clientId:"client_4",dayOfWeek:"木",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_113",clientId:"client_4",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_114",clientId:"client_4",dayOfWeek:"土",startTime:"16:30",endTime:"17:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_115",clientId:"client_66",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_116",clientId:"client_67",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_117",clientId:"client_39",dayOfWeek:"月",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_118",clientId:"client_61",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_119",clientId:"client_61",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_120",clientId:"client_65",dayOfWeek:"月",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_121",clientId:"client_65",dayOfWeek:"火",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_122",clientId:"client_65",dayOfWeek:"水",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_123",clientId:"client_65",dayOfWeek:"木",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_124",clientId:"client_65",dayOfWeek:"金",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_125",clientId:"client_65",dayOfWeek:"土",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_126",clientId:"client_65",dayOfWeek:"月",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_127",clientId:"client_65",dayOfWeek:"水",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_128",clientId:"client_65",dayOfWeek:"木",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_129",clientId:"client_65",dayOfWeek:"金",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_130",clientId:"client_65",dayOfWeek:"土",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_131",clientId:"client_65",dayOfWeek:"火",startTime:"12:10",endTime:"12:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_132",clientId:"client_65",dayOfWeek:"月",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_133",clientId:"client_65",dayOfWeek:"水",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_134",clientId:"client_65",dayOfWeek:"火",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_135",clientId:"client_65",dayOfWeek:"金",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_136",clientId:"client_65",dayOfWeek:"土",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_137",clientId:"client_64",dayOfWeek:"火",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_138",clientId:"client_64",dayOfWeek:"木",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_139",clientId:"client_64",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_140",clientId:"client_49",dayOfWeek:"水",startTime:"12:15",endTime:"13:15",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_141",clientId:"client_49",dayOfWeek:"土",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_142",clientId:"client_14",dayOfWeek:"水",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_143",clientId:"client_15",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_144",clientId:"client_15",dayOfWeek:"水",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_145",clientId:"client_15",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_146",clientId:"client_24",dayOfWeek:"火",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_147",clientId:"client_24",dayOfWeek:"木",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_148",clientId:"client_7",dayOfWeek:"月",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_149",clientId:"client_7",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_150",clientId:"client_1",dayOfWeek:"月",startTime:"15:30",endTime:"16:00",duration:60,income:3090,serviceInfo:"障害家事・１０６０円・１０１０円"},{id:"visit_151",clientId:"client_1",dayOfWeek:"水",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_152",clientId:"client_1",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_153",clientId:"client_62",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_154",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_155",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_156",clientId:"client_58",dayOfWeek:"月",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_157",clientId:"client_58",dayOfWeek:"水",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_158",clientId:"client_58",dayOfWeek:"火",startTime:"11:45",endTime:"12:15",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_159",clientId:"client_58",dayOfWeek:"木",startTime:"13:00",endTime:"13:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_160",clientId:"client_58",dayOfWeek:"金",startTime:"12:30",endTime:"13:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_161",clientId:"client_33",dayOfWeek:"木",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_162",clientId:"client_35",dayOfWeek:"月",startTime:"10:40",endTime:"11:40",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_163",clientId:"client_34",dayOfWeek:"火",startTime:"07:30",endTime:"08:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_164",clientId:"client_30",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_165",clientId:"client_29",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_166",clientId:"client_31",dayOfWeek:"木",startTime:"09:30",endTime:"10:20",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_167",clientId:"client_54",dayOfWeek:"火",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_168",clientId:"client_54",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_169",clientId:"client_54",dayOfWeek:"木",startTime:"08:15",endTime:"09:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_170",clientId:"client_8",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_171",clientId:"client_42",dayOfWeek:"火",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_172",clientId:"client_42",dayOfWeek:"金",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_173",clientId:"client_42",dayOfWeek:"水",startTime:"14:45",endTime:"16:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_174",clientId:"client_23",dayOfWeek:"土",startTime:"15:00",endTime:"15:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_175",clientId:"client_22",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_176",clientId:"client_41",dayOfWeek:"火",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_177",clientId:"client_40",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_178",clientId:"client_40",dayOfWeek:"木",startTime:"11:45",endTime:"12:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_179",clientId:"client_40",dayOfWeek:"金",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_180",clientId:"client_20",dayOfWeek:"月",startTime:"17:00",endTime:"18:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_181",clientId:"client_12",dayOfWeek:"火",startTime:"15:30",endTime:"16:15",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_182",clientId:"client_12",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_183",clientId:"client_11",dayOfWeek:"月",startTime:"12:00",endTime:"12:50",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_184",clientId:"client_48",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_185",clientId:"client_48",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_186",clientId:"client_47",dayOfWeek:"土",startTime:"14:15",endTime:"15:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_187",clientId:"client_13",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"}];document.addEventListener("DOMContentLoaded",()=>{var i,e;console.log("🏠 CareRoute 起動中..."),Pl(),_d();try{kl(async(n,r)=>{if(r){R(r,"error"),Qi();return}n?(console.log("✅ ログイン:",n.email),fs(n),await di("dashboard")):Qi()})}catch(n){console.warn("Firebase未設定のためデモモードで起動します:",n),Qi()}(i=document.getElementById("btn-logout"))==null||i.addEventListener("click",async()=>{try{await Ol(),R("ログアウトしました","info")}catch{R("ログアウトに失敗しました","error")}}),(e=document.getElementById("btn-demo-mode"))==null||e.addEventListener("click",async()=>{fs({displayName:"デモユーザー",email:"demo@careroute.local",photoURL:""}),(await Pe()).length===0&&(R("デモデータを自動投入しています...","info"),await to(!0)),await di("dashboard"),R("デモモードで起動しました","info")})});function Qi(){document.getElementById("login-screen").style.display="flex",document.getElementById("main-app").style.display="none"}function fs(i){document.getElementById("login-screen").style.display="none",document.getElementById("main-app").style.display="flex";const e=document.getElementById("user-avatar"),n=document.getElementById("user-name");e&&(e.src=i.photoURL||""),n&&(n.textContent=i.displayName||i.email),window.isAdmin=i.email==="demo@careroute.local",Id()}function Id(){if(document.getElementById("btn-load-demo"))return;const i=document.querySelector(".sidebar-nav"),e=document.createElement("li");e.className="nav-item",e.id="btn-load-demo",e.innerHTML=`
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `,e.addEventListener("click",to),i.appendChild(e)}async function to(i=!1){const e=document.getElementById("btn-load-demo");if(!(!i&&!confirm(`デモデータ（職員6名・利用者20名）を投入しますか？
既存データには影響しません。`))){e&&(e.innerHTML=`
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `);try{const n=await Pe(),r=await qe();if(n.length>0||r.length>0){if(!i&&!confirm("既存のデータを全て削除し、新しいエクセルデータを投入しますか？")){e&&(e.innerHTML=`
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `);return}typeof os=="function"?await os():(localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"))}for(const h of ds)await zs(h);R(`職員 ${ds.length}名 を登録しました`,"success");for(const h of us)await Gs(h);R(`利用者 ${us.length}名 を登録しました`,"success");const o=new Date,c=o.getDay(),l={日:0,月:1,火:2,水:3,木:4,金:5,土:6};for(const h of hs){let g=new Date(o);if(h.dayOfWeek&&l[h.dayOfWeek]!==void 0){const D=l[h.dayOfWeek]-c;g.setDate(o.getDate()+D)}const _=g.getFullYear(),b=String(g.getMonth()+1).padStart(2,"0"),S=String(g.getDate()).padStart(2,"0"),k=`${_}-${b}-${S}`;await Ks({...h,date:k,status:"scheduled"})}R(`予定 ${hs.length}件 を登録しました`,"success"),await di("dashboard"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `,setTimeout(()=>e.remove(),3e3)}catch(n){console.error("デモデータ投入エラー:",n),R("デモデータの投入に失敗しました: "+n.message,"error"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `}}}
