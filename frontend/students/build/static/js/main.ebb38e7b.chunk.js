(this.webpackJsonpstudents=this.webpackJsonpstudents||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),r=n.n(s),i=(n(11),n(4)),u=n.n(i),l=n(6),o=n(2),j=(n(13),n(0));var d=function(e){var t=e.item;return Object(j.jsxs)("div",{className:"item-details",children:[Object(j.jsxs)("p",{children:["age: ",t.age]}),Object(j.jsxs)("p",{children:["study field: ",t.subject]}),Object(j.jsxs)("p",{children:["gender: ",t.gender]}),Object(j.jsxs)("p",{children:["active: ",t.status]})]})};var b=function(e){var t=e.item,n=Object(c.useState)(!1),a=Object(o.a)(n,2),s=a[0],r=a[1];return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("div",{className:"details",children:t&&s===t.id?Object(j.jsx)(d,{item:t}):""}),Object(j.jsx)("button",{onClick:function(){return r(!1===s&&t.id)},children:s===t.id?"Show less":"Show more"})]})};var h=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),i=r[0],d=r[1],h=Object(c.useState)(""),v=Object(o.a)(h,2),O=v[0],f=v[1];Object(c.useEffect)((function(){p()}),[]);var p=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/api/students");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(n);var x=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})).filter((function(e){return e.subject.toLowerCase().includes(O.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:Object(j.jsx)("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})}),Object(j.jsx)("h1",{children:"Senior students"}),Object(j.jsxs)("div",{className:"inputs",children:[Object(j.jsx)("input",{className:"input-name",type:"text",placeholder:"Search by name",value:i,onChange:function(e){console.log(e.target.value),d(e.target.value)}}),Object(j.jsx)("input",{className:"input-study",type:"text",placeholder:"Search by study field",value:O,onChange:function(e){console.log(e.target.value),f(e.target.value)}})]}),Object(j.jsx)("div",{className:"cards",children:x.map((function(e){return Object(j.jsx)(b,{item:e},e.id)}))})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.ebb38e7b.chunk.js.map