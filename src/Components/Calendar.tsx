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
    startDate: checkIn !== null ? checkIn : undefined,
    endDate: checkOut !== null ? checkOut : undefined,
    key: 'selection',
  };

  return (
    <div className='flex justify-center border rounded-3xl shadow-lg border-gray-200'>
      <DateRange
        ranges={ [selectionRange] }
        onChange={ handleSelect }
        months={ 2 }
        direction='horizontal'
        showMonthAndYearPickers={ false }
        rangeColors={ ['#242424']}
        minDate={ new Date()}
        showDateDisplay={ false }
        monthDisplayFormat='MMMM yyyy'
      />
    </div>
  );
}

export default Calendar;
