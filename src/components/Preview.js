export default function Preview(props) {
  const date = new Date();
  return (
    <div className="preview">
      <h3 className="blog-title">{props.title}</h3>
      <h4 className="blog-subtitle">{props.subtitle}</h4>
      <hr></hr>
      <p className="blog-content">{props.content}</p>
    </div>
  );
}
