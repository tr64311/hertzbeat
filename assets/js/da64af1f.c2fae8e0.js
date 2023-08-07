"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[18408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={id:"extend-http-jsonpath",title:"HTTP\u534f\u8baeJsonPath\u89e3\u6790\u65b9\u5f0f",sidebar_label:"JsonPath\u89e3\u6790\u65b9\u5f0f"},p=void 0,o={unversionedId:"advanced/extend-http-jsonpath",id:"version-v1.0.0/advanced/extend-http-jsonpath",title:"HTTP\u534f\u8baeJsonPath\u89e3\u6790\u65b9\u5f0f",description:"HTTP\u63a5\u53e3\u8c03\u7528\u83b7\u53d6\u54cd\u5e94\u6570\u636e\u540e\uff0c\u7528JsonPath\u811a\u672c\u89e3\u6790\u7684\u89e3\u6790\u65b9\u5f0f\u53bb\u89e3\u6790\u54cd\u5e94\u6570\u636e\u3002",source:"@site/versioned_docs/version-v1.0.0/advanced/extend-http-jsonpath.md",sourceDirName:"advanced",slug:"/advanced/extend-http-jsonpath",permalink:"/docs/v1.0.0/advanced/extend-http-jsonpath",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.0.0/advanced/extend-http-jsonpath.md",tags:[],version:"v1.0.0",frontMatter:{id:"extend-http-jsonpath",title:"HTTP\u534f\u8baeJsonPath\u89e3\u6790\u65b9\u5f0f",sidebar_label:"JsonPath\u89e3\u6790\u65b9\u5f0f"},sidebar:"docs",previous:{title:"\u7cfb\u7edf\u9ed8\u8ba4\u89e3\u6790\u65b9\u5f0f",permalink:"/docs/v1.0.0/advanced/extend-http-default"},next:{title:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/docs/v1.0.0/advanced/extend-jdbc"}},i={},m=[{value:"JsonPath\u64cd\u4f5c\u7b26",id:"jsonpath\u64cd\u4f5c\u7b26",level:4},{value:"HertzBeat\u6570\u636e\u683c\u5f0f\u89c4\u8303",id:"hertzbeat\u6570\u636e\u683c\u5f0f\u89c4\u8303",level:4},{value:"\u6837\u4f8b",id:"\u6837\u4f8b",level:4}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HTTP\u63a5\u53e3\u8c03\u7528\u83b7\u53d6\u54cd\u5e94\u6570\u636e\u540e\uff0c\u7528JsonPath\u811a\u672c\u89e3\u6790\u7684\u89e3\u6790\u65b9\u5f0f\u53bb\u89e3\u6790\u54cd\u5e94\u6570\u636e\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\u26a0\ufe0f \u54cd\u5e94\u6570\u636e\u4e3aJSON\u683c\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528JsonPath\u811a\u672c\u5c06\u54cd\u5e94\u6570\u636e\u89e3\u6790\u6210\u7b26\u5408HertzBeat\u6307\u5b9a\u7684\u6570\u636e\u7ed3\u6784\u89c4\u5219\u7684\u6570\u636e"),"  "),(0,r.kt)("h4",{id:"jsonpath\u64cd\u4f5c\u7b26"},"JsonPath\u64cd\u4f5c\u7b26"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.jsonpath.cn"},"JSONPath\u5728\u7ebf\u9a8c\u8bc1"),"     "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"JSONPATH"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u5bf9\u8c61\u6216\u5143\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5bf9\u8c61\u6216\u5143\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},". or []"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b50\u5143\u7d20\u64cd\u4f5c\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},".."),(0,r.kt)("td",{parentName:"tr",align:null},"\u9012\u5f52\u5339\u914d\u6240\u6709\u5b50\u5143\u7d20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u914d\u7b26. \u5339\u914d\u6240\u6709\u5bf9\u8c61\u6216\u5143\u7d20.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u6807\u8fd0\u7b97\u7b26\uff0cJsonPath\u7d22\u5f15\u4ece0\u5f00\u59cb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[,]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u8fd0\u7b97\u7b26\uff0c\u5c06\u591a\u4e2a\u7ed3\u679c\u62fc\u6210\u6570\u7ec4\u8fd4\u56de\uff0cJSONPath\u5141\u8bb8\u4f7f\u7528\u522b\u540d.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[start\ud83d\udd1astep]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4\u5207\u7247\u8fd0\u7b97\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"?()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fc7\u6ee4\u5668\uff08\u811a\u672c\uff09\u8868\u8fbe\u5f0f.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"()"),(0,r.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u8868\u8fbe\u5f0f.")))),(0,r.kt)("h4",{id:"hertzbeat\u6570\u636e\u683c\u5f0f\u89c4\u8303"},"HertzBeat\u6570\u636e\u683c\u5f0f\u89c4\u8303"),(0,r.kt)("p",null,"\u5355\u5c42\u683c\u5f0f\uff1akey-value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metricName1": "metricValue",\n  "metricName2": "metricValue",\n  "metricName3": "metricValue",\n  "metricName4": "metricValue"\n}\n')),(0,r.kt)("p",null,"\u591a\u5c42\u683c\u5f0f\uff1a\u6570\u7ec4\u91cc\u9762\u5957key-value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "metricName1": "metricValue",\n    "metricName2": "metricValue",\n    "metricName3": "metricValue",\n    "metricName4": "metricValue"\n  },\n  {\n    "metricName1": "metricValue",\n    "metricName2": "metricValue",\n    "metricName3": "metricValue",\n    "metricName4": "metricValue"\n  }\n]\n')),(0,r.kt)("h4",{id:"\u6837\u4f8b"},"\u6837\u4f8b"),(0,r.kt)("p",null,"\u67e5\u8be2\u81ea\u5b9a\u4e49\u7cfb\u7edf\u7684\u6570\u503c\u4fe1\u606f\uff0c\u5176\u66b4\u9732\u63a5\u53e3\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics/person"),"\uff0c\u6211\u4eec\u9700\u8981\u5176\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"type,num"),"\u6307\u6807",(0,r.kt)("br",{parentName:"p"}),"\n","\u63a5\u53e3\u8fd4\u56de\u7684\u539f\u59cb\u6570\u636e\u5982\u4e0b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "John",\n  "lastName" : "doe",\n  "age"      : 26,\n  "address"  : {\n    "streetAddress": "naist street",\n    "city"         : "Nara",\n    "postalCode"   : "630-0192"\n  },\n  "number": [\n    {\n      "type": "core",\n      "num": 3343\n    },\n    {\n      "type": "home",\n      "num": 4543\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528JsonPath\u811a\u672c\u89e3\u6790\uff0c\u5bf9\u5e94\u7684\u811a\u672c\u4e3a: ",(0,r.kt)("inlineCode",{parentName:"p"},"$.number[*]")," \uff0c\u89e3\u6790\u540e\u7684\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "core",\n    "num": 3343\n  },\n  {\n    "type": "home",\n    "num": 4543\n  }\n]\n')),(0,r.kt)("p",null,"\u6b64\u6570\u636e\u7ed3\u6784\u7b26\u5408HertzBeat\u7684\u6570\u636e\u683c\u5f0f\u89c4\u8303\uff0c\u6210\u529f\u63d0\u53d6\u6307\u6807",(0,r.kt)("inlineCode",{parentName:"p"},"type,num"),"\u503c\u3002   "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u5e94\u7684\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6YML\u53ef\u4ee5\u914d\u7f6e\u4e3a\u5982\u4e0b"),"   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u6b64\u76d1\u63a7\u7c7b\u578b\u6240\u5c5e\u7c7b\u522b\uff1aservice-\u5e94\u7528\u670d\u52a1\u76d1\u63a7 db-\u6570\u636e\u5e93\u76d1\u63a7 custom-\u81ea\u5b9a\u4e49\u76d1\u63a7 os-\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\ncategory: custom\n# \u76d1\u63a7\u5e94\u7528\u7c7b\u578b(\u4e0e\u6587\u4ef6\u540d\u4fdd\u6301\u4e00\u81f4) eg: linux windows tomcat mysql aws...\napp: example\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\u7c7b\u578b\n  en-US: EXAMPLE APP\n# \u53c2\u6570\u6620\u5c04map. \u8fd9\u4e9b\u4e3a\u8f93\u5165\u53c2\u6570\u53d8\u91cf\uff0c\u5373\u53ef\u4ee5\u7528^_^host^_^\u7684\u5f62\u5f0f\u5199\u5230\u540e\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u7cfb\u7edf\u81ea\u52a8\u53d8\u91cf\u503c\u66ff\u6362\n# type\u662f\u53c2\u6570\u7c7b\u578b: 0-number\u6570\u5b57, 1-string\u660e\u6587\u5b57\u7b26\u4e32, 2-secret\u52a0\u5bc6\u5b57\u7b26\u4e32\n# \u5f3a\u5236\u56fa\u5b9a\u5fc5\u987b\u53c2\u6570 - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n# \u6307\u6807\u7ec4\u5217\u8868\nmetrics:\n# \u7b2c\u4e00\u4e2a\u76d1\u63a7\u6307\u6807\u7ec4 person\n# \u6ce8\u610f\uff1a\u5185\u7f6e\u76d1\u63a7\u6307\u6807\u6709 (responseTime - \u54cd\u5e94\u65f6\u95f4)\n  - name: cpu\n    # \u6307\u6807\u7ec4\u8c03\u5ea6\u4f18\u5148\u7ea7(0-127)\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8,\u4f18\u5148\u7ea7\u4f4e\u7684\u6307\u6807\u7ec4\u4f1a\u7b49\u4f18\u5148\u7ea7\u9ad8\u7684\u6307\u6807\u7ec4\u91c7\u96c6\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u5ea6,\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u6307\u6807\u7ec4\u4f1a\u5e76\u884c\u8c03\u5ea6\u91c7\u96c6\n    # \u4f18\u5148\u7ea7\u4e3a0\u7684\u6307\u6807\u7ec4\u4e3a\u53ef\u7528\u6027\u6307\u6807\u7ec4,\u5373\u5b83\u4f1a\u88ab\u9996\u5148\u8c03\u5ea6,\u91c7\u96c6\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u8c03\u5ea6\u5176\u5b83\u6307\u6807\u7ec4,\u91c7\u96c6\u5931\u8d25\u5219\u4e2d\u65ad\u8c03\u5ea6\n    priority: 0\n    # \u6307\u6807\u7ec4\u4e2d\u7684\u5177\u4f53\u76d1\u63a7\u6307\u6807\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   instance\u662f\u5426\u4e3a\u5b9e\u4f8b\u4e3b\u952e   unit:\u6307\u6807\u5355\u4f4d\n      - field: type\n        type: 1\n        instance: true\n      - field: num\n        type: 0\n# \u76d1\u63a7\u91c7\u96c6\u4f7f\u7528\u534f\u8bae eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n# \u5f53protocol\u4e3ahttp\u534f\u8bae\u65f6\u5177\u4f53\u7684\u91c7\u96c6\u914d\u7f6e\n    http:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      # url\u8bf7\u6c42\u63a5\u53e3\u8def\u5f84\n      url: /metrics/person\n      # \u8bf7\u6c42\u65b9\u5f0f GET POST PUT DELETE PATCH\n      method: GET\n      # \u662f\u5426\u542f\u7528ssl/tls,\u5373\u662fhttp\u8fd8\u662fhttps,\u9ed8\u8ba4false\n      ssl: false\n      # \u54cd\u5e94\u6570\u636e\u89e3\u6790\u65b9\u5f0f: default-\u7cfb\u7edf\u89c4\u5219,jsonPath-jsonPath\u811a\u672c,website-\u7f51\u7ad9\u53ef\u7528\u6027\u6307\u6807\u76d1\u63a7\n      # \u8fd9\u91cc\u4f7f\u7528jsonPath\u89e3\u6790\n      parseType: $.number[*] \n")))}c.isMDXComponent=!0}}]);