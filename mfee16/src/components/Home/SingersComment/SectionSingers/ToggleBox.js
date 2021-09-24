import { v4 } from 'uuid';

function ToggleBox(prop) {
  const { singers, currentSingerId, setCurrentSingerId } = prop;

  return (
    <div className="toggle-box-container">
      {singers.map((value) => {
        return (
          <div
            key={v4()}
            className={
              value['singerId'] === currentSingerId
                ? 'toggle-box active'
                : 'toggle-box'
            }
            onClick={() => {
              setCurrentSingerId(value['singerId']);
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default ToggleBox;
