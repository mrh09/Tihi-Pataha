import React from "react";
import { Link } from "react-router-dom";
import Footerlogo from "../assets/img/favicon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-6">
              <h1>Harmonizing Digital Product Design</h1>
              <div className="footer-logo">
                <img
                  className="footer-logo"
                  src={Footerlogo}
                  alt="footer-logo"
                />
              </div>
            </div>
            <div className="col col-12 col-sm-4 col-md-2">
              <h5 className="footer-title">Features</h5>
              <ul>
                <li>
                  <Link className="footer-links" to="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="/our-team">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col col-12 col-sm-4 col-md-2">
              <h5 className="footer-title">General</h5>
              <ul>
                <li>
                  <Link className="footer-links" to="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="#">
                    Company Desk
                  </Link>
                </li>
                <li>
                  <Link className="footer-links" to="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col col-12 col-sm-4 col-md-2">
              <h5 className="footer-title">Find Us</h5>
              <ul>
                <li>Bima, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p>Copyright ©Tihi Pataha 2022. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
