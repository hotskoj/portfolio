import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import Project from "../components/Project.jsx";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data: response } = await axios.get("/project");
        console.log(response);
        setProjects(
          response.map((item) => (
            <Project
              key={item.id}
              appName={item.name}
              imgSrc={item.img}
              overview={item.description}
              git={item.git}
              prod={item.url}
            />
          ))
        );
      } catch (error) {}
    }
    fetchProjects();
  }, []);
  return (
    <div className="projects">
      <NavBar />
      <div className="container-fluid">
        <h1>Projects</h1>
        {projects}
      </div>
      <Footer />
    </div>
  );
}
