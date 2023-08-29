"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17110:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Frontend E2E"},s=void 0,p={unversionedId:"front-end-e2e",id:"version-3.0/front-end-e2e",isDocsHomePage:!1,title:"Frontend E2E",description:"This project uses Cypress as the front-end E2E test framework.",source:"@site/docs-apisix-dashboard_versioned_docs/version-3.0/front-end-e2e.md",sourceDirName:".",slug:"/front-end-e2e",permalink:"/zh/docs/dashboard/front-end-e2e",editUrl:"/zh/edit#https://github.com/apache/apisix-dashboard/edit/release/3.0/docs/zh/latest/front-end-e2e.md",tags:[],version:"3.0",frontMatter:{title:"Frontend E2E"},sidebar:"version-3.0/docs",previous:{title:"i18n User Guide",permalink:"/zh/docs/dashboard/I18N_USER_GUIDE"},next:{title:"Backend Tests",permalink:"/zh/docs/dashboard/back-end-tests"}},l=[],i={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This project uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress")," as the front-end E2E test framework."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To start the front-end project locally, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/develop"},"develop")," web section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Cypress test-runner. For the use of test-runner, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/core-concepts/test-runner.html#"},"test-runner")," Overview."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn cypress:open-dev\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Write your test examples: please refer to the test examples in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/web/cypress")," directory, or see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cypress-io/cypress-realworld-app"},"RWA")," for more examples."))),(0,a.kt)("p",null,"To make it easy for users to develop front-end E2E cases, we use the remote manager-api by default. If you want to use the local manager-api, please read the following instructions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the local manager-api service, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/develop"},"develop")," manager-api section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To start the front-end project locally, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/dashboard/develop"},"develop")," web section. NOTE: You need to change ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn start:e2e")," when you start.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Cypress test-runner."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn cypress:open\n")))),(0,a.kt)("p",null,"Reference links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cypress API Documents: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/api/api/table-of-contents.html"},"https://docs.cypress.io/api/api/table-of-contents.html"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cypress Best Practices: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cypress.io/guides/references/best-practices.html#Organizing-Tests-Logging-In-Controlling-State"},"https://docs.cypress.io/guides/references/best-practices.html#Organizing-Tests-Logging-In-Controlling-State")))))}c.isMDXComponent=!0}}]);