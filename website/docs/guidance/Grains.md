---
sidebar_position: 20
title: Grains Industry
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />


## Grains Value Chain

The Grains value chain shown below indicates which role(s) are expected to **issue** which AATP credential types. 



Any actor that has an identifier of a grain consignment, grower facility, or organisation can find the issued credentials and verify them.  In general, downstream actors will be verifiers of upstream credentials. 

## Implementation Guidance

Each implementer role should follow links to the relevant credential specifications and ensure that they are issuing credentials according to the relevant specification. In most cases the technical implementation will be done by underlying [software](../register/Software) systems. However it is still important that each actor confirm that the AATP credentials issued by their chosen systems are valid by dropping them into the [conformity testing](ConformityTesting) service. 

|Role|Issuer of|Comments|
|--|--|--|
|ESG Certifier|[Deforestation Credential](../specification/ConformityCredential#deforestation-credential)|Note that the deforestation credential subject will be the PIC of the farm and not the NLIS of the animal. Traceability from animal to farm is possible because the livestock passport includes the PIC of the farm. |
| | |
|Regulator (DAFF)|Export phytosanitary certificates and Guarantee of Origin certificates|AATP mapping for regulatory credentials is not yet defined. Issuing phytosanitary as human and machine readable AATP Conformity Credentials would allow both intermediaries and competent authorities in export markets to verify compliance. A future avenue to further uplift the export market value of Australian produce would be to issue guarantee of origin credentials that attest to the collection of domestic certifications (eg deforestation, carbon intensity, etc). |


## Identity Anchors


TBD


## Buyers (Retailers & Brands)


TBD

