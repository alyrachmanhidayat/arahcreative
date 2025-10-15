import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-20 mt-16">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Arah Creative
        </h1>
        <p className="text-2xl md:text-3xl text-primary font-medium mb-8 animate-slide-up">
          Web Design & Web Developer
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
Menciptakan pengalaman brand yang keren lewat desain yang inovatif dan pemikiran yang strategis.        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl z-0"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl z-0"></div>
      </div>
    </section>
  );
};

export default Hero;
