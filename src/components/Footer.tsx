import { GraduationCap, Phone, MapPin, Clock, ArrowUp, ChevronRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons/SocialIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A5F2D] text-white relative overflow-hidden pt-12">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#C5A059 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center text-[#0F2818] font-bold shadow-lg shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold tracking-wide text-white leading-tight">
                  Collège Catholique <br />
                  <span className="text-[#C5A059]">Saint Esprit</span>
                </h2>
              </div>
            </div>

            <p className="text-gray-300 text-sm font-light leading-relaxed">
              Établissement catholique d'enseignement secondaire général sous tutelle diocésaine. Nous formons la jeunesse doualaise avec rigueur académique, discipline morale et foi chrétienne.
            </p>

            <div className="pt-2">
              <p className="text-xs font-semibold text-[#C5A059] tracking-wider uppercase mb-3">Suivez notre communauté</p>
              <div className="flex items-center gap-3">
                <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C5A059] text-gray-300 hover:text-[#0F2818] flex items-center justify-center transition-all border border-white/10"><FacebookIcon className="w-4 h-4" /></a>
                <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C5A059] text-gray-300 hover:text-[#0F2818] flex items-center justify-center transition-all border border-white/10"><InstagramIcon className="w-4 h-4" /></a>
                <a href="#youtube" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C5A059] text-gray-300 hover:text-[#0F2818] flex items-center justify-center transition-all border border-white/10"><YoutubeIcon className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-base font-serif font-semibold text-[#C5A059] border-b border-white/10 pb-2 inline-block">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Accueil', href: '#hero' },
                { label: 'À Propos', href: '#about' },
                { label: 'Mot du Proviseur', href: '#proviseur' },
                { label: 'Formations', href: '#programs' },
                { label: 'Galerie', href: '#gallery' },
                { label: 'Admissions', href: '#admissions' },
                { label: 'Contact', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-300 hover:text-[#C5A059] transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-serif font-semibold text-[#C5A059] border-b border-white/10 pb-2 inline-block">Offre Éducative</h3>
            <ul className="space-y-2.5 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" /> Premier Cycle Général (6e à 3e)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" /> Second Cycle Littéraire (Série A)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" /> Second Cycle Scientifique (C & D)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" /> Série TI (Technologies d'Information)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" /> Aumônerie & Projets Pastoraux</li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-serif font-semibold text-[#C5A059] border-b border-white/10 pb-2 inline-block">Secrétariat & Horaires</h3>
            <div className="space-y-3 text-sm text-gray-300 font-light">
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" /><span>Douala, Région du Littoral, Cameroun</span></div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" />
                <a href="tel:+237675803762" className="hover:text-[#C5A059] transition-colors">
                  +237 6 75 80 37 62
                </a>
              </div>
              <div className="flex items-start gap-3"><Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-1" /><div><p className="font-medium text-white text-xs">Ouverture :</p><p className="text-xs text-gray-300">Lundi - Vendredi : 07h30 - 15h30</p></div></div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Collège Catholique Saint Esprit — Tous droits réservés.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#C5A059] text-gray-300 hover:text-[#0F2818] rounded-full border border-white/10 transition-all" aria-label="Haut de page">
            <span className="font-medium text-xs">Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};