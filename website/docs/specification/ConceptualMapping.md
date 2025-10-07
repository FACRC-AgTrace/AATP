---
sidebar_position: 1
title: Conceptual Mapping
---

import UntpLink from '../../src/components/UntpLink';

# Conceptual Mapping

The **Australian Agriculture Traceability Protocol (AATP)** didn't start from scratch. Instead, it builds thoughtfully upon the solid foundation of the **United Nations Transparency Protocol (UNTP)**, a globally recognised framework for supply chain transparency and traceability.

Think of UNTP as the universal language of supply chain data, designed to work across industries and borders. AATP takes this powerful foundation and adapts it specifically for Australian agriculture, adding the specialised vocabulary and structures needed to capture the unique characteristics of livestock, crops, and agricultural processes.

## Why This Mapping Matters

When implementing AATP, you're not just learning a new protocol—you're learning how to speak the language of agricultural traceability while remaining fluent in the global standard. This mapping serves as your translation guide, showing you:

- **Where to start**: Which UNTP concepts form the foundation of each AATP feature
- **What's different**: How AATP extends or constrains UNTP for Australian agriculture
- **How to stay compatible**: Ensuring your AATP implementation works seamlessly with global UNTP implementations

## Purpose of This Mapping

This mapping exists to provide:

- **Clarity**: A clear understanding of how AATP builds on existing UNTP concepts
- **Continuity**: Assurance that AATP data remains interoperable with global UNTP implementations  
- **Extension**: Clear identification of where AATP introduces Australian agriculture-specific requirements

The UNTP specification remains your primary reference for implementation details, governance principles, and technical development. This mapping simply shows you how AATP concepts relate to that foundation.

## Implementation Guidance

### When Extensions or Profiles Are Needed

Not all UNTP implementations require AATP extensions or profiles. You can use standard UNTP concepts directly when:

- **Basic traceability needs**: Simple product tracking without Australian-specific requirements
- **Global interoperability**: When working with international supply chains that don't require Australian agriculture-specific data
- **Pilot implementations**: Starting with basic UNTP functionality before adding AATP-specific features

### When to Use Each Alignment Type

**Use Aligned concepts when:**
- You need standard UNTP functionality without Australian-specific requirements
- You want maximum interoperability with global UNTP implementations
- You're implementing identity resolution or basic vocabulary usage

**Use Extended concepts when:**
- You need Australian agriculture-specific data structures
- You're implementing product passports for specific commodities
- You require additional fields or properties not available in base UNTP

**Use Profile concepts when:**
- You need UNTP structure but with Australian-specific constraints
- You're implementing traceability events or conformity credentials
- You want to leverage UNTP's proven data model with local requirements

## Mapping Table

The following table provides a comprehensive overview of all AATP concepts and their relationship to UNTP specifications. Each row shows how an AATP concept maps to its corresponding UNTP counterpart, the type of alignment (Aligned, Extended, or Profile), and specific notes about the implementation approach.

| AATP Concept                   | UNTP Concept                                                                  | Alignment | Notes                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------- |
| Digital Livestock Passport     | <UntpLink spec="DigitalProductPassport">DPP</UntpLink>                        | Extended  | Adds Bovine characteristics and animal health treatment records based on MLA guidelines |
| Processed Meat Passport        | <UntpLink spec="DigitalProductPassport">DPP</UntpLink>                        | Extended  | Commodity-specific extension for processed meat products                                |
| Digital Horticulture Passport  | <UntpLink spec="DigitalProductPassport">DPP</UntpLink>                        | Extended  | Commodity-specific extension for horticultural products                                 |
| Digital Grains Passport        | <UntpLink spec="DigitalProductPassport">DPP</UntpLink>                        | Extended  | Commodity-specific extension for grain products                                         |
| Animal Processing Event        | <UntpLink spec="DigitalTraceabilityEvents">DTE</UntpLink>                     | Profile   | Uses transformation event type for processing animals at meat processing plants         |
| Animal Feeding Event           | <UntpLink spec="DigitalTraceabilityEvents">DTE</UntpLink>                     | Profile   | Uses association event type for feedlot processes connecting grain supply to animals    |
| Deforestation Credential       | <UntpLink spec="ConformityCredential">DCC</UntpLink>                          | Profile   | Provides deforestation status attestation for EUDR compliance and global food brands    |
| Emissions Intensity Credential | <UntpLink spec="ConformityCredential">DCC</UntpLink>                          | Profile   | TBD - Credential for emissions intensity attestation                                    |
| Australian Identifiers         | <UntpLink spec="IdentityResolver">Identity Resolver</UntpLink>                | Aligned   | Uses Australian identifier schemes (NLIS, PIC, ABN) for identity resolution             |
| AATP Vocabularies              | <UntpLink spec="SustainabilityVocabularyCatalog">UNTP Vocabularies</UntpLink> | Extended  | Extends UNTP vocabularies with Australian agriculture-specific terms and codes          |


## Notes

- Concepts marked as **aligned** can be implemented directly using UNTP's existing schema and semantics.  
- Concepts marked as **extensions** represent areas where AATP introduces new structures or workflows to address traceability and assurance gaps specific to agriculture.  
- Concepts marked as **profiles** use the exact UNTP structure but apply specific constraints regarding identifier schemes and industry vocabularies for Australian agriculture.
- This mapping will be updated as both UNTP and AATP specifications evolve.

