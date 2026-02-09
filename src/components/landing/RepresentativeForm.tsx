import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { Send, User, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const representativeSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter pelo menos 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone deve ter pelo menos 10 dígitos").max(20, "Telefone muito longo"),
  city: z.string().trim().min(2, "Cidade deve ter pelo menos 2 caracteres").max(100, "Nome da cidade muito longo"),
  state: z.string().trim().min(2, "Estado inválido").max(2, "Use a sigla do estado (ex: MG)"),
  message: z.string().trim().max(1000, "Mensagem muito longa").optional(),
});

type FormData = z.infer<typeof representativeSchema>;

const RepresentativeForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = representativeSchema.parse(formData);
      
      // Call edge function to send email
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData
      });
      
      if (error) {
        console.error("Error sending email:", error);
        throw new Error("Erro ao enviar o cadastro. Tente novamente.");
      }
      
      if (!data?.success) {
        throw new Error(data?.error || "Erro ao enviar o cadastro.");
      }
      
      toast({
        title: "Cadastro enviado com sucesso! ✓",
        description: "Em breve entraremos em contato com você.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        message: "",
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Erro no formulário",
          description: "Por favor, verifique os campos destacados.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: error instanceof Error ? error.message : "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="representante" className="py-24 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-golden font-semibold text-sm uppercase tracking-widest">
              Faça Parte do Time
            </span>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Seja um <span className="text-golden">Representante</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quer representar o <span className="font-sans">MINERINDABAND</span> na sua cidade? Preencha o formulário 
              abaixo e nossa equipe entrará em contato!
            </p>
          </div>
          
          <form 
            onSubmit={handleSubmit}
            className="bg-background p-8 md:p-12 rounded-3xl shadow-elevated"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-foreground font-medium">
                  <User className="w-4 h-4 text-golden" />
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-destructive text-sm">{errors.name}</p>
                )}
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium">
                  <Mail className="w-4 h-4 text-golden" />
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-sm">{errors.email}</p>
                )}
              </div>
              
              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-medium">
                  <Phone className="w-4 h-4 text-golden" />
                  Telefone/WhatsApp *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm">{errors.phone}</p>
                )}
              </div>
              
              {/* Cidade e Estado */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="city" className="flex items-center gap-2 text-foreground font-medium">
                    <MapPin className="w-4 h-4 text-golden" />
                    Cidade *
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Sua cidade"
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && (
                    <p className="text-destructive text-sm">{errors.city}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-foreground font-medium">
                    UF *
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="MG"
                    maxLength={2}
                    className={`uppercase ${errors.state ? "border-destructive" : ""}`}
                  />
                  {errors.state && (
                    <p className="text-destructive text-sm">{errors.state}</p>
                  )}
                </div>
              </div>
              
              {/* Mensagem */}
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2 text-foreground font-medium">
                  <MessageSquare className="w-4 h-4 text-golden" />
                  Mensagem (opcional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos um pouco sobre você e sua experiência..."
                  rows={4}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm">{errors.message}</p>
                )}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                type="submit" 
                variant="golden" 
                size="xl"
                disabled={isSubmitting}
                className="min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Cadastro
                  </>
                )}
              </Button>
              
              <p className="text-muted-foreground text-sm mt-4">
                * Campos obrigatórios
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RepresentativeForm;
