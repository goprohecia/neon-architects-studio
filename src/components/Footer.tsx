import { Link } from "react-router-dom";
import { ArrowRight, Cookie } from "lucide-react";

export function Footer() {
  const openCookieSettings = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <footer className="relative bg-[#1C1917] text-[#A8A29E] py-16 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Marque */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <span className="font-syne font-bold text-xl text-white tracking-tight">
                IMPARTIAL
              </span>
            </Link>
            <p className="text-sm font-inter leading-relaxed text-[#A8A29E] max-w-sm">
              Studio digital spécialisé dans la création d'expériences web et mobiles immersives
              pour les marques ambitieuses.
            </p>
            <p className="text-sm font-inter text-[#78716C]">Delaware, États-Unis</p>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="font-syne text-sm font-semibold mb-5 text-white uppercase tracking-wider">
              Expertises
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/services/web", label: "Sites Web" },
                { to: "/services/mobile", label: "Apps Mobiles" },
                { to: "/services/backoffice", label: "Backoffice" },
                { to: "/services/360", label: "Écosystème 360°" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-inter text-[#A8A29E] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-syne text-sm font-semibold mb-5 text-white uppercase tracking-wider">
              Studio
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/studio", label: "Notre vision" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-inter text-[#A8A29E] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne text-sm font-semibold mb-5 text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-inter">
              <li>
                <a
                  href="mailto:studio@impartialgames.com"
                  className="text-[#A8A29E] hover:text-white transition-colors break-all"
                >
                  studio@impartialgames.com
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium font-inter text-[#F59E0B] hover:text-[#FBBF24] transition-colors"
            >
              Nous contacter
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-14 pt-8 border-t border-[#2C2917] flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
          <p className="text-sm font-inter text-[#78716C]">
            © 2025 IMPARTIAL GAMES. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-sm font-inter text-[#78716C]">
            {[
              { to: "/mentions-legales", label: "Mentions légales" },
              { to: "/politique-confidentialite", label: "Confidentialité" },
              { to: "/cgu", label: "CGU" },
              { to: "/cgv", label: "CGV" },
              { to: "/cookies", label: "Cookies" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={openCookieSettings}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Cookie className="h-3 w-3" />
              Préférences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
