import { v4 } from 'uuid';

// 點選歌手列
const handleSingerRowClick = (e, singerId, setSelectedSingerId) => {
  // 移除選擇後之邊框
  let singerRow = document.querySelectorAll('.vote-section-md .singer-row');
  singerRow.forEach((value) => value.classList.remove('active'));

  // 增加選擇後邊框
  e.currentTarget.classList.toggle('active');

  // 設定 selectedSingerId 狀態
  setSelectedSingerId(singerId);
};

function RowSingers(prop) {
  const { singers, setSelectedSingerId } = prop;

  return (
    <div className="singers-row">
      {singers.map((value) => {
        const { singerId, pictureUrl, name, votes } = value;

        return (
          <div
            key={v4}
            className="singer-row"
            onClick={(e) => {
              handleSingerRowClick(e, singerId, setSelectedSingerId);
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
