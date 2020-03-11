(this["webpackJsonphealth-record"]=this["webpackJsonphealth-record"]||[]).push([[15],{405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(363),l=a(23),o=a(35),i=a(357),s=a(196),u=a(272),m=a(267),p=a(8),d=a(50),h=a(7),f=a(263),b=a(240),E=a(265),g=Object(i.a)((function(e){return{root:{},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{color:h.a.blueGrey[800],padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightMedium},icon:{color:e.palette.icon,width:24,height:24,display:"flex",alignItems:"center",marginRight:e.spacing(1)},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium,"& $icon":{color:e.palette.primary.main}}}})),O=Object(n.forwardRef)((function(e,t){return r.a.createElement("div",{ref:t,style:{flexGrow:1}},r.a.createElement(d.b,e))})),j=function(e){var t=e.pages,a=e.className,n=Object(p.a)(e,["pages","className"]),c=g();return r.a.createElement(f.a,Object.assign({},n,{className:Object(o.a)(c.root,a)}),t.map((function(e){return r.a.createElement(b.a,{className:c.item,disableGutters:!0,key:e.title},r.a.createElement(E.a,{activeClassName:c.active,className:c.button,component:O,to:e.href},r.a.createElement("div",{className:c.icon},e.icon),e.title))})))},v=a(387),y=a.n(v),N=a(388),w=a.n(N),x=a(389),k=a.n(x),C=a(390),R=a.n(C),P=a(38),S=Object(i.a)((function(e){return{drawer:Object(l.a)({width:240},e.breakpoints.up("lg"),{marginTop:64,height:"calc(100% - 64px)"}),root:{backgroundColor:e.palette.white,display:"flex",flexDirection:"column",height:"100%",padding:e.spacing(2)},divider:{margin:e.spacing(2,0)},nav:{marginBottom:e.spacing(2)}}})),G=Object(P.b)((function(e){return{role:e.role}}))((function(e){var t=e.open,a=e.variant,n=e.onClose,c=e.className,l=e.role,i=S(),s=[{title:"Description",href:"".concat("/health-record","/description"),icon:r.a.createElement(y.a,null)},{title:"Patient's Record",href:"".concat("/health-record","/patientrecord"),icon:r.a.createElement(w.a,null)}],u=[{title:"Record",href:"".concat("/health-record","/record"),icon:r.a.createElement(k.a,null)},{title:"Patient's Record",href:"".concat("/health-record","/patientrecord"),icon:r.a.createElement(w.a,null)},{title:"Access List",href:"".concat("/health-record","/accesslist"),icon:r.a.createElement(R.a,null)}];return r.a.createElement(m.a,{anchor:"left",classes:{paper:i.drawer},onClose:n,open:t,variant:a},r.a.createElement("div",{className:Object(o.a)(i.root,c)},r.a.createElement(j,{className:i.nav,pages:"patient"===l?u:s})))})),T=a(269),z=a(270),B=a(283),W=a(273),L=a(392),M=a.n(L),D=a(391),J=a.n(D),A=Object(i.a)((function(e){return{root:{boxShadow:"none"},flexGrow:{flexGrow:1},signOutButton:{marginLeft:e.spacing(1),color:"white","&:hover":{color:"blue"}}}})),H=function(e){var t=e.className,a=e.onSidebarOpen,n=Object(p.a)(e,["className","onSidebarOpen"]),c=A();return r.a.createElement(T.a,Object.assign({},n,{className:Object(o.a)(c.root,t)}),r.a.createElement(z.a,null,r.a.createElement("p",null,"Health Record"),r.a.createElement("div",{className:c.flexGrow}),r.a.createElement(d.b,{to:"/logout",className:c.signOutButton},r.a.createElement(J.a,null)),r.a.createElement(B.a,{lgUp:!0},r.a.createElement(W.a,{color:"inherit",onClick:a},r.a.createElement(M.a,null)))))},I=Object(i.a)((function(e){return{root:Object(l.a)({paddingTop:56,height:"100%"},e.breakpoints.up("sm"),{paddingTop:64}),shiftContent:{paddingLeft:240},content:{height:"100%"}}})),U=function(e){var t,a=e.children,i=I(),m=Object(s.a)(),p=Object(u.a)(m.breakpoints.up("lg"),{defaultMatches:!0}),d=Object(n.useState)(!1),h=Object(c.a)(d,2),f=h[0],b=h[1],E=!!p||f;return r.a.createElement("div",{className:Object(o.a)((t={},Object(l.a)(t,i.root,!0),Object(l.a)(t,i.shiftContent,p),t))},r.a.createElement(H,{onSidebarOpen:function(){b(!0)}}),r.a.createElement(G,{onClose:function(){b(!1)},open:E,variant:p?"persistent":"temporary"}),r.a.createElement("main",{className:i.content},a))},$=a(22),q=a(210),F=a(211),K=r.a.lazy((function(){return Promise.all([a.e(0),a.e(9),a.e(12)]).then(a.bind(null,401))})),Q=r.a.lazy((function(){return Promise.all([a.e(0),a.e(7),a.e(14)]).then(a.bind(null,402))})),V=r.a.lazy((function(){return a.e(6).then(a.bind(null,403))})),X=r.a.lazy((function(){return Promise.all([a.e(0),a.e(10),a.e(13)]).then(a.bind(null,406))}));t.default=Object(P.b)((function(e){return{authRedirectPath:e.authRedirectPath,role:e.role}}))((function(e){var t=null;return t="patient"===e.role?r.a.createElement($.d,null,r.a.createElement($.b,{path:"/record",render:function(e){return r.a.createElement(V,e)}}),r.a.createElement($.b,{path:"/patientrecord",render:function(e){return r.a.createElement(K,e)}}),r.a.createElement($.b,{path:"/accesslist",render:function(e){return r.a.createElement(X,e)}}),r.a.createElement($.a,{to:"/record"})):r.a.createElement($.d,null,r.a.createElement($.b,{path:"/description",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement($.b,{path:"/patientrecord",render:function(e){return r.a.createElement(K,e)}}),r.a.createElement($.a,{to:"/description"})),r.a.createElement(U,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(q.a,{open:!0},r.a.createElement(F.a,{color:"secondary"}))},e.role?t:r.a.createElement($.a,{to:e.authRedirectPath})))}))}}]);
//# sourceMappingURL=15.a136909b.chunk.js.map