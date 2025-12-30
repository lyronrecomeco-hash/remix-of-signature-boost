import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient fade effect */}
      <div className="h-6 bg-gradient-to-t from-background to-transparent" />
      
      <div className="bg-background border-t border-border px-4 pb-4 pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        {/* Emotional micro-copy */}
        <p className="text-center text-xs text-muted-foreground mb-2 italic">
          Quantas vezes você já assinou algo importante e sentiu vergonha?
        </p>
        
        {/* CTA Button */}
        <Button variant="success" size="xl" className="w-full text-base">
          <Zap className="w-5 h-5" />
          SIM, QUERO TRANSFORMAR MINHA ASSINATURA!
        </Button>
      </div>
    </div>
  );
};
