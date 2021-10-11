import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_GET_DISH } from '../../../global/constants';

/* 取得後端資料(餐點資料) */
const fetchData = async (setDishes) => {
  const config = { method: 'GET', url: API_GET_DISH };
  const response = await axios(config);
  let data = response.data;

  // 格式化資料
  const formatData = () => {
    let newData = [];

    data.forEach((value, index) => {
      const {
        dish_id,
        name,
        type,
        price,
        introduction,
        image_realistic,
        image_illustration,
      } = value;

      newData = [
        ...newData,
        {
          dishId: dish_id,
          name: name,
          type: type,
          price: price,
          introduction: introduction,
          imageRealistic: image_realistic,
          imageIllustration: image_illustration,
        },
      ];
    });

    return newData;
  };

  data = formatData();

  setDishes(data);
};

// dish-container 之 顏色 class
const dishContainerClassName = {
  主餐: 'color-green-dark',
  附餐: 'color-lightgray',
  甜點: 'color-lightpink',
};

function RowDishes(prop) {
  const { currentCategory } = prop;
  // 餐點資料 狀態
  const [dishes, setDishes] = useState([
    {
      dishId: '',
      name: '',
      type: '',
      price: '',
      introduction: '',
      imageRealistic: '',
      imageIllustration: '',
    },
  ]);

  useEffect(() => {
    fetchData(setDishes);
  }, []);

  return (
    <div className="dishes-row">
      {dishes.map((value, i) => {
        const { name, type, price, imageRealistic } = value;
        const imgSrc = `${process.env.PUBLIC_URL}/images/common/food/${imageRealistic}`;

        return (
          <>
            {type === currentCategory && (
              <div
                className={`dish-container ${
                  type === currentCategory ? dishContainerClassName[type] : ''
                }`}
              >
                <figure className="dish-picture">
                  <img src={imgSrc} alt="" />
                </figure>
                <div className="dish-content">
                  <h4 className="dish-name">{name}</h4>
                  <h4 className="dish-price">${price}</h4>
                </div>
                <div className="btn-container">
                  <button className="btn-add guide-button orange">
                    加入
                    <i className="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default RowDishes;
