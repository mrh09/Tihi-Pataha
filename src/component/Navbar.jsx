import { React, useState } from "react";
import UseScrollDirection from "./UseScrollDirection";
import { NavLink, Link } from "react-router-dom";
import Navlogo from "../assets/img/header-logo.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const scrollDirection = UseScrollDirection();

  return (
    <>
      <nav
        className={`navbar ${
          scrollDirection === "down" ? "" : "active"
        } navbar-expand-lg`}>
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
                <NavLink
                  to="/"
                  className="nav-link d-sm-none"
                  activeclassname="active">
                  <span
                    data-bs-target="#navbarScroll"
                    data-bs-toggle="collapse">
                    Home
                  </span>
                </NavLink>
                <NavLink
                  className="nav-link d-none d-sm-block"
                  to="/"
                  activeclassname="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className="nav-link d-sm-none"
                  activeclassname="active">
                  <span
                    data-bs-target="#navbarScroll"
                    data-bs-toggle="collapse">
                    Projects
                  </span>
                </NavLink>
                <NavLink
                  className="nav-link d-none d-sm-block"
                  to="/projects"
                  activeclassname="active">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link d-sm-none"
                  activeclassname="active">
                  <span
                    data-bs-target="#navbarScroll"
                    data-bs-toggle="collapse">
                    Services
                  </span>
                </NavLink>
                <NavLink
                  className="nav-link d-none d-sm-block"
                  to="/services"
                  activeclassname="active">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/our-team"
                  className="nav-link d-sm-none"
                  activeclassname="active">
                  <span
                    data-bs-target="#navbarScroll"
                    data-bs-toggle="collapse">
                    The Team
                  </span>
                </NavLink>
                <NavLink
                  className="nav-link d-none d-sm-block"
                  to="/our-team"
                  activeclassname="active">
                  The Team
                </NavLink>
              </li>
            </ul>
            <form className="d-flex justify-content-center rounded-pill">
              <Link
                to="/hire-us"
                className="btn btn-secondary rounded-pill d-sm-none"
                activeclassname="active">
                <span data-bs-target="#navbarScroll" data-bs-toggle="collapse">
                  Hire Us
                </span>
              </Link>
              <Link
                className="btn btn-secondary rounded-pill d-none d-sm-block"
                to="/hire-us">
                Hire Us
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
