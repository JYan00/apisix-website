"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[69889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7517:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"ApisixRoute"},o=void 0,s={unversionedId:"concepts/apisix_route",id:"version-0.4.0/concepts/apisix_route",isDocsHomePage:!1,title:"ApisixRoute",description:"ApisixRoute is a CRD resource which focus on how to route traffic to\nexpected backend, it exposes many features supported by Apache APISIX.\nCompared to Ingress,\nfunctions are implemented in a more native way, with stronger semantics.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-0.4.0/concepts/apisix_route.md",sourceDirName:"concepts",slug:"/concepts/apisix_route",permalink:"/zh/docs/ingress-controller/0.4.0/concepts/apisix_route",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v0.4.0/docs/zh/latest/concepts/apisix_route.md",tags:[],version:"0.4.0",frontMatter:{title:"ApisixRoute"},sidebar:"version-0.4.0/docs",previous:{title:"ApisixTls Reference",permalink:"/zh/docs/ingress-controller/0.4.0/references/apisix_tls"},next:{title:"ApisixUpstream",permalink:"/zh/docs/ingress-controller/0.4.0/concepts/apisix_upstream"}},p=[{value:"Path based route rules",id:"path-based-route-rules",children:[]},{value:"Advanced route features",id:"advanced-route-features",children:[]},{value:"Service Resolution Granularity",id:"service-resolution-granularity",children:[]},{value:"Plugins",id:"plugins",children:[]}],c={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," is a CRD resource which focus on how to route traffic to\nexpected backend, it exposes many features supported by Apache APISIX.\nCompared to ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress"),",\nfunctions are implemented in a more native way, with stronger semantics."),(0,a.kt)("h2",{id:"path-based-route-rules"},"Path based route rules"),(0,a.kt)("p",null,"URI path are always used to split traffic, for instance, requests with host ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.com")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"/foo")," prefix should be routed to service ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," while requests which path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/bar"),"\nshould be routed to service ",(0,a.kt)("inlineCode",{parentName:"p"},"bar"),", in the manner of ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),", the configuration\nshould be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: foor-bar-route\nspec:\n  http:\n  - name: foo\n    match:\n      hosts:\n      - foo.com\n      paths:\n      - "/foo*"\n    backend:\n     serviceName: foo\n     servicePort: 80\n  - name: bar\n    match:\n      paths:\n        - "/bar"\n    backend:\n      serviceName: bar\n      servicePort: 80\n')),(0,a.kt)("p",null,"There are two path types can be used, ",(0,a.kt)("inlineCode",{parentName:"p"},"prefix")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"exact"),", default is ",(0,a.kt)("inlineCode",{parentName:"p"},"exact"),",\nwhile if ",(0,a.kt)("inlineCode",{parentName:"p"},"prefix")," is desired, just append a ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", for instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"/id/*")," matches\nall paths with the prefix of ",(0,a.kt)("inlineCode",{parentName:"p"},"/id/"),"."),(0,a.kt)("h2",{id:"advanced-route-features"},"Advanced route features"),(0,a.kt)("p",null,"Path based route are most common, but if it's not enough, try\nother route features in ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," such as ",(0,a.kt)("inlineCode",{parentName:"p"},"methods"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nginxVars"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"methods")," splits traffic according to the HTTP method, the following configurations routes requests\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," method to ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," service (a Kubernetes Service)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n        - /\n        methods:\n        - GET\n      backend:\n        serviceName: foo\n        servicePort: 80\n")),(0,a.kt)("h2",{id:"service-resolution-granularity"},"Service Resolution Granularity"),(0,a.kt)("p",null,"By default a referenced Service will be watched, so\nit's newest endpoints list can be updated to Apache APISIX.\napisix-ingress-controller provides another mechanism that just use\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterIP")," of this service, if that's what you want, just set\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"resolveGranularity")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"service")," (default is ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: method-route\nspec:\n  http:\n    - name: method\n      match:\n        paths:\n          - /*\n        methods:\n          - GET\n      backend:\n        serviceName: foo\n        servicePort: 80\n        resolveGranularity: service\n")),(0,a.kt)("h2",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"Apache APISIX provides more than 40 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/docs/en/latest/plugins"},"plugins"),", which can be used\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),". All configuration items are named same to the one in APISIX."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n    - name: httpbin\n      match:\n        hosts:\n        - local.httpbin.org\n        paths:\n          - /*\n      backend:\n        serviceName: foo\n        servicePort: 80\n      plugins:\n        - name: cors\n          enable: true\n")),(0,a.kt)("p",null,"The above configuration enables ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/cors.md"},"Cors")," plugin for requests\nwhich host is ",(0,a.kt)("inlineCode",{parentName:"p"},"local.httpbin.org"),"."))}l.isMDXComponent=!0}}]);