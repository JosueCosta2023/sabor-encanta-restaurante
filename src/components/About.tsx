import { Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Nossa <span className="text-gradient">História</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Há mais de 15 anos, o <strong>Sabor Gourmet</strong> nasceu do sonho de compartilhar 
              sabores únicos e criar momentos especiais através da gastronomia. Nossa paixão pela 
              culinária nos levou a buscar sempre os melhores ingredientes e técnicas.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acreditamos que cada prato conta uma história e cada refeição é uma oportunidade 
              de criar memórias inesquecíveis. Nossa equipe dedica-se diariamente a oferecer 
              uma experiência gastronômica excepcional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-primary/5 rounded-lg animate-bounce-in">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Paixão</h4>
                <p className="text-sm text-muted-foreground">Por cada prato</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Qualidade</h4>
                <p className="text-sm text-muted-foreground">Sem compromisso</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Tradição</h4>
                <p className="text-sm text-muted-foreground">Familiar</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-white/90 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Proporcionar experiências culinárias excepcionais, criando momentos únicos 
                  através de sabores autênticos, ingredientes frescos e um atendimento que 
                  supera expectativas."
                </p>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-primary">15+</h4>
                  <p className="text-sm text-muted-foreground">Anos de experiência</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-primary">10k+</h4>
                  <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;