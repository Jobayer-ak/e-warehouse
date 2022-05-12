import React from "react";
import { Button } from "react-bootstrap";
import google from "../images/google.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "2px" }} className="bg-secondary w-50"></div>
      </div>
      <div>
        <Button className="btn btn-md btn-info w-50 mx-auto d-block p-0">
          <img style={{ width: "60px" }} src={google} alt="" />
          <span className="fs-6">Google Sign In</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
