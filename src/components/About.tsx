import { Check, ArrowRight } from "lucide-react";

const About = () => {
  const highlights = [
    "Especialista em Urologia",
    "Expertise em cirurgias de alta complexidade",
    "Atendimento em São Luís e Santa Inês",
    "Investimento contínuo em técnicas avançadas",
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-gradient-to-b from-primary-light/20 to-primary/20 border-4 border-primary-light/40 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-light/30 flex items-center justify-center">
                    <span className="text-primary font-heading font-bold text-3xl">
                      AM
                    </span>
                  </div>
                  <p className="text-primary font-heading font-semibold text-lg">
                    Dr. Arnon Moraes
                  </p>
                  <p className="text-primary/70 text-sm">Urologista</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary-light/30 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
              Quem é o Dr. Arnon Moraes?
            </h2>

            <div className="space-y-4 text-foreground/80 mb-8">
              <p>
                Urologista especializado em cirurgias de alta complexidade, o
                Dr. Arnon Moraes construiu sua carreira com foco na excelência
                técnica cirúrgica e no atendimento humanizado.
              </p>
              <p>
                Com atuação em São Luís e Santa Inês, o Dr. Arnon é reconhecido
                pela precisão cirúrgica e pelos resultados consistentes em
                procedimentos urológicos complexos. Sua abordagem combina
                técnica avançada com atenção individualizada a cada paciente.
              </p>
              <p>
                Atualmente, desenvolve especialização na área de tratamento de
                cálculos renais, sempre buscando oferecer as técnicas mais
                modernas e eficazes para seus pacientes.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-light/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-light" />
                  </div>
                  <span className="text-foreground/90 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/dr.arnonmoraes.urologista"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              ESTOU NA PISTA
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
