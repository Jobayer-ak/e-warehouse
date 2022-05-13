import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import google from "../images/google.png";
import Loading from "../Shared/Loading/Loading";

const SocialLogin = () => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
    console.log(from);
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-3">or</p>
        <div style={{ height: "2px" }} className="bg-secondary w-50"></div>
      </div>
      <div>
        <Button
          onClick={() => signInWithGoogle()}
          className="btn btn-md btn-info w-50 mx-auto d-block p-0">
          <img style={{ width: "60px" }} src={google} alt="" />
          <span className="fs-6">Google Sign In</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
