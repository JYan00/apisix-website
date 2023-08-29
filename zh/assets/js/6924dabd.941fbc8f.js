"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[31144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22300:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(87462),i=(n(67294),n(3905));const r={title:"ACK (Alibaba Cloud)",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Alibaba Cloud"],description:"Guide to install APISIX ingress controller on Alibaba Cloud Container Service for Kubernetes (ACK)."},s=void 0,l={unversionedId:"deployments/ack",id:"version-1.6.1/deployments/ack",isDocsHomePage:!1,title:"ACK (Alibaba Cloud)",description:"Guide to install APISIX ingress controller on Alibaba Cloud Container Service for Kubernetes (ACK).",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.1/deployments/ack.md",sourceDirName:"deployments",slug:"/deployments/ack",permalink:"/zh/docs/ingress-controller/deployments/ack",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.1/docs/zh/latest/deployments/ack.md",tags:[],version:"1.6.1",frontMatter:{title:"ACK (Alibaba Cloud)",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Alibaba Cloud"],description:"Guide to install APISIX ingress controller on Alibaba Cloud Container Service for Kubernetes (ACK)."},sidebar:"version-1.6.1/docs",previous:{title:"EKS (Amazon)",permalink:"/zh/docs/ingress-controller/deployments/aws"},next:{title:"GKE (Google)",permalink:"/zh/docs/ingress-controller/deployments/gke"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and ingress controller",id:"install-apisix-and-ingress-controller",children:[]},{value:"Next steps",id:"next-steps",children:[{value:"Enable SSL",id:"enable-ssl",children:[]},{value:"Change default keys",id:"change-default-keys",children:[]}]}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how you can install APISIX ingress on ",(0,i.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/product/kubernetes"},"Alibaba Cloud Container Service for Kubernetes (ACK)"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Setting up APISIX ingress on ACK requires the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/create-an-ack-dedicated-cluster"},"Create an ACK service"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/connect-to-ack-clusters-by-using-kubectl"},"Add the cluster credentials")," to your kube config file."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),".")),(0,i.kt)("h2",{id:"install-apisix-and-ingress-controller"},"Install APISIX and ingress controller"),(0,i.kt)("p",null,"The script below installs APISIX and the ingress controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --set etcd.persistence.storageClass="alicloud-disk-ssd" \\\n  --set etcd.persistence.size="20Gi" \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default, APISIX ingress controller will watch the apiVersion of ",(0,i.kt)("inlineCode",{parentName:"p"},"networking.k8s.io/v1"),"."),(0,i.kt)("p",{parentName:"div"},"If the target Kubernetes version is under ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.19"),", add the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=networking/v1beta1"),"."),(0,i.kt)("p",{parentName:"div"},"Else, if your Kubernetes cluster version is under ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.16"),", set the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.ingressVersion=extensions/v1beta1"),"."))),(0,i.kt)("p",null,"This will create the five resources mentioned below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": dataplane the process the traffic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": control plane that processes all configuration changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": ingress controller which exposes APISIX."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless"),": stores configuration and handles internal communication.")),(0,i.kt)("p",null,"The gateway service type will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/use-an-existing-slb-instance-to-expose-an-application-2"},"Use an existing SLB instance to expose an application\n")," for details on using a load balancer."),(0,i.kt)("p",null,"You can find the load balancer IP address by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),(0,i.kt)("p",null,"ACK PersistentVolume requires the minimum size of ",(0,i.kt)("inlineCode",{parentName:"p"},"20Gi")," using FlexVolume (select ",(0,i.kt)("inlineCode",{parentName:"p"},"alicloud-disk-ssd"),")"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ACK")," PV require min_size is ",(0,i.kt)("inlineCode",{parentName:"p"},"20Gi"),",cluster with ",(0,i.kt)("inlineCode",{parentName:"p"},"flexVolume")," component select ",(0,i.kt)("inlineCode",{parentName:"p"},"alicloud-disk-ssd"),". If you are using Helm, you can use this ",(0,i.kt)("a",{parentName:"p",href:"https://hub.kubeapps.com/charts/bitnami/etcd"},"etcd configuration file"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'etcd:\n  persistence:\n    storageClass: "alicloud-disk-ssd"\n    size: 20Gi\n')),(0,i.kt)("p",null,"You should now be able to use APISIX ingress controller. You can try running this ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/tutorials/proxy-the-httpbin-service"},"minimal example")," to see if everything is working perfectly."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("h3",{id:"enable-ssl"},"Enable SSL"),(0,i.kt)("p",null,"SSL is disabled by default. You can enable it by adding the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--set gateway.tls.enabled=true"),"."),(0,i.kt)("h3",{id:"change-default-keys"},"Change default keys"),(0,i.kt)("p",null,"It is recommended to change the default keys for security:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"--set ingress-controller.config.apisix.adminKey=ADMIN_KEY_GENERATED_BY_YOURSELF\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"--set admin.credentials.admin=ADMIN_KEY_GENERATED_BY_YOURSELF\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"--set admin.credentials.viewer=VIEWER_KEY_GENERATED_BY_YOURSELF\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-controller.config.apisix.adminKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.credentials.admin")," must be the same. It is better if these are not same as ",(0,i.kt)("inlineCode",{parentName:"p"},"admin.credentials.viewer"),"."))))}p.isMDXComponent=!0}}]);