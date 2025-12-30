import { Check } from "lucide-react";

const benefits = [
  "Exercícios práticos para traços firmes e consistentes",
  "Guia passo a passo para criar variações da sua assinatura",
  "Técnicas de fluidez que eliminam tremores e hesitações",
  "Modelos de referência para diferentes estilos profissionais",
  "Espaço dedicado para treino com grade de proporção",
  "Acesso imediato em PDF — imprima quantas vezes quiser",
];

export const BenefitsList = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
          O que você recebe
        </h2>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-start gap-3"
              >
                <span className="flex-shrink-0 w-5 h-5 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span className="text-muted-foreground">
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
