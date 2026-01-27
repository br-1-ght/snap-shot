import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import images - replace with your own
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import hero1 from "@/assets/hero-1.jpg";

// Replace with your portrait images
const portraits = [
  { src: gallery1, alt: "Portrait 1" },
  { src: gallery2, alt: "Portrait 2" },
  { src: gallery5, alt: "Portrait 3" },
  { src: gallery7, alt: "Portrait 4" },
  { src: gallery8, alt: "Portrait 5" },
  { src: gallery3, alt: "Portrait 6" },
];

const GalleryA = () => {
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
              Gallery A
            </h1>
            <p className="text-cream/80 text-lg">Portrait Collection</p>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portraits.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/40 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-cream-dark">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6">
              Explore More Galleries
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/portfolio/gallery-b">Gallery B</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/portfolio/gallery-c">Gallery C</Link>
              </Button>
              <Button asChild>
                <Link to="/portfolio">View All Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryA;
