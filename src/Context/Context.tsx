import React, { createContext } from 'react';

interface ContextData {
  location: string;
  setLocation: (location: string) => void;
  checkIn: Date | null;
  setCheckIn: (checkIn: Date | null) => void;
  checkOut: Date | null;
  setCheckOut: (checkOut: Date | null) => void;
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
}

export const Context = createContext({} as ContextData);