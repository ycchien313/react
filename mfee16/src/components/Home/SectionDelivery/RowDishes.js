const dishesData = [1, 2, 3];

function RowDishes() {
  return (
    <div className="dishes-row">
      {dishesData.map((value, i) => {
        return (
          <div className="dish-container">
            <figure className="dish-picture">
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/images/home/home-delivery-dish-hanburger.jpg'
                }
                alt=""
              />
            </figure>
            <div className="dish-content">
              <h4 className="dish-name">總匯潛艇堡</h4>
              <h4 className="dish-price">$200</h4>
            </div>
            <div className="btn-container">
              <button className="btn-add guide-button orange">
                加入
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RowDishes;
