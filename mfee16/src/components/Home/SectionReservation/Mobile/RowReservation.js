function RowReservation() {
  return (
    <div className="reservation-row">
      <div className="steps-row">
        <div className="step-container bg-setting">
          <figure className="scale-container">
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-reservation-scale.svg'
              }
              alt=""
            />
          </figure>
          <span className="figcaption h4">選擇日期</span>
        </div>
        <span className="arrow">&gt;</span>
        <div className="step-container">
          <figure className="scale-container">
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-reservation-scale-gray.svg'
              }
              alt=""
            />
          </figure>
          <span className="figcaption gray h4">選擇座位</span>
        </div>
        <span className="arrow">&gt;</span>
        <div className="step-container">
          <figure className="scale-container">
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-reservation-scale-gray.svg'
              }
              alt=""
            />
          </figure>
          <span className="figcaption gray h4">選擇餐點</span>
        </div>
      </div>
      <div className="weeks-row">
        <div className="this-week active h3">本周</div>
        <div className="next-week h3">下周</div>
      </div>
      <div className="singer-calendars-row">
        <div className="singer-calendar active">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="date">2021-09-22</span>
        </div>
        <div className="singer-calendar">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="date">2021-09-22</span>
        </div>
        <div className="singer-calendar">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="date">2021-09-22</span>
        </div>
        <div className="singer-calendar">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="date">2021-09-22</span>
        </div>
        <div className="singer-calendar">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="date">2021-09-22</span>
        </div>
      </div>
    </div>
  );
}

export default RowReservation;
