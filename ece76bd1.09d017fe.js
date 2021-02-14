(window.webpackJsonp=window.webpackJsonp||[]).push([[14,13],{53:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(120),l=a(111);a(54);const s=l.a.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  cursor: ${e=>e.isClickable?"pointer":"auto"};
`,c=Object(l.a)(Object(r.a)("img"))`
  border-radius: 5px;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  height: 100%;
  width: 100%;
  &:hover {
    box-shadow: 0 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;t.default=e=>{const{image:t,height:a=500,width:l=600,onClick:o}=e,[m,d]=Object(r.b)((()=>({xys:[0,0,1],config:{mass:5,tension:350,friction:40}}))),u=Object(n.useCallback)(((e,t,a,n)=>[-(t-n/2)/100,(e-a/2)/100,1.01]),[]);return i.a.createElement(s,{width:l,height:a,onClick:o,isClickable:!!o},i.a.createElement(c,{src:t,onMouseMove:({clientX:e,clientY:t})=>d({xys:u(e,t,l,a)}),onMouseLeave:()=>d({xys:[0,0,1]}),style:{transform:m.xys.interpolate(((e,t,a)=>`perspective(600px) rotateX(${e}deg) rotateY(${t}deg) scale(${a})`))}}),e.children)}},82:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),r=a.n(i),l=a(90),s=a(100),c=a(95),o=a(21),m=a(92),d=a(83),u=a.n(d),g=a(53),p=a(111);const h=[{title:"Connect any system",imageUrl:"img/monitors.svg",description:r.a.createElement(r.a.Fragment,null,"Dime.Scheduler's flexibility allows for integration with any system. Connect your bespoke software and workflows with Dime.Scheduler and vice versa.")},{title:"Easy to use SDK",imageUrl:"img/coder.svg",description:r.a.createElement(r.a.Fragment,null,"The SDK is easy to use and it lets you plug your application right into the core of Dime.Scheduler.")},{title:"Open source",imageUrl:"img/progress.svg",description:r.a.createElement(r.a.Fragment,null,"The SDK is open source and is free to use. It was made by developers, for developers.")}];function b({imageUrl:e,title:t,description:a,i:n}){const i=Object(m.a)(e),l="col--offset-2",s=n%2==0,c=`col col--5 padding-vert--xl ${s?"":l}`,o=r.a.createElement("div",{className:c},r.a.createElement("h2",null,t),r.a.createElement("p",{className:"featureDescription_2nlI"},a)),d=`col col--5 ${s?l:""}`,u=r.a.createElement("div",{className:d},r.a.createElement("div",{className:"featureImageColumn_QmtA"},r.a.createElement("img",{alt:t,src:i}))),g=n%2==0?[u,o]:[o,u];return r.a.createElement("div",{className:"row"},g)}const f=p.a.div`
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    margin: 0 10px;
  }
`,E=p.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    margin-top: 30px;
  }
`,w=p.a.section`
  background: #6e62b5
`;t.default=function(){const e=Object(o.default)(),{siteConfig:t={}}=e;return r.a.createElement(s.a,{title:`${t.title}`,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:Object(l.a)("hero hero--primary heroTilted_3die",u.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:u.a.buttons},r.a.createElement(c.a,{className:Object(l.a)("button button--outline button--secondary button--lg",u.a.getStarted),to:Object(m.a)("docs/")},"Get Started")))),r.a.createElement("main",null,h&&h.length>0&&r.a.createElement("section",{className:u.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},h.map(((e,t)=>r.a.createElement(b,Object(n.a)({key:t},e,{i:t}))))))),r.a.createElement(w,{className:u.a.features},r.a.createElement("div",{className:"container"},r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(g.default,{image:"img/DS1.png",height:"500",width:"800"})))))))}}}]);