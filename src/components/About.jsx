import React from "react";
import "./cssforcomponents/About.css";
import PROFILE from "../assets/img.png";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={PROFILE} alt="" />
        </div>
        <div className="about-right">
          <div>
            <p style={{color:'D8D8D8'}}>
              I am an aspiring Full Stack Developer passionate about building
              dynamic and user-friendly web applications.{" "}
            </p>
            <p style={{color:'D8D8D8'}}>
              {" "}
              I’m always eager to learn new technologies and improve my skills.
              Let's connect and build something amazing!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p style={{color:'D8D8D8'}}>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p style={{color:'D8D8D8'}}>REACT JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p style={{color:'D8D8D8'}}>JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p style={{color:'D8D8D8'}}>Redux</p>
              <hr style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
      <Skills/>
    </div>
  );
};

export default About;
