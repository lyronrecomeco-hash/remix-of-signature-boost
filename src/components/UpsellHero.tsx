import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Opening hook */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Espera. Isso aqui é uma única vez.
        </h1>

        <div className="max-w-lg mx-auto text-center space-y-4 mb-6">
          <p className="text-foreground text-sm md:text-base font-medium">
            Sua letra vai melhorar com o que você comprou.
          </p>

          <p className="text-muted-foreground text-sm md:text-base">
            Mas sua assinatura? Ela vai continuar a mesma.
          </p>

          <p className="text-foreground text-sm md:text-base font-semibold">
            A não ser que você corrija agora — neste exato momento.
          </p>
        </div>

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
