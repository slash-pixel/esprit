import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryData } from '../data/content';
import type { GalleryItem } from '../types';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('Tout');

  const filteredItems = filter === 'Tout' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block mb-2">
            Galerie Photos
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B3A2B] mb-4">
            Immergez-vous dans la vie du Collège
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['Tout', 'Infrastructure', 'Vie Scolaire', 'Sports', 'Événements'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat 
                  ? 'bg-[#1B3A2B] text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id} 
                onClick={() => setSelectedImage(item)} 
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md bg-[#0F2818] aspect-4/3"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-base font-serif font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedImage(null)} 
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                exit={{ scale: 0.8 }} 
                onClick={(e) => e.stopPropagation()} 
                className="relative max-w-4xl w-full bg-[#1B3A2B] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              >
                <button 
                  onClick={() => setSelectedImage(null)} 
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2.5 rounded-full z-10 transition-colors" 
                  aria-label="Fermer"
                >
                  <X className="w-6 h-6" />
                </button>
                <img src={selectedImage.imageUrl} alt={selectedImage.title} className="w-full aspect-video object-contain bg-black" />
                <div className="p-6 text-white bg-[#0F2818]">
                  <span className="text-xs font-bold text-[#C5A059] uppercase">{selectedImage.category}</span>
                  <h3 className="text-xl font-serif font-bold mt-1">{selectedImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};