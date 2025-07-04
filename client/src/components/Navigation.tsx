import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { useAudio } from "../lib/stores/useAudio";
import { useBreakpoint } from "../hooks/useBreakpoint";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMuted, toggleMute } = useAudio();
  const { isMobile } = useBreakpoint();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Domains", href: "#domains" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Features", href: "#features" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-lg border-b border-purple-900/30" : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 xs:h-16 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs xs:text-xs sm:text-sm">H</span>
            </div>
            <span className="font-title text-white font-bold text-base xs:text-lg sm:text-xl">Hackfinity</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-body text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Audio Toggle */}
            <motion.button
              onClick={toggleMute}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors duration-200 touch-target p-2"
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1 xs:space-x-2">
            <motion.button
              onClick={toggleMute}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-white transition-colors duration-200 touch-target p-2"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </motion.button>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="text-white touch-target p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-purple-900/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ x: 10 }}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-3 px-3 text-left w-full touch-target rounded-lg hover:bg-purple-900/20"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
