import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection("Posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log("posts", posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div className="home">
      <h2>Blogs</h2>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
