"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[6704],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"LDAP",title:"LDAP Quick Tutorial",sidebar_position:5},o=void 0,s={unversionedId:"user-guide/LDAP",id:"user-guide/LDAP",title:"LDAP Quick Tutorial",description:"LDAP Introduction",source:"@site/docs/user-guide/5-LDAP.md",sourceDirName:"user-guide",slug:"/user-guide/LDAP",permalink:"/docs/user-guide/LDAP",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/user-guide/5-LDAP.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"LDAP",title:"LDAP Quick Tutorial",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Docker Quick Tutorial",permalink:"/docs/user-guide/docker-deployment"},next:{title:"User, team, role and member management",permalink:"/docs/user-guide/Team"}},c={},l=[{value:"LDAP Introduction",id:"ldap-introduction",level:2},{value:"Why use LDAP?",id:"why-use-ldap",level:2},{value:"Configuring LDAP",id:"configuring-ldap",level:2},{value:"1.Official website to download the binary installation package",id:"1official-website-to-download-the-binary-installation-package",level:3},{value:"2.Add LDAP configuration",id:"2add-ldap-configuration",level:3}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ldap-introduction"},"LDAP Introduction"),(0,a.kt)("p",null,"LDAP (Light Directory Access Portocol), which is a lightweight directory access protocol based on the X.500 standard."),(0,a.kt)("p",null,"A directory is a database optimized for querying, browsing and searching that organizes data in a tree-like structure, similar to a file directory."),(0,a.kt)("p",null,"LDAP directory service is a system consisting of a directory database and a set of access protocols."),(0,a.kt)("h2",{id:"why-use-ldap"},"Why use LDAP?"),(0,a.kt)("p",null,"When we have more than one daily office system, each system has a different account password, the password is too much to remember which system the password corresponds to, when the new system development is not to create a new set of account password?"),(0,a.kt)("p",null,"LDAP unified authentication service is used to solve the above problems."),(0,a.kt)("h2",{id:"configuring-ldap"},"Configuring LDAP"),(0,a.kt)("h3",{id:"1official-website-to-download-the-binary-installation-package"},"1.Official website to download the binary installation package"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-streampark/releases"},"https://github.com/apache/incubator-streampark/releases")),(0,a.kt)("h3",{id:"2add-ldap-configuration"},"2.Add LDAP configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd streampark\ncd conf\nvim application\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ldap:\n  ## This value is the domain name required for company LDAP user login\n  urls: ldap://99.99.99.99:389\n  username: cn=Manager,dc=streampark,dc=com\n  password: streampark\n  ## DN distinguished name\n  embedded:\n    base-dn: dc=streampark,dc=com\n  user:\n    ## Key values for search filtering\n    identity:\n      attribute: cn\n    ## User matches the Key value of the user's mailbox\n    email:\n      attribute: mail\n")))}u.isMDXComponent=!0}}]);