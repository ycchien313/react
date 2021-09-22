function SectionSingers() {
  return (
    <section class="singers-section">
      <h2 class="title">駐唱歌手</h2>
      <div class="introduction-container width-limit">
        <div class="arrow-container left">
          <i class="fas fa-caret-left"></i>
        </div>
        <div class="screen-container">
          <img
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
        </div>
        <div class="explanation-container">
          <h3 class="name">楊丞琳</h3>
          <p class="explanation">
            2000年以4 in
            Love女團出道，該女團曾發行過二張專輯，代表作為《一千零一個願望》。2001年楊丞琳參加了一部戲劇的試戲，並成功獲得一角，這部戲就是偶像劇鼻祖之作《流星花園》，隨後幾年楊丞琳只好積極加入各種節目擔當主持並陸續拍戲，在一系列的曝光累積人氣。
          </p>
          <a href={'url'} class="more-link guide-button orange">
            看更多
            <i class="fas fa-arrow-circle-right"></i>
          </a>
          <div class="toggle-box-container">
            <div class="toggle-box action"></div>
            <div class="toggle-box"></div>
            <div class="toggle-box"></div>
            <div class="toggle-box"></div>
            <div class="toggle-box"></div>
            <div class="toggle-box"></div>
          </div>
        </div>
        <div class="arrow-container right">
          <i class="fas fa-caret-right"></i>
        </div>
      </div>
    </section>
  );
}

export default SectionSingers;
