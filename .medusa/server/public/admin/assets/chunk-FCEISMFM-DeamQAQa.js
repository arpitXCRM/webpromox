import{I as De}from"./chunk-PYIO3TDQ-D8Zv8hXV.js";import{g as T}from"./chunk-FSMQADBD-Dkr3W4bN.js";import{D as Ve,I as ie,u as de,b as ze,d as $e,e as Fe,a as ue}from"./chunk-ZF4OL2GU-D0AAJTO2.js";import{c as qe}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{r as h,a5 as f,bu as M,bm as Ke,eP as pe,aD as w,j as t,bo as me,bn as Ge,br as He,bq as fe,bs as Be,b0 as Ue,b1 as We,b2 as Xe,b as $,cF as Ye,a8 as Ze,a9 as Je,y as Qe,w as _,H as et,T as F,B as W,m as he,I as J,aY as tt,D as k,W as nt,X as ot,v as z,V as st,b5 as it,z as X,Y as I,C as rt}from"./index-CFtujj79.js";import{c as at,u as lt}from"./chunk-BNLHRJ2A-Co-1HirV.js";import{c as P}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K as ct}from"./chunk-6HTZNHPT-Dfyov_Ig.js";import{S as R}from"./chunk-6DAFMWMA-BalkPqgC.js";import{f as ee,C as dt}from"./index.esm-8frOO4zw.js";import{X as ut}from"./x-mark-mini-VqhvSkw8.js";import{T as Y}from"./Trans-CdoBTqu8.js";import{C as D}from"./currency-input-CMc8MZ_4.js";var pt=Object.defineProperty,q=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,re=(e,o,n)=>o in e?pt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,mt=(e,o)=>{for(var n in o)ge.call(o,n)&&re(e,n,o[n]);if(q)for(var n of q(o))xe.call(o,n)&&re(e,n,o[n]);return e},ft=(e,o)=>{var n={};for(var s in e)ge.call(e,s)&&o.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&q)for(var s of q(e))o.indexOf(s)<0&&xe.call(e,s)&&(n[s]=e[s]);return n};const ve=h.forwardRef((e,o)=>{var n=e,{color:s="currentColor"}=n,i=ft(n,["color"]);return h.createElement("svg",mt({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:o},i),h.createElement("path",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.056 1.944h4v4M13.056 1.944l-4 4M1.944 9.056v4h4M1.944 13.056l4-4"}))});ve.displayName="ArrowsPointingOut";var ht=Object.defineProperty,K=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,ae=(e,o,n)=>o in e?ht(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,gt=(e,o)=>{for(var n in o)be.call(o,n)&&ae(e,n,o[n]);if(K)for(var n of K(o))je.call(o,n)&&ae(e,n,o[n]);return e},xt=(e,o)=>{var n={};for(var s in e)be.call(e,s)&&o.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&K)for(var s of K(e))o.indexOf(s)<0&&je.call(e,s)&&(n[s]=e[s]);return n};const Ce=h.forwardRef((e,o)=>{var n=e,{color:s="currentColor"}=n,i=xt(n,["color"]);return h.createElement("svg",gt({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:o},i),h.createElement("path",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89M8.167 5.5h2.666M4.167 5.5h1.777M5.944 3.944v3.111M9.056 9.5h1.777M4.167 9.5h2.666M9.056 7.944v3.111"}))});Ce.displayName="CircleSliders";var vt=(e,o,n)=>({attribute:e,operator:o,value:P(n)}),ln=e=>[{value:e.gte,operator:"gte"},{value:e.lte,operator:"lte"},{value:e.gt,operator:"gt"},{value:e.lt,operator:"lt"},{value:e.eq,operator:"eq"}].filter(({value:s})=>s).map(({operator:s,value:i})=>vt(De,s,i)),ye=f.object({amount:f.union([f.string(),f.number()]),gte:f.union([f.string(),f.number()]).nullish(),lte:f.union([f.string(),f.number()]).nullish(),lt:f.number().nullish(),gt:f.number().nullish(),eq:f.number().nullish()}).refine(e=>e.amount!=="",{message:M("stockLocations.shippingOptions.conditionalPrices.errors.amountRequired"),path:["amount"]}).refine(e=>e.eq!==void 0||e.lt!==void 0||e.gt!==void 0?!0:e.gte!==void 0&&e.gte!==""||e.lte!==void 0&&e.lte!=="",{message:M("stockLocations.shippingOptions.conditionalPrices.errors.minOrMaxRequired"),path:["gte"]}).refine(e=>{if(e.gte!=null&&e.gte!==""&&e.lte!=null&&e.lte!==""){const o=P(e.gte),n=P(e.lte);return o<=n}return!0},{message:M("stockLocations.shippingOptions.conditionalPrices.errors.minGreaterThanMax"),path:["gte"]}),bt=ye.and(f.object({id:f.string().optional()}));function _e(e,o){const n=e.prices;for(let s=0;s<n.length;s++)for(let i=s+1;i<n.length;i++){const a=n[s],r=n[i];if(a.amount===""||r.amount==="")continue;const l=P(a.amount),c=P(r.amount);l===c&&yt(o,i),[{value:a.gte,type:"gte"},{value:a.lte,type:"lte"},{value:a.eq,type:"eq"},{value:a.lt,type:"lt"},{value:a.gt,type:"gt"}].forEach(p=>{if(!p.value&&p.value!==0)return;[{value:r.gte,type:"gte"},{value:r.lte,type:"lte"},{value:r.eq,type:"eq"},{value:r.lt,type:"lt"},{value:r.gt,type:"gt"}].forEach(m=>{if(!m.value&&m.value!==0)return;const g=P(p.value),x=P(m.value);g===x&&_t(o,i,m.type)})})}}var jt=f.object({prices:f.array(ye)}).superRefine(_e),Ct=f.object({prices:f.array(bt)}).superRefine(_e),yt=(e,o)=>{e.addIssue({code:f.ZodIssueCode.custom,message:M("stockLocations.shippingOptions.conditionalPrices.errors.duplicateAmount"),path:["prices",o,"amount"]})},_t=(e,o,n)=>{e.addIssue({code:f.ZodIssueCode.custom,message:M("stockLocations.shippingOptions.conditionalPrices.errors.overlappingConditions"),path:["prices",o,n]})},we=h.createContext(null),cn=({children:e,onOpenConditionalPricesModal:o,onCloseConditionalPricesModal:n})=>t.jsx(we.Provider,{value:{onOpenConditionalPricesModal:o,onCloseConditionalPricesModal:n},children:e}),Pe=()=>{const e=h.useContext(we);if(!e)throw new Error("useShippingOptionPrice must be used within a ShippingOptionPriceProvider");return e},N="Accordion",wt=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[te,Pt,Nt]=at(N),[H,dn]=Ke(N,[Nt,pe]),ne=pe(),Ne=w.forwardRef((e,o)=>{const{type:n,...s}=e,i=s,a=s;return t.jsx(te.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?t.jsx(Rt,{...a,ref:o}):t.jsx(It,{...i,ref:o})})});Ne.displayName=N;var[Oe,Ot]=H(N),[Ae,At]=H(N,{collapsible:!1}),It=w.forwardRef((e,o)=>{const{value:n,defaultValue:s,onValueChange:i=()=>{},collapsible:a=!1,...r}=e,[l,c]=me({prop:n,defaultProp:s,onChange:i});return t.jsx(Oe,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:c,onItemClose:w.useCallback(()=>a&&c(""),[a,c]),children:t.jsx(Ae,{scope:e.__scopeAccordion,collapsible:a,children:t.jsx(Ie,{...r,ref:o})})})}),Rt=w.forwardRef((e,o)=>{const{value:n,defaultValue:s,onValueChange:i=()=>{},...a}=e,[r=[],l]=me({prop:n,defaultProp:s,onChange:i}),c=w.useCallback(p=>l((u=[])=>[...u,p]),[l]),d=w.useCallback(p=>l((u=[])=>u.filter(m=>m!==p)),[l]);return t.jsx(Oe,{scope:e.__scopeAccordion,value:r,onItemOpen:c,onItemClose:d,children:t.jsx(Ae,{scope:e.__scopeAccordion,collapsible:!0,children:t.jsx(Ie,{...a,ref:o})})})}),[St,B]=H(N),Ie=w.forwardRef((e,o)=>{const{__scopeAccordion:n,disabled:s,dir:i,orientation:a="vertical",...r}=e,l=w.useRef(null),c=Ge(l,o),d=Pt(n),u=lt(i)==="ltr",m=He(e.onKeyDown,g=>{var E;if(!wt.includes(g.key))return;const x=g.target,j=d().filter(L=>{var se;return!((se=L.ref.current)!=null&&se.disabled)}),y=j.findIndex(L=>L.ref.current===x),S=j.length;if(y===-1)return;g.preventDefault();let C=y;const v=0,O=S-1,b=()=>{C=y+1,C>O&&(C=v)},A=()=>{C=y-1,C<v&&(C=O)};switch(g.key){case"Home":C=v;break;case"End":C=O;break;case"ArrowRight":a==="horizontal"&&(u?b():A());break;case"ArrowDown":a==="vertical"&&b();break;case"ArrowLeft":a==="horizontal"&&(u?A():b());break;case"ArrowUp":a==="vertical"&&A();break}const U=C%S;(E=j[U].ref.current)==null||E.focus()});return t.jsx(St,{scope:n,disabled:s,direction:i,orientation:a,children:t.jsx(te.Slot,{scope:n,children:t.jsx(fe.div,{...r,"data-orientation":a,ref:c,onKeyDown:s?void 0:m})})})}),G="AccordionItem",[kt,oe]=H(G),Re=w.forwardRef((e,o)=>{const{__scopeAccordion:n,value:s,...i}=e,a=B(G,n),r=Ot(G,n),l=ne(n),c=Be(),d=s&&r.value.includes(s)||!1,p=a.disabled||e.disabled;return t.jsx(kt,{scope:n,open:d,disabled:p,triggerId:c,children:t.jsx(Ue,{"data-orientation":a.orientation,"data-state":Te(d),...l,...i,ref:o,disabled:p,open:d,onOpenChange:u=>{u?r.onItemOpen(s):r.onItemClose(s)}})})});Re.displayName=G;var Se="AccordionHeader",Et=w.forwardRef((e,o)=>{const{__scopeAccordion:n,...s}=e,i=B(N,n),a=oe(Se,n);return t.jsx(fe.h3,{"data-orientation":i.orientation,"data-state":Te(a.open),"data-disabled":a.disabled?"":void 0,...s,ref:o})});Et.displayName=Se;var Q="AccordionTrigger",ke=w.forwardRef((e,o)=>{const{__scopeAccordion:n,...s}=e,i=B(N,n),a=oe(Q,n),r=At(Q,n),l=ne(n);return t.jsx(te.ItemSlot,{scope:n,children:t.jsx(We,{"aria-disabled":a.open&&!r.collapsible||void 0,"data-orientation":i.orientation,id:a.triggerId,...l,...s,ref:o})})});ke.displayName=Q;var Ee="AccordionContent",Le=w.forwardRef((e,o)=>{const{__scopeAccordion:n,...s}=e,i=B(N,n),a=oe(Ee,n),r=ne(n);return t.jsx(Xe,{role:"region","aria-labelledby":a.triggerId,"data-orientation":i.orientation,...r,...s,ref:o,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});Le.displayName=Ee;function Te(e){return e?"open":"closed"}var Lt=Ne,Tt=Re,Mt=ke,Dt=Le,Me=(e,o)=>{const n=o==="region"?"region_prices":"currency_prices",s=o==="region"?"conditional_region_prices":"conditional_currency_prices";return e.replace(n,s)},Vt="rule-item",V=e=>`${Vt}-${e}`,un=({info:e,variant:o})=>{const{t:n}=$(),{getValues:s,setValue:i}=Ye(),{onCloseConditionalPricesModal:a}=Pe(),[r,l]=h.useState([V(0)]),{field:c,type:d,currency:p,name:u}=e,m=Me(c,d),g=Ze({defaultValues:{prices:s(m)||[{amount:"",gte:"",lte:null}]},resolver:Je(o==="create"?jt:Ct)}),{fields:x,append:j,remove:y}=Qe({control:g.control,name:"prices"}),S=()=>{j({amount:"",gte:"",lte:null}),l([...r,V(x.length)])},C=b=>{y(b)},v=g.handleSubmit(b=>{i(m,b.prices,{shouldDirty:!0,shouldValidate:!0,shouldTouch:!0}),a()},b=>{const A=Object.keys(b.prices||{});l(U=>{const E=new Set(U);return A.forEach(L=>{E.add(V(Number(L)))}),Array.from(E)})}),O=b=>{b.key==="Enter"&&(b.metaKey||b.ctrlKey)&&(console.log("Fired"),b.preventDefault(),b.stopPropagation(),v())};return t.jsx(_,{...g,children:t.jsx(ct,{onSubmit:v,onKeyDown:O,className:"flex h-full flex-col",children:t.jsxs(R.Content,{children:[t.jsx(R.Header,{}),t.jsx(R.Body,{className:"size-full overflow-hidden",children:t.jsx("div",{className:"flex size-full flex-1 flex-col items-center overflow-y-auto",children:t.jsx("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-6 py-16",children:t.jsxs("div",{className:"flex w-full flex-col gap-y-6",children:[t.jsxs("div",{children:[t.jsx(R.Title,{asChild:!0,children:t.jsx(et,{children:n("stockLocations.shippingOptions.conditionalPrices.header",{name:u})})}),t.jsx(R.Description,{asChild:!0,children:t.jsx(F,{size:"small",className:"text-ui-fg-subtle",children:n("stockLocations.shippingOptions.conditionalPrices.description")})})]}),t.jsx(zt,{value:r,onValueChange:l,children:x.map((b,A)=>t.jsx($t,{index:A,onRemove:C,currency:p,control:g.control},b.id))}),t.jsx("div",{className:"flex items-center justify-end",children:t.jsx(W,{variant:"secondary",size:"small",type:"button",onClick:S,children:n("stockLocations.shippingOptions.conditionalPrices.actions.addPrice")})})]})})})}),t.jsx(R.Footer,{children:t.jsxs("div",{className:"flex items-center justify-end gap-2",children:[t.jsx(R.Close,{asChild:!0,children:t.jsx(W,{variant:"secondary",size:"small",type:"button",children:n("actions.cancel")})}),t.jsx(W,{size:"small",type:"button",onClick:v,children:n("actions.save")})]})})]})})})},zt=({children:e,value:o,onValueChange:n})=>t.jsx(Lt,{type:"multiple",defaultValue:[V(0)],value:o,onValueChange:n,className:"flex flex-col gap-y-3",children:e}),$t=({index:e,currency:o,onRemove:n,control:s})=>{const{t:i}=$(),a=r=>{r.stopPropagation(),n(e)};return t.jsxs(Tt,{value:V(e),className:he("bg-ui-bg-component shadow-elevation-card-rest rounded-lg"),children:[t.jsx(Mt,{asChild:!0,children:t.jsxs("div",{className:"group/trigger flex w-full cursor-pointer items-start justify-between gap-x-2 p-3",children:[t.jsxs("div",{className:"flex flex-1 flex-wrap items-center justify-between gap-2",children:[t.jsx("div",{className:"flex h-7 items-center",children:t.jsx(qt,{index:e,currency:o,control:s})}),t.jsx("div",{className:"flex min-h-7 items-center",children:t.jsx(Kt,{index:e,currency:o,control:s})})]}),t.jsxs("div",{className:"flex items-center gap-x-2",children:[t.jsx(J,{size:"small",variant:"transparent",className:"text-ui-fg-muted hover:text-ui-fg-subtle focus-visible:text-ui-fg-subtle",onClick:a,children:t.jsx(ut,{})}),t.jsx(J,{size:"small",variant:"transparent",className:"text-ui-fg-muted hover:text-ui-fg-subtle focus-visible:text-ui-fg-subtle",children:t.jsx(tt,{className:"transition-transform group-data-[state=open]/trigger:rotate-180"})})]})]})}),t.jsxs(Dt,{className:"text-ui-fg-subtle",children:[t.jsx(k,{variant:"dashed"}),t.jsx(_.Field,{control:s,name:`prices.${e}.amount`,render:({field:{value:r,onChange:l,...c}})=>t.jsx(_.Item,{children:t.jsxs("div",{className:"grid grid-cols-2 items-start gap-x-2 p-3",children:[t.jsx("div",{className:"flex h-8 items-center",children:t.jsx(_.Label,{children:i("stockLocations.shippingOptions.conditionalPrices.rules.amount")})}),t.jsxs("div",{className:"flex flex-col gap-y-1",children:[t.jsx(_.Control,{children:t.jsx(D,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover focus-visible:bg-ui-bg-field-component-hover",placeholder:ee({value:"0",decimalScale:o.decimal_digits}),decimalScale:o.decimal_digits,symbol:o.symbol_native,code:o.code,value:r,onValueChange:(d,p,u)=>l(u!=null&&u.value?u==null?void 0:u.value:""),autoFocus:!0,...c})}),t.jsx(_.ErrorMessage,{})]})]})})}),t.jsx(k,{variant:"dashed"}),t.jsx(_.Field,{control:s,name:`prices.${e}.gte`,render:({field:r})=>t.jsx(le,{field:r,label:i("stockLocations.shippingOptions.conditionalPrices.rules.gte"),currency:o,placeholder:"1000"})}),t.jsx(k,{variant:"dashed"}),t.jsx(_.Field,{control:s,name:`prices.${e}.lte`,render:({field:r})=>t.jsx(le,{field:r,label:i("stockLocations.shippingOptions.conditionalPrices.rules.lte"),currency:o,placeholder:"1000"})}),t.jsx(Ft,{index:e,control:s,currency:o})]})]})},le=({field:e,label:o,currency:n,placeholder:s})=>{const i=h.useRef(null),{value:a,onChange:r,ref:l,...c}=e,d=de(i,l),p=()=>{if(a===null){r(""),requestAnimationFrame(()=>{var m;(m=i.current)==null||m.focus()});return}r(null)},u=a===null;return t.jsx(_.Item,{children:t.jsxs("div",{className:"grid grid-cols-2 items-start gap-x-2 p-3",children:[t.jsxs("div",{className:"flex h-8 items-center gap-x-1",children:[t.jsx(J,{size:"2xsmall",variant:"transparent",onClick:p,children:u?t.jsx(nt,{}):t.jsx(ot,{})}),t.jsx(_.Label,{children:o})]}),!u&&t.jsxs("div",{className:"flex flex-col gap-y-1",children:[t.jsx(_.Control,{children:t.jsx(D,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover focus-visible:bg-ui-bg-field-component-hover",placeholder:ee({value:s,decimalScale:n.decimal_digits}),decimalScale:n.decimal_digits,symbol:n.symbol_native,code:n.code,value:a,ref:d,onValueChange:(m,g,x)=>r(x!=null&&x.value?x==null?void 0:x.value:""),...c})}),t.jsx(_.ErrorMessage,{})]})]})})},Ft=({index:e,control:o,currency:n})=>{const{t:s}=$(),i=z({control:o,name:`prices.${e}`});return i.eq==null&&i.gt==null&&i.lt==null?null:t.jsxs("div",{children:[t.jsx(k,{variant:"dashed"}),t.jsxs("div",{className:"flex items-center gap-x-1 px-3 pt-3",children:[t.jsx(F,{size:"small",leading:"compact",weight:"plus",children:s("stockLocations.shippingOptions.conditionalPrices.customRules.label")}),t.jsx(st,{content:s("stockLocations.shippingOptions.conditionalPrices.customRules.tooltip"),children:t.jsx(it,{className:"text-ui-fg-muted"})})]}),t.jsxs("div",{children:[i.eq!=null&&t.jsxs("div",{className:"grid grid-cols-2 items-start gap-x-2 p-3",children:[t.jsx("div",{className:"flex h-8 items-center",children:t.jsx(X,{weight:"plus",size:"small",children:s("stockLocations.shippingOptions.conditionalPrices.customRules.eq")})}),t.jsx(D,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover focus-visible:bg-ui-bg-field-component-hover",symbol:n.symbol_native,code:n.code,value:i.eq,disabled:!0})]}),i.gt!=null&&t.jsxs(h.Fragment,{children:[t.jsx(k,{variant:"dashed"}),t.jsxs("div",{className:"grid grid-cols-2 items-start gap-x-2 p-3",children:[t.jsx("div",{className:"flex h-8 items-center",children:t.jsx(X,{weight:"plus",size:"small",children:s("stockLocations.shippingOptions.conditionalPrices.customRules.gt")})}),t.jsx(D,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover focus-visible:bg-ui-bg-field-component-hover",symbol:n.symbol_native,code:n.code,value:i.gt,disabled:!0})]})]}),i.lt!=null&&t.jsxs(h.Fragment,{children:[t.jsx(k,{variant:"dashed"}),t.jsxs("div",{className:"grid grid-cols-2 items-start gap-x-2 p-3",children:[t.jsx("div",{className:"flex h-8 items-center",children:t.jsx(X,{weight:"plus",size:"small",children:s("stockLocations.shippingOptions.conditionalPrices.customRules.lt")})}),t.jsx(D,{className:"bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover focus-visible:bg-ui-bg-field-component-hover",symbol:n.symbol_native,code:n.code,value:i.lt,disabled:!0})]})]})]})]})},qt=({index:e,currency:o,control:n})=>{const s=z({control:n,name:`prices.${e}.amount`});if(s===""||s===void 0)return t.jsx(F,{size:"small",weight:"plus",children:"-"});const i=P(s);return t.jsx(F,{size:"small",weight:"plus",children:T(i,o.code)})},Z=({children:e})=>t.jsx("div",{className:"text-ui-fg-subtle txt-small flex flex-wrap items-center gap-1.5",children:e}),Kt=({index:e,currency:o,control:n})=>{const{t:s,i18n:i}=$(),a=z({control:n,name:`prices.${e}.gte`}),r=z({control:n,name:`prices.${e}.lte`});return(()=>{const c=a?P(a):void 0,d=r?P(r):void 0;return!c&&!d?null:c&&!d?t.jsx(Z,{children:t.jsx(Y,{i18n:i,i18nKey:"stockLocations.shippingOptions.conditionalPrices.summaries.greaterThan",components:[t.jsx(I,{size:"2xsmall"},"attribute"),t.jsx(I,{size:"2xsmall"},"gte")],values:{attribute:s("stockLocations.shippingOptions.conditionalPrices.attributes.cartItemTotal"),gte:T(c,o.code)}})}):!c&&d?t.jsx(Z,{children:t.jsx(Y,{i18n:i,i18nKey:"stockLocations.shippingOptions.conditionalPrices.summaries.lessThan",components:[t.jsx(I,{size:"2xsmall"},"attribute"),t.jsx(I,{size:"2xsmall"},"lte")],values:{attribute:s("stockLocations.shippingOptions.conditionalPrices.attributes.cartItemTotal"),lte:T(d,o.code)}})}):c&&d?t.jsx(Z,{children:t.jsx(Y,{i18n:i,i18nKey:"stockLocations.shippingOptions.conditionalPrices.summaries.range",components:[t.jsx(I,{size:"2xsmall"},"attribute"),t.jsx(I,{size:"2xsmall"},"gte"),t.jsx(I,{size:"2xsmall"},"lte")],values:{attribute:s("stockLocations.shippingOptions.conditionalPrices.attributes.cartItemTotal"),gte:T(c,o.code),lte:T(d,o.code)}})}):null})()},ce=({context:e,code:o,header:n,type:s})=>{const[i,a]=h.useState(0),r=h.useCallback(j=>{if(j){const y=j.offsetWidth;a(y)}},[]),{field:l,control:c,renderProps:d}=ze({context:e}),p=$e({context:e}),{container:u,input:m}=d,{isAnchor:g}=u,x=qe[o.toUpperCase()];return t.jsx(rt,{control:c,name:l,render:({field:j})=>t.jsx(Fe,{...u,...p,outerComponent:t.jsx(Gt,{header:n,isAnchor:g,field:l,control:c,symbolWidth:i,type:s,currency:x}),children:t.jsx(Ht,{field:j,inputProps:m,currencyInfo:x,onMeasureSymbol:r})})})},Gt=({isAnchor:e,header:o,field:n,control:s,symbolWidth:i,type:a,currency:r})=>{const{onOpenConditionalPricesModal:l}=Pe(),c=h.useRef(null),d=Me(n,a),p=z({control:s,name:d});return h.useEffect(()=>{const u=m=>{var g;e&&(m.metaKey||m.ctrlKey)&&m.key.toLowerCase()==="b"&&(m.preventDefault(),(g=c.current)==null||g.click())};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e]),t.jsxs("div",{className:"absolute inset-y-0 z-[2] flex w-fit items-center justify-center",style:{left:i?`${i+16+4}px`:void 0},children:[(p==null?void 0:p.length)>0&&!e&&t.jsx("div",{className:"flex size-[15px] items-center justify-center group-hover/container:hidden",children:t.jsx(Ce,{className:"text-ui-fg-interactive"})}),t.jsx("button",{ref:c,type:"button",className:he("hover:text-ui-fg-subtle text-ui-fg-muted transition-fg hidden size-[15px] items-center justify-center rounded-md bg-transparent group-hover/container:flex",{flex:e}),onClick:()=>l({type:a,field:n,currency:r,name:o}),children:t.jsx(ve,{})})]})},Ht=({field:e,onMeasureSymbol:o,inputProps:n,currencyInfo:s})=>{const{value:i,onChange:a,onBlur:r,ref:l,...c}=e,{ref:d,onBlur:p,onFocus:u,onChange:m,...g}=n,x=h.useCallback(v=>{const O=typeof v=="number"?v.toString():v||"";return ee({value:O,decimalScale:s.decimal_digits,disableGroupSeparators:!0,decimalSeparator:"."})},[s]),[j,y]=h.useState(i||""),S=(v,O,b)=>{if(!v){y("");return}y(v)};h.useEffect(()=>{let v=i;isNaN(Number(i))||(v=x(v)),y(v)},[i,x]);const C=de(d,l);return t.jsxs("div",{className:"relative flex size-full items-center",children:[t.jsx("span",{className:"txt-compact-small text-ui-fg-muted pointer-events-none absolute left-0 w-fit min-w-4","aria-hidden":!0,ref:o,children:s.symbol_native}),t.jsx(dt,{...c,...g,ref:C,className:"txt-compact-small w-full flex-1 cursor-default appearance-none bg-transparent pl-[60px] text-right outline-none",value:j||void 0,onValueChange:S,formatValueOnBlur:!0,onBlur:()=>{r(),p(),m(j,i)},onFocus:u,decimalScale:s.decimal_digits,decimalsLimit:s.decimal_digits,autoComplete:"off",tabIndex:-1})]})},Bt=ue(),pn=({name:e,currencies:o=[],regions:n=[],pricePreferences:s=[]})=>{const{t:i}=$();return h.useMemo(()=>[Bt.column({id:"name",name:i("fields.name"),disableHiding:!0,header:i("fields.name"),cell:a=>t.jsx(Ve.ReadonlyCell,{context:a,children:e})}),...Ut({currencies:o,regions:n,pricePreferences:s,getFieldName:(a,r)=>{var l;return(l=a.column.id)!=null&&l.startsWith("currency_prices")?`currency_prices.${r}`:`region_prices.${r}`},t:i})],[i,o,n,s,e])},Ut=({currencies:e,regions:o,pricePreferences:n,getFieldName:s,t:i})=>{const a=ue();return[...(e==null?void 0:e.map(r=>{const l=n==null?void 0:n.find(d=>d.attribute==="currency_code"&&d.value===r),c=i("fields.priceTemplate",{regionOrCurrency:r.toUpperCase()});return a.column({id:`currency_prices.${r}`,name:i("fields.priceTemplate",{regionOrCurrency:r.toUpperCase()}),field:d=>s(d,r),type:"number",header:()=>t.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[t.jsx("span",{className:"truncate",title:c,children:c}),t.jsx(ie,{includesTax:l==null?void 0:l.is_tax_inclusive})]}),cell:d=>t.jsx(ce,{type:"currency",header:c,code:r,context:d})})}))??[],...(o==null?void 0:o.map(r=>{const l=n==null?void 0:n.find(d=>d.attribute==="region_id"&&d.value===r.id),c=i("fields.priceTemplate",{regionOrCurrency:r.name});return a.column({id:`region_prices.${r.id}`,name:i("fields.priceTemplate",{regionOrCurrency:r.name}),field:d=>s(d,r.id),type:"number",header:()=>t.jsxs("div",{className:"flex w-full items-center justify-between gap-3",children:[t.jsx("span",{className:"truncate",title:c,children:c}),t.jsx(ie,{includesTax:l==null?void 0:l.is_tax_inclusive})]}),cell:d=>(e==null?void 0:e.find(u=>u===r.currency_code))?t.jsx(ce,{type:"region",header:c,code:r.currency_code,context:d}):null})}))??[]]};export{ye as C,cn as S,bt as U,un as a,ln as b,pn as u};
