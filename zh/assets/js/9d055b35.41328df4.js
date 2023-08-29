"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[23246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(r),s=i,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||a;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47881:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Router"},o=void 0,l={unversionedId:"terminology/router",id:"version-2.15/terminology/router",isDocsHomePage:!1,title:"Router",description:"APISIX \u533a\u522b\u4e8e\u5176\u4ed6 API \u7f51\u5173\u7684\u4e00\u5927\u7279\u70b9\u662f\u5141\u8bb8\u7528\u6237\u9009\u62e9\u4e0d\u540c Router \u6765\u66f4\u597d\u5339\u914d\u81ea\u7531\u4e1a\u52a1\uff0c\u5728\u6027\u80fd\u3001\u81ea\u7531\u4e4b\u95f4\u505a\u6700\u9002\u5408\u9009\u62e9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/terminology/router.md",sourceDirName:"terminology",slug:"/terminology/router",permalink:"/zh/docs/apisix/2.15/terminology/router",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.15/docs/zh/latest/terminology/router.md",tags:[],version:"2.15",frontMatter:{title:"Router"},sidebar:"version-2.15/docs",previous:{title:"Route",permalink:"/zh/docs/apisix/2.15/terminology/route"},next:{title:"Script",permalink:"/zh/docs/apisix/2.15/terminology/script"}},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"APISIX \u533a\u522b\u4e8e\u5176\u4ed6 API \u7f51\u5173\u7684\u4e00\u5927\u7279\u70b9\u662f\u5141\u8bb8\u7528\u6237\u9009\u62e9\u4e0d\u540c Router \u6765\u66f4\u597d\u5339\u914d\u81ea\u7531\u4e1a\u52a1\uff0c\u5728\u6027\u80fd\u3001\u81ea\u7531\u4e4b\u95f4\u505a\u6700\u9002\u5408\u9009\u62e9\u3002"),(0,i.kt)("p",null,"\u5728\u672c\u5730\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u8bbe\u7f6e\u6700\u7b26\u5408\u81ea\u8eab\u4e1a\u52a1\u9700\u6c42\u7684\u8def\u7531\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"apisix.router.http"),": HTTP \u8bf7\u6c42\u8def\u7531\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_uri"),"\uff1a\uff08\u9ed8\u8ba4\uff09\u53ea\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," \u4f5c\u4e3a\u4e3b\u7d22\u5f15\u3002\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"radixtree")," \u5f15\u64ce\uff0c\u652f\u6301\u5168\u91cf\u548c\u6df1\u524d\u7f00\u5339\u914d\uff0c\u66f4\u591a\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/router-radixtree"},"\u5982\u4f55\u4f7f\u7528 router-radixtree"),"\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u7edd\u5bf9\u5339\u914d"),"\uff1a\u5b8c\u6574\u5339\u914d\u7ed9\u5b9a\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," \uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/bar"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/glo"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u524d\u7f00\u5339\u914d"),"\uff1a\u672b\u5c3e\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," \u4ee3\u8868\u7ed9\u5b9a\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," \u662f\u524d\u7f00\u5339\u914d\u3002\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"/foo*"),"\uff0c\u5219\u5141\u8bb8\u5339\u914d ",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/a"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"/foo/b"),"\u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5339\u914d\u4f18\u5148\u7ea7"),"\uff1a\u4f18\u5148\u5c1d\u8bd5\u7edd\u5bf9\u5339\u914d\uff0c\u82e5\u65e0\u6cd5\u547d\u4e2d\u7edd\u5bf9\u5339\u914d\uff0c\u518d\u5c1d\u8bd5\u524d\u7f00\u5339\u914d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u4efb\u610f\u8fc7\u6ee4\u5c5e\u6027"),"\uff1a\u5141\u8bb8\u6307\u5b9a\u4efb\u4f55 Nginx \u5185\u7f6e\u53d8\u91cf\u4f5c\u4e3a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u6bd4\u5982 URL \u8bf7\u6c42\u53c2\u6570\u3001\u8bf7\u6c42\u5934\u3001cookie \u7b49\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_uri_with_parameter"),": \u540c ",(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_uri")," \u4f46\u989d\u5916\u6709\u53c2\u6570\u5339\u914d\u7684\u529f\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_host_uri"),"\uff1a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"host + uri")," \u4f5c\u4e3a\u4e3b\u7d22\u5f15\uff08\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"radixtree")," \u5f15\u64ce\uff09\uff0c\u5bf9\u5f53\u524d\u8bf7\u6c42\u4f1a\u540c\u65f6\u5339\u914d host \u548c uri\uff0c\u652f\u6301\u7684\u5339\u914d\u6761\u4ef6\u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_uri")," \u57fa\u672c\u4e00\u81f4\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"apisix.router.ssl"),"\uff1aSSL \u52a0\u8f7d\u5339\u914d\u8def\u7531\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radixtree_sni"),"\uff1a\uff08\u9ed8\u8ba4\uff09\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"SNI")," (Server Name Indication) \u4f5c\u4e3a\u4e3b\u7d22\u5f15\uff08\u57fa\u4e8e radixtree \u5f15\u64ce\uff09\u3002")))))}m.isMDXComponent=!0}}]);