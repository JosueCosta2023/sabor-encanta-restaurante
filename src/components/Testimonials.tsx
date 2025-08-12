import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente há 3 anos",
    content: "Simplesmente excepcional! Cada prato é uma obra de arte. O atendimento é impecável e o ambiente é acolhedor. Recomendo para todos os amantes da boa gastronomia.",
    rating: 5,
    avatar: "M.S"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Chef e Cliente",
    content: "Como chef, posso afirmar que a qualidade dos ingredientes e o preparo dos pratos são de altíssimo nível. O Sabor Gourmet superou todas as minhas expectativas.",
    rating: 5,
    avatar: "J.S"
  },
  {
    id: 3,
    name: "Ana Oliveira",
    role: "Food Blogger",
    content: "Uma experiência gastronômica inesquecível! Cada detalhe é pensado com carinho. Definitivamente um dos melhores restaurantes da cidade.",
    rating: 5,
    avatar: "A.O"
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Cliente VIP",
    content: "Já experimentei muitos restaurantes, mas o Sabor Gourmet tem algo especial. A paixão pela culinária é evidente em cada prato. Simplesmente perfeito!",
    rating: 5,
    avatar: "C.M"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O que Nossos <span className="text-gradient">Clientes</span> Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre nossa experiência gastronômica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card text-center animate-slide-up">
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-primary/30" />
            </div>

            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
                "{currentTestimonial.content}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                  {currentTestimonial.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevious}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={goToNext}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;