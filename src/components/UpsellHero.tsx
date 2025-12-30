import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Warning */}
        <p className="text-center text-muted-foreground text-sm md:text-base mb-6">
          Depois que você sair desta página, esse material não será oferecido novamente.
        </p>

        {/* Headline */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Sua letra pode evoluir.
        </h1>

        <p className="text-center text-muted-foreground text-sm md:text-base mb-6 max-w-lg mx-auto">
          Mas se sua assinatura continuar a mesma, todo documento importante 
          vai carregar o mesmo traço fraco de sempre.
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
