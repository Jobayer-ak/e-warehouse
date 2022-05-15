import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Shared/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";

const RequireAuth = ({ children }) => {
  // hook
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);
  const location = useLocation();

  // Spinner loader
  if (loading) {
    return <Loading></Loading>;
  }
  // login is being checked
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  // email verification is being checked
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger">Your Email is not verified!</h3>
        <h5 className="text-success">Please verify your email!!</h5>
        <button
          className="btn btn-secondary"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent Email");
          }}>
          Send verificatio Email Again
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default RequireAuth;
