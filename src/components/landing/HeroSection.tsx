import { motion } from "framer-motion";
import PartnerForm from "./PartnerForm";
import { CheckCheckIcon } from "lucide-react";
import Img1 from "@/assets/MinilogoBlack.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen pt-24 pb-16 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Marca d’água no canto superior esquerdo */}
        <div className="absolute top-30 left-0 w-[420px] opacity-10 select-none">
          <img
            src={Img1}
            className="w-full object-contain blur-md"
            alt="marca-dagua"
          />
        </div>

        {/* Seus círculos flutuantes continuam aqui */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-300/20 border border-[#155d6040]"
              >
                <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse-soft" />
                <span className="text-sm font-medium text-gray-500">
                  Programa de Parceiros
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
                Seja um Parceiro{" "}
                <span className="gradient-text">Falavinha Next</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Amplie sua receita oferecendo soluções de recuperação tributária
                aos seus clientes — sem aumentar sua operação.
              </p>

              <p className="text-base text-muted-foreground">
                Preencha o formulário ao lado e aguarde o contato de um dos
                nossos especialistas.
              </p>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCheckIcon className="w-5 h-5 text-primary" />
                <span className="text-sm">Sem custos iniciais</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCheckIcon className="w-5 h-5 text-primary" />
                <span className="text-sm">Suporte completo</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCheckIcon className="w-5 h-5 text-primary" />
                <span className="text-sm">Comissões atrativas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            id="hero-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <PartnerForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
