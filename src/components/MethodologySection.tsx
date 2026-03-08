import { motion } from "framer-motion";
import { Map, BarChart3, Boxes } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Map,
    title: "Descriptive Spatial Analysis",
    desc: "Choropleth maps and time-series trends reveal spatial concentration and sale vs. rent dynamics.",
    tags: ["Choropleth Maps", "Time-Series", "Spatial Clustering"],
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Correlation & Regression",
    desc: "Multivariate regression quantifies how amenity indicators relate to price growth across districts.",
    tags: ["OLS Regression", "Effect Sizes", "Significance"],
  },
  {
    step: "03",
    icon: Boxes,
    title: "Cluster Analysis",
    desc: "K-means clustering identifies district typologies based on price and amenity profiles.",
    tags: ["K-Means", "Typology", "Pattern Recognition"],
  },
];

const MethodologySection = () => {
  return (
    <section className="py-20 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3"
          >
            Methodology
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-2xl md:text-3xl font-bold"
          >
            Three-Step Analytical Framework
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/25 hover:shadow-md transition-all duration-300 group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold text-primary/60">
                  {s.step}
                </span>
                <s.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
