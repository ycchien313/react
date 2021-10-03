import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_HOST, API_GET_COMMENTS } from '../../../../global/constants';

const singerIdToTagId = { 1: 15, 2: 14, 3: 11, 4: 12, 5: 10, 6: 13 };

// 取得後端資料
const fetchData = async (currentSingerId, setComments) => {
  // 取得後端資料
  const config = {
    method: 'GET',
    url: `${API_GET_COMMENTS}/${singerIdToTagId[currentSingerId]}`,
  };
  const response = await axios(config);

  //  格式化資料
  const formatData = () => {
    let comments = [];

    response.data.forEach((value, index) => {
      const { img, name, singer, likes, title } = value;
      comments = [
        ...comments,
        {
          avatar: `${API_HOST}${img}`,
          userName: name,
          singerName: singer,
          stars: (likes * 100) / 5 + '%',
          content: title,
        },
      ];
    });

    return comments;
  };

  // 設定 comments 狀態
  setComments(formatData());
};

function CommentRow(prop) {
  const { currentSingerId } = prop;
  const [didMount, setDidMount] = useState(true);
  const [comments, setComments] = useState([
    {
      avatar: '',
      userName: '',
      singerName: '',
      stars: '',
      content: '',
    },
  ]);

  // componentDidMount
  useEffect(() => {
    setDidMount(false);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (didMount === false && currentSingerId !== null) {
      fetchData(currentSingerId, setComments);
    }
  }, [didMount, currentSingerId]);

  return (
    <div className="comment-card-row">
      {comments.map((value) => {
        const { avatar, userName, singerName, stars, content } = value;

        return (
          <div className="comment-card">
            <div className="user-container">
              <img className="avatar" src={avatar} alt="" />
              <span className="user-name">{userName}</span>
              <span className="singer-name">{singerName}</span>
            </div>
            <hr />
            <div className="ratings-container">
              <div className="empty-stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★</div>
              <div className="full-stars" style={{ width: stars }}>
                ★&nbsp;★&nbsp;★&nbsp;★&nbsp;★
              </div>
            </div>
            <div className="content-container">{content}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentRow;
