import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-10 md:py-14 animate-fade-in">
      <div className="container">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Oferta Exclusiva Pós-Compra
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-center mb-6">
          Sua assinatura ainda não{" "}
          <span className="text-gradient-gold italic">comunica</span>{" "}
          quem você é.
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-center mb-10">
          Este material é para quem quer ir além da letra bonita — e construir uma{" "}
          <span className="text-foreground font-medium">identidade visual que impõe respeito</span>.
        </p>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
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
