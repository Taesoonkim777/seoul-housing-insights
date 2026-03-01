import { motion } from "framer-motion";
import { Map, BarChart3, Boxes } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Map,
    title: "Descriptive Spatial Analysis",
    description:
      "Choropleth maps visualize housing price growth rates by district, revealing spatial concentration patterns. Time-series trends compare sale vs. rent dynamics.",
    tags: ["Choropleth Maps", "Time-Series", "Spatial Clustering"],
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Correlation & Regression",
    description:
      "A multivariate regression estimates the statistical relationship between price growth and amenity indicators: Price = β₀ + β₁Safety + β₂Transport + β₃Education + β₄Green + ε",
    tags: ["OLS Regression", "Effect Sizes", "Statistical Significance"],
  },
  {
    step: "03",
    icon: Boxes,
    title: "Cluster Analysis",
    description:
      "K-means clustering groups districts by similarities in price and amenity profiles, identifying structural typologies: high-price/high-amenity, emerging, and underdeveloped areas.",
    tags: ["K-Means", "District Typology", "Pattern Recognition"],
  },
];

const MethodologySection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Methodology
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Three-step analytical framework
          </h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex gap-6 md:gap-10 group"
            >
              {/* Step number */}
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-secondary flex items-center justify-center border border-border group-hover:border-primary/40 transition-colors">
                <span className="font-mono text-lg font-bold text-primary">{s.step}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl md:text-2xl font-semibold">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
