export const UpsellHero = () => {
  return (
    <section className="py-12 md:py-16 animate-fade-in">
      <div className="container text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-xs font-medium text-gold uppercase tracking-wider">
            Oferta Exclusiva Pós-Compra
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
          Sua assinatura ainda não{" "}
          <span className="text-gradient-gold italic">comunica</span>{" "}
          quem você é.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
          Este material é para quem quer ir além da letra bonita — e construir uma{" "}
          <span className="text-foreground font-medium">identidade visual que impõe respeito</span>.
        </p>
      </div>
    </section>
  );
};
