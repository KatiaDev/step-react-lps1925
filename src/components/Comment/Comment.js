import React from "react";
import "./Comment.css";

const Comment = (props) => {
  return (
    <div>
      <div className="comment-text">
        <span className="user">{props.comment.username}</span>{" "}
        <span className="comment">{props.comment.text}</span>
      </div>
    </div>
  );
};

export default Comment;
