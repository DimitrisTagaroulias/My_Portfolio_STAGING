import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll/modules";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>web development</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Design"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="btn-main-offer">
          <Link to="contact" offset={-110} className="nav-link" href="#">
            contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
