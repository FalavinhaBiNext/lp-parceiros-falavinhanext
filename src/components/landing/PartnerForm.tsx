import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";

const PartnerForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "",
    segment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    navigate("/obrigado");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl p-8 md:p-10"
    >
      <div className="space-y-2 mb-8">
        <h3 className="text-2xl font-semibold text-foreground">Cadastre-se agora</h3>
        <p className="text-muted-foreground">Preencha os dados para iniciar sua parceria</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nome completo
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              E-mail
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Telefone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Nome da Empresa
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Sua empresa"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="revenue" className="text-sm font-medium text-foreground">
              Faturamento Anual
            </label>
            <select
              id="revenue"
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              required
              className="flex h-12 w-full rounded-xl border border-input bg-card px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all duration-200 shadow-soft hover:border-primary/30 appearance-none cursor-pointer"
            >
              <option value="">Selecione</option>
              <option value="ate-500k">Até R$ 500 mil</option>
              <option value="500k-1m">R$ 500 mil - R$ 1 milhão</option>
              <option value="1m-5m">R$ 1 milhão - R$ 5 milhões</option>
              <option value="5m-10m">R$ 5 milhões - R$ 10 milhões</option>
              <option value="acima-10m">Acima de R$ 10 milhões</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="segment" className="text-sm font-medium text-foreground">
              Segmento
            </label>
            <select
              id="segment"
              name="segment"
              value={formData.segment}
              onChange={handleChange}
              required
              className="flex h-12 w-full rounded-xl border border-input bg-card px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all duration-200 shadow-soft hover:border-primary/30 appearance-none cursor-pointer"
            >
              <option value="">Selecione</option>
              <option value="advogado">Advogado</option>
              <option value="contador">Contador</option>
              <option value="consultor">Consultor Empresarial</option>
              <option value="empresario">Empresário</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          variant="hero"
          size="xl"
          className="w-full mt-6"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Quero ser parceiro
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default PartnerForm;
