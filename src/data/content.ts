import type { NavItem, StatItem, GalleryItem, ProgramTab } from '../types';

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À Propos', href: '#about' },
  { label: 'Mot du Proviseur', href: '#proviseur' },
  { label: 'Offre Éducative', href: '#programs' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const statsData: StatItem[] = [
  { number: '98.5%', label: 'Taux de Réussite', sublabel: 'Examens officiels (BEPC & BAC)' },
  { number: '25+', label: 'Années d’Excellence', sublabel: 'Au service de la jeunesse doualaise' },
  { number: '1 200+', label: 'Élèves Encadrés', sublabel: 'Du premier au second cycle' },
  { number: '60+', label: 'Enseignants Qualifiés', sublabel: 'Professeurs certifiés et dévoués' },
];

export const galleryData: GalleryItem[] = [
  { id: '1', title: 'Campus & Façade Principale', category: 'Infrastructure', imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Laboratoire Informatique & TI', category: 'Infrastructure', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Rassemblement & Levée des Couleurs', category: 'Vie Scolaire', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Complexe Sportif & Interclasses', category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop' },
  { id: '5', title: 'Bibliothèque & Salle d’Étude', category: 'Vie Scolaire', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop' },
  { id: '6', title: 'Célébration & Messe de Rentrée', category: 'Événements', imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop' },
];

export const programTabs: ProgramTab[] = [
  { id: 'premier', label: '1er Cycle (6ème - 3ème)' },
  { id: 'second', label: '2nd Cycle (A, C, D, TI)' },
  { id: 'pastorale', label: 'Vie Pastorale & Clubs' },
];