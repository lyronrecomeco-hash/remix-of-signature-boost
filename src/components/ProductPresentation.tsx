import { BookOpen, Sparkles } from "lucide-react";

export const ProductPresentation = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 border border-gold/30 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-gold" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Workbook da Assinatura Profissional
          </h2>
          
          <p className="text-cream-muted max-w-xl mx-auto">
            O complemento perfeito para o método que você acabou de adquirir. 
            15 a 20 páginas de treino guiado para criar sua assinatura definitiva.
          </p>
        </div>

        <div className="bg-gradient-to-b from-card to-secondary/30 border border-border rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-2 text-gold mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Método Caligrafia Bíblica
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-medium text-foreground mb-4">
                Por que este workbook é diferente?
              </h3>
              <p className="text-cream-muted leading-relaxed">
                Não é um caderno de cópias. É um sistema estruturado que guia você, 
                traço por traço, na construção de uma assinatura que carrega sua 
                identidade com elegância e firmeza.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-medium text-foreground mb-4">
                Para quem é?
              </h3>
              <p className="text-cream-muted leading-relaxed">
                Para quem entende que detalhes constroem reputações. Para quem quer 
                que sua assinatura trabalhe por você — mesmo quando você não está 
                na sala.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
