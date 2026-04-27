(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();const Po=()=>{};var _s={};/**
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
 */const or=function(n){const e=[];let i=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[i++]=o:o<2048?(e[i++]=o>>6|192,e[i++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[i++]=o>>18|240,e[i++]=o>>12&63|128,e[i++]=o>>6&63|128,e[i++]=o&63|128):(e[i++]=o>>12|224,e[i++]=o>>6&63|128,e[i++]=o&63|128)}return e},Do=function(n){const e=[];let i=0,s=0;for(;i<n.length;){const o=n[i++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[i++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[i++],h=n[i++],g=n[i++],v=((o&7)<<18|(l&63)<<12|(h&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(v>>10)),e[s++]=String.fromCharCode(56320+(v&1023))}else{const l=n[i++],h=n[i++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},ar={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,g=h?n[o+1]:0,v=o+2<n.length,E=v?n[o+2]:0,S=l>>2,A=(l&3)<<4|g>>4;let T=(g&15)<<2|E>>6,B=E&63;v||(B=64,h||(T=64)),s.push(i[S],i[A],i[T],i[B])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(or(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Do(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=i[n.charAt(o++)],g=o<n.length?i[n.charAt(o)]:0;++o;const E=o<n.length?i[n.charAt(o)]:64;++o;const A=o<n.length?i[n.charAt(o)]:64;if(++o,l==null||g==null||E==null||A==null)throw new No;const T=l<<2|g>>4;if(s.push(T),E!==64){const B=g<<4&240|E>>2;if(s.push(B),A!==64){const $=E<<6&192|A;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class No extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ro=function(n){const e=or(n);return ar.encodeByteArray(e,!0)},lr=function(n){return Ro(n).replace(/\./g,"")},cr=function(n){try{return ar.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Oo=()=>Lo().__FIREBASE_DEFAULTS__,Mo=()=>{if(typeof process>"u"||typeof _s>"u")return;const n=_s.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cr(n[1]);return e&&JSON.parse(e)},Uo=()=>{try{return Po()||Oo()||Mo()||xo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$o=n=>{var e;return(e=Uo())==null?void 0:e[`_${n}`]};/**
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function Fo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ho(){try{return typeof indexedDB=="object"}catch{return!1}}function qo(){return new Promise((n,e)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(i){e(i)}})}/**
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
 */const zo="FirebaseError";class ke extends Error{constructor(e,i,s){super(i),this.code=e,this.customData=s,this.name=zo,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(e,i,s){this.service=e,this.serviceName=i,this.errors=s}create(e,...i){const s=i[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?Wo(l,s):"Error",g=`${this.serviceName}: ${h} (${o}).`;return new ke(o,g,s)}}function Wo(n,e){return n.replace(Go,(i,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Go=/\{\$([^}]+)}/g;/**
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
 */function hr(n){const e=[];for(const[i,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ko(n,e){const i=new Jo(n,e);return i.subscribe.bind(i)}class Jo{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,s){let o;if(e===void 0&&i===void 0&&s===void 0)throw new Error("Missing Observer.");Xo(e,["next","error","complete"])?o=e:o={next:e,error:i,complete:s},o.next===void 0&&(o.next=jn),o.error===void 0&&(o.error=jn),o.complete===void 0&&(o.complete=jn);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xo(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function jn(){}/**
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
 */function Ct(n){return n&&n._delegate?n._delegate:n}/**
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
 */function ur(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}class Qe{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Yo={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Qo=O.INFO,Zo={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ea=(n,e,...i)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=Zo[e];if(o)console[o](`[${s}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ai{constructor(e){this.name=e,this._logLevel=Qo,this._logHandler=ea,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const ta=(n,e)=>e.some(i=>n instanceof i);let ws,bs;function na(){return ws||(ws=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ia(){return bs||(bs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dr=new WeakMap,Qn=new WeakMap,fr=new WeakMap,Vn=new WeakMap,li=new WeakMap;function sa(n){const e=new Promise((i,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{i(Ie(n.result)),o()},h=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(i=>{i instanceof IDBCursor&&dr.set(i,n)}).catch(()=>{}),li.set(e,n),e}function ra(n){if(Qn.has(n))return;const e=new Promise((i,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{i(),o()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Qn.set(n,e)}let Zn={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return Qn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fr.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ie(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oa(n){Zn=n(Zn)}function aa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const s=n.call(Hn(this),e,...i);return fr.set(s,e.sort?e.sort():[e]),Ie(s)}:ia().includes(n)?function(...e){return n.apply(Hn(this),e),Ie(dr.get(this))}:function(...e){return Ie(n.apply(Hn(this),e))}}function la(n){return typeof n=="function"?aa(n):(n instanceof IDBTransaction&&ra(n),ta(n,na())?new Proxy(n,Zn):n)}function Ie(n){if(n instanceof IDBRequest)return sa(n);if(Vn.has(n))return Vn.get(n);const e=la(n);return e!==n&&(Vn.set(n,e),li.set(e,n)),e}const Hn=n=>li.get(n);function ca(n,e,{blocked:i,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),g=Ie(h);return s&&h.addEventListener("upgradeneeded",v=>{s(Ie(h.result),v.oldVersion,v.newVersion,Ie(h.transaction),v)}),i&&h.addEventListener("blocked",v=>i(v.oldVersion,v.newVersion,v)),g.then(v=>{l&&v.addEventListener("close",()=>l()),o&&v.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const ha=["get","getKey","getAll","getAllKeys","count"],ua=["put","add","delete","clear"],qn=new Map;function Es(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qn.get(e))return qn.get(e);const i=e.replace(/FromIndex$/,""),s=e!==i,o=ua.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(o||ha.includes(i)))return;const l=async function(h,...g){const v=this.transaction(h,o?"readwrite":"readonly");let E=v.store;return s&&(E=E.index(g.shift())),(await Promise.all([E[i](...g),o&&v.done]))[0]};return qn.set(e,l),l}oa(n=>({...n,get:(e,i,s)=>Es(e,i)||n.get(e,i,s),has:(e,i)=>!!Es(e,i)||n.has(e,i)}));/**
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
 */class da{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(fa(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function fa(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ei="@firebase/app",Is="0.14.11";/**
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
 */const de=new ai("@firebase/app"),pa="@firebase/app-compat",ga="@firebase/analytics-compat",ma="@firebase/analytics",ya="@firebase/app-check-compat",va="@firebase/app-check",_a="@firebase/auth",wa="@firebase/auth-compat",ba="@firebase/database",Ea="@firebase/data-connect",Ia="@firebase/database-compat",Sa="@firebase/functions",Aa="@firebase/functions-compat",Ta="@firebase/installations",ka="@firebase/installations-compat",Ca="@firebase/messaging",Pa="@firebase/messaging-compat",Da="@firebase/performance",Na="@firebase/performance-compat",Ra="@firebase/remote-config",La="@firebase/remote-config-compat",Oa="@firebase/storage",Ma="@firebase/storage-compat",xa="@firebase/firestore",Ua="@firebase/ai",$a="@firebase/firestore-compat",Ba="firebase",Fa="12.12.0",ja={[ei]:"fire-core",[pa]:"fire-core-compat",[ma]:"fire-analytics",[ga]:"fire-analytics-compat",[va]:"fire-app-check",[ya]:"fire-app-check-compat",[_a]:"fire-auth",[wa]:"fire-auth-compat",[ba]:"fire-rtdb",[Ea]:"fire-data-connect",[Ia]:"fire-rtdb-compat",[Sa]:"fire-fn",[Aa]:"fire-fn-compat",[Ta]:"fire-iid",[ka]:"fire-iid-compat",[Ca]:"fire-fcm",[Pa]:"fire-fcm-compat",[Da]:"fire-perf",[Na]:"fire-perf-compat",[Ra]:"fire-rc",[La]:"fire-rc-compat",[Oa]:"fire-gcs",[Ma]:"fire-gcs-compat",[xa]:"fire-fst",[$a]:"fire-fst-compat",[Ua]:"fire-vertex","fire-js":"fire-js",[Ba]:"fire-js-all"};/**
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
 */const Va=new Map,Ha=new Map,Ss=new Map;function As(n,e){try{n.container.addComponent(e)}catch(i){de.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ze(n){const e=n.name;if(Ss.has(e))return de.debug(`There were multiple attempts to register component ${e}.`),!1;Ss.set(e,n);for(const i of Va.values())As(i,n);for(const i of Ha.values())As(i,n);return!0}function Me(n){return n==null?!1:n.settings!==void 0}/**
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
 */const qa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ci=new kt("app","Firebase",qa);/**
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
 */const hn=Fa;function Se(n,e,i){let s=ja[n]??n;i&&(s+=`-${i}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),de.warn(h.join(" "));return}Ze(new Qe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const za="firebase-heartbeat-database",Wa=1,Et="firebase-heartbeat-store";let zn=null;function pr(){return zn||(zn=ca(za,Wa,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Et)}catch(i){console.warn(i)}}}}).catch(n=>{throw ci.create("idb-open",{originalErrorMessage:n.message})})),zn}async function Ga(n){try{const i=(await pr()).transaction(Et),s=await i.objectStore(Et).get(gr(n));return await i.done,s}catch(e){if(e instanceof ke)de.warn(e.message);else{const i=ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});de.warn(i.message)}}}async function Ts(n,e){try{const s=(await pr()).transaction(Et,"readwrite");await s.objectStore(Et).put(e,gr(n)),await s.done}catch(i){if(i instanceof ke)de.warn(i.message);else{const s=ci.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});de.warn(s.message)}}}function gr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ka=1024,Ja=30;class Xa{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Qa(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ks();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Ja){const h=Za(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){de.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=ks(),{heartbeatsToSend:s,unsentEntries:o}=Ya(this._heartbeatsCache.heartbeats),l=lr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(i){return de.warn(i),""}}}function ks(){return new Date().toISOString().substring(0,10)}function Ya(n,e=Ka){const i=[];let s=n.slice();for(const o of n){const l=i.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Cs(i)>e){l.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),Cs(i)>e){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Qa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ho()?qo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Ga(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ts(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ts(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cs(n){return lr(JSON.stringify({version:2,heartbeats:n})).length}function Za(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let s=1;s<n.length;s++)n[s].date<i&&(i=n[s].date,e=s);return e}/**
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
 */function el(n){Ze(new Qe("platform-logger",e=>new da(e),"PRIVATE")),Ze(new Qe("heartbeat",e=>new Xa(e),"PRIVATE")),Se(ei,Is,n),Se(ei,Is,"esm2020"),Se("fire-js","")}el("");var tl="firebase",nl="12.12.1";/**
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
 */Se(tl,nl,"app");var Ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.F=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.D=function(y,p,w){for(var d=Array(arguments.length-2),G=2;G<arguments.length;G++)d[G-2]=arguments[G];return u.prototype[p].apply(y,d)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,i),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(m,u,f){f||(f=0);const y=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)y[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)y[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],p=m.g[2];let w=m.g[3],d;d=u+(w^f&(p^w))+y[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+y[1]+3905402710&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+y[2]+606105819&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+y[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+y[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+y[5]+1200080426&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+y[6]+2821735955&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+y[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+y[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+y[9]+2336552879&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+y[10]+4294925233&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+y[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(w^f&(p^w))+y[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=w+(p^u&(f^p))+y[13]+4254626195&4294967295,w=u+(d<<12&4294967295|d>>>20),d=p+(f^w&(u^f))+y[14]+2792965006&4294967295,p=w+(d<<17&4294967295|d>>>15),d=f+(u^p&(w^u))+y[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^w&(f^p))+y[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+y[6]+3225465664&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+y[11]+643717713&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+y[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+y[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+y[10]+38016083&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+y[15]+3634488961&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+y[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+y[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+y[14]+3275163606&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+y[3]+4107603335&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+y[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^w&(f^p))+y[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=w+(f^p&(u^f))+y[2]+4243563512&4294967295,w=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(w^u))+y[7]+1735328473&4294967295,p=w+(d<<14&4294967295|d>>>18),d=f+(w^u&(p^w))+y[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^w)+y[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+y[8]+2272392833&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+y[11]+1839030562&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+y[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+y[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+y[4]+1272893353&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+y[7]+4139469664&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+y[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+y[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+y[0]+3936430074&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+y[3]+3572445317&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+y[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^w)+y[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=w+(u^f^p)+y[12]+3873151461&4294967295,w=u+(d<<11&4294967295|d>>>21),d=p+(w^u^f)+y[15]+530742520&4294967295,p=w+(d<<16&4294967295|d>>>16),d=f+(p^w^u)+y[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~w))+y[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+y[7]+1126891415&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+y[14]+2878612391&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+y[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+y[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+y[3]+2399980690&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+y[10]+4293915773&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+y[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+y[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+y[15]+4264355552&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+y[6]+2734768916&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+y[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~w))+y[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=w+(f^(u|~p))+y[11]+3174756917&4294967295,w=u+(d<<10&4294967295|d>>>22),d=p+(u^(w|~f))+y[2]+718787259&4294967295,p=w+(d<<15&4294967295|d>>>17),d=f+(w^(p|~u))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+p&4294967295,m.g[3]=m.g[3]+w&4294967295}s.prototype.v=function(m,u){u===void 0&&(u=m.length);const f=u-this.blockSize,y=this.C;let p=this.h,w=0;for(;w<u;){if(p==0)for(;w<=f;)o(this,m,w),w+=this.blockSize;if(typeof m=="string"){for(;w<u;)if(y[p++]=m.charCodeAt(w++),p==this.blockSize){o(this,y),p=0;break}}else for(;w<u;)if(y[p++]=m[w++],p==this.blockSize){o(this,y),p=0;break}}this.h=p,this.o+=u},s.prototype.A=function(){var m=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;u=this.o*8;for(var f=m.length-8;f<m.length;++f)m[f]=u&255,u/=256;for(this.v(m),m=Array(16),u=0,f=0;f<4;++f)for(let y=0;y<32;y+=8)m[u++]=this.g[f]>>>y&255;return m};function l(m,u){var f=g;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function h(m,u){this.h=u;const f=[];let y=!0;for(let p=m.length-1;p>=0;p--){const w=m[p]|0;y&&w==u||(f[p]=w,y=!1)}this.g=f}var g={};function v(m){return-128<=m&&m<128?l(m,function(u){return new h([u|0],u<0?-1:0)}):new h([m|0],m<0?-1:0)}function E(m){if(isNaN(m)||!isFinite(m))return A;if(m<0)return x(E(-m));const u=[];let f=1;for(let y=0;m>=f;y++)u[y]=m/f|0,f*=4294967296;return new h(u,0)}function S(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return x(S(m.substring(1),u));if(m.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=E(Math.pow(u,8));let y=A;for(let w=0;w<m.length;w+=8){var p=Math.min(8,m.length-w);const d=parseInt(m.substring(w,w+p),u);p<8?(p=E(Math.pow(u,p)),y=y.j(p).add(E(d))):(y=y.j(f),y=y.add(E(d)))}return y}var A=v(0),T=v(1),B=v(16777216);n=h.prototype,n.m=function(){if(D(this))return-x(this).m();let m=0,u=1;for(let f=0;f<this.g.length;f++){const y=this.i(f);m+=(y>=0?y:4294967296+y)*u,u*=4294967296}return m},n.toString=function(m){if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if($(this))return"0";if(D(this))return"-"+x(this).toString(m);const u=E(Math.pow(m,6));var f=this;let y="";for(;;){const p=He(f,u).g;f=K(f,p.j(u));let w=((f.g.length>0?f.g[0]:f.h)>>>0).toString(m);if(f=p,$(f))return w+y;for(;w.length<6;)w="0"+w;y=w+y}},n.i=function(m){return m<0?0:m<this.g.length?this.g[m]:this.h};function $(m){if(m.h!=0)return!1;for(let u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function D(m){return m.h==-1}n.l=function(m){return m=K(this,m),D(m)?-1:$(m)?0:1};function x(m){const u=m.g.length,f=[];for(let y=0;y<u;y++)f[y]=~m.g[y];return new h(f,~m.h).add(T)}n.abs=function(){return D(this)?x(this):this},n.add=function(m){const u=Math.max(this.g.length,m.g.length),f=[];let y=0;for(let p=0;p<=u;p++){let w=y+(this.i(p)&65535)+(m.i(p)&65535),d=(w>>>16)+(this.i(p)>>>16)+(m.i(p)>>>16);y=d>>>16,w&=65535,d&=65535,f[p]=d<<16|w}return new h(f,f[f.length-1]&-2147483648?-1:0)};function K(m,u){return m.add(x(u))}n.j=function(m){if($(this)||$(m))return A;if(D(this))return D(m)?x(this).j(x(m)):x(x(this).j(m));if(D(m))return x(this.j(x(m)));if(this.l(B)<0&&m.l(B)<0)return E(this.m()*m.m());const u=this.g.length+m.g.length,f=[];for(var y=0;y<2*u;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(let p=0;p<m.g.length;p++){const w=this.i(y)>>>16,d=this.i(y)&65535,G=m.i(p)>>>16,Pe=m.i(p)&65535;f[2*y+2*p]+=d*Pe,Q(f,2*y+2*p),f[2*y+2*p+1]+=w*Pe,Q(f,2*y+2*p+1),f[2*y+2*p+1]+=d*G,Q(f,2*y+2*p+1),f[2*y+2*p+2]+=w*G,Q(f,2*y+2*p+2)}for(m=0;m<u;m++)f[m]=f[2*m+1]<<16|f[2*m];for(m=u;m<2*u;m++)f[m]=0;return new h(f,0)};function Q(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function he(m,u){this.g=m,this.h=u}function He(m,u){if($(u))throw Error("division by zero");if($(m))return new he(A,A);if(D(m))return u=He(x(m),u),new he(x(u.g),x(u.h));if(D(u))return u=He(m,x(u)),new he(x(u.g),u.h);if(m.g.length>30){if(D(m)||D(u))throw Error("slowDivide_ only works with positive integers.");for(var f=T,y=u;y.l(m)<=0;)f=pe(f),y=pe(y);var p=X(f,1),w=X(y,1);for(y=X(y,2),f=X(f,2);!$(y);){var d=w.add(y);d.l(m)<=0&&(p=p.add(f),w=d),y=X(y,1),f=X(f,1)}return u=K(m,p.j(u)),new he(p,u)}for(p=A;m.l(u)>=0;){for(f=Math.max(1,Math.floor(m.m()/u.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),w=E(f),d=w.j(u);D(d)||d.l(m)>0;)f-=y,w=E(f),d=w.j(u);$(w)&&(w=T),p=p.add(w),m=K(m,d)}return new he(p,m)}n.B=function(m){return He(this,m).h},n.and=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)&m.i(y);return new h(f,this.h&m.h)},n.or=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)|m.i(y);return new h(f,this.h|m.h)},n.xor=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)^m.i(y);return new h(f,this.h^m.h)};function pe(m){const u=m.g.length+1,f=[];for(let y=0;y<u;y++)f[y]=m.i(y)<<1|m.i(y-1)>>>31;return new h(f,m.h)}function X(m,u){const f=u>>5;u%=32;const y=m.g.length-f,p=[];for(let w=0;w<y;w++)p[w]=u>0?m.i(w+f)>>>u|m.i(w+f+1)<<32-u:m.i(w+f);return new h(p,m.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=S,hi=h}).apply(typeof Ps<"u"?Ps:typeof self<"u"?self:typeof window<"u"?window:{});var Ht=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ht=="object"&&Ht];for(var r=0;r<t.length;++r){var a=t[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=i(this);function o(t,r){if(r)e:{var a=s;t=t.split(".");for(var c=0;c<t.length-1;c++){var _=t[c];if(!(_ in a))break e;a=a[_]}t=t[t.length-1],c=a[t],r=r(c),r!=c&&r!=null&&e(a,t,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(t){return t||function(r){var a=[],c;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&a.push([c,r[c]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function g(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function v(t,r,a){return t.call.apply(t.bind,arguments)}function E(t,r,a){return E=v,E.apply(null,arguments)}function S(t,r){var a=Array.prototype.slice.call(arguments,1);return function(){var c=a.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function A(t,r){function a(){}a.prototype=r.prototype,t.Z=r.prototype,t.prototype=new a,t.prototype.constructor=t,t.Ob=function(c,_,b){for(var I=Array(arguments.length-2),k=2;k<arguments.length;k++)I[k-2]=arguments[k];return r.prototype[_].apply(c,I)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function B(t){const r=t.length;if(r>0){const a=Array(r);for(let c=0;c<r;c++)a[c]=t[c];return a}return[]}function $(t,r){for(let c=1;c<arguments.length;c++){const _=arguments[c];var a=typeof _;if(a=a!="object"?a:_?Array.isArray(_)?"array":a:"null",a=="array"||a=="object"&&typeof _.length=="number"){a=t.length||0;const b=_.length||0;t.length=a+b;for(let I=0;I<b;I++)t[a+I]=_[I]}else t.push(_)}}class D{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function x(t){h.setTimeout(()=>{throw t},0)}function K(){var t=m;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class Q{constructor(){this.h=this.g=null}add(r,a){const c=he.get();c.set(r,a),this.h?this.h.next=c:this.g=c,this.h=c}}var he=new D(()=>new He,t=>t.reset());class He{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,X=!1,m=new Q,u=()=>{const t=Promise.resolve(void 0);pe=()=>{t.then(f)}};function f(){for(var t;t=K();){try{t.h.call(t.g)}catch(a){x(a)}var r=he;r.j(t),r.h<100&&(r.h++,t.next=r.g,r.g=t)}X=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};h.addEventListener("test",a,r),h.removeEventListener("test",a,r)}catch{}return t}();function d(t){return/^[\s\xa0]*$/.test(t)}function G(t,r){p.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,r)}A(G,p),G.prototype.init=function(t,r){const a=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget,r||(a=="mouseover"?r=t.fromElement:a=="mouseout"&&(r=t.toElement)),this.relatedTarget=r,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&G.Z.h.call(this)},G.prototype.h=function(){G.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),Kr=0;function Jr(t,r,a,c,_){this.listener=t,this.proxy=null,this.src=r,this.type=a,this.capture=!!c,this.ha=_,this.key=++Kr,this.da=this.fa=!1}function Nt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Rt(t,r,a){for(const c in t)r.call(a,t[c],c,t)}function Xr(t,r){for(const a in t)r.call(void 0,t[a],a,t)}function wi(t){const r={};for(const a in t)r[a]=t[a];return r}const bi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ei(t,r){let a,c;for(let _=1;_<arguments.length;_++){c=arguments[_];for(a in c)t[a]=c[a];for(let b=0;b<bi.length;b++)a=bi[b],Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a])}}function Lt(t){this.src=t,this.g={},this.h=0}Lt.prototype.add=function(t,r,a,c,_){const b=t.toString();t=this.g[b],t||(t=this.g[b]=[],this.h++);const I=mn(t,r,c,_);return I>-1?(r=t[I],a||(r.fa=!1)):(r=new Jr(r,this.src,b,!!c,_),r.fa=a,t.push(r)),r};function gn(t,r){const a=r.type;if(a in t.g){var c=t.g[a],_=Array.prototype.indexOf.call(c,r,void 0),b;(b=_>=0)&&Array.prototype.splice.call(c,_,1),b&&(Nt(r),t.g[a].length==0&&(delete t.g[a],t.h--))}}function mn(t,r,a,c){for(let _=0;_<t.length;++_){const b=t[_];if(!b.da&&b.listener==r&&b.capture==!!a&&b.ha==c)return _}return-1}var yn="closure_lm_"+(Math.random()*1e6|0),vn={};function Ii(t,r,a,c,_){if(Array.isArray(r)){for(let b=0;b<r.length;b++)Ii(t,r[b],a,c,_);return null}return a=Ti(a),t&&t[Pe]?t.J(r,a,g(c)?!!c.capture:!1,_):Yr(t,r,a,!1,c,_)}function Yr(t,r,a,c,_,b){if(!r)throw Error("Invalid event type");const I=g(_)?!!_.capture:!!_;let k=wn(t);if(k||(t[yn]=k=new Lt(t)),a=k.add(r,a,c,I,b),a.proxy)return a;if(c=Qr(),a.proxy=c,c.src=t,c.listener=a,t.addEventListener)w||(_=I),_===void 0&&(_=!1),t.addEventListener(r.toString(),c,_);else if(t.attachEvent)t.attachEvent(Ai(r.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Qr(){function t(a){return r.call(t.src,t.listener,a)}const r=Zr;return t}function Si(t,r,a,c,_){if(Array.isArray(r))for(var b=0;b<r.length;b++)Si(t,r[b],a,c,_);else c=g(c)?!!c.capture:!!c,a=Ti(a),t&&t[Pe]?(t=t.i,b=String(r).toString(),b in t.g&&(r=t.g[b],a=mn(r,a,c,_),a>-1&&(Nt(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete t.g[b],t.h--)))):t&&(t=wn(t))&&(r=t.g[r.toString()],t=-1,r&&(t=mn(r,a,c,_)),(a=t>-1?r[t]:null)&&_n(a))}function _n(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[Pe])gn(r.i,t);else{var a=t.type,c=t.proxy;r.removeEventListener?r.removeEventListener(a,c,t.capture):r.detachEvent?r.detachEvent(Ai(a),c):r.addListener&&r.removeListener&&r.removeListener(c),(a=wn(r))?(gn(a,t),a.h==0&&(a.src=null,r[yn]=null)):Nt(t)}}}function Ai(t){return t in vn?vn[t]:vn[t]="on"+t}function Zr(t,r){if(t.da)t=!0;else{r=new G(r,this);const a=t.listener,c=t.ha||t.src;t.fa&&_n(t),t=a.call(c,r)}return t}function wn(t){return t=t[yn],t instanceof Lt?t:null}var bn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ti(t){return typeof t=="function"?t:(t[bn]||(t[bn]=function(r){return t.handleEvent(r)}),t[bn])}function q(){y.call(this),this.i=new Lt(this),this.M=this,this.G=null}A(q,y),q.prototype[Pe]=!0,q.prototype.removeEventListener=function(t,r,a,c){Si(this,t,r,a,c)};function z(t,r){var a,c=t.G;if(c)for(a=[];c;c=c.G)a.push(c);if(t=t.M,c=r.type||r,typeof r=="string")r=new p(r,t);else if(r instanceof p)r.target=r.target||t;else{var _=r;r=new p(c,t),Ei(r,_)}_=!0;let b,I;if(a)for(I=a.length-1;I>=0;I--)b=r.g=a[I],_=Ot(b,c,!0,r)&&_;if(b=r.g=t,_=Ot(b,c,!0,r)&&_,_=Ot(b,c,!1,r)&&_,a)for(I=0;I<a.length;I++)b=r.g=a[I],_=Ot(b,c,!1,r)&&_}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var t=this.i;for(const r in t.g){const a=t.g[r];for(let c=0;c<a.length;c++)Nt(a[c]);delete t.g[r],t.h--}}this.G=null},q.prototype.J=function(t,r,a,c){return this.i.add(String(t),r,!1,a,c)},q.prototype.K=function(t,r,a,c){return this.i.add(String(t),r,!0,a,c)};function Ot(t,r,a,c){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();let _=!0;for(let b=0;b<r.length;++b){const I=r[b];if(I&&!I.da&&I.capture==a){const k=I.listener,V=I.ha||I.src;I.fa&&gn(t.i,I),_=k.call(V,c)!==!1&&_}}return _&&!c.defaultPrevented}function eo(t,r){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=E(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:h.setTimeout(t,r||0)}function ki(t){t.g=eo(()=>{t.g=null,t.i&&(t.i=!1,ki(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class to extends y{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:ki(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){y.call(this),this.h=t,this.g={}}A(tt,y);var Ci=[];function Pi(t){Rt(t.g,function(r,a){this.g.hasOwnProperty(a)&&_n(r)},t),t.g={}}tt.prototype.N=function(){tt.Z.N.call(this),Pi(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var En=h.JSON.stringify,no=h.JSON.parse,io=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function Di(){}function so(){}var nt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function In(){p.call(this,"d")}A(In,p);function Sn(){p.call(this,"c")}A(Sn,p);var qe={},Ni=null;function An(){return Ni=Ni||new q}qe.Ia="serverreachability";function Ri(t){p.call(this,qe.Ia,t)}A(Ri,p);function it(t){const r=An();z(r,new Ri(r))}qe.STAT_EVENT="statevent";function Li(t,r){p.call(this,qe.STAT_EVENT,t),this.stat=r}A(Li,p);function W(t){const r=An();z(r,new Li(r,t))}qe.Ja="timingevent";function Oi(t,r){p.call(this,qe.Ja,t),this.size=r}A(Oi,p);function st(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){t()},r)}function rt(){this.g=!0}rt.prototype.ua=function(){this.g=!1};function ro(t,r,a,c,_,b){t.info(function(){if(t.g)if(b){var I="",k=b.split("&");for(let M=0;M<k.length;M++){var V=k[M].split("=");if(V.length>1){const H=V[0];V=V[1];const se=H.split("_");I=se.length>=2&&se[1]=="type"?I+(H+"="+V+"&"):I+(H+"=redacted&")}}}else I=null;else I=b;return"XMLHTTP REQ ("+c+") [attempt "+_+"]: "+r+`
`+a+`
`+I})}function oo(t,r,a,c,_,b,I){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+_+"]: "+r+`
`+a+`
`+b+" "+I})}function ze(t,r,a,c){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+lo(t,a)+(c?" "+c:"")})}function ao(t,r){t.info(function(){return"TIMEOUT: "+r})}rt.prototype.info=function(){};function lo(t,r){if(!t.g)return r;if(!r)return null;try{const b=JSON.parse(r);if(b){for(t=0;t<b.length;t++)if(Array.isArray(b[t])){var a=b[t];if(!(a.length<2)){var c=a[1];if(Array.isArray(c)&&!(c.length<1)){var _=c[0];if(_!="noop"&&_!="stop"&&_!="close")for(let I=1;I<c.length;I++)c[I]=""}}}}return En(b)}catch{return r}}var Tn={NO_ERROR:0,TIMEOUT:8},co={},Mi;function kn(){}A(kn,Di),kn.prototype.g=function(){return new XMLHttpRequest},Mi=new kn;function ot(t){return encodeURIComponent(String(t))}function ho(t){var r=1;t=t.split(":");const a=[];for(;r>0&&t.length;)a.push(t.shift()),r--;return t.length&&a.push(t.join(":")),a}function ge(t,r,a,c){this.j=t,this.i=r,this.l=a,this.S=c||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xi}function xi(){this.i=null,this.g="",this.h=!1}var Ui={},Cn={};function Pn(t,r,a){t.M=1,t.A=xt(ie(r)),t.u=a,t.R=!0,$i(t,null)}function $i(t,r){t.F=Date.now(),Mt(t),t.B=ie(t.A);var a=t.B,c=t.S;Array.isArray(c)||(c=[String(c)]),Yi(a.i,"t",c),t.C=0,a=t.j.L,t.h=new xi,t.g=gs(t.j,a?r:null,!t.u),t.P>0&&(t.O=new to(E(t.Y,t,t.g),t.P)),r=t.V,a=t.g,c=t.ba;var _="readystatechange";Array.isArray(_)||(_&&(Ci[0]=_.toString()),_=Ci);for(let b=0;b<_.length;b++){const I=Ii(a,_[b],c||r.handleEvent,!1,r.h||r);if(!I)break;r.g[I.key]=I}r=t.J?wi(t.J):{},t.u?(t.v||(t.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,r)):(t.v="GET",t.g.ea(t.B,t.v,null,r)),it(),ro(t.i,t.v,t.B,t.l,t.S,t.u)}ge.prototype.ba=function(t){t=t.target;const r=this.O;r&&ve(t)==3?r.j():this.Y(t)},ge.prototype.Y=function(t){try{if(t==this.g)e:{const k=ve(this.g),V=this.g.ya(),M=this.g.ca();if(!(k<3)&&(k!=3||this.g&&(this.h.h||this.g.la()||ss(this.g)))){this.K||k!=4||V==7||(V==8||M<=0?it(3):it(2)),Dn(this);var r=this.g.ca();this.X=r;var a=uo(this);if(this.o=r==200,oo(this.i,this.v,this.B,this.l,this.S,k,r),this.o){if(this.U&&!this.L){t:{if(this.g){var c,_=this.g;if((c=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(c)){var b=c;break t}}b=null}if(t=b)ze(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Nn(this,t);else{this.o=!1,this.m=3,W(12),De(this),at(this);break e}}if(this.R){t=!0;let H;for(;!this.K&&this.C<a.length;)if(H=fo(this,a),H==Cn){k==4&&(this.m=4,W(14),t=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(H==Ui){this.m=4,W(15),ze(this.i,this.l,a,"[Invalid Chunk]"),t=!1;break}else ze(this.i,this.l,H,null),Nn(this,H);if(Bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),k!=4||a.length!=0||this.h.h||(this.m=1,W(16),t=!1),this.o=this.o&&t,!t)ze(this.i,this.l,a,"[Invalid Chunked Response]"),De(this),at(this);else if(a.length>0&&!this.W){this.W=!0;var I=this.j;I.g==this&&I.aa&&!I.P&&(I.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Bn(I),I.P=!0,W(11))}}else ze(this.i,this.l,a,null),Nn(this,a);k==4&&De(this),this.o&&!this.K&&(k==4?us(this.j,this):(this.o=!1,Mt(this)))}else ko(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,W(12)):(this.m=0,W(13)),De(this),at(this)}}}catch{}finally{}};function uo(t){if(!Bi(t))return t.g.la();const r=ss(t.g);if(r==="")return"";let a="";const c=r.length,_=ve(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return De(t),at(t),"";t.h.i=new h.TextDecoder}for(let b=0;b<c;b++)t.h.h=!0,a+=t.h.i.decode(r[b],{stream:!(_&&b==c-1)});return r.length=0,t.h.g+=a,t.C=0,t.h.g}function Bi(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function fo(t,r){var a=t.C,c=r.indexOf(`
`,a);return c==-1?Cn:(a=Number(r.substring(a,c)),isNaN(a)?Ui:(c+=1,c+a>r.length?Cn:(r=r.slice(c,c+a),t.C=c+a,r)))}ge.prototype.cancel=function(){this.K=!0,De(this)};function Mt(t){t.T=Date.now()+t.H,Fi(t,t.H)}function Fi(t,r){if(t.D!=null)throw Error("WatchDog timer not null");t.D=st(E(t.aa,t),r)}function Dn(t){t.D&&(h.clearTimeout(t.D),t.D=null)}ge.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(ao(this.i,this.B),this.M!=2&&(it(),W(17)),De(this),this.m=2,at(this)):Fi(this,this.T-t)};function at(t){t.j.I==0||t.K||us(t.j,t)}function De(t){Dn(t);var r=t.O;r&&typeof r.dispose=="function"&&r.dispose(),t.O=null,Pi(t.V),t.g&&(r=t.g,t.g=null,r.abort(),r.dispose())}function Nn(t,r){try{var a=t.j;if(a.I!=0&&(a.g==t||Rn(a.h,t))){if(!t.L&&Rn(a.h,t)&&a.I==3){try{var c=a.Ba.g.parse(r)}catch{c=null}if(Array.isArray(c)&&c.length==3){var _=c;if(_[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<t.F)jt(a),Bt(a);else break e;$n(a),W(18)}}else a.xa=_[1],0<a.xa-a.K&&_[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=st(E(a.Va,a),6e3));Hi(a.h)<=1&&a.ta&&(a.ta=void 0)}else Re(a,11)}else if((t.L||a.g==t)&&jt(a),!d(r))for(_=a.Ba.g.parse(r),r=0;r<_.length;r++){let M=_[r];const H=M[0];if(!(H<=a.K))if(a.K=H,M=M[1],a.I==2)if(M[0]=="c"){a.M=M[1],a.ba=M[2];const se=M[3];se!=null&&(a.ka=se,a.j.info("VER="+a.ka));const Le=M[4];Le!=null&&(a.za=Le,a.j.info("SVER="+a.za));const _e=M[5];_e!=null&&typeof _e=="number"&&_e>0&&(c=1.5*_e,a.O=c,a.j.info("backChannelRequestTimeoutMs_="+c)),c=a;const we=t.g;if(we){const Vt=we.g?we.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vt){var b=c.h;b.g||Vt.indexOf("spdy")==-1&&Vt.indexOf("quic")==-1&&Vt.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ln(b,b.h),b.h=null))}if(c.G){const Fn=we.g?we.g.getResponseHeader("X-HTTP-Session-Id"):null;Fn&&(c.wa=Fn,U(c.J,c.G,Fn))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-t.F,a.j.info("Handshake RTT: "+a.T+"ms")),c=a;var I=t;if(c.na=ps(c,c.L?c.ba:null,c.W),I.L){qi(c.h,I);var k=I,V=c.O;V&&(k.H=V),k.D&&(Dn(k),Mt(k)),c.g=I}else cs(c);a.i.length>0&&Ft(a)}else M[0]!="stop"&&M[0]!="close"||Re(a,7);else a.I==3&&(M[0]=="stop"||M[0]=="close"?M[0]=="stop"?Re(a,7):Un(a):M[0]!="noop"&&a.l&&a.l.qa(M),a.A=0)}}it(4)}catch{}}var po=class{constructor(t,r){this.g=t,this.map=r}};function ji(t){this.l=t||10,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hi(t){return t.h?1:t.g?t.g.size:0}function Rn(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function Ln(t,r){t.g?t.g.add(r):t.h=r}function qi(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}ji.prototype.cancel=function(){if(this.i=zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zi(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const a of t.g.values())r=r.concat(a.G);return r}return B(t.i)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function go(t,r){if(t){t=t.split("&");for(let a=0;a<t.length;a++){const c=t[a].indexOf("=");let _,b=null;c>=0?(_=t[a].substring(0,c),b=t[a].substring(c+1)):_=t[a],r(_,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function me(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;t instanceof me?(this.l=t.l,lt(this,t.j),this.o=t.o,this.g=t.g,ct(this,t.u),this.h=t.h,On(this,Qi(t.i)),this.m=t.m):t&&(r=String(t).match(Wi))?(this.l=!1,lt(this,r[1]||"",!0),this.o=ht(r[2]||""),this.g=ht(r[3]||"",!0),ct(this,r[4]),this.h=ht(r[5]||"",!0),On(this,r[6]||"",!0),this.m=ht(r[7]||"")):(this.l=!1,this.i=new dt(null,this.l))}me.prototype.toString=function(){const t=[];var r=this.j;r&&t.push(ut(r,Gi,!0),":");var a=this.g;return(a||r=="file")&&(t.push("//"),(r=this.o)&&t.push(ut(r,Gi,!0),"@"),t.push(ot(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&t.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(ut(a,a.charAt(0)=="/"?vo:yo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",ut(a,wo)),t.join("")},me.prototype.resolve=function(t){const r=ie(this);let a=!!t.j;a?lt(r,t.j):a=!!t.o,a?r.o=t.o:a=!!t.g,a?r.g=t.g:a=t.u!=null;var c=t.h;if(a)ct(r,t.u);else if(a=!!t.h){if(c.charAt(0)!="/")if(this.g&&!this.h)c="/"+c;else{var _=r.h.lastIndexOf("/");_!=-1&&(c=r.h.slice(0,_+1)+c)}if(_=c,_==".."||_==".")c="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){c=_.lastIndexOf("/",0)==0,_=_.split("/");const b=[];for(let I=0;I<_.length;){const k=_[I++];k=="."?c&&I==_.length&&b.push(""):k==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),c&&I==_.length&&b.push("")):(b.push(k),c=!0)}c=b.join("/")}else c=_}return a?r.h=c:a=t.i.toString()!=="",a?On(r,Qi(t.i)):a=!!t.m,a&&(r.m=t.m),r};function ie(t){return new me(t)}function lt(t,r,a){t.j=a?ht(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function ct(t,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);t.u=r}else t.u=null}function On(t,r,a){r instanceof dt?(t.i=r,bo(t.i,t.l)):(a||(r=ut(r,_o)),t.i=new dt(r,t.l))}function U(t,r,a){t.i.set(r,a)}function xt(t){return U(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function ht(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ut(t,r,a){return typeof t=="string"?(t=encodeURI(t).replace(r,mo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gi=/[#\/\?@]/g,yo=/[#\?:]/g,vo=/[#\?]/g,_o=/[#\?@]/g,wo=/#/g;function dt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function Ne(t){t.g||(t.g=new Map,t.h=0,t.i&&go(t.i,function(r,a){t.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}n=dt.prototype,n.add=function(t,r){Ne(this),this.i=null,t=We(this,t);let a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(r),this.h+=1,this};function Ki(t,r){Ne(t),r=We(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function Ji(t,r){return Ne(t),r=We(t,r),t.g.has(r)}n.forEach=function(t,r){Ne(this),this.g.forEach(function(a,c){a.forEach(function(_){t.call(r,_,c,this)},this)},this)};function Xi(t,r){Ne(t);let a=[];if(typeof r=="string")Ji(t,r)&&(a=a.concat(t.g.get(We(t,r))));else for(t=Array.from(t.g.values()),r=0;r<t.length;r++)a=a.concat(t[r]);return a}n.set=function(t,r){return Ne(this),this.i=null,t=We(this,t),Ji(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},n.get=function(t,r){return t?(t=Xi(this,t),t.length>0?String(t[0]):r):r};function Yi(t,r,a){Ki(t,r),a.length>0&&(t.i=null,t.g.set(We(t,r),B(a)),t.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(let c=0;c<r.length;c++){var a=r[c];const _=ot(a);a=Xi(this,a);for(let b=0;b<a.length;b++){let I=_;a[b]!==""&&(I+="="+ot(a[b])),t.push(I)}}return this.i=t.join("&")};function Qi(t){const r=new dt;return r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),r}function We(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function bo(t,r){r&&!t.j&&(Ne(t),t.i=null,t.g.forEach(function(a,c){const _=c.toLowerCase();c!=_&&(Ki(this,c),Yi(this,_,a))},t)),t.j=r}function Eo(t,r){const a=new rt;if(h.Image){const c=new Image;c.onload=S(ye,a,"TestLoadImage: loaded",!0,r,c),c.onerror=S(ye,a,"TestLoadImage: error",!1,r,c),c.onabort=S(ye,a,"TestLoadImage: abort",!1,r,c),c.ontimeout=S(ye,a,"TestLoadImage: timeout",!1,r,c),h.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else r(!1)}function Io(t,r){const a=new rt,c=new AbortController,_=setTimeout(()=>{c.abort(),ye(a,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:c.signal}).then(b=>{clearTimeout(_),b.ok?ye(a,"TestPingServer: ok",!0,r):ye(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(_),ye(a,"TestPingServer: error",!1,r)})}function ye(t,r,a,c,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),c(a)}catch{}}function So(){this.g=new io}function Mn(t){this.i=t.Sb||null,this.h=t.ab||!1}A(Mn,Di),Mn.prototype.g=function(){return new Ut(this.i,this.h)};function Ut(t,r){q.call(this),this.H=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(Ut,q),n=Ut.prototype,n.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=r,this.readyState=1,pt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(r.body=t),(this.H||h).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ft(this)),this.readyState=0},n.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pt(this)),this.g&&(this.readyState=3,pt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zi(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zi(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}n.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?ft(this):pt(this),this.readyState==3&&Zi(this)}},n.Oa=function(t){this.g&&(this.response=this.responseText=t,ft(this))},n.Na=function(t){this.g&&(this.response=t,ft(this))},n.ga=function(){this.g&&ft(this)};function ft(t){t.readyState=4,t.l=null,t.j=null,t.B=null,pt(t)}n.setRequestHeader=function(t,r){this.A.append(t,r)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=r.next();return t.join(`\r
`)};function pt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ut.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function es(t){let r="";return Rt(t,function(a,c){r+=c,r+=":",r+=a,r+=`\r
`}),r}function xn(t,r,a){e:{for(c in a){var c=!1;break e}c=!0}c||(a=es(a),typeof t=="string"?a!=null&&ot(a):U(t,r,a))}function F(t){q.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(F,q);var Ao=/^https?$/i,To=["POST","PUT"];n=F.prototype,n.Fa=function(t){this.H=t},n.ea=function(t,r,a,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mi.g(),this.g.onreadystatechange=T(E(this.Ca,this));try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(b){ts(this,b);return}if(t=a||"",a=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var _ in c)a.set(_,c[_]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const b of c.keys())a.set(b,c.get(b));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(a.keys()).find(b=>b.toLowerCase()=="content-type"),_=h.FormData&&t instanceof h.FormData,!(Array.prototype.indexOf.call(To,r,void 0)>=0)||c||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,I]of a)this.g.setRequestHeader(b,I);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(b){ts(this,b)}};function ts(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.o=5,ns(t),$t(t)}function ns(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,z(this,"complete"),z(this,"abort"),$t(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$t(this,!0)),F.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?is(this):this.Xa())},n.Xa=function(){is(this)};function is(t){if(t.h&&typeof l<"u"){if(t.v&&ve(t)==4)setTimeout(t.Ca.bind(t),0);else if(z(t,"readystatechange"),ve(t)==4){t.h=!1;try{const b=t.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var a;if(!(a=r)){var c;if(c=b===0){let I=String(t.D).match(Wi)[1]||null;!I&&h.self&&h.self.location&&(I=h.self.location.protocol.slice(0,-1)),c=!Ao.test(I?I.toLowerCase():"")}a=c}if(a)z(t,"complete"),z(t,"success");else{t.o=6;try{var _=ve(t)>2?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.ca()+"]",ns(t)}}finally{$t(t)}}}}function $t(t,r){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const a=t.g;t.g=null,r||z(t,"ready");try{a.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ve(t){return t.g?t.g.readyState:0}n.ca=function(){try{return ve(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),no(r)}};function ss(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ko(t){const r={};t=(t.g&&ve(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(d(t[c]))continue;var a=ho(t[c]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const b=r[_]||[];r[_]=b,b.push(a)}Xr(r,function(c){return c.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gt(t,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||r}function rs(t){this.za=0,this.i=[],this.j=new rt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gt("baseRetryDelayMs",5e3,t),this.Za=gt("retryDelaySeedMs",1e4,t),this.Ta=gt("forwardChannelMaxRetries",2,t),this.va=gt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new ji(t&&t.concurrentRequestLimit),this.Ba=new So,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=rs.prototype,n.ka=8,n.I=1,n.connect=function(t,r,a,c){W(0),this.W=t,this.H=r||{},a&&c!==void 0&&(this.H.OSID=a,this.H.OAID=c),this.F=this.X,this.J=ps(this,null,this.W),Ft(this)};function Un(t){if(os(t),t.I==3){var r=t.V++,a=ie(t.J);if(U(a,"SID",t.M),U(a,"RID",r),U(a,"TYPE","terminate"),mt(t,a),r=new ge(t,t.j,r),r.M=2,r.A=xt(ie(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(r.A.toString(),"")}catch{}!a&&h.Image&&(new Image().src=r.A,a=!0),a||(r.g=gs(r.j,null),r.g.ea(r.A)),r.F=Date.now(),Mt(r)}fs(t)}function Bt(t){t.g&&(Bn(t),t.g.cancel(),t.g=null)}function os(t){Bt(t),t.v&&(h.clearTimeout(t.v),t.v=null),jt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&h.clearTimeout(t.m),t.m=null)}function Ft(t){if(!Vi(t.h)&&!t.m){t.m=!0;var r=t.Ea;pe||u(),X||(pe(),X=!0),m.add(r,t),t.D=0}}function Co(t,r){return Hi(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=r.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=st(E(t.Ea,t,r),ds(t,t.D)),t.D++,!0)}n.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const _=new ge(this,this.j,t);let b=this.o;if(this.U&&(b?(b=wi(b),Ei(b,this.U)):b=this.U),this.u!==null||this.R||(_.J=b,b=null),this.S)e:{for(var r=0,a=0;a<this.i.length;a++){t:{var c=this.i[a];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(r+=c,r>4096){r=a;break e}if(r===4096||a===this.i.length-1){r=a+1;break e}}r=1e3}else r=1e3;r=ls(this,_,r),a=ie(this.J),U(a,"RID",t),U(a,"CVER",22),this.G&&U(a,"X-HTTP-Session-Id",this.G),mt(this,a),b&&(this.R?r="headers="+ot(es(b))+"&"+r:this.u&&xn(a,this.u,b)),Ln(this.h,_),this.Ra&&U(a,"TYPE","init"),this.S?(U(a,"$req",r),U(a,"SID","null"),_.U=!0,Pn(_,a,null)):Pn(_,a,r),this.I=2}}else this.I==3&&(t?as(this,t):this.i.length==0||Vi(this.h)||as(this))};function as(t,r){var a;r?a=r.l:a=t.V++;const c=ie(t.J);U(c,"SID",t.M),U(c,"RID",a),U(c,"AID",t.K),mt(t,c),t.u&&t.o&&xn(c,t.u,t.o),a=new ge(t,t.j,a,t.D+1),t.u===null&&(a.J=t.o),r&&(t.i=r.G.concat(t.i)),r=ls(t,a,1e3),a.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Ln(t.h,a),Pn(a,c,r)}function mt(t,r){t.H&&Rt(t.H,function(a,c){U(r,c,a)}),t.l&&Rt({},function(a,c){U(r,c,a)})}function ls(t,r,a){a=Math.min(t.i.length,a);const c=t.l?E(t.l.Ka,t.l,t):null;e:{var _=t.i;let k=-1;for(;;){const V=["count="+a];k==-1?a>0?(k=_[0].g,V.push("ofs="+k)):k=0:V.push("ofs="+k);let M=!0;for(let H=0;H<a;H++){var b=_[H].g;const se=_[H].map;if(b-=k,b<0)k=Math.max(0,_[H].g-100),M=!1;else try{b="req"+b+"_"||"";try{var I=se instanceof Map?se:Object.entries(se);for(const[Le,_e]of I){let we=_e;g(_e)&&(we=En(_e)),V.push(b+Le+"="+encodeURIComponent(we))}}catch(Le){throw V.push(b+"type="+encodeURIComponent("_badmap")),Le}}catch{c&&c(se)}}if(M){I=V.join("&");break e}}I=void 0}return t=t.i.splice(0,a),r.G=t,I}function cs(t){if(!t.g&&!t.v){t.Y=1;var r=t.Da;pe||u(),X||(pe(),X=!0),m.add(r,t),t.A=0}}function $n(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=st(E(t.Da,t),ds(t,t.A)),t.A++,!0)}n.Da=function(){if(this.v=null,hs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=st(E(this.Wa,this),t)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,W(10),Bt(this),hs(this))};function Bn(t){t.B!=null&&(h.clearTimeout(t.B),t.B=null)}function hs(t){t.g=new ge(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var r=ie(t.na);U(r,"RID","rpc"),U(r,"SID",t.M),U(r,"AID",t.K),U(r,"CI",t.F?"0":"1"),!t.F&&t.ia&&U(r,"TO",t.ia),U(r,"TYPE","xmlhttp"),mt(t,r),t.u&&t.o&&xn(r,t.u,t.o),t.O&&(t.g.H=t.O);var a=t.g;t=t.ba,a.M=1,a.A=xt(ie(r)),a.u=null,a.R=!0,$i(a,t)}n.Va=function(){this.C!=null&&(this.C=null,Bt(this),$n(this),W(19))};function jt(t){t.C!=null&&(h.clearTimeout(t.C),t.C=null)}function us(t,r){var a=null;if(t.g==r){jt(t),Bn(t),t.g=null;var c=2}else if(Rn(t.h,r))a=r.G,qi(t.h,r),c=1;else return;if(t.I!=0){if(r.o)if(c==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var _=t.D;c=An(),z(c,new Oi(c,a)),Ft(t)}else cs(t);else if(_=r.m,_==3||_==0&&r.X>0||!(c==1&&Co(t,r)||c==2&&$n(t)))switch(a&&a.length>0&&(r=t.h,r.i=r.i.concat(a)),_){case 1:Re(t,5);break;case 4:Re(t,10);break;case 3:Re(t,6);break;default:Re(t,2)}}}function ds(t,r){let a=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(a*=2),a*r}function Re(t,r){if(t.j.info("Error code "+r),r==2){var a=E(t.bb,t),c=t.Ua;const _=!c;c=new me(c||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||lt(c,"https"),xt(c),_?Eo(c.toString(),a):Io(c.toString(),a)}else W(2);t.I=0,t.l&&t.l.pa(r),fs(t),os(t)}n.bb=function(t){t?(this.j.info("Successfully pinged google.com"),W(2)):(this.j.info("Failed to ping google.com"),W(1))};function fs(t){if(t.I=0,t.ja=[],t.l){const r=zi(t.h);(r.length!=0||t.i.length!=0)&&($(t.ja,r),$(t.ja,t.i),t.h.i.length=0,B(t.i),t.i.length=0),t.l.oa()}}function ps(t,r,a){var c=a instanceof me?ie(a):new me(a);if(c.g!="")r&&(c.g=r+"."+c.g),ct(c,c.u);else{var _=h.location;c=_.protocol,r=r?r+"."+_.hostname:_.hostname,_=+_.port;const b=new me(null);c&&lt(b,c),r&&(b.g=r),_&&ct(b,_),a&&(b.h=a),c=b}return a=t.G,r=t.wa,a&&r&&U(c,a,r),U(c,"VER",t.ka),mt(t,c),c}function gs(t,r,a){if(r&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Aa&&!t.ma?new F(new Mn({ab:a})):new F(t.ma),r.Fa(t.L),r}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ms(){}n=ms.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Y(t,r){q.call(this),this.g=new rs(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(t?t["X-WebChannel-Client-Profile"]=r.sa:t={"X-WebChannel-Client-Profile":r.sa}),this.g.U=t,(t=r&&r.Qb)&&!d(t)&&(this.g.u=t),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!d(r)&&(this.g.G=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new Ge(this)}A(Y,q),Y.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Y.prototype.close=function(){Un(this.g)},Y.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.v&&(a={},a.__data__=En(t),t=a);r.i.push(new po(r.Ya++,t)),r.I==3&&Ft(r)},Y.prototype.N=function(){this.g.l=null,delete this.j,Un(this.g),delete this.g,Y.Z.N.call(this)};function ys(t){In.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const a in r){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}A(ys,In);function vs(){Sn.call(this),this.status=1}A(vs,Sn);function Ge(t){this.g=t}A(Ge,ms),Ge.prototype.ra=function(){z(this.g,"a")},Ge.prototype.qa=function(t){z(this.g,new ys(t))},Ge.prototype.pa=function(t){z(this.g,new vs)},Ge.prototype.oa=function(){z(this.g,"b")},Y.prototype.send=Y.prototype.o,Y.prototype.open=Y.prototype.m,Y.prototype.close=Y.prototype.close,Tn.NO_ERROR=0,Tn.TIMEOUT=8,Tn.HTTP_ERROR=6,co.COMPLETE="complete",so.EventType=nt,nt.OPEN="a",nt.CLOSE="b",nt.ERROR="c",nt.MESSAGE="d",q.prototype.listen=q.prototype.J,F.prototype.listenOnce=F.prototype.K,F.prototype.getLastError=F.prototype.Ha,F.prototype.getLastErrorCode=F.prototype.ya,F.prototype.getStatus=F.prototype.ca,F.prototype.getResponseJson=F.prototype.La,F.prototype.getResponseText=F.prototype.la,F.prototype.send=F.prototype.ea,F.prototype.setWithCredentials=F.prototype.Fa}).apply(typeof Ht<"u"?Ht:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class J{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
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
 */let un="12.12.0";function il(n){un=n}/**
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
 */const Yt=new ai("@firebase/firestore");function te(n,...e){if(Yt.logLevel<=O.DEBUG){const i=e.map(yr);Yt.debug(`Firestore (${un}): ${n}`,...i)}}function mr(n,...e){if(Yt.logLevel<=O.ERROR){const i=e.map(yr);Yt.error(`Firestore (${un}): ${n}`,...i)}}function yr(n){if(typeof n=="string")return n;try{return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
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
 */function Qt(n,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,vr(n,s,i)}function vr(n,e,i){let s=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(i!==void 0)try{s+=" CONTEXT: "+JSON.stringify(i)}catch{s+=" CONTEXT: "+i}throw mr(s),new Error(s)}function yt(n,e,i,s){let o="Unexpected state";typeof i=="string"?o=i:s=i,n||vr(e,o,s)}/**
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
 */const R={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class L extends ke{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vt{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class sl{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(J.UNAUTHENTICATED))}shutdown(){}}class ol{constructor(e){this.t=e,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){yt(this.o===void 0,42304);let s=this.i;const o=v=>this.i!==s?(s=this.i,i(v)):Promise.resolve();let l=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vt,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const v=l;e.enqueueRetryable(async()=>{await v.promise,await o(this.currentUser)})},g=v=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(v=>g(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?g(v):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vt)}},0),h()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(yt(typeof s.accessToken=="string",31837,{l:s}),new sl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yt(e===null||typeof e=="string",2055,{h:e}),new J(e)}}class al{constructor(e,i,s){this.P=e,this.T=i,this.I=s,this.type="FirstParty",this.user=J.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ll{constructor(e,i,s){this.P=e,this.T=i,this.I=s}getToken(){return Promise.resolve(new al(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ds{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cl{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){yt(this.o===void 0,3512);const s=l=>{l.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?i(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ds(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(yt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new Ds(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hl(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let s=0;s<n;s++)i[s]=Math.floor(256*Math.random());return i}/**
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
 */class ul{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=hl(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<i&&(s+=e.charAt(o[l]%62))}return s}}function Ae(n,e){return n<e?-1:n>e?1:0}function dl(n,e){const i=Math.min(n.length,e.length);for(let s=0;s<i;s++){const o=n.charAt(s),l=e.charAt(s);if(o!==l)return Wn(o)===Wn(l)?Ae(o,l):Wn(o)?1:-1}return Ae(n.length,e.length)}const fl=55296,pl=57343;function Wn(n){const e=n.charCodeAt(0);return e>=fl&&e<=pl}/**
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
 */const Ns="__name__";class re{constructor(e,i,s){i===void 0?i=0:i>e.length&&Qt(637,{offset:i,range:e.length}),s===void 0?s=e.length-i:s>e.length-i&&Qt(1746,{length:s,range:e.length-i}),this.segments=e,this.offset=i,this.len=s}get length(){return this.len}isEqual(e){return re.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof re?e.forEach(s=>{i.push(s)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,s=this.limit();i<s;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const s=Math.min(e.length,i.length);for(let o=0;o<s;o++){const l=re.compareSegments(e.get(o),i.get(o));if(l!==0)return l}return Ae(e.length,i.length)}static compareSegments(e,i){const s=re.isNumericId(e),o=re.isNumericId(i);return s&&!o?-1:!s&&o?1:s&&o?re.extractNumericId(e).compare(re.extractNumericId(i)):dl(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hi.fromString(e.substring(4,e.length-2))}}class ee extends re{construct(e,i,s){return new ee(e,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(o=>o.length>0))}return new ee(i)}static emptyPath(){return new ee([])}}const gl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends re{construct(e,i,s){return new xe(e,i,s)}static isValidIdentifier(e){return gl.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ns}static keyField(){return new xe([Ns])}static fromServerFormat(e){const i=[];let s="",o=0;const l=()=>{if(s.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let h=!1;for(;o<e.length;){const g=e[o];if(g==="\\"){if(o+1===e.length)throw new L(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[o+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new L(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=v,o+=2}else g==="`"?(h=!h,o++):g!=="."||h?(s+=g,o++):(l(),o++)}if(l(),h)throw new L(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(i)}static emptyPath(){return new xe([])}}/**
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
 */class Ue{constructor(e){this.path=e}static fromPath(e){return new Ue(ee.fromString(e))}static fromName(e){return new Ue(ee.fromString(e).popFirst(5))}static empty(){return new Ue(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return ee.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ue(new ee(e.slice()))}}function ml(n,e,i,s){if(e===!0&&s===!0)throw new L(R.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}function yl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}/**
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
 */function j(n,e){const i={typeString:n};return e&&(i.value=e),i}function Pt(n,e){if(!yl(n))throw new L(R.INVALID_ARGUMENT,"JSON must be an object");let i;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){i=`JSON missing required field: '${s}'`;break}const h=n[s];if(o&&typeof h!==o){i=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){i=`Expected '${s}' field to equal '${l.value}'`;break}}if(i)throw new L(R.INVALID_ARGUMENT,i);return!0}/**
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
 */const Rs=-62135596800,Ls=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),s=Math.floor((e-1e3*i)*Ls);return new oe(i,s)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Rs)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ls}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pt(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rs;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:j("string",oe._jsonSchemaVersion),seconds:j("number"),nanoseconds:j("number")};function vl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class _l extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new _l("Invalid base64 string: "+l):l}}(e);return new je(i)}static fromUint8Array(e){const i=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new je(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const s=new Uint8Array(i.length);for(let o=0;o<i.length;o++)s[o]=i.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const Os="(default)";class Zt{constructor(e,i){this.projectId=e,this.database=i||Os}static empty(){return new Zt("","")}get isDefaultDatabase(){return this.database===Os}isEqual(e){return e instanceof Zt&&e.projectId===this.projectId&&e.database===this.database}}function wl(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new L(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zt(n.options.projectId,e)}/**
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
 */class bl{constructor(e,i=null,s=[],o=[],l=null,h="F",g=null,v=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=g,this.endAt=v,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function El(n){return new bl(n)}/**
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
 */var Ms,C;(C=Ms||(Ms={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new hi([4294967295,4294967295],0);/**
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
 */const Il=41943040;/**
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
 */const Sl=1048576;function Gn(){return typeof document<"u"?document:null}class Al{constructor(e,i,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=i,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const i=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,i-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class ui{constructor(e,i,s,o,l){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,s,o,l){const h=Date.now()+s,g=new ui(e,i,h,o,l);return g.start(s),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var xs,Us;(Us=xs||(xs={})).Ma="default",Us.Cache="cache";/**
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
 */function Tl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const kl="ComponentProvider",$s=new Map;/**
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
 */const Cl="firestore.googleapis.com",Bs=!0;class Fs{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cl,this.ssl=Bs}else this.host=e.host,this.ssl=e.ssl??Bs;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Il;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sl)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ml("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tl(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pl{constructor(e,i,s,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fs({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fs(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new rl;switch(s.type){case"firstParty":return new ll(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new L(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=$s.get(i);s&&(te(kl,"Removing Datastore"),$s.delete(i),s.terminate())}(this),Promise.resolve()}}/**
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
 */class di{constructor(e,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new di(this.firestore,e,this._query)}}class ae{constructor(e,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,s){if(Pt(i,ae._jsonSchema))return new ae(e,s||null,new Ue(ee.fromString(i.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:j("string",ae._jsonSchemaVersion),referencePath:j("string")};class fi extends di{constructor(e,i,s){super(e,i,El(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new Ue(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}/**
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
 */const js="AsyncQueue";class Vs{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Al(this,"async_queue_retry"),this._c=()=>{const s=Gn();s&&te(js,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const i=Gn();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const i=Gn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const i=new vt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!vl(e))throw e;te(js,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const i=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,mr("INTERNAL UNHANDLED ERROR: ",Hs(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=i,i}enqueueAfterDelay(e,i,s){this.uc(),this.oc.indexOf(e)>-1&&(i=0);const o=ui.createAndSchedule(this,e,i,s,l=>this.hc(l));return this.tc.push(o),o}uc(){this.nc&&Qt(47125,{Pc:Hs(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const i of this.tc)if(i.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.tc)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const i=this.tc.indexOf(e);this.tc.splice(i,1)}}function Hs(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Dl extends Pl{constructor(e,i,s,o){super(e,i,s,o),this.type="firestore",this._queue=new Vs,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vs(e),this._firestoreClient=void 0,await e}}}/**
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
 */class ue{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ue(je.fromBase64String(e))}catch(i){throw new L(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new ue(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ue._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pt(e,ue._jsonSchema))return ue.fromBase64String(e.bytes)}}ue._jsonSchemaVersion="firestore/bytes/1.0",ue._jsonSchema={type:j("string",ue._jsonSchemaVersion),bytes:j("string")};/**
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
 */class _r{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new L(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Be{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new L(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new L(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(e){if(Pt(e,Be._jsonSchema))return new Be(e.latitude,e.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:j("string",Be._jsonSchemaVersion),latitude:j("number"),longitude:j("number")};/**
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
 */class Fe{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Fe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pt(e,Fe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(i=>typeof i=="number"))return new Fe(e.vectorValues);throw new L(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fe._jsonSchemaVersion="firestore/vectorValue/1.0",Fe._jsonSchema={type:j("string",Fe._jsonSchemaVersion),vectorValues:j("object")};function wr(n,e,i){if((e=Ct(e))instanceof _r)return e._internalPath;if(typeof e=="string")return Rl(n,e);throw ti("Field path arguments must be of type string or ",n)}const Nl=new RegExp("[~\\*/\\[\\]]");function Rl(n,e,i){if(e.search(Nl)>=0)throw ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new _r(...e.split("."))._internalPath}catch{throw ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function ti(n,e,i,s,o){let l=`Function ${e}() called with invalid data`;l+=". ";let h="";return new L(R.INVALID_ARGUMENT,l+n+h)}const qs="@firebase/firestore",zs="4.14.0";/**
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
 */class br{constructor(e,i,s,o,l){this._firestore=e,this._userDataWriter=i,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ll(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const i=this._document.data.field(wr("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class Ll extends br{data(){return super.data()}}class qt{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ke extends br{constructor(e,i,s,o,l,h){super(e,i,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Gt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const s=this._document.data.field(wr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=Ke._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Ke._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ke._jsonSchema={type:j("string",Ke._jsonSchemaVersion),bundleSource:j("string","DocumentSnapshot"),bundleName:j("string"),bundle:j("string")};class Gt extends Ke{data(e={}){return super.data(e)}}class _t{constructor(e,i,s,o){this._firestore=e,this._userDataWriter=i,this._snapshot=o,this.metadata=new qt(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach(s=>{e.call(i,new Gt(this._firestore,this._userDataWriter,s.key,s,new qt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new L(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(g=>{const v=new Gt(o._firestore,o._userDataWriter,g.doc.key,g.doc,new qt(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:v,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>l||g.type!==3).map(g=>{const v=new Gt(o._firestore,o._userDataWriter,g.doc.key,g.doc,new qt(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let E=-1,S=-1;return g.type!==0&&(E=h.indexOf(g.doc.key),h=h.delete(g.doc.key)),g.type!==1&&(h=h.add(g.doc),S=h.indexOf(g.doc.key)),{type:Ol(g.type),doc:v,oldIndex:E,newIndex:S}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_t._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ul.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],s=[],o=[];return this.docs.forEach(l=>{l._document!==null&&(i.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ol(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qt(61501,{type:n})}}/**
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
 */_t._jsonSchemaVersion="firestore/querySnapshot/1.0",_t._jsonSchema={type:j("string",_t._jsonSchemaVersion),bundleSource:j("string","QuerySnapshot"),bundleName:j("string"),bundle:j("string")};(function(e,i=!0){il(hn),Ze(new Qe("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),g=new Dl(new ol(s.getProvider("auth-internal")),new cl(h,s.getProvider("app-check-internal")),wl(h,o),h);return l={useFetchStreams:i,...l},g._setSettings(l),g},"PUBLIC").setMultipleInstances(!0)),Se(qs,zs,e),Se(qs,zs,"esm2020")})();function Er(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ml=Er,Ir=new kt("auth","Firebase",Er());/**
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
 */const en=new ai("@firebase/auth");function xl(n,...e){en.logLevel<=O.WARN&&en.warn(`Auth (${hn}): ${n}`,...e)}function Kt(n,...e){en.logLevel<=O.ERROR&&en.error(`Auth (${hn}): ${n}`,...e)}/**
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
 */function Ws(n,...e){throw pi(n,...e)}function Sr(n,...e){return pi(n,...e)}function Ar(n,e,i){const s={...Ml(),[e]:i};return new kt("auth","Firebase",s).create(e,{appName:n.name})}function Jt(n){return Ar(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pi(n,...e){if(typeof n!="string"){const i=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(i,...s)}return Ir.create(n,...e)}function N(n,e,...i){if(!n)throw pi(e,...i)}function wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kt(e),new Error(e)}function tn(n,e){n||wt(e)}function Ul(){return Gs()==="http:"||Gs()==="https:"}function Gs(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function $l(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ul()||jo()||"connection"in navigator)?navigator.onLine:!0}function Bl(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Dt{constructor(e,i){this.shortDelay=e,this.longDelay=i,tn(i>e,"Short delay should be less than long delay!"),this.isMobile=Bo()||Vo()}get(){return $l()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fl(n,e){tn(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class Tr{static initialize(e,i,s){this.fetchImpl=e,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vl=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hl=new Dt(3e4,6e4);function kr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function dn(n,e,i,s,o={}){return Cr(n,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const g=hr({key:n.config.apiKey,...h}).slice(1),v=await n._getAdditionalHeaders();v["Content-Type"]="application/json",n.languageCode&&(v["X-Firebase-Locale"]=n.languageCode);const E={method:e,headers:v,...l};return Fo()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&ur(n.emulatorConfig.host)&&(E.credentials="include"),Tr.fetch()(await Pr(n,n.config.apiHost,i,g),E)})}async function Cr(n,e,i){n._canInitEmulator=!1;const s={...jl,...e};try{const o=new ql(n),l=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw zt(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const g=l.ok?h.errorMessage:h.error.message,[v,E]=g.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw zt(n,"credential-already-in-use",h);if(v==="EMAIL_EXISTS")throw zt(n,"email-already-in-use",h);if(v==="USER_DISABLED")throw zt(n,"user-disabled",h);const S=s[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw Ar(n,S,E);Ws(n,S)}}catch(o){if(o instanceof ke)throw o;Ws(n,"network-request-failed",{message:String(o)})}}async function Pr(n,e,i,s){const o=`${e}${i}?${s}`,l=n,h=l.config.emulator?Fl(n.config,o):`${n.config.apiScheme}://${o}`;return Vl.includes(i)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class ql{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,s)=>{this.timer=setTimeout(()=>s(Sr(this.auth,"network-request-failed")),Hl.get())})}}function zt(n,e,i){const s={appName:n.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);const o=Sr(n,e,s);return o.customData._tokenResponse=i,o}/**
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
 */async function zl(n,e){return dn(n,"POST","/v1/accounts:delete",e)}async function nn(n,e){return dn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function bt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wl(n,e=!1){const i=Ct(n),s=await i.getIdToken(e),o=Dr(s);N(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:bt(Kn(o.auth_time)),issuedAtTime:bt(Kn(o.iat)),expirationTime:bt(Kn(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Kn(n){return Number(n)*1e3}function Dr(n){const[e,i,s]=n.split(".");if(e===void 0||i===void 0||s===void 0)return Kt("JWT malformed, contained fewer than 3 sections"),null;try{const o=cr(i);return o?JSON.parse(o):(Kt("Failed to decode base64 JWT payload"),null)}catch(o){return Kt("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ks(n){const e=Dr(n);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ni(n,e,i=!1){if(i)return e;try{return await e}catch(s){throw s instanceof ke&&Gl(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Gl({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Kl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ii{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=bt(this.lastLoginAt),this.creationTime=bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sn(n){var A;const e=n.auth,i=await n.getIdToken(),s=await ni(n,nn(e,{idToken:i}));N(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const l=(A=o.providerUserInfo)!=null&&A.length?Nr(o.providerUserInfo):[],h=Xl(n.providerData,l),g=n.isAnonymous,v=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),E=g?v:!1,S={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new ii(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(n,S)}async function Jl(n){const e=Ct(n);await sn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xl(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Nr(n){return n.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
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
 */async function Yl(n,e){const i=await Cr(n,{},async()=>{const s=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await Pr(n,o,"/v1/token",`key=${l}`),g=await n._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:g,body:s};return n.emulatorConfig&&ur(n.emulatorConfig.host)&&(v.credentials="include"),Tr.fetch()(h,v)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Ql(n,e){return dn(n,"POST","/v2/accounts:revokeToken",kr(n,e))}/**
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
 */class Je{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ks(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){N(e.length!==0,"internal-error");const i=Ks(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(N(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:s,refreshToken:o,expiresIn:l}=await Yl(e,i);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,i,s){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,i){const{refreshToken:s,accessToken:o,expirationTime:l}=i,h=new Je;return s&&(N(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(N(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(N(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Je,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
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
 */function be(n,e){N(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class le{constructor({uid:e,auth:i,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new Kl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ii(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const i=await ni(this,this.stsTokenManager.getToken(this.auth,e));return N(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Wl(this,e)}reload(){return Jl(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new le({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),i&&await sn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(Jt(this.auth));const e=await this.getIdToken();return await ni(this,zl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const s=i.displayName??void 0,o=i.email??void 0,l=i.phoneNumber??void 0,h=i.photoURL??void 0,g=i.tenantId??void 0,v=i._redirectEventId??void 0,E=i.createdAt??void 0,S=i.lastLoginAt??void 0,{uid:A,emailVerified:T,isAnonymous:B,providerData:$,stsTokenManager:D}=i;N(A&&D,e,"internal-error");const x=Je.fromJSON(this.name,D);N(typeof A=="string",e,"internal-error"),be(s,e.name),be(o,e.name),N(typeof T=="boolean",e,"internal-error"),N(typeof B=="boolean",e,"internal-error"),be(l,e.name),be(h,e.name),be(g,e.name),be(v,e.name),be(E,e.name),be(S,e.name);const K=new le({uid:A,auth:e,email:o,emailVerified:T,displayName:s,isAnonymous:B,photoURL:h,phoneNumber:l,tenantId:g,stsTokenManager:x,createdAt:E,lastLoginAt:S});return $&&Array.isArray($)&&(K.providerData=$.map(Q=>({...Q}))),v&&(K._redirectEventId=v),K}static async _fromIdTokenResponse(e,i,s=!1){const o=new Je;o.updateFromServerResponse(i);const l=new le({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await sn(l),l}static async _fromGetAccountInfoResponse(e,i,s){const o=i.users[0];N(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Nr(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),g=new Je;g.updateFromIdToken(s);const v=new le({uid:o.localId,auth:e,stsTokenManager:g,isAnonymous:h}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ii(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(v,E),v}}/**
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
 */const Js=new Map;function $e(n){tn(n instanceof Function,"Expected a class definition");let e=Js.get(n);return e?(tn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Js.set(n,e),e)}/**
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
 */class Rr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Rr.type="NONE";const Xs=Rr;/**
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
 */function Jn(n,e,i){return`firebase:${n}:${e}:${i}`}class Xe{constructor(e,i,s){this.persistence=e,this.auth=i,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Jn(this.userKey,o.apiKey,l),this.fullPersistenceKey=Jn("persistence",o.apiKey,l),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await nn(this.auth,{idToken:e}).catch(()=>{});return i?le._fromGetAccountInfoResponse(this.auth,i,e):null}return le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,s="authUser"){if(!i.length)return new Xe($e(Xs),e,s);const o=(await Promise.all(i.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let l=o[0]||$e(Xs);const h=Jn(s,e.config.apiKey,e.name);let g=null;for(const E of i)try{const S=await E._get(h);if(S){let A;if(typeof S=="string"){const T=await nn(e,{idToken:S}).catch(()=>{});if(!T)break;A=await le._fromGetAccountInfoResponse(e,T,S)}else A=le._fromJSON(e,S);E!==l&&(g=A),l=E;break}}catch{}const v=o.filter(E=>E._shouldAllowMigration);return!l._shouldAllowMigration||!v.length?new Xe(l,e,s):(l=v[0],g&&await l._set(h,g.toJSON()),await Promise.all(i.map(async E=>{if(E!==l)try{await E._remove(h)}catch{}})),new Xe(l,e,s))}}/**
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
 */function Ys(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sc(e))return"Blackberry";if(rc(e))return"Webos";if(ec(e))return"Safari";if((e.includes("chrome/")||tc(e))&&!e.includes("edge/"))return"Chrome";if(ic(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(i);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zl(n=ce()){return/firefox\//i.test(n)}function ec(n=ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tc(n=ce()){return/crios\//i.test(n)}function nc(n=ce()){return/iemobile/i.test(n)}function ic(n=ce()){return/android/i.test(n)}function sc(n=ce()){return/blackberry/i.test(n)}function rc(n=ce()){return/webos/i.test(n)}/**
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
 */function Lr(n,e=[]){let i;switch(n){case"Browser":i=Ys(ce());break;case"Worker":i=`${Ys(ce())}-${n}`;break;default:i=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${hn}/${s}`}/**
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
 */class oc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const s=l=>new Promise((h,g)=>{try{const v=e(l);h(v)}catch(v){g(v)}});s.onAbort=i,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ac(n,e={}){return dn(n,"GET","/v2/passwordPolicy",kr(n,e))}/**
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
 */const lc=6;class cc{constructor(e){var s;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??lc,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=e.length>=s),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,i,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class hc{constructor(e,i,s,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qs(this),this.idTokenSubscription=new Qs(this),this.beforeStateQueue=new oc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ir,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=$e(i)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Xe.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await nn(this,{idToken:e}),s=await le._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(s)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Me(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(g,g))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(l=this.redirectUser)==null?void 0:l._redirectEventId,g=s==null?void 0:s._redirectEventId,v=await this.tryRedirectSignIn(e);(!h||h===g)&&(v!=null&&v.user)&&(s=v.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(h){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await sn(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(Jt(this));const i=e?Ct(e):null;return i&&N(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($e(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ac(this),i=new cc(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kt("auth","Firebase",e())}onAuthStateChanged(e,i,s){return this.registerStateListener(this.authStateSubscription,e,i,s)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,s){return this.registerStateListener(this.idTokenSubscription,e,i,s)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ql(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,i){const s=await this.getOrInitRedirectPersistenceManager(i);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&$e(e)||this._popupRedirectResolver;N(i,this,"argument-error"),this.redirectPersistenceManager=await Xe.create(this,[$e(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,s;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)==null?void 0:i._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((i=this.currentUser)==null?void 0:i.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,s,o){if(this._deleted)return()=>{};const l=typeof i=="function"?i:i.next.bind(i);let h=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(g,this,"internal-error"),g.then(()=>{h||l(this.currentUser)}),typeof i=="function"){const v=e.addObserver(i,s,o);return()=>{h=!0,v()}}else{const v=e.addObserver(i);return()=>{h=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());i&&(e["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var i;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((i=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getToken());return e!=null&&e.error&&xl(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function uc(n){return Ct(n)}class Qs{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ko(i=>this.observer=i)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dc(n,e){const i=(e==null?void 0:e.persistence)||[],s=(Array.isArray(i)?i:[i]).map($e);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Dt(3e4,6e4);/**
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
 */new Dt(5e3,15e3);var Zs="@firebase/auth",er="1.13.0";/**
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
 */class fc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pc(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gc(n){Ze(new Qe("auth",(e,{options:i})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:g}=s.options;N(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const v={apiKey:h,authDomain:g,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lr(n)},E=new hc(s,o,l,v);return dc(E,i),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,s)=>{e.getProvider("auth-internal").initialize()})),Ze(new Qe("auth-internal",e=>{const i=uc(e.getProvider("auth").getImmediate());return(s=>new fc(s))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(Zs,er,pc(n)),Se(Zs,er,"esm2020")}/**
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
 */const mc=5*60;$o("authIdTokenMaxAge");gc("Browser");console.warn("⚠️ Firebase未設定。.envファイルにAPIキーを設定してください。");function yc(n){return new Date(n).toISOString().split("T")[0]}function rn(n){const e=new Date(n),i=["日","月","火","水","木","金","土"];return`${e.getMonth()+1}月${e.getDate()}日（${i[e.getDay()]}）`}function It(){return yc(new Date)}function Or(){return Date.now().toString(36)+Math.random().toString(36).slice(2,9)}function Mr(n,e,i,s){const l=Wt(i-n),h=Wt(s-e),g=Math.sin(l/2)**2+Math.cos(Wt(n))*Math.cos(Wt(i))*Math.sin(h/2)**2;return 6371*2*Math.atan2(Math.sqrt(g),Math.sqrt(1-g))}function Wt(n){return n*(Math.PI/180)}function fe(n){const e=document.createElement("div");return e.textContent=n,e.innerHTML}function P(n,e="info",i=3e3){const s=document.getElementById("toast-container"),o={success:"check_circle",error:"error",warning:"warning",info:"info"},l=document.createElement("div");l.className=`toast ${e}`,l.innerHTML=`
    <span class="material-icons-round toast-icon">${o[e]||"info"}</span>
    <span>${fe(n)}</span>
  `,s.appendChild(l),setTimeout(()=>{l.style.opacity="0",l.style.transform="translateX(40px)",l.style.transition="all .3s ease",setTimeout(()=>l.remove(),300)},i)}function fn(n,e,i=""){const s=document.getElementById("modal-overlay");document.getElementById("modal-title").textContent=n,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=i,s.style.display="flex"}function Te(){document.getElementById("modal-overlay").style.display="none"}function gi(n,e){return new Promise(i=>{const s=`<p>${fe(e)}</p>`;fn(n,s,`
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `),document.getElementById("confirm-ok").onclick=()=>{Te(),i(!0)},document.getElementById("confirm-cancel").onclick=()=>{Te(),i(!1)}})}function vc(n){{console.warn("Firebase未設定のためログイン画面を表示します"),setTimeout(()=>n(null,null),100);return}}async function _c(){throw new Error("Firebase未設定です。.envにAPIキーを設定してください。")}async function wc(){}function bc(){const n=document.getElementById("btn-google-login");n&&n.addEventListener("click",async()=>{n.disabled=!0,n.textContent="ログイン中...";try{await _c()}catch(e){console.error("ログインエラー:",e),e.code==="auth/popup-closed-by-user"?P("ログインがキャンセルされました","warning"):P("ログインに失敗しました","error"),n.disabled=!1,n.innerHTML=`
        <svg viewBox="0 0 24 24" width="20" height="20" class="google-icon">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleアカウントでログイン
      `}})}const Xt={};function et(n){if(!Xt[n]){const e=localStorage.getItem(`careroute_${n}`);Xt[n]=e?JSON.parse(e):[]}return Xt[n]}function pn(n){localStorage.setItem(`careroute_${n}`,JSON.stringify(Xt[n]||[]))}async function mi(n,e){{const i=Or();return et(n).push({id:i,...e,createdAt:new Date().toISOString()}),pn(n),i}}async function xr(n){return et(n)}async function Ur(n,e,i){{const s=et(n),o=s.findIndex(l=>l.id===e);o!==-1&&(s[o]={...s[o],...i,updatedAt:new Date().toISOString()},pn(n));return}}async function yi(n,e){{const i=et(n),s=i.findIndex(o=>o.id===e);s!==-1&&(i.splice(s,1),pn(n));return}}async function $r(n,e,i,s){return et(n).filter(l=>l[e]===s)}async function Ce(){return xr("staff")}async function Br(n){return mi("staff",n)}async function Ec(n,e){return Ur("staff",n,e)}async function Ic(n){return yi("staff",n)}async function Ve(){return xr("clients")}async function Fr(n){return mi("clients",n)}async function Sc(n,e){return Ur("clients",n,e)}async function Ac(n){return yi("clients",n)}async function jr(n){return $r("visits","date","==",n)}async function Tc(n){return mi("visits",n)}async function kc(n){return yi("visits",n)}async function Cc(n){return $r("routes","date","==",n)}async function Pc(n){{const e=et("routes");for(const i of n)e.push({id:Or(),...i,createdAt:new Date().toISOString()});pn("routes");return}}async function Dc(){const n=document.getElementById("page-container"),[e,i]=await Promise.all([Ce().catch(()=>[]),Ve().catch(()=>[])]),s=It(),o=await jr(s).catch(()=>[]),l=e.filter(v=>v.isActive),h=i.filter(v=>v.isActive),g=o.filter(v=>v.status!=="cancelled");n.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${rn(new Date)}</span>
    </div>

    <!-- サマリーカード -->
    <div class="grid grid-4" style="margin-bottom:24px">
      <div class="card stat-card info">
        <span class="material-icons-round stat-icon">badge</span>
        <div class="stat-label">稼働職員</div>
        <div class="stat-value">${l.length}<span style="font-size:.9rem;color:var(--text-muted)">名</span></div>
      </div>
      <div class="card stat-card success">
        <span class="material-icons-round stat-icon">elderly</span>
        <div class="stat-label">登録利用者</div>
        <div class="stat-value">${h.length}<span style="font-size:.9rem;color:var(--text-muted)">名</span></div>
      </div>
      <div class="card stat-card">
        <span class="material-icons-round stat-icon">event</span>
        <div class="stat-label">本日の訪問</div>
        <div class="stat-value">${g.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <span class="material-icons-round stat-icon">warning</span>
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${Math.max(0,h.length-g.length)}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
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
          ${l.length===0?'<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>':l.map(v=>{var E,S;return`
              <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
                <div style="width:12px;height:12px;border-radius:50%;background:${v.color||"#999"};flex-shrink:0"></div>
                <div style="flex:1">
                  <div style="font-weight:500">${v.name}</div>
                  <div style="font-size:.8rem;color:var(--text-muted)">${(((E=v.skills)==null?void 0:E.qualifications)||[]).join(", ")||"資格なし"}</div>
                </div>
                <div class="tags-container">
                  ${(((S=v.skills)==null?void 0:S.services)||[]).slice(0,2).map(A=>`<span class="tag">${A}</span>`).join("")}
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
  `}let ne=null,St=[],si=[],At=null,tr=[];function Nc(){return new Promise((n,e)=>{if(window.google&&window.google.maps){n();return}const i="AIzaSyCXFNBQjeiYpRYFdbs6VhISqlFZhrybM74",s=document.createElement("script");s.src=`https://maps.googleapis.com/maps/api/js?key=${i}&libraries=geometry,places&language=ja`,s.async=!0,s.defer=!0,s.onload=n,s.onerror=()=>e(new Error("Google Maps APIの読み込みに失敗しました")),document.head.appendChild(s)})}function Rc(n,e={lat:35.6938,lng:139.7034},i=14){const s=document.getElementById(n);return s?!window.google||!window.google.maps?(s.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `,null):(ne=new google.maps.Map(s,{center:e,zoom:i,mapTypeControl:!0,streetViewControl:!1,fullscreenControl:!0,styles:Uc()}),At=new google.maps.InfoWindow,new google.maps.DirectionsService,ne):null}function Vr(n,e={}){if(!ne)return null;const i=new google.maps.Marker({map:ne,position:n,title:e.title||"",icon:e.icon||void 0,label:e.label||void 0});return e.infoContent&&i.addListener("click",()=>{At.setContent(e.infoContent),At.open(ne,i)}),St.push(i),i}function nr(n,e,i,s){if(!ne)return null;const o={path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",fillColor:e,fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1.8,anchor:new google.maps.Point(12,22),labelOrigin:new google.maps.Point(12,9)};return Vr(n,{icon:o,label:void 0,infoContent:s})}function Lc(n,e){return ne?Vr(n,{title:e,icon:{path:"M12 2L2 7v10l10 5 10-5V7L12 2z",fillColor:"#F59E0B",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:2,anchor:new google.maps.Point(12,12)},infoContent:`<div style="color:#333;padding:4px"><strong>🏢 ${e}</strong><br>（出発地点）</div>`}):null}function Oc(n,e,i){if(!ne)return null;const s=n.map(l=>({lat:l.lat,lng:l.lng})),o=new google.maps.Polyline({path:s,geodesic:!0,strokeColor:e,strokeOpacity:.8,strokeWeight:4,map:ne});return si.push(o),o}function Mc(){St.forEach(n=>n.setMap(null)),St=[],si.forEach(n=>n.setMap(null)),si=[],tr.forEach(n=>n.setMap(null)),tr=[],At&&At.close()}function xc(){if(!ne||St.length===0)return;const n=new google.maps.LatLngBounds;St.forEach(e=>n.extend(e.getPosition())),ne.fitBounds(n,50)}function Uc(){return[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}const on={qualifications:{label:"資格",options:["介護福祉士","実務者研修修了","初任者研修修了","看護師","ヘルパー2級"]},services:{label:"対応可能サービス",options:["身体介護","生活援助","通院等乗降介助","医療的ケア"]},physical:{label:"身体的対応力",options:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"]},special:{label:"特別スキル",options:["認知症ケア","ターミナルケア","精神障害対応","障害児支援"]}},$c=["要支援1","要支援2","要介護1","要介護2","要介護3","要介護4","要介護5"],Hr=["身体介護","生活援助","通院等乗降介助","医療的ケア"],Bc=["男性","女性"],Fc=["指定なし","男性希望","女性希望"],Ee=["#4A90D9","#E74C3C","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#3498DB","#E91E63","#00BCD4","#8BC34A","#FF5722"],Oe={requiredSkill:100,preferredGender:20,preferredStaff:50,excludedStaff:-1e3,proximity:30},Z={name:"ケアルート訪問介護ステーション",address:"東京都新宿区歌舞伎町1-4-1",lat:35.6938,lng:139.7034};let ri="all";async function jc(){var i,s;const n=document.getElementById("page-container");n.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <select id="staff-filter" class="form-select" style="width:200px">
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
  `;try{await Nc()}catch(o){console.warn("Maps APIの読み込みスキップ:",o)}const e=Rc("map-canvas",{lat:Z.lat,lng:Z.lng});await Xn(e),(i=document.getElementById("staff-filter"))==null||i.addEventListener("change",o=>{ri=o.target.value,Xn(e)}),(s=document.getElementById("btn-refresh-map"))==null||s.addEventListener("click",()=>{Xn(e)})}async function Xn(n){const[e,i]=await Promise.all([Ce().catch(()=>[]),Ve().catch(()=>[])]),s=document.getElementById("staff-filter");if(s&&s.options.length<=1&&e.forEach(l=>{const h=document.createElement("option");h.value=l.id,h.textContent=l.name,s.appendChild(h)}),!n){Hc(e,i);return}Mc(),Lc({lat:Z.lat,lng:Z.lng},Z.name);const o=await Cc(It()).catch(()=>[]);if(o.length>0)for(const l of o){if(ri!=="all"&&l.staffId!==ri)continue;const h=e.find(E=>E.id===l.staffId),g=(h==null?void 0:h.color)||"#999",v=[{lat:Z.lat,lng:Z.lng}];for(const E of l.clientIds||[]){const S=i.find(A=>A.id===E);S&&(v.push({lat:S.lat,lng:S.lng}),nr({lat:S.lat,lng:S.lng},g,"",`<div style="color:#333;padding:4px">
              <strong>${S.name}</strong><br>
              ${S.careLevel} | ${(S.requiredServices||[]).join(", ")}<br>
              <small>担当: ${(h==null?void 0:h.name)||"未定"}</small>
            </div>`))}v.push({lat:Z.lat,lng:Z.lng}),Oc(v,g,h==null?void 0:h.name)}else for(const l of i.filter(h=>h.isActive))nr({lat:l.lat,lng:l.lng},"#94A3B8","",`<div style="color:#333;padding:4px">
          <strong>${l.name}</strong><br>
          ${l.careLevel} | ${(l.requiredServices||[]).join(", ")}
        </div>`);xc(),Vc(e,o)}function Vc(n,e){const i=document.getElementById("route-legend");if(i){if(e.length===0){i.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem">
        マッチング＆最適化を実行するとルートが表示されます
      </p>
      <div style="margin-top:8px">
        <div class="legend-item">
          <div class="legend-color" style="background:#F59E0B"></div>
          <span>🏢 事業所</span>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background:#94A3B8"></div>
          <span>利用者（未割り当て）</span>
        </div>
      </div>
    `;return}i.innerHTML=`
    <div class="legend-item">
      <div class="legend-color" style="background:#F59E0B"></div>
      <span>🏢 事業所</span>
    </div>
    ${e.map(s=>{const o=n.find(l=>l.id===s.staffId);return`<div class="legend-item">
        <div class="legend-color" style="background:${(o==null?void 0:o.color)||"#999"}"></div>
        <span>${(o==null?void 0:o.name)||"不明"} (${(s.clientIds||[]).length}件, ${s.totalDistance||"?"}km)</span>
      </div>`}).join("")}
  `}}function Hc(n,e){const i=document.getElementById("route-legend");i&&(i.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${n.length}名<br>
        利用者: ${e.length}名
      </div>
    `)}let Tt=[];async function vi(){const n=document.getElementById("page-container");Tt=await Ce().catch(()=>[]),n.innerHTML=`
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
      ${qc(Tt)}
    </div>
  `,document.getElementById("btn-add-staff").addEventListener("click",()=>qr())}function qc(n){return n.length===0?`
      <div class="empty-state">
        <span class="material-icons-round">person_off</span>
        <h3>職員が登録されていません</h3>
        <p>「新規登録」ボタンから職員を追加してください</p>
      </div>
    `:`
    <div class="grid grid-2">
      ${n.map(e=>{var i,s,o,l,h;return`
        <div class="card" style="border-left:4px solid ${e.color||"#999"}">
          <div class="card-header">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:40px;height:40px;border-radius:50%;background:${e.color||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem">
                ${fe(((i=e.name)==null?void 0:i.charAt(0))||"?")}
              </div>
              <div>
                <div style="font-weight:600;font-size:1.05rem">${fe(e.name)}</div>
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
              ${(((s=e.skills)==null?void 0:s.qualifications)||[]).map(g=>`<span class="tag">${g}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div style="margin-bottom:8px">
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">対応サービス</div>
            <div class="tags-container">
              ${(((o=e.skills)==null?void 0:o.services)||[]).map(g=>`<span class="tag tag-secondary">${g}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div>
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">特別スキル</div>
            <div class="tags-container">
              ${[...((l=e.skills)==null?void 0:l.physical)||[],...((h=e.skills)==null?void 0:h.special)||[]].map(g=>`<span class="tag tag-accent">${g}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
        </div>
      `}).join("")}
    </div>
  `}function qr(n=null){const e=!!n,i=e?"職員情報の編集":"新規職員登録",s=`
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${(n==null?void 0:n.name)||""}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${Bc.map(l=>`<option value="${l}" ${(n==null?void 0:n.gender)===l?"selected":""}>${l}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所</label>
        <input class="form-input" id="sf-address" value="${(n==null?void 0:n.address)||""}" placeholder="例: 東京都新宿区..." />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">勤務開始</label>
          <input class="form-input" type="time" id="sf-work-start" value="${(n==null?void 0:n.workStart)||"08:30"}" />
        </div>
        <div class="form-group">
          <label class="form-label">勤務終了</label>
          <input class="form-input" type="time" id="sf-work-end" value="${(n==null?void 0:n.workEnd)||"17:30"}" />
        </div>
      </div>
      ${Object.entries(on).map(([l,h])=>`
        <div class="form-group">
          <label class="form-label">${h.label}</label>
          <div class="tags-container" style="gap:8px">
            ${h.options.map(g=>{var E,S;const v=(S=(E=n==null?void 0:n.skills)==null?void 0:E[l])!=null&&S.includes(g)?"checked":"";return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${l}" value="${g}" ${v} /> ${g}
              </label>`}).join("")}
          </div>
        </div>
      `).join("")}
    </form>
  `;fn(i,s,`
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("sf-cancel").onclick=Te,document.getElementById("sf-save").onclick=async()=>{const l=document.getElementById("sf-name").value.trim();if(!l){P("氏名を入力してください","warning");return}const h={name:l,gender:document.getElementById("sf-gender").value,address:document.getElementById("sf-address").value.trim(),workStart:document.getElementById("sf-work-start").value,workEnd:document.getElementById("sf-work-end").value,lat:(n==null?void 0:n.lat)||35.69+Math.random()*.03,lng:(n==null?void 0:n.lng)||139.69+Math.random()*.05,skills:{},color:(n==null?void 0:n.color)||Ee[Tt.length%Ee.length],isActive:!0};for(const[g]of Object.entries(on)){const v=document.querySelectorAll(`input[name="skill-${g}"]:checked`);h.skills[g]=Array.from(v).map(E=>E.value)}try{e?(await Ec(n.id,h),P("職員情報を更新しました","success")):(await Br(h),P("職員を登録しました","success")),Te(),await vi()}catch(g){P("保存に失敗しました: "+g.message,"error")}}}document.addEventListener("click",async n=>{const e=n.target.closest("[data-edit-staff]");if(e){const s=Tt.find(o=>o.id===e.dataset.editStaff);s&&qr(s)}const i=n.target.closest("[data-delete-staff]");if(i){const s=Tt.find(o=>o.id===i.dataset.deleteStaff);if(s&&await gi("削除確認",`${s.name} を削除しますか？`))try{await Ic(s.id),P(`${s.name} を削除しました`,"success"),await vi()}catch{P("削除に失敗しました","error")}}});let an=[];async function _i(){const n=document.getElementById("page-container");an=await Ve().catch(()=>[]),n.innerHTML=`
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
      ${zc(an)}
    </div>
  `,document.getElementById("btn-add-client").addEventListener("click",()=>zr())}function zc(n){return n.length===0?`<div class="empty-state">
      <span class="material-icons-round">person_off</span>
      <h3>利用者が登録されていません</h3>
      <p>「新規登録」ボタンから利用者を追加してください</p>
    </div>`:`
    <div class="table-wrapper card">
      <table class="data-table">
        <thead><tr>
          <th>氏名</th><th>介護度</th><th>必要サービス</th><th>必要スキル</th>
          <th>希望時間帯</th><th>所要時間</th><th>操作</th>
        </tr></thead>
        <tbody>
          ${n.map(e=>{var i,s;return`<tr>
            <td><strong>${fe(e.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${e.genderPreference!=="指定なし"?e.genderPreference:""}</span></td>
            <td><span class="tag ${(i=e.careLevel)!=null&&i.includes("4")||(s=e.careLevel)!=null&&s.includes("5")?"tag-danger":""}">${e.careLevel||"-"}</span></td>
            <td><div class="tags-container">${(e.requiredServices||[]).map(o=>`<span class="tag tag-secondary">${o}</span>`).join("")}</div></td>
            <td><div class="tags-container">${(e.requiredSkills||[]).map(o=>`<span class="tag tag-accent">${o}</span>`).join("")||"-"}</div></td>
            <td>${e.timeWindow?`${e.timeWindow.start}〜${e.timeWindow.end}`:"-"}</td>
            <td>${e.visitDuration||60}分</td>
            <td>
              <div class="btn-group">
                <button class="btn-icon" data-edit-client="${e.id}"><span class="material-icons-round">edit</span></button>
                <button class="btn-icon" data-delete-client="${e.id}" style="color:var(--danger)"><span class="material-icons-round">delete</span></button>
              </div>
            </td>
          </tr>`}).join("")}
        </tbody>
      </table>
    </div>
  `}function zr(n=null){var l,h;const e=!!n,i=[...on.physical.options,...on.special.options],s=`
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${(n==null?void 0:n.name)||""}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${$c.map(g=>`<option ${(n==null?void 0:n.careLevel)===g?"selected":""}>${g}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所</label>
        <input class="form-input" id="cf-address" value="${(n==null?void 0:n.address)||""}" placeholder="例: 東京都新宿区..." />
      </div>
      <div class="form-group">
        <label class="form-label">必要サービス</label>
        <div class="tags-container" style="gap:8px">
          ${Hr.map(g=>{var v;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-service" value="${g}" ${(v=n==null?void 0:n.requiredServices)!=null&&v.includes(g)?"checked":""} /> ${g}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">必要スキル</label>
        <div class="tags-container" style="gap:8px">
          ${i.map(g=>{var v;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-skill" value="${g}" ${(v=n==null?void 0:n.requiredSkills)!=null&&v.includes(g)?"checked":""} /> ${g}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">性別希望</label>
          <select class="form-select" id="cf-gender-pref">
            ${Fc.map(g=>`<option ${(n==null?void 0:n.genderPreference)===g?"selected":""}>${g}</option>`).join("")}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">訪問所要時間（分）</label>
          <input class="form-input" type="number" id="cf-duration" value="${(n==null?void 0:n.visitDuration)||60}" min="15" step="15" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">希望時間帯（開始）</label>
          <input class="form-input" type="time" id="cf-time-start" value="${((l=n==null?void 0:n.timeWindow)==null?void 0:l.start)||"09:00"}" />
        </div>
        <div class="form-group">
          <label class="form-label">希望時間帯（終了）</label>
          <input class="form-input" type="time" id="cf-time-end" value="${((h=n==null?void 0:n.timeWindow)==null?void 0:h.end)||"12:00"}" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">備考</label>
        <textarea class="form-input" id="cf-notes" rows="2" placeholder="特記事項があれば...">${(n==null?void 0:n.notes)||""}</textarea>
      </div>
    </form>
  `;fn(e?"利用者情報の編集":"新規利用者登録",s,`
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("cf-cancel").onclick=Te,document.getElementById("cf-save").onclick=async()=>{const g=document.getElementById("cf-name").value.trim();if(!g){P("氏名を入力してください","warning");return}const v={name:g,careLevel:document.getElementById("cf-care-level").value,address:document.getElementById("cf-address").value.trim(),requiredServices:Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(E=>E.value),requiredSkills:Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(E=>E.value),genderPreference:document.getElementById("cf-gender-pref").value,visitDuration:parseInt(document.getElementById("cf-duration").value)||60,timeWindow:{start:document.getElementById("cf-time-start").value,end:document.getElementById("cf-time-end").value},notes:document.getElementById("cf-notes").value.trim(),lat:(n==null?void 0:n.lat)||35.69+Math.random()*.03,lng:(n==null?void 0:n.lng)||139.69+Math.random()*.05,isActive:!0};try{e?(await Sc(n.id,v),P("利用者情報を更新しました","success")):(await Fr(v),P("利用者を登録しました","success")),Te(),await _i()}catch(E){P("保存に失敗しました: "+E.message,"error")}}}document.addEventListener("click",async n=>{const e=n.target.closest("[data-edit-client]");if(e){const s=an.find(o=>o.id===e.dataset.editClient);s&&zr(s)}const i=n.target.closest("[data-delete-client]");if(i){const s=an.find(o=>o.id===i.dataset.deleteClient);if(s&&await gi("削除確認",`${s.name} を削除しますか？`))try{await Ac(s.id),P(`${s.name} を削除しました`,"success"),await _i()}catch{P("削除に失敗しました","error")}}});let Ye=It();async function Wc(){const n=document.getElementById("page-container");n.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">calendar_month</span>
        スケジュール管理
      </h1>
      <div class="btn-group">
        <input type="date" id="schedule-date" class="form-input" value="${Ye}" style="width:180px" />
        <button class="btn btn-primary" id="btn-add-visit">
          <span class="material-icons-round">add</span>
          訪問追加
        </button>
      </div>
    </div>
    <div id="schedule-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,document.getElementById("schedule-date").addEventListener("change",e=>{Ye=e.target.value,ln()}),document.getElementById("btn-add-visit").addEventListener("click",Gc),await ln()}async function ln(){const n=document.getElementById("schedule-content"),[e,i,s]=await Promise.all([Ce().catch(()=>[]),Ve().catch(()=>[]),jr(Ye).catch(()=>[])]);if(s.length===0){n.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round">event_busy</span>
        <h3>${rn(Ye)} の訪問予定はありません</h3>
        <p>「訪問追加」ボタンから予定を登録するか、マッチング＆最適化を実行してください</p>
      </div>
    `;return}const o={};for(const l of s)o[l.staffId]||(o[l.staffId]=[]),o[l.staffId].push(l);n.innerHTML=`
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${rn(Ye)} — ${s.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(o).map(([l,h])=>{const g=e.find(v=>v.id===l);return`
          <div class="card" style="border-left:4px solid ${(g==null?void 0:g.color)||"#999"}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${(g==null?void 0:g.color)||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${h.length}
              </div>
              ${fe((g==null?void 0:g.name)||"未割当")}
            </h3>
            <div class="schedule-timeline">
              ${h.sort((v,E)=>(v.scheduledTime||"").localeCompare(E.scheduledTime||"")).map(v=>{const E=i.find(S=>S.id===v.clientId);return`
                  <div class="time-slot">
                    <div class="time-label">${v.scheduledTime||"--:--"}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${fe((E==null?void 0:E.name)||"不明")}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">${v.service||""} | ${v.duration||60}分</div>
                          </div>
                          <button class="btn-icon" data-delete-visit="${v.id}" style="color:var(--danger)" title="削除">
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
  `}async function Gc(){const[n,e]=await Promise.all([Ce().catch(()=>[]),Ve().catch(()=>[])]),i=`
    <form id="visit-form">
      <div class="form-group">
        <label class="form-label">利用者 *</label>
        <select class="form-select" id="vf-client">
          <option value="">選択してください</option>
          ${e.filter(s=>s.isActive).map(s=>`<option value="${s.id}">${s.name}（${s.careLevel}）</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">担当職員 *</label>
        <select class="form-select" id="vf-staff">
          <option value="">選択してください</option>
          ${n.filter(s=>s.isActive).map(s=>`<option value="${s.id}">${s.name}</option>`).join("")}
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
          ${Hr.map(s=>`<option>${s}</option>`).join("")}
        </select>
      </div>
    </form>
  `;fn("訪問予定の追加",i,`
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `),document.getElementById("vf-cancel").onclick=Te,document.getElementById("vf-save").onclick=async()=>{const s=document.getElementById("vf-client").value,o=document.getElementById("vf-staff").value;if(!s||!o){P("利用者と職員を選択してください","warning");return}try{await Tc({date:Ye,clientId:s,staffId:o,scheduledTime:document.getElementById("vf-time").value,duration:parseInt(document.getElementById("vf-duration").value)||60,service:document.getElementById("vf-service").value,status:"scheduled"}),P("訪問予定を追加しました","success"),Te(),await ln()}catch{P("追加に失敗しました","error")}}}document.addEventListener("click",async n=>{const e=n.target.closest("[data-delete-visit]");if(e&&await gi("削除確認","この訪問予定を削除しますか？"))try{await kc(e.dataset.deleteVisit),P("訪問予定を削除しました","success"),await ln()}catch{P("削除に失敗しました","error")}});function Kc(n,e){const i=[];for(const s of n)if(s.isActive)for(const o of e){if(!o.isActive)continue;const{score:l,reasons:h,eligible:g}=Jc(s,o);i.push({staffId:s.id,staffName:s.name,clientId:o.id,clientName:o.name,score:l,reasons:h,eligible:g})}return i.sort((s,o)=>o.score-s.score)}function Jc(n,e){var h,g,v,E,S,A;let i=0;const s=[];let o=!0;for(const T of e.requiredServices||[])(g=(h=n.skills)==null?void 0:h.services)!=null&&g.includes(T)?(i+=Oe.requiredSkill,s.push(`✅ ${T}対応可`)):(o=!1,s.push(`❌ ${T}に対応不可`));const l=[...((v=n.skills)==null?void 0:v.qualifications)||[],...((E=n.skills)==null?void 0:E.physical)||[],...((S=n.skills)==null?void 0:S.special)||[]];for(const T of e.requiredSkills||[])l.includes(T)?(i+=Oe.requiredSkill,s.push(`✅ ${T}あり`)):(o=!1,s.push(`❌ ${T}なし`));if(e.genderPreference&&e.genderPreference!=="指定なし"){const T=e.genderPreference.replace("希望","");n.gender===T?(i+=Oe.preferredGender,s.push(`✅ 性別希望合致（${T}）`)):(i-=Oe.preferredGender,s.push(`⚠️ 性別希望不一致（希望: ${T}）`))}if(e.preferredStaff===n.id&&(i+=Oe.preferredStaff,s.push("✅ 指名職員")),(A=e.excludedStaff)!=null&&A.includes(n.id)&&(o=!1,i+=Oe.excludedStaff,s.push("❌ 除外職員")),n.lat&&e.lat){const T=Mr(n.lat,n.lng,e.lat,e.lng),B=Math.max(0,Oe.proximity*(1-T/10));i+=B}return{score:Math.round(i),reasons:s,eligible:o}}function Xc(n,e,i=10){const s=Kc(n,e),o=[],l=new Set,h={};for(const v of s){if(l.has(v.clientId)||!v.eligible)continue;const E=h[v.staffId]||0;E>=i||(o.push({staffId:v.staffId,staffName:v.staffName,clientId:v.clientId,clientName:v.clientName,score:v.score}),l.add(v.clientId),h[v.staffId]=E+1)}const g=e.filter(v=>v.isActive&&!l.has(v.id)).map(v=>({clientId:v.id,clientName:v.name,reason:"適格な職員なし"}));return{assignments:o,unassigned:g}}function Yc(n,e,i,s=Z){const o={};for(const h of n)o[h.staffId]||(o[h.staffId]=[]),o[h.staffId].push(h.clientId);const l={};for(const[h,g]of Object.entries(o)){const v=e.find(D=>D.id===h),E=g.map(D=>i.find(x=>x.id===D)).filter(Boolean);if(E.length===0)continue;const S=[{id:"office",name:"事業所",lat:s.lat,lng:s.lng,isOffice:!0},...E.map(D=>({id:D.id,name:D.name,lat:D.lat,lng:D.lng,duration:D.visitDuration,timeWindow:D.timeWindow}))],A=Qc(S);let T=Zc(S,A);T=eh(T,A);const B=th(T,A),$=nh(T,A,v);l[h]={staffId:h,staffName:(v==null?void 0:v.name)||"不明",staffColor:(v==null?void 0:v.color)||"#999",route:T,totalDistance:Math.round(B*10)/10,totalDuration:ih($),schedule:$}}return l}function Qc(n){const e=n.length,i=Array.from({length:e},()=>Array(e).fill(0));for(let s=0;s<e;s++)for(let o=s+1;o<e;o++){const l=Mr(n[s].lat,n[s].lng,n[o].lat,n[o].lng);i[s][o]=l,i[o][s]=l}return i}function Zc(n,e){const i=n.length,s=new Set([0]),o=[0],l=[],h=[];for(let E=1;E<i;E++){const S=n[E];S.timeWindow&&S.timeWindow.start?l.push({index:E,start:oi(S.timeWindow.start),end:oi(S.timeWindow.end)}):h.push(E)}l.sort((E,S)=>E.start-S.start);const g=[...l.map(E=>E.index),...h];let v=0;for(;s.size<i;){let E=-1,S=1/0;for(const A of g)s.has(A)||e[v][A]<S&&(S=e[v][A],E=A);if(E===-1)break;o.push(E),s.add(E),v=E}return o.push(0),o}function eh(n,e){const i=n.length;let s=!0,o=[...n];for(;s;){s=!1;for(let l=1;l<i-2;l++)for(let h=l+1;h<i-1;h++){const g=e[o[l-1]][o[l]]+e[o[h]][o[h+1]];if(e[o[l-1]][o[h]]+e[o[l]][o[h+1]]<g-.001){const E=[...o];let S=l,A=h;for(;S<A;)[E[S],E[A]]=[E[A],E[S]],S++,A--;o=E,s=!0}}}return o}function th(n,e){let i=0;for(let s=0;s<n.length-1;s++)i+=e[n[s]][n[s+1]];return i}function nh(n,e,i){const s=[];let l=oi((i==null?void 0:i.workStart)||"08:30");for(let h=0;h<n.length;h++){if(h>0){const g=e[n[h-1]][n[h]]/20*60;l+=Math.ceil(g)}s.push({pointIndex:n[h],arrivalTime:sh(l),arrivalMinutes:l}),h>0&&h<n.length-1&&(l+=60)}return s}function ih(n){if(n.length<2)return 0;const e=n[0].arrivalMinutes;return n[n.length-1].arrivalMinutes-e}function oi(n){if(!n)return 0;const[e,i]=n.split(":").map(Number);return e*60+i}function sh(n){const e=Math.floor(n/60),i=n%60;return`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`}let Wr=null,rh=null;async function oh(){const n=document.getElementById("page-container");n.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">auto_fix_high</span>
        マッチング＆ルート最適化
      </h1>
      <span style="color:var(--text-secondary)">${rn(new Date)}</span>
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
  `,document.getElementById("btn-run-optimization").addEventListener("click",ah)}async function ah(){var i;const n=document.getElementById("btn-run-optimization"),e=document.getElementById("optimization-results");n.disabled=!0,n.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...';try{const[s,o]=await Promise.all([Ce(),Ve()]);if(s.length===0){P("職員が登録されていません","warning");return}if(o.length===0){P("利用者が登録されていません","warning");return}const{assignments:l,unassigned:h}=Xc(s.filter(v=>v.isActive),o.filter(v=>v.isActive));Wr=l;const g=Yc(l,s,o,Z);rh=g,e.innerHTML=lh(s,o,l,h,g),(i=document.getElementById("btn-save-routes"))==null||i.addEventListener("click",async()=>{await ch(s,g)}),P("最適化が完了しました！","success")}catch(s){P("最適化に失敗しました: "+s.message,"error"),console.error(s)}finally{n.disabled=!1,n.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行'}}function lh(n,e,i,s,o){const l={};for(const h of i)l[h.staffId]||(l[h.staffId]={staff:n.find(g=>g.id===h.staffId),clients:[]}),l[h.staffId].clients.push({...h,client:e.find(g=>g.id===h.clientId)});return`
    <!-- サマリーカード -->
    <div class="grid grid-3" style="margin-bottom:24px">
      <div class="card stat-card success">
        <div class="stat-label">割り当て完了</div>
        <div class="stat-value">${i.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${s.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card info">
        <div class="stat-label">総移動距離</div>
        <div class="stat-value">${Object.values(o).reduce((h,g)=>h+g.totalDistance,0).toFixed(1)}<span style="font-size:.9rem;color:var(--text-muted)">km</span></div>
      </div>
    </div>

    <!-- 職員別結果 -->
    <div class="grid grid-2" style="margin-bottom:24px">
      ${Object.entries(l).map(([h,g])=>{var E,S,A;const v=o[h];return`
          <div class="card" style="border-left:4px solid ${((E=g.staff)==null?void 0:E.color)||"#999"}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${((S=g.staff)==null?void 0:S.color)||"#999"};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${g.clients.length}
                </div>
                ${fe(((A=g.staff)==null?void 0:A.name)||"不明")}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${(v==null?void 0:v.totalDistance)||0}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${((v==null?void 0:v.schedule)||[]).filter(T=>T.pointIndex!==0||v.schedule.indexOf(T)===v.schedule.length-1).map((T,B,$)=>{var D,x,K,Q;return T.pointIndex===0&&B===$.length-1?`<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${T.arrivalTime} 事業所帰着
                    </div>`:(g.clients.find(he=>(v.route[v.schedule.indexOf(T)],!0)),`<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${T.arrivalTime} ${((x=(D=g.clients[B])==null?void 0:D.client)==null?void 0:x.name)||"利用者"}</strong>
                      <span class="tag">${((Q=(K=g.clients[B])==null?void 0:K.client)==null?void 0:Q.visitDuration)||60}分</span>
                    </div>
                  </div>`)}).join("")}
            </div>
          </div>
        `}).join("")}
    </div>

    ${s.length>0?`
      <div class="card" style="border-left:4px solid var(--danger);margin-bottom:24px">
        <h3 class="card-title" style="color:var(--danger);margin-bottom:12px">
          <span class="material-icons-round">warning</span>
          未割り当ての利用者
        </h3>
        ${s.map(h=>`
          <div style="padding:6px 0;color:var(--text-secondary)">
            ${fe(h.clientName)} — ${h.reason}
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
  `}async function ch(n,e){try{const i=Object.entries(e).map(([o,l])=>({staffId:o,date:It(),clientIds:l.route.slice(1,-1).map(h=>{var g;return(g=l.schedule[h])==null?void 0:g.clientId}).filter(Boolean),totalDistance:l.totalDistance,totalDuration:l.totalDuration,schedule:l.schedule})),s=Object.entries(e).map(([o,l])=>{const h=Wr.filter(g=>g.staffId===o).map(g=>g.clientId);return{staffId:o,date:It(),clientIds:h,totalDistance:l.totalDistance,totalDuration:l.totalDuration}});await Pc(s),P("ルートを保存しました。マップビューで確認できます。","success")}catch(i){P("保存に失敗しました: "+i.message,"error")}}const hh={dashboard:{render:Dc,title:"ダッシュボード"},map:{render:jc,title:"マップビュー"},staff:{render:vi,title:"職員管理"},client:{render:_i,title:"利用者管理"},schedule:{render:Wc,title:"スケジュール"},matching:{render:oh,title:"マッチング＆最適化"}};function uh(){var e,i,s;document.querySelectorAll(".nav-item").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.page;l&&cn(l)})}),(e=document.getElementById("btn-sidebar-toggle"))==null||e.addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("collapsed")}),(i=document.getElementById("btn-modal-close"))==null||i.addEventListener("click",()=>{document.getElementById("modal-overlay").style.display="none"}),(s=document.getElementById("modal-overlay"))==null||s.addEventListener("click",o=>{o.target===o.currentTarget&&(o.currentTarget.style.display="none")})}async function cn(n){const e=hh[n];if(!e)return;document.querySelectorAll(".nav-item").forEach(s=>{s.classList.toggle("active",s.dataset.page===n)}),document.title=`${e.title} - CareRoute`;const i=document.getElementById("page-container");i.innerHTML='<div class="loading"><div class="spinner"></div></div>';try{await e.render()}catch(s){console.error(`ページ「${e.title}」の表示エラー:`,s),i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${s.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `}}const ir=[{name:"田中 太郎",address:"東京都新宿区西新宿1-1-1",lat:35.6896,lng:139.6922,workStart:"08:30",workEnd:"17:30",skills:{qualifications:["介護福祉士","実務者研修修了"],services:["身体介護","生活援助","通院等乗降介助"],physical:["重介護対応可","移乗介助可","入浴介助可"],special:["認知症ケア"]},gender:"男性",color:Ee[0],isActive:!0},{name:"佐藤 花子",address:"東京都新宿区新宿3-1-1",lat:35.6906,lng:139.7005,workStart:"08:30",workEnd:"17:30",skills:{qualifications:["介護福祉士"],services:["身体介護","生活援助"],physical:["移乗介助可","入浴介助可"],special:["認知症ケア","ターミナルケア"]},gender:"女性",color:Ee[1],isActive:!0},{name:"鈴木 一郎",address:"東京都新宿区高田馬場1-1-1",lat:35.7126,lng:139.7036,workStart:"09:00",workEnd:"18:00",skills:{qualifications:["実務者研修修了"],services:["身体介護","生活援助","通院等乗降介助"],physical:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"],special:[]},gender:"男性",color:Ee[2],isActive:!0},{name:"山本 美咲",address:"東京都新宿区四谷1-1-1",lat:35.6862,lng:139.73,workStart:"08:30",workEnd:"17:30",skills:{qualifications:["介護福祉士","看護師"],services:["身体介護","生活援助","医療的ケア"],physical:["移乗介助可"],special:["ターミナルケア","精神障害対応"]},gender:"女性",color:Ee[3],isActive:!0},{name:"中村 健太",address:"東京都新宿区大久保1-1-1",lat:35.701,lng:139.7003,workStart:"09:00",workEnd:"18:00",skills:{qualifications:["初任者研修修了"],services:["生活援助"],physical:[],special:[]},gender:"男性",color:Ee[4],isActive:!0},{name:"小林 洋子",address:"東京都新宿区落合1-1-1",lat:35.715,lng:139.687,workStart:"08:30",workEnd:"17:30",skills:{qualifications:["介護福祉士","実務者研修修了"],services:["身体介護","生活援助","通院等乗降介助"],physical:["移乗介助可","入浴介助可"],special:["認知症ケア","障害児支援"]},gender:"女性",color:Ee[5],isActive:!0}],sr=[{name:"高橋 正夫",address:"東京都新宿区百人町1-10-5",lat:35.6997,lng:139.6985,careLevel:"要介護3",requiredServices:["身体介護"],requiredSkills:["認知症ケア"],genderPreference:"指定なし",preferredStaff:null,visitDuration:60,timeWindow:{start:"09:00",end:"12:00"},notes:"オートロックあり",isActive:!0},{name:"渡辺 トメ",address:"東京都新宿区北新宿1-5-3",lat:35.7005,lng:139.693,careLevel:"要介護4",requiredServices:["身体介護"],requiredSkills:["重介護対応可","移乗介助可"],genderPreference:"女性希望",preferredStaff:null,visitDuration:90,timeWindow:{start:"09:00",end:"11:00"},notes:"車椅子使用",isActive:!0},{name:"伊藤 幸雄",address:"東京都新宿区西新宿3-2-1",lat:35.687,lng:139.691,careLevel:"要介護2",requiredServices:["生活援助"],requiredSkills:[],genderPreference:"指定なし",preferredStaff:null,visitDuration:45,timeWindow:{start:"10:00",end:"14:00"},notes:"",isActive:!0},{name:"加藤 ハナ",address:"東京都新宿区新宿5-8-2",lat:35.694,lng:139.706,careLevel:"要介護1",requiredServices:["生活援助"],requiredSkills:[],genderPreference:"女性希望",preferredStaff:null,visitDuration:45,timeWindow:{start:"13:00",end:"16:00"},notes:"ペットあり（猫）",isActive:!0},{name:"松本 三郎",address:"東京都新宿区高田馬場2-5-1",lat:35.7132,lng:139.705,careLevel:"要介護5",requiredServices:["身体介護","医療的ケア"],requiredSkills:["重介護対応可","ターミナルケア"],genderPreference:"指定なし",preferredStaff:null,visitDuration:120,timeWindow:{start:"09:00",end:"11:00"},notes:"経管栄養あり",isActive:!0},{name:"井上 キミ",address:"東京都新宿区下落合3-1-1",lat:35.717,lng:139.692,careLevel:"要介護2",requiredServices:["身体介護"],requiredSkills:["入浴介助可"],genderPreference:"女性希望",preferredStaff:null,visitDuration:60,timeWindow:{start:"10:00",end:"13:00"},notes:"入浴介助メイン",isActive:!0},{name:"木村 勇一",address:"東京都新宿区市谷台町1-1",lat:35.693,lng:139.725,careLevel:"要介護3",requiredServices:["身体介護","通院等乗降介助"],requiredSkills:["認知症ケア"],genderPreference:"男性希望",preferredStaff:null,visitDuration:60,timeWindow:{start:"09:00",end:"12:00"},notes:"週1通院あり",isActive:!0},{name:"林 ミツコ",address:"東京都新宿区荒木町5-1",lat:35.6885,lng:139.723,careLevel:"要支援2",requiredServices:["生活援助"],requiredSkills:[],genderPreference:"指定なし",preferredStaff:null,visitDuration:30,timeWindow:{start:"14:00",end:"17:00"},notes:"",isActive:!0},{name:"清水 義男",address:"東京都新宿区早稲田町70",lat:35.7058,lng:139.718,careLevel:"要介護2",requiredServices:["身体介護"],requiredSkills:["移乗介助可"],genderPreference:"指定なし",preferredStaff:null,visitDuration:60,timeWindow:{start:"09:00",end:"12:00"},notes:"",isActive:!0},{name:"山口 春子",address:"東京都新宿区余丁町7-1",lat:35.698,lng:139.719,careLevel:"要介護1",requiredServices:["生活援助"],requiredSkills:[],genderPreference:"女性希望",preferredStaff:null,visitDuration:45,timeWindow:{start:"13:00",end:"16:00"},notes:"",isActive:!0},{name:"中島 茂",address:"東京都新宿区西早稲田1-1-1",lat:35.709,lng:139.714,careLevel:"要介護3",requiredServices:["身体介護"],requiredSkills:["重介護対応可","二人介助対応可"],genderPreference:"指定なし",preferredStaff:null,visitDuration:90,timeWindow:{start:"10:00",end:"13:00"},notes:"二人介助必要",isActive:!0},{name:"前田 サダ",address:"東京都新宿区中落合2-1-1",lat:35.72,lng:139.688,careLevel:"要介護2",requiredServices:["身体介護"],requiredSkills:["認知症ケア"],genderPreference:"指定なし",preferredStaff:null,visitDuration:60,timeWindow:{start:"09:00",end:"12:00"},notes:"認知症あり。徘徊注意",isActive:!0},{name:"小川 太一",address:"東京都新宿区西新宿5-1-1",lat:35.691,lng:139.687,careLevel:"要支援1",requiredServices:["生活援助"],requiredSkills:[],genderPreference:"指定なし",preferredStaff:null,visitDuration:30,timeWindow:{start:"14:00",end:"17:00"},notes:"",isActive:!0},{name:"岡田 フミ",address:"東京都新宿区神楽坂3-1",lat:35.7015,lng:139.737,careLevel:"要介護2",requiredServices:["身体介護"],requiredSkills:[],genderPreference:"女性希望",preferredStaff:null,visitDuration:60,timeWindow:{start:"10:00",end:"13:00"},notes:"",isActive:!0},{name:"村上 健一",address:"東京都新宿区戸山1-1-1",lat:35.704,lng:139.71,careLevel:"要介護4",requiredServices:["身体介護","医療的ケア"],requiredSkills:["重介護対応可"],genderPreference:"指定なし",preferredStaff:null,visitDuration:90,timeWindow:{start:"09:00",end:"11:00"},notes:"吸引必要",isActive:!0},{name:"近藤 ヨシ",address:"東京都新宿区大京町26",lat:35.6855,lng:139.72,careLevel:"要介護1",requiredServices:["生活援助"],requiredSkills:[],genderPreference:"指定なし",preferredStaff:null,visitDuration:45,timeWindow:{start:"13:00",end:"16:00"},notes:"",isActive:!0},{name:"石井 正義",address:"東京都新宿区若松町10-1",lat:35.7025,lng:139.721,careLevel:"要介護3",requiredServices:["身体介護"],requiredSkills:["精神障害対応"],genderPreference:"指定なし",preferredStaff:null,visitDuration:60,timeWindow:{start:"10:00",end:"14:00"},notes:"精神疾患合併あり",isActive:!0},{name:"斉藤 ミヨ",address:"東京都新宿区中里町25",lat:35.6995,lng:139.726,careLevel:"要介護2",requiredServices:["身体介護"],requiredSkills:["入浴介助可"],genderPreference:"女性希望",preferredStaff:null,visitDuration:60,timeWindow:{start:"10:00",end:"13:00"},notes:"入浴介助",isActive:!0},{name:"藤本 勝",address:"東京都新宿区弁天町1-1",lat:35.6975,lng:139.732,careLevel:"要支援2",requiredServices:["生活援助"],requiredSkills:[],genderPreference:"指定なし",preferredStaff:null,visitDuration:30,timeWindow:{start:"14:00",end:"17:00"},notes:"",isActive:!0},{name:"三浦 アキ",address:"東京都新宿区北山伏町2-1",lat:35.7,lng:139.734,careLevel:"要介護1",requiredServices:["生活援助"],requiredSkills:[],genderPreference:"指定なし",preferredStaff:null,visitDuration:45,timeWindow:{start:"13:00",end:"16:00"},notes:"",isActive:!0}];document.addEventListener("DOMContentLoaded",()=>{var n,e;console.log("🏠 CareRoute 起動中..."),bc(),uh();try{vc(async(i,s)=>{if(s){P(s,"error"),Yn();return}i?(console.log("✅ ログイン:",i.email),rr(i),await cn("dashboard")):Yn()})}catch(i){console.warn("Firebase未設定のためデモモードで起動します:",i),Yn()}(n=document.getElementById("btn-logout"))==null||n.addEventListener("click",async()=>{try{await wc(),P("ログアウトしました","info")}catch{P("ログアウトに失敗しました","error")}}),(e=document.getElementById("btn-demo-mode"))==null||e.addEventListener("click",async()=>{rr({displayName:"デモユーザー",email:"demo@careroute.local",photoURL:""}),(await Ce()).length===0&&(P("デモデータを自動投入しています...","info"),await Gr(!0)),await cn("dashboard"),P("デモモードで起動しました","info")})});function Yn(){document.getElementById("login-screen").style.display="flex",document.getElementById("main-app").style.display="none"}function rr(n){document.getElementById("login-screen").style.display="none",document.getElementById("main-app").style.display="flex";const e=document.getElementById("user-avatar"),i=document.getElementById("user-name");e&&(e.src=n.photoURL||""),i&&(i.textContent=n.displayName||n.email),dh()}function dh(){if(document.getElementById("btn-load-demo"))return;const n=document.querySelector(".sidebar-nav"),e=document.createElement("li");e.className="nav-item",e.id="btn-load-demo",e.innerHTML=`
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `,e.addEventListener("click",Gr),n.appendChild(e)}async function Gr(n=!1){const e=document.getElementById("btn-load-demo");if(!(!n&&!confirm(`デモデータ（職員6名・利用者20名）を投入しますか？
既存データには影響しません。`))){e&&(e.innerHTML=`
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `);try{const i=await Ce(),s=await Ve();if((i.length>0||s.length>0)&&!n&&!confirm(`既に職員${i.length}名、利用者${s.length}名が登録されています。追加でデモデータを投入しますか？`)){e&&(e.innerHTML=`
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `);return}for(const o of ir)await Br(o);P(`職員 ${ir.length}名 を登録しました`,"success");for(const o of sr)await Fr(o);P(`利用者 ${sr.length}名 を登録しました`,"success"),await cn("dashboard"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `,setTimeout(()=>e.remove(),3e3)}catch(i){console.error("デモデータ投入エラー:",i),P("デモデータの投入に失敗しました: "+i.message,"error"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `}}}
