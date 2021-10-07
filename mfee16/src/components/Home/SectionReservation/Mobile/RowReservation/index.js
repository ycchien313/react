import { useState } from 'react';
import RowSteps from './RowSteps';
import RowWeeks from './RowWeeks';
import RowSingerCalendar from './RowSingerCalendars';

function RowReservation(prop) {
  const { singerCalendar, isActive, setIsActive } = prop;
  const [weeks, setWeeks] = useState({ thisWeek: true, nextWeek: false });

  return (
    <div className="reservation-row">
      <RowSteps />
      <RowWeeks isActive={isActive} weeks={weeks} setWeeks={setWeeks} />
      <RowSingerCalendar
        singerCalendar={singerCalendar}
        isActive={isActive}
        setIsActive={setIsActive}
        weeks={weeks}
      />
    </div>
  );
}

export default RowReservation;
