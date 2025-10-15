import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
