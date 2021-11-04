(this.webpackJsonpgendac_product=this.webpackJsonpgendac_product||[]).push([[0],{48:function(e,t,c){},70:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(10),i=c.n(r),o=(c(47),c(48),c(6)),s=c(15),d=c.n(s),j=c(12),u=c(79),l=c(76),b=c(2),h=c(20),O=c.n(h),p=c(33),x=c(77),f=c(75),g=c(78),m=c(38),v=c(1),y=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(0),s=Object(o.a)(i,2),l=s[0],h=s[1],y=Object(n.useState)(0),P=Object(o.a)(y,2),C=P[0],S=P[1];Object(n.useEffect)((function(){fetch(e.url+"/"+e.productid).then((function(e){return e.json()})).then((function(e){r(e.Name),h(e.Price),S(e.Category)}))}),[e.productid]);var N=function(){var t=Object(p.a)(O.a.mark((function t(c){var n,r,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),!e.productid){t.next=9;break}return n=e.productid,r={Id:n,Name:a,Category:C,Price:l},t.next=6,d()({method:"put",url:e.url+"/"+e.productid,data:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((function(){j.b.success("Product Updated!",{onClose:function(){return window.location.reload()},theme:"dark"}),j.b.clearWaitingQueue()})).catch((function(e){j.b.error(e.response.data.Message)}));case 6:t.sent,t.next=13;break;case 9:return i={name:a,price:l,category:C},t.next=12,d()({method:"post",url:e.url,data:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((function(){j.b.success("Product added!",{onClose:function(){return window.location.reload()}})})).catch((function(e){e.response&&j.b.error(e.response.data.Message)}));case 12:t.sent;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)(x.a,Object(b.a)(Object(b.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(v.jsx)(x.a.Header,{closeButton:!0,children:Object(v.jsx)(x.a.Title,{id:"contained-modal-title-vcenter",children:e.addproduct?"Add a new product":"Edit Product Details"})}),Object(v.jsx)(x.a.Body,{children:Object(v.jsxs)("form",{onSubmit:N,children:[Object(v.jsxs)(f.a,{className:"mb-3",children:[Object(v.jsxs)(g.a.Group,{as:m.a,children:[Object(v.jsx)(g.a.Label,{children:"Name"}),Object(v.jsx)(g.a.Control,{className:"name",type:"text",placeholder:"Product name",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(v.jsxs)(g.a.Group,{as:m.a,children:[Object(v.jsx)(g.a.Label,{children:"Price"}),Object(v.jsx)(g.a.Control,{className:"formPrice",type:"number",placeholder:"Price",value:l,onChange:function(e){return h(e.target.value)}})]})]}),Object(v.jsx)(g.a.Label,{children:"Category"}),Object(v.jsxs)(g.a.Select,{"aria-label":"Default select example",className:"formCategory",value:C,onChange:function(e){return S(e.target.value)},children:[Object(v.jsx)("option",{children:"Please select a category"}),Object(v.jsx)("option",{value:"1",children:"1"}),Object(v.jsx)("option",{value:"2",children:"2"}),Object(v.jsx)("option",{value:"3",children:"3"})]}),Object(v.jsx)(u.a,{style:{marginTop:10},variant:"primary",type:"submit",children:"Submit"})]})}),Object(v.jsx)(x.a.Footer,{children:Object(v.jsx)(u.a,{variant:"danger",onClick:e.onHide,children:"Close"})})]}))},P=(c(70),c(71),c(39)),C=c.n(P);var S=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),s=i[0],b=i[1],h=Object(n.useState)(null),O=Object(o.a)(h,2),p=(O[0],O[1]),x=Object(n.useState)(!1),f=Object(o.a)(x,2),g=f[0],m=f[1],P=Object(n.useState)(!1),S=Object(o.a)(P,2),N=S[0],w=S[1],k=Object(n.useState)(!0),I=Object(o.a)(k,2),D=I[0],T=I[1],L=Object(n.useState)(1),E=Object(o.a)(L,2),A=E[0],B=E[1],F=Object(n.useState)(!1),z=Object(o.a)(F,2),G=z[0],J=(z[1],Object(n.useState)(0)),H=Object(o.a)(J,2),M=H[0],_=H[1],W="https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI";return Object(n.useEffect)((function(){fetch(W+"?page="+A+"&pageSize=50&ascending="+G).then((function(e){return e.json()})).then((function(e){m(!0),b(e.Results),_(e.TotalNumberOfPages)}),(function(e){m(!0),p(e)}))}),[A]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("h2",{id:"Product_bar",children:["Gendac Product List"," ",Object(v.jsx)(u.a,{variant:"success",onClick:function(){return T(!0),void w(!0)},children:"Add Product"})]}),Object(v.jsx)("br",{}),Object(v.jsxs)(l.a,{striped:!0,borded:!0,hover:!0,size:"sm",style:{marginTop:30},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"ID"}),Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Price"}),Object(v.jsx)("th",{children:"Category"}),Object(v.jsx)("th",{children:"Edit"}),Object(v.jsx)("th",{children:"Delete"})]})}),Object(v.jsx)("tbody",{children:g?s.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.Id}),Object(v.jsx)("td",{children:e.Name}),Object(v.jsx)("td",{children:e.Price}),Object(v.jsx)("td",{children:e.Category}),Object(v.jsx)("td",{children:Object(v.jsx)(u.a,{variant:"primary",onClick:function(){return t=e.Id,a(t),T(!1),void w(!0);var t},children:"Edit"})}),Object(v.jsx)("td",{children:Object(v.jsx)(u.a,{variant:"danger",onClick:function(){var t,c;t=e.Name,c=e.Id,d.a.delete("".concat(W,"/").concat(c)).then((function(e){C()({title:"Product Deleted!",text:"Product "+"".concat(c)+"\n Name: "+"".concat(t)+"\n Was successfully deleted!",icon:"success",buttons:"Great!"}).then((function(e){window.location.reload()}))}))},children:"Delete"})})]},t)})):"Loading..."})]}),Object(v.jsxs)("div",{style:{marginBottom:30},children:[Object(v.jsx)(u.a,{variant:"outline-primary",onClick:function(){B(1!=A?A-1:M)},children:"Previous Page"}),Object(v.jsx)(u.a,{variant:"outline-primary",onClick:function(){B(A!=M?A+1:1)},children:"Next Page"})," ",Object(v.jsxs)("div",{children:["Page ",A," of ",M]})]}),Object(v.jsx)(y,{addproduct:D,productid:c,show:N,url:W,onHide:function(){return w(!1)}}),Object(v.jsx)(j.a,{position:"top-right",autoClose:1500})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),N()}},[[73,1,2]]]);
//# sourceMappingURL=main.a3719f31.chunk.js.map