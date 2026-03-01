import { motion } from "framer-motion";
import { Database, FileText, TrendingUp } from "lucide-react";

const sources = [
  {
    icon: Database,
    title: "Housing Transaction Data",
    source: "Seoul Open Data Portal",
    items: ["Real apartment sale prices", "Jeonse (deposit lease) prices", "Transaction volumes by district"],
  },
  {
    icon: FileText,
    title: "Urban Amenity Indicators",
    source: "Seoul Open Data API",
    items: ["Crime statistics & safety index", "Subway/bus infrastructure", "School & academy counts", "Park area & green coverage"],
  },
  {
    icon: TrendingUp,
    title: "Macroeconomic Context",
    source: "Bank of Korea",
    items: ["Policy interest rate history", "Mortgage lending growth", "Housing supply indicators"],
  },
];

const DataSourcesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Data Sources
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Built on public, transparent data
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sources.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <s.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground mb-4">{s.source}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSourcesSection;
