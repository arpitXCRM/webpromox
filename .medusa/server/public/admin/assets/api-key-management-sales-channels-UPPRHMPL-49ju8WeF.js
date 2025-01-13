import{V as y}from"./chunk-F6ZOHZVB-ClobLJjk.js";import{u as M,a as D,b as E}from"./chunk-VELNOPU6-CLqwz9su.js";import{a1 as F,ad as z,a3 as B,R as H,f6 as I,j as e,b as C,a8 as V,a9 as N,r as j,fa as L,J as O,t as S,E as q,B as x,V as G,k as J}from"./index-CFtujj79.js";import{u as Q,D as Z}from"./chunk-OYHBAUAW-BPYzQyx4.js";import"./lodash-iWkvtpfI.js";import"./chunk-FZFMTVUS-DJyCJk20.js";import"./chunk-BNLHRJ2A-Co-1HirV.js";import"./chunk-KHOKHZC6-BGlyL0GF.js";import{K as $}from"./chunk-6HTZNHPT-Dfyov_Ig.js";import{R as l,u as U}from"./chunk-6DAFMWMA-BalkPqgC.js";import{C as f}from"./checkbox-B0rq3r8e.js";import{c as W}from"./index-l7_cg-Ku.js";import"./chunk-GA34GXNI-CS7h7p_5.js";import"./chunk-P3UUX2T6-Cxu_UTic.js";import"./chunk-MSDRGCRR-6_DQ79fx.js";import"./chunk-ADOCJB6L-7lEr_PP4.js";import"./chunk-C76H5USB-YlxSasi5.js";import"./chunk-YEDAFXMB-DgESuWYo.js";import"./chunk-AOFGTNG6-CcTK5muD.js";import"./chunk-WX2SMNCD-CTuT-zLV.js";import"./plus-mini-B0bCpF81.js";import"./command-bar-BHzAFR2i.js";import"./index-D3M_q6Z7.js";import"./chunk-IVEEMMLZ-YtvhTVhl.js";import"./format-BMErTWQK.js";import"./date-picker-89GIm67B.js";import"./clsx-B-dksMZM.js";import"./popover-CRtEuJt3.js";import"./x-mark-mini-VqhvSkw8.js";import"./triangle-left-mini-DQJV-Olf.js";import"./prompt-BjUldEy3.js";var X=F({sales_channel_ids:z(B())}),p=50,Y=({apiKey:i,preSelected:t=[]})=>{const{t:s}=C(),{handleSuccess:n}=U(),o=V({defaultValues:{sales_channel_ids:[]},resolver:N(X)}),{setValue:c}=o,[r,d]=j.useState({}),{mutateAsync:u,isPending:b}=L(i),{raw:_,searchParams:T}=M({pageSize:p}),h=se(),A=D(),{sales_channels:v,count:g,isLoading:K}=O({...T},{placeholderData:J}),R=a=>{const m=typeof a=="function"?a(r):a,w=Object.keys(m);c("sales_channel_ids",w,{shouldDirty:!0,shouldTouch:!0}),d(m)},{table:k}=Q({data:v??[],columns:h,count:g,enablePagination:!0,enableRowSelection:a=>!t.includes(a.original.id),getRowId:a=>a.id,pageSize:p,rowSelection:{state:r,updater:R}}),P=o.handleSubmit(async a=>{await u(a.sales_channel_ids,{onSuccess:()=>{S.success(s("apiKeyManagement.salesChannels.successToast",{count:a.sales_channel_ids.length})),n()},onError:m=>{S.error(m.message)}})});return e.jsx(l.Form,{form:o,children:e.jsxs($,{onSubmit:P,className:"flex h-full flex-col",children:[e.jsxs(l.Header,{children:[e.jsx(l.Title,{asChild:!0,children:e.jsx(y,{children:s("apiKeyManagement.salesChannels.title")})}),e.jsx(l.Description,{asChild:!0,children:e.jsx(y,{children:s("apiKeyManagement.salesChannels.description")})}),e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:o.formState.errors.sales_channel_ids&&e.jsx(q,{variant:"error",children:o.formState.errors.sales_channel_ids.message})})]}),e.jsx(l.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsx(Z,{table:k,columns:h,count:g,pageSize:p,filters:A,pagination:!0,search:"autofocus",isLoading:K,queryObject:_,orderBy:[{key:"name",label:s("fields.name")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],layout:"fill",noRecords:{message:s("apiKeyManagement.addSalesChannels.list.noRecordsMessage")}})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:b,children:s("actions.save")})]})})]})})},ee=W(),se=()=>{const{t:i}=C(),t=E();return j.useMemo(()=>[ee.display({id:"select",header:({table:s})=>e.jsx(f,{checked:s.getIsSomePageRowsSelected()?"indeterminate":s.getIsAllPageRowsSelected(),onCheckedChange:n=>s.toggleAllPageRowsSelected(!!n)}),cell:({row:s})=>{const n=!s.getCanSelect(),o=s.getIsSelected()||n,c=e.jsx(f,{checked:o,disabled:n,onCheckedChange:r=>s.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}});return n?e.jsx(G,{content:i("apiKeyManagement.salesChannels.alreadyAddedTooltip"),side:"right",children:c}):c}}),...t],[i,t])},De=()=>{var d;const{id:i}=H(),{api_key:t,isLoading:s,isError:n,error:o}=I(i),c=(d=t==null?void 0:t.sales_channels)==null?void 0:d.map(u=>u.id),r=!s&&t;if(n)throw o;return e.jsx(l,{children:r&&e.jsx(Y,{apiKey:i,preSelected:c})})};export{De as Component};
