import{c as L,u as S,b as I}from"./chunk-O74CTF6Q-CFgv4XPQ.js";import{i as T}from"./chunk-G2J2T2QU-78xaPcP3.js";import{a5 as N,R as O,a6 as w,dR as D,e as F,j as l,b as M,r as $,a8 as k,a9 as z,dV as B,t as x,B as j}from"./index-CFtujj79.js";import{D as U}from"./chunk-ZF4OL2GU-D0AAJTO2.js";import{c as v}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{K}from"./chunk-6HTZNHPT-Dfyov_Ig.js";import{R as h,u as V}from"./chunk-6DAFMWMA-BalkPqgC.js";import"./chunk-MWVM4TYO-bKUcYSnf.js";import"./index.esm-8frOO4zw.js";import"./index-l7_cg-Ku.js";import"./checkbox-B0rq3r8e.js";import"./prompt-BjUldEy3.js";var A=N.object({products:L}),G=({priceList:o,products:m,regions:n,currencies:c,pricePreferences:a})=>{const{t:d}=M(),{handleSuccess:u,setCloseOnEscape:s}=V(),r=$.useRef(H(o,m)),t=k({defaultValues:{products:r.current},resolver:z(A)}),{mutateAsync:e,isPending:f}=B(o.id),i=t.handleSubmit(async p=>{const{products:y}=p,{pricesToDelete:g,pricesToCreate:b,pricesToUpdate:R}=J(y,r.current,n);e({delete:g,update:R,create:b},{onSuccess:()=>{x.success(d("priceLists.products.edit.successToast")),u()},onError:E=>{x.error(E.message)}})}),P=I({currencies:c,regions:n,pricePreferences:a});return l.jsx(h.Form,{form:t,children:l.jsxs(K,{onSubmit:i,className:"flex size-full flex-col",children:[l.jsx(h.Header,{}),l.jsx(h.Body,{className:"flex flex-col overflow-hidden",children:l.jsx(U,{columns:P,data:m,getSubRows:p=>{if(T(p)&&p.variants)return p.variants},state:t,onEditingChange:p=>s(!p)})}),l.jsx(h.Footer,{children:l.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[l.jsx(h.Close,{asChild:!0,children:l.jsx(j,{size:"small",variant:"secondary",children:d("actions.cancel")})}),l.jsx(j,{size:"small",type:"submit",isLoading:f,children:d("actions.save")})]})})]})})};function H(o,m){var a,d;const n={},c=(a=o.prices)==null?void 0:a.reduce((u,s)=>{var e;const r=u[s.variant_id]||{};if(!!((e=s.rules)!=null&&e.region_id)){const f=s.rules.region_id;r.region_prices={...r.region_prices,[f]:{amount:s.amount.toString(),id:s.id}}}else r.currency_prices={...r.currency_prices,[s.currency_code]:{amount:s.amount.toString(),id:s.id}};return u[s.variant_id]=r,u},{});for(const u of m)n[u.id]={variants:((d=u.variants)==null?void 0:d.reduce((s,r)=>{const t=c[r.id]||{};return s[r.id]=t,s},{}))||{}};return n}function _(o,m){const n=[],c=m.reduce((a,d)=>(a[d.id]=d.currency_code,a),{});for(const[a,d]of Object.entries(o||{})){const{variants:u}=d||{};for(const[s,r]of Object.entries(u||{})){const{currency_prices:t,region_prices:e}=r||{};for(const[f,i]of Object.entries(t||{}))(i==null?void 0:i.amount)!==""&&typeof(i==null?void 0:i.amount)<"u"&&n.push({variantId:s,currencyCode:f,amount:v(i.amount),id:i.id});for(const[f,i]of Object.entries(e||{}))(i==null?void 0:i.amount)!==""&&typeof(i==null?void 0:i.amount)<"u"&&n.push({variantId:s,regionId:f,currencyCode:c[f],amount:v(i.amount),id:i.id})}}return n}function C(o){return`${o.variantId}-${o.currencyCode}-${o.regionId||"none"}-${o.id||"none"}`}function q(o,m){const n=[],c=[],a=[],d=o.reduce((r,t)=>(r[C(t)]=t,r),{}),u=m.reduce((r,t)=>(r[C(t)]=t,r),{}),s=new Set([...Object.keys(d),...Object.keys(u)]);for(const r of s){const t=d[r],e=u[r];t&&e&&(isNaN(e.amount)&&e.id&&a.push(e.id),t.amount!==e.amount&&e.id&&n.push({id:e.id,variant_id:e.variantId,currency_code:e.currencyCode,rules:e.regionId?{region_id:e.regionId}:void 0,amount:e.amount})),!t&&e&&c.push({variant_id:e.variantId,currency_code:e.currencyCode,rules:e.regionId?{region_id:e.regionId}:void 0,amount:e.amount}),t&&!e&&t.id&&a.push(t.id)}return{pricesToDelete:a,pricesToCreate:c,pricesToUpdate:n}}function J(o,m,n){const c=_(m,n),a=_(o,n);return q(c,a)}var ce=()=>{const{id:o}=O(),[m]=w(),n=m.get("ids[]"),{price_list:c,isLoading:a,isError:d,error:u}=D(o),s=n==null?void 0:n.split(","),{products:r,isLoading:t,isError:e,error:f}=F({id:s,limit:(s==null?void 0:s.length)||9999,price_list_id:[o],fields:"title,thumbnail,*variants"}),{isReady:i,regions:P,currencies:p,pricePreferences:y}=S(),g=!a&&!!c&&!t&&!!r&&i;if(d)throw u;if(e)throw f;return l.jsxs(h,{children:[l.jsx(h.Title,{asChild:!0,children:l.jsxs("span",{className:"sr-only",children:["Edit Prices for ",c==null?void 0:c.title]})}),l.jsx(h.Description,{className:"sr-only",children:"Update prices for products in the price list"}),g&&l.jsx(G,{priceList:c,products:r,regions:P,currencies:p,pricePreferences:y})]})};export{ce as Component};
