import { useState } from 'react';
import { Context } from './Context';
import Header from '../Components/Header';

interface IProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: IProviderProps) {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const increaseGuestCount = (type: keyof typeof guests) => {
    const maxAdults = 16;
    const maxChildren = 5;
    const maxInfants = 5;

    const newGuests = { ...guests };

    if (type === 'adults' && guests.adults < maxAdults) {
      newGuests.adults++;
    } else if (type === 'children' && guests.children < maxChildren) {
      newGuests.children++;
      if (guests.adults === 0) newGuests.adults++;
    } else if (type === 'infants' && guests.infants < maxInfants) {
      newGuests.infants++;
      if (guests.adults === 0) newGuests.adults++;
    }

    setGuests(newGuests);
  };

  const decreaseGuestCount = (type: keyof typeof guests) => {
    const newGuests = { ...guests };

    if (type === 'adults' && guests.adults > 0) {
      if (!(guests.adults === 1 && (guests.children > 0 || guests.infants > 0))) {
        newGuests.adults--;
      }
    } else if (type === 'children' && guests.children > 0) {
      newGuests.children--;
    } else if (type === 'infants' && guests.infants > 0) {
      newGuests.infants--;
    }

    setGuests(newGuests);
  };

  const contextValue = {
    location,
    setLocation,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guests,
    setGuests: {
      increaseAdults: () => increaseGuestCount('adults'),
      increaseChildren: () => increaseGuestCount('children'),
      increaseInfants: () => increaseGuestCount('infants'),
      decreaseAdults: () => decreaseGuestCount('adults'),
      decreaseChildren: () => decreaseGuestCount('children'),
      decreaseInfants: () => decreaseGuestCount('infants'),
    },
  };

  return (
    <Context.Provider value={ contextValue }>
      <Header />
      {children}
    </Context.Provider>
  );
}

export default Provider;
