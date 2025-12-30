import { Button } from "@/components/ui/button";

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient fade effect */}
      <div className="h-4 bg-gradient-to-t from-background to-transparent" />
      
      <div className="bg-background border-t border-border px-4 pb-5 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        {/* Emotional micro-copy */}
        <p className="text-center text-xs text-muted-foreground mb-3">
          Você já sabe que precisa disso.
        </p>
        
        {/* CTA Button */}
        <Button variant="success" size="lg" className="w-full">
          SIM, EU QUERO!
        </Button>
      </div>
    </div>
  );
};
