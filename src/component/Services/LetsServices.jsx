import React from "react";
import { Link } from "react-router-dom";

const LetsServices = () => {
  return (
    <>
      <section className="lets-services">
        <div className="container-fluid container-md">
          <div className="hero-row row align-items-end align-items-md-center">
            <div className="col-sm-6 col-md-8 order-sm-2 order-md-2 order-lg-0 justify-content-center d-flex">
              <h1 className="mb-4">
                Ready to work your project? <br />
                Let's get to work.
              </h1>
            </div>
            <div className="col-sm-6 col-md-4 justify-content-center d-flex">
              <Link className="btn btn-secondary rounded-pill" to="/hire-us">
                Lets's work together
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsServices;
