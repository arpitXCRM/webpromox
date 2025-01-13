import{R as x,A as v,P as y,C as E}from"./index-D3M_q6Z7.js";import{r as e,m as s,bc as h,bN as C}from"./index-CFtujj79.js";const m=({open:t=!1,onOpenChange:a,defaultOpen:o=!1,disableAutoFocus:r=!0,children:n})=>e.createElement(x,{open:t,onOpenChange:a,defaultOpen:o},e.createElement(C,null,e.createElement(v,{className:s("fixed bottom-8 left-1/2 h-px w-px -translate-x-1/2")})),e.createElement(y,null,e.createElement(E,{side:"top",sideOffset:0,onOpenAutoFocus:l=>{r&&l.preventDefault()},className:s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2")},n)));m.displayName="CommandBar";const c=e.forwardRef(({className:t,...a},o)=>e.createElement("div",{ref:o,className:s("txt-compact-small-plus text-ui-contrast-fg-secondary px-3 py-2.5",t),...a}));c.displayName="CommandBar.Value";const f=e.forwardRef(({className:t,...a},o)=>e.createElement("div",{ref:o,className:s("bg-ui-contrast-bg-base relative flex items-center overflow-hidden rounded-full px-1","after:shadow-elevation-flyout after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-['']",t),...a}));f.displayName="CommandBar.Bar";const u=e.forwardRef(({className:t,...a},o)=>e.createElement("div",{ref:o,className:s("bg-ui-contrast-border-base h-10 w-px",t),...a}));u.displayName="CommandBar.Seperator";const p=e.forwardRef(({className:t,type:a="button",label:o,action:r,shortcut:n,disabled:l,...b},g)=>(e.useEffect(()=>{const d=i=>{i.key===n&&(i.preventDefault(),i.stopPropagation(),r())};return l||document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}},[r,n,l]),e.createElement("button",{ref:g,className:s("bg-ui-contrast-bg-base txt-compact-small-plus transition-fg text-ui-contrast-fg-primary flex items-center gap-x-2 px-3 py-2.5 outline-none","focus-visible:bg-ui-contrast-bg-highlight focus-visible:hover:bg-ui-contrast-bg-base-hover hover:bg-ui-contrast-bg-base-hover active:bg-ui-contrast-bg-base-pressed focus-visible:active:bg-ui-contrast-bg-base-pressed disabled:!bg-ui-bg-disabled disabled:!text-ui-fg-disabled","last-of-type:-mr-1 last-of-type:pr-4",t),type:a,onClick:r,...b},e.createElement("span",null,o),e.createElement(h,{className:"bg-ui-contrast-bg-subtle border-ui-contrast-border-base text-ui-contrast-fg-secondary"},n.toUpperCase()))));p.displayName="CommandBar.Command";const B=Object.assign(m,{Command:p,Value:c,Bar:f,Seperator:u});export{B as C};
