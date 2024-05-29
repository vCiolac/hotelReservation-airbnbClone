import { useEffect, useState } from 'react';
import { Context, Hotel, Room } from './Context';

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
  const [headerVisible, setHeaderVisible] = useState(true);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const changeHeaderVisibility = () => {
      setHeaderVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', changeHeaderVisibility);

    return () => {
      window.removeEventListener('scroll', changeHeaderVisibility);
    };
  }, []);

  useEffect(() => {
    fetchRooms();
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch('https://hrs.up.railway.app/hotel');
      if (!response.ok) {
        throw new Error('Failed to fetch hotels');
      }
      const data = await response.json();
      setHotels(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  const fetchRooms = async () => {
    try {
      const response = await fetch('https://hrs.up.railway.app/room');
      if (!response.ok) {
        throw new Error('Failed to fetch rooms');
      }
      const data = await response.json();
      setRooms(data.rooms);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

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
    headerVisible,
    rooms,
    fetchRooms,
    hotels,
    fetchHotels,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
