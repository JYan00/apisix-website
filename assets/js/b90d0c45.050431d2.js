"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1662],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),y=a,b=f["".concat(l,".").concat(y)]||f[y]||s[y]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={title:"Apache APISIX not affected by NGINX CVE-2021-23017",slug:"2021/06/07/apache-apisix-not-affected-by-nginx-cve-2021-23017",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["APISIX","Apache APISIX","API Gateway","Security"],description:"Cloud-native API gateway Apache APISIX is not affected by the NGINX (CVE-2021-23017) vulnerability.",tags:["Vulnerabilities"],image:"https://static.apiseven.com/2022/blog/0818/cve/CVE-2021-23017.png"},i=void 0,c={permalink:"/blog/2021/06/07/apache-apisix-not-affected-by-nginx-cve-2021-23017",source:"@site/blog/2021/06/07/Apache-APISIX-not-affected-by-NGINX-CVE-2021-23017.md",title:"Apache APISIX not affected by NGINX CVE-2021-23017",description:"Cloud-native API gateway Apache APISIX is not affected by the NGINX (CVE-2021-23017) vulnerability.",date:"2021-06-07T00:00:00.000Z",formattedDate:"June 7, 2021",tags:[{label:"Vulnerabilities",permalink:"/blog/tags/vulnerabilities"}],readingTime:1.5,truncated:!0,authors:[{name:"Ruofei Zhao",url:"https://github.com/Serendipity96",imageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"}],prevItem:{title:"Apache APISIX v.s Envoy: Which Has the Better Performance?",permalink:"/blog/2021/06/10/apache-apisix-and-envoy-performance-comparison"},nextItem:{title:"Apache APISIX Open Source 2 Year Anniversary!",permalink:"/blog/2021/06/06/apisix-two-years"}},l={authorsImageUrls:[void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"On May 26, NGINX issued a security announcement that fixed a DNS resolver vulnerability (CVE -2021-23017) in the NGINX resolver.")))}s.isMDXComponent=!0}}]);