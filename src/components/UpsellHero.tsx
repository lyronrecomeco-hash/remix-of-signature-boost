import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Congratulation + Hook */}
        <div className="text-center mb-4">
          <span className="inline-block bg-success/10 text-success text-xs font-medium px-3 py-1 rounded-full mb-4">
            Compra confirmada!
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Espera, antes de ir...
        </h1>

        {/* Subheadline */}
        <p className="text-center text-muted-foreground text-sm md:text-base mb-5 max-w-lg mx-auto">
          Você acabou de dar o primeiro passo pra melhorar sua caligrafia. 
          Mas e a sua <span className="text-foreground font-medium">assinatura</span>? 
          Ela ainda vai continuar a mesma?
        </p>

        {/* Price Anchor */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-base">
            Adicione por apenas{" "}
            <span className="text-primary font-bold text-xl">R$19,90</span>
            <span className="text-xs text-muted-foreground ml-1">(valor original: R$47)</span>
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <img 
            src={signatureHero} 
            alt="Assinatura elegante sendo feita" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
