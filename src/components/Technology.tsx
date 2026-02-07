import { Gem, Target } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Gem,
      title: "Ureterorrenolitotripsia Avançada",
      description:
        "A ureterorrenolitotripsia permite tratar cálculos renais e ureterais de forma minimamente invasiva. Utilizando equipamentos de última geração, o procedimento oferece alta taxa de sucesso com recuperação mais rápida e menor desconforto pós-operatório.",
    },
    {
      icon: Target,
      title: "Técnicas Cirúrgicas de Precisão",
      description:
        "Cirurgias urológicas realizadas com técnica refinada e protocolos atualizados, garantindo segurança, precisão e os melhores resultados para cada paciente.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Tecnologia a Favor da Saúde Masculina
          </h2>
          <p className="text-foreground/80 text-lg">
            Equipamentos modernos e técnicas avançadas para resultados
            superiores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="bg-background-alt rounded-xl p-6 md:p-8 border-l-4 border-primary-light shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center flex-shrink-0">
                  <tech.icon className="w-7 h-7 text-primary-light" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
