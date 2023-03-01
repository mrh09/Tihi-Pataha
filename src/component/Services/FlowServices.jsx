import React from "react";
import Flow1 from "../../assets/img/icons-01.svg";
import Flow2 from "../../assets/img/icons-02.svg";
import Flow3 from "../../assets/img/icons-03.svg";

const FlowServices = () => {
  return (
    <>
      <div className="flow-services">
        <div className="container container-md">
          <p>STEP BY STEP</p>
          <h2>
            We Believe in Process Sure it's a <br />
            Way for Success Goal.
          </h2>
          <div className="row">
            <div className="col-post col-12 col-sm-6 col-md-4 mt-4">
              <div className="card">
                <img src={Flow1} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h3 className="card-title">Initial step is discussion</h3>
                  <p className="card-text">
                    Every problem has a solution. We gather problems from your
                    product to find out ways to make solutions to achieve your
                    business goals
                  </p>
                </div>
              </div>
            </div>
            <div className="col-post col-12 col-sm-6 col-md-4 mt-4">
              <div className="card">
                <img src={Flow2} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h3 className="card-title">Then think about the ideas</h3>
                  <p className="card-text">
                    We decide and conclude the solution after discovering your
                    goals and problems
                  </p>
                </div>
              </div>
            </div>
            <div className="col-post col-12 col-sm-6 col-md-4 mt-4">
              <div className="card">
                <img src={Flow3} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h3 className="card-title">
                    Transform ideas to visual things
                  </h3>
                  <p className="card-text">
                    Take a comfortable seat. Let us dive in and develop your
                    product commencing from wireframing until becoming a real
                    product ready for development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowServices;
