import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { programTabs } from '../data/content';
import type { ProgramTab } from '../types';

export const Programs = () => {
  const [activeTab, setActiveTab] = useState<ProgramTab['id']>('premier');

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-2">
            Formations & Cursus
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B3A2B] mb-4">
            Un enseignement complet de la 6ème à la Terminale
          </h2>
          <p className="text-gray-600 text-sm font-light">
            Découvrez nos programmes d'études structurés pour répondre aux exigences académiques nationales et développer l'esprit d'innovation.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF8F3] border border-gray-200 shadow-inner">
            {programTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#1B3A2B] text-[#C5A059] shadow-md'
                    : 'text-gray-600 hover:text-[#1B3A2B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeTab === 'premier' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Formation de Base</span>
                <h3 className="text-2xl font-serif font-bold text-[#1B3A2B]">Premier Cycle Général</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Acquisition des fondamentaux scientifiques, littéraires et linguistiques. Préparation intensive au diplôme du BEPC (Brevet d'Études du Premier Cycle).
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A059]" /> Classes de 6ème, 5ème, 4ème et 3ème</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A059]" /> Initiation obligatoire à l'informatique dès la 6ème</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#C5A059]" /> Renforcement en Français, Anglais et Mathématiques</li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" alt="Premier cycle" className="w-full h-64 object-cover" />
              </div>
            </motion.div>
          )}

          {activeTab === 'second' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-gray-200">
                <span className="text-xs font-bold text-[#C5A059] uppercase">Littéraire</span>
                <h4 className="text-xl font-serif font-bold text-[#1B3A2B] my-2">Série A (A4)</h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">Focus sur la littérature, la philosophie, les langues vivantes (Anglais, Espagnol, Allemand) et les sciences humaines.</p>
                <span className="text-xs font-semibold text-[#1B3A2B]">• Sanctionné par le Baccalauréat A</span>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-gray-200">
                <span className="text-xs font-bold text-[#C5A059] uppercase">Scientifique</span>
                <h4 className="text-xl font-serif font-bold text-[#1B3A2B] my-2">Séries C & D</h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">Mathématiques pures, Physique-Chimie, et Sciences de la Vie et de la Terre (SVT) avec travaux pratiques en laboratoire.</p>
                <span className="text-xs font-semibold text-[#1B3A2B]">• Sanctionné par le Baccalauréat C / D</span>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#C5A059]/40 shadow-md relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-[#C5A059] text-[#0F2818] text-[10px] font-bold uppercase px-2 py-0.5 rounded-md">Innovant</div>
                <span className="text-xs font-bold text-[#C5A059] uppercase">Technologique</span>
                <h4 className="text-xl font-serif font-bold text-[#1B3A2B] my-2">Série TI (Tech. Info)</h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">Algorithmique, programmation, systèmes d'information, réseaux et bases de données.</p>
                <span className="text-xs font-semibold text-[#1B3A2B]">• Sanctionné par le Baccalauréat TI</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'pastorale' && (
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Épanouissement Personnel</span>
                <h3 className="text-2xl font-serif font-bold text-[#1B3A2B]">Vie de la Communauté & Clubs</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Au-delà des cours, les élèves participent à des activités périscolaires enrichissantes qui développent le sens des responsabilités et l'esprit d'équipe.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-medium text-gray-800">
                  <div className="p-3 bg-[#FAF8F3] rounded-lg border">🎶 Chorale Saint Esprit</div>
                  <div className="p-3 bg-[#FAF8F3] rounded-lg border">💻 Club Informatique & Robotics</div>
                  <div className="p-3 bg-[#FAF8F3] rounded-lg border">⚽ Club Omnisports</div>
                  <div className="p-3 bg-[#FAF8F3] rounded-lg border">✝️ Jeunesse Étudiante Catholique (JEC)</div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop" alt="Activités pastorales" className="w-full h-64 object-cover" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};