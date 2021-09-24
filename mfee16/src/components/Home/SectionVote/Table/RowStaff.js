// import { useState, useEffect, useRef } from 'react';

// 點選照片
const handlePictureClick = (e, singerId, setSelectedSingerId) => {
  // 移除選擇後之邊框
  let active = document.querySelectorAll('.vote-section .picture');
  active.forEach((value) => value.classList.remove('active'));

  e.currentTarget.classList.toggle('active');
  setSelectedSingerId(singerId);
};

function Staff(prop) {
  const { singers, setSelectedSingerId } = prop;
  //   const [didMount, setDidMount] = useState(true);
  const maxVotes = singers[0].votes;

  // componentDidMount
  //   useEffect(() => {
  //     setDidMount(false);
  //   }, []);

  // componentDidUpdate
  //   useEffect(() => {
  //     if (didMount === false) {

  //     }
  //   }, []);

  return (
    <div className="staff-container">
      {singers.map((value) => {
        const { singerId, pictureUrl, name, votes } = value;
        const marginBot = (votes * 18) / maxVotes + 'vw';

        return (
          <figure
            className="singer-container"
            style={{ marginBottom: marginBot }}
          >
            <img
              className="picture"
              src={pictureUrl}
              alt=""
              onClick={(e) => {
                handlePictureClick(e, singerId, setSelectedSingerId);
              }}
            />
            <figcaption className="singer-name h4">{name}</figcaption>
            <figcaption className="votes h4">{votes}票</figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export default Staff;
