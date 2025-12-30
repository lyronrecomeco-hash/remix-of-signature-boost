import { Check } from "lucide-react";
import workbookPreview from "@/assets/workbook-preview.jpg";

const benefits = [
  {
    title: "O fim do travamento",
    description: "Exercícios práticos para sua mão ganhar firmeza e velocidade."
  },
  {
    title: "Design de Nome",
    description: "Como escolher os traços que dão elegância ao seu nome."
  },
  {
    title: "3 Modelos de Assinatura",
    description: "Do clássico ao moderno, para você escolher o seu."
  },
  {
    title: "Guia de Treino (PDF)",
    description: "É só imprimir e praticar. Em 15 minutos sua assinatura já nasce outra."
  },
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        {/* Product intro */}
        <div className="text-center mb-6 space-y-3">
          <p className="text-foreground text-sm md:text-base font-medium">
            Eu não quero que você tenha um trabalho "pela metade".
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            Por isso, preparei o <span className="text-foreground font-semibold">Manual da Assinatura Profissional</span>.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            É um método rápido e sem enrolação para você abandonar aquele traço infantil e criar uma assinatura que transmite{" "}
            <span className="text-foreground font-semibold">respeito e presença</span>.
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

        {/* Benefits header */}
        <p className="text-foreground text-sm md:text-base font-semibold text-center mb-4">
          O que você vai receber agora por um valor simbólico:
        </p>

        {/* Benefits */}
        <ul className="space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <li 
              key={index}
              className="flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-1" strokeWidth={3} />
              <div>
                <span className="text-foreground text-sm md:text-base font-semibold">
                  {benefit.title}:
                </span>{" "}
                <span className="text-muted-foreground text-sm md:text-base">
                  {benefit.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
