import React from "react";
import HeroImg from "../../assets/img/home.svg";

const HeroHome = () => {
  return (
    <>
      <section className="hero">
        <div className="container container-md">
          <div className="hero-row row align-items-end align-items-md-center">
            <div className="col-sm-6 col-md-6 order-sm-2 order-md-2 order-lg-0 d-block d-sm-none">
              <img src={HeroImg} alt="" />
            </div>
            <div className="col-sm-6 col-md-6">
              <h1 className="mb-4">
                A creative agency that provides a high-quality service in Design
                & Web Development.
              </h1>
              <p className="mb-4">
                A team of passionate designers and developers from Bima, Nusa
                Tenggara Barat
              </p>
              <div className="hero-button">
                <button className="btn btn-secondary rounded-pill mx-auto mx-sm-0">
                  Let's work together
                </button>
                <button className="btn btn-line rounded-pill mx-auto mx-sm-0">
                  See our portofolio
                </button>
              </div>
            </div>
            {/* <div className='col-sm-6 col-md-6'>
                            <img src={require('../../img/hero.svg').default} alt="" />
                        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;
