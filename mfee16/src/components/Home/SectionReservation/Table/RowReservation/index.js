import RowSteps from './RowSteps';
import RowSeatsGraph from './RowSeatsGraph';
import RowSeatsText from './RowSeatsText';
import RowSingerCalendar from './RowSingerCalendar';

function RowReservation(prop) {
  const { singerCalendar, isActive, setIsActive } = prop;

  return (
    <div className="reservation-row">
      <RowSteps />
      <RowSeatsGraph />
      <RowSeatsText />
      <RowSingerCalendar
        singerCalendar={singerCalendar}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}

export default RowReservation;
