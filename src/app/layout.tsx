import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trend-ads.com"),
  title: {
    default: "Trend Ads — Creative Advertising & Digital Growth Agency",
    template: "%s | Trend Ads",
  },
  description:
    "Trend Ads is a premier creative advertising agency crafting bold digital products, brand systems, high-converting Next.js web applications, and high-ROAS paid media systems.",
  keywords: [
    // Brand & Agency Focus
    "Trend Ads",
    "creative advertising agency",
    "digital marketing",
    "digital marketing agency",
    "digital marketing company",
    "digital marketing agencies",
    "digital marketing services",
    "performance marketing agency",
    "brand strategy studio",
    // Social Media Marketing & Content Ecosystem
    "social media digital marketing",
    "digital marketing social media",
    "digital marketing social media marketing",
    "what is social media",
    "what is social media marketing",
    "social media marketing in digital marketing",
    "content marketing",
    "social media marketing agency",
    "digital and social media marketing",
    // Hyper-Local Kerala, Thrissur & Malabar Clusters
    "best digital marketing agency in kerala",
    "best digital marketing agency in thrissur",
    "digital marketing agency in thrissur",
    "digital marketing company in thrissur",
    "digital marketing thrissur",
    "digital marketing in thrissur",
    "digital marketing agency thrissur",
    "digital marketing agency in malappuram",
    "best digital marketing agency in malappuram",
    "digital marketing agency in kozhikode",
    "best digital marketing agency in kozhikode",
    "digital marketing agency kerala",
    "advertising agency in thrissur",
    "advertising agency thrissur",
    "creative agency thrissur",
    "social media marketing agency thrissur",
    // Thrissur & Thrissure Web & App Development
    "thrissur website agency",
    "thrissure website agency",
    "thrissur web developers",
    "thrissure web developers",
    "web developers in thrissur",
    "web developers in thrissure",
    "website development company in thrissur",
    "website design thrissur",
    "web design agency thrissur",
    "app developers in thrissur",
    "app developers in thrissure",
    "mobile app development thrissur",
    "app development company in thrissur",
    "software company in thrissur",
    // Thrissur Content Creators & Video Production
    "content creators in thrissur",
    "content creators thrissure",
    "content creation thrissur",
    "video production thrissur",
    "commercial video production thrissur",
    "branding agency thrissur",
    // Meta / Facebook Ads Ecosystem
    "meta ads",
    "meta ads manager",
    "ads manager meta",
    "ads meta manager",
    "meta ads library",
    "ads library meta",
    "ads library",
    "meta library",
    "meta library ads",
    "facebook ads",
    // Google Ads & Search Ecosystem
    "google ads india",
    "what is google ads",
    "google ads manager",
    "ads manager google",
    "google ads account",
    "google search ads",
    "youtube ads",
    "google digital marketing",
    // Website & Business Development
    "website for business",
    "create business website",
    "free business website",
    "free website",
    "google business website",
    "google business profile",
    "google business",
    "google website",
    "online business",
    "my business",
    "website design",
    "Next.js web development agency",
    // Modern Trends & Search Queries
    "ai digital marketing",
    "geo full form in digital marketing",
    "hubspot digital marketing certification",
    "digital marketing news",
    "what is digital marketing",
    "digital marketing kya hai",
    "digital marketing kya hota hai",
    "digital marketing course",
    "digital marketing courses",
    "digital marketing jobs",
    "digital marketing job",
    "orange digital marketing",
    "commercial video production",
    "CRO conversion rate optimization"
  ],
  authors: [{ name: "Trend Ads", url: "https://www.trend-ads.com" }],
  creator: "Trend Ads",
  publisher: "Trend Ads",
  category: "Advertising & Marketing",
  alternates: {
    canonical: "https://www.trend-ads.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Trend Ads — Creative Advertising & Digital Growth Agency",
    description:
      "Crafting bold digital products, brand systems, and advertising experiences that drive real growth.",
    url: "https://www.trend-ads.com",
    siteName: "Trend Ads",
    images: [
      {
        url: "https://www.trend-ads.com/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Trend Ads Creative Advertising Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trend Ads — Creative Advertising & Digital Growth Agency",
    description:
      "Crafting bold digital products, brand systems, and advertising experiences that drive real growth.",
    images: ["https://www.trend-ads.com/logos/logo.png"],
    creator: "@trend_ads",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logos/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#8ACFF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
