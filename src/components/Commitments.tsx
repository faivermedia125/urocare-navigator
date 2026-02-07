import { 
  Ear, 
  Target, 
  FlaskConical, 
  FileText, 
  HeartPulse, 
  HandHeart 
} from "lucide-react";

const Commitments = () => {
  const commitments = [
    {
      icon: Ear,
      title: "Escuta atenta e individualizada",
      description:
        "Cada paciente é único. Dedico tempo para entender suas necessidades e preocupações específicas.",
    },
    {
      icon: Target,
      title: "Técnica cirúrgica avançada",
      description:
        "Cirurgias realizadas com precisão técnica, buscando os melhores resultados e recuperação otimizada.",
    },
    {
      icon: FlaskConical,
      title: "Tratamentos baseados em evidências científicas",
      description:
        "Protocolos atualizados e fundamentados nas melhores práticas da medicina moderna.",
    },
    {
      icon: FileText,
      title: "Clareza nos diagnósticos e tratamentos",
      description:
        "Explicações claras sobre seu quadro clínico e todas as opções de tratamento disponíveis.",
    },
    {
      icon: HeartPulse,
      title: "Foco na prevenção e qualidade de vida",
      description:
        "Além do tratamento, orientação para manutenção da saúde e bem-estar a longo prazo.",
    },
    {
      icon: HandHeart,
      title: "Atendimento ético, humano e acolhedor",
      description:
        "Ambiente profissional que respeita sua privacidade e trata você com dignidade em todos os momentos.",
    },
  ];

  return (
    <section id="compromissos" className="section-padding gradient-hero relative">
      <div className="container-custom mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
            Meu compromisso com você
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Meu objetivo é proporcionar um atendimento de excelência, com
            conhecimento técnico avançado e cuidado humanizado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {commitments.map((commitment, index) => (
            <div
              key={commitment.title}
              className="bg-card/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary-light/10 flex items-center justify-center mb-5">
                <commitment.icon className="w-7 h-7 text-primary-light" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mb-3">
                {commitment.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5598991000733"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-full shadow-button hover:scale-105 transition-all"
          >
            AGENDAR CONSULTA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Commitments;
