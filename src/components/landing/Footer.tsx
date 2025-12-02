import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-semibold text-lg">
                Falavinha <span className="text-primary">Next</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Soluções em recuperação tributária com segurança, técnica e eficiência para 
              ampliar as oportunidades do seu negócio.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-background">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <a href="#para-quem" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Para quem é
                </a>
              </li>
              <li>
                <a href="#por-que" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Por que ser parceiro
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#hero-form" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Seja parceiro
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-background">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                contato@falavinhanext.com.br
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-background">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  LGPD
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Falavinha Next. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
