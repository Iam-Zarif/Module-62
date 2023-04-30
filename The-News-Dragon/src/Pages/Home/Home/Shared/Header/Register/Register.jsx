/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';

const Register = () => {
    const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
      console.log(name,email, password,confirmPassword );
    };
    return (
      <>
        <Header></Header>
        <h1>Please Register</h1>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              required
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
            />
          </Form.Group>
          <p>
            Already have an account? <Link to="/login"> LogIn</Link>
          </p>
          <Button variant="primary" type="submit">
            register
          </Button>
        </Form>
      </>
    );
};

export default Register;