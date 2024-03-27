/*! For license information please see 378.1d550fe2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkzwc=self.webpackChunkzwc||[]).push([[378],{9378:(t,e,i)=>{i.d(e,{SIWEController:()=>l});var n=i(3454);i(7810);var s=i(6844),o=i(574);const r=(0,o.BX)({status:"uninitialized"}),l={state:r,subscribeKey:(t,e)=>(0,s.u$)(r,t,e),subscribe:t=>(0,o.B1)(r,(()=>t(r))),_getClient(){if(!r._client)throw new Error("SIWEController client not set");return r._client},async getNonce(){const t=this._getClient(),e=await t.getNonce();return this.setNonce(e),e},async getSession(){const t=this._getClient(),e=await t.getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){const e=this._getClient().createMessage(t);return this.setMessage(e),e},async verifyMessage(t){const e=this._getClient();return await e.verifyMessage(t)},async signIn(){const t=this._getClient();return await t.signIn()},async signOut(){var t;const e=this._getClient();await e.signOut(),this.setStatus("ready"),null===(t=e.onSignOut)||void 0===t||t.call(e)},onSignIn(t){var e;const i=this._getClient();null===(e=i.onSignIn)||void 0===e||e.call(i,t)},onSignOut(){var t;const e=this._getClient();null===(t=e.onSignOut)||void 0===t||t.call(e)},setSIWEClient(t){r._client=(0,o.KR)(t),r.status="ready",n.OptionsController.setIsSiweEnabled(t.options.enabled)},setNonce(t){r.nonce=t},setStatus(t){r.status=t},setMessage(t){r.message=t},setSession(t){r.session=t}};var a=i(7528),h=i(483);const c=globalThis,d=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u=Symbol(),p=new WeakMap;class v{constructor(t,e,i){if(this._$cssResult$=!0,i!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(d&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=p.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&p.set(e,t))}return t}toString(){return this.cssText}}const g=(t,e)=>{if(d)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),n=c.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},f=d?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new v("string"==typeof t?t:t+"",void 0,u))(e)})(t):t;var _,$,y;const{is:m,defineProperty:A,getOwnPropertyDescriptor:S,getOwnPropertyNames:w,getOwnPropertySymbols:E,getPrototypeOf:b}=Object,C=globalThis,x=C.trustedTypes,P=x?x.emptyScript:"",U=C.reactiveElementPolyfillSupport,O=(t,e)=>t,R={toAttribute(t,e){switch(e){case Boolean:t=t?P:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},T=(t,e)=>!m(t,e),N={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:T};null!==(_=Symbol.metadata)&&void 0!==_||(Symbol.metadata=Symbol("metadata")),null!==($=C.litPropertyMetadata)&&void 0!==$||(C.litPropertyMetadata=new WeakMap);class M extends HTMLElement{static addInitializer(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N;if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&A(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){var n;const{get:s,set:o}=null!==(n=S(this.prototype,t))&&void 0!==n?n:{get(){return this[e]},set(t){this[e]=t}};return{get(){return null===s||void 0===s?void 0:s.call(this)},set(e){const n=null===s||void 0===s?void 0:s.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:N}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,e=[...w(t),...E(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(f(t))}else void 0!==t&&e.push(f(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$EO)&&void 0!==e?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$EO)||void 0===e||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return g(e,this.constructor.elementStyles),e}connectedCallback(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$EO)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$EO)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){var s;const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:R).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){var s;const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:R;this._$Em=n,this[n]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){var n,s;if(null!==(n=i)&&void 0!==n||(i=this.constructor.getPropertyOptions(t)),!(null!==(s=i.hasChanged)&&void 0!==s?s:T)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){var n;this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(null!==(n=this._$Ej)&&void 0!==n?n:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var t;if(null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const i=this._$AL;try{var n;e=this.shouldUpdate(i),e?(this.willUpdate(i),null!==(n=this._$EO)&&void 0!==n&&n.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null!==(e=this._$EO)&&void 0!==e&&e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}var H;M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[O("elementProperties")]=new Map,M[O("finalized")]=new Map,null!==U&&void 0!==U&&U({ReactiveElement:M}),(null!==(y=C.reactiveElementVersions)&&void 0!==y?y:C.reactiveElementVersions=[]).push("2.0.4");const I=globalThis,k=I.trustedTypes,j=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,z="$lit$",L="lit$".concat((Math.random()+"").slice(9),"$"),D="?"+L,W="<".concat(D,">"),B=document,V=()=>B.createComment(""),q=t=>null===t||"object"!=typeof t&&"function"!=typeof t,K=Array.isArray,G=t=>K(t)||"function"==typeof(null===t||void 0===t?void 0:t[Symbol.iterator]),J="[ \t\n\f\r]",X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,F=/>/g,Q=RegExp(">|".concat(J,"(?:([^\\s\"'>=/]+)(").concat(J,"*=").concat(J,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),Y=/'/g,tt=/"/g,et=/^(?:script|style|textarea|title)$/i,it=t=>function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return{_$litType$:t,strings:e,values:n}},nt=it(1),st=(it(2),Symbol.for("lit-noChange")),ot=Symbol.for("lit-nothing"),rt=new WeakMap,lt=B.createTreeWalker(B,129);function at(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==j?j.createHTML(e):e}const ht=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=X;for(let a=0;a<i;a++){const e=t[a];let i,h,c=-1,d=0;for(;d<e.length&&(r.lastIndex=d,h=r.exec(e),null!==h);){var l;d=r.lastIndex,r===X?"!--"===h[1]?r=Z:void 0!==h[1]?r=F:void 0!==h[2]?(et.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=Q):void 0!==h[3]&&(r=Q):r===Q?">"===h[0]?(r=null!==(l=s)&&void 0!==l?l:X,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,i=h[1],r=void 0===h[3]?Q:'"'===h[3]?tt:Y):r===tt||r===Y?r=Q:r===Z||r===F?r=X:(r=Q,s=void 0)}const u=r===Q&&t[a+1].startsWith("/>")?" ":"";o+=r===X?e+W:c>=0?(n.push(i),e.slice(0,c)+z+e.slice(c)+L+u):e+L+(-2===c?a:u)}return[at(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class ct{constructor(t,e){let i,{strings:n,_$litType$:s}=t;this.parts=[];let o=0,r=0;const l=n.length-1,a=this.parts,[h,c]=ht(n,s);if(this.el=ct.createElement(h,e),lt.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=lt.nextNode())&&a.length<l;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(z)){const e=c[r++],n=i.getAttribute(t).split(L),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:s[2],strings:n,ctor:"."===s[1]?gt:"?"===s[1]?ft:"@"===s[1]?_t:vt}),i.removeAttribute(t)}else t.startsWith(L)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(et.test(i.tagName)){const t=i.textContent.split(L),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],V()),lt.nextNode(),a.push({type:2,index:++o});i.append(t[e],V())}}}else if(8===i.nodeType)if(i.data===D)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(L,t+1));)a.push({type:7,index:o}),t+=L.length-1}o++}}static createElement(t,e){const i=B.createElement("template");return i.innerHTML=t,i}}function dt(t,e){var i,n,s,o,r;let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0;if(e===st)return e;let h=void 0!==a?null===(i=l._$Co)||void 0===i?void 0:i[a]:l._$Cl;const c=q(e)?void 0:e._$litDirective$;return(null===(n=h)||void 0===n?void 0:n.constructor)!==c&&(null!==(s=h)&&void 0!==s&&null!==(o=s._$AO)&&void 0!==o&&o.call(s,!1),void 0===c?h=void 0:(h=new c(t),h._$AT(t,l,a)),void 0!==a?(null!==(r=l._$Co)&&void 0!==r?r:l._$Co=[])[a]=h:l._$Cl=h),void 0!==h&&(e=dt(t,h._$AS(t,e.values),h,a)),e}class ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null===t||void 0===t?void 0:t.creationScope)&&void 0!==e?e:B).importNode(i,!0);lt.currentNode=s;let o=lt.nextNode(),r=0,l=0,a=n[0];for(;void 0!==a;){var h;if(r===a.index){let e;2===a.type?e=new pt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new $t(o,this,t)),this._$AV.push(e),a=n[++l]}r!==(null===(h=a)||void 0===h?void 0:h.index)&&(o=lt.nextNode(),r++)}return lt.currentNode=B,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class pt{get _$AU(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}constructor(t,e,i,n){var s;this.type=2,this._$AH=ot,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=null===(s=null===n||void 0===n?void 0:n.isConnected)||void 0===s||s}get parentNode(){var t;let e=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=dt(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),q(t)?t===ot||null==t||""===t?(this._$AH!==ot&&this._$AR(),this._$AH=ot):t!==this._$AH&&t!==st&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):G(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==ot&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=ct.createElement(at(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{const t=new ut(s,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=rt.get(t.strings);return void 0===e&&rt.set(t.strings,e=new ct(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new pt(this.S(V()),this.S(V()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){var i;const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=ot,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ot}_$AI(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;const s=this.strings;let o=!1;if(void 0===s)t=dt(this,t,e,0),o=!q(t)||t!==this._$AH&&t!==st,o&&(this._$AH=t);else{const n=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++){var r;a=dt(this,n[i+l],e,l),a===st&&(a=this._$AH[l]),o||(o=!q(a)||a!==this._$AH[l]),a===ot?t=ot:t!==ot&&(t+=(null!==(r=a)&&void 0!==r?r:"")+s[l+1]),this._$AH[l]=a}}o&&!n&&this.j(t)}j(t){t===ot?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!==t&&void 0!==t?t:"")}}class gt extends vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ot?void 0:t}}class ft extends vt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ot)}}class _t extends vt{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t){var e;if((t=null!==(e=dt(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:ot)===st)return;const i=this._$AH,n=t===ot&&i!==ot||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==ot&&(i===ot||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class $t{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){dt(this,t)}}const yt=I.litHtmlPolyfillSupport;null!==yt&&void 0!==yt&&yt(ct,pt),(null!==(H=I.litHtmlVersions)&&void 0!==H?H:I.litHtmlVersions=[]).push("3.1.2");var mt,At;class St extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n;const s=null!==(n=null===i||void 0===i?void 0:i.renderBefore)&&void 0!==n?n:e;let o=s._$litPart$;if(void 0===o){var r;const t=null!==(r=null===i||void 0===i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new pt(e.insertBefore(V(),t),t,void 0,null!==i&&void 0!==i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return st}}St._$litElement$=!0,St.finalized=!0,null===(mt=globalThis.litElementHydrateSupport)||void 0===mt||mt.call(globalThis,{LitElement:St});const wt=globalThis.litElementPolyfillSupport;null===wt||void 0===wt||wt({LitElement:St});var Et;(null!==(At=globalThis.litElementVersions)&&void 0!==At?At:globalThis.litElementVersions=[]).push("4.0.4");const bt=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];const s=1===t.length?t[0]:i.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new v(s,t,u)}(Et||(Et=(0,a.A)(["\n  :host {\n    display: flex;\n    justify-content: center;\n    gap: var(--wui-spacing-2xl);\n  }\n\n  wui-visual-thumbnail:nth-child(1) {\n    z-index: 1;\n  }\n"])));var Ct,xt=function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Pt=class extends St{constructor(){var t;super(...arguments),this.dappImageUrl=null===(t=n.OptionsController.state.metadata)||void 0===t?void 0:t.icons,this.walletImageUrl=n.iT.getConnectedWalletImageUrl()}firstUpdated(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("wui-visual-thumbnail");null!==e&&void 0!==e&&e[0]&&this.createAnimation(e[0],"translate(18px)"),null!==e&&void 0!==e&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var t;return nt(Ct||(Ct=(0,a.A)(["\n      <wui-visual-thumbnail\n        ?borderRadiusFull=","\n        .imageSrc=","\n      ></wui-visual-thumbnail>\n      <wui-visual-thumbnail .imageSrc=","></wui-visual-thumbnail>\n    "])),!0,null===(t=this.dappImageUrl)||void 0===t?void 0:t[0],this.walletImageUrl)}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Pt.styles=bt,Pt=xt([(0,h.customElement)("w3m-connecting-siwe")],Pt);const Ut={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:T},Ot=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,s,t)},init(e){return void 0!==e&&this.P(n,void 0,t),e}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];e.call(this,i),this.requestUpdate(n,s,t)}}throw Error("Unsupported decorator location: "+n)};var Rt,Tt=function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let Nt=class extends St{constructor(){var t;super(...arguments),this.dappName=null===(t=n.OptionsController.state.metadata)||void 0===t?void 0:t.name,this.isSigning=!1}render(){var t;return nt(Rt||(Rt=(0,a.A)(['\n      <wui-flex justifyContent="center" .padding=',">\n        <w3m-connecting-siwe></w3m-connecting-siwe>\n      </wui-flex>\n      <wui-flex\n        .padding=",'\n        gap="s"\n        justifyContent="space-between"\n      >\n        <wui-text variant="paragraph-500" align="center" color="fg-100"\n          >'," needs to connect to your wallet</wui-text\n        >\n      </wui-flex>\n      <wui-flex\n        .padding=",'\n        gap="s"\n        justifyContent="space-between"\n      >\n        <wui-text variant="small-400" align="center" color="fg-200"\n          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect\n          you.</wui-text\n        >\n      </wui-flex>\n      <wui-flex .padding=',' gap="s" justifyContent="space-between">\n        <wui-button\n          size="md"\n          ?fullwidth=','\n          variant="shade"\n          @click=','\n          data-testid="w3m-connecting-siwe-cancel"\n        >\n          Cancel\n        </wui-button>\n        <wui-button\n          size="md"\n          ?fullwidth=','\n          variant="fill"\n          @click=',"\n          ?loading=",'\n          data-testid="w3m-connecting-siwe-sign"\n        >\n          ',"\n        </wui-button>\n      </wui-flex>\n    "])),["2xl","0","xxl","0"],["0","4xl","l","4xl"],null!==(t=this.dappName)&&void 0!==t?t:"Dapp",["0","3xl","l","3xl"],["l","xl","xl","xl"],!0,this.onCancel.bind(this),!0,this.onSign.bind(this),this.isSigning,this.isSigning?"Signing...":"Sign")}async onSign(){this.isSigning=!0,n.En.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{l.setStatus("loading");const t=await l.signIn();return l.setStatus("success"),n.En.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),t}catch(t){return n.SnackController.showError("Signature declined"),l.setStatus("error"),n.En.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:t}=n.AccountController.state;t?(await n.ConnectionController.disconnect(),n.W3.close()):n.RouterController.push("Connect"),n.En.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};Tt([function(t){return function(t){return(e,i)=>"object"==typeof i?Ot(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}({...t,state:!0,attribute:!1})}()],Nt.prototype,"isSigning",void 0),Nt=Tt([(0,h.customElement)("w3m-connecting-siwe-view")],Nt)}}]);
//# sourceMappingURL=378.1d550fe2.chunk.js.map