import React from "react";
import ClientHome from "../component/Home/ClientHome";
import HeroHome from "../component/Home/HeroHome";
import ProjectHome from "../component/Home/ProjectHome";
import LetsServices from "../component/Services/LetsServices";
import VideoHome from "../component/Home/VideoHome";

const Home = () => {
  return (
    <>
      <HeroHome />
      <ClientHome />
      {/* <VideoHome /> */}
      <ProjectHome />
      <LetsServices />
    </>
  );
};

export default Home;
