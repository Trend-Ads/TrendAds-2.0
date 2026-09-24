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

