(this["webpackJsonppanlang-ui"]=this["webpackJsonppanlang-ui"]||[]).push([[0],{124:function(e,t,a){},161:function(e,t,a){e.exports=a(223)},170:function(e,t,a){e.exports=a.p+"static/media/logo.07da641c.png"},219:function(e,t){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),o=a.n(l),c=(a(124),a(21)),i=a(10),u=a(122),s=a(83);var m=function(){return r.a.createElement(u.a,{bg:"light"},r.a.createElement(u.a.Brand,{as:c.b,to:"/"},r.a.createElement("div",{id:"logo"},r.a.createElement("img",{src:a(170),alt:"Pan-Lang",style:{width:150,height:45}}))),r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Link,{as:c.b,to:"/order"},"Order"),r.a.createElement(s.a.Link,{as:c.b,to:"/stock"},"Stock"),r.a.createElement(s.a.Link,{as:c.b,to:"/sockettest"},"Order Tracker")))},d=a(8),E=a(73),f=a(29),h=a.n(f),p=a(54),g=a(150),b=a.n(g).a.create({baseURL:"https://panlang.herokuapp.com"});function v(){return(v=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.post("/people",t).then((function(e){return!0})).catch((function(e){return!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(){var e=Object(n.useState)({month:9,year:2020}),t=Object(d.a)(e,2),a=t[0];return t[1],r.a.createElement("div",null,r.a.createElement("h1",{align:"center",style:{marginBottom:20}},"Welcome to ",r.a.createElement("font",{style:{color:"#26B020"}},"Pan-Lang"),"!"),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/order",style:{color:"white"}},r.a.createElement(E.a,{variant:"success",size:"lg",className:"mb-3",block:!0},"New Order"))),r.a.createElement(c.b,{to:"/stock",style:{color:"white"}},r.a.createElement(E.a,{variant:"success",size:"lg",className:"mb-3",block:!0},"Edit Stock")," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"".concat("https://panlang.herokuapp.com").concat("/people","?").concat(new URLSearchParams(a))},r.a.createElement(E.a,{variant:"success",size:"lg",className:"mb-3",block:!0},"Download Order Data")," "))},y=a(52),C=a(71),S=a(17),w=a(231),O=S.b({firstName:S.c().required(),lastName:S.c().required(),adults:S.a().moreThan(-1).required(),children:S.a().moreThan(-1).required(),zipcode:S.a().moreThan(9999).lessThan(1e5).integer().required(),orderNotes:S.c().required()});var j=function(){var e=Object(i.f)();return r.a.createElement(y.a,{style:{backgroundColor:"white",paddingBottom:120}},r.a.createElement("h1",{style:{textAlign:"center"}},"Order"),r.a.createElement(C.a,{validationSchema:O,onSubmit:function(t){e.push("/order-stock",{fromForm:!0,personInfo:t})},initialValues:{firstName:"",lastName:"",adults:-1,children:-1,zipcode:-1,orderNotes:"test"}},(function(e){var t=e.handleSubmit,a=e.handleChange,n=(e.handleBlur,e.values,e.touched),l=(e.isValid,e.errors);return r.a.createElement("div",null,r.a.createElement(w.a,{noValidate:!0,onSubmit:t},r.a.createElement(w.a.Group,{md:"4",controlId:"orderForm1"},r.a.createElement(w.a.Label,null,"First name"),r.a.createElement(w.a.Control,{type:"text",name:"firstName",placeholder:"Enter first name here",onChange:a,isValid:n.firstName&&!l.firstName,isInvalid:!!l.firstName}),r.a.createElement(w.a.Control.Feedback,null,"Looks good!")),r.a.createElement(w.a.Group,{md:"4",controlId:"orderForm2"},r.a.createElement(w.a.Label,null,"Last name"),r.a.createElement(w.a.Control,{type:"text",name:"lastName",placeholder:"Enter last name here",onChange:a,isValid:n.lastName&&!l.lastName,isInvalid:!!l.lastName}),r.a.createElement(w.a.Control.Feedback,null,"Looks good!")),r.a.createElement(w.a.Group,{md:"4",controlId:"orderForm3"},r.a.createElement(w.a.Label,null,"# of Adults"),r.a.createElement(w.a.Control,{type:"number",name:"adults",placeholder:"Enter number of adults in household",onChange:a,isValid:n.adults&&!l.adults,isInvalid:!!l.adults}),r.a.createElement(w.a.Control.Feedback,null,"Looks good!")),r.a.createElement(w.a.Group,{md:"4",controlId:"orderForm4"},r.a.createElement(w.a.Label,null,"# of Children"),r.a.createElement(w.a.Control,{type:"number",name:"children",placeholder:"Enter number of children in household",onChange:a,isValid:n.children&&!l.children,isInvalid:!!l.children}),r.a.createElement(w.a.Control.Feedback,null,"Looks good!")),r.a.createElement(w.a.Group,{md:"4",controlId:"orderForm4"},r.a.createElement(w.a.Label,null,"ZIP Code"),r.a.createElement(w.a.Control,{type:"number",name:"zipcode",placeholder:"Enter your ZIP Code",onChange:a,isValid:n.zipcode&&!l.zipcode,isInvalid:!!l.zipcode}),r.a.createElement(w.a.Control.Feedback,null,"Looks good!")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},r.a.createElement(E.a,{variant:"success",block:!0},"Select order"))))})))},I=a(82),N=a(110),L=a(228),q=a(230);function x(){return F.apply(this,arguments)}function F(){return(F=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/stock");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.post("/stock",t).then((function(e){return!0})).catch((function(e){return!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return B.apply(this,arguments)}function B(){return(B=Object(p.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.put("".concat("/stock","/").concat(t),a).then((function(e){return console.log(e),!0})).catch((function(e){return console.error(e),!1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=S.b({newCount:S.a().integer().moreThan(-1).required()});var R=function(e){var t=e.show,a=e.handleClose,n=e.getStock,l=e.stockId,o=e.stockName,c=e.stockCount;return r.a.createElement(q.a,{show:t,onHide:a,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(C.a,{validationSchema:T,onSubmit:function(e){console.log(e),A(l,e),a(),n(500)},initialValues:{newCount:-1}},(function(e){var t=e.handleSubmit,n=e.handleChange,l=(e.handleBlur,e.values,e.touched),i=(e.isValid,e.errors);return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a.Header,{closeButton:!0},r.a.createElement(q.a.Title,{id:"contained-modal-title-vcenter"},"Edit amount for: ",o)),r.a.createElement(q.a.Body,null,r.a.createElement("p",null,"Current amount: ",c),r.a.createElement(w.a,{noValidate:!0,onSubmit:t},r.a.createElement(w.a.Group,{controlId:"stockCount"},r.a.createElement(w.a.Control,{type:"number",name:"newCount",placeholder:"Insert new item count",onChange:n,isValid:l.newCount&&!i.newCount,isInvalid:!!i.newCount}),r.a.createElement(w.a.Control.Feedback,null,"Looks good!")))),r.a.createElement(q.a.Footer,null,r.a.createElement(E.a,{variant:"secondary",onClick:a},"Close"),r.a.createElement(E.a,{variant:"success",onClick:t},"Save new amount")))})))};var V=function(e){var t=e.stockItem,a=e.getStock,l=e.lang,o=void 0===l?"name":l,c=Object(n.useState)(!1),i=Object(d.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),h=f[0],p=f[1];return Object(n.useEffect)((function(){p(void 0!==t[o])}),[o,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{margin:5}},r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Header,{as:"h2"},h?t[o]:t.name,"name"!==o&&h?" ("+t.name+")":""),r.a.createElement(N.a.Text,null,"Amount:"," ",r.a.createElement("font",{style:{fontSize:"1.4em",fontWeight:"bolder"}},t.count)),r.a.createElement(N.a.Text,{style:{textAlign:"right"}},"Last updated:"," ",void 0!==t.timestamp?new Date(t.timestamp).toDateString():"Unavailable"),r.a.createElement(y.a,{style:{display:"flex",alignItems:"center",padding:0}},!h&&r.a.createElement(L.a,{variant:"danger"},"Language unavailable: ",o),r.a.createElement("div",{style:{margin:"auto"}}),r.a.createElement(E.a,{size:"sm",variant:"success",style:{alignSelf:"center"},onClick:function(){return s(!0)}},"Edit amount")))),r.a.createElement(R,{show:u,handleClose:function(){return s(!1)},getStock:a,stockName:h?t[o]:t.name,stockId:t._id,stockCount:t.count}))},P=a(109),H=S.b({name:S.c().required(),count:S.a().integer().moreThan(-1).required()});var G=function(e){var t=e.getStock;return r.a.createElement(P.a,null,r.a.createElement(N.a,null,r.a.createElement(P.a.Toggle,{as:N.a.Header,eventKey:"0"},"Click here to insert a stock item"),r.a.createElement(P.a.Collapse,{eventKey:"0"},r.a.createElement(N.a.Body,null,r.a.createElement(C.a,{validationSchema:H,onSubmit:function(e){t(500),console.log(function(e){return z.apply(this,arguments)}(e))},initialValues:{name:"",count:-1}},(function(e){var t=e.handleSubmit,a=e.handleChange,n=(e.handleBlur,e.values,e.touched),l=(e.isValid,e.errors);return r.a.createElement(w.a,{noValidate:!0,onSubmit:t},r.a.createElement(w.a.Group,{controlId:"stockInputName"},r.a.createElement(w.a.Control,{type:"text",name:"name",placeholder:"Insert item name here",onChange:a,isValid:n.name&&!l.name,isInvalid:!!l.name}),r.a.createElement(w.a.Control.Feedback,null,"Looks good!")),r.a.createElement(w.a.Group,{controlId:"stockInputCount"},r.a.createElement(w.a.Control,{type:"number",name:"count",placeholder:"Insert item count here",onChange:a,isValid:n.count&&!l.count,isInvalid:!!l.count}),r.a.createElement(w.a.Control.Feedback,null,"Looks good!")),r.a.createElement(E.a,{variant:"success",type:"submit"},"Add item to database"))}))))))},D=a(155);var _=function(){return r.a.createElement(D.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},U=["english","spanish","french","chinese"];var W=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(d.a)(o,2),i=c[0],u=c[1],s=Object(n.useState)(U[0]),m=Object(d.a)(s,2),f=m[0],h=m[1];function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;l([]),setTimeout((function(){x().then((function(e){l(e.data)})).catch((function(e){return u(!0)}))}),e)}function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}return Object(n.useEffect)((function(){p()}),[]),r.a.createElement(y.a,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Stock"),r.a.createElement(y.a,{style:{display:"flex",alignItems:"center",padding:0}},r.a.createElement(I.a,{onChange:function(e){return console.log(e)}},r.a.createElement(I.a.Toggle,{variant:"type",id:"dropdown-basic",size:"md",className:"mb-3",style:{backgroundColor:"green",color:"white"}},"Language: ",r.a.createElement("b",null,g(f))),r.a.createElement(I.a.Menu,null,U.map((function(e){return r.a.createElement(I.a.Item,{onSelect:function(e){return h(e)},eventKey:e,key:e},g(e))})))),r.a.createElement("div",{style:{margin:"auto"}}),r.a.createElement(E.a,{variant:"type",size:"md",onClick:p,style:{backgroundColor:"green",color:"white"}},"Refresh")),r.a.createElement(G,{getStock:p}),0===a.length&&!i&&r.a.createElement(_,null),a&&a.map((function(e){return r.a.createElement(V,{stockItem:e,getStock:p,lang:"english"===f?"name":f,key:e._id})})),i&&r.a.createElement("p",null,"Error :("))},K=a(229);var M=function(e){var t=e.show,a=e.handleClose,l=(e.getStock,e.stockId),o=e.stockName,c=e.stockCount,i=e.onRequest,u=Object(n.useState)(1),s=Object(d.a)(u,2),m=s[0],f=s[1];return r.a.createElement(q.a,{show:t,onHide:a,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(q.a.Header,{closeButton:!0},r.a.createElement(q.a.Title,{id:"contained-modal-title-vcenter"},"Select requested amount for: ",o)),r.a.createElement(q.a.Body,null,r.a.createElement("p",null,"Current amount: ",r.a.createElement("b",null,c)),r.a.createElement("p",null,"Amount after order: ",r.a.createElement("b",null,c-m)),r.a.createElement(K.a,{"aria-label":"Stock item request buttons",style:{display:"flex",alignItems:"center"}},r.a.createElement(E.a,{size:"lg",onClick:function(){m>1&&f(m-1)}},"-"),r.a.createElement(E.a,{size:"lg",variant:"secondary",disabled:!0},m),r.a.createElement(E.a,{variant:"success",size:"lg",onClick:function(){m<c&&f(m+1)}},"+"))),r.a.createElement(q.a.Footer,null,r.a.createElement(E.a,{variant:"secondary",onClick:a},"Close"),r.a.createElement(E.a,{variant:"success",onClick:function(){var e={id:l,name:o,requestedCount:m,countAfterRequest:c-m};console.log("submitRequest -> stockCount",c),console.log("submitRequest -> selectedAmount",m),console.log("countAfterRequest ->",e.countAfterRequest),i(e),a()}},"Request amount")))};var J=function(e){var t=e.stockItem,a=e.getStock,l=e.lang,o=void 0===l?"name":l,c=e.onRequest,i=Object(n.useState)(!1),u=Object(d.a)(i,2),s=u[0],m=u[1],f=Object(n.useState)(!1),h=Object(d.a)(f,2),p=h[0],g=h[1];return Object(n.useEffect)((function(){g(void 0!==t[o])}),[o,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{margin:5}},r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Header,{as:"h2"},p?t[o]:t.name,"name"!==o&&p?" ("+t.name+")":""),r.a.createElement(N.a.Text,null,"Amount:"," ",r.a.createElement("font",{style:{fontSize:"1.4em",fontWeight:"bolder"}},t.count)),r.a.createElement(y.a,{style:{display:"flex",alignItems:"center",padding:0}},!p&&r.a.createElement(L.a,{variant:"danger"},"Language unavailable: ",o),r.a.createElement("div",{style:{margin:"left"}}),r.a.createElement(E.a,{size:"lg",variant:"success",style:{alignSelf:"left"},onClick:function(){return m(!0)}},"Request Item")),r.a.createElement(N.a.Text,{style:{textAlign:"right"}},"Last updated:"," ",void 0!==t.timestamp?new Date(t.timestamp).toDateString():"Unavailable"))),r.a.createElement(M,{show:s,handleClose:function(){return m(!1)},getStock:a,stockName:p?t[o]:t.name,stockId:t._id,stockCount:t.count,onRequest:c}))};var Z=function(){var e=Object(i.f)(),t=Object(i.g)(),a=void 0!==t.state,l=a?t.state.personInfo:{},o=Object(n.useState)([]),c=Object(d.a)(o,2),u=c[0],s=c[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),h=f[0],p=f[1],g=Object(n.useState)(U[0]),b=Object(d.a)(g,2),k=b[0],C=b[1],S=Object(n.useState)([]),w=Object(d.a)(S,2),O=w[0],j=w[1];function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s([]),setTimeout((function(){x().then((function(e){s(e.data)})).catch((function(e){return p(!0)}))}),e)}function L(e){return e.charAt(0).toUpperCase()+e.slice(1)}function q(e){j(O.concat(e))}function F(){var e="";return O.forEach((function(t){e+=t.name+": "+t.requestedCount+", "})),e.slice(0,-2)}return Object(n.useEffect)((function(){a?(N(),console.log(l)):e.push("/order")}),[a,e,l]),r.a.createElement(y.a,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Select stock here"),O.map((function(e){return r.a.createElement("p",{key:e.name},e.name,": ",e.requestedCount)})),r.a.createElement(E.a,{variant:"type",className:"mb-3",onClick:function(){!function(e){v.apply(this,arguments)}({firstname:l.firstName,lastname:l.lastName,adults:l.adults,children:l.adults,zipcode:l.zipcode,"order-notes":F(),fulfilled:!1});var t=O.map((function(e){return console.log("making promise... ",e.countAfterRequest),A(e.id,{newCount:e.countAfterRequest})}));Promise.all(t).then((function(e){return console.log(e)})),e.push("/")},block:!0},"Submit request"),r.a.createElement(y.a,{style:{display:"flex",alignItems:"center",padding:0}},r.a.createElement(I.a,{variant:"type",onChange:function(e){return console.log(e)}},r.a.createElement(I.a.Toggle,{variant:"type",id:"dropdown-basic",size:"md",className:"mb-3",style:{backgroundColor:"green",color:"white"}},"Language: ",r.a.createElement("b",null,L(k))),r.a.createElement(I.a.Menu,null,U.map((function(e){return r.a.createElement(I.a.Item,{onSelect:function(e){return C(e)},eventKey:e,key:e},L(e))})))),r.a.createElement("div",{style:{margin:"auto"}}),r.a.createElement(E.a,{variant:"type",size:"md",onClick:N,style:{backgroundColor:"green",color:"white"}},"Refresh")),0===u.length&&!h&&r.a.createElement(_,null),u&&a&&u.map((function(e){return r.a.createElement(J,{stockItem:e,getStock:N,lang:"english"===k?"name":k,key:e._id,onRequest:q})})),h&&r.a.createElement("p",null,"Error"))},$=a(157),Q=a.n($);var X=function(e){var t=e.person,a=e.show,n=e.handleClose,l=e.fulfillPerson;return r.a.createElement(q.a,{show:a,onHide:n,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(q.a.Header,null,"Confirm fulfillment"),r.a.createElement(q.a.Body,null,r.a.createElement("h5",null,"Are you sure that ",t.firstname,"'s order is correct and has been fulfilled?"),r.a.createElement("p",null,t["order-notes"])),r.a.createElement(q.a.Footer,null,r.a.createElement(E.a,{variant:"secondary",onClick:n},"Close"),r.a.createElement(E.a,{variant:"success",onClick:function(){l(t._id),n()}},"Confirm fulfillment")))};var Y=function(e){var t=e.person,a=e.fulfillPerson,l=Object(n.useState)(!1),o=Object(d.a)(l,2),c=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{key:t._id,size:"lg",style:{margin:5}},r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Header,{as:"h2"},t.firstname," ",t.lastname),r.a.createElement(N.a.Text,null,t["order-notes"]),r.a.createElement(E.a,{variant:"success",onClick:function(){return i(!0)},block:!0},"Fulfill Order"))),r.a.createElement(X,{person:t,show:c,handleClose:function(){return i(!1)},fulfillPerson:a}))},ee=[];var te=function(){var e=Object(i.f)(),t=Object(n.useState)(ee),a=Object(d.a)(t,2),l=a[0],o=a[1],c=Q()("https://panlang.herokuapp.com/");function u(t){c.emit("personFulfilled",t),e.go(0)}return Object(n.useEffect)((function(){c.on("person",(function(t){console.log(t),e(t)}));var e=function(e){ee=ee.concat(e),o(ee)};return function(){console.log("effect done"),c.off("person",e)}}),[]),r.a.createElement(y.a,null,0===ee.length&&r.a.createElement(_,null),l&&l.map((function(e){return r.a.createElement(Y,{fulfillPerson:u,person:e,key:e._id})})))};var ae=function(){return r.a.createElement(c.a,{basename:"/panlang-ui"},r.a.createElement(m,{"\xe7":!0}),r.a.createElement("br",null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(k,null)),r.a.createElement(i.a,{path:"/stock"},r.a.createElement(W,null)),r.a.createElement(i.a,{path:"/order"},r.a.createElement(j,null)),r.a.createElement(i.a,{path:"/order-stock"},r.a.createElement(Z,null)),r.a.createElement(i.a,{path:"/sockettest"},r.a.createElement(te,null)),r.a.createElement(i.a,{path:"*"},r.a.createElement("h1",null,"Welcome to ",r.a.createElement("font",{style:{color:"#26B020"}},"Pan-Lang"),"!"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(222);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[161,1,2]]]);
//# sourceMappingURL=main.be0ee678.chunk.js.map