function RowStepsGraph(prop) {
  const { seats } = prop;
  const { rock, middle, back } = seats;
  // 寬度百分比
  const seatWidthPct = {
    rock: (rock / 10) * 20,
    middle: (middle / 20) * 39,
    back: (back / 20) * 39,
  };

  return (
    <div className="seats-graph-row">
      <div
        className={`seat-graph orange ${rock === 0 ? 'd-none' : ''}`}
        style={{ width: `${seatWidthPct.rock}%` }}
      ></div>
      <div
        className={`seat-graph green ${middle === 0 ? 'd-none' : ''}`}
        style={{ width: `${seatWidthPct.middle}%` }}
      ></div>
      <div
        className={`seat-graph yellow ${back === 0 ? 'd-none' : ''}`}
        style={{ width: `${seatWidthPct.back}%` }}
      ></div>
    </div>
  );
}

export default RowStepsGraph;
