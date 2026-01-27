import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// Import photographer image - replace with your own
import photographerImg from "./ahuthor-image.jpeg";

const AboutIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Hi, I'm Abisola Akinsola
            </h2>
            <p className="text-lg font-serif italic text-muted-foreground mb-6">
              I'm a Portrait Photographer Based in Lagos
            </p>
            <p className="text-muted-foreground/80 text-sm uppercase tracking-widest mb-4">
              "Through my lens, your story unfolds."
            </p>
            <p className="text-foreground leading-relaxed mb-8">
              I'm  a professional female-led photography brand dedicated to capturing timeless, meaningful images. We specialize 
              in weddings, portraits, studio photography, outdoor sessions, and child photography, creating visuals that tell genuine 
              stories and preserve life’s most beautiful moments.
              With a strong eye for detail, emotion, and creativity, we focus on delivering high-quality 
              photographs that feel natural, elegant, and authentic. Every session is approached with care and professionalism, ensuring our clients feel comfortable and confident while we turn their memories into lasting works of art.
            </p>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/2348101379235"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Us Today
              </a>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-dramatic">
                {/* Replace src with your own image */}
                <img
                  src={photographerImg}
                  alt="Photographer portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
