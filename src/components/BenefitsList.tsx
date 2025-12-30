import { Check } from "lucide-react";
import workbookPreview from "@/assets/workbook-preview.jpg";

const benefits = [
  "Método passo a passo pra construir sua assinatura do zero",
  "Exercícios de aquecimento pra soltar a mão e ganhar controle",
  "3 estilos pra testar e escolher o seu",
  "Páginas de treino pra repetir até virar natural",
  "PDF pra baixar e imprimir quando quiser",
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        {/* Problem statement */}
        <div className="max-w-lg mx-auto text-center mb-8">
          <p className="text-muted-foreground text-sm md:text-base mb-3">
            A maioria das pessoas nunca aprende a construir uma assinatura.
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-3">
            Elas improvisam.
          </p>
          <p className="text-foreground text-sm md:text-base font-medium">
            E improviso não passa autoridade.
          </p>
        </div>

        {/* Solution */}
        <p className="text-center text-muted-foreground text-sm mb-4">
          Por isso existe um material específico pra isso.
        </p>

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
        <ul className="space-y-3 mb-6">
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
            Ele só aparece agora, logo após sua compra.
          </p>
        </div>
      </div>
    </section>
  );
};
