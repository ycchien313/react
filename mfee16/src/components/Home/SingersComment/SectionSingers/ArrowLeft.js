// 箭頭 click，切換歌手資訊
const arrowClick = (
  singers,
  setCurrentSingerId,
  currentSingersIndex,
  setCurrentSingersIndex
) => {
  // 當下 singers 位置非第一個，則可動作
  if (currentSingersIndex !== 0) {
    //  設定 currentSingerId、currentSingersIndex 狀態
    setCurrentSingerId(singers[currentSingersIndex - 1]['singerId']);
    setCurrentSingersIndex(currentSingersIndex - 1);
  }
};

function ArrowLeft(prop) {
  const {
    singers,
    setCurrentSingerId,
    currentSingersIndex,
    setCurrentSingersIndex,
  } = prop;

  return (
    <div className="arrow-container left">
      <i
        className="fas fa-caret-left"
        onClick={() => {
          arrowClick(
            singers,
            setCurrentSingerId,
            currentSingersIndex,
            setCurrentSingersIndex
          );
        }}
      ></i>
    </div>
  );
}

export default ArrowLeft;
