const d={};function M(e){d.context=e}function Rt(){return{...d.context,id:`${d.context.id}${d.context.count++}-`,count:0}}const _t=(e,t)=>e===t,he=Symbol("solid-proxy"),ge={equals:_t};let U=null,tt=lt;const k=1,D=2,nt={owned:null,cleanups:null,context:null,owner:null},Pe={};var m=null;let f=null,v=null,$=null,C=null,be=0;const[Sr,qe]=T(!1);function xe(e,t){const n=v,r=m,s=e.length===0,i=s?nt:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},l=s?e:()=>e(()=>N(()=>K(i)));m=i,v=null;try{return _(l,!0)}finally{v=n,m=r}}function T(e,t){t=t?Object.assign({},ge,t):ge;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(f&&f.running&&f.sources.has(n)?s=s(n.tValue):s=s(n.value)),ot(n,s));return[it.bind(n),r]}function Ie(e,t,n){const r=ve(e,t,!0,k);ne(r)}function q(e,t,n){const r=ve(e,t,!1,k);ne(r)}function Mt(e,t,n){tt=Ft;const r=ve(e,t,!1,k),s=Y&&ce(m,Y.id);s&&(r.suspense=s),r.user=!0,C?C.push(r):ne(r)}function P(e,t,n){n=n?Object.assign({},ge,n):ge;const r=ve(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ne(r),it.bind(r)}function jt(e,t,n){let r,s,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,i=t||{}):(r=e,s=t,i=n||{});let l=null,o=Pe,u=null,c=!1,a=!1,g="initialValue"in i,y=typeof r=="function"&&P(r);const b=new Set,[S,x]=(i.storage||T)(i.initialValue),[O,L]=T(void 0),[R,I]=T(void 0,{equals:!1}),[V,H]=T(g?"ready":"unresolved");if(d.context){u=`${d.context.id}${d.context.count++}`;let h;i.ssrLoadFrom==="initial"?o=i.initialValue:d.load&&(h=d.load(u))&&(o=h[0])}function z(h,w,A,j){return l===h&&(l=null,g=!0,(h===o||w===o)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(j,{value:w})),o=Pe,f&&h&&c?(f.promises.delete(h),c=!1,_(()=>{f.running=!0,re(w,A)},!1)):re(w,A)),w}function re(h,w){_(()=>{w===void 0&&x(()=>h),H(w!==void 0?"errored":"ready"),L(w);for(const A of b.keys())A.decrement();b.clear()},!1)}function se(){const h=Y&&ce(m,Y.id),w=S(),A=O();if(A!==void 0&&!l)throw A;return v&&!v.user&&h&&Ie(()=>{R(),l&&(h.resolved&&f&&c?f.promises.add(l):b.has(h)||(h.increment(),b.add(h)))}),w}function E(h=!0){if(h!==!1&&a)return;a=!1;const w=y?y():r;if(c=f&&f.running,w==null||w===!1){z(l,N(S));return}f&&l&&f.promises.delete(l);const A=o!==Pe?o:N(()=>s(w,{value:S(),refetching:h}));return typeof A!="object"||!(A&&"then"in A)?(z(l,A,void 0,w),A):(l=A,a=!0,queueMicrotask(()=>a=!1),_(()=>{H(g?"refreshing":"pending"),I()},!1),A.then(j=>z(A,j,void 0,w),j=>z(A,void 0,at(j),w)))}return Object.defineProperties(se,{state:{get:()=>V()},error:{get:()=>O()},loading:{get(){const h=V();return h==="pending"||h==="refreshing"}},latest:{get(){if(!g)return se();const h=O();if(h&&!l)throw h;return S()}}}),y?Ie(()=>E(!1)):E(!1),[se,{refetch:E,mutate:x}]}function N(e){if(v===null)return e();const t=v;v=null;try{return e()}finally{v=t}}function rt(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let c=0;c<e.length;c++)o[c]=e[c]()}else o=e();if(i){i=!1;return}const u=N(()=>t(o,s,l));return s=o,u}}function J(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function Ve(e){U||(U=Symbol("error")),m===null||(m.context===null?m.context={[U]:[e]}:m.context[U]?m.context[U].push(e):m.context[U]=[e])}function st(){return m}function Ht(e,t){const n=m,r=v;m=e,v=null;try{return _(t,!0)}catch(s){Re(s)}finally{m=n,v=r}}function qt(e){if(f&&f.running)return e(),f.done;const t=v,n=m;return Promise.resolve().then(()=>{v=t,m=n;let r;return Y&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),_(e,!1),v=m=null,r?r.done:void 0})}function It(e){C.push.apply(C,e),e.length=0}function G(e,t){const n=Symbol("context");return{id:n,Provider:Ut(n),defaultValue:e}}function W(e){let t;return(t=ce(m,e.id))!==void 0?t:e.defaultValue}function Ne(e){const t=P(e),n=P(()=>ke(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Y;function Vt(){return Y||(Y=G({}))}function it(){const e=f&&f.running;if(this.sources&&(!e&&this.state||e&&this.tState))if(!e&&this.state===k||e&&this.tState===k)ne(this);else{const t=$;$=null,_(()=>me(this),!1),$=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function ot(e,t,n){let r=f&&f.running&&f.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(r,t)){if(f){const s=f.running;(s||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),s||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&_(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],l=f&&f.running;l&&f.disposed.has(i)||((l&&!i.tState||!l&&!i.state)&&(i.pure?$.push(i):C.push(i),i.observers&&ut(i)),l?i.tState=k:i.state=k)}if($.length>1e6)throw $=[],new Error},!1)}return t}function ne(e){if(!e.fn)return;K(e);const t=m,n=v,r=be;v=m=e,Be(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,r),f&&!f.running&&f.sources.has(e)&&queueMicrotask(()=>{_(()=>{f&&(f.running=!0),v=m=e,Be(e,e.tValue,r),v=m=null},!1)}),v=n,m=t}function Be(e,t,n){let r;try{r=e.fn(t)}catch(s){return e.pure&&(f&&f.running?(e.tState=k,e.tOwned&&e.tOwned.forEach(K),e.tOwned=void 0):(e.state=k,e.owned&&e.owned.forEach(K),e.owned=null)),e.updatedAt=n+1,Re(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ot(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function ve(e,t,n,r=k,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return f&&f.running&&(i.state=0,i.tState=r),m===null||m!==nt&&(f&&f.running&&m.pure?m.tOwned?m.tOwned.push(i):m.tOwned=[i]:m.owned?m.owned.push(i):m.owned=[i]),i}function ye(e){const t=f&&f.running;if(!t&&e.state===0||t&&e.tState===0)return;if(!t&&e.state===D||t&&e.tState===D)return me(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<be);){if(t&&f.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let s=e,i=n[r+1];for(;(s=s.owner)&&s!==i;)if(f.disposed.has(s))return}if(!t&&e.state===k||t&&e.tState===k)ne(e);else if(!t&&e.state===D||t&&e.tState===D){const s=$;$=null,_(()=>me(e,n[0]),!1),$=s}}}function _(e,t){if($)return e();let n=!1;t||($=[]),C?n=!0:C=[],be++;try{const r=e();return Bt(n),r}catch(r){n||(C=null),$=null,Re(r)}}function Bt(e){if($&&(lt($),$=null),e)return;let t;if(f){if(!f.promises.size&&!f.queue.size){const r=f.sources,s=f.disposed;C.push.apply(C,f.effects),t=f.resolve;for(const i of C)"tState"in i&&(i.state=i.tState),delete i.tState;f=null,_(()=>{for(const i of s)K(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let l=0,o=i.owned.length;l<o;l++)K(i.owned[l]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}qe(!1)},!1)}else if(f.running){f.running=!1,f.effects.push.apply(f.effects,C),C=null,qe(!0);return}}const n=C;C=null,n.length&&_(()=>tt(n),!1),t&&t()}function lt(e){for(let t=0;t<e.length;t++)ye(e[t])}function Ft(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ye(r)}for(d.context&&M(),t=0;t<n;t++)ye(e[t])}function me(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(!n&&s.state===k||n&&s.tState===k?s!==t&&(!s.updatedAt||s.updatedAt<be)&&ye(s):(!n&&s.state===D||n&&s.tState===D)&&me(s,t))}}function ut(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=D:r.state=D,r.pure?$.push(r):C.push(r),r.observers&&ut(r))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)K(e.tOwned[t]);delete e.tOwned}ct(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function ct(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)ct(e.owned[n])}function at(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Fe(e,t){for(const n of e)n(t)}function Re(e){e=at(e);const t=U&&ce(m,U);if(!t)throw e;C?C.push({fn(){Fe(t,e)},state:k}):Fe(t,e)}function ce(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ce(e.owner,t):void 0}function ke(e){if(typeof e=="function"&&!e.length)return ke(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ke(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ut(e,t){return function(r){let s;return q(()=>s=N(()=>(m.context={[e]:r.value},Ne(()=>r.children))),void 0),s}}let ft=!1;function Dt(){ft=!0}function p(e,t){if(ft&&d.context){const n=d.context;M(Rt());const r=N(()=>e(t||{}));return M(n),r}return N(()=>e(t||{}))}function fe(){return!0}const Te={get(e,t,n){return t===he?n:e.get(t)},has(e,t){return t===he?!0:e.has(t)},set:fe,deleteProperty:fe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:fe,deleteProperty:fe}},ownKeys(e){return e.keys()}};function Ae(e){return(e=typeof e=="function"?e():e)?e:{}}function Ue(...e){let t=!1;for(let r=0;r<e.length;r++){const s=e[r];t=t||!!s&&he in s,e[r]=typeof s=="function"?(t=!0,P(s)):s}if(t)return new Proxy({get(r){for(let s=e.length-1;s>=0;s--){const i=Ae(e[s])[r];if(i!==void 0)return i}},has(r){for(let s=e.length-1;s>=0;s--)if(r in Ae(e[s]))return!0;return!1},keys(){const r=[];for(let s=0;s<e.length;s++)r.push(...Object.keys(Ae(e[s])));return[...new Set(r)]}},Te);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const s=Object.getOwnPropertyDescriptors(e[r]);for(const i in s)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[i];if(o!==void 0)return o}}})}return n}function Kt(e,...t){const n=new Set(t.flat());if(he in e){const s=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},Te));return s.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Te)),s}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(s=>!n.has(s))),t.map(s=>{const i={};for(let l=0;l<s.length;l++){const o=s[l];o in e&&Object.defineProperty(i,o,r[o]?r[o]:{get(){return e[o]},set(){return!0},enumerable:!0})}return i})}function Ce(e){let t,n;const r=s=>{const i=d.context;if(i){const[o,u]=T();(n||(n=e())).then(c=>{M(i),u(()=>c.default),M()}),t=o}else if(!t){const[o]=jt(()=>(n||(n=e())).then(u=>u.default));t=o}let l;return P(()=>(l=t())&&N(()=>{if(!i)return l(s);const o=d.context;M(i);const u=l(s);return M(o),u}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}let Wt=0;function zt(){const e=d.context;return e?`${e.id}${e.count++}`:`cl-${Wt++}`}function _e(e){let t=!1;const n=e.keyed,r=P(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return P(()=>{const s=r();if(s){const i=e.children,l=typeof i=="function"&&i.length>0;return t=n||l,l?N(()=>i(s)):i}return e.fallback},void 0,void 0)}let Z;function dt(){Z&&[...Z].forEach(e=>e())}function Xt(e){let t,n;d.context&&d.load&&(n=d.load(d.context.id+d.context.count))&&(t=n[0]);const[r,s]=T(t,void 0);return Z||(Z=new Set),Z.add(s),J(()=>Z.delete(s)),P(()=>{let i;if(i=r()){const l=e.fallback,o=typeof l=="function"&&l.length?N(()=>l(i,()=>s())):l;return Ve(s),o}return Ve(s),e.children},void 0,void 0)}const Yt=G();function Jt(e){let t=0,n,r,s,i,l;const[o,u]=T(!1),c=Vt(),a={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:o,effects:[],resolved:!1},g=st();if(d.context&&d.load){const S=d.context.id+d.context.count;let x=d.load(S);if(x&&(s=x[0])&&s!=="$$f"){(typeof s!="object"||!("then"in s))&&(s=Promise.resolve(s));const[O,L]=T(void 0,{equals:!1});i=O,s.then(R=>{if(R||d.done)return R&&(l=R),L();d.gather(S),M(r),L(),M()})}}const y=W(Yt);y&&(n=y.register(a.inFallback));let b;return J(()=>b&&b()),p(c.Provider,{value:a,get children(){return P(()=>{if(l)throw l;if(r=d.context,i)return i(),i=void 0;r&&s==="$$f"&&M();const S=P(()=>e.children);return P(x=>{const O=a.inFallback(),{showContent:L=!0,showFallback:R=!0}=n?n():{};if((!O||s&&s!=="$$f")&&L)return a.resolved=!0,b&&b(),b=r=s=void 0,It(a.effects),S();if(R)return b?x:xe(I=>(b=I,r&&(M({id:r.id+"f",count:0}),r=void 0),e.fallback),g)})})}})}const Gt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Qt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Gt]),Zt=new Set(["innerHTML","textContent","innerText","children"]),en=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),De=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),tn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),nn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function rn(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,u=t[s-1].nextSibling,c=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const a=i<r?o?n[o-1].nextSibling:n[i-o]:u;for(;o<i;)e.insertBefore(n[o++],a)}else if(i===o)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const a=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],a),t[s]=n[i]}else{if(!c){c=new Map;let g=o;for(;g<i;)c.set(n[g],g++)}const a=c.get(t[l]);if(a!=null)if(o<a&&a<i){let g=l,y=1,b;for(;++g<s&&g<i&&!((b=c.get(t[g]))==null||b!==a+y);)y++;if(y>a-o){const S=t[l];for(;o<a;)e.insertBefore(n[o++],S)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Ke="_$DX_DELEGATE";function sn(e,t,n,r={}){let s;return xe(i=>{s=i,t===document?e():pe(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function ht(e,t,n){const r=document.createElement("template");if(r.innerHTML=e,t&&r.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${r.innerHTML}

${e}. Is your HTML properly formed?`;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function Me(e,t=window.document){const n=t[Ke]||(t[Ke]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,wt))}}function gt(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function on(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function ln(e,t){t==null?e.removeAttribute("class"):e.className=t}function yt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function un(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,l;for(i=0,l=s.length;i<l;i++){const o=s[i];!o||o==="undefined"||t[o]||(We(e,o,!1),delete n[o])}for(i=0,l=r.length;i<l;i++){const o=r[i],u=!!t[o];!o||o==="undefined"||n[o]===u||!u||(We(e,o,!0),n[o]=u)}return n}function cn(e,t,n){if(!t)return n?gt(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function ee(e,t={},n,r){const s={};return r||q(()=>s.children=te(e,t.children,s.children)),q(()=>t.ref&&t.ref(e)),q(()=>an(e,t,n,!0,s,!0)),s}function pe(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return te(e,t,r,n);q(s=>te(e,t(),s,n),r)}function an(e,t,n,r,s={},i=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=ze(e,l,null,s[l],n,i)}for(const l in t){if(l==="children"){r||te(e,t.children);continue}const o=t[l];s[l]=ze(e,l,o,s[l],n,i)}}function fn(e,t,n={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=s=>Ye(t,s),d.registry=new Map,d.context={id:n.renderId||"",count:0},Ye(t,n.renderId);const r=sn(e,t,[...t.childNodes],n);return d.context=null,r}function mt(e){let t,n;if(!d.context||!(t=d.registry.get(n=hn()))){if(d.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e.cloneNode(!0)}return d.completed&&d.completed.add(t),d.registry.delete(n),t}function Er(e){let t=e,n=0,r=[];if(d.context)for(;t;){if(t.nodeType===8){const s=t.nodeValue;if(s==="#")n++;else if(s==="/"){if(n===0)return[t,r];n--}}r.push(t),t=t.nextSibling}return[t,r]}function pt(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=d;for(t.queued=!1;t.length;){const[n,r]=t[0];if(!e.has(n))return;wt(r),t.shift()}}),d.events.queued=!0)}function dn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function We(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function ze(e,t,n,r,s,i){let l,o,u;if(t==="style")return cn(e,n,r);if(t==="classList")return un(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),a=tn.has(c);if(!a&&r){const g=Array.isArray(r)?r[0]:r;e.removeEventListener(c,g)}(a||n)&&(yt(e,c,n,a),a&&Me([c]))}else if((u=Zt.has(t))||!s&&(De[t]||(o=Qt.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?ln(e,n):l&&!o&&!u?e[dn(t)]=n:e[De[t]||t]=n;else{const c=s&&t.indexOf(":")>-1&&nn[t.split(":")[0]];c?on(e,c,t,n):gt(e,en[t]||t,n)}return n}function wt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function te(e,t,n,r,s){if(d.context){!n&&(n=[...e.childNodes]);let o=[];for(let u=0;u<n.length;u++){const c=n[u];c.nodeType===8&&c.data==="!"?c.remove():o.push(c)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(d.context)return n;if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=Q(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(d.context)return n;n=Q(e,n,r)}else{if(i==="function")return q(()=>{let o=t();for(;typeof o=="function";)o=o();n=te(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(Le(o,t,n,s))return q(()=>n=te(e,o,n,r,!0)),()=>n;if(d.context){if(!o.length)return n;for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=Q(e,n,r),l)return n}else u?n.length===0?Xe(e,o,r):rn(e,n,o):(n&&Q(e),Xe(e,o));n=o}else if(t instanceof Node){if(d.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=Q(e,n,r,t);Q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Le(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],u=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=Le(e,o,u)||s;else if(typeof o=="function")if(r){for(;typeof o=="function";)o=o();s=Le(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||s}else e.push(o),s=!0;else{const c=String(o);u&&u.nodeType===3?(u.data=c,e.push(u)):e.push(document.createTextNode(c))}}return s}function Xe(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function Q(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const u=o.parentNode===e;!i&&!l?u?e.replaceChild(s,o):e.insertBefore(s,n):u&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}function Ye(e,t){const n=e.querySelectorAll("*[data-hk]");for(let r=0;r<n.length;r++){const s=n[r],i=s.getAttribute("data-hk");(!t||i.startsWith(t))&&!d.registry.has(i)&&d.registry.set(i,s)}}function hn(){const e=d.context;return`${e.id}${e.count++}`}function gn(e){return d.context?void 0:e.children}function yn(){}const ae=!1,mn=(...e)=>(Dt(),fn(...e)),pn="modulepreload",wn=function(e){return"/solid-demo/"+e},Je={},$e=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=wn(i),i in Je)return;Je[i]=!0;const l=i.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(!!r)for(let a=s.length-1;a>=0;a--){const g=s[a];if(g.href===i&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":pn,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((a,g)=>{c.addEventListener("load",a),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function bn(e,t){e&&t&&mn(e,t)}const je=G(),xn=["title","meta"],Ge=e=>e.tag+(e.name?`.${e.name}"`:""),vn=e=>{if(!d.context){const s=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(s,i=>i.parentNode.removeChild(i))}const t=new Map;function n(s){if(s.ref)return s.ref;let i=document.querySelector(`[data-sm="${s.id}"]`);return i?(i.tagName.toLowerCase()!==s.tag&&(i.parentNode&&i.parentNode.removeChild(i),i=document.createElement(s.tag)),i.removeAttribute("data-sm")):i=document.createElement(s.tag),i}const r={addClientTag:s=>{let i=Ge(s);if(xn.indexOf(s.tag)!==-1){t.has(i)||t.set(i,[]);let o=t.get(i),u=o.length;o=[...o,s],t.set(i,o);{let c=n(s);s.ref=c,ee(c,s.props);let a=null;for(var l=u-1;l>=0;l--)if(o[l]!=null){a=o[l];break}c.parentNode!=document.head&&document.head.appendChild(c),a&&a.ref&&document.head.removeChild(a.ref)}return u}{let o=n(s);s.ref=o,ee(o,s.props),o.parentNode!=document.head&&document.head.appendChild(o)}return-1},removeClientTag:(s,i)=>{const l=Ge(s);if(s.ref){const o=t.get(l);if(o){if(s.ref.parentNode){s.ref.parentNode.removeChild(s.ref);for(let u=i-1;u>=0;u--)o[u]!=null&&document.head.appendChild(o[u].ref)}o[i]=null,t.set(l,o)}else s.ref.parentNode&&s.ref.parentNode.removeChild(s.ref)}}};return p(je.Provider,{value:r,get children(){return e.children}})},bt=(e,t)=>{const n=zt();if(!W(je))throw new Error("<MetaProvider /> should be in the tree");return Sn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function Sn(e){const{addClientTag:t,removeClientTag:n,addServerTag:r}=W(je);q(()=>{{let s=t(e);J(()=>n(e,s))}})}const En=e=>bt("title",e),Qe=e=>bt("meta",e);function Pn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function An([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function Cn(e){try{return document.querySelector(e)}catch{return null}}function $n(e,t){const n=Cn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function On(e,t,n,r){let s=!1;const i=o=>typeof o=="string"?{value:o}:o,l=An(T(i(e()),{equals:(o,u)=>o.value===u.value}),void 0,o=>(!s&&t(o),o));return n&&J(n((o=e())=>{s=!0,l[1](i(o)),s=!1})),{signal:l,utils:r}}function kn(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:T({value:""})};return e}function Tn(){return On(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),$n(window.location.hash.slice(1),n)},e=>Pn(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Ln(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const l={to:s,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:u=>{u&&(n=!0),o.navigate(s,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const Nn=/^(?:[a-z0-9]+:)?\/\//i,Rn=/^\/+|(\/)\/+$/g;function X(e,t=!1){const n=e.replace(Rn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function de(e,t,n){if(Nn.test(t))return;const r=X(e),s=n&&X(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+X(t,!i)}function _n(e,t){if(e==null)throw new Error(t);return e}function xt(e,t){return X(e).replace(/\/*(\*.*)?$/g,"")+X(t)}function Mn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function jn(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),l=i.length;return o=>{const u=o.split("/").filter(Boolean),c=u.length-l;if(c<0||c>0&&s===void 0&&!t)return null;const a={path:l?"":"/",params:{}},g=y=>n===void 0?void 0:n[y];for(let y=0;y<l;y++){const b=i[y],S=u[y],x=b[0]===":",O=x?b.slice(1):b;if(x&&Oe(S,g(O)))a.params[O]=S;else if(x||!Oe(S,b))return null;a.path+=`/${S}`}if(s){const y=c?u.slice(-c).join("/"):"";if(Oe(y,g(s)))a.params[s]=y;else return null}return a}}function Oe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Hn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function vt(e){const t=new Map,n=st();return new Proxy({},{get(r,s){return t.has(s)||Ht(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function St(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return St(r).reduce((i,l)=>[...i,...s.map(o=>o+l)],[])}const qn=100,Et=G(),Se=G(),Ee=()=>_n(W(Et),"Make sure your app is wrapped in a <Router />");let ue;const He=()=>ue||W(Se)||Ee().base,In=e=>{const t=He();return P(()=>t.resolvePath(e()))},Vn=e=>{const t=Ee();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Bn=()=>Ee().location;function Fn(e,t="",n){const{component:r,data:s,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:r?()=>p(r,{}):()=>{const{element:u}=e;return u===void 0&&n?p(n,{}):u},preload:e.component?r.preload:e.preload,data:s};return Pt(e.path).reduce((u,c)=>{for(const a of St(c)){const g=xt(t,a),y=l?g:g.split("/*",1)[0];u.push({...o,originalPath:a,pattern:y,matcher:jn(y,!l,e.matchFilters)})}return u},[])}function Un(e,t=0){return{routes:e,score:Hn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],l=i.matcher(n);if(!l)return null;r.unshift({...l,route:i})}return r}}}function Pt(e){return Array.isArray(e)?e:[e]}function At(e,t="",n,r=[],s=[]){const i=Pt(e);for(let l=0,o=i.length;l<o;l++){const u=i[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=Fn(u,t,n);for(const a of c){r.push(a);const g=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!g)At(u.children,a.pattern,n,r,s);else{const y=Un([...r],s.length);s.push(y)}r.pop()}}}return r.length?s:s.sort((l,o)=>o.score-l.score)}function Dn(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Kn(e,t){const n=new URL("http://sar"),r=P(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),s=P(()=>r().pathname),i=P(()=>r().search,!0),l=P(()=>r().hash),o=P(()=>"");return{get pathname(){return s()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:vt(rt(i,()=>Mn(r())))}}function Wn(e,t="",n,r){const{signal:[s,i],utils:l={}}=kn(e),o=l.parsePath||(E=>E),u=l.renderPath||(E=>E),c=l.beforeLeave||Ln(),a=de("",t),g=void 0;if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!s().value&&i({value:a,replace:!0,scroll:!1});const[y,b]=T(!1),S=async E=>{b(!0);try{await qt(E)}finally{b(!1)}},[x,O]=T(s().value),[L,R]=T(s().state),I=Kn(x,L),V=[],H={pattern:a,params:{},path:()=>a,outlet:()=>null,resolvePath(E){return de(a,E)}};if(n)try{ue=H,H.data=n({data:void 0,params:{},location:I,navigate:re(H)})}finally{ue=void 0}function z(E,h,w){N(()=>{if(typeof h=="number"){h&&(l.go?c.confirm(h,w)&&l.go(h):console.warn("Router integration does not support relative routing"));return}const{replace:A,resolve:j,scroll:B,state:ie}={replace:!1,resolve:!0,scroll:!0,...w},F=j?E.resolvePath(h):de("",h);if(F===void 0)throw new Error(`Path '${h}' is not a routable path`);if(V.length>=qn)throw new Error("Too many redirects");const oe=x();if((F!==oe||ie!==L())&&!ae){if(c.confirm(F,w)){const Nt=V.push({value:oe,replace:A,scroll:B,state:L()});S(()=>{O(F),R(ie),dt()}).then(()=>{V.length===Nt&&se({value:F,state:ie})})}}})}function re(E){return E=E||W(Se)||H,(h,w)=>z(E,h,w)}function se(E){const h=V[0];h&&((E.value!==h.value||E.state!==h.state)&&i({...E,replace:h.replace,scroll:h.scroll}),V.length=0)}q(()=>{const{value:E,state:h}=s();N(()=>{E!==x()&&S(()=>{O(E),R(h)})})});{let E=function(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const w=h.composedPath().find(oe=>oe instanceof Node&&oe.nodeName.toUpperCase()==="A");if(!w||!w.hasAttribute("link"))return;const A=w.href;if(w.target||!A&&!w.hasAttribute("state"))return;const j=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||j&&j.includes("external"))return;const B=new URL(A);if(B.origin!==window.location.origin||a&&B.pathname&&!B.pathname.toLowerCase().startsWith(a.toLowerCase()))return;const ie=o(B.pathname+B.search+B.hash),F=w.getAttribute("state");h.preventDefault(),z(H,ie,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:F&&JSON.parse(F)})};Me(["click"]),document.addEventListener("click",E),J(()=>document.removeEventListener("click",E))}return{base:H,out:g,location:I,isRouting:y,renderPath:u,parsePath:o,navigatorFactory:re,beforeLeave:c}}function zn(e,t,n,r,s){const{base:i,location:l,navigatorFactory:o}=e,{pattern:u,element:c,preload:a,data:g}=r().route,y=P(()=>r().path);a&&a();const b={parent:t,pattern:u,get child(){return n()},path:y,params:s,data:t.data,outlet:c,resolvePath(S){return de(i.path(),S,y())}};if(g)try{ue=b,b.data=g({data:t.data,params:s,location:l,navigate:o(b)})}finally{ue=void 0}return b}const Xn=ht("<a link></a>",2),Yn=e=>{const{source:t,url:n,base:r,data:s,out:i}=e,l=t||Tn(),o=Wn(l,r,s);return p(Et.Provider,{value:o,get children(){return e.children}})},Jn=e=>{const t=Ee(),n=He(),r=Ne(()=>e.children),s=P(()=>At(r(),xt(n.pattern,e.base||""),Gn)),i=P(()=>Dn(s(),t.location.pathname)),l=vt(()=>{const a=i(),g={};for(let y=0;y<a.length;y++)Object.assign(g,a[y].params);return g});t.out&&t.out.matches.push(i().map(({route:a,path:g,params:y})=>({originalPath:a.originalPath,pattern:a.pattern,path:g,params:y})));const o=[];let u;const c=P(rt(i,(a,g,y)=>{let b=g&&a.length===g.length;const S=[];for(let x=0,O=a.length;x<O;x++){const L=g&&g[x],R=a[x];y&&L&&R.route.key===L.route.key?S[x]=y[x]:(b=!1,o[x]&&o[x](),xe(I=>{o[x]=I,S[x]=zn(t,S[x-1]||n,()=>c()[x+1],()=>i()[x],l)}))}return o.splice(a.length).forEach(x=>x()),y&&b?y:(u=S[0],S)}));return p(_e,{get when(){return c()&&u},keyed:!0,children:a=>p(Se.Provider,{value:a,get children(){return a.outlet()}})})},Gn=()=>{const e=He();return p(_e,{get when(){return e.child},keyed:!0,children:t=>p(Se.Provider,{value:t,get children(){return t.outlet()}})})};function Qn(e){e=Ue({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Kt(e,["href","state","class","activeClass","inactiveClass","end"]),n=In(()=>e.href),r=Vn(n),s=Bn(),i=P(()=>{const l=n();if(l===void 0)return!1;const o=X(l.split(/[?#]/,1)[0]).toLowerCase(),u=X(s.pathname).toLowerCase();return e.end?o===u:u.startsWith(o)});return(()=>{const l=mt(Xn);return ee(l,Ue(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),pt(),l})()}var Ct=G(),$t="s:id",Ot="s\\:id",we=new Set,le=new Map;document.head.querySelectorAll(`style[${Ot}]`).forEach(e=>{we.add(e.getAttribute($t))});function kt(e,t){var n;if(!we.has(e)&&(we.add(e),!ae)){let r=document.createElement("style");r.setAttribute($t,e),r.innerHTML=t,document.head.appendChild(r)}le.set(e,((n=le.get(e))!=null?n:0)+1)}function Tt(e){var t;let n=(t=le.get(e))!=null?t:0;if(n>1)le.set(e,n-1);else{if(le.set(e,0),!ae){let r=document.head.querySelector(`style[${Ot}="${e}"]`);r&&document.head.removeChild(r)}we.delete(e)}}function Zn(e){let t=new Set;function n(r,s){t.has(r)||t.add(r),kt(r,s)}return p(Ct.Provider,{value:{insert:n,remove:Tt},get children(){return e.children}})}function er(e,t,n){var r;let s=`${e}-${t}`,i=(r=W(Ct))!=null?r:{insert:kt,remove:Tt};i.insert(s,n),J(()=>i.remove(s))}function tr(e){let t,n;return J(()=>{n&&n()}),()=>(t||(t=xe(r=>(n=r,P(e)))),t())}function nr(){let e=[],t=tr(()=>{let n={};for(let r=0,s=e.length;r<s;r+=1)n=Object.assign(n,e[r]());return n});return n=>{if(n){e.push(n);return}return t()}}const rr=[{component:Ce(()=>$e(()=>import("./_...404_-459eb703.js"),[])),path:"/*404"},{component:Ce(()=>$e(()=>import("./index-799db8b6.js"),[])),path:"/"},{component:Ce(()=>$e(()=>import("./index-1cef8aa8.js"),[])),path:"/profile/"}],sr=()=>rr,Lt=G({}),Ze=Qn,ir=Jn,or="$FETCH",lr=ht('<div><div><p id="error-message"></p><button id="reset-errors">Clear errors and retry</button><pre></pre></div></div>',10);function ur(e){return p(Xt,{fallback:(t,n)=>p(_e,{get when(){return!e.fallback},get fallback(){return P(()=>!!e.fallback)()&&e.fallback(t,n)},get children(){return p(cr,{error:t})}}),get children(){return e.children}})}function cr(e){return Mt(()=>console.error(e.error)),(()=>{const t=mt(lr),n=t.firstChild,r=n.firstChild,s=r.nextSibling,i=s.nextSibling;return t.style.setProperty("padding","16px"),n.style.setProperty("background-color","rgba(252, 165, 165)"),n.style.setProperty("color","rgb(153, 27, 27)"),n.style.setProperty("border-radius","5px"),n.style.setProperty("overflow","scroll"),n.style.setProperty("padding","16px"),n.style.setProperty("margin-bottom","8px"),r.style.setProperty("font-weight","bold"),pe(r,()=>e.error.message),yt(s,"click",dt,!0),s.style.setProperty("color","rgba(252, 165, 165)"),s.style.setProperty("background-color","rgb(153, 27, 27)"),s.style.setProperty("border-radius","5px"),s.style.setProperty("padding","4px 8px"),i.style.setProperty("margin-top","8px"),i.style.setProperty("width","100%"),pe(i,()=>e.error.stack),pt(),t})()}Me(["click"]);const ar=!1,fr=!1;function dr(){return W(Lt),[p(yn,{}),fr,p(gn,{get children(){return ae}}),ar]}function hr(e){return ee(document.documentElement,e,!1,!0),e.children}function gr(e){return ee(document.head,e,!1,!0),e.children}function yr(e){{let t=Ne(()=>e.children);return ee(document.body,e,!1,!0),pe(document.body,()=>{let n=t();if(n){if(Array.isArray(n)){let r=n.filter(s=>!!s);return r.length?r:null}return n}return null},null,[...document.body.childNodes]),document.body}}const mr="c-cff7403b-0",pr='body{font-family:Gordita,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif}a{margin-right:1rem}main{text-align:center;padding:1em;margin:0 auto}h1{color:#335d92;text-transform:uppercase;font-size:4rem;font-weight:100;line-height:1.1;margin:4rem auto;max-width:14rem}p{max-width:14rem;margin:2rem auto;line-height:1.35}@media (min-width:480px){h1{max-width:none}p{max-width:none}}';function wr(){return nr(),er(mr,1,pr),null}function br(){return p(Zn,{styles:[],get children(){return p(hr,{lang:"en",get children(){return[p(gr,{get children(){return[p(En,{children:"SolidStart - Bare"}),p(Qe,{charset:"utf-8"}),p(Qe,{name:"viewport",content:"width=device-width, initial-scale=1"})]}}),p(yr,{get children(){return[p(wr,{}),p(Jt,{get children(){return p(ur,{get children(){return[p(Ze,{href:"/",children:"Index"}),p(Ze,{href:"/about",children:"About"}),p(ir,{get children(){return p(sr,{})}})]}})}}),p(dr,{})]}})]}})}})}const et=Object.values(Object.assign({}))[0],xr=et?et.default:void 0,vr=()=>{let e={get request(){},get clientAddress(){},get locals(){},get prevUrl(){},get responseHeaders(){},get tags(){},get env(){},get routerContext(){},setStatusCode(n){},getStatusCode(){},$type:or,fetch};function t(n){return p(Yn,n)}return p(Lt.Provider,{value:e,get children(){return p(vn,{get children(){return p(t,{get base(){return"/solid-demo/"},data:xr,get children(){return p(br,{})}})}})}})};bn(()=>p(vr,{}),document);export{er as M,nr as P,Lt as S,En as T,Er as a,T as b,p as c,q as d,Me as e,mt as g,pe as i,J as o,pt as r,cn as s,ht as t,W as u};