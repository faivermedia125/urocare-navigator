import { 
  CircleDot, 
  Zap, 
  Gem, 
  ShieldCheck, 
  Baby, 
  Scissors 
} from "lucide-react";

const Procedures = () => {
  const procedures = [
    {
      icon: CircleDot,
      title: "Prostatectomia Radical",
      description:
        "Cirurgia avançada para tratamento do câncer de próstata, realizada com técnica minimamente invasiva e alta taxa de recuperação.",
    },
    {
      icon: Zap,
      title: "RTU de Próstata",
      description:
        "Ressecção transuretral da próstata para tratamento da hiperplasia prostática benigna com recuperação rápida.",
    },
    {
      icon: Gem,
      title: "Ureterorrenolitotripsia",
      description:
        "Tratamento minimamente invasivo para cálculos renais e ureterais, especialidade em desenvolvimento do consultório.",
    },
    {
      icon: ShieldCheck,
      title: "Saúde da Próstata",
      description:
        "Avaliação completa, prevenção e tratamento de doenças prostáticas com acompanhamento personalizado.",
    },
    {
      icon: Baby,
      title: "Infertilidade Masculina",
      description:
        "Diagnóstico preciso e tratamentos especializados para questões de fertilidade masculina.",
    },
    {
      icon: Scissors,
      title: "Vasectomia",
      description:
        "Procedimento seguro e eficaz de contracepção masculina definitiva, realizado com máxima segurança.",
    },
  ];

  return (
    <section id="procedimentos" className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Experiência e Confiabilidade em Urologia
          </h2>
          <p className="text-foreground/80 text-lg">
            Procedimentos realizados com técnica avançada e foco nos melhores
            resultados para cada paciente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {procedures.map((procedure, index) => (
            <div
              key={procedure.title}
              className="bg-card rounded-xl p-6 md:p-8 border-t-4 border-primary-light shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-5">
                <procedure.icon className="w-7 h-7 text-primary-light" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                {procedure.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {procedure.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
