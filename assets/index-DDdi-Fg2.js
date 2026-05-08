(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const ha=()=>{};var er={};/**
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
 */const qr=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},fa=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=i[n++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=i[n++],c=i[n++],u=i[n++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=i[n++],c=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const l=i[o],c=o+1<i.length,u=c?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,E=l>>2,b=(l&3)<<4|u>>4;let I=(u&15)<<2|g>>6,k=g&63;p||(k=64,c||(I=64)),s.push(n[E],n[b],n[I],n[k])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(qr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):fa(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const l=n[i.charAt(o++)],u=o<i.length?n[i.charAt(o)]:0;++o;const g=o<i.length?n[i.charAt(o)]:64;++o;const b=o<i.length?n[i.charAt(o)]:64;if(++o,l==null||u==null||g==null||b==null)throw new ma;const I=l<<2|u>>4;if(s.push(I),g!==64){const k=u<<4&240|g>>2;if(s.push(k),b!==64){const x=g<<6&192|b;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ma extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pa=function(i){const e=qr(i);return zr.encodeByteArray(e,!0)},Hr=function(i){return pa(i).replace(/\./g,"")},Gr=function(i){try{return zr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ga(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const va=()=>ga().__FIREBASE_DEFAULTS__,ya=()=>{if(typeof process>"u"||typeof er>"u")return;const i=er.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},_a=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Gr(i[1]);return e&&JSON.parse(e)},Ia=()=>{try{return ha()||va()||ya()||_a()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ta=i=>{var e;return(e=Ia())==null?void 0:e[`_${i}`]};/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ba(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function wa(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ea(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Sa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ka(){try{return typeof indexedDB=="object"}catch{return!1}}function Aa(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
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
 */const xa="FirebaseError";class Ce extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=xa,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}}class Qt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?Oa(l,s):"Error",u=`${this.serviceName}: ${c} (${o}).`;return new Ce(o,u,s)}}function Oa(i,e){return i.replace(Da,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Da=/\{\$([^}]+)}/g;/**
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
 */function Kr(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function La(i,e){const n=new Pa(i,e);return n.subscribe.bind(n)}class Pa{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ca(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=mn),o.error===void 0&&(o.error=mn),o.complete===void 0&&(o.complete=mn);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ca(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function mn(){}/**
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
 */function Zt(i){return i&&i._delegate?i._delegate:i}/**
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
 */function Jr(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}class ut{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var q;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(q||(q={}));const Ma={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Na=q.INFO,Ra={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},$a=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Ra[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Un{constructor(e){this.name=e,this._logLevel=Na,this._logHandler=$a,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ma[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Ba=(i,e)=>e.some(n=>i instanceof n);let tr,ir;function Wa(){return tr||(tr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ua(){return ir||(ir=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xr=new WeakMap,An=new WeakMap,Yr=new WeakMap,pn=new WeakMap,Fn=new WeakMap;function Fa(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{n(Oe(i.result)),o()},c=()=>{s(i.error),o()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Xr.set(n,i)}).catch(()=>{}),Fn.set(e,i),e}function Va(i){if(An.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{n(),o()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});An.set(i,e)}let xn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return An.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Yr.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Oe(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ja(i){xn=i(xn)}function qa(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(gn(this),e,...n);return Yr.set(s,e.sort?e.sort():[e]),Oe(s)}:Ua().includes(i)?function(...e){return i.apply(gn(this),e),Oe(Xr.get(this))}:function(...e){return Oe(i.apply(gn(this),e))}}function za(i){return typeof i=="function"?qa(i):(i instanceof IDBTransaction&&Va(i),Ba(i,Wa())?new Proxy(i,xn):i)}function Oe(i){if(i instanceof IDBRequest)return Fa(i);if(pn.has(i))return pn.get(i);const e=za(i);return e!==i&&(pn.set(i,e),Fn.set(e,i)),e}const gn=i=>Fn.get(i);function Ha(i,e,{blocked:n,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(i,e),u=Oe(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Oe(c.result),p.oldVersion,p.newVersion,Oe(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),u.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),u}const Ga=["get","getKey","getAll","getAllKeys","count"],Ka=["put","add","delete","clear"],vn=new Map;function nr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(vn.get(e))return vn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=Ka.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Ga.includes(n)))return;const l=async function(c,...u){const p=this.transaction(c,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(u.shift())),(await Promise.all([g[n](...u),o&&p.done]))[0]};return vn.set(e,l),l}ja(i=>({...i,get:(e,n,s)=>nr(e,n)||i.get(e,n,s),has:(e,n)=>!!nr(e,n)||i.has(e,n)}));/**
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
 */class Ja{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xa(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xa(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const On="@firebase/app",sr="0.14.11";/**
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
 */const Ie=new Un("@firebase/app"),Ya="@firebase/app-compat",Qa="@firebase/analytics-compat",Za="@firebase/analytics",el="@firebase/app-check-compat",tl="@firebase/app-check",il="@firebase/auth",nl="@firebase/auth-compat",sl="@firebase/database",rl="@firebase/data-connect",ol="@firebase/database-compat",al="@firebase/functions",ll="@firebase/functions-compat",cl="@firebase/installations",dl="@firebase/installations-compat",ul="@firebase/messaging",hl="@firebase/messaging-compat",fl="@firebase/performance",ml="@firebase/performance-compat",pl="@firebase/remote-config",gl="@firebase/remote-config-compat",vl="@firebase/storage",yl="@firebase/storage-compat",_l="@firebase/firestore",Il="@firebase/ai",Tl="@firebase/firestore-compat",bl="firebase",wl="12.12.0",El={[On]:"fire-core",[Ya]:"fire-core-compat",[Za]:"fire-analytics",[Qa]:"fire-analytics-compat",[tl]:"fire-app-check",[el]:"fire-app-check-compat",[il]:"fire-auth",[nl]:"fire-auth-compat",[sl]:"fire-rtdb",[rl]:"fire-data-connect",[ol]:"fire-rtdb-compat",[al]:"fire-fn",[ll]:"fire-fn-compat",[cl]:"fire-iid",[dl]:"fire-iid-compat",[ul]:"fire-fcm",[hl]:"fire-fcm-compat",[fl]:"fire-perf",[ml]:"fire-perf-compat",[pl]:"fire-rc",[gl]:"fire-rc-compat",[vl]:"fire-gcs",[yl]:"fire-gcs-compat",[_l]:"fire-fst",[Tl]:"fire-fst-compat",[Il]:"fire-vertex","fire-js":"fire-js",[bl]:"fire-js-all"};/**
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
 */const Sl=new Map,kl=new Map,rr=new Map;function or(i,e){try{i.container.addComponent(e)}catch(n){Ie.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ht(i){const e=i.name;if(rr.has(e))return Ie.debug(`There were multiple attempts to register component ${e}.`),!1;rr.set(e,i);for(const n of Sl.values())or(n,i);for(const n of kl.values())or(n,i);return!0}function Fe(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Al={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new Qt("app","Firebase",Al);/**
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
 */const Ci=wl;function De(i,e,n){let s=El[i]??i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ie.warn(c.join(" "));return}ht(new ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xl="firebase-heartbeat-database",Ol=1,jt="firebase-heartbeat-store";let yn=null;function Qr(){return yn||(yn=Ha(xl,Ol,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(jt)}catch(n){console.warn(n)}}}}).catch(i=>{throw Vn.create("idb-open",{originalErrorMessage:i.message})})),yn}async function Dl(i){try{const n=(await Qr()).transaction(jt),s=await n.objectStore(jt).get(Zr(i));return await n.done,s}catch(e){if(e instanceof Ce)Ie.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ie.warn(n.message)}}}async function ar(i,e){try{const s=(await Qr()).transaction(jt,"readwrite");await s.objectStore(jt).put(e,Zr(i)),await s.done}catch(n){if(n instanceof Ce)Ie.warn(n.message);else{const s=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ie.warn(s.message)}}}function Zr(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Ll=1024,Pl=30;class Cl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=lr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Pl){const c=Rl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ie.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lr(),{heartbeatsToSend:s,unsentEntries:o}=Ml(this._heartbeatsCache.heartbeats),l=Hr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Ie.warn(n),""}}}function lr(){return new Date().toISOString().substring(0,10)}function Ml(i,e=Ll){const n=[];let s=i.slice();for(const o of i){const l=n.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),cr(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),cr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ka()?Aa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Dl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ar(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ar(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cr(i){return Hr(JSON.stringify({version:2,heartbeats:i})).length}function Rl(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function $l(i){ht(new ut("platform-logger",e=>new Ja(e),"PRIVATE")),ht(new ut("heartbeat",e=>new Cl(e),"PRIVATE")),De(On,sr,i),De(On,sr,"esm2020"),De("fire-js","")}$l("");var Bl="firebase",Wl="12.12.1";/**
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
 */De(Bl,Wl,"app");var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,h){function m(){}m.prototype=h.prototype,_.F=h.prototype,_.prototype=new m,_.prototype.constructor=_,_.D=function(v,y,T){for(var f=Array(arguments.length-2),j=2;j<arguments.length;j++)f[j-2]=arguments[j];return h.prototype[y].apply(v,f)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(_,h,m){m||(m=0);const v=Array(16);if(typeof h=="string")for(var y=0;y<16;++y)v[y]=h.charCodeAt(m++)|h.charCodeAt(m++)<<8|h.charCodeAt(m++)<<16|h.charCodeAt(m++)<<24;else for(y=0;y<16;++y)v[y]=h[m++]|h[m++]<<8|h[m++]<<16|h[m++]<<24;h=_.g[0],m=_.g[1],y=_.g[2];let T=_.g[3],f;f=h+(T^m&(y^T))+v[0]+3614090360&4294967295,h=m+(f<<7&4294967295|f>>>25),f=T+(y^h&(m^y))+v[1]+3905402710&4294967295,T=h+(f<<12&4294967295|f>>>20),f=y+(m^T&(h^m))+v[2]+606105819&4294967295,y=T+(f<<17&4294967295|f>>>15),f=m+(h^y&(T^h))+v[3]+3250441966&4294967295,m=y+(f<<22&4294967295|f>>>10),f=h+(T^m&(y^T))+v[4]+4118548399&4294967295,h=m+(f<<7&4294967295|f>>>25),f=T+(y^h&(m^y))+v[5]+1200080426&4294967295,T=h+(f<<12&4294967295|f>>>20),f=y+(m^T&(h^m))+v[6]+2821735955&4294967295,y=T+(f<<17&4294967295|f>>>15),f=m+(h^y&(T^h))+v[7]+4249261313&4294967295,m=y+(f<<22&4294967295|f>>>10),f=h+(T^m&(y^T))+v[8]+1770035416&4294967295,h=m+(f<<7&4294967295|f>>>25),f=T+(y^h&(m^y))+v[9]+2336552879&4294967295,T=h+(f<<12&4294967295|f>>>20),f=y+(m^T&(h^m))+v[10]+4294925233&4294967295,y=T+(f<<17&4294967295|f>>>15),f=m+(h^y&(T^h))+v[11]+2304563134&4294967295,m=y+(f<<22&4294967295|f>>>10),f=h+(T^m&(y^T))+v[12]+1804603682&4294967295,h=m+(f<<7&4294967295|f>>>25),f=T+(y^h&(m^y))+v[13]+4254626195&4294967295,T=h+(f<<12&4294967295|f>>>20),f=y+(m^T&(h^m))+v[14]+2792965006&4294967295,y=T+(f<<17&4294967295|f>>>15),f=m+(h^y&(T^h))+v[15]+1236535329&4294967295,m=y+(f<<22&4294967295|f>>>10),f=h+(y^T&(m^y))+v[1]+4129170786&4294967295,h=m+(f<<5&4294967295|f>>>27),f=T+(m^y&(h^m))+v[6]+3225465664&4294967295,T=h+(f<<9&4294967295|f>>>23),f=y+(h^m&(T^h))+v[11]+643717713&4294967295,y=T+(f<<14&4294967295|f>>>18),f=m+(T^h&(y^T))+v[0]+3921069994&4294967295,m=y+(f<<20&4294967295|f>>>12),f=h+(y^T&(m^y))+v[5]+3593408605&4294967295,h=m+(f<<5&4294967295|f>>>27),f=T+(m^y&(h^m))+v[10]+38016083&4294967295,T=h+(f<<9&4294967295|f>>>23),f=y+(h^m&(T^h))+v[15]+3634488961&4294967295,y=T+(f<<14&4294967295|f>>>18),f=m+(T^h&(y^T))+v[4]+3889429448&4294967295,m=y+(f<<20&4294967295|f>>>12),f=h+(y^T&(m^y))+v[9]+568446438&4294967295,h=m+(f<<5&4294967295|f>>>27),f=T+(m^y&(h^m))+v[14]+3275163606&4294967295,T=h+(f<<9&4294967295|f>>>23),f=y+(h^m&(T^h))+v[3]+4107603335&4294967295,y=T+(f<<14&4294967295|f>>>18),f=m+(T^h&(y^T))+v[8]+1163531501&4294967295,m=y+(f<<20&4294967295|f>>>12),f=h+(y^T&(m^y))+v[13]+2850285829&4294967295,h=m+(f<<5&4294967295|f>>>27),f=T+(m^y&(h^m))+v[2]+4243563512&4294967295,T=h+(f<<9&4294967295|f>>>23),f=y+(h^m&(T^h))+v[7]+1735328473&4294967295,y=T+(f<<14&4294967295|f>>>18),f=m+(T^h&(y^T))+v[12]+2368359562&4294967295,m=y+(f<<20&4294967295|f>>>12),f=h+(m^y^T)+v[5]+4294588738&4294967295,h=m+(f<<4&4294967295|f>>>28),f=T+(h^m^y)+v[8]+2272392833&4294967295,T=h+(f<<11&4294967295|f>>>21),f=y+(T^h^m)+v[11]+1839030562&4294967295,y=T+(f<<16&4294967295|f>>>16),f=m+(y^T^h)+v[14]+4259657740&4294967295,m=y+(f<<23&4294967295|f>>>9),f=h+(m^y^T)+v[1]+2763975236&4294967295,h=m+(f<<4&4294967295|f>>>28),f=T+(h^m^y)+v[4]+1272893353&4294967295,T=h+(f<<11&4294967295|f>>>21),f=y+(T^h^m)+v[7]+4139469664&4294967295,y=T+(f<<16&4294967295|f>>>16),f=m+(y^T^h)+v[10]+3200236656&4294967295,m=y+(f<<23&4294967295|f>>>9),f=h+(m^y^T)+v[13]+681279174&4294967295,h=m+(f<<4&4294967295|f>>>28),f=T+(h^m^y)+v[0]+3936430074&4294967295,T=h+(f<<11&4294967295|f>>>21),f=y+(T^h^m)+v[3]+3572445317&4294967295,y=T+(f<<16&4294967295|f>>>16),f=m+(y^T^h)+v[6]+76029189&4294967295,m=y+(f<<23&4294967295|f>>>9),f=h+(m^y^T)+v[9]+3654602809&4294967295,h=m+(f<<4&4294967295|f>>>28),f=T+(h^m^y)+v[12]+3873151461&4294967295,T=h+(f<<11&4294967295|f>>>21),f=y+(T^h^m)+v[15]+530742520&4294967295,y=T+(f<<16&4294967295|f>>>16),f=m+(y^T^h)+v[2]+3299628645&4294967295,m=y+(f<<23&4294967295|f>>>9),f=h+(y^(m|~T))+v[0]+4096336452&4294967295,h=m+(f<<6&4294967295|f>>>26),f=T+(m^(h|~y))+v[7]+1126891415&4294967295,T=h+(f<<10&4294967295|f>>>22),f=y+(h^(T|~m))+v[14]+2878612391&4294967295,y=T+(f<<15&4294967295|f>>>17),f=m+(T^(y|~h))+v[5]+4237533241&4294967295,m=y+(f<<21&4294967295|f>>>11),f=h+(y^(m|~T))+v[12]+1700485571&4294967295,h=m+(f<<6&4294967295|f>>>26),f=T+(m^(h|~y))+v[3]+2399980690&4294967295,T=h+(f<<10&4294967295|f>>>22),f=y+(h^(T|~m))+v[10]+4293915773&4294967295,y=T+(f<<15&4294967295|f>>>17),f=m+(T^(y|~h))+v[1]+2240044497&4294967295,m=y+(f<<21&4294967295|f>>>11),f=h+(y^(m|~T))+v[8]+1873313359&4294967295,h=m+(f<<6&4294967295|f>>>26),f=T+(m^(h|~y))+v[15]+4264355552&4294967295,T=h+(f<<10&4294967295|f>>>22),f=y+(h^(T|~m))+v[6]+2734768916&4294967295,y=T+(f<<15&4294967295|f>>>17),f=m+(T^(y|~h))+v[13]+1309151649&4294967295,m=y+(f<<21&4294967295|f>>>11),f=h+(y^(m|~T))+v[4]+4149444226&4294967295,h=m+(f<<6&4294967295|f>>>26),f=T+(m^(h|~y))+v[11]+3174756917&4294967295,T=h+(f<<10&4294967295|f>>>22),f=y+(h^(T|~m))+v[2]+718787259&4294967295,y=T+(f<<15&4294967295|f>>>17),f=m+(T^(y|~h))+v[9]+3951481745&4294967295,_.g[0]=_.g[0]+h&4294967295,_.g[1]=_.g[1]+(y+(f<<21&4294967295|f>>>11))&4294967295,_.g[2]=_.g[2]+y&4294967295,_.g[3]=_.g[3]+T&4294967295}s.prototype.v=function(_,h){h===void 0&&(h=_.length);const m=h-this.blockSize,v=this.C;let y=this.h,T=0;for(;T<h;){if(y==0)for(;T<=m;)o(this,_,T),T+=this.blockSize;if(typeof _=="string"){for(;T<h;)if(v[y++]=_.charCodeAt(T++),y==this.blockSize){o(this,v),y=0;break}}else for(;T<h;)if(v[y++]=_[T++],y==this.blockSize){o(this,v),y=0;break}}this.h=y,this.o+=h},s.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var h=1;h<_.length-8;++h)_[h]=0;h=this.o*8;for(var m=_.length-8;m<_.length;++m)_[m]=h&255,h/=256;for(this.v(_),_=Array(16),h=0,m=0;m<4;++m)for(let v=0;v<32;v+=8)_[h++]=this.g[m]>>>v&255;return _};function l(_,h){var m=u;return Object.prototype.hasOwnProperty.call(m,_)?m[_]:m[_]=h(_)}function c(_,h){this.h=h;const m=[];let v=!0;for(let y=_.length-1;y>=0;y--){const T=_[y]|0;v&&T==h||(m[y]=T,v=!1)}this.g=m}var u={};function p(_){return-128<=_&&_<128?l(_,function(h){return new c([h|0],h<0?-1:0)}):new c([_|0],_<0?-1:0)}function g(_){if(isNaN(_)||!isFinite(_))return b;if(_<0)return D(g(-_));const h=[];let m=1;for(let v=0;_>=m;v++)h[v]=_/m|0,m*=4294967296;return new c(h,0)}function E(_,h){if(_.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(_.charAt(0)=="-")return D(E(_.substring(1),h));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=g(Math.pow(h,8));let v=b;for(let T=0;T<_.length;T+=8){var y=Math.min(8,_.length-T);const f=parseInt(_.substring(T,T+y),h);y<8?(y=g(Math.pow(h,y)),v=v.j(y).add(g(f))):(v=v.j(m),v=v.add(g(f)))}return v}var b=p(0),I=p(1),k=p(16777216);i=c.prototype,i.m=function(){if(A(this))return-D(this).m();let _=0,h=1;for(let m=0;m<this.g.length;m++){const v=this.i(m);_+=(v>=0?v:4294967296+v)*h,h*=4294967296}return _},i.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(x(this))return"0";if(A(this))return"-"+D(this).toString(_);const h=g(Math.pow(_,6));var m=this;let v="";for(;;){const y=C(m,h).g;m=P(m,y.j(h));let T=((m.g.length>0?m.g[0]:m.h)>>>0).toString(_);if(m=y,x(m))return T+v;for(;T.length<6;)T="0"+T;v=T+v}},i.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function x(_){if(_.h!=0)return!1;for(let h=0;h<_.g.length;h++)if(_.g[h]!=0)return!1;return!0}function A(_){return _.h==-1}i.l=function(_){return _=P(this,_),A(_)?-1:x(_)?0:1};function D(_){const h=_.g.length,m=[];for(let v=0;v<h;v++)m[v]=~_.g[v];return new c(m,~_.h).add(I)}i.abs=function(){return A(this)?D(this):this},i.add=function(_){const h=Math.max(this.g.length,_.g.length),m=[];let v=0;for(let y=0;y<=h;y++){let T=v+(this.i(y)&65535)+(_.i(y)&65535),f=(T>>>16)+(this.i(y)>>>16)+(_.i(y)>>>16);v=f>>>16,T&=65535,f&=65535,m[y]=f<<16|T}return new c(m,m[m.length-1]&-2147483648?-1:0)};function P(_,h){return _.add(D(h))}i.j=function(_){if(x(this)||x(_))return b;if(A(this))return A(_)?D(this).j(D(_)):D(D(this).j(_));if(A(_))return D(this.j(D(_)));if(this.l(k)<0&&_.l(k)<0)return g(this.m()*_.m());const h=this.g.length+_.g.length,m=[];for(var v=0;v<2*h;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(let y=0;y<_.g.length;y++){const T=this.i(v)>>>16,f=this.i(v)&65535,j=_.i(y)>>>16,te=_.i(y)&65535;m[2*v+2*y]+=f*te,L(m,2*v+2*y),m[2*v+2*y+1]+=T*te,L(m,2*v+2*y+1),m[2*v+2*y+1]+=f*j,L(m,2*v+2*y+1),m[2*v+2*y+2]+=T*j,L(m,2*v+2*y+2)}for(_=0;_<h;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=h;_<2*h;_++)m[_]=0;return new c(m,0)};function L(_,h){for(;(_[h]&65535)!=_[h];)_[h+1]+=_[h]>>>16,_[h]&=65535,h++}function N(_,h){this.g=_,this.h=h}function C(_,h){if(x(h))throw Error("division by zero");if(x(_))return new N(b,b);if(A(_))return h=C(D(_),h),new N(D(h.g),D(h.h));if(A(h))return h=C(_,D(h)),new N(D(h.g),h.h);if(_.g.length>30){if(A(_)||A(h))throw Error("slowDivide_ only works with positive integers.");for(var m=I,v=h;v.l(_)<=0;)m=R(m),v=R(v);var y=W(m,1),T=W(v,1);for(v=W(v,2),m=W(m,2);!x(v);){var f=T.add(v);f.l(_)<=0&&(y=y.add(m),T=f),v=W(v,1),m=W(m,1)}return h=P(_,y.j(h)),new N(y,h)}for(y=b;_.l(h)>=0;){for(m=Math.max(1,Math.floor(_.m()/h.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),T=g(m),f=T.j(h);A(f)||f.l(_)>0;)m-=v,T=g(m),f=T.j(h);x(T)&&(T=I),y=y.add(T),_=P(_,f)}return new N(y,_)}i.B=function(_){return C(this,_).h},i.and=function(_){const h=Math.max(this.g.length,_.g.length),m=[];for(let v=0;v<h;v++)m[v]=this.i(v)&_.i(v);return new c(m,this.h&_.h)},i.or=function(_){const h=Math.max(this.g.length,_.g.length),m=[];for(let v=0;v<h;v++)m[v]=this.i(v)|_.i(v);return new c(m,this.h|_.h)},i.xor=function(_){const h=Math.max(this.g.length,_.g.length),m=[];for(let v=0;v<h;v++)m[v]=this.i(v)^_.i(v);return new c(m,this.h^_.h)};function R(_){const h=_.g.length+1,m=[];for(let v=0;v<h;v++)m[v]=_.i(v)<<1|_.i(v-1)>>>31;return new c(m,_.h)}function W(_,h){const m=h>>5;h%=32;const v=_.g.length-m,y=[];for(let T=0;T<v;T++)y[T]=h>0?_.i(T+m)>>>h|_.i(T+m+1)<<32-h:_.i(T+m);return new c(y,_.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=E,jn=c}).apply(typeof dr<"u"?dr:typeof self<"u"?self:typeof window<"u"?window:{});var hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof hi=="object"&&hi];for(var r=0;r<t.length;++r){var a=t[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=n(this);function o(t,r){if(r)e:{var a=s;t=t.split(".");for(var d=0;d<t.length-1;d++){var w=t[d];if(!(w in a))break e;a=a[w]}t=t[t.length-1],d=a[t],r=r(d),r!=d&&r!=null&&e(a,t,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(t){return t||function(r){var a=[],d;for(d in r)Object.prototype.hasOwnProperty.call(r,d)&&a.push([d,r[d]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function p(t,r,a){return t.call.apply(t.bind,arguments)}function g(t,r,a){return g=p,g.apply(null,arguments)}function E(t,r){var a=Array.prototype.slice.call(arguments,1);return function(){var d=a.slice();return d.push.apply(d,arguments),t.apply(this,d)}}function b(t,r){function a(){}a.prototype=r.prototype,t.Z=r.prototype,t.prototype=new a,t.prototype.constructor=t,t.Ob=function(d,w,S){for(var O=Array(arguments.length-2),$=2;$<arguments.length;$++)O[$-2]=arguments[$];return r.prototype[w].apply(d,O)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function k(t){const r=t.length;if(r>0){const a=Array(r);for(let d=0;d<r;d++)a[d]=t[d];return a}return[]}function x(t,r){for(let d=1;d<arguments.length;d++){const w=arguments[d];var a=typeof w;if(a=a!="object"?a:w?Array.isArray(w)?"array":a:"null",a=="array"||a=="object"&&typeof w.length=="number"){a=t.length||0;const S=w.length||0;t.length=a+S;for(let O=0;O<S;O++)t[a+O]=w[O]}else t.push(w)}}class A{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function D(t){c.setTimeout(()=>{throw t},0)}function P(){var t=_;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class L{constructor(){this.h=this.g=null}add(r,a){const d=N.get();d.set(r,a),this.h?this.h.next=d:this.g=d,this.h=d}}var N=new A(()=>new C,t=>t.reset());class C{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let R,W=!1,_=new L,h=()=>{const t=Promise.resolve(void 0);R=()=>{t.then(m)}};function m(){for(var t;t=P();){try{t.h.call(t.g)}catch(a){D(a)}var r=N;r.j(t),r.h<100&&(r.h++,t.next=r.g,r.g=t)}W=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};c.addEventListener("test",a,r),c.removeEventListener("test",a,r)}catch{}return t}();function f(t){return/^[\s\xa0]*$/.test(t)}function j(t,r){y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,r)}b(j,y),j.prototype.init=function(t,r){const a=this.type=t.type,d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget,r||(a=="mouseover"?r=t.fromElement:a=="mouseout"&&(r=t.toElement)),this.relatedTarget=r,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&j.Z.h.call(this)},j.prototype.h=function(){j.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var te="closure_listenable_"+(Math.random()*1e6|0),Qe=0;function Ui(t,r,a,d,w){this.listener=t,this.proxy=null,this.src=r,this.type=a,this.capture=!!d,this.ha=w,this.key=++Qe,this.da=this.fa=!1}function Ze(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function et(t,r,a){for(const d in t)r.call(a,t[d],d,t)}function Ne(t,r){for(const a in t)r.call(void 0,t[a],a,t)}function Re(t){const r={};for(const a in t)r[a]=t[a];return r}const tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yt(t,r){let a,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(a in d)t[a]=d[a];for(let S=0;S<tt.length;S++)a=tt[S],Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a])}}function ii(t){this.src=t,this.g={},this.h=0}ii.prototype.add=function(t,r,a,d,w){const S=t.toString();t=this.g[S],t||(t=this.g[S]=[],this.h++);const O=Vi(t,r,d,w);return O>-1?(r=t[O],a||(r.fa=!1)):(r=new Ui(r,this.src,S,!!d,w),r.fa=a,t.push(r)),r};function Fi(t,r){const a=r.type;if(a in t.g){var d=t.g[a],w=Array.prototype.indexOf.call(d,r,void 0),S;(S=w>=0)&&Array.prototype.splice.call(d,w,1),S&&(Ze(r),t.g[a].length==0&&(delete t.g[a],t.h--))}}function Vi(t,r,a,d){for(let w=0;w<t.length;++w){const S=t[w];if(!S.da&&S.listener==r&&S.capture==!!a&&S.ha==d)return w}return-1}var ji="closure_lm_"+(Math.random()*1e6|0),qi={};function ss(t,r,a,d,w){if(Array.isArray(r)){for(let S=0;S<r.length;S++)ss(t,r[S],a,d,w);return null}return a=as(a),t&&t[te]?t.J(r,a,u(d)?!!d.capture:!1,w):No(t,r,a,!1,d,w)}function No(t,r,a,d,w,S){if(!r)throw Error("Invalid event type");const O=u(w)?!!w.capture:!!w;let $=Hi(t);if($||(t[ji]=$=new ii(t)),a=$.add(r,a,d,O,S),a.proxy)return a;if(d=Ro(),a.proxy=d,d.src=t,d.listener=a,t.addEventListener)T||(w=O),w===void 0&&(w=!1),t.addEventListener(r.toString(),d,w);else if(t.attachEvent)t.attachEvent(os(r.toString()),d);else if(t.addListener&&t.removeListener)t.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Ro(){function t(a){return r.call(t.src,t.listener,a)}const r=$o;return t}function rs(t,r,a,d,w){if(Array.isArray(r))for(var S=0;S<r.length;S++)rs(t,r[S],a,d,w);else d=u(d)?!!d.capture:!!d,a=as(a),t&&t[te]?(t=t.i,S=String(r).toString(),S in t.g&&(r=t.g[S],a=Vi(r,a,d,w),a>-1&&(Ze(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete t.g[S],t.h--)))):t&&(t=Hi(t))&&(r=t.g[r.toString()],t=-1,r&&(t=Vi(r,a,d,w)),(a=t>-1?r[t]:null)&&zi(a))}function zi(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[te])Fi(r.i,t);else{var a=t.type,d=t.proxy;r.removeEventListener?r.removeEventListener(a,d,t.capture):r.detachEvent?r.detachEvent(os(a),d):r.addListener&&r.removeListener&&r.removeListener(d),(a=Hi(r))?(Fi(a,t),a.h==0&&(a.src=null,r[ji]=null)):Ze(t)}}}function os(t){return t in qi?qi[t]:qi[t]="on"+t}function $o(t,r){if(t.da)t=!0;else{r=new j(r,this);const a=t.listener,d=t.ha||t.src;t.fa&&zi(t),t=a.call(d,r)}return t}function Hi(t){return t=t[ji],t instanceof ii?t:null}var Gi="__closure_events_fn_"+(Math.random()*1e9>>>0);function as(t){return typeof t=="function"?t:(t[Gi]||(t[Gi]=function(r){return t.handleEvent(r)}),t[Gi])}function ee(){v.call(this),this.i=new ii(this),this.M=this,this.G=null}b(ee,v),ee.prototype[te]=!0,ee.prototype.removeEventListener=function(t,r,a,d){rs(this,t,r,a,d)};function ie(t,r){var a,d=t.G;if(d)for(a=[];d;d=d.G)a.push(d);if(t=t.M,d=r.type||r,typeof r=="string")r=new y(r,t);else if(r instanceof y)r.target=r.target||t;else{var w=r;r=new y(d,t),yt(r,w)}w=!0;let S,O;if(a)for(O=a.length-1;O>=0;O--)S=r.g=a[O],w=ni(S,d,!0,r)&&w;if(S=r.g=t,w=ni(S,d,!0,r)&&w,w=ni(S,d,!1,r)&&w,a)for(O=0;O<a.length;O++)S=r.g=a[O],w=ni(S,d,!1,r)&&w}ee.prototype.N=function(){if(ee.Z.N.call(this),this.i){var t=this.i;for(const r in t.g){const a=t.g[r];for(let d=0;d<a.length;d++)Ze(a[d]);delete t.g[r],t.h--}}this.G=null},ee.prototype.J=function(t,r,a,d){return this.i.add(String(t),r,!1,a,d)},ee.prototype.K=function(t,r,a,d){return this.i.add(String(t),r,!0,a,d)};function ni(t,r,a,d){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();let w=!0;for(let S=0;S<r.length;++S){const O=r[S];if(O&&!O.da&&O.capture==a){const $=O.listener,X=O.ha||O.src;O.fa&&Fi(t.i,O),w=$.call(X,d)!==!1&&w}}return w&&!d.defaultPrevented}function Bo(t,r){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=g(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:c.setTimeout(t,r||0)}function ls(t){t.g=Bo(()=>{t.g=null,t.i&&(t.i=!1,ls(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class Wo extends v{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:ls(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(t){v.call(this),this.h=t,this.g={}}b(_t,v);var cs=[];function ds(t){et(t.g,function(r,a){this.g.hasOwnProperty(a)&&zi(r)},t),t.g={}}_t.prototype.N=function(){_t.Z.N.call(this),ds(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ki=c.JSON.stringify,Uo=c.JSON.parse,Fo=class{stringify(t){return c.JSON.stringify(t,void 0)}parse(t){return c.JSON.parse(t,void 0)}};function us(){}function Vo(){}var It={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ji(){y.call(this,"d")}b(Ji,y);function Xi(){y.call(this,"c")}b(Xi,y);var it={},hs=null;function Yi(){return hs=hs||new ee}it.Ia="serverreachability";function fs(t){y.call(this,it.Ia,t)}b(fs,y);function Tt(t){const r=Yi();ie(r,new fs(r))}it.STAT_EVENT="statevent";function ms(t,r){y.call(this,it.STAT_EVENT,t),this.stat=r}b(ms,y);function ne(t){const r=Yi();ie(r,new ms(r,t))}it.Ja="timingevent";function ps(t,r){y.call(this,it.Ja,t),this.size=r}b(ps,y);function bt(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){t()},r)}function wt(){this.g=!0}wt.prototype.ua=function(){this.g=!1};function jo(t,r,a,d,w,S){t.info(function(){if(t.g)if(S){var O="",$=S.split("&");for(let z=0;z<$.length;z++){var X=$[z].split("=");if(X.length>1){const Z=X[0];X=X[1];const fe=Z.split("_");O=fe.length>=2&&fe[1]=="type"?O+(Z+"="+X+"&"):O+(Z+"=redacted&")}}}else O=null;else O=S;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+r+`
`+a+`
`+O})}function qo(t,r,a,d,w,S,O){t.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+r+`
`+a+`
`+S+" "+O})}function nt(t,r,a,d){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+Ho(t,a)+(d?" "+d:"")})}function zo(t,r){t.info(function(){return"TIMEOUT: "+r})}wt.prototype.info=function(){};function Ho(t,r){if(!t.g)return r;if(!r)return null;try{const S=JSON.parse(r);if(S){for(t=0;t<S.length;t++)if(Array.isArray(S[t])){var a=S[t];if(!(a.length<2)){var d=a[1];if(Array.isArray(d)&&!(d.length<1)){var w=d[0];if(w!="noop"&&w!="stop"&&w!="close")for(let O=1;O<d.length;O++)d[O]=""}}}}return Ki(S)}catch{return r}}var Qi={NO_ERROR:0,TIMEOUT:8},Go={},gs;function Zi(){}b(Zi,us),Zi.prototype.g=function(){return new XMLHttpRequest},gs=new Zi;function Et(t){return encodeURIComponent(String(t))}function Ko(t){var r=1;t=t.split(":");const a=[];for(;r>0&&t.length;)a.push(t.shift()),r--;return t.length&&a.push(t.join(":")),a}function Te(t,r,a,d){this.j=t,this.i=r,this.l=a,this.S=d||1,this.V=new _t(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vs}function vs(){this.i=null,this.g="",this.h=!1}var ys={},en={};function tn(t,r,a){t.M=1,t.A=ri(he(r)),t.u=a,t.R=!0,_s(t,null)}function _s(t,r){t.F=Date.now(),si(t),t.B=he(t.A);var a=t.B,d=t.S;Array.isArray(d)||(d=[String(d)]),Ps(a.i,"t",d),t.C=0,a=t.j.L,t.h=new vs,t.g=Xs(t.j,a?r:null,!t.u),t.P>0&&(t.O=new Wo(g(t.Y,t,t.g),t.P)),r=t.V,a=t.g,d=t.ba;var w="readystatechange";Array.isArray(w)||(w&&(cs[0]=w.toString()),w=cs);for(let S=0;S<w.length;S++){const O=ss(a,w[S],d||r.handleEvent,!1,r.h||r);if(!O)break;r.g[O.key]=O}r=t.J?Re(t.J):{},t.u?(t.v||(t.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,r)):(t.v="GET",t.g.ea(t.B,t.v,null,r)),Tt(),jo(t.i,t.v,t.B,t.l,t.S,t.u)}Te.prototype.ba=function(t){t=t.target;const r=this.O;r&&Ee(t)==3?r.j():this.Y(t)},Te.prototype.Y=function(t){try{if(t==this.g)e:{const $=Ee(this.g),X=this.g.ya(),z=this.g.ca();if(!($<3)&&($!=3||this.g&&(this.h.h||this.g.la()||Ws(this.g)))){this.K||$!=4||X==7||(X==8||z<=0?Tt(3):Tt(2)),nn(this);var r=this.g.ca();this.X=r;var a=Jo(this);if(this.o=r==200,qo(this.i,this.v,this.B,this.l,this.S,$,r),this.o){if(this.U&&!this.L){t:{if(this.g){var d,w=this.g;if((d=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(d)){var S=d;break t}}S=null}if(t=S)nt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,sn(this,t);else{this.o=!1,this.m=3,ne(12),$e(this),St(this);break e}}if(this.R){t=!0;let Z;for(;!this.K&&this.C<a.length;)if(Z=Xo(this,a),Z==en){$==4&&(this.m=4,ne(14),t=!1),nt(this.i,this.l,null,"[Incomplete Response]");break}else if(Z==ys){this.m=4,ne(15),nt(this.i,this.l,a,"[Invalid Chunk]"),t=!1;break}else nt(this.i,this.l,Z,null),sn(this,Z);if(Is(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||a.length!=0||this.h.h||(this.m=1,ne(16),t=!1),this.o=this.o&&t,!t)nt(this.i,this.l,a,"[Invalid Chunked Response]"),$e(this),St(this);else if(a.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),hn(O),O.P=!0,ne(11))}}else nt(this.i,this.l,a,null),sn(this,a);$==4&&$e(this),this.o&&!this.K&&($==4?Hs(this.j,this):(this.o=!1,si(this)))}else da(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,ne(12)):(this.m=0,ne(13)),$e(this),St(this)}}}catch{}finally{}};function Jo(t){if(!Is(t))return t.g.la();const r=Ws(t.g);if(r==="")return"";let a="";const d=r.length,w=Ee(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return $e(t),St(t),"";t.h.i=new c.TextDecoder}for(let S=0;S<d;S++)t.h.h=!0,a+=t.h.i.decode(r[S],{stream:!(w&&S==d-1)});return r.length=0,t.h.g+=a,t.C=0,t.h.g}function Is(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function Xo(t,r){var a=t.C,d=r.indexOf(`
`,a);return d==-1?en:(a=Number(r.substring(a,d)),isNaN(a)?ys:(d+=1,d+a>r.length?en:(r=r.slice(d,d+a),t.C=d+a,r)))}Te.prototype.cancel=function(){this.K=!0,$e(this)};function si(t){t.T=Date.now()+t.H,Ts(t,t.H)}function Ts(t,r){if(t.D!=null)throw Error("WatchDog timer not null");t.D=bt(g(t.aa,t),r)}function nn(t){t.D&&(c.clearTimeout(t.D),t.D=null)}Te.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(zo(this.i,this.B),this.M!=2&&(Tt(),ne(17)),$e(this),this.m=2,St(this)):Ts(this,this.T-t)};function St(t){t.j.I==0||t.K||Hs(t.j,t)}function $e(t){nn(t);var r=t.O;r&&typeof r.dispose=="function"&&r.dispose(),t.O=null,ds(t.V),t.g&&(r=t.g,t.g=null,r.abort(),r.dispose())}function sn(t,r){try{var a=t.j;if(a.I!=0&&(a.g==t||rn(a.h,t))){if(!t.L&&rn(a.h,t)&&a.I==3){try{var d=a.Ba.g.parse(r)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<t.F)di(a),li(a);else break e;un(a),ne(18)}}else a.xa=w[1],0<a.xa-a.K&&w[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=bt(g(a.Va,a),6e3));Es(a.h)<=1&&a.ta&&(a.ta=void 0)}else We(a,11)}else if((t.L||a.g==t)&&di(a),!f(r))for(w=a.Ba.g.parse(r),r=0;r<w.length;r++){let z=w[r];const Z=z[0];if(!(Z<=a.K))if(a.K=Z,z=z[1],a.I==2)if(z[0]=="c"){a.M=z[1],a.ba=z[2];const fe=z[3];fe!=null&&(a.ka=fe,a.j.info("VER="+a.ka));const Ue=z[4];Ue!=null&&(a.za=Ue,a.j.info("SVER="+a.za));const Se=z[5];Se!=null&&typeof Se=="number"&&Se>0&&(d=1.5*Se,a.O=d,a.j.info("backChannelRequestTimeoutMs_="+d)),d=a;const ke=t.g;if(ke){const ui=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var S=d.h;S.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(on(S,S.h),S.h=null))}if(d.G){const fn=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;fn&&(d.wa=fn,H(d.J,d.G,fn))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-t.F,a.j.info("Handshake RTT: "+a.T+"ms")),d=a;var O=t;if(d.na=Js(d,d.L?d.ba:null,d.W),O.L){Ss(d.h,O);var $=O,X=d.O;X&&($.H=X),$.D&&(nn($),si($)),d.g=O}else qs(d);a.i.length>0&&ci(a)}else z[0]!="stop"&&z[0]!="close"||We(a,7);else a.I==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?We(a,7):dn(a):z[0]!="noop"&&a.l&&a.l.qa(z),a.A=0)}}Tt(4)}catch{}}var Yo=class{constructor(t,r){this.g=t,this.map=r}};function bs(t){this.l=t||10,c.PerformanceNavigationTiming?(t=c.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ws(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Es(t){return t.h?1:t.g?t.g.size:0}function rn(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function on(t,r){t.g?t.g.add(r):t.h=r}function Ss(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}bs.prototype.cancel=function(){if(this.i=ks(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ks(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const a of t.g.values())r=r.concat(a.G);return r}return k(t.i)}var As=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qo(t,r){if(t){t=t.split("&");for(let a=0;a<t.length;a++){const d=t[a].indexOf("=");let w,S=null;d>=0?(w=t[a].substring(0,d),S=t[a].substring(d+1)):w=t[a],r(w,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function be(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;t instanceof be?(this.l=t.l,kt(this,t.j),this.o=t.o,this.g=t.g,At(this,t.u),this.h=t.h,an(this,Cs(t.i)),this.m=t.m):t&&(r=String(t).match(As))?(this.l=!1,kt(this,r[1]||"",!0),this.o=xt(r[2]||""),this.g=xt(r[3]||"",!0),At(this,r[4]),this.h=xt(r[5]||"",!0),an(this,r[6]||"",!0),this.m=xt(r[7]||"")):(this.l=!1,this.i=new Dt(null,this.l))}be.prototype.toString=function(){const t=[];var r=this.j;r&&t.push(Ot(r,xs,!0),":");var a=this.g;return(a||r=="file")&&(t.push("//"),(r=this.o)&&t.push(Ot(r,xs,!0),"@"),t.push(Et(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&t.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(Ot(a,a.charAt(0)=="/"?ta:ea,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",Ot(a,na)),t.join("")},be.prototype.resolve=function(t){const r=he(this);let a=!!t.j;a?kt(r,t.j):a=!!t.o,a?r.o=t.o:a=!!t.g,a?r.g=t.g:a=t.u!=null;var d=t.h;if(a)At(r,t.u);else if(a=!!t.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var w=r.h.lastIndexOf("/");w!=-1&&(d=r.h.slice(0,w+1)+d)}if(w=d,w==".."||w==".")d="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){d=w.lastIndexOf("/",0)==0,w=w.split("/");const S=[];for(let O=0;O<w.length;){const $=w[O++];$=="."?d&&O==w.length&&S.push(""):$==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),d&&O==w.length&&S.push("")):(S.push($),d=!0)}d=S.join("/")}else d=w}return a?r.h=d:a=t.i.toString()!=="",a?an(r,Cs(t.i)):a=!!t.m,a&&(r.m=t.m),r};function he(t){return new be(t)}function kt(t,r,a){t.j=a?xt(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function At(t,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);t.u=r}else t.u=null}function an(t,r,a){r instanceof Dt?(t.i=r,sa(t.i,t.l)):(a||(r=Ot(r,ia)),t.i=new Dt(r,t.l))}function H(t,r,a){t.i.set(r,a)}function ri(t){return H(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function xt(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ot(t,r,a){return typeof t=="string"?(t=encodeURI(t).replace(r,Zo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Zo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xs=/[#\/\?@]/g,ea=/[#\?:]/g,ta=/[#\?]/g,ia=/[#\?@]/g,na=/#/g;function Dt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function Be(t){t.g||(t.g=new Map,t.h=0,t.i&&Qo(t.i,function(r,a){t.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}i=Dt.prototype,i.add=function(t,r){Be(this),this.i=null,t=st(this,t);let a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(r),this.h+=1,this};function Os(t,r){Be(t),r=st(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function Ds(t,r){return Be(t),r=st(t,r),t.g.has(r)}i.forEach=function(t,r){Be(this),this.g.forEach(function(a,d){a.forEach(function(w){t.call(r,w,d,this)},this)},this)};function Ls(t,r){Be(t);let a=[];if(typeof r=="string")Ds(t,r)&&(a=a.concat(t.g.get(st(t,r))));else for(t=Array.from(t.g.values()),r=0;r<t.length;r++)a=a.concat(t[r]);return a}i.set=function(t,r){return Be(this),this.i=null,t=st(this,t),Ds(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},i.get=function(t,r){return t?(t=Ls(this,t),t.length>0?String(t[0]):r):r};function Ps(t,r,a){Os(t,r),a.length>0&&(t.i=null,t.g.set(st(t,r),k(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(let d=0;d<r.length;d++){var a=r[d];const w=Et(a);a=Ls(this,a);for(let S=0;S<a.length;S++){let O=w;a[S]!==""&&(O+="="+Et(a[S])),t.push(O)}}return this.i=t.join("&")};function Cs(t){const r=new Dt;return r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),r}function st(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function sa(t,r){r&&!t.j&&(Be(t),t.i=null,t.g.forEach(function(a,d){const w=d.toLowerCase();d!=w&&(Os(this,d),Ps(this,w,a))},t)),t.j=r}function ra(t,r){const a=new wt;if(c.Image){const d=new Image;d.onload=E(we,a,"TestLoadImage: loaded",!0,r,d),d.onerror=E(we,a,"TestLoadImage: error",!1,r,d),d.onabort=E(we,a,"TestLoadImage: abort",!1,r,d),d.ontimeout=E(we,a,"TestLoadImage: timeout",!1,r,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=t}else r(!1)}function oa(t,r){const a=new wt,d=new AbortController,w=setTimeout(()=>{d.abort(),we(a,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:d.signal}).then(S=>{clearTimeout(w),S.ok?we(a,"TestPingServer: ok",!0,r):we(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(w),we(a,"TestPingServer: error",!1,r)})}function we(t,r,a,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(a)}catch{}}function aa(){this.g=new Fo}function ln(t){this.i=t.Sb||null,this.h=t.ab||!1}b(ln,us),ln.prototype.g=function(){return new oi(this.i,this.h)};function oi(t,r){ee.call(this),this.H=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(oi,ee),i=oi.prototype,i.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=r,this.readyState=1,Pt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(r.body=t),(this.H||c).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Lt(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ms(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ms(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?Lt(this):Pt(this),this.readyState==3&&Ms(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,Lt(this))},i.Na=function(t){this.g&&(this.response=t,Lt(this))},i.ga=function(){this.g&&Lt(this)};function Lt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Pt(t)}i.setRequestHeader=function(t,r){this.A.append(t,r)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=r.next();return t.join(`\r
`)};function Pt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ns(t){let r="";return et(t,function(a,d){r+=d,r+=":",r+=a,r+=`\r
`}),r}function cn(t,r,a){e:{for(d in a){var d=!1;break e}d=!0}d||(a=Ns(a),typeof t=="string"?a!=null&&Et(a):H(t,r,a))}function G(t){ee.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(G,ee);var la=/^https?$/i,ca=["POST","PUT"];i=G.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,r,a,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gs.g(),this.g.onreadystatechange=I(g(this.Ca,this));try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(S){Rs(this,S);return}if(t=a||"",a=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)a.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const S of d.keys())a.set(S,d.get(S));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(a.keys()).find(S=>S.toLowerCase()=="content-type"),w=c.FormData&&t instanceof c.FormData,!(Array.prototype.indexOf.call(ca,r,void 0)>=0)||d||w||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of a)this.g.setRequestHeader(S,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(S){Rs(this,S)}};function Rs(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.o=5,$s(t),ai(t)}function $s(t){t.A||(t.A=!0,ie(t,"complete"),ie(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,ie(this,"complete"),ie(this,"abort"),ai(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),G.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Bs(this):this.Xa())},i.Xa=function(){Bs(this)};function Bs(t){if(t.h&&typeof l<"u"){if(t.v&&Ee(t)==4)setTimeout(t.Ca.bind(t),0);else if(ie(t,"readystatechange"),Ee(t)==4){t.h=!1;try{const S=t.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var a;if(!(a=r)){var d;if(d=S===0){let O=String(t.D).match(As)[1]||null;!O&&c.self&&c.self.location&&(O=c.self.location.protocol.slice(0,-1)),d=!la.test(O?O.toLowerCase():"")}a=d}if(a)ie(t,"complete"),ie(t,"success");else{t.o=6;try{var w=Ee(t)>2?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.ca()+"]",$s(t)}}finally{ai(t)}}}}function ai(t,r){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const a=t.g;t.g=null,r||ie(t,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Ee(t){return t.g?t.g.readyState:0}i.ca=function(){try{return Ee(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),Uo(r)}};function Ws(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function da(t){const r={};t=(t.g&&Ee(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<t.length;d++){if(f(t[d]))continue;var a=Ko(t[d]);const w=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const S=r[w]||[];r[w]=S,S.push(a)}Ne(r,function(d){return d.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ct(t,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||r}function Us(t){this.za=0,this.i=[],this.j=new wt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ct("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ct("baseRetryDelayMs",5e3,t),this.Za=Ct("retryDelaySeedMs",1e4,t),this.Ta=Ct("forwardChannelMaxRetries",2,t),this.va=Ct("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new bs(t&&t.concurrentRequestLimit),this.Ba=new aa,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Us.prototype,i.ka=8,i.I=1,i.connect=function(t,r,a,d){ne(0),this.W=t,this.H=r||{},a&&d!==void 0&&(this.H.OSID=a,this.H.OAID=d),this.F=this.X,this.J=Js(this,null,this.W),ci(this)};function dn(t){if(Fs(t),t.I==3){var r=t.V++,a=he(t.J);if(H(a,"SID",t.M),H(a,"RID",r),H(a,"TYPE","terminate"),Mt(t,a),r=new Te(t,t.j,r),r.M=2,r.A=ri(he(a)),a=!1,c.navigator&&c.navigator.sendBeacon)try{a=c.navigator.sendBeacon(r.A.toString(),"")}catch{}!a&&c.Image&&(new Image().src=r.A,a=!0),a||(r.g=Xs(r.j,null),r.g.ea(r.A)),r.F=Date.now(),si(r)}Ks(t)}function li(t){t.g&&(hn(t),t.g.cancel(),t.g=null)}function Fs(t){li(t),t.v&&(c.clearTimeout(t.v),t.v=null),di(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&c.clearTimeout(t.m),t.m=null)}function ci(t){if(!ws(t.h)&&!t.m){t.m=!0;var r=t.Ea;R||h(),W||(R(),W=!0),_.add(r,t),t.D=0}}function ua(t,r){return Es(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=r.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=bt(g(t.Ea,t,r),Gs(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const w=new Te(this,this.j,t);let S=this.o;if(this.U&&(S?(S=Re(S),yt(S,this.U)):S=this.U),this.u!==null||this.R||(w.J=S,S=null),this.S)e:{for(var r=0,a=0;a<this.i.length;a++){t:{var d=this.i[a];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(r+=d,r>4096){r=a;break e}if(r===4096||a===this.i.length-1){r=a+1;break e}}r=1e3}else r=1e3;r=js(this,w,r),a=he(this.J),H(a,"RID",t),H(a,"CVER",22),this.G&&H(a,"X-HTTP-Session-Id",this.G),Mt(this,a),S&&(this.R?r="headers="+Et(Ns(S))+"&"+r:this.u&&cn(a,this.u,S)),on(this.h,w),this.Ra&&H(a,"TYPE","init"),this.S?(H(a,"$req",r),H(a,"SID","null"),w.U=!0,tn(w,a,null)):tn(w,a,r),this.I=2}}else this.I==3&&(t?Vs(this,t):this.i.length==0||ws(this.h)||Vs(this))};function Vs(t,r){var a;r?a=r.l:a=t.V++;const d=he(t.J);H(d,"SID",t.M),H(d,"RID",a),H(d,"AID",t.K),Mt(t,d),t.u&&t.o&&cn(d,t.u,t.o),a=new Te(t,t.j,a,t.D+1),t.u===null&&(a.J=t.o),r&&(t.i=r.G.concat(t.i)),r=js(t,a,1e3),a.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),on(t.h,a),tn(a,d,r)}function Mt(t,r){t.H&&et(t.H,function(a,d){H(r,d,a)}),t.l&&et({},function(a,d){H(r,d,a)})}function js(t,r,a){a=Math.min(t.i.length,a);const d=t.l?g(t.l.Ka,t.l,t):null;e:{var w=t.i;let $=-1;for(;;){const X=["count="+a];$==-1?a>0?($=w[0].g,X.push("ofs="+$)):$=0:X.push("ofs="+$);let z=!0;for(let Z=0;Z<a;Z++){var S=w[Z].g;const fe=w[Z].map;if(S-=$,S<0)$=Math.max(0,w[Z].g-100),z=!1;else try{S="req"+S+"_"||"";try{var O=fe instanceof Map?fe:Object.entries(fe);for(const[Ue,Se]of O){let ke=Se;u(Se)&&(ke=Ki(Se)),X.push(S+Ue+"="+encodeURIComponent(ke))}}catch(Ue){throw X.push(S+"type="+encodeURIComponent("_badmap")),Ue}}catch{d&&d(fe)}}if(z){O=X.join("&");break e}}O=void 0}return t=t.i.splice(0,a),r.G=t,O}function qs(t){if(!t.g&&!t.v){t.Y=1;var r=t.Da;R||h(),W||(R(),W=!0),_.add(r,t),t.A=0}}function un(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=bt(g(t.Da,t),Gs(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,zs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=bt(g(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ne(10),li(this),zs(this))};function hn(t){t.B!=null&&(c.clearTimeout(t.B),t.B=null)}function zs(t){t.g=new Te(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var r=he(t.na);H(r,"RID","rpc"),H(r,"SID",t.M),H(r,"AID",t.K),H(r,"CI",t.F?"0":"1"),!t.F&&t.ia&&H(r,"TO",t.ia),H(r,"TYPE","xmlhttp"),Mt(t,r),t.u&&t.o&&cn(r,t.u,t.o),t.O&&(t.g.H=t.O);var a=t.g;t=t.ba,a.M=1,a.A=ri(he(r)),a.u=null,a.R=!0,_s(a,t)}i.Va=function(){this.C!=null&&(this.C=null,li(this),un(this),ne(19))};function di(t){t.C!=null&&(c.clearTimeout(t.C),t.C=null)}function Hs(t,r){var a=null;if(t.g==r){di(t),hn(t),t.g=null;var d=2}else if(rn(t.h,r))a=r.G,Ss(t.h,r),d=1;else return;if(t.I!=0){if(r.o)if(d==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var w=t.D;d=Yi(),ie(d,new ps(d,a)),ci(t)}else qs(t);else if(w=r.m,w==3||w==0&&r.X>0||!(d==1&&ua(t,r)||d==2&&un(t)))switch(a&&a.length>0&&(r=t.h,r.i=r.i.concat(a)),w){case 1:We(t,5);break;case 4:We(t,10);break;case 3:We(t,6);break;default:We(t,2)}}}function Gs(t,r){let a=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(a*=2),a*r}function We(t,r){if(t.j.info("Error code "+r),r==2){var a=g(t.bb,t),d=t.Ua;const w=!d;d=new be(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||kt(d,"https"),ri(d),w?ra(d.toString(),a):oa(d.toString(),a)}else ne(2);t.I=0,t.l&&t.l.pa(r),Ks(t),Fs(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),ne(2)):(this.j.info("Failed to ping google.com"),ne(1))};function Ks(t){if(t.I=0,t.ja=[],t.l){const r=ks(t.h);(r.length!=0||t.i.length!=0)&&(x(t.ja,r),x(t.ja,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.oa()}}function Js(t,r,a){var d=a instanceof be?he(a):new be(a);if(d.g!="")r&&(d.g=r+"."+d.g),At(d,d.u);else{var w=c.location;d=w.protocol,r=r?r+"."+w.hostname:w.hostname,w=+w.port;const S=new be(null);d&&kt(S,d),r&&(S.g=r),w&&At(S,w),a&&(S.h=a),d=S}return a=t.G,r=t.wa,a&&r&&H(d,a,r),H(d,"VER",t.ka),Mt(t,d),d}function Xs(t,r,a){if(r&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Aa&&!t.ma?new G(new ln({ab:a})):new G(t.ma),r.Fa(t.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ys(){}i=Ys.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function le(t,r){ee.call(this),this.g=new Us(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(t?t["X-WebChannel-Client-Profile"]=r.sa:t={"X-WebChannel-Client-Profile":r.sa}),this.g.U=t,(t=r&&r.Qb)&&!f(t)&&(this.g.u=t),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!f(r)&&(this.g.G=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new rt(this)}b(le,ee),le.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},le.prototype.close=function(){dn(this.g)},le.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.v&&(a={},a.__data__=Ki(t),t=a);r.i.push(new Yo(r.Ya++,t)),r.I==3&&ci(r)},le.prototype.N=function(){this.g.l=null,delete this.j,dn(this.g),delete this.g,le.Z.N.call(this)};function Qs(t){Ji.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const a in r){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}b(Qs,Ji);function Zs(){Xi.call(this),this.status=1}b(Zs,Xi);function rt(t){this.g=t}b(rt,Ys),rt.prototype.ra=function(){ie(this.g,"a")},rt.prototype.qa=function(t){ie(this.g,new Qs(t))},rt.prototype.pa=function(t){ie(this.g,new Zs)},rt.prototype.oa=function(){ie(this.g,"b")},le.prototype.send=le.prototype.o,le.prototype.open=le.prototype.m,le.prototype.close=le.prototype.close,Qi.NO_ERROR=0,Qi.TIMEOUT=8,Qi.HTTP_ERROR=6,Go.COMPLETE="complete",Vo.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",ee.prototype.listen=ee.prototype.J,G.prototype.listenOnce=G.prototype.K,G.prototype.getLastError=G.prototype.Ha,G.prototype.getLastErrorCode=G.prototype.ya,G.prototype.getStatus=G.prototype.ca,G.prototype.getResponseJson=G.prototype.La,G.prototype.getResponseText=G.prototype.la,G.prototype.send=G.prototype.ea,G.prototype.setWithCredentials=G.prototype.Fa}).apply(typeof hi<"u"?hi:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
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
 */let Mi="12.12.0";function Ul(i){Mi=i}/**
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
 */const Ti=new Un("@firebase/firestore");function de(i,...e){if(Ti.logLevel<=q.DEBUG){const n=e.map(to);Ti.debug(`Firestore (${Mi}): ${i}`,...n)}}function eo(i,...e){if(Ti.logLevel<=q.ERROR){const n=e.map(to);Ti.error(`Firestore (${Mi}): ${i}`,...n)}}function to(i){if(typeof i=="string")return i;try{return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function bi(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,io(i,s,n)}function io(i,e,n){let s=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw eo(s),new Error(s)}function Rt(i,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,i||io(e,o,s)}/**
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
 */const F={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class V extends Ce{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Fl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(se.UNAUTHENTICATED))}shutdown(){}}class jl{constructor(e){this.t=e,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Rt(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let l=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new $t,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},u=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>u(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?u(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new $t)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Rt(typeof s.accessToken=="string",31837,{l:s}),new Fl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Rt(e===null||typeof e=="string",2055,{h:e}),new se(e)}}class ql{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=se.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class zl{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new ql(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ur{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hl{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Rt(this.o===void 0,3512);const s=l=>{l.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ur(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Rt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ur(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Gl(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Kl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Gl(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<n&&(s+=e.charAt(o[l]%62))}return s}}function Le(i,e){return i<e?-1:i>e?1:0}function Jl(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const o=i.charAt(s),l=e.charAt(s);if(o!==l)return _n(o)===_n(l)?Le(o,l):_n(o)?1:-1}return Le(i.length,e.length)}const Xl=55296,Yl=57343;function _n(i){const e=i.charCodeAt(0);return e>=Xl&&e<=Yl}/**
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
 */const hr="__name__";class me{constructor(e,n,s){n===void 0?n=0:n>e.length&&bi(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&bi(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return me.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof me?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const l=me.compareSegments(e.get(o),n.get(o));if(l!==0)return l}return Le(e.length,n.length)}static compareSegments(e,n){const s=me.isNumericId(e),o=me.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?me.extractNumericId(e).compare(me.extractNumericId(n)):Jl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jn.fromString(e.substring(4,e.length-2))}}class ce extends me{construct(e,n,s){return new ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(F.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const Ql=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends me{construct(e,n,s){return new Ve(e,n,s)}static isValidIdentifier(e){return Ql.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hr}static keyField(){return new Ve([hr])}static fromServerFormat(e){const n=[];let s="",o=0;const l=()=>{if(s.length===0)throw new V(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let c=!1;for(;o<e.length;){const u=e[o];if(u==="\\"){if(o+1===e.length)throw new V(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new V(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else u==="`"?(c=!c,o++):u!=="."||c?(s+=u,o++):(l(),o++)}if(l(),c)throw new V(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class je{constructor(e){this.path=e}static fromPath(e){return new je(ce.fromString(e))}static fromName(e){return new je(ce.fromString(e).popFirst(5))}static empty(){return new je(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new je(new ce(e.slice()))}}function Zl(i,e,n,s){if(e===!0&&s===!0)throw new V(F.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function ec(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}/**
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
 */function J(i,e){const n={typeString:i};return e&&(n.value=e),n}function ei(i,e){if(!ec(i))throw new V(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const c=i[s];if(o&&typeof c!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${s}' field to equal '${l.value}'`;break}}if(n)throw new V(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const fr=-62135596800,mr=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*mr);return new pe(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fr)throw new V(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mr}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ei(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:J("string",pe._jsonSchemaVersion),seconds:J("number"),nanoseconds:J("number")};function tc(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ic extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ic("Invalid base64 string: "+l):l}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const pr="(default)";class wi{constructor(e,n){this.projectId=e,this.database=n||pr}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database===pr}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}function nc(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new V(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(i.options.projectId,e)}/**
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
 */class sc{constructor(e,n=null,s=[],o=[],l=null,c="F",u=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=c,this.startAt=u,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function rc(i){return new sc(i)}/**
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
 */var gr,B;(B=gr||(gr={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new jn([4294967295,4294967295],0);/**
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
 */const oc=41943040;/**
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
 */const ac=1048576;function In(){return typeof document<"u"?document:null}class lc{constructor(e,n,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class qn{constructor(e,n,s,o,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,l){const c=Date.now()+s,u=new qn(e,n,c,o,l);return u.start(s),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var vr,yr;(yr=vr||(vr={})).Ma="default",yr.Cache="cache";/**
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
 */function cc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const dc="ComponentProvider",_r=new Map;/**
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
 */const uc="firestore.googleapis.com",Ir=!0;class Tr{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uc,this.ssl=Ir}else this.host=e.host,this.ssl=e.ssl??Ir;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=oc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ac)throw new V(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cc(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Vl;switch(s.type){case"firstParty":return new zl(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=_r.get(n);s&&(de(dc,"Removing Datastore"),_r.delete(n),s.terminate())}(this),Promise.resolve()}}/**
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
 */class zn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zn(this.firestore,e,this._query)}}class ge{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(ei(n,ge._jsonSchema))return new ge(e,s||null,new je(ce.fromString(n.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:J("string",ge._jsonSchemaVersion),referencePath:J("string")};class Hn extends zn{constructor(e,n,s){super(e,n,rc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new je(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}/**
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
 */const br="AsyncQueue";class wr{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lc(this,"async_queue_retry"),this._c=()=>{const s=In();s&&de(br,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=In();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=In();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new $t;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!tc(e))throw e;de(br,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,eo("INTERNAL UNHANDLED ERROR: ",Er(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=qn.createAndSchedule(this,e,n,s,l=>this.hc(l));return this.tc.push(o),o}uc(){this.nc&&bi(47125,{Pc:Er(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Er(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class fc extends hc{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new wr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wr(e),this._firestoreClient=void 0,await e}}}/**
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
 */class _e{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _e(Xe.fromBase64String(e))}catch(n){throw new V(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _e(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ei(e,_e._jsonSchema))return _e.fromBase64String(e.bytes)}}_e._jsonSchemaVersion="firestore/bytes/1.0",_e._jsonSchema={type:J("string",_e._jsonSchemaVersion),bytes:J("string")};/**
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
 */class no{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class He{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:He._jsonSchemaVersion}}static fromJSON(e){if(ei(e,He._jsonSchema))return new He(e.latitude,e.longitude)}}He._jsonSchemaVersion="firestore/geoPoint/1.0",He._jsonSchema={type:J("string",He._jsonSchemaVersion),latitude:J("number"),longitude:J("number")};/**
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
 */class Ge{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ge._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ei(e,Ge._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ge(e.vectorValues);throw new V(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ge._jsonSchemaVersion="firestore/vectorValue/1.0",Ge._jsonSchema={type:J("string",Ge._jsonSchemaVersion),vectorValues:J("object")};function so(i,e,n){if((e=Zt(e))instanceof no)return e._internalPath;if(typeof e=="string")return pc(i,e);throw Dn("Field path arguments must be of type string or ",i)}const mc=new RegExp("[~\\*/\\[\\]]");function pc(i,e,n){if(e.search(mc)>=0)throw Dn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new no(...e.split("."))._internalPath}catch{throw Dn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Dn(i,e,n,s,o){let l=`Function ${e}() called with invalid data`;l+=". ";let c="";return new V(F.INVALID_ARGUMENT,l+i+c)}const Sr="@firebase/firestore",kr="4.14.0";/**
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
 */class ro{constructor(e,n,s,o,l){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(so("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gc extends ro{data(){return super.data()}}class fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lt extends ro{constructor(e,n,s,o,l,c){super(e,n,s,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(so("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=lt._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}lt._jsonSchemaVersion="firestore/documentSnapshot/1.0",lt._jsonSchema={type:J("string",lt._jsonSchemaVersion),bundleSource:J("string","DocumentSnapshot"),bundleName:J("string"),bundle:J("string")};class vi extends lt{data(e={}){return super.data(e)}}class Bt{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new fi(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vi(this._firestore,this._userDataWriter,s.key,s,new fi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(u=>{const p=new vi(o._firestore,o._userDataWriter,u.doc.key,u.doc,new fi(o._snapshot.mutatedKeys.has(u.doc.key),o._snapshot.fromCache),o.query.converter);return u.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(u=>l||u.type!==3).map(u=>{const p=new vi(o._firestore,o._userDataWriter,u.doc.key,u.doc,new fi(o._snapshot.mutatedKeys.has(u.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return u.type!==0&&(g=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),E=c.indexOf(u.doc.key)),{type:vc(u.type),doc:p,oldIndex:g,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vc(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bi(61501,{type:i})}}/**
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
 */Bt._jsonSchemaVersion="firestore/querySnapshot/1.0",Bt._jsonSchema={type:J("string",Bt._jsonSchemaVersion),bundleSource:J("string","QuerySnapshot"),bundleName:J("string"),bundle:J("string")};(function(e,n=!0){Ul(Ci),ht(new ut("firestore",(s,{instanceIdentifier:o,options:l})=>{const c=s.getProvider("app").getImmediate(),u=new fc(new jl(s.getProvider("auth-internal")),new Hl(c,s.getProvider("app-check-internal")),nc(c,o),c);return l={useFetchStreams:n,...l},u._setSettings(l),u},"PUBLIC").setMultipleInstances(!0)),De(Sr,kr,e),De(Sr,kr,"esm2020")})();function oo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yc=oo,ao=new Qt("auth","Firebase",oo());/**
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
 */const Ei=new Un("@firebase/auth");function _c(i,...e){Ei.logLevel<=q.WARN&&Ei.warn(`Auth (${Ci}): ${i}`,...e)}function yi(i,...e){Ei.logLevel<=q.ERROR&&Ei.error(`Auth (${Ci}): ${i}`,...e)}/**
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
 */function Ar(i,...e){throw Gn(i,...e)}function lo(i,...e){return Gn(i,...e)}function co(i,e,n){const s={...yc(),[e]:n};return new Qt("auth","Firebase",s).create(e,{appName:i.name})}function _i(i){return co(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gn(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return ao.create(i,...e)}function U(i,e,...n){if(!i)throw Gn(e,...n)}function Wt(i){const e="INTERNAL ASSERTION FAILED: "+i;throw yi(e),new Error(e)}function Si(i,e){i||Wt(e)}function Ic(){return xr()==="http:"||xr()==="https:"}function xr(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function Tc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ic()||Ea()||"connection"in navigator)?navigator.onLine:!0}function bc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,Si(n>e,"Short delay should be less than long delay!"),this.isMobile=ba()||Sa()}get(){return Tc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wc(i,e){Si(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uo{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ec={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Sc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kc=new ti(3e4,6e4);function ho(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ni(i,e,n,s,o={}){return fo(i,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const u=Kr({key:i.config.apiKey,...c}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g={method:e,headers:p,...l};return wa()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Jr(i.emulatorConfig.host)&&(g.credentials="include"),uo.fetch()(await mo(i,i.config.apiHost,n,u),g)})}async function fo(i,e,n){i._canInitEmulator=!1;const s={...Ec,...e};try{const o=new Ac(i),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw mi(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const u=l.ok?c.errorMessage:c.error.message,[p,g]=u.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw mi(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw mi(i,"user-disabled",c);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw co(i,E,g);Ar(i,E)}}catch(o){if(o instanceof Ce)throw o;Ar(i,"network-request-failed",{message:String(o)})}}async function mo(i,e,n,s){const o=`${e}${n}?${s}`,l=i,c=l.config.emulator?wc(i.config,o):`${i.config.apiScheme}://${o}`;return Sc.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class Ac{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(lo(this.auth,"network-request-failed")),kc.get())})}}function mi(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=lo(i,e,s);return o.customData._tokenResponse=n,o}/**
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
 */async function xc(i,e){return Ni(i,"POST","/v1/accounts:delete",e)}async function ki(i,e){return Ni(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ut(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Oc(i,e=!1){const n=Zt(i),s=await n.getIdToken(e),o=po(s);U(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ut(Tn(o.auth_time)),issuedAtTime:Ut(Tn(o.iat)),expirationTime:Ut(Tn(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Tn(i){return Number(i)*1e3}function po(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return yi("JWT malformed, contained fewer than 3 sections"),null;try{const o=Gr(n);return o?JSON.parse(o):(yi("Failed to decode base64 JWT payload"),null)}catch(o){return yi("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Or(i){const e=po(i);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ln(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ce&&Dc(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Dc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Lc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ut(this.lastLoginAt),this.creationTime=Ut(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ai(i){var b;const e=i.auth,n=await i.getIdToken(),s=await Ln(i,ki(e,{idToken:n}));U(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const l=(b=o.providerUserInfo)!=null&&b.length?go(o.providerUserInfo):[],c=Cc(i.providerData,l),u=i.isAnonymous,p=!(i.email&&o.passwordHash)&&!(c!=null&&c.length),g=u?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Pn(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(i,E)}async function Pc(i){const e=Zt(i);await Ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cc(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function go(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Mc(i,e){const n=await fo(i,{},async()=>{const s=Kr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=i.config,c=await mo(i,o,"/v1/token",`key=${l}`),u=await i._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:u,body:s};return i.emulatorConfig&&Jr(i.emulatorConfig.host)&&(p.credentials="include"),uo.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Nc(i,e){return Ni(i,"POST","/v2/accounts:revokeToken",ho(i,e))}/**
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
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Or(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Or(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:l}=await Mc(e,n);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:l}=n,c=new ct;return s&&(U(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(U(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(U(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function Ae(i,e){U(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ve{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new Lc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Oc(this,e)}reload(){return Pc(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ai(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(_i(this.auth));const e=await this.getIdToken();return await Ln(this,xc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,u=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:b,emailVerified:I,isAnonymous:k,providerData:x,stsTokenManager:A}=n;U(b&&A,e,"internal-error");const D=ct.fromJSON(this.name,A);U(typeof b=="string",e,"internal-error"),Ae(s,e.name),Ae(o,e.name),U(typeof I=="boolean",e,"internal-error"),U(typeof k=="boolean",e,"internal-error"),Ae(l,e.name),Ae(c,e.name),Ae(u,e.name),Ae(p,e.name),Ae(g,e.name),Ae(E,e.name);const P=new ve({uid:b,auth:e,email:o,emailVerified:I,displayName:s,isAnonymous:k,photoURL:c,phoneNumber:l,tenantId:u,stsTokenManager:D,createdAt:g,lastLoginAt:E});return x&&Array.isArray(x)&&(P.providerData=x.map(L=>({...L}))),p&&(P._redirectEventId=p),P}static async _fromIdTokenResponse(e,n,s=!1){const o=new ct;o.updateFromServerResponse(n);const l=new ve({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ai(l),l}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];U(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?go(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),u=new ct;u.updateFromIdToken(s);const p=new ve({uid:o.localId,auth:e,stsTokenManager:u,isAnonymous:c}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Pn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const Dr=new Map;function qe(i){Si(i instanceof Function,"Expected a class definition");let e=Dr.get(i);return e?(Si(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Dr.set(i,e),e)}/**
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
 */class vo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vo.type="NONE";const Lr=vo;/**
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
 */function bn(i,e,n){return`firebase:${i}:${e}:${n}`}class dt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=bn(this.userKey,o.apiKey,l),this.fullPersistenceKey=bn("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ki(this.auth,{idToken:e}).catch(()=>{});return n?ve._fromGetAccountInfoResponse(this.auth,n,e):null}return ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new dt(qe(Lr),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=o[0]||qe(Lr);const c=bn(s,e.config.apiKey,e.name);let u=null;for(const g of n)try{const E=await g._get(c);if(E){let b;if(typeof E=="string"){const I=await ki(e,{idToken:E}).catch(()=>{});if(!I)break;b=await ve._fromGetAccountInfoResponse(e,I,E)}else b=ve._fromJSON(e,E);g!==l&&(u=b),l=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new dt(l,e,s):(l=p[0],u&&await l._set(c,u.toJSON()),await Promise.all(n.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new dt(l,e,s))}}/**
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
 */function Pr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fc(e))return"Blackberry";if(Vc(e))return"Webos";if($c(e))return"Safari";if((e.includes("chrome/")||Bc(e))&&!e.includes("edge/"))return"Chrome";if(Uc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rc(i=ye()){return/firefox\//i.test(i)}function $c(i=ye()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bc(i=ye()){return/crios\//i.test(i)}function Wc(i=ye()){return/iemobile/i.test(i)}function Uc(i=ye()){return/android/i.test(i)}function Fc(i=ye()){return/blackberry/i.test(i)}function Vc(i=ye()){return/webos/i.test(i)}/**
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
 */function yo(i,e=[]){let n;switch(i){case"Browser":n=Pr(ye());break;case"Worker":n=`${Pr(ye())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${s}`}/**
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
 */class jc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=l=>new Promise((c,u)=>{try{const p=e(l);c(p)}catch(p){u(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function qc(i,e={}){return Ni(i,"GET","/v2/passwordPolicy",ho(i,e))}/**
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
 */const zc=6;class Hc{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??zc,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Gc{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cr(this),this.idTokenSubscription=new Cr(this),this.beforeStateQueue=new jc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ao,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qe(n)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ki(this,{idToken:e}),s=await ve._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Fe(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,u=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===u)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ai(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(_i(this));const n=e?Zt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(_i(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(_i(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qc(this),n=new Hc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Nc(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qe(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[qe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(u,this,"internal-error"),u.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&_c(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Kc(i){return Zt(i)}class Cr{constructor(e){this.auth=e,this.observer=null,this.addObserver=La(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Jc(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(qe);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new ti(3e4,6e4);/**
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
 */new ti(2e3,1e4);/**
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
 */new ti(3e4,6e4);/**
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
 */new ti(5e3,15e3);var Mr="@firebase/auth",Nr="1.13.0";/**
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
 */class Xc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Yc(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qc(i){ht(new ut("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=s.options;U(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:u,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yo(i)},g=new Gc(s,o,l,p);return Jc(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ht(new ut("auth-internal",e=>{const n=Kc(e.getProvider("auth").getImmediate());return(s=>new Xc(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(Mr,Nr,Yc(i)),De(Mr,Nr,"esm2020")}/**
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
 */const Zc=5*60;Ta("authIdTokenMaxAge");Qc("Browser");console.warn("⚠️ Firebase未設定。.envファイルにAPIキーを設定してください。");function qt(i){const e=new Date(i),n=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${s}-${o}`}function ft(i){const e=new Date(i),n=["日","月","火","水","木","金","土"];return`${e.getMonth()+1}月${e.getDate()}日（${n[e.getDay()]}）`}function Ye(){return qt(new Date)}function zt(i){const e=Math.floor(i/60),n=i%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function K(i){if(!i)return 0;const[e,n]=i.split(":").map(Number);return e*60+n}function _o(){return Date.now().toString(36)+Math.random().toString(36).slice(2,9)}function Io(i,e,n,s){const l=pi(n-i),c=pi(s-e),u=Math.sin(l/2)**2+Math.cos(pi(i))*Math.cos(pi(n))*Math.sin(c/2)**2;return 6371*2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))}function pi(i){return i*(Math.PI/180)}function Q(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}function M(i,e="info",n=3e3){const s=document.getElementById("toast-container"),o={success:"check_circle",error:"error",warning:"warning",info:"info"},l=document.createElement("div");l.className=`toast ${e}`,l.innerHTML=`
    <span class="material-icons-round toast-icon">${o[e]||"info"}</span>
    <span>${Q(i)}</span>
  `,s.appendChild(l),setTimeout(()=>{l.style.opacity="0",l.style.transform="translateX(40px)",l.style.transition="all .3s ease",setTimeout(()=>l.remove(),300)},n)}function pt(i,e,n=""){const s=document.getElementById("modal-overlay");document.getElementById("modal-title").textContent=i,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=n,s.style.display="flex"}function re(){document.getElementById("modal-overlay").style.display="none"}function gt(i,e){return new Promise(n=>{const s=`<p>${Q(e)}</p>`;pt(i,s,`
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `),document.getElementById("confirm-ok").onclick=()=>{re(),n(!0)},document.getElementById("confirm-cancel").onclick=()=>{re(),n(!1)}})}function To(i,e){if(!i)return 0;let n=1500;return i.type==="正社員"?i.name.includes("前川")?n=2500:n=1500:i.type==="パート"&&(n=parseInt(i.wage)||1500),Math.round(n*(e/60))}function Cn(i,e){const s={身体介護:{20:1670,30:2500,60:3960,90:5790,120:7630},生活援助:{20:1830,45:2250,60:2870},通院等乗降介助:{per_trip:990},医療的ケア:{30:3e3,60:5e3}}[i];if(!s)return 3e3;if(s.per_trip)return s.per_trip;const o=Object.keys(s).map(Number).sort((c,u)=>c-u);let l=o[0];for(const c of o)e>=c&&(l=c);return s[l]||3e3}function ed(i){{console.warn("Firebase未設定のためログイン画面を表示します"),setTimeout(()=>i(null,null),100);return}}async function td(){throw new Error("Firebase未設定です。.envにAPIキーを設定してください。")}async function id(){}function nd(){const i=document.getElementById("btn-google-login");i&&i.addEventListener("click",async()=>{i.disabled=!0,i.textContent="ログイン中...";try{await td()}catch(e){console.error("ログインエラー:",e),e.code==="auth/popup-closed-by-user"?M("ログインがキャンセルされました","warning"):M("ログインに失敗しました","error"),i.disabled=!1,i.innerHTML=`
        <svg viewBox="0 0 24 24" width="20" height="20" class="google-icon">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleアカウントでログイン
      `}})}const xe={};function vt(i){if(!xe[i]){const e=localStorage.getItem(`careroute_${i}`);xe[i]=e?JSON.parse(e):[]}return xe[i]}function Ri(i){localStorage.setItem(`careroute_${i}`,JSON.stringify(xe[i]||[]))}async function Rr(){localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"),localStorage.removeItem("careroute_routes"),xe.staff=[],xe.clients=[],xe.visits=[],xe.routes=[]}async function Kn(i,e){{const n=_o();return vt(i).push({id:n,...e,createdAt:new Date().toISOString()}),Ri(i),n}}async function Jn(i){return vt(i)}async function Xn(i,e,n){{const s=vt(i),o=s.findIndex(l=>l.id===e);o!==-1&&(s[o]={...s[o],...n,updatedAt:new Date().toISOString()},Ri(i));return}}async function Yn(i,e){{const n=vt(i),s=n.findIndex(o=>o.id===e);s!==-1&&(n.splice(s,1),Ri(i));return}}async function bo(i,e,n,s){return vt(i).filter(l=>l[e]===s)}async function ae(){return Jn("staff")}async function wo(i){return Kn("staff",i)}async function sd(i,e){return Xn("staff",i,e)}async function rd(i){return Yn("staff",i)}async function ue(){return Jn("clients")}async function Eo(i){return Kn("clients",i)}async function od(i,e){return Xn("clients",i,e)}async function ad(i){return Yn("clients",i)}async function $i(){return Jn("visits")}async function Me(i){return bo("visits","date","==",i)}async function Bi(i){return Kn("visits",i)}async function mt(i,e){return Xn("visits",i,e)}async function Qn(i){return Yn("visits",i)}async function Zn(i){return bo("routes","date","==",i)}async function So(i){{const e=vt("routes");for(const n of i){const s=e.findIndex(o=>o.staffId===n.staffId&&o.date===n.date);s>=0?e[s]={...n,updatedAt:new Date().toISOString()}:e.push({id:_o(),...n,createdAt:new Date().toISOString()})}Ri("routes");return}}async function ld(){const i=document.getElementById("page-container"),[e,n]=await Promise.all([ae().catch(()=>[]),ue().catch(()=>[])]),s=Ye(),o=await Me(s).catch(()=>[]),l=e.filter(b=>b.isActive);n.filter(b=>b.isActive);const c=o.filter(b=>b.type!=="sales");c.filter(b=>b.status==="scheduled"||!b.status);const u=c.filter(b=>b.status==="completed"),p=c.filter(b=>b.status==="cancelled"),g=o.filter(b=>b.type==="sales"),E={};p.forEach(b=>{const I=b.cancelReason||"理由なし";E[I]=(E[I]||0)+1}),i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${ft(new Date)}</span>
    </div>

    <!-- サマリーカード -->
    <div class="grid grid-4" style="margin-bottom:24px">
      <div class="card stat-card info">
        <span class="material-icons-round stat-icon">badge</span>
        <div class="stat-label">稼働職員</div>
        <div class="stat-value">${l.length}<span style="font-size:.9rem;color:var(--text-muted)">名</span></div>
      </div>
      <div class="card stat-card">
        <span class="material-icons-round stat-icon">event</span>
        <div class="stat-label">本日の訪問 (完了/全体)</div>
        <div class="stat-value">${u.length}<span style="font-size:.9rem;color:var(--text-muted)"> / ${c.length}件</span></div>
      </div>
      <div class="card stat-card danger">
        <span class="material-icons-round stat-icon">cancel</span>
        <div class="stat-label">本日のキャンセル</div>
        <div class="stat-value">${p.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <span class="material-icons-round stat-icon">storefront</span>
        <div class="stat-label">スキマ営業（自律行動）</div>
        <div class="stat-value">${g.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
    </div>

    <!-- 下部セクション -->
    <div class="grid grid-2">
      <!-- 職員の稼働状況 -->
      <div class="card" style="grid-column: 1 / -1;">
        <div class="card-header">
          <h3 class="card-title">
            <span class="material-icons-round" style="color:var(--primary)">people</span>
            本日のスタッフ稼働状況
          </h3>
        </div>
        <div>
          ${l.length===0?'<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>':l.map(b=>{const I=c.filter(D=>D.staffId===b.id),k=I.filter(D=>D.status==="completed").length,x=I.filter(D=>D.status==="cancelled").length,A=g.filter(D=>D.staffId===b.id).length;return`
                  <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)">
                    <div style="width:12px;height:12px;border-radius:50%;background:${b.color||"#999"};flex-shrink:0"></div>
                    <div style="flex:1">
                      <div style="font-weight:600">${b.name}</div>
                      <div style="font-size:.8rem;color:var(--text-muted)">訪問: ${I.length}件</div>
                    </div>
                    <div style="display:flex; gap:16px;">
                      <div style="text-align:center;">
                        <div style="font-size:0.7rem; color:var(--text-muted);">完了</div>
                        <div style="font-weight:bold; color:var(--success);">${k}</div>
                      </div>
                      <div style="text-align:center;">
                        <div style="font-size:0.7rem; color:var(--text-muted);">キャンセル</div>
                        <div style="font-weight:bold; color:${x>0?"var(--danger)":"var(--text-muted)"};">${x}</div>
                      </div>
                      <div style="text-align:center;">
                        <div style="font-size:0.7rem; color:var(--text-muted);">営業</div>
                        <div style="font-weight:bold; color:${A>0?"var(--warning)":"var(--text-muted)"};">${A}</div>
                      </div>
                    </div>
                  </div>
                `}).join("")}
        </div>
      </div>
      
      <!-- キャンセル分析 -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <span class="material-icons-round" style="color:var(--danger)">analytics</span>
            本日のキャンセル分析
          </h3>
        </div>
        <div style="padding-top:8px;">
          ${p.length===0?'<p style="color:var(--text-muted); text-align:center; padding:20px;">本日のキャンセルはありません</p>':Object.entries(E).map(([b,I])=>{const k=Math.round(I/p.length*100);return`
                  <div style="margin-bottom:12px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                      <span>${b}</span>
                      <span style="font-weight:bold;">${I}件 (${k}%)</span>
                    </div>
                    <div style="width:100%; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
                      <div style="width:${k}%; height:100%; background:var(--danger);"></div>
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
          <button class="btn btn-secondary" onclick="document.querySelector('[data-page=revenue]').click()" style="width:100%;justify-content:center">
            <span class="material-icons-round">analytics</span>
            収支シミュレーションを開く
          </button>
        </div>
      </div>
    </div>
  `}let oe=null,Ht=[],Mn=[],Gt=null,Nn=null,Rn=[];function Pe(){return new Promise((i,e)=>{if(window.google&&window.google.maps){i();return}const n="AIzaSyCXFNBQjeiYpRYFdbs6VhISqlFZhrybM74",s=document.createElement("script");s.src=`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=geometry,places&language=ja`,s.async=!0,s.defer=!0,s.onload=i,s.onerror=()=>e(new Error("Google Maps APIの読み込みに失敗しました")),document.head.appendChild(s)})}function cd(i,e={lat:35.6938,lng:139.7034},n=14){const s=document.getElementById(i);return s?!window.google||!window.google.maps?(s.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `,null):(oe=new google.maps.Map(s,{center:e,zoom:n,mapTypeControl:!0,streetViewControl:!1,fullscreenControl:!0,styles:pd()}),Gt=new google.maps.InfoWindow,Nn=new google.maps.DirectionsService,oe):null}function ko(i,e={}){if(!oe)return null;const n=new google.maps.Marker({map:oe,position:i,title:e.title||"",icon:e.icon||void 0,label:e.label||void 0});return e.infoContent&&n.addListener("click",()=>{Gt.setContent(e.infoContent),Gt.open(oe,n)}),Ht.push(n),n}function $r(i,e,n,s){if(!oe)return null;const o={path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",fillColor:e,fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1.8,anchor:new google.maps.Point(12,22),labelOrigin:new google.maps.Point(12,9)};return ko(i,{icon:o,label:void 0,infoContent:s})}function dd(i,e){return oe?ko(i,{title:e,icon:{path:"M12 2L2 7v10l10 5 10-5V7L12 2z",fillColor:"#F59E0B",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:2,anchor:new google.maps.Point(12,12)},infoContent:`<div style="color:#333;padding:4px"><strong>🏢 ${e}</strong><br>（出発地点）</div>`}):null}function ud(i,e,n){if(!oe)return null;const s=i.map(l=>({lat:l.lat,lng:l.lng})),o=new google.maps.Polyline({path:s,geodesic:!0,strokeColor:e,strokeOpacity:.8,strokeWeight:4,map:oe});return Mn.push(o),o}async function hd(i,e){if(!oe||!Nn||i.length<2)return;const n=i[0],s=i[i.length-1],o=i.slice(1,-1).map(l=>({location:new google.maps.LatLng(l.lat,l.lng),stopover:!0}));try{const l=await new Promise((u,p)=>{Nn.route({origin:new google.maps.LatLng(n.lat,n.lng),destination:new google.maps.LatLng(s.lat,s.lng),waypoints:o,travelMode:google.maps.TravelMode.DRIVING,optimizeWaypoints:!1},(g,E)=>{E==="OK"?u(g):p(new Error(`Directions API: ${E}`))})}),c=new google.maps.DirectionsRenderer({map:oe,directions:l,suppressMarkers:!0,polylineOptions:{strokeColor:e,strokeWeight:4,strokeOpacity:.8}});return Rn.push(c),c}catch(l){return console.warn("Directions API呼び出し失敗。直線ポリラインで代替:",l),ud(i,e)}}async function Kt(i){if(!window.google||!window.google.maps)return null;const e=new google.maps.DistanceMatrixService,n=i.map(s=>new google.maps.LatLng(s.lat,s.lng));try{return(await new Promise((l,c)=>{e.getDistanceMatrix({origins:n,destinations:n,travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC},(u,p)=>{p==="OK"?l(u):c(new Error(`Distance Matrix API: ${p}`))})})).rows.map(l=>l.elements.map(c=>({distance:c.status==="OK"?c.distance.value/1e3:null,duration:c.status==="OK"?Math.ceil(c.duration.value/60):null})))}catch(s){return console.error("Distance Matrix取得失敗:",s),null}}function fd(){Ht.forEach(i=>i.setMap(null)),Ht=[],Mn.forEach(i=>i.setMap(null)),Mn=[],Rn.forEach(i=>i.setMap(null)),Rn=[],Gt&&Gt.close()}function md(){if(!oe||Ht.length===0)return;const i=new google.maps.LatLngBounds;Ht.forEach(e=>i.extend(e.getPosition())),oe.fitBounds(i,50)}async function Ao(i){if(!i||i.trim()==="")return null;if(!window.google||!window.google.maps)return console.warn("ジオコーディング: Google Maps APIが未読み込みです"),null;const e=new google.maps.Geocoder;try{return await new Promise((s,o)=>{e.geocode({address:i,region:"jp"},(l,c)=>{if(c==="OK"&&l[0]){const u=l[0].geometry.location;s({lat:u.lat(),lng:u.lng()})}else o(new Error(`ジオコーディング失敗: ${c}`))})})}catch(n){return console.warn("住所の座標変換に失敗:",n.message),null}}function pd(){return[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}const xi={qualifications:{label:"資格",options:["介護福祉士","実務者研修修了","初任者研修修了","看護師","ヘルパー2級"]},services:{label:"対応可能サービス",options:["身体介護","生活援助","通院等乗降介助","医療的ケア"]},physical:{label:"身体的対応力",options:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"]},special:{label:"特別スキル",options:["認知症ケア","ターミナルケア","精神障害対応","障害児支援"]}},gd=["要支援1","要支援2","要介護1","要介護2","要介護3","要介護4","要介護5"],xo=["身体介護","生活援助","通院等乗降介助","医療的ケア"],vd=["男性","女性"],yd=["指定なし","男性希望","女性希望"],_d=["利用者の体調不良","利用者の入院","家族の都合","不在・応答なし","その他"],Id=["居宅介護支援事業所（ケアマネ）","地域包括支援センター","医療機関（退院調整室）","その他"],Td=["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],Br=["#4A90D9","#E74C3C","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#3498DB","#E91E63","#00BCD4","#8BC34A","#FF5722"],Nt={requiredSkill:1e3,genderMatch:2e3,staffType:500,proximity:500},Ii=25,Y={name:"事業所（拠点）",address:"〒501-3304 岐阜県加茂郡富加町高畑２９１",lat:35.497,lng:136.993};let $n="all",Oi=Ye();async function bd(){var n,s,o;const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <input type="date" id="map-date-picker" class="form-input" value="${Oi}" style="width:160px">
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
  `;try{await Pe()}catch(l){console.warn("Maps APIの読み込みスキップ:",l)}const e=cd("map-canvas",{lat:Y.lat,lng:Y.lng});await gi(e),(n=document.getElementById("map-date-picker"))==null||n.addEventListener("change",l=>{Oi=l.target.value,gi(e)}),(s=document.getElementById("staff-filter"))==null||s.addEventListener("change",l=>{$n=l.target.value,gi(e)}),(o=document.getElementById("btn-refresh-map"))==null||o.addEventListener("click",()=>{gi(e)})}async function gi(i){const[e,n,s]=await Promise.all([ae().catch(()=>[]),ue().catch(()=>[]),Me(Oi).catch(()=>[])]),o=document.getElementById("staff-filter");if(o&&o.options.length<=1&&e.forEach(c=>{const u=document.createElement("option");u.value=c.id,u.textContent=c.name,o.appendChild(u)}),!i){Ed(e,n);return}fd(),dd({lat:Y.lat,lng:Y.lng},Y.name);const l=await Zn(Oi).catch(()=>[]);if(l.length>0)for(const c of l){if($n!=="all"&&c.staffId!==$n)continue;const u=e.find(E=>E.id===c.staffId),p=(u==null?void 0:u.color)||"#999",g=[{lat:Y.lat,lng:Y.lng}];for(const E of c.clientIds||[]){const b=n.find(I=>I.id===E);b&&(g.push({lat:b.lat,lng:b.lng}),$r({lat:b.lat,lng:b.lng},p,"",`<div style="color:#333;padding:4px">
              <strong>${b.name}</strong><br>
              ${b.careLevel} | ${(b.requiredServices||[]).join(", ")}<br>
              <small>担当: ${(u==null?void 0:u.name)||"未定"}</small>
            </div>`))}g.push({lat:Y.lat,lng:Y.lng}),await hd(g,p)}else{const c=n.filter(u=>u.isActive&&s.some(p=>p.clientId===u.id));for(const u of c){const p=s.filter(g=>g.clientId===u.id).map(g=>`${g.startTime}〜${g.endTime}`).join(", ");$r({lat:u.lat,lng:u.lng},"#94A3B8","",`<div style="color:#333;padding:4px">
          <strong>${u.name}</strong><br>
          予定: ${p}<br>
          ${u.careLevel} | ${(u.requiredServices||[]).join(", ")}
        </div>`)}}md(),wd(e,l,s)}function wd(i,e,n=[]){const s=document.getElementById("route-legend");if(s){if(e.length===0){s.innerHTML=`
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
    `;return}s.innerHTML=`
    <div class="legend-item">
      <div class="legend-color" style="background:#F59E0B"></div>
      <span>🏢 事業所</span>
    </div>
    ${e.map(o=>{const l=i.find(c=>c.id===o.staffId);return`<div class="legend-item">
        <div class="legend-color" style="background:${(l==null?void 0:l.color)||"#999"}"></div>
        <span>${(l==null?void 0:l.name)||"不明"} (${(o.clientIds||[]).length}件, ${o.totalDistance||"?"}km)</span>
      </div>`}).join("")}
  `}}function Ed(i,e){const n=document.getElementById("route-legend");n&&(n.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${i.length}名<br>
        利用者: ${e.length}名
      </div>
    `)}let Jt=[];async function es(){const i=document.getElementById("page-container");Jt=await ae().catch(()=>[]),i.innerHTML=`
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
      ${Sd(Jt)}
    </div>
  `,document.getElementById("btn-add-staff").addEventListener("click",()=>Oo())}function Sd(i){return i.length===0?`
      <div class="empty-state">
        <span class="material-icons-round">person_off</span>
        <h3>職員が登録されていません</h3>
        <p>「新規登録」ボタンから職員を追加してください</p>
      </div>
    `:`
    <div class="grid grid-2">
      ${i.map(e=>{var n,s,o,l,c;return`
        <div class="card" style="border-left:4px solid ${e.color||"#999"}">
          <div class="card-header">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:40px;height:40px;border-radius:50%;background:${e.color||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem">
                ${Q(((n=e.name)==null?void 0:n.charAt(0))||"?")}
              </div>
              <div>
                <div style="font-weight:600;font-size:1.05rem">${Q(e.name)}</div>
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
              ${(((s=e.skills)==null?void 0:s.qualifications)||[]).map(u=>`<span class="tag">${u}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
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
              ${[...((l=e.skills)==null?void 0:l.physical)||[],...((c=e.skills)==null?void 0:c.special)||[]].map(u=>`<span class="tag tag-accent">${u}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
        </div>
      `}).join("")}
    </div>
  `}function Oo(i=null){const e=!!i,n=e?"職員情報の編集":"新規職員登録",s=`
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${vd.map(l=>`<option value="${l}" ${(i==null?void 0:i.gender)===l?"selected":""}>${l}</option>`).join("")}
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
      ${Object.entries(xi).map(([l,c])=>`
        <div class="form-group">
          <label class="form-label">${c.label}</label>
          <div class="tags-container" style="gap:8px">
            ${c.options.map(u=>{var g,E;const p=(E=(g=i==null?void 0:i.skills)==null?void 0:g[l])!=null&&E.includes(u)?"checked":"";return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${l}" value="${u}" ${p} /> ${u}
              </label>`}).join("")}
          </div>
        </div>
      `).join("")}
    </form>
  `;pt(n,s,`
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("sf-cancel").onclick=re,document.getElementById("sf-save").onclick=async()=>{const l=document.getElementById("sf-name").value.trim();if(!l){M("氏名を入力してください","warning");return}const c=document.getElementById("sf-save");c.disabled=!0,c.textContent="保存中...";const u=document.getElementById("sf-address").value.trim();let p=(i==null?void 0:i.lat)||Y.lat,g=(i==null?void 0:i.lng)||Y.lng;if(u)try{await Pe();const b=await Ao(u);b?(p=b.lat,g=b.lng):M("住所から座標を取得できませんでした","warning")}catch(b){console.warn("ジオコーディング失敗:",b)}const E={name:l,gender:document.getElementById("sf-gender").value,address:u,workStart:document.getElementById("sf-work-start").value,workEnd:document.getElementById("sf-work-end").value,lat:p,lng:g,skills:{},color:(i==null?void 0:i.color)||Br[Jt.length%Br.length],isActive:!0};for(const[b]of Object.entries(xi)){const I=document.querySelectorAll(`input[name="skill-${b}"]:checked`);E.skills[b]=Array.from(I).map(k=>k.value)}try{e?(await sd(i.id,E),M("職員情報を更新しました","success")):(await wo(E),M("職員を登録しました","success")),re(),await es()}catch(b){M("保存に失敗しました: "+b.message,"error")}finally{c.disabled=!1,c.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-staff]");if(e){const s=Jt.find(o=>o.id===e.dataset.editStaff);s&&Oo(s)}const n=i.target.closest("[data-delete-staff]");if(n){const s=Jt.find(o=>o.id===n.dataset.deleteStaff);if(s&&await gt("削除確認",`${s.name} を削除しますか？`))try{await rd(s.id),M(`${s.name} を削除しました`,"success"),await es()}catch{M("削除に失敗しました","error")}}});let Di=[],Wr=[];async function ts(){const i=document.getElementById("page-container");try{const[e,n]=await Promise.all([ue().catch(()=>[]),$i().catch(()=>[])]);Di=e,Wr=n}catch(e){console.error("データの取得に失敗",e)}i.innerHTML=`
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
      ${kd(Di,Wr)}
    </div>
  `,document.getElementById("btn-add-client").addEventListener("click",()=>Do())}function kd(i,e){return i.length===0?`<div class="empty-state">
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
          ${i.map(n=>{var c,u;const s={月:1,火:2,水:3,木:4,金:5,土:6,日:7},o=e.filter(p=>p.clientId===n.id).sort((p,g)=>{const E=s[p.dayOfWeek]||99,b=s[g.dayOfWeek]||99;return E-b}),l=o.length>0?o.map(p=>`<div style="font-size:0.85rem;margin-bottom:2px;">
                  <span class="tag" style="background:#E2E8F0;color:#333">${p.dayOfWeek||"不明"}</span>
                  ${p.startTime}〜${p.endTime} (${p.duration}分)
                </div>`).join(""):'<span style="color:var(--text-muted)">設定なし</span>';return`<tr>
              <td><strong>${Q(n.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${n.genderPreference!=="指定なし"?n.genderPreference:""}</span></td>
              <td><span class="tag ${(c=n.careLevel)!=null&&c.includes("4")||(u=n.careLevel)!=null&&u.includes("5")?"tag-danger":""}">${n.careLevel||"-"}</span></td>
              <td><div class="tags-container">${(n.requiredServices||[]).map(p=>`<span class="tag tag-secondary">${p}</span>`).join("")}</div></td>
              <td><div class="tags-container">${(n.requiredSkills||[]).map(p=>`<span class="tag tag-accent">${p}</span>`).join("")||"-"}</div></td>
              <td>${l}</td>
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
  `}function Do(i=null){var l,c;const e=!!i,n=[...xi.physical.options,...xi.special.options],s=`
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${gd.map(u=>`<option ${(i==null?void 0:i.careLevel)===u?"selected":""}>${u}</option>`).join("")}
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
          ${xo.map(u=>{var p;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
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
            ${yd.map(u=>`<option ${(i==null?void 0:i.genderPreference)===u?"selected":""}>${u}</option>`).join("")}
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
          <input class="form-input" type="time" id="cf-time-start" value="${((l=i==null?void 0:i.timeWindow)==null?void 0:l.start)||"09:00"}" />
        </div>
        <div class="form-group">
          <label class="form-label">希望時間帯（終了）</label>
          <input class="form-input" type="time" id="cf-time-end" value="${((c=i==null?void 0:i.timeWindow)==null?void 0:c.end)||"12:00"}" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">備考</label>
        <textarea class="form-input" id="cf-notes" rows="2" placeholder="特記事項があれば...">${(i==null?void 0:i.notes)||""}</textarea>
      </div>
    </form>
  `;pt(e?"利用者情報の編集":"新規利用者登録",s,`
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("cf-cancel").onclick=re,document.getElementById("cf-save").onclick=async()=>{const u=document.getElementById("cf-name").value.trim();if(!u){M("氏名を入力してください","warning");return}const p=document.getElementById("cf-save");p.disabled=!0,p.textContent="保存中...";const g=document.getElementById("cf-address").value.trim();let E=(i==null?void 0:i.lat)||Y.lat,b=(i==null?void 0:i.lng)||Y.lng;if(g)try{await Pe();const k=await Ao(g);k?(E=k.lat,b=k.lng,M(`座標を取得しました: ${k.lat.toFixed(4)}, ${k.lng.toFixed(4)}`,"success")):M("住所から座標を取得できませんでした。事業所付近の座標を使用します。","warning")}catch(k){console.warn("ジオコーディング失敗:",k),M("座標取得に失敗。事業所付近の座標を使用します。","warning")}const I={name:u,careLevel:document.getElementById("cf-care-level").value,address:g,requiredServices:Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(k=>k.value),requiredSkills:Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(k=>k.value),genderPreference:document.getElementById("cf-gender-pref").value,visitDuration:parseInt(document.getElementById("cf-duration").value)||60,timeWindow:{start:document.getElementById("cf-time-start").value,end:document.getElementById("cf-time-end").value},notes:document.getElementById("cf-notes").value.trim(),lat:E,lng:b,isActive:!0};try{e?(await od(i.id,I),M("利用者情報を更新しました","success")):(await Eo(I),M("利用者を登録しました","success")),re(),await ts()}catch(k){M("保存に失敗しました: "+k.message,"error")}finally{p.disabled=!1,p.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-client]");if(e){const s=Di.find(o=>o.id===e.dataset.editClient);s&&Do(s)}const n=i.target.closest("[data-delete-client]");if(n){const s=Di.find(o=>o.id===n.dataset.deleteClient);if(s&&await gt("削除確認",`${s.name} を削除しますか？`))try{await ad(s.id),M(`${s.name} を削除しました`,"success"),await ts()}catch{M("削除に失敗しました","error")}}});let ze=Ye();async function Ad(){const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">calendar_month</span>
        スケジュール管理
      </h1>
      <div class="btn-group">
        <input type="date" id="schedule-date" class="form-input" value="${ze}" style="width:180px" />
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
  `,document.getElementById("schedule-date").addEventListener("change",e=>{ze=e.target.value,Xt()}),document.getElementById("btn-add-visit").addEventListener("click",xd),document.getElementById("btn-generate-week").addEventListener("click",Od),await Xt()}async function Xt(){const i=document.getElementById("schedule-content"),[e,n,s,o]=await Promise.all([ae().catch(()=>[]),ue().catch(()=>[]),Me(ze).catch(()=>[]),Zn(ze).catch(()=>[])]);if(s.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round">event_busy</span>
        <h3>${ft(ze)} の訪問予定はありません</h3>
        <p>「訪問追加」ボタンから予定を登録するか、マッチング＆最適化を実行してください</p>
      </div>
    `;return}const l={},c=[];let u=0,p=0,g=0;for(const I of s)I.staffId?(l[I.staffId]||(l[I.staffId]=[]),l[I.staffId].push(I)):c.push(I);c.sort((I,k)=>{const x=I.startTime||I.scheduledTime||"00:00",A=k.startTime||k.scheduledTime||"00:00";return x.localeCompare(A)});let E="";c.length>0&&(E=`
      <div class="card" style="border-left: 4px solid var(--danger); margin-bottom: 24px; background: rgba(239, 68, 68, 0.05);">
        <h3 class="card-title" style="color: var(--danger); margin-bottom: 12px;">
          <span class="material-icons-round">warning</span>
          未割り当ての訪問 (${c.length}件)
        </h3>
        <div class="grid grid-3" style="gap: 12px;">
          ${c.map(I=>{const k=n.find(x=>x.id===I.clientId);return`
              <div class="visit-card" style="border: 1px dashed var(--danger);">
                <div style="display:flex;justify-content:space-between;align-items:start">
                  <div>
                    <strong>${Q(I.clientName||(k==null?void 0:k.name)||"不明")} ${I.type==="sales"?'<span class="tag" style="background:var(--warning);color:white;margin-left:4px">営業</span>':""}</strong>
                    <div style="font-size:.8rem;color:var(--text-muted)">${I.startTime} | ${I.duration||60}分</div>
                  </div>
                  <button class="btn-icon" data-delete-visit="${I.id}" style="color:var(--danger)">
                    <span class="material-icons-round">close</span>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `);for(const[I,k]of Object.entries(l)){const x=e.find(P=>P.id===I);if(!x)continue;const A=o.find(P=>P.staffId===I),D=parseInt(x.wage)||2e3;if(A&&(g+=(A.totalDistance||0)*Ii),k.sort((P,L)=>{const N=P.optimizedArrivalTime||P.startTime||P.scheduledTime||"00:00",C=L.optimizedArrivalTime||L.startTime||L.scheduledTime||"00:00";return N.localeCompare(C)}),A&&A.schedule&&A.schedule.length>=2){const P=A.schedule[0].arrivalMinutes,N=(A.schedule[A.schedule.length-1].arrivalMinutes-P)/60;p+=N*D}else if(k.length>0){const P=k[0],L=k[k.length-1],N=P.startTime||P.scheduledTime||"09:00",C=L.startTime||L.scheduledTime||"17:00",R=K(N),_=(K(C)+(L.duration||60)-R)/60;p+=_*D}k.forEach((P,L)=>{u+=To(x,P.duration||60);let N=10,C=null;if(A&&A.schedule){const R=A.schedule.find(W=>W.clientId===P.clientId);R&&(N=R.travelTimeFromPrev||10,C=R.arrivalTime)}P.calculatedTravelTime=N,P.optimizedArrivalTime=C}),k.sort((P,L)=>{const N=P.optimizedArrivalTime||P.startTime||P.scheduledTime||"00:00",C=L.optimizedArrivalTime||L.startTime||L.scheduledTime||"00:00";return N.localeCompare(C)})}let b="";if(window.isAdmin){const I=u-p-g,k=u>0?Math.round(I/u*100):0;b=`
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
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${g.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定利益 (利益率)</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: ${I>=0?"var(--success)":"var(--danger)"};">
              ¥${I.toLocaleString()} <span style="font-size: 1rem;">(${k}%)</span>
            </div>
          </div>
        </div>
      </div>
    `}i.innerHTML=`
    ${b}
    ${E}
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${ft(ze)} — ${s.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(l).map(([I,k])=>{const x=e.find(A=>A.id===I);return`
          <div class="card" style="border-left:4px solid ${(x==null?void 0:x.color)||"#999"}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${(x==null?void 0:x.color)||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${k.length}
              </div>
              ${Q((x==null?void 0:x.name)||"未割当")}
            </h3>
            <div class="schedule-timeline">
              ${k.map((A,D)=>{const P=n.find(R=>R.id===A.clientId),L=A.optimizedArrivalTime||A.startTime||A.scheduledTime||"--:--";let N="",C="";if(D>0){const R=k[D-1],W=R.optimizedArrivalTime||R.startTime||R.scheduledTime,_=A.calculatedTravelTime||10;if(W&&L!=="--:--"){const[h,m]=W.split(":").map(Number),[v,y]=L.split(":").map(Number),T=h*60+m+(R.duration||60),j=v*60+y-T;j<_&&(C=`
                          <div style="color:var(--danger); font-size: 0.8rem; padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border-radius: 4px; margin-bottom: 8px;">
                            <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">warning</span>
                            移動時間が不足しています（必要: ${_}分, 実際: ${j}分）
                          </div>
                        `),N=`
                        <div style="margin-left: 60px; padding: 4px 0; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; border-left: 2px dashed var(--border); padding-left: 14px;">
                          <span class="material-icons-round" style="font-size: 14px; margin-right: 4px;">directions_car</span>
                          移動時間: 約${_}分
                        </div>
                      `}}return`
                  ${N}
                  ${C}
                  <div class="time-slot">
                    <div class="time-label">${L}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${Q(A.clientName||(P==null?void 0:P.name)||"不明")} ${A.type==="sales"?'<span class="tag" style="background:var(--warning);color:white;margin-left:4px">営業</span>':""}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">
                              ${A.type==="sales"?"営業活動":A.serviceInfo||A.service||"訪問"} | ${A.duration||60}分
                            </div>
                            <div style="font-size:.75rem;color:var(--text-muted); margin-top:2px;">
                              <span class="material-icons-round" style="font-size:12px;vertical-align:middle">place</span>
                              ${Q(A.type==="sales"?A.salesTarget||"営業先":(P==null?void 0:P.area)||"未設定")}
                            </div>
                          </div>
                          <button class="btn-icon" data-delete-visit="${A.id}" style="color:var(--danger)" title="削除">
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
  `}async function xd(){const[i,e]=await Promise.all([ae().catch(()=>[]),ue().catch(()=>[])]),n=`
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
          ${xo.map(o=>`<option>${o}</option>`).join("")}
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
  `;pt("訪問予定の追加",n,`
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `);const s=()=>{const o=document.getElementById("vf-service").value,l=parseInt(document.getElementById("vf-duration").value)||60,c=Cn(o,l);document.getElementById("vf-income").value=c,document.getElementById("vf-income-hint").textContent=`↑ ${o} ${l}分 → ¥${c.toLocaleString()}（自動計算）`};document.getElementById("vf-service").addEventListener("change",s),document.getElementById("vf-duration").addEventListener("change",s),s(),document.getElementById("vf-cancel").onclick=re,document.getElementById("vf-save").onclick=async()=>{const o=document.getElementById("vf-client").value,l=document.getElementById("vf-staff").value;if(!o||!l){M("利用者と職員を選択してください","warning");return}try{const c=parseInt(document.getElementById("vf-duration").value)||60,u=document.getElementById("vf-service").value,p=document.getElementById("vf-time").value,g=K(p)+c,E=Math.floor(g/60),b=g%60,I=`${String(E).padStart(2,"0")}:${String(b).padStart(2,"0")}`;await Bi({date:ze,clientId:o,staffId:l,startTime:p,endTime:I,scheduledTime:p,duration:c,service:u,income:parseInt(document.getElementById("vf-income").value)||Cn(u,c),status:"scheduled"}),M("訪問予定を追加しました","success"),re(),await Xt()}catch{M("追加に失敗しました","error")}}}async function Od(){var e;if(await gt("週間スケジュール自動生成",`利用者の曜日設定に基づいて、今週（月〜土）の訪問予定を自動生成します。
既存の予定がある日はスキップされます。

実行しますか？`))try{const[n,s]=await Promise.all([ue(),$i()]),o={月:1,火:2,水:3,木:4,金:5,土:6},l=new Date,c=l.getDay(),u=s.filter(b=>b.dayOfWeek&&o[b.dayOfWeek]!==void 0);let p=0,g=0;const E=new Map;for(const b of u){const I=o[b.dayOfWeek];if(I===void 0)continue;const k=I-c,x=new Date(l);x.setDate(l.getDate()+k);const A=qt(x),D=`${A}_${b.clientId}`;if(E.has(D)){E.get(D).timeOptions.push({startTime:b.startTime||"09:00",duration:b.duration||60});continue}if((await Me(A)).some(L=>L.clientId===b.clientId)){E.set(D,null),g++;continue}E.set(D,{...b,date:A,timeOptions:[{startTime:b.startTime||"09:00",duration:b.duration||60}]})}for(const[b,I]of E){if(!I)continue;const k=n.find(W=>W.id===I.clientId),x=I.service||((e=k==null?void 0:k.requiredServices)==null?void 0:e[0])||"身体介護",A=I.duration||(k==null?void 0:k.visitDuration)||60,D=I.startTime||"09:00",P=Cn(x,A),L=K(D)+A,N=Math.floor(L/60),C=L%60,R=`${String(N).padStart(2,"0")}:${String(C).padStart(2,"0")}`;await Bi({date:I.date,clientId:I.clientId,clientName:I.clientName||(k==null?void 0:k.name)||"利用者",staffId:I.staffId||null,staffName:I.staffName||"未設定",startTime:D,endTime:R,scheduledTime:D,duration:A,service:x,income:P,dayOfWeek:I.dayOfWeek,status:"scheduled",timeOptions:I.timeOptions}),p++}p>0?M(`今週の訪問予定 ${p}件 を自動生成しました！${g>0?`（${g}件は既存のためスキップ）`:""}`,"success"):M(`生成する予定がありませんでした。${g>0?`（${g}件は既に登録済み）`:"利用者の曜日設定を確認してください。"}`,"warning"),await Xt()}catch(n){console.error("週間スケジュール生成エラー:",n),M("スケジュール生成に失敗しました: "+n.message,"error")}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-delete-visit]");if(e&&await gt("削除確認","この訪問予定を削除しますか？"))try{await Qn(e.dataset.deleteVisit),M("訪問予定を削除しました","success"),await Xt()}catch{M("削除に失敗しました","error")}});function Dd(i,e){const n=K(i),s=[{startTime:i,duration:e}],o=n+15;o+e<=18*60&&s.push({startTime:zt(o),duration:e});const l=n-15;return l>=7*60&&s.push({startTime:zt(l),duration:e}),s}function Ur(i){return i?K(i)<12*60+30?"AM":"PM":"AM"}function Ld(i,e,n=null){var g,E,b,I,k;let s=0;const o=[];let l=!0;for(const x of e.requiredServices||[])(E=(g=i.skills)==null?void 0:g.services)!=null&&E.includes(x)?(s+=Nt.requiredSkill,o.push(`✅ ${x}対応可`)):(l=!1,o.push(`❌ ${x}に対応不可`));const c=[...((b=i.skills)==null?void 0:b.qualifications)||[],...((I=i.skills)==null?void 0:I.physical)||[],...((k=i.skills)==null?void 0:k.special)||[]];for(const x of e.requiredSkills||[])c.includes(x)?(s+=Nt.requiredSkill,o.push(`✅ ${x}あり`)):(l=!1,o.push(`❌ ${x}なし`));if(e.genderPreference&&e.genderPreference!=="指定なし"){const x=e.genderPreference.replace("希望","");i.gender===x?(s+=Nt.genderMatch,o.push(`✅ 性別希望合致（${x}）`)):(l=!1,o.push(`❌ 性別希望不一致（希望: ${x}）`))}i.type==="正社員"&&(s+=Nt.staffType,o.push("✅ 正社員"));const u=(n==null?void 0:n.lat)||i.lat,p=(n==null?void 0:n.lng)||i.lng;if(u&&e.lat){const x=Io(u,p,e.lat,e.lng);let A=Nt.proximity;n!=null&&n.isTransition&&(A=A*.2,o.push("ℹ️ ブロック移動（エリア移動許容）"));const D=Math.max(0,A*(1-x/10));s+=D,D>A*.8&&o.push(`✅ 近距離ボーナス (+${Math.round(D)})`)}return{score:Math.round(s),reasons:o,eligible:l}}function wn(i){var e;return(e=i.name)!=null&&e.includes("前川")?3:i.maxVisits||(i.type==="パート"?5:10)}function Lo(i,e,n=[],s=null,o=[]){const l=[],c=new Set,u={},p={};o.forEach((I,k)=>{p[I.id]=k});const g=(I,k)=>{if(!s)return 15;const x=p[I],A=p[k];return x!==void 0&&A!==void 0&&s[x][A]&&s[x][A].duration||15},E=[...e].sort((I,k)=>{const x=I.startTime||I.scheduledTime||"00:00",A=k.startTime||k.scheduledTime||"00:00";return x.localeCompare(A)});for(const I of E){if(l.some(L=>{if(L.clientId!==I.clientId)return!1;const N=K(L.startTime),C=N+(L.duration||60),R=K(I.startTime||I.scheduledTime||"09:00"),W=R+(I.duration||60);return R<C&&W>N})){c.add(I.id);continue}const x=i.filter(L=>L.isActive).map(L=>{const N=n.find(f=>f.id===I.clientId),C=l.filter(f=>f.staffId===L.id),R=C.length>0?C[C.length-1]:null;let W=null;if(R){const f=n.find(j=>j.id===R.clientId);if(f){const j=I.startTime||I.scheduledTime||"09:00",te=Ur(R.startTime)!==Ur(j);W={lat:f.lat,lng:f.lng,isTransition:te}}}const{score:_,eligible:h}=Ld(L,N||I,W),m=I.startTime||I.scheduledTime||"09:00",v=I.duration||60,y=I.timeOptions&&I.timeOptions.length>0?I.timeOptions:Dd(m,v);let T=null;for(const f of y){let j=!0;const te=K(f.startTime),Qe=te+(f.duration||60),Ui=K(L.workStart||"07:00"),Ze=K(L.workEnd||"18:00");if(te<Ui||Qe>Ze){j=!1;continue}const et=l.filter(Ne=>Ne.staffId===L.id);for(const Ne of et){const Re=K(Ne.startTime),tt=Re+(Ne.duration||60);if(te<tt&&Qe>Re){j=!1;break}const yt=g(Ne.clientId,I.clientId);if(te>=tt){if(te-tt<yt){j=!1;break}}else if(Qe<=Re&&Re-Qe<yt){j=!1;break}}if(j){T=f;break}}return{staff:L,score:_,eligible:h&&!!T,chosenTime:T}}).filter(L=>L.eligible);if(x.length===0)continue;x.sort((L,N)=>{var f,j;const C=u[L.staff.id]||0,R=u[N.staff.id]||0,W=wn(L.staff),_=wn(N.staff),h=C>=W,m=R>=_;if(h!==m)return h?1:-1;const v=7,y=L.staff.type==="正社員"&&!((f=L.staff.name)!=null&&f.includes("前川"))&&C<v,T=N.staff.type==="正社員"&&!((j=N.staff.name)!=null&&j.includes("前川"))&&R<v;return y!==T?y?-1:1:C!==R?C-R:L.staff.type!==N.staff.type?L.staff.type==="正社員"?-1:1:N.score-L.score});const A=x[0],D=u[A.staff.id]||0,P=wn(A.staff);if(D<P){const L=A.chosenTime.startTime,N=A.chosenTime.duration||60,C=K(L)+N;l.push({staffId:A.staff.id,staffName:A.staff.name,visitId:I.id,clientId:I.clientId,clientName:I.clientName||"利用者",score:A.score,startTime:L,endTime:zt(C),scheduledTime:L,duration:N}),c.add(I.id),u[A.staff.id]=D+1}}const b=e.filter(I=>!c.has(I.id)).map(I=>({visitId:I.id,clientName:I.clientName||"利用者",reason:"適格な職員なし、または上限超過",visit:I}));return{assignments:l,unassigned:b}}async function is(i,e,n,s=Y,o=null){const l={};for(const u of i)l[u.staffId]||(l[u.staffId]=[]),l[u.staffId].push(u.clientId);const c={};for(const[u,p]of Object.entries(l)){const g=e.find(P=>P.id===u),E=p.map(P=>n.find(L=>L.id===P)).filter(Boolean);if(E.length===0)continue;const b=[{id:"office",name:"事業所",lat:s.lat,lng:s.lng,isOffice:!0},...E.map(P=>{const L=i.find(N=>N.clientId===P.id&&N.staffId===u);return{id:P.id,name:P.name,lat:P.lat,lng:P.lng,duration:P.visitDuration||60,scheduledStart:L?L.startTime:null,timeWindow:P.timeWindow}})];let I=null;typeof o=="function"&&(I=await o(b));const k=Pd(b,I);let x=Cd(b,k);x=Md(x,k);const A=Nd(x,k),D=Rd(x,k,g,I,b);c[u]={staffId:u,staffName:(g==null?void 0:g.name)||"不明",staffColor:(g==null?void 0:g.color)||"#999",route:x,totalDistance:Math.round(A*10)/10,totalDuration:$d(D),schedule:D}}return c}function Pd(i,e=null){const n=i.length,s=Array.from({length:n},()=>Array(n).fill(0));for(let o=0;o<n;o++)for(let l=0;l<n;l++)o!==l&&(e&&e[o]&&e[o][l]&&e[o][l].distance!==null?s[o][l]=e[o][l].distance:s[o][l]=Io(i[o].lat,i[o].lng,i[l].lat,i[l].lng));return s}function Cd(i,e){const n=i.length,s=new Set([0]),o=[0],l=[],c=[];for(let g=1;g<n;g++){const E=i[g];E.timeWindow&&E.timeWindow.start?l.push({index:g,start:K(E.timeWindow.start),end:K(E.timeWindow.end)}):c.push(g)}l.sort((g,E)=>g.start-E.start);const u=[...l.map(g=>g.index),...c];let p=0;for(;s.size<n;){let g=-1,E=1/0;for(const b of u)s.has(b)||e[p][b]<E&&(E=e[p][b],g=b);if(g===-1)break;o.push(g),s.add(g),p=g}return o.push(0),o}function Md(i,e){const n=i.length;let s=!0,o=[...i];for(;s;){s=!1;for(let l=1;l<n-2;l++)for(let c=l+1;c<n-1;c++){const u=e[o[l-1]][o[l]]+e[o[c]][o[c+1]];if(e[o[l-1]][o[c]]+e[o[l]][o[c+1]]<u-.001){const g=[...o];let E=l,b=c;for(;E<b;)[g[E],g[b]]=[g[b],g[E]],E++,b--;o=g,s=!0}}}return o}function Nd(i,e){let n=0;for(let s=0;s<i.length-1;s++)n+=e[i[s]][i[s+1]];return n}function Rd(i,e,n,s=null,o=[]){const l=[];let u=K((n==null?void 0:n.workStart)||"08:30");for(let p=0;p<i.length;p++){let g=0;if(p>0){const b=i[p-1],I=i[p];s&&s[b]&&s[b][I]&&s[b][I].duration!==null?g=s[b][I].duration:g=e[b][I]/20*60,u+=Math.ceil(g)}const E=o[i[p]];if(E){let b=0;E.timeWindow&&E.timeWindow.start?b=K(E.timeWindow.start):E.scheduledStart&&(b=K(E.scheduledStart)),u<b&&(u=b)}if(l.push({pointIndex:i[p],clientId:E?E.id:null,arrivalTime:zt(u),arrivalMinutes:u,travelTimeFromPrev:Math.ceil(g)}),p>0&&p<i.length-1){const b=E&&E.duration||60;u+=b}}return l}function $d(i){if(i.length<2)return 0;const e=i[0].arrivalMinutes;return i[i.length-1].arrivalMinutes-e}let ot=new Date;async function Yt(){const i=document.getElementById("page-container"),e=ot.getFullYear(),n=ot.getMonth(),s=new Date(e,n,1),o=new Date(e,n+1,0),l=s.getDay(),c=o.getDate(),u=await $i().catch(()=>[]),[p,g]=await Promise.all([ue().catch(()=>[]),ae().catch(()=>[])]);let E=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">calendar_month</span>
        月間カレンダー
      </h1>
      <div class="btn-group">
        <button class="btn btn-primary" id="cal-weekly-opt" style="margin-right: 16px; font-weight: bold;">
          <span class="material-icons-round">auto_fix_high</span> 来週分を一括再マッチング
        </button>
        <button class="btn btn-secondary" id="cal-prev-month">
          <span class="material-icons-round">chevron_left</span>
        </button>
        <div style="font-size: 1.2rem; font-weight: 600; padding: 0 16px;">
          ${e}年 ${n+1}月
        </div>
        <button class="btn btn-secondary" id="cal-next-month">
          <span class="material-icons-round">chevron_right</span>
        </button>
      </div>
    </div>
    
    <div class="card">
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 8px; overflow: hidden;">
        <!-- 曜日ヘッダー -->
        ${["日","月","火","水","木","金","土"].map((k,x)=>`
          <div style="background: var(--bg-card); padding: 12px; text-align: center; font-weight: 600; color: ${x===0?"var(--danger)":x===6?"var(--primary)":"var(--text)"};">
            ${k}
          </div>
        `).join("")}
  `;for(let k=0;k<l;k++)E+='<div style="background: var(--bg-main); padding: 10px; min-height: 100px;"></div>';const b=qt(new Date);for(let k=1;k<=c;k++){const x=new Date(e,n,k),A=qt(x),D=x.getDay(),P=A===b,N=u.filter(C=>C.date===A).filter(C=>C.status==="scheduled");E+=`
      <div class="calendar-day" data-date="${A}" style="background: var(--bg-card); padding: 8px; min-height: 100px; cursor: pointer; border: ${P?"2px solid var(--primary)":"none"}; position: relative; display: flex; flex-direction: column;">
        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; color: ${D===0?"var(--danger)":D===6?"var(--primary)":"inherit"};">
          ${k}
        </div>
        ${N.length>0?`
          <div style="background: rgba(59,130,246,0.1); color: var(--primary); padding: 4px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center;">
            <span>訪問予定</span>
            <span>${N.length}件</span>
          </div>
        `:""}
        <div style="flex-grow: 1;"></div>
      </div>
    `}const I=(7-(l+c)%7)%7;for(let k=0;k<I;k++)E+='<div style="background: var(--bg-main); padding: 10px; min-height: 100px;"></div>';E+=`
      </div>
    </div>
  `,i.innerHTML=E,document.getElementById("cal-prev-month").addEventListener("click",()=>{ot.setMonth(ot.getMonth()-1),Yt()}),document.getElementById("cal-next-month").addEventListener("click",()=>{ot.setMonth(ot.getMonth()+1),Yt()}),document.getElementById("cal-weekly-opt").addEventListener("click",Wd),document.querySelectorAll(".calendar-day").forEach(k=>{k.addEventListener("click",x=>{const A=x.currentTarget.dataset.date;Bd(A,u,p,g)})})}function Bd(i,e,n,s){const o=e.filter(u=>u.date===i);let l="";o.length===0?l='<div style="color:var(--text-muted); text-align:center; padding: 20px;">予定はありません</div>':(o.sort((u,p)=>(u.startTime||"00:00").localeCompare(p.startTime||"00:00")),l=o.map(u=>{const p=n.find(E=>E.id===u.clientId),g=s.find(E=>E.id===u.staffId);return`
        <div class="visit-card" style="margin-bottom: 8px; border-left: 4px solid ${(g==null?void 0:g.color)||"#ccc"}; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">${u.startTime||u.scheduledTime||"--:--"} ~ ${u.endTime||"--:--"}</div>
            <div style="font-size: 0.9rem;">
              <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">elderly</span> 
              ${Q(u.clientName||(p==null?void 0:p.name)||"未設定")}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              担当: ${Q(u.staffName||(g==null?void 0:g.name)||"未設定")}
            </div>
          </div>
          <button class="btn-icon btn-cancel-visit" data-id="${u.id}" style="color: var(--danger);" title="この予定をキャンセル(削除)する">
            <span class="material-icons-round">delete_outline</span>
          </button>
        </div>
      `}).join(""));const c=`
    <div style="margin-bottom: 16px;">
      <h3 style="margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">
        ${i} の予定
      </h3>
      <div id="modal-visits-container" style="max-height: 400px; overflow-y: auto;">
        ${l}
      </div>
    </div>
  `;pt("日付の詳細",c,`
    <button class="btn btn-secondary" id="modal-close-btn">閉じる</button>
    <button class="btn btn-primary" id="modal-add-visit-btn" data-date="${i}">
      <span class="material-icons-round">add</span> 予定を追加
    </button>
  `),document.getElementById("modal-close-btn").addEventListener("click",re),document.querySelectorAll(".btn-cancel-visit").forEach(u=>{u.addEventListener("click",async p=>{const g=p.currentTarget.dataset.id;if(await gt("予定の削除","この予定をキャンセル（削除）しますか？<br>※再マッチング時には除外されます。"))try{await Qn(g),M("予定を削除しました","success"),re(),Yt()}catch{M("削除に失敗しました","error")}})}),document.getElementById("modal-add-visit-btn").addEventListener("click",u=>{re(),M("予定の追加は「日別スケジュール」画面から行ってください。","info")})}async function Wd(){const i=new Date,e=(8-i.getDay())%7||7,n=new Date(i.getFullYear(),i.getMonth(),i.getDate()+e),s=[];for(let g=0;g<7;g++){const E=new Date(n);E.setDate(E.getDate()+g),s.push(qt(E))}const o=s[0],l=s[6];if(!await gt("来週分の再マッチング",`【対象期間】<br><b>${o} 〜 ${l}</b><br><br>カレンダー上で削除した「お休み」を反映し、担当者をリセットした上で、一番効率の良いルートに一括で再計算します。<br>実行しますか？`))return;const u=document.getElementById("cal-weekly-opt"),p=u.innerHTML;u.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',u.disabled=!0;try{const[g,E,b]=await Promise.all([ae(),ue(),$i()]),I=[{id:"office",...Y},...E.map(D=>({id:D.id,lat:D.lat,lng:D.lng}))];let k=null;try{await Pe(),k=await Kt(I)}catch(D){console.warn("距離行列の取得に失敗:",D)}const x=["日","月","火","水","木","金","土"];let A=0;for(const D of s){const P=new Date(D),L=x[P.getDay()],N=b.filter(m=>m.date===D);if(N.length===0)continue;const C=g.filter(m=>{var v;return m.isActive&&((v=m.days)==null?void 0:v.includes(L))});if(C.length===0)continue;const{assignments:R}=Lo(C,N,E,k,I),W=await is(R,C,E,Y,async m=>{try{return await Pe(),await Kt(m)}catch{return null}}),_=Object.entries(W).map(([m,v])=>{const y=R.filter(T=>T.staffId===m).map(T=>T.clientId);return{staffId:m,date:D,clientIds:y,totalDistance:v.totalDistance,totalDuration:v.totalDuration,schedule:v.schedule}}),h=new Set;for(const m of N){const v=R.find(y=>y.visitId===m.id);v?(await mt(m.id,{staffId:v.staffId,staffName:v.staffName,startTime:v.startTime,endTime:v.endTime,scheduledTime:v.scheduledTime}),h.add(m.clientId)):h.has(m.clientId)||await mt(m.id,{staffId:null,staffName:"未設定"})}await So(_),A++}A>0?(M(`来週 ${A}日分 のルート最適化が完了しました！`,"success"),Yt()):M("最適化する予定が見つかりませんでした。","warning")}catch(g){console.error(g),M("一括最適化中にエラーが発生しました: "+g.message,"error")}finally{u.innerHTML=p,u.disabled=!1}}let Ke=null,Li=null,Je=Ye(),Pi=null,ns=null,Bn=null,at=null;async function Po(){const i=document.getElementById("page-container"),e=await ae(),n=["日","月","火","水","木","金","土"][new Date(Je).getDay()];i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">auto_fix_high</span>
        マッチング＆ルート最適化
      </h1>
      <div style="display:flex;align-items:center;gap:12px">
        <input type="date" id="match-date-picker" class="form-input" value="${Je}" style="width:160px">
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
        ${e.filter(s=>s.isActive).map(s=>{var l;const o=(l=s.days)==null?void 0:l.includes(n);return`
            <label class="card" style="display:flex;align-items:center;gap:10px;padding:12px;cursor:pointer;${o?"border-color:var(--primary)":""}">
              <input type="checkbox" class="staff-attendance-checkbox" data-staff-id="${s.id}" ${o?"checked":""} style="width:18px;height:18px">
              <div>
                <div style="font-weight:600">${Q(s.name)}</div>
                <div style="font-size:.7rem;color:var(--text-muted)">${s.type} | ${o?"通常出勤":"通常休み"}</div>
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
  `,document.getElementById("match-date-picker").addEventListener("change",s=>{Je=s.target.value,Po()}),document.getElementById("btn-run-optimization").addEventListener("click",Ud)}async function Ud(){const i=document.getElementById("btn-run-optimization"),e=document.getElementById("optimization-results");i.disabled=!0,i.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',e.innerHTML="";try{const[n,s,o]=await Promise.all([ae(),ue(),Me(Je)]),l=Array.from(document.querySelectorAll(".staff-attendance-checkbox:checked")).map(I=>I.dataset.staffId),c=n.filter(I=>l.includes(I.id));if(c.length===0){M("出勤する職員を少なくとも1名選択してください","warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}if(o.length===0){M(`${ft(new Date(Je))} の訪問予定がありません。`,"warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}const u=[{id:"office",...Y},...s.map(I=>({id:I.id,lat:I.lat,lng:I.lng}))];let p=null;try{await Pe(),p=await Kt(u)}catch(I){console.warn("全体距離行列の取得に失敗:",I)}const{assignments:g,unassigned:E}=Lo(c,o,s,p,u);Ke=g,at=E,Pi=c,ns=n,Bn=s;const b=await is(g,c,s,Y,async I=>{try{return await Pe(),await Kt(I)}catch(k){return console.warn("実走行データの取得に失敗:",k),null}});Li=b,e.innerHTML=Co(n,s,g,E,b),Mo(),M("最適化が完了しました！","success")}catch(n){M("最適化に失敗しました: "+n.message,"error"),console.error(n)}finally{i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行'}}function Co(i,e,n,s,o){const l={};for(const c of n)l[c.staffId]||(l[c.staffId]={staff:i.find(u=>u.id===c.staffId),clients:[]}),l[c.staffId].clients.push({...c,client:e.find(u=>u.id===c.clientId)});return`
    <!-- サマリーカード -->
    <div class="grid grid-3" style="margin-bottom:24px">
      <div class="card stat-card success">
        <div class="stat-label">割り当て完了</div>
        <div class="stat-value">${n.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card warning">
        <div class="stat-label">未割り当て</div>
        <div class="stat-value">${s.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
      </div>
      <div class="card stat-card info">
        <div class="stat-label">総移動距離</div>
        <div class="stat-value">${Object.values(o).reduce((c,u)=>c+u.totalDistance,0).toFixed(1)}<span style="font-size:.9rem;color:var(--text-muted)">km</span></div>
      </div>
    </div>

    <!-- 職員別結果 -->
    <div class="grid grid-2" style="margin-bottom:24px">
      ${Object.entries(l).map(([c,u])=>{var g,E,b;const p=o[c];return`
          <div class="card" style="border-left:4px solid ${((g=u.staff)==null?void 0:g.color)||"#999"}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${((E=u.staff)==null?void 0:E.color)||"#999"};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${u.clients.length}
                </div>
                ${Q(((b=u.staff)==null?void 0:b.name)||"不明")}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${((p==null?void 0:p.totalDistance)||0).toFixed(1)}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${((p==null?void 0:p.schedule)||[]).filter(I=>I.pointIndex!==0||p.schedule.indexOf(I)===p.schedule.length-1).map((I,k,x)=>{var D,P;if(I.pointIndex===0&&k===x.length-1)return`<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${I.arrivalTime} 事業所帰着
                    </div>`;const A=u.clients.find(L=>L.clientId===I.clientId);return`<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${I.arrivalTime} ${((D=A==null?void 0:A.client)==null?void 0:D.name)||"利用者"}</strong>
                      <span class="tag">${((P=A==null?void 0:A.client)==null?void 0:P.visitDuration)||60}分</span>
                    </div>
                  </div>`}).join("")}
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
        ${s.map(c=>`
          <div style="padding:8px 0;border-bottom:1px solid var(--border-color);display:flex;justify-content:space-between;align-items:center">
            <div style="color:var(--text-secondary)">
              <strong>${Q(c.clientName)}</strong> — ${Q(c.reason)}
            </div>
            <button class="btn btn-secondary btn-manual-assign" style="padding:6px 12px;font-size:0.85rem;" data-visit-id="${c.visitId}">
              手動割当
            </button>
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
  `}async function Fd(i,e){try{const n=Object.entries(e).map(([l,c])=>{const u=Ke.filter(p=>p.staffId===l).map(p=>p.clientId);return{staffId:l,date:Je,clientIds:u,totalDistance:c.totalDistance,totalDuration:c.totalDuration,schedule:c.schedule}}),s=await Me(Je),o=new Set;for(const l of s){const c=Ke.find(u=>u.visitId===l.id);c&&(await mt(l.id,{staffId:c.staffId,staffName:c.staffName,startTime:c.startTime,endTime:c.endTime,scheduledTime:c.scheduledTime}),o.add(l.clientId))}for(const l of s)Ke.find(u=>u.visitId===l.id)||(o.has(l.clientId)?await Qn(l.id):await mt(l.id,{staffId:null,staffName:"未設定"}));await So(n),M("スケジュールとルートを保存しました！","success")}catch(n){M("保存に失敗しました: "+n.message,"error")}}function Mo(){var i;(i=document.getElementById("btn-save-routes"))==null||i.addEventListener("click",async()=>{await Fd(ns,Li)}),document.querySelectorAll(".btn-manual-assign").forEach(e=>{e.addEventListener("click",n=>{const s=n.target.closest(".btn-manual-assign").dataset.visitId;Vd(s)})})}function Vd(i){const e=at.find(c=>c.visitId===i);if(!e)return;const n=e.visit,s=Pi.map(c=>`<option value="${c.id}">${Q(c.name)}</option>`).join(""),o=`
    <div style="margin-bottom: 16px;">
      <div style="font-weight:600;margin-bottom:4px">利用者: ${Q(e.clientName)}</div>
      <div style="font-size:0.85rem;color:var(--text-secondary)">
        所要時間: ${n.duration||60}分<br>
        希望/予定時間: ${n.startTime||n.scheduledTime||"未定"}
      </div>
    </div>
    <div style="margin-bottom: 12px;">
      <label class="form-label">担当職員</label>
      <select id="manual-staff-select" class="form-input">
        ${s}
      </select>
    </div>
    <div style="margin-bottom: 12px;">
      <label class="form-label">開始時間</label>
      <input type="time" id="manual-time-input" class="form-input" value="${n.startTime||n.scheduledTime||"09:00"}">
    </div>
  `;pt("手動割り当て",o,`
    <button class="btn btn-secondary" id="manual-cancel">キャンセル</button>
    <button class="btn btn-primary" id="manual-ok">割り当て</button>
  `),document.getElementById("manual-cancel").onclick=()=>{re()},document.getElementById("manual-ok").onclick=async()=>{const c=document.getElementById("manual-staff-select").value,u=document.getElementById("manual-time-input").value;re(),await jd(i,c,u)}}async function jd(i,e,n){const s=at.findIndex(E=>E.visitId===i);if(s===-1)return;const l=at[s].visit,c=Pi.find(E=>E.id===e),u=l.duration||60,p=K(n)+u;Ke.push({staffId:c.id,staffName:c.name,visitId:l.id,clientId:l.clientId,clientName:l.clientName||"利用者",score:9999,startTime:n,endTime:zt(p),scheduledTime:n,duration:u}),at.splice(s,1);const g=document.getElementById("optimization-results");g.innerHTML='<div style="text-align:center;padding:32px;"><span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> ルート再計算中...</div>';try{Li=await is(Ke,Pi,Bn,Y,async b=>{try{return await Pe(),await Kt(b)}catch{return null}}),g.innerHTML=Co(ns,Bn,Ke,at,Li),Mo(),M(`${c.name}さんに手動割り当てし、ルートを再計算しました`,"success")}catch(E){M("ルート再計算に失敗しました","error"),console.error(E)}}let Ft=Ye();async function qd(){var e,n;const i=document.getElementById("page-container");if(!window.isAdmin){i.innerHTML=`
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
        <input type="date" id="revenue-date-picker" class="form-input" value="${Ft}" style="width:160px">
        <button class="btn btn-secondary" id="btn-refresh-revenue">
          <span class="material-icons-round">refresh</span>
          更新
        </button>
      </div>
    </div>

    <div id="revenue-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,await En(),(e=document.getElementById("revenue-date-picker"))==null||e.addEventListener("change",s=>{Ft=s.target.value,En()}),(n=document.getElementById("btn-refresh-revenue"))==null||n.addEventListener("click",()=>{En()})}async function En(){const i=document.getElementById("revenue-content");if(!i)return;const[e,n,s,o]=await Promise.all([ae(),ue(),Me(Ft),Zn(Ft)]);if(s.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:48px;opacity:.2">event_busy</span>
        <p>${ft(Ft)} の訪問予定データがありません。</p>
      </div>
    `;return}let l=0,c=0,u=0,p=s.length;s.filter(I=>I.status==="completed").length;const g=e.map(I=>{const k=o.filter(C=>C.staffId===I.id),x=s.filter(C=>C.staffId===I.id);let A=0,D=0,P=0,L=0,N=0;if(x.forEach(C=>{A+=To(I,C.duration||60)}),k.forEach(C=>{if(L+=C.totalDistance||0,P+=(C.totalDistance||0)*Ii,C.schedule&&C.schedule.length>=2){const R=C.schedule[0].arrivalMinutes;N=C.schedule[C.schedule.length-1].arrivalMinutes-R,D=N/60*(parseInt(I.wage)||2e3)}}),k.length===0&&x.length>0){const C=[...x].sort((m,v)=>(m.startTime||"09:00").localeCompare(v.startTime||"09:00")),R=C[0],W=C[C.length-1],_=K(R.startTime||"09:00");N=K(W.startTime||"17:00")+(W.duration||60)-_,D=N/60*(parseInt(I.wage)||2e3)}return{...I,count:x.length,revenue:A,laborCost:D,vehicleCost:P,profit:A-D-P,workMinutes:N}}).filter(I=>I.count>0||I.revenue>0).sort((I,k)=>k.profit-I.profit);g.forEach(I=>{l+=I.revenue,c+=I.laborCost,u+=I.vehicleCost});const E=l-c-u,b=l>0?E/l*100:0;i.innerHTML=`
    <!-- メインKPI -->
    <div class="grid grid-4" style="margin-bottom:24px">
      <div class="card stat-card" style="border-top: 4px solid var(--primary)">
        <div class="stat-label">想定売上</div>
        <div class="stat-value">¥${l.toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">${p}件の訪問</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--warning)">
        <div class="stat-label">人件費推計</div>
        <div class="stat-value">¥${Math.round(c).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">平均人件費/人: ¥${g.length>0?Math.round(c/g.length).toLocaleString():0}</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--secondary)">
        <div class="stat-label">移動・車両費</div>
        <div class="stat-value">¥${Math.round(u).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">@${Ii}円/km</div>
      </div>
      <div class="card stat-card ${E>=0?"success":"danger"}" style="border-top: 4px solid ${E>=0?"var(--success)":"var(--danger)"}">
        <div class="stat-label">想定利益 (利益率)</div>
        <div class="stat-value">¥${Math.round(E).toLocaleString()}</div>
        <div style="font-size:.8rem;font-weight:600;color:${E>=0?"var(--success)":"var(--danger)"};margin-top:4px">
          ${b.toFixed(1)}%
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
              ${g.map(I=>{const k=I.revenue>0?I.profit/I.revenue*100:0;return`
                  <tr>
                    <td>
                      <div style="display:flex;align-items:center;gap:8px">
                        <div style="width:10px;height:10px;border-radius:50%;background:${I.color}"></div>
                        <strong>${I.name}</strong>
                      </div>
                    </td>
                    <td style="text-align:right">${I.count}件</td>
                    <td style="text-align:right">¥${I.revenue.toLocaleString()}</td>
                    <td style="text-align:right;color:${I.profit>=0?"var(--success)":"var(--danger)"};font-weight:600">
                      ¥${Math.round(I.profit).toLocaleString()}
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
              <div style="width:${l>0?(c/l*100).toFixed(1):0}%;background:var(--warning);display:flex;align-items:center;justify-content:center;color:#000;font-size:.7rem;font-weight:bold" title="人件費">人件費</div>
              <div style="width:${l>0?(u/l*100).toFixed(1):0}%;background:var(--secondary);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:bold" title="移動費">移動</div>
              <div style="width:${l>0?Math.max(0,E/l*100).toFixed(1):0}%;background:var(--success);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:bold" title="利益">利益</div>
            </div>
            <div style="display:flex;gap:16px;margin-top:12px;font-size:.8rem">
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--warning)"></div> 人件費 (${l>0?(c/l*100).toFixed(1):0}%)</div>
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--secondary)"></div> 移動費 (${l>0?(u/l*100).toFixed(1):0}%)</div>
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--success)"></div> 利益 (${l>0?Math.max(0,E/l*100).toFixed(1):0}%)</div>
            </div>
          </div>

          <div class="card" style="background:rgba(255,255,255,0.03);border:none;padding:16px">
            <h4 style="margin-bottom:12px;font-size:.9rem;color:var(--text-secondary)">経営アドバイス</h4>
            <ul style="font-size:.85rem;line-height:1.6;padding-left:16px;color:var(--text-muted)">
              ${b<15?"<li>利益率が15%を下回っています。移動ルートの最適化を再度実行し、移動時間を削減してください。</li>":""}
              ${l>0&&c/l>.6?"<li>売上に対する人件費率が60%を超えています。1人あたりの訪問件数を増やす調整が必要です。</li>":"<li>人件費率は適正範囲内です。</li>"}
              <li>現在の移動コスト単価は1kmあたり${Ii}円で計算されています。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}async function zd(){const i=document.getElementById("page-container"),e=Ye();i.innerHTML=`
    <div class="page-header" style="margin-bottom: 16px;">
      <h1 class="page-title" style="font-size: 1.25rem;">
        <span class="material-icons-round">today</span>
        本日のスケジュール
      </h1>
      <div style="color: var(--text-secondary); font-size: 0.9rem;">
        ${ft(new Date(e))}
      </div>
    </div>

    <!-- ステータスサマリー -->
    <div class="grid grid-3" style="gap: 8px; margin-bottom: 20px;" id="my-schedule-summary">
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">本日の予定</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary);">-<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">完了</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--success);">-<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">キャンセル</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--danger);">-<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
    </div>

    <div id="my-schedule-list" style="display: flex; flex-direction: column; gap: 12px;">
      <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
        <span class="material-icons-round" style="font-size: 32px; animation: spin 1s linear infinite;">sync</span>
        <div style="margin-top: 8px; font-size: 0.9rem;">予定を読み込んでいます...</div>
      </div>
    </div>

    <div style="margin-top: 24px; padding-bottom: 40px;">
      <button id="btn-add-sales" class="btn" style="width: 100%; justify-content: center; padding: 14px; background: var(--bg-card); border: 2px dashed var(--primary); color: var(--primary);">
        <span class="material-icons-round">add_business</span>
        スキマ時間に営業予定を追加
      </button>
    </div>
  `,document.getElementById("btn-add-sales").addEventListener("click",Gd),await Wi(e)}async function Wi(i){try{const e=await Me(i),n="staff_1",s=e.filter(g=>g.staffId===n);s.sort((g,E)=>(g.scheduledTime||g.startTime||"").localeCompare(E.scheduledTime||E.startTime||""));const o=document.getElementById("my-schedule-list"),l=s.length,c=s.filter(g=>g.status==="completed").length,u=s.filter(g=>g.status==="cancelled").length;if(document.getElementById("my-schedule-summary").innerHTML=`
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">本日の予定</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--primary);">${l}<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">完了</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--success);">${c}<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
      <div class="card stat-card" style="padding: 12px; border-radius: 12px;">
        <div style="font-size: 0.75rem; color: var(--text-muted);">キャンセル</div>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--danger);">${u}<span style="font-size:0.8rem; font-weight:normal; margin-left:2px;">件</span></div>
      </div>
    `,s.length===0){o.innerHTML=`
        <div class="empty-state" style="padding: 40px 20px;">
          <span class="material-icons-round" style="color: var(--success); font-size: 48px;">check_circle_outline</span>
          <h3 style="margin-top: 16px; font-size: 1.1rem;">本日の予定はありません</h3>
        </div>
      `;return}let p="";p+=`
      <div style="display:flex; align-items:flex-start; gap: 12px;">
        <div style="display:flex; flex-direction:column; align-items:center; width: 40px;">
          <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">08:30</div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--secondary); z-index: 1;"></div>
          <div style="width: 2px; height: 40px; background: var(--border); margin-top: -2px; margin-bottom: -2px;"></div>
        </div>
        <div class="card" style="flex: 1; padding: 16px; border-radius: 12px; border-left: 4px solid var(--secondary); background: #f8fafc;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="material-icons-round" style="color: var(--secondary);">business</span>
            <span style="font-weight: 600; color: var(--text-secondary);">事業所 出発</span>
          </div>
        </div>
      </div>
    `,s.forEach((g,E)=>{const b=g.type==="sales",I=g.duration||60,k=g.status||"scheduled";let x="var(--primary)",A="",D="",P="";k==="completed"?(x="var(--success)",A='<span class="material-icons-round" style="color:var(--success)">check_circle</span>',P='<span class="tag" style="background:var(--success); color:white;">完了</span>'):k==="cancelled"?(x="var(--danger)",A='<span class="material-icons-round" style="color:var(--danger)">cancel</span>',P=`<span class="tag" style="background:var(--danger); color:white;">キャンセル: ${Q(g.cancelReason||"理由なし")}</span>`):D=`
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
            <button class="btn btn-secondary btn-cancel-visit" data-id="${g.id}" style="padding: 8px; justify-content: center; font-size: 0.85rem;">
              <span class="material-icons-round" style="font-size: 18px;">cancel</span>
              キャンセル
            </button>
            <button class="btn btn-primary btn-complete-visit" data-id="${g.id}" style="padding: 8px; justify-content: center; font-size: 0.85rem; background: var(--success); border-color: var(--success);">
              <span class="material-icons-round" style="font-size: 18px;">check_circle</span>
              完了
            </button>
          </div>
        `;const L=b?"var(--warning)":x;p+=`
        <div style="display:flex; align-items:flex-start; gap: 12px;">
          <div style="display:flex; flex-direction:column; align-items:center; width: 40px;">
            <div style="font-size: 0.8rem; font-weight: 600; margin-bottom: 4px; color: ${k!=="scheduled"?"var(--text-muted)":"inherit"};">${g.scheduledTime||g.startTime||"--:--"}</div>
            <div style="width: 16px; height: 16px; border-radius: 50%; background: ${L}; z-index: 1; border: 3px solid #fff; box-shadow: 0 0 0 1px ${L};"></div>
            <div style="width: 2px; height: 100px; background: var(--border); margin-top: -2px; margin-bottom: -2px;"></div>
          </div>
          <div class="card" style="flex: 1; padding: 16px; border-radius: 12px; border-left: 4px solid ${L}; position: relative; opacity: ${k!=="scheduled"?"0.7":"1"};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <h3 style="margin: 0; font-size: 1.1rem; display: flex; align-items: center; gap: 6px;">
                ${b?'<span class="material-icons-round" style="color:var(--warning); font-size:1.1rem;">storefront</span>':""}
                ${Q(g.clientName)} ${b?"":"様"}
              </h3>
              ${P||`<span class="tag" style="background: var(--bg-color);">${I}分</span>`}
            </div>
            ${A?`<div style="display:flex; align-items:center; gap:4px; margin-bottom:8px;">${A}</div>`:`
              <div style="font-size: 0.85rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; margin-bottom: 12px;">
                <span class="material-icons-round" style="font-size: 16px;">location_on</span>
                <span>ルートを確認</span>
              </div>
            `}
            ${D}
          </div>
        </div>
      `}),p+=`
      <div style="display:flex; align-items:flex-start; gap: 12px;">
        <div style="display:flex; flex-direction:column; align-items:center; width: 40px;">
          <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">17:30</div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--secondary); z-index: 1;"></div>
        </div>
        <div class="card" style="flex: 1; padding: 16px; border-radius: 12px; border-left: 4px solid var(--secondary); background: #f8fafc;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="material-icons-round" style="color: var(--secondary);">business</span>
            <span style="font-weight: 600; color: var(--text-secondary);">事業所 帰着</span>
          </div>
        </div>
      </div>
    `,o.innerHTML=p,document.querySelectorAll(".btn-complete-visit").forEach(g=>{g.addEventListener("click",async E=>{const b=E.currentTarget.dataset.id;if(confirm("この訪問を「完了」にしてよろしいですか？"))try{await mt(b,{status:"completed"}),M("訪問を完了しました","success"),Wi(i)}catch{M("更新に失敗しました","error")}})}),document.querySelectorAll(".btn-cancel-visit").forEach(g=>{g.addEventListener("click",E=>{const b=E.currentTarget.dataset.id;Hd(b,i)})})}catch(e){console.error("マイスケジュール取得エラー:",e),document.getElementById("my-schedule-list").innerHTML=`
      <div class="empty-state" style="color: var(--danger);">
        <span class="material-icons-round">error</span>
        <p>スケジュールの取得に失敗しました</p>
      </div>
    `}}function Hd(i,e){const n=document.getElementById("modal-overlay"),s=document.getElementById("modal-title"),o=document.getElementById("modal-body"),l=document.getElementById("modal-footer");s.textContent="キャンセルの登録",s.innerHTML='<span class="material-icons-round" style="color:var(--danger)">cancel</span> キャンセルの登録',o.innerHTML=`
    <div class="form-group">
      <label class="form-label">キャンセル理由 <span style="color:var(--danger)">*必須</span></label>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">
        ※経営データとして蓄積されるため、正確な理由を選択してください。
      </p>
      <select id="cancel-reason-select" class="form-input">
        <option value="">選択してください...</option>
        ${_d.map(c=>`<option value="${c}">${c}</option>`).join("")}
      </select>
    </div>
    <div class="form-group" style="margin-top: 16px;">
      <label class="form-label">備考 (任意)</label>
      <textarea id="cancel-notes" class="form-input" rows="3" placeholder="詳細な状況があれば記入"></textarea>
    </div>
  `,l.innerHTML=`
    <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').style.display='none'">閉じる</button>
    <button class="btn btn-primary" id="btn-submit-cancel" style="background:var(--danger); border-color:var(--danger);">キャンセル確定</button>
  `,n.style.display="flex",document.getElementById("btn-submit-cancel").addEventListener("click",async()=>{const c=document.getElementById("cancel-reason-select").value;if(!c){M("キャンセル理由を選択してください","warning");return}const u=document.getElementById("cancel-notes").value;try{await mt(i,{status:"cancelled",cancelReason:c,cancelNotes:u}),M("キャンセルを登録しました","success"),n.style.display="none",Wi(e)}catch{M("更新に失敗しました","error")}})}function Gd(){const i=Ye(),e=document.getElementById("modal-overlay"),n=document.getElementById("modal-title"),s=document.getElementById("modal-body"),o=document.getElementById("modal-footer");n.innerHTML='<span class="material-icons-round" style="color:var(--warning)">storefront</span> 営業予定の追加',s.innerHTML=`
    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
      スキマ時間を活用したアポなし訪問などの営業活動を記録します。
    </p>
    <div class="form-group">
      <label class="form-label">訪問先カテゴリ</label>
      <select id="sales-target-select" class="form-input">
        ${Id.map(l=>`<option value="${l}">${l}</option>`).join("")}
      </select>
    </div>
    <div class="form-group" style="margin-top:12px;">
      <label class="form-label">訪問先名（事業所名など） <span style="color:var(--danger)">*</span></label>
      <input type="text" id="sales-client-name" class="form-input" placeholder="例：〇〇居宅介護支援事業所">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px;">
      <div class="form-group">
        <label class="form-label">開始時間</label>
        <select id="sales-start-time" class="form-input">
          ${Td.map(l=>`<option value="${l}">${l}</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">所要時間</label>
        <select id="sales-duration" class="form-input">
          <option value="15">15分</option>
          <option value="30" selected>30分</option>
          <option value="60">60分</option>
        </select>
      </div>
    </div>
  `,o.innerHTML=`
    <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').style.display='none'">キャンセル</button>
    <button class="btn btn-primary" id="btn-submit-sales">予定を追加</button>
  `,e.style.display="flex",document.getElementById("btn-submit-sales").addEventListener("click",async()=>{const l=document.getElementById("sales-client-name").value.trim();if(!l){M("訪問先名を入力してください","warning");return}const c=document.getElementById("sales-target-select").value,u=document.getElementById("sales-start-time").value,p=parseInt(document.getElementById("sales-duration").value,10);try{await Bi({staffId:"staff_1",staffName:"佐藤 看護師",clientId:"sales_"+Date.now(),clientName:l,date:i,startTime:u,scheduledTime:u,duration:p,type:"sales",salesTarget:c,status:"scheduled"}),M("営業予定を追加しました","success"),e.style.display="none",Wi(i)}catch(g){console.error(g),M("追加に失敗しました","error")}})}const Kd={dashboard:{render:ld,title:"ダッシュボード"},map:{render:bd,title:"マップビュー"},staff:{render:es,title:"職員管理"},client:{render:ts,title:"利用者管理"},schedule:{render:Ad,title:"日別スケジュール"},calendar:{render:Yt,title:"月間カレンダー"},matching:{render:Po,title:"マッチング＆最適化"},revenue:{render:qd,title:"収支シミュレーション"},"my-schedule":{render:zd,title:"マイスケジュール"}};function Jd(){var o,l,c,u;document.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",()=>{const g=p.dataset.page;g&&Vt(g)})}),(o=document.getElementById("btn-sidebar-toggle"))==null||o.addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("collapsed")});const e=document.getElementById("sidebar"),n=document.getElementById("sidebar-overlay"),s=()=>{e.classList.toggle("open"),n.classList.toggle("open")};(l=document.getElementById("btn-mobile-menu"))==null||l.addEventListener("click",s),n==null||n.addEventListener("click",s),(c=document.getElementById("btn-modal-close"))==null||c.addEventListener("click",()=>{document.getElementById("modal-overlay").style.display="none"}),(u=document.getElementById("modal-overlay"))==null||u.addEventListener("click",p=>{p.target===p.currentTarget&&(p.currentTarget.style.display="none")})}async function Vt(i){var s,o;const e=Kd[i];if(!e)return;if(window.isAdmin===!1&&i!=="my-schedule"){console.warn("アクセス権限がありません:",i);return}document.querySelectorAll(".nav-item").forEach(l=>{l.classList.toggle("active",l.dataset.page===i)}),(s=document.getElementById("sidebar"))==null||s.classList.remove("open"),(o=document.getElementById("sidebar-overlay"))==null||o.classList.remove("open"),document.title=`${e.title} - CareRoute`;const n=document.getElementById("page-container");n.innerHTML='<div class="loading"><div class="spinner"></div></div>';try{await e.render()}catch(l){console.error(`ページ「${e.title}」の表示エラー:`,l),n.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${l.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `}}const Fr=[{id:"staff_2",name:"前川さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_3",name:"水口さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"18:01",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018},{id:"staff_4",name:"横家さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","火","水","木","金"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#F59E0B",isActive:!0,lat:35.443,lng:137.018},{id:"staff_5",name:"木澤さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["火","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#8B5CF6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_6",name:"圭子さん",gender:"女性",type:"パート",workStart:"07:50",workEnd:"16:00",days:["月","火","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:[]},color:"#EC4899",isActive:!0,lat:35.443,lng:137.018},{id:"staff_7",name:"藤吉さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"12:00",days:["火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["ペット可"]},color:"#14B8A6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_8",name:"ちえみさん",gender:"女性",type:"パート",workStart:"13:00",workEnd:"17:00",days:["月","火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#F97316",isActive:!0,lat:35.443,lng:137.018},{id:"staff_9",name:"棚橋さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["火","水","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#6366F1",isActive:!0,lat:35.443,lng:137.018},{id:"staff_10",name:"高井さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"14:00",days:["火","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理"]},color:"#84CC16",isActive:!0,lat:35.443,lng:137.018},{id:"staff_11",name:"小沢さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"16:00",days:["月","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#0EA5E9",isActive:!0,lat:35.443,lng:137.018},{id:"staff_12",name:"若尾さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["月","火","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#3B82F6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_13",name:"小川さん",gender:"女性",type:"パート",workStart:"08:20",workEnd:"17:00",days:["月","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_14",name:"井戸さん",gender:"女性",type:"パート",workStart:"07:30",workEnd:"16:00",days:["月","火","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018}],Vr=[{id:"client_1",name:"中村晃",genderPreference:"指定なし",address:"関市東新町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.497156833927576,lng:136.91472248776176,isActive:!0,area:"関市"},{id:"client_2",name:"今井 幸",genderPreference:"指定なし",address:"可児市今渡1334番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.429546564671064,lng:137.06448192237502,isActive:!0,area:"可児市"},{id:"client_3",name:"佐合愛",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441449916213905,lng:137.00859676668438,isActive:!0,area:"美濃加茂市"},{id:"client_4",name:"佐藤 平",genderPreference:"指定なし",address:"関市小野1378番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.496713667191365,lng:136.91611792725212,isActive:!0,area:"関市"},{id:"client_5",name:"佐藤 惠",genderPreference:"指定なし",address:"加茂郡富加町羽生1439-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49350458855056,lng:137.00284647997333,isActive:!0,area:"加茂郡富加町"},{id:"client_6",name:"内田 鉄",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1247",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43919134426946,lng:137.0179669717769,isActive:!0,area:"美濃加茂市"},{id:"client_7",name:"冨田 勝",genderPreference:"女性希望",address:"美濃加茂市蜂屋町中蜂屋1475番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.433236929814676,lng:137.0206065781048,isActive:!0,area:"美濃加茂市"},{id:"client_8",name:"前川 み",genderPreference:"指定なし",address:"美濃加茂市森山町3-4-28",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.447385010380714,lng:137.0241786951649,isActive:!0,area:"美濃加茂市"},{id:"client_9",name:"加藤 民",genderPreference:"指定なし",address:"加茂郡川辺町中川辺1220番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.475384399265096,lng:137.06390768355888,isActive:!0,area:"加茂郡川辺町"},{id:"client_10",name:"加藤 雪",genderPreference:"指定なし",address:"可児市松伏3-4",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.42952101999053,lng:137.06996025815,isActive:!0,area:"可児市"},{id:"client_11",name:"吉村 強",genderPreference:"女性希望",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45175401563851,lng:137.02161473049864,isActive:!0,area:"美濃加茂市"},{id:"client_12",name:"吉田あ",genderPreference:"指定なし",address:"関市西田原",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49115464552958,lng:136.92399997463878,isActive:!0,area:"関市"},{id:"client_13",name:"和田 隆",genderPreference:"指定なし",address:"加茂郡川辺町石神84番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48236841267637,lng:137.07760456602477,isActive:!0,area:"加茂郡川辺町"},{id:"client_14",name:"土岐 吉",genderPreference:"指定なし",address:"美濃加茂市加茂野町市橋836-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44162170104763,lng:137.0262114717999,isActive:!0,area:"美濃加茂市"},{id:"client_15",name:"土岐 雅",genderPreference:"指定なし",address:"加茂郡富加町羽生1453-20",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.488517359713484,lng:136.99491575096658,isActive:!0,area:"加茂郡富加町"},{id:"client_16",name:"大森 君",genderPreference:"女性希望",address:"加茂郡富加町高畑637-3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50099328128151,lng:136.98455151897673,isActive:!0,area:"加茂郡富加町"},{id:"client_17",name:"大橋ひさ",genderPreference:"女性希望",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.438385496082404,lng:137.02562783976515,isActive:!0,area:"美濃加茂市"},{id:"client_18",name:"天野慧",genderPreference:"指定なし",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.434155101090184,lng:137.02364638342797,isActive:!0,area:"美濃加茂市"},{id:"client_19",name:"奥田 邦",genderPreference:"指定なし",address:"加茂郡川辺町石神9778-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494079651227416,lng:137.07228502934993,isActive:!0,area:"加茂郡川辺町"},{id:"client_20",name:"安田 正",genderPreference:"女性希望",address:"関市東町4-3-24",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.498558378964844,lng:136.93317629557282,isActive:!0,area:"関市"},{id:"client_21",name:"安藤 悦治",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4458132002014,lng:137.0128572203751,isActive:!0,area:"美濃加茂市"},{id:"client_22",name:"宮本伸",genderPreference:"指定なし",address:"美濃加茂市上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43490869964852,lng:137.01386742162063,isActive:!0,area:"美濃加茂市"},{id:"client_23",name:"宮田 薫",genderPreference:"指定なし",address:"加茂郡富加町高畑637番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4893904414253,lng:136.9951458803918,isActive:!0,area:"加茂郡富加町"},{id:"client_24",name:"富田 菊",genderPreference:"指定なし",address:"可児市矢戸1445番地34",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.435752761721716,lng:137.0651931080912,isActive:!0,area:"可児市"},{id:"client_25",name:"小原 強",genderPreference:"指定なし",address:"美濃加茂市下米田町則光329番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441734590435274,lng:137.0125176746724,isActive:!0,area:"美濃加茂市"},{id:"client_26",name:"岡田 洋",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋1674番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4365047823305,lng:137.01270107633286,isActive:!0,area:"美濃加茂市"},{id:"client_27",name:"岩﨑 嬉",genderPreference:"指定なし",address:"美濃加茂市加茂川町３丁目４番７号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43346804141193,lng:137.01932833342485,isActive:!0,area:"美濃加茂市"},{id:"client_28",name:"川崎 イ",genderPreference:"指定なし",address:"加茂郡富加町滝田151番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.496723988527705,lng:136.9997990843252,isActive:!0,area:"加茂郡富加町"},{id:"client_29",name:"平田 裕",genderPreference:"指定なし",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.449511651048645,lng:137.00972072094092,isActive:!0,area:"美濃加茂市"},{id:"client_30",name:"平田あ",genderPreference:"女性希望",address:"加茂郡富加町羽生",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49517050409468,lng:136.9856735080124,isActive:!0,area:"加茂郡富加町"},{id:"client_31",name:"廣 強",genderPreference:"指定なし",address:"美濃加茂市牧野1076-75",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44218112119725,lng:137.01104910417206,isActive:!0,area:"美濃加茂市"},{id:"client_32",name:"斉藤真",genderPreference:"指定なし",address:"関市北天神",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48797634825378,lng:136.9143700838785,isActive:!0,area:"関市"},{id:"client_33",name:"日比野 奥",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.437015399250406,lng:137.00906805366205,isActive:!0,area:"美濃加茂市"},{id:"client_34",name:"日比野 由",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43337070077588,lng:137.0244453376369,isActive:!0,area:"美濃加茂市"},{id:"client_35",name:"日比野 直",genderPreference:"女性希望",address:"美濃加茂市清水町2-3-17",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44642678990315,lng:137.01795349522274,isActive:!0,area:"美濃加茂市"},{id:"client_36",name:"木村 光",genderPreference:"指定なし",address:"美濃加茂市太田町2600番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.435371997376876,lng:137.01108131268214,isActive:!0,area:"美濃加茂市"},{id:"client_37",name:"木澤 博",genderPreference:"指定なし",address:"加茂郡富加町加治田3461番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.506303390707046,lng:136.99104467350202,isActive:!0,area:"加茂郡富加町"},{id:"client_38",name:"木澤 照",genderPreference:"女性希望",address:"加茂郡川辺町石神215-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4880086414237,lng:137.07289353288346,isActive:!0,area:"加茂郡川辺町"},{id:"client_39",name:"杉島 希",genderPreference:"指定なし",address:"加茂郡富加町滝田283-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50110204409342,lng:136.98395012382613,isActive:!0,area:"加茂郡富加町"},{id:"client_40",name:"村仲 尚",genderPreference:"女性希望",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.438698758555574,lng:137.02193085044868,isActive:!0,area:"美濃加茂市"},{id:"client_41",name:"村仲 鍬",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452301436877214,lng:137.02067008781682,isActive:!0,area:"美濃加茂市"},{id:"client_42",name:"松元 良",genderPreference:"女性希望",address:"美濃加茂市本郷町1丁目1番26号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.43827103816531,lng:137.01191566430634,isActive:!0,area:"美濃加茂市"},{id:"client_43",name:"栗山 年",genderPreference:"指定なし",address:"加茂郡富加町高畑258番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494121986748645,lng:136.98518245423062,isActive:!0,area:"加茂郡富加町"},{id:"client_44",name:"櫻井 あ",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉773番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.45138892205426,lng:137.01422771742352,isActive:!0,area:"美濃加茂市"},{id:"client_45",name:"河野 仁",genderPreference:"指定なし",address:"加茂郡富加町羽生909-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.490271641834966,lng:136.98727323288463,isActive:!0,area:"加茂郡富加町"},{id:"client_46",name:"浅野",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45202959233498,lng:137.01566783519402,isActive:!0,area:"美濃加茂市"},{id:"client_47",name:"渡邉 文",genderPreference:"指定なし",address:"加茂郡川辺町比久見505番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49415672848246,lng:137.0639961091595,isActive:!0,area:"加茂郡川辺町"},{id:"client_48",name:"渡邉直",genderPreference:"女性希望",address:"美濃加茂市蜂屋町上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43872942558895,lng:137.01354730683613,isActive:!0,area:"美濃加茂市"},{id:"client_49",name:"瀧戸 邦",genderPreference:"指定なし",address:"加茂郡富加町高畑815-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49012105422854,lng:137.00036018284152,isActive:!0,area:"加茂郡富加町"},{id:"client_50",name:"石原 ヤ",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50124112017079,lng:136.98382202932007,isActive:!0,area:"加茂郡富加町"},{id:"client_51",name:"石原 孝",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49328324234597,lng:136.9835128247142,isActive:!0,area:"加茂郡富加町"},{id:"client_52",name:"石田 友",genderPreference:"指定なし",address:"関市大杉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49271720267115,lng:136.91679407643252,isActive:!0,area:"関市"},{id:"client_53",name:"神園 昭",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1552-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445736819174996,lng:137.02080207291,isActive:!0,area:"美濃加茂市"},{id:"client_54",name:"細田 と",genderPreference:"指定なし",address:"加茂郡川辺町比久見927番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49138118249907,lng:137.0669797974694,isActive:!0,area:"加茂郡川辺町"},{id:"client_55",name:"織部 恒",genderPreference:"女性希望",address:"加茂郡富加町大山561-2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4956482083646,lng:136.98479580431297,isActive:!0,area:"加茂郡富加町"},{id:"client_56",name:"纐纈 芳",genderPreference:"指定なし",address:"美濃加茂市田島町2-1-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45002813499261,lng:137.0212204400497,isActive:!0,area:"美濃加茂市"},{id:"client_57",name:"纐纈美",genderPreference:"指定なし",address:"美濃加茂市大手町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4391119160273,lng:137.02387050933302,isActive:!0,area:"美濃加茂市"},{id:"client_58",name:"肥田 太",genderPreference:"指定なし",address:"可児市下恵土4146-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4312051032861,lng:137.05456974028345,isActive:!0,area:"可児市"},{id:"client_59",name:"菊池 二",genderPreference:"指定なし",address:"美濃加茂市加茂野町鷹之巣1712番地13",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44067140824593,lng:137.00812252064713,isActive:!0,area:"美濃加茂市"},{id:"client_60",name:"酒向 み",genderPreference:"指定なし",address:"美濃加茂市下米田町東栃井173番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.439305854394995,lng:137.02599237626308,isActive:!0,area:"美濃加茂市"},{id:"client_61",name:"鈴木 春",genderPreference:"女性希望",address:"美濃加茂市蜂屋町伊瀬920",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445308304721735,lng:137.02055837255097,isActive:!0,area:"美濃加茂市"},{id:"client_62",name:"長沼 善",genderPreference:"指定なし",address:"美濃加茂市富加町加治田665",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452051259062436,lng:137.01855573983298,isActive:!0,area:"美濃加茂市"},{id:"client_63",name:"馬場 と",genderPreference:"女性希望",address:"美濃加茂市太田町3519-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44993124386665,lng:137.02104853551123,isActive:!0,area:"美濃加茂市"},{id:"client_64",name:"高山 智",genderPreference:"指定なし",address:"美濃加茂市牧野1941番地16",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44532882741129,lng:137.00968272003644,isActive:!0,area:"美濃加茂市"},{id:"client_65",name:"髙井 千",genderPreference:"女性希望",address:"加茂郡富加町羽生1751番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.505370248825024,lng:136.9927463803301,isActive:!0,area:"加茂郡富加町"},{id:"client_66",name:"鹿野 和",genderPreference:"指定なし",address:"美濃加茂市山之上町1538番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44890607991325,lng:137.01711922971506,isActive:!0,area:"美濃加茂市"},{id:"client_67",name:"鹿野 義",genderPreference:"指定なし",address:"美濃加茂市山之上町6260番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43761631928377,lng:137.01824050932268,isActive:!0,area:"美濃加茂市"}],jr=[{id:"visit_1",clientId:"client_46",dayOfWeek:"金",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_2",clientId:"client_18",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_3",clientId:"client_21",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_4",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"生活２・１７９０円"},{id:"visit_5",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_6",clientId:"client_52",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_7",clientId:"client_52",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_8",clientId:"client_52",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_9",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_10",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_11",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_12",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_13",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_14",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_15",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_16",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_17",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_18",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_19",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_20",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_21",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_22",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_23",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_24",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_25",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_26",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_27",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_28",clientId:"client_50",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2200,serviceInfo:"生活３・２２００円"},{id:"visit_29",clientId:"client_50",dayOfWeek:"水",startTime:"12:30",endTime:"14:00",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_30",clientId:"client_2",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_31",clientId:"client_27",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_32",clientId:"client_6",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_33",clientId:"client_17",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:5870,serviceInfo:"障害身体・５８７０円・１２００円"},{id:"visit_34",clientId:"client_17",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_35",clientId:"client_17",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_36",clientId:"client_16",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_37",clientId:"client_26",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_38",clientId:"client_19",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_39",clientId:"client_19",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_40",clientId:"client_25",dayOfWeek:"月",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_41",clientId:"client_25",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_42",clientId:"client_25",dayOfWeek:"木",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_43",clientId:"client_25",dayOfWeek:"水",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_44",clientId:"client_25",dayOfWeek:"金",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_45",clientId:"client_55",dayOfWeek:"月",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_46",clientId:"client_55",dayOfWeek:"土",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_47",clientId:"client_9",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_48",clientId:"client_9",dayOfWeek:"火",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_49",clientId:"client_9",dayOfWeek:"木",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_50",clientId:"client_9",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_51",clientId:"client_9",dayOfWeek:"土",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_52",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_53",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_54",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_55",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_56",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_57",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_58",clientId:"client_9",dayOfWeek:"月",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_59",clientId:"client_9",dayOfWeek:"土",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_60",clientId:"client_9",dayOfWeek:"火",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_61",clientId:"client_9",dayOfWeek:"金",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_62",clientId:"client_9",dayOfWeek:"木",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_63",clientId:"client_10",dayOfWeek:"水",startTime:"10:00",endTime:"11:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_64",clientId:"client_10",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_65",clientId:"client_53",dayOfWeek:"水",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_66",clientId:"client_28",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_67",clientId:"client_28",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_68",clientId:"client_45",dayOfWeek:"金",startTime:"09:15",endTime:"10:15",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_69",clientId:"client_59",dayOfWeek:"月",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_70",clientId:"client_59",dayOfWeek:"水",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_71",clientId:"client_59",dayOfWeek:"金",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_72",clientId:"client_38",dayOfWeek:"月",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_73",clientId:"client_38",dayOfWeek:"水",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_74",clientId:"client_38",dayOfWeek:"金",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_75",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_76",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_77",clientId:"client_37",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_78",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_79",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_80",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_81",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_82",clientId:"client_37",dayOfWeek:"水",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_83",clientId:"client_37",dayOfWeek:"木",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_84",clientId:"client_37",dayOfWeek:"火",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_85",clientId:"client_37",dayOfWeek:"土",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_86",clientId:"client_37",dayOfWeek:"火",startTime:"17:00",endTime:"17:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_87",clientId:"client_37",dayOfWeek:"水",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_88",clientId:"client_37",dayOfWeek:"木",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_89",clientId:"client_36",dayOfWeek:"月",startTime:"15:30",endTime:"16:30",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_90",clientId:"client_36",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_91",clientId:"client_36",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_92",clientId:"client_57",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_93",clientId:"client_43",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_94",clientId:"client_43",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_95",clientId:"client_43",dayOfWeek:"金",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_96",clientId:"client_43",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_97",clientId:"client_56",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害・４０４０円・１２００円"},{id:"visit_98",clientId:"client_32",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_99",clientId:"client_44",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_100",clientId:"client_44",dayOfWeek:"火",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_101",clientId:"client_44",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_102",clientId:"client_44",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_103",clientId:"client_60",dayOfWeek:"火",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_104",clientId:"client_60",dayOfWeek:"木",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_105",clientId:"client_60",dayOfWeek:"土",startTime:"08:10",endTime:"09:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_106",clientId:"client_3",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_107",clientId:"client_3",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_108",clientId:"client_5",dayOfWeek:"水",startTime:"12:00",endTime:"13:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_109",clientId:"client_4",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_110",clientId:"client_4",dayOfWeek:"火",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_111",clientId:"client_4",dayOfWeek:"水",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_112",clientId:"client_4",dayOfWeek:"木",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_113",clientId:"client_4",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_114",clientId:"client_4",dayOfWeek:"土",startTime:"16:30",endTime:"17:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_115",clientId:"client_66",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_116",clientId:"client_67",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_117",clientId:"client_39",dayOfWeek:"月",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_118",clientId:"client_61",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_119",clientId:"client_61",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_120",clientId:"client_65",dayOfWeek:"月",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_121",clientId:"client_65",dayOfWeek:"火",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_122",clientId:"client_65",dayOfWeek:"水",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_123",clientId:"client_65",dayOfWeek:"木",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_124",clientId:"client_65",dayOfWeek:"金",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_125",clientId:"client_65",dayOfWeek:"土",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_126",clientId:"client_65",dayOfWeek:"月",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_127",clientId:"client_65",dayOfWeek:"水",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_128",clientId:"client_65",dayOfWeek:"木",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_129",clientId:"client_65",dayOfWeek:"金",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_130",clientId:"client_65",dayOfWeek:"土",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_131",clientId:"client_65",dayOfWeek:"火",startTime:"12:10",endTime:"12:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_132",clientId:"client_65",dayOfWeek:"月",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_133",clientId:"client_65",dayOfWeek:"水",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_134",clientId:"client_65",dayOfWeek:"火",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_135",clientId:"client_65",dayOfWeek:"金",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_136",clientId:"client_65",dayOfWeek:"土",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_137",clientId:"client_64",dayOfWeek:"火",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_138",clientId:"client_64",dayOfWeek:"木",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_139",clientId:"client_64",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_140",clientId:"client_49",dayOfWeek:"水",startTime:"12:15",endTime:"13:15",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_141",clientId:"client_49",dayOfWeek:"土",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_142",clientId:"client_14",dayOfWeek:"水",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_143",clientId:"client_15",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_144",clientId:"client_15",dayOfWeek:"水",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_145",clientId:"client_15",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_146",clientId:"client_24",dayOfWeek:"火",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_147",clientId:"client_24",dayOfWeek:"木",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_148",clientId:"client_7",dayOfWeek:"月",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_149",clientId:"client_7",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_150",clientId:"client_1",dayOfWeek:"月",startTime:"15:30",endTime:"16:00",duration:60,income:3090,serviceInfo:"障害家事・１０６０円・１０１０円"},{id:"visit_151",clientId:"client_1",dayOfWeek:"水",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_152",clientId:"client_1",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_153",clientId:"client_62",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_154",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_155",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_156",clientId:"client_58",dayOfWeek:"月",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_157",clientId:"client_58",dayOfWeek:"水",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_158",clientId:"client_58",dayOfWeek:"火",startTime:"11:45",endTime:"12:15",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_159",clientId:"client_58",dayOfWeek:"木",startTime:"13:00",endTime:"13:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_160",clientId:"client_58",dayOfWeek:"金",startTime:"12:30",endTime:"13:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_161",clientId:"client_33",dayOfWeek:"木",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_162",clientId:"client_35",dayOfWeek:"月",startTime:"10:40",endTime:"11:40",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_163",clientId:"client_34",dayOfWeek:"火",startTime:"07:30",endTime:"08:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_164",clientId:"client_30",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_165",clientId:"client_29",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_166",clientId:"client_31",dayOfWeek:"木",startTime:"09:30",endTime:"10:20",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_167",clientId:"client_54",dayOfWeek:"火",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_168",clientId:"client_54",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_169",clientId:"client_54",dayOfWeek:"木",startTime:"08:15",endTime:"09:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_170",clientId:"client_8",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_171",clientId:"client_42",dayOfWeek:"火",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_172",clientId:"client_42",dayOfWeek:"金",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_173",clientId:"client_42",dayOfWeek:"水",startTime:"14:45",endTime:"16:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_174",clientId:"client_23",dayOfWeek:"土",startTime:"15:00",endTime:"15:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_175",clientId:"client_22",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_176",clientId:"client_41",dayOfWeek:"火",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_177",clientId:"client_40",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_178",clientId:"client_40",dayOfWeek:"木",startTime:"11:45",endTime:"12:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_179",clientId:"client_40",dayOfWeek:"金",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_180",clientId:"client_20",dayOfWeek:"月",startTime:"17:00",endTime:"18:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_181",clientId:"client_12",dayOfWeek:"火",startTime:"15:30",endTime:"16:15",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_182",clientId:"client_12",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_183",clientId:"client_11",dayOfWeek:"月",startTime:"12:00",endTime:"12:50",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_184",clientId:"client_48",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_185",clientId:"client_48",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_186",clientId:"client_47",dayOfWeek:"土",startTime:"14:15",endTime:"15:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_187",clientId:"client_13",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"}];document.addEventListener("DOMContentLoaded",()=>{var i,e,n;console.log("🏠 CareRoute 起動中..."),nd(),Jd();try{ed(async(s,o)=>{if(o){M(o,"error"),Sn();return}s?(console.log("✅ ログイン:",s.email),kn(s),await Vt("dashboard")):Sn()})}catch(s){console.warn("Firebase未設定のためデモモードで起動します:",s),Sn()}(i=document.getElementById("btn-logout"))==null||i.addEventListener("click",async()=>{try{await id(),M("ログアウトしました","info")}catch{M("ログアウトに失敗しました","error")}}),(e=document.getElementById("btn-demo-mode"))==null||e.addEventListener("click",async()=>{kn({displayName:"管理者（デモ）",email:"admin@careroute.local",photoURL:""}),(await ae()).length===0&&(M("デモデータを自動投入しています...","info"),await Wn(!0)),await Vt("dashboard"),M("管理者デモモードで起動しました","info")}),(n=document.getElementById("btn-staff-demo-mode"))==null||n.addEventListener("click",async()=>{kn({displayName:"現場スタッフ（デモ）",email:"staff@careroute.local",photoURL:""}),(await ae()).length===0&&(M("デモデータを自動投入しています...","info"),await Wn(!0)),await Vt("my-schedule"),M("スタッフデモモードで起動しました","info")})});function Sn(){document.getElementById("login-screen").style.display="flex",document.getElementById("main-app").style.display="none",document.getElementById("nav-revenue").style.display="none"}function kn(i){document.getElementById("login-screen").style.display="none",document.getElementById("main-app").style.display="flex";const e=document.getElementById("user-avatar"),n=document.getElementById("user-name");e&&(e.src=i.photoURL||""),n&&(n.textContent=i.displayName||i.email),window.isAdmin=i.email==="admin@careroute.local"||i.email==="demo@careroute.local";const s=window.isAdmin?"flex":"none",o=window.isAdmin?"none":"flex";document.getElementById("nav-dashboard").style.display=s,document.getElementById("nav-map").style.display=s,document.getElementById("nav-staff").style.display=s,document.getElementById("nav-client").style.display=s,document.getElementById("nav-schedule").style.display=s;const l=document.getElementById("nav-calendar");l&&(l.style.display=s),document.getElementById("nav-matching").style.display=s;const c=document.getElementById("nav-revenue");c&&(c.style.display=s);const u=document.getElementById("nav-my-schedule");u&&(u.style.display=o),Xd()}function Xd(){if(document.getElementById("btn-load-demo"))return;const i=document.querySelector(".sidebar-nav"),e=document.createElement("li");e.className="nav-item",e.id="btn-load-demo",e.innerHTML=`
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `,e.addEventListener("click",Wn),i.appendChild(e)}async function Wn(i=!1){const e=document.getElementById("btn-load-demo");if(!(!i&&!confirm(`デモデータ（職員6名・利用者20名）を投入しますか？
既存データには影響しません。`))){e&&(e.innerHTML=`
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `);try{const n=await ae(),s=await ue();if(n.length>0||s.length>0){if(!i&&!confirm("既存のデータを全て削除し、新しいエクセルデータを投入しますか？")){e&&(e.innerHTML=`
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `);return}typeof Rr=="function"?await Rr():(localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"))}for(const u of Fr)await wo(u);M(`職員 ${Fr.length}名 を登録しました`,"success");for(const u of Vr)await Eo(u);M(`利用者 ${Vr.length}名 を登録しました`,"success");const o=new Date,l=o.getDay(),c={日:0,月:1,火:2,水:3,木:4,金:5,土:6};for(const u of jr){let p=new Date(o);if(u.dayOfWeek&&c[u.dayOfWeek]!==void 0){const k=c[u.dayOfWeek]-l;p.setDate(o.getDate()+k)}const g=p.getFullYear(),E=String(p.getMonth()+1).padStart(2,"0"),b=String(p.getDate()).padStart(2,"0"),I=`${g}-${E}-${b}`;await Bi({...u,date:I,status:"scheduled"})}M(`予定 ${jr.length}件 を登録しました`,"success"),await Vt("dashboard"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `,setTimeout(()=>e.remove(),3e3)}catch(n){console.error("デモデータ投入エラー:",n),M("デモデータの投入に失敗しました: "+n.message,"error"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `}}}
