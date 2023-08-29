"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15218],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},70642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const o={title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",slug:"2021/06/21/use-java-to-write-apache-apisix-plugins",author:"\u5c60\u6b63\u677e",authorURL:"https://github.com/tzssangglass",authorImageURL:"https://avatars.githubusercontent.com/u/30819887?v=4",keywords:["Apache APISIX","API \u7f51\u5173","Java","\u63d2\u4ef6","Spring Cloud"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u5df2\u7ecf\u652f\u6301\u4e86 Java \u7f16\u5199\u63d2\u4ef6\uff0c\u4f7f\u7528\u8005\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528 Java \u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u878d\u5165 Spring Cloud \u751f\u6001\u5708\uff0c\u5e7f\u6cdb\u4f7f\u7528\u751f\u6001\u5708\u5185\u7684\u5404\u79cd\u6280\u672f\u7ec4\u4ef6\u3002",tags:["Ecosystem"]},c=void 0,i={permalink:"/zh/blog/2021/06/21/use-java-to-write-apache-apisix-plugins",source:"@site/blog/2021/06/21/use-Java-to-write-Apache-APISIX-plugins.md",title:"\u4f7f\u7528 Java \u7f16\u5199 Apache APISIX \u63d2\u4ef6",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u5df2\u7ecf\u652f\u6301\u4e86 Java \u7f16\u5199\u63d2\u4ef6\uff0c\u4f7f\u7528\u8005\u4e0d\u4ec5\u53ef\u4ee5\u4f7f\u7528 Java \u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u878d\u5165 Spring Cloud \u751f\u6001\u5708\uff0c\u5e7f\u6cdb\u4f7f\u7528\u751f\u6001\u5708\u5185\u7684\u5404\u79cd\u6280\u672f\u7ec4\u4ef6\u3002",date:"2021-06-21T00:00:00.000Z",formattedDate:"2021\u5e746\u670821\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:7.23,truncated:!0,authors:[{name:"\u5c60\u6b63\u677e",url:"https://github.com/tzssangglass",imageURL:"https://avatars.githubusercontent.com/u/30819887?v=4"}],prevItem:{title:"\u4f7f\u7528 Rancher \u6781\u901f\u90e8\u7f72\u66f4\u597d\u7528\u7684\u5f00\u6e90\u7f51\u5173\u548c Ingress \u63a7\u5236\u5668",permalink:"/zh/blog/2021/06/23/deploy-great-open-source-gateway-and-ingress-controller-fast"},nextItem:{title:"Apache APISIX Ingress Controller \u9996\u4e2a GA \u7248\u672c v1.0 \u6b63\u5f0f\u53d1\u5e03\uff01",permalink:"/zh/blog/2021/06/18/first-ga-version-v1.0-of-apache-apisix-ingress-controller-released"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX \u652f\u6301\u591a\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\u4e86\uff01\u4e0d\u4f1a Lua \u4e5f\u6ca1\u5173\u7cfb\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u4f60\u719f\u6089\u7684\u8bed\u8a00\u7f16\u5199\u63d2\u4ef6\uff0c\u6587\u672b\u8fd8\u6709\u89c6\u9891\u6559\u7a0b\u3002")))}u.isMDXComponent=!0}}]);