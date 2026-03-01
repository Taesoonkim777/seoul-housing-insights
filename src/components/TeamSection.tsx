import { motion } from "framer-motion";

const team = [
  { name: "Hakyun Song", role: "Spatial Analysis & Mapping" },
  { name: "Insung Lee", role: "Statistical Modeling & Regression" },
  { name: "Taesoon Kim", role: "Data Visualization & Dashboard" },
];

const successCriteria = [
  "Identify statistically significant drivers of price inequality",
  "Quantify effect sizes (e.g., % price change per subway station density)",
  "Provide actionable recommendations for urban planning",
  "Present findings in a visually intuitive and accessible format",
];

const TeamSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Research Team
            </p>
            <h2 className="font-display text-3xl font-bold mb-10">Group 1</h2>
            <div className="space-y-6">
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-primary">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Criteria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Success Criteria
            </p>
            <h2 className="font-display text-3xl font-bold mb-10">Project Goals</h2>
            <div className="space-y-4">
              {successCriteria.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-card border border-border rounded-lg p-4"
                >
                  <span className="font-mono text-sm font-bold text-primary mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Advanced Data Visualization · Spring 2026 · Seoul, Korea
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
