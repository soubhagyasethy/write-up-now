import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import PostDetail from "./PostDetail";
import CreatePost from "./CreatePost";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/create-Post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
