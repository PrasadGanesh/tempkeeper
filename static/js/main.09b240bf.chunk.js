(this.webpackJsonptempkeeper=this.webpackJsonptempkeeper||[]).push([[0],{55:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(7),a=n.n(r),j=n(14),o=n(11),i=n(35),l=n.n(i),s=n(37),u=n.n(s),b=n(2);var O=function(){return Object(b.jsx)("header",{children:Object(b.jsxs)("h1",{children:[Object(b.jsx)(l.a,{fontSize:"large"}),Object(b.jsx)(u.a,{style:{marginBottom:"7px"},fontSize:"small"})," Temp Keeper"]})})};var d=function(){var e=(new Date).getFullYear();return Object(b.jsx)("footer",{children:Object(b.jsxs)("p",{children:["Copyright \u24d2 ",e]})})},x=n(38),f=n.n(x);var h=function(e){return Object(b.jsxs)("div",{className:"note",children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)("p",{children:e.content}),Object(b.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(b.jsx)(f.a,{})})]})},p=n(8),v=n(31),m=n(39),g=n.n(m),k=n(71),C=n(70);var S=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],j=Object(c.useState)({title:"",content:""}),i=Object(o.a)(j,2),l=i[0],s=i[1];function u(e){var t=e.target,n=t.name,c=t.value;s((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},n,c))}))}return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"create-note",autoComplete:"off",children:[r?Object(b.jsx)("input",{name:"title",onChange:u,value:l.title,placeholder:"Title"}):null,Object(b.jsx)("textarea",{name:"content",onClick:function(){a(!0)},onChange:u,value:l.content,placeholder:"Take a note...",rows:r?"3":"1"}),Object(b.jsx)(k.a,{in:r,children:Object(b.jsx)(C.a,{onClick:function(t){e.onAdd(l),s({title:"",content:""}),t.preventDefault()},children:Object(b.jsx)(g.a,{})})})]})})};var w=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function a(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{}),Object(b.jsx)(S,{onAdd:function(e){r((function(t){return[].concat(Object(j.a)(t),[e])}))}}),n.map((function(e,t){return Object(b.jsx)(h,{id:t,title:e.title,content:e.content,onDelete:a},t)})),Object(b.jsx)(d,{})]})};a.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.09b240bf.chunk.js.map