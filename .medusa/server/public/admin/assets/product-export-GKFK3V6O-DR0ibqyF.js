import{b as o,j as s,H as c,P as x,B as i,T as u,t as a}from"./index-CFtujj79.js";import{u as m,a as h}from"./chunk-ZE4FSVPB-CMJbHUfQ.js";import{D as j}from"./chunk-FZFMTVUS-DJyCJk20.js";import"./chunk-BNLHRJ2A-Co-1HirV.js";import"./chunk-KHOKHZC6-BGlyL0GF.js";import{b as t,u as f}from"./chunk-6DAFMWMA-BalkPqgC.js";import"./chunk-C76H5USB-YlxSasi5.js";import"./lodash-iWkvtpfI.js";import"./chunk-IVEEMMLZ-YtvhTVhl.js";import"./format-BMErTWQK.js";import"./date-picker-89GIm67B.js";import"./clsx-B-dksMZM.js";import"./popover-CRtEuJt3.js";import"./index-D3M_q6Z7.js";import"./x-mark-mini-VqhvSkw8.js";import"./triangle-left-mini-DQJV-Olf.js";import"./prompt-BjUldEy3.js";var v=()=>{const{t:r}=o(),e=h();return s.jsxs("div",{children:[s.jsx(c,{level:"h2",children:r("products.export.filters.title")}),s.jsx(u,{size:"small",className:"text-ui-fg-subtle",children:r("products.export.filters.description")}),s.jsx("div",{className:"mt-4",children:s.jsx(j,{filters:e,readonly:!0})})]})},A=()=>{const{t:r}=o();return s.jsxs(t,{children:[s.jsxs(t.Header,{children:[s.jsx(t.Title,{asChild:!0,children:s.jsx(c,{children:r("products.export.header")})}),s.jsx(t.Description,{className:"sr-only",children:r("products.export.description")})]}),s.jsx(y,{})]})},y=()=>{const{t:r}=o(),{searchParams:e}=m({}),{mutateAsync:n}=x(e),{handleSuccess:l}=f(),d=async()=>{await n({},{onSuccess:()=>{a.info(r("products.export.success.title"),{description:r("products.export.success.description")}),l()},onError:p=>{a.error(p.message)}})};return s.jsxs(s.Fragment,{children:[s.jsx(t.Body,{children:s.jsx(v,{})}),s.jsx(t.Footer,{children:s.jsxs("div",{className:"flex items-center gap-x-2",children:[s.jsx(t.Close,{asChild:!0,children:s.jsx(i,{size:"small",variant:"secondary",children:r("actions.cancel")})}),s.jsx(i,{onClick:d,size:"small",children:r("actions.export")})]})})]})};export{A as Component};
