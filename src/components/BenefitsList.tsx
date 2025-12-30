import { Check } from "lucide-react";

const benefits = [
  "Workbook completo com 15 a 20 páginas de treino",
  "Exercícios pra você parar de tremer na hora de assinar",
  "Passo a passo pra criar variações da sua assinatura",
  "Modelos pra você se inspirar e adaptar pro seu estilo",
  "Espaço pra treinar até ficar natural",
  "PDF pra baixar e imprimir quantas vezes quiser",
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <p className="text-center text-foreground font-medium mb-5">
          Por <span className="text-destructive">R$19,90</span> você leva:
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
