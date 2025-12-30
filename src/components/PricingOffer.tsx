import { Button } from "@/components/ui/button";

export const PricingOffer = () => {
  return (
    <section className="py-8 md:py-10 pb-36 md:pb-10">
      <div className="container">
        {/* Emotional closing */}
        <div className="bg-card border border-border rounded-xl p-5 mb-6 text-center">
          <p className="text-foreground font-medium mb-2">
            Você já investiu na sua caligrafia.
          </p>
          <p className="text-muted-foreground text-sm">
            Por mais R$19,90, você leva o material que vai transformar 
            sua assinatura também. É o complemento perfeito.
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="success" size="xl" className="w-full mb-4">
            ADICIONAR AO MEU PEDIDO
          </Button>

          <div className="text-center">
            <Button variant="subtle" size="sm" className="text-xs">
              Não, seguir só com o curso
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
