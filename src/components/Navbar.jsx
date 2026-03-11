import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">

        {/* Logo / Brand */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          MyBlog
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/AddBlog">
                Add Blog
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </a>

              <ul className="dropdown-menu shadow">
                <li>
                  <a className="dropdown-item" href="#">React</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">JavaScript</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">Web Development</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/about">
                About
              </Link>
            </li>

          </ul>

          {/* Search */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search blogs..."
            />

            <button className="btn btn-warning fw-semibold">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;