import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap } from "lucide-react";

export const PricingOffer = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="bg-gradient-to-b from-primary/10 via-card to-card border border-primary/30 rounded-2xl p-6 md:p-10 text-center shadow-lg">
          {/* Price Anchor */}
          <div className="mb-5">
            <p className="text-muted-foreground text-sm mb-1">
              Valor real deste material:
            </p>
            <p className="text-xl text-muted-foreground line-through decoration-primary/50">
              R$ 47,00
            </p>
          </div>

          {/* Special Price */}
          <div className="mb-6">
            <p className="text-xs text-primary uppercase tracking-wider font-medium mb-2">
              Preço especial — só agora
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-base text-muted-foreground">R$</span>
              <span className="font-display text-5xl md:text-6xl font-bold text-gradient-gold">
                19
              </span>
              <span className="text-xl text-primary">,90</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="gold" size="xl" className="w-full max-w-sm mb-5">
            <Zap className="w-5 h-5" />
            SIM, QUERO ADICIONAR
          </Button>

          {/* Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Acesso imediato</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>PDF para download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
