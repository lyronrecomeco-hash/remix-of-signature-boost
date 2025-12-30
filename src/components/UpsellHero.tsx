import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Headline */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Sua assinatura ainda te{" "}
          <span className="text-destructive italic">envergonha</span>?
        </h1>

        {/* Subheadline */}
        <p className="text-center text-muted-foreground text-sm md:text-base mb-5 max-w-lg mx-auto">
          Sabe aquele momento em que você precisa assinar algo importante e 
          torce pra ninguém reparar no seu rabisco? Isso acaba hoje.
        </p>

        {/* Price Anchor */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-base">
            De{" "}
            <span className="line-through text-destructive">R$47</span>{" "}
            por{" "}
            <span className="text-primary font-bold text-xl">R$19,90</span>
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
