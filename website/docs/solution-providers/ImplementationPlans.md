---
sidebar_position: 4
title: Implementation Plans
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

Solution providers play a critical role in enabling AATP adoption across Australian agriculture. This implementation guide builds on the [UNTP Implementation Plans for Software Vendors](https://spec-untp-fbb45f.opensource.unicc.org/docs/tools-and-support/ImplementationPlans#for-software-vendors) and provides AATP-specific guidance tailored to the Australian agricultural context.

AATP follows the UNTP architecture, which uses decentralized verifiable credentials to enable interoperability across diverse software systems. This means solution providers can build AATP capabilities into their platforms without needing direct system-to-system integrations with every other platform in the market.

Use the [Quick Start Checklist](QuickStartChecklist.md) to track your progress through the implementation process.

## Implementation Roadmap

Before starting your implementation, review [Why Implement AATP?](WhyImplement.md) to understand the market opportunity and competitive advantages.

### Phase 1: Foundation and Planning

#### 1.1 Understand AATP Architecture

**Action**: Familiarize yourself with the AATP architecture and credential types.

**Key Resources**:
* Review the [AATP Specification](../specification/) overview
* Understand the [UNTP Architecture](https://uncefact.github.io/spec-untp/docs/specification/Architecture) principles
* Review the [Conceptual Mapping](../specification/ConceptualMapping) to understand how AATP builds on UNTP

**Outcome**: Clear understanding of how decentralized credentials work and how they differ from traditional API-based integrations.

#### 1.2 Identify Target Market Segments

**Action**: Determine which Australian agricultural sectors and use cases your solution will support.

**Considerations**:
* **Industry sectors**: [Livestock](../guidance/Livestock.md), [Horticulture](../guidance/Horticulture.md), [Grains](../guidance/Grains.md), or multi-sector
* **Value chain roles**: Growers, processors, certifiers, feedlots, distributors, or multi-role
* **Credential types**: Determine which AATP credentials are relevant:
  * [Digital Product Passports](../specification/DigitalProductPassport) (Livestock, Grains, Horticulture, Processed Meat)
  * [Digital Traceability Events](../specification/DigitalTraceabilityEvent) (Processing Events, Feeding Events, etc.)
  * [Digital Conformity Credentials](../specification/ConformityCredential) (Deforestation, Emissions, etc.)
  * [Digital Identity Anchors](../specification/Identifiers) (identity anchors linking DIDs to authoritative registers)

**Outcome**: Defined scope centering on specific sectors, roles, and credential types.

#### 1.3 Assess Business Value

**Action**: Evaluate the business case for AATP implementation in your platform.

**Considerations**:
* Market demand from existing customers
* Competitive positioning benefits
* Implementation costs vs. expected revenue impact
* Alignment with your product roadmap

**Resources**: Review the [AATP Business Case](../business-case/) and [Case Studies](../business-case/CaseStudies) for sector-specific examples.

**Outcome**: Validated business case and stakeholder buy-in.

### Phase 2: Technical Planning

#### 2.1 Review Technical Specifications

**Action**: Review detailed specifications for the credential types you plan to support.

**Key Specifications**:
* [Digital Product Passport](../specification/DigitalProductPassport) - Core specification for product credentials
* [Digital Traceability Event](../specification/DigitalTraceabilityEvent) - For tracking transformations and associations
* [Digital Conformity Credential](../specification/ConformityCredential) - For third-party certifications and attestations
* [Identifiers](../specification/Identifiers) - Identifier schemes and identity resolution mechanisms
* [Vocabularies](../specification/Vocabularies) - Domain-specific terms and classification schemes

**Outcome**: Technical understanding of credential structure, required fields, and validation rules.

#### 2.2 Understand Identity Resolution Mechanisms

**Action**: Familiarize yourself with how identity resolution works in AATP and how credentials are discovered.

**Identity Resolution Concepts**:
* Understand how credentials are discovered via [identity resolvers](https://uncefact.github.io/spec-untp/docs/specification/IdentityResolver)
* Learn about DID (Decentralized Identifier) resolution and how it enables credential discovery
* Review the [Identifiers specification](../specification/Identifiers) to understand supported identifier schemes and their current status
* Understand the role of Digital Identity Anchors (DIA) in linking DIDs to authoritative identifier registries

**Planning Considerations**:
* Identity resolver availability may vary by identifier scheme - plan for gradual rollout as resolvers become available
* Support both existing identifier formats and new DID-based identity links
* Remember that identifier-based discovery complements direct DID resolution

**Outcome**: Clear understanding of identity resolution mechanisms and how they enable credential discovery.

#### 2.3 Plan Credential Lifecycle Management

**Action**: Design how your platform will issue, store, publish, and verify AATP credentials.

**Components to Plan**:
* **Issuance**: How credentials are created from your platform data
* **Signing**: Cryptographic signing of credentials (see [UNTP Verifiable Credentials](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials) for signing methods and formats)
* **Storage**: Where credentials are stored (customer systems, cloud, etc.)
* **Publishing**: How credentials are made discoverable (see [UNTP Verifiable Credentials](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials) for publishing mechanisms)
* **Verification**: How your platform will verify credentials from other parties

**Considerations**:
* User experience: Seamless credential creation from existing workflows
* Performance: Efficient credential generation and verification
* Security: Key management and credential signing practices (see [UNTP Verifiable Credentials](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials) for detailed guidance)
* Privacy: Selective disclosure and data minimization principles

**Outcome**: Technical architecture for credential lifecycle management.

### Phase 3: Development

#### 3.1 Set Up Development Environment

**Action**: Establish development tooling and references.

**Tools and Resources**:
* Use the [AATP Reference Implementation](https://aatp.showthething.com/) as a reference
* Access [UNTP Test Suite](https://uncefact.github.io/tests-untp/) documentation and code
* Review [UN VCkit](https://github.com/uncefact/project-vckit) open-source components
* Set up access to [AATP sample credentials](../specification/DigitalProductPassport#working-sample)

**Outcome**: Development environment ready with reference implementations and test data.

#### 3.2 Implement Core Credential Support

**Action**: Build credential issuance capabilities starting with your primary use cases.

**Implementation Steps**:
1. **Start with one credential type**: Begin with the most important credential for your target market
2. **Implement credential generation**: Map your platform data to AATP credential structure
3. **Add signing capability**: Implement credential signing following [UNTP Verifiable Credentials](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials) specifications
4. **Test with samples**: Verify your credentials match the specification using sample data
5. **Iterate on additional credential types**: Expand support based on priority

**Best Practices**:
* Follow the [UNTP credential structure](https://uncefact.github.io/spec-untp/docs/specification/) precisely
* Ensure all mandatory fields are populated
* Validate against AATP profile rules for your credential type
* Test with both human-readable rendering and machine-readable JSON

**Outcome**: Functional credential issuance for at least one credential type.

#### 3.3 Implement Credential Discovery and Verification

**Action**: Build capabilities to discover and verify credentials from other parties.

**Discovery Mechanisms**:
* DID resolution: Support resolving DIDs to credential endpoints
* Identity resolver integration: Support identifier-based credential discovery where identity resolvers are available
* Link type resolution: Handle different credential link types appropriately

**Verification Capabilities**:
* Signature verification: Validate credential signatures following [UNTP Verifiable Credentials](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials) specifications
* Credential structure validation: Ensure credentials conform to AATP specifications
* Revocation checking: Support credential revocation status checks
* Expiration handling: Manage credential validity periods

**Outcome**: Functional credential discovery and verification capabilities.

#### 3.4 Integrate Identity Resolution

**Action**: Build support for identity-based credential discovery.

**Integration Points**:
* **Identity resolver support**: Implement integration with identity resolvers as they become available for different identifier schemes
* **DID-based resolution**: Support DID resolution for direct credential discovery
* **Identity anchor support**: Issue or consume Digital Identity Anchors (DIA) where appropriate to link DIDs to authoritative identifier registries

**Considerations**:
* Identity resolver availability varies by identifier scheme - plan for gradual rollout as resolvers become operational
* Support both existing identifier formats and new DID-based identity links
* Monitor the [Identifiers specification](../specification/Identifiers) for updates on resolver availability
* Consider offering identity anchor issuance as a value-added service where relevant

**Outcome**: Integrated support for identity-based credential discovery.

### Phase 4: Testing and Validation

Testing is critical to ensure conformance with AATP specifications before widespread adoption. This phase helps validate that your implementation will be interoperable with other AATP systems and meets stakeholder requirements. The approach follows structured UNTP testing practices and aligns with the [UNTP Testing Guidance](https://uncefact.github.io/spec-untp/docs/tools-and-support/Testing).

#### 4.1 Self-Testing and Credential Generation

**Action**: Validate your implementation using AATP testing tools and create trial credentials.

**Testing Methodology**:

1. **Create trial credentials**: Generate test credentials using your implementation covering all supported credential types
   * Use the [AATP Reference Implementation](https://aatp.showthething.com/) to compare your output structure
   * Start with a single credential type and expand systematically
   * Create multiple test cases: minimum required fields, full optional fields, edge cases

2. **Validate structure and conformance**: Submit credentials to testing services
   * Use [AATP Conformity Testing](../guidance/ConformityTesting) services when available
   * Use [UNTP Playground](https://test.uncefact.org/untp-playground) for interim validation
   * Review validation results and address all conformance issues
   * Test against [working samples](../specification/) for each credential type

3. **Test rendering and human readability**: Ensure credentials display correctly
   * Verify human-readable rendering displays all relevant information
   * Test credential display on different devices and platforms
   * Validate that embedded rendering templates work correctly

4. **Test verification capabilities**: Validate your verification logic
   * Test signature verification using reference credentials following [UNTP Verifiable Credentials](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials) specifications
   * Verify credential structure validation works correctly
   * Test revocation checking and expiration handling
   * Ensure proper error handling for invalid or malformed credentials

5. **Test credential lifecycle**: Validate complete credential workflows
   * Test credential issuance, signing, and publishing (see [UNTP Verifiable Credentials](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials) for signing and publishing guidance)
   * Verify credential discovery and retrieval
   * Test credential updates and versioning where applicable

**Trial Credentials for External Testing**:

Once your self-testing passes, create a set of trial credentials (using test data) that can be shared with external parties:
* **Trading partners**: Share test credentials to validate interoperability before production integration
* **Regulatory bodies**: Demonstrate compliance with regulatory requirements (e.g., EUDR)
* **Potential customers**: Show real-world examples of credentials your platform can generate
* **Pilot partners**: Use for bilateral testing with other implementers

**Resources**:
* [AATP Conformity Testing](../guidance/ConformityTesting) documentation
* [UNTP Playground](https://test.uncefact.org/untp-playground) (interim testing)
* [Working samples](../specification/) for each credential type
* [AATP Reference Implementation](https://aatp.showthething.com/) for credential creation reference
* [UNTP Testing Guidance](https://uncefact.github.io/spec-untp/docs/tools-and-support/Testing) for additional testing best practices

**Outcome**: Internally validated implementation that passes conformity testing, with a set of trial credentials ready for external validation.

#### 4.2 Collaborative Testing and Pilot Integration

**Action**: Test interoperability with other AATP implementations and stakeholders.

**Collaborative Testing Approach**:

1. **Partner identification**: Connect with other AATP implementers
   * Reach out to registered implementers via [AATP support channels](../guidance/Support.md)
   * Participate in AATP community channels (Slack, working groups)
   * Engage with planned implementers early to coordinate testing schedules
   * Identify partners at different value chain positions (upstream/downstream)

2. **Bilateral testing**: Exchange test credentials with partners
   * Share your trial credentials with partner systems
   * Verify partner credentials work correctly in your system
   * Test both credential issuance and verification flows
   * Document any interoperability issues encountered

3. **End-to-end workflow testing**: Test complete traceability flows
   * Simulate real-world traceability scenarios across multiple platforms
   * Test credential discovery and linking across different identity resolvers
   * Validate data flows from credential issuance through verification
   * Test multi-hop credential chains (product → facility → organization)

4. **Stakeholder validation**: Test with different stakeholder types
   * **Trading partners**: Validate credentials meet their information needs
   * **Regulatory bodies**: Ensure credentials satisfy compliance requirements
   * **Certifiers/auditors**: Test conformity credentials and attestation flows
   * **End customers**: Validate human-readable presentation and usability

5. **Issue resolution**: Document and resolve interoperability issues
   * Log all interoperability issues with detailed descriptions
   * Determine if issues are implementation bugs or specification gaps
   * Fix implementation issues and re-test
   * Report specification gaps to AATP support channels for community resolution

**Best Practices**:
* Start with small-scale bilateral testing before expanding to multi-party scenarios
* Use structured test cases that cover common and edge-case workflows
* Document test results and lessons learned
* Establish clear communication channels with testing partners
* Plan for iterative testing cycles as issues are resolved

**Benefits**:
* Real-world validation of interoperability before production deployment
* Early identification of edge cases and specification gaps
* Building relationships with other implementers and stakeholders
* Demonstrating value and building confidence with potential customers
* Validation that credentials meet stakeholder information needs

**Outcome**: Successful collaborative testing demonstrating cross-platform interoperability and stakeholder validation.

### Phase 5: Registration and Go-to-Market

#### 5.1 Register Your Implementation

**Action**: Register your software product on the AATP Implementation Register.

**Registration Process**:
1. Review [Implementation Register](../register/) requirements
2. Prepare implementation statement describing your AATP support
3. Submit registration via appropriate channels (contact [support](../guidance/Support.md) for details)
4. Update registration as you expand credential support or complete testing

**Registration Information Required**:
* Organization details and logo
* Product name and description
* AATP credential scope (which credentials and versions you support)
* Implementation status (testing, pilot, production)
* Industry sectors served

**See Examples**: Review existing registered implementations in the [Software Register](../register/Software).

**Outcome**: Your product listed on the AATP Implementation Register.

#### 5.2 Customer Enablement

**Action**: Prepare materials and processes to help your customers adopt AATP features.

**Enablement Activities**:
* **User documentation**: Guide users on how to create and manage AATP credentials
* **Training materials**: Provide training on AATP concepts and workflows
* **Best practices**: Document recommended practices for credential management
* **Support processes**: Establish support channels for AATP-related customer questions

**Customer Value Communication**:
* Explain AATP benefits in business terms (compliance, market access, premium pricing)
* Demonstrate interoperability value (works with other platforms)
* Provide use case examples relevant to customer sectors
* Reference case studies and success stories

**Outcome**: Customers can successfully adopt and use AATP features in your platform.

#### 5.3 Continuous Improvement

**Action**: Establish processes for ongoing enhancement and compliance.

**Ongoing Activities**:
* **Monitor specification updates**: Stay informed about AATP specification evolution
* **Gather customer feedback**: Understand real-world usage patterns and challenges
* **Expand credential support**: Add support for additional credential types based on demand
* **Participate in community**: Engage with AATP community via [Slack](../guidance/Support.md#community-support) or working groups
* **Update testing**: Regularly validate against latest specifications and test suites

**Outcome**: Sustainable, evolving AATP implementation that delivers ongoing value.

## Technical Considerations

### Credential Storage and Publishing

AATP credentials can be stored and published in several ways:

* **Customer-hosted**: Customers store and publish credentials from their own infrastructure
* **Platform-hosted**: Your platform stores and publishes credentials on behalf of customers
* **Hybrid**: Your platform generates credentials, customers manage publishing

Consider customer requirements, data sovereignty, and scalability when choosing an approach.

### Key Management

Credential signing requires cryptographic key management. For detailed guidance on key management approaches, signing methods, and security best practices, refer to the [UNTP Verifiable Credentials](https://spec-untp-fbb45f.opensource.unicc.org/docs/specification/VerifiableCredentials) specification.

Considerations include:
* Whether platform-managed or customer-managed keys are appropriate for your use case
* Key storage and access control requirements
* Alignment with security best practices and customer risk tolerance

### Integration Patterns

Common integration patterns for AATP:

* **Native support**: AATP capabilities built directly into your core platform
* **Module/plugin**: AATP as an optional module or plugin
* **API layer**: AATP functionality exposed via API for integration with other systems

Choose based on your platform architecture and customer needs.

## Support and Resources

### Community Support

* Join the [AATP Slack Channel](../guidance/Support.md#community-support) for community discussions
* Participate in AATP working groups and meetings


## Next Steps

1. **Review**: Thoroughly review this guide and referenced specifications
2. **Plan**: Develop your implementation plan based on this roadmap
3. **Connect**: Join the AATP community and reach out to support channels
4. **Build**: Start with Phase 1 and proceed through implementation phases
5. **Test**: Validate your implementation using provided testing tools
6. **Register**: Register your implementation to appear in the Software Register
7. **Launch**: Enable your customers to start using AATP capabilities

## Related Resources

* [Implementation Steps](../guidance/index.md) - Overview for all implementer types
* [Industry Guidance](../guidance/Livestock.md) - Sector-specific guidance
* [Conformity Testing](../guidance/ConformityTesting.md) - Testing and validation procedures
* [Software Register](../register/Software.md) - List of registered implementations
* [UNTP Implementation Plans](https://spec-untp-fbb45f.opensource.unicc.org/docs/tools-and-support/ImplementationPlans#for-software-vendors) - Parent specification guidance

