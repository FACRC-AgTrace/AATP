---
sidebar_position: 10
title: Conformity Credentials
---

import Disclaimer from '../\_disclaimer.mdx';

## Digital Conformity Credentials

The AATP digital conformity credentials are all implemented as profiles of the [UNTP Digital Conformity Credential (DCC)](https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential). An AATP DCC profile is no different in structure to a UNTP DCC but has specific constraints regarding the allowed conformity schemes, standards, and regulations. Implementers should familiarise with the UNTP DCC before implementing any of the AATP conformity credential profiles.

The table lists each AATP conformity credential type and version as well as it's UNTP version dependency.

| Name | Current Version |Status| Release Date | UNTP dependency |
| --- | ---- | ------ | --- | --- | 
| [Deforestation Credential](#deforestation-credential)|  0.4.0| Draft| 20-11-2024 |UNTP DPP v0.5.0|
| | | | | |

## Deforestation Credential

The AATP Deforestation Credential is designed to provide a high integrity attestation of the deforestation status of an Australian farm (aka Facility). The attestation is designed to met the requirements of the [EU Deforestation Regulation (EUDR)](https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en) as well as provide high confidence due diligence for any global food brand that wishes to confidently attach deforestation free claims to their food products.

### Logical Model

The Deforestation Credential leverages the [UNTP Digital Conformity Credential](https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential) v 0.5.0 logical model without change.

### Profile Rules

* `ConformityAssessment.assessedProduct` is not required.
* `ConformityAssessment.assessedFacility` is mandatory and MUST reference the Farm [PIC (Property Identification Code)](Identifiers#property-identification-codes-pic).
* `ConformityAssessment.assessedOrganisation` SHOULD be included and reference the farm owner or operator using the [ABN identity scheme](Identifiers#australian-business-number-abn)
* `ConformityAttestation.authorisation` SHOULD be included and reference (via `Endorsement.issuingAuthority` an accreditation trust anchor in the `.gov.au` domain.
* `ConformityAttestation.auditableEvidence` (eg satellite imagery) that informed the assessment SHOULD be included and MAY be encrypted via the `untp.SecureLink` object.
* `Claim.assessmentCriteria` MUST be drawn from the allowed [vocabularies](vocabularies) for deforestation criteria.


### Technical Artifacts

Implementers must use the [UNTP DCC Technical Artifacts](https://test.uncefact.org/vocabulary/untp/dcc/0/about).  v0.5.0

### Working Sample

|Clickable Link|Scan the QR|Comments|
|--|--|--|
|[Deforestation Conformity Credential](https://idr.aatp.showthething.com/dpird/pic/QBIX0987/?linkType=dpird:certificationInfo)|![Deforestation Conformity Credential](aatp-deforestation-credential.png)|Sample EUDR conformity credential. Click on the JSON tab to see the underling AATP data. Download the signed credential to test verification in your own system|


## Emissions Intensity Credential

TBD