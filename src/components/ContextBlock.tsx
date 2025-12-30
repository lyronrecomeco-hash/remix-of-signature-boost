export const ContextBlock = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <div className="max-w-lg mx-auto text-center space-y-4">
          <p className="text-foreground text-sm md:text-base font-semibold">
            A letra é o que você escreve para os outros.{" "}
            <span className="text-primary">A assinatura é quem você é no papel.</span>
          </p>
          
          <p className="text-muted-foreground text-sm md:text-base">
            Ela está no seu RG, nos contratos que você assina, no final de uma carta importante. É o seu{" "}
            <span className="text-foreground font-medium">selo de autoridade</span>.
          </p>

          <p className="text-muted-foreground text-sm md:text-base">
            Se a sua assinatura é insegura, ela comunica insegurança.{" "}
            <span className="text-foreground font-semibold">Se ela é feia, ela apaga todo o esforço da sua letra bonita.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
