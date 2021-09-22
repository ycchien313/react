function SectionVote() {
  return (
    <>
      {/* 誰來表演 */}
      <section class="vote-section">
        <div class="title-row">
          <div class="title-container">
            <figure class="elfin-container">
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/images/home/home-hero-elfin-green.png'
                }
                alt=""
              />
            </figure>
            <h2 class="title">誰來表演</h2>
          </div>
          <h3 class="sub-title">用你的票決定下一次的歌手</h3>
        </div>
        <div class="staff-container">
          <figure class="singer-container">
            <img
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <figcaption class="singer-name h4">楊丞琳</figcaption>
            <figcaption class="votes h4">10票</figcaption>
          </figure>
          <figure class="singer-container">
            <img
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <figcaption class="singer-name h4">楊丞琳</figcaption>
            <figcaption class="votes h4">10票</figcaption>
          </figure>
          <figure class="singer-container">
            <img
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <figcaption class="singer-name h4">楊丞琳</figcaption>
            <figcaption class="votes h4">10票</figcaption>
          </figure>
          <figure class="singer-container">
            <img
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <figcaption class="singer-name h4">楊丞琳</figcaption>
            <figcaption class="votes h4">10票</figcaption>
          </figure>
          <figure class="singer-container">
            <img
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <figcaption class="singer-name h4">楊丞琳</figcaption>
            <figcaption class="votes h4">10票</figcaption>
          </figure>
          <figure class="singer-container">
            <img
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <figcaption class="singer-name h4">楊丞琳</figcaption>
            <figcaption class="votes h4">10票</figcaption>
          </figure>
        </div>
        <div class="btn-container">
          <button class="guide-button orange">投票</button>
        </div>
      </section>
      {/* 誰來表演 手機版 */}
      <section class="vote-section-md">
        <div class="title-row">
          <h1 class="title">誰來表演？</h1>
          <h4 class="sub-title">用你的一票決定下次表演的歌手</h4>
        </div>
        <div class="singers-row">
          <div class="singer-row active">
            <img
              class="picture"
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <span class="name">楊丞琳</span>
            <span class="votes">0票</span>
          </div>
          <div class="singer-row">
            <img
              class="picture"
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <span class="name">楊丞琳</span>
            <span class="votes">0票</span>
          </div>
          <div class="singer-row">
            <img
              class="picture"
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <span class="name">楊丞琳</span>
            <span class="votes">0票</span>
          </div>
          <div class="singer-row">
            <img
              class="picture"
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <span class="name">楊丞琳</span>
            <span class="votes">0票</span>
          </div>
          <div class="singer-row">
            <img
              class="picture"
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <span class="name">楊丞琳</span>
            <span class="votes">0票</span>
          </div>
          <div class="singer-row">
            <img
              class="picture"
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
            />
            <span class="name">楊丞琳</span>
            <span class="votes">0票</span>
          </div>
        </div>
        <div class="btn-row">
          <button class="btn-vote guide-button orange">投票</button>
        </div>
      </section>
    </>
  );
}

export default SectionVote;
