(this["webpackJsonptrello-study"]=this["webpackJsonptrello-study"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(13),a=n.n(o),r=n(31),l=n(22),s=n(15),d=function(){var e=new Date,t=e.getFullYear().toString(),n=e.getMonth()+1;n=n<10?"0"+n.toString():n.toString();var c=e.getDate();return t+"-"+n+"-"+(c=c<10?"0"+c.toString():c.toString())},u=[{WORK_LIST_ID:1,WORK_LIST_TITLE:"\uccab\ubc88\uc9f8 \ub9ac\uc2a4\ud2b8",WORK_LIST_ORD:1,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-02-04",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-02-04"},{WORK_LIST_ID:2,WORK_LIST_TITLE:"\ub450\ubc88\uc9f8 \ub9ac\uc2a4\ud2b8",WORK_LIST_ORD:1001,USE_YN:1,REG_ID:"\ubc30\ucc2c2",REG_DTIME:"2022-02-04",MOD_ID:"\ubc30\ucc2c2",MOD_DTIME:"2022-02-04"},{WORK_LIST_ID:3,WORK_LIST_TITLE:"\uc138\ubc88\uc9f8 \ub9ac\uc2a4\ud2b8",WORK_LIST_ORD:2001,USE_YN:1,REG_ID:"\ubc30\ucc2c3",REG_DTIME:"2022-03-13",MOD_ID:"\ubc30\ucc2c3",MOD_DTIME:"2022-03-13"}],j=[{CARD_ID:1,WORK_LIST_ID:1,CARD_TITLE:"\uccab\ubc88\uc9f8 \uce74\ub4dc",CARD_DESC:"\uccab\ubc88\uc9f8 \uce74\ub4dc \uc124\uba85",CARD_ORD:1,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-02-04",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-02-04"},{CARD_ID:2,WORK_LIST_ID:2,CARD_TITLE:"\ub450\ubc88\uc9f8 \uce74\ub4dc",CARD_DESC:"\ub450\ubc88\uc9f8 \uce74\ub4dc \uc124\uba85",CARD_ORD:1001,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-02-04",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-02-04"},{CARD_ID:3,WORK_LIST_ID:2,CARD_TITLE:"\uc138\ubc88\uc9f8 \uce74\ub4dc",CARD_DESC:"\uc138\ubc88\uc9f8 \uce74\ub4dc \uc124\uba85",CARD_ORD:2001,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-02-05",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-02-05"},{CARD_ID:4,WORK_LIST_ID:3,CARD_TITLE:"4\ubc88\uc9f8 \uce74\ub4dc",CARD_DESC:"4\ubc88\uc9f8 \uce74\ub4dc \uc124\uba85",CARD_ORD:3001,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-03-13",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-03-13"}],O={listLength:u.length};var b=Object(r.c)({listReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;if("addList"===t.type){var n=Object(s.a)(e);return n.push({WORK_LIST_ID:n[n.length-1].WORK_LIST_ID+1,WORK_LIST_TITLE:t.payload,WORK_LIST_ORD:n[n.length-1].WORK_LIST_ORD+1e3,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:d(),MOD_ID:"\ubc30\ucc2c",MOD_DTIME:d()}),console.log(n),n}if("updateListTitle"===t.type){var c=Object(s.a)(e);return c.forEach((function(e){e.WORK_LIST_ID===t.payload[1]&&(e.WORK_LIST_TITLE=t.payload[0],e.MOD_ID="\ubc30\ucc2c",e.MOD_DTIME=d())})),console.log(c),c}if("copyList"!==t.type){if("moveList"===t.type){var i=Object(s.a)(e),o="";return console.log("\uae30\ubcf8\uac12 :"+t.payload[0]),console.log("\ubcc0\uacbd\uac12 :"+t.payload[1]),i.forEach((function(e,n){console.log(n),i[n].WORK_LIST_ORD===t.payload[0]?(i[n].WORK_LIST_ORD=t.payload[1],console.log("\ubcc0\uacbd\uc804"),console.log(i[n])):i[n].WORK_LIST_ORD===t.payload[1]&&(i[n].WORK_LIST_ORD=t.payload[0],console.log("\ubcc0\uacbd\ud6c4"),console.log(i[n]))})),o=i[t.payload[0]-1],i[t.payload[0]-1]=i[t.payload[1]-1],i[t.payload[1]-1]=o,i}return e}var a=Object(s.a)(e),r="",l=0;a.forEach((function(e,n){e.WORK_LIST_ID===t.payload&&(r=e.WORK_LIST_TITLE,l=n+2)})),a.push({WORK_LIST_ID:a[a.length-1].WORK_LIST_ID+1,WORK_LIST_TITLE:r,WORK_LIST_ORD:l,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:d(),MOD_ID:"\ubc30\ucc2c",MOD_DTIME:d()})},cardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;if("addCard"===t.type){var n=Object(s.a)(e);return n.push({CARD_ID:n[n.length-1].CARD_ID+1,WORK_LIST_ID:t.payload[1],CARD_TITLE:t.payload[0],CARD_DESC:"\ucd94\uac00\ub41c \uce74\ub4dc \uc124\uba85",CARD_ORD:n[n.length-1].CARD_ORD+1,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:d(),MOD_ID:"\ubc30\ucc2c",MOD_DTIME:d()}),console.log(n),n}if("updateCardTitle"===t.type){var c=Object(s.a)(e),i=c[t.payload[1]-1];return i.CARD_TITLE=t.payload[0],i.MOD_ID="\ubc30\ucc2c",i.MOD_DTIME=d(),console.log(c),c}return e},infoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return e}}),p=(n(81),n(6)),_=n(34),I=n(91),D=n(156),h=n(159),x=n(87),T=n.n(x),R=n(42),g=n(11),f=n(163),E=n(166),C=n(168),v=n(169),S=n(164),y=n(54),L=n.n(y),m=n(1),M={card:{marginTop:"8px",marginBottom:"8px",whiteSpace:"normal"}},W=Object(g.a)(f.a)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),K=function(e){var t=e.children,n=e.onClose,c=Object(I.a)(e,["children","onClose"]);return Object(m.jsxs)(E.a,Object(_.a)(Object(_.a)({sx:{m:0,p:2}},c),{},{children:[t,n?Object(m.jsx)(S.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(m.jsx)(L.a,{})}):null]}))},A=function(e){var t=Object(c.useState)(!1),n=Object(p.a)(t,2),o=n[0],a=n[1],r=Object(c.useState)(e.cardInfo.CARD_TITLE),s=Object(p.a)(r,2),d=s[0],u=s[1],j=Object(c.useState)(!1),O=Object(p.a)(j,2),b=O[0],I=O[1],x=Object(l.c)(),g=function(){I(!1),d!==e.cardInfo.CARD_TITLE&&(console.log("\uce74\ub4dc \ud0c0\uc774\ud2c0 \uc218\uc815 dispatch \ubc1c\uc0dd"),x({type:"updateCardTitle",payload:[d,e.cardInfo.CARD_ID]}))},f=i.a.useState(!1),E=Object(p.a)(f,2),S=E[0],y=E[1],L=function(){y(!0)},A=function(){y(!1)},N=Object(c.useState)(!1),k=Object(p.a)(N,2),G=k[0],B=k[1],w=Object(c.useState)(!1),F=Object(p.a)(w,2),Y=F[0],U=F[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(R.b,{draggableId:String(e.cardInfo.CARD_ID),index:e.index,children:function(t){return Object(m.jsx)("div",Object(_.a)(Object(_.a)(Object(_.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:!1===b?Object(m.jsxs)(D.a,{style:M.card,onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},onClick:L,children:[Object(m.jsx)(h.a,{gutterBottom:!0,style:{display:"inline"},children:d}),!0===o&&Object(m.jsx)(T.a,{style:{float:"right",color:"#bbb"},onClick:function(e){I(!0),e.stopPropagation()}})]}):Object(m.jsxs)("div",{className:"addCardInput",children:[Object(m.jsx)("textarea",{onChange:function(e){u(e.target.value)},value:d,autoFocus:!0,onFocus:function(e){return e.currentTarget.select()}}),Object(m.jsx)("button",{onClick:g,children:"Save"}),Object(m.jsx)("button",{onClick:function(){I(!1),u(e.cardInfo.CARD_TITLE)},children:"Close"})]})}))}}),Object(m.jsxs)(W,{onClose:A,"aria-labelledby":"customized-dialog-title",open:S,fullWidth:!0,maxWidth:"md",children:[Object(m.jsx)(K,{id:"customized-dialog-title",onClose:A,children:d}),Object(m.jsx)(C.a,{dividers:!0,className:"dialogContent",children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"flex-container",children:[Object(m.jsx)("h3",{children:"Discription"}),!1===G?Object(m.jsx)("button",{style:{margin:"15px 5px"},onClick:function(){return B(!0)},children:"Edit"}):""]}),Object(m.jsx)("div",{children:!1===G?Object(m.jsx)("div",{className:"dialog-description-view",onClick:function(){return B(!0)},children:"Add a more detailed description..."}):Object(m.jsxs)("div",{children:[Object(m.jsx)("textarea",{className:"dialog-description-textarea",placeholder:"Add a more detailed description...",autoFocus:!0,onBlur:function(){return B(!1)}}),Object(m.jsx)("button",{children:"Save"})]})})]})}),Object(m.jsx)(C.a,{dividers:!0,className:"dialogContent",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"flex-container",children:Object(m.jsx)("h3",{children:"Activity"})}),Object(m.jsx)("div",{className:"dialog-activity-box",children:Object(m.jsx)("textarea",{className:"dialog-activity-textarea",placeholder:"Write a comment...",onInput:function(e){var t;""!=(t=e).currentTarget.value?U(!0):U(!1),t.currentTarget.style.height=t.currentTarget.scrollHeight+"px",t.currentTarget.parentElement.style.height=t.currentTarget.scrollHeight+"px"}})}),!0===Y?Object(m.jsx)("button",{children:"Save"}):Object(m.jsx)("button",{disabled:!0,style:{opacity:"0.5",cursor:"not-allowed"},children:"Save"})]})}),Object(m.jsx)(v.a,{})]})]})},N=n(89),k=n.n(N),G=n(165),B={container:{backgroundColor:"#ccc",borderRadius:3,width:250,padding:8,margin:8,display:"inline-block",verticalAlign:"top",cursor:"pointer"},list:{marginTop:"8px",marginBottom:"8px",clear:"both"},menuIcon:{float:"right",color:"#000",opacity:"0.5"},containerHeader:{float:"left",width:"85%"},popupContainer:{zIndex:"1",width:"200px",height:"300px",backgroundColor:"#eee",borderRadius:"3px",padding:"3px"},popupHeader:{textAlign:"center",borderBottom:"1px solid #ccc",padding:"10px"},popupBody:{borderBottom:"1px solid #ccc",padding:"10px"},selectBox:{width:"85px",height:"25px"}},w=function(e){var t=Object(l.d)((function(e){return e.listReducer})),n=Object(l.d)((function(e){return e.cardReducer})),o=Object(c.useState)(!1),a=Object(p.a)(o,2),r=a[0],s=a[1],d=Object(c.useState)(""),u=Object(p.a)(d,2),j=u[0],O=u[1],b=Object(c.useState)(!1),I=Object(p.a)(b,2),D=I[0],h=I[1],x=Object(c.useState)(t[e.index].WORK_LIST_TITLE),T=Object(p.a)(x,2),g=T[0],f=T[1],E=Object(c.useState)(!1),C=Object(p.a)(E,2),v=C[0],S=C[1],y=Object(c.useState)(null),M=Object(p.a)(y,2),W=M[0],K=M[1],N=function(e){K(e.currentTarget)},w=function(){K(null)},F=Boolean(W),Y=F?"simple-popover":void 0,U=Object(l.c)(),P=function(n){if("list"===n)h(!1),g!==e.listInfo.WORK_LIST_TITLE&&(console.log("list dispatch \ubc1c\uc0dd"),U({type:"updateListTitle",payload:[g,t[e.index].WORK_LIST_ID]}));else if("card"===n){if(""===j)return!1;s(!1),console.log("card dispatch \ubc1c\uc0dd"),U({type:"addCard",payload:[j,e.listInfo.WORK_LIST_ID]})}};return Object(c.useEffect)((function(){f(t[e.index].WORK_LIST_TITLE)}),[t]),Object(m.jsx)(R.c,{droppableId:String(e.listInfo.WORK_LIST_ID),children:function(c){return Object(m.jsxs)("div",Object(_.a)(Object(_.a)({style:B.container},c.droppableProps),{},{ref:c.innerRef,children:[!1===D?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:B.containerHeader,onClick:function(){return h(!0)},children:Object(m.jsx)("b",{children:t[e.index].WORK_LIST_TITLE})}),Object(m.jsx)(k.a,{className:"menuIcon",style:B.menuIcon,"aria-describedby":Y,variant:"contained",onClick:N}),Object(m.jsx)(G.a,{id:Y,open:F,anchorEl:W,onClose:w,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:!1===v?Object(m.jsxs)("div",{style:B.popupContainer,children:[Object(m.jsxs)("div",{style:B.popupHeader,children:["List actions",Object(m.jsx)(L.a,{onClick:w,style:{float:"right",cursor:"pointer"}})]}),Object(m.jsx)("div",{style:B.popupBody,className:"popupBody",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){s(!0),w()},children:"Add card..."}),Object(m.jsx)("li",{onClick:function(t){U({type:"copyList",payload:[e.listInfo.WORK_LIST_ID]}),w()},children:"Copy list..."}),Object(m.jsx)("li",{onClick:function(){S(!0)},children:"Move list..."})]})})]}):Object(m.jsxs)("div",{style:B.popupContainer,children:[Object(m.jsxs)("div",{style:B.popupHeader,children:["Move list",Object(m.jsx)(L.a,{onClick:function(){w(),setTimeout((function(){S(!1)}),500)},style:{float:"right",cursor:"pointer"}})]}),Object(m.jsxs)("div",{style:B.popupBody,className:"popupBody",children:[Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{children:"Position"}),Object(m.jsx)("div",{style:{flexGrow:"2"}}),Object(m.jsx)("select",{id:"selectPosition",style:B.selectBox,children:t.map((function(e,t){return Object(m.jsx)(i.a.Fragment,{children:Object(m.jsx)("option",{children:t+1})},t)}))})]}),Object(m.jsx)("button",{onClick:function(){U({type:"moveList",payload:[e.index+1,Number(document.getElementById("selectPosition").value)]}),w(),setTimeout((function(){S(!1)}),500)},children:"Move"})]})]})})]}):Object(m.jsx)("textarea",{className:"listTitleTextarea",value:g,onChange:function(e){return f(e.target.value)},onBlur:function(){return P("list")},autoFocus:!0,onFocus:function(e){return e.currentTarget.select()}}),Object(m.jsxs)("div",{style:B.list,children:[n.map((function(t,n){return Object(m.jsx)("div",{children:e.listInfo.WORK_LIST_ID===t.WORK_LIST_ID?Object(m.jsx)(A,{cardInfo:t,index:n}):null},n)})),!1===r?Object(m.jsx)("div",{className:"addCard",onClick:function(){s(!0)},children:"+ Add a card"}):Object(m.jsxs)("div",{className:"addCardInput",children:[Object(m.jsx)("textarea",{onChange:function(e){return O(e.target.value)},placeholder:"Enter a title for this card\u2026"}),Object(m.jsx)("button",{onClick:function(){return P("card")},children:"Add Card"}),Object(m.jsx)("button",{onClick:function(){s(!1)},children:"Close"})]})]}),c.placeholder]}))}})};var F=function(){var e=Object(l.d)((function(e){return e.listReducer})),t=Object(c.useState)(!1),n=Object(p.a)(t,2),i=n[0],o=n[1],a=Object(c.useState)(""),r=Object(p.a)(a,2),s=r[0],d=r[1],u=Object(l.c)();return Object(m.jsxs)("div",{className:"App",style:{whiteSpace:"nowrap"},children:[Object(m.jsx)("header",{}),Object(m.jsx)(R.a,{children:Object(m.jsxs)("div",{className:"Contents",children:[e.map((function(t,n){return Object(m.jsx)(w,{listInfo:e[n],index:n},n)})),!1===i?Object(m.jsx)("div",{className:"addList",onClick:function(){o(!0)},children:"+ Add another list"}):Object(m.jsxs)("div",{className:"addListInput",children:[Object(m.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},placeholder:"Enter list title..."}),Object(m.jsx)("button",{onClick:function(){if(""===s)return!1;u({type:"addList",payload:s}),o(!1),d(""),setTimeout((function(){window.scrollTo(5e4,0)}),0)},children:"Add list"}),Object(m.jsx)("button",{onClick:function(){o(!1),d("")},children:"Close"})]})]})})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))},U=Object(r.e)(b);a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(l.a,{store:U,children:Object(m.jsx)(F,{})})}),document.getElementById("root")),Y()},81:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.fdc9e926.chunk.js.map