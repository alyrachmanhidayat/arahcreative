import portraitImage from "@/assets/IMG_20251015_213147.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 z-0"></div>
            <img 
              src={portraitImage} 
              alt="Alex Morgan - Creative Professional" 
              className="relative rounded-2xl shadow-card w-full object-cover aspect-square"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
Hi, Arah Creative merupakan jasa pembuat website yang dijalankan oleh saya sendiri, Aly Rachman. Saya bantu Kamu mengubah visi jadi cerita visual yang menarik dan langsung nyambung sama target audiens Kamu.            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
Pendekatan saya itu menggabungkan strategi jitu sama kualitas seni yang keren, jadi setiap proyek nggak cuma kelihatan oke, tapi juga memberikan hasil yang jelas dan terukur buat klien saya.
</p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
Saya jago banget bikin identitas merek yang nyambung dan nggak lekang dimakan waktu, dari ide awal sampai nanti diterapkan di semua media.            </p>
            
            {/* <div className="pt-4 grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">150+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
