import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(() => {
    firestore
      .collection("Posts")
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log("snapshot", snapshot.data());
        setPost(snapshot.data());
      });
  });
  return (
    <div className="post-detail">
      <h3 className="blog-title">{post.title}</h3>
      <h4 className="blog-subtitle">{post.subTitle}</h4>
      <hr></hr>
      <p className="blog-content">{post.content}</p>
    </div>
  );
}

export default PostDetail;
