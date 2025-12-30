import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const PricingOffer = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        {/* CTA Button */}
        <Button variant="success" size="xl" className="w-full mb-4">
          <Zap className="w-5 h-5" />
          SIM, QUERO ADICIONAR AO MEU PEDIDO!
        </Button>

        {/* Rejection Link */}
        <div className="text-center">
          <Button variant="subtle" size="sm" className="text-xs">
            Não, prefiro continuar sem transformar minha assinatura.
          </Button>
        </div>
      </div>
    </section>
  );
};
