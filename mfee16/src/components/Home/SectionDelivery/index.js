function SectionDelivery() {
  return (
    <section class="delivery-section">
      <h2 class="title">外送訂餐</h2>
      <div class="delivery-row">
        <div class="categories-row">
          <div class="category main-course">
            <img
              class="scale"
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-delivery-scale-green-dark.svg'
              }
              alt=""
            />
            <span class="figcaption h3">主餐</span>
          </div>
          <div class="category side">
            <img
              class="scale"
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-delivery-scale-green.svg'
              }
              alt=""
            />
            <span class="figcaption h3">副餐</span>
          </div>
          <div class="category dessert">
            <img
              class="scale"
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-delivery-scale-brown.svg'
              }
              alt=""
            />
            <span class="figcaption h3">甜點</span>
          </div>
        </div>
      </div>
      <div class="dishes-row">
        <div class="dish-container">
          <figure class="dish-picture">
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-delivery-dish-hanburger.jpg'
              }
              alt=""
            />
          </figure>
          <div class="dish-content">
            <h4 class="dish-name">總匯潛艇堡</h4>
            <h4 class="dish-price">$200</h4>
          </div>
          <div class="btn-container">
            <button class="btn-add guide-button orange">
              加入
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div class="dish-container">
          <figure class="dish-picture">
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-delivery-dish-hanburger.jpg'
              }
              alt=""
            />
          </figure>
          <div class="dish-content">
            <h4 class="dish-name">總匯潛艇堡</h4>
            <h4 class="dish-price">$200</h4>
          </div>
          <div class="btn-container">
            <button class="btn-add guide-button orange">
              加入
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div class="dish-container">
          <figure class="dish-picture">
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/home/home-delivery-dish-hanburger.jpg'
              }
              alt=""
            />
          </figure>
          <div class="dish-content">
            <h4 class="dish-name">總匯潛艇堡</h4>
            <h4 class="dish-price">$200</h4>
          </div>
          <div class="btn-container">
            <button class="btn-add guide-button orange">
              加入
              <i class="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="btn-row">
        <a href={'url'} class="delivery-link guide-button pink">
          去訂餐
          <i class="h2 fas fa-arrow-circle-right"></i>
        </a>
      </div>
    </section>
  );
}

export default SectionDelivery;
