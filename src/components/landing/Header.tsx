import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="font-semibold text-lg text-foreground">
            Falavinha <span className="gradient-text">Next</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#para-quem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Para quem
          </a>
          <a href="#por-que" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Por que ser parceiro
          </a>
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Como funciona
          </a>
        </nav>

        <a 
          href="#hero-form"
          className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02]"
        >
          Seja Parceiro
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
