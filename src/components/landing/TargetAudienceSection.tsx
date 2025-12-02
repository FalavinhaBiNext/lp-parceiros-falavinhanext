import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Calculator, Briefcase, Users } from "lucide-react";

const TargetAudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const audiences = [
    {
      icon: Scale,
      title: "Advogados",
      description: "Escritórios de advocacia que buscam ampliar serviços",
    },
    {
      icon: Calculator,
      title: "Contadores",
      description: "Profissionais contábeis em busca de novas receitas",
    },
    {
      icon: Briefcase,
      title: "Consultores",
      description: "Consultores empresariais e tributários",
    },
    {
      icon: Users,
      title: "Empresários",
      description: "Gestores que desejam indicar clientes",
    },
  ];

  return (
    <section id="para-quem" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Público-alvo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Para quem é a parceria?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Para advogados e contadores que desejam ampliar oportunidades de receita oferecendo 
            soluções tributárias estratégicas, sem aumentar a estrutura interna do seu escritório.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-glow hover:scale-[1.02] hover:border-primary/30">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
