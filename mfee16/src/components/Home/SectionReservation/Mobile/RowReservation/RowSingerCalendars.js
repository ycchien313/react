function RowSingerCalendar(prop) {
  const { singerCalendar, weeks } = prop;

  return (
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
  );
}

export default RowSingerCalendar;
