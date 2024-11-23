---
sidebar_position: 7
title: Traceability Events
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Digital Traceability Events

The AATP digital traceability events are all implemented as profiles of the [UNTP Digital Traceability Event (DTE)](https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvents). An AATP DTE profile is no different in structure to a UNTP DTE but has specific constraints regarding the identifier schemes and industry vocabularies. Implementers should familiarise with the UNTP DTE before implementing any of the AATP traceability event profiles.

The table lists each AATP traceability event type and version as well as it's UNTP version dependency.

| Name | Current Version |Status| Release Date | UNTP dependency |
| --- | ---- | ------ | --- | --- | 
| [Animal Processing Event](#animal-processing-event)|  0.4.0| Draft| 20-11-2024 |UNTP DTE v0.5.0|
| | | | | |

### Logical Model

All AATP traceability events use the [UNTP Digital Traceability Event](https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvent) v 0.5.0 logical model without change. AATP only applies specific vocabulary and rules.

### Technical Artefacts

Implementers must use the [UNTP DTE Technical Artefacts](https://test.uncefact.org/vocabulary/untp/dte/0/about).  v0.5.0

## Animal Processing Event

The AATP Animal Processing Event represents the processing of a batch of animals at a meat processing plant. It uses the `transformation` event type with input as a list of identified animals and output as list of processed product types identified to batch level.

### Profile Rules

* `DigitalTraceabilityEvent.issuer` `CredentialIssuer.id` MUST be the DID of the processor and SHOULD include a `CredentialIssuer.OtherIdentifiers` structure that identifies the operator of the plant using the [ABN identity scheme](Identifiers#australian-business-number-abn).
* `TransformationEvent` MUST be included. No other event types are required.
* `TransformationEvent.processType` MUST be set to `AATP_Animal_Procesing_Event`
* `TransformationEvent.inputEPCList` is mandatory and MUST include a list of `Item.id` drawn from [NLIS identifier scheme](Identifiers#national-livestock-identifier-scheme-nlis).  `TransformationEvent.inputQuantityList` is not required.
* Outputs MUST be identified at least to batch level using `TransformationEvent.outputQuantityList` where `QuantityElement.productId` is a batch level identifier.  
* Outputs MAY be identified to serialised item level using `TransformationEvent.outputEPCList` where `item.id` is a unique serialised item idenifier.  
* Output identifiers MUST leverage a resolvable and verifiable identifier scheme. The [GS1 GTIN identifier scheme](Identifiers#gs1-global-trade-identifiation-numbers-gtin) is recommended but any schem may be used provided it meets the UNTP requirements for [resolvable and verifiable identifiers](https://uncefact.github.io/spec-untp/docs/specification/IdentityResolver).
* Outputs MAY be grouped into one DTE (that would list all products from a processing lot) or across multiple seaprate DTE (eg separate DTEs for specific cuts or by-products such as hides). 
* `TransformationEvent.actionCode` MUST be set to `add`, `TransformationEvent.bizStepCode` MUST be set to `cbv:BizStep-commissioning`, and `TransformationEvent.bizStepCode` MUST be set to `cbv:Disp-active`



### Working Sample

An issued AATP Animal Processing Event (link TBD)

##