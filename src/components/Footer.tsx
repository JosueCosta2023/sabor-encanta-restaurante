import enterpriceData from "@/variables";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-4">{enterpriceData.razaoSocial}</h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Há mais de 5 anos criando experiências gastronômicas únicas 
              com ingredientes selecionados e muito amor pela culinária.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/60 hover:text-primary transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/60 hover:text-primary transition-colors transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">{enterpriceData.telefone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">{enterpriceData.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-background/80">
                  {enterpriceData.endereco[0]}<br />
                  {enterpriceData.endereco[1]}
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold mb-4 text-primary">Horários</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-background/80">{enterpriceData.horarioFuncionamento[0]}</span>
              </div>
              <div className="text-background/60 ml-6 mb-2">{enterpriceData.horarioFuncionamento[1]}</div>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-lg font-semibold mb-4 text-primary">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#cardapio" className="block text-background/80 hover:text-primary transition-colors">
                Cardápio
              </a>
              <a href="#sobre" className="block text-background/80 hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#contato" className="block text-background/80 hover:text-primary transition-colors">
                Contato
              </a>
              <a 
                href={`https://wa.me/55${enterpriceData.telefone}?text=Olá! Gostaria de fazer uma reserva.`} 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-background/80 hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2025 Restaurante São José. Todos os direitos reservados. 
            Desenvolvido com ❤️ por <a href="https://github.com/JosueCosta2023" target="_blank" className="text-primary">Josué Ocanha Costa</a> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;