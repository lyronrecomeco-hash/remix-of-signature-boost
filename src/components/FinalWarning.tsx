import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

export const FinalWarning = () => {
  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="container text-center">
        <div className="max-w-md mx-auto">
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-5 md:p-6 mb-6">
            <XCircle className="w-8 h-8 text-destructive mx-auto mb-3" />
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
              Se você sair agora, esta oferta desaparece.
            </h3>
            <p className="text-sm text-muted-foreground">
              Não existe segunda chance. A decisão é simples: ou você adiciona agora, ou segue sem.
            </p>
          </div>

          <p className="text-xs text-muted-foreground mb-4">
            Se preferir continuar apenas com o produto principal:
          </p>

          <Button variant="subtle" size="default">
            Não, obrigado. Seguir sem o workbook.
          </Button>
        </div>
      </div>
    </section>
  );
};
