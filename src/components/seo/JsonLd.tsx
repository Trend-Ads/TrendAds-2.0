export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.trend-ads.com/#organization",
    "name": "Trend Ads",
    "alternateName": ["Trend Ads Agency", "TrendAds"],
    "url": "https://www.trend-ads.com",
    "logo": "https://www.trend-ads.com/logos/logo.png",
    "image": "https://www.trend-ads.com/logos/logo.png",
    "description":
      "Trend Ads is a premier creative advertising agency crafting bold digital products, high-converting brand systems, and performance marketing campaigns.",
    "telephone": "+91-9746730297",
    "email": "trendads.in@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thrissur",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Neeraj Sudheer",
      "jobTitle": "Founder & CEO",
      "sameAs": [
        "https://www.linkedin.com/in/neeraj-sudheer-4b8528360",
        "https://www.instagram.com/neeraj_nrj.in"
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/trend-ads-agency/",
      "https://instagram.com/trend_ads.in",
      "https://www.facebook.com/share/19LfTQbxNp/",
      "https://wa.me/918139860663"
    ],
    "knowsAbout": [
      "Digital Marketing",
      "Digital Marketing Services",
      "Social Media Marketing",
      "Social Media Digital Marketing",
      "Content Marketing & Video Production",
      "Meta Ads & Ads Manager Scaling",
      "Google Ads India & Search Architecture",
      "AI Digital Marketing",
      "Website Design & Web Development Thrissur",
      "Mobile App Development Thrissur",
      "Google Business Profile Optimization",
      "Conversion Rate Optimization",
      "Brand Identity Design"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.trend-ads.com/#website",
    "url": "https://www.trend-ads.com",
    "name": "Trend Ads",
    "alternateName": ["TrendAds", "Trend Ads Agency"],
    "description":
      "A creative studio crafting bold digital products, brand systems, and advertising experiences that drive real revenue growth.",
    "publisher": {
      "@id": "https://www.trend-ads.com/#organization"
    },
    "inLanguage": "en-US"
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.trend-ads.com/#webpage",
    "url": "https://www.trend-ads.com",
    "name": "Trend Ads — Creative Advertising & High-Performance Engineering",
    "description":
      "Official homepage of Trend Ads. Engineering high-converting ad creative, category-defining brands, and Next.js digital platforms with verified ROI telemetry.",
    "isPartOf": {
      "@id": "https://www.trend-ads.com/#website"
    },
    "about": {
      "@id": "https://www.trend-ads.com/#organization"
    },
    "datePublished": "2024-01-15T09:00:00+05:30",
    "dateModified": "2026-09-24T21:45:00+05:30",
    "inLanguage": "en-US",
    "author": {
      "@id": "https://www.trend-ads.com/#organization"
    },
    "publisher": {
      "@id": "https://www.trend-ads.com/#organization"
    },
    "breadcrumb": {
      "@id": "https://www.trend-ads.com/#breadcrumb"
    }
  };

  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": "https://www.trend-ads.com/#brand",
    "name": "Trend Ads",
    "slogan": "Engineering Unfair Advantages",
    "logo": "https://www.trend-ads.com/logos/logo.png",
    "url": "https://www.trend-ads.com"
  };

  const peopleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.trend-ads.com/#person-neeraj",
        "name": "Neeraj Sudheer",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@id": "https://www.trend-ads.com/#organization" },
        "sameAs": [
          "https://www.linkedin.com/in/neeraj-sudheer-4b8528360",
          "https://www.instagram.com/neeraj_nrj.in"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.trend-ads.com/#person-nishad",
        "name": "Nishad S",
        "jobTitle": "COO - Chief Operating Officer",
        "worksFor": { "@id": "https://www.trend-ads.com/#organization" },
        "sameAs": [
          "https://www.linkedin.com/in/nishad-mathur-palakkode-15a28b186"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.trend-ads.com/#person-nithin",
        "name": "Nithinkumar KS",
        "jobTitle": "Creative Director",
        "worksFor": { "@id": "https://www.trend-ads.com/#organization" },
        "sameAs": [
          "https://www.linkedin.com/in/nithinkumar-ks-482659381"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.trend-ads.com/#person-vismay",
        "name": "Vismay V J",
        "jobTitle": "CMO - Chief Marketing Officer",
        "worksFor": { "@id": "https://www.trend-ads.com/#organization" },
        "sameAs": [
          "https://www.linkedin.com/in/vismayvj/"
        ]
      }
    ]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.trend-ads.com/#service",
    "name": "Trend Ads",
    "url": "https://www.trend-ads.com",
    "logo": "https://www.trend-ads.com/logos/logo.png",
    "image": "https://www.trend-ads.com/logos/logo.png",
    "telephone": "+91-9746730297",
    "priceRange": "$$",
    "currenciesAccepted": "USD, INR, EUR, AED",
    "paymentAccepted": "Credit Card, Bank Wire, UPI",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Commercial District",
      "addressLocality": "Thrissur",
      "addressRegion": "Kerala",
      "postalCode": "680001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.5276,
      "longitude": 76.2144
    },
    "areaServed": [
      "Thrissur",
      "Malappuram",
      "Kozhikode",
      "Kochi",
      "Kerala",
      "India",
      "Worldwide",
      "United States",
      "United Kingdom",
      "United Arab Emirates"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative & Advertising Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paid Ads & Performance Scaling",
            "description":
              "Data-backed Meta Ads, Google PPC, and viral TikTok ad campaigns designed for maximum ROAS and customer acquisition."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Agency & Next.js Web Development Thrissur",
            "description":
              "Ultra-fast, interactive web applications, business websites, and high-converting landing pages built on modern Next.js architecture."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development Thrissur",
            "description":
              "Native and cross-platform iOS and Android mobile app engineering tailored for high-growth startups and established brands."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing Agency Thrissur",
            "description":
              "Comprehensive digital and social media marketing across Meta, Instagram, LinkedIn, and YouTube."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation & Commercial Video Thrissur",
            "description":
              "High-converting short-form creative, commercial video production, and viral content creation for businesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity & Visual Architecture",
            "description":
              "Category-defining brand systems, bespoke typography, art direction, and comprehensive guidelines."
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.trend-ads.com/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trend-ads.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.trend-ads.com/#about-us"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://www.trend-ads.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Board Members",
        "item": "https://www.trend-ads.com/#board-members"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Process Roadmap",
        "item": "https://www.trend-ads.com/#process-steps"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://www.trend-ads.com/#contact"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.trend-ads.com/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Trend Ads verify performance metrics and client ROAS claims?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every performance claim published by Trend Ads (such as the 4.8x average client ROAS) is backed by primary platform telemetry, direct Shopify Plus Conversions API (CAPI) events, and verified Google Ads / Meta Ads Manager logs. We do not use simulated or self-reported vanity numbers."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Trend Ads specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trend Ads delivers end-to-end growth solutions including high-performance paid ad campaigns across Meta and Google, custom Next.js web application development, category-defining visual brand identity, and commercial video production."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Trend Ads located and what geographic markets do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trend Ads is headquartered in Thrissur, Kerala, India, and serves venture-backed startups and established DTC/B2B brands across India, North America, the United Kingdom, and the United Arab Emirates."
        }
      },
      {
        "@type": "Question",
        "name": "What is Trend Ads' Source Trust Classification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trend Ads maintains an internal source credibility standard that classifies all publicized metrics into Primary Source telemetry (direct ad network and e-commerce APIs), Certified Partner verifications, and Audited Case Studies to guarantee transparency."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
