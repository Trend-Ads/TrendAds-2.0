import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trend Ads — Creative Advertising Agency",
  description:
    "A creative studio crafting bold digital products, brand systems, and experiences that drive real growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
