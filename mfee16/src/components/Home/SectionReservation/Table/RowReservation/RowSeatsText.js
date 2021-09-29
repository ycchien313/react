function RowSeatsText() {
  return (
    <div className="seats-text-row">
      <span className="seats-left">剩餘座位</span>
      <div className="seats-front">
        <span className="circle"></span>
        <span>
          搖滾區
          <span className="seats-count">10</span> 席
        </span>
      </div>
      <div className="seats-middle">
        <span className="circle"></span>
        <span>
          中區
          <span className="seats-count">20</span> 席
        </span>
      </div>
      <div className="seats-back">
        <span className="circle"></span>
        <span>
          後區
          <span className="seats-count">20</span> 席
        </span>
      </div>
    </div>
  );
}

export default RowSeatsText;
