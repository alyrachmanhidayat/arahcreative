import { Instagram, Github, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Arah Creative by Aly</h3>
            <p className="text-muted-foreground">
Saya Desainer Web & Pengembang Web yang bantu bisnis bikin pengalaman brand yang memukau.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/arahcreativee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-primary" />
              </a> */}
              <a
                href="https://wa.me/6287852949648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
              <a
                href="mailto:alyrahman2003@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>© {currentYear} Arah Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
