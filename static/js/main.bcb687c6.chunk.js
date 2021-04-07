(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{55:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(20),s=r.n(n),i=r(17),j=r.n(i),l=r(19),o=r(9),u=r(61),d=r(59),b=r(60),p=r(57),O=r(34),h=(r(46),O.a.initializeApp({apiKey:"AIzaSyBA_D9d3nKXf42IP2SNOWYAuneHAV6aL1c",authDomain:"auth-development-b211d.firebaseapp.com",projectId:"auth-development-b211d",storageBucket:"auth-development-b211d.appspot.com",messagingSenderId:"335789698441",appId:"1:335789698441:web:8560d0161db0e801f88558"})),x=h.auth(),m=r(1),f=c.a.createContext();function v(){return Object(a.useContext)(f)}function w(e){var t=e.children,r=Object(a.useState)(),c=Object(o.a)(r,2),n=c[0],s=c[1],i=Object(a.useState)(!0),j=Object(o.a)(i,2),l=j[0],u=j[1];Object(a.useEffect)((function(){return x.onAuthStateChanged((function(e){s(e),u(!1)}))}),[]);var d={currentUser:n,login:function(e,t){return x.signInWithEmailAndPassword(e,t)},signup:function(e,t){return x.createUserWithEmailAndPassword(e,t)},logout:function(){return x.signOut()},resetPassword:function(e){return x.sendPasswordResetEmail(e)},updateEmail:function(e){return n.updateEmail(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(m.jsx)(f.Provider,{value:d,children:!l&&t})}var g=r(8),y=r(11);function S(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),c=v().signup,n=Object(a.useState)(""),s=Object(o.a)(n,2),i=s[0],O=s[1],h=Object(a.useState)(!1),x=Object(o.a)(h,2),f=x[0],w=x[1],S=Object(g.g)();function P(){return(P=Object(l.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),t.current.value===r.current.value){a.next=3;break}return a.abrupt("return",O("Passwords do not match"));case 3:return a.prev=3,O(""),w(!0),a.next=8,c(e.current.value,t.current.value);case 8:S.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),O("Failed to create an account");case 14:w(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(m.jsx)(d.a,{variant:"danger",children:i}),Object(m.jsxs)(b.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(m.jsxs)(b.a.Group,{id:"email",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsxs)(b.a.Group,{id:"password",children:[Object(m.jsx)(b.a.Label,{children:"Password"}),Object(m.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(m.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(m.jsx)(b.a.Control,{type:"password",ref:r,required:!0})]}),Object(m.jsx)(p.a,{disabled:f,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(m.jsx)(y.b,{to:"/login",children:"Log In"})]})]})}var P=r(58);function N(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),r=t[0],c=t[1],n=v(),s=n.currentUser,i=n.logout,b=Object(g.g)();function O(){return(O=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,i();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),r&&Object(m.jsx)(d.a,{variant:"danger",children:r}),Object(m.jsx)("strong",{children:"Email:"})," ",s.email,Object(m.jsx)(y.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(m.jsx)("div",{className:"w-100 text-center mt-2",children:Object(m.jsx)(p.a,{variant:"link",onClick:function(){return O.apply(this,arguments)},children:"Log Out"})})]})}function k(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=v().login,c=Object(a.useState)(""),n=Object(o.a)(c,2),s=n[0],i=n[1],O=Object(a.useState)(!1),h=Object(o.a)(O,2),x=h[0],f=h[1],w=Object(g.g)();function S(){return(S=Object(l.a)(j.a.mark((function a(c){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,i(""),f(!0),a.next=6,r(e.current.value,t.current.value);case 6:w.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),i("Failed to log in");case 12:f(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(m.jsx)(d.a,{variant:"danger",children:s}),Object(m.jsxs)(b.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(m.jsxs)(b.a.Group,{id:"email",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsxs)(b.a.Group,{id:"password",children:[Object(m.jsx)(b.a.Label,{children:"Password"}),Object(m.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsx)(p.a,{disabled:x,className:"w-100",type:"submit",children:"Log In"})]}),Object(m.jsx)("div",{className:"w-100 text-center mt-3",children:Object(m.jsx)(y.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(m.jsx)(y.b,{to:"/signup",children:"Sign Up"})]})]})}var C=r(24),L=r(39);function E(e){var t=e.component,r=Object(L.a)(e,["component"]),a=v().currentUser;return Object(m.jsx)(g.b,Object(C.a)(Object(C.a)({},r),{},{render:function(e){return a?Object(m.jsx)(t,Object(C.a)({},e)):Object(m.jsx)(g.a,{to:"/login"})}}))}function R(){var e=Object(a.useRef)(),t=v().resetPassword,r=Object(a.useState)(""),c=Object(o.a)(r,2),n=c[0],s=c[1],i=Object(a.useState)(""),O=Object(o.a)(i,2),h=O[0],x=O[1],f=Object(a.useState)(!1),w=Object(o.a)(f,2),g=w[0],S=w[1];function P(){return(P=Object(l.a)(j.a.mark((function r(a){return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,x(""),s(""),S(!0),r.next=7,t(e.current.value);case 7:x("Check your inbox for further instructions"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),s("Failed to reset password");case 13:S(!1);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),n&&Object(m.jsx)(d.a,{variant:"danger",children:n}),h&&Object(m.jsx)(d.a,{variant:"success",children:h}),Object(m.jsxs)(b.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(m.jsxs)(b.a.Group,{id:"email",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsx)(p.a,{disabled:g,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(m.jsx)("div",{className:"w-100 text-center mt-3",children:Object(m.jsx)(y.b,{to:"/login",children:"Login"})})]})}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(m.jsx)(y.b,{to:"/signup",children:"Sign Up"})]})]})}function U(){var e=Object(a.useRef)(),t=Object(a.useRef)(),r=Object(a.useRef)(),c=v(),n=c.currentUser,s=c.updatePassword,i=c.updateEmail,j=Object(a.useState)(""),l=Object(o.a)(j,2),O=l[0],h=l[1],x=Object(a.useState)(!1),f=Object(o.a)(x,2),w=f[0],S=f[1],P=Object(g.g)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{children:Object(m.jsxs)(u.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),O&&Object(m.jsx)(d.a,{variant:"danger",children:O}),Object(m.jsxs)(b.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==r.current.value)return h("Passwords do not match");var c=[];S(!0),h(""),e.current.value!==n.email&&c.push(i(e.current.value)),t.current.value&&c.push(s(t.current.value)),Promise.all(c).then((function(){P.push("/")})).catch((function(){h("Failed to update account")})).finally((function(){S(!1)}))},children:[Object(m.jsxs)(b.a.Group,{id:"email",children:[Object(m.jsx)(b.a.Label,{children:"Email"}),Object(m.jsx)(b.a.Control,{type:"email",ref:e,required:!0,defaultValue:n.email})]}),Object(m.jsxs)(b.a.Group,{id:"password",children:[Object(m.jsx)(b.a.Label,{children:"Password"}),Object(m.jsx)(b.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(m.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(m.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(m.jsx)(b.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})]}),Object(m.jsx)(p.a,{disabled:w,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(m.jsx)("div",{className:"w-100 text-center mt-2",children:Object(m.jsx)(y.b,{to:"/",children:"Cancel"})})]})}var F=function(){return Object(m.jsx)(P.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(m.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(m.jsx)(y.a,{children:Object(m.jsx)(w,{children:Object(m.jsxs)(g.d,{children:[Object(m.jsx)(E,{exact:!0,path:"/",component:N}),Object(m.jsx)(E,{path:"/update-profile",component:U}),Object(m.jsx)(g.b,{path:"/signup",component:S}),Object(m.jsx)(g.b,{path:"/login",component:k}),Object(m.jsx)(g.b,{path:"/forgot-password",component:R})]})})})})})};r(54);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.bcb687c6.chunk.js.map