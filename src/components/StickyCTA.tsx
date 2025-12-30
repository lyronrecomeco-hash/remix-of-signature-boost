import { Button } from "@/components/ui/button";

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="h-4 bg-gradient-to-t from-background to-transparent" />
      
      <div className="bg-background border-t border-border px-4 pb-5 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <p className="text-center text-xs text-muted-foreground mb-2">
          Agora: <span className="text-primary font-bold">R$19,90</span>
        </p>
        
        <Button variant="success" size="lg" className="w-full text-sm">
          Adicionar o Workbook ao meu pedido
        </Button>
      </div>
    </div>
  );
};
