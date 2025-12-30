import { Button } from "@/components/ui/button";

export const PricingOffer = () => {
  return (
    <section className="py-8 md:py-10 pb-36 md:pb-10">
      <div className="container text-center">
        {/* Price anchor */}
        <p className="text-muted-foreground text-sm mb-2">
          Valor normal: <span className="line-through">R$47</span>
        </p>
        
        {/* Special price */}
        <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
          R$19,90
        </p>
        
        <p className="text-muted-foreground text-xs mb-6">
          Só hoje. Só agora. Só pra você.
        </p>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="success" size="xl" className="w-full mb-4">
            QUERO TRANSFORMAR MINHA ASSINATURA
          </Button>

          <Button variant="subtle" size="sm" className="text-xs">
            Não, minha assinatura tá boa assim
          </Button>
        </div>

        {/* Mobile rejection */}
        <div className="md:hidden">
          <Button variant="subtle" size="sm" className="text-xs">
            Não, tá bom assim
          </Button>
        </div>
      </div>
    </section>
  );
};
