import { useContext } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Importe os estilos padrão
import 'react-date-range/dist/theme/default.css';
import { Context } from '../Context/Context';

function Calendar() {
  const { checkIn, setCheckIn, checkOut, setCheckOut } = useContext(Context);

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
    <div className='flex justify-center border border-gray-600'>
      <DateRange
        ranges={ [selectionRange] }
        onChange={ handleSelect }
      />
    </div>
  );
}

export default Calendar;
