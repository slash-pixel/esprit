import { motion } from 'framer-motion';
import { Cross, ArrowRight } from 'lucide-react';

export const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">
    {/* Image de fond brute */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/acueill.jpg" 
        alt="Collège Saint Esprit Campus" 
        className="w-full h-full object-cover" 
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto">
      
      {/* Badge supérieur UX : Fond sombre dépoli pour détacher le badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/75 backdrop-blur-md border border-[#D4AF37]/80 text-[#F3E5AB] text-xs font-semibold uppercase tracking-widest mb-8 shadow-2xl"
      >
        <Cross className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>Enseignement Catholique • Douala - Cameroun</span>
      </motion.div>

      {/* Titre Principal : Typographie Serif avec ombrage multi-couche */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight mb-6 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
      >
        Formons les esprits, <br />
        <span className="text-[#F3E5AB] italic font-normal drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
          éveillons les consciences.
        </span>
      </motion.h1>

      {/* Paragraphe : Carte légèrement teintée dépolie pour un confort de lecture maximal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }} 
        className="max-w-3xl mx-auto mb-10"
      >
        <p className="text-base sm:text-lg text-stone-100 font-normal leading-relaxed p-4 sm:p-6 rounded-2xl bg-slate-950/40 backdrop-blur-xs border border-white/10 shadow-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Bienvenue au Collège Catholique Saint Esprit. Depuis plus de 25 ans, nous offrons à la jeunesse doualaise un cadre d'enseignement exigeant, alliant rigueur académique, foi chrétienne et discipline morale.
        </p>
      </motion.div>

      {/* Boutons CTA d'Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }} 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
      >
        <a 
          href="#admissions" 
          className="px-8 py-4 bg-[#D4AF37] hover:bg-[#C5A059] text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-3 transition-all shadow-2xl hover:scale-[1.02] active:scale-95 group"
        >
          <span>Inscrire mon enfant</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="#about" 
          className="px-8 py-4 bg-slate-950/80 hover:bg-slate-950 text-white font-semibold text-sm uppercase tracking-wider rounded-xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-2xl hover:scale-[1.02] active:scale-95"
        >
          <span>Découvrir le Collège</span>
        </a>
      </motion.div>

    </div>
  </section>
);