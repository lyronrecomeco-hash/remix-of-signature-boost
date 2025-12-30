import { AlertTriangle } from "lucide-react";

export const AlertBanner = () => {
  return (
    <div className="bg-destructive py-3 px-4 animate-fade-in">
      <div className="container">
        <div className="flex items-center justify-center gap-3">
          <AlertTriangle className="w-5 h-5 text-destructive-foreground animate-pulse" />
          <p className="text-sm md:text-base font-bold text-destructive-foreground uppercase tracking-wide">
            Se você sair dessa página, não vai ver de novo!
          </p>
          <AlertTriangle className="w-5 h-5 text-destructive-foreground animate-pulse" />
        </div>
      </div>
    </div>
  );
};
