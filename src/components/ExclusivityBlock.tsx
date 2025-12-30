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
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="bg-gradient-to-br from-gold/5 via-card to-gold/5 border border-gold/20 rounded-2xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
            Por que esta oferta é{" "}
            <span className="text-gradient-gold">exclusiva</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {exclusivityPoints.map((point, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-background/50 border border-border rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 border border-gold/30 rounded-xl mb-4">
                  <point.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-medium text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-cream-muted">
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
