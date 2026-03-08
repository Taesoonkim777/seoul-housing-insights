import { motion } from "framer-motion";

const team = [
  { name: "Hakyun Song", role: "Spatial Analysis & Mapping" },
  { name: "Insung Lee", role: "Statistical Modeling & Regression" },
  { name: "Taesoon Kim", role: "Data Visualization & Dashboard" },
];

const TeamSection = () => {
  return (
    <section className="py-20 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3"
          >
            Research Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-2xl md:text-3xl font-bold mb-10"
          >
            Group 1
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-primary">
                    {t.name[0]}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8 border-t border-border"
          >
            <p className="text-xs text-muted-foreground">
              Created for{" "}
              <span className="font-medium text-foreground/70">
                DPI 852M: Advanced Data and Information Visualization
              </span>
              {" "}· Spring 2026 · Seoul, Korea
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
