import RowTitle from './RowTitle';
import RowReservation from './RowReservation';
import RowBtn from './RowBtn';

function Mobile() {
  return (
    <section className="reservation-section-md">
      <RowTitle />
      <RowReservation />
      <RowBtn />
    </section>
  );
}

export default Mobile;
