import { BookOpen } from "lucide-react";
import workbookPreview from "@/assets/workbook-preview.jpg";

export const ProductPresentation = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/30 rounded-xl mb-5">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Workbook da Assinatura Profissional
          </h2>
          
          <p className="text-muted-foreground max-w-lg mx-auto">
            O complemento perfeito para o método que você acabou de adquirir. 
            15 a 20 páginas de treino guiado.
          </p>
        </div>

        {/* Product Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <img 
            src={workbookPreview} 
            alt="Workbook de caligrafia aberto com caneta e café" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display text-lg font-medium text-foreground mb-3">
              Por que este workbook é diferente?
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Não é um caderno de cópias. É um sistema estruturado que guia você, 
              traço por traço, na construção de uma assinatura com identidade.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display text-lg font-medium text-foreground mb-3">
              Para quem é?
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Para quem entende que detalhes constroem reputações. Para quem quer 
              que sua assinatura trabalhe por você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
