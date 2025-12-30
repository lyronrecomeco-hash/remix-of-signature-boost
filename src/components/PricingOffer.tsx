import { Button } from "@/components/ui/button";

export const PricingOffer = () => {
  return (
    <section className="py-8 md:py-10 pb-36 md:pb-10">
      <div className="container text-center">
        {/* Price anchor */}
        <p className="text-muted-foreground text-sm mb-2">
          Esse manual custa <span className="line-through">R$ 47,00</span> em nossa loja.{" "}
          <span className="text-foreground font-medium">Mas você não vai pagar isso.</span>
        </p>
        
        {/* Special price */}
        <p className="text-foreground text-sm mb-1">
          Como você acabou de entrar para o nosso grupo de alunos, eu vou te dar a chance de levar esse manual por apenas:
        </p>
        <p className="font-display text-4xl md:text-5xl font-bold text-primary my-3">
          R$ 19,90
        </p>
        <p className="text-muted-foreground text-sm mb-6">
          É menos do que o preço de um café com pão na chapa.{" "}
          <span className="text-foreground font-semibold">Para mudar algo que você vai usar pelo resto da sua vida.</span>
        </p>

        {/* Final warning */}
        <div className="bg-destructive/10 rounded-lg p-4 mb-6">
          <p className="text-foreground text-sm font-semibold mb-2">
            Olha pra mim: essa oferta é única.
          </p>
          <p className="text-muted-foreground text-sm mb-2">
            Se você sair desta página, o sistema entende que você não tem interesse e o link expira.{" "}
            <span className="text-destructive font-bold">Você nunca mais verá esse preço.</span>
          </p>
          <p className="text-foreground text-sm font-semibold">
            Vai deixar sua marca pessoal ser a única coisa que não evoluiu?
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="success" size="xl" className="w-full mb-4">
            QUERO PROFISSIONALIZAR MINHA ASSINATURA AGORA
          </Button>
          <p className="text-muted-foreground text-xs mb-4">
            (Adicionar ao meu pedido por apenas R$ 19,90)
          </p>

          <Button variant="subtle" size="sm" className="text-xs max-w-md mx-auto">
            Não. Prefiro continuar com a assinatura que tenho hoje e perder essa oportunidade.
          </Button>
        </div>

        {/* Mobile rejection */}
        <div className="md:hidden">
          <Button variant="subtle" size="sm" className="text-xs">
            Não. Prefiro continuar com a assinatura que tenho hoje e perder essa oportunidade.
          </Button>
        </div>
      </div>
    </section>
  );
};
