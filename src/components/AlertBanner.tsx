import { AlertTriangle } from "lucide-react";

export const AlertBanner = () => {
  return (
    <div className="bg-destructive py-3 px-4 animate-fade-in">
      <div className="container flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="h-4 w-4 text-destructive-foreground flex-shrink-0" />
        <p className="text-sm font-medium text-destructive-foreground">
          <span className="font-bold">ATENÇÃO:</span> Esta oferta aparece{" "}
          <span className="underline underline-offset-2">uma única vez</span>. 
          Se você sair desta página, ela desaparece para sempre.
        </p>
      </div>
    </div>
  );
};
