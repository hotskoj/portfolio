import React from "react";
import NavBar from "../components/NavBar.jsx";
import profilePic from "../../public/images/profilePic.jpeg";

export default function Home() {
  return (
    <div className="home">
      <div className="container-fluid header">
        <NavBar nav="dark" />
        <div className="container">
          <h1>Jessica Hotsko</h1>
          <h2>Software Developer</h2>
        </div>
      </div>
      <div className="row intro">
        <div className="d-flex flex-column align-items-center">
          <img id="profile-pic" src={profilePic} alt="Profile Pic" />
          <div className="container">
            <p className="pt-5">
              Welcome to my portfolio! I’m Jessica, a software developer and
              U.S. Air Force veteran. Here, you can explore my resume and
              projects that showcase my skills and passion for creating
              innovative solutions. Feel free to reach out if you’d like to
              connect or collaborate!
            </p>
            <div>
              <a href="mailto: jessianne001@email.com">
                {" "}
                jessianne001@email.com
              </a>{" "}
              |{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jessica-hotsko-a487352a3/"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a target="_blank" href="https://github.com/hotskoj">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
