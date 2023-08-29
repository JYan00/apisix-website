"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[38566],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,y=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"\u793e\u533a\u53cc\u5468\u62a5 (2.27 - 3.12)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/03/14/zSVpVOqk_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E5%A4%B4%E5%9B%BE-05%E6%9C%9F.png"},c=void 0,p={permalink:"/zh/blog/2023/03/16/weekly-report-0316",source:"@site/blog/2023/03/16/weekly-report-0316.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (2.27 - 3.12)",description:"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002",date:"2023-03-16T00:00:00.000Z",formattedDate:"2023\u5e743\u670816\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:2.175,truncated:!0,authors:[],prevItem:{title:"\u4ec0\u4e48\u662f LuaJIT\uff1f\u4e3a\u4ec0\u4e48 Apache APISIX \u9009\u62e9\u4e86 LuaJIT\uff1f",permalink:"/zh/blog/2023/03/22/what-is-luajit-and-why-does-apisix-choose-luajit"},nextItem:{title:"Apache APISIX 3.2.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2023/03/09/release-apache-apisix-3.2.0"}},i={authorsImageUrls:[]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ece 2023.2.27 - 2023.3.12\uff0c\u6709 29 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 74 \u4e2a commit\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")))}s.isMDXComponent=!0}}]);