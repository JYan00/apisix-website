"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[67301],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>o});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=m(a),o=l,c=s["".concat(d,".").concat(o)]||s[o]||k[o]||r;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function o(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},89150:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u5065\u5eb7\u68c0\u67e5",keywords:["APISIX","API \u7f51\u5173","\u5065\u5eb7\u68c0\u67e5"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u7684\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\u6765\u68c0\u67e5\u4e0a\u6e38\u8282\u70b9\u7684\u5065\u5eb7\u72b6\u6001\u3002"},i=void 0,p={unversionedId:"tutorials/health-check",id:"version-3.4/tutorials/health-check",isDocsHomePage:!1,title:"\u5065\u5eb7\u68c0\u67e5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u7684\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\u6765\u68c0\u67e5\u4e0a\u6e38\u8282\u70b9\u7684\u5065\u5eb7\u72b6\u6001\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.4/tutorials/health-check.md",sourceDirName:"tutorials",slug:"/tutorials/health-check",permalink:"/zh/docs/apisix/tutorials/health-check",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/tutorials/health-check.md",tags:[],version:"3.4",frontMatter:{title:"\u5065\u5eb7\u68c0\u67e5",keywords:["APISIX","API \u7f51\u5173","\u5065\u5eb7\u68c0\u67e5"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u7684\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\u6765\u68c0\u67e5\u4e0a\u6e38\u8282\u70b9\u7684\u5065\u5eb7\u72b6\u6001\u3002"},sidebar:"version-3.4/docs",previous:{title:"Add multiple API versions",permalink:"/zh/docs/apisix/tutorials/add-multiple-api-versions"},next:{title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",permalink:"/zh/docs/apisix/tutorials/client-to-apisix-mtls"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5",id:"\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5",children:[]},{value:"\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5",id:"\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",children:[]}],m={toc:d};function u(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\u3002\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\u53ef\u4ee5\u5728\u4e0a\u6e38\u8282\u70b9\u53d1\u751f\u6545\u969c\u6216\u8005\u8fc1\u79fb\u65f6\uff0c\u5c06\u8bf7\u6c42\u4ee3\u7406\u5230\u5065\u5eb7\u7684\u8282\u70b9\u4e0a\uff0c\u6700\u5927\u7a0b\u5ea6\u907f\u514d\u670d\u52a1\u4e0d\u53ef\u7528\u7684\u95ee\u9898\u3002APISIX \u7684\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-healthcheck"},"lua-resty-healthcheck")," \u5b9e\u73b0\uff0c\u5e76\u5206\u4e3a\u4e3b\u52a8\u68c0\u67e5\u548c\u88ab\u52a8\u68c0\u67e5\u3002"),(0,l.kt)("h2",{id:"\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5"},"\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5"),(0,l.kt)("p",null,"\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5\u4e3b\u8981\u662f\u6307 APISIX \u901a\u8fc7\u9884\u8bbe\u7684\u63a2\u9488\u7c7b\u578b\uff0c\u4e3b\u52a8\u63a2\u6d4b\u4e0a\u6e38\u8282\u70b9\u7684\u5b58\u6d3b\u6027\u3002\u76ee\u524d APISIX \u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTP"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"TCP")," \u4e09\u79cd\u63a2\u9488\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u5f53\u53d1\u5411\u5065\u5eb7\u8282\u70b9 A \u7684 N \u4e2a\u8fde\u7eed\u63a2\u9488\u90fd\u5931\u8d25\u65f6\uff08\u53d6\u51b3\u4e8e\u5982\u4f55\u914d\u7f6e\uff09\uff0c\u5219\u8be5\u8282\u70b9\u5c06\u88ab\u6807\u8bb0\u4e3a\u4e0d\u5065\u5eb7\uff0c\u4e0d\u5065\u5eb7\u7684\u8282\u70b9\u5c06\u4f1a\u88ab APISIX \u7684\u8d1f\u8f7d\u5747\u8861\u5668\u5ffd\u7565\uff0c\u65e0\u6cd5\u6536\u5230\u8bf7\u6c42\uff1b\u82e5\u67d0\u4e2a\u4e0d\u5065\u5eb7\u7684\u8282\u70b9\uff0c\u8fde\u7eed M \u4e2a\u63a2\u9488\u90fd\u6210\u529f\uff0c\u5219\u8be5\u8282\u70b9\u5c06\u88ab\u91cd\u65b0\u6807\u8bb0\u4e3a\u5065\u5eb7\uff0c\u8fdb\u800c\u53ef\u4ee5\u88ab\u4ee3\u7406\u3002"),(0,l.kt)("h2",{id:"\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5"},"\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5"),(0,l.kt)("p",null,"\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\u662f\u6307\uff0c\u901a\u8fc7\u5224\u65ad\u4ece APISIX \u8f6c\u53d1\u5230\u4e0a\u6e38\u8282\u70b9\u7684\u8bf7\u6c42\u54cd\u5e94\u72b6\u6001\uff0c\u6765\u5224\u65ad\u5bf9\u5e94\u7684\u4e0a\u6e38\u8282\u70b9\u662f\u5426\u5065\u5eb7\u3002\u76f8\u5bf9\u4e8e\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5\uff0c\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\u7684\u65b9\u5f0f\u65e0\u9700\u53d1\u8d77\u989d\u5916\u7684\u63a2\u9488\uff0c\u4f46\u662f\u4e5f\u65e0\u6cd5\u63d0\u524d\u611f\u77e5\u8282\u70b9\u72b6\u6001\uff0c\u53ef\u80fd\u4f1a\u6709\u4e00\u5b9a\u91cf\u7684\u5931\u8d25\u8bf7\u6c42\u3002"),(0,l.kt)("p",null,"\u82e5\u53d1\u5411\u5065\u5eb7\u8282\u70b9 A \u7684 N \u4e2a\u8fde\u7eed\u8bf7\u6c42\u90fd\u88ab\u5224\u5b9a\u4e3a\u5931\u8d25\uff08\u53d6\u51b3\u4e8e\u5982\u4f55\u914d\u7f6e\uff09\uff0c\u5219\u8be5\u8282\u70b9\u5c06\u88ab\u6807\u8bb0\u4e3a\u4e0d\u5065\u5eb7\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u7531\u4e8e\u4e0d\u5065\u5eb7\u7684\u8282\u70b9\u65e0\u6cd5\u6536\u5230\u8bf7\u6c42\uff0c\u4ec5\u4f7f\u7528\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\u7b56\u7565\u65e0\u6cd5\u91cd\u65b0\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a\u5065\u5eb7\uff0c\u56e0\u6b64\u901a\u5e38\u9700\u8981\u7ed3\u5408\u4e3b\u52a8\u5065\u5eb7\u68c0\u67e5\u7b56\u7565\u3002"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream")," \u88ab\u8bf7\u6c42\u65f6\u624d\u4f1a\u5f00\u59cb\u5065\u5eb7\u68c0\u67e5\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream")," \u88ab\u914d\u7f6e\u4f46\u6ca1\u6709\u88ab\u8bf7\u6c42\uff0c\u4e0d\u4f1a\u89e6\u53d1\u542f\u52a8\u5065\u5eb7\u68c0\u67e5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u5065\u5eb7\u7684\u8282\u70b9\uff0c\u90a3\u4e48\u8bf7\u6c42\u4f1a\u7ee7\u7eed\u53d1\u9001\u7ed9\u4e0a\u6e38\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream")," \u4e2d\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u65f6\u4e0d\u4f1a\u89e6\u53d1\u542f\u52a8\u5065\u5eb7\u68c0\u67e5\uff0c\u8be5\u552f\u4e00\u8282\u70b9\u65e0\u8bba\u662f\u5426\u5065\u5eb7\uff0c\u8bf7\u6c42\u90fd\u5c06\u8f6c\u53d1\u7ed9\u4e0a\u6e38\u3002")))),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http")," ",(0,l.kt)("inlineCode",{parentName:"td"},"https")," ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684\u7c7b\u578b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u5355\u4f4d\u4e3a\u79d2\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.concurrency"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u65f6\u540c\u65f6\u68c0\u67e5\u7684\u76ee\u6807\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.http_path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684 HTTP \u8bf7\u6c42\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"${upstream.node.host}"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684 HTTP \u8bf7\u6c42\u4e3b\u673a\u540d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"65535")),(0,l.kt)("td",{parentName:"tr",align:null},"${upstream.node.port}"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u7684 HTTP \u8bf7\u6c42\u4e3b\u673a\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.https_verify_certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u4f7f\u7528 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u662f\u5426\u68c0\u67e5\u8fdc\u7a0b\u4e3b\u673a\u7684 SSL \u8bc1\u4e66\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.req_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\u4f7f\u7528 HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u8bbe\u7f6e\u989d\u5916\u7684\u8bf7\u6c42\u5934\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">= 1")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09\u68c0\u67e5\u7684\u95f4\u9694\u65f6\u95f4\uff08\u5355\u4f4d\u4e3a\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"599")),(0,l.kt)("td",{parentName:"tr",align:null},"[200, 302]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u5065\u5eb7\u8282\u70b9\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09\u786e\u5b9a\u8282\u70b9\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.interval"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">= 1")),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09\u68c0\u67e5\u7684\u95f4\u9694\u65f6\u95f4\uff08\u5355\u4f4d\u4e3a\u79d2\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"599")),(0,l.kt)("td",{parentName:"tr",align:null},"[429, 404, 500, 501, 502, 503, 504, 505]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u975e\u5065\u5eb7\u8282\u70b9\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.http_failures"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.tcp_failures"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09TCP \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.timeouts"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u8d85\u65f6\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http")," ",(0,l.kt)("inlineCode",{parentName:"td"},"https")," ",(0,l.kt)("inlineCode",{parentName:"td"},"tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\u7684\u7c7b\u578b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.healthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"599")),(0,l.kt)("td",{parentName:"tr",align:null},"[200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u5065\u5eb7\u8282\u70b9\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u5065\u5eb7\u8282\u70b9\uff09\u786e\u5b9a\u8282\u70b9\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"200")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"599")),(0,l.kt)("td",{parentName:"tr",align:null},"[429, 500, 503]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u975e\u5065\u5eb7\u8282\u70b9\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.tcp_failures"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09TCP \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.timeouts"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u8d85\u65f6\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.http_failures"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," \u81f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"254")),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u88ab\u52a8\u68c0\u67e5\uff08\u975e\u5065\u5eb7\u8282\u70b9\uff09HTTP \u6216 HTTPS \u7c7b\u578b\u68c0\u67e5\u65f6\uff0c\u786e\u5b9a\u8282\u70b9\u975e\u5065\u5eb7\u7684\u6b21\u6570\u3002")))),(0,l.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Admin API \u5728\u8def\u7531\u4e2d\u542f\u7528\u5065\u5eb7\u68c0\u67e5\u529f\u80fd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1970": 1\n        },\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "timeout": 5,\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                },\n                "req_headers": ["User-Agent: curl/7.29.0"]\n            },\n            "passive": {\n                "healthy": {\n                    "http_statuses": [200, 201],\n                    "successes": 3\n                },\n                "unhealthy": {\n                    "http_statuses": [500],\n                    "http_failures": 3,\n                    "tcp_failures": 3\n                }\n            }\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u542f\u7528\u6210\u529f\u540e\uff0c\u5982\u679c APISIX \u63a2\u6d4b\u5230\u4e0d\u5065\u5eb7\u7684\u8282\u70b9\uff0c\u5c06\u4f1a\u5728\u9519\u8bef\u65e5\u5fd7\u4e2d\u8f93\u51fa\u5982\u4e0b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"enabled healthcheck passive while logging request\nfailed to receive status line from 'nil (127.0.0.1:1980)': closed\nunhealthy TCP increment (1/2) for '(127.0.0.1:1980)'\nfailed to receive status line from 'nil (127.0.0.1:1980)': closed\nunhealthy TCP increment (2/2) for '(127.0.0.1:1980'\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u9700\u8981\u5c06\u9519\u8bef\u65e5\u5fd7\u7684\u7ea7\u522b\u8c03\u6574\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"info")," \u624d\u53ef\u4ee5\u89c2\u6d4b\u5230\u4e0a\u8ff0\u65e5\u5fd7\u4fe1\u606f"))),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/control-api"},"\u63a7\u5236\u63a5\u53e3")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck")," \u63a5\u53e3\u83b7\u53d6\u5065\u5eb7\u68c0\u67e5\u4fe1\u606f\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\ncurl http://127.0.0.1:9090/v1/healthcheck/upstreams/healthycheck -s | jq .\n\n")))}u.isMDXComponent=!0}}]);