import "../assets/styles/AboutMe.css";
import myImg from "../assets/images/myPic.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  const skills = [
    "Javascript",
    "React",
    "Typescript",
    "Python",
    "NodeJS/NestJS",
    "CSS",
    "HTML",
    "Jest"
  ];

  useEffect(() => {
    AOS.init({duration:500,
      easing: "ease",
    });
  },[]);

  return (

      <div className="main-content-section" id="about">

            <h3 className="section-h section-h-gen">
              <span className="section-no">01. </span>About Me
            </h3>
        <div className="section-content" >
          <div className="about-me-content">
            <p className="main-content-desc" data-aos="fade-up">
            Welcome to my portfolio! My name is Elham. As a web developer, I'm constantly learning and experimenting with new technologies, and looking for new challenges to push my skills to the next level. Here are a few technologies I have
              been working with recently:
            </p>
            <ul className="about-skills main-content-desc">
              {skills.map((skill) => (
                <li key={skill} data-aos="fade-up">{skill}</li>
              ))}
            </ul>
          </div>
              <div className="about-img-wrapper" data-aos="fade-up">
                <img className="about-img" src={myImg} alt="myImg" />
              </div>
        </div>
      </div>
  );
};

export default AboutMe;
