"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5429:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){let{className:t="adfit",style:a,unit:i,height:r,width:o}=e;return(0,n.useEffect)((()=>{let e=document.createElement("ins"),a=document.createElement("script");e.className="kakao_ad_area",e.style="display:none; width:100%;",a.async="true",a.type="text/javascript",a.src="//t1.daumcdn.net/kas/static/ba.min.js",e.setAttribute("data-ad-width",o.toString()),e.setAttribute("data-ad-height",r.toString()),e.setAttribute("data-ad-unit",i.toString()),document.querySelector(`.${t}`).appendChild(e),document.querySelector(`.${t}`).appendChild(a)}),[]),n.createElement("div",{style:a},n.createElement("div",{className:t}))}},2448:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(5429);function r(){return n.createElement(i.Z,{unit:"DAN-YTmjDwlbcP42HBg6",height:100,width:320,className:"adfit-top",style:{flex:1,marginTop:24,marginBottom:24}})}},7293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(2448);const o={title:"Troubleshooting",sidebar_label:"Troubleshooting",sidebar_position:8},l=void 0,s={unversionedId:"guides/troubleshooting",id:"guides/troubleshooting",title:"Troubleshooting",description:"Common issues",source:"@site/docs/guides/troubleshooting.mdx",sourceDirName:"guides",slug:"/guides/troubleshooting",permalink:"/docs/guides/troubleshooting",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/guides/troubleshooting.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Troubleshooting",sidebar_label:"Troubleshooting",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Amazon IAP",permalink:"/docs/guides/amazon-iap"},next:{title:"Lifecycle",permalink:"/docs/guides/lifecycle"}},u={},c=[{value:"Common issues",id:"common-issues",level:2},{value:"<code>getProducts</code> returns an empty array",id:"getproducts-returns-an-empty-array",level:2},{value:"<code>getAvailablePurchases()</code> returns an empty array",id:"getavailablepurchases-returns-an-empty-array",level:2},{value:"Invalid <code>productId</code> in iOS.",id:"invalid-productid-in-ios",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{mdxType:"AdFitTopFixed"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"common-issues"},"Common issues"),(0,i.kt)("p",null,"Most of the issues encountered by users are caused by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A device simulator. Use a real device for testing!"),(0,i.kt)("li",{parentName:"ul"},"An incorrect usage of the library. Read the ",(0,i.kt)("a",{parentName:"li",href:"https://react-native-iap.dooboolab.com"},"documentation"),".")),(0,i.kt)("h2",{id:"getproducts-returns-an-empty-array"},(0,i.kt)("inlineCode",{parentName:"h2"},"getProducts")," returns an empty array"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please double check if you've called ",(0,i.kt)("inlineCode",{parentName:"li"},"initConnection"),"."),(0,i.kt)("li",{parentName:"ul"},"Please wait for max. 24 hours to fetch your IAP products if you've just uploaded them. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab-community/react-native-iap/issues/1065"},"Related to issue"),"."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"iOS"),", from iOS version ",(0,i.kt)("inlineCode",{parentName:"li"},">=13"),", we seem to use ",(0,i.kt)("inlineCode",{parentName:"li"},"StoreKit")," to fix this issue as ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/58020258/requesting-an-in-app-purchase-in-ios-13-fails/58065711#58065711"},"mentioned in stackoverflow"),"."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"android"),", please double check ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab-community/react-native-iap/issues/124#issuecomment-386593185"},"issue comment here")," and see if you've missed something.")),(0,i.kt)("h2",{id:"getavailablepurchases-returns-an-empty-array"},(0,i.kt)("inlineCode",{parentName:"h2"},"getAvailablePurchases()")," returns an empty array"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getAvailablePurchases()")," is used only when you purchase a non-consumable product. This can be restored only."),(0,i.kt)("li",{parentName:"ul"},"If you want to find out if a user subscribes the product, you should check the receipt which you should store in your own database."),(0,i.kt)("li",{parentName:"ul"},"Apple suggests you handle this in your own backend to do things like what you are trying to achieve.")),(0,i.kt)("h2",{id:"invalid-productid-in-ios"},"Invalid ",(0,i.kt)("inlineCode",{parentName:"h2"},"productId")," in iOS."),(0,i.kt)("p",null,"Please try below and make sure you've done all the steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Completed an effective "Agreements, Tax, and Banking."')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Setup sandbox testing account in "Users and Roles."')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Signed into iOS device with sandbox account in "Settings / iTunes & App Stores".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set up three In-App Purchases with the following status:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ready to Submit"),(0,i.kt)("li",{parentName:"ul"},"Missing Metadata"),(0,i.kt)("li",{parentName:"ul"},"Waiting for Review"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Enable "In-App Purchase" in Xcode "Capabilities" and in Apple Developer -> "App ID" setting.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clean up builds:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete the app on device"),(0,i.kt)("li",{parentName:"ul"},"Restart device"),(0,i.kt)("li",{parentName:"ul"},"Quit \u201cstore\u201d related processes in Activity Monitor"),(0,i.kt)("li",{parentName:"ul"},"Development Provisioning Profile -> Clean -> Build.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Related issues ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab-community/react-native-iap/issues/256"},"#256"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dooboolab-community/react-native-iap/issues/263"},"#263"),".")))}m.isMDXComponent=!0}}]);