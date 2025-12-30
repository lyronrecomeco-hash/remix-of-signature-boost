import { Check } from "lucide-react";
import workbookPreview from "@/assets/workbook-preview.jpg";

const benefits = [
  "Método prático para construir sua assinatura do zero",
  "Exercícios para destravar a mão e ganhar controle",
  "3 estilos de assinatura para testar e escolher",
  "Páginas de treino para repetir até virar natural",
  "PDF para baixar e imprimir quando quiser",
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        {/* Product name */}
        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground text-center mb-6">
          WORKBOOK DE ASSINATURA PROFISSIONAL
        </h2>

        {/* Product image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <img 
            src={workbookPreview} 
            alt="Workbook de Assinatura Profissional" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Benefits */}
        <ul className="space-y-3 mb-8">
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

        {/* Exclusivity */}
        <div className="text-center space-y-2">
          <p className="text-foreground text-sm font-medium">
            Esse material não é vendido separadamente.
          </p>
          <p className="text-muted-foreground text-sm">
            Não existe link depois.
          </p>
          <p className="text-muted-foreground text-sm">
            Não existe desconto depois.
          </p>
        </div>
      </div>
    </section>
  );
};
