function SectionTour() {
  return (
    <section class="tour-section">
      <h2 class="title">網站導覽</h2>
      {/* 功能列 */}
      <div class="features-container width-limit">
        <ul>
          <li class="action">
            <i class="fas fa-tv"></i>
            <h3>live 直播</h3>
          </li>
          <li>
            <i class="fas fa-stars"></i>
            <h3>請誰來表演</h3>
          </li>
          <li>
            <i class="fas fa-gamepad-alt"></i>
            <h3>音樂遊戲</h3>
          </li>
          <li>
            <i class="far fa-calendar-alt"></i>
            <h3>線上訂位</h3>
          </li>
          <li>
            <i class="fas fa-thumbs-up"></i>
            <h3>撰寫評論</h3>
          </li>
          <li>
            <i class="fas fa-shopping-cart"></i>
            <h3>外送訂餐</h3>
          </li>
        </ul>
      </div>
      {/* live 直播 */}
      <div class="introduction-container width-limit d-none">
        <div class="screen-container">
          <iframe
            src="https://www.youtube.com/embed/UJBNrp8vCsA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="explanation-container">
          <a href={'url'} class="feature-btn guide-button">
            點擊觀看 live 直播
          </a>
          <h4 class="explanation">在線上即時看精彩的音樂表演</h4>
          <p class="sub-explanation">
            表演者：楊丞琳
            <br />
            演出時間：08/26 20:00
          </p>
        </div>
      </div>
      {/* 請誰來表演 */}
      <div class="introduction-container width-limit d-none">
        <div class="screen-container">
          <img
            src={process.env.PUBLIC_URL + '/images/home/home-tour-img-vote.png'}
            alt=""
          />
        </div>
        <div class="explanation-container">
          <a href={'url'} class="feature-btn guide-button">
            {' '}
            前往投票{' '}
          </a>
          <h4 class="explanation">
            參與我們的投票活動，決定出你喜歡的表演者吧!
          </h4>
          <p class="sub-explanation">
            有喜歡的歌手嗎?
            <br />
            馬上前往投票吧!
          </p>
        </div>
      </div>
      {/* 音樂遊戲 */}
      <div class="introduction-container width-limit d-none">
        <div class="screen-container">
          <img
            src={process.env.PUBLIC_URL + '/images/home/home-tour-img-game.png'}
            alt=""
          />
        </div>
        <div class="explanation-container">
          <a href={'url'} class="feature-btn guide-button">
            {' '}
            來場音樂遊戲{' '}
          </a>
          <h4 class="explanation">
            透過音樂測驗得出你喜愛的音樂種類及推薦歌手
          </h4>
          <p class="sub-explanation">
            對投票沒想法嗎?
            <br />
            來場小測驗吧!
          </p>
        </div>
      </div>
      {/* 線上訂位 */}
      <div class="introduction-container width-limit d-none">
        <div class="screen-container">
          <video
            src={
              process.env.PUBLIC_URL +
              '/images/home/home-tour-video-reservation.mp4'
            }
            autoplay="true"
            loop="true"
          ></video>
        </div>
        <div class="explanation-container">
          <a href={'url'} class="feature-btn guide-button">
            {' '}
            前往訂位{' '}
          </a>
          <h4 class="explanation">立即線上訂位</h4>
          <p class="sub-explanation">
            座位有限
            <br />
            立即來場讓你難忘的音樂盛宴吧
          </p>
        </div>
      </div>
      {/* 撰寫評論 */}
      <div class="introduction-container width-limit d-none">
        <div class="screen-container">
          <video
            src={
              process.env.PUBLIC_URL +
              '/images/home/home-tour-video-reservation.mp4'
            }
            autoplay="true"
            loop="true"
          ></video>
        </div>
        <div class="explanation-container">
          <a href={'url'} class="feature-link guide-button">
            我要評論
          </a>
          <h4 class="explanation">留下你的寶貴評論</h4>
          <p class="sub-explanation">
            哪個表演者或餐點的印象令你難忘嗎?
            <br />
            你的建議與肯定是我們進步的最大動力
          </p>
        </div>
      </div>
      {/* 外送訂餐 */}
      <div class="introduction-container width-limit">
        <div class="screen-container">
          <video
            src={
              process.env.PUBLIC_URL +
              '/images/home/home-tour-video-delivery.mp4'
            }
            autoplay="true"
            loop="true"
          ></video>
        </div>
        <div class="explanation-container">
          <a href={'url'} class="feature-link guide-button">
            立即訂餐
          </a>
          <h4 class="explanation">餐點外送平台</h4>
          <p class="sub-explanation">
            沒辦法到場同樂?
            <br />
            透過外送平台與現場直播也能一起同樂
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionTour;
