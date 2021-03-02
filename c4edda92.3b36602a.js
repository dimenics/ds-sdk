(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{53:function(e,t,i){"use strict";i.r(t);var o=i(0),a=i.n(o),s=i(122),n=i(113);i(54);const c=n.a.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  cursor: ${e=>e.isClickable?"pointer":"auto"};
`,r=Object(n.a)(Object(s.a)("img"))`
  border-radius: 5px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  height: 100%;
  width: 100%;
  &:hover {
    box-shadow: 0 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;t.default=e=>{const{image:t,height:i=500,width:n=600,onClick:h}=e,[p,d]=Object(s.b)((()=>({xys:[0,0,1],config:{mass:5,tension:350,friction:40}}))),l=Object(o.useCallback)(((e,t,i,o)=>[-(t-o/2)/100,(e-i/2)/100,1.01]),[]);return a.a.createElement(c,{width:n,height:i,onClick:h,isClickable:!!h},a.a.createElement(r,{src:t,onMouseMove:({clientX:e,clientY:t})=>d({xys:l(e,t,n,i)}),onMouseLeave:()=>d({xys:[0,0,1]}),style:{transform:p.xys.interpolate(((e,t,i)=>`perspective(600px) rotateX(${e}deg) rotateY(${t}deg) scale(${i})`))}}),e.children)}}}]);