import { useState } from 'react';
import RowTitle from './RowTitle';
import RowSingers from './RowSingers';
import RowBtn from './RowBtn';

function Mobile(prop) {
  const { singers, setVoted } = prop;
  const [selectedSingerId, setSelectedSingerId] = useState(null);

  return (
    <section className="vote-section-md">
      <RowTitle />
      <RowSingers singers={singers} setSelectedSingerId={setSelectedSingerId} />
      <RowBtn
        selectedSingerId={selectedSingerId}
        setSelectedSingerId={setSelectedSingerId}
        setVoted={setVoted}
      />
    </section>
  );
}

export default Mobile;
