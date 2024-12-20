---
sidebar_position: 3
title: Business Case
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

The decision to implement AATP requires a positive business case to justify the investment. The purpose of this section is to provide cost benefit assessment at both national economy level (this page) as well as to provide a [toolkit](BusinessCaseTemplates) for individual businesses to assess the cost end benefit categories to suit their individual circumstances.  

## Implementation Options

There are four possible models for achieving supply chain interoperability at scale, which could be used individually or in combination.

* **Fully manual** paper based exchange.  This means that every farmer manually creates product passports for every animal or agricultural produce consignment and, at the other end, corporate buyers manually check and aggregate each one. Even though there are existing examples of this, it would be extremely costly at scale and is assumed to be infeasible if being considered for implementation today.  
* **Centralised** repository to which everything is pushed. This is the “platform” model. Integration costs scale linearly because each implementer connects once to the platform. But, although technically attractive, this is a commercially infeasible option because it implies a winner-take-all monopoly. Even though there are existing examples of this model being mandated in Australia (i.e. a legislative requirement), that mandate would not cross borders so would not handle imported or exported food. It is also a high-cost model, especially regarding the governance and inspection required for each integration.  Therefore, this model is also assumed to be infeasible if it were to be considered for implementation today.
* **Federated** systems with system-to-system connections (API). This model solves the commercial lock-in problem because it accommodates any number of systems. But this does not scale technically because the number of interconnections grows as the square of the number of systems. So 100 systems connecting to any of each other requires 10,000 customized interconnections. APIs are good for “one to many” integration patterns (e.g. millions of users of a single service, like Google Maps) but have never worked for the "many to many" integration pattern of supply chains. Therefore, this model is also assumed to be infeasible at scale.
* **Decentralised** verifiable linked data (i.e. the UNTP / AATP model). This model accommodates any number of platforms so solves the commercial lock-in problem. Also, integration costs scale linearly because each system acts independently of any other when publishing standard credentials and any other system can consume a credential as long as it is AATP compliant and has the necessary permissions. Therefore, it is feasible and cost effective technically. It can be concluded that this is the only commercially and technically feasible model at scale.

In this context it would make little sense if comparing implementation options today, to make a cost-benefit case that contrasts these options because we would be comparing the infeasible to the feasible.  For example a detailed assessment might model the manual/paper scenario to cost the economy $1Bn per year and the AATP scenario $50m per year. But there is little sense in claiming a $950m benefit - because what is being contrasted is so infeasible that it would not happen today.

## AATP Implementation Cost Assumptions

* That **micro and small businesses** (under 20 employees) will be using a commercial off the shelf farm management or business management system that implements AATP support as a value-adding feature of it's offering. Although such systems may include AATP support at no extra cost, we assume a 10% license fee uplift. There are around 2 million of such businesses in Australia of which agriculture accounts for about 5% or 100,000 entities. A typical small agribusiness will spend around $1000 per year on farm software. A 10% uplift across 100,000 entities is around $10 million economy wide.
* That **medium businesses** (20 to 200 employees) will also be using commercial off the shelf software but are likely to have developed some customized solutions and internal integrations that mean AATP implementation is not simply a case of just using compliant software. Some implementation and testing costs will be incurred and, based on [Proof of Concept](CaseStudies) implementations, is assumed to average $20,000. There are around 60,000 medium businesses in Australia and a 5% share from agribusiness would indicate around 3,000 medium sized AATP implementers or approximately $60m economy-wide. 
* That **larger and enterprise businesses** (over 200 employees) will have a complex ICT landscape and will need to engage their internal ICT department for AATP implementation. Experience from AATP [Proof of Concept](CaseStudies) work indicates that implementation costs may range between $100,000 and $1 million for enterprise implementers. There are around 5,000 such businesses in Australia and a 5% share from agribusiness would indicate around 250 large corporate AATP implementers or approximately a further $60m economy wide. 


## AATP Benefit Assumptions. 

From a benefit perspective, the benefits that are modeled arise only when sustainability data is ubiquitous, digital and verifiable - allowing industrial buyers and consumers to improve their risk exposure, brand value, due-diligence obligations, corporate disclosures, and anti-counterfeiting measures through highly automated and verifiable processes. 

The AATP benefit assessment framework is modeled on the [UNTP Industry Business Case](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/) categories and assumes a conservative benefit as a percentage of revenue to each. This is intended as a tool to benchmark the possible economy-wide benefits of digitalisation of traceability and transparency in the Australian Agriculture sector. 

|Benefit Category|Type|Summary|% of revenue impact|
|--|--|--|--|
|[Market access](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/#market-access)|Revenue increase|Legislation increasingly mandates proof of ESG compliance, with regulations like EU Deforestation Regulation and EU Corporate Sustainability Due Diligence Directive placing the burden of proof on product suppliers, impacting up to 3% of global trade  and posing significant revenue risks, while AATP transparency helps businesses retain market access|0.5% |
|[Price uplift](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/#unit-price-uplift)|Revenue increase|Consumers increasingly consider sustainability in purchasing decisions, with around one-third of consumers willing to pay a premium of up to 10%. If it is conservatively estimated that verified sustainable goods receive a modest average price uplift of 1%, suppliers lacking ESG credentials risk being relegated to lower-value markets. |0.5%|
|[Anti-counterfeiting](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/#anti-counterfeiting)|Revenue increase|Counterfeit goods account for 2-5% of global trade, particularly affecting pharmaceuticals and luxury goods, with effective anti-counterfeiting measures like AATP protocols potentially recovering up to 1% of trade value industry-wide. |0.5% |
|[Compliance cost reduction](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/#compliance-costs)|Cost reduction|Regulatory compliance costs, including tariffs and penalties, are rising with stricter sustainability enforcement (carbon cost of beef is up to 100% of value), but AATP's high-quality data and traceability can streamline processes, reduce delays, and minimize carbon tariffs like CBAM by accurately documenting emissions and carbon pricing.|0.5%|
|[Finance cost reduction](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/#finance-costs)|Cost reduction| The AATP framework standardizes ESG reporting for development banks, unlocking access to sustainable supply chain finance for deep-tier suppliers, reducing the $2.5 trillion global trade finance gap and enabling cost savings of up to 20% through lower risk premiums and improved capital access.|0.5%|
|[Digitalisation efficiency](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/#digitalisation-efficiency)|Cost reduction|Digitalisation through AATP streamlines operations, enhances supply chain visibility, and improves decision-making, leading to cost reductions of up to 10%, improved inventory management, higher customer satisfaction, and increased profitability. A conservative 1% reduction in operating costs could be attributed to supply chain transparency. |0.5% |
|[Brand reputation](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/#brand-reputation)|Market capitalization|Transparency in supply chains enhances consumer trust, loyalty, and brand value, with AATP implementation helping companies differentiate themselves, mitigate ESG risks, and achieve increases in brand value by supporting credible sustainability claims.|0.5% |
|[Improved disclosures](https://uncefact.github.io/spec-untp/docs/business-case/BusinessCaseIndustry/#improved-disclosures)|Market capitalization|Mandatory sustainability disclosures increasingly require scope 3 emissions reporting, yet many companies lack direct supplier data, but AATP digital product passports enable efficient communication of accurate assessments, fostering sustainable supplier selection and improving corporate performance, thereby enhancing brand value and mitigating financial and reputational risks.|0.5% |

## AATP Economy wide impact 

Assuming that Agribusiness represents a 5% share of Australia's $2.5 trillion GDP then the economy-wide value of Agribusiness is $150 billion. Since this is a GDP based figure, it represents the final value and not the sum of sales in each supply chain step, which would be much higher. Total market capitalization is a similar value. Assuming the 0.5% potential value of each benefit category above applies only to final value (and so an even smaller percentage would be distributed across each step in the value chain), then total economy wide benefits from wide scale supply chain digitalized traceability and transparency could be

* 1.5% of $150 billion in revenue increase - or around $2 billion
* 1.5% of $150 billion in cost reduction - or around $2 billion
* 1.0% of $150 billion shareholder value - or around $1.5 billion

With total AATP economy-wide implementation costs in the region of $150 million and total benefits in the region of $6 billion (with no consideration of the additional ‘spillover’ benefits accumulating from attaching non-ESG data to products, such as market access, bio-security, food safety, provenance, or other), the business case at national economy level is compelling. 


