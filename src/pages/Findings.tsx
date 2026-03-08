import { motion } from "framer-motion";
import { Building2, TrendingUp, Globe, Landmark, Scale, Telescope, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const Findings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3">
            Analysis & Results
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore the Findings
          </h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Click each card to view detailed analysis with interactive visualizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {analyses.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 no-underline text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <a.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
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
    </div>
  );
};

export default Findings;
