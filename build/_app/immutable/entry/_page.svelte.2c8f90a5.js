import{S as A,i as H,s as L,k as b,q as D,l as k,m as x,r as S,h as v,p as g,b as I,G as w,J as V,H as B,K as Y,n as q,a as F,c as T,g as y,v as z,f as C,d as E,L as J,o as Z,M as $,y as G,z as N,A as O,B as U,u as ee}from"../chunks/index.465f3344.js";function te(o){let e,t,n,s,a;return{c(){e=b("div"),t=b("h2"),n=D(o[4]),this.h()},l(i){e=k(i,"DIV",{style:!0});var m=x(e);t=k(m,"H2",{});var h=x(t);n=S(h,o[4]),h.forEach(v),m.forEach(v),this.h()},h(){g(e,"position","absolute"),g(e,"left",o[1]+"px"),g(e,"top",o[2]+"px"),g(e,"width","50px"),g(e,"height","50px"),g(e,"background-color",o[0]),g(e,"cursor","pointer")},m(i,m){I(i,e,m),w(e,t),w(t,n),s||(a=V(e,"click",o[5]),s=!0)},p(i,[m]){m&2&&g(e,"left",i[1]+"px"),m&4&&g(e,"top",i[2]+"px"),m&1&&g(e,"background-color",i[0])},i:B,o:B,d(i){i&&v(e),s=!1,a()}}}function ne(o,e,t){let{color:n="red"}=e,{x:s=0}=e,{y:a=0}=e;const i=Y();let m=Math.ceil(Math.random()*3);const h=()=>i("remove");return o.$$set=u=>{"color"in u&&t(0,n=u.color),"x"in u&&t(1,s=u.x),"y"in u&&t(2,a=u.y)},[n,s,a,i,m,h]}class le extends A{constructor(e){super(),H(this,e,ne,te,L,{color:0,x:1,y:2})}}function re(o){let e;return{c(){e=b("div"),this.h()},l(t){e=k(t,"DIV",{class:!0,style:!0}),x(e).forEach(v),this.h()},h(){q(e,"class","lane svelte-1rtnadi"),g(e,"width",o[0]+"%"),g(e,"left",o[1]+"%")},m(t,n){I(t,e,n)},p(t,[n]){n&1&&g(e,"width",t[0]+"%"),n&2&&g(e,"left",t[1]+"%")},i:B,o:B,d(t){t&&v(e)}}}function oe(o,e,t){let{width:n=100}=e,{x:s=0}=e;return o.$$set=a=>{"width"in a&&t(0,n=a.width),"x"in a&&t(1,s=a.x)},[n,s]}class se extends A{constructor(e){super(),H(this,e,oe,re,L,{width:0,x:1})}}function K(o,e,t){const n=o.slice();return n[12]=e[t],n[14]=t,n}function P(o,e,t){const n=o.slice();return n[15]=e[t],n[14]=t,n}function ae(o){let e,t,n,s,a=(o[1]/60).toFixed(3)+"",i,m,h;return{c(){e=b("button"),t=D("Stop"),n=F(),s=b("h4"),i=D(a)},l(u){e=k(u,"BUTTON",{});var c=x(e);t=S(c,"Stop"),c.forEach(v),n=T(u),s=k(u,"H4",{});var M=x(s);i=S(M,a),M.forEach(v)},m(u,c){I(u,e,c),w(e,t),I(u,n,c),I(u,s,c),w(s,i),m||(h=V(e,"click",o[5]),m=!0)},p(u,c){c&2&&a!==(a=(u[1]/60).toFixed(3)+"")&&ee(i,a)},d(u){u&&v(e),u&&v(n),u&&v(s),m=!1,h()}}}function ie(o){let e,t,n,s;return{c(){e=b("button"),t=D("Start")},l(a){e=k(a,"BUTTON",{});var i=x(e);t=S(i,"Start"),i.forEach(v)},m(a,i){I(a,e,i),w(e,t),n||(s=V(e,"click",o[6]),n=!0)},p:B,d(a){a&&v(e),n=!1,s()}}}function j(o){let e,t;return e=new se({props:{width:100/o[3].lanes,x:o[14]*100/o[3].lanes}}),{c(){G(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,s){O(e,n,s),t=!0},p:B,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){U(e,n)}}}function Q(o){let e,t;function n(){return o[7](o[14])}return e=new le({props:{color:o[12].color,x:o[12].x,y:o[12].y}}),e.$on("remove",n),{c(){G(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,a){O(e,s,a),t=!0},p(s,a){o=s;const i={};a&4&&(i.color=o[12].color),a&4&&(i.x=o[12].x),a&4&&(i.y=o[12].y),e.$set(i)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){E(e.$$.fragment,s),t=!1},d(s){U(e,s)}}}function ce(o){let e,t,n,s,a;function i(l,f){return l[0]===!1?ie:ae}let m=i(o),h=m(o),u=Array(o[3].lanes),c=[];for(let l=0;l<u.length;l+=1)c[l]=j(P(o,u,l));const M=l=>E(c[l],1,1,()=>{c[l]=null});let p=o[2],_=[];for(let l=0;l<p.length;l+=1)_[l]=Q(K(o,p,l));const W=l=>E(_[l],1,1,()=>{_[l]=null});return{c(){e=b("div"),t=b("div"),h.c(),n=F();for(let l=0;l<c.length;l+=1)c[l].c();s=F();for(let l=0;l<_.length;l+=1)_[l].c();this.h()},l(l){e=k(l,"DIV",{id:!0,class:!0});var f=x(e);t=k(f,"DIV",{style:!0});var r=x(t);h.l(r),r.forEach(v),n=T(f);for(let d=0;d<c.length;d+=1)c[d].l(f);s=T(f);for(let d=0;d<_.length;d+=1)_[d].l(f);f.forEach(v),this.h()},h(){g(t,"display","flex"),g(t,"flex-direction","row"),g(t,"align-items","center"),q(e,"id","container"),q(e,"class","svelte-1b98pls")},m(l,f){I(l,e,f),w(e,t),h.m(t,null),w(e,n);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(e,null);w(e,s);for(let r=0;r<_.length;r+=1)_[r]&&_[r].m(e,null);a=!0},p(l,[f]){if(m===(m=i(l))&&h?h.p(l,f):(h.d(1),h=m(l),h&&(h.c(),h.m(t,null))),f&8){u=Array(l[3].lanes);let r;for(r=0;r<u.length;r+=1){const d=P(l,u,r);c[r]?(c[r].p(d,f),y(c[r],1)):(c[r]=j(d),c[r].c(),y(c[r],1),c[r].m(e,s))}for(z(),r=u.length;r<c.length;r+=1)M(r);C()}if(f&20){p=l[2];let r;for(r=0;r<p.length;r+=1){const d=K(l,p,r);_[r]?(_[r].p(d,f),y(_[r],1)):(_[r]=Q(d),_[r].c(),y(_[r],1),_[r].m(e,null))}for(z(),r=p.length;r<_.length;r+=1)W(r);C()}},i(l){if(!a){for(let f=0;f<u.length;f+=1)y(c[f]);for(let f=0;f<p.length;f+=1)y(_[f]);a=!0}},o(l){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)E(c[f]);_=_.filter(Boolean);for(let f=0;f<_.length;f+=1)E(_[f]);a=!1},d(l){l&&v(e),h.d(),J(c,l),J(_,l)}}}function fe(o,e,t){let n={lanes:8,gameLength:48e4};const s=["red","green","blue","yellow","purple"];let a=!1,i=0,m=0,h=[];function u(){if(t(1,i--,i),i%50===0){const l=s[Math.floor(Math.random()*s.length)],f=Math.floor(Math.random()*window.innerWidth),r=Math.floor(Math.random()*window.innerHeight),d={color:l,x:f,y:r,vx:1,vy:1};t(2,h=[...h,d])}}function c(l){console.info("removeBox",l),t(2,h=h.filter((f,r)=>r!==l))}function M(){t(2,h=h.map((l,f)=>{const r=l.x+l.vx,d=l.y+l.vy,R=r<0||r>window.innerWidth?-l.vx:l.vx,X=d<0||d>window.innerHeight?-l.vy:l.vy;return{...l,x:r,y:d,vx:R,vy:X}})),requestAnimationFrame(M)}function p(){clearInterval(m),t(2,h=[]),t(0,a=!1)}function _(){a||(m=setInterval(u,100),t(1,i=n.gameLength/100),t(0,a=!0))}return Z(()=>(requestAnimationFrame(M),()=>clearInterval(m))),$(()=>{clearInterval(m)}),[a,i,h,n,c,p,_,l=>c(l)]}class ue extends A{constructor(e){super(),H(this,e,fe,ce,L,{})}}function he(o){let e,t;return e=new ue({}),{c(){G(e.$$.fragment)},l(n){N(e.$$.fragment,n)},m(n,s){O(e,n,s),t=!0},p:B,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){U(e,n)}}}class me extends A{constructor(e){super(),H(this,e,null,he,L,{})}}export{me as default};
