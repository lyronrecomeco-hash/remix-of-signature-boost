import { Button } from "@/components/ui/button";

export const PricingOffer = () => {
  return (
    <section className="py-8 md:py-10 pb-36 md:pb-10">
      <div className="container text-center">
        {/* Price anchor */}
        <p className="text-muted-foreground text-sm mb-1">
          Preço normal: <span className="line-through">R$47</span>
        </p>
        
        {/* Special price */}
        <p className="text-foreground text-sm mb-1">
          Agora, somente nesta página:
        </p>
        <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
          R$19,90
        </p>

        {/* Final warning */}
        <p className="text-destructive text-sm font-medium mb-6">
          Se você sair agora, perde o acesso a essa oferta.
        </p>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="success" size="xl" className="w-full mb-4">
            Adicionar o Workbook de Assinatura Profissional ao meu pedido
          </Button>

          <Button variant="subtle" size="sm" className="text-xs">
            Não, obrigado
          </Button>
        </div>

        {/* Mobile rejection */}
        <div className="md:hidden">
          <Button variant="subtle" size="sm" className="text-xs">
            Não, obrigado
          </Button>
        </div>
      </div>
    </section>
  );
};
