import { useEffect, useState } from "react";
import SinglePost from "./components/SinglePost";
import Time from "./components/Time";

function App() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState("");

  console.log(postId);

  //useEffect(()=>{})
  //useEffect(()=>{callback fn}, [dependencies])
  //useEffect(()=>{}, [])

  // console.log("Hello 1");

  // useEffect(() => {
  //   console.log("Hello 2");
  // });

  // console.log("Hello 3");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const handleButtonClick = (id) => {
    setPostId(id);
  };

  return (
    <div className="App">
      <Time />

      {postId ? (
        <SinglePost postId={postId} setPostId={setPostId} />
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id} style={{ margin: "80px" }}>
              <p>
                {" "}
                <strong>Title:</strong> {post.title}
              </p>
              <p>
                <strong>Body:</strong>
                {post.body}
              </p>
              <button onClick={() => handleButtonClick(post.id)}>
                Show More
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
