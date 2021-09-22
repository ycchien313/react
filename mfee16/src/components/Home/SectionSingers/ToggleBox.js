import { useState } from 'react';

/*
1.讀後端資料
2.計算有幾位歌手
3.依照歌手數量生成該數量之盒子
*/

const singersId = [1, 2, 3, 4, 5, 6];

function ToggleBox() {
  const [singerId, setSingerId] = useState(1);

  return (
    <div className="toggle-box-container">
      {/* <div className="toggle-box action"></div>
      <div className="toggle-box"></div>
      <div className="toggle-box"></div>
      <div className="toggle-box"></div>
      <div className="toggle-box"></div>
      <div className="toggle-box"></div> */}
      {singersId.map((item) => {
        return (
          <div
            className={singerId === item ? 'toggle-box action' : 'toggle-box'}
            onClick={() => {
              setSingerId(item);
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default ToggleBox;
