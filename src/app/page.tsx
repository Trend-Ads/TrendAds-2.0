import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trend Ads — Creative Advertising Agency",
  description:
    "A creative studio crafting bold digital products, brand systems, and experiences that drive real growth.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
