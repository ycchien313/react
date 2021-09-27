import CommentRow from './CommentRow';
import '../../../../styles/home/home-section-comment.scss';

function SectionComment(prop) {
  const { currentSingerId } = prop;

  return (
    <section className="comment-section">
      <h2 className="title">客戶好評</h2>

      <div className="comment-card-row-container">
        {/* 左箭頭 */}
        {/* <div className="arrow-left-container">
          <i className="fas fa-caret-left"></i>
        </div> */}

        {/* 評論列 */}
        <CommentRow currentSingerId={currentSingerId} />

        {/* 右箭頭 */}
        {/* <div className="arrow-right-container">
          <i
            className="fas fa-caret-right"
            onClick={() => {
              console.log(window.scrollX);
            }}
          ></i>
        </div> */}
      </div>

      <a href={'url'} className="comment-link guide-button orange">
        撰寫評論
      </a>
    </section>
  );
}

export default SectionComment;
