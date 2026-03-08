import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="py-20 md:py-24 border-t border-border" style={{ background: "var(--gradient-section)" }}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-3"
          >
            Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-2xl md:text-3xl font-bold mb-6"
          >
            Why We Chose This Topic
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-[15px] text-muted-foreground leading-relaxed"
          >
            <p>
              Seoul is a city of contrasts. In some districts, apartment prices have
              nearly doubled over the past decade. In others, growth has been marginal.
              These differences are not random — they reflect deep structural inequalities
              in how urban infrastructure is distributed.
            </p>
            <p>
              Our team wanted to understand this gap through data. We asked: does access
              to better transit, schools, parks, and safer neighborhoods explain why
              some areas thrive while others stagnate? The answer, we found, is nuanced
              but significant.
            </p>
            <p>
              This project connects quantitative analysis with the lived experience of
              Seoul's residents. By mapping amenity access against price trajectories,
              we hope to offer insights that matter — not just for analysts, but for
              the urban planners and policymakers who shape the city's future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
