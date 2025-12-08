import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeadphonesIcon, FileCheck, Lock, Award } from "lucide-react";

const SupportSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: HeadphonesIcon,
      title: "Suporte Comercial",
      description: "Acompanhamento dedicado em todas as etapas da parceria",
    },
    {
      icon: FileCheck,
      title: "Suporte Técnico",
      description: "Equipe especializada para análises tributárias complexas",
    },
    {
      icon: Lock,
      title: "Segurança Total",
      description: "Processos seguros e em conformidade legal",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com qualidade em cada entrega",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-300/20 border border-[#155d6040] text-gray-500 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse-soft" />
            Compromisso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Suporte total e{" "}
            <span className="gradient-text">compromisso real</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Oferecemos acompanhamento comercial e técnico completo, desde o credenciamento 
            até a entrega das análises tributárias. Garantimos segurança, transparência 
            e excelência em cada etapa da parceria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex w-16 h-16 rounded-2xl gradient-bg items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
