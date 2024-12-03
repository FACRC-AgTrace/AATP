"use strict";(self.webpackChunkaatp_website=self.webpackChunkaatp_website||[]).push([[429],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.d(t,{ZP:()=>o});var i=n(5773),r=(n(7378),n(5318));const a={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}o.isMDXComponent=!0},6805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(5773),r=(n(7378),n(5318)),a=n(5611);const o={sidebar_position:30,title:"Conformity Testing"},s=void 0,l={unversionedId:"guidance/ConformityTesting",id:"guidance/ConformityTesting",title:"Conformity Testing",description:"Testing Services",source:"@site/docs/guidance/ConformityTesting.md",sourceDirName:"guidance",slug:"/guidance/ConformityTesting",permalink:"/docs/guidance/ConformityTesting",draft:!1,editUrl:"https://github.com/FACRC-AgTrace/AATP/edit/main/website/docs/guidance/ConformityTesting.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Conformity Testing"},sidebar:"tutorialSidebar",previous:{title:"Grains Industry",permalink:"/docs/guidance/Grains"},next:{title:"Help & Support",permalink:"/docs/guidance/Support"}},c={},p=[{value:"Testing Services",id:"testing-services",level:2},{value:"Sample Credentials",id:"sample-credentials",level:3},{value:"Reference Implementation",id:"reference-implementation",level:3},{value:"AATP Playground",id:"aatp-playground",level:3},{value:"Implementation Conformity Scope",id:"implementation-conformity-scope",level:2},{value:"Implementation Conformity Process",id:"implementation-conformity-process",level:2}],m={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.ZP,{mdxType:"Disclaimer"}),(0,r.kt)("h2",{id:"testing-services"},"Testing Services"),(0,r.kt)("p",null,"TO facilitate easy adoption and simple conformity self-assessments, AATP provides;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some sample AATP credentials so that you can see what you should be creating or drop them into your oven verifier."),(0,r.kt)("li",{parentName:"ul"},"A reference implementaiton where you can manually enter data to create AATP comforming credentials"),(0,r.kt)("li",{parentName:"ul"},"A test playground where you can drop credentials created from your system to test conformance with AATP. ")),(0,r.kt)("h3",{id:"sample-credentials"},"Sample Credentials"),(0,r.kt)("p",null,"Please refer to the relevant specification page - for example ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/aatp/docs/specification/DigitalProductPassport#working-sample"},"Livestock Passport Sample"),".  Using the working sample, you can"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See the human rendered version - and copy the rendering template embedded into the credential and modify it for your own use."),(0,r.kt)("li",{parentName:"ul"},"See the structured data by clicking the JSON tab"),(0,r.kt)("li",{parentName:"ul"},"Download the full JWT/JOSE signed credential from the download tab and test it in your own verifier.  ")),(0,r.kt)("h3",{id:"reference-implementation"},"Reference Implementation"),(0,r.kt)("p",null,"The AATP reference implemntation can be used as a place to create test credentials or as open source code that you can embed into your application.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The online reference applicaiton is hosted at ",(0,r.kt)("a",{parentName:"li",href:"https://aatp.showthething.com/"},"AATP Reference App"),"."),(0,r.kt)("li",{parentName:"ul"},"Supporting Documentation is available from ",(0,r.kt)("a",{parentName:"li",href:"https://uncefact.github.io/tests-untp/"},"UNTP test suite"),"."),(0,r.kt)("li",{parentName:"ul"},"Freely available (GPL 3.0) code is available from the test suite site and also from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/uncefact/project-vckit"},"UN VCkit repository"))),(0,r.kt)("h3",{id:"aatp-playground"},"AATP Playground"),(0,r.kt)("p",null,"The AATP playground is an online hosted version of the test suite. Once you have built your early AATP implementation, drop your generated credentials into the playground service to test confomance with the specification and get hints about what to fix.  "),(0,r.kt)("p",null,"Note - the AATP playground complete with AATP specific profile validation is under construction.  In the meantime, use the ",(0,r.kt)("a",{parentName:"p",href:"https://test.uncefact.org/untp-playground"},"UNTP Playground")),(0,r.kt)("h2",{id:"implementation-conformity-scope"},"Implementation Conformity Scope"),(0,r.kt)("p",null,"Governance applies not only to the development of AATP itself but also to the ecosystem of AATP implementers. A Livestock passport issued from a farm system should be discoverable and readable by a processor system without any specific system to system testing. To achieve such interoperability, AATP must provide a comprehensive conformity testing service that can provide confidence that, once any system has successfully completed testing, it will produce artifacts that are interoperable with any other system. "),(0,r.kt)("p",null,"Interoperability depends not only on well tested conformant implementations but also only alignment in the scope of what has been implemented. There are several AATP credential types and each may transition through multiple major versions. Maximum interoperability is achieved when both an issuing system and a verifier system support the same credential type major version - such as a digital livestock passport v1.0. However, even when two implementers do not support the same credential type & version, there are still some valuable fallback:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if both credentials (eg livestock passport v2 and horticulture passport v1) are built on the same underlying UNTP credential such as the digital product passport v1 - then there will still be a useful level of interoperability even if the specific extended attributes are not processable."),(0,r.kt)("li",{parentName:"ul"},"even when a verifier party has zero technical implementation or total misalignment between technical implementations, the credentials are still human readable and so can still be manually processed. ")),(0,r.kt)("p",null,"The diagram shows the different role types in a typical AATP implementation and which credential types they would be likely to implement. There are four roles."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The conformity assessment body (CAB) is the simplest one. A CAB issues credentials such as emissions or deforestation credentials to producers or manufacturers.  There is likely to be a wide variety of conformity credential types but all will follow the same interoperable UNTP Digital Conformity Credential core. The conformity credentials are issued to producers or manufacturers who may publish them together with their own issued credentials."),(0,r.kt)("li",{parentName:"ul"},"Registry operators will issue identity credentials to their members (typically the producers and manufacturers) in much the same way that CABs issue conformity credentials. Registry operators must also operate a link resolver service which, given a registered identifier (eg a GTIN) will return a list of links to further information about the identifier.  The links may point to data hosted by the register but more often will redirect to data (such as digital passports) hosted by the producer / manufacturer."),(0,r.kt)("li",{parentName:"ul"},"Producers and manufacturers (processors) are issuers of product credentials, facility credentials, and traceability events. These credentials should also be published and linked to the corresponding product or facility identifiers (eg NLIS or PIC) using a link resolver service. The conformity credentials and identity credentials provided by CABs and registers may also be published and linked to the same product or facility identifiers."),(0,r.kt)("li",{parentName:"ul"},"Finally verifiers will resolve product and facility identifiers to retrieve a bundle of related credentials and then will verify the collection of related credentials against a set of business rules. Some of the business rules will be common across all verifiers and therefore may be bundled as AATP standard executable rules.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Conformity Scope",src:n(3937).Z,width:"1000",height:"563"})),(0,r.kt)("h2",{id:"implementation-conformity-process"},"Implementation Conformity Process"),(0,r.kt)("p",null,"Implementers will follow a structured process to achieve and maintain AATP conformance - as indicated in the workflow diagram below and described in detail in the ",(0,r.kt)("a",{parentName:"p",href:"../guidance"},"implementation guidance")," pages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once satisfied that there is a positive case for implementation (please refer to the ",(0,r.kt)("a",{parentName:"li",href:"../business-case"},"business case")," section of this website) then implementers are encouraged to publish their intent to implement the AATP following the process outlined in the ",(0,r.kt)("a",{parentName:"li",href:"../register"},"implementation register"),"."),(0,r.kt)("li",{parentName:"ul"},"Once an implementation has completed build and has passed conformity testing then the implementer should update their entry on the AATP implementers register accordingly. At this point the maintenance life-cycle commences which includes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Re-testing and updating the implementation register when either the implementer software product major version or supported AATP credential major/minor version changes."),(0,r.kt)("li",{parentName:"ul"},"providing simple high-level and de-personalised quarterly reports to the AATP secretariat against KPIs. ")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Conformity Process",src:n(5010).Z,width:"716",height:"545"})))}d.isMDXComponent=!0},5010:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Governance_conformity-adcddc013522aeb10c9505aaba7903b2.png"},3937:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Governance_implementation-c8823efb98ec180c4584fa06f866ff0d.png"}}]);