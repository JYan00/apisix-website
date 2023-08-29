"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[26809],{35318:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>h});var n=r(27378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=u(r),h=a,g=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return r?n.createElement(g,i(i({ref:e},s),{},{components:r})):n.createElement(g,i({ref:e},s))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19529:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",authors:[{name:"Bisakh Mondal",title:"Author",url:"https://github.com/bisakhmondal",image_url:"https://avatars.githubusercontent.com/u/41498427?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","HashiCorp","Vault","jwt auth","\u8ba4\u8bc1"],description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u4f7f\u7528\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002",tags:["Plugins","Authentication","Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/plugins/vault.png"},i=void 0,l={permalink:"/zh/blog/2022/01/21/apisix-hashicorp-vault-integration",source:"@site/blog/2022/01/21/apisix-hashicorp-vault-integration.md",title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u4f7f\u7528\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002",date:"2022-01-21T00:00:00.000Z",formattedDate:"2022\u5e741\u670821\u65e5",tags:[{label:"Plugins",permalink:"/zh/blog/tags/plugins"},{label:"Authentication",permalink:"/zh/blog/tags/authentication"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:16.185,truncated:!0,authors:[{name:"Bisakh Mondal",title:"Author",url:"https://github.com/bisakhmondal",image_url:"https://avatars.githubusercontent.com/u/41498427?v=4",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"\u76f4\u64ad\u9884\u544a | \u5f00\u6e90+\u4e91\u539f\u751f\u52a9\u529b\u4f01\u4e1a\u4e0a\u4e91\u4e0e\u884c\u52a8\u843d\u5730",permalink:"/zh/blog/2022/01/24/apisix-with-qingcloud-meetup"},nextItem:{title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u7ec6\u8282\u524d\u77bb",permalink:"/zh/blog/2022/01/21/apisix-xrpc-details-and-miltilingual"}},c={authorsImageUrls:[void 0,void 0]},u=[],s={toc:u};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002")))}p.isMDXComponent=!0}}]);