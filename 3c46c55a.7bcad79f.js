(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(88)),i={id:"example",title:"Example",sidebar_label:"Example"},c={unversionedId:"example",id:"example",isDocsHomePage:!1,title:"Example",description:"Here is a simple console application that creates or updates a job through the import endpoint. A job in Dime.Scheduler is the equivalent of an order (service, sales, project, production, etc.) in the real world.",source:"@site/docs\\example.md",slug:"/example",permalink:"/ds-sdk/docs/example",editUrl:"https://github.com/dimenics/ds-sdk/edit/master/docs/docs/example.md",version:"current",sidebar_label:"Example",sidebar:"intro",previous:{title:"Installation",permalink:"/ds-sdk/docs/installation"}},p=[],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here is a simple console application that creates or updates a ",Object(a.b)("em",{parentName:"p"},"job")," through the import endpoint. A job in Dime.Scheduler is the equivalent of an order (service, sales, project, production, etc.) in the real world."),Object(a.b)("p",null,"See the inline comments for the steps required to complete a request successfully."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cs"},'public class Program\n{\n  public static async Task Main(string[] args)\n  {\n    Console.WriteLine("Adding/updating a job to Dime.Scheduler");\n\n    // Step #1 is to define the variables\n    const string uri = "https://my-dimescheduler-uri";\n    IAuthenticator authenticator = new FormsAuthenticator(\n        uri,\n        "dsserviceaccount@mycustomer.com",\n        "My$trongP@$$w0rd"\n    );\n\n    // Step #2 is to instantiate and create an authenticated endpoint\n    DimeSchedulerClient client = new(uri, authenticator);\n    IImportEndpoint importEndpoint = await client.Import.Request();\n\n    // Step #3 is to actually make and send the request\n    Job order = new()\n    {\n        SourceApp = "MY APPLICATION",\n        SourceType = "SERVICE_ORDER_0001",\n        JobNo = "CUSTOMER_XYZ_REPAIRCODE_012",\n        ShortDescription = "Repair HVAC Customer XYZ"\n    };\n\n    await importEndpoint.ProcessAsync(order, TransactionType.Append);\n\n    Console.ReadLine();\n  }\n}\n')))}l.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);