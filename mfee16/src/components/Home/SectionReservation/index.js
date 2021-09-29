import Table from './Table';
import Mobile from './Mobile';
import '../../../styles/home/home-section-reservation.scss';

function SectionReservation() {
  return (
    <>
      {/* 線上訂位 */}
      <Table />

      {/* 線上訂位 手機版 */}
      <Mobile />
    </>
  );
}

export default SectionReservation;
