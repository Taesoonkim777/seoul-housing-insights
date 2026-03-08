import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Hakyun Song",
    role: "Spatial Analysis & Mapping",
    desc: "Focused on geospatial visualization of housing price distributions and district-level amenity mapping across Seoul's 25 districts.",
    linkedin: "https://www.linkedin.com/in/hakyun-song-34354b327/",
    initials: "HS",
  },
  {
    name: "Insung Lee",
    role: "Statistical Modeling & Regression",
    desc: "Led macro-economic analysis including interest rate impacts, household debt correlations, and policy scenario modeling.",
    linkedin: "https://www.linkedin.com/in/insung-lee-563226130/",
    initials: "IL",
  },
  {
    name: "Taesoon Kim",
    role: "Data Visualization & Dashboard",
    desc: "Built interactive dashboards and micro-level amenity analysis, connecting transit, education, and green space data to housing trends.",
    linkedin: "https://www.linkedin.com/in/taesoon-kim-a474b7346/",
    initials: "TK",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
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
            className="font-display text-2xl md:text-3xl font-bold mb-12"
          >
            Group 1
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-secondary/30 border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-secondary border-2 border-primary/20 flex items-center justify-center mb-1">
                  <span className="font-display text-lg font-bold text-primary">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5">{t.name}</p>
                  <p className="text-xs font-medium text-primary/80 mb-2">{t.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors mt-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
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
