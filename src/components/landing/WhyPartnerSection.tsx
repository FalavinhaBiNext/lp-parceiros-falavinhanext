import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Zap, Handshake } from "lucide-react";

const WhyPartnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumente sua receita",
      description: "Ganhe comissões atrativas em cada projeto fechado através da sua indicação.",
    },
    {
      icon: Shield,
      title: "Segurança jurídica",
      description: "Processos seguros e em conformidade com toda legislação tributária vigente.",
    },
    {
      icon: Zap,
      title: "Sem burocracia",
      description: "Processo simples e ágil, sem necessidade de aumentar sua estrutura operacional.",
    },
    {
      icon: Handshake,
      title: "Parceria transparente",
      description: "Relacionamento baseado em confiança, transparência e resultados reais.",
    },
  ];

  return (
    <section id="por-que" className="py-24 md:py-32" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-300/20 border border-[#155d6040] text-gray-500 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse-soft" />
              Vantagens
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Por que ser nosso{" "}
              <span className="gradient-text">parceiro?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos a ponte que fortalece e expande o valor que você entrega ao seu cliente. 
              Ao se conectar conosco, você agrega soluções imediatas ao seu portfólio, 
              apresentando a possibilidade de recuperar impostos com segurança, técnica e eficiência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 h-full border border-border/50 transition-all duration-300 hover:shadow-medium hover:border-primary/30">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
