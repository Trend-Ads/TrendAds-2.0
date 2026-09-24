export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://trend-ads.com/#organization",
    "name": "Trend Ads",
    "alternateName": ["Trend Ads Agency", "TrendAds"],
    "url": "https://trend-ads.com",
    "logo": "https://trend-ads.com/logos/logo.png",
    "image": "https://trend-ads.com/logos/logo.png",
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
    "sameAs": [
      "https://instagram.com/trend_ads.in",
      "https://www.facebook.com/share/19LfTQbxNp/",
      "https://wa.me/918139860663"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://trend-ads.com/#website",
    "url": "https://trend-ads.com",
    "name": "Trend Ads — Creative Advertising & Digital Growth Agency",
    "description":
      "A creative studio crafting bold digital products, brand systems, and advertising experiences that drive real revenue growth.",
    "publisher": {
      "@id": "https://trend-ads.com/#organization"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://trend-ads.com/#service",
    "name": "Trend Ads",
    "url": "https://trend-ads.com",
    "logo": "https://trend-ads.com/logos/logo.png",
    "image": "https://trend-ads.com/logos/logo.png",
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
      "Worldwide",
      "India",
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
            "name": "Next.js Web Engineering & Landing Pages",
            "description":
              "Ultra-fast, interactive web applications and high-converting landing pages built on modern Next.js and Tailwind architecture."
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creative Content & Commercial Video",
            "description":
              "High-converting short-form creative, commercial video production, and conversion copywriting."
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trend-ads.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://trend-ads.com/#about-us"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://trend-ads.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Board Members",
        "item": "https://trend-ads.com/#board-members"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Process Roadmap",
        "item": "https://trend-ads.com/#process-steps"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://trend-ads.com/#contact"
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
