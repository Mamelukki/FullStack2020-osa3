(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),u=(t(20),t(4)),l=t(2),i=function(e){var n=e.addPerson,t=e.newName,a=e.handlePersonChange,o=e.newNumber,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,r.a.createElement("div",null,"number:",r.a.createElement("input",{value:o,onChange:c})),r.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.showFiltered,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.person,t=e.removePerson;return r.a.createElement("p",null," ",n.name," ",n.number," ",r.a.createElement("button",{id:n.id,onClick:t},"delete"))},d=function(e){var n=e.message,t=e.type;return null===n?null:"error"===t?r.a.createElement("div",{className:"error"},n):r.a.createElement("div",{className:"success"},n)},f=t(3),h=t.n(f),b="/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},p=function(e){return h.a.post(b,e).then((function(e){return e.data}))},w=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),h=f[0],b=f[1],g=Object(a.useState)(""),C=Object(l.a)(g,2),j=C[0],O=C[1],k=Object(a.useState)(""),N=Object(l.a)(k,2),y=N[0],S=N[1],P=Object(a.useState)(null),L=Object(l.a)(P,2),T=L[0],F=L[1],D=Object(a.useState)(null),A=Object(l.a)(D,2),B=A[0],I=A[1];Object(a.useEffect)((function(){v().then((function(e){o(e)}))}),[]);var J=t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{message:T,type:B}),r.a.createElement(s,{showFiltered:y,handleFilterChange:function(e){S(e.target.value),console.log(y.toLowerCase())}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:h,number:j};if(0===t.filter((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})).length)p(n).then((function(e){o(t.concat(e)),F("Added ".concat(h," into the phonebook")),I("success"),setTimeout((function(){F(null),I(null)}),5e3)})).catch((function(e){F(e.response.data.error),I("error"),setTimeout((function(){F(null),I(null)}),5e3)}));else if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===h})),r=Object(u.a)(Object(u.a)({},a),{},{number:j});E(a.id,r).then((function(e){o(t.map((function(n){return n.id!==e.id?n:e}))),F("Changed the number of ".concat(h," to ").concat(j)),I("success"),setTimeout((function(){F(null),I(null)}),5e3)})).catch((function(e){F("Information of ".concat(a.name," has already been removed from the server")),I("error"),setTimeout((function(){F(null),I(null)}),5e3)}))}b(""),O("")},newName:h,handlePersonChange:function(e){b(e.target.value)},newNumber:j,handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),J.map((function(e,n){return r.a.createElement(m,{key:n,person:e,removePerson:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&(w(e).then((function(n){o(t.filter((function(n){return n.id!==e})))})),F("Deleted ".concat(n.name," from the phonebook")),I("success"),setTimeout((function(){F(null),I(null)}),5e3))}(e.id)}})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.79a8385a.chunk.js.map