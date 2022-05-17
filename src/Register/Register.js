import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import "./Register.css";

const Register = () => {
  let errorElement;
  // hooks
  const [passError, setPassError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);
  const navigate = useNavigate();

  // showing loading
  if (loading) {
    return <Loading></Loading>;
  }

  // navigate to home page after registration
  if (user) {
    navigate("/");
  }

  if (error || verificationError) {
    errorElement = error ? (
      <p className="text-danger">{error?.message}</p>
    ) : (
      <p className="text-danger">{verificationError?.message}</p>
    );
  }

  // Register new user
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirmPassword.value;
    if (confirmPass === password) {
      await createUserWithEmailAndPassword(email, password);
      await sendEmailVerification();
      toast("Sent Verification email");
    } else {
      setPassError("Your Password Didn't match!");
    }
  };

  return (
    <div className="container my-5 mx-auto">
      <h2 className="my-5 fs-2">Register</h2>
      <Form className="my-5 register-form" onSubmit={handleRegister}>
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Button variant="secondary my-5 w-50 d-block mx-auto " type="submit">
          Register
        </Button>
      </Form>
      {errorElement}
      {passError ? <p className="text-danger">Error: {passError}</p> : ""}
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-primary text-decoration-none">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
