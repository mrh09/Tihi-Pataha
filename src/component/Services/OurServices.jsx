import React from "react";
import Services1 from "../../assets/img/service-03.svg";
import Services2 from "../../assets/img/service-02.svg";
import Services3 from "../../assets/img/service-01.svg";

const OurServices = () => {
  return (
    <>
      <section className="our-services">
        <div className="container container-md">
          <p>OUR CAPABILITIES</p>
          <h2>
            Find our Capabilities that Suits <br />
            on Your Digital Product.
          </h2>
          <div className="hero-row row align-items-end align-items-md-center">
            <div className="col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block">
              <img src={Services1} alt="" />
            </div>
            <div className="col-sm-6 col-md-6">
              <h3 className="mb-4">Branding & Logo</h3>
              <p className="mb-4">
                It is through branding to identify a company in defining the
                culture and how particular companies foreseen the future
              </p>
              <div className="our-services-list">
                <ul>
                  <li>Brand Identity</li>
                  <li>Brand Styleguide</li>
                </ul>
                <ul>
                  <li>Logo Design</li>
                  <li>Marketing Material</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero-row row align-items-end align-items-md-center">
            <div className="col-sm-6 col-md-6">
              <h3 className="mb-4">Development</h3>
              <p className="mb-4">
                Transforming designs into real live websites is a valid
                indicator that beautiful designs can be created and implemented.
                QA Testing is very important to reduce any errors and issues
              </p>
              <div className="our-services-list">
                <ul>
                  <li>FrontEnd (React/Vue)</li>
                  <li>Backend (Node.js/Laravel)</li>
                </ul>
                <ul>
                  <li>Fullstack (Next.js)</li>
                  <li>QA Testing</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block">
              <img src={Services2} alt="" />
            </div>
          </div>
          <div className="hero-row row align-items-end align-items-md-center">
            <div className="col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block">
              <img src={Services3} alt="" />
            </div>
            <div className="col-sm-6 col-md-6">
              <h3 className="mb-4">Design</h3>
              <p className="mb-4">
                Designing interfaces and conducting user experience through user
                research was part of the thing in achieving best results in
                creative projects
              </p>
              <div className="our-services-list">
                <ul>
                  <li>User Interface Design</li>
                  <li>Graphic Design</li>
                </ul>
                <ul>
                  <li>User Experience Design</li>
                  <li>Motion & Animation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
