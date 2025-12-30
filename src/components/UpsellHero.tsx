import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Headline */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Sua assinatura ainda não{" "}
          <span className="text-gradient-gold italic">comunica</span>{" "}
          quem você é.
        </h1>

        {/* Price Anchor */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-base">
            Exclusivo de{" "}
            <span className="line-through text-destructive">R$47,00</span>{" "}
            por{" "}
            <span className="text-primary font-bold text-lg">R$19,90!</span>
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
