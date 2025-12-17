import { Project } from './types';

export const ADMIN_WHATSAPP_NUMBER = "919876543210"; 

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Onyx Corporate Park",
    location: "Koregaon Park, Pune",
    category: "Commercial High-Rise",
    area: "150,000 sq.ft",
    year: "2024",
    description: "A flagship commercial complex utilizing post-tensioned slab technology and high-performance curtain wall glazing systems.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: 2,
    title: "Villa Verve",
    location: "Baner, Pune",
    category: "Luxury Residential",
    area: "12,000 sq.ft",
    year: "2023",
    description: "An architectural marvel featuring cantilevered exposed concrete decks and seamless indoor-outdoor structural integration.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Tech-Grid Pavilion",
    location: "Hinjewadi Phase 1, Pune",
    category: "Industrial IT",
    area: "65,000 sq.ft",
    year: "2023",
    description: "Prefabricated composite steel structure designed for rapid deployment and maximum column-free floor space.",
    imageUrl: "https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2077&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Serene Meadows Township",
    location: "Wakad, Pune",
    category: "Civil Urban Development",
    area: "8 Acres",
    year: "Ongoing",
    description: "Master-planned gated community execution including subterranean infrastructure, roads, and podium slabs.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
  }
];

export const SERVICES = [
  {
    title: "Structural Design",
    description: "Advanced load modeling and seismic analysis for high-rise stability.",
    icon: "Ruler"
  },
  {
    title: "Project Management",
    description: "Precision scheduling and resource allocation for zero-delay execution.",
    icon: "HardHat"
  },
  {
    title: "Civil Surveying",
    description: "Topographical mapping and soil stratification analysis.",
    icon: "Scroll"
  },
  {
    title: "Turnkey Construction",
    description: "End-to-end realization from excavation to occupancy certification.",
    icon: "Hammer"
  }
];