import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { navItems } from '../data/content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A5F2D]/95 backdrop-blur-md text-white shadow-xl py-3 border-b border-[#C5A059]/20' 
          : 'bg-linear-to-b from-black/80 via-black/40 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg ring-2 ring-white/20 group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Logo Collège Saint Esprit" 
              className="w-full h-full object-cover scale-125"
            />
          </div>
          <div>
            <span className="text-lg font-serif font-bold tracking-wide block leading-none text-white group-hover:text-[#C5A059] transition-colors">
              Collège Saint Esprit
            </span>
            <span className="text-[10px] text-[#C5A059] font-medium tracking-widest uppercase block mt-1">
              Archidiocèse de Douala
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-xs uppercase font-semibold tracking-wider text-gray-200 hover:text-[#C5A059] transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#admissions" 
            className="flex items-center gap-2 bg-[#C5A059] hover:bg-[#b08d49] text-[#147A3D] px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#C5A059]/20 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Inscriptions</span>
          </a>
        </nav>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors" 
          aria-label="Menu Mobile"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#147A3D] border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-8 space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-200 hover:text-[#C5A059] hover:bg-white/5 font-medium transition-all"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A059]" />
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href="#admissions" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#C5A059] text-[#147A3D] font-bold rounded-xl text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Dossier d'Inscription</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};