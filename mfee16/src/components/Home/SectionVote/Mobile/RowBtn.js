import axios from 'axios';
import { API_POST_UPDATE_CANDIDATE } from '../../../../global/constants';

// 傳送投票資料至後端
const postData = async (selectedSingerId, setVoted) => {
  const config = {
    method: 'POST',
    url: `${API_POST_UPDATE_CANDIDATE}/${selectedSingerId}`,
  };
  await axios(config);
};

// 投票按鈕 click
const handleVote = (selectedSingerId, setSelectedSingerId, setVoted) => {
  if (selectedSingerId !== null) {
    // 傳送投票資料至後端
    postData(selectedSingerId, setVoted);
    // 設定 投過票 狀態
    setVoted(true);
    // 移除選擇後之 selectedSingerId 狀態
    setSelectedSingerId(null);
  }
};

function RowBtn(prop) {
  const { selectedSingerId, setSelectedSingerId, setVoted } = prop;

  return (
    <div className="btn-row">
      <button
        className="btn-vote guide-button orange"
        onClick={() => {
          handleVote(selectedSingerId, setSelectedSingerId, setVoted);
        }}
      >
        投票
      </button>
    </div>
  );
}

export default RowBtn;
