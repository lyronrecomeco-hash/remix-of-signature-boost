import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const PricingOffer = () => {
  return (
    <section className="py-8 md:py-10 pb-32 md:pb-10">
      <div className="container">
        {/* Emotional closing */}
        <div className="bg-card border border-border rounded-xl p-5 mb-6 text-center">
          <p className="text-foreground font-medium mb-2">
            Você chegou até aqui porque sabe que precisa disso.
          </p>
          <p className="text-muted-foreground text-sm">
            Não é sobre caligrafia. É sobre como você se apresenta ao mundo. 
            Cada assinatura é uma primeira impressão — e você só tem uma chance.
          </p>
        </div>

        {/* Desktop CTA - Hidden on mobile */}
        <div className="hidden md:block">
          <Button variant="success" size="xl" className="w-full mb-4">
            <Zap className="w-5 h-5" />
            SIM, QUERO TRANSFORMAR MINHA ASSINATURA!
          </Button>

          {/* Rejection Link */}
          <div className="text-center">
            <Button variant="subtle" size="sm" className="text-xs">
              Não, prefiro continuar com uma assinatura que não me representa.
            </Button>
          </div>
        </div>

        {/* Mobile rejection - visible only on mobile, above sticky CTA */}
        <div className="md:hidden text-center">
          <Button variant="subtle" size="sm" className="text-xs">
            Não, prefiro continuar assim.
          </Button>
        </div>
      </div>
    </section>
  );
};
