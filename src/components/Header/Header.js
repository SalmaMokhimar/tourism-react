import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import logoImg from "../../assets/header2-logo.svg";


const Header = () => {

  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  function stickNavbar() {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  return (
    <div className= {`header-container ${stickyClass}`} >
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
