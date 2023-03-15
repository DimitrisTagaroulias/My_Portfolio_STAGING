import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div id="personal-info" className="col-12 col-md-4 col-xl-4 pb-4">
            <div className="d-flex">
              <p>
                <strong>City:</strong> &nbsp;Athens,&nbsp;Argyroupoli
              </p>
            </div>
            <div className="d-flex">
              <p>
                <strong>Tel:</strong>
                <a id="phone-number" href="tel:694-164-7706">
                  &nbsp;(+30)6941647706
                </a>
              </p>
            </div>
            <div className="d-flex">
              <p id="footer-email">
                <strong>Email:</strong>
                &nbsp;dimitristagaroulias.webdev@gmail.com
              </p>
            </div>
          </div>
          <div id="sitemap" className="col-12 col-sm-6 col-md-6 col-xl-3 pb-5">
            <div className="row justify-content-md-center justify-content-xl-evenly">
              <div className="site-map-column col-12 col-sm-6 col-md-4 col-lg-3 col-xl-4">
                <div>
                  <a className="footer-nav">Home</a>
                </div>
                <div>
                  <a className="footer-nav">About me</a>
                </div>
                <div>
                  <a className="footer-nav">Services</a>
                </div>
              </div>
              <div className="site-map-column col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div>
                  <a className="footer-nav">Experience</a>
                </div>
                <div>
                  <a className="footer-nav">Portfolio</a>
                </div>
                <div>
                  <a className="footer-nav">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="media"
            className="col-12 col-sm-6 col-md-2 col-xl-2 pb-5 py-sm-2"
          >
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url="https://www.linkedin.com/in/dimitris-tagaroulias-229379258/"
                quote={"Frontend Web Developer"}
                hashtag="#frontendWebDeveloper"
              >
                <FacebookIcon className="mx-3" size={36}></FacebookIcon>
              </FacebookShareButton>
              <LinkedinShareButton
                url="https://www.linkedin.com/in/dimitris-tagaroulias-229379258/"
                quote={"Frontend Web Developer"}
                hashtag="#frontendWebDeveloper"
              >
                <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
              </LinkedinShareButton>
            </div>
          </div>
          <div className="col-12 col-xl-3 px-0 text-center">
            <p id="copyright" className="px-2 ps-xl-3 ps-xxl-5">
              Copyright&copy;{new Date().getFullYear()}&nbsp; Dimitris
              Tagaroulias Frontend Web Dev || All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
