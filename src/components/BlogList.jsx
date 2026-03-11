import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="col-12 col-sm-6 col-lg-4 mb-4" key={blog.id}>
          <div className="blog-card h-100">
            <img
              src={`https://picsum.photos/seed/${blog.id}/400/200`}
              className="blog-card-img"
              alt={blog.title}
            />

            <div className="blog-card-body">
              <h5 className="blog-card-title">{blog.title}</h5>

              <p className="blog-card-author">By {blog.author}</p>

              <p className="blog-card-text">
                {blog.content.substring(0, 70)}...
              </p>

              <Link to={`/blogs/${blog.id}`} className="blog-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;