"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[84148],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},15014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={title:"APISIX Ingress + Flagger \u5b9e\u73b0\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03",author:"\u8c2d\u6052\u4eae",authorURL:"https://github.com/Gallardot",authorImageURL:"https://github.com/Gallardot.png",keywords:["Apache APISIX","Ingress","Ingress controller","\u91d1\u4e1d\u96c0","Flagger"],description:"\u901a\u8fc7 Apache APISIX \u548c Flagger \u7684\u6574\u5408\uff0c\u5b9e\u73b0\u4e86\u975e\u5e38\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002",tags:["Ecosystem"]},l=void 0,i={permalink:"/zh/blog/2022/12/27/apisix-ingress-with-Flagger",source:"@site/blog/2022/12/27/apisix-ingress-with-Flagger.md",title:"APISIX Ingress + Flagger \u5b9e\u73b0\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03",description:"\u901a\u8fc7 Apache APISIX \u548c Flagger \u7684\u6574\u5408\uff0c\u5b9e\u73b0\u4e86\u975e\u5e38\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002",date:"2022-12-27T00:00:00.000Z",formattedDate:"2022\u5e7412\u670827\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:14.9,truncated:!0,authors:[{name:"\u8c2d\u6052\u4eae",url:"https://github.com/Gallardot",imageURL:"https://github.com/Gallardot.png"}],prevItem:{title:"Apache APISIX 3.1.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2022/12/30/release-apache-apisix-3.1.0"},nextItem:{title:"APISIX Ingress \u5bf9 Gateway API \u7684\u652f\u6301\u548c\u5e94\u7528",permalink:"/zh/blog/2022/12/27/apisix-ingress-with-gatewayapi"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7 Apache APISIX \u548c Flagger \u7684\u6574\u5408\uff0c\u5b9e\u73b0\u4e86\u975e\u5e38\u987a\u6ed1\u7684\u91d1\u4e1d\u96c0\u53d1\u5e03\u3002")))}g.isMDXComponent=!0}}]);