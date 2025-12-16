import { Project } from './types';

export const ADMIN_WHATSAPP_NUMBER = "919876543210"; 

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Apex Concrete Structure",
    location: "Financial District, Hyderabad",
    category: "Commercial High-Rise",
    area: "120,000 sq.ft",
    year: "2024",
    description: "Complete structural reinforced concrete framework and civil finishing for a 12-story commercial complex.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: 2,
    title: "The Concrete Brutalist",
    location: "Banjara Hills, Hyderabad",
    category: "Luxury Residential",
    area: "8,500 sq.ft",
    year: "2023",
    description: "Architectural exposed concrete villa featuring cantilevered structural elements and precision shuttering.",
    imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Steel & Glass Pavilion",
    location: "Electronic City, Bangalore",
    category: "Industrial / Office",
    area: "45,000 sq.ft",
    year: "2023",
    description: "Prefabricated steel structure erection with large-span composite roofing and curtain wall glazing.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Vastukala Heights",
    location: "Navi Mumbai",
    category: "Civil Township",
    area: "5 Acres",
    year: "Ongoing",
    description: "End-to-end civil execution including foundation piling, substructure, and masonry for a gated community.",
    imageUrl: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1887&auto=format&fit=crop"
  }
];

export const SERVICES = [
  {
    title: "Structural Engineering",
    description: "Precision analysis, load calculation, and seismic-resistant concrete/steel design.",
    icon: "Ruler"
  },
  {
    title: "Construction Management",
    description: "End-to-end site supervision, material procurement, and timeline execution.",
    icon: "HardHat"
  },
  {
    title: "Civil Consultation",
    description: "Surveying, soil testing analysis, and regulatory approval planning.",
    icon: "Scroll"
  },
  {
    title: "Turnkey Execution",
    description: "From breaking ground to final handover, we handle the entire build lifecycle.",
    icon: "Hammer"
  }
];