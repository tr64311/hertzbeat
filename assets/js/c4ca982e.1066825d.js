"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[62581],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(r),d=o,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,i(i({ref:e},s),{},{components:r})):n.createElement(g,i({ref:e},s))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79718:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"port",title:"Monitoring\uff1aport availability",sidebar_label:"Port availability",keywords:["open source monitoring tool","open source port monitoring tool","monitoring port metrics"]},i=void 0,l={unversionedId:"help/port",id:"version-v1.1.x/help/port",title:"Monitoring\uff1aport availability",description:"Judge whether the exposed port of the opposite end service is available, then judge whether the opposite end service is available, and collect Metrics such as response time for monitoring.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/port.md",sourceDirName:"help",slug:"/help/port",permalink:"/docs/v1.1.x/help/port",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/version-v1.1.x/help/port.md",tags:[],version:"v1.1.x",frontMatter:{id:"port",title:"Monitoring\uff1aport availability",sidebar_label:"Port availability",keywords:["open source monitoring tool","open source port monitoring tool","monitoring port metrics"]},sidebar:"docs",previous:{title:"PING connectivity",permalink:"/docs/v1.1.x/help/ping"},next:{title:"Full site Monitor",permalink:"/docs/v1.1.x/help/fullsite"}},p={},c=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1asummary",id:"metric-setsummary",level:4}],s={toc:c};function m(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Judge whether the exposed port of the opposite end service is available, then judge whether the opposite end service is available, and collect Metrics such as response time for monitoring.")),(0,o.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,o.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,o.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Port"),(0,o.kt)("td",{parentName:"tr",align:null},"Ports provided by website, http generally defaults to 80 and https generally defaults to 443")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Connection timeout"),(0,o.kt)("td",{parentName:"tr",align:null},"Waiting timeout for port connection, unit:ms, default: 3000ms")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,o.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,o.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,o.kt)("h3",{id:"collection-metric"},"Collection Metric"),(0,o.kt)("h4",{id:"metric-setsummary"},"Metric set\uff1asummary"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,o.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,o.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"responseTime"),(0,o.kt)("td",{parentName:"tr",align:null},"ms"),(0,o.kt)("td",{parentName:"tr",align:null},"Website response time")))))}m.isMDXComponent=!0}}]);