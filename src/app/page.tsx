import WebsiteLoadingScreen from "@/components/loader/WebsiteLoadingScreen";
import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import FindServicesSection from "@/components/services/FindServicesSection";
import ServicesHorizontalSection from "@/components/services/ServicesHorizontalSection";
import BoardMembersSection from "@/components/board/BoardMembersSection";
import StepsSection from "@/components/steps/StepsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import FloatingContactButtons from "@/components/floating/FloatingContactButtons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trend Ads — Creative Advertising Agency",
  description:
    "A creative studio crafting bold digital products, brand systems, and experiences that drive real growth.",
};

export default function Home() {
  return (
    <main>
      <WebsiteLoadingScreen />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FindServicesSection />
      <ServicesHorizontalSection />
      <BoardMembersSection />
      <StepsSection />
      <ContactSection />
      <Footer />
      <FloatingContactButtons />
    </main>
  );
}

