import React from "react";

import Headerimg from "../Images/headerimg.png";
import "./Header.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Header() {
  return (
    <Row>
      <Col>
        <div className='headertxt imgrow'>
          <h1>
            Create Stunning
            <br></br> Email Campaigns
          </h1>
          <p className='headerp'>
            Create and launch email campaigns that captivate <br></br> your
            customers in just a few clicks.
          </p>
          <Row className='btns'>
            <Col>
              <Button className='headerbtns' id='greenbtn'>
                TRY NOW
              </Button>
              <Button className='headerbtns' id='whitebtn'>
                GET A DEMO
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
