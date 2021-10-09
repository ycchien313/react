/* 外送訂餐類別資料 */
const categoryData = {
  'main-course': {
    className: 'main-course',
    imgSrc: `${process.env.PUBLIC_URL}/images/home/home-delivery-scale-green-dark.svg`,
    type: '主餐',
  },
  side: {
    className: 'side',
    imgSrc: `${process.env.PUBLIC_URL}/images/home/home-delivery-scale-green.svg`,
    type: '附餐',
  },
  dessert: {
    className: 'dessert',
    imgSrc: `${process.env.PUBLIC_URL}/images/home/home-delivery-scale-brown.svg`,
    type: '甜點',
  },
};

function RowDelivery(prop) {
  const { currentCategory, setCurrentCategory } = prop;

  return (
    <div className="delivery-row">
      <div className="categories-row">
        {Object.keys(categoryData).map((keyName, i) => {
          const { className, imgSrc, type } = categoryData[keyName];

          return (
            <div
              key={i}
              className={`category ${className} ${
                currentCategory === type ? 'active' : ''
              }`}
              onClick={() => {
                setCurrentCategory(type);
              }}
            >
              <img className="scale" src={imgSrc} alt="" />
              <span className="figcaption h3">{type}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RowDelivery;
