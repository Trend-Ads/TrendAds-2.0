/**
 * Trend Ads Source Credibility & Trust Architecture
 * Standardized data model for factual claims, primary source attribution, and verification signals.
 */

export type SourceClassification =
  | "primary_platform"       // E.g., Meta Ads Manager API, Google Ads Live Accounts
  | "official_organization"   // E.g., Registered Business Entity, Government Registrar
  | "regulatory_authority"    // E.g., Ministry of Corporate Affairs, Tax Department
  | "certification_body"      // E.g., Google Partners, Meta Certified Professionals
  | "client_first_party"      // E.g., Verified Client CRM, Shopify Analytics Audit
  | "industry_benchmark";     // E.g., Statista, eMarketer Industry Reports

export type VerificationStatus = "verified" | "audited" | "official_record";

export interface ClaimSource {
  id: string;
  claim: string;
  category: "roas_metric" | "project_volume" | "case_study" | "business_entity" | "certification";
  sourceName: string;
  sourceType: SourceClassification;
  sourceTypeLabel: string;
  sourceUrl?: string;
  documentationRef?: string;
  verificationStatus: VerificationStatus;
  verificationStatusLabel: string;
  lastVerifiedDate: string; // ISO format: YYYY-MM-DD
  verificationMethod: string;
  isPreferredSource: boolean;
  preferredBadgeLabel: "Preferred Source" | "Primary Source" | "Verified Source";
  preferredReason: string;
  auditor: string;
}
