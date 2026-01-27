import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import AboutIntro from "@/components/home/AboutIntro";
import GalleryGrid from "@/components/home/GalleryGrid";
import QuoteSection from "@/components/home/QuoteSection";
import CTACards from "@/components/home/CTACards";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <AboutIntro />
        <GalleryGrid />
        <QuoteSection />
        <CTACards />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
