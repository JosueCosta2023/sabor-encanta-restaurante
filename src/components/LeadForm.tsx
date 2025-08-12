import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preference: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Obrigado pelo seu interesse!",
      description: "Em breve você receberá nossas promoções exclusivas.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", preference: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/20 rounded-full">
                <Gift className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Receba Nossas <span className="text-gradient">Promoções</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cadastre-se e seja o primeiro a saber sobre nossos pratos especiais, 
              promoções exclusivas e eventos gastronômicos.
            </p>
          </div>

          <Card className="card-dish max-w-2xl mx-auto animate-slide-up">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                Ofertas Exclusivas
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Preencha seus dados e ganhe 10% de desconto na primeira compra!
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Telefone (WhatsApp)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground">
                    Preferência de Contato
                  </Label>
                  <Select value={formData.preference} onValueChange={(value) => handleInputChange("preference", value)}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Como prefere ser contatado?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">E-mail</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="both">Ambos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full text-lg py-6"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Quero Receber Promoções
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao se cadastrar, você concorda em receber e-mails promocionais. 
                  Você pode cancelar a qualquer momento.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;