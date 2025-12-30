import { Check } from "lucide-react";

const benefits = [
  "Método pra construir sua assinatura do zero",
  "Exercícios de aquecimento pra soltar a mão",
  "3 estilos pra você testar e escolher o seu",
  "Páginas de treino pra repetir até virar natural",
  "PDF pra baixar e imprimir quando quiser",
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        {/* Pain point */}
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <p className="text-foreground text-sm md:text-base text-center">
            Pensa comigo: você vai assinar um contrato importante, 
            uma proposta, um documento... e a pessoa do outro lado 
            vai ver <span className="italic">aquele</span> rabisco?
          </p>
        </div>

        {/* Solution intro */}
        <p className="text-center text-muted-foreground text-sm mb-5">
          Eu preparei um material específico pra isso:
        </p>

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
        <p className="text-center text-muted-foreground text-xs">
          Esse material só aparece aqui, agora, pra quem acabou de comprar.
        </p>
      </div>
    </section>
  );
};
