import { AlertTriangle, XCircle } from "lucide-react";

export const AlertBanner = () => {
  return (
    <div className="bg-destructive py-3 px-4 animate-fade-in">
      <div className="container">
        <div className="flex items-center justify-center gap-2">
          <XCircle className="w-5 h-5 text-destructive-foreground animate-pulse flex-shrink-0" />
          <p className="text-xs md:text-sm font-bold text-destructive-foreground">
            Não feche esta página ou sua compra pode apresentar <span className="underline">ERRO!</span>
          </p>
        </div>
      </div>
    </div>
  );
};
