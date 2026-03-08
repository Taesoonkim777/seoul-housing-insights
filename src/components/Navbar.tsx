import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = ["Overview", "Story", "Methodology", "Analysis", "Team"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : ""
      }`}
    >
      <div className="container mx-auto px-6 py-3.5 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold tracking-tight"
        >
          <span className="text-primary">Seoul</span>{" "}
          <span className="text-foreground/70">Housing</span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-[13px] text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md hover:bg-secondary transition-all duration-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
