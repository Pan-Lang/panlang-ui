(this["webpackJsonppanlang-ui"]=this["webpackJsonppanlang-ui"]||[]).push([[0],{54:function(e,t,a){e.exports=a(87)},59:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),o=(a(59),a(23)),u=a(6),i=a(38),m=a(32);var s=function(){return r.a.createElement(i.a,{bg:"light"},r.a.createElement(i.a.Brand,{as:o.b,to:"/"},"PanLang"),r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(m.a.Link,{as:o.b,to:"/order"},"Order"),r.a.createElement(m.a.Link,{as:o.b,to:"/stock"},"Stock")))},E=a(22);var g=function(){return r.a.createElement(E.a,null,r.a.createElement("h1",null,"Welcome to PanLang!"))};var h=function(){return r.a.createElement(E.a,null,r.a.createElement("h1",null,"Order"),r.a.createElement("p",null,"This is gonna be an order form in the future"))},p=a(24),f=a(28),d=a(53),b=a(50),v=a(25);var k=function(e){var t=e.stockItem,a=e.lang,l=void 0===a?"name":a,c=Object(n.useState)(!1),o=Object(p.a)(c,2),u=o[0],i=o[1];return Object(n.useEffect)((function(){i(void 0!==t[l])}),[l,t]),r.a.createElement(v.a,{style:{margin:5}},r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,u?t[l]:t.name),r.a.createElement(v.a.Text,null,"Amount: ",t.count),r.a.createElement(v.a.Text,{style:{textAlign:"right"}},"Last updated:"," ",void 0!==t.timestamp?new Date(t.timestamp).toDateString():"Unavailable"),!u&&r.a.createElement(b.a,{variant:"danger"},"Language unavailable: ",l)))},O=a(37),w=a.n(O),j=a(51),y=a(52),S=a.n(y);function L(){return(L=Object(j.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://panlang.herokuapp.com/stock");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=["english","spanish","french","mandarin"];var T=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(p.a)(c,2),u=o[0],i=o[1],m=Object(n.useState)(x[0]),s=Object(p.a)(m,2),g=s[0],h=s[1];return Object(n.useEffect)((function(){(function(){return L.apply(this,arguments)})().then((function(e){l(e.data)})).catch((function(e){return i(!0)}))}),[]),r.a.createElement(E.a,null,r.a.createElement("h1",null,"Stock"),r.a.createElement(f.a,{onChange:function(e){return console.log(e)}},r.a.createElement(f.a.Toggle,{id:"dropdown-basic",size:"lg"},"Language: ",g),r.a.createElement(f.a.Menu,null,x.map((function(e){return r.a.createElement(f.a.Item,{onSelect:function(e){return h(e)},eventKey:e,key:e},e)})))),0===a.length&&r.a.createElement(d.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),a&&a.map((function(e){return r.a.createElement(k,{stockItem:e,lang:"english"===g?"name":g,key:e._id})})),u&&r.a.createElement("p",null,"Error :("))};var B=function(){return r.a.createElement(o.a,{basename:"/panlang-ui"},r.a.createElement(s,{"\xe7":!0}),r.a.createElement("br",null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(u.a,{path:"/stock"},r.a.createElement(T,null)),r.a.createElement(u.a,{path:"/order"},r.a.createElement(h,null)),r.a.createElement(u.a,{path:"*"},r.a.createElement("h1",null,"404"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.ce89a04f.chunk.js.map