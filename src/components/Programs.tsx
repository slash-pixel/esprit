import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Scissors, Home, BookOpen, Atom, Music, Laptop, Trophy, Heart } from 'lucide-react';
import { programTabs } from '../data/content';
import type { ProgramTab } from '../types';

export const Programs = () => {
  const [activeTab, setActiveTab] = useState<ProgramTab['id']>('premier');

  // Configuration globale de l'animation au scroll avec "as const" pour le typpage Framer Motion
  const scrollAnimation = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.7, ease: 'easeInOut' as const }
  };

  return (
    <section id="programs" className="py-24 bg-[#F4F0E8] relative overflow-hidden transition-colors duration-500">
      {/* Léger halo décoratif d'arrière-plan */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-200 h-75 bg-radial from-[#C5A059]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête */}
        <motion.div 
          {...scrollAnimation}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-2.5">
            Formations & Cursus
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B3A2B] mb-4">
            Un enseignement complet de la 6ème à la Terminale
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
            Découvrez nos filières d'enseignement général, technique et professionnel structurées pour garantir l'excellence académique et l'apprentissage de métiers d'avenir.
          </p>
        </motion.div>

        {/* Barre d'onglets */}
        <motion.div 
          {...scrollAnimation}
          transition={{ ...scrollAnimation.transition, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-300/70 shadow-xs">
            {programTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#1B3A2B] text-[#C5A059] shadow-md scale-[1.02]'
                    : 'text-gray-600 hover:text-[#1B3A2B] hover:bg-stone-100/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Contenu des onglets */}
        <div className="max-w-6xl mx-auto">
          
          {/* ONGLET 1 : Premier Cycle */}
          {activeTab === 'premier' && (
            <motion.div 
              key="premier"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="space-y-5"
              >
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Formation de Base</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3A2B]">Premier Cycle Général & Technique</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Acquisition des fondamentaux scientifiques, littéraires, linguistiques et initiations techniques dès la classe de 6ème. Préparation intensive aux diplômes du BEPC et du CAP.
                </p>
                <ul className="space-y-3.5 text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <span>Classes de 6ème, 5ème, 4ème et 3ème</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <span>Orientation progressive vers le Général ou le Technique (IH / ESF)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <span>Renforcement en Français, Anglais, Mathématiques et Travaux Pratiques</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="rounded-2xl overflow-hidden shadow-xl border border-stone-200/90 bg-white p-2"
              >
                <img 
                  src="/images (5).jpg" 
                  alt="Premier cycle" 
                  className="w-full h-72 sm:h-80 object-cover rounded-xl" 
                />
              </motion.div>
            </motion.div>
          )}

          {/* ONGLET 2 : Second Cycle */}
          {activeTab === 'second' && (
            <motion.div 
              key="second"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  badge: "Enseignement Général",
                  title: "Série A (A4)",
                  desc: "Focus sur la littérature, la philosophie, les langues vivantes (Anglais, Espagnol, Allemand) et les sciences humaines.",
                  footer: "• Sanctionné par le Baccalauréat A",
                  icon: BookOpen,
                  borderColor: "border-stone-200/90",
                  topBar: "bg-[#1B3A2B]"
                },
                {
                  badge: "Enseignement Général",
                  title: "Séries C & D",
                  desc: "Mathématiques pures, Physique-Chimie, et Sciences de la Vie et de la Terre (SVT) avec travaux pratiques guidés.",
                  footer: "• Sanctionné par le Baccalauréat C / D",
                  icon: Atom,
                  borderColor: "border-stone-200/90",
                  topBar: "bg-[#1B3A2B]"
                },
                {
                  badge: "Technique & Métiers",
                  title: "Série IH",
                  desc: "Industrie de l'Habillement : Coupe, confection, stylisme, modélisme et technologie des textiles en atelier spécialisé.",
                  footer: "• CAP & Baccalauréat IH (de la 6e en Tle)",
                  icon: Scissors,
                  borderColor: "border-[#C5A059]/50",
                  topBar: "bg-[#C5A059]"
                },
                {
                  badge: "Technique & Social",
                  title: "Série ESF",
                  desc: "Économie Sociale & Familiale : Art culinaire, puériculture, gestion du foyer, hygiène, santé et sciences sociales.",
                  footer: "• CAP & Baccalauréat ESF (de la 6e en Tle)",
                  icon: Home,
                  borderColor: "border-[#C5A059]/50",
                  topBar: "bg-[#C5A059]"
                }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: 'easeInOut' }}
                  whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
                  className={`p-6 rounded-2xl bg-white border ${card.borderColor} shadow-xs hover:shadow-xl hover:border-[#1B3A2B]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${card.topBar}`} />
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A2B]/5 text-[#1B3A2B] group-hover:bg-[#1B3A2B] group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                      {card.badge}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-[#1B3A2B] mb-3">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-light leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-[#1B3A2B] block">
                      {card.footer}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ONGLET 3 : Vie de la communauté & Clubs */}
          {activeTab === 'pastorale' && (
            <motion.div 
              key="pastorale"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">Épanouissement Personnel</span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3A2B]">Vie de la Communauté & Clubs</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light mt-2">
                    Au-delà des cours, les élèves participent à des activités périscolaires enrichissantes qui développent le sens des responsabilités, la créativité et l'esprit d'équipe.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { icon: Music, title: "Chorale Saint Esprit", desc: "Chant liturgique & musique" },
                    { icon: Scissors, title: "Atelier Couture & Mode", desc: "Pratique créative IH" },
                    { icon: Trophy, title: "Club Omnisports", desc: "Football, Basketball, Hand" },
                    { icon: Heart, title: "Jeunesse Étudiante (JEC)", desc: "Engagement spirituel & social" },
                    { icon: Laptop, title: "Club Informatique", desc: "Bureautique & Multimédia" },
                    { icon: Home, title: "Club Art Ménager", desc: "Cuisine & Art de recevoir" },
                  ].map((club, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.7, delay: idx * 0.05, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-3.5 bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md hover:border-[#1B3A2B] transition-all duration-300 flex items-center gap-3 group cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#1B3A2B]/5 text-[#1B3A2B] group-hover:bg-[#1B3A2B] group-hover:text-[#C5A059] flex items-center justify-center shrink-0 transition-colors duration-300">
                        <club.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-[#1B3A2B]">{club.title}</h5>
                        <p className="text-[11px] text-gray-500 font-light">{club.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white p-2"
              >
                <img 
                  src="/images (4).jpg" 
                  alt="Activités pastorales" 
                  className="w-full h-80 object-cover rounded-xl" 
                />
              </motion.div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};