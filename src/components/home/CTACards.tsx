import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Import CTA images - replace with your own
import aboutHero from "./studio-image-2.jpeg";
import portfolioHero from "@/assets/portfolio-hero.jpg";

interface CTACardProps {
  image: string;
  title: string;
  subtitle: string;
  href: string;
  delay: number;
}

const CTACard = ({ image, title, subtitle, href, delay }: CTACardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Link
        to={href}
        className="block relative h-[400px] md:h-[500px] cta-card rounded-lg group"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-2">
            {title}
          </h3>
          <p className="text-cream/80 text-sm uppercase tracking-widest mb-6">
            {subtitle}
          </p>
          <div className="flex items-center gap-2 text-cream text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const CTACards = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Replace images with your own */}
          <CTACard
            image={aboutHero}
            title="About Me"
            subtitle="Who is Abisola Akinsola?"
            href="/about"
            delay={0}
          />
          <CTACard
            image={portfolioHero}
            title="Portfolio"
            subtitle="View my work"
            href="/portfolio"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default CTACards;
