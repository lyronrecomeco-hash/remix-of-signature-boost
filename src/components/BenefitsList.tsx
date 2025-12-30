import { Check } from "lucide-react";
import workbookPreview from "@/assets/workbook-preview.jpg";

const benefits = [
  "Método guiado para criar sua assinatura do zero",
  "Exercícios para destravar a mão e ganhar controle",
  "3 estilos para testar e definir o seu",
  "Páginas de treino para repetir até virar natural",
  "PDF para baixar e imprimir",
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        {/* Product name */}
        <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground text-center mb-4">
          MANUAL DE ASSINATURA PROFISSIONAL
        </h2>

        {/* Product intro */}
        <div className="text-center mb-6 space-y-2">
          <p className="text-muted-foreground text-sm md:text-base">
            Feito para quem quer parar de ter vergonha na hora de assinar.
          </p>
          <p className="text-foreground text-sm md:text-base font-medium">
            Exercícios práticos. Zero enrolação.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Em poucos dias você vai ter uma assinatura que transmite confiança.
          </p>
        </div>

        {/* Product image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <img 
            src={workbookPreview} 
            alt="Manual de Assinatura Profissional" 
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
        <div className="text-center space-y-2 bg-destructive/10 rounded-lg p-4">
          <p className="text-destructive text-sm font-bold">
            ⚠️ Este material NÃO está à venda em nenhum outro lugar.
          </p>
          <p className="text-foreground text-sm font-medium">
            Se você passar dessa página, nunca mais vai ter acesso a ele.
          </p>
        </div>
      </div>
    </section>
  );
};
