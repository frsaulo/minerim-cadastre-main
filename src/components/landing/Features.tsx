import { Award, Truck, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Ingredientes selecionados e processo artesanal garantem o melhor sabor.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente para garantir produtos sempre frescos.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Alimentar",
    description: "Processos rigorosos de higiene e controle de qualidade.",
  },
  {
    icon: Sparkles,
    title: "Receita Exclusiva",
    description: "Fórmula tradicional mineira que faz toda a diferença.",
  },
];

const Features = () => {
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-golden font-semibold text-sm uppercase tracking-widest">
            Diferenciais
          </span>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Por que escolher o <span className="text-golden font-sans">MINERINDABAND?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nosso compromisso é entregar não apenas um produto, mas uma experiência 
            autêntica do melhor pão de queijo mineiro.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-16 h-16 bg-golden/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden/20 transition-colors">
                <feature.icon className="w-8 h-8 text-golden" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="font-heading text-2xl text-foreground mb-4">
            Quer levar nossos produtos para sua região?
          </p>
          <p className="text-golden font-semibold text-lg">
            Cadastre-se como representante!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
