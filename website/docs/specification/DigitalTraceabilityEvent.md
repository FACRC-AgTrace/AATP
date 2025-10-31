---
sidebar_position: 7
title: Digital Traceability Events
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />


## Overview

The AATP digital traceability events are all implemented as profiles of the [UNTP Digital Traceability Event (DTE)](https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvents). An AATP DTE profile is no different in structure to a UNTP DTE but has specific constraints regarding the identifier schemes and industry vocabularies. Implementers should familiarise with the UNTP DTE before implementing any of the AATP traceability event profiles.

The table lists each AATP traceability event type and version as well as it's UNTP version dependency. Navigate to each event will provide additional details and examples.

| Name                                                             | Current Version | Status | Release Date | UNTP dependency |
| ---------------------------------------------------------------- | --------------- | ------ | ------------ | --------------- |
| [Animal Processing Event](/docs/livestock/AnimalProcessingEvent) | 0.4.0           | Draft  | 20-11-2024   | UNTP DTE v0.5.0 |
| [Animal Feeding Event](/docs/livestock/AnimalFeedingEvent)       | 0.4.0           | Draft  | 20-11-2024   | UNTP DTE v0.5.0 |

## Roadmap

As more industries onboard and adopt the AATP, there will be an emergent need for additional **Digital Traceability Events** to be defined for the Australian Agriculture context. 

There is a abundance of great work done on defining EPCIS and Key Data Elements that *should* be captured across various supply chains. This work will be reviewed and where appropriate used as guidance to define traceability events. 

Know work that can be used as reference is listed below. Any readers are encouraged to contribute to the list.

| Framework                                                                     | Description                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Deakin AGIFT Guidelines](https://foodtraceability.deakin.edu.au/the-guides/) | Deakin University has a series of guides titles *The Australian Guide to Implementing Food Traceability (AGIFT)* that assists companies to identify the critical tracking events and key data elements required to track their products from paddock to fork. |

## Logical Model

All AATP traceability events use the [UNTP Digital Traceability Event](https://uncefact.github.io/spec-untp/docs/specification/DigitalTraceabilityEvent) v 0.5.0 logical model without change. AATP only applies specific vocabulary and rules.

## Technical Artefacts

Implementers must use the [UNTP DTE Technical Artefacts](https://test.uncefact.org/vocabulary/untp/dte/0/about).  v0.5.0

