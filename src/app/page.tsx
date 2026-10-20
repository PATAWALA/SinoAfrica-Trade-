import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import Hero from "@/components/sections/Hero";
import AutoSection from "@/components/sections/AutoSection";
import SourcingSection from "@/components/sections/SourcingSection";
import StudiesSection from "@/components/sections/StudiesSection";
import TrustSection from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AutoSection />
        <SourcingSection />
        <StudiesSection />
        <TrustSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}