import{u as g,a as b,b as j}from"./chunk-ZJRFL6ZN-CRWagGNh.js";import{a as C,j as s,b as p,dQ as h,H as T,T as G,L as y,B as v,r as w,e0 as S,A,t as l}from"./index-CFtujj79.js";import{S as E}from"./chunk-2RQLKDBF-e6NNeN82.js";import{u as P,D}from"./chunk-OYHBAUAW-BPYzQyx4.js";import"./lodash-iWkvtpfI.js";import"./chunk-FZFMTVUS-DJyCJk20.js";import"./chunk-BNLHRJ2A-Co-1HirV.js";import"./chunk-KHOKHZC6-BGlyL0GF.js";import{P as _}from"./pencil-square-D_bDKbdu.js";import{T as k}from"./trash-c2lVOAzo.js";import{u as z}from"./use-prompt-CnGO80cK.js";import{C as L}from"./container-DNZ70Yau.js";import{c as H}from"./index-l7_cg-Ku.js";import"./chunk-C76H5USB-YlxSasi5.js";import"./chunk-MSDRGCRR-6_DQ79fx.js";import"./chunk-P3UUX2T6-Cxu_UTic.js";import"./Trans-CdoBTqu8.js";import"./x-mark-mini-VqhvSkw8.js";import"./check-9sAGBKWW.js";import"./chunk-YEDAFXMB-DgESuWYo.js";import"./chunk-AOFGTNG6-CcTK5muD.js";import"./chunk-WX2SMNCD-CTuT-zLV.js";import"./plus-mini-B0bCpF81.js";import"./command-bar-BHzAFR2i.js";import"./index-D3M_q6Z7.js";import"./chunk-IVEEMMLZ-YtvhTVhl.js";import"./format-BMErTWQK.js";import"./date-picker-89GIm67B.js";import"./clsx-B-dksMZM.js";import"./popover-CRtEuJt3.js";import"./triangle-left-mini-DQJV-Olf.js";import"./prompt-BjUldEy3.js";var m=20,B=()=>{const{t:e}=p(),{searchParams:t,raw:o}=g({pageSize:m}),{customer_groups:a,count:r,isLoading:u,isError:i,error:d}=h({...t,fields:"id,name,customers.id"}),f=b(),c=q(),{table:x}=P({data:a??[],columns:c,enablePagination:!0,count:r,getRowId:n=>n.id,pageSize:m});if(i)throw d;return s.jsxs(L,{className:"divide-y p-0",children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(T,{level:"h2",children:e("customerGroups.domain")}),s.jsx(G,{className:"text-ui-fg-subtle",size:"small",children:e("customerGroups.subtitle")})]}),s.jsx(y,{to:"/customer-groups/create",children:s.jsx(v,{size:"small",variant:"secondary",children:e("actions.create")})})]}),s.jsx(D,{table:x,columns:c,pageSize:m,count:r,filters:f,search:!0,pagination:!0,navigateTo:n=>`/customer-groups/${n.original.id}`,orderBy:[{key:"name",label:e("fields.name")},{key:"created_at",label:e("fields.createdAt")},{key:"updated_at",label:e("fields.updatedAt")}],queryObject:o,isLoading:u})]})},N=({group:e})=>{const{t}=p(),o=z(),{mutateAsync:a}=S(e.id),r=async()=>{await o({title:t("customerGroups.delete.title"),description:t("customerGroups.delete.description",{name:e.name}),confirmText:t("actions.delete"),cancelText:t("actions.cancel")})&&await a(void 0,{onSuccess:()=>{l.success(t("customerGroups.delete.successToast",{name:e.name}))},onError:i=>{l.error(i.message)}})};return s.jsx(A,{groups:[{actions:[{label:t("actions.edit"),to:`/customer-groups/${e.id}/edit`,icon:s.jsx(_,{})}]},{actions:[{label:t("actions.delete"),onClick:r,icon:s.jsx(k,{})}]}]})},R=H(),q=()=>{const e=j();return w.useMemo(()=>[...e,R.display({id:"actions",cell:({row:t})=>s.jsx(N,{group:t.original})})],[e])},je=()=>{const{getWidgets:e}=C();return s.jsx(E,{widgets:{after:e("customer_group.list.after"),before:e("customer_group.list.before")},children:s.jsx(B,{})})};export{je as Component};
