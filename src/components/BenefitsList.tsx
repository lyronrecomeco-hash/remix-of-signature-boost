import { Check } from "lucide-react";

const benefits = [
  "Exercícios práticos para desenvolver traços firmes e consistentes",
  "Guia passo a passo para criar variações da sua assinatura",
  "Técnicas de fluidez que eliminam tremores e hesitações",
  "Modelos de referência para diferentes estilos profissionais",
  "Espaço dedicado para treino com grade de proporção",
  "Dicas de postura e pegada para máximo controle",
  "Acesso imediato em PDF — imprima quantas vezes quiser",
];

export const BenefitsList = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
          O que você recebe
        </h2>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex-shrink-0 w-6 h-6 bg-gold/20 border border-gold/40 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold" />
                </span>
                <span className="text-cream-muted leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
