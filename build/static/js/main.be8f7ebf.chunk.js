(this["webpackJsonphr-admin-system"]=this["webpackJsonphr-admin-system"]||[]).push([[0],{15:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(10),r=c.n(s),l=c(3),i=c(4),o=c.n(i),d=c(7),u="GET_LOGS",j="ADD_LOG",h="DELETE_LOG",b="SET_CURRENT",O="CLEAR_CURRENT",p="UPDATE_LOG",m="SET_LOADING",f="LOGS_ERROR",x="SEARCH_LOGS",g="GET_TECHS",v="ADD_TECH",y="DELETE_TECH",N="TECHS_ERROR",T=function(){return{type:m}},w=c(0),E=Object(l.b)(null,{searchLogs:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(c){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,T(),t.next=4,fetch("/logs?q=".concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:x,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:f,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs,c=Object(n.useRef)("");return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{style:{fontFamily:"Open Sans Condensed",display:"block",textAlign:"center"},children:"Welcome"}),Object(w.jsx)("nav",{style:{marginBottom:"30px"},className:"grey",children:Object(w.jsx)("div",{className:"nav-wrapper",children:Object(w.jsx)("form",{children:Object(w.jsxs)("div",{className:"input-field",children:[Object(w.jsx)("input",{id:"search",type:"search",placeholder:"Search Logs...",ref:c,onChange:function(e){t(c.current.value)}}),Object(w.jsx)("label",{className:"label-icon",htmlfor:"search",children:Object(w.jsx)("i",{className:"material-icons",children:"search"})}),Object(w.jsx)("i",{className:"material-icons",children:"close"})]})})})})]})})),L=c(17),k=c.n(L),C=c(5),S=c.n(C),D=Object(l.b)(null,{deleteLog:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,T(),t.next=4,fetch("/logs/".concat(e),{method:"DELETE"});case 4:c({type:h,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:f,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:b,payload:e}}})((function(e){var t=e.log,c=e.deleteLog,n=e.setCurrent;return Object(w.jsx)("li",{className:"collection-item",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return n(t)},children:t.message}),Object(w.jsx)("br",{}),Object(w.jsxs)("span",{className:"grey-text",children:[Object(w.jsxs)("span",{className:"black-text",children:["ID #",t.id]})," last updated by ","",Object(w.jsx)("span",{className:"black-text",children:t.tech})," on ",Object(w.jsx)(k.a,{format:"MMMM Do YYYY, h:mm:ss a",children:t.date})]}),Object(w.jsx)("a",{className:"secondary-content",href:"#!",onClick:function(){c(t.id),S.a.toast({html:"Log Deleted"})},children:Object(w.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),R=function(){return Object(w.jsx)("div",{className:"progress blue lighten-4",children:Object(w.jsx)("div",{className:"indeterminate blue"})})},_=(c(15),Object(l.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(d.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(),e.next=4,fetch("/logs");case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,t({type:u,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:f,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,c=t.logs,a=t.loading,s=e.getLogs;return Object(n.useEffect)((function(){s()}),[]),a||null===c?Object(w.jsx)(R,{}):Object(w.jsxs)("ul",{className:"collection with-header",children:[Object(w.jsx)("li",{className:"collection-header",children:Object(w.jsx)("h5",{className:"center",style:{fontFamily:"Open Sans Condensed"},children:"System Logs"})}),a||0!==c.length?c.map((function(e){return Object(w.jsx)(D,{log:e},e.id)})):Object(w.jsx)("p",{className:"center",children:"No Logs to show..."})]})}))),F=function(){return Object(w.jsxs)("div",{className:"fixed-action-btn",children:[Object(w.jsx)("a",{className:"btn-floating btn-large blue darken-2 modal-trigger",href:"#add-log-modal",children:Object(w.jsx)("i",{className:"large material-icons",children:"add"})}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)("a",{className:"btn-floating btn-large green modal-trigger",href:"#tech-list-modal",children:Object(w.jsx)("i",{className:"material-icons",children:"person"})})}),Object(w.jsx)("li",{children:Object(w.jsx)("a",{className:"btn-floating btn-large red modal-trigger",href:"#add-tech-modal",children:Object(w.jsx)("i",{className:"material-icons",children:"addperson"})})})]})]})},A=c(6),G=function(){return function(){var e=Object(d.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(),e.next=4,fetch("/techs");case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,t({type:g,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:N,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},P=function(){return{type:m}},M=Object(l.b)((function(e){return{tech:e.tech}}),{getTechs:G})((function(e){var t=e.getTechs,c=e.tech,a=c.techs,s=c.loading;return Object(n.useEffect)((function(){t()}),[]),!s&&null!==a&&a.map((function(e){return Object(w.jsxs)("option",{value:"".concat(e.firstName," ").concat(e.lastName),children:[e.firstName," ",e.lastName]},e.id)}))})),H={width:"75%",height:"75%"},I=Object(l.b)(null,{addLog:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(c){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,T(),t.next=4,fetch("/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:j,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:f,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLog,c=Object(n.useState)(""),a=Object(A.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)("false"),i=Object(A.a)(l,2),o=i[0],d=i[1],u=Object(n.useState)(""),j=Object(A.a)(u,2),h=j[0],b=j[1];return Object(w.jsxs)("div",{id:"add-log-modal",className:"modal",style:H,children:[Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsx)("h4",{children:"Enter System Log"}),Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"input-field",children:[Object(w.jsx)("input",{type:"text",name:"message",value:s,onChange:function(e){return r(e.target.value)}}),Object(w.jsx)("label",{htmlFor:"message",className:"active",children:"Log Message"})]})}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"input-field",children:Object(w.jsxs)("select",{name:"tech",value:h,className:"browser-default",onChange:function(e){return b(e.target.value)},children:[Object(w.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(w.jsx)(M,{})]})})}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"input-field",children:Object(w.jsx)("p",{children:Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"checkbox",className:"filled-in",checked:o,value:o,onChange:function(e){return d(!o)}}),Object(w.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(w.jsx)("div",{className:"modal-footer",children:Object(w.jsx)("a",{href:"#",onClick:function(){if(""===s||""===h)S.a.toast({html:"Please Enter a message and Tech"});else{var e={message:s,attention:o,tech:h,date:new Date};t(e),S.a.toast({html:"Log added by ".concat(h)}),r(""),b(""),d(!1)}},className:"modal-close waves-effect blue btn",children:"Enter"})})]})})),J={width:"75%",height:"75%"},U=Object(l.b)((function(e){return{current:e.log.current}}),{updateLog:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(c){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,T(),t.next=4,fetch("/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:p,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:f,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.current,c=e.updateLog,a=Object(n.useState)(""),s=Object(A.a)(a,2),r=s[0],l=s[1],i=Object(n.useState)("false"),o=Object(A.a)(i,2),d=o[0],u=o[1],j=Object(n.useState)(""),h=Object(A.a)(j,2),b=h[0],O=h[1];Object(n.useEffect)((function(){t&&(l(t.message),u(t.attention),O(t.Tech))}),[t]);return Object(w.jsxs)("div",{id:"edit-log-modal",className:"modal",style:J,children:[Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsx)("h4",{children:"Enter Task Log"}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"input-field",children:Object(w.jsx)("input",{type:"text",name:"message",value:r,onChange:function(e){return l(e.target.value)}})})}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"input-field",children:Object(w.jsxs)("select",{name:"tech",value:b,className:"browser-default",onChange:function(e){return O(e.target.value)},children:[Object(w.jsx)("option",{value:"",disabled:!0,children:"Select Technician"}),Object(w.jsx)(M,{})]})})}),Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"input-field",children:Object(w.jsx)("p",{children:Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"checkbox",className:"filled-in",checked:d,value:d,onChange:function(e){return u(!d)}}),Object(w.jsx)("span",{children:"Needs Attention"})]})})})})]}),Object(w.jsx)("div",{className:"modal-footer",children:Object(w.jsx)("a",{href:"#",onClick:function(){if(""===r||""===b)S.a.toast({html:"Please Enter a message and Tech"});else{var e={id:t.id,message:r,attention:d,tech:b,date:new Date};c(e),S.a.toast({html:"Log updated by ".concat(b)}),console.log(r,b,d),l(""),O(""),u(!1)}},className:"modal-close waves-effect blue btn",children:"Enter"})})]})})),Y=Object(l.b)(null,{addTech:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(c){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(),t.next=4,fetch("/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:v,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:N,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTech,c=Object(n.useState)(""),a=Object(A.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(""),i=Object(A.a)(l,2),o=i[0],d=i[1];return Object(w.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsx)("h4",{children:"New Technician"}),Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"input-field",children:[Object(w.jsx)("input",{type:"text",name:"firstName",value:s,onChange:function(e){return r(e.target.value)}}),Object(w.jsx)("label",{htmlFor:"firstName",className:"active",children:"First Name"})]})}),Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"input-field",children:[Object(w.jsx)("input",{type:"text",name:"lastName",value:o,onChange:function(e){return d(e.target.value)}}),Object(w.jsx)("label",{htmlFor:"lastName",className:"active",children:"Last Name"})]})})]}),Object(w.jsx)("div",{className:"modal-footer",children:Object(w.jsx)("a",{href:"#!",onClick:function(){""===s||""===o?S.a.toast({html:"Please Enter the first and last name"}):(t({firstName:s,lastName:o}),S.a.toast({html:"".concat(s," ").concat(o," was added as a Tech")}),r(""),d(""))},className:"modal-close waves-effect blue btn",children:"Enter"})})]})})),B=Object(l.b)(null,{deleteTech:function(e){return function(){var t=Object(d.a)(o.a.mark((function t(c){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,P(),t.next=4,fetch("/techs/".concat(e),{method:"DELETE"});case 4:c({type:y,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:N,payload:t.t0.response.statusText});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tech,c=t.id,n=t.firstName,a=t.lastName,s=e.deleteTech;return Object(w.jsx)("li",{className:"collection-item",children:Object(w.jsxs)("div",{children:[n," ",a,Object(w.jsx)("a",{href:"#!",className:"secondary-content",onClick:function(){s(c),S.a.toast({html:"Technician Deleted"})},children:Object(w.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),W=Object(l.b)((function(e){return{tech:e.tech}}),{getTechs:G})((function(e){var t=e.getTechs,c=e.tech,a=c.techs,s=c.loading;return Object(n.useEffect)((function(){t()}),[]),Object(w.jsx)("div",{id:"tech-list-modal",className:"modal",children:Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsx)("h4",{children:"Technician List"}),Object(w.jsx)("ul",{className:"collection",children:!s&&null!==a&&a.map((function(e){return Object(w.jsx)(B,{tech:e},e.id)}))})]})})})),q=c(8),z=c(18),K=c(19),Q=c(12),V=c(2),X={logs:null,current:null,loading:!1,error:null},Z={techs:null,loading:!1,error:null},$=Object(q.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(V.a)(Object(V.a)({},e),{},{logs:t.payload,loading:!1});case j:return Object(V.a)(Object(V.a)({},e),{},{logs:[].concat(Object(Q.a)(e.logs),[t.payload]),loading:!1});case h:return Object(V.a)(Object(V.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case p:return Object(V.a)(Object(V.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e}))});case x:return Object(V.a)(Object(V.a)({},e),{},{logs:t.payload});case b:return Object(V.a)(Object(V.a)({},e),{},{current:t.payload});case O:return Object(V.a)(Object(V.a)({},e),{},{current:null});case m:return Object(V.a)(Object(V.a)({},e),{},{loading:!0});case f:return Object(V.a)(Object(V.a)({},e),{},{error:t.payload});default:return e}},tech:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(V.a)(Object(V.a)({},e),{},{techs:t.payload,loading:!1});case v:return Object(V.a)(Object(V.a)({},e),{},{techs:[].concat(Object(Q.a)(e.techs),[t.payload]),loading:!1});case y:return Object(V.a)(Object(V.a)({},e),{},{techs:e.techs.filter((function(e){return e.id!==t.payload})),loading:!1});case m:return Object(V.a)(Object(V.a)({},e),{},{loading:!0});case N:return console.error(t.payload),Object(V.a)(Object(V.a)({},e),{},{error:t.payload,loading:!1});default:return e}}}),ee=[K.a],te=Object(q.createStore)($,{},Object(z.composeWithDevTools)(q.applyMiddleware.apply(void 0,ee)));c(35);var ce=function(){return Object(n.useEffect)((function(){S.a.AutoInit()})),Object(w.jsx)(l.a,{store:te,children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(E,{}),Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)(F,{}),Object(w.jsx)(I,{}),Object(w.jsx)(U,{}),Object(w.jsx)(Y,{}),Object(w.jsx)(W,{}),Object(w.jsx)(_,{})]})]})})},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(ce,{})}),document.getElementById("root")),ne()}},[[36,1,2]]]);
//# sourceMappingURL=main.be8f7ebf.chunk.js.map