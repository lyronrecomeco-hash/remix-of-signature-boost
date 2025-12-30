import { CheckCircle2 } from "lucide-react";
import workbookPreview from "@/assets/workbook-preview.jpg";

const benefits = [
  {
    title: "Manual Completo de Assinatura",
    description: "Método passo a passo para construir sua assinatura do zero"
  },
  {
    title: "Exercícios de Aquecimento",
    description: "Destravar a mão e ganhar controle total do traço"
  },
  {
    title: "3 Estilos Profissionais",
    description: "Teste e escolha o estilo que combina com você"
  },
  {
    title: "Páginas de Treino Ilimitadas",
    description: "PDF para baixar e imprimir quantas vezes quiser"
  },
  {
    title: "Acesso Vitalício",
    description: "Uma vez seu, para sempre seu"
  },
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        {/* Benefits */}
        <ul className="space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 bg-success/10 border border-success/20 rounded-lg p-3"
            >
              <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-foreground font-bold text-sm md:text-base block">
                  {benefit.title}
                </span>
                <span className="text-muted-foreground text-xs md:text-sm">
                  {benefit.description}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Product image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <img 
            src={workbookPreview} 
            alt="Manual de Assinatura Profissional" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Exclusivity warning */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-center">
          <p className="text-destructive font-bold text-sm md:text-base uppercase">
            ⚠️ Esse material NÃO é vendido separadamente!
          </p>
          <p className="text-muted-foreground text-xs md:text-sm mt-1">
            Ele só aparece neste momento. Não existe link depois.
          </p>
        </div>
      </div>
    </section>
  );
};
