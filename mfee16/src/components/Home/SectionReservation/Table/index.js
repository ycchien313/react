import RowTitle from './RowTitle';
import RowReservation from './RowReservation/';
import RowBtn from './RowBtn';

function Table(prop) {
  const { singerCalendar, isActive, setIsActive } = prop;

  return (
    <section class="reservation-section">
      <RowTitle />
      <RowReservation singerCalendar={singerCalendar} isActive={isActive} setIsActive={setIsActive} />
      <RowBtn />
    </section>
  );
}

export default Table;
