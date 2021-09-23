import { useState, useEffect } from 'react';
import axios from 'axios';
import SingersContent from './SingersContent';
import ToggleBox from './ToggleBox';
import { API_GET_SINGERS } from '../../../global/constants';
import '../../../styles/home/home-section-singers.scss';

// 取得資料庫 singer 表格
const fetchData = async (setSingers, setCurrentSingerId, setDidMount) => {
  // 取得後端資料
  const config = { method: 'GET', url: API_GET_SINGERS };
  const response = await axios(config);

  // 格式化後端資料
  const formatData = () => {
    let singers = [];

    response.data.forEach((value, index) => {
      singers = [
        ...singers,
        {
          singerId: value['singer_id'],
          name: value['name'],
          introduction: value['introduction'],
          picture: `${process.env.PUBLIC_URL}/images/common/${value['picture']}`,
        },
      ];
    });

    // 設定目前的 singerId
    setCurrentSingerId(singers[0]['singerId']);

    return singers;
  };

  // 設定 singers 狀態
  setSingers(formatData());

  // 設定 didMount 狀態
  setDidMount(false);
};

function SectionSingers() {
  const [didMount, setDidMount] = useState(true);
  const [currentSingerId, setCurrentSingerId] = useState(null);
  const [singers, setSingers] = useState([
    {
      singerId: '',
      name: '',
      introduction: '',
      picture: '',
    },
  ]);

  // componentDidMount
  useEffect(() => {
    fetchData(setSingers, setCurrentSingerId, setDidMount);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (didMount === false) {
      // console.log(singers);
    }
  }, [didMount]);

  return (
    <section className="singers-section">
      <h2 className="title">駐唱歌手</h2>
      <div className="introduction-container width-limit">
        {/* 手機版，左箭頭 */}
        <div className="arrow-container left">
          <i className="fas fa-caret-left"></i>
        </div>

        {/* 歌手照片、歌手介紹  */}
        <SingersContent singers={singers} currentSingerId={currentSingerId} />

        {/* 手機版，右箭頭 */}
        <div className="arrow-container right">
          <i className="fas fa-caret-right"></i>
        </div>
      </div>

      {/* 切換歌手按鈕 */}
      <ToggleBox
        singers={singers}
        currentSingerId={currentSingerId}
        setCurrentSingerId={setCurrentSingerId}
      />
    </section>
  );
}

export default SectionSingers;
