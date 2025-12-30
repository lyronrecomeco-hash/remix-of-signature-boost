export const AlertBanner = () => {
  return (
    <div className="bg-destructive py-3 px-4 animate-fade-in">
      <div className="container text-center">
        <p className="text-sm font-medium text-destructive-foreground">
          PARE! Sua compra está incompleta.
        </p>
      </div>
    </div>
  );
};
