import { useState } from 'react';
import { v4 } from 'uuid';

// 點選歌手照片
const handlePictureSelect = (singerCalendar, isActive, setIsActive, index) => {
  // 設定所有 isActive 為 false，即將所有圈選後的 border 拿掉
  let newIsActive = Array(singerCalendar.length).fill(false);
  // 將點選的 isActive 狀態改為相反(此 isActive 仍為上一次的狀態)
  newIsActive[index] = !isActive[index];
  // 將 newIsActive 設定至 isActive 狀態
  setIsActive(newIsActive);
};

function RowSingerCalendar(prop) {
  const { singerCalendar, isActive, setIsActive } = prop;

  return (
    <div className="singer-calendar-row">
      {singerCalendar.map((value, index) => {
        const { date, singerName } = value;
        const imgSrc = `${process.env.PUBLIC_URL}/images/common/${singerName}.jpg`;
        const getDate = () => {
          const dateSplit = date.split('-');
          return `${dateSplit[1]}/${dateSplit[2]}`;
        };

        return (
          <div key={v4()} className="singer-calendar">
            <h4 className="day">{getDate()}</h4>
            <img
              className={`picture ${isActive[index] ? 'active' : ''}`}
              src={imgSrc}
              alt=""
              onClick={() => {
                handlePictureSelect(
                  singerCalendar,
                  isActive,
                  setIsActive,
                  index
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RowSingerCalendar;
