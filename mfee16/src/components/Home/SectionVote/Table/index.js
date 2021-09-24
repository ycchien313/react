import { useState } from 'react';
import RowTitle from './RowTitle';
import RowStaff from './RowStaff';
import RowBtn from './RowBtn';

function Table(prop) {
  const { singers, setVoted } = prop;
  const [selectedSingerId, setSelectedSingerId] = useState(null);

  return (
    <section className="vote-section">
      <RowTitle />
      <RowStaff singers={singers} setSelectedSingerId={setSelectedSingerId} />
      <RowBtn
        selectedSingerId={selectedSingerId}
        setSelectedSingerId={setSelectedSingerId}
        setVoted={setVoted}
      />
    </section>
  );
}

export default Table;
