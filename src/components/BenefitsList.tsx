import { Check } from "lucide-react";

const benefits = [
  "Workbook da Assinatura Profissional — 15 a 20 páginas de treino guiado",
  "Exercícios práticos para traços firmes e consistentes",
  "Guia passo a passo para criar variações da sua assinatura",
  "Técnicas de fluidez que eliminam tremores e hesitações",
  "Modelos de referência para diferentes estilos profissionais",
  "Espaço dedicado para treino com grade de proporção",
  "Acesso imediato em PDF — imprima quantas vezes quiser",
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <p className="text-center text-foreground font-medium mb-6">
          Apenas <span className="text-destructive">Aqui</span> e{" "}
          <span className="text-destructive">AGORA</span>, Por Apenas{" "}
          <span className="text-destructive font-bold">R$19,90!</span>{" "}
          Você Recebe:
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
