import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-6xl font-serif text-primary/20 mb-4">"</div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed mb-6">
            In the world of photography, you get to share a captured moment with
            other people.
          </blockquote>
          <cite className="text-sm font-sans uppercase tracking-widest text-muted-foreground not-italic">
            — Ethan Callister
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
