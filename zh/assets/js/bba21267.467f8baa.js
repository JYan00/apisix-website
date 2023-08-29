"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[13153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,g=d["".concat(u,".").concat(h)]||d[h]||p[h]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43604:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={title:"cas-auth",keywords:["APISIX","Plugin","CAS AUTH","cas-auth"],description:"This document contains information about the Apache APISIX cas-auth Plugin."},o=void 0,l={unversionedId:"plugins/cas-auth",id:"version-3.1/plugins/cas-auth",isDocsHomePage:!1,title:"cas-auth",description:"This document contains information about the Apache APISIX cas-auth Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.1/plugins/cas-auth.md",sourceDirName:"plugins",slug:"/plugins/cas-auth",permalink:"/zh/docs/apisix/3.1/plugins/cas-auth",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/cas-auth.md",tags:[],version:"3.1",frontMatter:{title:"cas-auth",keywords:["APISIX","Plugin","CAS AUTH","cas-auth"],description:"This document contains information about the Apache APISIX cas-auth Plugin."},sidebar:"version-3.1/docs",previous:{title:"openid-connect",permalink:"/zh/docs/apisix/3.1/plugins/openid-connect"},next:{title:"hmac-auth",permalink:"/zh/docs/apisix/3.1/plugins/hmac-auth"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Configuration description",id:"configuration-description",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cas-auth")," Plugin can be used to access CAS (Central Authentication Service 2.0) IdP (Identity Provider)\nto do authentication, from the SP (service provider) perspective."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"idp_uri")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"URI of IdP.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cas_callback_uri")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"redirect uri used to callback the SP from IdP after login or logout.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"logout_uri")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"logout uri to trigger logout.")))),(0,a.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,a.kt)("p",null,"You can enable the Plugin on a specific Route as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/cas1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET", "POST"],\n    "host" : "127.0.0.1",\n    "uri": "/anything/*",\n    "plugins": {\n          "cas-auth": {\n              "idp_uri": "http://127.0.0.1:8080/realms/test/protocol/cas",\n              "cas_callback_uri": "/anything/cas_callback",\n              "logout_uri": "/anything/logout"\n          }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org": 1\n        }\n    }\n}\'\n\n')),(0,a.kt)("h2",{id:"configuration-description"},"Configuration description"),(0,a.kt)("p",null,"Once you have enabled the Plugin, a new user visiting this Route would first be processed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"cas-auth")," Plugin.\nIf no login session exists, the user would be redirected to the login page of ",(0,a.kt)("inlineCode",{parentName:"p"},"idp_uri"),"."),(0,a.kt)("p",null,"After successfully logging in from IdP, IdP will redirect this user to the ",(0,a.kt)("inlineCode",{parentName:"p"},"cas_callback_uri")," with\nGET parameters CAS ticket specified. If the ticket gets verified, the login session would be created."),(0,a.kt)("p",null,"This process is only done once and subsequent requests are left uninterrupted.\nOnce this is done, the user is redirected to the original URL they wanted to visit."),(0,a.kt)("p",null,"Later, the user could visit ",(0,a.kt)("inlineCode",{parentName:"p"},"logout_uri")," to start logout process. The user would be redirected to ",(0,a.kt)("inlineCode",{parentName:"p"},"idp_uri")," to do logout."),(0,a.kt)("p",null,"Note that, ",(0,a.kt)("inlineCode",{parentName:"p"},"cas_callback_uri")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"logout_uri")," should be\neither full qualified address (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/anything/logout"),"),\nor path only (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"/anything/logout"),"), but it is recommended to be path only to keep consistent."),(0,a.kt)("p",null,"These uris need to be captured by the route where the current APISIX is located.\nFor example, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"uri")," of the current route is ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cas_callback_uri")," can be filled in as ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/cas_callback"),"."),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"To disable the ",(0,a.kt)("inlineCode",{parentName:"p"},"cas-auth")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/cas1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET", "POST"],\n    "uri": "/anything/*",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org:80": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);