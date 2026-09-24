import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://trend-ads.com"),
  title: {
    default: "Trend Ads — Creative Advertising & Digital Growth Agency",
    template: "%s | Trend Ads",
  },
  description:
    "Trend Ads is a premier creative advertising agency crafting bold digital products, brand systems, high-converting Next.js web applications, and high-ROAS paid media systems.",
  keywords: [
    "creative advertising agency",
    "digital marketing agency Kerala",
    "advertising agency Thrissur",
    "performance marketing agency",
    "brand strategy studio",
    "Next.js web development agency",
    "Meta ads agency",
    "Google ads agency India",
    "commercial video production",
    "CRO conversion rate optimization",
    "Trend Ads",
  ],
  authors: [{ name: "Trend Ads", url: "https://trend-ads.com" }],
  creator: "Trend Ads",
  publisher: "Trend Ads",
  category: "Advertising & Marketing",
  alternates: {
    canonical: "https://trend-ads.com",
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
    url: "https://trend-ads.com",
    siteName: "Trend Ads",
    images: [
      {
        url: "https://trend-ads.com/logos/logo.png",
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
    images: ["https://trend-ads.com/logos/logo.png"],
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
        <link rel="canonical" href="https://trend-ads.com" />
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
