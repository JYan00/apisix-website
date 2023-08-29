"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80591],{35318:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>h});var n=r(27378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},p=Object.keys(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,p=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=c(r),h=a,b=m["".concat(l,".").concat(h)]||m[h]||s[h]||p;return r?n.createElement(b,o(o({ref:e},u),{},{components:r})):n.createElement(b,o({ref:e},u))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44092:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(25773),a=(r(27378),r(35318));const p={title:"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807",slug:"2021/08/14/contributors-the-golden-metric-of-opensource-projects",author:"\u5434\u8212\u65f8",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u8d21\u732e\u8005\u56fe\u8868","\u5f00\u6e90\u9879\u76ee"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u4e3a\u4ec0\u4e48\u8d21\u732e\u8005\u6570\u91cf\u53d8\u5316\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807\uff0c\u5e76\u4e14\u4f7f\u7528\u8d21\u732e\u8005\u8d8b\u52bf\u56fe\u5206\u6790\u4e86\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u7684\u8d21\u732e\u8005\u8d8b\u52bf\u4ee5\u53ca\u4e0e\u5176\u4ed6\u5f00\u6e90\u9879\u76ee\u7684\u5bf9\u6bd4\u3002",tags:["Community"]},o=void 0,i={permalink:"/zh/blog/2021/08/14/contributors-the-golden-metric-of-opensource-projects",source:"@site/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects.md",title:"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u4e3a\u4ec0\u4e48\u8d21\u732e\u8005\u6570\u91cf\u53d8\u5316\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807\uff0c\u5e76\u4e14\u4f7f\u7528\u8d21\u732e\u8005\u8d8b\u52bf\u56fe\u5206\u6790\u4e86\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u7684\u8d21\u732e\u8005\u8d8b\u52bf\u4ee5\u53ca\u4e0e\u5176\u4ed6\u5f00\u6e90\u9879\u76ee\u7684\u5bf9\u6bd4\u3002",date:"2021-08-14T00:00:00.000Z",formattedDate:"2021\u5e748\u670814\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:6.875,truncated:!0,authors:[{name:"\u5434\u8212\u65f8",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],prevItem:{title:"Apache APISIX \u5728 Airwallex \u7684\u5e94\u7528 | \u4e13\u8bbf Airwallex \u6280\u672f\u5e73\u53f0\u8d1f\u8d23\u4eba\u674e\u6768",permalink:"/zh/blog/2021/08/17/interview-airwallex"},nextItem:{title:"\u4ece\u65b0\u624b\u6751\u51fa\u6765\uff0c\u6211\u5728 Apache APISIX \u793e\u533a\u53d1\u51fa\u4e86\u7b2c\u4e00\u4e2a PR",permalink:"/zh/blog/2021/08/11/interview-tuzhengsong"}},l={authorsImageUrls:[void 0]},c=[{value:"\u8d21\u732e\u8005\u589e\u957f",id:"\u8d21\u732e\u8005\u589e\u957f",children:[],level:2},{value:"\u6708\u5ea6\u6d3b\u8dc3\u8d21\u732e\u8005",id:"\u6708\u5ea6\u6d3b\u8dc3\u8d21\u732e\u8005",children:[],level:2},{value:"\u591a\u4ed3\u5e93\u5bf9\u6bd4",id:"\u591a\u4ed3\u5e93\u5bf9\u6bd4",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],u={toc:c};function s(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6839\u636e GitHub 2020 \u5e74\u7684\u7edf\u8ba1\u663e\u793a\uff0c\u8fd9\u4e00\u5e74\u65b0\u589e\u4e86 6000 \u4e07\u4e2a\u4ee3\u7801\u4ed3\u5e93\uff0c\u8d85\u8fc7 5600 \u4e07\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u5230\u5f00\u6e90\u9879\u76ee\u4e2d\u3002\u9884\u8ba1\u5230 2025 \u5e74\uff0c\u5728 GitHub \u53c2\u4e0e\u5f00\u6e90\u9879\u76ee\u7684\u5f00\u53d1\u8005\u4eba\u6570\u5c06\u4f1a\u8d85\u8fc7 1 \u4ebf\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Source:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/contributor-graph"},"https://github.com/api7/contributor-graph"))),(0,a.kt)("p",null,"\u5728\u8fd9\u4e9b\u5feb\u901f\u589e\u957f\u7684\u6570\u5b57\u80cc\u540e\uff0c\u9690\u85cf\u7684\u662f\u5f00\u6e90\u9879\u76ee\u4e3a\u4e86\u8d62\u5f97\u5f00\u53d1\u8005\u800c\u505a\u51fa\u7684\u5404\u79cd\u5ba3\u4f20\uff1a\u786c\u6838\u6280\u672f\u6587\u7ae0\u3001\u793e\u4ea4\u6d3b\u52a8\u3001\u65b0\u5a92\u4f53\u3001\u5468\u8fb9\u793c\u7269\u7b49\uff0c\u53ef\u4ee5\u8bf4\u662f\u4e71\u82b1\u6e10\u6b32\u8ff7\u4eba\u773c\u3002\u90a3\u4e48\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u5982\u4f55\u80fd\u591f\u5728\u767e\u82b1\u9f50\u653e\u7684\u9879\u76ee\u4e2d\uff0c\u627e\u51fa\u6700\u9002\u5408\u81ea\u5df1\u516c\u53f8\u7684\u90a3\u4e00\u4e2a\u5462\uff1f"),(0,a.kt)("p",null,"\u8fd9\u5c31\u4f1a\u6d89\u53ca\u5230\u5f00\u6e90\u9879\u76ee\u7684\u5404\u79cd\u6307\u6807\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Star \u6570\uff1a\u8fd9\u662f\u6700\u76f4\u63a5\u7684\u6307\u6807\uff0c\u5b83\u4ee3\u8868\u7684\u662f\u8fd9\u4e2a\u9879\u76ee\u5438\u5f15\u4e86\u591a\u5c11\u5f00\u53d1\u8005\u7684\u5173\u6ce8\uff0c\u53ef\u4ee5\u4f53\u73b0\u8fd9\u4e2a\u9879\u76ee\u7684 marketing \u6c34\u5e73\u3002\u5982\u679c\u8fd9\u4e2a\u9879\u76ee\u6709\u5546\u4e1a\u516c\u53f8\u8d44\u91d1\u7684\u652f\u6301\u3001\u5f3a\u529b\u7684 PR \u56e2\u961f\uff0c\u6216\u8005\u662f\u6c34\u519b\u5237 Star\uff0c\u90a3\u4e48\u8fd9\u4e2a\u6307\u6807\u5c31\u5f88\u5bb9\u6613\u5931\u771f\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Issue \u548c PR \u6570\uff1aGitHub \u63d0\u4f9b\u4e86 Insights \u529f\u80fd\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639549315114-8bcc2d6d-a67b-48a2-be1e-0831c2441921.png",alt:"Apache APISIX GitHub Insights"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u6700\u8fd1\u4e00\u5468\u3001\u6700\u8fd1\u4e00\u4e2a\u6708\u7684\u65f6\u95f4\u5185\uff0c\u8fd9\u4e2a\u5f00\u6e90\u9879\u76ee\u7684 Issue \u548c PR \u7684\u65b0\u5efa\u548c\u5173\u95ed\u6570\u3002\u4e0a\u56fe\u662f Apache APISIX \u6700\u8fd1\u4e00\u4e2a\u6708\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"GitHub insights \u63d0\u4f9b\u4e86\u4e00\u4e2a\u975e\u5e38\u68d2\u7684\u5f00\u53d1\u8005\u89c6\u89d2\uff0c\u4f46\u8fd8\u4e0d\u591f\u5b8c\u7f8e\uff1aIssue \u548c PR \u7684\u8d28\u91cf\u5982\u4f55\uff1f\u8fd9\u4e9b\u662f\u6ca1\u6709\u529e\u6cd5\u91cf\u5316\u7684\uff1b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Commit \u9891\u7387\u548c\u6570\u636e\uff1a\u4e0b\u56fe\u662f Apache APISIX \u4ece\u9879\u76ee\u521b\u5efa\u5230\u73b0\u5728\u7684 Commit \u9891\u7387\u7edf\u8ba1\uff0c\u53ef\u4ee5\u770b\u51fa Apache APISIX \u4fdd\u6301\u4e86\u975e\u5e38\u7a33\u5b9a\u548c\u6301\u7eed\u7684\u5f00\u53d1\uff0c\u4f46\u8fd9\u4e2a\u6307\u6807\u4e5f\u7565\u663e\u5355\u8584\uff1a\u770b\u4e0d\u5230\u63d0\u4ea4\u8fd9\u4e9b Commit \u7684\u5f00\u53d1\u8005\u7684\u6570\u636e\uff1b")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639549239894-1406e1d6-ae84-4364-89cd-1b63f6f4cd4b.png",alt:"Apache APISIX commits"})),(0,a.kt)("p",null,"\u770b\u5230\u8fd9\u91cc\uff0c\u4f60\u662f\u4e0d\u662f\u89c9\u5f97\u9009\u62e9\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u597d\u590d\u6742\uff0c\u770b\u4e86\u8fd9\u4e48\u591a\u6307\u6807\u90fd\u5f97\u4e0d\u51fa\u7b54\u6848\u3002\u6709\u6ca1\u6709\u4e00\u4e2a\u201c\u91d1\u6307\u6807\u201d\uff0c\u4e00\u4e2a\u901a\u8fc7 marketing \u7838\u4e0d\u51fa\u6765\u7684\u6307\u6807\uff1f\u4e00\u4e2a\u80fd\u591f\u4f53\u73b0\u201c\u5f00\u53d1\u8005\u4e3a\u6838\u5fc3\u201d\u7684\u6307\u6807\uff1f"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u5f00\u6e90\u9879\u76ee\u7684\u7ef4\u62a4\u8005\u548c\u5f00\u53d1\u8005\uff0c\u6211\u4eec\u4e5f\u9700\u8981\u8fd9\u6837\u7684\u91d1\u6307\u6807\u6765\u6307\u5f15\u6211\u4eec\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u63d0\u51fa\u4e86 \u201c\u8d21\u732e\u8005\u589e\u957f\u201d \u548c \u201c\u6d3b\u8dc3\u8d21\u732e\u8005\u201d\u8fd9\u4e24\u4e2a\u7ef4\u5ea6\uff0c\u5e76\u5c06\u7edf\u8ba1\u548c\u5206\u6790\u7684\u8fc7\u7a0b\u5f00\u6e90\u51fa\u6765\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/contributor-graph%EF%BC%8C%E4%BD%A0%E4%B9%9F%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87"},"https://github.com/api7/contributor-graph\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh/contributor-graph"},"https://www.apiseven.com/zh/contributor-graph")," \u76f4\u63a5\u8fdb\u884c\u68c0\u7d22\u3002\u4e0b\u9762\u662f Apache APISIX \u7684\u793a\u4f8b\uff1a"),(0,a.kt)("h2",{id:"\u8d21\u732e\u8005\u589e\u957f"},"\u8d21\u732e\u8005\u589e\u957f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639549136527-e477c670-42d3-4764-9432-209c34dd222b.png",alt:"Apache APISIX contributor growth"})),(0,a.kt)("h2",{id:"\u6708\u5ea6\u6d3b\u8dc3\u8d21\u732e\u8005"},"\u6708\u5ea6\u6d3b\u8dc3\u8d21\u732e\u8005"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639548976021-ed0946ae-eeb2-4dfc-8e15-c3db13f527e0.png",alt:"Apache APISIX Monthly Active Contributors"})),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u4e24\u4e2a\u8868\u683c\uff0c\u4f60\u53ef\u4ee5\u6e05\u6670\u7684\u770b\u5230 Apache APISIX \u4ece\u521b\u529e\u81f3\u4eca\uff0c\u8d21\u732e\u8005\u90fd\u4fdd\u6301\u7740\u7a33\u5b9a\u7684\u589e\u957f\uff0c\u6bcf\u4e2a\u6708\u90fd\u6709 25 \u4e2a\u5de6\u53f3\u7684\u4ee3\u7801\u8d21\u732e\u8005\u53c2\u4e0e\u5176\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u591a\u4ed3\u5e93\u5bf9\u6bd4"},"\u591a\u4ed3\u5e93\u5bf9\u6bd4"),(0,a.kt)("p",null,"\u201c\u8d21\u732e\u8005\u589e\u957f\u201d \u548c \u201c\u6d3b\u8dc3\u8d21\u732e\u8005\u201d\u56fe\u8868\u90fd\u652f\u6301\u5728\u591a\u4ed3\u5e93\u4e4b\u95f4\u6bd4\u8f83\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u6211\u4eec\u4f1a\u62c9\u53d6 Github API \u6bcf\u65e5/\u6bcf\u6708\u5b9a\u65f6\u66f4\u65b0\u56fe\u8868\uff0c\u53ea\u8981\u4e00\u6b21\u6027\u7684\u590d\u5236\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u94fe\u63a5\uff0c\u60a8\u7684\u4ed3\u5e93\u5c31\u53ef\u4ee5\u59cb\u7ec8\u663e\u793a\u5b9e\u65f6\u7684\u8d21\u732e\u8005\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf\u7684\u6570\u636e\u6765\u6e90\u662f\u9879\u76ee\u6bcf\u4e2a contributor \u9996\u6b21\u63d0\u4ea4 commit \u7684\u65e5\u671f\u3002\u901a\u8fc7\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Github \u9996\u9875\u663e\u793a\u7684\u8d21\u732e\u8005\u603b\u4eba\u6570\u57fa\u7840\u4e0a\u89c2\u5bdf\u8d21\u732e\u8005\u589e\u957f\u60c5\u51b5\uff0c\u4ece\u800c\u5bf9\u793e\u533a\u7684\u53d1\u5c55\u60c5\u51b5\u4f5c\u51fa\u76f4\u89c2\u5224\u65ad\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u540c\u65f6\u5c55\u793a\u540c\u4e00\u9886\u57df\u4e2d\u7684\u591a\u4e2a\u4ed3\u5e93\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u89c2\u6bd4\u8f83\u4e0d\u540c\u793e\u533a\u7684\u53d1\u5c55\u60c5\u51b5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639548845735-43efcae0-3221-4739-b10f-0d9aaafad3fd.png",alt:"Apache APISIX compare the development of different communities"})),(0,a.kt)("p",null,"\u5728\u4e0a\u56fe\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 Apache APISIX \u7684\u8d21\u732e\u8005\u4eba\u6570\u4ee5\u975e\u5e38\u5feb\u7684\u901f\u5ea6\u589e\u957f\uff0c\u4ec5\u4ec5\u7528\u4e86\u4e24\u5e74\u65f6\u95f4\uff0c\u8d21\u732e\u8005\u4eba\u6570\u5c31\u57fa\u672c\u8d76\u4e0a\u751a\u81f3\u8d85\u8d8a\u4e86\u5176\u4ed6\u5f00\u6e90\u7f51\u5173\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u6708\u5ea6\u8d21\u732e\u8005\u66f2\u7ebf\u6570\u636e\u5219\u6765\u81ea\u4e8e\u6bcf\u6708\u63d0\u4ea4 commit \u7684\u8d21\u732e\u8005\u6570\u91cf\u3002"),(0,a.kt)("p",null,"\u76f8\u6bd4\u8d21\u732e\u8005\u589e\u957f\u66f2\u7ebf\uff0c\u6708\u5ea6\u8d21\u732e\u8005\u53ef\u4ee5\u66f4\u597d\u8861\u91cf\u77ed\u65f6\u95f4\u5185\u7684\u793e\u533a\u53d1\u5c55\u60c5\u51b5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639548683512-d7c7a72b-7ac3-4535-bd1a-f056d05d196b.png",alt:"Apache APISIX monthly contributors compare"})),(0,a.kt)("p",null,"\u4f8b\u5982\u5728\u4e0a\u56fe\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5982\u4eca Apache APISIX \u662f\u591a\u4e2a\u5f00\u6e90\u7f51\u5173\u9879\u76ee\u4e2d\u7684\u6708\u5ea6\u8d21\u732e\u8005\u4eba\u6570\u6700\u591a\u3001\u6700\u7a33\u5b9a\u7684\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e5f\u89e3\u91ca\u4e86\u4e3a\u4f55 Apache APISIX \u53ef\u4ee5\u5728\u5f00\u6e90\u540e\u5982\u6b64\u77ed\u7684\u65f6\u95f4\u5185\u5728\u603b\u8d21\u732e\u8005\u4eba\u6570\u4e0a\u8d76\u4e0a\u53cb\u5546\u4eec\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639548241386-6ba96e66-5ab7-468e-9072-6144fb902909.png",alt:"Apache APISIX monthly contributors"})),(0,a.kt)("p",null,"\u4e0a\u9762\u8fd9\u5f20\u6bd4\u8f83\u5f00\u6e90\u6d88\u606f\u4e2d\u95f4\u4ef6\u793e\u533a\u7684\u6708\u5ea6\u8d21\u732e\u8005\u7684\u56fe\uff0c\u66fe\u5728\u63a8\u7279\u5f15\u53d1\u70ed\u8bae\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u5f20\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 Apache Pulsar \u5728\u6708\u5ea6\u8d21\u732e\u8005\u4e0a\u8fce\u5934\u8d76\u4e0a\u4e86 Apache Kafka\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u76ee\u524d\u8d21\u732e\u8005\u56fe\u8868\u5df2\u7ecf\u5728 Apache APISIX \u3001Apache Skywalking\u3001Apache DolphinScheduler\u3001Apache Openwhisk\u3001Apache ShardingSphere\u3001awesome-docker\u3001TiDB docs-dm \u7b49\u591a\u4e2a\u5f00\u6e90\u9879\u76ee\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5728\u7528\u6237\u4f7f\u7528\u5e76\u53cd\u9988\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u66f4\u591a\u7684\u9700\u6c42\uff0c\u6bd4\u5982\u6dfb\u52a0\u201c\u533f\u540d\u201d\u8d21\u732e\u8005\uff0c\u6216\u662f\u9879\u76ee\u7531 SVN \u8fc1\u81f3 GitHub \u540e\u6dfb\u52a0 SVN \u4fa7\u7684\u8d21\u732e\u8005\u7b49\u3002"),(0,a.kt)("p",null,"\u597d\u7a0b\u5e8f\u90fd\u662f\u8d77\u6e90\u4e8e\u7a0b\u5e8f\u5458\u8981\u89e3\u51b3\u7684\u5207\u8eab\u4e4b\u75db\u3002\u5f53\u6211\u4eec\u804a Contributor Graph \u65f6\uff0c\u6211\u4eec\u4e0d\u4ec5\u5e0c\u671b\u501f\u52a9\u8fd9\u4e2a\u5de5\u5177\u751f\u4ea7\u66f4\u52a0\u76f4\u89c2\u7684\u5c55\u793a Apache APISIX \u793e\u533a\u6d3b\u8dc3\u5ea6\u7684\u56fe\u8868\uff0c\u6211\u4eec\u540c\u65f6\u5f00\u6e90\u4e86\u8fd9\u4e2a\u5c0f\u5de5\u5177\uff0c\u5e0c\u671b\u8fd9\u4e2a\u5de5\u5177\u53ef\u4ee5\u5e2e\u52a9\u5230\u5176\u4ed6\u7684\u5f00\u6e90\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u6b22\u8fce\u5927\u5bb6\u4f7f\u7528\u8d21\u732e\u8005\u8d8b\u52bf\u56fe\u8868\u6765\u8ddf\u8e2a\u60a8\u7684\u793e\u533a\u6d3b\u8dc3\u5ea6\uff0c\u4efb\u4f55\u9700\u6c42\u548c\u95ee\u9898\u90fd\u6b22\u8fce\u5230 Contributor Graph \u7684 GitHub \u4ed3\u5e93\u4e2d\u53cd\u9988\u3002"),(0,a.kt)("p",null,"\u8bbf\u95ee Contributor Graph ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/contributor-graph"},"repository"),"\u3002"))}s.isMDXComponent=!0}}]);