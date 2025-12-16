export interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  area: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface BookingData {
  name: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
}

export enum AppView {
  HOME = 'HOME',
  BOOKING = 'BOOKING'
}