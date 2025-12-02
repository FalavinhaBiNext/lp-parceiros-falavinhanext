import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Credenciamento",
      description: "Após o envio do formulário, nosso executivo comercial entra em contato para agendar a primeira reunião de alinhamento.",
    },
    {
      number: "02",
      title: "Operacionalização – Fase 1",
      description: "Início do credenciamento e entrega dos materiais necessários para entendimento do processo e identificação das oportunidades tributárias.",
    },
    {
      number: "03",
      title: "Operacionalização – Fase 2",
      description: "Início dos processos com os clientes: identificação do perfil, agendamento de reunião com cliente e parceiro, apresentação do método.",
    },
    {
      number: "04",
      title: "Assinatura do Contrato",
      description: "Coleta de documentos, autorizações e liberação para início da análise tributária.",
    },
    {
      number: "05",
      title: "Apuração e Apresentação",
      description: "Realizamos a apuração das oportunidades tributárias e apresentamos os resultados em conjunto com o parceiro.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-32" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como funciona a{" "}
            <span className="gradient-text">nossa parceria</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-glow hover:border-primary/30">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Number circle */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center shadow-medium">
                    <span className="text-lg font-bold text-primary-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
