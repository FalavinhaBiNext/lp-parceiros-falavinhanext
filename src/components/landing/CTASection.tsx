import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 opacity-5" style={{ background: 'var(--gradient-primary)' }} />
            
            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-300/20 border border-[#155d6040] text-gray-500"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Comece agora</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Pronto para fazer parte da{" "}
                <span className="gradient-text">Falavinha Next?</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Ofereça mais valor ao seu cliente e aumente sua receita de forma simples.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button
                  variant="hero"
                  size="xl"
                  asChild
                  className="mt-4"
                >
                  <a href="#hero-form">
                    Quero ser parceiro
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
