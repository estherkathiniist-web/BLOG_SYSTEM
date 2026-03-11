import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">
        <small>
          © {new Date().getFullYear()} MyBlog | Built with React
        </small>
      </div>
    </footer>
  );
};

export default Footer;