import { useState } from 'react';
import { v4 } from 'uuid';

const singers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 點選歌手照片
const handlePictureSelect = (isActive, setIsActive, index) => {
  let newIsActive = Array(singers.length).fill(false);
  newIsActive[index] = !isActive[index];
  setIsActive(newIsActive);
};

function RowSingerCalendar() {
  // 切換 active class 狀態
  const [isActive, setIsActive] = useState(Array(singers.length).fill(false));

  return (
    <div className="singer-calendar-row">
      {singers.map((value, index) => {
        return (
          <div key={v4()} className="singer-calendar">
            <h4 className="day">09/22</h4>
            <img
              className={`picture ${isActive[index] ? 'active' : ''}`}
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
              onClick={() => {
                handlePictureSelect(isActive, setIsActive, index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RowSingerCalendar;
