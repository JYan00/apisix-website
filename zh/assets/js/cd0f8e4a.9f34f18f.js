"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[42367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81278:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"K3s and RKE (Rancher)",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","K3s","Rancher RKE"],description:"Guide to install APISIX ingress controller on K3s and Rancher Kubernetes Engine(RKE)."},s=void 0,o={unversionedId:"deployments/k3s-rke",id:"version-1.6.0/deployments/k3s-rke",isDocsHomePage:!1,title:"K3s and RKE (Rancher)",description:"Guide to install APISIX ingress controller on K3s and Rancher Kubernetes Engine(RKE).",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.0/deployments/k3s-rke.md",sourceDirName:"deployments",slug:"/deployments/k3s-rke",permalink:"/zh/docs/ingress-controller/1.6.0/deployments/k3s-rke",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.0/docs/zh/latest/deployments/k3s-rke.md",tags:[],version:"1.6.0",frontMatter:{title:"K3s and RKE (Rancher)",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","K3s","Rancher RKE"],description:"Guide to install APISIX ingress controller on K3s and Rancher Kubernetes Engine(RKE)."},sidebar:"version-1.6.0/docs",previous:{title:"KubeSphere",permalink:"/zh/docs/ingress-controller/1.6.0/deployments/kubesphere"},next:{title:"Ingress APISIX Use Examples",permalink:"/zh/docs/ingress-controller/1.6.0/tutorials/index"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and ingress controller",id:"install-apisix-and-ingress-controller",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how you can install APISIX ingress on ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3S")," and ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/products/rke/"},"Rancher RKE"),"."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"K3s is built for IoT and edge computing applications. Apache APISIX also supports an MQTT Plugin and runs well on ARM processors. APISIX ingress is therefore a good choice to handle North-South traffic in K3s."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/"},"K3S")," or ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"Rancher RKE"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),".")),(0,a.kt)("h2",{id:"install-apisix-and-ingress-controller"},"Install APISIX and ingress controller"),(0,a.kt)("p",null,"The script below installs APISIX and the ingress controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix \\\n  --kubeconfig /etc/rancher/k3s/k3s.yaml\nkubectl get service --namespace ingress-apisix\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are using K3s, the default kube config file is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/")," and you make require root permission."))),(0,a.kt)("p",null,"This will create the five resources mentioned below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": dataplane the process the traffic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": control plane that processes all configuration changes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": ingress controller which exposes APISIX."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless"),": stores configuration and handles internal communication.")),(0,a.kt)("p",null,"The gateway service type is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort"),". Clients can access APISIX through the Node IPs and the assigned port. To use a service of type ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," with K3s, use a bare-metal load balancer implementation like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"Klipper"),"."),(0,a.kt)("p",null,"You should now be able to use APISIX ingress controller. You can try running this ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/1.6.0/tutorials/proxy-the-httpbin-service"},"minimal example")," to see if everything is working perfectly."))}p.isMDXComponent=!0}}]);