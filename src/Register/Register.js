import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Register = () => {
  // hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  //   console.log(email, password);

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

  // navigate to home page after registration
  if (user) {
    navigate("/");
  }

  // Register new user
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container w-50 my-5 mx-auto">
      <h2 className="my-3 fs-2">Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {error}
        <Button className="secondary w-50 d-block mx-auto my-3" type="submit">
          Register
        </Button>
      </Form>
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
