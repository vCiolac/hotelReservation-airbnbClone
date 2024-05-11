import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Importe os estilos padrão
import 'react-date-range/dist/theme/default.css';

function Calendar() {
  const checkIn = new Date();
  const checkOut = new Date();

  const handleSelect = (ranges: any) => {
    console.log(ranges);
  };

  const selectionRange = {
    startDate: checkIn,
    endDate: checkOut,
    key: 'selection',
  };

  const months = 2;

  return (
    <div>
      <h1>Selecione um intervalo de datas:</h1>
      <DateRange
        ranges={ [selectionRange] }
        onChange={ handleSelect }
        months={ months || 2 }
        direction="horizontal"
        showMonthAndYearPickers={ false }
        rangeColors={ ['#F7F7F7'] }
        minDate={ new Date() }
        showDateDisplay={ false }
        monthDisplayFormat="MMMM YYY"
      />
    </div>
  );
}

export default Calendar;
