import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Web", href: "/services/web" },
  { name: "Mobile", href: "/services/mobile" },
  { name: "Backoffice", href: "/services/backoffice" },
  { name: "360°", href: "/services/360" },
];

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Studio", href: "/studio" },
  { name: "Contact", href: "/contact" },
];

function NavLink({
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      to={to}
      className={`relative text-sm font-medium font-inter transition-colors duration-200 px-1 py-2 ${
        isActive ? "text-[#1C1917]" : "text-[#78716C] hover:text-[#1C1917]"
      }`}
    >
      <span className="relative">
        {children}
        {isActive && (
          <motion.span
            layoutId="activeNavSolar"
            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F59E0B] rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </span>
    </Link>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAFAF7]/85 backdrop-blur-md border-b border-[#E7E5E4] shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo + disponibilité */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <span className="font-syne text-xl md:text-[22px] font-bold tracking-tight text-[#1C1917]">
              IMPARTIAL
            </span>
            <span className="hidden sm:inline text-[#A8A29E] font-inter text-sm">Studio</span>
            <span className="hidden md:flex items-center gap-2 ml-2 pl-3 border-l border-[#E7E5E4]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-[#78716C] font-inter">Disponible</span>
            </span>
          </Link>

          {/* Centre Navigation */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {services.map((link) => (
              <NavLink key={link.href} to={link.href} isActive={isActive(link.href)}>
                {link.name}
              </NavLink>
            ))}
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} isActive={isActive(link.href)}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Droite CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              to="/client/login"
              className="text-sm font-medium font-inter text-[#1C1917] px-4 py-2 rounded-full border border-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAFAF7] transition-colors"
            >
              Connexion
            </Link>
            <a
              href="https://calendly.com/yannis-bezriche/impartial-games"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold font-inter text-[#1C1917] px-5 py-2.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] transition-all shadow-[0_4px_16px_rgba(245,158,11,0.25)] hover:shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:-translate-y-0.5"
            >
              Planifier un appel
            </a>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden p-2 rounded-lg border border-[#E7E5E4] bg-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-5 w-5 text-[#1C1917]" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-5 w-5 text-[#1C1917]" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden pb-6"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-4 mt-2 border border-[#E7E5E4] shadow-sm">
                <div className="px-4 py-2 text-[#A8A29E] text-xs font-semibold uppercase tracking-wider font-syne">
                  Services
                </div>
                {services.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-3 rounded-xl text-[#1C1917] font-inter ${
                      isActive(item.href) ? "bg-[#FEF3C7] text-[#92400E]" : "hover:bg-[#F5F0E8]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="h-px my-2 bg-[#E7E5E4]" />
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-[#1C1917] font-inter ${
                      isActive(item.href) ? "bg-[#FEF3C7] text-[#92400E]" : "hover:bg-[#F5F0E8]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 space-y-2">
                  <a
                    href="https://calendly.com/yannis-bezriche/impartial-games"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3 rounded-full bg-[#F59E0B] text-[#1C1917] font-semibold text-center"
                  >
                    Planifier un appel
                  </a>
                  <Link
                    to="/client/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3 rounded-full border border-[#1C1917] text-[#1C1917] font-medium text-center"
                  >
                    Connexion
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
