import React from "react";
import Client1 from "../../assets/img/client-01.svg";
import Client2 from "../../assets/img/client-02.svg";
import Client3 from "../../assets/img/client-03.svg";
import Client4 from "../../assets/img/client-04.svg";
import Client5 from "../../assets/img/client-05.svg";
import Client6 from "../../assets/img/client-06.svg";
import Client7 from "../../assets/img/client-07.svg";
import Client8 from "../../assets/img/client-08.svg";

const ClientHome = () => {
  return (
    <>
      <div className="client-home">
        <div className="container container-md">
          <p>OUR HAPPY CLIENT</p>
          <h2>Some of our partner and clients</h2>
          <div className="client-home-row row">
            <div className="client-home-col col-6 col-sm-3 col-md-3">
              <img src={Client1} alt="our-client" />
            </div>
            <div className="client-home-col col-6 col-sm-3 col-md-3">
              <img src={Client2} alt="our-client" />
            </div>
            <div className="client-home-col col-6 col-sm-3 col-md-3">
              <img src={Client3} alt="our-client" />
            </div>
            <div className="client-home-col col-6 col-sm-3 col-md-3">
              <img src={Client4} alt="our-client" />
            </div>
            <div className="client-home-col col-6 col-sm-3 col-md-3">
              <img src={Client5} alt="our-client" />
            </div>
            <div className="client-home-col col-6 col-sm-3 col-md-3">
              <img src={Client6} alt="our-client" />
            </div>
            <div className="client-home-col col-6 col-sm-3 col-md-3">
              <img src={Client7} alt="our-client" />
            </div>
            <div className="client-home-col col-6 col-sm-3 col-md-3">
              <img src={Client8} alt="our-client" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHome;
