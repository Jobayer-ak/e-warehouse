import React from "react";
import "./ClientFeedBack.css";
import client from "../../../images/credit-client.png";

const ClientFeedBack = () => {
  return (
    <div className="client-section mt-5">
      <div className="container">
        <h2 className="my-3 fw-bold">What Clients Say</h2>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <img className="client-image img-fluid" src={client} alt="" />
          <p className="lead fst-italic fw-bold">
            <blockquote>
              "I like their service. The reason is that i can track my stock
              record using this website. Super easy to mantain my online
              warehouse. Thanks for providing this type of service."
            </blockquote>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedBack;
