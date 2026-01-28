import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Star } from "lucide-react";

import hero2 from "@/assets/hero-2.jpg";
import gallery1 from "./testimonials-images/testimonials-1.jpeg";
import gallery2 from "./testimonials-images/testimonials-2.jpeg";
import gallery4 from "./testimonials-images/testimonials-3.jpeg";
import gallery6 from "./testimonials-images/testimonials-4.jpeg";
import gallery8 from "./testimonials-images/testimonials-5.jpeg";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

// Replace with your actual testimonials
const testimonials: Testimonial[] = [
  {
    name: "Ajoke Saliu",
    role: "Bride",
    image: gallery1,
    rating: 5,
    text: `Working with Abisola Akinsola Shotit was one of the best decisions we made for our wedding. Her professionalism, creativity, and calm presence made the entire day stress-free. She paid attention to every detail and captured our love story so naturally and elegantly. The final images exceeded our expectations — timeless, emotional, and absolutely beautiful. I highly recommend her to anyone looking for a passionate and talented wedding photographer.`,
  },
  {
    name: "Mr Akinsola",
    role: "Corporate Client",
    image: gallery2,
    rating: 5,
    text: "The professionalism, creativity, and calm energy during the shoot made all the difference. The final photos captured exactly what I envisioned—and more.",
  },
  {
    name: "Sybill &  Tunde",
    role: "Couple",
    image: gallery4,
    rating: 5,
    text: "Our pre-wedding and Traditional wedding photos turned out amazing! Abisola Akinsola Shotit made us  feel so comfortable during the shoot.The final images were beyond our expectations.",
  },
  {
    name: "Adenike Akinola",
    role: "Fashion Model",
    image: gallery6,
    rating: 5,
    text: "Working with Abisola Akinsola Shotit was incredible experience The attention to lighting and angles really brought out the beat on every shot.A true artist!",
  },
  {
    name: "The Akinbile family",
    role: "Family Portrait",
    image: gallery8,
    rating: 5,
    text: "We've been coming back for a family portraits for 2years now.Each session feels fresh and memories captured are priceless.Thank you for preserving our family moments!",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero2})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4">
              Testimonials
            </h1>
            <p className="text-cream/80 text-lg">
              What our clients say about us
            </p>
          </motion.div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-lg shadow-elevated"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Ready to Create Your Story?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join hundreds of satisfied clients
            </p>
            <a
              href="https://wa.me/2348101379235"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cream text-navy px-8 py-3 rounded-md font-semibold uppercase tracking-wider hover:bg-cream/90 transition-colors"
            >
              Book Your Session
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
