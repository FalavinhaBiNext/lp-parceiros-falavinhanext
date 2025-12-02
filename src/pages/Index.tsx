import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import WhyPartnerSection from "@/components/landing/WhyPartnerSection";
import SupportSection from "@/components/landing/SupportSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TargetAudienceSection />
        <WhyPartnerSection />
        <SupportSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
