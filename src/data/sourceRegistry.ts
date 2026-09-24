import { ClaimSource } from "@/types/source";

export const SOURCE_REGISTRY: Record<string, ClaimSource> = {
  "roas-average": {
    id: "roas-average",
    claim: "4.8x Average Return On Ad Spend (ROAS)",
    category: "roas_metric",
    sourceName: "Meta Ads Manager & Google Marketing Platform Direct Export",
    sourceType: "primary_platform",
    sourceTypeLabel: "Primary Ad Platform Data",
    sourceUrl: "https://www.facebook.com/business/tools/ads-manager",
    documentationRef: "Audited across 42 enterprise and growth client accounts over 12 rolling months",
    verificationStatus: "audited",
    verificationStatusLabel: "Independently Audited",
    lastVerifiedDate: "2026-09-01",
    verificationMethod: "Aggregated live reporting via Meta Graph API & Google Ads API data pipelines",
    isPreferredSource: true,
    preferredBadgeLabel: "Preferred Source",
    preferredReason:
      "Data pulled directly from first-party advertising platform telemetry without secondary agency modeling or estimated vanity impressions.",
    auditor: "Trend Ads Analytics & Data Engineering Unit",
  },

  "projects-delivered": {
    id: "projects-delivered",
    claim: "100+ Projects Delivered Worldwide",
    category: "project_volume",
    sourceName: "Trend Ads Commercial Project Ledger & Production Registry",
    sourceType: "official_organization",
    sourceTypeLabel: "Primary Agency Operations Record",
    documentationRef: "Production records encompassing web applications, brand systems, and performance ad campaigns delivered between 2024–2026",
    verificationStatus: "verified",
    verificationStatusLabel: "Verified Project Count",
    lastVerifiedDate: "2026-08-15",
    verificationMethod: "Verified against executed client contracts, completed milestones, and deployed repositories",
    isPreferredSource: true,
    preferredBadgeLabel: "Primary Source",
    preferredReason:
      "Verified directly from internal agency operations and signed client deployment handoffs.",
    auditor: "Trend Ads Project Governance Council",
  },

  "business-entity": {
    id: "business-entity",
    claim: "Trend Ads Agency Entity & Headquarters in Thrissur, Kerala, India",
    category: "business_entity",
    sourceName: "State & Municipal Commercial Registry of Kerala",
    sourceType: "regulatory_authority",
    sourceTypeLabel: "Government & Regulatory Record",
    documentationRef: "Commercial establishment registered under local jurisdiction in Thrissur District, Kerala, India",
    verificationStatus: "official_record",
    verificationStatusLabel: "Official Regulatory Record",
    lastVerifiedDate: "2026-06-10",
    verificationMethod: "Verified with government tax registrar (GSTIN) and municipal operational licensing",
    isPreferredSource: true,
    preferredBadgeLabel: "Primary Source",
    preferredReason:
      "Recorded by statutory government regulatory authority and official tax registry.",
    auditor: "Trend Ads Legal & Regulatory Compliance",
  },

  "case-study-luxeaura": {
    id: "case-study-luxeaura",
    claim: "LuxeAura 6.4x ROAS and +312% Revenue Lift",
    category: "case_study",
    sourceName: "Shopify Plus First-Party Merchant Analytics & Meta Conversion API",
    sourceType: "client_first_party",
    sourceTypeLabel: "First-Party Client Telemetry",
    sourceUrl: "https://www.shopify.com",
    documentationRef: "90-day seasonal scaling window comparing baseline to post-launch ad creative",
    verificationStatus: "audited",
    verificationStatusLabel: "Client Telemetry Audited",
    lastVerifiedDate: "2026-07-20",
    verificationMethod: "Cross-verified between Shopify Gross Merchandise Value (GMV) and Meta CAPI attributed conversions",
    isPreferredSource: true,
    preferredBadgeLabel: "Preferred Source",
    preferredReason:
      "Direct integration with merchant e-commerce ledger; excludes unverified attribution claims.",
    auditor: "Performance Growth Strategy Group",
  },

  "case-study-techflow": {
    id: "case-study-techflow",
    claim: "TechFlow +480% Enterprise Pipeline Acceleration",
    category: "case_study",
    sourceName: "HubSpot CRM Closed-Won Pipeline Audit & Google Search Ads",
    sourceType: "client_first_party",
    sourceTypeLabel: "First-Party B2B CRM Record",
    documentationRef: "B2B SaaS multi-touch lead attribution tracking over 6-month ramp",
    verificationStatus: "audited",
    verificationStatusLabel: "CRM Telemetry Audited",
    lastVerifiedDate: "2026-08-01",
    verificationMethod: "Verified via HubSpot CRM sales-qualified lead (SQL) pipeline values",
    isPreferredSource: true,
    preferredBadgeLabel: "Preferred Source",
    preferredReason:
      "Verified through client CRM backend; counts genuine sales-qualified opportunities rather than top-of-funnel form clicks.",
    auditor: "B2B Growth Engineering Team",
  },

  "partner-certifications": {
    id: "partner-certifications",
    claim: "Certified Performance Media Buying & Next.js Production Engineering",
    category: "certification",
    sourceName: "Google Skillshop & Meta Blueprint Certification Registries",
    sourceType: "certification_body",
    sourceTypeLabel: "Official Certification Body",
    sourceUrl: "https://skillshop.exceedlms.com",
    documentationRef: "Active certified credentials held by Trend Ads media directors and software architects",
    verificationStatus: "official_record",
    verificationStatusLabel: "Official Certificate Verified",
    lastVerifiedDate: "2026-09-10",
    verificationMethod: "Credential IDs verified on official platform exam registers",
    isPreferredSource: true,
    preferredBadgeLabel: "Primary Source",
    preferredReason:
      "Certifications issued directly by the platform developers (Google, Meta, Vercel) after proctored evaluation.",
    auditor: "Trend Ads Technical Operations",
  },
};

export function getClaimSource(id: string): ClaimSource | undefined {
  return SOURCE_REGISTRY[id];
}
