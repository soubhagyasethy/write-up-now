import { useState } from "react";
import { firestore } from "../firebase";
import Preview from "./Preview";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, subTitle, content);
    firestore.collection("Posts").add({
      title,
      subTitle,
      content,
      createdAt: new Date(),
    });

    setTitle("");
    setSubTitle("");
    setContent("");
  }

  return (
    <div className="create-post-container">
      <div className="create-post">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Sub Title</label>
            <input
              type="text"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <button className="create-post-button">Create Post</button>
        </form>
      </div>

      <div className="preview-container">
        <h1 className="preview-heading">Preview!</h1>
        <Preview title={title} subtitle={subTitle} content={content} />
      </div>
    </div>
  );
}

export default CreatePost;
