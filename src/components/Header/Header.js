import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.scss";
import Navbar from "./Navbar";
import logoImg from "../../assets/header2-logo.svg";
const Header = () => {
  return (
    <div className="header-container">
      <Container>
        <Row className="align-items-center">
          <Col
            sm={10}
            md={10}
            lg={2}
            xs={10}
            className="d-flex justify-content-between"
          >
            <div>
              <img src={logoImg} alt="logo" />
            </div>
          </Col>
          
            <Navbar/>
          
        </Row>
      </Container>
    </div>
  );
};

export default Header;
