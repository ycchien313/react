import RowTitle from './RowTitle';
import RowReservation from './RowReservation/';
import RowBtn from './RowBtn';

function Table(prop) {
  const { singerCalendar, isActive, setIsActive, seats } = prop;

  return (
    <section class="reservation-section">
      <RowTitle />
      <RowReservation
        singerCalendar={singerCalendar}
        isActive={isActive}
        setIsActive={setIsActive}
        seats={seats}
      />
      <RowBtn />
    </section>
  );
}

export default Table;
