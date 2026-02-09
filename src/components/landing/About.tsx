import { MapPin, Heart, Users } from "lucide-react";
const About = () => {
  return <section id="sobre" className="py-24 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left" style={{
          animationDelay: "0.2s"
        }}>
            <span className="text-golden font-semibold text-sm uppercase tracking-widest">
              Sobre Nós
            </span>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Conheça o <span className="text-golden font-sans">MINERINDABAND</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Localizado no sul de Minas Gerais, na cidade de Bandeira do Sul, o <span className="font-sans">MINERINDABAND</span> nasceu da paixão pela culinária mineira e pelo tradicional pão de queijo. Cada unidade é produzida com ingredientes selecionados e a receita que atravessa gerações.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nossa missão é levar o verdadeiro sabor do pão de queijo mineiro para 
              todo o Brasil, mantendo a qualidade artesanal e o carinho de Minas em 
              cada produto.
            </p>
            
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-golden" />
              <span className="font-medium">
                Av. Santa Terezinha, 106, Centro - Bandeira do Sul, MG
              </span>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background p-8 rounded-2xl shadow-card animate-scale-in" style={{
            animationDelay: "0.3s"
          }}>
              <div className="w-14 h-14 bg-golden/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-golden" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground">Artesanal</p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl shadow-card animate-scale-in" style={{
            animationDelay: "0.4s"
          }}>
              <div className="w-14 h-14 bg-golden/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-golden" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-2">+500</h3>
              <p className="text-muted-foreground">Clientes satisfeitos</p>
            </div>
            
            <div className="col-span-2 bg-primary p-8 rounded-2xl shadow-card animate-scale-in" style={{
            animationDelay: "0.5s"
          }}>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                Tradição Mineira
              </h3>
              <p className="text-primary-foreground/80">
                Receita passada de geração em geração, com o autêntico sabor 
                do pão de queijo de Minas Gerais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;