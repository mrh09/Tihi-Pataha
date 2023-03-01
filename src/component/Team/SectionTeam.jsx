import React from "react";
import Profil2 from "../../assets/img/profile-02.png";
import Profil1 from "../../assets/img/profile-01.png";
import Profil3 from "../../assets/img/profile-03.png";
import Profil4 from "../../assets/img/profile-04.png";
import Profil5 from "../../assets/img/profile-05.png";
import Profil6 from "../../assets/img/profile-06.png";
import Profil7 from "../../assets/img/profile-07.png";
import Profil8 from "../../assets/img/profile-08.png";
import Profil9 from "../../assets/img/profile-09.png";

const SectionTeam = () => {
  return (
    <>
      <div className="team-section">
        <div className="container-fluid container-md">
          <h2>Our Team</h2>
          <div className="row">
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil1} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">Nanda Sidratul M.</h4>
                  <p className="card-text">Graphic Design</p>
                </div>
              </div>
            </div>
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil2} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">Muhammad Rizal Hidayatullah</h4>
                  <p className="card-text">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil3} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">Muhammad Fauzan</h4>
                  <p className="card-text">Animator</p>
                </div>
              </div>
            </div>
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil4} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">Abdul Karim</h4>
                  <p className="card-text">Animator</p>
                </div>
              </div>
            </div>
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil5} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">Muhammad Suardin</h4>
                  <p className="card-text">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil6} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">Ikraman</h4>
                  <p className="card-text">Illustrator</p>
                </div>
              </div>
            </div>
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil7} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">Umar Aji P.</h4>
                  <p className="card-text">UI/UX</p>
                </div>
              </div>
            </div>
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil8} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">Ahmad Hanan W.</h4>
                  <p className="card-text">Copywritting</p>
                </div>
              </div>
            </div>
            <div className="col-team col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={Profil9} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h4 className="card-title">M ALim Akbar</h4>
                  <p className="card-text">Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTeam;
