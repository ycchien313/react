function RowSteps() {
  return (
    <div className="steps-row">
      <div className="step-container bg-setting">
        <figure className="scale-container">
          <img
            src={
              process.env.PUBLIC_URL + '/images/home/home-reservation-scale.svg'
            }
            alt=""
          />
        </figure>
        <span className="figcaption h3">選擇日期</span>
      </div>
      <figure className="arrow-container">
        <img
          src={
            process.env.PUBLIC_URL + '/images/home/home-reservation-arrow.svg'
          }
          alt=""
        />
      </figure>
      <div className="step-container">
        <figure className="scale-container">
          <img
            src={
              process.env.PUBLIC_URL +
              '/images/home/home-reservation-scale-gray.svg'
            }
            alt=""
          />
        </figure>
        <span className="figcaption gray h3">選擇座位</span>
      </div>
      <figure className="arrow-container">
        <img
          src={
            process.env.PUBLIC_URL + '/images/home/home-reservation-arrow.svg'
          }
          alt=""
        />
      </figure>
      <div className="step-container">
        <figure className="scale-container">
          <img
            src={
              process.env.PUBLIC_URL +
              '/images/home/home-reservation-scale-gray.svg'
            }
            alt=""
          />
        </figure>
        <span className="figcaption gray h3">選擇餐點</span>
      </div>
    </div>
  );
}

export default RowSteps;
