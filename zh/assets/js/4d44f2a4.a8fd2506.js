"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(n),k=l,c=s["".concat(u,".").concat(k)]||s[k]||o[k]||r;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77236:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={title:"hmac-auth"},i=void 0,p={unversionedId:"plugins/hmac-auth",id:"version-2.13/plugins/hmac-auth",isDocsHomePage:!1,title:"hmac-auth",description:"hmac-auth \u662f\u4e00\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4e0e consumer \u4e00\u8d77\u914d\u5408\u624d\u80fd\u5de5\u4f5c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/plugins/hmac-auth.md",sourceDirName:"plugins",slug:"/plugins/hmac-auth",permalink:"/zh/docs/apisix/2.13/plugins/hmac-auth",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.13/docs/zh/latest/plugins/hmac-auth.md",tags:[],version:"2.13",frontMatter:{title:"hmac-auth"},sidebar:"version-2.13/docs",previous:{title:"openid-connect",permalink:"/zh/docs/apisix/2.13/plugins/openid-connect"},next:{title:"authz-casbin",permalink:"/zh/docs/apisix/2.13/plugins/authz-casbin"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f",id:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f",children:[]},{value:"Body \u6821\u9a8c",id:"body-\u6821\u9a8c",children:[]},{value:"\u4f7f\u7528\u751f\u6210\u597d\u7684\u7b7e\u540d\u8fdb\u884c\u8bf7\u6c42\u5c1d\u8bd5",id:"\u4f7f\u7528\u751f\u6210\u597d\u7684\u7b7e\u540d\u8fdb\u884c\u8bf7\u6c42\u5c1d\u8bd5",children:[]}]},{value:"\u81ea\u5b9a\u4e49 header \u540d\u79f0",id:"\u81ea\u5b9a\u4e49-header-\u540d\u79f0",children:[{value:"\u5f00\u542f body \u6821\u9a8c",id:"\u5f00\u542f-body-\u6821\u9a8c",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u7b7e\u540d\u751f\u6210\u793a\u4f8b",id:"\u7b7e\u540d\u751f\u6210\u793a\u4f8b",children:[]}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"hmac-auth")," \u662f\u4e00\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u4e00\u8d77\u914d\u5408\u624d\u80fd\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"\u6dfb\u52a0 HMAC Authentication \u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"service")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"route"),"\u3002 \u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u5c06\u5176\u7b7e\u540d\u6dfb\u52a0\u5230\u8bf7\u6c42\u5934\u4ee5\u9a8c\u8bc1\u5176\u8bf7\u6c42\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"consumer")," \u5bf9\u8c61\u5e94\u6709\u4e0d\u540c\u7684\u503c\uff0c\u5b83\u5e94\u5f53\u662f\u552f\u4e00\u7684\u3002\u4e0d\u540c consumer \u4f7f\u7528\u4e86\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"access_key")," \uff0c\u5c06\u4f1a\u51fa\u73b0\u8bf7\u6c42\u5339\u914d\u5f02\u5e38\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"access_key")," \u914d\u5bf9\u4f7f\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"hmac-sha256"'),(0,l.kt)("td",{parentName:"tr",align:null},'["hmac-sha1", "hmac-sha256", "hmac-sha512"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0\u5bc6\u7b97\u6cd5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clock_skew"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b7e\u540d\u5141\u8bb8\u7684\u65f6\u95f4\u504f\u79fb\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u7684\u8ba1\u65f6\u3002\u6bd4\u5982\u5141\u8bb8\u65f6\u95f4\u504f\u79fb 10 \u79d2\u949f\uff0c\u90a3\u4e48\u5c31\u5e94\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"10"),"\u3002\u7279\u522b\u5730\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"0")," \u8868\u793a\u4e0d\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"td"},"Date")," \u8fdb\u884c\u68c0\u67e5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signed_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u52a0\u5165\u52a0\u5bc6\u8ba1\u7b97\u7684 headers \uff0c\u6307\u5b9a\u540e\u5ba2\u6237\u7aef\u8bf7\u6c42\u53ea\u80fd\u5728\u6b64\u8303\u56f4\u5185\u6307\u5b9a headers \uff0c\u6b64\u9879\u4e3a\u7a7a\u65f6\u5c06\u628a\u6240\u6709\u5ba2\u6237\u7aef\u8bf7\u6c42\u6307\u5b9a\u7684 headers \u52a0\u5165\u52a0\u5bc6\u8ba1\u7b97\u3002\u5982\uff1a ",'["User-Agent", "Accept-Language", "x-custom-a"]')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keep_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u6210\u529f\u540e\u7684 http \u8bf7\u6c42\u4e2d\u662f\u5426\u9700\u8981\u4fdd\u7559 ",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-SIGNATURE"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-ALGORITHM")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-SIGNED-HEADERS")," \u7684\u8bf7\u6c42\u5934\u3002true: \u8868\u793a\u4fdd\u7559 http \u8bf7\u6c42\u5934\uff0cfalse: \u8868\u793a\u79fb\u9664 http \u8bf7\u6c42\u5934\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encode_uri_param"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5bf9\u7b7e\u540d\u4e2d\u7684 uri \u53c2\u6570\u8fdb\u884c\u7f16\u7801,\u4f8b\u5982: ",(0,l.kt)("inlineCode",{parentName:"td"},"params1=hello%2Cworld")," \u8fdb\u884c\u4e86\u7f16\u7801\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"params2=hello,world")," \u6ca1\u6709\u8fdb\u884c\u7f16\u7801\u3002true: \u8868\u793a\u5bf9\u7b7e\u540d\u4e2d\u7684 uri \u53c2\u6570\u8fdb\u884c\u7f16\u7801\uff0cfalse: \u4e0d\u5bf9\u7b7e\u540d\u4e2d\u7684 uri \u53c2\u6570\u7f16\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"validate_request_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5bf9\u8bf7\u6c42 body \u505a\u7b7e\u540d\u6821\u9a8c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"512 * 1024"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5141\u8bb8\u7684 body \u5927\u5c0f\u3002")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a consumer \u5bf9\u8c61\uff0c\u5e76\u8bbe\u7f6e\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"hmac-auth")," \u7684\u503c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "hmac-auth": {\n            "access_key": "user-key",\n            "secret_key": "my-secret-key",\n            "clock_skew": 0,\n            "signed_headers": ["User-Agent", "Accept-Language", "x-custom-a"]\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"p"},"keep_headers")," \u4e3a false\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"encode_uri_param")," \u4e3a true\u3002"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa Route \u6216 Service \u5bf9\u8c61\uff0c\u5e76\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"li"},"hmac-auth")," \u63d2\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "hmac-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("h3",{id:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f"},"\u7b7e\u540d\u751f\u6210\u516c\u5f0f"),(0,l.kt)("p",null,"\u7b7e\u540d\u7684\u8ba1\u7b97\u516c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"signature = HMAC-SHAx-HEX(secret_key, signing_string)"),"\uff0c\u4ece\u516c\u5f0f\u53ef\u4ee5\u770b\u51fa\uff0c\u60f3\u8981\u83b7\u5f97\u7b7e\u540d\u9700\u8981\u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"secret_key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string")," \u4e24\u4e2a\u53c2\u6570\u3002\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"secret_key")," \u4e3a\u5bf9\u5e94 consumer \u6240\u914d\u7f6e\u7684\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string")," \u7684\u8ba1\u7b97\u516c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string = HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key + \\n + Date + \\n + signed_headers_string"),"\u3002\u5982\u679c signing_string \u4e2d\u7684\u67d0\u4e00\u9879\u4e0d\u5b58\u5728\uff0c\u4e5f\u9700\u8981\u4f7f\u7528\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u4ee3\u66ff\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"HTTP Method"),"\uff1a\u6307 HTTP \u534f\u8bae\u4e2d\u5b9a\u4e49\u7684 GET\u3001PUT\u3001POST \u7b49\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5fc5\u987b\u4f7f\u7528\u5168\u5927\u5199\u7684\u5f62\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"HTTP URI"),"\uff1a\u8981\u6c42\u5fc5\u987b\u4ee5\u201c/\u201d\u5f00\u5934\uff0c\u4e0d\u4ee5\u201c/\u201d\u5f00\u5934\u7684\u9700\u8981\u8865\u5145\u4e0a\uff0c\u7a7a\u8def\u5f84\u4e3a\u201c/\u201d\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Date"),"\uff1a\u8bf7\u6c42\u5934\u4e2d\u7684 Date \uff08 GMT \u683c\u5f0f \uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"canonical_query_string"),"\uff1a\u662f\u5bf9\u4e8e URL \u4e2d\u7684 query\uff08 query \u5373 URL \u4e2d ? \u540e\u9762\u7684 key1=valve1&key2=valve2 \u5b57\u7b26\u4e32\uff09\u8fdb\u884c\u7f16\u7801\u540e\u7684\u7ed3\u679c\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"signed_headers_string"),"\uff1a\u662f\u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u5ba2\u6237\u7aef\u6307\u5b9a\u7684\u5b57\u6bb5\uff0c\u5e76\u6309\u987a\u5e8f\u62fc\u63a5\u5b57\u7b26\u4e32\u7684\u7ed3\u679c\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"canonical_query_string \u7f16\u7801\u6b65\u9aa4\u5982\u4e0b\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u53d6 URL \u4e2d\u7684 query \u9879\uff0c\u5373 URL \u4e2d ? \u540e\u9762\u7684 key1=valve1&key2=valve2 \u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06 query \u6839\u636e&\u5206\u9694\u7b26\u62c6\u5f00\u6210\u82e5\u5e72\u9879\uff0c\u6bcf\u4e00\u9879\u662f key=value \u6216\u8005\u53ea\u6709 key \u7684\u5f62\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6839\u636e uri \u53c2\u6570\u662f\u5426\u7f16\u7801\uff0c\u6709\u4e0b\u9762\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"encode_uri_param")," \u4e3a true \u65f6\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u62c6\u5f00\u540e\u7684\u6bcf\u4e00\u9879\u8fdb\u884c\u7f16\u7801\u5904\u7406\uff0c\u5206\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5:"),(0,l.kt)("li",{parentName:"ul"},'\u5f53\u8be5\u9879\u53ea\u6709 key \u65f6\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a url_encode(key) + "=" \u7684\u5f62\u5f0f\u3002'),(0,l.kt)("li",{parentName:"ul"},'\u5f53\u8be5\u9879\u662f key=value \u7684\u5f62\u5f0f\u65f6\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a url_encode(key) + "=" + url_encode(value) \u7684\u5f62\u5f0f\u3002\u8fd9\u91cc value \u53ef\u4ee5\u662f\u7a7a\u5b57\u7b26\u4e32\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6bcf\u4e00\u9879\u8f6c\u6362\u540e\uff0c\u4ee5 key \u6309\u7167\u5b57\u5178\u987a\u5e8f\uff08 ASCII \u7801\u7531\u5c0f\u5230\u5927\uff09\u6392\u5e8f\uff0c\u5e76\u4f7f\u7528 & \u7b26\u53f7\u8fde\u63a5\u8d77\u6765\uff0c\u751f\u6210\u76f8\u5e94\u7684 canonical_query_string \u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"encode_uri_param")," \u4e3a false \u65f6:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u62c6\u5f00\u540e\u7684\u6bcf\u4e00\u9879\u8fdb\u884c\u7f16\u7801\u5904\u7406\uff0c\u5206\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5:"),(0,l.kt)("li",{parentName:"ul"},'\u5f53\u8be5\u9879\u53ea\u6709 key \u65f6\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a key + "=" \u7684\u5f62\u5f0f\u3002'),(0,l.kt)("li",{parentName:"ul"},'\u5f53\u8be5\u9879\u662f key=value \u7684\u5f62\u5f0f\u65f6\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a key + "=" + value \u7684\u5f62\u5f0f\u3002\u8fd9\u91cc value \u53ef\u4ee5\u662f\u7a7a\u5b57\u7b26\u4e32\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6bcf\u4e00\u9879\u8f6c\u6362\u540e\uff0c\u4ee5 key \u6309\u7167\u5b57\u5178\u987a\u5e8f\uff08 ASCII \u7801\u7531\u5c0f\u5230\u5927\uff09\u6392\u5e8f\uff0c\u5e76\u4f7f\u7528 & \u7b26\u53f7\u8fde\u63a5\u8d77\u6765\uff0c\u751f\u6210\u76f8\u5e94\u7684 canonical_query_string \u3002")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"signed_headers_string \u751f\u6210\u6b65\u9aa4\u5982\u4e0b\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u6307\u5b9a\u52a0\u5165\u8ba1\u7b97\u7684 headers \uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u4e0b\u8282 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u4f7f\u7528\u751f\u6210\u597d\u7684\u7b7e\u540d\u8fdb\u884c\u8bf7\u6c42\u5c1d\u8bd5")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"SIGNED_HEADERS")," \u653e\u7f6e\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ece\u8bf7\u6c42\u5934\u4e2d\u6309\u987a\u5e8f\u53d6\u51fa ",(0,l.kt)("inlineCode",{parentName:"li"},"SIGNED_HEADERS")," \u6307\u5b9a\u7684 headers \uff0c\u5e76\u6309\u987a\u5e8f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"name:value")," \u65b9\u5f0f\u62fc\u63a5\u8d77\u6765\uff0c\u62fc\u63a5\u5b8c\u540e\u5c31\u751f\u6210\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"signed_headers_string"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+\nHeaderKey2 + ":" + HeaderValue2 + "\\n"\\+\n...\nHeaderKeyN + ":" + HeaderValueN + "\\n"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b7e\u540d\u5b57\u7b26\u4e32\u62fc\u63a5\u793a\u4f8b")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u9762\u8bf7\u6c42\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/index.html?name=james&age=36 \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n')),(0,l.kt)("p",null,"\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"p"},"\u7b7e\u540d\u751f\u6210\u516c\u5f0f")," \u751f\u6210\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string")," \u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT\nUser-Agent:curl/7.29.0\nx-custom-a:test\n"\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u6700\u540e\u4e00\u4e2a\u8bf7\u6c42\u5934\u4e5f\u9700\u8981 + ",(0,l.kt)("inlineCode",{parentName:"p"},"\\n"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u751f\u6210\u7b7e\u540d")),(0,l.kt)("p",null,"\u4f7f\u7528 Python \u6765\u751f\u6210\u7b7e\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},"SIGNATURE"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport hashlib\nimport hmac\n\nsecret = bytes('my-secret-key', 'utf-8')\nmessage = bytes(\"\"\"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT\nUser-Agent:curl/7.29.0\nx-custom-a:test\n\"\"\", 'utf-8')\n\nhash = hmac.new(secret, message, hashlib.sha256)\n\n# to lowercase base64\nprint(base64.b64encode(hash.digest()))\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Hash"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIGNATURE"),(0,l.kt)("td",{parentName:"tr",align:null},"8XV1GB7Tq23OJcoz6wjqTs4ZLxr9DiLoY4PxzScWGYg=")))),(0,l.kt)("h3",{id:"body-\u6821\u9a8c"},"Body \u6821\u9a8c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"validate_request_body")," \u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u63d2\u4ef6\u5c06\u8ba1\u7b97\u8bf7\u6c42 body \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hmac-sha")," \u503c\uff0c\u5e76\u4e0e\u8bf7\u6c42 headers \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-HMAC-DIGEST")," \u7684\u503c\u8fdb\u884c\u6821\u9a8c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"X-HMAC-DIGEST: base64(hmac-sha(<body>))\n")),(0,l.kt)("p",null,"\u5f53\u6ca1\u6709\u8bf7\u6c42 body \u65f6\uff0c\u63d2\u4ef6\u4f1a\u8ba1\u7b97\u957f\u5ea6\u4e3a 0 \u7684\u7a7a\u5b57\u7b26\u4e32\u7684 hmac-sha \u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8:"),"\u5f53\u5f00\u542f body \u6821\u9a8c\u65f6\uff0c\u4e3a\u4e86\u8ba1\u7b97\u8bf7\u6c42 body \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hmac-sha")," \u503c\uff0c\u63d2\u4ef6\u4f1a\u628a body \u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u5728\u8bf7\u6c42 body \u8f83\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u8f83\u9ad8\u7684\u5185\u5b58\u6d88\u8017\u3002\u63d2\u4ef6\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"max_req_body"),"\uff08\u9ed8\u8ba4\u503c 512KB\uff09 \u914d\u7f6e\u9879\u6765\u914d\u7f6e\u6700\u5927\u5141\u8bb8\u7684 body \u5927\u5c0f\uff0cbody \u8d85\u8fc7\u6b64\u5927\u5c0f\u7684\u8bf7\u6c42\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u751f\u6210\u597d\u7684\u7b7e\u540d\u8fdb\u884c\u8bf7\u6c42\u5c1d\u8bd5"},"\u4f7f\u7528\u751f\u6210\u597d\u7684\u7b7e\u540d\u8fdb\u884c\u8bf7\u6c42\u5c1d\u8bd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i "http://127.0.0.1:9080/index.html?name=james&age=36" \\\n-H "X-HMAC-SIGNATURE: 8XV1GB7Tq23OJcoz6wjqTs4ZLxr9DiLoY4PxzScWGYg=" \\\n-H "X-HMAC-ALGORITHM: hmac-sha256" \\\n-H "X-HMAC-ACCESS-KEY: user-key" \\\n-H "Date: Tue, 19 Jan 2021 11:33:20 GMT" \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Tue, 19 Jan 2021 11:33:20 GMT\nServer: APISIX/2.2\n......\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0b\u9762\u662f\u7b7e\u540d\u4fe1\u606f\u7684\u4e24\u79cd\u7ec4\u88c5\u5f62\u5f0f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b7e\u540d\u4fe1\u606f\u62fc\u4e00\u8d77\u653e\u5230\u8bf7\u6c42\u5934 ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," \u5b57\u6bb5\u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'Authorization: hmac-auth-v1# + ACCESS_KEY + # + base64_encode(SIGNATURE) + # + ALGORITHM + # + DATE + # + SIGNED_HEADERS' -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang=\"cn\">\n...\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b7e\u540d\u4fe1\u606f\u5206\u5f00\u5206\u522b\u653e\u5230\u8bf7\u6c42\u5934\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'X-HMAC-SIGNATURE: base64_encode(SIGNATURE)' -H 'X-HMAC-ALGORITHM: ALGORITHM' -H 'Date: DATE' -H 'X-HMAC-ACCESS-KEY: ACCESS_KEY' -H 'X-HMAC-SIGNED-HEADERS: SIGNED_HEADERS' -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang=\"cn\">\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"ACCESS_KEY, SIGNATURE, ALGORITHM, DATE, SIGNED_HEADERS \u5206\u522b\u4ee3\u8868\u5bf9\u5e94\u7684\u53d8\u91cf")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},'SIGNED_HEADERS \u4e3a\u5ba2\u6237\u7aef\u6307\u5b9a\u7684\u52a0\u5165\u52a0\u5bc6\u8ba1\u7b97\u7684 headers\u3002\u82e5\u5b58\u5728\u591a\u4e2a headers \u9700\u4ee5 ";" \u5206\u5272\uff1a',(0,l.kt)("inlineCode",{parentName:"strong"},"x-custom-header-a;x-custom-header-b"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"SIGNATURE \u9700\u8981\u4f7f\u7528 base64 \u8fdb\u884c\u52a0\u5bc6\uff1a",(0,l.kt)("inlineCode",{parentName:"strong"},"base64_encode(SIGNATURE)")))),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49-header-\u540d\u79f0"},"\u81ea\u5b9a\u4e49 header \u540d\u79f0"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_attr")," \u4e0b\u6dfb\u52a0\u63d2\u4ef6\u7684\u5c5e\u6027\u914d\u7f6e\u6765\u81ea\u5b9a\u4e49\u53c2\u6570 header \u540d\u79f0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  hmac-auth:\n    signature_key: X-APISIX-HMAC-SIGNATURE\n    algorithm_key: X-APISIX-HMAC-ALGORITHM\n    date_key: X-APISIX-DATE\n    access_key: X-APISIX-HMAC-ACCESS-KEY\n    signed_headers_key: X-APISIX-HMAC-SIGNED-HEADERS\n    body_digest_key: X-APISIX-HMAC-BODY-DIGEST\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49 header \u540e\uff0c\u8bf7\u6c42\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'X-APISIX-HMAC-SIGNATURE: base64_encode(SIGNATURE)' -H 'X-APISIX-HMAC-ALGORITHM: ALGORITHM' -H 'X-APISIX-DATE: DATE' -H 'X-APISIX-HMAC-ACCESS-KEY: ACCESS_KEY' -H 'X-APISIX-HMAC-SIGNED-HEADERS: SIGNED_HEADERS' -H 'X-APISIX-HMAC-BODY-DIGEST: BODY_DIGEST' -i\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang=\"cn\">\n")),(0,l.kt)("h3",{id:"\u5f00\u542f-body-\u6821\u9a8c"},"\u5f00\u542f body \u6821\u9a8c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -X \"POST\" \"http://localhost:9080/index.html?age=36&name=james\" \\\n     -H 'X-HMAC-ACCESS-KEY: my-access-key' \\\n     -H 'X-HMAC-SIGNATURE: lSWO4vcyVoZG5bn8miHudzABAeJQd8tqEHyM7RsjeiU=' \\\n     -H 'X-HMAC-ALGORITHM: hmac-sha256' \\\n     -H 'Date: Tue, 24 Aug 2021 03:19:21 GMT' \\\n     -H 'X-HMAC-SIGNED-HEADERS: User-Agent;X-HMAC-DIGEST' \\\n     -H 'User-Agent: curl/7.29.0' \\\n     -H 'X-HMAC-DIGEST: L9b/+QMvhvnoUlSw5vq+kHPqnZiHGl61T8oavMVTaC4=' \\\n     -H 'Content-Type: text/plain; charset=utf-8' \\\n     -d \"{\\\"hello\\\":\\\"world\\\"}\"\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Tue, 14 Sep 2021 03:28:14 GMT\nServer: APISIX/2.9\n...\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"hmac-auth")," \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u7b7e\u540d\u751f\u6210\u793a\u4f8b"},"\u7b7e\u540d\u751f\u6210\u793a\u4f8b"),(0,l.kt)("p",null,"\u4ee5 HMAC SHA256 \u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u4e00\u4e0b\u5404\u79cd\u8bed\u8a00\u7684\u7b7e\u540d\u751f\u6210\u793a\u4f8b\u3002\u9700\u8981\u6ce8\u610f\u5404\u79cd\u8bed\u8a00\u4e2d\u5bf9\u7b7e\u540d\u5b57\u7b26\u4e32\u7684\u6362\u884c\u7b26\u7684\u5904\u7406\u65b9\u5f0f\uff0c\u8fd9\u5f88\u5bb9\u6613\u5bfc\u81f4\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},'{"message":"Invalid signature"}')," \u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\u5165\u53c2\u8bf4\u660e:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Variable"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"the shared secret key here")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"this is signature string")))),(0,l.kt)("p",null,"\u793a\u4f8b\u51fa\u53c2\u8bf4\u660e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Hash"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hexit"),(0,l.kt)("td",{parentName:"tr",align:null},"ad1b76c7e5054009380edca35d3f36cc5b6f45c82ee02ea3af64197ebddb9345")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base64"),(0,l.kt)("td",{parentName:"tr",align:null},"rRt2x+UFQAk4DtyjXT82zFtvRcgu4C6jr2QZfr3bk0U=")))),(0,l.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\u8bf7\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/examples/plugins-hmac-auth-generate-signature"},(0,l.kt)("strong",{parentName:"a"},"HMAC Generate Signature Examples"))))}d.isMDXComponent=!0}}]);