import { Button } from "@/components/ui/button";

export const PricingOffer = () => {
  return (
    <section className="py-8 md:py-10 pb-36 md:pb-10">
      <div className="container text-center">
        {/* Price */}
        <div className="mb-6">
          <p className="text-muted-foreground text-sm mb-1">
            Valor normal: <span className="line-through">R$47</span>
          </p>
          <p className="text-foreground">
            Agora, junto com seu pedido:
          </p>
          <p className="font-display text-4xl md:text-5xl font-bold text-primary mt-2">
            R$19,90
          </p>
        </div>

        {/* Final push */}
        <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
          Menos de um café por dia durante uma semana. 
          E sua assinatura muda pra sempre.
        </p>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="success" size="xl" className="w-full mb-4">
            QUERO O MANUAL DA ASSINATURA
          </Button>

          <Button variant="subtle" size="sm" className="text-xs">
            Não, vou continuar com minha assinatura atual
          </Button>
        </div>

        {/* Mobile rejection */}
        <div className="md:hidden">
          <Button variant="subtle" size="sm" className="text-xs">
            Não quero melhorar minha assinatura
          </Button>
        </div>
      </div>
    </section>
  );
};
