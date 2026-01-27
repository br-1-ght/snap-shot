import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import gallery images - replace these with your own images
import gallery1 from "./portfolio_images/portfolio-image-1.jpeg";
import gallery2 from "./portfolio_images/portfolio-image-2.jpeg";
import gallery3 from "./portfolio_images/portfolio-image-3.jpeg";
import gallery4 from "./portfolio_images/portfolio-image-4.jpeg";
import gallery5 from "./portfolio_images/portfolio-image-9.jpeg";
import gallery6 from "./portfolio_images/portfolio-image-6.jpeg";
import gallery7 from "./portfolio_images/portfolio-image-7.jpeg";
import gallery8 from "./portfolio_images/portfolio-image-8.jpeg";
import gallery9 from "./portfolio_images/portfolio-image-5.jpeg";

interface GalleryImage {
  src: string;
  alt: string;
  span: "tall" | "wide" | "normal";
}

// Replace these images with your own
const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: "Portrait photography", span: "tall" },
  { src: gallery2, alt: "Fashion photography", span: "tall" },
  { src: gallery3, alt: "Maternity photography", span: "tall" },
  { src: gallery4, alt: "Couple photography", span: "wide" },
  { src: gallery5, alt: "Studio portrait", span: "wide" },
  { src: gallery6, alt: "Family photography", span: "wide" },
  { src: gallery7, alt: "Event photography", span: "wide" },
  { src: gallery8, alt: "Corporate headshot", span: "wide" },
  { src: gallery9, alt: "Artistic portrait", span: "wide" },
];

const GalleryGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`gallery-item rounded-lg ${
                image.span === "tall"
                  ? "row-span-2"
                  : image.span === "wide"
                  ? "col-span-2"
                  : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-lg group h-full">
                {/* Replace src with your own images */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/40 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
