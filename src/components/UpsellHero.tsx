import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Emotional Headline */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          A sua assinatura ainda{" "}
          <span className="text-destructive italic">envergonha você</span>{" "}
          em documentos importantes?
        </h1>

        {/* Subheadline - Pain point */}
        <p className="text-center text-muted-foreground text-sm md:text-base mb-5 max-w-lg mx-auto">
          Toda vez que você assina um contrato, um cheque ou um documento oficial, 
          você <span className="text-foreground font-medium">hesita</span>. 
          Você sabe que sua assinatura não transmite quem você realmente é.
        </p>

        {/* Price Anchor */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-base">
            Exclusivo de{" "}
            <span className="line-through text-destructive">R$47,00</span>{" "}
            por apenas{" "}
            <span className="text-primary font-bold text-xl">R$19,90!</span>
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <img 
            src={signatureHero} 
            alt="Mão assinando documento com caneta tinteiro de luxo" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
