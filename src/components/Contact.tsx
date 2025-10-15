import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
Punya proyek di benakmu? Yuk, kita ngobrol gimana caranya kita bisa kerja bareng buat mewujudkan visimu.        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:alyrahman2003@gmail.com" className="text-lg hover:text-primary transition-colors">
                      alyrahman2003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+6287852949648" className="text-lg hover:text-primary transition-colors">
                      0878-5294-9648
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-lg">Cimahi, Jawa Barat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div> */}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-card rounded-xl p-8 shadow-card border border-border/50 flex flex-col items-center justify-center">
            <MessageCircle className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-center">Yuk, kita bahas proyekmu!</h3>
            <p className="text-muted-foreground text-center mb-6">
Udah siap mulai proyekmu? Yuk, ngobrol langsung sama saya di WhatsApp dan kita bahas gimana caranya kita wujudkan visimu.            </p>
            <a 
              href="https://wa.me/6287852949648" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
