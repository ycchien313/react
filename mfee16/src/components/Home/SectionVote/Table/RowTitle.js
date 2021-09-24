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
        <h2 className="title">誰來表演</h2>
      </div>
      <h3 className="sub-title">用你的票決定下一次的歌手</h3>
    </div>
  );
}

export default RowTitle;
