import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  //hooks
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // console.log(from);

  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  // navigate to where was suppose to go
  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      alert("Please Enter Your Email Address!");
    }
  };

  return (
    <div className="container w-50 mt-3 login mx-auto">
      <h2 className="my-3 fs-2">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="secondary w-50 d-block mx-auto mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        Are You New Here?{" "}
        <Link
          to="/register"
          className="text-primary text-decoration-none"
          onClick={navigateRegister}>
          Create Account
        </Link>
      </p>
      <p>
        Forget Password?{" "}
        <Link
          to="/login"
          className="text-primary text-decoration-none"
          onClick={resetPassword}>
          Reset Password
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
