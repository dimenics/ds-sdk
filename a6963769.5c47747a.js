(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),o=(r(0),r(88)),a={id:"import",title:"Import",sidebar_label:"Import"},p={unversionedId:"import/import",id:"import/import",isDocsHomePage:!1,title:"Import",description:"Any class that implements the IImportRequestable interface is eligible to be processed by the import service in Dime.Scheduler. All import requests are done through DimeSchedulerClient's Import property, which is an implementation of the IImportEndpoint interface.",source:"@site/docs\\import\\import.md",slug:"/import/import",permalink:"/ds-sdk/docs/import/import",editUrl:"https://github.com/dimenics/ds-sdk/edit/master/docs/docs/import/import.md",version:"current",sidebar_label:"Import",sidebar:"api",previous:{title:"Authentication",permalink:"/ds-sdk/docs/api/authentication"},next:{title:"Validation",permalink:"/ds-sdk/docs/import/validation"}},c=[],s={toc:c};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Any class that implements the ",Object(o.b)("inlineCode",{parentName:"p"},"IImportRequestable")," interface is eligible to be processed by the import service in Dime.Scheduler. All import requests are done through ",Object(o.b)("inlineCode",{parentName:"p"},"DimeSchedulerClient"),"'s Import property, which is an implementation of the ",Object(o.b)("inlineCode",{parentName:"p"},"IImportEndpoint")," interface. "),Object(o.b)("p",null,"Import types are simple POCOs, decorated by internal mapping and validation information. Behind the covers, these POCOs are translated to a type which the import API in Dime.Scheduler can interpret and execute. The import API in Dime.Scheduler itself too is a simple and extensible framework which can be customized to your customer's needs."),Object(o.b)("p",null,"This example adds or updates a category through the import pipeline:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'using Dime.Scheduler.Sdk.Import;\n\nstring uri = "http://mydimescheduler.com";\nIAuthenticator authenticator = new FormsAuthenticator(uri, "admin", "admin");\n\nDimeSchedulerClient client = new(uri, authenticator);\n\nCategory category = new("Category #1", "#6e62b5");\nIImportEndpoint importEndpoint = await client.Import.Request();\nawait importEndpoint.ProcessAsync(category, TransactionType.Append);\n')),Object(o.b)("p",null,"This example adds or updates a filter group:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'using Dime.Scheduler.Sdk.Import;\n\nstring uri = "http://mydimescheduler.com";\nIAuthenticator authenticator = new FormsAuthenticator(uri, "admin", "admin");\n\nDimeSchedulerClient client = new(uri, authenticator);\n\nFilterGroup filterGroup = new FilterGroup { Name = "Group 1" };\nIImportEndpoint importEndpoint = await client.Import.Request();\nawait importEndpoint.ProcessAsync(filterGroup, TransactionType.Append);\n')),Object(o.b)("p",null,"As you can see, the experience is exactly the same. The only thing you need to worry about is the (correctness of) data."))}l.isMDXComponent=!0},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,b=m["".concat(a,".").concat(d)]||m[d]||u[d]||o;return r?i.a.createElement(b,p(p({ref:t},s),{},{components:r})):i.a.createElement(b,p({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);