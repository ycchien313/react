// 切換本周、下周，設定 weeks 狀態
const handleWeeksClick = (week, weeks, setWeeks) => {
  let newWeeks = { ...weeks };

  if (week === 'thisWeek' && weeks.thisWeek === false) {
    newWeeks.thisWeek = true;
    newWeeks.nextWeek = false;
  }
  if (week === 'nextWeek' && weeks.nextWeek === false) {
    newWeeks.thisWeek = false;
    newWeeks.nextWeek = true;
  }

  setWeeks(newWeeks);
};

function RowWeeks(prop) {
  const { isActive, weeks, setWeeks } = prop;

  return (
    <div className="weeks-row">
      <div
        className={`this-week h3 ${weeks.thisWeek && 'active'}`}
        onClick={() => {
          handleWeeksClick('thisWeek', weeks, setWeeks);
        }}
      >
        本周
      </div>
      <div
        className={`next-week h3 ${weeks.nextWeek && 'active'}`}
        onClick={() => {
          handleWeeksClick('nextWeek', weeks, setWeeks);
        }}
      >
        下周
      </div>
    </div>
  );
}

export default RowWeeks;
