import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

interface ServiceCategory {
  id: string;
  name: string;
  tiers: PricingTier[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    tiers: [
      {
        name: "Starter",
        price: "1,600,000",
        features: [
          "Domain Gratis (.com)",
          "Shared Hosting (6 Bulan)",
          "Desain Responsif (Ponsel & Desktop)",
          "1 Landing Page (long scroll)",
          "1 Email Bisnis",
          "SSL Gratis",
          "3x Revisi Gratis",
          "Garansi Pemeliharaan (Maintenance) 20 Hari",
          "Akses Panduan Video Website",
        ],
      },
      {
        name: "Growth",
        price: "2,200,000",
        featured: true,
        features: [
        "Semua yang ada di Paket Starter, ditambah:",
        "Hosting 1 Tahun",
        "Desain Visual Lebih Kompleks (CTA, Form, Gallery)",
        "Chat Langsung WhatsApp",
        "1 Email Bisnis",
        "5x Revisi Gratis",
        "SSL Gratis",
        "SEO On-Page Dasar",
        "Garansi Pemeliharaan (Maintenance) 1 Bulan",        
      ],
      },
      {
        name: "Ultimate",
        price: "3,000,000",
        features: [
          "Semua yang ada di Paket Growth, ditambah:",
          "Hingga 2 Halaman Tambahan (About / FAQ / Blog Preview)",
          "Custom Feature Request (Popup, Accordion, Pricing Table, dll)",
           "Interactive Design (Animated Scroll, Parallax, etc)",
           "Speed Optimization (Lazy Load + Caching Tools)",
          "7x Revisi Gratis",
          "Garansi Pemeliharaan (Maintenance) 1,5 Bulan",
        ],
      },
    ],
  },
  {
    id: "company-profile",
    name: "Web Company Profile",
    tiers: [
      {
        name: "Starter",
        price: "2,500,000",
        features: [
"Domain Gratis (.com)",
"Shared Hosting (6 Bulan)",
"Desain Responsif",
"Hingga 5 Halaman",
"Formulir Kontak",
"Integrasi Google Maps",
"Akun Email Bisnis",
"SSL Gratis",
"2x Revisi Gratis",        ],
      },
      {
        name: "Growth",
        price: "4,200,000",
        featured: true,
        features: [
"Semua yang ada di Paket Starter, ditambah:",
"Hosting 1 Tahun",
"Hingga 10 Halaman",
"Sistem Blog",
"Gallery Management",
"2 Email Bisnis",
"4x Revisi Gratis",
"SEO On-Page Tingkat Lanjut",        ],
      },
      {
        name: "Ultimate",
        price: "6,500,000",
        features: [
"Semua yang ada di Paket Growth, ditambah:",
"Hingga 20 Halaman",
"Panel Admin Kustom",
"Dukungan Multi-Bahasa",
"Analitik Tingkat Lanjut",
"3 Email Bisnis",
"7x Revisi Gratis",
"Dukungan Prioritas"        ],
      },
    ],
  },
];

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  
  const currentCategory = serviceCategories.find(cat => cat.id === activeCategory) || serviceCategories[0];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Pricelist Services
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
Solusi lengkap buat bantu bisnis kamu sukses di dunia digital.        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-card-hover"
                  : "bg-card text-foreground hover:bg-card/80 border border-border/50"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentCategory.tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={cn(
                "rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 relative",
                tier.featured
                  ? "bg-[hsl(45,95%,50%)] text-[hsl(220,40%,15%)] shadow-card-hover scale-105 border-2 border-primary"
                  : "bg-card text-foreground shadow-card border border-border/50"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 w-16 h-16 z-[1]">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[64px] border-t-[hsl(220,85%,55%)] border-l-[64px] border-l-transparent z-[1]"></div>
                  <Star className="absolute top-2 right-2 w-5 h-5 text-white fill-white z-[1]" />
                </div>
              )}

              <h3 className="text-3xl font-bold mb-6">{tier.name}</h3>
              
              <div className="mb-8">
                <span className={cn(
                  "text-lg font-medium",
                  tier.featured ? "text-[hsl(220,40%,15%)]" : "text-muted-foreground"
                )}>
                  Rp
                </span>
                <span className="text-4xl font-bold ml-2">{tier.price}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={cn(
                      "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                      tier.featured ? "bg-[hsl(220,40%,15%)]" : "bg-primary/20"
                    )}>
                      <Check className={cn(
                        "w-3 h-3",
                        tier.featured ? "text-[hsl(45,95%,50%)]" : "text-primary"
                      )} />
                    </div>
                    <span className={cn(
                      "text-sm leading-relaxed",
                      tier.featured ? "text-[hsl(220,40%,15%)]" : "text-foreground"
                    )}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6287852949648?text=Halo%20Arah%20Creative,%20Saya%20mau%20pesan%20${encodeURIComponent(currentCategory.name)}%20${encodeURIComponent(tier.name)}%20(${encodeURIComponent(activeCategory.replace('-', ' '))})`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={tier.featured ? "default" : "outline"}
                  size="lg"
                  className={cn(
                    "w-full",
                    tier.featured && "bg-[hsl(220,40%,15%)] text-white hover:bg-[hsl(220,40%,20%)]"
                  )}
                >
                  Order Now
                </Button>
              </a>

              {tier.featured && (
                <p className="text-xs text-center mt-4 italic text-[hsl(220,40%,15%)] opacity-80">
Paling hemat! Pilihan terpopuler buat para profesional dan brand yang lagi berkembang.                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
