"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=o(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63594:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"limit-count",keywords:["APISIX","API \u7f51\u5173","Limit Count","\u901f\u7387\u9650\u5236"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX limit-count \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9650\u5236\u5ba2\u6237\u7aef\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\u5bf9\u670d\u52a1\u7684\u603b\u8bf7\u6c42\u6570\u3002"},i=void 0,d={unversionedId:"plugins/limit-count",id:"version-3.1/plugins/limit-count",isDocsHomePage:!1,title:"limit-count",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX limit-count \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9650\u5236\u5ba2\u6237\u7aef\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\u5bf9\u670d\u52a1\u7684\u603b\u8bf7\u6c42\u6570\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/limit-count.md",sourceDirName:"plugins",slug:"/plugins/limit-count",permalink:"/zh/docs/apisix/3.1/plugins/limit-count",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/limit-count.md",tags:[],version:"3.1",frontMatter:{title:"limit-count",keywords:["APISIX","API \u7f51\u5173","Limit Count","\u901f\u7387\u9650\u5236"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX limit-count \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u9650\u5236\u5ba2\u6237\u7aef\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\u5bf9\u670d\u52a1\u7684\u603b\u8bf7\u6c42\u6570\u3002"},sidebar:"version-3.1/docs",previous:{title:"limit-conn",permalink:"/zh/docs/apisix/3.1/plugins/limit-conn"},next:{title:"proxy-cache",permalink:"/zh/docs/apisix/3.1/plugins/proxy-cache"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u4f7f\u7528\u56fa\u5b9a\u65f6\u95f4\u7a97\u53e3\u7b97\u6cd5\uff0c\u4e3b\u8981\u7528\u4e8e\u9650\u5236",(0,r.kt)("strong",{parentName:"p"},"\u5355\u4e2a\u5ba2\u6237\u7aef"),"\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\u5bf9\u670d\u52a1\u7684\u603b\u8bf7\u6c42\u6570\uff0c\u5e76\u4e14\u4f1a\u5728 HTTP \u54cd\u5e94\u5934\u4e2d\u8fd4\u56de\u5269\u4f59\u53ef\u4ee5\u8bf7\u6c42\u7684\u4e2a\u6570\u3002\u8be5\u63d2\u4ef6\u539f\u7406\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/rate-limit"},"GitHub API \u7684\u901f\u7387\u9650\u5236"),"\u7c7b\u4f3c\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"count > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u5ba2\u6237\u7aef\u5728\u6307\u5b9a\u65f6\u95f4\u7a97\u53e3\u5185\u7684\u603b\u8bf7\u6c42\u6570\u91cf\u9608\u503c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_window"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"time_window > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u7a97\u53e3\u7684\u5927\u5c0f\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\u8d85\u8fc7\u8be5\u5c5e\u6027\u5b9a\u4e49\u7684\u65f6\u95f4\uff0c\u5219\u4f1a\u91cd\u65b0\u5f00\u59cb\u8ba1\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"var"'),(0,r.kt)("td",{parentName:"tr",align:null},'["var", "var_combination", "constant"]'),(0,r.kt)("td",{parentName:"tr",align:null},"key \u7684\u7c7b\u578b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"remote_addr"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u505a\u8bf7\u6c42\u8ba1\u6570\u7684\u4f9d\u636e\u3002\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"constant"),"\uff0c\u90a3\u4e48 key \u4f1a\u88ab\u5f53\u4f5c\u5e38\u91cf\uff1b\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"var"),"\uff0c\u90a3\u4e48 key \u4f1a\u88ab\u5f53\u4f5c\u53d8\u91cf\uff1b\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"var_combination"),"\uff0c\u90a3\u4e48 key \u4f1a\u88ab\u5f53\u4f5c\u53d8\u91cf\u7ec4\u5408\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr $consumer_name"),"\uff0c\u63d2\u4ef6\u4f1a\u540c\u65f6\u53d7 ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"$consumer_name")," \u4e24\u4e2a\u53d8\u91cf\u7684\u7ea6\u675f\uff1b\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," \u7684\u503c\u4e3a\u7a7a\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr")," \u4f1a\u88ab\u4f5c\u4e3a\u9ed8\u8ba4 ",(0,r.kt)("inlineCode",{parentName:"td"},"key"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"503"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7\u9608\u503c\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7\u9608\u503c\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684\u54cd\u5e94\u4f53\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"local"'),(0,r.kt)("td",{parentName:"tr",align:null},'["local", "redis", "redis-cluster"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u68c0\u7d22\u548c\u589e\u52a0\u9650\u5236\u8ba1\u6570\u7684\u7b56\u7565\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"local")," \u65f6\uff0c\u8ba1\u6570\u5668\u88ab\u4ee5\u5185\u5b58\u65b9\u5f0f\u4fdd\u5b58\u5728\u8282\u70b9\u672c\u5730\uff1b\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")," \u65f6\uff0c\u8ba1\u6570\u5668\u4fdd\u5b58\u5728 Redis \u670d\u52a1\u8282\u70b9\u4e0a\uff0c\u4ece\u800c\u53ef\u4ee5\u8de8\u8282\u70b9\u5171\u4eab\u7ed3\u679c\uff0c\u901a\u5e38\u7528\u5b83\u6765\u5b8c\u6210\u5168\u5c40\u9650\u901f\uff1b\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u65f6\uff0c\u4f7f\u7528 Redis \u96c6\u7fa4\u800c\u4e0d\u662f\u5355\u4e2a\u5b9e\u4f8b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u63d2\u4ef6\u529f\u80fd\u4e34\u65f6\u4e0d\u53ef\u7528\u65f6\uff08\u4f8b\u5982 Redis \u8d85\u65f6\uff09\uff0c\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5219\u8868\u793a\u53ef\u4ee5\u5141\u8bb8\u63d2\u4ef6\u964d\u7ea7\u5e76\u8fdb\u884c\u7ee7\u7eed\u8bf7\u6c42\u7684\u64cd\u4f5c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show_limit_quota_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5728\u54cd\u5e94\u5934\u4e2d\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Limit"),"\uff08\u9650\u5236\u7684\u603b\u8bf7\u6c42\u6570\uff09\u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Remaining"),"\uff08\u5269\u4f59\u8fd8\u53ef\u4ee5\u53d1\u9001\u7684\u8bf7\u6c42\u6570\uff09\u5b57\u6bb5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u76f8\u540c group \u7684\u8def\u7531\u5c06\u5171\u4eab\u76f8\u540c\u7684\u9650\u6d41\u8ba1\u6570\u5668\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")," \u9650\u901f\u7b56\u7565\u65f6\uff0cRedis \u670d\u52a1\u8282\u70b9\u7684\u5730\u5740\u3002",(0,r.kt)("strong",{parentName:"td"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"strong"},"policy")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"strong"},"redis")," \u65f6\u5fc5\u9009\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_port"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"6379"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")," \u9650\u901f\u7b56\u7565\u65f6\uff0cRedis \u670d\u52a1\u8282\u70b9\u7684\u7aef\u53e3\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"redis"),"  \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster"),"  \u9650\u901f\u7b56\u7565\u65f6\uff0cRedis \u670d\u52a1\u8282\u70b9\u7684\u5bc6\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_database"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"redis_database >= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")," \u9650\u901f\u7b56\u7565\u65f6\uff0cRedis \u670d\u52a1\u8282\u70b9\u4e2d\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"database"),"\uff0c\u5e76\u4e14\u53ea\u9488\u5bf9\u975e Redis \u96c6\u7fa4\u6a21\u5f0f\uff08\u5355\u5b9e\u4f8b\u6a21\u5f0f\u6216\u8005\u63d0\u4f9b\u5355\u5165\u53e3\u7684 Redis \u516c\u6709\u4e91\u670d\u52a1\uff09\u751f\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"policy")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"redis")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u65f6\uff0cRedis \u670d\u52a1\u8282\u70b9\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_cluster_nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u9650\u901f\u7b56\u7565\u65f6\uff0cRedis \u96c6\u7fa4\u670d\u52a1\u8282\u70b9\u7684\u5730\u5740\u5217\u8868\uff08\u81f3\u5c11\u9700\u8981\u4e24\u4e2a\u5730\u5740\uff09\u3002",(0,r.kt)("strong",{parentName:"td"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"strong"},"policy")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"strong"},"redis-cluster")," \u65f6\u5fc5\u9009\u3002"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis_cluster_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u9650\u901f\u7b56\u7565\u65f6\uff0cRedis \u96c6\u7fa4\u670d\u52a1\u8282\u70b9\u7684\u540d\u79f0\u3002",(0,r.kt)("strong",{parentName:"td"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"strong"},"policy")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"strong"},"redis-cluster")," \u65f6\u5fc5\u9009\u3002"))))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"var"'),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"var_combination"'),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u652f\u6301\u5728\u591a\u4e2a\u8def\u7531\u95f4\u5171\u4eab\u540c\u4e00\u4e2a\u9650\u6d41\u8ba1\u6570\u5668\u3002\u9996\u5148\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/services/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 1,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "group": "services_1#1640140620"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u7136\u540e\u4e3a\u8def\u7531\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"service_id")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \uff0c\u4e0d\u540c\u8def\u7531\u5c06\u5171\u4eab\u540c\u4e00\u4e2a\u8ba1\u6570\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "service_id": "1",\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/2 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "service_id": "1",\n    "uri": "/hello2"\n}\'\n')),(0,r.kt)("p",null,"\u901a\u8fc7\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"constant"'),"\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728\u6240\u6709\u8bf7\u6c42\u95f4\u5171\u4eab\u540c\u4e00\u4e2a\u9650\u6d41\u8ba1\u6570\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/services/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 1,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "key_type": "constant",\n            "group": "services_1#1640140621"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u8868\u793a\uff1a\u5f53\u591a\u4e2a\u8def\u7531\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," \u5c5e\u6027\u5747\u914d\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"services_1#1640140620")," \u65f6\uff0c\u8bbf\u95ee\u8fd9\u4e9b\u8def\u7531\u7684\u8bf7\u6c42\u5c06\u4f1a\u5171\u4eab\u540c\u4e00\u4e2a\u8ba1\u6570\u5668\uff0c\u5373\u4f7f\u8fd9\u4e9b\u8bf7\u6c42\u6765\u81ea\u4e8e\u4e0d\u540c\u7684 IP \u5730\u5740\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u540c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," \u91cc\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," \u7684\u914d\u7f6e\u5fc5\u987b\u4fdd\u6301\u4e00\u81f4\u3002\u5982\u679c\u4fee\u6539\u914d\u7f6e\uff0c\u9700\u8981\u540c\u65f6\u66f4\u65b0\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"group")," \u7684\u503c\u3002"))),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a\u96c6\u7fa4\u7ea7\u522b\u7684\u6d41\u91cf\u63a7\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9 Redis \u670d\u52a1\u5668\u6765\u5b8c\u6210\u3002\u4e0d\u540c\u7684 APISIX \u8282\u70b9\u4e4b\u95f4\u5c06\u5171\u4eab\u6d41\u91cf\u9650\u901f\u7ed3\u679c\uff0c\u5b9e\u73b0\u96c6\u7fa4\u6d41\u91cf\u9650\u901f\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," \u7b56\u7565\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis",\n            "redis_host": "127.0.0.1",\n            "redis_port": 6379,\n            "redis_password": "password",\n            "redis_database": 1,\n            "redis_timeout": 1001\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cluster")," \u7b56\u7565\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis-cluster",\n            "redis_cluster_nodes": [\n                "127.0.0.1:5000",\n                "127.0.0.1:5001"\n            ],\n            "redis_password": "password",\n            "redis_cluster_name": "redis-cluster-1"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5728\u4e0a\u6587\u63d0\u5230\u7684\u914d\u7f6e\u4e2d\uff0c\u5176\u9650\u5236\u4e86 60 \u79d2\u5185\u8bf7\u6c42\u53ea\u80fd\u8bbf\u95ee 2 \u6b21\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u6d4b\u8bd5\u8bf7\u6c42\u8bbf\u95ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,r.kt)("p",null,"\u5728\u6267\u884c\u6d4b\u8bd5\u547d\u4ee4\u7684\u524d\u4e24\u6b21\u90fd\u4f1a\u6b63\u5e38\u8bbf\u95ee\u3002\u5176\u4e2d\u54cd\u5e94\u5934\u4e2d\u5305\u542b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Limit")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Remaining")," \u5b57\u6bb5\uff0c\u5206\u522b\u4ee3\u8868\u9650\u5236\u7684\u603b\u8bf7\u6c42\u6570\u548c\u5269\u4f59\u8fd8\u53ef\u4ee5\u53d1\u9001\u7684\u8bf7\u6c42\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\nConnection: keep-alive\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 0\nServer: APISIX web server\n")),(0,r.kt)("p",null,"\u5f53\u7b2c\u4e09\u6b21\u8fdb\u884c\u6d4b\u8bd5\u8bbf\u95ee\u65f6\uff0c\u4f1a\u6536\u5230\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"503")," HTTP \u72b6\u6001\u7801\u7684\u54cd\u5e94\u5934\uff0c\u8868\u793a\u63d2\u4ef6\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8bbe\u7f6e\u4e86\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"rejected_msg")," \u7684\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"Requests are too frequent, please try again later."'),"\uff0c\u5f53\u7b2c\u4e09\u6b21\u8bbf\u95ee\u65f6\uff0c\u5c31\u4f1a\u6536\u5230\u5982\u4e0b\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"error_msg")," \u8fd4\u56de\u4fe1\u606f\u7684\u54cd\u5e94\u4f53\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);