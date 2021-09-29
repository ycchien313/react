import { useState } from 'react';
import { v4 } from 'uuid';

const singers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function RowSingerCalendar() {
  // 切換 active class 狀態
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="singer-calendar-row">
      {singers.map((singers) => {
        return (
          <div key={v4()} className="singer-calendar">
            <h4 className="day">09/22</h4>
            <img
              className={`picture ${isActive ? 'active' : ''}`}
              src={process.env.PUBLIC_URL + '/images/home/home-hero-楊丞琳.jpg'}
              alt=""
              onClick={() => {
                // 會變成全部 class 都切換
                setIsActive(!isActive);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RowSingerCalendar;
