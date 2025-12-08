import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import TagManager from "react-gtm-module";


declare const fbq: (...args: any[]) => void;

const ThankYou = () => {

  useEffect(() => {
    // Evento do Google Tag Manager
    TagManager.dataLayer({
      dataLayer: {
        event: "page_view",
        page: "/agradecimento",
      },
    });

    // Evento do Facebook Pixel
    if (typeof fbq === "function") {
      fbq("track", "LP Parceria Falavinha Next");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'var(--gradient-hero)' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-10 md:p-16 max-w-2xl w-full text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Success icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-bg shadow-glow">
            <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Obrigado! Recebemos seus dados.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Um de nossos especialistas entrará em contato em breve para iniciar o processo de credenciamento.
            </p>
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Prazo de resposta</p>
                <p className="text-sm text-muted-foreground">Até 48 horas úteis</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Fique atento</p>
                <p className="text-sm text-muted-foreground">Verifique seu e-mail</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="mt-4"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
