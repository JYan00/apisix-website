"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8811],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const i={title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",author:"Junxu Chen",authorURL:"https://github.com/nic-chen",authorImageURL:"https://avatars.githubusercontent.com/u/33000667?v=4",keywords:["API Gateway","APISIX","Apache APISIX","Envoy","Envoy filter"],description:"This article describes extending Envoy with new functionality and concrete examples using the base library of the cloud-native API gateway Apache APISIX.",tags:["Ecosystem"]},o=void 0,l={permalink:"/blog/2020/12/16/another-way-to-implement-envoy-filter",source:"@site/blog/2020/12/16/another-way-to-implement-envoy-filter.md",title:"Envoy and Apache APISIX: Another way to implement the Envoy filter",description:"This article describes extending Envoy with new functionality and concrete examples using the base library of the cloud-native API gateway Apache APISIX.",date:"2020-12-16T00:00:00.000Z",formattedDate:"December 16, 2020",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:4.72,truncated:!0,authors:[{name:"Junxu Chen",url:"https://github.com/nic-chen",imageURL:"https://avatars.githubusercontent.com/u/33000667?v=4"}],prevItem:{title:"A First Look at Kubernetes Service APIs",permalink:"/blog/2020/12/18/first-look-at-kubernetes-service-api"},nextItem:{title:"Ke Holdings Inc chooses Apache APISIX as API Gateway",permalink:"/blog/2020/12/11/beike-how-to-build-gateway-based-on-apache-apisix"}},s={authorsImageUrls:[void 0]},p=[{value:"Ways to implement Envoy filter",id:"ways-to-implement-envoy-filter",children:[{value:"Envoy filter",id:"envoy-filter",children:[],level:3},{value:"Expansion method",id:"expansion-method",children:[],level:3}],level:2},{value:"Apache APISIX solution",id:"apache-apisix-solution",children:[{value:"Example",id:"example",children:[],level:3},{value:"How does it work",id:"how-does-it-work",children:[{value:"First step, read configuration",id:"first-step-read-configuration",children:[],level:4},{value:"Second step, parse request",id:"second-step-parse-request",children:[],level:4},{value:"Third step, run the plugin",id:"third-step-run-the-plugin",children:[],level:4}],level:3}],level:2},{value:"Future outlook",id:"future-outlook",children:[],level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article explains how to run Apache APISIX plugins in Envoy.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://www.apiseven.com/en/blog/another-way-to-implement-envoy-filter"},"https://www.apiseven.com/en/blog/another-way-to-implement-envoy-filter"))),(0,r.kt)("h2",{id:"ways-to-implement-envoy-filter"},"Ways to implement Envoy filter"),(0,r.kt)("h3",{id:"envoy-filter"},"Envoy filter"),(0,r.kt)("p",null,"Envoy is an L7 proxy and communication bus designed for large modern service oriented architectures.\nA pluggable filter chain mechanism allows filters to be written to perform different tasks and inserted into the main server."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/filters.png",alt:"Envoy filter"})),(0,r.kt)("h3",{id:"expansion-method"},"Expansion method"),(0,r.kt)("p",null,"The existing filters may not meet the user's custom requirements. In this case, Envoy needs to be extended. Customize new filters according to the existing filter chain to achieve customization requirements."),(0,r.kt)("p",null,"Developers can extend Envoy in three ways:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Getting Started difficulty"),(0,r.kt)("th",{parentName:"tr",align:"center"},"stability"),(0,r.kt)("th",{parentName:"tr",align:"center"},"development efficiency"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Deploy and compile"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"C++"),(0,r.kt)("td",{parentName:"tr",align:"center"},"high"),(0,r.kt)("td",{parentName:"tr",align:"center"},"stable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"low"),(0,r.kt)("td",{parentName:"tr",align:"center"},"long time to compile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Lua"),(0,r.kt)("td",{parentName:"tr",align:"center"},"low"),(0,r.kt)("td",{parentName:"tr",align:"center"},"stable"),(0,r.kt)("td",{parentName:"tr",align:"center"},"High"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no need to compile, deploy directly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"WASM"),(0,r.kt)("td",{parentName:"tr",align:"center"},"high-medium"),(0,r.kt)("td",{parentName:"tr",align:"center"},"on the fence"),(0,r.kt)("td",{parentName:"tr",align:"center"},"depends on language"),(0,r.kt)("td",{parentName:"tr",align:"center"},"compilation time depends on language")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using C++ to extend")),(0,r.kt)("p",null,"In this way, C++ code is written directly on the basis of Envoy for functional enhancement. After implementing a custom filter, the new binary file is recompiled to complete the upgrade. There are two problems with this way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Limited by the C++ language, difficulty of getting started, scarcity of developers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Increasing the complexity of deployment, operation and maintenance, and upgrades. Envoy will become heavier and heavier, and every change requires recompiling the binary file, which is not conducive to iteration and management."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Using Lua to extend")),(0,r.kt)("p",null,"Lua is born to be embedded in the application, so as to provide flexible extension and customization features for application, and is widely used."),(0,r.kt)("p",null,"Lua Filter allows Lua scripts to be run in the request and response process. The main features currently supported include: inspection of headers, body, and trailers while streaming in either the request flow, response flow;modification of headers and trailers;blocking and buffering the full request/response body for inspection;performing an outbound async HTTP call to an upstream host;performing a direct response and skipping further filter iteration, etc."),(0,r.kt)("p",null,"At present, many people directly distribute Lua code in configuration, which is not conducive to code organization and management, and it is difficult to share with others to form an ecosystem."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Using WASM extension")),(0,r.kt)("p",null,"Developers can write filters in their own programming language, compile them into WASM format using tools, and embed them into Envoy to run."),(0,r.kt)("p",null,"It currently supports few languages, and using these languages \u200b\u200bto extend is still not that simple. On the other hand, many people still have reservations about WASM and may not directly use it."),(0,r.kt)("h2",{id:"apache-apisix-solution"},"Apache APISIX solution"),(0,r.kt)("p",null,"Based on the above analysis, we could see that Lua is very suitable for extending Envoy, and it is easy to learn, and the development efficiency is extremely high. Because it is embedded in Envoy, there is no additional network overhead, and the performance is good."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," community proposes its own solution based on Lua, which is to provide a powerful and flexible basic library to implement all plugins of Apache APISIX and plugins that will be developed in the future to run on Envoy. Developers could also develop their own customized plugins based on this basic library."),(0,r.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway, based on the Nginx library and Lua. Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Please check the repo for specific code and how to run: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/envoy-apisix"},"https://github.com/api7/envoy-apisix")),(0,r.kt)("p",null,"The relevant configuration of Envoy is as follows:"),(0,r.kt)("p",null,"Define a Filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'http_filters:\n- name: entry.lua\n  typed_config:\n    "@type": type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua\n    source_codes:\n      entry.lua:\n        filename: /apisix/entry.lua\n')),(0,r.kt)("p",null,"Enable the Filter for a route and configure it with metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n- match:\n    prefix: "/foo"\n  route:\n    cluster: web_service\n  typed_per_filter_config:\n    envoy.filters.http.lua:\n      "@type": type.googleapis.com/envoy.extensions.filters.http.lua.v3.LuaPerRoute\n      name: entry.lua\n  metadata:\n    filter_metadata:\n      envoy.filters.http.lua:\n        plugins:\n        - name: uri-blocker\n          conf:\n            rejected_code: 403\n            block_rules:\n            - root.exe\n            - root.m+\n')),(0,r.kt)("h3",{id:"how-does-it-work"},"How does it work"),(0,r.kt)("p",null,"We don't need to make major changes to Envoy, only some optimizations that are suitable for public needs."),(0,r.kt)("p",null,"We shield platform differences for the plugin layer. All interfaces that need to be used are abstracted in the underlying framework, which we call apisix.core, so that all plugins can run on Envoy and Apache APISIX at the same time."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/main.png",alt:"Architecture diagram"})),(0,r.kt)("p",null,"We use the previous example to show how the plugin runs:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/workflow.png",alt:"Plugin workflow"})),(0,r.kt)("h4",{id:"first-step-read-configuration"},"First step, read configuration"),(0,r.kt)("p",null,"We configure through metadata to determine what plugins need to run on each route and what configuration is for each plugin.\nIn the example, we configured plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"uri-blocker")," for the route whose prefix is \u200b\u200b",(0,r.kt)("inlineCode",{parentName:"p"},"/foo"),", as well as the block rule of the plugin and the response status when a block is required."),(0,r.kt)("h4",{id:"second-step-parse-request"},"Second step, parse request"),(0,r.kt)("p",null,"We encapsulated the client request data into ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx")," so that it can be used directly in the entire process."),(0,r.kt)("h4",{id:"third-step-run-the-plugin"},"Third step, run the plugin"),(0,r.kt)("p",null,"We determine whether we need to block this request by matching the configured rules and the obtained uri. If a block is needed, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"respond")," to directly respond, otherwise we let it go."),(0,r.kt)("h2",{id:"future-outlook"},"Future outlook"),(0,r.kt)("p",null,"More and more APISIX plugins are available to run on Envoy, and finally all APISIX plugins (Even that will be developed in the future) will be available to run on Envoy."),(0,r.kt)("p",null,"At the same time, we hope that we could work with the Envoy community in the direction of Lua Filter, optimize and improve Lua Filter, enhance the expansion capabilities of Envoy, and reduce the difficulty of Envoy expansion."))}u.isMDXComponent=!0}}]);