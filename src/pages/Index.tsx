import { motion } from "framer-motion";
import seoulHero from "@/assets/seoul-hero.jpg";
import { Building2, TrendingUp, Globe, Landmark, Scale, Telescope } from "lucide-react";

const analyses = [
  { icon: Building2, title: "Apartment Analysis", href: "/docs/apartment_analysis.html" },
  { icon: TrendingUp, title: "District Growth", href: "/docs/district_growth.html" },
  { icon: Globe, title: "Macro Factors", href: "/docs/macro_factors.html" },
  { icon: Landmark, title: "Micro Amenities", href: "/docs/micro_amenities.html" },
  { icon: Scale, title: "Regulation", href: "/docs/regulation.html" },
  { icon: Telescope, title: "Outlook", href: "/docs/outlook.html" },
];

const team = [
  { name: "Hakyun Song", role: "Spatial Analysis" },
  { name: "Insung Lee", role: "Statistical Modeling" },
  { name: "Taesoon Kim", role: "Data Visualization" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={seoulHero} alt="Seoul cityscape" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 mb-4"
          >
            DPI 852M · Advanced Data and Information Visualization
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-white mb-4"
          >
            Urban Amenities &{" "}
            <span className="italic text-white/90">Housing Price Inequality</span>
            {" "}in Seoul
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm text-white/55 max-w-md mx-auto mb-6"
          >
            How transportation, education, safety, and green space shape housing
            price growth across Seoul's 25 districts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-5 text-[12px] text-white/40"
          >
            {team.map((t) => (
              <span key={t.name} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-white/30" />
                {t.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Analysis Grid ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-6 text-center"
          >
            Explore the Findings
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {analyses.map((a, i) => (
              <motion.a
                key={a.title}
                href={a.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group flex flex-col items-center gap-2.5 bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 no-underline text-center"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <a.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {a.title}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[11px] text-muted-foreground text-center mt-10"
          >
            Created for{" "}
            <span className="font-medium text-foreground/60">DPI 852M</span>
            {" "}· Spring 2026 · Seoul, Korea
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Index;
