import { Button } from "@/components/ui/button";

export const PricingOffer = () => {
  return (
    <section className="py-8 md:py-10 pb-36 md:pb-10">
      <div className="container">
        {/* Emotional closing */}
        <div className="bg-card border border-border rounded-xl p-5 mb-6 text-center">
          <p className="text-foreground font-medium mb-2">
            Você chegou até aqui por um motivo.
          </p>
          <p className="text-muted-foreground text-sm">
            Lá no fundo você sabe que sua assinatura não te representa. 
            E por menos de vinte reais, você pode mudar isso hoje.
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="success" size="xl" className="w-full mb-4">
            SIM, EU QUERO!
          </Button>

          <div className="text-center">
            <Button variant="subtle" size="sm" className="text-xs">
              Não, prefiro continuar assim
            </Button>
          </div>
        </div>

        {/* Mobile rejection */}
        <div className="md:hidden text-center">
          <Button variant="subtle" size="sm" className="text-xs">
            Não, obrigado
          </Button>
        </div>
      </div>
    </section>
  );
};
