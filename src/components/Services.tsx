import { Palette, Lightbulb, Target, Sparkles } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Bikin sistem brand yang lengkap (termasuk logo, palet warna, jenis huruf, dan panduan visual) biar kehadiran di pasar jadi kuat.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "Strategi kreatif berdasarkan data yang nyambung sama tujuan bisnis, dan mengena di hati target audiens di semua channel.",
  },
  {
    icon: Target,
    title: "Marketing Campaigns",
    description: "Pengembangan campaign dari awal sampai akhir, dari ide sampai eksekusi, yang pastiin pesannya konsisten dan dampaknya maksimal.",
  },
  {
    icon: Sparkles,
    title: "Digital Experience",
    description: "Solusi digital yang fokus ke pengguna (seperti website, aplikasi, dan pengalaman interaktif) yang bisa menarik perhatian dan bikin mereka convert (berubah jadi klien/pembeli).",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Services
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
Solusi kreatif yang lengkap dan pas banget buat mengangkat merek kamu dan mendorong hasil yang maksimal.        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
