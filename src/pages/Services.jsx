import React from "react";
import FlowServices from "../component/Services/FlowServices";
import HeroServices from "../component/Services/HeroServices";
import ImgServices from "../component/Services/ImgServices";
import LetsServices from "../component/Services/LetsServices";
import OurServices from "../component/Services/OurServices";

const Services = () => {
  return (
    <>
      <HeroServices />
      {/* <ImgServices /> */}
      <FlowServices />
      <OurServices />
      <LetsServices />
    </>
  );
};

export default Services;
