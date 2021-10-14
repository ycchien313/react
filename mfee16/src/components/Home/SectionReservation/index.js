import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Mobile from './Mobile';
import {
  API_GET_SINGER_CALENDAR,
  API_GET_SEAT,
} from '../../../global/constants';
import '../../../styles/home/home-section-reservation.scss';

/* 取得後端資料 */
const fetchData = async (setSingerCalendar) => {
  const config = {
    method: 'GET',
    url: API_GET_SINGER_CALENDAR,
  };
  const response = await axios(config);

  // 格式化資料
  const formatData = () => {
    let data = [];

    response.data.forEach((value) => {
      const { date, name } = value;
      data = [...data, { date: date, singerName: name }];
    });

    return data;
  };

  setSingerCalendar(formatData());
};

/* 取得選擇後的座位數資料 */
const fetchSeatsData = async (singerCalendar, isActive, setSeats) => {
  const idx = isActive.indexOf(true);

  // 有選到才動作
  if (idx !== -1) {
    const date = singerCalendar[idx].date;

    const config = { method: 'GET', url: `${API_GET_SEAT}/${date}` };
    const response = await axios(config);
    let data = response.data;

    // 格式化資料
    const formatData = () => {
      let newData = { rock: 10, middle: 20, back: 20 };

      // 取得座位數
      data.forEach((value) => {
        const { name, remainingSeats } = value;

        if (name === '搖滾區') newData.rock = remainingSeats;
        else if (name === '中區') newData.middle = remainingSeats;
        else if (name === '後區') newData.back = remainingSeats;
      });

      return newData;
    };
    data = formatData();

    setSeats(data);
  }
};

function SectionReservation() {
  const [didMount, setDidMount] = useState(true);
  // 歌手行事曆狀態
  const [singerCalendar, setSingerCalendar] = useState([
    { date: '', singerName: '' },
  ]);
  // 座位數 狀態
  const [seats, setSeats] = useState({
    rock: 10,
    middle: 20,
    back: 20,
  });
  // 切換 active class 狀態，ex. 十位歌手就有十個 bool
  const [isActive, setIsActive] = useState(
    Array(singerCalendar.length).fill(false)
  );

  useEffect(() => {
    fetchData(setSingerCalendar);
    setDidMount(false);
  }, []);

  useEffect(() => {
    if (didMount === false) {
      fetchSeatsData(singerCalendar, isActive, setSeats);
    }
  }, [isActive]);

  return (
    <>
      {/* 線上訂位 */}
      <Table
        singerCalendar={singerCalendar}
        isActive={isActive}
        setIsActive={setIsActive}
        seats={seats}
      />

      {/* 線上訂位 手機版 */}
      <Mobile
        singerCalendar={singerCalendar}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
}

export default SectionReservation;
