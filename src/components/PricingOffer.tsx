import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export const PricingOffer = () => {
  return (
    <section className="py-6 md:py-8 pb-36 md:pb-8">
      <div className="container text-center">
        {/* Price box */}
        <div className="bg-gradient-to-b from-success/20 to-success/5 border-2 border-success rounded-xl p-6 mb-6">
          <p className="text-muted-foreground text-sm mb-1">
            De <span className="line-through">R$47,00</span>
          </p>
          <p className="text-foreground font-bold text-sm mb-2">
            Por apenas:
          </p>
          <p className="font-display text-5xl md:text-6xl font-bold text-success mb-2">
            R$19,90
          </p>
          <p className="text-xs text-muted-foreground">
            Pagamento único • Acesso imediato
          </p>
        </div>

        {/* Guarantee */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-success" />
          <p className="text-xs text-muted-foreground">
            Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="success" size="xl" className="w-full mb-3 text-base font-bold uppercase tracking-wide animate-pulse">
            SIM! Quero o Manual de Assinatura Profissional
          </Button>

          <p className="text-destructive text-xs font-medium mb-4">
            ⚠️ Oferta disponível apenas nesta página!
          </p>

          <Button variant="subtle" size="sm" className="text-xs">
            Não, obrigado. Prefiro continuar com meu rabisco.
          </Button>
        </div>

        {/* Mobile rejection */}
        <div className="md:hidden">
          <Button variant="subtle" size="sm" className="text-xs">
            Não, obrigado. Prefiro continuar com meu rabisco.
          </Button>
        </div>
      </div>
    </section>
  );
};
