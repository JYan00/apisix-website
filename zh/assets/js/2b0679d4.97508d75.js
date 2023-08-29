"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83688],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,f=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u57fa\u4e8e APISIX \u7684\u670d\u52a1\u7f51\u683c\u65b9\u6848 Amesh \u79ef\u6781\u5f00\u53d1\u4e2d\uff01",authors:[{name:"lingsamuel",title:"Author",url:"https://github.com/lingsamuel",image_url:"https://github.com/lingsamuel.png"}],keywords:["Apache APISIX","Amesh","Service Mesh","\u670d\u52a1\u7f51\u683c","Kubernetes"],description:"Amesh \u662f Apache APISIX \u7684\u670d\u52a1\u7f51\u683c\u5e93\u3002\u5b83\u9002\u914d\u4e86 xDS \u534f\u8bae\uff0c\u53ef\u4ee5\u4ece\u8bf8\u5982 Istio \u7684\u63a7\u5236\u5e73\u9762\u4e2d\u63a5\u6536\u6570\u636e\uff0c\u5e76\u751f\u6210 APISIX \u6240\u9700\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f7f\u5f97 APISIX \u80fd\u591f\u5728\u670d\u52a1\u7f51\u683c\u9886\u57df\u4f5c\u4e3a\u6570\u636e\u9762\u53d1\u6325\u4f5c\u7528\u3002",tags:["Ecosystem"]},i=void 0,l={permalink:"/zh/blog/2023/01/11/apisix-amesh-introduction",source:"@site/blog/2023/01/11/apisix-amesh-introduction.md",title:"\u57fa\u4e8e APISIX \u7684\u670d\u52a1\u7f51\u683c\u65b9\u6848 Amesh \u79ef\u6781\u5f00\u53d1\u4e2d\uff01",description:"Amesh \u662f Apache APISIX \u7684\u670d\u52a1\u7f51\u683c\u5e93\u3002\u5b83\u9002\u914d\u4e86 xDS \u534f\u8bae\uff0c\u53ef\u4ee5\u4ece\u8bf8\u5982 Istio \u7684\u63a7\u5236\u5e73\u9762\u4e2d\u63a5\u6536\u6570\u636e\uff0c\u5e76\u751f\u6210 APISIX \u6240\u9700\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f7f\u5f97 APISIX \u80fd\u591f\u5728\u670d\u52a1\u7f51\u683c\u9886\u57df\u4f5c\u4e3a\u6570\u636e\u9762\u53d1\u6325\u4f5c\u7528\u3002",date:"2023-01-11T00:00:00.000Z",formattedDate:"2023\u5e741\u670811\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:6.41,truncated:!0,authors:[{name:"lingsamuel",title:"Author",url:"https://github.com/lingsamuel",image_url:"https://github.com/lingsamuel.png",imageURL:"https://github.com/lingsamuel.png"}],prevItem:{title:"\u76d8\u70b9\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u7684\u8bf8\u591a\u8eab\u4efd\u9a8c\u8bc1\u65b9\u5f0f",permalink:"/zh/blog/2023/01/12/serverless-auth-type"},nextItem:{title:"\u4e3a\u4ec0\u4e48 APISIX Ingress \u662f\u6bd4 Ingress NGINX \u66f4\u597d\u7684\u9009\u62e9\uff1f",permalink:"/zh/blog/2023/01/11/apisix-ingress-vs-ingress-nginx"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u4e91\u539f\u751f\u5feb\u901f\u53d1\u5c55\u7684\u524d\u63d0\u4e0b\uff0c\u670d\u52a1\u7f51\u683c\u9886\u57df\u4e5f\u5f00\u59cb\u9010\u6e10\u706b\u70ed\u3002\u76ee\u524d\u9636\u6bb5\uff0c\u5927\u5bb6\u6240\u719f\u77e5\u7684\u670d\u52a1\u7f51\u683c\u89e3\u51b3\u65b9\u6848\u5f88\u591a\uff0c\u6bcf\u79cd\u4ea7\u54c1\u53c8\u5404\u6709\u5176\u4f18\u52bf\u3002\u56e0\u6b64\u5728\u9762\u5bf9\u4e0d\u540c\u7684\u884c\u4e1a\u6216\u8005\u4e1a\u52a1\u80cc\u666f\u65f6\uff0c\u6bcf\u4e2a\u4eba\u7684\u9009\u578b\u60f3\u6cd5\u90fd\u5404\u4e0d\u76f8\u540c\u3002")))}u.isMDXComponent=!0}}]);