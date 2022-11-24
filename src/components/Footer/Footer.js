import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logoImg from "../../assets/header2-logo.svg";
import payOne from "../../assets/pay1.svg";
import payTwo from "../../assets/pay2.svg";
import payThree from "../../assets/pay3.svg";
import payFour from "../../assets/pay4.svg";
import "./Footer.scss";
import { BsTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import {
  AiFillMessage,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="gy-3">
          <Col md={10} sm={6} lg={3}>
            <div>
              <img src={logoImg} alt="logo" />
            </div>
          </Col>
          <Col md={4} sm={6} lg={3}>
            <h4 className="mb-4">Information</h4>
            <ul>
              <li>About Company</li>
              <li>Online Query</li>
              <li>Become Partner</li>
              <li>Help & Support</li>
              <li>Contact Channels</li>
            </ul>
          </Col>
          <Col md={4} sm={6} lg={3}>
            <h4 className="mb-4">Information</h4>
            <ul>
              <li>About Company</li>
              <li>About Company</li>
              <li>About Company</li>
              <li>About Company</li>
            </ul>
          </Col>
          <Col md={4} sm={6} lg={3}>
            <h4 className="mb-4">Reach Us</h4>
            <ul>
              <div className="d-flex align-items-center">
                <div className="icon">
                  <BsTelephoneFill />
                </div>
                <div>
                  <p className="mb-1">+880 176 1111 456</p>
                  <p className="mb-0">+880 176 1111 456</p>
                </div>
              </div>
              <div className="d-flex align-items-center my-4">
                <div className="icon">
                  <AiFillMessage />
                </div>
                <div>
                  <p className="mb-1">info@example.com</p>
                  <p className="mb-0">support@example.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="icon">
                  <GoLocation />
                </div>
                <div>
                  <p className="mb-1">168/170, Avenue 01, Mirpur</p>
                  <p className="mb-0">DOHS, Bangladesh</p>
                </div>
              </div>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-between">
          <Col lg={6}>
            <div className="d-flex">
              <h5 className="me-2">Stay Contacted:</h5>
              <ul className="d-flex">
                <li>
                  <div className="icon">
                    <AiFillFacebook />
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <AiFillTwitterCircle />
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <AiFillInstagram />
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <AiFillLinkedin />
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} className="text-end">
            <div className="d-flex align-items-center justify-content-end">
              <h5 className="me-3">Pay Safely With Us!</h5>
              <img className="me-3" src={payOne} alt="payOne" />
              <img className="me-3" src={payTwo} alt="payOne" />
              <img className="me-3" src={payThree} alt="payOne" />
              <img className="me-3" src={payFour} alt="payOne" />
            </div>
          </Col>
        </Row>
        <Row className="footer-end mt-5 py-5 pb-4">
          <Col lg={6}>
            Copyright 2022 <span className="text-main">AsRoyel</span> | Design
            By <span className="text-main">Egens Lab</span>
          </Col>
          <Col lg={6} className="text-end">
            privacy Policy | terms of Use
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
