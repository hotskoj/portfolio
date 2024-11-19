import React, { useState, useEffect } from "react";
import terry from "../../public/images/terry.jpeg";
import walter from "../../public/images/walter.jpeg";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";

export default function About() {
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const { data: response } = await axios.get("/skills");
        setSkills(response.map((item) => <p key={item.id}>- {item.skill}</p>));
      } catch (error) {}
    }
    async function fetchHobbies() {
      try {
        const { data: response } = await axios.get("/hobbies");
        setHobbies(
          response.map((item) => (
            <p className="py-2" key={item.id}>
              {item.hobby}
            </p>
          ))
        );
      } catch (error) {}
    }
    fetchSkills();
    fetchHobbies();
  }, []);

  return (
    <div className="about container-fluid">
      <NavBar />
      <div className="row skills">
        <h1>Skills</h1>
        <div className="row justify-content-center">
          <div className="col-sm-3">{skills.slice(0, 4)}</div>
          <div className="col-sm-3">{skills.slice(4, 8)}</div>
        </div>
      </div>
      <div className="row education">
        <h1>Education | Certifications</h1>
        <p>
          Bachelor of Science, Computer Science and Psychology | Tulane
          University
        </p>
        <p>Certified System Administrator (CSA) | ServiceNow</p>
        <p>Exploit Researcher and Advance Penetration Tester (GXPN) | GIAC</p>
        <p>Penetration Tester (GPEN) | GIAC </p>
        <p>Security+ | CompTIA</p>
      </div>
      <div className="row hobbies">
        <div className="d-flex flex-column justify-content-center align">
          <h1>Hobbies</h1>
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <img id="pup-pic" src={walter} alt="Walter Pic" />
            </div>
            <div className="col-lg-6">{hobbies}</div>
            <div className="col-lg-3">
              <img id="pup-pic" src={terry} alt="Terry Pic" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
