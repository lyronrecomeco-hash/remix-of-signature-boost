import { AlertBanner } from "@/components/AlertBanner";
import { UpsellHero } from "@/components/UpsellHero";
import { ContextBlock } from "@/components/ContextBlock";
import { BenefitsList } from "@/components/BenefitsList";
import { PricingOffer } from "@/components/PricingOffer";
import { StickyCTA } from "@/components/StickyCTA";

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
          <BenefitsList />
          <PricingOffer />
        </article>
      </main>

      <footer className="py-4 border-t border-border">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Caligrafia Bíblica. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
};

export default Index;
