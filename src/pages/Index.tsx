import { motion } from "framer-motion";
import seoulHero from "@/assets/seoul-hero.jpg";
import { MessageCircle, BarChart3, Lightbulb, FlaskConical, ArrowRight } from "lucide-react";

const navButtons = [
  { id: "why", label: "Why We Chose This Topic", icon: MessageCircle },
  { id: "findings", label: "Explore Key Findings", icon: BarChart3 },
  { id: "policy", label: "Policy Recommendation", icon: Lightbulb },
  { id: "methodology-team", label: "Methodology & Team", icon: FlaskConical },
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
            className="text-sm text-white/50 max-w-md mx-auto mb-8"
          >
            How transportation, education, safety, and green space shape housing price growth across Seoul's 25 districts.
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            onClick={() => scrollTo("analysis")}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mb-8"
          >
            Explore Findings <ArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Nav buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
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
            className="flex flex-wrap justify-center gap-5 text-[11px] text-white/35"
          >
            {team.map((name) => (
              <span key={name} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-white/25" />{name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
