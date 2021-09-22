import ToggleBox from './ToggleBox';
import '../../../styles/home/home-section-singers.scss';

function SectionSingers() {
  return (
    <section className="singers-section">
      <h2 className="title">駐唱歌手</h2>
      <div className="introduction-container width-limit">
        {/* 手機版，左箭頭 */}
        <div className="arrow-container left">
          <i className="fas fa-caret-left"></i>
        </div>

        {/* 歌手照片 */}
        <div className="screen-container">
          <img
            src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
            alt=""
          />
        </div>

        {/* 歌手介紹 */}
        <div className="explanation-container">
          <h3 className="name">楊丞琳</h3>
          <p className="explanation">
            2000年以4 in
            Love女團出道，該女團曾發行過二張專輯，代表作為《一千零一個願望》。2001年楊丞琳參加了一部戲劇的試戲，並成功獲得一角，這部戲就是偶像劇鼻祖之作《流星花園》，隨後幾年楊丞琳只好積極加入各種節目擔當主持並陸續拍戲，在一系列的曝光累積人氣。
          </p>
          <a href={'url'} className="more-link guide-button orange">
            看更多
            <i className="fas fa-arrow-circle-right"></i>
          </a>

          {/* 切換歌手按鈕 */}
          {/* <div className="toggle-box-container">
            <div className="toggle-box action"></div>
            <div className="toggle-box"></div>
            <div className="toggle-box"></div>
            <div className="toggle-box"></div>
            <div className="toggle-box"></div>
            <div className="toggle-box"></div>
          </div> */}
        </div>

        {/* 手機版，右箭頭 */}
        <div className="arrow-container right">
          <i className="fas fa-caret-right"></i>
        </div>
      </div>

      {/* 切換歌手按鈕 */}
      <ToggleBox />
    </section>
  );
}

export default SectionSingers;
