(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const vo=()=>{};var tr={};/**
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
 */const Kr=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},yo=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[n++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[n++],c=i[n++],u=i[n++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=i[n++],c=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Jr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,u=c?i[a+1]:0,p=a+2<i.length,_=p?i[a+2]:0,E=l>>2,S=(l&3)<<4|u>>4;let b=(u&15)<<2|_>>6,A=_&63;p||(A=64,c||(b=64)),s.push(n[E],n[S],n[b],n[A])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Kr(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):yo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=n[i.charAt(a++)],u=a<i.length?n[i.charAt(a)]:0;++a;const _=a<i.length?n[i.charAt(a)]:64;++a;const S=a<i.length?n[i.charAt(a)]:64;if(++a,l==null||u==null||_==null||S==null)throw new _o;const b=l<<2|u>>4;if(s.push(b),_!==64){const A=u<<4&240|_>>2;if(s.push(A),S!==64){const O=_<<6&192|S;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class _o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Io=function(i){const e=Kr(i);return Jr.encodeByteArray(e,!0)},Xr=function(i){return Io(i).replace(/\./g,"")},Yr=function(i){try{return Jr.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const To=()=>bo().__FIREBASE_DEFAULTS__,wo=()=>{if(typeof process>"u"||typeof tr>"u")return;const i=tr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Eo=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Yr(i[1]);return e&&JSON.parse(e)},So=()=>{try{return vo()||To()||wo()||Eo()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ko=i=>{var e;return(e=So())==null?void 0:e[`_${i}`]};/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ao(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function xo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Oo(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Lo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Do(){try{return typeof indexedDB=="object"}catch{return!1}}function Po(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var l;e(((l=a.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}/**
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
 */const Co="FirebaseError";class Ue extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Co,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?Mo(l,s):"Error",u=`${this.serviceName}: ${c} (${a}).`;return new Ue(a,u,s)}}function Mo(i,e){return i.replace(No,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const No=/\{\$([^}]+)}/g;/**
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
 */function Qr(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ro(i,e){const n=new $o(i,e);return n.subscribe.bind(n)}class $o{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Bo(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=pn),a.error===void 0&&(a.error=pn),a.complete===void 0&&(a.complete=pn);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bo(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function pn(){}/**
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
 */function ei(i){return i&&i._delegate?i._delegate:i}/**
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
 */function Zr(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}class gt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var q;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(q||(q={}));const Uo={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Wo=q.INFO,Fo={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Vo=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=Fo[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fn{constructor(e){this.name=e,this._logLevel=Wo,this._logHandler=Vo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const jo=(i,e)=>e.some(n=>i instanceof n);let ir,nr;function qo(){return ir||(ir=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ho(){return nr||(nr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ea=new WeakMap,xn=new WeakMap,ta=new WeakMap,gn=new WeakMap,Vn=new WeakMap;function zo(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{n(Re(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&ea.set(n,i)}).catch(()=>{}),Vn.set(e,i),e}function Go(i){if(xn.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{n(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});xn.set(i,e)}let On={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return xn.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ta.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Re(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Ko(i){On=i(On)}function Jo(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(vn(this),e,...n);return ta.set(s,e.sort?e.sort():[e]),Re(s)}:Ho().includes(i)?function(...e){return i.apply(vn(this),e),Re(ea.get(this))}:function(...e){return Re(i.apply(vn(this),e))}}function Xo(i){return typeof i=="function"?Jo(i):(i instanceof IDBTransaction&&Go(i),jo(i,qo())?new Proxy(i,On):i)}function Re(i){if(i instanceof IDBRequest)return zo(i);if(gn.has(i))return gn.get(i);const e=Xo(i);return e!==i&&(gn.set(i,e),Vn.set(e,i)),e}const vn=i=>Vn.get(i);function Yo(i,e,{blocked:n,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),u=Re(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Re(c.result),p.oldVersion,p.newVersion,Re(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),u.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),u}const Qo=["get","getKey","getAll","getAllKeys","count"],Zo=["put","add","delete","clear"],yn=new Map;function sr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(yn.get(e))return yn.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=Zo.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Qo.includes(n)))return;const l=async function(c,...u){const p=this.transaction(c,a?"readwrite":"readonly");let _=p.store;return s&&(_=_.index(u.shift())),(await Promise.all([_[n](...u),a&&p.done]))[0]};return yn.set(e,l),l}Ko(i=>({...i,get:(e,n,s)=>sr(e,n)||i.get(e,n,s),has:(e,n)=>!!sr(e,n)||i.has(e,n)}));/**
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
 */class el{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tl(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ln="@firebase/app",rr="0.14.11";/**
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
 */const Se=new Fn("@firebase/app"),il="@firebase/app-compat",nl="@firebase/analytics-compat",sl="@firebase/analytics",rl="@firebase/app-check-compat",al="@firebase/app-check",ol="@firebase/auth",ll="@firebase/auth-compat",cl="@firebase/database",dl="@firebase/data-connect",ul="@firebase/database-compat",hl="@firebase/functions",fl="@firebase/functions-compat",ml="@firebase/installations",pl="@firebase/installations-compat",gl="@firebase/messaging",vl="@firebase/messaging-compat",yl="@firebase/performance",_l="@firebase/performance-compat",Il="@firebase/remote-config",bl="@firebase/remote-config-compat",Tl="@firebase/storage",wl="@firebase/storage-compat",El="@firebase/firestore",Sl="@firebase/ai",kl="@firebase/firestore-compat",Al="firebase",xl="12.12.0",Ol={[Ln]:"fire-core",[il]:"fire-core-compat",[sl]:"fire-analytics",[nl]:"fire-analytics-compat",[al]:"fire-app-check",[rl]:"fire-app-check-compat",[ol]:"fire-auth",[ll]:"fire-auth-compat",[cl]:"fire-rtdb",[dl]:"fire-data-connect",[ul]:"fire-rtdb-compat",[hl]:"fire-fn",[fl]:"fire-fn-compat",[ml]:"fire-iid",[pl]:"fire-iid-compat",[gl]:"fire-fcm",[vl]:"fire-fcm-compat",[yl]:"fire-perf",[_l]:"fire-perf-compat",[Il]:"fire-rc",[bl]:"fire-rc-compat",[Tl]:"fire-gcs",[wl]:"fire-gcs-compat",[El]:"fire-fst",[kl]:"fire-fst-compat",[Sl]:"fire-vertex","fire-js":"fire-js",[Al]:"fire-js-all"};/**
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
 */const Ll=new Map,Dl=new Map,ar=new Map;function or(i,e){try{i.container.addComponent(e)}catch(n){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function vt(i){const e=i.name;if(ar.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;ar.set(e,i);for(const n of Ll.values())or(n,i);for(const n of Dl.values())or(n,i);return!0}function ze(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Pl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Zt("app","Firebase",Pl);/**
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
 */const Ni=xl;function $e(i,e,n){let s=Ol[i]??i;n&&(s+=`-${n}`);const a=s.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${s}" with version "${e}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(c.join(" "));return}vt(new gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Cl="firebase-heartbeat-database",Ml=1,Ht="firebase-heartbeat-store";let _n=null;function ia(){return _n||(_n=Yo(Cl,Ml,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ht)}catch(n){console.warn(n)}}}}).catch(i=>{throw jn.create("idb-open",{originalErrorMessage:i.message})})),_n}async function Nl(i){try{const n=(await ia()).transaction(Ht),s=await n.objectStore(Ht).get(na(i));return await n.done,s}catch(e){if(e instanceof Ue)Se.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Se.warn(n.message)}}}async function lr(i,e){try{const s=(await ia()).transaction(Ht,"readwrite");await s.objectStore(Ht).put(e,na(i)),await s.done}catch(n){if(n instanceof Ue)Se.warn(n.message);else{const s=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Se.warn(s.message)}}}function na(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Rl=1024,$l=30;class Bl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=cr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>$l){const c=Fl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Se.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cr(),{heartbeatsToSend:s,unsentEntries:a}=Ul(this._heartbeatsCache.heartbeats),l=Xr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Se.warn(n),""}}}function cr(){return new Date().toISOString().substring(0,10)}function Ul(i,e=Rl){const n=[];let s=i.slice();for(const a of i){const l=n.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),dr(n)>e){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),dr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Wl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Do()?Po().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nl(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return lr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return lr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dr(i){return Xr(JSON.stringify({version:2,heartbeats:i})).length}function Fl(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function Vl(i){vt(new gt("platform-logger",e=>new el(e),"PRIVATE")),vt(new gt("heartbeat",e=>new Bl(e),"PRIVATE")),$e(Ln,rr,i),$e(Ln,rr,"esm2020"),$e("fire-js","")}Vl("");var jl="firebase",ql="12.12.1";/**
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
 */$e(jl,ql,"app");var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qn;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,f){function m(){}m.prototype=f.prototype,v.F=f.prototype,v.prototype=new m,v.prototype.constructor=v,v.D=function(y,g,I){for(var h=Array(arguments.length-2),U=2;U<arguments.length;U++)h[U-2]=arguments[U];return f.prototype[g].apply(y,h)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(v,f,m){m||(m=0);const y=Array(16);if(typeof f=="string")for(var g=0;g<16;++g)y[g]=f.charCodeAt(m++)|f.charCodeAt(m++)<<8|f.charCodeAt(m++)<<16|f.charCodeAt(m++)<<24;else for(g=0;g<16;++g)y[g]=f[m++]|f[m++]<<8|f[m++]<<16|f[m++]<<24;f=v.g[0],m=v.g[1],g=v.g[2];let I=v.g[3],h;h=f+(I^m&(g^I))+y[0]+3614090360&4294967295,f=m+(h<<7&4294967295|h>>>25),h=I+(g^f&(m^g))+y[1]+3905402710&4294967295,I=f+(h<<12&4294967295|h>>>20),h=g+(m^I&(f^m))+y[2]+606105819&4294967295,g=I+(h<<17&4294967295|h>>>15),h=m+(f^g&(I^f))+y[3]+3250441966&4294967295,m=g+(h<<22&4294967295|h>>>10),h=f+(I^m&(g^I))+y[4]+4118548399&4294967295,f=m+(h<<7&4294967295|h>>>25),h=I+(g^f&(m^g))+y[5]+1200080426&4294967295,I=f+(h<<12&4294967295|h>>>20),h=g+(m^I&(f^m))+y[6]+2821735955&4294967295,g=I+(h<<17&4294967295|h>>>15),h=m+(f^g&(I^f))+y[7]+4249261313&4294967295,m=g+(h<<22&4294967295|h>>>10),h=f+(I^m&(g^I))+y[8]+1770035416&4294967295,f=m+(h<<7&4294967295|h>>>25),h=I+(g^f&(m^g))+y[9]+2336552879&4294967295,I=f+(h<<12&4294967295|h>>>20),h=g+(m^I&(f^m))+y[10]+4294925233&4294967295,g=I+(h<<17&4294967295|h>>>15),h=m+(f^g&(I^f))+y[11]+2304563134&4294967295,m=g+(h<<22&4294967295|h>>>10),h=f+(I^m&(g^I))+y[12]+1804603682&4294967295,f=m+(h<<7&4294967295|h>>>25),h=I+(g^f&(m^g))+y[13]+4254626195&4294967295,I=f+(h<<12&4294967295|h>>>20),h=g+(m^I&(f^m))+y[14]+2792965006&4294967295,g=I+(h<<17&4294967295|h>>>15),h=m+(f^g&(I^f))+y[15]+1236535329&4294967295,m=g+(h<<22&4294967295|h>>>10),h=f+(g^I&(m^g))+y[1]+4129170786&4294967295,f=m+(h<<5&4294967295|h>>>27),h=I+(m^g&(f^m))+y[6]+3225465664&4294967295,I=f+(h<<9&4294967295|h>>>23),h=g+(f^m&(I^f))+y[11]+643717713&4294967295,g=I+(h<<14&4294967295|h>>>18),h=m+(I^f&(g^I))+y[0]+3921069994&4294967295,m=g+(h<<20&4294967295|h>>>12),h=f+(g^I&(m^g))+y[5]+3593408605&4294967295,f=m+(h<<5&4294967295|h>>>27),h=I+(m^g&(f^m))+y[10]+38016083&4294967295,I=f+(h<<9&4294967295|h>>>23),h=g+(f^m&(I^f))+y[15]+3634488961&4294967295,g=I+(h<<14&4294967295|h>>>18),h=m+(I^f&(g^I))+y[4]+3889429448&4294967295,m=g+(h<<20&4294967295|h>>>12),h=f+(g^I&(m^g))+y[9]+568446438&4294967295,f=m+(h<<5&4294967295|h>>>27),h=I+(m^g&(f^m))+y[14]+3275163606&4294967295,I=f+(h<<9&4294967295|h>>>23),h=g+(f^m&(I^f))+y[3]+4107603335&4294967295,g=I+(h<<14&4294967295|h>>>18),h=m+(I^f&(g^I))+y[8]+1163531501&4294967295,m=g+(h<<20&4294967295|h>>>12),h=f+(g^I&(m^g))+y[13]+2850285829&4294967295,f=m+(h<<5&4294967295|h>>>27),h=I+(m^g&(f^m))+y[2]+4243563512&4294967295,I=f+(h<<9&4294967295|h>>>23),h=g+(f^m&(I^f))+y[7]+1735328473&4294967295,g=I+(h<<14&4294967295|h>>>18),h=m+(I^f&(g^I))+y[12]+2368359562&4294967295,m=g+(h<<20&4294967295|h>>>12),h=f+(m^g^I)+y[5]+4294588738&4294967295,f=m+(h<<4&4294967295|h>>>28),h=I+(f^m^g)+y[8]+2272392833&4294967295,I=f+(h<<11&4294967295|h>>>21),h=g+(I^f^m)+y[11]+1839030562&4294967295,g=I+(h<<16&4294967295|h>>>16),h=m+(g^I^f)+y[14]+4259657740&4294967295,m=g+(h<<23&4294967295|h>>>9),h=f+(m^g^I)+y[1]+2763975236&4294967295,f=m+(h<<4&4294967295|h>>>28),h=I+(f^m^g)+y[4]+1272893353&4294967295,I=f+(h<<11&4294967295|h>>>21),h=g+(I^f^m)+y[7]+4139469664&4294967295,g=I+(h<<16&4294967295|h>>>16),h=m+(g^I^f)+y[10]+3200236656&4294967295,m=g+(h<<23&4294967295|h>>>9),h=f+(m^g^I)+y[13]+681279174&4294967295,f=m+(h<<4&4294967295|h>>>28),h=I+(f^m^g)+y[0]+3936430074&4294967295,I=f+(h<<11&4294967295|h>>>21),h=g+(I^f^m)+y[3]+3572445317&4294967295,g=I+(h<<16&4294967295|h>>>16),h=m+(g^I^f)+y[6]+76029189&4294967295,m=g+(h<<23&4294967295|h>>>9),h=f+(m^g^I)+y[9]+3654602809&4294967295,f=m+(h<<4&4294967295|h>>>28),h=I+(f^m^g)+y[12]+3873151461&4294967295,I=f+(h<<11&4294967295|h>>>21),h=g+(I^f^m)+y[15]+530742520&4294967295,g=I+(h<<16&4294967295|h>>>16),h=m+(g^I^f)+y[2]+3299628645&4294967295,m=g+(h<<23&4294967295|h>>>9),h=f+(g^(m|~I))+y[0]+4096336452&4294967295,f=m+(h<<6&4294967295|h>>>26),h=I+(m^(f|~g))+y[7]+1126891415&4294967295,I=f+(h<<10&4294967295|h>>>22),h=g+(f^(I|~m))+y[14]+2878612391&4294967295,g=I+(h<<15&4294967295|h>>>17),h=m+(I^(g|~f))+y[5]+4237533241&4294967295,m=g+(h<<21&4294967295|h>>>11),h=f+(g^(m|~I))+y[12]+1700485571&4294967295,f=m+(h<<6&4294967295|h>>>26),h=I+(m^(f|~g))+y[3]+2399980690&4294967295,I=f+(h<<10&4294967295|h>>>22),h=g+(f^(I|~m))+y[10]+4293915773&4294967295,g=I+(h<<15&4294967295|h>>>17),h=m+(I^(g|~f))+y[1]+2240044497&4294967295,m=g+(h<<21&4294967295|h>>>11),h=f+(g^(m|~I))+y[8]+1873313359&4294967295,f=m+(h<<6&4294967295|h>>>26),h=I+(m^(f|~g))+y[15]+4264355552&4294967295,I=f+(h<<10&4294967295|h>>>22),h=g+(f^(I|~m))+y[6]+2734768916&4294967295,g=I+(h<<15&4294967295|h>>>17),h=m+(I^(g|~f))+y[13]+1309151649&4294967295,m=g+(h<<21&4294967295|h>>>11),h=f+(g^(m|~I))+y[4]+4149444226&4294967295,f=m+(h<<6&4294967295|h>>>26),h=I+(m^(f|~g))+y[11]+3174756917&4294967295,I=f+(h<<10&4294967295|h>>>22),h=g+(f^(I|~m))+y[2]+718787259&4294967295,g=I+(h<<15&4294967295|h>>>17),h=m+(I^(g|~f))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+f&4294967295,v.g[1]=v.g[1]+(g+(h<<21&4294967295|h>>>11))&4294967295,v.g[2]=v.g[2]+g&4294967295,v.g[3]=v.g[3]+I&4294967295}s.prototype.v=function(v,f){f===void 0&&(f=v.length);const m=f-this.blockSize,y=this.C;let g=this.h,I=0;for(;I<f;){if(g==0)for(;I<=m;)a(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<f;)if(y[g++]=v.charCodeAt(I++),g==this.blockSize){a(this,y),g=0;break}}else for(;I<f;)if(y[g++]=v[I++],g==this.blockSize){a(this,y),g=0;break}}this.h=g,this.o+=f},s.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var f=1;f<v.length-8;++f)v[f]=0;f=this.o*8;for(var m=v.length-8;m<v.length;++m)v[m]=f&255,f/=256;for(this.v(v),v=Array(16),f=0,m=0;m<4;++m)for(let y=0;y<32;y+=8)v[f++]=this.g[m]>>>y&255;return v};function l(v,f){var m=u;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=f(v)}function c(v,f){this.h=f;const m=[];let y=!0;for(let g=v.length-1;g>=0;g--){const I=v[g]|0;y&&I==f||(m[g]=I,y=!1)}this.g=m}var u={};function p(v){return-128<=v&&v<128?l(v,function(f){return new c([f|0],f<0?-1:0)}):new c([v|0],v<0?-1:0)}function _(v){if(isNaN(v)||!isFinite(v))return S;if(v<0)return C(_(-v));const f=[];let m=1;for(let y=0;v>=m;y++)f[y]=v/m|0,m*=4294967296;return new c(f,0)}function E(v,f){if(v.length==0)throw Error("number format error: empty string");if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(v.charAt(0)=="-")return C(E(v.substring(1),f));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=_(Math.pow(f,8));let y=S;for(let I=0;I<v.length;I+=8){var g=Math.min(8,v.length-I);const h=parseInt(v.substring(I,I+g),f);g<8?(g=_(Math.pow(f,g)),y=y.j(g).add(_(h))):(y=y.j(m),y=y.add(_(h)))}return y}var S=p(0),b=p(1),A=p(16777216);i=c.prototype,i.m=function(){if(x(this))return-C(this).m();let v=0,f=1;for(let m=0;m<this.g.length;m++){const y=this.i(m);v+=(y>=0?y:4294967296+y)*f,f*=4294967296}return v},i.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(O(this))return"0";if(x(this))return"-"+C(this).toString(v);const f=_(Math.pow(v,6));var m=this;let y="";for(;;){const g=k(m,f).g;m=D(m,g.j(f));let I=((m.g.length>0?m.g[0]:m.h)>>>0).toString(v);if(m=g,O(m))return I+y;for(;I.length<6;)I="0"+I;y=I+y}},i.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function O(v){if(v.h!=0)return!1;for(let f=0;f<v.g.length;f++)if(v.g[f]!=0)return!1;return!0}function x(v){return v.h==-1}i.l=function(v){return v=D(this,v),x(v)?-1:O(v)?0:1};function C(v){const f=v.g.length,m=[];for(let y=0;y<f;y++)m[y]=~v.g[y];return new c(m,~v.h).add(b)}i.abs=function(){return x(this)?C(this):this},i.add=function(v){const f=Math.max(this.g.length,v.g.length),m=[];let y=0;for(let g=0;g<=f;g++){let I=y+(this.i(g)&65535)+(v.i(g)&65535),h=(I>>>16)+(this.i(g)>>>16)+(v.i(g)>>>16);y=h>>>16,I&=65535,h&=65535,m[g]=h<<16|I}return new c(m,m[m.length-1]&-2147483648?-1:0)};function D(v,f){return v.add(C(f))}i.j=function(v){if(O(this)||O(v))return S;if(x(this))return x(v)?C(this).j(C(v)):C(C(this).j(v));if(x(v))return C(this.j(C(v)));if(this.l(A)<0&&v.l(A)<0)return _(this.m()*v.m());const f=this.g.length+v.g.length,m=[];for(var y=0;y<2*f;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(let g=0;g<v.g.length;g++){const I=this.i(y)>>>16,h=this.i(y)&65535,U=v.i(g)>>>16,Y=v.i(g)&65535;m[2*y+2*g]+=h*Y,P(m,2*y+2*g),m[2*y+2*g+1]+=I*Y,P(m,2*y+2*g+1),m[2*y+2*g+1]+=h*U,P(m,2*y+2*g+1),m[2*y+2*g+2]+=I*U,P(m,2*y+2*g+2)}for(v=0;v<f;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=f;v<2*f;v++)m[v]=0;return new c(m,0)};function P(v,f){for(;(v[f]&65535)!=v[f];)v[f+1]+=v[f]>>>16,v[f]&=65535,f++}function M(v,f){this.g=v,this.h=f}function k(v,f){if(O(f))throw Error("division by zero");if(O(v))return new M(S,S);if(x(v))return f=k(C(v),f),new M(C(f.g),C(f.h));if(x(f))return f=k(v,C(f)),new M(C(f.g),f.h);if(v.g.length>30){if(x(v)||x(f))throw Error("slowDivide_ only works with positive integers.");for(var m=b,y=f;y.l(v)<=0;)m=$(m),y=$(y);var g=N(m,1),I=N(y,1);for(y=N(y,2),m=N(m,2);!O(y);){var h=I.add(y);h.l(v)<=0&&(g=g.add(m),I=h),y=N(y,1),m=N(m,1)}return f=D(v,g.j(f)),new M(g,f)}for(g=S;v.l(f)>=0;){for(m=Math.max(1,Math.floor(v.m()/f.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),I=_(m),h=I.j(f);x(h)||h.l(v)>0;)m-=y,I=_(m),h=I.j(f);O(I)&&(I=b),g=g.add(I),v=D(v,h)}return new M(g,v)}i.B=function(v){return k(this,v).h},i.and=function(v){const f=Math.max(this.g.length,v.g.length),m=[];for(let y=0;y<f;y++)m[y]=this.i(y)&v.i(y);return new c(m,this.h&v.h)},i.or=function(v){const f=Math.max(this.g.length,v.g.length),m=[];for(let y=0;y<f;y++)m[y]=this.i(y)|v.i(y);return new c(m,this.h|v.h)},i.xor=function(v){const f=Math.max(this.g.length,v.g.length),m=[];for(let y=0;y<f;y++)m[y]=this.i(y)^v.i(y);return new c(m,this.h^v.h)};function $(v){const f=v.g.length+1,m=[];for(let y=0;y<f;y++)m[y]=v.i(y)<<1|v.i(y-1)>>>31;return new c(m,v.h)}function N(v,f){const m=f>>5;f%=32;const y=v.g.length-m,g=[];for(let I=0;I<y;I++)g[I]=f>0?v.i(I+m)>>>f|v.i(I+m+1)<<32-f:v.i(I+m);return new c(g,v.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=_,c.fromString=E,qn=c}).apply(typeof ur<"u"?ur:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var r=0;r<t.length;++r){var o=t[r];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=n(this);function a(t,r){if(r)e:{var o=s;t=t.split(".");for(var d=0;d<t.length-1;d++){var T=t[d];if(!(T in o))break e;o=o[T]}t=t[t.length-1],d=o[t],r=r(d),r!=d&&r!=null&&e(o,t,{configurable:!0,writable:!0,value:r})}}a("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(t){return t||function(r){var o=[],d;for(d in r)Object.prototype.hasOwnProperty.call(r,d)&&o.push([d,r[d]]);return o}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function p(t,r,o){return t.call.apply(t.bind,arguments)}function _(t,r,o){return _=p,_.apply(null,arguments)}function E(t,r){var o=Array.prototype.slice.call(arguments,1);return function(){var d=o.slice();return d.push.apply(d,arguments),t.apply(this,d)}}function S(t,r){function o(){}o.prototype=r.prototype,t.Z=r.prototype,t.prototype=new o,t.prototype.constructor=t,t.Ob=function(d,T,w){for(var L=Array(arguments.length-2),B=2;B<arguments.length;B++)L[B-2]=arguments[B];return r.prototype[T].apply(d,L)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function A(t){const r=t.length;if(r>0){const o=Array(r);for(let d=0;d<r;d++)o[d]=t[d];return o}return[]}function O(t,r){for(let d=1;d<arguments.length;d++){const T=arguments[d];var o=typeof T;if(o=o!="object"?o:T?Array.isArray(T)?"array":o:"null",o=="array"||o=="object"&&typeof T.length=="number"){o=t.length||0;const w=T.length||0;t.length=o+w;for(let L=0;L<w;L++)t[o+L]=T[L]}else t.push(T)}}class x{constructor(r,o){this.i=r,this.j=o,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function C(t){c.setTimeout(()=>{throw t},0)}function D(){var t=v;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class P{constructor(){this.h=this.g=null}add(r,o){const d=M.get();d.set(r,o),this.h?this.h.next=d:this.g=d,this.h=d}}var M=new x(()=>new k,t=>t.reset());class k{constructor(){this.next=this.g=this.h=null}set(r,o){this.h=r,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let $,N=!1,v=new P,f=()=>{const t=Promise.resolve(void 0);$=()=>{t.then(m)}};function m(){for(var t;t=D();){try{t.h.call(t.g)}catch(o){C(o)}var r=M;r.j(t),r.h<100&&(r.h++,t.next=r.g,r.g=t)}N=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function g(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}g.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const o=()=>{};c.addEventListener("test",o,r),c.removeEventListener("test",o,r)}catch{}return t}();function h(t){return/^[\s\xa0]*$/.test(t)}function U(t,r){g.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,r)}S(U,g),U.prototype.init=function(t,r){const o=this.type=t.type,d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget,r||(o=="mouseover"?r=t.fromElement:o=="mouseout"&&(r=t.toElement)),this.relatedTarget=r,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&U.Z.h.call(this)},U.prototype.h=function(){U.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(Math.random()*1e6|0),st=0;function Fi(t,r,o,d,T){this.listener=t,this.proxy=null,this.src=r,this.type=o,this.capture=!!d,this.ha=T,this.key=++st,this.da=this.fa=!1}function rt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function at(t,r,o){for(const d in t)r.call(o,t[d],d,t)}function We(t,r){for(const o in t)r.call(void 0,t[o],o,t)}function Fe(t){const r={};for(const o in t)r[o]=t[o];return r}const ot="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bt(t,r){let o,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(o in d)t[o]=d[o];for(let w=0;w<ot.length;w++)o=ot[w],Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o])}}function ni(t){this.src=t,this.g={},this.h=0}ni.prototype.add=function(t,r,o,d,T){const w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);const L=ji(t,r,d,T);return L>-1?(r=t[L],o||(r.fa=!1)):(r=new Fi(r,this.src,w,!!d,T),r.fa=o,t.push(r)),r};function Vi(t,r){const o=r.type;if(o in t.g){var d=t.g[o],T=Array.prototype.indexOf.call(d,r,void 0),w;(w=T>=0)&&Array.prototype.splice.call(d,T,1),w&&(rt(r),t.g[o].length==0&&(delete t.g[o],t.h--))}}function ji(t,r,o,d){for(let T=0;T<t.length;++T){const w=t[T];if(!w.da&&w.listener==r&&w.capture==!!o&&w.ha==d)return T}return-1}var qi="closure_lm_"+(Math.random()*1e6|0),Hi={};function rs(t,r,o,d,T){if(Array.isArray(r)){for(let w=0;w<r.length;w++)rs(t,r[w],o,d,T);return null}return o=ls(o),t&&t[Y]?t.J(r,o,u(d)?!!d.capture:!1,T):Ua(t,r,o,!1,d,T)}function Ua(t,r,o,d,T,w){if(!r)throw Error("Invalid event type");const L=u(T)?!!T.capture:!!T;let B=Gi(t);if(B||(t[qi]=B=new ni(t)),o=B.add(r,o,d,L,w),o.proxy)return o;if(d=Wa(),o.proxy=d,d.src=t,d.listener=o,t.addEventListener)I||(T=L),T===void 0&&(T=!1),t.addEventListener(r.toString(),d,T);else if(t.attachEvent)t.attachEvent(os(r.toString()),d);else if(t.addListener&&t.removeListener)t.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Wa(){function t(o){return r.call(t.src,t.listener,o)}const r=Fa;return t}function as(t,r,o,d,T){if(Array.isArray(r))for(var w=0;w<r.length;w++)as(t,r[w],o,d,T);else d=u(d)?!!d.capture:!!d,o=ls(o),t&&t[Y]?(t=t.i,w=String(r).toString(),w in t.g&&(r=t.g[w],o=ji(r,o,d,T),o>-1&&(rt(r[o]),Array.prototype.splice.call(r,o,1),r.length==0&&(delete t.g[w],t.h--)))):t&&(t=Gi(t))&&(r=t.g[r.toString()],t=-1,r&&(t=ji(r,o,d,T)),(o=t>-1?r[t]:null)&&zi(o))}function zi(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[Y])Vi(r.i,t);else{var o=t.type,d=t.proxy;r.removeEventListener?r.removeEventListener(o,d,t.capture):r.detachEvent?r.detachEvent(os(o),d):r.addListener&&r.removeListener&&r.removeListener(d),(o=Gi(r))?(Vi(o,t),o.h==0&&(o.src=null,r[qi]=null)):rt(t)}}}function os(t){return t in Hi?Hi[t]:Hi[t]="on"+t}function Fa(t,r){if(t.da)t=!0;else{r=new U(r,this);const o=t.listener,d=t.ha||t.src;t.fa&&zi(t),t=o.call(d,r)}return t}function Gi(t){return t=t[qi],t instanceof ni?t:null}var Ki="__closure_events_fn_"+(Math.random()*1e9>>>0);function ls(t){return typeof t=="function"?t:(t[Ki]||(t[Ki]=function(r){return t.handleEvent(r)}),t[Ki])}function te(){y.call(this),this.i=new ni(this),this.M=this,this.G=null}S(te,y),te.prototype[Y]=!0,te.prototype.removeEventListener=function(t,r,o,d){as(this,t,r,o,d)};function ne(t,r){var o,d=t.G;if(d)for(o=[];d;d=d.G)o.push(d);if(t=t.M,d=r.type||r,typeof r=="string")r=new g(r,t);else if(r instanceof g)r.target=r.target||t;else{var T=r;r=new g(d,t),bt(r,T)}T=!0;let w,L;if(o)for(L=o.length-1;L>=0;L--)w=r.g=o[L],T=si(w,d,!0,r)&&T;if(w=r.g=t,T=si(w,d,!0,r)&&T,T=si(w,d,!1,r)&&T,o)for(L=0;L<o.length;L++)w=r.g=o[L],T=si(w,d,!1,r)&&T}te.prototype.N=function(){if(te.Z.N.call(this),this.i){var t=this.i;for(const r in t.g){const o=t.g[r];for(let d=0;d<o.length;d++)rt(o[d]);delete t.g[r],t.h--}}this.G=null},te.prototype.J=function(t,r,o,d){return this.i.add(String(t),r,!1,o,d)},te.prototype.K=function(t,r,o,d){return this.i.add(String(t),r,!0,o,d)};function si(t,r,o,d){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();let T=!0;for(let w=0;w<r.length;++w){const L=r[w];if(L&&!L.da&&L.capture==o){const B=L.listener,Q=L.ha||L.src;L.fa&&Vi(t.i,L),T=B.call(Q,d)!==!1&&T}}return T&&!d.defaultPrevented}function Va(t,r){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=_(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:c.setTimeout(t,r||0)}function cs(t){t.g=Va(()=>{t.g=null,t.i&&(t.i=!1,cs(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class ja extends y{constructor(r,o){super(),this.m=r,this.l=o,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:cs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(t){y.call(this),this.h=t,this.g={}}S(Tt,y);var ds=[];function us(t){at(t.g,function(r,o){this.g.hasOwnProperty(o)&&zi(r)},t),t.g={}}Tt.prototype.N=function(){Tt.Z.N.call(this),us(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ji=c.JSON.stringify,qa=c.JSON.parse,Ha=class{stringify(t){return c.JSON.stringify(t,void 0)}parse(t){return c.JSON.parse(t,void 0)}};function hs(){}function za(){}var wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xi(){g.call(this,"d")}S(Xi,g);function Yi(){g.call(this,"c")}S(Yi,g);var lt={},fs=null;function Qi(){return fs=fs||new te}lt.Ia="serverreachability";function ms(t){g.call(this,lt.Ia,t)}S(ms,g);function Et(t){const r=Qi();ne(r,new ms(r))}lt.STAT_EVENT="statevent";function ps(t,r){g.call(this,lt.STAT_EVENT,t),this.stat=r}S(ps,g);function se(t){const r=Qi();ne(r,new ps(r,t))}lt.Ja="timingevent";function gs(t,r){g.call(this,lt.Ja,t),this.size=r}S(gs,g);function St(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){t()},r)}function kt(){this.g=!0}kt.prototype.ua=function(){this.g=!1};function Ga(t,r,o,d,T,w){t.info(function(){if(t.g)if(w){var L="",B=w.split("&");for(let H=0;H<B.length;H++){var Q=B[H].split("=");if(Q.length>1){const ee=Q[0];Q=Q[1];const ge=ee.split("_");L=ge.length>=2&&ge[1]=="type"?L+(ee+"="+Q+"&"):L+(ee+"=redacted&")}}}else L=null;else L=w;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+r+`
`+o+`
`+L})}function Ka(t,r,o,d,T,w,L){t.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+r+`
`+o+`
`+w+" "+L})}function ct(t,r,o,d){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+Xa(t,o)+(d?" "+d:"")})}function Ja(t,r){t.info(function(){return"TIMEOUT: "+r})}kt.prototype.info=function(){};function Xa(t,r){if(!t.g)return r;if(!r)return null;try{const w=JSON.parse(r);if(w){for(t=0;t<w.length;t++)if(Array.isArray(w[t])){var o=w[t];if(!(o.length<2)){var d=o[1];if(Array.isArray(d)&&!(d.length<1)){var T=d[0];if(T!="noop"&&T!="stop"&&T!="close")for(let L=1;L<d.length;L++)d[L]=""}}}}return Ji(w)}catch{return r}}var Zi={NO_ERROR:0,TIMEOUT:8},Ya={},vs;function en(){}S(en,hs),en.prototype.g=function(){return new XMLHttpRequest},vs=new en;function At(t){return encodeURIComponent(String(t))}function Qa(t){var r=1;t=t.split(":");const o=[];for(;r>0&&t.length;)o.push(t.shift()),r--;return t.length&&o.push(t.join(":")),o}function ke(t,r,o,d){this.j=t,this.i=r,this.l=o,this.S=d||1,this.V=new Tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ys}function ys(){this.i=null,this.g="",this.h=!1}var _s={},tn={};function nn(t,r,o){t.M=1,t.A=ai(pe(r)),t.u=o,t.R=!0,Is(t,null)}function Is(t,r){t.F=Date.now(),ri(t),t.B=pe(t.A);var o=t.B,d=t.S;Array.isArray(d)||(d=[String(d)]),Cs(o.i,"t",d),t.C=0,o=t.j.L,t.h=new ys,t.g=Ys(t.j,o?r:null,!t.u),t.P>0&&(t.O=new ja(_(t.Y,t,t.g),t.P)),r=t.V,o=t.g,d=t.ba;var T="readystatechange";Array.isArray(T)||(T&&(ds[0]=T.toString()),T=ds);for(let w=0;w<T.length;w++){const L=rs(o,T[w],d||r.handleEvent,!1,r.h||r);if(!L)break;r.g[L.key]=L}r=t.J?Fe(t.J):{},t.u?(t.v||(t.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,r)):(t.v="GET",t.g.ea(t.B,t.v,null,r)),Et(),Ga(t.i,t.v,t.B,t.l,t.S,t.u)}ke.prototype.ba=function(t){t=t.target;const r=this.O;r&&Oe(t)==3?r.j():this.Y(t)},ke.prototype.Y=function(t){try{if(t==this.g)e:{const B=Oe(this.g),Q=this.g.ya(),H=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||Ws(this.g)))){this.K||B!=4||Q==7||(Q==8||H<=0?Et(3):Et(2)),sn(this);var r=this.g.ca();this.X=r;var o=Za(this);if(this.o=r==200,Ka(this.i,this.v,this.B,this.l,this.S,B,r),this.o){if(this.U&&!this.L){t:{if(this.g){var d,T=this.g;if((d=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!h(d)){var w=d;break t}}w=null}if(t=w)ct(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,rn(this,t);else{this.o=!1,this.m=3,se(12),Ve(this),xt(this);break e}}if(this.R){t=!0;let ee;for(;!this.K&&this.C<o.length;)if(ee=eo(this,o),ee==tn){B==4&&(this.m=4,se(14),t=!1),ct(this.i,this.l,null,"[Incomplete Response]");break}else if(ee==_s){this.m=4,se(15),ct(this.i,this.l,o,"[Invalid Chunk]"),t=!1;break}else ct(this.i,this.l,ee,null),rn(this,ee);if(bs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||o.length!=0||this.h.h||(this.m=1,se(16),t=!1),this.o=this.o&&t,!t)ct(this.i,this.l,o,"[Invalid Chunked Response]"),Ve(this),xt(this);else if(o.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),fn(L),L.P=!0,se(11))}}else ct(this.i,this.l,o,null),rn(this,o);B==4&&Ve(this),this.o&&!this.K&&(B==4?Gs(this.j,this):(this.o=!1,ri(this)))}else po(this.g),r==400&&o.indexOf("Unknown SID")>0?(this.m=3,se(12)):(this.m=0,se(13)),Ve(this),xt(this)}}}catch{}finally{}};function Za(t){if(!bs(t))return t.g.la();const r=Ws(t.g);if(r==="")return"";let o="";const d=r.length,T=Oe(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return Ve(t),xt(t),"";t.h.i=new c.TextDecoder}for(let w=0;w<d;w++)t.h.h=!0,o+=t.h.i.decode(r[w],{stream:!(T&&w==d-1)});return r.length=0,t.h.g+=o,t.C=0,t.h.g}function bs(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function eo(t,r){var o=t.C,d=r.indexOf(`
`,o);return d==-1?tn:(o=Number(r.substring(o,d)),isNaN(o)?_s:(d+=1,d+o>r.length?tn:(r=r.slice(d,d+o),t.C=d+o,r)))}ke.prototype.cancel=function(){this.K=!0,Ve(this)};function ri(t){t.T=Date.now()+t.H,Ts(t,t.H)}function Ts(t,r){if(t.D!=null)throw Error("WatchDog timer not null");t.D=St(_(t.aa,t),r)}function sn(t){t.D&&(c.clearTimeout(t.D),t.D=null)}ke.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Ja(this.i,this.B),this.M!=2&&(Et(),se(17)),Ve(this),this.m=2,xt(this)):Ts(this,this.T-t)};function xt(t){t.j.I==0||t.K||Gs(t.j,t)}function Ve(t){sn(t);var r=t.O;r&&typeof r.dispose=="function"&&r.dispose(),t.O=null,us(t.V),t.g&&(r=t.g,t.g=null,r.abort(),r.dispose())}function rn(t,r){try{var o=t.j;if(o.I!=0&&(o.g==t||an(o.h,t))){if(!t.L&&an(o.h,t)&&o.I==3){try{var d=o.Ba.g.parse(r)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){e:if(!o.v){if(o.g)if(o.g.F+3e3<t.F)ui(o),ci(o);else break e;hn(o),se(18)}}else o.xa=T[1],0<o.xa-o.K&&T[2]<37500&&o.F&&o.A==0&&!o.C&&(o.C=St(_(o.Va,o),6e3));Ss(o.h)<=1&&o.ta&&(o.ta=void 0)}else qe(o,11)}else if((t.L||o.g==t)&&ui(o),!h(r))for(T=o.Ba.g.parse(r),r=0;r<T.length;r++){let H=T[r];const ee=H[0];if(!(ee<=o.K))if(o.K=ee,H=H[1],o.I==2)if(H[0]=="c"){o.M=H[1],o.ba=H[2];const ge=H[3];ge!=null&&(o.ka=ge,o.j.info("VER="+o.ka));const He=H[4];He!=null&&(o.za=He,o.j.info("SVER="+o.za));const Le=H[5];Le!=null&&typeof Le=="number"&&Le>0&&(d=1.5*Le,o.O=d,o.j.info("backChannelRequestTimeoutMs_="+d)),d=o;const De=t.g;if(De){const hi=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hi){var w=d.h;w.g||hi.indexOf("spdy")==-1&&hi.indexOf("quic")==-1&&hi.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(on(w,w.h),w.h=null))}if(d.G){const mn=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;mn&&(d.wa=mn,z(d.J,d.G,mn))}}o.I=3,o.l&&o.l.ra(),o.aa&&(o.T=Date.now()-t.F,o.j.info("Handshake RTT: "+o.T+"ms")),d=o;var L=t;if(d.na=Xs(d,d.L?d.ba:null,d.W),L.L){ks(d.h,L);var B=L,Q=d.O;Q&&(B.H=Q),B.D&&(sn(B),ri(B)),d.g=L}else Hs(d);o.i.length>0&&di(o)}else H[0]!="stop"&&H[0]!="close"||qe(o,7);else o.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?qe(o,7):un(o):H[0]!="noop"&&o.l&&o.l.qa(H),o.A=0)}}Et(4)}catch{}}var to=class{constructor(t,r){this.g=t,this.map=r}};function ws(t){this.l=t||10,c.PerformanceNavigationTiming?(t=c.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Es(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ss(t){return t.h?1:t.g?t.g.size:0}function an(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function on(t,r){t.g?t.g.add(r):t.h=r}function ks(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}ws.prototype.cancel=function(){if(this.i=As(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function As(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const o of t.g.values())r=r.concat(o.G);return r}return A(t.i)}var xs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function io(t,r){if(t){t=t.split("&");for(let o=0;o<t.length;o++){const d=t[o].indexOf("=");let T,w=null;d>=0?(T=t[o].substring(0,d),w=t[o].substring(d+1)):T=t[o],r(T,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Ae(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;t instanceof Ae?(this.l=t.l,Ot(this,t.j),this.o=t.o,this.g=t.g,Lt(this,t.u),this.h=t.h,ln(this,Ms(t.i)),this.m=t.m):t&&(r=String(t).match(xs))?(this.l=!1,Ot(this,r[1]||"",!0),this.o=Dt(r[2]||""),this.g=Dt(r[3]||"",!0),Lt(this,r[4]),this.h=Dt(r[5]||"",!0),ln(this,r[6]||"",!0),this.m=Dt(r[7]||"")):(this.l=!1,this.i=new Ct(null,this.l))}Ae.prototype.toString=function(){const t=[];var r=this.j;r&&t.push(Pt(r,Os,!0),":");var o=this.g;return(o||r=="file")&&(t.push("//"),(r=this.o)&&t.push(Pt(r,Os,!0),"@"),t.push(At(o).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.u,o!=null&&t.push(":",String(o))),(o=this.h)&&(this.g&&o.charAt(0)!="/"&&t.push("/"),t.push(Pt(o,o.charAt(0)=="/"?ro:so,!0))),(o=this.i.toString())&&t.push("?",o),(o=this.m)&&t.push("#",Pt(o,oo)),t.join("")},Ae.prototype.resolve=function(t){const r=pe(this);let o=!!t.j;o?Ot(r,t.j):o=!!t.o,o?r.o=t.o:o=!!t.g,o?r.g=t.g:o=t.u!=null;var d=t.h;if(o)Lt(r,t.u);else if(o=!!t.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var T=r.h.lastIndexOf("/");T!=-1&&(d=r.h.slice(0,T+1)+d)}if(T=d,T==".."||T==".")d="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){d=T.lastIndexOf("/",0)==0,T=T.split("/");const w=[];for(let L=0;L<T.length;){const B=T[L++];B=="."?d&&L==T.length&&w.push(""):B==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),d&&L==T.length&&w.push("")):(w.push(B),d=!0)}d=w.join("/")}else d=T}return o?r.h=d:o=t.i.toString()!=="",o?ln(r,Ms(t.i)):o=!!t.m,o&&(r.m=t.m),r};function pe(t){return new Ae(t)}function Ot(t,r,o){t.j=o?Dt(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function Lt(t,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);t.u=r}else t.u=null}function ln(t,r,o){r instanceof Ct?(t.i=r,lo(t.i,t.l)):(o||(r=Pt(r,ao)),t.i=new Ct(r,t.l))}function z(t,r,o){t.i.set(r,o)}function ai(t){return z(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function Dt(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Pt(t,r,o){return typeof t=="string"?(t=encodeURI(t).replace(r,no),o&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function no(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Os=/[#\/\?@]/g,so=/[#\?:]/g,ro=/[#\?]/g,ao=/[#\?@]/g,oo=/#/g;function Ct(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function je(t){t.g||(t.g=new Map,t.h=0,t.i&&io(t.i,function(r,o){t.add(decodeURIComponent(r.replace(/\+/g," ")),o)}))}i=Ct.prototype,i.add=function(t,r){je(this),this.i=null,t=dt(this,t);let o=this.g.get(t);return o||this.g.set(t,o=[]),o.push(r),this.h+=1,this};function Ls(t,r){je(t),r=dt(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function Ds(t,r){return je(t),r=dt(t,r),t.g.has(r)}i.forEach=function(t,r){je(this),this.g.forEach(function(o,d){o.forEach(function(T){t.call(r,T,d,this)},this)},this)};function Ps(t,r){je(t);let o=[];if(typeof r=="string")Ds(t,r)&&(o=o.concat(t.g.get(dt(t,r))));else for(t=Array.from(t.g.values()),r=0;r<t.length;r++)o=o.concat(t[r]);return o}i.set=function(t,r){return je(this),this.i=null,t=dt(this,t),Ds(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},i.get=function(t,r){return t?(t=Ps(this,t),t.length>0?String(t[0]):r):r};function Cs(t,r,o){Ls(t,r),o.length>0&&(t.i=null,t.g.set(dt(t,r),A(o)),t.h+=o.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(let d=0;d<r.length;d++){var o=r[d];const T=At(o);o=Ps(this,o);for(let w=0;w<o.length;w++){let L=T;o[w]!==""&&(L+="="+At(o[w])),t.push(L)}}return this.i=t.join("&")};function Ms(t){const r=new Ct;return r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),r}function dt(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function lo(t,r){r&&!t.j&&(je(t),t.i=null,t.g.forEach(function(o,d){const T=d.toLowerCase();d!=T&&(Ls(this,d),Cs(this,T,o))},t)),t.j=r}function co(t,r){const o=new kt;if(c.Image){const d=new Image;d.onload=E(xe,o,"TestLoadImage: loaded",!0,r,d),d.onerror=E(xe,o,"TestLoadImage: error",!1,r,d),d.onabort=E(xe,o,"TestLoadImage: abort",!1,r,d),d.ontimeout=E(xe,o,"TestLoadImage: timeout",!1,r,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=t}else r(!1)}function uo(t,r){const o=new kt,d=new AbortController,T=setTimeout(()=>{d.abort(),xe(o,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:d.signal}).then(w=>{clearTimeout(T),w.ok?xe(o,"TestPingServer: ok",!0,r):xe(o,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(T),xe(o,"TestPingServer: error",!1,r)})}function xe(t,r,o,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(o)}catch{}}function ho(){this.g=new Ha}function cn(t){this.i=t.Sb||null,this.h=t.ab||!1}S(cn,hs),cn.prototype.g=function(){return new oi(this.i,this.h)};function oi(t,r){te.call(this),this.H=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(oi,te),i=oi.prototype,i.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=r,this.readyState=1,Nt(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(r.body=t),(this.H||c).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Mt(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nt(this)),this.g&&(this.readyState=3,Nt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ns(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ns(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?Mt(this):Nt(this),this.readyState==3&&Ns(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,Mt(this))},i.Na=function(t){this.g&&(this.response=t,Mt(this))},i.ga=function(){this.g&&Mt(this)};function Mt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Nt(t)}i.setRequestHeader=function(t,r){this.A.append(t,r)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var o=r.next();!o.done;)o=o.value,t.push(o[0]+": "+o[1]),o=r.next();return t.join(`\r
`)};function Nt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Rs(t){let r="";return at(t,function(o,d){r+=d,r+=":",r+=o,r+=`\r
`}),r}function dn(t,r,o){e:{for(d in o){var d=!1;break e}d=!0}d||(o=Rs(o),typeof t=="string"?o!=null&&At(o):z(t,r,o))}function G(t){te.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(G,te);var fo=/^https?$/i,mo=["POST","PUT"];i=G.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,r,o,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vs.g(),this.g.onreadystatechange=b(_(this.Ca,this));try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(w){$s(this,w);return}if(t=o||"",o=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)o.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())o.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(o.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&t instanceof c.FormData,!(Array.prototype.indexOf.call(mo,r,void 0)>=0)||d||T||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,L]of o)this.g.setRequestHeader(w,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(w){$s(this,w)}};function $s(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.o=5,Bs(t),li(t)}function Bs(t){t.A||(t.A=!0,ne(t,"complete"),ne(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,ne(this,"complete"),ne(this,"abort"),li(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),G.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Us(this):this.Xa())},i.Xa=function(){Us(this)};function Us(t){if(t.h&&typeof l<"u"){if(t.v&&Oe(t)==4)setTimeout(t.Ca.bind(t),0);else if(ne(t,"readystatechange"),Oe(t)==4){t.h=!1;try{const w=t.ca();e:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}var o;if(!(o=r)){var d;if(d=w===0){let L=String(t.D).match(xs)[1]||null;!L&&c.self&&c.self.location&&(L=c.self.location.protocol.slice(0,-1)),d=!fo.test(L?L.toLowerCase():"")}o=d}if(o)ne(t,"complete"),ne(t,"success");else{t.o=6;try{var T=Oe(t)>2?t.g.statusText:""}catch{T=""}t.l=T+" ["+t.ca()+"]",Bs(t)}}finally{li(t)}}}}function li(t,r){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const o=t.g;t.g=null,r||ne(t,"ready");try{o.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Oe(t){return t.g?t.g.readyState:0}i.ca=function(){try{return Oe(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),qa(r)}};function Ws(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function po(t){const r={};t=(t.g&&Oe(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<t.length;d++){if(h(t[d]))continue;var o=Qa(t[d]);const T=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const w=r[T]||[];r[T]=w,w.push(o)}We(r,function(d){return d.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rt(t,r,o){return o&&o.internalChannelParams&&o.internalChannelParams[t]||r}function Fs(t){this.za=0,this.i=[],this.j=new kt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rt("baseRetryDelayMs",5e3,t),this.Za=Rt("retryDelaySeedMs",1e4,t),this.Ta=Rt("forwardChannelMaxRetries",2,t),this.va=Rt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new ws(t&&t.concurrentRequestLimit),this.Ba=new ho,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Fs.prototype,i.ka=8,i.I=1,i.connect=function(t,r,o,d){se(0),this.W=t,this.H=r||{},o&&d!==void 0&&(this.H.OSID=o,this.H.OAID=d),this.F=this.X,this.J=Xs(this,null,this.W),di(this)};function un(t){if(Vs(t),t.I==3){var r=t.V++,o=pe(t.J);if(z(o,"SID",t.M),z(o,"RID",r),z(o,"TYPE","terminate"),$t(t,o),r=new ke(t,t.j,r),r.M=2,r.A=ai(pe(o)),o=!1,c.navigator&&c.navigator.sendBeacon)try{o=c.navigator.sendBeacon(r.A.toString(),"")}catch{}!o&&c.Image&&(new Image().src=r.A,o=!0),o||(r.g=Ys(r.j,null),r.g.ea(r.A)),r.F=Date.now(),ri(r)}Js(t)}function ci(t){t.g&&(fn(t),t.g.cancel(),t.g=null)}function Vs(t){ci(t),t.v&&(c.clearTimeout(t.v),t.v=null),ui(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&c.clearTimeout(t.m),t.m=null)}function di(t){if(!Es(t.h)&&!t.m){t.m=!0;var r=t.Ea;$||f(),N||($(),N=!0),v.add(r,t),t.D=0}}function go(t,r){return Ss(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=r.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=St(_(t.Ea,t,r),Ks(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const T=new ke(this,this.j,t);let w=this.o;if(this.U&&(w?(w=Fe(w),bt(w,this.U)):w=this.U),this.u!==null||this.R||(T.J=w,w=null),this.S)e:{for(var r=0,o=0;o<this.i.length;o++){t:{var d=this.i[o];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(r+=d,r>4096){r=o;break e}if(r===4096||o===this.i.length-1){r=o+1;break e}}r=1e3}else r=1e3;r=qs(this,T,r),o=pe(this.J),z(o,"RID",t),z(o,"CVER",22),this.G&&z(o,"X-HTTP-Session-Id",this.G),$t(this,o),w&&(this.R?r="headers="+At(Rs(w))+"&"+r:this.u&&dn(o,this.u,w)),on(this.h,T),this.Ra&&z(o,"TYPE","init"),this.S?(z(o,"$req",r),z(o,"SID","null"),T.U=!0,nn(T,o,null)):nn(T,o,r),this.I=2}}else this.I==3&&(t?js(this,t):this.i.length==0||Es(this.h)||js(this))};function js(t,r){var o;r?o=r.l:o=t.V++;const d=pe(t.J);z(d,"SID",t.M),z(d,"RID",o),z(d,"AID",t.K),$t(t,d),t.u&&t.o&&dn(d,t.u,t.o),o=new ke(t,t.j,o,t.D+1),t.u===null&&(o.J=t.o),r&&(t.i=r.G.concat(t.i)),r=qs(t,o,1e3),o.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),on(t.h,o),nn(o,d,r)}function $t(t,r){t.H&&at(t.H,function(o,d){z(r,d,o)}),t.l&&at({},function(o,d){z(r,d,o)})}function qs(t,r,o){o=Math.min(t.i.length,o);const d=t.l?_(t.l.Ka,t.l,t):null;e:{var T=t.i;let B=-1;for(;;){const Q=["count="+o];B==-1?o>0?(B=T[0].g,Q.push("ofs="+B)):B=0:Q.push("ofs="+B);let H=!0;for(let ee=0;ee<o;ee++){var w=T[ee].g;const ge=T[ee].map;if(w-=B,w<0)B=Math.max(0,T[ee].g-100),H=!1;else try{w="req"+w+"_"||"";try{var L=ge instanceof Map?ge:Object.entries(ge);for(const[He,Le]of L){let De=Le;u(Le)&&(De=Ji(Le)),Q.push(w+He+"="+encodeURIComponent(De))}}catch(He){throw Q.push(w+"type="+encodeURIComponent("_badmap")),He}}catch{d&&d(ge)}}if(H){L=Q.join("&");break e}}L=void 0}return t=t.i.splice(0,o),r.G=t,L}function Hs(t){if(!t.g&&!t.v){t.Y=1;var r=t.Da;$||f(),N||($(),N=!0),v.add(r,t),t.A=0}}function hn(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=St(_(t.Da,t),Ks(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,zs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=St(_(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,se(10),ci(this),zs(this))};function fn(t){t.B!=null&&(c.clearTimeout(t.B),t.B=null)}function zs(t){t.g=new ke(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var r=pe(t.na);z(r,"RID","rpc"),z(r,"SID",t.M),z(r,"AID",t.K),z(r,"CI",t.F?"0":"1"),!t.F&&t.ia&&z(r,"TO",t.ia),z(r,"TYPE","xmlhttp"),$t(t,r),t.u&&t.o&&dn(r,t.u,t.o),t.O&&(t.g.H=t.O);var o=t.g;t=t.ba,o.M=1,o.A=ai(pe(r)),o.u=null,o.R=!0,Is(o,t)}i.Va=function(){this.C!=null&&(this.C=null,ci(this),hn(this),se(19))};function ui(t){t.C!=null&&(c.clearTimeout(t.C),t.C=null)}function Gs(t,r){var o=null;if(t.g==r){ui(t),fn(t),t.g=null;var d=2}else if(an(t.h,r))o=r.G,ks(t.h,r),d=1;else return;if(t.I!=0){if(r.o)if(d==1){o=r.u?r.u.length:0,r=Date.now()-r.F;var T=t.D;d=Qi(),ne(d,new gs(d,o)),di(t)}else Hs(t);else if(T=r.m,T==3||T==0&&r.X>0||!(d==1&&go(t,r)||d==2&&hn(t)))switch(o&&o.length>0&&(r=t.h,r.i=r.i.concat(o)),T){case 1:qe(t,5);break;case 4:qe(t,10);break;case 3:qe(t,6);break;default:qe(t,2)}}}function Ks(t,r){let o=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(o*=2),o*r}function qe(t,r){if(t.j.info("Error code "+r),r==2){var o=_(t.bb,t),d=t.Ua;const T=!d;d=new Ae(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ot(d,"https"),ai(d),T?co(d.toString(),o):uo(d.toString(),o)}else se(2);t.I=0,t.l&&t.l.pa(r),Js(t),Vs(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))};function Js(t){if(t.I=0,t.ja=[],t.l){const r=As(t.h);(r.length!=0||t.i.length!=0)&&(O(t.ja,r),O(t.ja,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.oa()}}function Xs(t,r,o){var d=o instanceof Ae?pe(o):new Ae(o);if(d.g!="")r&&(d.g=r+"."+d.g),Lt(d,d.u);else{var T=c.location;d=T.protocol,r=r?r+"."+T.hostname:T.hostname,T=+T.port;const w=new Ae(null);d&&Ot(w,d),r&&(w.g=r),T&&Lt(w,T),o&&(w.h=o),d=w}return o=t.G,r=t.wa,o&&r&&z(d,o,r),z(d,"VER",t.ka),$t(t,d),d}function Ys(t,r,o){if(r&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Aa&&!t.ma?new G(new cn({ab:o})):new G(t.ma),r.Fa(t.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qs(){}i=Qs.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function de(t,r){te.call(this),this.g=new Fs(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(t?t["X-WebChannel-Client-Profile"]=r.sa:t={"X-WebChannel-Client-Profile":r.sa}),this.g.U=t,(t=r&&r.Qb)&&!h(t)&&(this.g.u=t),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!h(r)&&(this.g.G=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new ut(this)}S(de,te),de.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},de.prototype.close=function(){un(this.g)},de.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var o={};o.__data__=t,t=o}else this.v&&(o={},o.__data__=Ji(t),t=o);r.i.push(new to(r.Ya++,t)),r.I==3&&di(r)},de.prototype.N=function(){this.g.l=null,delete this.j,un(this.g),delete this.g,de.Z.N.call(this)};function Zs(t){Xi.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){e:{for(const o in r){t=o;break e}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}S(Zs,Xi);function er(){Yi.call(this),this.status=1}S(er,Yi);function ut(t){this.g=t}S(ut,Qs),ut.prototype.ra=function(){ne(this.g,"a")},ut.prototype.qa=function(t){ne(this.g,new Zs(t))},ut.prototype.pa=function(t){ne(this.g,new er)},ut.prototype.oa=function(){ne(this.g,"b")},de.prototype.send=de.prototype.o,de.prototype.open=de.prototype.m,de.prototype.close=de.prototype.close,Zi.NO_ERROR=0,Zi.TIMEOUT=8,Zi.HTTP_ERROR=6,Ya.COMPLETE="complete",za.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",te.prototype.listen=te.prototype.J,G.prototype.listenOnce=G.prototype.K,G.prototype.getLastError=G.prototype.Ha,G.prototype.getLastErrorCode=G.prototype.ya,G.prototype.getStatus=G.prototype.ca,G.prototype.getResponseJson=G.prototype.La,G.prototype.getResponseText=G.prototype.la,G.prototype.send=G.prototype.ea,G.prototype.setWithCredentials=G.prototype.Fa}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Ri="12.12.0";function Hl(i){Ri=i}/**
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
 */const Ti=new Fn("@firebase/firestore");function fe(i,...e){if(Ti.logLevel<=q.DEBUG){const n=e.map(ra);Ti.debug(`Firestore (${Ri}): ${i}`,...n)}}function sa(i,...e){if(Ti.logLevel<=q.ERROR){const n=e.map(ra);Ti.error(`Firestore (${Ri}): ${i}`,...n)}}function ra(i){if(typeof i=="string")return i;try{return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function wi(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,aa(i,s,n)}function aa(i,e,n){let s=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw sa(s),new Error(s)}function Ut(i,e,n,s){let a="Unexpected state";typeof n=="string"?a=n:s=n,i||aa(e,a,s)}/**
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
 */const V={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class j extends Ue{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class zl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(le.UNAUTHENTICATED))}shutdown(){}}class Kl{constructor(e){this.t=e,this.currentUser=le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ut(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let l=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Wt,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},u=p=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>u(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?u(p):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Wt)}},0),c()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ut(typeof s.accessToken=="string",31837,{l:s}),new zl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ut(e===null||typeof e=="string",2055,{h:e}),new le(e)}}class Jl{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=le.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Xl{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new Jl(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yl{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ze(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ut(this.o===void 0,3512);const s=l=>{l.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,fe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?n(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ut(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new hr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ql(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Zl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Ql(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<n&&(s+=e.charAt(a[l]%62))}return s}}function Be(i,e){return i<e?-1:i>e?1:0}function ec(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const a=i.charAt(s),l=e.charAt(s);if(a!==l)return In(a)===In(l)?Be(a,l):In(a)?1:-1}return Be(i.length,e.length)}const tc=55296,ic=57343;function In(i){const e=i.charCodeAt(0);return e>=tc&&e<=ic}/**
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
 */const fr="__name__";class ve{constructor(e,n,s){n===void 0?n=0:n>e.length&&wi(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&wi(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ve.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ve?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const l=ve.compareSegments(e.get(a),n.get(a));if(l!==0)return l}return Be(e.length,n.length)}static compareSegments(e,n){const s=ve.isNumericId(e),a=ve.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?ve.extractNumericId(e).compare(ve.extractNumericId(n)):ec(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qn.fromString(e.substring(4,e.length-2))}}class he extends ve{construct(e,n,s){return new he(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new he(n)}static emptyPath(){return new he([])}}const nc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends ve{construct(e,n,s){return new Ge(e,n,s)}static isValidIdentifier(e){return nc.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fr}static keyField(){return new Ge([fr])}static fromServerFormat(e){const n=[];let s="",a=0;const l=()=>{if(s.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let c=!1;for(;a<e.length;){const u=e[a];if(u==="\\"){if(a+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else u==="`"?(c=!c,a++):u!=="."||c?(s+=u,a++):(l(),a++)}if(l(),c)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class Ke{constructor(e){this.path=e}static fromPath(e){return new Ke(he.fromString(e))}static fromName(e){return new Ke(he.fromString(e).popFirst(5))}static empty(){return new Ke(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ke(new he(e.slice()))}}function sc(i,e,n,s){if(e===!0&&s===!0)throw new j(V.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function rc(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}/**
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
 */function J(i,e){const n={typeString:i};return e&&(n.value=e),n}function ti(i,e){if(!rc(i))throw new j(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const c=i[s];if(a&&typeof c!==a){n=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){n=`Expected '${s}' field to equal '${l.value}'`;break}}if(n)throw new j(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const mr=-62135596800,pr=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*pr);return new ye(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<mr)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pr}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ti(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-mr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:J("string",ye._jsonSchemaVersion),seconds:J("number"),nanoseconds:J("number")};function ac(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class oc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new oc("Invalid base64 string: "+l):l}}(e);return new et(n)}static fromUint8Array(e){const n=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const gr="(default)";class Ei{constructor(e,n){this.projectId=e,this.database=n||gr}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database===gr}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}function lc(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(i.options.projectId,e)}/**
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
 */class cc{constructor(e,n=null,s=[],a=[],l=null,c="F",u=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=u,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function dc(i){return new cc(i)}/**
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
 */var vr,W;(W=vr||(vr={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new qn([4294967295,4294967295],0);/**
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
 */const uc=41943040;/**
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
 */const hc=1048576;function bn(){return typeof document<"u"?document:null}class fc{constructor(e,n,s=1e3,a=1.5,l=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=a,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,n-s);a>0&&fe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class Hn{constructor(e,n,s,a,l){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,l){const c=Date.now()+s,u=new Hn(e,n,c,a,l);return u.start(s),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var yr,_r;(_r=yr||(yr={})).Ma="default",_r.Cache="cache";/**
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
 */function mc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const pc="ComponentProvider",Ir=new Map;/**
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
 */const gc="firestore.googleapis.com",br=!0;class Tr{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gc,this.ssl=br}else this.host=e.host,this.ssl=e.ssl??br;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hc)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mc(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Gl;switch(s.type){case"firstParty":return new Xl(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Ir.get(n);s&&(fe(pc,"Removing Datastore"),Ir.delete(n),s.terminate())}(this),Promise.resolve()}}/**
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
 */class zn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zn(this.firestore,e,this._query)}}class Ie{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(ti(n,Ie._jsonSchema))return new Ie(e,s||null,new Ke(he.fromString(n.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:J("string",Ie._jsonSchemaVersion),referencePath:J("string")};class Gn extends zn{constructor(e,n,s){super(e,n,dc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new Ke(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}/**
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
 */const wr="AsyncQueue";class Er{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fc(this,"async_queue_retry"),this._c=()=>{const s=bn();s&&fe(wr,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=bn();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=bn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Wt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ac(e))throw e;fe(wr,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,sa("INTERNAL UNHANDLED ERROR: ",Sr(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const a=Hn.createAndSchedule(this,e,n,s,l=>this.hc(l));return this.tc.push(a),a}uc(){this.nc&&wi(47125,{Pc:Sr(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Sr(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class yc extends vc{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new Er,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Er(e),this._firestoreClient=void 0,await e}}}/**
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
 */class Ee{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ee(et.fromBase64String(e))}catch(n){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ee(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ee._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ti(e,Ee._jsonSchema))return Ee.fromBase64String(e.bytes)}}Ee._jsonSchemaVersion="firestore/bytes/1.0",Ee._jsonSchema={type:J("string",Ee._jsonSchemaVersion),bytes:J("string")};/**
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
 */class oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xe{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xe._jsonSchemaVersion}}static fromJSON(e){if(ti(e,Xe._jsonSchema))return new Xe(e.latitude,e.longitude)}}Xe._jsonSchemaVersion="firestore/geoPoint/1.0",Xe._jsonSchema={type:J("string",Xe._jsonSchemaVersion),latitude:J("number"),longitude:J("number")};/**
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
 */class Ye{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ti(e,Ye._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ye(e.vectorValues);throw new j(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:J("string",Ye._jsonSchemaVersion),vectorValues:J("object")};function la(i,e,n){if((e=ei(e))instanceof oa)return e._internalPath;if(typeof e=="string")return Ic(i,e);throw Dn("Field path arguments must be of type string or ",i)}const _c=new RegExp("[~\\*/\\[\\]]");function Ic(i,e,n){if(e.search(_c)>=0)throw Dn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new oa(...e.split("."))._internalPath}catch{throw Dn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Dn(i,e,n,s,a){let l=`Function ${e}() called with invalid data`;l+=". ";let c="";return new j(V.INVALID_ARGUMENT,l+i+c)}const kr="@firebase/firestore",Ar="4.14.0";/**
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
 */class ca{constructor(e,n,s,a,l){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(la("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bc extends ca{data(){return super.data()}}class mi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ft extends ca{constructor(e,n,s,a,l,c){super(e,n,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(la("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ft._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ft._jsonSchemaVersion="firestore/documentSnapshot/1.0",ft._jsonSchema={type:J("string",ft._jsonSchemaVersion),bundleSource:J("string","DocumentSnapshot"),bundleName:J("string"),bundle:J("string")};class yi extends ft{data(e={}){return super.data(e)}}class Ft{constructor(e,n,s,a){this._firestore=e,this._userDataWriter=n,this._snapshot=a,this.metadata=new mi(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new yi(this._firestore,this._userDataWriter,s.key,s,new mi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(u=>{const p=new yi(a._firestore,a._userDataWriter,u.doc.key,u.doc,new mi(a._snapshot.mutatedKeys.has(u.doc.key),a._snapshot.fromCache),a.query.converter);return u.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(u=>l||u.type!==3).map(u=>{const p=new yi(a._firestore,a._userDataWriter,u.doc.key,u.doc,new mi(a._snapshot.mutatedKeys.has(u.doc.key),a._snapshot.fromCache),a.query.converter);let _=-1,E=-1;return u.type!==0&&(_=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),E=c.indexOf(u.doc.key)),{type:Tc(u.type),doc:p,oldIndex:_,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ft._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(n.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Tc(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return wi(61501,{type:i})}}/**
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
 */Ft._jsonSchemaVersion="firestore/querySnapshot/1.0",Ft._jsonSchema={type:J("string",Ft._jsonSchemaVersion),bundleSource:J("string","QuerySnapshot"),bundleName:J("string"),bundle:J("string")};(function(e,n=!0){Hl(Ni),vt(new gt("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),u=new yc(new Kl(s.getProvider("auth-internal")),new Yl(c,s.getProvider("app-check-internal")),lc(c,a),c);return l={useFetchStreams:n,...l},u._setSettings(l),u},"PUBLIC").setMultipleInstances(!0)),$e(kr,Ar,e),$e(kr,Ar,"esm2020")})();function da(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wc=da,ua=new Zt("auth","Firebase",da());/**
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
 */const Si=new Fn("@firebase/auth");function Ec(i,...e){Si.logLevel<=q.WARN&&Si.warn(`Auth (${Ni}): ${i}`,...e)}function _i(i,...e){Si.logLevel<=q.ERROR&&Si.error(`Auth (${Ni}): ${i}`,...e)}/**
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
 */function xr(i,...e){throw Kn(i,...e)}function ha(i,...e){return Kn(i,...e)}function fa(i,e,n){const s={...wc(),[e]:n};return new Zt("auth","Firebase",s).create(e,{appName:i.name})}function Ii(i){return fa(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kn(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return ua.create(i,...e)}function F(i,e,...n){if(!i)throw Kn(e,...n)}function Vt(i){const e="INTERNAL ASSERTION FAILED: "+i;throw _i(e),new Error(e)}function ki(i,e){i||Vt(e)}function Sc(){return Or()==="http:"||Or()==="https:"}function Or(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function kc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sc()||Oo()||"connection"in navigator)?navigator.onLine:!0}function Ac(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,ki(n>e,"Short delay should be less than long delay!"),this.isMobile=Ao()||Lo()}get(){return kc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xc(i,e){ki(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ma{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Oc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dc=new ii(3e4,6e4);function pa(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function $i(i,e,n,s,a={}){return ga(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const u=Qr({key:i.config.apiKey,...c}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const _={method:e,headers:p,...l};return xo()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Zr(i.emulatorConfig.host)&&(_.credentials="include"),ma.fetch()(await va(i,i.config.apiHost,n,u),_)})}async function ga(i,e,n){i._canInitEmulator=!1;const s={...Oc,...e};try{const a=new Pc(i),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw pi(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const u=l.ok?c.errorMessage:c.error.message,[p,_]=u.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw pi(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw pi(i,"user-disabled",c);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw fa(i,E,_);xr(i,E)}}catch(a){if(a instanceof Ue)throw a;xr(i,"network-request-failed",{message:String(a)})}}async function va(i,e,n,s){const a=`${e}${n}?${s}`,l=i,c=l.config.emulator?xc(i.config,a):`${i.config.apiScheme}://${a}`;return Lc.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}class Pc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ha(this.auth,"network-request-failed")),Dc.get())})}}function pi(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=ha(i,e,s);return a.customData._tokenResponse=n,a}/**
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
 */async function Cc(i,e){return $i(i,"POST","/v1/accounts:delete",e)}async function Ai(i,e){return $i(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function jt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mc(i,e=!1){const n=ei(i),s=await n.getIdToken(e),a=ya(s);F(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:jt(Tn(a.auth_time)),issuedAtTime:jt(Tn(a.iat)),expirationTime:jt(Tn(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Tn(i){return Number(i)*1e3}function ya(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return _i("JWT malformed, contained fewer than 3 sections"),null;try{const a=Yr(n);return a?JSON.parse(a):(_i("Failed to decode base64 JWT payload"),null)}catch(a){return _i("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Lr(i){const e=ya(i);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pn(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ue&&Nc(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Nc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Rc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jt(this.lastLoginAt),this.creationTime=jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xi(i){var S;const e=i.auth,n=await i.getIdToken(),s=await Pn(i,Ai(e,{idToken:n}));F(s==null?void 0:s.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const l=(S=a.providerUserInfo)!=null&&S.length?_a(a.providerUserInfo):[],c=Bc(i.providerData,l),u=i.isAnonymous,p=!(i.email&&a.passwordHash)&&!(c!=null&&c.length),_=u?p:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Cn(a.createdAt,a.lastLoginAt),isAnonymous:_};Object.assign(i,E)}async function $c(i){const e=ei(i);await xi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bc(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function _a(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Uc(i,e){const n=await ga(i,{},async()=>{const s=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await va(i,a,"/v1/token",`key=${l}`),u=await i._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:u,body:s};return i.emulatorConfig&&Zr(i.emulatorConfig.host)&&(p.credentials="include"),ma.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Wc(i,e){return $i(i,"POST","/v2/accounts:revokeToken",pa(i,e))}/**
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
 */class mt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=Lr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:l}=await Uc(e,n);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:l}=n,c=new mt;return s&&(F(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(F(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(F(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mt,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function Pe(i,e){F(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class be{constructor({uid:e,auth:n,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new Rc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cn(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mc(this,e)}reload(){return $c(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new be({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await xi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(Ii(this.auth));const e=await this.getIdToken();return await Pn(this,Cc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,u=n.tenantId??void 0,p=n._redirectEventId??void 0,_=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:S,emailVerified:b,isAnonymous:A,providerData:O,stsTokenManager:x}=n;F(S&&x,e,"internal-error");const C=mt.fromJSON(this.name,x);F(typeof S=="string",e,"internal-error"),Pe(s,e.name),Pe(a,e.name),F(typeof b=="boolean",e,"internal-error"),F(typeof A=="boolean",e,"internal-error"),Pe(l,e.name),Pe(c,e.name),Pe(u,e.name),Pe(p,e.name),Pe(_,e.name),Pe(E,e.name);const D=new be({uid:S,auth:e,email:a,emailVerified:b,displayName:s,isAnonymous:A,photoURL:c,phoneNumber:l,tenantId:u,stsTokenManager:C,createdAt:_,lastLoginAt:E});return O&&Array.isArray(O)&&(D.providerData=O.map(P=>({...P}))),p&&(D._redirectEventId=p),D}static async _fromIdTokenResponse(e,n,s=!1){const a=new mt;a.updateFromServerResponse(n);const l=new be({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await xi(l),l}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];F(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?_a(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),u=new mt;u.updateFromIdToken(s);const p=new be({uid:a.localId,auth:e,stsTokenManager:u,isAnonymous:c}),_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Cn(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,_),p}}/**
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
 */const Dr=new Map;function Je(i){ki(i instanceof Function,"Expected a class definition");let e=Dr.get(i);return e?(ki(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Dr.set(i,e),e)}/**
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
 */class Ia{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ia.type="NONE";const Pr=Ia;/**
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
 */function wn(i,e,n){return`firebase:${i}:${e}:${n}`}class pt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=wn(this.userKey,a.apiKey,l),this.fullPersistenceKey=wn("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ai(this.auth,{idToken:e}).catch(()=>{});return n?be._fromGetAccountInfoResponse(this.auth,n,e):null}return be._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pt(Je(Pr),e,s);const a=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=a[0]||Je(Pr);const c=wn(s,e.config.apiKey,e.name);let u=null;for(const _ of n)try{const E=await _._get(c);if(E){let S;if(typeof E=="string"){const b=await Ai(e,{idToken:E}).catch(()=>{});if(!b)break;S=await be._fromGetAccountInfoResponse(e,b,E)}else S=be._fromJSON(e,E);_!==l&&(u=S),l=_;break}}catch{}const p=a.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new pt(l,e,s):(l=p[0],u&&await l._set(c,u.toJSON()),await Promise.all(n.map(async _=>{if(_!==l)try{await _._remove(c)}catch{}})),new pt(l,e,s))}}/**
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
 */function Cr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zc(e))return"Blackberry";if(Gc(e))return"Webos";if(Vc(e))return"Safari";if((e.includes("chrome/")||jc(e))&&!e.includes("edge/"))return"Chrome";if(Hc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fc(i=we()){return/firefox\//i.test(i)}function Vc(i=we()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jc(i=we()){return/crios\//i.test(i)}function qc(i=we()){return/iemobile/i.test(i)}function Hc(i=we()){return/android/i.test(i)}function zc(i=we()){return/blackberry/i.test(i)}function Gc(i=we()){return/webos/i.test(i)}/**
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
 */function ba(i,e=[]){let n;switch(i){case"Browser":n=Cr(we());break;case"Worker":n=`${Cr(we())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ni}/${s}`}/**
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
 */class Kc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=l=>new Promise((c,u)=>{try{const p=e(l);c(p)}catch(p){u(p)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Jc(i,e={}){return $i(i,"GET","/v2/passwordPolicy",pa(i,e))}/**
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
 */const Xc=6;class Yc{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Xc,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Qc{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mr(this),this.idTokenSubscription=new Mr(this),this.beforeStateQueue=new Kc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ua,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await pt.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ai(this,{idToken:e}),s=await be._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(ze(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,u=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===u)&&(p!=null&&p.user)&&(s=p.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ac()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(Ii(this));const n=e?ei(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(Ii(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(Ii(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jc(this),n=new Yc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Wc(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(u,this,"internal-error"),u.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ba(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ec(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Zc(i){return ei(i)}class Mr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ro(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ed(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Je);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new ii(3e4,6e4);/**
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
 */new ii(2e3,1e4);/**
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
 */new ii(3e4,6e4);/**
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
 */new ii(5e3,15e3);var Nr="@firebase/auth",Rr="1.13.0";/**
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
 */class td{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function id(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nd(i){vt(new gt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:u}=s.options;F(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:u,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ba(i)},_=new Qc(s,a,l,p);return ed(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),vt(new gt("auth-internal",e=>{const n=Zc(e.getProvider("auth").getImmediate());return(s=>new td(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(Nr,Rr,id(i)),$e(Nr,Rr,"esm2020")}/**
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
 */const sd=5*60;ko("authIdTokenMaxAge");nd("Browser");console.warn("⚠️ Firebase未設定。.envファイルにAPIキーを設定してください。");function zt(i){const e=new Date(i),n=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${n}-${s}-${a}`}function Gt(i){const e=new Date(i),n=["日","月","火","水","木","金","土"];return`${e.getMonth()+1}月${e.getDate()}日（${n[e.getDay()]}）`}function it(){return zt(new Date)}function Kt(i){const e=Math.floor(i/60),n=i%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function K(i){if(!i)return 0;const[e,n]=i.split(":").map(Number);return e*60+n}function Ta(){return Date.now().toString(36)+Math.random().toString(36).slice(2,9)}function wa(i,e,n,s){const l=gi(n-i),c=gi(s-e),u=Math.sin(l/2)**2+Math.cos(gi(i))*Math.cos(gi(n))*Math.sin(c/2)**2;return 6371*2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))}function gi(i){return i*(Math.PI/180)}function X(i){const e=document.createElement("div");return e.textContent=i,e.innerHTML}function R(i,e="info",n=4e3,s=null){const a=document.getElementById("toast-container"),l={success:"check_circle",error:"error",warning:"warning",info:"info"},c=document.createElement("div");c.className=`toast ${e}`,c.innerHTML=`
    <span class="material-icons-round toast-icon">${l[e]||"info"}</span>
    <span class="toast-message">${X(i)}</span>
    ${s?'<button class="toast-undo">元に戻す</button>':""}
  `,a.appendChild(c),s&&c.querySelector(".toast-undo").addEventListener("click",()=>{c.remove(),s()}),setTimeout(()=>{c.style.opacity="0",c.style.transform="translateX(40px)",c.style.transition="all .3s ease",setTimeout(()=>c.remove(),300)},n)}function _t(i,e,n=""){const s=document.getElementById("modal-overlay");document.getElementById("modal-title").textContent=i,document.getElementById("modal-body").innerHTML=e,document.getElementById("modal-footer").innerHTML=n,s.style.display="flex"}function oe(){document.getElementById("modal-overlay").style.display="none"}function me(i,e){return new Promise(n=>{const s=`<p>${X(e)}</p>`;_t(i,s,`
      <button class="btn btn-secondary" id="confirm-cancel">キャンセル</button>
      <button class="btn btn-danger" id="confirm-ok">OK</button>
    `),document.getElementById("confirm-ok").onclick=()=>{oe(),n(!0)},document.getElementById("confirm-cancel").onclick=()=>{oe(),n(!1)}})}function Ea(i,e){if(!i)return 0;let n=1500;return i.type==="正社員"?i.name.includes("前川")?n=2500:n=1500:i.type==="パート"&&(n=parseInt(i.wage)||1500),Math.round(n*(e/60))}function Mn(i,e){const s={身体介護:{20:1670,30:2500,60:3960,90:5790,120:7630},生活援助:{20:1830,45:2250,60:2870},通院等乗降介助:{per_trip:990},医療的ケア:{30:3e3,60:5e3}}[i];if(!s)return 3e3;if(s.per_trip)return s.per_trip;const a=Object.keys(s).map(Number).sort((c,u)=>c-u);let l=a[0];for(const c of a)e>=c&&(l=c);return s[l]||3e3}function rd(i){{console.warn("Firebase未設定のためログイン画面を表示します"),setTimeout(()=>i(null,null),100);return}}async function ad(){throw new Error("Firebase未設定です。.envにAPIキーを設定してください。")}async function od(){}function ld(){const i=document.getElementById("btn-google-login");i&&i.addEventListener("click",async()=>{i.disabled=!0,i.textContent="ログイン中...";try{await ad()}catch(e){console.error("ログインエラー:",e),e.code==="auth/popup-closed-by-user"?R("ログインがキャンセルされました","warning"):R("ログインに失敗しました","error"),i.disabled=!1,i.innerHTML=`
        <svg viewBox="0 0 24 24" width="20" height="20" class="google-icon">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Googleアカウントでログイン
      `}})}const Me={};function It(i){if(!Me[i]){const e=localStorage.getItem(`careroute_${i}`);Me[i]=e?JSON.parse(e):[]}return Me[i]}function Bi(i){localStorage.setItem(`careroute_${i}`,JSON.stringify(Me[i]||[]))}async function $r(){localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"),localStorage.removeItem("careroute_routes"),Me.staff=[],Me.clients=[],Me.visits=[],Me.routes=[]}async function Jn(i,e){{const n=Ta();return It(i).push({id:n,...e,createdAt:new Date().toISOString()}),Bi(i),n}}async function Xn(i){return It(i)}async function Yn(i,e,n){{const s=It(i),a=s.findIndex(l=>l.id===e);a!==-1&&(s[a]={...s[a],...n,updatedAt:new Date().toISOString()},Bi(i));return}}async function Qn(i,e){{const n=It(i),s=n.findIndex(a=>a.id===e);s!==-1&&(n.splice(s,1),Bi(i));return}}async function Sa(i,e,n,s){return It(i).filter(l=>l[e]===s)}async function re(){return Xn("staff")}async function ka(i){return Jn("staff",i)}async function cd(i,e){return Yn("staff",i,e)}async function dd(i){return Qn("staff",i)}async function ue(){return Xn("clients")}async function Aa(i){return Jn("clients",i)}async function ud(i,e){return Yn("clients",i,e)}async function hd(i){return Qn("clients",i)}async function Ui(){return Xn("visits")}async function nt(i){return Sa("visits","date","==",i)}async function Wi(i){return Jn("visits",i)}async function _e(i,e){return Yn("visits",i,e)}async function Zn(i){return Qn("visits",i)}async function es(i){return Sa("routes","date","==",i)}async function xa(i){{const e=It("routes");for(const n of i){const s=e.findIndex(a=>a.staffId===n.staffId&&a.date===n.date);s>=0?e[s]={...n,updatedAt:new Date().toISOString()}:e.push({id:Ta(),...n,createdAt:new Date().toISOString()})}Bi("routes");return}}async function fd(){const i=document.getElementById("page-container"),[e,n]=await Promise.all([re().catch(()=>[]),ue().catch(()=>[])]),s=it(),a=await nt(s).catch(()=>[]),l=e.filter(S=>S.isActive);n.filter(S=>S.isActive);const c=a.filter(S=>S.type!=="sales");c.filter(S=>S.status==="scheduled"||!S.status);const u=c.filter(S=>S.status==="completed"),p=c.filter(S=>S.status==="cancelled"),_=a.filter(S=>S.type==="sales"),E={};p.forEach(S=>{const b=S.cancelReason||"理由なし";E[b]=(E[b]||0)+1}),i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">dashboard</span>
        ダッシュボード
      </h1>
      <span style="color:var(--text-secondary)">${Gt(new Date)}</span>
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
        <div class="stat-value">${_.length}<span style="font-size:.9rem;color:var(--text-muted)">件</span></div>
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
          ${l.length===0?'<p style="color:var(--text-muted);text-align:center;padding:20px">職員が登録されていません</p>':l.map(S=>{const b=c.filter(D=>D.staffId===S.id),A=b.filter(D=>D.status==="completed").length,O=b.filter(D=>D.status==="cancelled").length,x=_.filter(D=>D.staffId===S.id).length,C=b.length>0?Math.round(A/b.length*100):0;return`
                  <div class="staff-status-row">
                    <div class="staff-status-dot" style="background:${S.color||"#999"}"></div>
                    <div class="staff-status-info">
                      <div class="staff-status-name">${S.name}</div>
                      <div class="staff-status-sub">訪問: ${b.length}件</div>
                      <div class="progress-bar">
                        <div class="progress-fill" style="width:${C}%"></div>
                      </div>
                    </div>
                    <div class="staff-status-stats">
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">完了</div>
                        <div class="staff-stat-value" style="color:var(--success)">${A}</div>
                      </div>
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">キャンセル</div>
                        <div class="staff-stat-value" style="color:${O>0?"var(--danger)":"var(--text-muted)"}">${O}</div>
                      </div>
                      <div class="staff-stat-item">
                        <div class="staff-stat-label">営業</div>
                        <div class="staff-stat-value" style="color:${x>0?"var(--warning)":"var(--text-muted)"}">${x}</div>
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
          ${p.length===0?'<p style="color:var(--text-muted); text-align:center; padding:20px;">本日のキャンセルはありません</p>':Object.entries(E).map(([S,b])=>{const A=Math.round(b/p.length*100);return`
                  <div style="margin-bottom:12px;">
                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px;">
                      <span>${S}</span>
                      <span style="font-weight:bold;">${b}件 (${A}%)</span>
                    </div>
                    <div style="width:100%; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
                      <div style="width:${A}%; height:100%; background:var(--danger);"></div>
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
  `,document.getElementById("dash-btn-matching").addEventListener("click",()=>Te("matching")),document.getElementById("dash-btn-map").addEventListener("click",()=>Te("map")),document.getElementById("dash-btn-revenue").addEventListener("click",()=>Te("revenue"))}let ce=null,Jt=[],Nn=[],Xt=null,Rn=null,$n=[];function tt(){return new Promise((i,e)=>{if(window.google&&window.google.maps){i();return}{console.warn("Google Maps APIキーが設定されていません。デモモードで動作します。"),i();return}})}function md(i,e={lat:35.6938,lng:139.7034},n=14){const s=document.getElementById(i);return s?!window.google||!window.google.maps?(s.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:center;height:100%;
        background:#1E293B;color:#94A3B8;flex-direction:column;gap:16px;">
        <span class="material-icons-round" style="font-size:64px;opacity:.3">map</span>
        <p>Google Maps APIキーを設定してください</p>
        <p style="font-size:.8rem">(.env ファイルに VITE_GOOGLE_MAPS_API_KEY を設定)</p>
      </div>
    `,null):(ce=new google.maps.Map(s,{center:e,zoom:n,mapTypeControl:!0,streetViewControl:!1,fullscreenControl:!0,styles:Id()}),Xt=new google.maps.InfoWindow,Rn=new google.maps.DirectionsService,ce):null}function Oa(i,e={}){if(!ce)return null;const n=new google.maps.Marker({map:ce,position:i,title:e.title||"",icon:e.icon||void 0,label:e.label||void 0});return e.infoContent&&n.addListener("click",()=>{Xt.setContent(e.infoContent),Xt.open(ce,n)}),Jt.push(n),n}function Br(i,e,n,s){if(!ce)return null;const a={path:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",fillColor:e,fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:1.8,anchor:new google.maps.Point(12,22),labelOrigin:new google.maps.Point(12,9)};return Oa(i,{icon:a,label:void 0,infoContent:s})}function pd(i,e){return ce?Oa(i,{title:e,icon:{path:"M12 2L2 7v10l10 5 10-5V7L12 2z",fillColor:"#F59E0B",fillOpacity:1,strokeColor:"#fff",strokeWeight:2,scale:2,anchor:new google.maps.Point(12,12)},infoContent:`<div style="color:#333;padding:4px"><strong>🏢 ${e}</strong><br>（出発地点）</div>`}):null}function gd(i,e,n){if(!ce)return null;const s=i.map(l=>({lat:l.lat,lng:l.lng})),a=new google.maps.Polyline({path:s,geodesic:!0,strokeColor:e,strokeOpacity:.8,strokeWeight:4,map:ce});return Nn.push(a),a}async function vd(i,e){if(!ce||!Rn||i.length<2)return;const n=i[0],s=i[i.length-1],a=i.slice(1,-1).map(l=>({location:new google.maps.LatLng(l.lat,l.lng),stopover:!0}));try{const l=await new Promise((u,p)=>{Rn.route({origin:new google.maps.LatLng(n.lat,n.lng),destination:new google.maps.LatLng(s.lat,s.lng),waypoints:a,travelMode:google.maps.TravelMode.DRIVING,optimizeWaypoints:!1},(_,E)=>{E==="OK"?u(_):p(new Error(`Directions API: ${E}`))})}),c=new google.maps.DirectionsRenderer({map:ce,directions:l,suppressMarkers:!0,polylineOptions:{strokeColor:e,strokeWeight:4,strokeOpacity:.8}});return $n.push(c),c}catch(l){return console.warn("Directions API呼び出し失敗。直線ポリラインで代替:",l),gd(i,e)}}async function Oi(i){if(!window.google||!window.google.maps)return null;const e=new google.maps.DistanceMatrixService,n=i.map(s=>new google.maps.LatLng(s.lat,s.lng));try{return(await new Promise((l,c)=>{e.getDistanceMatrix({origins:n,destinations:n,travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC},(u,p)=>{p==="OK"?l(u):c(new Error(`Distance Matrix API: ${p}`))})})).rows.map(l=>l.elements.map(c=>({distance:c.status==="OK"?c.distance.value/1e3:null,duration:c.status==="OK"?Math.ceil(c.duration.value/60):null})))}catch(s){return console.error("Distance Matrix取得失敗:",s),null}}function yd(){Jt.forEach(i=>i.setMap(null)),Jt=[],Nn.forEach(i=>i.setMap(null)),Nn=[],$n.forEach(i=>i.setMap(null)),$n=[],Xt&&Xt.close()}function _d(){if(!ce||Jt.length===0)return;const i=new google.maps.LatLngBounds;Jt.forEach(e=>i.extend(e.getPosition())),ce.fitBounds(i,50)}async function La(i){if(!i||i.trim()==="")return null;if(!window.google||!window.google.maps)return console.warn("ジオコーディング: Google Maps APIが未読み込みです"),null;const e=new google.maps.Geocoder;try{return await new Promise((s,a)=>{e.geocode({address:i,region:"jp"},(l,c)=>{if(c==="OK"&&l[0]){const u=l[0].geometry.location;s({lat:u.lat(),lng:u.lng()})}else a(new Error(`ジオコーディング失敗: ${c}`))})})}catch(n){return console.warn("住所の座標変換に失敗:",n.message),null}}function Id(){return[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]}const Li={qualifications:{label:"資格",options:["介護福祉士","実務者研修修了","初任者研修修了","看護師","ヘルパー2級"]},services:{label:"対応可能サービス",options:["身体介護","生活援助","通院等乗降介助","医療的ケア"]},physical:{label:"身体的対応力",options:["重介護対応可","移乗介助可","入浴介助可","二人介助対応可"]},special:{label:"特別スキル",options:["認知症ケア","ターミナルケア","精神障害対応","障害児支援"]}},bd=["要支援1","要支援2","要介護1","要介護2","要介護3","要介護4","要介護5"],Da=["身体介護","生活援助","通院等乗降介助","医療的ケア"],Td=["男性","女性"],wd=["指定なし","男性希望","女性希望"],Ed=["利用者の体調不良","利用者の入院","家族の都合","不在・応答なし","その他"],Sd=["居宅介護支援事業所（ケアマネ）","地域包括支援センター","医療機関（退院調整室）","その他"],kd=["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],Ur=["#4A90D9","#E74C3C","#2ECC71","#F39C12","#9B59B6","#1ABC9C","#E67E22","#3498DB","#E91E63","#00BCD4","#8BC34A","#FF5722"],Bt={requiredSkill:1e3,genderMatch:2e3,staffType:500,proximity:500},bi=25,Z={name:"事業所（拠点）",address:"〒501-3304 岐阜県加茂郡富加町高畑２９１",lat:35.497,lng:136.993};let Bn="all",Yt=it();const Wr=localStorage.getItem("navDate");Wr&&(Yt=Wr,localStorage.removeItem("navDate"));async function Ad(){var n,s,a;const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">map</span>
        マップビュー
      </h1>
      <div class="btn-group">
        <input type="date" id="map-date-picker" class="form-input" value="${Yt}" style="width:160px">
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
  `;try{await tt()}catch(l){console.warn("Maps APIの読み込みスキップ:",l)}const e=md("map-canvas",{lat:Z.lat,lng:Z.lng});await vi(e),(n=document.getElementById("map-date-picker"))==null||n.addEventListener("change",l=>{Yt=l.target.value,vi(e)}),(s=document.getElementById("staff-filter"))==null||s.addEventListener("change",l=>{Bn=l.target.value,vi(e)}),(a=document.getElementById("btn-refresh-map"))==null||a.addEventListener("click",()=>{vi(e)})}async function vi(i){const[e,n,s]=await Promise.all([re().catch(()=>[]),ue().catch(()=>[]),nt(Yt).catch(()=>[])]),a=document.getElementById("staff-filter");if(a&&a.options.length<=1&&e.forEach(c=>{const u=document.createElement("option");u.value=c.id,u.textContent=c.name,a.appendChild(u)}),!i){Od(e,n);return}yd(),pd({lat:Z.lat,lng:Z.lng},Z.name);const l=await es(Yt).catch(()=>[]);if(l.length>0)for(const c of l){if(Bn!=="all"&&c.staffId!==Bn)continue;const u=e.find(E=>E.id===c.staffId),p=(u==null?void 0:u.color)||"#999",_=[{lat:Z.lat,lng:Z.lng}];for(const E of c.clientIds||[]){const S=n.find(b=>b.id===E);S&&(_.push({lat:S.lat,lng:S.lng}),Br({lat:S.lat,lng:S.lng},p,"",`<div style="color:#333;padding:4px">
              <strong>${S.name}</strong><br>
              ${S.careLevel} | ${(S.requiredServices||[]).join(", ")}<br>
              <small>担当: ${(u==null?void 0:u.name)||"未定"}</small>
            </div>`))}_.push({lat:Z.lat,lng:Z.lng}),await vd(_,p)}else{const c=n.filter(u=>u.isActive&&s.some(p=>p.clientId===u.id));for(const u of c){const p=s.filter(_=>_.clientId===u.id).map(_=>`${_.startTime}〜${_.endTime}`).join(", ");Br({lat:u.lat,lng:u.lng},"#94A3B8","",`<div style="color:#333;padding:4px">
          <strong>${u.name}</strong><br>
          予定: ${p}<br>
          ${u.careLevel} | ${(u.requiredServices||[]).join(", ")}
        </div>`)}}_d(),xd(e,l,s)}function xd(i,e,n=[]){const s=document.getElementById("route-legend");if(s){if(e.length===0){s.innerHTML=`
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
  `}}function Od(i,e){const n=document.getElementById("route-legend");n&&(n.innerHTML=`
      <p style="color:var(--text-muted);font-size:.85rem;margin-bottom:12px">
        Google Maps APIキーを .env に設定すると地図が表示されます
      </p>
      <div style="font-size:.85rem">
        <strong>登録データ:</strong><br>
        職員: ${i.length}名<br>
        利用者: ${e.length}名
      </div>
    `)}let Qt=[];async function ts(){const i=document.getElementById("page-container");Qt=await re().catch(()=>[]),i.innerHTML=`
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
      ${Ld(Qt)}
    </div>
  `,document.getElementById("btn-add-staff").addEventListener("click",()=>Pa())}function Ld(i){return i.length===0?`
      <div class="empty-state">
        <span class="material-icons-round">person_off</span>
        <h3>職員が登録されていません</h3>
        <p>「新規登録」ボタンから職員を追加してください</p>
      </div>
    `:`
    <div class="grid grid-2">
      ${i.map(e=>{var n,s,a,l,c;return`
        <div class="card" style="border-left:4px solid ${e.color||"#999"}">
          <div class="card-header">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:40px;height:40px;border-radius:50%;background:${e.color||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem">
                ${X(((n=e.name)==null?void 0:n.charAt(0))||"?")}
              </div>
              <div>
                <div style="font-weight:600;font-size:1.05rem">${X(e.name)}</div>
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
              ${(((a=e.skills)==null?void 0:a.services)||[]).map(u=>`<span class="tag tag-secondary">${u}</span>`).join("")||'<span style="color:var(--text-muted);font-size:.8rem">なし</span>'}
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
  `}function Pa(i=null){const e=!!i,n=e?"職員情報の編集":"新規職員登録",s=`
    <form id="staff-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="sf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 田中 太郎" />
        </div>
        <div class="form-group">
          <label class="form-label">性別 *</label>
          <select class="form-select" id="sf-gender">
            ${Td.map(l=>`<option value="${l}" ${(i==null?void 0:i.gender)===l?"selected":""}>${l}</option>`).join("")}
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
      ${Object.entries(Li).map(([l,c])=>`
        <div class="form-group">
          <label class="form-label">${c.label}</label>
          <div class="tags-container" style="gap:8px">
            ${c.options.map(u=>{var _,E;const p=(E=(_=i==null?void 0:i.skills)==null?void 0:_[l])!=null&&E.includes(u)?"checked":"";return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
                <input type="checkbox" name="skill-${l}" value="${u}" ${p} /> ${u}
              </label>`}).join("")}
          </div>
        </div>
      `).join("")}
    </form>
  `;_t(n,s,`
    <button class="btn btn-secondary" id="sf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="sf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("sf-cancel").onclick=oe,document.getElementById("sf-type").addEventListener("change",l=>{document.getElementById("sf-wage-group").style.display=l.target.value==="パート"?"":"none"}),document.getElementById("sf-save").onclick=async()=>{const l=document.getElementById("sf-name").value.trim();if(!l){R("氏名を入力してください","warning");return}const c=document.getElementById("sf-save");c.disabled=!0,c.textContent="保存中...";const u=document.getElementById("sf-address").value.trim();let p=(i==null?void 0:i.lat)||Z.lat,_=(i==null?void 0:i.lng)||Z.lng;if(u)try{await tt();const A=await La(u);A?(p=A.lat,_=A.lng):R("住所から座標を取得できませんでした","warning")}catch(A){console.warn("ジオコーディング失敗:",A)}const E=document.getElementById("sf-type").value,S=Array.from(document.querySelectorAll('input[name="sf-day"]:checked')).map(A=>A.value),b={name:l,gender:document.getElementById("sf-gender").value,type:E,wage:E==="パート"?parseInt(document.getElementById("sf-wage").value)||1200:void 0,days:S,address:u,workStart:document.getElementById("sf-work-start").value,workEnd:document.getElementById("sf-work-end").value,lat:p,lng:_,skills:{},color:(i==null?void 0:i.color)||Ur[Qt.length%Ur.length],isActive:!0};for(const[A]of Object.entries(Li)){const O=document.querySelectorAll(`input[name="skill-${A}"]:checked`);b.skills[A]=Array.from(O).map(x=>x.value)}try{e?(await cd(i.id,b),R("職員情報を更新しました","success")):(await ka(b),R("職員を登録しました","success")),oe(),await ts()}catch(A){R("保存に失敗しました: "+A.message,"error")}finally{c.disabled=!1,c.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-staff]");if(e){const s=Qt.find(a=>a.id===e.dataset.editStaff);s&&Pa(s)}const n=i.target.closest("[data-delete-staff]");if(n){const s=Qt.find(a=>a.id===n.dataset.deleteStaff);if(s&&await me("削除確認",`${s.name} を削除しますか？`))try{await dd(s.id),R(`${s.name} を削除しました`,"success"),await ts()}catch{R("削除に失敗しました","error")}}});let Di=[],Fr=[];async function is(){const i=document.getElementById("page-container");try{const[e,n]=await Promise.all([ue().catch(()=>[]),Ui().catch(()=>[])]);Di=e,Fr=n}catch(e){console.error("データの取得に失敗",e)}i.innerHTML=`
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
      ${Dd(Di,Fr)}
    </div>
  `,document.getElementById("btn-add-client").addEventListener("click",()=>Ca())}function Dd(i,e){return i.length===0?`<div class="empty-state">
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
          ${i.map(n=>{var c,u;const s={月:1,火:2,水:3,木:4,金:5,土:6,日:7},a=e.filter(p=>p.clientId===n.id).sort((p,_)=>{const E=s[p.dayOfWeek]||99,S=s[_.dayOfWeek]||99;return E-S}),l=a.length>0?a.map(p=>`<div style="font-size:0.85rem;margin-bottom:2px;">
                  <span class="tag">${p.dayOfWeek||"不明"}</span>
                  ${p.startTime}〜${p.endTime} (${p.duration}分)
                </div>`).join(""):'<span style="color:var(--text-muted)">設定なし</span>';return`<tr>
              <td><strong>${X(n.name)}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${n.genderPreference!=="指定なし"?n.genderPreference:""}</span></td>
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
  `}function Ca(i=null){var l,c;const e=!!i,n=[...Li.physical.options,...Li.special.options],s=`
    <form id="client-form">
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">氏名 *</label>
          <input class="form-input" id="cf-name" value="${(i==null?void 0:i.name)||""}" required placeholder="例: 山田 花子" />
        </div>
        <div class="form-group">
          <label class="form-label">介護度</label>
          <select class="form-select" id="cf-care-level">
            ${bd.map(u=>`<option ${(i==null?void 0:i.careLevel)===u?"selected":""}>${u}</option>`).join("")}
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
          ${Da.map(u=>{var p;return`<label style="display:flex;align-items:center;gap:4px;cursor:pointer;font-size:.85rem">
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
            ${wd.map(u=>`<option ${(i==null?void 0:i.genderPreference)===u?"selected":""}>${u}</option>`).join("")}
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
  `;_t(e?"利用者情報の編集":"新規利用者登録",s,`
    <button class="btn btn-secondary" id="cf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="cf-save">${e?"更新":"登録"}</button>
  `),document.getElementById("cf-cancel").onclick=oe,document.getElementById("cf-save").onclick=async()=>{const u=document.getElementById("cf-name").value.trim();if(!u){R("氏名を入力してください","warning");return}const p=document.getElementById("cf-save");p.disabled=!0,p.textContent="保存中...";const _=document.getElementById("cf-address").value.trim();let E=(i==null?void 0:i.lat)||Z.lat,S=(i==null?void 0:i.lng)||Z.lng;if(_)try{await tt();const A=await La(_);A?(E=A.lat,S=A.lng,R(`座標を取得しました: ${A.lat.toFixed(4)}, ${A.lng.toFixed(4)}`,"success")):R("住所から座標を取得できませんでした。事業所付近の座標を使用します。","warning")}catch(A){console.warn("ジオコーディング失敗:",A),R("座標取得に失敗。事業所付近の座標を使用します。","warning")}const b={name:u,careLevel:document.getElementById("cf-care-level").value,address:_,area:document.getElementById("cf-area").value.trim(),requiredServices:Array.from(document.querySelectorAll('input[name="cf-service"]:checked')).map(A=>A.value),requiredSkills:Array.from(document.querySelectorAll('input[name="cf-skill"]:checked')).map(A=>A.value),genderPreference:document.getElementById("cf-gender-pref").value,visitDuration:parseInt(document.getElementById("cf-duration").value)||60,timeWindow:{start:document.getElementById("cf-time-start").value,end:document.getElementById("cf-time-end").value},notes:document.getElementById("cf-notes").value.trim(),lat:E,lng:S,isActive:!0};try{e?(await ud(i.id,b),R("利用者情報を更新しました","success")):(await Aa(b),R("利用者を登録しました","success")),oe(),await is()}catch(A){R("保存に失敗しました: "+A.message,"error")}finally{p.disabled=!1,p.textContent=e?"更新":"登録"}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-edit-client]");if(e){const s=Di.find(a=>a.id===e.dataset.editClient);s&&Ca(s)}const n=i.target.closest("[data-delete-client]");if(n){const s=Di.find(a=>a.id===n.dataset.deleteClient);if(s&&await me("削除確認",`${s.name} を削除しますか？`))try{await hd(s.id),R(`${s.name} を削除しました`,"success"),await is()}catch{R("削除に失敗しました","error")}}});let Ne=it();const Vr=localStorage.getItem("navDate");Vr&&(Ne=Vr,localStorage.removeItem("navDate"));async function Pd(){const i=document.getElementById("page-container");i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">view_day</span>
        日別スケジュール確認
      </h1>
      <div class="btn-group">
        <input type="date" id="schedule-date" class="form-input" value="${Ne}" style="width:180px" />
        <button class="btn btn-primary" id="btn-add-visit">
          <span class="material-icons-round">add</span>
          訪問追加
        </button>
      </div>
    </div>
    <div id="schedule-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,document.getElementById("schedule-date").addEventListener("change",e=>{Ne=e.target.value,Pi()}),document.getElementById("btn-add-visit").addEventListener("click",Cd),await Pi()}async function Pi(){const i=document.getElementById("schedule-content"),[e,n,s,a]=await Promise.all([re().catch(()=>[]),ue().catch(()=>[]),nt(Ne).catch(()=>[]),es(Ne).catch(()=>[])]);if(s.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round">event_busy</span>
        <h3>${Gt(Ne)} の訪問予定はありません</h3>
        <p>「訪問追加」ボタンから予定を登録するか、マッチング＆最適化を実行してください</p>
      </div>
    `;return}const l={},c=[];let u=0,p=0,_=0;for(const b of s)b.staffId?(l[b.staffId]||(l[b.staffId]=[]),l[b.staffId].push(b)):c.push(b);c.sort((b,A)=>{const O=b.startTime||b.scheduledTime||"00:00",x=A.startTime||A.scheduledTime||"00:00";return O.localeCompare(x)});let E="";c.length>0&&(E=`
      <div class="card" style="border-left: 4px solid var(--danger); margin-bottom: 24px; background: rgba(239, 68, 68, 0.05);">
        <h3 class="card-title" style="color: var(--danger); margin-bottom: 12px;">
          <span class="material-icons-round">warning</span>
          未割り当ての訪問 (${c.length}件)
        </h3>
        <div class="grid grid-3" style="gap: 12px;">
          ${c.map(b=>{const A=n.find(O=>O.id===b.clientId);return`
              <div class="visit-card" style="border: 1px dashed var(--danger);">
                <div style="display:flex;justify-content:space-between;align-items:start">
                  <div>
                    <strong>${X(b.clientName||(A==null?void 0:A.name)||"不明")} ${b.type==="sales"?'<span class="tag" style="background:var(--warning);color:white;margin-left:4px">営業</span>':""}</strong>
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
    `);for(const[b,A]of Object.entries(l)){const O=e.find(D=>D.id===b);if(!O)continue;const x=a.find(D=>D.staffId===b),C=parseInt(O.wage)||2e3;if(x&&(_+=(x.totalDistance||0)*bi),A.sort((D,P)=>{const M=D.optimizedArrivalTime||D.startTime||D.scheduledTime||"00:00",k=P.optimizedArrivalTime||P.startTime||P.scheduledTime||"00:00";return M.localeCompare(k)}),x&&x.schedule&&x.schedule.length>=2){const D=x.schedule[0].arrivalMinutes,M=(x.schedule[x.schedule.length-1].arrivalMinutes-D)/60;p+=M*C}else if(A.length>0){const D=A[0],P=A[A.length-1],M=D.startTime||D.scheduledTime||"09:00",k=P.startTime||P.scheduledTime||"17:00",$=K(M),v=(K(k)+(P.duration||60)-$)/60;p+=v*C}A.forEach((D,P)=>{u+=Ea(O,D.duration||60);let M=10,k=null;if(x&&x.schedule){const $=x.schedule.find(N=>N.clientId===D.clientId);$&&(M=$.travelTimeFromPrev||10,k=$.arrivalTime)}D.calculatedTravelTime=M,D.optimizedArrivalTime=k}),A.sort((D,P)=>{const M=D.optimizedArrivalTime||D.startTime||D.scheduledTime||"00:00",k=P.optimizedArrivalTime||P.startTime||P.scheduledTime||"00:00";return M.localeCompare(k)})}let S="";if(window.isAdmin){const b=u-p-_,A=u>0?Math.round(b/u*100):0;S=`
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
            <div style="font-size: 1.5rem; font-weight: bold; color: ${b>=0?"var(--success)":"var(--danger)"};">
              ¥${b.toLocaleString()} <span style="font-size: 1rem;">(${A}%)</span>
            </div>
          </div>
        </div>
      </div>
    `}i.innerHTML=`
    ${S}
    ${E}
    <div style="margin-bottom:12px;color:var(--text-secondary)">
      ${Gt(Ne)} — ${s.length}件の訪問
    </div>
    <div class="grid grid-2">
      ${Object.entries(l).map(([b,A])=>{const O=e.find(x=>x.id===b);return`
          <div class="card" style="border-left:4px solid ${(O==null?void 0:O.color)||"#999"}">
            <h3 class="card-title" style="margin-bottom:12px">
              <div style="width:24px;height:24px;border-radius:50%;background:${(O==null?void 0:O.color)||"#999"};
                display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">
                ${A.length}
              </div>
              ${X((O==null?void 0:O.name)||"未割当")}
            </h3>
            <div class="schedule-timeline">
              ${A.map((x,C)=>{const D=n.find($=>$.id===x.clientId),P=x.optimizedArrivalTime||x.startTime||x.scheduledTime||"--:--";let M="",k="";if(C>0){const $=A[C-1],N=$.optimizedArrivalTime||$.startTime||$.scheduledTime,v=x.calculatedTravelTime||10;if(N&&P!=="--:--"){const[f,m]=N.split(":").map(Number),[y,g]=P.split(":").map(Number),I=f*60+m+($.duration||60),U=y*60+g-I;U<v&&(k=`
                          <div style="color:var(--danger); font-size: 0.8rem; padding: 4px 8px; background: rgba(239, 68, 68, 0.1); border-radius: 4px; margin-bottom: 8px;">
                            <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">warning</span>
                            移動時間が不足しています（必要: ${v}分, 実際: ${U}分）
                          </div>
                        `),M=`
                        <div style="margin-left: 60px; padding: 4px 0; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; border-left: 2px dashed var(--border); padding-left: 14px;">
                          <span class="material-icons-round" style="font-size: 14px; margin-right: 4px;">directions_car</span>
                          移動時間: 約${v}分
                        </div>
                      `}}return`
                  ${M}
                  ${k}
                  <div class="time-slot">
                    <div class="time-label">${P}</div>
                    <div class="time-content">
                      <div class="visit-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                          <div>
                            <strong>${X(x.clientName||(D==null?void 0:D.name)||"不明")} ${x.type==="sales"?'<span class="tag" style="background:var(--warning);color:white;margin-left:4px">営業</span>':""}</strong>
                            <div style="font-size:.8rem;color:var(--text-muted)">
                              ${x.type==="sales"?"営業活動":x.serviceInfo||x.service||"訪問"} | ${x.duration||60}分
                            </div>
                            <div style="font-size:.75rem;color:var(--text-muted); margin-top:2px;">
                              <span class="material-icons-round" style="font-size:12px;vertical-align:middle">place</span>
                              ${X(x.type==="sales"?x.salesTarget||"営業先":(D==null?void 0:D.area)||"未設定")}
                            </div>
                          </div>
                          <button class="btn-icon" data-delete-visit="${x.id}" style="color:var(--danger)" title="削除">
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
  `}async function Cd(){const[i,e]=await Promise.all([re().catch(()=>[]),ue().catch(()=>[])]),n=`
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
          ${Da.map(a=>`<option>${a}</option>`).join("")}
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
  `;_t("訪問予定の追加",n,`
    <button class="btn btn-secondary" id="vf-cancel">キャンセル</button>
    <button class="btn btn-primary" id="vf-save">追加</button>
  `);const s=()=>{const a=document.getElementById("vf-service").value,l=parseInt(document.getElementById("vf-duration").value)||60,c=Mn(a,l);document.getElementById("vf-income").value=c,document.getElementById("vf-income-hint").textContent=`↑ ${a} ${l}分 → ¥${c.toLocaleString()}（自動計算）`};document.getElementById("vf-service").addEventListener("change",s),document.getElementById("vf-duration").addEventListener("change",s),s(),document.getElementById("vf-cancel").onclick=oe,document.getElementById("vf-save").onclick=async()=>{const a=document.getElementById("vf-client").value,l=document.getElementById("vf-staff").value;if(!a||!l){R("利用者と職員を選択してください","warning");return}try{const c=parseInt(document.getElementById("vf-duration").value)||60,u=document.getElementById("vf-service").value,p=document.getElementById("vf-time").value,_=K(p)+c,E=Math.floor(_/60),S=_%60,b=`${String(E).padStart(2,"0")}:${String(S).padStart(2,"0")}`;await Wi({date:Ne,clientId:a,staffId:l,startTime:p,endTime:b,scheduledTime:p,duration:c,service:u,income:parseInt(document.getElementById("vf-income").value)||Mn(u,c),status:"scheduled"}),R("訪問予定を追加しました","success"),oe(),await Pi()}catch{R("追加に失敗しました","error")}}}document.addEventListener("click",async i=>{const e=i.target.closest("[data-delete-visit]");if(e&&await me("削除確認","この訪問予定を削除しますか？"))try{await Zn(e.dataset.deleteVisit),R("訪問予定を削除しました","success"),await Pi()}catch{R("削除に失敗しました","error")}});function Md(i,e){const n=K(i),s=[{startTime:i,duration:e}],a=n+15;a+e<=18*60&&s.push({startTime:Kt(a),duration:e});const l=n-15;return l>=7*60&&s.push({startTime:Kt(l),duration:e}),s}function jr(i){return i?K(i)<12*60+30?"AM":"PM":"AM"}function Nd(i,e,n=null){var _,E,S,b,A;let s=0;const a=[];let l=!0;for(const O of e.requiredServices||[])(E=(_=i.skills)==null?void 0:_.services)!=null&&E.includes(O)?(s+=Bt.requiredSkill,a.push(`✅ ${O}対応可`)):(l=!1,a.push(`❌ ${O}に対応不可`));const c=[...((S=i.skills)==null?void 0:S.qualifications)||[],...((b=i.skills)==null?void 0:b.physical)||[],...((A=i.skills)==null?void 0:A.special)||[]];for(const O of e.requiredSkills||[])c.includes(O)?(s+=Bt.requiredSkill,a.push(`✅ ${O}あり`)):(l=!1,a.push(`❌ ${O}なし`));if(e.genderPreference&&e.genderPreference!=="指定なし"){const O=e.genderPreference.replace("希望","");i.gender===O?(s+=Bt.genderMatch,a.push(`✅ 性別希望合致（${O}）`)):(l=!1,a.push(`❌ 性別希望不一致（希望: ${O}）`))}i.type==="正社員"&&(s+=Bt.staffType,a.push("✅ 正社員"));const u=(n==null?void 0:n.lat)||i.lat,p=(n==null?void 0:n.lng)||i.lng;if(u&&e.lat){const O=wa(u,p,e.lat,e.lng);let x=Bt.proximity;n!=null&&n.isTransition&&(x=x*.2,a.push("ℹ️ ブロック移動（エリア移動許容）"));const C=Math.max(0,x*(1-O/10));s+=C,C>x*.8&&a.push(`✅ 近距離ボーナス (+${Math.round(C)})`)}return{score:Math.round(s),reasons:a,eligible:l}}function En(i){var e;return(e=i.name)!=null&&e.includes("前川")?3:i.maxVisits||(i.type==="パート"?5:10)}function Ma(i,e,n=[],s=null,a=[]){const l=[],c=new Set,u={},p={};a.forEach((b,A)=>{p[b.id]=A});const _=(b,A)=>{if(!s)return 15;const O=p[b],x=p[A];return O!==void 0&&x!==void 0&&s[O][x]&&s[O][x].duration||15},E=[...e].sort((b,A)=>{const O=b.startTime||b.scheduledTime||"00:00",x=A.startTime||A.scheduledTime||"00:00";return O.localeCompare(x)});for(const b of E){if(l.some(P=>{if(P.clientId!==b.clientId)return!1;const M=K(P.startTime),k=M+(P.duration||60),$=K(b.startTime||b.scheduledTime||"09:00"),N=$+(b.duration||60);return $<k&&N>M})){c.add(b.id);continue}const O=i.filter(P=>P.isActive).map(P=>{const M=n.find(h=>h.id===b.clientId),k=l.filter(h=>h.staffId===P.id),$=k.length>0?k[k.length-1]:null;let N=null;if($){const h=n.find(U=>U.id===$.clientId);if(h){const U=b.startTime||b.scheduledTime||"09:00",Y=jr($.startTime)!==jr(U);N={lat:h.lat,lng:h.lng,isTransition:Y}}}const{score:v,eligible:f}=Nd(P,M||b,N),m=b.startTime||b.scheduledTime||"09:00",y=b.duration||60,g=b.timeOptions&&b.timeOptions.length>0?b.timeOptions:Md(m,y);let I=null;for(const h of g){let U=!0;const Y=K(h.startTime),st=Y+(h.duration||60),Fi=K(P.workStart||"07:00"),rt=K(P.workEnd||"18:00");if(Y<Fi||st>rt){U=!1;continue}const at=l.filter(We=>We.staffId===P.id);for(const We of at){const Fe=K(We.startTime),ot=Fe+(We.duration||60);if(Y<ot&&st>Fe){U=!1;break}const bt=_(We.clientId,b.clientId);if(Y>=ot){if(Y-ot<bt){U=!1;break}}else if(st<=Fe&&Fe-st<bt){U=!1;break}}if(U){I=h;break}}return{staff:P,score:v,eligible:f&&!!I,chosenTime:I}}).filter(P=>P.eligible);if(O.length===0)continue;O.sort((P,M)=>{var h,U;const k=u[P.staff.id]||0,$=u[M.staff.id]||0,N=En(P.staff),v=En(M.staff),f=k>=N,m=$>=v;if(f!==m)return f?1:-1;const y=7,g=P.staff.type==="正社員"&&!((h=P.staff.name)!=null&&h.includes("前川"))&&k<y,I=M.staff.type==="正社員"&&!((U=M.staff.name)!=null&&U.includes("前川"))&&$<y;return g!==I?g?-1:1:k!==$?k-$:P.staff.type!==M.staff.type?P.staff.type==="正社員"?-1:1:M.score-P.score});const x=O[0],C=u[x.staff.id]||0,D=En(x.staff);if(C<D){const P=x.chosenTime.startTime,M=x.chosenTime.duration||60,k=K(P)+M;l.push({staffId:x.staff.id,staffName:x.staff.name,visitId:b.id,clientId:b.clientId,clientName:b.clientName||"利用者",score:x.score,startTime:P,endTime:Kt(k),scheduledTime:P,duration:M}),c.add(b.id),u[x.staff.id]=C+1}}const S=e.filter(b=>!c.has(b.id)).map(b=>({visitId:b.id,clientName:b.clientName||"利用者",reason:"適格な職員なし、または上限超過",visit:b}));return{assignments:l,unassigned:S}}async function ns(i,e,n,s=Z,a=null){const l={};for(const u of i)l[u.staffId]||(l[u.staffId]=[]),l[u.staffId].push(u.clientId);const c={};for(const[u,p]of Object.entries(l)){const _=e.find(D=>D.id===u),E=p.map(D=>n.find(P=>P.id===D)).filter(Boolean);if(E.length===0)continue;const S=[{id:"office",name:"事業所",lat:s.lat,lng:s.lng,isOffice:!0},...E.map(D=>{const P=i.find(M=>M.clientId===D.id&&M.staffId===u);return{id:D.id,name:D.name,lat:D.lat,lng:D.lng,duration:D.visitDuration||60,scheduledStart:P?P.startTime:null,timeWindow:D.timeWindow}})];let b=null;typeof a=="function"&&(b=await a(S));const A=Rd(S,b);let O=$d(S,A);O=Bd(O,A);const x=Ud(O,A),C=Wd(O,A,_,b,S);c[u]={staffId:u,staffName:(_==null?void 0:_.name)||"不明",staffColor:(_==null?void 0:_.color)||"#999",route:O,totalDistance:Math.round(x*10)/10,totalDuration:Fd(C),schedule:C}}return c}function Rd(i,e=null){const n=i.length,s=Array.from({length:n},()=>Array(n).fill(0));for(let a=0;a<n;a++)for(let l=0;l<n;l++)a!==l&&(e&&e[a]&&e[a][l]&&e[a][l].distance!==null?s[a][l]=e[a][l].distance:s[a][l]=wa(i[a].lat,i[a].lng,i[l].lat,i[l].lng));return s}function $d(i,e){const n=i.length,s=new Set([0]),a=[0],l=[],c=[];for(let _=1;_<n;_++){const E=i[_];E.timeWindow&&E.timeWindow.start?l.push({index:_,start:K(E.timeWindow.start),end:K(E.timeWindow.end)}):c.push(_)}l.sort((_,E)=>_.start-E.start);const u=[...l.map(_=>_.index),...c];let p=0;for(;s.size<n;){let _=-1,E=1/0;for(const S of u)s.has(S)||e[p][S]<E&&(E=e[p][S],_=S);if(_===-1)break;a.push(_),s.add(_),p=_}return a.push(0),a}function Bd(i,e){const n=i.length;let s=!0,a=[...i];for(;s;){s=!1;for(let l=1;l<n-2;l++)for(let c=l+1;c<n-1;c++){const u=e[a[l-1]][a[l]]+e[a[c]][a[c+1]];if(e[a[l-1]][a[c]]+e[a[l]][a[c+1]]<u-.001){const _=[...a];let E=l,S=c;for(;E<S;)[_[E],_[S]]=[_[S],_[E]],E++,S--;a=_,s=!0}}}return a}function Ud(i,e){let n=0;for(let s=0;s<i.length-1;s++)n+=e[i[s]][i[s+1]];return n}function Wd(i,e,n,s=null,a=[]){const l=[];let u=K((n==null?void 0:n.workStart)||"08:30");for(let p=0;p<i.length;p++){let _=0;if(p>0){const S=i[p-1],b=i[p];s&&s[S]&&s[S][b]&&s[S][b].duration!==null?_=s[S][b].duration:_=e[S][b]/20*60,u+=Math.ceil(_)}const E=a[i[p]];if(E){let S=0;E.timeWindow&&E.timeWindow.start?S=K(E.timeWindow.start):E.scheduledStart&&(S=K(E.scheduledStart)),u<S&&(u=S)}if(l.push({pointIndex:i[p],clientId:E?E.id:null,arrivalTime:Kt(u),arrivalMinutes:u,travelTimeFromPrev:Math.ceil(_)}),p>0&&p<i.length-1){const S=E&&E.duration||60;u+=S}}return l}function Fd(i){if(i.length<2)return 0;const e=i[0].arrivalMinutes;return i[i.length-1].arrivalMinutes-e}let Ce=new Date;async function yt(){const i=document.getElementById("page-container"),e=Ce.getFullYear(),n=Ce.getMonth(),s=new Date(e,n,1),a=new Date(e,n+1,0),l=s.getDay(),c=a.getDate(),u=await Ui().catch(()=>[]),[p,_]=await Promise.all([ue().catch(()=>[]),re().catch(()=>[])]);let E=`
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
        ${["日","月","火","水","木","金","土"].map((A,O)=>`
          <div style="background: var(--bg-card); padding: 12px; text-align: center; font-weight: 600; color: ${O===0?"var(--danger)":O===6?"var(--primary)":"var(--text)"};">
            ${A}
          </div>
        `).join("")}
  `;for(let A=0;A<l;A++)E+='<div style="background: var(--bg-main); padding: 10px; min-height: 100px;"></div>';const S=zt(new Date);for(let A=1;A<=c;A++){const O=new Date(e,n,A),x=zt(O),C=O.getDay(),D=x===S,M=u.filter(k=>k.date===x).filter(k=>k.status==="scheduled");E+=`
      <div class="calendar-day" data-date="${x}" style="background: var(--bg-card); padding: 8px; min-height: 100px; cursor: pointer; border: ${D?"2px solid var(--primary)":"none"}; position: relative; display: flex; flex-direction: column;">
        <div style="font-size: 0.9rem; font-weight: 600; margin-bottom: 8px; color: ${C===0?"var(--danger)":C===6?"var(--primary)":"inherit"};">
          ${A}
        </div>
        ${M.length>0?`
          <div style="background: rgba(59,130,246,0.1); color: var(--primary); padding: 4px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; margin-bottom: 4px; display: flex; justify-content: space-between; align-items: center;">
            <span>訪問予定</span>
            <span>${M.length}件</span>
          </div>
        `:""}
        <div style="flex-grow: 1;"></div>
      </div>
    `}const b=(7-(l+c)%7)%7;for(let A=0;A<b;A++)E+='<div style="background: var(--bg-main); padding: 10px; min-height: 100px;"></div>';E+=`
      </div>
    </div>
  `,i.innerHTML=E,document.getElementById("cal-prev-month").addEventListener("click",()=>{Ce.setMonth(Ce.getMonth()-1),yt()}),document.getElementById("cal-next-month").addEventListener("click",()=>{Ce.setMonth(Ce.getMonth()+1),yt()}),document.getElementById("cal-generate-month").addEventListener("click",qd),document.getElementById("cal-weekly-opt").addEventListener("click",jd),document.querySelectorAll(".calendar-day").forEach(A=>{A.addEventListener("click",O=>{const x=O.currentTarget.dataset.date;Vd(x,u,p,_)})})}function Vd(i,e,n,s){const a=e.filter(u=>u.date===i);let l="";a.length===0?l='<div style="color:var(--text-muted); text-align:center; padding: 20px;">予定はありません</div>':(a.sort((u,p)=>(u.startTime||"00:00").localeCompare(p.startTime||"00:00")),l=a.map(u=>{const p=n.find(E=>E.id===u.clientId),_=s.find(E=>E.id===u.staffId);return`
        <div class="visit-card" style="margin-bottom: 8px; border-left: 4px solid ${(_==null?void 0:_.color)||"#ccc"}; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 600;">${u.startTime||u.scheduledTime||"--:--"} ~ ${u.endTime||"--:--"}</div>
            <div style="font-size: 0.9rem;">
              <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">elderly</span> 
              ${X(u.clientName||(p==null?void 0:p.name)||"未設定")}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              担当: ${X(u.staffName||(_==null?void 0:_.name)||"未設定")}
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
  `;_t(`日付の詳細: ${i}`,c,`
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
  `),document.getElementById("modal-close-btn").addEventListener("click",oe),document.querySelectorAll(".btn-nav").forEach(u=>{u.addEventListener("click",p=>{const _=p.currentTarget.dataset.target,E=p.currentTarget.dataset.date;localStorage.setItem("navDate",E),oe(),Te(_)})}),document.querySelectorAll(".btn-cancel-visit").forEach(u=>{u.addEventListener("click",async p=>{const _=p.currentTarget.dataset.id;if(await me("予定の削除","この予定をキャンセル（削除）しますか？<br>※再マッチング時には除外されます。"))try{await Zn(_),R("予定を削除しました","success"),oe(),yt()}catch{R("削除に失敗しました","error")}})}),document.getElementById("modal-add-visit-btn").addEventListener("click",u=>{oe(),R("予定の追加は「日別スケジュール」画面から行ってください。","info")})}async function jd(){const i=new Date,e=(8-i.getDay())%7||7,n=new Date(i.getFullYear(),i.getMonth(),i.getDate()+e),s=[];for(let _=0;_<7;_++){const E=new Date(n);E.setDate(E.getDate()+_),s.push(zt(E))}const a=s[0],l=s[6];if(!await me("来週分の再マッチング",`【対象期間】<br><b>${a} 〜 ${l}</b><br><br>カレンダー上で削除した「お休み」を反映し、担当者をリセットした上で、一番効率の良いルートに一括で再計算します。<br>実行しますか？`))return;const u=document.getElementById("cal-weekly-opt"),p=u.innerHTML;u.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',u.disabled=!0;try{const[_,E,S]=await Promise.all([re(),ue(),Ui()]),b=[{id:"office",...Z},...E.map(C=>({id:C.id,lat:C.lat,lng:C.lng}))];let A=null;const O=["日","月","火","水","木","金","土"];let x=0;for(const C of s){const[D,P,M]=C.split("-"),k=new Date(D,P-1,M),$=O[k.getDay()],N=S.filter(I=>I.date===C);if(N.length===0)continue;const v=_.filter(I=>I.isActive&&Array.isArray(I.days)&&I.days.includes($));if(v.length===0)continue;const{assignments:f}=Ma(v,N,E,A,b),m=await ns(f,v,E,Z,async I=>{try{return await tt(),await Oi(I)}catch{return null}}),y=Object.entries(m).map(([I,h])=>{const U=f.filter(Y=>Y.staffId===I).map(Y=>Y.clientId);return{staffId:I,date:C,clientIds:U,totalDistance:h.totalDistance,totalDuration:h.totalDuration,schedule:h.schedule}}),g=new Set;for(const I of N){const h=f.find(U=>U.visitId===I.id);h?(await _e(I.id,{staffId:h.staffId,staffName:h.staffName,startTime:h.startTime,endTime:h.endTime,scheduledTime:h.scheduledTime}),g.add(I.clientId)):g.has(I.clientId)||await _e(I.id,{staffId:null,staffName:"未設定"})}await xa(y),x++}x>0?(R(`来週 ${x}日分 のルート最適化が完了しました！`,"success"),yt()):R("最適化する予定が見つかりませんでした。","warning")}catch(_){console.error(_),R("一括最適化中にエラーが発生しました: "+_.message,"error")}finally{u.innerHTML=p,u.disabled=!1}}async function qd(){var l;const i=Ce.getFullYear(),e=Ce.getMonth();if(!await me("月間予定のベース生成",`<b>${i}年${e+1}月</b> の基本スケジュールを利用者の基本曜日から自動生成しますか？<br><br>※すでにカレンダー上に存在する日の予定は上書きされずスキップされます。`))return;const s=document.getElementById("cal-generate-month"),a=s.innerHTML;s.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 生成中...',s.disabled=!0;try{const[c,u]=await Promise.all([ue(),Ui()]),p={日:0,月:1,火:2,水:3,木:4,金:5,土:6},_=u.filter(b=>b.dayOfWeek&&p[b.dayOfWeek]!==void 0);if(_.length===0){R("ベースとなる予定テンプレート（曜日設定）がありません。デモデータを登録してください。","warning");return}let E=0;const S=new Date(i,e+1,0).getDate();for(let b=1;b<=S;b++){const A=new Date(i,e,b),O=zt(A),x=A.getDay(),C=_.filter(M=>p[M.dayOfWeek]===x);if(C.length===0)continue;const D=u.filter(M=>M.date===O),P=new Set(D.map(M=>M.clientId));for(const M of C){if(P.has(M.clientId))continue;const k=c.find(h=>h.id===M.clientId),$=M.service||((l=k==null?void 0:k.requiredServices)==null?void 0:l[0])||"身体介護",N=M.duration||(k==null?void 0:k.visitDuration)||60,v=M.startTime||"09:00";let f=0;try{f=Mn($,N)}catch{f=4e3}const m=K(v)+N,y=Math.floor(m/60),g=m%60,I=`${String(y).padStart(2,"0")}:${String(g).padStart(2,"0")}`;await Wi({date:O,clientId:M.clientId,clientName:M.clientName||(k==null?void 0:k.name)||"利用者",staffId:null,staffName:"未設定",startTime:v,endTime:I,scheduledTime:v,duration:N,service:$,income:f,dayOfWeek:M.dayOfWeek,status:"scheduled"}),E++}}E>0?(R(`${i}年${e+1}月の予定を ${E}件 生成しました！`,"success"),yt()):R("新しく生成する予定がありませんでした（既存の予定が設定済み）。","info")}catch(c){console.error("月間スケジュール生成エラー:",c),R("スケジュールの生成に失敗しました: "+c.message,"error")}finally{s.innerHTML=a,s.disabled=!1}}let Qe=null,Ci=null,Ze=it(),Mi=null,ss=null,Un=null,ht=null;async function Na(){const i=document.getElementById("page-container"),e=await re(),n=["日","月","火","水","木","金","土"][new Date(Ze).getDay()];i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">tune</span>
        特定日の手動マッチング調整
      </h1>
      <div style="display:flex;align-items:center;gap:12px">
        <input type="date" id="match-date-picker" class="form-input" value="${Ze}" style="width:160px">
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
                <div style="font-weight:600">${X(s.name)}</div>
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
  `,document.getElementById("match-date-picker").addEventListener("change",s=>{Ze=s.target.value,Na()}),document.getElementById("btn-run-optimization").addEventListener("click",Hd)}async function Hd(){const i=document.getElementById("btn-run-optimization"),e=document.getElementById("optimization-results");i.disabled=!0,i.innerHTML='<span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> 最適化中...',e.innerHTML="";try{const[n,s,a]=await Promise.all([re(),ue(),nt(Ze)]),l=Array.from(document.querySelectorAll(".staff-attendance-checkbox:checked")).map(b=>b.dataset.staffId),c=n.filter(b=>l.includes(b.id));if(c.length===0){R("出勤する職員を少なくとも1名選択してください","warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}if(a.length===0){R(`${Gt(new Date(Ze))} の訪問予定がありません。`,"warning"),i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行';return}const u=[{id:"office",...Z},...s.map(b=>({id:b.id,lat:b.lat,lng:b.lng}))];let p=null;try{await tt(),p=await Oi(u)}catch(b){console.warn("全体距離行列の取得に失敗:",b)}const{assignments:_,unassigned:E}=Ma(c,a,s,p,u);Qe=_,ht=E,Mi=c,ss=n,Un=s;const S=await ns(_,c,s,Z,async b=>{try{return await tt(),await Oi(b)}catch(A){return console.warn("実走行データの取得に失敗:",A),null}});Ci=S,e.innerHTML=Ra(n,s,_,E,S),$a(),R("最適化が完了しました！","success")}catch(n){R("最適化に失敗しました: "+n.message,"error"),console.error(n)}finally{i.disabled=!1,i.innerHTML='<span class="material-icons-round">play_arrow</span> 最適化を実行'}}function Ra(i,e,n,s,a){const l={};for(const c of n)l[c.staffId]||(l[c.staffId]={staff:i.find(u=>u.id===c.staffId),clients:[]}),l[c.staffId].clients.push({...c,client:e.find(u=>u.id===c.clientId)});return`
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
        <div class="stat-value">${Object.values(a).reduce((c,u)=>c+u.totalDistance,0).toFixed(1)}<span style="font-size:.9rem;color:var(--text-muted)">km</span></div>
      </div>
    </div>

    <!-- 職員別結果 -->
    <div class="grid grid-2" style="margin-bottom:24px">
      ${Object.entries(l).map(([c,u])=>{var _,E,S;const p=a[c];return`
          <div class="card" style="border-left:4px solid ${((_=u.staff)==null?void 0:_.color)||"#999"}">
            <div class="card-header">
              <h3 class="card-title" style="font-size:1rem">
                <div style="width:28px;height:28px;border-radius:50%;background:${((E=u.staff)==null?void 0:E.color)||"#999"};
                  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.8rem;font-weight:700">
                  ${u.clients.length}
                </div>
                ${X(((S=u.staff)==null?void 0:S.name)||"不明")}
              </h3>
              <span style="font-size:.8rem;color:var(--text-muted)">${((p==null?void 0:p.totalDistance)||0).toFixed(1)}km</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                事業所出発
              </div>
              ${((p==null?void 0:p.schedule)||[]).filter(b=>b.pointIndex!==0||p.schedule.indexOf(b)===p.schedule.length-1).map((b,A,O)=>{var C,D;if(b.pointIndex===0&&A===O.length-1)return`<div style="font-size:.8rem;color:var(--text-muted);display:flex;align-items:center;gap:4px">
                      <span class="material-icons-round" style="font-size:16px;color:var(--secondary)">business</span>
                      ${b.arrivalTime} 事業所帰着
                    </div>`;const x=u.clients.find(P=>P.clientId===b.clientId);return`<div class="visit-card">
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <strong style="font-size:.85rem">${b.arrivalTime} ${((C=x==null?void 0:x.client)==null?void 0:C.name)||"利用者"}</strong>
                      <span class="tag">${((D=x==null?void 0:x.client)==null?void 0:D.visitDuration)||60}分</span>
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
              <strong>${X(c.clientName)}</strong> — ${X(c.reason)}
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
  `}async function zd(i,e){try{const n=Object.entries(e).map(([l,c])=>{const u=Qe.filter(p=>p.staffId===l).map(p=>p.clientId);return{staffId:l,date:Ze,clientIds:u,totalDistance:c.totalDistance,totalDuration:c.totalDuration,schedule:c.schedule}}),s=await nt(Ze),a=new Set;for(const l of s){const c=Qe.find(u=>u.visitId===l.id);c&&(await _e(l.id,{staffId:c.staffId,staffName:c.staffName,startTime:c.startTime,endTime:c.endTime,scheduledTime:c.scheduledTime}),a.add(l.clientId))}for(const l of s)Qe.find(u=>u.visitId===l.id)||(a.has(l.clientId)?await Zn(l.id):await _e(l.id,{staffId:null,staffName:"未設定"}));await xa(n),R("スケジュールとルートを保存しました！","success")}catch(n){R("保存に失敗しました: "+n.message,"error")}}function $a(){var i;(i=document.getElementById("btn-save-routes"))==null||i.addEventListener("click",async()=>{await zd(ss,Ci)}),document.querySelectorAll(".btn-manual-assign").forEach(e=>{e.addEventListener("click",n=>{const s=n.target.closest(".btn-manual-assign").dataset.visitId;Gd(s)})})}function Gd(i){const e=ht.find(c=>c.visitId===i);if(!e)return;const n=e.visit,s=Mi.map(c=>`<option value="${c.id}">${X(c.name)}</option>`).join(""),a=`
    <div style="margin-bottom: 16px;">
      <div style="font-weight:600;margin-bottom:4px">利用者: ${X(e.clientName)}</div>
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
  `;_t("手動割り当て",a,`
    <button class="btn btn-secondary" id="manual-cancel">キャンセル</button>
    <button class="btn btn-primary" id="manual-ok">割り当て</button>
  `),document.getElementById("manual-cancel").onclick=()=>{oe()},document.getElementById("manual-ok").onclick=async()=>{const c=document.getElementById("manual-staff-select").value,u=document.getElementById("manual-time-input").value;oe(),await Kd(i,c,u)}}async function Kd(i,e,n){const s=ht.findIndex(E=>E.visitId===i);if(s===-1)return;const l=ht[s].visit,c=Mi.find(E=>E.id===e),u=l.duration||60,p=K(n)+u;Qe.push({staffId:c.id,staffName:c.name,visitId:l.id,clientId:l.clientId,clientName:l.clientName||"利用者",score:9999,startTime:n,endTime:Kt(p),scheduledTime:n,duration:u}),ht.splice(s,1);const _=document.getElementById("optimization-results");_.innerHTML='<div style="text-align:center;padding:32px;"><span class="material-icons-round" style="animation:spin 1s linear infinite">sync</span> ルート再計算中...</div>';try{Ci=await ns(Qe,Mi,Un,Z,async S=>{try{return await tt(),await Oi(S)}catch{return null}}),_.innerHTML=Ra(ss,Un,Qe,ht,Ci),$a(),R(`${c.name}さんに手動割り当てし、ルートを再計算しました`,"success")}catch(E){R("ルート再計算に失敗しました","error"),console.error(E)}}let qt=it();async function Jd(){var e,n;const i=document.getElementById("page-container");if(!window.isAdmin){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:64px;color:var(--danger);opacity:.3">lock</span>
        <h3>アクセス権限がありません</h3>
        <p>このページは管理者専用です。</p>
        <button class="btn btn-primary" id="btn-go-dashboard">ダッシュボードへ戻る</button>
      </div>
    `,document.getElementById("btn-go-dashboard").addEventListener("click",()=>Te("dashboard"));return}i.innerHTML=`
    <div class="page-header">
      <h1 class="page-title">
        <span class="material-icons-round">analytics</span>
        収支シミュレーション
      </h1>
      <div class="btn-group">
        <input type="date" id="revenue-date-picker" class="form-input" value="${qt}" style="width:160px">
        <button class="btn btn-secondary" id="btn-refresh-revenue">
          <span class="material-icons-round">refresh</span>
          更新
        </button>
      </div>
    </div>

    <div id="revenue-content">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `,await Sn(),(e=document.getElementById("revenue-date-picker"))==null||e.addEventListener("change",s=>{qt=s.target.value,Sn()}),(n=document.getElementById("btn-refresh-revenue"))==null||n.addEventListener("click",()=>{Sn()})}async function Sn(){const i=document.getElementById("revenue-content");if(!i)return;const[e,n,s,a]=await Promise.all([re(),ue(),nt(qt),es(qt)]);if(s.length===0){i.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="font-size:48px;opacity:.2">event_busy</span>
        <p>${Gt(qt)} の訪問予定データがありません。</p>
      </div>
    `;return}let l=0,c=0,u=0,p=s.length;s.filter(b=>b.status==="completed").length;const _=e.map(b=>{const A=a.filter(k=>k.staffId===b.id),O=s.filter(k=>k.staffId===b.id);let x=0,C=0,D=0,P=0,M=0;if(O.forEach(k=>{x+=Ea(b,k.duration||60)}),A.forEach(k=>{if(P+=k.totalDistance||0,D+=(k.totalDistance||0)*bi,k.schedule&&k.schedule.length>=2){const $=k.schedule[0].arrivalMinutes;M=k.schedule[k.schedule.length-1].arrivalMinutes-$,C=M/60*(parseInt(b.wage)||2e3)}}),A.length===0&&O.length>0){const k=[...O].sort((m,y)=>(m.startTime||"09:00").localeCompare(y.startTime||"09:00")),$=k[0],N=k[k.length-1],v=K($.startTime||"09:00");M=K(N.startTime||"17:00")+(N.duration||60)-v,C=M/60*(parseInt(b.wage)||2e3)}return{...b,count:O.length,revenue:x,laborCost:C,vehicleCost:D,profit:x-C-D,workMinutes:M}}).filter(b=>b.count>0||b.revenue>0).sort((b,A)=>A.profit-b.profit);_.forEach(b=>{l+=b.revenue,c+=b.laborCost,u+=b.vehicleCost});const E=l-c-u,S=l>0?E/l*100:0;i.innerHTML=`
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
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">平均人件費/人: ¥${_.length>0?Math.round(c/_.length).toLocaleString():0}</div>
      </div>
      <div class="card stat-card" style="border-top: 4px solid var(--secondary)">
        <div class="stat-label">移動・車両費</div>
        <div class="stat-value">¥${Math.round(u).toLocaleString()}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">@${bi}円/km</div>
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
              ${_.map(b=>{const A=b.revenue>0?b.profit/b.revenue*100:0;return`
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
                          <div style="width:${Math.max(0,Math.min(100,A))}%;height:100%;background:${A>20?"var(--success)":"var(--warning)"}"></div>
                        </div>
                        <span>${A.toFixed(0)}%</span>
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
              ${S<15?"<li>利益率が15%を下回っています。移動ルートの最適化を再度実行し、移動時間を削減してください。</li>":""}
              ${l>0&&c/l>.6?"<li>売上に対する人件費率が60%を超えています。1人あたりの訪問件数を増やす調整が必要です。</li>":"<li>人件費率は適正範囲内です。</li>"}
              <li>現在の移動コスト単価は1kmあたり${bi}円で計算されています。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}let ie=it();async function Xd(){const i=document.getElementById("page-container");i.innerHTML=`
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
        <input type="date" id="my-date-picker" class="form-input" value="${ie}" style="width:150px" />
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
  `;const e=document.getElementById("my-date-picker");document.getElementById("my-prev-day").addEventListener("click",()=>{const n=new Date(ie);n.setDate(n.getDate()-1),ie=n.toISOString().slice(0,10),e.value=ie,ae(ie)}),document.getElementById("my-next-day").addEventListener("click",()=>{const n=new Date(ie);n.setDate(n.getDate()+1),ie=n.toISOString().slice(0,10),e.value=ie,ae(ie)}),e.addEventListener("change",n=>{ie=n.target.value,ae(ie)}),document.getElementById("my-today-btn").addEventListener("click",()=>{ie=it(),e.value=ie,ae(ie)}),document.getElementById("btn-add-sales").addEventListener("click",Ba),await ae(ie)}async function ae(i){var e,n,s;try{const[a,l,c]=await Promise.all([nt(i),re().catch(()=>[]),ue().catch(()=>[])]),u=window.currentStaffId||null,p=u?a.filter(k=>k.staffId===u):[],_=l.find(k=>k.id===u),E=(_==null?void 0:_.workStart)||"08:30",S=(_==null?void 0:_.workEnd)||"17:30";p.sort((k,$)=>(k.scheduledTime||k.startTime||"").localeCompare($.scheduledTime||$.startTime||""));const b=document.getElementById("my-schedule-list"),A=p.length,O=p.filter(k=>k.status==="completed").length,x=p.filter(k=>k.status==="cancelled").length;if(document.getElementById("my-schedule-summary").innerHTML=`
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">本日の予定</div>
        <div class="my-summary-value" style="color:var(--primary)">${A}<span class="my-summary-unit">件</span></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">完了</div>
        <div class="my-summary-value" style="color:var(--success)">${O}<span class="my-summary-unit">件</span></div>
      </div>
      <div class="card stat-card my-summary-card">
        <div class="my-summary-label">キャンセル</div>
        <div class="my-summary-value" style="color:var(--danger)">${x}<span class="my-summary-unit">件</span></div>
      </div>
    `,p.length===0){b.innerHTML=`
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
      `,(e=document.getElementById("empty-add-sales"))==null||e.addEventListener("click",Ba);return}const C=p.find(k=>k.status==="scheduled"||!k.status);if(C){const k=c.find(h=>h.id===C.clientId),$=k!=null&&k.address?encodeURIComponent(k.address):k!=null&&k.lat&&(k!=null&&k.lng)?`${k.lat},${k.lng}`:encodeURIComponent(C.clientName||""),N=new Date,[v,f]=(C.scheduledTime||C.startTime||"00:00").split(":").map(Number),m=v*60+f,y=N.getHours()*60+N.getMinutes(),g=m-y,I=g>0?`あと約${g}分`:g===0?"今すぐ":"時間を過ぎています";document.getElementById("my-schedule-list").insertAdjacentHTML("beforebegin",`
        <div class="next-visit-banner" id="next-visit-banner">
          <div class="next-visit-info">
            <span class="material-icons-round" style="color:var(--primary);font-size:28px">directions_walk</span>
            <div>
              <div class="next-visit-label">次の訪問</div>
              <div class="next-visit-name">${X(C.clientName)}${C.type!=="sales"?" 様":""}</div>
              <div class="next-visit-time">${C.scheduledTime||C.startTime||""} <span class="next-visit-countdown">${I}</span></div>
            </div>
          </div>
          ${$?`
            <a href="https://maps.google.com/?daddr=${$}" target="_blank" rel="noopener noreferrer"
               class="btn btn-primary btn-sm" style="flex-shrink:0;white-space:nowrap">
              <span class="material-icons-round">navigation</span>
              ナビ開始
            </a>
          `:""}
        </div>
      `)}let D="";const P=`careroute_punch_${u}_${i}`,M=JSON.parse(localStorage.getItem(P)||"{}");D+=`
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
              ${M.start?`<div class="punch-time-actual"><span class="material-icons-round" style="font-size:12px;vertical-align:middle">check_circle</span> ${M.start} 出発済み</div>`:'<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">タップして出発時刻を記録</div>'}
            </div>
          </div>
        </div>
      </div>
    `,p.forEach((k,$)=>{const N=k.type==="sales",v=k.duration||60,f=k.status||"scheduled";let m="var(--primary)",y="",g="",I="";f==="completed"?(m="var(--success)",y='<span class="material-icons-round" style="color:var(--success)">check_circle</span>',I=`<button class="tag btn-undo-complete" data-id="${k.id}" style="background:var(--success);color:white;border:none;cursor:pointer" title="クリックで取り消し">完了 ✓</button>`):f==="cancelled"?(m="var(--danger)",y='<span class="material-icons-round" style="color:var(--danger)">cancel</span>',I=`<span class="tag" style="background:var(--danger); color:white;">キャンセル: ${X(k.cancelReason||"理由なし")}</span>`):g=`
          <div class="visit-actions">
            <button class="btn btn-complete-large btn-complete-visit" data-id="${k.id}">
              <span class="material-icons-round">check_circle</span>
              完了にする
            </button>
            <button class="btn-cancel-text btn-cancel-visit" data-id="${k.id}">
              キャンセルとして記録する
            </button>
          </div>
        `;const h=N?"var(--warning)":m;D+=`
        <div class="timeline-item">
          <div class="timeline-axis">
            <div class="timeline-time${f!=="scheduled"?" muted":""}">${k.scheduledTime||k.startTime||"--:--"}</div>
            <div class="timeline-dot" style="background:${h};color:${h}"></div>
            <div class="timeline-connector" style="height:100px"></div>
          </div>
          <div class="card timeline-card" style="border-left-color:${h};opacity:${f!=="scheduled"?"0.7":"1"}">
            ${f==="scheduled"?'<div class="swipe-hint left">← キャンセル</div><div class="swipe-hint right">完了 →</div>':""}
            <div class="timeline-card-header">
              <h3 class="timeline-card-title">
                ${N?'<span class="material-icons-round" style="color:var(--warning);font-size:1.1rem">storefront</span>':""}
                ${X(k.clientName)} ${N?"":"様"}
              </h3>
              ${I||`<span class="tag" style="background:var(--bg-surface)">${v}分</span>`}
            </div>
            ${y?`<div style="display:flex;align-items:center;gap:4px;margin-bottom:8px">${y}</div>`:`
              <div style="font-size:0.85rem;color:var(--text-secondary);display:flex;align-items:center;gap:4px;margin-bottom:12px">
                <span class="material-icons-round" style="font-size:16px">location_on</span>
                <span>ルートを確認</span>
              </div>
            `}
            ${g}
          </div>
        </div>
      `}),D+=`
      <div class="timeline-item">
        <div class="timeline-axis">
          <div class="timeline-time muted">${S}</div>
          <div class="timeline-dot-sm" style="background:var(--secondary)"></div>
        </div>
        <div class="card timeline-card office punch-card" id="punch-arrive">
          <div style="display:flex;align-items:center;gap:8px">
            <span class="material-icons-round" style="color:var(--secondary)">business</span>
            <div>
              <span style="font-weight:600;color:var(--text-secondary)">事業所 帰着</span>
              ${M.end?`<div class="punch-time-actual"><span class="material-icons-round" style="font-size:12px;vertical-align:middle">check_circle</span> ${M.end} 帰着済み</div>`:'<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">タップして帰着時刻を記録</div>'}
            </div>
          </div>
        </div>
      </div>
    `,b.innerHTML=D,document.querySelectorAll(".btn-complete-visit").forEach(k=>{k.addEventListener("click",async $=>{const N=$.currentTarget.dataset.id;try{await _e(N,{status:"completed"}),R("訪問を完了しました","success",5e3,async()=>{await _e(N,{status:"scheduled"}),R("取り消しました","info"),ae(i)}),ae(i)}catch{R("更新に失敗しました","error")}})}),document.querySelectorAll(".btn-cancel-visit").forEach(k=>{k.addEventListener("click",$=>{const N=$.currentTarget.dataset.id;qr(N,i)})}),document.querySelectorAll(".btn-undo-complete").forEach(k=>{k.addEventListener("click",async $=>{const N=$.currentTarget.dataset.id;if(await me("完了を取り消す","この訪問の「完了」を取り消して予定に戻しますか？"))try{await _e(N,{status:"scheduled"}),R("完了を取り消しました","info"),ae(i)}catch{R("更新に失敗しました","error")}})}),(n=document.getElementById("punch-depart"))==null||n.addEventListener("click",async()=>{const k=new Date,$=`${String(k.getHours()).padStart(2,"0")}:${String(k.getMinutes()).padStart(2,"0")}`,N=JSON.parse(localStorage.getItem(P)||"{}");N.start&&!await me("出発時刻を上書き",`記録済みの出発時刻 ${N.start} を ${$} に上書きしますか？`)||(N.start=$,localStorage.setItem(P,JSON.stringify(N)),R(`出発時刻 ${$} を記録しました`,"success"),ae(i))}),(s=document.getElementById("punch-arrive"))==null||s.addEventListener("click",async()=>{const k=new Date,$=`${String(k.getHours()).padStart(2,"0")}:${String(k.getMinutes()).padStart(2,"0")}`,N=JSON.parse(localStorage.getItem(P)||"{}");N.end&&!await me("帰着時刻を上書き",`記録済みの帰着時刻 ${N.end} を ${$} に上書きしますか？`)||(N.end=$,localStorage.setItem(P,JSON.stringify(N)),R(`帰着時刻 ${$} を記録しました`,"success"),ae(i))}),document.querySelectorAll(".timeline-card:not(.office)").forEach((k,$)=>{const N=p[$];if(!N||N.status!=="scheduled")return;let v=0;const f=k.querySelector(".swipe-hint.left"),m=k.querySelector(".swipe-hint.right");k.addEventListener("touchstart",y=>{v=y.touches[0].clientX,k.classList.add("swipe-active")},{passive:!0}),k.addEventListener("touchmove",y=>{const g=y.touches[0].clientX-v;k.style.transform=`translateX(${g*.4}px)`,m&&(m.style.opacity=g>30?"1":"0"),f&&(f.style.opacity=g<-30?"1":"0")},{passive:!0}),k.addEventListener("touchend",async y=>{const g=y.changedTouches[0].clientX-v;k.style.transform="",k.classList.remove("swipe-active"),m&&(m.style.opacity="0"),f&&(f.style.opacity="0"),g>80?(await _e(N.id,{status:"completed"}),R("訪問を完了しました","success",5e3,async()=>{await _e(N.id,{status:"scheduled"}),R("取り消しました","info"),ae(i)}),ae(i)):g<-80&&qr(N.id,i)})})}catch(a){console.error("マイスケジュール取得エラー:",a),document.getElementById("my-schedule-list").innerHTML=`
      <div class="empty-state" style="color: var(--danger);">
        <span class="material-icons-round">error</span>
        <p>スケジュールの取得に失敗しました</p>
      </div>
    `}}function qr(i,e){const n=document.getElementById("modal-overlay"),s=document.getElementById("modal-title"),a=document.getElementById("modal-body"),l=document.getElementById("modal-footer");s.textContent="キャンセルの登録",s.innerHTML='<span class="material-icons-round" style="color:var(--danger)">cancel</span> キャンセルの登録',a.innerHTML=`
    <div class="form-group">
      <label class="form-label">キャンセル理由 <span style="color:var(--danger)">*必須</span></label>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">
        ※経営データとして蓄積されるため、正確な理由を選択してください。
      </p>
      <select id="cancel-reason-select" class="form-input">
        <option value="">選択してください...</option>
        ${Ed.map(c=>`<option value="${c}">${c}</option>`).join("")}
      </select>
    </div>
    <div class="form-group" style="margin-top: 16px;">
      <label class="form-label">備考 (任意)</label>
      <textarea id="cancel-notes" class="form-input" rows="3" placeholder="詳細な状況があれば記入"></textarea>
    </div>
  `,l.innerHTML=`
    <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').style.display='none'">閉じる</button>
    <button class="btn btn-primary" id="btn-submit-cancel" style="background:var(--danger); border-color:var(--danger);">キャンセル確定</button>
  `,n.style.display="flex",document.getElementById("btn-submit-cancel").addEventListener("click",async()=>{const c=document.getElementById("cancel-reason-select").value;if(!c){R("キャンセル理由を選択してください","warning");return}const u=document.getElementById("cancel-notes").value;try{await _e(i,{status:"cancelled",cancelReason:c,cancelNotes:u}),R("キャンセルを登録しました","success"),n.style.display="none",ae(e)}catch{R("更新に失敗しました","error")}})}function Ba(){const i=ie,e=document.getElementById("modal-overlay"),n=document.getElementById("modal-title"),s=document.getElementById("modal-body"),a=document.getElementById("modal-footer");n.innerHTML='<span class="material-icons-round" style="color:var(--warning)">storefront</span> 営業予定の追加',s.innerHTML=`
    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
      スキマ時間を活用したアポなし訪問などの営業活動を記録します。
    </p>
    <div class="form-group">
      <label class="form-label">訪問先カテゴリ</label>
      <select id="sales-target-select" class="form-input">
        ${Sd.map(l=>`<option value="${l}">${l}</option>`).join("")}
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
          ${kd.map(l=>`<option value="${l}">${l}</option>`).join("")}
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
    <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').style.display='none'">キャンセル</button>
    <button class="btn btn-primary" id="btn-submit-sales">予定を追加</button>
  `,e.style.display="flex",document.getElementById("btn-submit-sales").addEventListener("click",async()=>{var _;const l=document.getElementById("sales-client-name").value.trim();if(!l){R("訪問先名を入力してください","warning");return}const c=document.getElementById("sales-target-select").value,u=document.getElementById("sales-start-time").value,p=parseInt(document.getElementById("sales-duration").value,10);try{await Wi({staffId:window.currentStaffId||null,staffName:((_=document.getElementById("user-name"))==null?void 0:_.textContent)||"スタッフ",clientId:"sales_"+Date.now(),clientName:l,date:i,startTime:u,scheduledTime:u,duration:p,type:"sales",salesTarget:c,status:"scheduled"}),R("営業予定を追加しました","success"),e.style.display="none",ae(i)}catch(E){console.error(E),R("追加に失敗しました","error")}})}const Yd={calendar:{render:yt,title:"全体スケジュール"},schedule:{render:Pd,title:"日別スケジュール確認"},map:{render:Ad,title:"日別ルートマップ"},dashboard:{render:fd,title:"ダッシュボード"},staff:{render:ts,title:"職員管理"},client:{render:is,title:"利用者管理"},matching:{render:Na,title:"特定日の手動調整"},revenue:{render:Jd,title:"収支シミュレーション"},"my-schedule":{render:Xd,title:"マイスケジュール"}};function Qd(){var a,l,c,u;document.querySelectorAll(".nav-item").forEach(p=>{p.addEventListener("click",()=>{const _=p.dataset.page;_&&Te(_)})}),(a=document.getElementById("btn-sidebar-toggle"))==null||a.addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("collapsed")});const e=document.getElementById("sidebar"),n=document.getElementById("sidebar-overlay"),s=()=>{e.classList.toggle("open"),n.classList.toggle("open")};(l=document.getElementById("btn-mobile-menu"))==null||l.addEventListener("click",s),n==null||n.addEventListener("click",s),(c=document.getElementById("btn-modal-close"))==null||c.addEventListener("click",()=>{document.getElementById("modal-overlay").style.display="none"}),(u=document.getElementById("modal-overlay"))==null||u.addEventListener("click",p=>{p.target===p.currentTarget&&(p.currentTarget.style.display="none")})}async function Te(i){var s,a;const e=Yd[i];if(!e)return;if(window.isAdmin===!1&&i!=="my-schedule"){console.warn("アクセス権限がありません:",i);return}document.querySelectorAll(".nav-item").forEach(l=>{l.classList.toggle("active",l.dataset.page===i)}),(s=document.getElementById("sidebar"))==null||s.classList.remove("open"),(a=document.getElementById("sidebar-overlay"))==null||a.classList.remove("open"),document.title=`${e.title} - CareRoute`;const n=document.getElementById("page-container");n.innerHTML='<div class="loading"><div class="spinner"></div></div>';try{await e.render()}catch(l){console.error(`ページ「${e.title}」の表示エラー:`,l),n.innerHTML=`
      <div class="empty-state">
        <span class="material-icons-round" style="color:var(--danger)">error</span>
        <h3>表示エラー</h3>
        <p>${l.message}</p>
        <button class="btn btn-secondary" onclick="location.reload()">ページを再読み込み</button>
      </div>
    `}}const Hr=[{id:"staff_2",name:"前川さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_3",name:"水口さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"18:01",days:["月","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018},{id:"staff_4",name:"横家さん",gender:"女性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["月","火","水","木","金"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#F59E0B",isActive:!0,lat:35.443,lng:137.018},{id:"staff_5",name:"木澤さん",gender:"男性",type:"正社員",workStart:"07:30",workEnd:"17:00",days:["火","水","木","金","土"],wage:2500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#8B5CF6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_6",name:"圭子さん",gender:"女性",type:"パート",workStart:"07:50",workEnd:"16:00",days:["月","火","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:[]},color:"#EC4899",isActive:!0,lat:35.443,lng:137.018},{id:"staff_7",name:"藤吉さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"12:00",days:["火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["ペット可"]},color:"#14B8A6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_8",name:"ちえみさん",gender:"女性",type:"パート",workStart:"13:00",workEnd:"17:00",days:["月","火","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#F97316",isActive:!0,lat:35.443,lng:137.018},{id:"staff_9",name:"棚橋さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["火","水","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#6366F1",isActive:!0,lat:35.443,lng:137.018},{id:"staff_10",name:"高井さん",gender:"女性",type:"パート",workStart:"09:00",workEnd:"14:00",days:["火","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理"]},color:"#84CC16",isActive:!0,lat:35.443,lng:137.018},{id:"staff_11",name:"小沢さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"16:00",days:["月","水","木","金"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:["重介護対応可"],special:["調理","ペット可"]},color:"#0EA5E9",isActive:!0,lat:35.443,lng:137.018},{id:"staff_12",name:"若尾さん",gender:"女性",type:"パート",workStart:"08:30",workEnd:"17:00",days:["月","火","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#3B82F6",isActive:!0,lat:35.443,lng:137.018},{id:"staff_13",name:"小川さん",gender:"女性",type:"パート",workStart:"08:20",workEnd:"17:00",days:["月","水","木","金","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理"]},color:"#EF4444",isActive:!0,lat:35.443,lng:137.018},{id:"staff_14",name:"井戸さん",gender:"女性",type:"パート",workStart:"07:30",workEnd:"16:00",days:["月","火","土"],wage:1500,skills:{services:["身体介護","生活援助"],qualifications:[],physical:[],special:["調理","ペット可"]},color:"#10B981",isActive:!0,lat:35.443,lng:137.018}],zr=[{id:"client_1",name:"中村晃",genderPreference:"指定なし",address:"関市東新町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.497156833927576,lng:136.91472248776176,isActive:!0,area:"関市"},{id:"client_2",name:"今井 幸",genderPreference:"指定なし",address:"可児市今渡1334番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.429546564671064,lng:137.06448192237502,isActive:!0,area:"可児市"},{id:"client_3",name:"佐合愛",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441449916213905,lng:137.00859676668438,isActive:!0,area:"美濃加茂市"},{id:"client_4",name:"佐藤 平",genderPreference:"指定なし",address:"関市小野1378番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.496713667191365,lng:136.91611792725212,isActive:!0,area:"関市"},{id:"client_5",name:"佐藤 惠",genderPreference:"指定なし",address:"加茂郡富加町羽生1439-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49350458855056,lng:137.00284647997333,isActive:!0,area:"加茂郡富加町"},{id:"client_6",name:"内田 鉄",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1247",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43919134426946,lng:137.0179669717769,isActive:!0,area:"美濃加茂市"},{id:"client_7",name:"冨田 勝",genderPreference:"女性希望",address:"美濃加茂市蜂屋町中蜂屋1475番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.433236929814676,lng:137.0206065781048,isActive:!0,area:"美濃加茂市"},{id:"client_8",name:"前川 み",genderPreference:"指定なし",address:"美濃加茂市森山町3-4-28",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.447385010380714,lng:137.0241786951649,isActive:!0,area:"美濃加茂市"},{id:"client_9",name:"加藤 民",genderPreference:"指定なし",address:"加茂郡川辺町中川辺1220番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.475384399265096,lng:137.06390768355888,isActive:!0,area:"加茂郡川辺町"},{id:"client_10",name:"加藤 雪",genderPreference:"指定なし",address:"可児市松伏3-4",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.42952101999053,lng:137.06996025815,isActive:!0,area:"可児市"},{id:"client_11",name:"吉村 強",genderPreference:"女性希望",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45175401563851,lng:137.02161473049864,isActive:!0,area:"美濃加茂市"},{id:"client_12",name:"吉田あ",genderPreference:"指定なし",address:"関市西田原",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49115464552958,lng:136.92399997463878,isActive:!0,area:"関市"},{id:"client_13",name:"和田 隆",genderPreference:"指定なし",address:"加茂郡川辺町石神84番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48236841267637,lng:137.07760456602477,isActive:!0,area:"加茂郡川辺町"},{id:"client_14",name:"土岐 吉",genderPreference:"指定なし",address:"美濃加茂市加茂野町市橋836-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44162170104763,lng:137.0262114717999,isActive:!0,area:"美濃加茂市"},{id:"client_15",name:"土岐 雅",genderPreference:"指定なし",address:"加茂郡富加町羽生1453-20",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.488517359713484,lng:136.99491575096658,isActive:!0,area:"加茂郡富加町"},{id:"client_16",name:"大森 君",genderPreference:"女性希望",address:"加茂郡富加町高畑637-3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50099328128151,lng:136.98455151897673,isActive:!0,area:"加茂郡富加町"},{id:"client_17",name:"大橋ひさ",genderPreference:"女性希望",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.438385496082404,lng:137.02562783976515,isActive:!0,area:"美濃加茂市"},{id:"client_18",name:"天野慧",genderPreference:"指定なし",address:"美濃加茂市本郷町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.434155101090184,lng:137.02364638342797,isActive:!0,area:"美濃加茂市"},{id:"client_19",name:"奥田 邦",genderPreference:"指定なし",address:"加茂郡川辺町石神9778-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494079651227416,lng:137.07228502934993,isActive:!0,area:"加茂郡川辺町"},{id:"client_20",name:"安田 正",genderPreference:"女性希望",address:"関市東町4-3-24",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.498558378964844,lng:136.93317629557282,isActive:!0,area:"関市"},{id:"client_21",name:"安藤 悦治",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4458132002014,lng:137.0128572203751,isActive:!0,area:"美濃加茂市"},{id:"client_22",name:"宮本伸",genderPreference:"指定なし",address:"美濃加茂市上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43490869964852,lng:137.01386742162063,isActive:!0,area:"美濃加茂市"},{id:"client_23",name:"宮田 薫",genderPreference:"指定なし",address:"加茂郡富加町高畑637番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4893904414253,lng:136.9951458803918,isActive:!0,area:"加茂郡富加町"},{id:"client_24",name:"富田 菊",genderPreference:"指定なし",address:"可児市矢戸1445番地34",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.435752761721716,lng:137.0651931080912,isActive:!0,area:"可児市"},{id:"client_25",name:"小原 強",genderPreference:"指定なし",address:"美濃加茂市下米田町則光329番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.441734590435274,lng:137.0125176746724,isActive:!0,area:"美濃加茂市"},{id:"client_26",name:"岡田 洋",genderPreference:"指定なし",address:"美濃加茂市蜂屋町下蜂屋1674番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4365047823305,lng:137.01270107633286,isActive:!0,area:"美濃加茂市"},{id:"client_27",name:"岩﨑 嬉",genderPreference:"指定なし",address:"美濃加茂市加茂川町３丁目４番７号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43346804141193,lng:137.01932833342485,isActive:!0,area:"美濃加茂市"},{id:"client_28",name:"川崎 イ",genderPreference:"指定なし",address:"加茂郡富加町滝田151番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.496723988527705,lng:136.9997990843252,isActive:!0,area:"加茂郡富加町"},{id:"client_29",name:"平田 裕",genderPreference:"指定なし",address:"美濃加茂市太田町1757-7",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.449511651048645,lng:137.00972072094092,isActive:!0,area:"美濃加茂市"},{id:"client_30",name:"平田あ",genderPreference:"女性希望",address:"加茂郡富加町羽生",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49517050409468,lng:136.9856735080124,isActive:!0,area:"加茂郡富加町"},{id:"client_31",name:"廣 強",genderPreference:"指定なし",address:"美濃加茂市牧野1076-75",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44218112119725,lng:137.01104910417206,isActive:!0,area:"美濃加茂市"},{id:"client_32",name:"斉藤真",genderPreference:"指定なし",address:"関市北天神",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.48797634825378,lng:136.9143700838785,isActive:!0,area:"関市"},{id:"client_33",name:"日比野 奥",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.437015399250406,lng:137.00906805366205,isActive:!0,area:"美濃加茂市"},{id:"client_34",name:"日比野 由",genderPreference:"指定なし",address:"美濃加茂市田島町1-6-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43337070077588,lng:137.0244453376369,isActive:!0,area:"美濃加茂市"},{id:"client_35",name:"日比野 直",genderPreference:"女性希望",address:"美濃加茂市清水町2-3-17",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44642678990315,lng:137.01795349522274,isActive:!0,area:"美濃加茂市"},{id:"client_36",name:"木村 光",genderPreference:"指定なし",address:"美濃加茂市太田町2600番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.435371997376876,lng:137.01108131268214,isActive:!0,area:"美濃加茂市"},{id:"client_37",name:"木澤 博",genderPreference:"指定なし",address:"加茂郡富加町加治田3461番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.506303390707046,lng:136.99104467350202,isActive:!0,area:"加茂郡富加町"},{id:"client_38",name:"木澤 照",genderPreference:"女性希望",address:"加茂郡川辺町石神215-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4880086414237,lng:137.07289353288346,isActive:!0,area:"加茂郡川辺町"},{id:"client_39",name:"杉島 希",genderPreference:"指定なし",address:"加茂郡富加町滝田283-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50110204409342,lng:136.98395012382613,isActive:!0,area:"加茂郡富加町"},{id:"client_40",name:"村仲 尚",genderPreference:"女性希望",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.438698758555574,lng:137.02193085044868,isActive:!0,area:"美濃加茂市"},{id:"client_41",name:"村仲 鍬",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺265番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452301436877214,lng:137.02067008781682,isActive:!0,area:"美濃加茂市"},{id:"client_42",name:"松元 良",genderPreference:"女性希望",address:"美濃加茂市本郷町1丁目1番26号",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.43827103816531,lng:137.01191566430634,isActive:!0,area:"美濃加茂市"},{id:"client_43",name:"栗山 年",genderPreference:"指定なし",address:"加茂郡富加町高畑258番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.494121986748645,lng:136.98518245423062,isActive:!0,area:"加茂郡富加町"},{id:"client_44",name:"櫻井 あ",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉773番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.45138892205426,lng:137.01422771742352,isActive:!0,area:"美濃加茂市"},{id:"client_45",name:"河野 仁",genderPreference:"指定なし",address:"加茂郡富加町羽生909-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.490271641834966,lng:136.98727323288463,isActive:!0,area:"加茂郡富加町"},{id:"client_46",name:"浅野",genderPreference:"指定なし",address:"美濃加茂市加茂野町稲辺",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45202959233498,lng:137.01566783519402,isActive:!0,area:"美濃加茂市"},{id:"client_47",name:"渡邉 文",genderPreference:"指定なし",address:"加茂郡川辺町比久見505番地2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49415672848246,lng:137.0639961091595,isActive:!0,area:"加茂郡川辺町"},{id:"client_48",name:"渡邉直",genderPreference:"女性希望",address:"美濃加茂市蜂屋町上蜂屋",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43872942558895,lng:137.01354730683613,isActive:!0,area:"美濃加茂市"},{id:"client_49",name:"瀧戸 邦",genderPreference:"指定なし",address:"加茂郡富加町高畑815-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49012105422854,lng:137.00036018284152,isActive:!0,area:"加茂郡富加町"},{id:"client_50",name:"石原 ヤ",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.50124112017079,lng:136.98382202932007,isActive:!0,area:"加茂郡富加町"},{id:"client_51",name:"石原 孝",genderPreference:"指定なし",address:"加茂郡富加町加治田",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49328324234597,lng:136.9835128247142,isActive:!0,area:"加茂郡富加町"},{id:"client_52",name:"石田 友",genderPreference:"指定なし",address:"関市大杉",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.49271720267115,lng:136.91679407643252,isActive:!0,area:"関市"},{id:"client_53",name:"神園 昭",genderPreference:"指定なし",address:"美濃加茂市加茂野町今泉1552-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445736819174996,lng:137.02080207291,isActive:!0,area:"美濃加茂市"},{id:"client_54",name:"細田 と",genderPreference:"指定なし",address:"加茂郡川辺町比久見927番地3",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.49138118249907,lng:137.0669797974694,isActive:!0,area:"加茂郡川辺町"},{id:"client_55",name:"織部 恒",genderPreference:"女性希望",address:"加茂郡富加町大山561-2",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4956482083646,lng:136.98479580431297,isActive:!0,area:"加茂郡富加町"},{id:"client_56",name:"纐纈 芳",genderPreference:"指定なし",address:"美濃加茂市田島町2-1-9",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.45002813499261,lng:137.0212204400497,isActive:!0,area:"美濃加茂市"},{id:"client_57",name:"纐纈美",genderPreference:"指定なし",address:"美濃加茂市大手町",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4391119160273,lng:137.02387050933302,isActive:!0,area:"美濃加茂市"},{id:"client_58",name:"肥田 太",genderPreference:"指定なし",address:"可児市下恵土4146-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.4312051032861,lng:137.05456974028345,isActive:!0,area:"可児市"},{id:"client_59",name:"菊池 二",genderPreference:"指定なし",address:"美濃加茂市加茂野町鷹之巣1712番地13",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44067140824593,lng:137.00812252064713,isActive:!0,area:"美濃加茂市"},{id:"client_60",name:"酒向 み",genderPreference:"指定なし",address:"美濃加茂市下米田町東栃井173番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:["調理"],visitDuration:60,lat:35.439305854394995,lng:137.02599237626308,isActive:!0,area:"美濃加茂市"},{id:"client_61",name:"鈴木 春",genderPreference:"女性希望",address:"美濃加茂市蜂屋町伊瀬920",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.445308304721735,lng:137.02055837255097,isActive:!0,area:"美濃加茂市"},{id:"client_62",name:"長沼 善",genderPreference:"指定なし",address:"美濃加茂市富加町加治田665",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.452051259062436,lng:137.01855573983298,isActive:!0,area:"美濃加茂市"},{id:"client_63",name:"馬場 と",genderPreference:"女性希望",address:"美濃加茂市太田町3519-1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44993124386665,lng:137.02104853551123,isActive:!0,area:"美濃加茂市"},{id:"client_64",name:"高山 智",genderPreference:"指定なし",address:"美濃加茂市牧野1941番地16",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44532882741129,lng:137.00968272003644,isActive:!0,area:"美濃加茂市"},{id:"client_65",name:"髙井 千",genderPreference:"女性希望",address:"加茂郡富加町羽生1751番地",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.505370248825024,lng:136.9927463803301,isActive:!0,area:"加茂郡富加町"},{id:"client_66",name:"鹿野 和",genderPreference:"指定なし",address:"美濃加茂市山之上町1538番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.44890607991325,lng:137.01711922971506,isActive:!0,area:"美濃加茂市"},{id:"client_67",name:"鹿野 義",genderPreference:"指定なし",address:"美濃加茂市山之上町6260番地1",careLevel:"要介護2",requiredServices:["身体介護","生活援助"],requiredSkills:[],visitDuration:60,lat:35.43761631928377,lng:137.01824050932268,isActive:!0,area:"美濃加茂市"}],Gr=[{id:"visit_1",clientId:"client_46",dayOfWeek:"金",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_2",clientId:"client_18",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_3",clientId:"client_21",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_4",clientId:"client_21",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"生活２・１７９０円"},{id:"visit_6",clientId:"client_52",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_7",clientId:"client_52",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_8",clientId:"client_52",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_9",clientId:"client_51",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_10",clientId:"client_51",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_11",clientId:"client_51",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_12",clientId:"client_51",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_13",clientId:"client_51",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_14",clientId:"client_51",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_28",clientId:"client_50",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2200,serviceInfo:"生活３・２２００円"},{id:"visit_29",clientId:"client_50",dayOfWeek:"水",startTime:"12:30",endTime:"14:00",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_30",clientId:"client_2",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_31",clientId:"client_27",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_32",clientId:"client_6",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_33",clientId:"client_17",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:5870,serviceInfo:"障害身体・５８７０円・１２００円"},{id:"visit_34",clientId:"client_17",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_35",clientId:"client_17",dayOfWeek:"土",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_36",clientId:"client_16",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_37",clientId:"client_26",dayOfWeek:"水",startTime:"09:00",endTime:"10:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_38",clientId:"client_19",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_39",clientId:"client_19",dayOfWeek:"金",startTime:"09:00",endTime:"10:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_40",clientId:"client_25",dayOfWeek:"月",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_41",clientId:"client_25",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_42",clientId:"client_25",dayOfWeek:"木",startTime:"09:30",endTime:"10:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_43",clientId:"client_25",dayOfWeek:"水",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_44",clientId:"client_25",dayOfWeek:"金",startTime:"08:15",endTime:"08:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_45",clientId:"client_55",dayOfWeek:"月",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_46",clientId:"client_55",dayOfWeek:"土",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_47",clientId:"client_9",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_48",clientId:"client_9",dayOfWeek:"火",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_49",clientId:"client_9",dayOfWeek:"木",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_50",clientId:"client_9",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_51",clientId:"client_9",dayOfWeek:"土",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_52",clientId:"client_9",dayOfWeek:"月",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_53",clientId:"client_9",dayOfWeek:"木",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_54",clientId:"client_9",dayOfWeek:"土",startTime:"12:10",endTime:"12:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_58",clientId:"client_9",dayOfWeek:"月",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_59",clientId:"client_9",dayOfWeek:"土",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_60",clientId:"client_9",dayOfWeek:"火",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_61",clientId:"client_9",dayOfWeek:"金",startTime:"15:30",endTime:"15:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_62",clientId:"client_9",dayOfWeek:"木",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_63",clientId:"client_10",dayOfWeek:"水",startTime:"10:00",endTime:"11:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_64",clientId:"client_10",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_65",clientId:"client_53",dayOfWeek:"水",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_66",clientId:"client_28",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_67",clientId:"client_28",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_68",clientId:"client_45",dayOfWeek:"金",startTime:"09:15",endTime:"10:15",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_69",clientId:"client_59",dayOfWeek:"月",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_70",clientId:"client_59",dayOfWeek:"水",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_71",clientId:"client_59",dayOfWeek:"金",startTime:"07:50",endTime:"08:20",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_72",clientId:"client_38",dayOfWeek:"月",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_73",clientId:"client_38",dayOfWeek:"水",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_74",clientId:"client_38",dayOfWeek:"金",startTime:"08:15",endTime:"08:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_75",clientId:"client_37",dayOfWeek:"月",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_76",clientId:"client_37",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_77",clientId:"client_37",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_80",clientId:"client_37",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_82",clientId:"client_37",dayOfWeek:"水",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_83",clientId:"client_37",dayOfWeek:"木",startTime:"11:15",endTime:"11:45",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_84",clientId:"client_37",dayOfWeek:"火",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_85",clientId:"client_37",dayOfWeek:"土",startTime:"16:30",endTime:"17:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_86",clientId:"client_37",dayOfWeek:"火",startTime:"17:00",endTime:"17:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_87",clientId:"client_37",dayOfWeek:"水",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_88",clientId:"client_37",dayOfWeek:"木",startTime:"16:00",endTime:"16:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_89",clientId:"client_36",dayOfWeek:"月",startTime:"15:30",endTime:"16:30",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_90",clientId:"client_36",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_91",clientId:"client_36",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:2200,serviceInfo:"生活３・２２００円・１１００円"},{id:"visit_92",clientId:"client_57",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_93",clientId:"client_43",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_94",clientId:"client_43",dayOfWeek:"水",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_95",clientId:"client_43",dayOfWeek:"金",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_96",clientId:"client_43",dayOfWeek:"火",startTime:"09:00",endTime:"10:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_97",clientId:"client_56",dayOfWeek:"水",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害・４０４０円・１２００円"},{id:"visit_98",clientId:"client_32",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_99",clientId:"client_44",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_100",clientId:"client_44",dayOfWeek:"火",startTime:"14:30",endTime:"15:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_101",clientId:"client_44",dayOfWeek:"月",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_102",clientId:"client_44",dayOfWeek:"木",startTime:"08:30",endTime:"09:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_103",clientId:"client_60",dayOfWeek:"火",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_104",clientId:"client_60",dayOfWeek:"木",startTime:"08:10",endTime:"08:40",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_105",clientId:"client_60",dayOfWeek:"土",startTime:"08:10",endTime:"09:10",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_106",clientId:"client_3",dayOfWeek:"月",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_107",clientId:"client_3",dayOfWeek:"木",startTime:"09:00",endTime:"10:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_108",clientId:"client_5",dayOfWeek:"水",startTime:"12:00",endTime:"13:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_109",clientId:"client_4",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_110",clientId:"client_4",dayOfWeek:"火",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_111",clientId:"client_4",dayOfWeek:"水",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_112",clientId:"client_4",dayOfWeek:"木",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_113",clientId:"client_4",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_114",clientId:"client_4",dayOfWeek:"土",startTime:"16:30",endTime:"17:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_115",clientId:"client_66",dayOfWeek:"火",startTime:"09:30",endTime:"10:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_116",clientId:"client_67",dayOfWeek:"月",startTime:"16:00",endTime:"17:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_117",clientId:"client_39",dayOfWeek:"月",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_118",clientId:"client_61",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_119",clientId:"client_61",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_120",clientId:"client_65",dayOfWeek:"月",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_121",clientId:"client_65",dayOfWeek:"火",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_122",clientId:"client_65",dayOfWeek:"水",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_123",clientId:"client_65",dayOfWeek:"木",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_124",clientId:"client_65",dayOfWeek:"金",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_125",clientId:"client_65",dayOfWeek:"土",startTime:"09:30",endTime:"09:50",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_126",clientId:"client_65",dayOfWeek:"月",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_127",clientId:"client_65",dayOfWeek:"水",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_128",clientId:"client_65",dayOfWeek:"木",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_129",clientId:"client_65",dayOfWeek:"金",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_130",clientId:"client_65",dayOfWeek:"土",startTime:"12:00",endTime:"12:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_131",clientId:"client_65",dayOfWeek:"火",startTime:"12:10",endTime:"12:30",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_132",clientId:"client_65",dayOfWeek:"月",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_133",clientId:"client_65",dayOfWeek:"水",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_134",clientId:"client_65",dayOfWeek:"火",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_135",clientId:"client_65",dayOfWeek:"金",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_136",clientId:"client_65",dayOfWeek:"土",startTime:"15:00",endTime:"15:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_137",clientId:"client_64",dayOfWeek:"火",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_138",clientId:"client_64",dayOfWeek:"木",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_139",clientId:"client_64",dayOfWeek:"金",startTime:"09:00",endTime:"09:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_140",clientId:"client_49",dayOfWeek:"水",startTime:"12:15",endTime:"13:15",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_141",clientId:"client_49",dayOfWeek:"土",startTime:"11:00",endTime:"12:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_142",clientId:"client_14",dayOfWeek:"水",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_143",clientId:"client_15",dayOfWeek:"月",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_144",clientId:"client_15",dayOfWeek:"水",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_145",clientId:"client_15",dayOfWeek:"金",startTime:"08:20",endTime:"08:50",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_146",clientId:"client_24",dayOfWeek:"火",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_147",clientId:"client_24",dayOfWeek:"木",startTime:"13:00",endTime:"13:20",duration:60,income:800,serviceInfo:"身体０・１６３０円・８００円"},{id:"visit_148",clientId:"client_7",dayOfWeek:"月",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_149",clientId:"client_7",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_150",clientId:"client_1",dayOfWeek:"月",startTime:"15:30",endTime:"16:00",duration:60,income:3090,serviceInfo:"障害家事・１０６０円・１０１０円"},{id:"visit_151",clientId:"client_1",dayOfWeek:"水",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_152",clientId:"client_1",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_153",clientId:"client_62",dayOfWeek:"木",startTime:"08:00",endTime:"08:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_154",clientId:"client_63",dayOfWeek:"火",startTime:"12:00",endTime:"13:30",duration:60,income:4520,serviceInfo:"身２生１・４５２０円・１６００円"},{id:"visit_156",clientId:"client_58",dayOfWeek:"月",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_157",clientId:"client_58",dayOfWeek:"水",startTime:"12:00",endTime:"12:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_158",clientId:"client_58",dayOfWeek:"火",startTime:"11:45",endTime:"12:15",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_159",clientId:"client_58",dayOfWeek:"木",startTime:"13:00",endTime:"13:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_160",clientId:"client_58",dayOfWeek:"金",startTime:"12:30",endTime:"13:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_161",clientId:"client_33",dayOfWeek:"木",startTime:"10:45",endTime:"11:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_162",clientId:"client_35",dayOfWeek:"月",startTime:"10:40",endTime:"11:40",duration:60,income:3870,serviceInfo:"身体２・３８７０円・１５００円"},{id:"visit_163",clientId:"client_34",dayOfWeek:"火",startTime:"07:30",endTime:"08:00",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_164",clientId:"client_30",dayOfWeek:"金",startTime:"14:30",endTime:"15:30",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_165",clientId:"client_29",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_166",clientId:"client_31",dayOfWeek:"木",startTime:"09:30",endTime:"10:20",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_167",clientId:"client_54",dayOfWeek:"火",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_168",clientId:"client_54",dayOfWeek:"金",startTime:"14:00",endTime:"15:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_169",clientId:"client_54",dayOfWeek:"木",startTime:"08:15",endTime:"09:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_170",clientId:"client_8",dayOfWeek:"金",startTime:"13:00",endTime:"14:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_171",clientId:"client_42",dayOfWeek:"火",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_172",clientId:"client_42",dayOfWeek:"金",startTime:"13:15",endTime:"14:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_173",clientId:"client_42",dayOfWeek:"水",startTime:"14:45",endTime:"16:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_174",clientId:"client_23",dayOfWeek:"土",startTime:"15:00",endTime:"15:30",duration:60,income:2440,serviceInfo:"身体１・２４４０円・１３００円"},{id:"visit_175",clientId:"client_22",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_176",clientId:"client_41",dayOfWeek:"火",startTime:"10:00",endTime:"11:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_177",clientId:"client_40",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_178",clientId:"client_40",dayOfWeek:"木",startTime:"11:45",endTime:"12:45",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_179",clientId:"client_40",dayOfWeek:"金",startTime:"10:30",endTime:"11:30",duration:60,income:2940,serviceInfo:"要支援・２９４０円・１１００円"},{id:"visit_180",clientId:"client_20",dayOfWeek:"月",startTime:"17:00",endTime:"18:00",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_181",clientId:"client_12",dayOfWeek:"火",startTime:"15:30",endTime:"16:15",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_182",clientId:"client_12",dayOfWeek:"金",startTime:"16:00",endTime:"17:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_183",clientId:"client_11",dayOfWeek:"月",startTime:"12:00",endTime:"12:50",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_184",clientId:"client_48",dayOfWeek:"火",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_185",clientId:"client_48",dayOfWeek:"金",startTime:"11:00",endTime:"12:00",duration:60,income:4040,serviceInfo:"障害身体・４０４０円・１２００円"},{id:"visit_186",clientId:"client_47",dayOfWeek:"土",startTime:"14:15",endTime:"15:15",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"},{id:"visit_187",clientId:"client_13",dayOfWeek:"木",startTime:"13:30",endTime:"14:30",duration:60,income:3090,serviceInfo:"身１生１・３０９０円・１４００円"}];document.addEventListener("DOMContentLoaded",()=>{var e,n,s;console.log("🏠 CareRoute 起動中..."),ld(),Qd();try{rd(async(a,l)=>{if(l){R(l,"error"),kn();return}a?(console.log("✅ ログイン:",a.email),An(a),await Te(window.isAdmin?"calendar":"my-schedule")):kn()})}catch(a){console.warn("Firebase未設定のためデモモードで起動します:",a),kn()}const i=document.getElementById("btn-font-size");i&&(localStorage.getItem("careroute_large_text")==="1"&&document.body.classList.add("large-text"),i.addEventListener("click",()=>{const l=document.body.classList.toggle("large-text");localStorage.setItem("careroute_large_text",l?"1":"0")})),(e=document.getElementById("btn-logout"))==null||e.addEventListener("click",async()=>{try{await od(),R("ログアウトしました","info")}catch{R("ログアウトに失敗しました","error")}}),(n=document.getElementById("btn-demo-mode"))==null||n.addEventListener("click",async()=>{An({displayName:"管理者（デモ）",email:"admin@careroute.local",photoURL:""}),(await re()).length===0&&(R("デモデータを自動投入しています...","info"),await Wn(!0)),await Te("calendar"),R("管理者デモモードで起動しました","info")}),(s=document.getElementById("btn-staff-demo-mode"))==null||s.addEventListener("click",async()=>{An({displayName:"現場スタッフ（デモ）",email:"staff@careroute.local",photoURL:""});let l=await re();l.length===0&&(R("デモデータを自動投入しています...","info"),await Wn(!0),l=await re());const c=l.find(u=>u.isActive)||l[0];window.currentStaffId=(c==null?void 0:c.id)||null,await Te("my-schedule"),R("スタッフデモモードで起動しました","info")})});function kn(){document.getElementById("login-screen").style.display="flex",document.getElementById("main-app").style.display="none",document.getElementById("nav-revenue").style.display="none"}function An(i){document.getElementById("login-screen").style.display="none",document.getElementById("main-app").style.display="flex";const e=document.getElementById("user-avatar"),n=document.getElementById("user-name");e&&(e.src=i.photoURL||""),n&&(n.textContent=i.displayName||i.email),window.isAdmin=i.email==="admin@careroute.local"||i.email==="demo@careroute.local";const s=window.isAdmin?"flex":"none",a=window.isAdmin?"none":"flex";document.getElementById("nav-dashboard").style.display=s,document.getElementById("nav-map").style.display=s,document.getElementById("nav-staff").style.display=s,document.getElementById("nav-client").style.display=s,document.getElementById("nav-schedule").style.display=s;const l=document.getElementById("nav-calendar");l&&(l.style.display=s),document.getElementById("nav-matching").style.display=s;const c=document.getElementById("nav-revenue");c&&(c.style.display=s);const u=document.getElementById("nav-my-schedule");u&&(u.style.display=a),Zd()}function Zd(){if(document.getElementById("btn-load-demo"))return;const i=document.querySelector(".sidebar-nav"),e=document.createElement("li");e.className="nav-item",e.id="btn-load-demo",e.innerHTML=`
    <span class="material-icons-round" style="color:var(--secondary)">science</span>
    <span class="nav-label">デモデータ投入</span>
  `,e.addEventListener("click",Wn),i.appendChild(e)}async function Wn(i=!1){const e=document.getElementById("btn-load-demo");if(!(!i&&!await me("デモデータ投入","デモデータ（職員6名・利用者20名）を投入しますか？既存データには影響しません。"))){e&&(e.innerHTML=`
      <span class="material-icons-round" style="animation:spin 1s linear infinite;color:var(--secondary)">sync</span>
      <span class="nav-label">投入中...</span>
    `);try{const n=await re(),s=await ue();if(n.length>0||s.length>0){if(!i&&!await me("データ上書き確認","既存のデータを全て削除し、新しいデモデータを投入しますか？")){e&&(e.innerHTML=`
            <span class="material-icons-round" style="color:var(--secondary)">science</span>
            <span class="nav-label">デモデータ投入</span>
          `);return}typeof $r=="function"?await $r():(localStorage.removeItem("careroute_staff"),localStorage.removeItem("careroute_clients"),localStorage.removeItem("careroute_visits"))}for(const u of Hr)await ka(u);R(`職員 ${Hr.length}名 を登録しました`,"success");for(const u of zr)await Aa(u);R(`利用者 ${zr.length}名 を登録しました`,"success");const a=new Date,l=a.getDay(),c={日:0,月:1,火:2,水:3,木:4,金:5,土:6};for(const u of Gr){let p=new Date(a);if(u.dayOfWeek&&c[u.dayOfWeek]!==void 0){const A=c[u.dayOfWeek]-l;p.setDate(a.getDate()+A)}const _=p.getFullYear(),E=String(p.getMonth()+1).padStart(2,"0"),S=String(p.getDate()).padStart(2,"0"),b=`${_}-${E}-${S}`;await Wi({...u,date:b,status:"scheduled"})}R(`予定 ${Gr.length}件 を登録しました`,"success"),await Te("calendar"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--success)">check_circle</span>
      <span class="nav-label">投入完了！</span>
    `,setTimeout(()=>e.remove(),3e3)}catch(n){console.error("デモデータ投入エラー:",n),R("デモデータの投入に失敗しました: "+n.message,"error"),e.innerHTML=`
      <span class="material-icons-round" style="color:var(--secondary)">science</span>
      <span class="nav-label">デモデータ投入</span>
    `}}}
