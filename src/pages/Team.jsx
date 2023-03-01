import React from "react";
import LetsServices from "../component/Services/LetsServices";
import DescTeam from "../component/Team/DescTeam";
import HeroTeam from "../component/Team/HeroTeam";
import SectionTeam from "../component/Team/SectionTeam";

const Team = () => {
  return (
    <>
      <HeroTeam />
      <SectionTeam />
      <DescTeam />
      <LetsServices />
    </>
  );
};

export default Team;
