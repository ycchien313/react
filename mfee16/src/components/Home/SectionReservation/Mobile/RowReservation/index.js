import { useState, useEffect } from 'react';
import RowSteps from './RowSteps';
import RowWeeks from './RowWeeks';
import RowSingerCalendar from './RowSingerCalendars';

/* 透過電腦版 isActive 的狀態，判斷本周還下周 */
const setWeeksFromActive = (isActive, setWeeks) => {
  let newWeeks = {};

  // 取得 isActive 為 true 的位置
  const idx = isActive.indexOf(true);

  // 本周：位置 < 5、下周：位置 >= 5
  if (idx < 5) newWeeks = { thisWeek: true, nextWeek: false };
  else newWeeks = { thisWeek: false, nextWeek: true };

  setWeeks(newWeeks);
};

function RowReservation(prop) {
  const { singerCalendar, isActive, setIsActive } = prop;
  const [didMount, setDidMount] = useState(true);
  const [weeks, setWeeks] = useState({ thisWeek: true, nextWeek: false });

  useEffect(() => {
    setDidMount(false);
  }, []);

  useEffect(() => {
    if (didMount === false) {
      setWeeksFromActive(isActive, setWeeks);
    }
  }, [isActive]);

  return (
    <div className="reservation-row">
      <RowSteps />
      <RowWeeks weeks={weeks} setWeeks={setWeeks} />
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
