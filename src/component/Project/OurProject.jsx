import React from "react";
import Lottie from "lottie-react";
import Urest from "../../assets/img/urest.json";
import Naurt from "../../assets/img/portofolio2.json";
import Logo from "../../assets/img/logo.json";
import RealSage from "../../assets/img/portofolio3.json";

const OurProject = () => {
  return (
    <>
      <div className="our-project">
        <div className="container container-md">
          <div className="row ">
            <div className="col-sm-12 col-md-6 mt-4">
              <Lottie animationData={Urest} />
            </div>
            <div className="col-sm-12 col-md-6 mt-4">
              <Lottie animationData={Naurt} />
            </div>
            <div className="col-sm-12 col-md-6 mt-4">
              <Lottie animationData={RealSage} />
            </div>
            <div className="col-sm-12 col-md-6 mt-4">
              <Lottie animationData={Logo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProject;
