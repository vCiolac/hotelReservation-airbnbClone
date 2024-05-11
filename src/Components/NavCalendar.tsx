// NavCalendar.js
import React, { useContext } from 'react';
import { Context } from '../Context/Context';

function NavCalendar() {
  const { checkIn, setCheckIn, checkOut, setCheckOut } = useContext(Context);

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  return (
    <div>
      <input type="date" value={ checkIn } onChange={ handleCheckInChange } />
      <input type="date" value={ checkOut } onChange={ handleCheckOutChange } />
    </div>
  );
}

export default NavCalendar;
