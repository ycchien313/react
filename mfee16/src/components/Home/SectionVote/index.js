import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Mobile from './Mobile';
import { API_GET_VOTES } from '../../../global/constants';
import '../../../styles/home/home-section-vote.scss';

// 取得後端資料
const fetchData = async (setSingers, setIsActive) => {
  // axios
  const config = { method: 'GET', url: API_GET_VOTES };
  const response = await axios(config);
  let responseData = response.data;

  // 格式化資料
  const formatData = () => {
    let data = [];

    responseData.forEach((value) => {
      const { id, picture, name, count } = value;
      data = [
        ...data,
        {
          singerId: id,
          pictureUrl: `${process.env.PUBLIC_URL}/images/common/${picture}`,
          name: name,
          votes: count,
        },
      ];
    });

    return data;
  };

  responseData = formatData();

  // 設定 singers 狀態
  setSingers(responseData);
  // 設定 初始邊框 狀態 (未選狀態)
  setIsActive(Array(responseData.length).fill(false));
};

function SectionVote() {
  const [voted, setVoted] = useState(false);
  const [singers, setSingers] = useState([
    { singerId: '', pictureUrl: '', name: '', votes: '' },
  ]);
  const [isActive, setIsActive] = useState([]);

  // componentDidUpdate
  useEffect(() => {
    fetchData(setSingers, setIsActive);

    // 讀取完資料後改為未投票狀態
    setVoted(false);
  }, [voted]);

  return (
    <>
      {/* 誰來表演 電腦版*/}
      <Table
        singers={singers}
        setVoted={setVoted}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      {/* 誰來表演 手機版 */}
      <Mobile
        singers={singers}
        setVoted={setVoted}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}

export default SectionVote;
