(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),c=t.n(r),u=(t(20),t(4)),l=t(2),i=function(e){var n=e.addPerson,t=e.newName,a=e.handlePersonChange,r=e.newNumber,c=e.handleNumberChange;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name:",o.a.createElement("input",{value:t,onChange:a})),o.a.createElement("div",null,o.a.createElement("div",null,"number:",o.a.createElement("input",{value:r,onChange:c})),o.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.showFiltered,t=e.handleFilterChange;return o.a.createElement("div",null,"filter shown with:",o.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.person,t=e.removePerson;return o.a.createElement("p",null," ",n.name," ",n.number," ",o.a.createElement("button",{id:n.id,onClick:t},"delete"))},d=function(e){var n=e.message;return null===n?null:n.includes("removed")?o.a.createElement("div",{className:"error"},n):o.a.createElement("div",{className:"success"},n)},f=t(3),h=t.n(f),b="http://localhost:3001/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},w=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),h=f[0],b=f[1],g=Object(a.useState)(""),C=Object(l.a)(g,2),j=C[0],O=C[1],k=Object(a.useState)(""),N=Object(l.a)(k,2),P=N[0],S=N[1],y=Object(a.useState)(null),L=Object(l.a)(y,2),F=L[0],D=L[1];Object(a.useEffect)((function(){v().then((function(e){r(e)}))}),[]);var T=t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(d,{message:F}),o.a.createElement(m,{showFiltered:P,handleFilterChange:function(e){S(e.target.value),console.log(P.toLowerCase())}}),o.a.createElement("h2",null,"Add a new"),o.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:h,number:j};if(0===t.filter((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})).length)w(n).then((function(e){r(t.concat(e))})),D("Added ".concat(h," into the phonebook")),setTimeout((function(){D(null)}),5e3);else if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===h})),o=Object(u.a)(Object(u.a)({},a),{},{number:j});E(a.id,o).then((function(e){r(t.map((function(n){return n.id!==e.id?n:e})))})).catch((function(e){D("Information of ".concat(a.name," has already been removed from the server"))})),D("Changed the number of ".concat(h," to ").concat(j)),setTimeout((function(){D(null)}),5e3)}b(""),O("")},newName:h,handlePersonChange:function(e){b(e.target.value)},newNumber:j,handleNumberChange:function(e){O(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),T.map((function(e,n){return o.a.createElement(s,{key:n,person:e,removePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(p(e).then((function(n){r(t.filter((function(n){return n.id!==e})))})),D("Deleted ".concat(n.name," from the phonebook")),setTimeout((function(){D(null)}),5e3))}(e.id)}})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.8a297051.chunk.js.map