"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94613:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Debug Mode"},i=void 0,o={unversionedId:"debug-mode",id:"version-3.1/debug-mode",isDocsHomePage:!1,title:"Debug Mode",description:"\u8bbe\u7f6e conf/debug.yaml \u5373\u53ef\u5f00\u542f\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/debug-mode.md",sourceDirName:".",slug:"/debug-mode",permalink:"/zh/docs/apisix/3.1/debug-mode",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/debug-mode.md",tags:[],version:"3.1",frontMatter:{title:"Debug Mode"},sidebar:"version-3.1/docs",previous:{title:"\u63d2\u4ef6\u5f00\u53d1",permalink:"/zh/docs/apisix/3.1/plugin-develop"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/apisix/3.1/FAQ"}},p=[{value:"\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f",id:"\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f",children:[]},{value:"\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f",id:"\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f",children:[]},{value:"\u52a8\u6001\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f",id:"\u52a8\u6001\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f",children:[]}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f"},"\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f"),(0,r.kt)("p",null,"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," \u5373\u53ef\u5f00\u542f\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"basic:\n  enable: true\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u5728 APISIX 2.10 \u4e4b\u524d\uff0c\u5f00\u542f\u57fa\u672c\u8c03\u8bd5\u6a21\u5f0f\u66fe\u7ecf\u662f\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.enable_debug")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello")," \u5f00\u542f\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\uff0c\u8fd9\u65f6\u5019\u5e94\u7b54\u5934\u4e2d\u4f1a\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Apisix-Plugins: limit-conn, limit-count"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:1984/hello -i\nHTTP/1.1 200 OK\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nApisix-Plugins: limit-conn, limit-count\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 1\nServer: openresty\n\nhello world\n")),(0,r.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u4fe1\u606f\u65e0\u6cd5\u901a\u8fc7 HTTP \u5e94\u7b54\u5934\u4f20\u9012\uff0c\u6bd4\u5982\u63d2\u4ef6\u5728 stream \u5b50\u7cfb\u7edf\u91cc\u9762\u6267\u884c\uff0c\n\u90a3\u4e48\u8fd9\u4e2a\u4fe1\u606f\u4f1a\u4ee5 warn \u7b49\u7ea7\u65e5\u5fd7\u5199\u5165\u5230\u9519\u8bef\u65e5\u5fd7\u4e2d\u3002"),(0,r.kt)("h3",{id:"\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f"},"\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f"),(0,r.kt)("p",null,"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," \u4e2d\u7684\u9009\u9879\uff0c\u5f00\u542f\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\u3002\u7531\u4e8e APISIX \u670d\u52a1\u542f\u52a8\u540e\u662f\u6bcf\u79d2\u5b9a\u671f\u68c0\u67e5\u8be5\u6587\u4ef6\uff0c\n\u5f53\u53ef\u4ee5\u6b63\u5e38\u8bfb\u53d6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"#END")," \u7ed3\u5c3e\u65f6\uff0c\u624d\u8ba4\u4e3a\u6587\u4ef6\u5904\u4e8e\u5199\u5b8c\u5173\u95ed\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u6839\u636e\u6587\u4ef6\u6700\u540e\u4fee\u6539\u65f6\u95f4\u5224\u65ad\u6587\u4ef6\u5185\u5bb9\u662f\u5426\u6709\u53d8\u5316\uff0c\u5982\u6709\u53d8\u5316\u5219\u91cd\u65b0\u52a0\u8f7d\uff0c\u5982\u6ca1\u53d8\u5316\u5219\u8df3\u8fc7\u672c\u6b21\u68c0\u67e5\u3002\n\u6240\u4ee5\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\u7684\u5f00\u542f\u3001\u5173\u95ed\u90fd\u662f\u70ed\u66f4\u65b0\u65b9\u5f0f\u5b8c\u6210\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hook_conf.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f hook \u8ffd\u8e2a\u8c03\u8bd5\u3002\u5f00\u542f\u540e\u5c06\u6253\u5370\u6307\u5b9a\u6a21\u5757\u65b9\u6cd5\u7684\u8bf7\u6c42\u53c2\u6570\u6216\u8fd4\u56de\u503c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hook_conf.name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f hook \u8ffd\u8e2a\u8c03\u8bd5\u7684\u6a21\u5757\u5217\u8868\u540d\u79f0\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hook_conf.log_level"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6253\u5370\u8bf7\u6c42\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u65e5\u5fd7\u7ea7\u522b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"warn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_input_args"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6253\u5370\u8f93\u5165\u53c2\u6570\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hook_conf.is_print_return_value"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6253\u5370\u8fd4\u56de\u503c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("p",null,"\u8bf7\u770b\u4e0b\u9762\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"hook_conf:\n  enable: false # \u662f\u5426\u5f00\u542f hook \u8ffd\u8e2a\u8c03\u8bd5\n  name: hook_phase # \u5f00\u542f hook \u8ffd\u8e2a\u8c03\u8bd5\u7684\u6a21\u5757\u5217\u8868\u540d\u79f0\n  log_level: warn # \u65e5\u5fd7\u7ea7\u522b\n  is_print_input_args: true # \u662f\u5426\u6253\u5370\u8f93\u5165\u53c2\u6570\n  is_print_return_value: true # \u662f\u5426\u6253\u5370\u8fd4\u56de\u503c\n\nhook_phase: # \u6a21\u5757\u51fd\u6570\u5217\u8868\uff0c\u540d\u5b57\uff1ahook_phase\n  apisix: # \u5f15\u7528\u7684\u6a21\u5757\u540d\u79f0\n    - http_access_phase # \u51fd\u6570\u540d\uff1a\u6570\u7ec4\n    - http_header_filter_phase\n    - http_body_filter_phase\n    - http_log_phase\n#END\n")),(0,r.kt)("h3",{id:"\u52a8\u6001\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f"},"\u52a8\u6001\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f"),(0,r.kt)("p",null,"\u52a8\u6001\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\u662f\u57fa\u4e8e\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\uff0c\u53ef\u4ee5\u7531\u5355\u4e2a\u8bf7\u6c42\u52a8\u6001\u5f00\u542f\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\u3002\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/debug.yaml")," \u4e2d\u7684\u9009\u9879\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"http_filter:\n  enable: true # \u662f\u5426\u52a8\u6001\u5f00\u542f\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\n  enable_header_name: X-APISIX-Dynamic-Debug # \u8ffd\u8e2a\u643a\u5e26\u6b64 header \u7684\u8bf7\u6c42\n......\n#END\n")),(0,r.kt)("p",null,"\u52a8\u6001\u5f00\u542f\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\uff0c\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl 127.0.0.1:9090/hello --header 'X-APISIX-Dynamic-Debug: foo'\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u52a8\u6001\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\u65e0\u6cd5\u8c03\u8bd5 ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.http_access_phase"),"\uff0c \u6a21\u5757\uff08\u56e0\u4e3a\u8bf7\u6c42\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.http_access_phase")," \u6a21\u5757\u540e\uff0c\u624d\u4f1a\u5224\u65ad\u662f\u5426\u52a8\u6001\u5f00\u542f\u9ad8\u7ea7\u8c03\u8bd5\u6a21\u5f0f\uff09\u3002"))}c.isMDXComponent=!0}}]);