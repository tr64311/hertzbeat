"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[80049],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>s});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=a.createContext({}),m=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),h=m(r),s=o,b=h["".concat(p,".").concat(s)]||h[s]||c[s]||n;return r?a.createElement(b,l(l({ref:e},u),{},{components:r})):a.createElement(b,l({ref:e},u))}));function s(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,l=new Array(n);l[0]=h;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var m=2;m<n;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},81819:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var a=r(87462),o=(r(67294),r(3905));const n={title:"HertzBeat v1.2.0 \u53d1\u5e03\uff01\u6613\u7528\u53cb\u597d\u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},l=void 0,i={permalink:"/blog/2022/10/08/hertzbeat-v1.2.0",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2022-10-08-hertzbeat-v1.2.0.md",source:"@site/blog/2022-10-08-hertzbeat-v1.2.0.md",title:"HertzBeat v1.2.0 \u53d1\u5e03\uff01\u6613\u7528\u53cb\u597d\u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177",description:"v1.2.0",date:"2022-10-08T00:00:00.000Z",formattedDate:"October 8, 2022",tags:[{label:"opensource",permalink:"/blog/tags/opensource"}],readingTime:2.025,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"HertzBeat v1.2.0 \u53d1\u5e03\uff01\u6613\u7528\u53cb\u597d\u7684\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u5de5\u5177",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource"]},prevItem:{title:"HertzBeat v1.2.2\uff01Support K8S Monitor And More.",permalink:"/blog/2022/11/28/hertzbeat-v1.2.2"},nextItem:{title:"SSL\u8bc1\u4e66\u8fc7\u671f\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",permalink:"/blog/2022/09/10/ssl-practice"}},p={authorsImageUrls:[void 0]},m=[{value:"v1.2.0",id:"v120",level:2},{value:"Upgrade\u26a0\ufe0f",id:"upgrade\ufe0f",level:3}],u={toc:m};function c(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"v120"},"v1.2.0"),(0,o.kt)("p",null,"Home: hertzbeat.com | tancloud.cn"),(0,o.kt)("p",null,"Hi guys! HertzBeat v1.2.0 is coming. This version supports more powerful metrics collect jsonpath, upgrade springboot version to 2.7.4, support metrics unit convert display, and more. Fixed several bugs and improved the overall stable usability."),(0,o.kt)("p",null,"Only one docker command is needed to install and experience heartbeat\uff1a\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,o.kt)("p",null,"Thanks to the contributors! \ud83d\udc4d\ud83d\udc4d  @Ceilzcx @Privauto @VampireAchao @DreamGirl524 @CharlieXCL @emrys-he @SxLiuYu  @tomsun28"),(0,o.kt)("p",null,"We urgently need contributors to test cases, new application monitoring, documentation, etc., and very welcome you to join. Come on! HertzBeat is so easy!"),(0,o.kt)("p",null,"Feature\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/284"},"[home,manager]add practice learn doc and hertzbeat monitor yml #284")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/289"},"[webapp] auto redirect url when detect browser language #289")," contribute by @DreamGirl524"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/293"},"[home] update logo icon cdn url with fault tolerance #293")," contribute by @VampireAchao"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/295"},"[monitor] enable powerful jsonpath parser, add es metrics #295")," contribute by @Ceilzcx"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/296"},"[webapp] update ui theme #296")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/300"},"Feature change main pom artifactId #300")," contribute by @Privauto"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/302"},"[home,webapp] add users logo and update hertzbeat brand #302")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/305"},"[monitor] alerter notify test throw msg to front, optional spring.email config #305")," contribute by @Ceilzcx"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/306"},"[home]doc:update docker-deploy.md and tdengine-init.md #306")," contribute by @Privauto"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/320"},"[hertzbeat] refactor common collect metrics data and alert data queue #320")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/316"},"[hertzbeat] upgrade springboot version 2.4.13 to 2.7.4 #316")," contribute by @Privauto"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/322"},"[web-app] optimize the monitor detect feedback method #322")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/323"},"[github,webapp] add webapp ci action, fix eslint warning and upgrade codeql #323")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/324"},"[hertzbeat] add more unit test and test example #324")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/326"},"support metrics unit extract, convert and display #326")," contribute by @Ceilzcx"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/327"},"[common] optimize common aviator configuration #327"))),(0,o.kt)("p",null,"Bugfix."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/283"},"[webapp,home] fix middle category icon and update home doc #283")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/286"},"[web-app] fix redirect when monitors app is null #286")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/297"},"[alerter] bugfix aviator expression match npe #297")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/294"},"[doc] fix project name error #294")," contribute by @CharlieXCL"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/299"},'[common]feature:use "apache.http.conn.util" replace "sun.net.util" for upgrading java version #299')," contribute by @Privauto"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/304"},"Update docker-deploy.md #304")," contribute by @emrys-he"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/313"},"fix(sec): upgrade snakeyaml to 1.31 #313")," contribute by @SxLiuYu"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/321"},"[script] add startup log and optimize port service judgment #321")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/325"},"[web-app] fix echarts y-axis value tip overflow #325")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/pull/329"},"[webapp] fix interceptor http resp common error-msg when error #329"),"\nOnline ",(0,o.kt)("a",{parentName:"li",href:"https://console.tancloud.cn"},"https://console.tancloud.cn"),".")),(0,o.kt)("p",null,"Have Fun!"),(0,o.kt)("h3",{id:"upgrade\ufe0f"},"Upgrade\u26a0\ufe0f"),(0,o.kt)("p",null,"Need Convert ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spring:\n  resources:\n    static-locations:\n      - classpath:/dist/\n      - classpath:../dist/\n")),(0,o.kt)("p",null,"To"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spring:\n  web:\n    resources:\n      static-locations:\n        - classpath:/dist/\n        - classpath:../dist/\n")),(0,o.kt)("hr",null))}c.isMDXComponent=!0}}]);