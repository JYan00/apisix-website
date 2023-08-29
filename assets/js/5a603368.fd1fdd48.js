"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[52295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,k=d["".concat(o,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84862:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"Zipkin"},p=void 0,l={unversionedId:"plugins/zipkin",id:"version-2.14/plugins/zipkin",isDocsHomePage:!1,title:"Zipkin",description:"Zipkin an open source distributed tracing system. This plugin is supported to collect tracing and report to Zipkin Collector based on Zipkin API specification.",source:"@site/docs-apisix_versioned_docs/version-2.14/plugins/zipkin.md",sourceDirName:"plugins",slug:"/plugins/zipkin",permalink:"/docs/apisix/2.14/plugins/zipkin",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.14/docs/en/latest/plugins/zipkin.md",tags:[],version:"2.14",frontMatter:{title:"Zipkin"},sidebar:"version-2.14/docs",previous:{title:"client-control",permalink:"/docs/apisix/2.14/plugins/client-control"},next:{title:"skywalking",permalink:"/docs/apisix/2.14/plugins/skywalking"}},o=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[{value:"Run the Zipkin instance",id:"run-the-zipkin-instance",children:[]},{value:"Run the Jaeger instance",id:"run-the-jaeger-instance",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"example code for upstream ( golang with Gin )",id:"example-code-for-upstream--golang-with-gin-",children:[]}],s={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openzipkin/zipkin"},"Zipkin")," an open source distributed tracing system. This plugin is supported to collect tracing and report to Zipkin Collector based on ",(0,a.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/instrumenting.html"},"Zipkin API specification"),"."),(0,a.kt)("p",null,"It's also works with ",(0,a.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/docs/main/latest/en/setup/backend/zipkin-trace/#zipkin-receiver"},"Apache SkyWalking")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.31/getting-started/#migrating-from-zipkin"},"Jaeger"),", which are support Zipkin ",(0,a.kt)("a",{parentName:"p",href:"https://zipkin.io/zipkin-api/zipkin-api.yaml"},"v1"),"/",(0,a.kt)("a",{parentName:"p",href:"https://zipkin.io/zipkin-api/zipkin2-api.yaml"},"v2")," format. And of course, it can integrate other tracing systems adapted to Zipkin v1/v2 format as well."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"the http endpoint of Ziplin, for example: ",(0,a.kt)("inlineCode",{parentName:"td"},"http://127.0.0.1:9411/api/v2/spans"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sample_ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"[0.00001, 1]"),(0,a.kt)("td",{parentName:"tr",align:null},"the ratio of sample")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service_name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"service name for zipkin reporter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"server_addr"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"IPv4 address for zipkin reporter, default is nginx built-in variables $server_addr, here you can specify your external ip address.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"span_version"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"[1, 2]"),(0,a.kt)("td",{parentName:"tr",align:null},"the version of span type")))),(0,a.kt)("p",null,"Currently each traced request will create spans below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"request\n\u251c\u2500\u2500 proxy: from the beginning of the request to the beginning of header filter\n\u2514\u2500\u2500 response: from the beginning of header filter to the beginning of log\n")),(0,a.kt)("p",null,"Previously we created spans below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"request\n\u251c\u2500\u2500 rewrite\n\u251c\u2500\u2500 access\n\u2514\u2500\u2500 proxy\n    \u2514\u2500\u2500 body_filter\n")),(0,a.kt)("p",null,"Note: the name of span doesn't represent the corresponding Nginx's phase."),(0,a.kt)("p",null,"If you need to be compatible with old style, we can set ",(0,a.kt)("inlineCode",{parentName:"p"},"span_version")," to 1."),(0,a.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,a.kt)("p",null,"Here's an example, enable the zipkin plugin on the specified route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1,\n            "service_name": "APISIX-IN-SG",\n            "server_addr": "192.168.3.50"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"You also can complete the above operation through the web interface, first add a route, then add zipkin plugin:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/plugin/zipkin-1.png",alt:"enable zipkin plugin"})),(0,a.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,a.kt)("h3",{id:"run-the-zipkin-instance"},"Run the Zipkin instance"),(0,a.kt)("p",null,"e.g. using docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 9411:9411 openzipkin/zipkin\n")),(0,a.kt)("p",null,"Here is a test example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html\nHTTP/1.1 200 OK\n...\n")),(0,a.kt)("p",null,"Then you can use a browser to access ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9411/zipkin"),", the webUI of Zipkin:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/plugin/zipkin-1.jpg",alt:"zipkin web-ui"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/plugin/zipkin-2.jpg",alt:"zipkin web-ui list view"})),(0,a.kt)("h3",{id:"run-the-jaeger-instance"},"Run the Jaeger instance"),(0,a.kt)("p",null,"Besides Zipkin, this plugin supports reporting the traces to Jaeger as well. Here is a sample run on docker.\nRun Jaeger backend on docker first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d --name jaeger \\\n  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \\\n  -p 16686:16686 \\\n  -p 9411:9411 \\\n  jaegertracing/all-in-one:1.31\n")),(0,a.kt)("p",null,"Create a route with Zipkin plugin like Zipkin's example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1,\n            "service_name": "APISIX-IN-SG",\n            "server_addr": "192.168.3.50"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"Access the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html\nHTTP/1.1 200 OK\n...\n")),(0,a.kt)("p",null,"Then you can access ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:16686"),", the WebUI of Jaeger, to view traceson browser:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/plugin/jaeger-1.png",alt:"jaeger web-ui"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/plugin/jaeger-2.png",alt:"jaeger web-ui trace"})),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"When you want to disable the zipkin plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"The zipkin plugin has been disabled now. It works for other plugins."),(0,a.kt)("h2",{id:"example-code-for-upstream--golang-with-gin-"},"example code for upstream ( golang with Gin )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'func GetTracer(serviceName string, port int, enpoitUrl string, rate float64) *zipkin.Tracer {\n    // create a reporter to be used by the tracer\n    reporter := httpreporter.NewReporter(enpoitUrl)\n    // set-up the local endpoint for our service host is ip:host\n\n    thisip, _ := GetLocalIP()\n\n    host := fmt.Sprintf("%s:%d", thisip, port)\n    endpoint, _ := zipkin.NewEndpoint(serviceName, host)\n    // set-up our sampling strategy\n    sampler, _ := zipkin.NewCountingSampler(rate)\n    // initialize the tracer\n    tracer, _ := zipkin.NewTracer(\n        reporter,\n        zipkin.WithLocalEndpoint(endpoint),\n        zipkin.WithSampler(sampler),\n    )\n    return tracer\n}\n\nfunc main(){\n    r := gin.Default()\n\n    tracer := GetTracer(...)\n\n    // use middleware to extract parentID from http header that injected by APISIX\n    r.Use(func(c *gin.Context) {\n        span := this.Tracer.Extract(b3.ExtractHTTP(c.Request))\n        childSpan := this.Tracer.StartSpan(spanName, zipkin.Parent(span))\n        defer childSpan.Finish()\n        c.Next()\n    })\n\n}\n')))}u.isMDXComponent=!0}}]);