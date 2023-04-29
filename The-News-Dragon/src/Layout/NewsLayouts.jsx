/* eslint-disable no-unused-vars */
import React from "react";

import Header from "../Pages/Home/Home/Shared/Header/Header";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/Home/Home/Shared/Header/LeftNav/LeftNav";
import RightNav from "../Pages/Home/Home/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
const NewsLayouts = () => {
  return (
    <div>
      <Header></Header>

      <Container className="mt-5">
        <Row>
          

          <Col lg={9}>
            <Outlet></Outlet>
          </Col>

          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default NewsLayouts;
