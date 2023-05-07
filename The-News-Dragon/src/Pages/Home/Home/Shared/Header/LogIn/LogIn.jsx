/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import { AuthContext } from "../../../../../../Providers/AuthProvider";
import Title from "../../../../../../Hooks/Title";

const LogIn = () => {
  Title('login')
  const { LoginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    // handle form submission here
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    LoginUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error => console.log(error));
  };
  return (
    <>
      <Header></Header>
      <h1>Please login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <p>
          New to Dragon News <Link to="/register">Register</Link>
        </p>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LogIn;
