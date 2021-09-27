function SingersContent(prop) {
  const { singers, currentSingerId, setCurrentSingersIndex } = prop;

  return (
    <>
      {singers.map((value, index) => {
        const { singerId, name, introduction, picture } = value;

        // singerId 與 toggleBox 選到的一樣，則顯示該筆歌手資訊
        if (singerId === currentSingerId) {
          // 設定當下 singers 的位置
          setCurrentSingersIndex(index);

          return (
            <>
              {/* 歌手照片 */}
              <div className="screen-container">
                <img src={picture} alt="" />
              </div>

              {/* 歌手介紹 */}
              <div className="explanation-container">
                <h3 className="name">{name}</h3>
                <p className="explanation">{introduction}</p>
                <a href={'url'} className="more-link guide-button orange">
                  看更多
                  <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </>
          );
        }

        return '';
      })}
    </>
  );
}

export default SingersContent;
