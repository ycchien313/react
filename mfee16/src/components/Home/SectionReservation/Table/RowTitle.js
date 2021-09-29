function RowTitle() {
  return (
    <div className="title-row">
      <div className="title-container">
        <figure className="elfin-container">
          <img
            src={
              process.env.PUBLIC_URL + '/images/home/home-hero-elfin-green.png'
            }
            alt=""
          />
        </figure>
        <h2 className="title">線上訂位</h2>
      </div>
      <h3 className="sub-title">馬上預約一場音樂與美食的饗宴！</h3>
    </div>
  );
}

export default RowTitle;
