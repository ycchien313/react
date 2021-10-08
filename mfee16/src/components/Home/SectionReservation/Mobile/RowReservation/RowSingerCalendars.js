/* 點選歌手列，切換 active */
const handleSingerCalendarClick = (isActive, setIsActive, index) => {
  let newIsActive = Array(isActive.length).fill(false);
  newIsActive[index] = true;
  setIsActive(newIsActive);
};

/* render 歌手行事曆列表 */
const renderSingerCalendarsRow = (
  isActive,
  setIsActive,
  weeks,
  value,
  index
) => {
  const { date, singerName } = value;
  const imgSrc = `${process.env.PUBLIC_URL}/images/common/${singerName}.jpg`;
  const idx = isActive.indexOf(true);

  if (
    (weeks.thisWeek === true && index < 5) ||
    (weeks.nextWeek === true && index >= 5)
  ) {
    return (
      <div className="singer-calendars-row">
        <div
          className={`singer-calendar ${idx === index ? 'active' : ''}`}
          onClick={() => {
            handleSingerCalendarClick(isActive, setIsActive, index);
          }}
        >
          <img className="picture" src={imgSrc} alt="" />
          <span className="name">{singerName}</span>
          <span className="date">{date}</span>
        </div>
      </div>
    );
  }
};

function RowSingerCalendar(prop) {
  const { singerCalendar, isActive, setIsActive, weeks } = prop;

  return (
    <>
      {singerCalendar.map((value, index) => {
        return renderSingerCalendarsRow(
          isActive,
          setIsActive,
          weeks,
          value,
          index
        );
      })}
    </>
  );
}

export default RowSingerCalendar;
