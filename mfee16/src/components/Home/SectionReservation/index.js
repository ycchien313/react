function SectionReservation() {
  return (
    <>
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
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
                }
                alt=""
              />
            </div>
            <div class="singer-calendar">
              <h4 class="day">09/22</h4>
              <img
                class="picture"
                src={
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
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
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
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
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
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
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
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
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
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
                  process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'
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
    </>
  );
}

export default SectionReservation;
