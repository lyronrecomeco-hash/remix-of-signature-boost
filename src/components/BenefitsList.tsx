import { Check } from "lucide-react";

const benefits = [
  "Workbook exclusivo pra treinar sua assinatura",
  "Exercícios pra deixar o traço firme e confiante",
  "Variações pra você escolher o estilo que combina com você",
  "Treino guiado, do zero até a assinatura final",
  "PDF pra baixar junto com seu curso",
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <p className="text-center text-foreground font-medium mb-5">
          O que vem no Workbook da Assinatura:
        </p>

        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li 
              key={index}
              className="flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span className="text-foreground text-sm md:text-base">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
