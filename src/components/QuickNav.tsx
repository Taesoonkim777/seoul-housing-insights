import { motion } from "framer-motion";
import { BookOpen, MessageCircle, FlaskConical, BarChart3, Users } from "lucide-react";

const links = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "story", label: "Story", icon: MessageCircle },
  { id: "methodology", label: "Methodology", icon: FlaskConical },
  { id: "analysis", label: "Analysis", icon: BarChart3 },
  { id: "team", label: "Team", icon: Users },
];

const QuickNav = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-8 border-b border-border bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {links.map((link, i) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={() => scrollTo(link.id)}
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <link.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
              <span className="text-[13px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {link.label}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default QuickNav;
