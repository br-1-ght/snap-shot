import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import hero2 from "../pages-images/outdoor-image.webp";

interface PricingPackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Bronze",
    price: "₦60,000",
    duration: "1 Hour Session",
    features: [
      "4 Edited Digital Images",
      "1 Outfit Change",
      "Basic Retouching (soft copy)",
      "Online Gallery Access",
    ],
  },
  {
    name: "Silver",
    price: "₦80,000",
    duration: "2 Hour Session",
    features: [
      "6 Edited Digital Images (soft copy)",
      "2 Outfit Changes",
      "Advanced Retouching",
      "Online Gallery Access",
    ],
    popular: true,
  },
  {
    name: "Gold",
    price: "₦150,000",
    duration: "3 Hour Session",
    features: [
      "10 Edited Digital Images (soft copy)",
      "3 Outfit Changes",
      "Advanced Retouching",
      "Online Gallery Access",
      "A small Photo frame/Throwpillow (8x10)",
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
                        href="https://wa.me/2348138220519"
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

        {/* Additional Services */}
        <section className="section-padding bg-cream-dark">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Extras
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Additional Services
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Extra Outfit", price: "₦5,000", desc: "Per additional outfit change" },
                { name: "Rush Editing", price: "₦10,000", desc: "48-hour delivery" },
                { name: "Extra Images", price: "₦3,000", desc: "Per additional edited image" },
                { name: "Print Package", price: "₦15,000", desc: "5 premium 8x10 prints" },
              ].map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-serif font-bold text-foreground mb-1">{addon.name}</h3>
                  <p className="text-2xl font-serif font-bold text-primary mb-2">{addon.price}</p>
                  <p className="text-sm text-muted-foreground">{addon.desc}</p>
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
