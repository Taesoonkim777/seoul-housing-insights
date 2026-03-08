import { motion } from "framer-motion";
import seoulHero from "@/assets/seoul-hero.jpg";
import {
  Building2, TrendingUp, Globe, Landmark, Scale, Telescope,
  Shield, Train, GraduationCap, TreePine, Map, BarChart3, Boxes,
} from "lucide-react";

const analyses = [
  { icon: Building2, title: "Apartment Analysis", href: "/docs/apartment_analysis.html" },
  { icon: TrendingUp, title: "District Growth", href: "/docs/district_growth.html" },
  { icon: Globe, title: "Macro Factors", href: "/docs/macro_factors.html" },
  { icon: Landmark, title: "Micro Amenities", href: "/docs/micro_amenities.html" },
  { icon: Scale, title: "Regulation", href: "/docs/regulation.html" },
  { icon: Telescope, title: "Outlook", href: "/docs/outlook.html" },
];

const amenities = [
  { icon: Shield, label: "Safety" },
  { icon: Train, label: "Transportation" },
  { icon: GraduationCap, label: "Education" },
  { icon: TreePine, label: "Green Space" },
];

const methods = [
  { step: "01", icon: Map, title: "Spatial Analysis", tags: ["Choropleth", "Time-Series"] },
  { step: "02", icon: BarChart3, title: "Regression", tags: ["OLS", "Effect Sizes"] },
  { step: "03", icon: Boxes, title: "Clustering", tags: ["K-Means", "Typology"] },
];

const team = [
  { name: "Hakyun Song", role: "Spatial Analysis & Mapping" },
  { name: "Insung Lee", role: "Statistical Modeling & Regression" },
  { name: "Taesoon Kim", role: "Data Visualization & Dashboard" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO ── */}
      <section className="relative h-[62vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={seoulHero} alt="Seoul cityscape" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 mb-3">
            DPI 852M · Advanced Data and Information Visualization
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] text-white mb-3">
            Urban Amenities & <span className="italic text-white/90">Housing Price Inequality</span> in Seoul
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm text-white/55 max-w-md mx-auto mb-5">
            How transportation, education, safety, and green space shape housing price growth across Seoul's 25 districts.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3 mb-5">
            <button onClick={() => scrollTo("analysis")}
              className="px-5 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Explore Findings
            </button>
            <button onClick={() => scrollTo("story")}
              className="px-5 py-2 text-xs font-medium bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/15 backdrop-blur-sm transition-colors">
              Read Our Story
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-5 text-[11px] text-white/40">
            {team.map((t) => (
              <span key={t.name} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-white/30" />{t.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section id="overview" className="py-14 md:py-16 border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3">Overview</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
            className="font-display text-xl md:text-2xl font-bold mb-3">
            What drives housing price inequality across Seoul?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm leading-relaxed mb-8">
            Seoul's housing prices have surged over the past decade, but growth varies dramatically across its 25 districts.
            We investigate how four key urban amenities explain this spatial inequality.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-2">
            {amenities.map((a, i) => (
              <motion.div key={a.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-xs font-medium text-muted-foreground">
                <a.icon className="w-3.5 h-3.5 text-primary" />{a.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" className="py-14 md:py-16 border-b border-border" style={{ background: "var(--gradient-section)" }}>
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3">Story</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
            className="font-display text-xl md:text-2xl font-bold mb-4">Why We Chose This Topic</motion.h2>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Seoul is a city of contrasts. In some districts, apartment prices have nearly doubled over the past decade;
              in others, growth has been marginal. These differences are not random — they reflect deep structural
              inequalities in how urban infrastructure is distributed.
            </p>
            <p>
              Our team wanted to understand this gap through data: does access to better transit, schools, parks,
              and safer neighborhoods explain why some areas thrive while others stagnate? This project connects
              quantitative analysis with urban policy and the lived experience of Seoul's residents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section id="methodology" className="py-14 md:py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3">Methodology</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="font-display text-xl md:text-2xl font-bold">Three-Step Framework</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {methods.map((m, i) => (
              <motion.div key={m.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/25 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] font-bold text-primary/50">{m.step}</span>
                  <m.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{m.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANALYSIS ── */}
      <section id="analysis" className="py-14 md:py-16 border-b border-border" style={{ background: "var(--gradient-section)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3">Analysis & Results</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="font-display text-xl md:text-2xl font-bold">Explore the Findings</motion.h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {analyses.map((a, i) => (
              <motion.a key={a.title} href={a.href}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group flex flex-col items-center gap-2.5 bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 no-underline text-center"
                style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <a.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {a.title}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-14 md:py-16">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3">Research Team</motion.p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-primary">{t.name[0]}</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground">
            Created for <span className="font-medium text-foreground/60">DPI 852M: Advanced Data and Information Visualization</span> · Spring 2026 · Seoul, Korea
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
