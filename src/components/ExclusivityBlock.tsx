import { Lock, Clock, Star } from "lucide-react";

const exclusivityPoints = [
  {
    icon: Lock,
    title: "Não é vendido separadamente",
    description: "Este material não está disponível em nenhum outro lugar."
  },
  {
    icon: Clock,
    title: "Só aparece agora",
    description: "Esta oferta existe apenas neste momento pós-compra."
  },
  {
    icon: Star,
    title: "Para quem leva a sério",
    description: "Criado para quem entende o valor de uma apresentação impecável."
  }
];

export const ExclusivityBlock = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div className="bg-gradient-to-br from-primary/5 via-card to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground text-center mb-8">
            Por que esta oferta é{" "}
            <span className="text-gradient-gold">exclusiva</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {exclusivityPoints.map((point, index) => (
              <div 
                key={index}
                className="text-center p-5 bg-background border border-border rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg mb-3">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground text-sm mb-1">
                  {point.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
