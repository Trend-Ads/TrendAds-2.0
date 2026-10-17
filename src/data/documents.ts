export interface DocumentItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "Web Development" | "Paid Advertising" | "Branding & Creative" | "SEO & Analytics";
  badge: string;
  instagramUrl: string;
  instagramHandle: string;
  instagramPostCaption?: string;
  format: "PDF Document" | "Interactive Checklist" | "Template Kit";
  pages: number;
  fileSize: string;
  downloadUrl: string; // Direct PDF file link
  cloudinaryConsoleUrl?: string; // Cloudinary reference
  thumbnailGradient: string;
  iconName: string;
  highlights: string[];
  tableOfContents: { title: string; desc: string }[];
  targetAudience: string[];
  keyTakeaways: string[];
  rating: number;
  ratingCount: number;
  downloadsCount: number;
  featured: boolean;
  publishedDate: string;
}

export const INSTAGRAM_HANDLE = "trend_ads.in";
export const INSTAGRAM_PROFILE_URL = "https://instagram.com/trend_ads.in";

export const DOCUMENTS_DATA: DocumentItem[] = [
  {
    id: "doc-web-auditing-practical-guide",
    slug: "web-auditing-guide",
    title: "Website Auditing, SEO & UX - The Practical Guide",
    tagline: "The complete practical guide by Trend Ads for auditing website performance, conversion architecture, SEO crawlability, and UX ergonomics.",
    description:
      "A comprehensive, practitioner-level audit framework designed to uncover hidden conversion leaks, sluggish load times, and broken SEO/UX patterns on modern web applications.",
    longDescription:
      "Engineered by the technical team at Trend Ads, 'Website Auditing, SEO & UX: The Practical Guide' is our comprehensive blueprint for auditing and optimizing digital storefronts. Covering Core Web Vitals, mobile viewport ergonomics, above-the-fold value proposition anatomy, technical SEO crawlability, and user experience heuristics, this guide helps turn slow, leaky websites into relentless conversion engines.",
    category: "Web Development",
    badge: "Instagram Featured",
    instagramUrl: "https://instagram.com/trend_ads.in",
    instagramHandle: "@trend_ads.in",
    instagramPostCaption: "Stop burning ad budget on slow pages. Here is our full practical guide for Web Auditing, SEO & UX. Link in bio & documents hub!",
    format: "PDF Document",
    pages: 12,
    fileSize: "1.0 MB",
    downloadUrl: "/pdfs/Website Auditing, SEO & UX - The Practical Guide - Trend Ads.pdf",
    cloudinaryConsoleUrl: "https://console.cloudinary.com/app/c-73b150b52a3e59506b1cfabc93f530/assets/media_library/search/asset/3f7406a010e111ab8284e40765bbc0a3/manage/summary?q=&view_mode=mosaic&context=manage",
    thumbnailGradient: "from-blue-600 via-indigo-600 to-slate-900",
    iconName: "code",
    highlights: [
      "Core Web Vitals & speed performance benchmarks",
      "Mobile UX & thumb-zone ergonomics audit",
      "Conversion architecture & trust signal placements",
      "Technical SEO indexation & schema markup hygiene",
      "Actionable scoring and prioritization matrix"
    ],
    tableOfContents: [
      {
        title: "Section I: Performance & Core Web Vitals",
        desc: "Largest Contentful Paint (<1.8s), INP interaction lag (<200ms), CLS layout stability (<0.05), asset compression (AVIF/WebP) and third-party script deferral."
      },
      {
        title: "Section II: UX & Mobile Ergonomics",
        desc: "Thumb-zone CTA geometry, tap targets min 48x48px, typographic hierarchy, and frictionless form completion."
      },
      {
        title: "Section III: Conversion Architecture & Trust Anchors",
        desc: "The 3-Second value test, high-contrast hero CTA button rules, social proof placements, and sticky header conversion paths."
      },
      {
        title: "Section IV: Technical SEO & Crawlability",
        desc: "Canonical tag validation, Open Graph 1200x630px social previews, Schema.org JSON-LD structured data, and clean XML sitemap hierarchy."
      },
      {
        title: "Section V: Analytics & Attribution Hygiene",
        desc: "Meta Conversions API (CAPI) redundancy for >85% match quality, GA4 lead capture triggers, and cross-domain UTM tracking."
      },
      {
        title: "Section VI: Audit Scoring & Action Matrix",
        desc: "Comprehensive rating scale to diagnose whether your site is an Elite Category Leader or actively leaking ad dollars."
      }
    ],
    targetAudience: [
      "Founders & CMOs seeking why their paid ad traffic is not converting",
      "Next.js, Shopify & WordPress frontend developers",
      "Digital marketing managers auditing client websites",
      "Growth marketers auditing landing page bounce rates"
    ],
    keyTakeaways: [
      "Instantly pinpoint why mobile visitors bounce within 3 seconds",
      "Calibrate Meta and GA4 tracking to recover 15-25% lost ad attribution",
      "Benchmark your site speed against Google's strict algorithmic standards",
      "Prioritize technical fixes using the high-impact vs low-effort scoring quadrant"
    ],
    rating: 4.96,
    ratingCount: 168,
    downloadsCount: 2420,
    featured: true,
    publishedDate: "October 2026"
  }
];

export function getDocumentBySlug(slug: string): DocumentItem | undefined {
  return DOCUMENTS_DATA.find((doc) => doc.slug === slug);
}
