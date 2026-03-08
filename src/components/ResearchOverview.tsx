import { motion } from "framer-motion";
import { Shield, Train, GraduationCap, TreePine } from "lucide-react";

const tags = [
  { icon: Shield, label: "Safety", stat: "25 districts" },
  { icon: Train, label: "Transportation", stat: "9 subway lines" },
  { icon: GraduationCap, label: "Education", stat: "2,200+ schools" },
  { icon: TreePine, label: "Green Space", stat: "170+ parks" },
];

const ResearchOverview = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3"
          >
            Overview
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-2xl md:text-3xl font-bold mb-4"
          >
            What drives housing price inequality across Seoul?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-[15px] leading-relaxed"
          >
            Seoul's housing prices have surged over the past decade, but growth
            varies dramatically across its 25 districts. We investigate how four
            key urban amenities explain this spatial inequality.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {tags.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/25 hover:shadow-md transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <t.icon className="w-5 h-5 text-primary mx-auto mb-2.5" />
              <p className="text-sm font-semibold mb-1">{t.label}</p>
              <p className="text-xs text-muted-foreground">{t.stat}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchOverview;
