import{r as i,b as p,j as e,m as a,B as x}from"./index-CFtujj79.js";import{X as m}from"./x-mark-mini-VqhvSkw8.js";var c=i.createContext(null),b=()=>{const t=i.useContext(c);if(!t)throw new Error("useGroupContext must be used within a ChipGroup component");return t},g=({onClearAll:t,onRemove:o,variant:r="component",className:n,children:s})=>{const{t:u}=p(),l=!!t&&i.Children.count(s)>0;return e.jsx(c.Provider,{value:{onRemove:o,variant:r},children:e.jsxs("ul",{role:"application",className:a("flex flex-wrap items-center gap-2",n),children:[s,l&&e.jsx("li",{children:e.jsx(x,{size:"small",variant:"transparent",type:"button",onClick:t,className:"text-ui-fg-muted active:text-ui-fg-subtle",children:u("actions.clearAll")})})]})})},d=({index:t,className:o,children:r})=>{const{onRemove:n,variant:s}=b();return e.jsxs("li",{className:a("bg-ui-bg-component shadow-borders-base flex items-stretch divide-x overflow-hidden rounded-md",{"bg-ui-bg-component":s==="component","bg-ui-bg-base-":s==="base"},o),children:[e.jsx("span",{className:"txt-compact-small-plus text-ui-fg-subtle flex items-center justify-center px-2 py-1",children:r}),!!n&&e.jsx("button",{onClick:()=>n(t),type:"button",className:a("text-ui-fg-muted active:text-ui-fg-subtle transition-fg flex items-center justify-center p-1",{"hover:bg-ui-bg-component-hover active:bg-ui-bg-component-pressed":s==="component","hover:bg-ui-bg-base-hover active:bg-ui-bg-base-pressed":s==="base"}),children:e.jsx(m,{})})]})},f=Object.assign(g,{Chip:d});export{f as C};
