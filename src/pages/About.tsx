import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

// Import images - replace with your own
import photographerImg from "./pages-images/about-us.jpg";
import aboutHero from "../components/home/photo-studio.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-contain bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream">
              About Me
            </h1>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-dramatic">
                    {/* Replace with your image */}
                    <img
                      src={photographerImg}
                      alt="Photographer portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  The Story Behind the Lens
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over a decade of experience in professional photography,
                  I've dedicated my life to capturing the essence of human
                  emotion and the beauty of life's fleeting moments. My journey
                  began with a simple point-and-shoot camera, and has evolved
                  into a passionate pursuit of visual storytelling.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Based in Lagos, Nigeria, I specialize in portrait photography,
                  wedding documentation, fashion editorials, and corporate
                  events. Each project is approached with fresh eyes and a
                  commitment to delivering images that exceed expectations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I believe that every person has a unique story worth telling,
                  and my role is to capture those stories in their most
                  authentic form. Whether it's the joy of a wedding day, the
                  confidence of a professional headshot, or the intimacy of a
                  family portrait, I'm here to preserve your memories forever.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://wa.me/2348101379235"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let's Work Together
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "200+", label: "Happy Clients" },
                { number: "1000+", label: "Photos Delivered" },
                { number: "5+", label: "Years Experience" },
                { number: "5+", label: "Awards Won" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-primary-foreground/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
