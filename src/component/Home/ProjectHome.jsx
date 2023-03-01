import React from "react";
import Project1 from "../../assets/img/1.jpg";
import Project2 from "../../assets/img/2.jpg";
import Project3 from "../../assets/img/3.jpg";
import Project4 from "../../assets/img/4.jpg";

const ProjectHome = () => {
  return (
    <>
      <div className="project-home">
        <div className="container container-md">
          <p>OUR PORTOFOLIO</p>
          <div className="portofolio">
            <h2>See our latest projects.</h2>
            <span>
              <button className="btn btn-line rounded-pill">
                Check our portofolio
              </button>
            </span>
          </div>
          <div className="project-home-section">
            <div className="project-home-section-wrapper">
              <div className="project-home-section-wrapper-item">
                <img src={Project1} alt="project1" />
                <h3>On Solution</h3>
                <p>
                  On Solution - OnSolution offers safety solutions for the
                  healthcare and hospitality sectors.
                </p>
              </div>
              <div className="project-home-section-wrapper-item">
                <img src={Project2} alt="project2" />
                <h3>Bagi Piring</h3>
                <p>Bagi Piring - Alms platform from baznas</p>
              </div>
            </div>
            <div className="project-home-section-wrapper">
              <div className="project-home-section-wrapper-item">
                <img src={Project3} alt="project3" />
                <h3>Naurt</h3>
                <p>
                  Naurt - Plug and play software to optimise tracking accuracy
                  and location evidence in real time
                </p>
              </div>
              <div className="project-home-section-wrapper-item">
                <img src={Project4} alt="project4" />
                <h3>Aytech</h3>
                <p>Aytech - Automation Machinery Manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHome;
