import { Award, Users, Stethoscope, Heart } from "lucide-react";

const Credibility = () => {
  const stats = [
    {
      icon: Users,
      value: "100+",
      label: "Consultas mensais",
    },
    {
      icon: Stethoscope,
      value: "6+",
      label: "Procedimentos especializados",
    },
    {
      icon: Award,
      value: "Alta",
      label: "Complexidade cirúrgica",
    },
    {
      icon: Heart,
      value: "100%",
      label: "Cuidado humanizado",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Excelência em Urologia com Técnica Cirúrgica Avançada
          </h2>
          <p className="text-foreground/80 text-lg">
            Mais de 100 consultas mensais e expertise comprovada em
            procedimentos de alta complexidade para cuidar da sua saúde
            masculina.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-background-alt card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-light/10 flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary-light" />
              </div>
              <p className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;
