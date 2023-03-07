import { firestore } from "../firebase";
import Preview from "./Preview";
import useFormInput from "./Hooks";

function CreatePost() {
  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");

  function handleSubmit(e) {
    e.preventDefault();
    firestore.collection("Posts").add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post-container">
      <div className="create-post">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input {...title} />
          </div>

          <div className="form-field">
            <label>Sub Title</label>
            <input {...subTitle} />
          </div>

          <div className="form-field">
            <label>Content</label>
            <textarea {...content}></textarea>
          </div>

          <button className="create-post-button">Create Post</button>
        </form>
      </div>

      <div className="preview-container">
        <h1 className="preview-heading">Preview!</h1>
        <Preview
          title={title.value}
          subtitle={subTitle.value}
          content={content.value}
        />
      </div>
    </div>
  );
}

export default CreatePost;
