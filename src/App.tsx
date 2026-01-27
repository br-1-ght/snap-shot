import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Experience from "./pages/Experience";
import StudioPricing from "./pages/pricing/StudioPricing";
import OutdoorPricing from "./pages/pricing/OutdoorPricing";
import MaternityPricing from "./pages/pricing/MaternityPricing";
import GalleryA from "./pages/gallery/GalleryA";
import GalleryB from "./pages/gallery/GalleryB";
import GalleryC from "./pages/gallery/GalleryC";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/gallery-a" element={<GalleryA />} />
          <Route path="/portfolio/gallery-b" element={<GalleryB />} />
          <Route path="/portfolio/gallery-c" element={<GalleryC />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/pricing/studio" element={<StudioPricing />} />
          <Route path="/pricing/outdoor" element={<OutdoorPricing />} />
          <Route path="/pricing/maternity" element={<MaternityPricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
