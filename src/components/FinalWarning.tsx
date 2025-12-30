import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export const FinalWarning = () => {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <div className="container text-center">
        <div className="max-w-xl mx-auto">
          <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 md:p-8 mb-8">
            <XCircle className="w-10 h-10 text-destructive mx-auto mb-4" />
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
              Se você sair agora, esta oferta desaparece.
            </h3>
            <p className="text-cream-muted">
              Não existe botão de voltar. Não existe segunda chance. 
              A decisão é simples: ou você adiciona agora, ou segue sem.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Se preferir continuar apenas com o produto principal, clique abaixo:
          </p>

          <Button variant="subtle" size="lg">
            Não, obrigado. Quero seguir sem o workbook.
          </Button>
        </div>
      </div>
    </section>
  );
};
