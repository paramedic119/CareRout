(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const Ro=()=>{};var Tr={};/**
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
 */const hs=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},xo=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],d=i[n++],m=i[n++],g=((o&7)<<18|(c&63)<<12|(d&63)<<6|m&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const c=i[n++],d=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|d&63)}}return e.join("")},fs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],d=o+1<i.length,m=d?i[o+1]:0,g=o+2<i.length,T=g?i[o+2]:0,E=c>>2,S=(c&3)<<4|m>>4;let k=(m&15)<<2|T>>6,$=T&63;g||($=64,d||(k=64)),r.push(n[E],n[S],n[k],n[$])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(hs(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):xo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],m=o<i.length?n[i.charAt(o)]:0;++o;const T=o<i.length?n[i.charAt(o)]:64;++o;const S=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||m==null||T==null||S==null)throw new Mo;const k=c<<2|m>>4;if(r.push(k),T!==64){const $=m<<4&240|T>>2;if(r.push($),S!==64){const L=T<<6&192|S;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Mo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $o=function(i){const e=hs(i);return fs.encodeByteArray(e,!0)},ms=function(i){return $o(i).replace(/\./g,"")},ps=function(i){try{return fs.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wo=()=>Uo().__FIREBASE_DEFAULTS__,Bo=()=>{if(typeof process>"u"||typeof Tr>"u")return;const i=Tr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Fo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ps(i[1]);return e&&JSON.parse(e)},qo=()=>{try{return Ro()||Wo()||Bo()||Fo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},jo=i=>{var e;return(e=qo())==null?void 0:e[`_${i}`]};/**
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
 */function fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function Ho(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Go(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ko(){try{return typeof indexedDB=="object"}catch{return!1}}function Jo(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const Xo="FirebaseError";class Oe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xo,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,At.prototype.create)}}class At{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],d=c?Yo(c,r):"Error",m=`${this.serviceName}: ${d} (${o}).`;return new Oe(o,m,r)}}function Yo(i,e){return i.replace(Qo,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Qo=/\{\$([^}]+)}/g;/**
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
 */function gs(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(i,e){const n=new ea(i,e);return n.subscribe.bind(n)}class ea{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ta(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Fi),o.error===void 0&&(o.error=Fi),o.complete===void 0&&(o.complete=Fi);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ta(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Fi(){}/**
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
 */function vs(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}class Ye{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var M;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(M||(M={}));const ia={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},na=M.INFO,ra={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},sa=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=ra[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class an{constructor(e){this.name=e,this._logLevel=na,this._logHandler=sa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ia[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const oa=(i,e)=>e.some(n=>i instanceof n);let wr,Sr;function aa(){return wr||(wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ca(){return Sr||(Sr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ys=new WeakMap,Yi=new WeakMap,_s=new WeakMap,qi=new WeakMap,cn=new WeakMap;function la(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",d)},c=()=>{n(be(i.result)),o()},d=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&ys.set(n,i)}).catch(()=>{}),cn.set(e,i),e}function da(i){if(Yi.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",d),i.removeEventListener("abort",d)},c=()=>{n(),o()},d=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",d),i.addEventListener("abort",d)});Yi.set(i,e)}let Qi={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Yi.get(i);if(e==="objectStoreNames")return i.objectStoreNames||_s.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ua(i){Qi=i(Qi)}function ha(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(ji(this),e,...n);return _s.set(r,e.sort?e.sort():[e]),be(r)}:ca().includes(i)?function(...e){return i.apply(ji(this),e),be(ys.get(this))}:function(...e){return be(i.apply(ji(this),e))}}function fa(i){return typeof i=="function"?ha(i):(i instanceof IDBTransaction&&da(i),oa(i,aa())?new Proxy(i,Qi):i)}function be(i){if(i instanceof IDBRequest)return la(i);if(qi.has(i))return qi.get(i);const e=fa(i);return e!==i&&(qi.set(i,e),cn.set(e,i)),e}const ji=i=>cn.get(i);function ma(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const d=indexedDB.open(i,e),m=be(d);return r&&d.addEventListener("upgradeneeded",g=>{r(be(d.result),g.oldVersion,g.newVersion,be(d.transaction),g)}),n&&d.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{c&&g.addEventListener("close",()=>c()),o&&g.addEventListener("versionchange",T=>o(T.oldVersion,T.newVersion,T))}).catch(()=>{}),m}const pa=["get","getKey","getAll","getAllKeys","count"],ga=["put","add","delete","clear"],Vi=new Map;function br(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=ga.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||pa.includes(n)))return;const c=async function(d,...m){const g=this.transaction(d,o?"readwrite":"readonly");let T=g.store;return r&&(T=T.index(m.shift())),(await Promise.all([T[n](...m),o&&g.done]))[0]};return Vi.set(e,c),c}ua(i=>({...i,get:(e,n,r)=>br(e,n)||i.get(e,n,r),has:(e,n)=>!!br(e,n)||i.has(e,n)}));/**
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
 */class va{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ya(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ya(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zi="@firebase/app",Er="0.14.11";/**
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
 */const pe=new an("@firebase/app"),_a="@firebase/app-compat",Ia="@firebase/analytics-compat",Ta="@firebase/analytics",wa="@firebase/app-check-compat",Sa="@firebase/app-check",ba="@firebase/auth",Ea="@firebase/auth-compat",ka="@firebase/database",Aa="@firebase/data-connect",Oa="@firebase/database-compat",Pa="@firebase/functions",Da="@firebase/functions-compat",Ca="@firebase/installations",La="@firebase/installations-compat",Na="@firebase/messaging",Ra="@firebase/messaging-compat",xa="@firebase/performance",Ma="@firebase/performance-compat",$a="@firebase/remote-config",Ua="@firebase/remote-config-compat",Wa="@firebase/storage",Ba="@firebase/storage-compat",Fa="@firebase/firestore",qa="@firebase/ai",ja="@firebase/firestore-compat",Va="firebase",Ha="12.12.0",za={[Zi]:"fire-core",[_a]:"fire-core-compat",[Ta]:"fire-analytics",[Ia]:"fire-analytics-compat",[Sa]:"fire-app-check",[wa]:"fire-app-check-compat",[ba]:"fire-auth",[Ea]:"fire-auth-compat",[ka]:"fire-rtdb",[Aa]:"fire-data-connect",[Oa]:"fire-rtdb-compat",[Pa]:"fire-fn",[Da]:"fire-fn-compat",[Ca]:"fire-iid",[La]:"fire-iid-compat",[Na]:"fire-fcm",[Ra]:"fire-fcm-compat",[xa]:"fire-perf",[Ma]:"fire-perf-compat",[$a]:"fire-rc",[Ua]:"fire-rc-compat",[Wa]:"fire-gcs",[Ba]:"fire-gcs-compat",[Fa]:"fire-fst",[ja]:"fire-fst-compat",[qa]:"fire-vertex","fire-js":"fire-js",[Va]:"fire-js-all"};/**
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
 */const Ga=new Map,Ka=new Map,kr=new Map;function Ar(i,e){try{i.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Qe(i){const e=i.name;if(kr.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;kr.set(e,i);for(const n of Ga.values())Ar(n,i);for(const n of Ka.values())Ar(n,i);return!0}function xe(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Ja={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new At("app","Firebase",Ja);/**
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
 */const di=Ha;function Ee(i,e,n){let r=za[i]??i;n&&(r+=`-${n}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const d=[`Unable to register library "${r}" with version "${e}":`];o&&d.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(d.join(" "));return}Qe(new Ye(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Xa="firebase-heartbeat-database",Ya=1,wt="firebase-heartbeat-store";let Hi=null;function Is(){return Hi||(Hi=ma(Xa,Ya,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(wt)}catch(n){console.warn(n)}}}}).catch(i=>{throw ln.create("idb-open",{originalErrorMessage:i.message})})),Hi}async function Qa(i){try{const n=(await Is()).transaction(wt),r=await n.objectStore(wt).get(Ts(i));return await n.done,r}catch(e){if(e instanceof Oe)pe.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pe.warn(n.message)}}}async function Or(i,e){try{const r=(await Is()).transaction(wt,"readwrite");await r.objectStore(wt).put(e,Ts(i)),await r.done}catch(n){if(n instanceof Oe)pe.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(r.message)}}}function Ts(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Za=1024,ec=30;class tc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Pr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>ec){const d=rc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pr(),{heartbeatsToSend:r,unsentEntries:o}=ic(this._heartbeatsCache.heartbeats),c=ms(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return pe.warn(n),""}}}function Pr(){return new Date().toISOString().substring(0,10)}function ic(i,e=Za){const n=[];let r=i.slice();for(const o of i){const c=n.find(d=>d.agent===o.agent);if(c){if(c.dates.push(o.date),Dr(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Dr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ko()?Jo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qa(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Or(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Or(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Dr(i){return ms(JSON.stringify({version:2,heartbeats:i})).length}function rc(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
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
 */function sc(i){Qe(new Ye("platform-logger",e=>new va(e),"PRIVATE")),Qe(new Ye("heartbeat",e=>new tc(e),"PRIVATE")),Ee(Zi,Er,i),Ee(Zi,Er,"esm2020"),Ee("fire-js","")}sc("");var oc="firebase",ac="12.12.1";/**
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
 */Ee(oc,ac,"app");var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dn;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,u){function f(){}f.prototype=u.prototype,v.F=u.prototype,v.prototype=new f,v.prototype.constructor=v,v.D=function(y,p,I){for(var h=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)h[Z-2]=arguments[Z];return u.prototype[p].apply(y,h)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(v,u,f){f||(f=0);const y=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)y[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)y[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=v.g[0],f=v.g[1],p=v.g[2];let I=v.g[3],h;h=u+(I^f&(p^I))+y[0]+3614090360&4294967295,u=f+(h<<7&4294967295|h>>>25),h=I+(p^u&(f^p))+y[1]+3905402710&4294967295,I=u+(h<<12&4294967295|h>>>20),h=p+(f^I&(u^f))+y[2]+606105819&4294967295,p=I+(h<<17&4294967295|h>>>15),h=f+(u^p&(I^u))+y[3]+3250441966&4294967295,f=p+(h<<22&4294967295|h>>>10),h=u+(I^f&(p^I))+y[4]+4118548399&4294967295,u=f+(h<<7&4294967295|h>>>25),h=I+(p^u&(f^p))+y[5]+1200080426&4294967295,I=u+(h<<12&4294967295|h>>>20),h=p+(f^I&(u^f))+y[6]+2821735955&4294967295,p=I+(h<<17&4294967295|h>>>15),h=f+(u^p&(I^u))+y[7]+4249261313&4294967295,f=p+(h<<22&4294967295|h>>>10),h=u+(I^f&(p^I))+y[8]+1770035416&4294967295,u=f+(h<<7&4294967295|h>>>25),h=I+(p^u&(f^p))+y[9]+2336552879&4294967295,I=u+(h<<12&4294967295|h>>>20),h=p+(f^I&(u^f))+y[10]+4294925233&4294967295,p=I+(h<<17&4294967295|h>>>15),h=f+(u^p&(I^u))+y[11]+2304563134&4294967295,f=p+(h<<22&4294967295|h>>>10),h=u+(I^f&(p^I))+y[12]+1804603682&4294967295,u=f+(h<<7&4294967295|h>>>25),h=I+(p^u&(f^p))+y[13]+4254626195&4294967295,I=u+(h<<12&4294967295|h>>>20),h=p+(f^I&(u^f))+y[14]+2792965006&4294967295,p=I+(h<<17&4294967295|h>>>15),h=f+(u^p&(I^u))+y[15]+1236535329&4294967295,f=p+(h<<22&4294967295|h>>>10),h=u+(p^I&(f^p))+y[1]+4129170786&4294967295,u=f+(h<<5&4294967295|h>>>27),h=I+(f^p&(u^f))+y[6]+3225465664&4294967295,I=u+(h<<9&4294967295|h>>>23),h=p+(u^f&(I^u))+y[11]+643717713&4294967295,p=I+(h<<14&4294967295|h>>>18),h=f+(I^u&(p^I))+y[0]+3921069994&4294967295,f=p+(h<<20&4294967295|h>>>12),h=u+(p^I&(f^p))+y[5]+3593408605&4294967295,u=f+(h<<5&4294967295|h>>>27),h=I+(f^p&(u^f))+y[10]+38016083&4294967295,I=u+(h<<9&4294967295|h>>>23),h=p+(u^f&(I^u))+y[15]+3634488961&4294967295,p=I+(h<<14&4294967295|h>>>18),h=f+(I^u&(p^I))+y[4]+3889429448&4294967295,f=p+(h<<20&4294967295|h>>>12),h=u+(p^I&(f^p))+y[9]+568446438&4294967295,u=f+(h<<5&4294967295|h>>>27),h=I+(f^p&(u^f))+y[14]+3275163606&4294967295,I=u+(h<<9&4294967295|h>>>23),h=p+(u^f&(I^u))+y[3]+4107603335&4294967295,p=I+(h<<14&4294967295|h>>>18),h=f+(I^u&(p^I))+y[8]+1163531501&4294967295,f=p+(h<<20&4294967295|h>>>12),h=u+(p^I&(f^p))+y[13]+2850285829&4294967295,u=f+(h<<5&4294967295|h>>>27),h=I+(f^p&(u^f))+y[2]+4243563512&4294967295,I=u+(h<<9&4294967295|h>>>23),h=p+(u^f&(I^u))+y[7]+1735328473&4294967295,p=I+(h<<14&4294967295|h>>>18),h=f+(I^u&(p^I))+y[12]+2368359562&4294967295,f=p+(h<<20&4294967295|h>>>12),h=u+(f^p^I)+y[5]+4294588738&4294967295,u=f+(h<<4&4294967295|h>>>28),h=I+(u^f^p)+y[8]+2272392833&4294967295,I=u+(h<<11&4294967295|h>>>21),h=p+(I^u^f)+y[11]+1839030562&4294967295,p=I+(h<<16&4294967295|h>>>16),h=f+(p^I^u)+y[14]+4259657740&4294967295,f=p+(h<<23&4294967295|h>>>9),h=u+(f^p^I)+y[1]+2763975236&4294967295,u=f+(h<<4&4294967295|h>>>28),h=I+(u^f^p)+y[4]+1272893353&4294967295,I=u+(h<<11&4294967295|h>>>21),h=p+(I^u^f)+y[7]+4139469664&4294967295,p=I+(h<<16&4294967295|h>>>16),h=f+(p^I^u)+y[10]+3200236656&4294967295,f=p+(h<<23&4294967295|h>>>9),h=u+(f^p^I)+y[13]+681279174&4294967295,u=f+(h<<4&4294967295|h>>>28),h=I+(u^f^p)+y[0]+3936430074&4294967295,I=u+(h<<11&4294967295|h>>>21),h=p+(I^u^f)+y[3]+3572445317&4294967295,p=I+(h<<16&4294967295|h>>>16),h=f+(p^I^u)+y[6]+76029189&4294967295,f=p+(h<<23&4294967295|h>>>9),h=u+(f^p^I)+y[9]+3654602809&4294967295,u=f+(h<<4&4294967295|h>>>28),h=I+(u^f^p)+y[12]+3873151461&4294967295,I=u+(h<<11&4294967295|h>>>21),h=p+(I^u^f)+y[15]+530742520&4294967295,p=I+(h<<16&4294967295|h>>>16),h=f+(p^I^u)+y[2]+3299628645&4294967295,f=p+(h<<23&4294967295|h>>>9),h=u+(p^(f|~I))+y[0]+4096336452&4294967295,u=f+(h<<6&4294967295|h>>>26),h=I+(f^(u|~p))+y[7]+1126891415&4294967295,I=u+(h<<10&4294967295|h>>>22),h=p+(u^(I|~f))+y[14]+2878612391&4294967295,p=I+(h<<15&4294967295|h>>>17),h=f+(I^(p|~u))+y[5]+4237533241&4294967295,f=p+(h<<21&4294967295|h>>>11),h=u+(p^(f|~I))+y[12]+1700485571&4294967295,u=f+(h<<6&4294967295|h>>>26),h=I+(f^(u|~p))+y[3]+2399980690&4294967295,I=u+(h<<10&4294967295|h>>>22),h=p+(u^(I|~f))+y[10]+4293915773&4294967295,p=I+(h<<15&4294967295|h>>>17),h=f+(I^(p|~u))+y[1]+2240044497&4294967295,f=p+(h<<21&4294967295|h>>>11),h=u+(p^(f|~I))+y[8]+1873313359&4294967295,u=f+(h<<6&4294967295|h>>>26),h=I+(f^(u|~p))+y[15]+4264355552&4294967295,I=u+(h<<10&4294967295|h>>>22),h=p+(u^(I|~f))+y[6]+2734768916&4294967295,p=I+(h<<15&4294967295|h>>>17),h=f+(I^(p|~u))+y[13]+1309151649&4294967295,f=p+(h<<21&4294967295|h>>>11),h=u+(p^(f|~I))+y[4]+4149444226&4294967295,u=f+(h<<6&4294967295|h>>>26),h=I+(f^(u|~p))+y[11]+3174756917&4294967295,I=u+(h<<10&4294967295|h>>>22),h=p+(u^(I|~f))+y[2]+718787259&4294967295,p=I+(h<<15&4294967295|h>>>17),h=f+(I^(p|~u))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+u&4294967295,v.g[1]=v.g[1]+(p+(h<<21&4294967295|h>>>11))&4294967295,v.g[2]=v.g[2]+p&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.v=function(v,u){u===void 0&&(u=v.length);const f=u-this.blockSize,y=this.C;let p=this.h,I=0;for(;I<u;){if(p==0)for(;I<=f;)o(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<u;)if(y[p++]=v.charCodeAt(I++),p==this.blockSize){o(this,y),p=0;break}}else for(;I<u;)if(y[p++]=v[I++],p==this.blockSize){o(this,y),p=0;break}}this.h=p,this.o+=u},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var u=1;u<v.length-8;++u)v[u]=0;u=this.o*8;for(var f=v.length-8;f<v.length;++f)v[f]=u&255,u/=256;for(this.v(v),v=Array(16),u=0,f=0;f<4;++f)for(let y=0;y<32;y+=8)v[u++]=this.g[f]>>>y&255;return v};function c(v,u){var f=m;return Object.prototype.hasOwnProperty.call(f,v)?f[v]:f[v]=u(v)}function d(v,u){this.h=u;const f=[];let y=!0;for(let p=v.length-1;p>=0;p--){const I=v[p]|0;y&&I==u||(f[p]=I,y=!1)}this.g=f}var m={};function g(v){return-128<=v&&v<128?c(v,function(u){return new d([u|0],u<0?-1:0)}):new d([v|0],v<0?-1:0)}function T(v){if(isNaN(v)||!isFinite(v))return S;if(v<0)return P(T(-v));const u=[];let f=1;for(let y=0;v>=f;y++)u[y]=v/f|0,f*=4294967296;return new d(u,0)}function E(v,u){if(v.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(v.charAt(0)=="-")return P(E(v.substring(1),u));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=T(Math.pow(u,8));let y=S;for(let I=0;I<v.length;I+=8){var p=Math.min(8,v.length-I);const h=parseInt(v.substring(I,I+p),u);p<8?(p=T(Math.pow(u,p)),y=y.j(p).add(T(h))):(y=y.j(f),y=y.add(T(h)))}return y}var S=g(0),k=g(1),$=g(16777216);i=d.prototype,i.m=function(){if(O(this))return-P(this).m();let v=0,u=1;for(let f=0;f<this.g.length;f++){const y=this.i(f);v+=(y>=0?y:4294967296+y)*u,u*=4294967296}return v},i.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(L(this))return"0";if(O(this))return"-"+P(this).toString(v);const u=T(Math.pow(v,6));var f=this;let y="";for(;;){const p=Q(f,u).g;f=B(f,p.j(u));let I=((f.g.length>0?f.g[0]:f.h)>>>0).toString(v);if(f=p,L(f))return I+y;for(;I.length<6;)I="0"+I;y=I+y}},i.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function L(v){if(v.h!=0)return!1;for(let u=0;u<v.g.length;u++)if(v.g[u]!=0)return!1;return!0}function O(v){return v.h==-1}i.l=function(v){return v=B(this,v),O(v)?-1:L(v)?0:1};function P(v){const u=v.g.length,f=[];for(let y=0;y<u;y++)f[y]=~v.g[y];return new d(f,~v.h).add(k)}i.abs=function(){return O(this)?P(this):this},i.add=function(v){const u=Math.max(this.g.length,v.g.length),f=[];let y=0;for(let p=0;p<=u;p++){let I=y+(this.i(p)&65535)+(v.i(p)&65535),h=(I>>>16)+(this.i(p)>>>16)+(v.i(p)>>>16);y=h>>>16,I&=65535,h&=65535,f[p]=h<<16|I}return new d(f,f[f.length-1]&-2147483648?-1:0)};function B(v,u){return v.add(P(u))}i.j=function(v){if(L(this)||L(v))return S;if(O(this))return O(v)?P(this).j(P(v)):P(P(this).j(v));if(O(v))return P(this.j(P(v)));if(this.l($)<0&&v.l($)<0)return T(this.m()*v.m());const u=this.g.length+v.g.length,f=[];for(var y=0;y<2*u;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(let p=0;p<v.g.length;p++){const I=this.i(y)>>>16,h=this.i(y)&65535,Z=v.i(p)>>>16,De=v.i(p)&65535;f[2*y+2*p]+=h*De,j(f,2*y+2*p),f[2*y+2*p+1]+=I*De,j(f,2*y+2*p+1),f[2*y+2*p+1]+=h*Z,j(f,2*y+2*p+1),f[2*y+2*p+2]+=I*Z,j(f,2*y+2*p+2)}for(v=0;v<u;v++)f[v]=f[2*v+1]<<16|f[2*v];for(v=u;v<2*u;v++)f[v]=0;return new d(f,0)};function j(v,u){for(;(v[u]&65535)!=v[u];)v[u+1]+=v[u]>>>16,v[u]&=65535,u++}function K(v,u){this.g=v,this.h=u}function Q(v,u){if(L(u))throw Error("division by zero");if(L(v))return new K(S,S);if(O(v))return u=Q(P(v),u),new K(P(u.g),P(u.h));if(O(u))return u=Q(v,P(u)),new K(P(u.g),u.h);if(v.g.length>30){if(O(v)||O(u))throw Error("slowDivide_ only works with positive integers.");for(var f=k,y=u;y.l(v)<=0;)f=J(f),y=J(y);var p=H(f,1),I=H(y,1);for(y=H(y,2),f=H(f,2);!L(y);){var h=I.add(y);h.l(v)<=0&&(p=p.add(f),I=h),y=H(y,1),f=H(f,1)}return u=B(v,p.j(u)),new K(p,u)}for(p=S;v.l(u)>=0;){for(f=Math.max(1,Math.floor(v.m()/u.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),I=T(f),h=I.j(u);O(h)||h.l(v)>0;)f-=y,I=T(f),h=I.j(u);L(I)&&(I=k),p=p.add(I),v=B(v,h)}return new K(p,v)}i.B=function(v){return Q(this,v).h},i.and=function(v){const u=Math.max(this.g.length,v.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)&v.i(y);return new d(f,this.h&v.h)},i.or=function(v){const u=Math.max(this.g.length,v.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)|v.i(y);return new d(f,this.h|v.h)},i.xor=function(v){const u=Math.max(this.g.length,v.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)^v.i(y);return new d(f,this.h^v.h)};function J(v){const u=v.g.length+1,f=[];for(let y=0;y<u;y++)f[y]=v.i(y)<<1|v.i(y-1)>>>31;return new d(f,v.h)}function H(v,u){const f=u>>5;u%=32;const y=v.g.length-f,p=[];for(let I=0;I<y;I++)p[I]=u>0?v.i(I+f)>>>u|v.i(I+f+1)<<32-u:v.i(I+f);return new d(p,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=T,d.fromString=E,dn=d}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof jt=="object"&&jt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var l=0;l<t.length-1;l++){var _=t[l];if(!(_ in a))break e;a=a[_]}t=t[t.length-1],l=a[t],s=s(l),s!=l&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}o("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(t){return t||function(s){var a=[],l;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&a.push([l,s[l]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function g(t,s,a){return t.call.apply(t.bind,arguments)}function T(t,s,a){return T=g,T.apply(null,arguments)}function E(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function S(t,s){function a(){}a.prototype=s.prototype,t.Z=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Ob=function(l,_,w){for(var b=Array(arguments.length-2),A=2;A<arguments.length;A++)b[A-2]=arguments[A];return s.prototype[_].apply(l,b)}}var k=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function $(t){const s=t.length;if(s>0){const a=Array(s);for(let l=0;l<s;l++)a[l]=t[l];return a}return[]}function L(t,s){for(let l=1;l<arguments.length;l++){const _=arguments[l];var a=typeof _;if(a=a!="object"?a:_?Array.isArray(_)?"array":a:"null",a=="array"||a=="object"&&typeof _.length=="number"){a=t.length||0;const w=_.length||0;t.length=a+w;for(let b=0;b<w;b++)t[a+b]=_[b]}else t.push(_)}}class O{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return this.h>0?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function P(t){d.setTimeout(()=>{throw t},0)}function B(){var t=v;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class j{constructor(){this.h=this.g=null}add(s,a){const l=K.get();l.set(s,a),this.h?this.h.next=l:this.g=l,this.h=l}}var K=new O(()=>new Q,t=>t.reset());class Q{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let J,H=!1,v=new j,u=()=>{const t=Promise.resolve(void 0);J=()=>{t.then(f)}};function f(){for(var t;t=B();){try{t.h.call(t.g)}catch(a){P(a)}var s=K;s.j(t),s.h<100&&(s.h++,t.next=s.g,s.g=t)}H=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};d.addEventListener("test",a,s),d.removeEventListener("test",a,s)}catch{}return t}();function h(t){return/^[\s\xa0]*$/.test(t)}function Z(t,s){p.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,s)}S(Z,p),Z.prototype.init=function(t,s){const a=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget,s||(a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement)),this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var De="closure_listenable_"+(Math.random()*1e6|0),Zs=0;function eo(t,s,a,l,_){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!l,this.ha=_,this.key=++Zs,this.da=this.fa=!1}function Ct(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Lt(t,s,a){for(const l in t)s.call(a,t[l],l,t)}function to(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function wn(t){const s={};for(const a in t)s[a]=t[a];return s}const Sn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bn(t,s){let a,l;for(let _=1;_<arguments.length;_++){l=arguments[_];for(a in l)t[a]=l[a];for(let w=0;w<Sn.length;w++)a=Sn[w],Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}}function Nt(t){this.src=t,this.g={},this.h=0}Nt.prototype.add=function(t,s,a,l,_){const w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);const b=gi(t,s,l,_);return b>-1?(s=t[b],a||(s.fa=!1)):(s=new eo(s,this.src,w,!!l,_),s.fa=a,t.push(s)),s};function pi(t,s){const a=s.type;if(a in t.g){var l=t.g[a],_=Array.prototype.indexOf.call(l,s,void 0),w;(w=_>=0)&&Array.prototype.splice.call(l,_,1),w&&(Ct(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function gi(t,s,a,l){for(let _=0;_<t.length;++_){const w=t[_];if(!w.da&&w.listener==s&&w.capture==!!a&&w.ha==l)return _}return-1}var vi="closure_lm_"+(Math.random()*1e6|0),yi={};function En(t,s,a,l,_){if(Array.isArray(s)){for(let w=0;w<s.length;w++)En(t,s[w],a,l,_);return null}return a=On(a),t&&t[De]?t.J(s,a,m(l)?!!l.capture:!1,_):io(t,s,a,!1,l,_)}function io(t,s,a,l,_,w){if(!s)throw Error("Invalid event type");const b=m(_)?!!_.capture:!!_;let A=Ii(t);if(A||(t[vi]=A=new Nt(t)),a=A.add(s,a,l,b,w),a.proxy)return a;if(l=no(),a.proxy=l,l.src=t,l.listener=a,t.addEventListener)I||(_=b),_===void 0&&(_=!1),t.addEventListener(s.toString(),l,_);else if(t.attachEvent)t.attachEvent(An(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function no(){function t(a){return s.call(t.src,t.listener,a)}const s=ro;return t}function kn(t,s,a,l,_){if(Array.isArray(s))for(var w=0;w<s.length;w++)kn(t,s[w],a,l,_);else l=m(l)?!!l.capture:!!l,a=On(a),t&&t[De]?(t=t.i,w=String(s).toString(),w in t.g&&(s=t.g[w],a=gi(s,a,l,_),a>-1&&(Ct(s[a]),Array.prototype.splice.call(s,a,1),s.length==0&&(delete t.g[w],t.h--)))):t&&(t=Ii(t))&&(s=t.g[s.toString()],t=-1,s&&(t=gi(s,a,l,_)),(a=t>-1?s[t]:null)&&_i(a))}function _i(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[De])pi(s.i,t);else{var a=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(a,l,t.capture):s.detachEvent?s.detachEvent(An(a),l):s.addListener&&s.removeListener&&s.removeListener(l),(a=Ii(s))?(pi(a,t),a.h==0&&(a.src=null,s[vi]=null)):Ct(t)}}}function An(t){return t in yi?yi[t]:yi[t]="on"+t}function ro(t,s){if(t.da)t=!0;else{s=new Z(s,this);const a=t.listener,l=t.ha||t.src;t.fa&&_i(t),t=a.call(l,s)}return t}function Ii(t){return t=t[vi],t instanceof Nt?t:null}var Ti="__closure_events_fn_"+(Math.random()*1e9>>>0);function On(t){return typeof t=="function"?t:(t[Ti]||(t[Ti]=function(s){return t.handleEvent(s)}),t[Ti])}function G(){y.call(this),this.i=new Nt(this),this.M=this,this.G=null}S(G,y),G.prototype[De]=!0,G.prototype.removeEventListener=function(t,s,a,l){kn(this,t,s,a,l)};function X(t,s){var a,l=t.G;if(l)for(a=[];l;l=l.G)a.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new p(s,t);else if(s instanceof p)s.target=s.target||t;else{var _=s;s=new p(l,t),bn(s,_)}_=!0;let w,b;if(a)for(b=a.length-1;b>=0;b--)w=s.g=a[b],_=Rt(w,l,!0,s)&&_;if(w=s.g=t,_=Rt(w,l,!0,s)&&_,_=Rt(w,l,!1,s)&&_,a)for(b=0;b<a.length;b++)w=s.g=a[b],_=Rt(w,l,!1,s)&&_}G.prototype.N=function(){if(G.Z.N.call(this),this.i){var t=this.i;for(const s in t.g){const a=t.g[s];for(let l=0;l<a.length;l++)Ct(a[l]);delete t.g[s],t.h--}}this.G=null},G.prototype.J=function(t,s,a,l){return this.i.add(String(t),s,!1,a,l)},G.prototype.K=function(t,s,a,l){return this.i.add(String(t),s,!0,a,l)};function Rt(t,s,a,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();let _=!0;for(let w=0;w<s.length;++w){const b=s[w];if(b&&!b.da&&b.capture==a){const A=b.listener,V=b.ha||b.src;b.fa&&pi(t.i,b),_=A.call(V,l)!==!1&&_}}return _&&!l.defaultPrevented}function so(t,s){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=T(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(s)>2147483647?-1:d.setTimeout(t,s||0)}function Pn(t){t.g=so(()=>{t.g=null,t.i&&(t.i=!1,Pn(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class oo extends y{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Pn(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(t){y.call(this),this.h=t,this.g={}}S(et,y);var Dn=[];function Cn(t){Lt(t.g,function(s,a){this.g.hasOwnProperty(a)&&_i(s)},t),t.g={}}et.prototype.N=function(){et.Z.N.call(this),Cn(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=d.JSON.stringify,ao=d.JSON.parse,co=class{stringify(t){return d.JSON.stringify(t,void 0)}parse(t){return d.JSON.parse(t,void 0)}};function Ln(){}function lo(){}var tt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Si(){p.call(this,"d")}S(Si,p);function bi(){p.call(this,"c")}S(bi,p);var je={},Nn=null;function Ei(){return Nn=Nn||new G}je.Ia="serverreachability";function Rn(t){p.call(this,je.Ia,t)}S(Rn,p);function it(t){const s=Ei();X(s,new Rn(s))}je.STAT_EVENT="statevent";function xn(t,s){p.call(this,je.STAT_EVENT,t),this.stat=s}S(xn,p);function Y(t){const s=Ei();X(s,new xn(s,t))}je.Ja="timingevent";function Mn(t,s){p.call(this,je.Ja,t),this.size=s}S(Mn,p);function nt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){t()},s)}function rt(){this.g=!0}rt.prototype.ua=function(){this.g=!1};function uo(t,s,a,l,_,w){t.info(function(){if(t.g)if(w){var b="",A=w.split("&");for(let U=0;U<A.length;U++){var V=A[U].split("=");if(V.length>1){const z=V[0];V=V[1];const ae=z.split("_");b=ae.length>=2&&ae[1]=="type"?b+(z+"="+V+"&"):b+(z+"=redacted&")}}}else b=null;else b=w;return"XMLHTTP REQ ("+l+") [attempt "+_+"]: "+s+`
`+a+`
`+b})}function ho(t,s,a,l,_,w,b){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+_+"]: "+s+`
`+a+`
`+w+" "+b})}function Ve(t,s,a,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+mo(t,a)+(l?" "+l:"")})}function fo(t,s){t.info(function(){return"TIMEOUT: "+s})}rt.prototype.info=function(){};function mo(t,s){if(!t.g)return s;if(!s)return null;try{const w=JSON.parse(s);if(w){for(t=0;t<w.length;t++)if(Array.isArray(w[t])){var a=w[t];if(!(a.length<2)){var l=a[1];if(Array.isArray(l)&&!(l.length<1)){var _=l[0];if(_!="noop"&&_!="stop"&&_!="close")for(let b=1;b<l.length;b++)l[b]=""}}}}return wi(w)}catch{return s}}var ki={NO_ERROR:0,TIMEOUT:8},po={},$n;function Ai(){}S(Ai,Ln),Ai.prototype.g=function(){return new XMLHttpRequest},$n=new Ai;function st(t){return encodeURIComponent(String(t))}function go(t){var s=1;t=t.split(":");const a=[];for(;s>0&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function ge(t,s,a,l){this.j=t,this.i=s,this.l=a,this.S=l||1,this.V=new et(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Un}function Un(){this.i=null,this.g="",this.h=!1}var Wn={},Oi={};function Pi(t,s,a){t.M=1,t.A=Mt(oe(s)),t.u=a,t.R=!0,Bn(t,null)}function Bn(t,s){t.F=Date.now(),xt(t),t.B=oe(t.A);var a=t.B,l=t.S;Array.isArray(l)||(l=[String(l)]),Zn(a.i,"t",l),t.C=0,a=t.j.L,t.h=new Un,t.g=vr(t.j,a?s:null,!t.u),t.P>0&&(t.O=new oo(T(t.Y,t,t.g),t.P)),s=t.V,a=t.g,l=t.ba;var _="readystatechange";Array.isArray(_)||(_&&(Dn[0]=_.toString()),_=Dn);for(let w=0;w<_.length;w++){const b=En(a,_[w],l||s.handleEvent,!1,s.h||s);if(!b)break;s.g[b.key]=b}s=t.J?wn(t.J):{},t.u?(t.v||(t.v="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,s)):(t.v="GET",t.g.ea(t.B,t.v,null,s)),it(),uo(t.i,t.v,t.B,t.l,t.S,t.u)}ge.prototype.ba=function(t){t=t.target;const s=this.O;s&&_e(t)==3?s.j():this.Y(t)},ge.prototype.Y=function(t){try{if(t==this.g)e:{const A=_e(this.g),V=this.g.ya(),U=this.g.ca();if(!(A<3)&&(A!=3||this.g&&(this.h.h||this.g.la()||or(this.g)))){this.K||A!=4||V==7||(V==8||U<=0?it(3):it(2)),Di(this);var s=this.g.ca();this.X=s;var a=vo(this);if(this.o=s==200,ho(this.i,this.v,this.B,this.l,this.S,A,s),this.o){if(this.U&&!this.L){t:{if(this.g){var l,_=this.g;if((l=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!h(l)){var w=l;break t}}w=null}if(t=w)Ve(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ci(this,t);else{this.o=!1,this.m=3,Y(12),Ce(this),ot(this);break e}}if(this.R){t=!0;let z;for(;!this.K&&this.C<a.length;)if(z=yo(this,a),z==Oi){A==4&&(this.m=4,Y(14),t=!1),Ve(this.i,this.l,null,"[Incomplete Response]");break}else if(z==Wn){this.m=4,Y(15),Ve(this.i,this.l,a,"[Invalid Chunk]"),t=!1;break}else Ve(this.i,this.l,z,null),Ci(this,z);if(Fn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),A!=4||a.length!=0||this.h.h||(this.m=1,Y(16),t=!1),this.o=this.o&&t,!t)Ve(this.i,this.l,a,"[Invalid Chunked Response]"),Ce(this),ot(this);else if(a.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Wi(b),b.P=!0,Y(11))}}else Ve(this.i,this.l,a,null),Ci(this,a);A==4&&Ce(this),this.o&&!this.K&&(A==4?fr(this.j,this):(this.o=!1,xt(this)))}else Lo(this.g),s==400&&a.indexOf("Unknown SID")>0?(this.m=3,Y(12)):(this.m=0,Y(13)),Ce(this),ot(this)}}}catch{}finally{}};function vo(t){if(!Fn(t))return t.g.la();const s=or(t.g);if(s==="")return"";let a="";const l=s.length,_=_e(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return Ce(t),ot(t),"";t.h.i=new d.TextDecoder}for(let w=0;w<l;w++)t.h.h=!0,a+=t.h.i.decode(s[w],{stream:!(_&&w==l-1)});return s.length=0,t.h.g+=a,t.C=0,t.h.g}function Fn(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function yo(t,s){var a=t.C,l=s.indexOf(`
`,a);return l==-1?Oi:(a=Number(s.substring(a,l)),isNaN(a)?Wn:(l+=1,l+a>s.length?Oi:(s=s.slice(l,l+a),t.C=l+a,s)))}ge.prototype.cancel=function(){this.K=!0,Ce(this)};function xt(t){t.T=Date.now()+t.H,qn(t,t.H)}function qn(t,s){if(t.D!=null)throw Error("WatchDog timer not null");t.D=nt(T(t.aa,t),s)}function Di(t){t.D&&(d.clearTimeout(t.D),t.D=null)}ge.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(fo(this.i,this.B),this.M!=2&&(it(),Y(17)),Ce(this),this.m=2,ot(this)):qn(this,this.T-t)};function ot(t){t.j.I==0||t.K||fr(t.j,t)}function Ce(t){Di(t);var s=t.O;s&&typeof s.dispose=="function"&&s.dispose(),t.O=null,Cn(t.V),t.g&&(s=t.g,t.g=null,s.abort(),s.dispose())}function Ci(t,s){try{var a=t.j;if(a.I!=0&&(a.g==t||Li(a.h,t))){if(!t.L&&Li(a.h,t)&&a.I==3){try{var l=a.Ba.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var _=l;if(_[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<t.F)Ft(a),Wt(a);else break e;Ui(a),Y(18)}}else a.xa=_[1],0<a.xa-a.K&&_[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=nt(T(a.Va,a),6e3));Hn(a.h)<=1&&a.ta&&(a.ta=void 0)}else Ne(a,11)}else if((t.L||a.g==t)&&Ft(a),!h(s))for(_=a.Ba.g.parse(s),s=0;s<_.length;s++){let U=_[s];const z=U[0];if(!(z<=a.K))if(a.K=z,U=U[1],a.I==2)if(U[0]=="c"){a.M=U[1],a.ba=U[2];const ae=U[3];ae!=null&&(a.ka=ae,a.j.info("VER="+a.ka));const Re=U[4];Re!=null&&(a.za=Re,a.j.info("SVER="+a.za));const Ie=U[5];Ie!=null&&typeof Ie=="number"&&Ie>0&&(l=1.5*Ie,a.O=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const Te=t.g;if(Te){const qt=Te.g?Te.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qt){var w=l.h;w.g||qt.indexOf("spdy")==-1&&qt.indexOf("quic")==-1&&qt.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Ni(w,w.h),w.h=null))}if(l.G){const Bi=Te.g?Te.g.getResponseHeader("X-HTTP-Session-Id"):null;Bi&&(l.wa=Bi,W(l.J,l.G,Bi))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-t.F,a.j.info("Handshake RTT: "+a.T+"ms")),l=a;var b=t;if(l.na=gr(l,l.L?l.ba:null,l.W),b.L){zn(l.h,b);var A=b,V=l.O;V&&(A.H=V),A.D&&(Di(A),xt(A)),l.g=b}else ur(l);a.i.length>0&&Bt(a)}else U[0]!="stop"&&U[0]!="close"||Ne(a,7);else a.I==3&&(U[0]=="stop"||U[0]=="close"?U[0]=="stop"?Ne(a,7):$i(a):U[0]!="noop"&&a.l&&a.l.qa(U),a.A=0)}}it(4)}catch{}}var _o=class{constructor(t,s){this.g=t,this.map=s}};function jn(t){this.l=t||10,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hn(t){return t.h?1:t.g?t.g.size:0}function Li(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Ni(t,s){t.g?t.g.add(s):t.h=s}function zn(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}jn.prototype.cancel=function(){if(this.i=Gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Gn(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.G);return s}return $(t.i)}var Kn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Io(t,s){if(t){t=t.split("&");for(let a=0;a<t.length;a++){const l=t[a].indexOf("=");let _,w=null;l>=0?(_=t[a].substring(0,l),w=t[a].substring(l+1)):_=t[a],s(_,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ve(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let s;t instanceof ve?(this.l=t.l,at(this,t.j),this.o=t.o,this.g=t.g,ct(this,t.u),this.h=t.h,Ri(this,er(t.i)),this.m=t.m):t&&(s=String(t).match(Kn))?(this.l=!1,at(this,s[1]||"",!0),this.o=lt(s[2]||""),this.g=lt(s[3]||"",!0),ct(this,s[4]),this.h=lt(s[5]||"",!0),Ri(this,s[6]||"",!0),this.m=lt(s[7]||"")):(this.l=!1,this.i=new ut(null,this.l))}ve.prototype.toString=function(){const t=[];var s=this.j;s&&t.push(dt(s,Jn,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(dt(s,Jn,!0),"@"),t.push(st(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&t.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(dt(a,a.charAt(0)=="/"?So:wo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",dt(a,Eo)),t.join("")},ve.prototype.resolve=function(t){const s=oe(this);let a=!!t.j;a?at(s,t.j):a=!!t.o,a?s.o=t.o:a=!!t.g,a?s.g=t.g:a=t.u!=null;var l=t.h;if(a)ct(s,t.u);else if(a=!!t.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var _=s.h.lastIndexOf("/");_!=-1&&(l=s.h.slice(0,_+1)+l)}if(_=l,_==".."||_==".")l="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){l=_.lastIndexOf("/",0)==0,_=_.split("/");const w=[];for(let b=0;b<_.length;){const A=_[b++];A=="."?l&&b==_.length&&w.push(""):A==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),l&&b==_.length&&w.push("")):(w.push(A),l=!0)}l=w.join("/")}else l=_}return a?s.h=l:a=t.i.toString()!=="",a?Ri(s,er(t.i)):a=!!t.m,a&&(s.m=t.m),s};function oe(t){return new ve(t)}function at(t,s,a){t.j=a?lt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function ct(t,s){if(s){if(s=Number(s),isNaN(s)||s<0)throw Error("Bad port number "+s);t.u=s}else t.u=null}function Ri(t,s,a){s instanceof ut?(t.i=s,ko(t.i,t.l)):(a||(s=dt(s,bo)),t.i=new ut(s,t.l))}function W(t,s,a){t.i.set(s,a)}function Mt(t){return W(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function lt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,To),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function To(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jn=/[#\/\?@]/g,wo=/[#\?:]/g,So=/[#\?]/g,bo=/[#\?@]/g,Eo=/#/g;function ut(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Le(t){t.g||(t.g=new Map,t.h=0,t.i&&Io(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=ut.prototype,i.add=function(t,s){Le(this),this.i=null,t=He(this,t);let a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function Xn(t,s){Le(t),s=He(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function Yn(t,s){return Le(t),s=He(t,s),t.g.has(s)}i.forEach=function(t,s){Le(this),this.g.forEach(function(a,l){a.forEach(function(_){t.call(s,_,l,this)},this)},this)};function Qn(t,s){Le(t);let a=[];if(typeof s=="string")Yn(t,s)&&(a=a.concat(t.g.get(He(t,s))));else for(t=Array.from(t.g.values()),s=0;s<t.length;s++)a=a.concat(t[s]);return a}i.set=function(t,s){return Le(this),this.i=null,t=He(this,t),Yn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=Qn(this,t),t.length>0?String(t[0]):s):s};function Zn(t,s,a){Xn(t,s),a.length>0&&(t.i=null,t.g.set(He(t,s),$(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(let l=0;l<s.length;l++){var a=s[l];const _=st(a);a=Qn(this,a);for(let w=0;w<a.length;w++){let b=_;a[w]!==""&&(b+="="+st(a[w])),t.push(b)}}return this.i=t.join("&")};function er(t){const s=new ut;return s.i=t.i,t.g&&(s.g=new Map(t.g),s.h=t.h),s}function He(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function ko(t,s){s&&!t.j&&(Le(t),t.i=null,t.g.forEach(function(a,l){const _=l.toLowerCase();l!=_&&(Xn(this,l),Zn(this,_,a))},t)),t.j=s}function Ao(t,s){const a=new rt;if(d.Image){const l=new Image;l.onload=E(ye,a,"TestLoadImage: loaded",!0,s,l),l.onerror=E(ye,a,"TestLoadImage: error",!1,s,l),l.onabort=E(ye,a,"TestLoadImage: abort",!1,s,l),l.ontimeout=E(ye,a,"TestLoadImage: timeout",!1,s,l),d.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function Oo(t,s){const a=new rt,l=new AbortController,_=setTimeout(()=>{l.abort(),ye(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(w=>{clearTimeout(_),w.ok?ye(a,"TestPingServer: ok",!0,s):ye(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(_),ye(a,"TestPingServer: error",!1,s)})}function ye(t,s,a,l,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),l(a)}catch{}}function Po(){this.g=new co}function xi(t){this.i=t.Sb||null,this.h=t.ab||!1}S(xi,Ln),xi.prototype.g=function(){return new $t(this.i,this.h)};function $t(t,s){G.call(this),this.H=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S($t,G),i=$t.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=s,this.readyState=1,ft(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const s={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(s.body=t),(this.H||d).fetch(new Request(this.D,s)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ht(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ft(this)),this.g&&(this.readyState=3,ft(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;tr(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function tr(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.B.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?ht(this):ft(this),this.readyState==3&&tr(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,ht(this))},i.Na=function(t){this.g&&(this.response=t,ht(this))},i.ga=function(){this.g&&ht(this)};function ht(t){t.readyState=4,t.l=null,t.j=null,t.B=null,ft(t)}i.setRequestHeader=function(t,s){this.A.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function ft(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($t.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ir(t){let s="";return Lt(t,function(a,l){s+=l,s+=":",s+=a,s+=`\r
`}),s}function Mi(t,s,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=ir(a),typeof t=="string"?a!=null&&st(a):W(t,s,a))}function F(t){G.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(F,G);var Do=/^https?$/i,Co=["POST","PUT"];i=F.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,s,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$n.g(),this.g.onreadystatechange=k(T(this.Ca,this));try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(w){nr(this,w);return}if(t=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var _ in l)a.set(_,l[_]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const w of l.keys())a.set(w,l.get(w));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(w=>w.toLowerCase()=="content-type"),_=d.FormData&&t instanceof d.FormData,!(Array.prototype.indexOf.call(Co,s,void 0)>=0)||l||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of a)this.g.setRequestHeader(w,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(w){nr(this,w)}};function nr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.o=5,rr(t),Ut(t)}function rr(t){t.A||(t.A=!0,X(t,"complete"),X(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,X(this,"complete"),X(this,"abort"),Ut(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ut(this,!0)),F.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?sr(this):this.Xa())},i.Xa=function(){sr(this)};function sr(t){if(t.h&&typeof c<"u"){if(t.v&&_e(t)==4)setTimeout(t.Ca.bind(t),0);else if(X(t,"readystatechange"),_e(t)==4){t.h=!1;try{const w=t.ca();e:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var l;if(l=w===0){let b=String(t.D).match(Kn)[1]||null;!b&&d.self&&d.self.location&&(b=d.self.location.protocol.slice(0,-1)),l=!Do.test(b?b.toLowerCase():"")}a=l}if(a)X(t,"complete"),X(t,"success");else{t.o=6;try{var _=_e(t)>2?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.ca()+"]",rr(t)}}finally{Ut(t)}}}}function Ut(t,s){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const a=t.g;t.g=null,s||X(t,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function _e(t){return t.g?t.g.readyState:0}i.ca=function(){try{return _e(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),ao(s)}};function or(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Lo(t){const s={};t=(t.g&&_e(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(h(t[l]))continue;var a=go(t[l]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const w=s[_]||[];s[_]=w,w.push(a)}to(s,function(l){return l.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function ar(t){this.za=0,this.i=[],this.j=new rt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mt("baseRetryDelayMs",5e3,t),this.Za=mt("retryDelaySeedMs",1e4,t),this.Ta=mt("forwardChannelMaxRetries",2,t),this.va=mt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new jn(t&&t.concurrentRequestLimit),this.Ba=new Po,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=ar.prototype,i.ka=8,i.I=1,i.connect=function(t,s,a,l){Y(0),this.W=t,this.H=s||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.J=gr(this,null,this.W),Bt(this)};function $i(t){if(cr(t),t.I==3){var s=t.V++,a=oe(t.J);if(W(a,"SID",t.M),W(a,"RID",s),W(a,"TYPE","terminate"),pt(t,a),s=new ge(t,t.j,s),s.M=2,s.A=Mt(oe(a)),a=!1,d.navigator&&d.navigator.sendBeacon)try{a=d.navigator.sendBeacon(s.A.toString(),"")}catch{}!a&&d.Image&&(new Image().src=s.A,a=!0),a||(s.g=vr(s.j,null),s.g.ea(s.A)),s.F=Date.now(),xt(s)}pr(t)}function Wt(t){t.g&&(Wi(t),t.g.cancel(),t.g=null)}function cr(t){Wt(t),t.v&&(d.clearTimeout(t.v),t.v=null),Ft(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&d.clearTimeout(t.m),t.m=null)}function Bt(t){if(!Vn(t.h)&&!t.m){t.m=!0;var s=t.Ea;J||u(),H||(J(),H=!0),v.add(s,t),t.D=0}}function No(t,s){return Hn(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=s.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=nt(T(t.Ea,t,s),mr(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const _=new ge(this,this.j,t);let w=this.o;if(this.U&&(w?(w=wn(w),bn(w,this.U)):w=this.U),this.u!==null||this.R||(_.J=w,w=null),this.S)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(s+=l,s>4096){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=dr(this,_,s),a=oe(this.J),W(a,"RID",t),W(a,"CVER",22),this.G&&W(a,"X-HTTP-Session-Id",this.G),pt(this,a),w&&(this.R?s="headers="+st(ir(w))+"&"+s:this.u&&Mi(a,this.u,w)),Ni(this.h,_),this.Ra&&W(a,"TYPE","init"),this.S?(W(a,"$req",s),W(a,"SID","null"),_.U=!0,Pi(_,a,null)):Pi(_,a,s),this.I=2}}else this.I==3&&(t?lr(this,t):this.i.length==0||Vn(this.h)||lr(this))};function lr(t,s){var a;s?a=s.l:a=t.V++;const l=oe(t.J);W(l,"SID",t.M),W(l,"RID",a),W(l,"AID",t.K),pt(t,l),t.u&&t.o&&Mi(l,t.u,t.o),a=new ge(t,t.j,a,t.D+1),t.u===null&&(a.J=t.o),s&&(t.i=s.G.concat(t.i)),s=dr(t,a,1e3),a.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Ni(t.h,a),Pi(a,l,s)}function pt(t,s){t.H&&Lt(t.H,function(a,l){W(s,l,a)}),t.l&&Lt({},function(a,l){W(s,l,a)})}function dr(t,s,a){a=Math.min(t.i.length,a);const l=t.l?T(t.l.Ka,t.l,t):null;e:{var _=t.i;let A=-1;for(;;){const V=["count="+a];A==-1?a>0?(A=_[0].g,V.push("ofs="+A)):A=0:V.push("ofs="+A);let U=!0;for(let z=0;z<a;z++){var w=_[z].g;const ae=_[z].map;if(w-=A,w<0)A=Math.max(0,_[z].g-100),U=!1;else try{w="req"+w+"_"||"";try{var b=ae instanceof Map?ae:Object.entries(ae);for(const[Re,Ie]of b){let Te=Ie;m(Ie)&&(Te=wi(Ie)),V.push(w+Re+"="+encodeURIComponent(Te))}}catch(Re){throw V.push(w+"type="+encodeURIComponent("_badmap")),Re}}catch{l&&l(ae)}}if(U){b=V.join("&");break e}}b=void 0}return t=t.i.splice(0,a),s.G=t,b}function ur(t){if(!t.g&&!t.v){t.Y=1;var s=t.Da;J||u(),H||(J(),H=!0),v.add(s,t),t.A=0}}function Ui(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=nt(T(t.Da,t),mr(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,hr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=nt(T(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Y(10),Wt(this),hr(this))};function Wi(t){t.B!=null&&(d.clearTimeout(t.B),t.B=null)}function hr(t){t.g=new ge(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var s=oe(t.na);W(s,"RID","rpc"),W(s,"SID",t.M),W(s,"AID",t.K),W(s,"CI",t.F?"0":"1"),!t.F&&t.ia&&W(s,"TO",t.ia),W(s,"TYPE","xmlhttp"),pt(t,s),t.u&&t.o&&Mi(s,t.u,t.o),t.O&&(t.g.H=t.O);var a=t.g;t=t.ba,a.M=1,a.A=Mt(oe(s)),a.u=null,a.R=!0,Bn(a,t)}i.Va=function(){this.C!=null&&(this.C=null,Wt(this),Ui(this),Y(19))};function Ft(t){t.C!=null&&(d.clearTimeout(t.C),t.C=null)}function fr(t,s){var a=null;if(t.g==s){Ft(t),Wi(t),t.g=null;var l=2}else if(Li(t.h,s))a=s.G,zn(t.h,s),l=1;else return;if(t.I!=0){if(s.o)if(l==1){a=s.u?s.u.length:0,s=Date.now()-s.F;var _=t.D;l=Ei(),X(l,new Mn(l,a)),Bt(t)}else ur(t);else if(_=s.m,_==3||_==0&&s.X>0||!(l==1&&No(t,s)||l==2&&Ui(t)))switch(a&&a.length>0&&(s=t.h,s.i=s.i.concat(a)),_){case 1:Ne(t,5);break;case 4:Ne(t,10);break;case 3:Ne(t,6);break;default:Ne(t,2)}}}function mr(t,s){let a=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(a*=2),a*s}function Ne(t,s){if(t.j.info("Error code "+s),s==2){var a=T(t.bb,t),l=t.Ua;const _=!l;l=new ve(l||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||at(l,"https"),Mt(l),_?Ao(l.toString(),a):Oo(l.toString(),a)}else Y(2);t.I=0,t.l&&t.l.pa(s),pr(t),cr(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function pr(t){if(t.I=0,t.ja=[],t.l){const s=Gn(t.h);(s.length!=0||t.i.length!=0)&&(L(t.ja,s),L(t.ja,t.i),t.h.i.length=0,$(t.i),t.i.length=0),t.l.oa()}}function gr(t,s,a){var l=a instanceof ve?oe(a):new ve(a);if(l.g!="")s&&(l.g=s+"."+l.g),ct(l,l.u);else{var _=d.location;l=_.protocol,s=s?s+"."+_.hostname:_.hostname,_=+_.port;const w=new ve(null);l&&at(w,l),s&&(w.g=s),_&&ct(w,_),a&&(w.h=a),l=w}return a=t.G,s=t.wa,a&&s&&W(l,a,s),W(l,"VER",t.ka),pt(t,l),l}function vr(t,s,a){if(s&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Aa&&!t.ma?new F(new xi({ab:a})):new F(t.ma),s.Fa(t.L),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function yr(){}i=yr.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function te(t,s){G.call(this),this.g=new ar(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.sa&&(t?t["X-WebChannel-Client-Profile"]=s.sa:t={"X-WebChannel-Client-Profile":s.sa}),this.g.U=t,(t=s&&s.Qb)&&!h(t)&&(this.g.u=t),this.A=s&&s.supportsCrossDomainXhr||!1,this.v=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!h(s)&&(this.g.G=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new ze(this)}S(te,G),te.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},te.prototype.close=function(){$i(this.g)},te.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.v&&(a={},a.__data__=wi(t),t=a);s.i.push(new _o(s.Ya++,t)),s.I==3&&Bt(s)},te.prototype.N=function(){this.g.l=null,delete this.j,$i(this.g),delete this.g,te.Z.N.call(this)};function _r(t){Si.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}S(_r,Si);function Ir(){bi.call(this),this.status=1}S(Ir,bi);function ze(t){this.g=t}S(ze,yr),ze.prototype.ra=function(){X(this.g,"a")},ze.prototype.qa=function(t){X(this.g,new _r(t))},ze.prototype.pa=function(t){X(this.g,new Ir)},ze.prototype.oa=function(){X(this.g,"b")},te.prototype.send=te.prototype.o,te.prototype.open=te.prototype.m,te.prototype.close=te.prototype.close,ki.NO_ERROR=0,ki.TIMEOUT=8,ki.HTTP_ERROR=6,po.COMPLETE="complete",lo.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",G.prototype.listen=G.prototype.J,F.prototype.listenOnce=F.prototype.K,F.prototype.getLastError=F.prototype.Ha,F.prototype.getLastErrorCode=F.prototype.ya,F.prototype.getStatus=F.prototype.ca,F.prototype.getResponseJson=F.prototype.La,F.prototype.getResponseText=F.prototype.la,F.prototype.send=F.prototype.ea,F.prototype.setWithCredentials=F.prototype.Fa}).apply(typeof jt<"u"?jt:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let ui="12.12.0";function cc(i){ui=i}/**
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
 */const Yt=new an("@firebase/firestore");function re(i,...e){if(Yt.logLevel<=M.DEBUG){const n=e.map(Ss);Yt.debug(`Firestore (${ui}): ${i}`,...n)}}function ws(i,...e){if(Yt.logLevel<=M.ERROR){const n=e.map(Ss);Yt.error(`Firestore (${ui}): ${i}`,...n)}}function Ss(i){if(typeof i=="string")return i;try{return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Qt(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,bs(i,r,n)}function bs(i,e,n){let r=`FIRESTORE (${ui}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ws(r),new Error(r)}function vt(i,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,i||bs(e,o,r)}/**
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
 */const R={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class x extends Oe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ee.UNAUTHENTICATED))}shutdown(){}}class uc{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){vt(this.o===void 0,42304);let r=this.i;const o=g=>this.i!==r?(r=this.i,n(g)):Promise.resolve();let c=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new yt,e.enqueueRetryable(()=>o(this.currentUser))};const d=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new yt)}},0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(vt(typeof r.accessToken=="string",31837,{l:r}),new lc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return vt(e===null||typeof e=="string",2055,{h:e}),new ee(e)}}class hc{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class fc{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hc(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mc{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){vt(this.o===void 0,3512);const r=c=>{c.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.m;return this.m=c.token,re("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(vt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Lr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pc(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<i;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class gc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=pc(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<n&&(r+=e.charAt(o[c]%62))}return r}}function ke(i,e){return i<e?-1:i>e?1:0}function vc(i,e){const n=Math.min(i.length,e.length);for(let r=0;r<n;r++){const o=i.charAt(r),c=e.charAt(r);if(o!==c)return zi(o)===zi(c)?ke(o,c):zi(o)?1:-1}return ke(i.length,e.length)}const yc=55296,_c=57343;function zi(i){const e=i.charCodeAt(0);return e>=yc&&e<=_c}/**
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
 */const Nr="__name__";class ce{constructor(e,n,r){n===void 0?n=0:n>e.length&&Qt(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Qt(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ce.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ce?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const c=ce.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return ke(e.length,n.length)}static compareSegments(e,n){const r=ce.isNumericId(e),o=ce.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?ce.extractNumericId(e).compare(ce.extractNumericId(n)):vc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dn.fromString(e.substring(4,e.length-2))}}class ne extends ce{construct(e,n,r){return new ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const Ic=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends ce{construct(e,n,r){return new Me(e,n,r)}static isValidIdentifier(e){return Ic.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nr}static keyField(){return new Me([Nr])}static fromServerFormat(e){const n=[];let r="",o=0;const c=()=>{if(r.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let d=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new x(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new x(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=g,o+=2}else m==="`"?(d=!d,o++):m!=="."||d?(r+=m,o++):(c(),o++)}if(c(),d)throw new x(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
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
 */class $e{constructor(e){this.path=e}static fromPath(e){return new $e(ne.fromString(e))}static fromName(e){return new $e(ne.fromString(e).popFirst(5))}static empty(){return new $e(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $e(new ne(e.slice()))}}function Tc(i,e,n,r){if(e===!0&&r===!0)throw new x(R.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function wc(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}/**
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
 */function q(i,e){const n={typeString:i};return e&&(n.value=e),n}function Pt(i,e){if(!wc(i))throw new x(R.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const o=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in i)){n=`JSON missing required field: '${r}'`;break}const d=i[r];if(o&&typeof d!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(c!==void 0&&d!==c.value){n=`Expected '${r}' field to equal '${c.value}'`;break}}if(n)throw new x(R.INVALID_ARGUMENT,n);return!0}/**
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
 */const Rr=-62135596800,xr=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*xr);return new le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rr)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xr}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pt(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:q("string",le._jsonSchemaVersion),seconds:q("number"),nanoseconds:q("number")};function Sc(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class bc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new bc("Invalid base64 string: "+c):c}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(o){let c="";for(let d=0;d<o.length;++d)c+=String.fromCharCode(o[d]);return c}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const Mr="(default)";class Zt{constructor(e,n){this.projectId=e,this.database=n||Mr}static empty(){return new Zt("","")}get isDefaultDatabase(){return this.database===Mr}isEqual(e){return e instanceof Zt&&e.projectId===this.projectId&&e.database===this.database}}function Ec(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new x(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zt(i.options.projectId,e)}/**
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
 */class kc{constructor(e,n=null,r=[],o=[],c=null,d="F",m=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=c,this.limitType=d,this.startAt=m,this.endAt=g,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Ac(i){return new kc(i)}/**
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
 */var $r,D;(D=$r||($r={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new dn([4294967295,4294967295],0);/**
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
 */const Oc=41943040;/**
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
 */const Pc=1048576;function Gi(){return typeof document<"u"?document:null}class Dc{constructor(e,n,r=1e3,o=1.5,c=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=o,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-r);o>0&&re("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class un{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const d=Date.now()+r,m=new un(e,n,d,o,c);return m.start(r),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ur,Wr;(Wr=Ur||(Ur={})).Ma="default",Wr.Cache="cache";/**
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
 */function Cc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Lc="ComponentProvider",Br=new Map;/**
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
 */const Nc="firestore.googleapis.com",Fr=!0;class qr{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new x(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nc,this.ssl=Fr}else this.host=e.host,this.ssl=e.ssl??Fr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Oc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Pc)throw new x(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cc(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dc;switch(r.type){case"firstParty":return new fc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Br.get(n);r&&(re(Lc,"Removing Datastore"),Br.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class hn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hn(this.firestore,e,this._query)}}class de{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Pt(n,de._jsonSchema))return new de(e,r||null,new $e(ne.fromString(n.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:q("string",de._jsonSchemaVersion),referencePath:q("string")};class fn extends hn{constructor(e,n,r){super(e,n,Ac(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new $e(e))}withConverter(e){return new fn(this.firestore,e,this._path)}}/**
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
 */const jr="AsyncQueue";class Vr{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Dc(this,"async_queue_retry"),this._c=()=>{const r=Gi();r&&re(jr,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Gi();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Gi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new yt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Sc(e))throw e;re(jr,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ws("INTERNAL UNHANDLED ERROR: ",Hr(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=un.createAndSchedule(this,e,n,r,c=>this.hc(c));return this.tc.push(o),o}uc(){this.nc&&Qt(47125,{Pc:Hr(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Hr(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class xc extends Rc{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Vr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vr(e),this._firestoreClient=void 0,await e}}}/**
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
 */class me{constructor(e){this._byteString=e}static fromBase64String(e){try{return new me(Fe.fromBase64String(e))}catch(n){throw new x(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new me(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pt(e,me._jsonSchema))return me.fromBase64String(e.bytes)}}me._jsonSchemaVersion="firestore/bytes/1.0",me._jsonSchema={type:q("string",me._jsonSchemaVersion),bytes:q("string")};/**
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
 */class Es{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class We{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:We._jsonSchemaVersion}}static fromJSON(e){if(Pt(e,We._jsonSchema))return new We(e.latitude,e.longitude)}}We._jsonSchemaVersion="firestore/geoPoint/1.0",We._jsonSchema={type:q("string",We._jsonSchemaVersion),latitude:q("number"),longitude:q("number")};/**
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
 */class Be{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==o[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Be._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pt(e,Be._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Be(e.vectorValues);throw new x(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Be._jsonSchemaVersion="firestore/vectorValue/1.0",Be._jsonSchema={type:q("string",Be._jsonSchemaVersion),vectorValues:q("object")};function ks(i,e,n){if((e=Ot(e))instanceof Es)return e._internalPath;if(typeof e=="string")return $c(i,e);throw en("Field path arguments must be of type string or ",i)}const Mc=new RegExp("[~\\*/\\[\\]]");function $c(i,e,n){if(e.search(Mc)>=0)throw en(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Es(...e.split("."))._internalPath}catch{throw en(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function en(i,e,n,r,o){let c=`Function ${e}() called with invalid data`;c+=". ";let d="";return new x(R.INVALID_ARGUMENT,c+i+d)}const zr="@firebase/firestore",Gr="4.14.0";/**
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
 */class As{constructor(e,n,r,o,c){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Uc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ks("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Uc extends As{data(){return super.data()}}class Vt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ge extends As{constructor(e,n,r,o,c,d){super(e,n,r,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Kt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ks("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ge._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ge._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ge._jsonSchema={type:q("string",Ge._jsonSchemaVersion),bundleSource:q("string","DocumentSnapshot"),bundleName:q("string"),bundle:q("string")};class Kt extends Ge{data(e={}){return super.data(e)}}class _t{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Vt(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Kt(this._firestore,this._userDataWriter,r.key,r,new Vt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map(m=>{const g=new Kt(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vt(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:d++}})}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>c||m.type!==3).map(m=>{const g=new Kt(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Vt(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let T=-1,E=-1;return m.type!==0&&(T=d.indexOf(m.doc.key),d=d.delete(m.doc.key)),m.type!==1&&(d=d.add(m.doc),E=d.indexOf(m.doc.key)),{type:Wc(m.type),doc:g,oldIndex:T,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_t._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Wc(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qt(61501,{type:i})}}/**
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
 */_t._jsonSchemaVersion="firestore/querySnapshot/1.0",_t._jsonSchema={type:q("string",_t._jsonSchemaVersion),bundleSource:q("string","QuerySnapshot"),bundleName:q("string"),bundle:q("string")};(function(e,n=!0){cc(di),Qe(new Ye("firestore",(r,{instanceIdentifier:o,options:c})=>{const d=r.getProvider("app").getImmediate(),m=new xc(new uc(r.getProvider("auth-internal")),new mc(d,r.getProvider("app-check-internal")),Ec(d,o),d);return c={useFetchStreams:n,...c},m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),Ee(zr,Gr,e),Ee(zr,Gr,"esm2020")})();function Os(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bc=Os,Ps=new At("auth","Firebase",Os());/**
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
 */const ei=new an("@firebase/auth");function Fc(i,...e){ei.logLevel<=M.WARN&&ei.warn(`Auth (${di}): ${i}`,...e)}function Jt(i,...e){ei.logLevel<=M.ERROR&&ei.error(`Auth (${di}): ${i}`,...e)}/**
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
 */function Kr(i,...e){throw mn(i,...e)}function Ds(i,...e){return mn(i,...e)}function Cs(i,e,n){const r={...Bc(),[e]:n};return new At("auth","Firebase",r).create(e,{appName:i.name})}function Xt(i){return Cs(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mn(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return Ps.create(i,...e)}function N(i,e,...n){if(!i)throw mn(e,...n)}function It(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Jt(e),new Error(e)}function ti(i,e){i||It(e)}function qc(){return Jr()==="http:"||Jr()==="https:"}function Jr(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function jc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qc()||zo()||"connection"in navigator)?navigator.onLine:!0}function Vc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Dt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ti(n>e,"Short delay should be less than long delay!"),this.isMobile=Vo()||Go()}get(){return jc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hc(i,e){ti(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ls{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kc=new Dt(3e4,6e4);function Ns(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function hi(i,e,n,r,o={}){return Rs(i,o,async()=>{let c={},d={};r&&(e==="GET"?d=r:c={body:JSON.stringify(r)});const m=gs({key:i.config.apiKey,...d}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const T={method:e,headers:g,...c};return Ho()||(T.referrerPolicy="no-referrer"),i.emulatorConfig&&vs(i.emulatorConfig.host)&&(T.credentials="include"),Ls.fetch()(await xs(i,i.config.apiHost,n,m),T)})}async function Rs(i,e,n){i._canInitEmulator=!1;const r={...zc,...e};try{const o=new Jc(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Ht(i,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const m=c.ok?d.errorMessage:d.error.message,[g,T]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ht(i,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw Ht(i,"email-already-in-use",d);if(g==="USER_DISABLED")throw Ht(i,"user-disabled",d);const E=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw Cs(i,E,T);Kr(i,E)}}catch(o){if(o instanceof Oe)throw o;Kr(i,"network-request-failed",{message:String(o)})}}async function xs(i,e,n,r){const o=`${e}${n}?${r}`,c=i,d=c.config.emulator?Hc(i.config,o):`${i.config.apiScheme}://${o}`;return Gc.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(d).toString():d}class Jc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ds(this.auth,"network-request-failed")),Kc.get())})}}function Ht(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Ds(i,e,r);return o.customData._tokenResponse=n,o}/**
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
 */async function Xc(i,e){return hi(i,"POST","/v1/accounts:delete",e)}async function ii(i,e){return hi(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Tt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yc(i,e=!1){const n=Ot(i),r=await n.getIdToken(e),o=Ms(r);N(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:Tt(Ki(o.auth_time)),issuedAtTime:Tt(Ki(o.iat)),expirationTime:Tt(Ki(o.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Ki(i){return Number(i)*1e3}function Ms(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return Jt("JWT malformed, contained fewer than 3 sections"),null;try{const o=ps(n);return o?JSON.parse(o):(Jt("Failed to decode base64 JWT payload"),null)}catch(o){return Jt("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Xr(i){const e=Ms(i);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tn(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Oe&&Qc(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Qc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Zc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tt(this.lastLoginAt),this.creationTime=Tt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ni(i){var S;const e=i.auth,n=await i.getIdToken(),r=await tn(i,ii(e,{idToken:n}));N(r==null?void 0:r.users.length,e,"internal-error");const o=r.users[0];i._notifyReloadListener(o);const c=(S=o.providerUserInfo)!=null&&S.length?$s(o.providerUserInfo):[],d=tl(i.providerData,c),m=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(d!=null&&d.length),T=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new nn(o.createdAt,o.lastLoginAt),isAnonymous:T};Object.assign(i,E)}async function el(i){const e=Ot(i);await ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tl(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function $s(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function il(i,e){const n=await Rs(i,{},async()=>{const r=gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,d=await xs(i,o,"/v1/token",`key=${c}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:r};return i.emulatorConfig&&vs(i.emulatorConfig.host)&&(g.credentials="include"),Ls.fetch()(d,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nl(i,e){return hi(i,"POST","/v2/accounts:revokeToken",Ns(i,e))}/**
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
 */class Ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){N(e.length!==0,"internal-error");const n=Xr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await il(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,d=new Ke;return r&&(N(typeof r=="string","internal-error",{appName:e}),d.refreshToken=r),o&&(N(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),c&&(N(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ke,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function we(i,e){N(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ue{constructor({uid:e,auth:n,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new Zc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new nn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await tn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yc(this,e)}reload(){return el(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ni(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await tn(this,Xc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,d=n.photoURL??void 0,m=n.tenantId??void 0,g=n._redirectEventId??void 0,T=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:k,isAnonymous:$,providerData:L,stsTokenManager:O}=n;N(S&&O,e,"internal-error");const P=Ke.fromJSON(this.name,O);N(typeof S=="string",e,"internal-error"),we(r,e.name),we(o,e.name),N(typeof k=="boolean",e,"internal-error"),N(typeof $=="boolean",e,"internal-error"),we(c,e.name),we(d,e.name),we(m,e.name),we(g,e.name),we(T,e.name),we(E,e.name);const B=new ue({uid:S,auth:e,email:o,emailVerified:k,displayName:r,isAnonymous:$,photoURL:d,phoneNumber:c,tenantId:m,stsTokenManager:P,createdAt:T,lastLoginAt:E});return L&&Array.isArray(L)&&(B.providerData=L.map(j=>({...j}))),g&&(B._redirectEventId=g),B}static async _fromIdTokenResponse(e,n,r=!1){const o=new Ke;o.updateFromServerResponse(n);const c=new ue({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ni(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];N(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?$s(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),m=new Ke;m.updateFromIdToken(r);const g=new ue({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:d}),T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new nn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(g,T),g}}/**
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
 */const Yr=new Map;function Ue(i){ti(i instanceof Function,"Expected a class definition");let e=Yr.get(i);return e?(ti(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Yr.set(i,e),e)}/**
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
 */class Us{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Us.type="NONE";const Qr=Us;/**
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
 */function Ji(i,e,n){return`firebase:${i}:${e}:${n}`}class Je{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Ji(this.userKey,o.apiKey,c),this.fullPersistenceKey=Ji("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ii(this.auth,{idToken:e}).catch(()=>{});return n?ue._fromGetAccountInfoResponse(this.auth,n,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Je(Ue(Qr),e,r);const o=(await Promise.all(n.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let c=o[0]||Ue(Qr);const d=Ji(r,e.config.apiKey,e.name);let m=null;for(const T of n)try{const E=await T._get(d);if(E){let S;if(typeof E=="string"){const k=await ii(e,{idToken:E}).catch(()=>{});if(!k)break;S=await ue._fromGetAccountInfoResponse(e,k,E)}else S=ue._fromJSON(e,E);T!==c&&(m=S),c=T;break}}catch{}const g=o.filter(T=>T._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new Je(c,e,r):(c=g[0],m&&await c._set(d,m.toJSON()),await Promise.all(n.map(async T=>{if(T!==c)try{await T._remove(d)}catch{}})),new Je(c,e,r))}}/**
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
 */function Zr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(al(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ll(e))return"Blackberry";if(dl(e))return"Webos";if(sl(e))return"Safari";if((e.includes("chrome/")||ol(e))&&!e.includes("edge/"))return"Chrome";if(cl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rl(i=fe()){return/firefox\//i.test(i)}function sl(i=fe()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ol(i=fe()){return/crios\//i.test(i)}function al(i=fe()){return/iemobile/i.test(i)}function cl(i=fe()){return/android/i.test(i)}function ll(i=fe()){return/blackberry/i.test(i)}function dl(i=fe()){return/webos/i.test(i)}/**
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
 */function Ws(i,e=[]){let n;switch(i){case"Browser":n=Zr(fe());break;case"Worker":n=`${Zr(fe())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${r}`}/**
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
 */class ul{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((d,m)=>{try{const g=e(c);d(g)}catch(g){m(g)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hl(i,e={}){return hi(i,"GET","/v2/passwordPolicy",Ns(i,e))}/**
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
 */const fl=6;class ml{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??fl,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class pl{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new es(this),this.idTokenSubscription=new es(this),this.beforeStateQueue=new ul(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ps,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ue(n)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Je.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ii(this,{idToken:e}),r=await ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(xe(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(m,m))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(c=this.redirectUser)==null?void 0:c._redirectEventId,m=r==null?void 0:r._redirectEventId,g=await this.tryRedirectSignIn(e);(!d||d===m)&&(g!=null&&g.user)&&(r=g.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(d){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ni(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(Xt(this));const n=e?Ot(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hl(this),n=new ml(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new At("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ue(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[Ue(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(m,this,"internal-error"),m.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,r,o);return()=>{d=!0,g()}}else{const g=e.addObserver(n);return()=>{d=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ws(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Fc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gl(i){return Ot(i)}class es{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zo(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vl(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ue);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new Dt(3e4,6e4);/**
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
 */new Dt(5e3,15e3);var ts="@firebase/auth",is="1.13.0";/**
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
 */class yl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _l(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Il(i){Qe(new Ye("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=r.options;N(d&&!d.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:d,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ws(i)},T=new pl(r,o,c,g);return vl(T,n),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qe(new Ye("auth-internal",e=>{const n=gl(e.getProvider("auth").getImmediate());return(r=>new yl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ee(ts,is,_l(i)),Ee(ts,is,"esm2020")}/**
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
 */const Tl=5*60;jo("authIdTokenMaxAge");Il("Browser");console.warn("⚠️ Firebase未設定。.envファイルにAPIキーを設定してください。");function wl(i){return new Date(i).toISOString().split("T")[0]}function ri(i){const e=new Date(i),n=["日","月","火","水","木","金","土"];return`${e.getMonth()+1}月${e.getDate()}日（${n[e.getDay()]}）`}function St(){return wl(new Date)}function Bs(){return Date.now().toString(36)+Math.random().toString(36).slice(2,9)}function Fs(i,e,n,r){const c=zt(n-i),d=zt(r-e),m=Math.sin(c/2)**2+Math.cos(zt(i))*Math.cos(zt(n))*Math.sin(d/2)**2;return 6371*2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m))}function zt(i){return i*(Math.PI/180)}function he(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}function C(i,e="info",n=3e3){const r=document.getElementById("toast-container"),o={success:"check_circle",error:"error",warning:"warning",info:"info"},c=document.createElement("div");c.className=`toast ${e}`,c.innerHTML=`
    <span class="material-icons-round toast-icon">${o[e]||"info"}</span>
    <span>${he(i)}</span>
  `,r.appendChild(c),setTimeout(()=>{c.style.opacity="0",c.style.transform="translateX(40px)",c.style.transition="all .3s ease",setTimeout(()=>c.remove(),300)},n)}function fi(i,e,n=""){const r=document.getElementById("modal-overlay");document.getElementById("modal-title").textContent=i,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=n,r.style.display="flex"}function Ae(){document.getElementById("modal-overlay").style.display="none"}function pn(i,e){return new Promise(n=>{const r=`<p>${he(e)}</p>`;fi(i,r,`
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `),document.getElementById("confirm-ok").onclick=()=>{Ae(),n(!0)},document.getElementById("confirm-cancel").onclick=()=>{Ae(),n(!1)}})}function Sl(i){{console.warn("Firebase未設定のためログイン画面を表示します"),setTimeout(()=>i(null,null),100);return}}async function bl(){throw new Error("Firebase未設定です。.envにAPIキーを設定してください。")}async function El(){}function kl(){const i=document.getElementById("btn-google-login");i&&i.addEventListener("click",async()=>{i.disabled=!0,i.textContent="ログイン中...";try{await bl()}catch(e){console.error("ログインエラー:",e),e.code==="auth/popup-closed-by-user"?C("ログインがキャンセルされました","warning"):C("ログインに失敗しました","error"),i.disabled=!1,i.innerHTML=`
        <svg viewBox="0 0 24 24" width="20" height="20" class="google-icon">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleアカウントでログイン
      `}})}const Se={};function Ze(i){if(!Se[i]){const e=localStorage.getItem(`careroute_${i}`);Se[i]=e?JSON.parse(e):[]}return Se[i]}function mi(i){localStorage.setItem(`careroute_${i}`,JSON.stringify(Se[i]||[]))}async function ns(){localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"),localStorage.removeItem("careroute_routes"),Se.staff=[],Se.clients=[],Se.visits=[],Se.routes=[]}async function gn(i,e){{const n=Bs();return Ze(i).push({id:n,...e,createdAt:new Date().toISOString()}),mi(i),n}}async function vn(i){return Ze(i)}async function qs(i,e,n){{const r=Ze(i),o=r.findIndex(c=>c.id===e);o!==-1&&(r[o]={...r[o],...n,updatedAt:new Date().toISOString()},mi(i));return}}async function yn(i,e){{const n=Ze(i),r=n.findIndex(o=>o.id===e);r!==-1&&(n.splice(r,1),mi(i));return}}async function js(i,e,n,r){return Ze(i).filter(c=>c[e]===r)}async function Pe(){return vn("staff")}async function Vs(i){return gn("staff",i)}async function Al(i,e){return qs("staff",i,e)}async function Ol(i){return yn("staff",i)}async function qe(){return vn("clients")}async function Hs(i){return gn("clients",i)}async function Pl(i,e){return qs("clients",i,e)}async function Dl(i){return yn("clients",i)}async function Cl(){return vn("visits")}async function _n(i){return js("visits","date","==",i)}async function zs(i){return gn("visits",i)}async function Ll(i){return yn("visits",i)}async function Nl(i){return js("routes","date","==",i)}async function Rl(i){{const e=Ze("routes");for(const n of i)e.push({id:Bs(),...n,createdAt:new Date().toISOString()});mi("routes");return}}async function xl(){const i=document.getElementById("page-container"),[e,n]=await Promise.all([Pe().catch(()=>[]),qe().catch(()=>[])]),r=St(),o=await _n(r).catch(()=>[]),c=e.filter(g=>g.isActive),d=n.filter(g=>g.isActive),m=o.filter(g=>g.status!=="cancelled");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${ri(new Date)}</span>
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
        <div class="stat-value">${d.length}<span style="font-size:.9rem;color:var(--text-muted)">名</span></div>
      </div>
      <div class="card stat-card">
        <span class="material-icons-round stat-icon">event</span>
        <div class="stat-label">本日の訪問</div>
        <div class="stat-value">${m.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <span class="material-icons-round stat-icon">warning</span>
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${Math.max(0,d.length-m.length)}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
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
          ${c.length===0?'<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>':c.map(g=>{var T,E;return`
              <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
                <div style="width:12px;height:12px;border-radius:50%;background:${g.color||"#999"};flex-shrink:0"></div>
                <div style="flex:1">
                  <div style="font-weight:500">${g.name}</div>
                  <div style="font-size:.8rem;color:var(--text-muted)">${(((T=g.skills)==null?void 0:T.qualifications)||[]).join(", ")||"資格なし"}</div>
                </div>
                <div class="tags-container">
                  ${(((E=g.skills)==null?void 0:E.services)||[]).slice(0,2).map(S=>`<span class="tag">${S}</span>`).join("")}
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
  `}let se=null,bt=[],rn=[],Et=null,rs=[];function Ml(){return new Promise((i,e)=>{if(window.google&&window.google.maps){i();return}const n="AIzaSyCXFNBQjeiYpRYFdbs6VhISqlFZhrybM74",r=document.createElement("script");r.src=`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=geometry,places&language=ja`,r.async=!0,r.defer=!0,r.onload=i,r.onerror=()=>e(new Error("Google Maps APIの読み込みに失敗しました")),document.head.appendChild(r)})}function $l(i,e={lat:35.6938,lng:139.7034},n=14){const r=document.getElementById(i);return r?!window.google||!window.google.maps?(r.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `,null):(se=new google.maps.Map(r,{center:e,zoom:n,mapTypeControl:!0,streetViewControl:!1,fullscreenControl:!0,styles:ql()}),Et=new google.maps.InfoWindow,new google.maps.DirectionsService,se):null}function Gs(i,e={}){if(!se)return null;const n=new google.maps.Marker({map:se,position:i,title:e.title||"",icon:e.icon||void 0,label:e.label||void 0});return e.infoContent&&n.addListener("click",()=>{Et.setContent(e.infoContent),Et.open(se,n)}),bt.push(n),n}function ss(i,e,n,r){if(!se)return null;const o={path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",fillColor:e,fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1.8,anchor:new google.maps.Point(12,22),labelOrigin:new google.maps.Point(12,9)};return Gs(i,{icon:o,label:void 0,infoContent:r})}function Ul(i,e){return se?Gs(i,{title:e,icon:{path:"M12 2L2 7v10l10 5 10-5V7L12 2z",fillColor:"#F59E0B",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:2,anchor:new google.maps.Point(12,12)},infoContent:`<div style="color:#333;padding:4px"><strong>🏢 ${e}</strong><br>（出発地点）</div>`}):null}function Wl(i,e,n){if(!se)return null;const r=i.map(c=>({lat:c.lat,lng:c.lng})),o=new google.maps.Polyline({path:r,geodesic:!0,strokeColor:e,strokeOpacity:.8,strokeWeight:4,map:se});return rn.push(o),o}function Bl(){bt.forEach(i=>i.setMap(null)),bt=[],rn.forEach(i=>i.setMap(null)),rn=[],rs.forEach(i=>i.setMap(null)),rs=[],Et&&Et.close()}function Fl(){if(!se||bt.length===0)return;const i=new google.maps.LatLngBounds;bt.forEach(e=>i.extend(e.getPosition())),se.fitBounds(i,50)}function ql(){return[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}const si={qualifications:{label:"資格",options:["介護福祉士","実務者研修修了","初任者研修修了","看護師","ヘルパー2級"]},services:{label:"対応可能サービス",options:["身体介護","生活援助","通院等乗降介助","医療的ケア"]},physical:{label:"身体的対応力",options:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"]},special:{label:"特別スキル",options:["認知症ケア","ターミナルケア","精神障害対応","障害児支援"]}},jl=["要支援1","要支援2","要介護1","要介護2","要介護3","要介護4","要介護5"],Ks=["身体介護","生活援助","通院等乗降介助","医療的ケア"],Vl=["男性","女性"],Hl=["指定なし","男性希望","女性希望"],os=["#4A90D9","#E74C3C","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#3498DB","#E91E63","#00BCD4","#8BC34A","#FF5722"],gt={requiredSkill:1e3,genderMatch:2e3,staffType:500,proximity:30},ie={name:"事業所（拠点）",address:"〒501-3304 岐阜県加茂郡富加町高畑２９１",lat:35.497,lng:136.993};let sn="all",oi=St();async function zl(){var n,r,o;const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <input type="date" id="map-date-picker" class="form-input" value="${oi}" style="width:160px">
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
  `;try{await Ml()}catch(c){console.warn("Maps APIの読み込みスキップ:",c)}const e=$l("map-canvas",{lat:ie.lat,lng:ie.lng});await Gt(e),(n=document.getElementById("map-date-picker"))==null||n.addEventListener("change",c=>{oi=c.target.value,Gt(e)}),(r=document.getElementById("staff-filter"))==null||r.addEventListener("change",c=>{sn=c.target.value,Gt(e)}),(o=document.getElementById("btn-refresh-map"))==null||o.addEventListener("click",()=>{Gt(e)})}async function Gt(i){const[e,n,r]=await Promise.all([Pe().catch(()=>[]),qe().catch(()=>[]),_n(oi).catch(()=>[])]),o=document.getElementById("staff-filter");if(o&&o.options.length<=1&&e.forEach(d=>{const m=document.createElement("option");m.value=d.id,m.textContent=d.name,o.appendChild(m)}),!i){Kl(e,n);return}Bl(),Ul({lat:ie.lat,lng:ie.lng},ie.name);const c=await Nl(oi).catch(()=>[]);if(c.length>0)for(const d of c){if(sn!=="all"&&d.staffId!==sn)continue;const m=e.find(E=>E.id===d.staffId),g=(m==null?void 0:m.color)||"#999",T=[{lat:ie.lat,lng:ie.lng}];for(const E of d.clientIds||[]){const S=n.find(k=>k.id===E);S&&(T.push({lat:S.lat,lng:S.lng}),ss({lat:S.lat,lng:S.lng},g,"",`<div style="color:#333;padding:4px">
              <strong>${S.name}</strong><br>
              ${S.careLevel} | ${(S.requiredServices||[]).join(", ")}<br>
              <small>担当: ${(m==null?void 0:m.name)||"未定"}</small>
            </div>`))}T.push({lat:ie.lat,lng:ie.lng}),Wl(T,g,m==null?void 0:m.name)}else{const d=n.filter(m=>m.isActive&&r.some(g=>g.clientId===m.id));for(const m of d){const g=r.filter(T=>T.clientId===m.id).map(T=>`${T.startTime}〜${T.endTime}`).join(", ");ss({lat:m.lat,lng:m.lng},"#94A3B8","",`<div style="color:#333;padding:4px">
          <strong>${m.name}</strong><br>
          予定: ${g}<br>
          ${m.careLevel} | ${(m.requiredServices||[]).join(", ")}
        </div>`)}}Fl(),Gl(e,c,r)}function Gl(i,e,n=[]){const r=document.getElementById("route-legend");if(r){if(e.length===0){r.innerHTML=`
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
    ${e.map(o=>{const c=i.find(d=>d.id===o.staffId);return`<div class="legend-item">
        <div class="legend-color" style="background:${(c==null?void 0:c.color)||"#999"}"></div>
        <span>${(c==null?void 0:c.name)||"不明"} (${(o.clientIds||[]).length}件, ${o.totalDistance||"?"}km)</span>
      </div>`}).join("")}
  `}}function Kl(i,e){const n=document.getElementById("route-legend");n&&(n.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${i.length}名<br>
        利用者: ${e.length}名
      </div>
    `)}let kt=[];async function In(){const i=document.getElementById("page-container");kt=await Pe().catch(()=>[]),i.innerHTML=`
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
      ${Jl(kt)}
    </div>
  `,document.getElementById("btn-add-staff").addEventListener("click",()=>Js())}function Jl(i){return i.length===0?`
      <div class="empty-state">
        <span class="material-icons-round">person_off</span>
        <h3>職員が登録されていません</h3>
        <p>「新規登録」ボタンから職員を追加してください</p>
      </div>
    `:`
    <div class="grid grid-2">
      ${i.map(e=>{var n,r,o,c,d;return`
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
              ${(((r=e.skills)==null?void 0:r.qualifications)||[]).map(m=>`<span class="tag">${m}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div style="margin-bottom:8px">
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">対応サービス</div>
            <div class="tags-container">
              ${(((o=e.skills)==null?void 0:o.services)||[]).map(m=>`<span class="tag tag-secondary">${m}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div>
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">特別スキル</div>
            <div class="tags-container">
              ${[...((c=e.skills)==null?void 0:c.physical)||[],...((d=e.skills)==null?void 0:d.special)||[]].map(m=>`<span class="tag tag-accent">${m}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
        </div>
      `}).join("")}
    </div>
  `}function Js(i=null){const e=!!i,n=e?"職員情報の編集":"新規職員登録",r=`
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${Vl.map(c=>`<option value="${c}" ${(i==null?void 0:i.gender)===c?"selected":""}>${c}</option>`).join("")}
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
      ${Object.entries(si).map(([c,d])=>`
        <div class="form-group">
          <label class="form-label">${d.label}</label>
          <div class="tags-container" style="gap:8px">
            ${d.options.map(m=>{var T,E;const g=(E=(T=i==null?void 0:i.skills)==null?void 0:T[c])!=null&&E.includes(m)?"checked":"";return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${c}" value="${m}" ${g} /> ${m}
              </label>`}).join("")}
          </div>
        </div>
      `).join("")}
    </form>
  `;fi(n,r,`
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("sf-cancel").onclick=Ae,document.getElementById("sf-save").onclick=async()=>{const c=document.getElementById("sf-name").value.trim();if(!c){C("氏名を入力してください","warning");return}const d={name:c,gender:document.getElementById("sf-gender").value,address:document.getElementById("sf-address").value.trim(),workStart:document.getElementById("sf-work-start").value,workEnd:document.getElementById("sf-work-end").value,lat:(i==null?void 0:i.lat)||35.69+Math.random()*.03,lng:(i==null?void 0:i.lng)||139.69+Math.random()*.05,skills:{},color:(i==null?void 0:i.color)||os[kt.length%os.length],isActive:!0};for(const[m]of Object.entries(si)){const g=document.querySelectorAll(`input[name="skill-${m}"]:checked`);d.skills[m]=Array.from(g).map(T=>T.value)}try{e?(await Al(i.id,d),C("職員情報を更新しました","success")):(await Vs(d),C("職員を登録しました","success")),Ae(),await In()}catch(m){C("保存に失敗しました: "+m.message,"error")}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-staff]");if(e){const r=kt.find(o=>o.id===e.dataset.editStaff);r&&Js(r)}const n=i.target.closest("[data-delete-staff]");if(n){const r=kt.find(o=>o.id===n.dataset.deleteStaff);if(r&&await pn("削除確認",`${r.name} を削除しますか？`))try{await Ol(r.id),C(`${r.name} を削除しました`,"success"),await In()}catch{C("削除に失敗しました","error")}}});let ai=[],as=[];async function Tn(){const i=document.getElementById("page-container");try{const[e,n]=await Promise.all([qe().catch(()=>[]),Cl().catch(()=>[])]);ai=e,as=n}catch(e){console.error("データの取得に失敗",e)}i.innerHTML=`
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
      ${Xl(ai,as)}
    </div>
  `,document.getElementById("btn-add-client").addEventListener("click",()=>Xs())}function Xl(i,e){return i.length===0?`<div class="empty-state">
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
          ${i.map(n=>{var d,m;const r={月:1,火:2,水:3,木:4,金:5,土:6,日:7},o=e.filter(g=>g.clientId===n.id).sort((g,T)=>{const E=r[g.dayOfWeek]||99,S=r[T.dayOfWeek]||99;return E-S}),c=o.length>0?o.map(g=>`<div style="font-size:0.85rem;margin-bottom:2px;">
                  <span class="tag" style="background:#E2E8F0;color:#333">${g.dayOfWeek||"不明"}</span>
                  ${g.startTime}〜${g.endTime} (${g.duration}分)
                </div>`).join(""):'<span style="color:var(--text-muted)">設定なし</span>';return`<tr>
              <td><strong>${he(n.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${n.genderPreference!=="指定なし"?n.genderPreference:""}</span></td>
              <td><span class="tag ${(d=n.careLevel)!=null&&d.includes("4")||(m=n.careLevel)!=null&&m.includes("5")?"tag-danger":""}">${n.careLevel||"-"}</span></td>
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
  `}function Xs(i=null){var c,d;const e=!!i,n=[...si.physical.options,...si.special.options],r=`
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${jl.map(m=>`<option ${(i==null?void 0:i.careLevel)===m?"selected":""}>${m}</option>`).join("")}
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
          ${Ks.map(m=>{var g;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-service" value="${m}" ${(g=i==null?void 0:i.requiredServices)!=null&&g.includes(m)?"checked":""} /> ${m}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">必要スキル</label>
        <div class="tags-container" style="gap:8px">
          ${n.map(m=>{var g;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-skill" value="${m}" ${(g=i==null?void 0:i.requiredSkills)!=null&&g.includes(m)?"checked":""} /> ${m}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">性別希望</label>
          <select class="form-select" id="cf-gender-pref">
            ${Hl.map(m=>`<option ${(i==null?void 0:i.genderPreference)===m?"selected":""}>${m}</option>`).join("")}
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
          <input class="form-input" type="time" id="cf-time-end" value="${((d=i==null?void 0:i.timeWindow)==null?void 0:d.end)||"12:00"}" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">備考</label>
        <textarea class="form-input" id="cf-notes" rows="2" placeholder="特記事項があれば...">${(i==null?void 0:i.notes)||""}</textarea>
      </div>
    </form>
  `;fi(e?"利用者情報の編集":"新規利用者登録",r,`
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("cf-cancel").onclick=Ae,document.getElementById("cf-save").onclick=async()=>{const m=document.getElementById("cf-name").value.trim();if(!m){C("氏名を入力してください","warning");return}const g={name:m,careLevel:document.getElementById("cf-care-level").value,address:document.getElementById("cf-address").value.trim(),requiredServices:Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(T=>T.value),requiredSkills:Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(T=>T.value),genderPreference:document.getElementById("cf-gender-pref").value,visitDuration:parseInt(document.getElementById("cf-duration").value)||60,timeWindow:{start:document.getElementById("cf-time-start").value,end:document.getElementById("cf-time-end").value},notes:document.getElementById("cf-notes").value.trim(),lat:(i==null?void 0:i.lat)||35.69+Math.random()*.03,lng:(i==null?void 0:i.lng)||139.69+Math.random()*.05,isActive:!0};try{e?(await Pl(i.id,g),C("利用者情報を更新しました","success")):(await Hs(g),C("利用者を登録しました","success")),Ae(),await Tn()}catch(T){C("保存に失敗しました: "+T.message,"error")}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-client]");if(e){const r=ai.find(o=>o.id===e.dataset.editClient);r&&Xs(r)}const n=i.target.closest("[data-delete-client]");if(n){const r=ai.find(o=>o.id===n.dataset.deleteClient);if(r&&await pn("削除確認",`${r.name} を削除しますか？`))try{await Dl(r.id),C(`${r.name} を削除しました`,"success"),await Tn()}catch{C("削除に失敗しました","error")}}});let Xe=St();async function Yl(){const i=document.getElementById("page-container");i.innerHTML=`
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
  `,document.getElementById("schedule-date").addEventListener("change",e=>{Xe=e.target.value,ci()}),document.getElementById("btn-add-visit").addEventListener("click",Ql),await ci()}async function ci(){const i=document.getElementById("schedule-content"),[e,n,r]=await Promise.all([Pe().catch(()=>[]),qe().catch(()=>[]),_n(Xe).catch(()=>[])]);if(r.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round">event_busy</span>
        <h3>${ri(Xe)} の訪問予定はありません</h3>
        <p>「訪問追加」ボタンから予定を登録するか、マッチング＆最適化を実行してください</p>
      </div>
    `;return}const o={};let c=0,d=0,m=0;for(const T of r)o[T.staffId]||(o[T.staffId]=[]),o[T.staffId].push(T);let g="";if(window.isAdmin){for(const[S,k]of Object.entries(o)){const $=e.find(P=>P.id===S);if(!$)continue;const L=parseInt($.wage)||1500;k.sort((P,B)=>(P.startTime||P.scheduledTime||"").localeCompare(B.startTime||B.scheduledTime||""));let O=null;k.forEach((P,B)=>{c+=parseInt(P.income)||3e3;const j=(P.duration||60)/60;d+=L*j;const K=n.find(v=>v.id===P.clientId),Q=K?K.area:null;let J=0,H=0;B===0?J=4:O&&Q&&O!==Q?(J=8,H=20):(J=4,H=10),P.calculatedTravelTime=H,m+=J*25,O=Q}),m+=4*25}const T=c-d-m,E=c>0?Math.round(T/c*100):0;g=`
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
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${d.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">車両・移動費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${m.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定利益 (利益率)</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: ${T>=0?"var(--success)":"var(--danger)"};">
              ¥${T.toLocaleString()} <span style="font-size: 1rem;">(${E}%)</span>
            </div>
          </div>
        </div>
      </div>
    `}i.innerHTML=`
    ${g}
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${ri(Xe)} — ${r.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(o).map(([T,E])=>{const S=e.find(k=>k.id===T);return`
          <div class="card" style="border-left:4px solid ${(S==null?void 0:S.color)||"#999"}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${(S==null?void 0:S.color)||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${E.length}
              </div>
              ${he((S==null?void 0:S.name)||"未割当")}
            </h3>
            <div class="schedule-timeline">
              ${E.map((k,$)=>{const L=n.find(j=>j.id===k.clientId),O=k.startTime||k.scheduledTime||"--:--";let P="",B="";if($>0){const j=E[$-1],K=j.startTime||j.scheduledTime,Q=k.calculatedTravelTime||10;if(K&&O!=="--:--"){const[J,H]=K.split(":").map(Number),[v,u]=O.split(":").map(Number),f=J*60+H+(j.duration||60),p=v*60+u-f;p<Q&&(B=`
                          <div style="color:var(--danger); font-size: 0.8rem; padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border-radius: 4px; margin-bottom: 8px;">
                            <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">warning</span>
                            移動時間が不足しています（必要: ${Q}分, 実際: ${p}分）
                          </div>
                        `),P=`
                        <div style="margin-left: 60px; padding: 4px 0; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; border-left: 2px dashed var(--border); padding-left: 14px;">
                          <span class="material-icons-round" style="font-size: 14px; margin-right: 4px;">directions_car</span>
                          移動時間: 約${Q}分
                        </div>
                      `}}return`
                  ${P}
                  ${B}
                  <div class="time-slot">
                    <div class="time-label">${O}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${he((L==null?void 0:L.name)||"不明")}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">
                              ${k.serviceInfo||k.service||"訪問"} | ${k.duration||60}分
                            </div>
                            <div style="font-size:.75rem;color:var(--text-muted); margin-top:2px;">
                              <span class="material-icons-round" style="font-size:12px;vertical-align:middle">place</span>
                              ${he((L==null?void 0:L.area)||"未設定")}
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
  `}async function Ql(){const[i,e]=await Promise.all([Pe().catch(()=>[]),qe().catch(()=>[])]),n=`
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
          ${Ks.map(r=>`<option>${r}</option>`).join("")}
        </select>
      </div>
    </form>
  `;fi("訪問予定の追加",n,`
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `),document.getElementById("vf-cancel").onclick=Ae,document.getElementById("vf-save").onclick=async()=>{const r=document.getElementById("vf-client").value,o=document.getElementById("vf-staff").value;if(!r||!o){C("利用者と職員を選択してください","warning");return}try{await zs({date:Xe,clientId:r,staffId:o,scheduledTime:document.getElementById("vf-time").value,duration:parseInt(document.getElementById("vf-duration").value)||60,service:document.getElementById("vf-service").value,status:"scheduled"}),C("訪問予定を追加しました","success"),Ae(),await ci()}catch{C("追加に失敗しました","error")}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-delete-visit]");if(e&&await pn("削除確認","この訪問予定を削除しますか？"))try{await Ll(e.dataset.deleteVisit),C("訪問予定を削除しました","success"),await ci()}catch{C("削除に失敗しました","error")}});function Zl(i,e){const n=[];for(const r of i)if(r.isActive)for(const o of e){if(!o.isActive)continue;const{score:c,reasons:d,eligible:m}=ed(r,o);n.push({staffId:r.id,staffName:r.name,clientId:o.id,clientName:o.name,score:c,reasons:d,eligible:m})}return n.sort((r,o)=>o.score-r.score)}function ed(i,e){var d,m,g,T,E;let n=0;const r=[];let o=!0;for(const S of e.requiredServices||[])(m=(d=i.skills)==null?void 0:d.services)!=null&&m.includes(S)?(n+=gt.requiredSkill,r.push(`✅ ${S}対応可`)):(o=!1,r.push(`❌ ${S}に対応不可`));const c=[...((g=i.skills)==null?void 0:g.qualifications)||[],...((T=i.skills)==null?void 0:T.physical)||[],...((E=i.skills)==null?void 0:E.special)||[]];for(const S of e.requiredSkills||[])c.includes(S)?(n+=gt.requiredSkill,r.push(`✅ ${S}あり`)):(o=!1,r.push(`❌ ${S}なし`));if(e.genderPreference&&e.genderPreference!=="指定なし"){const S=e.genderPreference.replace("希望","");i.gender===S?(n+=gt.genderMatch,r.push(`✅ 性別希望合致（${S}）`)):(o=!1,r.push(`❌ 性別希望不一致（希望: ${S}）`))}if(i.type==="正社員"&&(n+=gt.staffType,r.push("✅ 正社員")),i.lat&&e.lat){const S=Fs(i.lat,i.lng,e.lat,e.lng),k=Math.max(0,gt.proximity*(1-S/10));n+=k}return{score:Math.round(n),reasons:r,eligible:o}}function td(i,e,n=10){const r=Zl(i,e),o=[],c=new Set,d={};for(const g of r){if(c.has(g.clientId)||!g.eligible)continue;const T=d[g.staffId]||0;T>=n||(o.push({staffId:g.staffId,staffName:g.staffName,clientId:g.clientId,clientName:g.clientName,score:g.score}),c.add(g.clientId),d[g.staffId]=T+1)}const m=e.filter(g=>g.isActive&&!c.has(g.id)).map(g=>({clientId:g.id,clientName:g.name,reason:"適格な職員なし"}));return{assignments:o,unassigned:m}}function id(i,e,n,r=ie){const o={};for(const d of i)o[d.staffId]||(o[d.staffId]=[]),o[d.staffId].push(d.clientId);const c={};for(const[d,m]of Object.entries(o)){const g=e.find(O=>O.id===d),T=m.map(O=>n.find(P=>P.id===O)).filter(Boolean);if(T.length===0)continue;const E=[{id:"office",name:"事業所",lat:r.lat,lng:r.lng,isOffice:!0},...T.map(O=>({id:O.id,name:O.name,lat:O.lat,lng:O.lng,duration:O.visitDuration,timeWindow:O.timeWindow}))],S=nd(E);let k=rd(E,S);k=sd(k,S);const $=od(k,S),L=ad(k,S,g);c[d]={staffId:d,staffName:(g==null?void 0:g.name)||"不明",staffColor:(g==null?void 0:g.color)||"#999",route:k,totalDistance:Math.round($*10)/10,totalDuration:cd(L),schedule:L}}return c}function nd(i){const e=i.length,n=Array.from({length:e},()=>Array(e).fill(0));for(let r=0;r<e;r++)for(let o=r+1;o<e;o++){const c=Fs(i[r].lat,i[r].lng,i[o].lat,i[o].lng);n[r][o]=c,n[o][r]=c}return n}function rd(i,e){const n=i.length,r=new Set([0]),o=[0],c=[],d=[];for(let T=1;T<n;T++){const E=i[T];E.timeWindow&&E.timeWindow.start?c.push({index:T,start:on(E.timeWindow.start),end:on(E.timeWindow.end)}):d.push(T)}c.sort((T,E)=>T.start-E.start);const m=[...c.map(T=>T.index),...d];let g=0;for(;r.size<n;){let T=-1,E=1/0;for(const S of m)r.has(S)||e[g][S]<E&&(E=e[g][S],T=S);if(T===-1)break;o.push(T),r.add(T),g=T}return o.push(0),o}function sd(i,e){const n=i.length;let r=!0,o=[...i];for(;r;){r=!1;for(let c=1;c<n-2;c++)for(let d=c+1;d<n-1;d++){const m=e[o[c-1]][o[c]]+e[o[d]][o[d+1]];if(e[o[c-1]][o[d]]+e[o[c]][o[d+1]]<m-.001){const T=[...o];let E=c,S=d;for(;E<S;)[T[E],T[S]]=[T[S],T[E]],E++,S--;o=T,r=!0}}}return o}function od(i,e){let n=0;for(let r=0;r<i.length-1;r++)n+=e[i[r]][i[r+1]];return n}function ad(i,e,n){const r=[];let c=on((n==null?void 0:n.workStart)||"08:30");for(let d=0;d<i.length;d++){if(d>0){const m=e[i[d-1]][i[d]]/20*60;c+=Math.ceil(m)}r.push({pointIndex:i[d],arrivalTime:ld(c),arrivalMinutes:c}),d>0&&d<i.length-1&&(c+=60)}return r}function cd(i){if(i.length<2)return 0;const e=i[0].arrivalMinutes;return i[i.length-1].arrivalMinutes-e}function on(i){if(!i)return 0;const[e,n]=i.split(":").map(Number);return e*60+n}function ld(i){const e=Math.floor(i/60),n=i%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}let Ys=null,dd=null;async function ud(){const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">auto_fix_high</span>
        マッチング＆ルート最適化
      </h1>
      <span style="color:var(--text-secondary)">${ri(new Date)}</span>
    </div>

    <!-- 実行ボタン -->
    <div class="card" style="margin-bottom:24px;text-align:center;padding:32px">
      <h3 style="margin-bottom:8px">自動マッチング＆ルート最適化</h3>
      <p style="color:var(--text-secondary);margin-bottom:20px">
        職員のスキルと利用者のニーズを照合し、最適な割り当てとルートを算出します
      </p>
      <button class="btn btn-primary" id="btn-run-optimization" style="padding:14px 40px;font-size:1rem">
        <span class="material-icons-round">play_arrow</span>
        最適化を実行
      </button>
    </div>

    <!-- 結果表示エリア -->
    <div id="optimization-results"></div>
  `,document.getElementById("btn-run-optimization").addEventListener("click",hd)}async function hd(){var n;const i=document.getElementById("btn-run-optimization"),e=document.getElementById("optimization-results");i.disabled=!0,i.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...';try{const[r,o]=await Promise.all([Pe(),qe()]);if(r.length===0){C("職員が登録されていません","warning");return}if(o.length===0){C("利用者が登録されていません","warning");return}const{assignments:c,unassigned:d}=td(r.filter(g=>g.isActive),o.filter(g=>g.isActive));Ys=c;const m=id(c,r,o,ie);dd=m,e.innerHTML=fd(r,o,c,d,m),(n=document.getElementById("btn-save-routes"))==null||n.addEventListener("click",async()=>{await md(r,m)}),C("最適化が完了しました！","success")}catch(r){C("最適化に失敗しました: "+r.message,"error"),console.error(r)}finally{i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行'}}function fd(i,e,n,r,o){const c={};for(const d of n)c[d.staffId]||(c[d.staffId]={staff:i.find(m=>m.id===d.staffId),clients:[]}),c[d.staffId].clients.push({...d,client:e.find(m=>m.id===d.clientId)});return`
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
        <div class="stat-value">${Object.values(o).reduce((d,m)=>d+m.totalDistance,0).toFixed(1)}<span style="font-size:.9rem;color:var(--text-muted)">km</span></div>
      </div>
    </div>

    <!-- 職員別結果 -->
    <div class="grid grid-2" style="margin-bottom:24px">
      ${Object.entries(c).map(([d,m])=>{var T,E,S;const g=o[d];return`
          <div class="card" style="border-left:4px solid ${((T=m.staff)==null?void 0:T.color)||"#999"}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${((E=m.staff)==null?void 0:E.color)||"#999"};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${m.clients.length}
                </div>
                ${he(((S=m.staff)==null?void 0:S.name)||"不明")}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${(g==null?void 0:g.totalDistance)||0}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${((g==null?void 0:g.schedule)||[]).filter(k=>k.pointIndex!==0||g.schedule.indexOf(k)===g.schedule.length-1).map((k,$,L)=>{var O,P,B,j;return k.pointIndex===0&&$===L.length-1?`<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${k.arrivalTime} 事業所帰着
                    </div>`:(m.clients.find(K=>(g.route[g.schedule.indexOf(k)],!0)),`<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${k.arrivalTime} ${((P=(O=m.clients[$])==null?void 0:O.client)==null?void 0:P.name)||"利用者"}</strong>
                      <span class="tag">${((j=(B=m.clients[$])==null?void 0:B.client)==null?void 0:j.visitDuration)||60}分</span>
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
        ${r.map(d=>`
          <div style="padding:6px 0;color:var(--text-secondary)">
            ${he(d.clientName)} — ${d.reason}
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
  `}async function md(i,e){try{const n=Object.entries(e).map(([o,c])=>({staffId:o,date:St(),clientIds:c.route.slice(1,-1).map(d=>{var m;return(m=c.schedule[d])==null?void 0:m.clientId}).filter(Boolean),totalDistance:c.totalDistance,totalDuration:c.totalDuration,schedule:c.schedule})),r=Object.entries(e).map(([o,c])=>{const d=Ys.filter(m=>m.staffId===o).map(m=>m.clientId);return{staffId:o,date:St(),clientIds:d,totalDistance:c.totalDistance,totalDuration:c.totalDuration}});await Rl(r),C("ルートを保存しました。マップビューで確認できます。","success")}catch(n){C("保存に失敗しました: "+n.message,"error")}}const pd={dashboard:{render:xl,title:"ダッシュボード"},map:{render:zl,title:"マップビュー"},staff:{render:In,title:"職員管理"},client:{render:Tn,title:"利用者管理"},schedule:{render:Yl,title:"スケジュール"},matching:{render:ud,title:"マッチング＆最適化"}};function gd(){var e,n,r;document.querySelectorAll(".nav-item").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.page;c&&li(c)})}),(e=document.getElementById("btn-sidebar-toggle"))==null||e.addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("collapsed")}),(n=document.getElementById("btn-modal-close"))==null||n.addEventListener("click",()=>{document.getElementById("modal-overlay").style.display="none"}),(r=document.getElementById("modal-overlay"))==null||r.addEventListener("click",o=>{o.target===o.currentTarget&&(o.currentTarget.style.display="none")})}async function li(i){const e=pd[i];if(!e)return;document.querySelectorAll(".nav-item").forEach(r=>{r.classList.toggle("active",r.dataset.page===i)}),document.title=`${e.title} - CareRoute`;const n=document.getElementById("page-container");n.innerHTML='<div class="loading"><div class="spinner"></div></div>';try{await e.render()}catch(r){console.error(`ページ「${e.title}」の表示エラー:`,r),n.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${r.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `}}const cs=[{id:"staff_2",name:"前川さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_3",name:"水口さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"18:01",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018},{id:"staff_4",name:"横家さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","火","水","木","金"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#F59E0B",isActive:!0,lat:35.443,lng:137.018},{id:"staff_5",name:"木澤さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["火","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#8B5CF6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_6",name:"圭子さん",gender:"女性",type:"パート",workStart:"07:50",workEnd:"16:00",days:["月","火","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:[]},color:"#EC4899",isActive:!0,lat:35.443,lng:137.018},{id:"staff_7",name:"藤吉さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"12:00",days:["火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["ペット可"]},color:"#14B8A6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_8",name:"ちえみさん",gender:"女性",type:"パート",workStart:"13:00",workEnd:"17:00",days:["月","火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#F97316",isActive:!0,lat:35.443,lng:137.018},{id:"staff_9",name:"棚橋さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["火","水","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#6366F1",isActive:!0,lat:35.443,lng:137.018},{id:"staff_10",name:"高井さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"14:00",days:["火","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理"]},color:"#84CC16",isActive:!0,lat:35.443,lng:137.018},{id:"staff_11",name:"小沢さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"16:00",days:["月","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#0EA5E9",isActive:!0,lat:35.443,lng:137.018},{id:"staff_12",name:"若尾さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["月","火","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#3B82F6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_13",name:"小川さん",gender:"女性",type:"パート",workStart:"08:20",workEnd:"17:00",days:["月","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_14",name:"井戸さん",gender:"女性",type:"パート",workStart:"07:30",workEnd:"16:00",days:["月","火","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018}],ls=[{id:"client_1",name:"中村晃",genderPreference:"指定なし",address:"関市東新町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.497156833927576,lng:136.91472248776176,isActive:!0,area:"関市"},{id:"client_2",name:"今井 幸",genderPreference:"指定なし",address:"可児市今渡1334番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.429546564671064,lng:137.06448192237502,isActive:!0,area:"可児市"},{id:"client_3",name:"佐合愛",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441449916213905,lng:137.00859676668438,isActive:!0,area:"美濃加茂市"},{id:"client_4",name:"佐藤 平",genderPreference:"指定なし",address:"関市小野1378番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.496713667191365,lng:136.91611792725212,isActive:!0,area:"関市"},{id:"client_5",name:"佐藤 惠",genderPreference:"指定なし",address:"加茂郡富加町羽生1439-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49350458855056,lng:137.00284647997333,isActive:!0,area:"加茂郡富加町"},{id:"client_6",name:"内田 鉄",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1247",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43919134426946,lng:137.0179669717769,isActive:!0,area:"美濃加茂市"},{id:"client_7",name:"冨田 勝",genderPreference:"女性希望",address:"美濃加茂市蜂屋町中蜂屋1475番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.433236929814676,lng:137.0206065781048,isActive:!0,area:"美濃加茂市"},{id:"client_8",name:"前川 み",genderPreference:"指定なし",address:"美濃加茂市森山町3-4-28",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.447385010380714,lng:137.0241786951649,isActive:!0,area:"美濃加茂市"},{id:"client_9",name:"加藤 民",genderPreference:"指定なし",address:"加茂郡川辺町中川辺1220番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.475384399265096,lng:137.06390768355888,isActive:!0,area:"加茂郡川辺町"},{id:"client_10",name:"加藤 雪",genderPreference:"指定なし",address:"可児市松伏3-4",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.42952101999053,lng:137.06996025815,isActive:!0,area:"可児市"},{id:"client_11",name:"吉村 強",genderPreference:"女性希望",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45175401563851,lng:137.02161473049864,isActive:!0,area:"美濃加茂市"},{id:"client_12",name:"吉田あ",genderPreference:"指定なし",address:"関市西田原",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49115464552958,lng:136.92399997463878,isActive:!0,area:"関市"},{id:"client_13",name:"和田 隆",genderPreference:"指定なし",address:"加茂郡川辺町石神84番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48236841267637,lng:137.07760456602477,isActive:!0,area:"加茂郡川辺町"},{id:"client_14",name:"土岐 吉",genderPreference:"指定なし",address:"美濃加茂市加茂野町市橋836-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44162170104763,lng:137.0262114717999,isActive:!0,area:"美濃加茂市"},{id:"client_15",name:"土岐 雅",genderPreference:"指定なし",address:"加茂郡富加町羽生1453-20",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.488517359713484,lng:136.99491575096658,isActive:!0,area:"加茂郡富加町"},{id:"client_16",name:"大森 君",genderPreference:"女性希望",address:"加茂郡富加町高畑637-3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50099328128151,lng:136.98455151897673,isActive:!0,area:"加茂郡富加町"},{id:"client_17",name:"大橋ひさ",genderPreference:"女性希望",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.438385496082404,lng:137.02562783976515,isActive:!0,area:"美濃加茂市"},{id:"client_18",name:"天野慧",genderPreference:"指定なし",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.434155101090184,lng:137.02364638342797,isActive:!0,area:"美濃加茂市"},{id:"client_19",name:"奥田 邦",genderPreference:"指定なし",address:"加茂郡川辺町石神9778-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494079651227416,lng:137.07228502934993,isActive:!0,area:"加茂郡川辺町"},{id:"client_20",name:"安田 正",genderPreference:"女性希望",address:"関市東町4-3-24",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.498558378964844,lng:136.93317629557282,isActive:!0,area:"関市"},{id:"client_21",name:"安藤 悦治",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4458132002014,lng:137.0128572203751,isActive:!0,area:"美濃加茂市"},{id:"client_22",name:"宮本伸",genderPreference:"指定なし",address:"美濃加茂市上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43490869964852,lng:137.01386742162063,isActive:!0,area:"美濃加茂市"},{id:"client_23",name:"宮田 薫",genderPreference:"指定なし",address:"加茂郡富加町高畑637番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4893904414253,lng:136.9951458803918,isActive:!0,area:"加茂郡富加町"},{id:"client_24",name:"富田 菊",genderPreference:"指定なし",address:"可児市矢戸1445番地34",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.435752761721716,lng:137.0651931080912,isActive:!0,area:"可児市"},{id:"client_25",name:"小原 強",genderPreference:"指定なし",address:"美濃加茂市下米田町則光329番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441734590435274,lng:137.0125176746724,isActive:!0,area:"美濃加茂市"},{id:"client_26",name:"岡田 洋",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋1674番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4365047823305,lng:137.01270107633286,isActive:!0,area:"美濃加茂市"},{id:"client_27",name:"岩﨑 嬉",genderPreference:"指定なし",address:"美濃加茂市加茂川町３丁目４番７号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43346804141193,lng:137.01932833342485,isActive:!0,area:"美濃加茂市"},{id:"client_28",name:"川崎 イ",genderPreference:"指定なし",address:"加茂郡富加町滝田151番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.496723988527705,lng:136.9997990843252,isActive:!0,area:"加茂郡富加町"},{id:"client_29",name:"平田 裕",genderPreference:"指定なし",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.449511651048645,lng:137.00972072094092,isActive:!0,area:"美濃加茂市"},{id:"client_30",name:"平田あ",genderPreference:"女性希望",address:"加茂郡富加町羽生",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49517050409468,lng:136.9856735080124,isActive:!0,area:"加茂郡富加町"},{id:"client_31",name:"廣 強",genderPreference:"指定なし",address:"美濃加茂市牧野1076-75",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44218112119725,lng:137.01104910417206,isActive:!0,area:"美濃加茂市"},{id:"client_32",name:"斉藤真",genderPreference:"指定なし",address:"関市北天神",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48797634825378,lng:136.9143700838785,isActive:!0,area:"関市"},{id:"client_33",name:"日比野 奥",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.437015399250406,lng:137.00906805366205,isActive:!0,area:"美濃加茂市"},{id:"client_34",name:"日比野 由",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43337070077588,lng:137.0244453376369,isActive:!0,area:"美濃加茂市"},{id:"client_35",name:"日比野 直",genderPreference:"女性希望",address:"美濃加茂市清水町2-3-17",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44642678990315,lng:137.01795349522274,isActive:!0,area:"美濃加茂市"},{id:"client_36",name:"木村 光",genderPreference:"指定なし",address:"美濃加茂市太田町2600番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.435371997376876,lng:137.01108131268214,isActive:!0,area:"美濃加茂市"},{id:"client_37",name:"木澤 博",genderPreference:"指定なし",address:"加茂郡富加町加治田3461番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.506303390707046,lng:136.99104467350202,isActive:!0,area:"加茂郡富加町"},{id:"client_38",name:"木澤 照",genderPreference:"女性希望",address:"加茂郡川辺町石神215-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4880086414237,lng:137.07289353288346,isActive:!0,area:"加茂郡川辺町"},{id:"client_39",name:"杉島 希",genderPreference:"指定なし",address:"加茂郡富加町滝田283-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50110204409342,lng:136.98395012382613,isActive:!0,area:"加茂郡富加町"},{id:"client_40",name:"村仲 尚",genderPreference:"女性希望",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.438698758555574,lng:137.02193085044868,isActive:!0,area:"美濃加茂市"},{id:"client_41",name:"村仲 鍬",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452301436877214,lng:137.02067008781682,isActive:!0,area:"美濃加茂市"},{id:"client_42",name:"松元 良",genderPreference:"女性希望",address:"美濃加茂市本郷町1丁目1番26号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.43827103816531,lng:137.01191566430634,isActive:!0,area:"美濃加茂市"},{id:"client_43",name:"栗山 年",genderPreference:"指定なし",address:"加茂郡富加町高畑258番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494121986748645,lng:136.98518245423062,isActive:!0,area:"加茂郡富加町"},{id:"client_44",name:"櫻井 あ",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉773番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.45138892205426,lng:137.01422771742352,isActive:!0,area:"美濃加茂市"},{id:"client_45",name:"河野 仁",genderPreference:"指定なし",address:"加茂郡富加町羽生909-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.490271641834966,lng:136.98727323288463,isActive:!0,area:"加茂郡富加町"},{id:"client_46",name:"浅野",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45202959233498,lng:137.01566783519402,isActive:!0,area:"美濃加茂市"},{id:"client_47",name:"渡邉 文",genderPreference:"指定なし",address:"加茂郡川辺町比久見505番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49415672848246,lng:137.0639961091595,isActive:!0,area:"加茂郡川辺町"},{id:"client_48",name:"渡邉直",genderPreference:"女性希望",address:"美濃加茂市蜂屋町上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43872942558895,lng:137.01354730683613,isActive:!0,area:"美濃加茂市"},{id:"client_49",name:"瀧戸 邦",genderPreference:"指定なし",address:"加茂郡富加町高畑815-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49012105422854,lng:137.00036018284152,isActive:!0,area:"加茂郡富加町"},{id:"client_50",name:"石原 ヤ",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50124112017079,lng:136.98382202932007,isActive:!0,area:"加茂郡富加町"},{id:"client_51",name:"石原 孝",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49328324234597,lng:136.9835128247142,isActive:!0,area:"加茂郡富加町"},{id:"client_52",name:"石田 友",genderPreference:"指定なし",address:"関市大杉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49271720267115,lng:136.91679407643252,isActive:!0,area:"関市"},{id:"client_53",name:"神園 昭",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1552-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445736819174996,lng:137.02080207291,isActive:!0,area:"美濃加茂市"},{id:"client_54",name:"細田 と",genderPreference:"指定なし",address:"加茂郡川辺町比久見927番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49138118249907,lng:137.0669797974694,isActive:!0,area:"加茂郡川辺町"},{id:"client_55",name:"織部 恒",genderPreference:"女性希望",address:"加茂郡富加町大山561-2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4956482083646,lng:136.98479580431297,isActive:!0,area:"加茂郡富加町"},{id:"client_56",name:"纐纈 芳",genderPreference:"指定なし",address:"美濃加茂市田島町2-1-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45002813499261,lng:137.0212204400497,isActive:!0,area:"美濃加茂市"},{id:"client_57",name:"纐纈美",genderPreference:"指定なし",address:"美濃加茂市大手町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4391119160273,lng:137.02387050933302,isActive:!0,area:"美濃加茂市"},{id:"client_58",name:"肥田 太",genderPreference:"指定なし",address:"可児市下恵土4146-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4312051032861,lng:137.05456974028345,isActive:!0,area:"可児市"},{id:"client_59",name:"菊池 二",genderPreference:"指定なし",address:"美濃加茂市加茂野町鷹之巣1712番地13",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44067140824593,lng:137.00812252064713,isActive:!0,area:"美濃加茂市"},{id:"client_60",name:"酒向 み",genderPreference:"指定なし",address:"美濃加茂市下米田町東栃井173番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.439305854394995,lng:137.02599237626308,isActive:!0,area:"美濃加茂市"},{id:"client_61",name:"鈴木 春",genderPreference:"女性希望",address:"美濃加茂市蜂屋町伊瀬920",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445308304721735,lng:137.02055837255097,isActive:!0,area:"美濃加茂市"},{id:"client_62",name:"長沼 善",genderPreference:"指定なし",address:"美濃加茂市富加町加治田665",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452051259062436,lng:137.01855573983298,isActive:!0,area:"美濃加茂市"},{id:"client_63",name:"馬場 と",genderPreference:"女性希望",address:"美濃加茂市太田町3519-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44993124386665,lng:137.02104853551123,isActive:!0,area:"美濃加茂市"},{id:"client_64",name:"高山 智",genderPreference:"指定なし",address:"美濃加茂市牧野1941番地16",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44532882741129,lng:137.00968272003644,isActive:!0,area:"美濃加茂市"},{id:"client_65",name:"髙井 千",genderPreference:"女性希望",address:"加茂郡富加町羽生1751番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.505370248825024,lng:136.9927463803301,isActive:!0,area:"加茂郡富加町"},{id:"client_66",name:"鹿野 和",genderPreference:"指定なし",address:"美濃加茂市山之上町1538番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44890607991325,lng:137.01711922971506,isActive:!0,area:"美濃加茂市"},{id:"client_67",name:"鹿野 義",genderPreference:"指定なし",address:"美濃加茂市山之上町6260番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43761631928377,lng:137.01824050932268,isActive:!0,area:"美濃加茂市"}],ds=[{id:"visit_1",clientId:"client_46",dayOfWeek:"金",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_2",clientId:"client_18",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_3",clientId:"client_21",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_4",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"生活２・１７９０円"},{id:"visit_5",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_6",clientId:"client_52",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_7",clientId:"client_52",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_8",clientId:"client_52",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_9",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_10",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_11",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_12",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_13",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_14",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_15",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_16",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_17",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_18",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_19",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_20",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_21",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_22",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_23",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_24",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_25",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_26",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_27",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_28",clientId:"client_50",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2200,serviceInfo:"生活３・２２００円"},{id:"visit_29",clientId:"client_50",dayOfWeek:"水",startTime:"12:30",endTime:"14:00",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_30",clientId:"client_2",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_31",clientId:"client_27",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_32",clientId:"client_6",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_33",clientId:"client_17",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:5870,serviceInfo:"障害身体・５８７０円・１２００円"},{id:"visit_34",clientId:"client_17",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_35",clientId:"client_17",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_36",clientId:"client_16",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_37",clientId:"client_26",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_38",clientId:"client_19",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_39",clientId:"client_19",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_40",clientId:"client_25",dayOfWeek:"月",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_41",clientId:"client_25",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_42",clientId:"client_25",dayOfWeek:"木",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_43",clientId:"client_25",dayOfWeek:"水",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_44",clientId:"client_25",dayOfWeek:"金",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_45",clientId:"client_55",dayOfWeek:"月",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_46",clientId:"client_55",dayOfWeek:"土",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_47",clientId:"client_9",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_48",clientId:"client_9",dayOfWeek:"火",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_49",clientId:"client_9",dayOfWeek:"木",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_50",clientId:"client_9",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_51",clientId:"client_9",dayOfWeek:"土",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_52",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_53",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_54",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_55",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_56",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_57",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_58",clientId:"client_9",dayOfWeek:"月",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_59",clientId:"client_9",dayOfWeek:"土",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_60",clientId:"client_9",dayOfWeek:"火",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_61",clientId:"client_9",dayOfWeek:"金",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_62",clientId:"client_9",dayOfWeek:"木",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_63",clientId:"client_10",dayOfWeek:"水",startTime:"10:00",endTime:"11:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_64",clientId:"client_10",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_65",clientId:"client_53",dayOfWeek:"水",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_66",clientId:"client_28",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_67",clientId:"client_28",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_68",clientId:"client_45",dayOfWeek:"金",startTime:"09:15",endTime:"10:15",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_69",clientId:"client_59",dayOfWeek:"月",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_70",clientId:"client_59",dayOfWeek:"水",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_71",clientId:"client_59",dayOfWeek:"金",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_72",clientId:"client_38",dayOfWeek:"月",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_73",clientId:"client_38",dayOfWeek:"水",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_74",clientId:"client_38",dayOfWeek:"金",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_75",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_76",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_77",clientId:"client_37",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_78",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_79",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_80",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_81",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_82",clientId:"client_37",dayOfWeek:"水",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_83",clientId:"client_37",dayOfWeek:"木",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_84",clientId:"client_37",dayOfWeek:"火",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_85",clientId:"client_37",dayOfWeek:"土",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_86",clientId:"client_37",dayOfWeek:"火",startTime:"17:00",endTime:"17:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_87",clientId:"client_37",dayOfWeek:"水",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_88",clientId:"client_37",dayOfWeek:"木",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_89",clientId:"client_36",dayOfWeek:"月",startTime:"15:30",endTime:"16:30",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_90",clientId:"client_36",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_91",clientId:"client_36",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_92",clientId:"client_57",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_93",clientId:"client_43",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_94",clientId:"client_43",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_95",clientId:"client_43",dayOfWeek:"金",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_96",clientId:"client_43",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_97",clientId:"client_56",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害・４０４０円・１２００円"},{id:"visit_98",clientId:"client_32",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_99",clientId:"client_44",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_100",clientId:"client_44",dayOfWeek:"火",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_101",clientId:"client_44",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_102",clientId:"client_44",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_103",clientId:"client_60",dayOfWeek:"火",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_104",clientId:"client_60",dayOfWeek:"木",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_105",clientId:"client_60",dayOfWeek:"土",startTime:"08:10",endTime:"09:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_106",clientId:"client_3",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_107",clientId:"client_3",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_108",clientId:"client_5",dayOfWeek:"水",startTime:"12:00",endTime:"13:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_109",clientId:"client_4",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_110",clientId:"client_4",dayOfWeek:"火",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_111",clientId:"client_4",dayOfWeek:"水",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_112",clientId:"client_4",dayOfWeek:"木",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_113",clientId:"client_4",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_114",clientId:"client_4",dayOfWeek:"土",startTime:"16:30",endTime:"17:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_115",clientId:"client_66",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_116",clientId:"client_67",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_117",clientId:"client_39",dayOfWeek:"月",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_118",clientId:"client_61",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_119",clientId:"client_61",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_120",clientId:"client_65",dayOfWeek:"月",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_121",clientId:"client_65",dayOfWeek:"火",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_122",clientId:"client_65",dayOfWeek:"水",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_123",clientId:"client_65",dayOfWeek:"木",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_124",clientId:"client_65",dayOfWeek:"金",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_125",clientId:"client_65",dayOfWeek:"土",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_126",clientId:"client_65",dayOfWeek:"月",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_127",clientId:"client_65",dayOfWeek:"水",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_128",clientId:"client_65",dayOfWeek:"木",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_129",clientId:"client_65",dayOfWeek:"金",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_130",clientId:"client_65",dayOfWeek:"土",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_131",clientId:"client_65",dayOfWeek:"火",startTime:"12:10",endTime:"12:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_132",clientId:"client_65",dayOfWeek:"月",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_133",clientId:"client_65",dayOfWeek:"水",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_134",clientId:"client_65",dayOfWeek:"火",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_135",clientId:"client_65",dayOfWeek:"金",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_136",clientId:"client_65",dayOfWeek:"土",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_137",clientId:"client_64",dayOfWeek:"火",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_138",clientId:"client_64",dayOfWeek:"木",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_139",clientId:"client_64",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_140",clientId:"client_49",dayOfWeek:"水",startTime:"12:15",endTime:"13:15",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_141",clientId:"client_49",dayOfWeek:"土",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_142",clientId:"client_14",dayOfWeek:"水",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_143",clientId:"client_15",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_144",clientId:"client_15",dayOfWeek:"水",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_145",clientId:"client_15",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_146",clientId:"client_24",dayOfWeek:"火",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_147",clientId:"client_24",dayOfWeek:"木",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_148",clientId:"client_7",dayOfWeek:"月",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_149",clientId:"client_7",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_150",clientId:"client_1",dayOfWeek:"月",startTime:"15:30",endTime:"16:00",duration:60,income:3090,serviceInfo:"障害家事・１０６０円・１０１０円"},{id:"visit_151",clientId:"client_1",dayOfWeek:"水",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_152",clientId:"client_1",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_153",clientId:"client_62",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_154",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_155",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_156",clientId:"client_58",dayOfWeek:"月",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_157",clientId:"client_58",dayOfWeek:"水",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_158",clientId:"client_58",dayOfWeek:"火",startTime:"11:45",endTime:"12:15",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_159",clientId:"client_58",dayOfWeek:"木",startTime:"13:00",endTime:"13:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_160",clientId:"client_58",dayOfWeek:"金",startTime:"12:30",endTime:"13:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_161",clientId:"client_33",dayOfWeek:"木",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_162",clientId:"client_35",dayOfWeek:"月",startTime:"10:40",endTime:"11:40",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_163",clientId:"client_34",dayOfWeek:"火",startTime:"07:30",endTime:"08:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_164",clientId:"client_30",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_165",clientId:"client_29",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_166",clientId:"client_31",dayOfWeek:"木",startTime:"09:30",endTime:"10:20",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_167",clientId:"client_54",dayOfWeek:"火",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_168",clientId:"client_54",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_169",clientId:"client_54",dayOfWeek:"木",startTime:"08:15",endTime:"09:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_170",clientId:"client_8",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_171",clientId:"client_42",dayOfWeek:"火",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_172",clientId:"client_42",dayOfWeek:"金",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_173",clientId:"client_42",dayOfWeek:"水",startTime:"14:45",endTime:"16:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_174",clientId:"client_23",dayOfWeek:"土",startTime:"15:00",endTime:"15:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_175",clientId:"client_22",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_176",clientId:"client_41",dayOfWeek:"火",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_177",clientId:"client_40",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_178",clientId:"client_40",dayOfWeek:"木",startTime:"11:45",endTime:"12:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_179",clientId:"client_40",dayOfWeek:"金",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_180",clientId:"client_20",dayOfWeek:"月",startTime:"17:00",endTime:"18:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_181",clientId:"client_12",dayOfWeek:"火",startTime:"15:30",endTime:"16:15",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_182",clientId:"client_12",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_183",clientId:"client_11",dayOfWeek:"月",startTime:"12:00",endTime:"12:50",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_184",clientId:"client_48",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_185",clientId:"client_48",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_186",clientId:"client_47",dayOfWeek:"土",startTime:"14:15",endTime:"15:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_187",clientId:"client_13",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"}];document.addEventListener("DOMContentLoaded",()=>{var i,e;console.log("🏠 CareRoute 起動中..."),kl(),gd();try{Sl(async(n,r)=>{if(r){C(r,"error"),Xi();return}n?(console.log("✅ ログイン:",n.email),us(n),await li("dashboard")):Xi()})}catch(n){console.warn("Firebase未設定のためデモモードで起動します:",n),Xi()}(i=document.getElementById("btn-logout"))==null||i.addEventListener("click",async()=>{try{await El(),C("ログアウトしました","info")}catch{C("ログアウトに失敗しました","error")}}),(e=document.getElementById("btn-demo-mode"))==null||e.addEventListener("click",async()=>{us({displayName:"デモユーザー",email:"demo@careroute.local",photoURL:""}),(await Pe()).length===0&&(C("デモデータを自動投入しています...","info"),await Qs(!0)),await li("dashboard"),C("デモモードで起動しました","info")})});function Xi(){document.getElementById("login-screen").style.display="flex",document.getElementById("main-app").style.display="none"}function us(i){document.getElementById("login-screen").style.display="none",document.getElementById("main-app").style.display="flex";const e=document.getElementById("user-avatar"),n=document.getElementById("user-name");e&&(e.src=i.photoURL||""),n&&(n.textContent=i.displayName||i.email),window.isAdmin=i.email==="demo@careroute.local",vd()}function vd(){if(document.getElementById("btn-load-demo"))return;const i=document.querySelector(".sidebar-nav"),e=document.createElement("li");e.className="nav-item",e.id="btn-load-demo",e.innerHTML=`
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `,e.addEventListener("click",Qs),i.appendChild(e)}async function Qs(i=!1){const e=document.getElementById("btn-load-demo");if(!(!i&&!confirm(`デモデータ（職員6名・利用者20名）を投入しますか？
既存データには影響しません。`))){e&&(e.innerHTML=`
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `);try{const n=await Pe(),r=await qe();if(n.length>0||r.length>0){if(!i&&!confirm("既存のデータを全て削除し、新しいエクセルデータを投入しますか？")){e&&(e.innerHTML=`
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `);return}typeof ns=="function"?await ns():(localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"))}for(const m of cs)await Vs(m);C(`職員 ${cs.length}名 を登録しました`,"success");for(const m of ls)await Hs(m);C(`利用者 ${ls.length}名 を登録しました`,"success");const o=new Date,c=o.getDay(),d={日:0,月:1,火:2,水:3,木:4,金:5,土:6};for(const m of ds){let g=new Date(o);if(m.dayOfWeek&&d[m.dayOfWeek]!==void 0){const $=d[m.dayOfWeek]-c;g.setDate(o.getDate()+$)}const T=g.getFullYear(),E=String(g.getMonth()+1).padStart(2,"0"),S=String(g.getDate()).padStart(2,"0"),k=`${T}-${E}-${S}`;await zs({...m,date:k,status:"scheduled"})}C(`予定 ${ds.length}件 を登録しました`,"success"),await li("dashboard"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `,setTimeout(()=>e.remove(),3e3)}catch(n){console.error("デモデータ投入エラー:",n),C("デモデータの投入に失敗しました: "+n.message,"error"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `}}}
