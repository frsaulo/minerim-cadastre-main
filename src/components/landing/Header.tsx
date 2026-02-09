import { MapPin } from "lucide-react";
import logoImg from "@/assets/minerindaband.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffbe1a] backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="MinerindaBand"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-2 text-primary-foreground/80 text-sm">
          <MapPin className="w-4 h-4 text-[#663605]" />
          <span>Bandeira do Sul, MG</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-primary-foreground/80 hover:text-white transition-colors"
          >
            Sobre
          </a>
          <a
            href="#diferenciais"
            className="text-primary-foreground/80 hover:text-white transition-colors"
          >
            Diferenciais
          </a>
          <a
            href="#representante"
            className="text-primary-foreground/80 hover:text-white transition-colors"
          >
            Seja Representante
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
