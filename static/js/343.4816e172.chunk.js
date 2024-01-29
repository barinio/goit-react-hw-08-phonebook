"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[343],{7525:function(n,e,t){t.d(e,{II:function(){return u},OL:function(){return h},Yb:function(){return l},__:function(){return x}});var r,o,i,a,d=t(168),c=t(6487),s=t(5705),l=(0,c.ZP)(s.l0)(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  align-items: center;\n"]))),u=(0,c.ZP)(s.gN)(o||(o=(0,d.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  padding: 7px;\n  border: 3px solid #1035ac;\n  border-radius: 5px;\n"]))),x=c.ZP.label(i||(i=(0,d.Z)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  font-size: 21px;\n  color: #1035ac;\n  gap: 5px;\n\n  & p {\n    color: red;\n  }\n"]))),h=c.ZP.button(a||(a=(0,d.Z)(["\n  text-transform: uppercase;\n  font-size: 15px;\n  padding: 15px;\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: #1035ac;\n  color: white;\n  font-weight: 600;\n  box-shadow: rgba(0, 50, 255, 0.5) 0px 1px 8px;\n\n  &:is(:focus, :hover) {\n    background-color: #067038;\n  }\n"])))},9677:function(n,e,t){t.d(e,{$:function(){return d}});var r,o=t(168),i=t(6487).ZP.section(r||(r=(0,o.Z)(["\n  width: 450px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  border-radius: 7px;\n  box-shadow: inset #1035ac 0 0 7px;\n  background-image: linear-gradient(55deg, #00bfff, #00ffff);\n  background-color: #87cefa;\n  gap: 16px;\n\n  & h2 {\n    color: #1035ac;\n    text-align: center;\n  }\n  &:first-child {\n    margin: 25px auto;\n  }\n"]))),a=t(3329),d=function(n){var e=n.title,t=n.children;return(0,a.jsxs)(i,{children:[(0,a.jsx)("h2",{children:e}),t]})}},8343:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,o,i,a,d,c,s,l,u=t(9434),x=t(2791),h=t(8307),p=t(5705),m=t(5568),f=t(6727),b=t(1538),g=t(6916),j=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},Z=function(n){return n.item},v=function(n){return n.isOpenModal},y=(0,g.P1)([j,function(n){return n.filter}],(function(n,e){return n.filter((function(n){var t;return null===(t=n.name)||void 0===t?void 0:t.toLowerCase().includes(e.toLowerCase().trim())}))})),k=t(7525),_=t(3329),C=f.Ry().shape({name:f.Z_().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Not valid").required("Required"),number:f.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Not valid").required("Required")}),P=function(){var n=(0,u.v9)(j),e=(0,u.I0)(),t=function(e){var t=n.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}));if(t)return m.Am.error("".concat(t.name," is already in contacts")),!0};return(0,_.jsx)(p.J9,{initialValues:{name:"",number:""},validationSchema:C,onSubmit:function(n,r){r.resetForm(),t(n)||(m.Am.success("".concat(n.name," add to contacts.")),e((0,b.uK)(n)))},children:(0,_.jsxs)(k.Yb,{children:[(0,_.jsxs)(k.__,{children:["Name",(0,_.jsx)(k.II,{type:"text",name:"name",placeholder:"John"}),(0,_.jsx)(p.Bc,{name:"name",component:"p"})]}),(0,_.jsxs)(k.__,{children:["Number",(0,_.jsx)(k.II,{type:"tel",name:"number",placeholder:"123-45-67"}),(0,_.jsx)(p.Bc,{name:"number",component:"p"})]}),(0,_.jsx)(k.OL,{type:"submit",children:"Add contact"})]})})},z=t(9677),I=t(4808),A=t(168),L=t(6487),q=L.ZP.input(r||(r=(0,A.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  padding: 7px;\n  border: 3px solid #1035ac;\n  border-radius: 5px;\n"]))),N=L.ZP.label(o||(o=(0,A.Z)(["\n  display: flex;\n  font-size: 18px;\n  font-weight: 500;\n  align-items: center;\n  flex-direction: column;\n  gap: 5px;\n"]))),F=function(){var n=(0,u.I0)();return(0,_.jsxs)(N,{children:["Find contacts by name",(0,_.jsx)(q,{type:"text",onChange:function(e){return n((0,I.T)(e.target.value))}})]})},R=t(3206),S=L.ZP.table(i||(i=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),$=L.ZP.thead(a||(a=(0,A.Z)(["\n  margin-bottom: 16px;\n  & tr {\n    display: flex;\n    padding: 3px;\n    gap: 15px;\n\n    & th:nth-child(2) {\n      width: 200px;\n      word-wrap: break-word;\n    }\n    & th:nth-child(3) {\n      width: 150px;\n      word-wrap: break-word;\n    }\n    & th:nth-child(4) {\n      width: 70px;\n      word-wrap: break-word;\n    }\n    & th:not(:last-child) {\n      border-bottom: 3px solid #1035ac;\n    }\n    & th:nth-child(1) {\n      width: 24px;\n      border-bottom: none;\n    }\n  }\n"]))),B=L.ZP.tbody(d||(d=(0,A.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  text-align: center;\n"]))),J=L.ZP.tr(c||(c=(0,A.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3px;\n  gap: 15px;\n\n  & td {\n    padding-bottom: 5px;\n  }\n\n  & td:nth-child(2) {\n    width: 200px;\n    word-wrap: break-word;\n  }\n  & td:nth-child(3) {\n    width: 150px;\n    word-wrap: break-word;\n  }\n  & td:nth-child(4) {\n    & button {\n      text-transform: uppercase;\n      font-size: 15px;\n      padding: 3px;\n      border-radius: 5px;\n      cursor: pointer;\n      background-color: #ed2939;\n      color: white;\n      font-weight: 600;\n      &:is(:focus, :hover) {\n        color: white;\n        background-color: #b11226;\n      }\n    }\n  }\n  & td:not(:last-child) {\n    border-bottom: 3px dashed #1035ac;\n  }\n  & td:nth-child(1) {\n    width: 24px;\n    border-bottom: none;\n    padding-bottom: 0;\n  }\n"]))),O=t(9196),T=t(7294),Q=t(7605),Y=t(7450),K=L.ZP.h2(s||(s=(0,A.Z)(["\n  text-align: center;\n  margin-bottom: 25px;\n  color: #1035ac;\n"]))),U=f.Ry().shape({name:f.Z_().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Not valid").required("Required"),number:f.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Not valid").required("Required")}),V={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:" lightblue ",border:"0px solid #000",borderRadius:"10px",boxShadow:24,p:4},W=function(){var n=(0,u.I0)(),e=(0,u.v9)(Z),t=(0,u.v9)(v),r=function(){return n((0,Q.Q)(!1))};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(O.Z,{open:t,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,_.jsxs)(T.Z,{sx:V,children:[(0,_.jsx)(K,{children:"Update contact"}),(0,_.jsx)(p.J9,{initialValues:{name:e.name,number:e.number},validationSchema:U,onSubmit:function(t,o){o.resetForm();var i=e.id;n((0,Y.L)(t)),(0,m.Am)("\u2705Contact \xab".concat(e.name,"\xbb successfully changed to \xab").concat(t.name,"\xbb"),{autoClose:3e3}),n((0,b.Tk)({id:i,values:t})),r()},children:(0,_.jsxs)(k.Yb,{children:[(0,_.jsxs)(k.__,{children:[e.name,(0,_.jsx)(k.II,{type:"text",name:"name",placeholder:"John"}),(0,_.jsx)(p.Bc,{name:"name",component:"p"})]}),(0,_.jsxs)(k.__,{children:[e.number,(0,_.jsx)(k.II,{type:"tel",name:"number",placeholder:"123-45-67"}),(0,_.jsx)(p.Bc,{name:"number",component:"p"})]}),(0,_.jsx)(k.OL,{type:"submit",children:"Update contact"})]})})]})})})},D=function(){var n=(0,u.I0)(),e=(0,u.v9)(y);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(S,{children:[(0,_.jsx)($,{children:(0,_.jsxs)("tr",{children:[(0,_.jsx)("th",{}),(0,_.jsx)("th",{children:"Name"}),(0,_.jsx)("th",{children:"Phone"}),(0,_.jsx)("th",{})]})}),(0,_.jsx)(B,{children:e.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,_.jsxs)(J,{children:[(0,_.jsx)("td",{onClick:function(){return e={id:t,name:r,number:o},n((0,Y.L)(e)),void n((0,Q.Q)(!0));var e},children:(0,_.jsx)(R.$iz,{size:"24",color:"black"})}),(0,_.jsx)("td",{children:r}),(0,_.jsx)("td",{children:o}),(0,_.jsx)("td",{children:(0,_.jsx)("button",{type:"button",onClick:function(){return(0,m.Am)("\u274c Contact \xab".concat(r,"\xbb successfully deleted"),{autoClose:3e3}),n((0,b.GK)(t))},children:"Delete"})})]},t)}))})]}),(0,_.jsx)(W,{})]})},E=L.ZP.p(l||(l=(0,A.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n"]))),G=function(n){var e=n.message;return(0,_.jsx)(E,{children:e})},M=function(){var n=(0,u.v9)(j),e=(0,u.v9)(w),t=(0,u.I0)();return(0,x.useEffect)((function(){t((0,b.Qd)())}),[t]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(z.$,{title:"Phonebook",children:(0,_.jsx)(P,{})}),(0,_.jsxs)(z.$,{title:"Contacts",children:[null!==n&&void 0!==n&&n.length?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(F,{}),(0,_.jsx)(D,{})]}):(0,_.jsx)(G,{message:"There is no contacts!"}),e&&(0,_.jsx)(h.iT,{height:"50",width:"50",color:"violet",secondaryColor:"blue",strokeWidth:3,strokeWidthSecondary:3})]})]})}}}]);
//# sourceMappingURL=343.4816e172.chunk.js.map