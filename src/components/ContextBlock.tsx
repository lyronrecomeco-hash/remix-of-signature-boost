export const ContextBlock = () => {
  return (
    <section className="py-12 md:py-16 animate-fade-in-delay">
      <div className="container">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            O problema que ninguém fala
          </h2>
          
          <div className="space-y-5 text-cream-muted leading-relaxed">
            <p>
              Você já reparou como assina documentos importantes? Contratos, registros, 
              acordos que marcam sua vida?
            </p>
            
            <p>
              A maioria das pessoas faz um rabisco automático — sem intenção, sem 
              identidade, sem presença. E depois se perguntam por que não são levadas 
              a sério.
            </p>

            <p className="text-foreground font-medium">
              Não é sobre ter "letra bonita". É sobre ter <span className="text-gold">método</span>.
            </p>

            <p>
              Uma assinatura construída com técnica transmite autoridade antes de você 
              falar uma palavra. É a primeira impressão que fica — e a última que 
              permanece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
