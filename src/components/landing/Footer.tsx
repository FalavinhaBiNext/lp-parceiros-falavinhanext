import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-4">
      <div className="container mx-auto">
        {/* Bottom */}
        <div className="pt-4 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Falavinha Next. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
