"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2e3],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},50832:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={title:"Building a More Robust Apache APISIX Ingress Controller With Litmus Chaos",authors:[{name:"API7.ai",title:"Author",url:"https://github.com/api7",image_url:"https://avatars.githubusercontent.com/u/61078451?s=200&v=4"}],keywords:["Apache APISIX","Chaos Engineering","APISIX Ingress Controller"],description:"Chaos engineering is a powerful tool for ensuring system reliability and performance, and its application in designing Chaos experiments for Ingress Controllers can help organizations identify weaknesses in their applications and infrastructure.",tags:["Ecosystem"],image:"https://static.apiseven.com/uploads/2023/04/20/yeuKN9nu_Building%20a%20More%20Robust%20Apache%20APISIX%20Ingress%20Controller%20With%20Litmus%20Chaos.png"},i=void 0,s={permalink:"/blog/2023/05/04/apache-apisix-chaos-engineering",source:"@site/blog/2023/05/04/apache-apisix-chaos-engineering.md",title:"Building a More Robust Apache APISIX Ingress Controller With Litmus Chaos",description:"Chaos engineering is a powerful tool for ensuring system reliability and performance, and its application in designing Chaos experiments for Ingress Controllers can help organizations identify weaknesses in their applications and infrastructure.",date:"2023-05-04T00:00:00.000Z",formattedDate:"May 4, 2023",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:8.47,truncated:!0,authors:[{name:"API7.ai",title:"Author",url:"https://github.com/api7",image_url:"https://avatars.githubusercontent.com/u/61078451?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/61078451?s=200&v=4"}],prevItem:{title:"Release Apache APISIX 3.3.0",permalink:"/blog/2023/05/08/release-apache-apisix-3.3.0"},nextItem:{title:"Biweekly Report (Apr 10 - Apr 23)",permalink:"/blog/2023/04/26/weekly-report-0426"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Chaos engineering is a powerful tool for ensuring system reliability and performance, and its application in designing Chaos experiments for Ingress Controllers can help organizations identify weaknesses in their applications and infrastructure.")))}u.isMDXComponent=!0}}]);