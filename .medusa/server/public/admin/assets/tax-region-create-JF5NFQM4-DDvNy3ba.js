import{P as b}from"./chunk-YRY2CZ6I-CqDGx2Ij.js";import{C}from"./chunk-MW4K5NNY-3ApLxFr0.js";import{a5 as l,j as e,b as N,a8 as v,a9 as F,ff as T,t as x,H as m,T as j,w as s,V as _,b5 as S,x as f,B as u}from"./index-CFtujj79.js";import{K as w}from"./chunk-6HTZNHPT-Dfyov_Ig.js";import{R as t,u as I}from"./chunk-6DAFMWMA-BalkPqgC.js";import"./index.esm-8frOO4zw.js";import"./triangles-mini-CXhL-jlx.js";import"./prompt-BjUldEy3.js";var z=l.object({name:l.string().optional(),code:l.string().optional(),rate:l.object({float:l.number().optional(),value:l.string().optional()}),country_code:l.string().min(1)}),E=({parentId:h})=>{const{t:r}=N(),{handleSuccess:g}=I(),o=v({defaultValues:{name:"",rate:{value:""},code:"",country_code:""},resolver:F(z)}),{mutateAsync:p,isPending:y}=T(),R=o.handleSubmit(async a=>{var i;const c=a.name?{name:a.name,rate:((i=a.rate)==null?void 0:i.value)===""?void 0:parseFloat(a.rate.value),code:a.code}:void 0;await p({country_code:a.country_code,parent_id:h,default_tax_rate:c},{onSuccess:({tax_region:n})=>{x.success(r("taxRegions.create.successToast")),g(`../${n.id}`)},onError:n=>{x.error(n.message)}})});return e.jsx(t.Form,{form:o,children:e.jsxs(w,{onSubmit:R,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(t.Header,{}),e.jsx(t.Body,{className:"flex flex-1 flex-col overflow-hidden",children:e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(m,{className:"capitalize",children:r("taxRegions.create.header")}),e.jsx(j,{size:"small",className:"text-ui-fg-subtle",children:r("taxRegions.create.hint")})]}),e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:e.jsx(s.Field,{control:o.control,name:"country_code",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.country")}),e.jsx(s.Control,{children:e.jsx(C,{...a})}),e.jsx(s.ErrorMessage,{})]})})})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(m,{level:"h2",className:"!txt-compact-small-plus",children:r("taxRegions.fields.defaultTaxRate.label")}),e.jsxs(j,{size:"small",leading:"compact",className:"text-ui-fg-muted",children:["(",r("fields.optional"),")"]}),e.jsx(_,{content:r("taxRegions.fields.defaultTaxRate.tooltip"),children:e.jsx(S,{className:"text-ui-fg-muted"})})]}),e.jsx("div",{className:"flex flex-col gap-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[e.jsx(s.Field,{control:o.control,name:"name",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("fields.name")}),e.jsx(s.Control,{children:e.jsx(f,{...a})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"rate",render:({field:{value:a,onChange:c,...i}})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("taxRegions.fields.taxRate")}),e.jsx(s.Control,{children:e.jsx(b,{...i,value:a==null?void 0:a.value,onValueChange:(n,M,d)=>c({value:n,float:d==null?void 0:d.float})})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"code",render:({field:a})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("taxRegions.fields.taxCode")}),e.jsx(s.Control,{children:e.jsx(f,{...a})}),e.jsx(s.ErrorMessage,{})]})})]})})]})]})})}),e.jsx(t.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(t.Close,{asChild:!0,children:e.jsx(u,{size:"small",variant:"secondary",children:r("actions.cancel")})}),e.jsx(u,{size:"small",type:"submit",isLoading:y,children:r("actions.save")})]})})]})})},k=()=>e.jsx(t,{children:e.jsx(E,{})});export{k as Component,k as TaxRegionCreate};
