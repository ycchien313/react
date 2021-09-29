import RowTitle from './RowTitle';
import RowReservation from './RowReservation/';
import RowBtn from './RowBtn';

function Table() {
  return (
    <section class="reservation-section">
      <RowTitle />
      <RowReservation />
      <RowBtn />
    </section>
  );
}

export default Table;
