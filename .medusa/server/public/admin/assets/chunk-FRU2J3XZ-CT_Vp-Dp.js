import{u as S}from"./chunk-C76H5USB-YlxSasi5.js";import{T as g}from"./chunk-V3MOBCDF-Fr8ItIPO.js";import{u as _,L as D}from"./chunk-L72F5JVQ-C97j8kkc.js";import{f as C}from"./chunk-3WXBLS2P-MKHj1mOQ.js";import{b as h,j as e,T as m,A as y,fc as M,L as U,B as k,a6 as L,r as T,b0 as A,b1 as I,I as B,aj as G,b2 as q,D as Q,Y as P,V,e as $,b9 as F,b8 as J,dF as K,dQ as Y}from"./index-CFtujj79.js";import{D as H}from"./chunk-YEDAFXMB-DgESuWYo.js";import{D as W}from"./chunk-AOFGTNG6-CcTK5muD.js";import{a as X,N as Z}from"./chunk-WX2SMNCD-CTuT-zLV.js";import{u as ee,g as se,a as ae}from"./index-l7_cg-Ku.js";import{P as O}from"./pencil-square-D_bDKbdu.js";import{T as w}from"./trash-c2lVOAzo.js";import{A as te}from"./arrow-down-right-mini-BN7jP5fR.js";import{S as z}from"./status-badge-D1rYFIuC.js";var Ne=({prefix:s,pageSize:a=20})=>{const t=S(["offset","q","order","created_at","updated_at"],s),{offset:i,q:o,order:l,created_at:r,updated_at:n}=t;return{searchParams:{limit:a,offset:i?Number(i):0,order:l,created_at:r?JSON.parse(r):void 0,updated_at:n?JSON.parse(n):void 0,q:o},raw:t}},Re=({taxRate:s,isSublevelTaxRate:a})=>{const{t}=h();return e.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-[1fr_1fr_auto] items-center gap-4 px-6 py-4",children:[e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx(m,{size:"small",weight:"plus",leading:"compact",children:s.name}),s.code&&e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx(m,{size:"small",leading:"compact",children:"·"}),e.jsx(m,{size:"small",leading:"compact",children:s.code})]})]}),e.jsx(m,{size:"small",leading:"compact",children:C(s.rate)}),e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[a&&e.jsx(z,{color:s.is_combinable?"green":"grey",children:s.is_combinable?t("taxRegions.fields.isCombinable.true"):t("taxRegions.fields.isCombinable.false")}),e.jsx(re,{taxRate:s})]})]})},re=({taxRate:s})=>{const{t:a}=h(),t=_(s);return e.jsx(y,{groups:[{actions:[{label:a("actions.edit"),icon:e.jsx(O,{}),to:`tax-rates/${s.id}/edit`}]},{actions:[{label:a("actions.delete"),icon:e.jsx(w,{}),onClick:t}]}]})},ie=({taxRate:s})=>{const{t:a}=h(),t=_(s);if(s.is_default)return null;const i=s.rules.reduce((r,n)=>(r[n.reference]||(r[n.reference]=[]),r[n.reference].push(n.reference_id),r),{}),o=Object.values(g),l=Object.keys(i).map(r=>o.includes(r)).length;return e.jsxs(A,{children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-3",children:[e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(I,{asChild:!0,children:e.jsx(B,{size:"2xsmall",variant:"transparent",className:"group",children:e.jsx(G,{className:"text-ui-fg-muted transition-transform group-data-[state='open']:rotate-90"})})}),e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx(m,{size:"small",weight:"plus",leading:"compact",children:s.name}),s.code&&e.jsxs("div",{className:"text-ui-fg-subtle flex items-center gap-x-1.5",children:[e.jsx(m,{size:"small",leading:"compact",children:"·"}),e.jsx(m,{size:"small",leading:"compact",children:s.code})]})]})]}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(m,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:a("taxRegions.fields.targets.numberOfTargets",{count:l})}),e.jsx("div",{className:"bg-ui-border-base h-3 w-px"}),e.jsx(z,{color:s.is_combinable?"green":"grey",children:s.is_combinable?a("taxRegions.fields.isCombinable.true"):a("taxRegions.fields.isCombinable.false")}),e.jsx(y,{groups:[{actions:[{label:a("actions.edit"),icon:e.jsx(O,{}),to:`overrides/${s.id}/edit`}]},{actions:[{label:a("actions.delete"),icon:e.jsx(w,{}),onClick:t}]}]})]})]}),e.jsx(q,{children:e.jsxs("div",{className:"bg-ui-bg-subtle",children:[e.jsx(Q,{variant:"dashed"}),e.jsx("div",{className:"px-6 py-3",children:e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx("div",{className:"text-ui-fg-muted flex size-5 items-center justify-center",children:e.jsx(te,{})}),e.jsxs("div",{className:"flex flex-wrap items-center gap-x-1.5 gap-y-2",children:[e.jsx(P,{size:"2xsmall",children:C(s.rate)}),e.jsx(m,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:a("taxRegions.fields.targets.operators.on")}),Object.entries(i).map(([r,n],d)=>e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx(ne,{reference:r,ids:n},r),d<Object.keys(i).length-1&&e.jsx(m,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:a("taxRegions.fields.targets.operators.and")})]},r))]})]})})]})})]})},ne=({reference:s,ids:a})=>e.jsxs("div",{className:"flex items-center gap-x-1.5",children:[e.jsx(le,{reference:s}),e.jsx(oe,{type:s,ids:a})]}),le=({reference:s})=>{const{t:a}=h();let t=null;switch(s){case"product":t=a("taxRegions.fields.targets.tags.product");break;case g.PRODUCT_COLLECTION:t=a("taxRegions.fields.targets.tags.productCollection");break;case g.PRODUCT_TAG:t=a("taxRegions.fields.targets.tags.productTag");break;case"product_type":t=a("taxRegions.fields.targets.tags.productType");break;case g.CUSTOMER_GROUP:t=a("taxRegions.fields.targets.tags.customerGroup");break}return t?e.jsx(P,{size:"2xsmall",children:t}):null},oe=({type:s,ids:a})=>{const{t}=h(),{isPending:i,additional:o,labels:l,isError:r,error:n}=ce(s,a);if(r)throw n;return i?e.jsx("div",{className:"bg-ui-tag-neutral-bg border-ui-tag-neutral-border h-5 w-14 animate-pulse rounded-md"}):e.jsx(V,{content:e.jsxs("ul",{children:[l==null?void 0:l.map((d,u)=>e.jsx("li",{children:d},u)),o>0&&e.jsx("li",{children:t("taxRegions.fields.targets.additionalValues",{count:o})})]}),children:e.jsx(P,{size:"2xsmall",children:t("taxRegions.fields.targets.values",{count:a.length})})})},ce=(s,a)=>{var n,d,u,x,p;const t=$({id:a,limit:10},{enabled:!!a.length&&s==="product"}),i=F({id:a,limit:10},{enabled:!!a.length&&s===g.PRODUCT_TAG}),o=J({id:a,limit:10},{enabled:!!a.length&&s==="product_type"}),l=K({id:a,limit:10},{enabled:!!a.length&&s===g.PRODUCT_COLLECTION}),r=Y({id:a,limit:10},{enabled:!!a.length&&s===g.CUSTOMER_GROUP});switch(s){case"product":return{labels:(n=t.products)==null?void 0:n.map(c=>c.title),isPending:t.isPending,additional:t.products&&t.count?t.count-t.products.length:0,isError:t.isError,error:t.error};case g.PRODUCT_TAG:return{labels:(d=i.product_tags)==null?void 0:d.map(c=>c.value),isPending:i.isPending,additional:i.product_tags&&i.count?i.count-i.product_tags.length:0,isError:i.isError,error:i.error};case"product_type":return{labels:(u=o.product_types)==null?void 0:u.map(c=>c.value),isPending:o.isPending,additional:o.product_types&&o.count?o.count-o.product_types.length:0,isError:o.isError,error:o.error};case g.PRODUCT_COLLECTION:return{labels:(x=l.collections)==null?void 0:x.map(c=>c.title),isPending:l.isPending,additional:l.collections&&l.count?l.count-l.collections.length:0,isError:l.isError,error:l.error};case g.CUSTOMER_GROUP:return{labels:(p=r.customer_groups)==null?void 0:p.map(c=>c.name),isPending:r.isPending,additional:r.customer_groups&&r.count?r.count-r.customer_groups.length:0,isError:r.isError,error:r.error}}},_e=({isPending:s,action:a,count:t=0,table:i,queryObject:o,prefix:l,children:r})=>{if(s)return e.jsxs("div",{className:"flex flex-col divide-y",children:[Array.from({length:3}).map((c,j)=>e.jsx("div",{className:"bg-ui-bg-field-component h-[52px] w-full animate-pulse"},j)),e.jsx(M,{layout:"fit"})]});const n=Object.values(o).filter(c=>!!c).length===0,d=!s&&t===0&&!n,u=!s&&t===0&&n,{pageIndex:x,pageSize:p}=i.getState().pagination;return e.jsxs("div",{className:"flex flex-col divide-y",children:[e.jsxs("div",{className:"flex flex-col justify-between gap-x-4 gap-y-3 px-6 py-4 md:flex-row md:items-center",children:[e.jsx("div",{children:r}),e.jsxs("div",{className:"flex items-center gap-x-2",children:[!u&&e.jsxs("div",{className:"flex w-full items-center gap-x-2 md:w-fit",children:[e.jsx("div",{className:"w-full md:w-fit",children:e.jsx(H,{prefix:l})}),e.jsx(W,{keys:["name","rate","code","updated_at","created_at"],prefix:l})]}),e.jsx(U,{to:a.to,children:e.jsx(k,{size:"small",variant:"secondary",children:a.label})})]})]}),d&&e.jsx(X,{}),u&&e.jsx(Z,{}),!u&&!d?s?Array.from({length:3}).map((c,j)=>e.jsx("div",{className:"bg-ui-bg-field-component h-[60px] w-full animate-pulse"},j)):i.getRowModel().rows.map(c=>e.jsx(ie,{taxRate:c.original,role:"row","aria-rowindex":c.index},c.id)):null,!u&&e.jsx(D,{prefix:l,canNextPage:i.getCanNextPage(),canPreviousPage:i.getCanPreviousPage(),count:t,nextPage:i.nextPage,previousPage:i.previousPage,pageCount:i.getPageCount(),pageIndex:x,pageSize:p})]})},Ce=({data:s=[],count:a=0,pageSize:t=10,prefix:i})=>{const[o,l]=L(),r=`${i?`${i}_`:""}offset`,n=o.get(r),[{pageIndex:d,pageSize:u},x]=T.useState({pageIndex:n?Math.ceil(Number(n)/t):0,pageSize:t}),p=T.useMemo(()=>({pageIndex:d,pageSize:u}),[d,u]);T.useEffect(()=>{const b=n?Math.ceil(Number(n)/t):0;b!==d&&x(f=>({...f,pageIndex:b}))},[n,t,d]);const c=b=>{const f=b(p),{pageIndex:N,pageSize:E}=f;return l(v=>{if(!N)return v.delete(r),v;const R=new URLSearchParams(v);return R.set(r,String(N*E)),R}),x(f),f};return{table:ee({data:s,columns:[],pageCount:Math.ceil(a/u),state:{pagination:p},getCoreRowModel:se(),onPaginationChange:c,getPaginationRowModel:ae(),manualPagination:!0})}};export{Re as T,Ce as a,_e as b,Ne as u};
