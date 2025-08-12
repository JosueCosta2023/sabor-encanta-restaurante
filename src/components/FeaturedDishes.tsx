import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const dishes = [
  {
    id: 1,
    name: "Salmão Grelhado Premium",
    description: "Salmão fresco grelhado com molho de ervas finas e vegetais da estação",
    price: "R$ 45,90",
    image: dish1,
    rating: 5,
  },
  {
    id: 2,
    name: "Pasta Italiana Especial",
    description: "Massa artesanal com molho de tomates frescos, manjericão e queijo parmesão",
    price: "R$ 32,90",
    image: dish2,
    rating: 5,
  },
  {
    id: 3,
    name: "Picanha Noble",
    description: "Picanha premium na brasa acompanhada de farofa especial e vinagrete",
    price: "R$ 52,90",
    image: dish3,
    rating: 5,
  },
];

const FeaturedDishes = () => {
  return (
    <section id="cardapio" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pratos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos pratos mais pedidos, preparados com ingredientes selecionados 
            e técnicas culinárias refinadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={dish.id} 
              className="card-dish animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-sm">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {dish.rating}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {dish.price}
                  </span>
                  <Button 
                    className="btn-cta"
                    onClick={() => window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de pedir: ${dish.name}`, '_blank')}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Peça Agora
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de ver o cardápio completo.', '_blank')}
          >
            Ver Cardápio Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;