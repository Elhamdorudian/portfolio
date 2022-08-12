import { Link } from "react-router-dom";
import "../assets/styles/RightSBar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RightSBar = () => {

  useEffect(() => {
    AOS.init({duration:1500,
    delay:50
    });
  },[]);

  return (
    <>
      <li className="right-nav-website" >
        <Link
          to="www.google.com"
          rel="noreferrer"
          target="_blank"
          className="website-url"
          data-aos="slide-right"
        >
          www.google.com
        </Link>
      </li>
      <li>
        <div className="nav-line"></div>
      </li>
    </>
  );
};
export default RightSBar;
