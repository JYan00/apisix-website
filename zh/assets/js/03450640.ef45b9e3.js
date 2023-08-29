"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[98793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,v=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(v,l(l({ref:n},c),{},{components:t})):r.createElement(v,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74327:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const i={title:"serverless",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Serverless"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e API \u7f51\u5173 Apache APISIX serverless-pre-function \u548c serverless-post-function \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},l=void 0,s={unversionedId:"plugins/serverless",id:"version-3.4/plugins/serverless",isDocsHomePage:!1,title:"serverless",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e API \u7f51\u5173 Apache APISIX serverless-pre-function \u548c serverless-post-function \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.4/plugins/serverless.md",sourceDirName:"plugins",slug:"/plugins/serverless",permalink:"/zh/docs/apisix/plugins/serverless",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/plugins/serverless.md",tags:[],version:"3.4",frontMatter:{title:"serverless",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Serverless"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e API \u7f51\u5173 Apache APISIX serverless-pre-function \u548c serverless-post-function \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.4/docs",previous:{title:"loki-logger",permalink:"/zh/docs/apisix/plugins/loki-logger"},next:{title:"azure-functions",permalink:"/zh/docs/apisix/plugins/azure-functions"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],p={toc:o};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"APISIX \u6709\u4e24\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"serverless")," \u63d2\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"serverless-pre-function")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"serverless-post-function"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"serverless-pre-function")," \u63d2\u4ef6\u4f1a\u5728\u6307\u5b9a\u9636\u6bb5\u5f00\u59cb\u65f6\u8fd0\u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"serverless-post-function")," \u63d2\u4ef6\u4f1a\u5728\u6307\u5b9a\u9636\u6bb5\u7ed3\u675f\u65f6\u8fd0\u884c\u3002\u8fd9\u4e24\u4e2a\u63d2\u4ef6\u4f7f\u7528\u76f8\u540c\u7684\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"phase"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},'["access"]'),(0,a.kt)("td",{parentName:"tr",align:null},'["rewrite", "access", "header_filter", "body_filter", "log", "before_proxy"]'),(0,a.kt)("td",{parentName:"tr",align:null},"\u6267\u884c serverless \u51fd\u6570\u7684\u9636\u6bb5\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"functions"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8fd0\u884c\u7684\u51fd\u6570\u5217\u8868\u3002\u8be5\u5c5e\u6027\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a\u51fd\u6570\uff0c\u6309\u7167\u5148\u540e\u987a\u5e8f\u6267\u884c\u3002")))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u91cd\u8981")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6b64\u5904\u4ec5\u63a5\u53d7\u51fd\u6570\uff0c\u4e0d\u63a5\u53d7\u5176\u4ed6\u7c7b\u578b\u7684 Lua \u4ee3\u7801\u3002"),(0,a.kt)("p",{parentName:"div"},"\u6bd4\u5982\u533f\u540d\u51fd\u6570\u662f\u5408\u6cd5\u7684\uff1a"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"return function()\n    ngx.log(ngx.ERR, 'one')\nend\n")),(0,a.kt)("p",{parentName:"div"},"\u95ed\u5305\u4e5f\u662f\u5408\u6cd5\u7684\uff1a"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local count = 1\nreturn function()\n    count = count + 1\n    ngx.say(count)\nend\n")),(0,a.kt)("p",{parentName:"div"},"\u4f46\u4e0d\u662f\u51fd\u6570\u7c7b\u578b\u7684\u4ee3\u7801\u5c31\u662f\u975e\u6cd5\u7684\uff1a"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local count = 1\nngx.say(count)\n")))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6")," \u7248\u672c\u5f00\u59cb\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"conf")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," \u4f5c\u4e3a\u524d\u4e24\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"serverless")," \u51fd\u6570\u3002"),(0,a.kt)("p",{parentName:"div"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.12.0")," \u7248\u672c\u4e4b\u524d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"before_proxy")," \u9636\u6bb5\u66fe\u88ab\u79f0\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"balancer"),"\u3002\u8003\u8651\u5230\u8fd9\u4e00\u65b9\u6cd5\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"access")," \u9636\u6bb5\u4e4b\u540e\u3001\u8bf7\u6c42\u5230\u4e0a\u6e38\u4e4b\u524d\u8fd0\u884c\uff0c\u5e76\u4e14\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"balancer")," \u6ca1\u6709\u5173\u8054\uff0c\u56e0\u6b64\u5df2\u7ecf\u66f4\u65b0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"before_proxy"),"\u3002"))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "serverless-pre-function": {\n            "phase": "rewrite",\n            "functions" : ["return function() ngx.log(ngx.ERR, \\"serverless pre function\\"); end"]\n        },\n        "serverless-post-function": {\n            "phase": "rewrite",\n            "functions" : ["return function(conf, ctx) ngx.log(ngx.ERR, \\"match uri \\", ctx.curr_req_matched and ctx.curr_req_matched._path); end"]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5411 APISIX \u53d1\u51fa\u8bf7\u6c42\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"./logs/error.log")," \u4e2d\u53d1\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"serverless pre function")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"match uri /index.html")," \u4e24\u4e2a error \u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\u8868\u793a\u6307\u5b9a\u7684\u51fd\u6570\u5df2\u7ecf\u751f\u6548\u3002"),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);