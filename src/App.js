import postsList from "./data";
import Post from "./components/Post/Post";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

function App() {
  /// JSX - html in javascript
  /// reactul face re-rendering doar la schimbare de state sau props!!!!

  const [posts, setPosts] = useState([]);
  console.log("postsList:", postsList);

  useEffect(() => {
    setPosts(postsList);
  }, []);

  const searchPosts = (query) => {
    if (query !== "") {
      const filteredPostsLists = posts.filter((post) => {
        return post.username.includes(query);
      });
      /// posts=filteredPosts;
      return setPosts(filteredPostsLists);
    }

    return setPosts(posts);
  };

  const likePost = (postId, isLiked) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return !isLiked
          ? { ...post, likes: post.likes + 1 }
          : { ...post, likes: post.likes - 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <SearchBar searchPosts={searchPosts} setPosts={setPosts} />
      {posts.map((post) => {
        return <Post key={post.id} post={post} likePost={likePost} />;
      })}
    </div>
  );
}

export default App;
