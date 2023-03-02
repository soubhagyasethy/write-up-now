import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState();
  const [subtitle, setSubTitle] = useState();
  const [content, setContent] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("title: ", title);
    console.log("subtitle: ", subtitle);
    console.log("content: ", content);
  }
  return (
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
            value={subtitle}
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
  );
}

export default CreatePost;
