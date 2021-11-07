import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Members.css";

export default function Members() {
  return (
    <Row className='membersrow'>
      <Row>
        <Col className='member'>
          <div className='members'>
            <h4>Frankie</h4>
            <p style={{ color: "white" }}>Member since 2012</p>
          </div>
        </Col>
        <Col className='member2'>
          <div className='members'>
            <h4>Camilie</h4>
            <p style={{ color: "white" }}>Member since 2012</p>
          </div>
        </Col>
        <Col className='member3'>
          <div className='members'>
            <h4>Elayne</h4>
            <p style={{ color: "white" }}>Member since 2012</p>
          </div>
        </Col>
      </Row>

      <h1 style={{ paddingTop: "20px", textAlign: "center" }} id="memberh1">
        Learn how others are reaching their <br></br>audience easier than ever
        before.
      </h1>
      <Row className="formrow">
        <Col>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Control
                type='email'
                placeholder='Enter your email'
                className='email'
              />
              <Form.Text className='muted'>Thanks! Email received.</Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Button id='greenbtn' className='button'>
            JOIN OUR LIST
          </Button>
        </Col>
      </Row>
    </Row>
  );
}
