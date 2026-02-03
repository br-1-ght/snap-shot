import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import images - replace with your own
import gallery4 from "../testimonials-images/testimonials-hero-image.jpeg";
import gallery6 from "./gallery-images/family.jpeg";
import gallery1 from "./gallery-images/wedding-3.jpeg";
// import gallery3 from "@/assets/gallery-3.jpg";
// import gallery5 from "@/assets/gallery-5.jpg";

// Replace with your wedding/couple images
const weddingPhotos = [
  { src: gallery4, alt: "Wedding 1" },
  // { src: gallery4, alt: "Couple 1" },
  { src: gallery6, alt: "Family 1" },
  // { src: gallery3, alt: "Wedding 2" },
  { src: gallery1, alt: "Couple 2" },
  // { src: gallery5, alt: "Wedding 3" },
];

const GalleryB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${gallery4})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4">
              Gallery B
            </h1>
            <p className="text-cream/80 text-lg">Weddings & Couples</p>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {weddingPhotos.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
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
                <Link to="/portfolio/gallery-a">Gallery A</Link>
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

export default GalleryB;
