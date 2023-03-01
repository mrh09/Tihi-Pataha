import React from "react";
import Image1 from "../../assets/img/services-img-1.svg";
import Image2 from "../../assets/img/services-img-2.svg";

const ImgServices = () => {
  return (
    <>
      <section className="img-services">
        <div className="container-fluid container-md">
          <div className="img-services-row row align-items-md-center">
            <div className="col-sm-6 col-md-6 justify-content-center d-flex align-self-start">
              <img src={Image1} alt="Images" />
            </div>
            <div className="col-sm-6 col-md-6 justify-content-center d-flex align-self-end">
              <img src={Image2} alt="Images" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImgServices;
