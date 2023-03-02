function CreatePost() {
  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form>
        <div className="form-field">
          <label>Title</label>
          <input type="text" />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input type="text" />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea></textarea>
        </div>

        <button className="create-post-button">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
