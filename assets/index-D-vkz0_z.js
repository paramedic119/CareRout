(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const Xo=()=>{};var xr={};/**
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
 */const Es=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Yo=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],l=i[n++],u=i[n++],p=((o&7)<<18|(c&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const c=i[n++],l=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return e.join("")},ks={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const c=i[o],l=o+1<i.length,u=l?i[o+1]:0,p=o+2<i.length,_=p?i[o+2]:0,E=c>>2,S=(c&3)<<4|u>>4;let w=(u&15)<<2|_>>6,k=_&63;p||(k=64,l||(w=64)),r.push(n[E],n[S],n[w],n[k])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Es(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Yo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],u=o<i.length?n[i.charAt(o)]:0;++o;const _=o<i.length?n[i.charAt(o)]:64;++o;const S=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||u==null||_==null||S==null)throw new Qo;const w=c<<2|u>>4;if(r.push(w),_!==64){const k=u<<4&240|_>>2;if(r.push(k),S!==64){const D=_<<6&192|S;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Qo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zo=function(i){const e=Es(i);return ks.encodeByteArray(e,!0)},As=function(i){return Zo(i).replace(/\./g,"")},Os=function(i){try{return ks.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ea(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ta=()=>ea().__FIREBASE_DEFAULTS__,ia=()=>{if(typeof process>"u"||typeof xr>"u")return;const i=xr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},na=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Os(i[1]);return e&&JSON.parse(e)},ra=()=>{try{return Xo()||ta()||ia()||na()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},sa=i=>{var e;return(e=ra())==null?void 0:e[`_${i}`]};/**
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
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function aa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ca(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function la(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function da(){try{return typeof indexedDB=="object"}catch{return!1}}function ua(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const ha="FirebaseError";class Le extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ha,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xt.prototype.create)}}class xt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],l=c?fa(c,r):"Error",u=`${this.serviceName}: ${l} (${o}).`;return new Le(o,u,r)}}function fa(i,e){return i.replace(ma,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const ma=/\{\$([^}]+)}/g;/**
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
 */function Ds(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pa(i,e){const n=new ga(i,e);return n.subscribe.bind(n)}class ga{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");va(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=Ki),o.error===void 0&&(o.error=Ki),o.complete===void 0&&(o.complete=Ki);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function va(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Ki(){}/**
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
 */function Nt(i){return i&&i._delegate?i._delegate:i}/**
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
 */function Ps(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}class et{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var j;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(j||(j={}));const ya={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},_a=j.INFO,Ia={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Ta=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=Ia[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yn{constructor(e){this.name=e,this._logLevel=_a,this._logHandler=Ta,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ya[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const wa=(i,e)=>e.some(n=>i instanceof n);let Nr,Rr;function ba(){return Nr||(Nr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sa(){return Rr||(Rr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cs=new WeakMap,on=new WeakMap,Ls=new WeakMap,Ji=new WeakMap,_n=new WeakMap;function Ea(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",l)},c=()=>{n(Oe(i.result)),o()},l=()=>{r(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Cs.set(n,i)}).catch(()=>{}),_n.set(e,i),e}function ka(i){if(on.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",l),i.removeEventListener("abort",l)},c=()=>{n(),o()},l=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",l),i.addEventListener("abort",l)});on.set(i,e)}let an={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return on.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ls.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oe(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Aa(i){an=i(an)}function Oa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Xi(this),e,...n);return Ls.set(r,e.sort?e.sort():[e]),Oe(r)}:Sa().includes(i)?function(...e){return i.apply(Xi(this),e),Oe(Cs.get(this))}:function(...e){return Oe(i.apply(Xi(this),e))}}function Da(i){return typeof i=="function"?Oa(i):(i instanceof IDBTransaction&&ka(i),wa(i,ba())?new Proxy(i,an):i)}function Oe(i){if(i instanceof IDBRequest)return Ea(i);if(Ji.has(i))return Ji.get(i);const e=Da(i);return e!==i&&(Ji.set(i,e),_n.set(e,i)),e}const Xi=i=>_n.get(i);function Pa(i,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const l=indexedDB.open(i,e),u=Oe(l);return r&&l.addEventListener("upgradeneeded",p=>{r(Oe(l.result),p.oldVersion,p.newVersion,Oe(l.transaction),p)}),n&&l.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),u.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),u}const Ca=["get","getKey","getAll","getAllKeys","count"],La=["put","add","delete","clear"],Yi=new Map;function Mr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Yi.get(e))return Yi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=La.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Ca.includes(n)))return;const c=async function(l,...u){const p=this.transaction(l,o?"readwrite":"readonly");let _=p.store;return r&&(_=_.index(u.shift())),(await Promise.all([_[n](...u),o&&p.done]))[0]};return Yi.set(e,c),c}Aa(i=>({...i,get:(e,n,r)=>Mr(e,n)||i.get(e,n,r),has:(e,n)=>!!Mr(e,n)||i.has(e,n)}));/**
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
 */class xa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Na(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Na(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cn="@firebase/app",$r="0.14.11";/**
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
 */const ye=new yn("@firebase/app"),Ra="@firebase/app-compat",Ma="@firebase/analytics-compat",$a="@firebase/analytics",Ba="@firebase/app-check-compat",Wa="@firebase/app-check",Ua="@firebase/auth",Fa="@firebase/auth-compat",Va="@firebase/database",ja="@firebase/data-connect",qa="@firebase/database-compat",Ha="@firebase/functions",za="@firebase/functions-compat",Ga="@firebase/installations",Ka="@firebase/installations-compat",Ja="@firebase/messaging",Xa="@firebase/messaging-compat",Ya="@firebase/performance",Qa="@firebase/performance-compat",Za="@firebase/remote-config",ec="@firebase/remote-config-compat",tc="@firebase/storage",ic="@firebase/storage-compat",nc="@firebase/firestore",rc="@firebase/ai",sc="@firebase/firestore-compat",oc="firebase",ac="12.12.0",cc={[cn]:"fire-core",[Ra]:"fire-core-compat",[$a]:"fire-analytics",[Ma]:"fire-analytics-compat",[Wa]:"fire-app-check",[Ba]:"fire-app-check-compat",[Ua]:"fire-auth",[Fa]:"fire-auth-compat",[Va]:"fire-rtdb",[ja]:"fire-data-connect",[qa]:"fire-rtdb-compat",[Ha]:"fire-fn",[za]:"fire-fn-compat",[Ga]:"fire-iid",[Ka]:"fire-iid-compat",[Ja]:"fire-fcm",[Xa]:"fire-fcm-compat",[Ya]:"fire-perf",[Qa]:"fire-perf-compat",[Za]:"fire-rc",[ec]:"fire-rc-compat",[tc]:"fire-gcs",[ic]:"fire-gcs-compat",[nc]:"fire-fst",[sc]:"fire-fst-compat",[rc]:"fire-vertex","fire-js":"fire-js",[oc]:"fire-js-all"};/**
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
 */const lc=new Map,dc=new Map,Br=new Map;function Wr(i,e){try{i.container.addComponent(e)}catch(n){ye.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function tt(i){const e=i.name;if(Br.has(e))return ye.debug(`There were multiple attempts to register component ${e}.`),!1;Br.set(e,i);for(const n of lc.values())Wr(n,i);for(const n of dc.values())Wr(n,i);return!0}function $e(i){return i==null?!1:i.settings!==void 0}/**
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
 */const uc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new xt("app","Firebase",uc);/**
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
 */const gi=ac;function De(i,e,n){let r=cc[i]??i;n&&(r+=`-${n}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const l=[`Unable to register library "${r}" with version "${e}":`];o&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ye.warn(l.join(" "));return}tt(new et(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hc="firebase-heartbeat-database",fc=1,kt="firebase-heartbeat-store";let Qi=null;function xs(){return Qi||(Qi=Pa(hc,fc,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(kt)}catch(n){console.warn(n)}}}}).catch(i=>{throw In.create("idb-open",{originalErrorMessage:i.message})})),Qi}async function mc(i){try{const n=(await xs()).transaction(kt),r=await n.objectStore(kt).get(Ns(i));return await n.done,r}catch(e){if(e instanceof Le)ye.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ye.warn(n.message)}}}async function Ur(i,e){try{const r=(await xs()).transaction(kt,"readwrite");await r.objectStore(kt).put(e,Ns(i)),await r.done}catch(n){if(n instanceof Le)ye.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ye.warn(r.message)}}}function Ns(i){return`${i.name}!${i.options.appId}`}/**
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
 */const pc=1024,gc=30;class vc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _c(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Fr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>gc){const l=Ic(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ye.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fr(),{heartbeatsToSend:r,unsentEntries:o}=yc(this._heartbeatsCache.heartbeats),c=As(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return ye.warn(n),""}}}function Fr(){return new Date().toISOString().substring(0,10)}function yc(i,e=pc){const n=[];let r=i.slice();for(const o of i){const c=n.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),Vr(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Vr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _c{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return da()?ua().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mc(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ur(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ur(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vr(i){return As(JSON.stringify({version:2,heartbeats:i})).length}function Ic(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
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
 */function Tc(i){tt(new et("platform-logger",e=>new xa(e),"PRIVATE")),tt(new et("heartbeat",e=>new vc(e),"PRIVATE")),De(cn,$r,i),De(cn,$r,"esm2020"),De("fire-js","")}Tc("");var wc="firebase",bc="12.12.1";/**
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
 */De(wc,bc,"app");var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,h){function m(){}m.prototype=h.prototype,g.F=h.prototype,g.prototype=new m,g.prototype.constructor=g,g.D=function(y,v,I){for(var f=Array(arguments.length-2),z=2;z<arguments.length;z++)f[z-2]=arguments[z];return h.prototype[v].apply(y,f)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,h,m){m||(m=0);const y=Array(16);if(typeof h=="string")for(var v=0;v<16;++v)y[v]=h.charCodeAt(m++)|h.charCodeAt(m++)<<8|h.charCodeAt(m++)<<16|h.charCodeAt(m++)<<24;else for(v=0;v<16;++v)y[v]=h[m++]|h[m++]<<8|h[m++]<<16|h[m++]<<24;h=g.g[0],m=g.g[1],v=g.g[2];let I=g.g[3],f;f=h+(I^m&(v^I))+y[0]+3614090360&4294967295,h=m+(f<<7&4294967295|f>>>25),f=I+(v^h&(m^v))+y[1]+3905402710&4294967295,I=h+(f<<12&4294967295|f>>>20),f=v+(m^I&(h^m))+y[2]+606105819&4294967295,v=I+(f<<17&4294967295|f>>>15),f=m+(h^v&(I^h))+y[3]+3250441966&4294967295,m=v+(f<<22&4294967295|f>>>10),f=h+(I^m&(v^I))+y[4]+4118548399&4294967295,h=m+(f<<7&4294967295|f>>>25),f=I+(v^h&(m^v))+y[5]+1200080426&4294967295,I=h+(f<<12&4294967295|f>>>20),f=v+(m^I&(h^m))+y[6]+2821735955&4294967295,v=I+(f<<17&4294967295|f>>>15),f=m+(h^v&(I^h))+y[7]+4249261313&4294967295,m=v+(f<<22&4294967295|f>>>10),f=h+(I^m&(v^I))+y[8]+1770035416&4294967295,h=m+(f<<7&4294967295|f>>>25),f=I+(v^h&(m^v))+y[9]+2336552879&4294967295,I=h+(f<<12&4294967295|f>>>20),f=v+(m^I&(h^m))+y[10]+4294925233&4294967295,v=I+(f<<17&4294967295|f>>>15),f=m+(h^v&(I^h))+y[11]+2304563134&4294967295,m=v+(f<<22&4294967295|f>>>10),f=h+(I^m&(v^I))+y[12]+1804603682&4294967295,h=m+(f<<7&4294967295|f>>>25),f=I+(v^h&(m^v))+y[13]+4254626195&4294967295,I=h+(f<<12&4294967295|f>>>20),f=v+(m^I&(h^m))+y[14]+2792965006&4294967295,v=I+(f<<17&4294967295|f>>>15),f=m+(h^v&(I^h))+y[15]+1236535329&4294967295,m=v+(f<<22&4294967295|f>>>10),f=h+(v^I&(m^v))+y[1]+4129170786&4294967295,h=m+(f<<5&4294967295|f>>>27),f=I+(m^v&(h^m))+y[6]+3225465664&4294967295,I=h+(f<<9&4294967295|f>>>23),f=v+(h^m&(I^h))+y[11]+643717713&4294967295,v=I+(f<<14&4294967295|f>>>18),f=m+(I^h&(v^I))+y[0]+3921069994&4294967295,m=v+(f<<20&4294967295|f>>>12),f=h+(v^I&(m^v))+y[5]+3593408605&4294967295,h=m+(f<<5&4294967295|f>>>27),f=I+(m^v&(h^m))+y[10]+38016083&4294967295,I=h+(f<<9&4294967295|f>>>23),f=v+(h^m&(I^h))+y[15]+3634488961&4294967295,v=I+(f<<14&4294967295|f>>>18),f=m+(I^h&(v^I))+y[4]+3889429448&4294967295,m=v+(f<<20&4294967295|f>>>12),f=h+(v^I&(m^v))+y[9]+568446438&4294967295,h=m+(f<<5&4294967295|f>>>27),f=I+(m^v&(h^m))+y[14]+3275163606&4294967295,I=h+(f<<9&4294967295|f>>>23),f=v+(h^m&(I^h))+y[3]+4107603335&4294967295,v=I+(f<<14&4294967295|f>>>18),f=m+(I^h&(v^I))+y[8]+1163531501&4294967295,m=v+(f<<20&4294967295|f>>>12),f=h+(v^I&(m^v))+y[13]+2850285829&4294967295,h=m+(f<<5&4294967295|f>>>27),f=I+(m^v&(h^m))+y[2]+4243563512&4294967295,I=h+(f<<9&4294967295|f>>>23),f=v+(h^m&(I^h))+y[7]+1735328473&4294967295,v=I+(f<<14&4294967295|f>>>18),f=m+(I^h&(v^I))+y[12]+2368359562&4294967295,m=v+(f<<20&4294967295|f>>>12),f=h+(m^v^I)+y[5]+4294588738&4294967295,h=m+(f<<4&4294967295|f>>>28),f=I+(h^m^v)+y[8]+2272392833&4294967295,I=h+(f<<11&4294967295|f>>>21),f=v+(I^h^m)+y[11]+1839030562&4294967295,v=I+(f<<16&4294967295|f>>>16),f=m+(v^I^h)+y[14]+4259657740&4294967295,m=v+(f<<23&4294967295|f>>>9),f=h+(m^v^I)+y[1]+2763975236&4294967295,h=m+(f<<4&4294967295|f>>>28),f=I+(h^m^v)+y[4]+1272893353&4294967295,I=h+(f<<11&4294967295|f>>>21),f=v+(I^h^m)+y[7]+4139469664&4294967295,v=I+(f<<16&4294967295|f>>>16),f=m+(v^I^h)+y[10]+3200236656&4294967295,m=v+(f<<23&4294967295|f>>>9),f=h+(m^v^I)+y[13]+681279174&4294967295,h=m+(f<<4&4294967295|f>>>28),f=I+(h^m^v)+y[0]+3936430074&4294967295,I=h+(f<<11&4294967295|f>>>21),f=v+(I^h^m)+y[3]+3572445317&4294967295,v=I+(f<<16&4294967295|f>>>16),f=m+(v^I^h)+y[6]+76029189&4294967295,m=v+(f<<23&4294967295|f>>>9),f=h+(m^v^I)+y[9]+3654602809&4294967295,h=m+(f<<4&4294967295|f>>>28),f=I+(h^m^v)+y[12]+3873151461&4294967295,I=h+(f<<11&4294967295|f>>>21),f=v+(I^h^m)+y[15]+530742520&4294967295,v=I+(f<<16&4294967295|f>>>16),f=m+(v^I^h)+y[2]+3299628645&4294967295,m=v+(f<<23&4294967295|f>>>9),f=h+(v^(m|~I))+y[0]+4096336452&4294967295,h=m+(f<<6&4294967295|f>>>26),f=I+(m^(h|~v))+y[7]+1126891415&4294967295,I=h+(f<<10&4294967295|f>>>22),f=v+(h^(I|~m))+y[14]+2878612391&4294967295,v=I+(f<<15&4294967295|f>>>17),f=m+(I^(v|~h))+y[5]+4237533241&4294967295,m=v+(f<<21&4294967295|f>>>11),f=h+(v^(m|~I))+y[12]+1700485571&4294967295,h=m+(f<<6&4294967295|f>>>26),f=I+(m^(h|~v))+y[3]+2399980690&4294967295,I=h+(f<<10&4294967295|f>>>22),f=v+(h^(I|~m))+y[10]+4293915773&4294967295,v=I+(f<<15&4294967295|f>>>17),f=m+(I^(v|~h))+y[1]+2240044497&4294967295,m=v+(f<<21&4294967295|f>>>11),f=h+(v^(m|~I))+y[8]+1873313359&4294967295,h=m+(f<<6&4294967295|f>>>26),f=I+(m^(h|~v))+y[15]+4264355552&4294967295,I=h+(f<<10&4294967295|f>>>22),f=v+(h^(I|~m))+y[6]+2734768916&4294967295,v=I+(f<<15&4294967295|f>>>17),f=m+(I^(v|~h))+y[13]+1309151649&4294967295,m=v+(f<<21&4294967295|f>>>11),f=h+(v^(m|~I))+y[4]+4149444226&4294967295,h=m+(f<<6&4294967295|f>>>26),f=I+(m^(h|~v))+y[11]+3174756917&4294967295,I=h+(f<<10&4294967295|f>>>22),f=v+(h^(I|~m))+y[2]+718787259&4294967295,v=I+(f<<15&4294967295|f>>>17),f=m+(I^(v|~h))+y[9]+3951481745&4294967295,g.g[0]=g.g[0]+h&4294967295,g.g[1]=g.g[1]+(v+(f<<21&4294967295|f>>>11))&4294967295,g.g[2]=g.g[2]+v&4294967295,g.g[3]=g.g[3]+I&4294967295}r.prototype.v=function(g,h){h===void 0&&(h=g.length);const m=h-this.blockSize,y=this.C;let v=this.h,I=0;for(;I<h;){if(v==0)for(;I<=m;)o(this,g,I),I+=this.blockSize;if(typeof g=="string"){for(;I<h;)if(y[v++]=g.charCodeAt(I++),v==this.blockSize){o(this,y),v=0;break}}else for(;I<h;)if(y[v++]=g[I++],v==this.blockSize){o(this,y),v=0;break}}this.h=v,this.o+=h},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var h=1;h<g.length-8;++h)g[h]=0;h=this.o*8;for(var m=g.length-8;m<g.length;++m)g[m]=h&255,h/=256;for(this.v(g),g=Array(16),h=0,m=0;m<4;++m)for(let y=0;y<32;y+=8)g[h++]=this.g[m]>>>y&255;return g};function c(g,h){var m=u;return Object.prototype.hasOwnProperty.call(m,g)?m[g]:m[g]=h(g)}function l(g,h){this.h=h;const m=[];let y=!0;for(let v=g.length-1;v>=0;v--){const I=g[v]|0;y&&I==h||(m[v]=I,y=!1)}this.g=m}var u={};function p(g){return-128<=g&&g<128?c(g,function(h){return new l([h|0],h<0?-1:0)}):new l([g|0],g<0?-1:0)}function _(g){if(isNaN(g)||!isFinite(g))return S;if(g<0)return L(_(-g));const h=[];let m=1;for(let y=0;g>=m;y++)h[y]=g/m|0,m*=4294967296;return new l(h,0)}function E(g,h){if(g.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(g.charAt(0)=="-")return L(E(g.substring(1),h));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=_(Math.pow(h,8));let y=S;for(let I=0;I<g.length;I+=8){var v=Math.min(8,g.length-I);const f=parseInt(g.substring(I,I+v),h);v<8?(v=_(Math.pow(h,v)),y=y.j(v).add(_(f))):(y=y.j(m),y=y.add(_(f)))}return y}var S=p(0),w=p(1),k=p(16777216);i=l.prototype,i.m=function(){if(P(this))return-L(this).m();let g=0,h=1;for(let m=0;m<this.g.length;m++){const y=this.i(m);g+=(y>=0?y:4294967296+y)*h,h*=4294967296}return g},i.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(D(this))return"0";if(P(this))return"-"+L(this).toString(g);const h=_(Math.pow(g,6));var m=this;let y="";for(;;){const v=x(m,h).g;m=O(m,v.j(h));let I=((m.g.length>0?m.g[0]:m.h)>>>0).toString(g);if(m=v,D(m))return I+y;for(;I.length<6;)I="0"+I;y=I+y}},i.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function D(g){if(g.h!=0)return!1;for(let h=0;h<g.g.length;h++)if(g.g[h]!=0)return!1;return!0}function P(g){return g.h==-1}i.l=function(g){return g=O(this,g),P(g)?-1:D(g)?0:1};function L(g){const h=g.g.length,m=[];for(let y=0;y<h;y++)m[y]=~g.g[y];return new l(m,~g.h).add(w)}i.abs=function(){return P(this)?L(this):this},i.add=function(g){const h=Math.max(this.g.length,g.g.length),m=[];let y=0;for(let v=0;v<=h;v++){let I=y+(this.i(v)&65535)+(g.i(v)&65535),f=(I>>>16)+(this.i(v)>>>16)+(g.i(v)>>>16);y=f>>>16,I&=65535,f&=65535,m[v]=f<<16|I}return new l(m,m[m.length-1]&-2147483648?-1:0)};function O(g,h){return g.add(L(h))}i.j=function(g){if(D(this)||D(g))return S;if(P(this))return P(g)?L(this).j(L(g)):L(L(this).j(g));if(P(g))return L(this.j(L(g)));if(this.l(k)<0&&g.l(k)<0)return _(this.m()*g.m());const h=this.g.length+g.g.length,m=[];for(var y=0;y<2*h;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(let v=0;v<g.g.length;v++){const I=this.i(y)>>>16,f=this.i(y)&65535,z=g.i(v)>>>16,ce=g.i(v)&65535;m[2*y+2*v]+=f*ce,C(m,2*y+2*v),m[2*y+2*v+1]+=I*ce,C(m,2*y+2*v+1),m[2*y+2*v+1]+=f*z,C(m,2*y+2*v+1),m[2*y+2*v+2]+=I*z,C(m,2*y+2*v+2)}for(g=0;g<h;g++)m[g]=m[2*g+1]<<16|m[2*g];for(g=h;g<2*h;g++)m[g]=0;return new l(m,0)};function C(g,h){for(;(g[h]&65535)!=g[h];)g[h+1]+=g[h]>>>16,g[h]&=65535,h++}function N(g,h){this.g=g,this.h=h}function x(g,h){if(D(h))throw Error("division by zero");if(D(g))return new N(S,S);if(P(g))return h=x(L(g),h),new N(L(h.g),L(h.h));if(P(h))return h=x(g,L(h)),new N(L(h.g),h.h);if(g.g.length>30){if(P(g)||P(h))throw Error("slowDivide_ only works with positive integers.");for(var m=w,y=h;y.l(g)<=0;)m=B(m),y=B(y);var v=V(m,1),I=V(y,1);for(y=V(y,2),m=V(m,2);!D(y);){var f=I.add(y);f.l(g)<=0&&(v=v.add(m),I=f),y=V(y,1),m=V(m,1)}return h=O(g,v.j(h)),new N(v,h)}for(v=S;g.l(h)>=0;){for(m=Math.max(1,Math.floor(g.m()/h.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),I=_(m),f=I.j(h);P(f)||f.l(g)>0;)m-=y,I=_(m),f=I.j(h);D(I)&&(I=w),v=v.add(I),g=O(g,f)}return new N(v,g)}i.B=function(g){return x(this,g).h},i.and=function(g){const h=Math.max(this.g.length,g.g.length),m=[];for(let y=0;y<h;y++)m[y]=this.i(y)&g.i(y);return new l(m,this.h&g.h)},i.or=function(g){const h=Math.max(this.g.length,g.g.length),m=[];for(let y=0;y<h;y++)m[y]=this.i(y)|g.i(y);return new l(m,this.h|g.h)},i.xor=function(g){const h=Math.max(this.g.length,g.g.length),m=[];for(let y=0;y<h;y++)m[y]=this.i(y)^g.i(y);return new l(m,this.h^g.h)};function B(g){const h=g.g.length+1,m=[];for(let y=0;y<h;y++)m[y]=g.i(y)<<1|g.i(y-1)>>>31;return new l(m,g.h)}function V(g,h){const m=h>>5;h%=32;const y=g.g.length-m,v=[];for(let I=0;I<y;I++)v[I]=h>0?g.i(I+m)>>>h|g.i(I+m+1)<<32-h:g.i(I+m);return new l(v,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=E,Tn=l}).apply(typeof jr<"u"?jr:typeof self<"u"?self:typeof window<"u"?window:{});var Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xt=="object"&&Xt];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var d=0;d<t.length-1;d++){var T=t[d];if(!(T in a))break e;a=a[T]}t=t[t.length-1],d=a[t],s=s(d),s!=d&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}o("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(t){return t||function(s){var a=[],d;for(d in s)Object.prototype.hasOwnProperty.call(s,d)&&a.push([d,s[d]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function u(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function p(t,s,a){return t.call.apply(t.bind,arguments)}function _(t,s,a){return _=p,_.apply(null,arguments)}function E(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var d=a.slice();return d.push.apply(d,arguments),t.apply(this,d)}}function S(t,s){function a(){}a.prototype=s.prototype,t.Z=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Ob=function(d,T,b){for(var A=Array(arguments.length-2),M=2;M<arguments.length;M++)A[M-2]=arguments[M];return s.prototype[T].apply(d,A)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function k(t){const s=t.length;if(s>0){const a=Array(s);for(let d=0;d<s;d++)a[d]=t[d];return a}return[]}function D(t,s){for(let d=1;d<arguments.length;d++){const T=arguments[d];var a=typeof T;if(a=a!="object"?a:T?Array.isArray(T)?"array":a:"null",a=="array"||a=="object"&&typeof T.length=="number"){a=t.length||0;const b=T.length||0;t.length=a+b;for(let A=0;A<b;A++)t[a+A]=T[A]}else t.push(T)}}class P{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return this.h>0?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function L(t){l.setTimeout(()=>{throw t},0)}function O(){var t=g;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class C{constructor(){this.h=this.g=null}add(s,a){const d=N.get();d.set(s,a),this.h?this.h.next=d:this.g=d,this.h=d}}var N=new P(()=>new x,t=>t.reset());class x{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let B,V=!1,g=new C,h=()=>{const t=Promise.resolve(void 0);B=()=>{t.then(m)}};function m(){for(var t;t=O();){try{t.h.call(t.g)}catch(a){L(a)}var s=N;s.j(t),s.h<100&&(s.h++,t.next=s.g,s.g=t)}V=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};l.addEventListener("test",a,s),l.removeEventListener("test",a,s)}catch{}return t}();function f(t){return/^[\s\xa0]*$/.test(t)}function z(t,s){v.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,s)}S(z,v),z.prototype.init=function(t,s){const a=this.type=t.type,d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget,s||(a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement)),this.relatedTarget=s,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&z.Z.h.call(this)},z.prototype.h=function(){z.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ce="closure_listenable_"+(Math.random()*1e6|0),go=0;function vo(t,s,a,d,T){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!d,this.ha=T,this.key=++go,this.da=this.fa=!1}function Bt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wt(t,s,a){for(const d in t)s.call(a,t[d],d,t)}function yo(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function Nn(t){const s={};for(const a in t)s[a]=t[a];return s}const Rn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mn(t,s){let a,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(a in d)t[a]=d[a];for(let b=0;b<Rn.length;b++)a=Rn[b],Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a])}}function Ut(t){this.src=t,this.g={},this.h=0}Ut.prototype.add=function(t,s,a,d,T){const b=t.toString();t=this.g[b],t||(t=this.g[b]=[],this.h++);const A=bi(t,s,d,T);return A>-1?(s=t[A],a||(s.fa=!1)):(s=new vo(s,this.src,b,!!d,T),s.fa=a,t.push(s)),s};function wi(t,s){const a=s.type;if(a in t.g){var d=t.g[a],T=Array.prototype.indexOf.call(d,s,void 0),b;(b=T>=0)&&Array.prototype.splice.call(d,T,1),b&&(Bt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function bi(t,s,a,d){for(let T=0;T<t.length;++T){const b=t[T];if(!b.da&&b.listener==s&&b.capture==!!a&&b.ha==d)return T}return-1}var Si="closure_lm_"+(Math.random()*1e6|0),Ei={};function $n(t,s,a,d,T){if(Array.isArray(s)){for(let b=0;b<s.length;b++)$n(t,s[b],a,d,T);return null}return a=Un(a),t&&t[ce]?t.J(s,a,u(d)?!!d.capture:!1,T):_o(t,s,a,!1,d,T)}function _o(t,s,a,d,T,b){if(!s)throw Error("Invalid event type");const A=u(T)?!!T.capture:!!T;let M=Ai(t);if(M||(t[Si]=M=new Ut(t)),a=M.add(s,a,d,A,b),a.proxy)return a;if(d=Io(),a.proxy=d,d.src=t,d.listener=a,t.addEventListener)I||(T=A),T===void 0&&(T=!1),t.addEventListener(s.toString(),d,T);else if(t.attachEvent)t.attachEvent(Wn(s.toString()),d);else if(t.addListener&&t.removeListener)t.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Io(){function t(a){return s.call(t.src,t.listener,a)}const s=To;return t}function Bn(t,s,a,d,T){if(Array.isArray(s))for(var b=0;b<s.length;b++)Bn(t,s[b],a,d,T);else d=u(d)?!!d.capture:!!d,a=Un(a),t&&t[ce]?(t=t.i,b=String(s).toString(),b in t.g&&(s=t.g[b],a=bi(s,a,d,T),a>-1&&(Bt(s[a]),Array.prototype.splice.call(s,a,1),s.length==0&&(delete t.g[b],t.h--)))):t&&(t=Ai(t))&&(s=t.g[s.toString()],t=-1,s&&(t=bi(s,a,d,T)),(a=t>-1?s[t]:null)&&ki(a))}function ki(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[ce])wi(s.i,t);else{var a=t.type,d=t.proxy;s.removeEventListener?s.removeEventListener(a,d,t.capture):s.detachEvent?s.detachEvent(Wn(a),d):s.addListener&&s.removeListener&&s.removeListener(d),(a=Ai(s))?(wi(a,t),a.h==0&&(a.src=null,s[Si]=null)):Bt(t)}}}function Wn(t){return t in Ei?Ei[t]:Ei[t]="on"+t}function To(t,s){if(t.da)t=!0;else{s=new z(s,this);const a=t.listener,d=t.ha||t.src;t.fa&&ki(t),t=a.call(d,s)}return t}function Ai(t){return t=t[Si],t instanceof Ut?t:null}var Oi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Un(t){return typeof t=="function"?t:(t[Oi]||(t[Oi]=function(s){return t.handleEvent(s)}),t[Oi])}function Y(){y.call(this),this.i=new Ut(this),this.M=this,this.G=null}S(Y,y),Y.prototype[ce]=!0,Y.prototype.removeEventListener=function(t,s,a,d){Bn(this,t,s,a,d)};function Z(t,s){var a,d=t.G;if(d)for(a=[];d;d=d.G)a.push(d);if(t=t.M,d=s.type||s,typeof s=="string")s=new v(s,t);else if(s instanceof v)s.target=s.target||t;else{var T=s;s=new v(d,t),Mn(s,T)}T=!0;let b,A;if(a)for(A=a.length-1;A>=0;A--)b=s.g=a[A],T=Ft(b,d,!0,s)&&T;if(b=s.g=t,T=Ft(b,d,!0,s)&&T,T=Ft(b,d,!1,s)&&T,a)for(A=0;A<a.length;A++)b=s.g=a[A],T=Ft(b,d,!1,s)&&T}Y.prototype.N=function(){if(Y.Z.N.call(this),this.i){var t=this.i;for(const s in t.g){const a=t.g[s];for(let d=0;d<a.length;d++)Bt(a[d]);delete t.g[s],t.h--}}this.G=null},Y.prototype.J=function(t,s,a,d){return this.i.add(String(t),s,!1,a,d)},Y.prototype.K=function(t,s,a,d){return this.i.add(String(t),s,!0,a,d)};function Ft(t,s,a,d){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();let T=!0;for(let b=0;b<s.length;++b){const A=s[b];if(A&&!A.da&&A.capture==a){const M=A.listener,J=A.ha||A.src;A.fa&&wi(t.i,A),T=M.call(J,d)!==!1&&T}}return T&&!d.defaultPrevented}function wo(t,s){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=_(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(s)>2147483647?-1:l.setTimeout(t,s||0)}function Fn(t){t.g=wo(()=>{t.g=null,t.i&&(t.i=!1,Fn(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class bo extends y{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Fn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(t){y.call(this),this.h=t,this.g={}}S(nt,y);var Vn=[];function jn(t){Wt(t.g,function(s,a){this.g.hasOwnProperty(a)&&ki(s)},t),t.g={}}nt.prototype.N=function(){nt.Z.N.call(this),jn(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Di=l.JSON.stringify,So=l.JSON.parse,Eo=class{stringify(t){return l.JSON.stringify(t,void 0)}parse(t){return l.JSON.parse(t,void 0)}};function qn(){}function ko(){}var rt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pi(){v.call(this,"d")}S(Pi,v);function Ci(){v.call(this,"c")}S(Ci,v);var Ge={},Hn=null;function Li(){return Hn=Hn||new Y}Ge.Ia="serverreachability";function zn(t){v.call(this,Ge.Ia,t)}S(zn,v);function st(t){const s=Li();Z(s,new zn(s))}Ge.STAT_EVENT="statevent";function Gn(t,s){v.call(this,Ge.STAT_EVENT,t),this.stat=s}S(Gn,v);function ee(t){const s=Li();Z(s,new Gn(s,t))}Ge.Ja="timingevent";function Kn(t,s){v.call(this,Ge.Ja,t),this.size=s}S(Kn,v);function ot(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){t()},s)}function at(){this.g=!0}at.prototype.ua=function(){this.g=!1};function Ao(t,s,a,d,T,b){t.info(function(){if(t.g)if(b){var A="",M=b.split("&");for(let q=0;q<M.length;q++){var J=M[q].split("=");if(J.length>1){const X=J[0];J=J[1];const de=X.split("_");A=de.length>=2&&de[1]=="type"?A+(X+"="+J+"&"):A+(X+"=redacted&")}}}else A=null;else A=b;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+s+`
`+a+`
`+A})}function Oo(t,s,a,d,T,b,A){t.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+s+`
`+a+`
`+b+" "+A})}function Ke(t,s,a,d){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+Po(t,a)+(d?" "+d:"")})}function Do(t,s){t.info(function(){return"TIMEOUT: "+s})}at.prototype.info=function(){};function Po(t,s){if(!t.g)return s;if(!s)return null;try{const b=JSON.parse(s);if(b){for(t=0;t<b.length;t++)if(Array.isArray(b[t])){var a=b[t];if(!(a.length<2)){var d=a[1];if(Array.isArray(d)&&!(d.length<1)){var T=d[0];if(T!="noop"&&T!="stop"&&T!="close")for(let A=1;A<d.length;A++)d[A]=""}}}}return Di(b)}catch{return s}}var xi={NO_ERROR:0,TIMEOUT:8},Co={},Jn;function Ni(){}S(Ni,qn),Ni.prototype.g=function(){return new XMLHttpRequest},Jn=new Ni;function ct(t){return encodeURIComponent(String(t))}function Lo(t){var s=1;t=t.split(":");const a=[];for(;s>0&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function Ie(t,s,a,d){this.j=t,this.i=s,this.l=a,this.S=d||1,this.V=new nt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xn}function Xn(){this.i=null,this.g="",this.h=!1}var Yn={},Ri={};function Mi(t,s,a){t.M=1,t.A=jt(le(s)),t.u=a,t.R=!0,Qn(t,null)}function Qn(t,s){t.F=Date.now(),Vt(t),t.B=le(t.A);var a=t.B,d=t.S;Array.isArray(d)||(d=[String(d)]),ur(a.i,"t",d),t.C=0,a=t.j.L,t.h=new Xn,t.g=Dr(t.j,a?s:null,!t.u),t.P>0&&(t.O=new bo(_(t.Y,t,t.g),t.P)),s=t.V,a=t.g,d=t.ba;var T="readystatechange";Array.isArray(T)||(T&&(Vn[0]=T.toString()),T=Vn);for(let b=0;b<T.length;b++){const A=$n(a,T[b],d||s.handleEvent,!1,s.h||s);if(!A)break;s.g[A.key]=A}s=t.J?Nn(t.J):{},t.u?(t.v||(t.v="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,s)):(t.v="GET",t.g.ea(t.B,t.v,null,s)),st(),Ao(t.i,t.v,t.B,t.l,t.S,t.u)}Ie.prototype.ba=function(t){t=t.target;const s=this.O;s&&be(t)==3?s.j():this.Y(t)},Ie.prototype.Y=function(t){try{if(t==this.g)e:{const M=be(this.g),J=this.g.ya(),q=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||yr(this.g)))){this.K||M!=4||J==7||(J==8||q<=0?st(3):st(2)),$i(this);var s=this.g.ca();this.X=s;var a=xo(this);if(this.o=s==200,Oo(this.i,this.v,this.B,this.l,this.S,M,s),this.o){if(this.U&&!this.L){t:{if(this.g){var d,T=this.g;if((d=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(d)){var b=d;break t}}b=null}if(t=b)Ke(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Bi(this,t);else{this.o=!1,this.m=3,ee(12),xe(this),lt(this);break e}}if(this.R){t=!0;let X;for(;!this.K&&this.C<a.length;)if(X=No(this,a),X==Ri){M==4&&(this.m=4,ee(14),t=!1),Ke(this.i,this.l,null,"[Incomplete Response]");break}else if(X==Yn){this.m=4,ee(15),Ke(this.i,this.l,a,"[Invalid Chunk]"),t=!1;break}else Ke(this.i,this.l,X,null),Bi(this,X);if(Zn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||a.length!=0||this.h.h||(this.m=1,ee(16),t=!1),this.o=this.o&&t,!t)Ke(this.i,this.l,a,"[Invalid Chunked Response]"),xe(this),lt(this);else if(a.length>0&&!this.W){this.W=!0;var A=this.j;A.g==this&&A.aa&&!A.P&&(A.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),zi(A),A.P=!0,ee(11))}}else Ke(this.i,this.l,a,null),Bi(this,a);M==4&&xe(this),this.o&&!this.K&&(M==4?Er(this.j,this):(this.o=!1,Vt(this)))}else Ko(this.g),s==400&&a.indexOf("Unknown SID")>0?(this.m=3,ee(12)):(this.m=0,ee(13)),xe(this),lt(this)}}}catch{}finally{}};function xo(t){if(!Zn(t))return t.g.la();const s=yr(t.g);if(s==="")return"";let a="";const d=s.length,T=be(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return xe(t),lt(t),"";t.h.i=new l.TextDecoder}for(let b=0;b<d;b++)t.h.h=!0,a+=t.h.i.decode(s[b],{stream:!(T&&b==d-1)});return s.length=0,t.h.g+=a,t.C=0,t.h.g}function Zn(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function No(t,s){var a=t.C,d=s.indexOf(`
`,a);return d==-1?Ri:(a=Number(s.substring(a,d)),isNaN(a)?Yn:(d+=1,d+a>s.length?Ri:(s=s.slice(d,d+a),t.C=d+a,s)))}Ie.prototype.cancel=function(){this.K=!0,xe(this)};function Vt(t){t.T=Date.now()+t.H,er(t,t.H)}function er(t,s){if(t.D!=null)throw Error("WatchDog timer not null");t.D=ot(_(t.aa,t),s)}function $i(t){t.D&&(l.clearTimeout(t.D),t.D=null)}Ie.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Do(this.i,this.B),this.M!=2&&(st(),ee(17)),xe(this),this.m=2,lt(this)):er(this,this.T-t)};function lt(t){t.j.I==0||t.K||Er(t.j,t)}function xe(t){$i(t);var s=t.O;s&&typeof s.dispose=="function"&&s.dispose(),t.O=null,jn(t.V),t.g&&(s=t.g,t.g=null,s.abort(),s.dispose())}function Bi(t,s){try{var a=t.j;if(a.I!=0&&(a.g==t||Wi(a.h,t))){if(!t.L&&Wi(a.h,t)&&a.I==3){try{var d=a.Ba.g.parse(s)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<t.F)Kt(a),zt(a);else break e;Hi(a),ee(18)}}else a.xa=T[1],0<a.xa-a.K&&T[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=ot(_(a.Va,a),6e3));nr(a.h)<=1&&a.ta&&(a.ta=void 0)}else Re(a,11)}else if((t.L||a.g==t)&&Kt(a),!f(s))for(T=a.Ba.g.parse(s),s=0;s<T.length;s++){let q=T[s];const X=q[0];if(!(X<=a.K))if(a.K=X,q=q[1],a.I==2)if(q[0]=="c"){a.M=q[1],a.ba=q[2];const de=q[3];de!=null&&(a.ka=de,a.j.info("VER="+a.ka));const Me=q[4];Me!=null&&(a.za=Me,a.j.info("SVER="+a.za));const Se=q[5];Se!=null&&typeof Se=="number"&&Se>0&&(d=1.5*Se,a.O=d,a.j.info("backChannelRequestTimeoutMs_="+d)),d=a;const Ee=t.g;if(Ee){const Jt=Ee.g?Ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jt){var b=d.h;b.g||Jt.indexOf("spdy")==-1&&Jt.indexOf("quic")==-1&&Jt.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ui(b,b.h),b.h=null))}if(d.G){const Gi=Ee.g?Ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Gi&&(d.wa=Gi,H(d.J,d.G,Gi))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-t.F,a.j.info("Handshake RTT: "+a.T+"ms")),d=a;var A=t;if(d.na=Or(d,d.L?d.ba:null,d.W),A.L){rr(d.h,A);var M=A,J=d.O;J&&(M.H=J),M.D&&($i(M),Vt(M)),d.g=A}else br(d);a.i.length>0&&Gt(a)}else q[0]!="stop"&&q[0]!="close"||Re(a,7);else a.I==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Re(a,7):qi(a):q[0]!="noop"&&a.l&&a.l.qa(q),a.A=0)}}st(4)}catch{}}var Ro=class{constructor(t,s){this.g=t,this.map=s}};function tr(t){this.l=t||10,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ir(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function nr(t){return t.h?1:t.g?t.g.size:0}function Wi(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Ui(t,s){t.g?t.g.add(s):t.h=s}function rr(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}tr.prototype.cancel=function(){if(this.i=sr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sr(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.G);return s}return k(t.i)}var or=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mo(t,s){if(t){t=t.split("&");for(let a=0;a<t.length;a++){const d=t[a].indexOf("=");let T,b=null;d>=0?(T=t[a].substring(0,d),b=t[a].substring(d+1)):T=t[a],s(T,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Te(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let s;t instanceof Te?(this.l=t.l,dt(this,t.j),this.o=t.o,this.g=t.g,ut(this,t.u),this.h=t.h,Fi(this,hr(t.i)),this.m=t.m):t&&(s=String(t).match(or))?(this.l=!1,dt(this,s[1]||"",!0),this.o=ht(s[2]||""),this.g=ht(s[3]||"",!0),ut(this,s[4]),this.h=ht(s[5]||"",!0),Fi(this,s[6]||"",!0),this.m=ht(s[7]||"")):(this.l=!1,this.i=new mt(null,this.l))}Te.prototype.toString=function(){const t=[];var s=this.j;s&&t.push(ft(s,ar,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(ft(s,ar,!0),"@"),t.push(ct(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&t.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(ft(a,a.charAt(0)=="/"?Wo:Bo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",ft(a,Fo)),t.join("")},Te.prototype.resolve=function(t){const s=le(this);let a=!!t.j;a?dt(s,t.j):a=!!t.o,a?s.o=t.o:a=!!t.g,a?s.g=t.g:a=t.u!=null;var d=t.h;if(a)ut(s,t.u);else if(a=!!t.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var T=s.h.lastIndexOf("/");T!=-1&&(d=s.h.slice(0,T+1)+d)}if(T=d,T==".."||T==".")d="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){d=T.lastIndexOf("/",0)==0,T=T.split("/");const b=[];for(let A=0;A<T.length;){const M=T[A++];M=="."?d&&A==T.length&&b.push(""):M==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),d&&A==T.length&&b.push("")):(b.push(M),d=!0)}d=b.join("/")}else d=T}return a?s.h=d:a=t.i.toString()!=="",a?Fi(s,hr(t.i)):a=!!t.m,a&&(s.m=t.m),s};function le(t){return new Te(t)}function dt(t,s,a){t.j=a?ht(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function ut(t,s){if(s){if(s=Number(s),isNaN(s)||s<0)throw Error("Bad port number "+s);t.u=s}else t.u=null}function Fi(t,s,a){s instanceof mt?(t.i=s,Vo(t.i,t.l)):(a||(s=ft(s,Uo)),t.i=new mt(s,t.l))}function H(t,s,a){t.i.set(s,a)}function jt(t){return H(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function ht(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ft(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,$o),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $o(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ar=/[#\/\?@]/g,Bo=/[#\?:]/g,Wo=/[#\?]/g,Uo=/[#\?@]/g,Fo=/#/g;function mt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Ne(t){t.g||(t.g=new Map,t.h=0,t.i&&Mo(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=mt.prototype,i.add=function(t,s){Ne(this),this.i=null,t=Je(this,t);let a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function cr(t,s){Ne(t),s=Je(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function lr(t,s){return Ne(t),s=Je(t,s),t.g.has(s)}i.forEach=function(t,s){Ne(this),this.g.forEach(function(a,d){a.forEach(function(T){t.call(s,T,d,this)},this)},this)};function dr(t,s){Ne(t);let a=[];if(typeof s=="string")lr(t,s)&&(a=a.concat(t.g.get(Je(t,s))));else for(t=Array.from(t.g.values()),s=0;s<t.length;s++)a=a.concat(t[s]);return a}i.set=function(t,s){return Ne(this),this.i=null,t=Je(this,t),lr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=dr(this,t),t.length>0?String(t[0]):s):s};function ur(t,s,a){cr(t,s),a.length>0&&(t.i=null,t.g.set(Je(t,s),k(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(let d=0;d<s.length;d++){var a=s[d];const T=ct(a);a=dr(this,a);for(let b=0;b<a.length;b++){let A=T;a[b]!==""&&(A+="="+ct(a[b])),t.push(A)}}return this.i=t.join("&")};function hr(t){const s=new mt;return s.i=t.i,t.g&&(s.g=new Map(t.g),s.h=t.h),s}function Je(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Vo(t,s){s&&!t.j&&(Ne(t),t.i=null,t.g.forEach(function(a,d){const T=d.toLowerCase();d!=T&&(cr(this,d),ur(this,T,a))},t)),t.j=s}function jo(t,s){const a=new at;if(l.Image){const d=new Image;d.onload=E(we,a,"TestLoadImage: loaded",!0,s,d),d.onerror=E(we,a,"TestLoadImage: error",!1,s,d),d.onabort=E(we,a,"TestLoadImage: abort",!1,s,d),d.ontimeout=E(we,a,"TestLoadImage: timeout",!1,s,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=t}else s(!1)}function qo(t,s){const a=new at,d=new AbortController,T=setTimeout(()=>{d.abort(),we(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:d.signal}).then(b=>{clearTimeout(T),b.ok?we(a,"TestPingServer: ok",!0,s):we(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(T),we(a,"TestPingServer: error",!1,s)})}function we(t,s,a,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(a)}catch{}}function Ho(){this.g=new Eo}function Vi(t){this.i=t.Sb||null,this.h=t.ab||!1}S(Vi,qn),Vi.prototype.g=function(){return new qt(this.i,this.h)};function qt(t,s){Y.call(this),this.H=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(qt,Y),i=qt.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=s,this.readyState=1,gt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const s={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(s.body=t),(this.H||l).fetch(new Request(this.D,s)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pt(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gt(this)),this.g&&(this.readyState=3,gt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fr(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function fr(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.B.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?pt(this):gt(this),this.readyState==3&&fr(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,pt(this))},i.Na=function(t){this.g&&(this.response=t,pt(this))},i.ga=function(){this.g&&pt(this)};function pt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,gt(t)}i.setRequestHeader=function(t,s){this.A.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function gt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function mr(t){let s="";return Wt(t,function(a,d){s+=d,s+=":",s+=a,s+=`\r
`}),s}function ji(t,s,a){e:{for(d in a){var d=!1;break e}d=!0}d||(a=mr(a),typeof t=="string"?a!=null&&ct(a):H(t,s,a))}function G(t){Y.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(G,Y);var zo=/^https?$/i,Go=["POST","PUT"];i=G.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,s,a,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Jn.g(),this.g.onreadystatechange=w(_(this.Ca,this));try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(b){pr(this,b);return}if(t=a||"",a=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)a.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const b of d.keys())a.set(b,d.get(b));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(a.keys()).find(b=>b.toLowerCase()=="content-type"),T=l.FormData&&t instanceof l.FormData,!(Array.prototype.indexOf.call(Go,s,void 0)>=0)||d||T||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,A]of a)this.g.setRequestHeader(b,A);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(b){pr(this,b)}};function pr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.o=5,gr(t),Ht(t)}function gr(t){t.A||(t.A=!0,Z(t,"complete"),Z(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,Z(this,"complete"),Z(this,"abort"),Ht(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ht(this,!0)),G.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?vr(this):this.Xa())},i.Xa=function(){vr(this)};function vr(t){if(t.h&&typeof c<"u"){if(t.v&&be(t)==4)setTimeout(t.Ca.bind(t),0);else if(Z(t,"readystatechange"),be(t)==4){t.h=!1;try{const b=t.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var d;if(d=b===0){let A=String(t.D).match(or)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),d=!zo.test(A?A.toLowerCase():"")}a=d}if(a)Z(t,"complete"),Z(t,"success");else{t.o=6;try{var T=be(t)>2?t.g.statusText:""}catch{T=""}t.l=T+" ["+t.ca()+"]",gr(t)}}finally{Ht(t)}}}}function Ht(t,s){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const a=t.g;t.g=null,s||Z(t,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function be(t){return t.g?t.g.readyState:0}i.ca=function(){try{return be(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),So(s)}};function yr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Ko(t){const s={};t=(t.g&&be(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<t.length;d++){if(f(t[d]))continue;var a=Lo(t[d]);const T=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const b=s[T]||[];s[T]=b,b.push(a)}yo(s,function(d){return d.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vt(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function _r(t){this.za=0,this.i=[],this.j=new at,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vt("baseRetryDelayMs",5e3,t),this.Za=vt("retryDelaySeedMs",1e4,t),this.Ta=vt("forwardChannelMaxRetries",2,t),this.va=vt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new tr(t&&t.concurrentRequestLimit),this.Ba=new Ho,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=_r.prototype,i.ka=8,i.I=1,i.connect=function(t,s,a,d){ee(0),this.W=t,this.H=s||{},a&&d!==void 0&&(this.H.OSID=a,this.H.OAID=d),this.F=this.X,this.J=Or(this,null,this.W),Gt(this)};function qi(t){if(Ir(t),t.I==3){var s=t.V++,a=le(t.J);if(H(a,"SID",t.M),H(a,"RID",s),H(a,"TYPE","terminate"),yt(t,a),s=new Ie(t,t.j,s),s.M=2,s.A=jt(le(a)),a=!1,l.navigator&&l.navigator.sendBeacon)try{a=l.navigator.sendBeacon(s.A.toString(),"")}catch{}!a&&l.Image&&(new Image().src=s.A,a=!0),a||(s.g=Dr(s.j,null),s.g.ea(s.A)),s.F=Date.now(),Vt(s)}Ar(t)}function zt(t){t.g&&(zi(t),t.g.cancel(),t.g=null)}function Ir(t){zt(t),t.v&&(l.clearTimeout(t.v),t.v=null),Kt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&l.clearTimeout(t.m),t.m=null)}function Gt(t){if(!ir(t.h)&&!t.m){t.m=!0;var s=t.Ea;B||h(),V||(B(),V=!0),g.add(s,t),t.D=0}}function Jo(t,s){return nr(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=s.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=ot(_(t.Ea,t,s),kr(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const T=new Ie(this,this.j,t);let b=this.o;if(this.U&&(b?(b=Nn(b),Mn(b,this.U)):b=this.U),this.u!==null||this.R||(T.J=b,b=null),this.S)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var d=this.i[a];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(s+=d,s>4096){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=wr(this,T,s),a=le(this.J),H(a,"RID",t),H(a,"CVER",22),this.G&&H(a,"X-HTTP-Session-Id",this.G),yt(this,a),b&&(this.R?s="headers="+ct(mr(b))+"&"+s:this.u&&ji(a,this.u,b)),Ui(this.h,T),this.Ra&&H(a,"TYPE","init"),this.S?(H(a,"$req",s),H(a,"SID","null"),T.U=!0,Mi(T,a,null)):Mi(T,a,s),this.I=2}}else this.I==3&&(t?Tr(this,t):this.i.length==0||ir(this.h)||Tr(this))};function Tr(t,s){var a;s?a=s.l:a=t.V++;const d=le(t.J);H(d,"SID",t.M),H(d,"RID",a),H(d,"AID",t.K),yt(t,d),t.u&&t.o&&ji(d,t.u,t.o),a=new Ie(t,t.j,a,t.D+1),t.u===null&&(a.J=t.o),s&&(t.i=s.G.concat(t.i)),s=wr(t,a,1e3),a.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Ui(t.h,a),Mi(a,d,s)}function yt(t,s){t.H&&Wt(t.H,function(a,d){H(s,d,a)}),t.l&&Wt({},function(a,d){H(s,d,a)})}function wr(t,s,a){a=Math.min(t.i.length,a);const d=t.l?_(t.l.Ka,t.l,t):null;e:{var T=t.i;let M=-1;for(;;){const J=["count="+a];M==-1?a>0?(M=T[0].g,J.push("ofs="+M)):M=0:J.push("ofs="+M);let q=!0;for(let X=0;X<a;X++){var b=T[X].g;const de=T[X].map;if(b-=M,b<0)M=Math.max(0,T[X].g-100),q=!1;else try{b="req"+b+"_"||"";try{var A=de instanceof Map?de:Object.entries(de);for(const[Me,Se]of A){let Ee=Se;u(Se)&&(Ee=Di(Se)),J.push(b+Me+"="+encodeURIComponent(Ee))}}catch(Me){throw J.push(b+"type="+encodeURIComponent("_badmap")),Me}}catch{d&&d(de)}}if(q){A=J.join("&");break e}}A=void 0}return t=t.i.splice(0,a),s.G=t,A}function br(t){if(!t.g&&!t.v){t.Y=1;var s=t.Da;B||h(),V||(B(),V=!0),g.add(s,t),t.A=0}}function Hi(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=ot(_(t.Da,t),kr(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,Sr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=ot(_(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ee(10),zt(this),Sr(this))};function zi(t){t.B!=null&&(l.clearTimeout(t.B),t.B=null)}function Sr(t){t.g=new Ie(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var s=le(t.na);H(s,"RID","rpc"),H(s,"SID",t.M),H(s,"AID",t.K),H(s,"CI",t.F?"0":"1"),!t.F&&t.ia&&H(s,"TO",t.ia),H(s,"TYPE","xmlhttp"),yt(t,s),t.u&&t.o&&ji(s,t.u,t.o),t.O&&(t.g.H=t.O);var a=t.g;t=t.ba,a.M=1,a.A=jt(le(s)),a.u=null,a.R=!0,Qn(a,t)}i.Va=function(){this.C!=null&&(this.C=null,zt(this),Hi(this),ee(19))};function Kt(t){t.C!=null&&(l.clearTimeout(t.C),t.C=null)}function Er(t,s){var a=null;if(t.g==s){Kt(t),zi(t),t.g=null;var d=2}else if(Wi(t.h,s))a=s.G,rr(t.h,s),d=1;else return;if(t.I!=0){if(s.o)if(d==1){a=s.u?s.u.length:0,s=Date.now()-s.F;var T=t.D;d=Li(),Z(d,new Kn(d,a)),Gt(t)}else br(t);else if(T=s.m,T==3||T==0&&s.X>0||!(d==1&&Jo(t,s)||d==2&&Hi(t)))switch(a&&a.length>0&&(s=t.h,s.i=s.i.concat(a)),T){case 1:Re(t,5);break;case 4:Re(t,10);break;case 3:Re(t,6);break;default:Re(t,2)}}}function kr(t,s){let a=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(a*=2),a*s}function Re(t,s){if(t.j.info("Error code "+s),s==2){var a=_(t.bb,t),d=t.Ua;const T=!d;d=new Te(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||dt(d,"https"),jt(d),T?jo(d.toString(),a):qo(d.toString(),a)}else ee(2);t.I=0,t.l&&t.l.pa(s),Ar(t),Ir(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Ar(t){if(t.I=0,t.ja=[],t.l){const s=sr(t.h);(s.length!=0||t.i.length!=0)&&(D(t.ja,s),D(t.ja,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.oa()}}function Or(t,s,a){var d=a instanceof Te?le(a):new Te(a);if(d.g!="")s&&(d.g=s+"."+d.g),ut(d,d.u);else{var T=l.location;d=T.protocol,s=s?s+"."+T.hostname:T.hostname,T=+T.port;const b=new Te(null);d&&dt(b,d),s&&(b.g=s),T&&ut(b,T),a&&(b.h=a),d=b}return a=t.G,s=t.wa,a&&s&&H(d,a,s),H(d,"VER",t.ka),yt(t,d),d}function Dr(t,s,a){if(s&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Aa&&!t.ma?new G(new Vi({ab:a})):new G(t.ma),s.Fa(t.L),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pr(){}i=Pr.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function re(t,s){Y.call(this),this.g=new _r(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.sa&&(t?t["X-WebChannel-Client-Profile"]=s.sa:t={"X-WebChannel-Client-Profile":s.sa}),this.g.U=t,(t=s&&s.Qb)&&!f(t)&&(this.g.u=t),this.A=s&&s.supportsCrossDomainXhr||!1,this.v=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!f(s)&&(this.g.G=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Xe(this)}S(re,Y),re.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},re.prototype.close=function(){qi(this.g)},re.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.v&&(a={},a.__data__=Di(t),t=a);s.i.push(new Ro(s.Ya++,t)),s.I==3&&Gt(s)},re.prototype.N=function(){this.g.l=null,delete this.j,qi(this.g),delete this.g,re.Z.N.call(this)};function Cr(t){Pi.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}S(Cr,Pi);function Lr(){Ci.call(this),this.status=1}S(Lr,Ci);function Xe(t){this.g=t}S(Xe,Pr),Xe.prototype.ra=function(){Z(this.g,"a")},Xe.prototype.qa=function(t){Z(this.g,new Cr(t))},Xe.prototype.pa=function(t){Z(this.g,new Lr)},Xe.prototype.oa=function(){Z(this.g,"b")},re.prototype.send=re.prototype.o,re.prototype.open=re.prototype.m,re.prototype.close=re.prototype.close,xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,Co.COMPLETE="complete",ko.EventType=rt,rt.OPEN="a",rt.CLOSE="b",rt.ERROR="c",rt.MESSAGE="d",Y.prototype.listen=Y.prototype.J,G.prototype.listenOnce=G.prototype.K,G.prototype.getLastError=G.prototype.Ha,G.prototype.getLastErrorCode=G.prototype.ya,G.prototype.getStatus=G.prototype.ca,G.prototype.getResponseJson=G.prototype.La,G.prototype.getResponseText=G.prototype.la,G.prototype.send=G.prototype.ea,G.prototype.setWithCredentials=G.prototype.Fa}).apply(typeof Xt<"u"?Xt:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");/**
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
 */let vi="12.12.0";function Sc(i){vi=i}/**
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
 */const si=new yn("@firebase/firestore");function ae(i,...e){if(si.logLevel<=j.DEBUG){const n=e.map(Ms);si.debug(`Firestore (${vi}): ${i}`,...n)}}function Rs(i,...e){if(si.logLevel<=j.ERROR){const n=e.map(Ms);si.error(`Firestore (${vi}): ${i}`,...n)}}function Ms(i){if(typeof i=="string")return i;try{return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function oi(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,$s(i,r,n)}function $s(i,e,n){let r=`FIRESTORE (${vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rs(r),new Error(r)}function It(i,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,i||$s(e,o,r)}/**
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
 */const U={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class F extends Le{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ec{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ie.UNAUTHENTICATED))}shutdown(){}}class Ac{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){It(this.o===void 0,42304);let r=this.i;const o=p=>this.i!==r?(r=this.i,n(p)):Promise.resolve();let c=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Tt,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const p=c;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},u=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(p=>u(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?u(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Tt)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(It(typeof r.accessToken=="string",31837,{l:r}),new Ec(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return It(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class Oc{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Dc{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Oc(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pc{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){It(this.o===void 0,3512);const r=c=>{c.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,ae("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>r(c))};const o=c=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>o(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(It(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new qr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cc(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<i;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Lc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=Cc(40);for(let c=0;c<o.length;++c)r.length<20&&o[c]<n&&(r+=e.charAt(o[c]%62))}return r}}function Pe(i,e){return i<e?-1:i>e?1:0}function xc(i,e){const n=Math.min(i.length,e.length);for(let r=0;r<n;r++){const o=i.charAt(r),c=e.charAt(r);if(o!==c)return Zi(o)===Zi(c)?Pe(o,c):Zi(o)?1:-1}return Pe(i.length,e.length)}const Nc=55296,Rc=57343;function Zi(i){const e=i.charCodeAt(0);return e>=Nc&&e<=Rc}/**
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
 */const Hr="__name__";class ue{constructor(e,n,r){n===void 0?n=0:n>e.length&&oi(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oi(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ue.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ue?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const c=ue.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return Pe(e.length,n.length)}static compareSegments(e,n){const r=ue.isNumericId(e),o=ue.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?ue.extractNumericId(e).compare(ue.extractNumericId(n)):xc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class oe extends ue{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const Mc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends ue{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return Mc.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hr}static keyField(){return new Be([Hr])}static fromServerFormat(e){const n=[];let r="",o=0;const c=()=>{if(r.length===0)throw new F(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;o<e.length;){const u=e[o];if(u==="\\"){if(o+1===e.length)throw new F(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new F(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,o+=2}else u==="`"?(l=!l,o++):u!=="."||l?(r+=u,o++):(c(),o++)}if(c(),l)throw new F(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class We{constructor(e){this.path=e}static fromPath(e){return new We(oe.fromString(e))}static fromName(e){return new We(oe.fromString(e).popFirst(5))}static empty(){return new We(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new We(new oe(e.slice()))}}function $c(i,e,n,r){if(e===!0&&r===!0)throw new F(U.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Bc(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}/**
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
 */function K(i,e){const n={typeString:i};return e&&(n.value=e),n}function Rt(i,e){if(!Bc(i))throw new F(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const o=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in i)){n=`JSON missing required field: '${r}'`;break}const l=i[r];if(o&&typeof l!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(c!==void 0&&l!==c.value){n=`Expected '${r}' field to equal '${c.value}'`;break}}if(n)throw new F(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const zr=-62135596800,Gr=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Gr);return new he(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<zr)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gr}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Rt(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:K("string",he._jsonSchemaVersion),seconds:K("number"),nanoseconds:K("number")};function Wc(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Uc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Uc("Invalid base64 string: "+c):c}}(e);return new He(n)}static fromUint8Array(e){const n=function(o){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);return c}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Kr="(default)";class ai{constructor(e,n){this.projectId=e,this.database=n||Kr}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database===Kr}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}function Fc(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new F(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(i.options.projectId,e)}/**
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
 */class Vc{constructor(e,n=null,r=[],o=[],c=null,l="F",u=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=c,this.limitType=l,this.startAt=u,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function jc(i){return new Vc(i)}/**
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
 */var Jr,$;($=Jr||(Jr={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Tn([4294967295,4294967295],0);/**
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
 */const qc=41943040;/**
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
 */const Hc=1048576;function en(){return typeof document<"u"?document:null}class zc{constructor(e,n,r=1e3,o=1.5,c=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=o,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-r);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class wn{constructor(e,n,r,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=c,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,c){const l=Date.now()+r,u=new wn(e,n,l,o,c);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Xr,Yr;(Yr=Xr||(Xr={})).Ma="default",Yr.Cache="cache";/**
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
 */function Gc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Kc="ComponentProvider",Qr=new Map;/**
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
 */const Jc="firestore.googleapis.com",Zr=!0;class es{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jc,this.ssl=Zr}else this.host=e.host,this.ssl=e.ssl??Zr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Hc)throw new F(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$c("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gc(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xc{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new es({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new es(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kc;switch(r.type){case"firstParty":return new Dc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qr.get(n);r&&(ae(Kc,"Removing Datastore"),Qr.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class bn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bn(this.firestore,e,this._query)}}class fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Rt(n,fe._jsonSchema))return new fe(e,r||null,new We(oe.fromString(n.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:K("string",fe._jsonSchemaVersion),referencePath:K("string")};class Sn extends bn{constructor(e,n,r){super(e,n,jc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new We(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}/**
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
 */const ts="AsyncQueue";class is{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new zc(this,"async_queue_retry"),this._c=()=>{const r=en();r&&ae(ts,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=en();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=en();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Tt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Wc(e))throw e;ae(ts,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Rs("INTERNAL UNHANDLED ERROR: ",ns(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=wn.createAndSchedule(this,e,n,r,c=>this.hc(c));return this.tc.push(o),o}uc(){this.nc&&oi(47125,{Pc:ns(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ns(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Yc extends Xc{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new is,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new is(e),this._firestoreClient=void 0,await e}}}/**
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
 */class ve{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ve(He.fromBase64String(e))}catch(n){throw new F(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ve(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ve._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Rt(e,ve._jsonSchema))return ve.fromBase64String(e.bytes)}}ve._jsonSchemaVersion="firestore/bytes/1.0",ve._jsonSchema={type:K("string",ve._jsonSchemaVersion),bytes:K("string")};/**
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
 */class Bs{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ve{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ve._jsonSchemaVersion}}static fromJSON(e){if(Rt(e,Ve._jsonSchema))return new Ve(e.latitude,e.longitude)}}Ve._jsonSchemaVersion="firestore/geoPoint/1.0",Ve._jsonSchema={type:K("string",Ve._jsonSchemaVersion),latitude:K("number"),longitude:K("number")};/**
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
 */class je{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==o[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:je._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Rt(e,je._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new je(e.vectorValues);throw new F(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}je._jsonSchemaVersion="firestore/vectorValue/1.0",je._jsonSchema={type:K("string",je._jsonSchemaVersion),vectorValues:K("object")};function Ws(i,e,n){if((e=Nt(e))instanceof Bs)return e._internalPath;if(typeof e=="string")return Zc(i,e);throw ln("Field path arguments must be of type string or ",i)}const Qc=new RegExp("[~\\*/\\[\\]]");function Zc(i,e,n){if(e.search(Qc)>=0)throw ln(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Bs(...e.split("."))._internalPath}catch{throw ln(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function ln(i,e,n,r,o){let c=`Function ${e}() called with invalid data`;c+=". ";let l="";return new F(U.INVALID_ARGUMENT,c+i+l)}const rs="@firebase/firestore",ss="4.14.0";/**
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
 */class Us{constructor(e,n,r,o,c){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new el(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ws("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class el extends Us{data(){return super.data()}}class Yt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ye extends Us{constructor(e,n,r,o,c,l){super(e,n,r,o,l),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ws("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ye._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ye._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ye._jsonSchema={type:K("string",Ye._jsonSchemaVersion),bundleSource:K("string","DocumentSnapshot"),bundleName:K("string"),bundle:K("string")};class ti extends Ye{data(e={}){return super.data(e)}}class wt{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Yt(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ti(this._firestore,this._userDataWriter,r.key,r,new Yt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,c){if(o._snapshot.oldDocs.isEmpty()){let l=0;return o._snapshot.docChanges.map(u=>{const p=new ti(o._firestore,o._userDataWriter,u.doc.key,u.doc,new Yt(o._snapshot.mutatedKeys.has(u.doc.key),o._snapshot.fromCache),o.query.converter);return u.doc,{type:"added",doc:p,oldIndex:-1,newIndex:l++}})}{let l=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(u=>c||u.type!==3).map(u=>{const p=new ti(o._firestore,o._userDataWriter,u.doc.key,u.doc,new Yt(o._snapshot.mutatedKeys.has(u.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return u.type!==0&&(_=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),E=l.indexOf(u.doc.key)),{type:tl(u.type),doc:p,oldIndex:_,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach(c=>{c._document!==null&&(n.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tl(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oi(61501,{type:i})}}/**
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
 */wt._jsonSchemaVersion="firestore/querySnapshot/1.0",wt._jsonSchema={type:K("string",wt._jsonSchemaVersion),bundleSource:K("string","QuerySnapshot"),bundleName:K("string"),bundle:K("string")};(function(e,n=!0){Sc(gi),tt(new et("firestore",(r,{instanceIdentifier:o,options:c})=>{const l=r.getProvider("app").getImmediate(),u=new Yc(new Ac(r.getProvider("auth-internal")),new Pc(l,r.getProvider("app-check-internal")),Fc(l,o),l);return c={useFetchStreams:n,...c},u._setSettings(c),u},"PUBLIC").setMultipleInstances(!0)),De(rs,ss,e),De(rs,ss,"esm2020")})();function Fs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const il=Fs,Vs=new xt("auth","Firebase",Fs());/**
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
 */const ci=new yn("@firebase/auth");function nl(i,...e){ci.logLevel<=j.WARN&&ci.warn(`Auth (${gi}): ${i}`,...e)}function ii(i,...e){ci.logLevel<=j.ERROR&&ci.error(`Auth (${gi}): ${i}`,...e)}/**
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
 */function os(i,...e){throw En(i,...e)}function js(i,...e){return En(i,...e)}function qs(i,e,n){const r={...il(),[e]:n};return new xt("auth","Firebase",r).create(e,{appName:i.name})}function ni(i){return qs(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function En(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return Vs.create(i,...e)}function W(i,e,...n){if(!i)throw En(e,...n)}function bt(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ii(e),new Error(e)}function li(i,e){i||bt(e)}function rl(){return as()==="http:"||as()==="https:"}function as(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function sl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rl()||ca()||"connection"in navigator)?navigator.onLine:!0}function ol(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Mt{constructor(e,n){this.shortDelay=e,this.longDelay=n,li(n>e,"Short delay should be less than long delay!"),this.isMobile=oa()||la()}get(){return sl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function al(i,e){li(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hs{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ll=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dl=new Mt(3e4,6e4);function zs(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function yi(i,e,n,r,o={}){return Gs(i,o,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const u=Ds({key:i.config.apiKey,...l}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:p,...c};return aa()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Ps(i.emulatorConfig.host)&&(_.credentials="include"),Hs.fetch()(await Ks(i,i.config.apiHost,n,u),_)})}async function Gs(i,e,n){i._canInitEmulator=!1;const r={...cl,...e};try{const o=new ul(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw Qt(i,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const u=c.ok?l.errorMessage:l.error.message,[p,_]=u.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qt(i,"credential-already-in-use",l);if(p==="EMAIL_EXISTS")throw Qt(i,"email-already-in-use",l);if(p==="USER_DISABLED")throw Qt(i,"user-disabled",l);const E=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw qs(i,E,_);os(i,E)}}catch(o){if(o instanceof Le)throw o;os(i,"network-request-failed",{message:String(o)})}}async function Ks(i,e,n,r){const o=`${e}${n}?${r}`,c=i,l=c.config.emulator?al(i.config,o):`${i.config.apiScheme}://${o}`;return ll.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}class ul{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(js(this.auth,"network-request-failed")),dl.get())})}}function Qt(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=js(i,e,r);return o.customData._tokenResponse=n,o}/**
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
 */async function hl(i,e){return yi(i,"POST","/v1/accounts:delete",e)}async function di(i,e){return yi(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function St(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fl(i,e=!1){const n=Nt(i),r=await n.getIdToken(e),o=Js(r);W(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:St(tn(o.auth_time)),issuedAtTime:St(tn(o.iat)),expirationTime:St(tn(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function tn(i){return Number(i)*1e3}function Js(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return ii("JWT malformed, contained fewer than 3 sections"),null;try{const o=Os(n);return o?JSON.parse(o):(ii("Failed to decode base64 JWT payload"),null)}catch(o){return ii("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function cs(i){const e=Js(i);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dn(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Le&&ml(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function ml({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class pl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class un{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=St(this.lastLoginAt),this.creationTime=St(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ui(i){var S;const e=i.auth,n=await i.getIdToken(),r=await dn(i,di(e,{idToken:n}));W(r==null?void 0:r.users.length,e,"internal-error");const o=r.users[0];i._notifyReloadListener(o);const c=(S=o.providerUserInfo)!=null&&S.length?Xs(o.providerUserInfo):[],l=vl(i.providerData,c),u=i.isAnonymous,p=!(i.email&&o.passwordHash)&&!(l!=null&&l.length),_=u?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new un(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,E)}async function gl(i){const e=Nt(i);await ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vl(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Xs(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function yl(i,e){const n=await Gs(i,{},async()=>{const r=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,l=await Ks(i,o,"/v1/token",`key=${c}`),u=await i._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:u,body:r};return i.emulatorConfig&&Ps(i.emulatorConfig.host)&&(p.credentials="include"),Hs.fetch()(l,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _l(i,e){return yi(i,"POST","/v2/accounts:revokeToken",zs(i,e))}/**
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
 */class Qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=cs(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await yl(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,l=new Qe;return r&&(W(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(W(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),c&&(W(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qe,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function ke(i,e){W(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class me{constructor({uid:e,auth:n,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new pl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new un(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await dn(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fl(this,e)}reload(){return gl(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new me({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ui(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(ni(this.auth));const e=await this.getIdToken();return await dn(this,hl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,l=n.photoURL??void 0,u=n.tenantId??void 0,p=n._redirectEventId??void 0,_=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:w,isAnonymous:k,providerData:D,stsTokenManager:P}=n;W(S&&P,e,"internal-error");const L=Qe.fromJSON(this.name,P);W(typeof S=="string",e,"internal-error"),ke(r,e.name),ke(o,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof k=="boolean",e,"internal-error"),ke(c,e.name),ke(l,e.name),ke(u,e.name),ke(p,e.name),ke(_,e.name),ke(E,e.name);const O=new me({uid:S,auth:e,email:o,emailVerified:w,displayName:r,isAnonymous:k,photoURL:l,phoneNumber:c,tenantId:u,stsTokenManager:L,createdAt:_,lastLoginAt:E});return D&&Array.isArray(D)&&(O.providerData=D.map(C=>({...C}))),p&&(O._redirectEventId=p),O}static async _fromIdTokenResponse(e,n,r=!1){const o=new Qe;o.updateFromServerResponse(n);const c=new me({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await ui(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];W(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Xs(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),u=new Qe;u.updateFromIdToken(r);const p=new me({uid:o.localId,auth:e,stsTokenManager:u,isAnonymous:l}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new un(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(p,_),p}}/**
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
 */const ls=new Map;function Ue(i){li(i instanceof Function,"Expected a class definition");let e=ls.get(i);return e?(li(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ls.set(i,e),e)}/**
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
 */class Ys{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ys.type="NONE";const ds=Ys;/**
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
 */function nn(i,e,n){return`firebase:${i}:${e}:${n}`}class Ze{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=nn(this.userKey,o.apiKey,c),this.fullPersistenceKey=nn("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await di(this.auth,{idToken:e}).catch(()=>{});return n?me._fromGetAccountInfoResponse(this.auth,n,e):null}return me._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ze(Ue(ds),e,r);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let c=o[0]||Ue(ds);const l=nn(r,e.config.apiKey,e.name);let u=null;for(const _ of n)try{const E=await _._get(l);if(E){let S;if(typeof E=="string"){const w=await di(e,{idToken:E}).catch(()=>{});if(!w)break;S=await me._fromGetAccountInfoResponse(e,w,E)}else S=me._fromJSON(e,E);_!==c&&(u=S),c=_;break}}catch{}const p=o.filter(_=>_._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new Ze(c,e,r):(c=p[0],u&&await c._set(l,u.toJSON()),await Promise.all(n.map(async _=>{if(_!==c)try{await _._remove(l)}catch{}})),new Ze(c,e,r))}}/**
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
 */function us(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Il(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(El(e))return"Blackberry";if(kl(e))return"Webos";if(Tl(e))return"Safari";if((e.includes("chrome/")||wl(e))&&!e.includes("edge/"))return"Chrome";if(Sl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Il(i=pe()){return/firefox\//i.test(i)}function Tl(i=pe()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wl(i=pe()){return/crios\//i.test(i)}function bl(i=pe()){return/iemobile/i.test(i)}function Sl(i=pe()){return/android/i.test(i)}function El(i=pe()){return/blackberry/i.test(i)}function kl(i=pe()){return/webos/i.test(i)}/**
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
 */function Qs(i,e=[]){let n;switch(i){case"Browser":n=us(pe());break;case"Worker":n=`${us(pe())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
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
 */class Al{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((l,u)=>{try{const p=e(c);l(p)}catch(p){u(p)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ol(i,e={}){return yi(i,"GET","/v2/passwordPolicy",zs(i,e))}/**
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
 */const Dl=6;class Pl{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Dl,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Cl{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hs(this),this.idTokenSubscription=new hs(this),this.beforeStateQueue=new Al(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ue(n)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Ze.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await di(this,{idToken:e}),r=await me._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if($e(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(c=this.redirectUser)==null?void 0:c._redirectEventId,u=r==null?void 0:r._redirectEventId,p=await this.tryRedirectSignIn(e);(!l||l===u)&&(p!=null&&p.user)&&(r=p.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ui(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ol()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(ni(this));const n=e?Nt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ue(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ol(this),n=new Pl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _l(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ue(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ze.create(this,[Ue(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(u,this,"internal-error"),u.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,r,o);return()=>{l=!0,p()}}else{const p=e.addObserver(n);return()=>{l=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&nl(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ll(i){return Nt(i)}class hs{constructor(e){this.auth=e,this.observer=null,this.addObserver=pa(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xl(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ue);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new Mt(3e4,6e4);/**
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
 */new Mt(2e3,1e4);/**
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
 */new Mt(3e4,6e4);/**
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
 */new Mt(5e3,15e3);var fs="@firebase/auth",ms="1.13.0";/**
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
 */class Nl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ml(i){tt(new et("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;W(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:l,authDomain:u,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qs(i)},_=new Cl(r,o,c,p);return xl(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),tt(new et("auth-internal",e=>{const n=Ll(e.getProvider("auth").getImmediate());return(r=>new Nl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(fs,ms,Rl(i)),De(fs,ms,"esm2020")}/**
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
 */const $l=5*60;sa("authIdTokenMaxAge");Ml("Browser");console.warn("⚠️ Firebase未設定。.envファイルにAPIキーを設定してください。");function Zs(i){const e=new Date(i),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${o}`}function At(i){const e=new Date(i),n=["日","月","火","水","木","金","土"];return`${e.getMonth()+1}月${e.getDate()}日（${n[e.getDay()]}）`}function $t(){return Zs(new Date)}function eo(i){const e=Math.floor(i/60),n=i%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function te(i){if(!i)return 0;const[e,n]=i.split(":").map(Number);return e*60+n}function to(){return Date.now().toString(36)+Math.random().toString(36).slice(2,9)}function io(i,e,n,r){const c=Zt(n-i),l=Zt(r-e),u=Math.sin(c/2)**2+Math.cos(Zt(i))*Math.cos(Zt(n))*Math.sin(l/2)**2;return 6371*2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))}function Zt(i){return i*(Math.PI/180)}function se(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}function R(i,e="info",n=3e3){const r=document.getElementById("toast-container"),o={success:"check_circle",error:"error",warning:"warning",info:"info"},c=document.createElement("div");c.className=`toast ${e}`,c.innerHTML=`
    <span class="material-icons-round toast-icon">${o[e]||"info"}</span>
    <span>${se(i)}</span>
  `,r.appendChild(c),setTimeout(()=>{c.style.opacity="0",c.style.transform="translateX(40px)",c.style.transition="all .3s ease",setTimeout(()=>c.remove(),300)},n)}function _i(i,e,n=""){const r=document.getElementById("modal-overlay");document.getElementById("modal-title").textContent=i,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=n,r.style.display="flex"}function Ce(){document.getElementById("modal-overlay").style.display="none"}function Ii(i,e){return new Promise(n=>{const r=`<p>${se(e)}</p>`;_i(i,r,`
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `),document.getElementById("confirm-ok").onclick=()=>{Ce(),n(!0)},document.getElementById("confirm-cancel").onclick=()=>{Ce(),n(!1)}})}function no(i,e){if(!i)return 0;let n=1500;return i.type==="正社員"?i.name.includes("前川")?n=2500:n=1500:i.type==="パート"&&(n=parseInt(i.wage)||1500),Math.round(n*(e/60))}function hn(i,e){const r={身体介護:{20:1670,30:2500,60:3960,90:5790,120:7630},生活援助:{20:1830,45:2250,60:2870},通院等乗降介助:{per_trip:990},医療的ケア:{30:3e3,60:5e3}}[i];if(!r)return 3e3;if(r.per_trip)return r.per_trip;const o=Object.keys(r).map(Number).sort((l,u)=>l-u);let c=o[0];for(const l of o)e>=l&&(c=l);return r[c]||3e3}function Bl(i){{console.warn("Firebase未設定のためログイン画面を表示します"),setTimeout(()=>i(null,null),100);return}}async function Wl(){throw new Error("Firebase未設定です。.envにAPIキーを設定してください。")}async function Ul(){}function Fl(){const i=document.getElementById("btn-google-login");i&&i.addEventListener("click",async()=>{i.disabled=!0,i.textContent="ログイン中...";try{await Wl()}catch(e){console.error("ログインエラー:",e),e.code==="auth/popup-closed-by-user"?R("ログインがキャンセルされました","warning"):R("ログインに失敗しました","error"),i.disabled=!1,i.innerHTML=`
        <svg viewBox="0 0 24 24" width="20" height="20" class="google-icon">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleアカウントでログイン
      `}})}const Ae={};function it(i){if(!Ae[i]){const e=localStorage.getItem(`careroute_${i}`);Ae[i]=e?JSON.parse(e):[]}return Ae[i]}function Ti(i){localStorage.setItem(`careroute_${i}`,JSON.stringify(Ae[i]||[]))}async function ps(){localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"),localStorage.removeItem("careroute_routes"),Ae.staff=[],Ae.clients=[],Ae.visits=[],Ae.routes=[]}async function kn(i,e){{const n=to();return it(i).push({id:n,...e,createdAt:new Date().toISOString()}),Ti(i),n}}async function An(i){return it(i)}async function On(i,e,n){{const r=it(i),o=r.findIndex(c=>c.id===e);o!==-1&&(r[o]={...r[o],...n,updatedAt:new Date().toISOString()},Ti(i));return}}async function Dn(i,e){{const n=it(i),r=n.findIndex(o=>o.id===e);r!==-1&&(n.splice(r,1),Ti(i));return}}async function ro(i,e,n,r){return it(i).filter(c=>c[e]===r)}async function ge(){return An("staff")}async function so(i){return kn("staff",i)}async function Vl(i,e){return On("staff",i,e)}async function jl(i){return Dn("staff",i)}async function _e(){return An("clients")}async function oo(i){return kn("clients",i)}async function ql(i,e){return On("clients",i,e)}async function Hl(i){return Dn("clients",i)}async function ao(){return An("visits")}async function ze(i){return ro("visits","date","==",i)}async function Pn(i){return kn("visits",i)}async function gs(i,e){return On("visits",i,e)}async function zl(i){return Dn("visits",i)}async function Cn(i){return ro("routes","date","==",i)}async function Gl(i){{const e=it("routes");for(const n of i){const r=e.findIndex(o=>o.staffId===n.staffId&&o.date===n.date);r>=0?e[r]={...n,updatedAt:new Date().toISOString()}:e.push({id:to(),...n,createdAt:new Date().toISOString()})}Ti("routes");return}}async function Kl(){const i=document.getElementById("page-container"),[e,n]=await Promise.all([ge().catch(()=>[]),_e().catch(()=>[])]),r=$t(),o=await ze(r).catch(()=>[]),c=e.filter(p=>p.isActive),l=n.filter(p=>p.isActive),u=o.filter(p=>p.status!=="cancelled");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${At(new Date)}</span>
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
        <div class="stat-value">${u.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <span class="material-icons-round stat-icon">warning</span>
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${Math.max(0,l.length-u.length)}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
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
          ${c.length===0?'<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>':c.map(p=>{var _,E;return`
              <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)">
                <div style="width:12px;height:12px;border-radius:50%;background:${p.color||"#999"};flex-shrink:0"></div>
                <div style="flex:1">
                  <div style="font-weight:500">${p.name}</div>
                  <div style="font-size:.8rem;color:var(--text-muted)">${(((_=p.skills)==null?void 0:_.qualifications)||[]).join(", ")||"資格なし"}</div>
                </div>
                <div class="tags-container">
                  ${(((E=p.skills)==null?void 0:E.services)||[]).slice(0,2).map(S=>`<span class="tag">${S}</span>`).join("")}
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
  `}let ne=null,Ot=[],fn=[],Dt=null,mn=null,pn=[];function Pt(){return new Promise((i,e)=>{if(window.google&&window.google.maps){i();return}const n="AIzaSyCXFNBQjeiYpRYFdbs6VhISqlFZhrybM74",r=document.createElement("script");r.src=`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=geometry,places&language=ja`,r.async=!0,r.defer=!0,r.onload=i,r.onerror=()=>e(new Error("Google Maps APIの読み込みに失敗しました")),document.head.appendChild(r)})}function Jl(i,e={lat:35.6938,lng:139.7034},n=14){const r=document.getElementById(i);return r?!window.google||!window.google.maps?(r.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `,null):(ne=new google.maps.Map(r,{center:e,zoom:n,mapTypeControl:!0,streetViewControl:!1,fullscreenControl:!0,styles:td()}),Dt=new google.maps.InfoWindow,mn=new google.maps.DirectionsService,ne):null}function co(i,e={}){if(!ne)return null;const n=new google.maps.Marker({map:ne,position:i,title:e.title||"",icon:e.icon||void 0,label:e.label||void 0});return e.infoContent&&n.addListener("click",()=>{Dt.setContent(e.infoContent),Dt.open(ne,n)}),Ot.push(n),n}function vs(i,e,n,r){if(!ne)return null;const o={path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",fillColor:e,fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1.8,anchor:new google.maps.Point(12,22),labelOrigin:new google.maps.Point(12,9)};return co(i,{icon:o,label:void 0,infoContent:r})}function Xl(i,e){return ne?co(i,{title:e,icon:{path:"M12 2L2 7v10l10 5 10-5V7L12 2z",fillColor:"#F59E0B",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:2,anchor:new google.maps.Point(12,12)},infoContent:`<div style="color:#333;padding:4px"><strong>🏢 ${e}</strong><br>（出発地点）</div>`}):null}function Yl(i,e,n){if(!ne)return null;const r=i.map(c=>({lat:c.lat,lng:c.lng})),o=new google.maps.Polyline({path:r,geodesic:!0,strokeColor:e,strokeOpacity:.8,strokeWeight:4,map:ne});return fn.push(o),o}async function Ql(i,e){if(!ne||!mn||i.length<2)return;const n=i[0],r=i[i.length-1],o=i.slice(1,-1).map(c=>({location:new google.maps.LatLng(c.lat,c.lng),stopover:!0}));try{const c=await new Promise((u,p)=>{mn.route({origin:new google.maps.LatLng(n.lat,n.lng),destination:new google.maps.LatLng(r.lat,r.lng),waypoints:o,travelMode:google.maps.TravelMode.DRIVING,optimizeWaypoints:!1},(_,E)=>{E==="OK"?u(_):p(new Error(`Directions API: ${E}`))})}),l=new google.maps.DirectionsRenderer({map:ne,directions:c,suppressMarkers:!0,polylineOptions:{strokeColor:e,strokeWeight:4,strokeOpacity:.8}});return pn.push(l),l}catch(c){return console.warn("Directions API呼び出し失敗。直線ポリラインで代替:",c),Yl(i,e)}}async function ys(i){if(!window.google||!window.google.maps)return null;const e=new google.maps.DistanceMatrixService,n=i.map(r=>new google.maps.LatLng(r.lat,r.lng));try{return(await new Promise((c,l)=>{e.getDistanceMatrix({origins:n,destinations:n,travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC},(u,p)=>{p==="OK"?c(u):l(new Error(`Distance Matrix API: ${p}`))})})).rows.map(c=>c.elements.map(l=>({distance:l.status==="OK"?l.distance.value/1e3:null,duration:l.status==="OK"?Math.ceil(l.duration.value/60):null})))}catch(r){return console.error("Distance Matrix取得失敗:",r),null}}function Zl(){Ot.forEach(i=>i.setMap(null)),Ot=[],fn.forEach(i=>i.setMap(null)),fn=[],pn.forEach(i=>i.setMap(null)),pn=[],Dt&&Dt.close()}function ed(){if(!ne||Ot.length===0)return;const i=new google.maps.LatLngBounds;Ot.forEach(e=>i.extend(e.getPosition())),ne.fitBounds(i,50)}async function lo(i){if(!i||i.trim()==="")return null;if(!window.google||!window.google.maps)return console.warn("ジオコーディング: Google Maps APIが未読み込みです"),null;const e=new google.maps.Geocoder;try{return await new Promise((r,o)=>{e.geocode({address:i,region:"jp"},(c,l)=>{if(l==="OK"&&c[0]){const u=c[0].geometry.location;r({lat:u.lat(),lng:u.lng()})}else o(new Error(`ジオコーディング失敗: ${l}`))})})}catch(n){return console.warn("住所の座標変換に失敗:",n.message),null}}function td(){return[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}const hi={qualifications:{label:"資格",options:["介護福祉士","実務者研修修了","初任者研修修了","看護師","ヘルパー2級"]},services:{label:"対応可能サービス",options:["身体介護","生活援助","通院等乗降介助","医療的ケア"]},physical:{label:"身体的対応力",options:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"]},special:{label:"特別スキル",options:["認知症ケア","ターミナルケア","精神障害対応","障害児支援"]}},id=["要支援1","要支援2","要介護1","要介護2","要介護3","要介護4","要介護5"],uo=["身体介護","生活援助","通院等乗降介助","医療的ケア"],nd=["男性","女性"],rd=["指定なし","男性希望","女性希望"],_s=["#4A90D9","#E74C3C","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#3498DB","#E91E63","#00BCD4","#8BC34A","#FF5722"],_t={requiredSkill:1e3,genderMatch:2e3,staffType:500,proximity:30},ri=25,Q={name:"事業所（拠点）",address:"〒501-3304 岐阜県加茂郡富加町高畑２９１",lat:35.497,lng:136.993};let gn="all",fi=$t();async function sd(){var n,r,o;const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <input type="date" id="map-date-picker" class="form-input" value="${fi}" style="width:160px">
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
  `;try{await Pt()}catch(c){console.warn("Maps APIの読み込みスキップ:",c)}const e=Jl("map-canvas",{lat:Q.lat,lng:Q.lng});await ei(e),(n=document.getElementById("map-date-picker"))==null||n.addEventListener("change",c=>{fi=c.target.value,ei(e)}),(r=document.getElementById("staff-filter"))==null||r.addEventListener("change",c=>{gn=c.target.value,ei(e)}),(o=document.getElementById("btn-refresh-map"))==null||o.addEventListener("click",()=>{ei(e)})}async function ei(i){const[e,n,r]=await Promise.all([ge().catch(()=>[]),_e().catch(()=>[]),ze(fi).catch(()=>[])]),o=document.getElementById("staff-filter");if(o&&o.options.length<=1&&e.forEach(l=>{const u=document.createElement("option");u.value=l.id,u.textContent=l.name,o.appendChild(u)}),!i){ad(e,n);return}Zl(),Xl({lat:Q.lat,lng:Q.lng},Q.name);const c=await Cn(fi).catch(()=>[]);if(c.length>0)for(const l of c){if(gn!=="all"&&l.staffId!==gn)continue;const u=e.find(E=>E.id===l.staffId),p=(u==null?void 0:u.color)||"#999",_=[{lat:Q.lat,lng:Q.lng}];for(const E of l.clientIds||[]){const S=n.find(w=>w.id===E);S&&(_.push({lat:S.lat,lng:S.lng}),vs({lat:S.lat,lng:S.lng},p,"",`<div style="color:#333;padding:4px">
              <strong>${S.name}</strong><br>
              ${S.careLevel} | ${(S.requiredServices||[]).join(", ")}<br>
              <small>担当: ${(u==null?void 0:u.name)||"未定"}</small>
            </div>`))}_.push({lat:Q.lat,lng:Q.lng}),await Ql(_,p)}else{const l=n.filter(u=>u.isActive&&r.some(p=>p.clientId===u.id));for(const u of l){const p=r.filter(_=>_.clientId===u.id).map(_=>`${_.startTime}〜${_.endTime}`).join(", ");vs({lat:u.lat,lng:u.lng},"#94A3B8","",`<div style="color:#333;padding:4px">
          <strong>${u.name}</strong><br>
          予定: ${p}<br>
          ${u.careLevel} | ${(u.requiredServices||[]).join(", ")}
        </div>`)}}ed(),od(e,c,r)}function od(i,e,n=[]){const r=document.getElementById("route-legend");if(r){if(e.length===0){r.innerHTML=`
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
  `}}function ad(i,e){const n=document.getElementById("route-legend");n&&(n.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${i.length}名<br>
        利用者: ${e.length}名
      </div>
    `)}let Ct=[];async function Ln(){const i=document.getElementById("page-container");Ct=await ge().catch(()=>[]),i.innerHTML=`
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
      ${cd(Ct)}
    </div>
  `,document.getElementById("btn-add-staff").addEventListener("click",()=>ho())}function cd(i){return i.length===0?`
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
                ${se(((n=e.name)==null?void 0:n.charAt(0))||"?")}
              </div>
              <div>
                <div style="font-weight:600;font-size:1.05rem">${se(e.name)}</div>
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
              ${(((r=e.skills)==null?void 0:r.qualifications)||[]).map(u=>`<span class="tag">${u}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div style="margin-bottom:8px">
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">対応サービス</div>
            <div class="tags-container">
              ${(((o=e.skills)==null?void 0:o.services)||[]).map(u=>`<span class="tag tag-secondary">${u}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div>
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">特別スキル</div>
            <div class="tags-container">
              ${[...((c=e.skills)==null?void 0:c.physical)||[],...((l=e.skills)==null?void 0:l.special)||[]].map(u=>`<span class="tag tag-accent">${u}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
        </div>
      `}).join("")}
    </div>
  `}function ho(i=null){const e=!!i,n=e?"職員情報の編集":"新規職員登録",r=`
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${nd.map(c=>`<option value="${c}" ${(i==null?void 0:i.gender)===c?"selected":""}>${c}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所 <span style="font-size:.75rem;color:var(--text-muted)">（入力すると座標を自動取得）</span></label>
        <input class="form-input" id="sf-address" value="${(i==null?void 0:i.address)||""}" placeholder="例: 岐阜県加茂郡富加町..." />
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
      ${Object.entries(hi).map(([c,l])=>`
        <div class="form-group">
          <label class="form-label">${l.label}</label>
          <div class="tags-container" style="gap:8px">
            ${l.options.map(u=>{var _,E;const p=(E=(_=i==null?void 0:i.skills)==null?void 0:_[c])!=null&&E.includes(u)?"checked":"";return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${c}" value="${u}" ${p} /> ${u}
              </label>`}).join("")}
          </div>
        </div>
      `).join("")}
    </form>
  `;_i(n,r,`
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("sf-cancel").onclick=Ce,document.getElementById("sf-save").onclick=async()=>{const c=document.getElementById("sf-name").value.trim();if(!c){R("氏名を入力してください","warning");return}const l=document.getElementById("sf-save");l.disabled=!0,l.textContent="保存中...";const u=document.getElementById("sf-address").value.trim();let p=(i==null?void 0:i.lat)||Q.lat,_=(i==null?void 0:i.lng)||Q.lng;if(u)try{await Pt();const S=await lo(u);S?(p=S.lat,_=S.lng):R("住所から座標を取得できませんでした","warning")}catch(S){console.warn("ジオコーディング失敗:",S)}const E={name:c,gender:document.getElementById("sf-gender").value,address:u,workStart:document.getElementById("sf-work-start").value,workEnd:document.getElementById("sf-work-end").value,lat:p,lng:_,skills:{},color:(i==null?void 0:i.color)||_s[Ct.length%_s.length],isActive:!0};for(const[S]of Object.entries(hi)){const w=document.querySelectorAll(`input[name="skill-${S}"]:checked`);E.skills[S]=Array.from(w).map(k=>k.value)}try{e?(await Vl(i.id,E),R("職員情報を更新しました","success")):(await so(E),R("職員を登録しました","success")),Ce(),await Ln()}catch(S){R("保存に失敗しました: "+S.message,"error")}finally{l.disabled=!1,l.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-staff]");if(e){const r=Ct.find(o=>o.id===e.dataset.editStaff);r&&ho(r)}const n=i.target.closest("[data-delete-staff]");if(n){const r=Ct.find(o=>o.id===n.dataset.deleteStaff);if(r&&await Ii("削除確認",`${r.name} を削除しますか？`))try{await jl(r.id),R(`${r.name} を削除しました`,"success"),await Ln()}catch{R("削除に失敗しました","error")}}});let mi=[],Is=[];async function xn(){const i=document.getElementById("page-container");try{const[e,n]=await Promise.all([_e().catch(()=>[]),ao().catch(()=>[])]);mi=e,Is=n}catch(e){console.error("データの取得に失敗",e)}i.innerHTML=`
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
      ${ld(mi,Is)}
    </div>
  `,document.getElementById("btn-add-client").addEventListener("click",()=>fo())}function ld(i,e){return i.length===0?`<div class="empty-state">
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
          ${i.map(n=>{var l,u;const r={月:1,火:2,水:3,木:4,金:5,土:6,日:7},o=e.filter(p=>p.clientId===n.id).sort((p,_)=>{const E=r[p.dayOfWeek]||99,S=r[_.dayOfWeek]||99;return E-S}),c=o.length>0?o.map(p=>`<div style="font-size:0.85rem;margin-bottom:2px;">
                  <span class="tag" style="background:#E2E8F0;color:#333">${p.dayOfWeek||"不明"}</span>
                  ${p.startTime}〜${p.endTime} (${p.duration}分)
                </div>`).join(""):'<span style="color:var(--text-muted)">設定なし</span>';return`<tr>
              <td><strong>${se(n.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${n.genderPreference!=="指定なし"?n.genderPreference:""}</span></td>
              <td><span class="tag ${(l=n.careLevel)!=null&&l.includes("4")||(u=n.careLevel)!=null&&u.includes("5")?"tag-danger":""}">${n.careLevel||"-"}</span></td>
              <td><div class="tags-container">${(n.requiredServices||[]).map(p=>`<span class="tag tag-secondary">${p}</span>`).join("")}</div></td>
              <td><div class="tags-container">${(n.requiredSkills||[]).map(p=>`<span class="tag tag-accent">${p}</span>`).join("")||"-"}</div></td>
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
  `}function fo(i=null){var c,l;const e=!!i,n=[...hi.physical.options,...hi.special.options],r=`
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${id.map(u=>`<option ${(i==null?void 0:i.careLevel)===u?"selected":""}>${u}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所 <span style="font-size:.75rem;color:var(--text-muted)">（入力すると地図上の座標を自動取得します）</span></label>
        <input class="form-input" id="cf-address" value="${(i==null?void 0:i.address)||""}" placeholder="例: 岐阜県加茂郡富加町..." />
      </div>
      <div class="form-group">
        <label class="form-label">必要サービス</label>
        <div class="tags-container" style="gap:8px">
          ${uo.map(u=>{var p;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-service" value="${u}" ${(p=i==null?void 0:i.requiredServices)!=null&&p.includes(u)?"checked":""} /> ${u}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">必要スキル</label>
        <div class="tags-container" style="gap:8px">
          ${n.map(u=>{var p;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-skill" value="${u}" ${(p=i==null?void 0:i.requiredSkills)!=null&&p.includes(u)?"checked":""} /> ${u}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">性別希望</label>
          <select class="form-select" id="cf-gender-pref">
            ${rd.map(u=>`<option ${(i==null?void 0:i.genderPreference)===u?"selected":""}>${u}</option>`).join("")}
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
  `;_i(e?"利用者情報の編集":"新規利用者登録",r,`
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("cf-cancel").onclick=Ce,document.getElementById("cf-save").onclick=async()=>{const u=document.getElementById("cf-name").value.trim();if(!u){R("氏名を入力してください","warning");return}const p=document.getElementById("cf-save");p.disabled=!0,p.textContent="保存中...";const _=document.getElementById("cf-address").value.trim();let E=(i==null?void 0:i.lat)||Q.lat,S=(i==null?void 0:i.lng)||Q.lng;if(_)try{await Pt();const k=await lo(_);k?(E=k.lat,S=k.lng,R(`座標を取得しました: ${k.lat.toFixed(4)}, ${k.lng.toFixed(4)}`,"success")):R("住所から座標を取得できませんでした。事業所付近の座標を使用します。","warning")}catch(k){console.warn("ジオコーディング失敗:",k),R("座標取得に失敗。事業所付近の座標を使用します。","warning")}const w={name:u,careLevel:document.getElementById("cf-care-level").value,address:_,requiredServices:Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(k=>k.value),requiredSkills:Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(k=>k.value),genderPreference:document.getElementById("cf-gender-pref").value,visitDuration:parseInt(document.getElementById("cf-duration").value)||60,timeWindow:{start:document.getElementById("cf-time-start").value,end:document.getElementById("cf-time-end").value},notes:document.getElementById("cf-notes").value.trim(),lat:E,lng:S,isActive:!0};try{e?(await ql(i.id,w),R("利用者情報を更新しました","success")):(await oo(w),R("利用者を登録しました","success")),Ce(),await xn()}catch(k){R("保存に失敗しました: "+k.message,"error")}finally{p.disabled=!1,p.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-client]");if(e){const r=mi.find(o=>o.id===e.dataset.editClient);r&&fo(r)}const n=i.target.closest("[data-delete-client]");if(n){const r=mi.find(o=>o.id===n.dataset.deleteClient);if(r&&await Ii("削除確認",`${r.name} を削除しますか？`))try{await Hl(r.id),R(`${r.name} を削除しました`,"success"),await xn()}catch{R("削除に失敗しました","error")}}});let Fe=$t();async function dd(){const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">calendar_month</span>
        スケジュール管理
      </h1>
      <div class="btn-group">
        <input type="date" id="schedule-date" class="form-input" value="${Fe}" style="width:180px" />
        <button class="btn btn-secondary" id="btn-generate-week">
          <span class="material-icons-round">date_range</span>
          今週の予定を自動生成
        </button>
        <button class="btn btn-primary" id="btn-add-visit">
          <span class="material-icons-round">add</span>
          訪問追加
        </button>
      </div>
    </div>
    <div id="schedule-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,document.getElementById("schedule-date").addEventListener("change",e=>{Fe=e.target.value,Lt()}),document.getElementById("btn-add-visit").addEventListener("click",ud),document.getElementById("btn-generate-week").addEventListener("click",hd),await Lt()}async function Lt(){const i=document.getElementById("schedule-content"),[e,n,r,o]=await Promise.all([ge().catch(()=>[]),_e().catch(()=>[]),ze(Fe).catch(()=>[]),Cn(Fe).catch(()=>[])]);if(r.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round">event_busy</span>
        <h3>${At(Fe)} の訪問予定はありません</h3>
        <p>「訪問追加」ボタンから予定を登録するか、マッチング＆最適化を実行してください</p>
      </div>
    `;return}const c={},l=[];let u=0,p=0,_=0;for(const w of r)w.staffId?(c[w.staffId]||(c[w.staffId]=[]),c[w.staffId].push(w)):l.push(w);l.sort((w,k)=>{const D=w.startTime||w.scheduledTime||"00:00",P=k.startTime||k.scheduledTime||"00:00";return D.localeCompare(P)});let E="";l.length>0&&(E=`
      <div class="card" style="border-left: 4px solid var(--danger); margin-bottom: 24px; background: rgba(239, 68, 68, 0.05);">
        <h3 class="card-title" style="color: var(--danger); margin-bottom: 12px;">
          <span class="material-icons-round">warning</span>
          未割り当ての訪問 (${l.length}件)
        </h3>
        <div class="grid grid-3" style="gap: 12px;">
          ${l.map(w=>{const k=n.find(D=>D.id===w.clientId);return`
              <div class="visit-card" style="border: 1px dashed var(--danger);">
                <div style="display:flex;justify-content:space-between;align-items:start">
                  <div>
                    <strong>${se((k==null?void 0:k.name)||"不明")}</strong>
                    <div style="font-size:.8rem;color:var(--text-muted)">${w.startTime} | ${w.duration||60}分</div>
                  </div>
                  <button class="btn-icon" data-delete-visit="${w.id}" style="color:var(--danger)">
                    <span class="material-icons-round">close</span>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `);for(const[w,k]of Object.entries(c)){const D=e.find(O=>O.id===w);if(!D)continue;const P=o.find(O=>O.staffId===w),L=parseInt(D.wage)||2e3;if(P&&(_+=(P.totalDistance||0)*ri),k.sort((O,C)=>{const N=O.optimizedArrivalTime||O.startTime||O.scheduledTime||"00:00",x=C.optimizedArrivalTime||C.startTime||C.scheduledTime||"00:00";return N.localeCompare(x)}),P&&P.schedule&&P.schedule.length>=2){const O=P.schedule[0].arrivalMinutes,N=(P.schedule[P.schedule.length-1].arrivalMinutes-O)/60;p+=N*L}else if(k.length>0){const O=k[0],C=k[k.length-1],N=O.startTime||O.scheduledTime||"09:00",x=C.startTime||C.scheduledTime||"17:00",B=te(N),g=(te(x)+(C.duration||60)-B)/60;p+=g*L}k.forEach((O,C)=>{u+=no(D,O.duration||60);let N=10,x=null;if(P&&P.schedule){const B=P.schedule.find(V=>V.clientId===O.clientId);B&&(N=B.travelTimeFromPrev||10,x=B.arrivalTime)}O.calculatedTravelTime=N,O.optimizedArrivalTime=x}),k.sort((O,C)=>{const N=O.optimizedArrivalTime||O.startTime||O.scheduledTime||"00:00",x=C.optimizedArrivalTime||C.startTime||C.scheduledTime||"00:00";return N.localeCompare(x)})}let S="";if(window.isAdmin){const w=u-p-_,k=u>0?Math.round(w/u*100):0;S=`
      <div class="card" style="margin-bottom: 20px; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success);">
        <h3 class="card-title" style="color: var(--success); margin-bottom: 15px;">
          <span class="material-icons-round">analytics</span>
          【管理者専用】本日の収支シミュレーション
        </h3>
        <div class="grid grid-4" style="gap: 15px; text-align: center;">
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定売上</div>
            <div style="font-size: 1.5rem; font-weight: bold;">¥${u.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">人件費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${p.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">車両・移動費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${_.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定利益 (利益率)</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: ${w>=0?"var(--success)":"var(--danger)"};">
              ¥${w.toLocaleString()} <span style="font-size: 1rem;">(${k}%)</span>
            </div>
          </div>
        </div>
      </div>
    `}i.innerHTML=`
    ${S}
    ${E}
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${At(Fe)} — ${r.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(c).map(([w,k])=>{const D=e.find(P=>P.id===w);return`
          <div class="card" style="border-left:4px solid ${(D==null?void 0:D.color)||"#999"}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${(D==null?void 0:D.color)||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${k.length}
              </div>
              ${se((D==null?void 0:D.name)||"未割当")}
            </h3>
            <div class="schedule-timeline">
              ${k.map((P,L)=>{const O=n.find(B=>B.id===P.clientId),C=P.optimizedArrivalTime||P.startTime||P.scheduledTime||"--:--";let N="",x="";if(L>0){const B=k[L-1],V=B.optimizedArrivalTime||B.startTime||B.scheduledTime,g=P.calculatedTravelTime||10;if(V&&C!=="--:--"){const[h,m]=V.split(":").map(Number),[y,v]=C.split(":").map(Number),I=h*60+m+(B.duration||60),z=y*60+v-I;z<g&&(x=`
                          <div style="color:var(--danger); font-size: 0.8rem; padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border-radius: 4px; margin-bottom: 8px;">
                            <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">warning</span>
                            移動時間が不足しています（必要: ${g}分, 実際: ${z}分）
                          </div>
                        `),N=`
                        <div style="margin-left: 60px; padding: 4px 0; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; border-left: 2px dashed var(--border); padding-left: 14px;">
                          <span class="material-icons-round" style="font-size: 14px; margin-right: 4px;">directions_car</span>
                          移動時間: 約${g}分
                        </div>
                      `}}return`
                  ${N}
                  ${x}
                  <div class="time-slot">
                    <div class="time-label">${C}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${se((O==null?void 0:O.name)||"不明")}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">
                              ${P.serviceInfo||P.service||"訪問"} | ${P.duration||60}分
                            </div>
                            <div style="font-size:.75rem;color:var(--text-muted); margin-top:2px;">
                              <span class="material-icons-round" style="font-size:12px;vertical-align:middle">place</span>
                              ${se((O==null?void 0:O.area)||"未設定")}
                            </div>
                          </div>
                          <button class="btn-icon" data-delete-visit="${P.id}" style="color:var(--danger)" title="削除">
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
  `}async function ud(){const[i,e]=await Promise.all([ge().catch(()=>[]),_e().catch(()=>[])]),n=`
    <form id="visit-form">
      <div class="form-group">
        <label class="form-label">利用者 *</label>
        <select class="form-select" id="vf-client">
          <option value="">選択してください</option>
          ${e.filter(o=>o.isActive).map(o=>`<option value="${o.id}">${o.name}（${o.careLevel}）</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">担当職員 *</label>
        <select class="form-select" id="vf-staff">
          <option value="">選択してください</option>
          ${i.filter(o=>o.isActive).map(o=>`<option value="${o.id}">${o.name}</option>`).join("")}
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
          ${uo.map(o=>`<option>${o}</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">想定売上（円）</label>
        <input class="form-input" type="number" id="vf-income" value="3960" min="0" step="100" />
        <div style="font-size:.75rem;color:var(--text-muted);margin-top:4px" id="vf-income-hint">
          ↑ サービス種別と所要時間から自動計算されます
        </div>
      </div>
    </form>
  `;_i("訪問予定の追加",n,`
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `);const r=()=>{const o=document.getElementById("vf-service").value,c=parseInt(document.getElementById("vf-duration").value)||60,l=hn(o,c);document.getElementById("vf-income").value=l,document.getElementById("vf-income-hint").textContent=`↑ ${o} ${c}分 → ¥${l.toLocaleString()}（自動計算）`};document.getElementById("vf-service").addEventListener("change",r),document.getElementById("vf-duration").addEventListener("change",r),r(),document.getElementById("vf-cancel").onclick=Ce,document.getElementById("vf-save").onclick=async()=>{const o=document.getElementById("vf-client").value,c=document.getElementById("vf-staff").value;if(!o||!c){R("利用者と職員を選択してください","warning");return}try{const l=parseInt(document.getElementById("vf-duration").value)||60,u=document.getElementById("vf-service").value,p=document.getElementById("vf-time").value,_=te(p)+l,E=Math.floor(_/60),S=_%60,w=`${String(E).padStart(2,"0")}:${String(S).padStart(2,"0")}`;await Pn({date:Fe,clientId:o,staffId:c,startTime:p,endTime:w,scheduledTime:p,duration:l,service:u,income:parseInt(document.getElementById("vf-income").value)||hn(u,l),status:"scheduled"}),R("訪問予定を追加しました","success"),Ce(),await Lt()}catch{R("追加に失敗しました","error")}}}async function hd(){var e;if(await Ii("週間スケジュール自動生成",`利用者の曜日設定に基づいて、今週（月〜土）の訪問予定を自動生成します。
既存の予定がある日はスキップされます。

実行しますか？`))try{const[n,r]=await Promise.all([_e(),ao()]),o={月:1,火:2,水:3,木:4,金:5,土:6},c=new Date,l=c.getDay(),u=r.filter(S=>S.dayOfWeek&&o[S.dayOfWeek]!==void 0);let p=0,_=0;const E=new Map;for(const S of u){const w=o[S.dayOfWeek];if(w===void 0)continue;const k=w-l,D=new Date(c);D.setDate(c.getDate()+k);const P=Zs(D),L=`${P}_${S.clientId}`;if(E.has(L)){E.get(L).timeOptions.push({startTime:S.startTime||"09:00",duration:S.duration||60});continue}if((await ze(P)).some(C=>C.clientId===S.clientId)){E.set(L,null),_++;continue}E.set(L,{...S,date:P,timeOptions:[{startTime:S.startTime||"09:00",duration:S.duration||60}]})}for(const[S,w]of E){if(!w)continue;const k=n.find(V=>V.id===w.clientId),D=w.service||((e=k==null?void 0:k.requiredServices)==null?void 0:e[0])||"身体介護",P=w.duration||(k==null?void 0:k.visitDuration)||60,L=w.startTime||"09:00",O=hn(D,P),C=te(L)+P,N=Math.floor(C/60),x=C%60,B=`${String(N).padStart(2,"0")}:${String(x).padStart(2,"0")}`;await Pn({date:w.date,clientId:w.clientId,clientName:w.clientName||(k==null?void 0:k.name)||"利用者",staffId:w.staffId||null,staffName:w.staffName||"未設定",startTime:L,endTime:B,scheduledTime:L,duration:P,service:D,income:O,dayOfWeek:w.dayOfWeek,status:"scheduled",timeOptions:w.timeOptions}),p++}p>0?R(`今週の訪問予定 ${p}件 を自動生成しました！${_>0?`（${_}件は既存のためスキップ）`:""}`,"success"):R(`生成する予定がありませんでした。${_>0?`（${_}件は既に登録済み）`:"利用者の曜日設定を確認してください。"}`,"warning"),await Lt()}catch(n){console.error("週間スケジュール生成エラー:",n),R("スケジュール生成に失敗しました: "+n.message,"error")}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-delete-visit]");if(e&&await Ii("削除確認","この訪問予定を削除しますか？"))try{await zl(e.dataset.deleteVisit),R("訪問予定を削除しました","success"),await Lt()}catch{R("削除に失敗しました","error")}});function fd(i,e){var l,u,p,_,E;let n=0;const r=[];let o=!0;for(const S of e.requiredServices||[])(u=(l=i.skills)==null?void 0:l.services)!=null&&u.includes(S)?(n+=_t.requiredSkill,r.push(`✅ ${S}対応可`)):(o=!1,r.push(`❌ ${S}に対応不可`));const c=[...((p=i.skills)==null?void 0:p.qualifications)||[],...((_=i.skills)==null?void 0:_.physical)||[],...((E=i.skills)==null?void 0:E.special)||[]];for(const S of e.requiredSkills||[])c.includes(S)?(n+=_t.requiredSkill,r.push(`✅ ${S}あり`)):(o=!1,r.push(`❌ ${S}なし`));if(e.genderPreference&&e.genderPreference!=="指定なし"){const S=e.genderPreference.replace("希望","");i.gender===S?(n+=_t.genderMatch,r.push(`✅ 性別希望合致（${S}）`)):(o=!1,r.push(`❌ 性別希望不一致（希望: ${S}）`))}if(i.type==="正社員"&&(n+=_t.staffType,r.push("✅ 正社員")),i.lat&&e.lat){const S=io(i.lat,i.lng,e.lat,e.lng),w=Math.max(0,_t.proximity*(1-S/10));n+=w}return{score:Math.round(n),reasons:r,eligible:o}}function md(i,e,n=[],r=null,o=[]){const c=[],l=new Set,u={},p={};o.forEach((w,k)=>{p[w.id]=k});const _=(w,k)=>{if(!r)return 15;const D=p[w],P=p[k];return D!==void 0&&P!==void 0&&r[D][P]&&r[D][P].duration||15},E=[...e].sort((w,k)=>{const D=w.startTime||w.scheduledTime||"00:00",P=k.startTime||k.scheduledTime||"00:00";return D.localeCompare(P)});for(const w of E){const k=i.filter(O=>O.isActive).map(O=>{const C=n.find(g=>g.id===w.clientId),{score:N,eligible:x}=fd(O,C||w),B=w.timeOptions&&w.timeOptions.length>0?w.timeOptions:[{startTime:w.startTime||w.scheduledTime||"09:00",duration:w.duration||60}];let V=null;for(const g of B){let h=!0;const m=te(g.startTime),y=m+(g.duration||60),v=c.filter(I=>I.staffId===O.id);for(const I of v){const f=te(I.startTime),z=f+(I.duration||60);if(m<z&&y>f){h=!1;break}const ce=_(I.clientId,w.clientId);if(m>=z){if(m-z<ce){h=!1;break}}else if(y<=f&&f-y<ce){h=!1;break}}if(h){V=g;break}}return{staff:O,score:N,eligible:x&&!!V,chosenTime:V}}).filter(O=>O.eligible);if(k.length===0)continue;k.sort((O,C)=>{const N=u[O.staff.id]||0,x=u[C.staff.id]||0,B=O.staff.maxVisits||(O.staff.type==="パート"?5:10),V=C.staff.maxVisits||(C.staff.type==="パート"?5:10),g=N>=B,h=x>=V;return g!==h?g?1:-1:N!==x?N-x:O.staff.type!==C.staff.type?O.staff.type==="正社員"?-1:1:C.score-O.score});const D=k[0],P=u[D.staff.id]||0,L=D.staff.maxVisits||(D.staff.type==="パート"?5:10);if(P<L){const O=D.chosenTime.startTime,C=D.chosenTime.duration||60,N=te(O)+C;c.push({staffId:D.staff.id,staffName:D.staff.name,visitId:w.id,clientId:w.clientId,clientName:w.clientName||"利用者",score:D.score,startTime:O,endTime:eo(N),scheduledTime:O,duration:C}),l.add(w.id),u[D.staff.id]=P+1}}const S=e.filter(w=>!l.has(w.id)).map(w=>({visitId:w.id,clientName:w.clientName||"利用者",reason:"適格な職員なし、または上限超過"}));return{assignments:c,unassigned:S}}async function pd(i,e,n,r=Q,o=null){const c={};for(const u of i)c[u.staffId]||(c[u.staffId]=[]),c[u.staffId].push(u.clientId);const l={};for(const[u,p]of Object.entries(c)){const _=e.find(O=>O.id===u),E=p.map(O=>n.find(C=>C.id===O)).filter(Boolean);if(E.length===0)continue;const S=[{id:"office",name:"事業所",lat:r.lat,lng:r.lng,isOffice:!0},...E.map(O=>{const C=i.find(N=>N.clientId===O.id&&N.staffId===u);return{id:O.id,name:O.name,lat:O.lat,lng:O.lng,duration:O.visitDuration||60,scheduledStart:C?C.startTime:null,timeWindow:O.timeWindow}})];let w=null;typeof o=="function"&&(w=await o(S));const k=gd(S,w);let D=vd(S,k);D=yd(D,k);const P=_d(D,k),L=Id(D,k,_,w,S);l[u]={staffId:u,staffName:(_==null?void 0:_.name)||"不明",staffColor:(_==null?void 0:_.color)||"#999",route:D,totalDistance:Math.round(P*10)/10,totalDuration:Td(L),schedule:L}}return l}function gd(i,e=null){const n=i.length,r=Array.from({length:n},()=>Array(n).fill(0));for(let o=0;o<n;o++)for(let c=0;c<n;c++)o!==c&&(e&&e[o]&&e[o][c]&&e[o][c].distance!==null?r[o][c]=e[o][c].distance:r[o][c]=io(i[o].lat,i[o].lng,i[c].lat,i[c].lng));return r}function vd(i,e){const n=i.length,r=new Set([0]),o=[0],c=[],l=[];for(let _=1;_<n;_++){const E=i[_];E.timeWindow&&E.timeWindow.start?c.push({index:_,start:te(E.timeWindow.start),end:te(E.timeWindow.end)}):l.push(_)}c.sort((_,E)=>_.start-E.start);const u=[...c.map(_=>_.index),...l];let p=0;for(;r.size<n;){let _=-1,E=1/0;for(const S of u)r.has(S)||e[p][S]<E&&(E=e[p][S],_=S);if(_===-1)break;o.push(_),r.add(_),p=_}return o.push(0),o}function yd(i,e){const n=i.length;let r=!0,o=[...i];for(;r;){r=!1;for(let c=1;c<n-2;c++)for(let l=c+1;l<n-1;l++){const u=e[o[c-1]][o[c]]+e[o[l]][o[l+1]];if(e[o[c-1]][o[l]]+e[o[c]][o[l+1]]<u-.001){const _=[...o];let E=c,S=l;for(;E<S;)[_[E],_[S]]=[_[S],_[E]],E++,S--;o=_,r=!0}}}return o}function _d(i,e){let n=0;for(let r=0;r<i.length-1;r++)n+=e[i[r]][i[r+1]];return n}function Id(i,e,n,r=null,o=[]){const c=[];let u=te((n==null?void 0:n.workStart)||"08:30");for(let p=0;p<i.length;p++){let _=0;if(p>0){const S=i[p-1],w=i[p];r&&r[S]&&r[S][w]&&r[S][w].duration!==null?_=r[S][w].duration:_=e[S][w]/20*60,u+=Math.ceil(_)}const E=o[i[p]];if(E){let S=0;E.timeWindow&&E.timeWindow.start?S=te(E.timeWindow.start):E.scheduledStart&&(S=te(E.scheduledStart)),u<S&&(u=S)}if(c.push({pointIndex:i[p],clientId:E?E.id:null,arrivalTime:eo(u),arrivalMinutes:u,travelTimeFromPrev:Math.ceil(_)}),p>0&&p<i.length-1){const S=E&&E.duration||60;u+=S}}return c}function Td(i){if(i.length<2)return 0;const e=i[0].arrivalMinutes;return i[i.length-1].arrivalMinutes-e}let vn=null,wd=null,qe=$t();async function mo(){const i=document.getElementById("page-container"),e=await ge(),n=["日","月","火","水","木","金","土"][new Date(qe).getDay()];i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">auto_fix_high</span>
        マッチング＆ルート最適化
      </h1>
      <div style="display:flex;align-items:center;gap:12px">
        <input type="date" id="match-date-picker" class="form-input" value="${qe}" style="width:160px">
        <span style="color:var(--text-secondary)">の予定を最適化</span>
      </div>
    </div>

    <!-- 職員の出勤選択 -->
    <div class="card" style="margin-bottom:24px">
      <div class="card-header">
        <h3 class="card-title">
          <span class="material-icons-round">people</span>
          出勤職員の確認 (${n}曜日)
        </h3>
      </div>
      <div class="grid grid-4" style="gap:12px">
        ${e.filter(r=>r.isActive).map(r=>{var c;const o=(c=r.days)==null?void 0:c.includes(n);return`
            <label class="card" style="display:flex;align-items:center;gap:10px;padding:12px;cursor:pointer;${o?"border-color:var(--primary)":""}">
              <input type="checkbox" class="staff-attendance-checkbox" data-staff-id="${r.id}" ${o?"checked":""} style="width:18px;height:18px">
              <div>
                <div style="font-weight:600">${se(r.name)}</div>
                <div style="font-size:.7rem;color:var(--text-muted)">${r.type} | ${o?"通常出勤":"通常休み"}</div>
              </div>
            </label>
          `}).join("")}
      </div>
    </div>

    <!-- 実行ボタン -->
    <div class="card" style="margin-bottom:24px;text-align:center;padding:32px">
      <h3 style="margin-bottom:8px">自動マッチング＆ルート最適化</h3>
      <p style="color:var(--text-secondary);margin-bottom:20px">
        上記でチェックした職員を使用して、最適な割り当てを算出します
      </p>
      <button class="btn btn-primary" id="btn-run-optimization" style="padding:14px 40px;font-size:1rem">
        <span class="material-icons-round">play_arrow</span>
        最適化を実行
      </button>
    </div>

    <!-- 結果表示エリア -->
    <div id="optimization-results"></div>
  `,document.getElementById("match-date-picker").addEventListener("change",r=>{qe=r.target.value,mo()}),document.getElementById("btn-run-optimization").addEventListener("click",bd)}async function bd(){var n;const i=document.getElementById("btn-run-optimization"),e=document.getElementById("optimization-results");i.disabled=!0,i.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',e.innerHTML="";try{const[r,o,c]=await Promise.all([ge(),_e(),ze(qe)]),l=Array.from(document.querySelectorAll(".staff-attendance-checkbox:checked")).map(k=>k.dataset.staffId),u=r.filter(k=>l.includes(k.id));if(u.length===0){R("出勤する職員を少なくとも1名選択してください","warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}if(c.length===0){R(`${At(new Date(qe))} の訪問予定がありません。`,"warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}const p=[{id:"office",...Q},...o.map(k=>({id:k.id,lat:k.lat,lng:k.lng}))];let _=null;try{await Pt(),_=await ys(p)}catch(k){console.warn("全体距離行列の取得に失敗:",k)}const{assignments:E,unassigned:S}=md(u,c,o,_,p);vn=E;const w=await pd(E,u,o,Q,async k=>{try{return await Pt(),await ys(k)}catch(D){return console.warn("実走行データの取得に失敗:",D),null}});wd=w,e.innerHTML=Sd(r,o,E,S,w),(n=document.getElementById("btn-save-routes"))==null||n.addEventListener("click",async()=>{await Ed(r,w)}),R("最適化が完了しました！","success")}catch(r){R("最適化に失敗しました: "+r.message,"error"),console.error(r)}finally{i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行'}}function Sd(i,e,n,r,o){const c={};for(const l of n)c[l.staffId]||(c[l.staffId]={staff:i.find(u=>u.id===l.staffId),clients:[]}),c[l.staffId].clients.push({...l,client:e.find(u=>u.id===l.clientId)});return`
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
        <div class="stat-value">${Object.values(o).reduce((l,u)=>l+u.totalDistance,0).toFixed(1)}<span style="font-size:.9rem;color:var(--text-muted)">km</span></div>
      </div>
    </div>

    <!-- 職員別結果 -->
    <div class="grid grid-2" style="margin-bottom:24px">
      ${Object.entries(c).map(([l,u])=>{var _,E,S;const p=o[l];return`
          <div class="card" style="border-left:4px solid ${((_=u.staff)==null?void 0:_.color)||"#999"}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${((E=u.staff)==null?void 0:E.color)||"#999"};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${u.clients.length}
                </div>
                ${se(((S=u.staff)==null?void 0:S.name)||"不明")}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${((p==null?void 0:p.totalDistance)||0).toFixed(1)}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${((p==null?void 0:p.schedule)||[]).filter(w=>w.pointIndex!==0||p.schedule.indexOf(w)===p.schedule.length-1).map((w,k,D)=>{var L,O;if(w.pointIndex===0&&k===D.length-1)return`<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${w.arrivalTime} 事業所帰着
                    </div>`;const P=u.clients.find(C=>C.clientId===w.clientId);return`<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${w.arrivalTime} ${((L=P==null?void 0:P.client)==null?void 0:L.name)||"利用者"}</strong>
                      <span class="tag">${((O=P==null?void 0:P.client)==null?void 0:O.visitDuration)||60}分</span>
                    </div>
                  </div>`}).join("")}
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
            ${se(l.clientName)} — ${l.reason}
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
  `}async function Ed(i,e){try{const n=Object.entries(e).map(([o,c])=>{const l=vn.filter(u=>u.staffId===o).map(u=>u.clientId);return{staffId:o,date:qe,clientIds:l,totalDistance:c.totalDistance,totalDuration:c.totalDuration,schedule:c.schedule}}),r=await ze(qe);for(const o of r){const c=vn.find(l=>l.visitId===o.id);c?await gs(o.id,{staffId:c.staffId,staffName:c.staffName}):await gs(o.id,{staffId:null,staffName:"未設定"})}await Gl(n),R("スケジュールとルートを保存しました！","success")}catch(n){R("保存に失敗しました: "+n.message,"error")}}let Et=$t();async function kd(){var e,n;const i=document.getElementById("page-container");if(!window.isAdmin){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:64px;color:var(--danger);opacity:.3">lock</span>
        <h3>アクセス権限がありません</h3>
        <p>このページは管理者専用です。</p>
        <button class="btn btn-primary" onclick="window.location.hash='#dashboard'">ダッシュボードへ戻る</button>
      </div>
    `;return}i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">analytics</span>
        収支シミュレーション
      </h1>
      <div class="btn-group">
        <input type="date" id="revenue-date-picker" class="form-input" value="${Et}" style="width:160px">
        <button class="btn btn-secondary" id="btn-refresh-revenue">
          <span class="material-icons-round">refresh</span>
          更新
        </button>
      </div>
    </div>

    <div id="revenue-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,await rn(),(e=document.getElementById("revenue-date-picker"))==null||e.addEventListener("change",r=>{Et=r.target.value,rn()}),(n=document.getElementById("btn-refresh-revenue"))==null||n.addEventListener("click",()=>{rn()})}async function rn(){const i=document.getElementById("revenue-content");if(!i)return;const[e,n,r,o]=await Promise.all([ge(),_e(),ze(Et),Cn(Et)]);if(r.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:48px;opacity:.2">event_busy</span>
        <p>${At(Et)} の訪問予定データがありません。</p>
      </div>
    `;return}let c=0,l=0,u=0,p=r.length;r.filter(w=>w.status==="completed").length;const _=e.map(w=>{const k=o.filter(x=>x.staffId===w.id),D=r.filter(x=>x.staffId===w.id);let P=0,L=0,O=0,C=0,N=0;if(D.forEach(x=>{P+=no(w,x.duration||60)}),k.forEach(x=>{if(C+=x.totalDistance||0,O+=(x.totalDistance||0)*ri,x.schedule&&x.schedule.length>=2){const B=x.schedule[0].arrivalMinutes;N=x.schedule[x.schedule.length-1].arrivalMinutes-B,L=N/60*(parseInt(w.wage)||2e3)}}),k.length===0&&D.length>0){const x=[...D].sort((m,y)=>(m.startTime||"09:00").localeCompare(y.startTime||"09:00")),B=x[0],V=x[x.length-1],g=te(B.startTime||"09:00");N=te(V.startTime||"17:00")+(V.duration||60)-g,L=N/60*(parseInt(w.wage)||2e3)}return{...w,count:D.length,revenue:P,laborCost:L,vehicleCost:O,profit:P-L-O,workMinutes:N}}).filter(w=>w.count>0||w.revenue>0).sort((w,k)=>k.profit-w.profit);_.forEach(w=>{c+=w.revenue,l+=w.laborCost,u+=w.vehicleCost});const E=c-l-u,S=c>0?E/c*100:0;i.innerHTML=`
    <!-- メインKPI -->
    <div class="grid grid-4" style="margin-bottom:24px">
      <div class="card stat-card" style="border-top: 4px solid var(--primary)">
        <div class="stat-label">想定売上</div>
        <div class="stat-value">¥${c.toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">${p}件の訪問</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--warning)">
        <div class="stat-label">人件費推計</div>
        <div class="stat-value">¥${Math.round(l).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">平均人件費/人: ¥${_.length>0?Math.round(l/_.length).toLocaleString():0}</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--secondary)">
        <div class="stat-label">移動・車両費</div>
        <div class="stat-value">¥${Math.round(u).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">@${ri}円/km</div>
      </div>
      <div class="card stat-card ${E>=0?"success":"danger"}" style="border-top: 4px solid ${E>=0?"var(--success)":"var(--danger)"}">
        <div class="stat-label">想定利益 (利益率)</div>
        <div class="stat-value">¥${Math.round(E).toLocaleString()}</div>
        <div style="font-size:.8rem;font-weight:600;color:${E>=0?"var(--success)":"var(--danger)"};margin-top:4px">
          ${S.toFixed(1)}%
        </div>
      </div>
    </div>

    <div class="grid grid-2">
      <!-- スタッフ別収支ランキング -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">職員別採算分析</h3>
        </div>
        <div style="overflow-x:auto">
          <table class="data-table">
            <thead>
              <tr>
                <th>職員名</th>
                <th style="text-align:right">件数</th>
                <th style="text-align:right">売上</th>
                <th style="text-align:right">利益</th>
                <th style="text-align:right">利益率</th>
              </tr>
            </thead>
            <tbody>
              ${_.map(w=>{const k=w.revenue>0?w.profit/w.revenue*100:0;return`
                  <tr>
                    <td>
                      <div style="display:flex;align-items:center;gap:8px">
                        <div style="width:10px;height:10px;border-radius:50%;background:${w.color}"></div>
                        <strong>${w.name}</strong>
                      </div>
                    </td>
                    <td style="text-align:right">${w.count}件</td>
                    <td style="text-align:right">¥${w.revenue.toLocaleString()}</td>
                    <td style="text-align:right;color:${w.profit>=0?"var(--success)":"var(--danger)"};font-weight:600">
                      ¥${Math.round(w.profit).toLocaleString()}
                    </td>
                    <td style="text-align:right">
                      <div style="display:flex;align-items:center;justify-content:flex-end;gap:8px">
                        <div style="flex:1;height:4px;width:40px;background:var(--border);border-radius:2px;overflow:hidden">
                          <div style="width:${Math.max(0,Math.min(100,k))}%;height:100%;background:${k>20?"var(--success)":"var(--warning)"}"></div>
                        </div>
                        <span>${k.toFixed(0)}%</span>
                      </div>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- 収支構成グラフ（擬似） -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">収支構成比率</h3>
        </div>
        <div style="padding:20px;display:flex;flex-direction:column;gap:24px">
          <div>
            <div style="display:flex;justify-content:space-between;margin-bottom:8px">
              <span style="font-size:.9rem">売上に対する構成</span>
            </div>
            <div style="height:32px;display:flex;border-radius:16px;overflow:hidden;box-shadow:inset 0 2px 4px rgba(0,0,0,0.1)">
              <div style="width:${c>0?(l/c*100).toFixed(1):0}%;background:var(--warning);display:flex;align-items:center;justify-content:center;color:#000;font-size:.7rem;font-weight:bold" title="人件費">人件費</div>
              <div style="width:${c>0?(u/c*100).toFixed(1):0}%;background:var(--secondary);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:bold" title="移動費">移動</div>
              <div style="width:${c>0?Math.max(0,E/c*100).toFixed(1):0}%;background:var(--success);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:bold" title="利益">利益</div>
            </div>
            <div style="display:flex;gap:16px;margin-top:12px;font-size:.8rem">
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--warning)"></div> 人件費 (${c>0?(l/c*100).toFixed(1):0}%)</div>
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--secondary)"></div> 移動費 (${c>0?(u/c*100).toFixed(1):0}%)</div>
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--success)"></div> 利益 (${c>0?Math.max(0,E/c*100).toFixed(1):0}%)</div>
            </div>
          </div>

          <div class="card" style="background:rgba(255,255,255,0.03);border:none;padding:16px">
            <h4 style="margin-bottom:12px;font-size:.9rem;color:var(--text-secondary)">経営アドバイス</h4>
            <ul style="font-size:.85rem;line-height:1.6;padding-left:16px;color:var(--text-muted)">
              ${S<15?"<li>利益率が15%を下回っています。移動ルートの最適化を再度実行し、移動時間を削減してください。</li>":""}
              ${c>0&&l/c>.6?"<li>売上に対する人件費率が60%を超えています。1人あたりの訪問件数を増やす調整が必要です。</li>":"<li>人件費率は適正範囲内です。</li>"}
              <li>現在の移動コスト単価は1kmあたり${ri}円で計算されています。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}const Ad={dashboard:{render:Kl,title:"ダッシュボード"},map:{render:sd,title:"マップビュー"},staff:{render:Ln,title:"職員管理"},client:{render:xn,title:"利用者管理"},schedule:{render:dd,title:"スケジュール"},matching:{render:mo,title:"マッチング＆最適化"},revenue:{render:kd,title:"収支シミュレーション"}};function Od(){var o,c,l,u;document.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",()=>{const _=p.dataset.page;_&&pi(_)})}),(o=document.getElementById("btn-sidebar-toggle"))==null||o.addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("collapsed")});const e=document.getElementById("sidebar"),n=document.getElementById("sidebar-overlay"),r=()=>{e.classList.toggle("open"),n.classList.toggle("open")};(c=document.getElementById("btn-mobile-menu"))==null||c.addEventListener("click",r),n==null||n.addEventListener("click",r),(l=document.getElementById("btn-modal-close"))==null||l.addEventListener("click",()=>{document.getElementById("modal-overlay").style.display="none"}),(u=document.getElementById("modal-overlay"))==null||u.addEventListener("click",p=>{p.target===p.currentTarget&&(p.currentTarget.style.display="none")})}async function pi(i){var r,o;const e=Ad[i];if(!e)return;document.querySelectorAll(".nav-item").forEach(c=>{c.classList.toggle("active",c.dataset.page===i)}),(r=document.getElementById("sidebar"))==null||r.classList.remove("open"),(o=document.getElementById("sidebar-overlay"))==null||o.classList.remove("open"),document.title=`${e.title} - CareRoute`;const n=document.getElementById("page-container");n.innerHTML='<div class="loading"><div class="spinner"></div></div>';try{await e.render()}catch(c){console.error(`ページ「${e.title}」の表示エラー:`,c),n.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${c.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `}}const Ts=[{id:"staff_2",name:"前川さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_3",name:"水口さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"18:01",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018},{id:"staff_4",name:"横家さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","火","水","木","金"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#F59E0B",isActive:!0,lat:35.443,lng:137.018},{id:"staff_5",name:"木澤さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["火","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#8B5CF6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_6",name:"圭子さん",gender:"女性",type:"パート",workStart:"07:50",workEnd:"16:00",days:["月","火","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:[]},color:"#EC4899",isActive:!0,lat:35.443,lng:137.018},{id:"staff_7",name:"藤吉さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"12:00",days:["火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["ペット可"]},color:"#14B8A6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_8",name:"ちえみさん",gender:"女性",type:"パート",workStart:"13:00",workEnd:"17:00",days:["月","火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#F97316",isActive:!0,lat:35.443,lng:137.018},{id:"staff_9",name:"棚橋さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["火","水","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#6366F1",isActive:!0,lat:35.443,lng:137.018},{id:"staff_10",name:"高井さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"14:00",days:["火","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理"]},color:"#84CC16",isActive:!0,lat:35.443,lng:137.018},{id:"staff_11",name:"小沢さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"16:00",days:["月","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#0EA5E9",isActive:!0,lat:35.443,lng:137.018},{id:"staff_12",name:"若尾さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["月","火","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#3B82F6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_13",name:"小川さん",gender:"女性",type:"パート",workStart:"08:20",workEnd:"17:00",days:["月","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_14",name:"井戸さん",gender:"女性",type:"パート",workStart:"07:30",workEnd:"16:00",days:["月","火","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018}],ws=[{id:"client_1",name:"中村晃",genderPreference:"指定なし",address:"関市東新町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.497156833927576,lng:136.91472248776176,isActive:!0,area:"関市"},{id:"client_2",name:"今井 幸",genderPreference:"指定なし",address:"可児市今渡1334番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.429546564671064,lng:137.06448192237502,isActive:!0,area:"可児市"},{id:"client_3",name:"佐合愛",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441449916213905,lng:137.00859676668438,isActive:!0,area:"美濃加茂市"},{id:"client_4",name:"佐藤 平",genderPreference:"指定なし",address:"関市小野1378番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.496713667191365,lng:136.91611792725212,isActive:!0,area:"関市"},{id:"client_5",name:"佐藤 惠",genderPreference:"指定なし",address:"加茂郡富加町羽生1439-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49350458855056,lng:137.00284647997333,isActive:!0,area:"加茂郡富加町"},{id:"client_6",name:"内田 鉄",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1247",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43919134426946,lng:137.0179669717769,isActive:!0,area:"美濃加茂市"},{id:"client_7",name:"冨田 勝",genderPreference:"女性希望",address:"美濃加茂市蜂屋町中蜂屋1475番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.433236929814676,lng:137.0206065781048,isActive:!0,area:"美濃加茂市"},{id:"client_8",name:"前川 み",genderPreference:"指定なし",address:"美濃加茂市森山町3-4-28",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.447385010380714,lng:137.0241786951649,isActive:!0,area:"美濃加茂市"},{id:"client_9",name:"加藤 民",genderPreference:"指定なし",address:"加茂郡川辺町中川辺1220番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.475384399265096,lng:137.06390768355888,isActive:!0,area:"加茂郡川辺町"},{id:"client_10",name:"加藤 雪",genderPreference:"指定なし",address:"可児市松伏3-4",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.42952101999053,lng:137.06996025815,isActive:!0,area:"可児市"},{id:"client_11",name:"吉村 強",genderPreference:"女性希望",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45175401563851,lng:137.02161473049864,isActive:!0,area:"美濃加茂市"},{id:"client_12",name:"吉田あ",genderPreference:"指定なし",address:"関市西田原",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49115464552958,lng:136.92399997463878,isActive:!0,area:"関市"},{id:"client_13",name:"和田 隆",genderPreference:"指定なし",address:"加茂郡川辺町石神84番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48236841267637,lng:137.07760456602477,isActive:!0,area:"加茂郡川辺町"},{id:"client_14",name:"土岐 吉",genderPreference:"指定なし",address:"美濃加茂市加茂野町市橋836-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44162170104763,lng:137.0262114717999,isActive:!0,area:"美濃加茂市"},{id:"client_15",name:"土岐 雅",genderPreference:"指定なし",address:"加茂郡富加町羽生1453-20",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.488517359713484,lng:136.99491575096658,isActive:!0,area:"加茂郡富加町"},{id:"client_16",name:"大森 君",genderPreference:"女性希望",address:"加茂郡富加町高畑637-3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50099328128151,lng:136.98455151897673,isActive:!0,area:"加茂郡富加町"},{id:"client_17",name:"大橋ひさ",genderPreference:"女性希望",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.438385496082404,lng:137.02562783976515,isActive:!0,area:"美濃加茂市"},{id:"client_18",name:"天野慧",genderPreference:"指定なし",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.434155101090184,lng:137.02364638342797,isActive:!0,area:"美濃加茂市"},{id:"client_19",name:"奥田 邦",genderPreference:"指定なし",address:"加茂郡川辺町石神9778-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494079651227416,lng:137.07228502934993,isActive:!0,area:"加茂郡川辺町"},{id:"client_20",name:"安田 正",genderPreference:"女性希望",address:"関市東町4-3-24",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.498558378964844,lng:136.93317629557282,isActive:!0,area:"関市"},{id:"client_21",name:"安藤 悦治",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4458132002014,lng:137.0128572203751,isActive:!0,area:"美濃加茂市"},{id:"client_22",name:"宮本伸",genderPreference:"指定なし",address:"美濃加茂市上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43490869964852,lng:137.01386742162063,isActive:!0,area:"美濃加茂市"},{id:"client_23",name:"宮田 薫",genderPreference:"指定なし",address:"加茂郡富加町高畑637番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4893904414253,lng:136.9951458803918,isActive:!0,area:"加茂郡富加町"},{id:"client_24",name:"富田 菊",genderPreference:"指定なし",address:"可児市矢戸1445番地34",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.435752761721716,lng:137.0651931080912,isActive:!0,area:"可児市"},{id:"client_25",name:"小原 強",genderPreference:"指定なし",address:"美濃加茂市下米田町則光329番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441734590435274,lng:137.0125176746724,isActive:!0,area:"美濃加茂市"},{id:"client_26",name:"岡田 洋",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋1674番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4365047823305,lng:137.01270107633286,isActive:!0,area:"美濃加茂市"},{id:"client_27",name:"岩﨑 嬉",genderPreference:"指定なし",address:"美濃加茂市加茂川町３丁目４番７号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43346804141193,lng:137.01932833342485,isActive:!0,area:"美濃加茂市"},{id:"client_28",name:"川崎 イ",genderPreference:"指定なし",address:"加茂郡富加町滝田151番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.496723988527705,lng:136.9997990843252,isActive:!0,area:"加茂郡富加町"},{id:"client_29",name:"平田 裕",genderPreference:"指定なし",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.449511651048645,lng:137.00972072094092,isActive:!0,area:"美濃加茂市"},{id:"client_30",name:"平田あ",genderPreference:"女性希望",address:"加茂郡富加町羽生",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49517050409468,lng:136.9856735080124,isActive:!0,area:"加茂郡富加町"},{id:"client_31",name:"廣 強",genderPreference:"指定なし",address:"美濃加茂市牧野1076-75",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44218112119725,lng:137.01104910417206,isActive:!0,area:"美濃加茂市"},{id:"client_32",name:"斉藤真",genderPreference:"指定なし",address:"関市北天神",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48797634825378,lng:136.9143700838785,isActive:!0,area:"関市"},{id:"client_33",name:"日比野 奥",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.437015399250406,lng:137.00906805366205,isActive:!0,area:"美濃加茂市"},{id:"client_34",name:"日比野 由",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43337070077588,lng:137.0244453376369,isActive:!0,area:"美濃加茂市"},{id:"client_35",name:"日比野 直",genderPreference:"女性希望",address:"美濃加茂市清水町2-3-17",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44642678990315,lng:137.01795349522274,isActive:!0,area:"美濃加茂市"},{id:"client_36",name:"木村 光",genderPreference:"指定なし",address:"美濃加茂市太田町2600番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.435371997376876,lng:137.01108131268214,isActive:!0,area:"美濃加茂市"},{id:"client_37",name:"木澤 博",genderPreference:"指定なし",address:"加茂郡富加町加治田3461番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.506303390707046,lng:136.99104467350202,isActive:!0,area:"加茂郡富加町"},{id:"client_38",name:"木澤 照",genderPreference:"女性希望",address:"加茂郡川辺町石神215-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4880086414237,lng:137.07289353288346,isActive:!0,area:"加茂郡川辺町"},{id:"client_39",name:"杉島 希",genderPreference:"指定なし",address:"加茂郡富加町滝田283-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50110204409342,lng:136.98395012382613,isActive:!0,area:"加茂郡富加町"},{id:"client_40",name:"村仲 尚",genderPreference:"女性希望",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.438698758555574,lng:137.02193085044868,isActive:!0,area:"美濃加茂市"},{id:"client_41",name:"村仲 鍬",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452301436877214,lng:137.02067008781682,isActive:!0,area:"美濃加茂市"},{id:"client_42",name:"松元 良",genderPreference:"女性希望",address:"美濃加茂市本郷町1丁目1番26号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.43827103816531,lng:137.01191566430634,isActive:!0,area:"美濃加茂市"},{id:"client_43",name:"栗山 年",genderPreference:"指定なし",address:"加茂郡富加町高畑258番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494121986748645,lng:136.98518245423062,isActive:!0,area:"加茂郡富加町"},{id:"client_44",name:"櫻井 あ",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉773番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.45138892205426,lng:137.01422771742352,isActive:!0,area:"美濃加茂市"},{id:"client_45",name:"河野 仁",genderPreference:"指定なし",address:"加茂郡富加町羽生909-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.490271641834966,lng:136.98727323288463,isActive:!0,area:"加茂郡富加町"},{id:"client_46",name:"浅野",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45202959233498,lng:137.01566783519402,isActive:!0,area:"美濃加茂市"},{id:"client_47",name:"渡邉 文",genderPreference:"指定なし",address:"加茂郡川辺町比久見505番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49415672848246,lng:137.0639961091595,isActive:!0,area:"加茂郡川辺町"},{id:"client_48",name:"渡邉直",genderPreference:"女性希望",address:"美濃加茂市蜂屋町上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43872942558895,lng:137.01354730683613,isActive:!0,area:"美濃加茂市"},{id:"client_49",name:"瀧戸 邦",genderPreference:"指定なし",address:"加茂郡富加町高畑815-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49012105422854,lng:137.00036018284152,isActive:!0,area:"加茂郡富加町"},{id:"client_50",name:"石原 ヤ",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50124112017079,lng:136.98382202932007,isActive:!0,area:"加茂郡富加町"},{id:"client_51",name:"石原 孝",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49328324234597,lng:136.9835128247142,isActive:!0,area:"加茂郡富加町"},{id:"client_52",name:"石田 友",genderPreference:"指定なし",address:"関市大杉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49271720267115,lng:136.91679407643252,isActive:!0,area:"関市"},{id:"client_53",name:"神園 昭",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1552-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445736819174996,lng:137.02080207291,isActive:!0,area:"美濃加茂市"},{id:"client_54",name:"細田 と",genderPreference:"指定なし",address:"加茂郡川辺町比久見927番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49138118249907,lng:137.0669797974694,isActive:!0,area:"加茂郡川辺町"},{id:"client_55",name:"織部 恒",genderPreference:"女性希望",address:"加茂郡富加町大山561-2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4956482083646,lng:136.98479580431297,isActive:!0,area:"加茂郡富加町"},{id:"client_56",name:"纐纈 芳",genderPreference:"指定なし",address:"美濃加茂市田島町2-1-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45002813499261,lng:137.0212204400497,isActive:!0,area:"美濃加茂市"},{id:"client_57",name:"纐纈美",genderPreference:"指定なし",address:"美濃加茂市大手町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4391119160273,lng:137.02387050933302,isActive:!0,area:"美濃加茂市"},{id:"client_58",name:"肥田 太",genderPreference:"指定なし",address:"可児市下恵土4146-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4312051032861,lng:137.05456974028345,isActive:!0,area:"可児市"},{id:"client_59",name:"菊池 二",genderPreference:"指定なし",address:"美濃加茂市加茂野町鷹之巣1712番地13",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44067140824593,lng:137.00812252064713,isActive:!0,area:"美濃加茂市"},{id:"client_60",name:"酒向 み",genderPreference:"指定なし",address:"美濃加茂市下米田町東栃井173番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.439305854394995,lng:137.02599237626308,isActive:!0,area:"美濃加茂市"},{id:"client_61",name:"鈴木 春",genderPreference:"女性希望",address:"美濃加茂市蜂屋町伊瀬920",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445308304721735,lng:137.02055837255097,isActive:!0,area:"美濃加茂市"},{id:"client_62",name:"長沼 善",genderPreference:"指定なし",address:"美濃加茂市富加町加治田665",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452051259062436,lng:137.01855573983298,isActive:!0,area:"美濃加茂市"},{id:"client_63",name:"馬場 と",genderPreference:"女性希望",address:"美濃加茂市太田町3519-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44993124386665,lng:137.02104853551123,isActive:!0,area:"美濃加茂市"},{id:"client_64",name:"高山 智",genderPreference:"指定なし",address:"美濃加茂市牧野1941番地16",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44532882741129,lng:137.00968272003644,isActive:!0,area:"美濃加茂市"},{id:"client_65",name:"髙井 千",genderPreference:"女性希望",address:"加茂郡富加町羽生1751番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.505370248825024,lng:136.9927463803301,isActive:!0,area:"加茂郡富加町"},{id:"client_66",name:"鹿野 和",genderPreference:"指定なし",address:"美濃加茂市山之上町1538番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44890607991325,lng:137.01711922971506,isActive:!0,area:"美濃加茂市"},{id:"client_67",name:"鹿野 義",genderPreference:"指定なし",address:"美濃加茂市山之上町6260番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43761631928377,lng:137.01824050932268,isActive:!0,area:"美濃加茂市"}],bs=[{id:"visit_1",clientId:"client_46",dayOfWeek:"金",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_2",clientId:"client_18",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_3",clientId:"client_21",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_4",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"生活２・１７９０円"},{id:"visit_5",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_6",clientId:"client_52",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_7",clientId:"client_52",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_8",clientId:"client_52",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_9",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_10",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_11",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_12",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_13",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_14",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_15",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_16",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_17",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_18",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_19",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_20",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_21",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_22",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_23",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_24",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_25",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_26",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_27",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_28",clientId:"client_50",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2200,serviceInfo:"生活３・２２００円"},{id:"visit_29",clientId:"client_50",dayOfWeek:"水",startTime:"12:30",endTime:"14:00",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_30",clientId:"client_2",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_31",clientId:"client_27",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_32",clientId:"client_6",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_33",clientId:"client_17",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:5870,serviceInfo:"障害身体・５８７０円・１２００円"},{id:"visit_34",clientId:"client_17",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_35",clientId:"client_17",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_36",clientId:"client_16",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_37",clientId:"client_26",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_38",clientId:"client_19",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_39",clientId:"client_19",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_40",clientId:"client_25",dayOfWeek:"月",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_41",clientId:"client_25",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_42",clientId:"client_25",dayOfWeek:"木",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_43",clientId:"client_25",dayOfWeek:"水",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_44",clientId:"client_25",dayOfWeek:"金",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_45",clientId:"client_55",dayOfWeek:"月",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_46",clientId:"client_55",dayOfWeek:"土",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_47",clientId:"client_9",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_48",clientId:"client_9",dayOfWeek:"火",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_49",clientId:"client_9",dayOfWeek:"木",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_50",clientId:"client_9",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_51",clientId:"client_9",dayOfWeek:"土",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_52",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_53",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_54",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_55",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_56",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_57",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_58",clientId:"client_9",dayOfWeek:"月",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_59",clientId:"client_9",dayOfWeek:"土",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_60",clientId:"client_9",dayOfWeek:"火",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_61",clientId:"client_9",dayOfWeek:"金",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_62",clientId:"client_9",dayOfWeek:"木",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_63",clientId:"client_10",dayOfWeek:"水",startTime:"10:00",endTime:"11:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_64",clientId:"client_10",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_65",clientId:"client_53",dayOfWeek:"水",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_66",clientId:"client_28",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_67",clientId:"client_28",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_68",clientId:"client_45",dayOfWeek:"金",startTime:"09:15",endTime:"10:15",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_69",clientId:"client_59",dayOfWeek:"月",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_70",clientId:"client_59",dayOfWeek:"水",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_71",clientId:"client_59",dayOfWeek:"金",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_72",clientId:"client_38",dayOfWeek:"月",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_73",clientId:"client_38",dayOfWeek:"水",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_74",clientId:"client_38",dayOfWeek:"金",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_75",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_76",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_77",clientId:"client_37",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_78",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_79",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_80",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_81",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_82",clientId:"client_37",dayOfWeek:"水",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_83",clientId:"client_37",dayOfWeek:"木",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_84",clientId:"client_37",dayOfWeek:"火",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_85",clientId:"client_37",dayOfWeek:"土",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_86",clientId:"client_37",dayOfWeek:"火",startTime:"17:00",endTime:"17:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_87",clientId:"client_37",dayOfWeek:"水",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_88",clientId:"client_37",dayOfWeek:"木",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_89",clientId:"client_36",dayOfWeek:"月",startTime:"15:30",endTime:"16:30",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_90",clientId:"client_36",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_91",clientId:"client_36",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_92",clientId:"client_57",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_93",clientId:"client_43",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_94",clientId:"client_43",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_95",clientId:"client_43",dayOfWeek:"金",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_96",clientId:"client_43",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_97",clientId:"client_56",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害・４０４０円・１２００円"},{id:"visit_98",clientId:"client_32",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_99",clientId:"client_44",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_100",clientId:"client_44",dayOfWeek:"火",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_101",clientId:"client_44",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_102",clientId:"client_44",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_103",clientId:"client_60",dayOfWeek:"火",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_104",clientId:"client_60",dayOfWeek:"木",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_105",clientId:"client_60",dayOfWeek:"土",startTime:"08:10",endTime:"09:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_106",clientId:"client_3",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_107",clientId:"client_3",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_108",clientId:"client_5",dayOfWeek:"水",startTime:"12:00",endTime:"13:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_109",clientId:"client_4",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_110",clientId:"client_4",dayOfWeek:"火",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_111",clientId:"client_4",dayOfWeek:"水",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_112",clientId:"client_4",dayOfWeek:"木",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_113",clientId:"client_4",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_114",clientId:"client_4",dayOfWeek:"土",startTime:"16:30",endTime:"17:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_115",clientId:"client_66",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_116",clientId:"client_67",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_117",clientId:"client_39",dayOfWeek:"月",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_118",clientId:"client_61",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_119",clientId:"client_61",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_120",clientId:"client_65",dayOfWeek:"月",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_121",clientId:"client_65",dayOfWeek:"火",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_122",clientId:"client_65",dayOfWeek:"水",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_123",clientId:"client_65",dayOfWeek:"木",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_124",clientId:"client_65",dayOfWeek:"金",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_125",clientId:"client_65",dayOfWeek:"土",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_126",clientId:"client_65",dayOfWeek:"月",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_127",clientId:"client_65",dayOfWeek:"水",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_128",clientId:"client_65",dayOfWeek:"木",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_129",clientId:"client_65",dayOfWeek:"金",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_130",clientId:"client_65",dayOfWeek:"土",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_131",clientId:"client_65",dayOfWeek:"火",startTime:"12:10",endTime:"12:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_132",clientId:"client_65",dayOfWeek:"月",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_133",clientId:"client_65",dayOfWeek:"水",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_134",clientId:"client_65",dayOfWeek:"火",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_135",clientId:"client_65",dayOfWeek:"金",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_136",clientId:"client_65",dayOfWeek:"土",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_137",clientId:"client_64",dayOfWeek:"火",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_138",clientId:"client_64",dayOfWeek:"木",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_139",clientId:"client_64",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_140",clientId:"client_49",dayOfWeek:"水",startTime:"12:15",endTime:"13:15",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_141",clientId:"client_49",dayOfWeek:"土",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_142",clientId:"client_14",dayOfWeek:"水",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_143",clientId:"client_15",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_144",clientId:"client_15",dayOfWeek:"水",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_145",clientId:"client_15",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_146",clientId:"client_24",dayOfWeek:"火",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_147",clientId:"client_24",dayOfWeek:"木",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_148",clientId:"client_7",dayOfWeek:"月",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_149",clientId:"client_7",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_150",clientId:"client_1",dayOfWeek:"月",startTime:"15:30",endTime:"16:00",duration:60,income:3090,serviceInfo:"障害家事・１０６０円・１０１０円"},{id:"visit_151",clientId:"client_1",dayOfWeek:"水",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_152",clientId:"client_1",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_153",clientId:"client_62",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_154",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_155",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_156",clientId:"client_58",dayOfWeek:"月",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_157",clientId:"client_58",dayOfWeek:"水",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_158",clientId:"client_58",dayOfWeek:"火",startTime:"11:45",endTime:"12:15",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_159",clientId:"client_58",dayOfWeek:"木",startTime:"13:00",endTime:"13:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_160",clientId:"client_58",dayOfWeek:"金",startTime:"12:30",endTime:"13:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_161",clientId:"client_33",dayOfWeek:"木",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_162",clientId:"client_35",dayOfWeek:"月",startTime:"10:40",endTime:"11:40",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_163",clientId:"client_34",dayOfWeek:"火",startTime:"07:30",endTime:"08:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_164",clientId:"client_30",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_165",clientId:"client_29",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_166",clientId:"client_31",dayOfWeek:"木",startTime:"09:30",endTime:"10:20",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_167",clientId:"client_54",dayOfWeek:"火",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_168",clientId:"client_54",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_169",clientId:"client_54",dayOfWeek:"木",startTime:"08:15",endTime:"09:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_170",clientId:"client_8",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_171",clientId:"client_42",dayOfWeek:"火",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_172",clientId:"client_42",dayOfWeek:"金",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_173",clientId:"client_42",dayOfWeek:"水",startTime:"14:45",endTime:"16:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_174",clientId:"client_23",dayOfWeek:"土",startTime:"15:00",endTime:"15:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_175",clientId:"client_22",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_176",clientId:"client_41",dayOfWeek:"火",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_177",clientId:"client_40",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_178",clientId:"client_40",dayOfWeek:"木",startTime:"11:45",endTime:"12:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_179",clientId:"client_40",dayOfWeek:"金",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_180",clientId:"client_20",dayOfWeek:"月",startTime:"17:00",endTime:"18:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_181",clientId:"client_12",dayOfWeek:"火",startTime:"15:30",endTime:"16:15",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_182",clientId:"client_12",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_183",clientId:"client_11",dayOfWeek:"月",startTime:"12:00",endTime:"12:50",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_184",clientId:"client_48",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_185",clientId:"client_48",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_186",clientId:"client_47",dayOfWeek:"土",startTime:"14:15",endTime:"15:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_187",clientId:"client_13",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"}];document.addEventListener("DOMContentLoaded",()=>{var i,e;console.log("🏠 CareRoute 起動中..."),Fl(),Od();try{Bl(async(n,r)=>{if(r){R(r,"error"),sn();return}n?(console.log("✅ ログイン:",n.email),Ss(n),await pi("dashboard")):sn()})}catch(n){console.warn("Firebase未設定のためデモモードで起動します:",n),sn()}(i=document.getElementById("btn-logout"))==null||i.addEventListener("click",async()=>{try{await Ul(),R("ログアウトしました","info")}catch{R("ログアウトに失敗しました","error")}}),(e=document.getElementById("btn-demo-mode"))==null||e.addEventListener("click",async()=>{Ss({displayName:"デモユーザー",email:"demo@careroute.local",photoURL:""}),(await ge()).length===0&&(R("デモデータを自動投入しています...","info"),await po(!0)),await pi("dashboard"),R("デモモードで起動しました","info")})});function sn(){document.getElementById("login-screen").style.display="flex",document.getElementById("main-app").style.display="none",document.getElementById("nav-revenue").style.display="none"}function Ss(i){document.getElementById("login-screen").style.display="none",document.getElementById("main-app").style.display="flex";const e=document.getElementById("user-avatar"),n=document.getElementById("user-name");e&&(e.src=i.photoURL||""),n&&(n.textContent=i.displayName||i.email),window.isAdmin=i.email==="demo@careroute.local";const r=document.getElementById("nav-revenue");r&&(r.style.display=window.isAdmin?"flex":"none"),Dd()}function Dd(){if(document.getElementById("btn-load-demo"))return;const i=document.querySelector(".sidebar-nav"),e=document.createElement("li");e.className="nav-item",e.id="btn-load-demo",e.innerHTML=`
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `,e.addEventListener("click",po),i.appendChild(e)}async function po(i=!1){const e=document.getElementById("btn-load-demo");if(!(!i&&!confirm(`デモデータ（職員6名・利用者20名）を投入しますか？
既存データには影響しません。`))){e&&(e.innerHTML=`
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `);try{const n=await ge(),r=await _e();if(n.length>0||r.length>0){if(!i&&!confirm("既存のデータを全て削除し、新しいエクセルデータを投入しますか？")){e&&(e.innerHTML=`
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `);return}typeof ps=="function"?await ps():(localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"))}for(const u of Ts)await so(u);R(`職員 ${Ts.length}名 を登録しました`,"success");for(const u of ws)await oo(u);R(`利用者 ${ws.length}名 を登録しました`,"success");const o=new Date,c=o.getDay(),l={日:0,月:1,火:2,水:3,木:4,金:5,土:6};for(const u of bs){let p=new Date(o);if(u.dayOfWeek&&l[u.dayOfWeek]!==void 0){const k=l[u.dayOfWeek]-c;p.setDate(o.getDate()+k)}const _=p.getFullYear(),E=String(p.getMonth()+1).padStart(2,"0"),S=String(p.getDate()).padStart(2,"0"),w=`${_}-${E}-${S}`;await Pn({...u,date:w,status:"scheduled"})}R(`予定 ${bs.length}件 を登録しました`,"success"),await pi("dashboard"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `,setTimeout(()=>e.remove(),3e3)}catch(n){console.error("デモデータ投入エラー:",n),R("デモデータの投入に失敗しました: "+n.message,"error"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `}}}
