/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Pages/Home/Home/Shared/Header/Header";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/Home/Home/Shared/Header/LeftNav/LeftNav";
import RightNav from "../Pages/Home/Home/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Container className="mt-5">
        <Row>
          <Col lg={3}><LeftNav></LeftNav></Col>

          <Col lg={6}>Main content is coming</Col>

          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Main;
