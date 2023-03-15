import React from "react";
import author from "../images/avatar-1.png";

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author..."></img>
            </div>
          </div>
          <div className="about-me-container col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p>
              Pellentesque in ipsum id orci porta dapibus. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui. Donec
              rutrum congue leo eget malesuada. Vivamus magna justo, lacinia
              eget consectetur sed, convallis at tellus. Cras ultricies ligula
              sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet
              et, porttitor at sem. Nulla quis lorem ut libero malesuada
              feugiat. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Praesent sapien massa, convallis a pellentesque
              nec, egestas non nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
