import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-light blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-light blur-3xl" />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Logo Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-sm">AM</span>
              </div>
              <span className="text-primary-foreground/90 font-medium text-sm">
                Urologista Especializado
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-in-up text-balance">
              Cuide da sua saúde urológica com{" "}
              <span className="text-accent">técnica cirúrgica avançada</span> e
              resultados comprovados
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
              Especialista em cirurgias urológicas de alta complexidade.
              Atendimento humanizado com foco em resultados que transformam
              vidas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-200">
              <a
                href="https://wa.me/5598991000733"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                AGENDAR CONSULTA
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                Ver Procedimentos
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 animate-fade-in-up animation-delay-300">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent">
                  100+
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Consultas/mês
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent">
                  2
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Locais de Atendimento
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent">
                  6+
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  Procedimentos Especializados
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Image Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-primary-light/20 border-4 border-primary-light/40 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-primary-light/30 to-primary/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <span className="text-primary-foreground font-heading font-bold text-3xl">
                        AM
                      </span>
                    </div>
                    <p className="text-primary-foreground/80 text-sm">
                      Dr. Arnon Moraes
                    </p>
                    <p className="text-primary-foreground/60 text-xs">
                      Urologista
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/20 animate-pulse-soft" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primary-light/30 animate-float" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
