function Mobile() {
  return (
    <section className="vote-section-md">
      <div className="title-row">
        <h1 className="title">誰來表演？</h1>
        <h4 className="sub-title">用你的一票決定下次表演的歌手</h4>
      </div>
      <div className="singers-row">
        <div className="singer-row active">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="votes">0票</span>
        </div>
        <div className="singer-row">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="votes">0票</span>
        </div>
        <div className="singer-row">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="votes">0票</span>
        </div>
        <div className="singer-row">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="votes">0票</span>
        </div>
        <div className="singer-row">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="votes">0票</span>
        </div>
        <div className="singer-row">
          <img
            className="picture"
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
          <span className="name">楊丞琳</span>
          <span className="votes">0票</span>
        </div>
      </div>
      <div className="btn-row">
        <button className="btn-vote guide-button orange">投票</button>
      </div>
    </section>
  );
}

export default Mobile;
