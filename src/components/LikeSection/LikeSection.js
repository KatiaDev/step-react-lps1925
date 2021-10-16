import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import "./LikeSection.css";

const LikeSection = ({ likes, likePost, postId }) => {
  const [isLiked, setIsLiked] = useState(false);

  console.log("likes: ", likes);
  console.log("id: ", postId);

  const handleClick = (event) => {
    event.preventDefault();
    console.log("postId", postId);
    setIsLiked(!isLiked);
    likePost(postId, isLiked);
  };

  return (
    <div className="like-section">
      <div className="like-section-wrapper">
        {!isLiked ? (
          <FontAwesomeIcon icon={faHeart} onClick={handleClick} />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            onClick={handleClick}
            style={{ color: "red" }}
          />
        )}
      </div>
      <div className="like-section-wrapper">
        <FontAwesomeIcon icon={faComment} />
      </div>
      <div className="like-number">{`${likes} Likes`}</div>
    </div>
  );
};

export default LikeSection;
