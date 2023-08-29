"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[99360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57682:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"ApisixRoute/v1 (Deprecated) Reference"},i=void 0,o={unversionedId:"references/apisix_route_v1",id:"version-1.0.0/references/apisix_route_v1",isDocsHomePage:!1,title:"ApisixRoute/v1 (Deprecated) Reference",description:"WARNINIG: ApisixRoute/v1 is obsolete and will be unsupported in the future, please use ApisixRoute/v2alpha1!",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.0.0/references/apisix_route_v1.md",sourceDirName:"references",slug:"/references/apisix_route_v1",permalink:"/zh/docs/ingress-controller/1.0.0/references/apisix_route_v1",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.0.0/docs/zh/latest/references/apisix_route_v1.md",tags:[],version:"1.0.0",frontMatter:{title:"ApisixRoute/v1 (Deprecated) Reference"},sidebar:"version-1.0.0/docs",previous:{title:"Install Ingress APISIX on Tencent TKE",permalink:"/zh/docs/ingress-controller/1.0.0/deployments/tke"},next:{title:"ApisixRoute/v2alpha1 Reference",permalink:"/zh/docs/ingress-controller/1.0.0/references/apisix_route_v2alpha1"}},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WARNINIG"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixRoute/v1")," is obsolete and will be unsupported in the future, please use ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixRoute/v2alpha1"),"!"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"ApisixRoute's request matching rules.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The requested host.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"http"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Route rules are applied to the scope of layer 7 traffic.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"paths"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Path-based ",(0,a.kt)("inlineCode",{parentName:"td"},"route")," rule matching.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"backend"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Backend service information configuration.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"serviceName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of backend service. ",(0,a.kt)("inlineCode",{parentName:"td"},"namespace + serviceName + servicePort")," form an unique identifier to match the back-end service.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"servicePort"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The port of backend service. ",(0,a.kt)("inlineCode",{parentName:"td"},"namespace + serviceName + servicePort")," form an unique identifier to match the back-end service.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The URI matched by the route. Supports exact match and prefix match. Example\uff0cexact match: ",(0,a.kt)("inlineCode",{parentName:"td"},"/hello"),", prefix match: ",(0,a.kt)("inlineCode",{parentName:"td"},"/hello*"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugins"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom plugin collection (Plugins defined in the ",(0,a.kt)("inlineCode",{parentName:"td"},"route")," level). For more plugin information, please refer to the ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/tree/master/docs/en/latest/plugins"},"Apache APISIX plugin docs"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the plugin. For more information about the example plugin, please check the ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/limit-count.md#Attributes"},"limit-count docs"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to enable the plugin, ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),": means enable, ",(0,a.kt)("inlineCode",{parentName:"td"},"false"),": means disable.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration of plugin information. Note: The check of configuration schema is missing now, so please be careful when editing.")))))}c.isMDXComponent=!0}}]);