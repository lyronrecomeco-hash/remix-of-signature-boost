import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap } from "lucide-react";

export const PricingOffer = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="bg-gradient-to-b from-gold/10 via-card to-card border border-gold/30 rounded-3xl p-8 md:p-12 text-center glow-gold">
          {/* Price Anchor */}
          <div className="mb-6">
            <p className="text-cream-muted mb-2">
              Valor real deste material:
            </p>
            <p className="text-2xl text-cream-muted line-through decoration-gold/50">
              R$ 47,00
            </p>
          </div>

          {/* Special Price */}
          <div className="mb-8">
            <p className="text-sm text-gold uppercase tracking-wider font-medium mb-2">
              Preço especial — só agora
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-lg text-cream-muted">R$</span>
              <span className="font-display text-6xl md:text-7xl font-bold text-gradient-gold">
                19
              </span>
              <span className="text-2xl text-gold">,90</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="gold" size="xl" className="w-full max-w-md mb-6">
            <Zap className="w-5 h-5" />
            SIM, QUERO ADICIONAR AO MEU PEDIDO
          </Button>

          {/* Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-cream-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Acesso imediato</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>PDF para download</span>
            </div>
            <span className="hidden sm:inline text-border">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Compra única</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
