export interface NavItem {
  label: string;
  href: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Vie Scolaire' | 'Événements' | 'Sports';
  imageUrl: string;
}

export interface StatItem {
  number: string;
  label: string;
  sublabel: string;
}

export interface ProgramTab {
  id: 'premier' | 'second' | 'pastorale';
  label: string;
}