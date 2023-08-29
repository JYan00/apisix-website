"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||r;return t?a.createElement(k,p(p({ref:n},u),{},{components:t})):a.createElement(k,p({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<r;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14981:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={title:"\u63d2\u4ef6\u5f00\u53d1"},p=void 0,i={unversionedId:"plugin-develop",id:"version-3.0/plugin-develop",isDocsHomePage:!1,title:"\u63d2\u4ef6\u5f00\u53d1",description:"\u6b64\u6587\u6863\u662f\u5173\u4e8e lua \u8bed\u8a00\u7684\u63d2\u4ef6\u5f00\u53d1\uff0c\u5176\u4ed6\u8bed\u8a00\u8bf7\u770b\uff1aexternal plugin\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/plugin-develop.md",sourceDirName:".",slug:"/plugin-develop",permalink:"/zh/docs/apisix/3.0/plugin-develop",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/plugin-develop.md",tags:[],version:"3.0",frontMatter:{title:"\u63d2\u4ef6\u5f00\u53d1"},sidebar:"version-3.0/docs",previous:{title:"Introducing APISIX's testing framework",permalink:"/zh/docs/apisix/3.0/internal/testing-framework"},next:{title:"Debug Mode",permalink:"/zh/docs/apisix/3.0/debug-mode"}},o=[{value:"\u63d2\u4ef6\u653e\u7f6e\u8def\u5f84",id:"\u63d2\u4ef6\u653e\u7f6e\u8def\u5f84",children:[]},{value:"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56",id:"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56",children:[]},{value:"\u63d2\u4ef6\u547d\u540d\uff0c\u4f18\u5148\u7ea7\u548c\u5176\u4ed6",id:"\u63d2\u4ef6\u547d\u540d\u4f18\u5148\u7ea7\u548c\u5176\u4ed6",children:[]},{value:"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c",id:"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c",children:[]},{value:"\u786e\u5b9a\u6267\u884c\u9636\u6bb5",id:"\u786e\u5b9a\u6267\u884c\u9636\u6bb5",children:[{value:"APISIX \u7684\u81ea\u5b9a\u4e49\u9636\u6bb5",id:"apisix-\u7684\u81ea\u5b9a\u4e49\u9636\u6bb5",children:[]}]},{value:"\u7f16\u5199\u6267\u884c\u903b\u8f91",id:"\u7f16\u5199\u6267\u884c\u903b\u8f91",children:[{value:"conf \u53c2\u6570",id:"conf-\u53c2\u6570",children:[]},{value:"ctx \u53c2\u6570",id:"ctx-\u53c2\u6570",children:[]}]},{value:"\u6ce8\u518c\u516c\u5171\u63a5\u53e3",id:"\u6ce8\u518c\u516c\u5171\u63a5\u53e3",children:[]},{value:"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3",id:"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3",children:[]},{value:"\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf",id:"\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf",children:[]},{value:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",id:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",children:[{value:"\u9644\u4e0a test-nginx \u6267\u884c\u6d41\u7a0b",id:"\u9644\u4e0a-test-nginx-\u6267\u884c\u6d41\u7a0b",children:[]}]}],c={toc:o};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6b64\u6587\u6863\u662f\u5173\u4e8e lua \u8bed\u8a00\u7684\u63d2\u4ef6\u5f00\u53d1\uff0c\u5176\u4ed6\u8bed\u8a00\u8bf7\u770b\uff1a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.0/external-plugin"},"external plugin"),"\u3002"),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u653e\u7f6e\u8def\u5f84"},"\u63d2\u4ef6\u653e\u7f6e\u8def\u5f84"),(0,l.kt)("p",null,"Apache APISIX \u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u6765\u6dfb\u52a0\u65b0\u7684\u529f\u80fd\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 Apache APISIX \u7684\u6e90\u4ee3\u7801\u5e76\u91cd\u65b0\u53d1\u5e03 (\u4e0d\u63a8\u8350)\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"extra_lua_path")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"extra_lua_cpath")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"conf/config.yaml")," \u4ee5\u52a0\u8f7d\u4f60\u81ea\u5df1\u7684\u4ee3\u7801\u6587\u4ef6\u3002 \u4f60\u5e94\u8be5\u7ed9\u81ea\u5df1\u7684\u4ee3\u7801\u6587\u4ef6\u8d77\u4e00\u4e2a\u4e0d\u5305\u542b\u5728\u539f\u6765\u5e93\u4e2d\u7684\u540d\u5b57\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u76f8\u540c\u540d\u79f0\u7684\u4ee3\u7801\u6587\u4ef6\uff0c\u4f46\u662f\u5982\u679c\u6709\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u8986\u76d6\u5185\u7f6e\u7684\u4ee3\u7801\u6587\u4ef6\u3002")),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u76ee\u5f55\u7ed3\u6784\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 example\n\u2502\xa0\xa0 \u2514\u2500\u2500 apisix\n\u2502\xa0\xa0     \u251c\u2500\u2500 plugins\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 3rd-party.lua\n\u2502\xa0\xa0     \u2514\u2500\u2500 stream\n\u2502\xa0\xa0         \u2514\u2500\u2500 plugins\n\u2502\xa0\xa0             \u2514\u2500\u2500 3rd-party.lua\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u9700\u8981\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u76ee\u5f55\uff0c\u8bf7\u5728\u8be5\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"/apisix/plugins")," \u7684\u5b50\u76ee\u5f55\u3002"))),(0,l.kt)("p",null,"\u63a5\u7740\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n    ...\n    extra_lua_path: "/path/to/example/?.lua"\n')),(0,l.kt)("p",null,"\u73b0\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},'require "apisix.plugins.3rd-party"')," \u4f1a\u52a0\u8f7d\u4f60\u81ea\u5df1\u7684\u63d2\u4ef6\uff0c \u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},'require "apisix.plugins.jwt-auth"'),"\u4f1a\u52a0\u8f7d ",(0,l.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u53ef\u80fd\u4f60\u4f1a\u60f3\u8986\u76d6\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"lua_module_hook")," \u6765\u4f7f\u4f60\u7684 hook \u751f\u6548\u3002"),(0,l.kt)("p",null,"\u4f60\u7684\u914d\u7f6e\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n    ...\n    extra_lua_path: "/path/to/example/?.lua"\n    lua_module_hook: "my_hook"\n')),(0,l.kt)("p",null,"\u5f53 APISIX \u542f\u52a8\u7684\u65f6\u5019\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"example/my_hook.lua")," \u5c31\u4f1a\u88ab\u52a0\u8f7d\uff0c\u8fd9\u65f6\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u94a9\u5b50\u5728 APISIX \u4e2d\u6765\u5168\u5c40\u66ff\u6362\u6389\u4e00\u4e2a\u65b9\u6cd5\u3002\n\u8fd9\u4e2a\u4f8b\u5b50\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/example/my_hook.lua"},"my_hook.lua")," \u53ef\u4ee5\u5728\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"example")," \u8def\u5f84\u4e0b\u88ab\u627e\u5230\u3002"),(0,l.kt)("h2",{id:"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56"},"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u63d2\u4ef6\uff0c\u6d89\u53ca\u5230\u4e00\u4e9b\u5916\u90e8\u7684\u4f9d\u8d56\u548c\u4e09\u65b9\u5e93\uff0c\u8bf7\u9996\u5148\u68c0\u67e5\u4e00\u4e0b\u4f9d\u8d56\u9879\u7684\u5185\u5bb9\u3002 \u5982\u679c\u63d2\u4ef6\u9700\u8981\u7528\u5230\u5171\u4eab\u5185\u5b58\uff0c\u9700\u8981\u5728 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.0/customize-nginx-configuration"},"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e"),"\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# put this in config.yaml:\nnginx_config:\n    http_configuration_snippet: |\n        # for openid-connect plugin\n        lua_shared_dict discovery             1m; # cache for discovery metadata documents\n        lua_shared_dict jwks                  1m; # cache for JWKs\n        lua_shared_dict introspection        10m; # cache for JWT verification results\n")),(0,l.kt)("p",null,"\u63d2\u4ef6\u672c\u8eab\u63d0\u4f9b\u4e86 init \u65b9\u6cd5\u3002\u65b9\u4fbf\u63d2\u4ef6\u52a0\u8f7d\u540e\u505a\u521d\u59cb\u5316\u52a8\u4f5c\u3002\u5982\u679c\u4f60\u9700\u8981\u6e05\u7406\u521d\u59cb\u5316\u52a8\u4f5c\u521b\u5efa\u51fa\u6765\u7684\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5\u5728\u5bf9\u5e94\u7684 destroy \u65b9\u6cd5\u91cc\u5b8c\u6210\u8fd9\u4e00\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u6ce8\uff1a\u5982\u679c\u90e8\u5206\u63d2\u4ef6\u7684\u529f\u80fd\u5b9e\u73b0\uff0c\u9700\u8981\u5728 Nginx \u521d\u59cb\u5316\u542f\u52a8\uff0c\u5219\u53ef\u80fd\u9700\u8981\u5728 ",(0,l.kt)("strong",{parentName:"p"},"apisix/init.lua")," \u6587\u4ef6\u7684\u521d\u59cb\u5316\u65b9\u6cd5 http_init \u4e2d\u6dfb\u52a0\u903b\u8f91\uff0c\u5e76\u4e14\u53ef\u80fd\u9700\u8981\u5728 ",(0,l.kt)("strong",{parentName:"p"},"apisix/cli/ngx_tpl.lua")," \u6587\u4ef6\u4e2d\uff0c\u5bf9 Nginx \u914d\u7f6e\u6587\u4ef6\u751f\u6210\u7684\u90e8\u5206\uff0c\u6dfb\u52a0\u4e00\u4e9b\u4f60\u9700\u8981\u7684\u5904\u7406\u3002\u4f46\u662f\u8fd9\u6837\u5bb9\u6613\u5bf9\u5168\u5c40\u4ea7\u751f\u5f71\u54cd\uff0c\u6839\u636e\u73b0\u6709\u7684\u63d2\u4ef6\u673a\u5236\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6211\u4eec\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\uff0c\u9664\u975e\u4f60\u5df2\u7ecf\u5bf9\u4ee3\u7801\u5b8c\u5168\u638c\u63e1"),"\u3002"),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u547d\u540d\u4f18\u5148\u7ea7\u548c\u5176\u4ed6"},"\u63d2\u4ef6\u547d\u540d\uff0c\u4f18\u5148\u7ea7\u548c\u5176\u4ed6"),(0,l.kt)("p",null,"\u7ed9\u63d2\u4ef6\u53d6\u4e00\u4e2a\u5f88\u68d2\u7684\u540d\u5b57\uff0c\u786e\u5b9a\u63d2\u4ef6\u7684\u52a0\u8f7d\u4f18\u5148\u7ea7\uff0c\u7136\u540e\u5728 ",(0,l.kt)("strong",{parentName:"p"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e0a\u4f60\u7684\u63d2\u4ef6\u540d\u3002\u4f8b\u5982 example-plugin \u8fd9\u4e2a\u63d2\u4ef6\uff0c\n\u9700\u8981\u5728\u4ee3\u7801\u91cc\u6307\u5b9a\u63d2\u4ef6\u540d\u79f0\uff08\u540d\u79f0\u662f\u63d2\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u4e0d\u53ef\u91cd\u540d\uff09\uff0c\u5728 ",(0,l.kt)("strong",{parentName:"p"},"apisix/plugins/example-plugin.lua")," \u6587\u4ef6\u4e2d\u53ef\u4ee5\u770b\u5230\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local plugin_name = "example-plugin"\n\nlocal _M = {\n    version = 0.1,\n    priority = 0,\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n')),(0,l.kt)("p",null,"\u6ce8\uff1a\u65b0\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\uff08 priority \u5c5e\u6027 \uff09\u4e0d\u80fd\u4e0e\u73b0\u6709\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u76f8\u540c\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.0/control-api#get-v1schema"},"control API")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/schema")," \u65b9\u6cd5\u67e5\u770b\u6240\u6709\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u3002\u53e6\u5916\uff0c\u540c\u4e00\u4e2a\u9636\u6bb5\u91cc\u9762\uff0c\u4f18\u5148\u7ea7 ( priority ) \u503c\u5927\u7684\u63d2\u4ef6\uff0c\u4f1a\u4f18\u5148\u6267\u884c\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"example-plugin")," \u7684\u4f18\u5148\u7ea7\u662f 0 \uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ip-restriction")," \u7684\u4f18\u5148\u7ea7\u662f 3000 \uff0c\u6240\u4ee5\u5728\u6bcf\u4e2a\u9636\u6bb5\uff0c\u4f1a\u5148\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"ip-restriction")," \u63d2\u4ef6\uff0c\u518d\u53bb\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"example-plugin")," \u63d2\u4ef6\u3002\u8fd9\u91cc\u7684\u201c\u9636\u6bb5\u201d\u7684\u5b9a\u4e49\uff0c\u53c2\u89c1\u540e\u7eed\u7684 ",(0,l.kt)("a",{parentName:"p",href:"#%E7%A1%AE%E5%AE%9A%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5"},"\u786e\u5b9a\u6267\u884c\u9636\u6bb5")," \u8fd9\u4e00\u8282\u3002\u5bf9\u4e8e\u4f60\u7684\u63d2\u4ef6\uff0c\u5efa\u8bae\u91c7\u7528 1 \u5230 99 \u4e4b\u95f4\u7684\u4f18\u5148\u7ea7\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"conf/config-default.yaml")," \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5217\u51fa\u4e86\u542f\u7528\u7684\u63d2\u4ef6\uff08\u90fd\u662f\u4ee5\u63d2\u4ef6\u540d\u6307\u5b9a\u7684\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  - limit-req\n  - limit-count\n  - limit-conn\n  - key-auth\n  - prometheus\n  - node-status\n  - jwt-auth\n  - zipkin\n  - ip-restriction\n  - grpc-transcode\n  - serverless-pre-function\n  - serverless-post-function\n  - openid-connect\n  - proxy-rewrite\n  - redirect\n  ...\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u5148\u540e\u987a\u5e8f\u4e0e\u6267\u884c\u987a\u5e8f\u65e0\u5173\u3002"),(0,l.kt)("p",null,"\u7279\u522b\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4f60\u7684\u63d2\u4ef6\u6709\u65b0\u5efa\u81ea\u5df1\u7684\u4ee3\u7801\u76ee\u5f55\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u4fee\u6539 Makefile \u6587\u4ef6\uff0c\u65b0\u589e\u521b\u5efa\u6587\u4ef6\u5939\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$(INSTALL) -d $(INST_LUADIR)/apisix/plugins/skywalking\n$(INSTALL) apisix/plugins/skywalking/*.lua $(INST_LUADIR)/apisix/plugins/skywalking/\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"_M")," \u4e2d\u8fd8\u6709\u5176\u4ed6\u5b57\u6bb5\u4f1a\u5f71\u54cd\u5230\u63d2\u4ef6\u7684\u884c\u4e3a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    ...\n    type = 'auth',\n    run_policy = 'prefer_route',\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"run_policy")," \u5b57\u6bb5\u53ef\u4ee5\u7528\u6765\u63a7\u5236\u63d2\u4ef6\u6267\u884c\u3002\u5f53\u8fd9\u4e2a\u5b57\u6bb5\u8bbe\u7f6e\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"prefer_route")," \u65f6\uff0c\u4e14\u8be5\u63d2\u4ef6\u540c\u65f6\u914d\u7f6e\u5728\u5168\u5c40\u548c\u8def\u7531\u7ea7\u522b\uff0c\u90a3\u4e48\u53ea\u6709\u8def\u7531\u7ea7\u522b\u7684\u914d\u7f6e\u751f\u6548\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u63d2\u4ef6\u9700\u8981\u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u4e00\u8d77\u4f7f\u7528\uff0c\u9700\u8981\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u8bbe\u7f6e\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"auth"),"\u3002\u8be6\u60c5\u89c1\u4e0b\u6587\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c"},"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c"),(0,l.kt)("p",null,"\u5b9a\u4e49\u63d2\u4ef6\u7684\u914d\u7f6e\u9879\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSON Schema")," \u63cf\u8ff0\uff0c\u5e76\u5b8c\u6210\u5bf9 JSON \u7684\u6821\u9a8c\uff0c\u8fd9\u6837\u65b9\u4fbf\u5bf9\u914d\u7f6e\u7684\u6570\u636e\u89c4\u683c\u8fdb\u884c\u9a8c\u8bc1\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u5b8c\u6574\u6027\u4ee5\u53ca\u7a0b\u5e8f\u7684\u5065\u58ee\u6027\u3002\u540c\u6837\uff0c\u6211\u4eec\u4ee5 example-plugin \u63d2\u4ef6\u4e3a\u4f8b\uff0c\u770b\u770b\u4ed6\u7684\u914d\u7f6e\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "example-plugin": {\n    "i": 1,\n    "s": "s",\n    "t": [1]\n  }\n}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u770b\u4e0b\u4ed6\u7684 Schema \u63cf\u8ff0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local schema = {\n    type = "object",\n    properties = {\n        i = {type = "number", minimum = 0},\n        s = {type = "string"},\n        t = {type = "array", minItems = 1},\n        ip = {type = "string"},\n        port = {type = "integer"},\n    },\n    required = {"i"},\n}\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a schema \u5b9a\u4e49\u4e86\u4e00\u4e2a\u975e\u8d1f\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"i"),"\uff0c\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),"\uff0c\u975e\u7a7a\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"t"),"\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),"\u3002\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u662f\u5fc5\u9700\u7684\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u9700\u8981\u5b9e\u73b0 ",(0,l.kt)("strong",{parentName:"p"},"check_schema(conf)")," \u65b9\u6cd5\uff0c\u5b8c\u6210\u914d\u7f6e\u53c2\u6570\u7684\u5408\u6cd5\u6027\u6821\u9a8c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.check_schema(conf)\n    return core.schema.check(schema, conf)\nend\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u9879\u76ee\u5df2\u7ecf\u63d0\u4f9b\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"core.schema.check")," \u516c\u5171\u65b9\u6cd5\uff0c\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u5b8c\u6210\u914d\u7f6e\u53c2\u6570\u6821\u9a8c\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u63d2\u4ef6\u9700\u8981\u4f7f\u7528\u4e00\u4e9b\u5143\u6570\u636e\uff0c\u53ef\u4ee5\u5b9a\u4e49\u63d2\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata_schema")," \uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"admin api")," \u52a8\u6001\u7684\u7ba1\u7406\u8fd9\u4e9b\u5143\u6570\u636e\u4e86\u3002\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local metadata_schema = {\n    type = "object",\n    properties = {\n        ikey = {type = "number", minimum = 0},\n        skey = {type = "string"},\n    },\n    required = {"ikey", "skey"},\n}\n\nlocal plugin_name = "example-plugin"\n\nlocal _M = {\n    version = 0.1,\n    priority = 0,        -- TODO: add a type field, may be a good idea\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u4e4b\u524d\u89c1\u8fc7 key-auth \u8fd9\u4e2a\u63d2\u4ef6\u5728\u5b83\u7684\u6a21\u5757\u5b9a\u4e49\u65f6\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"type = 'auth'"),"\u3002\n\u5f53\u4e00\u4e2a\u63d2\u4ef6\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"type = 'auth'"),"\uff0c\u8bf4\u660e\u5b83\u662f\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u8ba4\u8bc1\u63d2\u4ef6\u9700\u8981\u5728\u6267\u884c\u540e\u9009\u62e9\u5bf9\u5e94\u7684 consumer\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5728 key-auth \u63d2\u4ef6\u4e2d\uff0c\u5b83\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"apikey")," \u8bf7\u6c42\u5934\u83b7\u53d6\u5bf9\u5e94\u7684 consumer\uff0c\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer.attach_consumer")," \u8bbe\u7f6e\u5b83\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u8d44\u6e90\u4e00\u8d77\u4f7f\u7528\uff0c\u8ba4\u8bc1\u63d2\u4ef6\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer_schema")," \u6765\u68c0\u9a8c ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u8d44\u6e90\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," \u5c5e\u6027\u91cc\u9762\u7684\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f key-auth \u63d2\u4ef6\u7684 consumer \u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "Joe",\n  "plugins": {\n    "key-auth": {\n      "key": "Joe\'s key"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u4f60\u5728\u521b\u5efa ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/zh/latest/admin-api.md#consumer"},"Consumer")," \u65f6\u4f1a\u7528\u5230\u5b83\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u68c0\u9a8c\u8fd9\u4e2a\u914d\u7f6e\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u4f7f\u7528\u4e86\u5982\u4e0b\u7684 schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local consumer_schema = {\n    type = "object",\n    properties = {\n        key = {type = "string"},\n    },\n    required = {"key"},\n}\n')),(0,l.kt)("p",null,"\u6ce8\u610f key-auth \u7684 ",(0,l.kt)("strong",{parentName:"p"},"check_schema(conf)")," \u65b9\u6cd5\u548c example-plugin \u7684\u540c\u540d\u65b9\u6cd5\u7684\u533a\u522b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- key-auth\nfunction _M.check_schema(conf, schema_type)\n    if schema_type == core.schema.TYPE_CONSUMER then\n        return core.schema.check(consumer_schema, conf)\n    else\n        return core.schema.check(schema, conf)\n    end\nend\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- example-plugin\nfunction _M.check_schema(conf, schema_type)\n    return core.schema.check(schema, conf)\nend\n")),(0,l.kt)("h2",{id:"\u786e\u5b9a\u6267\u884c\u9636\u6bb5"},"\u786e\u5b9a\u6267\u884c\u9636\u6bb5"),(0,l.kt)("p",null,"\u6839\u636e\u4e1a\u52a1\u529f\u80fd\uff0c\u786e\u5b9a\u4f60\u7684\u63d2\u4ef6\u9700\u8981\u5728\u54ea\u4e2a\u9636\u6bb5\u6267\u884c\u3002 key-auth \u662f\u4e00\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u5728 rewrite \u9636\u6bb5\u6267\u884c\u3002\u5728 APISIX\uff0c\u53ea\u6709\u8ba4\u8bc1\u903b\u8f91\u53ef\u4ee5\u5728 rewrite \u9636\u6bb5\u91cc\u9762\u5b8c\u6210\uff0c\u5176\u4ed6\u9700\u8981\u5728\u4ee3\u7406\u5230\u4e0a\u6e38\u4e4b\u524d\u6267\u884c\u7684\u903b\u8f91\u90fd\u662f\u5728 access \u9636\u6bb5\u5b8c\u6210\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u6211\u4eec\u4e0d\u80fd\u5728 rewrite \u548c access \u9636\u6bb5\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"strong"},"ngx.exit"),"\u3001",(0,l.kt)("inlineCode",{parentName:"strong"},"ngx.redirect")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"strong"},"core.respond.exit"),"\u3002\u5982\u679c\u786e\u5b9e\u9700\u8981\u9000\u51fa\uff0c\u53ea\u9700\u8981 return \u72b6\u6001\u7801\u548c\u6b63\u6587\uff0c\u63d2\u4ef6\u5f15\u64ce\u5c06\u4f7f\u7528\u8fd4\u56de\u7684\u72b6\u6001\u7801\u548c\u6b63\u6587\u8fdb\u884c\u9000\u51fa\u3002",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/apache/apisix/blob/35269581e21473e1a27b11cceca6f773cad0192a/apisix/plugins/limit-count.lua#L177"},"\u4f8b\u5b50"))),(0,l.kt)("h3",{id:"apisix-\u7684\u81ea\u5b9a\u4e49\u9636\u6bb5"},"APISIX \u7684\u81ea\u5b9a\u4e49\u9636\u6bb5"),(0,l.kt)("p",null,"\u9664\u4e86 OpenResty \u7684\u9636\u6bb5\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u989d\u5916\u7684\u9636\u6bb5\u6765\u6ee1\u8db3\u7279\u5b9a\u7684\u76ee\u7684\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"delayed_body_filter"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.delayed_body_filter(conf, ctx)\n    -- delayed_body_filter \u5728 body_filter \u4e4b\u540e\u88ab\u8c03\u7528\u3002\n    -- \u5b83\u88ab tracing \u7c7b\u578b\u63d2\u4ef6\u7528\u6765\u5728 body_filter \u4e4b\u540e\u7acb\u5373\u7ed3\u675f span\u3002\nend\n")),(0,l.kt)("h2",{id:"\u7f16\u5199\u6267\u884c\u903b\u8f91"},"\u7f16\u5199\u6267\u884c\u903b\u8f91"),(0,l.kt)("p",null,"\u5728\u5bf9\u5e94\u7684\u9636\u6bb5\u65b9\u6cd5\u91cc\u7f16\u5199\u529f\u80fd\u7684\u903b\u8f91\u4ee3\u7801\uff0c\u5728\u9636\u6bb5\u65b9\u6cd5\u4e2d\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ctx")," \u4e24\u4e2a\u53c2\u6570\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-conn")," \u63d2\u4ef6\u914d\u7f6e\u4e3a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"conf-\u53c2\u6570"},"conf \u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"conf")," \u53c2\u6570\u662f\u63d2\u4ef6\u7684\u76f8\u5173\u914d\u7f6e\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"core.log.warn(core.json.encode(conf))")," \u5c06\u5176\u8f93\u51fa\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"error.log")," \u4e2d\u8fdb\u884c\u67e5\u770b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.access(conf, ctx)\n    core.log.warn(core.json.encode(conf))\n    ......\nend\n")),(0,l.kt)("p",null,"conf:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rejected_code": 503,\n  "burst": 0,\n  "default_conn_delay": 0.1,\n  "conn": 1,\n  "key": "remote_addr"\n}\n')),(0,l.kt)("h3",{id:"ctx-\u53c2\u6570"},"ctx \u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ctx")," \u53c2\u6570\u7f13\u5b58\u4e86\u8bf7\u6c42\u76f8\u5173\u7684\u6570\u636e\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"core.log.warn(core.json.encode(ctx, true))")," \u5c06\u5176\u8f93\u51fa\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"error.log")," \u4e2d\u8fdb\u884c\u67e5\u770b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.access(conf, ctx)\n    core.log.warn(core.json.encode(ctx, true))\n    ......\nend\n")),(0,l.kt)("h2",{id:"\u6ce8\u518c\u516c\u5171\u63a5\u53e3"},"\u6ce8\u518c\u516c\u5171\u63a5\u53e3"),(0,l.kt)("p",null,"\u63d2\u4ef6\u53ef\u4ee5\u6ce8\u518c\u66b4\u9732\u7ed9\u516c\u7f51\u7684\u63a5\u53e3\u3002\u4ee5 jwt-auth \u63d2\u4ef6\u4e3a\u4f8b\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u4e3a\u4e86\u8ba9\u5ba2\u6237\u7aef\u80fd\u591f\u7b7e\u540d\uff0c\u6ce8\u518c\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /apisix/plugin/jwt/sign")," \u8fd9\u4e2a\u63a5\u53e3\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local function gen_token()\n    -- ...\nend\n\nfunction _M.api()\n    return {\n        {\n            methods = {"GET"},\n            uri = "/apisix/plugin/jwt/sign",\n            handler = gen_token,\n        }\n    }\nend\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u6ce8\u518c\u7684\u63a5\u53e3\u5c06\u4e0d\u4f1a\u9ed8\u8ba4\u66b4\u9732\uff0c\u9700\u8981\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api"},"public-api \u63d2\u4ef6"),"\u6765\u66b4\u9732\u5b83\u3002"),(0,l.kt)("h2",{id:"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3"},"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u66b4\u9732 API \u5230 localhost \u6216\u5185\u7f51\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.0/control-api"},"Control API")," \u6765\u66b4\u9732\u5b83\u3002"),(0,l.kt)("p",null,"Take a look at example-plugin plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local function hello()\n    local args = ngx.req.get_uri_args()\n    if args["json"] then\n        return 200, {msg = "world"}\n    else\n        return 200, "world\\n"\n    end\nend\n\n\nfunction _M.control_api()\n    return {\n        {\n            methods = {"GET"},\n            uris = {"/v1/plugin/example-plugin/hello"},\n            handler = hello,\n        }\n    }\nend\n')),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u6539\u8fc7\u9ed8\u8ba4\u7684 control API \u914d\u7f6e\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u66b4\u9732\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /v1/plugin/example-plugin/hello")," API \u53ea\u6709\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u624d\u80fd\u8bbf\u95ee\u5b83\u3002\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X GET "http://127.0.0.1:9090/v1/plugin/example-plugin/hello"\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.0/control-api"},"\u67e5\u770b\u66f4\u591a\u6709\u5173 control API \u4ecb\u7ecd")),(0,l.kt)("h2",{id:"\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf"},"\u6ce8\u518c\u81ea\u5b9a\u4e49\u53d8\u91cf"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 APISIX \u7684\u8bb8\u591a\u5730\u65b9\u4f7f\u7528\u53d8\u91cf\u3002\u4f8b\u5982\uff0c\u5728 http-logger \u4e2d\u81ea\u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f\uff0c\u7528\u5b83\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-*")," \u63d2\u4ef6\u7684\u952e\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5185\u7f6e\u7684\u53d8\u91cf\u662f\u4e0d\u591f\u7684\u3002\u56e0\u6b64\uff0cAPISIX \u5141\u8bb8\u5f00\u53d1\u8005\u5728\u5168\u5c40\u8303\u56f4\u5185\u6ce8\u518c\u4ed6\u4eec\u7684\u53d8\u91cf\uff0c\u5e76\u5c06\u5b83\u4eec\u4f5c\u4e3a\u666e\u901a\u7684\u5185\u7f6e\u53d8\u91cf\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u8ba9\u6211\u4eec\u6ce8\u518c\u4e00\u4e2a\u53eb\u505a ",(0,l.kt)("inlineCode",{parentName:"p"},"a6_labels_zone")," \u7684\u53d8\u91cf\u6765\u83b7\u53d6\u8def\u7531\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"zone")," \u6807\u7b7e\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'local core = require "apisix.core"\n\ncore.ctx.register_var("a6_labels_zone", function(ctx)\n    local route = ctx.matched_route and ctx.matched_route.value\n    if route and route.labels then\n        return route.labels.zone\n    end\n    return nil\nend)\n')),(0,l.kt)("p",null,"\u6b64\u540e\uff0c\u4efb\u4f55\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"$a6_labels_zone")," \u7684\u83b7\u53d6\u64cd\u4f5c\u90fd\u4f1a\u8c03\u7528\u6ce8\u518c\u7684\u83b7\u53d6\u5668\u6765\u83b7\u53d6\u6570\u503c\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u81ea\u5b9a\u4e49\u53d8\u91cf\u4e0d\u80fd\u7528\u4e8e\u4f9d\u8d56 Nginx \u6307\u4ee4\u7684\u529f\u80fd\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"access_log_format"),"\u3002"),(0,l.kt)("h2",{id:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"},"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("p",null,"\u9488\u5bf9\u529f\u80fd\uff0c\u5b8c\u5584\u5404\u79cd\u7ef4\u5ea6\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5bf9\u63d2\u4ef6\u505a\u4e2a\u5168\u65b9\u4f4d\u7684\u6d4b\u8bd5\u5427\uff01\u63d2\u4ef6\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u90fd\u5728 ",(0,l.kt)("strong",{parentName:"p"},"t/plugin")," \u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u524d\u53bb\u4e86\u89e3\u3002\n\u9879\u76ee\u6d4b\u8bd5\u6846\u67b6\u91c7\u7528\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openresty/test-nginx"},"*",(0,l.kt)("strong",{parentName:"a"},"*test-nginx**"))," \u3002\n\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b ",(0,l.kt)("strong",{parentName:"p"},".t")," \u6587\u4ef6\uff0c\u901a\u5e38\u7528 ","_","_DATA","_","_ \u5206\u5272\u6210 \u5e8f\u8a00\u90e8\u5206 \u548c \u6570\u636e\u90e8\u5206\u3002\u8fd9\u91cc\u6211\u4eec\u7b80\u5355\u4ecb\u7ecd\u4e0b\u6570\u636e\u90e8\u5206\uff0c\n\u4e5f\u5c31\u662f\u771f\u6b63\u6d4b\u8bd5\u7528\u4f8b\u7684\u90e8\u5206\uff0c\u4ecd\u7136\u4ee5 key-auth \u63d2\u4ef6\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-perl"},'=== TEST 1: sanity\n--- config\n    location /t {\n        content_by_lua_block {\n            local plugin = require("apisix.plugins.key-auth")\n            local ok, err = plugin.check_schema({key = \'test-key\'}, core.schema.TYPE_CONSUMER)\n            if not ok then\n                ngx.say(err)\n            end\n\n            ngx.say("done")\n        }\n    }\n--- request\nGET /t\n--- response_body\ndone\n--- no_error_log\n[error]\n')),(0,l.kt)("p",null,"\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u4e3b\u8981\u6709\u4e09\u90e8\u5206\u5185\u5bb9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u4ee3\u7801\uff1a Nginx location \u7684\u914d\u7f6e\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a http \u7684 request \u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u68c0\u67e5\uff1a status \uff0cheader \uff0cbody \uff0cerror_log \u68c0\u67e5")),(0,l.kt)("p",null,"\u8fd9\u91cc\u8bf7\u6c42 ",(0,l.kt)("strong",{parentName:"p"},"/t")," \uff0c\u7ecf\u8fc7\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("strong",{parentName:"p"},"location")," \uff0c\u8c03\u7528 ",(0,l.kt)("strong",{parentName:"p"},"content_by_lua_block"),' \u6307\u4ee4\u5b8c\u6210 lua \u7684\u811a\u672c\uff0c\u6700\u7ec8\u8fd4\u56de\u3002\n\u7528\u4f8b\u7684\u65ad\u8a00\u662f response_body \u8fd4\u56de "done"\uff0c',(0,l.kt)("strong",{parentName:"p"},"no_error_log")," \u8868\u793a\u4f1a\u5bf9 Nginx \u7684 error.log \u68c0\u67e5\uff0c\n\u5fc5\u987b\u6ca1\u6709 ERROR \u7ea7\u522b\u7684\u8bb0\u5f55\u3002"),(0,l.kt)("h3",{id:"\u9644\u4e0a-test-nginx-\u6267\u884c\u6d41\u7a0b"},"\u9644\u4e0a test-nginx \u6267\u884c\u6d41\u7a0b"),(0,l.kt)("p",null,"\u6839\u636e\u6211\u4eec\u5728 Makefile \u91cc\u914d\u7f6e\u7684 PATH\uff0c\u548c\u6bcf\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},".t")," \u6587\u4ef6\u6700\u524d\u9762\u7684\u4e00\u4e9b\u914d\u7f6e\u9879\uff0c\u6846\u67b6\u4f1a\u7ec4\u88c5\u6210\u4e00\u4e2a\u5b8c\u6574\u7684 nginx.conf \u6587\u4ef6\uff0c\n",(0,l.kt)("strong",{parentName:"p"},"t/servroot")," \u4f1a\u88ab\u5f53\u6210 Nginx \u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u542f\u52a8 Nginx \u5b9e\u4f8b\u3002\u6839\u636e\u6d4b\u8bd5\u7528\u4f8b\u63d0\u4f9b\u7684\u4fe1\u606f\uff0c\u53d1\u8d77 http \u8bf7\u6c42\u5e76\u68c0\u67e5 http \u7684\u8fd4\u56de\u9879\uff0c\n\u5305\u62ec http status\uff0chttp response header\uff0c http response body \u7b49\u3002"))}u.isMDXComponent=!0}}]);