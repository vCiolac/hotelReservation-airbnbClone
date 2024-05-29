import { createContext } from 'react';

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
}

export const Context = createContext({} as ContextData);
