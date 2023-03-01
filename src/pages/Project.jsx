import React from "react";
import ClientHome from "../component/Home/ClientHome";
import ProjectHome from "../component/Home/ProjectHome";
import HeroProject from "../component/Project/HeroProject";
import OurProject from "../component/Project/OurProject";
import LetsServices from "../component/Services/LetsServices";

const Project = () => {
  return (
    <>
      <HeroProject />
      <ProjectHome />
      <OurProject />
      <ClientHome />
      <LetsServices />
    </>
  );
};

export default Project;
