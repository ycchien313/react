import { useState } from 'react';
import FeaturesRow from './FeaturesRow';
import FeaturesContent from './FeaturesContent';
import '../../../styles/home/home-section-tour.scss';

function SectionTour() {
  const [featureName, setFeatureName] = useState('live 直播');

  return (
    <section className="tour-section">
      <h2 className="title">網站導覽</h2>

      {/* 功能列 */}
      <FeaturesRow featureName={featureName} setFeatureName={setFeatureName} />

      {/* 功能內容 */}
      <FeaturesContent featureName={featureName}/>
    </section>
  );
}

export default SectionTour;
