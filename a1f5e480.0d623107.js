(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(88)),i={id:"validation",title:"Validation",sidebar_label:"Validation"},l={unversionedId:"validation",id:"validation",isDocsHomePage:!1,title:"Validation",description:"Validation is done through the capabilities exposed in the System.ComponentModel.DataAnnotations namespace. Wrapped in the interface IValidatableImportRequest, import objects are validated before the request is sent to Dime.Scheduler.",source:"@site/docs\\validation.md",slug:"/validation",permalink:"/ds-sdk/docs/validation",editUrl:"https://github.com/dimenics/ds-sdk/edit/master/docs/docs/validation.md",version:"current",sidebar_label:"Validation",sidebar:"api",previous:{title:"Authentication",permalink:"/ds-sdk/docs/api/authentication"},next:{title:"Import",permalink:"/ds-sdk/docs/import/import"}},c=[],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Validation is done through the capabilities exposed in the ",Object(o.b)("inlineCode",{parentName:"p"},"System.ComponentModel.DataAnnotations")," namespace. Wrapped in the interface ",Object(o.b)("inlineCode",{parentName:"p"},"IValidatableImportRequest<out T>"),", import objects are validated before the request is sent to Dime.Scheduler."),Object(o.b)("p",null,"Take the ",Object(o.b)("inlineCode",{parentName:"p"},"FilterGroup")," class as an example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class FilterGroup : IImportRequestable, IValidatableImportRequest<FilterGroup>\n{\n    [Required]\n    public string Name { get; set; }\n\n    public int ColumnNo { get; set; }\n}\n")),Object(o.b)("p",null,"When invoking the following request, an exception will be thrown:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"FilterGroup model = new FilterGroup { ColumnNo = 1 };\n((IImportRequestable) model).ToImportRequest(TransactionType.Append); // Will throw exception\n")))}s.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);