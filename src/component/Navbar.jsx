import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Navlogo from "../assets/img/favicon.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={
          navbar ? "navbar active navbar-expand-lg" : "navbar navbar-expand-lg"
        }>
        <div className="container">
          <img className="navbar-logo" src={Navlogo} alt="nav-logo" />
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav navbar-item my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/projects"
                  activeclassname="active">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/services"
                  activeclassname="active">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/our-team"
                  activeclassname="active">
                  The Team
                </NavLink>
              </li>
            </ul>
            <form className="d-flex justify-content-center rounded-pill">
              <button className="btn btn-secondary rounded-pill" type="submit">
                Hire Us
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
