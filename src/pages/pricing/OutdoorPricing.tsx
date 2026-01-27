import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import hero2 from "@/assets/hero-2.jpg";

interface PricingPackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Essential",
    price: "₦75,000",
    duration: "2 Hour Session",
    features: [
      "15 Edited Digital Images",
      "1-2 Locations",
      "2 Outfit Changes",
      "Basic Retouching",
      "Online Gallery Access",
      "Print-Ready Files",
    ],
  },
  {
    name: "Classic",
    price: "₦150,000",
    duration: "3 Hour Session",
    features: [
      "35 Edited Digital Images",
      "2-3 Locations",
      "4 Outfit Changes",
      "Advanced Retouching",
      "Online Gallery Access",
      "Print-Ready Files",
      "Transportation Included",
      "2 Printed Photos (8x10)",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "₦300,000",
    duration: "Full Day Session",
    features: [
      "75+ Edited Digital Images",
      "Multiple Locations",
      "Unlimited Outfit Changes",
      "Premium Retouching",
      "Online Gallery Access",
      "Print-Ready Files",
      "Transportation Included",
      "Professional Styling",
      "5 Printed Photos (8x10)",
      "Photo Album (30 pages)",
      "Behind-the-Scenes Video",
    ],
  },
];

const OutdoorPricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero2})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4">
              Outdoor Pricing
            </h1>
            <p className="text-cream/80 text-lg">
              Capture beautiful moments in nature's perfect backdrop
            </p>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-card rounded-lg overflow-hidden shadow-elevated ${
                    pkg.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${pkg.popular ? "pt-14" : ""}`}>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {pkg.duration}
                    </p>
                    <div className="text-4xl font-serif font-bold text-primary mb-6">
                      {pkg.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full"
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      <a
                        href="https://wa.me/2348101379235"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-serif font-bold text-primary-foreground mb-4">
              Popular Outdoor Locations
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              We shoot at beautiful locations across Lagos including Lekki
              Conservation Centre, beaches, botanical gardens, and urban
              landscapes. Custom location requests are welcome!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero">
                <Link to="/pricing/studio">Studio Pricing</Link>
              </Button>
              <Button asChild variant="hero">
                <Link to="/pricing/maternity">Maternity Shoots</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OutdoorPricing;
