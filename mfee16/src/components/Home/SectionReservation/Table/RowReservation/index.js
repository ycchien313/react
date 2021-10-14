import RowSteps from './RowSteps';
import RowSeatsGraph from './RowSeatsGraph';
import RowSeatsText from './RowSeatsText';
import RowSingerCalendar from './RowSingerCalendar';

function RowReservation(prop) {
  const { singerCalendar, isActive, setIsActive, seats } = prop;

  return (
    <div className="reservation-row">
      <RowSteps />
      <RowSeatsGraph seats={seats} />
      <RowSeatsText seats={seats} />
      <RowSingerCalendar
        singerCalendar={singerCalendar}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}

export default RowReservation;
