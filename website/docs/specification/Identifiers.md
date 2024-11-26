---
sidebar_position: 20
title: Identitifiers
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

Identifiers of **businesses** (eg tax registration numbers), of **locations** (eg google pins, property identification codes or cadastral /lot numbers), and of **products** (eg NLIS, GS1 GTINs or other schemes) are ubiquitous throughout supply chains and underpin the integrity of the system. 

AATP builds upon existing identifier schemes without precluding the use of new schemes so that existing investments and high integrity registers can be leveraged. AATP requires four key features of the identifiers and, for those that don't already embody these features, provides a framework to uplift the identifier scheme to meet AATP requirements. Identifiers used in AATP implementations MUST be 

* **discoverable** (quoted in exchanged documents and, when attached to products, easily read by scanning a barcode, QR code, or RFID), 
* **globally unique** (by adding a domain prefix to local schemes), 

and SHOULD be

* **resolvable** (given an identifier, there is a standard way to find more data about the identified thing), and 
* **verifiable** (ownership of the identifier can be verified so that actors cannot make claims about identifiers they don't own). 

## Identifier Scheme Register

The UN will maintain an identifier scheme register with specific meta-data about each register as described in the UNTP [Identity Resolver](https://uncefact.github.io/spec-untp/docs/specification/IdentityResolver) specification. The UN register will provide verifiers in other regions with easy reference for key identifier scheme metadata. It will also act as a global whitelist for trusted registrar identifiers (DID). Once established, the scheme meta-data below will be replaced with references to the UN register.  

Most identifier schemes that are important to AATP are not yet ready to act as linked data signposts to verifiable data. For AATP implementers, the first step is just to ensure consistency in the population of URI identifiers of schemes (eg NLIS) and members (eg a specific animal). When referencing any of the schemes on this page in AATP credentials, use the following mapping:

* use `id` property as the `identifierScheme.id`
* use `name` property as the `identifierScheme.name`
* substitute the `registeredId` of the member into `{id}` the `memberIdTemplate` string - eg The globally unique URI for NLIS QDBH0132XBS01234 becomes `https://nlis.com.au/QDBH0132XBS01234`

## National Livestock Identification System (NLIS)

The [National Livestock Identification System (NLIS)](https://nlis.com.au/) is Australia's system for the identification and traceability of cattle, sheep and goats. NLIS reflects Australia's commitment to bio-security and food safety and provides a competitive advantage in a global market. NLIS tags identify approximately 30 million cattle, 80 million sheep, and 4 million goats in Australia. 

The [NLIS Tech Tips](https://www.nlis.com.au/NLISDocuments/Cattle%20device%20numbers%20(Jan%2014).pdf) document provides a good overview of how NLIS works.

### Digital Identity Readiness

* Discoverable : No (until RFID tagID -> NLIS Id service becomes available)
* Resolvable : No
* Verifiable No

### Scheme Metadata

|`IdentifierScheme` Property name|Property value|
|--|--|
|`id`|https://nlis.com.au/|
|`name`|National Livestock Identification System (NLIS)|
|`landingPage`|https://nlis.com.au/|
|`registerType`|Product|
|`jurisdiction`|AU|
|`memberIdTemplate`|https://nlis.com.au/{id}|
|`resolverTemplate`|Mapping service from RFID tag ID to NLIS ID not yet implemented|
|`supportedLinkTypes`|Link resolver not yet implemented|
|`supportedVocabularies`|Linked Data not yet implemented|
|`registrar.id`|None yet but should be a DID in the registrar domain such as `did:web:nlis.com.au:pic-anchor`|

### Identity Anchor Credential

The NLIS registrar SHOULD issue identity credentials to members that link the member DID to their NLIS registered PICs. In this way the NLIS register can act as a trust anchor even if state PIC registers do not provide similar credentials. 

The NLIS register SHOULD implement the UNTP [Digital Identity Anchor](https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor) standard as a trust anchor for farm PICs.  One DIA should be issued for each registered account (identified by an MLA ID) and should list all registered PIC URIs in the `registrationScopeList` property - as shown in the sample below.

```json
  "issuer":{
  	 "id":"did:web:nlis.com.au:pic-anchor"
  }
  "credentialSubject": {
    "type": [
      "RegisteredIdentity",
      "Identifier"
    ],
    "id": "did:web:samplefarm.com.au:my-farm",
    "name": "Sample farm",
    "registeredId": "myMLAID",
    "idScheme": {
      "type": [
        "IdentifierScheme"
      ],
      "id": "https://nlis.com.au",
      "name": "National Livestock Identification System (NLIS)"
    },
    "registerType": "Facility",
    "registrationScopeList": [
        "https://daf.qld.gov.au/pic/QDBH0132"
    ]
  }
```

## Property Identification Codes (PIC)

Property Identification Codes (PIC) are issued by each Australian state or territory jurisdiction for livestock farms in their state. Although the intent is to identify a physical geo-located and contiguous farm property, the PIC is frequently mis-used to reference an owning business rather than a physical location. There is no public register, no resolver service and no means to verify ownership. Nevertheless PICs are widely used in industry and so AATP has temporarily allocated Scheme Identifiers and `memberIdTemplate`s. 

### Digital Identity Readiness (all states)

|State|Discoverable|Resolvable|Verifiable|Notes|
|--|--|--|--|--|
|QLD|No|No|No | |
|NSW|No|No|No | |
|NT|[Yes](https://nt.gov.au/industry/agriculture/livestock-and-animals/get-a-property-identification-code/property-identification-code-list-all-regions)|No|No |The public register lists all PICs but does not provide a means to link to a specific PIC entry|
|SA|No|No|No | |
|TAS|No|No|No | |
|VIC|No|No|No |[PIC subdomain](https://pic.agriculture.vic.gov.au/) exists but not resolvable|
|WA|[Yes](https://brandssearch.dpird.wa.gov.au/livestock.html)|Partial|No|WE PIC entries are individually resolvable (eg [WFBY0691](https://brandssearch.dpird.wa.gov.au/earmark.html?id=071D.003E&brand=Q%20L%201&er1=erd_071.gif&er2=ere_003.gif&cl1=cld_071.gif&cl2=cle_003.gif&el1=eld_071.gif&el2=ele_003.gif)) but they are brand marks with PICs and have a complex URL structure that is not ideal as an identifier URI |


### Scheme Metadata (all states)

|State|PIC Scheme ID|PIC Scheme Template|
|--|--|--|
|QLD| `https://daf.qld.gov.au/pic`|`https://www.daf.qld.gov.au/pic/{id}` eg. `https://daf.qld.gov.au/pic/QDBH0132`|
|NSW| `https://lls.nsw.gov.au/pic`|`https://lls.nsw.gov.au/pic/{id}` eg. `https://lls.nsw.gov.au/pic/ND250250`|
|NT| `https://daf.nt.gov.au/pic`| `https://daf.nt.gov.au/pic/{id}` eg. `https://daf.nt.gov.au/picTBBT0151`|
|SA|`https://pir.sa.gov.au/pic`| `https://pir.sa.gov.au/pic/{id}` eg `https://pir.sa.gov.au/pic/SA850013` |
|TAS|`https://nre.tas.gov.au/pic`| `https://nre.tas.gov.au/pic/{id}` eg `https://nre.tas.gov.au/pic/MAHU0411` |
|VIC|`https://pic.agriculture.vic.gov.au/`| `https://pic.agriculture.vic.gov.au/{id}` eg `https://pic.agriculture.vic.gov.au/3CPWG015` |
|WA|`https://agric.wa.gov.au/pic` | `https://agric.wa.gov.au/pic/{id}` `https://agric.wa.gov.au/pic/WFBY0691`|

### Identity Anchor Credential

Each state registrar SHOULD issue identity credentials to members that link the member DID to their registered PICs following the UNTP [Digital Identity Anchor](https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor) standard as a trust anchor for farm PICs.  One DIA should be issued for each registered PIC as per the example below.

```json
  "issuer":{
  	 "id":"did:web:daf.qld.gov.au:pic-register"
  }
  "credentialSubject": {
    "type": [
      "RegisteredIdentity",
      "Identifier"
    ],
    "id": "did:web:samplefarm.com.au:my-farm",
    "name": "Sample farm",
    "registeredId": "QDBH0132",
    "idScheme": {
      "type": [
        "IdentifierScheme"
      ],
      "id": "https://daf.qld.gov.au/pic",
      "name": "Queensland PIC register"
    },
    "registerType": "Facility",
  }
```

## Australian Business Number (ABN)

The Australian Business Number (ABN) is the identity key for all business entities from individual sole traders to corporate entities. There are approximately 2 million registered business entities in a publicly searchable Australian Business Register (ABR) and each entity is resolvable via a simple URL. Only default data is returned since there is no link resolver implemented that would allow users to request different link types. The returned default data set of a given business is HTML and does not conform to any standard vocabulary. At this time, the ABR does not provide digitally verifiable evidence of registration. 

### Digital Identity Readiness

* Discoverable : Yes
* Resolvable : Partial
* Verifiable No

### Scheme Metadata

|`IdentifierScheme` Property name|Property value|
|--|--|
|`id`|https://abr.business.gov.au|
|`name`|Australian Business Number (ABN)|
|`landingPage`|https://abr.business.gov.au|
|`registerType`|Organisation|
|`jurisdiction`|AU|
|`memberIdTemplate`|https://abr.business.gov.au/{id}|
|`resolverTemplate`|https://abr.business.gov.au/ABN/View?abn={id}|
|`supportedLinkTypes`|None|
|`supportedVocabularies`|None|
|`registrar.id`|None yet but should be a DID in the registrar domain such as `did:web:abr.business.gov.au:abn-anchor`|

Note that the resolver template will yeild a response that is not conformant with [ISO/IEC 18975](https://www.iso.org/standard/85540.html) and does not return an [IETF-9264](https://datatracker.ietf.org/doc/rfc9264/) linkset. UNTP conforming [identifier resolver schemes](https://uncefact.github.io/spec-untp/docs/specification/IdentityResolver) MUST comply with both these standards  Therefore the ABN is considered "partially" resolvable.  

### Identity Anchor Credential

The Australian Business Register SHOULD issue identity credentials to members that link the member DID to their registered ABNs following the UNTP [Digital Identity Anchor](https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor) standard as a trust anchor for participating Australian Businesses.  One DIA should be issued for each registered ABN as per the example below. The `registrationScopeList` should be used to represent the registered entity type as per the [ABR Entity Type](https://abr.business.gov.au/Help/EntityTypeList) list.

```json
  "issuer":{
  	 "id":"did:web:abr.business.gov.au:abn-anchor"
  }
  "credentialSubject": {
    "type": [
      "RegisteredIdentity",
      "Identifier"
    ],
    "id": "did:web:samplebusiness.com.au:my-business",
    "name": "Sample Business",
    "registeredId": "90664869327",
    "idScheme": {
      "type": [
        "IdentifierScheme"
      ],
      "id": "https://abr.business.gov.au",
      "name": "Australian Business Register"
    },
    "registerType": "Organisation",
    "registrationScopeList": [
        "https://abr.business.gov.au/Help/EntityTypeDescription?Id=00019"
    ]
  }
```

## GS1 Global Trade Identification Numbers (GTIN)

Global Trade Item Number (GTIN) can be used by a company to uniquely identify all of its trade items. GS1 defines trade items as products or services that are priced, ordered or invoiced at any point in the supply chain.  GTINs can identify products at class level (product type), batch level (specific batch of a given product type) or individually serialised item level.  

As a traceability architecture, the AATP requires GS1 identifiers at batch or serialised item level. Current practice in the food industry is to manage traceability at batch level and therefore we define the usage of GS1 identifiers as globally resolvable product batches. 

### Digital Identity Readiness

* Discoverable : Yes
* Resolvable : Yes
* Verifiable No

### Scheme Metadata

Note that the resolver template 

|`IdentifierScheme` Property name|Property value|
|--|--|
|`id`|https://id.gs1.org/01/|
|`name`|GS1 Global Trade Identification Number (GTIN)|
|`landingPage`|https://www.gs1.org/standards/id-keys/gtin|
|`registerType`|Product|
|`jurisdiction`|Global|
|`memberIdTemplate`|`https://id.gs1.org/01/{id}/10/{batch}`|
|`resolverTemplate`|`https://id.gs1.org/01/{id}/10/{batch}` or `https://id.gs1.org/01/{id}`|
|`supportedLinkTypes`|https://ref.gs1.org/voc/?show=linktypes|
|`supportedVocabularies`|https://ref.gs1.org/voc/data/gs1Voc.jsonld|
|`registrar.id`|registrar DIDs not yet available|


Note that the Global GS1 identity resolver does not maintain data at batch level, only at GTIN level. When presented with a batch request like `https://id.gs1.org/01/09520123456788/10/ABC123`, the resolver will return available link type for the GTIN (09520123456788) which should include a link type https://ref.gs1.org/voc/serviceInfo which provides a redirection URL to a second link resolver operated by the product manufacturer. Therefore the workflow to retrieve a DPP at batch level is

* Parse the barcode to get the GTIN and batch.  
* Construct a resolver request using the resolver template `https://id.gs1.org/01/{id}/10/{batch}`
* Find the `https://ref.gs1.org/voc/serviceInfo` link type and follow the link to the manufacturer's resolver
* Follow the `https://ref.gs1.org/voc/sustainabilityInfo` link type returned from the manufacturers resolver to get the Digital Product Passport.

### Identity Anchor Credential

The GS1 Global Register SHOULD issue identity credentials to members that link the member DID to their registered GS1 Customer prefix following the UNTP [Digital Identity Anchor](https://uncefact.github.io/spec-untp/docs/specification/DigitalIdentityAnchor) standard as a trust anchor for participating Australian Businesses.  One DIA should be issued for each registered GS1 license key (ie GTIN prefix) as per the example below. The `registrationScopeList` MAY be used to represent any GLNs registered to the same license key. 

```json
  "issuer":{
  	 "id":"did:web:gs1.org:identity-anchor"
  }
  "credentialSubject": {
    "type": [
      "RegisteredIdentity",
      "Identifier"
    ],
    "id": "did:web:samplebusiness.com.au:my-business",
    "name": "Sample Business",
    "registeredId": "95060001404",
    "idScheme": {
      "type": [
        "IdentifierScheme"
      ],
      "id": "https://id.gs1.org/01/",
      "name": "GS1 Global Trade Identification Number"
    },
    "registerType": "Product",
    "registrationScopeList": [
        "https://id.gs1.org/414/9506248700180"
    ]
  }
```

