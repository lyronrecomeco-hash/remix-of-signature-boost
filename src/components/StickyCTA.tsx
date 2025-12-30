import { Button } from "@/components/ui/button";

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="h-3 bg-gradient-to-t from-background to-transparent" />
      
      <div className="bg-background border-t-2 border-success px-4 pb-5 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-muted-foreground line-through text-xs">R$47</span>
          <span className="text-success font-bold text-lg">R$19,90</span>
        </div>
        
        <Button variant="success" size="lg" className="w-full text-sm font-bold uppercase animate-pulse">
          SIM! Quero o Manual Agora
        </Button>
      </div>
    </div>
  );
};
