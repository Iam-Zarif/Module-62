/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Providers/AuthProvider';

const NavBar = () => {
    const {user} = useContext(AuthContext)
    return (
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                
                    <Link to="/">Home</Link>
                  
                <Nav.Link href="#action2">
                  <p className="">About</p>
                </Nav.Link>
                <Nav.Link href="#action3">
                  <p className="">Career</p>
                </Nav.Link>
              </Nav>

              <div className="d-flex gap-3">
                <Button variant="dark" className="px-4">
                  <Link to="/login">Log in</Link>
                </Button>

                <img src='' alt="" />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavBar;