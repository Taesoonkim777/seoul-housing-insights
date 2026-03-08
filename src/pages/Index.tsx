import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import seoulHero from "@/assets/seoul-hero.jpg";
import { MessageCircle, BarChart3, Lightbulb, FlaskConical } from "lucide-react";

const navButtons = [
  { id: "why", label: "Why We Chose This Topic", icon: MessageCircle, route: null },
  { id: "findings", label: "Explore Key Findings", icon: BarChart3, route: "/findings" },
  { id: "policy", label: "Policy Recommendation", icon: Lightbulb, route: null },
  { id: "methodology-team", label: "Methodology & Team", icon: FlaskConical, route: null },
];

const team = [
  "Hakyun Song", "Insung Lee", "Taesoon Kim",
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <section className="relative flex-1 flex items-center justify-center overflow-hidden min-h-screen">
        <div className="absolute inset-0">
          <img src={seoulHero} alt="Seoul cityscape" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          {/* Course label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/45 mb-5"
          >
            Harvard Kennedy School · DPI 852M: Advanced Data and Information Visualization
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Urban Amenities & Housing Price Inequality in Seoul
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm text-white/55 max-w-lg mx-auto mb-8 leading-relaxed"
          >
            What is driving the rapid surge in apartment prices in Seoul, Korea — and how should we respond?
          </motion.p>

          {/* Nav buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex justify-center gap-3 mb-10"
          >
            {navButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => scrollTo(btn.id)}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 text-white/60 hover:bg-white/15 hover:text-white/90 hover:border-white/25 backdrop-blur-sm transition-all duration-200 text-xs font-medium"
              >
                <btn.icon className="w-3.5 h-3.5" />
                {btn.label}
              </button>
            ))}
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex justify-center gap-4"
          >
            {team.map((name) => (
              <span key={name} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-medium tracking-wide backdrop-blur-sm">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
