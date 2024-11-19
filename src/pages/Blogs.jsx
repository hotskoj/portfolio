import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import BlogSnippet from "../components/BlogSnippet.jsx";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data: response } = await axios.get("/blog");
        console.log(response);
        setBlogs(
          response.map((item) => (
            <BlogSnippet
              key={item.id}
              name={item.name}
              date={item.date}
              snippet={item.snippet}
              img={item.cover}
              url={item.url}
            />
          ))
        );
      } catch (error) {}
    }
    fetchBlogs();
  }, []);

  return (
    <div className="blogs">
      <NavBar />
      <div className="container">
        <h1 className="mb-5">Blogs</h1>
        {blogs}
      </div>
      <Footer />
    </div>
  );
}
