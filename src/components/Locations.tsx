import { MapPin, Phone, Clock } from "lucide-react";

const Locations = () => {
  const locations = [
    {
      city: "São Luís",
      address: "Centro de São Luís",
      phone: "(98) 99100-0733",
      hours: "Segunda a Sexta",
    },
    {
      city: "Santa Inês",
      address: "Centro de Santa Inês",
      phone: "(98) 99100-0733",
      hours: "Segunda a Sexta",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Locais de Atendimento
          </h2>
          <p className="text-foreground/80 text-lg">
            Atendimento de excelência em duas localidades para melhor atender
            você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.city}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  {location.city}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{location.address}</span>
                </div>

                <a
                  href={`tel:${location.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-primary-light hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium group-hover:underline">
                    {location.phone}
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary-light flex-shrink-0" />
                  <span className="text-foreground/80">{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5598991000733"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            AGENDAR CONSULTA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
