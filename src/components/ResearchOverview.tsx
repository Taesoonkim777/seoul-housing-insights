import { motion } from "framer-motion";
import { Shield, Train, GraduationCap, TreePine } from "lucide-react";

const amenities = [
  {
    icon: Shield,
    title: "Safety",
    description: "Crime incidents, crime rates per 1,000 residents, and crime type breakdown across districts",
    color: "text-chart-safety" as const,
    stat: "25",
    statLabel: "Districts Analyzed",
  },
  {
    icon: Train,
    title: "Transportation",
    description: "Subway station density, bus stop locations, and daily subway ridership data",
    color: "text-chart-transport" as const,
    stat: "9",
    statLabel: "Subway Lines",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Schools by district, private academy count, and student population distribution",
    color: "text-chart-education" as const,
    stat: "2,200+",
    statLabel: "Schools Mapped",
  },
  {
    icon: TreePine,
    title: "Green Space",
    description: "Park area per district, green space per capita, and urban forest coverage",
    color: "text-chart-green" as const,
    stat: "170+",
    statLabel: "Parks Surveyed",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ResearchOverview = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-navy">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Research Question
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            What drives housing price inequality across Seoul?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            While Seoul's housing prices have surged over the past decade, the growth has been
            uneven across its 25 sub-districts. We investigate how urban amenities — safety,
            transportation, education, and green space — explain this variation.
          </p>
        </motion.div>

        {/* Amenity cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {amenities.map((a) => (
            <motion.div
              key={a.title}
              variants={item}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <a.icon className={`w-8 h-8 ${a.color} mb-4`} />
              <h3 className="font-display text-xl font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {a.description}
              </p>
              <div className="border-t border-border pt-4">
                <span className="text-2xl font-bold text-primary">{a.stat}</span>
                <span className="block text-xs text-muted-foreground mt-1">{a.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchOverview;
