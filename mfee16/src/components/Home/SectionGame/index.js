import '../../../styles/home/home-section-game.scss';

function SectionGame() {
  return (
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
            src={process.env.PUBLIC_URL + '/images/home/home-tour-img-game.png'}
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
  );
}

export default SectionGame;
