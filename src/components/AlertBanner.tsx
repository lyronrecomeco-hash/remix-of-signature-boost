import { AlertTriangle } from "lucide-react";

export const AlertBanner = () => {
  return (
    <div className="bg-destructive py-4 px-4 animate-fade-in">
      <div className="container">
        <div className="flex items-center justify-center gap-3 mb-2">
          <AlertTriangle className="w-5 h-5 text-destructive-foreground animate-pulse" />
          <p className="text-sm md:text-base font-bold text-destructive-foreground uppercase tracking-wide">
            Se você sair dessa página, não vai ver de novo!
          </p>
          <AlertTriangle className="w-5 h-5 text-destructive-foreground animate-pulse" />
        </div>
        <p className="text-center text-xs md:text-sm text-destructive-foreground/90">
          Essa é a única chance de corrigir sua assinatura junto com sua caligrafia.
        </p>
      </div>
    </div>
  );
};
