import { Link } from "react-router-dom";
import { Instagram, Facebook, } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">AbisolaShotit</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Capturing life's beauty and energizing the moment. Specializing in
              portraits, events, weddings, and fashion photography.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Portfolio
              </Link>
              <Link
                to="/pricing/studio"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/abisola_shotit?igsh=MXd5YXl6b3B6MWw="
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1HdypgtDVu/"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/qr/6C7SYH2FZF3YE1"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <i className="bi bi-whatsapp"/>
              </a>
              <a
                href="https://www.tiktok.com/@abisola_shotit?_r=1&_t=ZS-93PthQgwsky"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} AbisolaShotit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
