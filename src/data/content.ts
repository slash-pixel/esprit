import type { NavItem, GalleryItem, ProgramTab } from '../types';

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À Propos', href: '#about' },
  { label: 'Offre Éducative', href: '#programs' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const galleryData: GalleryItem[] = [
  { id: '1', title: 'Campus & Façade Principale', category: 'Infrastructure', imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Laboratoire Informatique', category: 'Infrastructure', imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Rassemblement & Levée des Couleurs', category: 'Vie Scolaire', imageUrl: '/classe.png' },
  { id: '4', title: 'Interclasses', category: 'Sports', imageUrl: '/extra.png' },
  { id: '5', title: 'Enseignant', category: 'Vie Scolaire', imageUrl: '/ensei.png' },
  { id: '6', title: 'Célébration & Messe de Rentrée', category: 'Événements', imageUrl: '/eglise.png' },
];

export const programTabs: ProgramTab[] = [
  { id: 'premier', label: '1er Cycle (6ème - 3ème)' },
  { id: 'second', label: '2nd Cycle (A, C, D, TI)' },
  { id: 'pastorale', label: 'Vie Pastorale & Clubs' },
];