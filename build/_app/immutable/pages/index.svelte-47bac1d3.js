import{S as J,i as K,s as Q,l as x,u as P,m as $,p as I,v as F,h as p,q as l,b as T,G as c,n as L,a as k,c as D,F as C,w as Y,e as ee,L as q,f as H,g as me,t as j,d as de,M as se,x as A,y as B,z,N as ae,O as he,P as _e,C as R,Q as pe}from"../chunks/index-e7d4872c.js";function ve(o){let e,t,r;return{c(){e=x("div"),t=x("h1"),r=P("Designed an developed by Cesar Velasco"),this.h()},l(a){e=$(a,"DIV",{class:!0});var u=I(e);t=$(u,"H1",{class:!0});var s=I(t);r=F(s,"Designed an developed by Cesar Velasco"),s.forEach(p),u.forEach(p),this.h()},h(){l(t,"class","mx-4 text-3xl text-dark-blue text-center m-auto"),l(e,"class","m-auto w-1/2 mt-20")},m(a,u){T(a,e,u),c(e,t),c(t,r)},p:L,i:L,o:L,d(a){a&&p(e)}}}class ge extends J{constructor(e){super(),K(this,e,null,ve,Q,{})}}function xe(o){const e=o-1;return e*e*e+1}function te(o,{delay:e=0,duration:t=400,easing:r=xe,x:a=0,y:u=0,opacity:s=0}={}){const i=getComputedStyle(o),n=+i.opacity,g=i.transform==="none"?"":i.transform,f=n*(1-s);return{delay:e,duration:t,easing:r,css:(m,_)=>`
			transform: ${g} translate(${(1-m)*a}px, ${(1-m)*u}px);
			opacity: ${n-f*_}`}}function $e(o){let e,t,r,a,u,s,i,n=o[0].place+"",g,f,m,_=o[0].degree+"",d,b,h,w=o[0].location+"",v,V,E,S=o[0].date+"",y;return{c(){e=x("div"),t=x("div"),r=x("img"),u=k(),s=x("div"),i=x("h1"),g=P(n),f=k(),m=x("h1"),d=P(_),b=k(),h=x("h1"),v=P(w),V=k(),E=x("h1"),y=P(S),this.h()},l(G){e=$(G,"DIV",{class:!0});var M=I(e);t=$(M,"DIV",{class:!0});var U=I(t);r=$(U,"IMG",{class:!0,src:!0,alt:!0,href:!0}),u=D(U),s=$(U,"DIV",{class:!0});var N=I(s);i=$(N,"H1",{class:!0});var W=I(i);g=F(W,n),W.forEach(p),f=D(N),m=$(N,"H1",{class:!0});var X=I(m);d=F(X,_),X.forEach(p),b=D(N),h=$(N,"H1",{class:!0});var Z=I(h);v=F(Z,w),Z.forEach(p),V=D(N),E=$(N,"H1",{class:!0});var O=I(E);y=F(O,S),O.forEach(p),N.forEach(p),U.forEach(p),M.forEach(p),this.h()},h(){l(r,"class","h-[60px] "),C(r.src,a="images/Book.png")||l(r,"src",a),l(r,"alt","Book"),l(r,"href","/"),l(i,"class","text-5xl text-dark-blue mb-2 m-auto"),l(m,"class","text-3xl text-center text-dark-blue mb-2 max-w-lg m-auto"),l(h,"class","text-2xl text-center text-dark-blue mb-2 max-w-lg m-auto"),l(E,"class","text-2xl text-center text-dark-blue mb-2 max-w-lg m-auto"),l(s,"class",""),l(t,"class","flex flex-row-reverse items-center justify-start"),l(e,"class","w-4/5 m-auto mt-7 flex justify-end")},m(G,M){T(G,e,M),c(e,t),c(t,r),c(t,u),c(t,s),c(s,i),c(i,g),c(s,f),c(s,m),c(m,d),c(s,b),c(s,h),c(h,v),c(s,V),c(s,E),c(E,y)},p(G,[M]){M&1&&n!==(n=G[0].place+"")&&Y(g,n),M&1&&_!==(_=G[0].degree+"")&&Y(d,_),M&1&&w!==(w=G[0].location+"")&&Y(v,w),M&1&&S!==(S=G[0].date+"")&&Y(y,S)},i:L,o:L,d(G){G&&p(e)}}}function be(o,e,t){let{ed:r}=e;return console.log(r),o.$$set=a=>{"ed"in a&&t(0,r=a.ed)},[r]}class we extends J{constructor(e){super(),K(this,e,be,$e,Q,{ed:0})}}const Ie=[{place:"Universidad Nacional de Colombia",degree:"Bachelor of software engineering and computer science",location:"Bogot\xE1, Colombia",date:"2016-2021"}];function ne(o){let e,t,r,a,u;return t=new we({props:{ed:Ie[0]}}),{c(){e=x("div"),A(t.$$.fragment)},l(s){e=$(s,"DIV",{});var i=I(e);B(t.$$.fragment,i),i.forEach(p)},m(s,i){T(s,e,i),z(t,e,null),u=!0},p:L,i(s){u||(H(t.$$.fragment,s),ae(()=>{a&&a.end(1),r=he(e,te,{y:-100}),r.start()}),u=!0)},o(s){j(t.$$.fragment,s),r&&r.invalidate(),a=_e(e,te,{y:-100}),u=!1},d(s){s&&p(e),R(t),s&&a&&a.end()}}}function Ee(o){let e,t,r,a,u,s,i,n,g,f=o[1]&&ne();return{c(){e=x("div"),t=x("div"),r=x("img"),u=k(),f&&f.c(),s=ee(),this.h()},l(m){e=$(m,"DIV",{class:!0});var _=I(e);t=$(_,"DIV",{class:!0});var d=I(t);r=$(d,"IMG",{width:!0,src:!0,alt:!0,href:!0}),d.forEach(p),_.forEach(p),u=D(m),f&&f.l(m),s=ee(),this.h()},h(){l(r,"width",o[0]),C(r.src,a="images/Education.png")||l(r,"src",a),l(r,"alt","Education title"),l(r,"href","/"),l(t,"class","bg-main-grey w-2/5 h-[150px] cursor-pointer flex justify-center items-center rounded-l-full animate__animated animate__fadeInRightBig"),l(e,"class","flex justify-end")},m(m,_){T(m,e,_),c(e,t),c(t,r),T(m,u,_),f&&f.m(m,_),T(m,s,_),i=!0,n||(g=[q(t,"click",o[2]),q(t,"mouseleave",o[3]),q(t,"mouseenter",o[4])],n=!0)},p(m,[_]){(!i||_&1)&&l(r,"width",m[0]),m[1]?f?(f.p(m,_),_&2&&H(f,1)):(f=ne(),f.c(),H(f,1),f.m(s.parentNode,s)):f&&(me(),j(f,1,1,()=>{f=null}),de())},i(m){i||(H(f),i=!0)},o(m){j(f),i=!1},d(m){m&&p(e),m&&p(u),f&&f.d(m),m&&p(s),n=!1,se(g)}}}function ke(o,e,t){let r="80%",a=!1;return[r,a,n=>{t(1,a=!a)},n=>{t(0,r="80%")},n=>{t(0,r="90%")}]}class De extends J{constructor(e){super(),K(this,e,ke,Ee,Q,{})}}function Ve(o){let e,t,r,a,u,s;return{c(){e=x("div"),t=x("img"),a=k(),u=x("p"),s=P(o[0]),this.h()},l(i){e=$(i,"DIV",{class:!0});var n=I(e);t=$(n,"IMG",{class:!0,src:!0,alt:!0,href:!0}),a=D(n),u=$(n,"P",{class:!0});var g=I(u);s=F(g,o[0]),g.forEach(p),n.forEach(p),this.h()},h(){l(t,"class","h-[35px] "),C(t.src,r="images/Circle.png")||l(t,"src",r),l(t,"alt","circle"),l(t,"href","/"),l(u,"class","text-3xl text-dark-blue ml-[1%]"),l(e,"class","flex flex-row items-center justify-start mt-2")},m(i,n){T(i,e,n),c(e,t),c(e,a),c(e,u),c(u,s)},p(i,[n]){n&1&&Y(s,i[0])},i:L,o:L,d(i){i&&p(e)}}}function ye(o,e,t){let{exText:r}=e;return o.$$set=a=>{"exText"in a&&t(0,r=a.exText)},[r]}class re extends J{constructor(e){super(),K(this,e,ye,Ve,Q,{exText:0})}}function Ge(o){let e,t,r,a,u,s,i=o[0].title+"",n,g,f,m,_,d,b,h,w;return m=new re({props:{exText:o[0].exp[0]}}),d=new re({props:{exText:o[0].exp[1]}}),h=new re({props:{exText:o[0].exp[2]}}),{c(){e=x("div"),t=x("div"),r=x("img"),u=k(),s=x("h1"),n=P(i),g=k(),f=x("div"),A(m.$$.fragment),_=k(),A(d.$$.fragment),b=k(),A(h.$$.fragment),this.h()},l(v){e=$(v,"DIV",{class:!0});var V=I(e);t=$(V,"DIV",{class:!0});var E=I(t);r=$(E,"IMG",{class:!0,src:!0,alt:!0,href:!0}),u=D(E),s=$(E,"H1",{class:!0});var S=I(s);n=F(S,i),S.forEach(p),E.forEach(p),g=D(V),f=$(V,"DIV",{class:!0});var y=I(f);B(m.$$.fragment,y),_=D(y),B(d.$$.fragment,y),b=D(y),B(h.$$.fragment,y),y.forEach(p),V.forEach(p),this.h()},h(){l(r,"class","h-[60px] "),C(r.src,a="images/Arrow.png")||l(r,"src",a),l(r,"alt","arrow"),l(r,"href","/"),l(s,"class","text-5xl text-dark-blue mb-2"),l(t,"class","flex flex-row items-center justify-start"),l(f,"class","ml-[5%] mt-5"),l(e,"class","w-4/5 m-auto mt-7")},m(v,V){T(v,e,V),c(e,t),c(t,r),c(t,u),c(t,s),c(s,n),c(e,g),c(e,f),z(m,f,null),c(f,_),z(d,f,null),c(f,b),z(h,f,null),w=!0},p(v,[V]){(!w||V&1)&&i!==(i=v[0].title+"")&&Y(n,i);const E={};V&1&&(E.exText=v[0].exp[0]),m.$set(E);const S={};V&1&&(S.exText=v[0].exp[1]),d.$set(S);const y={};V&1&&(y.exText=v[0].exp[2]),h.$set(y)},i(v){w||(H(m.$$.fragment,v),H(d.$$.fragment,v),H(h.$$.fragment,v),w=!0)},o(v){j(m.$$.fragment,v),j(d.$$.fragment,v),j(h.$$.fragment,v),w=!1},d(v){v&&p(e),R(m),R(d),R(h)}}}function Te(o,e,t){let{xp:r}=e;return console.log(r),o.$$set=a=>{"xp"in a&&t(0,r=a.xp)},[r]}class ce extends J{constructor(e){super(),K(this,e,Te,Ge,Q,{xp:0})}}const Me=[{title:"Akimad/freelance",exp:["Web app development, digital magazine in react/NextJS.","admin site development, to control some aspect of the web app, development of the frontend and backend.","development of an native app for IOS and Android devices."]},{title:"Koncilia S.A.S",exp:["Development of APIs using the .NET core framework, for payments and retrieve clients information, like bank accounts and bank receipts for the bank reconciliation process.","Develpment of frontend using Blazor an WebAssembly framework for C# web applications.","Helping in different maintenance tasks and meetings with clients."]}],oe={experience:Me};function fe(o){let e,t,r,a,u;return{c(){e=x("div"),t=x("img"),this.h()},l(s){e=$(s,"DIV",{class:!0});var i=I(e);t=$(i,"IMG",{width:!0,src:!0,alt:!0,href:!0}),i.forEach(p),this.h()},h(){l(t,"width",o[0]),C(t.src,r="images/Experience.png")||l(t,"src",r),l(t,"alt","Experience title"),l(t,"href","/"),l(e,"class","bg-main-grey w-2/5 h-[150px] cursor-pointer flex justify-center items-center rounded-r-full animate__animated animate__fadeInLeftBig")},m(s,i){T(s,e,i),c(e,t),a||(u=[q(e,"click",o[4]),q(e,"mouseleave",o[5]),q(e,"mouseenter",o[6])],a=!0)},p(s,i){i&1&&l(t,"width",s[0])},d(s){s&&p(e),a=!1,se(u)}}}function ue(o){let e,t,r,a,u,s,i;return t=new ce({props:{xp:oe.experience[0]}}),a=new ce({props:{xp:oe.experience[1]}}),{c(){e=x("div"),A(t.$$.fragment),r=k(),A(a.$$.fragment)},l(n){e=$(n,"DIV",{});var g=I(e);B(t.$$.fragment,g),r=D(g),B(a.$$.fragment,g),g.forEach(p)},m(n,g){T(n,e,g),z(t,e,null),c(e,r),z(a,e,null),i=!0},p:L,i(n){i||(H(t.$$.fragment,n),H(a.$$.fragment,n),ae(()=>{s&&s.end(1),u=he(e,te,{y:-100}),u.start()}),i=!0)},o(n){j(t.$$.fragment,n),j(a.$$.fragment,n),u&&u.invalidate(),s=_e(e,te,{y:-100}),i=!1},d(n){n&&p(e),R(t),R(a),n&&s&&s.end()}}}function Se(o){let e=!1,t=()=>{e=!1},r,a,u,s,i,n,g,f,m;ae(o[3]);let _=o[2]>65&&fe(o),d=o[1]&&ue();return{c(){a=x("h2"),u=P(o[2]),s=k(),_&&_.c(),i=k(),d&&d.c(),n=ee()},l(b){a=$(b,"H2",{});var h=I(a);u=F(h,o[2]),h.forEach(p),s=D(b),_&&_.l(b),i=D(b),d&&d.l(b),n=ee()},m(b,h){T(b,a,h),c(a,u),T(b,s,h),_&&_.m(b,h),T(b,i,h),d&&d.m(b,h),T(b,n,h),g=!0,f||(m=q(window,"scroll",()=>{e=!0,clearTimeout(r),r=setTimeout(t,100),o[3]()}),f=!0)},p(b,[h]){h&4&&!e&&(e=!0,clearTimeout(r),scrollTo(window.pageXOffset,b[2]),r=setTimeout(t,100)),(!g||h&4)&&Y(u,b[2]),b[2]>65?_?_.p(b,h):(_=fe(b),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null),b[1]?d?(d.p(b,h),h&2&&H(d,1)):(d=ue(),d.c(),H(d,1),d.m(n.parentNode,n)):d&&(me(),j(d,1,1,()=>{d=null}),de())},i(b){g||(H(d),g=!0)},o(b){j(d),g=!1},d(b){b&&p(a),b&&p(s),_&&_.d(b),b&&p(i),d&&d.d(b),b&&p(n),f=!1,m()}}}function He(o,e,t){let r="80%",a=!1,u;function s(){t(2,u=window.pageYOffset)}return[r,a,u,s,f=>{t(1,a=!a)},f=>{t(0,r="80%")},f=>{t(0,r="90%")}]}class Ce extends J{constructor(e){super(),K(this,e,He,Se,Q,{})}}function je(o){let e,t,r,a,u,s,i,n,g,f,m,_,d,b;return{c(){e=x("div"),t=k(),r=x("div"),a=x("img"),s=k(),i=x("div"),n=x("img"),f=k(),m=x("img"),this.h()},l(h){e=$(h,"DIV",{}),I(e).forEach(p),t=D(h),r=$(h,"DIV",{class:!0});var w=I(r);a=$(w,"IMG",{class:!0,src:!0,alt:!0,href:!0}),s=D(w),i=$(w,"DIV",{class:!0});var v=I(i);n=$(v,"IMG",{class:!0,src:!0,alt:!0,href:!0}),f=D(v),m=$(v,"IMG",{class:!0,src:!0,alt:!0,href:!0}),v.forEach(p),w.forEach(p),this.h()},h(){l(a,"class","h-[70px] m-auto"),C(a.src,u="images/Socials.png")||l(a,"src",u),l(a,"alt","Socials title"),l(a,"href","/"),l(n,"class","h-[60px] cursor-pointer"),C(n.src,g=o[0])||l(n,"src",g),l(n,"alt","ghcoin"),l(n,"href","/"),l(m,"class","h-[60px] cursor-pointer"),C(m.src,_=o[1])||l(m,"src",_),l(m,"alt","lncoin"),l(m,"href","/"),l(i,"class","flex flex-row w-2/6 justify-around m-auto mt-5"),l(r,"class","w-3/4 m-auto mt-6")},m(h,w){T(h,e,w),T(h,t,w),T(h,r,w),c(r,a),c(r,s),c(r,i),c(i,n),c(i,f),c(i,m),d||(b=[q(n,"mouseenter",o[2]),q(n,"mouseleave",o[3]),q(m,"mouseenter",o[4]),q(m,"mouseleave",o[5])],d=!0)},p(h,[w]){w&1&&!C(n.src,g=h[0])&&l(n,"src",g),w&2&&!C(m.src,_=h[1])&&l(m,"src",_)},i:L,o:L,d(h){h&&p(e),h&&p(t),h&&p(r),d=!1,se(b)}}}function Le(o,e,t){let r="images/Githubcoin1.png",a="images/Linkedincoin1.png";function u(g){t(0,r="images/Githubcoin.gif")}function s(g){t(0,r="images/Githubcoin1.png")}function i(g){t(1,a="images/Linkedincoin.gif")}function n(g){t(1,a="images/Linkedincoin1.png")}return[r,a,u,s,i,n]}class Ne extends J{constructor(e){super(),K(this,e,Le,je,Q,{})}}function Oe(o){let e,t,r,a,u,s,i,n,g,f,m,_,d,b,h,w,v,V,E,S,y,G,M,U;return{c(){e=x("div"),t=x("div"),r=x("h1"),a=P("Hi! Im"),u=k(),s=x("div"),i=x("img"),g=k(),f=x("img"),_=k(),d=x("img"),h=k(),w=x("img"),V=k(),E=x("img"),y=k(),G=x("div"),M=x("h1"),U=P("Software engineer"),this.h()},l(N){e=$(N,"DIV",{class:!0});var W=I(e);t=$(W,"DIV",{class:!0});var X=I(t);r=$(X,"H1",{class:!0});var Z=I(r);a=F(Z,"Hi! Im"),Z.forEach(p),u=D(X),s=$(X,"DIV",{class:!0});var O=I(s);i=$(O,"IMG",{class:!0,src:!0,alt:!0,href:!0}),g=D(O),f=$(O,"IMG",{class:!0,src:!0,alt:!0,href:!0}),_=D(O),d=$(O,"IMG",{class:!0,src:!0,alt:!0,href:!0}),h=D(O),w=$(O,"IMG",{class:!0,src:!0,alt:!0,href:!0}),V=D(O),E=$(O,"IMG",{class:!0,src:!0,alt:!0,href:!0}),O.forEach(p),X.forEach(p),y=D(W),G=$(W,"DIV",{class:!0});var le=I(G);M=$(le,"H1",{class:!0});var ie=I(M);U=F(ie,"Software engineer"),ie.forEach(p),le.forEach(p),W.forEach(p),this.h()},h(){l(r,"class","mx-4 text-5xl text-dark-blue mb-2"),l(i,"class","h-[200px] animate__animated animate__fadeInLeft"),C(i.src,n="images/C.png")||l(i,"src",n),l(i,"alt","C"),l(i,"href","/"),l(f,"class","h-[200px] animate__animated animate__fadeInTopLeft"),C(f.src,m="images/E.png")||l(f,"src",m),l(f,"alt","E"),l(f,"href","/"),l(d,"class","h-[200px] animate__animated animate__fadeInDown"),C(d.src,b="images/S.png")||l(d,"src",b),l(d,"alt","S"),l(d,"href","/"),l(w,"class","h-[200px] animate__animated animate__fadeInTopRight"),C(w.src,v="images/A.png")||l(w,"src",v),l(w,"alt","A"),l(w,"href","/"),l(E,"class","h-[200px] animate__animated animate__fadeInDown"),C(E.src,S="images/R.png")||l(E,"src",S),l(E,"alt","R"),l(E,"href","/"),l(s,"class","flex flex-row items-baseline "),l(t,"class","flex flex-row items-end justify-center"),l(M,"class","mx-4 text-3xl text-dark-blue "),l(G,"class","flex flex-row items-end justify-center"),l(e,"class","w-2/3 m-auto")},m(N,W){T(N,e,W),c(e,t),c(t,r),c(r,a),c(t,u),c(t,s),c(s,i),c(s,g),c(s,f),c(s,_),c(s,d),c(s,h),c(s,w),c(s,V),c(s,E),c(e,y),c(e,G),c(G,M),c(M,U)},p:L,i:L,o:L,d(N){N&&p(e)}}}class Ae extends J{constructor(e){super(),K(this,e,null,Oe,Q,{})}}function Be(o){let e,t,r,a,u,s,i,n,g,f,m,_,d,b,h,w;return a=new Ae({}),i=new Ne({}),f=new Ce({}),d=new De({}),h=new ge({}),{c(){e=k(),t=x("div"),r=x("div"),A(a.$$.fragment),u=k(),s=x("div"),A(i.$$.fragment),n=k(),g=x("div"),A(f.$$.fragment),m=k(),_=x("div"),A(d.$$.fragment),b=k(),A(h.$$.fragment),this.h()},l(v){pe('[data-svelte="svelte-zab9s2"]',document.head).forEach(p),e=D(v),t=$(v,"DIV",{class:!0});var E=I(t);r=$(E,"DIV",{class:!0});var S=I(r);B(a.$$.fragment,S),S.forEach(p),u=D(E),s=$(E,"DIV",{});var y=I(s);B(i.$$.fragment,y),y.forEach(p),n=D(E),g=$(E,"DIV",{class:!0});var G=I(g);B(f.$$.fragment,G),G.forEach(p),m=D(E),_=$(E,"DIV",{class:!0});var M=I(_);B(d.$$.fragment,M),M.forEach(p),b=D(E),B(h.$$.fragment,E),E.forEach(p),this.h()},h(){document.title="Carvesco",l(r,"class","w-full h-[700px] bg-main-grey flex"),l(g,"class","mt-10"),l(_,"class","mt-10"),l(t,"class","pb-10")},m(v,V){T(v,e,V),T(v,t,V),c(t,r),z(a,r,null),c(t,u),c(t,s),z(i,s,null),c(t,n),c(t,g),z(f,g,null),c(t,m),c(t,_),z(d,_,null),c(t,b),z(h,t,null),w=!0},p:L,i(v){w||(H(a.$$.fragment,v),H(i.$$.fragment,v),H(f.$$.fragment,v),H(d.$$.fragment,v),H(h.$$.fragment,v),w=!0)},o(v){j(a.$$.fragment,v),j(i.$$.fragment,v),j(f.$$.fragment,v),j(d.$$.fragment,v),j(h.$$.fragment,v),w=!1},d(v){v&&p(e),v&&p(t),R(a),R(i),R(f),R(d),R(h)}}}class Re extends J{constructor(e){super(),K(this,e,null,Be,Q,{})}}export{Re as default};
