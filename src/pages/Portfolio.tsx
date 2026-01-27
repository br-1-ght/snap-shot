import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// Import gallery images - replace with your own
import gallery1 from "./gallery/gallery-images/Portrait.jpeg";
import gallery2 from "./gallery/gallery-images/family.jpeg";
import gallery3 from "./gallery/gallery-images/fashion-2.jpeg";
import gallery4 from "./gallery/gallery-images/fashion.jpeg";
import gallery5 from "./gallery/gallery-images/wedding.jpeg";
// import gallery6 from "@/assets/gallery-6.jpg";
// import gallery7 from "@/assets/gallery-7.jpg";
// import gallery8 from "@/assets/gallery-8.jpg";
// import gallery9 from "@/assets/gallery-9.jpg";
import portfolioHero from "@/assets/portfolio-hero.jpg";

type Category = "all" | "portrait" | "wedding" | "fashion" | "events";

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
}

// Replace these images with your own
const galleryItems: GalleryItem[] = [
  { src: gallery1, alt: "Studio portrait", category: "portrait" },
  { src: gallery2, alt: "Family photography", category: "events" },
  { src: gallery3, alt: "Fashion photography", category: "fashion" },
  { src: gallery4, alt: "Fashion photography", category: "fashion" },
  { src: gallery5, alt: "Wedding photography", category: "wedding" },
  // { src: gallery6, alt: "Family photography", category: "events" },
  // { src: gallery7, alt: "Event photography", category: "events" },
  // { src: gallery8, alt: "Corporate headshot", category: "portrait" },
  // { src: gallery9, alt: "Artistic portrait", category: "fashion" },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "portrait", label: "Portraits" },
  { value: "wedding", label: "Weddings" },
  { value: "fashion", label: "Fashion" },
  { value: "events", label: "Events" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${portfolioHero})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4">
              Portfolio
            </h1>
            <p className="text-cream/80 text-lg">
              A collection of my finest work
            </p>
          </motion.div>
        </section>

        {/* Filter Tabs */}
        <section className="py-12 bg-cream-dark">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    "px-6 py-2 text-sm font-sans uppercase tracking-wider rounded-full transition-all duration-300",
                    activeCategory === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg"
                >
                  {/* Replace with your images */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/50 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-cream text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
