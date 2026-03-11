import React, { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import axios from "axios";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios
      .get("http://localhost:5000/blogs")
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);   // ← important
        setLoading(false);
      });

  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Blog Posts</h2>

      <div className="row">

        {/* Loading */}
        {loading && (
          <div className="w-100 text-center mt-5">
            <h4 className="fw-bold text-secondary">Loading Blogs...</h4>

            <div className="spinner-border text-dark mt-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="w-100 text-center mt-5">
            <h4 className="text-danger">{error}</h4>
          </div>
        )}

        {/* Blogs */}
        {blogs && <BlogList blogs={blogs} title="Your home for all news!" />}

      </div>
    </div>
  );
}

export default Home;