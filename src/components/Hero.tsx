
import { motion } from 'framer-motion';
import { Cross, ArrowRight } from 'lucide-react';
import { statsData } from '../data/content';

export const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#0F2818]">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop" 
        alt="Collège Saint Esprit Campus" 
        className="w-full h-full object-cover opacity-20 scale-105" 
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0F2818] via-[#0F2818]/70 to-[#0F2818]/40" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0F2818] via-transparent to-[#0F2818]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-widest mb-8 shadow-xl"
      >
        <Cross className="w-3.5 h-3.5" />
        <span>Enseignement Catholique • Douala - Cameroun</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight mb-6"
      >
        Formons les esprits, <br />
        <span className="text-[#C5A059] italic font-normal">éveillons les consciences.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.4 }} 
        className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-10"
      >
        Bienvenue au Collège Catholique Saint Esprit. Depuis plus de 25 ans, nous offrons à la jeunesse doualaise un cadre d'enseignement exigeant, alliant rigueur académique, foi chrétienne et discipline morale.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }} 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
      >
        <a 
          href="#admissions" 
          className="px-8 py-4 bg-[#C5A059] text-[#0F2818] font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-3 hover:bg-[#b08d49] transition-all shadow-xl shadow-[#C5A059]/20 group"
        >
          <span>Inscrire mon enfant</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a 
          href="#about" 
          className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
        >
          <span>Découvrir le Collège</span>
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl max-w-6xl mx-auto text-left"
      >
        {statsData.map((stat, idx) => (
          <div key={idx} className="border-l-2 border-[#C5A059] pl-4 sm:pl-6 py-1">
            <p className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A059]">{stat.number}</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">{stat.label}</p>
            <p className="text-[11px] text-gray-400 font-light hidden sm:block mt-0.5">{stat.sublabel}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);