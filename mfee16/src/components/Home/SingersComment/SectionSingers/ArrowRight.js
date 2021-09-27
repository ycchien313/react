// 箭頭 click，切換歌手資訊
const arrowClick = (
  singers,
  setCurrentSingerId,
  currentSingersIndex,
  setCurrentSingersIndex
) => {
  // 當下 singers 位置非最後一個，則可動作
  if (currentSingersIndex !== singers.length - 1) {
    //  設定 currentSingerId、currentSingersIndex 狀態
    setCurrentSingerId(singers[currentSingersIndex + 1]['singerId']);
    setCurrentSingersIndex(currentSingersIndex + 1);
  }
};

function ArrowRight(prop) {
  const {
    singers,
    setCurrentSingerId,
    currentSingersIndex,
    setCurrentSingersIndex,
  } = prop;

  return (
    <div className="arrow-container right">
      <i
        className="fas fa-caret-right"
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

export default ArrowRight;
