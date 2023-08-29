"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[92082],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(27378);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=p,k=h["".concat(o,".").concat(m)]||h[m]||u[m]||n;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},31113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(25773),p=(a(27378),a(35318));const n={title:"\u793e\u533a\u53cc\u5468\u62a5\uff082.15-2.28\uff09",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86 mocking \u63d2\u4ef6\uff0c\u652f\u6301\u5c06 access log \u63a8\u9001\u5230 ClickHouse\uff0c\u6dfb\u52a0 Kubernetes \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\u7b49\u529f\u80fd\u3002",tags:["Community"]},i=void 0,l={permalink:"/zh/blog/2022/03/03/weekly-report-0228",source:"@site/blog/2022/03/03/weekly-report-0228.md",title:"\u793e\u533a\u53cc\u5468\u62a5\uff082.15-2.28\uff09",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86 mocking \u63d2\u4ef6\uff0c\u652f\u6301\u5c06 access log \u63a8\u9001\u5230 ClickHouse\uff0c\u6dfb\u52a0 Kubernetes \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\u7b49\u529f\u80fd\u3002",date:"2022-03-03T00:00:00.000Z",formattedDate:"2022\u5e743\u67083\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:4.345,truncated:!0,authors:[],prevItem:{title:"\u4f7f\u7528 Gitpod \u5f00\u53d1 API \u7f51\u5173 Apache APISIX",permalink:"/zh/blog/2022/03/03/develop-apisix-with-gitpod"},nextItem:{title:"GraphQL \u78b0\u649e API \u7f51\u5173 Apache APISIX\uff0c\u63d0\u5347 API \u9886\u57df\u7684\u5b89\u5168\u4e0e\u6027\u80fd",permalink:"/zh/blog/2022/03/02/apisix-integration-graphql"}},o={authorsImageUrls:[]},s=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[],level:2},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[],level:2},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #920",id:"issue-920",children:[],level:3},{value:"Issue #6460",id:"issue-6460",children:[],level:3}],level:2},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[],level:2},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[],level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4ece 2.15 \u5230 2.28, \u6709 43 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 101 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,p.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,p.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,p.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,p.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646206544073-3e8b3bc8-b941-447e-af00-fb1273f1cfbf.jpg",alt:"\u672c\u5468\u8d21\u732e\u8005\u540d\u5355"})),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646206544057-52a28a3f-7bc5-43be-9f21-5a0cd78a4863.jpg",alt:"\u672c\u5468\u65b0\u664b\u8d21\u732e\u8005"})),(0,p.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,p.kt)("h3",{id:"issue-920"},"Issue #920"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/issues/920"},"https://github.com/apache/apisix-website/issues/920")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u76ee\u524d\uff0c\u5728\u5b98\u7f51\u535a\u5ba2\u63d0\u4ea4\u65b0\u535a\u6587\u7684 pull request \u65f6\uff0c\u5fc5\u987b\u540c\u65f6\u63d0\u4ea4\u4e2d\u6587\u548c\u82f1\u6587\u4e24\u4e2a\u7248\u672c\u7684\u6587\u6863\u3002"),(0,p.kt)("p",null,"\u7136\u800c\u968f\u7740\u793e\u533a\u7684\u53d1\u5c55\uff0c\u4e24\u79cd\u8bed\u8a00\u7684\u535a\u5ba2\u53d8\u5f97\u6bd4\u4ee5\u524d\u66f4\u52a0\u591a\u6837\u5316\u3002\u56e0\u6b64\u4eca\u540e\u63d0\u4ea4\u7684\u535a\u5ba2\u66f4\u591a\u53ef\u80fd\u53ea\u6709\u4e00\u79cd\u8bed\u8a00\u3002\u4f46\u5b9e\u9645\u4e0a\uff0c\u5982\u679c\u53ea\u63d0\u4ea4\u82f1\u6587\u535a\u5ba2\uff0c\u800c\u6ca1\u6709\u4e2d\u6587\u535a\u5ba2\uff0c\u5f53\u7528\u6237\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u8bed\u8a00\u8f6c\u6362\u6309\u94ae\u65f6\uff0c\u4f1a\u8df3\u8f6c\u5230\u9ed8\u8ba4\u7684 404 \u9875\u9762\u3002"),(0,p.kt)("p",null,"\u6240\u4ee5\u9700\u8981\u5bf9\u5b98\u7f51\u7ed3\u6784\u8fdb\u884c\u4fee\u6539\uff0c\u4fdd\u8bc1\u5728\u5355\u8bed\u8a00\u7684\u535a\u5ba2\u9875\u9762\u70b9\u51fb\u8bed\u8a00\u8f6c\u6362\u540e\uff0c\u4f9d\u65e7\u505c\u7559\u5728\u539f\u6765\u7684\u9875\u9762\uff0c\u907f\u514d\u8df3\u8f6c\u81f3 404 \u9875\u9762\u3002"),(0,p.kt)("h3",{id:"issue-6460"},"Issue #6460"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),": ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6460"},"https://github.com/apache/apisix/issues/6460")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u5f53\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"authz-keycloak")," \u63d2\u4ef6\uff0c\u4e14\u8bbf\u95ee\u4e0d\u88ab\u5141\u8bb8\u65f6\uff0c\u5c06\u5728\u8bf7\u6c42\u7684 URL \u6b63\u6587\u4e2d\u6536\u5230\u4e00\u4e2a\u62d2\u7edd\u8bbf\u95ee\u7684\u4fe1\u606f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Json"},'{"error":"access_denied","error_description":"not_authorized"}\n')),(0,p.kt)("p",null,"\u5f53\u8bbf\u95ee\u88ab\u62d2\u7edd\u65f6\uff0c\u662f\u5426\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u91cd\u5b9a\u5411\u7684 URL\uff0c\u4f7f\u7528\u6237\u770b\u5230\u9884\u5b9a\u4e49\u7684\u9875\u9762\u800c\u4e0d\u662f\u4fe1\u606f\uff1f"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6215"},"\u652f\u6301\u5c06 access log \u63a8\u9001\u5230 ClickHouse"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/zhendongcmss"},"zhendongcmss"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/4880"},"\u6dfb\u52a0 Kubernetes \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/zhixiongdu027"},"zhixiongdu027"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6392"},"\u652f\u6301\u914d\u7f6e X-APISIX-Upstream-Status \u8fd4\u56de\u6240\u6709\u4e0a\u6e38\u72b6\u6001"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/liangliang4ward"},"liangliang4ward"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5940"},"\u65b0\u589e ",(0,p.kt)("inlineCode",{parentName:"a"},"mocking")," \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/Drery"},"Drery"),"\uff09"))),(0,p.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/02/23/csrf-api-gateway"},"\u5982\u4f55\u4f7f\u7528 Apache APISIX CSRF \u5b89\u5168\u63d2\u4ef6\u62e6\u622a\u8de8\u7ad9\u70b9\u4f2a\u9020\u653b\u51fb"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u7684 CSRF \u5b89\u5168\u63d2\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"csrf"),"\uff0c\u5e76\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u5728 Apache APISIX \u4e2d\u501f\u52a9 ",(0,p.kt)("inlineCode",{parentName:"p"},"csrf")," \u63d2\u4ef6\u6765\u4fdd\u62a4\u60a8\u7684 API \u4fe1\u606f\u5b89\u5168\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/02/28/apisix-integration-opentelemetry-plugin"},"\u53ef\u89c2\u6d4b\u6027\u80fd\u529b\u5347\u7ea7\uff0cAPI \u7f51\u5173 Apache APISIX \u96c6\u6210 OpenTelemetry"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u7684\u6982\u5ff5\u4ee5\u53ca\u5982\u4f55\u90e8\u7f72 ",(0,p.kt)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/02/25/consul-api-gateway"},"API \u7f51\u5173 Apache APISIX \u96c6\u6210 Consul KV\uff0c\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u518d\u5347\u7ea7"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"Apache APISIX \u652f\u6301\u57fa\u4e8e Consul KV \u7684\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u8868\u3002\u8fd9\u7bc7\u6587\u7ae0\u8bb2\u8ff0\u4e86\u5728 Apache APISIX \u4e2d\u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u548c\u670d\u52a1\u6ce8\u518c\u7684\u5168\u8fc7\u7a0b\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/02/21/nacos-api-gateway"},"Nacos \u5728 API \u7f51\u5173\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5b9e\u8df5"),"\uff1a"),(0,p.kt)("p",{parentName:"li"},"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache APISIX \u57fa\u672c\u6982\u5ff5\u4ee5\u53ca\u6ce8\u518c\u4e2d\u5fc3\u7684\u4f5c\u7528\uff0c\u5e76\u4e3a\u60a8\u5c55\u793a\u4e86 API \u7f51\u5173\u57fa\u4e8e Nacos \u5b9e\u73b0\u670d\u52a1\u53d1\u73b0\u7684\u5177\u4f53\u64cd\u4f5c\u3002"))))}u.isMDXComponent=!0}}]);