import { motion } from 'framer-motion';
import { 
  Building2, 
  CheckCircle2, 
  Award, 
  Cross, 
  ShieldCheck, 
  BookOpen, 
  Users, 
  Sparkles,
} from 'lucide-react';

// Configuration de transition globale
const easeTransition = { duration: 0.7, ease: 'easeInOut' as const };

// --- COMPOSANT 1 : Présentation du Collège ---
export const AboutInfo = () => (
  <section id="about" className="py-24 bg-[#FAF8F3] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* En-tête : Fade Down */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={easeTransition}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-2">
          À Propos du Collège
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B3A2B] leading-tight mb-4">
          Une institution fondée sur la foi, la rigueur et l'excellence.
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.15 }}
          className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full origin-center" 
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        
        {/* Colonne gauche : Slide Right */}
        <motion.div 
          initial={{ opacity: 0, x: -45 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={easeTransition}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1B3A2B]/10 text-[#1B3A2B] text-xs font-semibold">
            <Building2 className="w-4 h-4 text-[#C5A059]" />
            <span>Sous la tutelle de l'Archidiocèse de Douala</span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#1B3A2B]">
            Élever les esprits et former des citoyens responsables pour le Cameroun de demain.
          </h3>

          <p className="text-gray-700 leading-relaxed font-light text-base">
            Situé au cœur de Douala, le Collège Catholique Saint Esprit est un établissement privé catholique d'enseignement secondaire général et technique. Nous proposons un cursus complet allant de la 6ème à la Terminale, couvrant l'enseignement général (Séries Littéraires A, Scientifiques C & D) ainsi que les filières technologiques et professionnelles (<strong className="font-semibold text-[#1B3A2B]">IH - Industrie de l'Habillement</strong> et <strong className="font-semibold text-[#1B3A2B]">ESF - Économie Sociale et Familiale</strong>).
          </p>

          <p className="text-gray-700 leading-relaxed font-light text-base">
            Notre projet éducatif repose sur l'épanouissement global de l'élève : le développement intellectuel, l'instruction civique et morale, le savoir-faire pratique ainsi que l'ancrage dans les valeurs chrétiennes de compassion, de respect et de travail bien fait.
          </p>

          {/* Grille des caractéristiques : Cascade décalée */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              { title: "Cadre Sécurisé & Serein", desc: "Environnement propice à la concentration et au travail." },
              { title: "Corps Professoral Dévoué", desc: "Enseignants qualifiés et suivis régulièrement." },
              { title: "Ateliers & Salles Spécialisées", desc: "Équipements pratiques pour les séries scientifiques, IH et ESF." },
              { title: "Aumônerie & Suivi Moral", desc: "Accompagnement spirituel et pastorale des jeunes." },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeInOut', delay: idx * 0.08 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-xs hover:border-[#C5A059]/60 transition-colors duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#1B3A2B]">{item.title}</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Colonne droite : Slide Left + Badge Pop-in */}
        <motion.div 
          initial={{ opacity: 0, x: 45 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={easeTransition}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto max-w-md">
            <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images (7).jpg" 
                alt="Élèves du Collège" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Badge MINESEC */}
            <motion.div 
              initial={{ scale: 0.75, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
              className="absolute -bottom-8 -left-6 bg-[#1B3A2B] text-white p-5 rounded-2xl shadow-xl border border-[#C5A059]/30 max-w-xs"
            >
              <Award className="w-8 h-8 text-[#C5A059] mb-2" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">Homologué MINESEC</p>
              <p className="text-[11px] text-gray-300 font-light mt-1">Conforme au programme officiel du Ministère de l'Enseignement Secondaire.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 4 Piliers : Fade Up en cascade */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {[
          { icon: Cross, title: "Foi & Spiritualité", text: "Vivre l'Évangile au quotidien à travers la prière, le respect de son prochain et le sens du service." },
          { icon: ShieldCheck, title: "Discipline & Morale", text: "Inculquer la ponctualité, la politesse et la responsabilité personnelle pour façonner des leaders de valeur." },
          { icon: BookOpen, title: "Rigueur Académique", text: "Des méthodes d'apprentissage éprouvées pour garantir l'excellence aux examens du BEPC, CAP et Baccalauréat." },
          { icon: Users, title: "Esprit de Communauté", text: "Créer un lien fort entre enseignants, parents et élèves pour un encadrement personnalisé." },
        ].map((pillar, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: idx * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1B3A2B]/5 text-[#1B3A2B] group-hover:bg-[#C5A059] group-hover:text-[#0F2818] flex items-center justify-center mb-4 transition-colors duration-300">
              <pillar.icon className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-serif font-bold text-[#1B3A2B] mb-2">{pillar.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed font-light">{pillar.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- COMPOSANT 2 : Message du Proviseur / Principal ---
export const ProviseurMessage = () => (
  <section id="proviseur" className="py-20 bg-[#cbb255]/30 text-white relative overflow-hidden">
    <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      {/* Conteneur principal : Zoom-In */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 20 }} 
        whileInView={{ opacity: 1, scale: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.2 }} 
        transition={easeTransition} 
        className="bg-[#0A5F2D] rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo du Proviseur */}
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.1 }}
            className="lg:col-span-4 flex flex-col items-center text-center"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#C5A059] shadow-2xl mb-4">
                <img 
                  src="/images (8).jpg" 
                  alt="Révérend Père Principal" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: 'backOut', delay: 0.3 }}
                className="absolute bottom-4 right-2 bg-[#C5A059] text-[#0F2818] p-2 rounded-full shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </div>
            <h3 className="text-xl font-serif font-bold text-white">Rév. Père Principal</h3>
            <p className="text-xs text-[#C5A059] font-medium tracking-widest uppercase mt-1">Principal de l'Établissement</p>
          </motion.div>

          {/* Citation & Discours */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.15 }}
            className="lg:col-span-8 space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#C5A059] leading-snug">
              "Éduquer un jeune, ce n'est pas seulement remplir un vase, c'est allumer un feu qui éclairera toute sa vie."
            </h3>
            <p className="text-gray-200 leading-relaxed font-light text-sm sm:text-base">
              Chers parents, chers élèves, accueillir un enfant au Collège Catholique Saint Esprit, c'est nouer un pacte de confiance pour son avenir. Dans un monde en constante mutation, nous offrons un ancrage solide : une formation intellectuelle rigoureuse alliée à une boussole morale inébranlable.
            </p>
            <p className="text-gray-300 leading-relaxed font-light text-sm hidden sm:block">
              Notre équipe pédagogique travaille sans relâche pour déceler et faire éclore le potentiel unique de chaque apprenant, afin qu'il devienne un citoyen modèle, compétent et guidé par la foi.
            </p>

            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '100%' }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.25 }}
              className="pt-4 flex items-center gap-4"
            >
              <div className="w-10 h-0.5 bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold">Direction du Collège Saint Esprit</span>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  </section>
);

export const About = () => {
  return (
    <>
      <AboutInfo />
      <ProviseurMessage />
    </>
  );
};

export default About;