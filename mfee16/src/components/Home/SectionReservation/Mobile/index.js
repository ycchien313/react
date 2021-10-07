import RowTitle from './RowTitle';
import RowReservation from './RowReservation/';
import RowBtn from './RowBtn';

function Mobile(prop) {
  const { singerCalendar, isActive, setIsActive } = prop;

  return (
    <section className="reservation-section-md">
      <RowTitle />
      <RowReservation singerCalendar={singerCalendar} isActive={isActive} setIsActive={setIsActive} />
      <RowBtn />
    </section>
  );
}

export default Mobile;
