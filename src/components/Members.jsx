import React from "react";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./Members.css";
import Member from "../Images/member.png";
import Member2 from "../Images/member2.png";
import Member3 from "../Images/member3.png";

export default function Members() {
  return (
    <Row className='membersrow'>
      <Row className='allmembers'>
        <Col className='member' sm={4}>
          <img src={Member} className='memberimg'></img>
          <div className='members'>
            <h4>Frankie</h4>
            <p style={{ color: "white" }}>Member since 2012</p>
          </div>
        </Col>
        <Col className='member2' sm={4}>
          <img src={Member2} alt='img' className='memberimg'></img>
          <div className='members'>
            <h4>Camilie</h4>
            <p style={{ color: "white" }}>Member since 2012</p>
          </div>
        </Col>
        <Col className='member3' sm={4}>
          <img src={Member3} alt='img' className='memberimg'></img>
          <div className='members'>
            <h4>Elayne</h4>
            <p style={{ color: "white" }}>Member since 2012</p>
          </div>
        </Col>
      </Row>

      <h1 style={{ paddingTop: "30px", textAlign: "center" }} id='memberh1'>
        Learn how others are reaching their <br></br>audience easier than ever
        before.
      </h1>
      <Row className='formrow'>
        <InputGroup>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            className='email'
            id='email'
            style={{ width: "190px" }}
          />
          <Button id='join' className='button'>
            JOIN OUR LIST
          </Button>
        </InputGroup>
        <Form.Text className='muted'>Thanks! Email received.</Form.Text>
      </Row>
    </Row>
  );
}
