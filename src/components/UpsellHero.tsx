import signatureHero from "@/assets/signature-hero.jpg";

export const UpsellHero = () => {
  return (
    <section className="py-8 md:py-12 animate-fade-in">
      <div className="container">
        {/* Opening hook */}
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-center mb-4">
          Sua letra vai ficar linda, mas sua assinatura continua sendo um{" "}
          <span className="text-destructive">"garrancho de criança"</span>?
        </h1>

        <div className="max-w-lg mx-auto text-center space-y-4 mb-6">
          <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-wide">
            O choque de realidade
          </p>

          <p className="text-foreground text-sm md:text-base font-medium">
            Parabéns pela compra. De verdade. Em poucos dias, sua caligrafia será outra.
          </p>

          <p className="text-muted-foreground text-sm md:text-base">
            Mas eu preciso ser sincero com você: de nada adianta escrever como um mestre se, na hora de assinar um documento, você ainda sente aquela{" "}
            <span className="text-foreground font-semibold">pontada de vergonha</span>.
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
