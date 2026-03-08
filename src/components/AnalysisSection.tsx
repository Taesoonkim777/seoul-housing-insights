import { motion } from "framer-motion";
import { Building2, TrendingUp, Globe, Landmark, Scale, Telescope } from "lucide-react";

const analyses = [
  {
    icon: Building2,
    title: "Apartment Analysis",
    desc: "Sale and rent price analysis with district-level comparison.",
    href: "/docs/apartment_analysis.html",
  },
  {
    icon: TrendingUp,
    title: "District Growth",
    desc: "Housing price growth rates and patterns across districts.",
    href: "/docs/district_growth.html",
  },
  {
    icon: Globe,
    title: "Macro Factors",
    desc: "Interest rates, loans, supply volume and macroeconomic drivers.",
    href: "/docs/macro_factors.html",
  },
  {
    icon: Landmark,
    title: "Micro Amenities",
    desc: "Transport, education, safety, and green space analysis.",
    href: "/docs/micro_amenities.html",
  },
  {
    icon: Scale,
    title: "Regulation",
    desc: "Impact and effectiveness of real estate regulation policies.",
    href: "/docs/regulation.html",
  },
  {
    icon: Telescope,
    title: "Outlook",
    desc: "Future projections and policy recommendations.",
    href: "/docs/outlook.html",
  },
];

const AnalysisSection = () => {
  return (
    <section className="py-20 md:py-24 border-t border-border" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3"
          >
            Analysis & Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-2xl md:text-3xl font-bold"
          >
            Explore the Findings
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {analyses.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 no-underline"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <a.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {a.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;
