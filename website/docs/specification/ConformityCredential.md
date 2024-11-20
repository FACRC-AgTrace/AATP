---
sidebar_position: 10
title: Conformity Credentials
---

import Disclaimer from '../\_disclaimer.mdx';

## Digital COnformity Credentials

The AATP digital conformity credentials are all implemented as profiles of the [UNTP Digital Conformity Credential (DCC)](https://uncefact.github.io/spec-untp/docs/specification/ConformityCredential). An AATP DCC profile is no different in structure to a UNTP DCC but has specific constraints regarding the allowed conformity schemes, standards, and regulations. Implementers should familiarise with the UNTP DCC before implementing any of the AATP conformity credential profiles.

The table lists each AATP conformity credential type and version as well as it's UNTP version dependency.

| Name | Current Version |Status| Release Date | UNTP dependency |
| --- | ---- | ------ | --- | --- | 
| [Deforestation Credential](#digital-livestock-passport-dlp)|  0.4.0| Draft| 20-11-2024 |UNTP DPP v0.5.0|
| | | | | |

## Deforestation Credential

The AATP Deforestation Credential is designed to provide a high integrity attestation of the deforestation status of an Australian farm (aka Facility). The attestation is designed to met the requirements of the [EU Deforestation Regulation (EUDR)](https://environment.ec.europa.eu/topics/forests/deforestation/regulation-deforestation-free-products_en) as well as provide high confidence due diligence for any global food brand that wishes to confidently attach deforestation free claims to their food products.

### Profile Rules

* `ConformityAssessment.assessedProduct` is not required.
* `ConformityAssessment.assessedFacility` is mandatory and MUST reference the Farm [PIC (Property Identification Code)](Identifiers#property-identification-codes-pic).
* `ConformityAttestation.authorisation` SHOULD be included and MUST reference (via `Endorsement.issuingAuthority` an accreditation trust anchor in the `.gov.au` domain.
* `ConformityAttestation.auditableEvidence` (eg satellite imagery) that informed the assessment SHOULD be included and MAY be encrypted via the `untp.SecureLink` object.


### Working Sample

An issued AATP Deforestation Credential (link TBD)

## Emissions Intensity Credential

TBD