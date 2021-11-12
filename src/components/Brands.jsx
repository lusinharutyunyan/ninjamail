import React from "react";
import { Row, Col } from "react-bootstrap";
import Logo1 from "../Images/logo1.png";
import Logo2 from "../Images/logo2.png";
import Logo3 from "../Images/logo3.png";
import Logo4 from "../Images/logo4.png";
import Logo5 from "../Images/logo5.png";
import "./Brands.css";

export default function Brands() {
  return (
    <div style={{ textAlign: "center" }} className='brands'>
      <h1 id='memberh1'>
        All the best <br></br> already use us.
      </h1>
      <Row className='brandsrow'>
        <Col lg={2} xs={6} md={2} className='brand'>
          <img src={Logo5} alt='logo'></img>
        </Col>
        <Col lg={2} xs={6} md={2} className='brand'>
          <img src={Logo4} alt='logo'></img>
        </Col>
        <Col lg={2} xs={6} md={2} className='brand'>
          <img src={Logo3} alt='logo'></img>
        </Col>
        <Col lg={2} xs={6} md={2} className='brand'>
          <img src={Logo2} alt='logo'></img>
        </Col>
        <Col lg={2} xs={12} md={2} className='brand'>
          <img src={Logo1} alt='logo'></img>
        </Col>
      </Row>
    </div>
  );
}
