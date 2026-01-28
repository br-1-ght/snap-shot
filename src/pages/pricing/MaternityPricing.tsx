import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";

import gallery3 from "../gallery/gallery-images/maternity.jpeg";

interface PricingPackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Baby Bump Bronze",
    price: "₦50,000",
    duration: "1 Hour Session",
    features: [
      "5 Edited Digital Images",
      "1 Creative Outfit Concept",
      "Partner/Family Included",
      "Basic Retouching",
      "Online Gallery Access",
    ],
  },
  {
    name: "Baby Bump Silver",
    price: "₦80,000",
    duration: "2 Hour Session",
    features: [
      "10 Edited Digital Images",
      "2 Creative Outfit Concepts",
      "Partner/Family Included",
      "Advanced Retouching",
      "Online Gallery Access",
    ],
    popular: true,
  },
  {
    name: "Baby Bump Gold",
    price: "₦150,000",
    duration: "1 Hour Session",
    features: [
      "15 Edited Digital Images",
      "2 Creative Outfit Concepts",
      "Partner/Family Included",
      "Basic Retouching",
      "Online Gallery Access",
      "Professional Makeup",
      "Short video clip OR A small frame (8x10)",
    ],
  },
];

const MaternityPricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${gallery3})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-cream fill-cream/30" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4">
              Maternity Shoots
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Celebrate the beautiful journey of motherhood with timeless
              portraits
            </p>
          </motion.div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-cream-dark">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                A Moment Worth Capturing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your pregnancy journey is a magical time filled with
                anticipation and joy. Our maternity sessions are designed to
                capture the beauty, strength, and love of this special chapter.
                We recommend booking between 28-36 weeks for the perfect bump
                photos.
              </p>
            </motion.div>
          </div>
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
                    pkg.popular ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-semibold uppercase tracking-wider">
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
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Extras
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Additional Services
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Professional Makeup", price: "₦30,000", desc: "Full glam maternity look" },
                { name: "Partner Outfit", price: "₦10,000", desc: "Matching outfit for partner" },
                { name: "Extra Images", price: "₦5,000", desc: "Per additional edited image" },
                { name: "Video Clip", price: "₦30,000", desc: "Short cinematic bump video" },
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
                  <p className="text-2xl font-serif font-bold text-accent mb-2">{addon.price}</p>
                  <p className="text-sm text-muted-foreground">{addon.desc}</p>
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
                <Link to="/pricing/studio">Studio Pricing</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/pricing/outdoor">Outdoor Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaternityPricing;
