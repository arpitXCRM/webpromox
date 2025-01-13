import{g as C}from"./chunk-G22WWLPG-C9g-VuwI.js";import{a1 as w,a3 as S,c as M,j as e,r as u,b as N,a8 as T,a9 as F,f3 as H,t as c,H as k,T as f,w as i,x as A,B as h,f4 as R,f5 as z}from"./index-CFtujj79.js";import{K as E}from"./chunk-6HTZNHPT-Dfyov_Ig.js";import{R as r,u as P}from"./chunk-6DAFMWMA-BalkPqgC.js";import{P as n}from"./prompt-BjUldEy3.js";var $=w({title:S().min(1)});function B(t){if(!t)return"";const s=t.slice(0,4),o=t.slice(-2);return`${s}${"•".repeat(t.length-6)}${o}`}var L=({keyType:t})=>{const[s,o]=u.useState(null),[d,j]=u.useState(!0),{t:a}=N(),{handleSuccess:p}=P(),m=T({defaultValues:{title:""},resolver:F($)}),{mutateAsync:g,isPending:b}=H(),y=m.handleSubmit(async x=>{await g({title:x.title,type:t},{onSuccess:({api_key:l})=>{switch(c.success(a("apiKeyManagement.create.successToast")),t){case"publishable":p(`/settings/publishable-api-keys/${l.id}`);break;case"secret":o(l);break}},onError:l=>{c.error(l.message)}})}),v=()=>{s||c.error(a("apiKeyManagement.create.copySecretTokenFailure")),navigator.clipboard.writeText((s==null?void 0:s.token)??""),c.success(a("apiKeyManagement.create.copySecretTokenSuccess"))},K=()=>{s&&p(`/settings/secret-api-keys/${s.id}`)};return e.jsxs(u.Fragment,{children:[e.jsx(r.Form,{form:m,children:e.jsxs(E,{className:"flex h-full flex-col overflow-hidden",onSubmit:y,children:[e.jsx(r.Header,{}),e.jsx(r.Body,{className:"flex flex-1 flex-col overflow-hidden",children:e.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[e.jsxs("div",{children:[e.jsx(r.Title,{asChild:!0,children:e.jsx(k,{children:a(t==="publishable"?"apiKeyManagement.create.createPublishableHeader":"apiKeyManagement.create.createSecretHeader")})}),e.jsx(r.Description,{asChild:!0,children:e.jsx(f,{size:"small",className:"text-ui-fg-subtle",children:a(t==="publishable"?"apiKeyManagement.create.createPublishableHint":"apiKeyManagement.create.createSecretHint")})})]}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:e.jsx(i.Field,{control:m.control,name:"title",render:({field:x})=>e.jsxs(i.Item,{children:[e.jsx(i.Label,{children:a("fields.title")}),e.jsx(i.Control,{children:e.jsx(A,{...x})}),e.jsx(i.ErrorMessage,{})]})})})]})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(h,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(h,{size:"small",type:"submit",isLoading:b,children:a("actions.save")})]})})]})}),e.jsx(n,{variant:"confirmation",open:!!s,children:e.jsxs(n.Content,{className:"w-fit max-w-[42.5%]",children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:a("apiKeyManagement.create.secretKeyCreatedHeader")}),e.jsx(n.Description,{children:a("apiKeyManagement.create.secretKeyCreatedHint")})]}),e.jsxs("div",{className:"flex flex-col gap-y-3 px-6 py-4",children:[e.jsxs("div",{className:"shadow-borders-base bg-ui-bg-component grid h-8 grid-cols-[1fr_32px] items-center overflow-hidden rounded-md",children:[e.jsx("div",{className:"flex items-center px-2",children:e.jsx(f,{family:"mono",size:"small",children:d?B(s==null?void 0:s.token):s==null?void 0:s.token})}),e.jsx("button",{className:"transition-fg hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed text-ui-fg-muted active:text-ui-fg-subtle flex size-8 appearance-none items-center justify-center border-l",type:"button",onClick:()=>j(!d),children:d?e.jsx(R,{}):e.jsx(z,{})})]}),e.jsx(h,{size:"small",variant:"secondary",type:"button",className:"w-full",onClick:v,children:a("apiKeyManagement.actions.copy")})]}),e.jsx(n.Footer,{className:"border-t py-4",children:e.jsx(n.Action,{onClick:K,children:a("actions.continue")})})]})})]})},J=()=>{const{pathname:t}=M(),s=C(t);return e.jsx(r,{children:e.jsx(L,{keyType:s})})};export{J as Component};
