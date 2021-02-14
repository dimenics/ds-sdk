(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(88)),o={id:"authentication",title:"Authentication",sidebar_label:"Authentication"},c={unversionedId:"api/authentication",id:"api/authentication",isDocsHomePage:!1,title:"Authentication",description:"How to authenticate",source:"@site/docs\\api\\authentication.md",slug:"/api/authentication",permalink:"/ds-sdk/docs/api/authentication",editUrl:"https://github.com/dimenics/ds-sdk/edit/master/docs/docs/api/authentication.md",version:"current",sidebar_label:"Authentication",sidebar:"api",previous:{title:"Getting started",permalink:"/ds-sdk/docs/api/getting-started"},next:{title:"Import",permalink:"/ds-sdk/docs/import/import"}},s=[{value:"How to authenticate",id:"how-to-authenticate",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Caveats",id:"caveats",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-to-authenticate"},"How to authenticate"),Object(i.b)("p",null,"Authentication is done with implementations of the ",Object(i.b)("inlineCode",{parentName:"p"},"IAuthenticator")," interface. The default authenticator that is shipped with the SDK is the one that authenticates a forms user in Dime.Scheduler. The authenticator is called when an ",Object(i.b)("em",{parentName:"p"},"endpoint")," is created, so when invalid credentials are used, an exception will be thrown at this stage. In other words, ",Object(i.b)("inlineCode",{parentName:"p"},"IEndpoint")," objects are always executed in the context of an authenticated user."),Object(i.b)("p",null,"The authentication process is invisible to the user, all the system needs is a set of credentials at creation of the ",Object(i.b)("inlineCode",{parentName:"p"},"DimeSchedulerClient")," object."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'using Dime.Scheduler.Sdk.Import;\n\nstring uri = "http://mydimescheduler.com";\nIAuthenticator authenticator = new FormsAuthenticator(uri, "validUserAccount", "validUserPassword");\n\nDimeSchedulerClient client = new(uri, authenticator);\n\nFilterGroup filterGroup = new FilterGroup { Name = "Group 1" };\n\n // Returns an endpoint with an authenticated user, or throws an exception when the user could not be logged in\nIImportEndpoint importEndpoint = await client.Import.Request();\nawait importEndpoint.RunAsync(filterGroup, TransactionType.Append); \n')),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"The out-of-the-box mechanism is a relatively straightforward forms authentication. Simply pass a URI, e-mail address of the user name and the corresponding password, and the application returns a ",Object(i.b)("strong",{parentName:"p"},"OAuth 2.0 bearer token")," that is valid for two days. Thus, the token is not reusable and must be refreshed from time to time. The current version of the SDK does not refresh tokens and requests a new token at each instantiation of the ",Object(i.b)("inlineCode",{parentName:"p"},"DimeSchedulerClient")," class."),Object(i.b)("h2",{id:"caveats"},"Caveats"),Object(i.b)("p",null,"Authorization is not yet included in the SDK. Therefore, it is recommended to use the credentials of a super user."))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),h=r,m=l["".concat(o,".").concat(h)]||l[h]||d[h]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);