---
sidebar_position: 10
title: Case Studies
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Summary

|Case Study|Date|Implementers|Summary|
|--|--|--|--|
|[AgTrace Proof of Concept - Livestock, EU Deforestation](#agtrace-proof-of-concept---livestock-eu-deforestation)|Dec 2023|[Trust Provenance](../register/Software#cibo-labs)|Verified technical feasibility and ease of implementation of a decentralised verifiable linked-data traceability architecture|
|[Regen Farmers Proof of Concept - Livestock, AU Emissions](#regen-farmers-proof-of-concept---livestock-au-emissions) |Mar 2024 |[Regen Farmers Mutual](https://www.regenfarmersmutual.com/) | Verified the feasibility of allocating farm level emissions data to mob or animal level consignments to help meet corporate sustainability goals and disclosures of major buyers.|
|[gTrace Proof of Concept - Horticulture, China exports](#agtrace-proof-of-concept---horticulture-china-exports)|Aug 2024 |[FreshChain](../register/Software#freshchain), [Source Certain](https://www.sourcecertain.com/) |Verified the technical feasibility of the use of traceability to inform and automate export market regulatory compliance|


### AATP / AgTrace PoC - Livestock, EU Deforestation

The first test of the AATP was conducted from September to December 2023 and the purpose was to confirm the technical viability of the decentralised model for traceability in the beef supply chain, using EU deforestation regulation compliance as the use-case. 

* Technical participants were [Trust Provenance](https://www.trustprovenance.com/) (farm app), [CIBO Labs](https://www.cibolabs.com.au/) (deforestation certificate), [GoSource](https://gosource.com.au/) (UN open source tools), [GS1 Australia](https://www.gs1au.org/) (Global GTIN link resolver).
* Business advisory was provided by [Australian Country Choice](https://www.accbeef.net.au/) and [Teys Australia](https://au.teysgroup.com/).
* The linked data discovery model was verified - that given a product identifier, verifiable data bout the product can be accessed no matter where it is stored. The PoC demonstrated working link resolvers for both [GS1 GTIN](../specification/Identifiers#gs1-global-trade-identification-numbers-gtin) (barcode on packaged meat) and [NLIS](../specification/Identifiers#national-livestock-identification-system-nlis) (RFID tag on livestock ears). 
* Traceability from packaged meat back to livestock and farm was verified using the [Animal Processing Event](../specification/DigitalTraceabilityEvent#animal-processing-event). The [Animal Feeding Event](../specification/DigitalTraceabilityEvent#animal-feeding-event) confirmed feasibility of also tracing grain origin used by feedlots.
* Digital product passports for livestock (issued by farms and feedlots) and processed meat (issued by processors) were issued by three different and independent technology platforms. Each was able to map their existing systems to [digital livestock passport](../specification/DigitalProductPassport#digital-livestock-passport-dlp) requirements and to issue working credentials with a very moderate amount of technical effort.
* A [deforestation credential](../specification/ConformityCredential#deforestation-credential) anchored to satellite surveys calibrated to Australian conditions verified the feasibility of simple and ubiquitous access to high integrity evidence of deforestation evidence. 

In short, this proof of concept verified the technical feasibility and low cost of implementation for the AATP.


### AATP / Regen Farmers PoC - Livestock, Emissions

[Regen Farmers Mutual](https://www.regenfarmersmutual.com/) works with farm collectives at landscape scale to promote the value of regenerative agriculture for both biodiversity and carbon emissions improvements - and to connect that value to buyers of sustainably farmed produce. A key challenge for such farmers is that, unless they sell into narrow and vertically integrated markets, there is no easy way to connect the ultimate buyer of livestock to the specific sustainability values of the farm.  

* Participants were [Regen Mutual](https://www.regenfarmersmutual.com/) (representing farmers), [Open Team](https://openteam.community/) (on farm digital apps), [Pyx Industries](https://www.pyx.io/) (technical design of the program), [Fulton Market Group](https://fmg.global/) (representing the ultimate buyer - McDonalds).
* Farm level emissions performance was apportioned to product (animal) level emissions disclosures in [livestock passport](../specification/DigitalProductPassport#digital-livestock-passport-dlp) and were discoverable and verifiable by each actor in the value chain, whether human or machine.

In short, this PoC proved the ability for AATP to open up visibility and value of farm sustainability performance beyond vertically integrated markets.

### AATP / Agtrace PoC - Horticulture, China exports

Australian horticultural produce must meet the food safety and bio-security [requirements of each export market](https://micor.agriculture.gov.au/Pages/default.aspx). The rules for each market are different and management of compliance can be costly and time consuming for Australian exporters. Furthermore, the premium value attached to "clean green" Australian produce often leads to substitution of counterfeit products in some export markets. This Proof of Concept aimed to verify the feasibility of streamlining export compliance through digitalisation and automation. The PoC also tested the feasibility of origin confirmation as an anti-counterfeiting measure. 

* Participants were [FreshChain](https://www.freshchain.com.au/) (farm and distributor application), [Source Certain](https://www.sourcecertain.com/) (chemo-metric provenance verification), [TrustProvenance](https://www.trustprovenance.com/) (automated compliance analysis), [GS1 Australia](https://www.gs1au.org/) (product, batch, and shipping identifiers), [GoSource](https://gosource.com.au/) (help-desk and technical support), [Hort Innovation](https://www.horticulture.com.au/) (peak body and quality standards) and [Cantrill Organics](https://www.cantrillorganics.com.au/).
* Horticulture product passports issued by farms and provenance credentials were linked to GS1 product batch identifiers (barcodes on shipments) and were verifiable in export markets.
* Rich digital data associated with horticultural product, including chemical treatment history, was used to test the feasibility of automating the export compliance assessment. 

In short, this PoC verified that the same rich product data associated with agricultural shipments can be used by very different stakeholders for different purposes (regulatory compliance, anti-counterfeiting, sustainability performance, organic status).


### AATP / De Bortoli PoC - Wine exports, dynamic labeling

De Bortoli exports wines all over the world and faces increasingly complex compliance and labeling requirements in different markets. This includes increasing requirements for proof of origin and product sustainability data. The purpose of the project was to verify that the AATP approach to data discovery (if you have the ID of the thing you can get data about the thing) can be tailored to automatically present the right data to the right market even from the the same label.

* Participants were [De Bortoli Wines](https://www.debortoli.com.au/) (wine producer and exporter), [Pyx Industries](https://www.pyx.io/) (link resolver development), [GS1 Australia](https://www.gs1au.org/) (2-D barcode system).
* The project developed an open-source link resolver that is usable by any AATP implementer and verified it's value as a means to attach rich information to product labels including product passports and conformity evidence.  Furthermore that the data can be automatically tailored depending on the jurisdiction of the buyer.

In short, this PoC delivered a valuable open source tool-set to complement the existing UN tools for credential issuing - and proved the value of the AATP linked data architecture to exporters that face diverse and dynamic export market conditions.


### AATP / AgTrace PoC - Grains, 

The Grains proof of concept will run from January 2025 and will focus on verifying

* A long term open governance framework for AATP that ensures industry trust and participation.
* The feasibility of tracking mass-balance based mixing of bulk commodities (grain silos).
