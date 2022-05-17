import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact">
      <h2 className="my-4">Contact Us</h2>
      <Form className="w-md-50 w-50 mx-auto">
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Full Name" required />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Company Name" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="number" placeholder="Phone Number" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Country" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Business Type" required />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Permanent Address" required />
        </Form.Group>

        <Button variant="secondary mt-2 mb-5" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
