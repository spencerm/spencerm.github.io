import{w as r}from"./index.149c32c4.js";function c(){const{subscribe:n,set:s,update:t}=r(7);return{subscribe:n,increment:()=>t(e=>e+1),decrement:()=>t(e=>e-1),reset:()=>s(6)}}const m=c();function u(){const{subscribe:n,set:s,update:t}=r(30);return{subscribe:n,increment:()=>t(e=>e+1),decrement:()=>t(e=>e-1),reset:()=>s(30)}}const b=u();function o(){const{subscribe:n,set:s,update:t}=r(18e4);return{subscribe:n,increment:()=>t(e=>e+1e3*30),decrement:()=>t(e=>e-1e3*30),reset:()=>s(1e3*60*3)}}const d=o();function a(){const{subscribe:n,set:s,update:t}=r(7);return{subscribe:n,increment:()=>t(e=>e+1),decrement:()=>t(e=>e-1),reset:()=>s(7)}}const g=a();export{b,d as g,m as l,g as w};
