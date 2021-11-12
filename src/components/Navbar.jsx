import React from "react";
import { Row, Col, Button, Nav } from "react-bootstrap";
import NinjamailLogo from "../Images/Ninjamaillogo.png";
import "./Header.css";

export default function Navbar() {
  return (
    <Row className='navrow'>
      <Col lg={4} md={4} xs={6}>
        <img src={NinjamailLogo} alt='logo' className='logo'></img>
      </Col>
      <Col lg={8} md={8} className='nav-col' xs={6}>
        <Nav>
          <Nav.Item>
            <Nav.Link style={{ color: "black" }}>FEATURES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ color: "black" }}>PRICING</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ color: "black" }}>SERVICES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ color: "black" }}>PARTNERS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button className='signupbtn'>SIGN UP FREE</Button>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
}
