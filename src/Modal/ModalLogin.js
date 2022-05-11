import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./Modal.css";

const ModalLogin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="mt-1 text-white" variant="info" onClick={handleShow}>
        LOGIN
      </Button>

      <Modal className="modal-form" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Email" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Control type="password" placeholder="Password" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Login</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalLogin;
