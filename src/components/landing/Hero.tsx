import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner.jpeg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${bannerImage})`
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-golden font-medium text-lg mb-4 tracking-wide">
            Tradição Mineira desde sempre
          </p>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight text-secondary">
            Pão de Queijo
            <span className="block text-golden font-sans">MINERINDABAND</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed text-secondary">
            Fabricamos pães de queijo artesanais com a autêntica receita mineira. 
            Qualidade, sabor e tradição em cada mordida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#representante">Seja um Representante</a>
            </Button>
            
            <Button variant="outline" size="xl" className="border-muted-foreground/50 text-muted-foreground hover:bg-muted-foreground/10 hover:text-muted-foreground" asChild>
              <a href="#sobre">Conheça Nossa História</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-golden rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;