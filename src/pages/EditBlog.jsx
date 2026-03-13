import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setTitle(res.data.title);
        setCategory(res.data.category);
        setContent(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const blog = { author, title, category, content };

    axios
      .put(`http://localhost:5000/blogs/${id}`, blog)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center p-2">
        <div className="col-md-7 card shadow-lg p-4">
          <h4 className="text-center text-muted mb-4">
            Edit Blog Here
          </h4>

          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Author's Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="e.g Essy"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                type="text"
                placeholder="e.g AI and its usage"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Category</label>
              <select
                className="form-select"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose category</option>
                <option value="React">React</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Web Development">Web Development</option>
                <option value="AI">AI</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Type your content here!</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Write your blog content here..."
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <button className="btn btn-outline-info w-100 btn-sm">
                Update Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;