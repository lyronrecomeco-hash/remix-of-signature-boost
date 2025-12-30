import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-6 md:py-10 animate-fade-in">
      <div className="container">
        {/* Aggressive headline */}
        <div className="bg-foreground text-background py-4 px-4 mb-6 -mx-4 md:mx-0 md:rounded-lg">
          <h1 className="font-display text-lg md:text-2xl lg:text-3xl font-bold leading-tight text-center uppercase">
            Sua letra vai melhorar... Mas sua assinatura vai continuar um <span className="text-primary">RABISCO FEIO!</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-6">
          <p className="text-primary font-bold text-sm md:text-base uppercase tracking-wide">
            Garanta Acesso Imediato + Bônus Exclusivo
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-muted-foreground line-through text-sm">De R$47,00</span>
            <span className="text-foreground font-bold">por</span>
            <span className="text-success font-bold text-2xl md:text-3xl">R$19,90</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-xl border-4 border-primary/20">
          <img 
            src={signatureHero} 
            alt="Manual de Assinatura Profissional" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
