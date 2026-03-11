import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import BlogDetails from "./pages/BlogDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;