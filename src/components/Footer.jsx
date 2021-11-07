import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import "./Footer.css";
import Logo from "../Images/Ninjamaillogo.png";

export default function Footer() {
  return (
    <Row className='footer'>
      <Col className='footerlogo' xs={5}>
        <img src={Logo} alt='logo' className="logoimg"></img>
      </Col>

      <Col className='footermenu'>
        <Nav defaultActiveKey='/home' className='flex-column'>
          <Nav.Item href='/home'>Features</Nav.Item>
          <Nav.Item eventKey='link-1'>Pricing</Nav.Item>
          <Nav.Item>Services</Nav.Item>
          <Nav.Item>Partners</Nav.Item>
        </Nav>
      </Col>
      <Col className='footermenu'>
        <Nav defaultActiveKey='/home' className='flex-column'>
          <Nav.Item href='/home'>About Us</Nav.Item>
          <Nav.Item eventKey='link-1'>Tutorials</Nav.Item>
          <Nav.Item>Resources</Nav.Item>
          <Nav.Item>Help Center</Nav.Item>
          <Nav.Item>Templates</Nav.Item>
          <Nav.Item>Case Studies</Nav.Item>
        </Nav>
      </Col>
      <Col className='footermenu'>
        <Nav defaultActiveKey='/home' className='flex-column'>
          <Nav.Item href='/home'> Medium</Nav.Item>
          <Nav.Item eventKey='link-1'>Twitter</Nav.Item>
          <Nav.Item>Facebook</Nav.Item>
          <Nav.Item>Instagram</Nav.Item>
          <Nav.Item>Linkedin</Nav.Item>
        </Nav>
      </Col>
      <Col className='footermenu'>
        <Nav defaultActiveKey='/home' className='flex-column'>
          <Nav.Item href='/home'>About Us</Nav.Item>
          <Nav.Item eventKey='link-1'>Slack</Nav.Item>
          <Nav.Item>Resources</Nav.Item>
          <Nav.Item>Jobs</Nav.Item>
        </Nav>
      </Col>
      <Row className='divider'>
        <Col xs={7} className='footertxt'>
          <h5>
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </h5>
        </Col>
        <Col className='footertxt'>
          <h5>Terms & Conditions</h5>
        </Col>
        <Col className='footertxt'>
          <h5>Privacy Policy</h5>
        </Col>
      </Row>
    </Row>
  );
}
