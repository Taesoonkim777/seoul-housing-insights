import { motion } from "framer-motion";
import seoulHero from "@/assets/seoul-hero.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={seoulHero}
          alt="Seoul cityscape"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/60 mb-5"
        >
          DPI 852M · Advanced Data and Information Visualization
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] text-white mb-5"
        >
          Urban Amenities &{" "}
          <span className="italic text-white/90">Housing Price Inequality</span>
          <br className="hidden sm:block" />
          {" "}in Seoul
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[15px] md:text-base text-white/65 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          How transportation, education, safety, and green space shape housing
          price growth across Seoul's 25 districts.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <button
            onClick={() => scrollTo("analysis")}
            className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Explore Findings
          </button>
          <button
            onClick={() => scrollTo("story")}
            className="px-6 py-2.5 text-sm font-medium bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/15 backdrop-blur-sm transition-colors"
          >
            Read Our Story
          </button>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-[13px] text-white/50"
        >
          {["Hakyun Song", "Insung Lee", "Taesoon Kim"].map((name) => (
            <span key={name} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/40" />
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
