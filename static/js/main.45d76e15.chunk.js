(this["webpackJsonptrello-study"]=this["webpackJsonptrello-study"]||[]).push([[0],{18:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),i=n(13),a=n.n(i),_=n(15),d=n(6),o=n(17),D=function(){var t=new Date,e=t.getFullYear().toString(),n=t.getMonth()+1;n=n<10?"0"+n.toString():n.toString();var c=t.getDate();return e+"-"+n+"-"+(c=c<10?"0"+c.toString():c.toString())},l=[{WORK_LIST_ID:1,WORK_LIST_TITLE:"\uccab\ubc88\uc9f8 \ub9ac\uc2a4\ud2b8",WORK_LIST_ORD:1,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-02-04",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-02-04"},{WORK_LIST_ID:2,WORK_LIST_TITLE:"\ub450\ubc88\uc9f8 \ub9ac\uc2a4\ud2b8",WORK_LIST_ORD:2,USE_YN:1,REG_ID:"\ubc30\ucc2c2",REG_DTIME:"2022-02-04",MOD_ID:"\ubc30\ucc2c2",MOD_DTIME:"2022-02-04"}],s=[{CARD_ID:1,WORK_LIST_ID:1,CARD_TITLE:"\uccab\ubc88\uc9f8 \uce74\ub4dc",CARD_DESC:"\uccab\ubc88\uc9f8 \uce74\ub4dc \uc124\uba85",CARD_ORD:1,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-02-04",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-02-04"},{CARD_ID:2,WORK_LIST_ID:2,CARD_TITLE:"\ub450\ubc88\uc9f8 \uce74\ub4dc",CARD_DESC:"\ub450\ubc88\uc9f8 \uce74\ub4dc \uc124\uba85",CARD_ORD:1,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-02-04",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-02-04"},{CARD_ID:3,WORK_LIST_ID:2,CARD_TITLE:"\uc138\ubc88\uc9f8 \uce74\ub4dc",CARD_DESC:"\uc138\ubc88\uc9f8 \uce74\ub4dc \uc124\uba85",CARD_ORD:2,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:"2022-02-05",MOD_ID:"\ubc30\ucc2c",MOD_DTIME:"2022-02-05"}];var O=Object(_.a)({listReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;if("addList"===e.type){var n=Object(o.a)(t);return n.push({WORK_LIST_ID:n[n.length-1].WORK_LIST_ID+1,WORK_LIST_TITLE:e.payload,WORK_LIST_ORD:n[n.length-1].WORK_LIST_ORD+1,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:D(),MOD_ID:"\ubc30\ucc2c",MOD_DTIME:D()}),n}return t},cardReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;if("addCard"===e.type){var n=Object(o.a)(t);return n.push({CARD_ID:n[n.length-1].CARD_ID+1,WORK_LIST_ID:e.payload[1],CARD_TITLE:e.payload[0],CARD_DESC:"\ucd94\uac00\ub41c \uce74\ub4dc \uc124\uba85",CARD_ORD:n[n.length-1].CARD_ORD+1,USE_YN:1,REG_ID:"\ubc30\ucc2c",REG_DTIME:D(),MOD_ID:"\ubc30\ucc2c",MOD_DTIME:D()}),n}return t}}),I=(n(18),n(10)),u=n(46),j=n(47),R=n(2),T={card:{marginTop:"8px",marginBottom:"8px"}},b=function(t){return Object(R.jsx)(u.a,{style:T.card,children:Object(R.jsx)(j.a,{gutterBottom:!0,children:t.cardInfo.CARD_TITLE})})},E={container:{backgroundColor:"#ccc",borderRadius:3,width:250,padding:8,margin:8,display:"inline-block",verticalAlign:"top"},list:{marginTop:"8px",marginBottom:"8px"}},h=function(t){var e=Object(d.c)((function(t){return t.cardReducer})),n=Object(c.useState)(!1),r=Object(I.a)(n,2),i=r[0],a=r[1],_=Object(c.useState)(""),o=Object(I.a)(_,2),D=o[0],l=o[1],s=Object(d.b)();return Object(R.jsxs)("div",{style:E.container,children:[Object(R.jsx)("span",{children:Object(R.jsx)("b",{children:t.listInfo.WORK_LIST_TITLE})}),Object(R.jsxs)("div",{style:E.list,children:[e.map((function(n,c){return Object(R.jsx)(R.Fragment,{children:t.listInfo.WORK_LIST_ID===e[c].WORK_LIST_ID?Object(R.jsx)(b,{cardInfo:e[c]},c):null})})),!1===i?Object(R.jsx)("div",{className:"add_card",onClick:function(){a(!0)},children:"+ Add a card"}):Object(R.jsxs)("div",{className:"add_card_input",children:[Object(R.jsx)("textarea",{onChange:function(t){return l(t.target.value)},placeholder:"Enter a title for this card\u2026"}),Object(R.jsx)("button",{onClick:function(){if(""===D)return!1;s({type:"addCard",payload:[D,t.listInfo.WORK_LIST_ID]}),a(!1),l("")},children:"Add Card"}),Object(R.jsx)("button",{onClick:function(){a(!1),l("")},children:"\ub2eb\uae30"})]})]})]})};var S=function(){var t=Object(d.c)((function(t){return t.listReducer})),e=Object(c.useState)(!1),n=Object(I.a)(e,2),r=n[0],i=n[1],a=Object(c.useState)(""),_=Object(I.a)(a,2),o=_[0],D=_[1],l=Object(d.b)();return Object(R.jsxs)("div",{className:"App",style:{whiteSpace:"nowrap"},children:[Object(R.jsx)("header",{}),Object(R.jsxs)("div",{className:"Contents",children:[Object(R.jsx)("span",{children:t.map((function(t,e){return Object(R.jsx)(h,{listInfo:t},e)}))}),!1===r?Object(R.jsx)("div",{className:"add_list",onClick:function(){i(!0)},children:"+ Add another list"}):Object(R.jsxs)("div",{className:"add_list_input",children:[Object(R.jsx)("input",{type:"text",onChange:function(t){return D(t.target.value)},placeholder:"Enter list title..."}),Object(R.jsx)("button",{onClick:function(){if(""===o)return!1;l({type:"addList",payload:o}),i(!1),D(""),setTimeout((function(){window.scrollTo(5e4,0)}),0)},children:"Add list"}),Object(R.jsx)("button",{onClick:function(){i(!1),D("")},children:"\ub2eb\uae30"})]})]})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))},C=Object(_.b)(O);a.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(d.a,{store:C,children:Object(R.jsx)(S,{})})}),document.getElementById("root")),p()}},[[31,1,2]]]);
//# sourceMappingURL=main.45d76e15.chunk.js.map