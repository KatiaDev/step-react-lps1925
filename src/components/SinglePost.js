import React, { useEffect, useState } from "react";

const SinglePost = ({ postId, setPostId }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    if (postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((json) => setPost(json));
    }

    return;
  }, [postId]);

  return (
    <>
      <p>
        <strong> UserId: </strong>
        {post.id}
      </p>
      <p>
        <strong>PostId: </strong>
        {post.userId}
      </p>
      <p>
        <strong>Title:</strong> {post.title}
      </p>
      <p>
        <strong>Body:</strong>
        {post.body}
      </p>
      <button onClick={() => setPostId("")}>Go Back</button>
    </>
  );
};

export default SinglePost;
