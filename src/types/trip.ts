export interface Flight {
  from: string;
  to: string;
  airline: string;
  price: number;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  date: string;
  notes?: string;
}

export interface Route {
  id: number;
  name: string;
  flights: Flight[];
}

export interface Hostel {
  name: string;
  location: string;
  highlights: string;
  price: string;
}

export type Attraction = string;

export interface CityData {
  attractions: Attraction[];
  hostels: Hostel[];
}

export interface TripData {
  flightData: Record<string, Flight[]>;
  attractions: Record<string, Attraction[]>;
  hostels: Record<string, Hostel[]>;
  possibleRoutes: Route[];
}