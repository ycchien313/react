import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Mobile from './Mobile';
import '../../../styles/home/home-section-reservation.scss';

/* 取得後端資料 */
const fetchData = async (setSingerCalendar) => {
  const config = {
    method: 'GET',
    url: 'http://localhost:3001/home/calendar',
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

function SectionReservation() {
  // 歌手行事曆狀態
  const [singerCalendar, setSingerCalendar] = useState([
    { date: '', singerName: '' },
  ]);
  // 切換 active class 狀態，十位歌手就有十個 bool
  const [isActive, setIsActive] = useState(
    Array(singerCalendar.length).fill(false)
  );

  useEffect(() => {
    fetchData(setSingerCalendar);
  }, []);

  return (
    <>
      {/* 線上訂位 */}
      <Table singerCalendar={singerCalendar} isActive={isActive} setIsActive={setIsActive}/>

      {/* 線上訂位 手機版 */}
      <Mobile singerCalendar={singerCalendar} isActive={isActive} setIsActive={setIsActive} />
    </>
  );
}

export default SectionReservation;
