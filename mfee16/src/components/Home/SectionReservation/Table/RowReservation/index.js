import RowSteps from './RowSteps';
import RowSeatsGraph from './RowSeatsGraph';
import RowSeatsText from './RowSeatsText';
import RowSingerCalendar from './RowSingerCalendar';

function RowReservation() {
  return (
    <div className="reservation-row">
      <RowSteps />
      <RowSeatsGraph />
      <RowSeatsText />
      <RowSingerCalendar />
    </div>
  );
}

export default RowReservation;
