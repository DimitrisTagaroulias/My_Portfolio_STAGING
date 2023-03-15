import React from "react";
import logo from "../images/logo_H150.png";
import { Link } from "react-scroll/modules";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo..." className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to="home" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" offset={-110} className="nav-link" href="#">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="services" offset={-110} className="nav-link" href="#">
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="experience" offset={-110} className="nav-link" href="#">
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" offset={-110} className="nav-link" href="#">
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" offset={-110} className="nav-link" href="#">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
