import { v4 } from 'uuid';

/* 點選歌手列，使其變色(圈選狀態) */
const handleSingerRowClick = (
  singerId,
  setSelectedSingerId,
  isActive,
  setIsActive,
  index
) => {
  // 使圈選狀態變為皆無圈選
  let newIsActive = Array(isActive.length).fill(false);
  // 圈選點選之照片
  newIsActive[index] = true;
  // 設定圈選狀態
  setIsActive(newIsActive);
  // 設定 selectedSingerId 狀態
  setSelectedSingerId(singerId);
};

function RowSingers(prop) {
  const { singers, setSelectedSingerId, isActive, setIsActive } = prop;

  return (
    <div className="singers-row">
      {singers.map((value, index) => {
        const { singerId, pictureUrl, name, votes } = value;

        return (
          <div
            key={v4()}
            className={`singer-row ${isActive[index] && 'active'}`}
            onClick={() => {
              handleSingerRowClick(
                singerId,
                setSelectedSingerId,
                isActive,
                setIsActive,
                index
              );
            }}
          >
            <img className="picture" src={pictureUrl} alt="" />
            <span className="name">{name}</span>
            <span className="votes">{votes}票</span>
          </div>
        );
      })}
    </div>
  );
}

export default RowSingers;
