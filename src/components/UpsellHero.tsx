import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Opening hook */}
        <p className="text-center text-primary font-medium text-sm mb-6">
          Isso define como seu nome é visto.
        </p>

        {/* Headline */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Sua letra vai mudar.
        </h1>

        <p className="text-center text-muted-foreground text-base md:text-lg mb-6">
          Mas sua assinatura só muda se você treinar isso.
        </p>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src={signatureHero} 
            alt="Assinatura profissional" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
