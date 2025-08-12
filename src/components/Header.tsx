import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">Sabor Gourmet</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#cardapio" className="nav-link">Cardápio</a>
              <a href="#sobre" className="nav-link">Sobre Nós</a>
              <a href="#contato" className="nav-link">Contato</a>
              <a href="#reservas" className="nav-link">Reservas</a>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="btn-cta"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido.', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Peça Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#cardapio" className="block px-3 py-2 nav-link">Cardápio</a>
              <a href="#sobre" className="block px-3 py-2 nav-link">Sobre Nós</a>
              <a href="#contato" className="block px-3 py-2 nav-link">Contato</a>
              <a href="#reservas" className="block px-3 py-2 nav-link">Reservas</a>
              <div className="pt-3">
                <Button 
                  className="btn-cta w-full"
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido.', '_blank')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Peça Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;