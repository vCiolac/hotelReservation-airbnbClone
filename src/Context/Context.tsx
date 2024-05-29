import { createContext } from 'react';

export interface Room {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface Hotel {
  hotelId: number;
  name: string;
  address: string;
  cityId: number;
  cityName: string;
  state: string;
  image: string;
}

export interface City {
  cityId: number;
  name: string;
  state: string;
}

interface ContextData {
  location: string;
  setLocation: (location: string) => void;
  checkIn: Date | null;
  setCheckIn: React.Dispatch<React.SetStateAction<Date | null>>;
  checkOut: Date | null;
  setCheckOut: React.Dispatch<React.SetStateAction<Date | null>>;
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
  setGuests: {
    increaseAdults: () => void;
    increaseChildren: () => void;
    increaseInfants: () => void;
    decreaseAdults: () => void;
    decreaseChildren: () => void;
    decreaseInfants: () => void;
  };
  headerVisible: boolean;
  rooms: Room[];
  fetchRooms: () => void;
  hotels: Hotel[];
  fetchHotels: () => void;
}

export const Context = createContext({} as ContextData);
