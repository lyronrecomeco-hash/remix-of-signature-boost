import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Headline */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Você vai aprender caligrafia...
          <br />
          <span className="text-destructive">mas sua assinatura vai continuar feia?</span>
        </h1>

        {/* Subheadline */}
        <p className="text-center text-muted-foreground text-sm md:text-base mb-6 max-w-lg mx-auto">
          Todo mundo vai notar sua letra bonita. Mas na hora de assinar 
          um contrato, um documento, uma proposta... vai ser o mesmo 
          rabisco de sempre?
        </p>

        {/* Hero Image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <img 
            src={signatureHero} 
            alt="Assinatura profissional" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Name */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            Apresentamos
          </p>
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            Manual da Assinatura Profissional
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            O guia definitivo pra você criar uma assinatura que impõe respeito.
          </p>
        </div>
      </div>
    </section>
  );
};
