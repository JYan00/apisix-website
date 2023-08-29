"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4065],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=i,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||n;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},53483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(25773),i=(r(27378),r(35318));const n={title:"Biweekly Report (Mar 13 - Mar 26)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"The cloud-native API gateway Apache APISIX has added functions such as supporting variables when rewriting the header in the proxy rewrite plugin and updating the default HTTP router from `radixtree_uri` to `radixtree_host_uri`.",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/03/30/UzHMz9yZ_%E9%A3%9E%E4%B9%A620230301-134628.png"},o=void 0,s={permalink:"/blog/2023/03/30/weekly-report-0330",source:"@site/blog/2023/03/30/weekly-report-0330.md",title:"Biweekly Report (Mar 13 - Mar 26)",description:"The cloud-native API gateway Apache APISIX has added functions such as supporting variables when rewriting the header in the proxy rewrite plugin and updating the default HTTP router from `radixtree_uri` to `radixtree_host_uri`.",date:"2023-03-30T00:00:00.000Z",formattedDate:"March 30, 2023",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:1.92,truncated:!0,authors:[],prevItem:{title:"Utilize APISIX in E-Commerce: User-friendly, Robust, and Delightful",permalink:"/blog/2023/04/07/apisix-unity-group-q&a"},nextItem:{title:"mTLS everywhere",permalink:"/blog/2023/03/23/mtls-everywhere"}},p={authorsImageUrls:[]},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Contributor Statistics",id:"contributor-statistics",children:[],level:2},{value:"Good First Issues",id:"good-first-issues",children:[{value:"Issue #9182",id:"issue-9182",children:[],level:3},{value:"Issue #1740",id:"issue-1740",children:[],level:3}],level:2},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3}],level:2},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[],level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From 3.13 to 3.26, 25 contributors submitted 54 commits for Apache APISIX. Thank you for your contributions to Apache APISIX.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache APISIX grew up as a community from the first day it was open-sourced, and quickly became the most active open-source API gateway project in the world. These achievements are inseparable from the joint efforts of community partners."),(0,i.kt)("p",null,'"If you want to go fast, go alone. If you want to go far, go together." The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.'),(0,i.kt)("p",null,"We have also sorted out some issues for newcomers to the community to participate in! If you are interested, don't miss it!"),(0,i.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/03/28/csedWKi7_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E8%B4%A1%E7%8C%AE%E8%80%85%E6%B5%B7%E6%8A%A5-06%E6%9C%9F.png",alt:"Apache APISIX Contributors List"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/03/28/cyWb9xTh_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E6%96%B0%E6%99%8B%E6%B5%B7%E6%8A%A5-06%E5%91%A8.png",alt:"Apache APISIX New Contributors"})),(0,i.kt)("h2",{id:"good-first-issues"},"Good First Issues"),(0,i.kt)("h3",{id:"issue-9182"},"Issue #9182"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/9182"},"https://github.com/apache/apisix/issues/9182")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Correct the URI in ",(0,i.kt)("inlineCode",{parentName:"p"},"expose-api")," tutorial."),(0,i.kt)("h3",{id:"issue-1740"},"Issue #1740"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/1740"},"https://github.com/apache/apisix-ingress-controller/issues/1740")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Add a spec for a discovery related fields to ApisixUpstream reference."),(0,i.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,i.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9112"},"support variable when rewrite header in proxy rewrite plugin")," (Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/monkeyDluffy6017"},"monkeyDluffy6017"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9047"},"Update the default HTTP router from ",(0,i.kt)("inlineCode",{parentName:"a"},"radixtree_uri")," to ",(0,i.kt)("inlineCode",{parentName:"a"},"radixtree_host_uri"),".")," (Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/monkeyDluffy6017"},"monkeyDluffy6017"),")"))),(0,i.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/03/10/release-apache-apisix-3.2.0/"},"Release Apache APISIX 3.2.0")),(0,i.kt)("p",{parentName:"li"},"As the first LTS version since the 3.0 version, APISIX 3.2.0 is officially released! This release is a significant milestone for the 3.x era to replace the 2.x era.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/03/02/security-policy-auditable/"},"Make your security policy auditable")),(0,i.kt)("p",{parentName:"li"},"This blog shows how you can leverage OPA and Apache APISIX to move your authentication and authorization logic from the code to the infrastructure. The former allows you to audit your security policies, the latter coherence among all your upstream across all tech stacks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/01/18/consul-with-apisix/"},"The right feature at the right place")),(0,i.kt)("p",{parentName:"li"},"This blog takes the example of per-user rate limiting to show how one can implement it in a library and an infrastructure component. Then, the author generalized this example and gave a couple of guidelines."))),(0,i.kt)("p",null,"A wealth of documentation tutorials and experience has been accumulated on the Apache APISIX official website and GitHub. If you encounter problems, you can look into the documentation, search keywords in the issues, or participate in the discussion on the issues, proposing your own ideas and practical experience."))}u.isMDXComponent=!0}}]);