import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/blogs/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container mt-5">
      {loading && (
        <div className="text-center mt-5">
          <h4 className="fw-bold text-secondary">Loading blog...</h4>
          <div className="spinner-border text-dark mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="text-center mt-5">
          <h4 className="text-danger">{error}</h4>
        </div>
      )}

      {blog && (
        <div className="card shadow-lg border-0 p-4">
          <img
            src={`https://picsum.photos/seed/${blog.id}/900/350`}
            alt={blog.title}
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
          />

          <p className="text-muted mb-2">By {blog.author}</p>
          <h2 className="fw-bold mb-3">{blog.title}</h2>

          {blog.category && (
            <p className="badge bg-dark mb-3">{blog.category}</p>
          )}

          <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
            {blog.content}
          </p>

          <div className="mt-4 d-flex gap-2 flex-wrap">
            <Link to="/" className="btn btn-outline-dark">
              ← Back to Blogs
            </Link>

            <Link to={`/edit/${blog.id}`} className="btn btn-outline-primary">
              Edit
            </Link>

            <button onClick={handleDelete} className="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;