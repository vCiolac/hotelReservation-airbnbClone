import { useContext } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Importe os estilos padrão
import 'react-date-range/dist/theme/default.css';
import { Context } from '../Context/Context';

function Calendar() {
  const { checkIn, setCheckIn, checkOut, setCheckOut } = useContext(Context);
  
  const handleCheckInChange = (e: { target: { value: Date | null; }; }) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e: { target: { value: Date | null; }; }) => {
    setCheckOut(e.target.value);
  };

  const handleSelect = (ranges: any) => {
    setCheckIn(ranges.selection.startDate);
    setCheckOut(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: checkIn,
    endDate: checkOut,
    key: 'selection',
  };

  return (
    <div>
      <DateRange
        ranges={ [selectionRange] }
        onChange={ handleSelect }
      />
    </div>
  );
}

export default Calendar;
