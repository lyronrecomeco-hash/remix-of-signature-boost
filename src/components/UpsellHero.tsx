import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Hook */}
        <p className="text-center text-muted-foreground text-sm mb-3">
          Antes de você ir...
        </p>

        {/* Headline */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-5">
          Sua letra vai mudar.
          <br />
          <span className="text-primary italic">E sua assinatura?</span>
        </h1>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <img 
            src={signatureHero} 
            alt="Assinatura profissional" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Context */}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            Você acabou de investir na sua caligrafia. Daqui a pouco sua letra 
            vai estar diferente, mais bonita, mais confiante.
          </p>
          <p className="text-foreground text-sm md:text-base font-medium">
            Mas toda vez que você for assinar algo importante, vai ser o mesmo 
            rabisco inseguro de sempre?
          </p>
        </div>
      </div>
    </section>
  );
};
