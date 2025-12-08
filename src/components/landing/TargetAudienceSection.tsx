import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Calculator, Briefcase, Users } from "lucide-react";

import Img1 from "@/assets/FundoFalavinha01.jpg";
import Img2 from "@/assets/foto02.jpg";
import Img3 from "@/assets/foto01.jpg";
import Img4 from "@/assets/foto003.png";

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
    <section id="para-quem" className="relative py-24 md:py-32">
      <div
        className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20"
        ref={ref}
      >
        {/* --- TEXTO (lado esquerdo) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-cyan-300/20 border border-[#155d6040]"
          >
            <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse-soft" />
            <span className="text-sm font-medium text-gray-500">
              Programa de Parceiros
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            Para quem é a <span className="gradient-text">Parceria?</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
            Para{" "}
            <span className="gradient-text font-bold">
              advogados, contadores, consultores e empresários
            </span>{" "}
            que desejam aumentar receita oferecendo soluções tributárias sem
            ampliar estrutura interna.
          </p>

          {/* Cards horizontais em formato minimalista */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- COLUNA DE IMAGENS (lado direito) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center lg:justify-end gap-6"
        >
          <div className="flex flex-col gap-6">
            <img
              src={Img1}
              className="w-52 h-72 object-cover rounded-2xl shadow-lg"
            />
            <img
              src={Img2}
              className="w-52 h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-6 mt-10 hidden md:flex">
            <img
              src={Img3}
              className="w-52 h-72 object-cover rounded-2xl shadow-lg"
            />
            <img
              src={Img4}
              className="w-52 h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
