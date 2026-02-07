import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#procedimentos", label: "Procedimentos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-lg">
                  AM
                </span>
              </div>
              <div>
                <p className="font-heading font-bold text-lg">
                  Dr. Arnon Moraes
                </p>
                <p className="text-primary-foreground/80 text-sm">Urologista</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              CRM: [Número do CRM]
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:5598991000733"
                className="flex items-center gap-3 text-primary-light hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(98) 99100-0733</span>
              </a>
              <a
                href="mailto:arnon_lmoraes@hotmail.com"
                className="flex items-center gap-3 text-primary-light hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>arnon_lmoraes@hotmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/dr.arnonmoraes.urologista"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-light hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@dr.arnonmoraes.urologista</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground hover:text-primary-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Dr. Arnon Moraes - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
