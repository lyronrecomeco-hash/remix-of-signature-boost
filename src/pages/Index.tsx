import { AlertBanner } from "@/components/AlertBanner";
import { UpsellHero } from "@/components/UpsellHero";
import { ContextBlock } from "@/components/ContextBlock";
import { ProductPresentation } from "@/components/ProductPresentation";
import { BenefitsList } from "@/components/BenefitsList";
import { ExclusivityBlock } from "@/components/ExclusivityBlock";
import { PricingOffer } from "@/components/PricingOffer";
import { FinalWarning } from "@/components/FinalWarning";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header>
        <AlertBanner />
      </header>

      <main>
        <article>
          <UpsellHero />
          <ContextBlock />
          <ProductPresentation />
          <BenefitsList />
          <ExclusivityBlock />
          <PricingOffer />
        </article>
      </main>

      <footer>
        <FinalWarning />
        
        <div className="py-6 border-t border-border">
          <div className="container">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Caligrafia Bíblica. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
