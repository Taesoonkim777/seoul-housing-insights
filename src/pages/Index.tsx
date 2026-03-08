import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import seoulHero from "@/assets/seoul-hero.jpg";
import { Search, BarChart3, Lightbulb, FlaskConical } from "lucide-react";

const navButtons = [
  { id: "why", label: "Why We Chose This Topic", icon: Search, route: null },
  { id: "findings", label: "Explore Key Findings", icon: BarChart3, route: "/findings" },
  { id: "policy", label: "Policy Recommendation", icon: Lightbulb, route: null },
  { id: "methodology-team", label: "Methodology & Team", icon: FlaskConical, route: null },
];

const team = ["Hakyun Song", "Insung Lee", "Taesoon Kim"];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <section className="relative flex-1 flex items-center justify-center overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={seoulHero}
            alt="Seoul cityscape at night"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsla(220, 30%, 8%, 0.35) 0%, hsla(220, 30%, 8%, 0.65) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          {/* Course */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/50 mb-6"
          >
            Harvard Kennedy School · DPI 852M: Advanced Data and Information Visualization
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-5"
          >
            Urban Amenities & Housing Price
            <br />
            Inequality in Seoul
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base md:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            What is driving the rapid surge in apartment prices in Seoul, Korea — and
            how should we respond?
          </motion.p>

          {/* Nav buttons - large pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex justify-center gap-3 mb-10"
          >
            {navButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() =>
                  btn.route ? navigate(btn.route) : scrollTo(btn.id)
                }
                className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.1] border border-white/20 text-white/80 hover:bg-white/[0.18] hover:text-white hover:border-white/35 backdrop-blur-md transition-all duration-300 text-sm font-medium"
              >
                <btn.icon className="w-4.5 h-4.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>{btn.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Team badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            {team.map((name) => (
              <span
                key={name}
                className="px-6 py-2.5 rounded-full bg-white/[0.08] border border-white/15 text-white/80 text-sm font-medium tracking-wide backdrop-blur-md"
              >
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
