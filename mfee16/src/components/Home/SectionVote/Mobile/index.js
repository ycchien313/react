import { useState } from 'react';
import RowTitle from './RowTitle';
import RowSingers from './RowSingers';
import RowBtn from './RowBtn';

function Mobile(prop) {
  const { singers, setVoted, isActive, setIsActive } = prop;
  const [selectedSingerId, setSelectedSingerId] = useState(null);

  return (
    <section className="vote-section-md">
      <RowTitle />
      <RowSingers
        singers={singers}
        setSelectedSingerId={setSelectedSingerId}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <RowBtn
        selectedSingerId={selectedSingerId}
        setSelectedSingerId={setSelectedSingerId}
        setVoted={setVoted}
      />
    </section>
  );
}

export default Mobile;
