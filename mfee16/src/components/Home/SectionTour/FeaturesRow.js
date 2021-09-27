import { v4 } from 'uuid';

const featuresList = [
  { className: 'fas fa-tv', name: 'live 直播' },
  { className: 'fas fa-stars', name: '請誰來表演' },
  { className: 'fas fa-gamepad-alt', name: '音樂遊戲' },
  { className: 'far fa-calendar-alt', name: '線上訂位' },
  { className: 'fas fa-thumbs-up', name: '撰寫評論' },
  { className: 'fas fa-shopping-cart', name: '外送訂餐' },
];

function FeaturesRow(prop) {
  const { featureName, setFeatureName } = prop;

  return (
    <>
      <div className="features-container width-limit">
        <ul>
          {featuresList.map((item) => {
            const { className, name } = item;

            return (
              <li
                key={v4()}
                className={featureName === name ? 'active' : ''}
                onClick={() => {
                  setFeatureName(name);
                }}
              >
                <i className={className}></i>
                <h3>{name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FeaturesRow;
