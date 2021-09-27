function SectionHero() {
  return (
    <section class="hero-section">
      {/* 近期歌手看板 */}
      <div class="singer-board-container">
        <h2 class="title">近期歌手</h2>
        <div class="board-container">
          <div class="title-container-md">
            <h1>
              在
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/images/home/home-hero-logo-brown.png'
                }
                alt=""
              />
              來一場
              <br />
              <span>音樂</span>與<span>美食</span>的饗宴
            </h1>
          </div>
          <div class="content-container">
            <figure class="singer-avatar-container">
              <img
                src={process.env.PUBLIC_URL + '/images/common/maroon5.jpg'}
                alt=""
              />
            </figure>
            <div class="singer-info">
              <h3 class="singer-name">maroon5</h3>
              <div class="show-time-container">
                <h4 class="show-time-title">表演時間</h4>
                <div class="show-time-content">
                  <h4 class="date">09/30</h4>
                  <h4 class="time">18:00</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slogen */}
      <div class="wave">
        <div class="wave-content-container">
          <figure class="elfin-container">
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-hero-elfin-green.png'
              }
              alt=""
            />
          </figure>
          <div class="slogen-container">
            <h1>
              在
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/images/home/home-hero-logo-brown.png'
                }
                alt=""
              />
              來一場<span>音樂</span>與<span>美食</span>的饗宴
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
