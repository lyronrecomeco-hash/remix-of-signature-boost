export const AlertBanner = () => {
  return (
    <div className="bg-destructive py-3 px-4 animate-fade-in">
      <div className="container text-center">
        <p className="text-sm font-medium text-destructive-foreground">
          Essa é a única chance de corrigir sua assinatura junto com sua caligrafia.
        </p>
      </div>
    </div>
  );
};
