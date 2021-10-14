// 功能導覽：
/* 
1.live 直播
2.請誰來表演
3.音樂遊戲
4.線上訂位
5.撰寫評論
6.外送訂餐
*/

// 左邊畫面
const screen = {
  'live 直播': (
    <>
      <iframe
        src="https://www.youtube.com/embed/aaa"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  ),
  請誰來表演: (
    <>
      <img
        src={process.env.PUBLIC_URL + '/images/home/home-tour-img-vote3.jpg'}
        alt=""
      />
    </>
  ),
  音樂遊戲: (
    <>
      <img
        src={process.env.PUBLIC_URL + '/images/home/home-tour-img-game.png'}
        alt=""
      />
    </>
  ),
  線上訂位: (
    <>
      <video
        src={
          process.env.PUBLIC_URL +
          '/images/home/home-tour-video-reservation.mp4'
        }
        autoplay="true"
        loop="true"
      ></video>
    </>
  ),
  撰寫評論: (
    <>
      <video
        src={
          process.env.PUBLIC_URL + '/images/home/home-tour-video-comment.mp4'
        }
        autoplay="true"
        loop="true"
      ></video>
    </>
  ),
  外送訂餐: (
    <>
      <video
        src={
          process.env.PUBLIC_URL + '/images/home/home-tour-video-delivery.mp4'
        }
        autoplay="true"
        loop="true"
      ></video>
    </>
  ),
};

// 右邊內文
const explanation = {
  'live 直播': (
    <>
      <a href={'url'} className="feature-link guide-button">
        觀看 live 直播
      </a>
      <h4 className="explanation">在線上即時看精彩的音樂表演</h4>
      <p className="sub-explanation">
        表演者：劉德華
        <br />
        演出時間：10/18 18:00
      </p>
    </>
  ),
  請誰來表演: (
    <>
      <a href={'url'} className="feature-link guide-button">
        前往投票
      </a>
      <h4 className="explanation">
        參與我們的投票活動，決定出你喜歡的表演者吧!
      </h4>
      <p className="sub-explanation">
        有喜歡的歌手嗎?
        <br />
        馬上前往投票吧!
      </p>
    </>
  ),
  音樂遊戲: (
    <>
      <a href={'url'} className="feature-link guide-button">
        來場音樂遊戲
      </a>
      <h4 className="explanation">
        透過音樂測驗得出你喜愛的音樂種類及推薦歌手
      </h4>
      <p className="sub-explanation">
        對投票沒想法嗎?
        <br />
        來場小測驗吧!
      </p>
    </>
  ),
  線上訂位: (
    <>
      <a href={'url'} className="feature-link guide-button">
        前往訂位
      </a>
      <h4 className="explanation">立即線上訂位</h4>
      <p className="sub-explanation">
        座位有限
        <br />
        立即來場讓你難忘的音樂盛宴吧
      </p>
    </>
  ),
  撰寫評論: (
    <>
      <a href={'url'} className="feature-link guide-button">
        我要評論
      </a>
      <h4 className="explanation">留下你的寶貴評論</h4>
      <p className="sub-explanation">
        哪個表演者或餐點的印象令你難忘嗎?
        <br />
        你的建議是我們進步動力
      </p>
    </>
  ),
  外送訂餐: (
    <>
      <a href={'url'} className="feature-link guide-button">
        立即訂餐
      </a>
      <h4 className="explanation">餐點外送平台</h4>
      <p className="sub-explanation">
        沒辦法到場同樂?
        <br />
        透過外送平台與現場直播也能一起同樂
      </p>
    </>
  ),
};

function FeaturesContent(prop) {
  const { featureName } = prop;

  return (
    <>
      <div className="introduction-container width-limit">
        <div className="screen-container">{screen[featureName]}</div>
        <div className="explanation-container">{explanation[featureName]}</div>
      </div>
    </>
  );
}

export default FeaturesContent;
