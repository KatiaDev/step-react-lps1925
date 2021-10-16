import React from "react";
import Comment from "../Comment/Comment";
import LikeSection from "../LikeSection/LikeSection";

import "./Post.css";

const Post = (props) => {
  ///destructurare de props
  const { post, likePost } = props;

  return (
    <div className="posts-container-wrapper">
      <div className="post-border">
        <div className="post-header">
          <div className="post-thumb-wrapper">
            <img src={post.thumbnailUrl} className="post-thumb" alt="avatar" />
          </div>

          <h2>{post.username}</h2>
        </div>
        <div className="post-image-wrapper">
          <img src={post.imageUrl} alt="post" className="post-image" />
        </div>
        <LikeSection likes={post.likes} likePost={likePost} postId={post.id} />

        <div>
          {post.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
