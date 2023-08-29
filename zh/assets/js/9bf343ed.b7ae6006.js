"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[59121],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>m});var i=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=i.createContext({}),l=function(n){var e=i.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=l(n.components);return i.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,p=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),f=l(t),m=r,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?i.createElement(g,a(a({ref:e},s),{},{components:t})):i.createElement(g,a({ref:e},s))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},20062:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const o={title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e"},a=void 0,c={unversionedId:"customize-nginx-configuration",id:"version-3.4/customize-nginx-configuration",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e",description:"APISIX \u4f1a\u901a\u8fc7 apisix/cli/ngx_tpl.lua \u8fd9\u4e2a\u6a21\u677f\u548c conf/config-default.yaml \u52a0 conf/config.yaml \u7684\u914d\u7f6e\u751f\u6210 Nginx \u914d\u7f6e\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.4/customize-nginx-configuration.md",sourceDirName:".",slug:"/customize-nginx-configuration",permalink:"/zh/docs/apisix/customize-nginx-configuration",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/customize-nginx-configuration.md",tags:[],version:"3.4",frontMatter:{title:"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e"},sidebar:"version-3.4/docs",previous:{title:"gRPC \u4ee3\u7406",permalink:"/zh/docs/apisix/grpc-proxy"},next:{title:"\u8bc1\u4e66",permalink:"/zh/docs/apisix/certificate"}},p=[],l={toc:p};function s(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"APISIX \u4f1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix/cli/ngx_tpl.lua")," \u8fd9\u4e2a\u6a21\u677f\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," \u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u7684\u914d\u7f6e\u751f\u6210 Nginx \u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u6267\u884c\u5b8c ",(0,r.kt)("inlineCode",{parentName:"p"},"./bin/apisix start"),"\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," \u770b\u5230\u751f\u6210\u7684 Nginx \u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e\u6587\u4ef6\u4e4b\u524d\uff0c\u70e6\u8bf7\u4ed4\u7ec6\u9605\u8bfb ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),"\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u91cc\u9762\u8986\u76d6\u6389\u9ed8\u8ba4\u503c\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx_snippet")," \u4e4b\u7c7b\u7684\u914d\u7f6e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," \u91cc\u9762\u6ce8\u5165\u4f60\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n# config.yaml \u91cc\u9762\u7684\u5185\u5bb9\nnginx_config:\n    main_configuration_snippet: |\n        daemon on;\n    http_configuration_snippet: |\n        server\n        {\n            listen 45651;\n            server_name _;\n            access_log off;\n\n            location /ysec_status {\n                req_status_show;\n                allow 127.0.0.1;\n                deny all;\n            }\n        }\n\n        chunked_transfer_encoding on;\n\n    http_server_configuration_snippet: |\n        set $my "var";\n    http_admin_configuration_snippet: |\n        log_format admin "$request_time $pipe";\n    http_end_configuration_snippet: |\n        server_names_hash_bucket_size 128;\n    stream_configuration_snippet: |\n        tcp_nodelay off;\n...\n')),(0,r.kt)("p",null,"\u6ce8\u610f",(0,r.kt)("inlineCode",{parentName:"p"},"nginx_config"),"\u53ca\u5176\u5b50\u9879\u7684\u683c\u5f0f\u7f29\u8fdb\uff0c\u5728\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"./bin/apisix start"),"\u65f6\uff0c\u9519\u8bef\u7684\u7f29\u8fdb\u5c06\u5bfc\u81f4\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf"),"\u6587\u4ef6\u5931\u8d25\u3002"))}s.isMDXComponent=!0}}]);