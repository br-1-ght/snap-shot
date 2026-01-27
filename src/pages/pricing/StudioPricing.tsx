import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";

interface PricingPackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Basic",
    price: "₦50,000",
    duration: "1 Hour Session",
    features: [
      "10 Edited Digital Images",
      "1 Outfit Change",
      "Basic Retouching",
      "Online Gallery Access",
      "Print-Ready Files",
    ],
  },
  {
    name: "Standard",
    price: "₦100,000",
    duration: "2 Hour Session",
    features: [
      "25 Edited Digital Images",
      "3 Outfit Changes",
      "Advanced Retouching",
      "Online Gallery Access",
      "Print-Ready Files",
      "Makeup Touch-ups",
      "1 Printed Photo (8x10)",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₦200,000",
    duration: "4 Hour Session",
    features: [
      "50+ Edited Digital Images",
      "Unlimited Outfit Changes",
      "Premium Retouching",
      "Online Gallery Access",
      "Print-Ready Files",
      "Professional Makeup Artist",
      "3 Printed Photos (8x10)",
      "Photo Album (20 pages)",
      "Same-Day Sneak Peek",
    ],
  },
];

const StudioPricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero1})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4">
              Studio Pricing
            </h1>
            <p className="text-cream/80 text-lg">
              Professional studio sessions in our fully-equipped space
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

        {/* Other Pricing Options */}
        <section className="py-16 bg-cream-dark">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Explore Other Packages
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/pricing/outdoor">Outdoor Pricing</Link>
              </Button>
              <Button asChild variant="outline">
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

export default StudioPricing;
