"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={id:"document",title:"Documentation Notice",sidebar_position:1},a=void 0,s={unversionedId:"submit_guide/document",id:"submit_guide/document",title:"Documentation Notice",description:"\x3c!--",source:"@site/community/submit_guide/document.md",sourceDirName:"submit_guide",slug:"/submit_guide/document",permalink:"/community/submit_guide/document",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"document",title:"Documentation Notice",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"New PMC Member Process",permalink:"/community/contribution_guide/new_pmc_ember_process"},next:{title:"Submit Code",permalink:"/community/submit_guide/submit_code"}},c={},l=[{value:"Get the document project",id:"get-the-document-project",level:2},{value:"Preview and generate static files",id:"preview-and-generate-static-files",level:2},{value:"Directory structure",id:"directory-structure",level:2},{value:"Specification",id:"specification",level:2},{value:"Directory naming convention",id:"directory-naming-convention",level:3},{value:"Vue and the naming convention of static resource files",id:"vue-and-the-naming-convention-of-static-resource-files",level:3},{value:"Resource Path",id:"resource-path",level:3},{value:"Page content modification",id:"page-content-modification",level:3},{value:"Home page modification",id:"home-page-modification",level:3},{value:"Team page modification",id:"team-page-modification",level:3},{value:"User list page modification",id:"user-list-page-modification",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Good documentation is critical for any type of software. Any contribution that can improve the StreamPark documentation is welcome."),(0,o.kt)("h2",{id:"get-the-document-project"},"Get the document project"),(0,o.kt)("p",null,"Documentation for the StreamPark project is maintained in a separate ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-streampark-websitehttps://github.com/apache/incubator-streampark-website"},"git repository"),"."),(0,o.kt)("p",null,"First you need to fork the document project into your own github repository, and then clone the document to your local computer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:<your-github-user-name>/incubator-streampark-website\n")),(0,o.kt)("h2",{id:"preview-and-generate-static-files"},"Preview and generate static files"),(0,o.kt)("p",null,"This website is compiled using node, using Docusaurus framework components"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and install nodejs (version>12.5.0)"),(0,o.kt)("li",{parentName:"ol"},"Clone the code to the local ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:apache/incubator-streampark-website.git")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," to install the required dependent libraries."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run start")," in the root directory, you can visit http://localhost:3000 to view the English mode preview of the site"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run start-zh")," in the root directory, you can visit http://localhost:3000 to view the Chinese mode preview of the site"),(0,o.kt)("li",{parentName:"ol"},"To generate static website resource files, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build"),". The static resources of the build are in the build directory.")),(0,o.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"|-- community\n|-- docs     // The next version of the document that will be released soon\n|-- download\n|-- faq      // Q&A\n|-- i18n\n|   `-- zh-CN  //Internationalized Chinese\n|       |-- code.json\n|       |-- docusaurus-plugin-content-docs\n|       |-- docusaurus-plugin-content-docs-community\n|       |-- docusaurus-plugin-content-docs-download\n|       |-- docusaurus-plugin-content-docs-faq\n|       `-- docusaurus-theme-classic\n|-- resource  // Original project files for architecture/timing diagram/flow chart, etc.\n|-- src\n|   |-- components\n|   |-- css\n|   |-- js\n|   |-- pages\n|   |   |-- home\n|   |   |-- index.jsx\n|   |   |-- team\n|   |   |-- user\n|   |   `-- versions\n|   |-- styles\n|-- static // Picture static resource\n|   |-- doc  // document picture\n|   |-- user // users picture\n|   |-- home // homepage picture\n|   |-- img  // common picture\n|-- docusaurus.config.js\n")),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("h3",{id:"directory-naming-convention"},"Directory naming convention"),(0,o.kt)("p",null,"Use all lowercase, separated by underscores. If there is a plural structure, use plural nomenclature, and do not use plural abbreviations"),(0,o.kt)("p",null,"Positive example: ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts / styles / components / images / utils / layouts / demo_styles / demo-scripts / img / doc")),(0,o.kt)("p",null,"Counter example: ",(0,o.kt)("inlineCode",{parentName:"p"},"script / style / demoStyles / imgs / docs")),(0,o.kt)("h3",{id:"vue-and-the-naming-convention-of-static-resource-files"},"Vue and the naming convention of static resource files"),(0,o.kt)("p",null,"All lowercase, separated by a dash"),(0,o.kt)("p",null,"Positive example: ",(0,o.kt)("inlineCode",{parentName:"p"},"render-dom.js / signup.css / index.html / company-logo.png")),(0,o.kt)("p",null,"Counter example: ",(0,o.kt)("inlineCode",{parentName:"p"},"renderDom.js / UserManagement.html")),(0,o.kt)("h3",{id:"resource-path"},"Resource Path"),(0,o.kt)("p",null,"Image resources are unified under ",(0,o.kt)("inlineCode",{parentName:"p"},"static/{module name}")),(0,o.kt)("p",null,"css and other style files are placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/css")," directory"),(0,o.kt)("h3",{id:"page-content-modification"},"Page content modification"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Except for the homepage, team, user, Docs>All Version module page, all other pages can be directly jumped to the corresponding github resource modification page through the'Edit this page' button at the bottom")),(0,o.kt)("h3",{id:"home-page-modification"},"Home page modification"),(0,o.kt)("p",null,"Visit the page ",(0,o.kt)("a",{parentName:"p",href:"https://streampark.apache.org/"},"https://streampark.apache.org/"),"\nLocated in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/home")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500home\n\u2502 languages.json // Home page Chinese and English configuration\n\u2502 index.less     // homepage style\n")),(0,o.kt)("h3",{id:"team-page-modification"},"Team page modification"),(0,o.kt)("p",null,"Visit the page ",(0,o.kt)("a",{parentName:"p",href:"https://streampark.apache.org/team"},"https://streampark.apache.org/team"),"\nLocated in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/team")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500team\n\u2502 languages.json\n\u2502 index.js\n\u2502 index.less\n")),(0,o.kt)("h3",{id:"user-list-page-modification"},"User list page modification"),(0,o.kt)("p",null,"Visit the page ",(0,o.kt)("a",{parentName:"p",href:"https://streampark.apache.org/user"},"https://streampark.apache.org/user")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Located in `src/pages/user`\n\u2514\u2500versions\n        data.json\n        images.json\n        index.js\n        index.less\n        languages.json\n")))}p.isMDXComponent=!0}}]);