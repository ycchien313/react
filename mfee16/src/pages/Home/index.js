import Header from '../../components/Header';
import Fooder from '../../components/Footer';
import '../../styles/home/home.scss';

function Home() {
  return (
    <>
      <Header />
      <main class="home">
        {/* 主視覺 */}
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
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </figure>
                <div class="singer-info">
                  <h3 class="singer-name">楊丞琳</h3>
                  <div class="show-time-container">
                    <h4 class="show-time-title">表演時間</h4>
                    <div class="show-time-content">
                      <h4 class="date">08/26</h4>
                      <h4 class="time">20:00</h4>
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

        {/* 網站導覽 */}
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
                src={
                  process.env.PUBLIC_URL + '/images/home/home-tour-img-vote.png'
                }
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
                src={
                  process.env.PUBLIC_URL + '/images/home/home-tour-img-game.png'
                }
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

        {/* 下半部網頁 */}
        <div class="other-sections">
          {/* 駐唱歌手 */}
          <section class="singers-section">
            <h2 class="title">駐唱歌手</h2>
            <div class="introduction-container width-limit">
              <div class="arrow-container left">
                <i class="fas fa-caret-left"></i>
              </div>
              <div class="screen-container">
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
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

          {/* 客戶好評 */}
          <section class="comment-section">
            <h2 class="title">客戶好評</h2>
            <div class="comment-card-row-container">
              <div class="arrow-left-container">
                <i class="fas fa-caret-left"></i>
              </div>
              <div class="comment-card-row">
                <div class="comment-card">
                  <div class="user-container">
                    <img
                      class="avatar"
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-comment-user.png'
                      }
                      alt=""
                    />
                    <span class="user-name">鄒安琪</span>
                    <span class="singer-name">楊丞琳</span>
                  </div>
                  <hr />
                  <div class="ratings-container">
                    <div class="empty-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                    <div class="full-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                  </div>
                  <div class="content-container">揚塵林真的好正</div>
                </div>
                <div class="comment-card">
                  <div class="user-container">
                    <img
                      class="avatar"
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-comment-user.png'
                      }
                      alt=""
                    />
                    <span class="user-name">鄒安琪</span>
                    <span class="singer-name">楊丞琳</span>
                  </div>
                  <hr />
                  <div class="ratings-container">
                    <div class="empty-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                    <div class="full-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                  </div>
                  <div class="content-container">揚塵林真的好正</div>
                </div>
                <div class="comment-card">
                  <div class="user-container">
                    <img
                      class="avatar"
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-comment-user.png'
                      }
                      alt=""
                    />
                    <span class="user-name">鄒安琪</span>
                    <span class="singer-name">楊丞琳</span>
                  </div>
                  <hr />
                  <div class="ratings-container">
                    <div class="empty-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                    <div class="full-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                  </div>
                  <div class="content-container">揚塵林真的好正</div>
                </div>
                <div class="comment-card">
                  <div class="user-container">
                    <img
                      class="avatar"
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-comment-user.png'
                      }
                      alt=""
                    />
                    <span class="user-name">鄒安琪</span>
                    <span class="singer-name">楊丞琳</span>
                  </div>
                  <hr />
                  <div class="ratings-container">
                    <div class="empty-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                    <div class="full-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                  </div>
                  <div class="content-container">揚塵林真的好正</div>
                </div>
                <div class="comment-card">
                  <div class="user-container">
                    <img
                      class="avatar"
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-comment-user.png'
                      }
                      alt=""
                    />
                    <span class="user-name">鄒安琪</span>
                    <span class="singer-name">楊丞琳</span>
                  </div>
                  <hr />
                  <div class="ratings-container">
                    <div class="empty-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                    <div class="full-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                  </div>
                  <div class="content-container">揚塵林真的好正</div>
                </div>
                <div class="comment-card">
                  <div class="user-container">
                    <img
                      class="avatar"
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-comment-user.png'
                      }
                      alt=""
                    />
                    <span class="user-name">鄒安琪</span>
                    <span class="singer-name">楊丞琳</span>
                  </div>
                  <hr />
                  <div class="ratings-container">
                    <div class="empty-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                    <div class="full-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
                  </div>
                  <div class="content-container">揚塵林真的好正</div>
                </div>
              </div>
              <div class="arrow-right-container">
                <i class="fas fa-caret-right"></i>
              </div>
            </div>

            <a href={'url'} class="comment-link guide-button orange">
              撰寫評論
            </a>
          </section>

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
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <figcaption class="singer-name h4">楊丞琳</figcaption>
                <figcaption class="votes h4">10票</figcaption>
              </figure>
              <figure class="singer-container">
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <figcaption class="singer-name h4">楊丞琳</figcaption>
                <figcaption class="votes h4">10票</figcaption>
              </figure>
              <figure class="singer-container">
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <figcaption class="singer-name h4">楊丞琳</figcaption>
                <figcaption class="votes h4">10票</figcaption>
              </figure>
              <figure class="singer-container">
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <figcaption class="singer-name h4">楊丞琳</figcaption>
                <figcaption class="votes h4">10票</figcaption>
              </figure>
              <figure class="singer-container">
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <figcaption class="singer-name h4">楊丞琳</figcaption>
                <figcaption class="votes h4">10票</figcaption>
              </figure>
              <figure class="singer-container">
                <img
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
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
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <span class="name">楊丞琳</span>
                <span class="votes">0票</span>
              </div>
              <div class="singer-row">
                <img
                  class="picture"
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <span class="name">楊丞琳</span>
                <span class="votes">0票</span>
              </div>
              <div class="singer-row">
                <img
                  class="picture"
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <span class="name">楊丞琳</span>
                <span class="votes">0票</span>
              </div>
              <div class="singer-row">
                <img
                  class="picture"
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <span class="name">楊丞琳</span>
                <span class="votes">0票</span>
              </div>
              <div class="singer-row">
                <img
                  class="picture"
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
                  alt=""
                />
                <span class="name">楊丞琳</span>
                <span class="votes">0票</span>
              </div>
              <div class="singer-row">
                <img
                  class="picture"
                  src={
                    process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                  }
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

          {/* 音樂遊戲 */}
          <section class="game-section">
            <div class="points-container">
              <div class="point"></div>
              <div class="point"></div>
              <div class="point"></div>
            </div>
            <div class="game-row width-limit">
              <h2>
                沒有想法？
                <br />
                來一場音樂遊戲吧！
              </h2>
              <figure class="game-container">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/images/home/home-tour-img-game.png'
                  }
                  alt=""
                />
              </figure>
            </div>
            <div class="points-container">
              <div class="point"></div>
              <div class="point"></div>
              <div class="point"></div>
            </div>
          </section>

          {/* 線上訂位 */}
          <section class="reservation-section">
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
                <h2 class="title">線上訂位</h2>
              </div>
              <h3 class="sub-title">馬上預約一場音樂與美食的饗宴！</h3>
            </div>
            <div class="reservation-row">
              <div class="steps-row">
                <div class="step-container bg-setting">
                  <figure class="scale-container">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-reservation-scale.svg'
                      }
                      alt=""
                    />
                  </figure>
                  <span class="figcaption h3">選擇日期</span>
                </div>
                <figure class="arrow-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-reservation-arrow.svg'
                    }
                    alt=""
                  />
                </figure>
                <div class="step-container">
                  <figure class="scale-container">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-reservation-scale-gray.svg'
                      }
                      alt=""
                    />
                  </figure>
                  <span class="figcaption gray h3">選擇座位</span>
                </div>
                <figure class="arrow-container">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-reservation-arrow.svg'
                    }
                    alt=""
                  />
                </figure>
                <div class="step-container">
                  <figure class="scale-container">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-reservation-scale-gray.svg'
                      }
                      alt=""
                    />
                  </figure>
                  <span class="figcaption gray h3">選擇餐點</span>
                </div>
              </div>
              <div class="seats-graph-row">
                <div class="seat-graph orange"></div>
                <div class="seat-graph green"></div>
                <div class="seat-graph yellow"></div>
              </div>
              <div class="seats-text-row">
                <span class="seats-left">剩餘座位</span>
                <div class="seats-front">
                  <span class="circle"></span>
                  <span>
                    搖滾區
                    <span class="seats-count">10</span> 席
                  </span>
                </div>
                <div class="seats-middle">
                  <span class="circle"></span>
                  <span>
                    中區
                    <span class="seats-count">20</span> 席
                  </span>
                </div>
                <div class="seats-back">
                  <span class="circle"></span>
                  <span>
                    後區
                    <span class="seats-count">20</span> 席
                  </span>
                </div>
              </div>
              <div class="singer-calendar-row">
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
                <div class="singer-calendar">
                  <h4 class="day">09/22</h4>
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="btn-container">
              <button class="next-btn guide-button pink">下一步</button>
            </div>
          </section>
          {/* 線上訂位 手機版 */}
          <section class="reservation-section-md">
            <div class="title-row">
              <h1 class="title">線上訂位</h1>
              <h4 class="sub-title">馬上預約一場音樂與美食的饗宴</h4>
            </div>
            <div class="reservation-row">
              <div class="steps-row">
                <div class="step-container bg-setting">
                  <figure class="scale-container">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-reservation-scale.svg'
                      }
                      alt=""
                    />
                  </figure>
                  <span class="figcaption h4">選擇日期</span>
                </div>
                <span class="arrow">&gt;</span>
                <div class="step-container">
                  <figure class="scale-container">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-reservation-scale-gray.svg'
                      }
                      alt=""
                    />
                  </figure>
                  <span class="figcaption gray h4">選擇座位</span>
                </div>
                <span class="arrow">&gt;</span>
                <div class="step-container">
                  <figure class="scale-container">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/images/home/home-reservation-scale-gray.svg'
                      }
                      alt=""
                    />
                  </figure>
                  <span class="figcaption gray h4">選擇餐點</span>
                </div>
              </div>
              <div class="weeks-row">
                <div class="this-week active h3">本周</div>
                <div class="next-week h3">下周</div>
              </div>
              <div class="singer-calendars-row">
                <div class="singer-calendar active">
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                  <span class="name">楊丞琳</span>
                  <span class="date">2021-09-22</span>
                </div>
                <div class="singer-calendar">
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                  <span class="name">楊丞琳</span>
                  <span class="date">2021-09-22</span>
                </div>
                <div class="singer-calendar">
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                  <span class="name">楊丞琳</span>
                  <span class="date">2021-09-22</span>
                </div>
                <div class="singer-calendar">
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                  <span class="name">楊丞琳</span>
                  <span class="date">2021-09-22</span>
                </div>
                <div class="singer-calendar">
                  <img
                    class="picture"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/home/home-hero-楊丞琳.jpg'
                    }
                    alt=""
                  />
                  <span class="name">楊丞琳</span>
                  <span class="date">2021-09-22</span>
                </div>
              </div>
            </div>
            <div class="btn-row">
              <a href={'url'} class="next-step-btn guide-button pink">
                下一步
                <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </section>
        </div>

        {/* 外送訂餐 */}
        <section class="delivery-section">
          <h2 class="title">外送訂餐</h2>
          <div class="delivery-row">
            <div class="categories-row">
              <div class="category main-course">
                <img
                  class="scale"
                  src={
                    process.env.PUBLIC_URL +
                    '/images/home/home-delivery-scale-green-dark.svg'
                  }
                  alt=""
                />
                <span class="figcaption h3">主餐</span>
              </div>
              <div class="category side">
                <img
                  class="scale"
                  src={
                    process.env.PUBLIC_URL +
                    '/images/home/home-delivery-scale-green.svg'
                  }
                  alt=""
                />
                <span class="figcaption h3">副餐</span>
              </div>
              <div class="category dessert">
                <img
                  class="scale"
                  src={
                    process.env.PUBLIC_URL +
                    '/images/home/home-delivery-scale-brown.svg'
                  }
                  alt=""
                />
                <span class="figcaption h3">甜點</span>
              </div>
            </div>
          </div>
          <div class="dishes-row">
            <div class="dish-container">
              <figure class="dish-picture">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/images/home/home-delivery-dish-hanburger.jpg'
                  }
                  alt=""
                />
              </figure>
              <div class="dish-content">
                <h4 class="dish-name">總匯潛艇堡</h4>
                <h4 class="dish-price">$200</h4>
              </div>
              <div class="btn-container">
                <button class="btn-add guide-button orange">
                  加入
                  <i class="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
            <div class="dish-container">
              <figure class="dish-picture">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/images/home/home-delivery-dish-hanburger.jpg'
                  }
                  alt=""
                />
              </figure>
              <div class="dish-content">
                <h4 class="dish-name">總匯潛艇堡</h4>
                <h4 class="dish-price">$200</h4>
              </div>
              <div class="btn-container">
                <button class="btn-add guide-button orange">
                  加入
                  <i class="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
            <div class="dish-container">
              <figure class="dish-picture">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/images/home/home-delivery-dish-hanburger.jpg'
                  }
                  alt=""
                />
              </figure>
              <div class="dish-content">
                <h4 class="dish-name">總匯潛艇堡</h4>
                <h4 class="dish-price">$200</h4>
              </div>
              <div class="btn-container">
                <button class="btn-add guide-button orange">
                  加入
                  <i class="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="btn-row">
            <a href={'url'} class="delivery-link guide-button pink">
              去訂餐
              <i class="h2 fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </section>
      </main>
      <Fooder />
    </>
  );
}

export default Home;
