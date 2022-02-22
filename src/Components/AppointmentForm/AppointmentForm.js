import React from "react";
import "./AppointmentForm.css";
import { Form, Button } from "react-bootstrap";

const AppointmentForm = () => {
  
  return (
    <div className="AppointmentForm ">
      <h4>APPOINTMENT FORM</h4>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name </Form.Label>
    <Form.Control type="name" placeholder="Name" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email" />
    <Form.Label>Contact No.</Form.Label>
    <Form.Control type="text" placeholder="contact" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
};

export default AppointmentForm;
