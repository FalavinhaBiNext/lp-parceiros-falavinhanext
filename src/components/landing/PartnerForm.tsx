import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Building2Icon, DollarSignIcon, Loader2, MailIcon, Package2Icon, PackageCheckIcon, PackageMinusIcon, PackageOpenIcon, PhoneIcon, User2Icon } from "lucide-react";
import InputMask from "react-input-mask";
import axios from 'axios';
import { toast } from 'react-toastify';
import TagManager from 'react-gtm-module';

const PartnerForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    faturamento: "",
    segmento: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const gotToAgradecimento = () => {
    navigate("/obrigado");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const newData = {
        ...formData,
        origem: 'LP Parceria Falavinha Next',
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'Não Informado',
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'Não Informado',
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'Não Informado',
        utm_content: new URLSearchParams(window.location.search).get('utm_content') || 'Não Informado',
        utm_term: new URLSearchParams(window.location.search).get('utm_term') || 'Não Informado',
      };

      const apiFalavinhaProducao = 'https://api.falavinha.com.br/api/v1/leads/create';
      const webhookProducao = 'https://falavinha.app.n8n.cloud/webhook/tributario';

      const response = await axios.post('https://tributario.falavinhanext.com.br/api/api/v1/leads/create', newData);
      console.log(response, "RESPONSE");
      
      // await axios.post(webhookProducao, newData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      toast.success("Cadastro realizado com sucesso!");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        faturamento: "",
        segmento: "",
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
        utm_content: "",
        utm_term: "",
      });

      TagManager.dataLayer({
        dataLayer: { event: "Formulario_submitido", form_name: "Formulario" },
      });
      gotToAgradecimento();
    }
    catch(error) {
      toast.error("Ocorreu um erro ao cadastrar. Por favor, tente novamente.");
    }
    finally {
      setIsLoading(false);
    }
  };

  console.log("FORMDATA", formData);

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
          <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <User2Icon className="w-5 h-5" />
            Nome completo
          </label>
          <Input
            id="nome"
            name="nome"
            type="text"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground">
              <MailIcon className="w-5 h-5" />
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
            <label htmlFor="telefone" className="flex items-center gap-2 text-sm font-medium text-foreground">
              <PhoneIcon className="w-5 h-5" />
              Telefone
            </label>
            <InputMask
              id="telefone"
              className="flex h-12 w-full rounded-xl border border-input bg-card px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all duration-200 shadow-soft hover:border-primary/30 appearance-none"
              name="telefone"
              mask="(99) 99999-9999"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Building2Icon className="w-5 h-5" />
            Nome da Empresa
          </label>
          <Input
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Sua empresa"
            value={formData.empresa}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="revenue" className="flex items-center gap-2 text-sm font-medium text-foreground">
              <DollarSignIcon className="w-5 h-5" />
              Faturamento Anual
            </label>
            <select
              id="faturamento"
              name="faturamento"
              value={formData.faturamento}
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
            <label htmlFor="segment" className="flex items-center gap-2 text-sm font-medium text-foreground">
              <PackageCheckIcon className="w-5 h-5" />
              Segmento
            </label>
            <select
              id="segmento"
              name="segmento"
              value={formData.segmento}
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
