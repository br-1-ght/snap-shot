import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Camera, Heart, Clock, Award, Users, Sparkles } from "lucide-react";

import hero3 from "@/assets/hero-3.jpg";
import photographerImg from "@/assets/photographer.jpg";
import SEO from "@/components/SEO";

const experiences = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description:
      "We use top-of-the-line Canon and Sony cameras with premium lenses to ensure every shot is crystal clear.",
  },
  {
    icon: Heart,
    title: "Personalized Approach",
    description:
      "Every client is unique. We take time to understand your vision and create a customized experience.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "Receive your professionally edited photos within 7-14 business days after your session.",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "Recognized for excellence in portrait and wedding photography across Nigeria.",
  },
  {
    icon: Users,
    title: "Client-Focused Service",
    description:
      "From consultation to final delivery, we prioritize your satisfaction at every step.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description:
      "Our team provides styling tips, pose guidance, and location suggestions for the perfect shoot.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We discuss your vision, preferred style, location options, and any special requirements for your shoot.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We help with outfit selection, timing, and creative concepts to ensure everything is perfect.",
  },
  {
    step: "03",
    title: "The Shoot",
    description:
      "Relax and enjoy the experience while we capture authentic, beautiful moments.",
  },
  {
    step: "04",
    title: "Editing & Delivery",
    description:
      "Professional retouching and color grading, delivered via online gallery.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The BeatSnapShots Experience | What to Expect"
        description="Discover what makes a BeatSnapShots photography session special. From consultation to delivery, learn about our process, equipment, and personalized approach."
        keywords="photography experience Lagos, BeatSnapShots process, professional photo session Nigeria, photography consultation"
        canonical="https://beatsnapshots.com/experience"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero3})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cream mb-4">
              The Experience
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Discover what makes a BeatSnapShots session truly memorable
            </p>
          </motion.div>
        </section>

        {/* What We Offer */}
        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every session is crafted with care to deliver an exceptional
                photography experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 bg-card rounded-lg shadow-soft hover:shadow-elevated transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <exp.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section-padding bg-cream-dark">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From first contact to final delivery, here's what to expect
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-serif font-bold text-primary/10 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Photographer */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square rounded-lg overflow-hidden shadow-dramatic"
              >
                <img
                  src={photographerImg}
                  alt="Photographer at work"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Behind the Camera
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over a decade of experience, I've had the privilege of
                  capturing thousands of precious moments. My approach combines
                  technical expertise with an artistic eye to create images that
                  are both beautiful and meaningful.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe in creating a relaxed, enjoyable atmosphere during
                  every session. When you're comfortable, your true personality
                  shines through, and that's when the magic happens.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it's your wedding day, a family milestone, or a
                  personal branding shoot, I'm committed to delivering images
                  that you'll treasure for a lifetime.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
