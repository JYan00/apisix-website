"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[53802],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(f,o(o({ref:n},p),{},{components:t})):i.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54719:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(87462),r=(t(67294),t(3905));const a={title:"ApisixClusterConfig"},o=void 0,s={unversionedId:"concepts/apisix_cluster_config",id:"version-1.4.0/concepts/apisix_cluster_config",isDocsHomePage:!1,title:"ApisixClusterConfig",description:"ApisixClusterConfig is a CRD resource which used to describe an APISIX cluster, currently it's not a required\nresource but its existence can enrich an APISIX cluster, for instance, enabling cluster-wide monitoring, rate limiting and so on.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.4.0/concepts/apisix_cluster_config.md",sourceDirName:"concepts",slug:"/concepts/apisix_cluster_config",permalink:"/docs/ingress-controller/1.4.0/concepts/apisix_cluster_config",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.4.0/docs/en/latest/concepts/apisix_cluster_config.md",tags:[],version:"1.4.0",frontMatter:{title:"ApisixClusterConfig"}},l=[{value:"Monitoring",id:"monitoring",children:[]},{value:"Admin Config",id:"admin-config",children:[]},{value:"Multiple Clusters Management",id:"multiple-clusters-management",children:[]}],c={toc:l};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," is a CRD resource which used to describe an APISIX cluster, currently it's not a required\nresource but its existence can enrich an APISIX cluster, for instance, enabling cluster-wide monitoring, rate limiting and so on."),(0,r.kt)("p",null,"monitoring features like collecting ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," metrics\nand ",(0,r.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/"},"skywalking")," spans"),(0,r.kt)("h2",{id:"monitoring"},"Monitoring"),(0,r.kt)("p",null,"By default, monitoring are not enabled for the APISIX cluster, this is not favorable\nif you'd like to learn the real running status of your cluster. In such a case, you\ncould create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," to enable these features explicitly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  monitoring:\n    prometheus:\n      enable: true\n    skywalking:\n      enable: true\n      sampleRatio: 0.5\n")),(0,r.kt)("p",null,'The above example enables both the Prometheus and Skywalking for the APISIX cluster which name is "default".\nPlease see ',(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/prometheus"},"Prometheus in APISIX")," and ",(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/plugins/skywalking"},"Skywalking in APISIX")," for the details."),(0,r.kt)("h2",{id:"admin-config"},"Admin Config"),(0,r.kt)("p",null,"The default APISIX cluster is configured through command line options like ",(0,r.kt)("inlineCode",{parentName:"p"},"--default-apisix-cluster-xxx"),". They are constant in apisix-ingress-controller's lifecycle, you have to change the definition\nof Deployment or Pod template. Now with the help of ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig"),", you can change some administrative fields on it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2alpha1\nkind: ApisixClusterConfig\nmetadata:\n  name: default\nspec:\n  admin:\n    baseURL: http://apisix-gw.default.svc.cluster.local:9180/apisix/admin\n    adminKey: "123456"\n')),(0,r.kt)("p",null,"The above ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," sets the base url and admin key for the APISIX cluster ",(0,r.kt)("inlineCode",{parentName:"p"},'"default"'),". Once this\nresource is processed, resources like Route, Upstream and others will be pushed to the new address with the new admin key (for authentication)."),(0,r.kt)("h2",{id:"multiple-clusters-management"},"Multiple Clusters Management"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," is also designed for supporting multiple clusters management, but currently this function IS NOT ENABLED YET.\nOnly the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," with the same named configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"--default-apisix-cluster-name")," option will be handled by apisix-ingress-controller, other instances will be neglected."),(0,r.kt)("p",null,"The current delete event for ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixClusterConfig")," doesn't mean the apisix-ingress-controller will lose the view of the corresponding APISIX cluster but\nresetting all the features on it, so the running of APISIX cluster is not influenced by this event."))}p.isMDXComponent=!0}}]);