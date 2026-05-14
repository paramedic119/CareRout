(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const Do=()=>{};var cr={};/**
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
 */const sa=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Po=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[n++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[n++],c=i[n++],d=i[n++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=i[n++],c=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ra={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,m=a+2<i.length,v=m?i[a+2]:0,w=l>>2,T=(l&3)<<4|d>>4;let E=(d&15)<<2|v>>6,x=v&63;m||(x=64,c||(E=64)),s.push(n[w],n[T],n[E],n[x])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(sa(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Po(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=n[i.charAt(a++)],d=a<i.length?n[i.charAt(a)]:0;++a;const v=a<i.length?n[i.charAt(a)]:64;++a;const T=a<i.length?n[i.charAt(a)]:64;if(++a,l==null||d==null||v==null||T==null)throw new Co;const E=l<<2|d>>4;if(s.push(E),v!==64){const x=d<<4&240|v>>2;if(s.push(x),T!==64){const k=v<<6&192|T;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Co extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mo=function(i){const e=sa(i);return ra.encodeByteArray(e,!0)},aa=function(i){return Mo(i).replace(/\./g,"")},oa=function(i){try{return ra.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function No(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $o=()=>No().__FIREBASE_DEFAULTS__,Ro=()=>{if(typeof process>"u"||typeof cr>"u")return;const i=cr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Bo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&oa(i[1]);return e&&JSON.parse(e)},Uo=()=>{try{return Do()||$o()||Ro()||Bo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Wo=i=>{var e;return(e=Uo())==null?void 0:e[`_${i}`]};/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function jo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function qo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ho(){try{return typeof indexedDB=="object"}catch{return!1}}function zo(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
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
 */const Go="FirebaseError";class Fe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Go,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?Ko(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Fe(a,d,s)}}function Ko(i,e){return i.replace(Jo,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const Jo=/\{\$([^}]+)}/g;/**
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
 */function la(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Xo(i,e){const n=new Yo(i,e);return n.subscribe.bind(n)}class Yo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Qo(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=_n),a.error===void 0&&(a.error=_n),a.complete===void 0&&(a.complete=_n);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qo(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function _n(){}/**
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
 */function si(i){return i&&i._delegate?i._delegate:i}/**
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
 */function ca(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}class bt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var q;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(q||(q={}));const Zo={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},el=q.INFO,tl={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},il=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=tl[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zn{constructor(e){this.name=e,this._logLevel=el,this._logHandler=il,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const nl=(i,e)=>e.some(n=>i instanceof n);let dr,ur;function sl(){return dr||(dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rl(){return ur||(ur=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const da=new WeakMap,Cn=new WeakMap,ua=new WeakMap,In=new WeakMap,Gn=new WeakMap;function al(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{n(Be(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&da.set(n,i)}).catch(()=>{}),Gn.set(e,i),e}function ol(i){if(Cn.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Cn.set(i,e)}let Mn={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Cn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ua.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function ll(i){Mn=i(Mn)}function cl(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(bn(this),e,...n);return ua.set(s,e.sort?e.sort():[e]),Be(s)}:rl().includes(i)?function(...e){return i.apply(bn(this),e),Be(da.get(this))}:function(...e){return Be(i.apply(bn(this),e))}}function dl(i){return typeof i=="function"?cl(i):(i instanceof IDBTransaction&&ol(i),nl(i,sl())?new Proxy(i,Mn):i)}function Be(i){if(i instanceof IDBRequest)return al(i);if(In.has(i))return In.get(i);const e=dl(i);return e!==i&&(In.set(i,e),Gn.set(e,i)),e}const bn=i=>Gn.get(i);function ul(i,e,{blocked:n,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=Be(c);return s&&c.addEventListener("upgradeneeded",m=>{s(Be(c.result),m.oldVersion,m.newVersion,Be(c.transaction),m)}),n&&c.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),d}const hl=["get","getKey","getAll","getAllKeys","count"],fl=["put","add","delete","clear"],wn=new Map;function hr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(wn.get(e))return wn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=fl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||hl.includes(n)))return;const l=async function(c,...d){const m=this.transaction(c,a?"readwrite":"readonly");let v=m.store;return s&&(v=v.index(d.shift())),(await Promise.all([v[n](...d),a&&m.done]))[0]};return wn.set(e,l),l}ll(i=>({...i,get:(e,n,s)=>hr(e,n)||i.get(e,n,s),has:(e,n)=>!!hr(e,n)||i.has(e,n)}));/**
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
 */class ml{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pl(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nn="@firebase/app",fr="0.14.11";/**
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
 */const xe=new zn("@firebase/app"),gl="@firebase/app-compat",vl="@firebase/analytics-compat",yl="@firebase/analytics",_l="@firebase/app-check-compat",Il="@firebase/app-check",bl="@firebase/auth",wl="@firebase/auth-compat",Tl="@firebase/database",El="@firebase/data-connect",Sl="@firebase/database-compat",kl="@firebase/functions",Al="@firebase/functions-compat",xl="@firebase/installations",Ll="@firebase/installations-compat",Ol="@firebase/messaging",Dl="@firebase/messaging-compat",Pl="@firebase/performance",Cl="@firebase/performance-compat",Ml="@firebase/remote-config",Nl="@firebase/remote-config-compat",$l="@firebase/storage",Rl="@firebase/storage-compat",Bl="@firebase/firestore",Ul="@firebase/ai",Wl="@firebase/firestore-compat",Fl="firebase",jl="12.12.0",Vl={[Nn]:"fire-core",[gl]:"fire-core-compat",[yl]:"fire-analytics",[vl]:"fire-analytics-compat",[Il]:"fire-app-check",[_l]:"fire-app-check-compat",[bl]:"fire-auth",[wl]:"fire-auth-compat",[Tl]:"fire-rtdb",[El]:"fire-data-connect",[Sl]:"fire-rtdb-compat",[kl]:"fire-fn",[Al]:"fire-fn-compat",[xl]:"fire-iid",[Ll]:"fire-iid-compat",[Ol]:"fire-fcm",[Dl]:"fire-fcm-compat",[Pl]:"fire-perf",[Cl]:"fire-perf-compat",[Ml]:"fire-rc",[Nl]:"fire-rc-compat",[$l]:"fire-gcs",[Rl]:"fire-gcs-compat",[Bl]:"fire-fst",[Wl]:"fire-fst-compat",[Ul]:"fire-vertex","fire-js":"fire-js",[Fl]:"fire-js-all"};/**
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
 */const ql=new Map,Hl=new Map,mr=new Map;function pr(i,e){try{i.container.addComponent(e)}catch(n){xe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function wt(i){const e=i.name;if(mr.has(e))return xe.debug(`There were multiple attempts to register component ${e}.`),!1;mr.set(e,i);for(const n of ql.values())pr(n,i);for(const n of Hl.values())pr(n,i);return!0}function Je(i){return i==null?!1:i.settings!==void 0}/**
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
 */const zl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new ni("app","Firebase",zl);/**
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
 */const Wi=jl;function Ue(i,e,n){let s=Vl[i]??i;n&&(s+=`-${n}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xe.warn(c.join(" "));return}wt(new bt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gl="firebase-heartbeat-database",Kl=1,Xt="firebase-heartbeat-store";let Tn=null;function ha(){return Tn||(Tn=ul(Gl,Kl,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Xt)}catch(n){console.warn(n)}}}}).catch(i=>{throw Kn.create("idb-open",{originalErrorMessage:i.message})})),Tn}async function Jl(i){try{const n=(await ha()).transaction(Xt),s=await n.objectStore(Xt).get(fa(i));return await n.done,s}catch(e){if(e instanceof Fe)xe.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xe.warn(n.message)}}}async function gr(i,e){try{const s=(await ha()).transaction(Xt,"readwrite");await s.objectStore(Xt).put(e,fa(i)),await s.done}catch(n){if(n instanceof Fe)xe.warn(n.message);else{const s=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xe.warn(s.message)}}}function fa(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Xl=1024,Yl=30;class Ql{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ec(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=vr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>Yl){const c=tc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){xe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vr(),{heartbeatsToSend:s,unsentEntries:a}=Zl(this._heartbeatsCache.heartbeats),l=aa(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return xe.warn(n),""}}}function vr(){return new Date().toISOString().substring(0,10)}function Zl(i,e=Xl){const n=[];let s=i.slice();for(const a of i){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),yr(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),yr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ec{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ho()?zo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yr(i){return aa(JSON.stringify({version:2,heartbeats:i})).length}function tc(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function ic(i){wt(new bt("platform-logger",e=>new ml(e),"PRIVATE")),wt(new bt("heartbeat",e=>new Ql(e),"PRIVATE")),Ue(Nn,fr,i),Ue(Nn,fr,"esm2020"),Ue("fire-js","")}ic("");var nc="firebase",sc="12.12.1";/**
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
 */Ue(nc,sc,"app");var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,h){function p(){}p.prototype=h.prototype,g.F=h.prototype,g.prototype=new p,g.prototype.constructor=g,g.D=function(_,y,I){for(var f=Array(arguments.length-2),U=2;U<arguments.length;U++)f[U-2]=arguments[U];return h.prototype[y].apply(_,f)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(g,h,p){p||(p=0);const _=Array(16);if(typeof h=="string")for(var y=0;y<16;++y)_[y]=h.charCodeAt(p++)|h.charCodeAt(p++)<<8|h.charCodeAt(p++)<<16|h.charCodeAt(p++)<<24;else for(y=0;y<16;++y)_[y]=h[p++]|h[p++]<<8|h[p++]<<16|h[p++]<<24;h=g.g[0],p=g.g[1],y=g.g[2];let I=g.g[3],f;f=h+(I^p&(y^I))+_[0]+3614090360&4294967295,h=p+(f<<7&4294967295|f>>>25),f=I+(y^h&(p^y))+_[1]+3905402710&4294967295,I=h+(f<<12&4294967295|f>>>20),f=y+(p^I&(h^p))+_[2]+606105819&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(h^y&(I^h))+_[3]+3250441966&4294967295,p=y+(f<<22&4294967295|f>>>10),f=h+(I^p&(y^I))+_[4]+4118548399&4294967295,h=p+(f<<7&4294967295|f>>>25),f=I+(y^h&(p^y))+_[5]+1200080426&4294967295,I=h+(f<<12&4294967295|f>>>20),f=y+(p^I&(h^p))+_[6]+2821735955&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(h^y&(I^h))+_[7]+4249261313&4294967295,p=y+(f<<22&4294967295|f>>>10),f=h+(I^p&(y^I))+_[8]+1770035416&4294967295,h=p+(f<<7&4294967295|f>>>25),f=I+(y^h&(p^y))+_[9]+2336552879&4294967295,I=h+(f<<12&4294967295|f>>>20),f=y+(p^I&(h^p))+_[10]+4294925233&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(h^y&(I^h))+_[11]+2304563134&4294967295,p=y+(f<<22&4294967295|f>>>10),f=h+(I^p&(y^I))+_[12]+1804603682&4294967295,h=p+(f<<7&4294967295|f>>>25),f=I+(y^h&(p^y))+_[13]+4254626195&4294967295,I=h+(f<<12&4294967295|f>>>20),f=y+(p^I&(h^p))+_[14]+2792965006&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(h^y&(I^h))+_[15]+1236535329&4294967295,p=y+(f<<22&4294967295|f>>>10),f=h+(y^I&(p^y))+_[1]+4129170786&4294967295,h=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(h^p))+_[6]+3225465664&4294967295,I=h+(f<<9&4294967295|f>>>23),f=y+(h^p&(I^h))+_[11]+643717713&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^h&(y^I))+_[0]+3921069994&4294967295,p=y+(f<<20&4294967295|f>>>12),f=h+(y^I&(p^y))+_[5]+3593408605&4294967295,h=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(h^p))+_[10]+38016083&4294967295,I=h+(f<<9&4294967295|f>>>23),f=y+(h^p&(I^h))+_[15]+3634488961&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^h&(y^I))+_[4]+3889429448&4294967295,p=y+(f<<20&4294967295|f>>>12),f=h+(y^I&(p^y))+_[9]+568446438&4294967295,h=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(h^p))+_[14]+3275163606&4294967295,I=h+(f<<9&4294967295|f>>>23),f=y+(h^p&(I^h))+_[3]+4107603335&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^h&(y^I))+_[8]+1163531501&4294967295,p=y+(f<<20&4294967295|f>>>12),f=h+(y^I&(p^y))+_[13]+2850285829&4294967295,h=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(h^p))+_[2]+4243563512&4294967295,I=h+(f<<9&4294967295|f>>>23),f=y+(h^p&(I^h))+_[7]+1735328473&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^h&(y^I))+_[12]+2368359562&4294967295,p=y+(f<<20&4294967295|f>>>12),f=h+(p^y^I)+_[5]+4294588738&4294967295,h=p+(f<<4&4294967295|f>>>28),f=I+(h^p^y)+_[8]+2272392833&4294967295,I=h+(f<<11&4294967295|f>>>21),f=y+(I^h^p)+_[11]+1839030562&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^h)+_[14]+4259657740&4294967295,p=y+(f<<23&4294967295|f>>>9),f=h+(p^y^I)+_[1]+2763975236&4294967295,h=p+(f<<4&4294967295|f>>>28),f=I+(h^p^y)+_[4]+1272893353&4294967295,I=h+(f<<11&4294967295|f>>>21),f=y+(I^h^p)+_[7]+4139469664&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^h)+_[10]+3200236656&4294967295,p=y+(f<<23&4294967295|f>>>9),f=h+(p^y^I)+_[13]+681279174&4294967295,h=p+(f<<4&4294967295|f>>>28),f=I+(h^p^y)+_[0]+3936430074&4294967295,I=h+(f<<11&4294967295|f>>>21),f=y+(I^h^p)+_[3]+3572445317&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^h)+_[6]+76029189&4294967295,p=y+(f<<23&4294967295|f>>>9),f=h+(p^y^I)+_[9]+3654602809&4294967295,h=p+(f<<4&4294967295|f>>>28),f=I+(h^p^y)+_[12]+3873151461&4294967295,I=h+(f<<11&4294967295|f>>>21),f=y+(I^h^p)+_[15]+530742520&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^h)+_[2]+3299628645&4294967295,p=y+(f<<23&4294967295|f>>>9),f=h+(y^(p|~I))+_[0]+4096336452&4294967295,h=p+(f<<6&4294967295|f>>>26),f=I+(p^(h|~y))+_[7]+1126891415&4294967295,I=h+(f<<10&4294967295|f>>>22),f=y+(h^(I|~p))+_[14]+2878612391&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~h))+_[5]+4237533241&4294967295,p=y+(f<<21&4294967295|f>>>11),f=h+(y^(p|~I))+_[12]+1700485571&4294967295,h=p+(f<<6&4294967295|f>>>26),f=I+(p^(h|~y))+_[3]+2399980690&4294967295,I=h+(f<<10&4294967295|f>>>22),f=y+(h^(I|~p))+_[10]+4293915773&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~h))+_[1]+2240044497&4294967295,p=y+(f<<21&4294967295|f>>>11),f=h+(y^(p|~I))+_[8]+1873313359&4294967295,h=p+(f<<6&4294967295|f>>>26),f=I+(p^(h|~y))+_[15]+4264355552&4294967295,I=h+(f<<10&4294967295|f>>>22),f=y+(h^(I|~p))+_[6]+2734768916&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~h))+_[13]+1309151649&4294967295,p=y+(f<<21&4294967295|f>>>11),f=h+(y^(p|~I))+_[4]+4149444226&4294967295,h=p+(f<<6&4294967295|f>>>26),f=I+(p^(h|~y))+_[11]+3174756917&4294967295,I=h+(f<<10&4294967295|f>>>22),f=y+(h^(I|~p))+_[2]+718787259&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~h))+_[9]+3951481745&4294967295,g.g[0]=g.g[0]+h&4294967295,g.g[1]=g.g[1]+(y+(f<<21&4294967295|f>>>11))&4294967295,g.g[2]=g.g[2]+y&4294967295,g.g[3]=g.g[3]+I&4294967295}s.prototype.v=function(g,h){h===void 0&&(h=g.length);const p=h-this.blockSize,_=this.C;let y=this.h,I=0;for(;I<h;){if(y==0)for(;I<=p;)a(this,g,I),I+=this.blockSize;if(typeof g=="string"){for(;I<h;)if(_[y++]=g.charCodeAt(I++),y==this.blockSize){a(this,_),y=0;break}}else for(;I<h;)if(_[y++]=g[I++],y==this.blockSize){a(this,_),y=0;break}}this.h=y,this.o+=h},s.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var h=1;h<g.length-8;++h)g[h]=0;h=this.o*8;for(var p=g.length-8;p<g.length;++p)g[p]=h&255,h/=256;for(this.v(g),g=Array(16),h=0,p=0;p<4;++p)for(let _=0;_<32;_+=8)g[h++]=this.g[p]>>>_&255;return g};function l(g,h){var p=d;return Object.prototype.hasOwnProperty.call(p,g)?p[g]:p[g]=h(g)}function c(g,h){this.h=h;const p=[];let _=!0;for(let y=g.length-1;y>=0;y--){const I=g[y]|0;_&&I==h||(p[y]=I,_=!1)}this.g=p}var d={};function m(g){return-128<=g&&g<128?l(g,function(h){return new c([h|0],h<0?-1:0)}):new c([g|0],g<0?-1:0)}function v(g){if(isNaN(g)||!isFinite(g))return T;if(g<0)return C(v(-g));const h=[];let p=1;for(let _=0;g>=p;_++)h[_]=g/p|0,p*=4294967296;return new c(h,0)}function w(g,h){if(g.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(g.charAt(0)=="-")return C(w(g.substring(1),h));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=v(Math.pow(h,8));let _=T;for(let I=0;I<g.length;I+=8){var y=Math.min(8,g.length-I);const f=parseInt(g.substring(I,I+y),h);y<8?(y=v(Math.pow(h,y)),_=_.j(y).add(v(f))):(_=_.j(p),_=_.add(v(f)))}return _}var T=m(0),E=m(1),x=m(16777216);i=c.prototype,i.m=function(){if(L(this))return-C(this).m();let g=0,h=1;for(let p=0;p<this.g.length;p++){const _=this.i(p);g+=(_>=0?_:4294967296+_)*h,h*=4294967296}return g},i.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(k(this))return"0";if(L(this))return"-"+C(this).toString(g);const h=v(Math.pow(g,6));var p=this;let _="";for(;;){const y=M(p,h).g;p=P(p,y.j(h));let I=((p.g.length>0?p.g[0]:p.h)>>>0).toString(g);if(p=y,k(p))return I+_;for(;I.length<6;)I="0"+I;_=I+_}},i.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function k(g){if(g.h!=0)return!1;for(let h=0;h<g.g.length;h++)if(g.g[h]!=0)return!1;return!0}function L(g){return g.h==-1}i.l=function(g){return g=P(this,g),L(g)?-1:k(g)?0:1};function C(g){const h=g.g.length,p=[];for(let _=0;_<h;_++)p[_]=~g.g[_];return new c(p,~g.h).add(E)}i.abs=function(){return L(this)?C(this):this},i.add=function(g){const h=Math.max(this.g.length,g.g.length),p=[];let _=0;for(let y=0;y<=h;y++){let I=_+(this.i(y)&65535)+(g.i(y)&65535),f=(I>>>16)+(this.i(y)>>>16)+(g.i(y)>>>16);_=f>>>16,I&=65535,f&=65535,p[y]=f<<16|I}return new c(p,p[p.length-1]&-2147483648?-1:0)};function P(g,h){return g.add(C(h))}i.j=function(g){if(k(this)||k(g))return T;if(L(this))return L(g)?C(this).j(C(g)):C(C(this).j(g));if(L(g))return C(this.j(C(g)));if(this.l(x)<0&&g.l(x)<0)return v(this.m()*g.m());const h=this.g.length+g.g.length,p=[];for(var _=0;_<2*h;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(let y=0;y<g.g.length;y++){const I=this.i(_)>>>16,f=this.i(_)&65535,U=g.i(y)>>>16,G=g.i(y)&65535;p[2*_+2*y]+=f*G,$(p,2*_+2*y),p[2*_+2*y+1]+=I*G,$(p,2*_+2*y+1),p[2*_+2*y+1]+=f*U,$(p,2*_+2*y+1),p[2*_+2*y+2]+=I*U,$(p,2*_+2*y+2)}for(g=0;g<h;g++)p[g]=p[2*g+1]<<16|p[2*g];for(g=h;g<2*h;g++)p[g]=0;return new c(p,0)};function $(g,h){for(;(g[h]&65535)!=g[h];)g[h+1]+=g[h]>>>16,g[h]&=65535,h++}function O(g,h){this.g=g,this.h=h}function M(g,h){if(k(h))throw Error("division by zero");if(k(g))return new O(T,T);if(L(g))return h=M(C(g),h),new O(C(h.g),C(h.h));if(L(h))return h=M(g,C(h)),new O(C(h.g),h.h);if(g.g.length>30){if(L(g)||L(h))throw Error("slowDivide_ only works with positive integers.");for(var p=E,_=h;_.l(g)<=0;)p=R(p),_=R(_);var y=A(p,1),I=A(_,1);for(_=A(_,2),p=A(p,2);!k(_);){var f=I.add(_);f.l(g)<=0&&(y=y.add(p),I=f),_=A(_,1),p=A(p,1)}return h=P(g,y.j(h)),new O(y,h)}for(y=T;g.l(h)>=0;){for(p=Math.max(1,Math.floor(g.m()/h.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),I=v(p),f=I.j(h);L(f)||f.l(g)>0;)p-=_,I=v(p),f=I.j(h);k(I)&&(I=E),y=y.add(I),g=P(g,f)}return new O(y,g)}i.B=function(g){return M(this,g).h},i.and=function(g){const h=Math.max(this.g.length,g.g.length),p=[];for(let _=0;_<h;_++)p[_]=this.i(_)&g.i(_);return new c(p,this.h&g.h)},i.or=function(g){const h=Math.max(this.g.length,g.g.length),p=[];for(let _=0;_<h;_++)p[_]=this.i(_)|g.i(_);return new c(p,this.h|g.h)},i.xor=function(g){const h=Math.max(this.g.length,g.g.length),p=[];for(let _=0;_<h;_++)p[_]=this.i(_)^g.i(_);return new c(p,this.h^g.h)};function R(g){const h=g.g.length+1,p=[];for(let _=0;_<h;_++)p[_]=g.i(_)<<1|g.i(_-1)>>>31;return new c(p,g.h)}function A(g,h){const p=h>>5;h%=32;const _=g.g.length-p,y=[];for(let I=0;I<_;I++)y[I]=h>0?g.i(I+p)>>>h|g.i(I+p+1)<<32-h:g.i(I+p);return new c(y,g.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=w,Jn=c}).apply(typeof _r<"u"?_r:typeof self<"u"?self:typeof window<"u"?window:{});var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var r=0;r<t.length;++r){var o=t[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=n(this);function a(t,r){if(r)e:{var o=s;t=t.split(".");for(var u=0;u<t.length-1;u++){var b=t[u];if(!(b in o))break e;o=o[b]}t=t[t.length-1],u=o[t],r=r(u),r!=u&&r!=null&&e(o,t,{configurable:!0,writable:!0,value:r})}}a("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(t){return t||function(r){var o=[],u;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&o.push([u,r[u]]);return o}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function m(t,r,o){return t.call.apply(t.bind,arguments)}function v(t,r,o){return v=m,v.apply(null,arguments)}function w(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var u=o.slice();return u.push.apply(u,arguments),t.apply(this,u)}}function T(t,r){function o(){}o.prototype=r.prototype,t.Z=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.Ob=function(u,b,S){for(var D=Array(arguments.length-2),B=2;B<arguments.length;B++)D[B-2]=arguments[B];return r.prototype[b].apply(u,D)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function x(t){const r=t.length;if(r>0){const o=Array(r);for(let u=0;u<r;u++)o[u]=t[u];return o}return[]}function k(t,r){for(let u=1;u<arguments.length;u++){const b=arguments[u];var o=typeof b;if(o=o!="object"?o:b?Array.isArray(b)?"array":o:"null",o=="array"||o=="object"&&typeof b.length=="number"){o=t.length||0;const S=b.length||0;t.length=o+S;for(let D=0;D<S;D++)t[o+D]=b[D]}else t.push(b)}}class L{constructor(r,o){this.i=r,this.j=o,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function C(t){c.setTimeout(()=>{throw t},0)}function P(){var t=g;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class ${constructor(){this.h=this.g=null}add(r,o){const u=O.get();u.set(r,o),this.h?this.h.next=u:this.g=u,this.h=u}}var O=new L(()=>new M,t=>t.reset());class M{constructor(){this.next=this.g=this.h=null}set(r,o){this.h=r,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let R,A=!1,g=new $,h=()=>{const t=Promise.resolve(void 0);R=()=>{t.then(p)}};function p(){for(var t;t=P();){try{t.h.call(t.g)}catch(o){C(o)}var r=O;r.j(t),r.h<100&&(r.h++,t.next=r.g,r.g=t)}A=!1}function _(){this.u=this.u,this.C=this.C}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};c.addEventListener("test",o,r),c.removeEventListener("test",o,r)}catch{}return t}();function f(t){return/^[\s\xa0]*$/.test(t)}function U(t,r){y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,r)}T(U,y),U.prototype.init=function(t,r){const o=this.type=t.type,u=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget,r||(o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement)),this.relatedTarget=r,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&U.Z.h.call(this)},U.prototype.h=function(){U.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var G="closure_listenable_"+(Math.random()*1e6|0),Se=0;function Hi(t,r,o,u,b){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!u,this.ha=b,this.key=++Se,this.da=this.fa=!1}function lt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ct(t,r,o){for(const u in t)r.call(o,t[u],u,t)}function Ve(t,r){for(const o in t)r.call(void 0,t[o],o,t)}function qe(t){const r={};for(const o in t)r[o]=t[o];return r}const dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function St(t,r){let o,u;for(let b=1;b<arguments.length;b++){u=arguments[b];for(o in u)t[o]=u[o];for(let S=0;S<dt.length;S++)o=dt[S],Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o])}}function li(t){this.src=t,this.g={},this.h=0}li.prototype.add=function(t,r,o,u,b){const S=t.toString();t=this.g[S],t||(t=this.g[S]=[],this.h++);const D=Gi(t,r,u,b);return D>-1?(r=t[D],o||(r.fa=!1)):(r=new Hi(r,this.src,S,!!u,b),r.fa=o,t.push(r)),r};function zi(t,r){const o=r.type;if(o in t.g){var u=t.g[o],b=Array.prototype.indexOf.call(u,r,void 0),S;(S=b>=0)&&Array.prototype.splice.call(u,b,1),S&&(lt(r),t.g[o].length==0&&(delete t.g[o],t.h--))}}function Gi(t,r,o,u){for(let b=0;b<t.length;++b){const S=t[b];if(!S.da&&S.listener==r&&S.capture==!!o&&S.ha==u)return b}return-1}var Ki="closure_lm_"+(Math.random()*1e6|0),Ji={};function fs(t,r,o,u,b){if(Array.isArray(r)){for(let S=0;S<r.length;S++)fs(t,r[S],o,u,b);return null}return o=gs(o),t&&t[G]?t.J(r,o,d(u)?!!u.capture:!1,b):Za(t,r,o,!1,u,b)}function Za(t,r,o,u,b,S){if(!r)throw Error("Invalid event type");const D=d(b)?!!b.capture:!!b;let B=Yi(t);if(B||(t[Ki]=B=new li(t)),o=B.add(r,o,u,D,S),o.proxy)return o;if(u=eo(),o.proxy=u,u.src=t,u.listener=o,t.addEventListener)I||(b=D),b===void 0&&(b=!1),t.addEventListener(r.toString(),u,b);else if(t.attachEvent)t.attachEvent(ps(r.toString()),u);else if(t.addListener&&t.removeListener)t.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return o}function eo(){function t(o){return r.call(t.src,t.listener,o)}const r=to;return t}function ms(t,r,o,u,b){if(Array.isArray(r))for(var S=0;S<r.length;S++)ms(t,r[S],o,u,b);else u=d(u)?!!u.capture:!!u,o=gs(o),t&&t[G]?(t=t.i,S=String(r).toString(),S in t.g&&(r=t.g[S],o=Gi(r,o,u,b),o>-1&&(lt(r[o]),Array.prototype.splice.call(r,o,1),r.length==0&&(delete t.g[S],t.h--)))):t&&(t=Yi(t))&&(r=t.g[r.toString()],t=-1,r&&(t=Gi(r,o,u,b)),(o=t>-1?r[t]:null)&&Xi(o))}function Xi(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[G])zi(r.i,t);else{var o=t.type,u=t.proxy;r.removeEventListener?r.removeEventListener(o,u,t.capture):r.detachEvent?r.detachEvent(ps(o),u):r.addListener&&r.removeListener&&r.removeListener(u),(o=Yi(r))?(zi(o,t),o.h==0&&(o.src=null,r[Ki]=null)):lt(t)}}}function ps(t){return t in Ji?Ji[t]:Ji[t]="on"+t}function to(t,r){if(t.da)t=!0;else{r=new U(r,this);const o=t.listener,u=t.ha||t.src;t.fa&&Xi(t),t=o.call(u,r)}return t}function Yi(t){return t=t[Ki],t instanceof li?t:null}var Qi="__closure_events_fn_"+(Math.random()*1e9>>>0);function gs(t){return typeof t=="function"?t:(t[Qi]||(t[Qi]=function(r){return t.handleEvent(r)}),t[Qi])}function ne(){_.call(this),this.i=new li(this),this.M=this,this.G=null}T(ne,_),ne.prototype[G]=!0,ne.prototype.removeEventListener=function(t,r,o,u){ms(this,t,r,o,u)};function re(t,r){var o,u=t.G;if(u)for(o=[];u;u=u.G)o.push(u);if(t=t.M,u=r.type||r,typeof r=="string")r=new y(r,t);else if(r instanceof y)r.target=r.target||t;else{var b=r;r=new y(u,t),St(r,b)}b=!0;let S,D;if(o)for(D=o.length-1;D>=0;D--)S=r.g=o[D],b=ci(S,u,!0,r)&&b;if(S=r.g=t,b=ci(S,u,!0,r)&&b,b=ci(S,u,!1,r)&&b,o)for(D=0;D<o.length;D++)S=r.g=o[D],b=ci(S,u,!1,r)&&b}ne.prototype.N=function(){if(ne.Z.N.call(this),this.i){var t=this.i;for(const r in t.g){const o=t.g[r];for(let u=0;u<o.length;u++)lt(o[u]);delete t.g[r],t.h--}}this.G=null},ne.prototype.J=function(t,r,o,u){return this.i.add(String(t),r,!1,o,u)},ne.prototype.K=function(t,r,o,u){return this.i.add(String(t),r,!0,o,u)};function ci(t,r,o,u){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();let b=!0;for(let S=0;S<r.length;++S){const D=r[S];if(D&&!D.da&&D.capture==o){const B=D.listener,Z=D.ha||D.src;D.fa&&zi(t.i,D),b=B.call(Z,u)!==!1&&b}}return b&&!u.defaultPrevented}function io(t,r){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=v(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:c.setTimeout(t,r||0)}function vs(t){t.g=io(()=>{t.g=null,t.i&&(t.i=!1,vs(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class no extends _{constructor(r,o){super(),this.m=r,this.l=o,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:vs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kt(t){_.call(this),this.h=t,this.g={}}T(kt,_);var ys=[];function _s(t){ct(t.g,function(r,o){this.g.hasOwnProperty(o)&&Xi(r)},t),t.g={}}kt.prototype.N=function(){kt.Z.N.call(this),_s(this)},kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zi=c.JSON.stringify,so=c.JSON.parse,ro=class{stringify(t){return c.JSON.stringify(t,void 0)}parse(t){return c.JSON.parse(t,void 0)}};function Is(){}function ao(){}var At={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function en(){y.call(this,"d")}T(en,y);function tn(){y.call(this,"c")}T(tn,y);var ut={},bs=null;function nn(){return bs=bs||new ne}ut.Ia="serverreachability";function ws(t){y.call(this,ut.Ia,t)}T(ws,y);function xt(t){const r=nn();re(r,new ws(r))}ut.STAT_EVENT="statevent";function Ts(t,r){y.call(this,ut.STAT_EVENT,t),this.stat=r}T(Ts,y);function ae(t){const r=nn();re(r,new Ts(r,t))}ut.Ja="timingevent";function Es(t,r){y.call(this,ut.Ja,t),this.size=r}T(Es,y);function Lt(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){t()},r)}function Ot(){this.g=!0}Ot.prototype.ua=function(){this.g=!1};function oo(t,r,o,u,b,S){t.info(function(){if(t.g)if(S){var D="",B=S.split("&");for(let H=0;H<B.length;H++){var Z=B[H].split("=");if(Z.length>1){const te=Z[0];Z=Z[1];const _e=te.split("_");D=_e.length>=2&&_e[1]=="type"?D+(te+"="+Z+"&"):D+(te+"=redacted&")}}}else D=null;else D=S;return"XMLHTTP REQ ("+u+") [attempt "+b+"]: "+r+`
`+o+`
`+D})}function lo(t,r,o,u,b,S,D){t.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+b+"]: "+r+`
`+o+`
`+S+" "+D})}function ht(t,r,o,u){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+uo(t,o)+(u?" "+u:"")})}function co(t,r){t.info(function(){return"TIMEOUT: "+r})}Ot.prototype.info=function(){};function uo(t,r){if(!t.g)return r;if(!r)return null;try{const S=JSON.parse(r);if(S){for(t=0;t<S.length;t++)if(Array.isArray(S[t])){var o=S[t];if(!(o.length<2)){var u=o[1];if(Array.isArray(u)&&!(u.length<1)){var b=u[0];if(b!="noop"&&b!="stop"&&b!="close")for(let D=1;D<u.length;D++)u[D]=""}}}}return Zi(S)}catch{return r}}var sn={NO_ERROR:0,TIMEOUT:8},ho={},Ss;function rn(){}T(rn,Is),rn.prototype.g=function(){return new XMLHttpRequest},Ss=new rn;function Dt(t){return encodeURIComponent(String(t))}function fo(t){var r=1;t=t.split(":");const o=[];for(;r>0&&t.length;)o.push(t.shift()),r--;return t.length&&o.push(t.join(":")),o}function Le(t,r,o,u){this.j=t,this.i=r,this.l=o,this.S=u||1,this.V=new kt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ks}function ks(){this.i=null,this.g="",this.h=!1}var As={},an={};function on(t,r,o){t.M=1,t.A=ui(ye(r)),t.u=o,t.R=!0,xs(t,null)}function xs(t,r){t.F=Date.now(),di(t),t.B=ye(t.A);var o=t.B,u=t.S;Array.isArray(u)||(u=[String(u)]),Fs(o.i,"t",u),t.C=0,o=t.j.L,t.h=new ks,t.g=rr(t.j,o?r:null,!t.u),t.P>0&&(t.O=new no(v(t.Y,t,t.g),t.P)),r=t.V,o=t.g,u=t.ba;var b="readystatechange";Array.isArray(b)||(b&&(ys[0]=b.toString()),b=ys);for(let S=0;S<b.length;S++){const D=fs(o,b[S],u||r.handleEvent,!1,r.h||r);if(!D)break;r.g[D.key]=D}r=t.J?qe(t.J):{},t.u?(t.v||(t.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,r)):(t.v="GET",t.g.ea(t.B,t.v,null,r)),xt(),oo(t.i,t.v,t.B,t.l,t.S,t.u)}Le.prototype.ba=function(t){t=t.target;const r=this.O;r&&Pe(t)==3?r.j():this.Y(t)},Le.prototype.Y=function(t){try{if(t==this.g)e:{const B=Pe(this.g),Z=this.g.ya(),H=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||Ks(this.g)))){this.K||B!=4||Z==7||(Z==8||H<=0?xt(3):xt(2)),ln(this);var r=this.g.ca();this.X=r;var o=mo(this);if(this.o=r==200,lo(this.i,this.v,this.B,this.l,this.S,B,r),this.o){if(this.U&&!this.L){t:{if(this.g){var u,b=this.g;if((u=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(u)){var S=u;break t}}S=null}if(t=S)ht(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,cn(this,t);else{this.o=!1,this.m=3,ae(12),He(this),Pt(this);break e}}if(this.R){t=!0;let te;for(;!this.K&&this.C<o.length;)if(te=po(this,o),te==an){B==4&&(this.m=4,ae(14),t=!1),ht(this.i,this.l,null,"[Incomplete Response]");break}else if(te==As){this.m=4,ae(15),ht(this.i,this.l,o,"[Invalid Chunk]"),t=!1;break}else ht(this.i,this.l,te,null),cn(this,te);if(Ls(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||o.length!=0||this.h.h||(this.m=1,ae(16),t=!1),this.o=this.o&&t,!t)ht(this.i,this.l,o,"[Invalid Chunked Response]"),He(this),Pt(this);else if(o.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),vn(D),D.P=!0,ae(11))}}else ht(this.i,this.l,o,null),cn(this,o);B==4&&He(this),this.o&&!this.K&&(B==4?tr(this.j,this):(this.o=!1,di(this)))}else Lo(this.g),r==400&&o.indexOf("Unknown SID")>0?(this.m=3,ae(12)):(this.m=0,ae(13)),He(this),Pt(this)}}}catch{}finally{}};function mo(t){if(!Ls(t))return t.g.la();const r=Ks(t.g);if(r==="")return"";let o="";const u=r.length,b=Pe(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return He(t),Pt(t),"";t.h.i=new c.TextDecoder}for(let S=0;S<u;S++)t.h.h=!0,o+=t.h.i.decode(r[S],{stream:!(b&&S==u-1)});return r.length=0,t.h.g+=o,t.C=0,t.h.g}function Ls(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function po(t,r){var o=t.C,u=r.indexOf(`
`,o);return u==-1?an:(o=Number(r.substring(o,u)),isNaN(o)?As:(u+=1,u+o>r.length?an:(r=r.slice(u,u+o),t.C=u+o,r)))}Le.prototype.cancel=function(){this.K=!0,He(this)};function di(t){t.T=Date.now()+t.H,Os(t,t.H)}function Os(t,r){if(t.D!=null)throw Error("WatchDog timer not null");t.D=Lt(v(t.aa,t),r)}function ln(t){t.D&&(c.clearTimeout(t.D),t.D=null)}Le.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(co(this.i,this.B),this.M!=2&&(xt(),ae(17)),He(this),this.m=2,Pt(this)):Os(this,this.T-t)};function Pt(t){t.j.I==0||t.K||tr(t.j,t)}function He(t){ln(t);var r=t.O;r&&typeof r.dispose=="function"&&r.dispose(),t.O=null,_s(t.V),t.g&&(r=t.g,t.g=null,r.abort(),r.dispose())}function cn(t,r){try{var o=t.j;if(o.I!=0&&(o.g==t||dn(o.h,t))){if(!t.L&&dn(o.h,t)&&o.I==3){try{var u=o.Ba.g.parse(r)}catch{u=null}if(Array.isArray(u)&&u.length==3){var b=u;if(b[0]==0){e:if(!o.v){if(o.g)if(o.g.F+3e3<t.F)gi(o),mi(o);else break e;gn(o),ae(18)}}else o.xa=b[1],0<o.xa-o.K&&b[2]<37500&&o.F&&o.A==0&&!o.C&&(o.C=Lt(v(o.Va,o),6e3));Cs(o.h)<=1&&o.ta&&(o.ta=void 0)}else Ge(o,11)}else if((t.L||o.g==t)&&gi(o),!f(r))for(b=o.Ba.g.parse(r),r=0;r<b.length;r++){let H=b[r];const te=H[0];if(!(te<=o.K))if(o.K=te,H=H[1],o.I==2)if(H[0]=="c"){o.M=H[1],o.ba=H[2];const _e=H[3];_e!=null&&(o.ka=_e,o.j.info("VER="+o.ka));const Ke=H[4];Ke!=null&&(o.za=Ke,o.j.info("SVER="+o.za));const Ce=H[5];Ce!=null&&typeof Ce=="number"&&Ce>0&&(u=1.5*Ce,o.O=u,o.j.info("backChannelRequestTimeoutMs_="+u)),u=o;const Me=t.g;if(Me){const vi=Me.g?Me.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vi){var S=u.h;S.g||vi.indexOf("spdy")==-1&&vi.indexOf("quic")==-1&&vi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(un(S,S.h),S.h=null))}if(u.G){const yn=Me.g?Me.g.getResponseHeader("X-HTTP-Session-Id"):null;yn&&(u.wa=yn,z(u.J,u.G,yn))}}o.I=3,o.l&&o.l.ra(),o.aa&&(o.T=Date.now()-t.F,o.j.info("Handshake RTT: "+o.T+"ms")),u=o;var D=t;if(u.na=sr(u,u.L?u.ba:null,u.W),D.L){Ms(u.h,D);var B=D,Z=u.O;Z&&(B.H=Z),B.D&&(ln(B),di(B)),u.g=D}else Zs(u);o.i.length>0&&pi(o)}else H[0]!="stop"&&H[0]!="close"||Ge(o,7);else o.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?Ge(o,7):pn(o):H[0]!="noop"&&o.l&&o.l.qa(H),o.A=0)}}xt(4)}catch{}}var go=class{constructor(t,r){this.g=t,this.map=r}};function Ds(t){this.l=t||10,c.PerformanceNavigationTiming?(t=c.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ps(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Cs(t){return t.h?1:t.g?t.g.size:0}function dn(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function un(t,r){t.g?t.g.add(r):t.h=r}function Ms(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}Ds.prototype.cancel=function(){if(this.i=Ns(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ns(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const o of t.g.values())r=r.concat(o.G);return r}return x(t.i)}var $s=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vo(t,r){if(t){t=t.split("&");for(let o=0;o<t.length;o++){const u=t[o].indexOf("=");let b,S=null;u>=0?(b=t[o].substring(0,u),S=t[o].substring(u+1)):b=t[o],r(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Oe(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;t instanceof Oe?(this.l=t.l,Ct(this,t.j),this.o=t.o,this.g=t.g,Mt(this,t.u),this.h=t.h,hn(this,js(t.i)),this.m=t.m):t&&(r=String(t).match($s))?(this.l=!1,Ct(this,r[1]||"",!0),this.o=Nt(r[2]||""),this.g=Nt(r[3]||"",!0),Mt(this,r[4]),this.h=Nt(r[5]||"",!0),hn(this,r[6]||"",!0),this.m=Nt(r[7]||"")):(this.l=!1,this.i=new Rt(null,this.l))}Oe.prototype.toString=function(){const t=[];var r=this.j;r&&t.push($t(r,Rs,!0),":");var o=this.g;return(o||r=="file")&&(t.push("//"),(r=this.o)&&t.push($t(r,Rs,!0),"@"),t.push(Dt(o).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.u,o!=null&&t.push(":",String(o))),(o=this.h)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push($t(o,o.charAt(0)=="/"?Io:_o,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",$t(o,wo)),t.join("")},Oe.prototype.resolve=function(t){const r=ye(this);let o=!!t.j;o?Ct(r,t.j):o=!!t.o,o?r.o=t.o:o=!!t.g,o?r.g=t.g:o=t.u!=null;var u=t.h;if(o)Mt(r,t.u);else if(o=!!t.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var b=r.h.lastIndexOf("/");b!=-1&&(u=r.h.slice(0,b+1)+u)}if(b=u,b==".."||b==".")u="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){u=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let D=0;D<b.length;){const B=b[D++];B=="."?u&&D==b.length&&S.push(""):B==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),u&&D==b.length&&S.push("")):(S.push(B),u=!0)}u=S.join("/")}else u=b}return o?r.h=u:o=t.i.toString()!=="",o?hn(r,js(t.i)):o=!!t.m,o&&(r.m=t.m),r};function ye(t){return new Oe(t)}function Ct(t,r,o){t.j=o?Nt(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function Mt(t,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);t.u=r}else t.u=null}function hn(t,r,o){r instanceof Rt?(t.i=r,To(t.i,t.l)):(o||(r=$t(r,bo)),t.i=new Rt(r,t.l))}function z(t,r,o){t.i.set(r,o)}function ui(t){return z(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function Nt(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $t(t,r,o){return typeof t=="string"?(t=encodeURI(t).replace(r,yo),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rs=/[#\/\?@]/g,_o=/[#\?:]/g,Io=/[#\?]/g,bo=/[#\?@]/g,wo=/#/g;function Rt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function ze(t){t.g||(t.g=new Map,t.h=0,t.i&&vo(t.i,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=Rt.prototype,i.add=function(t,r){ze(this),this.i=null,t=ft(this,t);let o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(r),this.h+=1,this};function Bs(t,r){ze(t),r=ft(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function Us(t,r){return ze(t),r=ft(t,r),t.g.has(r)}i.forEach=function(t,r){ze(this),this.g.forEach(function(o,u){o.forEach(function(b){t.call(r,b,u,this)},this)},this)};function Ws(t,r){ze(t);let o=[];if(typeof r=="string")Us(t,r)&&(o=o.concat(t.g.get(ft(t,r))));else for(t=Array.from(t.g.values()),r=0;r<t.length;r++)o=o.concat(t[r]);return o}i.set=function(t,r){return ze(this),this.i=null,t=ft(this,t),Us(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},i.get=function(t,r){return t?(t=Ws(this,t),t.length>0?String(t[0]):r):r};function Fs(t,r,o){Bs(t,r),o.length>0&&(t.i=null,t.g.set(ft(t,r),x(o)),t.h+=o.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(let u=0;u<r.length;u++){var o=r[u];const b=Dt(o);o=Ws(this,o);for(let S=0;S<o.length;S++){let D=b;o[S]!==""&&(D+="="+Dt(o[S])),t.push(D)}}return this.i=t.join("&")};function js(t){const r=new Rt;return r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),r}function ft(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function To(t,r){r&&!t.j&&(ze(t),t.i=null,t.g.forEach(function(o,u){const b=u.toLowerCase();u!=b&&(Bs(this,u),Fs(this,b,o))},t)),t.j=r}function Eo(t,r){const o=new Ot;if(c.Image){const u=new Image;u.onload=w(De,o,"TestLoadImage: loaded",!0,r,u),u.onerror=w(De,o,"TestLoadImage: error",!1,r,u),u.onabort=w(De,o,"TestLoadImage: abort",!1,r,u),u.ontimeout=w(De,o,"TestLoadImage: timeout",!1,r,u),c.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=t}else r(!1)}function So(t,r){const o=new Ot,u=new AbortController,b=setTimeout(()=>{u.abort(),De(o,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:u.signal}).then(S=>{clearTimeout(b),S.ok?De(o,"TestPingServer: ok",!0,r):De(o,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(b),De(o,"TestPingServer: error",!1,r)})}function De(t,r,o,u,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),u(o)}catch{}}function ko(){this.g=new ro}function fn(t){this.i=t.Sb||null,this.h=t.ab||!1}T(fn,Is),fn.prototype.g=function(){return new hi(this.i,this.h)};function hi(t,r){ne.call(this),this.H=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(hi,ne),i=hi.prototype,i.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=r,this.readyState=1,Ut(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(r.body=t),(this.H||c).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bt(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ut(this)),this.g&&(this.readyState=3,Ut(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Vs(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function Vs(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?Bt(this):Ut(this),this.readyState==3&&Vs(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,Bt(this))},i.Na=function(t){this.g&&(this.response=t,Bt(this))},i.ga=function(){this.g&&Bt(this)};function Bt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Ut(t)}i.setRequestHeader=function(t,r){this.A.append(t,r)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var o=r.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=r.next();return t.join(`\r
`)};function Ut(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function qs(t){let r="";return ct(t,function(o,u){r+=u,r+=":",r+=o,r+=`\r
`}),r}function mn(t,r,o){e:{for(u in o){var u=!1;break e}u=!0}u||(o=qs(o),typeof t=="string"?o!=null&&Dt(o):z(t,r,o))}function J(t){ne.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(J,ne);var Ao=/^https?$/i,xo=["POST","PUT"];i=J.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,r,o,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ss.g(),this.g.onreadystatechange=E(v(this.Ca,this));try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(S){Hs(this,S);return}if(t=o||"",o=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var b in u)o.set(b,u[b]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const S of u.keys())o.set(S,u.get(S));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(o.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&t instanceof c.FormData,!(Array.prototype.indexOf.call(xo,r,void 0)>=0)||u||b||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of o)this.g.setRequestHeader(S,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(S){Hs(this,S)}};function Hs(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.o=5,zs(t),fi(t)}function zs(t){t.A||(t.A=!0,re(t,"complete"),re(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,re(this,"complete"),re(this,"abort"),fi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fi(this,!0)),J.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Gs(this):this.Xa())},i.Xa=function(){Gs(this)};function Gs(t){if(t.h&&typeof l<"u"){if(t.v&&Pe(t)==4)setTimeout(t.Ca.bind(t),0);else if(re(t,"readystatechange"),Pe(t)==4){t.h=!1;try{const S=t.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var o;if(!(o=r)){var u;if(u=S===0){let D=String(t.D).match($s)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),u=!Ao.test(D?D.toLowerCase():"")}o=u}if(o)re(t,"complete"),re(t,"success");else{t.o=6;try{var b=Pe(t)>2?t.g.statusText:""}catch{b=""}t.l=b+" ["+t.ca()+"]",zs(t)}}finally{fi(t)}}}}function fi(t,r){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const o=t.g;t.g=null,r||re(t,"ready");try{o.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Pe(t){return t.g?t.g.readyState:0}i.ca=function(){try{return Pe(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),so(r)}};function Ks(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Lo(t){const r={};t=(t.g&&Pe(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<t.length;u++){if(f(t[u]))continue;var o=fo(t[u]);const b=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const S=r[b]||[];r[b]=S,S.push(o)}Ve(r,function(u){return u.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wt(t,r,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||r}function Js(t){this.za=0,this.i=[],this.j=new Ot,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Wt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Wt("baseRetryDelayMs",5e3,t),this.Za=Wt("retryDelaySeedMs",1e4,t),this.Ta=Wt("forwardChannelMaxRetries",2,t),this.va=Wt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Ds(t&&t.concurrentRequestLimit),this.Ba=new ko,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Js.prototype,i.ka=8,i.I=1,i.connect=function(t,r,o,u){ae(0),this.W=t,this.H=r||{},o&&u!==void 0&&(this.H.OSID=o,this.H.OAID=u),this.F=this.X,this.J=sr(this,null,this.W),pi(this)};function pn(t){if(Xs(t),t.I==3){var r=t.V++,o=ye(t.J);if(z(o,"SID",t.M),z(o,"RID",r),z(o,"TYPE","terminate"),Ft(t,o),r=new Le(t,t.j,r),r.M=2,r.A=ui(ye(o)),o=!1,c.navigator&&c.navigator.sendBeacon)try{o=c.navigator.sendBeacon(r.A.toString(),"")}catch{}!o&&c.Image&&(new Image().src=r.A,o=!0),o||(r.g=rr(r.j,null),r.g.ea(r.A)),r.F=Date.now(),di(r)}nr(t)}function mi(t){t.g&&(vn(t),t.g.cancel(),t.g=null)}function Xs(t){mi(t),t.v&&(c.clearTimeout(t.v),t.v=null),gi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&c.clearTimeout(t.m),t.m=null)}function pi(t){if(!Ps(t.h)&&!t.m){t.m=!0;var r=t.Ea;R||h(),A||(R(),A=!0),g.add(r,t),t.D=0}}function Oo(t,r){return Cs(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=r.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=Lt(v(t.Ea,t,r),ir(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const b=new Le(this,this.j,t);let S=this.o;if(this.U&&(S?(S=qe(S),St(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)e:{for(var r=0,o=0;o<this.i.length;o++){t:{var u=this.i[o];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(r+=u,r>4096){r=o;break e}if(r===4096||o===this.i.length-1){r=o+1;break e}}r=1e3}else r=1e3;r=Qs(this,b,r),o=ye(this.J),z(o,"RID",t),z(o,"CVER",22),this.G&&z(o,"X-HTTP-Session-Id",this.G),Ft(this,o),S&&(this.R?r="headers="+Dt(qs(S))+"&"+r:this.u&&mn(o,this.u,S)),un(this.h,b),this.Ra&&z(o,"TYPE","init"),this.S?(z(o,"$req",r),z(o,"SID","null"),b.U=!0,on(b,o,null)):on(b,o,r),this.I=2}}else this.I==3&&(t?Ys(this,t):this.i.length==0||Ps(this.h)||Ys(this))};function Ys(t,r){var o;r?o=r.l:o=t.V++;const u=ye(t.J);z(u,"SID",t.M),z(u,"RID",o),z(u,"AID",t.K),Ft(t,u),t.u&&t.o&&mn(u,t.u,t.o),o=new Le(t,t.j,o,t.D+1),t.u===null&&(o.J=t.o),r&&(t.i=r.G.concat(t.i)),r=Qs(t,o,1e3),o.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),un(t.h,o),on(o,u,r)}function Ft(t,r){t.H&&ct(t.H,function(o,u){z(r,u,o)}),t.l&&ct({},function(o,u){z(r,u,o)})}function Qs(t,r,o){o=Math.min(t.i.length,o);const u=t.l?v(t.l.Ka,t.l,t):null;e:{var b=t.i;let B=-1;for(;;){const Z=["count="+o];B==-1?o>0?(B=b[0].g,Z.push("ofs="+B)):B=0:Z.push("ofs="+B);let H=!0;for(let te=0;te<o;te++){var S=b[te].g;const _e=b[te].map;if(S-=B,S<0)B=Math.max(0,b[te].g-100),H=!1;else try{S="req"+S+"_"||"";try{var D=_e instanceof Map?_e:Object.entries(_e);for(const[Ke,Ce]of D){let Me=Ce;d(Ce)&&(Me=Zi(Ce)),Z.push(S+Ke+"="+encodeURIComponent(Me))}}catch(Ke){throw Z.push(S+"type="+encodeURIComponent("_badmap")),Ke}}catch{u&&u(_e)}}if(H){D=Z.join("&");break e}}D=void 0}return t=t.i.splice(0,o),r.G=t,D}function Zs(t){if(!t.g&&!t.v){t.Y=1;var r=t.Da;R||h(),A||(R(),A=!0),g.add(r,t),t.A=0}}function gn(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=Lt(v(t.Da,t),ir(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,er(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Lt(v(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ae(10),mi(this),er(this))};function vn(t){t.B!=null&&(c.clearTimeout(t.B),t.B=null)}function er(t){t.g=new Le(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var r=ye(t.na);z(r,"RID","rpc"),z(r,"SID",t.M),z(r,"AID",t.K),z(r,"CI",t.F?"0":"1"),!t.F&&t.ia&&z(r,"TO",t.ia),z(r,"TYPE","xmlhttp"),Ft(t,r),t.u&&t.o&&mn(r,t.u,t.o),t.O&&(t.g.H=t.O);var o=t.g;t=t.ba,o.M=1,o.A=ui(ye(r)),o.u=null,o.R=!0,xs(o,t)}i.Va=function(){this.C!=null&&(this.C=null,mi(this),gn(this),ae(19))};function gi(t){t.C!=null&&(c.clearTimeout(t.C),t.C=null)}function tr(t,r){var o=null;if(t.g==r){gi(t),vn(t),t.g=null;var u=2}else if(dn(t.h,r))o=r.G,Ms(t.h,r),u=1;else return;if(t.I!=0){if(r.o)if(u==1){o=r.u?r.u.length:0,r=Date.now()-r.F;var b=t.D;u=nn(),re(u,new Es(u,o)),pi(t)}else Zs(t);else if(b=r.m,b==3||b==0&&r.X>0||!(u==1&&Oo(t,r)||u==2&&gn(t)))switch(o&&o.length>0&&(r=t.h,r.i=r.i.concat(o)),b){case 1:Ge(t,5);break;case 4:Ge(t,10);break;case 3:Ge(t,6);break;default:Ge(t,2)}}}function ir(t,r){let o=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(o*=2),o*r}function Ge(t,r){if(t.j.info("Error code "+r),r==2){var o=v(t.bb,t),u=t.Ua;const b=!u;u=new Oe(u||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ct(u,"https"),ui(u),b?Eo(u.toString(),o):So(u.toString(),o)}else ae(2);t.I=0,t.l&&t.l.pa(r),nr(t),Xs(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))};function nr(t){if(t.I=0,t.ja=[],t.l){const r=Ns(t.h);(r.length!=0||t.i.length!=0)&&(k(t.ja,r),k(t.ja,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.oa()}}function sr(t,r,o){var u=o instanceof Oe?ye(o):new Oe(o);if(u.g!="")r&&(u.g=r+"."+u.g),Mt(u,u.u);else{var b=c.location;u=b.protocol,r=r?r+"."+b.hostname:b.hostname,b=+b.port;const S=new Oe(null);u&&Ct(S,u),r&&(S.g=r),b&&Mt(S,b),o&&(S.h=o),u=S}return o=t.G,r=t.wa,o&&r&&z(u,o,r),z(u,"VER",t.ka),Ft(t,u),u}function rr(t,r,o){if(r&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Aa&&!t.ma?new J(new fn({ab:o})):new J(t.ma),r.Fa(t.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ar(){}i=ar.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function he(t,r){ne.call(this),this.g=new Js(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(t?t["X-WebChannel-Client-Profile"]=r.sa:t={"X-WebChannel-Client-Profile":r.sa}),this.g.U=t,(t=r&&r.Qb)&&!f(t)&&(this.g.u=t),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!f(r)&&(this.g.G=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new mt(this)}T(he,ne),he.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},he.prototype.close=function(){pn(this.g)},he.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.v&&(o={},o.__data__=Zi(t),t=o);r.i.push(new go(r.Ya++,t)),r.I==3&&pi(r)},he.prototype.N=function(){this.g.l=null,delete this.j,pn(this.g),delete this.g,he.Z.N.call(this)};function or(t){en.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const o in r){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}T(or,en);function lr(){tn.call(this),this.status=1}T(lr,tn);function mt(t){this.g=t}T(mt,ar),mt.prototype.ra=function(){re(this.g,"a")},mt.prototype.qa=function(t){re(this.g,new or(t))},mt.prototype.pa=function(t){re(this.g,new lr)},mt.prototype.oa=function(){re(this.g,"b")},he.prototype.send=he.prototype.o,he.prototype.open=he.prototype.m,he.prototype.close=he.prototype.close,sn.NO_ERROR=0,sn.TIMEOUT=8,sn.HTTP_ERROR=6,ho.COMPLETE="complete",ao.EventType=At,At.OPEN="a",At.CLOSE="b",At.ERROR="c",At.MESSAGE="d",ne.prototype.listen=ne.prototype.J,J.prototype.listenOnce=J.prototype.K,J.prototype.getLastError=J.prototype.Ha,J.prototype.getLastErrorCode=J.prototype.ya,J.prototype.getStatus=J.prototype.ca,J.prototype.getResponseJson=J.prototype.La,J.prototype.getResponseText=J.prototype.la,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Fa}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}le.UNAUTHENTICATED=new le(null),le.GOOGLE_CREDENTIALS=new le("google-credentials-uid"),le.FIRST_PARTY=new le("first-party-uid"),le.MOCK_USER=new le("mock-user");/**
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
 */let Fi="12.12.0";function rc(i){Fi=i}/**
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
 */const Li=new zn("@firebase/firestore");function pe(i,...e){if(Li.logLevel<=q.DEBUG){const n=e.map(pa);Li.debug(`Firestore (${Fi}): ${i}`,...n)}}function ma(i,...e){if(Li.logLevel<=q.ERROR){const n=e.map(pa);Li.error(`Firestore (${Fi}): ${i}`,...n)}}function pa(i){if(typeof i=="string")return i;try{return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Oi(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,ga(i,s,n)}function ga(i,e,n){let s=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ma(s),new Error(s)}function qt(i,e,n,s){let a="Unexpected state";typeof n=="string"?a=n:s=n,i||ga(e,a,s)}/**
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
 */const j={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class V extends Fe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ht{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ac{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(le.UNAUTHENTICATED))}shutdown(){}}class lc{constructor(e){this.t=e,this.currentUser=le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qt(this.o===void 0,42304);let s=this.i;const a=m=>this.i!==s?(s=this.i,n(m)):Promise.resolve();let l=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ht,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ht)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qt(typeof s.accessToken=="string",31837,{l:s}),new ac(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qt(e===null||typeof e=="string",2055,{h:e}),new le(e)}}class cc{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=le.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dc{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new cc(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ir{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uc{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){qt(this.o===void 0,3512);const s=l=>{l.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,pe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ir(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ir(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hc(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class fc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=hc(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<n&&(s+=e.charAt(a[l]%62))}return s}}function We(i,e){return i<e?-1:i>e?1:0}function mc(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const a=i.charAt(s),l=e.charAt(s);if(a!==l)return En(a)===En(l)?We(a,l):En(a)?1:-1}return We(i.length,e.length)}const pc=55296,gc=57343;function En(i){const e=i.charCodeAt(0);return e>=pc&&e<=gc}/**
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
 */const br="__name__";class Ie{constructor(e,n,s){n===void 0?n=0:n>e.length&&Oi(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Oi(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ie.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ie?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const l=Ie.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return We(e.length,n.length)}static compareSegments(e,n){const s=Ie.isNumericId(e),a=Ie.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?Ie.extractNumericId(e).compare(Ie.extractNumericId(n)):mc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class me extends Ie{construct(e,n,s){return new me(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new me(n)}static emptyPath(){return new me([])}}const vc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Ie{construct(e,n,s){return new Xe(e,n,s)}static isValidIdentifier(e){return vc.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===br}static keyField(){return new Xe([br])}static fromServerFormat(e){const n=[];let s="",a=0;const l=()=>{if(s.length===0)throw new V(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new V(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new V(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new V(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class Ye{constructor(e){this.path=e}static fromPath(e){return new Ye(me.fromString(e))}static fromName(e){return new Ye(me.fromString(e).popFirst(5))}static empty(){return new Ye(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ye(new me(e.slice()))}}function yc(i,e,n,s){if(e===!0&&s===!0)throw new V(j.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function _c(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}/**
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
 */function Q(i,e){const n={typeString:i};return e&&(n.value=e),n}function ri(i,e){if(!_c(i))throw new V(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const c=i[s];if(a&&typeof c!==a){n=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${s}' field to equal '${l.value}'`;break}}if(n)throw new V(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const wr=-62135596800,Tr=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Tr);return new be(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<wr)throw new V(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tr}_compareTo(e){return this.seconds===e.seconds?We(this.nanoseconds,e.nanoseconds):We(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ri(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Q("string",be._jsonSchemaVersion),seconds:Q("number"),nanoseconds:Q("number")};function Ic(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new bc("Invalid base64 string: "+l):l}}(e);return new rt(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return We(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const Er="(default)";class Di{constructor(e,n){this.projectId=e,this.database=n||Er}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database===Er}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}function wc(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new V(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(i.options.projectId,e)}/**
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
 */class Tc{constructor(e,n=null,s=[],a=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Ec(i){return new Tc(i)}/**
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
 */var Sr,W;(W=Sr||(Sr={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Jn([4294967295,4294967295],0);/**
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
 */const Sc=41943040;/**
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
 */const kc=1048576;function Sn(){return typeof document<"u"?document:null}class Ac{constructor(e,n,s=1e3,a=1.5,l=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=a,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-s);a>0&&pe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class Xn{constructor(e,n,s,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,l){const c=Date.now()+s,d=new Xn(e,n,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var kr,Ar;(Ar=kr||(kr={})).Ma="default",Ar.Cache="cache";/**
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
 */function xc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Lc="ComponentProvider",xr=new Map;/**
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
 */const Oc="firestore.googleapis.com",Lr=!0;class Or{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Oc,this.ssl=Lr}else this.host=e.host,this.ssl=e.ssl??Lr;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kc)throw new V(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xc(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Or({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Or(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new oc;switch(s.type){case"firstParty":return new dc(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=xr.get(n);s&&(pe(Lc,"Removing Datastore"),xr.delete(n),s.terminate())}(this),Promise.resolve()}}/**
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
 */class Yn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Yn(this.firestore,e,this._query)}}class we{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(ri(n,we._jsonSchema))return new we(e,s||null,new Ye(me.fromString(n.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:Q("string",we._jsonSchemaVersion),referencePath:Q("string")};class Qn extends Yn{constructor(e,n,s){super(e,n,Ec(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new Ye(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}/**
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
 */const Dr="AsyncQueue";class Pr{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ac(this,"async_queue_retry"),this._c=()=>{const s=Sn();s&&pe(Dr,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Sn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Sn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ht;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ic(e))throw e;pe(Dr,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,ma("INTERNAL UNHANDLED ERROR: ",Cr(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=Xn.createAndSchedule(this,e,n,s,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&Oi(47125,{Pc:Cr(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Cr(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Pc extends Dc{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new Pr,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pr(e),this._firestoreClient=void 0,await e}}}/**
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
 */class Ae{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ae(rt.fromBase64String(e))}catch(n){throw new V(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ae(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ae._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ri(e,Ae._jsonSchema))return Ae.fromBase64String(e.bytes)}}Ae._jsonSchemaVersion="firestore/bytes/1.0",Ae._jsonSchema={type:Q("string",Ae._jsonSchemaVersion),bytes:Q("string")};/**
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
 */class va{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class et{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return We(this._lat,e._lat)||We(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(e){if(ri(e,et._jsonSchema))return new et(e.latitude,e.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:Q("string",et._jsonSchemaVersion),latitude:Q("number"),longitude:Q("number")};/**
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
 */class tt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ri(e,tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new tt(e.vectorValues);throw new V(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tt._jsonSchemaVersion="firestore/vectorValue/1.0",tt._jsonSchema={type:Q("string",tt._jsonSchemaVersion),vectorValues:Q("object")};function ya(i,e,n){if((e=si(e))instanceof va)return e._internalPath;if(typeof e=="string")return Mc(i,e);throw $n("Field path arguments must be of type string or ",i)}const Cc=new RegExp("[~\\*/\\[\\]]");function Mc(i,e,n){if(e.search(Cc)>=0)throw $n(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new va(...e.split("."))._internalPath}catch{throw $n(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function $n(i,e,n,s,a){let l=`Function ${e}() called with invalid data`;l+=". ";let c="";return new V(j.INVALID_ARGUMENT,l+i+c)}const Mr="@firebase/firestore",Nr="4.14.0";/**
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
 */class _a{constructor(e,n,s,a,l){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ya("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Nc extends _a{data(){return super.data()}}class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yt extends _a{constructor(e,n,s,a,l,c){super(e,n,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ya("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=yt._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}yt._jsonSchemaVersion="firestore/documentSnapshot/1.0",yt._jsonSchema={type:Q("string",yt._jsonSchemaVersion),bundleSource:Q("string","DocumentSnapshot"),bundleName:Q("string"),bundle:Q("string")};class Ti extends yt{data(e={}){return super.data(e)}}class zt{constructor(e,n,s,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new _i(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ti(this._firestore,this._userDataWriter,s.key,s,new _i(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const m=new Ti(a._firestore,a._userDataWriter,d.doc.key,d.doc,new _i(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const m=new Ti(a._firestore,a._userDataWriter,d.doc.key,d.doc,new _i(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,w=-1;return d.type!==0&&(v=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),w=c.indexOf(d.doc.key)),{type:$c(d.type),doc:m,oldIndex:v,newIndex:w}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $c(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oi(61501,{type:i})}}/**
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
 */zt._jsonSchemaVersion="firestore/querySnapshot/1.0",zt._jsonSchema={type:Q("string",zt._jsonSchemaVersion),bundleSource:Q("string","QuerySnapshot"),bundleName:Q("string"),bundle:Q("string")};(function(e,n=!0){rc(Wi),wt(new bt("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Pc(new lc(s.getProvider("auth-internal")),new uc(c,s.getProvider("app-check-internal")),wc(c,a),c);return l={useFetchStreams:n,...l},d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Ue(Mr,Nr,e),Ue(Mr,Nr,"esm2020")})();function Ia(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rc=Ia,ba=new ni("auth","Firebase",Ia());/**
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
 */const Pi=new zn("@firebase/auth");function Bc(i,...e){Pi.logLevel<=q.WARN&&Pi.warn(`Auth (${Wi}): ${i}`,...e)}function Ei(i,...e){Pi.logLevel<=q.ERROR&&Pi.error(`Auth (${Wi}): ${i}`,...e)}/**
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
 */function $r(i,...e){throw Zn(i,...e)}function wa(i,...e){return Zn(i,...e)}function Ta(i,e,n){const s={...Rc(),[e]:n};return new ni("auth","Firebase",s).create(e,{appName:i.name})}function Si(i){return Ta(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zn(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return ba.create(i,...e)}function F(i,e,...n){if(!i)throw Zn(e,...n)}function Gt(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ei(e),new Error(e)}function Ci(i,e){i||Gt(e)}function Uc(){return Rr()==="http:"||Rr()==="https:"}function Rr(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function Wc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uc()||Vo()||"connection"in navigator)?navigator.onLine:!0}function Fc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ci(n>e,"Short delay should be less than long delay!"),this.isMobile=Fo()||qo()}get(){return Wc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jc(i,e){Ci(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ea{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hc=new ai(3e4,6e4);function Sa(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function ji(i,e,n,s,a={}){return ka(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=la({key:i.config.apiKey,...c}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:m,...l};return jo()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&ca(i.emulatorConfig.host)&&(v.credentials="include"),Ea.fetch()(await Aa(i,i.config.apiHost,n,d),v)})}async function ka(i,e,n){i._canInitEmulator=!1;const s={...Vc,...e};try{const a=new zc(i),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ii(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,v]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Ii(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw Ii(i,"user-disabled",c);const w=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Ta(i,w,v);$r(i,w)}}catch(a){if(a instanceof Fe)throw a;$r(i,"network-request-failed",{message:String(a)})}}async function Aa(i,e,n,s){const a=`${e}${n}?${s}`,l=i,c=l.config.emulator?jc(i.config,a):`${i.config.apiScheme}://${a}`;return qc.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class zc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(wa(this.auth,"network-request-failed")),Hc.get())})}}function Ii(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=wa(i,e,s);return a.customData._tokenResponse=n,a}/**
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
 */async function Gc(i,e){return ji(i,"POST","/v1/accounts:delete",e)}async function Mi(i,e){return ji(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Kt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kc(i,e=!1){const n=si(i),s=await n.getIdToken(e),a=xa(s);F(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:Kt(kn(a.auth_time)),issuedAtTime:Kt(kn(a.iat)),expirationTime:Kt(kn(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function kn(i){return Number(i)*1e3}function xa(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const a=oa(n);return a?JSON.parse(a):(Ei("Failed to decode base64 JWT payload"),null)}catch(a){return Ei("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Br(i){const e=xa(i);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rn(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Fe&&Jc(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Jc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Xc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kt(this.lastLoginAt),this.creationTime=Kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ni(i){var T;const e=i.auth,n=await i.getIdToken(),s=await Rn(i,Mi(e,{idToken:n}));F(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const l=(T=a.providerUserInfo)!=null&&T.length?La(a.providerUserInfo):[],c=Qc(i.providerData,l),d=i.isAnonymous,m=!(i.email&&a.passwordHash)&&!(c!=null&&c.length),v=d?m:!1,w={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Bn(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(i,w)}async function Yc(i){const e=si(i);await Ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qc(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function La(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Zc(i,e){const n=await ka(i,{},async()=>{const s=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await Aa(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:d,body:s};return i.emulatorConfig&&ca(i.emulatorConfig.host)&&(m.credentials="include"),Ea.fetch()(c,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ed(i,e){return ji(i,"POST","/v2/accounts:revokeToken",Sa(i,e))}/**
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
 */class _t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Br(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=Br(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:l}=await Zc(e,n);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:l}=n,c=new _t;return s&&(F(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(F(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(F(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _t,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function Ne(i,e){F(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Te{constructor({uid:e,auth:n,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new Xc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Bn(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kc(this,e)}reload(){return Yc(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Te({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ni(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(Si(this.auth));const e=await this.getIdToken();return await Rn(this,Gc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,d=n.tenantId??void 0,m=n._redirectEventId??void 0,v=n.createdAt??void 0,w=n.lastLoginAt??void 0,{uid:T,emailVerified:E,isAnonymous:x,providerData:k,stsTokenManager:L}=n;F(T&&L,e,"internal-error");const C=_t.fromJSON(this.name,L);F(typeof T=="string",e,"internal-error"),Ne(s,e.name),Ne(a,e.name),F(typeof E=="boolean",e,"internal-error"),F(typeof x=="boolean",e,"internal-error"),Ne(l,e.name),Ne(c,e.name),Ne(d,e.name),Ne(m,e.name),Ne(v,e.name),Ne(w,e.name);const P=new Te({uid:T,auth:e,email:a,emailVerified:E,displayName:s,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:d,stsTokenManager:C,createdAt:v,lastLoginAt:w});return k&&Array.isArray(k)&&(P.providerData=k.map($=>({...$}))),m&&(P._redirectEventId=m),P}static async _fromIdTokenResponse(e,n,s=!1){const a=new _t;a.updateFromServerResponse(n);const l=new Te({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Ni(l),l}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];F(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?La(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new _t;d.updateFromIdToken(s);const m=new Te({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Bn(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,v),m}}/**
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
 */const Ur=new Map;function Qe(i){Ci(i instanceof Function,"Expected a class definition");let e=Ur.get(i);return e?(Ci(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ur.set(i,e),e)}/**
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
 */class Oa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Oa.type="NONE";const Wr=Oa;/**
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
 */function An(i,e,n){return`firebase:${i}:${e}:${n}`}class It{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=An(this.userKey,a.apiKey,l),this.fullPersistenceKey=An("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Mi(this.auth,{idToken:e}).catch(()=>{});return n?Te._fromGetAccountInfoResponse(this.auth,n,e):null}return Te._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new It(Qe(Wr),e,s);const a=(await Promise.all(n.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=a[0]||Qe(Wr);const c=An(s,e.config.apiKey,e.name);let d=null;for(const v of n)try{const w=await v._get(c);if(w){let T;if(typeof w=="string"){const E=await Mi(e,{idToken:w}).catch(()=>{});if(!E)break;T=await Te._fromGetAccountInfoResponse(e,E,w)}else T=Te._fromJSON(e,w);v!==l&&(d=T),l=v;break}}catch{}const m=a.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new It(l,e,s):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(n.map(async v=>{if(v!==l)try{await v._remove(c)}catch{}})),new It(l,e,s))}}/**
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
 */function Fr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(td(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ad(e))return"Blackberry";if(od(e))return"Webos";if(id(e))return"Safari";if((e.includes("chrome/")||nd(e))&&!e.includes("edge/"))return"Chrome";if(rd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function td(i=Ee()){return/firefox\//i.test(i)}function id(i=Ee()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nd(i=Ee()){return/crios\//i.test(i)}function sd(i=Ee()){return/iemobile/i.test(i)}function rd(i=Ee()){return/android/i.test(i)}function ad(i=Ee()){return/blackberry/i.test(i)}function od(i=Ee()){return/webos/i.test(i)}/**
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
 */function Da(i,e=[]){let n;switch(i){case"Browser":n=Fr(Ee());break;case"Worker":n=`${Fr(Ee())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wi}/${s}`}/**
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
 */class ld{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function cd(i,e={}){return ji(i,"GET","/v2/passwordPolicy",Sa(i,e))}/**
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
 */const dd=6;class ud{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dd,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class hd{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jr(this),this.idTokenSubscription=new jr(this),this.beforeStateQueue=new ld(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ba,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qe(n)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await It.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mi(this,{idToken:e}),s=await Te._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Je(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&(m!=null&&m.user)&&(s=m.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ni(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(Si(this));const n=e?si(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(Si(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(Si(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cd(this),n=new ud(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ed(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qe(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await It.create(this,[Qe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(n);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Da(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Bc(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fd(i){return si(i)}class jr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xo(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function md(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qe);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new ai(3e4,6e4);/**
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
 */new ai(2e3,1e4);/**
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
 */new ai(3e4,6e4);/**
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
 */new ai(5e3,15e3);var Vr="@firebase/auth",qr="1.13.0";/**
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
 */class pd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gd(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vd(i){wt(new bt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;F(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Da(i)},v=new hd(s,a,l,m);return md(v,n),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),wt(new bt("auth-internal",e=>{const n=fd(e.getProvider("auth").getImmediate());return(s=>new pd(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Vr,qr,gd(i)),Ue(Vr,qr,"esm2020")}/**
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
 */const yd=5*60;Wo("authIdTokenMaxAge");vd("Browser");console.warn("⚠️ Firebase未設定。.envファイルにAPIキーを設定してください。");function Yt(i){const e=new Date(i),n=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${n}-${s}-${a}`}function Qt(i){const e=new Date(i),n=["日","月","火","水","木","金","土"];return`${e.getMonth()+1}月${e.getDate()}日（${n[e.getDay()]}）`}function je(){return Yt(new Date)}function Zt(i){const e=Math.floor(i/60),n=i%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function X(i){if(!i)return 0;const[e,n]=i.split(":").map(Number);return e*60+n}function Pa(){return Date.now().toString(36)+Math.random().toString(36).slice(2,9)}function Ca(i,e,n,s){const l=bi(n-i),c=bi(s-e),d=Math.sin(l/2)**2+Math.cos(bi(i))*Math.cos(bi(n))*Math.sin(c/2)**2;return 6371*2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d))}function bi(i){return i*(Math.PI/180)}function K(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}function es(i){const e=n=>{var l,c,d;const s=(l=n.target)==null?void 0:l.tagName;if(s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||(c=n.target)!=null&&c.isContentEditable||((d=document.getElementById("modal-overlay"))==null?void 0:d.style.display)==="flex")return;const a=i[n.key]||i[n.key.toLowerCase()];typeof a=="function"&&(n.preventDefault(),a(n))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}function Ma(i,e=300){let n;return(...s)=>{clearTimeout(n),n=setTimeout(()=>i(...s),e)}}function N(i,e="info",n=4e3,s=null){const a=document.getElementById("toast-container"),l={success:"check_circle",error:"error",warning:"warning",info:"info"},c=document.createElement("div");c.className=`toast ${e}`,c.innerHTML=`
    <span class="material-icons-round toast-icon">${l[e]||"info"}</span>
    <span class="toast-message">${K(i)}</span>
    ${s?'<button class="toast-undo">元に戻す</button>':""}
  `,a.appendChild(c),s&&c.querySelector(".toast-undo").addEventListener("click",()=>{c.remove(),s()}),setTimeout(()=>{c.style.opacity="0",c.style.transform="translateX(40px)",c.style.transition="all .3s ease",setTimeout(()=>c.remove(),300)},n)}let Vt=null,$e=null;function Tt(i,e,n=""){const s=document.getElementById("modal-overlay");document.getElementById("modal-title").innerHTML=i,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=n,s.style.display="flex",s.setAttribute("aria-hidden","false"),ts(s)}function ts(i){i||(i=document.getElementById("modal-overlay")),$e&&(document.removeEventListener("keydown",$e),$e=null),Vt=document.activeElement,setTimeout(()=>{const e=i.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');e.length>0&&e[0].focus()},50),$e=e=>{if(e.key==="Escape"){e.preventDefault(),Y();return}if(e.key==="Tab"){const n=Array.from(i.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(l=>l.offsetParent!==null);if(n.length===0)return;const s=n[0],a=n[n.length-1];e.shiftKey&&document.activeElement===s?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),s.focus())}},document.addEventListener("keydown",$e)}function Y(){const i=document.getElementById("modal-overlay");if(i.style.display="none",i.setAttribute("aria-hidden","true"),$e&&(document.removeEventListener("keydown",$e),$e=null),Vt&&typeof Vt.focus=="function"){try{Vt.focus()}catch{}Vt=null}}function ge(i,e){return new Promise(n=>{const s=`<p>${K(e)}</p>`;Tt(i,s,`
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `),document.getElementById("confirm-ok").onclick=()=>{Y(),n(!0)},document.getElementById("confirm-cancel").onclick=()=>{Y(),n(!1)}})}function Na(i,e){if(!i)return 0;let n=1500;return i.type==="正社員"?i.name.includes("前川")?n=2500:n=1500:i.type==="パート"&&(n=parseInt(i.wage)||1500),Math.round(n*(e/60))}function Un(i,e){const s={身体介護:{20:1670,30:2500,60:3960,90:5790,120:7630},生活援助:{20:1830,45:2250,60:2870},通院等乗降介助:{per_trip:990},医療的ケア:{30:3e3,60:5e3}}[i];if(!s)return 3e3;if(s.per_trip)return s.per_trip;const a=Object.keys(s).map(Number).sort((c,d)=>c-d);let l=a[0];for(const c of a)e>=c&&(l=c);return s[l]||3e3}function _d(i){{console.warn("Firebase未設定のためログイン画面を表示します"),setTimeout(()=>i(null,null),100);return}}async function Id(){throw new Error("Firebase未設定です。.envにAPIキーを設定してください。")}async function bd(){}function wd(){const i=document.getElementById("btn-google-login");i&&i.addEventListener("click",async()=>{i.disabled=!0,i.textContent="ログイン中...";try{await Id()}catch(e){console.error("ログインエラー:",e),e.code==="auth/popup-closed-by-user"?N("ログインがキャンセルされました","warning"):N("ログインに失敗しました","error"),i.disabled=!1,i.innerHTML=`
        <svg viewBox="0 0 24 24" width="20" height="20" class="google-icon">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleアカウントでログイン
      `}})}const Re={};function Et(i){if(!Re[i]){const e=localStorage.getItem(`careroute_${i}`);Re[i]=e?JSON.parse(e):[]}return Re[i]}function Vi(i){localStorage.setItem(`careroute_${i}`,JSON.stringify(Re[i]||[]))}async function Hr(){localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"),localStorage.removeItem("careroute_routes"),Re.staff=[],Re.clients=[],Re.visits=[],Re.routes=[]}async function is(i,e){{const n=Pa();return Et(i).push({id:n,...e,createdAt:new Date().toISOString()}),Vi(i),n}}async function ns(i){return Et(i)}async function ss(i,e,n){{const s=Et(i),a=s.findIndex(l=>l.id===e);a!==-1&&(s[a]={...s[a],...n,updatedAt:new Date().toISOString()},Vi(i));return}}async function rs(i,e){{const n=Et(i),s=n.findIndex(a=>a.id===e);s!==-1&&(n.splice(s,1),Vi(i));return}}async function $a(i,e,n,s){return Et(i).filter(l=>l[e]===s)}async function oe(){return ns("staff")}async function Ra(i){return is("staff",i)}async function Td(i,e){return ss("staff",i,e)}async function Ed(i){return rs("staff",i)}async function fe(){return ns("clients")}async function Ba(i){return is("clients",i)}async function Sd(i,e){return ss("clients",i,e)}async function kd(i){return rs("clients",i)}async function oi(){return ns("visits")}async function ot(i){return $a("visits","date","==",i)}async function qi(i){return is("visits",i)}async function ce(i,e){return ss("visits",i,e)}async function as(i){return rs("visits",i)}async function Ad(i,e){return(await oi()).filter(s=>!s.date||s.date<i||s.date>e||s.status==="cancelled"?!1:!s.staffId).length}async function os(i){return $a("routes","date","==",i)}async function Ua(i){{const e=Et("routes");for(const n of i){const s=e.findIndex(a=>a.staffId===n.staffId&&a.date===n.date);s>=0?e[s]={...n,updatedAt:new Date().toISOString()}:e.push({id:Pa(),...n,createdAt:new Date().toISOString()})}Vi("routes");return}}async function xd(){const i=document.getElementById("page-container"),[e,n]=await Promise.all([oe().catch(()=>[]),fe().catch(()=>[])]),s=je(),a=await ot(s).catch(()=>[]),l=e.filter(T=>T.isActive);n.filter(T=>T.isActive);const c=a.filter(T=>T.type!=="sales");c.filter(T=>T.status==="scheduled"||!T.status);const d=c.filter(T=>T.status==="completed"),m=c.filter(T=>T.status==="cancelled"),v=a.filter(T=>T.type==="sales"),w={};m.forEach(T=>{const E=T.cancelReason||"理由なし";w[E]=(w[E]||0)+1}),i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${Qt(new Date)}</span>
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
        <div class="stat-value">${d.length}<span style="font-size:.9rem;color:var(--text-muted)"> / ${c.length}件</span></div>
      </div>
      <div class="card stat-card danger">
        <span class="material-icons-round stat-icon">cancel</span>
        <div class="stat-label">本日のキャンセル</div>
        <div class="stat-value">${m.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
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
          ${l.length===0?'<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>':l.map(T=>{const E=c.filter(P=>P.staffId===T.id),x=E.filter(P=>P.status==="completed").length,k=E.filter(P=>P.status==="cancelled").length,L=v.filter(P=>P.staffId===T.id).length,C=E.length>0?Math.round(x/E.length*100):0;return`
                  <div class="staff-status-row">
                    <div class="staff-status-dot" style="background:${T.color||"#999"}"></div>
                    <div class="staff-status-info">
                      <div class="staff-status-name">${T.name}</div>
                      <div class="staff-status-sub">訪問: ${E.length}件</div>
                      <div class="progress-bar">
                        <div class="progress-fill" style="width:${C}%"></div>
                      </div>
                    </div>
                    <div class="staff-status-stats">
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">完了</div>
                        <div class="staff-stat-value" style="color:var(--success)">${x}</div>
                      </div>
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">キャンセル</div>
                        <div class="staff-stat-value" style="color:${k>0?"var(--danger)":"var(--text-muted)"}">${k}</div>
                      </div>
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">営業</div>
                        <div class="staff-stat-value" style="color:${L>0?"var(--warning)":"var(--text-muted)"}">${L}</div>
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
          ${m.length===0?'<p style="color:var(--text-muted); text-align:center; padding:20px;">本日のキャンセルはありません</p>':Object.entries(w).map(([T,E])=>{const x=Math.round(E/m.length*100);return`
                  <div style="margin-bottom:12px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                      <span>${T}</span>
                      <span style="font-weight:bold;">${E}件 (${x}%)</span>
                    </div>
                    <div style="width:100%; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
                      <div style="width:${x}%; height:100%; background:var(--danger);"></div>
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
          <button class="btn btn-primary" id="dash-btn-matching" style="width:100%;justify-content:center">
            <span class="material-icons-round">auto_fix_high</span>
            マッチング＆ルート最適化を実行
          </button>
          <button class="btn btn-secondary" id="dash-btn-map" style="width:100%;justify-content:center">
            <span class="material-icons-round">map</span>
            マップビューを開く
          </button>
          <button class="btn btn-secondary" id="dash-btn-revenue" style="width:100%;justify-content:center">
            <span class="material-icons-round">analytics</span>
            収支シミュレーションを開く
          </button>
        </div>
      </div>
    </div>
  `,document.getElementById("dash-btn-matching").addEventListener("click",()=>ve("matching")),document.getElementById("dash-btn-map").addEventListener("click",()=>ve("map")),document.getElementById("dash-btn-revenue").addEventListener("click",()=>ve("revenue"))}let ue=null,ei=[],Wn=[],ti=null,Fn=null,jn=[];function at(){return new Promise((i,e)=>{if(window.google&&window.google.maps){i();return}{console.warn("Google Maps APIキーが設定されていません。デモモードで動作します。"),i();return}})}function Ld(i,e={lat:35.6938,lng:139.7034},n=14){const s=document.getElementById(i);return s?!window.google||!window.google.maps?(s.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `,null):(ue=new google.maps.Map(s,{center:e,zoom:n,mapTypeControl:!0,streetViewControl:!1,fullscreenControl:!0,styles:Nd()}),ti=new google.maps.InfoWindow,Fn=new google.maps.DirectionsService,ue):null}function Wa(i,e={}){if(!ue)return null;const n=new google.maps.Marker({map:ue,position:i,title:e.title||"",icon:e.icon||void 0,label:e.label||void 0});return e.infoContent&&n.addListener("click",()=>{ti.setContent(e.infoContent),ti.open(ue,n)}),ei.push(n),n}function zr(i,e,n,s){if(!ue)return null;const a={path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",fillColor:e,fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1.8,anchor:new google.maps.Point(12,22),labelOrigin:new google.maps.Point(12,9)};return Wa(i,{icon:a,label:void 0,infoContent:s})}function Od(i,e){return ue?Wa(i,{title:e,icon:{path:"M12 2L2 7v10l10 5 10-5V7L12 2z",fillColor:"#F59E0B",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:2,anchor:new google.maps.Point(12,12)},infoContent:`<div style="color:#333;padding:4px"><strong>🏢 ${e}</strong><br>（出発地点）</div>`}):null}function Dd(i,e,n){if(!ue)return null;const s=i.map(l=>({lat:l.lat,lng:l.lng})),a=new google.maps.Polyline({path:s,geodesic:!0,strokeColor:e,strokeOpacity:.8,strokeWeight:4,map:ue});return Wn.push(a),a}async function Pd(i,e){if(!ue||!Fn||i.length<2)return;const n=i[0],s=i[i.length-1],a=i.slice(1,-1).map(l=>({location:new google.maps.LatLng(l.lat,l.lng),stopover:!0}));try{const l=await new Promise((d,m)=>{Fn.route({origin:new google.maps.LatLng(n.lat,n.lng),destination:new google.maps.LatLng(s.lat,s.lng),waypoints:a,travelMode:google.maps.TravelMode.DRIVING,optimizeWaypoints:!1},(v,w)=>{w==="OK"?d(v):m(new Error(`Directions API: ${w}`))})}),c=new google.maps.DirectionsRenderer({map:ue,directions:l,suppressMarkers:!0,polylineOptions:{strokeColor:e,strokeWeight:4,strokeOpacity:.8}});return jn.push(c),c}catch(l){return console.warn("Directions API呼び出し失敗。直線ポリラインで代替:",l),Dd(i,e)}}async function $i(i){if(!window.google||!window.google.maps)return null;const e=new google.maps.DistanceMatrixService,n=i.map(s=>new google.maps.LatLng(s.lat,s.lng));try{return(await new Promise((l,c)=>{e.getDistanceMatrix({origins:n,destinations:n,travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC},(d,m)=>{m==="OK"?l(d):c(new Error(`Distance Matrix API: ${m}`))})})).rows.map(l=>l.elements.map(c=>({distance:c.status==="OK"?c.distance.value/1e3:null,duration:c.status==="OK"?Math.ceil(c.duration.value/60):null})))}catch(s){return console.error("Distance Matrix取得失敗:",s),null}}function Cd(){ei.forEach(i=>i.setMap(null)),ei=[],Wn.forEach(i=>i.setMap(null)),Wn=[],jn.forEach(i=>i.setMap(null)),jn=[],ti&&ti.close()}function Md(){if(!ue||ei.length===0)return;const i=new google.maps.LatLngBounds;ei.forEach(e=>i.extend(e.getPosition())),ue.fitBounds(i,50)}async function Fa(i){if(!i||i.trim()==="")return null;if(!window.google||!window.google.maps)return console.warn("ジオコーディング: Google Maps APIが未読み込みです"),null;const e=new google.maps.Geocoder;try{return await new Promise((s,a)=>{e.geocode({address:i,region:"jp"},(l,c)=>{if(c==="OK"&&l[0]){const d=l[0].geometry.location;s({lat:d.lat(),lng:d.lng()})}else a(new Error(`ジオコーディング失敗: ${c}`))})})}catch(n){return console.warn("住所の座標変換に失敗:",n.message),null}}function Nd(){return[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}const Ri={qualifications:{label:"資格",options:["介護福祉士","実務者研修修了","初任者研修修了","看護師","ヘルパー2級"]},services:{label:"対応可能サービス",options:["身体介護","生活援助","通院等乗降介助","医療的ケア"]},physical:{label:"身体的対応力",options:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"]},special:{label:"特別スキル",options:["認知症ケア","ターミナルケア","精神障害対応","障害児支援"]}},$d=["要支援1","要支援2","要介護1","要介護2","要介護3","要介護4","要介護5"],ja=["身体介護","生活援助","通院等乗降介助","医療的ケア"],Rd=["男性","女性"],Bd=["指定なし","男性希望","女性希望"],Ud=["利用者の体調不良","利用者の入院","家族の都合","不在・応答なし","その他"],Wd=["居宅介護支援事業所（ケアマネ）","地域包括支援センター","医療機関（退院調整室）","その他"],Fd=["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],Gr=["#4A90D9","#E74C3C","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#3498DB","#E91E63","#00BCD4","#8BC34A","#FF5722"],jt={requiredSkill:1e3,genderMatch:2e3,staffType:500,proximity:500},ki=25,ee={name:"事業所（拠点）",address:"〒501-3304 岐阜県加茂郡富加町高畑２９１",lat:35.497,lng:136.993};let Vn="all",ii=je();const Kr=localStorage.getItem("navDate");Kr&&(ii=Kr,localStorage.removeItem("navDate"));async function jd(){var n,s,a;const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <input type="date" id="map-date-picker" class="form-input" value="${ii}" style="width:160px">
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
  `;try{await at()}catch(l){console.warn("Maps APIの読み込みスキップ:",l)}const e=Ld("map-canvas",{lat:ee.lat,lng:ee.lng});await wi(e),(n=document.getElementById("map-date-picker"))==null||n.addEventListener("change",l=>{ii=l.target.value,wi(e)}),(s=document.getElementById("staff-filter"))==null||s.addEventListener("change",l=>{Vn=l.target.value,wi(e)}),(a=document.getElementById("btn-refresh-map"))==null||a.addEventListener("click",()=>{wi(e)})}async function wi(i){const[e,n,s]=await Promise.all([oe().catch(()=>[]),fe().catch(()=>[]),ot(ii).catch(()=>[])]),a=document.getElementById("staff-filter");if(a&&a.options.length<=1&&e.forEach(c=>{const d=document.createElement("option");d.value=c.id,d.textContent=c.name,a.appendChild(d)}),!i){qd(e,n);return}Cd(),Od({lat:ee.lat,lng:ee.lng},ee.name);const l=await os(ii).catch(()=>[]);if(l.length>0)for(const c of l){if(Vn!=="all"&&c.staffId!==Vn)continue;const d=e.find(w=>w.id===c.staffId),m=(d==null?void 0:d.color)||"#999",v=[{lat:ee.lat,lng:ee.lng}];for(const w of c.clientIds||[]){const T=n.find(E=>E.id===w);T&&(v.push({lat:T.lat,lng:T.lng}),zr({lat:T.lat,lng:T.lng},m,"",`<div style="color:#333;padding:4px">
              <strong>${T.name}</strong><br>
              ${T.careLevel} | ${(T.requiredServices||[]).join(", ")}<br>
              <small>担当: ${(d==null?void 0:d.name)||"未定"}</small>
            </div>`))}v.push({lat:ee.lat,lng:ee.lng}),await Pd(v,m)}else{const c=n.filter(d=>d.isActive&&s.some(m=>m.clientId===d.id));for(const d of c){const m=s.filter(v=>v.clientId===d.id).map(v=>`${v.startTime}〜${v.endTime}`).join(", ");zr({lat:d.lat,lng:d.lng},"#94A3B8","",`<div style="color:#333;padding:4px">
          <strong>${d.name}</strong><br>
          予定: ${m}<br>
          ${d.careLevel} | ${(d.requiredServices||[]).join(", ")}
        </div>`)}}Md(),Vd(e,l,s)}function Vd(i,e,n=[]){const s=document.getElementById("route-legend");if(s){if(e.length===0){s.innerHTML=`
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
    ${e.map(a=>{const l=i.find(c=>c.id===a.staffId);return`<div class="legend-item">
        <div class="legend-color" style="background:${(l==null?void 0:l.color)||"#999"}"></div>
        <span>${(l==null?void 0:l.name)||"不明"} (${(a.clientIds||[]).length}件, ${a.totalDistance||"?"}km)</span>
      </div>`}).join("")}
  `}}function qd(i,e){const n=document.getElementById("route-legend");n&&(n.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${i.length}名<br>
        利用者: ${e.length}名
      </div>
    `)}let Ze=[];async function ls(){var n;const i=document.getElementById("page-container");Ze=await oe().catch(()=>[]),i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round" aria-hidden="true">badge</span>
        職員管理
      </h1>
      <div class="btn-group">
        <input type="search" id="staff-search" class="form-input" placeholder="名前で検索..." style="width:200px" aria-label="職員を検索">
        <button class="btn btn-primary" id="btn-add-staff">
          <span class="material-icons-round" aria-hidden="true">person_add</span>
          新規登録
        </button>
      </div>
    </div>
    <div id="staff-list-container">
      ${Jr(Ze)}
    </div>
  `,document.getElementById("btn-add-staff").addEventListener("click",()=>Va());const e=Ma(()=>{var l;const s=(((l=document.getElementById("staff-search"))==null?void 0:l.value)||"").trim().toLowerCase(),a=s?Ze.filter(c=>(c.name||"").toLowerCase().includes(s)||(c.address||"").toLowerCase().includes(s)):Ze;document.getElementById("staff-list-container").innerHTML=Jr(a)},200);(n=document.getElementById("staff-search"))==null||n.addEventListener("input",e)}function Jr(i){return i.length===0?`
      <div class="empty-state">
        <span class="material-icons-round" aria-hidden="true">person_off</span>
        <h3>職員が登録されていません</h3>
        <p>新規登録するか、デモデータを投入してアプリを試せます</p>
        <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:16px;">
          <button class="btn btn-primary" onclick="document.getElementById('btn-add-staff')?.click()">
            <span class="material-icons-round" aria-hidden="true">person_add</span>
            職員を新規登録
          </button>
          <button class="btn btn-secondary" onclick="document.getElementById('btn-load-demo')?.click()">
            <span class="material-icons-round" aria-hidden="true">science</span>
            デモデータを投入
          </button>
        </div>
      </div>
    `:`
    <div class="grid grid-2">
      ${i.map(e=>{var n,s,a,l,c;return`
        <div class="card" style="border-left:4px solid ${e.color||"#999"}">
          <div class="card-header">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:40px;height:40px;border-radius:50%;background:${e.color||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem">
                ${K(((n=e.name)==null?void 0:n.charAt(0))||"?")}
              </div>
              <div>
                <div style="font-weight:600;font-size:1.05rem">${K(e.name)}</div>
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
              ${(((s=e.skills)==null?void 0:s.qualifications)||[]).map(d=>`<span class="tag">${d}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div style="margin-bottom:8px">
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">対応サービス</div>
            <div class="tags-container">
              ${(((a=e.skills)==null?void 0:a.services)||[]).map(d=>`<span class="tag tag-secondary">${d}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
          <div>
            <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:4px">特別スキル</div>
            <div class="tags-container">
              ${[...((l=e.skills)==null?void 0:l.physical)||[],...((c=e.skills)==null?void 0:c.special)||[]].map(d=>`<span class="tag tag-accent">${d}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
            </div>
          </div>
        </div>
      `}).join("")}
    </div>
  `}function Va(i=null){const e=!!i,n=e?"職員情報の編集":"新規職員登録",s=`
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${Rd.map(l=>`<option value="${l}" ${(i==null?void 0:i.gender)===l?"selected":""}>${l}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">住所 <span style="font-size:.75rem;color:var(--text-muted)">（入力すると座標を自動取得）</span></label>
        <input class="form-input" id="sf-address" value="${(i==null?void 0:i.address)||""}" placeholder="例: 岐阜県加茂郡富加町..." />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">雇用形態 *</label>
          <select class="form-select" id="sf-type">
            <option value="正社員" ${((i==null?void 0:i.type)||"正社員")==="正社員"?"selected":""}>正社員</option>
            <option value="パート" ${(i==null?void 0:i.type)==="パート"?"selected":""}>パート</option>
          </select>
        </div>
        <div class="form-group" id="sf-wage-group" style="${(i==null?void 0:i.type)==="パート"?"":"display:none"}">
          <label class="form-label">時給（円）</label>
          <input class="form-input" type="number" id="sf-wage" value="${(i==null?void 0:i.wage)||1200}" min="800" step="50" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">勤務曜日 *</label>
        <div class="tags-container" style="gap:8px">
          ${["月","火","水","木","金","土","日"].map(l=>{var c;return`
            <label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.9rem">
              <input type="checkbox" name="sf-day" value="${l}" ${(c=i==null?void 0:i.days)!=null&&c.includes(l)?"checked":""} /> ${l}
            </label>
          `}).join("")}
        </div>
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
      ${Object.entries(Ri).map(([l,c])=>`
        <div class="form-group">
          <label class="form-label">${c.label}</label>
          <div class="tags-container" style="gap:8px">
            ${c.options.map(d=>{var v,w;const m=(w=(v=i==null?void 0:i.skills)==null?void 0:v[l])!=null&&w.includes(d)?"checked":"";return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${l}" value="${d}" ${m} /> ${d}
              </label>`}).join("")}
          </div>
        </div>
      `).join("")}
    </form>
  `;Tt(n,s,`
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("sf-cancel").onclick=Y,document.getElementById("sf-type").addEventListener("change",l=>{document.getElementById("sf-wage-group").style.display=l.target.value==="パート"?"":"none"}),document.getElementById("sf-save").onclick=async()=>{const l=document.getElementById("sf-name").value.trim();if(!l){N("氏名を入力してください","warning");return}const c=document.getElementById("sf-save");c.disabled=!0,c.textContent="保存中...";const d=document.getElementById("sf-address").value.trim();let m=(i==null?void 0:i.lat)||ee.lat,v=(i==null?void 0:i.lng)||ee.lng;if(d)try{await at();const x=await Fa(d);x?(m=x.lat,v=x.lng):N("住所から座標を取得できませんでした","warning")}catch(x){console.warn("ジオコーディング失敗:",x)}const w=document.getElementById("sf-type").value,T=Array.from(document.querySelectorAll('input[name="sf-day"]:checked')).map(x=>x.value),E={name:l,gender:document.getElementById("sf-gender").value,type:w,wage:w==="パート"?parseInt(document.getElementById("sf-wage").value)||1200:void 0,days:T,address:d,workStart:document.getElementById("sf-work-start").value,workEnd:document.getElementById("sf-work-end").value,lat:m,lng:v,skills:{},color:(i==null?void 0:i.color)||Gr[Ze.length%Gr.length],isActive:!0};for(const[x]of Object.entries(Ri)){const k=document.querySelectorAll(`input[name="skill-${x}"]:checked`);E.skills[x]=Array.from(k).map(L=>L.value)}try{e?(await Td(i.id,E),N("職員情報を更新しました","success")):(await Ra(E),N("職員を登録しました","success")),Y(),await ls()}catch(x){N("保存に失敗しました: "+x.message,"error")}finally{c.disabled=!1,c.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-staff]");if(e){const s=Ze.find(a=>a.id===e.dataset.editStaff);s&&Va(s)}const n=i.target.closest("[data-delete-staff]");if(n){const s=Ze.find(a=>a.id===n.dataset.deleteStaff);if(s&&await ge("削除確認",`${s.name} を削除しますか？`))try{await Ed(s.id),N(`${s.name} を削除しました`,"success"),await ls()}catch{N("削除に失敗しました","error")}}});let pt=[],xn=[];async function cs(){var n;const i=document.getElementById("page-container");try{const[s,a]=await Promise.all([fe().catch(()=>[]),oi().catch(()=>[])]);pt=s,xn=a}catch(s){console.error("データの取得に失敗",s)}i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round" aria-hidden="true">elderly</span>
        利用者管理
      </h1>
      <div class="btn-group">
        <input type="search" id="client-search" class="form-input" placeholder="名前・住所で検索..." style="width:220px" aria-label="利用者を検索">
        <button class="btn btn-primary" id="btn-add-client">
          <span class="material-icons-round" aria-hidden="true">group_add</span>
          新規登録
        </button>
      </div>
    </div>
    <div id="client-list-container">
      ${Xr(pt,xn)}
    </div>
  `,document.getElementById("btn-add-client").addEventListener("click",()=>qa());const e=Ma(()=>{var l;const s=(((l=document.getElementById("client-search"))==null?void 0:l.value)||"").trim().toLowerCase(),a=s?pt.filter(c=>(c.name||"").toLowerCase().includes(s)||(c.address||"").toLowerCase().includes(s)):pt;document.getElementById("client-list-container").innerHTML=Xr(a,xn)},200);(n=document.getElementById("client-search"))==null||n.addEventListener("input",e)}function Xr(i,e){return i.length===0?`<div class="empty-state">
      <span class="material-icons-round" aria-hidden="true">person_off</span>
      <h3>利用者が登録されていません</h3>
      <p>新規登録するか、デモデータを投入してアプリを試せます</p>
      <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:16px;">
        <button class="btn btn-primary" onclick="document.getElementById('btn-add-client')?.click()">
          <span class="material-icons-round" aria-hidden="true">person_add</span>
          利用者を新規登録
        </button>
        <button class="btn btn-secondary" onclick="document.getElementById('btn-load-demo')?.click()">
          <span class="material-icons-round" aria-hidden="true">science</span>
          デモデータを投入
        </button>
      </div>
    </div>`:`
    <div class="table-wrapper card">
      <table class="data-table">
        <thead><tr>
          <th>氏名</th><th>介護度</th><th>必要サービス</th><th>必要スキル</th>
          <th>利用予定（曜日・時間）</th><th>操作</th>
        </tr></thead>
        <tbody>
          ${i.map(n=>{var c,d;const s={月:1,火:2,水:3,木:4,金:5,土:6,日:7},a=e.filter(m=>m.clientId===n.id).sort((m,v)=>{const w=s[m.dayOfWeek]||99,T=s[v.dayOfWeek]||99;return w-T}),l=a.length>0?a.map(m=>`<div style="font-size:0.85rem;margin-bottom:2px;">
                  <span class="tag">${m.dayOfWeek||"不明"}</span>
                  ${m.startTime}〜${m.endTime} (${m.duration}分)
                </div>`).join(""):'<span style="color:var(--text-muted)">設定なし</span>';return`<tr>
              <td><strong>${K(n.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${n.genderPreference!=="指定なし"?n.genderPreference:""}</span></td>
              <td><span class="tag ${(c=n.careLevel)!=null&&c.includes("4")||(d=n.careLevel)!=null&&d.includes("5")?"tag-danger":""}">${n.careLevel||"-"}</span></td>
              <td><div class="tags-container">${(n.requiredServices||[]).map(m=>`<span class="tag tag-secondary">${m}</span>`).join("")}</div></td>
              <td><div class="tags-container">${(n.requiredSkills||[]).map(m=>`<span class="tag tag-accent">${m}</span>`).join("")||"-"}</div></td>
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
  `}function qa(i=null){var l,c;const e=!!i,n=[...Ri.physical.options,...Ri.special.options],s=`
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${$d.map(d=>`<option ${(i==null?void 0:i.careLevel)===d?"selected":""}>${d}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">住所 <span style="font-size:.75rem;color:var(--text-muted)">（入力すると座標を自動取得）</span></label>
          <input class="form-input" id="cf-address" value="${(i==null?void 0:i.address)||""}" placeholder="例: 岐阜県加茂郡富加町..." />
        </div>
        <div class="form-group">
          <label class="form-label">エリア <span style="font-size:.75rem;color:var(--text-muted)">（スケジュール表示用）</span></label>
          <input class="form-input" id="cf-area" value="${(i==null?void 0:i.area)||""}" placeholder="例: 関市" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">必要サービス</label>
        <div class="tags-container" style="gap:8px">
          ${ja.map(d=>{var m;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-service" value="${d}" ${(m=i==null?void 0:i.requiredServices)!=null&&m.includes(d)?"checked":""} /> ${d}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">必要スキル</label>
        <div class="tags-container" style="gap:8px">
          ${n.map(d=>{var m;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
            <input type="checkbox" name="cf-skill" value="${d}" ${(m=i==null?void 0:i.requiredSkills)!=null&&m.includes(d)?"checked":""} /> ${d}
          </label>`}).join("")}
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">性別希望</label>
          <select class="form-select" id="cf-gender-pref">
            ${Bd.map(d=>`<option ${(i==null?void 0:i.genderPreference)===d?"selected":""}>${d}</option>`).join("")}
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
  `;Tt(e?"利用者情報の編集":"新規利用者登録",s,`
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("cf-cancel").onclick=Y,document.getElementById("cf-save").onclick=async()=>{const d=document.getElementById("cf-name").value.trim();if(!d){N("氏名を入力してください","warning");return}const m=document.getElementById("cf-save");m.disabled=!0,m.textContent="保存中...";const v=document.getElementById("cf-address").value.trim();let w=(i==null?void 0:i.lat)||ee.lat,T=(i==null?void 0:i.lng)||ee.lng;if(v)try{await at();const x=await Fa(v);x?(w=x.lat,T=x.lng,N(`座標を取得しました: ${x.lat.toFixed(4)}, ${x.lng.toFixed(4)}`,"success")):N("住所から座標を取得できませんでした。事業所付近の座標を使用します。","warning")}catch(x){console.warn("ジオコーディング失敗:",x),N("座標取得に失敗。事業所付近の座標を使用します。","warning")}const E={name:d,careLevel:document.getElementById("cf-care-level").value,address:v,area:document.getElementById("cf-area").value.trim(),requiredServices:Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(x=>x.value),requiredSkills:Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(x=>x.value),genderPreference:document.getElementById("cf-gender-pref").value,visitDuration:parseInt(document.getElementById("cf-duration").value)||60,timeWindow:{start:document.getElementById("cf-time-start").value,end:document.getElementById("cf-time-end").value},notes:document.getElementById("cf-notes").value.trim(),lat:w,lng:T,isActive:!0};try{e?(await Sd(i.id,E),N("利用者情報を更新しました","success")):(await Ba(E),N("利用者を登録しました","success")),Y(),await cs()}catch(x){N("保存に失敗しました: "+x.message,"error")}finally{m.disabled=!1,m.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-client]");if(e){const s=pt.find(a=>a.id===e.dataset.editClient);s&&qa(s)}const n=i.target.closest("[data-delete-client]");if(n){const s=pt.find(a=>a.id===n.dataset.deleteClient);if(s&&await ge("削除確認",`${s.name} を削除しますか？`))try{await kd(s.id),N(`${s.name} を削除しました`,"success"),await cs()}catch{N("削除に失敗しました","error")}}});let de=je();const Yr=localStorage.getItem("navDate");Yr&&(de=Yr,localStorage.removeItem("navDate"));async function Hd(){var s,a,l;const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">view_day</span>
        日別スケジュール確認
      </h1>
      <div class="btn-group">
        <button class="btn btn-secondary btn-sm" id="sched-prev-day" title="前の日 (←)" aria-label="前の日">
          <span class="material-icons-round" aria-hidden="true">chevron_left</span>
        </button>
        <input type="date" id="schedule-date" class="form-input" value="${de}" style="width:180px" />
        <button class="btn btn-secondary btn-sm" id="sched-next-day" title="次の日 (→)" aria-label="次の日">
          <span class="material-icons-round" aria-hidden="true">chevron_right</span>
        </button>
        <button class="btn btn-secondary btn-sm" id="sched-today-btn" title="今日 (T)">今日</button>
        <button class="btn btn-primary" id="btn-add-visit">
          <span class="material-icons-round" aria-hidden="true">add</span>
          訪問追加
        </button>
      </div>
    </div>
    <div id="schedule-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,document.getElementById("schedule-date").addEventListener("change",c=>{de=c.target.value,gt()});const e=c=>{const d=new Date(de);d.setDate(d.getDate()+c),de=d.toISOString().slice(0,10),document.getElementById("schedule-date").value=de,gt()};(s=document.getElementById("sched-prev-day"))==null||s.addEventListener("click",()=>e(-1)),(a=document.getElementById("sched-next-day"))==null||a.addEventListener("click",()=>e(1)),(l=document.getElementById("sched-today-btn"))==null||l.addEventListener("click",()=>{de=je(),document.getElementById("schedule-date").value=de,gt()}),document.getElementById("btn-add-visit").addEventListener("click",Ha);const n=es({ArrowLeft:()=>e(-1),ArrowRight:()=>e(1),t:()=>{var c;return(c=document.getElementById("sched-today-btn"))==null?void 0:c.click()}});hs(n),await gt()}async function gt(){var E,x;const i=document.getElementById("schedule-content"),[e,n,s,a]=await Promise.all([oe().catch(()=>[]),fe().catch(()=>[]),ot(de).catch(()=>[]),os(de).catch(()=>[])]);if(s.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" aria-hidden="true">event_busy</span>
        <h3>${Qt(de)} の訪問予定はありません</h3>
        <p>予定を登録する方法を選んでください</p>
        <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:16px;">
          <button class="btn btn-primary" id="empty-add-visit">
            <span class="material-icons-round" aria-hidden="true">add</span>
            訪問を追加
          </button>
          <button class="btn btn-secondary" id="empty-goto-matching">
            <span class="material-icons-round" aria-hidden="true">auto_fix_high</span>
            マッチング最適化を実行
          </button>
        </div>
      </div>
    `,(E=document.getElementById("empty-add-visit"))==null||E.addEventListener("click",Ha),(x=document.getElementById("empty-goto-matching"))==null||x.addEventListener("click",()=>ve("matching"));return}const l={},c=[];let d=0,m=0,v=0;for(const k of s)k.staffId?(l[k.staffId]||(l[k.staffId]=[]),l[k.staffId].push(k)):c.push(k);c.sort((k,L)=>{const C=k.startTime||k.scheduledTime||"00:00",P=L.startTime||L.scheduledTime||"00:00";return C.localeCompare(P)});let w="";c.length>0&&(w=`
      <div class="card" style="border-left: 4px solid var(--danger); margin-bottom: 24px; background: rgba(239, 68, 68, 0.05);">
        <h3 class="card-title" style="color: var(--danger); margin-bottom: 12px;">
          <span class="material-icons-round">warning</span>
          未割り当ての訪問 (${c.length}件)
        </h3>
        <div class="grid grid-3" style="gap: 12px;">
          ${c.map(k=>{const L=n.find(C=>C.id===k.clientId);return`
              <div class="visit-card" style="border: 1px dashed var(--danger);">
                <div style="display:flex;justify-content:space-between;align-items:start">
                  <div>
                    <strong>${K(k.clientName||(L==null?void 0:L.name)||"不明")} ${k.type==="sales"?'<span class="tag" style="background:var(--warning);color:white;margin-left:4px">営業</span>':""}</strong>
                    <div style="font-size:.8rem;color:var(--text-muted)">${k.startTime} | ${k.duration||60}分</div>
                  </div>
                  <button class="btn-icon" data-delete-visit="${k.id}" style="color:var(--danger)">
                    <span class="material-icons-round">close</span>
                  </button>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `);for(const[k,L]of Object.entries(l)){const C=e.find(O=>O.id===k);if(!C)continue;const P=a.find(O=>O.staffId===k),$=parseInt(C.wage)||2e3;if(P&&(v+=(P.totalDistance||0)*ki),L.sort((O,M)=>{const R=O.optimizedArrivalTime||O.startTime||O.scheduledTime||"00:00",A=M.optimizedArrivalTime||M.startTime||M.scheduledTime||"00:00";return R.localeCompare(A)}),P&&P.schedule&&P.schedule.length>=2){const O=P.schedule[0].arrivalMinutes,R=(P.schedule[P.schedule.length-1].arrivalMinutes-O)/60;m+=R*$}else if(L.length>0){const O=L[0],M=L[L.length-1],R=O.startTime||O.scheduledTime||"09:00",A=M.startTime||M.scheduledTime||"17:00",g=X(R),p=(X(A)+(M.duration||60)-g)/60;m+=p*$}L.forEach((O,M)=>{d+=Na(C,O.duration||60);let R=10,A=null;if(P&&P.schedule){const g=P.schedule.find(h=>h.clientId===O.clientId);g&&(R=g.travelTimeFromPrev||10,A=g.arrivalTime)}O.calculatedTravelTime=R,O.optimizedArrivalTime=A}),L.sort((O,M)=>{const R=O.optimizedArrivalTime||O.startTime||O.scheduledTime||"00:00",A=M.optimizedArrivalTime||M.startTime||M.scheduledTime||"00:00";return R.localeCompare(A)})}let T="";if(window.isAdmin){const k=d-m-v,L=d>0?Math.round(k/d*100):0;T=`
      <div class="card" style="margin-bottom: 20px; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success);">
        <h3 class="card-title" style="color: var(--success); margin-bottom: 15px;">
          <span class="material-icons-round">analytics</span>
          【管理者専用】本日の収支シミュレーション
        </h3>
        <div class="grid grid-4" style="gap: 15px; text-align: center;">
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定売上</div>
            <div style="font-size: 1.5rem; font-weight: bold;">¥${d.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">人件費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${m.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">車両・移動費</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);">¥${v.toLocaleString()}</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
            <div style="font-size: 0.9rem; color: var(--text-secondary);">想定利益 (利益率)</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: ${k>=0?"var(--success)":"var(--danger)"};">
              ¥${k.toLocaleString()} <span style="font-size: 1rem;">(${L}%)</span>
            </div>
          </div>
        </div>
      </div>
    `}i.innerHTML=`
    ${T}
    ${w}
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${Qt(de)} — ${s.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(l).map(([k,L])=>{const C=e.find(P=>P.id===k);return`
          <div class="card" style="border-left:4px solid ${(C==null?void 0:C.color)||"#999"}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${(C==null?void 0:C.color)||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${L.length}
              </div>
              ${K((C==null?void 0:C.name)||"未割当")}
            </h3>
            <div class="schedule-timeline">
              ${L.map((P,$)=>{const O=n.find(g=>g.id===P.clientId),M=P.optimizedArrivalTime||P.startTime||P.scheduledTime||"--:--";let R="",A="";if($>0){const g=L[$-1],h=g.optimizedArrivalTime||g.startTime||g.scheduledTime,p=P.calculatedTravelTime||10;if(h&&M!=="--:--"){const[_,y]=h.split(":").map(Number),[I,f]=M.split(":").map(Number),U=_*60+y+(g.duration||60),Se=I*60+f-U;Se<p&&(A=`
                          <div style="color:var(--danger); font-size: 0.8rem; padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border-radius: 4px; margin-bottom: 8px;">
                            <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">warning</span>
                            移動時間が不足しています（必要: ${p}分, 実際: ${Se}分）
                          </div>
                        `),R=`
                        <div style="margin-left: 60px; padding: 4px 0; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; border-left: 2px dashed var(--border); padding-left: 14px;">
                          <span class="material-icons-round" style="font-size: 14px; margin-right: 4px;">directions_car</span>
                          移動時間: 約${p}分
                        </div>
                      `}}return`
                  ${R}
                  ${A}
                  <div class="time-slot">
                    <div class="time-label">${M}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${K(P.clientName||(O==null?void 0:O.name)||"不明")} ${P.type==="sales"?'<span class="tag" style="background:var(--warning);color:white;margin-left:4px">営業</span>':""}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">
                              ${P.type==="sales"?"営業活動":P.serviceInfo||P.service||"訪問"} | ${P.duration||60}分
                            </div>
                            <div style="font-size:.75rem;color:var(--text-muted); margin-top:2px;">
                              <span class="material-icons-round" style="font-size:12px;vertical-align:middle">place</span>
                              ${K(P.type==="sales"?P.salesTarget||"営業先":(O==null?void 0:O.area)||"未設定")}
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
  `}async function Ha(){const[i,e]=await Promise.all([oe().catch(()=>[]),fe().catch(()=>[])]),n=`
    <form id="visit-form">
      <div class="form-group">
        <label class="form-label">利用者 *</label>
        <select class="form-select" id="vf-client">
          <option value="">選択してください</option>
          ${e.filter(a=>a.isActive).map(a=>`<option value="${a.id}">${a.name}（${a.careLevel}）</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">担当職員 *</label>
        <select class="form-select" id="vf-staff">
          <option value="">選択してください</option>
          ${i.filter(a=>a.isActive).map(a=>`<option value="${a.id}">${a.name}</option>`).join("")}
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
          ${ja.map(a=>`<option>${a}</option>`).join("")}
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
  `;Tt("訪問予定の追加",n,`
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `);const s=()=>{const a=document.getElementById("vf-service").value,l=parseInt(document.getElementById("vf-duration").value)||60,c=Un(a,l);document.getElementById("vf-income").value=c,document.getElementById("vf-income-hint").textContent=`↑ ${a} ${l}分 → ¥${c.toLocaleString()}（自動計算）`};document.getElementById("vf-service").addEventListener("change",s),document.getElementById("vf-duration").addEventListener("change",s),s(),document.getElementById("vf-cancel").onclick=Y,document.getElementById("vf-save").onclick=async()=>{const a=document.getElementById("vf-client").value,l=document.getElementById("vf-staff").value;if(!a||!l){N("利用者と職員を選択してください","warning");return}try{const c=parseInt(document.getElementById("vf-duration").value)||60,d=document.getElementById("vf-service").value,m=document.getElementById("vf-time").value,v=X(m)+c,w=Math.floor(v/60),T=v%60,E=`${String(w).padStart(2,"0")}:${String(T).padStart(2,"0")}`;await qi({date:de,clientId:a,staffId:l,startTime:m,endTime:E,scheduledTime:m,duration:c,service:d,income:parseInt(document.getElementById("vf-income").value)||Un(d,c),status:"scheduled"}),N("訪問予定を追加しました","success"),Y(),await gt()}catch{N("追加に失敗しました","error")}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-delete-visit]");if(e&&await ge("削除確認","この訪問予定を削除しますか？"))try{await as(e.dataset.deleteVisit),N("訪問予定を削除しました","success"),await gt()}catch{N("削除に失敗しました","error")}});function zd(i,e){const n=X(i),s=[{startTime:i,duration:e}],a=n+15;a+e<=18*60&&s.push({startTime:Zt(a),duration:e});const l=n-15;return l>=7*60&&s.push({startTime:Zt(l),duration:e}),s}function Qr(i){return i?X(i)<12*60+30?"AM":"PM":"AM"}function Gd(i,e,n=null){var v,w,T,E,x;let s=0;const a=[];let l=!0;for(const k of e.requiredServices||[])(w=(v=i.skills)==null?void 0:v.services)!=null&&w.includes(k)?(s+=jt.requiredSkill,a.push(`✅ ${k}対応可`)):(l=!1,a.push(`❌ ${k}に対応不可`));const c=[...((T=i.skills)==null?void 0:T.qualifications)||[],...((E=i.skills)==null?void 0:E.physical)||[],...((x=i.skills)==null?void 0:x.special)||[]];for(const k of e.requiredSkills||[])c.includes(k)?(s+=jt.requiredSkill,a.push(`✅ ${k}あり`)):(l=!1,a.push(`❌ ${k}なし`));if(e.genderPreference&&e.genderPreference!=="指定なし"){const k=e.genderPreference.replace("希望","");i.gender===k?(s+=jt.genderMatch,a.push(`✅ 性別希望合致（${k}）`)):(l=!1,a.push(`❌ 性別希望不一致（希望: ${k}）`))}i.type==="正社員"&&(s+=jt.staffType,a.push("✅ 正社員"));const d=(n==null?void 0:n.lat)||i.lat,m=(n==null?void 0:n.lng)||i.lng;if(d&&e.lat){const k=Ca(d,m,e.lat,e.lng);let L=jt.proximity;n!=null&&n.isTransition&&(L=L*.2,a.push("ℹ️ ブロック移動（エリア移動許容）"));const C=Math.max(0,L*(1-k/10));s+=C,C>L*.8&&a.push(`✅ 近距離ボーナス (+${Math.round(C)})`)}return{score:Math.round(s),reasons:a,eligible:l}}function Ln(i){var e;return(e=i.name)!=null&&e.includes("前川")?3:i.maxVisits||(i.type==="パート"?5:10)}function za(i,e,n=[],s=null,a=[]){const l=[],c=new Set,d={},m={};a.forEach((E,x)=>{m[E.id]=x});const v=(E,x)=>{if(!s)return 15;const k=m[E],L=m[x];return k!==void 0&&L!==void 0&&s[k][L]&&s[k][L].duration||15},w=[...e].sort((E,x)=>{const k=E.startTime||E.scheduledTime||"00:00",L=x.startTime||x.scheduledTime||"00:00";return k.localeCompare(L)});for(const E of w){if(l.some($=>{if($.clientId!==E.clientId)return!1;const O=X($.startTime),M=O+($.duration||60),R=X(E.startTime||E.scheduledTime||"09:00"),A=R+(E.duration||60);return R<M&&A>O})){c.add(E.id);continue}const k=i.filter($=>$.isActive).map($=>{const O=n.find(f=>f.id===E.clientId),M=l.filter(f=>f.staffId===$.id),R=M.length>0?M[M.length-1]:null;let A=null;if(R){const f=n.find(U=>U.id===R.clientId);if(f){const U=E.startTime||E.scheduledTime||"09:00",G=Qr(R.startTime)!==Qr(U);A={lat:f.lat,lng:f.lng,isTransition:G}}}const{score:g,eligible:h}=Gd($,O||E,A),p=E.startTime||E.scheduledTime||"09:00",_=E.duration||60,y=E.timeOptions&&E.timeOptions.length>0?E.timeOptions:zd(p,_);let I=null;for(const f of y){let U=!0;const G=X(f.startTime),Se=G+(f.duration||60),Hi=X($.workStart||"07:00"),lt=X($.workEnd||"18:00");if(G<Hi||Se>lt){U=!1;continue}const ct=l.filter(Ve=>Ve.staffId===$.id);for(const Ve of ct){const qe=X(Ve.startTime),dt=qe+(Ve.duration||60);if(G<dt&&Se>qe){U=!1;break}const St=v(Ve.clientId,E.clientId);if(G>=dt){if(G-dt<St){U=!1;break}}else if(Se<=qe&&qe-Se<St){U=!1;break}}if(U){I=f;break}}return{staff:$,score:g,eligible:h&&!!I,chosenTime:I}}).filter($=>$.eligible);if(k.length===0)continue;k.sort(($,O)=>{var f,U;const M=d[$.staff.id]||0,R=d[O.staff.id]||0,A=Ln($.staff),g=Ln(O.staff),h=M>=A,p=R>=g;if(h!==p)return h?1:-1;const _=7,y=$.staff.type==="正社員"&&!((f=$.staff.name)!=null&&f.includes("前川"))&&M<_,I=O.staff.type==="正社員"&&!((U=O.staff.name)!=null&&U.includes("前川"))&&R<_;return y!==I?y?-1:1:M!==R?M-R:$.staff.type!==O.staff.type?$.staff.type==="正社員"?-1:1:O.score-$.score});const L=k[0],C=d[L.staff.id]||0,P=Ln(L.staff);if(C<P){const $=L.chosenTime.startTime,O=L.chosenTime.duration||60,M=X($)+O;l.push({staffId:L.staff.id,staffName:L.staff.name,visitId:E.id,clientId:E.clientId,clientName:E.clientName||"利用者",score:L.score,startTime:$,endTime:Zt(M),scheduledTime:$,duration:O}),c.add(E.id),d[L.staff.id]=C+1}}const T=e.filter(E=>!c.has(E.id)).map(E=>({visitId:E.id,clientName:E.clientName||"利用者",reason:"適格な職員なし、または上限超過",visit:E}));return{assignments:l,unassigned:T}}async function ds(i,e,n,s=ee,a=null){const l={};for(const d of i)l[d.staffId]||(l[d.staffId]=[]),l[d.staffId].push(d.clientId);const c={};for(const[d,m]of Object.entries(l)){const v=e.find(P=>P.id===d),w=m.map(P=>n.find($=>$.id===P)).filter(Boolean);if(w.length===0)continue;const T=[{id:"office",name:"事業所",lat:s.lat,lng:s.lng,isOffice:!0},...w.map(P=>{const $=i.find(O=>O.clientId===P.id&&O.staffId===d);return{id:P.id,name:P.name,lat:P.lat,lng:P.lng,duration:P.visitDuration||60,scheduledStart:$?$.startTime:null,timeWindow:P.timeWindow}})];let E=null;typeof a=="function"&&(E=await a(T));const x=Kd(T,E);let k=Jd(T,x);k=Xd(k,x);const L=Yd(k,x),C=Qd(k,x,v,E,T);c[d]={staffId:d,staffName:(v==null?void 0:v.name)||"不明",staffColor:(v==null?void 0:v.color)||"#999",route:k,totalDistance:Math.round(L*10)/10,totalDuration:Zd(C),schedule:C}}return c}function Kd(i,e=null){const n=i.length,s=Array.from({length:n},()=>Array(n).fill(0));for(let a=0;a<n;a++)for(let l=0;l<n;l++)a!==l&&(e&&e[a]&&e[a][l]&&e[a][l].distance!==null?s[a][l]=e[a][l].distance:s[a][l]=Ca(i[a].lat,i[a].lng,i[l].lat,i[l].lng));return s}function Jd(i,e){const n=i.length,s=new Set([0]),a=[0],l=[],c=[];for(let v=1;v<n;v++){const w=i[v];w.timeWindow&&w.timeWindow.start?l.push({index:v,start:X(w.timeWindow.start),end:X(w.timeWindow.end)}):c.push(v)}l.sort((v,w)=>v.start-w.start);const d=[...l.map(v=>v.index),...c];let m=0;for(;s.size<n;){let v=-1,w=1/0;for(const T of d)s.has(T)||e[m][T]<w&&(w=e[m][T],v=T);if(v===-1)break;a.push(v),s.add(v),m=v}return a.push(0),a}function Xd(i,e){const n=i.length;let s=!0,a=[...i];for(;s;){s=!1;for(let l=1;l<n-2;l++)for(let c=l+1;c<n-1;c++){const d=e[a[l-1]][a[l]]+e[a[c]][a[c+1]];if(e[a[l-1]][a[c]]+e[a[l]][a[c+1]]<d-.001){const v=[...a];let w=l,T=c;for(;w<T;)[v[w],v[T]]=[v[T],v[w]],w++,T--;a=v,s=!0}}}return a}function Yd(i,e){let n=0;for(let s=0;s<i.length-1;s++)n+=e[i[s]][i[s+1]];return n}function Qd(i,e,n,s=null,a=[]){const l=[];let d=X((n==null?void 0:n.workStart)||"08:30");for(let m=0;m<i.length;m++){let v=0;if(m>0){const T=i[m-1],E=i[m];s&&s[T]&&s[T][E]&&s[T][E].duration!==null?v=s[T][E].duration:v=e[T][E]/20*60,d+=Math.ceil(v)}const w=a[i[m]];if(w){let T=0;w.timeWindow&&w.timeWindow.start?T=X(w.timeWindow.start):w.scheduledStart&&(T=X(w.scheduledStart)),d<T&&(d=T)}if(l.push({pointIndex:i[m],clientId:w?w.id:null,arrivalTime:Zt(d),arrivalMinutes:d,travelTimeFromPrev:Math.ceil(v)}),m>0&&m<i.length-1){const T=w&&w.duration||60;d+=T}}return l}function Zd(i){if(i.length<2)return 0;const e=i[0].arrivalMinutes;return i[i.length-1].arrivalMinutes-e}let ke=new Date;async function it(){const i=document.getElementById("page-container"),e=ke.getFullYear(),n=ke.getMonth(),s=new Date(e,n,1),a=new Date(e,n+1,0),l=s.getDay(),c=a.getDate(),d=await oi().catch(()=>[]),[m,v]=await Promise.all([fe().catch(()=>[]),oe().catch(()=>[])]);let w=`
    <div class="page-header" style="flex-direction: column; align-items: flex-start; gap: 16px;">
      <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
        <h1 class="page-title">
          <span class="material-icons-round" style="color:var(--primary)">event_note</span>
          全体スケジュール <span style="font-size:1rem;font-weight:normal;color:var(--text-muted);margin-left:8px">(運用司令塔)</span>
        </h1>
        <div class="btn-group">
          <button class="btn btn-secondary" id="cal-prev-month">
            <span class="material-icons-round">chevron_left</span>
          </button>
          <h2 id="cal-current-month" style="margin: 0 16px; font-size: 1.25rem; font-weight:bold;">${e}年 ${n+1}月</h2>
          <button class="btn btn-secondary" id="cal-next-month">
            <span class="material-icons-round">chevron_right</span>
          </button>
        </div>
      </div>
      
      <!-- 運用フローガイドパネル -->
      <div class="card" style="width:100%; background:rgba(59,130,246,0.05); border:1px solid var(--primary); padding:16px;">
        <h3 style="font-size:0.9rem; color:var(--primary); margin-bottom:12px; display:flex; align-items:center; gap:6px;">
          <span class="material-icons-round" style="font-size:18px;">info</span>
          システム運用ステップ
        </h3>
        <div class="grid grid-3" style="gap:16px;">
          <!-- Step 1 -->
          <div style="background:white; padding:16px; border-radius:8px; box-shadow:var(--shadow-sm); border-top:3px solid var(--border);">
            <div style="font-weight:bold; font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">STEP 1 (月末作業)</div>
            <div style="font-size:0.95rem; font-weight:600; margin-bottom:8px;">基本予定の自動作成</div>
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:12px;">利用者の基本曜日から表示月(1ヶ月分)のベース予定を生成します。</p>
            <button class="btn btn-outline" id="cal-generate-month" style="width:100%; justify-content:center; border-color:var(--border);">
              <span class="material-icons-round">event_note</span> 月間予定を生成
            </button>
          </div>
          <!-- Step 2 -->
          <div style="background:white; padding:16px; border-radius:8px; box-shadow:var(--shadow-sm); border-top:3px solid var(--warning);">
            <div style="font-weight:bold; font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">STEP 2 (随時)</div>
            <div style="font-size:0.95rem; font-weight:600; margin-bottom:8px;">お休みの反映・調整</div>
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:12px;">利用者からお休みの連絡があったら、下のカレンダーで日付をクリックして予定を削除します。</p>
            <div style="display:flex; justify-content:center; color:var(--warning);">
              <span class="material-icons-round" style="font-size:32px; opacity:0.5;">mouse</span>
            </div>
          </div>
          <!-- Step 3 -->
          <div style="background:white; padding:16px; border-radius:8px; box-shadow:var(--shadow-sm); border-top:3px solid var(--primary);">
            <div style="font-weight:bold; font-size:0.85rem; color:var(--primary); margin-bottom:8px;">STEP 3 (毎週金曜日)</div>
            <div style="font-size:0.95rem; font-weight:600; margin-bottom:8px;">ルートの自動最適化</div>
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:12px;">来週1週間分のお休みなどを加味し、一番効率の良い担当者ルートを再計算して確定します。</p>
            <button class="btn btn-primary" id="cal-weekly-opt" style="width:100%; justify-content:center; font-weight:bold;">
              <span class="material-icons-round">auto_fix_high</span> 来週分をルート確定
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 8px; overflow: hidden;">
        <!-- 曜日ヘッダー -->
        ${["日","月","火","水","木","金","土"].map((k,L)=>`
          <div style="background: var(--bg-card); padding: 12px; text-align: center; font-weight: 600; color: ${L===0?"var(--danger)":L===6?"var(--primary)":"var(--text)"};">
            ${k}
          </div>
        `).join("")}
  `;for(let k=0;k<l;k++)w+='<div style="background: var(--bg-main); padding: 10px; min-height: 100px;"></div>';const T=Yt(new Date);for(let k=1;k<=c;k++){const L=new Date(e,n,k),C=Yt(L),P=L.getDay(),$=C===T,M=d.filter(R=>R.date===C).filter(R=>R.status==="scheduled");w+=`
      <div class="calendar-day" data-date="${C}" style="background: var(--bg-card); padding: 8px; min-height: 100px; cursor: pointer; border: ${$?"2px solid var(--primary)":"none"}; position: relative; display: flex; flex-direction: column;">
        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; color: ${P===0?"var(--danger)":P===6?"var(--primary)":"inherit"};">
          ${k}
        </div>
        ${M.length>0?`
          <div style="background: rgba(59,130,246,0.1); color: var(--primary); padding: 4px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center;">
            <span>訪問予定</span>
            <span>${M.length}件</span>
          </div>
        `:""}
        <div style="flex-grow: 1;"></div>
      </div>
    `}const E=(7-(l+c)%7)%7;for(let k=0;k<E;k++)w+='<div style="background: var(--bg-main); padding: 10px; min-height: 100px;"></div>';w+=`
      </div>
    </div>
  `,i.innerHTML=w,document.getElementById("cal-prev-month").addEventListener("click",()=>{ke.setMonth(ke.getMonth()-1),it()}),document.getElementById("cal-next-month").addEventListener("click",()=>{ke.setMonth(ke.getMonth()+1),it()}),document.getElementById("cal-generate-month").addEventListener("click",iu),document.getElementById("cal-weekly-opt").addEventListener("click",tu);const x=es({ArrowLeft:()=>{var k;return(k=document.getElementById("cal-prev-month"))==null?void 0:k.click()},ArrowRight:()=>{var k;return(k=document.getElementById("cal-next-month"))==null?void 0:k.click()},t:()=>{ke=new Date,it()}});hs(x),document.querySelectorAll(".calendar-day").forEach(k=>{k.addEventListener("click",L=>{const C=L.currentTarget.dataset.date;eu(C,d,m,v)})})}function eu(i,e,n,s){const a=e.filter(d=>d.date===i);let l="";a.length===0?l='<div style="color:var(--text-muted); text-align:center; padding: 20px;">予定はありません</div>':(a.sort((d,m)=>(d.startTime||"00:00").localeCompare(m.startTime||"00:00")),l=a.map(d=>{const m=n.find(w=>w.id===d.clientId),v=s.find(w=>w.id===d.staffId);return`
        <div class="visit-card" style="margin-bottom: 8px; border-left: 4px solid ${(v==null?void 0:v.color)||"#ccc"}; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">${d.startTime||d.scheduledTime||"--:--"} ~ ${d.endTime||"--:--"}</div>
            <div style="font-size: 0.9rem;">
              <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">elderly</span> 
              ${K(d.clientName||(m==null?void 0:m.name)||"未設定")}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              担当: ${K(d.staffName||(v==null?void 0:v.name)||"未設定")}
            </div>
          </div>
          <button class="btn-icon btn-cancel-visit" data-id="${d.id}" style="color: var(--danger);" title="この予定をキャンセル(削除)する">
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
  `;Tt(`日付の詳細: ${i}`,c,`
    <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
      <div style="display:flex; gap:8px;">
        <button class="btn btn-outline btn-nav" data-target="schedule" data-date="${i}" style="padding:6px 12px; font-size:0.85rem; border-color:var(--border);">
          <span class="material-icons-round" style="font-size:16px;">calendar_today</span> スケジュール
        </button>
        <button class="btn btn-outline btn-nav" data-target="map" data-date="${i}" style="padding:6px 12px; font-size:0.85rem; border-color:var(--border);">
          <span class="material-icons-round" style="font-size:16px;">map</span> マップ
        </button>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-secondary" id="modal-close-btn">閉じる</button>
        <button class="btn btn-primary" id="modal-add-visit-btn" data-date="${i}">
          <span class="material-icons-round">add</span> 追加
        </button>
      </div>
    </div>
  `),document.getElementById("modal-close-btn").addEventListener("click",Y),document.querySelectorAll(".btn-nav").forEach(d=>{d.addEventListener("click",m=>{const v=m.currentTarget.dataset.target,w=m.currentTarget.dataset.date;localStorage.setItem("navDate",w),Y(),ve(v)})}),document.querySelectorAll(".btn-cancel-visit").forEach(d=>{d.addEventListener("click",async m=>{const v=m.currentTarget.dataset.id;if(await ge("予定の削除","この予定をキャンセル（削除）しますか？<br>※再マッチング時には除外されます。"))try{await as(v),N("予定を削除しました","success"),Y(),it()}catch{N("削除に失敗しました","error")}})}),document.getElementById("modal-add-visit-btn").addEventListener("click",d=>{Y(),N("予定の追加は「日別スケジュール」画面から行ってください。","info")})}async function tu(){const i=new Date,e=(8-i.getDay())%7||7,n=new Date(i.getFullYear(),i.getMonth(),i.getDate()+e),s=[];for(let v=0;v<7;v++){const w=new Date(n);w.setDate(w.getDate()+v),s.push(Yt(w))}const a=s[0],l=s[6];if(!await ge("来週分の再マッチング",`【対象期間】<br><b>${a} 〜 ${l}</b><br><br>カレンダー上で削除した「お休み」を反映し、担当者をリセットした上で、一番効率の良いルートに一括で再計算します。<br>実行しますか？`))return;const d=document.getElementById("cal-weekly-opt"),m=d.innerHTML;d.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',d.disabled=!0;try{const[v,w,T]=await Promise.all([oe(),fe(),oi()]),E=[{id:"office",...ee},...w.map(C=>({id:C.id,lat:C.lat,lng:C.lng}))];let x=null;const k=["日","月","火","水","木","金","土"];let L=0;for(const C of s){const[P,$,O]=C.split("-"),M=new Date(P,$-1,O),R=k[M.getDay()],A=T.filter(I=>I.date===C);if(A.length===0)continue;const g=v.filter(I=>I.isActive&&Array.isArray(I.days)&&I.days.includes(R));if(g.length===0)continue;const{assignments:h}=za(g,A,w,x,E),p=await ds(h,g,w,ee,async I=>{try{return await at(),await $i(I)}catch{return null}}),_=Object.entries(p).map(([I,f])=>{const U=h.filter(G=>G.staffId===I).map(G=>G.clientId);return{staffId:I,date:C,clientIds:U,totalDistance:f.totalDistance,totalDuration:f.totalDuration,schedule:f.schedule}}),y=new Set;for(const I of A){const f=h.find(U=>U.visitId===I.id);f?(await ce(I.id,{staffId:f.staffId,staffName:f.staffName,startTime:f.startTime,endTime:f.endTime,scheduledTime:f.scheduledTime}),y.add(I.clientId)):y.has(I.clientId)||await ce(I.id,{staffId:null,staffName:"未設定"})}await Ua(_),L++}L>0?(N(`来週 ${L}日分 のルート最適化が完了しました！`,"success"),it()):N("最適化する予定が見つかりませんでした。","warning")}catch(v){console.error(v),N("一括最適化中にエラーが発生しました: "+v.message,"error")}finally{d.innerHTML=m,d.disabled=!1}}async function iu(){var l;const i=ke.getFullYear(),e=ke.getMonth();if(!await ge("月間予定のベース生成",`<b>${i}年${e+1}月</b> の基本スケジュールを利用者の基本曜日から自動生成しますか？<br><br>※すでにカレンダー上に存在する日の予定は上書きされずスキップされます。`))return;const s=document.getElementById("cal-generate-month"),a=s.innerHTML;s.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 生成中...',s.disabled=!0;try{const[c,d]=await Promise.all([fe(),oi()]),m={日:0,月:1,火:2,水:3,木:4,金:5,土:6},v=d.filter(E=>E.dayOfWeek&&m[E.dayOfWeek]!==void 0);if(v.length===0){N("ベースとなる予定テンプレート（曜日設定）がありません。デモデータを登録してください。","warning");return}let w=0;const T=new Date(i,e+1,0).getDate();for(let E=1;E<=T;E++){const x=new Date(i,e,E),k=Yt(x),L=x.getDay(),C=v.filter(O=>m[O.dayOfWeek]===L);if(C.length===0)continue;const P=d.filter(O=>O.date===k),$=new Set(P.map(O=>O.clientId));for(const O of C){if($.has(O.clientId))continue;const M=c.find(f=>f.id===O.clientId),R=O.service||((l=M==null?void 0:M.requiredServices)==null?void 0:l[0])||"身体介護",A=O.duration||(M==null?void 0:M.visitDuration)||60,g=O.startTime||"09:00";let h=0;try{h=Un(R,A)}catch{h=4e3}const p=X(g)+A,_=Math.floor(p/60),y=p%60,I=`${String(_).padStart(2,"0")}:${String(y).padStart(2,"0")}`;await qi({date:k,clientId:O.clientId,clientName:O.clientName||(M==null?void 0:M.name)||"利用者",staffId:null,staffName:"未設定",startTime:g,endTime:I,scheduledTime:g,duration:A,service:R,income:h,dayOfWeek:O.dayOfWeek,status:"scheduled"}),w++}}w>0?(N(`${i}年${e+1}月の予定を ${w}件 生成しました！`,"success"),it()):N("新しく生成する予定がありませんでした（既存の予定が設定済み）。","info")}catch(c){console.error("月間スケジュール生成エラー:",c),N("スケジュールの生成に失敗しました: "+c.message,"error")}finally{s.innerHTML=a,s.disabled=!1}}let nt=null,Bi=null,st=je(),Ui=null,us=null,qn=null,vt=null;async function Ga(){const i=document.getElementById("page-container"),e=await oe(),n=["日","月","火","水","木","金","土"][new Date(st).getDay()];i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">tune</span>
        特定日の手動マッチング調整
      </h1>
      <div style="display:flex;align-items:center;gap:12px">
        <input type="date" id="match-date-picker" class="form-input" value="${st}" style="width:160px">
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
        ${e.filter(s=>s.isActive).map(s=>{var l;const a=(l=s.days)==null?void 0:l.includes(n);return`
            <label class="card" style="display:flex;align-items:center;gap:10px;padding:12px;cursor:pointer;${a?"border-color:var(--primary)":""}">
              <input type="checkbox" class="staff-attendance-checkbox" data-staff-id="${s.id}" ${a?"checked":""} style="width:18px;height:18px">
              <div>
                <div style="font-weight:600">${K(s.name)}</div>
                <div style="font-size:.7rem;color:var(--text-muted)">${s.type} | ${a?"通常出勤":"通常休み"}</div>
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
  `,document.getElementById("match-date-picker").addEventListener("change",s=>{st=s.target.value,Ga()}),document.getElementById("btn-run-optimization").addEventListener("click",nu)}async function nu(){const i=document.getElementById("btn-run-optimization"),e=document.getElementById("optimization-results");i.disabled=!0,i.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',e.innerHTML="";try{const[n,s,a]=await Promise.all([oe(),fe(),ot(st)]),l=Array.from(document.querySelectorAll(".staff-attendance-checkbox:checked")).map(E=>E.dataset.staffId),c=n.filter(E=>l.includes(E.id));if(c.length===0){N("出勤する職員を少なくとも1名選択してください","warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}if(a.length===0){N(`${Qt(new Date(st))} の訪問予定がありません。`,"warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}const d=[{id:"office",...ee},...s.map(E=>({id:E.id,lat:E.lat,lng:E.lng}))];let m=null;try{await at(),m=await $i(d)}catch(E){console.warn("全体距離行列の取得に失敗:",E)}const{assignments:v,unassigned:w}=za(c,a,s,m,d);nt=v,vt=w,Ui=c,us=n,qn=s;const T=await ds(v,c,s,ee,async E=>{try{return await at(),await $i(E)}catch(x){return console.warn("実走行データの取得に失敗:",x),null}});Bi=T,e.innerHTML=Ka(n,s,v,w,T),Ja(),N("最適化が完了しました！","success")}catch(n){N("最適化に失敗しました: "+n.message,"error"),console.error(n)}finally{i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行'}}function Ka(i,e,n,s,a){const l={};for(const c of n)l[c.staffId]||(l[c.staffId]={staff:i.find(d=>d.id===c.staffId),clients:[]}),l[c.staffId].clients.push({...c,client:e.find(d=>d.id===c.clientId)});return`
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
        <div class="stat-value">${Object.values(a).reduce((c,d)=>c+d.totalDistance,0).toFixed(1)}<span style="font-size:.9rem;color:var(--text-muted)">km</span></div>
      </div>
    </div>

    <!-- 職員別結果 -->
    <div class="grid grid-2" style="margin-bottom:24px">
      ${Object.entries(l).map(([c,d])=>{var v,w,T;const m=a[c];return`
          <div class="card" style="border-left:4px solid ${((v=d.staff)==null?void 0:v.color)||"#999"}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${((w=d.staff)==null?void 0:w.color)||"#999"};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${d.clients.length}
                </div>
                ${K(((T=d.staff)==null?void 0:T.name)||"不明")}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${((m==null?void 0:m.totalDistance)||0).toFixed(1)}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${((m==null?void 0:m.schedule)||[]).filter(E=>E.pointIndex!==0||m.schedule.indexOf(E)===m.schedule.length-1).map((E,x,k)=>{var C,P;if(E.pointIndex===0&&x===k.length-1)return`<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${E.arrivalTime} 事業所帰着
                    </div>`;const L=d.clients.find($=>$.clientId===E.clientId);return`<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${E.arrivalTime} ${((C=L==null?void 0:L.client)==null?void 0:C.name)||"利用者"}</strong>
                      <span class="tag">${((P=L==null?void 0:L.client)==null?void 0:P.visitDuration)||60}分</span>
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
              <strong>${K(c.clientName)}</strong> — ${K(c.reason)}
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
  `}async function su(i,e){try{const n=Object.entries(e).map(([l,c])=>{const d=nt.filter(m=>m.staffId===l).map(m=>m.clientId);return{staffId:l,date:st,clientIds:d,totalDistance:c.totalDistance,totalDuration:c.totalDuration,schedule:c.schedule}}),s=await ot(st),a=new Set;for(const l of s){const c=nt.find(d=>d.visitId===l.id);c&&(await ce(l.id,{staffId:c.staffId,staffName:c.staffName,startTime:c.startTime,endTime:c.endTime,scheduledTime:c.scheduledTime}),a.add(l.clientId))}for(const l of s)nt.find(d=>d.visitId===l.id)||(a.has(l.clientId)?await as(l.id):await ce(l.id,{staffId:null,staffName:"未設定"}));await Ua(n),N("スケジュールとルートを保存しました！","success")}catch(n){N("保存に失敗しました: "+n.message,"error")}}function Ja(){var i;(i=document.getElementById("btn-save-routes"))==null||i.addEventListener("click",async()=>{await su(us,Bi)}),document.querySelectorAll(".btn-manual-assign").forEach(e=>{e.addEventListener("click",n=>{const s=n.target.closest(".btn-manual-assign").dataset.visitId;ru(s)})})}function ru(i){const e=vt.find(c=>c.visitId===i);if(!e)return;const n=e.visit,s=Ui.map(c=>`<option value="${c.id}">${K(c.name)}</option>`).join(""),a=`
    <div style="margin-bottom: 16px;">
      <div style="font-weight:600;margin-bottom:4px">利用者: ${K(e.clientName)}</div>
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
  `;Tt("手動割り当て",a,`
    <button class="btn btn-secondary" id="manual-cancel">キャンセル</button>
    <button class="btn btn-primary" id="manual-ok">割り当て</button>
  `),document.getElementById("manual-cancel").onclick=()=>{Y()},document.getElementById("manual-ok").onclick=async()=>{const c=document.getElementById("manual-staff-select").value,d=document.getElementById("manual-time-input").value;Y(),await au(i,c,d)}}async function au(i,e,n){const s=vt.findIndex(w=>w.visitId===i);if(s===-1)return;const l=vt[s].visit,c=Ui.find(w=>w.id===e),d=l.duration||60,m=X(n)+d;nt.push({staffId:c.id,staffName:c.name,visitId:l.id,clientId:l.clientId,clientName:l.clientName||"利用者",score:9999,startTime:n,endTime:Zt(m),scheduledTime:n,duration:d}),vt.splice(s,1);const v=document.getElementById("optimization-results");v.innerHTML='<div style="text-align:center;padding:32px;"><span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> ルート再計算中...</div>';try{Bi=await ds(nt,Ui,qn,ee,async T=>{try{return await at(),await $i(T)}catch{return null}}),v.innerHTML=Ka(us,qn,nt,vt,Bi),Ja(),N(`${c.name}さんに手動割り当てし、ルートを再計算しました`,"success")}catch(w){N("ルート再計算に失敗しました","error"),console.error(w)}}let Jt=je();async function ou(){var e,n;const i=document.getElementById("page-container");if(!window.isAdmin){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:64px;color:var(--danger);opacity:.3">lock</span>
        <h3>アクセス権限がありません</h3>
        <p>このページは管理者専用です。</p>
        <button class="btn btn-primary" id="btn-go-dashboard">ダッシュボードへ戻る</button>
      </div>
    `,document.getElementById("btn-go-dashboard").addEventListener("click",()=>ve("dashboard"));return}i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">analytics</span>
        収支シミュレーション
      </h1>
      <div class="btn-group">
        <input type="date" id="revenue-date-picker" class="form-input" value="${Jt}" style="width:160px">
        <button class="btn btn-secondary" id="btn-refresh-revenue">
          <span class="material-icons-round">refresh</span>
          更新
        </button>
      </div>
    </div>

    <div id="revenue-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,await On(),(e=document.getElementById("revenue-date-picker"))==null||e.addEventListener("change",s=>{Jt=s.target.value,On()}),(n=document.getElementById("btn-refresh-revenue"))==null||n.addEventListener("click",()=>{On()})}async function On(){const i=document.getElementById("revenue-content");if(!i)return;const[e,n,s,a]=await Promise.all([oe(),fe(),ot(Jt),os(Jt)]);if(s.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:48px;opacity:.2">event_busy</span>
        <p>${Qt(Jt)} の訪問予定データがありません。</p>
      </div>
    `;return}let l=0,c=0,d=0,m=s.length;s.filter(E=>E.status==="completed").length;const v=e.map(E=>{const x=a.filter(M=>M.staffId===E.id),k=s.filter(M=>M.staffId===E.id);let L=0,C=0,P=0,$=0,O=0;if(k.forEach(M=>{L+=Na(E,M.duration||60)}),x.forEach(M=>{if($+=M.totalDistance||0,P+=(M.totalDistance||0)*ki,M.schedule&&M.schedule.length>=2){const R=M.schedule[0].arrivalMinutes;O=M.schedule[M.schedule.length-1].arrivalMinutes-R,C=O/60*(parseInt(E.wage)||2e3)}}),x.length===0&&k.length>0){const M=[...k].sort((p,_)=>(p.startTime||"09:00").localeCompare(_.startTime||"09:00")),R=M[0],A=M[M.length-1],g=X(R.startTime||"09:00");O=X(A.startTime||"17:00")+(A.duration||60)-g,C=O/60*(parseInt(E.wage)||2e3)}return{...E,count:k.length,revenue:L,laborCost:C,vehicleCost:P,profit:L-C-P,workMinutes:O}}).filter(E=>E.count>0||E.revenue>0).sort((E,x)=>x.profit-E.profit);v.forEach(E=>{l+=E.revenue,c+=E.laborCost,d+=E.vehicleCost});const w=l-c-d,T=l>0?w/l*100:0;i.innerHTML=`
    <!-- メインKPI -->
    <div class="grid grid-4" style="margin-bottom:24px">
      <div class="card stat-card" style="border-top: 4px solid var(--primary)">
        <div class="stat-label">想定売上</div>
        <div class="stat-value">¥${l.toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">${m}件の訪問</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--warning)">
        <div class="stat-label">人件費推計</div>
        <div class="stat-value">¥${Math.round(c).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">平均人件費/人: ¥${v.length>0?Math.round(c/v.length).toLocaleString():0}</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--secondary)">
        <div class="stat-label">移動・車両費</div>
        <div class="stat-value">¥${Math.round(d).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">@${ki}円/km</div>
      </div>
      <div class="card stat-card ${w>=0?"success":"danger"}" style="border-top: 4px solid ${w>=0?"var(--success)":"var(--danger)"}">
        <div class="stat-label">想定利益 (利益率)</div>
        <div class="stat-value">¥${Math.round(w).toLocaleString()}</div>
        <div style="font-size:.8rem;font-weight:600;color:${w>=0?"var(--success)":"var(--danger)"};margin-top:4px">
          ${T.toFixed(1)}%
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
              ${v.map(E=>{const x=E.revenue>0?E.profit/E.revenue*100:0;return`
                  <tr>
                    <td>
                      <div style="display:flex;align-items:center;gap:8px">
                        <div style="width:10px;height:10px;border-radius:50%;background:${E.color}"></div>
                        <strong>${E.name}</strong>
                      </div>
                    </td>
                    <td style="text-align:right">${E.count}件</td>
                    <td style="text-align:right">¥${E.revenue.toLocaleString()}</td>
                    <td style="text-align:right;color:${E.profit>=0?"var(--success)":"var(--danger)"};font-weight:600">
                      ¥${Math.round(E.profit).toLocaleString()}
                    </td>
                    <td style="text-align:right">
                      <div style="display:flex;align-items:center;justify-content:flex-end;gap:8px">
                        <div style="flex:1;height:4px;width:40px;background:var(--border);border-radius:2px;overflow:hidden">
                          <div style="width:${Math.max(0,Math.min(100,x))}%;height:100%;background:${x>20?"var(--success)":"var(--warning)"}"></div>
                        </div>
                        <span>${x.toFixed(0)}%</span>
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
              <div style="width:${l>0?(d/l*100).toFixed(1):0}%;background:var(--secondary);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:bold" title="移動費">移動</div>
              <div style="width:${l>0?Math.max(0,w/l*100).toFixed(1):0}%;background:var(--success);display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:bold" title="利益">利益</div>
            </div>
            <div style="display:flex;gap:16px;margin-top:12px;font-size:.8rem">
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--warning)"></div> 人件費 (${l>0?(c/l*100).toFixed(1):0}%)</div>
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--secondary)"></div> 移動費 (${l>0?(d/l*100).toFixed(1):0}%)</div>
              <div style="display:flex;align-items:center;gap:4px"><div style="width:8px;height:8px;background:var(--success)"></div> 利益 (${l>0?Math.max(0,w/l*100).toFixed(1):0}%)</div>
            </div>
          </div>

          <div class="card" style="background:rgba(255,255,255,0.03);border:none;padding:16px">
            <h4 style="margin-bottom:12px;font-size:.9rem;color:var(--text-secondary)">経営アドバイス</h4>
            <ul style="font-size:.85rem;line-height:1.6;padding-left:16px;color:var(--text-muted)">
              ${T<15?"<li>利益率が15%を下回っています。移動ルートの最適化を再度実行し、移動時間を削減してください。</li>":""}
              ${l>0&&c/l>.6?"<li>売上に対する人件費率が60%を超えています。1人あたりの訪問件数を増やす調整が必要です。</li>":"<li>人件費率は適正範囲内です。</li>"}
              <li>現在の移動コスト単価は1kmあたり${ki}円で計算されています。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}let se=je(),Ai=null;function Xa(){Ai&&(clearInterval(Ai),Ai=null)}function Zr(i){const[e,n]=(i||"00:00").split(":").map(Number),s=new Date,a=e*60+n-(s.getHours()*60+s.getMinutes());return a>60?`あと約${Math.round(a/60)}時間${a%60>0?a%60+"分":""}`:a>0?`あと約${a}分`:a===0?"今すぐ":a>-60?`${-a}分超過`:"時間を過ぎています"}async function lu(){const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header" style="margin-bottom: 16px;">
      <h1 class="page-title" style="font-size: 1.25rem;">
        <span class="material-icons-round">today</span>
        マイスケジュール
      </h1>
      <div style="display:flex; align-items:center; gap:8px;">
        <button class="btn btn-secondary btn-sm" id="my-prev-day" title="前の日">
          <span class="material-icons-round">chevron_left</span>
          <span class="hide-collapsed">前の日</span>
        </button>
        <input type="date" id="my-date-picker" class="form-input" value="${se}" style="width:150px" />
        <button class="btn btn-secondary btn-sm" id="my-next-day" title="次の日">
          <span class="hide-collapsed">次の日</span>
          <span class="material-icons-round">chevron_right</span>
        </button>
        <button class="btn btn-primary btn-sm" id="my-today-btn">今日</button>
      </div>
    </div>

    <!-- ステータスサマリー -->
    <div class="grid grid-3" style="gap: 8px; margin-bottom: 20px;" id="my-schedule-summary">
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">本日の予定</div>
        <div class="skeleton skeleton-text" style="width:60%"></div>
        <div class="skeleton skeleton-value"></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">完了</div>
        <div class="skeleton skeleton-text" style="width:40%"></div>
        <div class="skeleton skeleton-value"></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">キャンセル</div>
        <div class="skeleton skeleton-text" style="width:50%"></div>
        <div class="skeleton skeleton-value"></div>
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
  `;const e=document.getElementById("my-date-picker");document.getElementById("my-prev-day").addEventListener("click",()=>{const s=new Date(se);s.setDate(s.getDate()-1),se=s.toISOString().slice(0,10),e.value=se,ie(se)}),document.getElementById("my-next-day").addEventListener("click",()=>{const s=new Date(se);s.setDate(s.getDate()+1),se=s.toISOString().slice(0,10),e.value=se,ie(se)}),e.addEventListener("change",s=>{se=s.target.value,ie(se)}),document.getElementById("my-today-btn").addEventListener("click",()=>{se=je(),e.value=se,ie(se)}),document.getElementById("btn-add-sales").addEventListener("click",Ya);const n=es({ArrowLeft:()=>{var s;return(s=document.getElementById("my-prev-day"))==null?void 0:s.click()},ArrowRight:()=>{var s;return(s=document.getElementById("my-next-day"))==null?void 0:s.click()},t:()=>{var s;return(s=document.getElementById("my-today-btn"))==null?void 0:s.click()}});hs(()=>{var s;n(),Xa(),(s=document.getElementById("next-visit-banner"))==null||s.remove(),document.body.classList.remove("has-next-visit-banner")}),await ie(se)}async function ie(i){var e,n,s,a,l;try{const[c,d,m]=await Promise.all([ot(i),oe().catch(()=>[]),fe().catch(()=>[])]),v=window.currentStaffId||null,w=v?c.filter(A=>A.staffId===v):[],T=d.find(A=>A.id===v),E=(T==null?void 0:T.workStart)||"08:30",x=(T==null?void 0:T.workEnd)||"17:30";w.sort((A,g)=>(A.scheduledTime||A.startTime||"").localeCompare(g.scheduledTime||g.startTime||""));const k=document.getElementById("my-schedule-list"),L=w.length,C=w.filter(A=>A.status==="completed").length,P=w.filter(A=>A.status==="cancelled").length;if(document.getElementById("my-schedule-summary").innerHTML=`
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">本日の予定</div>
        <div class="my-summary-value" style="color:var(--primary)">${L}<span class="my-summary-unit">件</span></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">完了</div>
        <div class="my-summary-value" style="color:var(--success)">${C}<span class="my-summary-unit">件</span></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">キャンセル</div>
        <div class="my-summary-value" style="color:var(--danger)">${P}<span class="my-summary-unit">件</span></div>
      </div>
    `,w.length===0){k.innerHTML=`
        <div class="empty-state" style="padding: 40px 20px;">
          <span class="material-icons-round" style="color: var(--success); font-size: 48px;">check_circle_outline</span>
          <h3 style="margin-top: 16px; font-size: 1.1rem;">本日の予定はありません</h3>
          <p style="color:var(--text-muted);font-size:0.85rem;margin-top:8px">休みの日は十分に休んでください</p>
          <div style="margin-top:20px;display:flex;flex-direction:column;gap:8px;align-items:center">
            <button class="btn btn-secondary btn-sm" id="empty-add-sales">
              <span class="material-icons-round">add_business</span>
              スキマ時間に営業予定を追加
            </button>
          </div>
        </div>
      `,(e=document.getElementById("empty-add-sales"))==null||e.addEventListener("click",Ya);return}Xa(),(n=document.getElementById("next-visit-banner"))==null||n.remove(),document.body.classList.remove("has-next-visit-banner");const $=w.find(A=>A.status==="scheduled"||!A.status);if($){const A=m.find(_=>_.id===$.clientId),g=A!=null&&A.address?encodeURIComponent(A.address):A!=null&&A.lat&&(A!=null&&A.lng)?`${A.lat},${A.lng}`:encodeURIComponent($.clientName||""),h=$.scheduledTime||$.startTime||"",p=`
        <div class="next-visit-banner" id="next-visit-banner" role="region" aria-label="次の訪問">
          <div class="next-visit-info">
            <span class="material-icons-round" style="color:var(--primary);font-size:28px" aria-hidden="true">directions_walk</span>
            <div style="min-width:0">
              <div class="next-visit-label">次の訪問</div>
              <div class="next-visit-name">${K($.clientName)}${$.type!=="sales"?" 様":""}</div>
              <div class="next-visit-time">${K(h)} <span class="next-visit-countdown" id="next-visit-countdown">${K(Zr(h))}</span></div>
            </div>
          </div>
          <div class="next-visit-actions">
            ${g?`
              <a href="https://maps.google.com/?daddr=${g}" target="_blank" rel="noopener noreferrer"
                 class="btn btn-secondary btn-sm" aria-label="Googleマップでナビ開始">
                <span class="material-icons-round" aria-hidden="true">navigation</span>
              </a>
            `:""}
            <button class="btn btn-primary btn-sm" id="banner-complete-btn" aria-label="この訪問を完了" data-id="${$.id}">
              <span class="material-icons-round" aria-hidden="true">check_circle</span>
              完了
            </button>
          </div>
        </div>
      `;document.body.insertAdjacentHTML("beforeend",p),document.body.classList.add("has-next-visit-banner"),Ai=setInterval(()=>{const _=document.getElementById("next-visit-countdown");_&&(_.textContent=Zr(h))},3e4),(s=document.getElementById("banner-complete-btn"))==null||s.addEventListener("click",async()=>{try{await ce($.id,{status:"completed"}),N("訪問を完了しました","success",5e3,async()=>{await ce($.id,{status:"scheduled"}),N("取り消しました","info"),ie(i)}),ie(i)}catch{N("あとで同期します","warning")}})}let O="";const M=`careroute_punch_${v}_${i}`,R=JSON.parse(localStorage.getItem(M)||"{}");O+=`
      <div class="timeline-item">
        <div class="timeline-axis">
          <div class="timeline-time muted">${E}</div>
          <div class="timeline-dot-sm" style="background:var(--secondary)"></div>
          <div class="timeline-connector" style="height:40px"></div>
        </div>
        <div class="card timeline-card office punch-card" id="punch-depart">
          <div style="display:flex;align-items:center;gap:8px">
            <span class="material-icons-round" style="color:var(--secondary)">business</span>
            <div>
              <span style="font-weight:600;color:var(--text-secondary)">事業所 出発</span>
              ${R.start?`<div class="punch-time-actual"><span class="material-icons-round" style="font-size:12px;vertical-align:middle">check_circle</span> ${R.start} 出発済み</div>`:'<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">タップして出発時刻を記録</div>'}
            </div>
          </div>
        </div>
      </div>
    `,w.forEach((A,g)=>{const h=A.type==="sales",p=A.duration||60,_=A.status||"scheduled";let y="var(--primary)",I="",f="",U="";_==="completed"?(y="var(--success)",I='<span class="material-icons-round" style="color:var(--success)">check_circle</span>',U=`<button class="tag btn-undo-complete" data-id="${A.id}" style="background:var(--success);color:white;border:none;cursor:pointer" title="クリックで取り消し">完了 ✓</button>`):_==="cancelled"?(y="var(--danger)",I='<span class="material-icons-round" style="color:var(--danger)">cancel</span>',U=`<span class="tag" style="background:var(--danger); color:white;">キャンセル: ${K(A.cancelReason||"理由なし")}</span>`):f=`
          <div class="visit-actions">
            <button class="btn btn-complete-large btn-complete-visit" data-id="${A.id}">
              <span class="material-icons-round">check_circle</span>
              完了にする
            </button>
            <button class="btn-cancel-text btn-cancel-visit" data-id="${A.id}">
              キャンセルとして記録する
            </button>
          </div>
        `;const G=h?"var(--warning)":y;O+=`
        <div class="timeline-item">
          <div class="timeline-axis">
            <div class="timeline-time${_!=="scheduled"?" muted":""}">${A.scheduledTime||A.startTime||"--:--"}</div>
            <div class="timeline-dot" style="background:${G};color:${G}"></div>
            <div class="timeline-connector" style="height:100px"></div>
          </div>
          <div class="card timeline-card" style="border-left-color:${G};opacity:${_!=="scheduled"?"0.7":"1"}">
            ${_==="scheduled"?'<div class="swipe-hint left">← キャンセル</div><div class="swipe-hint right">完了 →</div>':""}
            <div class="timeline-card-header">
              <h3 class="timeline-card-title">
                ${h?'<span class="material-icons-round" style="color:var(--warning);font-size:1.1rem">storefront</span>':""}
                ${K(A.clientName)} ${h?"":"様"}
              </h3>
              ${U||`<span class="tag" style="background:var(--bg-surface)">${p}分</span>`}
            </div>
            ${I?`<div style="display:flex;align-items:center;gap:4px;margin-bottom:8px">${I}</div>`:`
              <div style="font-size:0.85rem;color:var(--text-secondary);display:flex;align-items:center;gap:4px;margin-bottom:12px">
                <span class="material-icons-round" style="font-size:16px">location_on</span>
                <span>ルートを確認</span>
              </div>
            `}
            ${f}
          </div>
        </div>
      `}),O+=`
      <div class="timeline-item">
        <div class="timeline-axis">
          <div class="timeline-time muted">${x}</div>
          <div class="timeline-dot-sm" style="background:var(--secondary)"></div>
        </div>
        <div class="card timeline-card office punch-card" id="punch-arrive">
          <div style="display:flex;align-items:center;gap:8px">
            <span class="material-icons-round" style="color:var(--secondary)">business</span>
            <div>
              <span style="font-weight:600;color:var(--text-secondary)">事業所 帰着</span>
              ${R.end?`<div class="punch-time-actual"><span class="material-icons-round" style="font-size:12px;vertical-align:middle">check_circle</span> ${R.end} 帰着済み</div>`:'<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">タップして帰着時刻を記録</div>'}
            </div>
          </div>
        </div>
      </div>
    `,k.innerHTML=O,document.querySelectorAll(".btn-complete-visit").forEach(A=>{A.addEventListener("click",async g=>{const h=g.currentTarget.dataset.id;try{await ce(h,{status:"completed"}),N("訪問を完了しました","success",5e3,async()=>{await ce(h,{status:"scheduled"}),N("取り消しました","info"),ie(i)}),ie(i)}catch{N("あとで同期します","warning")}})}),document.querySelectorAll(".btn-cancel-visit").forEach(A=>{A.addEventListener("click",g=>{const h=g.currentTarget.dataset.id;ea(h,i)})}),document.querySelectorAll(".btn-undo-complete").forEach(A=>{A.addEventListener("click",async g=>{const h=g.currentTarget.dataset.id;if(await ge("完了を取り消す","この訪問の「完了」を取り消して予定に戻しますか？"))try{await ce(h,{status:"scheduled"}),N("完了を取り消しました","info"),ie(i)}catch{N("あとで同期します","warning")}})}),(a=document.getElementById("punch-depart"))==null||a.addEventListener("click",async()=>{const A=new Date,g=`${String(A.getHours()).padStart(2,"0")}:${String(A.getMinutes()).padStart(2,"0")}`,h=JSON.parse(localStorage.getItem(M)||"{}");h.start&&!await ge("出発時刻を上書き",`記録済みの出発時刻 ${h.start} を ${g} に上書きしますか？`)||(h.start=g,localStorage.setItem(M,JSON.stringify(h)),N(`出発時刻 ${g} を記録しました`,"success"),ie(i))}),(l=document.getElementById("punch-arrive"))==null||l.addEventListener("click",async()=>{const A=new Date,g=`${String(A.getHours()).padStart(2,"0")}:${String(A.getMinutes()).padStart(2,"0")}`,h=JSON.parse(localStorage.getItem(M)||"{}");h.end&&!await ge("帰着時刻を上書き",`記録済みの帰着時刻 ${h.end} を ${g} に上書きしますか？`)||(h.end=g,localStorage.setItem(M,JSON.stringify(h)),N(`帰着時刻 ${g} を記録しました`,"success"),ie(i))}),document.querySelectorAll(".timeline-card:not(.office)").forEach((A,g)=>{const h=w[g];if(!h||h.status!=="scheduled")return;let p=0;const _=A.querySelector(".swipe-hint.left"),y=A.querySelector(".swipe-hint.right");A.addEventListener("touchstart",I=>{p=I.touches[0].clientX,A.classList.add("swipe-active")},{passive:!0}),A.addEventListener("touchmove",I=>{const f=I.touches[0].clientX-p;A.style.transform=`translateX(${f*.4}px)`,y&&(y.style.opacity=f>30?"1":"0"),_&&(_.style.opacity=f<-30?"1":"0")},{passive:!0}),A.addEventListener("touchend",async I=>{const f=I.changedTouches[0].clientX-p;A.style.transform="",A.classList.remove("swipe-active"),y&&(y.style.opacity="0"),_&&(_.style.opacity="0"),f>80?(await ce(h.id,{status:"completed"}),N("訪問を完了しました","success",5e3,async()=>{await ce(h.id,{status:"scheduled"}),N("取り消しました","info"),ie(i)}),ie(i)):f<-80&&ea(h.id,i)})})}catch(c){console.error("マイスケジュール取得エラー:",c),document.getElementById("my-schedule-list").innerHTML=`
      <div class="empty-state" style="color: var(--danger);">
        <span class="material-icons-round">error</span>
        <p>スケジュールの取得に失敗しました</p>
      </div>
    `}}function ea(i,e){var c;const n=document.getElementById("modal-overlay"),s=document.getElementById("modal-title"),a=document.getElementById("modal-body"),l=document.getElementById("modal-footer");s.innerHTML='<span class="material-icons-round" style="color:var(--danger)" aria-hidden="true">cancel</span> キャンセル理由を選択',a.innerHTML=`
    <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px;">
      タップで即登録されます。間違えた場合はトースト通知から「元に戻す」を押してください。
    </p>
    <div class="cancel-chip-group" role="group" aria-label="キャンセル理由">
      ${Ud.map((d,m)=>`
        <button type="button" class="cancel-chip" data-reason="${K(d)}" autofocus="${m===0?"true":"false"}">
          <span class="material-icons-round" aria-hidden="true">close</span>
          <span>${K(d)}</span>
        </button>
      `).join("")}
    </div>
    <details class="cancel-notes-details" style="margin-top:12px">
      <summary style="cursor:pointer; color:var(--text-secondary); font-size:0.85rem; padding:6px 0;">
        備考を追加する (任意)
      </summary>
      <textarea id="cancel-notes" class="form-input" rows="3" placeholder="詳細な状況があれば記入" style="margin-top:6px;"></textarea>
    </details>
  `,l.innerHTML=`
    <button class="btn btn-secondary" id="btn-cancel-close">閉じる</button>
  `,n.style.display="flex",n.setAttribute("aria-hidden","false"),ts(n),(c=document.getElementById("btn-cancel-close"))==null||c.addEventListener("click",Y),a.querySelectorAll(".cancel-chip").forEach(d=>{d.addEventListener("click",async()=>{var w;const m=d.dataset.reason,v=((w=document.getElementById("cancel-notes"))==null?void 0:w.value)||"";Y();try{await ce(i,{status:"cancelled",cancelReason:m,cancelNotes:v}),N(`キャンセル登録: ${m}`,"success",5e3,async()=>{await ce(i,{status:"scheduled",cancelReason:null,cancelNotes:null}),N("取り消しました","info"),ie(e)}),ie(e)}catch{N("あとで同期します","warning")}})})}function Ya(){var l;const i=se,e=document.getElementById("modal-overlay"),n=document.getElementById("modal-title"),s=document.getElementById("modal-body"),a=document.getElementById("modal-footer");n.innerHTML='<span class="material-icons-round" style="color:var(--warning)">storefront</span> 営業予定の追加',s.innerHTML=`
    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
      スキマ時間を活用したアポなし訪問などの営業活動を記録します。
    </p>
    <div class="form-group">
      <label class="form-label">訪問先カテゴリ</label>
      <select id="sales-target-select" class="form-input">
        ${Wd.map(c=>`<option value="${c}">${c}</option>`).join("")}
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
          ${Fd.map(c=>`<option value="${c}">${c}</option>`).join("")}
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
  `,a.innerHTML=`
    <button class="btn btn-secondary" id="btn-sales-close">キャンセル</button>
    <button class="btn btn-primary" id="btn-submit-sales">予定を追加</button>
  `,e.style.display="flex",e.setAttribute("aria-hidden","false"),ts(e),(l=document.getElementById("btn-sales-close"))==null||l.addEventListener("click",Y),document.getElementById("btn-submit-sales").addEventListener("click",async()=>{var w;const c=document.getElementById("sales-client-name").value.trim();if(!c){N("訪問先名を入力してください","warning");return}const d=document.getElementById("sales-target-select").value,m=document.getElementById("sales-start-time").value,v=parseInt(document.getElementById("sales-duration").value,10);try{await qi({staffId:window.currentStaffId||null,staffName:((w=document.getElementById("user-name"))==null?void 0:w.textContent)||"スタッフ",clientId:"sales_"+Date.now(),clientName:c,date:i,startTime:m,scheduledTime:m,duration:v,type:"sales",salesTarget:d,status:"scheduled"}),N("営業予定を追加しました","success"),Y(),ie(i)}catch(T){console.error(T),N("追加に失敗しました","error")}})}const cu={calendar:{render:it,title:"全体スケジュール"},schedule:{render:Hd,title:"日別スケジュール確認"},map:{render:jd,title:"日別ルートマップ"},dashboard:{render:xd,title:"ダッシュボード"},staff:{render:ls,title:"職員管理"},client:{render:cs,title:"利用者管理"},matching:{render:Ga,title:"特定日の手動調整"},revenue:{render:ou,title:"収支シミュレーション"},"my-schedule":{render:lu,title:"マイスケジュール"}};let xi=null;function hs(i){xi=i}function du(){var a,l,c,d;document.querySelectorAll(".nav-item").forEach(m=>{m.addEventListener("click",()=>{const v=m.dataset.page;v&&ve(v)})}),(a=document.getElementById("btn-sidebar-toggle"))==null||a.addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("collapsed")});const e=document.getElementById("sidebar"),n=document.getElementById("sidebar-overlay"),s=()=>{var v;const m=e.classList.toggle("open");n.classList.toggle("open"),(v=document.getElementById("btn-mobile-menu"))==null||v.setAttribute("aria-expanded",String(m))};(l=document.getElementById("btn-mobile-menu"))==null||l.addEventListener("click",s),n==null||n.addEventListener("click",s),(c=document.getElementById("btn-modal-close"))==null||c.addEventListener("click",Y),(d=document.getElementById("modal-overlay"))==null||d.addEventListener("click",m=>{m.target===m.currentTarget&&Y()})}async function ve(i){var s,a,l;const e=cu[i];if(!e)return;if(xi){try{xi()}catch(c){console.warn("page cleanup error",c)}xi=null}if(window.isAdmin===!1&&i!=="my-schedule"){console.warn("アクセス権限がありません:",i);return}document.querySelectorAll(".nav-item").forEach(c=>{c.classList.toggle("active",c.dataset.page===i)}),(s=document.getElementById("sidebar"))==null||s.classList.remove("open"),(a=document.getElementById("sidebar-overlay"))==null||a.classList.remove("open"),i!=="my-schedule"&&((l=document.getElementById("next-visit-banner"))==null||l.remove(),document.body.classList.remove("has-next-visit-banner")),document.title=`${e.title} - CareRoute`;const n=document.getElementById("page-container");n.innerHTML='<div class="loading"><div class="spinner"></div></div>';try{await e.render()}catch(c){console.error(`ページ「${e.title}」の表示エラー:`,c),n.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${c.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `}}const ta=[{id:"staff_2",name:"前川さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_3",name:"水口さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"18:01",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018},{id:"staff_4",name:"横家さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","火","水","木","金"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#F59E0B",isActive:!0,lat:35.443,lng:137.018},{id:"staff_5",name:"木澤さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["火","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#8B5CF6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_6",name:"圭子さん",gender:"女性",type:"パート",workStart:"07:50",workEnd:"16:00",days:["月","火","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:[]},color:"#EC4899",isActive:!0,lat:35.443,lng:137.018},{id:"staff_7",name:"藤吉さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"12:00",days:["火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["ペット可"]},color:"#14B8A6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_8",name:"ちえみさん",gender:"女性",type:"パート",workStart:"13:00",workEnd:"17:00",days:["月","火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#F97316",isActive:!0,lat:35.443,lng:137.018},{id:"staff_9",name:"棚橋さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["火","水","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#6366F1",isActive:!0,lat:35.443,lng:137.018},{id:"staff_10",name:"高井さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"14:00",days:["火","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理"]},color:"#84CC16",isActive:!0,lat:35.443,lng:137.018},{id:"staff_11",name:"小沢さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"16:00",days:["月","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#0EA5E9",isActive:!0,lat:35.443,lng:137.018},{id:"staff_12",name:"若尾さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["月","火","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#3B82F6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_13",name:"小川さん",gender:"女性",type:"パート",workStart:"08:20",workEnd:"17:00",days:["月","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_14",name:"井戸さん",gender:"女性",type:"パート",workStart:"07:30",workEnd:"16:00",days:["月","火","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018}],ia=[{id:"client_1",name:"中村晃",genderPreference:"指定なし",address:"関市東新町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.497156833927576,lng:136.91472248776176,isActive:!0,area:"関市"},{id:"client_2",name:"今井 幸",genderPreference:"指定なし",address:"可児市今渡1334番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.429546564671064,lng:137.06448192237502,isActive:!0,area:"可児市"},{id:"client_3",name:"佐合愛",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441449916213905,lng:137.00859676668438,isActive:!0,area:"美濃加茂市"},{id:"client_4",name:"佐藤 平",genderPreference:"指定なし",address:"関市小野1378番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.496713667191365,lng:136.91611792725212,isActive:!0,area:"関市"},{id:"client_5",name:"佐藤 惠",genderPreference:"指定なし",address:"加茂郡富加町羽生1439-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49350458855056,lng:137.00284647997333,isActive:!0,area:"加茂郡富加町"},{id:"client_6",name:"内田 鉄",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1247",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43919134426946,lng:137.0179669717769,isActive:!0,area:"美濃加茂市"},{id:"client_7",name:"冨田 勝",genderPreference:"女性希望",address:"美濃加茂市蜂屋町中蜂屋1475番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.433236929814676,lng:137.0206065781048,isActive:!0,area:"美濃加茂市"},{id:"client_8",name:"前川 み",genderPreference:"指定なし",address:"美濃加茂市森山町3-4-28",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.447385010380714,lng:137.0241786951649,isActive:!0,area:"美濃加茂市"},{id:"client_9",name:"加藤 民",genderPreference:"指定なし",address:"加茂郡川辺町中川辺1220番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.475384399265096,lng:137.06390768355888,isActive:!0,area:"加茂郡川辺町"},{id:"client_10",name:"加藤 雪",genderPreference:"指定なし",address:"可児市松伏3-4",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.42952101999053,lng:137.06996025815,isActive:!0,area:"可児市"},{id:"client_11",name:"吉村 強",genderPreference:"女性希望",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45175401563851,lng:137.02161473049864,isActive:!0,area:"美濃加茂市"},{id:"client_12",name:"吉田あ",genderPreference:"指定なし",address:"関市西田原",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49115464552958,lng:136.92399997463878,isActive:!0,area:"関市"},{id:"client_13",name:"和田 隆",genderPreference:"指定なし",address:"加茂郡川辺町石神84番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48236841267637,lng:137.07760456602477,isActive:!0,area:"加茂郡川辺町"},{id:"client_14",name:"土岐 吉",genderPreference:"指定なし",address:"美濃加茂市加茂野町市橋836-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44162170104763,lng:137.0262114717999,isActive:!0,area:"美濃加茂市"},{id:"client_15",name:"土岐 雅",genderPreference:"指定なし",address:"加茂郡富加町羽生1453-20",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.488517359713484,lng:136.99491575096658,isActive:!0,area:"加茂郡富加町"},{id:"client_16",name:"大森 君",genderPreference:"女性希望",address:"加茂郡富加町高畑637-3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50099328128151,lng:136.98455151897673,isActive:!0,area:"加茂郡富加町"},{id:"client_17",name:"大橋ひさ",genderPreference:"女性希望",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.438385496082404,lng:137.02562783976515,isActive:!0,area:"美濃加茂市"},{id:"client_18",name:"天野慧",genderPreference:"指定なし",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.434155101090184,lng:137.02364638342797,isActive:!0,area:"美濃加茂市"},{id:"client_19",name:"奥田 邦",genderPreference:"指定なし",address:"加茂郡川辺町石神9778-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494079651227416,lng:137.07228502934993,isActive:!0,area:"加茂郡川辺町"},{id:"client_20",name:"安田 正",genderPreference:"女性希望",address:"関市東町4-3-24",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.498558378964844,lng:136.93317629557282,isActive:!0,area:"関市"},{id:"client_21",name:"安藤 悦治",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4458132002014,lng:137.0128572203751,isActive:!0,area:"美濃加茂市"},{id:"client_22",name:"宮本伸",genderPreference:"指定なし",address:"美濃加茂市上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43490869964852,lng:137.01386742162063,isActive:!0,area:"美濃加茂市"},{id:"client_23",name:"宮田 薫",genderPreference:"指定なし",address:"加茂郡富加町高畑637番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4893904414253,lng:136.9951458803918,isActive:!0,area:"加茂郡富加町"},{id:"client_24",name:"富田 菊",genderPreference:"指定なし",address:"可児市矢戸1445番地34",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.435752761721716,lng:137.0651931080912,isActive:!0,area:"可児市"},{id:"client_25",name:"小原 強",genderPreference:"指定なし",address:"美濃加茂市下米田町則光329番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441734590435274,lng:137.0125176746724,isActive:!0,area:"美濃加茂市"},{id:"client_26",name:"岡田 洋",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋1674番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4365047823305,lng:137.01270107633286,isActive:!0,area:"美濃加茂市"},{id:"client_27",name:"岩﨑 嬉",genderPreference:"指定なし",address:"美濃加茂市加茂川町３丁目４番７号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43346804141193,lng:137.01932833342485,isActive:!0,area:"美濃加茂市"},{id:"client_28",name:"川崎 イ",genderPreference:"指定なし",address:"加茂郡富加町滝田151番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.496723988527705,lng:136.9997990843252,isActive:!0,area:"加茂郡富加町"},{id:"client_29",name:"平田 裕",genderPreference:"指定なし",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.449511651048645,lng:137.00972072094092,isActive:!0,area:"美濃加茂市"},{id:"client_30",name:"平田あ",genderPreference:"女性希望",address:"加茂郡富加町羽生",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49517050409468,lng:136.9856735080124,isActive:!0,area:"加茂郡富加町"},{id:"client_31",name:"廣 強",genderPreference:"指定なし",address:"美濃加茂市牧野1076-75",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44218112119725,lng:137.01104910417206,isActive:!0,area:"美濃加茂市"},{id:"client_32",name:"斉藤真",genderPreference:"指定なし",address:"関市北天神",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48797634825378,lng:136.9143700838785,isActive:!0,area:"関市"},{id:"client_33",name:"日比野 奥",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.437015399250406,lng:137.00906805366205,isActive:!0,area:"美濃加茂市"},{id:"client_34",name:"日比野 由",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43337070077588,lng:137.0244453376369,isActive:!0,area:"美濃加茂市"},{id:"client_35",name:"日比野 直",genderPreference:"女性希望",address:"美濃加茂市清水町2-3-17",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44642678990315,lng:137.01795349522274,isActive:!0,area:"美濃加茂市"},{id:"client_36",name:"木村 光",genderPreference:"指定なし",address:"美濃加茂市太田町2600番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.435371997376876,lng:137.01108131268214,isActive:!0,area:"美濃加茂市"},{id:"client_37",name:"木澤 博",genderPreference:"指定なし",address:"加茂郡富加町加治田3461番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.506303390707046,lng:136.99104467350202,isActive:!0,area:"加茂郡富加町"},{id:"client_38",name:"木澤 照",genderPreference:"女性希望",address:"加茂郡川辺町石神215-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4880086414237,lng:137.07289353288346,isActive:!0,area:"加茂郡川辺町"},{id:"client_39",name:"杉島 希",genderPreference:"指定なし",address:"加茂郡富加町滝田283-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50110204409342,lng:136.98395012382613,isActive:!0,area:"加茂郡富加町"},{id:"client_40",name:"村仲 尚",genderPreference:"女性希望",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.438698758555574,lng:137.02193085044868,isActive:!0,area:"美濃加茂市"},{id:"client_41",name:"村仲 鍬",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452301436877214,lng:137.02067008781682,isActive:!0,area:"美濃加茂市"},{id:"client_42",name:"松元 良",genderPreference:"女性希望",address:"美濃加茂市本郷町1丁目1番26号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.43827103816531,lng:137.01191566430634,isActive:!0,area:"美濃加茂市"},{id:"client_43",name:"栗山 年",genderPreference:"指定なし",address:"加茂郡富加町高畑258番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494121986748645,lng:136.98518245423062,isActive:!0,area:"加茂郡富加町"},{id:"client_44",name:"櫻井 あ",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉773番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.45138892205426,lng:137.01422771742352,isActive:!0,area:"美濃加茂市"},{id:"client_45",name:"河野 仁",genderPreference:"指定なし",address:"加茂郡富加町羽生909-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.490271641834966,lng:136.98727323288463,isActive:!0,area:"加茂郡富加町"},{id:"client_46",name:"浅野",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45202959233498,lng:137.01566783519402,isActive:!0,area:"美濃加茂市"},{id:"client_47",name:"渡邉 文",genderPreference:"指定なし",address:"加茂郡川辺町比久見505番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49415672848246,lng:137.0639961091595,isActive:!0,area:"加茂郡川辺町"},{id:"client_48",name:"渡邉直",genderPreference:"女性希望",address:"美濃加茂市蜂屋町上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43872942558895,lng:137.01354730683613,isActive:!0,area:"美濃加茂市"},{id:"client_49",name:"瀧戸 邦",genderPreference:"指定なし",address:"加茂郡富加町高畑815-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49012105422854,lng:137.00036018284152,isActive:!0,area:"加茂郡富加町"},{id:"client_50",name:"石原 ヤ",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50124112017079,lng:136.98382202932007,isActive:!0,area:"加茂郡富加町"},{id:"client_51",name:"石原 孝",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49328324234597,lng:136.9835128247142,isActive:!0,area:"加茂郡富加町"},{id:"client_52",name:"石田 友",genderPreference:"指定なし",address:"関市大杉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49271720267115,lng:136.91679407643252,isActive:!0,area:"関市"},{id:"client_53",name:"神園 昭",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1552-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445736819174996,lng:137.02080207291,isActive:!0,area:"美濃加茂市"},{id:"client_54",name:"細田 と",genderPreference:"指定なし",address:"加茂郡川辺町比久見927番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49138118249907,lng:137.0669797974694,isActive:!0,area:"加茂郡川辺町"},{id:"client_55",name:"織部 恒",genderPreference:"女性希望",address:"加茂郡富加町大山561-2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4956482083646,lng:136.98479580431297,isActive:!0,area:"加茂郡富加町"},{id:"client_56",name:"纐纈 芳",genderPreference:"指定なし",address:"美濃加茂市田島町2-1-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45002813499261,lng:137.0212204400497,isActive:!0,area:"美濃加茂市"},{id:"client_57",name:"纐纈美",genderPreference:"指定なし",address:"美濃加茂市大手町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4391119160273,lng:137.02387050933302,isActive:!0,area:"美濃加茂市"},{id:"client_58",name:"肥田 太",genderPreference:"指定なし",address:"可児市下恵土4146-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4312051032861,lng:137.05456974028345,isActive:!0,area:"可児市"},{id:"client_59",name:"菊池 二",genderPreference:"指定なし",address:"美濃加茂市加茂野町鷹之巣1712番地13",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44067140824593,lng:137.00812252064713,isActive:!0,area:"美濃加茂市"},{id:"client_60",name:"酒向 み",genderPreference:"指定なし",address:"美濃加茂市下米田町東栃井173番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.439305854394995,lng:137.02599237626308,isActive:!0,area:"美濃加茂市"},{id:"client_61",name:"鈴木 春",genderPreference:"女性希望",address:"美濃加茂市蜂屋町伊瀬920",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445308304721735,lng:137.02055837255097,isActive:!0,area:"美濃加茂市"},{id:"client_62",name:"長沼 善",genderPreference:"指定なし",address:"美濃加茂市富加町加治田665",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452051259062436,lng:137.01855573983298,isActive:!0,area:"美濃加茂市"},{id:"client_63",name:"馬場 と",genderPreference:"女性希望",address:"美濃加茂市太田町3519-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44993124386665,lng:137.02104853551123,isActive:!0,area:"美濃加茂市"},{id:"client_64",name:"高山 智",genderPreference:"指定なし",address:"美濃加茂市牧野1941番地16",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44532882741129,lng:137.00968272003644,isActive:!0,area:"美濃加茂市"},{id:"client_65",name:"髙井 千",genderPreference:"女性希望",address:"加茂郡富加町羽生1751番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.505370248825024,lng:136.9927463803301,isActive:!0,area:"加茂郡富加町"},{id:"client_66",name:"鹿野 和",genderPreference:"指定なし",address:"美濃加茂市山之上町1538番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44890607991325,lng:137.01711922971506,isActive:!0,area:"美濃加茂市"},{id:"client_67",name:"鹿野 義",genderPreference:"指定なし",address:"美濃加茂市山之上町6260番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43761631928377,lng:137.01824050932268,isActive:!0,area:"美濃加茂市"}],na=[{id:"visit_1",clientId:"client_46",dayOfWeek:"金",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_2",clientId:"client_18",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_3",clientId:"client_21",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_4",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"生活２・１７９０円"},{id:"visit_6",clientId:"client_52",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_7",clientId:"client_52",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_8",clientId:"client_52",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_9",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_10",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_11",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_12",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_13",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_14",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_28",clientId:"client_50",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2200,serviceInfo:"生活３・２２００円"},{id:"visit_29",clientId:"client_50",dayOfWeek:"水",startTime:"12:30",endTime:"14:00",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_30",clientId:"client_2",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_31",clientId:"client_27",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_32",clientId:"client_6",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_33",clientId:"client_17",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:5870,serviceInfo:"障害身体・５８７０円・１２００円"},{id:"visit_34",clientId:"client_17",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_35",clientId:"client_17",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_36",clientId:"client_16",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_37",clientId:"client_26",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_38",clientId:"client_19",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_39",clientId:"client_19",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_40",clientId:"client_25",dayOfWeek:"月",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_41",clientId:"client_25",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_42",clientId:"client_25",dayOfWeek:"木",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_43",clientId:"client_25",dayOfWeek:"水",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_44",clientId:"client_25",dayOfWeek:"金",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_45",clientId:"client_55",dayOfWeek:"月",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_46",clientId:"client_55",dayOfWeek:"土",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_47",clientId:"client_9",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_48",clientId:"client_9",dayOfWeek:"火",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_49",clientId:"client_9",dayOfWeek:"木",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_50",clientId:"client_9",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_51",clientId:"client_9",dayOfWeek:"土",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_52",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_53",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_54",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_58",clientId:"client_9",dayOfWeek:"月",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_59",clientId:"client_9",dayOfWeek:"土",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_60",clientId:"client_9",dayOfWeek:"火",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_61",clientId:"client_9",dayOfWeek:"金",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_62",clientId:"client_9",dayOfWeek:"木",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_63",clientId:"client_10",dayOfWeek:"水",startTime:"10:00",endTime:"11:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_64",clientId:"client_10",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_65",clientId:"client_53",dayOfWeek:"水",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_66",clientId:"client_28",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_67",clientId:"client_28",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_68",clientId:"client_45",dayOfWeek:"金",startTime:"09:15",endTime:"10:15",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_69",clientId:"client_59",dayOfWeek:"月",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_70",clientId:"client_59",dayOfWeek:"水",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_71",clientId:"client_59",dayOfWeek:"金",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_72",clientId:"client_38",dayOfWeek:"月",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_73",clientId:"client_38",dayOfWeek:"水",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_74",clientId:"client_38",dayOfWeek:"金",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_75",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_76",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_77",clientId:"client_37",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_80",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_82",clientId:"client_37",dayOfWeek:"水",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_83",clientId:"client_37",dayOfWeek:"木",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_84",clientId:"client_37",dayOfWeek:"火",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_85",clientId:"client_37",dayOfWeek:"土",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_86",clientId:"client_37",dayOfWeek:"火",startTime:"17:00",endTime:"17:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_87",clientId:"client_37",dayOfWeek:"水",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_88",clientId:"client_37",dayOfWeek:"木",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_89",clientId:"client_36",dayOfWeek:"月",startTime:"15:30",endTime:"16:30",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_90",clientId:"client_36",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_91",clientId:"client_36",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_92",clientId:"client_57",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_93",clientId:"client_43",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_94",clientId:"client_43",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_95",clientId:"client_43",dayOfWeek:"金",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_96",clientId:"client_43",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_97",clientId:"client_56",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害・４０４０円・１２００円"},{id:"visit_98",clientId:"client_32",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_99",clientId:"client_44",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_100",clientId:"client_44",dayOfWeek:"火",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_101",clientId:"client_44",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_102",clientId:"client_44",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_103",clientId:"client_60",dayOfWeek:"火",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_104",clientId:"client_60",dayOfWeek:"木",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_105",clientId:"client_60",dayOfWeek:"土",startTime:"08:10",endTime:"09:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_106",clientId:"client_3",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_107",clientId:"client_3",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_108",clientId:"client_5",dayOfWeek:"水",startTime:"12:00",endTime:"13:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_109",clientId:"client_4",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_110",clientId:"client_4",dayOfWeek:"火",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_111",clientId:"client_4",dayOfWeek:"水",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_112",clientId:"client_4",dayOfWeek:"木",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_113",clientId:"client_4",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_114",clientId:"client_4",dayOfWeek:"土",startTime:"16:30",endTime:"17:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_115",clientId:"client_66",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_116",clientId:"client_67",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_117",clientId:"client_39",dayOfWeek:"月",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_118",clientId:"client_61",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_119",clientId:"client_61",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_120",clientId:"client_65",dayOfWeek:"月",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_121",clientId:"client_65",dayOfWeek:"火",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_122",clientId:"client_65",dayOfWeek:"水",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_123",clientId:"client_65",dayOfWeek:"木",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_124",clientId:"client_65",dayOfWeek:"金",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_125",clientId:"client_65",dayOfWeek:"土",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_126",clientId:"client_65",dayOfWeek:"月",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_127",clientId:"client_65",dayOfWeek:"水",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_128",clientId:"client_65",dayOfWeek:"木",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_129",clientId:"client_65",dayOfWeek:"金",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_130",clientId:"client_65",dayOfWeek:"土",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_131",clientId:"client_65",dayOfWeek:"火",startTime:"12:10",endTime:"12:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_132",clientId:"client_65",dayOfWeek:"月",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_133",clientId:"client_65",dayOfWeek:"水",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_134",clientId:"client_65",dayOfWeek:"火",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_135",clientId:"client_65",dayOfWeek:"金",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_136",clientId:"client_65",dayOfWeek:"土",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_137",clientId:"client_64",dayOfWeek:"火",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_138",clientId:"client_64",dayOfWeek:"木",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_139",clientId:"client_64",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_140",clientId:"client_49",dayOfWeek:"水",startTime:"12:15",endTime:"13:15",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_141",clientId:"client_49",dayOfWeek:"土",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_142",clientId:"client_14",dayOfWeek:"水",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_143",clientId:"client_15",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_144",clientId:"client_15",dayOfWeek:"水",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_145",clientId:"client_15",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_146",clientId:"client_24",dayOfWeek:"火",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_147",clientId:"client_24",dayOfWeek:"木",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_148",clientId:"client_7",dayOfWeek:"月",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_149",clientId:"client_7",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_150",clientId:"client_1",dayOfWeek:"月",startTime:"15:30",endTime:"16:00",duration:60,income:3090,serviceInfo:"障害家事・１０６０円・１０１０円"},{id:"visit_151",clientId:"client_1",dayOfWeek:"水",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_152",clientId:"client_1",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_153",clientId:"client_62",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_154",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_156",clientId:"client_58",dayOfWeek:"月",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_157",clientId:"client_58",dayOfWeek:"水",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_158",clientId:"client_58",dayOfWeek:"火",startTime:"11:45",endTime:"12:15",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_159",clientId:"client_58",dayOfWeek:"木",startTime:"13:00",endTime:"13:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_160",clientId:"client_58",dayOfWeek:"金",startTime:"12:30",endTime:"13:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_161",clientId:"client_33",dayOfWeek:"木",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_162",clientId:"client_35",dayOfWeek:"月",startTime:"10:40",endTime:"11:40",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_163",clientId:"client_34",dayOfWeek:"火",startTime:"07:30",endTime:"08:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_164",clientId:"client_30",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_165",clientId:"client_29",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_166",clientId:"client_31",dayOfWeek:"木",startTime:"09:30",endTime:"10:20",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_167",clientId:"client_54",dayOfWeek:"火",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_168",clientId:"client_54",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_169",clientId:"client_54",dayOfWeek:"木",startTime:"08:15",endTime:"09:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_170",clientId:"client_8",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_171",clientId:"client_42",dayOfWeek:"火",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_172",clientId:"client_42",dayOfWeek:"金",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_173",clientId:"client_42",dayOfWeek:"水",startTime:"14:45",endTime:"16:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_174",clientId:"client_23",dayOfWeek:"土",startTime:"15:00",endTime:"15:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_175",clientId:"client_22",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_176",clientId:"client_41",dayOfWeek:"火",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_177",clientId:"client_40",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_178",clientId:"client_40",dayOfWeek:"木",startTime:"11:45",endTime:"12:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_179",clientId:"client_40",dayOfWeek:"金",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_180",clientId:"client_20",dayOfWeek:"月",startTime:"17:00",endTime:"18:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_181",clientId:"client_12",dayOfWeek:"火",startTime:"15:30",endTime:"16:15",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_182",clientId:"client_12",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_183",clientId:"client_11",dayOfWeek:"月",startTime:"12:00",endTime:"12:50",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_184",clientId:"client_48",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_185",clientId:"client_48",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_186",clientId:"client_47",dayOfWeek:"土",startTime:"14:15",endTime:"15:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_187",clientId:"client_13",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"}];document.addEventListener("DOMContentLoaded",()=>{var a,l,c;console.log("🏠 CareRoute 起動中...");const i=document.getElementById("offline-badge"),e=()=>{const d=navigator.onLine;i&&(i.hidden=d),document.body.classList.toggle("is-offline",!d),d?document.body.classList.contains("was-offline")&&N("オンラインに復帰しました","success",2e3):N("オフライン中: 操作はあとで同期されます","warning",3e3),document.body.classList.toggle("was-offline",!d)};window.addEventListener("online",e),window.addEventListener("offline",e),e(),wd(),du();try{_d(async(d,m)=>{if(m){N(m,"error"),Dn();return}d?(console.log("✅ ログイン:",d.email),Pn(d),await ve(window.isAdmin?"calendar":"my-schedule")):Dn()})}catch(d){console.warn("Firebase未設定のためデモモードで起動します:",d),Dn()}const n=document.getElementById("btn-theme");if(n){const d=["auto","light","dark"],m={auto:"brightness_auto",light:"light_mode",dark:"dark_mode"},v={auto:"テーマ: 自動 (OS設定)",light:"テーマ: ライト",dark:"テーマ: ダーク"},w=document.getElementById("theme-icon"),T=x=>{document.documentElement.setAttribute("data-theme",x),w&&(w.textContent=m[x]),n.title=v[x],n.setAttribute("aria-label",v[x])},E=localStorage.getItem("careroute_theme")||"auto";T(d.includes(E)?E:"auto"),n.addEventListener("click",()=>{const x=localStorage.getItem("careroute_theme")||"auto",k=d[(d.indexOf(x)+1)%d.length];localStorage.setItem("careroute_theme",k),T(k)})}const s=document.getElementById("btn-font-size");if(s){const d=["normal","large","x-large"],m={normal:"A",large:"A+","x-large":"A++"},v=T=>{T==="normal"?document.documentElement.removeAttribute("data-font-scale"):document.documentElement.setAttribute("data-font-scale",T),s.textContent=m[T],s.title=T==="normal"?"文字を大きくする":T==="large"?"さらに大きく":"標準に戻す"},w=localStorage.getItem("careroute_font_scale")||"normal";v(d.includes(w)?w:"normal"),s.addEventListener("click",()=>{const T=localStorage.getItem("careroute_font_scale")||"normal",E=d[(d.indexOf(T)+1)%d.length];localStorage.setItem("careroute_font_scale",E),v(E)})}(a=document.getElementById("btn-logout"))==null||a.addEventListener("click",async()=>{try{await bd(),N("ログアウトしました","info")}catch{N("ログアウトに失敗しました","error")}}),(l=document.getElementById("btn-demo-mode"))==null||l.addEventListener("click",async()=>{Pn({displayName:"管理者（デモ）",email:"admin@careroute.local",photoURL:""}),(await oe()).length===0&&(N("デモデータを自動投入しています...","info"),await Hn(!0)),await ve("calendar"),N("管理者デモモードで起動しました","info")}),(c=document.getElementById("btn-staff-demo-mode"))==null||c.addEventListener("click",async()=>{Pn({displayName:"現場スタッフ（デモ）",email:"staff@careroute.local",photoURL:""});let m=await oe();m.length===0&&(N("デモデータを自動投入しています...","info"),await Hn(!0),m=await oe());const v=m.find(w=>w.isActive)||m[0];window.currentStaffId=(v==null?void 0:v.id)||null,await ve("my-schedule"),N("スタッフデモモードで起動しました","info")})});function Dn(){document.getElementById("login-screen").style.display="flex",document.getElementById("main-app").style.display="none",document.getElementById("nav-revenue").style.display="none"}function Pn(i){document.getElementById("login-screen").style.display="none",document.getElementById("main-app").style.display="flex";const e=document.getElementById("user-avatar"),n=document.getElementById("user-name");e&&(e.src=i.photoURL||""),n&&(n.textContent=i.displayName||i.email),window.isAdmin=i.email==="admin@careroute.local"||i.email==="demo@careroute.local";const s=window.isAdmin?"flex":"none",a=window.isAdmin?"none":"flex";document.getElementById("nav-dashboard").style.display=s,document.getElementById("nav-map").style.display=s,document.getElementById("nav-staff").style.display=s,document.getElementById("nav-client").style.display=s,document.getElementById("nav-schedule").style.display=s;const l=document.getElementById("nav-calendar");l&&(l.style.display=s),document.getElementById("nav-matching").style.display=s;const c=document.getElementById("nav-revenue");c&&(c.style.display=s);const d=document.getElementById("nav-my-schedule");d&&(d.style.display=a),uu(),window.isAdmin&&Qa()}async function Qa(){const i=document.getElementById("unassigned-count");if(i)try{const e=new Date,n=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),a=new Date(n,e.getMonth()+1,0).getDate(),l=`${n}-${s}-01`,c=`${n}-${s}-${String(a).padStart(2,"0")}`,d=await Ad(l,c);d>0?(i.textContent=d>99?"99+":String(d),i.hidden=!1,i.title=`今月の未割り当て訪問: ${d}件`):i.hidden=!0}catch(e){console.warn("未割り当てバッジ更新エラー:",e)}}window.refreshUnassignedBadge=Qa;function uu(){if(document.getElementById("btn-load-demo"))return;const i=document.querySelector(".sidebar-nav"),e=document.createElement("li");e.className="nav-item",e.id="btn-load-demo",e.innerHTML=`
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `,e.addEventListener("click",Hn),i.appendChild(e)}async function Hn(i=!1){const e=document.getElementById("btn-load-demo");if(!(!i&&!await ge("デモデータ投入","デモデータ（職員6名・利用者20名）を投入しますか？既存データには影響しません。"))){e&&(e.innerHTML=`
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `);try{const n=await oe(),s=await fe();if(n.length>0||s.length>0){if(!i&&!await ge("データ上書き確認","既存のデータを全て削除し、新しいデモデータを投入しますか？")){e&&(e.innerHTML=`
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `);return}typeof Hr=="function"?await Hr():(localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"))}for(const d of ta)await Ra(d);N(`職員 ${ta.length}名 を登録しました`,"success");for(const d of ia)await Ba(d);N(`利用者 ${ia.length}名 を登録しました`,"success");const a=new Date,l=a.getDay(),c={日:0,月:1,火:2,水:3,木:4,金:5,土:6};for(const d of na){let m=new Date(a);if(d.dayOfWeek&&c[d.dayOfWeek]!==void 0){const x=c[d.dayOfWeek]-l;m.setDate(a.getDate()+x)}const v=m.getFullYear(),w=String(m.getMonth()+1).padStart(2,"0"),T=String(m.getDate()).padStart(2,"0"),E=`${v}-${w}-${T}`;await qi({...d,date:E,status:"scheduled"})}N(`予定 ${na.length}件 を登録しました`,"success"),await ve("calendar"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `,setTimeout(()=>e.remove(),3e3)}catch(n){console.error("デモデータ投入エラー:",n),N("デモデータの投入に失敗しました: "+n.message,"error"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `}}}
