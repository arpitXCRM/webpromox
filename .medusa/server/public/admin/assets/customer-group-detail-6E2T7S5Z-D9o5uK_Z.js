import{u as I,a as L,b as q}from"./chunk-DJPQV344-BFWRlNj8.js";import{e2 as C,j as o,d as z,R as B,a as M,dJ as O,q as F,r as b,b as l,dW as H,d_ as v,H as S,L as Q,B as $,u as J,e0 as K,A as w,T as h,p as U,s as W,t as f}from"./index-CFtujj79.js";import{S as Z}from"./chunk-2RQLKDBF-e6NNeN82.js";import{u as V,D as X}from"./chunk-OYHBAUAW-BPYzQyx4.js";import"./lodash-iWkvtpfI.js";import"./chunk-FZFMTVUS-DJyCJk20.js";import"./chunk-BNLHRJ2A-Co-1HirV.js";import"./chunk-KHOKHZC6-BGlyL0GF.js";import{P as G}from"./pencil-square-D_bDKbdu.js";import{T}from"./trash-c2lVOAzo.js";import{u as d}from"./use-prompt-CnGO80cK.js";import{C as k}from"./container-DNZ70Yau.js";import{C as y}from"./checkbox-B0rq3r8e.js";import{c as Y}from"./index-l7_cg-Ku.js";import"./chunk-C76H5USB-YlxSasi5.js";import"./chunk-B4FQDBC3-CO3FP8qe.js";import"./chunk-P3UUX2T6-Cxu_UTic.js";import"./format-BMErTWQK.js";import"./chunk-ADOCJB6L-7lEr_PP4.js";import"./Trans-CdoBTqu8.js";import"./x-mark-mini-VqhvSkw8.js";import"./check-9sAGBKWW.js";import"./chunk-YEDAFXMB-DgESuWYo.js";import"./chunk-AOFGTNG6-CcTK5muD.js";import"./chunk-WX2SMNCD-CTuT-zLV.js";import"./plus-mini-B0bCpF81.js";import"./command-bar-BHzAFR2i.js";import"./index-D3M_q6Z7.js";import"./chunk-IVEEMMLZ-YtvhTVhl.js";import"./date-picker-89GIm67B.js";import"./clsx-B-dksMZM.js";import"./popover-CRtEuJt3.js";import"./triangle-left-mini-DQJV-Olf.js";import"./prompt-BjUldEy3.js";var p="+customers.id",Me=t=>{const{id:e}=t.params||{},{customer_group:s}=C(e,{fields:p},{initialData:t.data,enabled:!!e});return s?o.jsx("span",{children:s.name}):null},m=10,ee=({group:t})=>{const[e,s]=b.useState({}),{t:r}=l(),i=d(),{searchParams:n,raw:a}=I({pageSize:m}),{customers:g,count:u,isLoading:D,isError:R,error:P}=H({...n,groups:t.id}),x=te(),_=L(["groups"]),{table:A}=V({data:g??[],columns:x,count:u,getRowId:c=>c.id,enablePagination:!0,enableRowSelection:!0,pageSize:m,rowSelection:{state:e,updater:s},meta:{customerGroupId:t.id}});if(R)throw P;const{mutateAsync:E}=v(t.id),N=async()=>{const c=Object.keys(e);await i({title:r("customerGroups.customers.remove.title",{count:c.length}),description:r("customerGroups.customers.remove.description",{count:c.length}),confirmText:r("actions.continue"),cancelText:r("actions.cancel")})&&await E(c,{onSuccess:()=>{s({})}})};return o.jsxs(k,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(S,{level:"h2",children:r("customers.domain")}),o.jsx(Q,{to:`/customer-groups/${t.id}/add-customers`,children:o.jsx($,{variant:"secondary",size:"small",children:r("general.add")})})]}),o.jsx(X,{table:A,columns:x,pageSize:m,isLoading:D,count:u,navigateTo:c=>`/customers/${c.id}`,filters:_,search:!0,pagination:!0,orderBy:[{key:"email",label:r("fields.email")},{key:"first_name",label:r("fields.firstName")},{key:"last_name",label:r("fields.lastName")},{key:"has_account",label:r("customers.hasAccount")},{key:"created_at",label:r("fields.createdAt")},{key:"updated_at",label:r("fields.updatedAt")}],queryObject:a,commands:[{action:N,label:r("actions.remove"),shortcut:"r"}],noRecords:{message:r("customerGroups.customers.list.noRecordsMessage")}})]})},se=({customer:t,customerGroupId:e})=>{const{t:s}=l(),{mutateAsync:r}=v(e),i=d(),n=async()=>{await i({title:s("customerGroups.customers.remove.title",{count:1}),description:s("customerGroups.customers.remove.description",{count:1}),confirmText:s("actions.continue"),cancelText:s("actions.cancel")})&&await r([t.id])};return o.jsx(w,{groups:[{actions:[{icon:o.jsx(G,{}),label:s("actions.edit"),to:`/customers/${t.id}/edit`}]},{actions:[{icon:o.jsx(T,{}),label:s("actions.remove"),onClick:n}]}]})},j=Y(),te=()=>{const t=q();return b.useMemo(()=>[j.display({id:"select",header:({table:e})=>o.jsx(y,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:s=>e.toggleAllPageRowsSelected(!!s)}),cell:({row:e})=>o.jsx(y,{checked:e.getIsSelected(),onCheckedChange:s=>e.toggleSelected(!!s),onClick:s=>{s.stopPropagation()}})}),...t,j.display({id:"actions",cell:({row:e,table:s})=>{const{customerGroupId:r}=s.options.meta;return o.jsx(se,{customer:e.original,customerGroupId:r})}})],[t])},oe=({group:t})=>{var a;const{t:e}=l(),s=d(),r=J(),{mutateAsync:i}=K(t.id),n=async()=>{await s({title:e("customerGroups.delete.title"),description:e("customerGroups.delete.description",{name:t.name}),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await i(void 0,{onSuccess:()=>{f.success(e("customerGroups.delete.successToast",{name:t.name})),r("/customer-groups",{replace:!0})},onError:u=>{f.error(u.message)}})};return o.jsxs(k,{className:"divide-y p-0",children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[o.jsx(S,{children:t.name}),o.jsx(w,{groups:[{actions:[{icon:o.jsx(G,{}),label:e("actions.edit"),to:`/customer-groups/${t.id}/edit`}]},{actions:[{icon:o.jsx(T,{}),label:e("actions.delete"),onClick:n}]}]})]}),o.jsxs("div",{className:"text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4",children:[o.jsx(h,{size:"small",leading:"compact",weight:"plus",children:e("customers.domain")}),o.jsx(h,{size:"small",leading:"compact",children:((a=t.customers)==null?void 0:a.length)||"-"})]})]})},Oe=()=>{const t=z(),{id:e}=B(),{customer_group:s,isLoading:r,isError:i,error:n}=C(e,{fields:p},{initialData:t}),{getWidgets:a}=M();if(r||!s)return o.jsx(O,{sections:2,showJSON:!0,showMetadata:!0});if(i)throw n;return o.jsxs(Z,{widgets:{before:a("customer_group.details.before"),after:a("customer_group.details.after")},showJSON:!0,showMetadata:!0,data:s,children:[o.jsx(oe,{group:s}),o.jsx(ee,{group:s})]})},re=t=>({queryKey:U.detail(t),queryFn:async()=>W.admin.customerGroup.retrieve(t,{fields:p})}),Fe=async({params:t})=>{const e=t.id,s=re(e);return F.ensureQueryData(s)};export{Me as Breadcrumb,Oe as Component,Fe as loader};
