import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Opening hook */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Antes de seguir.
        </h1>

        <div className="max-w-lg mx-auto text-center space-y-4 mb-6">
          <p className="text-muted-foreground text-sm md:text-base">
            Isso que você está vendo agora não aparece depois.
          </p>

          <p className="text-foreground text-sm md:text-base font-medium">
            Sua letra vai evoluir com o que você comprou.
          </p>

          <p className="text-muted-foreground text-sm md:text-base">
            Mas a sua assinatura só muda se você tratar ela separadamente.
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
