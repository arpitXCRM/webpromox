import{u as d}from"./chunk-C76H5USB-YlxSasi5.js";import{ar as f,b as p,r as y,j as h}from"./index-CFtujj79.js";import{c as C}from"./index-l7_cg-Ku.js";var v=["name","code"],T=({countries:e,q:s,order:o="name",limit:n,offset:l=0})=>{const c=e.slice(l,l+n);if(o){const a=o.startsWith("-")?-1:1,t=o.replace("-","");if(!v.includes(t))throw console.log("The key ${key} is not a valid order key"),f(`The key ${t} is not a valid order key`,500);const r=t==="code"?"iso_2":"name";c.sort((u,i)=>u[r]===null&&i[r]===null?0:u[r]===null?a:i[r]===null?-a:u[r]>i[r]?a:-a)}if(s){const a=s.toLowerCase(),t=e.filter(r=>r.name.toLowerCase().includes(a)||r.iso_2.toLowerCase().includes(a));return{countries:t,count:t.length}}return{countries:c,count:e.length}},m=C(),j=()=>{const{t:e}=p();return y.useMemo(()=>[m.accessor("display_name",{header:e("fields.name"),cell:({getValue:s})=>s()}),m.accessor("iso_2",{header:e("fields.code"),cell:({getValue:s})=>h.jsx("span",{className:"uppercase",children:s()})})],[e])},_=({pageSize:e,prefix:s})=>{const o=d(["order","q","offset"],s),{offset:n,order:l,q:c}=o;return{searchParams:{limit:e,offset:n?parseInt(n,10):0,order:l,q:c},raw:o}};export{T as a,j as b,_ as u};
