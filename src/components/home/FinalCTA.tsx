import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// Import background image - replace with your own
import hero1 from "./ahuthor-image.jpeg";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative h-[60vh] min-h-[500px] flex items-center justify-center"
    >
      {/* Background Image - replace with your own */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${hero1})` }}
      />
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative text-center px-6 max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-4">
          Start Documenting Your Story
        </h2>
        <p className="text-cream/80 text-sm uppercase tracking-widest mb-8">
          Let's turn your stories and life into soulful portraits
        </p>
        <Button asChild variant="hero" size="lg">
          <a
            href="https://wa.me/2348101379235"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Connect
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
