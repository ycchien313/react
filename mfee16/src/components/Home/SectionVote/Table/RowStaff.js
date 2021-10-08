/* 點選照片，使其變色(圈選狀態) */
const handlePictureClick = (
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

function Staff(prop) {
  const { singers, setSelectedSingerId, isActive, setIsActive } = prop;
  const maxVotes = singers[0].votes;

  return (
    <div className="staff-container">
      {singers.map((value, index) => {
        const { singerId, pictureUrl, name, votes } = value;
        const marginBot = (votes * 18) / maxVotes + 'vw';

        return (
          <figure
            className="singer-container"
            style={{ marginBottom: marginBot }}
          >
            <img
              className={`picture ${isActive[index] ? 'active' : ''}`}
              src={pictureUrl}
              alt=""
              onClick={() => {
                handlePictureClick(
                  singerId,
                  setSelectedSingerId,
                  isActive,
                  setIsActive,
                  index
                );
              }}
            />
            <figcaption className="singer-name h4">{name}</figcaption>
            <figcaption className="votes h4">{votes}票</figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export default Staff;
