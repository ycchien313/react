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
  const { weeks, setWeeks } = prop;
  const weeksData = [
    { className: 'this-week', activeValue: 'thisWeek', text: '本周' },
    { className: 'next-week', activeValue: 'nextWeek', text: '下周' },
  ];

  return (
    <div className="weeks-row">
      {weeksData.map((value) => {
        const { className, activeValue, text } = value;

        return (
          <div
            className={`${className} h3 ${weeks[activeValue] && 'active'}`}
            onClick={() => {
              handleWeeksClick(activeValue, weeks, setWeeks);
            }}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
}

export default RowWeeks;
