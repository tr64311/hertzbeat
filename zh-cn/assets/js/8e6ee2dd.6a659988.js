"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[14284],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(k,o(o({ref:e},s),{},{components:a})):n.createElement(k,o({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98718:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"spark",title:"Monitoring Spark",sidebar_label:"Spark Monitor",keywords:["open source monitoring tool","open source java spark monitoring tool","monitoring spark metrics"]},o=void 0,i={unversionedId:"help/spark",id:"version-v1.3.x/help/spark",title:"Monitoring Spark",description:"Collect and monitor the general performance Metrics of Spark.",source:"@site/versioned_docs/version-v1.3.x/help/spark.md",sourceDirName:"help",slug:"/help/spark",permalink:"/zh-cn/docs/v1.3.x/help/spark",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.3.x/help/spark.md",tags:[],version:"v1.3.x",frontMatter:{id:"spark",title:"Monitoring Spark",sidebar_label:"Spark Monitor",keywords:["open source monitoring tool","open source java spark monitoring tool","monitoring spark metrics"]}},m={},p=[{value:"Spark App Enable JMX Protocol",id:"spark-app-enable-jmx-protocol",level:3},{value:"\u7b2c\u4e00\u6b65",id:"\u7b2c\u4e00\u6b65",level:2},{value:"\u7b2c\u4e8c\u6b65",id:"\u7b2c\u4e8c\u6b65",level:2},{value:"\u7b2c\u4e09\u6b65",id:"\u7b2c\u4e09\u6b65",level:2},{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metrics Set\uff1amemory_pool",id:"metrics-setmemory_pool",level:4},{value:"Metrics Set\uff1acode_cache (Only Support JDK8)",id:"metrics-setcode_cache-only-support-jdk8",level:4},{value:"Metrics Set\uff1aclass_loading",id:"metrics-setclass_loading",level:4},{value:"Metrics Set\uff1athread",id:"metrics-setthread",level:4}],s={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of Spark.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Protocol Use\uff1aJMX")),(0,r.kt)("h3",{id:"spark-app-enable-jmx-protocol"},"Spark App Enable JMX Protocol"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add Spark ",(0,r.kt)("inlineCode",{parentName:"li"},"VM options")," When Start Server \u26a0\ufe0f customIP")),(0,r.kt)("p",null,"Refer: ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/spark-standalone.html"},"https://spark.apache.org/docs/latest/spark-standalone.html")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u76d1\u63a7\u914d\u7f6espark\u7684\u76d1\u63a7\u4e3b\u8981\u5206\u4e3aMaster\u3001Worker\u3001driver\u3001executor\u76d1\u63a7\u3002Master\u548cWorker\u7684\u76d1\u63a7\u5728spark\u96c6\u7fa4\u8fd0\u884c\u65f6\u5373\u53ef\u76d1\u63a7\uff0cDriver\u548cExcutor\u7684\u76d1\u63a7\u9700\u8981\u9488\u5bf9\u67d0\u4e00\u4e2aapp\u6765\u8fdb\u884c\u76d1\u63a7\u3002"),"\n",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u90fd\u8981\u76d1\u63a7\uff0c\u9700\u8981\u6839\u636e\u4ee5\u4e0b\u6b65\u9aa4\u6765\u914d\u7f6e")),(0,r.kt)("h2",{id:"\u7b2c\u4e00\u6b65"},"\u7b2c\u4e00\u6b65"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4fee\u6539$SPARK_HOME/conf/spark-env.sh\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u8bed\u53e5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# JMX Port to use\nSPARK_DAEMON_JAVA_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false" \n\n# export SPARK_DAEMON_JAVA_OPTS="$SPARK_DAEMON_JAVA_OPTS -Dcom.sun.management.jmxremote.port=$JMX_PORT "\nexport SPARK_DAEMON_JAVA_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.port=8712 "\n')),(0,r.kt)("p",null,"\u8bed\u53e5\u4e2d\u6709$JMX_PORT\uff0c\u8fd9\u4e2a\u7684\u503c\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u4e5f\u53ef\u4ee5\u83b7\u53d6\u4e00\u4e2a\u968f\u673a\u6570\u4f5c\u4e3a\u7aef\u53e3\u53f7\u3002\n\u5982\u679c\u7aef\u53e3\u81ea\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u5177\u4f53\u7684\u503c\uff0c\u800c spark \u7684 Master \u548c\u5176\u4e2d\u4e4b\u4e00\u7684 Worker \u5728\u540c\u4e00\u53f0\u673a\u5668\u4e0a\uff0c\u4f1a\u51fa\u73b0\u7aef\u53e3\u51b2\u7a81\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h2",{id:"\u7b2c\u4e8c\u6b65"},"\u7b2c\u4e8c\u6b65"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"vim $SPARK_HOME/conf/metrics.properties \u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"*.sink.jmx.class=org.apache.spark.metrics.sink.JmxSink\nmaster.source.jvm.class=org.apache.spark.metrics.source.JvmSource\nworker.source.jvm.class=org.apache.spark.metrics.source.JvmSource\ndriver.source.jvm.class=org.apache.spark.metrics.source.JvmSource\nexecutor.source.jvm.class=org.apache.spark.metrics.source.JvmSource\n")),(0,r.kt)("h2",{id:"\u7b2c\u4e09\u6b65"},"\u7b2c\u4e09\u6b65"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"vim $SPARK_HOME/conf/spark-defaults.conf\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u9879\u4e3adriver\u548cexecutor\u8bbe\u7f6e\u76d1\u63a7\u7aef\u53e3\uff0c\u5728\u6709\u7a0b\u5e8f\u8fd0\u884c\u7684\u60c5\u51b5\u4e0b\uff0c\u6b64\u7aef\u53e3\u4f1a\u88ab\u6253\u5f00\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"spark.metrics.conf /opt/bigdata/spark/conf/metrics.properties\nspark.driver.extraJavaOptions -XX:+PrintGCDetails -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.mana\ngement.jmxremote.port=8712\n\nspark.executor.extraJavaOptions -XX:+PrintGCDetails -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.mana\ngement.jmxremote.port=8711\n")),(0,r.kt)("p",null,"\u5728spark\u7684Master\u548cWorker\u6b63\u5e38\u8fd0\u884c\u4ee5\u53caspark-submit\u63d0\u4ea4\u4e86\u4e00\u4e2a\u7a0b\u5e8f\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4ecelinux\u4e2d\u67e5\u8be2\u51fa\u7aef\u53e3\u53f7\u7801\u3002"),(0,r.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Port provided by JMX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX connection user name, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX connection password, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,r.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,r.kt)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,r.kt)("h4",{id:"metrics-setmemory_pool"},"Metrics Set\uff1amemory_pool"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"metrics name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"committed"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"total size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"init size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"max size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"used size")))),(0,r.kt)("h4",{id:"metrics-setcode_cache-only-support-jdk8"},"Metrics Set\uff1acode_cache (Only Support JDK8)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"committed"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"total size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"init size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"max size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"used size")))),(0,r.kt)("h4",{id:"metrics-setclass_loading"},"Metrics Set\uff1aclass_loading"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Loaded Class Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalLoadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Total Loaded Class Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnloadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Unloaded Class Count")))),(0,r.kt)("h4",{id:"metrics-setthread"},"Metrics Set\uff1athread"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalStartedThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Total Started Thread Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Thread Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PeakThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Peak Thread Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DaemonThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Daemon Thread Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentThreadUserTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Current Thread User Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentThreadCpuTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Current Thread Cpu Time")))))}d.isMDXComponent=!0}}]);