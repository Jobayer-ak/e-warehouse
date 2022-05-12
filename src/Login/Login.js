import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="container w-50 my-3 mx-auto">
      <h2 className="my-3 fs-2">Please Login</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="secondary w-50 d-block mx-auto mb-2" type="submit">
          Login
        </Button>
      </Form>
      <p>
        New to Genius Car?{" "}
        <Link
          to="/register"
          className="text-primary text-decoration-none"
          // onClick={navigateRegister}
        >
          Create Account
        </Link>
      </p>
      <p>
        Forget Password?{" "}
        <Link
          to="/login"
          className="text-primary text-decoration-none"
          // onClick={resetPassword}
        >
          Reset Password
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
