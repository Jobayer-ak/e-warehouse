import React from "react";
import "./About.css";
import member1 from "../images/members/member-1.jpg";
import member2 from "../images/members/member-2.jpg";
import member3 from "../images/members/member-3.jpg";
import member4 from "../images/members/member-4.jpg";

const About = () => {
  return (
    <div id="about" className="container">
      <h2 className="my-4">About Us</h2>
      <p className="lead my-5">
        We are providing online store service with super amazing and experience
        team. There are lots of reknown companies are using our online store
        service.Most of the team members and engineers are experienced
        persons.Our experts are always working to provide quality service.
      </p>

      <div className="members d-md-flex d-lg-flex justify-content-around align-items-center">
        <div className="member">
          <img src={member1} alt="" />
          <h5>Randolph Bell</h5>
          <p className="lead fst-italic"> C.E.O</p>
        </div>
        <div className="member">
          <img src={member2} alt="" />
          <h5>Conrad Hawkins</h5>
          <p className="lead fst-italic">Head Of Marketing</p>
        </div>
        <div className="member">
          <img src={member3} alt="" />
          <h5>Mina Fernandez</h5>
          <p className="lead fst-italic">Head Of IT</p>
        </div>
        <div className="member">
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
