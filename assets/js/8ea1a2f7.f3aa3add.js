"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[9107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={id:"docker-deploy",title:"Install HertzBeat via Docker",sidebar_label:"Install via Docker"},i=void 0,l={unversionedId:"start/docker-deploy",id:"version-v1.3.x/start/docker-deploy",title:"Install HertzBeat via Docker",description:"Recommend to use docker deploy HertzBeat",source:"@site/versioned_docs/version-v1.3.x/start/docker-deploy.md",sourceDirName:"start",slug:"/start/docker-deploy",permalink:"/docs/v1.3.x/start/docker-deploy",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.3.x/start/docker-deploy.md",tags:[],version:"v1.3.x",frontMatter:{id:"docker-deploy",title:"Install HertzBeat via Docker",sidebar_label:"Install via Docker"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/v1.3.x/start/quickstart"},next:{title:"Install via Package",permalink:"/docs/v1.3.x/start/package-deploy"}},p={},s=[{value:"FAQ",id:"faq",level:3}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Recommend to use docker deploy HertzBeat")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install the Docker environment",(0,r.kt)("br",{parentName:"p"}),"\n","Docker tools download refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker official document"),"\u3002\nAfter the installation you can check if the Docker version normally output at the terminal."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"pull HertzBeat Docker mirror",(0,r.kt)("br",{parentName:"p"}),"\n","you can look up the mirror version TAG in ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tancloud/hertzbeat/tags"},"dockerhub mirror repository"),(0,r.kt)("br",{parentName:"p"}),"\n","or in ",(0,r.kt)("a",{parentName:"p",href:"https://quay.io/repository/tancloud/hertzbeat"},"quay.io mirror repository"),"     "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull tancloud/hertzbeat   \n")),(0,r.kt)("p",{parentName:"li"},"or  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull quay.io/tancloud/hertzbeat\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mounted HertzBeat configuration file (optional)",(0,r.kt)("br",{parentName:"p"}),"\n","Create ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml")," in the host directory, eg:",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/application.yml"),(0,r.kt)("br",{parentName:"p"}),"\n","For the complete content of the configuration file, see the project repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),".",(0,r.kt)("br",{parentName:"p"}),"\n","You can modify the configuration file according to your needs.      "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you need to use email to send alarms, you need to replace the email server parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.mail")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml"),"   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommended")," If you need to use an external Mysql database to replace the built-in H2 database, you need to replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.datasource")," parameter in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml")," For specific steps, see ",(0,r.kt)("a",{parentName:"li",href:"mysql-change"},"Using Mysql to replace H2 database"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommended")," If you need to use the time series database TDengine to store indicator data, you need to replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"warehouse.store.td-engine")," parameter in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml")," for specific steps, see ",(0,r.kt)("a",{parentName:"li",href:"tdengine-init"},"Using TDengine to store metrics data"),"   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recommended")," If you need to use the time series database IotDB to store the indicator database, you need to replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"warehouse.storeiot-db")," parameter in ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml")," For specific steps, see ",(0,r.kt)("a",{parentName:"li",href:"iotdb-init"},"Use IotDB to store metrics data"),"   "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mounted the account file(optional)",(0,r.kt)("br",{parentName:"p"}),"\n","HertzBeat default built-in three user accounts, respectively ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/hertzbeat tom/hertzbeat guest/hertzbeat"),(0,r.kt)("br",{parentName:"p"}),"\n","If you need add, delete or modify account or password, configure ",(0,r.kt)("inlineCode",{parentName:"p"},"sureness.yml"),". Ignore this step without this demand.",(0,r.kt)("br",{parentName:"p"}),"\n","Create ",(0,r.kt)("inlineCode",{parentName:"p"},"sureness.yml")," in the host directory\uff0ceg:",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/sureness.yml"),(0,r.kt)("br",{parentName:"p"}),"\n","The configuration file content refer to project repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/blob/master/script/sureness.yml"},"/script/sureness.yml"),"\nFor detail steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"account-modify"},"Configure Account Password"),"    ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the HertzBeat Docker container    "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 1157:1157 \\\n    -e LANG=zh_CN.UTF-8 \\\n    -e TZ=Asia/Shanghai \\\n    -v /opt/data:/opt/hertzbeat/data \\\n    -v /opt/logs:/opt/hertzbeat/logs \\\n    -v /opt/application.yml:/opt/hertzbeat/config/application.yml \\\n    -v /opt/sureness.yml:/opt/hertzbeat/config/sureness.yml \\\n    --name hertzbeat tancloud/hertzbeat\n")),(0,r.kt)("p",null,"   This command starts a running HertzBeat Docker container with mapping port 1157. If existing processes on the host use the port, please modify host mapped port.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker run -d")," : Run a container in the background via Docker"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p 1157:1157"),"  : Mapping container ports to the host"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-e LANG=zh_CN.UTF-8"),"  : (optional) set the LANG  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-e TZ=Asia/Shanghai")," : (optional) set the TimeZone  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v /opt/data:/opt/hertzbeat/data")," : (optional, data persistence) Important\u26a0\ufe0f Mount the H2 database file to the local host, to ensure that the data is not lost due creating or deleting container.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v /opt/logs:/opt/hertzbeat/logs")," : (optional, if you don't have a need, just delete it) Mount the log file to the local host, to ensure the log will not be lost due creating or deleting container."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v /opt/application.yml:/opt/hertzbeat/config/application.yml"),"  : (optional, if you don't have a need, just delete it) Mount the local configuration file into the container which has been modified in the previous step, namely using the local configuration file to cover container configuration file.    "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v /opt/sureness.yml:/opt/hertzbeat/config/sureness.yml"),"  : (optional, if you don't have a need, just delete it) Mount account configuration file modified in the previous step into the container. Delete this command parameters if no needs.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--name hertzbeat")," : Naming container name hertzbeat "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tancloud/hertzbeat")," : Use the pulled latest HertzBeat official application mirror to start the container. ",(0,r.kt)("strong",{parentName:"li"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"quay.io/tancloud/hertzbeat")," instead if you pull ",(0,r.kt)("inlineCode",{parentName:"strong"},"quay.io")," docker image."),"     ")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Begin to explore HertzBeat  "),(0,r.kt)("p",{parentName:"li"},"Access http://ip:1157/ using browser. You can explore HertzBeat with default account ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/hertzbeat")," now!     "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HAVE FUN"),"   "),(0,r.kt)("h3",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The most common problem is network problems, please check in advance")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MYSQL, TDENGINE, IoTDB and HertzBeat are deployed on the same host by Docker,HertzBeat use localhost or 127.0.0.1 connect to the database but fail"),(0,r.kt)("br",{parentName:"p"}),"\n","The problems lies in Docker container failed to visit and connect localhost port. Because the docker default network mode is Bridge mode which can't access local machine through localhost."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Solution A\uff1aConfigure application.yml. Change database connection address from localhost to external IP of the host machine.",(0,r.kt)("br",{parentName:"p"}),"\n","Solution B\uff1aUse the Host network mode to start Docker, namely making Docker container and hosting share network. ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -d --network host ....."),"   "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"According to the process deploy\uff0cvisit http://ip:1157/ no interface"),(0,r.kt)("br",{parentName:"p"}),"\n","Please refer to the following points to troubleshoot issues\uff1a  "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"1\uff1aIf you switch to dependency service MYSQL database\uff0ccheck whether the database is created and started successfully.\n2\uff1aCheck whether dependent services, IP account and password configuration is correct in HertzBeat's configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),".\n3\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"docker logs hertzbeat")," Check whether the container log has errors. If you haven't solved the issue, report it to the communication group or community."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Log an error TDengine connection or insert SQL failed"),"  "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"1\uff1aCheck whether database account and password configured is correct, the database is created.",(0,r.kt)("br",{parentName:"p"}),"\n","2\uff1aIf you install TDengine2.3+ version, you must execute ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," to start adapter in addition to start the server.  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Historical monitoring charts have been missing data for a long time"),"  "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"1\uff1aCheck whether you configure Tdengine or IoTDB. No configuration means no historical chart data.",(0,r.kt)("br",{parentName:"p"}),"\n","2\uff1aCheck whether Tdengine database ",(0,r.kt)("inlineCode",{parentName:"p"},"hertzbeat")," is created.\n3: Check whether IP account and password configuration is correct in HertzBeat's configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the history chart on the monitoring page is not displayed\uff0cpopup ","[please configure time series database]"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"As shown in the popup window\uff0cthe premise of history chart display is that you need install and configure hertzbeat's dependency service - IoTDB or TDengine database.\nInstallation and initialization this database refer to ",(0,r.kt)("a",{parentName:"p",href:"tdengine-init"},"TDengine Installation")," or ",(0,r.kt)("a",{parentName:"p",href:"iotdb-init"},"IoTDB Installation"),"  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The historical picture of monitoring details is not displayed or has no data, and TDengine has been deployed  "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Please confirm whether the installed TDengine version is near 2.4.0.12, version 3.0 and 2.2 are not compatible.  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The time series database is installed and configured, but the page still displays a pop-up ","[Unable to provide historical chart data, please configure dependent time series database]"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Please check if the configuration parameters are correct\nIs iot-db or td-engine enable set to true\nNote\u26a0\ufe0fIf both hertzbeat and IotDB, TDengine are started under the same host for docker containers, 127.0.0.1 cannot be used for communication between containers by default, and the host IP is changed\nYou can check the startup logs according to the logs directory")))))}d.isMDXComponent=!0}}]);