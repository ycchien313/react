import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Mobile from './Mobile';
import { API_GET_VOTES } from '../../../global/constants';
import '../../../styles/home/home-section-vote.scss';

// 取得後端資料
const fetchData = async (setSingers) => {
  // axios
  const config = { method: 'GET', url: API_GET_VOTES };
  const response = await axios(config);

  // 格式化資料
  const formatData = () => {
    let data = [];

    response.data.forEach((value) => {
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

  // 設定 singers 狀態
  setSingers(formatData());
};

function SectionVote() {
  const [voted, setVoted] = useState(false);
  const [singers, setSingers] = useState([
    { singerId: '', pictureUrl: '', name: '', votes: '' },
  ]);

  // componentDidMount
  useEffect(() => {
    fetchData(setSingers);
    setVoted(false);
  }, [voted]);

  // componentDidUpdate
  // useEffect(() => {}, []);

  return (
    <>
      {/* 誰來表演 電腦版*/}
      <Table singers={singers} setVoted={setVoted} />

      {/* 誰來表演 手機版 */}
      <Mobile />
    </>
  );
}

export default SectionVote;
