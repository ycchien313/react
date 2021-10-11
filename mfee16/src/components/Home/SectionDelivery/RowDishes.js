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

  // 設定 餐點資料 狀態
  setDishes(data);
  // 設定 購物車之餐點數量 狀態
  // setCount(Array(data.length).fill(0));
};

/* 取得 localStorage 之購物車資料 */
const getDataFromLocalStorage = (setCart) => {
  let cart = localStorage.getItem('cart');
  let newCart = cart !== null ? JSON.parse(cart) : [];
  setCart(newCart);
};

/* 加入至購物車 click */
const handleAddToCart = (value, cart, setCart, price, imageRealistic) => {
  let newCart = [...cart];

  // 加入商品至購物車
  if (newCart.length === 0) {
    newCart.push({
      name: value.name,
      price: price,
      img: imageRealistic,
      count: 1,
    });
  } else {
    // 加入商品至購物車
    newCart.some((item, i) => {
      const { count, name } = item;

      if (name === value.name) {
        newCart[i] = {
          name: name,
          price: price,
          img: imageRealistic,
          count: count + 1,
        };
        return true;
      } else if (i === newCart.length - 1) {
        newCart.push({
          name: value.name,
          price: price,
          img: imageRealistic,
          count: 1,
        });
        return true;
      }
    });
  }

  // 設定 購物車 狀態
  setCart(newCart);

  // 設定 localStorage
  localStorage.setItem('cart', JSON.stringify(newCart));
};

// dish-container 之 顏色 class
const dishContainerClassName = {
  主餐: 'color-green-dark',
  附餐: 'color-lightgray',
  甜點: 'color-lightpink',
};

function RowDishes(prop) {
  const { currentCategory, cart, setCart } = prop;
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
    getDataFromLocalStorage(setCart);
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
                  <button
                    className="btn-add guide-button orange"
                    onClick={() => {
                      handleAddToCart(
                        value,
                        cart,
                        setCart,
                        price,
                        imageRealistic
                      );
                    }}
                  >
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
