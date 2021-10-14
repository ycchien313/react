function RowSeatsText(prop) {
  const { seats } = prop;
  const { rock, middle, back } = seats;

  return (
    <div className="seats-text-row">
      <span className="seats-left">剩餘座位</span>
      <div className="seats-front">
        <span className="circle"></span>
        <span>
          搖滾區
          <span className="seats-count">{rock}</span> 席
        </span>
      </div>
      <div className="seats-middle">
        <span className="circle"></span>
        <span>
          中區
          <span className="seats-count">{middle}</span> 席
        </span>
      </div>
      <div className="seats-back">
        <span className="circle"></span>
        <span>
          後區
          <span className="seats-count">{back}</span> 席
        </span>
      </div>
    </div>
  );
}

export default RowSeatsText;
