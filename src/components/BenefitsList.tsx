import { Check } from "lucide-react";

const benefits = [
  "Método passo a passo pra construir sua assinatura do zero",
  "Exercícios de aquecimento pra soltar a mão",
  "3 estilos de assinatura pra você escolher o seu",
  "Páginas de treino pra repetir até ficar automático",
  "Dicas pra assinar com confiança em qualquer situação",
];

export const BenefitsList = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <p className="text-foreground text-sm md:text-base text-center">
            Imagina daqui 30 dias você assinando um documento e a pessoa 
            do outro lado <span className="font-medium">elogiando sua assinatura</span>. 
            Isso muda como te veem.
          </p>
        </div>

        <p className="text-center text-foreground font-medium mb-5">
          O que você recebe:
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

        {/* Urgency block */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 text-center">
          <p className="text-foreground text-sm font-medium">
            Esse manual não é vendido separadamente.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Só quem comprou o curso agora tem acesso a essa oferta.
          </p>
        </div>
      </div>
    </section>
  );
};
