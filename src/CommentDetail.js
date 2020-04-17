import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img alt="avatar" src={props.imageUrl()} />
      </a>
      <div className="content">
        <a className="author">{props.name}</a>
        <div className="metadata">
          <div className="date">2 days ago</div>
        </div>
        <div className="text">
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
