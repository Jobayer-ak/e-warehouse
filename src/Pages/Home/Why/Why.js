import React from "react";
import "./Why.css";
import db from "../../../images/db.png";

const Why = () => {
  return (
    <div className="why">
      <div className="container">
        <h2 className="fw-bold my-3">What We Provide?</h2>
        <div className="d-flex justify-content-between align-items-center gap-5">
          <p className="lead justify-content">
            Your store mantainance our concern. We provide online store
            mantainance system. Where you can add your product data as well as
            update information. It is easy to mantain and track your store
            easily from whenever you want from anywhere.
          </p>
          <img src={db} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Why;
