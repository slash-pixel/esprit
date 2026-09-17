
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Bloc Informations de Contact */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="lg:col-span-5 bg-[#0A5F2D] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-2">Restons en contact</span>
              <h3 className="text-3xl font-serif font-bold text-white mb-8">Coordonnées & Accès</h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Localisation</h4>
                    <p className="text-gray-300 text-xs font-light mt-0.5">Douala, Région du Littoral, Cameroun</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Téléphone</h4>
                    <a 
                      href="tel:+237675803762" 
                      className="text-gray-300 hover:text-[#C5A059] text-xs font-light mt-0.5 block transition-colors"
                    >
                      +237 6 75 80 37 62
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Adresse Email</h4>
                    <a 
                      href="mailto:Col.saintesprit1955@gmail.com" 
                      className="text-gray-300 hover:text-[#C5A059] text-xs font-light mt-0.5 block transition-colors break-all"
                    >
                      Col.saintesprit1955@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Horaires de Réception</h4>
                    <p className="text-gray-300 text-xs font-light mt-0.5">Lundi - Vendredi : 07h30 - 15h30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 text-xs text-gray-400 font-light">
              Collège Catholique Saint Esprit — Sous tutelle diocésaine.
            </div>
          </motion.div>

          {/* Bloc Carte Google Maps */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="lg:col-span-7 rounded-3xl shadow-lg border border-gray-100 overflow-hidden min-h-[400px] lg:min-h-[500px] bg-gray-200 relative"
          >
            <iframe
              src="https://maps.google.com/maps?q=Collège%20Catholique%20Saint%20Esprit%20Douala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de localisation du Collège Catholique Saint Esprit"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};