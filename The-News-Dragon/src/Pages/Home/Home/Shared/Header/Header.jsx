/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../../../../assets/logo.png";
import profile from '../../../../../assets/account.png'
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Form } from "react-router-dom";


const Header = () => {
  return (
    <Container>
      <section className="text-center mt-5">
        <img src={logo} alt="" />
        <div className="mt-2">
          <p>Journalism Without Fear or Favour</p>

          <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
      </section>
      <section className="bg-light p-3">
        <div className="d-flex">
          <Button variant="danger">Latest</Button>{" "}
          <Marquee className="text-danger">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </section>

      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <p className="">Home</p>
              </Nav.Link>
              <Nav.Link href="#action2">
                <p className="">About</p>
              </Nav.Link>
              <Nav.Link href="#action3">
                <p className="">Career</p>
              </Nav.Link>
            </Nav>

            <div className="d-flex gap-3">
              <Button variant="dark" className="px-4">LogIn</Button>

              <img src={profile} alt="" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
