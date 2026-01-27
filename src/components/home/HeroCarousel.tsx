import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import hero images - replace these with your own images
import hero1 from "./hero-caru-1.jpeg";
import hero2 from "./hero-caru-2.jpeg";
import hero3 from "./hero-caru-3.jpeg";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: hero1, // Replace with your image
    title: "Capturing Life's Beauty, One Frame at a Time.",
    subtitle: "Timeless portraits that capture life",
  },
  {
    image: hero2, // Replace with your image
    title: "Framing Your Story, One Shot at a Time.",
    subtitle: "Timeless portraits that capture life",
  },
  {
    image: hero3, // Replace with your image
    title: "Creating Memories That Last Forever.",
    subtitle: "Professional photography for every occasion",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-[50%_25%]"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 hero-gradient" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6 lg:px-12">
            <div className="text-center max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-cream leading-tight mb-6"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-cream/80 font-sans tracking-wide mb-8"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Button asChild variant="hero" size="lg">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/30 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/30 flex items-center justify-center text-cream hover:bg-cream/20 transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
        <span className="text-cream font-sans text-sm">
          0{currentSlide + 1}
        </span>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-12 h-1 rounded-full transition-colors ${
                index === currentSlide ? "bg-cream" : "bg-cream/30"
              }`}
            />
          ))}
        </div>
        <span className="text-cream/50 font-sans text-sm">
          /0{slides.length}
        </span>
      </div>
    </section>
  );
};

export default HeroCarousel;
