"use strict";(self.webpackChunkaatp_website=self.webpackChunkaatp_website||[]).push([[696],{5318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5611:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(5773),r=(a(7378),a(5318));const i={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses.")))}o.isMDXComponent=!0},6858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(5773),r=(a(7378),a(5318)),i=a(5611);const o={sidebar_position:10,title:"Livestock Industry"},s=void 0,l={unversionedId:"guidance/Livestock",id:"guidance/Livestock",title:"Livestock Industry",description:"Livestock Value Chain",source:"@site/docs/guidance/Livestock.md",sourceDirName:"guidance",slug:"/guidance/Livestock",permalink:"/AATP/docs/guidance/Livestock",draft:!1,editUrl:"https://github.com/FACRC-AgTrace/AATP/edit/main/website/docs/guidance/Livestock.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Livestock Industry"},sidebar:"tutorialSidebar",previous:{title:"Guidance",permalink:"/AATP/docs/guidance/"},next:{title:"Horticulture Industry",permalink:"/AATP/docs/guidance/Horticulture"}},c={},d=[{value:"Livestock Value Chain",id:"livestock-value-chain",level:2},{value:"Implementation Guidance",id:"implementation-guidance",level:2},{value:"Identity Anchors",id:"identity-anchors",level:2},{value:"Buyers (Retailers &amp; Brands)",id:"buyers-retailers--brands",level:2}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{mdxType:"Disclaimer"}),(0,r.kt)("h2",{id:"livestock-value-chain"},"Livestock Value Chain"),(0,r.kt)("p",null,"The livestock value chain shown below indicates which role(s) are expected to ",(0,r.kt)("strong",{parentName:"p"},"issue")," which AATP credential types. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Livestock Value Chain",src:a(5283).Z,width:"2000",height:"1125"})),(0,r.kt)("p",null,"Any actor that has an identifier of a cattle, facility, or organisation can find the issued credentials and verify them.  In general, downstream actors will be verifiers of upstream credentials. "),(0,r.kt)("h2",{id:"implementation-guidance"},"Implementation Guidance"),(0,r.kt)("p",null,"Each implementer role should follow links to the relevant credential specifications and ensure that they are issuing credentials according to the relevant specification. In most cases the technical implementation will be done by underlying ",(0,r.kt)("a",{parentName:"p",href:"../register/Software"},"software")," systems. However it is still important that each actor confirm that the AATP credentials issued by their chosen systems are valid by dropping them into the ",(0,r.kt)("a",{parentName:"p",href:"ConformityTesting"},"conformity testing")," service. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Issuer of"),(0,r.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ESG Certifier"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../specification/ConformityCredential#deforestation-credential"},"Deforestation Credential")),(0,r.kt)("td",{parentName:"tr",align:null},"Note that the deforestation credential subject will be the PIC of the farm and not the NLIS of the animal. Traceability from animal to farm is possible because the livestock passport includes the PIC of the farm.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Livestock Farm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../specification/DigitalProductPassport#digital-livestock-passport-dlp"},"Livestock Passport")),(0,r.kt)("td",{parentName:"tr",align:null},"Note that farmers that do not already have AATP compatible software systems may choose to delegate the authority to issue livestock passports to the feedlot or processor to which they sell the cattle.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grain Farm"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../specification/DigitalProductPassport#digital-grains-passport"},"Grain Passport")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sale-yard"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Sale-yards have no impact on ESG or safety qualities and so need not issue any credentials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Feedlot"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../specification/DigitalProductPassport#digital-livestock-passport-dlp"},"Livestock Passport")," and ",(0,r.kt)("a",{parentName:"td",href:"../specification/DigitalTraceabilityEvent#animal-feeding-event"},"Feeding Event")),(0,r.kt)("td",{parentName:"tr",align:null},"Accredited feedlots should link a new post-feeding Livestock Passport to the NLIS ID of the animal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Safety Certifier"),(0,r.kt)("td",{parentName:"tr",align:null},"AUSMeat credentials be defined"),(0,r.kt)("td",{parentName:"tr",align:null},"Safety credentials include AusMeat accreditation for abattoirs, AAWCS (welfare) certification, and many others. Credentials are typically issued to establishments identified by PICs. Digital mappings to AATP conformity credentials are not yet defined. However the holder of credentials are encouraged to make them discoverable via PIC link resolvers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Processor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../specification/DigitalProductPassport#processed-meat-passport"},"Processed Meat Passport")," and ",(0,r.kt)("a",{parentName:"td",href:"../specification/DigitalTraceabilityEvent#animal-processing-event"},"Animal Processing Event")),(0,r.kt)("td",{parentName:"tr",align:null},"The animal processing event represents a processed batch of animals and provides the essential connection from packaged meat product back to the batch from which it was derived")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Regulator (DAFF)"),(0,r.kt)("td",{parentName:"tr",align:null},"Export eCert and Guarantee of Origin"),(0,r.kt)("td",{parentName:"tr",align:null},"AATP mapping for regulatory credentials is not yet defined. Issuing eCerts as human and machine readable AATP Conformity Credentials would allow both intermediaries and competent authorities in export markets to verify compliance. A future avenue to further uplift the export market value of Australian produce would be to issue guarantee of origin credentials that attest to the collection of domestic certifications (eg deforestation, carbon intensity, etc).")))),(0,r.kt)("h2",{id:"identity-anchors"},"Identity Anchors"),(0,r.kt)("p",null,"Identity anchors add increased trust to the AATP ecosystem because they link the DIDs (Self-issued IDs) of actors such as farms, feedlots, processors etc to authoritative registers such as PIC registers, the ABR, or GS1 customer keys. They are very simple credentials and are simple to issue. Their purpose and detailed implementation guidance are provided in the UNTP ",(0,r.kt)("a",{parentName:"p",href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor"},"Digital Identity Anchor (DIA)")," specification.  The DIA is mapped to AATP identifiers in the ",(0,r.kt)("a",{parentName:"p",href:"../specification/Identifiers"},"Identifiers")," section of this website. The table below lists the specific identity anchors relevant for actors in the livestock industry. Each actor SHOULD request the corresponding identity credential from their registrar and should make it discoverable by "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linking it to their DID ",(0,r.kt)("inlineCode",{parentName:"li"},"serviceEndpoint")," as described in ",(0,r.kt)("a",{parentName:"li",href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor#via-did-service-endpoint"},"DIA DID discovery")),(0,r.kt)("li",{parentName:"ul"},"adding it to their registry entry as a link type as described in ",(0,r.kt)("a",{parentName:"li",href:"https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor#via-identity-resolver"},"DIA Resolver Discovery"))),(0,r.kt)("p",null,"These tasks will normally be facilitated by the registrar such as the NLIS, State PIC register, ABR, and GS1. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Identity Anchor Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"buyers-retailers--brands"},"Buyers (Retailers & Brands)"),(0,r.kt)("p",null,"TBD"))}u.isMDXComponent=!0},5283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/LivestockValueChain-bf0c17dec9bb1fd4f01653304766e45b.png"}}]);