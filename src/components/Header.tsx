import { AnimatePresence, motion } from "motion/react";
import SearchIcon from "./icons/SearchIcon";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationLinks } from "../constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 w-full ${isScrolled || isMobileMenuOpen ? "bg-(--navbar-background)/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container">
        <div className="flex items-center justify-between pb-2">
          <Logo color={isScrolled || isMobileMenuOpen ? "primary" : "white"} />

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <nav
              className={`nav ${isScrolled ? "text-secondary-foreground" : ""}`}>
              {navigationLinks.map((link) => (
                <a href={link.href} key={link.name} className="nav__link">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleMobileMenu}
              className={`${isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"} hover:text-primary  transition-colors duration-200`}
              aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="items-center gap-6 hidden lg:flex">
            <button type="button" aria-label="Открыть поиск">
              <SearchIcon
                fillColor={isScrolled ? "secondary-foreground" : "white"}
              />
            </button>
            <button
              className="btn bg-primary text-primary-foreground"
              type="button">
              Contact Our Agent
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-(--navbar-background)/95 w-full backdrop-blur-md border-t border-border overflow-hidden">
            <nav className="py-6 space-y-4 ">
              <div className="text-secondary-foreground font-semibold text-sm">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block w-full nav__link">
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 px-6 border-t border-border">
                <button
                  className="btn w-full bg-primary text-primary-foreground"
                  type="button">
                  Contact Our Agent
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
