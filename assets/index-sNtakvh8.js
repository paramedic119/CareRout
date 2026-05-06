(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const Qo=()=>{};var $s={};/**
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
 */const Ar=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Zo=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=i[n++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=i[n++],c=i[n++],u=i[n++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=i[n++],c=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},xr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const l=i[o],c=o+1<i.length,u=c?i[o+1]:0,p=o+2<i.length,v=p?i[o+2]:0,E=l>>2,I=(l&3)<<4|u>>4;let b=(u&15)<<2|v>>6,k=v&63;p||(k=64,c||(b=64)),s.push(n[E],n[I],n[b],n[k])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ar(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Zo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const l=n[i.charAt(o++)],u=o<i.length?n[i.charAt(o)]:0;++o;const v=o<i.length?n[i.charAt(o)]:64;++o;const I=o<i.length?n[i.charAt(o)]:64;if(++o,l==null||u==null||v==null||I==null)throw new ea;const b=l<<2|u>>4;if(s.push(b),v!==64){const k=u<<4&240|v>>2;if(s.push(k),I!==64){const D=v<<6&192|I;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ea extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ta=function(i){const e=Ar(i);return xr.encodeByteArray(e,!0)},Or=function(i){return ta(i).replace(/\./g,"")},Dr=function(i){try{return xr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ia(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const na=()=>ia().__FIREBASE_DEFAULTS__,sa=()=>{if(typeof process>"u"||typeof $s>"u")return;const i=$s.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ra=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Dr(i[1]);return e&&JSON.parse(e)},oa=()=>{try{return Qo()||na()||sa()||ra()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},aa=i=>{var e;return(e=oa())==null?void 0:e[`_${i}`]};/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function la(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function ca(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function da(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ua(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ha(){try{return typeof indexedDB=="object"}catch{return!1}}function fa(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
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
 */const ma="FirebaseError";class Le extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ma,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rt.prototype.create)}}class Rt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?pa(l,s):"Error",u=`${this.serviceName}: ${c} (${o}).`;return new Le(o,u,s)}}function pa(i,e){return i.replace(ga,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ga=/\{\$([^}]+)}/g;/**
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
 */function Pr(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function va(i,e){const n=new ya(i,e);return n.subscribe.bind(n)}class ya{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");_a(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Qi),o.error===void 0&&(o.error=Qi),o.complete===void 0&&(o.complete=Qi);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _a(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Qi(){}/**
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
 */function Mt(i){return i&&i._delegate?i._delegate:i}/**
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
 */function Lr(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}class tt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var j;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(j||(j={}));const Ia={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Ta=j.INFO,wa={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},ba=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=wa[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bn{constructor(e){this.name=e,this._logLevel=Ta,this._logHandler=ba,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ia[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Sa=(i,e)=>e.some(n=>i instanceof n);let Bs,Ws;function Ea(){return Bs||(Bs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ka(){return Ws||(Ws=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cr=new WeakMap,un=new WeakMap,Nr=new WeakMap,Zi=new WeakMap,Sn=new WeakMap;function Aa(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{n(xe(i.result)),o()},c=()=>{s(i.error),o()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Cr.set(n,i)}).catch(()=>{}),Sn.set(e,i),e}function xa(i){if(un.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{n(),o()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});un.set(i,e)}let hn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return un.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Nr.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xe(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Oa(i){hn=i(hn)}function Da(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(en(this),e,...n);return Nr.set(s,e.sort?e.sort():[e]),xe(s)}:ka().includes(i)?function(...e){return i.apply(en(this),e),xe(Cr.get(this))}:function(...e){return xe(i.apply(en(this),e))}}function Pa(i){return typeof i=="function"?Da(i):(i instanceof IDBTransaction&&xa(i),Sa(i,Ea())?new Proxy(i,hn):i)}function xe(i){if(i instanceof IDBRequest)return Aa(i);if(Zi.has(i))return Zi.get(i);const e=Pa(i);return e!==i&&(Zi.set(i,e),Sn.set(e,i)),e}const en=i=>Sn.get(i);function La(i,e,{blocked:n,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(i,e),u=xe(c);return s&&c.addEventListener("upgradeneeded",p=>{s(xe(c.result),p.oldVersion,p.newVersion,xe(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),u.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),u}const Ca=["get","getKey","getAll","getAllKeys","count"],Na=["put","add","delete","clear"],tn=new Map;function Us(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(tn.get(e))return tn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=Na.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Ca.includes(n)))return;const l=async function(c,...u){const p=this.transaction(c,o?"readwrite":"readonly");let v=p.store;return s&&(v=v.index(u.shift())),(await Promise.all([v[n](...u),o&&p.done]))[0]};return tn.set(e,l),l}Oa(i=>({...i,get:(e,n,s)=>Us(e,n)||i.get(e,n,s),has:(e,n)=>!!Us(e,n)||i.has(e,n)}));/**
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
 */class Ra{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ma(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ma(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fn="@firebase/app",Fs="0.14.11";/**
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
 */const ye=new bn("@firebase/app"),$a="@firebase/app-compat",Ba="@firebase/analytics-compat",Wa="@firebase/analytics",Ua="@firebase/app-check-compat",Fa="@firebase/app-check",Va="@firebase/auth",ja="@firebase/auth-compat",qa="@firebase/database",za="@firebase/data-connect",Ha="@firebase/database-compat",Ga="@firebase/functions",Ka="@firebase/functions-compat",Ja="@firebase/installations",Xa="@firebase/installations-compat",Ya="@firebase/messaging",Qa="@firebase/messaging-compat",Za="@firebase/performance",el="@firebase/performance-compat",tl="@firebase/remote-config",il="@firebase/remote-config-compat",nl="@firebase/storage",sl="@firebase/storage-compat",rl="@firebase/firestore",ol="@firebase/ai",al="@firebase/firestore-compat",ll="firebase",cl="12.12.0",dl={[fn]:"fire-core",[$a]:"fire-core-compat",[Wa]:"fire-analytics",[Ba]:"fire-analytics-compat",[Fa]:"fire-app-check",[Ua]:"fire-app-check-compat",[Va]:"fire-auth",[ja]:"fire-auth-compat",[qa]:"fire-rtdb",[za]:"fire-data-connect",[Ha]:"fire-rtdb-compat",[Ga]:"fire-fn",[Ka]:"fire-fn-compat",[Ja]:"fire-iid",[Xa]:"fire-iid-compat",[Ya]:"fire-fcm",[Qa]:"fire-fcm-compat",[Za]:"fire-perf",[el]:"fire-perf-compat",[tl]:"fire-rc",[il]:"fire-rc-compat",[nl]:"fire-gcs",[sl]:"fire-gcs-compat",[rl]:"fire-fst",[al]:"fire-fst-compat",[ol]:"fire-vertex","fire-js":"fire-js",[ll]:"fire-js-all"};/**
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
 */const ul=new Map,hl=new Map,Vs=new Map;function js(i,e){try{i.container.addComponent(e)}catch(n){ye.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function it(i){const e=i.name;if(Vs.has(e))return ye.debug(`There were multiple attempts to register component ${e}.`),!1;Vs.set(e,i);for(const n of ul.values())js(n,i);for(const n of hl.values())js(n,i);return!0}function Be(i){return i==null?!1:i.settings!==void 0}/**
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
 */const fl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new Rt("app","Firebase",fl);/**
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
 */const yi=cl;function Oe(i,e,n){let s=dl[i]??i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ye.warn(c.join(" "));return}it(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ml="firebase-heartbeat-database",pl=1,Ot="firebase-heartbeat-store";let nn=null;function Rr(){return nn||(nn=La(ml,pl,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ot)}catch(n){console.warn(n)}}}}).catch(i=>{throw En.create("idb-open",{originalErrorMessage:i.message})})),nn}async function gl(i){try{const n=(await Rr()).transaction(Ot),s=await n.objectStore(Ot).get(Mr(i));return await n.done,s}catch(e){if(e instanceof Le)ye.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ye.warn(n.message)}}}async function qs(i,e){try{const s=(await Rr()).transaction(Ot,"readwrite");await s.objectStore(Ot).put(e,Mr(i)),await s.done}catch(n){if(n instanceof Le)ye.warn(n.message);else{const s=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ye.warn(s.message)}}}function Mr(i){return`${i.name}!${i.options.appId}`}/**
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
 */const vl=1024,yl=30;class _l{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=zs();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>yl){const c=wl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ye.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zs(),{heartbeatsToSend:s,unsentEntries:o}=Il(this._heartbeatsCache.heartbeats),l=Or(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return ye.warn(n),""}}}function zs(){return new Date().toISOString().substring(0,10)}function Il(i,e=vl){const n=[];let s=i.slice();for(const o of i){const l=n.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Hs(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Hs(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Tl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ha()?fa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hs(i){return Or(JSON.stringify({version:2,heartbeats:i})).length}function wl(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function bl(i){it(new tt("platform-logger",e=>new Ra(e),"PRIVATE")),it(new tt("heartbeat",e=>new _l(e),"PRIVATE")),Oe(fn,Fs,i),Oe(fn,Fs,"esm2020"),Oe("fire-js","")}bl("");var Sl="firebase",El="12.12.1";/**
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
 */Oe(Sl,El,"app");var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kn;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,h){function m(){}m.prototype=h.prototype,g.F=h.prototype,g.prototype=new m,g.prototype.constructor=g,g.D=function(_,y,T){for(var f=Array(arguments.length-2),H=2;H<arguments.length;H++)f[H-2]=arguments[H];return h.prototype[y].apply(_,f)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,h,m){m||(m=0);const _=Array(16);if(typeof h=="string")for(var y=0;y<16;++y)_[y]=h.charCodeAt(m++)|h.charCodeAt(m++)<<8|h.charCodeAt(m++)<<16|h.charCodeAt(m++)<<24;else for(y=0;y<16;++y)_[y]=h[m++]|h[m++]<<8|h[m++]<<16|h[m++]<<24;h=g.g[0],m=g.g[1],y=g.g[2];let T=g.g[3],f;f=h+(T^m&(y^T))+_[0]+3614090360&4294967295,h=m+(f<<7&4294967295|f>>>25),f=T+(y^h&(m^y))+_[1]+3905402710&4294967295,T=h+(f<<12&4294967295|f>>>20),f=y+(m^T&(h^m))+_[2]+606105819&4294967295,y=T+(f<<17&4294967295|f>>>15),f=m+(h^y&(T^h))+_[3]+3250441966&4294967295,m=y+(f<<22&4294967295|f>>>10),f=h+(T^m&(y^T))+_[4]+4118548399&4294967295,h=m+(f<<7&4294967295|f>>>25),f=T+(y^h&(m^y))+_[5]+1200080426&4294967295,T=h+(f<<12&4294967295|f>>>20),f=y+(m^T&(h^m))+_[6]+2821735955&4294967295,y=T+(f<<17&4294967295|f>>>15),f=m+(h^y&(T^h))+_[7]+4249261313&4294967295,m=y+(f<<22&4294967295|f>>>10),f=h+(T^m&(y^T))+_[8]+1770035416&4294967295,h=m+(f<<7&4294967295|f>>>25),f=T+(y^h&(m^y))+_[9]+2336552879&4294967295,T=h+(f<<12&4294967295|f>>>20),f=y+(m^T&(h^m))+_[10]+4294925233&4294967295,y=T+(f<<17&4294967295|f>>>15),f=m+(h^y&(T^h))+_[11]+2304563134&4294967295,m=y+(f<<22&4294967295|f>>>10),f=h+(T^m&(y^T))+_[12]+1804603682&4294967295,h=m+(f<<7&4294967295|f>>>25),f=T+(y^h&(m^y))+_[13]+4254626195&4294967295,T=h+(f<<12&4294967295|f>>>20),f=y+(m^T&(h^m))+_[14]+2792965006&4294967295,y=T+(f<<17&4294967295|f>>>15),f=m+(h^y&(T^h))+_[15]+1236535329&4294967295,m=y+(f<<22&4294967295|f>>>10),f=h+(y^T&(m^y))+_[1]+4129170786&4294967295,h=m+(f<<5&4294967295|f>>>27),f=T+(m^y&(h^m))+_[6]+3225465664&4294967295,T=h+(f<<9&4294967295|f>>>23),f=y+(h^m&(T^h))+_[11]+643717713&4294967295,y=T+(f<<14&4294967295|f>>>18),f=m+(T^h&(y^T))+_[0]+3921069994&4294967295,m=y+(f<<20&4294967295|f>>>12),f=h+(y^T&(m^y))+_[5]+3593408605&4294967295,h=m+(f<<5&4294967295|f>>>27),f=T+(m^y&(h^m))+_[10]+38016083&4294967295,T=h+(f<<9&4294967295|f>>>23),f=y+(h^m&(T^h))+_[15]+3634488961&4294967295,y=T+(f<<14&4294967295|f>>>18),f=m+(T^h&(y^T))+_[4]+3889429448&4294967295,m=y+(f<<20&4294967295|f>>>12),f=h+(y^T&(m^y))+_[9]+568446438&4294967295,h=m+(f<<5&4294967295|f>>>27),f=T+(m^y&(h^m))+_[14]+3275163606&4294967295,T=h+(f<<9&4294967295|f>>>23),f=y+(h^m&(T^h))+_[3]+4107603335&4294967295,y=T+(f<<14&4294967295|f>>>18),f=m+(T^h&(y^T))+_[8]+1163531501&4294967295,m=y+(f<<20&4294967295|f>>>12),f=h+(y^T&(m^y))+_[13]+2850285829&4294967295,h=m+(f<<5&4294967295|f>>>27),f=T+(m^y&(h^m))+_[2]+4243563512&4294967295,T=h+(f<<9&4294967295|f>>>23),f=y+(h^m&(T^h))+_[7]+1735328473&4294967295,y=T+(f<<14&4294967295|f>>>18),f=m+(T^h&(y^T))+_[12]+2368359562&4294967295,m=y+(f<<20&4294967295|f>>>12),f=h+(m^y^T)+_[5]+4294588738&4294967295,h=m+(f<<4&4294967295|f>>>28),f=T+(h^m^y)+_[8]+2272392833&4294967295,T=h+(f<<11&4294967295|f>>>21),f=y+(T^h^m)+_[11]+1839030562&4294967295,y=T+(f<<16&4294967295|f>>>16),f=m+(y^T^h)+_[14]+4259657740&4294967295,m=y+(f<<23&4294967295|f>>>9),f=h+(m^y^T)+_[1]+2763975236&4294967295,h=m+(f<<4&4294967295|f>>>28),f=T+(h^m^y)+_[4]+1272893353&4294967295,T=h+(f<<11&4294967295|f>>>21),f=y+(T^h^m)+_[7]+4139469664&4294967295,y=T+(f<<16&4294967295|f>>>16),f=m+(y^T^h)+_[10]+3200236656&4294967295,m=y+(f<<23&4294967295|f>>>9),f=h+(m^y^T)+_[13]+681279174&4294967295,h=m+(f<<4&4294967295|f>>>28),f=T+(h^m^y)+_[0]+3936430074&4294967295,T=h+(f<<11&4294967295|f>>>21),f=y+(T^h^m)+_[3]+3572445317&4294967295,y=T+(f<<16&4294967295|f>>>16),f=m+(y^T^h)+_[6]+76029189&4294967295,m=y+(f<<23&4294967295|f>>>9),f=h+(m^y^T)+_[9]+3654602809&4294967295,h=m+(f<<4&4294967295|f>>>28),f=T+(h^m^y)+_[12]+3873151461&4294967295,T=h+(f<<11&4294967295|f>>>21),f=y+(T^h^m)+_[15]+530742520&4294967295,y=T+(f<<16&4294967295|f>>>16),f=m+(y^T^h)+_[2]+3299628645&4294967295,m=y+(f<<23&4294967295|f>>>9),f=h+(y^(m|~T))+_[0]+4096336452&4294967295,h=m+(f<<6&4294967295|f>>>26),f=T+(m^(h|~y))+_[7]+1126891415&4294967295,T=h+(f<<10&4294967295|f>>>22),f=y+(h^(T|~m))+_[14]+2878612391&4294967295,y=T+(f<<15&4294967295|f>>>17),f=m+(T^(y|~h))+_[5]+4237533241&4294967295,m=y+(f<<21&4294967295|f>>>11),f=h+(y^(m|~T))+_[12]+1700485571&4294967295,h=m+(f<<6&4294967295|f>>>26),f=T+(m^(h|~y))+_[3]+2399980690&4294967295,T=h+(f<<10&4294967295|f>>>22),f=y+(h^(T|~m))+_[10]+4293915773&4294967295,y=T+(f<<15&4294967295|f>>>17),f=m+(T^(y|~h))+_[1]+2240044497&4294967295,m=y+(f<<21&4294967295|f>>>11),f=h+(y^(m|~T))+_[8]+1873313359&4294967295,h=m+(f<<6&4294967295|f>>>26),f=T+(m^(h|~y))+_[15]+4264355552&4294967295,T=h+(f<<10&4294967295|f>>>22),f=y+(h^(T|~m))+_[6]+2734768916&4294967295,y=T+(f<<15&4294967295|f>>>17),f=m+(T^(y|~h))+_[13]+1309151649&4294967295,m=y+(f<<21&4294967295|f>>>11),f=h+(y^(m|~T))+_[4]+4149444226&4294967295,h=m+(f<<6&4294967295|f>>>26),f=T+(m^(h|~y))+_[11]+3174756917&4294967295,T=h+(f<<10&4294967295|f>>>22),f=y+(h^(T|~m))+_[2]+718787259&4294967295,y=T+(f<<15&4294967295|f>>>17),f=m+(T^(y|~h))+_[9]+3951481745&4294967295,g.g[0]=g.g[0]+h&4294967295,g.g[1]=g.g[1]+(y+(f<<21&4294967295|f>>>11))&4294967295,g.g[2]=g.g[2]+y&4294967295,g.g[3]=g.g[3]+T&4294967295}s.prototype.v=function(g,h){h===void 0&&(h=g.length);const m=h-this.blockSize,_=this.C;let y=this.h,T=0;for(;T<h;){if(y==0)for(;T<=m;)o(this,g,T),T+=this.blockSize;if(typeof g=="string"){for(;T<h;)if(_[y++]=g.charCodeAt(T++),y==this.blockSize){o(this,_),y=0;break}}else for(;T<h;)if(_[y++]=g[T++],y==this.blockSize){o(this,_),y=0;break}}this.h=y,this.o+=h},s.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var h=1;h<g.length-8;++h)g[h]=0;h=this.o*8;for(var m=g.length-8;m<g.length;++m)g[m]=h&255,h/=256;for(this.v(g),g=Array(16),h=0,m=0;m<4;++m)for(let _=0;_<32;_+=8)g[h++]=this.g[m]>>>_&255;return g};function l(g,h){var m=u;return Object.prototype.hasOwnProperty.call(m,g)?m[g]:m[g]=h(g)}function c(g,h){this.h=h;const m=[];let _=!0;for(let y=g.length-1;y>=0;y--){const T=g[y]|0;_&&T==h||(m[y]=T,_=!1)}this.g=m}var u={};function p(g){return-128<=g&&g<128?l(g,function(h){return new c([h|0],h<0?-1:0)}):new c([g|0],g<0?-1:0)}function v(g){if(isNaN(g)||!isFinite(g))return I;if(g<0)return P(v(-g));const h=[];let m=1;for(let _=0;g>=m;_++)h[_]=g/m|0,m*=4294967296;return new c(h,0)}function E(g,h){if(g.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(g.charAt(0)=="-")return P(E(g.substring(1),h));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=v(Math.pow(h,8));let _=I;for(let T=0;T<g.length;T+=8){var y=Math.min(8,g.length-T);const f=parseInt(g.substring(T,T+y),h);y<8?(y=v(Math.pow(h,y)),_=_.j(y).add(v(f))):(_=_.j(m),_=_.add(v(f)))}return _}var I=p(0),b=p(1),k=p(16777216);i=c.prototype,i.m=function(){if(A(this))return-P(this).m();let g=0,h=1;for(let m=0;m<this.g.length;m++){const _=this.i(m);g+=(_>=0?_:4294967296+_)*h,h*=4294967296}return g},i.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(D(this))return"0";if(A(this))return"-"+P(this).toString(g);const h=v(Math.pow(g,6));var m=this;let _="";for(;;){const y=N(m,h).g;m=x(m,y.j(h));let T=((m.g.length>0?m.g[0]:m.h)>>>0).toString(g);if(m=y,D(m))return T+_;for(;T.length<6;)T="0"+T;_=T+_}},i.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function D(g){if(g.h!=0)return!1;for(let h=0;h<g.g.length;h++)if(g.g[h]!=0)return!1;return!0}function A(g){return g.h==-1}i.l=function(g){return g=x(this,g),A(g)?-1:D(g)?0:1};function P(g){const h=g.g.length,m=[];for(let _=0;_<h;_++)m[_]=~g.g[_];return new c(m,~g.h).add(b)}i.abs=function(){return A(this)?P(this):this},i.add=function(g){const h=Math.max(this.g.length,g.g.length),m=[];let _=0;for(let y=0;y<=h;y++){let T=_+(this.i(y)&65535)+(g.i(y)&65535),f=(T>>>16)+(this.i(y)>>>16)+(g.i(y)>>>16);_=f>>>16,T&=65535,f&=65535,m[y]=f<<16|T}return new c(m,m[m.length-1]&-2147483648?-1:0)};function x(g,h){return g.add(P(h))}i.j=function(g){if(D(this)||D(g))return I;if(A(this))return A(g)?P(this).j(P(g)):P(P(this).j(g));if(A(g))return P(this.j(P(g)));if(this.l(k)<0&&g.l(k)<0)return v(this.m()*g.m());const h=this.g.length+g.g.length,m=[];for(var _=0;_<2*h;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(let y=0;y<g.g.length;y++){const T=this.i(_)>>>16,f=this.i(_)&65535,H=g.i(y)>>>16,ce=g.i(y)&65535;m[2*_+2*y]+=f*ce,L(m,2*_+2*y),m[2*_+2*y+1]+=T*ce,L(m,2*_+2*y+1),m[2*_+2*y+1]+=f*H,L(m,2*_+2*y+1),m[2*_+2*y+2]+=T*H,L(m,2*_+2*y+2)}for(g=0;g<h;g++)m[g]=m[2*g+1]<<16|m[2*g];for(g=h;g<2*h;g++)m[g]=0;return new c(m,0)};function L(g,h){for(;(g[h]&65535)!=g[h];)g[h+1]+=g[h]>>>16,g[h]&=65535,h++}function R(g,h){this.g=g,this.h=h}function N(g,h){if(D(h))throw Error("division by zero");if(D(g))return new R(I,I);if(A(g))return h=N(P(g),h),new R(P(h.g),P(h.h));if(A(h))return h=N(g,P(h)),new R(P(h.g),h.h);if(g.g.length>30){if(A(g)||A(h))throw Error("slowDivide_ only works with positive integers.");for(var m=b,_=h;_.l(g)<=0;)m=B(m),_=B(_);var y=V(m,1),T=V(_,1);for(_=V(_,2),m=V(m,2);!D(_);){var f=T.add(_);f.l(g)<=0&&(y=y.add(m),T=f),_=V(_,1),m=V(m,1)}return h=x(g,y.j(h)),new R(y,h)}for(y=I;g.l(h)>=0;){for(m=Math.max(1,Math.floor(g.m()/h.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),T=v(m),f=T.j(h);A(f)||f.l(g)>0;)m-=_,T=v(m),f=T.j(h);D(T)&&(T=b),y=y.add(T),g=x(g,f)}return new R(y,g)}i.B=function(g){return N(this,g).h},i.and=function(g){const h=Math.max(this.g.length,g.g.length),m=[];for(let _=0;_<h;_++)m[_]=this.i(_)&g.i(_);return new c(m,this.h&g.h)},i.or=function(g){const h=Math.max(this.g.length,g.g.length),m=[];for(let _=0;_<h;_++)m[_]=this.i(_)|g.i(_);return new c(m,this.h|g.h)},i.xor=function(g){const h=Math.max(this.g.length,g.g.length),m=[];for(let _=0;_<h;_++)m[_]=this.i(_)^g.i(_);return new c(m,this.h^g.h)};function B(g){const h=g.g.length+1,m=[];for(let _=0;_<h;_++)m[_]=g.i(_)<<1|g.i(_-1)>>>31;return new c(m,g.h)}function V(g,h){const m=h>>5;h%=32;const _=g.g.length-m,y=[];for(let T=0;T<_;T++)y[T]=h>0?g.i(T+m)>>>h|g.i(T+m+1)<<32-h:g.i(T+m);return new c(y,g.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=E,kn=c}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});var Yt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yt=="object"&&Yt];for(var r=0;r<t.length;++r){var a=t[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=n(this);function o(t,r){if(r)e:{var a=s;t=t.split(".");for(var d=0;d<t.length-1;d++){var w=t[d];if(!(w in a))break e;a=a[w]}t=t[t.length-1],d=a[t],r=r(d),r!=d&&r!=null&&e(a,t,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(t){return t||function(r){var a=[],d;for(d in r)Object.prototype.hasOwnProperty.call(r,d)&&a.push([d,r[d]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function p(t,r,a){return t.call.apply(t.bind,arguments)}function v(t,r,a){return v=p,v.apply(null,arguments)}function E(t,r){var a=Array.prototype.slice.call(arguments,1);return function(){var d=a.slice();return d.push.apply(d,arguments),t.apply(this,d)}}function I(t,r){function a(){}a.prototype=r.prototype,t.Z=r.prototype,t.prototype=new a,t.prototype.constructor=t,t.Ob=function(d,w,S){for(var O=Array(arguments.length-2),M=2;M<arguments.length;M++)O[M-2]=arguments[M];return r.prototype[w].apply(d,O)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function k(t){const r=t.length;if(r>0){const a=Array(r);for(let d=0;d<r;d++)a[d]=t[d];return a}return[]}function D(t,r){for(let d=1;d<arguments.length;d++){const w=arguments[d];var a=typeof w;if(a=a!="object"?a:w?Array.isArray(w)?"array":a:"null",a=="array"||a=="object"&&typeof w.length=="number"){a=t.length||0;const S=w.length||0;t.length=a+S;for(let O=0;O<S;O++)t[a+O]=w[O]}else t.push(w)}}class A{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function P(t){c.setTimeout(()=>{throw t},0)}function x(){var t=g;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class L{constructor(){this.h=this.g=null}add(r,a){const d=R.get();d.set(r,a),this.h?this.h.next=d:this.g=d,this.h=d}}var R=new A(()=>new N,t=>t.reset());class N{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let B,V=!1,g=new L,h=()=>{const t=Promise.resolve(void 0);B=()=>{t.then(m)}};function m(){for(var t;t=x();){try{t.h.call(t.g)}catch(a){P(a)}var r=R;r.j(t),r.h<100&&(r.h++,t.next=r.g,r.g=t)}V=!1}function _(){this.u=this.u,this.C=this.C}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};c.addEventListener("test",a,r),c.removeEventListener("test",a,r)}catch{}return t}();function f(t){return/^[\s\xa0]*$/.test(t)}function H(t,r){y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,r)}I(H,y),H.prototype.init=function(t,r){const a=this.type=t.type,d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget,r||(a=="mouseover"?r=t.fromElement:a=="mouseout"&&(r=t.toElement)),this.relatedTarget=r,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&H.Z.h.call(this)},H.prototype.h=function(){H.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ce="closure_listenable_"+(Math.random()*1e6|0),yo=0;function _o(t,r,a,d,w){this.listener=t,this.proxy=null,this.src=r,this.type=a,this.capture=!!d,this.ha=w,this.key=++yo,this.da=this.fa=!1}function Wt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ut(t,r,a){for(const d in t)r.call(a,t[d],d,t)}function Io(t,r){for(const a in t)r.call(void 0,t[a],a,t)}function Bn(t){const r={};for(const a in t)r[a]=t[a];return r}const Wn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Un(t,r){let a,d;for(let w=1;w<arguments.length;w++){d=arguments[w];for(a in d)t[a]=d[a];for(let S=0;S<Wn.length;S++)a=Wn[S],Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a])}}function Ft(t){this.src=t,this.g={},this.h=0}Ft.prototype.add=function(t,r,a,d,w){const S=t.toString();t=this.g[S],t||(t=this.g[S]=[],this.h++);const O=Ai(t,r,d,w);return O>-1?(r=t[O],a||(r.fa=!1)):(r=new _o(r,this.src,S,!!d,w),r.fa=a,t.push(r)),r};function ki(t,r){const a=r.type;if(a in t.g){var d=t.g[a],w=Array.prototype.indexOf.call(d,r,void 0),S;(S=w>=0)&&Array.prototype.splice.call(d,w,1),S&&(Wt(r),t.g[a].length==0&&(delete t.g[a],t.h--))}}function Ai(t,r,a,d){for(let w=0;w<t.length;++w){const S=t[w];if(!S.da&&S.listener==r&&S.capture==!!a&&S.ha==d)return w}return-1}var xi="closure_lm_"+(Math.random()*1e6|0),Oi={};function Fn(t,r,a,d,w){if(Array.isArray(r)){for(let S=0;S<r.length;S++)Fn(t,r[S],a,d,w);return null}return a=qn(a),t&&t[ce]?t.J(r,a,u(d)?!!d.capture:!1,w):To(t,r,a,!1,d,w)}function To(t,r,a,d,w,S){if(!r)throw Error("Invalid event type");const O=u(w)?!!w.capture:!!w;let M=Pi(t);if(M||(t[xi]=M=new Ft(t)),a=M.add(r,a,d,O,S),a.proxy)return a;if(d=wo(),a.proxy=d,d.src=t,d.listener=a,t.addEventListener)T||(w=O),w===void 0&&(w=!1),t.addEventListener(r.toString(),d,w);else if(t.attachEvent)t.attachEvent(jn(r.toString()),d);else if(t.addListener&&t.removeListener)t.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return a}function wo(){function t(a){return r.call(t.src,t.listener,a)}const r=bo;return t}function Vn(t,r,a,d,w){if(Array.isArray(r))for(var S=0;S<r.length;S++)Vn(t,r[S],a,d,w);else d=u(d)?!!d.capture:!!d,a=qn(a),t&&t[ce]?(t=t.i,S=String(r).toString(),S in t.g&&(r=t.g[S],a=Ai(r,a,d,w),a>-1&&(Wt(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete t.g[S],t.h--)))):t&&(t=Pi(t))&&(r=t.g[r.toString()],t=-1,r&&(t=Ai(r,a,d,w)),(a=t>-1?r[t]:null)&&Di(a))}function Di(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[ce])ki(r.i,t);else{var a=t.type,d=t.proxy;r.removeEventListener?r.removeEventListener(a,d,t.capture):r.detachEvent?r.detachEvent(jn(a),d):r.addListener&&r.removeListener&&r.removeListener(d),(a=Pi(r))?(ki(a,t),a.h==0&&(a.src=null,r[xi]=null)):Wt(t)}}}function jn(t){return t in Oi?Oi[t]:Oi[t]="on"+t}function bo(t,r){if(t.da)t=!0;else{r=new H(r,this);const a=t.listener,d=t.ha||t.src;t.fa&&Di(t),t=a.call(d,r)}return t}function Pi(t){return t=t[xi],t instanceof Ft?t:null}var Li="__closure_events_fn_"+(Math.random()*1e9>>>0);function qn(t){return typeof t=="function"?t:(t[Li]||(t[Li]=function(r){return t.handleEvent(r)}),t[Li])}function Y(){_.call(this),this.i=new Ft(this),this.M=this,this.G=null}I(Y,_),Y.prototype[ce]=!0,Y.prototype.removeEventListener=function(t,r,a,d){Vn(this,t,r,a,d)};function Z(t,r){var a,d=t.G;if(d)for(a=[];d;d=d.G)a.push(d);if(t=t.M,d=r.type||r,typeof r=="string")r=new y(r,t);else if(r instanceof y)r.target=r.target||t;else{var w=r;r=new y(d,t),Un(r,w)}w=!0;let S,O;if(a)for(O=a.length-1;O>=0;O--)S=r.g=a[O],w=Vt(S,d,!0,r)&&w;if(S=r.g=t,w=Vt(S,d,!0,r)&&w,w=Vt(S,d,!1,r)&&w,a)for(O=0;O<a.length;O++)S=r.g=a[O],w=Vt(S,d,!1,r)&&w}Y.prototype.N=function(){if(Y.Z.N.call(this),this.i){var t=this.i;for(const r in t.g){const a=t.g[r];for(let d=0;d<a.length;d++)Wt(a[d]);delete t.g[r],t.h--}}this.G=null},Y.prototype.J=function(t,r,a,d){return this.i.add(String(t),r,!1,a,d)},Y.prototype.K=function(t,r,a,d){return this.i.add(String(t),r,!0,a,d)};function Vt(t,r,a,d){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();let w=!0;for(let S=0;S<r.length;++S){const O=r[S];if(O&&!O.da&&O.capture==a){const M=O.listener,J=O.ha||O.src;O.fa&&ki(t.i,O),w=M.call(J,d)!==!1&&w}}return w&&!d.defaultPrevented}function So(t,r){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=v(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:c.setTimeout(t,r||0)}function zn(t){t.g=So(()=>{t.g=null,t.i&&(t.i=!1,zn(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class Eo extends _{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:zn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(t){_.call(this),this.h=t,this.g={}}I(rt,_);var Hn=[];function Gn(t){Ut(t.g,function(r,a){this.g.hasOwnProperty(a)&&Di(r)},t),t.g={}}rt.prototype.N=function(){rt.Z.N.call(this),Gn(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ci=c.JSON.stringify,ko=c.JSON.parse,Ao=class{stringify(t){return c.JSON.stringify(t,void 0)}parse(t){return c.JSON.parse(t,void 0)}};function Kn(){}function xo(){}var ot={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ni(){y.call(this,"d")}I(Ni,y);function Ri(){y.call(this,"c")}I(Ri,y);var Ke={},Jn=null;function Mi(){return Jn=Jn||new Y}Ke.Ia="serverreachability";function Xn(t){y.call(this,Ke.Ia,t)}I(Xn,y);function at(t){const r=Mi();Z(r,new Xn(r))}Ke.STAT_EVENT="statevent";function Yn(t,r){y.call(this,Ke.STAT_EVENT,t),this.stat=r}I(Yn,y);function ee(t){const r=Mi();Z(r,new Yn(r,t))}Ke.Ja="timingevent";function Qn(t,r){y.call(this,Ke.Ja,t),this.size=r}I(Qn,y);function lt(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){t()},r)}function ct(){this.g=!0}ct.prototype.ua=function(){this.g=!1};function Oo(t,r,a,d,w,S){t.info(function(){if(t.g)if(S){var O="",M=S.split("&");for(let q=0;q<M.length;q++){var J=M[q].split("=");if(J.length>1){const X=J[0];J=J[1];const ue=X.split("_");O=ue.length>=2&&ue[1]=="type"?O+(X+"="+J+"&"):O+(X+"=redacted&")}}}else O=null;else O=S;return"XMLHTTP REQ ("+d+") [attempt "+w+"]: "+r+`
`+a+`
`+O})}function Do(t,r,a,d,w,S,O){t.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+w+"]: "+r+`
`+a+`
`+S+" "+O})}function Je(t,r,a,d){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+Lo(t,a)+(d?" "+d:"")})}function Po(t,r){t.info(function(){return"TIMEOUT: "+r})}ct.prototype.info=function(){};function Lo(t,r){if(!t.g)return r;if(!r)return null;try{const S=JSON.parse(r);if(S){for(t=0;t<S.length;t++)if(Array.isArray(S[t])){var a=S[t];if(!(a.length<2)){var d=a[1];if(Array.isArray(d)&&!(d.length<1)){var w=d[0];if(w!="noop"&&w!="stop"&&w!="close")for(let O=1;O<d.length;O++)d[O]=""}}}}return Ci(S)}catch{return r}}var $i={NO_ERROR:0,TIMEOUT:8},Co={},Zn;function Bi(){}I(Bi,Kn),Bi.prototype.g=function(){return new XMLHttpRequest},Zn=new Bi;function dt(t){return encodeURIComponent(String(t))}function No(t){var r=1;t=t.split(":");const a=[];for(;r>0&&t.length;)a.push(t.shift()),r--;return t.length&&a.push(t.join(":")),a}function Ie(t,r,a,d){this.j=t,this.i=r,this.l=a,this.S=d||1,this.V=new rt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new es}function es(){this.i=null,this.g="",this.h=!1}var ts={},Wi={};function Ui(t,r,a){t.M=1,t.A=qt(de(r)),t.u=a,t.R=!0,is(t,null)}function is(t,r){t.F=Date.now(),jt(t),t.B=de(t.A);var a=t.B,d=t.S;Array.isArray(d)||(d=[String(d)]),ps(a.i,"t",d),t.C=0,a=t.j.L,t.h=new es,t.g=Cs(t.j,a?r:null,!t.u),t.P>0&&(t.O=new Eo(v(t.Y,t,t.g),t.P)),r=t.V,a=t.g,d=t.ba;var w="readystatechange";Array.isArray(w)||(w&&(Hn[0]=w.toString()),w=Hn);for(let S=0;S<w.length;S++){const O=Fn(a,w[S],d||r.handleEvent,!1,r.h||r);if(!O)break;r.g[O.key]=O}r=t.J?Bn(t.J):{},t.u?(t.v||(t.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,r)):(t.v="GET",t.g.ea(t.B,t.v,null,r)),at(),Oo(t.i,t.v,t.B,t.l,t.S,t.u)}Ie.prototype.ba=function(t){t=t.target;const r=this.O;r&&be(t)==3?r.j():this.Y(t)},Ie.prototype.Y=function(t){try{if(t==this.g)e:{const M=be(this.g),J=this.g.ya(),q=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||ws(this.g)))){this.K||M!=4||J==7||(J==8||q<=0?at(3):at(2)),Fi(this);var r=this.g.ca();this.X=r;var a=Ro(this);if(this.o=r==200,Do(this.i,this.v,this.B,this.l,this.S,M,r),this.o){if(this.U&&!this.L){t:{if(this.g){var d,w=this.g;if((d=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(d)){var S=d;break t}}S=null}if(t=S)Je(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vi(this,t);else{this.o=!1,this.m=3,ee(12),Ne(this),ut(this);break e}}if(this.R){t=!0;let X;for(;!this.K&&this.C<a.length;)if(X=Mo(this,a),X==Wi){M==4&&(this.m=4,ee(14),t=!1),Je(this.i,this.l,null,"[Incomplete Response]");break}else if(X==ts){this.m=4,ee(15),Je(this.i,this.l,a,"[Invalid Chunk]"),t=!1;break}else Je(this.i,this.l,X,null),Vi(this,X);if(ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||a.length!=0||this.h.h||(this.m=1,ee(16),t=!1),this.o=this.o&&t,!t)Je(this.i,this.l,a,"[Invalid Chunked Response]"),Ne(this),ut(this);else if(a.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),Xi(O),O.P=!0,ee(11))}}else Je(this.i,this.l,a,null),Vi(this,a);M==4&&Ne(this),this.o&&!this.K&&(M==4?Os(this.j,this):(this.o=!1,jt(this)))}else Xo(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,ee(12)):(this.m=0,ee(13)),Ne(this),ut(this)}}}catch{}finally{}};function Ro(t){if(!ns(t))return t.g.la();const r=ws(t.g);if(r==="")return"";let a="";const d=r.length,w=be(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return Ne(t),ut(t),"";t.h.i=new c.TextDecoder}for(let S=0;S<d;S++)t.h.h=!0,a+=t.h.i.decode(r[S],{stream:!(w&&S==d-1)});return r.length=0,t.h.g+=a,t.C=0,t.h.g}function ns(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function Mo(t,r){var a=t.C,d=r.indexOf(`
`,a);return d==-1?Wi:(a=Number(r.substring(a,d)),isNaN(a)?ts:(d+=1,d+a>r.length?Wi:(r=r.slice(d,d+a),t.C=d+a,r)))}Ie.prototype.cancel=function(){this.K=!0,Ne(this)};function jt(t){t.T=Date.now()+t.H,ss(t,t.H)}function ss(t,r){if(t.D!=null)throw Error("WatchDog timer not null");t.D=lt(v(t.aa,t),r)}function Fi(t){t.D&&(c.clearTimeout(t.D),t.D=null)}Ie.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Po(this.i,this.B),this.M!=2&&(at(),ee(17)),Ne(this),this.m=2,ut(this)):ss(this,this.T-t)};function ut(t){t.j.I==0||t.K||Os(t.j,t)}function Ne(t){Fi(t);var r=t.O;r&&typeof r.dispose=="function"&&r.dispose(),t.O=null,Gn(t.V),t.g&&(r=t.g,t.g=null,r.abort(),r.dispose())}function Vi(t,r){try{var a=t.j;if(a.I!=0&&(a.g==t||ji(a.h,t))){if(!t.L&&ji(a.h,t)&&a.I==3){try{var d=a.Ba.g.parse(r)}catch{d=null}if(Array.isArray(d)&&d.length==3){var w=d;if(w[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<t.F)Jt(a),Gt(a);else break e;Ji(a),ee(18)}}else a.xa=w[1],0<a.xa-a.K&&w[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=lt(v(a.Va,a),6e3));as(a.h)<=1&&a.ta&&(a.ta=void 0)}else Me(a,11)}else if((t.L||a.g==t)&&Jt(a),!f(r))for(w=a.Ba.g.parse(r),r=0;r<w.length;r++){let q=w[r];const X=q[0];if(!(X<=a.K))if(a.K=X,q=q[1],a.I==2)if(q[0]=="c"){a.M=q[1],a.ba=q[2];const ue=q[3];ue!=null&&(a.ka=ue,a.j.info("VER="+a.ka));const $e=q[4];$e!=null&&(a.za=$e,a.j.info("SVER="+a.za));const Se=q[5];Se!=null&&typeof Se=="number"&&Se>0&&(d=1.5*Se,a.O=d,a.j.info("backChannelRequestTimeoutMs_="+d)),d=a;const Ee=t.g;if(Ee){const Xt=Ee.g?Ee.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xt){var S=d.h;S.g||Xt.indexOf("spdy")==-1&&Xt.indexOf("quic")==-1&&Xt.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(qi(S,S.h),S.h=null))}if(d.G){const Yi=Ee.g?Ee.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(d.wa=Yi,z(d.J,d.G,Yi))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-t.F,a.j.info("Handshake RTT: "+a.T+"ms")),d=a;var O=t;if(d.na=Ls(d,d.L?d.ba:null,d.W),O.L){ls(d.h,O);var M=O,J=d.O;J&&(M.H=J),M.D&&(Fi(M),jt(M)),d.g=O}else As(d);a.i.length>0&&Kt(a)}else q[0]!="stop"&&q[0]!="close"||Me(a,7);else a.I==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Me(a,7):Ki(a):q[0]!="noop"&&a.l&&a.l.qa(q),a.A=0)}}at(4)}catch{}}var $o=class{constructor(t,r){this.g=t,this.map=r}};function rs(t){this.l=t||10,c.PerformanceNavigationTiming?(t=c.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function os(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function as(t){return t.h?1:t.g?t.g.size:0}function ji(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function qi(t,r){t.g?t.g.add(r):t.h=r}function ls(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}rs.prototype.cancel=function(){if(this.i=cs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cs(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const a of t.g.values())r=r.concat(a.G);return r}return k(t.i)}var ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bo(t,r){if(t){t=t.split("&");for(let a=0;a<t.length;a++){const d=t[a].indexOf("=");let w,S=null;d>=0?(w=t[a].substring(0,d),S=t[a].substring(d+1)):w=t[a],r(w,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Te(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;t instanceof Te?(this.l=t.l,ht(this,t.j),this.o=t.o,this.g=t.g,ft(this,t.u),this.h=t.h,zi(this,gs(t.i)),this.m=t.m):t&&(r=String(t).match(ds))?(this.l=!1,ht(this,r[1]||"",!0),this.o=mt(r[2]||""),this.g=mt(r[3]||"",!0),ft(this,r[4]),this.h=mt(r[5]||"",!0),zi(this,r[6]||"",!0),this.m=mt(r[7]||"")):(this.l=!1,this.i=new gt(null,this.l))}Te.prototype.toString=function(){const t=[];var r=this.j;r&&t.push(pt(r,us,!0),":");var a=this.g;return(a||r=="file")&&(t.push("//"),(r=this.o)&&t.push(pt(r,us,!0),"@"),t.push(dt(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&t.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(pt(a,a.charAt(0)=="/"?Fo:Uo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",pt(a,jo)),t.join("")},Te.prototype.resolve=function(t){const r=de(this);let a=!!t.j;a?ht(r,t.j):a=!!t.o,a?r.o=t.o:a=!!t.g,a?r.g=t.g:a=t.u!=null;var d=t.h;if(a)ft(r,t.u);else if(a=!!t.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var w=r.h.lastIndexOf("/");w!=-1&&(d=r.h.slice(0,w+1)+d)}if(w=d,w==".."||w==".")d="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){d=w.lastIndexOf("/",0)==0,w=w.split("/");const S=[];for(let O=0;O<w.length;){const M=w[O++];M=="."?d&&O==w.length&&S.push(""):M==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),d&&O==w.length&&S.push("")):(S.push(M),d=!0)}d=S.join("/")}else d=w}return a?r.h=d:a=t.i.toString()!=="",a?zi(r,gs(t.i)):a=!!t.m,a&&(r.m=t.m),r};function de(t){return new Te(t)}function ht(t,r,a){t.j=a?mt(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function ft(t,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);t.u=r}else t.u=null}function zi(t,r,a){r instanceof gt?(t.i=r,qo(t.i,t.l)):(a||(r=pt(r,Vo)),t.i=new gt(r,t.l))}function z(t,r,a){t.i.set(r,a)}function qt(t){return z(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function mt(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pt(t,r,a){return typeof t=="string"?(t=encodeURI(t).replace(r,Wo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Wo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var us=/[#\/\?@]/g,Uo=/[#\?:]/g,Fo=/[#\?]/g,Vo=/[#\?@]/g,jo=/#/g;function gt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function Re(t){t.g||(t.g=new Map,t.h=0,t.i&&Bo(t.i,function(r,a){t.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}i=gt.prototype,i.add=function(t,r){Re(this),this.i=null,t=Xe(this,t);let a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(r),this.h+=1,this};function hs(t,r){Re(t),r=Xe(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function fs(t,r){return Re(t),r=Xe(t,r),t.g.has(r)}i.forEach=function(t,r){Re(this),this.g.forEach(function(a,d){a.forEach(function(w){t.call(r,w,d,this)},this)},this)};function ms(t,r){Re(t);let a=[];if(typeof r=="string")fs(t,r)&&(a=a.concat(t.g.get(Xe(t,r))));else for(t=Array.from(t.g.values()),r=0;r<t.length;r++)a=a.concat(t[r]);return a}i.set=function(t,r){return Re(this),this.i=null,t=Xe(this,t),fs(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},i.get=function(t,r){return t?(t=ms(this,t),t.length>0?String(t[0]):r):r};function ps(t,r,a){hs(t,r),a.length>0&&(t.i=null,t.g.set(Xe(t,r),k(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(let d=0;d<r.length;d++){var a=r[d];const w=dt(a);a=ms(this,a);for(let S=0;S<a.length;S++){let O=w;a[S]!==""&&(O+="="+dt(a[S])),t.push(O)}}return this.i=t.join("&")};function gs(t){const r=new gt;return r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),r}function Xe(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function qo(t,r){r&&!t.j&&(Re(t),t.i=null,t.g.forEach(function(a,d){const w=d.toLowerCase();d!=w&&(hs(this,d),ps(this,w,a))},t)),t.j=r}function zo(t,r){const a=new ct;if(c.Image){const d=new Image;d.onload=E(we,a,"TestLoadImage: loaded",!0,r,d),d.onerror=E(we,a,"TestLoadImage: error",!1,r,d),d.onabort=E(we,a,"TestLoadImage: abort",!1,r,d),d.ontimeout=E(we,a,"TestLoadImage: timeout",!1,r,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=t}else r(!1)}function Ho(t,r){const a=new ct,d=new AbortController,w=setTimeout(()=>{d.abort(),we(a,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:d.signal}).then(S=>{clearTimeout(w),S.ok?we(a,"TestPingServer: ok",!0,r):we(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(w),we(a,"TestPingServer: error",!1,r)})}function we(t,r,a,d,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),d(a)}catch{}}function Go(){this.g=new Ao}function Hi(t){this.i=t.Sb||null,this.h=t.ab||!1}I(Hi,Kn),Hi.prototype.g=function(){return new zt(this.i,this.h)};function zt(t,r){Y.call(this),this.H=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(zt,Y),i=zt.prototype,i.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=r,this.readyState=1,yt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(r.body=t),(this.H||c).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vt(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yt(this)),this.g&&(this.readyState=3,yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vs(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function vs(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?vt(this):yt(this),this.readyState==3&&vs(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,vt(this))},i.Na=function(t){this.g&&(this.response=t,vt(this))},i.ga=function(){this.g&&vt(this)};function vt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,yt(t)}i.setRequestHeader=function(t,r){this.A.append(t,r)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=r.next();return t.join(`\r
`)};function yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ys(t){let r="";return Ut(t,function(a,d){r+=d,r+=":",r+=a,r+=`\r
`}),r}function Gi(t,r,a){e:{for(d in a){var d=!1;break e}d=!0}d||(a=ys(a),typeof t=="string"?a!=null&&dt(a):z(t,r,a))}function G(t){Y.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(G,Y);var Ko=/^https?$/i,Jo=["POST","PUT"];i=G.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,r,a,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zn.g(),this.g.onreadystatechange=b(v(this.Ca,this));try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(S){_s(this,S);return}if(t=a||"",a=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var w in d)a.set(w,d[w]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const S of d.keys())a.set(S,d.get(S));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(a.keys()).find(S=>S.toLowerCase()=="content-type"),w=c.FormData&&t instanceof c.FormData,!(Array.prototype.indexOf.call(Jo,r,void 0)>=0)||d||w||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of a)this.g.setRequestHeader(S,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(S){_s(this,S)}};function _s(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.o=5,Is(t),Ht(t)}function Is(t){t.A||(t.A=!0,Z(t,"complete"),Z(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,Z(this,"complete"),Z(this,"abort"),Ht(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ht(this,!0)),G.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Ts(this):this.Xa())},i.Xa=function(){Ts(this)};function Ts(t){if(t.h&&typeof l<"u"){if(t.v&&be(t)==4)setTimeout(t.Ca.bind(t),0);else if(Z(t,"readystatechange"),be(t)==4){t.h=!1;try{const S=t.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var a;if(!(a=r)){var d;if(d=S===0){let O=String(t.D).match(ds)[1]||null;!O&&c.self&&c.self.location&&(O=c.self.location.protocol.slice(0,-1)),d=!Ko.test(O?O.toLowerCase():"")}a=d}if(a)Z(t,"complete"),Z(t,"success");else{t.o=6;try{var w=be(t)>2?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.ca()+"]",Is(t)}}finally{Ht(t)}}}}function Ht(t,r){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const a=t.g;t.g=null,r||Z(t,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function be(t){return t.g?t.g.readyState:0}i.ca=function(){try{return be(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),ko(r)}};function ws(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Xo(t){const r={};t=(t.g&&be(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<t.length;d++){if(f(t[d]))continue;var a=No(t[d]);const w=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const S=r[w]||[];r[w]=S,S.push(a)}Io(r,function(d){return d.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _t(t,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||r}function bs(t){this.za=0,this.i=[],this.j=new ct,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_t("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_t("baseRetryDelayMs",5e3,t),this.Za=_t("retryDelaySeedMs",1e4,t),this.Ta=_t("forwardChannelMaxRetries",2,t),this.va=_t("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new rs(t&&t.concurrentRequestLimit),this.Ba=new Go,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=bs.prototype,i.ka=8,i.I=1,i.connect=function(t,r,a,d){ee(0),this.W=t,this.H=r||{},a&&d!==void 0&&(this.H.OSID=a,this.H.OAID=d),this.F=this.X,this.J=Ls(this,null,this.W),Kt(this)};function Ki(t){if(Ss(t),t.I==3){var r=t.V++,a=de(t.J);if(z(a,"SID",t.M),z(a,"RID",r),z(a,"TYPE","terminate"),It(t,a),r=new Ie(t,t.j,r),r.M=2,r.A=qt(de(a)),a=!1,c.navigator&&c.navigator.sendBeacon)try{a=c.navigator.sendBeacon(r.A.toString(),"")}catch{}!a&&c.Image&&(new Image().src=r.A,a=!0),a||(r.g=Cs(r.j,null),r.g.ea(r.A)),r.F=Date.now(),jt(r)}Ps(t)}function Gt(t){t.g&&(Xi(t),t.g.cancel(),t.g=null)}function Ss(t){Gt(t),t.v&&(c.clearTimeout(t.v),t.v=null),Jt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&c.clearTimeout(t.m),t.m=null)}function Kt(t){if(!os(t.h)&&!t.m){t.m=!0;var r=t.Ea;B||h(),V||(B(),V=!0),g.add(r,t),t.D=0}}function Yo(t,r){return as(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=r.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=lt(v(t.Ea,t,r),Ds(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const w=new Ie(this,this.j,t);let S=this.o;if(this.U&&(S?(S=Bn(S),Un(S,this.U)):S=this.U),this.u!==null||this.R||(w.J=S,S=null),this.S)e:{for(var r=0,a=0;a<this.i.length;a++){t:{var d=this.i[a];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(r+=d,r>4096){r=a;break e}if(r===4096||a===this.i.length-1){r=a+1;break e}}r=1e3}else r=1e3;r=ks(this,w,r),a=de(this.J),z(a,"RID",t),z(a,"CVER",22),this.G&&z(a,"X-HTTP-Session-Id",this.G),It(this,a),S&&(this.R?r="headers="+dt(ys(S))+"&"+r:this.u&&Gi(a,this.u,S)),qi(this.h,w),this.Ra&&z(a,"TYPE","init"),this.S?(z(a,"$req",r),z(a,"SID","null"),w.U=!0,Ui(w,a,null)):Ui(w,a,r),this.I=2}}else this.I==3&&(t?Es(this,t):this.i.length==0||os(this.h)||Es(this))};function Es(t,r){var a;r?a=r.l:a=t.V++;const d=de(t.J);z(d,"SID",t.M),z(d,"RID",a),z(d,"AID",t.K),It(t,d),t.u&&t.o&&Gi(d,t.u,t.o),a=new Ie(t,t.j,a,t.D+1),t.u===null&&(a.J=t.o),r&&(t.i=r.G.concat(t.i)),r=ks(t,a,1e3),a.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),qi(t.h,a),Ui(a,d,r)}function It(t,r){t.H&&Ut(t.H,function(a,d){z(r,d,a)}),t.l&&Ut({},function(a,d){z(r,d,a)})}function ks(t,r,a){a=Math.min(t.i.length,a);const d=t.l?v(t.l.Ka,t.l,t):null;e:{var w=t.i;let M=-1;for(;;){const J=["count="+a];M==-1?a>0?(M=w[0].g,J.push("ofs="+M)):M=0:J.push("ofs="+M);let q=!0;for(let X=0;X<a;X++){var S=w[X].g;const ue=w[X].map;if(S-=M,S<0)M=Math.max(0,w[X].g-100),q=!1;else try{S="req"+S+"_"||"";try{var O=ue instanceof Map?ue:Object.entries(ue);for(const[$e,Se]of O){let Ee=Se;u(Se)&&(Ee=Ci(Se)),J.push(S+$e+"="+encodeURIComponent(Ee))}}catch($e){throw J.push(S+"type="+encodeURIComponent("_badmap")),$e}}catch{d&&d(ue)}}if(q){O=J.join("&");break e}}O=void 0}return t=t.i.splice(0,a),r.G=t,O}function As(t){if(!t.g&&!t.v){t.Y=1;var r=t.Da;B||h(),V||(B(),V=!0),g.add(r,t),t.A=0}}function Ji(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=lt(v(t.Da,t),Ds(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,xs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=lt(v(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ee(10),Gt(this),xs(this))};function Xi(t){t.B!=null&&(c.clearTimeout(t.B),t.B=null)}function xs(t){t.g=new Ie(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var r=de(t.na);z(r,"RID","rpc"),z(r,"SID",t.M),z(r,"AID",t.K),z(r,"CI",t.F?"0":"1"),!t.F&&t.ia&&z(r,"TO",t.ia),z(r,"TYPE","xmlhttp"),It(t,r),t.u&&t.o&&Gi(r,t.u,t.o),t.O&&(t.g.H=t.O);var a=t.g;t=t.ba,a.M=1,a.A=qt(de(r)),a.u=null,a.R=!0,is(a,t)}i.Va=function(){this.C!=null&&(this.C=null,Gt(this),Ji(this),ee(19))};function Jt(t){t.C!=null&&(c.clearTimeout(t.C),t.C=null)}function Os(t,r){var a=null;if(t.g==r){Jt(t),Xi(t),t.g=null;var d=2}else if(ji(t.h,r))a=r.G,ls(t.h,r),d=1;else return;if(t.I!=0){if(r.o)if(d==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var w=t.D;d=Mi(),Z(d,new Qn(d,a)),Kt(t)}else As(t);else if(w=r.m,w==3||w==0&&r.X>0||!(d==1&&Yo(t,r)||d==2&&Ji(t)))switch(a&&a.length>0&&(r=t.h,r.i=r.i.concat(a)),w){case 1:Me(t,5);break;case 4:Me(t,10);break;case 3:Me(t,6);break;default:Me(t,2)}}}function Ds(t,r){let a=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(a*=2),a*r}function Me(t,r){if(t.j.info("Error code "+r),r==2){var a=v(t.bb,t),d=t.Ua;const w=!d;d=new Te(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ht(d,"https"),qt(d),w?zo(d.toString(),a):Ho(d.toString(),a)}else ee(2);t.I=0,t.l&&t.l.pa(r),Ps(t),Ss(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Ps(t){if(t.I=0,t.ja=[],t.l){const r=cs(t.h);(r.length!=0||t.i.length!=0)&&(D(t.ja,r),D(t.ja,t.i),t.h.i.length=0,k(t.i),t.i.length=0),t.l.oa()}}function Ls(t,r,a){var d=a instanceof Te?de(a):new Te(a);if(d.g!="")r&&(d.g=r+"."+d.g),ft(d,d.u);else{var w=c.location;d=w.protocol,r=r?r+"."+w.hostname:w.hostname,w=+w.port;const S=new Te(null);d&&ht(S,d),r&&(S.g=r),w&&ft(S,w),a&&(S.h=a),d=S}return a=t.G,r=t.wa,a&&r&&z(d,a,r),z(d,"VER",t.ka),It(t,d),d}function Cs(t,r,a){if(r&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Aa&&!t.ma?new G(new Hi({ab:a})):new G(t.ma),r.Fa(t.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ns(){}i=Ns.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function re(t,r){Y.call(this),this.g=new bs(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(t?t["X-WebChannel-Client-Profile"]=r.sa:t={"X-WebChannel-Client-Profile":r.sa}),this.g.U=t,(t=r&&r.Qb)&&!f(t)&&(this.g.u=t),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!f(r)&&(this.g.G=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new Ye(this)}I(re,Y),re.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},re.prototype.close=function(){Ki(this.g)},re.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.v&&(a={},a.__data__=Ci(t),t=a);r.i.push(new $o(r.Ya++,t)),r.I==3&&Kt(r)},re.prototype.N=function(){this.g.l=null,delete this.j,Ki(this.g),delete this.g,re.Z.N.call(this)};function Rs(t){Ni.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const a in r){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}I(Rs,Ni);function Ms(){Ri.call(this),this.status=1}I(Ms,Ri);function Ye(t){this.g=t}I(Ye,Ns),Ye.prototype.ra=function(){Z(this.g,"a")},Ye.prototype.qa=function(t){Z(this.g,new Rs(t))},Ye.prototype.pa=function(t){Z(this.g,new Ms)},Ye.prototype.oa=function(){Z(this.g,"b")},re.prototype.send=re.prototype.o,re.prototype.open=re.prototype.m,re.prototype.close=re.prototype.close,$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,Co.COMPLETE="complete",xo.EventType=ot,ot.OPEN="a",ot.CLOSE="b",ot.ERROR="c",ot.MESSAGE="d",Y.prototype.listen=Y.prototype.J,G.prototype.listenOnce=G.prototype.K,G.prototype.getLastError=G.prototype.Ha,G.prototype.getLastErrorCode=G.prototype.ya,G.prototype.getStatus=G.prototype.ca,G.prototype.getResponseJson=G.prototype.La,G.prototype.getResponseText=G.prototype.la,G.prototype.send=G.prototype.ea,G.prototype.setWithCredentials=G.prototype.Fa}).apply(typeof Yt<"u"?Yt:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
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
 */let _i="12.12.0";function kl(i){_i=i}/**
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
 */const ai=new bn("@firebase/firestore");function ae(i,...e){if(ai.logLevel<=j.DEBUG){const n=e.map(Br);ai.debug(`Firestore (${_i}): ${i}`,...n)}}function $r(i,...e){if(ai.logLevel<=j.ERROR){const n=e.map(Br);ai.error(`Firestore (${_i}): ${i}`,...n)}}function Br(i){if(typeof i=="string")return i;try{return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function li(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Wr(i,s,n)}function Wr(i,e,n){let s=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw $r(s),new Error(s)}function wt(i,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,i||Wr(e,o,s)}/**
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
 */class bt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Al{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ne.UNAUTHENTICATED))}shutdown(){}}class Ol{constructor(e){this.t=e,this.currentUser=ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){wt(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let l=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new bt,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},u=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>u(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?u(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new bt)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(wt(typeof s.accessToken=="string",31837,{l:s}),new Al(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return wt(e===null||typeof e=="string",2055,{h:e}),new ne(e)}}class Dl{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Pl{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new Dl(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ks{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ll{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Be(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){wt(this.o===void 0,3512);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ks(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(wt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ks(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cl(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Nl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Cl(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<n&&(s+=e.charAt(o[l]%62))}return s}}function De(i,e){return i<e?-1:i>e?1:0}function Rl(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const o=i.charAt(s),l=e.charAt(s);if(o!==l)return sn(o)===sn(l)?De(o,l):sn(o)?1:-1}return De(i.length,e.length)}const Ml=55296,$l=57343;function sn(i){const e=i.charCodeAt(0);return e>=Ml&&e<=$l}/**
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
 */const Js="__name__";class he{constructor(e,n,s){n===void 0?n=0:n>e.length&&li(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&li(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return he.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof he?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const l=he.compareSegments(e.get(o),n.get(o));if(l!==0)return l}return De(e.length,n.length)}static compareSegments(e,n){const s=he.isNumericId(e),o=he.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?he.extractNumericId(e).compare(he.extractNumericId(n)):Rl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kn.fromString(e.substring(4,e.length-2))}}class oe extends he{construct(e,n,s){return new oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(U.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const Bl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends he{construct(e,n,s){return new We(e,n,s)}static isValidIdentifier(e){return Bl.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Js}static keyField(){return new We([Js])}static fromServerFormat(e){const n=[];let s="",o=0;const l=()=>{if(s.length===0)throw new F(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let c=!1;for(;o<e.length;){const u=e[o];if(u==="\\"){if(o+1===e.length)throw new F(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new F(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else u==="`"?(c=!c,o++):u!=="."||c?(s+=u,o++):(l(),o++)}if(l(),c)throw new F(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class Ue{constructor(e){this.path=e}static fromPath(e){return new Ue(oe.fromString(e))}static fromName(e){return new Ue(oe.fromString(e).popFirst(5))}static empty(){return new Ue(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ue(new oe(e.slice()))}}function Wl(i,e,n,s){if(e===!0&&s===!0)throw new F(U.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Ul(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}/**
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
 */function K(i,e){const n={typeString:i};return e&&(n.value=e),n}function $t(i,e){if(!Ul(i))throw new F(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const c=i[s];if(o&&typeof c!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${s}' field to equal '${l.value}'`;break}}if(n)throw new F(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const Xs=-62135596800,Ys=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Ys);return new fe(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xs)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ys}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($t(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xs;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:K("string",fe._jsonSchemaVersion),seconds:K("number"),nanoseconds:K("number")};function Fl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Vl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Vl("Invalid base64 string: "+l):l}}(e);return new He(n)}static fromUint8Array(e){const n=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Qs="(default)";class ci{constructor(e,n){this.projectId=e,this.database=n||Qs}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database===Qs}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}function jl(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new F(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(i.options.projectId,e)}/**
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
 */class ql{constructor(e,n=null,s=[],o=[],l=null,c="F",u=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=c,this.startAt=u,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function zl(i){return new ql(i)}/**
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
 */var Zs,$;($=Zs||(Zs={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new kn([4294967295,4294967295],0);/**
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
 */const Hl=41943040;/**
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
 */const Gl=1048576;function rn(){return typeof document<"u"?document:null}class Kl{constructor(e,n,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class An{constructor(e,n,s,o,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,l){const c=Date.now()+s,u=new An(e,n,c,o,l);return u.start(s),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var er,tr;(tr=er||(er={})).Ma="default",tr.Cache="cache";/**
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
 */function Jl(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Xl="ComponentProvider",ir=new Map;/**
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
 */const Yl="firestore.googleapis.com",nr=!0;class sr{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yl,this.ssl=nr}else this.host=e.host,this.ssl=e.ssl??nr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hl;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gl)throw new F(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jl(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ql{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new xl;switch(s.type){case"firstParty":return new Pl(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new F(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=ir.get(n);s&&(ae(Xl,"Removing Datastore"),ir.delete(n),s.terminate())}(this),Promise.resolve()}}/**
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
 */class xn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xn(this.firestore,e,this._query)}}class me{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if($t(n,me._jsonSchema))return new me(e,s||null,new Ue(oe.fromString(n.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:K("string",me._jsonSchemaVersion),referencePath:K("string")};class On extends xn{constructor(e,n,s){super(e,n,zl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new Ue(e))}withConverter(e){return new On(this.firestore,e,this._path)}}/**
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
 */const rr="AsyncQueue";class or{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Kl(this,"async_queue_retry"),this._c=()=>{const s=rn();s&&ae(rr,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=rn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=rn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new bt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Fl(e))throw e;ae(rr,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,$r("INTERNAL UNHANDLED ERROR: ",ar(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=An.createAndSchedule(this,e,n,s,l=>this.hc(l));return this.tc.push(o),o}uc(){this.nc&&li(47125,{Pc:ar(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ar(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Zl extends Ql{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new or,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new or(e),this._firestoreClient=void 0,await e}}}/**
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
 */class ve{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ve(He.fromBase64String(e))}catch(n){throw new F(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ve(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ve._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($t(e,ve._jsonSchema))return ve.fromBase64String(e.bytes)}}ve._jsonSchemaVersion="firestore/bytes/1.0",ve._jsonSchema={type:K("string",ve._jsonSchemaVersion),bytes:K("string")};/**
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
 */class Ur{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class je{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:je._jsonSchemaVersion}}static fromJSON(e){if($t(e,je._jsonSchema))return new je(e.latitude,e.longitude)}}je._jsonSchemaVersion="firestore/geoPoint/1.0",je._jsonSchema={type:K("string",je._jsonSchemaVersion),latitude:K("number"),longitude:K("number")};/**
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
 */class qe{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($t(e,qe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new qe(e.vectorValues);throw new F(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qe._jsonSchemaVersion="firestore/vectorValue/1.0",qe._jsonSchema={type:K("string",qe._jsonSchemaVersion),vectorValues:K("object")};function Fr(i,e,n){if((e=Mt(e))instanceof Ur)return e._internalPath;if(typeof e=="string")return tc(i,e);throw mn("Field path arguments must be of type string or ",i)}const ec=new RegExp("[~\\*/\\[\\]]");function tc(i,e,n){if(e.search(ec)>=0)throw mn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Ur(...e.split("."))._internalPath}catch{throw mn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function mn(i,e,n,s,o){let l=`Function ${e}() called with invalid data`;l+=". ";let c="";return new F(U.INVALID_ARGUMENT,l+i+c)}const lr="@firebase/firestore",cr="4.14.0";/**
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
 */class Vr{constructor(e,n,s,o,l){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ic(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Fr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ic extends Vr{data(){return super.data()}}class Qt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qe extends Vr{constructor(e,n,s,o,l,c){super(e,n,s,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qe._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qe._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qe._jsonSchema={type:K("string",Qe._jsonSchemaVersion),bundleSource:K("string","DocumentSnapshot"),bundleName:K("string"),bundle:K("string")};class ii extends Qe{data(e={}){return super.data(e)}}class St{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Qt(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ii(this._firestore,this._userDataWriter,s.key,s,new Qt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(u=>{const p=new ii(o._firestore,o._userDataWriter,u.doc.key,u.doc,new Qt(o._snapshot.mutatedKeys.has(u.doc.key),o._snapshot.fromCache),o.query.converter);return u.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(u=>l||u.type!==3).map(u=>{const p=new ii(o._firestore,o._userDataWriter,u.doc.key,u.doc,new Qt(o._snapshot.mutatedKeys.has(u.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return u.type!==0&&(v=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),E=c.indexOf(u.doc.key)),{type:nc(u.type),doc:p,oldIndex:v,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=St._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Nl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nc(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return li(61501,{type:i})}}/**
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
 */St._jsonSchemaVersion="firestore/querySnapshot/1.0",St._jsonSchema={type:K("string",St._jsonSchemaVersion),bundleSource:K("string","QuerySnapshot"),bundleName:K("string"),bundle:K("string")};(function(e,n=!0){kl(yi),it(new tt("firestore",(s,{instanceIdentifier:o,options:l})=>{const c=s.getProvider("app").getImmediate(),u=new Zl(new Ol(s.getProvider("auth-internal")),new Ll(c,s.getProvider("app-check-internal")),jl(c,o),c);return l={useFetchStreams:n,...l},u._setSettings(l),u},"PUBLIC").setMultipleInstances(!0)),Oe(lr,cr,e),Oe(lr,cr,"esm2020")})();function jr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sc=jr,qr=new Rt("auth","Firebase",jr());/**
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
 */const di=new bn("@firebase/auth");function rc(i,...e){di.logLevel<=j.WARN&&di.warn(`Auth (${yi}): ${i}`,...e)}function ni(i,...e){di.logLevel<=j.ERROR&&di.error(`Auth (${yi}): ${i}`,...e)}/**
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
 */function dr(i,...e){throw Dn(i,...e)}function zr(i,...e){return Dn(i,...e)}function Hr(i,e,n){const s={...sc(),[e]:n};return new Rt("auth","Firebase",s).create(e,{appName:i.name})}function si(i){return Hr(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dn(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return qr.create(i,...e)}function W(i,e,...n){if(!i)throw Dn(e,...n)}function Et(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ni(e),new Error(e)}function ui(i,e){i||Et(e)}function oc(){return ur()==="http:"||ur()==="https:"}function ur(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function ac(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oc()||da()||"connection"in navigator)?navigator.onLine:!0}function lc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Bt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ui(n>e,"Short delay should be less than long delay!"),this.isMobile=la()||ua()}get(){return ac()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cc(i,e){ui(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gr{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hc=new Bt(3e4,6e4);function Kr(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ii(i,e,n,s,o={}){return Jr(i,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const u=Pr({key:i.config.apiKey,...c}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:p,...l};return ca()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&Lr(i.emulatorConfig.host)&&(v.credentials="include"),Gr.fetch()(await Xr(i,i.config.apiHost,n,u),v)})}async function Jr(i,e,n){i._canInitEmulator=!1;const s={...dc,...e};try{const o=new fc(i),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Zt(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const u=l.ok?c.errorMessage:c.error.message,[p,v]=u.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zt(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Zt(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Zt(i,"user-disabled",c);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Hr(i,E,v);dr(i,E)}}catch(o){if(o instanceof Le)throw o;dr(i,"network-request-failed",{message:String(o)})}}async function Xr(i,e,n,s){const o=`${e}${n}?${s}`,l=i,c=l.config.emulator?cc(i.config,o):`${i.config.apiScheme}://${o}`;return uc.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class fc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zr(this.auth,"network-request-failed")),hc.get())})}}function Zt(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=zr(i,e,s);return o.customData._tokenResponse=n,o}/**
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
 */async function mc(i,e){return Ii(i,"POST","/v1/accounts:delete",e)}async function hi(i,e){return Ii(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function kt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pc(i,e=!1){const n=Mt(i),s=await n.getIdToken(e),o=Yr(s);W(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:kt(on(o.auth_time)),issuedAtTime:kt(on(o.iat)),expirationTime:kt(on(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function on(i){return Number(i)*1e3}function Yr(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return ni("JWT malformed, contained fewer than 3 sections"),null;try{const o=Dr(n);return o?JSON.parse(o):(ni("Failed to decode base64 JWT payload"),null)}catch(o){return ni("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function hr(i){const e=Yr(i);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pn(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Le&&gc(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function gc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class vc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kt(this.lastLoginAt),this.creationTime=kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fi(i){var I;const e=i.auth,n=await i.getIdToken(),s=await pn(i,hi(e,{idToken:n}));W(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const l=(I=o.providerUserInfo)!=null&&I.length?Qr(o.providerUserInfo):[],c=_c(i.providerData,l),u=i.isAnonymous,p=!(i.email&&o.passwordHash)&&!(c!=null&&c.length),v=u?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new gn(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(i,E)}async function yc(i){const e=Mt(i);await fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _c(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Qr(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Ic(i,e){const n=await Jr(i,{},async()=>{const s=Pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=i.config,c=await Xr(i,o,"/v1/token",`key=${l}`),u=await i._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:u,body:s};return i.emulatorConfig&&Lr(i.emulatorConfig.host)&&(p.credentials="include"),Gr.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tc(i,e){return Ii(i,"POST","/v2/accounts:revokeToken",Kr(i,e))}/**
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
 */class Ze{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=hr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:l}=await Ic(e,n);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:l}=n,c=new Ze;return s&&(W(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(W(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(W(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ze,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function ke(i,e){W(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class pe{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new vc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await pn(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pc(this,e)}reload(){return yc(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await fi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(si(this.auth));const e=await this.getIdToken();return await pn(this,mc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,u=n.tenantId??void 0,p=n._redirectEventId??void 0,v=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:I,emailVerified:b,isAnonymous:k,providerData:D,stsTokenManager:A}=n;W(I&&A,e,"internal-error");const P=Ze.fromJSON(this.name,A);W(typeof I=="string",e,"internal-error"),ke(s,e.name),ke(o,e.name),W(typeof b=="boolean",e,"internal-error"),W(typeof k=="boolean",e,"internal-error"),ke(l,e.name),ke(c,e.name),ke(u,e.name),ke(p,e.name),ke(v,e.name),ke(E,e.name);const x=new pe({uid:I,auth:e,email:o,emailVerified:b,displayName:s,isAnonymous:k,photoURL:c,phoneNumber:l,tenantId:u,stsTokenManager:P,createdAt:v,lastLoginAt:E});return D&&Array.isArray(D)&&(x.providerData=D.map(L=>({...L}))),p&&(x._redirectEventId=p),x}static async _fromIdTokenResponse(e,n,s=!1){const o=new Ze;o.updateFromServerResponse(n);const l=new pe({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await fi(l),l}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];W(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Qr(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),u=new Ze;u.updateFromIdToken(s);const p=new pe({uid:o.localId,auth:e,stsTokenManager:u,isAnonymous:c}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new gn(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,v),p}}/**
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
 */const fr=new Map;function Fe(i){ui(i instanceof Function,"Expected a class definition");let e=fr.get(i);return e?(ui(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,fr.set(i,e),e)}/**
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
 */class Zr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zr.type="NONE";const mr=Zr;/**
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
 */function an(i,e,n){return`firebase:${i}:${e}:${n}`}class et{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=an(this.userKey,o.apiKey,l),this.fullPersistenceKey=an("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hi(this.auth,{idToken:e}).catch(()=>{});return n?pe._fromGetAccountInfoResponse(this.auth,n,e):null}return pe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new et(Fe(mr),e,s);const o=(await Promise.all(n.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Fe(mr);const c=an(s,e.config.apiKey,e.name);let u=null;for(const v of n)try{const E=await v._get(c);if(E){let I;if(typeof E=="string"){const b=await hi(e,{idToken:E}).catch(()=>{});if(!b)break;I=await pe._fromGetAccountInfoResponse(e,b,E)}else I=pe._fromJSON(e,E);v!==l&&(u=I),l=v;break}}catch{}const p=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new et(l,e,s):(l=p[0],u&&await l._set(c,u.toJSON()),await Promise.all(n.map(async v=>{if(v!==l)try{await v._remove(c)}catch{}})),new et(l,e,s))}}/**
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
 */function pr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ec(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ac(e))return"Blackberry";if(xc(e))return"Webos";if(bc(e))return"Safari";if((e.includes("chrome/")||Sc(e))&&!e.includes("edge/"))return"Chrome";if(kc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function wc(i=ge()){return/firefox\//i.test(i)}function bc(i=ge()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sc(i=ge()){return/crios\//i.test(i)}function Ec(i=ge()){return/iemobile/i.test(i)}function kc(i=ge()){return/android/i.test(i)}function Ac(i=ge()){return/blackberry/i.test(i)}function xc(i=ge()){return/webos/i.test(i)}/**
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
 */function eo(i,e=[]){let n;switch(i){case"Browser":n=pr(ge());break;case"Worker":n=`${pr(ge())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${s}`}/**
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
 */class Oc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=l=>new Promise((c,u)=>{try{const p=e(l);c(p)}catch(p){u(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Dc(i,e={}){return Ii(i,"GET","/v2/passwordPolicy",Kr(i,e))}/**
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
 */const Pc=6;class Lc{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Pc,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Cc{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gr(this),this.idTokenSubscription=new gr(this),this.beforeStateQueue=new Oc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fe(n)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await et.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hi(this,{idToken:e}),s=await pe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Be(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,u=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===u)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(si(this));const n=e?Mt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(si(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(si(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dc(this),n=new Lc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Tc(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fe(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await et.create(this,[Fe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(u,this,"internal-error"),u.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&rc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Nc(i){return Mt(i)}class gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=va(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Rc(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Fe);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new Bt(3e4,6e4);/**
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
 */new Bt(2e3,1e4);/**
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
 */new Bt(3e4,6e4);/**
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
 */new Bt(5e3,15e3);var vr="@firebase/auth",yr="1.13.0";/**
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
 */class Mc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $c(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bc(i){it(new tt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=s.options;W(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:u,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eo(i)},v=new Cc(s,o,l,p);return Rc(v,n),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),it(new tt("auth-internal",e=>{const n=Nc(e.getProvider("auth").getImmediate());return(s=>new Mc(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oe(vr,yr,$c(i)),Oe(vr,yr,"esm2020")}/**
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
 */const Wc=5*60;aa("authIdTokenMaxAge");Bc("Browser");console.warn("⚠️ Firebase未設定。.envファイルにAPIキーを設定してください。");function to(i){const e=new Date(i),n=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${n}-${s}-${o}`}function nt(i){const e=new Date(i),n=["日","月","火","水","木","金","土"];return`${e.getMonth()+1}月${e.getDate()}日（${n[e.getDay()]}）`}function Ge(){return to(new Date)}function io(i){const e=Math.floor(i/60),n=i%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ie(i){if(!i)return 0;const[e,n]=i.split(":").map(Number);return e*60+n}function no(){return Date.now().toString(36)+Math.random().toString(36).slice(2,9)}function so(i,e,n,s){const l=ei(n-i),c=ei(s-e),u=Math.sin(l/2)**2+Math.cos(ei(i))*Math.cos(ei(n))*Math.sin(c/2)**2;return 6371*2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))}function ei(i){return i*(Math.PI/180)}function te(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}function C(i,e="info",n=3e3){const s=document.getElementById("toast-container"),o={success:"check_circle",error:"error",warning:"warning",info:"info"},l=document.createElement("div");l.className=`toast ${e}`,l.innerHTML=`
    <span class="material-icons-round toast-icon">${o[e]||"info"}</span>
    <span>${te(i)}</span>
  `,s.appendChild(l),setTimeout(()=>{l.style.opacity="0",l.style.transform="translateX(40px)",l.style.transition="all .3s ease",setTimeout(()=>l.remove(),300)},n)}function Ti(i,e,n=""){const s=document.getElementById("modal-overlay");document.getElementById("modal-title").textContent=i,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=n,s.style.display="flex"}function Pe(){document.getElementById("modal-overlay").style.display="none"}function wi(i,e){return new Promise(n=>{const s=`<p>${te(e)}</p>`;Ti(i,s,`
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `),document.getElementById("confirm-ok").onclick=()=>{Pe(),n(!0)},document.getElementById("confirm-cancel").onclick=()=>{Pe(),n(!1)}})}function ro(i,e){if(!i)return 0;let n=1500;return i.type==="正社員"?i.name.includes("前川")?n=2500:n=1500:i.type==="パート"&&(n=parseInt(i.wage)||1500),Math.round(n*(e/60))}function vn(i,e){const s={身体介護:{20:1670,30:2500,60:3960,90:5790,120:7630},生活援助:{20:1830,45:2250,60:2870},通院等乗降介助:{per_trip:990},医療的ケア:{30:3e3,60:5e3}}[i];if(!s)return 3e3;if(s.per_trip)return s.per_trip;const o=Object.keys(s).map(Number).sort((c,u)=>c-u);let l=o[0];for(const c of o)e>=c&&(l=c);return s[l]||3e3}function Uc(i){{console.warn("Firebase未設定のためログイン画面を表示します"),setTimeout(()=>i(null,null),100);return}}async function Fc(){throw new Error("Firebase未設定です。.envにAPIキーを設定してください。")}async function Vc(){}function jc(){const i=document.getElementById("btn-google-login");i&&i.addEventListener("click",async()=>{i.disabled=!0,i.textContent="ログイン中...";try{await Fc()}catch(e){console.error("ログインエラー:",e),e.code==="auth/popup-closed-by-user"?C("ログインがキャンセルされました","warning"):C("ログインに失敗しました","error"),i.disabled=!1,i.innerHTML=`
        <svg viewBox="0 0 24 24" width="20" height="20" class="google-icon">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleアカウントでログイン
      `}})}const Ae={};function st(i){if(!Ae[i]){const e=localStorage.getItem(`careroute_${i}`);Ae[i]=e?JSON.parse(e):[]}return Ae[i]}function bi(i){localStorage.setItem(`careroute_${i}`,JSON.stringify(Ae[i]||[]))}async function _r(){localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"),localStorage.removeItem("careroute_routes"),Ae.staff=[],Ae.clients=[],Ae.visits=[],Ae.routes=[]}async function Pn(i,e){{const n=no();return st(i).push({id:n,...e,createdAt:new Date().toISOString()}),bi(i),n}}async function Ln(i){return st(i)}async function Cn(i,e,n){{const s=st(i),o=s.findIndex(l=>l.id===e);o!==-1&&(s[o]={...s[o],...n,updatedAt:new Date().toISOString()},bi(i));return}}async function Nn(i,e){{const n=st(i),s=n.findIndex(o=>o.id===e);s!==-1&&(n.splice(s,1),bi(i));return}}async function oo(i,e,n,s){return st(i).filter(l=>l[e]===s)}async function le(){return Ln("staff")}async function ao(i){return Pn("staff",i)}async function qc(i,e){return Cn("staff",i,e)}async function zc(i){return Nn("staff",i)}async function _e(){return Ln("clients")}async function lo(i){return Pn("clients",i)}async function Hc(i,e){return Cn("clients",i,e)}async function Gc(i){return Nn("clients",i)}async function co(){return Ln("visits")}async function Ce(i){return oo("visits","date","==",i)}async function Si(i){return Pn("visits",i)}async function mi(i,e){return Cn("visits",i,e)}async function uo(i){return Nn("visits",i)}async function Rn(i){return oo("routes","date","==",i)}async function Kc(i){{const e=st("routes");for(const n of i){const s=e.findIndex(o=>o.staffId===n.staffId&&o.date===n.date);s>=0?e[s]={...n,updatedAt:new Date().toISOString()}:e.push({id:no(),...n,createdAt:new Date().toISOString()})}bi("routes");return}}async function Jc(){const i=document.getElementById("page-container"),[e,n]=await Promise.all([le().catch(()=>[]),_e().catch(()=>[])]),s=Ge(),o=await Ce(s).catch(()=>[]),l=e.filter(I=>I.isActive);n.filter(I=>I.isActive);const c=o.filter(I=>I.type!=="sales");c.filter(I=>I.status==="scheduled"||!I.status);const u=c.filter(I=>I.status==="completed"),p=c.filter(I=>I.status==="cancelled"),v=o.filter(I=>I.type==="sales"),E={};p.forEach(I=>{const b=I.cancelReason||"理由なし";E[b]=(E[b]||0)+1}),i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${nt(new Date)}</span>
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
        <div class="stat-value">${v.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
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
          ${l.length===0?'<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>':l.map(I=>{const b=c.filter(P=>P.staffId===I.id),k=b.filter(P=>P.status==="completed").length,D=b.filter(P=>P.status==="cancelled").length,A=v.filter(P=>P.staffId===I.id).length;return`
                  <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--border)">
                    <div style="width:12px;height:12px;border-radius:50%;background:${I.color||"#999"};flex-shrink:0"></div>
                    <div style="flex:1">
                      <div style="font-weight:600">${I.name}</div>
                      <div style="font-size:.8rem;color:var(--text-muted)">訪問: ${b.length}件</div>
                    </div>
                    <div style="display:flex; gap:16px;">
                      <div style="text-align:center;">
                        <div style="font-size:0.7rem; color:var(--text-muted);">完了</div>
                        <div style="font-weight:bold; color:var(--success);">${k}</div>
                      </div>
                      <div style="text-align:center;">
                        <div style="font-size:0.7rem; color:var(--text-muted);">キャンセル</div>
                        <div style="font-weight:bold; color:${D>0?"var(--danger)":"var(--text-muted)"};">${D}</div>
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
          ${p.length===0?'<p style="color:var(--text-muted); text-align:center; padding:20px;">本日のキャンセルはありません</p>':Object.entries(E).map(([I,b])=>{const k=Math.round(b/p.length*100);return`
                  <div style="margin-bottom:12px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                      <span>${I}</span>
                      <span style="font-weight:bold;">${b}件 (${k}%)</span>
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
  `}let se=null,Dt=[],yn=[],Pt=null,_n=null,In=[];function Lt(){return new Promise((i,e)=>{if(window.google&&window.google.maps){i();return}const n="AIzaSyCXFNBQjeiYpRYFdbs6VhISqlFZhrybM74",s=document.createElement("script");s.src=`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=geometry,places&language=ja`,s.async=!0,s.defer=!0,s.onload=i,s.onerror=()=>e(new Error("Google Maps APIの読み込みに失敗しました")),document.head.appendChild(s)})}function Xc(i,e={lat:35.6938,lng:139.7034},n=14){const s=document.getElementById(i);return s?!window.google||!window.google.maps?(s.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `,null):(se=new google.maps.Map(s,{center:e,zoom:n,mapTypeControl:!0,streetViewControl:!1,fullscreenControl:!0,styles:id()}),Pt=new google.maps.InfoWindow,_n=new google.maps.DirectionsService,se):null}function ho(i,e={}){if(!se)return null;const n=new google.maps.Marker({map:se,position:i,title:e.title||"",icon:e.icon||void 0,label:e.label||void 0});return e.infoContent&&n.addListener("click",()=>{Pt.setContent(e.infoContent),Pt.open(se,n)}),Dt.push(n),n}function Ir(i,e,n,s){if(!se)return null;const o={path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",fillColor:e,fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1.8,anchor:new google.maps.Point(12,22),labelOrigin:new google.maps.Point(12,9)};return ho(i,{icon:o,label:void 0,infoContent:s})}function Yc(i,e){return se?ho(i,{title:e,icon:{path:"M12 2L2 7v10l10 5 10-5V7L12 2z",fillColor:"#F59E0B",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:2,anchor:new google.maps.Point(12,12)},infoContent:`<div style="color:#333;padding:4px"><strong>🏢 ${e}</strong><br>（出発地点）</div>`}):null}function Qc(i,e,n){if(!se)return null;const s=i.map(l=>({lat:l.lat,lng:l.lng})),o=new google.maps.Polyline({path:s,geodesic:!0,strokeColor:e,strokeOpacity:.8,strokeWeight:4,map:se});return yn.push(o),o}async function Zc(i,e){if(!se||!_n||i.length<2)return;const n=i[0],s=i[i.length-1],o=i.slice(1,-1).map(l=>({location:new google.maps.LatLng(l.lat,l.lng),stopover:!0}));try{const l=await new Promise((u,p)=>{_n.route({origin:new google.maps.LatLng(n.lat,n.lng),destination:new google.maps.LatLng(s.lat,s.lng),waypoints:o,travelMode:google.maps.TravelMode.DRIVING,optimizeWaypoints:!1},(v,E)=>{E==="OK"?u(v):p(new Error(`Directions API: ${E}`))})}),c=new google.maps.DirectionsRenderer({map:se,directions:l,suppressMarkers:!0,polylineOptions:{strokeColor:e,strokeWeight:4,strokeOpacity:.8}});return In.push(c),c}catch(l){return console.warn("Directions API呼び出し失敗。直線ポリラインで代替:",l),Qc(i,e)}}async function Tr(i){if(!window.google||!window.google.maps)return null;const e=new google.maps.DistanceMatrixService,n=i.map(s=>new google.maps.LatLng(s.lat,s.lng));try{return(await new Promise((l,c)=>{e.getDistanceMatrix({origins:n,destinations:n,travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC},(u,p)=>{p==="OK"?l(u):c(new Error(`Distance Matrix API: ${p}`))})})).rows.map(l=>l.elements.map(c=>({distance:c.status==="OK"?c.distance.value/1e3:null,duration:c.status==="OK"?Math.ceil(c.duration.value/60):null})))}catch(s){return console.error("Distance Matrix取得失敗:",s),null}}function ed(){Dt.forEach(i=>i.setMap(null)),Dt=[],yn.forEach(i=>i.setMap(null)),yn=[],In.forEach(i=>i.setMap(null)),In=[],Pt&&Pt.close()}function td(){if(!se||Dt.length===0)return;const i=new google.maps.LatLngBounds;Dt.forEach(e=>i.extend(e.getPosition())),se.fitBounds(i,50)}async function fo(i){if(!i||i.trim()==="")return null;if(!window.google||!window.google.maps)return console.warn("ジオコーディング: Google Maps APIが未読み込みです"),null;const e=new google.maps.Geocoder;try{return await new Promise((s,o)=>{e.geocode({address:i,region:"jp"},(l,c)=>{if(c==="OK"&&l[0]){const u=l[0].geometry.location;s({lat:u.lat(),lng:u.lng()})}else o(new Error(`ジオコーディング失敗: ${c}`))})})}catch(n){return console.warn("住所の座標変換に失敗:",n.message),null}}function id(){return[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}const pi={qualifications:{label:"資格",options:["介護福祉士","実務者研修修了","初任者研修修了","看護師","ヘルパー2級"]},services:{label:"対応可能サービス",options:["身体介護","生活援助","通院等乗降介助","医療的ケア"]},physical:{label:"身体的対応力",options:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"]},special:{label:"特別スキル",options:["認知症ケア","ターミナルケア","精神障害対応","障害児支援"]}},nd=["要支援1","要支援2","要介護1","要介護2","要介護3","要介護4","要介護5"],mo=["身体介護","生活援助","通院等乗降介助","医療的ケア"],sd=["男性","女性"],rd=["指定なし","男性希望","女性希望"],od=["利用者の体調不良","利用者の入院","家族の都合","不在・応答なし","その他"],ad=["居宅介護支援事業所（ケアマネ）","地域包括支援センター","医療機関（退院調整室）","その他"],ld=["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],wr=["#4A90D9","#E74C3C","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#3498DB","#E91E63","#00BCD4","#8BC34A","#FF5722"],Tt={requiredSkill:1e3,genderMatch:2e3,staffType:500,proximity:30},ri=25,Q={name:"事業所（拠点）",address:"〒501-3304 岐阜県加茂郡富加町高畑２９１",lat:35.497,lng:136.993};let Tn="all",gi=Ge();async function cd(){var n,s,o;const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <input type="date" id="map-date-picker" class="form-input" value="${gi}" style="width:160px">
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
  `;try{await Lt()}catch(l){console.warn("Maps APIの読み込みスキップ:",l)}const e=Xc("map-canvas",{lat:Q.lat,lng:Q.lng});await ti(e),(n=document.getElementById("map-date-picker"))==null||n.addEventListener("change",l=>{gi=l.target.value,ti(e)}),(s=document.getElementById("staff-filter"))==null||s.addEventListener("change",l=>{Tn=l.target.value,ti(e)}),(o=document.getElementById("btn-refresh-map"))==null||o.addEventListener("click",()=>{ti(e)})}async function ti(i){const[e,n,s]=await Promise.all([le().catch(()=>[]),_e().catch(()=>[]),Ce(gi).catch(()=>[])]),o=document.getElementById("staff-filter");if(o&&o.options.length<=1&&e.forEach(c=>{const u=document.createElement("option");u.value=c.id,u.textContent=c.name,o.appendChild(u)}),!i){ud(e,n);return}ed(),Yc({lat:Q.lat,lng:Q.lng},Q.name);const l=await Rn(gi).catch(()=>[]);if(l.length>0)for(const c of l){if(Tn!=="all"&&c.staffId!==Tn)continue;const u=e.find(E=>E.id===c.staffId),p=(u==null?void 0:u.color)||"#999",v=[{lat:Q.lat,lng:Q.lng}];for(const E of c.clientIds||[]){const I=n.find(b=>b.id===E);I&&(v.push({lat:I.lat,lng:I.lng}),Ir({lat:I.lat,lng:I.lng},p,"",`<div style="color:#333;padding:4px">
              <strong>${I.name}</strong><br>
              ${I.careLevel} | ${(I.requiredServices||[]).join(", ")}<br>
              <small>担当: ${(u==null?void 0:u.name)||"未定"}</small>
            </div>`))}v.push({lat:Q.lat,lng:Q.lng}),await Zc(v,p)}else{const c=n.filter(u=>u.isActive&&s.some(p=>p.clientId===u.id));for(const u of c){const p=s.filter(v=>v.clientId===u.id).map(v=>`${v.startTime}〜${v.endTime}`).join(", ");Ir({lat:u.lat,lng:u.lng},"#94A3B8","",`<div style="color:#333;padding:4px">
          <strong>${u.name}</strong><br>
          予定: ${p}<br>
          ${u.careLevel} | ${(u.requiredServices||[]).join(", ")}
        </div>`)}}td(),dd(e,l,s)}function dd(i,e,n=[]){const s=document.getElementById("route-legend");if(s){if(e.length===0){s.innerHTML=`
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
  `}}function ud(i,e){const n=document.getElementById("route-legend");n&&(n.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${i.length}名<br>
        利用者: ${e.length}名
      </div>
    `)}let Ct=[];async function Mn(){const i=document.getElementById("page-container");Ct=await le().catch(()=>[]),i.innerHTML=`
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
      ${hd(Ct)}
    </div>
  `,document.getElementById("btn-add-staff").addEventListener("click",()=>po())}function hd(i){return i.length===0?`
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
                ${te(((n=e.name)==null?void 0:n.charAt(0))||"?")}
              </div>
              <div>
                <div style="font-weight:600;font-size:1.05rem">${te(e.name)}</div>
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
  `}function po(i=null){const e=!!i,n=e?"職員情報の編集":"新規職員登録",s=`
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${sd.map(l=>`<option value="${l}" ${(i==null?void 0:i.gender)===l?"selected":""}>${l}</option>`).join("")}
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
      ${Object.entries(pi).map(([l,c])=>`
        <div class="form-group">
          <label class="form-label">${c.label}</label>
          <div class="tags-container" style="gap:8px">
            ${c.options.map(u=>{var v,E;const p=(E=(v=i==null?void 0:i.skills)==null?void 0:v[l])!=null&&E.includes(u)?"checked":"";return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${l}" value="${u}" ${p} /> ${u}
              </label>`}).join("")}
          </div>
        </div>
      `).join("")}
    </form>
  `;Ti(n,s,`
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("sf-cancel").onclick=Pe,document.getElementById("sf-save").onclick=async()=>{const l=document.getElementById("sf-name").value.trim();if(!l){C("氏名を入力してください","warning");return}const c=document.getElementById("sf-save");c.disabled=!0,c.textContent="保存中...";const u=document.getElementById("sf-address").value.trim();let p=(i==null?void 0:i.lat)||Q.lat,v=(i==null?void 0:i.lng)||Q.lng;if(u)try{await Lt();const I=await fo(u);I?(p=I.lat,v=I.lng):C("住所から座標を取得できませんでした","warning")}catch(I){console.warn("ジオコーディング失敗:",I)}const E={name:l,gender:document.getElementById("sf-gender").value,address:u,workStart:document.getElementById("sf-work-start").value,workEnd:document.getElementById("sf-work-end").value,lat:p,lng:v,skills:{},color:(i==null?void 0:i.color)||wr[Ct.length%wr.length],isActive:!0};for(const[I]of Object.entries(pi)){const b=document.querySelectorAll(`input[name="skill-${I}"]:checked`);E.skills[I]=Array.from(b).map(k=>k.value)}try{e?(await qc(i.id,E),C("職員情報を更新しました","success")):(await ao(E),C("職員を登録しました","success")),Pe(),await Mn()}catch(I){C("保存に失敗しました: "+I.message,"error")}finally{c.disabled=!1,c.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-staff]");if(e){const s=Ct.find(o=>o.id===e.dataset.editStaff);s&&po(s)}const n=i.target.closest("[data-delete-staff]");if(n){const s=Ct.find(o=>o.id===n.dataset.deleteStaff);if(s&&await wi("削除確認",`${s.name} を削除しますか？`))try{await zc(s.id),C(`${s.name} を削除しました`,"success"),await Mn()}catch{C("削除に失敗しました","error")}}});let vi=[],br=[];async function $n(){const i=document.getElementById("page-container");try{const[e,n]=await Promise.all([_e().catch(()=>[]),co().catch(()=>[])]);vi=e,br=n}catch(e){console.error("データの取得に失敗",e)}i.innerHTML=`
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
      ${fd(vi,br)}
    </div>
  `,document.getElementById("btn-add-client").addEventListener("click",()=>go())}function fd(i,e){return i.length===0?`<div class="empty-state">
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
          ${i.map(n=>{var c,u;const s={月:1,火:2,水:3,木:4,金:5,土:6,日:7},o=e.filter(p=>p.clientId===n.id).sort((p,v)=>{const E=s[p.dayOfWeek]||99,I=s[v.dayOfWeek]||99;return E-I}),l=o.length>0?o.map(p=>`<div style="font-size:0.85rem;margin-bottom:2px;">
                  <span class="tag" style="background:#E2E8F0;color:#333">${p.dayOfWeek||"不明"}</span>
                  ${p.startTime}〜${p.endTime} (${p.duration}分)
                </div>`).join(""):'<span style="color:var(--text-muted)">設定なし</span>';return`<tr>
              <td><strong>${te(n.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${n.genderPreference!=="指定なし"?n.genderPreference:""}</span></td>
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
  `}function go(i=null){var l,c;const e=!!i,n=[...pi.physical.options,...pi.special.options],s=`
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${nd.map(u=>`<option ${(i==null?void 0:i.careLevel)===u?"selected":""}>${u}</option>`).join("")}
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
          ${mo.map(u=>{var p;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
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
  `;Ti(e?"利用者情報の編集":"新規利用者登録",s,`
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("cf-cancel").onclick=Pe,document.getElementById("cf-save").onclick=async()=>{const u=document.getElementById("cf-name").value.trim();if(!u){C("氏名を入力してください","warning");return}const p=document.getElementById("cf-save");p.disabled=!0,p.textContent="保存中...";const v=document.getElementById("cf-address").value.trim();let E=(i==null?void 0:i.lat)||Q.lat,I=(i==null?void 0:i.lng)||Q.lng;if(v)try{await Lt();const k=await fo(v);k?(E=k.lat,I=k.lng,C(`座標を取得しました: ${k.lat.toFixed(4)}, ${k.lng.toFixed(4)}`,"success")):C("住所から座標を取得できませんでした。事業所付近の座標を使用します。","warning")}catch(k){console.warn("ジオコーディング失敗:",k),C("座標取得に失敗。事業所付近の座標を使用します。","warning")}const b={name:u,careLevel:document.getElementById("cf-care-level").value,address:v,requiredServices:Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(k=>k.value),requiredSkills:Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(k=>k.value),genderPreference:document.getElementById("cf-gender-pref").value,visitDuration:parseInt(document.getElementById("cf-duration").value)||60,timeWindow:{start:document.getElementById("cf-time-start").value,end:document.getElementById("cf-time-end").value},notes:document.getElementById("cf-notes").value.trim(),lat:E,lng:I,isActive:!0};try{e?(await Hc(i.id,b),C("利用者情報を更新しました","success")):(await lo(b),C("利用者を登録しました","success")),Pe(),await $n()}catch(k){C("保存に失敗しました: "+k.message,"error")}finally{p.disabled=!1,p.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-client]");if(e){const s=vi.find(o=>o.id===e.dataset.editClient);s&&go(s)}const n=i.target.closest("[data-delete-client]");if(n){const s=vi.find(o=>o.id===n.dataset.deleteClient);if(s&&await wi("削除確認",`${s.name} を削除しますか？`))try{await Gc(s.id),C(`${s.name} を削除しました`,"success"),await $n()}catch{C("削除に失敗しました","error")}}});let Ve=Ge();async function md(){const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">calendar_month</span>
        スケジュール管理
      </h1>
      <div class="btn-group">
        <input type="date" id="schedule-date" class="form-input" value="${Ve}" style="width:180px" />
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
  `,document.getElementById("schedule-date").addEventListener("change",e=>{Ve=e.target.value,Nt()}),document.getElementById("btn-add-visit").addEventListener("click",pd),document.getElementById("btn-generate-week").addEventListener("click",gd),await Nt()}async function Nt(){const i=document.getElementById("schedule-content"),[e,n,s,o]=await Promise.all([le().catch(()=>[]),_e().catch(()=>[]),Ce(Ve).catch(()=>[]),Rn(Ve).catch(()=>[])]);if(s.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round">event_busy</span>
        <h3>${nt(Ve)} の訪問予定はありません</h3>
        <p>「訪問追加」ボタンから予定を登録するか、マッチング＆最適化を実行してください</p>
      </div>
    `;return}const l={},c=[];let u=0,p=0,v=0;for(const b of s)b.staffId?(l[b.staffId]||(l[b.staffId]=[]),l[b.staffId].push(b)):c.push(b);c.sort((b,k)=>{const D=b.startTime||b.scheduledTime||"00:00",A=k.startTime||k.scheduledTime||"00:00";return D.localeCompare(A)});let E="";c.length>0&&(E=`
      <div class="card" style="border-left: 4px solid var(--danger); margin-bottom: 24px; background: rgba(239, 68, 68, 0.05);">
        <h3 class="card-title" style="color: var(--danger); margin-bottom: 12px;">
          <span class="material-icons-round">warning</span>
          未割り当ての訪問 (${c.length}件)
        </h3>
        <div class="grid grid-3" style="gap: 12px;">
          ${c.map(b=>{const k=n.find(D=>D.id===b.clientId);return`
              <div class="visit-card" style="border: 1px dashed var(--danger);">
                <div style="display:flex;justify-content:space-between;align-items:start">
                  <div>
                    <strong>${te(b.clientName||(k==null?void 0:k.name)||"不明")} ${b.type==="sales"?'<span class="tag" style="background:var(--warning);color:white;margin-left:4px">営業</span>':""}</strong>
                    <div style="font-size:.8rem;color:var(--text-muted)">${b.startTime} | ${b.duration||60}分</div>
                  </div>
                  <button class="btn-icon" data-delete-visit="${b.id}" style="color:var(--danger)">
                    <span class="material-icons-round">close</span>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `);for(const[b,k]of Object.entries(l)){const D=e.find(x=>x.id===b);if(!D)continue;const A=o.find(x=>x.staffId===b),P=parseInt(D.wage)||2e3;if(A&&(v+=(A.totalDistance||0)*ri),k.sort((x,L)=>{const R=x.optimizedArrivalTime||x.startTime||x.scheduledTime||"00:00",N=L.optimizedArrivalTime||L.startTime||L.scheduledTime||"00:00";return R.localeCompare(N)}),A&&A.schedule&&A.schedule.length>=2){const x=A.schedule[0].arrivalMinutes,R=(A.schedule[A.schedule.length-1].arrivalMinutes-x)/60;p+=R*P}else if(k.length>0){const x=k[0],L=k[k.length-1],R=x.startTime||x.scheduledTime||"09:00",N=L.startTime||L.scheduledTime||"17:00",B=ie(R),g=(ie(N)+(L.duration||60)-B)/60;p+=g*P}k.forEach((x,L)=>{u+=ro(D,x.duration||60);let R=10,N=null;if(A&&A.schedule){const B=A.schedule.find(V=>V.clientId===x.clientId);B&&(R=B.travelTimeFromPrev||10,N=B.arrivalTime)}x.calculatedTravelTime=R,x.optimizedArrivalTime=N}),k.sort((x,L)=>{const R=x.optimizedArrivalTime||x.startTime||x.scheduledTime||"00:00",N=L.optimizedArrivalTime||L.startTime||L.scheduledTime||"00:00";return R.localeCompare(N)})}let I="";if(window.isAdmin){const b=u-p-v,k=u>0?Math.round(b/u*100):0;I=`
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
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${v.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定利益 (利益率)</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: ${b>=0?"var(--success)":"var(--danger)"};">
              ¥${b.toLocaleString()} <span style="font-size: 1rem;">(${k}%)</span>
            </div>
          </div>
        </div>
      </div>
    `}i.innerHTML=`
    ${I}
    ${E}
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${nt(Ve)} — ${s.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(l).map(([b,k])=>{const D=e.find(A=>A.id===b);return`
          <div class="card" style="border-left:4px solid ${(D==null?void 0:D.color)||"#999"}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${(D==null?void 0:D.color)||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${k.length}
              </div>
              ${te((D==null?void 0:D.name)||"未割当")}
            </h3>
            <div class="schedule-timeline">
              ${k.map((A,P)=>{const x=n.find(B=>B.id===A.clientId),L=A.optimizedArrivalTime||A.startTime||A.scheduledTime||"--:--";let R="",N="";if(P>0){const B=k[P-1],V=B.optimizedArrivalTime||B.startTime||B.scheduledTime,g=A.calculatedTravelTime||10;if(V&&L!=="--:--"){const[h,m]=V.split(":").map(Number),[_,y]=L.split(":").map(Number),T=h*60+m+(B.duration||60),H=_*60+y-T;H<g&&(N=`
                          <div style="color:var(--danger); font-size: 0.8rem; padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border-radius: 4px; margin-bottom: 8px;">
                            <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">warning</span>
                            移動時間が不足しています（必要: ${g}分, 実際: ${H}分）
                          </div>
                        `),R=`
                        <div style="margin-left: 60px; padding: 4px 0; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; border-left: 2px dashed var(--border); padding-left: 14px;">
                          <span class="material-icons-round" style="font-size: 14px; margin-right: 4px;">directions_car</span>
                          移動時間: 約${g}分
                        </div>
                      `}}return`
                  ${R}
                  ${N}
                  <div class="time-slot">
                    <div class="time-label">${L}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${te(A.clientName||(x==null?void 0:x.name)||"不明")} ${A.type==="sales"?'<span class="tag" style="background:var(--warning);color:white;margin-left:4px">営業</span>':""}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">
                              ${A.type==="sales"?"営業活動":A.serviceInfo||A.service||"訪問"} | ${A.duration||60}分
                            </div>
                            <div style="font-size:.75rem;color:var(--text-muted); margin-top:2px;">
                              <span class="material-icons-round" style="font-size:12px;vertical-align:middle">place</span>
                              ${te(A.type==="sales"?A.salesTarget||"営業先":(x==null?void 0:x.area)||"未設定")}
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
  `}async function pd(){const[i,e]=await Promise.all([le().catch(()=>[]),_e().catch(()=>[])]),n=`
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
          ${mo.map(o=>`<option>${o}</option>`).join("")}
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
  `;Ti("訪問予定の追加",n,`
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `);const s=()=>{const o=document.getElementById("vf-service").value,l=parseInt(document.getElementById("vf-duration").value)||60,c=vn(o,l);document.getElementById("vf-income").value=c,document.getElementById("vf-income-hint").textContent=`↑ ${o} ${l}分 → ¥${c.toLocaleString()}（自動計算）`};document.getElementById("vf-service").addEventListener("change",s),document.getElementById("vf-duration").addEventListener("change",s),s(),document.getElementById("vf-cancel").onclick=Pe,document.getElementById("vf-save").onclick=async()=>{const o=document.getElementById("vf-client").value,l=document.getElementById("vf-staff").value;if(!o||!l){C("利用者と職員を選択してください","warning");return}try{const c=parseInt(document.getElementById("vf-duration").value)||60,u=document.getElementById("vf-service").value,p=document.getElementById("vf-time").value,v=ie(p)+c,E=Math.floor(v/60),I=v%60,b=`${String(E).padStart(2,"0")}:${String(I).padStart(2,"0")}`;await Si({date:Ve,clientId:o,staffId:l,startTime:p,endTime:b,scheduledTime:p,duration:c,service:u,income:parseInt(document.getElementById("vf-income").value)||vn(u,c),status:"scheduled"}),C("訪問予定を追加しました","success"),Pe(),await Nt()}catch{C("追加に失敗しました","error")}}}async function gd(){var e;if(await wi("週間スケジュール自動生成",`利用者の曜日設定に基づいて、今週（月〜土）の訪問予定を自動生成します。
既存の予定がある日はスキップされます。

実行しますか？`))try{const[n,s]=await Promise.all([_e(),co()]),o={月:1,火:2,水:3,木:4,金:5,土:6},l=new Date,c=l.getDay(),u=s.filter(I=>I.dayOfWeek&&o[I.dayOfWeek]!==void 0);let p=0,v=0;const E=new Map;for(const I of u){const b=o[I.dayOfWeek];if(b===void 0)continue;const k=b-c,D=new Date(l);D.setDate(l.getDate()+k);const A=to(D),P=`${A}_${I.clientId}`;if(E.has(P)){E.get(P).timeOptions.push({startTime:I.startTime||"09:00",duration:I.duration||60});continue}if((await Ce(A)).some(L=>L.clientId===I.clientId)){E.set(P,null),v++;continue}E.set(P,{...I,date:A,timeOptions:[{startTime:I.startTime||"09:00",duration:I.duration||60}]})}for(const[I,b]of E){if(!b)continue;const k=n.find(V=>V.id===b.clientId),D=b.service||((e=k==null?void 0:k.requiredServices)==null?void 0:e[0])||"身体介護",A=b.duration||(k==null?void 0:k.visitDuration)||60,P=b.startTime||"09:00",x=vn(D,A),L=ie(P)+A,R=Math.floor(L/60),N=L%60,B=`${String(R).padStart(2,"0")}:${String(N).padStart(2,"0")}`;await Si({date:b.date,clientId:b.clientId,clientName:b.clientName||(k==null?void 0:k.name)||"利用者",staffId:b.staffId||null,staffName:b.staffName||"未設定",startTime:P,endTime:B,scheduledTime:P,duration:A,service:D,income:x,dayOfWeek:b.dayOfWeek,status:"scheduled",timeOptions:b.timeOptions}),p++}p>0?C(`今週の訪問予定 ${p}件 を自動生成しました！${v>0?`（${v}件は既存のためスキップ）`:""}`,"success"):C(`生成する予定がありませんでした。${v>0?`（${v}件は既に登録済み）`:"利用者の曜日設定を確認してください。"}`,"warning"),await Nt()}catch(n){console.error("週間スケジュール生成エラー:",n),C("スケジュール生成に失敗しました: "+n.message,"error")}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-delete-visit]");if(e&&await wi("削除確認","この訪問予定を削除しますか？"))try{await uo(e.dataset.deleteVisit),C("訪問予定を削除しました","success"),await Nt()}catch{C("削除に失敗しました","error")}});function vd(i,e){var c,u,p,v,E;let n=0;const s=[];let o=!0;for(const I of e.requiredServices||[])(u=(c=i.skills)==null?void 0:c.services)!=null&&u.includes(I)?(n+=Tt.requiredSkill,s.push(`✅ ${I}対応可`)):(o=!1,s.push(`❌ ${I}に対応不可`));const l=[...((p=i.skills)==null?void 0:p.qualifications)||[],...((v=i.skills)==null?void 0:v.physical)||[],...((E=i.skills)==null?void 0:E.special)||[]];for(const I of e.requiredSkills||[])l.includes(I)?(n+=Tt.requiredSkill,s.push(`✅ ${I}あり`)):(o=!1,s.push(`❌ ${I}なし`));if(e.genderPreference&&e.genderPreference!=="指定なし"){const I=e.genderPreference.replace("希望","");i.gender===I?(n+=Tt.genderMatch,s.push(`✅ 性別希望合致（${I}）`)):(o=!1,s.push(`❌ 性別希望不一致（希望: ${I}）`))}if(i.type==="正社員"&&(n+=Tt.staffType,s.push("✅ 正社員")),i.lat&&e.lat){const I=so(i.lat,i.lng,e.lat,e.lng),b=Math.max(0,Tt.proximity*(1-I/10));n+=b}return{score:Math.round(n),reasons:s,eligible:o}}function yd(i,e,n=[],s=null,o=[]){const l=[],c=new Set,u={},p={};o.forEach((b,k)=>{p[b.id]=k});const v=(b,k)=>{if(!s)return 15;const D=p[b],A=p[k];return D!==void 0&&A!==void 0&&s[D][A]&&s[D][A].duration||15},E=[...e].sort((b,k)=>{const D=b.startTime||b.scheduledTime||"00:00",A=k.startTime||k.scheduledTime||"00:00";return D.localeCompare(A)});for(const b of E){if(l.some(x=>x.clientId===b.clientId))continue;const k=i.filter(x=>x.isActive).map(x=>{const L=n.find(g=>g.id===b.clientId),{score:R,eligible:N}=vd(x,L||b),B=b.timeOptions&&b.timeOptions.length>0?b.timeOptions:[{startTime:b.startTime||b.scheduledTime||"09:00",duration:b.duration||60}];let V=null;for(const g of B){let h=!0;const m=ie(g.startTime),_=m+(g.duration||60),y=l.filter(T=>T.staffId===x.id);for(const T of y){const f=ie(T.startTime),H=f+(T.duration||60);if(m<H&&_>f){h=!1;break}const ce=v(T.clientId,b.clientId);if(m>=H){if(m-H<ce){h=!1;break}}else if(_<=f&&f-_<ce){h=!1;break}}if(h){V=g;break}}return{staff:x,score:R,eligible:N&&!!V,chosenTime:V}}).filter(x=>x.eligible);if(k.length===0)continue;k.sort((x,L)=>{const R=u[x.staff.id]||0,N=u[L.staff.id]||0,B=x.staff.maxVisits||(x.staff.type==="パート"?5:10),V=L.staff.maxVisits||(L.staff.type==="パート"?5:10),g=R>=B,h=N>=V;return g!==h?g?1:-1:R!==N?R-N:x.staff.type!==L.staff.type?x.staff.type==="正社員"?-1:1:L.score-x.score});const D=k[0],A=u[D.staff.id]||0,P=D.staff.maxVisits||(D.staff.type==="パート"?5:10);if(A<P){const x=D.chosenTime.startTime,L=D.chosenTime.duration||60,R=ie(x)+L;l.push({staffId:D.staff.id,staffName:D.staff.name,visitId:b.id,clientId:b.clientId,clientName:b.clientName||"利用者",score:D.score,startTime:x,endTime:io(R),scheduledTime:x,duration:L}),c.add(b.id),u[D.staff.id]=A+1}}const I=e.filter(b=>!c.has(b.id)).map(b=>({visitId:b.id,clientName:b.clientName||"利用者",reason:"適格な職員なし、または上限超過"}));return{assignments:l,unassigned:I}}async function _d(i,e,n,s=Q,o=null){const l={};for(const u of i)l[u.staffId]||(l[u.staffId]=[]),l[u.staffId].push(u.clientId);const c={};for(const[u,p]of Object.entries(l)){const v=e.find(x=>x.id===u),E=p.map(x=>n.find(L=>L.id===x)).filter(Boolean);if(E.length===0)continue;const I=[{id:"office",name:"事業所",lat:s.lat,lng:s.lng,isOffice:!0},...E.map(x=>{const L=i.find(R=>R.clientId===x.id&&R.staffId===u);return{id:x.id,name:x.name,lat:x.lat,lng:x.lng,duration:x.visitDuration||60,scheduledStart:L?L.startTime:null,timeWindow:x.timeWindow}})];let b=null;typeof o=="function"&&(b=await o(I));const k=Id(I,b);let D=Td(I,k);D=wd(D,k);const A=bd(D,k),P=Sd(D,k,v,b,I);c[u]={staffId:u,staffName:(v==null?void 0:v.name)||"不明",staffColor:(v==null?void 0:v.color)||"#999",route:D,totalDistance:Math.round(A*10)/10,totalDuration:Ed(P),schedule:P}}return c}function Id(i,e=null){const n=i.length,s=Array.from({length:n},()=>Array(n).fill(0));for(let o=0;o<n;o++)for(let l=0;l<n;l++)o!==l&&(e&&e[o]&&e[o][l]&&e[o][l].distance!==null?s[o][l]=e[o][l].distance:s[o][l]=so(i[o].lat,i[o].lng,i[l].lat,i[l].lng));return s}function Td(i,e){const n=i.length,s=new Set([0]),o=[0],l=[],c=[];for(let v=1;v<n;v++){const E=i[v];E.timeWindow&&E.timeWindow.start?l.push({index:v,start:ie(E.timeWindow.start),end:ie(E.timeWindow.end)}):c.push(v)}l.sort((v,E)=>v.start-E.start);const u=[...l.map(v=>v.index),...c];let p=0;for(;s.size<n;){let v=-1,E=1/0;for(const I of u)s.has(I)||e[p][I]<E&&(E=e[p][I],v=I);if(v===-1)break;o.push(v),s.add(v),p=v}return o.push(0),o}function wd(i,e){const n=i.length;let s=!0,o=[...i];for(;s;){s=!1;for(let l=1;l<n-2;l++)for(let c=l+1;c<n-1;c++){const u=e[o[l-1]][o[l]]+e[o[c]][o[c+1]];if(e[o[l-1]][o[c]]+e[o[l]][o[c+1]]<u-.001){const v=[...o];let E=l,I=c;for(;E<I;)[v[E],v[I]]=[v[I],v[E]],E++,I--;o=v,s=!0}}}return o}function bd(i,e){let n=0;for(let s=0;s<i.length-1;s++)n+=e[i[s]][i[s+1]];return n}function Sd(i,e,n,s=null,o=[]){const l=[];let u=ie((n==null?void 0:n.workStart)||"08:30");for(let p=0;p<i.length;p++){let v=0;if(p>0){const I=i[p-1],b=i[p];s&&s[I]&&s[I][b]&&s[I][b].duration!==null?v=s[I][b].duration:v=e[I][b]/20*60,u+=Math.ceil(v)}const E=o[i[p]];if(E){let I=0;E.timeWindow&&E.timeWindow.start?I=ie(E.timeWindow.start):E.scheduledStart&&(I=ie(E.scheduledStart)),u<I&&(u=I)}if(l.push({pointIndex:i[p],clientId:E?E.id:null,arrivalTime:io(u),arrivalMinutes:u,travelTimeFromPrev:Math.ceil(v)}),p>0&&p<i.length-1){const I=E&&E.duration||60;u+=I}}return l}function Ed(i){if(i.length<2)return 0;const e=i[0].arrivalMinutes;return i[i.length-1].arrivalMinutes-e}let oi=null,kd=null,ze=Ge();async function vo(){const i=document.getElementById("page-container"),e=await le(),n=["日","月","火","水","木","金","土"][new Date(ze).getDay()];i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">auto_fix_high</span>
        マッチング＆ルート最適化
      </h1>
      <div style="display:flex;align-items:center;gap:12px">
        <input type="date" id="match-date-picker" class="form-input" value="${ze}" style="width:160px">
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
                <div style="font-weight:600">${te(s.name)}</div>
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
  `,document.getElementById("match-date-picker").addEventListener("change",s=>{ze=s.target.value,vo()}),document.getElementById("btn-run-optimization").addEventListener("click",Ad)}async function Ad(){var n;const i=document.getElementById("btn-run-optimization"),e=document.getElementById("optimization-results");i.disabled=!0,i.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',e.innerHTML="";try{const[s,o,l]=await Promise.all([le(),_e(),Ce(ze)]),c=Array.from(document.querySelectorAll(".staff-attendance-checkbox:checked")).map(k=>k.dataset.staffId),u=s.filter(k=>c.includes(k.id));if(u.length===0){C("出勤する職員を少なくとも1名選択してください","warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}if(l.length===0){C(`${nt(new Date(ze))} の訪問予定がありません。`,"warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}const p=[{id:"office",...Q},...o.map(k=>({id:k.id,lat:k.lat,lng:k.lng}))];let v=null;try{await Lt(),v=await Tr(p)}catch(k){console.warn("全体距離行列の取得に失敗:",k)}const{assignments:E,unassigned:I}=yd(u,l,o,v,p);oi=E;const b=await _d(E,u,o,Q,async k=>{try{return await Lt(),await Tr(k)}catch(D){return console.warn("実走行データの取得に失敗:",D),null}});kd=b,e.innerHTML=xd(s,o,E,I,b),(n=document.getElementById("btn-save-routes"))==null||n.addEventListener("click",async()=>{await Od(s,b)}),C("最適化が完了しました！","success")}catch(s){C("最適化に失敗しました: "+s.message,"error"),console.error(s)}finally{i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行'}}function xd(i,e,n,s,o){const l={};for(const c of n)l[c.staffId]||(l[c.staffId]={staff:i.find(u=>u.id===c.staffId),clients:[]}),l[c.staffId].clients.push({...c,client:e.find(u=>u.id===c.clientId)});return`
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
      ${Object.entries(l).map(([c,u])=>{var v,E,I;const p=o[c];return`
          <div class="card" style="border-left:4px solid ${((v=u.staff)==null?void 0:v.color)||"#999"}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${((E=u.staff)==null?void 0:E.color)||"#999"};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${u.clients.length}
                </div>
                ${te(((I=u.staff)==null?void 0:I.name)||"不明")}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${((p==null?void 0:p.totalDistance)||0).toFixed(1)}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${((p==null?void 0:p.schedule)||[]).filter(b=>b.pointIndex!==0||p.schedule.indexOf(b)===p.schedule.length-1).map((b,k,D)=>{var P,x;if(b.pointIndex===0&&k===D.length-1)return`<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${b.arrivalTime} 事業所帰着
                    </div>`;const A=u.clients.find(L=>L.clientId===b.clientId);return`<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${b.arrivalTime} ${((P=A==null?void 0:A.client)==null?void 0:P.name)||"利用者"}</strong>
                      <span class="tag">${((x=A==null?void 0:A.client)==null?void 0:x.visitDuration)||60}分</span>
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
          <div style="padding:6px 0;color:var(--text-secondary)">
            ${te(c.clientName)} — ${c.reason}
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
  `}async function Od(i,e){try{const n=Object.entries(e).map(([l,c])=>{const u=oi.filter(p=>p.staffId===l).map(p=>p.clientId);return{staffId:l,date:ze,clientIds:u,totalDistance:c.totalDistance,totalDuration:c.totalDuration,schedule:c.schedule}}),s=await Ce(ze),o=new Set;for(const l of s){const c=oi.find(u=>u.visitId===l.id);c&&(await mi(l.id,{staffId:c.staffId,staffName:c.staffName,startTime:c.startTime,endTime:c.endTime,scheduledTime:c.scheduledTime}),o.add(l.clientId))}for(const l of s)oi.find(u=>u.visitId===l.id)||(o.has(l.clientId)?await uo(l.id):await mi(l.id,{staffId:null,staffName:"未設定"}));await Kc(n),C("スケジュールとルートを保存しました！","success")}catch(n){C("保存に失敗しました: "+n.message,"error")}}let At=Ge();async function Dd(){var e,n;const i=document.getElementById("page-container");if(!window.isAdmin){i.innerHTML=`
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
        <input type="date" id="revenue-date-picker" class="form-input" value="${At}" style="width:160px">
        <button class="btn btn-secondary" id="btn-refresh-revenue">
          <span class="material-icons-round">refresh</span>
          更新
        </button>
      </div>
    </div>

    <div id="revenue-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,await ln(),(e=document.getElementById("revenue-date-picker"))==null||e.addEventListener("change",s=>{At=s.target.value,ln()}),(n=document.getElementById("btn-refresh-revenue"))==null||n.addEventListener("click",()=>{ln()})}async function ln(){const i=document.getElementById("revenue-content");if(!i)return;const[e,n,s,o]=await Promise.all([le(),_e(),Ce(At),Rn(At)]);if(s.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:48px;opacity:.2">event_busy</span>
        <p>${nt(At)} の訪問予定データがありません。</p>
      </div>
    `;return}let l=0,c=0,u=0,p=s.length;s.filter(b=>b.status==="completed").length;const v=e.map(b=>{const k=o.filter(N=>N.staffId===b.id),D=s.filter(N=>N.staffId===b.id);let A=0,P=0,x=0,L=0,R=0;if(D.forEach(N=>{A+=ro(b,N.duration||60)}),k.forEach(N=>{if(L+=N.totalDistance||0,x+=(N.totalDistance||0)*ri,N.schedule&&N.schedule.length>=2){const B=N.schedule[0].arrivalMinutes;R=N.schedule[N.schedule.length-1].arrivalMinutes-B,P=R/60*(parseInt(b.wage)||2e3)}}),k.length===0&&D.length>0){const N=[...D].sort((m,_)=>(m.startTime||"09:00").localeCompare(_.startTime||"09:00")),B=N[0],V=N[N.length-1],g=ie(B.startTime||"09:00");R=ie(V.startTime||"17:00")+(V.duration||60)-g,P=R/60*(parseInt(b.wage)||2e3)}return{...b,count:D.length,revenue:A,laborCost:P,vehicleCost:x,profit:A-P-x,workMinutes:R}}).filter(b=>b.count>0||b.revenue>0).sort((b,k)=>k.profit-b.profit);v.forEach(b=>{l+=b.revenue,c+=b.laborCost,u+=b.vehicleCost});const E=l-c-u,I=l>0?E/l*100:0;i.innerHTML=`
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
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">平均人件費/人: ¥${v.length>0?Math.round(c/v.length).toLocaleString():0}</div>
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
          ${I.toFixed(1)}%
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
              ${v.map(b=>{const k=b.revenue>0?b.profit/b.revenue*100:0;return`
                  <tr>
                    <td>
                      <div style="display:flex;align-items:center;gap:8px">
                        <div style="width:10px;height:10px;border-radius:50%;background:${b.color}"></div>
                        <strong>${b.name}</strong>
                      </div>
                    </td>
                    <td style="text-align:right">${b.count}件</td>
                    <td style="text-align:right">¥${b.revenue.toLocaleString()}</td>
                    <td style="text-align:right;color:${b.profit>=0?"var(--success)":"var(--danger)"};font-weight:600">
                      ¥${Math.round(b.profit).toLocaleString()}
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
              ${I<15?"<li>利益率が15%を下回っています。移動ルートの最適化を再度実行し、移動時間を削減してください。</li>":""}
              ${l>0&&c/l>.6?"<li>売上に対する人件費率が60%を超えています。1人あたりの訪問件数を増やす調整が必要です。</li>":"<li>人件費率は適正範囲内です。</li>"}
              <li>現在の移動コスト単価は1kmあたり${ri}円で計算されています。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}async function Pd(){const i=document.getElementById("page-container"),e=Ge();i.innerHTML=`
    <div class="page-header" style="margin-bottom: 16px;">
      <h1 class="page-title" style="font-size: 1.25rem;">
        <span class="material-icons-round">today</span>
        本日のスケジュール
      </h1>
      <div style="color: var(--text-secondary); font-size: 0.9rem;">
        ${nt(new Date(e))}
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
  `,document.getElementById("btn-add-sales").addEventListener("click",Cd),await Ei(e)}async function Ei(i){try{const e=await Ce(i),n="staff_1",s=e.filter(v=>v.staffId===n);s.sort((v,E)=>(v.scheduledTime||v.startTime||"").localeCompare(E.scheduledTime||E.startTime||""));const o=document.getElementById("my-schedule-list"),l=s.length,c=s.filter(v=>v.status==="completed").length,u=s.filter(v=>v.status==="cancelled").length;if(document.getElementById("my-schedule-summary").innerHTML=`
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
    `,s.forEach((v,E)=>{const I=v.type==="sales",b=v.duration||60,k=v.status||"scheduled";let D="var(--primary)",A="",P="",x="";k==="completed"?(D="var(--success)",A='<span class="material-icons-round" style="color:var(--success)">check_circle</span>',x='<span class="tag" style="background:var(--success); color:white;">完了</span>'):k==="cancelled"?(D="var(--danger)",A='<span class="material-icons-round" style="color:var(--danger)">cancel</span>',x=`<span class="tag" style="background:var(--danger); color:white;">キャンセル: ${te(v.cancelReason||"理由なし")}</span>`):P=`
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
            <button class="btn btn-secondary btn-cancel-visit" data-id="${v.id}" style="padding: 8px; justify-content: center; font-size: 0.85rem;">
              <span class="material-icons-round" style="font-size: 18px;">cancel</span>
              キャンセル
            </button>
            <button class="btn btn-primary btn-complete-visit" data-id="${v.id}" style="padding: 8px; justify-content: center; font-size: 0.85rem; background: var(--success); border-color: var(--success);">
              <span class="material-icons-round" style="font-size: 18px;">check_circle</span>
              完了
            </button>
          </div>
        `;const L=I?"var(--warning)":D;p+=`
        <div style="display:flex; align-items:flex-start; gap: 12px;">
          <div style="display:flex; flex-direction:column; align-items:center; width: 40px;">
            <div style="font-size: 0.8rem; font-weight: 600; margin-bottom: 4px; color: ${k!=="scheduled"?"var(--text-muted)":"inherit"};">${v.scheduledTime||v.startTime||"--:--"}</div>
            <div style="width: 16px; height: 16px; border-radius: 50%; background: ${L}; z-index: 1; border: 3px solid #fff; box-shadow: 0 0 0 1px ${L};"></div>
            <div style="width: 2px; height: 100px; background: var(--border); margin-top: -2px; margin-bottom: -2px;"></div>
          </div>
          <div class="card" style="flex: 1; padding: 16px; border-radius: 12px; border-left: 4px solid ${L}; position: relative; opacity: ${k!=="scheduled"?"0.7":"1"};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <h3 style="margin: 0; font-size: 1.1rem; display: flex; align-items: center; gap: 6px;">
                ${I?'<span class="material-icons-round" style="color:var(--warning); font-size:1.1rem;">storefront</span>':""}
                ${te(v.clientName)} ${I?"":"様"}
              </h3>
              ${x||`<span class="tag" style="background: var(--bg-color);">${b}分</span>`}
            </div>
            ${A?`<div style="display:flex; align-items:center; gap:4px; margin-bottom:8px;">${A}</div>`:`
              <div style="font-size: 0.85rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px; margin-bottom: 12px;">
                <span class="material-icons-round" style="font-size: 16px;">location_on</span>
                <span>ルートを確認</span>
              </div>
            `}
            ${P}
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
    `,o.innerHTML=p,document.querySelectorAll(".btn-complete-visit").forEach(v=>{v.addEventListener("click",async E=>{const I=E.currentTarget.dataset.id;if(confirm("この訪問を「完了」にしてよろしいですか？"))try{await mi(I,{status:"completed"}),C("訪問を完了しました","success"),Ei(i)}catch{C("更新に失敗しました","error")}})}),document.querySelectorAll(".btn-cancel-visit").forEach(v=>{v.addEventListener("click",E=>{const I=E.currentTarget.dataset.id;Ld(I,i)})})}catch(e){console.error("マイスケジュール取得エラー:",e),document.getElementById("my-schedule-list").innerHTML=`
      <div class="empty-state" style="color: var(--danger);">
        <span class="material-icons-round">error</span>
        <p>スケジュールの取得に失敗しました</p>
      </div>
    `}}function Ld(i,e){const n=document.getElementById("modal-overlay"),s=document.getElementById("modal-title"),o=document.getElementById("modal-body"),l=document.getElementById("modal-footer");s.textContent="キャンセルの登録",s.innerHTML='<span class="material-icons-round" style="color:var(--danger)">cancel</span> キャンセルの登録',o.innerHTML=`
    <div class="form-group">
      <label class="form-label">キャンセル理由 <span style="color:var(--danger)">*必須</span></label>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">
        ※経営データとして蓄積されるため、正確な理由を選択してください。
      </p>
      <select id="cancel-reason-select" class="form-input">
        <option value="">選択してください...</option>
        ${od.map(c=>`<option value="${c}">${c}</option>`).join("")}
      </select>
    </div>
    <div class="form-group" style="margin-top: 16px;">
      <label class="form-label">備考 (任意)</label>
      <textarea id="cancel-notes" class="form-input" rows="3" placeholder="詳細な状況があれば記入"></textarea>
    </div>
  `,l.innerHTML=`
    <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').style.display='none'">閉じる</button>
    <button class="btn btn-primary" id="btn-submit-cancel" style="background:var(--danger); border-color:var(--danger);">キャンセル確定</button>
  `,n.style.display="flex",document.getElementById("btn-submit-cancel").addEventListener("click",async()=>{const c=document.getElementById("cancel-reason-select").value;if(!c){C("キャンセル理由を選択してください","warning");return}const u=document.getElementById("cancel-notes").value;try{await mi(i,{status:"cancelled",cancelReason:c,cancelNotes:u}),C("キャンセルを登録しました","success"),n.style.display="none",Ei(e)}catch{C("更新に失敗しました","error")}})}function Cd(){const i=Ge(),e=document.getElementById("modal-overlay"),n=document.getElementById("modal-title"),s=document.getElementById("modal-body"),o=document.getElementById("modal-footer");n.innerHTML='<span class="material-icons-round" style="color:var(--warning)">storefront</span> 営業予定の追加',s.innerHTML=`
    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
      スキマ時間を活用したアポなし訪問などの営業活動を記録します。
    </p>
    <div class="form-group">
      <label class="form-label">訪問先カテゴリ</label>
      <select id="sales-target-select" class="form-input">
        ${ad.map(l=>`<option value="${l}">${l}</option>`).join("")}
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
          ${ld.map(l=>`<option value="${l}">${l}</option>`).join("")}
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
  `,e.style.display="flex",document.getElementById("btn-submit-sales").addEventListener("click",async()=>{const l=document.getElementById("sales-client-name").value.trim();if(!l){C("訪問先名を入力してください","warning");return}const c=document.getElementById("sales-target-select").value,u=document.getElementById("sales-start-time").value,p=parseInt(document.getElementById("sales-duration").value,10);try{await Si({staffId:"staff_1",staffName:"佐藤 看護師",clientId:"sales_"+Date.now(),clientName:l,date:i,startTime:u,scheduledTime:u,duration:p,type:"sales",salesTarget:c,status:"scheduled"}),C("営業予定を追加しました","success"),e.style.display="none",Ei(i)}catch(v){console.error(v),C("追加に失敗しました","error")}})}const Nd={dashboard:{render:Jc,title:"ダッシュボード"},map:{render:cd,title:"マップビュー"},staff:{render:Mn,title:"職員管理"},client:{render:$n,title:"利用者管理"},schedule:{render:md,title:"スケジュール"},matching:{render:vo,title:"マッチング＆最適化"},revenue:{render:Dd,title:"収支シミュレーション"},"my-schedule":{render:Pd,title:"マイスケジュール"}};function Rd(){var o,l,c,u;document.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",()=>{const v=p.dataset.page;v&&xt(v)})}),(o=document.getElementById("btn-sidebar-toggle"))==null||o.addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("collapsed")});const e=document.getElementById("sidebar"),n=document.getElementById("sidebar-overlay"),s=()=>{e.classList.toggle("open"),n.classList.toggle("open")};(l=document.getElementById("btn-mobile-menu"))==null||l.addEventListener("click",s),n==null||n.addEventListener("click",s),(c=document.getElementById("btn-modal-close"))==null||c.addEventListener("click",()=>{document.getElementById("modal-overlay").style.display="none"}),(u=document.getElementById("modal-overlay"))==null||u.addEventListener("click",p=>{p.target===p.currentTarget&&(p.currentTarget.style.display="none")})}async function xt(i){var s,o;const e=Nd[i];if(!e)return;if(window.isAdmin===!1&&i!=="my-schedule"){console.warn("アクセス権限がありません:",i);return}document.querySelectorAll(".nav-item").forEach(l=>{l.classList.toggle("active",l.dataset.page===i)}),(s=document.getElementById("sidebar"))==null||s.classList.remove("open"),(o=document.getElementById("sidebar-overlay"))==null||o.classList.remove("open"),document.title=`${e.title} - CareRoute`;const n=document.getElementById("page-container");n.innerHTML='<div class="loading"><div class="spinner"></div></div>';try{await e.render()}catch(l){console.error(`ページ「${e.title}」の表示エラー:`,l),n.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${l.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `}}const Sr=[{id:"staff_2",name:"前川さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_3",name:"水口さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"18:01",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018},{id:"staff_4",name:"横家さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","火","水","木","金"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#F59E0B",isActive:!0,lat:35.443,lng:137.018},{id:"staff_5",name:"木澤さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["火","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#8B5CF6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_6",name:"圭子さん",gender:"女性",type:"パート",workStart:"07:50",workEnd:"16:00",days:["月","火","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:[]},color:"#EC4899",isActive:!0,lat:35.443,lng:137.018},{id:"staff_7",name:"藤吉さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"12:00",days:["火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["ペット可"]},color:"#14B8A6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_8",name:"ちえみさん",gender:"女性",type:"パート",workStart:"13:00",workEnd:"17:00",days:["月","火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#F97316",isActive:!0,lat:35.443,lng:137.018},{id:"staff_9",name:"棚橋さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["火","水","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#6366F1",isActive:!0,lat:35.443,lng:137.018},{id:"staff_10",name:"高井さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"14:00",days:["火","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理"]},color:"#84CC16",isActive:!0,lat:35.443,lng:137.018},{id:"staff_11",name:"小沢さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"16:00",days:["月","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#0EA5E9",isActive:!0,lat:35.443,lng:137.018},{id:"staff_12",name:"若尾さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["月","火","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#3B82F6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_13",name:"小川さん",gender:"女性",type:"パート",workStart:"08:20",workEnd:"17:00",days:["月","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_14",name:"井戸さん",gender:"女性",type:"パート",workStart:"07:30",workEnd:"16:00",days:["月","火","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018}],Er=[{id:"client_1",name:"中村晃",genderPreference:"指定なし",address:"関市東新町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.497156833927576,lng:136.91472248776176,isActive:!0,area:"関市"},{id:"client_2",name:"今井 幸",genderPreference:"指定なし",address:"可児市今渡1334番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.429546564671064,lng:137.06448192237502,isActive:!0,area:"可児市"},{id:"client_3",name:"佐合愛",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441449916213905,lng:137.00859676668438,isActive:!0,area:"美濃加茂市"},{id:"client_4",name:"佐藤 平",genderPreference:"指定なし",address:"関市小野1378番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.496713667191365,lng:136.91611792725212,isActive:!0,area:"関市"},{id:"client_5",name:"佐藤 惠",genderPreference:"指定なし",address:"加茂郡富加町羽生1439-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49350458855056,lng:137.00284647997333,isActive:!0,area:"加茂郡富加町"},{id:"client_6",name:"内田 鉄",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1247",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43919134426946,lng:137.0179669717769,isActive:!0,area:"美濃加茂市"},{id:"client_7",name:"冨田 勝",genderPreference:"女性希望",address:"美濃加茂市蜂屋町中蜂屋1475番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.433236929814676,lng:137.0206065781048,isActive:!0,area:"美濃加茂市"},{id:"client_8",name:"前川 み",genderPreference:"指定なし",address:"美濃加茂市森山町3-4-28",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.447385010380714,lng:137.0241786951649,isActive:!0,area:"美濃加茂市"},{id:"client_9",name:"加藤 民",genderPreference:"指定なし",address:"加茂郡川辺町中川辺1220番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.475384399265096,lng:137.06390768355888,isActive:!0,area:"加茂郡川辺町"},{id:"client_10",name:"加藤 雪",genderPreference:"指定なし",address:"可児市松伏3-4",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.42952101999053,lng:137.06996025815,isActive:!0,area:"可児市"},{id:"client_11",name:"吉村 強",genderPreference:"女性希望",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45175401563851,lng:137.02161473049864,isActive:!0,area:"美濃加茂市"},{id:"client_12",name:"吉田あ",genderPreference:"指定なし",address:"関市西田原",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49115464552958,lng:136.92399997463878,isActive:!0,area:"関市"},{id:"client_13",name:"和田 隆",genderPreference:"指定なし",address:"加茂郡川辺町石神84番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48236841267637,lng:137.07760456602477,isActive:!0,area:"加茂郡川辺町"},{id:"client_14",name:"土岐 吉",genderPreference:"指定なし",address:"美濃加茂市加茂野町市橋836-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44162170104763,lng:137.0262114717999,isActive:!0,area:"美濃加茂市"},{id:"client_15",name:"土岐 雅",genderPreference:"指定なし",address:"加茂郡富加町羽生1453-20",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.488517359713484,lng:136.99491575096658,isActive:!0,area:"加茂郡富加町"},{id:"client_16",name:"大森 君",genderPreference:"女性希望",address:"加茂郡富加町高畑637-3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50099328128151,lng:136.98455151897673,isActive:!0,area:"加茂郡富加町"},{id:"client_17",name:"大橋ひさ",genderPreference:"女性希望",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.438385496082404,lng:137.02562783976515,isActive:!0,area:"美濃加茂市"},{id:"client_18",name:"天野慧",genderPreference:"指定なし",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.434155101090184,lng:137.02364638342797,isActive:!0,area:"美濃加茂市"},{id:"client_19",name:"奥田 邦",genderPreference:"指定なし",address:"加茂郡川辺町石神9778-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494079651227416,lng:137.07228502934993,isActive:!0,area:"加茂郡川辺町"},{id:"client_20",name:"安田 正",genderPreference:"女性希望",address:"関市東町4-3-24",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.498558378964844,lng:136.93317629557282,isActive:!0,area:"関市"},{id:"client_21",name:"安藤 悦治",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4458132002014,lng:137.0128572203751,isActive:!0,area:"美濃加茂市"},{id:"client_22",name:"宮本伸",genderPreference:"指定なし",address:"美濃加茂市上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43490869964852,lng:137.01386742162063,isActive:!0,area:"美濃加茂市"},{id:"client_23",name:"宮田 薫",genderPreference:"指定なし",address:"加茂郡富加町高畑637番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4893904414253,lng:136.9951458803918,isActive:!0,area:"加茂郡富加町"},{id:"client_24",name:"富田 菊",genderPreference:"指定なし",address:"可児市矢戸1445番地34",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.435752761721716,lng:137.0651931080912,isActive:!0,area:"可児市"},{id:"client_25",name:"小原 強",genderPreference:"指定なし",address:"美濃加茂市下米田町則光329番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441734590435274,lng:137.0125176746724,isActive:!0,area:"美濃加茂市"},{id:"client_26",name:"岡田 洋",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋1674番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4365047823305,lng:137.01270107633286,isActive:!0,area:"美濃加茂市"},{id:"client_27",name:"岩﨑 嬉",genderPreference:"指定なし",address:"美濃加茂市加茂川町３丁目４番７号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43346804141193,lng:137.01932833342485,isActive:!0,area:"美濃加茂市"},{id:"client_28",name:"川崎 イ",genderPreference:"指定なし",address:"加茂郡富加町滝田151番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.496723988527705,lng:136.9997990843252,isActive:!0,area:"加茂郡富加町"},{id:"client_29",name:"平田 裕",genderPreference:"指定なし",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.449511651048645,lng:137.00972072094092,isActive:!0,area:"美濃加茂市"},{id:"client_30",name:"平田あ",genderPreference:"女性希望",address:"加茂郡富加町羽生",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49517050409468,lng:136.9856735080124,isActive:!0,area:"加茂郡富加町"},{id:"client_31",name:"廣 強",genderPreference:"指定なし",address:"美濃加茂市牧野1076-75",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44218112119725,lng:137.01104910417206,isActive:!0,area:"美濃加茂市"},{id:"client_32",name:"斉藤真",genderPreference:"指定なし",address:"関市北天神",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48797634825378,lng:136.9143700838785,isActive:!0,area:"関市"},{id:"client_33",name:"日比野 奥",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.437015399250406,lng:137.00906805366205,isActive:!0,area:"美濃加茂市"},{id:"client_34",name:"日比野 由",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43337070077588,lng:137.0244453376369,isActive:!0,area:"美濃加茂市"},{id:"client_35",name:"日比野 直",genderPreference:"女性希望",address:"美濃加茂市清水町2-3-17",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44642678990315,lng:137.01795349522274,isActive:!0,area:"美濃加茂市"},{id:"client_36",name:"木村 光",genderPreference:"指定なし",address:"美濃加茂市太田町2600番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.435371997376876,lng:137.01108131268214,isActive:!0,area:"美濃加茂市"},{id:"client_37",name:"木澤 博",genderPreference:"指定なし",address:"加茂郡富加町加治田3461番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.506303390707046,lng:136.99104467350202,isActive:!0,area:"加茂郡富加町"},{id:"client_38",name:"木澤 照",genderPreference:"女性希望",address:"加茂郡川辺町石神215-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4880086414237,lng:137.07289353288346,isActive:!0,area:"加茂郡川辺町"},{id:"client_39",name:"杉島 希",genderPreference:"指定なし",address:"加茂郡富加町滝田283-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50110204409342,lng:136.98395012382613,isActive:!0,area:"加茂郡富加町"},{id:"client_40",name:"村仲 尚",genderPreference:"女性希望",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.438698758555574,lng:137.02193085044868,isActive:!0,area:"美濃加茂市"},{id:"client_41",name:"村仲 鍬",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452301436877214,lng:137.02067008781682,isActive:!0,area:"美濃加茂市"},{id:"client_42",name:"松元 良",genderPreference:"女性希望",address:"美濃加茂市本郷町1丁目1番26号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.43827103816531,lng:137.01191566430634,isActive:!0,area:"美濃加茂市"},{id:"client_43",name:"栗山 年",genderPreference:"指定なし",address:"加茂郡富加町高畑258番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494121986748645,lng:136.98518245423062,isActive:!0,area:"加茂郡富加町"},{id:"client_44",name:"櫻井 あ",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉773番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.45138892205426,lng:137.01422771742352,isActive:!0,area:"美濃加茂市"},{id:"client_45",name:"河野 仁",genderPreference:"指定なし",address:"加茂郡富加町羽生909-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.490271641834966,lng:136.98727323288463,isActive:!0,area:"加茂郡富加町"},{id:"client_46",name:"浅野",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45202959233498,lng:137.01566783519402,isActive:!0,area:"美濃加茂市"},{id:"client_47",name:"渡邉 文",genderPreference:"指定なし",address:"加茂郡川辺町比久見505番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49415672848246,lng:137.0639961091595,isActive:!0,area:"加茂郡川辺町"},{id:"client_48",name:"渡邉直",genderPreference:"女性希望",address:"美濃加茂市蜂屋町上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43872942558895,lng:137.01354730683613,isActive:!0,area:"美濃加茂市"},{id:"client_49",name:"瀧戸 邦",genderPreference:"指定なし",address:"加茂郡富加町高畑815-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49012105422854,lng:137.00036018284152,isActive:!0,area:"加茂郡富加町"},{id:"client_50",name:"石原 ヤ",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50124112017079,lng:136.98382202932007,isActive:!0,area:"加茂郡富加町"},{id:"client_51",name:"石原 孝",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49328324234597,lng:136.9835128247142,isActive:!0,area:"加茂郡富加町"},{id:"client_52",name:"石田 友",genderPreference:"指定なし",address:"関市大杉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49271720267115,lng:136.91679407643252,isActive:!0,area:"関市"},{id:"client_53",name:"神園 昭",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1552-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445736819174996,lng:137.02080207291,isActive:!0,area:"美濃加茂市"},{id:"client_54",name:"細田 と",genderPreference:"指定なし",address:"加茂郡川辺町比久見927番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49138118249907,lng:137.0669797974694,isActive:!0,area:"加茂郡川辺町"},{id:"client_55",name:"織部 恒",genderPreference:"女性希望",address:"加茂郡富加町大山561-2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4956482083646,lng:136.98479580431297,isActive:!0,area:"加茂郡富加町"},{id:"client_56",name:"纐纈 芳",genderPreference:"指定なし",address:"美濃加茂市田島町2-1-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45002813499261,lng:137.0212204400497,isActive:!0,area:"美濃加茂市"},{id:"client_57",name:"纐纈美",genderPreference:"指定なし",address:"美濃加茂市大手町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4391119160273,lng:137.02387050933302,isActive:!0,area:"美濃加茂市"},{id:"client_58",name:"肥田 太",genderPreference:"指定なし",address:"可児市下恵土4146-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4312051032861,lng:137.05456974028345,isActive:!0,area:"可児市"},{id:"client_59",name:"菊池 二",genderPreference:"指定なし",address:"美濃加茂市加茂野町鷹之巣1712番地13",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44067140824593,lng:137.00812252064713,isActive:!0,area:"美濃加茂市"},{id:"client_60",name:"酒向 み",genderPreference:"指定なし",address:"美濃加茂市下米田町東栃井173番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.439305854394995,lng:137.02599237626308,isActive:!0,area:"美濃加茂市"},{id:"client_61",name:"鈴木 春",genderPreference:"女性希望",address:"美濃加茂市蜂屋町伊瀬920",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445308304721735,lng:137.02055837255097,isActive:!0,area:"美濃加茂市"},{id:"client_62",name:"長沼 善",genderPreference:"指定なし",address:"美濃加茂市富加町加治田665",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452051259062436,lng:137.01855573983298,isActive:!0,area:"美濃加茂市"},{id:"client_63",name:"馬場 と",genderPreference:"女性希望",address:"美濃加茂市太田町3519-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44993124386665,lng:137.02104853551123,isActive:!0,area:"美濃加茂市"},{id:"client_64",name:"高山 智",genderPreference:"指定なし",address:"美濃加茂市牧野1941番地16",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44532882741129,lng:137.00968272003644,isActive:!0,area:"美濃加茂市"},{id:"client_65",name:"髙井 千",genderPreference:"女性希望",address:"加茂郡富加町羽生1751番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.505370248825024,lng:136.9927463803301,isActive:!0,area:"加茂郡富加町"},{id:"client_66",name:"鹿野 和",genderPreference:"指定なし",address:"美濃加茂市山之上町1538番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44890607991325,lng:137.01711922971506,isActive:!0,area:"美濃加茂市"},{id:"client_67",name:"鹿野 義",genderPreference:"指定なし",address:"美濃加茂市山之上町6260番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43761631928377,lng:137.01824050932268,isActive:!0,area:"美濃加茂市"}],kr=[{id:"visit_1",clientId:"client_46",dayOfWeek:"金",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_2",clientId:"client_18",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_3",clientId:"client_21",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_4",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"生活２・１７９０円"},{id:"visit_5",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_6",clientId:"client_52",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_7",clientId:"client_52",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_8",clientId:"client_52",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_9",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_10",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_11",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_12",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_13",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_14",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_15",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_16",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_17",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_18",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_19",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_20",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_21",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_22",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_23",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_24",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_25",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_26",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_27",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_28",clientId:"client_50",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2200,serviceInfo:"生活３・２２００円"},{id:"visit_29",clientId:"client_50",dayOfWeek:"水",startTime:"12:30",endTime:"14:00",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_30",clientId:"client_2",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_31",clientId:"client_27",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_32",clientId:"client_6",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_33",clientId:"client_17",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:5870,serviceInfo:"障害身体・５８７０円・１２００円"},{id:"visit_34",clientId:"client_17",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_35",clientId:"client_17",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_36",clientId:"client_16",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_37",clientId:"client_26",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_38",clientId:"client_19",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_39",clientId:"client_19",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_40",clientId:"client_25",dayOfWeek:"月",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_41",clientId:"client_25",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_42",clientId:"client_25",dayOfWeek:"木",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_43",clientId:"client_25",dayOfWeek:"水",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_44",clientId:"client_25",dayOfWeek:"金",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_45",clientId:"client_55",dayOfWeek:"月",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_46",clientId:"client_55",dayOfWeek:"土",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_47",clientId:"client_9",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_48",clientId:"client_9",dayOfWeek:"火",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_49",clientId:"client_9",dayOfWeek:"木",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_50",clientId:"client_9",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_51",clientId:"client_9",dayOfWeek:"土",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_52",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_53",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_54",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_55",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_56",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_57",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"13:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_58",clientId:"client_9",dayOfWeek:"月",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_59",clientId:"client_9",dayOfWeek:"土",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_60",clientId:"client_9",dayOfWeek:"火",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_61",clientId:"client_9",dayOfWeek:"金",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_62",clientId:"client_9",dayOfWeek:"木",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_63",clientId:"client_10",dayOfWeek:"水",startTime:"10:00",endTime:"11:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_64",clientId:"client_10",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_65",clientId:"client_53",dayOfWeek:"水",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_66",clientId:"client_28",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_67",clientId:"client_28",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_68",clientId:"client_45",dayOfWeek:"金",startTime:"09:15",endTime:"10:15",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_69",clientId:"client_59",dayOfWeek:"月",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_70",clientId:"client_59",dayOfWeek:"水",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_71",clientId:"client_59",dayOfWeek:"金",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_72",clientId:"client_38",dayOfWeek:"月",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_73",clientId:"client_38",dayOfWeek:"水",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_74",clientId:"client_38",dayOfWeek:"金",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_75",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_76",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_77",clientId:"client_37",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_78",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_79",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_80",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_81",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_82",clientId:"client_37",dayOfWeek:"水",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_83",clientId:"client_37",dayOfWeek:"木",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_84",clientId:"client_37",dayOfWeek:"火",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_85",clientId:"client_37",dayOfWeek:"土",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_86",clientId:"client_37",dayOfWeek:"火",startTime:"17:00",endTime:"17:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_87",clientId:"client_37",dayOfWeek:"水",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_88",clientId:"client_37",dayOfWeek:"木",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_89",clientId:"client_36",dayOfWeek:"月",startTime:"15:30",endTime:"16:30",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_90",clientId:"client_36",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_91",clientId:"client_36",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_92",clientId:"client_57",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_93",clientId:"client_43",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_94",clientId:"client_43",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_95",clientId:"client_43",dayOfWeek:"金",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_96",clientId:"client_43",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_97",clientId:"client_56",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害・４０４０円・１２００円"},{id:"visit_98",clientId:"client_32",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_99",clientId:"client_44",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_100",clientId:"client_44",dayOfWeek:"火",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_101",clientId:"client_44",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_102",clientId:"client_44",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_103",clientId:"client_60",dayOfWeek:"火",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_104",clientId:"client_60",dayOfWeek:"木",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_105",clientId:"client_60",dayOfWeek:"土",startTime:"08:10",endTime:"09:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_106",clientId:"client_3",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_107",clientId:"client_3",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_108",clientId:"client_5",dayOfWeek:"水",startTime:"12:00",endTime:"13:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_109",clientId:"client_4",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_110",clientId:"client_4",dayOfWeek:"火",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_111",clientId:"client_4",dayOfWeek:"水",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_112",clientId:"client_4",dayOfWeek:"木",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_113",clientId:"client_4",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_114",clientId:"client_4",dayOfWeek:"土",startTime:"16:30",endTime:"17:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_115",clientId:"client_66",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_116",clientId:"client_67",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_117",clientId:"client_39",dayOfWeek:"月",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_118",clientId:"client_61",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_119",clientId:"client_61",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_120",clientId:"client_65",dayOfWeek:"月",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_121",clientId:"client_65",dayOfWeek:"火",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_122",clientId:"client_65",dayOfWeek:"水",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_123",clientId:"client_65",dayOfWeek:"木",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_124",clientId:"client_65",dayOfWeek:"金",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_125",clientId:"client_65",dayOfWeek:"土",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_126",clientId:"client_65",dayOfWeek:"月",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_127",clientId:"client_65",dayOfWeek:"水",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_128",clientId:"client_65",dayOfWeek:"木",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_129",clientId:"client_65",dayOfWeek:"金",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_130",clientId:"client_65",dayOfWeek:"土",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_131",clientId:"client_65",dayOfWeek:"火",startTime:"12:10",endTime:"12:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_132",clientId:"client_65",dayOfWeek:"月",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_133",clientId:"client_65",dayOfWeek:"水",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_134",clientId:"client_65",dayOfWeek:"火",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_135",clientId:"client_65",dayOfWeek:"金",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_136",clientId:"client_65",dayOfWeek:"土",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_137",clientId:"client_64",dayOfWeek:"火",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_138",clientId:"client_64",dayOfWeek:"木",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_139",clientId:"client_64",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_140",clientId:"client_49",dayOfWeek:"水",startTime:"12:15",endTime:"13:15",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_141",clientId:"client_49",dayOfWeek:"土",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_142",clientId:"client_14",dayOfWeek:"水",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_143",clientId:"client_15",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_144",clientId:"client_15",dayOfWeek:"水",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_145",clientId:"client_15",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_146",clientId:"client_24",dayOfWeek:"火",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_147",clientId:"client_24",dayOfWeek:"木",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_148",clientId:"client_7",dayOfWeek:"月",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_149",clientId:"client_7",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_150",clientId:"client_1",dayOfWeek:"月",startTime:"15:30",endTime:"16:00",duration:60,income:3090,serviceInfo:"障害家事・１０６０円・１０１０円"},{id:"visit_151",clientId:"client_1",dayOfWeek:"水",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_152",clientId:"client_1",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_153",clientId:"client_62",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_154",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_155",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_156",clientId:"client_58",dayOfWeek:"月",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_157",clientId:"client_58",dayOfWeek:"水",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_158",clientId:"client_58",dayOfWeek:"火",startTime:"11:45",endTime:"12:15",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_159",clientId:"client_58",dayOfWeek:"木",startTime:"13:00",endTime:"13:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_160",clientId:"client_58",dayOfWeek:"金",startTime:"12:30",endTime:"13:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_161",clientId:"client_33",dayOfWeek:"木",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_162",clientId:"client_35",dayOfWeek:"月",startTime:"10:40",endTime:"11:40",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_163",clientId:"client_34",dayOfWeek:"火",startTime:"07:30",endTime:"08:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_164",clientId:"client_30",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_165",clientId:"client_29",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_166",clientId:"client_31",dayOfWeek:"木",startTime:"09:30",endTime:"10:20",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_167",clientId:"client_54",dayOfWeek:"火",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_168",clientId:"client_54",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_169",clientId:"client_54",dayOfWeek:"木",startTime:"08:15",endTime:"09:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_170",clientId:"client_8",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_171",clientId:"client_42",dayOfWeek:"火",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_172",clientId:"client_42",dayOfWeek:"金",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_173",clientId:"client_42",dayOfWeek:"水",startTime:"14:45",endTime:"16:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_174",clientId:"client_23",dayOfWeek:"土",startTime:"15:00",endTime:"15:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_175",clientId:"client_22",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_176",clientId:"client_41",dayOfWeek:"火",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_177",clientId:"client_40",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_178",clientId:"client_40",dayOfWeek:"木",startTime:"11:45",endTime:"12:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_179",clientId:"client_40",dayOfWeek:"金",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_180",clientId:"client_20",dayOfWeek:"月",startTime:"17:00",endTime:"18:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_181",clientId:"client_12",dayOfWeek:"火",startTime:"15:30",endTime:"16:15",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_182",clientId:"client_12",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_183",clientId:"client_11",dayOfWeek:"月",startTime:"12:00",endTime:"12:50",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_184",clientId:"client_48",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_185",clientId:"client_48",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_186",clientId:"client_47",dayOfWeek:"土",startTime:"14:15",endTime:"15:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_187",clientId:"client_13",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"}];document.addEventListener("DOMContentLoaded",()=>{var i,e,n;console.log("🏠 CareRoute 起動中..."),jc(),Rd();try{Uc(async(s,o)=>{if(o){C(o,"error"),cn();return}s?(console.log("✅ ログイン:",s.email),dn(s),await xt("dashboard")):cn()})}catch(s){console.warn("Firebase未設定のためデモモードで起動します:",s),cn()}(i=document.getElementById("btn-logout"))==null||i.addEventListener("click",async()=>{try{await Vc(),C("ログアウトしました","info")}catch{C("ログアウトに失敗しました","error")}}),(e=document.getElementById("btn-demo-mode"))==null||e.addEventListener("click",async()=>{dn({displayName:"管理者（デモ）",email:"admin@careroute.local",photoURL:""}),(await le()).length===0&&(C("デモデータを自動投入しています...","info"),await wn(!0)),await xt("dashboard"),C("管理者デモモードで起動しました","info")}),(n=document.getElementById("btn-staff-demo-mode"))==null||n.addEventListener("click",async()=>{dn({displayName:"現場スタッフ（デモ）",email:"staff@careroute.local",photoURL:""}),(await le()).length===0&&(C("デモデータを自動投入しています...","info"),await wn(!0)),await xt("my-schedule"),C("スタッフデモモードで起動しました","info")})});function cn(){document.getElementById("login-screen").style.display="flex",document.getElementById("main-app").style.display="none",document.getElementById("nav-revenue").style.display="none"}function dn(i){document.getElementById("login-screen").style.display="none",document.getElementById("main-app").style.display="flex";const e=document.getElementById("user-avatar"),n=document.getElementById("user-name");e&&(e.src=i.photoURL||""),n&&(n.textContent=i.displayName||i.email),window.isAdmin=i.email==="admin@careroute.local"||i.email==="demo@careroute.local";const s=window.isAdmin?"flex":"none",o=window.isAdmin?"none":"flex";document.getElementById("nav-dashboard").style.display=s,document.getElementById("nav-map").style.display=s,document.getElementById("nav-staff").style.display=s,document.getElementById("nav-client").style.display=s,document.getElementById("nav-schedule").style.display=s,document.getElementById("nav-matching").style.display=s;const l=document.getElementById("nav-revenue");l&&(l.style.display=s);const c=document.getElementById("nav-my-schedule");c&&(c.style.display=o),Md()}function Md(){if(document.getElementById("btn-load-demo"))return;const i=document.querySelector(".sidebar-nav"),e=document.createElement("li");e.className="nav-item",e.id="btn-load-demo",e.innerHTML=`
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `,e.addEventListener("click",wn),i.appendChild(e)}async function wn(i=!1){const e=document.getElementById("btn-load-demo");if(!(!i&&!confirm(`デモデータ（職員6名・利用者20名）を投入しますか？
既存データには影響しません。`))){e&&(e.innerHTML=`
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `);try{const n=await le(),s=await _e();if(n.length>0||s.length>0){if(!i&&!confirm("既存のデータを全て削除し、新しいエクセルデータを投入しますか？")){e&&(e.innerHTML=`
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `);return}typeof _r=="function"?await _r():(localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"))}for(const u of Sr)await ao(u);C(`職員 ${Sr.length}名 を登録しました`,"success");for(const u of Er)await lo(u);C(`利用者 ${Er.length}名 を登録しました`,"success");const o=new Date,l=o.getDay(),c={日:0,月:1,火:2,水:3,木:4,金:5,土:6};for(const u of kr){let p=new Date(o);if(u.dayOfWeek&&c[u.dayOfWeek]!==void 0){const k=c[u.dayOfWeek]-l;p.setDate(o.getDate()+k)}const v=p.getFullYear(),E=String(p.getMonth()+1).padStart(2,"0"),I=String(p.getDate()).padStart(2,"0"),b=`${v}-${E}-${I}`;await Si({...u,date:b,status:"scheduled"})}C(`予定 ${kr.length}件 を登録しました`,"success"),await xt("dashboard"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `,setTimeout(()=>e.remove(),3e3)}catch(n){console.error("デモデータ投入エラー:",n),C("デモデータの投入に失敗しました: "+n.message,"error"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `}}}
