/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import logo from "../../../../../assets/logo.png";
import profile from '../../../../../assets/account.png'
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import NavBar from "../NavBar/NavBar";


const Header = () => {
  const {user} = useContext(AuthContext);
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
      <NavBar></NavBar>
    </Container>
  );
};

export default Header;
