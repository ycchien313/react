import Header from '../../components/Header';
import Fooder from '../../components/Footer';
import SectionHero from '../../components/Home/SectionHero';
import SectionTour from '../../components/Home/SectionTour';
import SectionSingers from '../../components/Home/SectionSingers';
import SectionComment from '../../components/Home/SectionComment';
import SectionVote from '../../components/Home/SectionVote';
import SectionGame from '../../components/Home/SectionGame';
import SectionReservation from '../../components/Home/SectionReservation';
import SectionDelivery from '../../components/Home/SectionDelivery';
import '../../styles/home/home.scss';

function Home() {
  return (
    <>
      <Header />

      <main class="home">
        {/* 主視覺 */}
        <SectionHero />

        {/* 網站導覽 */}
        <SectionTour />

        {/* 下半部網頁 */}
        <div class="other-sections">
          {/* 駐唱歌手 */}
          <SectionSingers />

          {/* 客戶好評 */}
          <SectionComment />

          {/* 誰來表演 */}
          <SectionVote />

          {/* 音樂遊戲 */}
          <SectionGame />

          {/* 線上訂位 */}
          <SectionReservation />
        </div>

        {/* 外送訂餐 */}
        <SectionDelivery />
      </main>

      <Fooder />
    </>
  );
}

export default Home;
