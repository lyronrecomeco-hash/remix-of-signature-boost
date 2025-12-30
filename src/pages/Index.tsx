import { AlertBanner } from "@/components/AlertBanner";
import { UpsellHero } from "@/components/UpsellHero";
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
          <BenefitsList />
          <PricingOffer />
        </article>
      </main>

      <footer className="py-4 border-t border-border pb-28 md:pb-4">
        <div className="container">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Caligrafia Bíblica. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Sticky CTA for mobile */}
      <StickyCTA />
    </div>
  );
};

export default Index;
