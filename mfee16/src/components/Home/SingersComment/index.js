import { useState } from 'react';
import SectionSingers from './SectionSingers';
import SectionComment from './SectionComment';

function SingerComment() {
  const [currentSingerId, setCurrentSingerId] = useState(null);

  return (
    <>
      <SectionSingers
        currentSingerId={currentSingerId}
        setCurrentSingerId={setCurrentSingerId}
      />
      <SectionComment currentSingerId={currentSingerId} />
    </>
  );
}

export default SingerComment;
